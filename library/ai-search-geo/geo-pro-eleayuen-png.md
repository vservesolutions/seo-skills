---
name: "geo-pro"
description: "Generative Engine Optimization (GEO) for AI search visibility. Optimize brands and content to be recommended and cited by ChatGPT, Perplexity, Claude, Gemini, and Google AI Overviews. Use when the user asks about AI optimization, generative engine optimization, AI recommendations, ChatGPT/Perplexity/Claude ranking, getting recommended by AI, AI visibility, AI search optimization, AI citation, llms.txt, AI crawler access, entity clarity, or wants a GEO audit, an AI visibility review, an EEAT/entity/authority review, or a unified SEO+GEO audit with one prioritized report."
category: "ai-search-geo"
platforms: ["unspecified"]
platform_source: "none"
repo: "eleayuen-png/seo-geo-skills"
repo_url: "https://github.com/eleayuen-png/seo-geo-skills"
source: "https://github.com/eleayuen-png/seo-geo-skills/blob/HEAD/skills/geo-pro/SKILL.md"
raw_source: "https://raw.githubusercontent.com/eleayuen-png/seo-geo-skills/HEAD/skills/geo-pro/SKILL.md"
ref: "HEAD"
discovered_via: "github-search"
license: "MIT"
stars: 0
collected: "2026-11-14"
---

<!-- Unspecified skill · eleayuen-png/seo-geo-skills · skills/geo-pro/SKILL.md · MIT
     Source: https://github.com/eleayuen-png/seo-geo-skills/blob/HEAD/skills/geo-pro/SKILL.md
     Detected by: none · Regenerated on every run; edit the upstream skill, not this copy. -->

# GEO Pro

Generative Engine Optimization = making AIs recommend and cite you when users ask for solutions in your category.

Unlike SEO (ranking in search results), GEO is about being in the AI's training data, retrieval sources, and knowledge in a way that makes you the natural answer. Winning content is **parseable, quotable, and authoritative** — not keyword-stuffed.

For traditional Google/Bing ranking work, pair this skill with the companion **`seo-pro`** skill.

## Triggers

Activate on: AI optimization, generative engine optimization, AI recommendations, ChatGPT ranking, get recommended by AI, AI visibility, AI search optimization, AI citation rate, llms.txt, AI crawlers, entity optimization.

## Quick Reference

| Situation | Read |
|-----------|------|
| Measure current AI visibility (query simulations across models) | `audit.md` |
| Full GEO content audit of a page (70-point checklist) | Audit checklist below + `references/content-audit-template.md` |
| One combined SEO + GEO audit report (P0/P1/P2, boss/operator/specialist modes) | `unified-audit.md` |
| Scoring logic for the unified audit | `references/scoring-framework.md` |
| Audit report output templates (operator / Chinese boss mode) | `references/output-template.md`, `references/output-template-zh-boss.md` |
| Playbooks by business type (SaaS, ecommerce, local, publisher...) | `strategies.md` |
| Evidence layer standard — citation weights, evidence discipline, primary sources | `references/geo-evidence-standard.md` |
| IndexNow, AI crawler access, citation optimization (playbook style) | `references/geo-optimization.md` |
| 中文参考资料 | `references/zh/` |

## GEO vs SEO: Key Differences

| Aspect | Traditional SEO | GEO |
|--------|-----------------|-----|
| Goal | Rank on SERPs | Get cited in AI responses |
| Keywords | Exact match matters | Semantic understanding |
| Content style | Can be promotional | Must be factual, neutral |
| Structure | Headers for scanning | Headers + parseable data |
| Links | Backlinks for authority | Citations + entity mentions |
| Freshness | Helpful | Critical (LLMs prefer recent) |
| Format | Long-form wins | Quotable chunks win |

## The Audit Process

Before optimizing, measure where you stand:

1. **Run simulation queries** across multiple AI models
2. **Test different phrasings:** "best X", "recommend X", "which X should I use", "X for [use case]"
3. **Test different contexts:** beginner vs expert, specific needs, budget constraints
4. **Document which brands get mentioned** and in what position

See `audit.md` for a complete audit workflow with example prompts and a results scorecard.

## Why AIs Recommend What They Recommend

| Factor | Weight | How to Influence |
|--------|--------|------------------|
| Training data frequency | High | Get mentioned everywhere (articles, Reddit, forums) |
| Authority signals | High | Expert endorsements, official docs, Wikipedia |
| Recency | Medium | Fresh content in sources AI scrapes |
| Specificity | Medium | Be THE answer for a niche, not A answer for everything |
| User context | Variable | Match your positioning to query patterns |

