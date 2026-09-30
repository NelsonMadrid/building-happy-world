/* ═══════════════════════════════════════════════════════════════
   LANDPRO EXCAVATIONS — site data
   Edit business info, projects and Spanish copy here.
   ═══════════════════════════════════════════════════════════════ */

/* Business info — used everywhere data-cfg / data-cfg-href appears */
window.CONFIG = {
  phone: '(555) 123-4567',
  phoneHref: 'tel:+15551234567',
  email: 'hello@landproexcavations.com',
  emailHref: 'mailto:hello@landproexcavations.com',
  address: { en: 'Yard & Office — Your City, ST', es: 'Patio y oficina — Su ciudad, ST' },
  hours: { en: 'Mon – Sat · 7:00 – 18:00', es: 'Lun – Sáb · 7:00 – 18:00' },
  region: { en: 'Serving the region and surrounding counties', es: 'Servimos a la región y condados cercanos' },
  instagram: '#',
  facebook: '#',
  youtube: '#',
};

/* Projects — sample content for layout; replace with real work.
   Images live in img/ — keep the file names or update the paths here. */
window.PROJECTS = [
  {
    slug: 'cedar-ridge',
    name: 'Cedar Ridge Residence',
    location: { en: 'North County', es: 'Condado Norte' },
    service: { en: 'Land Clearing & Grading', es: 'Limpieza y nivelación' },
    size: { en: '12 acres', es: '12 acres' },
    duration: { en: '3 weeks', es: '3 semanas' },
    year: '2025',
    hero: 'img/project-ridge.jpg',
    lead: {
      en: 'A wooded hillside opened carefully to reveal a homesite with long views — without losing the character of the forest around it.',
      es: 'Una ladera boscosa abierta con cuidado para revelar un sitio de construcción con vistas amplias, sin perder el carácter del bosque que lo rodea.',
    },
    body: {
      en: 'We walked the property with the owners and architect to mark every tree worth keeping. Clearing was selective, stumps were removed completely, and the building pad was graded to shed water away from the future foundation.',
      es: 'Recorrimos la propiedad con los dueños y el arquitecto para marcar cada árbol que valía la pena conservar. La limpieza fue selectiva, los tocones se retiraron por completo y la base se niveló para alejar el agua de los futuros cimientos.',
    },
    gallery: ['img/process-clear.jpg', 'img/detail-soil.jpg', 'img/detail-rock.jpg', 'img/process-grade.jpg', 'img/project-pad.jpg'],
  },
  {
    slug: 'meadow-house',
    name: 'The Meadow House',
    location: { en: 'River Valley', es: 'Valle del Río' },
    service: { en: 'Forestry Mulching', es: 'Trituración forestal' },
    size: { en: '8 acres', es: '8 acres' },
    duration: { en: '6 days', es: '6 días' },
    year: '2025',
    hero: 'img/project-meadow.jpg',
    lead: {
      en: 'Overgrown pasture returned to open meadow — mulched in place, with no burning and no hauling.',
      es: 'Un potrero invadido por la maleza convertido otra vez en pradera abierta: triturado en sitio, sin quemas y sin acarreo.',
    },
    body: {
      en: 'Forestry mulching turned years of brush into a protective layer that holds the soil and feeds new growth. The result is a clean, natural landscape that is ready for seed the same season.',
      es: 'La trituración forestal convirtió años de maleza en una capa protectora que sujeta el suelo y alimenta el nuevo crecimiento. El resultado es un paisaje limpio y natural, listo para sembrar la misma temporada.',
    },
    gallery: ['img/process-survey.jpg', 'img/discipline-mulching.jpg', 'img/detail-soil.jpg', 'img/project-meadow.jpg'],
  },
  {
    slug: 'long-lane',
    name: 'Long Lane Farm Road',
    location: { en: 'East Hills', es: 'Colinas del Este' },
    service: { en: 'Access Road', es: 'Camino de acceso' },
    size: { en: '0.6 miles', es: '1 km' },
    duration: { en: '2 weeks', es: '2 semanas' },
    year: '2024',
    hero: 'img/project-lane.jpg',
    lead: {
      en: 'A gravel lane that follows the land instead of fighting it, built to carry trucks through every season.',
      es: 'Un camino de grava que sigue la forma del terreno en lugar de pelear con ella, construido para soportar camiones en cualquier temporada.',
    },
    body: {
      en: 'The route was cut, crowned and ditched for drainage, then layered with compacted base and a finished gravel surface. Culverts were placed at every low point.',
      es: 'La ruta se trazó, se le dio bombeo y cunetas para el drenaje, y luego se cubrió con base compactada y una capa final de grava. Se colocaron alcantarillas en cada punto bajo.',
    },
    gallery: ['img/discipline-roads.jpg', 'img/detail-gravel.jpg', 'img/yard-1.jpg', 'img/project-lane.jpg'],
  },
  {
    slug: 'still-water',
    name: 'Still Water Pond',
    location: { en: 'West Ridge', es: 'Cresta Oeste' },
    service: { en: 'Excavation & Drainage', es: 'Excavación y drenaje' },
    size: { en: '1.5-acre pond', es: 'Estanque de 1.5 acres' },
    duration: { en: '4 weeks', es: '4 semanas' },
    year: '2024',
    hero: 'img/project-pond.jpg',
    lead: {
      en: 'A low, wet corner of the property reshaped into a calm pond that now anchors the whole landscape.',
      es: 'Una esquina baja y húmeda de la propiedad transformada en un estanque tranquilo que hoy es el centro de todo el paisaje.',
    },
    body: {
      en: 'We excavated and shaped the basin, keyed a clay core into the dam and installed an overflow to protect it in heavy rain. The banks were graded gently and stabilized.',
      es: 'Excavamos y dimos forma al vaso, construimos un núcleo de arcilla en la represa e instalamos un vertedero para protegerla en lluvias fuertes. Los bordes se nivelaron suavemente y se estabilizaron.',
    },
    gallery: ['img/discipline-excavation.jpg', 'img/detail-clay.jpg', 'img/detail-water.jpg', 'img/project-pond.jpg'],
  },
  {
    slug: 'south-county-pad',
    name: 'South County Building Pad',
    location: { en: 'South County', es: 'Condado Sur' },
    service: { en: 'Site Preparation', es: 'Preparación de sitio' },
    size: { en: '4 acres', es: '4 acres' },
    duration: { en: '10 days', es: '10 días' },
    year: '2024',
    hero: 'img/project-pad.jpg',
    lead: {
      en: 'A commercial pad delivered level, compacted and on schedule — so construction could begin the following Monday.',
      es: 'Una base comercial entregada nivelada, compactada y a tiempo, para que la construcción pudiera empezar el lunes siguiente.',
    },
    body: {
      en: 'Cut and fill were balanced on site to avoid hauling, and every lift was compacted and tested. Final grades were checked against the engineer’s plan to the inch.',
      es: 'Los cortes y rellenos se equilibraron en el sitio para evitar acarreos, y cada capa se compactó y se probó. Los niveles finales se verificaron contra el plano del ingeniero al detalle.',
    },
    gallery: ['img/process-grade.jpg', 'img/discipline-grading.jpg', 'img/detail-rock.jpg', 'img/project-pad.jpg'],
  },
  {
    slug: 'pine-grove',
    name: 'Pine Grove Estate',
    location: { en: 'Nearby Town', es: 'Pueblo cercano' },
    service: { en: 'Selective Clearing', es: 'Limpieza selectiva' },
    size: { en: '20 acres', es: '20 acres' },
    duration: { en: '5 weeks', es: '5 semanas' },
    year: '2023',
    hero: 'img/project-grove.jpg',
    lead: {
      en: 'Twenty acres of dense pine thinned into an open, walkable grove with room for a home, a barn and a long approach.',
      es: 'Veinte acres de pino denso raleados hasta formar un bosque abierto y caminable, con espacio para una casa, un granero y una larga entrada.',
    },
    body: {
      en: 'Understory was mulched, weak and crowded trees removed, and the healthiest pines left standing. The estate kept its privacy and gained light, air and usable ground.',
      es: 'Se trituró el sotobosque, se retiraron los árboles débiles o amontonados y se dejaron en pie los pinos más sanos. La propiedad mantuvo su privacidad y ganó luz, aire y terreno utilizable.',
    },
    gallery: ['img/discipline-clearing.jpg', 'img/about-2.jpg', 'img/detail-soil.jpg', 'img/project-grove.jpg'],
  },
];

