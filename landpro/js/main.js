/* ═══════════════════════════════════════════════════════════════
   LANDPRO EXCAVATIONS — main.js
   ═══════════════════════════════════════════════════════════════ */
(() => {
  const root = document.documentElement;
  root.classList.add('js');

  const CONFIG = window.CONFIG || {};
  const PROJECTS = window.PROJECTS || [];
  const ES = window.ES || {};
  const EN = {};
  const LANG_KEY = 'landpro-lang';
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  let lang = 'en';

  const $ = (s, c = document) => c.querySelector(s);
  const $$ = (s, c = document) => [...c.querySelectorAll(s)];
  const pick = v => (v && typeof v === 'object' && !Array.isArray(v) ? (v[lang] ?? v.en) : v);
  const t = key => (lang === 'es' ? ES[key] ?? EN[key] : EN[key]) ?? '';

  /* ─────────────── i18n ─────────────── */
  const EN_FALLBACK = {
    'projects.view': 'View Project', 'pd.details': 'Details', 'pd.result': 'Final result', 'pd.gallery': 'Gallery',
    'form.ok': 'Thank you. We received your message and will be in touch shortly.',
    'form.err': 'Please add your name, email and phone.',
    'form.fail': 'Something went wrong. Please call us or try again.',
    'form.sending': 'Sending…', 'nav.menu': 'Menu', 'nav.close': 'Close',
  };
  function captureEnglish() {
    Object.assign(EN, EN_FALLBACK);
    $$('[data-i18n]').forEach(el => { if (!(el.dataset.i18n in EN) || EN_FALLBACK[el.dataset.i18n]) EN[el.dataset.i18n] = el.innerHTML; });
  }

  function setLang(next) {
    lang = next === 'es' ? 'es' : 'en';
    root.lang = lang;
    $$('[data-i18n]').forEach(el => {
      el.innerHTML = t(el.dataset.i18n);
      if (el.classList.contains('split')) splitText(el);
    });
    applyConfig();
    $$('.lang button').forEach(b => b.setAttribute('aria-pressed', String(b.dataset.lang === lang)));
    renderProjects();
    renderProjectPage();
    const status = $('#formStatus'); if (status) { status.textContent = ''; status.className = 'form-status'; }
    try { localStorage.setItem(LANG_KEY, lang); } catch (e) { /* storage unavailable */ }
  }

  function applyConfig() {
    $$('[data-cfg]').forEach(el => { const v = pick(CONFIG[el.dataset.cfg]); if (v != null) el.textContent = v; });
    $$('[data-cfg-href]').forEach(el => { const v = pick(CONFIG[el.dataset.cfgHref]); if (v) el.setAttribute('href', v); });
  }

  /* ─────────────── Split headings into words for the reveal ─────────────── */
  function splitText(el) {
    const wasIn = el.classList.contains('in');
    let i = 0;
    const walk = node => {
      [...node.childNodes].forEach(child => {
        if (child.nodeType === 3) {
          const frag = document.createDocumentFragment();
          child.textContent.split(/(\s+)/).forEach(part => {
            if (!part) return;
            if (/^\s+$/.test(part)) { frag.appendChild(document.createTextNode(' ')); return; }
            const w = document.createElement('span'); w.className = 'w';
            const inner = document.createElement('span'); inner.textContent = part; inner.style.setProperty('--i', i++);
            w.appendChild(inner); frag.appendChild(w);
          });
          child.replaceWith(frag);
        } else if (child.nodeType === 1 && child.tagName !== 'BR' && !child.classList.contains('w')) {
          walk(child);
        }
      });
    };
    walk(el);
    el.classList.add('ready');
    if (wasIn) el.classList.add('in');
  }

  /* ─────────────── Reveal on scroll ─────────────── */
  let io;
  function observe(els) {
    if (reduced || !('IntersectionObserver' in window)) { els.forEach(el => el.classList.add('in')); return; }
    if (!io) {
      io = new IntersectionObserver(entries => entries.forEach(e => {
        if (!e.isIntersecting) return;
        e.target.classList.add('in');
        io.unobserve(e.target);
      }), { threshold: 0.12, rootMargin: '0px 0px -8% 0px' });
    }
    els.forEach(el => { if (!el.classList.contains('in')) io.observe(el); });
  }
  const observeAll = () => observe($$('.reveal, .reveal-img, .split, .fade'));

  /* ─────────────── Navigation ─────────────── */
  function initNav() {
    const nav = $('#nav'); const btn = $('#menuBtn'); const links = $('#navLinks');
    if (!nav) return;
    let lastY = window.scrollY;
    const onScroll = () => {
      const y = window.scrollY;
      const threshold = window.innerHeight * 0.75;
      nav.classList.toggle('solid', y > threshold - 80);
      const goingDown = y > lastY && y > threshold;
      if (!nav.classList.contains('menu-open')) nav.classList.toggle('hidden', goingDown);
      lastY = y;
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });

    const setMenu = open => {
      nav.classList.toggle('menu-open', open);
      btn.setAttribute('aria-expanded', String(open));
      const label = btn.querySelector('.menu-label');
      if (label) { label.dataset.i18n = open ? 'nav.close' : 'nav.menu'; label.innerHTML = t(label.dataset.i18n); }
      document.body.style.overflow = open ? 'hidden' : '';
    };
    btn.addEventListener('click', () => setMenu(!nav.classList.contains('menu-open')));
    links.querySelectorAll('a').forEach(a => a.addEventListener('click', () => setMenu(false)));
    document.addEventListener('keydown', e => { if (e.key === 'Escape') setMenu(false); });
    window.addEventListener('resize', () => { if (window.innerWidth > 1024) setMenu(false); });

    // active section
    const anchors = $$('a[href^="#"]', links);
    const sections = anchors.map(a => $(a.getAttribute('href'))).filter(Boolean);
    if ('IntersectionObserver' in window && sections.length) {
      const spy = new IntersectionObserver(es => es.forEach(e => {
        if (e.isIntersecting) anchors.forEach(a => a.classList.toggle('active', a.getAttribute('href') === '#' + e.target.id));
      }), { rootMargin: '-45% 0px -50% 0px' });
      sections.forEach(s => spy.observe(s));
    }
  }

  /* ─────────────── Subtle parallax ─────────────── */
  function initParallax() {
    const items = $$('[data-parallax]');
    if (reduced || !items.length) return;
    let ticking = false;
    const update = () => {
      const vh = window.innerHeight;
      items.forEach(el => {
        const r = el.parentElement.getBoundingClientRect();
        if (r.bottom < -200 || r.top > vh + 200) return;
        const speed = parseFloat(el.dataset.parallax) || 0.1;
        const offset = (r.top + r.height / 2 - vh / 2) * -speed;
        el.style.transform = `translate3d(0, ${offset.toFixed(1)}px, 0)`;
      });
      ticking = false;
    };
    window.addEventListener('scroll', () => { if (!ticking) { requestAnimationFrame(update); ticking = true; } }, { passive: true });
    window.addEventListener('resize', update);
    update();
  }

  /* ─────────────── Projects grid (home) ─────────────── */
  function renderProjects() {
    const grid = $('#projectGrid');
    if (!grid) return;
    grid.innerHTML = PROJECTS.map(p => `
      <a class="proj" href="project.html?p=${p.slug}">
        <div class="media reveal-img"><img src="${p.hero}" alt="${p.name}" loading="lazy" /></div>
        <span class="proj-view">${t('projects.view')} →</span>
        <div class="proj-info">
          <span class="proj-name">${p.name}</span>
          <span class="proj-meta"><span>${pick(p.location)}</span><span>${pick(p.service)}</span></span>
        </div>
      </a>`).join('');
    observe($$('.reveal-img', grid));
  }

  /* ─────────────── Project detail page ─────────────── */
  function renderProjectPage() {
    if (!document.body.classList.contains('page-project')) return;
    const slug = new URLSearchParams(location.search).get('p');
    const idx = Math.max(0, PROJECTS.findIndex(p => p.slug === slug));
    const p = PROJECTS[idx];
    if (!p) return;
    const next = PROJECTS[(idx + 1) % PROJECTS.length];

    document.title = `${p.name} — LandPro Excavations`;
    const hero = $('#pdHeroImg'); hero.src = p.hero; hero.alt = p.name;
    $('#pdKicker').textContent = `${pick(p.location)} — ${pick(p.service)}`;
    const title = $('#pdTitle'); title.textContent = p.name; splitText(title);
    $('#pdLocation').textContent = pick(p.location);
    $('#pdService').textContent = pick(p.service);
    $('#pdSize').textContent = pick(p.size);
    $('#pdDuration').textContent = pick(p.duration);
    $('#pdYear').textContent = p.year;
    const lead = $('#pdLead'); lead.textContent = pick(p.lead); splitText(lead);
    $('#pdBody').textContent = pick(p.body);

    const g = p.gallery;
    const img = (src, cls = '') => `<div class="media reveal-img ${cls}"><img src="${src}" alt="${p.name}" loading="lazy" /></div>`;
    const cap = key => `<p class="label reveal pd-caption"><span class="label-num">—</span><span>${t(key)}</span></p>`;
    let html = '';
    if (g[0]) html += `<div class="pd-full wrap">${img(g[0])}</div>`;
    if (g[1] || g[2]) html += `<div class="wrap">${cap('pd.details')}<div class="pd-pair">${g[1] ? img(g[1]) : ''}${g[2] ? img(g[2]) : ''}</div></div>`;
    if (g[3] && g.length > 4) html += `<div class="wrap pd-single">${img(g[3])}</div>`;
    const last = g[g.length - 1];
    if (last && g.length > 3) html += `<div class="wrap">${cap('pd.result')}<div class="pd-full">${img(last)}</div></div>`;
    $('#pdGallery').innerHTML = html;

    $('#pdNext').href = `project.html?p=${next.slug}`;
    $('#pdNextImg').src = next.hero;
    $('#pdNextTitle').textContent = next.name;
    observeAll();
  }

  /* ─────────────── Testimonials ─────────────── */
  function initQuotes() {
    const stage = $('#quoteStage'); if (!stage) return;
    const quotes = $$('.quote', stage);
    let i = 0, timer;
    $('#qTotal').textContent = String(quotes.length).padStart(2, '0');
    const show = n => {
      i = (n + quotes.length) % quotes.length;
      quotes.forEach((q, k) => q.classList.toggle('is-active', k === i));
      $('#qIndex').textContent = String(i + 1).padStart(2, '0');
    };
    const restart = () => { clearInterval(timer); if (!reduced) timer = setInterval(() => show(i + 1), 7000); };
    $('#qPrev').addEventListener('click', () => { show(i - 1); restart(); });
    $('#qNext').addEventListener('click', () => { show(i + 1); restart(); });
    stage.addEventListener('mouseenter', () => clearInterval(timer));
    stage.addEventListener('mouseleave', restart);
    restart();
  }

  /* ─────────────── Inquiry form ───────────────
     Set action="https://formspree.io/f/XXXX" on #inquiry to receive emails. */
  function initForm() {
    const form = $('#inquiry'); if (!form) return;
    const status = $('#formStatus');
    const say = (key, cls = '') => { status.textContent = t(key); status.className = 'form-status ' + cls; };
    form.addEventListener('submit', async e => {
      e.preventDefault();
      let ok = true;
      $$('[required]', form).forEach(f => {
        const valid = f.value.trim() !== '' && f.checkValidity();
        f.classList.toggle('invalid', !valid);
        if (!valid) ok = false;
      });
      if (!ok) { say('form.err', 'err'); return; }
      const action = form.getAttribute('action');
      if (!action) { say('form.ok', 'ok'); form.reset(); return; }
      const btn = $('button[type=submit]', form); btn.disabled = true; say('form.sending');
      try {
        const res = await fetch(action, { method: 'POST', body: new FormData(form), headers: { Accept: 'application/json' } });
        if (!res.ok) throw new Error(res.status);
        say('form.ok', 'ok'); form.reset();
      } catch (err) { say('form.fail', 'err'); }
      finally { btn.disabled = false; }
    });
    $$('[required]', form).forEach(f => f.addEventListener('input', () => f.classList.remove('invalid')));
  }

  /* ─────────────── Init ─────────────── */
  document.addEventListener('DOMContentLoaded', () => {
    captureEnglish();
    let saved = 'en';
    try { saved = localStorage.getItem(LANG_KEY) || 'en'; } catch (e) { /* storage unavailable */ }
    setLang(saved);
    $$('.split').forEach(el => { if (!el.classList.contains('ready')) splitText(el); });
    $$('.lang button').forEach(b => b.addEventListener('click', () => setLang(b.dataset.lang)));
    $$('.year').forEach(el => { el.textContent = new Date().getFullYear(); });

    initNav();
    initParallax();
    initQuotes();
    initForm();
    requestAnimationFrame(observeAll);
  });
})();