**Evidence layer first (highest leverage).** AI citation is won on evidence — the evidence layer is ~43% of GEO weight (quotes 16% + statistics 14% + citability 13%). Give every core claim a verifiable authoritative quote or a full-provenance statistic, and cite primary research where it exists (e.g. Aggarwal et al., *GEO*, KDD 2024 — "up to 40% visibility boost"). **Never fabricate data or citations**; flag unverifiable claims as `[needs-source]`. Full standard: `references/geo-evidence-standard.md`.

## Core Strategies

### 1. Own Your Category Description

When someone asks "what is [your category]?" — your brand should be in the example or definition.

- Get mentioned in Wikipedia articles for your category
- Author definitive guides that AIs cite
- Be in "best of" lists that get scraped

### 2. Dominate Discussion Platforms

Reddit, HN, Stack Overflow, Quora = AI training goldmines.

- Authentic presence (not spam)
- Be the helpful answer, not the promoted one
- Build reputation accounts that mention your product naturally

### 3. Technical Content Authority

AIs weight documentation and technical content heavily.

- Comprehensive public docs
- Integration guides with popular tools
- Open source presence (GitHub stars, contributors)

### 4. Strategic PR and Mentions

- Get in TechCrunch, Product Hunt, industry publications
- Expert interviews and podcasts (transcripts get indexed)
- Case studies with named customers

See `strategies.md` for detailed playbooks by business type.

## The GEO Content Audit Checklist

Score each page 0-2 points per item (0=missing, 1=partial, 2=excellent). Full worksheet: `references/content-audit-template.md`.

### 1. Entity Clarity (Max 10 pts)
- [ ] First paragraph clearly defines what/who the entity is
- [ ] Entity name used consistently throughout
- [ ] Clear category placement ("X is a [type of thing]")
- [ ] Relationship to other known entities stated
- [ ] Wikipedia-style objectivity in tone

### 2. Quotable Facts (Max 10 pts)
- [ ] Specific numbers present (not "many" or "fast")
- [ ] Statistics are current and sourced
- [ ] Claims are concrete and verifiable
- [ ] Key facts in standalone sentences (easy to extract)
- [ ] "By the numbers" or facts section exists

### 3. FAQ Coverage (Max 10 pts)
- [ ] FAQ section exists
- [ ] Questions match how users prompt LLMs
- [ ] Answers are direct and complete
- [ ] FAQ schema markup implemented
- [ ] Covers "what is", "how does", "why", "vs" questions

### 4. Comparison Positioning (Max 10 pts)
- [ ] Comparison tables exist
- [ ] Competitors named explicitly
- [ ] Factual differences highlighted (not just marketing)
- [ ] "Alternative to X" content exists
- [ ] Fair representation (not obviously biased)

### 5. Structural Clarity (Max 10 pts)
- [ ] Clear heading hierarchy (H1→H2→H3)
- [ ] Bullet points for lists
- [ ] Tables for comparisons
- [ ] Short paragraphs (2-4 sentences)
- [ ] Summary/TL;DR at top or bottom

### 6. Authority Signals (Max 10 pts)
- [ ] Author/company credentials stated
- [ ] Customer names/logos (social proof)
- [ ] Case studies with real numbers
- [ ] Third-party mentions/citations
- [ ] "Last updated" date present

### 7. Freshness (Max 10 pts)
- [ ] Page has recent update date
- [ ] Content reflects current year
- [ ] No outdated references
- [ ] Regular content updates
- [ ] News/changelog section exists

**Scoring:**
- 60-70: Excellent GEO readiness
- 45-59: Good, needs some optimization
- 30-44: Fair, significant gaps
- <30: Poor, major overhaul needed

## Content Optimization Templates

### Template 1: Entity Definition Page

```markdown
# [Entity Name]

**[Entity Name]** is a [category] that [primary function].
Unlike [alternative/competitor], [Entity Name] offers [key differentiator].

## [Entity Name] by the Numbers

- [Specific stat 1]
- [Specific stat 2]
- [Specific stat 3]
- [Specific stat 4]

## How [Entity Name] Works

[2-3 paragraphs explaining core functionality]

## Who Uses [Entity Name]

[Named customers with context]

## Frequently Asked Questions

### What is [Entity Name]?
[Direct answer in 2-3 sentences]

### How is [Entity Name] different from [Competitor]?
[Factual comparison]

### How much does [Entity Name] cost?
[Pricing info or guidance]

*Last updated: [Date]*
```

### Template 2: Comparison Page (Alternative To)

