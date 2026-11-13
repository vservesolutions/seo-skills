---
name: "seo-geo"
description: "Optimize content for AI Overviews (formerly SGE), ChatGPT web search, Perplexity, and other AI-powered search experiences. Generative Engine Optimization (GEO) analysis including brand mention signals, AI crawler accessibility, evidence-backed passage analysis, observed citation and recommendation outcomes, and platform-specific optimization. Use when user says \"AI Overviews\", \"SGE\", \"GEO\", \"AI search\", \"LLM optimization\", \"Perplexity\", \"AI citations\", \"ChatGPT search\", or \"AI visibility\"."
category: "ai-search-geo"
platforms: ["claude-code"]
platform_source: "detected"
repo: "BruceL017/codex-seo"
repo_url: "https://github.com/BruceL017/codex-seo"
source: "https://github.com/BruceL017/codex-seo/blob/HEAD/plugins/codex-seo/skills/seo-geo/SKILL.md"
raw_source: "https://raw.githubusercontent.com/BruceL017/codex-seo/HEAD/plugins/codex-seo/skills/seo-geo/SKILL.md"
ref: "HEAD"
discovered_via: "github-search"
license: "MIT"
stars: 1
collected: "2026-11-13"
---

<!-- Claude Code skill · BruceL017/codex-seo · plugins/codex-seo/skills/seo-geo/SKILL.md · MIT
     Source: https://github.com/BruceL017/codex-seo/blob/HEAD/plugins/codex-seo/skills/seo-geo/SKILL.md
     Detected by: detected · Regenerated on every run; edit the upstream skill, not this copy. -->

# AI Search / GEO Optimization (May 2026)

Use `$seo-geo <url>` for site-controlled readiness evidence. Use
`$seo-geo visibility <brand-or-domain>` when the user wants observed retrieval,
citation, mention, or recommendation outcomes from configured providers or
supplied answer samples. If the target, query set, platform, or locale needed
for a visibility observation is missing, ask before calling providers.

## Primary Source: Google's AI Optimization Guide

Google's official position, published under Search Central docs:

> "Optimizing for generative AI search is **still SEO** from Google's
> perspective. AEO and GEO are rebranded labels for the same work."

Read `references/google-ai-optimization-guide.md` for the full synthesis,
myth-busting list (`llms.txt`, chunking, AI-rephrasing, mention-farming,
all rejected by Google as ineffective), and the Who/How/Why test for
content quality.

Audits should frame GEO findings as **SEO fundamentals applied to AI-search
surfaces**, not as a separate optimization discipline. When community
recommendations contradict Google's primary source, defer to Google and note
the contradiction in the report.

## Key Statistics

| Metric | Value | Source |
|--------|-------|--------|
| AI Overviews reach | 2.5 billion+ monthly active users, reported from Google I/O 2026 keynote coverage; not confirmed on a Google-owned source; 200+ countries | Third-party I/O reporting |
| AI Overviews query coverage | ~50% of queries (third-party measurement; varies by country) | Industry data |
| AI Mode monthly users | 1B+, reported from Google I/O 2026 keynote coverage; not confirmed on a Google-owned source | Third-party I/O reporting |
| AI Mode model | custom version of Gemini 2.5 | Google |
| AI-referred sessions growth | 527% (Jan-May 2025) | SparkToro |
| ChatGPT weekly active users | 900 million | OpenAI |
| Perplexity monthly queries | 500+ million | Perplexity |

## Critical Insight: Brand Mentions > Backlinks

**Brand mentions correlate 3x more strongly with AI visibility than backlinks.**
(Ahrefs December 2025 study of 75,000 brands)

| Signal | Correlation with AI Citations |
|--------|------------------------------|
| YouTube mentions | ~0.737 (strongest) |
| Reddit mentions | High |
| Wikipedia presence | High |
| LinkedIn presence | Moderate |
| Domain Rating (backlinks) | ~0.266 (weak) |

**Only 11% of domains** are cited by both ChatGPT and Google AI Overviews for the same query, so platform-specific optimization is essential.

---

## GEO Analysis Criteria (Updated)

### 1. Citable Passage Evidence

Third-party studies have observed citation patterns around passage position and
length, but there is no universal ideal word count and Google explicitly says
there is no preferred page length for its AI search features. Evaluate whether
an answer is self-contained, specific, attributable, and easy to locate; never
award or deduct points merely because it falls inside or outside 134-167 words.

