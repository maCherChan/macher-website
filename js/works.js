/* ═══════════════════════════════════════════
   maCher Chan® — works.js
   CSS 3D ring  →  editorial series detail
   ═══════════════════════════════════════════ */
'use strict';

/* ── HELPER ──────────────────────────────────────────────────── */
const origP = (dir, file) => dir + '/' + file;
const rnd   = (a, b) => a + Math.random() * (b - a);

/* ═══════════════════════════════════════════
   SERIES DATA
   ═══════════════════════════════════════════ */
const numSeq = (pfx, n, ext) => Array.from({length: n}, (_, i) => `${pfx} (${i + 1}).${ext}`);

const SERIES = [
  {
    id: 'pocui', name: '破碎感优雅', nameEn: 'DISHEVELED ELEGANCE',
    season: 'FW 2023', category: '女装', looks: 13,
    keywords: ['Sartorial Grunge', 'Deconstructed', 'Indie Sleaze'],
    desc: '将千禧年Indie Sleaze与高定解构剪裁融合，打造"经过精心设计的邋遢感"——在正装的严肃性中引入破坏感而非真正随意。',
    dir: '破碎感优雅', images: numSeq('破碎感优雅', 13, 'jpeg'),
    trends: [
      { brand: 'Celine FW23 Menswear', desc: '贡献了标志性的Indie Sleaze复古摇滚风格，包括敞开的丝绒西装、松垮的极细领带、以及带有苍白病态美的削瘦身型轮廓。' },
      { brand: 'Maison Margiela SS24 Co-Ed', desc: '贡献了"破坏与透视"的解构美学，将正装与肤色透视打底衫混搭，以及用束腰带强行改变西装廓形的非常规穿法。' },
      { brand: 'Dries Van Noten FW23 Menswear', desc: '贡献了颓废且高级的色彩体系（灰绿、暗红、芥末黄），以及慵懒的睡袍式大衣与正装的融合。' },
      { brand: 'Balenciaga SS24', desc: '贡献了反讽式的"日常物件配饰化"造型逻辑，如将牛皮纸袋作为手拿包、手提做旧运动鞋搭配精纺西装的流浪汉式混搭。' },
    ],
    colors: {
      core:      [{ name: '水鸭绿', pantone: '19-4914 TCX', hex: '#2F5C65' }, { name: '水泥灰', pantone: '18-4005 TCX', hex: '#757575' }],
      secondary: [{ name: '酒红丝绒', pantone: '19-1625 TCX', hex: '#5B1E25' }, { name: '复古芥末黄', pantone: '14-0827 TCX', hex: '#C5A880' }],
      accent:    [{ name: '肤色打底', pantone: '13-1114 TCX', hex: '#F4C9B1' }],
      strategy:  '以灰冷色调正装为基底，穿插复古酒红与芥末黄，渲染高级且颓废的文艺质感。',
    },
    design: [
      { dim: '廓形', logic: '弱化夸张比例，保留截短外套与高腰修长轮廓。' },
      { dim: '色彩', logic: '降低饱和度，以灰冷调穿插复古色营造颓废感。' },
      { dim: '面料', logic: '精纺西装料混搭透视薄纱与丝绒，制造反差感。' },
      { dim: '搭配', logic: '保留衣衫不整的乱搭穿法与露肤度，展现松弛。' },
    ],
  },
  {
    id: 'power', name: '女性权利主义', nameEn: 'NEO-POWER DRESSING',
    season: 'FW 2023', category: '女装', looks: 21,
    keywords: ['Architectural Tailoring', 'Power Dressing', 'Neo-Noir'],
    desc: '以更当代的建筑感与解构手法重新框定80/90年代职场女性气质，强调锋利肩线与沙漏腰线，用冷感极简对抗传统权力套装的刻板印象。',
    dir: '女性权利主义',
    images: [
      'Gemini_Generated_Image_18pwgs18pwgs18pw.png',
      'Gemini_Generated_Image_1esao41esao41esa.png',
      'Gemini_Generated_Image_4nmvts4nmvts4nmv.png',
      'Gemini_Generated_Image_i3g2qdi3g2qdi3g2.png',
      'Gemini_Generated_Image_ifwji8ifwji8ifwj.png',
      'Gemini_Generated_Image_m04c7km04c7km04c.png',
      'Gemini_Generated_Image_nzoq91nzoq91nzoq.png',
      'Gemini_Generated_Image_sif851sif851sif8.png',
      'Gemini_Generated_Image_spoo3espoo3espoo.png',
      'Gemini_Generated_Image_u3zue2u3zue2u3zu.png',
      'Gemini_Generated_Image_vdjcekvdjcekvdjc.png',
      'K字拼皮夹克.jpg',
      '双层门襟短夹克.jpg',
      '宫廷衬衫.png',
      '拼皮夹克-拼皮西裤.jpg',
      '斗篷短西.jpg',
      '明线短夹克.png',
      '蕾丝机车皮衣.jpg',
      '黑白拼色胸衣衬衫.jpg',
    ],
    trends: [
      { brand: 'Saint Laurent FW23 Womenswear', desc: '贡献了极致宽阔锋利的垫肩与修身下装（铅笔裙/长裤）形成的强势"倒三角"权力套装轮廓，是本组设计的核心灵魂。' },
      { brand: 'Alexander McQueen FW23', desc: '贡献了具有建筑感的沙漏型收腰剪裁，以及通过解构西装翻领与前襟来展现女性力量的手段。' },
      { brand: 'Ferragamo FW23', desc: '贡献了冷峻、克制的高智感色彩体系（午夜黑、深青蓝），以及极为干净没有一丝多余线条的极简搭配逻辑。' },
    ],
    colors: {
      core:      [{ name: '极致黑', pantone: '19-4004 TCX', hex: '#2B2B2C' }],
      secondary: [{ name: '深青色', pantone: '19-4914 TCX', hex: '#2D5A5C' }, { name: '冷灰', pantone: '18-4005 TCX', hex: '#7A7C80' }],
      accent:    [{ name: '深棕色', pantone: '19-1012 TCX', hex: '#503124' }],
      strategy:  '以极致黑为底，辅以深青与冷灰，营造冷静强势的职场力量感。',
    },
    design: [
      { dim: '廓形', logic: '弱化夸张垫肩，保留沙漏型轮廓兼顾实穿性。' },
      { dim: '色彩', logic: '摒弃戏剧色，聚焦黑灰青等冷峻高级职场色。' },
      { dim: '面料', logic: '选用精纺羊毛，平衡硬挺骨架与穿着舒适度。' },
      { dim: '搭配', logic: '去除繁复配饰，采用极简成套顺色穿搭逻辑。' },
    ],
  },
  {
    id: 'boudoir', name: '闺房风尚', nameEn: 'BOUDOIR CHIC',
    season: 'SS 2023', category: '女装', looks: 16,
    keywords: ['Coquette', 'Dark Romance', 'Y2K'],
    desc: '"Coquette"美学的商业化表达，融合90年代至千禧年闺房元素与日常穿着，在情色化感官符号与哥特浪漫主义之间寻求平衡。',
    dir: '闺房风尚', images: numSeq('闺房风尚', 16, 'jpeg'),
    trends: [
      { brand: 'Blumarine SS23', desc: '贡献了标志性的Y2K复古浪漫主义，包括十字架、暗黑玫瑰印花、以及极具挑逗性的透视网纱微裙。' },
      { brand: 'Dolce & Gabbana SS23 (Ciao, Kim)', desc: '贡献了经典的意式复古闺房档案，大量使用束腰胸衣、波点印花与黑色蕾丝包边细节。' },
      { brand: 'Versace SS23', desc: '贡献了哥特式的暗黑浪漫，将硬朗的鱼骨胸衣与柔美的蕾丝、开叉设计进行对撞。' },
      { brand: 'Sandy Liang SS24', desc: '贡献了当下流行的"少女核"与"纯欲风"，如针织开衫的镂空细节、系带元素以及田园感的格纹/碎花。' },
    ],
    colors: {
      core:      [{ name: '极致黑', pantone: '19-4004 TCX', hex: '#2B2B2C' }, { name: '纯白', pantone: '11-0601 TCX', hex: '#F4F5F0' }],
      secondary: [{ name: '复古正红', pantone: '19-1664 TCX', hex: '#8A1538' }, { name: '婴儿蓝', pantone: '14-4112 TCX', hex: '#A2C4D4' }],
      accent:    [{ name: '蜜桃粉', pantone: '14-1309 TCX', hex: '#F6D6C8' }],
      strategy:  '以黑白基础色定调，融入复古红与婴儿蓝印花，营造甜美与暗黑交织的浪漫氛围。',
    },
    design: [
      { dim: '廓形', logic: '弱化秀场极端透视，将内衣转化为高实穿短上衣与开叉裙。' },
      { dim: '色彩', logic: '剥离秀场戏剧化浓彩，以黑白为主融入经典复古印花。' },
      { dim: '面料', logic: '舍弃高定脆弱真丝，改用弹力网纱与人造蕾丝以适应日常。' },
      { dim: '搭配', logic: '褪去秀场繁复叠穿，采用降低搭配门槛的两件式套装逻辑。' },
    ],
  },
  {
    id: 'min90', name: '90年代极简', nameEn: '90S MINIMALISM',
    season: 'FW 2023', category: '男装', looks: 30,
    keywords: ['Neo-Noir Tailoring', 'Cold Asceticism', 'Hard Lines'],
    desc: '剥离街头感，强调锋利剪裁与原料对比，呈现工业化精度的黑白灰极简主义，将简约作为最高奢侈。',
    dir: '90年代极简', images: numSeq('男装经典主义回潮', 30, 'jpg'),
    trends: [
      { brand: 'Prada FW23 Menswear', desc: '贡献了尖锐利落的领型、具有工业设计感的直筒廓形，以及将基础款做高定化处理的极简搭配逻辑。' },
      { brand: 'Saint Laurent FW23 Menswear', desc: '贡献了无袖紧身针织衫搭配高腰阔腿长裤的性感/禁欲双重特质，以及光泽感皮质夹克的冷酷先锋氛围。' },
      { brand: 'Ferragamo FW23', desc: '贡献了极致的黑白高对比度视觉，具有建筑感的挺括外套，以及方头皮靴带来的凌厉气场。' },
    ],
    colors: {
      core:      [{ name: '极致黑', pantone: '19-4004 TCX', hex: '#2B2B2C' }, { name: '纯白', pantone: '11-0601 TCX', hex: '#F4F5F0' }],
      secondary: [{ name: '碳灰', pantone: '19-3906 TCX', hex: '#4B4B4C' }],
      accent:    [{ name: '冷光银', pantone: '14-5002 TCX', hex: '#AFAFAE' }],
      strategy:  '黑白灰高对比基底，辅以金属冷色点缀，营造冷峻克制的极简氛围。',
    },
    design: [
      { dim: '廓形', logic: '弱化夸张比例，保留截短与利落直筒。' },
      { dim: '色彩', logic: '摒弃秀场杂色，提纯为极致的黑白灰。' },
      { dim: '面料', logic: '舍弃实验材质，转用挺括皮质与重磅棉。' },
      { dim: '搭配', logic: '简化繁复叠穿，强调高腰线与基础内搭。' },
    ],
  },
  {
    id: 'quietlux', name: '静奢主义', nameEn: 'QUIET LUXURY',
    season: 'FW 2023', category: '男装', looks: 13,
    keywords: ['Soft Tailoring', 'Texture-Driven', 'No Logo'],
    desc: '去logo化，以剪裁与面料质感为核心，触觉优先于视觉冲击，传达无声而可信赖的品位。',
    dir: '静奢主义', images: numSeq('静奢主义', 13, 'png'),
    trends: [
      { brand: 'Zegna FW23 Menswear', desc: '贡献了纯色肌理感羊毛夹克、落肩套头衫以及标志性的Oasi Cashmere式"柔和剪裁"理念。' },
      { brand: 'Loro Piana FW23/24', desc: '贡献了燕麦色、粗花呢斑点（Donegal）针织面料的奢华质感与大地色系的色彩搭配灵感。' },
      { brand: 'Hermès FW23 Menswear', desc: '贡献了精致的拉链夹克（Blouson）廓形，以及深棕色、梅子色等浓郁色彩与高级灰西裤的搭配范式。' },
      { brand: 'Auralee FW23', desc: '贡献了慵懒微阔的直筒西装裤型，以及连帽卫衣混搭正装长裤的日常松弛感逻辑。' },
    ],
    colors: {
      core:      [{ name: '深咖色', pantone: '19-1020 TCX', hex: '#3B2F2F' }, { name: '高级灰', pantone: '16-3802 TCX', hex: '#9B9A98' }],
      secondary: [{ name: '燕麦色', pantone: '13-0401 TCX', hex: '#D1C8B8' }, { name: '橄榄绿', pantone: '18-0521 TCX', hex: '#6B7153' }],
      accent:    [{ name: '芥末黄', pantone: '16-0940 TCX', hex: '#C69C3A' }, { name: '暗梅紫', pantone: '19-3215 TCX', hex: '#4F304B' }],
      strategy:  '以中性灰与大地色为基底，局部穿插芥末黄与暗梅紫，营造沉稳秋冬氛围。',
    },
    design: [
      { dim: '廓形', logic: '弱化夸张比例，保留微宽落肩与直筒版型。' },
      { dim: '色彩', logic: '降低色彩饱和度，以中性大地色为商业主轴。' },
      { dim: '面料', logic: '提取秀场肌理，转化为高实穿羊毛与花呢。' },
      { dim: '搭配', logic: '简化繁复叠穿，主打休闲上装混搭正装西裤。' },
    ],
  },
  {
    id: 'ordinary', name: '普通事物', nameEn: 'ORDINARY THINGS',
    season: 'SS 2023', category: '男女装', looks: 53,
    keywords: ['Deconstructed Minimalism', 'Fluid Resort', 'Effortless Luxury'],
    desc: '以不对称剪裁与色块拼接打破常规，同时保持高可穿度，流动悬垂与度假感并行，消解"特别"与"日常"的边界。',
    dir: '普通事物',
    images: [
      '{__look_id____Ref_Analysis_01_,_202603231311.png',
      '{__look_id____Ref_Analysis_01_,_202603231312 (1).png',
      '{__look_id____Ref_Analysis_01_,_202603231312.png',
      '{__look_id____Ref_Analysis_01_,_202603231313 (1).png',
      '{__look_id____Ref_Analysis_01_,_202603231313.png',
      '{__look_id____Ref_Analysis_01_,_202603231316.png',
      '{__look_id____Ref_Analysis_01_,_202603231317.png',
      '{__look_id____Ref_Analysis_01_,_202603231321.png',
      '{__look_id____Ref_Analysis_01_,_202603231322 (1).png',
      '{__look_id____Ref_Analysis_01_,_202603231322.png',
      '{__look_id____Ref_Analysis_01_,_202603231324.png',
      '{__look_id____Ref_Analysis_01_,_202603231325 (1).png',
      '{__look_id____Ref_Analysis_01_,_202603231325.png',
      '{__look_id____Ref_Analysis_01_,_202603231328.png',
      '{__look_id____Ref_Analysis_01_,_202603231329.png',
      '{__look_id____Ref_Analysis_01_,_202603231403 (1).png',
      '{__look_id____Ref_Analysis_01_,_202603231403.png',
      '{__look_id____Ref_Analysis_01_,_202603231408.png',
      '{__look_id____Ref_Analysis_01_,_202603231410.png',
      '{__look_id____Ref_Analysis_01_,_202603231412.png',
      '{__look_id____Ref_Analysis_01_,_202603231419.png',
      '{__look_id____Ref_Analysis_01_,_202603231421.png',
      '{__look_id____Ref_Analysis_01_,_202603231428.png',
      '{__look_id____Ref_Analysis_01_,_202603231429.png',
      '{__look_id____Ref_Analysis_01_,_202603231523.png',
      '{__look_id____Ref_Analysis_01_,_202603231526.png',
      '{__look_id____Ref_Analysis_01_,_202603231528.png',
      '{__look_id____Ref_Analysis_01_,_202603231529 (1).png',
      '{__look_id____Ref_Analysis_01_,_202603231529.png',
      '{__look_id____Ref_Analysis_01_,_202603231530.png',
      '{__look_id____Ref_Analysis_01_,_202603251318 (1).png',
      '{__look_id____Ref_Analysis_01_,_202603251318 (2).png',
      '{__look_id____Ref_Analysis_01_,_202603251318 (3).png',
      '{__look_id____Ref_Analysis_01_,_202603251318 (5).png',
      '{__look_id____Ref_Analysis_01_,_202603251318 (6).png',
      '{__look_id____Ref_Analysis_01_,_202603251318 (7).png',
      '{__look_id____Ref_Analysis_01_,_202603251318.png',
      '{__look_id____Ref_Analysis_01_,_202603251319 (1).png',
      '{__look_id____Ref_Analysis_01_,_202603251319 (2).png',
      '{__look_id____Ref_Analysis_01_,_202603251319 (3).png',
      '{__look_id____Ref_Analysis_01_,_202603251319 (4).png',
      '{__look_id____Ref_Analysis_01_,_202603251319.png',
      '{__look_id____Ref_Analysis_01_,_202603251326 (1).png',
      '{__look_id____Ref_Analysis_01_,_202603251326 (2).png',
      '{__look_id____Ref_Analysis_01_,_202603251326 (3).png',
      '{__look_id____Ref_Analysis_01_,_202603251326 (4).png',
      '{__look_id____Ref_Analysis_01_,_202603251326 (5).png',
      '{__look_id____Ref_Analysis_01_,_202603251326.png',
      '{__look_id____Ref_Analysis_01_,_202603251328 (1).png',
      '{__look_id____Ref_Analysis_01_,_202603251328 (2).png',
      '{__look_id____Ref_Analysis_01_,_202603251328.png',
      '{__look_id____Ref_Analysis_01_,_202603251330.png',
      '{__look_id____Ref_Analysis_01_,_202603251342.png',
    ],
    trends: [
      { brand: 'Jil Sander SS23', desc: '贡献了不对称剪裁与建筑感廓形，将实用性与艺术感融合，用减法呈现最高级的日常穿着美学。' },
      { brand: 'Lemaire SS24', desc: '贡献了流动悬垂的色块拼接与宽松比例，用柔和的色彩对话打破单色极简，营造轻松的度假感。' },
      { brand: 'Hermès SS24', desc: '贡献了精致的手工感与面料的触觉质感，强调"低调的高级"——在普通形态中藏匿非凡工艺。' },
    ],
    colors: {
      core:      [{ name: '沙白', pantone: '11-0602 TCX', hex: '#EDE8E0' }, { name: '暖棕', pantone: '16-1319 TCX', hex: '#B08B6E' }],
      secondary: [{ name: '灰蓝', pantone: '14-4112 TCX', hex: '#8FA3B1' }, { name: '奶白', pantone: '11-0105 TCX', hex: '#F8F4EC' }],
      accent:    [{ name: '砖红', pantone: '18-1438 TCX', hex: '#B05B4A' }],
      strategy:  '以沙白与暖棕为底色，融入灰蓝与砖红，营造温柔而克制的度假格调。',
    },
    design: [
      { dim: '廓形', logic: '保留不对称与流动感，强调人体自然曲线。' },
      { dim: '色彩', logic: '以自然沙土色为主，点缀低饱和度冷暖对撞。' },
      { dim: '面料', logic: '选用垂感面料与天然纤维，优先触觉体验。' },
      { dim: '搭配', logic: '弱化配饰依赖，以错位色块叠穿制造层次感。' },
    ],
  },
];

