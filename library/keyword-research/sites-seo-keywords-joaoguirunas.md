---
name: "sites-seo-keywords"
description: "Keyword research e estratégia de conteúdo SEO — intenção de busca, clustering e mapeamento de keywords por página. Use ao pesquisar palavras-chave, definir estratégia de conteúdo orgânico, agrupar keywords por intenção ou mapear termos para as páginas do site."
category: "keyword-research"
platforms: ["claude-code"]
platform_source: "declared"
repo: "joaoguirunas/team-os"
repo_url: "https://github.com/joaoguirunas/team-os"
source: "https://github.com/joaoguirunas/team-os/blob/HEAD/.claude/skills/sites-seo-keywords/SKILL.md"
raw_source: "https://raw.githubusercontent.com/joaoguirunas/team-os/HEAD/.claude/skills/sites-seo-keywords/SKILL.md"
ref: "HEAD"
discovered_via: "github-search"
license: "MIT"
stars: 6
collected: "2026-11-11"
---

<!-- Claude Code skill · joaoguirunas/team-os · .claude/skills/sites-seo-keywords/SKILL.md · MIT
     Source: https://github.com/joaoguirunas/team-os/blob/HEAD/.claude/skills/sites-seo-keywords/SKILL.md
     Detected by: declared · Regenerated on every run; edit the upstream skill, not this copy. -->

# Sites SEO Keywords — Research e Estratégia

**Quando usar esta vs. `seo-cluster`:** esta faz pesquisa de keywords, intenção e mapeamento termo → página para um site. Quando já há uma lista grande e a dúvida é como agrupar por sobreposição real de SERP em clusters pilar-e-satélite, use `seo-cluster`.

## Search Intent (tipos)

| Intent | Tipo de query | Página ideal |
|---|---|---|
| **Informational** | "como fazer X" | Blog, guia, FAQ |
| **Navigational** | "marca login" | Homepage, login |
| **Commercial** | "melhor X para Y" | Comparativo, landing |
| **Transactional** | "comprar X", "X preço" | Produto, pricing |

## Keyword mapping por página

```markdown
## Mapeamento — [Nome da Página]

**URL:** /caminho
**Keyword primária:** [keyword principal] — [volume/mês]
**Search intent:** [informational|navigational|commercial|transactional]
**Keywords secundárias:**
  - [keyword 2] — [volume]
  - [keyword 3] — [volume]
**LSI keywords:** [termos relacionados semanticamente]

**Implementação:**
- Title: [keyword primária] no início
- H1: variação natural da keyword primária
- H2s: keywords secundárias
- Body: keywords LSI distribuídas naturalmente
- Alt texts: descrição relevante com keyword quando natural
```

## Clusters de conteúdo

```
Pillar page (broad keyword)
    └── Cluster 1 (long-tail específico)
    └── Cluster 2 (long-tail específico)
    └── Cluster 3 (long-tail específico)
```

## Critérios de selecção de keywords

1. **Volume** — > 100 pesquisas/mês (nicho) ou > 1.000 (geral)
2. **Dificuldade** — KD < 40 para novos sites, < 70 para sites estabelecidos
3. **Intent** — Alinha com o objectivo da página
4. **Relevância** — Directamente relacionada com o produto/serviço

## Metas por tipo de página

| Página | Title (máx) | Description (máx) | H1 |
|---|---|---|---|
| Home | 60 chars | 160 chars | 1 (keyword primária) |
| Produto | 60 chars | 160 chars | 1 (keyword produto) |
| Blog | 60 chars | 155 chars | 1 (keyword artigo) |
