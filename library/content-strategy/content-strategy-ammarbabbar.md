---
name: "content-strategy"
description: "Use when the user wants an SEO content strategy, topical map, topic clusters, pillar pages, a blog plan or an editorial calendar, or asks what to write about, which blog topics bring leads, or how to build topical authority for a (local service) business. Prioritizes topics by business value and connects every article to a money page."
category: "content-strategy"
platforms: ["claude-code"]
platform_source: "declared"
repo: "AmmarBabbar/seo-skills"
repo_url: "https://github.com/AmmarBabbar/seo-skills"
source: "https://github.com/AmmarBabbar/seo-skills/blob/HEAD/skills/content-strategy/SKILL.md"
raw_source: "https://raw.githubusercontent.com/AmmarBabbar/seo-skills/HEAD/skills/content-strategy/SKILL.md"
ref: "HEAD"
discovered_via: "github-search"
license: "MIT"
stars: 0
collected: "2026-11-14"
---

<!-- Claude Code skill · AmmarBabbar/seo-skills · skills/content-strategy/SKILL.md · MIT
     Source: https://github.com/AmmarBabbar/seo-skills/blob/HEAD/skills/content-strategy/SKILL.md
     Detected by: declared · Regenerated on every run; edit the upstream skill, not this copy. -->

# Content Strategy

You plan content that brings leads, not just traffic. For a local service business, blog content exists to support the service pages, answer real customer questions and prove expertise.

## Before you start

1. Read `.agents/seo-context.md` for services, cities, audience and goals.
2. Pull existing content (sitemap or crawl) and GSC queries if available.
3. Ask about publishing capacity: who writes, how many posts per month, budget for photos or video.

## Build the topical map

For every core service, create a cluster:

```
Service page (money page)
├── Cost guide: "How much does {service} cost in {city/region}?"
├── Decision guide: "Repair vs replace", "{option A} vs {option B}"
├── Problem / symptom posts: "Signs you need {service}", "Why is my {thing} {problem}?"
├── Process posts: "What to expect during {service}", "How long does {service} take?"
├── Local posts: permits, building codes, climate, HOA rules, seasonal issues in {city}
├── Trust content: case studies, project write-ups, before/after
└── Maintenance / prevention guides
```

## Prioritize

Score each topic 1-5 on:
- **Business value**: how close it is to a paying job
- **Demand**: real search interest (GSC, tools, PAA). Never invent volumes.
- **Achievability**: can this site rank, given the current SERP?
- **Expertise**: can the business add first-hand proof (photos, real prices, real cases)?

Start with: cost guides, decision guides and case studies for the highest-value services.

## Rules

- Every article links to its service page with a descriptive anchor, and the service page links back to its best supporting articles.
- One topic per article. Check for existing content before planning a new one (`keyword-cannibalization`).
- Prefer fewer, better posts with real first-hand details over high-volume generic posts.
- Do not plan topics far outside the business's expertise just for traffic.
- Update and improve existing posts before writing new ones on similar topics (`content-refresh`).

## Output format

```markdown
## Topical map
(tree per service)

## Content plan
| # | Title (working) | Primary keyword | Intent | Cluster / supports page | Format | Priority score | Month |
|---|---|---|---|---|---|---|---|

## Existing content actions
| URL | Keep / update / merge / remove | Reason |

## Publishing rhythm and owners
```

## Related skills

`keyword-research`, `content-brief`, `seo-content-writing`, `content-refresh`, `internal-linking`
