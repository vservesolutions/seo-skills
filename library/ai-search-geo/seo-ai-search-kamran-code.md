---
name: "seo-ai-search"
description: "Make a site rank on Google and get cited by AI assistants (ChatGPT, Perplexity, Gemini, Copilot, Claude). Use when implementing SEO on any site or framework, auditing search visibility, choosing structured data, researching keywords without paid tools, planning local or map-pack presence, improving AI-answer visibility (GEO/AEO), or diagnosing why traffic or AI citations are low. Covers technical SEO, schema, E-E-A-T, content strategy, and measurement."
category: "ai-search-geo"
platforms: ["claude-code"]
platform_source: "declared"
repo: "kamran-code/seo-ai-search"
repo_url: "https://github.com/kamran-code/seo-ai-search"
source: "https://github.com/kamran-code/seo-ai-search/blob/HEAD/SKILL.md"
raw_source: "https://raw.githubusercontent.com/kamran-code/seo-ai-search/HEAD/SKILL.md"
ref: "HEAD"
discovered_via: "github-search"
license: "MIT"
stars: 1
collected: "2026-11-14"
---

<!-- Claude Code skill · kamran-code/seo-ai-search · SKILL.md · MIT
     Source: https://github.com/kamran-code/seo-ai-search/blob/HEAD/SKILL.md
     Detected by: declared · Regenerated on every run; edit the upstream skill, not this copy. -->

# SEO + AI search visibility

Research-backed playbook (compiled September 2026 from primary sources: Google/Bing docs, Vercel/Cloudflare crawler data, Pew/Ahrefs/Semrush studies). Facts marked **VOLATILE** age within months — web-search them before relying on them; unmarked principles are stable.

## The one rule that covers everything

**Everything you want indexed, ranked, or cited must be in the initial server-rendered HTML.** Googlebot renders JavaScript (late, in a second pass); **no major AI crawler executes JavaScript at all** (GPTBot, ClaudeBot, PerplexityBot, CCBot fetch but never render — Vercel/MERJ data; VOLATILE per-bot, stable as a rule). Client-side-rendered content is invisible to the systems the client wants to win. SSG/ISR > SSR > CSR; CSR only behind login.

## Pick the workflow

- **Building or relaunching a site** → do "Implement" below, then read [references/technical.md](references/technical.md) and [references/structured-data.md](references/structured-data.md) for the details of each step.
- **Auditing an existing site** ("why don't we rank / why doesn't AI mention us") → run `node scripts/audit.mjs https://the-site` first (automates layers 1–2: robots/sitemap health, raw-HTML completeness, per-bot access), then follow the 8-step order in [references/audit-checklist.md](references/audit-checklist.md). Never audit from lab data alone; use field data and raw-HTML checks.
- **Keyword/content strategy** → the no-paid-tools method and honesty tiers in [references/keywords-content.md](references/keywords-content.md). Never promise rankings on head terms owned by aggregators; tier targets and say which are winnable.
- **A local/physical business** (shop, clinic, restaurant, gym) → profiles beat websites; read [references/local.md](references/local.md) FIRST. The map pack and AI business cards are fed by business profiles + reviews, not by web pages.
- **AI-answer visibility program** (get recommended by ChatGPT/Perplexity/Gemini) → [references/ai-search.md](references/ai-search.md): what feeds each assistant, the crawler/robots recipe, IndexNow, measurement.
- **The client wants OUT (or paid)** — limit AI reuse, block or monetize crawlers → the "other direction" section of [references/ai-search.md](references/ai-search.md): snippet controls, Bing NOCACHE/NOARCHIVE, Cloudflare default-blocking, bot verification.
- **Migrating a domain or URL structure** → the migration checklist in [references/audit-checklist.md](references/audit-checklist.md) before anything moves.

## Implement (new site checklist — the stable core)

