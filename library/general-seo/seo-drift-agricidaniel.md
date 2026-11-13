---
name: "seo-drift"
description: "Compare SEO snapshots, baselines or exports and explain observable changes. Use for SEO drift or before/after checks."
summary: "Compares SEO snapshots to explain performance changes."
category: "general-seo"
platforms: ["unspecified"]
platform_source: "none"
repo: "AgriciDaniel/chatgpt-seo"
repo_url: "https://github.com/AgriciDaniel/chatgpt-seo"
source: "https://github.com/AgriciDaniel/chatgpt-seo/blob/HEAD/plugins/ai-marketing-hub-seo/skills/seo-drift/SKILL.md"
raw_source: "https://raw.githubusercontent.com/AgriciDaniel/chatgpt-seo/HEAD/plugins/ai-marketing-hub-seo/skills/seo-drift/SKILL.md"
ref: "HEAD"
discovered_via: "github-search"
license: "MIT"
stars: 906
collected: "2026-11-13"
---

<!-- Unspecified skill · AgriciDaniel/chatgpt-seo · plugins/ai-marketing-hub-seo/skills/seo-drift/SKILL.md · MIT
     Source: https://github.com/AgriciDaniel/chatgpt-seo/blob/HEAD/plugins/ai-marketing-hub-seo/skills/seo-drift/SKILL.md
     Detected by: none · Regenerated on every run; edit the upstream skill, not this copy. -->

# SEO change comparison

## Input

Two named snapshots/exports or a request to capture a baseline of available evidence.

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

- [control regression retesting](../../references/technical-checks.md).

## Workflow

1. Capture or load only the stated material, with URL, date, source/tool and device/scope. Use available source HTML and the offline analyzer for repeatable static snapshots.
2. Use ../../scripts/compare_snapshots.py for two analyzer outputs when Python is available. It requires matching URLs unless an explicit migration comparison is intended.
3. Compare metadata, index controls, canonicals, hreflang, headings, images, links, structured-data fingerprints and content heuristics.
4. Validate suspected control regressions against the intended change. Small HTML formatting changes and raw hashes are not automatically SEO defects.
5. Keep traffic/ranking comparisons separately scoped to comparable dates and filters. Do not infer causation from a snapshot difference.
6. Provide a retest and recovery sequence if a regression is evidenced. If ongoing monitoring is requested, use a supported scheduler only within the user's explicit scope.

## Deliverable

A before/after change report, control-risk review and concrete validation steps. For a baseline-only request save an artifact when supported.

## Boundary

This package does not silently store history, start background jobs or schedule monitoring.

Adapted from the public [Claude SEO seo-drift workflow](https://github.com/AgriciDaniel/claude-seo/blob/4b99de2f7de7e7d5247042e5fb5b4ea9368ef734/skills/seo-drift/SKILL.md).
