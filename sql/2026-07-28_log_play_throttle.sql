-- Fix for risk #1 (2026-07-28 audit): log_play had no auth requirement and no
-- rate limit of its own (only the site-wide Vercel 300 req/60s/IP firewall rule),
-- so a script could inflate a game's play count indefinitely.
--
-- Adds a per-identity (signed-in: auth.uid(), guest: client-generated UUID from
-- localStorage, see CUG.clientId() in js/app.js) minimum interval between counted
-- plays for the same game. Reconstructs log_play's existing behavior (validate
-- game id against public.games, upsert game_plays) from project memory/docs —
-- there was no SQL file for the previous version, please diff against the current
-- function in the Supabase dashboard before running if you want to double check.
--
-- Run this whole file in the Supabase SQL Editor for project lvirausgablhtmcqdblj.

create table if not exists public.play_log_throttle (
  identity text not null,
  game     text not null,
  last_at  timestamptz not null default now(),
  primary key (identity, game)
);

alter table public.play_log_throttle enable row level security;
-- no policies added on purpose: this table is only ever touched from inside the
-- SECURITY DEFINER function below, never directly by anon/authenticated clients.

create or replace function public.log_play(p_game text, p_client_id text default null)
returns void
language plpgsql
security definer
set search_path = public
as $$
declare
  v_identity text := coalesce(auth.uid()::text, nullif(trim(p_client_id), ''));
  v_last timestamptz;
  v_min_interval interval := interval '20 seconds';
begin
  if not exists (select 1 from public.games where id = p_game) then
    raise exception 'unknown game';
  end if;

  -- no identity at all (e.g. localStorage blocked) — nothing to throttle against,
  -- just skip counting rather than let it through unthrottled
  if v_identity is null then
    return;
  end if;

  select last_at into v_last
    from public.play_log_throttle
    where identity = v_identity and game = p_game
    for update;

  if v_last is not null and now() - v_last < v_min_interval then
    return; -- throttled: silently no-op, same "fail quiet" contract the RPC already has
  end if;

  insert into public.play_log_throttle (identity, game, last_at)
    values (v_identity, p_game, now())
    on conflict (identity, game) do update set last_at = excluded.last_at;

  insert into public.game_plays (game, plays)
    values (p_game, 1)
    on conflict (game) do update set plays = public.game_plays.plays + 1;
end;
$$;

grant execute on function public.log_play(text, text) to anon, authenticated;

-- housekeeping: old throttle rows are tiny (28 games x active identities) and cheap
-- to keep forever, no cleanup job needed at current scale.