**Strong signals:**
- Clear, quotable sentences with specific facts/statistics
- Self-contained answer blocks (can be extracted without context)
- Direct answer in first 40-60 words of section
- Claims attributed with specific sources
- Definitions following "X is..." or "X refers to..." patterns
- Unique data points not found elsewhere

**Weak signals:**
- Vague, general statements
- Opinion without evidence
- Buried conclusions
- No specific data points

### 2. Structural Readability

**92% of AI Overview citations come from top-10 ranking pages**, but 47% come from pages ranking below position 5, demonstrating different selection logic.

**Strong signals:**
- Clean H1->H2->H3 heading hierarchy
- Question-based headings (matches query patterns)
- Short paragraphs (2-4 sentences)
- Tables for comparative data
- Ordered/unordered lists for step-by-step or multi-item content
- FAQ sections with clear Q&A format

**Weak signals:**
- Wall of text with no structure
- Inconsistent heading hierarchy
- No lists or tables
- Information buried in paragraphs

### 3. Multi-Modal Content

Content with multi-modal elements sees **156% higher selection rates**.

**Check for:**
- Text + relevant images
- Video content (embedded or linked)
- Infographics and charts
- Interactive elements (calculators, tools)
- Structured data supporting media

### 4. Authority & Brand Signals

**Strong signals:**
- Author byline with credentials
- Publication date and last-updated date
- **Recency**, content under 3 months old is ~3x more likely to be cited in AI answers; pages left stale 6+ months lose citation eligibility (SE Ranking, 1.3M-citation study). A scheduled refresh program is one of the highest-leverage GEO plays.
- Citations to primary sources (studies, official docs, data)
- Organization credentials and affiliations
- Expert quotes with attribution
- Entity presence in Wikipedia, Wikidata
- Mentions on Reddit, YouTube, LinkedIn

**Weak signals:**
- Anonymous authorship
- No dates
- No sources cited
- No brand presence across platforms

### 5. Technical Accessibility

Do not assume every AI crawler executes JavaScript or renders it consistently.
Verify that primary content and citations are present in the fetched HTML, and
record rendered-browser evidence separately when it is needed.

**Check for:**
- Server-side rendering (SSR) vs client-only content
- AI crawler access in robots.txt
- llms.txt file presence and configuration
- RSL 1.0 licensing terms

---

## AI Crawler Detection

Check `robots.txt` for these AI crawlers:

| Crawler | Owner | Purpose | Obeys robots.txt? |
|---------|-------|---------|---|
| GPTBot | OpenAI | model-training crawl control | yes |
| OAI-SearchBot | OpenAI | OpenAI search features | yes |
| ChatGPT-User | OpenAI | ChatGPT browsing (user-triggered) | no (user-triggered) |
| ClaudeBot | Anthropic | Claude web features | yes |
| PerplexityBot | Perplexity | Perplexity AI search | yes |
| CCBot | Common Crawl | Training data (often blocked) | yes |
| anthropic-ai | Anthropic | Claude training | yes |
| Bytespider | ByteDance | TikTok/Douyin AI | yes |
| cohere-ai | Cohere | Cohere models | yes |
| Google-Extended | Google | Gemini/Vertex training & grounding opt-out | yes |
| Google-CloudVertexBot | Google | Site-owner-requested Vertex AI Agent crawls | yes |
| Google-Agent | Google | Agentic browsing (Project Mariner), acts for a user | **no (user-triggered)** |
| Google-NotebookLM | Google | Fetches individual user-added source URLs | **no (user-triggered)** |
| Google Messages | Google | User-triggered fetch | **no (user-triggered)** |

**Recommendation:** Treat search discovery and model training as separate user
choices. OAI-SearchBot controls OpenAI search discovery; GPTBot controls model
training and is not required for ChatGPT Search citations. Report current
directives and their tradeoffs, then ask before proposing policy changes.

