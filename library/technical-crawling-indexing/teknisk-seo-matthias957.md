---
name: "teknisk-seo"
description: "Granskar och felsöker teknisk SEO i webbplatsens implementation, inklusive HTTP-status, redirects, rendering, JavaScript-SEO, hreflang, URL-beteende och tekniska mallproblem. Använd vid \"teknisk SEO\", \"technical SEO\", \"redirect problem\", \"JavaScript SEO\", \"rendering\", \"hreflang\", \"statuskoder\", \"soft 404\", \"duplicate URLs\" eller när teknisk implementation kan påverka sökbarhet."
category: "technical-crawling-indexing"
platforms: ["unspecified"]
platform_source: "none"
repo: "Matthias957/svenska-marknadsforingsskills"
repo_url: "https://github.com/Matthias957/svenska-marknadsforingsskills"
source: "https://github.com/Matthias957/svenska-marknadsforingsskills/blob/HEAD/skills/teknisk-seo/SKILL.md"
raw_source: "https://raw.githubusercontent.com/Matthias957/svenska-marknadsforingsskills/HEAD/skills/teknisk-seo/SKILL.md"
ref: "HEAD"
discovered_via: "github-search"
license: "MIT"
stars: 2
collected: "2026-11-14"
---

<!-- Unspecified skill · Matthias957/svenska-marknadsforingsskills · skills/teknisk-seo/SKILL.md · MIT
     Source: https://github.com/Matthias957/svenska-marknadsforingsskills/blob/HEAD/skills/teknisk-seo/SKILL.md
     Detected by: none · Regenerated on every run; edit the upstream skill, not this copy. -->

# Teknisk SEO

## Uppdrag

Identifiera tekniska implementeringsfel som påverkar hur sökmotorer och användare kan nå, tolka och navigera webbplatsen.

## Gränser

- `indexering`: indexeringsstatus, robots/noindex, sitemap och canonical-diagnostik på indexeringsnivå.
- `webbprestanda`: PageSpeed och Core Web Vitals.
- `strukturerad-data`: Schema.org och rich results.
- `webbplatsstruktur`: informationsarkitektur och slutlig URL-hierarki.
- `semantisk-seo`: vilka sidor som innehållsmässigt behövs.

Överlapp är tillåtet för att hitta rotorsaken, men gör inte en hel specialistgranskning inuti denna skill.

## Grundregler

1. Testa faktisk implementation, inte bara CMS-inställningar.
2. Kontrollera både rå HTTP/HTML och renderad sida när JavaScript är relevant.
3. Identifiera mönster per mall; rapportera inte 500 identiska URL-fel som 500 separata problem.
4. Föreslå inte stora arkitekturbyten utan att visa vilket tekniskt problem de löser.
5. Utgå inte från att SPA, SSR eller statisk HTML automatiskt är bättre för SEO. Bedöm implementationen.

## Arbetsflöde

### 1. Kartlägg teknisk miljö

Identifiera:
- ramverk/CMS,
- hosting/CDN,
- renderingstyp: statisk, SSR, CSR, hybrid,
- routing,
- språk/marknader,
- staging/produktion,
- eventuella proxy- eller cachelager.

### 2. HTTP

Kontrollera representativa URL:er:
- 2xx,
- 3xx,
- 4xx,
- 5xx,
- redirectkedjor,
- redirectloopar,
- irrelevanta massredirects,
- HTTP → HTTPS,
- `www`/icke-`www`,
- trailing slash-konsekvens,
- query-parametrar där de skapar duplicering.

### 3. Fel- och borttagna URL:er

Kontrollera:
- riktiga 404/410 där innehåll saknas,
- soft 404-beteende,
- gamla URL:er som borde redirecta,
- redirectmålens relevans,
- interna länkar till 3xx/4xx.

### 4. Rendering

Jämför:
- serverlevererad HTML,
- renderad DOM,
- kritiskt innehåll,
- rubriker,
- interna länkar,
- canonical/meta,
- strukturerad data när relevant.

Flagga innehåll som bara blir tillgängligt efter interaktion om crawlern annars inte kan nå det.

### 5. JavaScript-SEO

Kontrollera:
- klientrouting och verkliga URL:er,
- `<a href>` för crawlbara länkar,
- fel vid hydration/rendering,
- innehåll som försvinner vid JS-fel,
- metadata som sätts sent eller fel,
- lazy loading som kräver användarinteraktion,
- infinite scroll utan crawlbar URL-struktur där indexering behövs.

### 6. Tekniska dupliceringsmönster

Identifiera exempelvis:
- parameter-URL:er,
- filter/facetter,
- print-/trackingvarianter,
- http/https,
- hostvarianter,
- trailing slash,
- case-varianter,
- session-ID:n.

Lämna canonicalbeslut till `indexering` när problemet kräver djup indexeringsanalys.

### 7. Intern teknik för navigation

Kontrollera att:
- viktiga länkar är riktiga länkar,
- navigation fungerar utan osynliga JS-beroenden,
- breadcrumbs är konsekventa där de används,
- paginering/listor går att nå,
- inga viktiga sektioner blir oavsiktligt orphaned på grund av teknik.

### 8. Hreflang och internationella versioner

När relevant:
- giltiga språk-/regionskoder,
- self-reference,
- reciproka länkar,
- rätt canonical per språkversion,
- `x-default` där det behövs,
- URL:er som faktiskt returnerar 200 och inte redirectar fel.

### 9. Mobil implementation

Kontrollera att huvudfunktion och innehåll inte försvinner på mobil:
- samma primära innehåll,
- samma viktiga länkar,
- metadata,
- strukturerad data när relevant.

### 10. Säkerhet och leveransproblem som påverkar åtkomst

Flagga exempelvis:
- felaktigt TLS,
- mixed-content-problem om de bryter resurser,
- WAF/CDN som blockerar legitima crawlers,
- instabil server,
- felaktiga cachevarianter.

Verifiera innan du hävdar crawlerblockering.

## Output

Gruppera per **rotproblem eller mall**:

| Prioritet | Problem | Omfattning | Bevis | Teknisk rotorsak | Fix | Test efter fix |
|---|---|---|---|---|---|---|

När kod ska ändras:
- gör minsta säkra ändring,
- undvik orelaterad refaktorering,
- testa representativa URL:er efteråt.

## Kvalitetskontroll

- Har du testat faktisk produktion?
- Är problemet tekniskt eller egentligen indexering/innehåll?
- Har du jämfört rå och renderad output när JS är relevant?
- Är rekommendationen proportionerlig?
- Finns ett tydligt retest?
