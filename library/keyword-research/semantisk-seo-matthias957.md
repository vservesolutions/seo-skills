---
name: "semantisk-seo"
description: "Gör semantisk SEO-research och beslutar vilka ämnen, sökintentioner och sidor som behövs för att täcka ett område logiskt. Använd vid \"semantisk SEO\", \"semantic SEO\", \"topical map\", \"topical authority\", \"sökintention\", \"keyword clustering\", \"vilka sidor behöver vi\", \"SEO research\", \"content map\" eller när en ny webbplats/sektion ska planeras utifrån sökbeteende och ämnesrelationer."
category: "keyword-research"
platforms: ["unspecified"]
platform_source: "none"
repo: "Matthias957/svenska-marknadsforingsskills"
repo_url: "https://github.com/Matthias957/svenska-marknadsforingsskills"
source: "https://github.com/Matthias957/svenska-marknadsforingsskills/blob/HEAD/skills/semantisk-seo/SKILL.md"
raw_source: "https://raw.githubusercontent.com/Matthias957/svenska-marknadsforingsskills/HEAD/skills/semantisk-seo/SKILL.md"
ref: "HEAD"
discovered_via: "github-search"
license: "MIT"
stars: 2
collected: "2026-11-12"
---

<!-- Unspecified skill · Matthias957/svenska-marknadsforingsskills · skills/semantisk-seo/SKILL.md · MIT
     Source: https://github.com/Matthias957/svenska-marknadsforingsskills/blob/HEAD/skills/semantisk-seo/SKILL.md
     Detected by: none · Regenerated on every run; edit the upstream skill, not this copy. -->

# Semantisk SEO

## Uppdrag

Kör förarbetet som krävs för att förstå ett ämnesområde och föreslå en sammanhängande uppsättning sidor.

Den här skillen ska svara på:
- Vad söker målgruppen efter?
- Vilka behov och intentioner är separata?
- Vilka frågor och delämnen hör ihop?
- Vilka sidor behövs?
- Vilka sökningar bör täckas på samma sida?
- Hur hänger sidorna semantiskt ihop?
- Vad bör prioriteras först?

## Metodlåsning

Den definierade metodiken finns i `references/metodik.md`.

- Följ den metodiken.
- Lägg inte till nya SEO-teorier som om de vore en del av kärnmetoden.
- Externa källor får användas för research, verifiering och data.
- Om ett nytt metodförslag verkar värdefullt: presentera det separat som ett förslag, inte som en tyst förändring av metodiken.

## Gränser

Denna skill:
- **bestämmer vilka sidor som behövs**,
- skapar researchunderlag och topical map,
- grupperar queries efter avsikt och relation.

Denna skill ska inte:
- skriva färdig webbcopy i stor skala,
- bygga layout eller komponenter,
- genomföra teknisk SEO-audit,
- felsöka indexering,
- optimera PageSpeed,
- bestämma slutlig navigation/URL-implementation efter att sidplanen är godkänd.

När siduppsättningen är godkänd kan `webbplatsstruktur` ta över hierarki, URL-struktur, navigation och crawlvägar.

## Input

Samla när det är möjligt:

- företag/verksamhet,
- produkter eller tjänster,
- målgrupper,
- geografi,
- språk,
- affärsprioriteringar,
- befintlig webbplats,
- befintliga sidor och rankingdata,
- kända konkurrenter,
- särskilda begränsningar,
- tillgängliga SEO-API:er eller keyword-data.

Saknas vissa uppgifter: fortsätt med research och markera antaganden.

## Arbetsflöde

### 1. Kund- och verksamhetsfakta

Separera säkra fakta från research.

Identifiera:
- vad verksamheten faktiskt säljer,
- för vem,
- var,
- vilka tjänster/produkter som är viktigast,
- vilka termer verksamheten själv använder,
- vilka påståenden som måste verifieras innan de används.

### 2. AI-, webb- och SERP-research

Researcha parallellt där verktyg tillåter:

- centrala entiteter och delämnen,
- vanliga formuleringar och frågor,
- sökintentioner,
- SERP-mönster,
- konkurrerande sidor och sidtyper,
- återkommande ämnesrelationer,
- lokala variationer när geografi är relevant.

