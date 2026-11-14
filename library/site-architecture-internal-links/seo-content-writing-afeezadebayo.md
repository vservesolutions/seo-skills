---
name: "seo-content-writing"
description: "Write and edit search-led pages that people want to read and search engines can understand: answer-first introductions, clear structure, plain language, first-hand evidence, sourced statistics, examples, internal links and natural keyword use, with no padding, no invented facts and no AI-sounding filler, checked against the brief before handover. Use whenever someone asks to write a blog post, article, guide, landing page copy or product description for SEO, to rewrite or improve a draft, to make AI-written content better, or to write content that ranks."
category: "site-architecture-internal-links"
platforms: ["claude-code"]
platform_source: "declared"
repo: "afeezadebayo/marketing-skills"
repo_url: "https://github.com/afeezadebayo/marketing-skills"
source: "https://github.com/afeezadebayo/marketing-skills/blob/HEAD/content-seo/seo-content-writing/SKILL.md"
raw_source: "https://raw.githubusercontent.com/afeezadebayo/marketing-skills/HEAD/content-seo/seo-content-writing/SKILL.md"
ref: "HEAD"
discovered_via: "github-search"
license: "CC-BY-4.0"
stars: 0
collected: "2026-11-14"
---

<!-- Claude Code skill · afeezadebayo/marketing-skills · content-seo/seo-content-writing/SKILL.md · CC-BY-4.0
     Source: https://github.com/afeezadebayo/marketing-skills/blob/HEAD/content-seo/seo-content-writing/SKILL.md
     Detected by: declared · Regenerated on every run; edit the upstream skill, not this copy. -->

# SEO Content Writing

SEO writing is ordinary good writing aimed at a specific search: it answers the question quickly, covers what the reader needs in a sensible order, proves its claims and points to the next useful step. Search engines reward pages that satisfy people; they are getting better at spotting pages written mainly to rank.

This skill writes or edits a page from a brief, keeps facts honest and removes the patterns that make content feel generated.

## Operating principles
1. **Answer first.** The opening paragraphs say what the reader will get or answer the question outright.
2. **Write for one reader.** Pick the person in the brief and write to them in plain words.
3. **Prove it.** Statistics name their source and date; claims rest on examples, data or expertise.
4. **Never invent.** No made-up numbers, quotes, studies, customers or product features. Mark anything you can't verify.
5. **Cut padding.** Every paragraph earns its place. Length follows the topic, not a target.

## When to use, and when not to
Use it to write from a brief, to rewrite weak pages, to edit AI or freelance drafts, and to tighten pages that ramble.

Don't use it without knowing the target intent (run `search-intent-serp-analysis` or get a `content-brief` first), or for metadata alone (`title-tags-meta-descriptions`).

## Inputs to ask for, in one message
1. The brief, or at least: query, reader, intent, outline and the action the reader should take.
2. Expert notes, data, screenshots and examples the page should include.
3. Brand voice, spelling (British or American English) and style rules.
4. Pages to link to and sources to cite.
5. The existing page, if this is a rewrite.

## Workflow

### Step 1. Check the brief
Confirm the reader, intent, outline and evidence. If evidence is missing, ask for it or mark placeholders clearly; don't fill gaps with invention.

### Step 2. Write the introduction
Two or three short paragraphs: the answer or the promise, why it matters, and what the page covers. No throat-clearing ("In today's world...").

### Step 3. Write the body section by section
- One idea per paragraph, three or four sentences at most.
- Lead each section with its point, then support it.
- Use lists for steps and parallel items, tables for comparisons, and prose for reasoning.
- Put examples next to the claim they support.
- Use the main query and close variants where they read naturally: in the H1, early in the text and in a few headings. Never repeat phrases for density.

### Step 4. Add evidence and links
Insert data with sources, screenshots with captions, quotes with names and roles. Add internal links with descriptive anchors where the reader would want them, and cite primary sources externally.

### Step 5. Close with the next step
End with a short summary or decision help and a relevant call to action. No generic "In conclusion".

### Step 6. Edit
Read it aloud or as the reader. Remove repetition, hedging, filler and vague claims. Check every fact and number against its source.

### Step 7. Check against the brief
Run the brief's acceptance checks and the self-check below before handover.

## Patterns to remove
| Pattern | Example | Fix |
|---|---|---|
| Throat-clearing openers | "In today's digital landscape..." | Start with the answer |
| Inflated vocabulary | delve, tapestry, unlock, seamless, elevate | Plain verbs |
| Empty contrasts | "It's not just X, it's Y" | State the point directly |
| Forced triads | "fast, simple and powerful" everywhere | Use the number of items you have |
| Unsourced statistics | "80% of users..." | Cite or remove |
| Dramatic one-line closers | "And that changes everything." | Cut or make specific |
| Padding sections | "What is X?" on an expert page | Remove unless readers need it |

