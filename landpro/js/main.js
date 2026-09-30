/* ═══════════════════════════════════════════════════════════════
   LANDPRO EXCAVATIONS — main.js
   ═══════════════════════════════════════════════════════════════ */

/* ───────────────────────────────────────────────────────────────
   1. BUSINESS INFO — edit here and it updates across the whole site
   ─────────────────────────────────────────────────────────────── */
const CONFIG = {
  phone: '(555) 123-4567',
  phoneHref: 'tel:+15551234567',
  email: 'info@landproexcavations.com',
  emailHref: 'mailto:info@landproexcavations.com',
  years: '15+',
  area: {
    en: 'Serving Your City & Surrounding Counties',
    es: 'Servimos a su ciudad y condados cercanos',
  },
  // Cities / counties shown in the "Service Area" section
  areas: ['Your City', 'Nearby Town', 'North County', 'South County', 'East Valley', 'West Ridge'],
  facebook: '#',
  instagram: '#',
  youtube: '#',
};

/* ───────────────────────────────────────────────────────────────
   2. TRANSLATIONS — English lives in the HTML (default).
      Only the Spanish text is stored here.
   ─────────────────────────────────────────────────────────────── */
const ES = {
  'meta.title': 'LandPro Excavations | Limpieza de terrenos, excavación y preparación de sitios',

  'top.hours': 'Lun – Sáb: 7:00 AM – 6:00 PM',
  'top.insured': 'Con licencia y asegurados',

  'nav.services': 'Servicios',
  'nav.about': 'Nosotros',
  'nav.projects': 'Proyectos',
  'nav.equipment': 'Maquinaria',
  'nav.reviews': 'Reseñas',
  'nav.contact': 'Contacto',

  'cta.estimate': 'Cotización gratis',
  'cta.projects': 'Ver nuestros trabajos',
  'cta.talk': 'Hable con nuestro equipo',
  'cta.title': '¿Listo para empezar su proyecto?',
  'cta.text': 'Reciba una cotización gratis y sin compromiso. Normalmente respondemos en menos de 24 horas.',

  'hero.eyebrow': 'Limpieza de terrenos · Excavación · Preparación de sitios',
  'hero.title': 'Limpiamos el terreno.<br><span>Usted construye el futuro.</span>',
  'hero.text': 'De lotes llenos de maleza a terrenos listos para construir: LandPro Excavations ofrece limpieza de terrenos rápida, limpia y profesional con maquinaria pesada y un equipo con experiencia.',
  'hero.b1': 'Cotizaciones en sitio gratis',
  'hero.b2': 'Con licencia y asegurados',
  'hero.b3': 'Empresa local',

  'stats.years': 'Años de experiencia',
  'stats.acres': 'Acres limpiados',
  'stats.projects': 'Proyectos completados',
  'stats.satisfaction': 'Clientes satisfechos',

  'services.eyebrow': 'Lo que hacemos',
  'services.title': 'Nuestros servicios',
  'services.lead': 'Soluciones completas para propiedades residenciales, comerciales y agrícolas: un solo equipo, una sola llamada.',
  's1.t': 'Limpieza de terrenos',
  's1.d': 'Retiro de árboles, maleza y escombros para abrir su propiedad a la construcción, la agricultura o la recreación.',
  's2.t': 'Trituración forestal',
  's2.d': 'Limpieza ecológica que convierte la vegetación en mantillo en el sitio: sin quemas, sin acarreo y con mínima alteración del suelo.',
  's3.t': 'Excavación',
  's3.d': 'Cimientos, sótanos, piscinas, estanques y zanjas para servicios, excavados con precisión y cuidado.',
  's4.t': 'Nivelación',
  's4.d': 'Nivelación gruesa y fina para un buen drenaje, bases de construcción, jardines y estacionamientos.',
  's5.t': 'Remoción de tocones',
  's5.d': 'Triturado de tocones y extracción completa de raíces para que su terreno quede realmente listo.',
  's6.t': 'Entradas y caminos',
  's6.d': 'Entradas de grava, caminos de acceso y senderos construidos para soportar tráfico pesado y mal clima.',
  's7.t': 'Soluciones de drenaje',
  's7.d': 'Cunetas, alcantarillas y drenajes franceses que alejan el agua de donde no debe estar.',
  's8.t': 'Demolición y escombros',
  's8.d': 'Demolición segura de estructuras pequeñas, bodegas y cimientos viejos, además del retiro completo de escombros.',

  'about.eyebrow': 'Sobre LandPro',
  'about.title': 'Construidos con trabajo duro.<br>Enfocados en resultados.',
  'about.p1': 'LandPro Excavations es una empresa local especializada en limpieza de terrenos y preparación de sitios. Empezamos con una sola máquina y una promesa sencilla: llegar a tiempo, hacer bien el trabajo y dejar cada propiedad mejor de lo que la encontramos.',
  'about.p2': 'Hoy nuestro equipo y nuestra flota moderna manejan proyectos de todos los tamaños, desde un solo lote hasta cientos de acres, con la misma atención al detalle.',
  'about.l1': 'Precios honestos y claros, sin sorpresas',
  'about.l2': 'Maquinaria moderna y bien mantenida',
  'about.l3': 'Sitios limpios y trabajos entregados a tiempo',
  'about.l4': 'Con licencia y seguro para su protección',
  'about.badge': 'Años moviendo tierra',

  'process.eyebrow': 'Cómo trabajamos',
  'process.title': 'Proceso simple. Resultados sólidos.',
  'p1.t': 'Visita al sitio',
  'p1.d': 'Recorremos su propiedad, escuchamos sus objetivos y evaluamos el terreno.',
  'p2.t': 'Cotización gratis',
  'p2.d': 'Recibe una cotización clara y detallada con fechas, sin costos ocultos.',
  'p3.t': 'Manos a la obra',
  'p3.d': 'Nuestro equipo llega con la maquinaria adecuada y hace el trabajo de forma segura.',
  'p4.t': 'Revisión final',
  'p4.d': 'Revisamos el trabajo terminado con usted para asegurar que quede 100% satisfecho.',

  'projects.eyebrow': 'Nuestro trabajo',
  'projects.title': 'Antes y después',
  'projects.lead': 'Deslice para ver la transformación. Resultados reales en propiedades reales.',
  'projects.before': 'Antes',
  'projects.after': 'Después',
  'g1.c': 'Limpieza de terrenos',
  'g1.t': 'Lote residencial de 5 acres',
  'g2.c': 'Trituración forestal',
  'g2.t': 'Sendero y línea de cerca',
  'g3.c': 'Excavación',
  'g3.t': 'Cimientos de vivienda',
  'g4.c': 'Caminos',
  'g4.t': 'Camino de acceso de grava',
  'g5.c': 'Nivelación',
  'g5.t': 'Base para edificio comercial',
  'g6.c': 'Drenaje',
  'g6.t': 'Estanque y alcantarilla',

  'equip.eyebrow': 'Nuestra flota',
  'equip.title': 'La máquina correcta<br>para cada trabajo',
  'equip.lead': 'Somos dueños de nuestra maquinaria y la mantenemos nosotros mismos: eso significa agenda más rápida, costos más bajos y resultados confiables.',
  'e1.t': 'Excavadoras',
  'e1.d': 'Desde mini hasta tamaño completo para excavar, hacer zanjas y levantar cargas.',
  'e2.t': 'Trituradoras forestales',
  'e2.d': 'Cabezales de alto caudal que convierten la maleza en cobertura para el suelo.',
  'e3.t': 'Topadoras y minicargadoras',
  'e3.d': 'Para empujar, nivelar y mover material con precisión.',
  'e4.t': 'Camiones de volteo',
  'e4.d': 'Transporte de tierra, grava y escombros hacia y desde su sitio.',

  'reviews.eyebrow': 'Testimonios',
  'reviews.title': 'Lo que dicen nuestros clientes',
  'r1.q': 'Limpiaron tres acres de bosque espeso en dos días y dejaron el sitio impecable. Precio justo y excelente comunicación de principio a fin.',
  'r1.w': 'Propietario',
  'r2.q': 'Usamos LandPro para toda nuestra preparación de sitios. Siempre a tiempo, siempre profesionales. Nuestras obras empiezan a tiempo gracias a ellos.',
  'r2.w': 'Contratista general',
  'r3.q': 'La trituración forestal en nuestro potrero fue increíble. Sin quemas ni desorden, solo terreno limpio y listo para usar. Muy recomendados.',
  'r3.w': 'Dueños de rancho',

  'area.eyebrow': 'Zona de servicio',
  'area.title': 'Orgullosos de servir a nuestra comunidad',
  'area.lead': 'Trabajamos en toda la región. ¿No ve su ciudad? Llámenos: viajamos por el proyecto correcto.',

  'contact.eyebrow': 'Contáctenos',
  'contact.title': 'Solicite su cotización gratis',
  'contact.lead': 'Cuéntenos sobre su propiedad y su proyecto. Le responderemos pronto para agendar una visita.',
  'contact.call': 'Llame o escriba',
  'contact.email': 'Correo',
  'contact.area': 'Zona de servicio',
  'contact.hoursLbl': 'Horario',

  'form.name': 'Nombre completo *',
  'form.phone': 'Teléfono *',
  'form.email': 'Correo electrónico *',
  'form.service': 'Servicio que necesita',
  'form.other': 'Otro',
  'form.size': 'Tamaño de la propiedad',
  'form.size1': 'Menos de 1 acre',
  'form.size2': '1 – 5 acres',
  'form.size3': '5 – 20 acres',
  'form.size4': 'Más de 20 acres',
  'form.size5': 'No estoy seguro',
  'form.location': 'Ubicación del proyecto',
  'form.locationPh': 'Ciudad o dirección',
  'form.message': 'Detalles del proyecto',
  'form.messagePh': 'Cuéntenos sobre su proyecto...',
  'form.submit': 'Enviar solicitud',

  'footer.about': 'Limpieza de terrenos, excavación y preparación de sitios profesional. Nosotros limpiamos el terreno; usted construye el futuro.',
  'footer.services': 'Servicios',
  'footer.company': 'Empresa',
  'footer.contact': 'Contacto',
  'footer.rights': 'Todos los derechos reservados.',
  'footer.licensed': 'Con licencia y asegurados',
};

