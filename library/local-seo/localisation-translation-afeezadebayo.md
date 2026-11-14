---
name: "localisation-translation"
description: "Design localisation workflows that serve users and search in every market: content tiers, keyword localisation before translation, glossaries and translation memory, AI or machine translation with native review, localised prices, currencies, payments, units, examples, legal and metadata, quality checks, scaled-content risks and measurement by market. Use whenever someone asks about translating a website for SEO, AI translation, localisation, transcreation, multilingual content quality, translated pages not ranking or building a translation workflow."
category: "local-seo"
platforms: ["claude-code"]
platform_source: "declared"
repo: "afeezadebayo/marketing-skills"
repo_url: "https://github.com/afeezadebayo/marketing-skills"
source: "https://github.com/afeezadebayo/marketing-skills/blob/HEAD/international-seo/localisation-translation/SKILL.md"
raw_source: "https://raw.githubusercontent.com/afeezadebayo/marketing-skills/HEAD/international-seo/localisation-translation/SKILL.md"
ref: "HEAD"
discovered_via: "github-search"
license: "CC-BY-4.0"
stars: 0
collected: "2026-11-14"
---

<!-- Claude Code skill · afeezadebayo/marketing-skills · international-seo/localisation-translation/SKILL.md · CC-BY-4.0
     Source: https://github.com/afeezadebayo/marketing-skills/blob/HEAD/international-seo/localisation-translation/SKILL.md
     Detected by: declared · Regenerated on every run; edit the upstream skill, not this copy. -->

# Localisation and Translation Workflows for SEO

Translation turns words into another language; localisation turns a page into something that works for people in another market: their search terms, currency, payment methods, units, examples, laws, holidays and expectations. AI translation has made translation cheap and fast, which tempts companies to publish whole sites in many languages overnight. The result is often pages that read awkwardly, target terms nobody searches and never earn clicks. Since 2025 Google has also shown its own machine-translated versions of English pages to searchers in other languages and removed its old guidance to block auto-translated pages, which means a weak local version competes with Google's own translation. [Reported, 2025]

This skill designs localisation workflows that combine AI or machine translation with human review, keyword localisation, glossaries and quality checks, so localised pages serve users and search well.

## Operating principles
1. **Localise intent, not words.** Start from what people in the market search and need.
2. **AI drafts, humans decide.** Native reviewers check meaning, tone, terminology and claims on important pages.
3. **Everything on the page is localised:** titles, metas, headings, alt text, structured data, URLs where used, forms and error messages.
4. **Consistency through glossaries and memory.** Brand terms, product names and key phrases translate the same way everywhere.
5. **Quality over coverage.** Fewer excellent pages beat many weak ones; Google treats scaled low-value content as spam however it is produced.

## What to localise
| Element | Example |
|---|---|
| Keywords and topics | "Rechnungsprogramm" rather than a literal translation of "invoicing software" |
| Prices and currency | EUR with local VAT display rules |
| Payment methods | iDEAL (Netherlands), Pix (Brazil), local cards and bank transfers |
| Units and formats | Metric, date formats, decimal separators |
| Examples and imagery | Local companies, names, places, holidays |
| Legal and trust | Local terms, privacy notices, company details, reviews from the market |
| Contact and support | Local phone numbers, hours, language of support |
| Metadata and markup | Titles, descriptions, alt text, structured data in the target language |

## When to use, and when not to
Use it when launching languages, when translated pages underperform, when moving to AI translation, when building a localisation process and when quality complaints arise.

Don't use it to choose markets (`international-market-selection`) or for hreflang (`hreflang-implementation`).

## Inputs to ask for, in one message
1. Target languages and markets, and the pages or templates to localise.
2. Current translation method (agency, freelancers, machine or AI translation, review).
3. Brand voice guidelines and any existing glossary or translation memory.
4. Platform and translation tools (CMS plugins, translation management systems).
5. Performance of existing localised pages by market.
6. Budget and native reviewer availability.

## Workflow

### Step 1. Tier the content
| Tier | Content | Process |
|---|---|---|
| 1 | Home, product, pricing, top landing pages, legal | Transcreation or full human translation with SEO localisation |
| 2 | High-traffic guides and help articles | AI translation plus native editing and keyword localisation |
| 3 | Long-tail or low-traffic content | AI translation with spot checks, or don't translate |
| 4 | Content irrelevant to the market | Don't publish |

### Step 2. Localise keywords first
Research local terms before translating (`multilingual-keyword-research`); give translators target keywords per page.

### Step 3. Build glossaries
Brand, product and feature names, terms that must not be translated, preferred translations and banned words.

### Step 4. Translate
Use AI or machine translation with the glossary and context, or human translators for tier 1.

### Step 5. Review
Native reviewers check meaning, tone, terminology, local examples, claims and keyword use.

### Step 6. Localise everything else
Currency, payments, units, images, legal pages, contact details, metadata, alt text, structured data and form messages.

### Step 7. Quality-check before publishing
Rendering, truncation, links pointing to the same-language pages, hreflang and canonicals.

