---
name: "entity-audit"
description: "Entity optimization and Knowledge Graph analysis. Activates when discussing entities, Google Knowledge Graph, entity SEO, NLP entities, schema entities, Wikidata, entity relationships, semantic entities, or E-E-A-T entity signals. Phase 9. Output: {AUDIT_DIR}/entity-findings.md"
category: "technical-crawling-indexing"
platforms: ["claude-code"]
platform_source: "declared"
repo: "david-dacruz/local-seo-audit"
repo_url: "https://github.com/david-dacruz/local-seo-audit"
source: "https://github.com/david-dacruz/local-seo-audit/blob/HEAD/local/entity-audit/SKILL.md"
raw_source: "https://raw.githubusercontent.com/david-dacruz/local-seo-audit/HEAD/local/entity-audit/SKILL.md"
ref: "HEAD"
discovered_via: "github-search"
license: "MIT"
stars: 0
collected: "2026-11-14"
---

<!-- Claude Code skill · david-dacruz/local-seo-audit · local/entity-audit/SKILL.md · MIT
     Source: https://github.com/david-dacruz/local-seo-audit/blob/HEAD/local/entity-audit/SKILL.md
     Detected by: declared · Regenerated on every run; edit the upstream skill, not this copy. -->

# Entity Audit — Phase 9

## Executive Summary

Entity optimization is the bridge between traditional SEO and AI search visibility. Google's Knowledge Graph powers both the traditional Knowledge Panel and AI Overviews — businesses with strong entity signals get cited in AIO at higher rates than those without. In 2025, the minimum viable entity footprint is: GBP verified + 7+ sameAs connections + consistent NAP across all platforms + Wikidata entity. ChatGPT and Perplexity reference businesses with complete Wikidata entries 3× more than businesses without. The 30-minute fix with the highest impact: add sameAs properties to LocalBusiness schema (links to GBP, Facebook, LinkedIn, Yelp, BBB, Instagram, Wikidata) — this single action strengthens entity consolidation significantly.