/* Messages generated from JS (form feedback) */
const MSG = {
  en: {
    required: 'Please fill in your name, phone and a valid email.',
    sending: 'Sending...',
    success: "Thank you! We received your request and will contact you within 24 hours.",
    error: 'Something went wrong. Please call us or try again.',
  },
  es: {
    required: 'Por favor complete su nombre, teléfono y un correo válido.',
    sending: 'Enviando...',
    success: '¡Gracias! Recibimos su solicitud y le contactaremos en menos de 24 horas.',
    error: 'Algo salió mal. Por favor llámenos o intente de nuevo.',
  },
};

document.documentElement.classList.add('js');

/* ───────────────────────────────────────────────────────────────
   3. LANGUAGE SWITCHER (default: English)
   ─────────────────────────────────────────────────────────────── */
const LANG_KEY = 'landpro-lang';
const EN = {};
let currentLang = 'en';

function captureEnglish() {
  EN['meta.title'] = document.title;
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const k = el.dataset.i18n;
    if (!(k in EN)) EN[k] = el.innerHTML;
  });
  document.querySelectorAll('[data-i18n-ph]').forEach(el => {
    const k = el.dataset.i18nPh;
    if (!(k in EN)) EN[k] = el.getAttribute('placeholder') || '';
  });
}

