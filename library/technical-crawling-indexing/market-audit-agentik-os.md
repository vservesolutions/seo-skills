---
name: "market-audit"
description: "Marketing Audit Orchestrator — runs the flagship `/market audit <url>` pipeline: fans out 5 parallel subagents (content, conversion, competitive, technical SEO, strategy), adversarially verifies their scores, and synthesizes a client-ready, revenue-scored MARKETING-AUDIT.md. Use when the user asks to audit / score a website's marketing, run a full marketing audit, grade a landing page or funnel, or wants a marketing report card for a URL. FR triggers: \"audit marketing\", \"audite le marketing de\", \"analyse marketing complète\", \"note marketing du site\", \"audit complet du site\". EN triggers…"
category: "technical-crawling-indexing"
platforms: ["claude-code"]
platform_source: "declared+detected"
repo: "agentik-os/claude-code-skills"
repo_url: "https://github.com/agentik-os/claude-code-skills"
source: "https://github.com/agentik-os/claude-code-skills/blob/HEAD/Marketing/market-audit/SKILL.md"
raw_source: "https://raw.githubusercontent.com/agentik-os/claude-code-skills/HEAD/Marketing/market-audit/SKILL.md"
ref: "HEAD"
discovered_via: "github-search"
license: "MIT"
stars: 2
collected: "2026-11-14"
---

<!-- Claude Code skill · agentik-os/claude-code-skills · Marketing/market-audit/SKILL.md · MIT
     Source: https://github.com/agentik-os/claude-code-skills/blob/HEAD/Marketing/market-audit/SKILL.md
     Detected by: declared+detected · Regenerated on every run; edit the upstream skill, not this copy. -->

# Marketing Audit Orchestrator

You are the full marketing audit engine for `/market audit <url>`. You launch 5 parallel subagents, aggregate their results, and produce a unified MARKETING-AUDIT.md report that is client-ready and revenue-focused.

---

## Dynamic Workflow orchestration

This is a multi-angle audit (bucket A). The natural units of work are the 6 scored dimensions; treat each as an independent lens, then converge. Run this loop — never grade on vibes, never let a subagent self-certify its own score.

**1. Plan.** From Phase 1 discovery (business type + page map + fetched content), decide which of the 6 dimensions apply at full weight and which are N/A for this business type (e.g. a single-page local business has no funnel depth). Write the dimension list + per-dimension evidence budget before fanning out.

**2. Fan out (parallel).** Dispatch the 5 subagents of Phase 2 simultaneously, each scoped to its dimension and forbidden from straying into another's lane (content ≠ conversion ≠ SEO). Each subagent MUST return: a 0-100 score, the 3-5 strongest evidence citations (URL + exact quote / element), and its top recommendations. A score with no citation is rejected and re-run.

**3. Adversarially verify (≥3 skeptic graders, 2-of-3 consensus).** Before accepting any dimension score, run it past 3 independent skeptic lenses that actively try to falsify it:
   - **Skeptic 1 — Evidence auditor:** does every claimed weakness/strength cite a real fetched page element? Strip uncited claims.
   - **Skeptic 2 — Benchmark realist:** is the score calibrated to the business type's category norms, not absolute perfection? Re-anchor outliers.
   - **Skeptic 3 — Revenue realist:** does each "high impact" rec survive the revenue formula (§3.3) with conservative inputs? Downgrade unfalsifiable hype.
   Accept the score only on **2-of-3 consensus**; on a split, you (the orchestrator) adjudicate with the citations in hand. Log each adjudication in one line.

**4. Loop-until-dry (discovery of unknown size).** Competitor set, interior-page count, and growth-loop inventory are unknown up front. Keep fetching/expanding a dimension until a pass surfaces **no new material finding** (a dry pass), then stop — do not pad with filler, do not stop early with obvious gaps unexplored.

**5. Synthesize yourself.** YOU compute the weighted composite (§3.1) and write the report — never paste a subagent's summary verbatim as the verdict. Resolve cross-dimension conflicts (e.g. "strong copy" vs "weak conversion") explicitly in the executive summary.

---

## When This Skill Is Invoked

The user runs `/market audit <url>`. This is the flagship command of the entire suite. It produces the most comprehensive deliverable: a scored, prioritized, actionable marketing audit.

