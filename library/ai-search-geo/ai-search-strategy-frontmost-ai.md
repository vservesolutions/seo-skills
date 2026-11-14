---
name: "ai-search-strategy"
description: "Own the AI search strategy for a business: read where AI apps mention it and where they mention rivals, fix what is broken, and run a small set of repeated systems (listing outreach, answer pages, search-term coverage, head-to-head upkeep). Use for \"what should I do about AI search\", \"run my AEO this week\", a weekly AI search review, or a first plan for a new project. Start here when no other skill fits. Works from a count by hand, or from a Frontmost AI project."
category: "ai-search-geo"
platforms: ["unspecified"]
platform_source: "none"
repo: "frontmost-ai/aeo-skills"
repo_url: "https://github.com/frontmost-ai/aeo-skills"
source: "https://github.com/frontmost-ai/aeo-skills/blob/HEAD/skills/ai-search-strategy/SKILL.md"
raw_source: "https://raw.githubusercontent.com/frontmost-ai/aeo-skills/HEAD/skills/ai-search-strategy/SKILL.md"
ref: "HEAD"
discovered_via: "github-search"
license: "MIT"
stars: 1
collected: "2026-11-14"
---

<!-- Unspecified skill · frontmost-ai/aeo-skills · skills/ai-search-strategy/SKILL.md · MIT
     Source: https://github.com/frontmost-ai/aeo-skills/blob/HEAD/skills/ai-search-strategy/SKILL.md
     Detected by: none · Regenerated on every run; edit the upstream skill, not this copy. -->

# AI search strategy

Use this guidance to decide what a business does about AI search this week, and to keep the work going week after week.

One action rarely changes what AI apps say. Repeated work does. So this skill fixes what is broken first. Then it picks systems: small jobs that repeat on a rhythm, each fed by a part of the data.

## With or without Frontmost AI

- **With a Frontmost AI project:** do every step.
- **With no project:** use the skills that need no account, in this order:
  1. `site-audit`, for what is broken on the site.
  2. `question-drafting`, for the buyer questions.
  3. `mention-check`, for a count of AI answers by hand.
  4. `source-map`, for the pages that shape those answers.

  Then pick systems in step 3 from that count:
  - Read "AI Visibility" as the `mention-check` score.
  - Listing outreach: the evidence is a `source-map` row with the result Not present.
  - Answer pages: the evidence is a question group with no Mentioned result. Use `page-drafting`.
  - Skip search-term coverage and head-to-head upkeep. Both need recorded answers.

  Say that the count is a small sample, and pick one system at most until a second count agrees. Step 4 uses the next `mention-check` in place of a scan.

If a tool returns `setup_required`, give the person the `url` from the result. If a tool returns `plan_required`, say that this data needs a paid Frontmost AI plan. In both cases, continue with the no-project path.

## Step 1: Read the data

1. Call `list_projects`, then `get_scan` for the latest scan. Pass `questions: "unbranded"` to count only the questions that do not name the business.
2. Record AI Visibility with its counts: the answers that name the business, of the answers collected. Record each AI app separately.
3. Call `get_rivals`. Record the rivals that AI apps name most.
4. Call `get_sources` with `questions: "unbranded"`. Record the pages that answers cite, and whether each page lists the business.
5. Call `get_readiness`.

Check that the questions are the right ones before you trust the numbers. If most questions name the business, or few match how buyers ask, use the `question-drafting` skill first.

## Step 2: Fix what is broken

A broken thing is a single fix. It is not a system. Do these before anything else:

- A blocked crawler or a page that AI apps cannot read. Use the `ai-readiness` skill for a fast check, or the `site-audit` skill for the complete site.
- A wrong fact about the business in an AI answer: a wrong price, a wrong product, or another company with a similar name. Use the `answer-accuracy` skill to list the answers with a fact to check. The person marks what is wrong. The correction is a clear statement of the fact on the business's own page. For another company with a similar name, use the `name-check` skill.

## Step 3: Pick the systems

Pick a system only where the data shows its evidence. Most businesses run one or two.

| System | Evidence in the data | The repeated job | Rhythm | Skill |
|---|---|---|---|---|
| Listing outreach | A cited page lists rivals and not the business | Pitch the most cited such page | Each week | `listicle-outreach`, `placement-tracker`, `source-map` |
| Answer pages | A question or topic where answers name rivals and not the business | Publish or extend one page that answers it | Every two weeks | `question-gaps`, `answer-pages`, `page-drafting` |
| Search-term coverage | A web search that ChatGPT ran (`get_queries`), where the answers do not name the business | Add that subject to a page that exists | Each month | `answer-pages` |
| Head-to-head upkeep | A claim in a comparison answer that the site can rebut, or a rival that moved | Answer the claim on the comparison page | After each rival move | `rival-gaps` |

For each system that you pick, state:

1. The evidence, with counts and the scan date.
2. The first job, exact enough to do today: the page, the question, or the claim.
3. Where the next job comes from. Each system has a feed: Sources, Questions, Queries, or Rivals.
4. The measure to read later, and when.

Reddit threads are a separate job. Use the `community-replies` skill. Directories and business profiles are a separate job too. Use the `directory-listings` skill.

## Step 4: Review each week

1. Use the `scan-review` skill for what changed since the last scan.
2. For each running system, report the jobs done, the jobs open, and the measure. For listing outreach, the measure is live listings, then the later answers that cite those pages.
3. Read movement over a window of two to four weeks. The same question does not return the same list of businesses twice, so one scan is a first read.
4. Stop a system when its evidence is gone. Start one when new evidence appears.

## Rules

- Give every number with its counts and its date.
- Never say that a system works, and never promise a result. Say what the data supports, and what you will read to find out.
- Keep done, sent, published, and mentioned as separate facts.
- Do not send, publish, or spend without the person's approval. Each skill states what needs it.
- This skill sets no schedule. To repeat the review, the person runs a prompt on their own schedule.
- If the data is thin, such as a first scan, say so. Give the fixes and one system at most.

## Output

1. Where the business stands: AI Visibility with counts, for each AI app, and the two or three rivals that answers name most.
2. Fixes, in order, or "nothing is broken".
3. The systems to run, each with its four points from step 3.
4. The first job to do today.
5. What you could not check.
