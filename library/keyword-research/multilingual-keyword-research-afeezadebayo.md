---
name: "multilingual-keyword-research"
description: "Research keywords natively in each country and language instead of translating English lists: native seed generation, tools with country and language settings, local autocomplete, competitors and marketplaces, native validation of meaning and intent, regional variants, English terms used locally, clustering per market and demand comparisons across markets. Use whenever someone asks for keyword research in another language, international keyword research, translating keywords, Spanish or French SEO keywords, comparing demand across countries or why translated pages don't rank."
category: "keyword-research"
platforms: ["claude-code"]
platform_source: "declared"
repo: "afeezadebayo/marketing-skills"
repo_url: "https://github.com/afeezadebayo/marketing-skills"
source: "https://github.com/afeezadebayo/marketing-skills/blob/HEAD/international-seo/multilingual-keyword-research/SKILL.md"
raw_source: "https://raw.githubusercontent.com/afeezadebayo/marketing-skills/HEAD/international-seo/multilingual-keyword-research/SKILL.md"
ref: "HEAD"
discovered_via: "github-search"
license: "CC-BY-4.0"
stars: 0
collected: "2026-11-14"
---

<!-- Claude Code skill · afeezadebayo/marketing-skills · international-seo/multilingual-keyword-research/SKILL.md · CC-BY-4.0
     Source: https://github.com/afeezadebayo/marketing-skills/blob/HEAD/international-seo/multilingual-keyword-research/SKILL.md
     Detected by: declared · Regenerated on every run; edit the upstream skill, not this copy. -->

# Multilingual Keyword Research

Translating an English keyword list is the most common mistake in international SEO. People in each market describe the same need in their own words, with different terms, spellings, word order, slang and borrowed English. A Spaniard and a Mexican may search differently; a German might search the English term for a software category; a Brazilian searches in Portuguese with local brand names. Pages built on translated keywords target searches nobody makes.

This skill researches keywords natively in each market, with native speakers and local data, maps them to intent and pages, and compares demand across markets to guide prioritisation.

## Operating principles
1. **Research in the market, in the language.** Use country and language settings in every tool and real local results.
2. **Native speakers validate.** Tools miss nuance; natives catch wrong meanings, formal versus informal terms and local slang.
3. **Intent can differ by market.** The same term may show guides in one country and product pages in another.
4. **English terms are sometimes local terms.** Many markets search English words for tech and business categories.
5. **Label every volume** with tool, country and date; small markets have unreliable estimates.

## Sources by market
| Source | Use |
|---|---|
| Search Console filtered by country | Real queries already reaching the site |
| Keyword tools with country and language settings | Volumes and ideas (label estimates) |
| Local autocomplete, People also ask and related searches | Real phrasing |
| Local competitors' navigation and rankings | Market vocabulary |
| Local marketplaces and forums | Product language and questions |
| Native customers, sales and support teams | Terms customers actually use |
| Local search engines (Baidu, Yandex, Naver) | Demand where Google isn't dominant |

## When to use, and when not to
Use it before localising content, when entering a market, when translated pages underperform and when comparing demand between candidate markets.

Don't use it for single-language keyword research (the Content SEO `keyword-research` skill) or for translation workflows (`localisation-translation`).

## Inputs to ask for, in one message
1. Markets and languages, and the products or topics to research.
2. The English (or source) keyword set and page map, if any.
3. Search Console data by country.
4. Keyword tool access with country settings.
5. Native speakers available to review.
6. Local competitors you know of.

## Workflow

### Step 1. Define topics, not keywords
List the needs and products to research rather than English phrases to translate.

### Step 2. Generate seeds natively
With a native speaker, list how locals describe each topic; add terms from local competitors, marketplaces and support.

### Step 3. Expand with tools
Run seeds with country and language settings; collect autocomplete and related searches from local results.

### Step 4. Validate meaning and intent
Natives check each term's meaning; check live local results to confirm intent and page type.

### Step 5. Cluster and map
Group terms that share results; map each cluster to one page per market.

### Step 6. Compare markets
Compare demand, competition and intent across markets for the same topic.

### Step 7. Hand to content
Give translators and writers target terms per page, with notes on register and variants.

## Common market differences
| Difference | Example |
|---|---|
| Different word for the same thing | UK "current account" vs US "checking account" |
| English term used locally | German searches for "CRM Software" alongside local terms |
| Regional variants of one language | es-ES "ordenador" vs es-MX "computadora" |
| Formal versus informal phrasing | Different tone in questions and queries |
| Different intent | Guide results in one market, product results in another |
| Local brand or regulation names | Payment, tax and legal terms specific to the country |

