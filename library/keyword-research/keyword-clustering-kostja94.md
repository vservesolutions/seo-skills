---
name: "keyword-clustering"
description: "Groups candidate keywords by user task and tests whether one page can satisfy them. Use for same-page decisions, mixed intent and adjacent queries."
summary: "Groups keywords by user intent to determine single-page targeting."
category: "keyword-research"
platforms: ["claude-code"]
platform_source: "declared"
repo: "kostja94/marketing-skills"
repo_url: "https://github.com/kostja94/marketing-skills"
source: "https://github.com/kostja94/marketing-skills/blob/HEAD/skills/keyword-clustering/SKILL.md"
raw_source: "https://raw.githubusercontent.com/kostja94/marketing-skills/HEAD/skills/keyword-clustering/SKILL.md"
ref: "HEAD"
discovered_via: "awesome-seo-agent-skills"
license: "MIT"
stars: 1072
collected: "2026-11-10"
---

<!-- Claude Code skill · kostja94/marketing-skills · skills/keyword-clustering/SKILL.md · MIT
     Source: https://github.com/kostja94/marketing-skills/blob/HEAD/skills/keyword-clustering/SKILL.md
     Detected by: declared · Regenerated on every run; edit the upstream skill, not this copy. -->

# Keyword Clustering

For each candidate, identify the user's starting state, operation, desired result and next action. Group tentative variants only when one focused page can fully serve them. Check product capability and expected page type. Compare actual ranking URLs and page types in the target locale when available. Record market and date. If search evidence and task analysis disagree, explain the disagreement and leave the decision pending.

Keep the base expression family visible across the handoff. Assign variants to a page cluster or mark their intent pending. A process noun can attract both tool users and readers researching the method; compare page types before deciding. Deduplicate exact repeats while preserving meaningful wording differences.

Classify relationships as same-page variants, parent/child, adjacent tasks, conditional modifiers, mixed intent or exclusions. Free, bulk and API can change the required experience. Shared vocabulary or overlapping results alone cannot establish compatibility. For example, removing white to obtain transparency and adding white for a product listing have opposite output requirements.

Return a representative term, same-page variants, concrete task, expected asset, adjacent clusters, evidence and unresolved check. Preserve hypotheses when evidence is thin. Hand clusters to keyword-opportunity or keyword-mapping; content-strategy owns broader topic organization.
