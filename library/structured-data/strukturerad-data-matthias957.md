---
name: "strukturerad-data"
description: "Väljer, granskar, implementerar och validerar strukturerad data med Schema.org/JSON-LD och kontrollerar aktuell Google rich result-eligibility. Använd vid \"strukturerad data\", \"structured data\", \"schema\", \"schema.org\", \"JSON-LD\", \"rich results\", \"Product schema\", \"LocalBusiness\", \"BreadcrumbList\", \"Article schema\", \"review markup\" eller fel i Rich Results Test/Search Console."
category: "structured-data"
platforms: ["unspecified"]
platform_source: "none"
repo: "Matthias957/svenska-marknadsforingsskills"
repo_url: "https://github.com/Matthias957/svenska-marknadsforingsskills"
source: "https://github.com/Matthias957/svenska-marknadsforingsskills/blob/HEAD/skills/strukturerad-data/SKILL.md"
raw_source: "https://raw.githubusercontent.com/Matthias957/svenska-marknadsforingsskills/HEAD/skills/strukturerad-data/SKILL.md"
ref: "HEAD"
discovered_via: "github-search"
license: "MIT"
stars: 2
collected: "2026-11-13"
---

<!-- Unspecified skill · Matthias957/svenska-marknadsforingsskills · skills/strukturerad-data/SKILL.md · MIT
     Source: https://github.com/Matthias957/svenska-marknadsforingsskills/blob/HEAD/skills/strukturerad-data/SKILL.md
     Detected by: none · Regenerated on every run; edit the upstream skill, not this copy. -->

# Strukturerad data

## Uppdrag

Lägg till eller rätta maskinläsbar markup som sanningsenligt beskriver sidans innehåll och, där relevant, gör sidan kvalificerad för aktuella sökfunktioner.

## Tre olika frågor

Håll isär:

1. **Giltig JSON-LD:** kan JSON parsas?
2. **Giltig Schema.org-modell:** är typer/properties rimliga enligt Schema.org?
3. **Google-eligibility:** stöder Google aktuell markup för en viss Search feature och följer sidan Googles regler?

En sida kan klara 1 och 2 utan att ge ett Google rich result.

## Grundregler

1. Markera bara innehåll som faktiskt finns och är relevant på sidan.
2. Hitta inte på reviews, ratings, priser, lagerstatus eller företagsdata.
3. Använd inte structured data som keywordfält.
4. Kontrollera Googles aktuella stöd före implementation som har rich result som mål.
5. Anta inte att en tidigare stödd feature fortfarande visas.
6. JSON-LD är ofta praktiskt, men välj format efter miljö och krav.
7. Structured data garanterar aldrig visning i rich results.

## Arbetsflöde

### 1. Identifiera sidans verkliga objekt

Fråga:
- Vad handlar sidan faktiskt om?
- Vilken entitet är primär?
- Vilka andra entiteter finns explicit?
- Vilka data är synliga för användaren?

### 2. Bestäm mål

Exempel:
- beskriva organisation/företag,
- beskriva en produkt,
- beskriva en artikel,
- breadcrumbs,
- lokal verksamhet,
- event,
- rich result-eligibility.

Välj inte schema bara för att det "låter SEO".

### 3. Kontrollera aktuellt stöd

När Google rich result är målet:
- kontrollera aktuell Search Central-dokumentation,
- required properties,
- recommended properties,
- innehållspolicy,
- tekniska riktlinjer,
- region-/språkbegränsningar,
- om funktionen har avvecklats.

Hårdkoda inte en evig lista av supported types.

### 4. Inventera befintlig markup

Kontrollera:
- JSON-LD,
- Microdata,
- RDFa,
- duplicerade plugins,
- flera motstridiga entiteter,
- stale priser/URL:er,
- felaktiga IDs.

### 5. Modellera entiteter

När flera objekt hör ihop, använd tydliga relationer.

Praktiskt i JSON-LD:
- stabila `@id` där de hjälper att återanvända samma entitet,
- `@graph` när flera relaterade objekt ska beskrivas,
- canonical URL som grund när lämpligt.

Skapa inte artificiella relationer som inte stöds av sidans innehåll.

### 6. Implementera

- generera giltig JSON-LD,
- använd verkliga värden,
- håll markup synkad med sidans data,
- föredra att hämta produkt/pris/lager från samma source of truth som UI när möjligt.

### 7. Validera syntax

Lokalt:

```bash
python3 scripts/schema_check.py https://example.se/sida
```

Skriptet kontrollerar JSON-LD-syntax och listar typer. Det avgör inte Google-eligibility.

### 8. Validera externt

Använd:
- Schema.org Validator för modell/syntax,
- Google Rich Results Test för Google-stödda features,
- Search Console efter deployment.

### 9. Kontrollera renderad sida

Verifiera att:
- markup finns där Google kan se den,
- värden matchar synligt innehåll,
- JS-genererad markup faktiskt renderas korrekt.

### 10. Monitorera

Efter lansering:
- Search Console enhancement reports där tillgängliga,
- warnings/errors,
- rich result-förändringar,
- dokumentationsändringar.

## Särskild försiktighet

- Review/rating markup har detaljerade policykrav.
- LocalBusiness ska beskriva verklig verksamhet och korrekt plats/serviceinformation.
- Product ska inte fyllas med fiktiva offers.
- FAQ-liknande features kan ändras eller avvecklas; kontrollera alltid aktuell dokumentation.
- Lägg inte till särskild "AI schema" utan en verklig standard och ett verkligt användningsfall.

## Output

### Rekommenderad modell
Vilka typer och varför.

### Kod
Fullständig markup när användaren ber om implementation.

### Validering
- JSON:
- Schema.org:
- Google:
- Datakonsistens:

### Risker/öppna frågor
Endast verkliga oklarheter.

## Kvalitetskontroll

- Matchar markup synligt innehåll?
- Finns påhittad data?
- Har aktuell Google-support verifierats?
- Blandas Schema.org-giltighet ihop med Google rich result?
- Är värden dynamiskt synkade där de förändras ofta?
