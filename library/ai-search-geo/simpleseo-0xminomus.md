---
name: "simpleseo"
description: "SimpleSEO: Universal all-in-one SEO, Sitelinks, Schema, Core Web Vitals, and AI Search (GEO) skill pack for any coding agent. Call /simpleseo or mention SimpleSEO to take a deployed website from live URL to Google-ranked and AI-cited end to end."
category: "ai-search-geo"
platforms: ["claude-code"]
platform_source: "detected"
repo: "0xMinomus/SimpleSEO"
repo_url: "https://github.com/0xMinomus/SimpleSEO"
source: "https://github.com/0xMinomus/SimpleSEO/blob/HEAD/SKILL.md"
raw_source: "https://raw.githubusercontent.com/0xMinomus/SimpleSEO/HEAD/SKILL.md"
ref: "HEAD"
discovered_via: "github-search"
license: "MIT"
stars: 0
collected: "2026-11-13"
---

<!-- Claude Code skill · 0xMinomus/SimpleSEO · SKILL.md · MIT
     Source: https://github.com/0xMinomus/SimpleSEO/blob/HEAD/SKILL.md
     Detected by: detected · Regenerated on every run; edit the upstream skill, not this copy. -->

# SimpleSEO

> One skill call to audit, optimize, verify, and submit your deployed website so it ranks on Google and gets cited across AI search engines (Google AI Overviews, ChatGPT Search, Perplexity, Claude, and Gemini).

SimpleSEO is an end-to-end SEO engineering skill pack. Instead of stopping at a generic checklist, it inspects your codebase and live production URL, fixes technical bottlenecks, builds sitelink and schema architecture, makes your content machine-readable for AI answer engines, submits your sitemaps and URLs to search engines, and verifies the live deployment with real Lighthouse and HTTP checks.

---

## Mandatory Two-Gate Workflow (Never Skip)

Before editing any file, modifying DNS/config, or submitting anything to search engines, you **MUST** pass both interactive gates below in order.

If your agent runtime supports a structured multiple-choice form or question tool (such as `ask`, `AskUserQuestion`, or a native selection prompt), present each gate with single-select options. If your runtime is chat-only, ask directly in chat with clear numbered choices (`1` / `2`) and wait for the user's answer before continuing.

### Gate 1: Prerequisite Check (Run First, Always)

Ask the user:

> **Before SimpleSEO begins, please confirm that your website meets these three minimum requirements:**
> 1. Your website is already deployed and live over HTTPS.
> 2. You have a custom domain connected to the deployment.
> 3. Your domain is already added to Google Search Console (Domain property or URL-prefix property).
>
> **Do you already meet all three prerequisites?**
> - **Yes**, my website is live with a custom domain and added to Google Search Console.
> - **No**, I have not completed one or more of these steps yet.

**Branching rule for Gate 1:**
- If **No**: **STOP** immediately. Do not run audits or edit files yet. Read `references/prerequisite-setup-guide.md` and give the user a clear, actionable step-by-step guide covering only what they are missing (deployment, custom domain DNS, and Google Search Console setup/verification). Tell them to invoke `SimpleSEO` again or reply once those steps are complete.
- If **Yes**: Move directly to **Gate 2**.

---

### Gate 2: Execution Confirmation & Sub-Skill Breakdown

Present the full suite of sub-skills and their direct benefits to the user before touching code or Search Console:

| # | Sub-Skill | What It Does | Benefit to Your Website |
|---|---|---|---|
| 1 | **Technical & Crawl Architecture** (`subskills/01-technical-audit.md`) | Aligns canonical URLs, eliminates redirect conflicts (`301`/`308`), builds clean `robots.txt` (RFC 9309), adds `/sitemap.xml` redirect, configures security + immutable cache headers, and adds a branded `404` page. | Search crawlers index the exact right domain with zero wasted crawl budget or dead links. |
| 2 | **Structured Data & Schema.org** (`subskills/02-schema-markup.md`) | Builds server-rendered JSON-LD `@graph` (`Organization` / `LocalBusiness` / `ProfessionalService`, `WebSite`, `WebPage`, `BreadcrumbList`, `ItemList`/`SiteNavigationElement`, `OfferCatalog`, `Product`, `Article`, `FAQPage`) with zero deprecated types. | Qualifies your site for Google rich snippets, sitelink signals, and accurate entity recognition. |
| 3 | **On-Page, Sitelinks & Social Cards** (`subskills/03-onpage-sitelinks.md`) | Sharpens titles, meta descriptions, keyword hierarchy, `hreflang`, internal footer/nav linking, dedicated intent landing pages for Sitelinks, and custom `1200x630` Open Graph social images. | Higher click-through rates, multi-link Sitelinks under your brand name, and polished WhatsApp/social previews. |
| 4 | **AI Search & Agent Readiness (GEO)** (`subskills/04-ai-search-geo.md`) | Enables explicit access for `OAI-SearchBot`, `ChatGPT-User`, `Claude-SearchBot`, `PerplexityBot`, and `Google-Extended`; creates `llms.txt` (`llmstxt.org` spec) and `/.well-known/ai-catalog.json` (ARD v1.0); structures self-contained answer blocks. | Makes your brand discoverable, crawlable, and accurately cited by ChatGPT Search, Gemini, Perplexity, and Claude. |
| 5 | **Core Web Vitals & Image SEO** (`subskills/05-performance-images.md`) | Adds LCP `<link rel="preload">`, explicit `width`/`height` on all `<img>` tags to lock `CLS = 0`, enforces WebP/AVIF + `decoding="async"`, and cleans up decorative icon accessibility. | Faster mobile load times, zero layout shift, and Lighthouse Performance/Accessibility scores near 100. |
| 6 | **Search Engine Submission (GSC + IndexNow)** (`subskills/06-search-engines-submit.md`) | Verifies Google Search Console ownership (DNS TXT / HTML), cleans up stale sitemaps, submits live `sitemap-index.xml`, runs Live URL Inspection + Request Indexing, and pings `api.indexnow.org` for Bing/Copilot/ChatGPT Search. | Cuts discovery time from weeks to hours and wakes up both Google and non-Google search indexes. |
| 7 | **Local SEO, E-E-A-T & Off-Page Authority** (`subskills/07-local-eeat-authority.md`) | Adds geo-targeting (`geo.region`, `geo.placename`, `areaServed`), audits real trust signals without fake claims, and delivers a tailored Google Business Profile, backlink, and brand-mention action plan. | Strengthens local map pack visibility and teaches AI models to recommend your exact brand without spell-correction confusion. |
| 8 | **Content Quality & Topic Clusters** (`subskills/08-content-cluster-audit.md`) | Audits thin content, heading structure (`H1`-`H3`), keyword cannibalization, E-E-A-T clarity, and topic-cluster internal linking opportunities. | Prevents keyword overlap and expands organic reach across informational and commercial queries. |
| 9 | **Live Production Verification & Scoring** (`subskills/09-verify-and-score.md`) | Runs `scripts/simpleseo_audit.py` and live PageSpeed Insights / Lighthouse checks (`Performance`, `Accessibility`, `Best Practices`, `SEO`, `Agentic Browsing`), tests crawler User-Agents via HTTP, and reports exact evidence. | Proves every change is live in production with real measured scores instead of guesswork. |

Then ask the user:

> **Are you ready for me to execute the SimpleSEO pipeline on your project?**
> - **Yes, run all SimpleSEO sub-skills end to end** (Recommended: full audit, code fixes, live deployment verification, GSC/IndexNow submission, and final score report).
> - **Run audit only first** (Read-only inspection and prioritized action plan, no files modified).
> - **Let me pick specific sub-skills** (Choose only the modules you want).

Wait for explicit confirmation before proceeding.

---

## End-to-End Execution Pipeline (After Gate 2 Approval)

Execute each phase in order. Load the referenced sub-skill file before working on its phase so no check is missed.

### Phase 1: Baseline Discovery & Live Audit
1. Ask for or detect the target project root and live canonical URL (e.g., `https://www.example.com`).
2. Run the bundled audit script against the live site (and local build if available):
   ```bash
   python3 scripts/simpleseo_audit.py https://www.example.com --format markdown
   ```
