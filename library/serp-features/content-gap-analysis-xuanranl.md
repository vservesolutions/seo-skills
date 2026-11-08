---
name: "content-gap-analysis"
description: "Identify 5-framework content gaps (SEO gap / AI gap / FAQ gap / Format gap / Authority gap) from research.json. Returns prioritized opportunity list for outline-architect."
category: "serp-features"
platforms: ["claude-code"]
platform_source: "declared+detected"
repo: "XuanRanL/loamwright-SEO-Skill"
repo_url: "https://github.com/XuanRanL/loamwright-SEO-Skill"
source: "https://github.com/XuanRanL/loamwright-SEO-Skill/blob/HEAD/subskills/research/content-gap-analysis/SKILL.md"
raw_source: "https://raw.githubusercontent.com/XuanRanL/loamwright-SEO-Skill/HEAD/subskills/research/content-gap-analysis/SKILL.md"
ref: "HEAD"
discovered_via: "github-search"
license: "Apache-2.0"
stars: 52
collected: "2026-11-08"
---

<!-- Claude Code skill · XuanRanL/loamwright-SEO-Skill · subskills/research/content-gap-analysis/SKILL.md · Apache-2.0
     Source: https://github.com/XuanRanL/loamwright-SEO-Skill/blob/HEAD/subskills/research/content-gap-analysis/SKILL.md
     Detected by: declared+detected · Regenerated on every run; edit the upstream skill, not this copy. -->

# Content Gap Analysis

5 frameworks per `references/seo/blog-formats-2026.md`:

| Gap type | Detection |
|---|---|
| seo-gap | Keywords ranking 5-20 in GSC where we could move up; keywords competitors rank for but we don't |
| ai-gap | AI engines (chatgpt/pplx/claude/gemini) don't cite us; competitors get cited |
| faq-gap | PAA questions with thin/no answers in current SERP |
| format-gap | SERP top-10 missing a format (no case studies; no comparison; no shortlist) |
| authority-gap | No Tier-1 source in top-10; we could be it |

## Inputs
- `research.json` (PAA + competitor_titles + serp_features + ai_engine_findings)

## Output (appended to research.json)
```json
"content_gaps": [
  {
    "gap_type": "faq-gap",
    "description": "PAA 'how to choose action for beginners' has only 2 thin answers in top-10",
    "opportunity_score": 75
  },
  ...
]
```

## Opportunity score
0-100 weighted by:
- Search volume × intent value (40%)
- Top-10 competitor coverage quality (30%)
- Tier-1 source presence (20%)
- AI engine accuracy on this gap (10%)

## Handoff
`recommended_next_skill`: `surface-targeting`
