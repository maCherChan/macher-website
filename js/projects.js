'use strict';

const origP = (dir, file) => dir + '/' + file;

/* ═══════════════════════════════════════════
   SERIES DATA (corrected image paths)
   ═══════════════════════════════════════════ */
const SERIES = [
  {
    id: 'pocui', name: 'Fractured Grace', dir: '破碎感优雅',
    images: [
      '破碎感优雅 (1).jpeg', '破碎感优雅 (2).jpg',  '破碎感优雅 (3).jpg',
      '破碎感优雅 (4).jpeg', '破碎感优雅 (5).jpeg', '破碎感优雅 (7).jpeg',
      '破碎感优雅 (8).jpeg', '破碎感优雅 (9).jpeg', '破碎感优雅 (10).jpeg',
      '破碎感优雅 (12).jpeg','破碎感优雅 (13).jpeg',
    ],
  },
  {
    id: 'power', name: 'Power Feminine', dir: '女性权利主义',
    images: [
      'Gemini_Generated_Image_18pwgs18pwgs18pw.jpg',
      'Gemini_Generated_Image_1esao41esao41esa.jpg',
      'Gemini_Generated_Image_4nmvts4nmvts4nmv.jpg',
      'Gemini_Generated_Image_i3g2qdi3g2qdi3g2.jpg',
      'Gemini_Generated_Image_ifwji8ifwji8ifwj.jpg',
      'Gemini_Generated_Image_m04c7km04c7km04c.jpg',
      'Gemini_Generated_Image_nzoq91nzoq91nzoq.jpg',
      'Gemini_Generated_Image_sif851sif851sif8.jpg',
      'Gemini_Generated_Image_spoo3espoo3espoo.jpg',
      'Gemini_Generated_Image_u3zue2u3zue2u3zu.jpg',
      'Gemini_Generated_Image_vdjcekvdjcekvdjc.jpg',
      'K字拼皮夹克.jpg', '双层门襟短夹克.jpg', '宫廷衬衫.jpg',
      '拼皮夹克-拼皮西裤.jpg', '斗篷短西.jpg', '明线短夹克.jpg',
      '蕾丝机车皮衣.jpg', '黑白拼色胸衣衬衫.jpg',
      'unnamed (2).jpg', '拼色皮裙.jpg',
    ],
  },
  {
    id: 'boudoir', name: 'After Hours', dir: '闺房风尚',
    images: Array.from({length: 16}, (_, i) => `闺房风尚 (${i + 1}).jpeg`),
  },
  {
    id: 'min90', name: '90s Minimal', dir: '90年代极简',
    images: Array.from({length: 30}, (_, i) => `男装经典主义回潮 (${i + 1}).jpg`),
  },
  {
    id: 'quietlux', name: 'Quiet Luxury', dir: '静奢主义',
    images: Array.from({length: 13}, (_, i) => `静奢主义 (${i + 1}).jpg`),
  },
  {
    id: 'ordinary', name: 'The Ordinary', dir: '普通事物',
    images: [
      '{__look_id____Ref_Analysis_01_,_202603231311.jpg',
      '{__look_id____Ref_Analysis_01_,_202603231312 (1).jpg',
      '{__look_id____Ref_Analysis_01_,_202603231312.jpg',
      '{__look_id____Ref_Analysis_01_,_202603231313 (1).jpg',
      '{__look_id____Ref_Analysis_01_,_202603231313.jpg',
      '{__look_id____Ref_Analysis_01_,_202603231316.jpg',
      '{__look_id____Ref_Analysis_01_,_202603231317.jpg',
      '{__look_id____Ref_Analysis_01_,_202603231321.jpg',
      '{__look_id____Ref_Analysis_01_,_202603231322 (1).jpg',
      '{__look_id____Ref_Analysis_01_,_202603231322.jpg',
      '{__look_id____Ref_Analysis_01_,_202603231324.jpg',
      '{__look_id____Ref_Analysis_01_,_202603231325 (1).jpg',
      '{__look_id____Ref_Analysis_01_,_202603231325.jpg',
      '{__look_id____Ref_Analysis_01_,_202603231328.jpg',
      '{__look_id____Ref_Analysis_01_,_202603231329.jpg',
      '{__look_id____Ref_Analysis_01_,_202603231403 (1).jpg',
      '{__look_id____Ref_Analysis_01_,_202603231403.jpg',
      '{__look_id____Ref_Analysis_01_,_202603231408.jpg',
      '{__look_id____Ref_Analysis_01_,_202603231410.jpg',
      '{__look_id____Ref_Analysis_01_,_202603231412.jpg',
      '{__look_id____Ref_Analysis_01_,_202603231419.jpg',
      '{__look_id____Ref_Analysis_01_,_202603231421.jpg',
      '{__look_id____Ref_Analysis_01_,_202603231428.jpg',
      '{__look_id____Ref_Analysis_01_,_202603231429.jpg',
      '{__look_id____Ref_Analysis_01_,_202603231523.jpg',
      '{__look_id____Ref_Analysis_01_,_202603231526.jpg',
      '{__look_id____Ref_Analysis_01_,_202603231528.jpg',
      '{__look_id____Ref_Analysis_01_,_202603231529 (1).jpg',
      '{__look_id____Ref_Analysis_01_,_202603231529.jpg',
      '{__look_id____Ref_Analysis_01_,_202603231530.jpg',
      '{__look_id____Ref_Analysis_01_,_202603251318 (1).jpg',
      '{__look_id____Ref_Analysis_01_,_202603251318 (2).jpg',
      '{__look_id____Ref_Analysis_01_,_202603251318 (3).jpg',
      '{__look_id____Ref_Analysis_01_,_202603251318 (5).jpg',
      '{__look_id____Ref_Analysis_01_,_202603251318 (6).jpg',
      '{__look_id____Ref_Analysis_01_,_202603251318 (7).jpg',
      '{__look_id____Ref_Analysis_01_,_202603251318.jpg',
      '{__look_id____Ref_Analysis_01_,_202603251319 (1).jpg',
      '{__look_id____Ref_Analysis_01_,_202603251319 (2).jpg',
      '{__look_id____Ref_Analysis_01_,_202603251319 (3).jpg',
      '{__look_id____Ref_Analysis_01_,_202603251319 (4).jpg',
      '{__look_id____Ref_Analysis_01_,_202603251319.jpg',
      '{__look_id____Ref_Analysis_01_,_202603251326 (1).jpg',
      '{__look_id____Ref_Analysis_01_,_202603251326 (2).jpg',
      '{__look_id____Ref_Analysis_01_,_202603251326 (3).jpg',
      '{__look_id____Ref_Analysis_01_,_202603251326 (4).jpg',
      '{__look_id____Ref_Analysis_01_,_202603251326 (5).jpg',
      '{__look_id____Ref_Analysis_01_,_202603251326.jpg',
      '{__look_id____Ref_Analysis_01_,_202603251328 (1).jpg',
      '{__look_id____Ref_Analysis_01_,_202603251328 (2).jpg',
      '{__look_id____Ref_Analysis_01_,_202603251328.jpg',
      '{__look_id____Ref_Analysis_01_,_202603251330.jpg',
      '{__look_id____Ref_Analysis_01_,_202603251342.jpg',
    ],
  },
  {
    id: 'aDaDD', name: 'aDaDD', dir: 'aDaDD',
    images: Array.from({length: 8}, (_, i) => `aDaDD (${i + 1}).jpg`),
  },
];

