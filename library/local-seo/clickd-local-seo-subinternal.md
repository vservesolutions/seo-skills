---
name: "clickd-local-seo"
description: "Audits and fixes local SEO on a service or multi-location business website, including specific LocalBusiness subtype JSON-LD, crawlable NAP (name, street address, phone and hours) in HTML, service-area and city pages without doorway spam, and local rival benchmarking with clickd. Use when asked to improve local SEO, rank in a city or service area, add LocalBusiness schema, or fix clickd local business findings."
category: "local-seo"
platforms: ["unspecified"]
platform_source: "none"
repo: "subinternal/clickd"
repo_url: "https://github.com/subinternal/clickd"
source: "https://github.com/subinternal/clickd/blob/HEAD/skills/clickd-local-seo/SKILL.md"
raw_source: "https://raw.githubusercontent.com/subinternal/clickd/HEAD/skills/clickd-local-seo/SKILL.md"
ref: "HEAD"
discovered_via: "github-search"
license: "MIT"
stars: 1
collected: "2026-11-13"
---

<!-- Unspecified skill · subinternal/clickd · skills/clickd-local-seo/SKILL.md · MIT
     Source: https://github.com/subinternal/clickd/blob/HEAD/skills/clickd-local-seo/SKILL.md
     Detected by: none · Regenerated on every run; edit the upstream skill, not this copy. -->

<!-- subinternal:header -->
```
╭──────────────────────────────────────────────────────────────────╮
│        ▄                                                         │
│      ▄ █    clickd                                               │
│    ▄ █ █    local seo                                            │
│  ▄ █ █ █                                                         │
│                                                                  │
│  skill 2.3.0  ·  by subinternal  ·  clickd.com/skills/local-seo  │
╰──────────────────────────────────────────────────────────────────╯
```

Print this header once, exactly as it is, in a code block, as the first thing you show when this skill starts. Then go on.
<!-- /subinternal:header -->

# Local SEO

Make a local or multi-location business unmistakable to search engines, map packs and AI assistants by putting its real name, street address, phone number, hours, service areas and specific `LocalBusiness` subtype schema in crawlable HTML, and building city or location pages backed by real local facts.

What this does not do: spinning up dozens of near-identical city pages where only the town name is swapped is classic doorway abuse that Google demotes. Only build a dedicated page for a location or town when the business has a real office, licensed crew, completed jobs or specific service details there.

Connect to `https://clickd.com/mcp` (or `https://clickd.com/mcp/all`) to use `clickd_check`, `clickd_rivals`, `clickd_schema_create`, `clickd_citations`, `clickd_rescan` and `clickd_changes`. With no MCP setup, scan a site at `https://clickd.com/scan/example.com`.

## 1. Check current locations, NAP consistency and local rivals

Read how clickd sees the business's towns, contact signals and local competitors today.

- Call `clickd_check({ url, kind: "locations" })` on the site to see which cities, states, phone numbers and addresses clickd extracts from the live pages.
- Call `clickd_rivals({ site, view: "near" })` and `clickd_rivals({ site, view: "market" })` to benchmark the site against other businesses in the same line of work and area, and `clickd_citations({ site })` to see which local businesses AI assistants recommend when asked for this service in this city.
- Check the site's footer, contact page and config files to confirm the exact legal/trading name, street address (or service-area-only status), clickable `<a href="tel:+1...">` phone number and opening hours.

Verify: record the canonical business name, address, phone number, hours, `LocalBusiness` subtype and the list of towns or locations served.

## 2. Put crawlable NAP and specific LocalBusiness schema in templates

Keep the business's contact details in one central config file and render both the visible HTML and the JSON-LD from that single source.

- Render the business name, street address (if customers visit or the business displays its headquarters), `<a href="tel:...">` phone link, email and opening hours in plain server-rendered HTML in the footer and contact page, never trapped inside an image or client-only script.
- Use `clickd_schema_create({ kind: "LocalBusiness", url })` to generate JSON-LD using the most specific schema.org subtype that fits (`Dentist`, `Plumber`, `HVACBusiness`, `RoofingContractor`, `LegalService`, `AutoRepair`, `Restaurant`, `MedicalClinic`, `RealEstateAgent`, `AccountingService`), with `telephone`, `address` (`PostalAddress`), `geo` (`GeoCoordinates`), `openingHoursSpecification`, `areaServed` and `sameAs`.
- For a multi-location business with distinct branches, give each branch page its own `LocalBusiness` block with that branch's specific street address, phone number, hours and map coordinates.

Verify: `clickd_check({ url, kind: "locations" })` and `JSON.parse` confirm the visible NAP and `LocalBusiness` subtype schema match on the home, contact and branch pages.

## 3. Build genuine location and service pages without doorway spam

Structure service and city pages so each page answers local buyer questions with facts specific to that service and area.

- Give each core service its own dedicated page (`/services/panel-upgrade`, `/services/emergency-plumbing`) that names what is included, typical pricing or how quotes work, licensing/warranty details and the towns covered.
- Only create separate `/locations/<city>` or `/areas/<city>` pages for branches or primary towns where you can include real local substance: branch address or dispatch radius, local building codes or utility rules, completed project examples in that town, or specific services offered there.
- For smaller surrounding towns with no distinct local facts, list them clearly under an "Areas we serve" section on the main service or contact page and in `areaServed` rather than generating empty swap-the-city pages.

Verify: every location or service page has a unique `<title>`, `<h1>`, and area-specific facts, and is linked from the footer or areas-served hub.

## 4. Check live with clickd

Deploy the updates and verify that clickd's location and local business rules pass on the live site.

- Call `clickd_check({ url, kind: "locations" })` and `clickd_check({ url, kind: "agent" })` on the live domain.
- Call `clickd_rescan({ site, reason: "updated LocalBusiness schema, NAP and location pages" })`, poll `clickd_changes({ site, job })` until done, and log the work with `clickd_log_work`.

Verify: `clickd_changes({ site, job })` confirms the local business, phone, address and schema rules pass on the live site.

## Report back

```
Site: <domain>
Subtype & NAP source: <schema @type> read from <config file>
Locations detected by clickd_check: <towns and states>
Service & location pages updated: <paths>
Local rival standing: <score vs local rivals from clickd_rivals>
```

## Sources

- [Local Business Structured Data](https://developers.google.com/search/docs/appearance/structured-data/local-business): required and recommended `LocalBusiness` properties including `address`, `telephone`, `geo` and `openingHoursSpecification`.
- [Spam Policies for Google Web Search: Doorway Abuse](https://developers.google.com/search/docs/essentials/spam-policies#doorways): why multiple city or state pages with substantially similar content violate Google's doorway policy.
- [LocalBusiness Schema Vocabulary](https://schema.org/LocalBusiness): the official schema.org hierarchy of specific local business subtypes and `areaServed` definitions.
