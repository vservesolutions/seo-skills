---
name: "search-console-analysis"
description: "Use when the user shares Google Search Console data or exports, or asks to analyze GSC performance, find quick-win keywords, improve CTR, explain a traffic drop, check indexing (Pages report) issues, or connect Claude to Search Console. Turns GSC data into prioritized actions and explains data limits honestly."
category: "analytics-measurement"
platforms: ["claude-code"]
platform_source: "declared"
repo: "AmmarBabbar/seo-skills"
repo_url: "https://github.com/AmmarBabbar/seo-skills"
source: "https://github.com/AmmarBabbar/seo-skills/blob/HEAD/skills/search-console-analysis/SKILL.md"
raw_source: "https://raw.githubusercontent.com/AmmarBabbar/seo-skills/HEAD/skills/search-console-analysis/SKILL.md"
ref: "HEAD"
discovered_via: "github-search"
license: "MIT"
stars: 0
collected: "2026-11-14"
---

<!-- Claude Code skill · AmmarBabbar/seo-skills · skills/search-console-analysis/SKILL.md · MIT
     Source: https://github.com/AmmarBabbar/seo-skills/blob/HEAD/skills/search-console-analysis/SKILL.md
     Detected by: declared · Regenerated on every run; edit the upstream skill, not this copy. -->

# Search Console Analysis

Google Search Console is the most accurate SEO data source a site owner has: it is Google's own data about the site. Third-party tools estimate; GSC measures. You turn GSC data into clear actions.

## Getting the data

Pick what fits the user:
1. **Manual export** (free, simple): Performance > Search results > last 3 months, export Queries, Pages, Countries, Devices, Dates. For comparisons, export two periods. Refresh about every 7 days.
2. **MCP connection** (free, technical): an open-source GSC MCP server (e.g. `mcp-gsc`) needs a Google Cloud project, the Search Console API enabled, and OAuth or service-account credentials stored safely. Never paste credential JSON into chat or commit it to a repo.
3. **Paid connectors**: one-click data connectors exist if the user prefers not to set up Google Cloud.

## Data caveats (always mention the relevant ones)

- Some queries are anonymized for privacy, so query totals are lower than page totals
- Average position is an average across all impressions, not one fixed rank
- Data is kept for 16 months
- Recent days can be incomplete

## Analyses

### 1. Quick wins
Queries / pages in positions 4-20 with meaningful impressions. Action: on-page improvements, internal links, content additions.

### 2. CTR opportunities
High impressions, low CTR compared with similar positions on the same site. Action: rewrite titles and meta descriptions, check rich results and SERP features.

### 3. Declines
Compare periods (last 3 months vs previous 3 months, plus year over year for seasonality). Find pages and queries that lost the most clicks. Hand off to `content-refresh`.

### 4. Cannibalization
Queries with impressions on 2 or more URLs. Hand off to `keyword-cannibalization`.

### 5. Content gaps
Queries with impressions where no page targets the topic directly. New page or section candidates.

### 6. Branded vs non-branded
Split by brand terms. Non-branded growth shows SEO progress.

### 7. Local view
Queries containing city or neighborhood names, grouped by city.

### 8. Indexing (Pages report)
Explain each status and the fix: Crawled - currently not indexed, Discovered - currently not indexed, Duplicate without user-selected canonical, Alternate page with proper canonical, Excluded by noindex, Soft 404, Not found (404), Redirect error.

### 9. Experience
Core Web Vitals report (field data) and HTTPS report.

## Output format

```markdown
# GSC Analysis: {property} ({date range})

## Key numbers (from the data)
| Metric | Period A | Period B | Change |

## Top 10 actions
| # | Action | Pages / queries | Evidence | Expected effect | Effort |

## Details per analysis
```

## Rules

- Only report numbers that are in the data. Show the date range for every number.
- If the export is incomplete (e.g. only 1,000 rows), say so.

## Related skills

`content-refresh`, `keyword-cannibalization`, `on-page-seo`, `seo-reporting`, `technical-seo`
