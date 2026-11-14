---
name: "content-updater"
description: "Use when refreshing decaying content: outdated stats, lost rankings, freshness signals, and AEO/GEO re-optimization."
category: "ai-search-geo"
platforms: ["claude-code"]
platform_source: "declared+detected"
repo: "coresolstudio/searchhawk-skills"
repo_url: "https://github.com/coresolstudio/searchhawk-skills"
source: "https://github.com/coresolstudio/searchhawk-skills/blob/HEAD/improve/content-updater/SKILL.md"
raw_source: "https://raw.githubusercontent.com/coresolstudio/searchhawk-skills/HEAD/improve/content-updater/SKILL.md"
ref: "HEAD"
discovered_via: "github-search"
license: "MIT"
stars: 2
collected: "2026-11-14"
---

<!-- Claude Code skill · coresolstudio/searchhawk-skills · improve/content-updater/SKILL.md · MIT
     Source: https://github.com/coresolstudio/searchhawk-skills/blob/HEAD/improve/content-updater/SKILL.md
     Detected by: declared+detected · Regenerated on every run; edit the upstream skill, not this copy. -->

# Content Updater

## 6 phases

1. Baseline — current content + user metrics if any
2. Decay signals — dates, broken links, outdated facts
3. SERP delta — what winners added (via serp-reviewer)
4. Update plan — sections to add/cut/rewrite
5. AEO/GEO pass — answer blocks + cite quotes
6. Re-gate — `content-quality-gate` before republish

## Reference Materials

- [example-report.md](references/example-report.md)
