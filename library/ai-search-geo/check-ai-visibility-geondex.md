---
name: "check-ai-visibility"
description: "Check whether Perplexity, ChatGPT, Claude, Gemini and Grok cite a website when a buyer asks a question, at what position, who they cite instead, and what changed since the last identical check. Use when the user asks \"does AI cite my site\", \"am I in ChatGPT / Perplexity / Claude / Gemini / Grok answers\", \"who do AI engines recommend instead of me\", \"did my AI visibility change\", or wants to re-check or compare AI citations over time for a domain and a question."
category: "ai-search-geo"
platforms: ["unspecified"]
platform_source: "none"
repo: "Geondex/skills"
repo_url: "https://github.com/Geondex/skills"
source: "https://github.com/Geondex/skills/blob/HEAD/skills/check-ai-visibility/SKILL.md"
raw_source: "https://raw.githubusercontent.com/Geondex/skills/HEAD/skills/check-ai-visibility/SKILL.md"
ref: "HEAD"
discovered_via: "github-search"
license: "MIT"
stars: 0
collected: "2026-11-14"
---

<!-- Unspecified skill · Geondex/skills · skills/check-ai-visibility/SKILL.md · MIT
     Source: https://github.com/Geondex/skills/blob/HEAD/skills/check-ai-visibility/SKILL.md
     Detected by: none · Regenerated on every run; edit the upstream skill, not this copy. -->

# Check AI visibility

Answer one question for the user: "When a buyer asks this, do AI engines cite my site?" One call asks all five engines, compares their citations, and stores the result so the next check shows what changed.

Shared details (auth, errors, limits): see the `geondex-api` skill.

## When to use

- The user has a domain and a buyer question, and wants to know if AI engines cite the domain.
- The user wants to know who is cited instead (competitors).
- The user wants to see what changed since last time.

If the user has no question yet, use `find-buyer-prompts` first.

## Prerequisites

- `GEONDEX_API_KEY` is set (see `geondex-api`).
- A domain without scheme, like `example.com`.
- A buyer question, 3 to 300 characters. Write it the way a real buyer would ask an AI, for example `best CRM for a 5-person agency`, not a keyword like `crm agency`.

## Workflow

### 1. Look at history first (free)

A stored result may already answer the question. History is free.

```bash
curl -s -G https://geondex.com/api/v1/history -H "Authorization: Bearer $GEONDEX_API_KEY" --data-urlencode "domain=example.com" --data-urlencode "prompt=best CRM for a 5-person agency" --data-urlencode "limit=5"
```

Leave out `prompt` to list every stored check for the domain. `limit` is 1 to 100 (default 20).

Response: `data.batches`, newest first. Each batch has `batchId`, `prompt`, `createdAt` (ms since epoch) and `engines`, a list of `{ engine, status, cited, position }`.

If the newest batch for this question is recent (for example, from today or this week) and the user did not ask for a fresh check, show it and stop. Say when it was checked.

### 2. Tell the user the cost

`check_visibility` costs **each engine's model credits (2-64), only for engines that answer - all five on their default models cost 57 credits together**. An engine that times out is free. To save credits, ask only the engines the user cares about with `engines` (values: `perplexity`, `openai`, `claude`, `gemini`, `grok`; `openai` is ChatGPT). You can also pick a stronger model per engine with the optional `models` input, for example `{"models":{"openai":"gpt-5.6-sol"}}` - that engine then costs more credits. If you do not know the balance, call `GET /me` first.

### 3. Run the check

```bash
curl -s --max-time 90 https://geondex.com/api/v1/check -H "Authorization: Bearer $GEONDEX_API_KEY" -H "content-type: application/json" -d '{"domain":"example.com","prompt":"best CRM for a 5-person agency"}'
```

Only two engines (10 credits on default models):

```bash
curl -s --max-time 90 https://geondex.com/api/v1/check -H "Authorization: Bearer $GEONDEX_API_KEY" -H "content-type: application/json" -d '{"domain":"example.com","prompt":"best CRM for a 5-person agency","engines":["perplexity","openai"]}'
```

It can take up to 30 seconds (45 with a stronger model). If the question contains a single quote, build the body with `jq -n --arg p "$PROMPT" '{domain:"example.com",prompt:$p}'` and pipe it to `curl -d @-`.

### 4. Read the result

Read `summary` first. It already says who cites the domain, who does not, and what changed. Example:

```text
example.com cited by 2 of 5 engines that answered (perplexity #2, openai #3). Not cited by claude, gemini, grok. Since 7 days ago: openai #5 → #3; claude dropped you.
```

Then use `data`:

- `data.engines[]`, one per engine:
  - `engine`, `status` (`ok`, `timeout` or `error`)
  - `model`: the model that answered (or was asked, on timeout/error) - the engine's default unless you set `models`
  - `cited`: true when the domain is in this engine's citations
  - `position`: 1-based place in this engine's own citation list, `null` when not cited
  - `citations[]`: `{ url, host, title, position }`, every source the engine cited
  - `answerExcerpt`: the start of the engine's answer
- `data.citedInstead[]`: `{ host, engines }`, the other sites cited, sorted by how many engines cite them (up to 10). These are the real competitors for this question.
- `data.delta`: the change since the last identical check.
  - `firstCheck: true` means there is nothing to compare yet.
  - `checkedAt`: when the earlier check ran.
  - `perEngine[]`: `{ engine, citedBefore, citedNow, positionBefore, positionNow }`.
- `credits.charged` and `credits.remaining`.

"Identical check" means the same account, the same domain and the same question. Case, extra spaces and a final `?` or `.` are ignored. Change the wording and it is a new question with no delta. Changing the `models` input for an engine also resets its delta - that engine's next check is treated as a first check.

Only engines with `status: "ok"` count. A `timeout` or `error` is not "not cited". It means that engine gave no answer this time. Say so.

### 5. Present it to the user

Keep it short:

1. The summary line.
2. A small table: engine, cited (yes/no), position, top cited source.
3. "Cited instead": the top 3 to 5 hosts from `citedInstead` and which engines cite them.
4. What changed (from `delta`), or "First check - run it again later to see changes."
5. Credits used and credits left.

Do not compare `position` across engines. Each engine has its own list. Compare one engine with itself over time.

## When to re-check

- Answers from AI engines change from day to day. A weekly or monthly re-check is usually enough.
- Re-check after the user changes the page, gets new mentions on other sites, or fixes crawler access.
- Before a re-check, run `history` (free) and tell the user when the last check was.

## Next steps

- Not cited anywhere: run `audit-ai-readiness` on the page that should be cited. Also look at the `citedInstead` sites. AI engines cite pages that other sites mention and link to, so being mentioned on those sites often matters more than on-page changes.
- Compare with Google for the same question: `keyword-and-rank-research`.

## Errors

- `402 credits_exhausted`: show the message. The user can upgrade or buy a pack at <https://geondex.com/account>. Suggest fewer `engines`.
- `400 engine_unavailable`: the message lists the engines that are available. Retry with those.
- `429 spend_ceiling`: the daily limit on checks was reached. Try again tomorrow.
- Full table: `geondex-api`.
