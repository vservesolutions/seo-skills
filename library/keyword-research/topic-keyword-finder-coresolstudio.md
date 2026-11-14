---
name: "topic-keyword-finder"
description: "Use when the user asks to find keywords, topic ideas, search volume, or what to write about. Prioritizes intent, difficulty, clusters, and AEO/GEO opportunities. Not for competitor gap lists — use content-gap-finder."
category: "keyword-research"
platforms: ["claude-code"]
platform_source: "declared+detected"
repo: "coresolstudio/searchhawk-skills"
repo_url: "https://github.com/coresolstudio/searchhawk-skills"
source: "https://github.com/coresolstudio/searchhawk-skills/blob/HEAD/discover/topic-keyword-finder/SKILL.md"
raw_source: "https://raw.githubusercontent.com/coresolstudio/searchhawk-skills/HEAD/discover/topic-keyword-finder/SKILL.md"
ref: "HEAD"
discovered_via: "github-search"
license: "MIT"
stars: 2
collected: "2026-11-14"
---

<!-- Claude Code skill · coresolstudio/searchhawk-skills · discover/topic-keyword-finder/SKILL.md · MIT
     Source: https://github.com/coresolstudio/searchhawk-skills/blob/HEAD/discover/topic-keyword-finder/SKILL.md
     Detected by: declared+detected · Regenerated on every run; edit the upstream skill, not this copy. -->

# Topic & Keyword Finder

Discovers, scores, and clusters keywords for SEO, AEO, and GEO planning.

## Quick Start

```
Research keywords for [topic/product/service]
Find long-tail keywords for [niche] in [country]
```

## Skill Contract

- **Reads**: seed topic, audience, goal, market, optional DR/metrics
- **Writes**: prioritized keyword brief + handoff summary
- **Promotes**: pillar keywords, cluster names to `memory/research/`
- **Done when**: each shortlisted keyword has intent + difficulty + opportunity label; 3+ Quick Win / Growth / AEO flags
- **Primary next skill**: `competitor-snapshot`

### Handoff Summary

Emit format from [references/skill-contract.md](../../references/skill-contract.md).

## Data Sources

Tier 1: user seeds, site content, `~~SEO tool` paste, `python3 scripts/connectors/suggest.py "<seed>" --expand`. Tier 2: GSC. See [CONNECTORS.md](../../CONNECTORS.md).

## Instructions

Run 8 phases — announce `[Phase X/8: Name]`:

1. **Scope** — product, audience, goal, geography, language
2. **Discover** — seeds from problem/solution/audience terms
3. **Expand** — modifiers, questions, comparisons, long-tail
4. **Classify** — informational / commercial / transactional / navigational
5. **Score** — difficulty 1–100; Opportunity = (Volume × IntentValue) / Difficulty (label Estimated if no volume)
6. **AEO flag** — questions, definitions, lists, how-tos
7. **GEO flag** — cite-worthy definitional queries
8. **Deliver** — Executive Summary, clusters, calendar, next steps

Label every metric **Measured / User-provided / Estimated / N/A**.

> Detail: [references/instructions-detail.md](references/instructions-detail.md)

## Reference Materials

- [instructions-detail.md](references/instructions-detail.md)
- [keyword-intent-taxonomy.md](references/keyword-intent-taxonomy.md)
- [topic-cluster-templates.md](references/topic-cluster-templates.md)
- [example-report.md](references/example-report.md)

## Next Best Skill

Primary: `competitor-snapshot`. Also: `serp-reviewer`, `content-gap-finder`.
