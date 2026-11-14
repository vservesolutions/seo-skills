---
name: "multi-location-seo"
description: "Multi-location SEO strategy and audit. Activates when the business has multiple physical locations, franchise locations, or serves distinctly different geographic areas. Covers GBP management, location page architecture, citation strategy, and content differentiation per location. Phase 21. Output: {AUDIT_DIR}/multi-location-findings.md"
category: "local-seo"
platforms: ["claude-code"]
platform_source: "declared"
repo: "david-dacruz/local-seo-audit"
repo_url: "https://github.com/david-dacruz/local-seo-audit"
source: "https://github.com/david-dacruz/local-seo-audit/blob/HEAD/local/multi-location-seo/SKILL.md"
raw_source: "https://raw.githubusercontent.com/david-dacruz/local-seo-audit/HEAD/local/multi-location-seo/SKILL.md"
ref: "HEAD"
discovered_via: "github-search"
license: "MIT"
stars: 0
collected: "2026-11-14"
---

<!-- Claude Code skill · david-dacruz/local-seo-audit · local/multi-location-seo/SKILL.md · MIT
     Source: https://github.com/david-dacruz/local-seo-audit/blob/HEAD/local/multi-location-seo/SKILL.md
     Detected by: declared · Regenerated on every run; edit the upstream skill, not this copy. -->

# Multi-Location SEO Audit — Phase 21

## Executive Summary

Multi-location SEO is exponentially more complex than single-location — each additional location adds citation management, content differentiation, schema isolation, and cannibalization risk. In 2025, proximity weight for mobile local search increased to ~35% of local pack ranking (up from ~25% in 2023), meaning geographic optimization at each location matters more than ever. AI Overviews appear for ~35% of local service queries (Q1 2025) and pull directly from GBP data + location landing pages. Businesses with template-cloned location pages face active suppression under Google's Helpful Content System (integrated into core algorithm March 2024). The 60% unique content threshold is now a hard floor — below it = Helpful Content System penalty risk.

**2025 multi-location benchmarks per location:**
| Metric | Minimum Viable | Competitive | Market Leader |
|--------|---------------|------------|---------------|
| GBP review count | 25 reviews | 75–100 | 200+ |
| GBP review rating | 4.0 stars | 4.5 stars | 4.7–5.0 stars |
| Review velocity | 2/month | 5–8/month | 15+/month |
| GBP photos | 10 photos | 25+ photos | 50+ photos |
| Location page word count | 600 words | 1,000–1,500 words | 2,000+ words |
| Unique content vs. other pages | 60% | 80%+ | 90%+ |
| Citations per location | 40 | 75–100 | 150+ |
| NAP consistency | 85% | 95% | 99–100% |

**Numbered Action Plan:**

### Immediate (Week 1, Per-Location Wins)
1. **Run NAP consistency audit** — BrightLocal or Whitespark → check all active citations for each location → identify and flag inconsistencies (wrong address, old phone, variant business names). Effort: 30 min/location. Priority: 25 (5×5).
2. **Verify all GBPs are claimed and verified** — each location must have its own GBP with verified address. Unclaimed GBP = competitor can claim it. Effort: 30 min/location.
3. **Audit location page unique content** — Screaming Frog → compare content similarity across location pages. Any page <60% unique vs. template = HCS penalty risk. Flag for immediate rewrite. Effort: 1 hr.
4. **Check schema isolation** — each location page must have its own `LocalBusiness` schema with unique `@id`, `address`, `telephone`, `geo`. Check with Google Rich Results Test. Effort: 15 min/location.
5. **Check GBP 2025 features per location** — verify Q&A seeded with keywords, service menu complete, review velocity ≥2/month, photos ≥25. Effort: 20 min/location.

