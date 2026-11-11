---
name: "onpage-seo-audit"
description: "当用户要求「SEO审计」「SEO检查」「网站SEO分析」「on-page SEO」或审计本地项目源码的 SEO 时使用。对线上/本地网站（URL）或项目源码（目录）进行 on-page SEO 审计并列出发现的问题。"
summary: "Performs on-page SEO audits on live URLs or local source code repositories."
category: "technical-crawling-indexing"
platforms: ["unspecified"]
platform_source: "none"
repo: "linhan-dev/onpage-seo-audit"
repo_url: "https://github.com/linhan-dev/onpage-seo-audit"
source: "https://github.com/linhan-dev/onpage-seo-audit/blob/HEAD/SKILL.md"
raw_source: "https://raw.githubusercontent.com/linhan-dev/onpage-seo-audit/HEAD/SKILL.md"
ref: "HEAD"
discovered_via: "github-search"
license: "MIT"
stars: 26
collected: "2026-11-11"
---

<!-- Unspecified skill · linhan-dev/onpage-seo-audit · SKILL.md · MIT
     Source: https://github.com/linhan-dev/onpage-seo-audit/blob/HEAD/SKILL.md
     Detected by: none · Regenerated on every run; edit the upstream skill, not this copy. -->

# SEO 网站审计

当用户调用此 skill 时：

1. 确定审计目标与模式：
   - 用户提供线上或本地运行的 URL（如 `https://example.com` 或 `http://localhost:3000`）→ 黑盒模式，审计网站的实际表现。
   - 用户提供本地项目目录路径 → 源码模式，审计代码中的 SEO 问题。
   - 用户没有说明审计目标时，先询问：要审计网站（提供 URL）还是项目源码（提供目录路径）。
2. 读取 skill 所在目录下 `./docs/` 中的所有 Markdown 标准文档（路径相对于 SKILL.md 解析），理解其中的检查项和严重级别定义。两种模式共用这套规则。

   按步骤 1 确定的模式，执行步骤 3（黑盒）或步骤 4（源码）：

3. 黑盒模式 — 获取页面内容：
   - 允许使用脚本发现页面内链，但仅此而已：
     ```bash
     python3 ./scripts/extract_links.py <url>
     ```
     该脚本路径相对于 SKILL.md 解析。脚本会输出按 URL 排序的同域内链，每行一个链接，同前缀链接自然相邻。链接发现后，必须逐页、逐项由 AI 亲自检查，禁止用脚本（Python、Shell、Node 等）批量生成审计结果或替代逐项判断。
   - 对发现的页面以及站点级文件（如 robots.txt、sitemap.xml）进行抓取，把每个页面返回的 HTML/文本内容完整交给 AI 分析。允许使用 `curl`、`grep` 等简单工具完成抓取、简单字符串确认等辅助性工作，但**不得**用脚本批量检测元素、批量判定问题、或只做关键字匹配后跳过页面不读内容。必须逐页、逐项认真阅读并判断。

4. 源码模式 — 获取源码内容：
   - 定位项目里影响 SEO 的文件并逐一阅读：HTML 模板（.html/.hbs/.ejs/.jsp 等）、前端框架的 head/metadata 定义（如 Next.js 的 layout.tsx/_document、Nuxt/Vue 的 head 配置、React Helmet）、路由定义（pages/、app/、路由配置文件）、站点级文件（robots.txt、sitemap.xml）及静态资源目录。允许用 `find`、`grep` 等工具定位文件，但必须由 AI 亲自阅读文件内容。
   - 静态可确认的检查项直接判断：URL 架构与路由定义、SSR/CSR 渲染方式、meta 与结构化数据模板、语义 HTML 结构等。必须通过线上验证的检查项（性能、安全头、实际渲染结果、部署状态）标注「需部署后验证」，不强行下结论。

5. 根据 `./docs/` 中的标准逐项检查，整理出问题列表。检查过程必须由 AI 真正理解内容后做出判断：先读取页面内容或源码，再对照标准文档中的检查项、严重级别和示例，确认问题是否存在。可以用简单工具抓取或做零散的确认，但**不能**把「检查某类元素」直接丢给一个脚本去批量跑。每个问题类型是一个独立条目，包含：
   - 问题标题
   - 引用的标准文档与规则
   - 当前受影响的 URL 列表
   - 修复建议
