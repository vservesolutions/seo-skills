---
name: "seo-verify"
description: "Use when checking whether approved SEO, metadata, navigation, rendering, or performance changes actually work before reporting completion."
category: "technical-crawling-indexing"
platforms: ["unspecified"]
platform_source: "none"
repo: "TaeHuiKKIM/agent-seo-kit"
repo_url: "https://github.com/TaeHuiKKIM/agent-seo-kit"
source: "https://github.com/TaeHuiKKIM/agent-seo-kit/blob/HEAD/skills/seo-verify/SKILL.md"
raw_source: "https://raw.githubusercontent.com/TaeHuiKKIM/agent-seo-kit/HEAD/skills/seo-verify/SKILL.md"
ref: "HEAD"
discovered_via: "github-search"
license: "MIT"
stars: 1
collected: "2026-11-13"
---

<!-- Unspecified skill · TaeHuiKKIM/agent-seo-kit · skills/seo-verify/SKILL.md · MIT
     Source: https://github.com/TaeHuiKKIM/agent-seo-kit/blob/HEAD/skills/seo-verify/SKILL.md
     Detected by: none · Regenerated on every run; edit the upstream skill, not this copy. -->

# SEO Verify

## Overview

Prove the approved change fixed the original finding without breaking the
project. Verification is finding-specific and uses fresh evidence.

Announce that you are using `seo-verify` and list the findings being verified.

## Evidence gate

Do not claim success without fresh evidence from the current code and current
environment. A diff, a previous run, a passing linter, or an agent statement is
not proof of rendered behavior.

Use [the verification matrix](references/verification-matrix.md) to select the
smallest complete proof. If a required capability is unavailable, mark the
finding `not verified` and state what remains.

## Verification workflow

1. Restate each finding's original symptom and expected result.
2. Run the project's full relevant test and build commands.
3. Re-check the exact source or rendered symptom for every finding.
4. Re-open changed user flows when browser tooling is available.
5. Compare Lighthouse only with the same URL, device, throttling, and run
   method; use repeated runs for a performance claim.
6. Record command, exit code, completion time, concise output, and finding
   evidence. Validate structured evidence with
   `scripts/validate-evidence.mjs` when using JSON.
7. Re-run the complete audit after targeted checks. Use
   [the regression review](references/regression-review.md) to identify new or
   worsened findings.
8. Report regressions, unavailable checks, and incomparable measurements.

Return JSON when another tool will consume evidence and Markdown when a person
will review it. Both formats must derive from the same finding records.

Do not claim a ranking, traffic, or conversion improvement from repository or
Lighthouse evidence alone.

## Exit criteria

- Relevant tests and build commands have fresh results.
- Every changed finding is `passed`, `failed`, or `not verified` with evidence.
- User flows and Lighthouse claims identify their exact conditions.
- Any failure or missing proof remains visible.
- Only passed findings are described as improved.
