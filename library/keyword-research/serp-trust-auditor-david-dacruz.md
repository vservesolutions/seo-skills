---
name: "serp-trust-auditor"
description: "Score a website using the proprietary 50-item SERP-TRUST framework across 5 dimensions (Technical Foundation, Ranking Signals, User Experience, Search Authority, Trust & AI Readiness). 0-4 scale per item, veto checks, normalized 0-100. Combines with LOCAL-IMPACT for SEO Health Index. Use /score-serp-trust. Output: {AUDIT_DIR}/serp-trust-scores.md"
category: "keyword-research"
platforms: ["claude-code"]
platform_source: "declared"
repo: "david-dacruz/local-seo-audit"
repo_url: "https://github.com/david-dacruz/local-seo-audit"
source: "https://github.com/david-dacruz/local-seo-audit/blob/HEAD/cross-cutting/serp-trust-auditor/SKILL.md"
raw_source: "https://raw.githubusercontent.com/david-dacruz/local-seo-audit/HEAD/cross-cutting/serp-trust-auditor/SKILL.md"
ref: "HEAD"
discovered_via: "github-search"
license: "MIT"
stars: 0
collected: "2026-11-14"
---

<!-- Claude Code skill · david-dacruz/local-seo-audit · cross-cutting/serp-trust-auditor/SKILL.md · MIT
     Source: https://github.com/david-dacruz/local-seo-audit/blob/HEAD/cross-cutting/serp-trust-auditor/SKILL.md
     Detected by: declared · Regenerated on every run; edit the upstream skill, not this copy. -->

# SERP-TRUST Auditor

## Executive Summary

The SERP-TRUST framework is a 50-item proprietary scoring system that measures how much Google trusts a domain to appear and rank in competitive search results. Trust is distinct from authority — a site can have high Domain Rating (authority) but low SERP trust due to thin content, missing schema, poor CWV, or inconsistent NAP signals. In 2025–2026, SERP trust has a direct AI visibility component: Google's AI Overviews and third-party LLMs (ChatGPT, Perplexity) apply their own trust filters before citing sources. Sites scoring <50 on SERP-TRUST are rarely cited in AI answers regardless of organic ranking. The framework evaluates 5 dimensions: Technical Foundation (T), Ranking Signals (R), User Experience (U), Search Authority (S), and Trust & AI Readiness (A) — 10 items × 4-point scale per dimension = 200 raw points, normalized to 0–100.

**2025 SERP-TRUST benchmarks:**
- Overall score ≥80: competitive (citeable by AI Overviews); ≥90: market leader
- Technical Foundation: HTTPS enforced, INP <200ms (replaced FID March 2024), no crawl errors
- Ranking Signals: pillar pages with Surfer Score ≥80, FAQPage schema on all service pages
- User Experience: Core Web Vitals all "Good" (LCP <2.5s, INP <200ms, CLS <0.1)
- Search Authority: Domain Rating ≥30 for local; TF:CF ratio ≥0.5; branded anchor 50–60%
- Trust & AI Readiness: Organization schema + sameAs on homepage; GBP verified; 5+ review platforms
- Veto rule: any single Critical failure (e.g., active manual action, no HTTPS, score = 0 on T dimension) caps total score at ≤40 regardless of other dimensions

**Numbered Action Plan:**

### Immediate (Week 1, High Impact/Low Effort)
1. **Validate all Technical Foundation items** — run `python3 scripts/check_url.py --url [URL] --full` for HTTPS, redirect chain, TTFB. Run Lighthouse → record LCP, INP, CLS scores. Effort: 30 min. Priority: 25.
2. **Check for critical veto triggers** — active manual actions (GSC), HTTP accessible URL, 4xx/5xx homepage, no HTTPS = automatic score cap. Effort: 10 min.
3. **Score all 50 items** — work through each dimension in order (T→R→U→S→A), applying 0–4 scale. Note evidence for every score ≠ 4. Effort: 1–2 hrs. Use `python3 scripts/score_calculator.py --st` to compute.
4. **Identify veto check failures** — each dimension has a veto check that caps the dimension score. Flag any failures immediately as Critical blockers. Effort: 15 min.
5. **Generate competitor comparison** — score at least 2 top competitors on the same 50 items (abbreviated: focus on T and A dimensions). Gap = priority list. Effort: 45 min/competitor.

