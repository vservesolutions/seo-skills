---
name: "technical-seo"
description: "Complete technical SEO audit expertise. Activates for any technical SEO discussion: crawlability, indexation, site architecture, redirects, canonicals, structured data, HTTPS, hreflang, JavaScript rendering, robots.txt, XML sitemaps, Core Web Vitals, or site infrastructure analysis. Phase 2. Output: {AUDIT_DIR}/technical-findings.md"
category: "technical-crawling-indexing"
platforms: ["claude-code"]
platform_source: "declared"
repo: "david-dacruz/local-seo-audit"
repo_url: "https://github.com/david-dacruz/local-seo-audit"
source: "https://github.com/david-dacruz/local-seo-audit/blob/HEAD/audit/technical-seo/SKILL.md"
raw_source: "https://raw.githubusercontent.com/david-dacruz/local-seo-audit/HEAD/audit/technical-seo/SKILL.md"
ref: "HEAD"
discovered_via: "github-search"
license: "MIT"
stars: 0
collected: "2026-11-14"
---

<!-- Claude Code skill · david-dacruz/local-seo-audit · audit/technical-seo/SKILL.md · MIT
     Source: https://github.com/david-dacruz/local-seo-audit/blob/HEAD/audit/technical-seo/SKILL.md
     Detected by: declared · Regenerated on every run; edit the upstream skill, not this copy. -->

# Technical SEO Audit — Phase 2

## Executive Summary

Technical SEO is the infrastructure layer that determines whether all other optimization work is visible to Google. A technically broken site cannot rank regardless of content quality or link authority. In 2025, technical SEO has expanded to include three new critical areas: (1) INP (Interaction to Next Paint), which replaced FID as a Core Web Vital in March 2024 — target <200ms; (2) AI rendering readiness — Googlebot now renders JavaScript pages before indexing, meaning JS-dependent content must be verified as indexable; (3) GenAI citation readiness — structured data (Organization, FAQPage, HowTo) is the primary mechanism by which Google's AI Overviews and third-party LLMs extract and cite site content. A technically clean site is the prerequisite for AI visibility.

**2025 technical SEO benchmarks:**
- INP (Core Web Vital, replaced FID March 2024): <100ms Excellent; <200ms Good; >500ms Poor
- LCP: <2.5s Good; <4.0s Needs Improvement; >4.0s Poor
- CLS: <0.1 Good; <0.25 Needs Improvement; >0.25 Poor
- TTFB: <800ms Good; <1,800ms Needs Improvement; >1,800ms Poor
- Crawl budget (large sites): indexed pages should be within 20% of sitemap count
- HTTPS: required — any HTTP-accessible URL is a trust and ranking signal issue
- Canonical coverage: every page must have a canonical (self-referencing or pointing to preferred)
- Structured data: Organization + LocalBusiness schema on homepage; FAQPage on all service pages; HowTo where applicable
- Hreflang: required for any multi-language or multi-region site — errors cause ranking in wrong country
- Site speed: Google uses mobile-first indexing — test mobile CWV separately from desktop

**Numbered Action Plan:**

### Immediate (Week 1, No Dev Needed)
1. **Run site crawler** — `python3 scripts/site_crawler.py --url [URL] --max-pages 100 --output {DATA_DIR}/crawl/ --csv`. Captures all pages, status codes, titles, meta descriptions, H1s, word counts, internal links. Effort: 30 min setup + crawl time.
2. **Check GSC Coverage report** — identify Excluded, Crawled Not Indexed, and Discovered Not Indexed pages. Flag any page type systematically excluded. Effort: 20 min.
3. **Validate robots.txt** — `curl https://domain.com/robots.txt`. Check for accidental Disallow: / rule. Verify sitemap URL is listed. Effort: 5 min. Priority: 25 (5×5).
4. **Validate XML sitemap** — check all sitemap URLs return 200, are in canonical form, and match GSC indexation count. Flag if sitemap includes redirect or noindex URLs. Effort: 15 min.
5. **Test HTTPS enforcement** — navigate to `http://domain.com` (no https) — should 301 redirect to HTTPS. Check SSL expiry date. Effort: 5 min.

