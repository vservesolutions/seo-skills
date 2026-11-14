---
name: "seo-content-writing"
description: "Use when the user wants to write or rewrite SEO content: service page copy, blog posts, guides, location page copy, or wants content to sound human, helpful and expert instead of generic AI text. Writes people-first content that matches search intent, uses the business's real proof, and never invents facts, prices or statistics."
category: "on-page-seo"
platforms: ["claude-code"]
platform_source: "declared"
repo: "AmmarBabbar/seo-skills"
repo_url: "https://github.com/AmmarBabbar/seo-skills"
source: "https://github.com/AmmarBabbar/seo-skills/blob/HEAD/skills/seo-content-writing/SKILL.md"
raw_source: "https://raw.githubusercontent.com/AmmarBabbar/seo-skills/HEAD/skills/seo-content-writing/SKILL.md"
ref: "HEAD"
discovered_via: "github-search"
license: "MIT"
stars: 0
collected: "2026-11-14"
---

<!-- Claude Code skill · AmmarBabbar/seo-skills · skills/seo-content-writing/SKILL.md · MIT
     Source: https://github.com/AmmarBabbar/seo-skills/blob/HEAD/skills/seo-content-writing/SKILL.md
     Detected by: declared · Regenerated on every run; edit the upstream skill, not this copy. -->

# SEO Content Writing

You write like an experienced local business owner explaining things to a customer, with the precision of a senior SEO. The content must help the reader, match search intent and earn trust.

## Before you start

1. Read `.agents/seo-context.md` for voice, services, cities, USPs and proof.
2. Use a brief if one exists (`content-brief`). If not, confirm: target keyword, intent, page type, audience and CTA.
3. List the facts you need from the client (prices, years, license numbers, project examples). If you do not have them, use `[CLIENT TO PROVIDE: ...]` placeholders. Never make them up.

## Writing rules

- **Answer first**: the first 2-3 sentences directly answer the main question or state what the page offers.
- **Specific beats generic**: real numbers, real materials and brands, real local details, real timelines.
- **Show experience**: "On most Dallas homes we inspect after hail season..." beats "Roofs can be damaged by hail."
- **Short paragraphs** (2-4 sentences), clear subheadings, lists only where they help.
- **Natural keywords**: the primary keyword in the title, H1, intro and one subheading. After that, write naturally and use variations. No keyword stuffing.
- **Local relevance** (local pages): neighborhoods, climate, permits, typical homes, local landmarks only when they actually matter.
- **Trust**: licenses, insurance, warranties, reviews, real photos (describe where they go).
- **Clear CTA** near the top, in the middle and at the end, matching intent (call now for emergencies, free quote for planned work).

## Banned AI phrases

Do not use: "In today's fast-paced world", "delve", "unlock", "elevate", "game-changer", "navigate the complexities", "it's important to note", "look no further", "comprehensive guide", "whether you're a ... or a ...", "in conclusion", "seamless", "tailored solutions", "peace of mind" (unless the client actually says it), "we pride ourselves".

Also avoid: empty intros, repeating the question back, fake statistics, generic stock-photo descriptions, and endings that only summarize.

## Structures

### Service page
H1 (Service in City) → short intro with CTA → problems we solve → how the service works (steps) → why choose us (proof, not adjectives) → pricing factors → areas served → FAQs from real customers → final CTA

### Blog post / guide
Title → direct answer → details by subtopic → local or first-hand insight → when to call a pro (link to the service page) → short FAQ if useful

## Self-check before delivering

- [ ] Does the intro answer the intent in under 3 sentences?
- [ ] Is every fact either provided by the client, verifiable, or marked as a placeholder?
- [ ] Is there at least one first-hand or local detail per main section?
- [ ] No banned phrases?
- [ ] Title (about 60 characters) and meta description (about 155 characters) included?
- [ ] Internal links to the relevant service or location pages?

## Output

1. Title tag and meta description
2. Full content in Markdown with H1-H3
3. List of `[CLIENT TO PROVIDE]` items
4. Suggested images with alt text
5. Internal links added

## Related skills

`content-brief`, `on-page-seo`, `service-pages`, `location-pages`, `content-refresh`
