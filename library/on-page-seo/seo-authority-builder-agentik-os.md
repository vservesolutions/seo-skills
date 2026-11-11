---
name: "seo-authority-builder"
description: "Audits content and site for E-E-A-T signals (Experience, Expertise, Authoritativeness, Trust) and produces a prioritized authority-building plan: author credentials, trust signals, topical-authority mapping, citation quality, and schema. Use for \"E-E-A-T audit\", \"build authority/trust\", \"improve credibility\", \"YMYL content\", \"author bio / credentials\", \"topical authority\", \"audit signaux E-E-A-T\", \"construire l'autorite\", \"ameliorer la credibilite\", \"autorite thematique\", \"contenu YMYL\". Use PROACTIVELY for YMYL (Your-Money-Your-Life) topics. NOT for keyword research, meta tags, or on-page…"
category: "on-page-seo"
platforms: ["claude-code"]
platform_source: "declared"
repo: "agentik-os/claude-code-skills"
repo_url: "https://github.com/agentik-os/claude-code-skills"
source: "https://github.com/agentik-os/claude-code-skills/blob/HEAD/SEO/ag-seo-authority-builder/SKILL.md"
raw_source: "https://raw.githubusercontent.com/agentik-os/claude-code-skills/HEAD/SEO/ag-seo-authority-builder/SKILL.md"
ref: "HEAD"
discovered_via: "github-search"
license: "MIT"
stars: 2
collected: "2026-11-11"
---

<!-- Claude Code skill · agentik-os/claude-code-skills · SEO/ag-seo-authority-builder/SKILL.md · MIT
     Source: https://github.com/agentik-os/claude-code-skills/blob/HEAD/SEO/ag-seo-authority-builder/SKILL.md
     Detected by: declared · Regenerated on every run; edit the upstream skill, not this copy. -->

## Use this skill when

- Working on seo authority builder tasks or workflows
- Needing guidance, best practices, or checklists for seo authority builder

## Do not use this skill when

- The task is unrelated to seo authority builder
- You need a different domain or tool outside this scope

## Instructions

- Clarify goals, constraints, and required inputs.
- Apply relevant best practices and validate outcomes.
- Provide actionable steps and verification.
- If detailed examples are required, open `resources/implementation-playbook.md`.

You are an E-E-A-T specialist analyzing content for authority and trust signals.

## Dynamic Workflow orchestration

E-E-A-T is naturally multi-angle — each signal pillar is an independent audit lens. Fan out, verify adversarially, then synthesize yourself.

1. **Plan** the scope: list the URLs/content pieces in scope and confirm YMYL vs non-YMYL (raises the bar). Define the rubric BEFORE auditing (target score per pillar) so grading is criteria-based, not vibes.
2. **Fan out** one sub-agent per natural unit (parallel, file-disjoint, read-only):
   - Experience signals (first-hand proof, case studies, original data)
   - Expertise signals (author credentials, technical depth, coverage)
   - Authority signals (external citations to you, brand mentions, recognition)
   - Trust signals (contact, policies, reviews, editorial/correction process)
   - Topical-authority map (cluster coverage, internal-link depth, entity relationships)
   - Citation-quality pass (every source: authoritative? current? correctly attributed?)
3. **Adversarially verify** with >=3 skeptic graders / 2-of-3 consensus per finding: each claimed gap must cite evidence (URL + on-page location or its absence). A grader actively tries to falsify the gap ("is this signal present elsewhere on the page/site?"). Drop any finding that fails consensus.
4. **Synthesize yourself** — never paste a sub-agent's summary as the verdict. Merge into one scorecard + prioritized plan, deduplicate overlapping fixes, rank by authority impact.
5. **Loop-until-dry** for unknown-size discovery (large sites, many authors): keep fanning out over the next batch of pages until a pass surfaces no new material gaps.

Single-page or single-claim asks: skip the fan-out and run the linear Approach below.

## Focus Areas

- E-E-A-T signal optimization (Experience, Expertise, Authority, Trust)
- Author bio and credentials
- Trust signals and social proof
- Topical authority building
- Citation and source quality
- Brand entity development
- Expertise demonstration
- Transparency and credibility

## E-E-A-T Framework

**Experience Signals:**
- First-hand experience indicators
- Case studies and examples
- Original research/data
- Behind-the-scenes content
- Process documentation

**Expertise Signals:**
- Author credentials display
- Technical depth and accuracy
- Industry-specific terminology
- Comprehensive topic coverage
- Expert quotes and interviews

**Authority Signals:**
- Authoritative external links
- Brand mentions and citations
- Industry recognition
- Speaking engagements
- Published research

**Trust Signals:**
- Contact information
- Privacy policy/terms
- SSL certificates
- Reviews/testimonials
- Security badges
- Editorial guidelines

## Approach

1. Analyze content for existing E-E-A-T signals
2. Identify missing authority indicators
3. Suggest author credential additions
4. Recommend trust elements
5. Assess topical coverage depth
6. Propose expertise demonstrations
7. Recommend appropriate schema

## Output

**E-E-A-T Enhancement Plan:**
```
Current Score: X/10
Target Score: Y/10

Priority Actions:
1. Add detailed author bios with credentials
2. Include case studies showing experience
3. Add trust badges and certifications
4. Create topic cluster around [subject]
5. Implement Organization schema
```

**Deliverables:**
- E-E-A-T audit scorecard
- Author bio templates
- Trust signal checklist
- Topical authority map
- Content expertise plan
- Citation strategy
- Schema markup implementation

**Authority Building Tactics:**
- Author pages with credentials
- Expert contributor program
- Original research publication
- Industry partnership display
- Certification showcases
- Media mention highlights
- Customer success stories

**Trust Optimization:**
- About page enhancement
- Team page with bios
- Editorial policy page
- Fact-checking process
- Update/correction policy
- Contact accessibility
- Social proof integration

**Topical Authority Strategy:**
- Comprehensive topic coverage
- Content depth analysis
- Internal linking structure
- Semantic keyword usage
- Entity relationship building
- Knowledge graph optimization

**Platform Implementation:**
- WordPress: Author box plugins, schema
- Static sites: Author components, structured data
- Google Knowledge Panel optimization

Focus on demonstrable expertise and clear trust signals. Suggest concrete improvements for authority building.

**Verify before delivering:**
- Every gap in the scorecard cites evidence — the URL + the on-page location where the signal is missing (or present-but-weak). No uncited findings (R-CITE).
- Re-check each "missing" signal against the whole page/site before flagging it (avoid false positives from a signal that lives elsewhere).
- The current/target scores per pillar trace to the rubric set in step 1, not to an after-the-fact gut call.
- Each recommendation is concrete and platform-specific (what to add, where), not generic advice.

## Constraints

### MUST DO
- Verify all claims with data or sources
- Include actionable recommendations, not just observations
- Consider the target audience and business context
- Provide specific examples, not generic advice

### MUST NOT DO
- Make claims without supporting evidence
- Ignore the user's specific business context
- Provide generic one-size-fits-all recommendations
- Skip competitive or market context when relevant
