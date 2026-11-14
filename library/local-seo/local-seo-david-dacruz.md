---
name: "local-seo"
description: "Local SEO expertise and audit. Activates for Google Business Profile, GBP optimization, local pack, citations, NAP consistency, reviews, local landing pages, local content, local links, Google Maps, Apple Maps, Bing Places, or service area business discussions. Phase 11. Output: {AUDIT_DIR}/local-findings.md"
category: "local-seo"
platforms: ["claude-code"]
platform_source: "declared"
repo: "david-dacruz/local-seo-audit"
repo_url: "https://github.com/david-dacruz/local-seo-audit"
source: "https://github.com/david-dacruz/local-seo-audit/blob/HEAD/local/local-seo/SKILL.md"
raw_source: "https://raw.githubusercontent.com/david-dacruz/local-seo-audit/HEAD/local/local-seo/SKILL.md"
ref: "HEAD"
discovered_via: "github-search"
license: "MIT"
stars: 0
collected: "2026-11-14"
---

<!-- Claude Code skill · david-dacruz/local-seo-audit · local/local-seo/SKILL.md · MIT
     Source: https://github.com/david-dacruz/local-seo-audit/blob/HEAD/local/local-seo/SKILL.md
     Detected by: declared · Regenerated on every run; edit the upstream skill, not this copy. -->

# Local SEO Audit — Phase 11

## Executive Summary

Local SEO is the highest-ROI channel for brick-and-mortar and service area businesses. The Google local pack (3-pack) captures 44% of clicks for local queries (BrightLocal 2025) — more than organic position 1 for geo-modified searches. In 2025, the local pack algorithm weights three core clusters: GBP signals (36% of local ranking weight per Whitespark 2024 Local Search Ranking Factors survey), Review signals (17%), and On-Page/Website signals (16%). AI Overviews now appear for 20–35% of local service queries; businesses with FAQPage schema are 2.3× more likely to appear in AIO for local queries. This phase audits every dimension of local SEO from GBP optimization to citation health, NAP consistency, local landing pages, and AI visibility across Google, Apple, and Bing.

**2025 local SEO benchmarks:**
- GBP primary category = #1 local pack ranking factor (Whitespark 2024 survey, cited by 36% of experts)
- 100+ GBP photos = 1,065% more website clicks vs. businesses with fewer photos (Google internal data, 2024)
- Review recency: last 60–90 days weighted 3–5× more than older reviews
- NAP consistency threshold: ≥95% = acceptable; <85% = critical ranking signal dilution
- FAQPage schema → 2.3× AIO inclusion rate for local service queries (Amsive 2025)
- Proximity signal weight (2025): ~35% of local ranking for mobile (up from ~25% in 2023)
- Q&A content on GBP feeds Google AI Overviews for local queries (confirmed Google I/O 2024)

---

## Step 1: Read Project Context

Read `{AUDIT_DIR}/intake-data.md` — business name, URL, services, locations, GBP URL.
Read `{AUDIT_DIR}/competitor-profiles.md` — competitor local SEO benchmarks.
Read `{AUDIT_DIR}/technical-findings.md` — schema and indexation status.

**Tools for this phase:**
| Tool | Purpose | Cost |
|------|---------|------|
| **BrightLocal** | GBP audit, NAP consistency scan (checks 80+ directories), review tracking | Paid |
| **Whitespark** | Local citation finder, citation building, Local Rank Tracker (grid view) | Paid |
| **Local Falcon** | Geographic rank grid — visualize local pack position across city radius | Paid |
| **PlePer Tools** | Free competitor GBP extraction — categories, attributes, review count, photo count | Free |
| **GBP Manager** (business.google.com) | Direct GBP management, posts, Q&A, insights | Free |
| **Moz Local** | Citation distribution score, duplicate detection, directory submission | Paid |
| **Data Axle** | Tier 1 citation aggregator — feeds 200+ downstream directories | Paid |
| **Google Search Console** | Local landing page performance — clicks, impressions per location keyword | Free |

