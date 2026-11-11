---
name: "seo"
description: "Entry point for SEO work on any website or Shopify store. Use when the user types /seo, or asks to check, improve or fix a site's SEO and has not named a specific task. Routes to the right SEO skill, for example /seo audit <url> or /seo shopify <url>."
category: "general-seo"
platforms: ["claude-code"]
platform_source: "declared"
repo: "JittoJoseph/seo-skills"
repo_url: "https://github.com/JittoJoseph/seo-skills"
source: "https://github.com/JittoJoseph/seo-skills/blob/HEAD/skills/seo/SKILL.md"
raw_source: "https://raw.githubusercontent.com/JittoJoseph/seo-skills/HEAD/skills/seo/SKILL.md"
ref: "HEAD"
discovered_via: "github-search"
license: "MIT"
stars: 6
collected: "2026-11-11"
---

<!-- Claude Code skill · JittoJoseph/seo-skills · skills/seo/SKILL.md · MIT
     Source: https://github.com/JittoJoseph/seo-skills/blob/HEAD/skills/seo/SKILL.md
     Detected by: declared · Regenerated on every run; edit the upstream skill, not this copy. -->

# SEO

Route the request to the right skill.

| Command | Skill | What it does |
|---|---|---|
| `/seo audit <url>` | `seo-audit` | Checks any site from its URL and returns a score, evidence and fixes |
| `/seo shopify <url>` | `shopify-seo` | Audits a Shopify store and gives fixes in Shopify admin and theme terms |
| `/seo prompts <url>` | `shopify-seo` | Builds a prompt map: the questions shoppers ask AI assistants, and the pages that answer them |

If the user gives a URL with no command, treat it as `audit`. If the site is a Shopify store, or the user mentions Shopify, use `shopify-seo` instead.

If the user asks for something not in this table, say it is not available yet and offer an audit, because most SEO work starts from one. Then help as far as you can with general knowledge, and say that this part did not come from a skill.

To route, load the named skill and follow it. If it is not installed, tell the user to install the full pack:

```bash
npx skills add JittoJoseph/seo-skills
```
