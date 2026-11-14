---
name: "international-technical-seo"
description: "Fix the technical layer of international sites: crawler access per locale from US IPs, forced IP and browser-language redirects replaced by banners, CDN caching by URL, crawlable language selectors, sitemaps per locale, default-locale duplicates, UTF-8 and non-Latin URLs, performance by country and Search Console and Bing properties per version. Use whenever someone mentions geo-redirects, IP redirects, international pages not indexed, wrong language served by CDN, language switcher SEO, locale-adaptive pages, international site speed or crawling multilingual sites."
category: "technical-crawling-indexing"
platforms: ["claude-code"]
platform_source: "declared"
repo: "afeezadebayo/marketing-skills"
repo_url: "https://github.com/afeezadebayo/marketing-skills"
source: "https://github.com/afeezadebayo/marketing-skills/blob/HEAD/international-seo/international-technical-seo/SKILL.md"
raw_source: "https://raw.githubusercontent.com/afeezadebayo/marketing-skills/HEAD/international-seo/international-technical-seo/SKILL.md"
ref: "HEAD"
discovered_via: "github-search"
license: "CC-BY-4.0"
stars: 0
collected: "2026-11-14"
---

<!-- Claude Code skill · afeezadebayo/marketing-skills · international-seo/international-technical-seo/SKILL.md · CC-BY-4.0
     Source: https://github.com/afeezadebayo/marketing-skills/blob/HEAD/international-seo/international-technical-seo/SKILL.md
     Detected by: declared · Regenerated on every run; edit the upstream skill, not this copy. -->

# International Technical SEO

International sites add technical failure modes that single-market sites never face: geo-redirects that stop Googlebot reaching other versions, CDNs serving cached pages in the wrong language, JavaScript language switchers crawlers can't follow, duplicate pages across markets, slow performance far from the origin server, character encoding errors and sitemaps that mix locales. Googlebot mostly crawls from US IP addresses, so anything that changes content by visitor location can hide versions from it. [Confirmed, Google locale-adaptive guidance]

This skill audits and fixes the technical layer of international sites: crawling and rendering per locale, redirects and banners, caching, performance by region, encoding, sitemaps, canonicals and Search Console setup.

## Operating principles
1. **Separate URLs for each version.** Don't serve different languages on the same URL based on location or cookies.
2. **No forced redirects.** Suggest versions; never block crawlers or users from them.
3. **Cache by URL, not by visitor.** CDNs must not serve one locale's content to another.
4. **Measure performance where users are.** Field data by country shows real speed.
5. **Validate per locale.** Crawl and inspect each market, not just the default.

## Common international technical problems
| Problem | Effect | Fix |
|---|---|---|
| IP-based redirects | Crawlers see only the US or default version | Remove forced redirects; use banners |
| Accept-Language redirects | Same as above for crawlers without that header | Crawlable URLs with banners |
| Locale chosen by cookie on one URL | Only one version indexed | Separate URLs per locale |
| CDN caching ignoring locale | Wrong language served | Cache key per URL; avoid Vary on location unless needed |
| JavaScript-only language switcher | Versions not discovered | Plain links in HTML |
| Mixed-locale sitemaps with errors | Slow discovery | Sitemap per locale with hreflang if used |
| Encoding problems | Garbled characters, broken URLs | UTF-8 everywhere; percent-encode non-ASCII URLs consistently |
| Slow pages far from origin | Poor experience, weaker performance | CDN, edge caching, regional hosting where needed |
| Duplicate default pages (/ and /en/) | Split signals | Choose one and redirect or canonicalise |

## When to use, and when not to
Use it when launching locales, when versions aren't indexed, when users report wrong languages, after CDN or platform changes and when performance differs by country.

Don't use it for hreflang design (`hreflang-implementation`) or market strategy (`international-market-selection`).

## Inputs to ask for, in one message
1. Domains, URL patterns and how locales are selected.
2. CDN, hosting regions and caching rules.
3. A crawl per locale, ideally from different regions.
4. Search Console and Bing data per version or property.
5. Core Web Vitals field data by country.
6. Platform or framework details for routing and rendering.

## Workflow

### Step 1. Test access as a crawler
Fetch each locale from a US IP and with no Accept-Language header; confirm each URL returns its own content with 200.

### Step 2. Review redirects and banners
List any location or language-based redirects; replace with suggestion banners and remembered choices.

### Step 3. Check caching
Request the same URL from different regions and languages; confirm consistent content per URL.

### Step 4. Check discovery
Language selector links in HTML, internal links within each locale, sitemaps per locale.

### Step 5. Check duplicates and canonicals
Default locale duplication, parameter versions, self-canonicals per locale.

### Step 6. Check encoding and URLs
UTF-8, consistent handling of translated slugs and non-Latin characters.

### Step 7. Check performance by country
Core Web Vitals by country in CrUX or RUM; CDN coverage in key markets.

### Step 8. Set up properties
Search Console and Bing Webmaster Tools properties per version (domain property plus folder views), and local engine tools where relevant.

