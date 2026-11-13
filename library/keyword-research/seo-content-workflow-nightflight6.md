---
name: "seo-content-workflow"
description: "Research, plan, create, refresh, and review search-oriented content by connecting real search intent, current SERP evidence when available, useful original information, structured briefs, metadata, and final SEO content QA. Use for SEO content briefs, SERP-informed article creation, search-intent refreshes, on-page content SEO reviews, and metadata within a broader content workflow. Do not use as the primary skill for deep user-question research, rank tracking, keyword monitoring, technical SEO audits, robots.txt, sitemaps, canonical or indexing implementation, pure keyword brainstorming…"
category: "keyword-research"
platforms: ["unspecified"]
platform_source: "none"
repo: "Nightflight6/open-agent-skills"
repo_url: "https://github.com/Nightflight6/open-agent-skills"
source: "https://github.com/Nightflight6/open-agent-skills/blob/HEAD/skills/en/seo-content-workflow/SKILL.md"
raw_source: "https://raw.githubusercontent.com/Nightflight6/open-agent-skills/HEAD/skills/en/seo-content-workflow/SKILL.md"
ref: "HEAD"
discovered_via: "github-search"
license: "MIT"
stars: 1
collected: "2026-11-13"
---

<!-- Unspecified skill · Nightflight6/open-agent-skills · skills/en/seo-content-workflow/SKILL.md · MIT
     Source: https://github.com/Nightflight6/open-agent-skills/blob/HEAD/skills/en/seo-content-workflow/SKILL.md
     Detected by: none · Regenerated on every run; edit the upstream skill, not this copy. -->

# SEO Content Workflow

<!-- parity: purpose -->
## Purpose

Create useful search-oriented content from defensible demand and evidence. Prefer search intent over keyword repetition, original value over SERP imitation, evidence over plausible claims, and user value over search-engine-first writing.

<!-- parity: guardrails -->
## Non-negotiable guardrails

- Never invent current SERP observations, search volume, rankings, competitor facts, statistics, prices, specifications, quotations, studies, or user sentiment.
- Never promise rankings, traffic, clicks, indexing, or search or AI visibility.
- Do not implement a crawler, rank tracker, keyword-density system, robots.txt, sitemap, canonical, or indexing change.
- Follow host tool, network, approval, authentication, privacy, and automated-query policies. Obey explicit no-browse instructions.
- Preserve source files unless the user explicitly authorizes editing. Do not expose private inputs, internal strategy, or drafting residue in reader-facing copy.
- Treat target length as a content constraint, not a ranking factor. Never insert a term solely to increase frequency.

<!-- parity: mode-routing -->
## Route the mode

Infer the least expansive mode that satisfies the request:

1. **brief:** perform applicable intent and lightweight SERP research, return a Search Research Snapshot and SEO Content Brief, and do not draft the article.
2. **create:** create a new search-oriented content asset, metadata, and remaining verification items.
3. **refresh:** diagnose and update an existing article; preserve useful material and avoid an unnecessary full rewrite.
4. **review:** return SEO content diagnosis and prioritized recommendations without unnecessary rewriting.

Follow an explicit mode or output requirement first. Ask only when ambiguity would materially change the allowed deliverable.

<!-- parity: input-model -->
## Establish inputs

Determine or reasonably infer:

- topic, audience, language, market, and target search environment;
- primary query, content or page type, content goal, and publishing site or channel;
- selected mode.

Use when supplied: upstream search-intent research, existing article, brand constraints, verified product facts, competitor scope, geography, conversion goal, internal-link inventory, external evidence, CMS and metadata constraints, target length, must-keep facts, and prohibited claims. Distinguish user/CMS constraints from search-engine guidance.

<!-- parity: intent-interface -->
## Consume search-intent evidence

When upstream `search-intent-research` output exists, read [references/search-intent-interface.md](references/search-intent-interface.md). Consume `normalized_question`, `topic_cluster`, `intent_type`, `underlying_job`, `evidence_strength`, and `priority`. Use available language, market, audience, evidence-count, and confidence fields to judge fit and breadth. Consult upstream Evidence Table rows selectively when wording, freshness, market fit, or provenance materially matters.

Do not treat counts as search volume or priority as an automatic inclusion command. For fast-changing topics, inspect upstream source and collection dates when available and revalidate current demand when tools permit. Do not regenerate an imagined question library. Route deep cross-platform question collection, normalization, clustering, or demand-evidence work to `search-intent-research`.

<!-- parity: serp-research -->
## Perform lightweight SERP research

Read [references/serp-research.md](references/serp-research.md) when current search-result evidence would materially improve the task. When permitted tools are available, inspect a bounded, representative set for the actual query, environment, market, and language. Preserve inspected results in a SERP Observation Table and connect major Snapshot conclusions through `representative_result_refs`.

Describe bounded evidence as “the inspected results suggest,” “within the observed sample,” or equivalent scoped language. If current SERP access is unavailable, mark it unverified, leave observation records and `representative_result_refs` absent, and rely on supplied evidence where possible. Do not invent results or treat arbitrary patterns as ranking formulas.

<!-- parity: content-brief -->
## Build the content proposition and brief

Before writing, state why the page deserves to exist. Prefer first-hand experience, original data, expert explanation, testing, real examples, stronger decision frameworks, clearer technical explanation, conditions, limitations, original visuals, or practical workflows. Warn when no meaningful differentiated value is available.

