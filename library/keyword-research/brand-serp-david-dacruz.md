---
name: "brand-serp"
description: "Brand SERP and Knowledge Panel optimization. Activates when discussing branded search results, Knowledge Panel, brand visibility, sitelinks, SERP real estate for the brand name, or brand narrative control in search. Phase 16. Output: {AUDIT_DIR}/brand-serp-findings.md"
category: "keyword-research"
platforms: ["claude-code"]
platform_source: "declared"
repo: "david-dacruz/local-seo-audit"
repo_url: "https://github.com/david-dacruz/local-seo-audit"
source: "https://github.com/david-dacruz/local-seo-audit/blob/HEAD/local/brand-serp/SKILL.md"
raw_source: "https://raw.githubusercontent.com/david-dacruz/local-seo-audit/HEAD/local/brand-serp/SKILL.md"
ref: "HEAD"
discovered_via: "github-search"
license: "MIT"
stars: 0
collected: "2026-11-14"
---

<!-- Claude Code skill · david-dacruz/local-seo-audit · local/brand-serp/SKILL.md · MIT
     Source: https://github.com/david-dacruz/local-seo-audit/blob/HEAD/local/brand-serp/SKILL.md
     Detected by: declared · Regenerated on every run; edit the upstream skill, not this copy. -->

# Brand SERP & Knowledge Panel Audit — Phase 16

## Executive Summary

The Brand SERP is the most visited and least optimized page for most local businesses. When prospects, journalists, or partners search the business name, the result page forms their first impression in <0.5 seconds. In 2025, AI Overviews appear for ~15% of branded queries — adding a new layer of brand narrative that businesses must actively influence. A complete Knowledge Panel requires the same entity signals that drive local pack performance: GBP completion, sameAs connections (7+), Wikidata entity, and consistent NAP across platforms. Negative results on page 1 reduce brand CTR by 22% (Reputation X, 2024). Google's Quality Rater Guidelines (2024) explicitly score E-E-A-T based partly on what appears in branded searches — a strong brand SERP directly influences ranking trust signals.

