---
name: "seo-schema"
description: "Inspect, validate or draft Schema.org JSON-LD grounded in visible page facts. Use for structured data or rich-result markup requests."
summary: "Inspects, validates, or drafts Schema.org JSON-LD markup grounded in visible page facts."
category: "structured-data"
platforms: ["unspecified"]
platform_source: "none"
repo: "AgriciDaniel/chatgpt-seo"
repo_url: "https://github.com/AgriciDaniel/chatgpt-seo"
source: "https://github.com/AgriciDaniel/chatgpt-seo/blob/HEAD/plugins/ai-marketing-hub-seo/skills/seo-schema/SKILL.md"
raw_source: "https://raw.githubusercontent.com/AgriciDaniel/chatgpt-seo/HEAD/plugins/ai-marketing-hub-seo/skills/seo-schema/SKILL.md"
ref: "HEAD"
discovered_via: "github-search"
license: "MIT"
stars: 906
collected: "2026-11-13"
---

<!-- Unspecified skill · AgriciDaniel/chatgpt-seo · plugins/ai-marketing-hub-seo/skills/seo-schema/SKILL.md · MIT
     Source: https://github.com/AgriciDaniel/chatgpt-seo/blob/HEAD/plugins/ai-marketing-hub-seo/skills/seo-schema/SKILL.md
     Detected by: none · Regenerated on every run; edit the upstream skill, not this copy. -->

# Structured data

## Input

Page HTML or visible entity facts and the requested rich-result purpose.

## Evidence and runtime

If a skill-resource reader fails to open a linked supporting file, try the
available file or execution tool using the installed plugin root returned by
the host or resolved from this skill's location. Do not hardcode a home folder,
version, or working directory. Distinguish a failed reader call from an absent
file, and files actually attempted from files not attempted. Report a resource
as unavailable only after the supported access paths have failed. If no file
or execution access is available, continue within the evidence you can read
and state that limit.

Read [the operating contract](../../references/operating-contract.md) when this
workflow is selected. Use [runtime and data paths](../../references/runtime-and-data.md)
when choosing a tool or handling missing data. Recheck relevant
[search facts and primary sources](../../references/current-search-facts.md)
before date-sensitive claims. For a quantitative diagnostic, read
[scoring](../../references/scoring.md); unavailable categories stay unknown.

## Supporting resources

Read only the resources needed for the selected part of this task:

- [validation layers](../../references/schema-decisions.md).
- [JSON-LD fact comparisons](../../references/dataset-contracts.md).

- [schema review template](../../assets/schema-review.md).

## Workflow

1. Extract JSON-LD, Microdata or RDFa when actual source is available. Use analyze_html.py for JSON-LD syntax and type detection, not full eligibility validation.
2. Identify the page's real entity and open the current applicable Google feature documentation. Separate JSON syntax, Schema.org validity, Google eligibility and visible-content agreement.
3. Check required and relevant recommended properties, graph identity, absolute URLs, date formats, price/availability currency and factual review provenance.
4. Draft markup only from established facts. Omit unsupported optional properties. If a required fact is missing, list it or deliver a clearly labeled draft rather than fictional data.
5. Apply current FAQ/HowTo rich-result guidance. Existing FAQPage does not need automatic removal. Ratings and reviews must be genuine, visible and eligible for the entity.
6. Parse the output JSON when execution is available. Supply the next independent check in Google's relevant validator; do not label it passed unless it was actually run.

## Deliverable

A validation table with separate layers, corrected or proposed JSON-LD, a visible-fact mapping and outstanding eligibility checks.

## Boundary

A parsed JSON-LD block does not establish rich-result eligibility, display, ranking improvement or AI citation benefit.

Adapted from the public [Claude SEO seo-schema workflow](https://github.com/AgriciDaniel/claude-seo/blob/4b99de2f7de7e7d5247042e5fb5b4ea9368ef734/skills/seo-schema/SKILL.md).
