---
name: "google-pagespeed"
description: "Definitive expert skill for Google PageSpeed Insights & Core Web Vitals optimization. Covers LCP, INP, CLS, FCP, TTFB, TBT, Speed Index diagnostics; Lighthouse 13.x scoring; Field Data (CrUX) vs Lab Data; Mobile-First Indexing; image/font/JS/CSS optimization; bfcache, Speculation Rules, LoAF, View Transitions, HTTP/3, 103 Early Hints; WCAG 2.2 Accessibility; CSP/COOP/COEP security headers; Technical SEO; Agentic Web (llms.txt); framework-specific rules (Astro, Next.js, WordPress, Vite, React); and a master troubleshooting decision matrix."
category: "core-web-vitals-performance"
platforms: ["claude-code", "windsurf", "antigravity"]
platform_source: "detected"
repo: "ApexionSoft/google-pagespeed-skill"
repo_url: "https://github.com/ApexionSoft/google-pagespeed-skill"
source: "https://github.com/ApexionSoft/google-pagespeed-skill/blob/HEAD/SKILL.md"
raw_source: "https://raw.githubusercontent.com/ApexionSoft/google-pagespeed-skill/HEAD/SKILL.md"
ref: "HEAD"
discovered_via: "github-search"
license: "MIT"
stars: 1
collected: "2026-11-13"
---

<!-- Claude Code, Windsurf, Antigravity skill · ApexionSoft/google-pagespeed-skill · SKILL.md · MIT
     Source: https://github.com/ApexionSoft/google-pagespeed-skill/blob/HEAD/SKILL.md
     Detected by: detected · Regenerated on every run; edit the upstream skill, not this copy. -->

# Google PageSpeed Insights & Core Web Vitals — Complete Optimization Skill

This skill provides AI coding assistants (Antigravity, Claude Code, Cursor, Windsurf, Copilot) and software engineers with the **complete, authoritative** diagnostic methodology, mathematical formulas, code-level remediation recipes, and decision matrices required to audit, optimize, and consistently achieve 90–100 (Green) performance scores on Google PageSpeed Insights across any web platform.