**Whitespark 2024 Local Search Ranking Factors — Top Signals by Category:**
| Rank | Signal | Category | Weight |
|------|--------|---------|--------|
| 1 | GBP primary category | GBP Signals | 36% total weight |
| 2 | Physical proximity to searcher | Behavioral | ~35% mobile |
| 3 | Review count + velocity + rating | Review Signals | 17% total weight |
| 4 | Keyword in GBP business title | GBP Signals | High |
| 5 | NAP consistency across citations | Citation Signals | 11% total weight |
| 6 | Website authority + local landing page | On-Page/Website | 16% total weight |
| 7 | Behavioral signals (CTR, clicks, check-ins) | Behavioral | Growing |
| 8 | Link signals (quality + local relevance) | Link Signals | 11% total weight |

---

## Section 1: Google Business Profile — Full Audit

### Claim & Verification Status
- GBP claimed and verified? (Postcard / Phone / Video / Email?)
- Verification method used: [document — affects trust tier with Google]
- Owner/manager access confirmed?
- Duplicate listings exist? (Search business name in Google Maps — flag all extras)
- Suspended listings? (Check GBP Manager for warnings)

### Category Optimization (Highest-Impact GBP Field)
Primary category is the #1 local pack ranking factor (Whitespark 2024). Verify with **PlePer**:

| Check | Current | Recommended | Action |
|-------|---------|-------------|--------|
| Primary category | [current] | [optimal?] | Change/Keep |
| Secondary categories (up to 9) | [list] | [missing categories?] | Add |
| Competitor primary category | [comp 1] | [comp 2] | Benchmark |

**Check competitor categories via PlePer:** Enter competitor GBP CID → extract their exact primary + secondary categories. Are they using advantageous categories you're missing?

### GBP Business Information — 13-Point Completeness Checklist

| Field | Present? | Accurate? | Optimized? | Impact |
|-------|---------|-----------|-----------|--------|
| Business name (no keyword stuffing) | ✅/❌ | ✅/❌ | ✅/❌ | Critical |
| Complete street address | ✅/❌ | ✅/❌ | ✅/❌ | Critical |
| Local phone number (not 1800) | ✅/❌ | ✅/❌ | ✅/❌ | Critical |
| Website URL (to correct landing page) | ✅/❌ | ✅/❌ | ✅/❌ | Critical |
| Business hours (all 7 days) | ✅/❌ | ✅/❌ | ✅/❌ | High |
| Holiday/special hours set | ✅/❌ | ✅/❌ | ✅/❌ | High |
| Business description (750 chars used) | ✅/❌ | ✅/❌ | ✅/❌ | High |
| Services listed with descriptions | ✅/❌ | ✅/❌ | ✅/❌ | High |
| Products listed (if applicable) | ✅/❌ | ✅/❌ | ✅/❌ | Medium |
| Attributes (accessibility, payment, etc.) | ✅/❌ | ✅/❌ | ✅/❌ | Medium |
| Appointment URL | ✅/❌ | ✅/❌ | ✅/❌ | Medium |
| Q&A section (5+ seeded answers) | ✅/❌ | ✅/❌ | ✅/❌ | Medium |
| Messaging enabled (if business responds) | ✅/❌ | ✅/❌ | ✅/❌ | Low |

**Note:** GBP Chat was deprecated July 2024 — do NOT advise enabling it; it no longer exists.

### Description Optimization
- Uses all 750 characters?
- Primary keyword in first 250 characters?
- Location (city, area) mentioned?
- Key services listed?
- Unique value proposition (years in business, awards, certifications)?
- No URLs, phone numbers, or promotional language (violates GBP guidelines → suspension risk)?

### Photos & Media Optimization

**Photo impact data (Google internal data, 2024):**
- Businesses with 100+ photos receive **1,065% more website clicks** vs. those with fewer
- Businesses with 100+ photos receive **1,038% more direction requests**

| Type | Current Count | Target | Status |
|------|-------------|--------|--------|
| Total photos | | 100+ | |
| Logo (250×250px minimum) | | 1 | |
| Cover photo (1332×750px) | | 1 | |
| Exterior (storefront, signage) | | 5+ | |
| Interior (team working, equipment) | | 10+ | |
| Team/staff (builds trust) | | 5+ | |
| Work/services/products in action | | 50+ | |
| Video (30 sec max, 75MB) | | 2+ | |
| 360° virtual tour | | Optional | |

Photos must be: original (not stock), geotagged with location data, high-quality (min 720px), recent.

