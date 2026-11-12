---
name: "koko-seo-geo-llmo-aeo"
description: "Audit a landing page, blog post, or draft content and score SEO, GEO, AEO, and LLMO with evidence-backed reasoning, clear confidence levels, and prioritized actions. Use this skill when the user wants an answer-engine readiness scorecard, a publishable content audit, or a shareable evaluation of how well a page performs for search, snippets, and LLM retrieval."
category: "ai-search-geo"
platforms: ["unspecified"]
platform_source: "none"
repo: "agenciakoko/koko-seo-geo-llmo-aeo"
repo_url: "https://github.com/agenciakoko/koko-seo-geo-llmo-aeo"
source: "https://github.com/agenciakoko/koko-seo-geo-llmo-aeo/blob/HEAD/SKILL.md"
raw_source: "https://raw.githubusercontent.com/agenciakoko/koko-seo-geo-llmo-aeo/HEAD/SKILL.md"
ref: "HEAD"
discovered_via: "github-search"
license: "MIT"
stars: 1
collected: "2026-11-12"
---

<!-- Unspecified skill · agenciakoko/koko-seo-geo-llmo-aeo · SKILL.md · MIT
     Source: https://github.com/agenciakoko/koko-seo-geo-llmo-aeo/blob/HEAD/SKILL.md
     Detected by: none · Regenerated on every run; edit the upstream skill, not this copy. -->

# Search Intelligence Audit

## Overview

Use this skill to evaluate a live URL or draft content for four dimensions:

- SEO: crawlability, structure, metadata, internal linking, schema, and technical performance
- GEO: generative engine optimization, including entity clarity, topical completeness, authority signals, and factual grounding
- AEO: answer engine optimization, including answer-first formatting, snippet readiness, FAQs, and extraction clarity
- LLMO: large language model optimization, including chunkability, quoteability, retrieval anchors, and semantic clarity

Read [references/ai-search-readiness.md](references/ai-search-readiness.md) when you want to emphasize AI citation readiness, crawler access, or passage-level reuse.

Answer in the user's language. If the user writes in Portuguese, the whole report is in Portuguese.

This skill is designed to produce a professional scorecard rather than vague commentary. It should prefer real evidence over intuition, separate hard findings from model judgment, and always explain why a score was assigned.

## Quick Start

This skill should work well for non-technical users.

Default input types:

- a live URL
- a draft article pasted into chat
- landing page copy pasted into chat
- 2 to 5 URLs for comparison
- a homepage URL for a sitewide-lite pass

Default expectation:

- do not ask the user to connect APIs
- do not require analytics access
- do not block on external setup

Preferred prompts:

- "Audit this URL for SEO, GEO, AEO, and LLMO"
- "Score this landing page and tell me what is leaking"
- "Review this blog draft before I publish it"
- "Compare these pages and tell me if they risk cannibalization"
- "Run a sitewide-lite audit from this homepage"

Read [references/public-prompts.md](references/public-prompts.md) when you need polished prompts for end users, demos, or marketplace copy.

## Workflow Decision Tree

Pick the strongest audit mode available:

1. `url-evidence`
   Use when a live URL is available.
   Base the analysis on rendered HTML, CWV, visible page structure, `robots.txt`, and on-page content.
   Collect evidence with what the host offers:
   - `python3 scripts/smoke_test_url.py <url>` (standard library only; adds Lighthouse through `npx` when Node is available)
   - a web fetch tool for the page and `/robots.txt`
   - dedicated render or Core Web Vitals tools, if the environment has them
   If performance data cannot be collected, write `not available` and lower confidence.

2. `compare-pages`
   Use when the user provides 2 to 5 URLs and wants to understand overlap, differentiation, or cannibalization-lite risk.
   Read [references/compare-mode.md](references/compare-mode.md) before writing the final answer.

3. `sitewide-lite`
   Use when the user wants a first-pass website audit from a homepage or root URL.
   Read [references/sitewide-lite.md](references/sitewide-lite.md) before writing the final answer.

4. `content-only`
   Use when the user shares draft copy, markdown, or notes without a live URL.
   Score only what can be inferred from the content itself and reduce confidence accordingly.

Always state the chosen audit mode in the report.

## Evidence Collection

Collect evidence in this order:

1. Identify the page type: `blog`, `landing-page`, or `other`.
2. Capture the page goal in one sentence.
3. Gather technical evidence from the page or tools.
4. Gather content evidence from headings, body copy, FAQs, schema, and linking patterns.
5. Only then assign scores.