/* ═══════════════════════════════════════════
   BUILD HORIZONTAL GALLERY
   每个系列显示前8张；中间图片稍大
   data-series-id 保留在 group 上，供克隆后事件委托使用
   ═══════════════════════════════════════════ */
const gallery = document.getElementById('pgGallery');
const SHOW_PER_SERIES = 8;

SERIES.forEach(series => {
  const group = document.createElement('div');
  group.className = 'pg-group';
  group.dataset.seriesId = series.id;   // 委托点击时识别系列

  const label = document.createElement('div');
  label.className   = 'pg-group__label';
  label.textContent = series.name;

  const items = document.createElement('div');
  items.className = 'pg-group__items';

  const shown     = series.images.slice(0, SHOW_PER_SERIES);
  const centerIdx = Math.floor((shown.length - 1) / 2);

  shown.forEach((file, i) => {
    const item = document.createElement('div');
    item.className = 'pg-item' + (i === centerIdx ? ' pg-item--center' : '');

    const inner = document.createElement('div');
    inner.className = 'pg-item__inner';

    const img = document.createElement('img');
    img.src     = origP(series.dir, 'thumbs/' + file.replace(/\.[^.]+$/, '.jpg'));
    img.alt     = `${series.name} ${i + 1}`;
    img.loading = 'lazy';

    inner.appendChild(img);
    item.appendChild(inner);
    items.appendChild(item);
  });

  group.appendChild(items);
  group.appendChild(label);   // label 在图片行下方，右对齐
  gallery.appendChild(group);
});

/* ═══════════════════════════════════════════
   无限循环：克隆全部 group 追加到末尾
   点击通过事件委托处理（克隆节点不复制监听器）
   ═══════════════════════════════════════════ */
