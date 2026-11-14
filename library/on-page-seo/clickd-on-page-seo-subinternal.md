---
name: "clickd-on-page-seo"
description: "Audits and rewrites on-page SEO elements in a site's templates and content files, including title tags, meta descriptions, single H1s, question headings, answer-first openings, image alt text, source links and AI writing tells, then checks every page live with clickd. Use when asked to optimize a page for SEO, fix missing or duplicate titles and descriptions, clean up heading hierarchy, or remove AI writing tells flagged by clickd."
category: "on-page-seo"
platforms: ["unspecified"]
platform_source: "none"
repo: "subinternal/clickd"
repo_url: "https://github.com/subinternal/clickd"
source: "https://github.com/subinternal/clickd/blob/HEAD/skills/clickd-on-page-seo/SKILL.md"
raw_source: "https://raw.githubusercontent.com/subinternal/clickd/HEAD/skills/clickd-on-page-seo/SKILL.md"
ref: "HEAD"
discovered_via: "github-search"
license: "MIT"
stars: 1
collected: "2026-11-14"
---

<!-- Unspecified skill · subinternal/clickd · skills/clickd-on-page-seo/SKILL.md · MIT
     Source: https://github.com/subinternal/clickd/blob/HEAD/skills/clickd-on-page-seo/SKILL.md
     Detected by: none · Regenerated on every run; edit the upstream skill, not this copy. -->

<!-- subinternal:header -->
```
╭────────────────────────────────────────────────────────────────────╮
│        ▄                                                           │
│      ▄ █    clickd                                                 │
│    ▄ █ █    on-page seo                                            │
│  ▄ █ █ █                                                           │
│                                                                    │
│  skill 2.3.0  ·  by subinternal  ·  clickd.com/skills/on-page-seo  │
╰────────────────────────────────────────────────────────────────────╯
```

Print this header once, exactly as it is, in a code block, as the first thing you show when this skill starts. Then go on.
<!-- /subinternal:header -->

# On-page SEO

Make every public page state what it is about clearly in its `<title>`, `<meta name="description">`, `<h1>`, section headings and opening paragraph, using real facts from the site and zero filler. You edit the site's templates or content files and check the live pages with clickd.

What this does not do: sharper titles, headings and openings help search engines and readers understand a page and can lift click-through rate, but they do not guarantee a higher position. Never promise rankings.

Connect to `https://clickd.com/mcp` for `clickd_brief`, `clickd_pages`, `clickd_check`, `clickd_rescan` and `clickd_changes`, or `https://clickd.com/mcp/all` to also call `clickd_tells` and `clickd_queries`. With no MCP setup, scan a site at `https://clickd.com/scan/example.com`.

## 1. Inspect the page's current markup and queries

Read the live page findings and any search queries the page already gets before rewriting a word.

- Call `clickd_pages({ site, path })` to see the page's current `<title>`, description, headings, word count and failing on-page rules, or `clickd_brief({ site })` to find the pages with duplicate or missing metadata across the site.
- On a claimed site with Search Console connected, call `clickd_queries({ site })` (on `https://clickd.com/mcp/all`) to see the exact wording searchers already use to find the page.
- Call `clickd_tells({ url })` (on `https://clickd.com/mcp/all`) to spot stock AI transitions, puffed-up adjectives, rule-of-three padding and punctuation habits that weaken the copy.

Verify: record the current `<title>` (with character count), `<meta name="description">` (with character count), `<h1>`, and the list of failing rules for each target page.

## 2. Write specific title tags and meta descriptions

Give every indexable page a distinct `<title>` and `<meta name="description">` grounded in what the page actually offers.

- Keep `<title>` between 15 and 65 characters (counting the site name suffix only if it is short, and putting the specific topic first so it never truncates in results).
- Keep `<meta name="description">` between 70 and 160 characters: one or two plain sentences stating what the page covers or does, with concrete numbers or scope where the site has them.
- When multiple programmatic pages share a template, derive the title and description from each record's distinct fields so no two pages emit the same string.

Verify: every edited page has a unique `<title>` (15 to 65 characters) and `<meta name="description">` (70 to 160 characters) with no placeholder text.

## 3. Structure headings and answer-first openings

Put one clear `<h1>` at the top, organize sections under `<h2>` and `<h3>` headings that match real reader questions, and answer each question in its first sentences.

- Use exactly one `<h1>` per page that names the page's subject plainly. Do not skip heading levels (`<h1>` to `<h4>` with no `<h2>`).
- Where a section answers a question a customer asks, phrase the `<h2>` as that question and open the section with a direct 40 to 60 word answer before expanding into examples or tables.
- Add descriptive `alt` text to every content image (`alt=""` on purely decorative marks) and link primary sources when stating external facts or standards.

Verify: the heading outline runs `<h1>` then `<h2>`/`<h3>` in order, and each question heading is followed immediately by a direct answer paragraph.

## 4. Strip AI writing tells and unverified claims

Clean out stock phrases and any claim the site cannot back up.

- Remove throat-clearing openings, vague superlatives, and repetitive three-item lists flagged by `clickd_tells`.
- Never invent prices, turnaround times, customer counts, awards or guarantees that are not already in the site's codebase or data.
- Do not use em-dashes or en-dashes as punctuation; use a colon, comma, parentheses or a new sentence.

Verify: re-run `clickd_tells({ url })` on the updated page after deploy (or check the rendered text) and confirm zero tells remain.

## 5. Check the live pages with clickd

Ship the template or content edits and verify that the on-page findings are gone on the live site.

- Call `clickd_check({ url, kind: "agent" })` on each edited URL to confirm the updated `<title>`, description, headings and copy appear in the server-rendered HTML.
- Call `clickd_rescan({ site, reason: "updated on-page titles, headings and openings" })`, then poll `clickd_changes({ site, job })` until the read completes and log the work with `clickd_log_work`.

Verify: `clickd_changes({ site, job })` confirms the title, description, heading and copy rules passed on the live URLs.

## Report back

```
Site: <domain>
Pages updated: <count and paths>
Before -> After sample:
  Title: "<old>" (<n> chars) -> "<new>" (<n> chars)
  Description: "<old>" (<n> chars) -> "<new>" (<n> chars)
  H1: "<old>" -> "<new>"
clickd rules cleared: <list>
```

## Sources

- [Influencing Title Links in Search Results](https://developers.google.com/search/docs/appearance/title-link): how Google chooses a result's title link and why concise, specific `<title>` elements prevent rewrites.
- [Control Your Snippets in Search Results](https://developers.google.com/search/docs/appearance/snippet): what makes a `<meta name="description">` useful as a search snippet instead of boilerplate.
- [Creating Helpful, Reliable, People-First Content](https://developers.google.com/search/docs/fundamentals/creating-helpful-content): answering the reader's question directly with original facts rather than filler.
- [Google Search Image Best Practices](https://developers.google.com/search/docs/appearance/google-images): writing specific `alt` text that describes what an image shows in context.
