---
name: "onpage-seo"
description: "On-page SEO optimization expertise. Activates for title tags, meta descriptions, header tags, content optimization, internal linking, image SEO, E-E-A-T signals, CTAs, AI Overviews optimization, entity optimization, or any page-level SEO analysis. Phase 3. Output: {AUDIT_DIR}/onpage-findings.md"
category: "on-page-seo"
platforms: ["claude-code"]
platform_source: "declared"
repo: "david-dacruz/local-seo-audit"
repo_url: "https://github.com/david-dacruz/local-seo-audit"
source: "https://github.com/david-dacruz/local-seo-audit/blob/HEAD/audit/onpage-seo/SKILL.md"
raw_source: "https://raw.githubusercontent.com/david-dacruz/local-seo-audit/HEAD/audit/onpage-seo/SKILL.md"
ref: "HEAD"
discovered_via: "github-search"
license: "MIT"
stars: 0
collected: "2026-11-14"
---

<!-- Claude Code skill · david-dacruz/local-seo-audit · audit/onpage-seo/SKILL.md · MIT
     Source: https://github.com/david-dacruz/local-seo-audit/blob/HEAD/audit/onpage-seo/SKILL.md
     Detected by: declared · Regenerated on every run; edit the upstream skill, not this copy. -->

# On-Page SEO Audit — Phase 3

## Executive Summary

On-page SEO is the highest-leverage, lowest-cost ranking lever available. Title tag + meta optimization alone can improve CTR by 20–35% within 30 days (GSC data 2024). In 2025, on-page signals have a dual role: traditional ranking AND AI Overview citation probability. Pages without direct standalone answers and FAQPage schema rarely appear in AIO. Always compare against the top-ranking competitor's on-page patterns.

---

## Tools for This Phase

| Tool | Purpose | Cost |
|------|---------|------|
| **Screaming Frog** | Bulk audit: titles, meta, H1s, word counts, duplicate detection | Free/Paid |
| **Google Search Console** | Page-level impressions, CTR, position — identify rewrite priorities | Free |
| **Surfer SEO** | Content Score vs. top competitors — target 70+ cluster, 80+ pillar | Paid |
| **Clearscope** | Content grade vs. top 10 competitors — target A- pillar, B+ cluster | Paid |
| **Ahrefs** | Organic keywords per page, SERP features per URL | Paid |
| **SEMrush** | On-page checker — compare vs. top 10 ranking pages | Paid |
| **Google Rich Results Test** | FAQPage schema validation, structured data presence | Free |
| **Chrome DevTools → Sources** | Verify rendered HTML (JS-rendered content vs. raw HTML) | Free |
| **site_crawler.py** | Word counts, title/meta data per page CSV | Free (local) |

---

## Step 1: Read Project Context

Read `{AUDIT_DIR}/intake-data.md` — business name, URL, services, location.
Read `{AUDIT_DIR}/technical-findings.md` — page indexation status, canonical issues.
Read `{AUDIT_DIR}/competitor-profiles.md` — competitor on-page patterns, title formats, schema usage.
Read `{DATA_DIR}/crawl/` — crawler output for bulk title/meta analysis.

---

## Priority Page Inventory

Audit in this order (highest business impact first):
1. Homepage
2. Primary service page(s) — one per core service
3. Location/service-area pages
4. Top-performing blog posts (by GSC impressions — filter top 10)
5. Contact page
6. About page (E-E-A-T critical)

---

## Section 1: Title Tags

### Character Limits (2025)
- **Optimal:** 50–60 characters (displays fully in desktop SERPs)
- **Mobile SERP:** 50–55 characters
- **Maximum before truncation:** 60 characters (580px pixel width)
- **Google rewrites if:** Title doesn't match page content or is < 10 characters

