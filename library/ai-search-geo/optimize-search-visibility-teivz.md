---
name: "optimize-search-visibility"
description: "Evidence-based SEO, GEO (generative engine optimization), and AEO (answer engine optimization) for websites and web apps. Use when an agent is asked for an SEO audit, technical SEO, AI search visibility, ChatGPT or Gemini citations, schema markup or JSON-LD, content strategy, a search-friendly app launch, or measurement. Audit, plan, implement, and measure crawling, indexing, content, entities, structured data, internal links, and answer utility for SaaS, ecommerce, local businesses, publishers, marketplaces, developer products, professional services, regulated/YMYL sites, nonprofits, or…"
category: "ai-search-geo"
platforms: ["claude-code"]
platform_source: "declared"
repo: "teivz/sag-skills"
repo_url: "https://github.com/teivz/sag-skills"
source: "https://github.com/teivz/sag-skills/blob/HEAD/skills/optimize-search-visibility/SKILL.md"
raw_source: "https://raw.githubusercontent.com/teivz/sag-skills/HEAD/skills/optimize-search-visibility/SKILL.md"
ref: "HEAD"
discovered_via: "github-search"
license: "MIT"
stars: 1
collected: "2026-11-13"
---

<!-- Claude Code skill · teivz/sag-skills · skills/optimize-search-visibility/SKILL.md · MIT
     Source: https://github.com/teivz/sag-skills/blob/HEAD/skills/optimize-search-visibility/SKILL.md
     Detected by: declared · Regenerated on every run; edit the upstream skill, not this copy. -->

# Optimize Search Visibility

Treat SEO, GEO, and AEO as three views of one search system:

- SEO: earn discovery, indexing, ranking, useful snippets, and qualified organic outcomes.
- GEO: earn accurate retrieval, citation, and representation in generative answers.
- AEO: make the best supported answer easy to extract for direct-answer interfaces.

Do not promise rankings, traffic, rich results, or AI citations.

## Route the request

1. Classify the job as `intake`, `audit`, `strategy`, `implementation`, `content`, or `measurement`.
2. For claims about current platform behavior, browse official documentation. Search behavior changes frequently; do not rely only on the bundled snapshot.
3. Read only the references required for the job:
   - Read [best-practices.md](references/best-practices.md) for every audit, strategy, implementation, or content task.
   - Read [product-intake.md](references/product-intake.md) when requirements, category, audience, or outcomes are not established.
   - Read [category-playbooks.md](references/category-playbooks.md) after choosing a website category.
   - Read [measurement.md](references/measurement.md) for roadmaps, experiments, KPIs, or reporting.
   - Read [source-register.md](references/source-register.md) when verifying evidence or refreshing guidance.
4. Label recommendations as `foundation`, `platform-specific`, `experimental`, or `unsupported`. Never turn correlations or lab findings into ranking guarantees.

## Run product intake

Ask only what changes the work. Do not send the full question bank at once.

1. Ask the five gate questions from `product-intake.md`, preferably in one concise round.
2. Infer the category when evidence is clear; otherwise ask the user to choose from the closest two or three.
3. Ask up to five category-specific questions in a second round.
4. State assumptions and unknowns. Continue with an explicitly provisional output when missing answers are non-blocking.
5. Never request passwords, raw personal data, private customer records, or production secrets. Ask for aggregated exports or redacted examples.

Generate a deterministic questionnaire when useful:

```bash
python3 scripts/search_visibility.py categories
python3 scripts/search_visibility.py intake --category saas --phase gate --format markdown
python3 scripts/search_visibility.py intake --category ecommerce --phase detail --format json
```

## Audit a site

Prefer first-party data from Search Console, Bing Webmaster Tools, analytics, merchant/local profiles, server logs, and conversion systems. If those are unavailable, perform a bounded public audit and name the blind spots.

Run the deterministic auditor for a first pass:

```bash
python3 scripts/search_visibility.py audit --url https://example.com --max-pages 10 --format markdown
python3 scripts/search_visibility.py audit --html path/to/page.html --base-url https://example.com/page --format json
python3 scripts/search_visibility.py jsonld --file path/to/page.html --format markdown
```

