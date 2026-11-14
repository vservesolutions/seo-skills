---
name: "ai-overviews-ai-mode"
description: "Diagnose and improve visibility in Google AI Overviews and AI Mode: eligibility, retrieval and query fan-out, what gets cited and why, snippet controls and the Search Console AI opt-out, the Generative AI performance report, click impact from Pew, Ahrefs and Seer studies, images, video, local and shopping, and the post-click experience for visitors who still arrive. Use whenever someone mentions AI Overviews, AI Mode, SGE, Google AI answers, clicks falling while rankings hold, being cited in AI Overviews, the Search Console Generative AI report, nosnippet, or opting out of Google AI features."
category: "ai-search-geo"
platforms: ["unspecified"]
platform_source: "none"
repo: "afeezadebayo/aeo-geo-skills"
repo_url: "https://github.com/afeezadebayo/aeo-geo-skills"
source: "https://github.com/afeezadebayo/aeo-geo-skills/blob/HEAD/ai-overviews-ai-mode/SKILL.md"
raw_source: "https://raw.githubusercontent.com/afeezadebayo/aeo-geo-skills/HEAD/ai-overviews-ai-mode/SKILL.md"
ref: "HEAD"
discovered_via: "github-search"
license: "CC-BY-4.0"
stars: 0
collected: "2026-11-14"
---

<!-- Unspecified skill · afeezadebayo/aeo-geo-skills · ai-overviews-ai-mode/SKILL.md · CC-BY-4.0
     Source: https://github.com/afeezadebayo/aeo-geo-skills/blob/HEAD/ai-overviews-ai-mode/SKILL.md
     Detected by: none · Regenerated on every run; edit the upstream skill, not this copy. -->

# Google AI Overviews and AI Mode

AI Overviews put a generated summary above Google's results for many searches; AI Mode is a conversational search experience where most of the page is the answer. Both use retrieval-augmented generation and query fan-out over Google's Search index, and both are rooted in Google's core ranking and quality systems. [Confirmed, Google Search Central] Google reported more than 2.5 billion monthly users for AI Overviews and more than 1 billion for AI Mode in June 2026 (as reported by industry press).

This skill works out where a site appears in Google's AI features, why it doesn't appear where it should, what controls exist and how to measure it with Google's own data.

## What Google has documented
| Topic | Google's position | Label |
|---|---|---|
| Eligibility | The page must be indexed and eligible to show with a snippet, and the site must be included in generative AI features in Search Console | Confirmed |
| Ranking basis | AI features are rooted in core Search ranking and quality systems; SEO best practices still apply | Confirmed |
| How answers are built | RAG (grounding) and query fan-out | Confirmed |
| Special files or markup | llms.txt and special markup aren't used; structured data isn't required for AI features | Confirmed |
| Content | Unique, non-commodity, people-first content matters most | Confirmed |
| Measurement | Generative AI performance report in Search Console shows impressions in AI Overviews and AI Mode; launched 3 June 2026, available to all sites by 31 August 2026 | Confirmed |
| Opting out | A Search Console control (tested from June 2026) can exclude a site's content from AI features; excluded sites get no traffic or impressions from those features, with no effect on other rankings | Confirmed (rollout status changes) |
| Google-Extended | Controls some Gemini uses; doesn't affect Google Search or AI Overviews | Confirmed |

## What the click data shows
| Study | Finding |
|---|---|
| Pew Research Center, July 2025 (900 US adults, 68,879 searches) | People clicked a traditional result on 8% of visits with an AI summary versus 15% without; they clicked a link inside the summary on 1% |
| Ahrefs, April 2025 (300,000 keywords) | Position-one click-through rate about 34.5% lower when an AI Overview appeared |
| Seer Interactive, September 2025 | Organic CTR fell sharply on AI Overview queries, but brands cited in the overview had higher CTR than brands not cited (correlation, not proven cause) |

The takeaway: informational clicks are harder to earn, and being cited is better than not being cited. Measure your own data rather than assuming industry averages.

## Operating principles
1. **Win the underlying searches.** Citations come from pages that rank for the main query or its fan-out sub-queries.
2. **Measure with Google's report first.** Impressions in AI features by page show where you already appear.
3. **Use controls deliberately.** `nosnippet`, `data-nosnippet` and `max-snippet` limit what can be shown, including in AI features; opting out removes AI feature visibility entirely. Know the trade-off.
4. **Optimise for the click that remains.** Visitors from AI features often arrive further along; give them depth, tools and next steps.
5. **Don't chase hacks.** Google names chunking, AI-only rewriting, llms.txt and inauthentic mentions as things you can ignore for Search.

## When to use, and when not to
Use it when AI Overviews appear for your important queries, when clicks fell while rankings held, when deciding whether to use snippet controls or the opt-out, and when setting up AI feature reporting.

Don't use it for other engines (use `chatgpt-search-visibility` or `answer-engine-platforms`) or for general content quality work (use `answer-ready-content`).

