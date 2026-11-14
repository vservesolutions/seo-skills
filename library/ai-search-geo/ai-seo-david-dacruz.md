---
name: "ai-seo"
description: "AI search visibility and AI SEO optimization. Activates when discussing AI Overviews, AI Mode, AEO, GEO, LLM SEO, ChatGPT visibility, Perplexity mentions, Gemini AI, Copilot, answer engine optimization, generative engine optimization, or any AI search presence topic. Phase 14. Output: {AUDIT_DIR}/ai-seo-findings.md"
category: "ai-search-geo"
platforms: ["claude-code"]
platform_source: "declared"
repo: "david-dacruz/local-seo-audit"
repo_url: "https://github.com/david-dacruz/local-seo-audit"
source: "https://github.com/david-dacruz/local-seo-audit/blob/HEAD/ai-visibility/ai-seo/SKILL.md"
raw_source: "https://raw.githubusercontent.com/david-dacruz/local-seo-audit/HEAD/ai-visibility/ai-seo/SKILL.md"
ref: "HEAD"
discovered_via: "github-search"
license: "MIT"
stars: 0
collected: "2026-11-14"
---

<!-- Claude Code skill · david-dacruz/local-seo-audit · ai-visibility/ai-seo/SKILL.md · MIT
     Source: https://github.com/david-dacruz/local-seo-audit/blob/HEAD/ai-visibility/ai-seo/SKILL.md
     Detected by: declared · Regenerated on every run; edit the upstream skill, not this copy. -->

# AI Visibility & AI SEO Audit — Phase 14

## Executive Summary