Read [references/content-brief.md](references/content-brief.md) and build a topic-driven brief. Do not force a fixed H2 template, FAQ, word count, or imitation of currently ranking pages.

<!-- parity: evidence-plan -->
## Plan and control claims

Classify material claims as:

- **verified:** directly supported by an inspected appropriate source;
- **attributed:** clearly reported as a named source's statement;
- **inferred:** reasoned from stated evidence and labeled as inference;
- **unverified:** materially unsupported, inaccessible, or unresolved.

Resolve an unverified claim by verifying, qualifying, flagging outside reader-facing copy, or omitting it. Require comparable evidence and time scope for comparisons when possible. Never create false precision or conceal a commercial conflict of interest.

<!-- parity: create-refresh -->
## Create or refresh the content

Read [references/writing-quality.md](references/writing-quality.md) for create and refresh work.

- Satisfy the main intent quickly and answer directly where useful.
- Explain reasoning, evidence, conditions, and limitations.
- Use headings for navigation and terminology naturally.
- Provide value beyond SERP synthesis; avoid filler and generic AI prose.
- Preserve accurate, useful existing material during refreshes. Rewrite only where intent, evidence, structure, clarity, or freshness requires it.
- Add FAQ content only when observed supporting questions make it useful.

<!-- parity: keyword-model -->
## Use concepts, not density

Model language as a primary topic or query, supporting concepts, user-language variants, relevant entities, and optional commercial or conversion terms. Place them only where semantically useful. Do not report keyword-density targets or claim exact-match repetition creates a ranking advantage.

<!-- parity: brand-comparison -->
## Route brand, comparison, and recommendation content

Use a brand only when user intent, evidence, and content purpose justify its role—as an educational source, example, solution, comparison subject, or CTA destination. Do not inject it into every section or disguise commercial content as an independent review.

For “A vs B,” “best,” provider lists, or recommendations, require clear comparison dimensions, comparable evidence and time scope where possible, fact/opinion separation, verified material claims, conflict-of-interest awareness, and appropriate qualification. Do not invent competitor weaknesses.

<!-- parity: metadata -->
## Create metadata

Read [references/metadata.md](references/metadata.md). Distinguish the editorial headline/H1 from the SEO title/title element suggestion; keep them identical when that is best. Produce accurate, unique, descriptive, concise, non-misleading metadata without keyword stuffing.

Do not impose universal 60-character title or 160-character description limits. Follow explicit CMS, publishing-platform, or user constraints. Generate meta keywords only when required, and never promise that a search engine will display a supplied description verbatim.

<!-- parity: links-media -->
## Handle links and media

Suggest internal links to real URLs only when a site or page inventory is supplied. Otherwise name only the type of page that could be linked. Recommend images, diagrams, tables, or video only when they materially improve understanding; do not prescribe arbitrary media counts for SEO.

<!-- parity: engine-localization -->
## Localize for the target environment

Read [references/engine-localization.md](references/engine-localization.md) when Google, Baidu, a regional search environment, or a CMS constraint matters. Treat current platform guidance as time-sensitive reference material rather than timeless ranking law. Verify current official guidance when it materially affects the task and tools permit.

<!-- parity: ai-scaled-content -->
## Handle AI-assisted and scaled content

Do not claim that AI content cannot rank or is automatically safe. Reject or warn against mass production of low-value, near-duplicate pages intended primarily to manipulate search visibility. Encourage human or expert review when domain stakes, claim risk, or first-hand expertise make it appropriate.

<!-- parity: seo-qa -->
## Run final SEO content QA

Read [references/seo-qa.md](references/seo-qa.md) before delivery. Check intent fit, coverage, original/useful value, evidence integrity, structure, natural language, metadata, and publication cleanliness. Remove internal drafting residue, `[VERIFY]`, SEO strategy notes, alternate-title lists, keyword lists, file paths, and internal comments from reader-facing copy.

If unresolved evidence makes the content unsafe or materially misleading, label it as requiring verification rather than publication-ready.

<!-- parity: delivery -->
## Deliver by mode

Follow explicit user formatting first. Otherwise return:

- **brief:** Search Research Snapshot and SEO Content Brief.
- **create:** brief summary, article, metadata, and remaining verification.
- **refresh:** refresh diagnosis, updated article, metadata, material changes, and remaining verification.
- **review:** SEO diagnosis and prioritized recommended changes.

Use these conceptual artifacts when applicable:

1. **Search Research Snapshot:** `query`, `search_environment`, `market`, `language`, `observed_at`, `dominant_intent`, `dominant_content_types`, `serp_patterns`, `content_gaps`, `research_limitations`, and `representative_result_refs`.
2. **SERP Observation Table:** result-level provenance fields defined in the SERP research reference; include it only when actual results were inspected.
3. **SEO Content Brief:** fields defined in the brief reference.
4. **Content:** outline, draft, refreshed article, or reviewed article according to mode.
5. **Metadata:** `editorial_headline`, `seo_title`, `meta_description`, optional `keywords`, optional `slug`.
6. **SEO QA Report:** `intent_fit`, `coverage`, `original_value`, `evidence`, `structure`, `keyword_naturalness`, `metadata`, `publication_readiness`, `remaining_risks`.

SEO improvements may improve alignment, quality, usefulness, and discoverability; they do not guarantee outcomes.
