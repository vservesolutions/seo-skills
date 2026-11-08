---
name: "recovery-monitor"
description: "Weekly recovery tracking. Fetches current VI + keyword positions, computes 0-100 recovery score, appends to NDJSON history, outputs delta report. Run weekly or on-demand to track recovery progress over time. API-driven (Sistrix/DataForSEO MCP) — for the CSV-only weekly review without any API access use sistrix-monday-recovery-check instead."
category: "algorithm-updates"
platforms: ["claude-code"]
platform_source: "declared+detected"
repo: "maxschottke-spec/seo-survival-kit"
repo_url: "https://github.com/maxschottke-spec/seo-survival-kit"
source: "https://github.com/maxschottke-spec/seo-survival-kit/blob/HEAD/plugins/seo-rescue/skills/recovery-monitor/SKILL.md"
raw_source: "https://raw.githubusercontent.com/maxschottke-spec/seo-survival-kit/HEAD/plugins/seo-rescue/skills/recovery-monitor/SKILL.md"
ref: "HEAD"
discovered_via: "github-search"
license: "MIT"
stars: 11
collected: "2026-11-08"
---

<!-- Claude Code skill · maxschottke-spec/seo-survival-kit · plugins/seo-rescue/skills/recovery-monitor/SKILL.md · MIT
     Source: https://github.com/maxschottke-spec/seo-survival-kit/blob/HEAD/plugins/seo-rescue/skills/recovery-monitor/SKILL.md
     Detected by: declared+detected · Regenerated on every run; edit the upstream skill, not this copy. -->

# Recovery Monitor

Read and follow the full command specification:

1. Read `${CLAUDE_PLUGIN_ROOT}/commands/recovery-monitor.md` for the complete workflow.
2. After collecting Sistrix + DataForSEO data, call `node "${CLAUDE_PLUGIN_ROOT}/scripts/recovery-monitor.js"` helper functions.
3. Validate each history entry against `${CLAUDE_PLUGIN_ROOT}/schemas/history.schema.json`.