## Inputs to ask for, in one message
1. Search Console access, including the Generative AI performance report.
2. The important queries and pages, by market.
3. Click and impression trends for those pages over 16 months.
4. Any snippet controls in use (`nosnippet`, `max-snippet`, `data-nosnippet`).
5. Business model: does the site need clicks (publisher, lead gen) or brand exposure, or both?

## Workflow

### Step 1. Find where AI features appear
Check the target queries in the target market and record whether an AI Overview appears, which sources it cites and whether AI Mode answers cite you.

### Step 2. Read the Generative AI report
List pages with AI feature impressions. Compare with the overall Performance report to see which pages gained or lost clicks as AI impressions grew.

### Step 3. Diagnose missing citations
For important queries where you rank but aren't cited, compare your page with cited pages: direct answer, specificity, evidence, freshness, visual content. For queries where you don't rank, the issue is classic SEO first.

### Step 4. Cover the fan-out
Use `query-fan-out-mapping` to find sub-queries the overview draws on and strengthen sections that answer them.

### Step 5. Review snippet controls
Check templates for unintended `nosnippet` or very small `max-snippet` values that block use in AI features. Use `data-nosnippet` only for text that must never be quoted.

### Step 6. Decide on the opt-out
Only consider excluding the site if AI features clearly cost more than they return (for example, content licensing businesses). Model the lost impressions first.

### Step 7. Improve the post-click experience
For pages cited in AI features, make sure visitors find depth, tools, data or next steps the summary couldn't give.

## Images and video
Google notes AI features can include relevant images and video. Image and video SEO best practices therefore also support AI feature visibility. [Confirmed]

## Local and shopping
For local businesses and retailers, Google Business Profile and Merchant Center feeds help products and services appear in AI responses. [Confirmed] See `ai-commerce-product-visibility`.

## Worked example
A personal finance publisher's clicks for "how to calculate stamp duty" fell 40% year on year while average position stayed at 2. The Generative AI report showed the page with high AI impressions; the overview cited a government page and a competitor calculator. The publisher rebuilt its page around an interactive calculator with worked examples for first-time buyers and second homes, a direct answer passage and a dated rate table. The page became one of the cited sources, and clicks recovered part of the loss, with longer sessions and more calculator use than before.

## Output format
```
# AI Overviews and AI Mode review: <site>, <market>, <date>
## AI feature presence for target queries (appears, cited sources, us cited?)
## Generative AI report summary (pages, impressions, trend)
## Missing-citation diagnosis by query
## Controls review (snippet controls, opt-out decision)
## Actions with owners and re-check dates
```

## Snippet controls and their effects
| Control | Effect on AI features | Use when |
|---|---|---|
| nosnippet | Page not used in snippets or AI features | Content must not be quoted at all |
| data-nosnippet on an element | That element excluded | Protecting specific text such as prices or gated content |
| max-snippet:[n] | Limits snippet length | Balancing visibility and control |
| Search Console generative AI setting | Opts the site out of AI features | After modelling lost impressions |
Check templates for accidental nosnippet tags; they quietly remove pages from AI Overviews.

## Common mistakes
- Blaming AI Overviews for drops caused by ranking or technical issues.
- Using `nosnippet` sitewide and wondering why you're never cited.
- Opting out without modelling lost visibility.
- Thinking Google-Extended controls AI Overviews.
- Expecting AI-specific clicks in Search Console; the report shows impressions.

## Questions to ask before you recommend changes
- Does the business need clicks, exposure, or both from these queries?
- Which pages have AI feature impressions, and are clicks rising or falling there?
- Are there legal or licensing reasons to limit snippets?

## Self-check before you answer
- Did I separate Google's documented positions from industry studies?
- Did I use the Generative AI performance report?
- Did I check snippet controls and explain the opt-out trade-off?
- Are recommendations grounded in ranking for the main and fan-out queries?

## Official documentation and research
- Google: generative AI features in Search, site owner guide: https://developers.google.com/search/docs/fundamentals/ai-optimization-guide
- Google: AI features and your website: https://developers.google.com/search/docs/appearance/ai-features
- Generative AI performance report: https://support.google.com/webmasters/answer/16984139
- Robots meta tag, data-nosnippet and X-Robots-Tag: https://developers.google.com/search/docs/crawling-indexing/robots-meta-tag
- Pew Research Center, July 2025: https://www.pewresearch.org/short-reads/2025/07/22/google-users-are-less-likely-to-click-on-links-when-an-ai-summary-appears-in-the-results/

---
Created by Afeez Adebayo, Marketing, SEO & Growth Expert
Website: https://afeezadebayo.com
LinkedIn: https://www.linkedin.com/in/afeez-adebayo/
X: https://x.com/za_icon
Source: https://afeezadebayo.com/skills-md/marketing/aeo-geo/ai-overviews-ai-mode/

Licence: CC BY 4.0 (https://creativecommons.org/licenses/by/4.0/). You may copy, share and adapt this skill, including for commercial use, as long as you credit Afeez Adebayo and link to the source URL above. Keep this notice in any copy or adapted version.