```markdown
# Best [Competitor] Alternative: [Your Product] ([Year])

> **Summary:** [Your Product] is a [category] offering [key differentiators].
> [Customers] report [specific result] compared to [Competitor].

*Last updated: [Date]*

## Why [Users] Look for [Competitor] Alternatives

### Problem 1: [Specific Pain Point]
[Explanation with specifics]

### Problem 2: [Specific Pain Point]
[Explanation with specifics]

## [Your Product] vs [Competitor]: Comparison

| Feature | [Competitor] | [Your Product] |
|---------|--------------|----------------|
| [Feature 1] | [Their approach] | [Your approach] |
| [Feature 2] | [Their approach] | [Your approach] |
| [Feature 3] | [Their approach] | [Your approach] |

## Key Differences

### [Differentiator 1]
[Factual explanation with numbers]

### [Differentiator 2]
[Factual explanation with numbers]

## Customer Results

> "[Quote with specific result]"
> — [Name], [Title], [Company]

## Frequently Asked Questions

### Is [Your Product] a good alternative to [Competitor]?
[Direct answer]

### How does [Your Product] compare to [Competitor] on [key factor]?
[Specific comparison]

### Can I migrate from [Competitor] to [Your Product]?
[Migration info]

## Summary

[Your Product] is a [category] offering [key benefits]. [Customers]
using [Your Product] instead of [Competitor] report [specific results].

*[Your Product] has [credibility stat]. Learn more at [link].*
```

### Template 3: FAQ Page (LLM Optimized)

```markdown
# [Topic] FAQ

Answers to common questions about [topic].

*Last updated: [Date]*

## General Questions

### What is [thing]?
[Thing] is a [category] that [function]. It is used by [who] to [accomplish what].

### How does [thing] work?
[Thing] works by [process]. [Additional detail].

### Who uses [thing]?
[Thing] is used by [user types], including [specific examples like Company A, Company B].

## Comparison Questions

### How is [thing] different from [alternative]?
[Thing] differs from [alternative] in [specific ways]:
- [Difference 1]
- [Difference 2]
- [Difference 3]

### Is [thing] better than [alternative]?
[Thing] is better suited for [use cases] because [reasons].
[Alternative] may be better for [other use cases].

## Pricing & Access

### How much does [thing] cost?
[Pricing information or range]

### Is there a free trial?
[Trial information]

## Technical Questions

### What are the requirements for [thing]?
[Requirements list]

### How do I get started with [thing]?
1. [Step 1]
2. [Step 2]
3. [Step 3]
```

## Platform-Specific Optimization

### Perplexity AI

**How it works:** 3-layer reranking system
1. Initial retrieval from web index
2. Relevance scoring
3. Citation selection based on authority + recency

**Optimization tactics:**
- Strong domain authority matters
- Freshness signals critical (update dates)
- Direct answers to questions
- Being cited by other authoritative sources
- Structured data helps parsing

### ChatGPT

**How it works:** Bing-powered search + LLM synthesis

**Optimization tactics:**
- Bing indexing matters (submit sitemap to Bing; use IndexNow for instant push)
- E-E-A-T signals weighted heavily
- Conversational content structure
- FAQ format highly effective
- Named entities help recognition

### Google AI Overviews

**How it works:** Google's index + Gemini synthesis

**Optimization tactics:**
- Traditional SEO still matters (ranking helps)
- Featured snippet optimization
- Schema markup (FAQ, HowTo, Product)
- Clear, authoritative content
- Mobile-first indexing

### Claude

**How it works:** Training data + retrieval (when web-enabled)

**Optimization tactics:**
- Quality content in training sources
- Wikipedia mentions help entity recognition
- Technical accuracy valued
- Clear, well-structured prose
- Being cited in authoritative sources

## Technical Implementation

### Schema Markup for GEO

**Organization Schema:**
```json
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Company Name",
  "description": "Clear description of what company does",
  "url": "https://example.com",
  "foundingDate": "2017",
  "numberOfEmployees": "50-100",
  "sameAs": [
    "https://twitter.com/company",
    "https://linkedin.com/company/company"
  ]
}
```

**FAQ Schema:**
```json
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [{
    "@type": "Question",
    "name": "What is [thing]?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Direct answer here."
    }
  }]
}
```

**Product Schema:**
```json
{
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "Product Name",
  "description": "Product description",
  "brand": {"@type": "Brand", "name": "Brand"},
  "offers": {
    "@type": "Offer",
    "priceCurrency": "USD",
    "price": "99"
  }
}
```

### AI Crawler Access

