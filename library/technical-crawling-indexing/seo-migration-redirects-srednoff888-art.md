---
name: "seo-migration-redirects"
description: "Use this skill for site migrations, redirect maps, canonical preservation, launch QA, traffic risk mitigation."
category: "technical-crawling-indexing"
platforms: ["unspecified"]
platform_source: "none"
repo: "srednoff888-art/srednoff-os"
repo_url: "https://github.com/srednoff888-art/srednoff-os"
source: "https://github.com/srednoff888-art/srednoff-os/blob/HEAD/.codex/skills/seo-migration-redirects/SKILL.md"
raw_source: "https://raw.githubusercontent.com/srednoff888-art/srednoff-os/HEAD/.codex/skills/seo-migration-redirects/SKILL.md"
ref: "HEAD"
discovered_via: "github-search"
license: "MIT"
stars: 1
collected: "2026-11-14"
---

<!-- Unspecified skill · srednoff888-art/srednoff-os · .codex/skills/seo-migration-redirects/SKILL.md · MIT
     Source: https://github.com/srednoff888-art/srednoff-os/blob/HEAD/.codex/skills/seo-migration-redirects/SKILL.md
     Detected by: none · Regenerated on every run; edit the upstream skill, not this copy. -->

# SEO Migration Redirects

## Decisions

- Inventory old URLs, intended replacements, traffic/link value, and canonical/indexing behavior.
- Use direct relevant redirects, prevent loops/chains, and preserve query/path semantics where needed.

## Acceptance

Test representative URL pairs, sitemap/internal links, and post-release monitoring.

## Constraints

- Do not ship URL migrations without rollback and monitoring plans.
