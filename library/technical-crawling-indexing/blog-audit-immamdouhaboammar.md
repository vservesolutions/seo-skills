---
name: "blog-audit"
description: "Full-site blog health assessment scanning all blog files for quality scores, orphan pages, topic cannibalization, stale content, and AI citation readiness. Runs canonical batch analysis before site-wide checks. Produces per-post scores and a prioritized action queue. Use when user says 'audit blog', 'blog audit', 'site audit', 'blog health',..."
category: "technical-crawling-indexing"
platforms: ["unspecified"]
platform_source: "none"
repo: "imMamdouhaboammar/prepilot-for-marketing"
repo_url: "https://github.com/imMamdouhaboammar/prepilot-for-marketing"
source: "https://github.com/imMamdouhaboammar/prepilot-for-marketing/blob/HEAD/skills/blog-audit/SKILL.md"
raw_source: "https://raw.githubusercontent.com/imMamdouhaboammar/prepilot-for-marketing/HEAD/skills/blog-audit/SKILL.md"
ref: "HEAD"
discovered_via: "github-search"
license: "MIT"
stars: 3
collected: "2026-11-12"
---

<!-- Unspecified skill · imMamdouhaboammar/prepilot-for-marketing · skills/blog-audit/SKILL.md · MIT
     Source: https://github.com/imMamdouhaboammar/prepilot-for-marketing/blob/HEAD/skills/blog-audit/SKILL.md
     Detected by: none · Regenerated on every run; edit the upstream skill, not this copy. -->

# Blog Audit

## PrePilot role

This is a deep Content, Editorial & Social specialist inside the free PrePilot for Marketing experience. Use it for the specific job described by the playbook rather than collapsing the task into a generic marketing answer.

Source lineage: claude-blog/skills/blog-audit/SKILL.md @ aec971ac511370c6216cd93776c9cf2fec97b32a
Source license: MIT

## Source dependency pack

This Skill includes safe source-relative resources under `upstream/` and explicit omission or missing-resource notes under `upstream-notes/`. Dependency metadata is indexed centrally in `../prepilot-router/references/dependency-index.json`. Copied resources: 0; linked public Skills: 0; omitted runtime helpers: 1; unresolved upstream references: 0.

## Runtime contract

- Use the current conversation, supplied files, and already available connected tools before asking for more input.
- Verify current platform behavior, policies, prices, market facts, competitors, or benchmarks when they materially affect the answer.
- Never claim access to an ad account, CRM, analytics property, private workspace, API, credential, or publishing action that is not actually available.
- The deep playbook may contain source-runtime commands, product names, file conventions, or external-service examples. Treat those as implementation notes. Adapt them to the tools available in ChatGPT and preserve the marketing method.
- The free Plugin must remain useful without paid PrePilot MCP. If connected private data or an external action would improve the job, complete the non-connected analysis first and state the missing dependency precisely.
- Do not invent performance numbers, customer evidence, quotes, tests, rankings, market sizes, account states, or competitor facts.
- Preserve the user's market, language, audience, funnel stage, business model, budget, and risk constraints throughout the work.

## Neural connections

- Domain router: `router-content-social`
- Requires: `narrative-quality-auditor` - Narrative Quality Auditor
- Feeds: `content-writer` - Content Writer
- Next best: `blog-seo-check` - Blog Seo Check
- Complements: `social-quality-auditor` - Social Quality Auditor
- Complements: `crisis-response-planner` - Crisis Response Planner
- Validates with: `campaign-audit` - Campaign Audit
- Fallback: `blog-analyze` - Blog Analyze
- Parallel: `content-quality-auditor` - Content Quality Auditor

Use these connections only when they add a distinct job. A normal request should not expand into the entire graph.

## Operating rules

1. Identify the concrete decision or deliverable this specialist owns.
2. Separate supplied evidence, verified evidence, assumptions, and unknowns before applying the playbook.
3. Follow the detailed method below at full depth. Do not replace it with a short generic checklist.
4. When another specialist owns a downstream job, hand off the relevant artifacts instead of redoing its work.
5. For public, spend-bearing, client-facing, or high-impact output, use the connected validation edge before treating the work as final.
6. Read packaged `upstream/` references when the source playbook points to them. Files under `upstream-notes/` explain resources omitted by the public-distribution safety gate or absent from the pinned source.

## Deep playbook

> Adapted from `claude-blog/skills/blog-audit/SKILL.md` under MIT. Runtime-specific instructions are subordinate to the PrePilot runtime contract above.

# Blog Audit: Full-Site Health Assessment

Performs a comprehensive blog health assessment across all posts in the project.
Scans for quality scores, orphan pages, topic cannibalization, stale content,
and AI citation readiness. Uses the canonical analyzer JSON as the score source
and produces a prioritized action queue.

## Audit Process

### Step 1: Discover Blog Files

Scan the project for all blog content files:

- Recursively glob for `.md`, `.mdx`, `.html`, `.astro`, `.svelte`, `.vue`,
  `.tsx`, and `.jsx` in common blog directories and CMS export folders
- Common paths to check:
  - `content/`
  - `posts/`
  - `blog/`
  - `src/content/`
  - `_posts/`
  - `pages/blog/`
  - `articles/`
  - `content/blog/**`
  - CMS export folders explicitly provided by the user
  - `src/pages/blog/`
- Filter out hidden, vendor, generated, and secret-adjacent paths: `.git/`,
  dot-directories, `node_modules/`, `vendor/`, `dist/`, `build/`, `.next/`,
  `coverage/`, `reports/`, generated exports, README, CHANGELOG, LICENSE,
  config files, SKILL.md, package files, `.env*`, keys, and private notes
- Report: "Found N blog files in [directories]"

If no blog files are found in standard locations, ask for an allow-listed root
or only search user-approved content directories. Do not scan the entire project
root by default.

### Step 2: Canonical Batch Analysis

Run canonical analyzer output first and use it as the source of per-post scores:

```bash
python3 upstream-notes/d9226bcd388b.md <blog-root> --batch --format json
```

Process files in chunks, cap parallel follow-up work to a small fixed number,
respect context limits, and aggregate deterministic JSON with `file`, `score`,
`categories`, `issues`, and `metadata`. Layer the site-wide checks below on top
of analyzer JSON, not separate scoring rubrics.

#### Content Quality Layer
- Score each post on the 30-point content quality scale
- Review paragraph and sentence pacing in context; lengths are descriptive,
  not universal pass/fail thresholds
- Evaluate heading structure and question-format headings
- Assess readability using persona and content type: consumer content favors
  easier bands, professional content can be moderate, and technical content may
  be denser when clarity remains high

#### SEO Optimization Layer
- Check on-page SEO elements per post:
  - Title tag length (40-60 acceptable, 50-60 ideal, preview warning only)
  - Meta description is concise and page-specific. Statistics are optional and
    must be visible and sourced
  - H1 presence and uniqueness
  - Image alt text coverage
  - Internal and external link counts
  - URL slug quality

#### Schema Validation Layer
- Detect structured data across all posts
- Validate Article/BlogPosting, Person, Organization, and BreadcrumbList schema completeness
- If FAQPage exists, validate it as optional entity markup only, not a Google rich result
- Normalize `dateModified`, `lastUpdated`, `updated`, and `lastmod`, including
  timezone-normalized generated schema, then require freshness parity
- Flag missing or malformed schema

#### Link Health Layer
- Map internal links across all posts
- Build a directed link graph
- Detect orphan pages (zero inbound internal links)
- Detect dead-end pages (zero outbound internal links)
- Check for broken internal link targets
- Recommend bidirectional link opportunities

#### Freshness Check Layer
- Read lastUpdated or dateModified from each post's frontmatter
- Calculate days since last update
- Flag freshness by content type, source or statistic age, and GSC decay, not by
  a universal day count
- Categorize by refresh priority

#### AI Readiness Layer
- Score each post for AI citation readiness
- Check whether important sections are self-contained and evidence-backed
- Evaluate purpose fit and entity clarity; question headings and FAQs are optional
- Check whether summaries and structured formats help the intended reader
- Check robots.txt, llms.txt, SSR/SSG output, JS-gated content, blocked assets,
  GPTBot, ClaudeBot, PerplexityBot, Googlebot, and Google-Extended policies

### Step 2.5: Technical Crawl and Search Performance

Add site-wide technical checks before final recommendations:

- Validate sitemap coverage, robots.txt, noindex directives, canonical tags,
  redirects, HTTP status codes, hreflang, and internal canonical consistency
- Use `blog-google` when available for Core Web Vitals, GSC queries, URL
  Inspection, indexing status, and GA4 context
- Report skipped optional checks with reasons such as
  `SKIPPED: credentials unavailable`

### Step 3: Topic Cannibalization Detection

Analyze across all posts for keyword competition:

1. Extract primary keyword/topic from each post:
   - Title text
   - H1 heading
   - Meta description
   - First paragraph
2. Normalize keywords with stopword handling, lemmatization, locale awareness,
   and intent modifiers
3. Cluster by intent using analyzer data, embeddings or explicit confidence,
   GSC query-to-URL data when available, and SERP overlap where available
4. Flag competing posts with one of these recommendations:
   - **Merge**: Combine two weak posts into one strong post
   - **Redirect**: 301 redirect the weaker post to the stronger one after
     preserving backlinks, validating a redirect map, and updating internal
     links
   - **Differentiate**: Adjust focus so posts target distinct intents

### Step 4: Orphan Page Detection

Build and analyze the internal link graph:

1. Normalize URLs against site config and sitemap, including relative links,
   same-domain absolutes, trailing slashes, generated routes, anchors, and slug
   mappings
