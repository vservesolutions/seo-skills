---
name: "international-market-selection"
description: "Choose and prioritise countries and languages for organic growth: existing demand from Search Console, analytics and sales, local-language search demand, competition, business readiness (payments, delivery, support, legal), localisation cost and search engine landscape, language versus country decisions and a phased roadmap with success metrics and exit criteria. Use whenever someone asks which country or language to expand into, international expansion priorities, whether to launch a new language, how many markets to target or which market comes next for SEO."
category: "analytics-measurement"
platforms: ["claude-code"]
platform_source: "declared"
repo: "afeezadebayo/marketing-skills"
repo_url: "https://github.com/afeezadebayo/marketing-skills"
source: "https://github.com/afeezadebayo/marketing-skills/blob/HEAD/international-seo/international-market-selection/SKILL.md"
raw_source: "https://raw.githubusercontent.com/afeezadebayo/marketing-skills/HEAD/international-seo/international-market-selection/SKILL.md"
ref: "HEAD"
discovered_via: "github-search"
license: "CC-BY-4.0"
stars: 0
collected: "2026-11-14"
---

<!-- Claude Code skill · afeezadebayo/marketing-skills · international-seo/international-market-selection/SKILL.md · CC-BY-4.0
     Source: https://github.com/afeezadebayo/marketing-skills/blob/HEAD/international-seo/international-market-selection/SKILL.md
     Detected by: declared · Regenerated on every run; edit the upstream skill, not this copy. -->

# International Market Selection and Prioritisation

Going international is expensive. Each market needs localised content, technical setup, link building, support, payments and legal work, and organic results take months to build. Many companies launch ten languages at once because translation tools make it cheap, then find most markets bring little traffic and none of the revenue. Choosing markets with evidence, and launching them in a deliberate order, saves years of wasted effort.

This skill scores and prioritises countries and languages for organic growth using existing demand signals, search demand, competition, business readiness and cost, and produces a phased market roadmap.

## Operating principles
1. **Follow existing demand first.** Countries already sending traffic, sign-ups or sales without effort are the cheapest wins.
2. **Language and country are different decisions.** One Spanish version may serve several countries, or each may need its own.
3. **Business readiness matters as much as search demand.** Without local payments, delivery, support or legal compliance, rankings won't convert.
4. **Go deep before wide.** One market done well beats five done badly.
5. **Set exit criteria.** Decide in advance what results would justify scaling or stopping.

## Scoring criteria
| Criterion | Evidence | Weight (example) |
|---|---|---|
| Existing organic demand | Search Console impressions and clicks by country; analytics sessions; organic sign-ups | High |
| Commercial signals | Sales, leads, enquiries from the country today | High |
| Search demand | Keyword volumes in the local language (labelled estimates) | High |
| Competition | Strength of local competitors in search | Medium |
| Business readiness | Pricing, currency, payments, delivery, support, legal | High |
| Localisation cost | Languages needed, content volume, review capacity | Medium |
| Search engine landscape | Google share versus local engines | Medium |
| Strategic fit | Company goals, partnerships, funding priorities | Medium |

## When to use, and when not to
Use it before launching new languages or countries, when existing international versions underperform, during annual planning and when leadership asks which market comes next.

Don't use it to set up a market technically (`international-site-structure`, `hreflang-implementation`) or to research keywords in depth (`multilingual-keyword-research`).

## Inputs to ask for, in one message
1. Search Console performance by country for 16 months.
2. Analytics and revenue by country.
3. Business constraints: payments, shipping, legal, support languages.
4. Candidate markets and why they are being considered.
5. Budget and team capacity for localisation and SEO per market.
6. Competitor presence in candidate markets.

## Workflow

### Step 1. Mine existing signals
Rank countries by impressions, clicks, conversions and revenue arriving today without localisation.

### Step 2. Shortlist candidates
Combine existing signals with strategic candidates; keep to five to eight for scoring.

### Step 3. Size search demand
Research core keywords in each local language with native input; label volumes as estimates by tool and country.

### Step 4. Assess competition
Check who ranks for core terms in each market: global brands, local specialists, marketplaces.

### Step 5. Check readiness
Payments, currency, delivery, returns, support hours and language, legal requirements (data protection, consumer law, product rules).

### Step 6. Estimate costs
Translation and localisation volume, review, technical setup, local links and ongoing maintenance.

### Step 7. Score and phase
Score each market, pick one or two for phase one, define success metrics and review dates, and queue the rest.

## Market roadmap template
```
| Phase | Market (country-language) | Score | Rationale | Readiness gaps | Success metric | Review date |
| 1 | Germany (de-DE) | 82 | Existing demand, payments ready | Support in German | 2,000 organic sessions/month in 6 months | Q2 |
| 2 | Spain + Mexico (es) | 71 | Demand, shared language | Local pricing for MX | ... | Q4 |
```

## Language versus country strategy
| Situation | Approach |
|---|---|
| Same language, same offer across countries | One language version (for example es) with x-default or language-level targeting |
| Same language, different prices, products or laws | Country versions (es-ES, es-MX) with hreflang |
| Multilingual country (Switzerland, Belgium, Canada) | Language versions within the country (de-CH, fr-CH) |
| Global English audience | One English version, or en-GB and en-US where spelling, prices and products differ |

