---
name: "hreflang-implementation"
description: "Implement and debug hreflang through HTML, HTTP headers or XML sitemaps: reciprocal, self-referencing sets, valid ISO language and country codes, x-default, canonical alignment within each language, targets that return 200, common errors and fixes, Bing's lang and content-language signals, validation crawls and country-level monitoring. Use whenever someone mentions hreflang, the wrong country or language page ranking, hreflang errors, x-default, return tags, en-GB versus en-UK, or multilingual canonical conflicts."
category: "international-seo"
platforms: ["claude-code"]
platform_source: "declared"
repo: "afeezadebayo/marketing-skills"
repo_url: "https://github.com/afeezadebayo/marketing-skills"
source: "https://github.com/afeezadebayo/marketing-skills/blob/HEAD/international-seo/hreflang-implementation/SKILL.md"
raw_source: "https://raw.githubusercontent.com/afeezadebayo/marketing-skills/HEAD/international-seo/hreflang-implementation/SKILL.md"
ref: "HEAD"
discovered_via: "github-search"
license: "CC-BY-4.0"
stars: 0
collected: "2026-11-14"
---

<!-- Claude Code skill · afeezadebayo/marketing-skills · international-seo/hreflang-implementation/SKILL.md · CC-BY-4.0
     Source: https://github.com/afeezadebayo/marketing-skills/blob/HEAD/international-seo/hreflang-implementation/SKILL.md
     Detected by: declared · Regenerated on every run; edit the upstream skill, not this copy. -->

# hreflang Implementation and Debugging

hreflang tells search engines which language and country each version of a page targets, so a searcher in Mexico sees the es-MX page and a searcher in Spain sees es-ES. Google says it doesn't boost rankings; it helps serve the right version. [Confirmed, Google] It is also one of the most error-prone parts of technical SEO: return tags missing, codes invented, tags pointing at redirects, canonicals overriding everything. Bing has described hreflang as a weak signal and relies more on other signals such as content-language. [Reported, Bing]

This skill designs, implements and debugs hreflang through HTML link elements, HTTP headers or XML sitemaps, and aligns it with canonicals, structure and Bing's signals.

## Operating principles
1. **Every version lists every version, including itself.** Annotations must be reciprocal (return tags) and self-referencing.
2. **Only canonical, indexable, 200 URLs.** Never point hreflang at redirects, noindexed or canonicalised pages.
3. **Canonicals stay within a language.** Each version is self-canonical; cross-language canonicals cancel hreflang.
4. **Valid codes only.** ISO 639-1 language, optionally with ISO 3166-1 alpha-2 country (en-GB, not en-UK).
5. **One method per page set.** HTML, headers or sitemaps; mixing invites conflicts.

## Methods compared
| Method | Best for | Watch out for |
|---|---|---|
| HTML link elements in head | Small to mid-size sites | Adds page weight with many locales; must be in server HTML |
| HTTP headers | PDFs and non-HTML files | Harder to maintain |
| XML sitemaps | Large sites, many locales | Must stay in sync with canonical URLs |

## Example (HTML)
```html
<link rel="alternate" hreflang="en-gb" href="https://example.com/uk/pricing/" />
<link rel="alternate" hreflang="en-us" href="https://example.com/us/pricing/" />
<link rel="alternate" hreflang="de" href="https://example.com/de/preise/" />
<link rel="alternate" hreflang="x-default" href="https://example.com/pricing/" />
```
The same set appears on every listed page.

## Example (XML sitemap)
```xml
<url>
  <loc>https://example.com/uk/pricing/</loc>
  <xhtml:link rel="alternate" hreflang="en-gb" href="https://example.com/uk/pricing/"/>
  <xhtml:link rel="alternate" hreflang="en-us" href="https://example.com/us/pricing/"/>
  <xhtml:link rel="alternate" hreflang="de" href="https://example.com/de/preise/"/>
  <xhtml:link rel="alternate" hreflang="x-default" href="https://example.com/pricing/"/>
</url>
```

## When to use, and when not to
Use it when launching language or country versions, when the wrong version ranks in a market, when Search Console or crawls show hreflang errors, after migrations and when adding locales.

Don't use it to choose the structure (`international-site-structure`) or to fix poor localisation; hreflang can't make a weak page rank.

## Inputs to ask for, in one message
1. Locales and their URL patterns.
2. Current hreflang method and examples.
3. A crawl with hreflang, canonical, status and indexability.
4. Search Console performance by country showing which URLs rank where.
5. CMS or platform hreflang features (plugins, built-in localisation).

## Workflow

### Step 1. Map equivalents
For each page, list its equivalents in every locale. Pages without equivalents simply omit that locale.

### Step 2. Choose codes
Language-only (de) when one version serves all countries for that language; language-country (de-AT) when versions differ by country. Avoid invalid codes such as en-UK or es-LA.

### Step 3. Choose x-default
The page for users whose language or country isn't served: often the global English page or a language selector.

### Step 4. Implement
One method, generated from the CMS or a mapping table, never hand-edited at scale.

### Step 5. Align canonicals
Every version self-canonical; no cross-language canonicals.

### Step 6. Validate
Crawl to check return tags, codes, status, canonical conflicts and self-references.

