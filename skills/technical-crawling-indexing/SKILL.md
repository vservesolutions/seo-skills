---
name: seo-technical-crawling-indexing
description: "How search engines discover, crawl, render and index URLs, and how to remove crawl waste, duplicates and index bloat. Auto-generated from 6 findings across 3 sources."
last_updated: 2026-11-03
findings: 6
sources: 3
confidence: medium
---

# Technical SEO: Crawling, Indexing and Rendering

How search engines discover, crawl, render and index URLs, and how to remove crawl waste, duplicates and index bloat.

## When to use

Use when a page is not indexed or indexed wrongly, when crawl stats look wasteful, when planning robots.txt, sitemaps, canonicals, noindex or JavaScript rendering fixes, or when auditing index coverage after a release.

## Core practices

1. Allow is the default, so no robots.txt AI Training setting is needed to allow training. — *Bing Webmaster Blog, 2026-10-30*
2. Choose the setting for each use below; your training setting does not change your grounding setting, and vice versa. — *Bing Webmaster Blog, 2026-10-30*
3. Run the first method, spot-check a few outputs, and if several pages are coming back with the wrong content, switch over. — *Screaming Frog Blog, 2026-04-21*
4. Select ‘Visual Extractor’ (Globe icon) and enter a representative URL. — *Screaming Frog Blog, 2026-04-21*

## Recent developments

- **Screaming Frog SEO Spider Update – Version 25.0** — 2026-11-03 · Screaming Frog Blog — We’re delighted to announce Screaming Frog SEO Spider version 25.0, codenamed internally as ‘eaten your lunch’. ([link](https://www.screamingfrog.co.uk/blog/seo-spider-25))
- **Your content, your choice: clearer preferences for training and grounding** — 2026-10-30 · Bing Webmaster Blog — This announcement covers web publisher preferences for web content collected through our crawlers and used for training or to inform generated responses, including web-grounded responses in Bing, Copilot, and Microsoft 365 . ([link](https://blogs.bing.com/search/2026/10/your-content-your-choice-clearer-preferences-for-training-and-grounding))
- **WordPress website: Increased server response times and reduced Googlebot crawling since September — how can I identify the cause?** — 2026-10-27 · Webmasters Stack Exchange — Since September 2026, I've noticed a significant increase in the average response time reported by Google Search Console, along with a reduction in Googlebot's crawling activity. ([link](https://webmasters.stackexchange.com/questions/150043/wordpress-website-increased-server-response-times-and-reduced-googlebot-crawlin))
- **Page known to Google for several months – Discovered, not indexed** — 2026-10-26 · Webmasters Stack Exchange — Google crawled that article on the same day it was published, but more than two weeks later the Services page still reports: I compared the Services page with this page: The pricing page is indexed normally and was crawled again by Google… ([link](https://webmasters.stackexchange.com/questions/150038/page-known-to-google-for-several-months-discovered-not-indexed))
- **Screaming Frog SEO Spider Update – Version 24.0** — 2026-05-19 · Screaming Frog Blog — We have just released a small update to version 24.1 of the SEO Spider. ([link](https://www.screamingfrog.co.uk/blog/seo-spider-24))
- **Using the Screaming Frog SEO Spider to Generate Markdown at Scale** — 2026-04-21 · Screaming Frog Blog — In this guide, we’ll walk through two methods for generating markdown of every page on a site during a crawl, and we’ll share a Python script that takes the SEO Spider’s xlsx export and turns it into individual .md files for use downstream. ([link](https://www.screamingfrog.co.uk/blog/generate-markdown-at-scale))

## References

- [Screaming Frog SEO Spider Update – Version 25.0](https://www.screamingfrog.co.uk/blog/seo-spider-25) — Screaming Frog Blog · 2026-11-03
- [Your content, your choice: clearer preferences for training and grounding](https://blogs.bing.com/search/2026/10/your-content-your-choice-clearer-preferences-for-training-and-grounding) — Bing Webmaster Blog · 2026-10-30
- [WordPress website: Increased server response times and reduced Googlebot crawling since September — how can I identify the cause?](https://webmasters.stackexchange.com/questions/150043/wordpress-website-increased-server-response-times-and-reduced-googlebot-crawlin) — Webmasters Stack Exchange · 2026-10-27
- [Page known to Google for several months – Discovered, not indexed](https://webmasters.stackexchange.com/questions/150038/page-known-to-google-for-several-months-discovered-not-indexed) — Webmasters Stack Exchange · 2026-10-26
- [Screaming Frog SEO Spider Update – Version 24.0](https://www.screamingfrog.co.uk/blog/seo-spider-24) — Screaming Frog Blog · 2026-05-19
- [Using the Screaming Frog SEO Spider to Generate Markdown at Scale](https://www.screamingfrog.co.uk/blog/generate-markdown-at-scale) — Screaming Frog Blog · 2026-04-21

## How this skill stays current

- Regenerated on 2026-11-07 by `npm run update` from the local knowledge base (`data/findings.jsonl`).
- Coverage window: 2026-04-21 → 2026-11-03.
- 6 findings from 3 sources; confidence is **medium**.
- Add sources in `config/sources.json`, topics in `config/topics.json`, then run `npm run update`.
