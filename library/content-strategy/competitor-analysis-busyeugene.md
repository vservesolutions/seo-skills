---
name: "competitor-analysis"
description: "Use when the user wants a content marketing, SEO, and backlink competitive analysis. Profiles up to 10 competitors on content strategy, organic rankings, top pages, backlink profile, and voice/positioning, then writes a prioritized report with gaps to exploit."
category: "content-strategy"
platforms: ["claude-code"]
platform_source: "declared+detected"
repo: "busyeugene/content-marketing-skills"
repo_url: "https://github.com/busyeugene/content-marketing-skills"
source: "https://github.com/busyeugene/content-marketing-skills/blob/HEAD/competitor-analysis/SKILL.md"
raw_source: "https://raw.githubusercontent.com/busyeugene/content-marketing-skills/HEAD/competitor-analysis/SKILL.md"
ref: "HEAD"
discovered_via: "github-search"
license: "MIT"
stars: 1
collected: "2026-11-12"
---

<!-- Claude Code skill · busyeugene/content-marketing-skills · competitor-analysis/SKILL.md · MIT
     Source: https://github.com/busyeugene/content-marketing-skills/blob/HEAD/competitor-analysis/SKILL.md
     Detected by: declared+detected · Regenerated on every run; edit the upstream skill, not this copy. -->

# Competitor Analysis

Deep-profile up to 10 competitors across content, SEO, and backlinks. Output is a single markdown report that identifies gaps the user's brand can exploit and strengths to defend against.

## Setup

Strongly recommended:
- **Ahrefs MCP** — the official remote MCP server at `https://api.ahrefs.com/mcp/mcp`. Connect via Claude Code's MCP settings (OAuth, paid Ahrefs plan required). Use Site Explorer tools for organic keywords, top pages, backlinks, referring domains, organic competitors, and content gap. The archived npm package (`github.com/ahrefs/ahrefs-mcp-server`) is deprecated.
- `FIRECRAWL_API_KEY` — scrape competitor blogs, landing pages, pricing, about pages.

Optional:
- `SE_RANKING_API_KEY` — secondary rankings data and alerts.
- `TAVILY_API_KEY` or `EXA_API_KEY` — surface mentions and brand signals not in Ahrefs.
- `JINA_API_KEY` — higher Jina Reader quota for fallback scraping.

## Inputs

1. **Own domain** — the user's own site, used as the baseline for gap analysis.
2. **Competitor list** — up to 10 domains. If the user doesn't know, call the Ahrefs MCP **Site Explorer → organic competitors** tool for suggestions and let the user confirm.
3. **Analysis angle** — one or more of:
   - Content strategy (topics, cadence, formats)
   - Organic SEO performance
   - Backlinks and authority
   - Positioning and voice
   - Pricing and packaging
4. **Depth** — `fast` (top-level metrics only), `standard` (metrics + top 20 pages each), `deep` (everything + full blog scrape).

Use `AskUserQuestion` for analysis angles (multi-select) and depth.

## Process

### 1. Validate competitors

Ensure each domain is reachable. Drop any that 404 or block scraping; report which were dropped.

### 2. Metrics block (Ahrefs MCP)

For each competitor, call Site Explorer tools:
- **Overview** → Domain Rating (DR), organic traffic, organic keyword count, referring-domain count
- **Top pages** → top 20 organic pages with keyword, position, URL, traffic
- **Organic keywords** → top 100 for overlap analysis
- **Refdomains** → top 20 referring domains
- **All-backlinks** (filtered last 30 days) → new backlinks count
- **Paid keywords** (if exposed) → if running ads

Also call **Site Explorer → content gap** with own domain vs. all competitors. Capture keywords they all rank for that the user doesn't.

Exact MCP tool names vary by server version — enumerate once at session start and cache the mapping.

### 3. Content audit (Firecrawl)

For each competitor, fetch the blog index via the scraping fallback chain:
- Try `{domain}/blog`, `/resources`, `/learn`, `/insights`, `/news`.
- Parse the sitemap at `/sitemap.xml` as a fallback to enumerate posts.

For `standard` depth: scrape up to 20 recent posts per competitor. For `deep`: scrape up to 100.

For each post, extract:
- Title, URL, publish date, author
- Word count
- Heading outline
- Format (how-to / listicle / opinion / case study / news / comparison / tool page)
- Top entities (top 15 content words minus stopwords)
- Internal link count
- Whether it has a CTA, and what kind (demo, lead magnet, newsletter)

Aggregate per competitor:
- Publishing cadence (posts/month over the last 6 months)
- Format mix (%)
- Median word count
- Topic clusters (group posts by dominant entity overlap)
- Top-performing post (cross-reference with Ahrefs "Top pages")

