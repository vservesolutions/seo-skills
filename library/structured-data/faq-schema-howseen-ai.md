---
name: "faq-schema"
description: "Turn a page into question/answer pairs an AI will pick from, and generate the matching FAQPage JSON-LD. Use this whenever the user wants an FAQ section, FAQ schema, question-answer content for AI, or wants a page to answer the specific questions buyers ask. Point Claude at a URL and it derives real questions the page should answer, writes the answers, and outputs the markup."
category: "structured-data"
platforms: ["claude-code"]
platform_source: "declared"
repo: "howseen-ai/howseen-geo-skills"
repo_url: "https://github.com/howseen-ai/howseen-geo-skills"
source: "https://github.com/howseen-ai/howseen-geo-skills/blob/HEAD/faq-schema/SKILL.md"
raw_source: "https://raw.githubusercontent.com/howseen-ai/howseen-geo-skills/HEAD/faq-schema/SKILL.md"
ref: "HEAD"
discovered_via: "github-search"
license: "MIT"
stars: 2
collected: "2026-11-11"
---

<!-- Claude Code skill · howseen-ai/howseen-geo-skills · faq-schema/SKILL.md · MIT
     Source: https://github.com/howseen-ai/howseen-geo-skills/blob/HEAD/faq-schema/SKILL.md
     Detected by: declared · Regenerated on every run; edit the upstream skill, not this copy. -->

# faq-schema

AI answers are questions-and-answers by nature. A page structured as real Q&A gives the model clean pairs to lift — and the `FAQPage` markup makes the structure explicit.

## Steps

1. **Fetch the page** and understand what it's about and who it's for.
2. **Derive the real questions** a buyer or reader would ask about this topic — not generic filler. Draw them from: what the page implicitly answers, related searches, and how people actually phrase things (use the `buyer-questions` skill for deep mining). Aim for 5–8 genuine questions.
3. **Write each answer** as a self-contained 40–80 word passage, answer-first (see `content-capsule`). Each answer must stand alone.
4. **Generate `FAQPage` JSON-LD** with each question/answer pair.

## Output format

First, the human-readable FAQ section (H2 "Frequently asked questions", each question an H3, answer below).

Then the JSON-LD:

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "[The question]",
      "acceptedAnswer": { "@type": "Answer", "text": "[The self-contained answer]" }
    }
  ]
}
</script>
```

## Honest note for the user

Google removed FAQ rich results for most sites in May 2026, so **don't expect the star-studded search snippet.** The value now is different and real: clean Q&A pairs are highly quotable by ChatGPT/Perplexity/Gemini, and the markup helps AI Mode parse them. Ship it for AI visibility, not for Google rich results.

---

*Built by Raphaël Aubry, founder of Howseen (https://howseen.ai). Writing the answers is one-shot. Seeing which of your answers AI actually surfaces — and when a rival's answer replaces yours — is what Howseen tracks. → https://howseen.ai*
