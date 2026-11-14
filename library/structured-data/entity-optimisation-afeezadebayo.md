---
name: "entity-optimisation"
description: "Make a brand, product or person unambiguous to search engines and language models: a signed-off fact sheet and canonical descriptor, an entity home page, connected Organization and Person markup with stable @id and sameAs, consistent official profiles, disambiguation for shared names, Wikidata and Wikipedia rules, knowledge panel verification and independent confirmation. Use whenever someone mentions entity SEO, knowledge panels, knowledge graph, sameAs, brand confusion, AI describing them wrongly or not knowing who they are, personal branding for AI search, Wikidata or Wikipedia."
category: "structured-data"
platforms: ["unspecified"]
platform_source: "none"
repo: "afeezadebayo/aeo-geo-skills"
repo_url: "https://github.com/afeezadebayo/aeo-geo-skills"
source: "https://github.com/afeezadebayo/aeo-geo-skills/blob/HEAD/entity-optimisation/SKILL.md"
raw_source: "https://raw.githubusercontent.com/afeezadebayo/aeo-geo-skills/HEAD/entity-optimisation/SKILL.md"
ref: "HEAD"
discovered_via: "github-search"
license: "CC-BY-4.0"
stars: 0
collected: "2026-11-14"
---

<!-- Unspecified skill · afeezadebayo/aeo-geo-skills · entity-optimisation/SKILL.md · CC-BY-4.0
     Source: https://github.com/afeezadebayo/aeo-geo-skills/blob/HEAD/entity-optimisation/SKILL.md
     Detected by: none · Regenerated on every run; edit the upstream skill, not this copy. -->

# Entity Optimisation for AI Search

Search engines and language models think in entities: a specific company, person, product or place, with attributes and relationships. When the web describes your brand consistently, engines can answer "what is X?", "who founded X?" and "is X good for Y?" with confidence. When descriptions conflict, or the brand shares a name with something better known, answers hedge, mix you up with others or leave you out.

This skill makes an entity unambiguous: one clear home, consistent facts everywhere, structured data that connects the pieces and independent sources that confirm them.

## Operating principles
1. **One entity home.** A single page (usually About, or the homepage for a company) states who the entity is, with every key fact and links to official profiles.
2. **One canonical description.** Write a one-sentence descriptor and use it, word for word or close to it, across profiles, bios and directories.
3. **Facts must match everywhere.** Names, founding date, headquarters, leaders, products, prices: contradictions cause wrong answers.
4. **Independent confirmation beats self-description.** Engines trust what multiple independent sources agree on. [Consensus]
5. **No shortcuts.** Self-created Wikipedia articles without independent sources get deleted and look manipulative.

## The entity stack
| Layer | What to do | Why |
|---|---|---|
| Entity home | About page with name, descriptor, founding, people, locations, products, contact and `sameAs` links | Gives engines one authoritative reference |
| Structured data | `Organization` or `Person` with stable `@id`, `sameAs`, `logo`, `founder`, `foundingDate`, `knowsAbout`; connected to `WebSite` and articles | Helps Google and others connect profiles [Confirmed that Google uses Organization markup for its knowledge features; AI use is Consensus] |
| Official profiles | LinkedIn, Crunchbase, GitHub, app stores, review platforms, Google Business Profile, Bing Places | Common sources for model knowledge and retrieval [Consensus] |
| Knowledge bases | Wikidata, and Wikipedia only where notability is met | Widely used in knowledge graphs [Consensus] |
| Independent coverage | Media, analyst reports, podcasts, conference pages, comparisons | Confirms facts and associations |
| Topic association | Third-party pages that name the brand with its topics in the same context | Teaches "[brand] is known for [topic]" |

## When to use, and when not to
Use it for new brands, rebrands, founders building personal authority, brands confused with others of the same name, wrong facts in AI answers, and missing knowledge panels.

Don't use it for page-level content work (`answer-ready-content`) or earning coverage at scale (`ai-citation-earning`), though both reinforce entity signals.

## Inputs to ask for, in one message
1. Official name, legal name, descriptor, founding date, founders and leaders, headquarters, products and markets.
2. URLs of every official profile and directory listing.
3. Current structured data on the homepage and About page.
4. Search results for the brand name: knowledge panel, People also ask, confusions.
5. AI answers to "What is [brand]?" and "Who founded [brand]?" across engines.

## Workflow

### Step 1. Write the fact sheet
One document with every canonical fact and the descriptor. Get sign-off; it becomes the source of truth.

### Step 2. Audit consistency
Check every profile, directory, press bio and partner page against the fact sheet. Log each mismatch with the URL and the fix.

### Step 3. Build the entity home
Update the About page with the facts, the people behind the brand (with their own profiles), history, proof (awards, clients, coverage) and `sameAs` links.

### Step 4. Connect the markup
One `Organization` (or `Person`) node with a stable `@id` (for example `https://example.com/#organization`), referenced by `WebSite`, `WebPage`, articles (as publisher) and people (as `worksFor`). Include every official profile in `sameAs`.

### Step 5. Fix the profiles
Update mismatched profiles, starting with the most visible: LinkedIn, Google Business Profile, Crunchbase, review sites and app stores.

