---
name: "crawl-indexability-sitemaps"
description: "Use this skill for robots.txt, XML sitemaps, canonicalization, redirects, crawl budget, noindex issues."
category: "local-seo"
platforms: ["unspecified"]
platform_source: "none"
repo: "srednoff888-art/srednoff-os"
repo_url: "https://github.com/srednoff888-art/srednoff-os"
source: "https://github.com/srednoff888-art/srednoff-os/blob/HEAD/.codex/skills/crawl-indexability-sitemaps/SKILL.md"
raw_source: "https://raw.githubusercontent.com/srednoff888-art/srednoff-os/HEAD/.codex/skills/crawl-indexability-sitemaps/SKILL.md"
ref: "HEAD"
discovered_via: "github-search"
license: "MIT"
stars: 1
collected: "2026-11-13"
---

<!-- Unspecified skill · srednoff888-art/srednoff-os · .codex/skills/crawl-indexability-sitemaps/SKILL.md · MIT
     Source: https://github.com/srednoff888-art/srednoff-os/blob/HEAD/.codex/skills/crawl-indexability-sitemaps/SKILL.md
     Detected by: none · Regenerated on every run; edit the upstream skill, not this copy. -->

# Crawl Indexability Sitemaps

## Decisions

- Reconcile sitemap URLs with status, redirects, canonical targets, robots directives, and rendered content.
- Sample each template and exclude noncanonical, blocked, or unavailable pages from proposed sitemap changes.

## Acceptance

Report contradictions by URL with the exact crawl observation and verification command.

## Constraints

- Do not block important pages without explaining the consequence.