/* ═══════════════════════════════════════════
   CSS 3D RING CONFIG
   6 series × (5 images + 1 gap) = 36 slots → 10° per slot
   ═══════════════════════════════════════════ */
const RING_R      = 400;
const IMGS_PER    = 5;
const GAP_PER     = 1;
const TOTAL_SLOTS = SERIES.length * (IMGS_PER + GAP_PER);
const ANGLE_STEP  = 360 / TOTAL_SLOTS;   // 10°

/* ── ANIMATION STATE ─────────────────────────────────────────── */
let currentAngle  = 0;
let targetAngle   = 0;
let animId        = null;
let ringEl        = null;
let lbParallaxRaf = null;

/* ── DOM REFS ────────────────────────────────────────────────── */
const ringView     = document.getElementById('ringView');
const ringPanel    = document.getElementById('ringPanel');
const ringWrap     = document.getElementById('ringWrap');
const rpImg        = document.getElementById('rpImg');
const detailView   = document.getElementById('detailView');
const detailScroll = document.getElementById('detailScroll');
const detailEditor = document.getElementById('detailEditorial');
const backBtn      = document.getElementById('backBtn');
const lb           = document.getElementById('lightbox');
const lbImg        = document.getElementById('lbImg');
const lbClose      = document.getElementById('lbClose');
const lbPrev       = document.getElementById('lbPrev');
const lbNext       = document.getElementById('lbNext');
let lbImages = [], lbIndex = 0;

