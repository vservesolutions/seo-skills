---
name: "social-media-audit"
description: "Social media presence and SEO signal analysis. Activates when discussing social media profiles, social signals, YouTube SEO, Open Graph tags, social content strategy, engagement, brand consistency across platforms, or social media as an SEO amplifier. Phase 13. Output: {AUDIT_DIR}/social-findings.md"
category: "technical-crawling-indexing"
platforms: ["claude-code"]
platform_source: "declared"
repo: "david-dacruz/local-seo-audit"
repo_url: "https://github.com/david-dacruz/local-seo-audit"
source: "https://github.com/david-dacruz/local-seo-audit/blob/HEAD/strategy/social-media-audit/SKILL.md"
raw_source: "https://raw.githubusercontent.com/david-dacruz/local-seo-audit/HEAD/strategy/social-media-audit/SKILL.md"
ref: "HEAD"
discovered_via: "github-search"
license: "MIT"
stars: 0
collected: "2026-11-14"
---

<!-- Claude Code skill · david-dacruz/local-seo-audit · strategy/social-media-audit/SKILL.md · MIT
     Source: https://github.com/david-dacruz/local-seo-audit/blob/HEAD/strategy/social-media-audit/SKILL.md
     Detected by: declared · Regenerated on every run; edit the upstream skill, not this copy. -->

# Social Media Audit — Phase 13 (SEO Lens)

## Executive Summary

Social media is an indirect but measurable SEO amplifier in 2025. The direct impacts: social profiles rank in branded SERPs (positions 2–6), verified profiles add sameAs entity signals to the Knowledge Graph, and active Facebook/Instagram feeds directly influence GBP performance — businesses with weekly posts receive 42% more GBP clicks (BrightLocal 2024). The AI visibility angle is new and critical: ChatGPT, Gemini, and Perplexity train on and reference social profiles when describing businesses to users — incomplete or abandoned profiles lead to inaccurate AI descriptions. TikTok video content has been indexed in Google Search results with VideoObject schema since 2024. YouTube SEO is separate from traditional SEO but competes directly in the same SERPs for "how to" and service queries.

**2025 social SEO benchmarks:**
- GBP clicks boost: 42% more clicks for businesses with weekly social posts (BrightLocal 2024)
- YouTube: #2 search engine globally — video content ranks in Google for "how to" + service queries
- TikTok VideoObject: Google indexes TikTok content since 2024 — VideoObject schema required for eligibility
- Engagement rate benchmarks: Instagram 2–5% = good; Facebook 1–3% = good; LinkedIn 0.5–1.5% = good; TikTok 5–10% = good
- OG image dimensions: 1200×630px (Facebook/LinkedIn), 1200×600px (Twitter/X)
- AI description training: ChatGPT, Gemini, Perplexity reference active social profiles for business descriptions

**Numbered Action Plan:**

### Immediate (Week 1 — <1 hr total)
1. **Add sameAs links for all social profiles in LocalBusiness schema** — Every active social URL → add to `sameAs` array in JSON-LD on homepage. Each is an entity consolidation signal. Effort: 30 min. Priority: 20.
2. **Add OG tags to homepage + top service pages** — `og:title`, `og:description`, `og:image` (1200×630px), `og:url`, `og:type`. Use Facebook Sharing Debugger to validate. Effort: 1–2 hrs. Priority: 20.
3. **Configure primary CTA on Facebook Business page** — "Call Now" button linked to business phone. Missed conversion point on most local business pages. Effort: 10 min. Priority: 15.
4. **Optimize Instagram bio** — "[Service] in [City] | [Key differentiator] | 📞 [Number] | [Link in bio to service page]". Add location to profile. Effort: 15 min. Priority: 15.
5. **Claim Nextdoor Business page** — Direct neighbor recommendation channel = hyperlocal social signal. 30 min to claim + verify. Priority: 15.