function t(key, lang = currentLang) {
  const dict = lang === 'es' ? ES : EN;
  return dict[key] ?? EN[key] ?? '';
}

function setLanguage(lang) {
  currentLang = lang === 'es' ? 'es' : 'en';
  document.documentElement.lang = currentLang;
  document.title = t('meta.title');

  document.querySelectorAll('[data-i18n]').forEach(el => { el.innerHTML = t(el.dataset.i18n); });
  document.querySelectorAll('[data-i18n-ph]').forEach(el => { el.setAttribute('placeholder', t(el.dataset.i18nPh)); });

  applyConfig();

  document.querySelectorAll('.lang-btn').forEach(btn => {
    const active = btn.dataset.lang === currentLang;
    btn.classList.toggle('is-active', active);
    btn.setAttribute('aria-pressed', String(active));
  });

  const status = document.getElementById('formStatus');
  if (status) { status.textContent = ''; status.className = 'form-status'; }

  try { localStorage.setItem(LANG_KEY, currentLang); } catch (e) { /* storage unavailable */ }
}

/* ───────────────────────────────────────────────────────────────
   4. APPLY BUSINESS CONFIG
   ─────────────────────────────────────────────────────────────── */
function cfgValue(key) {
  const v = CONFIG[key];
  return v && typeof v === 'object' && !Array.isArray(v) ? (v[currentLang] ?? v.en) : v;
}

