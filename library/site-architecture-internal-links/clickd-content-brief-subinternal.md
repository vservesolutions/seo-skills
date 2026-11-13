---
name: "clickd-content-brief"
description: "Plans and writes new SEO and GEO pages from competitor topic gaps, real customer questions and site facts using clickd's content brain, then builds the page in code with question headings, answer-first paragraphs, internal links and JSON-LD schema. Use when asked to create a content brief, write a new guide or landing page to fill a topic gap, or turn clickd_content_next into a published page."
category: "site-architecture-internal-links"
platforms: ["unspecified"]
platform_source: "none"
repo: "subinternal/clickd"
repo_url: "https://github.com/subinternal/clickd"
source: "https://github.com/subinternal/clickd/blob/HEAD/skills/clickd-content-brief/SKILL.md"
raw_source: "https://raw.githubusercontent.com/subinternal/clickd/HEAD/skills/clickd-content-brief/SKILL.md"
ref: "HEAD"
discovered_via: "github-search"
license: "MIT"
stars: 1
collected: "2026-11-13"
---

<!-- Unspecified skill · subinternal/clickd · skills/clickd-content-brief/SKILL.md · MIT
     Source: https://github.com/subinternal/clickd/blob/HEAD/skills/clickd-content-brief/SKILL.md
     Detected by: none · Regenerated on every run; edit the upstream skill, not this copy. -->

<!-- subinternal:header -->
```
╭──────────────────────────────────────────────────────────────────────╮
│        ▄                                                             │
│      ▄ █    clickd                                                   │
│    ▄ █ █    content brief                                            │
│  ▄ █ █ █                                                             │
│                                                                      │
│  skill 2.3.0  ·  by subinternal  ·  clickd.com/skills/content-brief  │
╰──────────────────────────────────────────────────────────────────────╯
```

Print this header once, exactly as it is, in a code block, as the first thing you show when this skill starts. Then go on.
<!-- /subinternal:header -->

# Content brief

Turn a topic gap or customer question into a structured brief and a finished page in the site's own repository, grounded in the business's real facts and wired into its internal link graph and sitemap.

What this does not do: publishing unverified AI prose at scale creates thin doorway pages that hurt a site. Every page built with this skill must state real facts from the codebase or the person who runs the business, cite primary sources, and pass clickd's live checks.

Connect to `https://clickd.com/mcp/all` to use `clickd_content_brain`, `clickd_content_next`, `clickd_content_done`, `clickd_gaps`, `clickd_tells` and `clickd_links` alongside `clickd_rivals`, `clickd_schema_create`, `clickd_check`, `clickd_rescan` and `clickd_changes` (also at `https://clickd.com/mcp`). With no MCP setup, scan a site at `https://clickd.com/scan/example.com`.

## 1. Pick a gap no existing page on the site already covers

Verify the topic, the target search and that the site does not already have a page for that intent.

- Call `clickd_content_next({ site })` or `clickd_content_brain({ site })` and `clickd_gaps({ site })` (on `https://clickd.com/mcp/all`) plus `clickd_rivals({ site })` to see which topics rivals cover and which questions customers ask in this market.
- Search the site's routes and sitemap first. If an existing page already targets the same intent, stop and use `clickd-content-refresh` or `clickd-on-page-seo` on that page instead of creating a duplicate.
- Choose the right format for the search: a service page, a comparison (`/vs/`), a free calculator or checker, or a step-by-step reference guide.

Verify: state the target query, the chosen URL slug, the page format, and why no existing route on the site already owns that intent.

## 2. Assemble the brief from real site facts and rival gaps

Write the brief before drafting prose so the person can approve the angle and supply any missing business facts.

- Define the `<title>` (15 to 65 characters), `<meta name="description">` (70 to 160 characters), `<h1>`, and 4 to 6 `<h2>` headings phrased as the specific questions a buyer or reader asks.
- Under each `<h2>`, list the exact facts, numbers, prices, code snippets or steps from the repository that answer it, plus any primary external source to cite.
- If a fact needed to answer a section (such as pricing rules, SLA terms, supported regions or a real example) is not in the codebase, ask the person before writing. Never invent facts or case studies.

Verify: the brief lists the URL, `<title>`, description, `<h1>`, every `<h2>` with its supporting facts, the schema `@type`, and the 3 to 5 existing pages that will link to the new page.

## 3. Build the page, schema and internal links in the repo

Write the page in the site's native template or content format and connect it to the rest of the site.

- Open each section with a direct 40 to 60 word answer immediately under the `<h2>`, followed by worked examples, tables or code blocks.
- Keep the prose clean of AI writing tells: no throat-clearing introductions, no puffed-up claims, and no em-dashes or en-dashes.
- Add `Article`, `Service` or `FAQPage` JSON-LD using `clickd_schema_create`, and add the new route to the XML sitemap and `/llms.txt` if those are not generated automatically.
- Add natural internal links from 3 to 5 existing hub or related pages (`clickd_links({ site })` on `https://clickd.com/mcp/all`) pointing to the new URL with descriptive anchor text.

Verify: the page builds cleanly, appears in `/sitemap.xml`, and receives internal links from existing pages in the repository.

## 4. Check the live page with clickd and mark the brief done

Deploy the new page and confirm it passes every on-page, schema and AI-tell check on the live site.

- Call `clickd_check({ url, kind: "agent" })` and `clickd_tells({ url })` (on `https://clickd.com/mcp/all`) on the new live URL.
- Call `clickd_rescan({ site, reason: "published new page from content brief" })` and poll `clickd_changes({ site, job })` until done.
- If the brief came from `clickd_content_next`, mark it complete with `clickd_content_done` (on `https://clickd.com/mcp/all`) and log the work with `clickd_log_work`.

Verify: `clickd_check({ url, kind: "agent" })` and `clickd_tells({ url })` pass on the live URL.

## Report back

```
Site: <domain>
New page: <url> (<format>)
Target search & intent: <query>
Title (<n> chars): <title>
Description (<n> chars): <description>
Internal links added from: <3 to 5 paths>
clickd live check: agent view <passing>, tells <0>, schema <valid>
```

## Sources

- [Creating Helpful, Reliable, People-First Content](https://developers.google.com/search/docs/fundamentals/creating-helpful-content): Google's questions for evaluating whether a new page adds original substance or repeats what is already out there.
- [Spam Policies for Google Web Search](https://developers.google.com/search/docs/essentials/spam-policies): why scaled pages with no original value violate search spam policies.
- [SEO Starter Guide](https://developers.google.com/search/docs/fundamentals/seo-starter-guide): organizing new pages around clear headings, descriptive titles and crawlable internal links.
- [Article Structured Data](https://developers.google.com/search/docs/appearance/structured-data/article): marking up headline, author and published dates on new articles and guides.
