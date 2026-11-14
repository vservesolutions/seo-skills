---
name: "keyword-cannibalization"
description: "Use when the user suspects keyword cannibalization, or asks why rankings swap between pages, why the wrong page ranks for a keyword, whether two pages compete with each other, or whether to merge, redirect or differentiate similar pages. Detects real cannibalization with Search Console data and recommends merge, 301, re-target, internal link or canonical fixes."
category: "keyword-research"
platforms: ["claude-code"]
platform_source: "declared"
repo: "AmmarBabbar/seo-skills"
repo_url: "https://github.com/AmmarBabbar/seo-skills"
source: "https://github.com/AmmarBabbar/seo-skills/blob/HEAD/skills/keyword-cannibalization/SKILL.md"
raw_source: "https://raw.githubusercontent.com/AmmarBabbar/seo-skills/HEAD/skills/keyword-cannibalization/SKILL.md"
ref: "HEAD"
discovered_via: "github-search"
license: "MIT"
stars: 0
collected: "2026-11-14"
---

<!-- Claude Code skill · AmmarBabbar/seo-skills · skills/keyword-cannibalization/SKILL.md · MIT
     Source: https://github.com/AmmarBabbar/seo-skills/blob/HEAD/skills/keyword-cannibalization/SKILL.md
     Detected by: declared · Regenerated on every run; edit the upstream skill, not this copy. -->

# Keyword Cannibalization

You diagnose whether multiple pages on one site are really competing for the same intent, and you fix it without losing traffic. Many "cannibalization" reports are false alarms, so prove it before changing anything.

## Before you start

1. Read `.agents/seo-context.md`.
2. Best input: a GSC export with Query + Page dimensions for the last 3-6 months. Alternatives: a crawl export (titles, H1s), `site:domain.com keyword` searches, or a rank tracker history.

## How to detect

- **GSC**: one query with impressions on 2 or more URLs, especially when the ranking URL keeps switching and the average position is unstable
- **Titles / H1s**: several pages targeting the same primary keyword
- **Content**: two blog posts answering the same question, a blog post competing with a service page, a city page competing with a service page for the same city

## Is it really a problem?

Not a problem when:
- Both pages rank in the top 3 for the query (you own more of the SERP)
- The pages serve different intents (a "roof repair cost" guide and a "roof repair" service page)
- The second URL only gets a few impressions

A problem when:
- The ranking URL swaps back and forth and neither page holds a strong position
- The wrong page type ranks (a blog post ranks for a money keyword instead of the service page)
- Two thin pages split links and relevance that one strong page could have

## Fixes (most common first)

1. **Merge + 301**: combine the best content into the stronger URL (more links, better position, better conversions), then 301 redirect the weaker one. Update internal links to the new target.
2. **Differentiate**: re-target one page to a different intent or keyword. Change title, H1, intro and internal anchors.
3. **Internal link signals**: point contextual links with the main keyword anchor only to the chosen page. Remove conflicting anchors.
4. **Noindex**: for low-value pages that must stay for users (tag archives, thin filters).
5. **Canonical**: only for true duplicates or near-duplicates. Canonical is a hint, not a fix for two different pages.

## Process

1. Build the list of affected queries and URLs.
2. For each pair, record: clicks, impressions, position, backlinks, conversions, intent.
3. Pick the winning URL and the fix for each pair.
4. Plan redirects and internal link updates.
5. Set a check date (4-8 weeks) to confirm the result in GSC.

## Output format

```markdown
| Query / topic | URLs involved | Data (clicks, impr., pos.) | Real problem? | Winning URL | Fix | Steps |
|---|---|---|---|---|---|---|
```

Then: redirect list, internal link changes, and what to monitor.

## Rules

- Never delete a page that has backlinks or conversions without a 301.
- Do not "fix" pairs that are both ranking well.

## Related skills

`search-console-analysis`, `keyword-research`, `content-refresh`, `internal-linking`, `site-architecture`
