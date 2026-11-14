---
name: "content-brief"
description: "Use when the user wants an SEO content brief for a writer, or asks how a page or blog post should be structured to rank for a keyword, what headings and questions to include, how long it should be, or what the top-ranking pages cover. Builds the brief from a SERP analysis plus the business's own expertise and proof."
category: "content-strategy"
platforms: ["claude-code"]
platform_source: "declared"
repo: "AmmarBabbar/seo-skills"
repo_url: "https://github.com/AmmarBabbar/seo-skills"
source: "https://github.com/AmmarBabbar/seo-skills/blob/HEAD/skills/content-brief/SKILL.md"
raw_source: "https://raw.githubusercontent.com/AmmarBabbar/seo-skills/HEAD/skills/content-brief/SKILL.md"
ref: "HEAD"
discovered_via: "github-search"
license: "MIT"
stars: 0
collected: "2026-11-14"
---

<!-- Claude Code skill · AmmarBabbar/seo-skills · skills/content-brief/SKILL.md · MIT
     Source: https://github.com/AmmarBabbar/seo-skills/blob/HEAD/skills/content-brief/SKILL.md
     Detected by: declared · Regenerated on every run; edit the upstream skill, not this copy. -->

# Content Brief

You write briefs that let any writer produce a page that matches search intent, beats the current results and sounds like the business. A good brief removes guesswork.

## Before you start

1. Read `.agents/seo-context.md` for voice, services, cities and proof points.
2. Get: target keyword, target URL (new or existing), page type (service, location, blog) and audience.
3. Check the keyword map so the brief does not create cannibalization.

## Process

1. **SERP analysis** of the top 5-10 results (write the date and location):
   - Dominant intent and format (guide, list, service page, comparison)
   - Common headings and questions covered
   - What is missing or weak (no real prices, no local details, no photos, outdated info)
   - SERP features (local pack, PAA, video, AI Overview)
2. **Angle**: how this page will be clearly better. Usually: first-hand experience, real local details, clearer answers, better visuals.
3. **Outline** with H2/H3s and notes for each section.
4. **Proof** the client must supply: photos, prices, project examples, quotes, licenses.

## Brief template

```markdown
# Brief: {working title}

- Target keyword:
- Secondary keywords:
- Search intent:
- Page type / URL:
- Audience and their main question:
- Suggested length: {range based on SERP, not a fixed number}

## Title tag options (3)
## Meta description options (2)
## H1

## Outline
- H2: ... (what to cover, key points, which question it answers)
  - H3: ...

## Questions to answer (from PAA, GSC, sales calls)

## Entities and terms to cover naturally

## First-hand proof needed from the client
- [ ] Photos of real jobs
- [ ] Price ranges they actually charge
- [ ] A real project example or customer story
- [ ] Expert quote from the owner or technician

## Internal links
- Link to: {URL} with anchor "{anchor}"
- Link from: {existing pages that should link here}

## External sources to cite (official or authoritative)

## CTA (what the reader should do, where it appears)

## Schema

## Avoid
- Generic filler intros, made-up statistics, AI cliches, copying competitor wording
```

## Rules

- Base length on what the SERP needs, not on a fixed word count.
- Mark any data the writer must get from the client as `[CLIENT TO PROVIDE]` instead of inventing it.

## Related skills

`keyword-research`, `seo-content-writing`, `on-page-seo`, `service-pages`, `location-pages`
