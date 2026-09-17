export interface Service {
  id: string;
  title: string;
  brief: string;
  desc: string[];
  points: string[];
}

export const services: Service[] = [
  {
    id: 'full-case',
    title: '全案托管',
    brief: '从设计到入住，一站式交付',
    desc: [
      '全案托管是我们最完整的服务形态：从户型解析、方案设计、主材选购、施工管理到软装陈设，由同一团队全程负责。',
      '您只需要在关键节点参与决策，其余所有协调、跟进与落地工作都交给我们。',
    ],
    points: ['设计 + 施工 + 主材 + 软装一体化', '专属项目经理全程跟进', '关键节点书面确认，过程透明', '竣工后整屋交付，拎包入住'],
  },
  {
    id: 'hard-decoration',
    title: '半包 / 全包硬装',
    brief: '灵活的硬装合作模式',
    desc: [
      '根据您的时间与预算，可选择半包（我们负责人工与辅材，主材自购）或全包（人工、辅材、主材全含）两种模式。',
      '无论哪种模式，施工工艺标准与验收节点完全一致。',
    ],
    points: ['半包：人工 + 辅材，主材自由选购', '全包：人工 + 辅材 + 主材全含', '标准化工艺，分阶段验收', '报价透明，无恶意增项'],
  },
  {
    id: 'layout-optimization',
    title: '户型优化改造',
    brief: '让每一平米都被善待',
    desc: [
      '针对动线混乱、采光不足、收纳紧张等户型痛点，提供专业的空间重组方案。',
      '老房翻新、异形户型、小户型扩容，都是我们的擅长领域。',
    ],
    points: ['动线重组与功能分区优化', '采光与通风改善方案', '收纳系统定制规划', '结构安全评估与合规改造'],
  },
  {
    id: 'soft-decoration',
    title: '软装陈设落地',
    brief: '为空间注入最后的温度',
    desc: [
      '家具、灯具、布艺、饰品、绿植——软装是家的气质所在。',
      '我们提供从方案到采购、摆场的一站式软装服务，让效果图 1:1 走进现实。',
    ],
    points: ['整屋软装方案设计', '家具 / 灯具 / 布艺 / 饰品选配', '采购代订与物流跟进', '现场摆场与细节调整'],
  },
];

export interface CaseItem {
  id: string;
  title: string;
  style: string;
  area: string;
  location: string;
  tone: string;
  desc: string;
}

export const cases: CaseItem[] = [
  {
    id: 'minimal',
    title: '静 · 居',
    style: '极简',
    area: '128㎡',
    location: '重庆 · 渝北',
    tone: '#e8e2d8',
    desc: '以大面积的米白与浅灰为底，隐藏式收纳让空间回归纯粹的秩序感。无主灯设计配合间接照明，光线柔和而有层次。',
  },
  {
    id: 'wood',
    title: '木 · 语',
    style: '原木',
    area: '96㎡',
    location: '重庆 · 江北',
    tone: '#d9c6ad',
    desc: '白蜡木与藤编元素贯穿全屋，阳光穿过纱帘落在木地板上，是日常生活最温柔的样子。',
  },
  {
    id: 'retro',
    title: '拾 · 光',
    style: '轻复古',
    area: '110㎡',
    location: '重庆 · 南岸',
    tone: '#cbb9a4',
    desc: '石膏线、拱门与中古家具的组合，克制的复古语言里藏着屋主对旧时光的偏爱。',
  },
  {
    id: 'modern',
    title: '阔 · 界',
    style: '现代平层',
    area: '165㎡',
    location: '重庆 · 两江新区',
    tone: '#d5d0c8',
    desc: '横厅大平层，客餐厨一体化布局。炭灰与暖木棕的材质对撞，冷静而不失温度。',
  },
];

export const processSteps = [
  { title: '沟通需求', desc: '深入了解居住习惯、审美偏好与预算范围' },
  { title: '量房设计', desc: '实地勘测，输出平面方案与效果意向' },
  { title: '沟通预案', desc: '方案讲解与多轮调整，直至达成共识' },
  { title: '意向签约', desc: '确认设计方向，签订设计协议' },
  { title: '精准报价', desc: '逐项列明，透明报价，拒绝漏项增项' },
  { title: '正式签约', desc: '签订施工合同，明确工期与权责' },
  { title: '进场施工', desc: '标准化工艺，分阶段节点验收' },
  { title: '实时跟进', desc: '工地进度同步，问题及时响应' },
  { title: '售后无忧', desc: '质保期内免费维护，响应迅速' },
  { title: '满意入住', desc: '整屋交付，开启理想生活' },
];

export const testimonials = [
  {
    text: '从设计到入住几乎没操过心，每个节点都有清晰的书面确认，最终效果和效果图几乎一模一样。',
    author: '刘女士 · 静居项目业主',
  },
  {
    text: '小户型被改出了双倍的收纳，朋友来家里都不相信只有 96 平。',
    author: '陈先生 · 木语项目业主',
  },
  {
    text: '报价单细到每一个插座，施工期间没有任何增项，这在装修行业太难得了。',
    author: '周女士 · 阔界项目业主',
  },
];

export const contact = {
  phone: '17782358532',
  wechat: 'yanka02',
  address: '重庆市两江新区中瑞产业园',
};
