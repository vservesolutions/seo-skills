---
name: "seo-channel-analysis"
description: "Use this skill when analyzing organic search performance from Search Console, analytics, crawling, landing pages, queries, local visibility, content groups, conversions, qualified leads, and revenue."
category: "analytics-measurement"
platforms: ["claude-code"]
platform_source: "declared+detected"
repo: "duandigi/duandigi-growth-marketing-skill"
repo_url: "https://github.com/duandigi/duandigi-growth-marketing-skill"
source: "https://github.com/duandigi/duandigi-growth-marketing-skill/blob/HEAD/skills/seo-channel-analysis/SKILL.md"
raw_source: "https://raw.githubusercontent.com/duandigi/duandigi-growth-marketing-skill/HEAD/skills/seo-channel-analysis/SKILL.md"
ref: "HEAD"
discovered_via: "github-search"
license: "MIT"
stars: 1
collected: "2026-11-14"
---

<!-- Claude Code skill · duandigi/duandigi-growth-marketing-skill · skills/seo-channel-analysis/SKILL.md · MIT
     Source: https://github.com/duandigi/duandigi-growth-marketing-skill/blob/HEAD/skills/seo-channel-analysis/SKILL.md
     Detected by: declared+detected · Regenerated on every run; edit the upstream skill, not this copy. -->

# Seo Channel Analysis

## Purpose

Diagnose organic-search growth, decline, opportunity, quality, and business impact from portfolio summary to query and URL detail.

## Inputs

- Search Console query, page, device, country, and search-appearance data
- Analytics landing sessions, engagement, events, and conversions
- Crawl, indexation, canonical, sitemap, internal-link, and structured-data evidence
- CRM qualified leads, sales, and revenue where available
- Content groups, intent, brand versus non-brand rules, and known site changes

If a required input is unavailable, label it **unknown**, state how it limits the decision, and create a collection, mapping, validation, or instrumentation task. Never invent credentials, assets, metrics, permissions, or business outcomes.

## Workflow

1. Validate property mapping, date completeness, search type, and analytics tracking.
2. Separate brand and non-brand, informational and commercial, new and decaying, local and non-local demand.
3. Analyze clicks, impressions, CTR, position, landing sessions, contact rate, qualified-lead rate, and revenue contribution.
4. Detect query-page conflicts, high-impression low-CTR opportunities, positions with realistic upside, content decay, and technical constraints.
5. Trace important query groups through landing pages to qualified business outcomes where possible.
6. Distinguish demand change, ranking change, snippet change, indexation change, tracking change, and conversion change.
7. Prioritize technical repairs, content updates, internal linking, consolidation, new coverage, and CRO experiments.

## Required output

Return a concise, decision-oriented result containing:

- SEO performance and business-impact summary
- Query, landing-page, cluster, device, and geography findings
- Technical, content, intent, and conversion diagnoses
- Confirmed opportunities and measurement gaps
- Prioritized SEO and CRO actions with evidence

Label material statements as **confirmed**, **calculated**, **inferred**, **assumed**, or **unknown**. Include the data period, last complete period, source lineage, and confidence whenever they can change the decision.

## Guardrails

- Do not treat average position as a precise rank for every user.
- Do not call all ranking changes algorithm updates.
- Do not create near-duplicate local or programmatic pages without unique value and real service relevance.
- Do not claim content or schema caused growth without a suitable comparison.

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
