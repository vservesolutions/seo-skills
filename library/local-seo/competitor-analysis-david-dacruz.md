---
name: "competitor-analysis"
description: "Comprehensive competitor analysis for local SEO audits. Activates when analyzing competitors, comparing businesses, doing competitive research, or assessing competitive landscape. Covers all 9 dimensions of competitor profiling with AI visibility, entity analysis, and SERP feature ownership. Phase 1. Output: {AUDIT_DIR}/competitor-profiles.md"
category: "local-seo"
platforms: ["claude-code"]
platform_source: "declared"
repo: "david-dacruz/local-seo-audit"
repo_url: "https://github.com/david-dacruz/local-seo-audit"
source: "https://github.com/david-dacruz/local-seo-audit/blob/HEAD/research/competitor-analysis/SKILL.md"
raw_source: "https://raw.githubusercontent.com/david-dacruz/local-seo-audit/HEAD/research/competitor-analysis/SKILL.md"
ref: "HEAD"
discovered_via: "github-search"
license: "MIT"
stars: 0
collected: "2026-11-14"
---

<!-- Claude Code skill · david-dacruz/local-seo-audit · research/competitor-analysis/SKILL.md · MIT
     Source: https://github.com/david-dacruz/local-seo-audit/blob/HEAD/research/competitor-analysis/SKILL.md
     Detected by: declared · Regenerated on every run; edit the upstream skill, not this copy. -->

# Competitor Deep Analysis — Phase 1

## Executive Summary

Competitor analysis is the intelligence layer that makes every subsequent phase actionable. Without knowing what the top-ranking competitors do, every recommendation is directionally blind. This phase profiles 3–5 competitors across 9 dimensions in enough depth that all subsequent phases can benchmark findings against real competitor data. Time investment: 45–90 minutes produces data that informs 20+ recommendations across the audit.

**2025 competitive landscape shift:** AI Overviews appear for 20–35% of local service queries — competitors who are cited by AIO have invisible traffic advantages that traditional ranking data doesn't show. This phase must audit AI visibility, not just organic rankings.

---

## Tools for This Phase

| Tool | Purpose | Cost |
|------|---------|------|
| **Ahrefs** | Organic keywords, DR, referring domains, traffic estimate, top pages | Paid |
| **SEMrush** | Keyword gap, backlink audit, traffic analytics, page-level keywords | Paid |
| **Moz** | Domain Authority, spam score, top pages | Free/Paid |
| **Google PageSpeed Insights** | CWV: mobile score, LCP, INP, CLS per competitor | Free |
| **Google Rich Results Test** | Schema types implemented by competitor | Free |
| **Google Search** | Local pack positions, SERP features owned, featured snippets | Free |
| **Google Maps / GBP** | Review count, rating, GBP completeness, category | Free |
| **ChatGPT / Perplexity / Gemini** | AI visibility test — are competitors cited? | Free |
| **BuiltWith** | CMS, hosting, technology stack per competitor | Free |
| **Majestic** | Trust Flow / Citation Flow ratio, link profile quality | Paid |

---

## Step 1: Read Project Context

Read `{AUDIT_DIR}/intake-data.md` — business name, URL, services, location, competitor list.

**If competitors not provided in intake, use this 3-search identification protocol:**
1. Google: `[primary service] [city]` → note top 3 local pack + top 3 non-directory organic
2. Google: `best [service] [city]` → cross-reference, add new names
3. Google: `[service] [city] reviews` → identify any additional local leaders

Confirm each competitor:
- Actually ranks for target keywords in target city (not a national brand with one page)
- Has a website (not just a GBP listing)
- Competes on primary services (not just adjacent services)

Present findings: "I've identified these top competitors: [list]. Please confirm or swap any."

---

## Step 2: Analyze Each Competitor Across All 9 Dimensions

For 3–5 competitors, systematically research each dimension. **Do NOT guess — verify with web search, page fetch, and public data tools.**

---