### Short-Term (Week 2–4, Dev Involvement)
6. **Fix redirect chains** — use `curl -IL [URL]` to trace chains. Any 301→301→200 chain = wasted PageRank. Flatten to direct 301. Effort: 30 min identification + 1–2 hrs dev. Priority: 20.
7. **Audit canonical tags** — check for: missing canonicals, self-conflicting canonicals, canonicals pointing to redirect URLs, paginated pages with wrong canonical. Effort: 1–2 hrs.
8. **Fix duplicate content** — www vs non-www, http vs https, trailing slash vs no trailing slash — all should 301 to one canonical version. Check: `site:domain.com -www`. Effort: 1 hr dev.
9. **Implement missing structured data** — add Organization + LocalBusiness schema to homepage, FAQPage to all service pages, HowTo to process pages. Use Google's Rich Results Test to validate. Effort: 2–4 hrs.
10. **Test JavaScript rendering** — check key content (services, contact info) via Google Search Console → URL Inspection → "View Tested Page" → rendered HTML. Any missing content = JS rendering issue. Effort: 30 min.

---

## Step 1: Read Project Context & Run Crawl

Read `{AUDIT_DIR}/intake-data.md` for business name, URL, and project paths.

```bash
# Run site crawler for comprehensive technical data
python3 scripts/site_crawler.py \
  --url [WEBSITE_URL] \
  --max-pages 100 \
  --output {DATA_DIR}/crawl/ \
  --csv

# Validate URL + basic signals
python3 scripts/check_url.py --url [WEBSITE_URL] --full
```

Use crawler output (`crawl-issues-*.json`) to populate findings. Supplement with:

**Tools for this phase:**
| Tool | Purpose | Cost |
|------|---------|------|
| **Screaming Frog SEO Spider** | Full site crawl — redirects, canonicals, status codes, schema, headings | Paid/Free (≤500 URLs) |
| **Google Search Console** | Index coverage, manual actions, Core Web Vitals report, URL inspection | Free (requires access) |
| **Ahrefs Site Audit** | Crawl health score, broken links, orphan pages, crawl depth issues | Paid |
| **SEMrush Site Audit** | Technical health score, crawlability, HTTPS, Core Web Vitals | Paid |
| **Google Rich Results Test** | Schema validation — confirms rich result eligibility per page | Free |
| **Schema Markup Validator** (validator.schema.org) | Schema syntax validation without rich result eligibility check | Free |
| **Lighthouse** | CWV, best practices, PWA check — per-page technical baseline | Free |
| **Wayback Machine** | Historical snapshots — detect major content/structure changes | Free |

---

## Section 1: Crawlability & Indexation

### Robots.txt Analysis
Fetch `[domain]/robots.txt` → check:
- File exists and returns HTTP 200?
- Blocking critical resources (CSS, JS files needed for rendering)? → Use Google URL Inspection → View Rendered Page to verify
- Correct `User-agent` directives (Googlebot, GPTBot, PerplexityBot if desired)?
- Sitemap(s) declared (`Sitemap: https://domain.com/sitemap.xml`)?
- No accidental `Disallow: /` on production site?
- Rate limiting: `Crawl-delay` directive set? (optional — Google mostly ignores it)

### AI Crawler Access Check (14 Crawlers)

AI crawlers are now as important as Googlebot for visibility. Over 35% of top 1,000 websites inadvertently block at least one major AI crawler (Originality.ai 2025). Check robots.txt for all 14 AI crawlers:

**Tier 1 — AI Search (MUST ALLOW for AI visibility):**

| Crawler | User-Agent | Operator | Check Result |
|---------|-----------|----------|-------------|
| GPTBot | `GPTBot` | OpenAI (ChatGPT Search, 900M+ users) | Allowed / Blocked / Not Mentioned |
| OAI-SearchBot | `OAI-SearchBot` | OpenAI (search-only, no training) | |
| ChatGPT-User | `ChatGPT-User` | OpenAI (user-initiated browsing) | |
| ClaudeBot | `ClaudeBot` | Anthropic (Claude web search) | |
| PerplexityBot | `PerplexityBot` | Perplexity (best AI referral traffic) | |

**Tier 2 — AI Ecosystem (RECOMMEND ALLOW):**

