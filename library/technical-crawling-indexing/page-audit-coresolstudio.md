---
name: "page-audit"
description: "Use for single-URL on-page audit across SEO, AEO, and GEO signals."
category: "technical-crawling-indexing"
platforms: ["claude-code"]
platform_source: "declared+detected"
repo: "coresolstudio/searchhawk-skills"
repo_url: "https://github.com/coresolstudio/searchhawk-skills"
source: "https://github.com/coresolstudio/searchhawk-skills/blob/HEAD/diagnose/page-audit/SKILL.md"
raw_source: "https://raw.githubusercontent.com/coresolstudio/searchhawk-skills/HEAD/diagnose/page-audit/SKILL.md"
ref: "HEAD"
discovered_via: "github-search"
license: "MIT"
stars: 2
collected: "2026-11-14"
---

<!-- Claude Code skill · coresolstudio/searchhawk-skills · diagnose/page-audit/SKILL.md · MIT
     Source: https://github.com/coresolstudio/searchhawk-skills/blob/HEAD/diagnose/page-audit/SKILL.md
     Detected by: declared+detected · Regenerated on every run; edit the upstream skill, not this copy. -->

# Page Audit

Signal table: Signal | Status | Finding | Fix. Scores SEO/AEO/GEO 1–10.

Run onpage.py for structured extract. Hand off to improve skills per failure.

## Next Best Skill

`content-quality-gate` before publish.
