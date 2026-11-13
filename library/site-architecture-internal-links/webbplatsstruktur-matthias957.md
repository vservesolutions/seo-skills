---
name: "webbplatsstruktur"
description: "Omsätter ett godkänt sidunderlag till logisk webbplatshierarki, URL-struktur, navigation, breadcrumbs och crawlvägar. Använd vid \"webbplatsstruktur\", \"site architecture\", \"URL-struktur\", \"sajthierarki\", \"navigation\", \"breadcrumbs\", \"informationsarkitektur\", \"intern struktur\" eller när en redan definierad uppsättning sidor ska organiseras. Använd semantisk-seo först när frågan är vilka sidor som överhuvudtaget behövs."
category: "site-architecture-internal-links"
platforms: ["unspecified"]
platform_source: "none"
repo: "Matthias957/svenska-marknadsforingsskills"
repo_url: "https://github.com/Matthias957/svenska-marknadsforingsskills"
source: "https://github.com/Matthias957/svenska-marknadsforingsskills/blob/HEAD/skills/webbplatsstruktur/SKILL.md"
raw_source: "https://raw.githubusercontent.com/Matthias957/svenska-marknadsforingsskills/HEAD/skills/webbplatsstruktur/SKILL.md"
ref: "HEAD"
discovered_via: "github-search"
license: "MIT"
stars: 2
collected: "2026-11-13"
---

<!-- Unspecified skill · Matthias957/svenska-marknadsforingsskills · skills/webbplatsstruktur/SKILL.md · MIT
     Source: https://github.com/Matthias957/svenska-marknadsforingsskills/blob/HEAD/skills/webbplatsstruktur/SKILL.md
     Detected by: none · Regenerated on every run; edit the upstream skill, not this copy. -->

# Webbplatsstruktur

## Uppdrag

Gör en definierad uppsättning sidor enkel att:
- förstå för användare,
- navigera,
- länka internt,
- crawla,
- förvalta.

Denna skill bestämmer främst **hur godkända sidor organiseras**, inte marknadsresearchen som avgör vilka sidor som behövs.

## Input

Helst:
- godkänd sidlista eller `SITE-PLAN-DRAFT.json`,
- sidtyper,
- språk,
- geografi,
- befintliga URL:er om det är en redesign,
- viktigaste konverteringsvägarna,
- tekniska begränsningar.

Om sidlistan inte är beslutad och uppgiften egentligen kräver keyword/intent-research: använd `semantisk-seo`.

## Grundregler

1. Struktur ska följa användarlogik och innehållsrelationer.
2. URL:er ska vara stabila, begripliga och konsekventa.
3. Lägg inte in keywords i varje nivå bara för att upprepa dem.
4. Undvik onödigt djupa hierarkier.
5. Viktiga sidor ska ha tydliga interna crawlvägar.
6. Navigation och URL-struktur måste inte vara identiska, men skillnader ska vara avsiktliga.
7. Ändra inte befintliga rankande URL:er utan behov och migrationsplan.

## Arbetsflöde

### 1. Klassificera sidtyper

Exempel:
- startsida,
- huvudområde/hubb,
- tjänst/produktkategori,
- detaljsida,
- lokal sida,
- artikel/resurs,
- om/kontakt,
- policy/system.

Använd verkliga sidbehov; skapa inte sidtyper bara för att fylla en mall.

### 2. Bestäm parent/child-relationer

För varje sida:
- parent,
- siblings,
- children,
- relaterade sidor som inte är barn.

Hierarkin ska spegla informationsrelationen, inte bara keyword-sökvolym.

### 3. URL-struktur

För varje URL:
- använd svenska, begripliga slugs där det passar,
- håll conventions konsekventa,
- undvik onödiga nivåer,
- undvik datum/tekniska ID:n om de inte behövs,
- undvik att ändra URL när sidans identitet är oförändrad.

Svenska tecken kan tekniskt hanteras, men ASCII-slugs (`a`, `o`) kan vara enklare i vissa system. Följ projektets etablerade konvention konsekvent.

### 4. Huvudnavigation

Prioritera användarens viktigaste vägar.

Huvudnavigationen behöver inte innehålla varje SEO-sida.

Kontrollera:
- begriplig etikett,
- rimligt antal val,
- mobil navigation,
- att viktiga hubbar är nåbara.

### 5. Sekundär navigation

Använd vid behov:
- lokala index/hubbar,
- kategorinavigation,
- relaterade resurser,
- footer för sekundära men viktiga sidor.

Använd inte footer som enda crawlväg för hela informationsarkitekturen.

### 6. Breadcrumbs

För hierarkiska sajter:
- visa faktisk användarhierarki,
- håll label/URL konsekvent,
- implementera relevant breadcrumb markup via `strukturerad-data` om det passar.

### 7. Crawlvägar

För varje viktig sida:
- minst en relevant intern länk från redan nåbar sida,
- undvik orphan pages,
- länka från hubb där relationen är naturlig,
- kontrollera att länken är crawlbar tekniskt.

### 8. Internlänkningsram

Definiera relationer, inte exakt ankartext för varenda länk:

- parent → child,
- child → parent,
- relevant sibling → sibling,
- artikel/resurs → kommersiell sida när användarbehovet motiverar det,
- kommersiell sida → fördjupande resurs när den hjälper beslutet.

Ankartext ska vara beskrivande och naturlig.

### 9. Befintliga URL:er

Vid redesign:
- skapa old → new mapping,
- behåll URL när det är rimligt,
- använd permanenta redirects för verkliga flyttar,
- undvik massredirect till startsidan,
- koordinera med `teknisk-seo` och `indexering`.

### 10. Validera strukturen

Kontrollera:
- oavsiktliga orphan pages,
- samma sida på flera strukturella platser,
- onödigt djupa paths,
- navigation som inte matchar användarens uppgift,
- URL-kollisioner,
- inkonsekventa slugregler.

## Output

### Strukturträd

```text
/
├── tjanster/
│   ├── tjanst-a/
│   └── tjanst-b/
└── kunskap/
```

Använd endast som representation; tvinga inte denna exakta modell.

### URL-plan

| Sida | Parent | Föreslagen URL | Navigation | Breadcrumb | Viktiga relationer |
|---|---|---|---|---|---|

### Migrationsnoteringar
Endast när befintliga URL:er förändras.

## Kvalitetskontroll

- Organiserar du godkända sidor eller har du börjat göra ny semantic research?
- Är viktiga sidor nåbara?
- Är URL:erna stabila och konsekventa?
- Finns någon onödig hierarkinivå?
- Kräver ändringar redirectplan?