### Short-Term (Week 2–4)
6. **Fix all T dimension failures first** — Technical Foundation is the prerequisite layer; fixing T items produces the highest dimension ROI. Target: T dimension score ≥8/10 (80%) before moving to other dimensions. Effort: varies.
7. **Add missing structured data** — Organization schema (homepage), LocalBusiness subtype (homepage), FAQPage (all service pages), HowTo (process pages). Effort: 2–4 hrs.
8. **Improve UX dimension** — fix largest CWV failures first: LCP (often image optimization or render-blocking resources), INP (event listener optimization), CLS (reserve space for images/embeds). Effort: 4–8 hrs dev.
9. **Build Trust & AI Readiness** — verify GBP, claim all sameAs properties, add review widget with AggregateRating schema, add author bylines with Person schema. Effort: 2–4 hrs.
10. **Write SERP-TRUST findings to `{AUDIT_DIR}/serp-trust-scores.md`** — YAML frontmatter + full 50-item scorecard + Priority Matrix + competitor comparison. Run `python3 scripts/score_calculator.py --st` to generate final score. Effort: 1 hr.

**Output files:**
- `{AUDIT_DIR}/serp-trust-scores.md` — 50-item scorecard with scores and evidence
- `{REPORTS_DIR}/serp-trust-score.pdf` — auto-generated PDF via `python3 scripts/generate_pdf.py`

---

## Prerequisites

Before scoring, confirm you have:
- [ ] Website URL (must be accessible — run `python3 scripts/check_url.py --url [URL] --full`)
- [ ] Target keywords (minimum 5 — from `{AUDIT_DIR}/keyword-gaps.md` or `{AUDIT_DIR}/intake-data.md`)
- [ ] At least 3 competitor URLs (from `{AUDIT_DIR}/competitor-profiles.md`)
- [ ] Target location(s) for local context

If any are missing, collect them before proceeding.

**Tools for this phase:**
| Dimension | Key Tools | Purpose |
|-----------|----------|---------|
| T — Technical | Screaming Frog, Google Rich Results Test, GSC URL Inspection, Lighthouse | Crawl, schema, CWV |
| R — Ranking | Ahrefs, SEMrush, GSC Performance, Surfer SEO | Keywords, content quality |
| U — UX/Performance | PageSpeed Insights, Lighthouse, Microsoft Clarity | CWV, mobile, accessibility |
| S — Authority | Ahrefs (DR, RD), Majestic (TF/CF), SEMrush Backlink Audit | Link profile |
| T2 — Trust/AI | Google Search (AIO), ChatGPT, Perplexity, Brand24, Wikidata | AI visibility, entity |

**2025 SERP-TRUST Context:**
- **INP replaced FID** as Core Web Vital (March 2024) — target <200ms (Good: <100ms)
- **AI Overviews** (AIO) appear for 20–35% of local queries — T2 dimension captures this
- **Schema completeness** is both a Technical (T) AND Trust (T2) signal in 2025
- **FAQPage schema** = primary AIO citation trigger — assess in both T and T2
- **Helpful Content System** folded into core algorithm March 2024 — content quality now a direct ranking signal in R dimension

## Framework Reference

Load the complete scoring rubric from `references/serp-trust-benchmark.md`.

**Framework:** SERP-TRUST (Search Engine Results Page — Technical Reliability, User Signals & Search Trust)
**Items:** 50 | **Scale:** 0–4 per item | **Max Raw:** 200 | **Normalized:** 0–100