/* ═══════════════════════════════════════════
   BUILD CSS 3D RING
   ═══════════════════════════════════════════ */
function buildCSSRing() {
  const container = document.createElement('div');
  container.className = 'ring-container';

  ringEl = document.createElement('div');
  ringEl.className = 'ring';

  let slot = 0;

  SERIES.forEach(series => {
    for (let i = 0; i < IMGS_PER; i++) {
      const baseAngle = slot * ANGLE_STEP;
      const item      = document.createElement('div');
      item.className  = 'ring-item';
      item.style.transform = `rotateY(${baseAngle}deg) translateZ(${RING_R}px)`;

      const imgFile = series.images[i];
      if (imgFile) {
        const img   = document.createElement('img');
        img.src     = origP(series.dir, imgFile);
        img.alt     = `${series.name} ${i + 1}`;
        img.loading = 'lazy';
        item.appendChild(img);

        item.addEventListener('mouseenter', () => {
          rpImg.src = origP(series.dir, imgFile);
          ringPanel.classList.add('has-hover');
        });
        item.addEventListener('mouseleave', () => {
          ringPanel.classList.remove('has-hover');
        });
        item.addEventListener('click', (e) => {
          if (dragMoved) return;
          enterSeries(series);
        });
      }

      ringEl.appendChild(item);
      slot++;
    }

    /* Gap slot — visual separator between series */
    const gap = document.createElement('div');
    gap.className = 'ring-item ring-item--gap';
    gap.style.transform = `rotateY(${slot * ANGLE_STEP}deg) translateZ(${RING_R}px)`;
    ringEl.appendChild(gap);
    slot++;
  });

  container.appendChild(ringEl);
  ringWrap.appendChild(container);
}

