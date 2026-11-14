---
name: "content-refresh"
description: "Use when the user wants to update old content, recover lost rankings or traffic for specific pages, fix content decay, or asks why a page that used to rank has dropped and how to improve it. Finds decaying pages with Search Console data, diagnoses the cause and gives a concrete refresh plan."
category: "content-strategy"
platforms: ["claude-code"]
platform_source: "declared"
repo: "AmmarBabbar/seo-skills"
repo_url: "https://github.com/AmmarBabbar/seo-skills"
source: "https://github.com/AmmarBabbar/seo-skills/blob/HEAD/skills/content-refresh/SKILL.md"
raw_source: "https://raw.githubusercontent.com/AmmarBabbar/seo-skills/HEAD/skills/content-refresh/SKILL.md"
ref: "HEAD"
discovered_via: "github-search"
license: "MIT"
stars: 0
collected: "2026-11-14"
---

<!-- Claude Code skill · AmmarBabbar/seo-skills · skills/content-refresh/SKILL.md · MIT
     Source: https://github.com/AmmarBabbar/seo-skills/blob/HEAD/skills/content-refresh/SKILL.md
     Detected by: declared · Regenerated on every run; edit the upstream skill, not this copy. -->

# Content Refresh

You bring declining pages back. Updating a page that already has history and links is often faster than publishing a new one.

## Before you start

1. Read `.agents/seo-context.md`.
2. Best input: GSC Pages + Queries export comparing two periods (last 3 months vs previous 3 months, and year over year to rule out seasonality).
3. Without GSC, ask for the specific URLs and the keywords they used to rank for.

## Find candidates

- Pages with a clear drop in clicks or impressions (exclude seasonal dips by checking year over year)
- Pages stuck in positions 5-20 for valuable queries
- Pages with outdated info: old prices, old years in the title, discontinued products, old regulations
- Pages with high impressions and low CTR (title / snippet problem)

## Diagnose the cause (check in this order)

1. **Technical**: noindex, canonical changes, redirects, a site migration, indexing status in GSC URL Inspection
2. **Cannibalization**: a newer page now competes for the same queries
3. **SERP change**: intent shifted (e.g. now videos, AI Overview, local pack, directories)
4. **Competitors improved**: fresher, deeper, better proof
5. **Content is outdated** or thin compared with what ranks now
6. **Lost links** or internal links removed
7. **Algorithm update**: check the dates against known Google updates before blaming one

## Refresh actions

- Re-check intent against the current top results and restructure if needed
- Update facts, prices, years, screenshots and photos
- Add missing subtopics and questions (PAA, GSC queries the page already gets impressions for)
- Add first-hand proof: real projects, numbers, quotes
- Improve the title and meta for CTR
- Remove or merge sections that no longer help
- Add internal links from strong related pages
- Keep the same URL
- Change the "updated" date only when the change is substantive
- Request indexing in GSC after publishing

## Output format

```markdown
| URL | Drop (period vs period) | Likely cause (evidence) | Refresh actions | Priority |
|---|---|---|---|---|
```

Then for each priority page: the new outline, the title and meta options, and what to add or remove.

## Follow-up

Check results 4-8 weeks after the refresh in GSC (same query set, same comparison method).

## Related skills

`search-console-analysis`, `keyword-cannibalization`, `seo-content-writing`, `on-page-seo`
