// Online editing tip:
// Most content on this site is stored in the arrays below.
// If you deploy to GitHub, you can edit this file directly in the browser
// to add, delete, or update works, cards, scripts, plans, and other sections.

const quickIntroCards = [
  {
    title: "我能解决内容发散的问题",
    text: "帮助公司建立公众号、小红书、朋友圈、短视频、官网的内容矩阵，不再想到什么发什么。"
  },
  {
    title: "我能解决销售缺素材的问题",
    text: "整理线路介绍图、渠道对比图、清关资料清单、FBA入仓检查表、客户案例图，让销售可以直接发客户。"
  },
  {
    title: "我能解决专业内容难表达的问题",
    text: "把清关、海外仓、FBA、尾程、旺季备货等专业内容，转化成客户看得懂的图文、视频和话术。"
  },
  {
    title: "我能解决官网内容老旧的问题",
    text: "优化官网服务页面、线路介绍、案例展示和咨询入口，提升客户信任感。"
  },
  {
    title: "我能解决短视频缺方向的问题",
    text: "围绕物流知识口播、仓库实拍、销售IP、客户常见问题、展会活动，搭建短视频内容方向。"
  },
  {
    title: "我能解决内容生产效率低的问题",
    text: "使用AI辅助选题拆解、对标账号分析、文案框架、视频脚本、多平台内容拆分，提高执行效率。"
  }
];

const fitCards = [
  {
    title: "有行业基础",
    text: "具备1年半国际物流运营经验，不是完全从零开始，能更快理解线路、清关、仓储、尾程、客户问题。"
  },
  {
    title: "有内容能力",
    text: "做过小红书、公众号、朋友圈、官网内容维护，能完成选题、文案、排版和多平台内容拆分。"
  },
  {
    title: "有设计与视频能力",
    text: "能做海报、宣传单、展架、朋友圈长图、销售物料，也能完成企业短视频剪辑。"
  },
  {
    title: "有销售转化意识",
    text: "理解新媒体不是单纯曝光，而是要服务客户咨询、销售跟进、方案报价和成交转化。"
  }
];

const skillCards = [
  {
    title: "国际物流业务理解",
    text: "具备1年半国际物流运营经验，理解运输渠道、清关、海外仓、FBA、尾程派送、客户发货痛点等内容。"
  },
  {
    title: "新媒体内容运营",
    text: "熟悉小红书、公众号、朋友圈等平台内容运营，能够完成选题策划、文案撰写、图文排版和多平台内容拆分。"
  },
  {
    title: "品牌视觉设计",
    text: "能够完成品牌图文、海报、宣传单、展架展馆、公众号配图、朋友圈长图和销售宣传物料设计。"
  },
  {
    title: "官网内容维护",
    text: "具备公司官网内容维护经验，能够更新服务内容、图片素材、页面信息和品牌展示内容。"
  },
  {
    title: "视频剪辑",
    text: "具备企业短视频剪辑能力，可完成口播视频、活动记录、物流知识科普、品牌宣传和仓库实拍类视频剪辑。"
  },
  {
    title: "AI / Codex 提效",
    text: "能够使用AI辅助完成对标账号拆解、选题库搭建、文案结构生成、短视频脚本、多平台内容拆分和素材整理。"
  }
];

const knowledgeItems = [
  {
    title: "国际贸易术语",
    keywords: ["DDP", "DAP", "FOB", "CIF", "EXW"],
    output: "公众号文章、小红书图文、销售解释话术。"
  },
  {
    title: "运输渠道",
    keywords: ["海运", "空运", "铁路", "卡航", "快递", "专线"],
    output: "渠道对比图、短视频口播、朋友圈销售文案。"
  },
  {
    title: "清关与报关",
    keywords: ["清关资料", "查验", "低申报", "敏感货", "HS编码", "品名申报"],
    output: "清关避坑文章、资料清单、客户发货前检查表。"
  },
  {
    title: "海外仓服务",
    keywords: ["入库", "上架", "换标", "贴标", "一件代发", "退货处理"],
    output: "海外仓流程图、服务介绍页、销售海报。"
  },
  {
    title: "FBA入仓",
    keywords: ["标签", "外箱要求", "预约入仓", "拒收风险", "旺季补货"],
    output: "FBA入仓检查清单、小红书干货图文、短视频脚本。"
  },
  {
    title: "尾程派送",
    keywords: ["UPS", "DPD", "FedEx", "卡派", "派送异常"],
    output: "尾程异常说明、客户安抚话术、服务流程图。"
  },
  {
    title: "平台合规",
    keywords: ["VAT", "EPR", "欧代", "GPSR", "产品合规"],
    output: "政策解读、合规提醒、客户资料准备指南。"
  },
  {
    title: "旺季备货",
    keywords: ["黑五", "网一", "圣诞", "Prime Day", "春节截仓", "国庆备货"],
    output: "旺季备货时间表、截仓提醒、销售跟进话术。"
  }
];