/* ═══════════════════════════════════════════
   ANIMATION LOOP (rAF lerp)
   ═══════════════════════════════════════════ */
function startAnim() {
  if (animId) return;
  function tick() {
    animId = requestAnimationFrame(tick);
    currentAngle += (targetAngle - currentAngle) * 0.06;
    ringEl.style.transform = `rotateY(${currentAngle}deg)`;
  }
  tick();
}

function stopAnim() {
  if (animId) { cancelAnimationFrame(animId); animId = null; }
}

/* ═══════════════════════════════════════════
   INTERACTION
   ═══════════════════════════════════════════ */
function onWheel(e) {
  e.preventDefault();
  targetAngle += e.deltaY > 0 ? 5 : -5;
}

let dragging  = false;
let dragStartX = 0;
let dragStartAngle = 0;
let dragMoved = false;

function onDown(e) {
  dragging       = true;
  dragStartX     = e.clientX;
  dragStartAngle = targetAngle;
  dragMoved      = false;
}
function onUp() { dragging = false; }
function onDrag(e) {
  if (!dragging) return;
  const dx = e.clientX - dragStartX;
  if (Math.abs(dx) > 4) dragMoved = true;
  targetAngle = dragStartAngle - dx * 0.25;
}

let touchX = 0;
function onTouchStart(e) {
  touchX    = e.touches[0].clientX;
  dragMoved = false;
}
function onTouchMove(e) {
  e.preventDefault();
  const dx = e.touches[0].clientX - touchX;
  if (Math.abs(dx) > 4) dragMoved = true;
  targetAngle -= dx * 0.25;
  touchX = e.touches[0].clientX;
}

