---
name: "seo-optimization-suite"
description: "Orchestrates a full SEO audit and optimization: Lighthouse CLI, indexing (sitemap, robots, Search Console, Bing), www/apex redirects, Cloudflare DNS/SSL, metadata, canonical, JSON-LD, Core Web Vitals, llms.txt, openapi.json, pillars and clusters, crawl depth, entities and backlinks. Use when the user asks for SEO optimization, PageSpeed, Core Web Vitals, an SEO audit, indexing or Search Console work, or to combine performance with technical SEO. PT-BR: Orquestra auditoria e otimização SEO completa: Lighthouse CLI, indexação, redirects www/apex, Cloudflare DNS/SSL, metadata, canonical…"
category: "core-web-vitals-performance"
platforms: ["claude-code"]
platform_source: "declared+detected"
repo: "alexbueno7/skills"
repo_url: "https://github.com/alexbueno7/skills"
source: "https://github.com/alexbueno7/skills/blob/HEAD/skills/seo-optimization-suite/SKILL.md"
raw_source: "https://raw.githubusercontent.com/alexbueno7/skills/HEAD/skills/seo-optimization-suite/SKILL.md"
ref: "HEAD"
discovered_via: "github-search"
license: "MIT"
stars: 2
collected: "2026-11-12"
---

<!-- Claude Code skill · alexbueno7/skills · skills/seo-optimization-suite/SKILL.md · MIT
     Source: https://github.com/alexbueno7/skills/blob/HEAD/skills/seo-optimization-suite/SKILL.md
     Detected by: declared+detected · Regenerated on every run; edit the upstream skill, not this copy. -->

# SEO Optimization Suite

Skill orquestradora. **Não substitui** as skills especializadas — coordena leitura, aplicação e verificação delas em sequência determinística.

## Regra de invocação

1. **Sempre ler esta skill primeiro** quando o pedido envolver SEO + performance.
2. **Ler cada skill filha** (via Read tool) antes de aplicar suas instruções — nunca improvisar de memória.
3. **Mudanças cirúrgicas** — seguir karpathy-guidelines: mínimo diff, sem refatoração adjacente.
4. **Verificar antes de concluir** — re-executar Lighthouse CLI (obrigatório) ou inspecionar HTML quando possível.
5. **Lighthouse CLI local é a ferramenta padrão** — não depender de screenshot PSI nem improvisar métricas; rodar antes (Fase 1) e depois (Fase 6) de qualquer fix.

## Lighthouse CLI (obrigatório)

Ferramenta local para diagnóstico e verificação. Mesmo motor do PageSpeed Insights, sem API key.

### Instalação (uma vez por máquina)

```bash
# Verificar ou instalar
scripts/ensure-lighthouse.sh

# Manual (se necessário)
npm install -g lighthouse@latest
# Requer Google Chrome ou Chromium no PATH
```

Versão mínima testada: **13.x**. Chrome headless em `/usr/bin/google-chrome`.

### Auditoria padronizada (usar sempre)

```bash
# Mobile first (padrão — score que importa para ranking BR)
scripts/lighthouse-audit.sh https://dominio.com.br

# Local (php artisan serve)
scripts/lighthouse-audit.sh http://127.0.0.1:8000

# Mobile + desktop
scripts/lighthouse-audit.sh https://dominio.com.br --desktop
```

Saída: scores no terminal + JSON/HTML em `./.lighthouse-reports/` (ou `--output-dir`).

### Quando rodar

| Fase | Momento | Categorias |
|------|---------|------------|
| **1 — Diagnóstico** | Antes de qualquer fix | performance, seo, accessibility, best-practices |
| **6 — Verificação** | Após implementar fixes | idem; comparar antes/depois no relatório |

### Comando direto (fallback)

Se o script falhar, usar equivalente:

```bash
lighthouse "URL" \
  --form-factor=mobile \
  --screenEmulation.mobile=true \
  --only-categories=performance,seo,accessibility,best-practices \
  --output=json --output=html \
  --output-path=./.lighthouse-reports/audit \
  --chrome-flags="--headless --no-sandbox --disable-gpu --disable-dev-shm-usage" \
  --quiet
```

### Interpretar resultados

Priorizar issues por impacto CWV: **LCP > FCP > TTFB > CLS > INP/TBT**.

