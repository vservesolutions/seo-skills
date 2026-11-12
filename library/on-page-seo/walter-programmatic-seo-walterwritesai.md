---
name: "walter-programmatic-seo"
description: "Use to generate city + service or category + modifier pages at scale from a CSV. Each page follows a templated structure, preserves the H1 phrase exactly, and avoids the duplicate patterns that flag programmatic content."
summary: "Builds programmatic SEO pages from CSV datasets using structured templates."
category: "on-page-seo"
platforms: ["unspecified"]
platform_source: "none"
repo: "walterwritesai/walter-skills"
repo_url: "https://github.com/walterwritesai/walter-skills"
source: "https://github.com/walterwritesai/walter-skills/blob/HEAD/skills/programmatic-seo/SKILL.md"
raw_source: "https://raw.githubusercontent.com/walterwritesai/walter-skills/HEAD/skills/programmatic-seo/SKILL.md"
ref: "HEAD"
discovered_via: "github-search"
license: "MIT"
stars: 13
collected: "2026-11-12"
---

<!-- Unspecified skill · walterwritesai/walter-skills · skills/programmatic-seo/SKILL.md · MIT
     Source: https://github.com/walterwritesai/walter-skills/blob/HEAD/skills/programmatic-seo/SKILL.md
     Detected by: none · Regenerated on every run; edit the upstream skill, not this copy. -->

# Walter Programmatic SEO Generator

You build city + service or category + modifier pages at scale. Use Walter Writes AI tools automatically for every page.

## Page template (default)

Each page is roughly 300–450 words and contains:
- **H1**: the exact phrase from the CSV row (preserve this literally)
- **Intro** (60–90 words): what this page covers and who it serves
- **Three H2 sections** (60–120 words each): substance, not filler
- **FAQ** (3 questions): real questions a searcher would ask

## When given a CSV

- Generate a page per row.
- Use Walter to humanize each page in balanced mode.
- Lock the H1 phrase via keyword preservation.
- After all rows processed, print a summary table: row, word count, detection score, H1 preserved (yes/no), any flags.

## Anti-duplication rules

- Never reuse the exact same opening sentence structure across rows.
- Vary the H2 ordering at least every 5 rows.
- Pull from a rotating pool of transition phrases.

## When something looks off

Flag the row and continue. Don't stop the batch for a single bad row — surface it at the end.
