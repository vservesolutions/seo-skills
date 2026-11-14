---
name: "seo-aeo-geo-site"
description: "Audita e implementa SEO, AEO e GEO em sites e landing pages, adaptando metadados, rastreamento, sitemap, robots.txt, llms.txt, dados estruturados e conteúdo ao stack existente. Use quando o usuário pedir otimização orgânica, indexação, respostas de IA ou preparação de uma página para buscadores e mecanismos generativos."
category: "ai-search-geo"
platforms: ["unspecified"]
platform_source: "none"
repo: "bascowave/seo-aeo-geo-site"
repo_url: "https://github.com/bascowave/seo-aeo-geo-site"
source: "https://github.com/bascowave/seo-aeo-geo-site/blob/HEAD/SKILL.md"
raw_source: "https://raw.githubusercontent.com/bascowave/seo-aeo-geo-site/HEAD/SKILL.md"
ref: "HEAD"
discovered_via: "github-search"
license: "MIT"
stars: 1
collected: "2026-11-14"
---

<!-- Unspecified skill · bascowave/seo-aeo-geo-site · SKILL.md · MIT
     Source: https://github.com/bascowave/seo-aeo-geo-site/blob/HEAD/SKILL.md
     Detected by: none · Regenerated on every run; edit the upstream skill, not this copy. -->

# SEO, AEO e GEO para sites

Trabalhe sobre o projeto existente e preserve sua arquitetura, estilo, analytics e comportamento. Detecte o framework, roteamento, método de build, domínio canônico e ambiente de publicação antes de escolher onde implementar cada recurso.

## Fluxo

1. Inspecione o projeto e identifique páginas públicas, objetivo comercial, público, idioma, domínio e stack. Não invente domínio, empresa, endereço, avaliações, autores, credenciais ou estatísticas.
2. Faça um inventário do estado atual: status HTTP, renderização, títulos, descrições, canonical, headings, conteúdo, links, imagens, Open Graph, dados estruturados, `robots.txt`, sitemap, redirects e páginas duplicadas.
3. Separe achados em bloqueadores, melhorias recomendadas e opcionais. Antes de editar, preserve mudanças do usuário e confirme qualquer decisão de negócio que altere conteúdo, posicionamento ou indexação.
4. Implemente no mecanismo nativo do stack. Leia [implementacao-por-stack.md](references/implementacao-por-stack.md) quando precisar decidir arquivos, plugins ou APIs específicos.
5. Valide o resultado no código e, quando houver ambiente executável, no build e nas URLs geradas. Leia [validacao.md](references/validacao.md) para os invariantes.
6. Entregue um resumo do que mudou, pendências que exigem dados reais e instruções de publicação ou verificação externa. Use [examples.md](examples.md) para o formato da tabela e para templates mínimos.

## Camadas obrigatórias

- **SEO técnico:** uma URL canônica por página indexável, status correto, links rastreáveis, sitemap apenas com URLs canônicas e indexáveis, `robots.txt` sem bloqueios acidentais, metadados únicos, viewport, HTML semântico e desempenho razoável.
- **SEO de conteúdo:** intenção clara, um título principal coerente, conteúdo útil e específico, hierarquia lógica, texto alternativo útil e links internos relevantes. Não faça keyword stuffing nem crie páginas vazias em escala.
- **AEO:** responda perguntas importantes de forma direta perto do contexto correspondente. Use títulos descritivos, listas ou passos quando naturais. FAQ visível pode existir; `FAQPage` só quando o conteúdo visível for FAQ real e as regras atuais do buscador justificarem. `HowTo` só com passos visíveis.
- **GEO:** torne entidade, oferta, autoria, evidências, datas e fontes inequívocas. Prefira afirmações verificáveis e conteúdo original. Não prometa inclusão ou citação em respostas de IA.
- **Dados estruturados:** use JSON-LD compatível com o conteúdo visível. Selecione somente tipos verdadeiros, como `Organization`, `LocalBusiness`, `WebSite`, `WebPage`, `Product`, `Service`, `Article` ou `BreadcrumbList`. `sameAs` e `@id` só com URLs oficiais confirmadas. Nunca fabrique reviews, preços, disponibilidade ou identidade.
- **Compartilhamento:** configure Open Graph e Twitter Card com título, descrição, URL e imagem reais; use URLs absolutas em produção. A imagem social deve existir; 1200×630 é o alvo comum.
- **Internacional:** um locale canônico por URL. `html lang`, `og:locale` e `hreflang` recíproco (incluindo `x-default` quando houver idioma padrão) só quando existirem páginas equivalentes reais.

## Arquivos de descoberta

- `robots.txt`: controle rastreamento, não remoção de índice nem sigilo. Inclua a URL absoluta do sitemap. Não bloqueie CSS, JavaScript ou imagens necessários à renderização. Regras de bots de IA são uma escolha de política; peça decisão quando não estiver explícita.
- `sitemap.xml`: inclua somente URLs públicas, canônicas, indexáveis e com resposta bem-sucedida. Para sites dinâmicos, gere-o a partir da fonte real de rotas ou conteúdo. Não use `lastmod` falso ou igual em todas as URLs.
- `llms.txt`: opcional e experimental. Só publique na raiz quando o usuário pedir ou quando for claramente útil. Índice textual conciso com identidade, proposta, páginas canônicas importantes e links para documentação ou políticas. Não inclua segredos, conteúdo inexistente ou instruções conflitantes com `robots.txt`. Não crie esse arquivo por padrão em landing pages pequenas.
- Feeds ou sitemaps especializados: adicione imagens, notícias, vídeos ou hreflang apenas quando o site realmente tiver esses conteúdos e a implementação puder ser mantida.

## Regras de edição

- Prefira geração nativa do framework a arquivos duplicados e manuais.
- Não instale plugin ou dependência se o stack já oferece solução segura.
- Não altere URLs publicadas sem redirects permanentes e mapa explícito.
- Não marque páginas de obrigado, login, preview, busca interna ou conteúdo duplicado como indexáveis.
- Não bloqueie no `robots.txt` uma URL que dependa de `noindex` ser lido; permita o crawl ou use controle HTTP apropriado.
- Não confunda otimização com garantia de ranking, tráfego ou citação.
- Para uma landing page pequena, mantenha a solução proporcional; não crie infraestrutura editorial desnecessária.

## Resultado esperado

Entregue mudanças válidas para o stack, acompanhadas de uma tabela curta com item, estado anterior, alteração e forma de validar. Destaque qualquer placeholder que precise ser substituído antes da publicação e qualquer política de bots que permaneça sob decisão do proprietário.