**2025 entity benchmarks:**
- sameAs count for Knowledge Panel eligibility: 7+ authoritative sources (Google's Knowledge Vault threshold)
- sameAs 0–3: weak entity — Knowledge Panel very unlikely; 7–9: competitive; 10+: strong
- E-E-A-T entity signal: named author/owner with Person schema = measurable trust increase for YMYL and local service categories
- AI recognition rate: businesses with Wikidata entry cited 3× more by ChatGPT/Perplexity
- `knowsAbout` schema property: signals topical expertise domain directly to Google NLP
- Most specific `@type` matters: `PlumbingContractor` not `LocalBusiness` — specificity = entity clarity

**Numbered Action Plan:**

### Immediate (30-Minute Wins)
1. **Add sameAs links to LocalBusiness schema** — Add `"sameAs": [...]` array with GBP URL, Facebook, LinkedIn, Yelp, BBB, Instagram, Twitter/X, Wikidata (if exists). Each is a separate entity consolidation signal. Effort: 30 min. Priority: 25 (5×5).
2. **Change `@type` to most specific type** — If currently `"@type": "LocalBusiness"`, change to specific type (e.g., `PlumbingContractor`, `Dentist`, `Attorney`). Effort: 5 min. Priority: 15.
3. **Add `knowsAbout` to Organization schema** — Add the 5–7 core service entities the business is authoritative on. This directly signals topical expertise to Google's NLP and AI systems. Example: `"knowsAbout": ["Drain Cleaning", "Water Heater Installation", "Emergency Plumbing", "Sewer Line Repair", "Tankless Water Heaters"]`. Also add `knowsAbout` to Person schema for the owner/key staff. Effort: 15 min. Priority: 20.

### Short-Term (Week 1–2)
4. **Create Wikidata entity** — If business has significant web presence (news mentions, 3+ external references): create Wikidata entry with name, type, location, website, founding date, sameAs links. Effort: 2–4 hrs. Priority: 16.
5. **Add Person schema for owner** — Create author page for business owner with Person schema: name, jobTitle (specific), credentials, worksFor → business entity, sameAs → LinkedIn. Effort: 1–2 hrs. Priority: 16.
6. **Fix entity attribute inconsistencies** — Audit: business name format, address format, phone format across website/GBP/Yelp/BBB/Facebook. Any variation = entity fragmentation. Fix the ≤3 platforms causing inconsistency. Effort: 1–2 hrs. Priority: 20.
7. **Validate all schema** — Run Rich Results Test (search.google.com/test/rich-results) + Schema Markup Validator (validator.schema.org) on homepage and top service pages. Fix any errors (invalid @type, missing required properties). Effort: 1–2 hrs. Priority: 20.

### Medium-Term (Month 1–2)
8. **Build topical entity associations** — Publish 25+ articles on primary service cluster (entity co-occurrence accumulates). Get cited alongside industry terms in local publications. Add `about` + `mentions` schema to key pages. Effort: Ongoing.
9. **Create team author pages** — For each key team member: create /team/[name]/ page with Person schema, headshot, credentials, linked blog posts. Strengthens E-E-A-T author entity signals. Effort: 2–4 hrs/person.
10. **Earn entity mentions** — Pitch local news, industry publications, community platforms. Each mention = entity co-citation = strengthened Knowledge Graph. Effort: 4–8 hrs/mention.

---

## Why Entities Matter in 2025–2026

Google's search engine is fundamentally entity-based. Rankings are increasingly driven by whether Google understands:
1. **What your business IS** — entity type, attributes, relationships
2. **What topics you're authoritative on** — topical entity associations
3. **Where you exist** — local entity with verified location signals
4. **Who you're connected to** — entity relationships: people, orgs, places

Strong entity presence = trust = better rankings AND AI visibility. In 2025:
- **AI Overviews** pull entity-structured data as primary citation sources
- **ChatGPT/Perplexity** reference businesses with complete Wikidata entries 3× more
- **Google's Knowledge Vault** — entities with sameAs coverage from 7+ authoritative sources achieve Knowledge Panel significantly faster

---

## Step 1: Read Project Context

Read `{AUDIT_DIR}/intake-data.md` — business name, URL, location, services.
Read `{AUDIT_DIR}/competitor-profiles.md` — competitor entity signals.
Read `{AUDIT_DIR}/local-findings.md` — GBP completeness (feeds entity graph).

**Tools for this phase:**
| Tool | Purpose | Cost |
|------|---------|------|
| **Google Cloud NLP API** | Entity extraction from page content (salience + type + sentiment) | Free ($0/1K calls) |
| **InLinks** | NLP entity analysis, topic wheel, entity-based internal linking | Paid |
| **Kalicube Pro** | Brand SERP entity completeness, entity clarity score, Knowledge Panel tracker | Paid |
| **Wikidata** (wikidata.org) | Direct entity creation/editing — #1 Knowledge Panel trigger | Free |
| **Google Rich Results Test** | Schema entity validation | Free |
| **Schema Markup Validator** (validator.schema.org) | Entity schema syntax check | Free |
| **Otterly.ai** | Monitor AI mention frequency (entity recognition across AI assistants) | Paid |

**2025 Entity Context:**
Google's "Entity Home" concept means each business should have one authoritative page consolidating all entity attributes. An incomplete entity = fragmented Knowledge Graph = weaker rankings. Wikidata entry + GBP + 7+ sameAs connections = minimum viable entity footprint for Knowledge Panel eligibility.

---

## Step 2: Business Entity Recognition Tests

### Test 1: Knowledge Panel Check
Search Google for each:

| Query | Knowledge Panel? | Type | Completeness |
|-------|----------------|------|-------------|
| `[Business Name]` | Yes/No/Partial | Local/Brand | [X attributes showing] |
| `[Business Name] [City]` | Yes/No/Partial | | |
| `[Business Name] [primary service]` | Yes/No/Partial | | |

**Status categories:**
- ✅ Full Knowledge Panel — entity well recognized
- ⚠️ Partial — GBP card shows but no full panel (entity weak)
- ❌ No panel — entity not in Knowledge Graph

### Test 2: AI Assistant Entity Recognition
| Query | Platform | Business Mentioned? | Accuracy? | Source Cited? |
|-------|---------|--------------------|---------|--------------:|
| "Tell me about [Business Name]" | ChatGPT | Yes/No | Yes/No | |
| "What is [Business Name] in [City]?" | Perplexity | Yes/No | Yes/No | |
| "[Best service] in [city]" | Google AIO | Yes/No | Yes/No | |

### Test 3: Wikidata Check
Visit wikidata.org → search business name:
- Wikidata entity exists? Q-number: [Q_______]
- If exists: attribute completeness (names, location, website, founded, industry, sameAs links)?
- If not: does business qualify? (Must have coverage in reliable external sources, not just website)

---

## Step 3: Entity Attribute Consistency

For a local business entity, Google expects these attributes consistently across ALL web properties:

| Attribute | Website | GBP | Schema | Wikidata | Consistent? | Action |
|-----------|---------|-----|--------|----------|------------|--------|
| Legal business name | | | | | ✅/❌ | |
| Brand/trade name | | | | | ✅/❌ | |
| Business `@type` (e.g., PlumbingContractor) | | | | | ✅/❌ | |
| Street address (exact format) | | | | | ✅/❌ | |
| City, State, ZIP | | | | | ✅/❌ | |
| Phone number (same format) | | | | | ✅/❌ | |
| Website URL (canonical) | | | | | ✅/❌ | |
| Founded year | | | | | ✅/❌ | |
| Owner/founder name | | | | | ✅/❌ | |
| Primary service category | | | | | ✅/❌ | |
| Service area (areaServed) | | | | | ✅/❌ | |
| Logo URL | | | | | ✅/❌ | |
| Social profiles | | | | | ✅/❌ | |

**Inconsistencies = entity confusion = fragmented Knowledge Graph = weaker rankings and AI citations.**

### Specific `@type` Recommendations

Use the most specific Schema.org `@type` available — not just "LocalBusiness":

| Business Category | Recommended `@type` |
|-----------------|---------------------|
| Plumber | `PlumbingContractor` |
| Electrician | `Electrician` |
| HVAC | `HVACBusiness` |
| Attorney | `Attorney` (sub-type of `LegalService`) |
| Dentist | `Dentist` |
| Restaurant | `Restaurant` |
| Accountant | `AccountingService` |
| Auto repair | `AutoRepair` |
| Gym/fitness | `HealthClub` |

---

## Step 4: sameAs Entity Connections

`sameAs` creates a web of entity signals Google uses to consolidate and strengthen the business entity.

### sameAs Inventory Audit (from website's LocalBusiness schema)

| Property | URL Included? | URL Correct? | Priority |
|----------|-------------|-------------|---------|
| Google Business Profile URL | ✅/❌ | ✅/❌ | Critical |
| Facebook Page URL | ✅/❌ | ✅/❌ | Critical |
| Instagram Profile URL | ✅/❌ | ✅/❌ | High |
| LinkedIn Company Page URL | ✅/❌ | ✅/❌ | High |
| YouTube Channel URL | ✅/❌ | ✅/❌ | Medium |
| Twitter/X Profile URL | ✅/❌ | ✅/❌ | Medium |
| Yelp Business URL | ✅/❌ | ✅/❌ | High |
| BBB Profile URL | ✅/❌ | ✅/❌ | High |
| Industry association profile | ✅/❌ | ✅/❌ | Medium |
| Chamber of Commerce listing | ✅/❌ | ✅/❌ | Medium |
| Wikidata entity URL | ✅/❌ | ✅/❌ | High — Knowledge Panel trigger |

**sameAs count benchmarks:**
- 0–3 sameAs: ❌ Weak entity — Knowledge Panel very unlikely
- 4–6 sameAs: ⚠️ Developing — partial entity recognition possible
- 7–9 sameAs: ✅ Competitive — Knowledge Panel achievable
- 10+ sameAs: ✅✅ Strong — full entity consolidation likely

**Current sameAs count:** [X] / 11 recommended

---

## Step 5: Content Entity Analysis (NLP)

### Entity Extraction from Key Pages

For each key page (homepage + top 3 service pages), paste content into **Google Cloud NLP API** or **InLinks**:

```
# Google Cloud NLP API (free usage)
# Go to: console.cloud.google.com/natural-language
# Analyze Entities → paste page content → view salience scores
```

For each page, document:
- **Key entities found:** [entity name | type | salience score 0–1]
- **Missing entities:** what should be on the page based on topic but isn't?
- **Entity sentiment:** are key service terms associated with positive sentiment?

### Entity Coverage vs. Top Competitors

For each service page, compare entity presence:
| Entity | Client Page | Comp 1 | Comp 2 | Gap? |
|--------|------------|--------|--------|------|
| [Service term] | Present/Missing | ✅/❌ | ✅/❌ | Yes/No |
| [Local area] | Present/Missing | ✅/❌ | ✅/❌ | Yes/No |
| [Key industry term] | Present/Missing | ✅/❌ | ✅/❌ | Yes/No |
| [Regulatory body/certification] | Present/Missing | ✅/❌ | ✅/❌ | Yes/No |

---

## Step 6: E-E-A-T Entity Signals

Google's E-E-A-T assessment is entity-driven — these are measurable signals per page/domain:

### Experience & Expertise Signals
| Signal | Present? | Location | Quality |
|--------|---------|---------|---------|
| Owner/founder named (full name) | ✅/❌ | | |
| Credentials/certifications (specific — not generic) | ✅/❌ | | |
| Team bios with professional backgrounds | ✅/❌ | | |
| Case studies with real project specifics | ✅/❌ | | |
| Years in business prominently stated | ✅/❌ | | |
| License/permit numbers displayed | ✅/❌ | | |
| Person schema with `worksFor` attribute | ✅/❌ | | |

### Authority Signals
| Signal | Present? | Source |
|--------|---------|--------|
| Named in local news articles | ✅/❌ | [Publication names] |
| Cited as expert on other websites | ✅/❌ | [Sites] |
| Industry association memberships (specific orgs) | ✅/❌ | [Org names] |
| Awards and recognitions (named, verifiable) | ✅/❌ | |
| Chamber of Commerce, BBB membership | ✅/❌ | |

### Trustworthiness
| Signal | Present? |
|--------|---------|
| Physical address prominently displayed | ✅/❌ |
| Multiple contact methods (phone + form + email) | ✅/❌ |
| Privacy policy, terms, refund policy | ✅/❌ |
| SSL certificate + HSTS | ✅/❌ |
| Verified reviews on third-party platforms (Yelp, Google, BBB) | ✅/❌ |

---

## Step 7: People Entities (Owner + Team)

For service businesses, key people should be recognized entities — increases E-E-A-T and author trust:

| Person | Role | Author Page? | Schema? | LinkedIn Linked? | AI-Searchable? |
|--------|------|------------|---------|----------------|---------------|
| [Owner name] | Founder/Owner | ✅/❌ | ✅/❌ | ✅/❌ | Yes/No |
| [Key team member] | [Role] | ✅/❌ | ✅/❌ | ✅/❌ | Yes/No |

**Person entity schema (add to author pages):**
```json
{
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "[Full Name]",
  "jobTitle": "[Title — be specific: 'Master Plumber' not 'Staff']",
  "description": "[Brief bio with credentials, years of experience, specialty]",
  "knowsAbout": ["Drain Cleaning", "Water Heater Installation", "Emergency Plumbing"],
  "worksFor": {
    "@type": "LocalBusiness",
    "@id": "https://domain.com/#business"
  },
  "sameAs": [
    "https://www.linkedin.com/in/[handle]/",
    "https://domain.com/team/[name]/"
  ]
}
```

---

## Step 7b: Speakable Schema for AI Assistants

The `speakable` property (Schema.org) marks content sections that are especially suitable for text-to-speech and AI assistant extraction. Google supports speakable for news articles, and AI assistants (Siri, Gemini, Alexa) use it as a signal for which content to read aloud or extract as voice answers.

### When to Use Speakable
- Service pages with clear answer paragraphs
- FAQ pages with concise Q&A pairs
- About page with business description
- Any page with a "definition block" answering "What is [service]?"

### Speakable Implementation

Add to Article, WebPage, or FAQPage schema:

```json
{
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "[Page Title]",
  "speakable": {
    "@type": "SpeakableSpecification",
    "cssSelector": [".service-intro", ".faq-answer", "#business-description"]
  }
}
```

**Rules for speakable content:**
- Keep speakable sections to 2–3 short sentences each
- Use clear, conversational language (avoid jargon without definitions)
- Ensure the section makes sense when read aloud without visual context
- Point CSS selectors at the most citable, answer-rich paragraphs
- Do NOT mark the entire page as speakable — only the best answer blocks

### Speakable Audit Checklist

| Page | Has Speakable? | CSS Selectors Valid? | Content Voice-Ready? | Priority |
|------|---------------|---------------------|---------------------|---------|
| Homepage | ✅/❌ | ✅/❌ | ✅/❌ | High |
| Top service pages (3–5) | ✅/❌ | ✅/❌ | ✅/❌ | High |
| FAQ page | ✅/❌ | ✅/❌ | ✅/❌ | High |
| About page | ✅/❌ | ✅/❌ | ✅/❌ | Medium |

**Effort:** 15 min/page. **Impact:** Improved voice search + AI assistant citation likelihood.

---

## Step 8: Topical Entity Associations

Which topics does Google associate this business with? Test:
- Search `[Business Name] [service term]` → does client appear for this association?
- Search `[service term] [city]` → does Knowledge Panel reference client?
- Ask ChatGPT: "What is [Business Name] known for?" → does answer match target services?

| Target Association | Current Strength | Action |
|------------------|----------------|--------|
| [Business Name] + [primary service] | Strong/Weak/None | |
| [Business Name] + [city] | Strong/Weak/None | |
| [Business Name] + [expertise topic] | Strong/Weak/None | |

**Building topical associations:**
1. Publish minimum 25 articles on the target topic cluster (entity co-occurrence accumulates)
2. Add `knowsAbout` to Organization schema with core topic entities
3. Get mentioned alongside industry terms in authoritative publications (entity co-citation)
4. Use `about` and `mentions` schema properties on key pages

---

## Priority Matrix

| Action | Impact (1–5) | Feasibility (1–5) | Priority | Effort |
|--------|-------------|-------------------|---------|--------|
| Add sameAs links to website schema (7+ properties) | 5 | 5 | 25 | 30 min |
| Create Wikidata entity with all attributes | 4 | 4 | 16 | 2–4 hrs |
| Fix inconsistent business name across platforms | 4 | 4 | 16 | 2–3 hrs |
| Add most-specific `@type` to LocalBusiness schema | 3 | 5 | 15 | 15 min |
| Add Person schema for owner + link LinkedIn | 4 | 4 | 16 | 1–2 hrs |
| Add `knowsAbout` to Organization schema | 4 | 5 | 20 | 30 min |
| Create author pages for key team members | 3 | 4 | 12 | 2–4 hrs |
| Earn mentions on authoritative local sites | 5 | 3 | 15 | 4–8 hrs/mention |
| Add `speakable` schema to key answer sections | 3 | 5 | 15 | 15 min/page |
| Create YouTube channel + 3 educational videos | 5 | 3 | 15 | 8–16 hrs |
| Build Reddit presence in relevant subreddits | 4 | 4 | 16 | 2 hrs/week ongoing |

---

## Scoring

| Category | Weight | Score |
|----------|--------|-------|
| Knowledge Panel / entity recognition | 25% | /25 |
| sameAs completeness (7+ = ✅, 10+ = ✅✅) | 20% | /20 |
| Attribute consistency across platforms | 20% | /20 |
| E-E-A-T entity signals (experience, authority, trust) | 20% | /20 |
| Content entity coverage vs. competitors (NLP gap) | 15% | /15 |

---

## Output

Write to `{AUDIT_DIR}/entity-findings.md` with YAML frontmatter:

```yaml
---
skill: local/entity-audit
phase: 9
date: [YYYY-MM-DD]
business: [Business Name]
url: [URL]
score: [X/100]
knowledge_panel: [present|partial|missing]
same_as_count: [X]
wikidata_entity: [yes|no|Q-number]
---
```

Include:
- Score X/100 with per-category breakdown
- Entity recognition status (Knowledge Panel + AI assistant tests)
- sameAs connection inventory (present vs. missing, priority-ranked)
- Attribute consistency gaps table (all platforms)
- NLP entity analysis (salience gaps vs. top competitors)
- E-E-A-T entity signals checklist (all 3 dimensions)
- People entity status (owner, team schema)
- Topical entity association strength per target topic
- Priority matrix (all actions, Impact × Feasibility scored)
- 30/90/180-day entity optimization roadmap

**Output files:**
- `{AUDIT_DIR}/entity-findings.md` — entity audit with score and schema gap list
- `{REPORTS_DIR}/phase-9-entity-audit.pdf` — auto-generated PDF after phase completes

**Key consumers:**
- `local/brand-serp` — Knowledge Panel and sameAs directly feed brand SERP
- `local/local-seo` — entity signals strengthen GBP and local pack
- `output/report-generation` — entity score in master report section 9

---

## Entity Optimization Quick Reference

### sameAs Source Priority Table (AI Visibility Ranked)

Brand mentions correlate **3× more strongly** with AI visibility than backlinks (Ahrefs Dec 2025, 75K brands). The sameAs priority order below is ranked by AI citation impact, not just traditional SEO value:

| Source | Entity Signal | AI Citation Impact | Effort | Priority |
|--------|--------------|-------------------|--------|---------|
| Google Business Profile (verified) | Critical (primary entity) | High — feeds AIO + Gemini directly | 30 min | 25 (5×5) |
| Wikidata Q-ID | High (KG direct pathway) | **Critical** — ChatGPT cites Wikidata entities 3× more | 1–2 hrs | 25 (5×5) |
| YouTube Channel | High (AI citation signal) | **Highest correlation** (0.737) with AI citations | 1–2 hrs | 20 (5×4) |
| Wikipedia article | High (if business qualifies) | **Highest** — 47.9% of ChatGPT citations from Wikipedia | 4–8 hrs | 20 (5×4) |
| LinkedIn Company Page | High (E-E-A-T, B2B) | Moderate — weighted by Copilot (Bing/Microsoft ecosystem) | 30 min | 16 (4×4) |
| Facebook Business Page | High (local trust) | Low–Moderate — Meta AI integration growing | 30 min | 16 (4×4) |
| Yelp Business Listing | High (local NAP citation) | Medium — cited by ChatGPT/Perplexity for reviews | 15 min | 16 (4×4) |
| Reddit presence | Medium (community signal) | **High** — Perplexity sources 46.7% from Reddit | Ongoing | 16 (4×4) |
| BBB Accreditation | Medium (trust signal) | Low–Medium | 1–2 hrs | 12 (4×3) |
| Industry association directory | Medium (topical entity) | Low | 30 min | 12 (4×3) |
| Chamber of Commerce | Medium (local trust) | Low | 30 min | 12 (3×4) |

### GBP 2025 Entity Signals
GBP is the #1 entity signal for local businesses (Whitespark 2024). For maximum entity recognition:
- Primary category must match your core service (plumber → "Plumber", not "Contractor")
- Add all relevant secondary categories (5+ where applicable)
- Enable Q&A — unanswered questions weaken entity completeness
- Add service menu with prices — Google uses service data for Knowledge Panel display
- Enable Google Reserve/Booking if applicable — feeds into entity completeness score

### INP + Entity Note
Entity strength affects Knowledge Panel display which appears for branded searches. Better entity recognition → stronger branded SERP → higher branded CTR. INP <200ms is required for all pages with entity schema to be fully crawled and processed.