**Applicable Frameworks:** Astro, Next.js, Nuxt.js, SvelteKit, Remix, Vite/React SPA, WordPress, Hugo, Gatsby, Vanilla HTML/CSS/JS.  
**Maintained by:** [ApexionSoft](https://www.apexionsoft.com/) — *Premier Digital Agency in Bangladesh (https://github.com/ApexionSoft)*

---

## 1. Core Web Vitals & Diagnostic Metrics Reference

When evaluating any website, **strictly adhere** to the official Google thresholds. These values are evaluated at the **75th percentile** of the 28-day CrUX rolling window for field data:

| Metric | Full Name | Type | Good (Pass) | Needs Improvement | Poor (Fail) | Lighthouse Weight | Key Focus Area |
| :--- | :--- | :--- | :--- | :--- | :--- | :---: | :--- |
| **LCP** | Largest Contentful Paint | **Core Web Vital** | **≤ 2.5s** | 2.5s – 4.0s | > 4.0s | **25%** | Hero images, banners, `<h1>` headings, `<video>` poster |
| **INP** | Interaction to Next Paint | **Core Web Vital** | **≤ 200ms** | 200ms – 500ms | > 500ms | *(Field only)* | Event handlers, main-thread blocking, UI responsiveness |
| **CLS** | Cumulative Layout Shift | **Core Web Vital** | **≤ 0.1** | 0.1 – 0.25 | > 0.25 | **25%** | Explicit dimensions, font fallbacks, ad-slot reservation |
| **FCP** | First Contentful Paint | Diagnostic | **≤ 1.8s** | 1.8s – 3.0s | > 3.0s | **10%** | Critical CSS, server response, font blocking |
| **TTFB** | Time to First Byte | Diagnostic | **≤ 800ms** | 800ms – 1800ms | > 1800ms | — | Edge caching, CDN, database indexing, SSD hosting |
| **TBT** | Total Blocking Time | Lab Metric | **≤ 200ms** | 200ms – 600ms | > 600ms | **30%** | JS execution chunks > 50ms (lab proxy for INP) |
| **SI** | Speed Index | Diagnostic | **≤ 3.4s** | 3.4s – 5.8s | > 5.8s | **10%** | Visual progress completeness of above-the-fold |

**Score Color Bands:**
- 🟢 **Good:** 90–100
- 🟡 **Needs Improvement:** 50–89
- 🔴 **Poor:** 0–49

---

## 2. Lighthouse Scoring Algorithm & Weight Formula

The aggregate Performance Score (0–100) is calculated via **weighted log-normal distribution** in Lighthouse 13.x:

```
┌─────────────────────────────────────────────────────────────────┐
│              Lighthouse Performance Scoring Weights              │
├──────────────────────────────────────────┬──────────────────────┤
│ Total Blocking Time (TBT)                │  30%                 │
│ Largest Contentful Paint (LCP)           │  25%                 │
│ Cumulative Layout Shift (CLS)           │  25%                 │
│ First Contentful Paint (FCP)             │  10%                 │
│ Speed Index (SI)                         │  10%                 │
├──────────────────────────────────────────┼──────────────────────┤
│ Time to Interactive (TTI)                │  0% (Removed in v10) │
│ First Input Delay (FID)                  │  0% (Replaced by INP)│
└──────────────────────────────────────────┴──────────────────────┘
```

> **Priority Rule:** Fixing **TBT + LCP + CLS** resolves **80%** of total performance score deductions. Always prioritize these three metrics first.

Each metric's raw value is mapped to a 0–100 subscore using a log-normal curve with metric-specific median and p10 values. The final score is the weighted average, clamped to 0–100 and rounded.

---

## 3. Field Data (CrUX) vs Lab Data (Lighthouse) — Critical Distinction

PageSpeed Insights shows data from **two fundamentally different sources**. Understanding this distinction is essential for correct diagnosis:

```
┌─────────────────────────────────────────────────────────────────────────┐
│                    PageSpeed Insights Data Sources                       │
├─────────────────────────────────────┬───────────────────────────────────┤
│      Field Data (Real World)        │      Lab Data (Synthetic/Sim)     │
├─────────────────────────────────────┼───────────────────────────────────┤
│ • Source: CrUX (Chrome Users)       │ • Source: Lighthouse Runner       │
│ • Aggregation: 28-day 75th %ile     │ • Instant Snapshot (At run-time)  │
│ • Real Network (4G/5G/Broadband)    │ • Emulated Moto G / Slow 4G      │
│ • Determines SEO & CWV Status       │ • For Debugging & Finding Bugs   │
│ • Key Interactivity Metric: INP     │ • Key Interactivity Metric: TBT  │
│ • Affected by real user behavior    │ • Deterministic & reproducible    │
│ • May require traffic threshold     │ • Always available instantly      │
└─────────────────────────────────────┴───────────────────────────────────┘
```

### Critical Rules:
1. **Google Search Console & SEO ranking** use **Field Data (CrUX)** exclusively — not lab scores.
2. A perfect **Lab Score of 100** has **zero SEO value** if Field Data Core Web Vitals are failing.
3. **New websites** without sufficient Chrome traffic will show "Not enough field data" — this is normal. Only lab data will be available until traffic accumulates.
4. **CrUX History API** (`chromeuxreport.googleapis.com/v1/records:queryHistoryRecord`) allows fetching 6-month historical CWV trends programmatically.

---

## 4. Mobile vs. Desktop Audit Protocol

Always audit **Mobile first**, in strict alignment with Google's **Mobile-First Indexing** policy.

### A. Test Configuration Differences

| Parameter | Mobile Audit | Desktop Audit |
| :--- | :--- | :--- |
| **Simulated Device** | Moto G Power (mid-range budget phone) | Standard laptop/desktop |
| **CPU Throttling** | **4x CPU Slowdown** | **No Slowdown (1x)** |
| **Network Throttling** | **Slow 4G** (RTT: 150ms, Down: 1.6 Mbps, Up: 750 Kbps) | **High-speed Cable** (RTT: 40ms, Down: 10 Mbps) |
| **Screen Resolution** | 412 × 823 px (DPR: ~2.6–3.0) | 1350 × 940 px (DPR: 1.0) |
| **Input Mode** | Touch & Gestures | Mouse click & Keyboard |
| **Scoring Difficulty** | Much harder (heavy JS tanks scores fast) | Comparatively easier |

### B. Mobile-Specific Mandatory Rules
1. **Touch Target Size:** All buttons, links, and menu items ≥ **48 × 48 px** with ≥ **8px** spacing between adjacent targets.
2. **Viewport Meta Tag:** Must include `<meta name="viewport" content="width=device-width, initial-scale=1.0">`. Never set `user-scalable=no` or `maximum-scale=1` (violates WCAG accessibility).
3. **Responsive Images:** Never serve desktop-sized (1200px) images to mobile (360–400px) viewports. Always use `srcset` with appropriate breakpoints.
4. **No Horizontal Overflow:** Zero horizontal scrollbar on any page (`overflow-x: hidden` or responsive grid containers).
5. **Tap Delay Elimination:** Ensure viewport scale is 1.0 for instant touch response (300ms delay elimination).

### C. Desktop-Specific Rules
1. **Multi-Column CLS:** Reserve ad slot dimensions in sidebars to prevent content shifting.
2. **High-Resolution Support:** Serve crisp 2x Retina images for MacBook/4K displays.
3. **Hover & Focus States:** Immediate visual feedback on hover; clear focus outline for keyboard navigation (Tab key).

### D. Google Mobile-First Indexing Policy (THE Most Critical Rule)
* Google's search engine uses **100% Mobile-First Indexing**.
* Even if a user searches from a desktop, Google evaluates the **mobile version** of the site for ranking.
* A desktop score of 100 is meaningless if mobile performance, accessibility, or SEO is poor — the **entire site's search ranking will suffer**.

---

## 5. Lighthouse Throttling — How Scores Are Computed

Understanding throttling is essential for correctly interpreting Lighthouse scores and avoiding false positives in CI.

### Network Throttling (Source: `docs/throttling.md`)

Lighthouse uses **Simulated Slow 4G** by default for mobile:

| Parameter | Mobile (Default) | Desktop |
| :--- | :--- | :--- |
| **Latency (RTT)** | 150ms | 40ms |
| **Download** | 1.6 Mbps | 10 Mbps |
| **Upload** | 750 Kbps | unlimited |
| **Represents** | ~85th %ile mobile (bottom 25% 4G / top 25% 3G) | High-speed broadband |

### CPU Throttling

| Parameter | Value |
| :--- | :--- |
| **Default multiplier** | **4× slowdown** relative to test machine |
| **Simulates** | Mid-tier mobile device (e.g., Moto G Power / Moto G4) |
| **BenchmarkIndex** | 125–800 for mid-tier mobile (shown at bottom of Lighthouse report) |
| **Override** | `--throttling.cpuSlowdownMultiplier=6` for weaker test machines |

### Three Throttling Modes

| Mode | Speed | Accuracy | Best For |
| :--- | :--- | :--- | :--- |
| **Simulated** (default) | ⚡ Fast | Moderate | CI pipelines — consistent, reproducible results |
| **DevTools** | 🐢 Slow | High | Edge-case debugging — real throttled network + CPU |
| **Packet-level** | 🐢🐢 Slowest | Highest | Production-accurate — requires WebPageTest or WinShaper |

> **Key Insight:** Simulated mode records network requests at full speed, then mathematically models slower conditions. This is why scores can vary slightly between runs. For absolute reproducibility in CI, use DevTools throttling with `--throttling-method=devtools`.

### Running Audits — All Methods

**Method 1: Local Lighthouse (Chrome + Node.js required)**
```powershell
# Full audit — save both JSON + HTML report
npx lighthouse https://your-site.com --output=json,html --output-path=./report --chrome-flags="--headless"

# Mobile audit (default)
npx lighthouse https://your-site.com --view

# Desktop audit
npx lighthouse https://your-site.com --preset=desktop --view

# DevTools throttling (more accurate, slower)
npx lighthouse https://your-site.com --throttling-method=devtools --view

# Custom CPU throttling (for CI machines)
npx lighthouse https://your-site.com --throttling.cpuSlowdownMultiplier=4 --view
```

**Method 2: PageSpeed Insights API (No Chrome needed, uses real CrUX data)**
```powershell
# Using the skill's Python script
python scripts/psi-audit.py --url https://your-site.com --strategy mobile

# Both mobile and desktop
python scripts/psi-audit.py --url https://your-site.com --strategy mobile
python scripts/psi-audit.py --url https://your-site.com --strategy desktop

# With API key (avoids rate limits — free at console.cloud.google.com)
python scripts/psi-audit.py --url https://your-site.com --key YOUR_API_KEY
```

**Method 3: Chrome DevTools**
1. Open Chrome → `F12` → **Lighthouse** tab
2. Select categories: Performance, Accessibility, Best Practices, SEO
3. Choose **Mobile** or **Desktop**
4. Click **Analyze page load**

**Method 4: WebPageTest (Packet-level throttling — most accurate)**
```
https://www.webpagetest.org/
→ Advanced Settings → Connection: 4G LTE / 3G Fast
→ Runs: 3 (for median)
→ Include Lighthouse: Yes
```

### Score Interpretation
| Score | Color | Status |
| :---: | :---: | :--- |
| 90–100 | 🟢 | Good — Production-ready |
| 50–89 | 🟡 | Needs Improvement — Fix before launch |
| 0–49 | 🔴 | Poor — Blocking issues present |

---

## 6. LCP (Largest Contentful Paint) Optimization Masterclass

LCP measures when the **largest above-the-fold element** becomes visible. It has **4 internal sub-phases**:

```
┌──────────────────────────────────────────────────────────────────┐
│                   LCP Sub-Phase Breakdown                        │
│                                                                  │
│  TTFB ──→ Resource Load Delay ──→ Resource Load ──→ Render Delay │
│  (~40%)      (Ideally 0ms)         (<500ms)        (Minimize)    │
└──────────────────────────────────────────────────────────────────┘
```

1. **TTFB (Time to First Byte):** Should not exceed 40% of total LCP budget. Fix with CDN, edge caching, database indexing.
2. **Resource Load Delay:** Time browser spends discovering the LCP resource. Fix with `<link rel="preload">`.
3. **Resource Load Duration:** Download time over network. Fix with compression (WebP/AVIF), CDN, smaller file sizes.
4. **Element Render Delay:** Time after download before rendering. Fix by removing render-blocking CSS/JS.

### LCP Optimization Rules (Mandatory)

**Rule 1: NEVER lazy-load the LCP element.**
```html
<!-- ❌ WRONG: lazy-loading the hero image -->
<img src="hero.webp" loading="lazy" />

<!-- ✅ CORRECT: eager loading with high fetch priority -->
<img src="hero.webp" loading="eager" fetchpriority="high" />
```

**Rule 2: Preload the LCP image in `<head>`.**
```html
<link rel="preload" fetchpriority="high" as="image" href="/images/hero.webp" type="image/webp" />
```

**Rule 3: Preconnect to third-party origins early.**
```html
<link rel="preconnect" href="https://cdn.example.com" crossorigin />
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link rel="dns-prefetch" href="https://analytics.example.com" />
```

**Rule 4: Inline critical CSS; defer non-critical stylesheets.**
```html
<head>
  <!-- Critical CSS inlined for instant first paint -->
  <style>
    :root{--bg:#fff}body{margin:0;font-family:sans-serif}.header{height:60px;background:#1e293b}
  </style>

  <!-- Non-critical CSS loaded asynchronously -->
  <link rel="preload" href="/assets/main.css" as="style" onload="this.onload=null;this.rel='stylesheet'" />
  <noscript><link rel="stylesheet" href="/assets/main.css" /></noscript>

  <!-- Scripts deferred -->
  <script src="/js/app.js" defer></script>
</head>
```

**Rule 5: Optimize server response.**
* Use HTTP/2 or HTTP/3 (QUIC).
* Enable Gzip or Brotli compression (prefer Brotli for 15–25% better compression).
* Use a CDN with edge nodes geographically close to users.
* Database: Add indexes, use connection pooling, implement query caching.

---

## 7. CLS (Cumulative Layout Shift) Elimination Architecture

CLS measures unexpected visual movement. Its mathematical formula:

$$\text{Layout Shift Score} = \text{Impact Fraction} \times \text{Distance Fraction}$$

Where:
* **Impact Fraction** = the percentage of the viewport area affected by the shift
* **Distance Fraction** = how far (as a fraction of viewport) the element moved

### CLS Elimination Rules (All Mandatory)

**Rule 1: Always set explicit dimensions or CSS `aspect-ratio` on media.**
```html
<img src="news.webp" width="720" height="405" alt="News Title"
     style="width: 100%; height: auto; aspect-ratio: 16/9;" />
```

**Rule 2: Reserve space for dynamic content (ads, banners, embeds).**
```css
.ad-slot-header {
  min-height: 250px;
  width: 100%;
  display: block;
  background-color: #f8fafc;
}

.video-embed-container {
  aspect-ratio: 16 / 9;
  width: 100%;
  background-color: #e2e8f0;
}
```

**Rule 3: Never inject content above existing visible content.** Notification bars, cookie banners, and popups must use overlay/floating positioning — never push content down.

**Rule 4: Use CSS `contain` for layout isolation.**
```css
.news-thumbnail-card {
  width: 100%;
  aspect-ratio: 16 / 9;
  overflow: hidden;
  contain: layout paint;
}
```

**Rule 5: CSS Animations — ONLY use `transform` and `opacity`.** Never animate `top`, `left`, `width`, `height`, `margin`, `padding` — these trigger layout recalculation and cause CLS.
```css
/* ❌ BAD: triggers layout shift */
.slide-in { animation: bad 0.3s; }
@keyframes bad { from { left: -100%; } to { left: 0; } }

/* ✅ GOOD: compositor-only, zero layout shift */
.slide-in { animation: good 0.3s; }
@keyframes good { from { transform: translateX(-100%); } to { transform: translateX(0); } }
```

**Rule 6: Font swap CLS prevention with metric overrides.**
```css
/* Primary web font */
@font-face {
  font-family: 'CustomFont';
  src: url('/fonts/CustomFont.woff2') format('woff2');
  font-weight: 400;
  font-style: normal;
  font-display: swap;
}

/* Fallback with metric overrides to match custom font dimensions */
@font-face {
  font-family: 'CustomFallback';
  src: local('Arial');
  ascent-override: 92%;
  descent-override: 24%;
  line-gap-override: 0%;
  size-adjust: 104%;
}

body {
  font-family: 'CustomFont', 'CustomFallback', sans-serif;
}
```

---

## 8. INP & TBT Reduction — JavaScript Performance Engineering

INP measures the latency from user interaction to the next visual update. It comprises **3 phases**:

$$\text{INP Total} = \text{Input Delay} + \text{Processing Time} + \text{Presentation Delay}$$

* **Input Delay:** Time waiting for the main thread to become free (blocked by Long Tasks).
* **Processing Time:** Time executing the event handler callback.
* **Presentation Delay:** Time for style recalculation, layout, paint, and compositing.

TBT is the lab proxy for INP — it sums all blocking time exceeding 50ms per task between FCP and TTI.

### Optimization Techniques

**Technique 1: Break Long Tasks with `scheduler.yield()`.**
```javascript
async function processLargeFeed(items) {
  for (const item of items) {
    renderItem(item);
    // Yield to main thread every iteration for responsive UI
    if ('scheduler' in window && 'yield' in window.scheduler) {
      await window.scheduler.yield();
    } else {
      await new Promise(resolve => setTimeout(resolve, 0));
    }
  }
}
```

**Technique 2: Offload heavy computation to Web Workers.**
```javascript
// main.js — keep the main thread free
const worker = new Worker('/js/data-worker.js');
worker.postMessage({ action: 'sort', data: largeDataset });
worker.onmessage = (e) => {
  renderSortedResults(e.data);
};

// data-worker.js — runs on separate thread
self.onmessage = (e) => {
  const sorted = e.data.data.sort((a, b) => b.score - a.score);
  self.postMessage(sorted);
};
```

**Technique 3: Use Passive Event Listeners for scroll/touch.**
```javascript
// ❌ BAD: blocks scrolling while handler runs
window.addEventListener('scroll', onScroll);
window.addEventListener('touchstart', onTouch);

// ✅ GOOD: never blocks scroll/touch, smoother experience
window.addEventListener('scroll', onScroll, { passive: true });
window.addEventListener('touchstart', onTouch, { passive: true });
```

**Technique 4: Defer third-party scripts aggressively.**
```javascript
// Load non-essential third-party scripts 2.5+ seconds after page load
window.addEventListener('load', () => {
  setTimeout(() => {
    const s = document.createElement('script');
    s.src = "https://cdn.onesignal.com/sdks/web/v16/OneSignalSDK.page.js";
    s.defer = true;
    document.head.appendChild(s);
  }, 2500);
});
```

**Technique 5: Debounce expensive event handlers.**
```javascript
function debounce(fn, delay) {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => fn(...args), delay);
  };
}
window.addEventListener('resize', debounce(recalculateLayout, 150));
```

**Technique 6: Use `requestIdleCallback` for non-urgent work.**
```javascript
requestIdleCallback(() => {
  // Non-critical analytics, prefetching, or background sync
  sendAnalyticsBeacon();
}, { timeout: 2000 });
```

### Diagnostic Tool: Long Animation Frames API (LoAF)
Chrome 123+ ships LoAF as the evolution of the Long Tasks API. Use it for deep INP attribution:
```javascript
const observer = new PerformanceObserver((list) => {
  for (const entry of list.getEntries()) {
    if (entry.duration > 50) {
      console.log('Long Animation Frame:', {
        duration: entry.duration,
        blockingDuration: entry.blockingDuration,
        scripts: entry.scripts.map(s => ({
          sourceURL: s.sourceURL,
          sourceFunctionName: s.sourceFunctionName,
          duration: s.duration
        }))
      });
    }
  }
});
observer.observe({ type: 'long-animation-frame', buffered: true });
```

---

## 9. Image & Media Optimization — Complete Guide

### A. Modern Image Format Hierarchy
1. **AVIF** — Best compression, full cross-browser support (2026). Use as primary.
2. **WebP** — Excellent compression, universal support. Use as fallback.
3. **JPEG XL (JXL)** — Experimental in Chrome 145+ (flag: `enable-jxl-image-format`), native in Safari 17+. Not yet recommended for production.
4. **PNG** — Only for images requiring transparency with no lossy option.
5. **SVG** — For icons, logos, and vector graphics only.

### B. Complete Responsive Image Pattern
```html
<!-- ✅ GOOD: Full responsive image with AVIF → WebP → fallback -->
<picture>
  <source srcset="/img/hero-320.avif 320w, /img/hero-720.avif 720w, /img/hero-1200.avif 1200w"
          sizes="(max-width: 600px) 100vw, (max-width: 1024px) 720px, 1200px"
          type="image/avif" />
  <source srcset="/img/hero-320.webp 320w, /img/hero-720.webp 720w, /img/hero-1200.webp 1200w"
          sizes="(max-width: 600px) 100vw, (max-width: 1024px) 720px, 1200px"
          type="image/webp" />
  <img
    src="/img/hero-720.webp"
    srcset="/img/hero-320.webp 320w, /img/hero-720.webp 720w, /img/hero-1200.webp 1200w"
    sizes="(max-width: 600px) 100vw, (max-width: 1024px) 720px, 1200px"
    width="1200"
    height="675"
    alt="Descriptive alt text for the hero image"
    loading="eager"
    fetchpriority="high"
    decoding="async"
    style="width: 100%; height: auto; aspect-ratio: 16/9; object-fit: cover;"
  />
</picture>
```

### C. Image Loading Rules
| Image Position | `loading` | `fetchpriority` | `decoding` |
| :--- | :--- | :--- | :--- |
| **LCP / Hero (above-the-fold)** | `eager` | `high` | `async` |
| **Above-the-fold (non-LCP)** | `eager` | `auto` | `async` |
| **Below-the-fold** | `lazy` | `low` | `async` |
| **Background / decorative** | `lazy` | `low` | `async` |

### D. Video Optimization
```html
<!-- Lazy-load video with poster image for instant visual -->
<video
  width="1280" height="720"
  poster="/img/video-poster.webp"
  preload="none"
  playsinline
  style="aspect-ratio: 16/9; width: 100%; height: auto;"
>
  <source src="/video/clip.webm" type="video/webm" />
  <source src="/video/clip.mp4" type="video/mp4" />
</video>
```

---

## 10. JavaScript Bundle Optimization — Code Splitting & Tree-Shaking

### A. Import Only What You Need (Tree-Shaking)
```javascript
// ❌ BAD: imports entire lodash library (~70KB gzipped)
import _ from 'lodash';
_.debounce(handler, 300);

// ✅ GOOD: imports only debounce function (~1KB)
import debounce from 'lodash/debounce';
debounce(handler, 300);
```

### B. Dynamic Imports for On-Demand Loading (Code Splitting)
```javascript
// ✅ GOOD: chart library loaded only when user clicks "Show Results"
const showPollResults = async () => {
  const { Chart } = await import('chart.js');
  renderChart(Chart);
};

// ✅ GOOD: route-based code splitting in React
const BlogPost = React.lazy(() => import('./pages/BlogPost'));
```

### C. Bundle Size Budgets
| Resource Type | Maximum Size (Compressed) |
| :--- | :--- |
| **Total JS bundle** | ≤ 150 KB (mobile), ≤ 300 KB (desktop) |
| **Total CSS** | ≤ 50 KB |
| **Single image (hero)** | ≤ 100 KB (mobile WebP), ≤ 200 KB (desktop) |
| **Web font per weight** | ≤ 30 KB (WOFF2, subset) |
| **Total page weight** | ≤ 1 MB (mobile), ≤ 2.5 MB (desktop) |

---

## 11. Font Loading & CLS-Free Typography

### Complete Font Loading Strategy
```html
<!-- Step 1: Preload the primary font in <head> -->
<link rel="preload" href="/fonts/CustomFont-Regular.woff2"
      as="font" type="font/woff2" crossorigin />
```

```css
/* Step 2: Declare @font-face with font-display: swap */
@font-face {
  font-family: 'CustomFont';
  src: url('/fonts/CustomFont-Regular.woff2') format('woff2');
  font-weight: 400;
  font-style: normal;
  font-display: swap;
  unicode-range: U+0000-00FF, U+0980-09FF; /* Latin + Bengali subset */
}

/* Step 3: Metric-override fallback to prevent CLS */
@font-face {
  font-family: 'CustomFallback';
  src: local('Arial');
  ascent-override: 92%;
  descent-override: 24%;
  line-gap-override: 0%;
  size-adjust: 104%;
}

/* Step 4: Font stack with fallback */
body {
  font-family: 'CustomFont', 'CustomFallback', system-ui, sans-serif;
}
```

### Font Optimization Checklist
- [ ] Use WOFF2 format only (best compression)
- [ ] Subset fonts to only needed character ranges (`unicode-range`)
- [ ] Preload primary font weight in `<head>`
- [ ] Set `font-display: swap` on all @font-face declarations
- [ ] Create metric-override fallback to match custom font dimensions
- [ ] Self-host fonts whenever possible (eliminates third-party TTFB)
- [ ] Use `next/font` in Next.js for automatic zero-CLS font optimization

---

## 12. Server, Caching & CDN Architecture

### A. Static Assets — 1-Year Immutable Cache
```http
# For hashed/fingerprinted assets (CSS, JS, images, fonts)
Cache-Control: public, max-age=31536000, immutable
```

### B. Dynamic Pages — Stale-While-Revalidate
```http
# For news articles, blog posts, API responses
Cache-Control: public, max-age=60, s-maxage=300, stale-while-revalidate=600
```

### C. HTML Documents — Short Cache with Revalidation
```http
# For HTML pages
Cache-Control: public, max-age=0, must-revalidate
ETag: "v1.2.3-abc"
```

### D. Compression
```http
# Server must enable (prefer Brotli > Gzip)
Content-Encoding: br
# Brotli provides 15-25% better compression than Gzip
```

### E. CDN Architecture Rules
1. Use a CDN with edge PoPs (Points of Presence) geographically close to your audience.
2. Enable HTTP/2 push or HTTP/3 (QUIC) for multiplexed connections.
3. Configure edge-side caching rules (Cloudflare Page Rules, Vercel Edge Config, etc.).
4. Set appropriate `Vary` headers for content negotiation (`Vary: Accept-Encoding`).

---

## 13. Security Headers & Best Practices

### A. Required Security Headers
```http
# HTTPS enforcement
Strict-Transport-Security: max-age=31536000; includeSubDomains; preload

# Cross-Origin isolation
Cross-Origin-Opener-Policy: same-origin
Cross-Origin-Embedder-Policy: require-corp

# Content Security Policy (remove unsafe-inline for production)
Content-Security-Policy: default-src 'self'; script-src 'self' https://cdn.example.com; style-src 'self' 'unsafe-inline'; img-src 'self' data: https:; font-src 'self';

# Prevent clickjacking
X-Frame-Options: SAMEORIGIN

# Prevent MIME sniffing
X-Content-Type-Options: nosniff

# Referrer policy
Referrer-Policy: strict-origin-when-cross-origin

# Permissions policy
Permissions-Policy: camera=(), microphone=(), geolocation=()
```

### B. Best Practices Checklist
- [ ] **Zero console errors:** No 404 resources, no uncaught exceptions, no hydration errors (React #418/#423).
- [ ] **Full HTTPS:** Every resource on the page must be loaded via `https://`. Zero mixed content.
- [ ] **DOCTYPE declaration:** `<!DOCTYPE html>` must be present.
- [ ] **Character encoding:** `<meta charset="UTF-8">` in `<head>`.
- [ ] **No `unload` event listeners:** Use `pagehide` or `visibilitychange` instead (bfcache compatibility).
- [ ] **No blocking password paste:** Never set `onpaste="return false"` on password fields.
- [ ] **No immediate notification prompts:** Don't request push notification permission on page load.
- [ ] **Correct image aspect ratios:** Displayed images must match their natural aspect ratio (no distortion).

---

## 14. DOM Management & Rendering Performance

### A. DOM Size Limits
| Metric | Recommended Limit | Lighthouse Warning |
| :--- | :--- | :--- |
| **Total DOM Elements** | **800 – 1,400** | > 1,500 elements |
| **Maximum DOM Depth** | **≤ 32 levels** | > 32 levels |
| **Max Children per Node** | **≤ 60** | > 60 children |

### B. CSS `content-visibility` for Rendering Optimization
```css
/* Skip rendering of off-screen sections — up to 70% render cost reduction */
.homepage-bottom-feed,
.site-footer,
.comments-section,
.related-articles {
  content-visibility: auto;
  contain-intrinsic-size: auto 600px; /* Estimated height for scroll stability */
}
```

### C. CSS Containment
```css
/* Isolate components to prevent layout thrashing */
.widget-card {
  contain: layout style paint;
}

/* Full containment for completely independent components */
.sidebar-ad {
  contain: strict;
  contain-intrinsic-size: 300px 250px;
}
```

---

## 15. Next-Gen Web Technologies

### A. Speculation Rules API — Instant Navigation (0s Load)
```html
<script type="speculationrules">
{
  "prerender": [
    {
      "source": "list",
      "urls": ["/top-stories", "/category/national"],
      "eagerness": "moderate"
    }
  ],
  "prefetch": [
    {
      "source": "document",
      "where": { "href_matches": "/*" },
      "eagerness": "conservative"
    }
  ]
}
</script>
```

Eagerness levels:
- `immediate` — Prerender as soon as rule is parsed
- `eager` — Prerender quickly (slight delay)
- `moderate` — Prerender on hover (200ms threshold)
- `conservative` — Prerender only on mousedown/touchstart

### B. Back/Forward Cache (bfcache) Compliance
bfcache enables instant back/forward navigation. Pages must comply with these rules:

**DO:**
```javascript
// ✅ Use pagehide instead of unload
window.addEventListener('pagehide', (event) => {
  if (event.persisted) {
    // Page is going into bfcache
  }
});

// ✅ Restore state on pageshow
window.addEventListener('pageshow', (event) => {
  if (event.persisted) {
    // Page was restored from bfcache — refresh stale data
    refreshTimestamps();
  }
});
```

**DON'T:**
```javascript
// ❌ These BREAK bfcache eligibility:
window.addEventListener('unload', handler);           // NEVER use
window.addEventListener('beforeunload', handler);     // Only use when form has unsaved data
```

**bfcache Blockers to Avoid:**
- `Cache-Control: no-store` on HTML documents (use for API responses only)
- Open `WebSocket` or `WebRTC` connections without cleanup
- `window.opener` references (use `rel="noopener"` on links)
- Unfinished `IndexedDB` transactions

**NotRestoredReasons API (Diagnostic):**
```javascript
// Check why bfcache restoration failed
const nav = performance.getEntriesByType('navigation')[0];
if (nav.notRestoredReasons) {
  console.log('bfcache blocked by:', nav.notRestoredReasons);
}
```

### C. View Transitions API
```css
/* Enable cross-document view transitions (Chrome 126+) */
@view-transition {
  navigation: auto;
}

/* Customize transition animations */
::view-transition-old(root) {
  animation: fade-out 0.2s ease-out;
}
::view-transition-new(root) {
  animation: fade-in 0.3s ease-in;
}
```

### D. HTTP/3 (QUIC) & 103 Early Hints
```http
HTTP/1.1 103 Early Hints
Link: </assets/main.css>; rel=preload; as=style
Link: </fonts/CustomFont.woff2>; rel=preload; as=font; crossorigin
Link: <https://cdn.example.com>; rel=preconnect; crossorigin

HTTP/1.1 200 OK
Content-Type: text/html; charset=UTF-8
...
```

103 Early Hints allows the server to send preload/preconnect hints **while the full response is still being generated**, shaving 100–500ms off critical resource discovery.

### E. CSS `@starting-style` & Popover API
```css
/* Browser-native popover with smooth entry animation — no JS framework needed */
[popover] {
  opacity: 0;
  transform: translateY(10px);
  transition: opacity 0.2s, transform 0.2s, display 0.2s allow-discrete;
}
[popover]:popover-open {
  opacity: 1;
  transform: translateY(0);
}
@starting-style {
  [popover]:popover-open {
    opacity: 0;
    transform: translateY(10px);
  }
}
```

---

## 16. Accessibility (WCAG 2.2) — Complete Rules

### A. Automated Audit Rules

| Audit | WCAG Criterion | Requirement | Fix |
| :--- | :--- | :--- | :--- |
| **Form Labels** | 1.3.1, 4.1.2 | All `<select>`, `<input>`, `<textarea>` need `<label>` or `aria-label` | `<select aria-label="Category">` |
| **Touch Target** | 2.5.8 (WCAG 2.2) | Interactive elements ≥ **24×24 CSS px** (Lighthouse) / **48×48 px** (Google mobile) | `button { min-width: 48px; min-height: 48px; }` |
| **Heading Order** | 1.3.1 | No level skipping: `h1` → `h2` → `h3` → `h4` | Never jump from `h1` to `h4` directly |
| **Color Contrast** | 1.4.3, 1.4.6 | Normal text: **4.5:1** minimum; Large text: **3:1** minimum | Check with DevTools contrast checker |
| **Image Alt Text** | 1.1.1 | Informative images: meaningful `alt`; Decorative: `alt=""` | Alt text ≠ filename; describe image content |
| **Focus Appearance** | 2.4.11 (WCAG 2.2) | Focus indicator must have ≥ **3:1** contrast, not hidden by sticky headers | `*:focus-visible { outline: 3px solid #2563eb; outline-offset: 2px; }` |
| **Focus Not Obscured** | 2.4.12 (WCAG 2.2) | Focused element must not be completely hidden behind modals/sticky bars | Ensure `z-index` and scroll management |
| **Keyboard Navigation** | 2.1.1 | All functionality accessible via keyboard (Tab, Enter, Escape) | Test full page with Tab key only |
| **Language Attribute** | 3.1.1 | `<html lang="en">` or appropriate language code | Always set on root element |
| **Link Purpose** | 2.4.4 | Links must have discernible text (not empty or icon-only without label) | `<a href="..." aria-label="Read more about article title">` |

### B. Manual Audit Reminders
- Screen reader testing (NVDA, VoiceOver, JAWS)
- Logical tab order follows visual order
- Skip navigation link for keyboard users
- Sufficient spacing between interactive elements
- No seizure-inducing flashing content (≤ 3 flashes/second)

---

## 17. Technical SEO Audit Standard

### A. Crawlability
```txt
# robots.txt
User-agent: *
Allow: /
Disallow: /admin/
Disallow: /api/
Disallow: /search?
Sitemap: https://yourdomain.com/sitemap-index.xml
```

### B. Essential Meta Tags
```html
<head>
  <title>Unique, Descriptive Page Title — Brand Name</title>
  <meta name="description" content="Compelling 150-160 character description of page content." />
  <link rel="canonical" href="https://yourdomain.com/current-page-slug" />
  <meta name="robots" content="index, follow" />

  <!-- Open Graph -->
  <meta property="og:title" content="Page Title" />
  <meta property="og:description" content="Page description" />
  <meta property="og:image" content="https://yourdomain.com/og-image.jpg" />
  <meta property="og:url" content="https://yourdomain.com/current-page" />
  <meta property="og:type" content="article" />

  <!-- Twitter Card -->
  <meta name="twitter:card" content="summary_large_image" />
</head>
```

### C. Structured Data (JSON-LD)
```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "NewsArticle",
  "headline": "Article Headline",
  "image": "https://yourdomain.com/images/article-hero.webp",
  "datePublished": "2026-08-16T00:00:00+06:00",
  "dateModified": "2026-08-16T00:00:00+06:00",
  "author": {
    "@type": "Person",
    "name": "Author Name"
  },
  "publisher": {
    "@type": "Organization",
    "name": "Publisher Name",
    "logo": {
      "@type": "ImageObject",
      "url": "https://yourdomain.com/logo.png"
    }
  }
}
</script>
```

### D. Additional SEO Requirements
- [ ] **Sitemap XML:** Valid `sitemap-index.xml` with `<lastmod>` dates
- [ ] **Hreflang tags:** For multilingual sites
- [ ] **Mobile-friendly viewport:** Present and valid
- [ ] **No noindex on important pages:** Verify with `<meta name="robots">`
- [ ] **HTTP status codes:** No 404 for important URLs; proper 301 redirects
- [ ] **Page title uniqueness:** Every page must have a unique `<title>`
- [ ] **Meta description uniqueness:** Every page must have a unique description

---

## 18. Agentic Web & AI Crawler Compatibility (llms.txt)

Host an `llms.txt` file at the domain root (`/llms.txt`) for LLM agent and AI crawler discovery:

```	ext
# Site Name
> Brief description of the website and its purpose.

### Main Sections
- [Section Name](https://yourdomain.com/section): Description of section content
- [Category](https://yourdomain.com/category): Description of category

### API Endpoints (if public)
- [API Docs](https://yourdomain.com/api/docs): REST API documentation

### Contact
- Email: contact@yourdomain.com
```

Additional considerations:
- Ensure HTML is semantically structured for AI parsing.
- Use `<article>`, `<nav>`, `<main>`, `<aside>`, `<header>`, `<footer>` semantic elements.
- Provide `aria-label` on navigation landmarks for AI agent comprehension.

---

## 19. Framework-Specific Optimization Rules

### A. Astro
- **Island Architecture:** Use `client:visible` (loads when scrolled into view) and `client:idle` (loads after page idle) for interactive components.
- **Zero Client JS by Default:** Astro ships zero JavaScript unless explicitly opted-in per component.
- **Hydration Error Prevention:** Ensure SSR output and client state are identical (prevent React Error #418).
- **Image Optimization:** Use `@astrojs/image` or Astro's built-in `<Image>` component for automatic WebP/AVIF generation.
- **Content Collections:** Use type-safe content collections for static site content.

### B. Next.js
- **`next/image`:** Automatic WebP/AVIF conversion, responsive `srcset`, lazy loading, and blur placeholder.
- **`next/font`:** Zero-CLS self-hosted fonts with automatic metric overrides.
- **React Server Components (RSC):** Render data-fetching components on the server to eliminate client bundle weight.
- **App Router:** Use the App Router with streaming SSR for progressive HTML delivery.
- **Route Segment Config:** `export const dynamic = 'force-static'` for ISR/SSG pages.

### C. WordPress
- **Full-Page Caching:** LiteSpeed Cache, WP Rocket, or WP Super Cache for < 200ms TTFB.
- **Object Caching:** Redis or Memcached for database query caching.
- **Image Optimization:** Use ShortPixel, Imagify, or EWWW for automatic WebP generation.
- **Plugin Audit:** Deactivate unused plugins; each plugin adds JS/CSS to every page.
- **Lazy Load:** Native WordPress lazy loading is enabled by default (WP 5.5+).

### D. Vite / React SPA
- **Code Splitting:** Use `React.lazy()` + `Suspense` for route-based splitting.
- **Tree-Shaking:** Vite's Rollup-based build automatically tree-shakes unused exports.
- **CSS Modules:** Scoped CSS that eliminates unused styles per component.
- **Preload Directives:** Vite automatically injects `<link rel="modulepreload">` for critical chunks.

### E. SvelteKit / Nuxt.js
- **SvelteKit:** Near-zero runtime overhead; server-side rendering by default; automatic code splitting per route.
- **Nuxt.js:** Use `<NuxtImage>` for optimized images; `nuxt/fonts` for zero-CLS fonts; ISR with `routeRules`.

---

## 20. Third-Party Script Control & Sandboxing

Third-party scripts (analytics, ads, chat widgets) are the **#1 cause of TBT/INP regressions**.

### A. Loading Strategy Matrix
| Script Type | Loading Strategy | Priority |
| :--- | :--- | :--- |
| **Google Tag Manager** | `async` in `<head>` | Medium |
| **Google Analytics (gtag)** | `async` in `<head>` | Medium |
| **Google AdSense** | Deferred `setTimeout` (2–3s after load) | Low |
| **OneSignal / Push SDKs** | Deferred `setTimeout` (2.5s+ after load) | Low |
| **Chat widgets (Intercom, Tawk)** | Load on user interaction (scroll/click) | Lowest |
| **Social media embeds** | `loading="lazy"` iframe or Facade pattern | Low |
| **YouTube/Vimeo** | Facade pattern: show thumbnail, load player on click | Low |

### B. Facade Pattern for Embeds
```html
<!-- Show a static thumbnail; load YouTube iframe only on click -->
<div class="youtube-facade" data-video-id="dQw4w9WgXcQ"
     style="aspect-ratio: 16/9; cursor: pointer; background: url('/img/yt-thumb.webp') center/cover;">
  <button aria-label="Play video" style="/* play button styles */">▶</button>
</div>

<script>
document.querySelector('.youtube-facade').addEventListener('click', function() {
  const id = this.dataset.videoId;
  this.innerHTML = `<iframe src="https://www.youtube.com/embed/${id}?autoplay=1"
    frameborder="0" allow="autoplay; encrypted-media" allowfullscreen
    style="width:100%;height:100%;position:absolute;top:0;left:0;"></iframe>`;
  this.style.position = 'relative';
});
</script>
```

### C. iframe Sandboxing
```html
<iframe src="https://third-party-widget.com"
  sandbox="allow-scripts allow-same-origin"
  loading="lazy"
  width="300" height="250"
  title="Advertisement"
  style="border: 0;">
</iframe>
```

---

## 21. Soft Navigations & SPA Core Web Vitals

For Single Page Applications (SPAs) that use client-side routing:

### A. Soft Navigations API (Experimental)
Chrome DevTools now tracks route-level LCP, INP, and CLS for SPA client-side transitions:
```javascript
const observer = new PerformanceObserver((list) => {
  for (const entry of list.getEntries()) {
    console.log('Soft Navigation:', {
      name: entry.name,
      startTime: entry.startTime,
      duration: entry.duration
    });
  }
});
observer.observe({ type: 'soft-navigation', buffered: true });
```

### B. SPA Performance Rules
1. Prefetch route data on link hover (not on route change).
2. Use skeleton screens instead of full-page loading spinners.
3. Implement progressive hydration — hydrate visible components first.
4. Keep route transitions under 300ms for perceived instant navigation.

---

## 22. PageSpeed Insights API Reference

### A. API Endpoint
```
GET https://pagespeedonline.googleapis.com/pagespeedonline/v5/runPagespeed
  ?url=https://example.com
  &category=PERFORMANCE
  &category=ACCESSIBILITY
  &category=BEST_PRACTICES
  &category=SEO
  &strategy=MOBILE
  &key=YOUR_API_KEY
```

### B. CrUX History API
```
POST https://chromeuxreport.googleapis.com/v1/records:queryHistoryRecord
  ?key=YOUR_API_KEY

Body:
{
  "url": "https://example.com/",
  "formFactor": "PHONE",
  "metrics": ["largest_contentful_paint", "interaction_to_next_paint", "cumulative_layout_shift"]
}
```

---

## 23. Master Troubleshooting Decision Matrix

When diagnosing performance issues, use this matrix for instant root-cause identification:

| Symptom | Root Cause | Immediate Fix |
| :--- | :--- | :--- |
| **LCP > 4s** | Unoptimized hero image, no preload, slow TTFB | `fetchpriority="high"` + preload + WebP/AVIF + CDN |
| **LCP > 2.5s** | Render-blocking CSS/JS, large hero image | Inline critical CSS, defer non-critical, compress images |
| **CLS > 0.25** | Missing image dimensions, ad injection, font swap | `aspect-ratio` + ad slot reservation + font metric overrides |
| **CLS > 0.1** | CSS animations using layout properties, late content injection | Use `transform`/`opacity` only, `contain: layout paint` |
| **TBT > 600ms** | Heavy third-party scripts, unbroken Long Tasks | Defer OneSignal/GTM 2.5s+, `scheduler.yield()`, Web Workers |
| **TBT > 200ms** | Synchronous JS execution, large bundle | Code split, dynamic import, tree-shake unused code |
| **INP > 500ms** | Expensive event handlers, layout thrashing in callbacks | Debounce, `requestAnimationFrame`, passive listeners |
| **INP > 200ms** | Main thread busy during interaction, forced synchronous layout | Break tasks with `scheduler.yield()`, avoid `offsetHeight` reads in loops |
| **FCP > 3s** | Render-blocking resources, slow server, large DOM | Inline critical CSS, `<link rel="preconnect">`, reduce DOM to < 1400 |
| **TTFB > 1.8s** | No CDN, slow database, no server-side caching | CDN edge caching, Redis/Memcached, database indexing, SSD hosting |
| **TTFB > 800ms** | Unoptimized backend, cold server starts | Full-page caching, 103 Early Hints, HTTP/3, connection pooling |
| **Speed Index > 5.8s** | Gradual above-the-fold rendering, large images | Preload LCP, inline critical CSS, `content-visibility: auto` |
| **SEO < 70** | `robots.txt` blocking, missing meta, no canonical | Fix `robots.txt` → `Allow: /`, add `<title>`, `<meta description>`, `<canonical>` |
| **Accessibility < 85** | Missing labels, low contrast, small touch targets, heading skip | `aria-label` on forms, 4.5:1 contrast, 48px buttons, fix heading order |
| **Best Practices < 90** | Console errors, 404 assets, mixed content, hydration mismatch | Fix broken links, ensure HTTPS everywhere, fix SSR/client state mismatch |
| **bfcache ineligible** | `unload` listener, `Cache-Control: no-store`, open WebSocket | Remove `unload`, use `pagehide`, remove `no-store` from HTML |

---

## 24. Verification Protocol

After implementing any optimization, **always** perform this verification sequence:

### Step 1: Lab Audit
1. Run Lighthouse in both **Mobile** and **Desktop** modes.
2. Confirm all metrics are in the **Good (Green)** range.
3. Verify the Performance score is **≥ 90**.

### Step 2: Console Verification
1. Open browser DevTools Console.
2. Confirm **zero errors** (no 404s, no uncaught exceptions, no hydration errors).
3. Check Network tab for mixed content warnings.

### Step 3: Core Web Vitals Field Validation
1. Check Google Search Console → Core Web Vitals report.
2. Monitor CrUX data for 28-day rolling window trends.
3. Use CrUX History API for programmatic regression detection.

### Step 4: Cross-Browser & Device Testing
1. Test on Chrome, Firefox, Safari, Edge.
2. Test on real mobile devices (not just emulation).
3. Verify responsive layout at 320px, 375px, 768px, 1024px, 1440px breakpoints.

### Step 5: bfcache Verification
1. Navigate to the page, then press Back.
2. Open DevTools → Application → Back/forward cache.
3. Click "Test back/forward cache" and confirm "Restored from bfcache."

---

## 25. Developer Quick-Reference Checklists

Use these before every code review, PR merge, or production deployment.

### HTML Performance Checklist
- [ ] `<!DOCTYPE html>` is the very first line of every HTML document
- [ ] `<meta charset="utf-8">` is the **first element** inside `<head>`
- [ ] `<meta name="viewport" content="width=device-width, initial-scale=1">` present
- [ ] All `<img>` elements have `width`, `height`, and `alt` attributes
- [ ] All `<link rel="stylesheet">` tags are in `<head>` — **none in `<body>`**
- [ ] LCP hero image has `fetchpriority="high"` and `<link rel="preload">` in `<head>`
- [ ] All below-fold images have `loading="lazy"`
- [ ] `<title>` is unique and descriptive (≤ 60 chars) on every page
- [ ] `<meta name="description">` is unique (150–160 chars) on every page
- [ ] `<link rel="canonical">` set on all pages

### CSS Performance Checklist
- [ ] No `@import` directives inside CSS files (use `<link>` for parallel loading)
- [ ] Critical above-the-fold CSS is inlined in `<style>` in `<head>`
- [ ] Non-critical CSS is deferred (preload + onload trick or media=print trick)
- [ ] All `@font-face` rules have `font-display: swap` (or `optional`)
- [ ] Animations use only `transform` and `opacity` (GPU-composited, no layout triggers)
- [ ] `will-change: transform` on elements that animate frequently
- [ ] CSS is minified in production (cssnano, Lightning CSS, or PostCSS)
- [ ] Unused CSS purged from production bundle (PurgeCSS, Tailwind's JIT)

### JavaScript Performance Checklist
- [ ] No `document.write()` calls anywhere in codebase
- [ ] No synchronous XMLHttpRequest (XHR) calls
- [ ] Non-critical scripts use `defer` or `async` — **never blocking in `<head>`**
- [ ] JavaScript is minified in production (Terser, esbuild)
- [ ] Unused JS tree-shaken from production bundle
- [ ] Long tasks (> 50ms) broken up with `scheduler.yield()` or `setTimeout(fn, 0)`
- [ ] DOM reads batched before DOM writes (no layout thrashing)
- [ ] Third-party scripts delayed until user interaction or 3-second timeout

### Network & Server Checklist
- [ ] All assets served over HTTPS (no mixed content)
- [ ] HTTP/2 or HTTP/3 enabled on server and CDN
- [ ] Gzip or Brotli compression enabled for all text assets (HTML, CSS, JS, JSON, SVG)
- [ ] `Vary: Accept-Encoding` header on all compressed responses
- [ ] `Cache-Control: public, max-age=31536000, immutable` for all fingerprinted static assets
- [ ] `ETag` or `Last-Modified` headers on static files (conditional GET support)
- [ ] No redirect chains — HTTP → HTTPS must be a **single step** (no www→non-www intermediary)
- [ ] Server response time (TTFB) < 600ms globally
- [ ] Static assets served from a **cookieless CDN domain**
- [ ] `Strict-Transport-Security: max-age=63072000; includeSubDomains; preload` header active

### Image Checklist
- [ ] All images in **WebP or AVIF** format (not raw JPG/PNG where avoidable)
- [ ] Images optimally compressed (< 200 KiB for typical content images)
- [ ] Images served at correct display dimensions using `srcset` and `sizes`
- [ ] All below-fold images have `loading="lazy"` and `decoding="async"`
- [ ] Hero/LCP image has `fetchpriority="high"` — **never `loading="lazy"`**
- [ ] `<picture>` element with `<source type="image/avif">` and `<source type="image/webp">` fallbacks
- [ ] All `<img>` have explicit `width` and `height` attributes (prevents CLS)

### Security & Best Practices Checklist
- [ ] `Content-Security-Policy` header configured (no `unsafe-inline` in script-src)
- [ ] `X-Frame-Options: DENY` or `Content-Security-Policy: frame-ancestors 'none'`
- [ ] `X-Content-Type-Options: nosniff` header present
- [ ] `Referrer-Policy: strict-origin-when-cross-origin` set
- [ ] No JavaScript errors in browser console (zero 404s, zero uncaught exceptions)
- [ ] No deprecated browser APIs (check Chrome DevTools Issues panel)
- [ ] Third-party cookies migrated to Privacy Sandbox APIs
- [ ] All form inputs have `autocomplete` attributes

---

## 26. Lighthouse Audit ID Reference (Source-Extracted)

These are the official Lighthouse audit IDs extracted from `lighthouse-main/core/audits/`. Use these IDs when reading Lighthouse JSON reports or building CI tools.

### Performance Insights (Chrome Trace Engine — Lighthouse 13.x)
| Audit ID | Replaces | What it Diagnoses |
| :--- | :--- | :--- |
| `render-blocking-insight` | `render-blocking-resources` | CSS/JS tags in `<head>` blocking first render |
| `font-display-insight` | `font-display` | `@font-face` rules missing `font-display` |
| `image-delivery-insight` | `modern-image-formats`, `uses-optimized-images`, `uses-responsive-images` | Image format, size, lazy loading — consolidated |
| `lcp-discovery-insight` | `uses-rel-preload` | Late LCP resource discovery (LCP image buried in CSS or JS) |
| `lcp-breakdown-insight` | — | LCP sub-phase breakdown: TTFB → Load Delay → Load Duration → Render Delay |
| `cache-insight` | `uses-long-cache-ttl` | Static resources with short or missing `Cache-Control` TTL |
| `dom-size-insight` | `dom-size` | DOM trees > 800 nodes (warning) or > 1,400 nodes (severe) |
| `legacy-javascript-insight` | `legacy-javascript` | Polyfills and Babel transpilation for browsers that don't need them |
| `modern-http-insight` | `uses-http2` | Resources still served over HTTP/1.1 |
| `duplicated-javascript-insight` | `duplicated-javascript` | Same JS module bundled multiple times |
| `forced-reflow-insight` | — | JavaScript forcing layout thrashing (read/write interleaving) |
| `cls-culprits-insight` | — | Identifies the specific elements causing layout shifts |
| `inp-breakdown-insight` | — | Input Delay + Processing Time + Presentation Delay sub-phases |
| `network-dependency-tree-insight` | `critical-request-chains` | Visualization of serial request chains |
| `document-latency-insight` | — | TTFB and server response time |
| `slow-css-selector-insight` | — | CSS selectors causing slow style recalculation |
| `third-parties-insight` | `third-party-summary` | Third-party script main thread cost |
| `viewport-insight` | — | Viewport meta tag configuration for mobile |

### Byte Efficiency Audits
| Audit ID | Ignore Threshold | What it Checks |
| :--- | :--- | :--- |
| `unminified-css` | < 5% or < 2 KiB savings | CSS with whitespace/comments |
| `unminified-javascript` | < 5% or < 2 KiB savings | JS not minified in production |
| `unused-css-rules` | Per-stylesheet threshold | CSS rules not referenced by any element |
| `unused-javascript` | < 20 KiB unused per file | JS downloaded but never executed |
| `total-byte-weight` | Warning at > 1,600 KiB | Total page payload size |

### Diagnostic Audits (No Score Impact — For Debugging Only)
| Audit ID | Description |
| :--- | :--- |
| `long-tasks` | All tasks > 50ms on main thread |
| `bootup-time` | JS execution time broken down by script file |
| `mainthread-work-breakdown` | Breakdown of what occupies the main thread |
| `network-rtt` | Round-trip latency per origin |
| `layout-shifts` | Full list of layout shift events with element sources |
| `non-composited-animations` | CSS animations not running on GPU compositor thread |
| `redirects` | Redirect chains for all page resources |
| `interactive` | Time to Interactive (TTI) — informational only, no weight |
| `interaction-to-next-paint` | INP — field metric, not in lab score |

---

## 27. Google PageSpeed SDK — Complete 46-Rule Reference

These 46 rules were extracted from the original Google PageSpeed C++ SDK (`page-speed-master/src/pagespeed/rules/`). They power the PageSpeed Insights browser extension and API.

> **Key Source Constants:**
> - `kInlineThresholdBytes` = **768 bytes** — Max size for inlining CSS/JS
> - Cache-Control warning threshold = **7 days (604,800s)**
> - DNS hostname threshold = **8 unique hostnames**
> - Request header size threshold = **1,024 bytes**

### Network & Download Optimization Rules
| Rule ID | What it Checks | Fix |
| :--- | :--- | :--- |
| `EnableGzipCompression` | Resources > 1 KiB without gzip/Brotli | Enable `mod_deflate` (Apache) or `gzip on` (Nginx); use Brotli for 15-25% better compression |
| `LeverageBrowserCaching` | Resources with max-age < 7 days | `Cache-Control: public, max-age=31536000, immutable` for fingerprinted assets |
| `SpecifyACacheValidator` | Resources missing `ETag` or `Last-Modified` | Configure server to send `ETag` headers; enables conditional GETs |
| `SpecifyAVaryAcceptEncodingHeader` | Compressed resources missing `Vary: Accept-Encoding` | Add `Vary: Accept-Encoding` to ALL compressed responses — breaks shared proxy caches without it |
| `MinimizeRedirects` | Redirect chains | Each hop = one full round-trip; fix at server level |
| `AvoidLandingPageRedirects` | Initial page URL has redirects | Configure server to serve final URL directly; combine www/non-www at DNS level |
| `MakeLandingPageRedirectsCacheable` | Necessary redirects without cache headers | Even 301s should set `Cache-Control: max-age=86400` |
| `RemoveQueryStringsFromStaticResources` | Static assets using `?v=1.0` query strings | Use content-hash in filenames (`app.abc123.js`) instead — CDNs cache by URL, not headers |
| `ServeStaticContentFromACookielessDomain` | Static files served from cookie domain | Host static assets on `cdn.example.com` (no cookies) — saves bytes on every request |
| `ParallelizeDownloadsAcrossHostnames` | Too many resources on one hostname | HTTP/1.1 limit: 6 connections/hostname; shard assets (not needed for HTTP/2) |
| `EnableKeepAlive` | HTTP/1.0 without `Connection: keep-alive` | Ensure `keep-alive` is enabled; each new connection = TCP handshake overhead |
| `AvoidBadRequests` | 404/error responses loaded by the page | Broken resource references waste connection slots and bandwidth |
| `MinimizeRequestSize` | HTTP headers > 1,024 bytes | Avoid setting large cookies on root domain; use `HttpOnly; Secure; SameSite` |
| `ServeResourcesFromAConsistentURL` | Same resource from multiple URLs | Multiple URLs = separate cache entries; pick one canonical URL |
| `CombineExternalResources` | Multiple separate CSS/JS files | Bundle with Webpack/Vite (less critical with HTTP/2 multiplexing) |
| `MinimizeDNSLookups` | Resources from > 8 unique hostnames | Consolidate; pre-resolve with `<link rel="dns-prefetch">` |

### Minification Rules
| Rule ID | What it Checks | Fix |
| :--- | :--- | :--- |
| `MinifyCSS` | CSS with whitespace/comments | Use cssnano, Lightning CSS, PostCSS minification |
| `MinifyJavaScript` | JS not minified | Use Terser or esbuild `--minify`; ensure `NODE_ENV=production` |
| `MinifyHTML` | HTML with whitespace/comments | Use html-minifier-terser in CI build pipeline |

### Image Rules
| Rule ID | What it Checks | Fix |
| :--- | :--- | :--- |
| `OptimizeImages` | PNG/JPEG not optimally compressed | Use Squoosh, sharp, or ImageOptim; prefer WebP/AVIF |
| `ServeScaledImages` | Images served larger than display size | Use `srcset` with correct breakpoint widths |
| `SpecifyImageDimensions` | `<img>` without `width` and `height` | Always set both — enables browser space reservation |
| `SpriteImages` | Many small icons (< 2 KiB) loaded separately | Use CSS sprites or SVG `<use>` for icon systems |
| `LoadVisibleImagesFirst` | Off-screen images loaded before on-screen | Use `loading="lazy"` on all below-fold images |
| `InlinePreviewsOfVisibleImages` | Hero images with no placeholder | Use LQIP (Low Quality Image Placeholder) or blurred base64 preview |

### Critical Rendering Path Rules
| Rule ID | What it Checks | Fix |
| :--- | :--- | :--- |
| `AvoidCSSImport` | CSS files using `@import` | Replace with `<link rel="stylesheet">` — `@import` creates sequential load chains |
| `PutCSSInTheDocumentHead` | `<link rel="stylesheet">` in `<body>` | All stylesheets must be in `<head>` to prevent FOUC and re-renders |
| `SpecifyCharsetEarly` | `<meta charset>` missing or not first child of `<head>` | Make `<meta charset="utf-8">` the FIRST element in `<head>` — late charset forces full re-parse |
| `OptimizeTheOrderOfStylesAndScripts` | External scripts before stylesheets | Scripts before CSS block CSS download; always put CSS first |
| `InlineSmallResources` | CSS/JS files < 768 bytes served as external files | Inline resources under `kInlineThresholdBytes` (768 bytes) directly in HTML |
| `DeferParsingJavaScript` | Large synchronous JS in `<head>` | Use `defer` or `async`; only critical inline JS in head |
| `PreferAsyncResources` | Scripts without `async` or `defer` | Add `defer` to app scripts; `async` to analytics/tracking |
| `AvoidDocumentWrite` | `document.write()` calls in scripts | Replace with `document.createElement()` + `appendChild()` |
| `AvoidLongRunningScripts` | Tasks > 50ms on main thread | Break into chunks with `scheduler.yield()` or `setTimeout(fn, 0)` |
| `EliminateUnnecessaryReflows` | JS reading then writing DOM in loops | Batch all DOM reads first, then all DOM writes — eliminates layout thrashing |
| `AvoidExcessSerialization` | Excessive `JSON.stringify()`/`JSON.parse()` in hot paths | Minimize serialization; use binary formats or caching |

---

## 28. Optimized HTML Boilerplate Template

When building ANY web page from scratch, use this annotated template. Every element has a specific Lighthouse/PageSpeed justification.

```html
<!DOCTYPE html>
<!-- 1. DOCTYPE prevents quirks mode (PageSpeed: doctype rule) -->
<html lang="en">
<!-- 2. lang: accessibility + SEO (html-has-lang audit) -->
<head>
  <!-- 3. charset MUST be first child of <head> (PageSpeed: SpecifyCharsetEarly) -->
  <meta charset="utf-8">

  <!-- 4. Viewport required for mobile (PageSpeed: MobileViewport rule) -->
  <meta name="viewport" content="width=device-width, initial-scale=1">

  <!-- 5. SEO meta (Lighthouse: document-title, meta-description audits) -->
  <title>Page Title — Site Name</title>
  <meta name="description" content="Compelling description, 150-160 characters.">

  <!-- 6. Canonical URL prevents duplicate content -->
  <link rel="canonical" href="https://example.com/this-page">

  <!-- 7. Preconnect to external origins BEFORE anything references them.
       Saves one DNS+TCP+TLS roundtrip (~100-300ms) per origin.
       ONLY preconnect to origins you DEFINITELY use on this page. -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <!-- crossorigin is required for fonts (CORS) -->

  <!-- 8. dns-prefetch for origins you MIGHT use (lower priority than preconnect) -->
  <link rel="dns-prefetch" href="https://cdn.example.com">

  <!-- 9. Preload the LCP resource (hero image).
       fetchpriority="high" = highest browser priority signal.
       (Lighthouse: lcp-discovery-insight) -->
  <link rel="preload" as="image" href="/hero.avif" fetchpriority="high" type="image/avif">
  <link rel="preload" as="image" href="/hero.webp" fetchpriority="high" type="image/webp">

  <!-- 10. Preload critical font WOFF2 (prevents FOIT) -->
  <link rel="preload" as="font" href="/fonts/main.woff2" type="font/woff2" crossorigin>

  <!-- 11. Critical CSS INLINED here — ONLY above-the-fold styles.
       Eliminates render-blocking (Lighthouse: render-blocking-insight).
       Keep under 14 KB (one TCP roundtrip = 14 KiB initial window). -->
  <style>
    *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
    body { font-family: system-ui, sans-serif; line-height: 1.6; }
    .hero { min-height: 100svh; display: grid; place-items: center; }
    /* Font face with font-display in critical CSS (PageSpeed: font-display-insight) */
    @font-face {
      font-family: 'MainFont';
      src: url('/fonts/main.woff2') format('woff2');
      font-display: swap;
      font-weight: 400;
    }
  </style>

  <!-- 12. Non-critical CSS loaded asynchronously (preload + onload trick).
       Avoids render-blocking. onload swaps rel from "preload" to "stylesheet". -->
  <link rel="preload" href="/css/non-critical.css" as="style"
        onload="this.onload=null;this.rel='stylesheet'">
  <noscript><link rel="stylesheet" href="/css/non-critical.css"></noscript>

  <!-- 13. Open Graph / Social meta -->
  <meta property="og:title" content="Page Title">
  <meta property="og:description" content="Description">
  <meta property="og:image" content="https://example.com/og-image.jpg">
  <meta property="og:url" content="https://example.com/this-page">
  <meta name="twitter:card" content="summary_large_image">

  <!-- 14. Favicon -->
  <link rel="icon" href="/favicon.ico" sizes="32x32">
  <link rel="icon" href="/icon.svg" type="image/svg+xml">
</head>
<body>

  <!-- HERO — Contains LCP element -->
  <header>
    <!-- 15. LCP image: AVIF/WebP with fallback, explicit dimensions (prevents CLS),
         fetchpriority="high", NO loading="lazy" above the fold -->
    <picture>
      <source srcset="/hero.avif" type="image/avif">
      <source srcset="/hero.webp" type="image/webp">
      <img src="/hero.jpg"
           alt="Descriptive alt text"
           width="1200" height="630"
           fetchpriority="high"
           decoding="async">
      <!-- NO loading="lazy" on LCP/above-fold images! -->
    </picture>

    <!-- 16. Navigation: always use real <a href> (Lighthouse: crawlable-anchors) -->
    <nav aria-label="Main navigation">
      <a href="/">Home</a>
      <a href="/about">About</a>
    </nav>
  </header>

  <main>
    <!-- 17. Below-fold images: always lazy load + explicit dimensions -->
    <img src="/content.webp"
         alt="Content description"
         width="800" height="450"
         loading="lazy"
         decoding="async">
  </main>

  <footer>...</footer>

  <!-- 18. Non-critical JS at end of body with defer.
       defer = execute after HTML parsed, in order.
       async = execute immediately when loaded (use for analytics only). -->
  <script src="/js/app.js" defer></script>

  <!-- 19. Third-party analytics: delayed loading pattern (protects TBT) -->
  <script>
    // Load analytics ONLY after user interaction OR 3 second timeout
    // This completely protects LCP and TBT lab scores
    let loaded = false;
    function loadAnalytics() {
      if (loaded) return;
      loaded = true;
      const s = document.createElement('script');
      s.src = 'https://www.googletagmanager.com/gtag/js?id=GA_ID';
      s.async = true;
      document.head.appendChild(s);
    }
    ['click', 'scroll', 'keydown', 'touchstart'].forEach(ev =>
      window.addEventListener(ev, loadAnalytics, { once: true, passive: true })
    );
    setTimeout(loadAnalytics, 3000);
  </script>

</body>
</html>
```

---

## 29. Critical CSS Workflow

**Goal:** Inline only above-the-fold CSS, defer everything else. This is the single biggest FCP improvement possible.

### What Goes INLINE in `<style>` (Critical)
```css
/* ONLY styles needed to render what is visible WITHOUT scrolling */

/* Base reset */
*, *::before, *::after { box-sizing: border-box; }
body { margin: 0; font-family: system-ui, -apple-system, sans-serif; }

/* Navigation (always visible) */
.nav { display: flex; justify-content: space-between; padding: 1rem 2rem; }

/* Hero section (above fold) */
.hero { min-height: 100svh; display: grid; place-items: center; }
.hero__title { font-size: clamp(2rem, 5vw, 4rem); }

/* Font face — must be in critical CSS if used above fold */
@font-face {
  font-family: 'Brand';
  src: url('/fonts/brand.woff2') format('woff2');
  font-display: swap;
  font-weight: 700;
}
```

### What Goes in Deferred External Stylesheet
```css
/* Everything below the fold:
   - Cards, grids, modals, footers
   - Print styles
   - Tablet/desktop media queries not affecting initial viewport */
.footer { ... }
.cards-grid { display: grid; ... }
.modal { display: none; ... }
@media print { ... }
```

### Automated Critical CSS Extraction
```bash
# Using critical (npm)
npx critical index.html --base . --inline --minify > index-critical.html

# Using critters (webpack/vite plugin — inline automatically at build)
# Add critters to your vite.config.js plugins
```

### Deferring Non-Critical CSS (Two Reliable Patterns)
```html
<!-- Pattern 1: preload + onload (Recommended) -->
<link rel="preload" href="/css/styles.css" as="style"
      onload="this.onload=null;this.rel='stylesheet'">
<noscript><link rel="stylesheet" href="/css/styles.css"></noscript>

<!-- Pattern 2: media trick -->
<link rel="stylesheet" href="/css/styles.css" media="print"
      onload="this.media='all'">
```

---

## 30. Resource Hints — Complete Guide

Resource hints tell the browser about future network requests. Used correctly they reduce TTFB and connection time.

| Hint | When to Use | Max Recommended |
| :--- | :--- | :---: |
| `preconnect` | You WILL load from this origin on this page | 2–3 max |
| `dns-prefetch` | You MIGHT load from this origin (lower priority) | Free to use more |
| `preload` | A resource on THIS page is critical but discovered late | Only critical resources |
| `prefetch` | A resource needed on the NEXT page user will likely visit | Low priority, safe |
| `modulepreload` | ES module script needed soon | Entry point modules |

```html
<!-- preconnect: ONLY 2-3 most important external origins -->
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>

<!-- dns-prefetch: cheaper version for less-critical third parties -->
<link rel="dns-prefetch" href="https://www.google-analytics.com">

<!-- preload: resource needed RIGHT NOW but discovered late by browser -->
<link rel="preload" as="image" href="/hero.webp" fetchpriority="high">
<link rel="preload" as="font" href="/fonts/body.woff2" type="font/woff2" crossorigin>
<link rel="preload" as="script" href="/js/critical-feature.js">

<!-- prefetch: load for NEXT navigation during idle time -->
<link rel="prefetch" href="/about/index.html">
<link rel="prefetch" as="script" href="/js/about-page.js">

<!-- modulepreload: ES module entry point -->
<link rel="modulepreload" href="/js/app.js">
```

> **Critical Rules:**
> - Only `preload` resources used on the **current** page — unused preloads trigger Lighthouse warning.
> - Max **2–3** `preconnect` hints (each reserves a socket; too many hurt performance).
> - `prefetch` is low priority and only downloads in idle time — safe to use more freely.

---

## 31. Third-Party Script Management

Third-party scripts (analytics, chat, ads, pixels) are the **#1 cause of poor TBT/INP scores**.

### Pattern 1: Delayed Loading (Best for Analytics/GTM)
```javascript
// Load only after user interaction OR 3-second timeout
// Completely protects LCP and TBT lab scores
let analyticsLoaded = false;
function loadOnce() {
  if (analyticsLoaded) return;
  analyticsLoaded = true;
  // Google Tag Manager
  (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
  new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
  j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
  'https://www.googletagmanager.com/gtm.js?id='+i+dl;
  f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','GTM-XXXXX');
}
['click', 'scroll', 'keydown', 'touchstart'].forEach(ev =>
  window.addEventListener(ev, loadOnce, { once: true, passive: true })
);
setTimeout(loadOnce, 3000);
```

### Pattern 2: Partytown — Web Worker Offloading (For Heavy Scripts)
```javascript
// Partytown runs ALL third-party scripts in Web Workers
// Moves 100% of third-party execution off the main thread
// Install: npm install @builder.io/partytown

// In your HTML:
// <script>partytown = { forward: ['dataLayer.push'] }</script>
// <script type="text/partytown" src="https://gtm.js?id=GTM-XXXX"></script>
```

### Pattern 3: Facade Pattern (For YouTube/Maps Embeds)
```html
<!-- Instead of loading full YouTube embed (500+ KiB JS) -->
<!-- Use a clickable thumbnail that loads the real player on click -->
<div class="video-facade" data-video-id="YOUTUBE_ID"
     style="position:relative; aspect-ratio:16/9; background:#000; cursor:pointer;">
  <img src="https://i.ytimg.com/vi/YOUTUBE_ID/hqdefault.jpg"
       alt="Video: Title here"
       width="480" height="360"
       loading="lazy"
       style="width:100%;height:100%;object-fit:cover;">
  <button aria-label="Play video"
          style="position:absolute;inset:0;margin:auto;width:68px;height:48px;">▶</button>
</div>
<script defer>
  document.querySelectorAll('.video-facade').forEach(el => {
    el.addEventListener('click', () => {
      const iframe = document.createElement('iframe');
      iframe.src = `https://www.youtube.com/embed/${el.dataset.videoId}?autoplay=1`;
      iframe.allow = 'autoplay; encrypted-media';
      iframe.allowFullscreen = true;
      iframe.style.cssText = 'width:100%;height:100%;border:0;';
      el.replaceWith(iframe);
    });
  });
