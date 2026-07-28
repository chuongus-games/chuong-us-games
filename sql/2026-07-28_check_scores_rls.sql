-- Diagnostic for risk #2 (2026-07-28 audit): never verified whether a signed-in
-- user can INSERT/UPDATE public.scores directly (bypassing the submit_score RPC)
-- to fake their own leaderboard entry. This query is READ-ONLY — it only lists the
-- current RLS policies, it does not change anything. Run in Supabase SQL Editor
-- and paste the result back so it can be reviewed.

select polname as policy_name,
       cmd as command,
       roles,
       qual as using_expression,
       with_check as with_check_expression
from pg_policies
where schemaname = 'public' and tablename = 'scores'
order by cmd;

-- What to look for:
--   - An INSERT or UPDATE policy with roles including "authenticated" and no
--     using/with_check expression at all (or one that isn't "auth.uid() = user_id")
--     means a signed-in user CAN write arbitrary rows/scores for themselves or
--     others directly, bypassing submit_score's validation entirely.
--   - If there is no INSERT/UPDATE policy for "authenticated" at all, direct writes
--     are blocked and only the SECURITY DEFINER submit_score RPC can write scores —
--     that's the safe state already assumed to be true, this just confirms it.