### Per-Page Checklist
For each key page, verify:
- [ ] Unique across the entire site? (Screaming Frog → Title → duplicates)
- [ ] Primary keyword in first 5 words?
- [ ] 50–60 characters?
- [ ] Location included for all service/location pages?
- [ ] Brand name at end (after ` | ` or ` — `)?
- [ ] Contains action word, number, or value prop for CTR?
- [ ] No keyword stuffing (same keyword repeated)?

**Optimal title formats:**
| Page Type | Format | Example |
|-----------|--------|---------|
| Service page | `[Service] in [City] \| [Brand]` | `Emergency Plumber in Chicago \| Acme Plumbing` |
| Homepage | `[Brand] — [Service] in [City, State]` | `Acme Plumbing — Plumber in Chicago, IL` |
| Blog post | `[Question/Keyword] [Year] — [Brand]` | `How to Fix a Leaky Faucet 2025 — Acme Plumbing` |
| Location page | `[Service] in [City, ST] \| [Brand]` | `Drain Cleaning in Evanston, IL \| Acme` |

### AI Overviews Title Optimization
Titles that appear in AIO tend to:
- Directly match conversational query intent
- Include "How", "What", "Best", or specific quantifiers
- Signal definitive authority: "Complete Guide", "Expert Guide", "[Year] Guide"

### Competitor Title Comparison
| Page | Client Title | Competitor #1 Title | Gap |
|------|-------------|--------------------|----|
| Homepage | | | |
| Primary service | | | |
| Location page | | | |

---

## Section 2: Meta Descriptions

**Character limits:** 150–160 characters (desktop) | 130–145 characters (mobile)
**If Google rewrites 90%+ of meta descriptions:** Page content doesn't match intent — rewrite lead paragraph first.

Per-page checklist:
- [ ] Unique across site? (Screaming Frog → Meta Description → duplicates)
- [ ] 150–160 characters?
- [ ] Contains primary keyword + location (local pages)?
- [ ] Clear value proposition (WHY click this result)?
- [ ] CTA: "Call today", "Get a free quote", "Book online"?
- [ ] Phone number on high-conversion service pages?
- [ ] No passive language ("We provide..." → "Get same-day service...")?

---

## Section 3: Header Tag Hierarchy (H1–H6)

Per-page checks:
- [ ] Exactly ONE H1 per page? (Screaming Frog → H1 → filter "Multiple H1")
- [ ] H1 contains primary keyword?
- [ ] H1 is unique across the site?
- [ ] Logical hierarchy — no level skipping (H1 → H2 → H3, NOT H1 → H3)?
- [ ] H2s structure main sections with secondary keywords?
- [ ] H3s for subtopics under H2s?
- [ ] Headers descriptive, not generic ("Our Services" → "Plumbing Services in Chicago")?
- [ ] Question-format H2s/H3s for AIO citation potential?

**AIO-optimized header pattern (2025):**
```
H1: [Primary Keyword in City] — [Benefit]
  H2: What Is [Service]?  ← AIO extraction target
  H2: How Much Does [Service] Cost in [City]?  ← AIO + featured snippet
    H3: Factors Affecting [Service] Cost
  H2: Our [Service] Process  ← HowTo schema opportunity
  H2: Frequently Asked Questions  ← FAQPage schema target
    H3: [Question 1]?
    H3: [Question 2]?
```

---

## Section 4: Content Optimization

### Keyword Density & Distribution
- Primary keyword in first 100 words: ✅/❌
- Natural density: 1–2% (not stuffed, not absent)
- LSI/NLP entities used (not just exact match): ✅/❌
- Synonyms and related variants included: ✅/❌

### Word Count Benchmarks (2025 HCS Standards)
| Page Type | Minimum | Competitive Target | Red Flag |
|-----------|---------|-------------------|---------|-
| Homepage | 600 words | 800–1,200 | < 400 |
| Service page | 800 words | 1,200–2,000 | < 500 |
| Location page | 600 words | 900–1,500 | < 400 |
| Pillar blog | 2,500 words | 3,500–5,000 | < 1,200 |
| Cluster blog | 1,200 words | 1,500–2,500 | < 600 |
| FAQ answer | 150 words | 250–400 | < 50 |