| Crawler | User-Agent | Operator | Notes |
|---------|-----------|----------|-------|
| Google-Extended | `Google-Extended` | Google — Gemini training. Blocking does NOT affect search ranking or AIO appearance. |
| GoogleOther | `GoogleOther` | Google — research, experimental features |
| Applebot-Extended | `Applebot-Extended` | Apple — Apple Intelligence (2B+ devices) |
| Amazonbot | `Amazonbot` | Amazon — Alexa, Amazon AI |
| FacebookBot | `FacebookBot` | Meta — Meta AI (3B+ app users) |

**Tier 3 — Training Only (strategy-dependent):**

| Crawler | User-Agent | Recommendation |
|---------|-----------|---------------|
| CCBot | `CCBot` | Context-dependent (Common Crawl training data) |
| anthropic-ai | `anthropic-ai` | Context-dependent (Claude training, separate from ClaudeBot) |
| Bytespider | `Bytespider` | **BLOCK** for most Western businesses (aggressive, low value) |
| cohere-ai | `cohere-ai` | Context-dependent (enterprise AI training) |

**Also check for:**
- `<meta name="robots" content="noai">` on key pages (blocks all AI use)
- `X-Robots-Tag: noai` HTTP headers
- Bot-specific meta tags: `<meta name="GPTBot" content="noindex">`
- JavaScript-rendered content (AI crawlers do NOT execute JS — content invisible to them)

**AI Crawler Access Score:** Tier 1 all allowed = 50 pts; Tier 2 all allowed = 25 pts; no blanket AI blocks = 15 pts; llms.txt present = 10 pts. Total: /100.

### IndexNow Protocol Check

IndexNow enables near-instant indexing on Bing/Copilot when content is published or updated. ChatGPT Search also uses Bing's index, so IndexNow benefits both platforms.

| Check | Status |
|-------|--------|
| IndexNow key file at `/.well-known/indexnow-key.txt` or `/[key].txt` | Present / Absent |
| IndexNow API integration (pings on publish/update) | Active / Not implemented |
| Bing Webmaster Tools verified | Yes / No |
| Sitemap submitted to Bing | Yes / No |

**Implementation:** Add IndexNow key file + CMS plugin (WordPress: IndexNow plugin; custom: POST to `https://api.indexnow.org/indexnow` on content change). Effort: 30 min. Impact: near-instant Bing/Copilot indexation vs. waiting days for natural crawl.

### llms.txt Check

Check for `/llms.txt` (emerging standard — tells AI systems what content is most useful):
- File exists at `[domain]/llms.txt`? → Present / Absent
- If present: does it list key service pages with descriptions?
- Extended version at `/llms-full.txt`? → Present / Absent
- **If absent:** flag as GEO opportunity — fewer than 5% of sites have this (early adopter advantage). See Phase 14 (AI SEO) for generation protocol.

### XML Sitemap Audit
Fetch `/sitemap.xml` and `/sitemap_index.xml`:
| Check | Pass/Fail | Notes |
|-------|----------|-------|
| Returns HTTP 200 | | |
| Submitted to GSC | | GSC → Sitemaps |
| Contains all canonical, indexable URLs | | |
| Excludes 404s, 301s, noindex pages | | Run Screaming Frog → filter sitemap vs. crawl |
| `lastmod` dates accurate (not all identical) | | Identical = auto-generated = Google ignores |
| File size <50MB, <50,000 URLs per file | | Split into sitemap index if needed |
| Image sitemap present (for image-heavy sites) | | |
| Auto-updates on new content publish | | Plugin or CMS configuration |

### Index Coverage (GSC Required or Use `site:` Operator)
```
site:[domain]              → Total indexed pages
site:[domain] -www         → www/non-www duplicate check
site:[domain] inurl:?      → Parameterized pages being indexed (flag if >10)
```

**Healthy indexed:sitemap ratio:** Within 20% (e.g., 50 page sitemap → 40–60 indexed is healthy)

Over-indexed (>120%): orphan pages, parameter variants, staging pages leaking
Under-indexed (<80%): crawl budget issues, noindex errors, crawl rate too low

