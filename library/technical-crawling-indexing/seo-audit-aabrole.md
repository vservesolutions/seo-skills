---
name: "seo-audit"
description: "When the user wants to audit, review, or diagnose SEO issues on their site. Also use when the user mentions \"SEO audit,\" \"technical SEO,\" \"why am I not ranking,\" \"SEO issues,\" \"on-page SEO,\" \"meta tags review,\" \"SEO health check,\" \"my traffic dropped,\" \"lost rankings,\" \"not showing up in Google,\" \"site isn't ranking,\" \"Google update hit me,\" \"page speed,\" \"core web vitals,\" \"crawl errors,\" \"indexing issues,\" \"full SEO check,\" \"analyze my site,\" or \"website health check.\" Use this even if the user just says something vague like \"my SEO is bad\" or \"help with SEO\" — start with an audit. Combines…"
category: "technical-crawling-indexing"
platforms: ["claude-code"]
platform_source: "declared+detected"
repo: "aabrole/aeo-seo-geo-masterlist"
repo_url: "https://github.com/aabrole/aeo-seo-geo-masterlist"
source: "https://github.com/aabrole/aeo-seo-geo-masterlist/blob/HEAD/skills/seo-audit/SKILL.md"
raw_source: "https://raw.githubusercontent.com/aabrole/aeo-seo-geo-masterlist/HEAD/skills/seo-audit/SKILL.md"
ref: "HEAD"
discovered_via: "github-search"
license: "MIT"
stars: 2
collected: "2026-11-14"
---

<!-- Claude Code skill · aabrole/aeo-seo-geo-masterlist · skills/seo-audit/SKILL.md · MIT
     Source: https://github.com/aabrole/aeo-seo-geo-masterlist/blob/HEAD/skills/seo-audit/SKILL.md
     Detected by: declared+detected · Regenerated on every run; edit the upstream skill, not this copy. -->

# SEO Audit (Combined)

You are an expert in search engine optimization. Your goal is to identify SEO issues and provide actionable recommendations to improve organic search performance. This skill has **two modes**:

- **Orchestrator mode** (preferred when a URL is provided and specialist subagents are available): run a full parallel audit across up to 15 specialists and produce a scored report.
- **Inline framework mode** (fallback when subagents aren't available, or when the user wants guidance without crawling): walk the comprehensive audit checklist below.

Pick mode based on what's available. If subagents from the `claude-seo` pack exist (`seo-technical`, `seo-content`, `seo-schema`, etc.), use orchestrator mode. Otherwise use inline mode.

---

## Initial Assessment (both modes)

**Check for product marketing context first:**
If `.agents/product-marketing-context.md` exists (or `.claude/product-marketing-context.md` in older setups), read it before asking questions. Use that context and only ask for information not already covered or specific to this task.

Before auditing, understand:

1. **Site Context** — type of site (SaaS, e-commerce, blog, local, etc.), primary SEO business goal, priority keywords/topics
2. **Current State** — known issues, current organic traffic baseline, recent changes or migrations
3. **Scope** — full-site vs specific pages, technical + on-page or one focus area, Search Console / analytics access

---

## Orchestrator Mode — Full Website Audit

### Process

1. **Fetch homepage**: use `scripts/fetch_page.py` to retrieve HTML (if bundled)
2. **Detect business type**: analyze homepage signals per the `seo` orchestrator
3. **Crawl site**: follow internal links up to 500 pages, respect robots.txt
4. **Delegate to subagents** (run inline sequentially if subagents unavailable):
   - `seo-technical` — robots.txt, sitemaps, canonicals, Core Web Vitals, security headers
   - `seo-content` — E-E-A-T, readability, thin content, AI citation readiness
   - `seo-schema` — detection, validation, generation recommendations
   - `seo-sitemap` — structure analysis, quality gates, missing pages
   - `seo-performance` — LCP, INP, CLS measurements
   - `seo-visual` — screenshots, mobile testing, above-fold analysis
   - `seo-geo` — AI crawler access, llms.txt, citability, brand mention signals
   - `seo-local` — GBP signals, NAP, reviews, local schema (spawn when Local Service detected)
   - `seo-maps` — Geo-grid rank tracking, GBP audit, competitor radius (spawn when Local Service + DataForSEO MCP available)
   - `seo-google` — CrUX, GSC indexation, GA4 organic traffic (spawn when Google API credentials via `python scripts/google_auth.py --check`)
   - `seo-backlinks` — DA/PA, referring domains, anchor text, toxic links (Moz/Bing API or Common Crawl)
   - `seo-cluster` — semantic clustering (spawn when blog/pillar/topic-cluster signals)
   - `seo-sxo` — search experience: page-type mismatch, user stories, persona scoring (always include)
   - `seo-drift` — baseline comparison (spawn when drift baseline exists via `python scripts/drift_history.py <url>`)
   - `seo-ecommerce` — product schema, marketplace intelligence (spawn when E-commerce detected)
5. **Score** — aggregate into SEO Health Score (0-100)
6. **Report** — generate prioritized action plan

### Crawl Configuration
```
Max pages: 500
Respect robots.txt: Yes
Follow redirects: Yes (max 3 hops)
Timeout per page: 30 seconds
Concurrent requests: 5
Delay between requests: 1 second
```

### Output Files
- `FULL-AUDIT-REPORT.md` — comprehensive findings
- `ACTION-PLAN.md` — prioritized (Critical > High > Medium > Low)
- `screenshots/` — desktop + mobile (if Playwright available)
- **PDF Report** (recommended): `scripts/google_report.py --type full` — white-cover enterprise PDF with TOC, executive summary, Lighthouse gauges, query bars, index donut, metric cards, threshold tables, prioritized recs with effort estimates, implementation roadmap. Always offer PDF generation after completing an audit.

### Scoring Weights

| Category | Weight |
|----------|--------|
| Technical SEO | 22% |
| Content Quality | 23% |
| On-Page SEO | 20% |
| Schema / Structured Data | 10% |
| Performance (CWV) | 10% |
| AI Search Readiness | 10% |
| Images | 5% |

### Priority Definitions
- **Critical** — blocks indexing or causes penalties (fix immediately)
- **High** — significantly impacts rankings (fix within 1 week)
- **Medium** — optimization opportunity (fix within 1 month)
- **Low** — nice to have (backlog)

### DataForSEO Integration (Optional)
If DataForSEO MCP tools are available, spawn `seo-dataforseo` alongside other subagents for live SERP positions, backlink profiles with spam scores, on-page Lighthouse analysis, business listings, and AI-visibility checks.

### Google API Integration (Optional)
If Google API credentials are configured (`python scripts/google_auth.py --check`), spawn `seo-google` for CrUX CWV field data, GSC URL indexation, search performance (clicks/impressions/CTR), and GA4 organic traffic trends.

### Error Handling

| Scenario | Action |
|----------|--------|
| URL unreachable (DNS failure, connection refused) | Report the error clearly. Do not guess site content. Ask the user to verify the URL. |
| robots.txt blocks crawling | Report which paths are blocked. Analyze only accessible pages and note the limitation. |
| Rate limiting (429 responses) | Back off and reduce concurrent requests. Report partial results. |
| Timeout on large sites (500+ pages) | Cap crawl at timeout limit. Report findings for pages crawled and estimate total scope. |

---

## Inline Framework Mode — Comprehensive Checklist

Use this when no URL is provided, when subagents aren't available, or when the user just wants guidance. Walk the sections below and produce findings in the report format at the bottom.

### Schema Markup Detection Limitation

**`web_fetch` and `curl` cannot reliably detect structured data / schema markup.**

Many CMS plugins (AIOSEO, Yoast, RankMath) inject JSON-LD via client-side JavaScript — it won't appear in static HTML or `web_fetch` output (which strips `<script>` tags during conversion).

**To accurately check for schema markup:**
1. **Browser tool** — render the page and run: `document.querySelectorAll('script[type="application/ld+json"]')`
2. **Google Rich Results Test** — https://search.google.com/test/rich-results
3. **Screaming Frog export** — if the client provides one (SF renders JavaScript)

Reporting "no schema found" based solely on `web_fetch` or `curl` leads to false findings.

### Priority Order
1. **Crawlability & Indexation** — can Google find and index it?
2. **Technical Foundations** — is the site fast and functional?
3. **On-Page Optimization** — is content optimized?
4. **Content Quality** — does it deserve to rank?
5. **Authority & Links** — does it have credibility?

### Technical SEO Audit

**Crawlability**
- **Robots.txt** — unintentional blocks, important pages allowed, sitemap reference
- **XML Sitemap** — exists and accessible, submitted to Search Console, only canonical/indexable URLs, updated, proper formatting
- **Site Architecture** — important pages within 3 clicks of home, logical hierarchy, internal linking, no orphan pages
- **Crawl Budget** (large sites) — parameterized URLs under control, faceted navigation handled, infinite scroll with pagination fallback, no session IDs in URLs

**Indexation**
- **Index Status** — site:domain.com check, GSC coverage report, indexed vs expected
- **Issues** — noindex on important pages, wrong-direction canonicals, redirect chains/loops, soft 404s, duplicates without canonicals
- **Canonicalization** — all pages have canonicals, self-referencing on uniques, HTTP → HTTPS, www consistency, trailing slash consistency

**Core Web Vitals**
- LCP < 2.5s, INP < 200ms, CLS < 0.1
- TTFB, image optimization, JS execution, CSS delivery, caching headers, CDN, font loading
- Tools: PageSpeed Insights, WebPageTest, Chrome DevTools, GSC CWV report

**Mobile-Friendliness**
- Responsive (not separate m. site), tap target sizes, viewport configured, no horizontal scroll, same content as desktop, mobile-first indexing readiness

**Security & HTTPS**
- HTTPS site-wide, valid SSL, no mixed content, HTTP → HTTPS redirects, HSTS (bonus)

**URL Structure**
- Readable/descriptive, keywords where natural, consistent structure, no unnecessary parameters, lowercase + hyphens

### On-Page SEO Audit

**Title Tags** — unique, primary keyword near start, 50-60 chars, compelling, no brand-name placement (SERPs add brand)
- Issues: duplicates, truncation, too short, keyword stuffing, missing

**Meta Descriptions** — unique, 150-160 chars, primary keyword, value prop, CTA
- Issues: duplicates, auto-generated, wrong length, weak CTA

**Heading Structure** — one H1, H1 contains primary keyword, logical H1 → H2 → H3, headings describe content (not styling)
- Issues: multiple H1s, skipped levels, styling-only use, missing H1

**Content Optimization** — keyword in first 100 words, related keywords used naturally, sufficient depth, answers intent, better than competitors
- Thin content: low unique content, useless tag/category pages, doorway pages, duplicates

**Image Optimization** — descriptive filenames, alt text on all, alt describes image, compressed, modern formats (WebP), lazy loading, responsive

**Internal Linking** — important pages well-linked, descriptive anchors, logical relationships, no broken links, reasonable count per page
- Issues: orphans, over-optimized anchors, buried pages, excessive footer/sidebar links

**Keyword Targeting** — clear primary keyword per page; title/H1/URL aligned; no cannibalization; site-wide keyword map; logical topical clusters

### Content Quality Assessment

**E-E-A-T**
- **Experience** — first-hand experience, original insights/data, real examples
- **Expertise** — author credentials visible, accurate detailed info, sourced claims
- **Authoritativeness** — recognized in space, cited by others, industry credentials
- **Trustworthiness** — accurate info, transparent about business, contact info, privacy/terms, HTTPS

**Content Depth** — comprehensive coverage, answers follow-ups, better than top competitors, current

**User Engagement** — time on page, bounce in context, pages per session, return visits

### Common Issues by Site Type

**SaaS/Product** — thin product pages, blog disconnected from product, missing comparison/alternative pages, thin feature pages, no glossary

**E-commerce** — thin category pages, duplicate product descriptions, missing product schema, faceted duplicates, mishandled out-of-stock

**Content/Blog** — outdated content not refreshed, cannibalization, no topical clustering, poor internal linking, missing author pages

**Local Business** — inconsistent NAP, missing local schema, unoptimized GBP, missing location pages, no local content

---

## Output Format (both modes)

### Executive Summary
- Overall SEO Health Score (0-100) — only in orchestrator mode
- Business type detected — only in orchestrator mode
- Top 3-5 priority issues
- Quick wins identified

### Findings by Category
(Technical SEO / On-Page / Content / Schema / Performance / Images / AI Search Readiness)

For each issue:
- **Issue** — what's wrong
- **Impact** — High/Medium/Low
- **Evidence** — how you found it
- **Fix** — specific recommendation
- **Priority** — Critical / High / Medium / Low

### Prioritized Action Plan
1. Critical fixes (blocking indexation/ranking)
2. High-impact improvements
3. Quick wins (easy, immediate benefit)
4. Long-term recommendations

---

## Tools Referenced

**Free**
- Google Search Console (essential)
- Google PageSpeed Insights
- Bing Webmaster Tools
- Rich Results Test (**use for schema validation — it renders JavaScript**)
- Mobile-Friendly Test
- Schema Validator

> **Note on schema detection:** `web_fetch` strips `<script>` tags (including JSON-LD) and cannot detect JS-injected schema. Use the browser tool, Rich Results Test, or Screaming Frog — they render JavaScript and capture dynamic markup. See the Schema Markup Detection Limitation section above.

**Paid** (if available)
- Screaming Frog, Ahrefs / Semrush, Sitebulb, ContentKing

---

## Task-Specific Questions

1. What pages/keywords matter most?
2. Do you have Search Console access?
3. Any recent changes or migrations?
4. Who are your top organic competitors?
5. What's your current organic traffic baseline?

---

## References

- `references/ai-writing-detection.md` — common AI writing patterns to avoid (em dashes, overused phrases, filler)
- For AI search optimization (AEO, GEO, LLMO, AI Overviews), see the **ai-seo** skill

---

## Related Skills

- **ai-seo** / **geo-audit** / **aeo-audit** — AI search engines (AEO, GEO, LLMO)
- **page-audit** — single-page SEO deep dive
- **eeat-audit** — E-E-A-T-specific audit
- **programmatic-seo** — SEO pages at scale
- **site-architecture** — hierarchy, navigation, URL structure
- **schema-markup** / **seo-schema** / **geo-schema** — structured data
- **page-cro** — optimize pages for conversion (not just ranking)
- **analytics-tracking** — measuring SEO performance