### Search Intent Satisfaction
| Intent | Content Required | Conversion Rate |
|--------|----------------|----------------|
| Informational | Comprehensive guide, all related questions answered | 1–3% |
| Commercial | Service description, pricing signals, reviews, comparison | 3–8% |
| Transactional | Clear path to contact/book, click-to-call, urgency | 8–20% |
| Navigational | Gets user to destination immediately | Brand intent |

**Competitor comparison (Surfer/Clearscope):**
| Page | Client Word Count | Surfer Score | Comp #1 Words | Comp #1 Score | Gap |
|------|-----------------|------------|--------------|---------------|-----|
| Homepage | | | | | |
| [Service] page | | | | | |

### Content Freshness
- Date visible on time-sensitive pages (updated YYYY)? ✅/❌
- Statistics current (< 2 years old)? ✅/❌
- Seasonal pages updated for current year? ✅/❌
- **2025 context:** ChatGPT cites content updated within 30 days at 76.4% rate — freshness = AIO signal.

---

## Section 5: E-E-A-T On-Page Signals

**E-E-A-T (Experience, Expertise, Authoritativeness, Trustworthiness)** — Google's quality framework, critical since HCS integration into core algorithm (March 2024).

### Experience Signals (NEW "first E" since Dec 2022)
- Real photos of team doing actual work? ✅/❌
- Case studies with before/after + specific outcomes? ✅/❌
- Project galleries with client permission? ✅/❌
- Video content showing expertise in action? ✅/❌
- Real project examples with specifics (location, problem, solution, outcome)? ✅/❌

### Expertise Signals
- Author name + bio on all blog posts? ✅/❌
- Author page with credentials at `/about/[name]`? ✅/❌
- Certifications, licenses, professional memberships stated? ✅/❌
- Years of experience stated with specific projects? ✅/❌

### Authoritativeness
- External links to authoritative sources (not competitors)? ✅/❌
- Industry data cited with sources + dates? ✅/❌
- Awards or recognition mentioned with links? ✅/❌

### Trustworthiness
- About page with real team photos + bios? ✅/❌
- Physical address in footer and Contact page? ✅/❌
- Privacy policy + terms of service linked from footer? ✅/❌
- SSL/HTTPS on all pages? ✅/❌
- Third-party review platform links (Google, BBB, Yelp)? ✅/❌

---

## Section 6: Internal Linking

### Hub-and-Spoke Architecture Check
- Pillar service pages link to all related subtopic pages? ✅/❌
- Subtopic pages link back to pillar? ✅/❌
- Blog posts link to relevant service pages (conversion bridge)? ✅/❌
- Service pages link to related blog content (depth signal)? ✅/❌

### Internal Link Metrics (from Screaming Frog)
| Check | Target | Client |
|-------|--------|--------|
| Orphan pages (0 internal links) | 0 | |
| Pages requiring > 3 clicks from homepage | 0 | |
| Max internal links per page | < 100 | |
| Homepage internal links | 25–75 | |

### Anchor Text Quality
- Descriptive, keyword-inclusive anchors (not "click here")? ✅/❌
- Varied anchor text (not same anchor for all links to same page)? ✅/❌
- Primary keyword anchor to primary service page? ✅/❌

---

## Section 7: Image SEO

| Check | Target | Impact |
|-------|--------|--------|
| Alt text: descriptive, 5–15 words, keyword-inclusive | All images | AIO image citation + accessibility |
| Alt text max length | 150 characters | Screen reader UX |
| Filename: descriptive (not `IMG_1234.jpg`) | All images | Image search ranking |
| Format: WebP or AVIF | All non-hero images | Page speed |
| Dimensions `width`/`height` specified | All images | CLS prevention |
| `loading="lazy"` on below-fold images | All below-fold | LCP improvement |
| Geo-tagged EXIF data | Location-relevant images | Local SEO signal |
| Image in XML sitemap | Significant images | Image search visibility |

