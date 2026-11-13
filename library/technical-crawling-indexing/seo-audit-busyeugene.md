---
name: "seo-audit"
description: "Use when the user wants an SEO audit of a website — technical issues, on-page problems, Core Web Vitals, and (optionally) real GSC query data. Runs SE Ranking's website audit API, PageSpeed Insights, and optional Google Search Console, then writes a prioritized report."
category: "technical-crawling-indexing"
platforms: ["claude-code"]
platform_source: "declared+detected"
repo: "busyeugene/content-marketing-skills"
repo_url: "https://github.com/busyeugene/content-marketing-skills"
source: "https://github.com/busyeugene/content-marketing-skills/blob/HEAD/seo-audit/SKILL.md"
raw_source: "https://raw.githubusercontent.com/busyeugene/content-marketing-skills/HEAD/seo-audit/SKILL.md"
ref: "HEAD"
discovered_via: "github-search"
license: "MIT"
stars: 1
collected: "2026-11-13"
---

<!-- Claude Code skill · busyeugene/content-marketing-skills · seo-audit/SKILL.md · MIT
     Source: https://github.com/busyeugene/content-marketing-skills/blob/HEAD/seo-audit/SKILL.md
     Detected by: declared+detected · Regenerated on every run; edit the upstream skill, not this copy. -->

# SEO Audit

Produce a prioritized SEO audit report for a website or a single URL. Combines SE Ranking's audit API for crawl-level issues, PageSpeed Insights for Core Web Vitals, and optional Google Search Console data for real query performance.

## Setup

Required:
- `SE_RANKING_API_KEY` — SE Ranking API key with Website Audit access. Docs: https://seranking.com/api-documentation.html

Optional:
- `PAGESPEED_API_KEY` — raises quota; the endpoint works keyless with lower limits.
- `GSC_SERVICE_ACCOUNT_JSON` — path to a Google service account key file with Search Console read access.
- `GSC_SITE_URL` — the verified property URL (e.g. `sc-domain:example.com`).
- `FIRECRAWL_API_KEY` — used to pull the target pages' rendered HTML for on-page checks the APIs don't cover (heading structure, schema presence, internal link map).

## Inputs

1. **Target** — full site (domain) or a single URL.
2. **Audit depth** — `quick` (home + top 5 URLs), `standard` (top 50), `full` (whole site, may take minutes).
3. **Include GSC data?** — Y/N. Default Y if credentials are set.
4. **Include PageSpeed data?** — Y/N. Default Y.

Use `AskUserQuestion` for target type (site/URL) and audit depth.

## Process

### 1. Load context

- Read `{SKILL_BASE}/../_shared/seo-best-practices.md` — this is the checklist the report is scored against.

### 2. SE Ranking crawl

Create an audit task and poll until complete. SE Ranking offers two audit variants — pick `standard` for HTML-rendered sites and `advanced` for JS/SPA sites that need headless rendering.

```
POST https://api.seranking.com/v1/site-audit/audits/standard
Authorization: Token ${SE_RANKING_API_KEY}
Content-Type: application/json

{
  "url": "<target>",
  "pages_limit": <50 or full>,
  "include_subdomains": false
}
```

For JS-heavy sites:
```
POST https://api.seranking.com/v1/site-audit/audits/advanced
```

Poll the audits list by domain until the audit status reaches a completed state:
```
GET https://api.seranking.com/v1/site-audit/audits?search={domain}
```

Then fetch issues and per-URL breakdown (the issues endpoint is queried by audit and optionally by URL):
```
GET https://api.seranking.com/v1/site-audit/audits/issues?audit_id={id}
GET https://api.seranking.com/v1/site-audit/audits/issues?audit_id={id}&url_id={url_id}
```

If the expected status string doesn't match, don't hard-fail — treat any terminal non-running state as "done" and fall back to whatever data is available.

Group issues into four severity buckets:
- **Critical** — blocks indexing or ranking (noindex on money pages, 5xx, broken canonicals, duplicate titles on key pages, missing H1).
- **High** — significant ranking impact (slow pages, missing meta descriptions, thin content, broken internal links).
- **Medium** — best-practice violations (missing alt text, long titles, non-canonical duplicates).
- **Low** — nice-to-have (opengraph tags, minor schema gaps).

### 3. PageSpeed Insights

