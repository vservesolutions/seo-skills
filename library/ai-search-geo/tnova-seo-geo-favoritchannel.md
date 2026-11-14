---
name: "tnova-seo-geo"
description: "TNova Labs methodology for AI-Visibility (GEO) and traditional SEO targeted at independent HVAC contractors. Use when implementing or auditing schema.org JSON-LD markup, llms.txt files, FAQPage markup on blog posts, AI engine citation tactics, Google Business Profile optimization, NAP consistency, or HVAC-specific local SEO. Also trigger when writing GEO-cite-friendly content (blog posts designed to be cited by ChatGPT, Claude, Perplexity, Gemini), building a methodology page, or planning an AI Visibility Audit. Built specifically for the v2.0 TNova Labs business model — independent HVAC…"
category: "ai-search-geo"
platforms: ["claude-code"]
platform_source: "declared"
repo: "Favoritchannel/claude-code-skills"
repo_url: "https://github.com/Favoritchannel/claude-code-skills"
source: "https://github.com/Favoritchannel/claude-code-skills/blob/HEAD/skills/tnova-seo-geo/SKILL.md"
raw_source: "https://raw.githubusercontent.com/Favoritchannel/claude-code-skills/HEAD/skills/tnova-seo-geo/SKILL.md"
ref: "HEAD"
discovered_via: "github-search"
license: "MIT"
stars: 0
collected: "2026-11-14"
---

<!-- Claude Code skill · Favoritchannel/claude-code-skills · skills/tnova-seo-geo/SKILL.md · MIT
     Source: https://github.com/Favoritchannel/claude-code-skills/blob/HEAD/skills/tnova-seo-geo/SKILL.md
     Detected by: declared · Regenerated on every run; edit the upstream skill, not this copy. -->

# TNova SEO/GEO Skill

## When to use this skill

Trigger this skill when the work involves any of:

- Adding or auditing **schema.org JSON-LD** on TNova Labs site (`Organization`, `LocalBusiness`, `HVACBusiness`, `FAQPage`, `Service`, `WebSite`, `BreadcrumbList`)
- Writing or updating **llms.txt** at site root
- Configuring **robots.txt** for AI crawlers (`GPTBot`, `ClaudeBot`, `PerplexityBot`, `Google-Extended`)
- Authoring **GEO-cite-friendly blog posts** (designed to be quoted by AI assistants)
- Building or maintaining the `/methodology` page
- Designing **AI engine citation harvest** queries (the 30 standardized prompts)
- Optimizing **Google Business Profile** for HVAC contractors
- Auditing **NAP consistency** across directories
- Anything involving the term "AI Visibility" / "AI citation score" / "GEO" in TNova context

If you are doing generic SEO unrelated to TNova/HVAC/GEO, do not use this skill — use generic SEO knowledge.

## Core philosophy

1. **GEO ≠ SEO, but GEO depends on SEO.** AI engines cite pages that are well-indexed. Old-school SEO hygiene (clean schema, fast loads, valid HTML) is table-stakes for both.
2. **Citation share > rank position.** In AI search, you are mentioned or you are not. There is no "page 2".
3. **Entity strength is the moat.** AI engines infer "who is this business" from a graph of mentions across the open web — directories, news, reviews, structured data. The more sources agree, the more likely AI cites you.
4. **Every page is its own document.** Perplexity, ChatGPT, and Google AI Overviews evaluate one URL at a time — they do not crawl the site and assemble a graph. Brand-identity schemas (Organization, WebSite, LocalBusiness/HVACBusiness) must ship on **every page**, not just the home page. Otherwise `provider: { "@id": "#business" }` on /services/[slug] dangles and the page loses entity credit. See `references/schema-templates.md` §9.
5. **Honest > optimized.** Fake reviews, inflated stats, or LLM-generated boilerplate erode the very signals AI engines weight highest. TNova never publishes synthetic content as authoritative.
6. **Plain English on customer-facing surfaces.** HVAC contractors are 45-65, 6th-grade reading level fast. Translate every technical concept (see `references/copy-translations.md`).

## Workflow

