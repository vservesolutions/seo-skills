---
name: "seo-audit"
description: "Full website SEO audit with parallel subagent delegation. Crawls up to 500 pages, records performed checks and measured coverage, delegates to up to 15 specialists, and generates a weighted health score plus an evidence-backed action plan. Use when user says audit, full SEO check, analyze my site, or website health check."
category: "technical-crawling-indexing"
platforms: ["claude-code"]
platform_source: "detected"
repo: "BruceL017/codex-seo"
repo_url: "https://github.com/BruceL017/codex-seo"
source: "https://github.com/BruceL017/codex-seo/blob/HEAD/plugins/codex-seo/skills/seo-audit/SKILL.md"
raw_source: "https://raw.githubusercontent.com/BruceL017/codex-seo/HEAD/plugins/codex-seo/skills/seo-audit/SKILL.md"
ref: "HEAD"
discovered_via: "github-search"
license: "MIT"
stars: 1
collected: "2026-11-14"
---

<!-- Claude Code skill · BruceL017/codex-seo · plugins/codex-seo/skills/seo-audit/SKILL.md · MIT
     Source: https://github.com/BruceL017/codex-seo/blob/HEAD/plugins/codex-seo/skills/seo-audit/SKILL.md
     Detected by: detected · Regenerated on every run; edit the upstream skill, not this copy. -->

# Full Website SEO Audit

Require one public HTTP(S) URL. If it is missing, ask for it before running
tools. Never infer a target or invent provider data.

## Process

1. **Run the deterministic core**: `codex-seo audit <url> --output <output_dir>`.
   Add `--baseline <previous-audit.json>` for an initial before/after analysis
   and use `--max-pages 1..500` only when the user requests a different crawl
   bound. The core always writes an Audit v2 document with performed checks,
   measured coverage, and category-weighted scoring.
2. **Detect business type** from captured homepage evidence.
3. **Delegate only when explicitly requested**. Independent checks may run in
   parallel; the parent task remains responsible for validating and merging them:
   - `seo-technical` -- robots.txt, sitemaps, canonicals, Core Web Vitals, security headers
   - `seo-content` -- E-E-A-T, readability, thin content, AI citation readiness
   - `seo-schema` -- detection, validation, generation recommendations
   - `seo-sitemap` -- structure analysis, quality gates, missing pages
   - `seo-performance` -- LCP, INP, CLS measurements
   - `seo-visual` -- screenshots, mobile testing, above-fold analysis
   - `seo-geo` -- AI crawler access, llms.txt, citability, brand mention signals
   - `seo-local` -- GBP signals, NAP consistency, reviews, local schema, industry-specific local factors (spawn when Local Service industry detected: brick-and-mortar, SAB, or hybrid business type)
   - `seo-maps` -- Geo-grid rank tracking, GBP audit, review intelligence, competitor radius mapping (spawn when Local Service detected AND DataForSEO MCP available)
   - `seo-google` -- CWV field data (CrUX), URL indexation (GSC), organic traffic (GA4) (spawn when Google API credentials detected via `codex-seo run google_auth.py --check`)
   - `seo-backlinks` -- Backlink profile data: DA/PA, referring domains, anchor text, toxic links (spawn when Moz or Bing API credentials detected via `codex-seo run backlinks_auth.py --check`, or always include Common Crawl domain-level metrics)
   - `seo-cluster` -- Semantic clustering analysis (spawn when content strategy signals detected: blog, pillar pages, topic clusters)
   - `seo-sxo` -- Search experience analysis: page-type mismatch, user stories, persona scoring (always include in full audits)
   - `seo-drift` -- Drift analysis: compare against stored baseline (spawn when drift baseline exists for the URL via `codex-seo run drift_history.py <url>`)
   - `seo-ecommerce` -- Product schema, marketplace intelligence (spawn when E-commerce industry detected)
4. **Enrich without blocking**: use authenticated optional providers only when
   relevant. Semrush and Ahrefs are shared data sources, not extra Agents. Keep
   every provider's metric definition, database, device, market, and timestamp.
5. **Synthesize deterministically**: have each delegated specialist return a
   JSON array using the Finding contract below. Reject unsupported items rather
   than translating prose into facts. Normalize optional Profound, SE Ranking,
   DataForSEO, or user-supplied AI observations through `$seo-geo`.
6. **Render the final report** after optional work completes:

   ```text
   codex-seo report <output_dir>/audit.json --output <output_dir> \
     [--baseline <previous-audit.json>] \
     [--findings <specialist-findings.json>]... \
     [--visibility <ai-observations.json>] \
     [--context <project-root>/.agents/seo-context.md] \
     [--annotations <localized-annotations.json>]
   ```

   Only pass `--context` after the user has confirmed that file. Localized
   annotations may change labels and explanations for this render but are not
   audit evidence and are not persisted in `audit.json`.
7. **Persist and verify**: ensure every accepted Finding uses the stable
   contract, every failure points to a performed check, and all four standard
   artifacts exist before reporting completion. An invalid base Audit is a hard
   failure. An invalid optional enrichment is excluded and shown as a partial
   report warning; it never blocks evidence from successful checks.

