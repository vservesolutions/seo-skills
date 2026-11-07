export const RSS_FIXTURE = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:content="http://purl.org/rss/1.0/modules/content/" xmlns:dc="http://purl.org/dc/elements/1.1/">
  <channel>
    <title>Example SEO Blog</title>
    <link>https://example.com/blog</link>
    <item>
      <title><![CDATA[Core Web Vitals: what changed in 2026]]></title>
      <link>https://example.com/blog/core-web-vitals-2026?utm_source=rss</link>
      <pubDate>Tue, 03 Nov 2026 10:00:00 +0000</pubDate>
      <dc:creator>Jane Doe</dc:creator>
      <description><![CDATA[<p>LCP and INP thresholds changed for mobile.</p>]]></description>
      <content:encoded><![CDATA[<p>Google updated the thresholds. Preload the hero image to improve LCP.</p>]]></content:encoded>
      <category>performance</category>
    </item>
    <item>
      <title>Crawl &amp; index: a &gt; b</title>
      <link>/blog/crawl-and-index</link>
      <guid isPermaLink="false">tag:example.com,2026:2</guid>
      <description>Robots.txt and sitemap basics for large sites.</description>
    </item>
  </channel>
</rss>`;

export const ATOM_FIXTURE = `<?xml version="1.0" encoding="utf-8"?>
<feed xmlns="http://www.w3.org/2005/Atom">
  <title>Atom SEO Blog</title>
  <entry>
    <title>Hreflang mistakes that cost traffic</title>
    <link rel="alternate" href="/hreflang-mistakes"/>
    <id>tag:example.org,2026:1</id>
    <updated>2026-10-01T08:00:00Z</updated>
    <author><name>Sam Lee</name></author>
    <summary type="html">&lt;p&gt;Missing x-default is a common hreflang error.&lt;/p&gt;</summary>
  </entry>
</feed>`;

export const RDF_FIXTURE = `<?xml version="1.0" encoding="utf-8"?>
<rdf:RDF xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#" xmlns="http://purl.org/rss/1.0/" xmlns:dc="http://purl.org/dc/elements/1.1/">
  <channel rdf:about="https://example.net/feed">
    <title>Example Roundtable</title>
  </channel>
  <item rdf:about="https://example.net/google-update">
    <title>Google confirms a core update rollout</title>
    <link>https://example.net/google-update</link>
    <dc:date>2026-11-01T00:00:00Z</dc:date>
    <description>Ranking volatility is expected during the rollout.</description>
  </item>
</rdf:RDF>`;

export const ARTICLE_HTML = `<!doctype html>
<html>
<head>
  <title>How to fix LCP | Example Blog</title>
  <meta property="og:title" content="How to fix LCP">
  <meta name="description" content="A practical guide to shaving seconds off Largest Contentful Paint.">
  <meta property="article:published_time" content="2026-10-05T09:30:00Z">
  <meta property="og:site_name" content="Example Blog">
  <link rel="canonical" href="/blog/fix-lcp">
</head>
<body>
  <nav><a href="/">Home</a><a href="/blog">Blog</a></nav>
  <article>
    <h1>How to fix LCP</h1>
    <p>Largest Contentful Paint measures when the main content of a page becomes visible to real users.</p>
    <p>You should preload the hero image and serve responsive sizes to cut LCP on mobile connections.</p>
    <ul>
      <li>Use a CDN close to your audience to reduce TTFB for every first-time visitor.</li>
      <li>Avoid lazy loading the hero image because it delays the largest paint element.</li>
    </ul>
    <footer>Share this article</footer>
  </article>
  <script>var tracking = "should not appear";</script>
</body>
</html>`;

export const BLOG_TEXT = `Core Web Vitals failures usually start with the hero image. Preload the largest image and serve responsive sizes so mobile users see content sooner.
Google now measures INP instead of FID, so long tasks in JavaScript block interactions and hurt scores.
You should avoid lazy loading above-the-fold images because it delays Largest Contentful Paint.
Test with real user data from the Chrome UX Report before and after every performance change.
Avoid layout shift by reserving space for ads, embeds and web fonts on every template.`;
