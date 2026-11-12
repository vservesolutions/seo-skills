---
name: "search-experience"
description: "Search Experience Optimization (SXO). Diagnose why a well-optimized page still fails to rank or convert by reading the SERP backward to find what Google actually rewards, detecting page-type mismatch, deriving the user stories behind a query, and scoring the page from each buyer persona's view. Use when a page has good on-page SEO but will not rank, when ranking does not turn into leads, when there is an intent or page-type mismatch, or when someone wants an SXO review, a SERP-intent analysis, or a wireframe that fits what searchers expect. Bridges ranking and conversion: the right page type…"
category: "analytics-measurement"
platforms: ["unspecified"]
platform_source: "none"
repo: "avikbal-dm/claude-seo-skills"
repo_url: "https://github.com/avikbal-dm/claude-seo-skills"
source: "https://github.com/avikbal-dm/claude-seo-skills/blob/HEAD/plugins/growth-os/skills/search-experience/SKILL.md"
raw_source: "https://raw.githubusercontent.com/avikbal-dm/claude-seo-skills/HEAD/plugins/growth-os/skills/search-experience/SKILL.md"
ref: "HEAD"
discovered_via: "github-search"
license: "MIT"
stars: 1
collected: "2026-11-12"
---

<!-- Unspecified skill · avikbal-dm/claude-seo-skills · plugins/growth-os/skills/search-experience/SKILL.md · MIT
     Source: https://github.com/avikbal-dm/claude-seo-skills/blob/HEAD/plugins/growth-os/skills/search-experience/SKILL.md
     Detected by: none · Regenerated on every run; edit the upstream skill, not this copy. -->

# Search Experience

## What this does

A page can be technically clean, keyword-aligned, and still lose. Usually the reason is mismatch: the page is the wrong type for the query, or it answers a different intent than the searcher held, or it ranks but frustrates the person who clicks. SXO closes the gap between ranking and converting by working backward from the SERP and forward from the buyer.

This is where SEO and CRO meet. Getting found is half the job. Satisfying the intent behind the search is the other half, and it is the half most pages skip.

## When to use it

Use it when a page has solid SEO but will not rank, when it ranks but produces no leads, when you suspect an intent or page-type mismatch, or when you are designing a page and want it to match what searchers expect before you build it. It works alongside `search-demand-map`, which finds the demand, and `conversion-cro`, which fixes the on-page friction.

## Data you pull

- **The live SERP**: the single most honest signal of what Google has decided the query deserves. Read the page types ranking, the features present, and the angle the top results share.
- **Google Search Console**: the impression-to-click gap that shows the SERP is serving the page but searchers are choosing someone else, and the queries a page ranks for that reveal the intent it is actually matched to.
- **Microsoft Clarity and GA4**: what people do after they land, which tells you whether the page satisfied the intent or sent them back to search.

## Method

### 1. Read the SERP backward

For the target query, catalog what ranks. Are the top results guides, comparisons, product pages, tools, or listicles. That mix is Google's verdict on the dominant intent. If your page is a different type, the difficulty score does not matter. You brought the wrong format to the SERP.

### 2. Detect the mismatch

Name the gap between your page type and the page type the SERP rewards. A blog post cannot out-rank a wall of comparison pages for a comparison query. Either change the format or change the target.

### 3. Derive the user stories

Turn the query into the jobs behind it. "Best core banking software" is not one intent. It is a buyer comparing options, an analyst building a shortlist, and a practitioner checking a specific capability. Write the stories explicitly, because a page that serves one and ignores the rest leaves intent on the table.

### 4. Score from each persona's view

Walk the page as each persona. Does it answer their question fast, in the place they look, in the format they expect. Score the gaps. A page that wins for one persona and fails three is a page with a ceiling.

### 5. Bridge to conversion

Satisfying intent and capturing a lead are not the same act. Check that the page moves the satisfied searcher toward the next step, rather than answering the question so completely that they leave content and gone. Intent satisfaction without a path forward is a dead end with good metrics.

### 6. Specify the fix

Recommend the page type, the structure, and the elements the SERP and the personas demand. Where a rebuild is warranted, sketch the wireframe: what sits above the fold, what each persona needs, and where the conversion lives.

## Output

An SXO diagnosis: the SERP's verdict on intent, the page-type match or mismatch, the user stories the query contains, a per-persona score with the gaps named, and a specific structural fix or wireframe. Where the right move is to change the target rather than the page, say so.

## Guardrails

- The SERP outranks your assumption about intent. When they disagree, the SERP wins.
- One query can hold several intents. Serve the ones that matter, not just the obvious one.
- A page can satisfy intent and still fail to convert. Check both.
- Do not force a format the SERP rejects. Sometimes the fix is a different target, not a better version of the wrong page.

## Hands off to

`search-demand-map` when the fix is to retarget, `content-engine` to rebuild the page to the right type, `structured-data-engine` when a richer listing would win the click, and `conversion-cro` to close the gap between a satisfied searcher and a captured lead.

---

## About the author

Avik Bal is a B2B digital marketing practitioner specializing in web architecture, SEO, content strategy, and marketing analytics. He has helped enterprise software, fintech, and technology companies drive growth through scalable digital marketing programs. Avik is the author of *CITED: The Growth Operating System for AI Search*.

Part of the Growth Operating System. https://github.com/avikbal-dm/claude-seo-skills