2. Build an adjacency map: `{ page -> [pages it links to] }`
3. Build a reverse map: `{ page -> [pages linking to it] }`
4. Identify orphan pages: posts with zero inbound internal links
5. Identify dead-end pages: posts with zero outbound internal links
6. For each orphan, recommend 2-3 existing posts that should link to it
   based on topic relevance

### Step 5: Stale Content Detection

Audit content freshness across all posts:

1. Read frontmatter fields: `lastUpdated`, `dateModified`, `date`, `updated`
2. Calculate days since last update for each post
3. Categorize by refresh priority:
   - **High**: Volatile topic, stale sources or statistics, or GSC decay
   - **Medium**: Evergreen topic with aging examples, links, or screenshots
   - **Low**: Recently validated or stable reference content
4. Estimate refresh effort per post:
   - Light refresh: Update statistics, check links (1-2 hours)
   - Moderate refresh: Rewrite sections, add new data (3-4 hours)
   - Heavy refresh: Full rewrite recommended (5+ hours)

### Step 6: Generate Site-Wide Report

Aggregate all results into a comprehensive report:

#### Summary Dashboard
```
## Blog Audit Report

**Audit Date:** [date]
**Total Posts:** N
**Average Score:** XX/100

### Health Overview
| Metric | Count |
|--------|-------|
| Posts Scoring 90+ (Excellent) | N |
| Posts Scoring 70-89 (Good) | N |
| Posts Scoring 50-69 (Needs Work) | N |
| Posts Scoring <50 (Poor) | N |
| Orphan Pages | N |
| Dead-End Pages | N |
| Cannibalization Issues | N |
| Stale or Decaying Content | N |
```

#### Per-Post Table
```
### Per-Post Scores
| Post | Score | Content | SEO | E-E-A-T | Technical | AI Citation | Issues |
|------|-------|---------|-----|---------|-----------|-------------|--------|
| [filename] | XX/100 | X/30 | X/25 | X/15 | X/15 | X/15 | [count] |
```

#### Prioritized Action Queue
```
### Prioritized Action Queue (Lowest Score First)
| Priority | Post | Score | Top Issue | Recommended Action |
|----------|------|-------|-----------|--------------------|
| 1 | [file] | XX | [issue] | [action] |
| 2 | [file] | XX | [issue] | [action] |
```

#### Cannibalization Report
```
### Topic Cannibalization
| Keyword | Competing Posts | Recommendation |
|---------|----------------|----------------|
| [keyword] | post-a.md, post-b.md | Merge / Redirect / Differentiate |
```

#### Orphan Pages
```
### Orphan Pages (No Inbound Links)
| Page | Inbound Links | Recommended Link Sources |
|------|---------------|--------------------------|
| [file] | 0 | post-a.md, post-b.md, post-c.md |
```

#### Stale Content
```
### Stale Content
| Post | Last Updated | Days Stale | Priority | Refresh Effort |
|------|-------------|------------|----------|----------------|
| [file] | [date] | [N] | High/Med/Low | Light/Moderate/Heavy |
```

### Step 7: Save Report

Save timestamped Markdown and JSON exports under `reports/`, for example
`reports/blog-audit-YYYY-MM-DD.md` and `reports/blog-audit-YYYY-MM-DD.json`.
Do not overwrite a previous audit report.

After saving, inform the user:
- Report locations: `[project-root]/reports/blog-audit-YYYY-MM-DD.md` and
  `[project-root]/reports/blog-audit-YYYY-MM-DD.json`
- Summary of findings (total posts, average score, critical issues count)
- Suggest running `/blog analyze <file>` on the lowest-scoring post first
- Suggest running `/blog flow optimize` for AI-citation SEO checks on key posts

## Cross-reference

For evidence-led audit prompts beyond this site-wide health pass, see `/blog flow optimize` (visibility, CTR, schema, extraction audits) and `/blog flow win` (dual-surface scorecard, conversion audit).

## Output contract

- Deliver the actual artifact, analysis, decision, or plan requested by the user, not a summary of this Skill.
- Keep evidence and assumptions distinguishable when they affect the recommendation.
- Include concrete next actions, decision rules, or validation steps when the playbook implies them.
- Preserve useful tables, frameworks, examples, scoring models, templates, and checklists from the deep playbook when they improve the requested output.

## Quality gate

- The result addresses this specialist's exact job rather than giving broad marketing advice.
- Strong claims have evidence, a source, or explicit uncertainty.
- Recommendations respect channel, market, funnel, economic, and operational constraints.
- No unavailable tool, account action, or live data is represented as completed.
- The handoff names the next specialist only when another distinct marketing job remains.

## Handoff

Return the completed Blog Audit output plus only the evidence, assumptions, and decisions needed by the selected `feeds`, `next_best`, or `validates` connection. Do not repeat upstream analysis unless new evidence changes it.
