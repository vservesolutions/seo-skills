---
name: "international-seo-audit"
description: "Audit how a site serves each country and language: market priorities, URL structure, targeting signals for Google and Bing, hreflang health, indexing by market, wrong-market rankings, localisation quality beyond translation, local demand coverage, local search engines and market-level measurement, scored per market with a prioritised plan. Use whenever someone asks for an international SEO audit, multilingual SEO review, why the wrong country version ranks, poor performance in a new market, hreflang problems across a site or where to start with international SEO."
category: "technical-crawling-indexing"
platforms: ["claude-code"]
platform_source: "declared"
repo: "afeezadebayo/marketing-skills"
repo_url: "https://github.com/afeezadebayo/marketing-skills"
source: "https://github.com/afeezadebayo/marketing-skills/blob/HEAD/international-seo/international-seo-audit/SKILL.md"
raw_source: "https://raw.githubusercontent.com/afeezadebayo/marketing-skills/HEAD/international-seo/international-seo-audit/SKILL.md"
ref: "HEAD"
discovered_via: "github-search"
license: "CC-BY-4.0"
stars: 0
collected: "2026-11-14"
---

<!-- Claude Code skill · afeezadebayo/marketing-skills · international-seo/international-seo-audit/SKILL.md · CC-BY-4.0
     Source: https://github.com/afeezadebayo/marketing-skills/blob/HEAD/international-seo/international-seo-audit/SKILL.md
     Detected by: declared · Regenerated on every run; edit the upstream skill, not this copy. -->

# International SEO Audit

International sites fail in quiet ways. The French page ranks in Canada, the UK store shows US prices to British searchers, hreflang tags point at redirects, a machine-translated section never earns a click, and nobody notices because the global dashboard still grows. Since 2025 Google has also shown its own machine-translated versions of English pages to searchers in other languages, so weak local versions can be bypassed entirely. [Reported, 2025]

This skill audits how a site serves each country and language: structure, targeting signals, hreflang, indexing by market, localisation quality, local demand coverage, local search engines and measurement. It returns a market-by-market scorecard and a plan, and hands each finding to a specialist skill. It is the entry point for the International SEO set.

## Operating principles
1. **Audit by market, not globally.** Each country and language version has its own rankings, competitors and problems.
2. **Users first, signals second.** Correct targeting helps search engines show the right page; it can't fix pages that don't serve local users.
3. **Google and Bing differ.** Google relies on hreflang and its own detection; Bing has called hreflang a weak signal and leans on content-language and other signals. [Reported from Bing statements]
4. **Localise, don't just translate.** Prices, currencies, payment methods, examples, units and search language must match the market.
5. **Measure each market separately.** Blended numbers hide failing markets.

## The eight areas
| Area | What to check | Typical finding |
|---|---|---|
| 1. Market fit and priorities | Which markets matter and why | Effort spread across 20 locales with 3 producing revenue |
| 2. Structure | ccTLD, subfolder, subdomain, parameters | Language selected by cookie on one URL, so only one version is indexable |
| 3. Targeting signals | hreflang, content-language, ccTLD, local signals | Wrong country version ranking in neighbouring markets |
| 4. hreflang health | Return tags, codes, canonicals, x-default | Tags pointing to redirected or non-canonical URLs |
| 5. Indexing by market | Index coverage per locale | Whole locales "Crawled, currently not indexed" |
| 6. Localisation quality | Translation, currency, payments, examples, legal | Machine-translated pages with US examples and dollar prices |
| 7. Local demand coverage | Local keywords and intent per market | Pages translated from English keywords nobody searches locally |
| 8. Measurement | Country and language reporting, local engines | One global report; no Baidu, Yandex or Naver data where they matter |

## When to use, and when not to
Use it before expanding to new markets, when international traffic underperforms, when the wrong country version ranks, after adding languages, and before restructuring domains.

Don't use it for single-market technical audits (use the Technical SEO skills) or detailed hreflang fixes (`hreflang-implementation`).

## Inputs to ask for, in one message
1. Markets and languages served, with revenue or goals per market.
2. Site structure: domains, subdomains, folders, how language and country are chosen.
3. Search Console data filtered by country (and Bing Webmaster Tools), 16 months.
4. A crawl including hreflang, canonicals, status codes and language.
5. How content is translated and localised (people, agencies, machine or AI translation, review).
6. Analytics by country and language; local search engine data where relevant.

## Workflow

### Step 1. Confirm markets
List each market (country plus language), its business priority and revenue. Flag markets with pages but no plan.

### Step 2. Map structure
For each market: the URL pattern, how users reach it and whether every version has its own indexable URL.

### Step 3. Check targeting and hreflang
Crawl hreflang: missing return tags, invalid codes, links to non-200 or non-canonical URLs, missing self-references, x-default. Check content-language and html lang for Bing.

### Step 4. Check indexing per market
Index coverage and impressions per locale in Search Console; URL Inspection for samples per market.

### Step 5. Find wrong-market rankings
Compare Search Console performance by country against the URL that ranks: is the UK page ranking in Ireland, the Spain page in Mexico?

### Step 6. Review localisation
Sample key templates per market: language quality, currency, prices, payment methods, delivery, examples, legal pages, local contact details.

### Step 7. Review local demand
Check whether pages target terms people search in that market, not translated English terms.

