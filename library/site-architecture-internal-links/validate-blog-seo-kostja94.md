---
name: "validate-blog-seo"
description: "Blog module SEO validation only — frontmatter, canonical URLs, internal links, build gates. Use before merge/deploy or when reviewing blog posts. NOT site-wide SEO audit."
category: "site-architecture-internal-links"
platforms: ["unspecified"]
platform_source: "none"
repo: "kostja94/openblog"
repo_url: "https://github.com/kostja94/openblog"
source: "https://github.com/kostja94/openblog/blob/HEAD/skills/validate-blog-seo/SKILL.md"
raw_source: "https://raw.githubusercontent.com/kostja94/openblog/HEAD/skills/validate-blog-seo/SKILL.md"
ref: "HEAD"
discovered_via: "github-search"
license: "MIT"
stars: 7
collected: "2026-11-13"
---

<!-- Unspecified skill · kostja94/openblog · skills/validate-blog-seo/SKILL.md · MIT
     Source: https://github.com/kostja94/openblog/blob/HEAD/skills/validate-blog-seo/SKILL.md
     Detected by: none · Regenerated on every run; edit the upstream skill, not this copy. -->

# Validate Blog SEO

**Scope:** blog module SEO validation only (frontmatter, canonical, build) — **NOT** site-wide SEO audit. For GEO, keyword research, or content strategy use **[marketing-skills](https://github.com/kostja94/marketing-skills)**.

## Pre-publish checklist

- [ ] `description` is 80–320 characters
- [ ] `slug` is kebab-case and matches filename
- [ ] `draft: false` for publish-ready posts
- [ ] Canonical URL has **no trailing slash**
- [ ] Internal links resolve to existing slugs
- [ ] Title is unique among published posts
- [ ] `npm run validate:posts` passes
- [ ] `npm run build` succeeds

## Canonical format

- Standalone / subdirectory: `https://{SITE_URL}/blog/{slug}`
- Subdomain: `https://{SITE_URL}/{slug}`

## Commands

Run from the repo root:

```bash
npm run validate:posts
npm run build
```

## Out of scope

- Site-wide SEO (homepage, product pages, llms.txt, GSC)
- Keyword research, content optimization, or GEO strategy → **[marketing-skills](https://github.com/kostja94/marketing-skills)**
- Marketing landing pages or non-blog routes
