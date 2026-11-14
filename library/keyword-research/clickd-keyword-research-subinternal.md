---
name: "clickd-keyword-research"
description: "Finds high-leverage search queries and keyword gaps for a website using live Google Search Console query data, competitor topic coverage and clickd's rulebook, then maps each target query to an existing page to sharpen or a new page to build. Use when asked for keyword research, striking-distance keywords in positions 4 to 20, low-CTR pages with high impressions, or search intent mapping."
category: "keyword-research"
platforms: ["unspecified"]
platform_source: "none"
repo: "subinternal/clickd"
repo_url: "https://github.com/subinternal/clickd"
source: "https://github.com/subinternal/clickd/blob/HEAD/skills/clickd-keyword-research/SKILL.md"
raw_source: "https://raw.githubusercontent.com/subinternal/clickd/HEAD/skills/clickd-keyword-research/SKILL.md"
ref: "HEAD"
discovered_via: "github-search"
license: "MIT"
stars: 1
collected: "2026-11-14"
---

<!-- Unspecified skill · subinternal/clickd · skills/clickd-keyword-research/SKILL.md · MIT
     Source: https://github.com/subinternal/clickd/blob/HEAD/skills/clickd-keyword-research/SKILL.md
     Detected by: none · Regenerated on every run; edit the upstream skill, not this copy. -->

<!-- subinternal:header -->
```
╭─────────────────────────────────────────────────────────────────────────╮
│        ▄                                                                │
│      ▄ █    clickd                                                      │
│    ▄ █ █    keyword research                                            │
│  ▄ █ █ █                                                                │
│                                                                         │
│  skill 2.3.0  ·  by subinternal  ·  clickd.com/skills/keyword-research  │
╰─────────────────────────────────────────────────────────────────────────╯
```

Print this header once, exactly as it is, in a code block, as the first thing you show when this skill starts. Then go on.
<!-- /subinternal:header -->

# Keyword research

Find the searches a site can realistically win next, starting from its own Google Search Console impressions and the topic gaps against its closest rivals, then map every query to one page and one action in code.

What this does not do: third-party search volume estimates are noisy guesses, and no keyword list guarantees traffic. This skill relies on real Search Console impressions where connected, competitor pages that actually exist, and search intent visible on the live results page.

Connect to `https://clickd.com/mcp/all` so `clickd_queries`, `clickd_traffic`, `clickd_gaps` and `clickd_topics` are listed alongside `clickd_site`, `clickd_pages` and `clickd_rivals` (which are also at `https://clickd.com/mcp`). With no MCP setup, scan a site at `https://clickd.com/scan/example.com`.

## 1. Pull real queries and topic coverage from clickd

Start with the searches the site already appears for and the topics its pages and rivals cover.

- On a claimed site with Search Console connected, call `clickd_queries({ site })` and `clickd_traffic({ site })` (on `https://clickd.com/mcp/all`) to get the queries, impressions, clicks, click-through rate and average position across the site.
- Call `clickd_topics({ site })` and `clickd_gaps({ site })` (on `https://clickd.com/mcp/all`) plus `clickd_rivals({ site })` to see what topics the site covers today and which customer subjects rivals cover that this site misses.
- Inspect the site's own routes and content collections in the repo so you know every page that already exists before proposing anything new.

Verify: state whether the research is backed by live Search Console data (`clickd_queries`), rival gap data (`clickd_gaps`), or both, with the date window and impression counts.

## 2. Bucket queries by action: striking distance, CTR gap and missing page

Group candidate searches by the exact engineering or content job they call for.

- **Striking-distance queries (average position 4 to 20 with meaningful impressions):** the page is already on page one or two. It needs a sharper answer, a section answering the missing sub-question, or stronger internal links from hub pages, not a brand-new URL.
- **CTR-gap queries (average position 1 to 5 with high impressions and low CTR):** searchers see the page and scroll past. The `<title>` and `<meta name="description">` need to name the specific outcome, number or format the searcher wants.
- **Cannibalized queries (two or more pages splitting impressions for the same query):** pick the one stronger page as canonical target, merge or refocus the weaker one, and point internal anchors at the chosen page.
- **Topic-gap queries (subjects from `clickd_gaps` where the site has no matching page):** group closely related phrasings into one brief for a single new page.

Verify: every query in the shortlist sits in one of the four buckets and names the exact path on the site that owns it (existing or proposed).

## 3. Check search intent against the live results

Before committing to a target query, check what page format search engines actually reward for that search.

- Look at the top results for the query: are they interactive tools, product or pricing pages, step-by-step guides, comparison pages (`/vs/`), or local service pages?
- Never assign a commercial or tool query to a blog post, or an informational how-to query to a bare pricing page. Match the page format to what a searcher expects to use when they click.
- Check that one page on the site owns one distinct intent so you never create two thin pages chasing singular and plural variations of the same question.

Verify: each shortlisted target lists the dominant result format (tool, service page, comparison, guide) and confirms the assigned route matches that format.

## 4. Turn the top targets into queued work or immediate edits

Hand the person a ranked action table and, when asked, carry out the top fixes right in the repo.

- For striking-distance and CTR-gap pages, open the route in the codebase, tighten the `<title>`, `<meta name="description">`, `<h1>` and opening answer, and add internal links from related pages.
- For new topic-gap pages, call `clickd_content_brain({ site })` or `clickd_content_next({ site })` (on `https://clickd.com/mcp/all`) to align with the site's content plan, and log the planned work with `clickd_log_work`.
- After shipping edits to existing pages, call `clickd_rescan({ site, reason: "applied keyword research updates" })` and `clickd_changes({ site, job })`.

Verify: the output table ranks the top opportunities with query, impressions, current position, bucket, owning URL and the concrete change made or queued.

## Report back

```
Site: <domain> (Data source: <GSC window | clickd_gaps + rivals>)
1. Striking distance (pos 4 to 20): <query> -> <path> (<impressions>, pos <n>) -> <action>
2. CTR gaps (pos 1 to 5): <query> -> <path> (<impressions>, CTR <n>%) -> <title/desc update>
3. Cannibalization fixes: <query> -> keep <path A>, refocus <path B>
4. New pages to build: <topic/query> -> proposed <path> (<format>)
```

## Sources

- [Search Analytics: Performance Report](https://support.google.com/webmasters/answer/7576553): how Search Console counts impressions, clicks, average position and click-through rate by query and page.
- [What Is Position, Impressions, and Clicks in Search Console](https://support.google.com/webmasters/answer/7042828): why average position shifts with query mix and why impressions and position must be read together.
- [Creating Helpful, Reliable, People-First Content](https://developers.google.com/search/docs/fundamentals/creating-helpful-content): building one comprehensive page per searcher intent instead of doorway variations.
- [Influencing Title Links in Search Results](https://developers.google.com/search/docs/appearance/title-link): writing titles that earn clicks when a page already ranks on page one.
