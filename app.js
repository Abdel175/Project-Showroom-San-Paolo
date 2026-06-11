(function () {
  'use strict';

  const BASE_IMAGE = 'assets/hero/san-paolo-facade.jpg';
  const HOVER_CLOSE_DELAY = 150;
  const LIGHTBOX_AUTOPLAY_MS = 4000;

  const EDIT_HOTSPOTS =
    new URLSearchParams(location.search).get('edit-hotspots') === '1' ||
    window.__EDIT_HOTSPOTS__ === true;

  /* ── Hotspot rectangles (% of floor-plan image) — edit here or ?edit-hotspots=1 ── */
  const HOTSPOT_COORDS = {
    'cipriani-wine-spirits': { left: 9,  top: 6,  width: 24, height: 17 },
    'cipriani-fine-dining':  { left: 31, top: 5,  width: 22, height: 18 },
    'cipriani-bar-lounge':   { left: 53, top: 6,  width: 28, height: 17 },
    'dior':                  { left: 10, top: 33, width: 22, height: 19 },
    'zegna-21':              { left: 33, top: 32, width: 20, height: 20 },
    'taschen':               { left: 54, top: 33, width: 30, height: 20 },
    'zegna-20a':             { left: 8,  top: 59, width: 22, height: 18 },
    'zegna-20b':             { left: 27, top: 58, width: 24, height: 19 },
    'barts-bar':             { left: 53, top: 60, width: 30, height: 9 },
    'barts-cowork':          { left: 53, top: 69, width: 28, height: 9 }
  };

  const UNIVERSE_ORDER = ['gastronomia', 'moda', 'cultura', 'casabarts'];

  const UNIVERSES = {
    gastronomia: 'Gastronomia',
    moda: 'Moda',
    cultura: 'Cultura',
    casabarts: 'Casa Barts'
  };

  const SPACES = {
    'cipriani-fine-dining': {
      name: 'Cipriani',
      category: 'Fine Dining',
      universe: 'gastronomia',
      description: 'Gastronomia italiana de excelência com vista para o skyline de Faria Lima.',
      photos: [
        'assets/zones/cipriani-1.jpg',
        'assets/zones/cipriani-2.jpg',
        'assets/zones/cipriani-3.jpg'
      ],
      color: '#E8A0B0'
    },
    'cipriani-bar-lounge': {
      name: 'Cipriani',
      category: 'Bar & Lounge',
      universe: 'gastronomia',
      description: 'Coquetéis autorais e lounge intimista com atmosfera de clube privado.',
      photos: [
        'assets/zones/cipriani-east-1.jpg',
        'assets/zones/cipriani-east-2.jpg',
        'assets/zones/cipriani-east-3.jpg'
      ],
      color: '#E8A0B0'
    },
    'cipriani-wine-spirits': {
      name: 'Cipriani',
      category: 'Wine & Spirits',
      universe: 'gastronomia',
      description: 'Rótulos raros e destilados premium — a ala enológica no topo da torre.',
      photos: [
        'assets/zones/cipriani-west-1.jpg',
        'assets/zones/cipriani-west-2.jpg',
        'assets/zones/cipriani-west-3.jpg'
      ],
      color: '#E8A0B0'
    },
    dior: {
      name: 'Dior',
      category: 'Maison de Mode',
      universe: 'moda',
      description: 'Alta costura, vitrines e experiências exclusivas para membros.',
      photos: [
        'assets/zones/dior-1.jpg',
        'assets/zones/dior-2.jpg',
        'assets/zones/dior-3.jpg',
        'assets/zones/dior-4.jpg'
      ],
      color: '#E8D48A'
    },
    'zegna-21': {
      name: 'Zegna',
      category: 'Luxury Lounge',
      universe: 'moda',
      description: 'Bebidas finas e jantar privativo no coração do San Paolo.',
      photos: [
        'assets/zones/zegna-21-1.jpg',
        'assets/zones/zegna-21-2.jpg',
        'assets/zones/zegna-21-3.jpg'
      ],
      color: '#5BA8A8'
    },
    taschen: {
      name: 'Taschen',
      category: 'Bookshop & Gallery',
      universe: 'cultura',
      description: 'Edições raras, arte contemporânea e curadoria editorial.',
      photos: [
        'assets/zones/taschen-1.jpg',
        'assets/zones/taschen-2.jpg',
        'assets/zones/taschen-3.jpg',
        'assets/zones/taschen-4.jpg'
      ],
      color: '#4A7FC4'
    },
    'zegna-20a': {
      name: 'Zegna',
      category: 'Workspace Premium',
      universe: 'moda',
      description: 'Reuniões com acabamentos em madeira nobre e couro.',
      photos: [
        'assets/zones/zegna-20a-1.jpg',
        'assets/zones/zegna-20a-2.jpg',
        'assets/zones/zegna-20a-3.jpg'
      ],
      color: '#8B6914'
    },
    'zegna-20b': {
      name: 'Zegna',
      category: 'Living & Showroom',
      universe: 'moda',
      description: 'Showroom residencial com curadoria de tecidos e alfaiataria.',
      photos: [
        'assets/zones/zegna-20b-1.jpg',
        'assets/zones/zegna-20b-2.jpg',
        'assets/zones/zegna-20b-3.jpg'
      ],
      color: '#D4843A'
    },
    'barts-bar': {
      name: 'Bar & Clube Lounge',
      category: 'Âncora Social',
      universe: 'casabarts',
      description: 'Cocktails autorais e o ponto de encontro da Casa Barts.',
      photos: [
        'assets/zones/barts-bar-1.jpg',
        'assets/zones/barts-bar-2.jpg',
        'assets/zones/barts-bar-3.jpg',
        'assets/zones/barts-bar-4.jpg'
      ],
      color: '#D946A8'
    },
    'barts-cowork': {
      name: 'Coworking',
      category: 'Work & Create',
      universe: 'casabarts',
      description: 'Coworking premium com salas privadas para membros.',
      photos: [
        'assets/zones/barts-cowork-1.jpg',
        'assets/zones/barts-cowork-2.jpg',
        'assets/zones/barts-cowork-3.jpg',
        'assets/zones/barts-cowork-4.jpg'
      ],
      color: '#D946A8'
    }
  };

  const SPACE_KEYS = Object.keys(SPACES);
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const state = {
    hoverId: null,
    lightboxId: null,
    slideIndex: 0,
    hoverInside: false
  };

  let $canvasActive;
  let $canvasImg;
  let $glassIdle;
  let spaceRows = {};
  let hotspotEls = {};
  let hoverCloseTimer = null;
  let displayedSpaceId = null;
  let lightboxTimer = null;
  let lightboxTrigger = null;
  let touchStartX = 0;
  let touchStartY = 0;

  let $lightbox;
  let $lightboxBackdrop;
  let $lightboxClose;
  let $lightboxSlides;
  let $lightboxDots;
  let $lightboxPrev;
  let $lightboxNext;
  let $lightboxTitle;
  let $lightboxCategory;
  let $lightboxLive;

  function init() {
    cacheRefs();
    buildSpaceNav();
    buildFloorPlanHotspots();
    bindHoverZones();
    bindLightbox();
    bindKeyboard();
    blockScroll();
    prefetchHero();
    showSpace(null);
    updateSelectionStates();

    if (EDIT_HOTSPOTS) {
      document.body.classList.add('is-edit-hotspots');
      initEditMode();
    }
  }

  const BRAND_NAMES = new Set(['Cipriani', 'Dior', 'Zegna', 'Taschen']);

  function getSpaceLabels(space) {
    if (BRAND_NAMES.has(space.name)) {
      return { descriptor: space.category, brand: space.name };
    }
    return { descriptor: space.name, brand: space.category };
  }

  function cacheRefs() {
    $canvasActive = document.getElementById('canvas-active');
    $canvasImg = document.getElementById('canvas-img');
    $glassIdle = document.getElementById('glass-idle');

    $lightbox = document.getElementById('lightbox');
    $lightboxBackdrop = document.getElementById('lightbox-backdrop');
    $lightboxClose = document.getElementById('lightbox-close');
    $lightboxSlides = document.getElementById('lightbox-slides');
    $lightboxDots = document.getElementById('lightbox-dots');
    $lightboxPrev = document.getElementById('lightbox-prev');
    $lightboxNext = document.getElementById('lightbox-next');
    $lightboxTitle = document.getElementById('lightbox-title');
    $lightboxCategory = document.getElementById('lightbox-category');
    $lightboxLive = document.getElementById('lightbox-live');
  }

  function getSpace(id) {
    return id ? SPACES[id] : null;
  }

  function enterHover(id) {
    if (hoverCloseTimer) {
      clearTimeout(hoverCloseTimer);
      hoverCloseTimer = null;
    }
    state.hoverInside = true;
    if (state.hoverId === id) return;
    state.hoverId = id;
    showSpace(id);
    updateSelectionStates();
  }

  function scheduleHoverClose() {
    if (hoverCloseTimer) clearTimeout(hoverCloseTimer);
    hoverCloseTimer = setTimeout(() => {
      hoverCloseTimer = null;
      state.hoverInside = false;
      state.hoverId = null;
      showSpace(null);
      updateSelectionStates();
    }, HOVER_CLOSE_DELAY);
  }

  function bindHoverZones() {
    const nav = document.getElementById('space-nav');
    nav?.addEventListener('mouseenter', () => {
      if (hoverCloseTimer) {
        clearTimeout(hoverCloseTimer);
        hoverCloseTimer = null;
      }
      state.hoverInside = true;
    });
    nav?.addEventListener('mouseleave', scheduleHoverClose);
  }

  function openLightbox(id, trigger) {
    const space = getSpace(id);
    if (!space || !$lightbox) return;

    lightboxTrigger = trigger || document.activeElement;
    state.lightboxId = id;
    state.slideIndex = 0;

    $lightboxTitle.textContent = space.name;
    $lightboxCategory.textContent = space.category;

    const photos = space.photos.slice(0, 5);
    $lightboxSlides.innerHTML = '';
    $lightboxDots.innerHTML = '';

    photos.forEach((src, i) => {
      const slide = document.createElement('div');
      slide.className = 'lightbox-slide' + (i === 0 ? ' is-active' : '');
      const img = document.createElement('img');
      img.alt = `${space.name} — foto ${i + 1}`;
      if (i <= 1) {
        img.src = src;
      } else {
        img.dataset.src = src;
        img.loading = 'lazy';
      }
      slide.appendChild(img);
      $lightboxSlides.appendChild(slide);

      const dot = document.createElement('button');
      dot.type = 'button';
      dot.className = 'lightbox-dot' + (i === 0 ? ' is-active' : '');
      dot.setAttribute('aria-label', `Foto ${i + 1} de ${photos.length}`);
      dot.addEventListener('click', () => goToSlide(i));
      $lightboxDots.appendChild(dot);
    });

    $lightbox.hidden = false;
    document.body.classList.add('lightbox-open');
    $lightboxClose.focus();
    preloadAdjacentSlides();
    startLightboxAutoplay();
    announceSlide();
  }

  function closeLightbox() {
    if (!$lightbox || $lightbox.hidden) return;

    stopLightboxAutoplay();
    $lightbox.hidden = true;
    document.body.classList.remove('lightbox-open');
    state.lightboxId = null;
    state.slideIndex = 0;

    if (lightboxTrigger && typeof lightboxTrigger.focus === 'function') {
      lightboxTrigger.focus();
    }
    lightboxTrigger = null;
  }

  function goToSlide(index) {
    const space = getSpace(state.lightboxId);
    if (!space || !$lightboxSlides) return;

    const photos = space.photos.slice(0, 5);
    const count = photos.length;
    if (!count) return;

    state.slideIndex = ((index % count) + count) % count;

    const slides = $lightboxSlides.querySelectorAll('.lightbox-slide');
    const dots = $lightboxDots.querySelectorAll('.lightbox-dot');

    slides.forEach((slide, i) => {
      slide.classList.toggle('is-active', i === state.slideIndex);
      const img = slide.querySelector('img');
      if (img && img.dataset.src && !img.src) {
        img.src = img.dataset.src;
      }
    });

    dots.forEach((dot, i) => {
      dot.classList.toggle('is-active', i === state.slideIndex);
    });

    preloadAdjacentSlides();
    announceSlide();
  }

  function nextSlide() {
    goToSlide(state.slideIndex + 1);
  }

  function prevSlide() {
    goToSlide(state.slideIndex - 1);
  }

  function preloadAdjacentSlides() {
    const space = getSpace(state.lightboxId);
    if (!space) return;

    const photos = space.photos.slice(0, 5);
    const next = (state.slideIndex + 1) % photos.length;
    const prev = (state.slideIndex - 1 + photos.length) % photos.length;

    [photos[next], photos[prev]].forEach(src => {
      const img = new Image();
      img.src = src;
    });
  }

  function startLightboxAutoplay() {
    stopLightboxAutoplay();
    if (prefersReducedMotion) return;

    const space = getSpace(state.lightboxId);
    if (!space || space.photos.length < 2) return;

    lightboxTimer = setInterval(nextSlide, LIGHTBOX_AUTOPLAY_MS);
  }

  function stopLightboxAutoplay() {
    if (lightboxTimer) {
      clearInterval(lightboxTimer);
      lightboxTimer = null;
    }
  }

  function announceSlide() {
    const space = getSpace(state.lightboxId);
    if (!space || !$lightboxLive) return;
    const total = Math.min(space.photos.length, 5);
    $lightboxLive.textContent = `${space.name}, foto ${state.slideIndex + 1} de ${total}`;
  }

  function bindLightbox() {
    $lightboxClose?.addEventListener('click', closeLightbox);
    $lightboxBackdrop?.addEventListener('click', closeLightbox);
    $lightboxPrev?.addEventListener('click', () => {
      stopLightboxAutoplay();
      prevSlide();
      startLightboxAutoplay();
    });
    $lightboxNext?.addEventListener('click', () => {
      stopLightboxAutoplay();
      nextSlide();
      startLightboxAutoplay();
    });

    const carousel = document.getElementById('lightbox-carousel');

    carousel?.addEventListener('touchstart', e => {
      touchStartX = e.changedTouches[0].clientX;
      touchStartY = e.changedTouches[0].clientY;
    }, { passive: true });

    carousel?.addEventListener('touchend', e => {
      const dx = e.changedTouches[0].clientX - touchStartX;
      const dy = e.changedTouches[0].clientY - touchStartY;

      if (Math.abs(dx) < 40 || Math.abs(dx) < Math.abs(dy)) return;

      stopLightboxAutoplay();
      if (dx < 0) nextSlide();
      else prevSlide();
      startLightboxAutoplay();
    }, { passive: true });

    $lightbox?.addEventListener('keydown', trapLightboxFocus);
  }

  function trapLightboxFocus(e) {
    if ($lightbox?.hidden) return;

    if (e.key === 'Escape') {
      e.preventDefault();
      closeLightbox();
      return;
    }

    if (e.key === 'ArrowRight') {
      e.preventDefault();
      stopLightboxAutoplay();
      nextSlide();
      startLightboxAutoplay();
      return;
    }

    if (e.key === 'ArrowLeft') {
      e.preventDefault();
      stopLightboxAutoplay();
      prevSlide();
      startLightboxAutoplay();
      return;
    }

    if (e.key !== 'Tab') return;

    const focusable = $lightbox.querySelectorAll(
      'button:not([disabled]), [href], [tabindex]:not([tabindex="-1"])'
    );
    const items = Array.from(focusable).filter(el => el.offsetParent !== null);
    if (!items.length) return;

    const first = items[0];
    const last = items[items.length - 1];

    if (e.shiftKey && document.activeElement === first) {
      e.preventDefault();
      last.focus();
    } else if (!e.shiftKey && document.activeElement === last) {
      e.preventDefault();
      first.focus();
    }
  }

  function buildSpaceNav() {
    const nav = document.getElementById('space-nav');
    if (!nav) return;

    UNIVERSE_ORDER.forEach(universeKey => {
      const keys = SPACE_KEYS.filter(id => SPACES[id].universe === universeKey);
      if (!keys.length) return;

      const group = document.createElement('div');
      group.className = 'space-group';
      group.dataset.universe = universeKey;

      const label = document.createElement('p');
      label.className = 'space-category';
      label.textContent = UNIVERSES[universeKey];
      group.appendChild(label);

      keys.forEach(id => {
        const space = SPACES[id];
        const labels = getSpaceLabels(space);
        const row = document.createElement('div');
        row.className = 'space-row hover-zone';
        row.dataset.space = id;

        const text = document.createElement('div');
        text.className = 'space-row__text';

        const descriptor = document.createElement('span');
        descriptor.className = 'space-type';
        descriptor.textContent = labels.descriptor;

        const brand = document.createElement('span');
        brand.className = 'space-brand';
        brand.textContent = labels.brand;

        const desc = document.createElement('p');
        desc.className = 'space-desc';
        desc.textContent = space.description;

        row.setAttribute('role', 'button');
        row.tabIndex = 0;
        row.setAttribute('aria-label', `${labels.descriptor}, ${labels.brand}`);

        row.addEventListener('mouseenter', () => enterHover(id));
        row.addEventListener('mouseleave', scheduleHoverClose);
        row.addEventListener('click', () => openLightbox(id, row));
        row.addEventListener('keydown', e => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            openLightbox(id, row);
          }
        });

        text.appendChild(descriptor);
        text.appendChild(brand);
        text.appendChild(desc);
        row.appendChild(text);
        group.appendChild(row);
        spaceRows[id] = row;
      });

      nav.appendChild(group);
    });
  }

  function buildFloorPlanHotspots() {
    const container = document.getElementById('floor-plan-hotspots');
    if (!container) return;

    SPACE_KEYS.forEach(id => {
      const space = SPACES[id];
      const coords = HOTSPOT_COORDS[id];
      if (!coords) return;

      const el = document.createElement('button');
      el.type = 'button';
      el.className = 'plan-hotspot hover-zone';
      el.dataset.space = id;
      const labels = getSpaceLabels(space);
      el.setAttribute('aria-label', `${labels.descriptor}, ${labels.brand}`);
      el.style.setProperty('--zone-color', space.color);
      el.style.left = coords.left + '%';
      el.style.top = coords.top + '%';
      el.style.width = coords.width + '%';
      el.style.height = coords.height + '%';

      if (EDIT_HOTSPOTS) {
        const label = document.createElement('span');
        label.className = 'hotspot-edit-label';
        label.textContent = id;
        el.appendChild(label);
      }

      el.addEventListener('mouseenter', () => enterHover(id));
      el.addEventListener('mouseleave', scheduleHoverClose);
      el.addEventListener('click', () => openLightbox(id, el));
      el.addEventListener('keydown', e => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          openLightbox(id, el);
        }
      });

      container.appendChild(el);
      hotspotEls[id] = el;
    });
  }

  function initEditMode() {
    const panel = document.createElement('div');
    panel.className = 'hotspot-edit-panel';
    panel.innerHTML =
      '<strong>Modo edição de hotspots</strong>' +
      '<p>Arraste os retângulos ou use as setas para ajustar (Shift = 1%). Copie as coords do console.</p>';
    document.body.appendChild(panel);

    Object.entries(hotspotEls).forEach(([id, el]) => {
      makeHotspotDraggable(id, el);
    });

    window.addEventListener('keydown', e => {
      if (!EDIT_HOTSPOTS) return;
      const active = document.activeElement;
      if (!active?.classList.contains('plan-hotspot')) return;

      const id = active.dataset.space;
      const step = e.shiftKey ? 1 : 0.5;
      const coords = HOTSPOT_COORDS[id];
      if (!coords) return;

      if (e.key === 'ArrowLeft') { coords.left = Math.max(0, coords.left - step); e.preventDefault(); }
      if (e.key === 'ArrowRight') { coords.left = Math.min(100 - coords.width, coords.left + step); e.preventDefault(); }
      if (e.key === 'ArrowUp') { coords.top = Math.max(0, coords.top - step); e.preventDefault(); }
      if (e.key === 'ArrowDown') { coords.top = Math.min(100 - coords.height, coords.top + step); e.preventDefault(); }

      if (['ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown'].includes(e.key)) {
        applyHotspotCoords(active, coords);
        console.log(`'${id}': { left: ${coords.left}, top: ${coords.top}, width: ${coords.width}, height: ${coords.height} },`);
      }
    });
  }

  function applyHotspotCoords(el, coords) {
    el.style.left = coords.left + '%';
    el.style.top = coords.top + '%';
    el.style.width = coords.width + '%';
    el.style.height = coords.height + '%';
  }

  function makeHotspotDraggable(id, el) {
    let dragging = false;
    let startX;
    let startY;
    let startCoords;

    el.addEventListener('mousedown', e => {
      if (!EDIT_HOTSPOTS) return;
      e.preventDefault();
      dragging = true;
      startX = e.clientX;
      startY = e.clientY;
      startCoords = { ...HOTSPOT_COORDS[id] };
      el.focus();
    });

    window.addEventListener('mousemove', e => {
      if (!dragging) return;
      const parent = el.parentElement;
      const rect = parent.getBoundingClientRect();
      const dx = ((e.clientX - startX) / rect.width) * 100;
      const dy = ((e.clientY - startY) / rect.height) * 100;

      const coords = HOTSPOT_COORDS[id];
      coords.left = Math.max(0, Math.min(100 - coords.width, startCoords.left + dx));
      coords.top = Math.max(0, Math.min(100 - coords.height, startCoords.top + dy));
      applyHotspotCoords(el, coords);
    });

    window.addEventListener('mouseup', () => {
      if (!dragging) return;
      dragging = false;
      const c = HOTSPOT_COORDS[id];
      console.log(`'${id}': { left: ${c.left}, top: ${c.top}, width: ${c.width}, height: ${c.height} },`);
    });
  }

  function showSpace(id) {
    const space = getSpace(id);

    if (!space) {
      $canvasActive.classList.remove('is-visible');
      $glassIdle.classList.remove('is-hidden');
      if ($canvasImg) {
        delete $canvasImg.dataset.src;
        delete $canvasImg.dataset.spaceId;
      }
      displayedSpaceId = null;
      return;
    }

    const spaceChanged = displayedSpaceId !== id;
    if (spaceChanged) {
      displayedSpaceId = id;
    }

    $glassIdle.classList.add('is-hidden');

    setCanvasImage(space.photos[0], id);
    $canvasActive.classList.add('is-visible');
  }

  function setCanvasImage(src, spaceId) {
    if (!$canvasImg || !src) return;
    if ($canvasImg.dataset.src === src && $canvasImg.dataset.spaceId === spaceId) return;

    $canvasImg.classList.add('is-fading');
    const img = new Image();
    img.onload = () => {
      $canvasImg.src = src;
      $canvasImg.dataset.src = src;
      $canvasImg.dataset.spaceId = spaceId;
      $canvasImg.alt = getSpace(spaceId)?.name || '';
      requestAnimationFrame(() => {
        $canvasImg.classList.remove('is-fading');
      });
    };
    img.onerror = () => {
      $canvasImg.classList.remove('is-fading');
    };
    img.src = src;
  }

  function updateSelectionStates() {
    const activeId = state.hoverId;

    Object.entries(spaceRows).forEach(([id, row]) => {
      const space = getSpace(id);
      const brand = row.querySelector('.space-brand');
      const isActive = id === activeId;

      row.classList.toggle('is-active', isActive);
      brand?.classList.toggle('is-selected', isActive);

      if (isActive && space) {
        row.style.setProperty('--zone-color', space.color);
        brand?.style.setProperty('--zone-color', space.color);
        row.scrollIntoView({
          block: 'nearest',
          behavior: prefersReducedMotion ? 'auto' : 'smooth'
        });
      } else {
        row.style.removeProperty('--zone-color');
        brand?.style.removeProperty('--zone-color');
      }
    });

    Object.entries(hotspotEls).forEach(([id, el]) => {
      const isLit = id === activeId;
      el.classList.toggle('is-lit', isLit);
    });
  }

  function bindKeyboard() {
    document.addEventListener('keydown', e => {
      if (!$lightbox?.hidden) return;

      if (e.key === 'Escape') {
        state.hoverId = null;
        showSpace(null);
        updateSelectionStates();
      }
    });
  }

  function blockScroll() {
    document.body.style.overflow = 'hidden';
    window.addEventListener('wheel', e => {
      if (!document.body.classList.contains('lightbox-open')) {
        e.preventDefault();
      }
    }, { passive: false });
  }

  function prefetchHero() {
    const link = document.createElement('link');
    link.rel = 'prefetch';
    link.href = BASE_IMAGE;
    link.as = 'image';
    document.head.appendChild(link);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