### 4. Positioning and voice snapshot

For each competitor, scrape:
- Home page
- Pricing page (if public)
- About / company page
- One featured case study

From these, extract:
- Primary claim (the one-sentence promise in the hero)
- ICP language (who they say they're for)
- Voice attributes (observed, not claimed — derive from sentence length, vocabulary, formality)
- Proof strategy (logos, numbers, stories, awards)
- Pricing model (free/freemium/quote/tiered — note if hidden)

### 5. Backlink profile (Ahrefs)

For each competitor, capture:
- Top 20 referring domains by traffic
- Top 20 pages by referring domains
- Most common anchor texts
- Recently acquired backlinks (last 30 days)

Look for patterns: guest posts, podcast mentions, roundups, free tools, data studies. These are the backlink plays the competitor is running right now.

### 6. Gap analysis

Combine everything into gap categories:

- **Keyword gaps** — terms competitors rank for, user doesn't. Sorted by volume × relevance.
- **Topic gaps** — topic clusters competitors cover heavily that the user under-covers.
- **Format gaps** — formats competitors use that the user doesn't (e.g. 3 competitors have interactive calculators, user has none).
- **Backlink gaps** — referring domains linking to ≥3 competitors but not to the user. These are realistic outreach targets.
- **Positioning gaps** — unmet ICP segments or claims no one is making.

### 7. Strengths to defend

The inverse: where the user is ahead. Flag top 10 keywords where the user ranks top 3 and competitors are within striking distance — these need defense.

### 8. Write the report

Write to `competitors/<YYYY-MM-DD>-report.md`:

```markdown
# Competitor Analysis — {own domain}

_Run: {YYYY-MM-DD}_
_Competitors analyzed: {n}_
_Depth: {fast/standard/deep}_

## Executive summary

- **Biggest gap to close:** {one line}
- **Biggest opportunity:** {one line}
- **Biggest threat:** {one line}
- **Top 3 recommended plays:** {bullets}

## Competitors at a glance

| Domain | DR | Organic traffic | Keywords | Ref domains | Posts/mo | Median word count | Primary claim |
|---|---|---|---|---|---|---|---|
| {domain} | 72 | 120k | 18k | 3.2k | 12 | 1,800 | {one line} |

## Per-competitor deep dive

### {domain}

**Positioning**
- Primary claim: {…}
- ICP language: {…}
- Voice: {observed attributes}
- Proof strategy: {…}
- Pricing: {…}

**SEO**
- DR / traffic / kw count
- Top 10 organic pages (table)
- New backlinks last 30 days: {n}

**Content**
- Cadence: {n}/mo
- Format mix: {breakdown}
- Topic clusters: {list}
- Best-performing post: [{title}]({url}) — {traffic}

**Recent plays** (backlink + content patterns from the last 30 days):
- {play 1}
- {play 2}

{repeat per competitor}

## Gap analysis

### Keyword gaps — top 30
| Keyword | Volume | KD | Competitors ranking | Recommendation |
|---|---|---|---|---|

### Topic gaps
- {cluster} — {n} competitors cover, 0 user posts. Priority: high.

### Format gaps
- {format} — used by {n} competitors.

### Backlink gaps — top 30 targets
| Referring domain | DR | Links to competitors | Outreach angle |

### Positioning gaps
- {observation}

## Strengths to defend

| Keyword | Our position | Closest competitor | Their trajectory |
|---|---|---|---|

## Recommended plays (90-day)

1. {play} — owner, effort, expected impact
2. …

## Sources

- Ahrefs metrics and gap analysis
- Firecrawl blog + positioning scrapes
- GSC / SE Ranking (if configured)
- Tavily/Exa brand mentions (if configured)
```

Also save raw data to `competitors/<YYYY-MM-DD>-raw.json` for future diffs.

### 9. Print summary

One block: number of competitors analyzed, biggest gap, biggest threat, report path.

## Fallbacks

- **No Ahrefs:** drop metrics block; use Firecrawl alone for content audit + positioning. Clearly mark the report as "content-only" and skip gap analysis that requires keyword data.
- **Competitor blocks scraping:** fall back to Jina → Playwright; if all three fail, document which competitor was skipped and why.
- **Ahrefs content gap endpoint unavailable:** compute gap manually from keyword lists (intersection minus own).
- **Deep depth times out:** save partial results and continue.

## Verification

1. Report file exists with every competitor covered or explicitly marked as skipped.
2. At-a-glance table has one row per competitor.
3. At least one item in each of: keyword gaps, topic gaps, backlink gaps.
4. Raw JSON file present alongside the report.
5. Re-running in 30 days should allow diffing the two raw files to produce a progress delta.
