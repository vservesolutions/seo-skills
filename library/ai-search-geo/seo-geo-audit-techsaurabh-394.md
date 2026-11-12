---
name: "seo-geo-audit"
description: "Audit a web page or site for technical SEO and GEO (generative engine optimization, i.e. being cited by AI answer engines). Use when the user asks for an SEO audit, ranking fixes, schema markup review, Core Web Vitals triage, or how to get cited by ChatGPT, Perplexity, Gemini or Claude."
category: "ai-search-geo"
platforms: ["unspecified"]
platform_source: "none"
repo: "techsaurabh-394/claude-skills"
repo_url: "https://github.com/techsaurabh-394/claude-skills"
source: "https://github.com/techsaurabh-394/claude-skills/blob/HEAD/skills/seo-geo-audit/SKILL.md"
raw_source: "https://raw.githubusercontent.com/techsaurabh-394/claude-skills/HEAD/skills/seo-geo-audit/SKILL.md"
ref: "HEAD"
discovered_via: "github-search"
license: "MIT"
stars: 3
collected: "2026-11-12"
---

<!-- Unspecified skill · techsaurabh-394/claude-skills · skills/seo-geo-audit/SKILL.md · MIT
     Source: https://github.com/techsaurabh-394/claude-skills/blob/HEAD/skills/seo-geo-audit/SKILL.md
     Detected by: none · Regenerated on every run; edit the upstream skill, not this copy. -->

# SEO + GEO Audit

## Inputs
Ask for (or fetch) the URL, the target query, and the page's goal. If the URL can't be fetched, ask the user to paste the HTML or main content.

## Process
1. **Intent match**: does the page answer the target query in its first 100 words? Is the format right (guide, comparison, tutorial, tool)?
2. **On-page**: title (60 chars max, query first), meta description (155 max), one H1, logical H2/H3 outline, descriptive URL, internal links in and out, image alt text.
3. **Structured data**: check for Article/BlogPosting, FAQPage, BreadcrumbList, Organization/Person with author. Validate fields; flag missing `datePublished`, `dateModified`, `author`.
4. **Performance**: LCP, INP, CLS targets (Good: 2.5s or less, 200ms or less, 0.1 or less). Name the likely cause for each failure (hero image, render-blocking JS, layout shift from fonts/ads).
5. **Crawl and index**: canonical, robots meta, sitemap inclusion, status codes, duplicate or thin variants.
6. **GEO**: answer-first paragraphs, definitions in one clear sentence, named entities, specific numbers with sources, comparison tables, Q&A sections, visible author and dates, a crawlable plain-HTML version of key content, and AI crawlers not blocked in robots.txt by accident.

## Output format
- **Score** per area (On-page, Structured data, Performance, Crawl, GEO) out of 10, with one-line reasoning.
- **Fix list** ordered by impact divided by effort: `Issue -> Why it matters -> Exact fix`. Give copy-paste snippets (title, meta, JSON-LD).
- **Quick wins** (under 1 hour) listed separately.

## Rules
- Never invent metrics. If a number wasn't measured or provided, say it needs measuring and name the tool (PageSpeed Insights, Search Console).
- Don't promise rankings. Describe expected effect as likelihood, not guarantee.