### Short-Term (Month 1)
6. **Set up weekly posting schedule** — Minimum 1 post/week on Facebook, 3/week on Instagram. Create 1-month content calendar: 40% service showcases, 30% before/after, 20% testimonials, 10% educational. Effort: 2 hrs planning + 1 hr/week. Expected: 42% more GBP clicks.
7. **Add VideoObject schema to all video-embedded pages** — Any page with YouTube/Vimeo embed: add VideoObject schema with name, description, uploadDate, thumbnailUrl. Enables video rich results in Google. Effort: 30 min/page.
8. **Claim Google Business Profile in YouTube** — Link YouTube channel to GBP for cross-platform entity consolidation. Effort: 15 min.
9. **Create first YouTube service explainer video** — 3–5 min: "How [Service] works in [City]" — targets "how to" queries + educates pre-purchase audience. Add target keyword to title, description (first 200 chars), tags. Effort: 4–8 hrs. Priority: 12.
10. **Add Twitter Card meta tags** — `twitter:card`, `twitter:title`, `twitter:description`, `twitter:image`. Improves CTR when content shared on X/Twitter. Effort: 30 min. Priority: 10.

---

## Social Media's Role in SEO (2025)

Social media does NOT directly pass PageRank — but it powerfully influences SEO through:
1. **Brand SERP control** — social profiles rank for branded searches (positions 2–6)
2. **Entity signals** — verified profiles strengthen Knowledge Graph entity (sameAs connections)
3. **Link acquisition** — social content drives discovery → natural editorial links
4. **AI training data** — ChatGPT, Gemini, and Perplexity pull from social profiles to describe businesses; incomplete profiles = inaccurate AI descriptions
5. **Content amplification** — social distribution → more impressions → more natural links → more authority
6. **Behavioral signals** — social traffic + engaged sessions → positive user signal
7. **Facebook/Instagram local ads** — local service ads integrate with social proof (reviews, followers)

**2025 Social SEO benchmarks:**
- Businesses with active Facebook (weekly posts) receive 42% more GBP clicks on average (BrightLocal 2024)
- YouTube is the #2 search engine globally — video content ranks in Google search for "how to" queries
- TikTok content appears in Google Search results via VideoObject schema since 2024

---

## Step 1: Read Project Context

Read `{AUDIT_DIR}/intake-data.md` — social URLs provided, business category, goals, location.
Read `{AUDIT_DIR}/competitor-profiles.md` — competitor social presence benchmarks.
Read `{AUDIT_DIR}/local-findings.md` — GBP insights that complement social.

**Tools for this phase:**
| Tool | Purpose | Cost |
|------|---------|------|
| **Meta Business Suite** | Facebook + Instagram analytics, post performance, audience insights | Free |
| **LinkedIn Analytics** | Company page analytics, follower demographics, post reach | Free (requires admin) |
| **YouTube Studio** | Video analytics, search terms, audience retention, CTR | Free (requires access) |
| **Buffer / Later** | Social media scheduling + analytics — content calendar view | Paid/Free |
| **Sprout Social** | Multi-platform analytics + competitor benchmarking | Paid |
| **Hootsuite** | Multi-platform management + reporting | Paid |
| **Brandwatch** | Social listening — brand mentions across all platforms | Paid |
| **TikTok Analytics** | Video performance, profile analytics | Free (requires access) |

---

## Step 2: Platform Inventory

| Platform | Profile URL | Claimed/Verified? | Followers | Posts (last 30 days) | Profile Complete? | NAP Match GBP? |
|----------|------------|-------------------|-----------|---------------------|-----------------|---------------|
| Facebook | | Yes/No | | | ✅/❌ | ✅/❌ |
| Instagram | | Yes/No | | | ✅/❌ | ✅/❌ |
| LinkedIn Company | | Yes/No | | | ✅/❌ | ✅/❌ |
| YouTube | | Yes/No | | | ✅/❌ | N/A |
| Twitter/X | | Yes/No | | | ✅/❌ | ✅/❌ |
| TikTok | | Yes/No | | | ✅/❌ | N/A |
| Pinterest | | Yes/No | | | ✅/❌ | N/A |
| Nextdoor (Business) | | Yes/No | | | ✅/❌ | ✅/❌ |
| [Industry-specific] | | Yes/No | | | ✅/❌ | ✅/❌ |