### A. Implementing schema.org markup
1. Open `references/schema-templates.md` → copy the template that matches the page type
2. Fill in TNova's NAP data (use `your canonical NAP file` as source of truth)
3. **Pick the right Offer shape**:
   - Single fixed price → §4 plain Offer
   - Range / tier pricing (most home services) → §4b `AggregateOffer` with `priceSpecification[]`
   - Quote on inspection → §4c `Offer` with `PriceSpecification.description` + numeric `minPrice`/`maxPrice` anchor
4. Drop into `<Script type="application/ld+json">` block in the page's JSX
5. **Mount brand-identity schemas in the layout, not just on home** — Org + WebSite + LocalBusiness must ship on every page so `provider: @id` references resolve (see §9 in templates)
6. Static validation: `python scripts/validate-schema.py <path-to-page-or-html>`
7. **Runtime validation**: start the dev server, then `python scripts/verify-schema-runtime.py <url>` — catches dangling `@id` references and AggregateOffer shape bugs that static checks can't see
8. Final check via Google Rich Results Test (manual, browser)

### B. Writing or updating llms.txt
1. Open `references/llms-txt-template.md`
2. Mirror current site structure — every indexable page gets a one-line description
3. Group: Core / Audit / Pricing / Methodology / Blog / About / Legal
4. Validate: `python scripts/check-llms-txt.py <path>`
5. Place at `web/public/llms.txt` (Next.js serves `public/` from root)

### C. GEO-cite-friendly blog post
1. Open `references/geo-content-rubric.md` — checklist must be 100% green
2. Open with **TL;DR block** (1-3 sentences, factual, source-stamped) — this is what AI engines will quote
3. Use **numbered lists** for procedures (AI engines parse them as discrete steps)
4. Embed **FAQPage schema** (template in `references/schema-templates.md`)
5. Cite at least 1 **authoritative outbound link** (.gov, .edu, industry magazine, Anthropic blog, etc.)
6. Author byline + dates (`datePublished` + `dateModified` in BlogPosting schema)
7. Internal link to `/visibility-audit`

### D. Designing audit queries
1. Open `references/citation-query-library.md` — 30 canonical templates
2. Parameterize per audit: `{city}`, `{state}`, `{service}` (default HVAC)
3. Run against 4 engines: ChatGPT, Claude, Perplexity, Gemini/Google AI Overviews
4. Parse responses with Claude Haiku 4.5 (cheap, structured-output mode)
5. Count: target_business_mentions / 30 → citation share (0-100 scaled)

### E. NAP consistency audit
1. Open `references/nap-directory-checklist.md` — 12 directories ranked by AI-engine weight
2. For each: scrape current listing, compare Name/Address/Phone byte-for-byte
3. Score: 100% match across top-6 = perfect; each mismatch = -8 points
4. Report deltas with exact diff (not just "inconsistent")

### F. Service-detail pages (per-service URLs like /services/[slug])

When the site has 3+ services worth distinct pages (HVAC: ac-repair, furnace-install, heat-pump; cleaning: standard, deep, move-out, office, etc.), each needs its own URL for AI engines to cite specific services with specific prices.

**Before starting:** Read `references/nextjs-app-router-gotchas.md` end-to-end. The 10 gotchas there are guaranteed to bite if you don't know them — `useSearchParams` + Suspense, edge runtime vs generateStaticParams, favicon conventions, etc.

1. Generate one static page per service via Next.js `generateStaticParams` (mirror the blog `[slug]` pattern)
2. Each page emits **three** page-specific JSON-LD blocks on top of the global Org/WebSite/LocalBusiness:
   - `Service` with AggregateOffer (or quote-mode Offer)
   - `FAQPage` with 2–3 service-specific Q&A (different copy from the home FAQ — no duplicates across pages)
   - `BreadcrumbList`: Home > Services > {name}