## Dimension 1: Business Profile

| Data Point | How to Find | Comp 1 | Comp 2 | Comp 3 |
|-----------|------------|--------|--------|--------|
| Business type (independent/chain/franchise) | Website + Google Maps | | | |
| Domain age | Whois / BuiltWith | | | |
| Years in business | About page / GBP | | | |
| Indexed pages (`site:[domain]`) | Google search | | | |
| Tech stack (CMS) | BuiltWith | | | |
| Service areas (same/broader/narrower) | Website + GBP | | | |
| # of locations | Google Maps search | | | |
| Estimated team size | LinkedIn Company page | | | |

---

## Dimension 2: Technical SEO Profile

**CWV benchmarks (2025 — INP replaced FID March 2024):**

| Metric | Good | Comp 1 | Comp 2 | Comp 3 | Client |
|--------|------|--------|--------|--------|--------|
| Mobile PSI Score | > 70 | | | | |
| LCP (mobile) | < 2.5s | | | | |
| INP (mobile) | < 200ms | | | | |
| CLS (mobile) | < 0.1 | | | | |
| TTFB | < 800ms | | | | |

**Additional technical checks per competitor:**
- HTTPS: valid SSL? ✅/❌
- Schema types (Google Rich Results Test): list all present
- URL structure: logical hierarchy? Keyword-inclusive slugs?
- Site architecture depth (service pages: 2-3 clicks from homepage = good)
- Mobile responsive: test at 375px viewport

---

## Dimension 3: Content Strategy

For each competitor (Ahrefs → Site Explorer → Organic Pages → sort by traffic):

| Data Point | Comp 1 | Comp 2 | Comp 3 |
|-----------|--------|--------|--------|
| Total pages estimated (`site:` count) | | | |
| Service pages count | | | |
| Location pages count | | | |
| Blog posts count | | | |
| Publishing frequency (last 10 posts dates) | | | |
| Word count on top service page | | | |
| Word count on blog posts | | | |
| Unique content assets (tools, guides, calculators) | | | |
| Local content (city guides, neighborhood pages) | | | |
| FAQPage schema present on service pages | | | |
| Content freshness (last updated on key pages) | | | |

**Content depth benchmark (2025 HCS standards):**
- Service page < 800 words = substandard
- Service page 1,200–2,000 words = competitive
- Blog post < 1,200 words = thin
- Pillar blog 2,500+ words = authoritative

---

## Dimension 4: Keyword Strategy

From Ahrefs/SEMrush → Site Explorer → Organic Keywords:

| Data Point | Comp 1 | Comp 2 | Comp 3 |
|-----------|--------|--------|--------|
| Estimated monthly organic traffic | | | |
| Total organic keywords ranking | | | |
| Top 5 keywords by traffic | | | |
| "Near me" keyword rankings | | | |
| Featured snippet ownership (count) | | | |
| PAA (People Also Ask) presence | | | |
| Question-format content for AIO | | | |
| Long-tail service + location coverage | | | |

---

## Dimension 5: Backlink & Authority Profile

| Metric | Comp 1 | Comp 2 | Comp 3 | Client | Gap |
|--------|--------|--------|--------|--------|-----|
| Domain Rating (DR) — Ahrefs | | | | | |
| Domain Authority (DA) — Moz | | | | | |
| Trust Flow (TF) — Majestic | | | | | |
| Citation Flow (CF) — Majestic | | | | | |
| TF:CF ratio (target ≥ 0.5) | | | | | |
| Referring domains count | | | | | |
| % from niche-relevant sites | | | | | |
| Top 3 link sources | | | | | |
| Citation directory depth | | | | | |

**Link building pattern analysis:**
- Where do their links come from? (industry directories / local news / guest posts / partnerships)
- Authoritative niche links client doesn't have?
- Local citation depth (how many directories listed?)

---

## Dimension 6: Local SEO Profile