The URL auditor is deliberately bounded, same-origin, sequential, and robots-aware. It does not render JavaScript, measure field Core Web Vitals, prove indexation, validate rich-result eligibility, query rankings, or measure AI citations. Use browser rendering and official tools when those checks matter.

Audit in this order:

1. Access and eligibility: response, robots, `noindex`, canonical, sitemap, authentication, WAF/CDN, renderability.
2. Site architecture: crawlable links, URL consistency, duplicates, pagination/facets, internationalization, orphan risk.
3. Page meaning: title, main heading, primary intent, semantic structure, visible facts, media alternatives.
4. Entity and evidence: clear owner/author, organization/product identity, dates, firsthand proof, sourced claims, policies and trust information.
5. Answer utility: concise supported answer near the relevant question, definitions, steps, comparisons, limitations, and follow-up coverage where users need them.
6. Structured data: match visible content and the most specific supported type; validate syntax and platform eligibility. Treat it as explicit meaning, not a ranking or AI-citation switch.
7. Measurement: connect findings to qualified impressions, clicks, citations/referrals, assisted conversions, and business outcomes.

Separate `observed`, `inferred`, and `requires external verification` findings. Attach the URL or artifact to every page-level claim.

## Build a strategy

Produce a strategy with:

1. Product, audience, market, category, and conversion summary.
2. Demand model organized by user jobs and journey stages, not a flat keyword dump.
3. Current-state evidence and major unknowns.
4. Opportunity map across technical access, information architecture, pages, entities, evidence, distribution, and measurement.
5. Prioritized backlog using impact, confidence, effort, dependency, and risk. Put blockers before enhancements.
6. A 30/60/90-day sequence with owners and verification criteria.
7. Guardrails for brand, legal/compliance, privacy, localization, and editorial review.

Use category-specific conversion surfaces and schema guidance from `category-playbooks.md`. For regulated or high-stakes topics, require subject-matter review and stronger provenance.

## Create or improve content

Start from a real audience need and an ownable contribution. Do not manufacture experience, quotations, statistics, reviews, authors, dates, or citations.

For each page or brief, define:

- primary user job, journey stage, query family, and intended conversion;
- unique information gain: original data, firsthand experience, expert process, useful tool, example, or clear synthesis;
- direct answer or summary when it helps the reader, followed by evidence, nuance, and next steps;
- entity names and relationships stated consistently in visible copy and supported structured data;
- verifiable sources close to claims, including scope and date where freshness matters;
- useful sections, headings, tables, lists, images, video, and accessible labels based on the subject—not an artificial “AI format”;
- internal links that support the next user question and business journey;
- author/reviewer, update policy, and editorial status where relevant.

Reject scaled near-duplicate pages, keyword variants with no added value, hidden content, fake third-party mentions, schema that contradicts the page, and copy written only to manipulate answer engines.

## Implement changes

Inspect the application before editing. Follow its framework, routing, rendering, metadata, component, testing, and deployment conventions.

Prefer reusable primitives for metadata, canonical URLs, robots directives, sitemaps, breadcrumbs, structured data, author/provenance blocks, and internal links. Keep structured data server-rendered when practical, identical to visible claims, and free of invented fields. Validate a sample with official rich-result tools after deployment.

Do not add `llms.txt` by default. Add it only for a named consumer or an explicit user requirement, document who consumes it, and do not claim it improves Google visibility.

## Measure and iterate

Establish a baseline before material changes when data exists. Annotate releases. Compare like-for-like periods and account for seasonality, brand demand, migrations, promotions, and algorithm changes.

Report outcomes in layers:

- eligibility and coverage;
- search visibility and qualified visits;
- AI citations/mentions and attributable referrals where a platform exposes them;
- engagement, leads, revenue, subscriptions, or other product outcomes;
- accuracy and brand-representation failures.

Use a stable prompt panel for manual AI visibility tests, but treat it as sampled and volatile. Never call a one-off prompt result a rank. Read `measurement.md` before designing the scorecard.

## Deliver the result

Lead with the consequential findings and actions. Include:

- scope, date, inputs, and limitations;
- evidence-linked findings grouped by severity;
- prioritized actions with owner, effort, and verification method;
- preserved unknowns instead of fabricated facts;
- the smallest useful implementation or next experiment.
