(function () {
  'use strict';

  const BASE_IMAGE = 'assets/hero/san-paolo-facade.jpg';

  const UNIVERSES = {
    gastronomia: 'Gastronomia',
    moda: 'Moda',
    cultura: 'Cultura',
    barts: "Bart's & Co"
  };

  const FLOORS = {
    20: '20º',
    21: '21º',
    22: '22º'
  };

  const ZONES = [
    {
      id: 'cipriani-main',
      name: 'Cipriani',
      floor: 22,
      universe: 'gastronomia',
      tag: 'Fine Dining',
      desc: 'Gastronomia italiana de excelência com vista para o skyline de Faria Lima.',
      images: ['assets/zones/cipriani-1.jpg', 'assets/zones/cipriani-2.jpg', 'assets/zones/cipriani-3.jpg']
    },
    {
      id: 'cipriani-east',
      name: 'Cipriani · East',
      floor: 22,
      universe: 'gastronomia',
      tag: 'Bar & Lounge',
      desc: 'Coquetéis autorais e lounge intimista com atmosfera de clube privado.',
      images: ['assets/zones/cipriani-east-1.jpg', 'assets/zones/cipriani-east-2.jpg', 'assets/zones/cipriani-east-3.jpg']
    },
    {
      id: 'cipriani-west',
      name: 'Cipriani · West',
      floor: 22,
      universe: 'gastronomia',
      tag: 'Wine & Spirits',
      desc: 'Rótulos raros e destilados premium — a ala enológica no topo da torre.',
      images: ['assets/zones/cipriani-west-1.jpg', 'assets/zones/cipriani-west-2.jpg', 'assets/zones/cipriani-west-3.jpg']
    },
    {
      id: 'dior',
      name: 'Dior',
      floor: 21,
      universe: 'moda',
      tag: 'Maison de Mode',
      desc: 'Alta costura, vitrines e experiências exclusivas para membros.',
      images: ['assets/zones/dior-1.jpg', 'assets/zones/dior-2.jpg', 'assets/zones/dior-3.jpg', 'assets/zones/dior-4.jpg']
    },
    {
      id: 'zegna-21',
      name: 'Zegna',
      floor: 21,
      universe: 'moda',
      tag: 'Luxury Lounge',
      desc: 'Bebidas finas e jantar privativo no coração do triplex.',
      images: ['assets/zones/zegna-21-1.jpg', 'assets/zones/zegna-21-2.jpg', 'assets/zones/zegna-21-3.jpg']
    },
    {
      id: 'taschen',
      name: 'Taschen',
      floor: 21,
      universe: 'cultura',
      tag: 'Bookshop & Gallery',
      desc: 'Edições raras, arte contemporânea e curadoria editorial.',
      images: ['assets/zones/taschen-1.jpg', 'assets/zones/taschen-2.jpg', 'assets/zones/taschen-3.jpg', 'assets/zones/taschen-4.jpg']
    },
    {
      id: 'zegna-20a',
      name: 'Zegna',
      floor: 20,
      universe: 'moda',
      tag: 'Workspace Premium',
      desc: 'Reuniões com acabamentos em madeira nobre e couro.',
      images: ['assets/zones/zegna-20a-1.jpg', 'assets/zones/zegna-20a-2.jpg', 'assets/zones/zegna-20a-3.jpg']
    },
    {
      id: 'zegna-20b',
      name: 'Zegna',
      floor: 20,
      universe: 'moda',
      tag: 'Living & Showroom',
      desc: 'Showroom residencial com curadoria de tecidos e alfaiataria.',
      images: ['assets/zones/zegna-20b-1.jpg', 'assets/zones/zegna-20b-2.jpg', 'assets/zones/zegna-20b-3.jpg']
    },
    {
      id: 'barts-bar',
      name: "Bart's · Bar",
      floor: 20,
      universe: 'barts',
      tag: 'Âncora Social',
      desc: 'Cocktails autorais e o ponto de encontro do triplex.',
      images: ['assets/zones/barts-bar-1.jpg', 'assets/zones/barts-bar-2.jpg', 'assets/zones/barts-bar-3.jpg', 'assets/zones/barts-bar-4.jpg']
    },
    {
      id: 'barts-cowork',
      name: "Bart's · Coworking",
      floor: 20,
      universe: 'barts',
      tag: 'Work & Create',
      desc: 'Coworking premium com salas privadas para membros.',
      images: ['assets/zones/barts-cowork-1.jpg', 'assets/zones/barts-cowork-2.jpg', 'assets/zones/barts-cowork-3.jpg', 'assets/zones/barts-cowork-4.jpg']
    }
  ];

  const state = {
    previewId: null,
    lockedId: null,
    imageIndex: 0
  };

  let $canvasActive;
  let $canvasImg;
  let $glassCaption;
  let $glassIdle;
  let $captionUniverse;
  let $captionName;
  let $captionTag;
  let $captionDesc;
  let nameButtons = {};
  let imageTimer = null;

  function init() {
    cacheRefs();
    buildSpaceNav();
    bindKeyboard();
    blockScroll();
    prefetchImages();
    showZone(null);
  }

  function cacheRefs() {
    $canvasActive = document.getElementById('canvas-active');
    $canvasImg = document.getElementById('canvas-img');
    $glassCaption = document.getElementById('glass-caption');
    $glassIdle = document.getElementById('glass-idle');
    $captionUniverse = document.getElementById('caption-universe');
    $captionName = document.getElementById('caption-name');
    $captionTag = document.getElementById('caption-tag');
    $captionDesc = document.getElementById('caption-desc');
  }

  function buildSpaceNav() {
    const nav = document.getElementById('space-nav');
    if (!nav) return;

    [22, 21, 20].forEach(floor => {
      const group = document.createElement('div');
      group.className = 'space-group';

      const label = document.createElement('p');
      label.className = 'space-floor';
      label.textContent = FLOORS[floor];
      group.appendChild(label);

      ZONES.filter(z => z.floor === floor).forEach(zone => {
        const btn = document.createElement('button');
        btn.type = 'button';
        btn.className = 'space-name';
        btn.textContent = zone.name;
        btn.dataset.zone = zone.id;
        btn.setAttribute('aria-label', `${zone.name}, ${zone.tag}`);

        btn.addEventListener('mouseenter', () => onHover(zone.id));
        btn.addEventListener('mouseleave', onLeave);
        btn.addEventListener('focus', () => onHover(zone.id));
        btn.addEventListener('blur', onLeave);
        btn.addEventListener('click', () => onClick(zone.id));

        group.appendChild(btn);
        nameButtons[zone.id] = btn;
      });

      nav.appendChild(group);
    });
  }

  function onHover(id) {
    state.previewId = id;
    showZone(getActiveId());
    updateNameStates();
  }

  function onLeave() {
    state.previewId = null;
    showZone(getActiveId());
    updateNameStates();
  }

  function onClick(id) {
    state.lockedId = state.lockedId === id ? null : id;
    showZone(getActiveId());
    updateNameStates();
  }

  function getActiveId() {
    return state.lockedId || state.previewId || null;
  }

  function showZone(id) {
    const zone = id ? ZONES.find(z => z.id === id) : null;

    if (!zone) {
      $canvasActive.classList.remove('is-visible');
      $glassCaption.hidden = true;
      $glassIdle.classList.remove('is-hidden');
      stopSlideshow();
      state.imageIndex = 0;
      if ($canvasImg) delete $canvasImg.dataset.src;
      return;
    }

    if (state.lockedId !== id) {
      state.imageIndex = 0;
    }

    $glassIdle.classList.add('is-hidden');
    $glassCaption.hidden = false;

    $captionUniverse.textContent = UNIVERSES[zone.universe];
    $captionName.textContent = zone.name;
    $captionTag.textContent = `${zone.tag} · ${FLOORS[zone.floor]} Andar`;
    $captionDesc.textContent = zone.desc;

    setCanvasImage(zone.images[state.imageIndex % zone.images.length]);
    $canvasActive.classList.add('is-visible');

    if (state.lockedId === id) {
      startSlideshow(zone);
    } else {
      stopSlideshow();
      state.imageIndex = 0;
    }
  }

  function setCanvasImage(src) {
    if (!$canvasImg || !src) return;
    if ($canvasImg.dataset.src === src) return;

    $canvasImg.classList.add('is-fading');
    const img = new Image();
    img.onload = () => {
      $canvasImg.src = src;
      $canvasImg.dataset.src = src;
      requestAnimationFrame(() => {
        $canvasImg.classList.remove('is-fading');
      });
    };
    img.src = src;
  }

  function startSlideshow(zone) {
    stopSlideshow();
    if (zone.images.length < 2) return;

    imageTimer = setInterval(() => {
      state.imageIndex = (state.imageIndex + 1) % zone.images.length;
      setCanvasImage(zone.images[state.imageIndex]);
    }, 5000);
  }

  function stopSlideshow() {
    if (imageTimer) {
      clearInterval(imageTimer);
      imageTimer = null;
    }
  }

  function updateNameStates() {
    const activeId = getActiveId();
    Object.entries(nameButtons).forEach(([id, btn]) => {
      btn.classList.toggle('is-active', id === state.lockedId);
      btn.classList.toggle('is-preview', id === state.previewId && id !== state.lockedId);
    });
  }

  function bindKeyboard() {
    document.addEventListener('keydown', e => {
      const ids = ZONES.map(z => z.id);
      const current = getActiveId();
      const idx = current ? ids.indexOf(current) : -1;

      if (e.key === 'ArrowDown' || e.key === 'ArrowRight') {
        e.preventDefault();
        const next = ids[(idx + 1) % ids.length];
        state.lockedId = next;
        state.previewId = null;
        state.imageIndex = 0;
        showZone(next);
        updateNameStates();
        nameButtons[next]?.focus();
      }

      if (e.key === 'ArrowUp' || e.key === 'ArrowLeft') {
        e.preventDefault();
        const prev = ids[(idx - 1 + ids.length) % ids.length];
        state.lockedId = prev;
        state.previewId = null;
        state.imageIndex = 0;
        showZone(prev);
        updateNameStates();
        nameButtons[prev]?.focus();
      }

      if (e.key === 'Escape') {
        state.lockedId = null;
        state.previewId = null;
        state.imageIndex = 0;
        showZone(null);
        updateNameStates();
      }
    });
  }

  function blockScroll() {
    document.body.style.overflow = 'hidden';
    window.addEventListener('wheel', e => e.preventDefault(), { passive: false });
  }

  function prefetchImages() {
    [BASE_IMAGE, ...ZONES.flatMap(z => z.images)].forEach(src => {
      const link = document.createElement('link');
      link.rel = 'prefetch';
      link.href = src;
      link.as = 'image';
      document.head.appendChild(link);
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