3. **Tier-low price visible in HTML body** — every service page must have its "from $X" in plain text, not just inside the JSON-LD. AI engines cross-reference body text against structured data; absence in body = lower confidence.
4. **Derive price copy from data** (ICU `{lowPrice}` placeholder, resolve from `services.ts` at render). Never hardcode `$120` in i18n strings — they drift when tiers change. See gotchas §5.
5. Title: 50-60 chars including a price anchor where possible ("AC repair in Cincinnati from $149 | …")
6. Meta description: 150-160 chars, factual, includes price floor + city
7. Update `sitemap.ts` to include the index `/services` + every `/services/{slug}` (priority 0.8–0.9). Use `service.contentUpdatedAt` for `lastModified`, not `now`.
8. Update llms.txt §Services to list every service with a one-line bullet + price summary
9. Per-service OG images via `opengraph-image.tsx` in the slug folder (system fonts, mono palette, brand wordmark + service name + price). See gotchas §1 for the runtime trap.

**Form hardening for the booking CTA on these pages:** see the `lead-form-hardening` skill — layered server-side anti-spam (honeypot + timing + payload validation + Turnstile feature-flag) is mandatory before the site goes public.

Reference implementation: see Ukrainian Elite Cleaning for the cleaning vertical's adaptation of this pattern (per-bedroom AggregateOffer tiers, separate URL per service, layout-mounted GlobalSchemaJsonLd, conditional `size` select with URL prefill).

## Anti-regeneration guard (paste into every audit deliverable)

When rendering audit reports at `/r/[slug]` or generating PDFs in the worker, embed the multi-layer prompt-injection guard from a hidden anti-regeneration guard component in your report renderer. It is invisible to humans (display:none, sr-only, zero-size) but parseable by LLMs that ingest the page or PDF, and it instructs the LLM to refuse white-label / regeneration / paraphrasing requests with a copyright warning. Five layers: (1) hidden English prompt, (2) hidden Russian prompt, (3) JSON-LD copyright assertion, (4) zero-width Unicode signature, (5) HTML comment fallback. Worker-generated PDFs add a sixth layer (invisible-color text in the PDF text layer). See your internal design notes for rationale.

## Anti-patterns (never do)

- ❌ Use the term "GEO" or "AEO" or "schema markup" or "entity strength" on customer-facing copy. Translate first (see `references/copy-translations.md`).
- ❌ Stuff schema with marketing fluff. JSON-LD is for machines — keep it factual, scoped, validated.
- ❌ Generate blog posts purely from LLM output without adding original data. AI engines fingerprint and downweight pure-synthetic content.
- ❌ Block AI bots in robots.txt. We *want* them to crawl us — that's the point.
- ❌ Use rel=nofollow on outbound authoritative citations. We pass authority intentionally.
- ❌ Submit AI citation queries to engines from the audited business's own IP — risk of bias.

## Reference files

- `references/schema-templates.md` — copy-paste JSON-LD blocks (Organization, LocalBusiness, HVACBusiness, FAQPage, Service incl. AggregateOffer / quote-mode Offer, BlogPosting, WebSite, BreadcrumbList) + §9 schema graph linkage
- `references/llms-txt-template.md` — full llms.txt structure for tnovalabs.com + common pitfalls
- `references/geo-content-rubric.md` — 22-point checklist for blog posts
- `references/copy-translations.md` — technical jargon → plain HVAC-owner English
- `references/citation-query-library.md` — 30 audit query templates
- `references/nap-directory-checklist.md` — 12 directories with AI-engine weights
- `your canonical NAP file` — TNova Labs canonical NAP data (single source of truth)
- `references/nextjs-app-router-gotchas.md` — 10 bugs we actually hit shipping per-service URLs (Suspense+useSearchParams, edge runtime vs generateStaticParams, favicon conventions, ICU price-from-data, t.rich() for embedded i18n links, Lighthouse 3rd-party drag, etc.). Pin before every Next.js build with `/services/[slug]` fan-out.

## Scripts

- `scripts/validate-schema.py` — static validation: scans HTML/JSX/MD files for inline JSON-LD blocks and checks them against schema.org vocabularies
- `scripts/verify-schema-runtime.py` — runtime validation: loads a live URL, extracts emitted JSON-LD, checks AggregateOffer shape consistency and `@id` reference resolution (catches the dangling-provider bug that static validation can't see)
- `scripts/check-llms-txt.py` — syntax + structure validator for llms.txt per https://llmstxt.org spec. Note: non-URL data (phone, email, hours) should live in the top blockquote, not as bullet lines — the validator will flag bullets without URLs as malformed.