## Crawl Configuration

```
Default pages: 100
Maximum pages: 500
Respect robots.txt: Yes
Follow redirects: Yes (max 3 hops)
Timeout per page: 30 seconds
Concurrent requests: 5
Delay between requests: 1 second
```

## Output Files

- `<output_dir>/audit.json`: canonical machine-readable audit
- `<output_dir>/audit.md`: readable report and prioritized recommendations
- `<output_dir>/audit.html`: standalone HTML report
- `<output_dir>/evidence/findings.json`: evidence-bearing findings

These remain the only standard report artifacts. Specialist working notes and
screenshots are supporting inputs, not additional canonical report formats.

## Stable Finding Contract

Every finding in `audit.json` and `evidence/findings.json` must include:

```json
{
  "id": "f7ee94d4f983672e",
  "code": "http-server-error",
  "category": "crawlability",
  "severity": "critical|high|medium|low",
  "confidence": 1.0,
  "check_ids": ["http-status-success"],
  "scoring_eligible": true,
  "evidence": [{"kind": "observation", "source": "page", "field": "status_code", "observed": 500, "captured_at": "..."}],
  "affected_urls": ["https://example.com/"],
  "recommendation": "Restore a successful response.",
  "effort": "high",
  "sources": ["core"],
  "source_timestamp": "..."
}
```

`check_ids` must reference a `pass|fail|unknown|not_run` entry in the performed
check ledger. A scoring-eligible Finding must reference a failed check. Missing
provider data is `unknown` or `not_run`, never `pass`. Imported Findings that
cannot meet this contract stay outside the canonical Audit.

Delegated specialists set `scoring_eligible` to `false`. Only reproducible rules
implemented in the deterministic core may set it to `true`; specialist evidence
can strengthen the report without silently changing the published score.

## Scoring Weights

| Category | Weight |
|----------|--------|
| Technical SEO | 22% |
| Content Quality | 23% |
| On-Page SEO | 20% |
| Schema / Structured Data | 10% |
| Performance (CWV) | 10% |
| AI Search Readiness | 10% |
| Images | 5% |

Each measured category starts at 100 and deducts evidence-weighted Finding
severity; the overall score re-normalizes the fixed weights across measured
dimensions only. Always show category and overall coverage. Critical crawl or
index blockers are pinned to the top of the report, but they never cap or
override the formula-derived overall score.

## Report Structure

### Executive Summary
- Overall SEO Health Score (0-100) and measured coverage
- Business type detected
- Up to 3 crawl/index blockers
- Top 5 dependency-ordered actions

### Technical SEO
- Crawlability issues
- Indexability problems
- Security concerns
- Core Web Vitals status

### Content Quality
- E-E-A-T assessment
- Thin content pages
- Duplicate content issues
- Readability scores

### On-Page SEO
- Title tag issues
- Meta description problems
- Heading structure
- Internal linking gaps

### Schema & Structured Data
- Current implementation
- Validation errors
- Missing opportunities

### Performance
- LCP, INP, CLS scores
- Resource optimization needs
- Third-party script impact

### Images
- Missing alt text
- Oversized images
- Format recommendations

### AI Search Readiness
- Evidence-backed citable-passage checks
- Structural improvements
- Authority signals

AI Search Readiness is a site-quality dimension. Observed retrieval, citation,
mention, or recommendation outcomes from AI products are reported separately
and never change this category or the overall SEO Health Score.

## Priority Definitions

- **Critical**: Blocks indexing or causes penalties (fix immediately)
- **High**: Significantly impacts rankings (fix within 1 week)
- **Medium**: Optimization opportunity (fix within 1 month)
- **Low**: Nice to have (backlog)

## DataForSEO Integration (Optional)

If DataForSEO MCP tools are available, spawn the `seo-dataforseo` agent alongside existing subagents to enrich the audit with live data: real SERP positions, backlink profiles with spam scores, on-page analysis (Lighthouse), business listings, and AI visibility checks (ChatGPT scraper, LLM mentions).

## Google API Integration (Optional)

If Google API credentials are configured (`codex-seo run google_auth.py --check`), spawn the `seo-google` agent to enrich the audit with real Google field data: CrUX Core Web Vitals (replaces lab-only estimates), GSC URL indexation status, search performance (clicks, impressions, CTR), and GA4 organic traffic trends. The Performance (CWV) category score benefits most from field data.

## Error Handling

| Scenario | Action |
|----------|--------|
| URL unreachable (DNS failure, connection refused) | Report the error clearly. Do not guess site content. Suggest the user verify the URL and try again. |
| robots.txt blocks crawling | Report which paths are blocked. Analyze only accessible pages and note the limitation in the report. |
| Rate limiting (429 responses) | Back off and reduce concurrent requests. Report partial results with a note on which sections could not be completed. |
| Timeout or crawl bound reached | Report partial coverage and the exact pages-crawled count. Do not extrapolate unsupported site-wide facts. |