**2025 brand SERP benchmarks:**
- AIO on branded queries: ~15% of branded searches now trigger AI Overviews (growing in 2025–2026)
- Knowledge Panel trigger: 7+ sameAs sources = eligibility threshold (Google's Knowledge Vault)
- sameAs minimum for competitive brand SERP: 5 properties (GBP, Facebook, LinkedIn, Yelp, Wikidata)
- Negative result impact: any negative result at P1–P3 → reduce brand score to maximum 50/100
- Sitelinks appear: when homepage has strong internal link structure + clear brand signal on anchor text
- AggregateRating schema: triggers star rating display in branded SERP = +17–25% CTR

**Numbered Action Plan:**

### Immediate (Week 1 — ≤1 hr each)
1. **Add AggregateRating schema to homepage** — `ratingValue`, `reviewCount`, `bestRating:5` using Google review data. Triggers star ratings in SERP. Effort: 30 min. Priority: 20.
2. **Add `sameAs` links in LocalBusiness schema** — GBP URL, Facebook, LinkedIn, Yelp, BBB, Instagram, Wikidata (if exists). Each = entity consolidation signal. Effort: 30 min. Priority: 25.
3. **Set up Google Alerts** — Create alerts for: "[Business Name]", "[Business Name] reviews", "[Business Name] complaints". Effort: 10 min. Free.
4. **Complete GBP profile to 100%** — All fields: description (750 chars), hours, services, 100+ photos, Q&A seeded. GBP completion directly affects Knowledge Panel data. Effort: 2–4 hrs.
5. **Complete + optimize all social profiles** — Facebook, Instagram, LinkedIn: consistent brand name, description, website URL, cover photo. Each complete profile = potential P1–P5 brand SERP slot. Effort: 30 min/platform.

### Short-Term (Week 2–4)
6. **Create Wikidata entity** — Wikidata is the #1 trigger for Knowledge Panel appearance and the primary source for ChatGPT/Perplexity business descriptions. Requires: 3+ external source citations. Effort: 2–4 hrs.
7. **Publish structured "About" page** — Include: founded year, founder name, specialties, awards, service area, Person schema for owner. Google and AI assistants pull from About page for entity descriptions. Effort: 2–3 hrs.
8. **Pitch local news** — 1–2 press features per quarter creates news box in brand SERP and provides AI citation sources. Effort: 4–8 hrs/pitch.
9. **Launch brand protection Google Ads campaign** — Bidding on own brand terms costs $0.10–0.50/click; prevents competitor ads from appearing above organic brand results. Effort: 1 hr setup.
10. **Suppress negative page-1 content** — For any negative result P1–10: publish new content targeting those keywords (YouTube video, press piece, case study, positive review platform). Effort: 4–20 hrs depending on severity.

---

## What Is the Brand SERP? (2025)

The Brand SERP is everything that appears when someone searches the business name. It's the business's "digital trust snapshot" — prospects, journalists, investors, and potential partners form their first impression in <0.5 seconds.

**A strong 2025 Brand SERP includes:**
- Website + sitelinks in position 1 (branded ownership)
- Knowledge Panel on the right with photo, description, stars, hours
- Social profiles in positions 2–5
- 4.5+ star review snippets visible
- Positive press/news in news box (if any)
- AIO summary featuring the business (2025: AI Overviews now appear for ~15% of branded queries)
- No negative results anywhere on page 1

**Why Brand SERP matters for SEO:**
- Google's Quality Rater Guidelines (2024) score E-E-A-T based partly on what appears in branded searches
- A complete Knowledge Panel increases entity trust → higher topical authority scores
- Negative page-1 results correlate with 22% lower brand click-through rates (Reputation X, 2024)

---

## Step 1: Read Project Context

Read `{AUDIT_DIR}/intake-data.md` — business name, URL, social media URLs.
Read `{AUDIT_DIR}/reputation-findings.md` — review landscape and negative content context.
Read `{AUDIT_DIR}/local-findings.md` — GBP completeness (feeds Knowledge Panel).

**Tools for this phase:**
| Tool | Purpose | Cost |
|------|---------|------|
| **Google Search** | Manual SERP inspection for "[Business Name]" and "[Business Name] [City]" | Free |
| **Brand24** | Real-time brand mention monitoring — finds negative mentions before they rank | Paid |
| **Mention** | Social + web mention tracking for brand name | Paid |
| **Google Alerts** | Free brand mention alerts (set up for: business name + variations) | Free |
| **Ahrefs** | Organic rankings for branded keywords, brand SERP features tracker | Paid |
| **SEMrush** | Branded keyword rankings, SERP feature history | Paid |
| **Wikidata** | Entity knowledge base — direct path to triggering Knowledge Panel | Free |
| **Google Search Console** | Branded query impressions and clicks (if access available) | Free |

**2025 Brand SERP Context:**
AI Overviews (AIO) now appear for branded queries in some niches — particularly if the business appears in multiple trusted sources. AIO citations for branded queries increase CTR by 15–25% (SearchPilot, 2025). Incomplete or inaccurate Knowledge Panels reduce AIO citation rate.

---

## Step 2: Brand SERP Full Audit

Search BOTH:
1. `[Business Name]` (exact)
2. `[Business Name] [City]`

Document EVERY result on page 1:

| Position | URL/Source | Feature Type | Content Summary | Sentiment |
|----------|-----------|-------------|----------------|----------|
| 1 | [URL] | Homepage + sitelinks | [title] | Positive |
| 2 | [URL] | Social profile | [platform] | Positive |
| 3 | [URL] | GBP card | [rating, reviews] | Positive |
| 4 | [URL] | Review platform | [rating] | Positive/Negative |
| ... | | | | |

### Brand SERP Control Checklist

**Positive Control Signals:**
- ✅ Homepage ranks #1 with sitelinks? (6+ sitelinks = strong brand recognition)
- ✅ Knowledge Panel present on right? (complete and accurate?)
- ✅ All major social profiles visible (Facebook, Instagram, LinkedIn, YouTube, Twitter/X)?
- ✅ GBP listing card appears with star rating?
- ✅ Review star rating visible in organic result (AggregateRating schema)?
- ✅ No negative press, complaints, or competitor ads on page 1?
- ✅ No Glassdoor/Indeed with low ratings dominating?
- ✅ No fake/impersonator social accounts showing?
- ✅ Image pack showing branded photos (not competitor or stock images)?

**SERP Feature Inventory:**
| Feature | Present? | Accurate? | Controlled? | Action |
|---------|---------|-----------|------------|--------|
| Knowledge Panel | ✅/❌ | ✅/❌ | ✅/❌ | |
| Sitelinks (6+) | ✅/❌ | ✅/❌ | N/A | |
| Review stars | ✅/❌ | ✅/❌ | ✅/❌ | |
| News box | ✅/❌ | ✅/❌ | Partial | |
| Image pack | ✅/❌ | ✅/❌ | Partial | |
| FAQ / PAA box | ✅/❌ | ✅/❌ | Partial | |
| Twitter/X card | ✅/❌ | ✅/❌ | ✅/❌ | |
| AI Overview (AIO) | ✅/❌ | ✅/❌ | Partial | |

---

## Step 3: Knowledge Panel Deep Audit

Search business name → assess Knowledge Panel:

### Knowledge Panel Completeness
| Attribute | Present? | Accurate? | Source | Fix Method |
|-----------|---------|-----------|--------|-----------|
| Business name (exact) | ✅/❌ | ✅/❌ | GBP/Wikidata | |
| Logo | ✅/❌ | ✅/❌ | GBP | Upload to GBP |
| Cover/header image | ✅/❌ | ✅/❌ | GBP | Upload to GBP |
| Description | ✅/❌ | ✅/❌ | Wikipedia/Wikidata | |
| Website URL | ✅/❌ | ✅/❌ | GBP | |
| Phone number | ✅/❌ | ✅/❌ | GBP | |
| Address | ✅/❌ | ✅/❌ | GBP | |
| Hours | ✅/❌ | ✅/❌ | GBP | |
| Reviews (rating + count) | ✅/❌ | ✅/❌ | GBP | |
| Social profiles linked | ✅/❌ | ✅/❌ | sameAs schema | |
| "Claimed" badge visible | ✅/❌ | N/A | GBP claimed | |
| Products/services shown | ✅/❌ | ✅/❌ | GBP | |

### Knowledge Panel Claim Status
- Claimed via Google Search Console? (owner can suggest edits, upload profile image)
- Have competitors or third parties used "Suggest an edit" to introduce inaccuracies?
- Last verified date: [check GBP Manager]

### If Knowledge Panel Does NOT Exist

**Root causes + fixes:**

| Root Cause | Likelihood | Fix | Timeline |
|-----------|-----------|-----|---------|
| GBP not claimed or incomplete | High | Complete all GBP fields | 1–2 weeks |
| No sameAs schema linking properties | High | Add `sameAs` array in schema | 2–4 weeks |
| No Wikidata entity | Medium | Create Wikidata entry with all attributes | 4–8 weeks |
| Insufficient web citations | Medium | Earn mentions on local news / directories | 8–16 weeks |
| Business name too generic | Low | Add location qualifier in brand strategy | Long-term |

**Schema to trigger Knowledge Panel:**
```json
{
  "@type": "LocalBusiness",
  "@id": "https://domain.com/#business",
  "name": "[Business Name]",
  "sameAs": [
    "https://www.google.com/maps?cid=[CID]",
    "https://www.facebook.com/[page]",
    "https://www.instagram.com/[handle]",
    "https://www.yelp.com/biz/[slug]",
    "https://www.bbb.org/[listing]",
    "https://www.wikidata.org/wiki/[Q-number]"
  ]
}
```

**`sameAs` coverage:** The more authoritative properties in `sameAs`, the stronger the entity signal. Target minimum 5 sameAs URLs including GBP, Facebook, Yelp, BBB, and Wikidata.

---

## Step 4: Sitelinks Assessment

Google auto-generates sitelinks based on site structure and internal link signals.

**Current sitelinks showing:** [list all]

**Are the right pages sitelinks?**
| Sitelink Showing | Correct? | Should Be Instead |
|----------------|---------|-----------------|
| [current sitelink 1] | ✅/❌ | |
| [current sitelink 2] | ✅/❌ | |

**To influence sitelinks:**
- Increase internal links to desired pages (more internal links = stronger candidacy)
- Ensure target pages have unique, descriptive title tags
- Cannot directly add sitelinks — only demote via GSC (Search Appearance → Sitelinks)

**Target sitelinks:** Homepage → Services → Contact → Locations → About → Reviews/Testimonials

---

## Step 5: Competitor Ads on Brand SERP

- Google Ads appearing for "[Business Name]" search?
- Which competitors are bidding on the brand name?
- Impact: competitor ads appear ABOVE organic #1 result — can steal 15–30% of branded traffic

**If competitor ads present:**
1. Create brand protection campaign in Google Ads — bid on own brand name (~$0.10–0.50 CPC for own brand)
2. Respond with a dedicated brand search landing page
3. Note as high-priority competitive threat

---

## Step 6: Negative Results Assessment

Scan page 1 for all negative content:

| URL | Platform | Content Summary | Severity | Suppression Strategy |
|-----|---------|----------------|---------|---------------------|
| [URL] | [BBB/Ripoff/Reddit] | [summary] | Critical/High/Med | Push down / Respond / Legal |

**Severity definitions:**
- **Critical**: Ripoff Report, negative news article, BBB F rating — directly visible in SERP
- **High**: Reddit complaints thread, Glassdoor <3.0, negative Yelp review page ranking
- **Medium**: Old outdated negative content, low-traffic complaint page

**Suppression strategies (Impact × Feasibility):**
| Strategy | Impact | Feasibility | Priority | Timeline |
|---------|--------|------------|---------|---------|
| Create new controlled content (YouTube, press, blog) | 4 | 4 | 16 | 4–12 weeks |
| Optimize social profiles to rank on page 1 | 4 | 5 | 20 | 2–4 weeks |
| Respond publicly to negative content (defuses it) | 3 | 5 | 15 | Immediate |
| Earn local press coverage (positive ranking content) | 5 | 3 | 15 | 4–12 weeks |
| Legal removal (for defamation or false claims) | 5 | 2 | 10 | 3–12 months |

---

## Step 7: AI Visibility on Brand SERP (2025)

AI Overviews and AI assistants increasingly appear for branded queries.

**Test protocol:**
1. Search `[Business Name]` in Google → does AIO appear? What does it say?
2. Ask ChatGPT: `Tell me about [Business Name] in [City]` → what information appears?
3. Ask Perplexity: `What is [Business Name]?` → is business cited? What sources?
4. Check Google Maps AI summary (2025) — is business featured in AI city/category overviews?

| AI Platform | Business Mentioned? | Information Accurate? | Sources Cited | Fix |
|------------|--------------------|-----------------------|--------------|-----|
| Google AIO | Yes/No | Yes/No | | |
| ChatGPT | Yes/No | Yes/No | | |
| Perplexity | Yes/No | Yes/No | | |
| Google Maps AI | Yes/No | Yes/No | | |

**To improve AI Brand SERP:**
1. Complete Wikidata entry (most frequently pulled by AI assistants)
2. Publish factual "About" page with structured data (founded year, founder, specialties)
3. Earn Wikipedia or Wikidata mentions from 3rd-party sources
4. Ensure GBP description contains accurate, factual brand information

---

## Step 8: Competitor Brand SERP Comparison

| Signal | Client | Comp 1 | Comp 2 | Gap |
|--------|--------|--------|--------|-----|
| Homepage rank (branded) | #1? | #1? | #1? | |
| Knowledge Panel present | Yes/No | Yes/No | Yes/No | |
| Sitelinks count | | | | |
| Review stars visible | Yes/No | Yes/No | Yes/No | |
| Negative results page 1 | Yes/No | Yes/No | Yes/No | |
| Social profiles page 1 count | | | | |
| AIO appearance | Yes/No | Yes/No | Yes/No | |

---

## Brand SERP Optimization Strategy

| Action | Expected Result | Impact (1–5) | Feasibility (1–5) | Priority | Timeline |
|--------|----------------|-------------|-------------------|---------|---------|
| Add `sameAs` schema (5+ properties) | Knowledge Panel trigger | 5 | 5 | 25 | 2–4 weeks |
| Fully optimize GBP (all fields) | GBP card in brand SERP | 4 | 5 | 20 | 1–2 weeks |
| Create Wikidata entity | Knowledge Panel + AI citations | 5 | 4 | 20 | 4–8 weeks |
| Complete/optimize all social profiles | Social profiles page 1 | 4 | 5 | 20 | 2–4 weeks |
| Add AggregateRating schema to homepage | Review stars in SERP | 4 | 5 | 20 | 1 hr |
| Brand protection Google Ads campaign | Stop competitor brand bidding | 5 | 4 | 20 | 1 week |
| Publish positive press/local news | News box + page 1 asset | 4 | 3 | 12 | 4–12 weeks |
| Create YouTube brand channel + video | Controlled page 1 result | 4 | 3 | 12 | 2–4 weeks |

---

## Scoring

| Category | Weight | Score |
|----------|--------|-------|
| Homepage ranks #1 with sitelinks | 20% | /20 |
| Knowledge Panel completeness + accuracy | 25% | /25 |
| Social profiles visible (page 1, 3+ platforms) | 20% | /20 |
| No negative results page 1 | 20% | /20 |
| Review stars visible in SERP | 15% | /15 |

**Veto:** Negative result at position 1–3 for branded query → maximum score 50/100.

---

## Output

Write to `{AUDIT_DIR}/brand-serp-findings.md` with YAML frontmatter:

```yaml
---
skill: local/brand-serp
phase: 16
date: [YYYY-MM-DD]
business: [Business Name]
url: [URL]
score: [X/100]
knowledge_panel: [present|missing|partial]
homepage_rank: [#X or not-ranking]
negative_results: [yes|no|count]
---
```

Include:
- Score X/100 with per-category breakdown
- Full page-1 SERP inventory table (both queries)
- SERP feature inventory (Knowledge Panel, sitelinks, stars, AIO, news)
- Knowledge Panel completeness + claim status
- `sameAs` schema audit (current URLs listed, missing properties)
- Competitor ads detection
- Negative content risk assessment + suppression strategy
- AI visibility test results (ChatGPT, Perplexity, Google AIO)
- Competitor Brand SERP comparison table
- Priority optimization strategy (Impact × Feasibility scored)
- 30/90-day Brand SERP improvement plan

**Output files:**
- `{AUDIT_DIR}/brand-serp-findings.md` — findings with score and SERP element inventory
- `{REPORTS_DIR}/phase-16-brand-serp.pdf` — auto-generated PDF after phase completes

**Key consumers:**
- `local/entity-audit` — entity schema and sameAs overlap
- `local/reputation-audit` — negative content on brand SERP
- `output/report-generation` — brand SERP score in master report section 16

---

## Recommendations Checklist

### Quick Wins (Week 1, <1 hr each)
- [ ] Claim and verify Google Business Profile if unclaimed — Effort: 30 min — Priority: 25
- [ ] Add `sameAs` array to Organization schema (LinkedIn, Facebook, Yelp, Wikidata, industry directory) — Effort: 30 min
- [ ] Add AggregateRating schema to homepage (triggers star display = +17–25% CTR) — Effort: 30 min
- [ ] Verify GBP name/address/phone matches website exactly — Effort: 15 min

### Brand SERP Element Optimization Table

| SERP Element | Current State | Target State | Action | Effort |
|-------------|--------------|-------------|--------|--------|
| Knowledge Panel | Present / Absent / Partial | Full panel with logo, hours, services | Add sameAs + Wikidata entity | 1–2 hrs |
| Sitelinks | None / 2-4 / 6+ | 6 sitelinks with descriptive labels | Add sitelinks schema; improve site structure | 2–4 hrs |
| AIO on branded query | Absent / Present | Cited in AIO summary | Add FAQPage, HowTo, Organization schema | 2–3 hrs |
| Review stars | None / Present | Present (4.0+ star display) | Add AggregateRating schema | 30 min |
| Social profiles on P1 | 0–1 / 2–3 / 4+ | 4+ social properties ranking P1 | Optimize LinkedIn, Facebook About pages | 1 hr |
| Negative result | None / 1 / 2+ | Zero P1 negative results | ORM strategy + content displacement | Varies |
| GBP 2025 features | Missing / Partial / Complete | Q&A active, service menu, booking | Add Q&A, services, book via Google Reserve | 1–2 hrs |
