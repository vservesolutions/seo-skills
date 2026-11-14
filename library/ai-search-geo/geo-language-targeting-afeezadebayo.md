---
name: "geo-language-targeting"
description: "Align the signals Google and Bing use to show the right country and language version: ccTLDs and generic ccTLDs, URL structure, hreflang, html lang and content-language for Bing, one language per page, local currency, address, phone and delivery details, local links and listings, differentiation of same-language versions and monitoring of ranking URLs by country. Use whenever someone asks why the wrong country version ranks, geotargeting after Search Console removed the setting, Bing international SEO, content-language, html lang, or making UK, US and Australian versions rank in the right…"
category: "ai-search-geo"
platforms: ["claude-code"]
platform_source: "declared"
repo: "afeezadebayo/marketing-skills"
repo_url: "https://github.com/afeezadebayo/marketing-skills"
source: "https://github.com/afeezadebayo/marketing-skills/blob/HEAD/international-seo/geo-language-targeting/SKILL.md"
raw_source: "https://raw.githubusercontent.com/afeezadebayo/marketing-skills/HEAD/international-seo/geo-language-targeting/SKILL.md"
ref: "HEAD"
discovered_via: "github-search"
license: "CC-BY-4.0"
stars: 0
collected: "2026-11-14"
---

<!-- Claude Code skill · afeezadebayo/marketing-skills · international-seo/geo-language-targeting/SKILL.md · CC-BY-4.0
     Source: https://github.com/afeezadebayo/marketing-skills/blob/HEAD/international-seo/geo-language-targeting/SKILL.md
     Detected by: declared · Regenerated on every run; edit the upstream skill, not this copy. -->

# Country and Language Targeting Signals

Search engines decide which version of a page to show in each country and language from many signals: the domain, the URL structure, hreflang, the language of the content, local addresses and currencies, links from local sites and, for Bing, content-language metadata. Google removed its manual country-targeting setting from Search Console in 2022, so for generic domains these other signals now carry the load. [Confirmed, Google] When signals conflict, the wrong version ranks, or one version ranks everywhere.

This skill audits and aligns country and language signals for Google and Bing so each market sees the right version.

## Signals and how engines use them
| Signal | Google | Bing |
|---|---|---|
| ccTLD (example.de) | Strong country signal (except generic ccTLDs like .io, .co, .ai) | Strong |
| Subfolder or subdomain with country code | Helps when paired with hreflang | Helps |
| hreflang | Used to choose the right version; no ranking boost | Described as a weak signal |
| html lang attribute | Not used for targeting; Google detects language itself | Used as a language signal |
| content-language meta or header | Not relied on | Used as a signal |
| Page language (actual text) | Detected from content; one language per page recommended | Detected |
| Local currency, address, phone, delivery info | Contextual relevance | Contextual relevance |
| Links and mentions from local sites | Help local relevance | Help |
| Google Business Profile or local listings | For local businesses | Bing Places |

## Operating principles
1. **Make signals agree.** Domain, URL, hreflang, language and local details should point the same way.
2. **One language per page.** Mixed-language pages confuse detection; keep navigation and content in the same language.
3. **Don't rely on hidden signals.** Content and context visible to users matter.
4. **Cover Bing explicitly.** Add lang and content-language because Bing leans on them.
5. **Avoid forced redirects.** IP or browser-language redirects can stop crawlers and users from reaching versions.

## When to use, and when not to
Use it when the wrong country version ranks, when versions for the same language compete, when entering markets on a generic domain and when Bing shows different behaviour from Google.

Don't use it to rebuild hreflang from scratch (`hreflang-implementation`) or to choose structure (`international-site-structure`).

## Inputs to ask for, in one message
1. Domains and URL patterns per market.
2. Search Console and Bing Webmaster Tools performance by country, with ranking URLs.
3. A crawl with hreflang, lang attributes and content-language.
4. Local details per version: currency, address, phone, delivery, legal pages.
5. Backlink profile by country if available.

## Workflow

### Step 1. Find mismatches
In Search Console, list countries where the ranking URL isn't the intended version. Repeat in Bing.

### Step 2. Check technical signals
hreflang, html lang, content-language, canonical and structure for each mismatched pair.

### Step 3. Check on-page signals
Is the page fully in the target language? Are currency, prices, address, phone and delivery details local?

### Step 4. Check off-page signals
Do local sites link to the local version? Are local listings and profiles pointing to it?

### Step 5. Differentiate similar versions
For same-language versions (en-GB, en-IE, en-AU), add real local differences: prices, spelling, delivery, regulations, examples.

### Step 6. Fix and monitor
Align signals; monitor ranking URLs by country monthly in both Google and Bing.