const funnelItems = [
  {
    step: "01",
    title: "内容曝光",
    text: "小红书、公众号、朋友圈、短视频、官网同步输出物流避坑、渠道对比、清关科普、海外仓、FBA、旺季备货等内容。"
  },
  {
    step: "02",
    title: "建立信任",
    text: "通过公众号深度文章、仓库实拍、客户案例、公司动态、展会活动、官网服务页面建立专业感和真实感。"
  },
  {
    step: "03",
    title: "获取线索",
    text: "通过资料包、私信、评论关键词、加微信、发货需求表，引导客户主动咨询。"
  },
  {
    step: "04",
    title: "销售诊断",
    text: "确认发货国家、货物品类、重量体积、是否FBA、是否海外仓、时效要求、是否敏感货、是否赶平台节点。"
  },
  {
    step: "05",
    title: "方案报价",
    text: "根据客户需求输出成本方案、时效方案、稳定方案、加急方案、海外仓方案或组合运输方案。"
  },
  {
    step: "06",
    title: "成交发货",
    text: "跟进入仓、出库、发车/起飞/开船、清关、尾程派送、签收和异常处理。"
  },
  {
    step: "07",
    title: "案例沉淀",
    text: "将真实成交案例反向沉淀为公众号案例、小红书图文、朋友圈文案、短视频脚本和销售话术。"
  },
  {
    step: "08",
    title: "复购转介绍",
    text: "通过补货提醒、旺季提醒、老客户关怀和案例复盘，推动客户复购和转介绍。"
  }
];

const platformItems = [
  {
    name: "小红书",
    position: "搜索获客",
    direction: "物流避坑、FBA指南、海外仓科普、跨境卖家常见问题",
    target: "私信、收藏、加微信、资料包领取"
  },
  {
    name: "公众号",
    position: "专业背书",
    direction: "深度文章、政策解读、客户案例、公司动态、线路解析",
    target: "建立信任、销售转发、沉淀专业内容"
  },
  {
    name: "朋友圈",
    position: "私域转化",
    direction: "线路动态、仓库实拍、客户案例、时效反馈、销售型短文案",
    target: "询价、复购、转介绍"
  },
  {
    name: "短视频",
    position: "真实展示",
    direction: "口播、仓库实拍、销售IP、物流知识科普、展会记录",
    target: "增强信任、引导咨询"
  },
  {
    name: "官网",
    position: "信任承接",
    direction: "服务介绍、线路页面、案例展示、新闻动态、联系方式",
    target: "承接客户搜索与销售转发"
  },
  {
    name: "企微/社群",
    position: "线索培育",
    direction: "答疑、通知、资料包、客户提醒",
    target: "跟进成交"
  }
];

const scenarioItems = [
  {
    title: "场景1：公司要主推欧洲物流",
    outputs: [
      "公众号：《欧洲物流渠道怎么选？海运、铁路、卡航、空运一次讲清》",
      "小红书：《欧洲发货避坑指南，新手卖家建议收藏》",
      "朋友圈：3条欧洲物流销售文案",
      "短视频：30秒物流渠道对比口播",
      "海报：欧洲物流渠道对比图",
      "销售物料：海运/铁路/卡航/空运选择表"
    ]
  },
  {
    title: "场景2：销售说客户嫌价格贵",
    outputs: [
      "成本/时效对比图",
      "嫌贵回复话术",
      "客户案例图",
      "服务价值说明图",
      "朋友圈价值型文案",
      "短视频：《为什么国际物流不能只看单价？》"
    ]
  },
  {
    title: "场景3：公司要参加跨境电商展会",
    outputs: [
      "展架设计",
      "宣传单",
      "展会朋友圈预热",
      "公众号展会预告",
      "展会现场短视频",
      "展会后复盘推文",
      "客户线索登记表"
    ]
  }
];