**Priority platforms by business type (focus audit on these):**
| Business Type | Priority Platforms | Why |
|-------------|-------------------|-----|
| Home services | Facebook, Instagram, Nextdoor, YouTube | Visual work, local community |
| Legal | LinkedIn, Facebook | Professional credibility |
| Healthcare/dental | Facebook, Instagram, LinkedIn | Patient trust, professional image |
| Restaurants | Instagram, Facebook, TikTok, Google Photos | Visual, discovery |
| B2B / professional | LinkedIn, YouTube | Thought leadership |
| Retail | Instagram, Facebook, Pinterest, TikTok | Visual shopping |
| Automotive | Facebook, Instagram, YouTube | Visual showcase |

---

## Step 3: Profile Completeness Audit (Top 3 Platforms)

### Facebook Business Page
| Check | Pass/Fail |
|-------|----------|
| Business Page (not personal profile) | ✅/❌ |
| Profile + cover photo (branded, high quality, correct dimensions) | ✅/❌ |
| "About" section: services, hours, address, phone | ✅/❌ |
| Website URL linking to correct page | ✅/❌ |
| Facebook Reviews enabled and monitored | ✅/❌ |
| CTA button configured (Book Now / Contact Us / Call Now) | ✅/❌ |
| Posts at least weekly (check last 4 posts) | ✅/❌ |
| Messenger response rate ≥90% and <15 min response | ✅/❌ |

### Instagram Business Account
| Check | Pass/Fail |
|-------|----------|
| Business account (not creator or personal) | ✅/❌ |
| Bio: service + location keyword + CTA + link | ✅/❌ |
| Profile photo matches other platforms | ✅/❌ |
| 12+ quality feed posts showing work | ✅/❌ |
| Stories active (last 7 days) | ✅/❌ |
| Reels published (reach 5–10× feed posts) | ✅/❌ |
| Highlights with service categories | ✅/❌ |
| Location tagged on posts | ✅/❌ |

### YouTube Channel (Highest SEO Value of All Social Platforms)
| Check | Pass/Fail |
|-------|----------|
| Channel created with custom URL | ✅/❌ |
| Channel art (2560×1440px), logo (800×800px), description keyword-rich | ✅/❌ |
| Videos: keyword-first titles ("How to Fix a Leaky Tap — [City] Plumber") | ✅/❌ |
| Descriptions: 500+ chars, keyword-rich, with timestamps | ✅/❌ |
| Custom thumbnails (high contrast, face/text readable at 120px) | ✅/❌ |
| Playlists organized by service/topic | ✅/❌ |
| Videos embedded on relevant website service pages | ✅/❌ |
| VideoObject schema on pages with embedded videos | ✅/❌ |
| Chapters/timestamps in all videos ≥5 min | ✅/❌ |
| Cards and end screens driving to website | ✅/❌ |

### LinkedIn Company Page (Professional/B2B Services)
| Check | Pass/Fail |
|-------|----------|
| Company page (not personal profile) with 100% completion | ✅/❌ |
| Industry, company size, founded date, specialties filled | ✅/❌ |
| Website URL correct | ✅/❌ |
| Logo (300×300px) and banner (1128×191px) | ✅/❌ |
| Weekly posts (mix: insights, projects, team) | ✅/❌ |
| Employees linked to company page | ✅/❌ |
| Services listed | ✅/❌ |

---

## Step 4: Brand Consistency Audit

Inconsistencies across platforms = entity fragmentation = weaker Knowledge Graph.

| Element | GBP | Facebook | Instagram | LinkedIn | YouTube | Consistent? |
|---------|-----|---------|----------|---------|---------|------------|
| Business name (exact) | | | | | | ✅/❌ |
| Profile/logo image | | | | | | ✅/❌ |
| Phone number (format) | | | | | | ✅/❌ |
| Website URL | | | | | | ✅/❌ |
| Business description (core messaging) | | | | | | ✅/❌ |
| Hours (matching GBP) | | | | | | ✅/❌ |

**sameAs schema check:** Are all social profiles linked in website LocalBusiness schema?

Current sameAs coverage (needed for entity consolidation):
```json
"sameAs": [
  "https://facebook.com/[handle]",
  "https://instagram.com/[handle]",
  "https://linkedin.com/company/[slug]",
  "https://youtube.com/@[handle]",
  "https://twitter.com/[handle]"
]
```
Missing from sameAs: [list missing platforms]

---

## Step 5: Content Strategy Assessment