## Native reviewer brief
Give reviewers a short brief so feedback is consistent:
- The product and audience in one paragraph.
- The list of candidate terms per topic, with estimated volumes.
- Questions: Would you search this? What would you type instead? Is this formal, informal or technical? Does it mean anything else locally? Which results would you expect?
- A column for preferred terms and notes on regional variants.

## Market comparison template
| Topic | Market | Main term | Est. volume (tool, date) | Intent | Competition | Notes |
|---|---|---|---|---|---|---|
| Invoicing software | es-ES | programa de facturación | estimate | Commercial | Medium | Formal tone |
| Invoicing software | es-MX | facturación electrónica | estimate | Regulatory and commercial | High | CFDI rules drive demand |
Comparing topics across markets side by side shows where one page can serve several countries and where each market needs its own.

## Step-by-step session with a native speaker (60 minutes)
1. Explain the product and audience (5 min).
2. For each topic, ask how they would search for it, with no prompting (15 min).
3. Show tool suggestions and ask which they would use, which sound odd and which mean something else (20 min).
4. Search the top terms together in local results and discuss intent (15 min).
5. Agree preferred terms, variants and register (5 min).

## Search Console mining by country
- Filter Performance by country and export queries for 16 months.
- Separate queries in the local language from English queries.
- Find local-language queries already reaching English pages: strong candidates for localised pages.
- Note branded queries by country to gauge brand awareness per market.

## Volume reliability
| Market size | Reliability of tool estimates | What to lean on |
|---|---|---|
| Large (US, UK, DE, FR, JP) | Reasonable for head terms | Tools plus Search Console |
| Mid-size (NL, SE, PL, MX) | Patchy for long tail | Search Console, autocomplete, natives |
| Small markets | Often zero or missing | Natives, autocomplete, local competitors |
Always show estimates as ranges or labels, not precise figures.

## Handing research to content teams
For each page, give the main term, two to five supporting terms, the intent, the expected page type from local results, register notes and examples of local competitors' pages. Writers and translators then build pages around what locals search instead of converting English pages word for word.

## Edge cases and judgement calls
| Situation | What to do |
|---|---|
| Tiny markets with zero-volume estimates | Use Search Console, autocomplete and native judgement |
| One language, several countries | Research each country; decide whether one page can serve all |
| Languages without spaces (Chinese, Japanese, Thai) | Use native tools and speakers; check segmentation in tools |
| Mixed-language queries | Include them; they reflect real behaviour |
| Local search engine markets | Research in that engine's tools too |

## Handoffs to related skills
- Market prioritisation: `international-market-selection`
- Localisation: `localisation-translation`
- Content plans per market: `international-content-strategy`
- Local engines: `local-search-engines`
- Single-market research methods: the Content SEO `keyword-research` skill

## Worked example
A UK invoicing SaaS translated its keyword list into Spanish for Spain and Mexico. Native research showed Spanish users searched "programa de facturación" and "factura electrónica", while Mexican searches centred on "facturación electrónica" and CFDI, the country's electronic invoicing standard, with very different intent driven by tax rules. The company split es-ES and es-MX pages, built a CFDI guide for Mexico and rewrote Spanish pages around local terms. Impressions in both markets rose, and Mexico became the stronger market once the local regulatory angle was covered.

## Output format
```
# Multilingual keyword research: <topics>, <markets>, <date>
## Topics and native seed lists
## Clusters per market (terms, est. volume with tool and date, intent, page)
## Market comparison
## Notes for translators and writers
```

## Common mistakes
- Translating English keywords.
- Research with the wrong country setting.
- No native review.
- Assuming one Spanish, French or English keyword set serves every country.
- Ignoring English terms used locally.

## Questions to ask before you research
- Which topics and products matter in each market?
- Who can review terms as a native speaker?
- Which search engines matter in each market?

## Self-check before you answer
- Were seeds generated natively, not translated?
- Are volumes labelled with tool, country and date?
- Was intent checked in local results?
- Are clusters mapped to one page per market?

## Official documentation and tools
- Google Keyword Planner: https://support.google.com/google-ads/answer/7337243
- Google Trends (by country): https://trends.google.com/
- Google Search Console Performance report: https://support.google.com/webmasters/answer/7576553

---
Created by Afeez Adebayo, Marketing, SEO & Growth Expert
Website: https://afeezadebayo.com
LinkedIn: https://www.linkedin.com/in/afeez-adebayo/
X: https://x.com/za_icon
Source: https://afeezadebayo.com/skills-md/marketing/international-seo/multilingual-keyword-research/

Licence: CC BY 4.0 (https://creativecommons.org/licenses/by/4.0/). You may copy, share and adapt this skill, including for commercial use, as long as you credit Afeez Adebayo and link to the source URL above. Keep this notice in any copy or adapted version.
