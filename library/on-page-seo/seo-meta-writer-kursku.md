---
name: "seo-meta-writer"
description: "Seo Meta Writer — Skill especializada em conteúdo & copywriting"
summary: "Writes optimized meta tags and copywriting for search engine listings."
category: "on-page-seo"
platforms: ["unspecified"]
platform_source: "none"
repo: "kursku/skills"
repo_url: "https://github.com/kursku/skills"
source: "https://github.com/kursku/skills/blob/HEAD/packs/kit-510-ptbr/01-conteudo-copy/seo-meta-writer/SKILL.md"
raw_source: "https://raw.githubusercontent.com/kursku/skills/HEAD/packs/kit-510-ptbr/01-conteudo-copy/seo-meta-writer/SKILL.md"
ref: "HEAD"
discovered_via: "state"
license: "MIT"
stars: 120
collected: "2026-11-12"
---

<!-- Unspecified skill · kursku/skills · packs/kit-510-ptbr/01-conteudo-copy/seo-meta-writer/SKILL.md · MIT
     Source: https://github.com/kursku/skills/blob/HEAD/packs/kit-510-ptbr/01-conteudo-copy/seo-meta-writer/SKILL.md
     Detected by: none · Regenerated on every run; edit the upstream skill, not this copy. -->

# Seo Meta Writer

Esta skill capacita o Claude a criar meta títulos e meta descrições otimizados para SEO, aumentando a visibilidade e o CTR em resultados de busca.

---

## Keywords

Meta Title, Meta Description, SEO Copywriting, CTR, Palavra-chave primária, Otimização on-page, Snippet, Google SERP, Rich Snippets, Escaneabilidade.

---

## Quick Start

1.  O usuário fornecerá a URL da página e a palavra-chave primária desejada para o conteúdo.
2.  O Claude analisará o conteúdo da página (se acessível ou fornecido pelo usuário) para entender o contexto, identificar benefícios e palavras-chave secundárias relevantes.
3.  O Claude gerará 3 opções de Meta Título e 3 opções de Meta Descrição, cada uma otimizada para a palavra-chave primária, respeitando os limites de caracteres e com foco em alta taxa de cliques (CTR).

---

## Core Workflows

### Workflow 1: Criação de Meta Título e Descrição para Página Nova ou Existente

Este workflow é ideal para criar metas do zero ou para páginas que ainda não possuem metas otimizados.

1.  **Entrada do Usuário**: Solicitar ao usuário a URL da página e a palavra-chave primária alvo.
    *   **Exemplo de Entrada**:
        *   `URL da Página: https://www.exemplo.com.br/melhores-notebooks-para-programadores`
        *   `Palavra-chave Primária: Melhores Notebooks para Programadores`
        *   `Contexto Adicional (opcional, se a URL não for acessível): A página compara os 7 principais modelos de notebooks, destacando desempenho, RAM, armazenamento e durabilidade, com foco em linguagens de programação como Python e Java.`
2.  **Análise de Conteúdo e Intenção de Busca**:
    *   Se o conteúdo da URL for acessível (ou fornecido no contexto), extrair os principais tópicos, benefícios, especificações e palavras-chave secundárias.
    *   Identificar a intenção de busca por trás da palavra-chave primária (ex: informacional, comercial, transacional, comparativa). Para "Melhores Notebooks para Programadores", a intenção é claramente comparativa/comercial.
3.  **Geração de Meta Título (3 Opções)**:
    *   **Regra**: Incluir a palavra-chave primária, ser conciso, transmitir valor ou benefício, e considerar números ou anos (se relevante). Manter entre 50-60 caracteres (aproximadamente 500-580 pixels).
    *   **Exemplo 1**: `Melhores Notebooks para Programadores 2024: Guia` (56 caracteres)
    *   **Exemplo 2**: `Notebook para Programar: Top 7 Modelos Essenciais` (52 caracteres)
    *   **Exemplo 3**: `Guia: Escolha o Notebook Ideal para Programação` (54 caracteres)
4.  **Geração de Meta Descrição (3 Opções)**:
    *   **Regra**: Incluir a palavra-chave primária e secundárias, resumir o conteúdo de forma persuasiva, destacar benefícios, e incluir um Call