| Data Point | Comp 1 | Comp 2 | Comp 3 | Client |
|-----------|--------|--------|--------|--------|
| GBP star rating | | | | |
| GBP review count | | | | |
| Review velocity (estimated/month) | | | | |
| Local pack position (primary keyword) | | | | |
| GBP categories (primary + secondary) | | | | |
| GBP photos count | | | | |
| GBP posts active? | | | | |
| Q&A section populated? | | | | |
| Services listed in GBP? | | | | |
| NAP consistency (spot-check 3 directories) | | | | |

**GBP completeness benchmarks:**
- 100+ photos = 1,065% more website clicks (Google data, 2024)
- Review count ≥ 50 + rating ≥ 4.5 = strong local pack signal
- 4.3+ stars required for local AIO citation (SparkToro 2025)

---

## Dimension 7: AI Visibility (2025 Critical)

Test for each competitor across all AI platforms:

**AI visibility test protocol:**
```
Queries to test:
1. "Best [service] in [city]" (Google AIO + ChatGPT + Perplexity)
2. "[Competitor name] [city] — what are their services?" (Gemini + Perplexity)
3. "Who should I call for [problem] in [city]?" (ChatGPT + Google AIO)
```

| Platform | Comp 1 | Comp 2 | Comp 3 | Client |
|---------|--------|--------|--------|--------|
| Google AIO (main service query) | Cited/Not | Cited/Not | Cited/Not | Cited/Not |
| ChatGPT (conversational) | Cited/Not | Cited/Not | Cited/Not | Cited/Not |
| Perplexity (local service) | Cited/Not | Cited/Not | Cited/Not | Cited/Not |
| Knowledge Panel (branded) | Yes/No | Yes/No | Yes/No | Yes/No |
| FAQPage schema (AIO trigger) | Yes/No | Yes/No | Yes/No | Yes/No |

---

## Dimension 8: Social Media Presence

| Platform | Comp 1 Followers | Comp 2 Followers | Comp 3 Followers | Client Followers |
|---------|-----------------|-----------------|-----------------|-----------------|
| Facebook | | | | |
| Instagram | | | | |
| YouTube | | | | |
| LinkedIn | | | | |
| TikTok | | | | |

**Qualitative assessment per competitor:**
- Primary platform: [Facebook/Instagram/YouTube]
- Posts per month: [X]
- Estimated engagement: [High/Medium/Low]
- Before/after content: ✅/❌
- Reviews amplified on social: ✅/❌
- YouTube: channel size, video quality, embedded on website?

---

## Dimension 9: SERP Feature Ownership

For top 10 shared target keywords:

| SERP Feature | Comp 1 | Comp 2 | Comp 3 | Client |
|-------------|--------|--------|--------|--------|
| Local Pack — keywords owned | [X/10] | [X/10] | [X/10] | [X/10] |
| Featured Snippets — keywords owned | [X] | [X] | [X] | [X] |
| PAA boxes — questions answered | [X] | [X] | [X] | [X] |
| Video Carousel | Yes/No | Yes/No | Yes/No | Yes/No |
| Image Pack | Yes/No | Yes/No | Yes/No | Yes/No |
| FAQ Rich Results | Yes/No | Yes/No | Yes/No | Yes/No |
| Knowledge Panel | Yes/No | Yes/No | Yes/No | Yes/No |
| Sitelinks (branded) | Yes/No | Yes/No | Yes/No | Yes/No |

---

## Competitor Scorecard

Rate each competitor 1–10 per dimension. Use as benchmark throughout audit:

| Dimension | Client | Comp 1 | Comp 2 | Comp 3 |
|-----------|--------|--------|--------|--------|
| 1. Business Profile (maturity, size) | | | | |
| 2. Technical SEO + CWV | | | | |
| 3. Content Strategy + Depth | | | | |
| 4. Keyword Strategy | | | | |
| 5. Backlink Authority | | | | |
| 6. Local SEO / GBP | | | | |
| 7. AI Visibility (AIO, ChatGPT) | | | | |
| 8. Social Media Presence | | | | |
| 9. SERP Feature Ownership | | | | |
| **TOTAL** | **/90** | **/90** | **/90** | **/90** |