## Exit and scale criteria
Write these before launch, for each market:
- **Scale** when organic sessions, sign-ups or revenue reach the six-month target and conversion is close to the home market.
- **Adjust** when traffic arrives but conversion lags; check localisation, pricing and payments.
- **Pause** when neither traffic nor conversion moves after the agreed period despite correct setup; keep the pages live and maintained, or consolidate them.
Review at three, six and twelve months, using market-level reports rather than global totals.

## Worked scoring example
| Market | Existing demand (25) | Search demand (20) | Competition (10) | Readiness (25) | Cost (10) | Strategic fit (10) | Total |
|---|---|---|---|---|---|---|---|
| Germany (de) | 22 | 17 | 7 | 20 | 7 | 9 | 82 |
| France (fr) | 14 | 16 | 5 | 18 | 6 | 7 | 66 |
| Spain + Mexico (es) | 12 | 18 | 6 | 15 | 6 | 7 | 64 |
| Japan (ja) | 6 | 15 | 6 | 8 | 3 | 8 | 46 |
Illustrative weights; agree your own with leadership before scoring so the result isn't argued backwards.

## Data sources checklist
- Search Console performance filtered by country (impressions, clicks, queries).
- Analytics: sessions, sign-ups and revenue by country, organic and total.
- Sales and support logs: enquiries and tickets by country and language.
- Keyword tools with local settings, plus Google Trends by country.
- StatCounter or similar for search engine share by country.
- Competitor visibility in local results.

## Presenting the roadmap
Show leadership the scoring table, the readiness gaps for each phase-one market with owners and costs, the success and exit criteria, and what will not be done this year and why. Saying no to markets clearly is as valuable as choosing them.

## Phase planning tips
- Launch phase-one markets with priority pages first (home, product, pricing, top guides), then expand.
- Budget local link building and PR from launch; translated pages rarely rank on authority alone.
- Keep a waiting list of markets with the evidence that would move each one up.

- Revisit scores every year; markets move as products, competitors and search engines change.

## Edge cases and judgement calls
| Situation | What to do |
|---|---|
| Large existing traffic from a country you can't serve | Decide whether to serve it or redirect expectations clearly |
| China | Separate assessment for Baidu, hosting, licensing and content rules |
| High demand, strong local competitors | Consider partnerships or a niche entry point |
| Product not legal or not deliverable | Exclude, however attractive the demand |
| AI translation makes launching cheap | Cheap launches still need review, links and maintenance; score full cost |

## Handoffs to related skills
- Current international state: `international-seo-audit`
- Keyword demand: `multilingual-keyword-research`
- Structure for chosen markets: `international-site-structure`
- Local engines: `local-search-engines`
- Launch plan: `international-expansion-migration`
- Reporting by market: `international-seo-reporting`

## Worked example
A UK project management SaaS planned to launch eight languages at once with AI translation. Search Console showed Germany, the Netherlands and the Nordics already sending meaningful impressions in English, and German-speaking countries produced the most organic trials. Keyword research in German showed strong demand with fewer strong local competitors than in French. Payments and invoicing already supported euros, but support was English-only. The roadmap launched German first (Germany, Austria, Switzerland sharing one de version) with a German-speaking support contractor, kept English for the Nordics and the Netherlands for now, and queued French and Spanish for a later phase with success criteria tied to German results.

## Output format
```
# International market plan: <company>, <date>
## Existing demand by country
## Candidate scoring table
## Readiness and cost assessment
## Phased roadmap with success metrics and review dates
## Language versus country decisions
```

## Common mistakes
- Launching many languages at once.
- Choosing markets by population or gut feel.
- Translating without checking local search demand.
- Ignoring payments, delivery, support and legal readiness.
- No exit criteria for underperforming markets.

## Questions to ask before you choose
- Which countries already find you without effort?
- Can you sell, deliver and support customers there?
- How much localisation and review capacity do you have?

## Self-check before you answer
- Did I start from existing demand signals?
- Are search volumes labelled as estimates?
- Is readiness checked alongside demand?
- Does each phase have success metrics and review dates?

## Official documentation and data
- Google: managing multi-regional and multilingual sites: https://developers.google.com/search/docs/specialty/international/managing-multi-regional-sites
- StatCounter search engine market share by country: https://gs.statcounter.com/search-engine-market-share
- Google Trends: https://trends.google.com/

---
Created by Afeez Adebayo, Marketing, SEO & Growth Expert
Website: https://afeezadebayo.com
LinkedIn: https://www.linkedin.com/in/afeez-adebayo/
X: https://x.com/za_icon
Source: https://afeezadebayo.com/skills-md/marketing/international-seo/international-market-selection/

Licence: CC BY 4.0 (https://creativecommons.org/licenses/by/4.0/). You may copy, share and adapt this skill, including for commercial use, as long as you credit Afeez Adebayo and link to the source URL above. Keep this notice in any copy or adapted version.