/* ═══════════════════════════════════════════
   LAYER TRANSITIONS
   ═══════════════════════════════════════════ */
function enterSeries(series) {
  stopAnim();
  gsap.to(ringView, { opacity: 0, duration: 0.35, ease: 'power2.in', onComplete() {
    ringView.hidden = true;
    buildDetailPage(series);
    detailView.hidden = false;
    detailView.style.opacity = '0';
    detailScroll.scrollTop = 0;
    initLookBoardParallax();
    gsap.to(detailView, { opacity: 1, duration: 0.4, ease: 'power2.out' });
  }});
}

function exitSeries() {
  if (lbParallaxRaf) { cancelAnimationFrame(lbParallaxRaf); lbParallaxRaf = null; }
  gsap.to(detailView, { opacity: 0, duration: 0.3, ease: 'power2.in', onComplete() {
    detailView.hidden = true;
    ringView.hidden   = false;
    ringView.style.opacity = '0';
    gsap.to(ringView, { opacity: 1, duration: 0.4 });
    ringPanel.classList.remove('has-hover');
    startAnim();
  }});
}

/* ═══════════════════════════════════════════
   EDITORIAL DETAIL PAGE BUILDER
   ═══════════════════════════════════════════ */
function el(tag, cls, html) {
  const e = document.createElement(tag);
  if (cls)      e.className = cls;
  if (html != null) e.innerHTML = html;
  return e;
}

