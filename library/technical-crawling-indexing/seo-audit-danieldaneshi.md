---
name: "seo-audit"
description: "Audit and fix a website's SEO against a 19-point checklist covering sitemap.xml, robots.txt, titles and meta descriptions, canonical URLs, redirect chains, www to non-www, structured data, internal linking, click depth, thin and orphaned content, Core Web Vitals, page speed, accessibility, llms.txt, entity signals, backlinks, and Cloudflare DNS, SSL and bot settings. Use when asked to improve search ranking, run an SEO audit, fix indexing or crawlability, optimize meta tags, or check why a site is not ranking."
category: "technical-crawling-indexing"
platforms: ["claude-code"]
platform_source: "declared"
repo: "danieldaneshi/skills"
repo_url: "https://github.com/danieldaneshi/skills"
source: "https://github.com/danieldaneshi/skills/blob/HEAD/skills/seo-audit/SKILL.md"
raw_source: "https://raw.githubusercontent.com/danieldaneshi/skills/HEAD/skills/seo-audit/SKILL.md"
ref: "HEAD"
discovered_via: "github-search"
license: "MIT"
stars: 1
collected: "2026-11-13"
---

<!-- Claude Code skill · danieldaneshi/skills · skills/seo-audit/SKILL.md · MIT
     Source: https://github.com/danieldaneshi/skills/blob/HEAD/skills/seo-audit/SKILL.md
     Detected by: declared · Regenerated on every run; edit the upstream skill, not this copy. -->

# SEO Audit

Audit a website against the checklist below, fix everything fixable in the repo, verify
the rest against the live site, and hand back a short list of the actions only a human
can take.

## Ownership tags

Every check carries one tag. Respect it — the most common failure of an SEO pass is
reporting a dashboard task as "done".

- `[repo]` — you fix it directly by editing source files.
- `[live]` — you verify it against the deployed URL and report; the fix may be in the
  repo or in a provider's config.
- `[human]` — you cannot do it. Write it into the handoff list with exact steps.

## Step 1 — Scope the site

1. Identify the framework and where pages come from. Look for `astro.config.*`,
   `next.config.*`, `nuxt.config.*`, `config.toml` (Hugo), `_config.yml` (Jekyll), or a
   plain `index.html`. This tells you where titles, meta, and routes live.
2. Find the production URL: check `astro.config.*` (`site:`), `next-sitemap.config.*`,
   `wrangler.*`, `CNAME`, `package.json` `homepage`, the README, or `public/robots.txt`.
   If you cannot find one, ask for it before running any `[live]` check.
3. Enumerate the routes: page files under `src/pages`, `app/`, `pages/`, `content/`, plus
   any dynamic routes and their data source. Record the count — you need it in Step 4.

Report the framework, URL, and page count back before continuing.

## Step 2 — Run the checklist

Work through the phases in order; each depends on the one before it. Detailed criteria,
thresholds, and commands for every item are in
[references/checks.md](references/checks.md) — read it before judging an item, rather
than guessing at what "good" means.

For the live checks, run the bundled probe first and reuse its output:

```
scripts/check-live.sh https://example.com
```

It covers items 1, 2, 5, 6, 7, 8 and 12 and follows a sitemap index one level down.
`scripts/head-check.py` runs standalone against any single page:
`curl -s <url> | scripts/head-check.py`.

### Phase 1 — Crawlability and indexing

| # | Check | Tag |
| - | ----- | --- |
| 1 | `sitemap.xml` exists, lists only canonical 200-status URLs, is referenced in `robots.txt`, and is submitted | `[repo]` `[human]` |
| 2 | `robots.txt` is present, does not block anything indexable, and declares the sitemap | `[repo]` |
| 3 | Google Search Console and Bing Webmaster Tools are connected and the sitemap is submitted | `[human]` |
| 19 | Cloudflare bot and crawler settings are not blocking legitimate search or AI crawlers | `[human]` |

Item 19 first if the site is behind Cloudflare — an over-aggressive bot rule makes every
other check pointless because nothing gets crawled.

### Phase 2 — URL integrity

| # | Check | Tag |
| - | ----- | --- |
| 5 | Every page has exactly one self-referencing canonical, absolute, matching the served URL | `[repo]` |
| 6 | No duplicate pages; no redirect chain longer than one hop | `[live]` |
| 7 | `www` → non-www (or the reverse) resolves in a single 301, and `http` → `https` likewise | `[live]` |
| 8 | Cloudflare DNS resolves correctly and SSL mode is Full (strict) with a valid certificate | `[live]` `[human]` |

### Phase 3 — On-page content

| # | Check | Tag |
| - | ----- | --- |
| 4 | Unique title (roughly 50–60 chars) and meta description (roughly 140–160 chars) on every page | `[repo]` |
| 10 | Structured data present and valid for the page type; validate, do not just add | `[repo]` |
| 16 | Entity signals: consistent name, `sameAs` links, `Organization`/`Person` schema, About page | `[repo]` |

### Phase 4 — Architecture and content

| # | Check | Tag |
| - | ----- | --- |
| 9 | Internal links are descriptive, bidirectional between related pages, and not orphaning anything | `[repo]` |
| 13 | Pillar pages exist for each core topic, with clusters linking up to them | `[repo]` |
| 14 | Every important page is reachable within four clicks of the homepage | `[repo]` |
| 15 | No thin pages (under ~300 words with no other purpose) and no orphaned pages | `[repo]` |

Build the link graph once, from the route list in Step 1, and answer 9, 14, and 15 from
it together rather than re-crawling for each.

### Phase 5 — Performance and access

| # | Check | Tag |
| - | ----- | --- |
| 11 | Core Web Vitals: LCP under 2.5s, INP under 200ms, CLS under 0.1 | `[live]` `[repo]` |
| 18 | Accessibility: alt text, heading order, contrast, focus states, form labels | `[repo]` |

### Phase 6 — Agent-readable surfaces

| # | Check | Tag |
| - | ----- | --- |
| 12 | `llms.txt` at the root describing the site for AI crawlers; `openapi.json` **only if the site exposes a public API** | `[repo]` |

### Phase 7 — Off-site

| # | Check | Tag |
| - | ----- | --- |
| 17 | Relevant backlinks from credible, topically related domains | `[human]` |

## Step 3 — Report before fixing

Produce a table of findings, worst first. One row per finding:

`severity | item # | file:line or URL | what is wrong | proposed fix`

Use three severities: **blocking** (the page cannot be indexed or served),
**degraded** (indexed but ranking poorly), **polish**. Do not pad the report — a check
that passes gets one line, not a paragraph.

## Step 4 — Fix

Apply the `[repo]` fixes. Rules:

- Change source files, never build output. If you find yourself editing `dist/` or
  `.next/`, you have the wrong file.
- Titles and meta descriptions are content, not filler. Write from what the page
  actually says; never generate a description by restating the title.
- Where a framework provides an SEO component or layout prop, use it rather than adding
  raw `<meta>` tags to individual pages.
- Re-run `scripts/check-live.sh` after deploying to confirm the `[live]` items moved.

## Step 5 — Hand off what you cannot do

End with a numbered list of the `[human]` items that are still outstanding, each with
the exact place to go and what to click or paste. See
[references/manual-setup.md](references/manual-setup.md) for the walkthroughs to draw
these from. Never mark a `[human]` item complete on the user's behalf.