### Step 8. Measure and improve
Indexing, impressions, click-through and conversions per market; prioritise reviews where pages underperform.

## AI translation quality checklist
- Meaning preserved, no hallucinated additions or omissions.
- Brand and product terms follow the glossary.
- Local search terms used naturally in titles, headings and body.
- Examples, currencies and units localised.
- Tone matches local norms (formal or informal address, such as Sie or du in German).
- Legal and regulatory claims checked by someone qualified for that market.

## Glossary template
| Source term | Target term | Notes | Do not translate? |
|---|---|---|---|
| Workspace | Arbeitsbereich | UI label; keep consistent | No |
| [Brand name] | [Brand name] | Never translate or adapt | Yes |
| Free trial | Kostenlose Testversion | Preferred over "Gratis-Test" | No |
| Invoice | Rechnung | Use in titles and headings | No |
Share the glossary with every translator, agency and AI translation prompt, and update it when reviewers correct terms.

## Prompt pattern for AI translation
```
Translate the page below into [language] for readers in [country].
Use this glossary exactly: [terms].
Target keywords for this page: [local terms]; use them naturally in the title, H1 and first paragraph.
Address the reader [formally/informally].
Replace examples, currencies and units with local equivalents: [list].
Do not add facts that are not in the source. List any phrases you were unsure about at the end.
```
The uncertain-phrases list tells reviewers where to look first.

## Review roles
| Role | Checks |
|---|---|
| Native editor | Meaning, fluency, tone, terminology |
| Local SEO | Keywords, titles, metadata, internal links |
| Local business owner | Prices, payments, offers, legal accuracy |
| Qualified expert (regulated topics) | Claims, compliance, required disclosures |

## Measuring localisation quality
Compare each market's click-through rate, engagement and conversion rate with the home market for equivalent pages. Large gaps on reviewed pages point to localisation or offer problems rather than search visibility.

## Translation memory
Store approved translations so repeated sentences (navigation, product descriptions, legal text) are reused consistently and cheaply. Update memory whenever reviewers correct a translation, so mistakes are not repeated across thousands of pages.

Re-review machine-translated pages whenever their source changes.

Keep a changelog of reviewed pages per market.

## Edge cases and judgement calls
| Situation | What to do |
|---|---|
| Huge archive, small budget | Translate tier 1 and 2 only; leave the rest in the original language |
| Languages with formal and informal registers | Decide per brand and market; apply consistently |
| Right-to-left languages | Check layout, numerals and mixed-direction text |
| Product names that mean something unfortunate locally | Check with native speakers before launch |
| User-generated content | Translate on demand or keep original with clear labelling |

## Handoffs to related skills
- Local keywords: `multilingual-keyword-research`
- What to publish per market: `international-content-strategy`
- hreflang and structure: `hreflang-implementation`, `international-site-structure`
- Quality and trust: the Content SEO `eeat-content-quality` skill
- Reporting by market: `international-seo-reporting`

## Worked example
A SaaS company used AI translation to publish 1,800 pages in French, German and Spanish in a week. Six months later most pages were indexed but earned few clicks. Review found literal translations of English keywords, untranslated title tags, US examples and dollar prices. The new workflow tiered content: 60 key pages were transcreated with localised keywords and pricing, 300 guides were AI-translated with native editing, and the remaining low-value pages were removed. Clicks per market rose over the next two quarters, with conversion rates close to the English site for the reviewed pages.

## Output format
```
# Localisation plan: <site>, <languages>, <date>
## Content tiers and processes
## Keyword localisation approach
## Glossary and style rules
## Localisation checklist (beyond text)
## Review workflow and owners
## Quality checks and measurement
```

## Common mistakes
- Translating English keywords literally.
- Leaving titles, metas and alt text untranslated.
- Publishing AI translations at scale without review.
- Keeping US prices, examples and legal text.
- Linking localised pages back to English pages.

## Questions to ask before you localise
- Which pages matter most in each market?
- Who reviews translations, and are they native speakers?
- What must change beyond words: prices, payments, laws?

## Self-check before you answer
- Is content tiered with a process per tier?
- Are keywords localised before translation?
- Is everything on the page localised, not just body text?
- Is there native review for important pages?

## Official documentation
- Google: managing multi-regional and multilingual sites: https://developers.google.com/search/docs/specialty/international/managing-multi-regional-sites
- Google spam policies (scaled content abuse): https://developers.google.com/search/docs/essentials/spam-policies
- Google: guidance on using generative AI content: https://developers.google.com/search/docs/fundamentals/using-gen-ai-content

---
Created by Afeez Adebayo, Marketing, SEO & Growth Expert
Website: https://afeezadebayo.com
LinkedIn: https://www.linkedin.com/in/afeez-adebayo/
X: https://x.com/za_icon
Source: https://afeezadebayo.com/skills-md/marketing/international-seo/localisation-translation/

Licence: CC BY 4.0 (https://creativecommons.org/licenses/by/4.0/). You may copy, share and adapt this skill, including for commercial use, as long as you credit Afeez Adebayo and link to the source URL above. Keep this notice in any copy or adapted version.
