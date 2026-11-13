---
name: "clickd-technical-seo"
description: "Audits and fixes technical SEO across a website in its own codebase, including robots.txt, XML sitemaps, canonical tags, redirect chains, noindex headers, server-rendered HTML, HTTPS and security headers, then verifies every fix on the live site with clickd. Use when asked for a technical SEO audit, when pages are not indexed in Google Search Console, when JavaScript rendering hides copy from crawlers, or when clickd reports crawl and indexing findings."
category: "technical-crawling-indexing"
platforms: ["unspecified"]
platform_source: "none"
repo: "subinternal/clickd"
repo_url: "https://github.com/subinternal/clickd"
source: "https://github.com/subinternal/clickd/blob/HEAD/skills/clickd-technical-seo/SKILL.md"
raw_source: "https://raw.githubusercontent.com/subinternal/clickd/HEAD/skills/clickd-technical-seo/SKILL.md"
ref: "HEAD"
discovered_via: "github-search"
license: "MIT"
stars: 1
collected: "2026-11-13"
---

<!-- Unspecified skill · subinternal/clickd · skills/clickd-technical-seo/SKILL.md · MIT
     Source: https://github.com/subinternal/clickd/blob/HEAD/skills/clickd-technical-seo/SKILL.md
     Detected by: none · Regenerated on every run; edit the upstream skill, not this copy. -->

<!-- subinternal:header -->
```
╭──────────────────────────────────────────────────────────────────────╮
│        ▄                                                             │
│      ▄ █    clickd                                                   │
│    ▄ █ █    technical seo                                            │
│  ▄ █ █ █                                                             │
│                                                                      │
│  skill 2.3.0  ·  by subinternal  ·  clickd.com/skills/technical-seo  │
╰──────────────────────────────────────────────────────────────────────╯
```

Print this header once, exactly as it is, in a code block, as the first thing you show when this skill starts. Then go on.
<!-- /subinternal:header -->

# Technical SEO

Find and fix the technical barriers that stop search engines and AI crawlers from fetching, rendering and indexing a site's pages. You work in the site's own repository and verify every fix on the live URL with clickd.

What this does not do: fixing crawlability and indexing lets search engines read the site cleanly, but it does not guarantee rankings. Never promise a ranking jump or an indexing date.

Connect to `https://clickd.com/mcp` for the core tools (`clickd_site`, `clickd_brief`, `clickd_pages`, `clickd_check`, `clickd_rescan`, `clickd_changes`), or `https://clickd.com/mcp/all` to list all 64 tools including `clickd_structure` and `clickd_links`. With no MCP setup, scan a site at `https://clickd.com/scan/example.com`.

## 1. Read the live site and rank technical blockers

Pull the live technical state before you touch a template or router file.

- Call `clickd_brief({ site })` to get the prioritized fix list and `clickd_structure({ site })` (on `https://clickd.com/mcp/all`) to inspect status codes, canonicals, sitemaps and crawl depth across the site.
- Call `clickd_check({ url, kind: "ssl" })` on the root domain to verify the TLS certificate chain, expiry and HTTPS redirects.
- Separate blockers that keep pages out of the index (`noindex`, `robots.txt` blocks, 4xx/5xx status codes, broken canonicals, empty client-rendered shells) from hygiene fixes (security headers, redirect hops, missing `llms.txt`).

Verify: list every failing technical rule from `clickd_brief` with the exact routes affected and the template or middleware file responsible.

## 2. Fix crawl access, sitemaps and canonical URLs

Make sure crawlers can discover every public page at one canonical `https` address with no redirect chains.

- In `robots.txt`, allow Googlebot, Bingbot and major AI crawlers (`GPTBot`, `OAI-SearchBot`, `ClaudeBot`, `PerplexityBot`) on public pages and assets, and point to the canonical XML sitemap with `Sitemap: https://<domain>/sitemap.xml`.
- In the XML sitemap, list only canonical, indexable `200` pages. Strip `noindex` routes, redirects, parameter URLs and login pages.
- On every indexable page, output one self-referencing `<link rel="canonical" href="https://...">` in `<head>` that matches the sitemap URL byte for byte (protocol, host and trailing slash).
- Collapse internal links that hit `http://`, non-canonical hosts or multi-hop redirects so every internal `href` points straight to the final `200` destination.

