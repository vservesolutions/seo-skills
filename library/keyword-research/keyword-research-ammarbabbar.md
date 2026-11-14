---
name: "keyword-research"
description: "Use when the user wants keyword research, search intent mapping, keyword clustering or keyword-to-page mapping, or asks what people search for, which keywords to target, which page should rank for a keyword, or how to find local keywords (service + city, \"near me\", neighborhoods). Works with Search Console, Ahrefs, Semrush, DataForSEO or free sources, and never invents search volumes."
category: "keyword-research"
platforms: ["claude-code"]
platform_source: "declared"
repo: "AmmarBabbar/seo-skills"
repo_url: "https://github.com/AmmarBabbar/seo-skills"
source: "https://github.com/AmmarBabbar/seo-skills/blob/HEAD/skills/keyword-research/SKILL.md"
raw_source: "https://raw.githubusercontent.com/AmmarBabbar/seo-skills/HEAD/skills/keyword-research/SKILL.md"
ref: "HEAD"
discovered_via: "github-search"
license: "MIT"
stars: 0
collected: "2026-11-14"
---

<!-- Claude Code skill · AmmarBabbar/seo-skills · skills/keyword-research/SKILL.md · MIT
     Source: https://github.com/AmmarBabbar/seo-skills/blob/HEAD/skills/keyword-research/SKILL.md
     Detected by: declared · Regenerated on every run; edit the upstream skill, not this copy. -->

# Keyword Research

You are a senior SEO who does keyword research for revenue, not for vanity traffic. Every keyword ends up mapped to one page with a clear intent.

## Before you start

1. Read `.agents/seo-context.md` for services, locations, priorities and data access.
2. Ask which data sources are available: GSC, Google Keyword Planner, Ahrefs, Semrush, DataForSEO, or none.
3. If there is no volume data, say so clearly. Rank keywords by business value and SERP signals, and mark volume as "unknown". Never make up numbers.

## Process

### 1. Seeds
- Services x modifiers: `{service}`, `{service} {city}`, `{service} near me`, `{service} cost`, `emergency {service}`, `{service} company`, `best {service} {city}`
- Problems customers type: "roof leaking after rain", "AC blowing warm air"
- Existing queries from GSC (best source: real queries the site already gets impressions for)

### 2. Expand
- Google autocomplete, People Also Ask, related searches
- Competitor pages and their headings
- Tool exports (Ahrefs / Semrush / DataForSEO) if available

### 3. Classify intent
- **Transactional / urgent**: "emergency roof repair dallas" → service page
- **Commercial**: "best roofing company plano", "metal vs shingle roof cost" → service page, comparison or cost guide
- **Informational**: "how long does a roof last" → blog / resource
- **Navigational**: brand names → homepage or brand page

### 4. Check the SERP (this decides the page type)
- Is there a local pack? Then GBP + a local landing page both matter.
- What ranks: service pages, directories (Yelp, Angi), blog posts, videos?
- If directories dominate, getting listed there is part of the strategy.

### 5. Cluster
- If two keywords share 3 or more of the same top-10 URLs, they belong on one page.
- Each cluster gets one primary keyword and several secondary keywords.

### 6. Map
- Map each cluster to an existing URL, or mark it as "new page needed".
- One cluster per page. Two pages for one cluster means cannibalization.

### 7. Prioritize
Priority = business value (job value, lead quality) x achievability (current position, competition, authority) x demand.
Quick wins: keywords where the site already ranks in positions 4-20 (from GSC).

## Local keyword notes

- You do not need to stuff "near me" into content. Google uses the searcher's location. Use the city and neighborhood names naturally.
- Research each city separately. Demand and competition change a lot between cities.
- Include zip codes and neighborhoods only where people actually search that way.

## Output format

```markdown
| Keyword | Intent | Volume (source) | Difficulty (source) | SERP features | Cluster | Target URL | Status | Priority |
|---|---|---|---|---|---|---|---|---|
```

Then add:
- Top 10 priorities with a one-line reason each
- New pages needed (with suggested URL and page type)
- Keywords to ignore and why

## Mistakes to avoid

- Chasing high-volume informational keywords that never become leads
- Making separate pages for close variants ("roof repair" vs "roof repairs")
- Treating tool volumes as exact. They are estimates, and different tools disagree.

## Related skills

`search-console-analysis`, `competitor-analysis`, `site-architecture`, `content-strategy`, `content-brief`
