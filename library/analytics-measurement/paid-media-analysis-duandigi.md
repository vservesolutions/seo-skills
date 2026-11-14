---
name: "paid-media-analysis"
description: "Use this skill when analyzing Google Ads, Meta Ads, LinkedIn Ads, TikTok Ads, or other paid media from account totals down to campaign, ad group, audience, keyword, search term, creative, placement, landing page, qualified lead, revenue, and margin."
category: "analytics-measurement"
platforms: ["claude-code"]
platform_source: "declared+detected"
repo: "duandigi/duandigi-growth-marketing-skill"
repo_url: "https://github.com/duandigi/duandigi-growth-marketing-skill"
source: "https://github.com/duandigi/duandigi-growth-marketing-skill/blob/HEAD/skills/paid-media-analysis/SKILL.md"
raw_source: "https://raw.githubusercontent.com/duandigi/duandigi-growth-marketing-skill/HEAD/skills/paid-media-analysis/SKILL.md"
ref: "HEAD"
discovered_via: "github-search"
license: "MIT"
stars: 1
collected: "2026-11-14"
---

<!-- Claude Code skill · duandigi/duandigi-growth-marketing-skill · skills/paid-media-analysis/SKILL.md · MIT
     Source: https://github.com/duandigi/duandigi-growth-marketing-skill/blob/HEAD/skills/paid-media-analysis/SKILL.md
     Detected by: declared+detected · Regenerated on every run; edit the upstream skill, not this copy. -->

# Paid Media Analysis

## Purpose

Evaluate paid acquisition by both platform efficiency and downstream business quality while identifying waste, scale opportunities, saturation, and measurement risk.

## Inputs

- Spend, impressions, reach, clicks, delivery, conversion, and attribution data
- Campaign, ad group, keyword, search term, audience, creative, placement, device, location, and time dimensions
- Landing-page analytics and conversion events
- CRM qualification, sales, revenue, refund, and margin data where available
- Budgets, bidding constraints, policy limitations, and recent changes

If a required input is unavailable, label it **unknown**, state how it limits the decision, and create a collection, mapping, validation, or instrumentation task. Never invent credentials, assets, metrics, permissions, or business outcomes.

## Workflow

1. Validate account mapping, currency, attribution window, conversion actions, and data lag.
2. Analyze delivery, cost, click quality, conversion efficiency, qualified-outcome efficiency, and revenue efficiency separately.
3. Drill down to campaigns, targeting, queries or audiences, creatives, placements, devices, locations, times, and landing pages.
4. Detect wasted spend, low-volume uncertainty, creative fatigue, audience saturation, query mismatch, budget constraint, tracking loss, and lead-quality differences.
5. Compare platform-reported conversions with analytics and CRM outcomes without forcing equality.
6. Estimate whether an action is a measurement fix, negative targeting, creative test, landing-page test, budget reallocation, bid change, or stop decision.
7. Prepare changes as drafts and require approval before modifying spend or delivery.

## Required output

Return a concise, decision-oriented result containing:

- Paid-media health and efficiency summary
- Spend-to-qualified-outcome and revenue analysis
- Campaign, targeting, creative, and landing-page findings
- Measurement and attribution limitations
- Draft actions and experiments with budget risk and approval level

Label material statements as **confirmed**, **calculated**, **inferred**, **assumed**, or **unknown**. Include the data period, last complete period, source lineage, and confidence whenever they can change the decision.

## Guardrails

- Do not optimize only to platform conversion count when CRM quality is available.
- Do not pause or increase budgets based on one incomplete day or small sample.
- Do not automatically change bids, budgets, targeting, creative, or campaign status.
- Do not combine currencies or attribution windows without normalization.

- Do not claim guaranteed growth or present an estimate as observed fact.
- Do not reveal secrets, personal data, private provider payloads, or cross-project information.
- When an action can spend money, publish, contact people, alter access, modify production, or delete data, prepare an approval request instead of executing automatically.

## Completion check

Before finishing, verify that the output:

- answers a specific business or implementation decision;
- uses the correct organization, project, asset, date range, time zone, and currency;
- separates performance problems from data, connection, and attribution problems;
- includes evidence, uncertainty, affected scope, and a measurable next step;
- respects least privilege, approval, audit, and rollback requirements;
- is no longer than necessary for the decision.
