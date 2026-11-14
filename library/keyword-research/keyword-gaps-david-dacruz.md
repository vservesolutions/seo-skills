---
name: "keyword-gaps"
description: "Keyword research and gap analysis. Activates when discussing keywords, keyword gaps, keyword research, search terms, ranking opportunities, low-hanging fruit, keyword mapping, or SERP analysis for local businesses. Phase 6. Output: {AUDIT_DIR}/keyword-gaps.md"
category: "keyword-research"
platforms: ["claude-code"]
platform_source: "declared"
repo: "david-dacruz/local-seo-audit"
repo_url: "https://github.com/david-dacruz/local-seo-audit"
source: "https://github.com/david-dacruz/local-seo-audit/blob/HEAD/research/keyword-gaps/SKILL.md"
raw_source: "https://raw.githubusercontent.com/david-dacruz/local-seo-audit/HEAD/research/keyword-gaps/SKILL.md"
ref: "HEAD"
discovered_via: "github-search"
license: "MIT"
stars: 0
collected: "2026-11-14"
---

<!-- Claude Code skill · david-dacruz/local-seo-audit · research/keyword-gaps/SKILL.md · MIT
     Source: https://github.com/david-dacruz/local-seo-audit/blob/HEAD/research/keyword-gaps/SKILL.md
     Detected by: declared · Regenerated on every run; edit the upstream skill, not this copy. -->

# Keyword Gap Analysis — Phase 6

## Executive Summary

Keyword gap analysis identifies the highest-ROI search opportunities a business is currently missing. In 2025, the keyword landscape has shifted: "near me" searches grew 200%+ in 5 years, AIO (AI Overviews) appears for 20–35% of local service queries reducing organic P1 CTR by 30–45%, and zero-click searches hit 58% (SparkToro 2024). The most impactful keyword opportunities are no longer just the high-volume head terms but: (1) P4–10 keywords already ranking that need a push — highest ROI, (2) long-tail transactional keywords with KD <20 where a single optimized page can rank within 1–4 months, (3) emerging AI-recommendation query patterns. This phase maps the client's full keyword universe vs. competitors, identifies the highest-priority gaps, and produces a prioritized content + optimization plan.

**2025 keyword benchmarks:**
- P4–10 opportunity value: moving position 5 → position 1 = 6–10× more clicks (CTR: ~2.5% → 25–30%)
- Long-tail KD <20 targeting: 80% of searchers find what they need using 4+ word queries (Ahrefs 2024)
- Near me +200%: every local business needs "near me" variants mapped to GBP + local pages
- AIO CTR impact: if AIO shows for P1 keyword, organic P1 CTR drops from ~30% → ~15–20%
- Featured snippet → AIO citation: owning featured snippets = primary route to AIO inclusion
- Voice search: 27% of mobile searches are voice (Google 2024) — conversational queries now rank for both traditional + voice

**Numbered Action Plan:**

### Immediate (Week 1 — No New Content Required)
1. **Fix P4–10 keywords with high volume** — For each keyword ranking 4–10 with >100 monthly searches: add FAQ section + FAQPage schema + internal links from related pages + update title with current year. Effort: 1–2 hrs/keyword. Expected: 3–5× CTR improvement when moving P5 → P1–3.
2. **Rewrite low-CTR titles** — GSC → Performance → filter: Impressions >500/month + CTR <2%. Rewrite title tags to include: year, city, "Free Estimate", or specific benefit. Effort: 15 min/title. Expected: 1–3% → 3–8% CTR.
3. **Fix keyword cannibalization** — Ahrefs → Organic Keywords → find same keyword on 2+ URLs → 301 redirect weaker to stronger. Effort: 30 min per pair. Priority: High.
4. **Add schema to quick-win pages** — Every P4–P10 service page that lacks FAQPage schema: add 5 FAQs + schema. AIO citation rate 3.2× higher with FAQPage. Effort: 30 min/page.
5. **Create GBP service entries for all target keywords** — Every service in keyword gap list should have a matching GBP service entry (free). Effort: 30 min.