### GBP Posts Audit
- Weekly posts active? (Last 7 days: check timestamp)
- Post variety: Updates / Offers / Events / Products?
- Posts: keyword-rich, include image, have specific CTA (Call Now / Book / Learn More)?
- Offers: active with clear terms and expiry date?
- Events: local community events tied to business?

### Q&A Section
- Owner has seeded 5+ strategic questions with keyword-rich answers?
- All user questions answered within 24 hours?
- No spam or competitor-placed questions?

---

## Section 2: Review Ecosystem (GBP-Specific Signals)

Full reputation analysis in Phase 15 — focus here on review signals directly impacting local pack.

### Google Reviews Benchmark

**Local Pack top-3 review targets by niche (2025 benchmarks):**
| Niche | Min Review Count | Min Rating | Velocity Target |
|-------|----------------|-----------|----------------|
| Home services (plumbing, HVAC, electrical) | 50–150 | 4.5+ | 4–8/month |
| Legal / professional services | 30–80 | 4.6+ | 2–4/month |
| Healthcare / dental | 50–200 | 4.7+ | 4–10/month |
| Restaurant / food | 100–500 | 4.4+ | 10–20/month |
| Automotive | 50–200 | 4.5+ | 4–8/month |

**Review recency weighting (2025):** Google weights reviews from the last 60–90 days at **3–5× more** than older reviews. A business with 200 reviews but none in 6 months will underperform vs. a competitor with 50 reviews and 8 per month.

| Metric | Client | Comp 1 | Comp 2 | Comp 3 | Benchmark |
|--------|--------|--------|--------|--------|-----------|
| Total reviews | | | | | Niche target above |
| Average rating | | | | | ≥4.5 |
| Reviews (last 90 days) | | | | | ≥8/month |
| % reviews with photo | | | | | ≥20% |
| % mentioning specific services | | | | | ≥30% |
| Owner response rate | | | | | 100% |

**Review velocity by market type:**
- Major metro (pop. 1M+): 8–12 reviews/month minimum to compete in top 3
- Mid-sized city (pop. 100K–1M): 4–6 reviews/month
- Rural / small town (pop. <100K): 1–2 reviews/month

**Veto trigger:** Average rating <3.5 → maximum GBP section score 20/30.

---

## Section 3: NAP Consistency

NAP = Name, Address, Phone. Inconsistency dilutes local ranking signals across the citation ecosystem.

### Master NAP (Canonical Version — Set This First)
- Business Name: `[exact legal name — match GBP exactly]`
- Address: `[exact format with unit/suite if applicable]`
- Phone: `[(XXX) XXX-XXXX — consistent parentheses and dash format]`

### NAP Consistency Check (Use BrightLocal or Whitespark)

**Consistency rate thresholds:**
- <85% consistent: ❌ Critical — major ranking signal dilution
- 85–94% consistent: ⚠️ Needs Attention
- 95–98% consistent: ✅ Acceptable
- 99–100% consistent: ✅ Optimal

| Property | Name Match? | Address Match? | Phone Match? |
|----------|------------|---------------|-------------|
| Website (header/footer) | ✅/❌ | ✅/❌ | ✅/❌ |
| Website LocalBusiness schema | ✅/❌ | ✅/❌ | ✅/❌ |
| Google Business Profile | ✅/❌ | ✅/❌ | ✅/❌ |
| Bing Places | ✅/❌ | ✅/❌ | ✅/❌ |
| Apple Maps | ✅/❌ | ✅/❌ | ✅/❌ |
| Yelp | ✅/❌ | ✅/❌ | ✅/❌ |
| Facebook | ✅/❌ | ✅/❌ | ✅/❌ |
| BBB | ✅/❌ | ✅/❌ | ✅/❌ |
| Yellow Pages | ✅/❌ | ✅/❌ | ✅/❌ |

**Most common inconsistencies (flag each):**
- "Street" vs. "St" vs. "St." — must be identical across all
- Suite/unit number: some present, some absent
- Old phone number from previous owner
- Business name: "LLC" or "Inc." present in some, absent in others
- "& " vs. "and" in business name

---

## Section 4: Citation Profile

### Tier 1 — Data Aggregators (Fix First — They Feed 100s of Directories)

Data aggregators are the foundation of the citation ecosystem. Fix these before building new citations:

| Aggregator | Listed? | NAP Correct? | Last Verified | Action |
|-----------|---------|-------------|--------------|--------|
| Data Axle (infoUSA) | ✅/❌ | ✅/❌ | | |
| Neustar/Localeze | ✅/❌ | ✅/❌ | | |
| Acxiom | ✅/❌ | ✅/❌ | | |
| Foursquare (feeds Apple Maps) | ✅/❌ | ✅/❌ | | |

**Effort to fix Tier 1:** ~2 hrs. Impact: corrects 100s of downstream directories automatically over 2–8 weeks.

### Tier 2 — Core Platforms (Must Have)
| Directory | Listed? | NAP Correct? | Complete? | Priority |
|-----------|---------|-------------|-----------|---------|
| Google Business Profile | | | | Critical |
| Bing Places | | | | Critical |
| Apple Maps | | | | Critical |
| Yelp | | | | Critical |
| Facebook Business | | | | Critical |
| Yellow Pages (yp.com) | | | | High |
| BBB (bbb.org) | | | | High |
| MapQuest | | | | Medium |
| Superpages | | | | Medium |

### Tier 3 — Industry-Specific Citations
List 5–10 directories specific to this niche (use Whitespark Citation Finder):
| Directory | Niche Relevance | Listed? | Priority |
|-----------|----------------|---------|---------|
| [e.g., Angi — home services] | High | | |
| [e.g., Healthgrades — healthcare] | High | | |
| [e.g., Avvo — legal] | High | | |

### Citation Issues Found
| Issue | Directory | Action | Effort |
|-------|-----------|--------|--------|
| Wrong phone | [list] | Update | 15 min each |
| Old address | [list] | Update | 15 min each |
| Duplicate listing | [list] | Merge/Remove | 30 min each |
| Missing categories | [list] | Update | 10 min each |

---

## Section 5: Local Landing Pages

### Service Area Pages Assessment
- Does each served city/area have a dedicated page?
- Are pages ≥60% unique (hard floor for Helpful Content System)?
- Local map embedded showing service coverage?
- Location-specific testimonials / reviews cited?
- LocalBusiness schema with correct areaServed?
- Click-to-call button with local number?

### Location Hub Page
- "Areas We Serve" or "Locations" hub page exists?
- Links to every individual service area page?
- Internally linked from homepage, footer, and main navigation?
- Breadcrumb schema (BreadcrumbList) on all location pages?

---

## Section 6: Local Link Building

Local links have disproportionate impact for local pack rankings vs. generic links.

### Audit Existing Local Links (Ahrefs → Referring Domains → filter by city/state TLD or local keywords)
| Link Source | Domain Authority | Local Relevance | Status |
|------------|-----------------|----------------|--------|
| Chamber of Commerce | | High | ✅/❌ |
| Local newspaper/media | | High | ✅/❌ |
| City government vendor directory | | High | ✅/❌ |
| Local charity/non-profit sponsorship | | Medium | ✅/❌ |
| Neighborhood association | | Medium | ✅/❌ |
| Local sports team sponsor | | Medium | ✅/❌ |

### Local Link Opportunities (Unearned)
- Chamber of Commerce: member? Link claimed on their directory? — Effort: 2 hrs
- Local business cross-referrals with non-competing businesses — Effort: 1 hr
- School/college partnerships (if relevant) — Effort: 2–4 hrs
- Nextdoor business page: local community recommendation trigger — Effort: 30 min

---

## Section 7: Local Pack Rankings

Use **Local Falcon** geographic grid to map pack position across the entire city (not just one central point):

| Keyword | Local Pack Position | Maps Position | Organic Position | Competitor in Pack |
|---------|-------------------|--------------|-----------------|-------------------|
| [service] [city] | | | | |
| [service] near me | | | | |
| [service] [neighborhood] | | | | |
| best [service] [city] | | | | |
| [service] open now | | | | |

**Local Falcon Grid Analysis:**
- Average rank across the service area: [X.X]
- Geographic coverage (cells ranked 1–3): [X%] of grid
- Weakest areas: [neighborhoods/suburbs with rank 10+]
- Action: determine if additional location pages or GBP service area expansion needed

**AIO Appearances (test 5 core queries):**
| Query | AIO Appears? | Client in AIO? | Stars/Review Shown |
|-------|------------|--------------|-------------------|
| best [service] [city] | Yes/No | Yes/No | |
| [service] near me | Yes/No | Yes/No | |

