---
name: "30x-seo-competitor-pages"
description: "生成 SEO 优化的竞品对比和替代方案页面。涵盖 \"X vs Y\" 布局、 \"X 替代方案\"页面、功能矩阵、schema 标记和转化优化。当用户说 \"对比页\"、\"vs页面\"、\"替代方案页\"、\"竞品对比\"或\"X vs Y\"时使用。"
category: "structured-data"
platforms: ["claude-code"]
platform_source: "declared+detected"
repo: "norahe0304-art/30x-seo-cn"
repo_url: "https://github.com/norahe0304-art/30x-seo-cn"
source: "https://github.com/norahe0304-art/30x-seo-cn/blob/HEAD/skills/30x-seo-competitor-pages/SKILL.md"
raw_source: "https://raw.githubusercontent.com/norahe0304-art/30x-seo-cn/HEAD/skills/30x-seo-competitor-pages/SKILL.md"
ref: "HEAD"
discovered_via: "github-search"
license: "MIT"
stars: 1
collected: "2026-11-14"
---

<!-- Claude Code skill · norahe0304-art/30x-seo-cn · skills/30x-seo-competitor-pages/SKILL.md · MIT
     Source: https://github.com/norahe0304-art/30x-seo-cn/blob/HEAD/skills/30x-seo-competitor-pages/SKILL.md
     Detected by: declared+detected · Regenerated on every run; edit the upstream skill, not this copy. -->

# 竞品对比与替代方案页面

创建高转化的对比和替代方案页面，用准确、结构化的内容
定向竞争意图关键词。

## 页面类型

### 1. "X vs Y" 对比页
- 两个产品/服务之间的直接对比
- 平衡的功能对功能分析
- 明确的结论或推荐及理由
- 目标关键词：`[产品A] vs [产品B]`

### 2. "X 替代方案"页
- 特定产品/服务的替代方案列表
- 每个替代方案有简要摘要、优缺点、最适合用例
- 目标关键词：`[产品]替代方案`、`[产品]的最佳替代品`

### 3. "最佳[类别]工具"汇总页
- 某类别顶级工具/服务的精选列表
- 明确说明排名标准
- 目标关键词：`最佳[类别]工具[年份]`、`顶级[类别]软件`

### 4. 对比表格页
- 多产品列的功能矩阵
- 如果是交互式的，可排序/可筛选
- 目标关键词：`[类别]对比`、`[类别]对比表`

## 对比表格生成

### 功能矩阵布局
```
| 功能             | 你的产品      | 竞品 A       | 竞品 B       |
|------------------|:------------:|:------------:|:------------:|
| 功能 1           | ✅           | ✅           | ❌           |
| 功能 2           | ✅           | ⚠️ 部分     | ✅           |
| 功能 3           | ✅           | ❌           | ❌           |
| 定价（起）       | ¥X/月        | ¥Y/月        | ¥Z/月        |
| 免费版           | ✅           | ❌           | ✅           |
```

### 数据准确性要求
- 所有功能声明必须可从公开来源验证
- 定价必须是最新的（包含"截至[日期]"说明）
- 更新频率：每季度审核或当竞品发布重大变更时
- 尽可能为每个竞品数据点链接到来源

## Schema 标记建议

### 带 AggregateRating 的 Product Schema
```json
{
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "[产品名称]",
  "description": "[产品描述]",
  "brand": {
    "@type": "Brand",
    "name": "[品牌名称]"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "[评分]",
    "reviewCount": "[数量]",
    "bestRating": "5",
    "worstRating": "1"
  }
}
```

### SoftwareApplication（软件对比用）
```json
{
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "[软件名称]",
  "applicationCategory": "[类别]",
  "operatingSystem": "[操作系统]",
  "offers": {
    "@type": "Offer",
    "price": "[价格]",
    "priceCurrency": "CNY"
  }
}
```

### ItemList（汇总页用）
```json
{
  "@context": "https://schema.org",
  "@type": "ItemList",
  "name": "最佳[类别]工具[年份]",
  "itemListOrder": "https://schema.org/ItemListOrderDescending",
  "numberOfItems": "[数量]",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "[产品名称]",
      "url": "[产品URL]"
    }
  ]
}
```

## 关键词定向

### 对比意图模式
| 模式 | 示例 | 搜索量信号 |
|------|------|-----------|
| `[A] vs [B]` | "钉钉 vs 飞书" | 高 |
| `[A] 替代方案` | "Figma替代方案" | 高 |
| `[A] 替代方案 [年份]` | "Notion替代方案2026" | 高 |
| `最佳[类别]工具` | "最佳项目管理工具" | 高 |
| `[A] vs [B] 对于[用例]` | "阿里云 vs 腾讯云 对于初创公司" | 中 |
| `[A] 评测 [年份]` | "Monday.com评测2026" | 中 |
| `[A] vs [B] 定价` | "HubSpot vs Salesforce定价" | 中 |
| `[A] 比 [B] 好吗` | "Notion比Confluence好吗" | 中 |

### 标题公式
- X vs Y：`[A] vs [B]：[关键差异点]（[年份]）`
- 替代方案：`[年份]年[N]个最佳[A]替代方案（免费和付费）`
- 汇总：`[年份]年[N]个最佳[类别]工具 — 对比与排名`

### H1 模式
- 匹配标题意图
- 自然包含主要关键词
- 保持在 70 字符以内

## 转化优化布局

### CTA 放置
- **首屏**：简要对比摘要配主要 CTA
- **对比表格后**："免费试用[你的产品]" CTA
- **页面底部**：最终推荐配 CTA
- 避免在竞品描述部分放置激进 CTA（降低信任度）

### 社会证明部分
- 与对比标准相关的客户评价
- G2/Capterra/信任平台评分（附来源链接）
- 展示从竞品迁移的案例研究
- "从[竞品]切换"的故事

### 定价亮点
- 清晰的定价对比表
- 突出价值优势（不只是最低价）
- 包括隐藏成本（设置费、按用户定价、超额费用）
- 链接到完整定价页

### 信任信号
- "最后更新[日期]"时间戳
- 有相关专业知识的作者
- 方法披露（如何进行对比）
- 披露自有产品关联

## 公平性指南

- **准确性**：所有竞品信息必须可从公开来源验证
- **无诽谤**：永远不要对竞品做出虚假或误导性声明
- **引用来源**：链接到竞品网站、评测网站或文档
- **及时更新**：当竞品发布重大变更时审核并更新
- **披露关联**：明确说明哪个产品是你的
- **平衡展示**：诚实承认竞品优势
- **定价准确性**：所有定价数据包含"截至[日期]"免责声明
- **功能验证**：尽可能测试竞品功能，否则引用文档

## 内部链接

- 从对比部分链接到你自己的产品/服务页面
- 相关对比页面之间交叉链接（如"A vs B"链接到"A vs C"）
- 讨论单个功能时链接到功能专属页面
- 面包屑：首页 > 对比 > [此页面]
- 页面底部的相关对比部分
- 链接到对比中提到的案例研究和评价

## 输出

### 对比页模板
- `COMPARISON-PAGE.md` — 带部分的即用型页面结构
- 功能矩阵表
- 含字数目标的内容大纲（最少 1,500 字）

### Schema 标记
- `comparison-schema.json` — Product/SoftwareApplication/ItemList JSON-LD

### 关键词策略
- 主要和次要关键词
- 相关长尾机会
- 与现有竞品页面的内容差距

### 建议
- 现有对比页的内容改进
- 新对比页机会
- Schema 标记添加
- 转化优化建议

[PROTOCOL]: 变更时更新此头部，然后检查 CLAUDE.md
