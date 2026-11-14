---
name: "core-web-vitals-frontend"
description: "Use this skill for LCP, CLS, INP, rendering performance, image/font loading, frontend vitals fixes."
category: "technical-crawling-indexing"
platforms: ["unspecified"]
platform_source: "none"
repo: "srednoff888-art/srednoff-os"
repo_url: "https://github.com/srednoff888-art/srednoff-os"
source: "https://github.com/srednoff888-art/srednoff-os/blob/HEAD/.codex/skills/core-web-vitals-frontend/SKILL.md"
raw_source: "https://raw.githubusercontent.com/srednoff888-art/srednoff-os/HEAD/.codex/skills/core-web-vitals-frontend/SKILL.md"
ref: "HEAD"
discovered_via: "github-search"
license: "MIT"
stars: 1
collected: "2026-11-14"
---

<!-- Unspecified skill · srednoff888-art/srednoff-os · .codex/skills/core-web-vitals-frontend/SKILL.md · MIT
     Source: https://github.com/srednoff888-art/srednoff-os/blob/HEAD/.codex/skills/core-web-vitals-frontend/SKILL.md
     Detected by: none · Regenerated on every run; edit the upstream skill, not this copy. -->

# Core Web Vitals Frontend

## Decisions

- Separate field LCP/INP/CLS from lab results and reproduce on representative devices/network profiles.
- Use a trace to identify critical resources, long tasks, layout shifts, and interaction bottlenecks.

## Acceptance

Compare repeated measurements and verify the change does not regress accessibility or functionality.

## Constraints

- Do not trade accessibility or correctness for synthetic scores.