## Scoring Dimensions

| Code | Dimension | Items | Max | Key Signals |
|------|-----------|-------|-----|------------|
| T | Technical Foundation | 10 | 40 | HTTPS, robots.txt, sitemap, canonicals, schema, CWV, JS rendering |
| R | Ranking Signals | 10 | 40 | Title/H1 optimization, content depth, E-E-A-T, internal linking, freshness |
| U | User Experience & Performance | 10 | 40 | LCP <1.8s, INP <100ms, CLS <0.05, mobile UX, accessibility |
| S | Search Authority | 10 | 40 | DR/TF, referring domains, anchor distribution, topical authority |
| T2 | Trust & AI Readiness | 10 | 40 | AIO citations, Knowledge Panel, schema, reviews, entity signals |

## Execution Process

### Step 1: Research Phase (30–45 min)

Gather evidence for each dimension BEFORE scoring:

**T — Technical Foundation**
1. Fetch `[domain]/robots.txt` — check for blocks and sitemap declaration
2. Fetch `/sitemap.xml` — validate exists, has correct URLs, accurate `lastmod`
3. Check SSL: `curl -I https://[domain]` — verify HTTPS, HSTS header
4. Run Google Rich Results Test on homepage + 2 service pages — count schema types
5. GSC URL Inspection → "Test Live URL" → View Rendered HTML (JS rendering check)
6. Screaming Frog crawl → canonical tags, redirect chains, orphan pages

**R — Ranking Signals**
1. GSC Performance → top 20 queries — check CTR vs. benchmark (target >3% for branded)
2. Ahrefs → Organic Keywords — list top 10 ranking pages and their primary keywords
3. Manual check title + H1 alignment on each top-5 pages
4. Screaming Frog → Content → word count per page type (service ≥800, blog ≥1,200)
5. Surfer SEO side-by-side vs. top competitor on 2 key service pages

**U — User Experience & Performance**
1. PageSpeed Insights → Mobile: record LCP, INP, CLS, TTFB scores for homepage
2. PageSpeed Insights → Mobile: record same for top service page
3. Lighthouse → Accessibility score (target ≥90)
4. Mobile viewport test at 375px — horizontal scroll? tap targets ≥44px?
5. Microsoft Clarity or Hotjar: any rage-click or dead-click patterns? (if access)

**S — Search Authority**
1. Ahrefs → Domain Rating (DR) vs. competitors — note gap
2. Ahrefs → Referring Domains count + % from niche-relevant sites
3. Majestic → Trust Flow / Citation Flow ratio (TF:CF target ≥0.5)
4. Ahrefs → Anchor text profile — flag if exact-match commercial anchors >15%
5. Ahrefs → Organic Traffic trend (6 months) — stable/growing or declining?

**T2 — Trust & AI Readiness**
1. Search `[business name]` → Knowledge Panel present? Complete?
2. Search `best [service] in [city]` → AIO appears? Client cited?
3. Ask ChatGPT: "Who are the best [service] providers in [city]?" — client mentioned?
4. Ask Perplexity: "Best [service] in [city]" — client cited?
5. GSC → Reviews report + check aggregate rating schema on homepage
6. `sameAs` schema count (target ≥7 authoritative properties)

---

### Step 2: Score Each Item (0–4 Scale)

For each of the 50 items, assign a score using the rubric from `references/serp-trust-benchmark.md`:

| Score | Label | Meaning | Action |
|-------|-------|---------|--------|
| 0 | Critical | Broken, missing, or actively harmful | Fix immediately |
| 1 | Poor | Exists but significantly below standards | Prioritize this month |
| 2 | Fair | Partially implemented, notable gaps | Improve within 90 days |
| 3 | Good | Correctly implemented, minor improvements possible | Maintain |
| 4 | Excellent | Best-in-class, competitive advantage | Protect this signal |

