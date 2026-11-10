---
name: "seo-agentic"
description: "Audit and improve a website's readiness for AI agents that browse, understand interfaces, complete forms, or perform user-authorized tasks. Use for agent accessibility, server-rendered content, AI access policy, Markdown/discovery surfaces, or optional browser-agent tools. For citation visibility use `ai-seo`; for commerce protocols use `seo-ecommerce`."
summary: "This skill audits and improves a website's readiness and accessibility for AI browsing agents."
category: "ai-search-geo"
platforms: ["unspecified"]
platform_source: "none"
repo: "iamwaqargulzar/Marketing-Agent-OS"
repo_url: "https://github.com/iamwaqargulzar/Marketing-Agent-OS"
source: "https://github.com/iamwaqargulzar/Marketing-Agent-OS/blob/HEAD/skills/seo-agentic/SKILL.md"
raw_source: "https://raw.githubusercontent.com/iamwaqargulzar/Marketing-Agent-OS/HEAD/skills/seo-agentic/SKILL.md"
ref: "HEAD"
discovered_via: "github-search"
license: "Apache-2.0"
stars: 8
collected: "2026-11-10"
---

<!-- Unspecified skill · iamwaqargulzar/Marketing-Agent-OS · skills/seo-agentic/SKILL.md · Apache-2.0
     Source: https://github.com/iamwaqargulzar/Marketing-Agent-OS/blob/HEAD/skills/seo-agentic/SKILL.md
     Detected by: none · Regenerated on every run; edit the upstream skill, not this copy. -->

# Agentic Browsing Readiness

Evaluate whether authorized AI agents can reliably perceive, navigate, and operate a website. Accessibility, performance, stable server behavior, and deliberate access policy are the foundation; discovery files and agent-specific tools are optional layers.

## Establish Scope

Confirm:

- the site or local project and whether the user controls it;
- audit, implementation plan, or fix-draft mode;
- public reading versus authenticated or consequential actions;
- target agent/browser surfaces, if any;
- whether live requests, user-agent variation, form submission, or account access is authorized.

Do not perform form submissions, authenticated actions, purchases, sends, deletes, or user-agent/WAF probes without authorization for that exact operation.

## Audit Order

1. **Usable semantics:** accessible names, correct roles, keyboard operation, visible labels, error recovery, and no interactive element hidden from the accessibility tree.
2. **Stable delivery:** meaningful server-rendered content, real HTTP status codes, crawlable navigation, predictable URLs, and explicit loading/confirmation states.
3. **Performance:** layout stability and interaction readiness sufficient for a browser agent to locate and operate controls reliably.
4. **Access policy:** distinguish search indexing, model training, and user-triggered agent access. Robots directives express preferences; authentication and authorization protect private actions.
5. **Optional discovery:** evaluate `llms.txt`, Markdown delivery, well-known metadata, catalogs, or agent cards only when a real consumer/use case exists.
6. **Optional tools:** assess browser-agent or MCP-style tools only when forms or transactions benefit. Require narrow schemas, clear consequences, server-side authorization, validation, logging, idempotency, and human confirmation where appropriate.

Read [agent-readiness.md](references/agent-readiness.md) for the detailed evidence checklist and reporting rules.

## Freshness and Evidence

Browser APIs, crawler identities, audit categories, and discovery proposals change quickly. Verify current behavior against first-party specifications or vendor documentation and record the check date. Label drafts, experiments, third-party tests, and unsupported consumers explicitly.

Keep these measurements separate:

- first-party or direct HTTP/browser observations;
- local accessibility or performance heuristics;
- vendor audit results and version;
- manual checks not performed;
- inferred interoperability benefits.

Never promise ranking, citation, traffic, or task-completion gains from an agent-readiness feature.

## Fix Boundary

Draft fixes by default. Do not deploy, alter access policy, expose private endpoints, publish discovery files, or register tools without explicit authorization. A tool description must not instruct an agent to bypass consent or confirmation.

## Output

Return:

1. scope and test date;
2. executive finding and critical blockers;
3. evidence by priority;
4. access-policy matrix for search, training, and user-triggered agents;
5. optional discovery/tool findings with standards status;
6. recommended fix, owner, risk, and deterministic retest for each finding.

## Shared References

- [skill-contract.md](references/skill-contract.md) — evidence, permission, and handoff rules
- [routing-policy.md](references/routing-policy.md) — specialist routing and conflicts
- [product-context-schema.md](references/product-context-schema.md) — shared business context
- [connectors.md](references/connectors.md) — optional integrations

## Related Skills

- `ai-seo` — AI citations, entity signals, answer visibility, and AI crawler strategy
- `technical-seo-checker` — conventional crawl, indexing, performance, and rendering issues
- `seo-ecommerce` — commerce feeds, merchant protocols, and transactional SEO
- `cro` — human conversion paths and form usability