> **User-triggered fetchers ignore robots.txt by design** (Google-Agent, Google-NotebookLM, Google Messages, ChatGPT-User). robots.txt cannot block them, use server-side access controls. Google's canonical crawling/robots reference moved to **developers.google.com/crawling** (migrated 2025-11-20); IP-range files now live at `/crawling/ipranges/` and `googlebot.json` was renamed `common-crawlers.json`. Emerging: **Web Bot Auth** (RFC 9421) lets bots authenticate via a `Signature-Agent` header + key directory (used by Google-Agent); reverse-DNS verification remains the fallback.

---

## llms.txt Standard

Read `references/llmstxt-evidence.md` for the primary-source evidence (Mueller, Illyes, SE Ranking 300k-domain study, OtterlyAI server-log audit) on why `/llms.txt` is not currently a citation lever for major AI search systems. codex-seo reports presence but assigns no citation-ranking weight.

> **Google now states this explicitly.** Google's AI optimization guide (updated 2026-06-29) says you do **not** need `llms.txt` / AI-text files for Google Search, including its generative AI features, and that doing so "won't harm (nor help) your visibility or rankings in Google Search, as Google Search ignores them." Mueller separately called the llms.txt discovery use case "a dead end." It's fine to keep for **non-Google** AI services; never recommend it as a Google ranking/citation lever. Source: developers.google.com/search/docs/fundamentals/ai-optimization-guide

The emerging **llms.txt** standard provides AI crawlers with structured content guidance.

**Location:** `/llms.txt` (root of domain)

**Format:**
```
# Title of site
> Brief description

## Main sections
- [Page title](url): Description
- [Another page](url): Description

## Optional: Key facts
- Fact 1
- Fact 2
```

**Check for:**
- Presence of `/llms.txt`
- Structured content guidance
- Key page highlights
- Contact/authority information

---

## RSL 1.0 (Really Simple Licensing)

New standard (December 2025) for machine-readable AI licensing terms.

**Backed by:** Reddit, Yahoo, Medium, Quora, Cloudflare, Akamai, Creative Commons

**Check for:** RSL implementation and appropriate licensing terms.

---

## Platform-Specific Optimization

| Platform | Key Citation Sources | Optimization Focus |
|----------|---------------------|-------------------|
| **Google AI Overviews** | Strongly ranking-correlated, cites pages that already rank well | Traditional SEO + passage optimization |
| **Google AI Mode** (custom version of Gemini 2.5) | Weakly ranking-correlated; broader pool (~9 domains cited/query, Ahrefs) | Distinct surface: freshness, entity authority, citable passages beyond position 5 |
| **ChatGPT** | Wikipedia (47.9%), Reddit (11.3%) | Entity presence, authoritative sources |
| **Perplexity** | Reddit (46.7%), Wikipedia | Community validation, discussions |
| **Bing Copilot** | Bing index, authoritative sites | Bing SEO, IndexNow |

> **Two Google citation engines, not one.** AI Mode and AI Overviews reach the
> same conclusion ~86% of the time but cite the same URLs only **13.7%** of the
> time (Ahrefs study, 540K query pairs). Treat them as separate surfaces: ranking
> well in classic Search feeds AI Overviews, but AI Mode draws from a broader pool
> where freshness and entity authority outweigh raw position. Score both.
>
> **UX is now unified, surfaces still distinct.** At Google I/O 2026 (2026-05-19)
> Google merged AI Overviews and AI Mode into "one seamless AI Search experience"
> (question → AI Overview → follow-up in AI Mode) with a new intelligent Search
> box. The *experience* is one flow, but the two citation engines remain
> technically distinct (different models/link sets), track observations for both.

### Citation surfaces & controls in AI Search (2026)

Google added many AI citation/source surfaces across AI Overviews **and** AI Mode (May 2026):

- **Preferred Sources**, users pick sites that get a "preferred" badge in AI answers; all-languages since 2026-04-30 (>345K sources selected); Google is working toward using it as a ranking signal. *Quick win:* encourage your audience to add the brand as a Preferred Source.
- **"Highly Cited" badges**, earned via original primary reporting that other articles cite.
- **Community Perspectives**, elevates Reddit/forum/firsthand content.
- Inline links, desktop hover **Link Previews**, and prominent link carousels.

**Controlling AI-feature appearance:** there is **no AI-specific opt-out file**. Appearance in AI Overviews and AI Mode is governed by standard preview/index directives, `nosnippet`, `data-nosnippet`, `max-snippet`, `noindex` (distinct from the third-party AI-crawler robots controls above). Source: developers.google.com/search/docs/appearance/ai-features

