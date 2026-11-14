---
name: "ai-agent-readiness"
description: "Execute the AI Agent-Readiness audit and sprint playbook (PLAY-004). Use when making a site usable by agentic browsers, AI shopping assistants, or chat-led SERPs. Triggers on \"agent readiness,\" \"agentic browser,\" \"selector contract,\" \"structured data parity,\" \"feed completeness,\" \"task URLs,\" \"Playwright testing,\" \"INP,\" \"TBT,\" \"modal friction,\" \"agent readiness score,\" or when a client needs their site to work with AI-powered browsing agents. Includes audit checklists, 15-day sprint plan, selector contract specs, test harnesses, and scoring rubric."
category: "structured-data"
platforms: ["claude-code"]
platform_source: "declared"
repo: "Branded-Mayhem-Collective-LLC/seo-visibility-toolkit"
repo_url: "https://github.com/Branded-Mayhem-Collective-LLC/seo-visibility-toolkit"
source: "https://github.com/Branded-Mayhem-Collective-LLC/seo-visibility-toolkit/blob/HEAD/skills/ai-agent-readiness/SKILL.md"
raw_source: "https://raw.githubusercontent.com/Branded-Mayhem-Collective-LLC/seo-visibility-toolkit/HEAD/skills/ai-agent-readiness/SKILL.md"
ref: "HEAD"
discovered_via: "github-search"
license: "MIT"
stars: 0
collected: "2026-11-14"
---

<!-- Claude Code skill · Branded-Mayhem-Collective-LLC/seo-visibility-toolkit · skills/ai-agent-readiness/SKILL.md · MIT
     Source: https://github.com/Branded-Mayhem-Collective-LLC/seo-visibility-toolkit/blob/HEAD/skills/ai-agent-readiness/SKILL.md
     Detected by: declared · Regenerated on every run; edit the upstream skill, not this copy. -->

# AI Agent-Readiness (PLAY-004)

Make sites usable by agentic browsers and chat-led SERPs. Browsers with embedded agents now navigate, click, and buy. Your site must be fast, scriptable, and machine-verifiable.

## Thesis

Winning shifts from discovery to action. Sites must be fast, scriptable, and machine-verifiable for agent task completion.

## When NOT to Use

- The site is mostly static and already crawlable with minimal JS. Agents can already read it — the audit will find little to fix.
- There are no transactional flows for agents to execute. No cart, booking, or forms means selector contracts and task URLs have nothing to point at.
- Traffic has no agent or AI-referral component yet AND the team can't act on the audit. A readiness report nobody implements is shelf-ware — wait until one of those changes.

## Offer Structure

### Starter Audit (72 hours)
- Agentability scan (CWV, JS cost, INP/TBT hotspots)
- DOM accessibility and selector stability review
- Structured data parity check vs feed
- Risk register and prioritized backlog

### 15-Day Agent Sprint
- Implement selector contract, schema, and deep links
- Kill top JS and modal blockers
- Ship Playwright tasks and Lighthouse CI
- Publish "Agent Readiness Report" with before/after

### Ongoing (Monthly)
- RUM (Real User Monitoring — field data from actual visitors, vs. synthetic lab tests) monitoring of LCP/INP/CLS and funnel KPIs
- Schema/Feed parity watchlist and Merchant Center QA
- Governance reviews and regression tests

## Audit Checklist (72 Hours)

### Performance & JS Cost
- INP under threshold sitewide
- TBT on PDP and cart under 200ms in lab
- Long tasks identified and split
- Third parties deferred or removed

### DOM, Accessibility, and Selectors
- All controls have role + accessible name
- No randomized IDs or hash-classes on key controls
- Stable `data-qa` attributes on critical elements
- Consent and promo modals dismissible via keyboard and labeled buttons

### Structured Data Sanity
- `WebSite` → `SearchAction` with `EntryPoint.urlTemplate`
- `Product` with `Offer` or `AggregateOffer`
- `OfferShippingDetails` with `ShippingDeliveryTime` where relevant
- Variant modeling verified

### Marketplace Parity
- Feed vs page vs JSON-LD values match for price, availability, condition
- Automatic Item Updates policy documented
- Shipping settings mirrored in both Merchant Center and JSON-LD

### Flow Reliability
- Steps to checkout minimized
- Task URLs documented for common intents
- Prefilled cart links available for top 3 bundles

## Implementation Sprint (15 Days)

**Days 1–3: Instrument and expose** — Ship JSON-LD on PDPs and list pages. Add `WebSite` → `SearchAction`. Add accessible names to top 20 controls. Turn on RUM for CWV + custom funnel events.

**Days 4–7: Kill the blockers** — Split bundles, defer third parties, remove dead widgets. Make consent and promo modals visible and dismissible. Stabilize selectors.

**Days 8–10: Task paths and deep links** — Publish "task URLs" to filtered results (in-stock, price caps, sizes). Create prefilled cart links for top configurations. Document in a private Agent Notes page.