### Content Mix Analysis (Last 30 Posts — Primary Platform)
| Content Type | Current Count | Current % | Target % |
|-------------|-------------|----------|---------|
| Educational (how-to, tips, explainers) | | | 35–40% |
| Social proof (reviews, before/after, testimonials) | | | 25–30% |
| Behind-the-scenes (team, process, culture) | | | 15–20% |
| Local community (events, news, local features) | | | 10–15% |
| Promotional (offers, sales, CTAs) | | | 5–10% |

**Effective local service content types (2025):**
- Before/after transformation posts (home services) — highest save rate
- "Myth vs. Fact" about your service — high share rate
- "Cost of [service]" posts — high search volume alignment
- "Day in the life" of technician/staff — builds E-E-A-T + trust
- Customer shoutout posts (with permission) — reviews amplified

### Content Quality Checklist (Primary Platform)
- [ ] Photos are professional quality or high-quality smartphone (well-lit, in focus)?
- [ ] Video shows team's expertise with real work scenarios?
- [ ] Consistent visual style (brand colors, logo watermark)?
- [ ] Captions keyword-rich with service + location mentioned?
- [ ] Relevant local hashtags used (5–15 per post)?
- [ ] Location tag on every post (boosts local discoverability)?

---

## Step 6: Engagement Rate Analysis (2025 Benchmarks)

**Formula:** `(Likes + Comments + Shares + Saves) / Followers × 100`

| Platform | Client Rate | Good (2025) | Excellent (2025) | Status |
|----------|------------|------------|-----------------|--------|
| Facebook | % | 1–3% | 3%+ | |
| Instagram | % | 2–5% | 5%+ | |
| LinkedIn | % | 0.5–1.5% | 1.5%+ | |
| TikTok | % | 5–10% | 10%+ | |
| YouTube (click-through) | % | 3–5% CTR | 5%+ CTR | |

**Community Engagement:**
- Business responds to comments? (Publicly, within 24 hours?)
- DMs answered within 24 hours? (Meta shows response rate publicly)
- Active brand advocates visible in comments?

---

## Step 7: Open Graph & Twitter Card Technical Audit

These tags control how pages look when shared on social — directly affect CTR of social shares.

### Audit Every Key Page (Use Facebook Sharing Debugger + Twitter Card Validator)

| Page | OG Title Set? | OG Image (1200×630)? | OG Description? | Twitter Card? |
|------|------------|---------------------|----------------|-------------|
| Homepage | ✅/❌ | ✅/❌ | ✅/❌ | ✅/❌ |
| [Service 1] | ✅/❌ | ✅/❌ | ✅/❌ | ✅/❌ |
| Blog/articles | ✅/❌ | ✅/❌ | ✅/❌ | ✅/❌ |
| Contact | ✅/❌ | ✅/❌ | ✅/❌ | ✅/❌ |

**Required tags:**
```html
<!-- Open Graph (Facebook, LinkedIn, WhatsApp, Slack) -->
<meta property="og:title" content="[Compelling page title — 60 chars]">
<meta property="og:description" content="[Summary — 150 chars]">
<meta property="og:image" content="[1200×630px image URL — absolute path]">
<meta property="og:url" content="[Canonical URL]">
<meta property="og:type" content="website">
<meta property="og:site_name" content="[Business Name]">

<!-- Twitter Card -->
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="[Title]">
<meta name="twitter:description" content="[Description]">
<meta name="twitter:image" content="[1200×600px image URL]">
<meta name="twitter:site" content="@handle">
```

---

## Step 8: Competitor Social Comparison

| Metric | Client | Comp 1 | Comp 2 | Comp 3 | Gap |
|--------|--------|--------|--------|--------|-----|
| Facebook followers | | | | | |
| Instagram followers | | | | | |
| Posts/month (primary platform) | | | | | |
| Avg engagement rate | | | | | |
| YouTube subscribers | | | | | |
| YouTube video count | | | | | |
| Platforms active on | | | | | |
| OG tags implemented? | | | | | |

---

## Priority Matrix