### Crawl Budget Analysis (Crawl Waste Indicators)
| Issue | Detection | Impact |
|-------|----------|--------|
| URL parameters creating duplicates (`?sort=`, `?session=`) | Screaming Frog → filter by `?` | High |
| Faceted navigation (1000s of filter combinations) | Manual + site: count | Critical |
| Calendar/date URLs (infinite past/future) | Screaming Frog crawl depth | High |
| Session IDs in URLs | URL pattern check | High |
| Soft 404s (200 status but error content) | GSC → Coverage → Excluded | Medium |

**Crawl budget calculation:** Google's allowed crawl rate ≈ (server response time in ms × 0.001) pages/second. Sites with TTFB >800ms waste significant crawl budget.

### Orphan Pages & Crawl Depth
- Orphan pages (0 internal links): list from crawler output → are any important pages orphaned?
- Crawl depth: key service/location pages within ≤3 clicks of homepage?
- Use Screaming Frog → Crawl Analysis → Pages by Click Depth → flag depth >4

---

## Section 2: Site Architecture & URL Structure

### URL Quality Assessment
| Check | Pass/Fail | Example Issue |
|-------|----------|--------------|
| Lowercase URLs only | | `/Services/` instead of `/services/` |
| Hyphens as separators (not underscores) | | `/drain_cleaning/` instead of `/drain-cleaning/` |
| Descriptive, keyword-inclusive paths | | `/page-1/` instead of `/drain-cleaning-chicago/` |
| No dynamic parameters on canonical pages | | `/service.php?id=4` instead of `/drain-cleaning/` |
| Consistent trailing slash (all or none) | | Mix of `/about/` and `/about` → duplicate |
| Max 3-click depth for all critical pages | | Service pages at depth 5+ |

### Internal Link Architecture
- Logical parent-child structure (`/services/[service-name]/`)?
- Service area pages nested correctly (`/locations/[city-state]/`)?
- Breadcrumb structure matches URL hierarchy?
- BreadcrumbList schema on all inner pages?

---

## Section 3: HTTPS & Security Headers

| Check | Pass/Fail | Details |
|-------|----------|---------|
| SSL certificate valid + not expiring within 30 days | | Expiry: [date] |
| All HTTP pages 301 redirect to HTTPS | | Test: `curl -I http://domain.com` |
| www to non-www (or vice versa) 301 canonical redirect | | One canonical version only |
| No mixed content (HTTP resources on HTTPS pages) | | Chrome DevTools → Console → Mixed Content warnings |
| HSTS header (`Strict-Transport-Security`) | | `max-age=31536000; includeSubDomains` |
| `X-Frame-Options` or `CSP frame-ancestors` (clickjacking) | | |
| `X-Content-Type-Options: nosniff` | | |
| `Referrer-Policy` set | | |

---

## Section 4: Redirect Management

From Screaming Frog → Response Codes → filter 3xx:

| Issue | Count | Impact | Fix |
|-------|-------|--------|-----|
| Redirect chains (A→B→C) | | High | Update to direct A→C |
| Redirect loops (A→B→A) | | Critical | Fix immediately |
| 302 used where 301 needed (permanent moves) | | Medium | Change to 301 |
| Old migration redirects returning 200 at destination? | | Low | Verify integrity |
| Redirects losing URL slug (redirecting to homepage) | | High | Fix to correct canonical |

**301 vs. 302 rule:** 301 = permanent (passes ~99% link equity); 302 = temporary (withholds equity — misuse = ranking loss). All site restructuring must use 301.

---

## Section 5: Canonical Tags

From Screaming Frog → Directives → filter Canonical:

| Check | Pass/Fail |
|-------|----------|
| Self-referencing canonicals on all pages | |
| No conflicting canonical + noindex on same page (contradictory directives) | |
| Parameter variants canonicalize to clean URL | |
| Canonical in `<head>` not body | |
| Canonical matches exactly (HTTPS, www preference, trailing slash) | |
| Cross-domain canonicals (for syndicated content) | |
| Pagination: self-canonical OR canonical to page 1 (depending on uniqueness) | |

---

## Section 6: Structured Data / Schema

**Validate with:** Google Rich Results Test + Schema Markup Validator per page type.

