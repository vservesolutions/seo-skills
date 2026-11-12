---
name: "growth-intelligence"
description: "Turn Ahrefs, Google Search Console, GA4, Microsoft Clarity, and the CRM into one reporting layer that ties rankings, traffic, and AI citation share to actual leads and revenue. Defines the metrics that map to pipeline, reconciles the sources, separates brand from non-brand, surfaces wins, risks, and anomalies, and produces an exec narrative with practitioner detail underneath. Use when someone wants an SEO or growth report, a dashboard, KPIs, performance tracking, or to connect organic and AI-search work to business outcomes. It reports outcomes, not activity."
category: "analytics-measurement"
platforms: ["unspecified"]
platform_source: "none"
repo: "avikbal-dm/claude-seo-skills"
repo_url: "https://github.com/avikbal-dm/claude-seo-skills"
source: "https://github.com/avikbal-dm/claude-seo-skills/blob/HEAD/plugins/growth-os/skills/growth-intelligence/SKILL.md"
raw_source: "https://raw.githubusercontent.com/avikbal-dm/claude-seo-skills/HEAD/plugins/growth-os/skills/growth-intelligence/SKILL.md"
ref: "HEAD"
discovered_via: "github-search"
license: "MIT"
stars: 1
collected: "2026-11-12"
---

<!-- Unspecified skill · avikbal-dm/claude-seo-skills · plugins/growth-os/skills/growth-intelligence/SKILL.md · MIT
     Source: https://github.com/avikbal-dm/claude-seo-skills/blob/HEAD/plugins/growth-os/skills/growth-intelligence/SKILL.md
     Detected by: none · Regenerated on every run; edit the upstream skill, not this copy. -->

# Growth Intelligence

## What this does

Most SEO reporting measures effort and calls it progress. This measures outcomes. It pulls every data source into one view, ties organic and AI-search performance to leads and revenue, and tells the story a leadership team needs in the first paragraph, with the detail a practitioner needs underneath.

A report exists to drive a decision. If a number does not change what someone does next, it does not belong in the report.

## When to use it

Use it to build a recurring report or dashboard, to define KPIs, to connect SEO and AI-search work to pipeline, or to investigate why a number moved. It closes the loop on every other module by confirming whether the work moved the business.

## Data you pull

- **Ahrefs**: rankings, visibility, referring domains, and AI citation share through Brand Radar.
- **Google Search Console**: clicks, impressions, CTR, and position, segmented by query and page.
- **GA4**: organic and AI-referred sessions, engagement, and key events, with the page paths that precede a lead.
- **Microsoft Clarity**: the experience signal behind the conversion numbers.
- **CRM or lead source**: the leads and their quality, which is the metric every other one should ladder up to.

## Method

### 1. Define metrics that map to pipeline

Start from the business question, not the available metric. The headline numbers are qualified leads from organic and AI search, and their movement. Rankings, citations, and traffic are supporting metrics that explain the headline, not replacements for it.

### 2. Separate brand from non-brand

Brand traffic flatters every average and hides the real work. Split it out everywhere, because a rise in branded clicks is a marketing result, not an SEO one, and mixing them tells a false story.

### 3. Reconcile the sources

The same metric reads differently across tools. Pick one source of truth per metric and state it, so the report does not drift as numbers disagree. Document the definitions, since an undefined metric becomes an argument later.

### 4. Tie visibility to leads

Connect the organic and AI-referred sessions through GA4 to the leads in the CRM. Attribution is imperfect, especially across AI surfaces that send no referrer, so state the assumptions plainly and present influenced as well as directly attributed demand.

### 5. Surface wins, risks, and anomalies

Do not just report levels. Flag what changed and why: a ranking gain on a commercial cluster, a CTR drop that signals a title or intent problem, a Core Web Vitals regression after a deploy, a competitor taking citation share. The anomalies are where the decisions live.

### 6. Track the system over time

Report the CITED layers and the flywheel as trends, and the share of voice against competitors across classic and AI search. The point is direction and momentum, not a single month's snapshot.

## Output

A two-layer report. An executive narrative first: what happened to leads and pipeline, why, and what to do next, in plain language. Then the practitioner detail underneath: the segmented metrics, the source of truth for each, the wins and risks, and the anomalies with their likely cause. Numbers framed as movement and ranges, never false precision.

## Speed to results

The reporting layer itself is fast to stand up. The trends it tracks are slow by nature, since SEO and AI visibility move over weeks and months. Use it to catch fast problems early, like a post-deploy regression, and to hold leadership's patience on the slow gains with honest direction.

## Guardrails

- Report outcomes, not activity. Effort is not progress.
- Separate brand from non-brand everywhere.
- One source of truth per metric, with the definition stated.
- Attribution is imperfect. State assumptions and show influenced demand, not just last-touch.
- No vanity metrics, and no false precision. Movement and ranges over decimals.

## Hands off to

Every module. `growth-intelligence` is where the loop closes: it tells `growth-audit` what to prioritize next, confirms whether `conversion-cro` and `ai-search-visibility` moved the number, and tracks the CITED flywheel `cited-framework` set in motion.

---

## About the author

Avik Bal is a B2B digital marketing practitioner specializing in web architecture, SEO, content strategy, and marketing analytics. He has helped enterprise software, fintech, and technology companies drive growth through scalable digital marketing programs. Avik is the author of *CITED: The Growth Operating System for AI Search*.

Part of the Growth Operating System. https://github.com/avikbal-dm/claude-seo-skills