AI search is the fastest-growing traffic channel in 2025. Google AI Overviews appear for 20–35% of local service queries (SparkToro 2025). ChatGPT Search has 200M+ monthly active users. Perplexity processes 100M+ queries/month. Being cited in AI answers = significant visibility gain; being absent = invisible to AI-first searchers. This phase audits where the client appears (or doesn't) across all major AI platforms, identifies content gaps causing AI invisibility, and produces a prioritized action plan for AI citation dominance.

**2025 AI search benchmarks:**
- AIO citation rate: pages with FAQPage schema cited 3.2× more than pages without (Amsive 2025)
- ChatGPT freshness: pages updated within 30 days cited at 76.4% rate vs. 31.2% for 90+ day old pages
- Perplexity local query share: 18% of all queries are local business intent (Perplexity data, 2025)
- AIO + organic position 1 = ~45% CTR combined (vs. ~25% for position 1 alone when AIO shows)

---

## Tools for This Phase

| Tool | Purpose | Cost |
|------|---------|------|
| **Google Search** (incognito) | Test AIO presence for top 20–30 target keywords | Free |
| **ChatGPT** (GPT-4o with Search) | LLM visibility test — local service queries | Free/Paid |
| **Perplexity** | AI search citations for local service queries | Free |
| **Google Gemini** | Gemini AI visibility test + source attribution | Free |
| **Microsoft Copilot** | Bing-powered AI visibility | Free |
| **Google Rich Results Test** | FAQPage, HowTo, Speakable schema validation | Free |
| **Ahrefs** | Featured snippet ownership — AIO pulls from snippets | Paid |
| **SEMrush** | Featured snippet tracking per target keyword | Paid |
| **AlsoAsked.com** | PAA question mapping — AIO uses PAA patterns | Freemium |
| **Otterly.ai** | Track AIO mentions over time (monitoring) | Paid |

---

## The AI Search Landscape (2025-2026)

AI search is no longer emerging — it IS the mainstream:
- **Google AI Overviews**: Shown for ~20-30% of queries (growing)
- **Google AI Mode**: Full conversational search experience
- **ChatGPT Search**: Now default for 200M+ users with web access
- **Perplexity**: 100M+ monthly queries, growing fast
- **Microsoft Copilot**: Integrated into Windows/Edge/Bing
- **Gemini (Google)**: Deep integration with Android + Google Workspace
- **Claude (Anthropic)**: Growing presence with web search

For local businesses, AI search drives both:
1. Direct visibility (being mentioned in AI answers)
2. Competitive displacement (competitor gets the mention instead)

---

## Step 1: Read Project Context

Read `{AUDIT_DIR}/intake-data.md` — business name, URL, services, location.
Read `{AUDIT_DIR}/competitor-profiles.md` — competitor AI visibility signals.
Read `{AUDIT_DIR}/onpage-findings.md` — content structure gaps.

---

## Section 1: Google AI Overviews (AIO) Audit

### Test Protocol
Test top 20-30 target keywords in Google Search (incognito, desktop + mobile):

For each query, document:
| Query | AIO Shows? | Client Cited? | Competitors Cited? | Source URLs Used | AIO Format |
|-------|-----------|--------------|-------------------|-----------------|-----------|
| [query] | Yes/No | Yes/No | [names] | [URLs] | Paragraph/List/Table/Steps |

### AIO Appearance Patterns to Identify
- Which query types trigger AIO? (Informational, local, how-to, comparison?)
- Which content format is used in AIO? (Paragraphs, numbered steps, bullet lists?)
- What's the word count of the cited answer section?
- Does AIO pull from the first paragraph? A specific H2 section?
- Are any client pages cited? If so, which ones and why?

### AIO Optimization Strategy
To be cited in AI Overviews, content needs:
1. **Direct answers** — First 40-60 words answer the query directly
2. **Question-format headers** — H2: "What is [topic]?" / "How does [process] work?"
3. **Structured formatting** — numbered steps, bullet lists, tables rank well
4. **Unique data/insights** — AI cites specific facts, statistics, and expert opinions
5. **E-E-A-T signals** — Strong author credentials, institutional trust
6. **Comprehensive coverage** — Answer main query + related sub-questions
7. **Page authority** — Higher authority pages cited more often

---

## Section 2: Google AI Mode Audit

Google AI Mode (launched 2024, expanding 2025) enables fully conversational search.

### Test AI Mode Queries
- Enable AI Mode (Google account > Experiments or rolled-out region)
- Test conversational queries:
  - "What's the best [service] in [city] and why?"
  - "Compare [client] vs. [competitor 1] for [service]"
  - "I need [service] near [neighborhood] — any recommendations?"
  - Follow-up: "What makes them stand out?"

### Document Findings
| Query | Client Mentioned? | Accuracy | Competitor Priority | Source |
|-------|-----------------|---------|-------------------|--------|

---

## Section 3: LLM Visibility Audit (ChatGPT, Perplexity, Gemini, Copilot, Claude)

### Test Matrix
For each platform × query type:

**Platforms to test:**
- ChatGPT (GPT-4o with Search)
- Perplexity
- Google Gemini
- Microsoft Copilot
- Claude.ai (Anthropic)

**Query types to test:**
1. `Best [service] in [city]`
2. `[Service] near [neighborhood/landmark]`
3. `[Business Name]` — accuracy check
4. `[Business Name] reviews` — reputation
5. `How to find a good [service type] in [city]`
6. `[Specific service] cost in [city]`

**For each result document:**
- Business mentioned? (Yes/No)
- Accuracy of info (address, phone, hours, services)?
- Positive/negative framing?
- Competitors mentioned instead?
- Source URLs cited?
- Position (1st mention / 2nd / not mentioned)?

### LLM Visibility Score (per platform)
- Mentioned accurately in top 3 answers: 5/5
- Mentioned but with errors: 3/5
- Mentioned peripherally: 1/5
- Not mentioned: 0/5

---

## Section 4: AEO — Answer Engine Optimization Assessment

AEO focuses on structuring content so AI can extract and use it as answers.

### Content Assessment
For each key service page and FAQ page:
- [ ] Does each section start with a direct, standalone answer?
- [ ] Are definitions provided for key service terms?
- [ ] Are process steps numbered and clearly labeled?
- [ ] Are comparisons structured in tables?
- [ ] Are FAQs in explicit question + answer format (not buried)?
- [ ] Are specific figures, statistics, and data points included?
- [ ] Can the answer be extracted and read without surrounding context?

### FAQ Content Audit
- FAQ page exists?
- FAQs based on real customer questions (not generic)?
- FAQPage schema implemented?
- PAA (People Also Ask) boxes captured with existing content?
- Test: do current FAQs appear in PAA for target queries?

### Featured Snippet Optimization
Since AI Overviews pull from featured snippets:
- Which target queries have featured snippets?
- Does the client own any?
- What format does the winning snippet use?
- What page structure modifications are needed to win it?

---

## Section 5: GEO — Generative Engine Optimization Assessment

GEO focuses on making content easily citable by AI systems.

### Citeability Checklist
- [ ] Specific, quotable statements with data?
  Good: "Chicago homeowners saved an average of $2,400/year after our insulation upgrade"
  Bad: "We help homeowners save money on energy bills"

- [ ] Original research, surveys, or case studies?
- [ ] Named expert quotes with credentials?
- [ ] Step-by-step instructions with clear numbered format?
- [ ] Comparison tables with specific data?
- [ ] Local statistics about the service area?
- [ ] Industry benchmarks stated clearly?

### Source Authority Assessment
AI systems cite authoritative sources. Check:
- Domain authority and trust indicators
- E-E-A-T signals present (author, expertise, experience demonstrated)
- Linked to from other authoritative sources in the niche?
- Consistently mentioned on industry resource pages?

### Entity Optimization for AI
AI systems understand entities better than raw keyword text:
- Is the business entity clearly defined (who, what, where, when)?
- Are service entities named consistently (using industry-standard terminology)?
- Are geographic entities precise (neighborhood, city, region)?
- Do related entities connect? (business → services → location → team)?
- Schema markup reinforces all entity relationships?

---

## Section 6: Structured Data for AI Readability

Schema types most valuable for AI citation:
| Schema Type | AI Benefit |
|------------|-----------|
| LocalBusiness | Business entity establishment |
| FAQPage | Direct Q&A extraction |
| HowTo | Step-by-step answer extraction |
| Article + Author | E-E-A-T, content authority |
| AggregateRating | Trust signal for AI recommendations |
| Speakable | Marks content optimized for voice/AI reading |
| Service | Clear service entity definition |
| Review | Specific review content citation |

Validate all schema at: search.google.com/test/rich-results

---

## Section 7: Competitor AI Visibility Comparison

| Platform | Client Score | Comp 1 | Comp 2 | Comp 3 |
|----------|-------------|--------|--------|--------|
| Google AIO | | | | |
| ChatGPT Search | | | | |
| Perplexity | | | | |
| Gemini | | | | |
| Copilot | | | | |
| Overall AI Score | | | | |

**Findings:** Which competitor dominates AI visibility and why? What content do they have that the client lacks?

---

## Section 8: AI SEO Action Plan

### Priority Matrix

| Action | Impact (1–5) | Feasibility (1–5) | Priority | Effort |
|--------|-------------|-------------------|---------|--------|
| Add FAQPage schema to all service pages | 5 | 5 | 25 | 30 min/page |
| Rewrite service page intros (direct 50-word answer) | 5 | 4 | 20 | 30–60 min/page |
| Add specific data points (costs, timelines) to pages | 5 | 4 | 20 | 30–60 min/page |
| Create dedicated FAQ page (conversational queries) | 4 | 5 | 20 | 2–4 hrs |
| Add question-format H2s to top 5 service pages | 4 | 4 | 16 | 30 min/page |
| Add HowTo schema to process pages | 4 | 5 | 20 | 30 min/page |
| Publish original research / local statistics page | 5 | 3 | 15 | 4–8 hrs |
| Build E-E-A-T author profiles (credentials, bios) | 4 | 4 | 16 | 2–4 hrs |
| Refresh pages > 30 days old (freshness = AIO boost) | 4 | 5 | 20 | 30–60 min/page |
| Add Speakable schema to key answer sections | 3 | 4 | 12 | 30 min |

### Immediate (Week 1–2) — Quick Wins
- [ ] Add FAQPage schema to all service pages — Effort: 30 min/page — Expected: 3.2× more AIO citations
- [ ] Rewrite service page intros with direct standalone answers (first 50 words) — Effort: 30–60 min/page
- [ ] Add specific data points (pricing, timelines, statistics) to every service page — Effort: 30–60 min/page

### Short-Term (Month 1)
- [ ] Create dedicated FAQ page optimized for conversational queries — Effort: 2–4 hrs
- [ ] Restructure top 5 service pages with question-format H2s — Effort: 30 min/page
- [ ] Publish original research piece (local survey, case study, cost data) — Effort: 4–8 hrs
- [ ] Add HowTo schema to all process-based pages — Effort: 30 min/page

### Medium-Term (Months 2–3)
- [ ] Build E-E-A-T author profiles for all content contributors — Effort: 2–4 hrs
- [ ] Earn citations from authoritative local/industry sites — Effort: ongoing
- [ ] Create content that fills AI citation gaps vs. top competitor — Effort: 2–4 hrs/piece

---

## Scoring

| Category | Weight |
|----------|--------|
| AI platform visibility (AIO + ChatGPT + Perplexity + Gemini + Copilot) | 20% |
| AI citability scoring (passage-level extractability) | 20% |
| AI crawler access (Tier 1–3 crawlers + llms.txt) | 15% |
| AEO content structure (answer blocks, FAQs, featured snippets) | 15% |
| Platform-specific optimization readiness | 15% |
| Schema for AI readability (FAQPage, Speakable, knowsAbout) | 15% |

---

## Output

Write complete findings to `{AUDIT_DIR}/ai-seo-findings.md` with YAML frontmatter:

```yaml
---
skill: ai-visibility/ai-seo
phase: 14
date: [YYYY-MM-DD]
business: [Business Name]
url: [URL]
score: [X/100]
aio_cited: [yes|no|partial]
chatgpt_cited: [yes|no]
perplexity_cited: [yes|no]
faqpage_schema: [yes|no|partial]
aio_keywords_tested: [X]
aio_keywords_cited: [X]
---
```

Include:
- Score X/100 with per-category breakdown
- Full AI visibility matrix (all 5 platforms × 6 query types)
- AIO appearance analysis for top 20–30 keywords
- Competitor AI visibility comparison table
- AEO content structure checklist (per key page)
- GEO citeability checklist
- Schema for AI readability (present vs. missing per page)
- Content gap list (what's missing for AI citation)
- Priority matrix (all actions, Impact × Feasibility scored)
- 30/90-day AI SEO action plan with effort estimates

**Output files:**
- `{AUDIT_DIR}/ai-seo-findings.md` — AI visibility audit with score and citation gap analysis
- `{REPORTS_DIR}/phase-14-ai-seo.pdf` — auto-generated PDF after phase completes

**Key consumers:**
- `ai-visibility/voice-search` — voice and AIO share optimization signals
- `audit/onpage-seo` — AIO structure requirements inform on-page optimization
- `cross-cutting/serp-trust-auditor` — Trust & AI Readiness (T2) dimension
- `output/report-generation` — AI visibility section in master report

---

## Section 9: AI Citability Scoring Framework

AI models cite passages that meet specific structural criteria. GEO-optimized content achieves 30–115% higher visibility in AI-generated responses (Georgia Tech / Princeton / IIT Delhi 2024). Optimal AI-cited passages are **134–167 words**, self-contained, fact-rich, and answer-first.

### Citability Rubric (per content block, 0–100)

| Category | Weight | What It Measures | Scoring |
|----------|--------|-----------------|---------|
| Answer Block Quality | 30% | Does the passage open with a direct, quotable answer? Uses "X is..." or answer-first patterns? First 40–60 words stand alone? | 90+: every section opens with 1–2 sentence answer; 50–69: answers buried mid-paragraph; <30: no extractable answers |
| Self-Containment | 25% | Can the passage be extracted without context? No pronoun dependencies? Named subject in every block? | 90+: 80%+ blocks fully standalone; 50–69: mixed pronoun/explicit use; <30: continuous narrative, extraction breaks meaning |
| Structural Readability | 20% | H1>H2>H3 hierarchy? Question-based headings? Short paragraphs (2–4 sentences)? Tables for comparisons? Lists for processes? | 90+: clean hierarchy + question headings + tables/lists; 50–69: some structure; <30: wall-of-text |
| Statistical Density | 15% | Specific stats per 500 words? Named sources? Exact numbers (not "many" or "several")? | 90+: 5+ stats/500w, all sourced; 50–69: 1–2 stats/500w; <30: no statistics, vague quantifiers |
| Uniqueness & Original Data | 10% | First-party research? Proprietary data? Case studies with specific outcomes? | 90+: original surveys/research; 50–69: synthesized with some original commentary; <30: entirely derivative |

**Page Citability Score** = weighted average of all content block scores.

### High vs. Low Citability Examples

**HIGH citability (score ~85):**
> Content delivery networks (CDNs) are distributed server systems that cache and serve web content from locations geographically close to end users. A CDN reduces latency by 50–70% on average by serving assets from edge servers rather than a single origin server. The three largest CDN providers as of 2025 are Cloudflare (serving approximately 20% of all websites), Amazon CloudFront, and Akamai Technologies.
> — 58 words. Self-contained: yes. Facts: 3 specific data points. Definition pattern: yes.

**LOW citability (score ~15):**
> If you've ever wondered why some websites load faster than others, the answer might surprise you. There's this amazing technology that has been around for a while now. It's changed the way we think about web performance. Let me explain how it works.
> — 52 words. Self-contained: no (no topic named). Facts: 0. Definition pattern: no.

### Citation Research Data

| Finding | Source |
|---------|--------|
| Optimal AI-cited passage length: 134–167 words | Bortolato 2025 analysis of AI Overview passages |
| Definition patterns increase citation rate by 2.1× | Georgia Tech 2024 |
| Adding statistics increases citation by 40% | Princeton GEO study 2024 |
| Adding authority quotations increases citation by 115% in some categories | IIT Delhi 2024 |
| Fluency optimization increases visibility by 30% average | Georgia Tech 2024 |
| Content with source citations cited 20–25% more often by Perplexity/ChatGPT | Industry data 2025 |

### AI System Citation Preferences

| AI System | Citation Preference |
|-----------|-------------------|
| **Google AI Overviews** | Concise answer blocks (40–60 words). Content already ranking in top 10. Structured formatting (tables, lists). |
| **ChatGPT (Search)** | Explicit definitions, named sources, recent dates. Cites 2–4 sources per response. Wikipedia sourced 47.9% of citations. |
| **Perplexity** | Fact-dense passages with statistics. Cites 4–8 sources per response. Values recency highly. Reddit sourced 46.7% of citations. |
| **Gemini** | Multi-modal (text + images + video). YouTube content weighted heavily. Uses Knowledge Graph for entity grounding. |
| **Copilot (Bing)** | Passages from high-authority domains with clear factual claims. IndexNow for fast indexation. |

### Citability Audit Process

For each key page:
1. Segment content at each H2/H3 heading into blocks
2. Score each block on the 5 categories above
3. Identify top 3 strongest blocks (highlight as strengths)
4. Identify bottom 3 weakest blocks (flag for rewriting)
5. For blocks scoring <60: generate specific rewrite suggestion with answer-first opening + recommended statistics to add
6. Calculate "citability coverage" = % of blocks scoring above 70

---

## Section 10: AI Crawler Access Audit

AI crawlers must be able to access your site — blocked crawlers = invisible to that platform regardless of content quality. Over 35% of top 1,000 websites block at least one major AI crawler (Originality.ai 2025).

### Complete AI Crawler Reference (3 Tiers)

#### Tier 1: Critical for AI Search Visibility (MUST ALLOW)

| Crawler | Operator | User-Agent | Purpose | Impact if Blocked |
|---------|----------|-----------|---------|------------------|
| GPTBot | OpenAI | `GPTBot` | ChatGPT web browsing + search. Content may be used for model improvement. | Invisible in ChatGPT Search (900M+ weekly users) |
| OAI-SearchBot | OpenAI | `OAI-SearchBot` | ChatGPT search only — NOT used for training. | Not in ChatGPT search results even if GPTBot allowed |
| ChatGPT-User | OpenAI | `ChatGPT-User` | User-initiated URL visits ("read this page for me") | Users can't access your content via ChatGPT |
| ClaudeBot | Anthropic | `ClaudeBot` | Claude web search, citations, analysis | Invisible to Claude's web search |
| PerplexityBot | Perplexity | `PerplexityBot` | Perplexity AI search — always displays source links (best referral traffic of AI search products) | No Perplexity citations |

#### Tier 2: Important for Broader AI Ecosystem (RECOMMEND ALLOW)

| Crawler | Operator | User-Agent | Purpose | Notes |
|---------|----------|-----------|---------|-------|
| Google-Extended | Google | `Google-Extended` | Gemini training + AI Overviews improvement. Blocking does NOT affect Google Search ranking or AIO appearance (controlled by Googlebot). | Allow unless philosophical objection to training data usage |
| GoogleOther | Google | `GoogleOther` | Non-search-ranking purposes — research, experimental features | Low risk, moderate benefit |
| Applebot-Extended | Apple | `Applebot-Extended` | Apple Intelligence features, Siri AI (2B+ active Apple devices) | Growing strategic value |
| Amazonbot | Amazon | `Amazonbot` | Alexa answers, Amazon AI features | Relevant for voice search |
| FacebookBot | Meta | `FacebookBot` | Meta AI assistant (3B+ combined app users) | Growing importance |

#### Tier 3: Training-Only (Allow or Block Based on Strategy)

| Crawler | Operator | Recommendation | Reason |
|---------|----------|---------------|--------|
| CCBot | Common Crawl | Context-dependent | Training data for many AI companies. No live search impact. |
| anthropic-ai | Anthropic | Context-dependent | Claude model training only (separate from ClaudeBot live features) |
| Bytespider | ByteDance | **BLOCK** for most Western businesses | Aggressive crawling, minimal benefit outside Asian markets |
| cohere-ai | Cohere | Context-dependent | Enterprise AI training, low consumer impact |

### Crawler Access Audit Process

1. **Fetch robots.txt** — parse all User-agent directives. For each crawler above: Allowed / Blocked / Not Mentioned (inherits wildcard)
2. **Check meta robots tags** — sample 5–10 key pages for `<meta name="robots" content="noai">`, bot-specific noindex
3. **Check HTTP headers** — `X-Robots-Tag: noai`, `X-Robots-Tag: GPTBot: noindex`
4. **Check AI-specific files** — `/llms.txt`, `/.well-known/ai-plugin.json`, `/ai.txt`
5. **Assess JS rendering** — AI crawlers do NOT execute JavaScript. If content requires JS → flag as critical GEO issue

### Recommended robots.txt for Maximum AI Visibility

```
# Tier 1 — AI Search (ALLOW)
User-agent: GPTBot
Allow: /

User-agent: OAI-SearchBot
Allow: /

User-agent: ChatGPT-User
Allow: /

User-agent: ClaudeBot
Allow: /

User-agent: PerplexityBot
Allow: /

# Tier 2 — AI Ecosystem (ALLOW)
User-agent: Google-Extended
Allow: /

User-agent: Applebot-Extended
Allow: /

User-agent: Amazonbot
Allow: /

User-agent: FacebookBot
Allow: /

# Tier 3 — Training Only (BLOCK aggressive)
User-agent: Bytespider
Disallow: /
```

### Crawler Access Score

| Component | Weight |
|-----------|--------|
| Tier 1 crawlers allowed (5 bots) | 50% |
| Tier 2 crawlers allowed (5 bots) | 25% |
| No blanket AI blocks (no `noai` meta, no `User-agent: *` Disallow: /) | 15% |
| AI-specific files present (llms.txt, sitemap accessible) | 10% |

---

## Section 11: llms.txt Audit & Generation

The `llms.txt` standard (proposed by Jeremy Howard, Sept 2024) is an emerging file at `/llms.txt` that helps AI systems understand your site's purpose, structure, and key content. Analogous to `robots.txt` telling crawlers what NOT to access, `llms.txt` tells AI systems what IS most useful. As of early 2026, fewer than 5% of websites have llms.txt — early adopter advantage.

### llms.txt Format

```markdown
# [Business Name]

> [One sentence: what the business does, who it serves. Under 200 chars.]

## Services
- [Service Page Title](https://domain.com/service): Description of service, key facts.

## Resources
- [Guide Title](https://domain.com/guide): What this guide covers and why it matters.

## Key Facts
- Founded in [year] by [name]
- Headquarters: [City, State]
- [X] customers/clients served in [area]
- Services: [Service A], [Service B], [Service C]

## Contact
- Website: https://domain.com
- Phone: [phone]
- Email: [email]
- Address: [full address]
```

### llms.txt Audit Checklist

| Element | Check | Severity if Missing |
|---------|-------|-------------------|
| H1 Title (matches business name) | Present? | Critical |
| Blockquote description (<200 chars) | Present? | High |
| At least one H2 section | Present? | Critical |
| 10–30 page entries with absolute URLs | Present? | High |
| Descriptions after colon (10–30 words each) | Present? | Medium |
| Key Facts section with business data | Present? | Medium |
| Contact section with email + phone | Present? | Low |
| All listed URLs return 200 | Validated? | Medium |
| llms-full.txt (extended version) | Present? | Low (nice-to-have) |

### llms.txt Scoring

| Dimension | Weight |
|-----------|--------|
| Completeness (covers all major site sections, 10–30 pages) | 40% |
| Accuracy (descriptions match page content, URLs valid) | 35% |
| Usefulness (AI could understand the business from this file alone) | 25% |

### Generation Protocol (if llms.txt missing)

1. Fetch homepage — extract site name, description, navigation links
2. Crawl sitemap for all public pages
3. Categorize pages: Services, Resources/Blog, Company, Support
4. Select 15–25 highest-value pages
5. Write 10–30 word descriptions for each (factual, specific — no marketing fluff)
6. Add Key Facts from About page, GBP, schema data
7. Output ready-to-deploy `llms.txt` file

---

## Section 12: Platform-Specific AI Optimization

Only **11% of domains** are cited by BOTH ChatGPT and Google AI Overviews for the same query (Terakeet 2025). Each platform has different indexes, ranking logic, and source preferences. Platform-specific optimization is required.

### Platform 1: Google AI Overviews — Key Requirements

- 92% of AIO citations come from pages already ranking in **top 10 organic** — traditional SEO is the gateway
- 47% of citations come from pages ranking **below position 5** — AIO has its own clarity-based selection logic
- Featured snippet optimization has ~70% overlap with AIO optimization

**Top actions:** Question-based H2/H3 headings, direct answer in first paragraph (40–60 words), comparison tables, ordered/unordered lists, FAQ sections, statistics with sources, visible publication + updated dates, author byline with credentials.

### Platform 2: ChatGPT Web Search — Key Requirements

- Uses **Bing's search index** (not Google)
- Top citation sources: Wikipedia (47.9%), Reddit (11.3%), YouTube, major news
- Heavily weights **entity recognition** — Wikipedia/Wikidata presence dramatically increases citation odds
- Prefers **comprehensive articles (2,000+ words)** from established sources

**Top actions:** Wikipedia/Wikidata entity, Bing Webmaster Tools registration, Reddit brand presence, authoritative .edu/.gov backlinks, consistent entity information across platforms, comprehensive long-form content.

### Platform 3: Perplexity AI — Key Requirements

- Top citation sources: **Reddit (46.7%)**, Wikipedia, YouTube, major publications
- Heaviest emphasis on **community validation** of all AI search platforms
- Cites **5–15 sources per answer** — more opportunity for mid-authority sites
- Strong freshness signal — recently updated content preferred

**Top actions:** Active Reddit presence in relevant subreddits, original research/data, discussion-friendly content, YouTube content with transcripts, freshness signals (visible dates, regular updates), cross-source claim validation.

### Platform 4: Google Gemini — Key Requirements

- Uses Google's search index + strong weighting toward **Google-owned properties** (YouTube, GBP)
- Google Knowledge Panel is a direct advantage
- Multi-modal: references images, videos, and text together
- YouTube content weighted more heavily than in standard Google Search

**Top actions:** YouTube channel with relevant content + chapters/timestamps, Google Knowledge Panel, GBP completion, comprehensive Schema.org markup, Google ecosystem presence (Scholar, News, Maps), image optimization.

### Platform 5: Bing Copilot — Key Requirements

- Uses **Bing's search index** (shared with ChatGPT but different ranking/selection)
- Supports **IndexNow protocol** for near-instant indexing
- Microsoft ecosystem integration: LinkedIn, GitHub weighted
- Bing weights meta descriptions more heavily than Google

**Top actions:** Bing Webmaster Tools verification, IndexNow implementation, LinkedIn company page, optimized meta descriptions, social engagement signals, fast page load (<2s), exact-match keywords in titles/headings.

### Cross-Platform Priority Summary

| Priority | Google AIO | ChatGPT | Perplexity | Gemini | Copilot |
|----------|-----------|---------|-----------|--------|---------|
| #1 | Top-10 ranking | Wikipedia | Reddit presence | YouTube | IndexNow |
| #2 | Q&A structure | Entity graph | Original research | Knowledge Panel | Bing WMT |
| #3 | Tables/lists | Bing SEO | Freshness | Schema.org | LinkedIn |
| #4 | Featured snippets | Reddit | Community forums | GBP | Meta descriptions |

---

## AI Visibility Quick Reference

### Schema Markup Priority for AI Citation

| Schema Type | AIO Citation Boost | Implementation | Effort |
|------------|-------------------|----------------|--------|
| FAQPage | 3.2× citation rate | Add to all service + location pages (5 FAQ min) | 30 min/page |
| HowTo | 2.1× for process queries | Add to any "how to" or process service pages | 45 min/page |
| Organization + sameAs + knowsAbout | Entity confidence boost + topical expertise signal | Homepage only; include 7+ sameAs URLs + 5–7 knowsAbout topics | 30 min |
| AggregateRating | +17–25% branded CTR | All pages with real review data | 30 min |
| LocalBusiness subtype | Local AIO eligibility | Homepage + key service pages | 30 min |
| BreadcrumbList | Navigation context for AI | Sitewide (via CMS plugin often) | 1 hr |
| Speakable | Marks content for voice/AI assistant extraction | Add to Article/WebPage schema with CSS selectors pointing to key answer sections | 15 min/page |

### 2025–2026 AI Search Platform Benchmarks

| Platform | Local Coverage | Citation Criteria | Update Frequency |
|---------|---------------|------------------|-----------------|
| Google AI Overviews | 20–35% of local queries | E-E-A-T + schema + topical authority | Real-time (Gemini-based) |
| ChatGPT (web search) | 15–25% of local queries | Freshness (76.4% cite <30-day pages), Bing index | Weekly crawl |
| Perplexity AI | 10–20% of local queries | Source authority + content depth + Reddit presence | Real-time |
| Google Gemini (assistant) | Growing rapidly | Knowledge Graph entity + YouTube | Real-time |
| Bing Copilot | 5–15% of local queries | Bing indexation + content trust + IndexNow | Daily crawl |

### 2026 GEO Market Context

| Metric | Value | Source |
|--------|-------|--------|
| GEO services market (2025) | $850M–$886M | Yahoo Finance / Superlines |
| Projected GEO market (2031) | $7.3B (34% CAGR) | Industry analysts |
| AI-referred sessions growth | +527% (Jan–May 2025) | SparkToro |
| AI traffic conversion vs organic | 4.4× higher | Industry data |
| Google AI Overviews reach | 1.5B users/month, 200+ countries | Google |
| ChatGPT weekly active users | 900M+ | OpenAI |
| Perplexity monthly queries | 500M+ | Perplexity |
| Gartner: search traffic drop by 2028 | −50% | Gartner |
| Brand mentions vs backlinks for AI | 3× stronger correlation | Ahrefs Dec 2025 |
| Marketers investing in GEO | Only 23% | Industry surveys |

### GBP + AIO Local Pack Integration
GBP-driven AI Overviews for local queries: "best [service] near me" queries now show AIO with local pack. To appear:
1. GBP must be verified and have 4.0+ star rating with 20+ reviews
2. Business category must exactly match query intent
3. Website must have LocalBusiness schema with areaServed matching the user's location
4. Q&A section must have keyword-relevant answers seeded

INP for AI search: Googlebot renders pages before indexing for AIO inclusion. Pages with INP >500ms may have content not fully extracted for AI citations. Target INP <200ms on all schema-rich pages.
