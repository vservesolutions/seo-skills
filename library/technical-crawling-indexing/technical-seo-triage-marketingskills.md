---
name: "technical-seo-triage"
description: "Prioritize crawl, indexation, canonical, schema, and internal-link issues from crawler output or Search Console. Use when Codex needs to identify and rank technical SEO fixes by impact."
summary: "Prioritizes crawl, indexation, canonical, and schema issues from crawler or Search Console output."
category: "technical-crawling-indexing"
platforms: ["unspecified"]
platform_source: "none"
repo: "marketingskills/seo"
repo_url: "https://github.com/marketingskills/seo"
source: "https://github.com/marketingskills/seo/blob/HEAD/skills/technical-seo-triage/SKILL.md"
raw_source: "https://raw.githubusercontent.com/marketingskills/seo/HEAD/skills/technical-seo-triage/SKILL.md"
ref: "HEAD"
discovered_via: "github-search"
license: "MIT"
stars: 10
collected: "2026-11-12"
---

<!-- Unspecified skill · marketingskills/seo · skills/technical-seo-triage/SKILL.md · MIT
     Source: https://github.com/marketingskills/seo/blob/HEAD/skills/technical-seo-triage/SKILL.md
     Detected by: none · Regenerated on every run; edit the upstream skill, not this copy. -->

# Technical SEO Triage

## Overview

Given crawl data or Search Console coverage data, identify and prioritize technical SEO issues by their expected impact on organic performance. Covers crawl errors, indexation gaps, canonical misconfigurations, schema validation, and internal link structure problems.

## Inputs

- Crawl output (Screaming Frog, Sitebulb, or custom JSON/CSV)
- Search Console coverage report (pasted or via live data bridge)
- Optional: sitemap URLs

## Workflow

1. Load and normalize the crawl or coverage data.
2. Identify issues by category:
   - Crawl: 4xx/5xx, redirect chains, blocked resources, excessive depth
   - Indexation: noindex on organic pages, orphan pages, thin content detected
   - Canonical: missing, conflicting, or cross-domain canonicals
   - Schema: missing core schema, validation errors, type mismatch
   - Internal links: broken links, orphan pages, excessive links per page
3. Score each issue by:
   - Pages affected
   - Traffic at risk (from GSC data if available)
   - Effort to fix
4. Group related issues and recommend batch fixes.
5. Output a prioritized fix list.

## Output

Prioritized technical issue report with affected URLs, impact estimate, and recommended fix.