## Formatting that helps readers and answer engines
- Descriptive headings that work as a table of contents.
- A direct, two to three sentence answer under question-style headings.
- Short definition lists and tables where people compare.
- Alt text and captions on images.
- Dates on time-sensitive information.

## Using AI to write
AI can draft quickly, but drafts tend to be generic and can contain invented facts. Use it with the full brief and the expert's material, instruct it not to invent, then edit hard: add first-hand detail, check every fact and rewrite in the brand voice. Google's guidance is that the method matters less than whether content is helpful and not made mainly to manipulate rankings.

## Worked example
An accounting firm's AI draft on "how to register for VAT" was 2,400 words with a generic history of VAT, two unsourced statistics and no screenshots. The edit cut it to 1,300 words, opened with the threshold and the three ways to register, added screenshots of each step from the official service with capture dates, replaced the statistics with the current threshold from HMRC's guidance, added a section on common mistakes from the firm's own client work, and linked to the firm's VAT registration service. Time on page and enquiries from the page both rose over the following two months.

## Output format
```
# <H1>
[Introduction: answer or promise, 2-3 short paragraphs]
## <H2 sections in brief order>
[Body with evidence, captions, internal links]
## <Closing section with next step>
---
Editor notes: facts to verify, placeholders, sources used, internal links added
```

## Writing by page type
| Page type | Opening | Body | Close |
|---|---|---|---|
| How-to | The outcome and time needed | Numbered steps with screenshots and the result of each step | Troubleshooting and the next step |
| Comparison | The short answer: which option for whom | Criteria, honest table, one section per option with evidence | Decision help by situation |
| Explainer | A plain definition in two sentences | Why it matters, how it works, examples | Related concepts and next reading |
| Product page | The problem solved and for whom | Features as outcomes, proof, objections, pricing facts | One clear call to action |
| Opinion or analysis | The claim | Evidence, counter-arguments, what it means | The takeaway in one sentence |

## Edge cases and judgement calls
| Situation | What to do |
|---|---|
| Missing evidence | Leave a clearly marked placeholder and tell the editor; never invent |
| Conflicting sources | Prefer primary sources, state the conflict, give dates |
| Regulated advice | Keep to general information, cite official guidance, add expert review |
| Brand voice clashes with clarity | Clarity wins; keep voice in word choice, not in vague sentences |
| Very short answer is enough | Write a short page; don't pad to match competitors |

## Editing checklist
- Read the first two paragraphs alone: do they answer or promise clearly?
- Read only the headings: do they tell the story?
- Search for numbers: does each have a source and date?
- Search for the banned patterns in the table above and remove them.
- Check every link goes where the anchor says.

## Handoffs to related skills
- Instructions and angle: `content-brief`
- Evidence and trust standards: `eeat-content-quality`
- Final page check: `on-page-seo`
- Images, alt text and captions: `image-seo`
- Refreshing older pages: `content-refresh`
- Citability in AI answers: the AEO & GEO `answer-ready-content` skill

## Common mistakes
- Writing to a word count.
- Keyword stuffing or awkward exact-match phrases.
- Burying the answer under background.
- Inventing examples or numbers to make a point.
- Publishing AI drafts without first-hand detail or fact checks.

## Questions to ask before you write
- Who is the reader, and what should they do next?
- What evidence can the business provide?
- Which spelling and voice rules apply?

## Self-check before you answer
- Do the first two paragraphs answer or promise clearly?
- Is every statistic sourced and every claim supported?
- Did I invent nothing and mark what I couldn't verify?
- Did I remove filler patterns and padding?

## Official documentation
- Creating helpful, reliable, people-first content: https://developers.google.com/search/docs/fundamentals/creating-helpful-content
- Google Search's guidance about AI-generated content: https://developers.google.com/search/blog/2023/02/google-search-and-ai-content
- Spam policies (scaled content abuse): https://developers.google.com/search/docs/essentials/spam-policies
- SEO Starter Guide: https://developers.google.com/search/docs/fundamentals/seo-starter-guide

---
Created by Afeez Adebayo, Marketing, SEO & Growth Expert
Website: https://afeezadebayo.com
LinkedIn: https://www.linkedin.com/in/afeez-adebayo/
X: https://x.com/za_icon
Source: https://afeezadebayo.com/skills-md/marketing/content-seo/seo-content-writing/

Licence: CC BY 4.0 (https://creativecommons.org/licenses/by/4.0/). You may copy, share and adapt this skill, including for commercial use, as long as you credit Afeez Adebayo and link to the source URL above. Keep this notice in any copy or adapted version.
