---
name: "on-page-seo"
description: "Use when the user wants to optimize a specific page for SEO, or asks to improve or write title tags, meta descriptions, H1s and headings, content relevance, images and alt text, internal links, or why a single page is not ranking for its keyword. Compares the page against search intent and the current top results and gives exact rewrites."
category: "on-page-seo"
platforms: ["claude-code"]
platform_source: "declared"
repo: "AmmarBabbar/seo-skills"
repo_url: "https://github.com/AmmarBabbar/seo-skills"
source: "https://github.com/AmmarBabbar/seo-skills/blob/HEAD/skills/on-page-seo/SKILL.md"
raw_source: "https://raw.githubusercontent.com/AmmarBabbar/seo-skills/HEAD/skills/on-page-seo/SKILL.md"
ref: "HEAD"
discovered_via: "github-search"
license: "MIT"
stars: 0
collected: "2026-11-14"
---

<!-- Claude Code skill · AmmarBabbar/seo-skills · skills/on-page-seo/SKILL.md · MIT
     Source: https://github.com/AmmarBabbar/seo-skills/blob/HEAD/skills/on-page-seo/SKILL.md
     Detected by: declared · Regenerated on every run; edit the upstream skill, not this copy. -->

# On-Page SEO

You optimize one page at a time so it matches search intent, is clearly relevant to its keyword cluster, and converts visitors.

## Before you start

1. Read `.agents/seo-context.md`.
2. Get the URL, its primary keyword and secondary keywords (or find them in GSC for that page).
3. Fetch the page. If you get a bot check, CAPTCHA, 403/429 or empty HTML, stop and ask for the HTML or a screenshot.
4. Look at the top 5 results for the primary keyword to understand intent and format.

## Checklist

### Intent
- Does the page type and format match what ranks? (service page vs guide vs list)
- Does the first screen answer the main need (service + area + CTA, or the direct answer)?

### Title tag
- About 50-60 characters (roughly 600px), primary keyword near the start, brand at the end
- Local pattern: `{Service} in {City} | {Brand}` or `{Service} {City} - {Benefit} | {Brand}`
- Unique across the site

### Meta description
- About 140-160 characters, specific value + CTA. It does not affect rankings directly but it affects clicks.

### Headings
- One H1 that includes the primary topic
- H2/H3 follow a logical outline and cover the subtopics searchers expect

### Content
- Covers the questions and entities the top results cover, plus first-hand details they lack
- No thin sections, no filler, no keyword stuffing
- Up-to-date facts

### Trust and conversion
- Phone / CTA visible above the fold on mobile
- Reviews, licenses, guarantees, real photos close to the CTA

### Images
- Descriptive file names, useful alt text (describe the image; no keyword lists)
- Compressed, modern formats, width and height set, hero image not lazy-loaded

### Links
- 3-10 contextual internal links to related pages with descriptive anchors
- Important pages link to this page
- Outbound links to authoritative sources where they help the reader

### Technical
- Indexable, self-canonical, in the sitemap, mobile-friendly, correct schema

## Output format

```markdown
## Page: {URL}, target: {keyword}

| Element | Current | Recommended | Why |
|---|---|---|---|
| Title | | | |
| Meta description | | | |
| H1 | | | |
| ... | | | |

## Content gaps (sections to add or improve)
## Internal links to add (from / to / anchor)
## Quick wins vs bigger changes
```

## Rules

- Write the exact new text, not just "improve the title".
- Do not change titles on pages that already rank top 3 and convert well unless there is a clear reason.

## Related skills

`content-brief`, `seo-content-writing`, `internal-linking`, `schema-markup`, `technical-seo`
