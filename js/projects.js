'use strict';

/* ═══════════════════════════════════════════
   SERIES DATA
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
  {
    id: 'islou', name: 'Intellectual Slouch', dir: 'Intellectual Slouch',
    images: [
      'Intellectual Slouch (1).jpeg', 'Intellectual Slouch (2).jpeg', 'Intellectual Slouch (3).jpeg',
      'Intellectual Slouch (4).jpeg', 'Intellectual Slouch (5).jpeg', 'Intellectual Slouch (6).jpeg',
      'Intellectual Slouch (7).jpeg',
      'Intellectual Slouch (1).png',  'Intellectual Slouch (2).png',  'Intellectual Slouch (3).png',
      'Intellectual Slouch (4).png',  'Intellectual Slouch (5).png',  'Intellectual Slouch (6).png',
      'Intellectual Slouch (7).png',  'Intellectual Slouch (8).png',  'Intellectual Slouch (9).png',
      'Intellectual Slouch (10).png',
    ],
  },
];

/* ═══════════════════════════════════════════
   BUILD DOM
   ═══════════════════════════════════════════ */
const sidebar   = document.getElementById('projSidebar');
const list      = document.getElementById('projList');
const listItems = [];
const sideItems = [];

SERIES.forEach((series, idx) => {
  /* sidebar button */
  const sBtn = document.createElement('button');
  sBtn.className   = 'proj-sidebar__item';
  sBtn.type        = 'button';
  sBtn.textContent = series.name;
  sidebar.appendChild(sBtn);
  sideItems.push(sBtn);

  /* list item */
  const item = document.createElement('div');
  item.className = 'proj-item';

  const cover = document.createElement('div');
  cover.className = 'proj-item__cover';

  const img = document.createElement('img');
  img.src     = series.dir + '/' + series.images[0];
  img.alt     = series.name;
  img.loading = idx === 0 ? 'eager' : 'lazy';

  const nameEl = document.createElement('p');
  nameEl.className   = 'proj-item__name';
  nameEl.textContent = series.name;

  cover.appendChild(img);
  item.appendChild(cover);
  item.appendChild(nameEl);
  list.appendChild(item);
  listItems.push(item);

  /* click → detail page */
  const goDetail = () => {
    window.location.href = 'project-detail.html?series=' + series.id;
  };
  cover.addEventListener('click', goDetail);
  nameEl.addEventListener('click', goDetail);

  /* sidebar click → scroll to item */
  sBtn.addEventListener('click', () => {
    item.scrollIntoView({ behavior: 'smooth', block: 'center' });
  });
});

/* ═══════════════════════════════════════════
   SCROLL-BASED ACTIVE HIGHLIGHT
   Whichever item's center is closest to the
   viewport center becomes active.
   ═══════════════════════════════════════════ */
function updateActive() {
  const mid = window.innerHeight / 2;
  let activeIdx = 0;
  let minDist   = Infinity;

  listItems.forEach((el, i) => {
    const r    = el.getBoundingClientRect();
    const dist = Math.abs(r.top + r.height / 2 - mid);
    if (dist < minDist) { minDist = dist; activeIdx = i; }
  });

  sideItems.forEach((s, i) => s.classList.toggle('is-active', i === activeIdx));
}

window.addEventListener('scroll', updateActive, { passive: true });
updateActive();