function imgEl(src, alt, lazy) {
  const i = document.createElement('img');
  i.src = src; i.alt = alt || '';
  if (lazy) i.loading = 'lazy';
  return i;
}

function sectionLabel(zh, en) {
  const d = el('div', 'de-section-label');
  d.appendChild(el('div', 'de-section-label__zh', zh));
  d.appendChild(el('div', 'de-section-label__en', en));
  return d;
}

const MB_SLOTS = 7;
function buildMoodboard(series) {
  const wrap = el('div', 'de-moodboard');
  const picks = series.images.slice(0, MB_SLOTS);
  picks.forEach((file, i) => {
    const item = el('div', `de-mb-item de-mb-${i}`);
    item.appendChild(imgEl(origP(series.dir, file), `${series.name} look ${i + 1}`, true));
    item.appendChild(el('span', 'de-mb-num', String(i + 1).padStart(2, '0')));
    wrap.appendChild(item);
  });
  return wrap;
}

function buildTrends(series) {
  const wrap     = el('div', 'de-trends');
  const trendImgs = series.images.slice(
    Math.floor(series.images.length * 0.2),
    Math.floor(series.images.length * 0.2) + series.trends.length
  );
  series.trends.forEach((t, i) => {
    const item = el('div', 'de-trend-item');
    item.appendChild(el('div', 'de-trend-brand', t.brand));
    item.appendChild(el('p',   'de-trend-desc',  t.desc));
    if (trendImgs[i]) {
      const imgWrap = el('div', 'de-trend-img');
      imgWrap.appendChild(imgEl(origP(series.dir, trendImgs[i]), t.brand, true));
      item.appendChild(imgWrap);
    }
    wrap.appendChild(item);
  });
  return wrap;
}

function buildColors(series) {
  const c    = series.colors;
  const wrap = el('div', 'de-colors');

  function group(label, swatches) {
    const g = el('div', 'de-color-group');
    g.appendChild(el('div', 'de-color-group__label', label));
    const row = el('div', 'de-color-swatches');
    swatches.forEach(s => {
      const sw     = el('div', 'de-swatch');
      const circle = el('div', 'de-swatch__circle');
      circle.style.background = s.hex;
      sw.appendChild(circle);
      sw.appendChild(el('div', 'de-swatch__name',    s.name));
      sw.appendChild(el('div', 'de-swatch__pantone', s.pantone));
      row.appendChild(sw);
    });
    g.appendChild(row);
    return g;
  }

  wrap.appendChild(group('核心色  Core',       c.core));
  wrap.appendChild(group('辅助色  Secondary',  c.secondary));
  wrap.appendChild(group('点缀色  Accent',     c.accent));
  wrap.appendChild(el('p', 'de-color-strategy', c.strategy));
  return wrap;
}

function buildDesign(series) {
  const wrap = el('div', 'de-design');
  series.design.forEach(d => {
    const item = el('div', 'de-design-item');
    item.appendChild(el('div', 'de-design-dim',   d.dim));
    item.appendChild(el('p',   'de-design-logic',  d.logic));
    wrap.appendChild(item);
  });
  return wrap;
}

/* ── LOOK BOARD ──────────────────────────────────────────────── */