### Short-Term (Week 2–4)
6. **Create missing transactional pages** — For each competitor-only keyword gap at BOFU intent: create a dedicated service page (800+ words, FAQPage schema, local NAP). Effort: 3–5 hrs/page.
7. **Expand thin location content** — For neighborhood-specific keywords (neighborhood + service): add location micro-section to service area page OR create standalone location page if volume >50/month. Effort: 2–4 hrs.
8. **Target "cost/price" long-tails** — Create pricing guide pages for top 3 services ("Cost of [Service] in [City] 2025"). These rank quickly (KD <20), attract MOFU searchers, and reduce price objections. Effort: 2–4 hrs.
9. **Capture "open now" keywords** — Optimize GBP hours, add 24/7 emergency availability page if applicable, add "open now" + hours to service pages. Effort: 1–2 hrs.
10. **Build topical cluster for top 3 head terms** — Each head term (e.g., "plumber Chicago") needs a pillar page (2,500+ words) + 5+ cluster pages (1,200+ words each). Without cluster, head term rankings have ceiling. Effort: 20–40 hrs/cluster (strategic).

---

## Step 1: Read Project Context

Read `{AUDIT_DIR}/intake-data.md` — business name, services, location.
Read `{AUDIT_DIR}/competitor-profiles.md` — competitor keyword strategies.
Read `{AUDIT_DIR}/content-inventory.md` — client's current page/keyword mapping.
Read `{AUDIT_DIR}/content-gaps.md` — identified content gaps to inform keyword research.

**Tools for this phase:**
| Tool | Purpose | Cost |
|------|---------|------|
| **Ahrefs** | Keyword Explorer, Site Explorer → Organic Keywords, Keywords Gap | Paid |
| **SEMrush** | Keyword Gap tool, Keyword Magic Tool, Position Tracking | Paid |
| **Google Search Console** | Actual click/impression data per keyword — real performance | Free (requires access) |
| **Google Keyword Planner** | Volume estimates, CPC (signals commercial intent), trend data | Free (Google Ads account) |
| **Ubersuggest** | Keyword ideas, volume, CPC, SEO difficulty — good free tier | Free/Paid |
| **AlsoAsked.com** | PAA-based question keyword mapping per topic | Freemium |
| **Google Autocomplete** | Real-time long-tail keyword discovery by typing prefix + letters | Free |
| **Google Trends** | Keyword momentum — seasonal peaks, rising vs. declining terms | Free |

**2025 Keyword Research Context:**
- "Near me" searches increased 200%+ in 5 years — hyperlocal keywords are non-negotiable for local businesses
- AI Overview (AIO) changes CTR: position 1 organic CTR drops 30–45% when AIO appears above it — target long-tail and question keywords where AIO is less dominant
- Voice search accounts for 27% of mobile searches (Google 2024) — conversational long-tail keywords now serve dual purpose: traditional + voice
- Zero-click searches at 58% of all searches (SparkToro 2024) — featured snippets + AIO citations are increasingly more valuable than traditional rank #5

---

## Section 1: Keyword Universe Mapping

### Step 1: Extract Client's Current Keywords

From Ahrefs Site Explorer → Organic Keywords → export all:
- Sort by position (filter: 1–100)
- Sort by traffic value
- Identify primary, secondary, and supporting keywords per page

| URL | Primary Keyword | Position | Monthly Clicks | Secondary Keywords |
|-----|---------------|---------|--------------|-------------------|
| /services/[slug] | [keyword] | [pos] | [clicks] | [keywords] |
| /blog/[slug] | [keyword] | [pos] | [clicks] | [keywords] |

### Step 2: Competitor Keyword Extraction

For each competitor (Ahrefs → Site Explorer → enter competitor → Organic Keywords):
- Export top 200 keywords by traffic
- Filter: exclude branded keywords
- Identify which service + location combinations they rank for

### Step 3: Keyword Gap (Venn Diagram Analysis)

Use **Ahrefs Keyword Gap** or **SEMrush Keyword Gap** tool:

