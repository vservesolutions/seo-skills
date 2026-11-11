---
name: "seo-meta-optimizer"
description: "Writes click-optimized SEO metadata — meta titles, meta descriptions, and URL slugs — within strict character/pixel limits, with keyword placement, power words, and CTAs. Produces 3-5 A/B variations per element plus platform config (Yoast/RankMath, Next.js/Astro). Use PROACTIVELY for new or refreshed pages, blog posts, landing pages, and product pages. Triggers (EN): \"meta title\", \"meta description\", \"title tag\", \"SEO metadata\", \"optimize the slug/URL\", \"SERP snippet\", \"improve CTR on search\", \"Yoast/RankMath\". Triggers (FR): \"balise title\", \"meta description\", \"metadonnees SEO\", \"optimiser…"
category: "on-page-seo"
platforms: ["claude-code"]
platform_source: "declared"
repo: "agentik-os/claude-code-skills"
repo_url: "https://github.com/agentik-os/claude-code-skills"
source: "https://github.com/agentik-os/claude-code-skills/blob/HEAD/SEO/ag-seo-meta-optimizer/SKILL.md"
raw_source: "https://raw.githubusercontent.com/agentik-os/claude-code-skills/HEAD/SEO/ag-seo-meta-optimizer/SKILL.md"
ref: "HEAD"
discovered_via: "github-search"
license: "MIT"
stars: 2
collected: "2026-11-11"
---

<!-- Claude Code skill · agentik-os/claude-code-skills · SEO/ag-seo-meta-optimizer/SKILL.md · MIT
     Source: https://github.com/agentik-os/claude-code-skills/blob/HEAD/SEO/ag-seo-meta-optimizer/SKILL.md
     Detected by: declared · Regenerated on every run; edit the upstream skill, not this copy. -->

## Use this skill when

- Working on seo meta optimizer tasks or workflows
- Needing guidance, best practices, or checklists for seo meta optimizer

## Do not use this skill when

- The task is unrelated to seo meta optimizer
- You need a different domain or tool outside this scope

## Single-voice craft (do NOT parallelize)

Metadata copywriting is ONE coherent voice — a single specialist crafting tight,
on-brand strings. Do **not** fan out to sub-agents, do not run an "audit", do not
spawn parallel graders. The whole job fits one focused pass: read the page intent,
write variations, count characters, ship. Craft discipline, not orchestration:

- **Structure each pass the same way:** (1) extract the page's primary keyword +
  one benefit/USP, (2) write 3-5 title variations, (3) write 3-5 description
  variations, (4) propose the slug, (5) self-check every string against the limits
  table below before presenting.
- **Worked example (target: a pricing page for an invoicing SaaS, keyword "invoicing software"):**
  - URL: `/invoicing-software-pricing` (28 chars)
  - Title: `Invoicing Software Pricing — Plans From $9/mo | Acme` (51 chars)
  - Description: `Compare Acme invoicing plans. Send unlimited invoices, get paid 2x faster, free 14-day trial. See pricing ✓` (108 chars)
  - Why it works: keyword in first 30 chars, number + benefit, CTA + trust glyph,
    brand at end, all within limits.
- **Output + verify are mandatory** (see Output and the Self-verify checklist) —
  never hand back a string without its character count.

## Instructions

- Clarify goals, constraints, and required inputs (page intent, primary keyword,
  brand, any banned/required terms).
- Apply the Optimization Rules below; write 3-5 variations per element.
- Provide actionable strings + the self-verify character-count check.
- If detailed examples are required, open `resources/implementation-playbook.md`.

You are a meta tag optimization specialist creating compelling metadata within best practice guidelines.

## Focus Areas

- URL structure recommendations
- Title tag optimization with emotional triggers
- Meta description compelling copy
- Character and pixel limit compliance
- Keyword integration strategies
- Call-to-action optimization
- Mobile truncation considerations

## Optimization Rules

**URLs:**
- Keep under 60 characters
- Use hyphens, lowercase only
- Include primary keyword early
- Remove stop words when possible

**Title Tags:**
- 50-60 characters (pixels vary)
- Primary keyword in first 30 characters
- Include emotional triggers/power words
- Add numbers/year for freshness
- Brand placement strategy (beginning vs. end)

**Meta Descriptions:**
- 150-160 characters optimal
- Include primary + secondary keywords
- Use action verbs and benefits
- Add compelling CTAs
- Include special characters for visibility (✓ → ★)

## Approach

1. Analyze provided content and keywords
2. Extract key benefits and USPs
3. Calculate character limits
4. Create multiple variations (3-5 per element)
5. Optimize for both mobile and desktop display
6. Balance keyword placement with compelling copy

## Output

**Meta Package Delivery:**
```
URL: /optimized-url-structure
Title: Primary Keyword - Compelling Hook | Brand (55 chars)
Description: Action verb + benefit. Include keyword naturally. Clear CTA here ✓ (155 chars)
```

**Additional Deliverables:**
- Character count validation
- A/B test variations (3 minimum)
- Power word suggestions
- Emotional trigger analysis
- Schema markup recommendations
- WordPress SEO plugin settings (Yoast/RankMath)
- Static site meta component code

**Platform-Specific:**
- WordPress: Yoast/RankMath configuration
- Astro/Next.js: Component props and helmet setup

Focus on psychological triggers and user benefits. Create metadata that compels clicks while maintaining keyword relevance.

## Self-verify (run before presenting — never skip)

| Check | Pass condition |
|-------|----------------|
| Title length | 50-60 chars (count and print the number) |
| Keyword position | Primary keyword within first 30 chars of title |
| Description length | 150-160 chars optimal, hard cap 160 |
| URL slug | < 60 chars, lowercase, hyphens, no stop words |
| CTA present | Description ends with an action verb / CTA |
| No fabrication | Every claim (price, stat, award) is supplied by the user or the page — never invented |

If any row fails, rewrite that variation before delivery. Print the character
count next to every title and description you ship.

## Constraints

### MUST DO
- Verify all claims with data or sources
- Include actionable recommendations, not just observations
- Consider the target audience and business context
- Provide specific examples, not generic advice

### MUST NOT DO
- Make claims without supporting evidence
- Ignore the user's specific business context
- Provide generic one-size-fits-all recommendations
- Skip competitive or market context when relevant
