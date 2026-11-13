---
name: "recovery-plan"
description: "Generates a prioritized recovery action plan from diagnosis + crawl data. Determines recovery phase (R1-R5), builds Do-Not-Touch list for stable keywords, prioritizes actions by Impact x Effort x Risk, enforces batch-change limits. Requires recovery-diagnose to have run first."
summary: "Generates prioritized action plans for recovering search visibility after algorithm updates."
category: "algorithm-updates"
platforms: ["claude-code"]
platform_source: "declared+detected"
repo: "maxschottke-spec/seo-survival-kit"
repo_url: "https://github.com/maxschottke-spec/seo-survival-kit"
source: "https://github.com/maxschottke-spec/seo-survival-kit/blob/HEAD/plugins/seo-rescue/skills/recovery-plan/SKILL.md"
raw_source: "https://raw.githubusercontent.com/maxschottke-spec/seo-survival-kit/HEAD/plugins/seo-rescue/skills/recovery-plan/SKILL.md"
ref: "HEAD"
discovered_via: "github-search"
license: "MIT"
stars: 11
collected: "2026-11-13"
---

<!-- Claude Code skill · maxschottke-spec/seo-survival-kit · plugins/seo-rescue/skills/recovery-plan/SKILL.md · MIT
     Source: https://github.com/maxschottke-spec/seo-survival-kit/blob/HEAD/plugins/seo-rescue/skills/recovery-plan/SKILL.md
     Detected by: declared+detected · Regenerated on every run; edit the upstream skill, not this copy. -->

# Recovery Plan

Read and follow the full command specification:

1. Read `${CLAUDE_PLUGIN_ROOT}/commands/recovery-plan.md` for the complete workflow.
2. Read `${CLAUDE_PLUGIN_ROOT}/references/RECOVERY_SYSTEM.md` for phase determination and risk matrix.
3. Read `${CLAUDE_PLUGIN_ROOT}/references/DECISION_ENGINE.md` for prioritization rules.
4. Validate output against `${CLAUDE_PLUGIN_ROOT}/schemas/action-plan.schema.json`.
