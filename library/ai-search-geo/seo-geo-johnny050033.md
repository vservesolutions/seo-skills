---
name: "seo-geo"
description: "Optimize websites, landing pages, blogs, ecommerce pages, SaaS sites, and documentation for modern SEO plus GEO/AEO visibility in AI answer engines. Use when Codex is asked to audit or improve search exposure, metadata, crawlability, indexing, Core Web Vitals, internal linking, canonicalization, structured data/JSON-LD, entity signals, E-E-A-T, AI Overview/AI Mode readiness, ChatGPT/Perplexity/Copilot citation readiness, llms.txt, answer-focused content, or framework-specific SEO implementation in Next.js, Astro, React, static HTML, CMS, Shopify, or similar web stacks."
category: "ai-search-geo"
platforms: ["unspecified"]
platform_source: "none"
repo: "Johnny050033/seo-geo-skill"
repo_url: "https://github.com/Johnny050033/seo-geo-skill"
source: "https://github.com/Johnny050033/seo-geo-skill/blob/HEAD/seo-geo/SKILL.md"
raw_source: "https://raw.githubusercontent.com/Johnny050033/seo-geo-skill/HEAD/seo-geo/SKILL.md"
ref: "HEAD"
discovered_via: "github-search"
license: "MIT"
stars: 1
collected: "2026-11-14"
---

<!-- Unspecified skill · Johnny050033/seo-geo-skill · seo-geo/SKILL.md · MIT
     Source: https://github.com/Johnny050033/seo-geo-skill/blob/HEAD/seo-geo/SKILL.md
     Detected by: none · Regenerated on every run; edit the upstream skill, not this copy. -->

# SEO GEO

## Operating Principle

Treat GEO as an extension of durable SEO, not a replacement. Build pages that search engines can crawl, understand, trust, and cite, while making the content genuinely useful to people.

Start from first-party, official, or verifiable sources. Do not recommend manipulative hidden text, prompt-injection bait for crawlers, fake expertise, fabricated citations, doorway pages, scaled thin pages, or schema that describes content not visible on the page.

## Workflow

1. Identify the site type, framework, business goal, target markets/languages, and highest-value page templates.
2. Inspect the current implementation before changing it: metadata, rendered HTML, crawl/index controls, canonical URLs, headings, internal links, schema, page speed, media, accessibility, and content depth.
3. Map the page to search intent and answer-engine intent:
   - What exact query or job should this page answer?
   - What entities, attributes, comparisons, proof points, and citations would an answer engine need?
   - What makes this page a better source than the pages already ranking or being cited?
4. Implement improvements in this order:
   - Crawlability and indexability
   - Information architecture and internal links
   - Page-level metadata and canonicalization
   - Content quality, expertise, and source clarity
   - Structured data and entity consistency
   - Performance, accessibility, and media discoverability
   - GEO-specific answer blocks, citations, and data verification
5. Validate with local rendering, tests, schema validators where possible, and a concise before/after report.

## When Auditing

Use `scripts/audit_html.mjs` for a fast first pass when given a URL or HTML file:

```bash
node <skill>/scripts/audit_html.mjs https://example.com/page
node <skill>/scripts/audit_html.mjs ./dist/index.html
```

Then manually verify the rendered page with browser tools for JavaScript-rendered metadata, hidden/noindex states, layout, accessibility, and Core Web Vitals risks. Script output is a starting point, not a final audit.

For deeper work, load only the relevant reference:

- `references/seo-foundations.md` for crawlability, metadata, content quality, internal linking, E-E-A-T, and technical SEO.
- `references/geo-ai-search.md` for AI answer engine visibility, entity verification, citation readiness, and GEO-specific content patterns.
- `references/structured-data.md` for JSON-LD, schema selection, validation, and page-type examples.
- `references/framework-implementation.md` for Next.js-first implementation patterns plus non-Next.js fallbacks.

## Page Pattern

For important commercial or editorial pages, prefer this structure unless the existing design system suggests a better one:

1. One clear H1 that names the product, service, topic, or offer.
2. A direct answer or value proposition in the first visible content block.
3. Scannable sections that each answer one natural-language question.
4. Evidence blocks: specs, prices, dates, methods, reviews, examples, screenshots, author/reviewer details, or source links.
5. Comparison or decision-support content when users are choosing between options.
6. FAQ only when the questions are genuinely useful and answered on-page.
7. Strong internal links to parent hubs, related details, pricing, docs, case studies, and conversion pages.
8. JSON-LD that matches visible content.

## Framework Defaults

When building or refactoring a site from scratch and the user has not chosen a stack, prefer a server-rendered or statically generated framework with first-class metadata, sitemap, image, and performance support. Next.js App Router is a strong default for complex marketing, SaaS, ecommerce, and content sites; Astro is a strong default for mostly static content sites.

For existing projects, follow the current stack. Do not migrate frameworks just for SEO unless the current architecture blocks crawlable, performant, maintainable pages.

## Deliverables

For audits, return:

- Priority findings with impact and evidence.
- Exact file/page changes to make.
- Missing data needed from the business or content owner.
- Validation steps already run and steps still required in production tools.

For implementation, include:

- Metadata and canonical handling.
- Sitemap and robots handling.
- Structured data.
- Content and internal-link improvements.
- Verification notes.

## Source Baseline

The bundled references were created from official and current sources reviewed on 2026-05-31, including Google Search Central, Bing Webmaster Guidelines, Schema.org, web.dev Core Web Vitals, Next.js metadata docs, and recent GEO research. Re-check official docs when the user asks for the latest, when search/AI platform behavior is critical, or when implementing a high-stakes production change.