Verify: `curl -sI` on the root domain, `/robots.txt`, `/sitemap.xml` and three representative pages returns `200` with no intermediate redirect hops and matching `rel="canonical"` tags.

## 3. Ensure server-rendered HTML for crawlers and agents

Make the page's real heading, body copy and internal links present in the initial HTML response before client JavaScript runs.

- Call `clickd_check({ url, kind: "agent" })` (or fetch `https://clickd.com/tools/agent-view.json?url=https://example.com`) on each key template to compare what an HTML-only crawler reads against what a browser renders.
- If a route ships an empty `<div id="root"></div>` shell or hides primary copy behind client fetches, move data fetching to server rendering, static generation or prerendering in the site's framework.
- Check that `<title>`, `<meta name="description">`, `<h1>`, body paragraphs, navigation links and JSON-LD `<script type="application/ld+json">` appear in `curl -sL` output without executing scripts.

Verify: `clickd_check({ url, kind: "agent" })` shows the full heading outline and body text in the raw HTML response.

## 4. Tighten status codes, security headers and page speed

Clean up soft 404s, stray `noindex` headers and missing security policies at the server or edge config.

- Return a real HTTP `404` or `410` status on missing records instead of rendering an empty template with status `200` (a soft 404).
- Check both `<meta name="robots">` and the `X-Robots-Tag` HTTP response header so staging `noindex` rules never leak onto production routes.
- Add `Strict-Transport-Security`, `X-Content-Type-Options: nosniff`, `Referrer-Policy` and a `Content-Security-Policy` or `X-Frame-Options` header in the server or hosting config.
- Give hero and above-the-fold images explicit `width` and `height` attributes, modern formats (`webp` or `avif`) and non-blocking script loading so layout shift and render delay stay low.

Verify: `clickd_pages({ site, path })` and `curl -sI` confirm status codes, robot headers and security headers on the live or preview response.

## 5. Rescan and prove every fix on the live site

Deploy the changes as the person allows and run a fresh clickd read to confirm the findings cleared.

- Call `clickd_rescan({ site, reason: "fixed technical SEO findings" })` and poll `clickd_changes({ site, job })` every minute or two until it finishes.
- Log what changed and which findings cleared with `clickd_log_work`. If a rule still fails on a template, inspect the live HTML with `clickd_pages({ site, path })` and fix the remaining route.

Verify: `clickd_changes({ site, job })` shows the targeted technical rules moved to fixed with zero new regressions.

## Report back

```
Site: <domain>
Technical rules fixed: <list of clickd rules cleared>
Routes updated: <files or middleware changed>
Live check: robots.txt <ok>, sitemap.xml <n URLs>, agent HTML check <passing>, TLS & headers <passing>
Remaining blockers: <none | list with why>
```

## Sources

- [Google Search Essentials](https://developers.google.com/search/docs/essentials): the technical requirements a page must meet to be eligible to appear in Google Search.
- [Create and Submit a robots.txt File](https://developers.google.com/search/docs/crawling-indexing/robots/create-robots-txt): how crawlers read `robots.txt` directives and `Sitemap:` lines.
- [Build and Submit a Sitemap](https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap): which canonical URLs belong in an XML sitemap and how search engines process them.
- [How to Specify a Canonical with rel="canonical" and Other Methods](https://developers.google.com/search/docs/crawling-indexing/consolidate-duplicate-urls): keeping canonical signals consistent across HTML tags, sitemaps and redirects.
- [Understand the JavaScript SEO Basics](https://developers.google.com/search/docs/crawling-indexing/javascript/javascript-seo-basics): why server-rendered HTML avoids rendering delays and empty shells for crawlers.