---

## Section 8: Apple Maps & Bing Places

15–20% of searches occur on non-Google platforms — frequently neglected.

### Apple Maps (Siri Search — iOS 17+: AI-powered local recommendations)
- Claimed at mapsconnect.apple.com?
- Name, address, phone, hours accurate?
- Photos uploaded?
- Category correct?
- Foursquare claim submitted (Apple Maps data syncs from Foursquare)?
- Business appearing in Siri search results for core queries? (Test: ask Siri "[service] near me")

### Bing Places (15% desktop search share)
- Claimed at bingplaces.com?
- Complete information (hours, services, photos)?
- Synced with GBP (Bing allows direct import)?
- Bing Copilot recommending business? (Test: ask Copilot for "[service] in [city]")

---

## Section 8b: Competitor Local SEO Benchmark

Use PlePer (free) to extract competitor GBP data. Use Local Falcon for grid rank comparison.

| Metric | Client | Comp 1 | Comp 2 | Comp 3 | Gap to Leader |
|--------|--------|--------|--------|--------|---------------|
| Primary GBP category | | | | | |
| Secondary categories (#) | | | | | |
| Total photos | | | | | |
| Google review count | | | | | |
| Google average rating | | | | | |
| Review velocity (last 90 days) | | | | | |
| Response rate | | | | | |
| Weekly GBP posts | | | | | |
| Q&A seeded answers | | | | | |
| Local Falcon avg grid rank | | | | | |
| AIO appearances (5 queries) | | | | | |
| Apple Maps claimed | | | | | |
| Bing Places claimed | | | | | |

**Competitive opportunities:**
- Which competitor has the weakest category optimization? → Easiest to outrank with correct category
- Which competitor has fewest photos? → Quick win with photo investment
- Which competitor responds to <80% of reviews? → Win trust signal with 100% response rate
- Which competitor is not in AIO? → FAQPage schema may vault client ahead

---

## Section 9: Priority Recommendations

| Issue | Impact (1–5) | Feasibility (1–5) | Priority Score | Effort |
|-------|-------------|-------------------|----------------|--------|
| Primary category wrong or suboptimal | 5 | 5 | 25 | 5 min |
| <100 photos on GBP | 4 | 5 | 20 | 2–4 hrs |
| Review velocity <benchmark | 5 | 4 | 20 | 2 hrs setup (SMS system) |
| Tier 1 aggregators incorrect/missing | 4 | 4 | 16 | 2 hrs |
| NAP consistency <95% | 4 | 4 | 16 | 2–4 hrs |
| Location pages <60% unique content | 5 | 3 | 15 | 3–5 hrs/page |
| GBP Q&A not seeded | 3 | 5 | 15 | 30 min |
| No weekly GBP posts | 3 | 5 | 15 | 30 min/week |
| Apple Maps / Bing Places unclaimed | 3 | 5 | 15 | 30 min each |
| No local links (Chamber, press, etc.) | 4 | 3 | 12 | 2–8 hrs |

---

### Immediate Action Steps (Numbered — Prioritized by ROI)

1. **Fix GBP primary category** (if suboptimal) — Change to highest-relevance category; cross-check against top 3 competitors via PlePer. Effort: 5 min. Expected impact: category is #1 ranking factor — wrong category = structural ranking ceiling.
2. **Add secondary categories** — Add up to 9 secondary categories to capture adjacent service queries. Effort: 15 min. Expected: 15–30% broader keyword coverage in local pack.
3. **Upload photos to 100+ target** — Schedule weekly photo upload sessions (10 photos/week) until 100+ reached. Geotag all photos with business location. Effort: 30 min/week. Expected: 1,065% more website clicks (Google 2024 data).
4. **Seed 5+ Q&A pairs** — Owner adds keyword-rich Q&A pairs that answer common local queries. Example: "Do you service [suburb]?" "Yes, we cover [suburb, area1, area2]." Effort: 30 min. AIO feeds from Q&A content.
5. **Fix Tier 1 aggregators** — Submit corrections to Data Axle, Neustar/Localeze, Acxiom, Foursquare. These cascade to 100s of directories automatically within 2–8 weeks. Effort: 2 hrs.
6. **Publish weekly GBP posts** — Schedule 4 posts/month minimum: 1 service update, 1 offer, 1 team/behind-the-scenes, 1 Q&A/tip. Effort: 30 min/week. Expected: 42% more GBP views (social proof signal).
7. **Claim Apple Maps + Bing Places** — Both take 30 min each; Bing allows direct GBP import. Together = 15–20% additional local search coverage. Effort: 1 hr total.
8. **Optimize local landing pages** — Ensure each service area page is ≥60% unique content (HCS hard floor), has embedded Google Map, LocalBusiness schema with areaServed, click-to-call CTA. Effort: 3–5 hrs/page.
9. **Add FAQPage schema to service pages** — Implement on top 5 service pages first. Each FAQ = potential AIO citation trigger. 2.3× AIO inclusion rate for pages with FAQPage schema. Effort: 30 min/page.
10. **Deploy SMS review request system** — Set up Podium/Birdeye automated SMS: triggered 2 hrs post-service → link to GBP review → follow-up if no response in 48 hrs. Expected: 4–8 reviews/month from month 1. Effort: 2 hrs setup.

### 30-Day Local SEO Quick Win Plan
**Week 1:** Fix GBP category → upload 30+ photos → seed Q&A (5 pairs) → respond to all unanswered reviews → claim Apple Maps + Bing Places
**Week 2:** Submit Tier 1 aggregator corrections → fix top NAP inconsistencies → schedule weekly GBP post calendar
**Week 3:** Add FAQPage schema to top 3 service pages → set up review SMS system → run Local Falcon grid scan
**Week 4:** Optimize 2 local landing pages (60%+ unique content + schema + CTA) → reach out to Chamber of Commerce for link

### 90-Day Strategic Plan
- **Month 1:** Foundation — GBP at 100% completeness, 100+ photos, weekly posts live, review system generating 4+/month
- **Month 2:** Citation — All Tier 1 aggregators corrected, Tier 2 core platforms complete, NAP consistency ≥95%
- **Month 3:** Content + Links — All service area pages ≥60% unique with schema, 2+ local links earned (Chamber, press, partner)

---

## Scoring

| Category | Weight | Score |
|----------|--------|-------|
| GBP completeness & optimization (13-point checklist) | 30% | /30 |
| Review count, rating ≥4.5, velocity ≥benchmark | 20% | /20 |
| NAP consistency ≥95% across tracked citations | 20% | /20 |
| Citation completeness (Tier 1 aggregators + Tier 2 core) | 15% | /15 |
| Local landing pages (≥60% unique, schema, map) | 10% | /10 |
| Local pack ranking + AIO appearances | 5% | /5 |

**Veto:** GBP not claimed → maximum score 20/100.
**Veto:** Average Google rating <3.5 → maximum score 40/100.

---

## Output

Write to `{AUDIT_DIR}/local-findings.md` with YAML frontmatter:

```yaml
---
skill: local/local-seo
phase: 11
date: [YYYY-MM-DD]
business: [Business Name]
url: [URL]
score: [X/100]
status: [healthy|needs-attention|critical]
gbp_rating: [X.X]
review_count: [X]
review_velocity: [X/month]
nap_consistency_pct: [X%]
local_pack_position: [X or not-ranking]
---
```

Include:
- Score X/100 with per-category breakdown
- GBP 13-point completeness table
- Photo count vs. 100+ target (with 1,065% click stat context)
- Review benchmark table (client vs. 3 competitors vs. niche benchmark)
- NAP consistency rate + specific inconsistencies found
- Citation tier audit (Tier 1 aggregators, Tier 2 core, Tier 3 industry)
- Local Falcon grid rank summary (avg rank, coverage %)
- AIO appearance status per core query
- Apple Maps + Bing Places status
- Priority recommendations table (Impact × Feasibility scored)
- 30/90-day local SEO improvement plan

Write HTML report to `{REPORTS_DIR}/phase-11-local-seo.html` and convert to PDF via `python3 scripts/generate_pdf.py`.

**Key consumers:**
- `local/entity-audit` — reads for entity and sameAs signals
- `local/reputation-audit` — reads for review baseline
- `local/multi-location-seo` — uses single-location baseline for comparison
- `cross-cutting/local-impact-auditor` — all dimensions use local findings
- `output/report-generation` — local SEO section in master report
