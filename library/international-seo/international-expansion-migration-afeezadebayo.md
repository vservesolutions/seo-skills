---
name: "international-expansion-migration"
description: "Plan market launches and international migrations safely: benchmarks per market, readiness gates for new locales, redirect and hreflang maps for every locale, ccTLD consolidation and splits, cookie-to-URL moves, staging tests, phased rollouts, Change of Address, launch-day checks, market-by-market monitoring and rollback triggers. Use whenever someone asks about launching a new country site, adding a language, consolidating ccTLDs into subfolders, international site migration, moving international domains or closing a market."
category: "international-seo"
platforms: ["claude-code"]
platform_source: "declared"
repo: "afeezadebayo/marketing-skills"
repo_url: "https://github.com/afeezadebayo/marketing-skills"
source: "https://github.com/afeezadebayo/marketing-skills/blob/HEAD/international-seo/international-expansion-migration/SKILL.md"
raw_source: "https://raw.githubusercontent.com/afeezadebayo/marketing-skills/HEAD/international-seo/international-expansion-migration/SKILL.md"
ref: "HEAD"
discovered_via: "github-search"
license: "CC-BY-4.0"
stars: 0
collected: "2026-11-14"
---

<!-- Claude Code skill · afeezadebayo/marketing-skills · international-seo/international-expansion-migration/SKILL.md · CC-BY-4.0
     Source: https://github.com/afeezadebayo/marketing-skills/blob/HEAD/international-seo/international-expansion-migration/SKILL.md
     Detected by: declared · Regenerated on every run; edit the upstream skill, not this copy. -->

# International Expansion and Site Migrations

Launching a new market and restructuring existing international versions are the riskiest moments in international SEO. A new locale launched without hreflang, sitemaps or localisation quality checks can sit unindexed for months; consolidating ccTLDs into subfolders, or moving from cookie-based languages to separate URLs, can lose rankings in several markets at once if redirects and annotations are wrong. Each market multiplies the redirect map, the checks and the monitoring.

This skill plans market launches and international migrations: readiness gates, URL and hreflang mapping across locales, redirects, launch checklists, market-by-market monitoring and rollback triggers.

## Operating principles
1. **Gate launches on readiness.** Localisation, technical setup and business readiness checked before going live.
2. **Map every locale.** Redirect and hreflang maps cover every URL in every market, not just the main one.
3. **Phase where possible.** Launch or migrate one market or group at a time to limit risk.
4. **Monitor each market separately.** Problems in one market hide inside global totals.
5. **Keep old signals working.** Redirects one-to-one to the closest equivalent in the same language.

## Common scenarios
| Scenario | Main risks | Key controls |
|---|---|---|
| New market launch (new locale) | Not indexed, wrong version ranks, weak localisation | Readiness gate, hreflang, sitemaps, internal links, Search Console property |
| ccTLDs consolidated into subfolders | Lost local authority, redirect errors | One-to-one redirects per locale, hreflang updated, Change of Address per domain |
| Subfolders split into ccTLDs | New domains start weak | Phased rollout, redirects, local link work |
| Cookie or IP languages to separate URLs | Duplicate content during transition | Clean URL patterns, hreflang from day one |
| Platform change across all markets | Everything at once | Benchmark per market, staged migration |
| Market closure | Lost value, broken experiences | Redirect to closest language version, clear messaging |

## When to use, and when not to
Use it before launching a locale, before changing international structure or domains, during platform migrations affecting several markets and when closing a market.

Don't use it for single-market migrations (the Technical SEO `site-migration` skill) or ongoing hreflang fixes (`hreflang-implementation`).

## Inputs to ask for, in one message
1. Scenario and markets affected, with dates.
2. Current and target URL structures per market.
3. Full URL lists per locale (crawl, sitemaps, analytics, backlinks).
4. Search Console and Bing data per market for benchmarks.
5. Localisation status and business readiness for new markets.
6. Team and release process.

## Workflow

### Step 1. Benchmark each market
Traffic, rankings, indexed pages and conversions per market before changes.

### Step 2. Readiness gate (launches)
Localised content reviewed, prices and payments ready, legal pages, support, technical setup, hreflang and sitemaps tested on staging.

### Step 3. Build maps
Redirect map per locale (old to new, same language), hreflang map for the new structure, canonical rules.

### Step 4. Test on staging
Crawl every locale; check redirects, hreflang reciprocity, canonicals, language selector links and rendering.

### Step 5. Launch in phases
One market or group at a time; for domain moves, use Change of Address where applicable.

### Step 6. Launch-day checks
Redirects working, sitemaps submitted per locale, hreflang valid, properties verified, banners instead of forced redirects.

### Step 7. Monitor per market
Daily for two weeks, then weekly for three months: indexed pages, ranking URLs by country, traffic and conversions against benchmarks.

### Step 8. Rollback triggers
Agree in advance what drop in a market triggers investigation or rollback.