---

## Competitive Intelligence Analysis

### Gap Table (Competitor Advantages → Client Action)
| Gap | Competitor Advantage | Client Weakness | Difficulty | Priority |
|-----|---------------------|-----------------|-----------|---------|
| [gap 1] | [how top comp does it] | [what client lacks] | Easy/Med/Hard | H/M/L |

### Exploitable Opportunities (Client Stronger Than Competitors)
Areas where client has competitive advantage — amplify these:
1. [Strength]: [how to amplify aggressively]
2. [Strength]: [how to amplify aggressively]

### Competitor Weaknesses to Exploit
Areas where ALL competitors are weak — first-mover advantage available:
1. [weakness]: [specific content/link/local opportunity]
2. [weakness]: [specific content/link/local opportunity]

### Threats Assessment
What competitor advantages pose the biggest ranking risk?
| Threat | Competitor | Risk Level | Defensive Action |
|--------|-----------|-----------|-----------------|
| [threat] | [comp name] | Critical/High/Med | [action] |

---

## Quick Wins from Competitor Research

Items that can be replicated from top competitors in < 30 days:

| Win | Competitor Source | Action Required | Effort | Expected Impact |
|-----|------------------|----------------|--------|----------------|
| [win 1] | [comp] | [specific action] | [time] | [result] |
| [win 2] | [comp] | [specific action] | [time] | [result] |
| [win 3] | [comp] | [specific action] | [time] | [result] |

---

## Priority Matrix

| Action | Impact (1–5) | Feasibility (1–5) | Priority | Effort |
|--------|-------------|-------------------|---------|--------|
| Identify 3+ competitors with specific URLs | 5 | 5 | 25 | 15 min |
| Record GBP data (stars, reviews, categories) | 5 | 5 | 25 | 20 min |
| Run CWV comparison (PageSpeed Insights ×4) | 5 | 5 | 25 | 20 min |
| Test AI visibility (ChatGPT + Perplexity) | 5 | 5 | 25 | 15 min |
| Ahrefs DR + traffic comparison | 4 | 4 | 16 | 15 min |
| SERP feature ownership audit | 4 | 4 | 16 | 20 min |
| Schema types audit (Rich Results Test) | 4 | 5 | 20 | 15 min |
| Social media follower comparison | 3 | 5 | 15 | 10 min |

---

## Output

Write complete profiles to `{AUDIT_DIR}/competitor-profiles.md` with YAML frontmatter:

```yaml
---
skill: research/competitor-analysis
phase: 1
date: [YYYY-MM-DD]
business: [Business Name]
url: [URL]
score: N/A
competitors_analyzed: [X]
top_competitor: [name]
top_competitor_url: [url]
client_score: [X/90]
top_competitor_score: [X/90]
score_gap: [X]
---
```

Include:
- All 9 dimension tables (completed with real data — no placeholders)
- Competitor scorecard (client vs. all 3 competitors, /90 total)
- Gap table (top 10 gaps ordered by priority)
- Exploitable opportunities list (client strengths)
- Competitor weaknesses to exploit (first-mover opportunities)
- Threat assessment (risks to defend against)
- Quick wins list (top 5 replicable actions < 30 days)
- AI visibility comparison (AIO + ChatGPT + Perplexity per competitor)

**This file is read by ALL 21 subsequent phases** — every finding benchmarks against this data. Quality here multiplies throughout the entire audit.

**Key consumers:**
- All 21 phases — competitor data feeds every benchmark
- `research/content-gaps` — competitor content strategy informs gap analysis
- `research/keyword-gaps` — competitor organic keywords drive gap analysis
- `cross-cutting/serp-trust-auditor` — SERP feature ownership comparison
- `cross-cutting/local-impact-auditor` — GBP + local SEO competitor comparison