</script>
```

---

## 32. CSS Animation Performance Rules

Animations are a common cause of CLS, TBT degradation, and visual jank.

### GPU-Safe Properties ONLY
```css
/* ✅ SAFE — runs on GPU compositor, zero layout recalculation */
.card:hover {
  transform: translateY(-4px) scale(1.02);
  opacity: 0.9;
  transition: transform 0.2s ease, opacity 0.2s ease;
}

/* ✅ will-change: hint browser to prepare GPU layer AHEAD OF TIME */
.modal {
  will-change: transform; /* Use sparingly — each layer uses GPU memory */
}

/* ❌ AVOID — triggers full layout recalculation on every frame */
.card:hover {
  top: -4px;       /* Triggers layout */
  width: 110%;     /* Triggers layout */
  margin-top: 4px; /* Triggers layout */
  height: 200px;   /* Triggers layout */
}
```

### Properties That NEVER Animate (Trigger Layout)
`top`, `left`, `right`, `bottom`, `width`, `height`, `min-height`, `max-height`, `margin`, `padding`, `border-width`, `display`, `position`

### CSS Containment for Isolated Components
```css
/* contain: layout — prevents this element's layout changes from affecting siblings */
.card-grid-item {
  contain: layout;
}

/* contain: strict — maximum isolation (layout + paint + size) */
.widget {
  contain: strict;
  width: 300px;
  height: 200px;
}