function applyConfig() {
  document.querySelectorAll('[data-cfg]').forEach(el => {
    const v = cfgValue(el.dataset.cfg);
    if (v != null) el.textContent = v;
  });
  document.querySelectorAll('[data-cfg-href]').forEach(el => {
    const v = cfgValue(el.dataset.cfgHref);
    if (v) el.setAttribute('href', v);
  });
}

function renderAreas() {
  const list = document.getElementById('areaList');
  if (!list) return;
  list.innerHTML = CONFIG.areas
    .map(a => `<li><svg class="ic"><use href="#i-pin"/></svg><span></span></li>`)
    .join('');
  list.querySelectorAll('span').forEach((s, i) => { s.textContent = CONFIG.areas[i]; });
}

/* ───────────────────────────────────────────────────────────────
   5. NAVIGATION
   ─────────────────────────────────────────────────────────────── */
function initNav() {
  const navbar = document.getElementById('navbar');
  const burger = document.getElementById('hamburger');
  const links = document.getElementById('navLinks');

  const closeMenu = () => {
    links.classList.remove('open');
    burger.classList.remove('open');
    burger.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  };

  burger.addEventListener('click', () => {
    const open = !links.classList.contains('open');
    links.classList.toggle('open', open);
    burger.classList.toggle('open', open);
    burger.setAttribute('aria-expanded', String(open));
    document.body.style.overflow = open ? 'hidden' : '';
  });
  links.querySelectorAll('a').forEach(a => a.addEventListener('click', closeMenu));
  window.addEventListener('resize', () => { if (window.innerWidth > 1024) closeMenu(); });
  document.addEventListener('keydown', e => { if (e.key === 'Escape') closeMenu(); });

  const onScroll = () => navbar.classList.toggle('scrolled', window.scrollY > 10);
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });

  // Highlight the nav link of the section in view
  const navAnchors = [...links.querySelectorAll('a[href^="#"]:not(.btn)')];
  const sections = navAnchors
    .map(a => document.querySelector(a.getAttribute('href')))
    .filter(Boolean);
  if ('IntersectionObserver' in window) {
    const spy = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        navAnchors.forEach(a => a.classList.toggle('active', a.getAttribute('href') === '#' + entry.target.id));
      });
    }, { rootMargin: '-45% 0px -50% 0px' });
    sections.forEach(s => spy.observe(s));
  }
}

/* ───────────────────────────────────────────────────────────────
   6. SCROLL REVEAL + COUNTERS
   ─────────────────────────────────────────────────────────────── */
function animateCount(el) {
  const target = Number(el.dataset.count);
  const suffix = el.dataset.suffix || '';
  const duration = 1800;
  const start = performance.now();
  const step = now => {
    const p = Math.min((now - start) / duration, 1);
    const eased = 1 - Math.pow(1 - p, 3);
    el.textContent = Math.round(target * eased).toLocaleString('en-US') + suffix;
    if (p < 1) requestAnimationFrame(step);
  };
  requestAnimationFrame(step);
}

