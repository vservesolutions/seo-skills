---
name: "schema-builder"
description: "Generate valid JSON-LD structured data (schema.org) for a web page so AI systems and search engines can identify the entity behind it. Use this whenever the user wants schema markup, structured data, JSON-LD, rich results, or wants to tell AI/Google \"who you are\" — for an organization, person, product, article, or breadcrumb trail. Point Claude at a URL and it detects the entity type and outputs ready-to-paste markup."
category: "structured-data"
platforms: ["claude-code"]
platform_source: "declared"
repo: "howseen-ai/howseen-geo-skills"
repo_url: "https://github.com/howseen-ai/howseen-geo-skills"
source: "https://github.com/howseen-ai/howseen-geo-skills/blob/HEAD/schema-builder/SKILL.md"
raw_source: "https://raw.githubusercontent.com/howseen-ai/howseen-geo-skills/HEAD/schema-builder/SKILL.md"
ref: "HEAD"
discovered_via: "github-search"
license: "MIT"
stars: 2
collected: "2026-11-12"
---

<!-- Claude Code skill · howseen-ai/howseen-geo-skills · schema-builder/SKILL.md · MIT
     Source: https://github.com/howseen-ai/howseen-geo-skills/blob/HEAD/schema-builder/SKILL.md
     Detected by: declared · Regenerated on every run; edit the upstream skill, not this copy. -->

# schema-builder

Structured data is how you tell machines, unambiguously, what an entity *is* — the company, the author, the product. AI systems use it to resolve identity and pull confident facts.

## Steps

1. **Fetch the page** and detect the primary entity type: `Organization`, `Person`, `Product`, `Article`/`BlogPosting`, `LocalBusiness`, `SoftwareApplication`, or a `BreadcrumbList`. Pick the type that matches the page's real purpose.
2. **Extract real values from the page** — name, description, URL, logo, author, sameAs (social/official profiles), price, ratings if genuinely present. Never invent values. If a recommended field has no source on the page, leave it out and note it as a gap for the user to fill.
3. **Output valid JSON-LD** wrapped in a `<script type="application/ld+json">` block, ready to paste into the page `<head>`.
4. **Add `sameAs`** pointing to the entity's official profiles (LinkedIn, X, Crunchbase, Wikipedia) — this is one of the strongest signals for AI entity resolution.

## Notes to pass to the user

- **FAQPage**: Google removed FAQ rich results for most sites (7 May 2026), but the markup still helps AI Mode / AI Overviews understand Q&A content — keep it if the page is genuinely Q&A (see the `faq-schema` skill).
- Validate the output at `validator.schema.org` or Google's Rich Results Test before shipping.
- One entity per primary type per page. Don't stack `Organization` on a product page — link to it via `@id` instead.

## Output format

Give: (1) the JSON-LD block, (2) a plain-language list of what each field asserts, (3) any fields left blank because the page didn't provide a real value.

---

*Built by Raphaël Aubry, founder of Howseen (https://howseen.ai). Schema tells AI who you are. Whether AI then recommends you — and to whom, vs which competitors — is what Howseen tracks across every model. → https://howseen.ai*