**Record evidence string for each score:** e.g., "T1: HTTPS + HSTS present — curl confirms 301 from HTTP [Score: 4]"

**2025-specific scoring notes:**
- INP (not FID): score INP target <100ms = 4, 100–200ms = 3, 200–500ms = 2, >500ms = 0–1
- FAQPage schema: score 4 if present on all service pages, 3 if homepage only, 2 if one page, 0 if missing
- AIO citation: score 4 if cited in 3+ AIO queries, 3 if 1–2, 2 if AIO appears but not cited, 0 if AIO doesn't even appear
- Knowledge Panel: score 4 if full panel + claimed, 3 if partial, 2 if only GBP card, 0 if nothing

---

### Step 3: Veto Check

Check all 7 veto conditions — triggered vetoes cap the maximum final score:

| Veto | Condition | Check Method | Score Cap |
|------|-----------|-------------|-----------|
| V01 | Site not indexed by Google | `site:[domain]` returns <5 pages | 10 |
| V02 | Active manual penalty in GSC | GSC → Security & Manual Actions | 15 |
| V03 | No HTTPS or expired SSL | `curl -I https://[domain]` — SSL error | 25 |
| V04 | LCP >6s on mobile | PageSpeed Insights → Mobile LCP | 30 |
| V05 | Cloaked / hidden content | Googlebot vs. user-agent comparison | 10 |
| V06 | >50% toxic backlinks | SEMrush Backlink Audit → Toxic Score | 20 |
| V07 | Zero structured data | Rich Results Test — no schema found | 40 |

---

### Step 4: Calculate Final Score

```
Raw Score = Sum of all 50 item scores (max 200)
Normalized = (Raw Score / 200) × 100
Final Score = min(Normalized, lowest triggered veto cap)
```

Optional dimension-weighted scoring (recommended for granular analysis):
```
Weighted = (T_pct × 0.20) + (R_pct × 0.25) + (U_pct × 0.20) + (S_pct × 0.20) + (T2_pct × 0.15)
```

**Score interpretation:**
| Score | Grade | Meaning |
|-------|-------|---------|
| 90–100 | A | Excellent trust signals — minimal improvement needed |
| 75–89 | B | Good — targeted improvements in weakest dimension |
| 60–74 | C | Average — systematic improvements across 2–3 dimensions |
| 45–59 | D | Weak — significant foundational work required |
| <45 | F | Critical — multiple failing signals, significant ranking suppression |

---

### Step 5: Score Competitors (Abbreviated)

For each of 3 competitors, score on key items per dimension (abbreviated — focus on observable signals):

| Competitor | T /40 | R /40 | U /40 | S /40 | T2 /40 | Total /100 |
|-----------|-------|-------|-------|-------|--------|-----------|
| Client | | | | | | |
| Comp 1 | | | | | | |
| Comp 2 | | | | | | |
| Comp 3 | | | | | | |

---

### Step 6: Priority Quick Wins

For all items scored 0–1, calculate improvement priority:

| Item | Current Score | Potential Score | Impact (1–5) | Feasibility (1–5) | Priority | Effort |
|------|------------|----------------|-------------|-------------------|---------|--------|
| FAQPage schema missing | 0 | 4 | 4 | 5 | 20 | 30 min/page |
| INP >200ms | 1 | 3 | 4 | 3 | 12 | 4–16 hrs |
| No sameAs links | 0 | 3 | 4 | 5 | 20 | 30 min |
| Low CTR on branded queries | 1 | 3 | 3 | 4 | 12 | 1–2 hrs |
| AIO not appearing | 0 | 3 | 5 | 3 | 15 | 4–8 hrs |

---

## Output Format