3. Check whether the apex domain (`example.com`) redirects (`301`/`308`) to `www.example.com` or vice versa. Lock **one canonical origin** everywhere before making edits.
4. Inspect existing framework files (`astro.config.*`, `next.config.*`, `vercel.json`, `netlify.toml`, `public/robots.txt`, layouts, metadata, and sitemaps).

### Phase 2: Codebase Implementation (`01` through `05` + `08`)
Load and apply in order:
1. **`subskills/01-technical-audit.md`**: Fix canonical mismatches, add `/sitemap.xml` redirect to `/sitemap-index.xml` (if applicable), add security + immutable cache headers, verify `404` status/page, and enforce `robots.txt` RFC 9309 compliance.
2. **`subskills/02-schema-markup.md`**: Build or repair server-rendered JSON-LD `@graph` matching the actual business type and page structure. Never emit deprecated schema types or fabricated ratings.
3. **`subskills/03-onpage-sitelinks.md`**: Optimize titles, meta descriptions, heading hierarchy, internal sitelink structure, intent-specific landing pages (when requested/appropriate), and `1200x630` OG/Twitter assets.
4. **`subskills/04-ai-search-geo.md`**: Generate and verify `public/llms.txt` (`llmstxt.org` compliant), `public/.well-known/ai-catalog.json` (ARD v1.0 compliant), explicit AI search crawler directives in `robots.txt`, and front-loaded citable answer blocks.
5. **`subskills/05-performance-images.md`**: Add `width`/`height` on all images, `fetchpriority="high"` + `<link rel="preload">` on the LCP asset, `loading="lazy"` + `decoding="async"` below the fold, and accessible attributes on decorative icons.
6. **`subskills/08-content-cluster-audit.md`**: Audit copy clarity, remove thin/duplicate meta across routes, and map internal links cleanly.

You can also use the bundled asset helper to scaffold clean `robots.txt`, `llms.txt`, and `ai-catalog.json` files:
```bash
python3 scripts/generate_assets.py --help
```

### Phase 3: Build, Deploy & Search Engine Submission (`06` + `07`)
1. Run the project's typecheck and production build locally. Fix all errors before pushing.
2. Re-run `python3 scripts/simpleseo_audit.py` on the local build or preview server to confirm 0 structural regressions.
3. Deploy or push changes (confirm git/deploy preferences if pushing to a remote repository). Wait until live production reflects the latest commit.
4. Load **`subskills/06-search-engines-submit.md`**:
   - If browser relay / GSC access is available (or guide the user step by step if not), verify Google Search Console (prefer adding a **Domain property** via DNS TXT if only URL-prefix exists), remove dead legacy sitemaps, submit the active sitemap, run **Live URL Test**, and click **Request Indexing** on key URLs.
   - Run `scripts/indexnow_ping.py` to generate/verify the IndexNow key file and submit all canonical URLs to `https://api.indexnow.org/indexnow` (`HTTP 202` expected).
5. Load **`subskills/07-local-eeat-authority.md`**: Verify geo-meta/local schema and compile any off-page actions the site owner needs outside the codebase (Google Business Profile, external brand mentions, clean backlinks).

### Phase 4: Final Live Verification, PASS Gate & Complete User Report (`09`)
Load **`subskills/09-verify-and-score.md`**:
1. Test live HTTP responses for canonical consistency, `/sitemap.xml` redirect, `/robots.txt`, `/llms.txt`, `/.well-known/ai-catalog.json`, `/404` behavior, and Google/OpenAI/Anthropic/Perplexity User-Agents.
2. Run `python3 scripts/simpleseo_audit.py https://www.example.com --format markdown` and live PageSpeed Insights / Lighthouse (Mobile + Desktop) covering `Performance`, `Accessibility`, `Best Practices`, `SEO`, and `Agentic Browsing`.
3. **Run the Final PASS/FAIL Delivery Gate** below. Every check **MUST** be **`PASS`** (or `N/A` only if explicitly skipped by user choice in Gate 2) backed by real observed evidence. If any item is **`FAIL`**, fix it first, re-deploy, and re-verify before reporting to the user:

| Gate ID | Check | Required Evidence | Status Rule |
|---|---|---|---|
| `SEO-01` | Canonical & Redirect Consistency | Live `curl` shows `200` on canonical, clean `301`/`308` on alternate host, zero canonical-to-redirect loops | `PASS` / `FAIL` |
| `SEO-02` | Sitemaps & `/sitemap.xml` | `/sitemap-index.xml` and `/sitemap.xml` resolve cleanly (`200` or redirect) and contain only canonical `200` URLs | `PASS` / `FAIL` |
| `SEO-03` | `robots.txt` RFC 9309 Compliance | `200 OK`, zero invalid lines, allows Googlebot + AI search crawlers (`OAI-SearchBot`, `ChatGPT-User`, `Claude-SearchBot`, `PerplexityBot`) | `PASS` / `FAIL` |
| `SEO-04` | Structured Data (`JSON-LD`) | Valid `@graph`, zero parse errors, zero deprecated Schema types, zero fabricated ratings/claims | `PASS` / `FAIL` |
| `SEO-05` | On-Page, Sitelinks & Social Cards | Unique title/meta/H1 per route, `hreflang`, internal footer/nav links, `1200x630` OG image live (`200`), real `404` status | `PASS` / `FAIL` |
| `SEO-06` | AI Search & Agent Discovery (GEO) | `/llms.txt` (`200`, H1 + Markdown links + 50+ chars) and `/.well-known/ai-catalog.json` (`200`, valid ARD v1.0) | `PASS` / `FAIL` |
| `SEO-07` | Performance & Core Web Vitals | All `<img>` have `width`/`height` + `alt` (or `role="presentation"`), LCP preload active, `CLS = 0` | `PASS` / `FAIL` |
| `SEO-08` | Search Engine Submissions | GSC sitemap submitted (`Success`), core URLs tested & requested for indexing, IndexNow pinged (`200`/`202`) | `PASS` / `FAIL` / `GUIDE_GIVEN` |
| `SEO-09` | Live Lighthouse / PSI Verification | Measured scores reported (`Performance`, `Accessibility`, `Best Practices`, `SEO`, `Agentic Browsing`) | `PASS` / `FAIL` |
| `SEO-10` | Security, Privacy & Copy Hygiene | Security headers present, private repos never leaked publicly, zero em-dashes (`U+2014`) in generated copy | `PASS` / `FAIL` |

4. **Deliver the Complete Final Report to the User** immediately after all gates pass, containing four clear sections:
   - **1. Summary of All SEO Work Completed**: Exact files edited/created, commits/deployments, and GSC/IndexNow submissions performed.
   - **2. Benefits Delivered**: Concrete impact table explaining what each applied optimization unlocks for Google Search, Sitelinks, Core Web Vitals, and AI Search citations.
   - **3. Final PASS/FAIL Audit Matrix & Live Scores**: The `SEO-01` through `SEO-10` table with real measured HTTP codes, `simpleseo_audit.py` results, and Lighthouse/PageSpeed scores (honestly marking whether each item succeeded or why any item was blocked).
   - **4. Next Off-Page Steps (Outside Code)**: Clear action list for Google Business Profile, genuine reviews, and external brand mentions/backlinks.

---

## Global Rules & Quality Guardrails

- **Never fabricate evidence**: Do not invent testimonials, review counts, user statistics, or compliance badges in schema or page copy.
- **No em-dashes (`U+2014`)**: Use commas, colons, parentheses, or periods instead of em-dashes in generated copy, titles, metadata, and reports.
- **No non-standard `robots.txt` lines**: Keep `robots.txt` strictly compliant with RFC 9309 (`User-agent`, `Allow`, `Disallow`, `Sitemap`) so Google Lighthouse SEO scores `100/100`.
- **Keep private repos private**: Never expose private repository URLs on public pages or public profiles.
- **Honest boundaries**: Code alone fixes crawlability, speed, schema, and AI-bot access; external authority signals (Google Business Profile, genuine backlinks, real brand mentions) require action outside the repo and must be explained honestly.