Array.from(gallery.children).forEach(g => gallery.appendChild(g.cloneNode(true)));

let dragMoved = false;
gallery.addEventListener('click', e => {
  if (dragMoved) return;
  const item  = e.target.closest('.pg-item');
  if (!item) return;
  const group = item.closest('.pg-group');
  if (group?.dataset.seriesId)
    window.location.href = 'project-detail.html?series=' + group.dataset.seriesId;
});

/* ═══════════════════════════════════════════
   SCROLL STATE — 统一虚拟 pos 变量
   halfW = scrollWidth/2 = 一套原始内容的宽度
   applyPos 把 pos 归一化到 [0, halfW) 实现无缝循环
   ═══════════════════════════════════════════ */
let pos = 0;
let halfW = 0;

function applyPos() {
  if (!halfW) return;
  pos = ((pos % halfW) + halfW) % halfW;
  gallery.scrollLeft = pos;
}

requestAnimationFrame(() => { halfW = gallery.scrollWidth / 2; });

/* ── 滚轮 ── */
let lastInteraction = 0;
gallery.addEventListener('wheel', e => {
  e.preventDefault();
  lastInteraction = Date.now();
  pos += e.deltaY;
  applyPos();
}, { passive: false });

/* ── 拖拽 ── */
let isDragging = false, startX = 0, startPos = 0;
let isTouching = false;

gallery.addEventListener('mousedown', e => {
  isDragging      = true;
  dragMoved       = false;
  startX          = e.clientX;
  startPos        = pos;
  lastInteraction = Date.now();
});
document.addEventListener('mouseup', () => { isDragging = false; });
document.addEventListener('mousemove', e => {
  if (!isDragging) return;
  const dx = e.clientX - startX;
  if (Math.abs(dx) > 4) dragMoved = true;
  pos = startPos - dx;
  applyPos();
});

/* ── 触摸拖动（移动端专用）──────────────────────
   touch-action:none 禁用浏览器原生滚动，完全由 JS 控制 pos，
   与鼠标拖拽逻辑保持一致，避免 scrollLeft 被 applyPos 覆盖导致回弹。
   ─────────────────────────────────────────────── */
if ('ontouchstart' in window) {
  let txStart = 0, txLast = 0, posStart = 0, vel = 0, moRaf = null;

  gallery.addEventListener('touchstart', e => {
    isTouching = true;
    dragMoved  = false;
    cancelAnimationFrame(moRaf);
    txStart = txLast = e.touches[0].clientX;
    posStart = pos;
    vel = 0;
    lastInteraction = Date.now();
  }, { passive: true });

  gallery.addEventListener('touchmove', e => {
    if (!isTouching) return;
    const x  = e.touches[0].clientX;
    const dx = txLast - x;
    vel = vel * 0.4 + dx * 0.6;          // EMA 平滑速度
    txLast = x;
    if (Math.abs(x - txStart) > 4) dragMoved = true;
    pos = posStart - (x - txStart);
    applyPos();
    lastInteraction = Date.now();
  }, { passive: true });

  gallery.addEventListener('touchend', () => {
    isTouching = false;
    lastInteraction = Date.now() + 500;  // 自动轮播延迟2s恢复（+AUTO_RESUME 1500）

    // 惯性减速：速度衰减到 0.5px/帧 以下才停止
    (function momentum() {
      vel *= 0.90;
      if (Math.abs(vel) < 0.5) { vel = 0; return; }
      pos += vel;
      applyPos();
      moRaf = requestAnimationFrame(momentum);
    }());
  });
}

/* ── 自动播放（悬停或交互时暂停，1.5s后恢复）── */
const AUTO_SPEED  = 0.4;    // px/frame ≈ 24 px/s at 60fps
const AUTO_RESUME = 1500;   // ms

let isHovered = false;

// 只在进出 .pg-item 时切换——空白区域不触发
gallery.addEventListener('mouseover', e => {
  if (e.target.closest('.pg-item')) {
    isHovered = true;
    gallery.classList.add('has-hover');
  }
});
gallery.addEventListener('mouseout', e => {
  // relatedTarget 不在任何 .pg-item 内时才算"真正离开图片"
  if (!e.relatedTarget?.closest('.pg-item')) {
    isHovered = false;
    gallery.classList.remove('has-hover');
  }
});

(function autoTick() {
  requestAnimationFrame(autoTick);
  if (!isDragging && !isHovered && !isTouching && (Date.now() - lastInteraction) > AUTO_RESUME) {
    pos += AUTO_SPEED;
    applyPos();
  }
}());
