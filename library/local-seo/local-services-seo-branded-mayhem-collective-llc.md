---
name: "local-services-seo"
description: "Execute the Local Services city-by-service matrix playbook (PLAY-003). Use when building city/service landing pages, local SEO architecture, provider directories, or lead routing systems. Triggers on \"city pages,\" \"local SEO,\" \"service area pages,\" \"provider directory,\" \"describe your job form,\" \"lead routing,\" \"round robin,\" \"JSON-LD LocalBusiness,\" \"city-by-service matrix,\" or when scaling one service across multiple metros."
category: "local-seo"
platforms: ["claude-code"]
platform_source: "declared"
repo: "Branded-Mayhem-Collective-LLC/seo-visibility-toolkit"
repo_url: "https://github.com/Branded-Mayhem-Collective-LLC/seo-visibility-toolkit"
source: "https://github.com/Branded-Mayhem-Collective-LLC/seo-visibility-toolkit/blob/HEAD/skills/local-services-seo/SKILL.md"
raw_source: "https://raw.githubusercontent.com/Branded-Mayhem-Collective-LLC/seo-visibility-toolkit/HEAD/skills/local-services-seo/SKILL.md"
ref: "HEAD"
discovered_via: "github-search"
license: "MIT"
stars: 0
collected: "2026-11-14"
---

<!-- Claude Code skill · Branded-Mayhem-Collective-LLC/seo-visibility-toolkit · skills/local-services-seo/SKILL.md · MIT
     Source: https://github.com/Branded-Mayhem-Collective-LLC/seo-visibility-toolkit/blob/HEAD/skills/local-services-seo/SKILL.md
     Detected by: declared · Regenerated on every run; edit the upstream skill, not this copy. -->

# Local Services — City-by-Service Matrix (PLAY-003)

Pick one service, multiply it across ten cities with lean, useful pages that convert. Each page earns trust with a unique local intro, a mini directory, and a fast "Describe your job" form. Structured data makes the pages machine-readable.

## When NOT to Use

- The service is B2B or geographically agnostic. City pages add nothing when buyers don't search by city.
- Single-location business with no expansion plan. Standard local SEO — Google Business Profile, one location page, reviews — covers it without a matrix.
- You can't vet providers or route leads. Without a real directory or a working form, the pages are thin doorway pages and will read like it.

## Core Loop

1. Pick one service × ten cities with clean, consistent URLs.
2. Clone a simple page template that is actually useful at the city level.
3. Add JSON-LD so search and LLMs understand the content.
4. Ship a phone-friendly form with clear consent and round-robin routing.
5. Track submissions, provider response, and close rates. Iterate weekly.

## Principles

1. **One service, many cities.** Narrow the offer, scale the footprint.
2. **Every page useful on its own.** Unique intro plus real providers beats thin doorway pages.
3. **Human + machine readable.** Plain language on the page, JSON-LD under the hood.
4. **Consent is explicit.** Lead sharing and outreach require clear permission.
5. **Routes not silos.** Round-robin or rules-based routing keeps providers engaged and response times low.

## Information Architecture

- **Slug pattern:** `/{state}/{city-slug}/{service-slug}/`
  - Examples: `/tx/dallas/pool-cleaning/`, `/tx/plano/pool-cleaning/`
- **Canonical:** each page canonicalizes to itself.
- **Hubs:** optional `/{state}/{service-slug}/` hub that links to all cities.
- **Sitemap:** include every city page; avoid orphans.

## Page Template

**Title/H1:** "{Service} in {City}, {ST}"

**Intro (100–150 words):** seasonal context, common issues, notable neighborhoods. Write uniquely for each city.

**Mini directory:** 5–20 providers with name, phone, hours, areas served.

**CTA:** "Describe your job" form, above the fold on mobile.

**Optional adds:** embedded map, 3-bullet "How {service} works in {City}," 1–2 local FAQs, "List your business" link.

## Structured Data (JSON-LD)

### If listing providers on the page — ItemList of LocalBusiness:

```json
{
  "@context":"https://schema.org",
  "@type":"ItemList",
  "name":"Pool Cleaning in Dallas, TX",
  "itemListElement":[
    {
      "@type":"ListItem","position":1,
      "item":{
        "@type":"LocalBusiness",
        "name":"Bluefin Pool Service",
        "url":"https://example.com/bluefin",
        "telephone":"+1-214-555-0101",
        "address":{"@type":"PostalAddress","addressLocality":"Dallas","addressRegion":"TX"},
        "areaServed":"Dallas, TX",
        "openingHours":"Mo-Fr 08:00-18:00"
      }
    }
  ]
}
```

### If no providers yet — Service block:

```json
{
  "@context":"https://schema.org",
  "@type":"Service",
  "serviceType":"Pool Cleaning",
  "areaServed":{"@type":"City","name":"Dallas"},
  "providerMobility":"dynamic",
  "hasOfferCatalog":{
    "@type":"OfferCatalog",
    "name":"Pool Cleaning Services",
    "itemListElement":[
      {"@type":"Offer","name":"Weekly Cleaning"},
      {"@type":"Offer","name":"Green-to-Clean"},
      {"@type":"Offer","name":"Repair"}
    ]
  }
}
```

**Optional enhancements:** BreadcrumbList for nav context, FAQPage if real FAQs are on the page.

## "Describe Your Job" Form

**Fields:** ZIP, job type, urgency, budget range, free-text details, photos (optional), name, phone, email.

**UX:** One screen on mobile with progressive disclosure. Large inputs, numeric keypad for ZIP and budget. Inline errors. "Save and finish later" via magic code.

**Routing:** Round-robin to 3 providers per city. Throttle to avoid spamming laggards. Log: submission, provider alerts, responses, acceptance, job outcome.

**Consent line (place directly above button):**
> By submitting, you agree we may share your request with up to three providers. You consent to them contacting you at the number and email provided. Message and data rates may apply. You can opt out anytime.

## Content & SEO Guardrails

- Each city page gets a unique 100–150 word intro with real place context.
- Include a real list, map or service-area note, and "How it works here" section.
- Keep structured data valid and in sync with visible content.
- Let crawlers access pages. Avoid noindex unless stub.
- Link city pages from a hub and nav to avoid orphaning.
- Fast loads and stable layout on mobile.

## Intro Scaffold Template

"{City} summers push pools hard. Most {Neighborhood A} and {Neighborhood B} homes see algae bloom after storms, and late-fall leaf drop clogs skimmers. Our local providers handle weekly cleaning, green-to-clean recovery, and repairs. If you need same-day help, say so in the form and we will route to crews that cover {ZIP A}, {ZIP B}, and nearby."

## Category Adaptations

- **Home painting:** "Color consult in {City}, {ST}" with neighborhoods and HOA notes.
- **Plumbing:** "Emergency plumber in {City}" with after-hours flag and SLA notes.
- **Landscaping:** seasonal water restrictions and drought-tolerant options.
- **MSP / IT:** service areas by ZIP clusters, response-time windows, on-site radius.

## Metrics

**Acquisition:** page views by city, map interactions, form starts.
**Conversion:** form completions, completion rate, phone taps.
**Routing:** time to first provider view, time to first response, acceptance rate.
**Revenue:** close rate by city, average job value, lead-to-job cycle time.
**Quality:** complaint rate, opt-out rate, duplicate-lead rate.

## Ops Runbook

- Weekly: verify provider phones and hours, remove dead listings, add 2 new providers per city.
- Monthly: rotate or expand FAQs based on form submissions.
- Quarterly: recycle intros with fresh seasonal context.

## Ship Checklist

- [ ] 10 URLs with consistent slugs
- [ ] Unique 100–150 word city intro on each
- [ ] Provider list or "submit your business" placeholder
- [ ] JSON-LD added (ItemList + LocalBusiness or Service)
- [ ] Job form + consent + round-robin routing to 3 providers
- [ ] Linked from hub or nav (no orphans)
- [ ] Validated in structured-data tester and live URL inspection
