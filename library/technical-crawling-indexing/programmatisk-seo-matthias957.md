---
name: "programmatisk-seo"
description: "Planerar, granskar och kvalitetssäkrar SEO-sidor som skapas i större skala från mallar och strukturerad data. Använd vid \"programmatisk SEO\", \"programmatic SEO\", \"SEO-sidor i skala\", \"datadrivna landningssidor\", \"mallgenererade sidor\", \"ortssidor i skala\", \"integrationssidor\" eller granskning av ett skalbart sidmönster. Använd inte för vanlig innehållsplanering eller massproduktion utan verifierat sidbehov."
category: "technical-crawling-indexing"
platforms: ["unspecified"]
platform_source: "none"
repo: "Matthias957/svenska-marknadsforingsskills"
repo_url: "https://github.com/Matthias957/svenska-marknadsforingsskills"
source: "https://github.com/Matthias957/svenska-marknadsforingsskills/blob/HEAD/skills/programmatisk-seo/SKILL.md"
raw_source: "https://raw.githubusercontent.com/Matthias957/svenska-marknadsforingsskills/HEAD/skills/programmatisk-seo/SKILL.md"
ref: "HEAD"
discovered_via: "github-search"
license: "MIT"
stars: 2
collected: "2026-11-12"
---

<!-- Unspecified skill · Matthias957/svenska-marknadsforingsskills · skills/programmatisk-seo/SKILL.md · MIT
     Source: https://github.com/Matthias957/svenska-marknadsforingsskills/blob/HEAD/skills/programmatisk-seo/SKILL.md
     Detected by: none · Regenerated on every run; edit the upstream skill, not this copy. -->

# Programmatisk SEO

## Uppdrag

Avgör om ett skalbart sidmönster har självständigt användarvärde och bygg en plan som håller tekniskt, innehållsmässigt och förvaltningsmässigt.

Antalet möjliga URL:er är inte ett skäl att publicera dem.

## Gränser

- Använd `semantisk-seo` för att verifiera sökintentioner och vilka sidtyper som behövs.
- Använd `webbplatsstruktur` för hierarki, navigation och crawlvägar.
- Använd `teknisk-seo` och `indexering` för rendering, canonical, sitemap och crawlbudget.
- Använd `innehallsstrategi` för innehåll som inte bygger på ett återkommande data- och mallmönster.
- Skapa eller publicera inte stora URL-mängder utan uttryckligt godkännande av mall, data, indexeringspolicy och pilot.

## Grundregler

1. Varje indexerbar sida behöver ett tydligt eget användarbehov.
2. Datakällan måste vara verklig, tillåten och tillräckligt komplett.
3. Mallen får inte dölja att varje sida i praktiken säger samma sak.
4. Generativ text ersätter inte unika fakta eller funktioner.
5. Kontrollera alltid aktuella spam- och innehållspolicyer före lansering.
6. Börja med en liten pilot och mät innan skalan ökas.

## Underlag

- målgrupp och återkommande sökbehov,
- tänkt sidtyp och exempel-URL:er,
- datakällor, fält, täckning och uppdateringsfrekvens,
- antal möjliga kombinationer,
- nuvarande webbplatsstruktur och teknisk plattform,
- indexerings- och konverteringsmål,
- resurser för kvalitetssäkring och förvaltning.

## Arbetsflöde

### 1. Verifiera sidmönstret

Beskriv den återkommande uppgiften. Kontrollera att användare faktiskt behöver separata sidor och att en filtrerad vy, sökfunktion eller vanlig kategorisida inte löser uppgiften bättre.

### 2. Definiera URL-universumet

Räkna möjliga URL:er och klassificera dem:

- giltiga kombinationer med efterfrågan och data,
- giltiga men svaga kombinationer som bör vara `noindex` eller inte skapas,
- ogiltiga kombinationer,
- dubbletter och synonymer som ska konsolideras.

Publicera inte den kartesiska produkten av alla dimensioner.

### 3. Granska datan

För varje fält, dokumentera:

- källa och ägare,
- datatyp och exempel,
- täckningsgrad,
- uppdateringsfrekvens,
- rätt att använda datan,
- beteende när värdet saknas,
- risk för fel, personuppgifter eller inaktualitet.

### 4. Modellera mallen

Definiera:

- vilket värde som är gemensamt,
- vad som måste vara unikt per sida,
- vilka data som är synliga och verifierbara,
- vilka komponenter som varierar,
- när sidan ska falla tillbaka, inte skapas eller få `noindex`,
- internlänkar och nästa användarsteg.

En unik titel ovanpå identisk brödtext räcker inte.

### 5. Indexeringspolicy

Sätt regler för:

- indexerbarhet,
- canonical,
- parametrar och filtrering,
- sitemap,
- pagination,
- tunna eller tomma tillstånd,
- borttagna dataobjekt,
- språk och geografi.

### 6. Bygg en pilot

Välj representativa fall:

- hög efterfrågan och full data,
- låg efterfrågan,
- saknade värden,
- långa namn eller specialtecken,
- närliggande sidor med risk för överlapp,
- borttaget eller inaktuellt objekt.

Granska rå HTML, renderad sida, internlänkar, metadata, schema och mobil presentation.

### 7. Sätt kvalitetsgrindar

En sida får bara bli indexerbar när krav på datatäckning, eget värde, teknisk status och QA är uppfyllda. Grindarna ska kunna testas automatiskt där det är rimligt.

### 8. Mät pilot och skala stegvis

Följ discovery, crawlning, indexering, sökfrågor, engagemang och konvertering. Jämför med en definierad baslinje och dokumentera period samt andra ändringar.

Skala inte en mall som bara producerar fler indexerade URL:er utan användning eller resultat.

## Output

### Beslut

Rekommendation: bygg, kör pilot, omarbeta eller avstå. Ange underlag och osäkerhet.

### Sid- och datamodell

| Fält/dimension | Källa | Krävs | Unikt värde | Fallback | Kvalitetsregel |
|---|---|---:|---|---|---|

### Indexeringspolicy

Beskriv regler per URL-typ, inklusive sitemap, canonical, `noindex` och borttagning.

### Pilot- och QA-plan

Lista testfall, mätperiod, stoppvillkor och vad som krävs före nästa batch.

## Relaterade skills

- `semantisk-seo` verifierar behov och kluster.
- `webbplatsstruktur` placerar sidorna i helheten.
- `teknisk-seo` granskar mallens implementation.
- `indexering` följer discovery och indexstatus.
- `strukturerad-data` modellerar sanningsenlig markup.
- `innehallsstrategi` hanterar övrig innehållsportfölj.

## Kvalitetskontroll

- Har varje indexerbar URL ett eget behov och eget värde?
- Är datans källa, täckning och fallback dokumenterad?
- Finns en uttrycklig indexeringspolicy?
- Har ogiltiga kombinationer stoppats?
- Är pilot och kvalitetsgrindar definierade före skala?
- Har du undvikit löften om trafik eller indexering?

Läs `references/kallor.md` när policy eller tekniska regler ska bedömas.
