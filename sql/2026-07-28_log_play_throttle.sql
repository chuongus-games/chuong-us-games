-- Fix for risk #1 (2026-07-28 audit): log_play had no auth requirement and no
-- rate limit of its own (only the site-wide Vercel 300 req/60s/IP firewall rule),
-- so a script could inflate a game's play count indefinitely.
--
-- Adds a per-identity (signed-in: auth.uid(), guest: client-generated UUID from
-- localStorage, see CUG.clientId() in js/app.js) minimum interval between counted
-- plays for the same game.
--
-- Confirmed the exact current definition via the Management API before writing this
-- (2026-07-28) — original is `language sql`, single insert with `where exists (...)`,
-- SILENTLY no-ops for an unknown game id (does NOT raise). Preserved that behavior
-- below instead of raising, to stay behavior-compatible; only the throttle is new.
--
-- APPLIED 2026-07-28 via the Supabase Management API (project lvirausgablhtmcqdblj).
-- Kept here for the record / to re-apply on another environment if ever needed.
--
-- IMPORTANT lesson learned while applying this: `create or replace function
-- log_play(p_game text, p_client_id text default null)` does NOT replace the old
-- `log_play(p_game text)` — different arg count means a different overload, so both
-- existed at once. Since the new param has a DEFAULT, PostgREST couldn't tell which
-- overload a 1-arg call meant and returned 300 Multiple Choices for EVERY call using
-- the old signature (i.e. every page still running the old deployed JS) until the
-- old overload was dropped below. Always drop the old overload in the same
-- transaction/session as adding a new one with a default that creates ambiguity.

drop function if exists public.log_play(text);

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
  -- matches original behavior: unknown game id is a silent no-op, not an error
  if not exists (select 1 from public.games where id = p_game) then
    return;
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