## Test commands
```bash
# Fetch a locale as Googlebot without Accept-Language
curl -sIL -A "Mozilla/5.0 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)" https://example.com/de/ | grep -iE "^HTTP|^location|content-language"
# Fetch with a different Accept-Language to check for forced redirects
curl -sIL -H "Accept-Language: fr-FR" https://example.com/de/ | grep -iE "^HTTP|^location"
```
Any redirect away from /de/ in either test is a problem to fix.

## CDN and caching rules
| Rule | Why |
|---|---|
| Cache key includes the full URL path (locale folder) | Each locale cached separately |
| Don't vary cached HTML by country or Accept-Language unless content truly differs on the same URL | Avoids serving the wrong language |
| Exclude personalised banners from cached HTML, or render them client-side | Banners don't leak between users |
| Purge all locales when shared templates change | Keeps versions consistent |
| Serve from edges near key markets | Better speed for distant users |

## Sitemaps per locale
- One sitemap (or set) per locale, referenced from a sitemap index.
- Include only canonical, indexable URLs for that locale.
- Add hreflang annotations in sitemaps if that is the chosen method.
- Submit each locale's sitemap in the matching Search Console property and in Bing Webmaster Tools.

## Non-Latin and translated URLs
- UTF-8 throughout pages, databases and headers.
- Translated slugs are fine; keep them stable and consistent.
- Expect percent-encoded URLs in logs and some tools; make sure links and hreflang use the same form everywhere.
- For scripts like Chinese, Japanese or Arabic, decide between native-script slugs and transliterated or English slugs based on how users share links in that market.

## Performance by market
Use field data (Chrome UX Report or your RUM tool) filtered by country. If a key market is much slower, check CDN coverage, image sizes, third-party scripts blocked or slow in that region (for example Google services in mainland China) and hosting distance.

## Launch checklist for a new locale
- Locale URLs return 200 from a US IP with no Accept-Language header.
- No forced redirects; banner tested.
- Locale sitemap submitted; properties verified.
- Language selector links present in server HTML.
- CDN cache keys tested from two regions.

- Core Web Vitals checked for the locale in field data after launch.

## Edge cases and judgement calls
| Situation | What to do |
|---|---|
| Legal need to restrict content by country | Restrict at the point of purchase or action, and keep informational pages crawlable where lawful |
| Locale-adaptive pages unavoidable | Follow Google's locale-adaptive guidance and expect weaker results than separate URLs |
| China delivery | Mainland hosting or CDN, often with licensing requirements; specialist review |
| Headless or JavaScript sites | Server-render locale content and links |
| Multiple platforms per market | Align routing, hreflang and canonicals across platforms |

## Handoffs to related skills
- hreflang: `hreflang-implementation`
- Structure: `international-site-structure`
- Targeting signals: `geo-language-targeting`
- Local engines: `local-search-engines`
- Rendering, redirects and speed: the Technical SEO `javascript-seo`, `redirects-status-codes` and `core-web-vitals` skills

## Worked example
A travel company redirected visitors by IP: US visitors to /us/, UK to /uk/, everyone else to /int/. Google indexed only /us/ pages well, because Googlebot crawled from the US. The fix removed forced redirects, added a banner suggesting the local version, made the language selector plain links and set CDN cache keys per URL. Within two months /uk/ and /de/ pages were indexed and ranking in their markets, and bookings from organic search in the UK and Germany rose.

## Output format
```
# International technical review: <site>, <date>
## Crawler access per locale (tests and results)
## Redirects, banners and caching findings
## Discovery, duplicates and canonicals
## Encoding and URLs
## Performance by country
## Fixes with owners and tests
```

## Common mistakes
- Forced redirects by IP or browser language.
- Locales served on one URL by cookie.
- CDNs caching the wrong language.
- JavaScript-only language switchers.
- Testing only from the home country.

## Questions to ask before you recommend changes
- How are locales chosen today, for users and crawlers?
- Where are servers and CDN edges, and how is caching keyed?
- Are there legal reasons to restrict content by country?

## Self-check before you answer
- Can a crawler from the US reach every locale with 200?
- Are redirects replaced with banners?
- Is caching consistent per URL?
- Is performance checked by country?

## Official documentation
- Google: locale-adaptive pages: https://developers.google.com/search/docs/specialty/international/locale-adaptive-pages
- Google: managing multi-regional and multilingual sites: https://developers.google.com/search/docs/specialty/international/managing-multi-regional-sites
- Chrome UX Report (field data by country): https://developer.chrome.com/docs/crux

---
Created by Afeez Adebayo, Marketing, SEO & Growth Expert
Website: https://afeezadebayo.com
LinkedIn: https://www.linkedin.com/in/afeez-adebayo/
X: https://x.com/za_icon
Source: https://afeezadebayo.com/skills-md/marketing/international-seo/international-technical-seo/

Licence: CC BY 4.0 (https://creativecommons.org/licenses/by/4.0/). You may copy, share and adapt this skill, including for commercial use, as long as you credit Afeez Adebayo and link to the source URL above. Keep this notice in any copy or adapted version.