/* content-visibility: auto — skip layout/paint for off-screen containers */
.below-fold-section {
  content-visibility: auto;
  contain-intrinsic-size: 0 600px; /* Estimated height prevents scroll jump */
}
```

---

## 33. JavaScript Performance Patterns

### Avoid Layout Thrashing (PageSpeed: EliminateUnnecessaryReflows)
```javascript
// ❌ BAD — Forces layout on every iteration
const items = document.querySelectorAll('.item');
items.forEach(item => {
  const height = item.offsetHeight; // READ → forces layout
  item.style.height = height * 2 + 'px'; // WRITE → invalidates layout
  // Next READ forces layout again → THRASHING
});

// ✅ GOOD — Batch all READs first, then all WRITEs
const heights = Array.from(items).map(item => item.offsetHeight); // All READs
items.forEach((item, i) => {
  item.style.height = heights[i] * 2 + 'px'; // All WRITEs
});
```

### Break Up Long Tasks (PageSpeed: AvoidLongRunningScripts)
```javascript
// ❌ BAD — Single long task blocks main thread (hurts TBT)
function processLargeArray(data) {
  data.forEach(item => heavyProcessing(item)); // May run for 500ms+
}

// ✅ GOOD — Chunk into tasks < 50ms with scheduler.yield()
async function processInChunks(data, chunkSize = 50) {
  for (let i = 0; i < data.length; i += chunkSize) {
    const chunk = data.slice(i, i + chunkSize);
    chunk.forEach(item => heavyProcessing(item));
    // Yield to browser between chunks
    if ('scheduler' in window && 'yield' in scheduler) {
      await scheduler.yield(); // Modern browsers
    } else {
      await new Promise(resolve => setTimeout(resolve, 0)); // Fallback
    }
  }
}

