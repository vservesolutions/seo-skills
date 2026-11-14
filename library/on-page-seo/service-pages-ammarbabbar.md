---
name: "service-pages"
description: "Use when the user wants to create, plan, rewrite or optimize a service page (money page) for a local service business, such as roof repair, AC installation, junk removal, plumbing or real estate services, or asks why a service page does not rank or convert. Gives a proven structure, on-page SEO, trust elements, CTAs and schema for one service per page."
category: "on-page-seo"
platforms: ["claude-code"]
platform_source: "declared"
repo: "AmmarBabbar/seo-skills"
repo_url: "https://github.com/AmmarBabbar/seo-skills"
source: "https://github.com/AmmarBabbar/seo-skills/blob/HEAD/skills/service-pages/SKILL.md"
raw_source: "https://raw.githubusercontent.com/AmmarBabbar/seo-skills/HEAD/skills/service-pages/SKILL.md"
ref: "HEAD"
discovered_via: "github-search"
license: "MIT"
stars: 0
collected: "2026-11-14"
---

<!-- Claude Code skill · AmmarBabbar/seo-skills · skills/service-pages/SKILL.md · MIT
     Source: https://github.com/AmmarBabbar/seo-skills/blob/HEAD/skills/service-pages/SKILL.md
     Detected by: declared · Regenerated on every run; edit the upstream skill, not this copy. -->

# Service Pages

Service pages are the money pages of a local business. They need to rank for "{service} {city}" searches and turn visitors into calls. You build each one around a single service and real proof.

## Before you start

1. Read `.agents/seo-context.md` for services, cities, USPs, proof and voice.
2. Confirm: the service, the primary keyword (usually "{service} {city}" or "{service}"), the CTA (call, quote form, booking) and urgency (emergency vs planned).
3. Check the SERP for the keyword: what do the top service pages include?

## Page structure

1. **Hero**: H1 like "{Service} in {City}", one-line value statement, phone button and quote button, 2-3 trust badges (licensed, insured, years, rating)
2. **Short intro**: what the service is, who it is for, the service area. Answer the main need fast.
3. **Problems we solve / signs you need this**: in the customer's words
4. **Our process**: 4-6 clear steps from first call to finished job
5. **Options / types**: materials, brands, methods (only real ones they offer)
6. **Pricing**: real ranges or the factors that affect price. Use `[CLIENT TO PROVIDE]` if no real numbers.
7. **Why choose us**: proof, not adjectives: warranty terms, certifications, response time, project count
8. **Recent projects**: photos with short captions (location, problem, result)
9. **Reviews**: 2-4 real reviews that mention this service
10. **Service areas**: list of areas with links to priority location pages
11. **FAQs**: real questions from customers and People Also Ask
12. **Final CTA**: phone, form, what happens next

## On-page SEO

- Title: `{Service} in {City} | {Brand}` (about 60 characters)
- Meta description: specific offer + proof + CTA (about 155 characters)
- URL: `/services/{service}/`
- Primary keyword in the title, H1, intro and one H2. Write naturally after that.
- Internal links: from the homepage, the services hub, related blog posts and location pages
- Schema: `Service` (with `provider` and `areaServed`) + `BreadcrumbList`

## Conversion

- Phone number clickable and visible on mobile at all times (sticky header or bottom bar)
- Short form (name, phone, service, zip, message)
- Trust near every CTA
- Fast loading, real photos instead of stock photos

## Rules

- One core service per page. Do not merge "roof repair" and "roof replacement" if they have separate demand.
- Do not invent warranties, licenses, prices or review quotes.
- Avoid copy-pasting the same page for every service with the words swapped.

## Output

1. Title, meta description, URL, H1
2. Full page copy in Markdown following the structure
3. `[CLIENT TO PROVIDE]` list
4. Image list with alt text
5. Internal link plan
6. JSON-LD schema

## Related skills

`seo-content-writing`, `on-page-seo`, `location-pages`, `schema-markup`, `content-brief`