- Allow AI crawlers in `robots.txt` (GPTBot, ClaudeBot, PerplexityBot, Google-Extended) unless you deliberately opt out — blocking them removes you from future training and retrieval data.
- Push every content update via **Bing IndexNow** so LLM-connected search indexes refresh in seconds instead of waiting for crawl cycles. Setup details: `references/geo-optimization.md`.

### llms.txt Protocol

Create `/llms.txt` at your site root to help LLMs understand your site:

```
# Site Name

> Brief description of what this site/company is.

## Main Sections

- [Products](/products): Description of products section
- [Documentation](/docs): Technical documentation
- [Blog](/blog): Industry insights and updates

## Key Facts

- Founded: 2017
- Customers: 500+ companies
- Key metric: [specific number]

## Contact

- Website: https://example.com
- Email: hello@example.com
```

## Monitoring GEO Performance

### Manual Testing

Regularly run these prompts on each platform and record results in a spreadsheet (`audit.md` has the full scorecard):

**Perplexity:**
- "What is [your company]?"
- "Best [competitor] alternative"
- "[Your category] comparison"
- "How does [your product] work?"

**ChatGPT:**
- Same queries with web browsing enabled
- "Compare [your product] vs [competitor]"

**Google (AI Overview):**
- "[Your category] solutions"
- "[Competitor] alternative"

**Cadence:** test weekly during an optimization push (expect a 3-7 day lag after content updates), monthly once you hit your target citation rate. Focus on gaps — queries with 0% citation are your opportunities.

### Tracking Tools

| Tool | What It Tracks | Price |
|------|----------------|-------|
| Otterly.AI | Multi-platform AI visibility | Free tier |
| Ahrefs Brand Radar | AI search mentions | $129+/mo |
| Profound | Enterprise benchmarking | Enterprise |
| Manual tracking | DIY spreadsheet | Free |

Also isolate AI referral traffic in GA4 with a channel group for ChatGPT/Perplexity/Claude referrers.

### Key Metrics

- **Mention rate:** % of relevant queries where you appear
- **Citation rate:** % of mentions that cite/link to you
  - 0-20%: Early stage, needs work
  - 20-40%: Building visibility
  - 40-60%: Strong presence
  - 60%+: Dominant authority
- **Sentiment:** Positive/neutral/negative portrayal
- **Share of voice:** Your mentions vs competitors
- **Position:** Where in the response you appear

## Testing Your Progress

Run the same audit queries monthly. Track:

- Position (mentioned 1st, 2nd, 3rd, or not at all)
- Context (when are you recommended vs competitors)
- Phrasing sensitivity (which queries favor you)

## Red Flags

- ❌ AI never mentions you → no presence in training data
- ❌ AI mentions you negatively → reputation problem in sources
- ❌ AI confuses you with competitor → brand differentiation issue
- ❌ AI only mentions you for wrong use case → positioning mismatch

## GEO Content Principles

### DO:
- ✅ Use specific numbers ("0.5 seconds" not "fast")
- ✅ Make claims quotable and standalone
- ✅ Structure content with clear hierarchy
- ✅ Include FAQ sections
- ✅ Update content regularly with dates
- ✅ Create comparison content
- ✅ Use tables for data
- ✅ Be factual and neutral in tone
- ✅ Name real customers and results

### DON'T:
- ❌ Use vague superlatives ("best", "leading", "top")
- ❌ Keyword stuff (LLMs see through it)
- ❌ Write walls of text without structure
- ❌ Hide information (be comprehensive)
- ❌ Use outdated statistics
- ❌ Ignore competitors (address them directly)
- ❌ Be obviously promotional (neutral wins)

## Quick Start Checklist

For any page you want to optimize for GEO:

1. [ ] Add clear entity definition in first paragraph
2. [ ] Include 5+ specific, quotable statistics
3. [ ] Add FAQ section with 5+ questions
4. [ ] Create comparison table (if relevant)
5. [ ] Add "last updated" date
6. [ ] Implement FAQ schema markup
7. [ ] Ensure H1→H2→H3 hierarchy
8. [ ] Test on Perplexity: does your content appear?

## Resources

- [Awesome GEO GitHub](https://github.com/amplifying-ai/awesome-generative-engine-optimization)
- [Princeton GEO Research Paper](https://arxiv.org/pdf/2311.09735)
- [Google AI Search Guidance](https://developers.google.com/search/blog/2025/05/succeeding-in-ai-search)
- [Perplexity Ranking Factors](https://firstpagesage.com/seo-blog/perplexity-ai-optimization-ranking-factors-and-strategy/)

## What This Doesn't Cover

- Traditional SEO (Google rankings) → use the `seo-pro` skill
- Paid advertising
- Social media marketing
