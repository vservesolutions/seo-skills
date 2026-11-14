---
name: "researching-seo-competitors"
description: "Researches who a site competes with in search using Convertlyft's stored SEO data and, where that does not cover the question, live research on any domain (bought live, included in the plan), covering the tiered competitor list, the searches rivals win, rankings beside rivals, backlink gaps, AI-assistant mentions, stored briefs and the cross-site matrix for multi-workspace members, and records competitor and keyword choices only with the owner's yes. Use when someone asks who their search competitors are, why a rival outranks them, which searches to go after, or wants to pin, dismiss or track…"
category: "analytics-measurement"
platforms: ["claude-code"]
platform_source: "declared"
repo: "Convertlyft/skills"
repo_url: "https://github.com/Convertlyft/skills"
source: "https://github.com/Convertlyft/skills/blob/HEAD/skills/researching-seo-competitors/SKILL.md"
raw_source: "https://raw.githubusercontent.com/Convertlyft/skills/HEAD/skills/researching-seo-competitors/SKILL.md"
ref: "HEAD"
discovered_via: "github-search"
license: "MIT"
stars: 1
collected: "2026-11-14"
---

<!-- Claude Code skill · Convertlyft/skills · skills/researching-seo-competitors/SKILL.md · MIT
     Source: https://github.com/Convertlyft/skills/blob/HEAD/skills/researching-seo-competitors/SKILL.md
     Detected by: declared · Regenerated on every run; edit the upstream skill, not this copy. -->

# Researching SEO competitors

Steps 0 to 4 read stored rows: research the workspace already bought and checks already run. They
ask no provider anything and buy nothing. Step 4b is different: those tools buy live answers from
the search-data provider, included in the plan inside a daily limit. Needs a signed-in workspace with `reports:read`;
on 401 see `getting-started-with-convertlyft`, on 403 `insufficient_scope` name the scope the
answer lists. For general SEO method, see `improving-search-rankings`; for a site-wide audit, see
`auditing-site-seo`.

## Who competes for one search (the quick answer)

When the ask names one search ("who are my competitors for notary near me"), the
live results page answers it. Eight calls is plenty.

1. `cvl_seo_serp` for the search (a stored answer is free; `dry_run: true`
   shows the cost first). Its `this_site` says where this site sits, or
   `position: null` when it is not on page one; `cvl_seo_rank` gives the
   tracked position below page one, with its date.
2. List who holds the page: the map pack in `features` (businesses by name,
   rating, reviews — it sits above the organic results) and each organic
   result. Label each one: a business like this one, a directory, a government
   or official page, or social. A government page or a directory takes a place
   but is not a rival to copy.
3. For the 3 to 5 business rivals, put their `title` and `description` (the
   snippet) beside this site's own (`cvl_call_read` with `cvl_page_content`)
   and say what they promise that this page does not. Domain size
   (`cvl_seo_domain_overview`, bought live) only if the owner asks; say
   "estimated".
4. Report a table — place, who, type, title and snippet — then this site's
   position and the gap. The stored competitor list (`cvl_seo_competitors`)
   is the long-run view across every tracked search: name it separately,
   never merge it into the live page.

## Step 0 — Is the data there?

Call `cvl_seo_flow`. It says whether keywords, competitors, to-dos and SEO content briefs are done,
running, waiting for the daily limit, or failed with a reason. If a step has not run, say so —
"no competitors yet" is not "no competition".

**Nothing tracked yet.** When the competitor list, the keyword list and rank tracking are all empty,
there is nothing stored to read. Say that plainly, then offer the two ways forward: with the owner's
yes, start the SEO chain with `cvl_seo_run_flow` or add the searches that matter with
`cvl_seo_add_keywords` and `cvl_seo_track_keywords` (Step 5); or answer one question now with a
live research tool (Step 4b). The chain and the live tools buy live answers, included in the plan inside a daily limit; adding a search to the list
buys nothing by itself, and a tracked search is checked on the market's existing schedule.

## Step 1 — Who competes

Call `cvl_seo_competitors` (optionally with `market`). It returns the owner-tiered list (suggested,
primary, secondary) with the vendor's own intersection and position figures, which domains
actually appeared on this site's paid-for result pages this month, and `rows`: competitors scored
on the money keywords with the reason, labelled business, local, authority or directory, and
whether each is used, pinned or dismissed.