const workFilters = ["全部", "小红书图文", "公众号文章", "品牌视觉设计", "官网维护", "视频剪辑", "销售物料"];

const works = [
  {
    title: "欧洲物流渠道对比图",
    category: "销售物料",
    background: "客户不清楚海运、铁路、卡航、空运怎么选。",
    role: "内容整理、信息层级、视觉排版。",
    usage: "销售发给客户解释方案。",
    tag: "欧洲线 / 对比图"
  },
  {
    title: "FBA入仓避坑小红书图文",
    category: "小红书图文",
    background: "亚马逊卖家容易因为标签、外箱、预约问题影响入仓。",
    role: "选题、文案、封面、内页结构。",
    usage: "小红书搜索获客和知识分享。",
    tag: "FBA / 干货"
  },
  {
    title: "国际物流公众号文章排版",
    category: "公众号文章",
    background: "公司需要输出行业知识和品牌背书。",
    role: "文章结构、排版、封面、发布。",
    usage: "销售转发客户，建立专业信任。",
    tag: "公众号 / 品牌背书"
  },
  {
    title: "英国海外仓服务海报",
    category: "品牌视觉设计",
    background: "公司主推英国海外仓和一件代发服务。",
    role: "卖点提炼、文案排版、视觉设计。",
    usage: "朋友圈宣传和客户介绍。",
    tag: "海外仓 / 海报"
  },
  {
    title: "公司官网服务页面维护",
    category: "官网维护",
    background: "官网服务内容需要更新，提升客户访问体验。",
    role: "内容整理、图片替换、模块优化。",
    usage: "企业线上门面和信任承接。",
    tag: "官网 / 维护"
  },
  {
    title: "物流知识口播短视频",
    category: "视频剪辑",
    background: "把专业物流知识视频化，提升客户理解。",
    role: "脚本、剪辑、字幕、标题。",
    usage: "视频号/抖音/小红书短视频发布。",
    tag: "口播 / 短视频"
  },
  {
    title: "旺季备货时间表",
    category: "销售物料",
    background: "旺季前客户需要提前安排发货。",
    role: "时间节点整理、表格设计、提醒文案。",
    usage: "销售提醒客户提前备货。",
    tag: "旺季 / 时间表"
  },
  {
    title: "清关资料准备清单",
    category: "销售物料",
    background: "客户清关资料不完整容易导致延误。",
    role: "资料项整理、清单设计、风险提示。",
    usage: "客户发货前自查。",
    tag: "清关 / 检查表"
  },
  {
    title: "朋友圈品牌宣传文案组",
    category: "品牌视觉设计",
    background: "销售需要日常朋友圈内容。",
    role: "短文案、配图方向、转化引导。",
    usage: "销售私域曝光和咨询转化。",
    tag: "朋友圈 / 长图"
  },
  {
    title: "展架展馆宣传物料",
    category: "品牌视觉设计",
    background: "公司参加展会，需要线下展示物料。",
    role: "信息层级、视觉风格、展架设计。",
    usage: "展会获客和品牌展示。",
    tag: "展会 / 物料"
  },
  {
    title: "仓库实拍短视频剪辑",
    category: "视频剪辑",
    background: "通过真实场景增强客户信任。",
    role: "素材筛选、节奏剪辑、字幕和封面。",
    usage: "朋友圈和短视频平台展示。",
    tag: "仓库 / 实拍"
  },
  {
    title: "国际物流内容知识库整理",
    category: "公众号文章",
    background: "把物流知识沉淀成内容资产。",
    role: "知识分类、选题转化、文案框架。",
    usage: "持续输出公众号、小红书和销售话术。",
    tag: "知识库 / 内容资产"
  }
];