Kopiera inte konkurrenters struktur mekaniskt. Använd den som marknadsdata.

### 3. SEO-data

När API/data finns, samla exempelvis:

- sökvolym,
- CPC,
- konkurrens/keyword difficulty där verktyget erbjuder det,
- trend,
- relaterade queries,
- SERP-data,
- aktuell ranking och impressions/clicks från Search Console.

SEO-data är beslutsstöd, inte ensam beslutsregel.

### 4. Normalisera queries

- slå ihop uppenbara stavnings- och böjningsvarianter när intentionen är densamma,
- behåll olika formuleringar när SERP eller avsikt visar att de representerar olika behov,
- anpassa analysen till naturlig svenska, sammansatta ord och svenska ortsnamn,
- undvik att skapa separata sidor bara för singular/plural eller små keyword-varianter.

### 5. Klassificera intention

Bedöm den dominerande användaruppgiften bakom varje query.

Exempel på dimensioner:
- informationsbehov,
- jämförelse/utvärdering,
- kommersiell undersökning,
- transaktion/konvertering,
- lokal avsikt,
- navigationsavsikt.

Använd inte etiketten som mål i sig; den ska hjälpa sidbeslutet.

### 6. Klustra

Klustra utifrån en kombination av:

- sökintention,
- semantisk likhet,
- SERP-likhet/överlapp när data finns,
- entitets- och ämnesrelation,
- faktisk användarnytta,
- tillgänglig SEO-data.

Klustra **inte** enbart efter keyword count eller sökvolym.

### 7. Bygg topical map

För varje huvudområde:

- definiera huvudämnet,
- definiera underämnen,
- markera relationer mellan dem,
- markera vilka frågor som kan besvaras på samma sida,
- markera vilka ämnen som kräver egen sida,
- identifiera luckor och överlapp.

### 8. Besluta sida per kluster

För varje föreslagen sida, ange:

- arbetsnamn,
- primärt användarbehov,
- ämne/entitet,
- query-kluster,
- sökintention,
- geografisk avgränsning om relevant,
- varför egen sida behövs,
- vilka närliggande ämnen som **inte** ska bli egna sidor,
- prioritet.

Undvik doorway-liknande massproduktion av nästan identiska sidor utan självständigt användarvärde.

### 9. Kontrollera kannibalisering och överproduktion

Flagga:
- två föreslagna sidor som sannolikt konkurrerar om samma uppgift,
- keyword-varianter som bör konsolideras,
- lokala sidor utan tydlig separat intention eller verksamhetsrelevans,
- innehåll som bättre hör hemma som avsnitt på en befintlig sida.

### 10. Skapa utdata och stoppa för godkännande

Skapa:

- `SEO-RESEARCH.json`
- `SITE-PLAN-DRAFT.json`
- `RESEARCH-SUMMARY.md`

Fortsätt inte automatiskt till produktion innan sidplanen har granskats/godkänts när arbetsflödet kräver ett sådant beslut.

## Outputkrav

### SEO-RESEARCH.json
Bör innehålla:
- facts
- entities
- topics
- queries
- intent
- serp_observations
- competitor_observations
- seo_metrics
- local_context
- clusters
- evidence
- assumptions

### SITE-PLAN-DRAFT.json
Bör innehålla:
- proposed_pages
- page_purpose
- topic_cluster
- intent
- geography
- priority
- parent_topic
- related_pages
- consolidation_notes
- evidence

### RESEARCH-SUMMARY.md
Bör vara läsbar för en människa och sammanfatta:
- vad marknaden söker,
- viktigaste ämnesområdena,
- föreslagna sidor,
- varför de behövs,
- vad som har slagits ihop,
- osäkerheter,
- beslut som kräver godkännande.

## Kvalitetskontroll

- Har fakta och research separerats?
- Har flera datalager använts när de finns?
- Har klustring gjorts på mer än keyword count?
- Har varje sida ett självständigt syfte?
- Finns överlapp eller kannibalisering?
- Är svensk språk- och geografikontext korrekt?
- Är antaganden tydligt markerade?
