'use strict';

const origP  = (dir, file) => dir + '/' + file;
const numSeq = (pfx, n, ext) => Array.from({length: n}, (_, i) => `${pfx} (${i + 1}).${ext}`);

/* ═══════════════════════════════════════════
   SERIES DATA (id + images only — display use)
   ═══════════════════════════════════════════ */
const SERIES = [
  {
    id: 'pocui', name: '破碎感优雅', nameEn: 'DISHEVELED ELEGANCE',
    dir: '破碎感优雅',
    images: [
      '破碎感优雅 (1).jpeg', '破碎感优雅 (2).jpg',  '破碎感优雅 (3).jpg',
      '破碎感优雅 (4).jpeg', '破碎感优雅 (5).jpeg', '破碎感优雅 (7).jpeg',
      '破碎感优雅 (8).jpeg', '破碎感优雅 (9).jpeg', '破碎感优雅 (10).jpeg',
      '破碎感优雅 (12).jpeg','破碎感优雅 (13).jpeg',
    ],
  },
  {
    id: 'power', name: '女性权利主义', nameEn: 'NEO-POWER DRESSING',
    dir: '女性权利主义',
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
    id: 'boudoir', name: '闺房风尚', nameEn: 'BOUDOIR CHIC',
    dir: '闺房风尚', images: numSeq('闺房风尚', 16, 'jpeg'),
  },
  {
    id: 'min90', name: '90年代极简', nameEn: '90S MINIMALISM',
    dir: '90年代极简', images: numSeq('男装经典主义回潮', 30, 'jpg'),
  },
  {
    id: 'quietlux', name: '静奢主义', nameEn: 'QUIET LUXURY',
    dir: '静奢主义', images: numSeq('静奢主义', 13, 'jpg'),
  },
  {
    id: 'ordinary', name: '普通事物', nameEn: 'ORDINARY THINGS',
    dir: '普通事物',
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
    id: 'aDaDD', name: 'aDaDD', nameEn: 'ADADD',
    dir: 'aDaDD',
    images: Array.from({length: 8}, (_, i) => `aDaDD (${i + 1}).jpg`),
  },
];

/* ═══════════════════════════════════════════
   RESOLVE SERIES FROM URL PARAM
   ═══════════════════════════════════════════ */
const seriesId = new URLSearchParams(location.search).get('series');
const series   = SERIES.find(s => s.id === seriesId) || SERIES[0];
document.title = `maCher Chan® — ${series.name}`;

/* ═══════════════════════════════════════════
   SCATTER POSITIONS (from tomasi-clone.html)
   11 slots, each = { l, t, w, h, depth }
   ═══════════════════════════════════════════ */
const SCATTER_POS = [
  { l:'3%',  t:'7%',  w:'16.5vw', h:'22vw',    d:0.28 },
  { l:'52%', t:'12%', w:'11vw',   h:'14.7vw',  d:0.82 },
  { l:'76%', t:'26%', w:'11vw',   h:'14.7vw',  d:0.38 },
  { l:'0%',  t:'32%', w:'8.3vw',  h:'11.1vw',  d:0.34 },
  { l:'28%', t:'38%', w:'9vw',    h:'12vw',    d:0.70 },
  { l:'9%',  t:'54%', w:'15vw',   h:'20vw',    d:0.50 },
  { l:'56%', t:'63%', w:'11vw',   h:'14.7vw',  d:0.63 },
  { l:'82%', t:'72%', w:'8.3vw',  h:'11.1vw',  d:0.78 },
  { l:'34%', t:'76%', w:'10vw',   h:'13.3vw',  d:0.56 },
  { l:'0%',  t:'82%', w:'9vw',    h:'12vw',    d:0.45 },
  { l:'72%', t:'85%', w:'8.5vw',  h:'11.4vw',  d:0.82 },
];

/* ── DOM refs ────────────────────────────────────────── */
const scatterView = document.getElementById('scatterView');
const detailView  = document.getElementById('detailView');
const dvScroll    = document.getElementById('dvScroll');
const dvThumbs    = document.getElementById('dvThumbs');
const dvCounter   = document.getElementById('dvCounter');
const dvInfos     = document.getElementById('dvInfos');

let allImages = [];

/* ═══════════════════════════════════════════
   BUILD SCATTER VIEW
   ═══════════════════════════════════════════ */
function buildScatter() {
  const imgs  = series.images;
  const count = Math.min(imgs.length, SCATTER_POS.length);

  SCATTER_POS.slice(0, count).forEach((pos, i) => {
    const item  = document.createElement('div');
    item.className = 'pd-item';
    item.style.cssText = `left:${pos.l};top:${pos.t};width:${pos.w};height:${pos.h}`;
    item.dataset.depth = pos.d;
    item.dataset.idx   = i;

    const inner = document.createElement('div');
    inner.className = 'pd-item__inner';

    const img = document.createElement('img');
    img.src     = origP(series.dir, imgs[i]);
    img.alt     = `${series.name} Look ${i + 1}`;
    img.loading = 'lazy';

    inner.appendChild(img);
    item.appendChild(inner);
    item.addEventListener('click', () => enterCarousel(i));
    scatterView.appendChild(item);
  });

  // Series name text element (Tomasi "CHRYSALISES" equivalent)
  if (count >= 5) {
    const textEl = document.createElement('div');
    textEl.className   = 'pd-text-item';
    textEl.dataset.depth = '0.14';
    textEl.style.cssText = 'left:57%;top:44%;width:26vw;';

    const dash  = document.createElement('span');
    dash.className   = 'pd-text-dash';
    dash.textContent = '—';

    const title = document.createElement('span');
    title.className = 'pd-text-series';
    // Split nameEn roughly in half for 2-line display
    const words = series.nameEn.split(' ');
    const mid   = Math.ceil(words.length / 2);
    title.innerHTML = words.slice(0, mid).join(' ') + (words.length > 1
      ? '<br>' + words.slice(mid).join(' ')
      : '');

    textEl.appendChild(dash);
    textEl.appendChild(title);
    scatterView.appendChild(textEl);
  }
}