### Short-Term (Week 2–4)
6. **Fix duplicate SAP (Service Area Pages)** — any location page ranking for the same keyword in the same city = cannibalization. Implement canonical to strongest page or differentiate content significantly. Effort: 1–2 hrs.
7. **Add AI search optimization per location** — each location page needs: FAQPage schema (5 FAQ min, local questions), LocalBusiness + areaServed schema, local review AggregateRating, GBP Q&A with service + location keywords. AIO appears for ~35% of local queries. Effort: 1 hr/location.
8. **Implement `parentOrganization` schema** — each location page's `LocalBusiness` schema must include `parentOrganization` pointing to the main brand's Organization schema. This is the correct replacement for deprecated `branchOf`. Effort: 30 min dev.
9. **Build or optimize location landing pages** — each location needs: 1,000+ words unique content, local photos (not stock), local testimonials, local team/staff mention, local landmarks/context. Target Surfer Score ≥70. Effort: 4–6 hrs/location.
10. **Set up BrightLocal Grid Tracker per location** — track each location's GBP rank across 5×5 geogrid to identify proximity score gaps within the service area. Effort: 30 min setup/location. Expected: identifies which zones need additional GBP optimization.

---

## Applicability Check

This phase applies when the business has:
- 2+ physical addresses serving different markets
- Franchise or franchise-like multi-location model
- Service-area businesses covering 3+ distinct cities
- Plans to expand to additional locations

If single-location only: note N/A, skip this phase, award 100/100 by default.

---

## Step 1: Read Project Context

Read `{AUDIT_DIR}/intake-data.md` — confirm number of locations, business name, URL.
Read `{AUDIT_DIR}/local-findings.md` — single-location GBP/review baseline.
Read `{AUDIT_DIR}/technical-findings.md` — URL architecture and schema status.
Read `{AUDIT_DIR}/competitor-profiles.md` — competitor multi-location footprint.

**Tools for this phase:**
| Tool | Purpose | Cost |
|------|---------|------|
| **BrightLocal** | Multi-location citation management, NAP audits, GBP tracking (1–100 locations) | Paid |
| **Yext** | Centralized listing management at scale (50+ locations), real-time sync | Paid |
| **Whitespark** | Citation building per location, Local Rank Tracker grid view | Paid |
| **Local Falcon** | Geographic rank grid — visualize pack position across a city for each location | Paid |
| **Data Axle** | Primary aggregator submission — feeds 100s of directories per location | Paid |
| **PlePer Tools** | Free competitor GBP data extraction — category, attributes, photo counts | Free |
| **Google Business Profile API** | Manage 10+ locations programmatically (replaces deprecated My Business API v4.1) | Free |
| **Screaming Frog** | Crawl location pages for duplicate content, schema, internal link issues | Paid/Free |

**2025 Multi-Location Context:**
AIO (AI Overviews) appears for ~35% of local service queries as of Q1 2025, and proximity weight for mobile search increased to ~35% of the local pack algorithm. Businesses with complete, verified GBP listings at each location and strong unique content per location page are best positioned for AIO inclusion.

---

## Step 2: GBP Per-Location Audit

For EACH location, verify using **PlePer** or direct GBP Manager export:

| Check | Location 1 | Location 2 | Location 3 |
|-------|-----------|-----------|-----------|
| Separate GBP listing exists | ✅/❌ | ✅/❌ | ✅/❌ |
| Listing claimed & verified | ✅/❌ | ✅/❌ | ✅/❌ |
| Verified via: Postcard/Video/Email | | | |
| Unique primary category set | ✅/❌ | ✅/❌ | ✅/❌ |
| Correct unique address | ✅/❌ | ✅/❌ | ✅/❌ |
| Unique local phone number (not shared 1800) | ✅/❌ | ✅/❌ | ✅/❌ |
| Links to location-specific page (not homepage) | ✅/❌ | ✅/❌ | ✅/❌ |
| 100+ photos for location | ✅/❌ | ✅/❌ | ✅/❌ |
| Weekly GBP posts (location-specific content) | ✅/❌ | ✅/❌ | ✅/❌ |
| 20+ reviews with ≥4.3 rating | ✅/❌ | ✅/❌ | ✅/❌ |
| Q&A seeded (5+ owner answers) | ✅/❌ | ✅/❌ | ✅/❌ |
| Services/products listed | ✅/❌ | ✅/❌ | ✅/❌ |

**Photo impact:** Locations with 100+ photos receive 1,065% more website clicks vs. locations with fewer photos (Google internal data, 2024). Prioritize photo upload to all locations.

