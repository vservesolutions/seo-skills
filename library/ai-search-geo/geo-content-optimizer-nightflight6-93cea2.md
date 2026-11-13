---
name: "geo-content-optimizer"
description: "面向生成式答案与搜索场景，创建、优化或审查证据可靠的内容，提升可回答性、论断可追溯性、实体清晰度与原创价值。适用于 GEO 内容简报、答案地图、可引用论断审查、基于答案界面观察的优化及 GEO 内容审查。不应作为深度用户问题研究、常规 SEO 策划、技术 SEO 实施、排名或可见性监测、通用文章编辑、单纯事实核查、关键词研究或单个问题回答的主要 Skill。"
category: "ai-search-geo"
platforms: ["unspecified"]
platform_source: "none"
repo: "Nightflight6/open-agent-skills"
repo_url: "https://github.com/Nightflight6/open-agent-skills"
source: "https://github.com/Nightflight6/open-agent-skills/blob/HEAD/skills/zh-CN/geo-content-optimizer/SKILL.md"
raw_source: "https://raw.githubusercontent.com/Nightflight6/open-agent-skills/HEAD/skills/zh-CN/geo-content-optimizer/SKILL.md"
ref: "HEAD"
discovered_via: "github-search"
license: "MIT"
stars: 1
collected: "2026-11-13"
---

<!-- Unspecified skill · Nightflight6/open-agent-skills · skills/zh-CN/geo-content-optimizer/SKILL.md · MIT
     Source: https://github.com/Nightflight6/open-agent-skills/blob/HEAD/skills/zh-CN/geo-content-optimizer/SKILL.md
     Detected by: none · Regenerated on every run; edit the upstream skill, not this copy. -->

# 生成式答案内容优化器

<!-- parity: purpose -->
## 目的

通过清晰答案、可靠证据、一致实体、来源可追溯性与真正有用的原创价值，提升内容在生成式答案与搜索场景中的质量和参与资格。始终先服务读者，不得暗示能够访问隐藏的推荐、排名、检索或引用算法。

<!-- parity: guardrails -->
## 不可违反的边界

- 不得编造答案界面观察、引用、第三方提及、引语、证据或平台行为。
- 不得承诺首次推荐、被引用、品牌提及、AI 可见性、答案收录、排名、流量或转化。
- 不得声称掌握隐藏的 RAG、检索、推荐或引用偏好。
- 不设置实体或关键词密度、任意分块长度、强制 FAQ、强制列表、强制摘要或特殊 schema。
- 不得宣称 `llms.txt`、schema、爬虫可访问性或其他技术措施能够保证可见性或引用。
- 不生成大规模近似重复的查询页面，不制造权威性、好评、共识或竞争对手弱点。
- 遵守宿主 Agent 的工具、联网、访问、隐私和审批政策；用户明确禁止联网时不得联网，并保留其给定的来源边界。

<!-- parity: mode-routing -->
## 选择工作模式

自动判断满足请求所需的最小工作范围：

1. **brief（简报）：**研究可用证据，返回研究或覆盖摘要、答案地图、正式 GEO 内容简报和证据缺口，不起草全文。
2. **create（创建）：**新建一份有证据支撑、以回答需求为导向的内容资产。
3. **optimize（优化）：**改进现有内容，保留准确有用的材料，避免无必要的全文重写。
4. **audit（审查）：**诊断可回答性、证据、实体及 GEO 内容问题，不改写正文。

用户明确指定的模式或输出限制优先。只有当歧义会实质改变允许交付的内容时才提问。

<!-- parity: input-model -->
## 明确输入与边界

确定或合理推断：

- 主题、核心用户问题、受众、市场、语言、发布场景和工作模式；
- 已提供的证据、现有内容、品牌角色、重要论断、时效要求与禁用表述；
- 当前答案界面或平台指导是否既有价值又可访问。

明确指出重要缺失输入。不得把不存在的观察、来源、日期或平台能力补写成看似合理的事实。

<!-- parity: upstream-interfaces -->
## 复用合适的上游成果

阅读 [references/upstream-interfaces.md](references/upstream-interfaces.md)。接收 `search-intent-research` 中适用的问题、意图、受众、`normalization_confidence`、`cluster_confidence`、`intent_confidence`、证据强度与来源字段；接收 `seo-content-workflow` 中有用的搜索研究快照、SEO 内容简报、限定范围的 SERP 观察、内容主张、独特价值、支持性问题、证据计划和已有内容。

复用前检查范围、市场、语言、时效与来源。合适的上游证据已经满足需求时，不重复进行深度问题研究或 SERP 研究。

<!-- parity: answer-map -->
## 建立答案地图

阅读 [references/answer-map.md](references/answer-map.md)。将每个重要用户问题连接到范围清晰的直接答案、支持性论断、适用条件、限制、实体及证据引用。每个答案单元离开表格上下文后仍应可理解，且表达不得超出证据。

问题是规划锚点，不代表每个章节都要写成问答。不得强制任意句数、字数或分块长度。

`answer_confidence` 只表示直接答案在既定范围内能否获得支持。它必须与上游的归一化、聚类和意图置信度分开，也不得变成数值评分。

<!-- parity: geo-content-brief -->
## 建立 GEO 内容简报

