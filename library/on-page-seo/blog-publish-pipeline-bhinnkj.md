---
name: "blog-publish-pipeline"
description: "General blog content production and validation workflow for researched Markdown/MDX/HTML articles. Use when the user asks to create, improve, score, QA, fact-check, SEO-check, or prepare a blog post for publishing, especially when source quality, frontmatter, structure, internal links, schema readiness, or rendered-page verification matter."
category: "on-page-seo"
platforms: ["codex"]
platform_source: "detected"
repo: "BHINNKJ/blog-content-validation-skill"
repo_url: "https://github.com/BHINNKJ/blog-content-validation-skill"
source: "https://github.com/BHINNKJ/blog-content-validation-skill/blob/HEAD/SKILL.md"
raw_source: "https://raw.githubusercontent.com/BHINNKJ/blog-content-validation-skill/HEAD/SKILL.md"
ref: "HEAD"
discovered_via: "github-search"
license: "MIT"
stars: 1
collected: "2026-11-13"
---

<!-- Codex skill · BHINNKJ/blog-content-validation-skill · SKILL.md · MIT
     Source: https://github.com/BHINNKJ/blog-content-validation-skill/blob/HEAD/SKILL.md
     Detected by: detected · Regenerated on every run; edit the upstream skill, not this copy. -->

# Blog Publish Pipeline

## Overview

Use this skill to turn a topic or draft into a production-ready article. The focus is content quality and validation: research, outline, writing, editing, metadata, source discipline, SEO/GEO readiness, and pre/post-render checks. Publishing, committing, or deployment is optional and only happens when the user asks.

## Modes

Default mode is the original web-aware workflow. Use web research when the topic is current, competitive, high-risk, or when the user asks for search/current data.

Use **local-only mode** only when the user explicitly invokes `blog-publish-pipeline:local-only`. In local-only mode:
- Do not browse the web or perform SERP checks.
- Use only local files, user-provided materials, repository content, local research outputs, drafts, screenshots, datasets, and already available artifacts.
- Do not introduce new external facts that are not present in local materials.
- For dynamic facts such as prices, opening hours, schedules, policies, availability, rules, and product details, either omit them or state that they require separate official verification before publication.
- Validation should be limited to local checks such as Markdown scoring, local schema/frontmatter checks, build/type checks, rendered local pages, local link checks, and consistency against provided local sources.
- Final reports must state that the work was performed in local-only mode and list any skipped web/SERP/freshness checks as residual risk.

## Quick Start

1. Identify the content job: new article, rewrite, SEO audit, fact-check, metadata cleanup, or publish QA.
2. Capture keyword, audience, language, article type, platform format, author, and renderer limits.
3. In default mode, research current SERP/source context when the topic is timely, competitive, or the user asks for search/current data. In `blog-publish-pipeline:local-only` mode, skip web/SERP research and use only local or user-provided materials.
4. Draft or revise with answer-first sections, sourced claims, clean metadata, internal links, and FAQ where useful.
5. Run `node ~/.codex/skills/blog-publish-pipeline/scripts/score-markdown-blog.mjs <file> "<primary keyword>"` for Markdown/MDX files.
6. If a site build or rendered URL exists, verify title, description, canonical, schema, links, images, and sitemap when applicable.

## Workflow

### 1. Intake

Capture only what matters for the current task:
- Primary keyword, secondary entities, and search intent
- Audience, business goal, and desired article type
- Platform: Markdown, MDX, HTML, CMS editor, static site, or Next/Astro/Hugo-style content
- Route or slug, canonical URL, publish/update date, author, and brand voice
- Required internal links, external sources, screenshots, images, or examples
- Renderer limits: tables, code blocks, images, embeds, raw HTML, JSX, frontmatter fields

When information is missing, make conservative assumptions unless the missing item would create a public accuracy or brand risk.

### 2. Source And SERP Learning

Default mode: use web research for current topics, product claims, legal/medical/financial claims, pricing, release dates, or when the user asks to search. Prefer:
- Primary sources: official docs, company announcements, research papers, standards, government pages
- Strong secondary sources: reputable industry publications or specialist publications
- Avoid weak affiliate, scraped, AI-spun, or content-farm sources for factual claims

