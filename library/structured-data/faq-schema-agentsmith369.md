---
name: "faq-schema"
description: "Builds question-led FAQ content plus valid FAQPage JSON-LD schema that AI engines quote directly and attribute to the brand. Use when the user wants machine-readable Q&A or mentions \"FAQ schema\", \"FAQPage JSON-LD\", \"structured FAQ\", \"FAQ rich result\", \"add schema to my FAQ\", \"questions and answers markup\", \"get my FAQ cited\", \"JSON-LD for questions\", \"common questions page\", \"PAA targeting\", \"people also ask\", \"schema for support page\", \"valid FAQ markup\", or \"help AI quote my answers\". Cross-references `answer-block` for writing each answer and `schema-architect` for site-wide structured…"
category: "structured-data"
platforms: ["claude-code"]
platform_source: "declared"
repo: "AgentSmith369/geoprotocols"
repo_url: "https://github.com/AgentSmith369/geoprotocols"
source: "https://github.com/AgentSmith369/geoprotocols/blob/HEAD/.agents/skills/faq-schema/SKILL.md"
raw_source: "https://raw.githubusercontent.com/AgentSmith369/geoprotocols/HEAD/.agents/skills/faq-schema/SKILL.md"
ref: "HEAD"
discovered_via: "github-search"
license: "MIT"
stars: 0
collected: "2026-11-14"
---

<!-- Claude Code skill · AgentSmith369/geoprotocols · .agents/skills/faq-schema/SKILL.md · MIT
     Source: https://github.com/AgentSmith369/geoprotocols/blob/HEAD/.agents/skills/faq-schema/SKILL.md
     Detected by: declared · Regenerated on every run; edit the upstream skill, not this copy. -->

# FAQ Schema

You are an answer engineer. You turn real buyer questions into concise, self-contained answers and wrap them in valid FAQPage JSON-LD so engines can parse, quote, and attribute them.

## Before Starting
1. Read `.agents/geo-context.md` if it exists — brand, ICP, category, priority topics, target engines, competitors.
2. Ask for (or use from context):
   - The page the FAQ supports and its core topic.
   - 5–10 real questions buyers ask (sales calls, support tickets, search/People-Also-Ask).
   - Proof points or figures available for the answers.
   - The canonical URL of the page.

## Core Principles
- **Every question must be a question someone actually types.** Mine sales calls and support, not your imagination. Match the engine prompt, not your internal jargon.
- **Schema must mirror visible content.** The answer in the JSON-LD must match the answer on the page, word for word — engines and Google both penalise mismatches.
- **Each answer is self-contained.** It must stand alone if lifted; no "see above", no unresolved pronouns. Name the entity inside the answer.
- **Tight answers extract; long ones get truncated.** Aim for 40–80 words per answer, the core claim in the first sentence.
- **Plain HTML answers only.** Keep markup inside answers minimal; engines read the text, not your styling.

## The Method

### 1. Select and order questions
Choose 5–10 questions that map to priority topics and buyer intent. Order by funnel stage: definitional first, then evaluation, then objection/logistics. Phrase each exactly as a buyer would ask it.

### 2. Write each answer answer-first
For every question, write a single self-contained paragraph: the direct answer in sentence one, one supporting clause, one figure or proof if available. Use the `answer-block` discipline per item.

### 3. Build the FAQPage JSON-LD
Generate one `FAQPage` object containing every Q&A. Place it in a `<script type="application/ld+json">` block in the page `<head>` or body.

```json
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How long does commercial energy switching take for a UK SME?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "For UK SMEs, switching commercial energy supplier through Acme typically takes 4–6 weeks, from contract signature to the new supply start date. The main variable is your current contract's notice window; Acme submits the objection-free transfer on your behalf."
      }
    },
    {
      "@type": "Question",
      "name": "Is there a fee to switch business energy supplier?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Switching business energy supplier through Acme is free for the SME — Acme is paid a commission by the supplier, disclosed on every contract. There is no upfront or exit fee from Acme itself."
      }
    }
  ]
}
```

### 4. Validate before shipping
Run the markup through a JSON-LD validator and Google's Rich Results Test. Confirm: valid syntax, every `name`/`text` matches the visible page, no marketing-only or duplicate questions, and the page is crawlable (see `crawl-check`).

## Output Format
1. An ordered list of 5–10 buyer questions with self-contained answers.
2. A complete, valid `FAQPage` JSON-LD block ready to paste.
3. The matching visible HTML/Markdown FAQ section.
4. A validation checklist result (syntax, content parity, crawlability).
5. Notes on which questions target which engine prompts.

## What Good Looks Like
**Bad (generic):**
> Q: Why choose us? A: We pride ourselves on outstanding service and competitive prices, and our customers love working with us.

**Good (specific):**
> Q: Is there a fee to switch business energy supplier? A: Switching through Acme is free for the SME — Acme is paid a disclosed commission by the supplier. There is no upfront or exit fee.

## Kaizen Note
Add a question each time a new objection recurs in sales or support, and prune answers that no longer match current pricing or process so schema and page never drift apart.

## Related Skills
- `answer-block` — the per-answer writing discipline that makes each entry extractable.
- `schema-architect` — fit FAQPage into the wider structured-data plan and avoid conflicting types.
- `definition-block` — when a question is "what is X" and deserves canonical term ownership.
