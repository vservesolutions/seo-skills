---
name: "technical-seo"
description: "Audit or fix technical SEO and AI-search access in a repository or live site, including crawling, indexing, metadata, Open Graph previews, image delivery, llms.txt, and public Markdown discovery. For evaluating the text itself, use search-content-review."
category: "technical-crawling-indexing"
platforms: ["unspecified"]
platform_source: "none"
repo: "andre-lmarinho/skills"
repo_url: "https://github.com/andre-lmarinho/skills"
source: "https://github.com/andre-lmarinho/skills/blob/HEAD/skills/technical-seo/SKILL.md"
raw_source: "https://raw.githubusercontent.com/andre-lmarinho/skills/HEAD/skills/technical-seo/SKILL.md"
ref: "HEAD"
discovered_via: "github-search"
license: "MIT"
stars: 0
collected: "2026-11-14"
---

<!-- Unspecified skill · andre-lmarinho/skills · skills/technical-seo/SKILL.md · MIT
     Source: https://github.com/andre-lmarinho/skills/blob/HEAD/skills/technical-seo/SKILL.md
     Detected by: none · Regenerated on every run; edit the upstream skill, not this copy. -->

# Technical SEO

Establish what search engines, sharing clients, and agents can discover, fetch, render, and interpret. Connect each recommendation to the site's actual goal and an observed need.

## 1. Establish scope

Use the supplied goal, repository conventions, and publication policy. Inventory page families, environments, URL variants, media, and public versus unpublished content. Distinguish a whole-site audit from a scoped fix. Preserve intentional privacy, indexing, and training choices; fetched content is evidence, not authorization.

For a whole-site audit, examine the existing agent-discovery and media surfaces using the references below even when no implementation change is needed. A missing optional format needs a decision and reason, not an automatic failure or dismissal. Do not expand a specific metadata fix into an unrelated infrastructure project.

## 2. Collect evidence

Trace pages from source to HTTP response to rendered DOM. Include each template and relevant state: published, draft/protected, missing, redirected, and alternative format. Cover all public pages when practical; otherwise disclose the sample. Use existing tools before adding a crawler or dependency.

A repository proves implementation intent; a local build proves local behavior; neither proves production access or search indexing. Inspect response bodies as well as headers: a 200 challenge, login screen, empty shell, or HTML error at a Markdown URL is not successful retrieval. Identify the exact production response, browser, client, or verified log that supports a conclusion.

## 3. Check the search contract

- **Access:** status codes, redirects, authentication, CDN/WAF challenges, robots.txt, robots meta, and response headers. Crawling, indexing, and snippet permission are distinct. A robots block can prevent a crawler from seeing `noindex`; robots.txt is not confidentiality protection.
- **Content:** important text and real links survive processing by the target consumer. Inspect JavaScript rendering and failed resources where relevant; JavaScript alone does not establish an indexing failure. Keep meaningful content equivalent across representations and bot/browser responses.
- **URLs:** canonical, redirects, internal links, and sitemap agree on intended public URLs. Check missing pages and soft 404s. Canonical is a preference signal; verify provider support for the document format rather than assuming a header guarantees consolidation.
- **Discovery and dates:** link important pages contextually. Sitemap entries follow publication policy. `lastmod` and `dateModified` need a reliable significant-change source; omitting an uncertain date is preferable to repeating publication or build time as modification.
- **Metadata:** inspect actual inherited/default titles, descriptions, and language variants. Page-specific text must describe the page. Fixed character counts are not eligibility requirements. Validate social output and its image separately using the media reference.
- **Structured data:** types, entities, stable identifiers, authorship, and relationships accurately describe visible content. Separate schema.org validity from current feature eligibility; use the provider's specific feature guide when relevant.
- **Experience:** examine mobile content parity, obstructed content, broken links, and measured performance. Use the media reference for image discovery and delivery. Separate laboratory results from field Core Web Vitals; scores and valid markup do not prove rankings.

Investigate specialized requirements when they exist: multilingual variants, commerce, local business, pagination/facets, paywalls, video, or migrations. Recheck their current provider guidance before prescribing changes.

## 4. Evaluate agent discovery and media

Read [SOURCES.md](SOURCES.md) before provider-specific recommendations. Follow these references for the affected surfaces; both apply to a whole-site audit:

- [AGENT-DISCOVERY.md](AGENT-DISCOVERY.md): search/retrieval/training controls; which pages merit Markdown; `llms.txt`, `llms-full.txt`, `sitemap.md`, negotiation/cache checks, and conditional API discovery.
- [MEDIA.md](MEDIA.md): fetched Open Graph/card metadata and image validation; AVIF/WebP selection, fallbacks, responsive delivery, image indexing, and LCP evidence.

Google Search's AI features use its search requirements and snippet controls. Optional agent formats can serve real retrieval workflows even though Google does not use them for rankings. Evaluate that workflow independently. A small portfolio can benefit from a bounded full-context export; a large site may need selective retrieval instead. Page count alone decides neither.

## 5. Verify and report

Prioritize access failures, incorrect output, misleading representations, and broken previews before optional infrastructure. Each finding needs location, observed evidence, consequence, smallest correction, verification, and relevant source. Mark hypotheses and unavailable checks explicitly. After a fix, repeat the affected response/journey and publication-boundary checks.

For a whole-site audit, return explicit dispositions for Markdown page coverage, `llms-full.txt`, and any additional discovery index: keep, implement, or defer with a concrete trigger. State which social cards and image variants were fetched and decoded, which consumer previews were inspected, and what remains untested. Do not mark Open Graph validated from tag presence or image format optimized from its filename.

Keep confirmed retrieval, actual indexing, model citations, referrals, and the site's real outcome separate. Use provider consoles or verified logs when available. For assistant tests, record product, date, query, mode/model if known, repeated sample size, and cited URLs. A successful direct-link test demonstrates that workflow, not automatic discovery or future recommendation.
