---
name: "seo-toolkit"
description: "DEPRECATED meta-skill. Routes to the four focused SEO skills that replaced it: seo-audit (technical audit + Core Web Vitals + report + fixes), seo-schema (JSON-LD + meta/OG/Twitter), seo-content (content + keywords + headings + images), seo-crawl (crawlability + structure + competitors). Load one of the four directly instead. Triggers: 'seo', 'сео', 'seo toolkit', 'поисковая оптимизация'."
category: "core-web-vitals-performance"
platforms: ["unspecified"]
platform_source: "none"
repo: "bestdeejay-design/agent-skills"
repo_url: "https://github.com/bestdeejay-design/agent-skills"
source: "https://github.com/bestdeejay-design/agent-skills/blob/HEAD/skills/seo-toolkit/SKILL.md"
raw_source: "https://raw.githubusercontent.com/bestdeejay-design/agent-skills/HEAD/skills/seo-toolkit/SKILL.md"
ref: "HEAD"
discovered_via: "github-search"
license: "MIT"
stars: 5
collected: "2026-11-09"
---

<!-- Unspecified skill · bestdeejay-design/agent-skills · skills/seo-toolkit/SKILL.md · MIT
     Source: https://github.com/bestdeejay-design/agent-skills/blob/HEAD/skills/seo-toolkit/SKILL.md
     Detected by: none · Regenerated on every run; edit the upstream skill, not this copy. -->

# SEO Toolkit — DEPRECATED (router)

> **This skill is deprecated.** The 13 commands were split into four focused
> skills. Do **not** run the old 13-command workflow — load the matching
> sub-skill directly.

## Routing table

| Need | Load this skill instead |
|---|---|
| Full technical audit, Core Web Vitals, scored report, autonomous fixes | `seo-audit` |
| JSON-LD schema.org, meta tags, Open Graph, Twitter Cards | `seo-schema` |
| Content quality, keywords, headings, image SEO | `seo-content` |
| Crawlability, internal linking, URL structure, competitors | `seo-crawl` |

The old command docs moved into the four new skills:

- seo-audit / seo-speed / seo-report / seo-fix → `seo-audit`
- seo-schema / seo-meta + `seo_schema.py` (meta, jsonld) → `seo-schema`
- seo-content / seo-keywords / seo-headings / seo-images + `seo_content.py` (density) → `seo-content`
- seo-crawl / seo-structure / seo-compare → `seo-crawl`

## Removal plan

Keep this router for one release cycle for backward compatibility, then delete.

## Boundaries

- Do not use this deprecated router when a focused `seo-*` skill is applicable.

## Evidence and completion gate

Run the documented command against the user’s actual input. Report the command, exit status, files changed or produced, and relevant stdout/stderr. Separate blocked or pre-existing failures from failures introduced by the current work. Do not call the result complete when the script was only described or when an artifact was not reopened and checked.