const salesAssetRows = [
  {
    scene: "客户问欧洲怎么发",
    question: "海运/铁路/卡航怎么选",
    material: "渠道对比图",
    action: "发客户解释方案"
  },
  {
    scene: "客户担心清关",
    question: "会不会查验",
    material: "清关资料清单",
    action: "提前确认资料"
  },
  {
    scene: "客户问FBA",
    question: "入仓会不会被拒",
    material: "FBA入仓检查表",
    action: "发客户自查"
  },
  {
    scene: "客户嫌价格高",
    question: "为什么卡航贵",
    material: "成本/时效对比图",
    action: "解释风险和时效"
  },
  {
    scene: "客户旺季补货",
    question: "现在发来得及吗",
    material: "旺季备货表",
    action: "推荐加急或组合方案"
  },
  {
    scene: "客户想用海外仓",
    question: "适不适合我",
    material: "海外仓流程图",
    action: "判断订单和库存情况"
  }
];

const scriptItems = [
  {
    title: "你们价格为什么比别人贵？",
    text: "价格确实是一方面，但国际物流不能只看单价，还要看清关稳定性、尾程派送、时效波动和异常处理能力。如果单价便宜但后面清关延误、派送失败，实际成本可能更高。我可以先根据您的货物品类、目的国和时效要求，帮您对比一下更适合的方案。"
  },
  {
    title: "现在发欧洲还来得及吗？",
    text: "要看您发哪个国家、货物品类、货量和期望到货时间。如果是赶平台节点，建议不要只看运输时间，还要把清关、入仓、尾程派送时间一起算进去。我可以先帮您判断适合海运、铁路、卡航还是空运。"
  },
  {
    title: "清关会不会有问题？",
    text: "清关是否顺利，主要和品名、申报、资料、货物属性和当地政策有关。发货前建议先确认品名、材质、用途、HS编码和相关资料，提前规避风险比后期补救更省时间。"
  },
  {
    title: "我适不适合用海外仓？",
    text: "要看您的订单稳定性、货物体积、退货率和时效要求。如果订单比较稳定、尾程体验要求高，或者经常需要换标、退货处理、一件代发，海外仓会更适合。可以先根据您的货量和平台情况判断。"
  }
];

const downloadItems = [
  {
    title: "欧洲物流渠道选择表",
    usage: "帮助客户理解海运、铁路、卡航、空运区别。"
  },
  {
    title: "FBA入仓避坑清单",
    usage: "帮助亚马逊卖家提前检查标签、外箱、预约等问题。"
  },
  {
    title: "清关资料准备清单",
    usage: "帮助客户减少清关资料不全导致的延误。"
  },
  {
    title: "海外仓一件代发流程图",
    usage: "帮助客户理解海外仓操作流程。"
  },
  {
    title: "旺季备货时间规划表",
    usage: "提醒客户提前安排发货，减少旺季风险。"
  },
  {
    title: "销售朋友圈文案库",
    usage: "帮助销售日常触达客户，提高私域转化。"
  },
  {
    title: "国际物流短视频选题库",
    usage: "帮助公司持续输出物流知识口播和短视频内容。"
  }
];

const benchmarkItems = [
  {
    title: "同行账号A：国际物流知识科普型",
    text: "擅长用避坑类标题吸引跨境卖家，适合借鉴其选题结构。"
  },
  {
    title: "同行账号B：海外仓服务型",
    text: "侧重海外仓流程、一件代发、退货换标等内容，适合借鉴其服务展示方式。"
  },
  {
    title: "同行账号C：跨境卖家服务型",
    text: "内容更贴近卖家运营痛点，适合借鉴其评论区问题收集方式。"
  }
];

const reviewRows = [
  {
    stage: "曝光",
    metrics: "阅读量、播放量、展示量",
    review: "哪类内容更容易被看到？"
  },
  {
    stage: "互动",
    metrics: "点赞、收藏、评论、转发",
    review: "哪类内容更有价值感？"
  },
  {
    stage: "线索",
    metrics: "私信数、加微信数、资料领取数",
    review: "哪些内容带来真实咨询？"
  },
  {
    stage: "销售",
    metrics: "报价数、有效客户数、跟进状态",
    review: "销售是否愿意使用这些内容？"
  },
  {
    stage: "成交",
    metrics: "成交客户、复购客户、转介绍",
    review: "内容是否辅助成交？"
  },
  {
    stage: "资产",
    metrics: "新增文章、视频、海报、销售物料",
    review: "是否沉淀为可复用资产？"
  }
];