/* Row templates: each entry = array of width fractions of vw.
   Max 3 images per row, generous gaps between rows.
   Fractions chosen so total row width stays ≤ 86vw — leaves room for edge breathing. */
const LB_TEMPLATES = [
  [0.42, 0.18],
  [0.18, 0.40],
  [0.28, 0.27],
  [0.44],
  [0.15, 0.27, 0.15],
  [0.38, 0.20],
  [0.20, 0.38],
  [0.26, 0.26],
  [0.46],
  [0.16, 0.30, 0.14],
];

function computeLookBoardLayout(n, vw) {
  const HEDGE    = vw * 0.04;   // left/right edge margin (4vw each side)
  const HGAP     = vw * 0.05;   // gap between images within a row (5vw ≈ 80px)
  const VGAP_MIN = 80;
  const VGAP_MAX = 130;

  const items   = [];
  let y         = 40;
  let imgIdx    = 0;
  let tplIdx    = 0;

  while (imgIdx < n) {
    const tpl      = LB_TEMPLATES[tplIdx % LB_TEMPLATES.length];
    tplIdx++;
    const rowCount = Math.min(tpl.length, n - imgIdx);
    const widths   = tpl.slice(0, rowCount);

    // Convert fractions to pixels, add ±1vw variation for organic feel
    const plans = widths.map(wFrac => {
      const w     = Math.round(vw * (wFrac + rnd(-0.01, 0.01)));
      const h     = Math.round(w * 4 / 3);
      const depth = wFrac >= 0.35 ? rnd(0.25, 0.48)
                  : wFrac >= 0.22 ? rnd(0.45, 0.70)
                  :                 rnd(0.68, 1.0);
      const zBase = depth > 0.65 ? 3 : depth > 0.45 ? 2 : 1;
      return { w, h, depth, zBase };
    });

    // Total occupied width in this row
    const totalRowW = plans.reduce((s, p) => s + p.w, 0) + HGAP * (plans.length - 1);
    // Remaining horizontal slack — distribute randomly for edge variation
    const slack     = Math.max(0, vw - HEDGE * 2 - totalRowW);
    let x           = HEDGE + rnd(0, slack);
    const rowH      = Math.max(...plans.map(p => p.h));

    plans.forEach(plan => {
      items.push({
        left:  Math.round(x),
        top:   Math.round(y + rnd(-40, 40)),
        w:     plan.w,
        h:     plan.h,
        depth: plan.depth,
        zBase: plan.zBase,
      });
      x += plan.w + HGAP;
      imgIdx++;
    });

    y += rowH + rnd(VGAP_MIN, VGAP_MAX);
  }

  return { items, totalH: y + 80 };
}

function buildLookBoard(series) {
  lbImages = series.images.map(f => origP(series.dir, f));
  const container = el('div', 'de-lookboard');

  series.images.forEach((file, i) => {
    const item  = el('div', 'de-lb-item');
    const inner = el('div', 'de-lb-item__inner');
    const image = imgEl(origP(series.dir, file), `${series.name} look ${i + 1}`, true);
    inner.appendChild(image);
    item.appendChild(inner);
    item.addEventListener('click', () => openLightbox(i));
    container.appendChild(item);
  });

  // Series English name as typographic visual element (Tomasi "CHRYSALISES" effect)
  container.appendChild(el('div', 'de-lb-title', series.nameEn));

  return container;
}

function initLookBoardParallax() {
  const container = document.querySelector('.de-lookboard');
  if (!container) return;

  const domItems = container.querySelectorAll('.de-lb-item');
  if (!domItems.length) return;

  // Container is a direct child of .de-lookboard-section which is a direct
  // child of .detail-scroll — so it is naturally full-width. No breakout needed.
  const scrollEl = container.closest('.detail-scroll') || document.documentElement;
  const vw       = scrollEl.clientWidth;

  const { items: layout, totalH } = computeLookBoardLayout(domItems.length, vw);
  container.style.height = totalH + 'px';

  const pxItems = [];
  layout.forEach((pos, i) => {
    const node = domItems[i];
    if (!node) return;
    node.style.left   = pos.left + 'px';
    node.style.top    = pos.top  + 'px';
    node.style.width  = pos.w   + 'px';
    node.style.height = pos.h   + 'px';
    node.style.zIndex = String(pos.zBase);
    pxItems.push({ node, depth: pos.depth });
  });

  // Position the typographic title element at ~38% of board height
  const titleEl = container.querySelector('.de-lb-title');
  if (titleEl) {
    titleEl.style.top = Math.round(totalH * 0.38) + 'px';
  }

  if (lbParallaxRaf) { cancelAnimationFrame(lbParallaxRaf); lbParallaxRaf = null; }

  const target  = { x: 0, y: 0 };
  const current = { x: 0, y: 0 };
  const MAX_PX  = 25;
  const LERP    = 0.08;

  container.addEventListener('mousemove', e => {
    target.x = (e.clientX / window.innerWidth  - 0.5) * 2;
    target.y = (e.clientY / window.innerHeight - 0.5) * 2;
  });
  container.addEventListener('mouseleave', () => { target.x = 0; target.y = 0; });

  function lbTick() {
    lbParallaxRaf = requestAnimationFrame(lbTick);
    current.x += (target.x - current.x) * LERP;
    current.y += (target.y - current.y) * LERP;
    pxItems.forEach(it => {
      const tx = (current.x * MAX_PX * it.depth).toFixed(2);
      const ty = (current.y * MAX_PX * it.depth).toFixed(2);
      it.node.style.transform = `translate(${tx}px,${ty}px)`;
    });
  }
  lbTick();
}

