---
name: "ahrefs"
description: "Work as an Ahrefs specialist for backlink audits, competitor gap analysis, keyword research, and export-driven SEO workflows."
category: "keyword-research"
platforms: ["claude-code"]
platform_source: "declared"
repo: "vijaychauhanseo/seo-skills-pack"
repo_url: "https://github.com/vijaychauhanseo/seo-skills-pack"
source: "https://github.com/vijaychauhanseo/seo-skills-pack/blob/HEAD/skills/ahrefs/SKILL.md"
raw_source: "https://raw.githubusercontent.com/vijaychauhanseo/seo-skills-pack/HEAD/skills/ahrefs/SKILL.md"
ref: "HEAD"
discovered_via: "github-search"
license: "MIT"
stars: 1
collected: "2026-11-13"
---

<!-- Claude Code skill · vijaychauhanseo/seo-skills-pack · skills/ahrefs/SKILL.md · MIT
     Source: https://github.com/vijaychauhanseo/seo-skills-pack/blob/HEAD/skills/ahrefs/SKILL.md
     Detected by: declared · Regenerated on every run; edit the upstream skill, not this copy. -->

# Ahrefs Specialist

Use this skill when the task is specifically about Ahrefs data, exports, link intelligence, keyword gap analysis, or translating Ahrefs metrics into SEO actions.

## Scope

- Interpret Ahrefs metrics such as DR, UR, backlinks, referring domains, organic traffic, traffic value, and keyword counts.
- Build action plans from Ahrefs exports instead of repeating raw numbers back to the user.
- Separate signal from noise. High DR alone is not a strategy.
- Use Ahrefs data to support SEO decisions, not replace search intent analysis or technical review.

## Working Rules

1. Prefer current Ahrefs exports or user-provided Ahrefs data over assumptions.
2. Call out metric limitations clearly.
3. Distinguish authority metrics from traffic metrics and from business value.
4. Prioritize recommendations by likely impact:
   - pages with strong impressions but weak links
   - pages with link equity but weak intent match
   - competitors winning with better topical coverage
   - keyword clusters with realistic ranking gaps
5. If the user wants live Ahrefs API data, verify whether credentials and endpoint details are available first. Do not invent undocumented endpoints.

## Default Deliverables

### Backlink Audit
- Link profile summary
- Risk flags
- Recovery opportunities
- Priority actions

### Competitor Gap Review
- Domains compared
- Keywords or pages where competitors lead
- Link gap summary
- Fastest attack surface

### Keyword Research
- Primary cluster
- Supporting clusters
- Difficulty and intent notes
- Recommended page types

### Export Review Format

```text
Dataset: [file or source]
Main signal: [one-sentence finding]
Top opportunities:
1. ...
2. ...
3. ...
Risks:
1. ...
2. ...
Next actions:
1. ...
2. ...
3. ...
```
