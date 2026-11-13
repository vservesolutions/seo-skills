---
name: "seo-improve"
description: "Use when applying specific SEO or user-flow improvements to a website repository after findings have been reviewed and the user has authorized source changes."
category: "general-seo"
platforms: ["unspecified"]
platform_source: "none"
repo: "TaeHuiKKIM/agent-seo-kit"
repo_url: "https://github.com/TaeHuiKKIM/agent-seo-kit"
source: "https://github.com/TaeHuiKKIM/agent-seo-kit/blob/HEAD/skills/seo-improve/SKILL.md"
raw_source: "https://raw.githubusercontent.com/TaeHuiKKIM/agent-seo-kit/HEAD/skills/seo-improve/SKILL.md"
ref: "HEAD"
discovered_via: "github-search"
license: "MIT"
stars: 1
collected: "2026-11-13"
---

<!-- Unspecified skill · TaeHuiKKIM/agent-seo-kit · skills/seo-improve/SKILL.md · MIT
     Source: https://github.com/TaeHuiKKIM/agent-seo-kit/blob/HEAD/skills/seo-improve/SKILL.md
     Detected by: none · Regenerated on every run; edit the upstream skill, not this copy. -->

# SEO Improve

## Overview

Turn reviewed findings into narrow, framework-aware changes while preserving
unrelated behavior. Start from an `seo-audit` report or an equivalent list with
evidence and verification methods.

Announce that you are using `seo-improve` and summarize the authorized finding
IDs before editing.

## Approval gate

Do not edit until the user has approved a finding or a clearly bounded group of
findings. Approval to audit is not approval to change code. If approval is
ambiguous, return a change plan and stop.

Do not invent keywords, reviews, ratings, prices, availability, addresses,
credentials, legal claims, product claims, or organization facts. Request the
missing fact or leave a documented content decision for the user.

## Change workflow

1. Re-read repository instructions and the approved finding evidence.
2. Classify each finding as `safe`, `review`, or `human-owned` with
   [the change-risk guide](references/change-risk.md).
3. Identify the canonical owner for metadata, route, navigation, or content.
4. Show the intended files and change shape before editing. Keep one coherent batch; split changes with different owners or risk.
5. Add or update the smallest relevant test when the project supports tests.
6. Make one focused change at a time and preserve existing conventions.
7. For Next.js edits, read
   [the Next.js improvement guide](references/nextjs-improvements.md).
   For common change shapes, read
   [the improvement patterns](references/improvement-patterns.md).
8. Record changed files, finding IDs, assumptions, and the verification command.
9. Hand off to `seo-verify`; do not present an unverified edit as an improvement.

Do not install dependencies, deploy, submit external forms, commit, push, or
open a pull request unless the user separately authorizes that action.

## Exit criteria

- Every edit maps to an approved finding.
- No unrelated refactor or content invention is included.
- Existing architecture and repository instructions are preserved.
- A change ledger and concrete verification plan are available.
- Completion is deferred to `seo-verify`.
