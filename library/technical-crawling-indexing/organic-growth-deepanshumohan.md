---
name: "organic-growth"
description: "Complete organic growth system for any website. Technical SEO (prerendering SPAs, canonicals, sitemap, robots.txt, redirects, real 404s, JSON-LD), market research by country (Google Trends, willingness to pay), keyword research (autocomplete, Ahrefs/Semrush volumes), Search Console diagnostics, a sources policy, programmatic SEO 2.0 with a duplicate-content quality gate, tool-led SEO (free calculators and generators as ranking pages), money pages (competitor alternatives, X vs Y, landing pages), linkable download assets, GEO for AI search (ChatGPT, Perplexity, AI Overviews), thin-content…"
category: "technical-crawling-indexing"
platforms: ["claude-code"]
platform_source: "declared"
repo: "deepanshumohan/t"
repo_url: "https://github.com/deepanshumohan/t"
source: "https://github.com/deepanshumohan/t/blob/HEAD/plugins/organic-growth/skills/organic-growth/SKILL.md"
raw_source: "https://raw.githubusercontent.com/deepanshumohan/t/HEAD/plugins/organic-growth/skills/organic-growth/SKILL.md"
ref: "HEAD"
discovered_via: "github-search"
license: "MIT"
stars: 0
collected: "2026-11-14"
---

<!-- Claude Code skill · deepanshumohan/t · plugins/organic-growth/skills/organic-growth/SKILL.md · MIT
     Source: https://github.com/deepanshumohan/t/blob/HEAD/plugins/organic-growth/skills/organic-growth/SKILL.md
     Detected by: declared · Regenerated on every run; edit the upstream skill, not this copy. -->

# Organic Growth

You run the system in `PLAYBOOK.md` on the current project. Read it once at the
start, then read a module only when you reach the phase that uses it. Write
every finding into `docs/seo/` in the project (copy templates from `templates/`)
and commit after each phase.

## Map

| # | Phase | Read | Output in the project |
|---|---|---|---|
| 0 | Recon + baseline | `PLAYBOOK.md` §0 | `docs/seo/00-baseline.md` |
| 1 | Technical SEO | `checklists/technical-seo.md` | code + `seo.config.mjs` |
| 2 | Search Console + Bing | `checklists/search-console.md` | baseline numbers |
| 3 | Research: Trends, willingness to pay, autocomplete, Ahrefs/Semrush, Search Console, sources | `modules/research.md` | `docs/seo/research/*.md`, `09-sources-log.md` |
| 4 | Growth plan | `modules/pseo-2.md`, `modules/tool-led-seo.md`, `modules/money-pages.md`, `modules/linkable-assets.md` | `docs/seo/03-seo-plan.md` |
| 5 | Cleanup + build | `PLAYBOOK.md` §5, briefs `04`/`07`/`08` | pages, redirects, `05-consolidation-map.md` |
| 6 | GEO + conversion | `modules/geo-ai-search.md`, `modules/seo-to-revenue.md` | robots, page shape, CTAs, events |
| 7 | Launch + measure | `PLAYBOOK.md` §7 | `docs/seo/06-launch-log.md` |

The user can ask for one part only ("just tool SEO", "audit my site", "pSEO
plan"). Then do just that phase, but still run phase 0 quickly first.

## Ask first (only what the code can't tell you)
1. Production domain and preferred host (apex or www).
2. **Target countries and languages.** Never assume them from the founder's location.
3. Search Console / analytics access.
4. Paid keyword tools (Ahrefs, Semrush). Screenshots or exports are fine.
5. Are any ratings, review counts or "used by" claims on the site real?

## Scripts (Node 18+, no dependencies; in `scripts/`)
| Script | Use |
|---|---|
| `check-live.sh <url>` | What crawlers get from the live site: redirects, 404, robots, sitemap, per-page title/canonical/H1 without JS |
| `prerender.mjs --config seo.config.mjs` | SPA → static HTML per route + 404.html + spa.html + sitemap.xml |
| `audit.mjs <dist> --base <url>` | Checks built HTML: titles, descriptions, canonicals, H1, thin pages, JSON-LD, sitemap consistency, rating schema |
| `overlap.mjs <dist> --prefix /<cluster>/` | Duplicate-content gate: 5-word shingle Jaccard, <40% and ≥800 words |
| `autocomplete.mjs "<seed>" --gl us,gb,au --expand` | Real Google autocomplete queries per country (demand evidence) |

## Rules learned the hard way
- **Research in the target market's locale.** Wrong-country autocomplete once
  produced a whole batch of wrong-market pages.
- **Save every research pull** as a dated file in `docs/seo/research/`, and log
  every on-page fact in `09-sources-log.md` (official sources for legal facts;
  competitor facts dated and re-checked every 90 days; unverifiable claims left out).
- **Ahrefs' free tool has a human check** the user must pass. Ask for
  screenshots, never try to get around it.
- **Pages exist because demand exists.** Every planned page names its evidence.
- **The quality gate is not optional.** <40% overlap with siblings, ≥800 words,
  its own data/tool/output. Templated `{city}` swaps get `noindex` and leave
  the sitemap. Scaled-content penalties hit the whole domain.
- **Tools are pages, not widgets.** Each tool needs a unique editorial guide,
  FAQ and schema in static HTML, or it's a thin page.
- **Fewer, deeper pages.** Merge thin posts into deep guides and 301 every old slug.
- **No invented numbers or social proof.** Prices sourced or calculated on page;
  competitor facts dated; rating schema only when the owner confirms it's real.
- **Crawlers (and AI crawlers) must see content without JavaScript.**
- **One host, one URL, real 404s, a sitemap generated from the same data as the pages.**
- **Launch in batches of 10–20; expand only what gets impressions.**
- **Every page ends in a relevant CTA; track conversions per page group.**

## Working style
- Production-affecting changes (redirects, robots.txt, noindex, deleting pages)
  get a one-line confirmation from the user first, with the list.
- Search Console, DNS and analytics clicks are the user's; give exact steps.
- Run `audit.mjs` after every build and `check-live.sh` after every deploy, and
  paste the summary.
- Record dated numbers in `06-launch-log.md` so the next session can compare.

## Frameworks
`prerender.mjs` is for client-rendered SPAs (Vite, CRA, React Router). Next.js,
Astro, Nuxt, SvelteKit, Remix: use their metadata APIs and sitemap plugins, and
still run `audit.mjs` on the build output. WordPress/Webflow/Shopify: skip
phase 1 code, use the checklist against the live site with `check-live.sh`.
