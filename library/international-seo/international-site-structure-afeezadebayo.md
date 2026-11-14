---
name: "international-site-structure"
description: "Choose and design the structure for international versions: ccTLDs versus subfolders versus subdomains versus parameters, trade-offs for authority, cost, operations, legal and brand, Google's generic ccTLDs, language and country URL patterns, translated slugs, crawlable version selection with non-forcing banners and x-default planning. Use whenever someone asks whether to use ccTLDs, subdomains or subfolders for international SEO, how to structure multilingual URLs, language switchers, geo-redirects or setting up a new country site."
category: "international-seo"
platforms: ["claude-code"]
platform_source: "declared"
repo: "afeezadebayo/marketing-skills"
repo_url: "https://github.com/afeezadebayo/marketing-skills"
source: "https://github.com/afeezadebayo/marketing-skills/blob/HEAD/international-seo/international-site-structure/SKILL.md"
raw_source: "https://raw.githubusercontent.com/afeezadebayo/marketing-skills/HEAD/international-seo/international-site-structure/SKILL.md"
ref: "HEAD"
discovered_via: "github-search"
license: "CC-BY-4.0"
stars: 0
collected: "2026-11-14"
---

<!-- Claude Code skill · afeezadebayo/marketing-skills · international-seo/international-site-structure/SKILL.md · CC-BY-4.0
     Source: https://github.com/afeezadebayo/marketing-skills/blob/HEAD/international-seo/international-site-structure/SKILL.md
     Detected by: declared · Regenerated on every run; edit the upstream skill, not this copy. -->

# International Site Structure: ccTLDs, Subfolders and Subdomains

How you structure international versions decides how search engines find them, how authority flows between them, how much each market costs to run and how hard it is to change later. The choice between country-code domains (example.de), subfolders (example.com/de/), subdomains (de.example.com) and parameters (example.com?lang=de) is one of the most consequential and least reversible decisions in international SEO.

This skill compares structures for a specific business, recommends one, designs the URL patterns for language and country, and plans how users and crawlers reach each version without forced redirects.

## Operating principles
1. **Every version needs its own crawlable URL.** Cookie- or IP-based switching on one URL hides versions from search engines.
2. **Choose for the business, not for theory.** Brand, legal entities, teams, budgets and markets matter as much as SEO.
3. **Consolidation usually helps smaller sites.** Subfolders share authority across markets on one domain.
4. **Don't force redirects by IP or browser language.** Suggest the right version with a banner instead.
5. **Plan for growth.** The structure should scale to the next five markets without a migration.

## Structure comparison
| Option | Example | Strengths | Weaknesses | Typical fit |
|---|---|---|---|---|
| ccTLD | example.de | Strongest country signal; local trust; legal clarity | Separate authority per domain; higher cost; domain availability | Large brands with local entities and budgets |
| Subfolder | example.com/de/ | Shares domain authority; simple to run; one property | Weaker country signal than ccTLD | Most growing businesses |
| Subdomain | de.example.com | Separate hosting or platforms possible | Often treated more separately; more work to build authority | Different platforms or teams per market |
| gTLD with parameters | example.com?lang=de | Easy to implement | Hard to manage and target; weak signals | Rarely recommended |
| Different domains per language (not country) | example-fr.com | Brand reasons | Fragmented authority | Rare |

Google treats some country-code domains (such as .io, .co and .ai) as generic, so they don't signal a country. Google removed the manual country-targeting setting from Search Console in 2022, which makes structure and hreflang more important for gTLDs. [Confirmed, Google]

## URL pattern design
| Need | Pattern | Example |
|---|---|---|
| Language only | /{lang}/ | /de/, /fr/ |
| Country and language | /{lang}-{country}/ | /de-at/, /fr-ch/ |
| Country only (single language each) | /{country}/ | /uk/, /au/ |
| Translated slugs | Localised paths | /de/preise/ instead of /de/pricing/ |
Use lowercase, consistent separators and stable patterns; translated slugs help users and can help relevance, but keep a mapping for hreflang.

## When to use, and when not to
Use it before launching international versions, when restructuring an existing international site, when acquiring local domains and when versions are currently chosen by cookie or IP.

Don't use it for hreflang details (`hreflang-implementation`) or migration execution (`international-expansion-migration`).

## Inputs to ask for, in one message
1. Current and planned markets and languages.
2. Business setup: legal entities, local teams, budgets per market.
3. Platform and CMS capabilities (multisite, translations, routing).
4. Current domains and how versions are served.
5. Brand constraints and domain ownership.

## Workflow

### Step 1. List requirements
Markets, languages, legal entities, separate catalogues or prices, local teams and platform limits.

### Step 2. Compare options
Score ccTLD, subfolder and subdomain against SEO, cost, operations, legal and brand needs.

### Step 3. Recommend and justify
State the choice with trade-offs, and where it might change later (for example a ccTLD for a large market once a local entity exists).

### Step 4. Design URL patterns
Language and country codes, slug translation rules, handling of shared pages and the default version.