| Category | Keywords | Count | Action |
|----------|---------|-------|--------|
| Client only (unique — client ranks, competitors don't) | [list top 5] | [X] | Maintain + strengthen |
| Shared with 1 competitor | [list top 5] | [X] | Improve ranking position |
| Shared with 2+ competitors (table stakes) | [list top 5] | [X] | Must win — critical priority |
| Competitor-only gaps (competitors rank, client doesn't) | [list top 10] | [X] | Create content / optimize |

---

## Section 2: Keyword Classification System

For every identified gap keyword, classify along 5 dimensions:

### By Length & Competition
| Type | Definition | Local Example | Competition | Timeline |
|------|-----------|-------------|------------|---------|
| Head (1–2 words) | "plumber [city]" | "plumber chicago" | High — 60–80 KD | 6–18 months |
| Mid-tail (2–3 words) | "emergency plumber chicago" | "drain cleaning chicago" | Medium — 30–60 KD | 3–9 months |
| Long-tail (4+ words) | "24 hour emergency plumber lincoln park chicago" | | Low — <30 KD | 1–4 months |

### By Search Intent
| Intent | Description | Content Match | Conversion Rate |
|--------|-----------|--------------|----------------|
| Informational | "how to fix a leaky faucet" | Blog guide, how-to | Low (~1–3%) |
| Commercial | "best plumber chicago reviews" | Comparison, local | Medium (~3–8%) |
| Transactional | "hire plumber chicago same day" | Service page + CTA | High (~8–20%) |
| Navigational | "[brand] chicago plumbing" | About/homepage | High (brand intent) |

### By Local Modifier
| Pattern | Example | Volume Type | Priority |
|---------|---------|------------|---------|
| Location-modified | "plumber chicago" | Medium | Critical |
| "Near me" variant | "plumber near me" | High | Critical |
| Neighborhood-specific | "plumber lincoln park" | Low-Medium | High |
| No modifier | "leak repair" | High (national) | Secondary |
| "Open now" | "plumber open now" | Medium | High (emergency intent) |
| "Same day" / "24 hour" | "same day plumber chicago" | Medium | High |

### By Funnel Stage
| Stage | Examples | Page Type | Priority |
|-------|---------|----------|---------|
| TOFU (Awareness) | "signs of a water leak", "why water bill high" | Blog/guide | Medium |
| MOFU (Consideration) | "plumber vs. DIY", "cost to fix burst pipe" | FAQ/comparison | High |
| BOFU (Decision) | "hire emergency plumber chicago", "plumber quote" | Service page | Critical |

### By Volume Band (Local Business Benchmarks)
| Band | Monthly Volume | Strategy |
|------|--------------|---------|
| High | 1,000+ | Content + links + GBP optimization |
| Medium | 100–999 | Optimized service/location page |
| Low | 10–99 | Long-tail service page or blog section |
| Micro | <10 | FAQ entry, location page detail, schema |

---

## Section 3: Low-Hanging Fruit Analysis

### Position 4–10 ("Almost There") Keywords — Highest ROI
From GSC or Ahrefs → filter positions 4–10 + volume >50/month:

| Keyword | Position | URL | Monthly Volume | Action | Effort | Expected Traffic Gain |
|---------|---------|-----|--------------|--------|--------|----------------------|
| [keyword] | 5 | [url] | [vol] | Add FAQ + schema + internal links | 1–2 hrs | +[X]/month |
| [keyword] | 8 | [url] | [vol] | Expand 500 words + Surfer optimize | 2–3 hrs | +[X]/month |

**Impact:** Moving position 5 → position 1 typically 6–10× more clicks (CTR: ~2.5% → ~25–30%).

### Position 11–20 ("Page 2") Keywords — Medium Effort
From GSC → filter positions 11–20 + volume >100/month:

| Keyword | Position | URL | Volume | Action | Effort |
|---------|---------|-----|--------|--------|--------|
| [keyword] | 14 | [url] | [vol] | Rewrite + earn 3–5 local links | 4–6 hrs + link outreach |

### High Impressions / Low CTR (GSC)
From GSC → Performance → filter: Impressions >100/month, CTR <2%:

| Keyword | Impressions/Month | CTR | Position | Fix | Effort |
|---------|-----------------|-----|---------|-----|--------|
| [keyword] | [X] | [X%] | [pos] | Rewrite title — add year/city/benefit | 15 min |

**Potential:** Improving CTR from 1% → 3% on 1,000 impressions = +20 additional monthly clicks.

### Long-Tail High-Intent, Low Competition Goldmines
| Keyword | Volume | KD (Ahrefs) | Intent | Page Needed |
|---------|--------|------------|--------|------------|
| "[service] cost [city] 2025" | 50–200 | <20 | MOFU | Pricing guide page |
| "[service] vs [alternative] [city]" | 30–100 | <15 | MOFU | Comparison blog post |
| "best [service] [neighborhood]" | 20–80 | <25 | Commercial | Location content |
| "emergency [service] [city] open now" | 50–200 | <30 | BOFU | Emergency service page |

---

## Section 4: Keyword-to-Page Mapping

Prevent cannibalization — every keyword should have exactly ONE target page:

| Keyword | Target Page | Status | Action |
|---------|------------|--------|--------|
| [keyword 1] | /services/drain-cleaning/ | Under-optimized | Add to title + H1 + schema |
| [keyword 2] | NEW PAGE | Missing | Create service/location page |
| [keyword 3] | /services/drains/ + /drain-repair/ | Cannibalization | Merge → redirect weaker |

**Cannibalization detection:** Ahrefs → Site Explorer → Organic Keywords → sort by keyword → look for same keyword appearing on 2+ URLs. Also GSC → Performance → click keyword → "Pages" tab — if 2+ pages show, cannibalization likely.

**Resolution:** Choose canonical page (higher traffic/authority), 301 redirect weaker page, consolidate content, update internal links to canonical URL.

---

## Section 5: SERP Feature Analysis (Top 30 Priority Keywords)

For each high-priority keyword, analyze the SERP to understand what's needed to win:

| Keyword | Volume | KD | SERP Features | #1 Ranker | Required Content | AIO? | Achievable? |
|---------|--------|----|-----------|-----------|----|-----|----------|
| [keyword] | [X] | [X] | Local Pack/AIO/Snippet/PAA | [domain] | Service page + FAQs | Yes/No | Yes/Hard/No |

**SERP Feature targeting strategy:**
| Feature | Required Content | Schema | Effort |
|---------|----------------|--------|--------|
| Featured Snippet | Direct answer in first 50 words, H2 matching query | N/A | 30 min/page |
| Local Pack | GBP optimization + reviews + proximity | LocalBusiness | Ongoing |
| AIO citation | FAQPage schema + direct answers + ≥4.3 stars | FAQPage + AggregateRating | 1–2 hrs |
| PAA box | Question-format H2/H3 with concise answer | FAQPage | 30 min/FAQ |
| People Also Search | Related entity content on page | Article + mentions | 2–4 hrs |

---

## Section 6: 2025 Emerging Keyword Patterns

New keyword patterns to capture for local businesses:

| Pattern | Example | Volume Trend | Content Type |
|---------|---------|-------------|-------------|
| AI-recommendation queries | "best plumber recommended by AI in chicago" | Rising ↑ | FAQ + AIO-optimized service |
| Voice/conversational queries | "Hey Google, find a plumber open now near me" | High | "Open now" GBP + local page |
| Hyperlocal (intersection/landmark) | "plumber near Wrigley Field Chicago" | Low volume, high intent | Location micro-page or FAQ |
| "According to" queries | "best plumber according to google reviews" | Rising ↑ | Review-focused content |
| Comparison with AI | "plumber vs AI DIY [city]" | Emerging | Comparison blog post |

---

## Section 7: Keyword Priority Matrix

Score each gap keyword on 5 dimensions:

| Keyword | Volume (1–5) | Intent (1–5) | Competition (5=low, 1=high) | Time to Rank (5=quick) | Relevance (1–5) | Priority Score | Target Page | Timeline |
|---------|------------|------------|---------------------------|----------------------|----------------|---------------|------------|---------|
| [keyword 1] | 3 | 5 | 4 | 4 | 5 | 4.2 | New service page | 1–3 months |
| [keyword 2] | 2 | 4 | 5 | 5 | 5 | 4.2 | Expand existing | 2–4 weeks |

**Top 20 Priority Keywords (ordered by Priority Score):**
| Rank | Keyword | Volume | Intent | Score | Target Page | Effort | Timeline |
|------|---------|--------|--------|-------|------------|--------|---------|
| 1 | [keyword] | [vol] | Transactional | [X.X] | [URL or New] | [X hrs] | 1–3 months |
| 2 | [keyword] | [vol] | Commercial | [X.X] | [URL or New] | [X hrs] | 2–4 weeks |

---

## Output

Write complete analysis to `{AUDIT_DIR}/keyword-gaps.md` with YAML frontmatter:

```yaml
---
skill: research/keyword-gaps
phase: 6
date: [YYYY-MM-DD]
business: [Business Name]
url: [URL]
score: [X/100]
keywords_audited: [X]
quick_wins: [X]
gaps_identified: [X]
cannibalization_issues: [X]
---
```

Include:
- Score X/100 with gap severity breakdown
- Current keyword map (client's top 20 ranking keywords)
- Keyword gap Venn diagram (client only / shared / competitor only)
- Classification tables (by intent, length, local modifier, funnel stage)
- Low-hanging fruit: P4-10 quick wins (with traffic gain estimates)
- High impression / low CTR opportunities (with CTR improvement %s)
- Long-tail goldmine list (KD <20, transactional intent)
- Keyword-to-page mapping (including cannibalization fixes)
- SERP feature analysis (top 30 keywords, schema requirements)
- 2025 emerging keyword patterns
- Priority matrix (top 20 keywords scored)
- 30/90-day keyword capture plan with effort estimates

**Output files:**
- `{AUDIT_DIR}/keyword-gaps.md` — keyword gap analysis with priority matrix
- `{REPORTS_DIR}/phase-6-keyword-gaps.pdf` — auto-generated PDF after phase completes

**Key consumers:**
- `research/topical-gaps` — keywords inform topical map and cluster structure
- `output/report-generation` — keyword opportunities in master report section 6
- `audit/onpage-seo` — keyword-to-page assignments for optimization

---

## Keyword Gap Reference Table

### Priority Tiers by Keyword Type

| Keyword Type | Volume Range | KD Target | AIO Risk | Priority | Action |
|-------------|-------------|----------|---------|---------|--------|
| P4–10 existing rankers | Any | Ranked | Low | 25 (5×5) | On-page optimization (no new content) |
| Long-tail transactional | 50–500/mo | <20 | Low | 20 (5×4) | Create 800–1,200 word page |
| "Near me" variants | 100–2,000/mo | <30 | Medium | 20 (4×5) | GBP optimization + location page |
| Voice search queries | 10–200/mo | <15 | High | 15 (5×3) | FAQ pages with FAQPage schema |
| High-volume head terms | 1,000+/mo | >50 | High | 12 (4×3) | Long-term cluster building |
| Featured snippet targets | 50–500/mo | <40 | Medium | 16 (4×4) | Add structured response block to page |

### GBP 2025 Keyword Signals
GBP keywords now feed directly into local pack visibility. Add top-priority keywords to:
- GBP business description (first 200 characters most important)
- GBP service names and service descriptions
- GBP Q&A (seed with keyword-rich questions and answers)
- GBP review response templates (encourage keyword-rich reviews)

### INP + Page Experience as Keyword Ranking Factor (March 2024+)

INP (Interaction to Next Paint) replaced FID as a Core Web Vital in March 2024. It is a confirmed page experience signal that affects keyword rankings:
- INP <200ms = Good — full ranking benefit from page experience signal
- INP 200–500ms = Needs Improvement — partial suppression
- INP >500ms = Poor — ranking penalty from page experience, compounded on competitive keywords

**Keyword targeting implication:** For competitive keywords (KD >40) where page experience is a tiebreaker, poor INP on target pages directly suppresses keyword potential. When prioritizing keyword opportunities in this phase, flag any target page with INP >200ms as needing simultaneous technical fix (Phase 10) to unlock ranking potential.

### Keyword Gap vs. Competitor Benchmark Table

Use this structure when reporting gaps found via Ahrefs / SEMrush keyword gap tool:

| Gap Keyword | Client Position | Comp 1 Position | Comp 2 Position | Monthly Searches | KD | Intent | Priority Action |
|------------|----------------|----------------|----------------|-----------------|-----|--------|----------------|
| [service keyword] | Not ranking | P3 | P5 | [volume] | [KD] | BOFU | Create service page |
| [near me variant] | P12 | P2 | P4 | [volume] | [KD] | Local | GBP + location page |
| [question keyword] | Not ranking | P1 (snippet) | P8 | [volume] | [KD] | MOFU | FAQ page + FAQPage schema |
| [cost/price query] | Not ranking | P2 | P6 | [volume] | <20 | MOFU | Pricing guide page |

INP note: keyword-optimized pages must also meet INP <200ms threshold (replaced FID March 2024) — fast pages with good keyword targeting outrank slow pages with identical targeting.