**Required for local businesses:**
| Schema Type | Present? | Validates? | Rich Result Eligible? | Priority |
|------------|---------|-----------|----------------------|---------|
| LocalBusiness | ✅/❌ | ✅/❌ | ✅/❌ | Critical |
| Organization (homepage) | ✅/❌ | ✅/❌ | N/A | Critical |
| BreadcrumbList (all inner pages) | ✅/❌ | ✅/❌ | ✅/❌ | High |
| Service (per service page) | ✅/❌ | ✅/❌ | N/A | High |
| FAQPage (service + location pages) | ✅/❌ | ✅/❌ | ✅/❌ | High — AIO trigger |
| AggregateRating (if reviews displayed) | ✅/❌ | ✅/❌ | ✅/❌ | High |
| HowTo (instructional pages) | ✅/❌ | ✅/❌ | ✅/❌ | Medium |
| Article / BlogPosting | ✅/❌ | ✅/❌ | ✅/❌ | Medium |
| VideoObject (if video content) | ✅/❌ | ✅/❌ | ✅/❌ | Medium |
| Person (author pages) | ✅/❌ | ✅/❌ | N/A | Medium |
| Event (if applicable) | ✅/❌ | ✅/❌ | ✅/❌ | Low |

**LocalBusiness schema must include:** `@type`, `@id` (unique URL with fragment), `name`, `url`, `telephone`, `address` (with all PostalAddress sub-properties), `geo` (GeoCoordinates), `openingHoursSpecification`, `image`, `priceRange`, `sameAs` (array), `description`, `hasMap`, `parentOrganization` (not `branchOf` — deprecated 2025).

**FAQPage schema (AIO optimization):** Highest-impact schema for AI Overview inclusion — add 3–5 FAQ entries per service and location page targeting "People Also Ask" questions.

---

## Section 7: JavaScript Rendering

| Check | Pass/Fail | Tool |
|-------|----------|------|
| Meaningful content visible in View Source (no JS required) | | View Source |
| Google renders page correctly | | GSC → URL Inspection → View Rendered Page |
| Navigation links crawlable without JS | | Screaming Frog + JS disabled crawl |
| Lazy-loaded images use `loading="lazy"` with valid `src` | | Screaming Frog → Images |
| SPA framework: SSR or SSG used? | | Check Next.js/Nuxt/Gatsby config |
| No critical content only in AJAX calls Googlebot can't access | | Compare View Source vs. Rendered |

---

## Section 8: Core Web Vitals — Technical Assessment

**2025 CWV Thresholds (INP replaced FID — March 2024):**
| Metric | Good | Needs Improvement | Poor | Target |
|--------|------|------------------|------|--------|
| **LCP** | <1.8s | 1.8–2.5s | >2.5s | <1.8s (aim: <1.2s) |
| **INP** | <100ms | 100–200ms | >200ms | <100ms (aim: <75ms) |
| **CLS** | <0.05 | 0.05–0.1 | >0.1 | <0.05 (aim: <0.02) |
| **TTFB** | <200ms | 200–800ms | >800ms | <200ms |

Current scores from `{AUDIT_DIR}/speed-findings.md`:
- LCP: [Xs] — [Good/Needs Improvement/Poor]
- INP: [ms] — [Good/Needs Improvement/Poor]
- CLS: [score] — [Good/Needs Improvement/Poor]
- TTFB: [ms] — [Good/Needs Improvement/Poor]

Identify technical root causes — defer detailed fix recommendations to Phase 10 (Speed Optimization).

**Common technical CWV causes:**
| Issue | Metric Affected | Detection |
|-------|----------------|----------|
| No CDN / server far from users | LCP, TTFB | `curl -w "%{time_connect}" [URL]` |
| Render-blocking CSS/JS | LCP | Lighthouse → Opportunities |
| No image lazy-loading | LCP | Screaming Frog → Images → no loading attribute |
| Layout shifts from images without dimensions | CLS | Lighthouse → Diagnostics |
| Third-party scripts (chat, ads, pixels) | INP, LCP | Lighthouse → Third-party usage |
| No browser caching headers | LCP (repeat visits) | `curl -I [URL]` → check Cache-Control |

---

## Section 9: Duplicate Content

