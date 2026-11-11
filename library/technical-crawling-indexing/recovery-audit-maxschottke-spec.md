---
name: "recovery-audit"
description: "Audits all SEO changes made to a domain within a given period (read-only). Reconstructs change history from cache, Shopware updatedAt fields and crawl diffs when logs are missing. Detects Settlement-Gate-triggering Major Batches, writes recovery-gate.json, and emits the hypothesis_registry that recovery-plan needs for live-fix-eligible actions."
summary: "Audits historical SEO changes on a domain to support core update recovery."
category: "technical-crawling-indexing"
platforms: ["claude-code"]
platform_source: "declared+detected"
repo: "maxschottke-spec/seo-survival-kit"
repo_url: "https://github.com/maxschottke-spec/seo-survival-kit"
source: "https://github.com/maxschottke-spec/seo-survival-kit/blob/HEAD/plugins/seo-rescue/skills/recovery-audit/SKILL.md"
raw_source: "https://raw.githubusercontent.com/maxschottke-spec/seo-survival-kit/HEAD/plugins/seo-rescue/skills/recovery-audit/SKILL.md"
ref: "HEAD"
discovered_via: "github-search"
license: "MIT"
stars: 11
collected: "2026-11-11"
---

<!-- Claude Code skill · maxschottke-spec/seo-survival-kit · plugins/seo-rescue/skills/recovery-audit/SKILL.md · MIT
     Source: https://github.com/maxschottke-spec/seo-survival-kit/blob/HEAD/plugins/seo-rescue/skills/recovery-audit/SKILL.md
     Detected by: declared+detected · Regenerated on every run; edit the upstream skill, not this copy. -->

# Recovery Audit

Read and follow the full command specification:

1. Read `${CLAUDE_PLUGIN_ROOT}/commands/recovery-audit.md` for the complete workflow.
2. Read `${CLAUDE_PLUGIN_ROOT}/references/SEO_SETTLEMENT_GATE.md` for Major Batch trigger thresholds and unlock criteria.
3. Read `${CLAUDE_PLUGIN_ROOT}/references/HYPOTHESIS_VERIFICATION_GATE.md` for hypothesis status definitions.
4. Validate output against `${CLAUDE_PLUGIN_ROOT}/schemas/seo-change-audit.schema.json` and `${CLAUDE_PLUGIN_ROOT}/schemas/recovery-gate.schema.json`.

This command is the **writer** of `~/.cache/seo-rescue/{slug}/recovery-gate.json` and of the `hypothesis_registry` consumed by `recovery-plan`. Run it before `recovery-plan` whenever live-fix-eligible actions are needed.
