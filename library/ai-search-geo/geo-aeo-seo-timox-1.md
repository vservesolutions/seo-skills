---
name: "geo-aeo-seo"
description: "GEO, AEO, and SEO fundamentals for AI visibility and citation on any website. Use for AI SEO, content structure, featured snippets, ChatGPT/Perplexity/AIO/Yandex Alice citations, vc.ru RU market. NOT for full technical SEO crawl (use seo-audit) or deep GEO bots/citability (use seo-geo). Triggers: GEO, AEO, AI SEO, AI citations, optimize for ChatGPT, zero-click."
category: "ai-search-geo"
platforms: ["claude-code"]
platform_source: "declared+detected"
repo: "Timox-1/geo-aeo-seo-skill"
repo_url: "https://github.com/Timox-1/geo-aeo-seo-skill"
source: "https://github.com/Timox-1/geo-aeo-seo-skill/blob/HEAD/SKILL.md"
raw_source: "https://raw.githubusercontent.com/Timox-1/geo-aeo-seo-skill/HEAD/SKILL.md"
ref: "HEAD"
discovered_via: "github-search"
license: "MIT"
stars: 1
collected: "2026-11-13"
---

<!-- Claude Code skill · Timox-1/geo-aeo-seo-skill · SKILL.md · MIT
     Source: https://github.com/Timox-1/geo-aeo-seo-skill/blob/HEAD/SKILL.md
     Detected by: declared+detected · Regenerated on every run; edit the upstream skill, not this copy. -->

# GEO · AEO · SEO — AI visibility & citation

Optimize **citability** in Google AI Overviews, ChatGPT, Perplexity, Claude, Gemini, and Copilot.

**Do not confuse with:**
- **`seo-audit`** / **`seo-technical`** — crawl, canonical, CWV, robots, sitemap
- **`seo-geo`** — technical GEO (llms.txt, AI bots, citability score)
- **`seo-local`** — GBP, NAP, maps

**Recommended order on a new site:**
1. `seo-audit` or at minimum a curl pass (SSR, canonical, bots) — see [empirical-lessons.md](references/empirical-lessons.md)
2. **This skill** — content, authority, external channels
3. `seo-geo` — if you need formal citability scoring + llms.txt vs HTML facts-page decision

---

## Before Starting

Ask (if unclear):
1. Target queries (10–20)
2. Business type (SaaS / local / e-commerce / publisher)
3. Any citation measurements today?
4. SSR or SPA on money pages?

---

## Three pillars

```
1. Structure  — extractable blocks (definitions, FAQ, tables)
2. Authority  — stats, experts, E-E-A-T, freshness
3. Presence   — third-party (reviews, aggregators, media), not only own site
```

---

## AI Visibility Audit (content-side)

### Step 1 — Test queries across platforms

| Query | Google AIO | ChatGPT | Perplexity | Cited? | Who? |
|-------|:----------:|:-------:|:----------:|:------:|------|

Query types: «What is [category]», «Best [X] for [use case]», «[Brand] vs [competitor]», local «[service] in [city]».

### Step 2 — Extractability checklist

| Check | Pass? |
|-------|-------|
| Direct answer in first paragraph (40–60 words)? | |
| Self-contained blocks 134–167 words? | |
| H2 match query phrasing? | |
| FAQ + FAQPage schema? | |
| Stats with named sources? | |
| Named author (Person), not only Organization? | |
| Updated within 6 months? | |
| AI bots allowed in robots.txt? | |
| **HTML facts-page** (not only llms.txt)? | |

### Step 3 — Technical red flags (defer to seo-audit)

- Empty canonical / missing og:url
- Prices only in JSON, not SSR HTML
- CSR on key landing pages
- JS redirect breaking city/subdomain URLs

---

## Content optimization

**Block templates:** [references/content-patterns.md](references/content-patterns.md)

**Princeton GEO boosts (use, don't keyword-stuff):**
- Cite sources +40% · Statistics +37% · Expert quotes +30%
- Fluency + stats = best combo · Keyword stuffing **−10%**

**Platform specifics:** [references/platform-ranking-factors.md](references/platform-ranking-factors.md)

**Empirical rules:** [references/empirical-lessons.md](references/empirical-lessons.md)

**RU market (Yandex Alice, vc.ru, aggregators):** [references/ru-market.md](references/ru-market.md) — **read for any `.ru` site or RU-language strategy**

### llms.txt — nuanced (NOT "always add")

| Site type | Primary channel |
|-----------|-----------------|
| Brand / local business | **HTML facts-page** + optional llms.txt |
| Developer docs | llms.txt index + HTML |
| SaaS with hidden pricing | `/pricing.md` or SSR pricing |

**Never** treat llms.txt alone as GEO success without citation measurement.

---

## External channels (often #1)

- Aggregators & review sites (local niches)
- **RU:** vc.ru, Habr, TenChat, 2GIS, Yandex Maps — see [ru-market.md](references/ru-market.md)
- Industry media, forums, Q&A (Reddit, YouTube, Wikipedia)
- Named experts (Person) > brand self-authorship

For providers/local services: **~67% of AI sources are third-party** — your site verifies facts; aggregators often win the SERP.

---

## Schema (recommend, implement via seo-schema)

FAQPage, Article (+ author Person, image), Product/Offer on commercial pages, Organization.

Validate URLs in schema — **curl logo/image → 200**.

---

## Monitoring

- **DIY:** 20 queries/month × ChatGPT + Perplexity + Google
- **Tools (optional):** Otterly, Peec, Profound, or any GEO monitoring SaaS
- Track: cited / not, page URL, sentiment

---

## Output format

1. Current visibility summary (table)
2. Technical blockers → handoff to seo-audit
3. Content fixes (prioritized)
4. External channel plan
5. Next measurement date

---

## Related

- [content-patterns.md](references/content-patterns.md)
- [platform-ranking-factors.md](references/platform-ranking-factors.md)
- [empirical-lessons.md](references/empirical-lessons.md)
- [ru-market.md](references/ru-market.md)
- Companion skills: `seo`, `seo-geo`, `seo-audit`, `seo-schema`, `seo-local`
