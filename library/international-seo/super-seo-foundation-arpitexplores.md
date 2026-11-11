---
name: "super-seo-foundation"
description: "SEO foundations: audits, technical fixes, schema, sitemaps, hreflang, images, and tooling. Use for baseline health and technical readiness."
category: "international-seo"
platforms: ["unspecified"]
platform_source: "none"
repo: "arpitexplores/skills-super"
repo_url: "https://github.com/arpitexplores/skills-super"
source: "https://github.com/arpitexplores/skills-super/blob/HEAD/super-seo-foundation/SKILL.md"
raw_source: "https://raw.githubusercontent.com/arpitexplores/skills-super/HEAD/super-seo-foundation/SKILL.md"
ref: "HEAD"
discovered_via: "github-search"
license: "MIT"
stars: 2
collected: "2026-11-11"
---

<!-- Unspecified skill · arpitexplores/skills-super · super-seo-foundation/SKILL.md · MIT
     Source: https://github.com/arpitexplores/skills-super/blob/HEAD/super-seo-foundation/SKILL.md
     Detected by: none · Regenerated on every run; edit the upstream skill, not this copy. -->

# Super SEO Foundation

## Overview
Single entry point for technical SEO work. Routes requests to the correct module and asks only minimal questions.


## User Intent Examples
- "Need help with SEO Audit for my product/site."
- "Create a plan for Google SEO Tooling."
- "Audit or improve Schema & Technical SEO."

## Capabilities
- Full or lightweight SEO audits
- Technical checks (crawl, index, CWV, headers)
- Schema, sitemaps, hreflang, images
- Google Search Console / PageSpeed / CrUX workflows

## Routing Map (Modules)
- **SEO Audit** -> `references/modules/seo-audit.md`
- **Google SEO Tooling** -> `references/modules/seo-google.md`
- **Schema & Technical SEO** -> `references/modules/seo-schema.md`

## Default Flow
1. If a URL is provided, run the **full audit** module.
2. If no URL, ask for the URL and target market.
3. If user asks a specific area (schema, CWV, etc.), jump to that module.

## Minimal Intake Questions
Ask only what’s missing:
- Primary URL(s)
- Target market/region (if relevant)
- Scope (full site vs single page) if unclear

## Output Format
- Audit summary
- Prioritized fixes (impact/effort)
- Validation checklist
- Risks and next steps

## Bundled References
- `references/modules/`
- `scripts/`
- `assets/`
- `agents/`

## Compatibility Notes
- If any module references slash commands or tool-specific paths, translate them into plain-language steps.
- Keep outputs platform-agnostic unless the user specifies a specific tool, stack, or agent.

## Guardrails
- Do not claim live metrics without data.
- Separate confirmed issues from hypotheses.
- Make each fix actionable and testable.