For `compare-pages`, collect evidence for each page first, then compare intent, overlap, and differentiation.

For `sitewide-lite`, inspect a small set of internal pages and prioritize the biggest structural issues over completeness.

Do not invent:

- page speed data
- rankings
- SERP features
- competitor coverage
- analytics evidence you did not actually observe

If evidence is missing, lower confidence and say what is missing.

## Scoring Method

Read [references/scoring-rubric.md](references/scoring-rubric.md) before scoring.

Apply the rubric as follows:

1. Score each sub-signal from `0` to `5`.
2. Sum the five sub-signals for each dimension.
3. Multiply by `4` to get a `0-100` score for that dimension.
4. Use the page-type weights from [references/page-modes.md](references/page-modes.md) to compute the overall score.

Scoring discipline:

- `90-100`: strong and difficult to improve without specialization
- `75-89`: solid but still leaving meaningful upside
- `55-74`: mixed, workable, but missing important signals
- `35-54`: weak and likely underperforming
- `0-34`: structurally compromised or largely absent

Never use decimals in the four pillar scores. Round the overall score to the nearest integer.

## Output Requirements

Read [references/output-contract.md](references/output-contract.md) before writing the final answer.

Every audit must return three layers:

1. A compact scorecard that looks clean in chat and in screenshots
2. A diagnostic breakdown with evidence
3. A prioritized action plan

Use [references/example-output.md](references/example-output.md) as the quality bar for tone and structure.

Always include:

- page type
- audit mode
- overall score
- SEO score
- GEO score
- AEO score
- LLMO score
- confidence: `low`, `medium`, or `high`
- short verdict
- top wins
- top blockers
- next actions

For `compare-pages`, also include:

- overlap score by page pair
- risk label by page pair
- what each page should own

For `sitewide-lite`, also include:

- pages sampled
- sitewide top issues
- pages that need attention first

When the user wants something shareable, also include the short `Public Scorecard` variant defined in the output contract.
If the user wants a format suitable for Instagram, screenshots, or a carousel, read [references/shareable-output.md](references/shareable-output.md) and shape the output accordingly.

## Evidence Sources

Read [references/evidence-sources.md](references/evidence-sources.md) before using outside data.

Rules:

- Prefer page evidence and repo-native technical evidence first.
- If you use live external evidence, name the source and make clear it is source-backed.
- If a source is unavailable, do not simulate its output.
- External sources should deepen the audit, not become a setup requirement.

## Practical Defaults

- For blog posts, reward answer-first structure, FAQs, internal linking, entity clarity, and durable topical coverage.
- For landing pages, reward offer clarity, proof, objection handling, retrieval-friendly sections, and tight semantic alignment between promise and page structure.
- Penalize content that is stylish but hard to extract, quote, or summarize.
- Penalize content that depends on visual context without enough textual grounding.
- Penalize pages that appear strong semantically but have weak crawl/index/performance evidence.

## 2026 Calibration

Updated on 30/10/2026 (v1.2). What changed since the first release, and how it affects scoring:

- **No special AI files or formatting are required.** Google's [guide to AI features in Search](https://developers.google.com/search/docs/fundamentals/ai-optimization-guide) (May 2026, updated July 2026) says there is no need for `llms.txt`, special schema, or breaking content into tiny pieces, and that pages built to manipulate AI answers fall under scaled content abuse. Report `llms.txt` when present, never penalize its absence. Treat chunking and answer-first layout as readability: they support AEO and LLMO, but formatting alone never lifts a weak page. What weighs more: explicit prices, declared dates, specific facts, and coverage of the neighboring questions people ask.
- **Crawler access is the hard gate.** Search crawlers that feed answers: `Googlebot`, `Bingbot`, `OAI-SearchBot`, `Claude-SearchBot`, `PerplexityBot`, `Applebot` (Siri, Spotlight and Safari; follows the Googlebot rules when robots.txt does not name it), `Amzn-SearchBot` (Alexa) and `meta-webindexer` (Meta AI). A blocked search crawler is a P1 blocker for that engine. Training crawlers (`GPTBot`, `ClaudeBot`, `Google-Extended`, `Applebot-Extended`, `CCBot`, `Amazonbot`, `meta-externalagent`) are a business decision: report them, do not penalize. `OAI-AdsBot` only matters if the site advertises in ChatGPT.
- **User-triggered fetchers differ by vendor.** `ChatGPT-User`, `Perplexity-User`, `Amzn-User` and `meta-externalfetcher` may ignore `robots.txt`; Anthropic says `Claude-User` respects it. `Google-Agent` (browses and acts for a user) is controlled at the firewall, not in `robots.txt`.
- **Opt-out signals are business decisions, except grounding.** A `User-agent: __usage_ai-training` group in `robots.txt` opts out of training across vendors (Google honors it from 2027, Bing from 01/02/2027); report it. Bing's page-level `ai-grounding:disallow` (meta or `X-Robots-Tag`) removes the page from Copilot answers: treat it as P1 for Copilot.
- **Cloudflare can block Googlebot without touching robots.txt.** Since 15/09/2026, Cloudflare's "Block" and "Block on pages with ads" options for AI crawlers also block Googlebot, Bingbot and Applebot, because they crawl for search and training. When the site is behind Cloudflare (`cf-ray` header), say so and ask for the dashboard setting: "Disallow AI Training" is the option that blocks training only. A Googlebot user agent test proves nothing, because Cloudflare verifies by IP.
- **Search Console has an AI switch and an AI report.** Since 31/08/2026, every site has a "Search generative AI" control (Exclude removes the site from AI Overviews, AI Mode and Discover AI) and an impressions-only report for those surfaces. With access, an excluded site is P1 for Google's AI surfaces.
- **FAQ rich results are gone.** Google retired them on 07/05/2026. `FAQPage` stays valid for machine reading; never sell it as a rich-result opportunity.
- **Effort and real authorship weigh more.** Google's guidance on [generative AI content](https://developers.google.com/search/docs/fundamentals/using-gen-ai-content) and [helpful content](https://developers.google.com/search/docs/fundamentals/creating-helpful-content) rewards effort, originality and accuracy. Reward original data, first-hand experience, a named author with real credentials, and an honest note on how the content was made. Penalize mass-produced text with no original input and fabricated or generic authorship.
- **Freshness is declared, not assumed.** Reward `datePublished` and `dateModified` in structured data and a sitemap whose `lastmod` changes when the content changes.
- **Images count.** Content photos need a real `alt`; decorative images and carousel copies take `alt=""`. Report how many images lack the attribute and point to content photos with an empty one.
- **Measure what you can.** AI assistant referrals (chatgpt.com, perplexity.ai, gemini.google.com, copilot.microsoft.com, claude.ai) are the simplest proxy for GEO results; GA4's "AI Assistant" channel does not include AI Overviews or AI Mode, which stay in Google organic. Search Console's generative AI report and Bing Webmaster Tools' AI performance report (citations and the queries behind them) are the first-party sources. Never invent these numbers when you do not have access.

## Product Pages

Use `landing-page` weights for product and category pages, and add these checks:

- price in the local currency and availability, visible and in `Offer`
- `priceValidUntil`, when used, is not in the past (an expired one can drop the merchant listing)
- `Product.category`, return policy and shipping (`hasMerchantReturnPolicy`, `shippingDetails`, or at the organization level)
- a product name in the schema that stands on its own (brand + product + size or variant), not a bare line name
- reviews without hidden incentives (Google policy since July 2026)
- a Merchant Center feed: Google says feeds help products appear in AI answers; the conversational attributes (`question_and_answer` and related) are optional extras
- subscriptions: `subscription_cost` is US-only in Merchant Center; elsewhere the subscription price and terms must be in the page text
- agentic checkout (ChatGPT, Google UCP and universal cart, Copilot, Perplexity) is not available outside the US as of October 2026: mention it as "monitor", never as an action

## Machine-Readable Summary

If the answer can support it, include the JSON object defined in [references/output-contract.md](references/output-contract.md). This keeps the audit reusable in automation, dashboards, and comparison workflows.

If the user wants shareable copy from the structured summary, you can also use [scripts/render_shareable_output.py](scripts/render_shareable_output.py) to turn a JSON audit summary into a public scorecard and carousel-ready markdown.

## Scope Guardrail

This public skill is intentionally integration-free by default.

- Do not require Search Console
- Do not require Google Analytics
- Do not require API keys
- Do not reduce the usefulness of the audit just because the user only has a URL

If the user later asks for an advanced or source-enriched version, you may mention that stronger evidence sources exist. But the default product experience should remain simple: provide a URL or content, receive a professional audit.

## Publishing Notes

For launch materials and positioning, use:

- [references/calibration-cases.md](references/calibration-cases.md) for example score bands grounded in real pages
- [references/instagram-launch-kit.md](references/instagram-launch-kit.md) for carousels, captions, and CTA copy
