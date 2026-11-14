---
name: "query-fan-out-mapping"
description: "Research the long, conversational prompts buyers ask AI assistants, model the sub-queries AI search runs behind them (query fan-out, which Google documents for AI Overviews and AI Mode), check who ranks and gets cited for each, and map every sub-query to an existing page or section without creating a page per variation. Use whenever someone asks about query fan-out, prompt research, conversational keywords, what people ask ChatGPT about their category, building a prompt list, or why a page ranks but is never cited in AI answers."
category: "ai-search-geo"
platforms: ["unspecified"]
platform_source: "none"
repo: "afeezadebayo/aeo-geo-skills"
repo_url: "https://github.com/afeezadebayo/aeo-geo-skills"
source: "https://github.com/afeezadebayo/aeo-geo-skills/blob/HEAD/query-fan-out-mapping/SKILL.md"
raw_source: "https://raw.githubusercontent.com/afeezadebayo/aeo-geo-skills/HEAD/query-fan-out-mapping/SKILL.md"
ref: "HEAD"
discovered_via: "github-search"
license: "CC-BY-4.0"
stars: 0
collected: "2026-11-14"
---

<!-- Unspecified skill · afeezadebayo/aeo-geo-skills · query-fan-out-mapping/SKILL.md · CC-BY-4.0
     Source: https://github.com/afeezadebayo/aeo-geo-skills/blob/HEAD/query-fan-out-mapping/SKILL.md
     Detected by: none · Regenerated on every run; edit the upstream skill, not this copy. -->

# Query Fan-Out and Prompt Research

People don't type three-word keywords into AI assistants. They ask long, specific questions with context: "I run a 12-person agency in Leeds, we pay freelancers in three countries, what's the cheapest compliant way to do it?" Behind the scenes, AI search systems split a question like that into several related searches, retrieve results for each and combine them. Google calls this query fan-out and documents it for AI Overviews and AI Mode. [Confirmed, Google]

This skill reconstructs the questions your buyers ask, the sub-queries an engine is likely to run for each, and which of your pages should answer them, so content planning matches how AI answers are actually assembled.

## How fan-out works, in practice
| Stage | What happens | What it means for you |
|---|---|---|
| Prompt | User asks a long, contextual question | Map prompts, not just keywords |
| Fan-out | The system generates related sub-queries (for example cost, compliance, alternatives, reviews) | Each sub-query is a retrieval chance |
| Retrieval | Results are fetched for each sub-query from an index | You need pages that rank for the sub-queries |
| Synthesis | Passages are combined and some sources cited | Clear, self-contained passages are easier to use |

Google's example: "how to fix a lawn that's full of weeds" may fan out to "best herbicides for lawns", "remove weeds without chemicals" and "how to prevent weeds in lawn". [Confirmed, Google]

## Operating principles
1. **Start from real questions.** Sales calls, support tickets, community threads and search data, not invented prompts.
2. **Map, don't multiply.** Google warns that creating separate pages for every fan-out variation primarily to manipulate rankings violates its scaled content abuse policy. One strong page can answer many sub-queries. [Confirmed]
3. **Sub-queries are inferred.** No engine publishes its fan-out queries; treat your map as a model, labelled Speculation where unverified.
4. **Context changes answers.** The same question with "for a startup" or "in Nigeria" fans out differently.
5. **Check what gets cited.** Validate the map against which sources engines actually cite.

## When to use, and when not to
Use it when planning content for AI search, when classic keyword research misses the long conversational questions buyers ask, when building the prompt set for tracking, and when a page ranks but is never cited.

Don't use it to replace keyword research for classic search (use the Content SEO keyword research skill) or to justify publishing a page per variation.

## Inputs to ask for, in one message
1. Products, audiences and markets.
2. Raw customer language: call notes, tickets, chat logs, reviews, community posts.
3. Search Console queries, especially long queries of seven or more words.
4. Existing pages with their main topics.
5. Competitors that appear in AI answers.

## Workflow

### Step 1. Collect real prompts
Pull 50 to 200 questions. Keep the customer's wording and context (role, company size, location, constraints).

### Step 2. Group by job
Cluster prompts by the decision behind them: choose a tool, solve a problem, check a fact, compare options, verify trust.

### Step 3. Model the fan-out
For each prompt group, list the sub-queries an engine is likely to run. Useful lenses:
| Lens | Example sub-queries |
|---|---|
| Definition | what is X |
| Cost | X pricing, cheapest X |
| Comparison | X vs Y, alternatives to X |
| Suitability | best X for [segment] |
| Risk and trust | is X safe, X reviews, X regulated |
| How-to | how to set up X |
| Local or regulatory | X rules in [country] |

### Step 4. Check the sub-queries in search
Search the likely sub-queries and note who ranks. Use "People also ask", related searches and AI Mode follow-up suggestions as clues.