// ✅ For heavy computation: use Web Worker
const worker = new Worker('/js/heavy-worker.js');
worker.postMessage({ data: largeArray });
worker.onmessage = (e) => updateUI(e.data);
```

### IntersectionObserver for True Lazy Loading
```javascript
// Use IntersectionObserver — no scroll event listeners (passive + efficient)
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const img = entry.target;
      img.src = img.dataset.src;
      img.removeAttribute('data-src');
      observer.unobserve(img);
    }
  });
}, {
  rootMargin: '200px 0px', // Start loading 200px before viewport edge
});
document.querySelectorAll('img[data-src]').forEach(img => observer.observe(img));
```

---

## 34. Service Worker Caching Strategy (Workbox)

Service Workers dramatically improve **repeat-visit performance** by caching assets locally.

```javascript
// sw.js — Service Worker with Workbox strategies
import { precacheAndRoute, cleanupOutdatedCaches } from 'workbox-precaching';
import { registerRoute } from 'workbox-routing';
import { CacheFirst, NetworkFirst, StaleWhileRevalidate } from 'workbox-strategies';
import { ExpirationPlugin } from 'workbox-expiration';

// 1. Precache all build output (JS, CSS, fonts) — versioned by Vite/Webpack
precacheAndRoute(self.__WB_MANIFEST);
cleanupOutdatedCaches();

