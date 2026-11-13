---
name: "content-calendar"
description: "Use when the user wants to build a quarterly or monthly content calendar. Scrapes the user's own blog, profiles competitor topics, runs keyword gap analysis, and produces a prioritized list of articles to write with briefs pre-seeded."
category: "keyword-research"
platforms: ["claude-code"]
platform_source: "declared+detected"
repo: "busyeugene/content-marketing-skills"
repo_url: "https://github.com/busyeugene/content-marketing-skills"
source: "https://github.com/busyeugene/content-marketing-skills/blob/HEAD/content-calendar/SKILL.md"
raw_source: "https://raw.githubusercontent.com/busyeugene/content-marketing-skills/HEAD/content-calendar/SKILL.md"
ref: "HEAD"
discovered_via: "github-search"
license: "MIT"
stars: 1
collected: "2026-11-13"
---

<!-- Claude Code skill · busyeugene/content-marketing-skills · content-calendar/SKILL.md · MIT
     Source: https://github.com/busyeugene/content-marketing-skills/blob/HEAD/content-calendar/SKILL.md
     Detected by: declared+detected · Regenerated on every run; edit the upstream skill, not this copy. -->

# Content Calendar

Build a data-backed content calendar. Scrapes the user's own blog to understand current coverage, profiles competitor topics, pulls keyword gap data from Ahrefs, optionally layers in GSC/GA4 performance signals, then produces a prioritized list of articles to write over the next quarter.

## Setup

Recommended:
- **Ahrefs MCP** — the official remote MCP server at `https://api.ahrefs.com/mcp/mcp`. Connect via Claude Code's MCP settings (OAuth, paid Ahrefs plan required). Used here for keyword volume, difficulty, and content-gap data via Keywords Explorer and Site Explorer.
- `FIRECRAWL_API_KEY` — crawl own blog and competitor sitemaps.

Optional:
- `GSC_SERVICE_ACCOUNT_JSON` + `GSC_SITE_URL` — declining pages to refresh, striking-distance queries to push.
- `GA4_SERVICE_ACCOUNT_JSON` + `GA4_PROPERTY_ID` — top-performing existing content to cluster around and repurpose.
- `SE_RANKING_API_KEY` — alternative rankings data source.

## Inputs

1. **Own blog URL** — root or blog index.
2. **Competitor list** — 3–10 domains (can reuse the list from a prior `competitor-analysis` run if present at `competitors/<date>-raw.json`).
3. **Calendar horizon** — one month, quarter, or half year. Default quarter.
4. **Cadence** — posts per week or month the user plans to publish.
5. **Focus areas** — optional thematic pillars (e.g. "sales enablement, RevOps, onboarding"). Inherit from `editorial-guidelines.md` if the user has listed content pillars there.
6. **Include refreshes?** — default Y. Reuse GSC declining-pages data if configured.

Use `AskUserQuestion` for horizon and refreshes Y/N.

## Process

### 1. Inventory the user's own blog

Scrape the user's blog via the Firecrawl → Jina → Playwright chain:
- Pull the sitemap if available; otherwise crawl the blog index.
- For each post, extract: URL, title, H1, publish date, updated date, primary topic/entity cluster, rough word count.

Cluster existing posts into topics using entity overlap. Produce a map of `{cluster: [posts]}`.

### 2. Inventory the competitors

Reuse `competitors/<latest>-raw.json` if present. Otherwise crawl each competitor blog via the same chain and build the same cluster map.

Flag topics where:
- Competitors have ≥3 posts and the user has 0 → **white-space topic**.
- Competitors have ≥3 posts and the user has 1 → **under-covered topic**.
- User has ≥3 posts, competitors have 0–1 → **user-dominated topic** (defend).

### 3. Keyword gap (Ahrefs MCP)

Call the **Site Explorer → content gap** tool: own domain vs competitors. Capture keywords all competitors rank for but the user doesn't. Enrich each with volume, KD, and parent topic via **Keywords Explorer → overview**.

Group keywords into topic clusters. Each cluster becomes a candidate article with:
- Suggested primary keyword (highest-volume with KD in range)
- 5–10 secondary keywords
- Estimated traffic ceiling (sum of volumes × conservative CTR)

### 4. Performance signals (optional)