### Step 5. Observe citations
Run the original prompts in two or three engines and record cited sources. Match citations to sub-queries where you can.

### Step 6. Map to pages
For each sub-query, assign the page that should answer it: existing, needs a section, or a new page with its own intent. Most gaps should become sections on existing pages.

### Step 7. Feed the prompt set and briefs
Add the prompt groups to `ai-visibility-tracking` and send page gaps to `answer-ready-content`.

## Fan-out map template
```
# Fan-out map: <topic>, <market>, <date>
## Prompt group: <job>
Example prompts (customer wording):
- ...
Likely sub-queries (label: inferred):
| Sub-query | Lens | Who ranks now | Cited in AI answers? | Our page | Gap |
## Page actions
| Page | Add or improve | Sub-queries covered | Priority |
```

## Worked example
An accounting software company mapped 140 customer questions into 9 jobs. For "switching from spreadsheets to accounting software", the modelled fan-out included cost, migration steps, data import, accountant access and tax compliance. Its existing comparison page covered cost only; migration answers were cited from a competitor's help centre. Instead of five new pages, the team added migration, import and accountant-access sections with screenshots to two existing pages and published one new migration guide. Within two months the brand was cited for migration prompts in Perplexity and Copilot, and the new sections drew AI Overview impressions in Search Console.

## Prompt research sources ranked by value
| Source | Value | Why |
|---|---|---|
| Recorded sales calls | Highest | Real buying questions with context and objections |
| Support tickets and chat logs | High | Exact wording and pain points |
| Long Search Console queries | High | Real demand already reaching you |
| Community threads | Medium to high | Unfiltered questions and comparisons |
| AI Mode follow-up suggestions and People also ask | Medium | Clues to related questions |
| Invented prompts | Low | Biased towards how the business talks |

## Validating modelled sub-queries
1. Search each modelled sub-query in Google and note who ranks.
2. Run the parent prompt in AI Mode, Perplexity and Copilot and record cited URLs.
3. Mark sub-queries where cited sources overlap with top-ranking pages: strong evidence the sub-query matters.
4. Mark sub-queries with no overlap as lower confidence.
5. Prioritise gaps where you already rank on page one for related queries; small additions there are often cited fastest.

## Edge cases and judgement calls
| Situation | What to do |
|---|---|
| B2B with long buying cycles | Map prompts for each stage: problem, options, vendors, approval |
| Highly regulated topics | Expect engines to favour official sources; aim to be the clearest commercial source |
| Local businesses | Add location and "near me" context to prompts |
| Very new category with no searches | Use community and sales questions; model fan-out from adjacent categories |
| Engines cite sources that don't rank in Google | Check Bing and the engine's own index; your page may need Bing visibility |

## Handoffs to related skills
- Writing the sections: `answer-ready-content`
- Tracking the prompts: `ai-visibility-tracking`
- Google citation checks: `ai-overviews-ai-mode`
- Engine-specific checks: `chatgpt-search-visibility`, `answer-engine-platforms`
- Structuring a whole topic: the Content SEO `topical-map` skill

## Quality bar: what an excellent map includes
- Prompts in customer language, grouped by job.
- Sub-queries labelled as inferred, with evidence where checked.
- Gaps mapped mostly to sections on strong pages.
- Validation against what engines actually cite.

## Common mistakes
- Creating a page per fan-out query.
- Inventing prompts instead of using customer language.
- Treating modelled sub-queries as known facts.
- Ignoring context that changes the answer (segment, country, budget).
- Mapping without checking what engines actually cite.

## Questions to ask before you map
- Where can we get real customer questions?
- Which jobs lead to revenue?
- Which existing pages are strong enough to absorb new sections?

## Self-check before you answer
- Are prompts based on real customer language?
- Are sub-queries labelled as inferred unless verified?
- Do gaps mostly become sections, not new pages?
- Did I validate the map against actual citations?

## Official documentation and research
- Google: generative AI features in Search, site owner guide (query fan-out): https://developers.google.com/search/docs/fundamentals/ai-optimization-guide
- Google spam policies, scaled content abuse: https://developers.google.com/search/docs/essentials/spam-policies
- Google: AI features and your website: https://developers.google.com/search/docs/appearance/ai-features

---
Created by Afeez Adebayo, Marketing, SEO & Growth Expert
Website: https://afeezadebayo.com
LinkedIn: https://www.linkedin.com/in/afeez-adebayo/
X: https://x.com/za_icon
Source: https://afeezadebayo.com/skills-md/marketing/aeo-geo/query-fan-out-mapping/

Licence: CC BY 4.0 (https://creativecommons.org/licenses/by/4.0/). You may copy, share and adapt this skill, including for commercial use, as long as you credit Afeez Adebayo and link to the source URL above. Keep this notice in any copy or adapted version.