## Differentiating same-language versions
| Element | en-GB | en-US | en-AU |
|---|---|---|---|
| Spelling | British (-ise, -our) | American (-ize, -or) | British (-ise, -our) |
| Currency and tax display | GBP incl. VAT | USD excl. sales tax | AUD incl. GST |
| Phone and address | UK number | US number | AU number |
| Delivery and returns | UK terms | US terms | AU terms |
| Examples and regulations | UK companies, HMRC | US companies, IRS | AU companies, ATO |
The more of these differ, the easier it is for search engines and users to tell versions apart.

## Checking ranking URLs by country
1. In Search Console, open Performance, filter by country, and view the Pages tab for important queries.
2. Note any country where the top page belongs to another market's version.
3. Repeat in Bing Webmaster Tools.
4. Record mismatches in a sheet with the country, query, intended URL, ranking URL and engine.
5. After fixes, re-check monthly; changes usually show within weeks once pages are re-crawled.

## Suggestion banners instead of redirects
When a visitor seems to be in the wrong version (based on browser language or location), show a small banner in their language offering the right version, and remember their choice. Never block access or redirect automatically, because crawlers mostly visit from US IP addresses and users sometimes want another version on purpose.

## Signal alignment checklist per version
- URL sits in the market's folder, subdomain or ccTLD.
- Self-canonical; reciprocal hreflang with correct codes.
- html lang matches the page language (and region where useful, such as en-AU).
- content-language meta or header set for Bing where helpful.
- Text, navigation and footer fully in the target language.
- Local currency, prices, tax display, phone, address and delivery terms.
- Local reviews, case studies or testimonials where available.
- Internal links stay within the same locale.
- Local links and listings point to this version.

## When to consolidate instead
If same-language versions can't be differentiated (same prices, products, terms and examples), consider one language version serving all those countries. Fewer, stronger pages often outperform several near-identical ones competing with each other.

## Local businesses with several locations
Give each location its own page in the right locale with address, opening hours, phone and local details, linked from Google Business Profile and Bing Places listings for that location. This connects local listings to the right version and supports local pack visibility.

## Monitoring cadence
Check ranking URLs by country monthly for priority markets and after any change to hreflang, canonicals, templates or domains. Keep a log of mismatches and fixes so patterns across markets become visible.

Fix the version with the most traffic at stake first, then roll the pattern out to every market.

## Edge cases and judgement calls
| Situation | What to do |
|---|---|
| Generic ccTLD (.io, .ai) | Treat as generic; rely on structure and hreflang |
| Versions nearly identical | Add local differences or consolidate |
| Local business with several countries | Local profiles per location, linked to the right version |
| Browser-language redirects | Replace with suggestion banners |
| Content partly in English on local pages | Translate navigation, footers and key content |

## Handoffs to related skills
- hreflang: `hreflang-implementation`
- Structure: `international-site-structure`
- Technical redirects and CDNs: `international-technical-seo`
- Local links: `international-link-building`
- Overall audit: `international-seo-audit`

## Worked example
An Australian software company on a .com saw its US pages ranking in Australia and the UK in Google, and the Australian pages ranking everywhere in Bing. hreflang was correct on Google, but AU pages showed USD prices and a US phone number, html lang said "en" on every version and there was no content-language. Adding AUD prices, local phone numbers and Australian spelling, setting lang="en-AU" and matching content-language for Bing, and earning links from Australian industry sites led to AU pages ranking in Australia on both engines within two months.

## Output format
```
# Targeting signals review: <site>, <date>
## Mismatches by market (Google and Bing)
## Signal audit per version (technical, on-page, off-page)
## Fixes and differentiation plan
## Monitoring plan
```

## Common mistakes
- Relying on hreflang alone.
- Ignoring Bing's different signals.
- Same-language versions with no real differences.
- Mixed-language pages.
- Forced IP or browser-language redirects.

## Questions to ask before you recommend changes
- Which countries show the wrong ranking URL, in which engine?
- What really differs between same-language versions?
- Do local sites link to the local versions?

## Self-check before you answer
- Did I check Google and Bing separately?
- Do technical, on-page and off-page signals agree?
- Are same-language versions differentiated?
- Is monitoring by country in place?

## Official documentation
- Google: managing multi-regional and multilingual sites: https://developers.google.com/search/docs/specialty/international/managing-multi-regional-sites
- Google: localised versions: https://developers.google.com/search/docs/specialty/international/localized-versions
- Bing Webmaster Tools help: https://www.bing.com/webmasters/help/

---
Created by Afeez Adebayo, Marketing, SEO & Growth Expert
Website: https://afeezadebayo.com
LinkedIn: https://www.linkedin.com/in/afeez-adebayo/
X: https://x.com/za_icon
Source: https://afeezadebayo.com/skills-md/marketing/international-seo/geo-language-targeting/

Licence: CC BY 4.0 (https://creativecommons.org/licenses/by/4.0/). You may copy, share and adapt this skill, including for commercial use, as long as you credit Afeez Adebayo and link to the source URL above. Keep this notice in any copy or adapted version.