### Step 6. Disambiguate
If the name is shared, add distinguishing context everywhere: category, location, founding year ("[Brand], the London payroll software company founded in 2019").

### Step 7. Earn confirmation
Plan independent mentions that state the key facts and topic associations: interviews, guest articles with accurate bios, conference speaker pages, data cited by media.

### Step 8. Check results
Re-run entity prompts in each engine and check the knowledge panel. Model knowledge changes slowly; retrieval-based answers change faster.

## Knowledge panels
You can't request a Google knowledge panel. It appears when Google is confident about an entity. Once it appears, the entity can be verified and suggest edits. [Confirmed]

## Wikidata and Wikipedia
Wikidata items need references to reliable sources. Wikipedia requires significant independent coverage; conflicts of interest must be declared. Creating articles without notability is a common, visible failure. Recommend waiting until several independent articles exist.

## Worked example
A founder-led consultancy was described by ChatGPT as "a design agency" and by Perplexity with the wrong founder, because an old Crunchbase profile and a former partner's site used outdated details, and the About page didn't name the founder. The fix: a fact sheet and descriptor, a rebuilt About page with the founder's bio and `sameAs` links, `Organization` and `Person` markup connected by `@id`, corrected Crunchbase and LinkedIn pages, and two podcast appearances with accurate bios. Within three months, retrieval-based answers described the firm correctly; the knowledge panel followed later.

## Output format
```
# Entity review: <entity>, <date>
## Fact sheet and canonical descriptor
## Consistency audit
| Source | Field | Current value | Correct value | Fix | Owner |
## Entity home changes and JSON-LD (ready to paste)
## Disambiguation plan
## Confirmation plan (independent mentions)
## Entity prompt results, before and after
```

## Descriptor formula
`[Name] is a [category] for [audience] that [main outcome], founded in [year] in [place].`

Example: "Acme Payroll is a payroll platform for UK startups that runs compliant payroll in minutes, founded in 2019 in London." Keep it under about 30 words and use the same core wording everywhere.

## Profile consistency audit
| Profile | Name | Descriptor | Founded | HQ | Leaders | Status |
|---|---|---|---|---|---|---|
List every official profile (LinkedIn, Crunchbase, Wikidata where eligible, app stores, review sites, directories) and mark mismatches with the fact sheet. Fix the most visible profiles first, because engines cite them most often.

## Edge cases and judgement calls
| Situation | What to do |
|---|---|
| Personal brand and company share a name | Separate entity homes and markup for the person and the company, linked to each other |
| Rebrand | Keep the old name on the About page ("formerly X"), update every profile and redirect old domains |
| Several products with their own brands | One Organization node with products linked; separate pages for each product |
| Founder left the company | Update leadership everywhere; don't delete history, describe it accurately |
| No knowledge panel after months | Keep building independent coverage; panels can't be forced |

## Handoffs to related skills
- Markup details: the Technical SEO `structured-data` skill
- Wrong facts in answers: `brand-accuracy-ai-answers`
- Independent confirmation: `ai-citation-earning`
- Model knowledge in ChatGPT: `chatgpt-search-visibility`
- Measuring entity accuracy: `ai-visibility-tracking`

## Quality bar: what an excellent review includes
- A signed-off fact sheet and descriptor.
- A consistency audit across every profile with fixes and owners.
- Connected markup with stable identifiers and complete sameAs links.
- A plan for independent confirmation.

## Common mistakes
- A different description on every profile.
- `sameAs` pointing at unofficial or dead profiles.
- Separate, unconnected Organization blocks from plugins.
- Creating Wikipedia pages without independent sources.
- Expecting model knowledge to update within weeks.

## Questions to ask before you recommend changes
- What is the one sentence the business wants every engine to repeat?
- Which profiles does the business control, and which need requests?
- Is the name shared with another, better-known entity?

## Self-check before you answer
- Is there one signed-off fact sheet?
- Did I audit every profile against it?
- Is the markup connected with stable `@id` values and complete `sameAs`?
- Did I avoid recommending manipulative knowledge base edits?

## Official documentation
- Organization structured data: https://developers.google.com/search/docs/appearance/structured-data/organization
- Profile page structured data: https://developers.google.com/search/docs/appearance/structured-data/profile-page
- Get verified on Google (knowledge panels): https://support.google.com/knowledgepanel/answer/7534902
- Wikidata: https://www.wikidata.org/wiki/Wikidata:Introduction
- Wikipedia notability guideline: https://en.wikipedia.org/wiki/Wikipedia:Notability

---
Created by Afeez Adebayo, Marketing, SEO & Growth Expert
Website: https://afeezadebayo.com
LinkedIn: https://www.linkedin.com/in/afeez-adebayo/
X: https://x.com/za_icon
Source: https://afeezadebayo.com/skills-md/marketing/aeo-geo/entity-optimisation/

Licence: CC BY 4.0 (https://creativecommons.org/licenses/by/4.0/). You may copy, share and adapt this skill, including for commercial use, as long as you credit Afeez Adebayo and link to the source URL above. Keep this notice in any copy or adapted version.
