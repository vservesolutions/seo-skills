---
name: "content-brief-builder"
description: "Compose human-readable content brief from research.json + angle.json + outline.json. For handing off to writers (human or AI). Optional /brief command."
category: "content-strategy"
platforms: ["claude-code"]
platform_source: "declared+detected"
repo: "XuanRanL/loamwright-SEO-Skill"
repo_url: "https://github.com/XuanRanL/loamwright-SEO-Skill"
source: "https://github.com/XuanRanL/loamwright-SEO-Skill/blob/HEAD/subskills/plan/content-brief-builder/SKILL.md"
raw_source: "https://raw.githubusercontent.com/XuanRanL/loamwright-SEO-Skill/HEAD/subskills/plan/content-brief-builder/SKILL.md"
ref: "HEAD"
discovered_via: "github-search"
license: "Apache-2.0"
stars: 52
collected: "2026-11-08"
---

<!-- Claude Code skill · XuanRanL/loamwright-SEO-Skill · subskills/plan/content-brief-builder/SKILL.md · Apache-2.0
     Source: https://github.com/XuanRanL/loamwright-SEO-Skill/blob/HEAD/subskills/plan/content-brief-builder/SKILL.md
     Detected by: declared+detected · Regenerated on every run; edit the upstream skill, not this copy. -->

# Content Brief Builder

Generates a markdown brief that summarizes everything a writer needs.

## Output

`workspace/{task_id}/content-brief.md`:

```markdown
# Brief: {title}

## Goal
Primary keyword: {primary}
Target word count: {wc}
Target audience: {persona}
Format: {format_id}
Angle: {angle}

## Research highlights
- SERP composition: {N listicles, M how-tos, K other}
- AI Overview present: yes/no
- ChatGPT/PPLX recognizes brand: yes/no
- Top 3 competitor titles
- Top 5 content gaps
- Recommended quotes/stats

## Outline
{from outline.json — sections + word budgets}

## Style requirements
- Voice: {voice_pair}
- Reading level: grade {N}
- Citation Capsule per H2: required
- ≥2 Information Gain Markers
- AI tells ≤5 distinct, em-dash = 0

## Source references (pre-vetted)
{Tier-1 sources from research}
```

Used by `/brief <keyword>` command to produce a one-pager handoff doc.
