---
name: "ui-ux-seo-geo"
description: "UI, UX, SEO, and GEO guidance for building, reviewing, or improving websites, landing pages, web apps, content pages, portfolios, product pages, and service pages. Use when Codex is asked to design or implement a site/page, improve a user-facing interface, audit conversion or usability, optimize page structure for search engines, or make content clearer for AI search and answer engines."
category: "ai-search-geo"
platforms: ["claude-code"]
platform_source: "declared"
repo: "marynacleo/ui-ux-seo-geo.skill"
repo_url: "https://github.com/marynacleo/ui-ux-seo-geo.skill"
source: "https://github.com/marynacleo/ui-ux-seo-geo.skill/blob/HEAD/SKILL.md"
raw_source: "https://raw.githubusercontent.com/marynacleo/ui-ux-seo-geo.skill/HEAD/SKILL.md"
ref: "HEAD"
discovered_via: "github-search"
license: "MIT"
stars: 1
collected: "2026-11-13"
---

<!-- Claude Code skill · marynacleo/ui-ux-seo-geo.skill · SKILL.md · MIT
     Source: https://github.com/marynacleo/ui-ux-seo-geo.skill/blob/HEAD/SKILL.md
     Detected by: declared · Regenerated on every run; edit the upstream skill, not this copy. -->

# UI UX SEO GEO

Use this skill as an extra quality layer when working on websites, landing pages, web apps, and public-facing pages.

## Core workflow

1. Clarify the page goal if it is not obvious: conversion, explanation, booking, purchase, lead capture, portfolio, documentation, or internal workflow.
2. Identify the primary user and the most likely first action they need to take.
3. Design or review the interface for clarity, hierarchy, accessibility, responsiveness, and speed of comprehension.
4. Check SEO basics: page title intent, H1, section headings, descriptive copy, internal links, metadata, image alt text, readable URLs, and schema opportunities.
5. Check GEO basics: whether AI systems can clearly extract who the page is for, what it offers, where it applies, proof points, FAQs, entities, and concise answer-ready summaries.
6. Before final delivery, verify the page on desktop and mobile when a runnable local site is available.

## UI principles

- Make the real product, service, content, or workflow visible quickly.
- Prefer useful screens and working controls over decorative explanation.
- Keep navigation predictable and primary actions obvious.
- Use visual hierarchy to show what matters first, second, and third.
- Avoid clutter, vague marketing copy, and sections that do not help the user decide or act.
- Ensure text fits containers on mobile and desktop.
- Make forms short, labeled, forgiving, and clear about what happens after submission.
- Use accessible contrast, keyboard-friendly controls, semantic HTML, and meaningful focus states.

## UX review checklist

When reviewing or improving a page, check:

- Can a new visitor understand the offer or task within a few seconds?
- Is there one clear primary action per view or section?
- Are important choices visible without hunting?
- Are empty, loading, error, and success states handled?
- Does the layout work naturally on mobile, tablet, and desktop?
- Is the language concrete and specific instead of generic?
- Does each section earn its place?

## SEO checklist

For public pages, include or recommend:

- One descriptive H1 aligned with the search intent.
- Logical H2/H3 sections that describe actual topics.
- A concise title tag and meta description if the stack supports them.
- Descriptive link text, not vague labels such as "click here".
- Image alt text for meaningful images.
- Structured data opportunities for articles, products, services, local businesses, FAQs, breadcrumbs, or reviews when relevant.
- Internal links to related pages when a site structure exists.
- Content that answers likely user questions directly.

## GEO checklist

Optimize for AI answer engines and retrieval systems by making key facts easy to extract:

- State the entity clearly: brand, product, person, place, service, or topic.
- Include concise definitions and answer-ready summaries.
- Name the audience, use case, location, industry, or constraints when relevant.
- Surface proof points: examples, credentials, testimonials, numbers, case studies, or comparisons.
- Add FAQ-style answers for common questions when appropriate.
- Use consistent names and terminology across headings, copy, metadata, and alt text.
- Avoid burying important facts only in images, animations, or vague slogans.

## Implementation preferences

- Follow the existing codebase and design system first.
- Prefer semantic HTML and accessible components.
- Keep page sections focused and scannable.
- Use real or generated visual assets when a public website needs visual context.
- Do not create a marketing-style landing page when the user asked for a usable app or tool.
- For operational tools and dashboards, prefer dense, calm, repeatable workflows over oversized hero sections.

## Final response

When this skill shaped the work, briefly mention the UI/UX, SEO, or GEO improvements made. Keep the explanation practical and avoid long theory unless the user asks for it.
