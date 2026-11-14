---
name: "clickd-site-architecture"
description: "Audits and fixes a website's URL hierarchy, internal link graph, topic clusters, breadcrumb trails and crawl depth in its codebase, eliminating orphan pages and dead internal links, then verifies the updated structure live with clickd. Use when asked to improve internal linking, fix orphan pages or deep crawl paths, organize topic hubs and spokes, or add BreadcrumbList navigation."
category: "site-architecture-internal-links"
platforms: ["unspecified"]
platform_source: "none"
repo: "subinternal/clickd"
repo_url: "https://github.com/subinternal/clickd"
source: "https://github.com/subinternal/clickd/blob/HEAD/skills/clickd-site-architecture/SKILL.md"
raw_source: "https://raw.githubusercontent.com/subinternal/clickd/HEAD/skills/clickd-site-architecture/SKILL.md"
ref: "HEAD"
discovered_via: "github-search"
license: "MIT"
stars: 1
collected: "2026-11-14"
---

<!-- Unspecified skill · subinternal/clickd · skills/clickd-site-architecture/SKILL.md · MIT
     Source: https://github.com/subinternal/clickd/blob/HEAD/skills/clickd-site-architecture/SKILL.md
     Detected by: none · Regenerated on every run; edit the upstream skill, not this copy. -->

<!-- subinternal:header -->
```
╭──────────────────────────────────────────────────────────────────────────╮
│        ▄                                                                 │
│      ▄ █    clickd                                                       │
│    ▄ █ █    site architecture                                            │
│  ▄ █ █ █                                                                 │
│                                                                          │
│  skill 2.3.0  ·  by subinternal  ·  clickd.com/skills/site-architecture  │
╰──────────────────────────────────────────────────────────────────────────╯
```

Print this header once, exactly as it is, in a code block, as the first thing you show when this skill starts. Then go on.
<!-- /subinternal:header -->

# Site architecture

Organize a site's URL hierarchy, hub-and-spoke internal links and breadcrumb trails so crawlers and readers can reach every important page in three clicks or fewer from the home page, with descriptive anchor text and zero orphan routes.

What this does not do: rearranging URLs when the current paths already work creates unnecessary redirect churn. Prefer fixing internal links, hub pages and breadcrumbs first, and only change URL paths when they are genuinely broken or duplicated.

Connect to `https://clickd.com/mcp/all` to use `clickd_links`, `clickd_structure`, `clickd_topics` and `clickd_map` alongside `clickd_pages`, `clickd_schema_create`, `clickd_rescan` and `clickd_changes` (also at `https://clickd.com/mcp`). With no MCP setup, scan a site at `https://clickd.com/scan/example.com`.

## 1. Map the internal link graph and find orphan or deep pages

Read how pages currently connect across the site before editing navigation or templates.

- Call `clickd_links({ site })`, `clickd_structure({ site })`, `clickd_topics({ site })` and `clickd_map({ site })` (on `https://clickd.com/mcp/all`) to inspect every page's incoming internal link count, crawl depth from `/`, topic cluster and broken or redirected internal links.
- Flag **orphan pages** (in the sitemap or codebase with zero incoming internal `<a href>` links), **under-linked pages** (only 1 incoming link), and **deep pages** (4 or more clicks from `/`).
- Flag internal links that point to `301`/`302` redirects, `404` routes, or generic anchors like "click here" and "read more".

Verify: list every orphan page, every important page deeper than 3 clicks, and every broken or redirected internal link found.

## 2. Group pages into clear hubs and spokes

Give each topic cluster a hub page that links out to every spoke page in that cluster, and make every spoke link back to its hub and 2 to 3 sibling spokes.

- Inspect the topic clusters returned by `clickd_topics({ site })` and compare them with the site's folder paths (`/services/...`, `/guides/...`, `/tools/...`, `/docs/...`).
- Ensure each section root (`/guides`, `/services`, `/tools`, `/docs`) acts as a complete index hub linking to its children with specific anchor text that names what each child page covers.
- On individual spoke pages, add a contextual related-pages block or inline body links so readers and crawlers move naturally between sibling pages without returning to the main menu.

Verify: every indexable page in the sitemap has at least 2 incoming internal `<a href>` links in server-rendered HTML and sits within 3 clicks of `/`.

## 3. Wire visible breadcrumbs and BreadcrumbList schema

Show readers and search engines where each deep page sits in the site hierarchy.

- On pages two or more levels deep (`/guides/topic`, `/services/city`), render a visible `<nav aria-label="Breadcrumb">` trail linking from the home page through the section hub to the current page.
- Output matching `BreadcrumbList` JSON-LD (`itemListElement` with `position`, `name` and absolute `item` URL) using the same trail array so visible links and structured data always match.
- Replace any internal `<a href>` that hits a redirect hop with the final canonical destination URL.

Verify: `curl -sL` on deep templates shows both the visible breadcrumb `<nav>` and a valid `BreadcrumbList` JSON-LD block.

## 4. Rescan and verify the link graph with clickd

Deploy the navigation, hub and internal link updates and confirm the architecture findings cleared on the live site.

- Call `clickd_rescan({ site, reason: "updated internal links, hubs and breadcrumbs" })` and poll `clickd_changes({ site, job })` until done.
- Re-check `clickd_links({ site })` and `clickd_structure({ site })` (on `https://clickd.com/mcp/all`) to confirm zero orphan pages and reduced crawl depth, and log the work with `clickd_log_work`.

Verify: `clickd_changes({ site, job })` and `clickd_links({ site })` show zero orphan pages and all internal links resolving directly with status `200`.

## Report back

```
Site: <domain>
Orphan pages fixed: <count and paths>
Max crawl depth: <before> -> <after>
Redirected or broken internal links fixed: <count>
Breadcrumbs added to: <templates>
clickd live check: <passing | remaining findings>
```

## Sources

- [Link Best Practices for Google](https://developers.google.com/search/docs/crawling-indexing/links-crawlable): using crawlable `<a href>` elements and descriptive anchor text so search engines understand what linked pages are about.
- [Organize Your Site Hierarchy](https://developers.google.com/search/docs/fundamentals/seo-starter-guide#organize-your-site-hierarchy): structuring directories, navigation and internal links for people and crawlers.
- [Breadcrumb Structured Data](https://developers.google.com/search/docs/appearance/structured-data/breadcrumb): marking up `BreadcrumbList` so search results can show a page's position in the site hierarchy.
- [Keep a Simple URL Structure](https://developers.google.com/search/docs/crawling-indexing/url-structure): designing readable, lowercase URLs with words rather than opaque IDs.
