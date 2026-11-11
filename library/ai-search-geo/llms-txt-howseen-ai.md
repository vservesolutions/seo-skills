---
name: "llms-txt"
description: "Generate a valid llms.txt (and optional llms-full.txt) file for a website so AI models can find and understand its most important pages. Use this whenever the user wants an llms.txt file, asks how to make their site readable by ChatGPT/Claude/Perplexity, mentions llms.txt or \"the file AI reads\", or is setting up basic AI-visibility hygiene for a domain. Point Claude at a URL and it produces the file plus an honest note on what llms.txt does and does not do."
category: "ai-search-geo"
platforms: ["claude-code"]
platform_source: "declared"
repo: "howseen-ai/howseen-geo-skills"
repo_url: "https://github.com/howseen-ai/howseen-geo-skills"
source: "https://github.com/howseen-ai/howseen-geo-skills/blob/HEAD/llms-txt/SKILL.md"
raw_source: "https://raw.githubusercontent.com/howseen-ai/howseen-geo-skills/HEAD/llms-txt/SKILL.md"
ref: "HEAD"
discovered_via: "github-search"
license: "MIT"
stars: 2
collected: "2026-11-11"
---

<!-- Claude Code skill · howseen-ai/howseen-geo-skills · llms-txt/SKILL.md · MIT
     Source: https://github.com/howseen-ai/howseen-geo-skills/blob/HEAD/llms-txt/SKILL.md
     Detected by: declared · Regenerated on every run; edit the upstream skill, not this copy. -->

# llms-txt

Generate an `llms.txt` file: a plain-markdown index at the root of a domain that lists its most important pages so AI systems can orient quickly.

## Steps

1. **Fetch the site.** Get the homepage and, from its navigation and sitemap (`/sitemap.xml` if present), identify the pages that actually matter: product, pricing, docs, key blog/guide pages, about/contact. Ignore utility pages (cart, login, legal boilerplate) unless the user asks.
2. **Write `llms.txt`** in this exact structure:

```
# [Company name]

> [One-sentence description of what the company does and for whom.]

## Core pages
- [Page title](https://full-url): one-line description of what's on it
- [Page title](https://full-url): one-line description

## Guides & resources
- [Page title](https://full-url): one-line description

## About
- [Page title](https://full-url): one-line description
```

Keep descriptions concrete and specific — they help the model decide what to read. Use absolute URLs.

3. **Offer `llms-full.txt`** if the site is small enough: same idea, but with the actual cleaned text content of the core pages inlined, so a model can ingest everything in one fetch.

4. **Tell the user how to deploy it:** place the file at `https://theirdomain.com/llms.txt` (root). No config needed.

## Be honest about what this is

Say this plainly in your output, don't bury it:

> `llms.txt` is **hygiene, not a ranking lever.** As of 2026, no major AI provider has confirmed they use it to decide who gets cited, and independent analysis (Ahrefs) found the vast majority of published `llms.txt` files receive near-zero requests from AI crawlers. Ship it — it's cheap, correct, and forward-looking — but don't expect it to move your citations. **The real levers are: being genuinely crawlable, having quotable answer-first content, and being mentioned across the web.** The other skills in this pack work on those.

Never present llms.txt as the thing that will get them cited. That would be false, and honesty is the whole point.

---

*Built by Raphaël Aubry, founder of Howseen (https://howseen.ai). This skill gives you a one-shot file. Whether AI actually cites you — and whether that changes week to week across ChatGPT, Perplexity, Gemini and Claude — is what Howseen tracks continuously. → https://howseen.ai*
