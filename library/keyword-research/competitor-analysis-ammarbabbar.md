---
name: "competitor-analysis"
description: "Use when the user wants an SEO competitor analysis, content gap or keyword gap analysis, SERP analysis, or asks why competitors outrank them in Google or the local map pack, what competitors do better, or how to beat a specific competitor. Compares real SERP competitors on pages, content, structure, schema, GBP, reviews and links, without invented metrics."
category: "keyword-research"
platforms: ["claude-code"]
platform_source: "declared"
repo: "AmmarBabbar/seo-skills"
repo_url: "https://github.com/AmmarBabbar/seo-skills"
source: "https://github.com/AmmarBabbar/seo-skills/blob/HEAD/skills/competitor-analysis/SKILL.md"
raw_source: "https://raw.githubusercontent.com/AmmarBabbar/seo-skills/HEAD/skills/competitor-analysis/SKILL.md"
ref: "HEAD"
discovered_via: "github-search"
license: "MIT"
stars: 0
collected: "2026-11-14"
---

<!-- Claude Code skill · AmmarBabbar/seo-skills · skills/competitor-analysis/SKILL.md · MIT
     Source: https://github.com/AmmarBabbar/seo-skills/blob/HEAD/skills/competitor-analysis/SKILL.md
     Detected by: declared · Regenerated on every run; edit the upstream skill, not this copy. -->

# Competitor Analysis

You find out why the competitors who actually rank are winning, and turn that into a short list of actions. Real SERP competitors are often different from the "business competitors" the client names.

## Before you start

1. Read `.agents/seo-context.md` for services, cities and known competitors.
2. Pick 3-5 priority keywords (money keywords) and the target city.
3. Ask which data is available (Ahrefs, Semrush, DataForSEO, Local Falcon, BrightLocal). Without tools, compare only what you can see, and never estimate traffic or authority scores.

## Find the real competitors

- **Organic**: who ranks in the top 5 for each priority keyword
- **Local pack**: who shows in the map pack for each keyword. Note that map results change with the searcher's location, so a single manual search is only one data point. Grid tools give a fairer picture.
- **Directories**: if Yelp, Angi, Thumbtack, Zillow etc. dominate, note it. The strategy then includes those profiles.

## Compare

### Pages
- Which page type ranks (service page, city page, homepage, blog)
- Title and H1 pattern, content depth, topics and questions covered, media (photos, video), CTAs, trust elements

### Structure
- Do they have dedicated pages per service and per city? How many? How unique are they?
- Internal linking to their money pages

### Technical
- Speed (field data if available), mobile UX, schema types used

### Local
- GBP primary and secondary categories, review count, rating, review velocity, owner responses, photos, posts, business name format (note keyword-stuffed names; these can be reported through Google's redress form)

### Authority (only with data)
- Referring domains, notable local links (chambers, sponsorships, local news, suppliers), link gap

## Process

1. Build a competitor table per keyword.
2. Find the patterns: what do the top 3 have that the client does not?
3. Separate what is copyable quickly (pages, categories, schema) from what takes time (reviews, links).
4. Write the actions in priority order.

## Output format

```markdown
## SERP snapshot: {keyword} ({city}, {date})
| Position | Competitor | Page type | Why it ranks (observed) |

## Gap table
| Area | Client | Competitor A | Competitor B | Gap | Action |

## Top actions
1. ...
```

## Rules

- Write the date and location for every SERP check. Results change.
- Never invent traffic numbers, DA/DR or backlink counts. Mark them "not measured" without tool data.
- Do not recommend copying competitor content. Recommend covering the topic better with the client's own proof.

## Related skills

`keyword-research`, `local-seo-audit`, `google-business-profile`, `link-building`, `content-brief`
