---
name: "schema-fix-writer"
description: "Propose schema markup changes from page type and SERP context. Use when Codex needs to write or fix structured data for better SERP display and rich results eligibility."
summary: "Proposes and writes schema markup changes to improve SERP display and rich results."
category: "structured-data"
platforms: ["unspecified"]
platform_source: "none"
repo: "marketingskills/seo"
repo_url: "https://github.com/marketingskills/seo"
source: "https://github.com/marketingskills/seo/blob/HEAD/skills/schema-fix-writer/SKILL.md"
raw_source: "https://raw.githubusercontent.com/marketingskills/seo/HEAD/skills/schema-fix-writer/SKILL.md"
ref: "HEAD"
discovered_via: "github-search"
license: "MIT"
stars: 10
collected: "2026-11-09"
---

<!-- Unspecified skill · marketingskills/seo · skills/schema-fix-writer/SKILL.md · MIT
     Source: https://github.com/marketingskills/seo/blob/HEAD/skills/schema-fix-writer/SKILL.md
     Detected by: none · Regenerated on every run; edit the upstream skill, not this copy. -->

# Schema Fix Writer

## Overview

Given a page URL and its content, analyze what schema types would be appropriate and propose specific JSON-LD or microdata changes. Uses the page type (article, product, FAQ, how-to, local business, etc.) and current SERP features to determine the best schema strategy.

## Inputs

- Page URL and optionally its rendered content
- Current schema (if any) — paste from source or tool output
- Page type or topic

## Workflow

1. Determine the page type from content analysis.
2. Check the page's current schema markup for errors or missing fields.
3. Research the target SERP for rich result types present.
4. Propose schema changes:
   - Add missing schema type for the page type
   - Fix validation errors in existing schema
   - Add relevant properties (review, FAQ, how-to steps, etc.)
   - Remove deceptive or irrelevant markup
5. Write the JSON-LD or microdata snippet.
6. Include testing instructions (Schema.org validator, Rich Results Test).

## Output

Schema recommendation with proposed markup, validation notes, and SERP eligibility impact.