For each URL in the audit sample (cap at 10 for quick, 25 for standard, 50 for full):

```
GET https://www.googleapis.com/pagespeedonline/v5/runPagespeed
  ?url=<url>&strategy=mobile&category=performance&category=seo&category=accessibility
  [&key=${PAGESPEED_API_KEY}]
```

Capture:
- LCP, INP (or FID), CLS, TTFB
- Performance score (0–100)
- SEO score (0–100)
- Top 3 opportunities per page

Desktop strategy: run only for pages where the user flagged desktop as critical.

### 4. Google Search Console (optional)

If credentials are set, pull last 28 days of data:

- Query-level: top 100 queries by clicks, their impressions, CTR, avg position.
- Page-level: top 50 landing pages by clicks with the same dimensions.
- **Declining queries:** same data for the previous 28 days; flag queries with >20% click or position drop.
- **Striking distance:** queries with avg position 8–20 (quick wins — near page 1 or top of page 2).

### 5. On-page deep dive (optional, Firecrawl)

For the top 10 pages by traffic (from GSC) or by importance (home, pricing, top landing pages — if no GSC):

Scrape each via Firecrawl and check:
- H1 count and content
- Heading hierarchy (no skips)
- Meta title and description length
- Schema types present
- Internal link count (inbound from the sample) and anchor text variety
- Outbound link count
- Image count vs. image alt count
- Word count

Cross-reference findings with the `seo-best-practices.md` rules.

### 6. Score and prioritize

Compute an overall score (0–100) as weighted average:
- SE Ranking health score (40%)
- PageSpeed average performance score (30%)
- On-page compliance rate (20%)
- GSC striking distance opportunities (10%)

Build the prioritized fix list. Sort by `(severity × traffic impact / effort)`:
- Use GSC traffic data to weight severity when available.
- Without GSC, weight home and top-nav pages higher than long-tail content.

### 7. Write the report

Write two files:
- `audits/<date>-<domain>.md` — the readable report
- `audits/<date>-<domain>.raw.json` — all raw API responses, for future diffs

Report template:

```markdown
# SEO Audit — {domain}

_Run: {YYYY-MM-DD}_
_Depth: {quick/standard/full}_
_Pages analyzed: {n}_

## Overall score: {n}/100

- SE Ranking health: {n}/100
- PageSpeed performance (avg mobile): {n}/100
- On-page compliance: {n}%
- Striking-distance opportunities: {n}

## TL;DR — top 10 actions

| # | Action | Severity | Estimated impact | Estimated effort |
|---|---|---|---|---|
| 1 | {action} | Critical | High | Low |

## Critical issues

### {issue name} — {n} pages affected
- **Why it matters:** {1 line}
- **Affected pages:** {first 5 + "…and N more"}
- **Fix:** {concrete instruction}

{repeat}

## High-severity issues
{same structure}

## Medium / low
{summarized table}

## Core Web Vitals

| Page | LCP | INP | CLS | Perf score | Top opportunity |
|---|---|---|---|---|---|
| / | 2.1s | 180ms | 0.05 | 78 | {…} |

## Google Search Console (last 28 days)

- **Top queries by clicks:** {top 10}
- **Declining queries (>20% drop):** {list}
- **Striking distance (pos 8–20):** {list with current pos and potential}

## On-page deep dive

{per-page findings for top 10}

## Appendix

- Raw data: `audits/<date>-<domain>.raw.json`
- Next audit recommended: {date + 30}
```

### 8. Print summary

One block: overall score, number of criticals, number of striking-distance opportunities, report path.

## Fallbacks

- **SE Ranking unavailable:** fall back to a Firecrawl-driven crawl of up to 25 pages + on-page rules only. Note that crawl-level issues (sitemap, robots, server errors) can't be scored. Report that clearly.
- **PageSpeed rate limited:** retry once with backoff; if still failing, skip and note.
- **No GSC:** skip query/page data, note in the report. Use importance-based prioritization instead of traffic-weighted.
- **Audit task never finishes:** save partial results and flag which steps didn't complete.

## Verification

1. Both files exist under `audits/`.
2. Report contains all main sections or explicit notes on any that were skipped.
3. TL;DR table has ≥1 action.
4. Raw JSON file contains responses from every API that was called.
5. Running the skill again in 30 days against the same domain should allow diffing the two raw JSON files to produce a progress delta.