**GBP Bulk Verification (10+ locations):** Use `accounts.locations.list` endpoint via the current GBP API (v1). The legacy My Business API v4.1 is deprecated — use `mybusinessaccountmanagement.googleapis.com` instead.

**Critical:** Each GBP must link to its own dedicated location page — not the homepage. GBP Chat was deprecated July 2024 — remove any references.

---

## Step 3: Location Page Architecture

### URL Structure Assessment (Ranked by SEO Preference)

| Pattern | SEO Preference | When to Use |
|---------|--------------|-------------|
| `domain.com/locations/chicago-il/` | ✅ Best — inherits root domain authority | Single brand, 2–50 locations |
| `domain.com/chicago-plumbing/` | ✅ Good — service + location in URL | Service-dominant businesses |
| `domain.com/locations/chicago-il/drain-cleaning/` | ✅ Best for deep service pages | Service × location matrix |
| `chicago.domain.com/` | ⚠️ Acceptable — use for franchise with distinct branding | Large franchise (50+ distinct brands) |
| `domain.com/?location=chicago` | ❌ Avoid — parameter-based, crawl issues | Never |
| `domain.com/location.php?id=3` | ❌ Avoid — no location signal in URL | Never |

**2025 recommendation:** Subdirectory (`/locations/city-state/`) preferred over subdomain (`city.domain.com/`) — subdirectory inherits full root domain authority; subdomain treated as separate site by Google.

### Per-Location Page Requirements Checklist