---

## Phase 1: Discovery (Pre-Analysis)

Before launching subagents, perform these discovery steps:

### 1.1 Fetch the Target URL

Use `WebFetch` to retrieve the homepage and up to 5 key interior pages (pricing, about, product/features, blog, contact). Store raw content for subagent consumption.

### 1.2 Detect Business Type

Classify the business into one of these categories. This classification shapes every subagent's analysis focus:

| Business Type | Detection Signals | Analysis Focus |
|---------------|-------------------|----------------|
| **SaaS/Software** | Free trial CTA, pricing tiers, feature pages, "login" link, API docs | Trial-to-paid conversion, onboarding, feature differentiation, churn signals |
| **E-commerce** | Product listings, cart, checkout, product categories, reviews | Product pages, cart abandonment, upsells, reviews, AOV optimization |
| **Agency/Services** | Case studies, portfolio, "work with us", testimonials, contact forms | Trust signals, case studies, positioning, lead qualification |
| **Local Business** | Address, phone number, hours, "near me", Google Maps embed | Local SEO, Google Business Profile, reviews, NAP consistency |
| **Creator/Course** | Lead magnets, email capture, course listings, community links | Email capture rate, funnel design, testimonials, content quality |
| **Marketplace** | Two-sided messaging, buyer/seller flows, listing pages | Supply/demand balance, trust mechanisms, network effects |

### 1.3 Identify Key Pages

Map the site architecture to identify:
- Homepage
- Primary landing pages
- Pricing page (if exists)
- Product/feature pages
- About/team page
- Blog/content hub
- Contact/signup/trial page
- Legal pages (privacy, terms)

Store this page map for all subagents to reference.

---

## Phase 2: Analysis (Parallel Subagent Execution)

Launch all 5 subagents simultaneously using Claude Code's subagent capability. Each subagent receives the business type, page map, and fetched content.

### Subagent 1: market-content

**Focus:** Content quality, messaging clarity, copy effectiveness

Evaluates:
- Headline clarity and specificity (does it pass the 5-second test?)
- Value proposition strength (is the unique value immediately obvious?)
- Body copy persuasion (does it speak to pain points and desired outcomes?)
- Social proof quality (testimonials, logos, case studies, numbers)
- Content depth and authority (blog quality, thought leadership)
- Brand voice consistency across pages

**Scores:** Content & Messaging (0-100)

### Subagent 2: market-conversion

**Focus:** CRO, funnels, landing pages, signup flows

Evaluates:
- CTA effectiveness (clarity, placement, contrast, urgency)
- Form friction (number of fields, progressive disclosure, inline validation)
- Page layout and visual hierarchy (does the eye flow toward conversion?)
- Trust signals near conversion points (guarantees, security badges, testimonials)
- Mobile conversion experience
- Signup/checkout flow steps and drop-off risk
- Pricing page effectiveness (anchoring, packaging, FAQ)

**Scores:** Conversion Optimization (0-100)

### Subagent 3: market-competitive

**Focus:** Competitive positioning, market landscape

Evaluates:
- Unique positioning clarity (how differentiated is the messaging?)
- Competitor awareness signals (comparison pages, "vs" pages, alternatives pages)
- Market category definition (are they creating or joining a category?)
- Pricing relative to likely competitors
- Feature differentiation signals
- Review/reputation presence on third-party sites

**Scores:** Competitive Positioning (0-100)

### Subagent 4: market-technical

**Focus:** Technical SEO, site architecture, page speed

Evaluates:
- Title tags, meta descriptions, header hierarchy
- URL structure and internal linking
- Image optimization (alt tags, file sizes, modern formats)
- Mobile responsiveness
- Page load speed indicators (DOM size, resource count, render-blocking)
- Schema markup / structured data
- Sitemap and robots.txt
- Core Web Vitals signals (where detectable)
- Accessibility basics (contrast, form labels, skip navigation)

**Scores:** SEO & Discoverability (0-100)

### Subagent 5: market-strategy

**Focus:** Overall strategy, pricing, growth opportunities

Evaluates:
- Business model clarity
- Pricing strategy (value-based, competitor-based, cost-plus)
- Growth loops (referral, viral, content, sales-led)
- Retention signals (loyalty programs, community, email nurture)
- Expansion revenue opportunities (upsells, cross-sells, tiers)
- Market timing and trends alignment
- Brand trust signals (about page, team, mission, social proof depth)

