---
name: "recovery-full"
description: "Full recovery workflow orchestrator. Chains recovery-diagnose, recovery-crawl, recovery-audit, recovery-plan, and recovery-monitor in sequence. One command for complete domain recovery analysis from diagnosis to monitoring setup. Gracefully degrades if individual steps fail."
category: "algorithm-updates"
platforms: ["claude-code"]
platform_source: "declared+detected"
repo: "maxschottke-spec/seo-survival-kit"
repo_url: "https://github.com/maxschottke-spec/seo-survival-kit"
source: "https://github.com/maxschottke-spec/seo-survival-kit/blob/HEAD/plugins/seo-rescue/skills/recovery-full/SKILL.md"
raw_source: "https://raw.githubusercontent.com/maxschottke-spec/seo-survival-kit/HEAD/plugins/seo-rescue/skills/recovery-full/SKILL.md"
ref: "HEAD"
discovered_via: "github-search"
license: "MIT"
stars: 11
collected: "2026-11-08"
---

<!-- Claude Code skill · maxschottke-spec/seo-survival-kit · plugins/seo-rescue/skills/recovery-full/SKILL.md · MIT
     Source: https://github.com/maxschottke-spec/seo-survival-kit/blob/HEAD/plugins/seo-rescue/skills/recovery-full/SKILL.md
     Detected by: declared+detected · Regenerated on every run; edit the upstream skill, not this copy. -->

# Recovery Full Workflow

Read and follow the full command specification:

1. Read `${CLAUDE_PLUGIN_ROOT}/commands/recovery-full.md` for the orchestration workflow.
2. Invoke each sub-command in sequence by reading and following its command specification.
3. Check artifact status after each step before proceeding.
