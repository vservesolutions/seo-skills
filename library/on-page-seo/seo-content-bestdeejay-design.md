---
name: "seo-content"
description: "Content and on-page SEO: thin content & duplicates, readability (Flesch-Kincaid), E-E-A-T signals; keyword density, cannibalization, LSI, long-tail, intent mapping; H1-H6 hierarchy and keywords in headings; image SEO (alt text, WebP/AVIF, lazy loading, dimensions, srcset). Script seo_content.py: keyword density + top terms (script/style stripped). Triggers: 'seo content', 'content audit', 'keywords', 'keyword research', 'seo headings', 'image seo', 'контент аудит', 'ключевые слова', 'заголовки h1', 'оптимизация картинок'."
category: "on-page-seo"
platforms: ["unspecified"]
platform_source: "none"
repo: "bestdeejay-design/agent-skills"
repo_url: "https://github.com/bestdeejay-design/agent-skills"
source: "https://github.com/bestdeejay-design/agent-skills/blob/HEAD/skills/seo-content/SKILL.md"
raw_source: "https://raw.githubusercontent.com/bestdeejay-design/agent-skills/HEAD/skills/seo-content/SKILL.md"
ref: "HEAD"
discovered_via: "github-search"
license: "MIT"
stars: 5
collected: "2026-11-12"
---

<!-- Unspecified skill · bestdeejay-design/agent-skills · skills/seo-content/SKILL.md · MIT
     Source: https://github.com/bestdeejay-design/agent-skills/blob/HEAD/skills/seo-content/SKILL.md
     Detected by: none · Regenerated on every run; edit the upstream skill, not this copy. -->

# SEO Content — on-page content & images

Use this skill for the **content** layer of SEO: on-page text quality, keywords,
headings, and image optimization.

## Commands (documented in `commands/`)

| Command | What it does |
|---|---|
| `seo-content` | Thin content, duplicates, readability (Flesch-Kincaid), E-E-A-T signals |
| `seo-keywords` | Keyword density, cannibalization, LSI, long-tail, intent mapping |
| `seo-headings` | H1–H6 hierarchy, order, keywords in headings, accessibility |
| `seo-images` | Alt text, WebP/AVIF, lazy loading, dimensions, srcset |

## Script

```bash
python3 scripts/seo_content.py --density --file page.html --keyword "fitness"
```

Keyword density + top terms. Script/style content is stripped first so CSS/JS
source does not inflate the word count. Pure Python stdlib; stdin supported.

## When to use

- User asks for "seo content", "content audit", "keywords", "keyword research",
  "seo headings", "image seo", "контент аудит", "ключевые слова".
- On-page content quality, headings hierarchy or image optimization is the task.

## Do NOT use

- For the full technical audit / CWV / reports / fixes — that is `seo-audit`.
- For schema.org / meta tags — that is `seo-schema`.
- For crawlability / linking structure / competitors — that is `seo-crawl`.

## Boundaries

- Do not use for crawl/indexability or structured-data checks; use `seo-crawl` or `seo-schema`.

## Audit workflow and evidence

Separate measured facts from editorial recommendations. Establish the target page, language, search intent, primary keyword source, word-count method, and comparison set before calculating density or cannibalization. Report the exact text or selector supporting each finding.

## Output gate

Return per-page metrics, detected keyword assumptions, headings and image evidence, prioritized edits, and unresolved unknowns. Do not prescribe an arbitrary density target as a ranking guarantee; natural language, intent coverage, and user value take precedence. Re-run the analyzer after edits and show the delta.