```
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
 SERP-TRUST SCORECARD
 Website: [URL]
 Date: [Date]
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

 OVERALL SCORE: [X] / 100    Grade: [A-F]

 Dimension Breakdown:
 T  Technical Foundation   [XX/40]  ████████░░  [X%]
 R  Ranking Signals        [XX/40]  ███████░░░  [X%]
 U  User Experience        [XX/40]  █████░░░░░  [X%]
 S  Search Authority       [XX/40]  ████████░░  [X%]
 T2 Trust & AI Readiness   [XX/40]  ██████░░░░  [X%]

 Veto Checks:
 [✅/❌] V01: Site Indexed (site:[domain] returns pages)
 [✅/❌] V02: No Manual Penalty (GSC clear)
 [✅/❌] V03: HTTPS Active + SSL valid
 [✅/❌] V04: LCP < 6s on mobile
 [✅/❌] V05: No Cloaking detected
 [✅/❌] V06: Toxic Links < 50%
 [✅/❌] V07: Has Structured Data (schema present)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
 COMPETITOR COMPARISON
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
 | Metric     | Client | Comp 1 | Comp 2 | Comp 3 |
 |------------|--------|--------|--------|--------|
 | Overall    |   XX   |   XX   |   XX   |   XX   |
 | Technical  |   XX%  |   XX%  |   XX%  |   XX%  |
 | Ranking    |   XX%  |   XX%  |   XX%  |   XX%  |
 | UX/Perf    |   XX%  |   XX%  |   XX%  |   XX%  |
 | Authority  |   XX%  |   XX%  |   XX%  |   XX%  |
 | AI Ready   |   XX%  |   XX%  |   XX%  |   XX%  |

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
 TOP 5 IMPROVEMENT PRIORITIES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
 1. [Item ID]: [Description] — Current: X/4 → Target: 4/4 — Impact: High — Effort: [X]
 2. [Item ID]: [Description] — Current: X/4 → Target: 3/4 — Impact: High — Effort: [X]
 3. [Item ID]: [Description] — Current: X/4 → Target: 4/4 — Impact: Med — Effort: [X]
 4. [Item ID]: [Description] — Current: X/4 → Target: 3/4 — Impact: Med — Effort: [X]
 5. [Item ID]: [Description] — Current: X/4 → Target: 3/4 — Impact: Med — Effort: [X]

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
 QUICK WINS (Score to 3–4 with <1hr effort)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
 • [Item]: [What to do] — Effort: [time] — Expected gain: +X points (+X/100)
 • [Item]: [What to do] — Effort: [time] — Expected gain: +X points (+X/100)
 • [Item]: [What to do] — Effort: [time] — Expected gain: +X points (+X/100)
```

## SEO Health Index (Combined Score)

If LOCAL-IMPACT has also been scored, compute the combined index:

```
SEO Health Index = (LOCAL-IMPACT Score × 0.55) + (SERP-TRUST Score × 0.45)
```

Report as the master metric in the final output.

## Handoff

Save results to `{AUDIT_DIR}/serp-trust-scores.md` with YAML data block:

```yaml
---
skill: cross-cutting/serp-trust-auditor
phase: scoring
date: [YYYY-MM-DD]
business: [Business Name]
url: [URL]
framework: SERP-TRUST
version: 1.0
scores:
  overall: [0-100]
  grade: [A-F]
  weighted: [0-100]
  dimensions:
    T: { raw: X, max: 40, pct: X }
    R: { raw: X, max: 40, pct: X }
    U: { raw: X, max: 40, pct: X }
    S: { raw: X, max: 40, pct: X }
    T2: { raw: X, max: 40, pct: X }
  vetoes_triggered: [list veto codes or empty]
  competitors:
    - name: [comp1]
      url: [url]
      score: X
    - name: [comp2]
      url: [url]
      score: X
  seo_health_index: [0-100]
---
```

**Key consumers:**
- `output/report-generation` — SERP-TRUST score integrates into master report
- `output/pdf-report` — renders score dashboard with dimension bar chart in PDF
- `cross-cutting/local-impact-auditor` — combines for SEO Health Index composite score