/* ═══════════════════════════════════════════
   SCATTER PARALLAX
   ═══════════════════════════════════════════ */
function initParallax() {
  const items  = scatterView.querySelectorAll('[data-depth]');
  let mouseX = 0, mouseY = 0, curX = 0, curY = 0;
  const MAX_PX = 28, LERP = 0.07;

  window.addEventListener('mousemove', e => {
    if (!scatterView.hidden) {
      mouseX = (e.clientX / window.innerWidth  - 0.5) * 2;
      mouseY = (e.clientY / window.innerHeight - 0.5) * 2;
    }
  });
  window.addEventListener('mouseleave', () => { mouseX = 0; mouseY = 0; });

  (function tick() {
    requestAnimationFrame(tick);
    curX += (mouseX - curX) * LERP;
    curY += (mouseY - curY) * LERP;
    items.forEach(item => {
      const d  = parseFloat(item.dataset.depth || 0.5);
      const tx = (curX * MAX_PX * d).toFixed(2);
      const ty = (curY * MAX_PX * d).toFixed(2);
      item.style.transform = `translate(${tx}px, ${ty}px)`;
    });
  }());
}

/* ═══════════════════════════════════════════
   BUILD CAROUSEL VIEW
   ═══════════════════════════════════════════ */
const imgObserver = new IntersectionObserver(entries => {
  let best = null;
  entries.forEach(e => {
    if (e.isIntersecting && (!best || e.intersectionRatio > best.intersectionRatio))
      best = e;
  });
  if (best) updateActiveIdx(+best.target.dataset.idx);
}, { root: dvScroll, threshold: [0.3, 0.6] });

function updateActiveIdx(idx) {
  dvCounter.textContent = (idx + 1) + ' / ' + allImages.length;
  dvThumbs.querySelectorAll('.dv-thumb').forEach((t, i) =>
    t.classList.toggle('is-active', i === idx)
  );
  const active = dvThumbs.children[idx];
  if (active) active.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
}

function buildCarousel() {
  allImages = series.images.map(f => origP(series.dir, f));

  allImages.forEach((src, i) => {
    // Scroll column
    const item = document.createElement('div');
    item.className   = 'dv-img-item';
    item.dataset.idx = i;
    const img = document.createElement('img');
    img.src = src; img.alt = `${series.name} Look ${i + 1}`; img.loading = 'lazy';
    item.appendChild(img);
    dvScroll.appendChild(item);
    imgObserver.observe(item);

    // Thumbnail
    const thumb = document.createElement('div');
    thumb.className   = 'dv-thumb';
    thumb.dataset.idx = i;
    const tImg = document.createElement('img');
    tImg.src = src.replace(/([^/]+\/)/, '$1thumbs/').replace(/\.[^.]+$/, '.jpg');
    tImg.alt = `Look ${i + 1}`;
    thumb.appendChild(tImg);
    thumb.addEventListener('click', () => {
      dvScroll.querySelectorAll('.dv-img-item')[i]
        ?.scrollIntoView({ behavior: 'smooth', block: 'center' });
    });
    dvThumbs.appendChild(thumb);
  });

  dvCounter.textContent = `1 / ${allImages.length}`;
}

/* ═══════════════════════════════════════════
   TRANSITIONS
   ═══════════════════════════════════════════ */
function enterCarousel(idx) {
  scatterView.style.opacity = '0';
  setTimeout(() => {
    scatterView.hidden = true;
    scatterView.style.opacity = '';
    const target = dvScroll.querySelectorAll('.dv-img-item')[idx];
    if (target) dvScroll.scrollTop = target.offsetTop - 80;
    updateActiveIdx(idx);
    detailView.hidden = false;
    detailView.style.opacity = '0';
    requestAnimationFrame(() => {
      detailView.style.transition = 'opacity 0.4s ease';
      detailView.style.opacity = '1';
    });
  }, 280);
}

function exitCarousel() {
  detailView.style.opacity = '0';
  setTimeout(() => {
    detailView.hidden = true;
    detailView.style.opacity = '';
    detailView.style.transition = '';
    scatterView.hidden = false;
    scatterView.style.opacity = '0';
    requestAnimationFrame(() => requestAnimationFrame(() => {
      scatterView.style.transition = 'opacity 0.4s ease';
      scatterView.style.opacity = '1';
      setTimeout(() => { scatterView.style.transition = ''; }, 450);
    }));
  }, 380);
}

/* ═══════════════════════════════════════════
   EVENTS
   ═══════════════════════════════════════════ */
function bindEvents() {
  dvInfos.addEventListener('click', exitCarousel);

  document.addEventListener('keydown', e => {
    if (detailView.hidden) return;
    const cur = +(dvThumbs.querySelector('.is-active')?.dataset.idx ?? 0);
    if (e.key === 'Escape') { exitCarousel(); return; }
    const next = (e.key === 'ArrowDown' || e.key === 'ArrowRight')
      ? Math.min(cur + 1, allImages.length - 1)
      : (e.key === 'ArrowUp' || e.key === 'ArrowLeft')
        ? Math.max(cur - 1, 0)
        : null;
    if (next !== null)
      dvScroll.querySelectorAll('.dv-img-item')[next]
        ?.scrollIntoView({ behavior: 'smooth', block: 'center' });
  });
}

/* ── Boot ───────────────────────────────────────────── */
buildScatter();
buildCarousel();
initParallax();
bindEvents();