function initReveal() {
  const items = document.querySelectorAll('.reveal');
  const counters = document.querySelectorAll('[data-count]');
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (!('IntersectionObserver' in window) || reduced) {
    items.forEach(el => el.classList.add('visible'));
    counters.forEach(el => { el.textContent = Number(el.dataset.count).toLocaleString('en-US') + (el.dataset.suffix || ''); });
    return;
  }

  const io = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const el = entry.target;
      // small stagger for items that share a parent
      const siblings = [...el.parentElement.children].filter(c => c.classList.contains('reveal'));
      el.style.transitionDelay = `${Math.min(siblings.indexOf(el), 5) * 80}ms`;
      el.classList.add('visible');
      el.querySelectorAll('[data-count]').forEach(animateCount);
      obs.unobserve(el);
    });
  }, { threshold: 0.15, rootMargin: '0px 0px -40px 0px' });

  items.forEach(el => io.observe(el));
}

/* ───────────────────────────────────────────────────────────────
   7. BEFORE / AFTER SLIDER
   ─────────────────────────────────────────────────────────────── */
function initBeforeAfter() {
  const box = document.getElementById('beforeAfter');
  if (!box) return;
  const range = box.querySelector('.ba-range');
  const update = () => box.style.setProperty('--pos', range.value + '%');
  range.addEventListener('input', update);
  update();
}

/* ───────────────────────────────────────────────────────────────
   8. QUOTE FORM
   To receive emails, create a free form at formspree.io and set
   the form's action="https://formspree.io/f/XXXXXXX" in index.html.
   ─────────────────────────────────────────────────────────────── */
function initForm() {
  const form = document.getElementById('quoteForm');
  if (!form) return;
  const status = document.getElementById('formStatus');

  const setStatus = (msg, type = '') => {
    status.textContent = msg;
    status.className = 'form-status' + (type ? ' ' + type : '');
  };

  form.addEventListener('submit', async e => {
    e.preventDefault();
    const required = [...form.querySelectorAll('[required]')];
    let valid = true;
    required.forEach(input => {
      const ok = input.value.trim() !== '' && input.checkValidity();
      input.classList.toggle('invalid', !ok);
      if (!ok) valid = false;
    });
    if (!valid) { setStatus(MSG[currentLang].required, 'err'); return; }

    const action = form.getAttribute('action');
    if (!action) {
      // No backend configured yet — show the confirmation for demo purposes
      setStatus(MSG[currentLang].success, 'ok');
      form.reset();
      return;
    }

    const btn = form.querySelector('button[type="submit"]');
    btn.disabled = true;
    setStatus(MSG[currentLang].sending);
    try {
      const res = await fetch(action, { method: 'POST', body: new FormData(form), headers: { Accept: 'application/json' } });
      if (!res.ok) throw new Error(res.statusText);
      setStatus(MSG[currentLang].success, 'ok');
      form.reset();
    } catch (err) {
      setStatus(MSG[currentLang].error, 'err');
    } finally {
      btn.disabled = false;
    }
  });

  form.querySelectorAll('[required]').forEach(input =>
    input.addEventListener('input', () => input.classList.remove('invalid'))
  );
}

/* ───────────────────────────────────────────────────────────────
   INIT
   ─────────────────────────────────────────────────────────────── */
document.addEventListener('DOMContentLoaded', () => {
  captureEnglish();
  renderAreas();

  let saved = 'en';
  try { saved = localStorage.getItem(LANG_KEY) || 'en'; } catch (e) { /* storage unavailable */ }
  setLanguage(saved);

  document.querySelectorAll('.lang-btn').forEach(btn =>
    btn.addEventListener('click', () => setLanguage(btn.dataset.lang))
  );

  document.getElementById('year').textContent = new Date().getFullYear();

  initNav();
  initReveal();
  initBeforeAfter();
  initForm();
});