### Step 8. Check local engines and measurement
Where Baidu, Yandex, Naver or Seznam matter, check their webmaster tools and indexing. Confirm reporting splits by market.

### Step 9. Score and plan
Score each area 0 to 3 per market; write a prioritised plan.

## Market scorecard template
```
| Market | Priority | Structure | Targeting | hreflang | Indexing | Localisation | Demand | Measurement | Top issue |
| UK (en-GB) | High | 3 | 2 | 1 | 3 | 3 | 2 | 2 | Return tags missing to en-IE |
| Mexico (es-MX) | Medium | 2 | 1 | 1 | 2 | 1 | 0 | 1 | Spain content reused; no local keywords |
```

## Wrong-market ranking investigation
| Symptom | Likely cause | Check |
|---|---|---|
| UK page ranks in Ireland | Missing return tags or no en-IE page | hreflang on both versions; existence of IE equivalents |
| Spain page ranks in Mexico | No es-MX version or versions too similar | Local differences in price, terms, regulations |
| English page ranks in Germany | German page not indexed or weak | Indexing, canonical, localisation quality |
| One version ranks everywhere in Bing | Bing signals missing | html lang, content-language, local signals |
| Home page ranks instead of deep local pages | hreflang only on home pages | Template-level hreflang coverage |

## Localisation sampling method
1. Pick five key templates (home, category or feature, product or pricing, guide, legal or contact).
2. Review one page of each per market with a native speaker.
3. Score language quality, keyword use, currency and prices, payments, examples, legal pages and contact details from 0 to 2.
4. Note patterns that repeat across the template; fix templates, not single pages.

## Audit cadence
- Full audit before each new market and at least yearly.
- Monthly ranking-URL checks for top queries in priority markets.
- After every release touching routing, templates, translations or CDN rules.

## Edge cases and judgement calls
| Situation | What to do |
|---|---|
| Same language, several countries | Decide whether versions differ enough (price, currency, legal) to justify separate pages |
| Few resources, many markets | Concentrate on markets with demand and revenue; consolidate the rest |
| China | Baidu, hosting and licensing questions need specialist review |
| Language chosen by IP redirect | Replace with crawlable URLs and a suggestion banner |
| Machine-translated sections | Review quality; improve or noindex weak sections |

## Handoffs to specialist skills
- Market choice: `international-market-selection`
- Structure: `international-site-structure`
- hreflang: `hreflang-implementation`
- Translation and localisation: `localisation-translation`
- Local keywords: `multilingual-keyword-research`
- Targeting signals: `geo-language-targeting`
- Technical issues: `international-technical-seo`
- Baidu, Yandex, Naver, Seznam: `local-search-engines`
- Content plans: `international-content-strategy`
- Links and PR by market: `international-link-building`
- Expansions and moves: `international-expansion-migration`
- Reporting: `international-seo-reporting`

## Worked example
A UK fashion retailer had English versions for the UK, Ireland, Australia and the US, plus machine-translated French and German. Search Console showed the UK pages ranking in Ireland and Australia, French pages indexed but with almost no clicks, and German pages largely not indexed. The crawl found hreflang on product pages only, with no return tags from the US site, and canonicals on French pages pointing to English originals. Localisation review found euro prices missing on French pages and US sizing on Australian pages. The plan fixed hreflang and canonicals sitewide, added currency and sizing per market, had native editors review top French categories, paused German until a localisation budget existed and set market-level reporting.

## Output format
```
# International SEO audit: <site>, <date>
## Summary (biggest risk, biggest opportunity, first moves)
## Market list with priorities
## Market scorecard
## Findings by area with evidence
## Prioritised plan
| # | Action | Markets | Impact | Effort | Skill | Owner | Re-check |
```



## Common mistakes
- Reviewing global totals instead of each market.
- Translating pages without checking local demand.
- Canonicals pointing across languages.
- IP or browser-language redirects that hide versions from crawlers.
- Ignoring Bing and local search engines.

## Questions to ask before you recommend changes
- Which markets make money, and which are aspirations?
- How are versions chosen by users and crawlers today?
- Who reviews translations, and in which languages?

## Self-check before you answer
- Did I score each market separately?
- Did I check hreflang, canonicals and structure together?
- Did I review localisation beyond language?
- Does every action have a market, skill, owner and re-check date?

## Official documentation
- Google: managing multi-regional and multilingual sites: https://developers.google.com/search/docs/specialty/international/managing-multi-regional-sites
- Google: localised versions and hreflang: https://developers.google.com/search/docs/specialty/international/localized-versions
- Google: locale-adaptive pages: https://developers.google.com/search/docs/specialty/international/locale-adaptive-pages
- Bing Webmaster Guidelines: https://www.bing.com/webmasters/help/

---
Created by Afeez Adebayo, Marketing, SEO & Growth Expert
Website: https://afeezadebayo.com
LinkedIn: https://www.linkedin.com/in/afeez-adebayo/
X: https://x.com/za_icon
Source: https://afeezadebayo.com/skills-md/marketing/international-seo/international-seo-audit/

Licence: CC BY 4.0 (https://creativecommons.org/licenses/by/4.0/). You may copy, share and adapt this skill, including for commercial use, as long as you credit Afeez Adebayo and link to the source URL above. Keep this notice in any copy or adapted version.
