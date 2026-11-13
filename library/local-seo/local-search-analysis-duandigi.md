---
name: "local-search-analysis"
description: "Use this skill when analyzing Google Business Profile, map visibility, local landing pages, reviews, calls, directions, website clicks, locations, service areas, and local lead quality."
category: "local-seo"
platforms: ["claude-code"]
platform_source: "declared+detected"
repo: "duandigi/duandigi-growth-marketing-skill"
repo_url: "https://github.com/duandigi/duandigi-growth-marketing-skill"
source: "https://github.com/duandigi/duandigi-growth-marketing-skill/blob/HEAD/skills/local-search-analysis/SKILL.md"
raw_source: "https://raw.githubusercontent.com/duandigi/duandigi-growth-marketing-skill/HEAD/skills/local-search-analysis/SKILL.md"
ref: "HEAD"
discovered_via: "github-search"
license: "MIT"
stars: 1
collected: "2026-11-13"
---

<!-- Claude Code skill · duandigi/duandigi-growth-marketing-skill · skills/local-search-analysis/SKILL.md · MIT
     Source: https://github.com/duandigi/duandigi-growth-marketing-skill/blob/HEAD/skills/local-search-analysis/SKILL.md
     Detected by: declared+detected · Regenerated on every run; edit the upstream skill, not this copy. -->

# Local Search Analysis

## Purpose

Evaluate local discovery and conversion by location while distinguishing profile, website, review, service-area, operational, and tracking constraints.

## Inputs

- Business Profile assets, locations, categories, services, posts, photos, and performance data
- Review count, rating, velocity, topics, responses, and policy status
- Local landing pages, Search Console, analytics, calls, directions, and CRM outcomes
- Real service areas, physical locations, hours, staffing, and eligibility constraints

If a required input is unavailable, label it **unknown**, state how it limits the decision, and create a collection, mapping, validation, or instrumentation task. Never invent credentials, assets, metrics, permissions, or business outcomes.

## Workflow

1. Validate ownership, location mapping, profile status, category, hours, and service-area truth.
2. Analyze discovery, maps and search views, calls, directions, website clicks, review trends, and qualified local outcomes by location.
3. Compare profile activity with local queries, landing pages, devices, and operational capacity.
4. Detect profile incompleteness, review decline, listing conflicts, weak location pages, tracking gaps, and demand areas without real service coverage.
5. Separate brand, category, service, near-me, and location-modified demand where data permits.
6. Recommend profile, review, landing-page, tracking, or operational experiments.
7. Require policy review for listing, review, and location changes.

## Required output

Return a concise, decision-oriented result containing:

- Location and local-search health summary
- Profile, review, query, action, and landing-page findings
- Qualified local-outcome and coverage analysis
- Policy, ownership, and tracking limitations
- Prioritized local actions and experiments

Label material statements as **confirmed**, **calculated**, **inferred**, **assumed**, or **unknown**. Include the data period, last complete period, source lineage, and confidence whenever they can change the decision.

## Guardrails

- Do not create fake locations, virtual offices that violate policy, fake reviews, or misleading service areas.
- Do not compare locations without accounting for operating hours, capacity, market size, and tracking coverage.
- Do not infer call quality from call count alone.
- Do not generate near-duplicate local pages without unique operational value.

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