---

## Section 8: AI Overviews Optimization (2025 Critical)

Pages cited in AIO score 4× the impressions of position 1 organic when AIO appears. AIO appears for 20–35% of local service queries (SparkToro 2025).

**AIO citation requirements — checklist per page:**
- [ ] Direct, standalone answer in first 40–50 words (no preamble)?
- [ ] Question-format H2/H3 headers matching common voice/conversational queries?
- [ ] Definitions: "A [service] is..." format in first paragraph?
- [ ] Specific data points (costs, timelines, measurements) stated precisely?
- [ ] Numbered step-by-step processes (HowTo schema opportunity)?
- [ ] Structured comparisons using tables?
- [ ] FAQPage schema with 5+ questions on service pages?
- [ ] Content updated within last 30 days (freshness = AIO citation bias)?
- [ ] Business rated ≥ 4.3 stars (review signal for local AIO)?

**Test:** Search target keyword → does AIO appear? Is client cited? If competitor cited but not client → content gap in answer structure.

---

## Section 9: Page Experience Signals

- Core Web Vitals all "Good" (from Phase 10)? ✅/❌
- No intrusive interstitials blocking content on mobile? ✅/❌
- No aggressive ads above fold? ✅/❌
- Safe browsing clean (no malware)? ✅/❌
- Mobile-friendly (Google Mobile-Friendly Test passing)? ✅/❌
- No horizontal scrolling on mobile (375px viewport)? ✅/❌

---

## Section 10: CTAs

| Check | High-Intent Pages | Blog Posts |
|-------|------------------|------------|
| At least 1 CTA per page | Required | Required |
| CTA above fold on mobile | Required | Optional |
| Click-to-call `<a href="tel:...">` | Required | Recommended |
| Service-specific CTA (not generic "Contact Us") | Required | N/A |
| CTA visual contrast (color + size) | Required | Required |
| Multiple CTAs on long pages (top/mid/bottom) | Required | Recommended |
| Sticky CTA header/bar on mobile | High priority | Optional |

---

## Scoring

| Category | Weight | Score |
|----------|--------|-------|
| Title tags (uniqueness, optimization, length) | 15% | /15 |
| Meta descriptions (uniqueness, CTR optimization) | 10% | /10 |
| Header hierarchy (H1 uniqueness, keyword use, AIO structure) | 10% | /10 |
| Content depth + intent satisfaction vs. competitors | 20% | /20 |
| E-E-A-T signals (all 4 components) | 20% | /20 |
| Internal linking (hub-and-spoke, orphans, anchor text) | 10% | /10 |
| Image SEO (alt text, format, dimensions) | 5% | /5 |
| AI Overviews optimization (FAQPage, direct answers) | 10% | /10 |

**Veto:** > 50% of service pages missing FAQPage schema → maximum AI visibility score capped at 40/100.

---

## Output

Write complete findings to `{AUDIT_DIR}/onpage-findings.md` with YAML frontmatter:

```yaml
---
skill: audit/onpage-seo
phase: 3
date: [YYYY-MM-DD]
business: [Business Name]
url: [URL]
score: [X/100]
pages_audited: [X]
title_issues: [X]
missing_faqpage: [X]
eeat_score: [X/20]
aio_citations: [X]
---
```

Include:
- Score X/100 with per-category breakdown
- Page-by-page title + meta audit table (all priority pages)
- H1 issues table (duplicates, missing, non-optimized)
- Content depth comparison (client vs. top 3 competitors, Surfer scores)
- E-E-A-T assessment across all 4 dimensions
- Internal linking audit (orphans, hub-and-spoke gaps)
- Image SEO issues table
- AIO readiness checklist (per key page)
- CTAs audit with conversion improvement estimates
- Priority matrix (all issues, Impact × Feasibility scored)
- 30/90-day on-page improvement plan with effort estimates