**GSC**:
- **Striking distance** (pos 8–20): convert each into either a new post or an optimization of an existing one.
- **Declining queries**: find the landing page, suggest a refresh.
- **Impressions but no clicks** (high impressions, CTR <1%): meta/title rewrite candidates.

**GA4**:
- Top 20 pages by engaged sessions in the last 90 days → suggest a cluster expansion around each.
- Pages with high entrance but high exit rate → UX + internal-link fixes.

### 5. Score and prioritize

For each candidate article, compute a score:

```
score = (volume × relevance_to_pillars × brand_fit)
      / (kd × effort_estimate)
      × traffic_performance_multiplier
```

Where:
- `volume` — Ahrefs monthly search volume
- `relevance_to_pillars` — 0.5 if off-pillar, 1.0 on-pillar, 1.3 on-pillar + in white-space topic
- `brand_fit` — 1.0 default, 0.7 if the topic doesn't match the brand's ICP
- `kd` — Ahrefs difficulty, floored at 5
- `effort_estimate` — 1 for comparison pages and listicles, 2 for deep how-to, 3 for original-research pieces
- `traffic_performance_multiplier` — 1.2 if there's GSC striking-distance overlap, 1.0 otherwise

Rank candidates by score. Split into:
- **Must-write** (top N to fill cadence)
- **Nice-to-write** (next N)
- **Refresh queue** (existing posts to update)

### 6. Sequence the calendar

Assign each must-write entry to a week based on:
- Cadence (e.g. 2 posts/week)
- Topic clustering (don't publish two posts from the same cluster in the same week)
- Seasonality if the user flagged any
- Any known product launches or events the user mentioned

### 7. Pre-seed briefs

For each must-write entry, create a lightweight seed in `briefs/<slug>.stub.md` with:
- Primary keyword
- Secondary keywords
- Estimated volume and KD
- Topic cluster
- Suggested title
- One-line angle

The user can later run the `content-brief` skill against each stub to expand it into a full brief.

### 8. Write the calendar file

Write to `calendar/<horizon>-<YYYY-MM>.md`:

```markdown
# Content Calendar — {horizon}

_Generated: {YYYY-MM-DD}_
_Own blog: {url}_
_Competitors: {n}_
_Cadence: {posts}/week_
_Horizon: {start} → {end}_

## Summary

- **New articles planned:** {n}
- **Refreshes planned:** {n}
- **Estimated traffic ceiling:** {n}/month
- **Top topic clusters to win:** {list}

## Must-write

| Week | Date | Title | Primary kw | Volume | KD | Cluster | Score | Brief stub |
|---|---|---|---|---|---|---|---|---|
| W1 | 2026-04-15 | {title} | {kw} | 2,400 | 32 | {cluster} | 48 | `briefs/{slug}.stub.md` |

## Nice-to-write (backlog)

| Title | Primary kw | Volume | KD | Why it didn't make the cut |
|---|---|---|---|---|

## Refresh queue

| Existing URL | Declining query | Current pos | Potential | Recommended change |
|---|---|---|---|---|

## Cluster coverage map

| Cluster | Existing posts | Planned | Competitor posts | Gap |
|---|---|---|---|---|

## Notes

- White-space topics: {list}
- Threats (user-dominated topics where competitors are gaining): {list}
- Sources used: Ahrefs {Y/N}, Firecrawl {Y/N}, GSC {Y/N}, GA4 {Y/N}
```

Also save raw scoring data to `calendar/<horizon>-<YYYY-MM>.raw.json`.

### 9. Print summary

One block: N articles planned, N refreshes queued, top cluster, path to calendar, path to stubs directory.

## Fallbacks

- **No Ahrefs MCP:** skip keyword scoring; rank candidates by (relevance × competitor_coverage_count). Clearly mark the calendar as "content-only prioritization" in the header.
- **No GSC / GA4:** skip performance signals; rely entirely on gap analysis. The traffic multiplier becomes 1.0 for everything.
- **Competitor blog scrapes time out:** work with partial competitor coverage; list which competitors were skipped.
- **No editorial guidelines pillars:** ask the user directly or derive pillars from the cluster analysis of their existing blog.

## Verification

1. Calendar file exists.
2. Must-write table has one row per planned slot in the horizon (no gaps).
3. Every must-write entry has a matching stub file under `briefs/`.
4. Raw JSON file present.
5. If re-run a month later, diffing the raw files should show what moved from backlog to must-write and which refreshes were completed.