| Score Performance | Ação |
|-------------------|------|
| < 50 | Bloquear deploy; foco LCP + render-blocking |
| 50–89 | Otimizar assets antes de metadata |
| ≥ 90 | Manutenção; validar regressão no pre-deploy |

**Erros comuns:**
- `Chrome prevented page load with an interstitial` → SSL inválido, bot protection, ou URL errada; testar `http://127.0.0.1:8000` local
- Timeout → servidor lento ou URL inacessível do ambiente do agente

## Escopo de decisão

| Pedido do usuário | Modo |
|-------------------|------|
| "PageSpeed", "LCP", "velocidade", "Core Web Vitals" | `performance` |
| "Auditoria SEO", "não rankeio", "indexação" | `full-audit` |
| "Otimizar SEO" (genérico) | `full-audit` |
| "Schema", "rich snippets", "JSON-LD" | `on-page` |
| "AI search", "GEO", "ChatGPT", "Perplexity" | `geo-ai` |
| Deploy / release com SEO | `pre-deploy` |

Se ambíguo, perguntar: **performance only** ou **auditoria completa**?

---

## Checklist obrigatória (`full-audit`)

Lista canônica. Procedimento por item: [references/full-audit-checklist.md](references/full-audit-checklist.md).

No `full-audit`, **não encerrar** sem tabela PASS/FAIL/HUMAN/N/A para:

- sitemap.xml submitted and cleaned up
- robots.txt configured
- Google Search Console + Bing Webmaster connected
- Meta titles and descriptions
- Canonical issues fixed
- Duplicate/redirect issues cleaned up
- www → non-www 301 redirect fixed
- Cloudflare DNS / SSL issue resolved
- Internal links cleaned up
- Structured data / JSON-LD added
- Page speed + Core Web Vitals optimized
- llms.txt + openapi.json added
- Pillar pages + content clusters
- Crawl depth under 4 + thin content check
- Entity optimization
- Quality backlinks

GSC, Bing, “sitemap submitted” e backlinks de qualidade **não** viram PASS só com curl. Sem evidência do usuário/API = HUMAN ou FAIL.

Checagem HTTP (itens 1, 2, 7, 8-https, 12):

```bash
scripts/technical-seo-check.sh https://dominio.com.br
```

Padrão de host: **apex canônico**, `www` 301 para apex, salvo o projeto já documentar o contrário.

---

## Workflow principal

```
Progresso:
- [ ] Fase 0 — Contexto
- [ ] Fase 1 — Diagnóstico
- [ ] Fase 1b — Indexação, host, DNS/SSL, GSC/Bing
- [ ] Fase 2 — Performance & CWV
- [ ] Fase 3 — Imagens & assets
- [ ] Fase 4 — SEO on-page & metadata
- [ ] Fase 4b — Arquitetura, pilares, thin content, entidade, links
- [ ] Fase 5 — GEO/AI (llms.txt + openapi.json)
- [ ] Fase 6 — Verificação & relatório
```

### Fase 0 — Contexto (obrigatório)

Coletar antes de qualquer mudança:

1. URL alvo (homepage + páginas críticas)
2. Métricas atuais via **Lighthouse CLI** (baseline Fase 1); PSI screenshot/Search Console são complementares
3. Stack do projeto (Laravel/Blade, Next.js, etc.) — inspecionar código se necessário
4. Escopo: audit-only ou implementar fixes?

Ler se existir:
- `.agents/product-marketing-context.md`
- `.cursor/project-context.md`

### Fase 1 — Diagnóstico

**Passo 0 (obrigatório):** rodar Lighthouse CLI baseline antes de ler código ou aplicar fixes:

```bash
scripts/lighthouse-audit.sh "<URL>"
```

Guardar JSON em `./.lighthouse-reports/` como métrica "Antes" do relatório final.

**Ler e aplicar em paralelo conceitual, sequencial na execução:**

| Ordem | Skill | Path | Foco |
|-------|-------|------|------|
| 1 | `pagespeed-insights` | `../pagespeed-insights/SKILL.md` | Thresholds CWV; interpretar output Lighthouse |
| 2 | `seo-audit` | `../seo-audit/SKILL.md` | Framework audit (crawl → technical → on-page) |

**Saída da fase:** scores Lighthouse + lista priorizada de issues (LCP > FCP > TTFB > CLS > INP).

Heurística rápida (do screenshot REFORMAX):
- LCP > 4s + TBT baixo → imagens/CSS/fontes, não JS
- FCP > 3s → render-blocking, TTFB, fontes
- SEO 100 + Performance 64 → foco em assets, não em meta tags