/* Spanish copy. English lives in the HTML and is the default. */
window.ES = {
  'meta.title': 'LandPro Excavations — Limpieza de terrenos, excavación y preparación de sitios',
  'meta.projectTitle': 'Proyecto',

  'nav.about': 'Nosotros',
  'nav.services': 'Servicios',
  'nav.projects': 'Proyectos',
  'nav.process': 'Proceso',
  'nav.contact': 'Contacto',
  'nav.start': 'Iniciar un proyecto',
  'nav.menu': 'Menú',
  'nav.close': 'Cerrar',

  'hero.kicker': 'LandPro Excavations',
  'hero.title': 'Preparamos la tierra<br>para <em>lo que viene.</em>',
  'hero.text': 'Limpieza de terrenos, excavación y preparación de sitios, hechas con precisión y respeto por la tierra.',
  'hero.cta': 'Ver nuestro trabajo',
  'hero.scroll': 'Desplazar',

  'intro.label': 'Introducción',
  'intro.title': 'Terreno natural. Planificación cuidadosa. <em>Trabajo excepcional.</em>',
  'intro.text': 'Unimos una lectura atenta de cada propiedad, maquinaria moderna y operadores con experiencia para entregar terrenos limpios, nivelados y listos para construir, sin atajos y sin desorden.',

  'services.label': 'Servicios',
  'services.title': 'Seis disciplinas. <em>Un solo estándar.</em>',
  'services.explore': 'Explorar',
  'sv1.n': 'Limpieza de terrenos', 'sv1.d': 'Selectiva o completa, con los tocones fuera.',
  'sv2.n': 'Trituración forestal', 'sv2.d': 'Maleza convertida en mantillo, en sitio.',
  'sv3.n': 'Excavación', 'sv3.d': 'Cimientos, estanques y zanjas de servicios.',
  'sv4.n': 'Nivelación y sitio', 'sv4.d': 'Bases niveladas y compactadas a plano.',
  'sv5.n': 'Drenaje y estanques', 'sv5.d': 'El agua, a donde debe ir.',
  'sv6.n': 'Caminos y entradas', 'sv6.d': 'Grava que resiste cada temporada.',

  'projects.label': 'Proyectos seleccionados',
  'projects.title': 'Terrenos, <em>transformados.</em>',
  'projects.view': 'Ver proyecto',

  'process.label': 'Proceso',
  'process.title': 'Del terreno virgen <em>al terreno listo.</em>',
  'pr1.t': 'Recorrer', 'pr1.d': 'Caminamos el terreno y lo entendemos.',
  'pr2.t': 'Planificar', 'pr2.d': 'Definimos cada nivel y cada límite.',
  'pr3.t': 'Limpiar', 'pr3.d': 'Retiro preciso, limpio y responsable.',
  'pr4.t': 'Terminar', 'pr4.d': 'Nivelado, estable y listo para construir.',

  'about.label': 'Nosotros',
  'about.title': 'Un oficio que <em>se ve en la tierra.</em>',
  'about.p1': 'LandPro es una empresa local dirigida por sus dueños. Operamos nuestra propia maquinaria, cuidamos cada sitio como si fuera nuestro y estamos presentes desde la primera visita hasta la última pasada.',
  'about.p2': 'Materiales correctos, niveles exactos, bordes limpios y una sola persona de contacto durante todo el proyecto.',
  'about.f1t': 'Con dueño en sitio', 'about.f1d': 'Presentes en cada proyecto.',
  'about.f2t': 'Flota propia', 'about.f2d': 'Moderna y bien mantenida.',
  'about.f3t': 'Licencia y seguro', 'about.f3d': 'Para su tranquilidad.',

  'visit.label': 'Visítenos',
  'visit.title': 'Véalo. Recórralo. <em>Hágalo suyo.</em>',
  'visit.text': 'Visite nuestro patio para ver la maquinaria de cerca, o agende un recorrido por su propiedad con nuestro equipo.',
  'visit.where': 'Ubicación',
  'visit.when': 'Horario',
  'visit.cta': 'Agendar un recorrido',

  'reviews.label': 'Clientes',
  'rv1.q': 'Impecable desde la primera visita hasta la última pasada de la niveladora.',
  'rv2.q': 'Dejaron en pie cada árbol que nos importaba. El terreno se siente abierto, pero sigue siendo nuestro.',
  'rv3.q': 'Puntuales, precisos y limpios. Nuestra obra empezó exactamente el día planeado.',
  'reviews.prev': 'Anterior', 'reviews.next': 'Siguiente',

  'cta.title': '¿Listo para empezar <em>algo excepcional?</em>',
  'cta.button': 'Iniciar su proyecto',

  'contact.label': 'Contacto',
  'contact.title': 'Cuéntenos sobre <em>su terreno.</em>',
  'contact.text': 'Comparta algunos detalles y le responderemos en un día hábil para agendar una visita.',
  'form.name': 'Nombre',
  'form.email': 'Correo electrónico',
  'form.phone': 'Teléfono',
  'form.location': 'Ubicación de la propiedad',
  'form.service': 'Servicio',
  'form.size': 'Tamaño aproximado',
  'form.message': 'Cuéntenos sobre el proyecto',
  'form.choose': 'Seleccione…',
  'form.other': 'Otro / no estoy seguro',
  'form.submit': 'Enviar solicitud',
  'form.ok': 'Gracias. Recibimos su mensaje y le contactaremos pronto.',
  'form.err': 'Por favor complete nombre, correo y teléfono.',
  'form.fail': 'No se pudo enviar. Llámenos o intente de nuevo.',
  'form.sending': 'Enviando…',

  'footer.about': 'Limpieza de terrenos, excavación y preparación de sitios, con precisión y cuidado.',
  'footer.nav': 'Navegación',
  'footer.contact': 'Contacto',
  'footer.follow': 'Síganos',
  'footer.rights': 'Todos los derechos reservados.',
  'footer.top': 'Volver arriba',

  'pd.back': 'Todos los proyectos',
  'pd.location': 'Ubicación',
  'pd.service': 'Servicio',
  'pd.size': 'Alcance',
  'pd.duration': 'Duración',
  'pd.year': 'Año',
  'pd.gallery': 'Galería',
  'pd.details': 'Detalles',
  'pd.result': 'Resultado final',
  'pd.next': 'Siguiente proyecto',
};