**Days 11–15: Trials and proof** — Run 10 Playwright tasks that mimic agents. Record success rate and time-to-cart. Repeat in Atlas and AI-Mode browsers. Publish Agent Readiness Report.

## Selector Contract

- Prefer **role** and **name** selectors first.
- Provide explicit **data-qa** fallbacks on critical elements.
- Never randomize IDs/class names on key controls.
- Version the contract and store in `/docs/selector-contract.json`.

```json
{
  "version": "2025.10",
  "flows": {
    "pdp_add_to_cart": [
      {"step": "choose_size", "pref": "role", "selector": "getByRole('combobox', { name: 'Size' })"},
      {"step": "add_to_cart", "pref": "role", "selector": "getByRole('button', { name: 'Add to cart' })"}
    ],
    "checkout_start": [
      {"step": "open_cart", "pref": "role", "selector": "getByRole('link', { name: 'Cart' })"},
      {"step": "begin_checkout", "pref": "role", "selector": "getByRole('button', { name: 'Checkout' })"}
    ]
  }
}
```

### Playwright Task Example

One test per critical flow. Use the same role/name selectors the contract specifies — if the test breaks, an agent breaks.

```typescript
import { test, expect } from '@playwright/test';

test('agent path: select variant, add to cart, confirm', async ({ page }) => {
  await page.goto('https://example.com/products/trailrunner-2');

  // Select a variant the way an agent would — role + accessible name
  await page.getByRole('combobox', { name: 'Size' }).selectOption('10');
  await page.getByLabel('Color').selectOption('Slate');

  // Add to cart
  await page.getByRole('button', { name: 'Add to cart' }).click();

  // Assert a machine-verifiable success signal
  await expect(page.getByRole('status')).toContainText('Added to cart');
  await expect(page.getByRole('link', { name: 'Cart' })).toContainText('1');
});
```

## Structured Data Templates

### WebSite with SearchAction
```json
{
  "@context": "https://schema.org",
  "@type": "WebSite",
  "url": "https://example.com",
  "potentialAction": {
    "@type": "SearchAction",
    "target": {
      "@type": "EntryPoint",
      "urlTemplate": "https://example.com/search?q={search_term_string}"
    },
    "query-input": "required name=search_term_string"
  }
}
```

### Product with Offer and Delivery Windows
```json
{
  "@context": "https://schema.org",
  "@type": "Product",
  "sku": "TR-200",
  "name": "TrailRunner 2.0",
  "offers": {
    "@type": "Offer",
    "price": "129.99",
    "priceCurrency": "USD",
    "availability": "https://schema.org/InStock",
    "shippingDetails": {
      "@type": "OfferShippingDetails",
      "deliveryTime": {
        "@type": "ShippingDeliveryTime",
        "handlingTime": {"@type": "QuantitativeValue", "minValue": 0, "maxValue": 1, "unitCode": "d"},
        "transitTime": {"@type": "QuantitativeValue", "minValue": 2, "maxValue": 3, "unitCode": "d"}
      }
    }
  }
}
```

## Agent Readiness Score (0–100)

- 0–20: Crawler-only. Agents fail immediately.
- 21–50: Agent can browse, fails during filters or modals.
- 51–75: Agent reaches cart, parity issues remain.
- 76–90: Agent completes checkout reliably, minor parity issues.
- 91–100: Task URLs, deep links, and governance in place.

**Scoring inputs:** TBT on PDP/cart, INP p75, selector coverage, schema completeness, feed parity, modal friction rate, task success rate in Playwright suite.

## Data-Density Commerce (ACP Sub-Checklist)

- Feed refresh ≤ 15 minutes for price/stock
- Required + recommended fields ≥ 95% on top 20% SKUs
- 5,000-char descriptions structured as knowledge base
- `delivery_estimate` present on SKUs with fast methods
- Returns: live URL + explicit `return_window`
- Payment: ACP endpoints respond, totals math correct, idempotent

**Weekly KPI:** Feed completeness %, Answerability %, Description depth (avg chars).

## Backlog Template (MoSCoW)

**Must-have:** WebSite SearchAction JSON-LD, Product + Offer parity with feed, selector contract on PDP/cart/checkout, remove/defer 2 largest third-party scripts.

**Should-have:** Prefilled cart links for top 3 bundles, OfferShippingDetails with delivery windows, consent modal made accessible and keyboard dismissible.

**Could-have:** ReserveAction/BuyAction hints, task URLs for common filtered states.

**Won't-have (for now):** Full SPA rewrite.

## Governance

- Automatic Item Updates: enabled or disabled by policy with owner and review cadence.
- Bot friction: allow discovery and cart creation, challenge at payment only.
- Selector contract ownership: product owner maintains and versions each release.
- Agent identity: treat automation as first-class users with logging and permissions.