### Fase 1b — Indexação, host, DNS/SSL, GSC/Bing

Obrigatória no `full-audit`. Ler [references/full-audit-checklist.md](references/full-audit-checklist.md) itens 1–3, 6–8.

1. Rodar `scripts/technical-seo-check.sh <URL>`
2. Conferir/corrigir `robots.txt` + sitemap (só URLs canônicas)
3. Conferir 301 www→apex (ou o host canônico do projeto) + HTTP→HTTPS, sem cadeia
4. SSL/DNS: Lighthouse interstitial, cert, mixed content; `cloudflare-manager` se houver token
5. Perguntar ao usuário: GSC e Bing conectados no host **canônico**? Sitemap submetido nos dois?

Não marcar item 3 (GSC+Bing) como PASS sem resposta.

### Fase 2 — Performance & Core Web Vitals

**Ler e aplicar nesta ordem:**

| Ordem | Skill | Path |
|-------|-------|------|
| 1 | `core-web-vitals` | `../core-web-vitals/SKILL.md` |
| 2 | `performance` | `../performance/SKILL.md` |

**Checklist de implementação (Laravel/Blade):**

- [ ] Preload LCP image com `fetchpriority="high"` no layout
- [ ] Critical CSS inline ou defer CSS não-crítico
- [ ] `preconnect`/`dns-prefetch` para CDNs e fontes
- [ ] Brotli/gzip + cache headers (verificar nginx/apache)
- [ ] Defer/async scripts não-críticos
- [ ] Early Hints (103) se CDN suportar


### Fase 3 — Imagens & assets

**Ler:** `../image-optimization/SKILL.md`

Aplicar quando LCP element for imagem (hero, banner, produto):

- [ ] WebP/AVIF com fallback
- [ ] `width`/`height` explícitos (CLS)
- [ ] `loading="lazy"` abaixo da dobra only
- [ ] `srcset`/`sizes` responsivos
- [ ] Alt text descritivo (SEO + a11y)
- [ ] Nome de arquivo semântico

### Fase 4 — SEO on-page & metadata

**Ler nesta ordem:**

| Skill | Path | Quando |
|-------|------|--------|
| `fixing-metadata` | `../fixing-metadata/SKILL.md` | title, description, OG, canonical, robots |
| `schema-markup` | `../schema-markup/SKILL.md` | JSON-LD, rich results |
| `fixing-accessibility` | `../fixing-accessibility/SKILL.md` | a11y (impacta SEO + PSI Accessibility) |

**Nota:** schema injetado via JS não aparece em curl/web_fetch — validar com Rich Results Test ou browser.

### Fase 4b — Arquitetura, pilares, thin, entidade, backlinks

Obrigatória no `full-audit`. Itens 9, 13–16 da checklist.

| Ordem | Skill | Path |
|-------|-------|------|
| 1 | `site-architecture` | `../site-architecture/SKILL.md` |
| 2 | `seo-audit` (internal linking, thin, clusters) | `../seo-audit/SKILL.md` |

- Links internos: sem órfãs nos pilares, âncora útil, 404 internos
- Pilares + clusters: 1 pilar por tema + satélites com links recíprocos
- Profundidade: páginas importantes em **< 4** cliques da home (alvo 3)
- Thin content: listar e noindex/301/consolidar
- Entidade: nome + schema Organization.sameAs + NAP se local
- Backlinks: GSC Links ou Ahrefs/Semrush se o usuário passar; senão HUMAN — não inventar métricas

### Fase 5 — GEO/AI (`full-audit` ou pedido AI)

| Ordem | Skill | Path |
|-------|-------|------|
| 1 | `geo-technical` | `~/.claude/skills/geo-technical/SKILL.md` |
| 2 | `ai-seo` | `../ai-seo/SKILL.md` |
| 3 | `geo-llmstxt` | `~/.claude/skills/geo-llmstxt/SKILL.md` |
| 4 | `geo` | `~/.claude/skills/geo/SKILL.md` |

- Servir `/llms.txt` (o que é, para quem, links-pilar)
- Servir `/openapi.json` ou `/openapi.yaml` se houver API pública; senão N/A
- `geo-crawlers` / `geo-schema` / `geo-content` / `geo-citability` conforme [skills-registry.md](skills-registry.md)

### Fase 6 — Verificação & relatório