// 2. HTML pages — NetworkFirst (always try network, fall back to cache)
registerRoute(
  ({ request }) => request.mode === 'navigate',
  new NetworkFirst({ cacheName: 'html-cache', networkTimeoutSeconds: 3 })
);

// 3. Images — CacheFirst (serve from cache; use network as fallback)
registerRoute(
  ({ request }) => request.destination === 'image',
  new CacheFirst({
    cacheName: 'image-cache',
    plugins: [new ExpirationPlugin({ maxEntries: 60, maxAgeSeconds: 30 * 86400 })],
  })
);

// 4. Fonts — CacheFirst with 1-year TTL
registerRoute(
  ({ url }) => url.origin === 'https://fonts.gstatic.com',
  new CacheFirst({
    cacheName: 'font-cache',
    plugins: [new ExpirationPlugin({ maxAgeSeconds: 365 * 86400 })],
  })
);

// 5. API responses — StaleWhileRevalidate (show cached, update in background)
registerRoute(
  ({ url }) => url.pathname.startsWith('/api/'),
  new StaleWhileRevalidate({ cacheName: 'api-cache' })
);
```

```javascript
// Register Service Worker in your main app JS
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js')
      .then(reg => console.log('SW registered:', reg.scope))
      .catch(err => console.error('SW registration failed:', err));
  });
}
```

---

## 35. Build Tool Performance Configuration

### Vite Configuration
```javascript
// vite.config.js
import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    target: 'es2020',         // Modern target — avoids unnecessary polyfills
    minify: 'esbuild',        // Fast minification
    cssCodeSplit: true,       // Only load CSS for current chunk
    chunkSizeWarningLimit: 200, // 200 KiB warning (Lighthouse: total-byte-weight)

    rollupOptions: {
      output: {
        // Split vendor from app code — vendor changes less → better cache hits
        manualChunks: {
          vendor: ['react', 'react-dom'],
          'page-home': ['./src/pages/Home.jsx'],
          'page-about': ['./src/pages/About.jsx'],
        },
        // Content-hash filenames for long-term caching
        assetFileNames: 'assets/[name]-[hash].[ext]',
        chunkFileNames:  'assets/[name]-[hash].js',
        entryFileNames:  'assets/[name]-[hash].js',
      },
    },
  },
});
```

### Webpack Optimization
```javascript
module.exports = {
  optimization: {
    usedExports: true,  // Tree shaking — removes unused exports
    sideEffects: true,

    splitChunks: {
      chunks: 'all',
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all',
        },
      },
    },
    minimize: true,     // Minify in production
  },
};
```

---

## 36. Pre-Deployment Performance Audit Workflow

Run this 5-step workflow before every production deployment.

### Step 1: Lab Audit (Local Lighthouse)
```bash
# Mobile audit (default — matches Google's Mobile-First Indexing)
npx lighthouse https://localhost:3000 --output=html,json --output-path=./report --chrome-flags="--headless"