Record source role, date, and what each source supports. Never invent statistics, quotes, feature availability, pricing, or timelines.

Local-only mode (`blog-publish-pipeline:local-only`): do not use web research. Treat local materials as the complete source set for the task:
- User-provided text, files, and instructions
- Repository content and existing site pages
- Local research outputs such as `research/**`, `docs/**`, raw JSON, CSV, screenshots, and notes
- Existing local drafts, MDX files, frontmatter, schemas, and assets

When local sources are incomplete, write around the gap instead of filling it from memory. If a claim depends on fresh external reality, mark it as needing official verification or avoid making the claim.

### 3. Brief

Before writing substantial content, create or infer a compact brief:
- Search intent and page type
- Answer-first thesis
- H2/H3 structure
- Required citations and internal links
- Differentiation angle
- Reader next step
- Risk notes: freshness, uncertainty, compliance, unsupported claims, or brand-sensitive comparisons

### 4. Writing And Editing Rules

Write for readers first, then extraction:
- Use plain language that a high-school student can understand. Avoid jargon unless the article immediately explains it.
- Start from the brand owner's perspective and make the owner/operator point of view clear early in the article, for example "EasyGlobe Growth" when that is the brand owner.
- Title target: 45-65 characters when possible
- Meta description target: 120-155 characters
- H2 sections open with direct answer paragraphs
- Paragraphs stay under 150 words
- Use bullets for checklists, steps, and grouped facts
- Keep exact-match keyword density natural, usually 0.6%-2.0%
- Use contextual internal links, not link dumps
- Keep promotion proportional to intent; informational articles should not become sales pages
- Add FAQ only when it answers real long-tail questions
- Keep all dates concrete when recency matters
- When the article needs visual assets, create or prepare a few image options in Codex and document which images are safe to publish. Do not use unlicensed research images as publishable assets.

### 5. Metadata And Schema Readiness

For Markdown/MDX posts, frontmatter should usually include:
- `title`
- `description`
- `publishedAt`
- optional `updatedAt`
- `author`
- optional `authorTitle`, `authorUrl`, `authorSameAs`
- optional `tags`
- optional `image` and `imageAlt`
- optional `draft`

Rendered pages should expose what the platform supports:
- `<title>` and meta description
- canonical URL
- Open Graph/Twitter image and alt text
- `BlogPosting` or `Article`
- `Person` or `Organization` author
- `FAQPage` only when visible FAQ content exists
- `BreadcrumbList` where appropriate
- sitemap entry for public URLs

### 6. Validation Gates

Run the gates that fit the task:
- Markdown score script for local Markdown/MDX files
- Build/type check when content is integrated into a codebase
- Rendered page check for article route, blog index, and 404/draft behavior if relevant
- Generated HTML check for canonical, metadata, schema, author links, image alt, and required links
- Sitemap check for public posts
- Link checks for important external sources and required internal links

If a gate cannot be run, state the skipped gate and residual risk.

In local-only mode, do not run external link availability checks or live SERP checks. Local link/path checks are allowed. Report skipped freshness and external verification gates explicitly.

## Quality Targets

Publish-ready baseline:
- Score script: 80+
- No paragraphs over 150 words
- Title and description within usable ranges
- At least 2 authoritative external sources for researched articles
- At least 3 useful internal links when the site has relevant pages
- Clear author and publish/update dates
- Image alt text when images are used
- No unsupported statistics or unverifiable claims

Strong article target:
- Score script: 88+
- FAQ or Q&A coverage for question-led topics
- Person/Organization author schema readiness
- Clear disambiguation when search intent is mixed
- Original examples, screenshots, comparison logic, or practical field experience
- Rendered page and sitemap verified when integrated into a site

## Final Report

Return only the useful facts:
- Files changed or artifact produced
- Content angle and major improvements
- Validation commands and results
- Score and top warnings
- Remaining risks or next improvements

If `blog-publish-pipeline:local-only` was used, include a short note such as: "Mode: local-only; no web/SERP/freshness checks were performed." Then list any dynamic facts that still need official verification before publication.

Do not paste the whole article unless the user asks.
