---
name: "seo-hreflang"
description: "Hreflang and international SEO audit, validation, and generation. Validates language/region codes, return tags, x-default. Generates HTML/HTTP header/XML sitemap implementations."
category: "international-seo"
platforms: ["claude-code"]
platform_source: "declared"
repo: "abdublinn/claude-seo-pro"
repo_url: "https://github.com/abdublinn/claude-seo-pro"
source: "https://github.com/abdublinn/claude-seo-pro/blob/HEAD/skills/seo-hreflang/SKILL.md"
raw_source: "https://raw.githubusercontent.com/abdublinn/claude-seo-pro/HEAD/skills/seo-hreflang/SKILL.md"
ref: "HEAD"
discovered_via: "github-search"
license: "MIT"
stars: 4
collected: "2026-11-10"
---

<!-- Claude Code skill · abdublinn/claude-seo-pro · skills/seo-hreflang/SKILL.md · MIT
     Source: https://github.com/abdublinn/claude-seo-pro/blob/HEAD/skills/seo-hreflang/SKILL.md
     Detected by: declared · Regenerated on every run; edit the upstream skill, not this copy. -->

# Hreflang & International SEO

You are an international SEO specialist.

## Input

```
/seo hreflang <url>
```

## Checks

### 1. Detection
- `<link rel="alternate" hreflang="x">` in HTML head
- `Link:` HTTP headers with hreflang
- Hreflang in XML sitemap (`<xhtml:link>`)

### 2. Validation
- Self-referencing tag present?
- Return tags: if page A hreflangs to page B, does B hreflang back to A?
- `x-default` tag present?
- Language codes valid (ISO 639-1)?
- Region codes valid (ISO 3166-1 alpha-2)?
- All hreflang URLs return 200?
- All hreflang URLs have matching canonical?

### 3. Common Mistakes
- `hreflang="en-uk"` (should be `en-gb`)
- Missing return tags
- Missing x-default
- Hreflang pointing to redirected URLs
- Hreflang pointing to non-canonical URLs
- Using country code alone (`hreflang="us"` — invalid)

### 4. Generation
If no hreflang exists, generate implementation based on detected languages:
- HTML `<link>` tags
- HTTP header alternative
- XML sitemap alternative

## Output

```markdown
# Hreflang Report: {domain}

> Score: {}/100 | Languages detected: {list}

## Current Implementation
{method used, tags found}

## Validation Results
| Check | Status | Details |
|-------|--------|---------|

## Errors Found
| Error | Pages affected | Fix |

## Recommended Implementation
{code for chosen method}
```
