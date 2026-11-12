---
name: "recovery-diagnose"
description: "Automatic domain diagnosis for Core Update recovery. Calls Sistrix + DataForSEO MCP, quantifies VI drop, identifies keyword losses, scans backlink profile, correlates with known Core Update dates. Outputs structured befund.json to cache. Use when starting recovery analysis for a domain. Data-driven: requires Sistrix/DataForSEO MCP access (CSV fallbacks exist) and writes befund.json — for the tool-free pure-Markdown framework use post-core-update-recovery instead."
summary: "Automates core update recovery diagnosis using external SEO APIs to quantify metric drops."
category: "algorithm-updates"
platforms: ["claude-code"]
platform_source: "declared+detected"
repo: "maxschottke-spec/seo-survival-kit"
repo_url: "https://github.com/maxschottke-spec/seo-survival-kit"
source: "https://github.com/maxschottke-spec/seo-survival-kit/blob/HEAD/plugins/seo-rescue/skills/recovery-diagnose/SKILL.md"
raw_source: "https://raw.githubusercontent.com/maxschottke-spec/seo-survival-kit/HEAD/plugins/seo-rescue/skills/recovery-diagnose/SKILL.md"
ref: "HEAD"
discovered_via: "github-search"
license: "MIT"
stars: 11
collected: "2026-11-12"
---

<!-- Claude Code skill · maxschottke-spec/seo-survival-kit · plugins/seo-rescue/skills/recovery-diagnose/SKILL.md · MIT
     Source: https://github.com/maxschottke-spec/seo-survival-kit/blob/HEAD/plugins/seo-rescue/skills/recovery-diagnose/SKILL.md
     Detected by: declared+detected · Regenerated on every run; edit the upstream skill, not this copy. -->

# Recovery Diagnose

Read and follow the full command specification:

1. Read `${CLAUDE_PLUGIN_ROOT}/commands/recovery-diagnose.md` for the complete workflow.
2. Read `${CLAUDE_PLUGIN_ROOT}/references/CORE_UPDATES.md` for Core Update dates.
3. Read `${CLAUDE_PLUGIN_ROOT}/references/RECOVERY_SYSTEM.md` for diagnosis thresholds and recovery stage estimation.
4. Validate output against `${CLAUDE_PLUGIN_ROOT}/schemas/befund.schema.json`.