# Desktop audit
npx lighthouse https://localhost:3000 --preset=desktop --view
```

### Step 2: Score Targets
| Category | Minimum | Ideal |
| :--- | :---: | :---: |
| **Performance** | ≥ 90 | 95+ |
| **Accessibility** | ≥ 95 | 100 |
| **Best Practices** | ≥ 95 | 100 |
| **SEO** | ≥ 90 | 100 |

### Step 3: Fix Issues in Score-Priority Order
1. **TBT issues** → 30% of score — break long tasks, defer JS
2. **LCP issues** → 25% of score — preload hero image, fix TTFB
3. **CLS issues** → 25% of score — add image dimensions, fix font shifts
4. **FCP/Speed Index** → 20% combined — inline critical CSS, eliminate render-blocking
5. **Accessibility fails** → each fail = 1.2–4.1% score loss
6. **SEO fails** → each fail = ~8% score loss
7. **Best Practices fails** → each fail = ~6% score loss

### Step 4: PageSpeed Insights API Verification (Live Site)
```bash
python scripts/psi-audit.py --url https://your-live-site.com --strategy mobile
python scripts/psi-audit.py --url https://your-live-site.com --strategy desktop
```

### Step 5: Pre-Deployment 10-Point Quick-Check
- [ ] All `<img>` have `width`, `height`, and `alt` attributes
- [ ] LCP hero image has `fetchpriority="high"` + `<link rel="preload">`
- [ ] All below-fold images have `loading="lazy"`
- [ ] All images in WebP or AVIF format (not raw JPG/PNG)
- [ ] CSS minified; non-critical CSS deferred with preload trick
- [ ] JS minified; non-critical JS loaded with `defer`
- [ ] `font-display: swap` on all `@font-face` rules
- [ ] `Cache-Control: public, max-age=31536000, immutable` on all static assets
- [ ] `Strict-Transport-Security` header active
- [ ] Zero `document.write()` or synchronous XHR calls in codebase

---

## 37. Comprehensive Reference Documents & Tooling Index

For deep-dive architectural investigations and specific source-code constant tables, consult the accompanying files in this repository:

### Standalone Technical Reference Guides
- [`references/core-web-vitals-encyclopedia.md`](./references/core-web-vitals-encyclopedia.md) — Comprehensive deep-dive on browser rendering pipeline, LoAF, Speculation Rules, and bfcache.
- [`references/lighthouse-audits-full.md`](./references/lighthouse-audits-full.md) — Complete list of 150+ Lighthouse audits with weights, categories, and source JS file mappings.
- [`references/lighthouse-scoring-weights.md`](./references/lighthouse-scoring-weights.md) — Mathematical formula, log-normal distribution curves, and scoring weight history.
- [`references/pagespeed-rules-full.md`](./references/pagespeed-rules-full.md) — All 46 Google PageSpeed SDK C++ rules with source constants (`kInlineThresholdBytes`, etc.).
- [`references/scoring-methodology.md`](./references/scoring-methodology.md) — Exact scoring curve math, median values, and throttling parameters.

### Standalone Production Scripts
- [`scripts/psi-audit.py`](./scripts/psi-audit.py) — Google PageSpeed Insights REST API auditor CLI with markdown report generator.
- [`scripts/run-audit.ps1`](./scripts/run-audit.ps1) — Local headless Lighthouse runner with colorized terminal summary (PowerShell).
- [`scripts/convert-images-webp.py`](./scripts/convert-images-webp.py) — Batch recursive converter for WebP and AVIF assets.

### Engineering Checklists & Budgets
- [`checklists/budget.json`](./checklists/budget.json) — Lighthouse performance budget file for CI/CD assertions.
- [`checklists/core-web-vitals-audit-checklist.md`](./checklists/core-web-vitals-audit-checklist.md) — 35-point exhaustive performance audit checklist.
- [`checklists/wcag-2.2-accessibility-checklist.md`](./checklists/wcag-2.2-accessibility-checklist.md) — Complete WCAG 2.2 Level AA accessibility compliance audit.
- [`checklists/technical-seo-checklist.md`](./checklists/technical-seo-checklist.md) — Technical SEO, crawlability, indexing, and meta verification.