Each location page MUST have:
- ✅ Unique title tag: "[Primary Service] in [City, State] | [Brand]"
- ✅ Unique H1: "[Brand] [City] — [Primary Service]" or "[Service] in [City]"
- ✅ Unique meta description mentioning city + key service + differentiator
- ✅ ≥60% unique body content (hard floor — Helpful Content System penalizes templated pages)
- ✅ ≥80% unique body content (competitive benchmark in most niches)
- ✅ Location-specific content: local landmarks, neighborhoods, service area map
- ✅ Embedded Google Map showing this exact location's pin
- ✅ Location-specific NAP (Name, Address, Phone) in `<address>` tag + footer
- ✅ `LocalBusiness` schema with this location's unique data and `@id`
- ✅ `FAQPage` schema with 3–5 location-specific FAQs (AIO optimization — 35% of local queries trigger AIO)
- ✅ Location-specific reviews/testimonials from real customers in that area
- ✅ Staff photos/bios specific to that location (E-E-A-T signal)
- ✅ Location-specific CTAs (click-to-call this location's number)

### Content Differentiation Test

Run each location page pair through a diff tool (use **Siteliner** free up to 250 pages or **Copyscape**):

| Location Pair | Unique Content % | Pass/Fail | Action |
|--------------|----------------|----------|--------|
| [Loc 1 vs. Loc 2] | [X%] | ✅/❌ | |
| [Loc 1 vs. Loc 3] | [X%] | ✅/❌ | |
| [Loc 2 vs. Loc 3] | [X%] | ✅/❌ | |

**Thresholds:** <60% unique = ❌ Critical (Helpful Content penalty risk); 60–79% = ⚠️ Improve; ≥80% = ✅ Competitive

---

## Step 4: Schema — Per-Location Implementation

**IMPORTANT — 2025 Schema Change:**
`branchOf` is deprecated in Schema.org. Use `parentOrganization` instead. Update all location schemas.

```json
{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://domain.com/locations/chicago-il/#business",
  "name": "[Brand Name] — Chicago",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "123 Main St",
    "addressLocality": "Chicago",
    "addressRegion": "IL",
    "postalCode": "60601",
    "addressCountry": "US"
  },
  "telephone": "+1-312-555-0100",
  "url": "https://domain.com/locations/chicago-il/",
  "hasMap": "https://maps.google.com/?cid=[GBP_CID]",
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 41.8781,
    "longitude": -87.6298
  },
  "openingHoursSpecification": [...],
  "parentOrganization": {
    "@type": "Organization",
    "name": "[Parent Brand Name]",
    "@id": "https://domain.com/#organization"
  },
  "areaServed": {
    "@type": "City",
    "name": "Chicago"
  }
}
```

**`@id` must be unique per location:** Use pattern `https://domain.com/locations/[city-state]/#business` — never reuse the same `@id` across locations.

**`areaServed` isolation:** Each location's schema must only include its own service area — prevents cannibalization in Google's entity model.

---

## Step 5: Internal Linking for Multi-Location

- Location hub page (`/locations/` or `/areas-we-serve/`) exists?
- Hub page links to every individual location page?
- Location pages cross-link to relevant service pages?
- Breadcrumbs: Home > Locations > [City] on all location pages?
- Footer: list all locations (if ≤ 10) or link to location hub?
- Service pages link to all relevant location pages?
- Crawl depth to location pages: ≤ 3 clicks from homepage?

Run **Screaming Frog** → Crawl Analysis → identify orphaned location pages (pages with 0 inlinks).

---

## Step 6: Local Citation Strategy Per Location

For each location, citations must use THAT location's exact NAP. Use **BrightLocal** or **Yext** to audit:

### Tier 1 — Data Aggregators (Fix First — Feed Hundreds of Directories)
| Aggregator | Location 1 Status | Location 2 Status | Fix Priority |
|-----------|------------------|------------------|-------------|
| Data Axle (infoUSA) | | | Critical |
| Neustar/Localeze | | | Critical |
| Acxiom | | | Critical |
| Foursquare (feeds Apple Maps) | | | Critical |

### Tier 2 — Core Platforms
| Platform | Loc 1 | Loc 2 | NAP Correct? |
|---------|-------|-------|-------------|
| Google Business Profile | | | |
| Apple Maps | | | |
| Bing Places | | | |
| Yelp | | | |
| Facebook | | | |
| BBB | | | |

**Common multi-location NAP errors:**
- All locations using same 1800/toll-free number (kills local relevance — each location needs unique local number)
- Citations showing old address for relocated branch
- Duplicate GBP listings for same location
- HQ address appearing on branch location citations
- NAP consistency rate target: ≥95% across all tracked citations

---

## Step 7: Cannibalization Prevention Framework

Location pages cannibalize when they compete for identical keywords without geographic separation.

### Keyword-to-URL Mapping Matrix

Build this matrix for all location × service combinations:

| Keyword | Assigned URL | Location Owner | No Other Page Targets This? |
|---------|------------|--------------|---------------------------|
| plumber chicago il | /locations/chicago-il/ | Chicago | ✅/❌ |
| plumber chicago north side | /locations/chicago-il/north-side/ | Chicago | ✅/❌ |
| plumber evanston il | /locations/evanston-il/ | Evanston | ✅/❌ |

**Detection:** Run **Ahrefs** → Site Explorer → Organic Keywords → filter for keywords where 2+ URLs rank on same page. Each keyword should have exactly one canonical page targeting it.

**Prevention rules:**
- Each location page targets geographically distinct primary keyword
- Use `areaServed` in schema to isolate geographic scope per location
- Consolidate overlapping pages with 301 redirect to the stronger location page
- Use **Local Falcon** geographic grid to identify where locations compete within same service area

---

## Step 8: Service × Location Matrix Pages

For businesses with multiple services and locations, deep service+location pages drive the most traffic:

```
domain.com/locations/chicago-il/                    ← Location hub
domain.com/locations/chicago-il/drain-cleaning/    ← Service × Location
domain.com/locations/chicago-il/water-heater/      ← Service × Location
domain.com/locations/evanston-il/drain-cleaning/   ← Service × Location
```

### Matrix Gap Analysis

| Service | Chicago | Evanston | Oak Park | % Complete |
|---------|---------|---------|---------|-----------|
| Drain Cleaning | ✅/❌ | ✅/❌ | ✅/❌ | |
| Water Heater | ✅/❌ | ✅/❌ | ✅/❌ | |
| Emergency Plumbing | ✅/❌ | ✅/❌ | ✅/❌ | |

**Priority:** High-traffic service × high-competition location combinations first. Use **Ahrefs** Keyword Explorer to validate search volume for each combination.

---

## Step 9: AIO Optimization Per Location

AI Overviews appear for ~35% of local service queries (Q1 2025). Each location page needs:

1. **FAQPage schema** with 3–5 location-specific questions (direct AIO citation trigger)
2. **Structured content:** Use H2/H3 headers that match common "near me" query patterns
3. **Review mentions:** AIO typically features businesses with ≥4.3 stars and ≥20 reviews per location
4. **Proximity data:** Precise latitude/longitude in GeoCoordinates schema
5. **Unique expertise signals:** Location-specific staff credentials, certifications, licenses displayed on page

**AIO test per location:**
Search `best [service] in [city]` in Google → does this location appear in AIO? Document status for each location.

---

## Step 10: Competitor Comparison

| Signal | Client (All Locs) | Comp 1 | Comp 2 | Gap |
|--------|-----------------|--------|--------|-----|
| Total locations | | | | |
| GBP completeness avg (%) | | | | |
| Avg review count per location | | | | |
| Avg rating per location | | | | |
| Location page unique content % | | | | |
| Service × location pages (count) | | | | |
| Local pack appearances (all locs) | | | | |

---

## Scoring

| Category | Weight | Score |
|----------|--------|-------|
| GBP per-location completeness (12-point checklist) | 30% | /30 |
| Location page uniqueness ≥80% (vs. 60% floor) | 25% | /25 |
| URL structure & architecture (subdirectory preferred) | 15% | /15 |
| Citation accuracy per location (Tier 1 aggregators first) | 15% | /15 |
| Cannibalization prevention (mapping matrix in place) | 10% | /10 |
| Schema per location (parentOrganization, unique @id, FAQPage) | 5% | /5 |

**Priority Matrix:**
| Action | Impact (1–5) | Feasibility (1–5) | Priority Score | Effort |
|--------|-------------|-------------------|----------------|--------|
| Fix branchOf → parentOrganization schema | 4 | 5 | 20 | 30 min/location |
| Add unique local phone per location | 5 | 4 | 20 | 1–2 hrs |
| Rewrite thin location pages (>80% unique) | 5 | 3 | 15 | 3–5 hrs/page |
| Submit Tier 1 aggregators per location | 4 | 4 | 16 | 2–4 hrs |
| Add FAQPage schema to all location pages | 4 | 5 | 20 | 30 min/page |
| Build service × location matrix pages | 5 | 3 | 15 | 4–8 hrs/page |
| Fix cannibalization via keyword mapping | 4 | 4 | 16 | 2–3 hrs |

**If single location: mark as N/A — award 100/100.**

---

## Output

Write to `{AUDIT_DIR}/multi-location-findings.md` with YAML frontmatter:

```yaml
---
skill: local/multi-location-seo
phase: 21
date: [YYYY-MM-DD]
business: [Business Name]
url: [URL]
score: [X/100]
status: [healthy|needs-attention|critical|not-applicable]
locations_audited: [X]
avg_content_uniqueness_pct: [X%]
---
```

Include:
- Score X/100 with per-location breakdown
- Location-by-location GBP audit table (12-point checklist)
- Location page quality assessment (content uniqueness %)
- Schema audit (branchOf → parentOrganization correction status)
- Cannibalization keyword mapping matrix
- Service × location matrix gap analysis
- Tier 1 citation status per location
- AIO optimization status per location
- Priority recommendations per location (Impact × Feasibility scored)
- Competitor comparison table
- 30/90-day multi-location improvement plan

**Output files:**
- `{AUDIT_DIR}/multi-location-findings.md` — findings with per-location scores
- `{REPORTS_DIR}/phase-21-multi-location.pdf` — auto-generated PDF after phase completes

**Key consumers:**
- `local/local-seo` — single-location baseline for comparison
- `local/entity-audit` — entity isolation per location
- `output/report-generation` — master report section 21

---

## Citation Tool Comparison (2025 Pricing)

| Tool | Best For | Locations | Price (2025) | Key Strength |
|------|---------|----------|-------------|--------------|
| **Yext** | Enterprise (50+ locations) | Unlimited | $500–$999/location/yr | Real-time sync to 200+ publishers |
| **BrightLocal** | Agencies, SMBs (1–100 locations) | Up to 100 | $29–$79/location/mo | Best reporting + NAP audit quality |
| **Whitespark** | Agencies needing manual quality | Any size | $30–$50/location/mo | Highest accuracy, best for niche dirs |
| **Data Axle (Localeze)** | Chain businesses with data feeds | 10+ | Custom enterprise | Feeds GPS/navigation systems |
| **Semrush Listing Management** | Existing Semrush users | Up to 50 | $20/location/mo (add-on) | Integrated SEO workflow; Yext backend |
| **Moz Local** | Small chains (1–20 locations) | Up to 20 | $14–$33/location/mo | Simple Google/Facebook/Apple sync |

**2025 recommendation by use case:**
- 50+ locations → Yext (only tool with real-time sync at scale)
- Agency managing multiple clients (2–15 locations each) → BrightLocal + Whitespark combination
- Single business with 2–10 locations → BrightLocal or Semrush Listing Management
- Franchise system → Data Axle + Yext combination

---

## SAB vs. Storefront — Critical 2025 Distinction

| Business Type | Address in GBP | Service Area Setting |
|--------------|---------------|---------------------|
| **Storefront** (customers visit) | Show address | Set service areas as supplemental |
| **Pure SAB** (no walk-ins at all locations) | Hide address | Set service area only |
| **Mixed** (some storefronts, some SABs) | Show on storefronts; hide on SABs | Per-location setting |

**2025 GBP ruling (confirmed):** SABs must NOT set service areas broader than 2-hour drive time from the business location. Google reconfirmed this via GBP Help Community Q1 2025. Violations result in Map Pack suppression.

**Critical mistake:** Hiding the address on a storefront location (where staff/customers are present) causes significant Map Pack ranking drop for proximity searches.

---

## GBP Location Groups — Management Structure (10+ Locations)

For chains with 10+ locations, use proper account hierarchy:
```
Owner Account (1 account only)
  └── Location Group 1 (Region A)
      ├── Manager Account (Regional Manager)
      └── Individual GBP listings (locations in Region A)
  └── Location Group 2 (Region B)
      ├── Manager Account (Regional Manager)
      └── Individual GBP listings (locations in Region B)
```

**Rules:**
- Maximum 20 manager accounts per location group (more triggers spam flags)
- Bulk verification threshold: 10+ locations via GBP API `accounts.locations.list`
- Never add more than 1 owner account — ownership conflicts cause verification suspension
- Use `updateMask` in GBP API to bulk-update specific fields (hours, services, photos) without full listing resubmission

---

## Common 2025 Multi-Location Mistakes (Top 10)

| # | Mistake | Impact | Fix | Effort |
|---|---------|--------|-----|--------|
| 1 | Template-cloned location pages (<60% unique) | HCS penalty, page 4+ rankings | Rewrite with location-specific content | 3–5 hrs/page |
| 2 | Same phone number across all locations | Duplicate signal, local relevance loss | Assign unique local number per location | 1–2 hrs |
| 3 | GBP links to homepage (not location page) | Map Pack click-through loss | Update GBP website URL to `/locations/city-state/` | 5 min/location |
| 4 | `branchOf` schema (deprecated 2025) | Entity graph confusion | Replace with `parentOrganization` | 30 min/location |
| 5 | Same `@id` value across all location schemas | Google cannot distinguish locations | Use unique `@id` per location URL fragment | 30 min/location |
| 6 | GBP Q&A left unmanaged | Misinformation damages conversion | Seed 5–10 Q&As + answer within 24hrs | 30 min/location |
| 7 | Service areas overlap between locations | Cannibalization in entity model | Assign distinct `areaServed` per location schema | 30 min/location |
| 8 | No UTM on GBP website URL | Cannot measure GBP traffic per location in GA4 | Add `?utm_source=gmb&utm_medium=organic&utm_campaign=[city]-gbp` | 5 min/location |
| 9 | Orphaned location pages (0 internal links) | Not crawled/indexed | Add to hub + sitemap + breadcrumb | 30 min/page |
| 10 | Review gating (only asking happy customers) | FTC violation (2025) + GBP suspension risk | Send requests to all customers | Policy change |

---

## GBP Website URL — UTM Parameter Template

For each location's GBP "Website" field, use:
```
https://domain.com/locations/[city-state]/?utm_source=gmb&utm_medium=organic&utm_campaign=[city]-gbp
```
This enables GA4 to measure GBP-specific traffic per location — essential for proving ROI at the location level.
