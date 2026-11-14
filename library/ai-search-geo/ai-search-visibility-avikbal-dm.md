---
name: "ai-search-visibility"
description: "Get a brand cited inside AI answers across Google AI Overviews, AI Mode, ChatGPT, Perplexity, Gemini, Copilot, and Claude. The tactical GEO and AEO module: baselines citation share, finds the citation gaps, restructures content for extraction, builds the evidence and entity signals AI engines reward, fixes crawler access, and tracks share of voice over time. Use when someone wants GEO, AEO, or AI Overview optimization, asks why AI engines do not cite their brand, wants to be the answer ChatGPT or Perplexity gives, or needs an AI search visibility plan. Strategy comes from cited-framework…"
category: "ai-search-geo"
platforms: ["unspecified"]
platform_source: "none"
repo: "avikbal-dm/claude-seo-skills"
repo_url: "https://github.com/avikbal-dm/claude-seo-skills"
source: "https://github.com/avikbal-dm/claude-seo-skills/blob/HEAD/plugins/growth-os/skills/ai-search-visibility/SKILL.md"
raw_source: "https://raw.githubusercontent.com/avikbal-dm/claude-seo-skills/HEAD/plugins/growth-os/skills/ai-search-visibility/SKILL.md"
ref: "HEAD"
discovered_via: "github-search"
license: "MIT"
stars: 1
collected: "2026-11-14"
---

<!-- Unspecified skill · avikbal-dm/claude-seo-skills · plugins/growth-os/skills/ai-search-visibility/SKILL.md · MIT
     Source: https://github.com/avikbal-dm/claude-seo-skills/blob/HEAD/plugins/growth-os/skills/ai-search-visibility/SKILL.md
     Detected by: none · Regenerated on every run; edit the upstream skill, not this copy. -->

# AI Search Visibility

## What this does

Classic SEO wins a link on a results page. This wins a place inside the answer the machine writes. AI engines read the web, pick a small set of sources they trust, and synthesize. If your brand is not in that set, you are invisible no matter how well you rank.

This skill makes a brand citable. It works from what the engines actually do, query by query, then fixes the reasons they cite someone else.

## When to use it

Use it for GEO and AEO work, AI Overview and AI Mode optimization, or when a brand ranks in classic search but never appears in AI answers. `cited-framework` sets the strategy across the five layers. This module executes the citation work inside them.

## Data you pull

- **AI visibility tracking** (Ahrefs Brand Radar or equivalent): citation share across the engines, the prompts that trigger your category, and the domains cited instead of you. Brand Radar derives prompts from real search behavior, which beats synthetic prompt lists.
- **The live AI answers**: query each engine with the questions buyers actually ask, and record who gets cited. This is the ground truth. Tools estimate, the engines decide.
- **Google Search Console**: the queries and pages you already rank for, since strong organic rank improves the odds of citation even though URL overlap is low.
- **Ahrefs**: referring domains, brand mentions, and the entity signals that make a brand recognizable.

## Method

### 1. Baseline citation share

Build a prompt set from real buyer questions across the funnel. Run it across the engines and record three things per prompt: are you cited, who is cited instead, and how the engine describes you. Sentiment matters. A mention that mischaracterizes the brand can hurt more than absence.

### 2. Find the citation gap

For every prompt where your content covers the topic but you are not cited, flag it. Cross-reference with Search Console for high-impression pages that should be winning answers and are not. These are the highest-leverage targets, because the demand and the content already exist.

### 3. Restructure for extraction

AI engines lift clean, self-contained passages. Lead each section with a direct answer in roughly 40 to 60 words that stands alone. Use clear headings phrased as the questions buyers ask. Keep the answer near the top, before the context. A page that buries its answer in paragraph nine does not get pulled.

### 4. Make it safe to cite

Engines prefer verifiable, attributable material. Add original data, current-year statistics with named sources, and first-hand expertise. Adding real statistics is one of the strongest citation levers there is. Never invent a number to win a citation. Cite a real source or run the research, because a fabricated stat is a credibility bomb with your name on it.

### 5. Strengthen the entity

Engines cite sources they can confidently identify. Build the entity: consistent naming, an about and author infrastructure, sameAs links to authoritative profiles, and the off-site mentions that establish recognition. Hand the structured part to `structured-data-engine` and the off-site part to `authority-engine`.

### 6. Fix crawler access

Confirm AI crawlers can reach and read the content. Check robots posture for AI agents, rendering, and add or maintain an llms.txt that points engines at your best material. Content the engines cannot fetch cannot be cited.

### 7. Optimize per platform, not in general

The engines behave differently. AI Overviews and AI Mode lean on what ranks and cite several domains per answer, with very high zero-click rates, so the win is the citation itself, not the click. Perplexity shows direct links and rewards fresh, well-sourced pages. ChatGPT leans on established authority and training-era recognition. Prioritize the engines your buyers actually use, and tune for each rather than assuming one covers the rest.

### 8. Track and hold

Cited-source sets churn heavily month to month. Re-run the prompt set on a schedule, watch share of voice against competitors, and refresh the pages losing their place. AI visibility is a position you hold, not a box you tick.

## Output

A citation plan: your baseline share of voice, the prompts you should win and do not, the specific fix per target (restructure, add evidence, strengthen entity, fix access), the engines to prioritize, and a tracking cadence. Frame projected gains as share-of-voice ranges.

## Speed to results

Restructuring a page that already ranks can earn a citation in days to a few weeks. Entity and authority signals that change how engines recognize the brand take months. Sequence the fast structural wins first, then invest in the slow recognition work underneath.

## Guardrails

- Query the engines and read real citations. Do not optimize against a tool's estimate alone.
- Never fabricate statistics or sources to get cited. Real evidence only.
- Zero-click is the norm on AI surfaces. Measure citation share and influenced demand, not just referral clicks.
- Citation sets change monthly. Treat this as ongoing, not a one-time project.
- Strong organic rank helps but does not guarantee citation. Optimize both surfaces.

## Hands off to

`cited-framework` for the strategy above this, `structured-data-engine` for entity and schema, `content-engine` for the evidence-rich pieces, `authority-engine` for off-site recognition, and `growth-intelligence` to track citation share against pipeline.

---

## About the author

Avik Bal is a B2B digital marketing practitioner specializing in web architecture, SEO, content strategy, and marketing analytics. He has helped enterprise software, fintech, and technology companies drive growth through scalable digital marketing programs. Avik is the author of *CITED: The Growth Operating System for AI Search*.

Part of the Growth Operating System. https://github.com/avikbal-dm/claude-seo-skills