const adsFlow = ["广告素材", "落地页 / 私信", "资料领取", "加微信", "需求诊断", "报价", "成交"];

const planItems = [
  {
    title: "前30天：熟悉业务，搭建基础",
    goal: "快速熟悉公司业务，稳定完成内容和设计交付。",
    actions: ["了解主营线路", "访谈销售", "整理客户常见问题", "梳理现有素材", "检查公众号、小红书、官网现状", "建立素材库", "建立选题库", "制作基础海报模板"],
    deliverables: ["内容诊断表", "选题库", "素材库", "朋友圈文案模板", "基础视觉模板"]
  },
  {
    title: "60天：形成内容节奏",
    goal: "建立稳定栏目，让内容开始服务销售。",
    actions: ["公众号栏目化", "小红书系列化", "朋友圈文案常态化", "制作销售物料", "启动短视频内容", "做对标账号拆解", "建立销售反馈机制"],
    deliverables: ["公众号文章", "小红书图文", "短视频脚本", "销售物料库", "对标分析表"]
  },
  {
    title: "90天：形成转化闭环",
    goal: "从内容曝光走向线索承接和成交辅助。",
    actions: ["制作资料包", "优化官网服务页", "输出客户案例", "建立销售话术库", "复盘内容数据", "沉淀案例内容"],
    deliverables: ["国际物流内容知识库", "销售素材库", "客户案例模板", "官网优化建议", "月度内容复盘"]
  }
];

const aiItems = [
  {
    title: "对标账号拆解",
    text: "拆标题、封面、选题、评论区问题、引流方式。"
  },
  {
    title: "内容批量拆分",
    text: "一个物流选题拆成公众号、小红书、朋友圈、短视频、海报和销售话术。"
  },
  {
    title: "视频提效",
    text: "辅助口播脚本、字幕整理、标题优化、封面文案和剪辑结构。"
  },
  {
    title: "Codex辅助",
    text: "用于官网简单维护、素材整理、文件批量命名、表格模板和简单自动化工作流。"
  },
  {
    title: "人工审核",
    text: "最终内容必须结合公司真实线路、价格、时效、仓库和客户案例进行人工确认。"
  }
];

const checklistItems = [
  "公司名称",
  "Logo",
  "标题",
  "时间",
  "地址",
  "电话",
  "二维码",
  "价格",
  "时效",
  "线路名称",
  "图片尺寸",
  "文件版本",
  "是否高清导出",
  "是否保留源文件",
  "是否确认最终版"
];

function createCard(item, label) {
  return `
    <article class="card reveal">
      ${label ? `<span class="card-label">${label}</span>` : ""}
      <h3>${item.title}</h3>
      <p>${item.text}</p>
    </article>
  `;
}

function renderSimpleCards(targetId, items, labelPrefix = "") {
  const target = document.getElementById(targetId);
  if (!target) {
    return;
  }

  target.innerHTML = items
    .map((item, index) => createCard(item, labelPrefix ? `${labelPrefix}${index + 1}` : ""))
    .join("");
}

function renderKnowledge() {
  const target = document.getElementById("knowledge-list");
  if (!target) {
    return;
  }

  target.innerHTML = knowledgeItems
    .map(
      (item, index) => `
        <article class="accordion-item reveal ${index === 0 ? "open" : ""}">
          <button class="accordion-trigger" type="button" aria-expanded="${index === 0 ? "true" : "false"}">
            <div>
              <p class="accordion-meta">知识模块 ${String(index + 1).padStart(2, "0")}</p>
              <h3>${item.title}</h3>
            </div>
            <span class="accordion-icon">+</span>
          </button>
          <div class="accordion-body" style="${index === 0 ? "max-height: 320px;" : ""}">
            <div class="accordion-inner">
              <div class="keyword-list">
                ${item.keywords.map((keyword) => `<span>${keyword}</span>`).join("")}
              </div>
              <p><strong>可转化为：</strong>${item.output}</p>
            </div>
          </div>
        </article>
      `
    )
    .join("");
}