**Output files:**
- `{AUDIT_DIR}/onpage-findings.md` — on-page audit findings with score
- `{REPORTS_DIR}/phase-3-onpage-seo.pdf` — auto-generated PDF after phase completes

**Key consumers:**
- `research/content-gaps` — reads for content quality gaps to address
- `strategy/ux-cro-audit` — reads for CTA gaps and conversion opportunities
- `cross-cutting/serp-trust-auditor` — Ranking Signals (R) dimension
- `ai-visibility/ai-seo` — AIO readiness signals feed AI audit

---

## On-Page SEO Priority Action Table

### Issue Priority by Type

| Issue Type | Impact | Feasibility | Priority | Avg Effort | Expected Lift |
|-----------|--------|-------------|----------|-----------|--------------|
| Missing FAQPage schema on service pages | 5 | 5 | 25 | 30 min/page | 3.2× AIO citation rate |
| Title tag missing primary keyword | 4 | 5 | 20 | 5 min/page | +5–15% CTR |
| Missing or duplicate H1 | 4 | 5 | 20 | 5 min/page | Crawl clarity |
| Meta description too long (>155 chars) or missing | 3 | 5 | 15 | 5 min/page | +3–8% CTR |
| Thin page content (<500 words on service page) | 5 | 3 | 15 | 4–8 hrs/page | Rankings lift |
| Missing HowTo schema on process pages | 4 | 4 | 16 | 30 min/page | Featured snippet + AIO |
| Internal links: orphaned pages (<3 inbound links) | 4 | 5 | 20 | 15 min/page | PageRank distribution |
| Image alt text missing | 3 | 5 | 15 | 30 min (bulk) | Accessibility + image search |
| Keyword cannibalization (2+ pages targeting same keyword) | 4 | 4 | 16 | 1–2 hrs | Consolidates ranking power |

### Numbered Action Plan

#### Immediate (Week 1, No Dev Required)
1. **Add FAQPage schema to all service pages** — highest ROI action: 3.2× AIO citation rate, 30 min/page, no developer needed via JSON-LD script block. Effort: 30 min/page. Priority: 25.
2. **Fix title tags** — ensure primary keyword in first 50 characters; title length 50–60 characters; unique per page. Use Screaming Frog to batch-identify. Effort: 5 min/page. Priority: 20.
3. **Fix duplicate or missing H1s** — each page must have exactly one H1. Check with Screaming Frog → filter "Missing H1" and "Multiple H1". Effort: 5 min/page. Priority: 20.
4. **Optimize meta descriptions** — 120–155 characters, includes primary keyword, has a CTA ("Call us today", "Get a free quote"). Missing meta = Google auto-generates (usually suboptimal). Effort: 5 min/page. Priority: 15.
5. **Fix orphaned pages** — run site_crawler.py → identify pages with <3 inbound internal links → add contextual links from related pages (not navigation). Effort: 15 min/page. Priority: 20.

#### Short-Term (Week 2–4, Content + Developer)
6. **Add HowTo schema to process pages** — "How to [service]" pages without HowTo schema miss featured snippet + AIO opportunities. Effort: 30 min/page. Priority: 16.
7. **Expand thin content** — service pages <800 words: expand with: local pricing context, process steps, FAQs, local testimonials, before/after. Target Surfer Score ≥70. Effort: 2–4 hrs/page. Priority: 15.
8. **Resolve keyword cannibalization** — 2+ pages targeting same keyword: pick the stronger one (more links, better CTR), 301 redirect the weaker, consolidate content. Effort: 1–2 hrs per pair. Priority: 16.
9. **Add bulk image alt text** — use Screaming Frog to export all images missing alt text → add descriptive alt text (keyword-included where relevant, descriptive always). Effort: 30 min bulk. Priority: 15.
10. **Audit and fix duplicate title tags** — Screaming Frog → filter Duplicate Title Tags → rewrite each to be unique and keyword-specific. Effort: 5 min/page. Priority: 20.