### Step 7. Monitor
Compare which URL ranks in each country in Search Console; re-crawl monthly and after releases.

## Common errors and fixes
| Error | Effect | Fix |
|---|---|---|
| Missing return tags | Annotations ignored | Generate full sets on every version |
| Points to redirect or 404 | Ignored | Use final canonical URLs |
| Cross-language canonical | hreflang cancelled | Self-canonicals per version |
| Invalid codes (en-UK) | Ignored | Use ISO codes (en-GB) |
| Missing self-reference | Weaker set | Include the page itself |
| Mixed methods disagree | Conflicts | Use one method |
| hreflang only on home pages | Deep pages mis-served | Implement on all equivalent templates |

## Bing considerations
Add an accurate html lang attribute and, where useful, a content-language meta tag; keep language consistent within each page; use Bing Webmaster Tools to check how versions are indexed.

## Building hreflang from a mapping table
Keep a table (in the CMS, database or a spreadsheet for small sites) with one row per content item and one column per locale holding its canonical URL. Generate hreflang from that table on every page or in sitemaps. When a page is added, removed or redirected, update the table once and every annotation follows. Hand-written tags across hundreds of pages always drift.

## x-default choices
| Situation | x-default |
|---|---|
| Global English version exists | The global English page |
| Root is a language chooser | The chooser page |
| No sensible fallback | Omit x-default rather than pointing at a random version |

## Validation checklist
- Every URL in a set lists all others and itself.
- All hreflang targets return 200, are indexable and self-canonical.
- Codes are valid ISO language (and optional country) codes, lowercase or consistent case.
- Only one method is used for each set.
- Search Console by country shows the intended URLs ranking within weeks of fixes.

## Tools
Crawlers such as Screaming Frog and Sitebulb report hreflang errors at scale; spot-check with URL Inspection and by viewing server HTML.

## Language-only versus language-country codes
Use language-only codes (de, fr) when one version serves every country speaking that language. Use language-country codes (de-AT, fr-CA) only when versions really differ by country. You can combine them: es for a general Spanish version plus es-MX for a Mexico-specific one, so Mexican searchers get es-MX and other Spanish speakers get es. Country codes must never appear alone (hreflang="uk" means Ukrainian, not the United Kingdom).

Recheck hreflang after every template, CMS or URL change; most breakages arrive with unrelated releases.

## Edge cases and judgement calls
| Situation | What to do |
|---|---|
| Page exists in only some locales | Omit missing locales; don't point to the home page instead |
| Very many locales | Use sitemaps to avoid huge head sections |
| Same content for several English markets | hreflang helps choose the right version; differentiate prices or details where possible |
| JavaScript-rendered sites | Put hreflang in server HTML or sitemaps |
| Paginated or filtered pages | Annotate only indexable canonical pages |

## Handoffs to related skills
- Structure and URL patterns: `international-site-structure`
- Targeting signals: `geo-language-targeting`
- Technical routing and rendering: `international-technical-seo`
- Canonical rules: the Technical SEO `canonicalization` skill
- Sitemaps: the Technical SEO `xml-sitemaps` skill

## Worked example
A retailer saw UK product pages ranking in Ireland instead of IE pages. The crawl found hreflang on UK pages listing IE versions, but IE pages had no hreflang at all, IE canonicals pointed to UK URLs, and the code en-UK was used. Generating full reciprocal sets from the product database, switching to en-GB, making IE pages self-canonical and moving annotations into sitemaps fixed it; within six weeks Search Console showed IE URLs ranking in Ireland.

## Output format
```
# hreflang plan or audit: <site>, <date>
## Locales and codes
## Method and x-default
## Error report (type, count, examples, fix)
## Canonical alignment
## Validation and monitoring plan
```

## Common mistakes
- Missing return tags.
- Cross-language canonicals.
- Invalid language or country codes.
- Pointing to redirects or noindexed pages.
- Expecting hreflang to boost rankings.

## Questions to ask before you implement
- Do versions differ by language, by country or both?
- Which page should users from unserved markets see?
- Can the CMS generate hreflang from a mapping?

## Self-check before you answer
- Are sets reciprocal and self-referencing with valid codes?
- Do all targets return 200 and self-canonicalise?
- Is one method used consistently?
- Is Bing considered with lang and content-language?

## Official documentation
- Google: tell Google about localised versions of your page: https://developers.google.com/search/docs/specialty/international/localized-versions
- ISO 639-1 language codes: https://www.loc.gov/standards/iso639-2/php/code_list.php
- ISO 3166 country codes: https://www.iso.org/iso-3166-country-codes.html

---
Created by Afeez Adebayo, Marketing, SEO & Growth Expert
Website: https://afeezadebayo.com
LinkedIn: https://www.linkedin.com/in/afeez-adebayo/
X: https://x.com/za_icon
Source: https://afeezadebayo.com/skills-md/marketing/international-seo/hreflang-implementation/

Licence: CC BY 4.0 (https://creativecommons.org/licenses/by/4.0/). You may copy, share and adapt this skill, including for commercial use, as long as you credit Afeez Adebayo and link to the source URL above. Keep this notice in any copy or adapted version.
