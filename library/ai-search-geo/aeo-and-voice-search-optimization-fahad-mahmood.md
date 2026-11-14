---
name: "aeo-and-voice-search-optimization"
description: "Optimizes content for Answer Engines (Google AI Overviews, Perplexity, ChatGPT Search, Siri, Google Assistant) using direct-answer syntax, question-and-answer schemas, concise definitions, and featured snippet formatting."
category: "ai-search-geo"
platforms: ["unspecified"]
platform_source: "none"
repo: "Fahad-Mahmood/agentic-seo-skills"
repo_url: "https://github.com/Fahad-Mahmood/agentic-seo-skills"
source: "https://github.com/Fahad-Mahmood/agentic-seo-skills/blob/HEAD/skills/3-MODERN-AI-AEO-AND-GEO/aeo-and-voice-search-optimization/SKILL.md"
raw_source: "https://raw.githubusercontent.com/Fahad-Mahmood/agentic-seo-skills/HEAD/skills/3-MODERN-AI-AEO-AND-GEO/aeo-and-voice-search-optimization/SKILL.md"
ref: "HEAD"
discovered_via: "github-search"
license: "MIT"
stars: 0
collected: "2026-11-14"
---

<!-- Unspecified skill · Fahad-Mahmood/agentic-seo-skills · skills/3-MODERN-AI-AEO-AND-GEO/aeo-and-voice-search-optimization/SKILL.md · MIT
     Source: https://github.com/Fahad-Mahmood/agentic-seo-skills/blob/HEAD/skills/3-MODERN-AI-AEO-AND-GEO/aeo-and-voice-search-optimization/SKILL.md
     Detected by: none · Regenerated on every run; edit the upstream skill, not this copy. -->

# Answer Engine Optimization (AEO)

## Overview

Answer Engine Optimization formats content so AI crawlers and voice assistants can extract direct answers in response to question queries (*"How much does X cost?"*, *"Who are the top Y in Z?"*).

---

## The Direct-Answer Formatting Rule

1. **Question in Header**: Use exact phrasing in `<h3>` or `<h2>`.
2. **First Sentence Answer**: Give a direct 40–60 word answer immediately in the first sentence with key numbers/rates bolded.
3. **Structured Context**: Follow with a bulleted list or table for nuance.

---

## Schema.org FAQPage Graph

```json
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How much do freelance video editors charge in Pakistan?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Freelance video editors in Pakistan typically charge between PKR 10,000 to PKR 45,000 per video for short form content (Reels/TikTok), and PKR 25,000 to PKR 120,000 for high retention YouTube long form videos, depending on timeline complexity and NLE software expertise."
      }
    }
  ]
}
```