1. **Re-executar Lighthouse CLI** (mobile first — 75% do tráfego BR) com o mesmo script da Fase 1
2. Comparar JSON antes/depois (Performance, SEO, LCP, FCP, CLS, TBT)
3. Confirmar CWV thresholds atingidos
4. No `full-audit`: preencher a tabela da checklist (PASS/FAIL/HUMAN/N/A + evidência). Sem tabela, a fase não fecha.
5. Listar mudanças feitas com arquivos tocados
6. Entregar relatório no formato abaixo (métricas "Antes" = Fase 1, "Depois" = Fase 6)

---

## Formato de relatório

```markdown
# SEO Optimization Report — [URL] — [data]

## Resumo executivo
[1 parágrafo: score antes/depois, issue principal resolvida]

## Métricas
| Métrica | Antes | Depois | Status |
|---------|-------|--------|--------|
| Performance (mobile) | | | |
| LCP | | | |
| FCP | | | |
| CLS | | | |

## Checklist full-audit
| Item | Status | Evidência |
|------|--------|-----------|
| sitemap.xml submitted and cleaned up | | |
| robots.txt configured | | |
| Google Search Console + Bing Webmaster connected | | |
| Meta titles and descriptions | | |
| Canonical issues fixed | | |
| Duplicate/redirect issues cleaned up | | |
| www → non-www 301 redirect fixed | | |
| Cloudflare DNS / SSL issue resolved | | |
| Internal links cleaned up | | |
| Structured data / JSON-LD added | | |
| Page speed + Core Web Vitals optimized | | |
| llms.txt + openapi.json added | | |
| Pillar pages + content clusters | | |
| Crawl depth under 4 + thin content check | | |
| Entity optimization | | |
| Quality backlinks | | |

## Issues corrigidas
1. **[Severidade]** Descrição → arquivo → fix aplicado

## Issues pendentes (fora de escopo)
- Item + motivo + skill recomendada

## Skills aplicadas
- [lista das skills lidas nesta sessão]
```

---

## Modos rápidos

### Modo `performance` (PageSpeed only)

Fases: 0 → 1 (pagespeed-insights) → 2 → 3 → 6

Pular: Fase 1b, 4b, 5, seo-audit completo, GEO, schema (salvo se issue explícito). Checklist de 16 itens **não** é obrigatória neste modo.

### Modo `full-audit` (SEO completo)

Fases 0 → 1 → **1b** → 2 → 3 → 4 → **4b** → 5 → 6.

Obrigatório: `technical-seo-check.sh` + tabela da checklist. Lighthouse sozinho **não** fecha o modo.

### Modo `on-page` (metadata + schema)

Fases: 0 → 4 → 6 (Lighthouse categoria seo). Sem Fase 1b/4b/5 salvo issue explícito.

### Modo `geo-ai`

Fases: 0 → 5 → 6. Inclui llms.txt; openapi.json só se houver API pública.

### Modo `pre-deploy`

Fases: 2 → 3 → 4 (metadata + schema) → 6

Assumir SEO on-page já ok; foco em regressão de performance.

---

## Skills auxiliares (invocar sob demanda)

| Skill | Trigger |
|-------|---------|
| `site-architecture` | IA, URLs, internal linking, pilares, profundidade |
| `programmatic-seo` | páginas em escala |
| `cloudflare-manager` | DNS, SSL, redirect www/apex |
| `fixing-motion-performance` | animações pesadas |
| `analytics-tracking` | eventos de conversão pós-otimização |
| `find-skills` | skill especializada não listada |

Registro completo: [skills-registry.md](skills-registry.md)

---

## Anti-patterns

- Não aplicar fixes de performance antes do baseline Lighthouse (Fase 1)
- Não declarar scores sem rodar Lighthouse CLI — screenshot PSI não substitui audit local
- Não reescrever layout inteiro por um LCP alto — fix na imagem/CSS primeiro
- Não declarar schema via JS-only em site que precisa de AI crawlers (preferir SSR/Blade)
- Não ignorar mobile — PSI mobile é o score que importa para ranking
- Não commitar sem pedido explícito do usuário (regra do projeto)
- Não marcar GSC/Bing/sitemap submitted/backlinks como PASS só com Lighthouse ou curl
- Não tratar `openapi.json` como JSON-LD; não FAIL em site sem API pública (N/A)
- Não assumir www canônico — padrão desta skill é apex, www 301 para apex
