---
name: "competitor-snapshot"
description: "Use when analyzing competitors: rankings, content strategy, SERP features, and positioning. Not for keyword-only lists — use topic-keyword-finder first."
category: "content-strategy"
platforms: ["claude-code"]
platform_source: "declared+detected"
repo: "coresolstudio/searchhawk-skills"
repo_url: "https://github.com/coresolstudio/searchhawk-skills"
source: "https://github.com/coresolstudio/searchhawk-skills/blob/HEAD/discover/competitor-snapshot/SKILL.md"
raw_source: "https://raw.githubusercontent.com/coresolstudio/searchhawk-skills/HEAD/discover/competitor-snapshot/SKILL.md"
ref: "HEAD"
discovered_via: "github-search"
license: "MIT"
stars: 2
collected: "2026-11-14"
---

<!-- Claude Code skill · coresolstudio/searchhawk-skills · discover/competitor-snapshot/SKILL.md · MIT
     Source: https://github.com/coresolstudio/searchhawk-skills/blob/HEAD/discover/competitor-snapshot/SKILL.md
     Detected by: declared+detected · Regenerated on every run; edit the upstream skill, not this copy. -->

# Competitor Snapshot

Map who wins in search and why.

## Quick Start

```
Analyze competitors for [topic] — compare [your-site.com] vs [competitor.com]
```

## Skill Contract

- **Reads**: competitor URLs/domains, optional your domain, keyword set
- **Writes**: battlecard + gap themes
- **Done when**: 3+ competitors profiled with content type, strengths, weaknesses
- **Primary next skill**: `content-gap-finder`

## Instructions — 6 phases

1. **Identify** — top 3–5 SERP or user-named competitors
2. **Profile** — homepage, key landing, blog depth (fetch sample pages)
3. **SERP features** — snippets, PAA, video they hold
4. **Content patterns** — format, depth, freshness
5. **Authority cues** — Estimated unless backlink data provided
6. **Battlecard** — table + recommended angles for you

## Reference Materials

- [instructions-detail.md](references/instructions-detail.md)
- [example-report.md](references/example-report.md)

## Next Best Skill

`content-gap-finder` → `search-content-writer`