function renderFunnel() {
  const target = document.getElementById("funnel-timeline");
  if (!target) {
    return;
  }

  target.innerHTML = funnelItems
    .map(
      (item) => `
        <article class="timeline-item reveal">
          <div class="timeline-step">${item.step}</div>
          <div class="timeline-card">
            <h3>${item.title}</h3>
            <p>${item.text}</p>
          </div>
        </article>
      `
    )
    .join("");
}

function renderPlatforms() {
  const target = document.getElementById("platform-grid");
  if (!target) {
    return;
  }

  target.innerHTML = platformItems
    .map(
      (item) => `
        <article class="platform-card reveal">
          <h3>${item.name}</h3>
          <dl>
            <div>
              <dt>定位</dt>
              <dd>${item.position}</dd>
            </div>
            <div>
              <dt>内容方向</dt>
              <dd>${item.direction}</dd>
            </div>
            <div>
              <dt>转化目标</dt>
              <dd>${item.target}</dd>
            </div>
          </dl>
        </article>
      `
    )
    .join("");
}

function renderScenarios() {
  const target = document.getElementById("scenario-grid");
  if (!target) {
    return;
  }

  target.innerHTML = scenarioItems
    .map(
      (item) => `
        <article class="card reveal">
          <h3>${item.title}</h3>
          <ul class="scenario-list">
            ${item.outputs.map((output) => `<li>${output}</li>`).join("")}
          </ul>
        </article>
      `
    )
    .join("");
}

function renderWorkFilters() {
  const target = document.getElementById("work-filters");
  if (!target) {
    return;
  }

  target.innerHTML = workFilters
    .map(
      (filter, index) => `
        <button class="filter-btn ${index === 0 ? "active" : ""}" type="button" data-filter="${filter}">
          ${filter}
        </button>
      `
    )
    .join("");
}

function renderWorks(activeFilter = "全部") {
  const target = document.getElementById("works-grid");
  if (!target) {
    return;
  }

  const filteredWorks = activeFilter === "全部"
    ? works
    : works.filter((work) => work.category === activeFilter);

  target.innerHTML = filteredWorks
    .map(
      (work) => `
        <article class="card work-card reveal">
          <div class="work-thumb">
            <span>${work.tag}</span>
          </div>
          <div class="work-body">
            <span class="work-meta">${work.category}</span>
            <h3>${work.title}</h3>
            <div class="work-copy">
              <p><strong>项目背景：</strong>${work.background}</p>
              <p><strong>我负责的内容：</strong>${work.role}</p>
              <p><strong>作品用途：</strong>${work.usage}</p>
            </div>
          </div>
        </article>
      `
    )
    .join("");

  attachRevealObserver();
}

function renderTable(targetId, rows, headers) {
  const target = document.getElementById(targetId);
  if (!target) {
    return;
  }

  const tableHead = headers.map((header) => `<th>${header.label}</th>`).join("");
  const tableRows = rows
    .map(
      (row) => `
        <tr>
          ${headers.map((header) => `<td>${row[header.key]}</td>`).join("")}
        </tr>
      `
    )
    .join("");

  const cardRows = rows
    .map(
      (row) => `
        <article class="table-card reveal">
          <h3>${row[headers[0].key]}</h3>
          <dl>
            ${headers
              .slice(1)
              .map(
                (header) => `
                  <div>
                    <dt>${header.label}</dt>
                    <dd>${row[header.key]}</dd>
                  </div>
                `
              )
              .join("")}
          </dl>
        </article>
      `
    )
    .join("");

  target.innerHTML = `
    <table class="reveal">
      <thead>
        <tr>${tableHead}</tr>
      </thead>
      <tbody>${tableRows}</tbody>
    </table>
    <div class="table-cards">${cardRows}</div>
  `;
}

function renderScriptLibrary() {
  const target = document.getElementById("script-list");
  if (!target) {
    return;
  }

  target.innerHTML = scriptItems
    .map(
      (item) => `
        <article class="accordion-item reveal">
          <button class="accordion-trigger" type="button" aria-expanded="false">
            <div>
              <p class="accordion-meta">常见问题</p>
              <h3>${item.title}</h3>
            </div>
            <span class="accordion-icon">+</span>
          </button>
          <div class="accordion-body">
            <div class="accordion-inner">
              <p>${item.text}</p>
            </div>
          </div>
        </article>
      `
    )
    .join("");
}