From Screaming Frog → Content → filter by Duplicate/Near-Duplicate:

| Duplicate Type | Count | Action |
|--------------|-------|--------|
| Identical page titles | | Make unique |
| Identical meta descriptions | | Make unique |
| Identical page content (same % match) | | Consolidate or canonicalize |
| www vs. non-www (both indexed) | | 301 canonical redirect |
| HTTP vs. HTTPS (both indexed) | | Force HTTPS, 301 |
| Trailing slash variants (both indexed) | | Pick one, redirect other |
| Mobile subdomain (m.domain.com) duplicating main | | Implement rel="canonical" + rel="alternate" |

---

## Section 10: International / Hreflang (If Applicable)

If serving multiple languages or countries:
| Check | Pass/Fail |
|-------|----------|
| `hreflang` tags implemented per language variant | |
| Self-referencing `hreflang` present | |
| `x-default` pointing to correct fallback | |
| All variants reference each other (reciprocal links) | |
| No conflict between canonical and hreflang (both pointing to same URL) | |
| Consistent implementation: HTML tag OR HTTP header OR sitemap (not mixed) | |

---

## Section 11: Competitor Technical Benchmark

Compare technical health against confirmed-clean competitors:

| Signal | Client | Comp 1 | Comp 2 | Benchmark |
|--------|--------|--------|--------|-----------|
| Lighthouse Performance (mobile) | /100 | /100 | /100 | ≥70 |
| Indexed pages vs. sitemap | ratio | ratio | ratio | Within 20% |
| TTFB | ms | ms | ms | <200ms |
| Schema types implemented | count | count | count | ≥5 types |
| HTTPS score | ✅/❌ | ✅/❌ | ✅/❌ | Clean |
| Broken internal links | count | count | count | 0 |

---

## Priority Matrix