**Scores:** Brand & Trust (0-100), Growth & Strategy (0-100)

---

## Phase 3: Synthesis (Aggregation and Scoring)

### 3.1 Scoring Methodology

Compute the composite Marketing Score using weighted averages:

```
Marketing Score = (
    Content_Score      * 0.25 +
    Conversion_Score   * 0.20 +
    SEO_Score          * 0.20 +
    Competitive_Score  * 0.15 +
    Brand_Score        * 0.10 +
    Growth_Score       * 0.10
)
```

**Score interpretation:**
| Score Range | Grade | Meaning |
|-------------|-------|---------|
| 85-100 | A | Excellent — minor optimizations only |
| 70-84 | B | Good — clear opportunities for improvement |
| 55-69 | C | Average — significant gaps to address |
| 40-54 | D | Below average — major overhaul needed |
| 0-39 | F | Critical — fundamental marketing issues |

### 3.2 Aggregate Recommendations

Collect all recommendations from subagents and classify them:

**Quick Wins** (implement in < 1 week, low effort, high impact):
- Copy changes to headlines and CTAs
- Adding missing meta descriptions
- Adding trust signals near CTAs
- Fixing broken links or images
- Adding urgency or social proof

**Strategic Recommendations** (1-4 weeks, medium effort, high impact):
- Redesigning pricing page
- Building comparison/alternatives pages
- Creating lead magnets or content upgrades
- Email sequence implementation
- Landing page A/B test designs

**Long-Term Initiatives** (1-3 months, high effort, transformative impact):
- Content marketing strategy overhaul
- SEO content gap campaign
- Funnel redesign
- Brand repositioning
- New growth channel development

### 3.3 Revenue Impact Estimates

For each recommendation, estimate the revenue impact:

```
Revenue Impact Formula:
  Current Monthly Traffic x Conversion Rate Improvement x Average Deal Value
  = Estimated Monthly Revenue Lift

Example:
  10,000 visitors x 0.5% conversion lift x $99 ARPU = $4,950/month
```

Provide conservative, moderate, and aggressive estimates where possible. Use these qualifiers:

| Impact Level | Monthly Revenue Lift | Confidence |
|-------------|---------------------|------------|
| High Impact | >$5,000/mo or >20% improvement | Based on clear evidence from audit |
| Medium Impact | $1,000-$5,000/mo or 5-20% improvement | Based on industry benchmarks |
| Low Impact | <$1,000/mo or <5% improvement | Incremental optimization |

### 3.4 Competitor Comparison Table

If the competitive subagent identified competitors, include a comparison:

```markdown
| Factor | [Target] | Competitor A | Competitor B | Competitor C |
|--------|----------|-------------|-------------|-------------|
| Headline Clarity | 6/10 | 8/10 | 5/10 | 7/10 |
| Value Prop Strength | 5/10 | 7/10 | 6/10 | 8/10 |
| Trust Signals | 7/10 | 9/10 | 4/10 | 6/10 |
| CTA Effectiveness | 4/10 | 8/10 | 6/10 | 7/10 |
| Pricing Clarity | 6/10 | 7/10 | 8/10 | 5/10 |
| Content Depth | 5/10 | 9/10 | 3/10 | 6/10 |
```

---

## Output Format: MARKETING-AUDIT.md

Write the final report to `MARKETING-AUDIT.md` in the current directory with this structure:

```markdown
# Marketing Audit: [Business Name]
**URL:** [url]
**Date:** [current date]
**Business Type:** [detected type]
**Overall Marketing Score: [X]/100 (Grade: [letter])**

---

## Executive Summary

[3-5 paragraph summary for a non-technical stakeholder. Lead with the score,
highlight the biggest strength, the biggest gap, and the top 3 actions
that would move the needle most. Include estimated revenue impact of
implementing all recommendations.]

---

## Score Breakdown

| Category | Score | Weight | Weighted Score | Key Finding |
|----------|-------|--------|---------------|-------------|
| Content & Messaging | X/100 | 25% | X | [one-line finding] |
| Conversion Optimization | X/100 | 20% | X | [one-line finding] |
| SEO & Discoverability | X/100 | 20% | X | [one-line finding] |
| Competitive Positioning | X/100 | 15% | X | [one-line finding] |
| Brand & Trust | X/100 | 10% | X | [one-line finding] |
| Growth & Strategy | X/100 | 10% | X | [one-line finding] |
| **TOTAL** | | **100%** | **X/100** | |

---

## Quick Wins (This Week)

[Numbered list of 5-10 quick wins with specific implementation steps.
Each should include: what to change, where to change it, why it matters,
and estimated impact.]

## Strategic Recommendations (This Month)

[Numbered list of 3-7 strategic recommendations with rationale,
implementation steps, and expected outcomes.]

## Long-Term Initiatives (This Quarter)

[Numbered list of 2-5 long-term initiatives with business case,
resource requirements, and projected ROI.]

---

## Detailed Analysis by Category

### Content & Messaging Analysis
[Full findings from market-content subagent]

### Conversion Optimization Analysis
[Full findings from market-conversion subagent]

### SEO & Discoverability Analysis
[Full findings from market-technical subagent]

### Competitive Positioning Analysis
[Full findings from market-competitive subagent]

### Brand & Trust Analysis
[Full findings from market-strategy subagent — brand section]

### Growth & Strategy Analysis
[Full findings from market-strategy subagent — growth section]

---

## Competitor Comparison

[Comparison table from Section 3.4]

---

## Revenue Impact Summary

| Recommendation | Est. Monthly Impact | Confidence | Timeline |
|---------------|-------------------|------------|----------|
| [recommendation 1] | $X,XXX | High/Med/Low | X weeks |
| [recommendation 2] | $X,XXX | High/Med/Low | X weeks |
| ... | | | |
| **Total Potential** | **$XX,XXX/mo** | | |

---

## Next Steps

1. [Most critical action item]
2. [Second priority]
3. [Third priority]

*Generated by AI Marketing Suite — `/market audit`*
```

---

## Terminal Output

In addition to the file, display a condensed summary in the terminal:

```
=== MARKETING AUDIT COMPLETE ===

Business: [name] ([type])
URL: [url]
Marketing Score: [X]/100 (Grade: [letter])

Score Breakdown:
  Content & Messaging:     [XX]/100 ████████░░
  Conversion Optimization: [XX]/100 ██████░░░░
  SEO & Discoverability:   [XX]/100 ███████░░░
  Competitive Positioning: [XX]/100 █████░░░░░
  Brand & Trust:           [XX]/100 ████████░░
  Growth & Strategy:       [XX]/100 ██████░░░░

Top 3 Quick Wins:
  1. [win]
  2. [win]
  3. [win]

Top 3 Strategic Moves:
  1. [move]
  2. [move]
  3. [move]

Estimated Revenue Impact: $X,XXX-$XX,XXX/month

Full report saved to: MARKETING-AUDIT.md
```

---

## Error Handling

- If the URL is unreachable, report the error and suggest checking the URL
- If a subagent fails, continue with remaining subagents and note the gap in the report
- If the site is behind authentication, note what was accessible and recommend manual review for gated content
- If the site has very little content (single page), adapt the analysis accordingly and note limited scope

## Cross-Skill Integration

- If `COMPETITOR-REPORT.md` exists in the current directory, incorporate its findings
- If `BRAND-VOICE.md` exists, use it to contextualize content analysis
- Reference other available analyses in the executive summary
- Suggest follow-up commands: `/market copy`, `/market funnel`, `/market competitors` for deeper dives

## Output contract & verify gate

**Produces:** exactly one file — `MARKETING-AUDIT.md` (structure above) — plus the condensed terminal summary. No other files.

**Verify before declaring done (all must pass):**
1. `MARKETING-AUDIT.md` exists and contains all 6 score rows + a composite `/100` that re-computes correctly against the §3.1 weights (recompute, don't trust the subagents' arithmetic).
2. Every Quick Win / Strategic / Long-Term item cites a specific page + element it came from — zero generic, site-agnostic advice.
3. Every revenue figure traces to the §3.3 formula with stated inputs (no bare dollar amounts).
4. Each of the 6 dimension scores passed the 2-of-3 adversarial-verify gate (or is explicitly marked N/A with reason).
If any check fails, fix and re-verify before reporting completion.

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
