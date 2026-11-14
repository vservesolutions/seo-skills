---
name: "schema-helper"
description: "Use when generating or validating JSON-LD: FAQ, HowTo, Article, Organization, BreadcrumbList, LocalBusiness. Runs schema_lint.py when validating live URLs. Not for invisible FAQ markup — schema must match visible page content."
category: "structured-data"
platforms: ["claude-code"]
platform_source: "declared+detected"
repo: "coresolstudio/searchhawk-skills"
repo_url: "https://github.com/coresolstudio/searchhawk-skills"
source: "https://github.com/coresolstudio/searchhawk-skills/blob/HEAD/improve/schema-helper/SKILL.md"
raw_source: "https://raw.githubusercontent.com/coresolstudio/searchhawk-skills/HEAD/improve/schema-helper/SKILL.md"
ref: "HEAD"
discovered_via: "github-search"
license: "MIT"
stars: 2
collected: "2026-11-14"
---

<!-- Claude Code skill · coresolstudio/searchhawk-skills · improve/schema-helper/SKILL.md · MIT
     Source: https://github.com/coresolstudio/searchhawk-skills/blob/HEAD/improve/schema-helper/SKILL.md
     Detected by: declared+detected · Regenerated on every run; edit the upstream skill, not this copy. -->

# Schema Helper

Produce accurate JSON-LD aligned with visible content.

## Supported types

Organization · Article/BlogPosting · FAQPage · HowTo · BreadcrumbList · LocalBusiness · WebPage

## Workflow

1. Read visible page content (WebFetch or user paste)
2. Draft JSON-LD matching on-page facts only
3. **Validate:** `python3 scripts/connectors/schema_lint.py <url>` or `--html file`
4. Fix missing required properties from lint report
5. Note FAQ/HowTo deprecation warnings — AEO value remains; rich results limited

## Rules

- Never invent ratings, prices, or FAQ answers not on the page
- FAQ schema Q&A must match visible text exactly

## Next Best Skill

`publish-checklist` → `content-quality-gate` for publish gate