function renderDownloads() {
  const target = document.getElementById("download-grid");
  if (!target) {
    return;
  }

  target.innerHTML = downloadItems
    .map(
      (item, index) => `
        <article class="card reveal">
          <span class="card-label">资料包 ${String(index + 1).padStart(2, "0")}</span>
          <h3>${item.title}</h3>
          <p><strong>用途：</strong>${item.usage}</p>
        </article>
      `
    )
    .join("");
}

function renderBenchmarks() {
  const target = document.getElementById("benchmark-grid");
  if (!target) {
    return;
  }

  target.innerHTML = benchmarkItems
    .map(
      (item) => `
        <article class="card reveal">
          <h3>${item.title}</h3>
          <p>${item.text}</p>
        </article>
      `
    )
    .join("");
}

function renderAdsFlow() {
  const target = document.getElementById("ads-flow");
  if (!target) {
    return;
  }

  target.innerHTML = adsFlow.map((step) => `<span class="flow-chip">${step}</span>`).join("");
}

function renderPlans() {
  const target = document.getElementById("plan-grid");
  if (!target) {
    return;
  }

  target.innerHTML = planItems
    .map(
      (item) => `
        <article class="plan-card reveal">
          <div class="plan-head">
            <h3>${item.title}</h3>
          </div>
          <div class="plan-body">
            <h4>目标</h4>
            <p>${item.goal}</p>
            <h4>动作</h4>
            <ul class="plan-list">
              ${item.actions.map((action) => `<li>${action}</li>`).join("")}
            </ul>
            <h4>交付物</h4>
            <ul class="plan-list">
              ${item.deliverables.map((deliverable) => `<li>${deliverable}</li>`).join("")}
            </ul>
          </div>
        </article>
      `
    )
    .join("");
}

function renderAiCards() {
  const target = document.getElementById("ai-grid");
  if (!target) {
    return;
  }

  target.innerHTML = aiItems
    .map(
      (item) => `
        <article class="card reveal">
          <h3>${item.title}</h3>
          <p>${item.text}</p>
        </article>
      `
    )
    .join("");
}

function renderChecklist() {
  const target = document.getElementById("checklist-grid");
  if (!target) {
    return;
  }

  target.innerHTML = checklistItems
    .map(
      (item) => `
        <div class="checklist-item reveal">
          <span class="checkmark">✓</span>
          <span>${item}</span>
        </div>
      `
    )
    .join("");
}

function setupAccordion() {
  const triggers = document.querySelectorAll(".accordion-trigger");

  triggers.forEach((trigger) => {
    const item = trigger.closest(".accordion-item");
    const body = item?.querySelector(".accordion-body");
    const isInitiallyOpen = item?.classList.contains("open");

    if (body && isInitiallyOpen) {
      body.style.maxHeight = `${body.scrollHeight}px`;
      trigger.setAttribute("aria-expanded", "true");
    }

    trigger.addEventListener("click", () => {
      const currentItem = trigger.closest(".accordion-item");
      const currentBody = currentItem.querySelector(".accordion-body");
      const isOpen = currentItem.classList.contains("open");

      currentItem.classList.toggle("open", !isOpen);
      trigger.setAttribute("aria-expanded", String(!isOpen));
      currentBody.style.maxHeight = isOpen ? "0px" : `${currentBody.scrollHeight}px`;
    });
  });
}

function setupWorkFilters() {
  const filterButtons = document.querySelectorAll(".filter-btn");

  filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const filter = button.dataset.filter || "全部";

      filterButtons.forEach((item) => item.classList.remove("active"));
      button.classList.add("active");
      renderWorks(filter);
    });
  });
}

function setupMenu() {
  const toggle = document.querySelector(".menu-toggle");
  const nav = document.getElementById("site-nav");

  if (!toggle || !nav) {
    return;
  }

  const closeMenu = () => {
    nav.classList.remove("open");
    toggle.classList.remove("is-open");
    toggle.setAttribute("aria-expanded", "false");
    document.body.classList.remove("menu-open");
  };

  toggle.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("open");
    toggle.classList.toggle("is-open", isOpen);
    toggle.setAttribute("aria-expanded", String(isOpen));
    document.body.classList.toggle("menu-open", isOpen);
  });

  nav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", closeMenu);
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth > 960) {
      closeMenu();
    }
  });
}

