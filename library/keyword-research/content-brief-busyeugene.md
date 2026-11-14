---
name: "content-brief"
description: "Use when the user wants a content brief, SEO outline, SERP analysis, or blog post plan for a target keyword. Produces a full brief (outline, entities, PAA, competitor summary, unique angle) ready for a writer or the blog-post skill."
category: "keyword-research"
platforms: ["claude-code"]
platform_source: "declared+detected"
repo: "busyeugene/content-marketing-skills"
repo_url: "https://github.com/busyeugene/content-marketing-skills"
source: "https://github.com/busyeugene/content-marketing-skills/blob/HEAD/content-brief/SKILL.md"
raw_source: "https://raw.githubusercontent.com/busyeugene/content-marketing-skills/HEAD/content-brief/SKILL.md"
ref: "HEAD"
discovered_via: "github-search"
license: "MIT"
stars: 1
collected: "2026-11-14"
---

<!-- Claude Code skill · busyeugene/content-marketing-skills · content-brief/SKILL.md · MIT
     Source: https://github.com/busyeugene/content-marketing-skills/blob/HEAD/content-brief/SKILL.md
     Detected by: declared+detected · Regenerated on every run; edit the upstream skill, not this copy. -->

# Content Brief

Turn a target keyword into a full SEO content brief. Output is a single markdown file under `briefs/` that the `blog-post` skill or a human writer can execute directly.

## Setup

Required (at least one search data source):
- **Ahrefs MCP** (strongly preferred) — the official remote MCP server at `https://api.ahrefs.com/mcp/mcp` (Streamable HTTP). Connect via Claude Code's MCP settings, not via an env var — authentication is an OAuth flow that mints an MCP-scoped key. Requires a paid Ahrefs plan (Lite or higher). Exposes ~42 tools grouped under Keywords Explorer, Site Explorer, Rank Tracker, and Batch Analysis. The old local npm server (`github.com/ahrefs/ahrefs-mcp-server`) is archived — don't use it.
- `FIRECRAWL_API_KEY` — SERP scraping and competitor content extraction. Required if Ahrefs MCP isn't connected.

Optional:
- `TAVILY_API_KEY` or `EXA_API_KEY` — fresh research layer for angles Ahrefs doesn't surface.
- `YOUTUBE_API_KEY` — pull transcripts from YouTube results ranking in the SERP.
- `JINA_API_KEY` — higher free-tier for the Jina Reader fallback.

See `{SKILL_BASE}/../_shared/firecrawl-jina-playwright-helpers.md` for the scraping fallback chain.

## Inputs

Ask the user for:

1. **Target keyword** (required).
2. **Search intent override** (optional — auto-detected from SERP otherwise).
3. **Target audience / ICP** — inherited from `editorial-guidelines.md` if present; otherwise ask.
4. **Word-count target** — default: median of top 10 SERP results ±20%.
5. **Refresh an existing URL?** — if yes, load the current page and diff against the brief so the user sees what to add vs. what to keep.
6. **Own-site sitemap URL** (optional) — enables internal-link suggestions.

Use `AskUserQuestion` for intent override (Informational / Commercial / Comparison / Transactional) and for refresh-vs-new.

## Process

### 1. Load context

- Read `editorial-guidelines.md` at project root if present.
- Read `{SKILL_BASE}/../_shared/seo-best-practices.md` to remind yourself of the rules this brief must enforce.

### 2. Keyword data (Ahrefs MCP)

If the Ahrefs MCP server is connected, call its tools in this order:

- **Keywords Explorer → overview** — volume, KD, global volume, parent topic, SERP features.
- **Keywords Explorer → matching terms / related terms / search suggestions** — top 50 related keywords and candidate PAA questions (Ahrefs doesn't expose a dedicated PAA tool; matching/related terms is the closest equivalent).
- **Rank Tracker → SERP overview** (or the equivalent SERP tool exposed by the MCP) — top 10 ranking URLs with DR, traffic, and top keyword per URL.

Exact tool names may vary by MCP server version. Enumerate the available tools once at session start and map them to these roles; cache the mapping.

If Ahrefs MCP isn't connected, use Firecrawl's `/v1/search` endpoint with the keyword to get the top 10 URLs and note that volume/KD are unavailable.

### 3. Scrape top 10 SERP results

For each of the top 10 URLs, use the Firecrawl → Jina → Playwright chain to fetch clean markdown. For each page, extract:

- Full H1 and H2/H3 outline
- Word count
- Publish date and last-updated date
- Author (if present)
- Top 20 content words excluding stopwords (for entity extraction)
- Outbound link count
- Schema type (Article, HowTo, FAQPage, etc.)

### 4. Classify search intent

Auto-classify based on SERP composition:
- ≥6 listicles or how-to articles → Informational
- ≥4 comparison/review pages → Commercial investigation
- ≥4 product/category pages → Transactional
- Mixed → Informational with commercial sub-intent

Respect the user's override if they provided one.

### 5. Entity and PAA consolidation

- **Entities to cover:** take the union of top-20 content words across all 10 competitors, filter to terms appearing in ≥4 competitors, rank by frequency. Present top 15.
- **PAA:** from Ahrefs questions if available; otherwise infer from competitor H2s that are phrased as questions.

### 6. Optional research layer

If `TAVILY_API_KEY` or `EXA_API_KEY` is set, run a research query like `"{keyword} site:*.edu OR site:*.gov OR recent studies"` to surface fresh data points, original research, or contrarian views the Ahrefs SERP doesn't include. List any findings as "Unique angle candidates".

If a YouTube video appears in the top 10 and `YOUTUBE_API_KEY` is set, fetch the transcript and extract 3–5 unique points from it.

### 7. Internal link candidates

If the user provided a sitemap URL:
- Fetch and parse the sitemap.
- Score each URL by overlap of its slug/title against the target keyword's semantic field.
- Return top 5 internal link candidates with suggested anchor text.

### 8. Synthesize the outline

Propose:
- **3 H1 options** (one descriptive, one listicle, one contrarian).
- **TL;DR draft** (5 bullets).
- **Section outline:** H2s with sub-H3s where appropriate, each tagged with a target word count that sums to the overall target.
- **Entities section** (must-cover list).
- **PAA section** (must-answer list).
- **Unique angle:** one thing none of the top 10 competitors cover, based on the research layer or your own analysis.
- **Internal link targets** (if sitemap provided).
- **Meta:** title tag and meta description drafts following `seo-best-practices.md` rules.

### 9. Write the file

Write to `briefs/<kw-slug>.md` using the template below. Slug = kebab-case of the keyword.

## Output template

```markdown
---
keyword: "{target keyword}"
intent: "{informational|commercial|comparison|transactional}"
volume: {n}
kd: {n}
target_word_count: {n}
created: {YYYY-MM-DD}
refresh_of: "{url or null}"
---

# Brief: {target keyword}

## Meta

- **Volume:** {n}/mo
- **KD:** {n}
- **Intent:** {classified intent} ({1-line rationale})
- **Target length:** {n} words (median of top 10: {m})
- **Top SERP features:** {PAA, video, featured snippet, …}

## Title options

1. {descriptive}
2. {listicle}
3. {contrarian}

**Meta description:** {140–160 chars}

## TL;DR

- {bullet 1}
- {bullet 2}
- {bullet 3}
- {bullet 4}
- {bullet 5}

## Outline

### H2: {section 1} — {word count}
- {sub-point or H3}
- {sub-point}

### H2: {section 2} — {word count}
- …

{…}

**Total:** {sum} words

## Entities to cover

| Entity | Frequency across top 10 | Notes |
|---|---|---|
| {entity} | {n}/10 | |

## PAA — must answer

1. {question}
2. {question}

## Internal link targets

- [{anchor}]({url}) — {why}

## Unique angle

{One thing no competitor covers, with source.}

## Competitor summary

| # | URL | DR | Words | Format | Published | Gap we can exploit |
|---|---|---|---|---|---|---|
| 1 | {url} | {n} | {n} | {listicle/how-to/…} | {date} | {gap} |

## Sources used

- Ahrefs keyword data: {Y/N}
- Firecrawl SERP: {Y/N}
- Tavily/Exa research: {Y/N}
- YouTube transcripts: {Y/N}
- Own sitemap: {Y/N}
```

## Fallbacks

- **No Ahrefs MCP:** use Firecrawl `/search` for SERP; mark volume/KD as "unavailable"; skip related-keyword block.
- **No Firecrawl:** fall through to Jina, then Playwright per the shared helper.
- **No scraper at all:** refuse and tell the user to set `FIRECRAWL_API_KEY` or install Playwright.
- **YouTube transcript unavailable:** skip; don't block the brief.
- **Sitemap fetch fails:** skip internal link section; note in output.

## Verification

1. `briefs/<slug>.md` exists.
2. Outline contains ≥5 H2s summing to within ±20% of the target word count.
3. Entities table has ≥10 rows.
4. PAA section has ≥3 questions.
5. Competitor table has N rows where N = min(10, available SERP results).
6. Unique-angle section is non-empty.
7. A Sources-used block at the bottom reports which data sources actually fired.
