---
name: "researching-long-tail-keywords"
description: "Finds long-tail searches (four words or more, specific, often easier to rank for) around a site's head searches with Convertlyft's cvl_seo_long_tail, then checks which are worth a page, which page should serve each, and where the site already ranks, quoting every volume and difficulty as the provider's estimate. Use when someone asks for long-tail keywords, \"searches we could actually rank for\", \"keyword research beyond the obvious terms\", questions people ask about a topic, or content ideas for a small or new site that cannot win the head searches yet."
category: "keyword-research"
platforms: ["claude-code"]
platform_source: "declared"
repo: "Convertlyft/skills"
repo_url: "https://github.com/Convertlyft/skills"
source: "https://github.com/Convertlyft/skills/blob/HEAD/skills/researching-long-tail-keywords/SKILL.md"
raw_source: "https://raw.githubusercontent.com/Convertlyft/skills/HEAD/skills/researching-long-tail-keywords/SKILL.md"
ref: "HEAD"
discovered_via: "github-search"
license: "MIT"
stars: 1
collected: "2026-11-14"
---

<!-- Claude Code skill · Convertlyft/skills · skills/researching-long-tail-keywords/SKILL.md · MIT
     Source: https://github.com/Convertlyft/skills/blob/HEAD/skills/researching-long-tail-keywords/SKILL.md
     Detected by: declared · Regenerated on every run; edit the upstream skill, not this copy. -->

# Researching long-tail keywords

A head search ("session replay") is short, broad and usually owned by big
sites. Its tail ("free session replay tool for shopify") is longer, says what
the person wants, and a smaller site can win it. This skill finds the tail
around a few seeds and turns it into a short list a person can act on.

The evidence rule: volume and difficulty are the search-data provider's
estimates (evidence `modelled`), never counts from the site. Say "estimated"
with every figure. A row with no figure has none: never write it as zero.

## Step 1 — Pick the seeds

One to ten seeds, each a head search the site should be found for. In order:

1. What the site already sells or explains, in the owner's words.
2. `cvl_seo_opportunities`: the searches the SEO room already holds for this
   site.
3. `cvl_call_read` with `{"name": "cvl_seo_search_console", "arguments": {}}`
   when Search Console is connected: searches Google already shows the site
   for (measured).

Two to five seeds of two or three words each work best. A seed of one broad
word ("software") pulls rows from every direction.

## Step 2 — Ask for the tail

1. `cvl_seo_long_tail` with `{"seeds": [...], "dry_run": true}`: whether a
   stored answer is there (free) and whether the call fits today's limit for
   paid search data. Research is included in the plan, inside that daily
   limit.
2. `cvl_seo_long_tail` with `{"seeds": [...]}`. Optional:
   - `min_words` (default 4): 3 for a narrow trade, 5 for a crowded one.
   - `max_difficulty`: 30 for a new or small site is a fair start.
   - `min_volume`: leave it out at first; a tail search with 20 searches a
     month can still bring buyers.

Each row has `keyword`, `volume`, `difficulty`, `score`, `seeds`, `from` and
`this_site`:

- `score` is volume ÷ (difficulty + 1): high volume that is easy to rank for
  comes first. Null without both figures; those rows sort last.
- `from` says where the row came from: `suggestions` (searches that contain
  the seed), `related` (searches Google lists beside it, three steps out) or
  `people_also_ask` (questions from results pages this site already stored,
  which carry no figures).
- `this_site` is the site's own latest rank check for that search: a
  `position`, `position: null` (checked, not found), or null (never checked).
- `filtered_out` counts what the filters left out; `pulls_failed`, when
  present, names a pull that did not answer, so its searches are missing.

## Step 3 — Shortlist

1. **Drop what does not fit.** Rival brand names, other countries, jobs the
   site does not do. Say what was dropped and why.
2. **Group by intent.** Searches a person would be happy to land on the same
   page for belong together ("best X for Y" and "top X for Y"). One page per
   group, never one page per search.
3. **Figures for the questions.** For `people_also_ask` rows worth keeping,
   `cvl_seo_keyword_metrics` with `{"keywords": [...]}` gives the estimates.
   Many come back null: a question can be worth answering on a page with no
   volume of its own.
4. **The page that serves it.** `cvl_site_pages` for the site's pages. A group
   whose intent an existing page already serves improves that page; only a
   group with no page becomes a new one.
5. **Can it win?** For the top three groups, `cvl_seo_serp` on the lead
   search. Read who holds page one. When the answer carries `serp_id`, call
   `cvl_seo_serp` again with the same arguments and that `serp_id` a few
   minutes later (free) for every result's real address.

## Step 4 — Hand over

A table per group: the lead search, its estimated volume and difficulty, the
other searches in the group, where the site ranks (`this_site`), the page that
serves it (or "new page"), and one line on page one. Say the country and that
the figures are estimates. Then, only with the owner's yes:

- `cvl_seo_map_keyword_page` to tie a search to the page that serves it;
- `cvl_seo_track_keywords` to follow its ranking;
- `cvl_seo_make_brief` for a new page.

## Tools

| MCP tool | REST twin | Scope |
|---|---|---|
| `cvl_seo_opportunities` | `GET https://convertlyft.com/api/tools/cvl_seo_opportunities` | `reports:read` |
| `cvl_call_read` | none (MCP only) | none |
| `cvl_seo_search_console` via `cvl_call_read` | `GET https://convertlyft.com/api/tools/cvl_seo_search_console` | `reports:read` |
| `cvl_seo_long_tail` | `POST https://convertlyft.com/api/tools/cvl_seo_long_tail` | `seo:write` |
| `cvl_seo_keyword_metrics` | `POST https://convertlyft.com/api/tools/cvl_seo_keyword_metrics` | `seo:write` |
| `cvl_site_pages` | `GET https://convertlyft.com/api/tools/cvl_site_pages` | `reports:read` |
| `cvl_seo_serp` | `POST https://convertlyft.com/api/tools/cvl_seo_serp` | `seo:write` |
| `cvl_seo_map_keyword_page` | `POST https://convertlyft.com/api/tools/cvl_seo_map_keyword_page` | `seo:write` |
| `cvl_seo_track_keywords` | `POST https://convertlyft.com/api/tools/cvl_seo_track_keywords` | `seo:write` |
| `cvl_seo_make_brief` | `POST https://convertlyft.com/api/tools/cvl_seo_make_brief` | `seo:write` |