**Search agents (live, not just WebMCP):** Google's "Information Agents" run in the background to monitor topics, plus agentic booking/calling for select categories (rolling out to US users, summer 2026), so agent-friendly-page optimization (real interactive elements, accessibility tree, layout stability) now matters for actions, not only citations.

---

## Readiness Versus Observed Visibility

Keep these two result types separate:

1. **AI Search Readiness** evaluates site-controlled technical and content
   evidence. In a full Audit it is the 10% `ai_search_readiness` dimension.
2. **AI visibility observations** record what a named provider or user-supplied
   response actually retrieved, cited, mentioned, or recommended. They never
   enter the readiness category or overall SEO Health Score.

Do not invent a platform score from prose review. When no observation source is
available, show AI visibility as unknown rather than estimating it from site
readiness.

Normalize each provider or user sample to this shape before giving it to
`codex-seo report --visibility <observations.json>`:

```json
{
  "provider": "profound|seranking|dataforseo|user",
  "platform": "ChatGPT",
  "model": null,
  "query": "best example for ...",
  "query_set_id": "example-en-v1",
  "locale": "en-US",
  "observed_at": "2026-08-14T00:00:00Z",
  "retrieved": null,
  "cited": true,
  "mentioned": true,
  "recommendation": "for|against|mixed|none|null",
  "evidence": [{"kind": "observation", "source": "provider", "field": "citation", "observed": "https://example.com/", "captured_at": "..."}]
}
```

The input file is a JSON array of observations. Boolean `null` means unknown.
A citation or non-null/non-`none` recommendation requires direct evidence.
Preserve provider, model/surface, query, locale, sample time, and metric
definition. Aggregate only comparable cohorts; do not average differently
defined share-of-voice, citation-rate, or mention metrics across providers.

---

## Quick Wins

1. Add "What is [topic]?" definition in first 60 words
2. Create concise, self-contained answer blocks whose length follows the query
3. Add question-based H2/H3 headings
4. Include specific statistics with sources
5. Add publication/update dates
6. Implement Person schema for authors
7. Allow key AI crawlers in robots.txt

## Medium Effort

1. Review `/llms.txt` only when a named non-Google consumer requires it; Google Search ignores it
2. Add author bio with credentials + Wikipedia/LinkedIn links
3. Ensure server-side rendering for key content
4. Build entity presence on Reddit, YouTube
5. Add comparison tables with data
6. Implement FAQ sections (structured, not schema for commercial sites)

## High Impact

1. Create original research/surveys (unique citability)
2. Strengthen verifiable public entity evidence; never create promotional or
   policy-ineligible Wikipedia coverage
3. Establish YouTube channel with content mentions
4. Implement comprehensive entity linking (sameAs across platforms)
5. Develop unique tools or calculators

## Provider Integration (Optional)

- Use DataForSEO `ai_optimization_chat_gpt_scraper` for observed ChatGPT search
  samples and `ai_opt_llm_ment_search` / `ai_opt_llm_ment_top_domains` for its
  provider-defined mention metrics.
- Use `$seo-profound` for its citation observations and `$seo-seranking` for its
  provider-defined AI visibility metrics when their connectors are available.
- Accept user-supplied samples only when query, platform, observation time, and
  the answer/citation evidence are present.

Normalize all three sources to the observation contract above. Provider
unavailability is a data gap, not a failed readiness check and not evidence of
absence.

## Error Handling

| Scenario | Action |
|----------|--------|
| URL unreachable (DNS failure, connection refused) | Report the error clearly. Do not guess site content. Suggest the user verify the URL and try again. |
| AI crawlers blocked by robots.txt | Report exactly which crawlers are blocked and which are allowed. Provide specific robots.txt directives to add for enabling AI search visibility. |
| No llms.txt found | Note the absence (optional file; Google Search ignores it) and provide a ready-to-use llms.txt template for non-Google AI crawlers. |
| No structured data detected | Report the gap and provide specific schema recommendations (Article, Organization, Person) for improving AI discoverability. |

## FLOW Framework Integration

For prompt-guided AI content optimization, use `$seo-flow optimize <url>`, FLOW's 21 optimize-stage prompts complement GEO's citability and structure analysis with evidence-led AI prompts.
