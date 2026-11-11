---
name: "indexering"
description: "Diagnostiserar varför URL:er inte upptäcks, crawlas eller indexeras och granskar robots, noindex, canonical, sitemap och Search Console-signaler. Använd vid \"indexering\", \"indexeras inte\", \"crawled currently not indexed\", \"discovered currently not indexed\", \"Google hittar inte sidan\", \"canonical problem\", \"sitemap problem\", \"robots.txt\", \"URL Inspection\" eller indexeringskontroll efter lansering."
category: "technical-crawling-indexing"
platforms: ["unspecified"]
platform_source: "none"
repo: "Matthias957/svenska-marknadsforingsskills"
repo_url: "https://github.com/Matthias957/svenska-marknadsforingsskills"
source: "https://github.com/Matthias957/svenska-marknadsforingsskills/blob/HEAD/skills/indexering/SKILL.md"
raw_source: "https://raw.githubusercontent.com/Matthias957/svenska-marknadsforingsskills/HEAD/skills/indexering/SKILL.md"
ref: "HEAD"
discovered_via: "github-search"
license: "MIT"
stars: 2
collected: "2026-11-11"
---

<!-- Unspecified skill · Matthias957/svenska-marknadsforingsskills · skills/indexering/SKILL.md · MIT
     Source: https://github.com/Matthias957/svenska-marknadsforingsskills/blob/HEAD/skills/indexering/SKILL.md
     Detected by: none · Regenerated on every run; edit the upstream skill, not this copy. -->

# Indexering

## Uppdrag

Avgör var en URL eller URL-grupp faller bort i kedjan:

**upptäckbar → crawlbar → renderbar → indexerbar → vald canonical → indexerad**

Undvik standardsvaret "begär indexering". Hitta orsaken först.

## Gränser

Använd `teknisk-seo` för djup felsökning av server, redirects, JavaScript-implementation och liknande.

Använd `semantisk-seo` när problemet sannolikt är att URL:er saknar självständigt syfte eller överlappar andra sidor.

Använd `webbprestanda` för Core Web Vitals.

## Viktiga fakta

- `robots.txt` styr i första hand crawlning, inte en generell garanti för att en URL aldrig kan förekomma i index.
- `noindex` måste kunna ses av sökmotorn för att fungera.
- `rel="canonical"` är en canonical-signal, inte ett absolut kommando.
- En URL i en sitemap garanterar inte indexering.
- Search Console URL Inspection API **inspekterar** indexeringsstatus; det är inte ett generellt "indexera nu"-API.
- Googles Indexing API ska inte behandlas som ett generellt API för vanliga webbsidor. Följ dess aktuella officiella användningsområde.

## Input

Helst:
- URL eller domän,
- om problemet gäller en URL, mall eller större grupp,
- ungefär när sidan publicerades/ändrades,
- Search Console-status om tillgänglig,
- förväntad canonical,
- sitemap,
- nyliga migreringar/redirects.

## Arbetsflöde

### 1. Bekräfta URL-identiteten

Kontrollera:
- exakt URL,
- protokoll,
- host (`www`/icke-`www`),
- trailing slash,
- parametrar,
- stora/små bokstäver där servern skiljer på dem,
- om URL:en redirectar.

Arbeta inte med en "nästan samma" URL.

### 2. HTTP och åtkomst

Verifiera:
- statuskod,
- redirectkedja,
- slutlig URL,
- om sidan kräver login,
- serverfel eller intermittent 5xx,
- `X-Robots-Tag`.

### 3. robots.txt

Kontrollera om relevant crawler får hämta URL:en.

Om URL:en blockeras:
- avgör om blockeringen är avsiktlig,
- kontrollera att blockeringen inte hindrar Google från att se en `noindex` som man förlitar sig på.

### 4. HTML robots-direktiv

Kontrollera rå HTML och renderad DOM där möjligt:
- `meta name="robots"`,
- `googlebot`,
- `noindex`,
- `nofollow`,
- andra relevanta direktiv.

### 5. Canonical

Kontrollera:
- deklarerad canonical,
- redirectsignaler,
- sitemap-URL,
- internlänkarnas mål,
- HTTP/HTTPS,
- dubblett- eller nästan dubblettinnehåll.

När Search Console finns, jämför:
- user-declared canonical,
- Google-selected canonical.

### 6. Discovery

Kontrollera om URL:en:
- finns i relevant sitemap,
- har interna länkar,
- är en orphan page,
- ligger bakom formulär/JS-interaktion som saknar vanlig länk,
- finns i navigation eller relevant hubb där det är logiskt.

### 7. Rendering

Om viktigt innehåll kommer via JavaScript:
- jämför rå HTML med renderat innehåll,
- kontrollera att huvudtext, länkar och metadata finns efter rendering,
- lämna djup JS-felsökning till `teknisk-seo`.

### 8. Search Console

När data finns, använd:
- Page indexing-rapport,
- URL Inspection,
- crawl-/fetchstatus,
- senaste crawl,
- canonical-information,
- sitemapkoppling,
- eventuella förbättrings- eller policyproblem.

Skilj mellan:
- rapporterad GSC-status,
- vad du själv verifierat tekniskt,
- hypotes om varför Google valt statusen.

### 9. Innehåll och sidbehov

Om sidan är tekniskt indexerbar men ändå inte indexeras:
- undersök om den är nära dubblett,
- om samma intent redan täcks bättre av annan URL,
- om sidan är tunn/utan eget syfte,
- om den är massproducerad variation utan tydligt eget värde.

Använd `semantisk-seo` för djupare beslut om konsolidering eller sidbehov.

### 10. Åtgärd

Välj minsta åtgärd som adresserar rotorsaken:
- ta bort oavsiktlig blockering,
- rätta canonical,
- fixa status/redirect,
- lägg till relevant internlänk,
- rätta sitemap,
- konsolidera dubbletter,
- förbättra/omdefiniera sidan om den saknar eget syfte.

### 11. Omverifiera

Efter fix:
- hämta URL igen,
- kontrollera robots/canonical/status,
- kontrollera sitemap och internlänk,
- kontrollera Search Console efter att Google hunnit recrawla.

## Snabb lokal kontroll

När Python och nätverk finns:

```bash
python3 scripts/url_inspektion.py https://example.se/sida
```

Skriptet analyserar rå HTTP/HTML, robots och canonical. Det ersätter inte renderad inspektion eller Search Console.

## Output

### Diagnos
- URL:
- Förväntad status:
- Faktisk teknisk status:
- GSC-status:
- Trolig rotorsak:
- Säkerhet:

### Bevis
Lista konkreta observationer.

### Åtgärd
Exakt vad som bör ändras.

### Verifiering
Hur och när fixen ska kontrolleras.

## Kvalitetskontroll

- Har du verifierat exakt URL?
- Blandar du ihop crawlning och indexering?
- Har canonical-signaler jämförts?
- Har du undvikit att lova indexering?
- Har du undvikit felaktig användning av Indexing API?