function setupStickyHeader() {
  const header = document.querySelector(".site-header");
  const backToTop = document.getElementById("backToTop");

  if (!header || !backToTop) {
    return;
  }

  const onScroll = () => {
    const scrolled = window.scrollY > 12;
    header.classList.toggle("scrolled", scrolled);
    backToTop.classList.toggle("visible", window.scrollY > 560);
  };

  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });

  backToTop.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

function setupCopyButtons() {
  const toast = document.getElementById("toast");
  const buttons = document.querySelectorAll(".copy-btn");
  let toastTimer = null;

  buttons.forEach((button) => {
    button.addEventListener("click", async () => {
      const targetId = button.dataset.copyTarget;
      const text = document.getElementById(targetId)?.textContent?.trim();

      if (!text) {
        return;
      }

      try {
        if (navigator.clipboard && window.isSecureContext) {
          await navigator.clipboard.writeText(text);
        } else {
          const helper = document.createElement("textarea");
          helper.value = text;
          helper.setAttribute("readonly", "");
          helper.style.position = "absolute";
          helper.style.left = "-9999px";
          document.body.appendChild(helper);
          helper.select();
          document.execCommand("copy");
          document.body.removeChild(helper);
        }

        if (toast) {
          toast.classList.add("show");
          window.clearTimeout(toastTimer);
          toastTimer = window.setTimeout(() => {
            toast.classList.remove("show");
          }, 1600);
        }
      } catch (error) {
        window.alert("复制失败，请手动复制。");
      }
    });
  });
}

function setupActiveNav() {
  const links = document.querySelectorAll(".site-nav a");
  const sectionIds = Array.from(links)
    .map((link) => link.getAttribute("href"))
    .filter((href) => href && href.startsWith("#"))
    .map((href) => href.slice(1));
  const sections = sectionIds
    .map((id) => document.getElementById(id))
    .filter(Boolean);

  if (!sections.length || !links.length || !("IntersectionObserver" in window)) {
    return;
  }

  const linkMap = new Map(
    Array.from(links).map((link) => [link.getAttribute("href"), link])
  );

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          return;
        }

        const activeLink = linkMap.get(`#${entry.target.id}`);
        if (activeLink) {
          links.forEach((link) => link.classList.remove("active"));
          activeLink.classList.add("active");
        }
      });
    },
    {
      rootMargin: "-35% 0px -55% 0px",
      threshold: 0.01
    }
  );

  sections.forEach((section) => observer.observe(section));
}

function attachRevealObserver() {
  const revealItems = document.querySelectorAll(".reveal");

  if (!revealItems.length) {
    return;
  }

  if (!("IntersectionObserver" in window)) {
    revealItems.forEach((item) => item.classList.add("is-visible"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          return;
        }

        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      });
    },
    {
      threshold: 0.12
    }
  );

  revealItems.forEach((item) => observer.observe(item));
}

function renderAll() {
  renderSimpleCards("quick-intro-grid", quickIntroCards, "解决方案 ");
  renderSimpleCards("fit-grid", fitCards, "匹配点 ");
  renderSimpleCards("skills-grid", skillCards, "能力 ");
  renderKnowledge();
  renderFunnel();
  renderPlatforms();
  renderScenarios();
  renderWorkFilters();
  renderWorks();
  renderTable("sales-table", salesAssetRows, [
    { key: "scene", label: "客户场景" },
    { key: "question", label: "客户问题" },
    { key: "material", label: "对应素材" },
    { key: "action", label: "销售动作" }
  ]);
  renderScriptLibrary();
  renderDownloads();
  renderBenchmarks();
  renderTable("review-table", reviewRows, [
    { key: "stage", label: "阶段" },
    { key: "metrics", label: "关键指标" },
    { key: "review", label: "复盘问题" }
  ]);
  renderAdsFlow();
  renderPlans();
  renderAiCards();
  renderChecklist();
}

document.addEventListener("DOMContentLoaded", () => {
  renderAll();
  setupAccordion();
  setupWorkFilters();
  setupMenu();
  setupStickyHeader();
  setupCopyButtons();
  setupActiveNav();
  attachRevealObserver();
});