### Step 5. Design version selection
Crawlable links between versions (a language selector with links, not only scripts), a non-forcing suggestion banner based on browser language or location, and remembered user choice.

### Step 6. Plan the default and x-default
What users from unserved markets see, and which URL acts as x-default.

### Step 7. Plan implementation
Routing, CMS setup, sitemaps per market, Search Console and Bing properties per version.

## Language selector checklist
- Visible on every page, usually in the header or footer.
- Plain links (a href) to the equivalent page in each language, not only to home pages.
- Language names written in their own language (Deutsch, Français), not flags alone; flags represent countries, not languages.
- Remembers the user's choice and doesn't override it on the next visit.
- Falls back to the closest equivalent page when a translation doesn't exist.
- Works without JavaScript so crawlers can follow it.

## Decision guide
| Question | If yes | If no |
|---|---|---|
| Do you have separate legal entities and budgets per country? | ccTLDs become realistic | Prefer subfolders |
| Do markets need different platforms or catalogues? | Subdomains or ccTLDs may be simpler | Subfolders |
| Is the domain young or weak? | Subfolders to concentrate authority | Any option can work |
| Do you need the strongest local trust signal (for example a .de)? | ccTLD for that market | Subfolder |
| Will you add many markets soon? | Subfolders scale fastest | Either |

## Default and root page handling
- Decide what the root URL (/) shows: the main market, a global English version or a language chooser.
- Avoid the same content at / and /en/; pick one and redirect or canonicalise the other.
- If / is a chooser, make it useful (links to each version with short descriptions) and set it as x-default.
- Never redirect / automatically by IP; show a banner instead.

## Costs to compare
| Cost | ccTLD | Subfolder | Subdomain |
|---|---|---|---|
| Domains and renewals | Per country | One | One |
| Hosting and platforms | Often separate | Shared | Shared or separate |
| Search Console and analytics | Per domain | One property with folder views | Per subdomain |
| Link building | Per domain | Shared authority | Partly separate |
| Legal and brand management | Per domain | Central | Central |

## Search Console setup for subfolders
Add a domain property for the whole site, then URL-prefix properties for each locale folder (example.com/de/) so each market team sees its own performance, indexing and sitemaps.

## Edge cases and judgement calls
| Situation | What to do |
|---|---|
| Already on ccTLDs with strong authority | Keep them unless costs or fragmentation hurt; consolidation is a migration |
| One platform cannot serve subfolders | Subdomains or reverse proxy to subfolders |
| Same English content for UK, US, AU | Separate versions only if prices, spelling, products or laws differ |
| China | Often a separate .cn domain with local hosting; specialist review |
| Geo-redirects already in place | Replace with banners; keep all versions crawlable |

## Handoffs to related skills
- hreflang for the chosen structure: `hreflang-implementation`
- Targeting signals: `geo-language-targeting`
- Technical routing and redirects: `international-technical-seo`
- Moving between structures: `international-expansion-migration`
- Market priorities: `international-market-selection`

## Worked example
A B2B SaaS served German, French and Spanish versions on one URL, switching language by cookie, so only English was indexed. Considering ccTLDs, subdomains and subfolders, the recommendation was subfolders (/de/, /fr/, /es/) to share the main domain's authority, keep one platform and avoid buying domains. Language selection became crawlable links plus a non-forcing banner; English stayed x-default. Within three months each language had its own indexed pages and impressions in its markets.

## Output format
```
# International structure plan: <site>, <date>
## Requirements
## Options comparison and recommendation
## URL patterns (language, country, slugs)
## Version selection and x-default
## Implementation steps
```

## Common mistakes
- One URL for all languages with cookie or IP switching.
- Forced IP redirects that block crawlers from other versions.
- Choosing ccTLDs without budget to build authority for each.
- Language selectors built only in JavaScript.
- Changing structure repeatedly.

## Questions to ask before you choose
- Do markets need different prices, products, legal entities or teams?
- What can the platform route and manage?
- How many markets are planned in the next three years?

## Self-check before you answer
- Does every version get its own crawlable URL?
- Is the recommendation justified against business needs?
- Are URL patterns consistent and scalable?
- Is version selection non-forcing and crawlable?

## Official documentation
- Google: managing multi-regional and multilingual sites: https://developers.google.com/search/docs/specialty/international/managing-multi-regional-sites
- Google: locale-adaptive pages: https://developers.google.com/search/docs/specialty/international/locale-adaptive-pages

---
Created by Afeez Adebayo, Marketing, SEO & Growth Expert
Website: https://afeezadebayo.com
LinkedIn: https://www.linkedin.com/in/afeez-adebayo/
X: https://x.com/za_icon
Source: https://afeezadebayo.com/skills-md/marketing/international-seo/international-site-structure/

Licence: CC BY 4.0 (https://creativecommons.org/licenses/by/4.0/). You may copy, share and adapt this skill, including for commercial use, as long as you credit Afeez Adebayo and link to the source URL above. Keep this notice in any copy or adapted version.