function buildDetailPage(series) {
  // Clear the entire scroll container and rebuild with correct DOM order:
  // [1] centred header  [2] full-width lookboard  [3] centred analysis
  detailScroll.innerHTML = '';

  // ── 1. Centred header (title + desc) ──────────────────────────
  const header = el('div', 'detail-editorial');
  const hero   = el('div', 'de-hero');
  hero.appendChild(el('div', 'de-hero__name', series.name));
  hero.appendChild(el('div', 'de-hero__en',   series.nameEn));
  hero.appendChild(el('div', 'de-hero__meta',
    `${series.season}  ·  ${series.category}  ·  ${series.looks} LOOKS`));
  header.appendChild(hero);
  header.appendChild(el('p', 'de-desc', series.desc));
  header.style.paddingBottom = '0';
  detailScroll.appendChild(header);

  // ── 2. Full-width lookboard (direct child of detailScroll) ────
  const lbWrap = el('div', 'de-lookboard-section');
  lbWrap.appendChild(buildLookBoard(series));
  detailScroll.appendChild(lbWrap);

  // ── 3. Centred text analysis (trends / colors / design) ───────
  const analysis = el('div', 'de-analysis');
  analysis.appendChild(sectionLabel('趋势溯源', 'TREND ORIGINS'));
  analysis.appendChild(buildTrends(series));
  analysis.appendChild(sectionLabel('色彩构成', 'COLOR COMPOSITION'));
  analysis.appendChild(buildColors(series));
  analysis.appendChild(sectionLabel('设计推演', 'DESIGN INFERENCE'));
  analysis.appendChild(buildDesign(series));
  detailScroll.appendChild(analysis);
}

/* ═══════════════════════════════════════════
   LIGHTBOX
   ═══════════════════════════════════════════ */
function openLightbox(idx) {
  lbIndex   = idx;
  lbImg.src = lbImages[idx];
  lb.hidden = false;
  lb.style.opacity = '0';
  gsap.to(lb, { opacity: 1, duration: 0.25 });
  document.body.style.overflow = 'hidden';
}

function closeLightbox() {
  gsap.to(lb, { opacity: 0, duration: 0.2, onComplete: () => {
    lb.hidden  = true;
    lbImg.src  = '';
  }});
  document.body.style.overflow = '';
}

function lbNav(d) {
  lbIndex = (lbIndex + d + lbImages.length) % lbImages.length;
  gsap.to(lbImg, { opacity: 0, x: d * -24, duration: 0.14, onComplete() {
    lbImg.src = lbImages[lbIndex];
    gsap.fromTo(lbImg, { opacity: 0, x: d * 24 }, { opacity: 1, x: 0, duration: 0.18 });
  }});
}

/* ═══════════════════════════════════════════
   BOOT
   ═══════════════════════════════════════════ */
function bindEvents() {
  ringWrap.addEventListener('wheel',      onWheel,      { passive: false });
  ringWrap.addEventListener('mousedown',  onDown);
  document.addEventListener('mouseup',    onUp);
  document.addEventListener('mousemove',  onDrag);
  ringWrap.addEventListener('touchstart', onTouchStart, { passive: true });
  ringWrap.addEventListener('touchmove',  onTouchMove,  { passive: false });

  backBtn.addEventListener('click', exitSeries);

  lbClose.addEventListener('click', closeLightbox);
  lbPrev.addEventListener('click',  () => lbNav(-1));
  lbNext.addEventListener('click',  () => lbNav(1));
  lb.addEventListener('click', e => { if (e.target === lb) closeLightbox(); });

  document.addEventListener('keydown', e => {
    if (lb.hidden) return;
    if (e.key === 'Escape')     closeLightbox();
    if (e.key === 'ArrowLeft')  lbNav(-1);
    if (e.key === 'ArrowRight') lbNav(1);
  });
}

function playEntrance() {
  gsap.from('.ring-panel', { x: -40, opacity: 0, duration: 0.8, ease: 'power3.out', delay: 0.1 });
  gsap.from('#ringWrap',   { opacity: 0, duration: 0.6, delay: 0.2 });
}

function boot() {
  buildCSSRing();
  bindEvents();
  startAnim();
  playEntrance();
}

boot();