| Issue | Impact (1–5) | Feasibility (1–5) | Priority | Effort |
|-------|-------------|-------------------|---------|--------|
| `Disallow: /` in robots.txt (blocks everything) | 5 | 5 | 25 | 5 min |
| SSL expired or HTTP not redirecting | 5 | 5 | 25 | 1–4 hrs |
| Redirect loop | 5 | 4 | 20 | 30–60 min |
| LocalBusiness schema missing or invalid | 4 | 5 | 20 | 1–2 hrs |
| FAQPage schema missing (AIO opportunity) | 4 | 5 | 20 | 30 min/page |
| Sitemap not submitted to GSC | 4 | 5 | 20 | 10 min |
| Orphaned service/location pages | 4 | 5 | 20 | 15 min each |
| INP >200ms (CWV failing) | 4 | 3 | 12 | 4–16 hrs |
| Redirect chains (A→B→C) | 3 | 4 | 12 | 1–2 hrs |
| Mixed content (HTTP on HTTPS) | 3 | 4 | 12 | 1–4 hrs |
| Canonical conflicts (canonical + noindex) | 4 | 4 | 16 | 1–2 hrs |
| JavaScript-only nav (Googlebot can't crawl) | 5 | 3 | 15 | 4–16 hrs |
| Tier 1 AI crawlers blocked in robots.txt | 4 | 5 | 20 | 15 min |
| IndexNow not implemented (Bing/Copilot delay) | 3 | 5 | 15 | 30 min |
| llms.txt missing (AI discoverability gap) | 3 | 4 | 12 | 1–2 hrs |
| JS-rendered content invisible to AI crawlers | 4 | 3 | 12 | 4–8 hrs |

---

## Per-Issue Output Format

```
Status: ✅ Pass | ⚠️ Warning | ❌ Fail
Issue: [Specific description with URL examples]
Impact: Critical | High | Medium | Low
Priority Score: [Impact 1-5] × [Feasibility 1-5] = [X]
Fix: [Exact steps — no vague advice]
Effort: Quick Fix (<1hr) | Medium (1-4hrs) | Complex (4+hrs)
Expected Impact: [What changes when fixed]
Competitor Context: [How do top 2 competitors handle this?]
```

---

## Output

Write to `{AUDIT_DIR}/technical-findings.md` with YAML frontmatter:

```yaml
---
skill: audit/technical-seo
phase: 2
date: [YYYY-MM-DD]
business: [Business Name]
url: [URL]
score: [X/100]
status: [healthy|needs-attention|critical]
indexed_pages: [X]
sitemap_pages: [X]
critical_issues: [X]
schema_types: [X]
---
```

Sections to include:
- Score X/100 with per-category breakdown
- Crawlability report (robots.txt, sitemap, index coverage ratio)
- Site architecture assessment (URL quality, depth, orphan pages)
- HTTPS + security headers status
- Redirect audit (chains, loops, 302 misuse)
- Canonical tag audit
- Schema completeness table (all 12 types, validation status)
- JavaScript rendering status
- CWV technical summary (LCP/INP/CLS current vs. target)
- Duplicate content report
- Competitor technical benchmark table
- Priority matrix (all issues with Impact × Feasibility scores)
- 30/90-day technical fix roadmap

**Key consumers:**
- `audit/speed-optimization` — reads for CWV technical root causes
- `audit/penalty-check` — reads for technical manipulation signals
- `local/multi-location-seo` — URL architecture for multi-location
- `cross-cutting/serp-trust-auditor` — Technical Foundation dimension

---

## Technical SEO Recommendations Checklist

### Issue Priority Table (2025 Standards)

| Issue | Severity | Effort | Priority | Tool |
|-------|---------|--------|---------|------|
| No HTTPS / HTTP accessible | 🔴 Critical | 1–2 hrs dev | 25 | check_url.py + curl |
| Active manual action (GSC) | 🔴 Critical | 2–8 weeks recovery | 25 | Google Search Console |
| Robots.txt blocking crawl | 🔴 Critical | 15 min | 25 | curl robots.txt |
| Missing XML sitemap | 🔴 Critical | 30 min | 20 | Screaming Frog |
| INP >500ms (Core Web Vital) | 🔴 Critical | 4–8 hrs dev | 20 | PageSpeed Insights |
| Duplicate content (www/non-www/http/https) | 🟠 High | 1 hr dev | 20 | Screaming Frog |
| Canonical tag missing or wrong | 🟠 High | 1–2 hrs | 20 | Screaming Frog |
| Redirect chains (3+ hops) | 🟠 High | 2 hrs dev | 16 | curl -IL |
| JavaScript content not rendering | 🟠 High | 4–8 hrs dev | 16 | GSC URL Inspection |
| Missing structured data (LocalBusiness/FAQPage) | 🟠 High | 2–4 hrs | 16 | Rich Results Test |
| Tier 1 AI crawlers blocked (GPTBot/ClaudeBot/PerplexityBot) | 🟠 High | 15 min | 20 | curl robots.txt |
| IndexNow not configured (Bing/Copilot freshness) | 🟡 Medium | 30 min | 15 | Check /.well-known/indexnow-key.txt |
| llms.txt absent | 🟡 Medium | 1–2 hrs | 12 | curl /llms.txt |
| Broken internal links (4xx) | 🟡 Medium | 30 min | 15 | Screaming Frog |
| Missing hreflang (multi-region) | 🟡 Medium | 2–4 hrs dev | 12 | Screaming Frog |
| LCP >4.0s | 🟠 High | 2–4 hrs | 16 | PageSpeed Insights |
| CLS >0.25 | 🟡 Medium | 1–2 hrs | 15 | PageSpeed Insights |

### E-E-A-T Technical Signals (2025)
Technical SEO directly affects E-E-A-T trust scoring:
- **Author schema** on all content pages → Person entity with credentials
- **Organization schema** on homepage → name, logo, address, sameAs (7+ properties)
- **Article/BlogPosting schema** on editorial content → datePublished + dateModified
- **Breadcrumb schema** → site hierarchy clarity for Googlebot and AIO extraction
- **INP <200ms** → fast interaction response = positive behavioral signal (Navboost)

### GBP Technical Integration
GBP "Website" button sends high-intent traffic. Technical issues on the landing page lose this traffic:
- Ensure GBP links to the most technically optimized page (homepage or primary service page)
- Page receiving GBP traffic must pass Core Web Vitals (LCP <2.5s, INP <200ms, CLS <0.1)
- LocalBusiness schema on GBP-linked page must match GBP name/address/phone exactly