| Action | Impact (1–5) | Feasibility (1–5) | Priority | Effort |
|--------|-------------|-------------------|---------|--------|
| Add sameAs for all social profiles in schema | 4 | 5 | 20 | 30 min |
| Add OG tags to all key pages | 4 | 5 | 20 | 1–2 hrs |
| Configure Facebook CTA button | 3 | 5 | 15 | 10 min |
| Start weekly Facebook posts | 3 | 5 | 15 | 1 hr/week |
| Claim Nextdoor Business page | 3 | 5 | 15 | 30 min |
| Add location tags to all posts | 3 | 5 | 15 | Ongoing |
| Create first YouTube video (service explainer) | 4 | 3 | 12 | 4–8 hrs |
| Add VideoObject schema to video-embedded pages | 3 | 4 | 12 | 30 min/page |
| Optimize Instagram bio (location + CTA) | 3 | 5 | 15 | 15 min |
| Publish first Instagram Reel | 4 | 3 | 12 | 2–4 hrs |

---

## Scoring

| Category | Weight | Score |
|----------|--------|-------|
| Profile completeness — top 3 platforms | 25% | /25 |
| Brand consistency + sameAs schema coverage | 20% | /20 |
| Content quality and posting frequency | 20% | /20 |
| Engagement rate vs. platform benchmarks | 15% | /15 |
| OG/Twitter Card technical tags | 10% | /10 |
| YouTube SEO (if videos present) | 10% | /10 |

---

## Output

Write to `{AUDIT_DIR}/social-findings.md` with YAML frontmatter:

```yaml
---
skill: strategy/social-media-audit
phase: 13
date: [YYYY-MM-DD]
business: [Business Name]
url: [URL]
score: [X/100]
active_platforms: [X]
og_tags_implemented: [yes|no|partial]
sameAs_social_count: [X]
---
```

Include:
- Score X/100 with per-category breakdown
- Platform inventory table (all platforms, completeness status)
- Top 3 platform detailed audits (Facebook, Instagram, YouTube or LinkedIn)
- Content mix analysis (current % vs. target %)
- Engagement rate by platform vs. 2025 benchmarks
- Brand consistency gaps across platforms
- sameAs schema audit (present vs. missing)
- OG/Twitter Card audit (page-by-page)
- Competitor social comparison table
- Priority matrix (Impact × Feasibility scored)
- 30/90-day social media SEO action plan

**Output files:**
- `{AUDIT_DIR}/social-findings.md` — findings with score and platform-by-platform audit
- `{REPORTS_DIR}/phase-13-social.pdf` — auto-generated PDF after phase completes

**Key consumers:**
- `local/entity-audit` — sameAs connections feed entity strength
- `local/brand-serp` — social profiles appear in branded SERP
- `output/report-generation` — social score in master report section 13

---

## Recommendations Checklist

### Platform Optimization Priority Table

| Platform | Local Business Relevance | 2025 SEO Signal | Priority |
|---------|------------------------|----------------|----------|
| Google Business Profile | Critical (primary entity) | GBP posts, Q&A, review responses = ranking signal | 25 (5×5) |
| Facebook | High (local trust signal) | `sameAs` entity, reviews, local awareness ads | 20 (4×5) |
| LinkedIn | High (B2B + E-E-A-T) | Author entity, expertise signals for Knowledge Graph | 16 (4×4) |
| Instagram | Medium-High (visual services) | `sameAs` entity; VideoObject schema for Reels | 12 (3×4) |
| YouTube | High (if video content) | VideoObject schema, auto-transcription for SEO | 16 (4×4) |
| TikTok | Medium (2025 emerging) | VideoObject schema; AI-description training data | 9 (3×3) |

### Quick Wins (Week 1, <30 min each)
- [ ] Add all active social profiles to Organization schema `sameAs` array — Effort: 15 min — Priority: 20
- [ ] Standardize NAP (Name/Address/Phone) across all social profiles — Effort: 20 min — Priority: 20
- [ ] Answer all unanswered GBP Q&A questions — Effort: 20 min — Priority: 20
- [ ] Add business description to all social profiles (consistent with homepage) — Effort: 30 min
- [ ] Enable Google Reserve/Booking on GBP (if applicable) — Effort: 15 min — Priority: 16

### INP + Technical Notes
GBP and social profiles are entity signals, not direct technical SEO. However, social-driven traffic quality (dwell time, return visits) feeds Navboost behavioral signals. High-quality social content that sends engaged traffic = indirect INP/CWV improvement via reduced bounce rate and longer sessions.