Read the label before calling a domain a rival. A directory or an authority site ranks for the
same searches but is not a business to copy.

## Step 2 — What they win that this site does not

Call `cvl_seo_opportunities`. Each row is a search competitors win and this site does not, a
related search around a money keyword, or a Search Console near-miss — mapped to a page or "new
page" with one action (improve, create or track), the reason, the evidence date and whether its
brief is ready. The order is the tool's, not a result. Before recommending a row, check two things
and say both:

- **Product fit.** Does the search match something this business sells or does? Read the mapped
  page (`cvl_page_content` or the site's own pages); a search for a product the business does not
  offer is not a to-do, however large its volume.
- **Winnability.** Who holds the top 10 now (`cvl_seo_keyword`'s stored top 10 and labels)? A
  results page held by directories and authority sites, or a difficulty far above what this site
  ranks for today, is a long play; say so rather than ranking it first.

Recommend the rows that pass both, and name the ones you skipped and why.

## Step 3 — One search in depth

For each search worth discussing, call `cvl_seo_keyword` with `keyword`. It returns volume,
difficulty, intent, the tracked position and its 90-day history beside rivals on the same dates,
the mapped page, the stored top 10, and related searches and questions. It reads stored rows only,
so it works for searches already on the keyword list or tracked. For any other search the figures
come back null and the lists empty: say "not researched yet", never zero, and use `cvl_seo_keyword_metrics` (Step 4b,
bought live) or, with the owner's yes, `cvl_seo_add_keywords` (Step 5).

If the brief is ready, call `cvl_seo_brief` with `keyword`: the top pages studied and how each
crawl went, what most of them do that this page does not (only items at least 3 pages and 60%
agree on), and the suggested title, meta, outline, questions and structured data. Reading a brief
never generates one.

## Step 4 — The wider picture

- **Rankings.** `cvl_seo_rank` gives the newest position per tracked search, per market and
  device, with history and each used rival's position from the same check. `status` is the honesty
  model: `ranked`, `not_seen` within the depth that was paid for (never "not ranking"), or
  `missing` (could not measure). Say it the same way.
- **Keyword research on file.** `cvl_seo_keywords` returns stored pulls: volume, difficulty, CPC,
  intent and a twelve-month trend per keyword, and the merged list per page tagged by source with
  the money flag. A search with no volume carries null — say "no volume data", never zero.
- **Links.** `cvl_seo_backlinks` gives how many domains and pages link to this site, snapshot by
  snapshot, and the newest link-gap read: domains linking to chosen rivals but not here.
- **AI assistants.** `cvl_seo_ai` gives per-platform mention counts and each tracked question with
  what was cited. It is the vendor's tracked prompt panel, a drawn sample — never say "in ChatGPT"
  as a whole.
- **Several sites.** For someone who belongs to two or more workspaces, `cvl_seo_agency_matrix`
  shows each competitor against each of their sites in one market, with its score. Only
  workspaces they are a member of. A connected app (signed in through the consent screen) was
  granted one site, so through it the matrix shows that one site only; a personal access token the
  person made shows every workspace they belong to. A one-site matrix is not "no other sites".

## Step 4b — Research on any domain (bought live)

When the stored data does not cover the question (a site that is not a tracked rival, a search not
in the keyword list, a fresh look at the top 10), these tools ask the search-data provider directly.
They work on any domain and need `seo:write`. Each answer bought is included in the plan,
inside this site's daily limit, with no per-call confirmation. The answer is stored, so asking the
same question again reads the stored answer; `refresh: true` buys it again. Never call them "free", and
ask the owner before buying more than a handful.

There is no fixed price per call. Research is included in the plan, inside a daily limit for paid
search data, and each answer uses more or less of that day's limit depending on how much it returns.
Do not quote a per-call figure. To say what research has used, read `cvl_usage`: it shows today's
limit used and the month's allowances, not a price list.

- `cvl_seo_serp` — the live top 10 Google results for one search in one country, with "People
  also ask".
- `cvl_seo_keyword_ideas` — searches around one seed: `suggestions` (the default: searches that
  contain the seed), `related` (what Google lists beside it) or `ideas` (the provider's wider
  topic, often off-topic), each with volume, difficulty, cost per click and intent.
- `cvl_seo_keyword_metrics` — volume, difficulty, intent and twelve months of volume for searches
  you name.
- `cvl_seo_domain_overview` — any site's organic footprint in one country: searches ranked for,
  how many in the top 3, and the provider's traffic estimate.
- `cvl_seo_competitor_gap` — searches one `competitor` ranks for that `domain` does not, with
  volume and the competitor's ranking page.
- `cvl_seo_backlink_profile` — any site's backlink headline counts: referring domains, backlinks,
  broken backlinks, referring pages, first seen.
- `cvl_seo_link_gap` — referring domains linking to the named `competitors` and not to `domain`,
  with spam score and rank.
- `cvl_seo_referring_domains` — the sites that link to any `domain`, best-ranked first, each with
  the day it was first seen (and lost), rank, spam score and its follow counts. `since` keeps the
  sites first seen on or after a day: the day of the snapshot before a jump in linking sites.
- `cvl_seo_ai_mentions` — answers from the provider's tracked prompt panel saying whether AI
  assistants name a site. A sample of tracked answers, not every answer an assistant gives.

Volume, difficulty and traffic figures are the provider's estimates: say "estimated". When the
owner asks what research has cost, `cvl_usage` (`reports:read`) shows today's limit used,
whether paid work is paused, the research answers bought and stored this month, and the month's
allowances (SEO content briefs, Google rankings tracked, competitors tracked: used and left). It reads
stored rows and buys nothing.

## Step 5 — Acting on it (writes, owner's yes first)

These record choices in Convertlyft. Nothing on the site changes and nothing is bought. They need
the opt-in `seo:write` scope, which the owner only grants if they gave the right. **Ask the owner
before each one**, naming exactly what will be recorded.

- `cvl_seo_set_competitor_state` — pin a competitor (always used), dismiss one (hidden 180 days, or
  until it shares twice as many money keywords), or clear the choice. An authority site cannot be
  pinned.
- `cvl_seo_opportunity_track` — act on a to-do by tracking its search.
- `cvl_seo_track_keywords` / `cvl_seo_untrack_keywords` — add searches to, or remove them from,
  rank tracking in a market. Checks follow the market's existing schedule.
- `cvl_seo_set_keyword_money` — mark a search as a money keyword or not; the same call with the
  other value undoes it.
- `cvl_seo_map_keyword_page` — say which page targets a search; it answers the page it had before.
- `cvl_seo_add_keywords` — add searches to the keyword list, optionally for one page.

Two more buy search data, and run at once under `seo:write` with no per-call confirmation, so ask
the owner first and name the cost: `cvl_seo_run_flow` runs the SEO chain again (keywords,
competitors, to-dos and SEO content briefs), included in the plan inside the daily limit; a step that
meets the limit waits for tomorrow, and `cvl_seo_flow` follows it. `cvl_seo_make_brief` makes the
competitor page brief for one search (live top results, crawl of the top pages, a model pass) with the
uses one of the month's SEO content briefs, inside the daily limit; a brief made in the last 7 days is returned as it is unless
`force` is true, and `cvl_seo_brief` reads it.

On 403 `insufficient_scope`, say the choice was not recorded and which scope it needs.

## Reporting

Point first: who the real business rivals are, and the one or two searches where closing the gap
matters most. Then, for each search: this site's position (or `not_seen`), the rivals' positions
from the same check, the date of that check, and the action the to-do names. Quote figures
as the tools return them with their dates; state the evidence class (`measured`, `indexed`,
`modelled` — the last one means "estimated"). When an answer carries an evidence id (`receipt_id`), run
`cvl_check_claim` with the sentence and that id before stating its number; an answer with none
cannot be checked this way, so quote its figure exactly as returned.

Never invent a traffic estimate, a "rank in N weeks" promise or a figure the tools did not return.

## Tools

| MCP tool | REST twin | Scope |
|---|---|---|
| `cvl_seo_flow` | `GET https://convertlyft.com/api/tools/cvl_seo_flow` | `reports:read` |
| `cvl_seo_competitors` via `cvl_call_read` | `GET https://convertlyft.com/api/tools/cvl_seo_competitors` | `reports:read` |
| `cvl_seo_opportunities` | `GET https://convertlyft.com/api/tools/cvl_seo_opportunities` | `reports:read` |
| `cvl_seo_keyword` via `cvl_call_read` | `GET https://convertlyft.com/api/tools/cvl_seo_keyword` | `reports:read` |
| `cvl_seo_brief` via `cvl_call_read` | `GET https://convertlyft.com/api/tools/cvl_seo_brief` | `reports:read` |
| `cvl_page_content` via `cvl_call_read` | `GET https://convertlyft.com/api/tools/cvl_page_content` | `reports:read` |
| `cvl_call_read` | none (MCP only) | none |
| `cvl_seo_rank` via `cvl_call_read` | `GET https://convertlyft.com/api/tools/cvl_seo_rank` | `reports:read` |
| `cvl_seo_keywords` via `cvl_call_read` | `GET https://convertlyft.com/api/tools/cvl_seo_keywords` | `reports:read` |
| `cvl_seo_backlinks` | `GET https://convertlyft.com/api/tools/cvl_seo_backlinks` | `reports:read` |
| `cvl_seo_ai` via `cvl_call_read` | `GET https://convertlyft.com/api/tools/cvl_seo_ai` | `reports:read` |
| `cvl_seo_agency_matrix` via `cvl_call_read` | `GET https://convertlyft.com/api/tools/cvl_seo_agency_matrix` | `reports:read` |
| `cvl_seo_set_competitor_state` | `POST https://convertlyft.com/api/tools/cvl_seo_set_competitor_state` | `seo:write` |
| `cvl_seo_opportunity_track` | `POST https://convertlyft.com/api/tools/cvl_seo_opportunity_track` | `seo:write` |
| `cvl_seo_track_keywords` | `POST https://convertlyft.com/api/tools/cvl_seo_track_keywords` | `seo:write` |
| `cvl_seo_untrack_keywords` | `POST https://convertlyft.com/api/tools/cvl_seo_untrack_keywords` | `seo:write` |
| `cvl_seo_set_keyword_money` | `POST https://convertlyft.com/api/tools/cvl_seo_set_keyword_money` | `seo:write` |
| `cvl_seo_map_keyword_page` | `POST https://convertlyft.com/api/tools/cvl_seo_map_keyword_page` | `seo:write` |
| `cvl_seo_add_keywords` | `POST https://convertlyft.com/api/tools/cvl_seo_add_keywords` | `seo:write` |
| `cvl_seo_run_flow` | `POST https://convertlyft.com/api/tools/cvl_seo_run_flow` | `seo:write` |
| `cvl_seo_make_brief` | `POST https://convertlyft.com/api/tools/cvl_seo_make_brief` | `seo:write` |
| `cvl_seo_serp` | `POST https://convertlyft.com/api/tools/cvl_seo_serp` | `seo:write` |
| `cvl_seo_keyword_ideas` | `POST https://convertlyft.com/api/tools/cvl_seo_keyword_ideas` | `seo:write` |
| `cvl_seo_keyword_metrics` | `POST https://convertlyft.com/api/tools/cvl_seo_keyword_metrics` | `seo:write` |
| `cvl_seo_domain_overview` | `POST https://convertlyft.com/api/tools/cvl_seo_domain_overview` | `seo:write` |
| `cvl_seo_competitor_gap` | `POST https://convertlyft.com/api/tools/cvl_seo_competitor_gap` | `seo:write` |
| `cvl_seo_backlink_profile` | `POST https://convertlyft.com/api/tools/cvl_seo_backlink_profile` | `seo:write` |
| `cvl_seo_link_gap` | `POST https://convertlyft.com/api/tools/cvl_seo_link_gap` | `seo:write` |
| `cvl_seo_referring_domains` | `POST https://convertlyft.com/api/tools/cvl_seo_referring_domains` | `seo:write` |
| `cvl_seo_ai_mentions` | `POST https://convertlyft.com/api/tools/cvl_seo_ai_mentions` | `seo:write` |
| `cvl_usage` via `cvl_call_read` | `GET https://convertlyft.com/api/tools/cvl_usage` | `reports:read` |
| `cvl_check_claim` | `GET https://convertlyft.com/api/tools/cvl_check_claim` | none |

REST calls send `Authorization: Bearer cvl_pat_…`; arguments go in the query string for GET and a JSON body for POST.