## Launch readiness checklist (new locale)
- Priority pages localised and reviewed by natives.
- Local currency, prices, payments, delivery and legal pages.
- Unique crawlable URLs with self-canonicals.
- Reciprocal hreflang with existing locales and x-default.
- Locale sitemap submitted; Search Console and Bing properties set up.
- Language selector links in HTML.
- Internal links within the locale and from the home site.
- Market-level reporting ready.

## Redirect map columns (per locale)
| Old URL | New URL | Locale | Language match | Status | Priority (traffic, links) | Tested |
|---|---|---|---|---|---|---|
Keep one map per market so each team can check its own URLs, and test the full list in crawl list mode after launch.

## Monitoring dashboard per market (first 90 days)
| Metric | Check | Alert when |
|---|---|---|
| Indexed pages for the locale | Weekly | Falls or stalls below expected |
| Ranking URL match for top queries | Weekly | Old or wrong versions keep ranking |
| Organic clicks and impressions by country | Daily for 2 weeks, then weekly | Drop beyond agreed threshold |
| 404s and redirect errors | Daily for 2 weeks | Any spike |
| Conversions and revenue by market | Weekly | Drop beyond agreed threshold |

## Rollback triggers (example)
- Organic clicks in a market fall more than 30% for two consecutive weeks with no recovery trend.
- A large share of important URLs return errors or redirect wrongly.
- Conversions fall sharply because of localisation or checkout issues.
Agree thresholds and owners before launch.

## Closing a market
If a market is closed, redirect its pages to the closest equivalent in the same language (or a language chooser), explain the change on the destination page, remove the locale from hreflang sets and sitemaps, and keep redirects in place for at least a year.

## Communication plan
Tell support, sales and local partners what is changing and when, share new URLs, and update links in emails, ads and profiles for each market on launch day.

## Benchmark checklist per market
- Organic clicks, impressions and conversions for 16 months.
- Indexed page counts and top landing pages.
- Rankings for 50 to 100 priority local terms.
- Backlinks pointing to each market's URLs.
- Raw HTML and screenshots of key templates.
Save these before any change; they make post-launch diagnosis fast.

## After the migration
Keep redirects for at least a year, update internal links to new URLs, remove old URLs from sitemaps after a few weeks and ask key local partners to update links to the new locale URLs.

## Edge cases and judgement calls
| Situation | What to do |
|---|---|
| Market lacks equivalent pages | Redirect to the closest same-language page or the locale home, not across languages |
| Many locales, one release | Stage by market group if the platform allows |
| Strong ccTLD authority | Weigh consolidation benefits against migration risk; plan local link recovery |
| Market closure | Redirect to the nearest language version; explain changes on the page |
| China | Separate plan for hosting, licensing and Baidu |

## Handoffs to related skills
- Structure decisions: `international-site-structure`
- hreflang maps: `hreflang-implementation`
- Technical checks: `international-technical-seo`
- Market priorities: `international-market-selection`
- Reporting per market: `international-seo-reporting`
- Migration fundamentals: the Technical SEO `site-migration` skill

## Worked example
A retailer consolidated example.de, example.fr and example.es into example.com/de/, /fr/ and /es/. The plan benchmarked each market, built one-to-one redirect maps per domain from crawls, sitemaps and backlink data, updated hreflang to the new URLs, tested on staging and moved Spain first as the smallest market. After two stable weeks, France and then Germany followed, each with Change of Address in Search Console. Germany dipped briefly and recovered within six weeks; consolidated authority lifted the smaller markets above their old ccTLD performance within a quarter.

## Output format
```
# International launch or migration plan: <scenario>, <date>
## Benchmarks per market
## Readiness gate or migration scope
## Redirect and hreflang maps
## Staging tests
## Phased launch schedule
## Launch-day checklist
## Monitoring and rollback triggers
```

## Common mistakes
- Launching locales without hreflang or sitemaps.
- Redirecting across languages or to home pages.
- Moving all markets at once.
- Monitoring only global totals.
- No rollback criteria.

## Questions to ask before you plan
- Which markets are affected, and which matters most?
- Do full URL lists exist for every locale?
- Can the platform launch markets in phases?

## Self-check before you answer
- Are benchmarks and readiness gates in place per market?
- Do redirect and hreflang maps cover every locale?
- Is the rollout phased with rollback triggers?
- Is monitoring done market by market?

## Official documentation
- Google: site moves with URL changes: https://developers.google.com/search/docs/crawling-indexing/site-move-with-url-changes
- Google: Change of Address tool: https://support.google.com/webmasters/answer/9370220
- Google: localised versions: https://developers.google.com/search/docs/specialty/international/localized-versions

---
Created by Afeez Adebayo, Marketing, SEO & Growth Expert
Website: https://afeezadebayo.com
LinkedIn: https://www.linkedin.com/in/afeez-adebayo/
X: https://x.com/za_icon
Source: https://afeezadebayo.com/skills-md/marketing/international-seo/international-expansion-migration/

Licence: CC BY 4.0 (https://creativecommons.org/licenses/by/4.0/). You may copy, share and adapt this skill, including for commercial use, as long as you credit Afeez Adebayo and link to the source URL above. Keep this notice in any copy or adapted version.