阅读 [references/geo-content-brief.md](references/geo-content-brief.md)。将可追溯的 `primary_questions` 连接到选定的 `answer_unit_refs`、证据与论断要求、重要实体以及面向读者的 `recommended_structure`，但不重复完整的答案地图或论断台账记录。

在 brief 模式下必须使用这一正式契约，返回研究或覆盖摘要、答案地图、GEO 内容简报和证据缺口。未实际开展答案界面研究时，`answer_surface_refs` 保持为空；不得起草全文。

<!-- parity: claim-ledger -->
## 管理论断与证据

阅读 [references/evidence-citation.md](references/evidence-citation.md)。当论断重要、数量较多、变化快、涉及比较、技术或商业风险时，维护论断台账。

只使用以下论断状态：

- **verified（已核实）：**由已查阅且适当的证据直接支持；
- **attributed（有归属）：**明确表述为某个具名来源的说法；
- **inferred（推断）：**基于已说明证据作出的推理，并标明是推断；
- **unverified（未核实）：**缺乏支持、无法访问、已经过时或尚未解决。

不得为了让句子看起来更容易被引用而提高确定性。可引用论断必须清晰、范围明确、可追溯、保留语境，而且截取后不产生误导。未核实的重要内容应通过核验、降低确定性、列为待核验项或删除来解决。

<!-- parity: entity-consistency -->
## 保持实体一致

阅读 [references/entity-consistency.md](references/entity-consistency.md)。统一规范名称、别名、类型、关系、属性、消歧信息与证据引用。不得混淆产品、品类、组织、版本或技术概念，也不得以实体密度为目标。

<!-- parity: answer-surface -->
## 使用有边界的答案界面研究

阅读 [references/answer-surface-research.md](references/answer-surface-research.md)。当宿主工具与访问权限允许，并且当前观察确实有助于任务时，可以检查有边界的生成式答案样本并记录答案界面观察。

只记录真实看到的答案与引用。使用“在本次查看的答案中”“在已观察样本内”等限定表达。不得推断隐藏算法、把单次观察概括成平台规律、要求穷尽式监测，也不得创建 `ranking_position` 字段。无法访问时，说明限制并基于已提供的证据继续，绝不编造。

<!-- parity: content-workflow -->
## 创建、优化或审查内容

围绕核心问题与读者任务组织内容：

1. 在有帮助的地方直接、清楚地回答；
2. 解释支持理由、适用条件、例外与限制；
3. 使用具体、有证据支持的例子及一致的实体名称；
4. 为重要论断保留来源可追溯性；
5. 提供原创价值，而不是改写答案界面或搜索结果；
6. 让形式适合内容本身，不机械地把全文改成问答。

在 optimize 模式下，除非存在实质问题，否则保留准确段落以及作者或品牌的原有语气。在 audit 模式下，只交付诊断和行动建议。

<!-- parity: unique-value -->
## 提供真正有用的独特价值

优先采用第一手证据、原创数据、专家知识、实验、案例证据、决策框架、真实例子、技术解释，以及坦诚的条件和限制。没有差异化支撑时，应指出缺口，不得把汇总包装成原创洞见。

<!-- parity: brand-recommendations -->
## 处理品牌与推荐内容

只有证据、用户意图和内容目的确实需要时才纳入品牌。进行推荐或比较时，应说明标准、条件、证据、取舍、重要利益关系及适用时间范围。

不得制造好评、隐瞒相关限制、编造竞争对手弱点、营造虚假第三方共识，也不得把赞助或商业立场伪装成中立观点。

<!-- parity: platform-localization -->
## 谨慎处理平台本地化

核心工作流保持平台中立。涉及具体平台时阅读 [references/platform-localization.md](references/platform-localization.md)。官方指导具有日期与时效性；工具允许且相关结论会实质影响任务时，应核验当前版本。

对于缺少可靠公开优化指导的平台，应区分真实观察与假设。不得把无依据建议表述为平台事实或特殊 GEO 要求。

<!-- parity: technical-boundary -->
## 只标记技术前提，不负责实施

本工作流可以指出可发现性的技术前提，例如内容无法被适用的爬虫访问；也可以引用已经核实的官方指导或建议进行技术审查。但不得擅自修改 `robots.txt`、服务器配置、索引控制、canonical、站点地图、WAF/CDN 规则或身份验证。

<!-- parity: geo-qa -->
## 执行 GEO 内容质量检查

阅读 [references/geo-qa.md](references/geo-qa.md)。检查问题匹配度、答案清晰度、论断完整性、引用准备度、实体一致性、条件与限制、原创价值、平台表述准确性、商业透明度、发布清洁度及剩余待核验事项。

除非用户提供了可辩护的评分模型，否则不创建数值型 GEO 得分。若未解决的证据问题会造成重大误导或发布风险，应标明仍需核验，不得称为可以发布。

<!-- parity: delivery -->
## 按模式交付

用户明确的格式优先；否则返回：

- **brief：**研究或覆盖摘要、答案地图、正式 GEO 内容简报和证据缺口；不得起草全文；
- **create：**简报摘要、正文、论断或证据说明和剩余待核验事项；
- **optimize：**诊断、优化后的正文、重要修改和剩余待核验事项；
- **audit：**按优先级排列的诊断、证据/实体/可回答性问题和建议行动。

内部规划、无依据的平台假设及核验标记不得混入面向读者的正文。GEO 优化可以提升内容质量、可追溯性、实用性和参与资格，但不能保证任何平台结果。
