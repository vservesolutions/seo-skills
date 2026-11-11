---
name: "seo-granskning"
description: "Gör en övergripande SEO-granskning av en webbplats, prioriterar problem och skickar rätt delproblem till rätt specialistskill. Använd när användaren ber om \"SEO-granskning\", \"SEO audit\", \"granska SEO\", \"varför rankar sajten dåligt\", \"SEO-problem\", \"SEO health check\" eller vill ha en prioriterad helhetsbild. Använd inte denna som ersättning för en djup specialistanalys av en enda känd fråga."
category: "technical-crawling-indexing"
platforms: ["unspecified"]
platform_source: "none"
repo: "Matthias957/svenska-marknadsforingsskills"
repo_url: "https://github.com/Matthias957/svenska-marknadsforingsskills"
source: "https://github.com/Matthias957/svenska-marknadsforingsskills/blob/HEAD/skills/seo-granskning/SKILL.md"
raw_source: "https://raw.githubusercontent.com/Matthias957/svenska-marknadsforingsskills/HEAD/skills/seo-granskning/SKILL.md"
ref: "HEAD"
discovered_via: "github-search"
license: "MIT"
stars: 2
collected: "2026-11-11"
---

<!-- Unspecified skill · Matthias957/svenska-marknadsforingsskills · skills/seo-granskning/SKILL.md · MIT
     Source: https://github.com/Matthias957/svenska-marknadsforingsskills/blob/HEAD/skills/seo-granskning/SKILL.md
     Detected by: none · Regenerated on every run; edit the upstream skill, not this copy. -->

# SEO-granskning

## Uppdrag

Ge en verifierbar helhetsbild av webbplatsens SEO-status och prioritera vad som faktiskt bör göras först.

Denna skill är en **triage- och orkestreringsskill**. Den ska inte duplicera djupmetodiken i specialistskills.

## Specialistskills

Lämna över eller använd relevant specialistskill när problemet kräver djupanalys:

- `semantisk-seo`: sökintention, ämnesstruktur, topical map, saknade sidor.
- `indexering`: crawlning, indexering, canonical, sitemap, robots, Search Console.
- `teknisk-seo`: HTTP, redirects, rendering, JavaScript-SEO, hreflang.
- `webbprestanda`: PageSpeed, Lighthouse, CrUX, Core Web Vitals.
- `ai-sokoptimering`: generativa sökfunktioner och AI-svar.
- `webbplatsstruktur`: hierarki, URL-struktur, navigation och crawlvägar.
- `strukturerad-data`: Schema.org, JSON-LD och rich results.
- `lokal-seo`: Google Företagsprofil och lokal synlighet.
- `innehallsstrategi`: beslut om att behålla, uppdatera, slå ihop, skapa eller avpublicera innehåll.
- `programmatisk-seo`: datadrivna sidmallar, kvalitetsgrindar och indexeringspolicy i större skala.
- `appbutiksoptimering`: synlighet och konvertering i Apple App Store och Google Play.

## Grundregler

1. Börja med data, inte en generell checklista.
2. Gör inga rankingpåståenden utan stöd.
3. Skilj tekniska blockerare från förbättringsmöjligheter.
4. Prioritera efter förväntad effekt, omfattning, säkerhet och arbetsinsats.
5. Rapportera inte samma rotproblem flera gånger under olika rubriker.
6. Om användaren bara ber om en avgränsad fråga, gör inte automatiskt en full audit.

## Minsta underlag

Försök få eller själv samla:

- webbplats/domän,
- vilka delar av sajten som ingår,
- målmarknad och språk,
- viktigaste sidtyperna,
- tillgång till crawl/data om sådan finns,
- Search Console-data om användaren kan ge åtkomst,
- Analytics-data när trafikförändring är relevant,
- större nyliga ändringar eller migreringar.

Saknas data: fortsätt med det som går att verifiera och märk begränsningarna.

## Arbetsflöde

### 1. Fastställ scope

Definiera:
- hela webbplatsen eller en del,
- diagnostik av ett problem eller proaktiv granskning,
- organisk Google-sökning, lokal sökning eller bredare söksynlighet.

### 2. Samla baslinje

Kontrollera i den mån verktyg finns:

- vilka URL:er som existerar och är internt länkade,
- indexeringsstatus,
- statuskoder och redirects,
- canonical-signaler,
- robots/noindex,
- rendering av viktigt innehåll,
- sitemap,
- titlar, rubriker och huvudteman,
- intern länkstruktur,
- Core Web Vitals / PageSpeed,
- strukturerad data,
- lokala signaler om verksamheten är lokal,
- Search Console-fel, queries och landningssidor.

### 3. Identifiera rotproblem

Klassificera varje fynd i en huvudkategori. Undvik dubbla tickets för samma rotorsak.

Exempel:
- En sida finns inte i sitemap **och** saknar internlänkar -> discovery/indexering.
- Hundratals kedjade redirects -> teknisk SEO.
- Dålig LCP på viktiga mallar -> webbprestanda.
- Många nästan identiska ortssidor utan tydligt eget behov -> semantisk SEO/lokal SEO.
- JSON-LD är giltig JSON men bryter mot Googles krav -> strukturerad data.

### 4. Prioritera

Använd denna prioritering:

- **P0 Blockerare:** kan hindra en betydande del av sajten från att crawlas, renderas eller indexeras.
- **P1 Hög:** sannolik stor effekt på viktiga sidor eller trafik.
- **P2 Medel:** tydlig förbättring men inte akut.
- **P3 Låg:** kosmetiskt, begränsad påverkan eller experimentellt.

För varje fynd, ange även:
- säkerhet: hög / medel / låg,
- omfattning: en URL / mall / sektion / hela sajten,
- ungefärlig arbetsinsats: liten / medel / stor.

### 5. Verifiera innan slutsats

Ett fynd ska helst innehålla:
- bevis,
- varför det spelar roll,
- rekommenderad åtgärd,
- hur åtgärden ska verifieras efteråt.

### 6. Routing

Om en kategori kräver djupdiagnostik, ange vilken specialistskill som bör användas och vilket konkret problem den ska lösa.

## Output

Leverera i denna ordning:

### Sammanfattning
3-8 viktigaste slutsatserna.

### Prioriterade fynd

| Prioritet | Område | Fynd | Bevis | Påverkan | Åtgärd | Verifiering |
|---|---|---|---|---|---|---|

### Specialistsaker
Lista endast de fördjupningar som faktiskt behövs.

### Begränsningar
Vad kunde inte verifieras och vilken data skulle lösa det?

## Kvalitetskontroll

Innan du avslutar:
- Har varje viktigt fynd evidens?
- Är hypoteser markerade?
- Har du undvikit dubblering?
- Är P0/P1 verkligen viktigare än P2/P3?
- Är rekommendationerna konkreta nog att implementera?