1. **Rendering**: critical content, metadata, and JSON-LD in initial HTML (curl the page and grep for them — this one check covers Google freshness AND every AI crawler). Real 404 status codes from the server (SPA "not found" UIs with HTTP 200 become soft-404s).
2. **Metadata**: unique title (≤60 chars, primary keyword + brand) and description (≤155) per page; absolute canonical on every page (set the metadata base URL); OpenGraph/Twitter with absolute image URLs (broken share cards = lost WhatsApp/Slack distribution). Make titles/descriptions editable by the client (CMS-driven with code fallbacks) — SEO iteration must not need deploys.
3. **Structured data**: JSON-LD only; emit only types Google currently rewards — the supported list changes often (**VOLATILE**: re-fetch https://developers.google.com/search/docs/appearance/structured-data/search-gallery at use time; FAQ and HowTo rich results are dead, seven more types died June 2025). Always: Organization (with `sameAs` links — this grounds the brand entity for knowledge panels and LLMs) + BreadcrumbList. Per-archetype recipes: [references/structured-data.md](references/structured-data.md). Never mark up content that isn't visible on the page.
4. **Crawl surface**: sitemap.xml with real lastmod for every canonical URL; robots.txt allowing all legitimate crawlers **including AI crawlers explicitly** (roster in ai-search.md) and blocking low-value faceted/parameter URLs (robots block, not noindex — noindex still spends crawl budget; and never combine disallow with noindex — a blocked page can't show its noindex; mechanics in technical.md); paginated fallbacks for infinite scroll; noindex thin/placeholder pages.
5. **Performance**: field-data Core Web Vitals — LCP ≤ 2.5 s, INP ≤ 200 ms, CLS ≤ 0.1 at p75 (thresholds stable since Mar 2024). Ship less hydration JS, don't lazy-load the LCP image, break long main-thread tasks. CWV is a tiebreaker, not a dominant signal — don't oversell it.
6. **Indexing pipelines**: Google Search Console (verify, submit sitemap) AND **Bing Webmaster Tools + IndexNow** — Bing's index is the retrieval layer behind ChatGPT search and Copilot; a page Bing hasn't indexed cannot be cited there. Automate an IndexNow ping post-deploy (key file + POST sitemap URLs to api.indexnow.org).
7. **Content shape for AI citation** (evidence: Princeton GEO study — statistics, quotations, citations lift generative visibility 30–40%): self-contained factual passages with numbers and dates, question-shaped headings, tables, definition-first sentences. Third-party coverage of the brand beats brand-owned pages in AI citation weighting — earned media is part of the technical plan, not separate marketing.
8. **Bilingual/multilingual**: separate URLs per language with full bidirectional hreflang clusters (each page lists all variants including itself + x-default) when both languages must rank; a single mixed-language page ranks for its primary language only (acceptable when the second language is decorative). Subfolders > ccTLDs > subdomains by default.

## Honesty rules (apply to every engagement)

- Tier every keyword target: T1 winnable weeks–months (brand + local/low-competition), T2 winnable 6–18 months (content + links), T3 not winnable organically (aggregator-owned head terms) → the answer there is presence ON the ranking aggregators ("barnacle SEO") + paid search, and say so plainly.
- Quote timelines as ranges tied to actions, never guarantees. Rankings are not promisable; the work is.
- Never fabricate review counts, invent business facts for schema, buy link packages, or spin scaled thin content — Google's scaled-content-abuse and site-reputation-abuse policies are actively enforced (details in keywords-content.md).
- Every CTR/adoption statistic in these references carries a date; re-verify any number older than ~6 months before quoting it to a client.

## Measure

Google Search Console (+ its generative-AI performance report — impressions in AI surfaces; **VOLATILE**, metrics expanding), Bing Webmaster Tools AI Performance report (citations + the reformulated "grounding queries"), referral segments for chatgpt.com/perplexity.ai/copilot, server logs for AI-crawler hits, and a quarterly manual prompt-sampling audit (20–40 buyer prompts × 3 runs per assistant, scored for brand mention/position/sources). Full measurement stack and free tooling: [references/ai-search.md](references/ai-search.md) and [references/audit-checklist.md](references/audit-checklist.md).
