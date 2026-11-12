---
name: "blog-post"
description: "Use when the user wants to draft a full blog post or article from a content brief. Reads a brief file plus editorial-guidelines.md and produces a publication-ready markdown draft with SEO meta, internal links, and optional hero image."
category: "core-web-vitals-performance"
platforms: ["claude-code"]
platform_source: "declared+detected"
repo: "busyeugene/content-marketing-skills"
repo_url: "https://github.com/busyeugene/content-marketing-skills"
source: "https://github.com/busyeugene/content-marketing-skills/blob/HEAD/blog-post/SKILL.md"
raw_source: "https://raw.githubusercontent.com/busyeugene/content-marketing-skills/HEAD/blog-post/SKILL.md"
ref: "HEAD"
discovered_via: "github-search"
license: "MIT"
stars: 1
collected: "2026-11-12"
---

<!-- Claude Code skill · busyeugene/content-marketing-skills · blog-post/SKILL.md · MIT
     Source: https://github.com/busyeugene/content-marketing-skills/blob/HEAD/blog-post/SKILL.md
     Detected by: declared+detected · Regenerated on every run; edit the upstream skill, not this copy. -->

# Blog Post

Turn a `briefs/<slug>.md` (produced by the `content-brief` skill, or hand-written to the same schema) into a complete, publication-ready markdown article.

## Setup

No required keys — the skill drafts from the brief alone. Optional keys unlock extras:

- `UNSPLASH_ACCESS_KEY` or `PEXELS_API_KEY` — pick a hero image from stock libraries.
- `FAL_API_KEY` or `IDEOGRAM_API_KEY` — generate an AI hero image instead.
- `NOTION_API_KEY` + `NOTION_DATABASE_ID` — push the draft into Notion for editor review.
- `GOOGLE_DOCS_SERVICE_ACCOUNT_JSON` — push the draft into Google Docs instead.

## Inputs

1. **Brief path** (required). Glob `briefs/*.md` and let the user pick if not specified.
2. **Editorial guidelines path** — defaults to `./editorial-guidelines.md`. If missing, fall back to `{SKILL_BASE}/../_shared/b2b-saas-voice-reference.md` and warn the user.
3. **Hero image mode**: none / stock / generated. Ask via `AskUserQuestion` if optional keys are available.
4. **Handoff destination**: local file only / Notion / Google Docs. Ask if the relevant key is set.

## Process

### 1. Load everything

- Read the brief file (the `---` frontmatter tells you keyword, intent, target word count, refresh_of).
- Read `editorial-guidelines.md` (or fallback).
- Read `{SKILL_BASE}/../_shared/seo-best-practices.md` for the SEO ruleset.
- If `refresh_of` is set in the brief frontmatter, fetch the current URL via the scraping fallback chain and load the existing article so you can preserve what works and only rewrite the weak sections.

### 2. Plan before drafting

Produce a short internal plan (not written to disk yet):
- Confirm the H1 choice from the brief's title options (pick the one that best matches intent + voice; explain the choice in 1 line).
- Confirm TL;DR.
- Confirm the section order and word budget.
- Identify 2–3 places where the editorial guidelines' "unique angle" rule can inject original observation, data, or opinion.

### 3. Draft section by section

Draft each H2 against its word budget. For every section:

- **Lede sentence** states the section's claim or answer directly.
- **Evidence** — at least one concrete fact, example, or number.
- **Transition** — a single sentence bridging to the next section only if it earns its place.
- Obey the editorial guidelines on:
  - POV (we/you/I/third)
  - Contractions
  - Sentence length ceiling
  - Banned words (run a final pass to eliminate them)
  - Preferred-word and product-naming conventions
- Obey the SEO rules in `seo-best-practices.md`:
  - Primary keyword in first 100 words, in H1, in at least one H2
  - Cover every entity in the brief's entities table
  - Answer every PAA (either inline or in a dedicated section)
  - 2–4 outbound authoritative links
  - Internal links to the brief's suggested targets using descriptive anchor text

### 4. Write meta and frontmatter

Frontmatter fields:

```yaml
---
title: "{H1}"
slug: "{slug}"
meta_title: "{50–60 chars}"
meta_description: "{140–160 chars}"
keyword: "{from brief}"
author: "{from editorial guidelines or TBD}"
date: "{YYYY-MM-DD}"
status: draft
canonical: ""
schema: "{Article|HowTo|FAQPage}"
hero_image: ""
hero_alt: ""
internal_links:
  - url: "{…}"
    anchor: "{…}"
outbound_links:
  - url: "{…}"
    anchor: "{…}"
---
```

### 5. Hero image (optional)

- **Stock mode:** query Unsplash/Pexels with 2–3 semantic terms derived from the H1. Pick a landscape image with relevance > aesthetic. Write the URL and a descriptive (not keyword-stuffed) alt into frontmatter.
- **Generated mode:** build a prompt from the H1 and voice attributes; call fal.ai or Ideogram; save the URL. Alt text describes the generated scene.
- **None:** leave `hero_image` empty.

### 6. Self-review pass

Before writing to disk, check:

1. Word count within ±20% of target.
2. Every entity from the brief's must-cover list appears at least once.
3. Every PAA from the brief is answered.
4. Primary keyword density between 0.5% and 1.5%.
5. No banned words.
6. Flesch reading ease is in the guidelines' target range (estimate by rule of thumb if no tool is available).
7. First 100 words contain the keyword and state the payoff.
8. Closer recommends a specific next action.

If any check fails, fix it before writing.

### 7. Write the file

Write to `posts/<slug>.md`. Print a 5-line summary:
- Path
- Word count
- Keyword + density
- Number of internal links / outbound links
- Any skipped self-review checks with the reason

### 8. Handoff (optional)

- **Notion:** create a page in `NOTION_DATABASE_ID` with frontmatter fields mapped to database properties and the body as rich text. Print the Notion URL.
- **Google Docs:** create a doc in the service account's Drive, convert markdown to Docs formatting, print the Docs URL.

## Fallbacks

- **No editorial guidelines:** fall back to the shared voice reference and print a warning.
- **No brief:** refuse and tell the user to run `content-brief` first, or point to a hand-written brief.
- **Hero image APIs fail:** continue without a hero image; leave fields empty.
- **Notion/Docs push fails:** write the local file anyway and print the error.

## Verification

1. `posts/<slug>.md` exists with complete frontmatter.
2. Self-review summary is printed; all checks pass or the failures are explicitly listed.
3. Running `proofreading-style-check` on the output against the same `editorial-guidelines.md` returns zero critical findings (warnings are acceptable).
