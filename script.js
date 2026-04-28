/* ═══════════════════════════════════════════════════════════════
   BUILDING A HAPPY WORLD v2 — script.js
   Escuela Bilingüe | Gualjoco, Santa Bárbara, Honduras
   ═══════════════════════════════════════════════════════════════

   ÍNDICE:
   1.  CONFIGURACIÓN — WA, teléfono, datos bancarios
   2.  DATOS DE DOCENTES — Agrega/edita docentes aquí
   3.  TRADUCCIONES — Sistema ES/EN completo
   4.  MOTOR DE TRADUCCIÓN — No modificar
   5.  NAVBAR & HAMBURGER
   6.  SCROLL ANIMATIONS
   7.  FORMULARIO
   8.  WHATSAPP SETUP
   9.  INICIALIZACIÓN
   11. PAGOS — Botones y datos bancarios
   12. DARK MODE — Tema oscuro

   ═══════════════════════════════════════════════════════════════ */


/* ═══════════════════════════════════════════════════════════════
   1. CONFIGURACIÓN GLOBAL
   ═══════════════════════════════════════════════════════════════ */

/**
 * ❶  NÚMERO DE WHATSAPP
 *    Formato: código de país + número (sin +, sin espacios)
 *    Honduras (+504) → 504 + 8 dígitos = 50498765432
 */
const WHATSAPP_NUMBER = '50498765432'; // ← CAMBIA ESTE NÚMERO

/**
 * ❷  MENSAJE DE WHATSAPP PREDETERMINADO
 *    Texto que aparece preescrito al abrir WhatsApp
 */
const WHATSAPP_MESSAGE_ES = '¡Hola! Me interesa conocer más sobre la escuela Building a Happy World. ¿Pueden darme información?';
const WHATSAPP_MESSAGE_EN = 'Hello! I am interested in learning more about Building a Happy World School. Can you give me information?';

/**
 * ❸  NÚMERO DE TELÉFONO VISIBLE EN LA PÁGINA
 *    Este texto se muestra en la sección de contacto y el footer
 */
const PHONE_DISPLAY = '+504 9876-5432'; // ← CAMBIA A TU NÚMERO REAL


/* ═══════════════════════════════════════════════════════════════
   ❹  INFORMACIÓN BANCARIA (SECCIÓN DE PAGOS)
      Edita estos datos con tu información real.
   ═══════════════════════════════════════════════════════════════ */
const PAYMENT_CONFIG = {
  bankName:       'Tu banco aquí',           // ← Ej: 'Banco Atlántida'
  accountNumber:  'XXXX-XXXX-XXXX',         // ← Número de cuenta real
  accountHolder:  'Nombre del titular',      // ← Nombre como aparece en la cuenta
  accountType_ES: 'Cuenta de ahorros',       // ← O 'Cuenta corriente'
  accountType_EN: 'Savings account',
  proofMessage_ES: 'Hola, adjunto comprobante de pago de mensualidad escolar. Por favor confirmar recepción.',
  proofMessage_EN: 'Hello, sending proof of school tuition payment. Please confirm receipt.',
  adminMessage_ES: 'Hola, quisiera coordinar el pago de mensualidad. ¿Me pueden ayudar?',
  adminMessage_EN: 'Hello, I would like to coordinate my tuition payment. Can you help?',
};


/* ═══════════════════════════════════════════════════════════════
   2. DATOS DE EQUIPO (Administración, Profesores, Servicio Civil)
   ═══════════════════════════════════════════════════════════════
   Para AGREGAR un miembro:
     Copia un bloque { ... } y agrégalo al array.
   Para ELIMINAR:
     Borra su bloque { ... } del array.
   Para EDITAR:
     Cambia los valores directamente.
   
   photo: ruta a la foto (ej: "images/teacher1.jpg") o null para ícono genérico
   area: 'admin' | 'profesor' | 'civil' (determina sección)
   ═══════════════════════════════════════════════════════════════ */

/* ═══════════════════════════════════════════════════════════════
   ⚽ CANCHA DE FÚTBOL — Edita precios y horarios aquí
   ═══════════════════════════════════════════════════════════════ */
const FIELD_CONFIG = {
  currency:        'L.',          // Símbolo de moneda
  prices: {
    hora_semana:   '500',         // Lun–Vie por hora  ← EDITAR
    hora_finde:    '600',         // Sáb–Dom por hora  ← EDITAR
    evento_dia:    '3,500',       // Evento día completo ← EDITAR
  },
  horarios: {
    semana_inicio: '3:00 PM',
    semana_fin:    '11:00 PM',
    finde_inicio:  '7:00 AM',
    finde_fin:     '11:00 PM',
  },
  waMessage_ES: 'Hola, me interesa reservar la cancha de fútbol. ¿Pueden confirmarme disponibilidad?',
  waMessage_EN: 'Hello, I would like to book the football field. Can you confirm availability?',
};

const TEACHERS_DATA = [
  // ════════════════════════════════════════════════════════════
  // ADMINISTRACIÓN
  // ════════════════════════════════════════════════════════════
  {
    photo: null,
    area: 'admin',
    name: 'Nombre del Director/a',   // ← EDITA
    role: 'Director/a General',
    desc: 'Responsable de la dirección estratégica y operativa de la institución.',
    roleEN: 'General Director',
    descEN: 'Responsible for the strategic and operational direction of the institution.',
  },
  {
    photo: null,
    area: 'admin',
    name: 'Nombre Coordinador/a',   // ← EDITA
    role: 'Coordinador/a Académico/a',
    desc: 'Supervisa el desarrollo curricular y los programas académicos.',
    roleEN: 'Academic Coordinator',
    descEN: 'Supervises curriculum development and academic programs.',
  },
  {
    photo: null,
    area: 'admin',
    name: 'Nombre del Secretario/a',   // ← EDITA
    role: 'Secretaría / Admisiones',
    desc: 'Primera línea de atención. Gestiona inscripciones, pagos y comunicaciones.',
    roleEN: 'Secretary / Admissions',
    descEN: 'First point of contact. Manages enrollment, payments and communications.',
  },

  // ════════════════════════════════════════════════════════════
  // PROFESORES
  // ════════════════════════════════════════════════════════════
  {
    photo: null,
    area: 'profesor',
    name: 'Nombre del Docente 1',
    role: 'Maestra de Prekínder',
    desc: 'Especialista en educación inicial con pasión por el desarrollo temprano y el bilingüismo.',
    roleEN: 'Pre-K Teacher',
    descEN: 'Early childhood education specialist with a passion for early development and bilingualism.',
  },
  {
    photo: null,
    area: 'profesor',
    name: 'Nombre del Docente 2',
    role: 'Maestro de Primaria',
    desc: 'Licenciado en educación bilingüe con experiencia en metodologías activas y aprendizaje basado en proyectos.',
    roleEN: 'Primary School Teacher',
    descEN: 'Bilingual education graduate with experience in active methodologies and project-based learning.',
  },
  {
    photo: null,
    area: 'profesor',
    name: 'Nombre del Docente 3',
    role: 'Profesora de Inglés',
    desc: 'Certificada en enseñanza del inglés como segundo idioma. Comprometida con la fluidez y la confianza del estudiante.',
    roleEN: 'English Teacher',
    descEN: 'Certified ESL teacher committed to student fluency and confidence.',
  },
  {
    photo: null,
    area: 'profesor',
    name: 'Nombre del Docente 4',
    role: 'Maestra de Secundaria',
    desc: 'Especialista en ciencias y matemáticas. Apasionada por el pensamiento crítico y la preparación universitaria.',
    roleEN: 'Secondary School Teacher',
    descEN: 'Science and math specialist passionate about critical thinking and college preparation.',
  },

  // ════════════════════════════════════════════════════════════
  // SERVICIO CIVIL
  // ════════════════════════════════════════════════════════════
  {
    photo: null,
    area: 'civil',
    name: 'Nombre del Personal',   // ← EDITA
    role: 'Servicios Generales',
    desc: 'Responsable del mantenimiento y limpieza de las instalaciones educativas.',
    roleEN: 'General Services',
    descEN: 'Responsible for maintenance and cleaning of educational facilities.',
  },
  {
    photo: null,
    area: 'civil',
    name: 'Nombre del Personal',   // ← EDITA
    role: 'Seguridad y Vigilancia',
    desc: 'Garantiza la seguridad y el orden en el recinto escolar durante el horario académico.',
    roleEN: 'Security and Supervision',
    descEN: 'Ensures safety and order on campus during school hours.',
  },

  // ← Agrega más miembros del equipo aquí siguiendo el mismo formato
];


/* ═══════════════════════════════════════════════════════════════
   3. TRADUCCIONES — SISTEMA ES/EN
   ═══════════════════════════════════════════════════════════════
   Cada clave data-i18n="x.y.z" del HTML se mapea aquí.
   Para EDITAR un texto: cambia el valor de la clave correspondiente.
   Para AGREGAR una traducción nueva:
     1. Agrega data-i18n="nueva.clave" en el HTML
     2. Agrega "nueva": { "clave": "texto" } en ES y EN
   ═══════════════════════════════════════════════════════════════ */
const translations = {

  es: {
    /* ─── NAV ─── */
    nav: {
      schoolName: 'Building a Happy World',
      tagline:    'Escuela Bilingüe',
      home:       'Inicio',
      history:    'Historia',
      levels:     'Niveles',
      bilingual:  'Bilingüe',
      teachers:   'Docentes',
      gallery:    'Galería',
      field:      'Cancha de Fútbol',
      enroll:     'Inscríbete',
      payments:   'Pagos',
    },
    /* ─── HERO ─── */
    hero: {
      location: 'Gualjoco, Santa Bárbara, Honduras',
      title1:   'Educamos con amor.',
      title2:   'Formamos para el mundo.',
      subtitle: 'Educación bilingüe de excelencia desde Prekínder hasta Noveno Grado. Donde cada niño descubre su potencial y construye un futuro brillante.',
      cta1:     'Solicitar información',
      cta2:     'Conoce nuestra historia',
      stat1:    'Años de excelencia',
      stat2:    'Grados disponibles',
      stat3:    'Idiomas de formación',
      scroll:   'Descubrir',
    },
    /* ─── VALORES ─── */
    values: { v1:'Valores', v2:'Bilingüismo', v3:'Excelencia', v4:'Comunidad', v5:'Innovación' },
    /* ─── HISTORIA ─── */
    history: {
      chip:     'Nuestra Historia',
      title:    'Un sueño que se convirtió en hogar',
      // EDITA los párrafos de la historia:
      p1: 'Todo comenzó con un sueño: brindar a los niños de Gualjoco una educación bilingüe de calidad, sin tener que salir de su comunidad. Un grupo de educadores apasionados se unió con esa visión y abrió las puertas de Building a Happy World.',
      p2: 'Lo que empezó con unos pocos estudiantes y mucho amor, hoy es una institución reconocida por su excelencia académica, su ambiente familiar y su compromiso con el bilingüismo desde los primeros años.',
      founded:  'Fundada',
      // EDITA nombres y cargos de fundadores:
      f1name:   'Nombre del Fundador',
      f1role:   'Co-fundador · Director',
      f2name:   'Nombre de la Fundadora',
      f2role:   'Co-fundadora · Directora Académica',
      cta:      'Agenda una visita',
    },
    /* ─── NIVELES ─── */
    levels: {
      chip: 'Oferta Educativa',
      title:'Niveles educativos',
      sub:  'Acompañamos cada etapa del crecimiento de tu hijo con programas diseñados para su edad, ritmo y potencial.',
      l1: { name:'Prekínder', age:'3 – 4 años',   desc:'Juego, exploración y primeros aprendizajes en ambiente bilingüe.',             f1:'Estimulación temprana',   f2:'Inglés desde el primer día', f3:'Socialización y valores'    },
      l2: { name:'Kínder',    age:'5 – 6 años',   desc:'Preparación integral con lecto-escritura bilingüe y desarrollo emocional.',    f1:'Pre-lectura y escritura', f2:'Matemáticas lúdicas',       f3:'Arte y música'               },
      l3: { name:'Primaria',  age:'1° – 6° grado',desc:'Base académica sólida con énfasis en ciencias, tecnología y bilingüismo.',     f1:'Bilingüismo intensivo',  f2:'Ciencias y tecnología',     f3:'Deportes y convivencia'      },
      l4: { name:'Secundaria',age:'7° – 9° grado',desc:'Formación para el liderazgo con inglés avanzado y pensamiento crítico.',       f1:'Inglés avanzado',        f2:'Orientación vocacional',    f3:'Proyectos y liderazgo'       },
    },
    /* ─── BILINGÜE ─── */
    bilingual: {
      chip:    'Programa Bilingüe',
      title:   'Dos idiomas,',
      titleEm: 'infinitas oportunidades',
      p:       'Nuestro programa garantiza fluidez real en español e inglés. No solo aprenden inglés: piensan, crean y sueñan en inglés.',
      f1:'Maestros nativos o certificados', f2:'Clases parcialmente en inglés',
      f3:'Actividades culturales bilingües', f4:'Evaluaciones en ambos idiomas',
      f5:'Preparación para certificaciones',
      cta: 'Quiero saber más',
    },
    /* ─── POR QUÉ ELEGIRNOS ─── */
    why: {
      chip: '¿Por qué nosotros?', title:'La diferencia que cambia vidas',
      r1t:'Ambiente seguro',     r1d:'Un espacio donde cada niño se siente protegido y valorado.',
      r2t:'Docentes apasionados',r2d:'Maestros dedicados al éxito personal y académico de cada alumno.',
      r3t:'Educación con valores',r3d:'Formamos personas íntegras. El carácter importa tanto como el conocimiento.',
      r4t:'Resultados reales',   r4d:'Nuestros egresados sobresalen con bases sólidas para su futuro.',
      r5t:'Familia integrada',   r5d:'Comunicación abierta y trabajo conjunto entre padres y maestros.',
      r6t:'Entorno inspirador',  r6d:'Instalaciones pensadas para el aprendizaje activo y la creatividad.',
    },
    /* ─── EQUIPO ─── */
    team: {
      chip: 'Nuestro Equipo',
      title:'Conoce a nuestro equipo',
      sub:  'Profesionales apasionados por la educación, comprometidos con el desarrollo integral de cada estudiante.',
      areaAdmin: 'Administración',
      areaProfesor: 'Profesores',
      areaCivil: 'Servicio Civil',
    },
    /* ─── CTA ─── */
    cta: {
      badge:'🎓 Inscripciones Abiertas',
      badgeClosed:'⏳ Inscripciones Cerradas',
      title:'Dale a tu hijo el mejor comienzo',
      sub:  'Cupos limitados. Asegura el lugar de tu hijo para el próximo ciclo escolar.',
      subClosed: 'Las inscripciones están cerradas. El próximo período abre en enero.',
      btn1: 'Inscribir ahora',
      btn1Closed: 'Notificarme en enero',
      btn2: 'WhatsApp directo',
    },
    /* ─── GALERÍA ─── */
    gallery: {
      chip: 'Galería', title:'La vida en nuestra escuela',
      sub:  'Momentos que capturan nuestra esencia: aprendizaje, alegría y comunidad.',
      l1:'Vida escolar', l2:'Clases', l3:'Actividades', l4:'Deportes', l5:'Arte',
    },
    field: {
      chip:'Cancha Sintética', title:'Cancha de Fútbol Rápido',
      sub:'Grama sintética de primera calidad, iluminación nocturna y espacio para tus eventos.',
      schedTitle:'Horarios de apertura', schedSub:'Disponible según el siguiente horario.',
      dayWeek:'Lun – Vie', dayWeekend:'Sáb – Dom',
      dayEvent:'Eventos', dayEventTime:'Reserva de día completo',
      available:'Disponible',
      priceTitle:'Tarifas', priceSub:'Precios por hora o por evento.',
      priceWeekLbl:'Lunes a Viernes', priceWeekSub:'3:00 PM – 11:00 PM',
      priceWkndLbl:'Sábado y Domingo', priceWkndSub:'7:00 AM – 11:00 PM',
      priceEvtLbl:'Eventos especiales', priceEvtSub:'Día completo (Sáb – Dom)',
      reserveTitle:'¡Reserva tu hora!',
      reserveSub:'Escríbenos por WhatsApp y confirmamos tu reservación al instante.',
      reserveBtn:'Reservar por WhatsApp', reserveNote:'Respuesta inmediata · Sin costo de reserva',
      amenity1:'Grama sintética', amenity2:'Iluminación nocturna',
      amenity3:'Torneos y eventos', amenity4:'Fútbol rápido',
    },
    /* ─── CONTACTO ─── */
    contact: {
      chip:       'Contacto',
      title:      'Hablemos sobre el futuro de tu hijo',
      p:          'Estamos aquí para responder todas tus preguntas. Escríbenos, llámanos o visítanos.',
      locLabel:   'Ubicación',      location: 'Gualjoco, Santa Bárbara, Honduras',
      phoneLabel: 'Teléfono / WhatsApp',
      emailLabel: 'Correo',
      hoursLabel: 'Horario',        hours: 'Lunes a viernes · 7:00 am – 4:00 pm',
    },
    /* ─── FORMULARIO ─── */
    form: {
      title:'Solicitar información', note:'Completa el formulario y te contactamos muy pronto.',
      nameLabel:'Nombre completo',  namePh:'Tu nombre completo',
      phoneLabel:'Teléfono / WhatsApp',
      emailLabel:'Correo electrónico',
      levelLabel:'Grado de interés',levelDef:'Selecciona un nivel',
      lvl1:'Prekínder', lvl2:'Kínder', lvl3:'1° – 3° Grado', lvl4:'4° – 6° Grado', lvl5:'7° – 9° Grado',
      msgLabel:'Mensaje (opcional)', msgPh:'¿Alguna pregunta específica?',
      submit:'Enviar solicitud', disc:'* Tu información es confidencial.',
      // Mensajes de validación:
      errName: 'Por favor ingresa tu nombre completo.',
      errPhone:'Por favor ingresa tu teléfono o WhatsApp.',
      errLevel:'Por favor selecciona el nivel educativo de interés.',
      sending: 'Enviando...',
    },
    /* ─── MAPA ─── */
    map: { label:'Encuéntranos en Gualjoco, Santa Bárbara, Honduras', ph:'Aquí va el mapa de Google Maps', sub:'Inserta el iframe con la ubicación exacta' },
    /* ─── FOOTER ─── */
    footer: {
      desc:'Formando líderes bilingües con valores desde Gualjoco, Honduras.',
      nav:'Navegación', levels:'Niveles', contact:'Contacto',
      rights:'Todos los derechos reservados', made:'Hecho con', for:'para Honduras',
    },
    /* ─── PLACEHOLDERS ─── */
    ph: { histImg:'Foto de la fundación', bilingual:'Foto de clase bilingüe' },
    /* ─── PAGOS ─── */
    pay: {
      chip: 'Pagos', title: 'Mensualidades y pagos',
      sub:  'Realiza tus pagos de forma rápida, segura y sin complicaciones.',
      bank: {
        title:       'Transferencia bancaria',
        sub:         'Depósito o transferencia directa a nuestra cuenta:',
        bankLabel:   'Banco',
        accountLabel:'Cuenta',
        holderLabel: 'Titular',
        typeLabel:   'Tipo',
        accountType: 'Cuenta de ahorros',
        sendProof:   'Enviar comprobante por WhatsApp',
        hint:        'Envía foto del comprobante para confirmar tu pago.',
      },
      wa: {
        title: 'Pago por WhatsApp',
        sub:   'Coordina tu pago directamente con administración. Rápido y con confirmación inmediata.',
        step1: 'Realiza tu depósito o transferencia',
        step2: 'Toma foto al comprobante',
        step3: 'Envíalo por WhatsApp',
        step4: 'Recibe tu confirmación de pago',
        btn:   'Contactar administración',
      },
      soon: {
        badge:  'Próximamente',
        title:  'Pago en línea',
        sub:    'Estamos trabajando para que puedas pagar con tarjeta o billetera digital directamente desde el sitio.',
        mobile: 'Billeteras digitales',
        btn:    'En desarrollo',
      },
    },
    /* ─── WA & TOAST ─── */
    wa:    { tip:'¡Escríbenos!' },
    toast: { msg:'¡Gracias! Nos pondremos en contacto pronto.' },
  },


  /* ════════════════════════════════════════════════════════
     TRADUCCIONES EN INGLÉS
     Edita los valores para cambiar el contenido en inglés
  ════════════════════════════════════════════════════════ */
  en: {
    nav: {
      schoolName: 'Building a Happy World',
      tagline:    'Bilingual School',
      home:       'Home',
      history:    'History',
      levels:     'Levels',
      bilingual:  'Bilingual',
      team:       'Team',
      gallery:    'Gallery',
      field:      'Football Field',
      enroll:     'Enroll',
      payments:   'Payments',
    },
    hero: {
      location: 'Gualjoco, Santa Bárbara, Honduras',
      title1:   'We educate with love.',
      title2:   'We prepare for the world.',
      subtitle: 'Excellence bilingual education from Pre-K through 9th Grade. Where every child discovers their potential and builds a bright future.',
      cta1:     'Request information',
      cta2:     'Learn our story',
      stat1:    'Years of excellence',
      stat2:    'Available grades',
      stat3:    'Languages of learning',
      scroll:   'Discover',
    },
    values: { v1:'Values', v2:'Bilingualism', v3:'Excellence', v4:'Community', v5:'Innovation' },
    history: {
      chip:    'Our Story',
      title:   'A dream that became a home',
      p1: 'It all started with a dream: to provide the children of Gualjoco with quality bilingual education, without having to leave their community. A group of passionate educators joined that vision and opened the doors of Building a Happy World.',
      p2: 'What began with a few students and a lot of love is now an institution recognized for its academic excellence, family atmosphere, and commitment to bilingualism from the very first years of life.',
      founded: 'Founded',
      f1name:  'Founder\'s Name',     // ← EDITA
      f1role:  'Co-founder · Principal',
      f2name:  'Founder\'s Name',     // ← EDITA
      f2role:  'Co-founder · Academic Director',
      cta:     'Schedule a visit',
    },
    levels: {
      chip: 'Educational Offer',
      title:'Educational levels',
      sub:  'We accompany every stage of your child\'s growth with programs designed for their age, pace and potential.',
      l1: { name:'Pre-K',      age:'3 – 4 years old',  desc:'Play, exploration and first learning in a warm bilingual environment.',        f1:'Early stimulation', f2:'English from day one', f3:'Socialization & values' },
      l2: { name:'Kindergarten',age:'5 – 6 years old', desc:'Comprehensive preparation with bilingual literacy and emotional development.', f1:'Pre-reading & writing', f2:'Fun math', f3:'Art & music' },
      l3: { name:'Elementary', age:'1st – 6th grade',  desc:'Solid academic foundation with emphasis on science, technology and bilingualism.',f1:'Intensive bilingualism', f2:'Science & technology', f3:'Sports & community' },
      l4: { name:'Middle School',age:'7th – 9th grade',desc:'Leadership training with advanced English and critical thinking.',              f1:'Advanced English', f2:'Vocational guidance', f3:'Projects & leadership' },
    },
    bilingual: {
      chip:    'Bilingual Program',
      title:   'Two languages,',
      titleEm: 'infinite opportunities',
      p:       'Our program guarantees real fluency in both Spanish and English from the very first years. They don\'t just learn English — they think, create, and dream in English.',
      f1:'Native or certified English teachers', f2:'Partial English instruction in class',
      f3:'Bilingual cultural activities', f4:'Assessments in both languages',
      f5:'Preparation for international certifications',
      cta: 'Learn more',
    },
    why: {
      chip: 'Why us?', title:'The difference that changes lives',
      r1t:'Safe environment', r1d:'A space where every child feels protected and valued.',
      r2t:'Passionate teachers', r2d:'Educators dedicated to each student\'s personal and academic success.',
      r3t:'Values-based education', r3d:'We form people of integrity. Character matters as much as knowledge.',
      r4t:'Real results', r4d:'Our graduates excel with a solid foundation for their future.',
      r5t:'Engaged families', r5d:'Open communication and teamwork between parents and teachers.',
      r6t:'Inspiring environment', r6d:'Facilities designed for active learning, creativity and wellbeing.',
    },
    team: {
      chip: 'Our Team',
      title:'Meet our team',
      sub:  'Passionate education professionals committed to the integral development of every student.',
      areaAdmin: 'Administration',
      areaProfesor: 'Teachers',
      areaCivil: 'Civil Service',
    },
    cta: {
      badge:'🎓 Enrollment Open',
      badgeClosed:'⏳ Enrollment Closed',
      title:'Give your child the best start',
      sub:  'Limited spots available. Secure your child\'s place for the next school year.',
      subClosed: 'Enrollment is currently closed. The next period opens in January.',
      btn1: 'Enroll now',
      btn1Closed: 'Notify me in January',
      btn2: 'WhatsApp direct',
    },
    gallery: {
      chip: 'Gallery', title:'Life at our school',
      sub:  'Moments that capture our essence: learning, joy and community.',
      l1:'School life', l2:'Classes', l3:'Activities', l4:'Sports', l5:'Arts',
    },
    field: {
      chip:'Synthetic Field', title:'Football Field',
      sub:'Top-quality synthetic turf, night lighting and space for your events.',
      schedTitle:'Opening hours', schedSub:'Available according to the following schedule.',
      dayWeek:'Mon – Fri', dayWeekend:'Sat – Sun',
      dayEvent:'Events', dayEventTime:'Full day reservation',
      available:'Available',
      priceTitle:'Rates', priceSub:'Hourly or full-day event pricing.',
      priceWeekLbl:'Monday to Friday', priceWeekSub:'3:00 PM – 11:00 PM',
      priceWkndLbl:'Saturday & Sunday', priceWkndSub:'7:00 AM – 11:00 PM',
      priceEvtLbl:'Special events', priceEvtSub:'Full day (Sat – Sun)',
      reserveTitle:'Book your slot!',
      reserveSub:'Message us on WhatsApp and we will confirm your reservation instantly.',
      reserveBtn:'Reserve via WhatsApp', reserveNote:'Instant reply · No booking fee',
      amenity1:'Synthetic turf', amenity2:'Night lighting',
      amenity3:'Tournaments & events', amenity4:'Fast football',
    },
    contact: {
      chip:       'Contact',
      title:      'Let\'s talk about your child\'s future',
      p:          'We are here to answer all your questions. Write to us, call us or visit us.',
      locLabel:   'Location',    location: 'Gualjoco, Santa Bárbara, Honduras',
      phoneLabel: 'Phone / WhatsApp',
      emailLabel: 'Email',
      hoursLabel: 'Office hours', hours: 'Monday to Friday · 7:00 am – 4:00 pm',
    },
    form: {
      title:'Request information', note:'Fill out the form and we will contact you soon.',
      nameLabel:'Full name',    namePh:'Your full name',
      phoneLabel:'Phone / WhatsApp',
      emailLabel:'Email address',
      levelLabel:'Grade of interest', levelDef:'Select a level',
      lvl1:'Pre-K', lvl2:'Kindergarten', lvl3:'1st – 3rd Grade', lvl4:'4th – 6th Grade', lvl5:'7th – 9th Grade',
      msgLabel:'Message (optional)', msgPh:'Any specific questions?',
      submit:'Send request', disc:'* Your information is confidential.',
      errName: 'Please enter your full name.',
      errPhone:'Please enter your phone number or WhatsApp.',
      errLevel:'Please select the grade level of interest.',
      sending: 'Sending...',
    },
    map: { label:'Find us in Gualjoco, Santa Bárbara, Honduras', ph:'Google Maps will go here', sub:'Insert the iframe with the exact location' },
    footer: {
      desc:'Shaping bilingual leaders with values from Gualjoco, Honduras.',
      nav:'Navigation', levels:'Levels', contact:'Contact',
      rights:'All rights reserved', made:'Made with', for:'for Honduras',
    },
    pay: {
      chip: 'Payments', title: 'Tuition & payments',
      sub:  'Make your payments quickly, safely and hassle-free.',
      bank: {
        title:       'Bank transfer',
        sub:         'Direct deposit or transfer to our account:',
        bankLabel:   'Bank',
        accountLabel:'Account',
        holderLabel: 'Account holder',
        typeLabel:   'Type',
        accountType: 'Savings account',
        sendProof:   'Send proof via WhatsApp',
        hint:        'Send a photo of the receipt to confirm your payment.',
      },
      wa: {
        title: 'Payment via WhatsApp',
        sub:   'Coordinate your payment directly with administration. Fast and with immediate confirmation.',
        step1: 'Make your deposit or transfer',
        step2: 'Take a photo of the receipt',
        step3: 'Send it via WhatsApp',
        step4: 'Receive your payment confirmation',
        btn:   'Contact administration',
      },
      soon: {
        badge:  'Coming soon',
        title:  'Online payment',
        sub:    'We are working so you can pay with card or digital wallet directly from the website.',
        mobile: 'Digital wallets',
        btn:    'In development',
      },
    },
    ph: { histImg:'Founding photo', bilingual:'Bilingual class photo' },
    wa:    { tip:'Message us!' },
    toast: { msg:'Thank you! We will get in touch soon.' },
  }
};


/* ═══════════════════════════════════════════════════════════════
   4. MOTOR DE TRADUCCIÓN — No es necesario modificar
   ═══════════════════════════════════════════════════════════════ */
let currentLang = 'es';

/** Obtiene un valor anidado del objeto de traducciones usando "a.b.c" */
function getTranslation(lang, key) {
  const keys = key.split('.');
  let val = translations[lang];
  for (const k of keys) {
    if (val === undefined) return key;
    val = val[k];
  }
  return (val !== undefined && val !== null) ? val : key;
}

/** Aplica todas las traducciones a los elementos data-i18n del DOM */
function applyTranslations(lang) {
  // Actualiza atributo lang del HTML
  document.documentElement.lang = lang;
  if (typeof updateCanchaLang === 'function') updateCanchaLang(lang);

  // Aplica textos
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    const text = getTranslation(lang, key);
    if (text !== key) el.textContent = text;
  });

  // Aplica placeholders de inputs/textareas
  document.querySelectorAll('[data-i18n-ph]').forEach(el => {
    const key = el.getAttribute('data-i18n-ph');
    const text = getTranslation(lang, key);
    if (text !== key) el.placeholder = text;
  });

  // Actualiza la grilla de docentes con el idioma correcto
  renderTeachers(lang);

  // Actualiza el estado visual del toggle
  const toggle = document.getElementById('langToggle');
  const lblEs = document.getElementById('lbl-es');
  const lblEn = document.getElementById('lbl-en');
  if (toggle) {
    toggle.setAttribute('aria-checked', lang === 'en' ? 'true' : 'false');
    toggle.classList.toggle('en-active', lang === 'en');
  }

  // Inscripciones — SIEMPRE al final para no ser sobreescrito
  if (typeof setupEnrollment === 'function') setupEnrollment();
  if (lblEs) lblEs.classList.toggle('active', lang === 'es');
  if (lblEn) lblEn.classList.toggle('active', lang === 'en');

  // Actualiza el mensaje de WhatsApp según el idioma
  updateWhatsAppLinks(lang);
}

/** Cambia el idioma con animación suave */
function switchLanguage(lang) {
  if (lang === currentLang) return;
  currentLang = lang;
  document.body.classList.add('lang-transition');
  applyTranslations(lang);
  setTimeout(() => document.body.classList.remove('lang-transition'), 300);
  // Guarda preferencia del usuario
  try { localStorage.setItem('bhw_lang', lang); } catch(e) {}
}

/** Configura el botón toggle de idioma */
function setupLangToggle() {
  const toggle = document.getElementById('langToggle');
  if (!toggle) return;
  toggle.addEventListener('click', () => {
    switchLanguage(currentLang === 'es' ? 'en' : 'es');
  });
}


/* ═══════════════════════════════════════════════════════════════
   5. RENDERIZADO DE DOCENTES
   ═══════════════════════════════════════════════════════════════ */
function renderTeachers(lang) {
  const grid = document.getElementById('teachersGrid');
  if (!grid) return;

  // Separar por área
  const admin = TEACHERS_DATA.filter(t => t.area === 'admin');
  const profesores = TEACHERS_DATA.filter(t => t.area === 'profesor');
  const civil = TEACHERS_DATA.filter(t => t.area === 'civil');

  const renderArea = (arr, areaKey, areaLabel) => {
    if (!arr.length) return '';
    return `
      <div class="team-area" data-area="${areaKey}">
        <h3 class="area-title" data-i18n="team.area${areaKey.charAt(0).toUpperCase() + areaKey.slice(1)}">${areaLabel}</h3>
        <div class="area-grid">
          ${arr.map((t, i) => {
            const role = (lang === 'en' && t.roleEN) ? t.roleEN : t.role;
            const desc = (lang === 'en' && t.descEN) ? t.descEN : t.desc;
            const photoHTML = t.photo
              ? `<img src="${t.photo}" alt="${t.name}" loading="lazy" />`
              : `<i class="ri-user-3-line"></i>`;
            return `
              <div class="teacher-card reveal-up" style="--delay:${i * 0.08}s">
                <div class="teacher-photo">${photoHTML}</div>
                <div class="teacher-body">
                  <p class="teacher-name">${t.name}</p>
                  <span class="teacher-role">${role}</span>
                  <p class="teacher-desc">${desc}</p>
                </div>
              </div>
            `;
          }).join('')}
        </div>
      </div>
    `;
  };

  grid.innerHTML = `
    ${renderArea(admin, 'admin', lang === 'en' ? 'Administration' : 'Administración')}
    ${renderArea(profesores, 'profesor', lang === 'en' ? 'Teachers' : 'Profesores')}
    ${renderArea(civil, 'civil', lang === 'en' ? 'Civil Service' : 'Servicio Civil')}
  `;

  // Reactiva el observer para los nuevos elementos
  observeRevealElements();
}


/* ═══════════════════════════════════════════════════════════════
   6. NAVBAR
   ═══════════════════════════════════════════════════════════════ */
function setupNavbar() {
  const navbar = document.getElementById('navbar');
  if (!navbar) return;

  const onScroll = () => {
    navbar.classList.toggle('scrolled', window.scrollY > 60);
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
}

function setupHamburger() {
  const hamburger = document.getElementById('hamburger');
  const navLinks  = document.getElementById('navLinks');
  if (!hamburger || !navLinks) return;

  hamburger.addEventListener('click', () => {
    const open = navLinks.classList.toggle('open');
    hamburger.classList.toggle('active', open);
    document.body.style.overflow = open ? 'hidden' : '';
  });

  navLinks.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('open');
      hamburger.classList.remove('active');
      document.body.style.overflow = '';
    });
  });

  document.addEventListener('click', e => {
    if (!navLinks.contains(e.target) && !hamburger.contains(e.target)) {
      navLinks.classList.remove('open');
      hamburger.classList.remove('active');
      document.body.style.overflow = '';
    }
  });
}

/** Resalta el enlace activo según la sección visible */
function setupActiveLink() {
  const sections = document.querySelectorAll('section[id]');
  const links    = document.querySelectorAll('.nav-link');

  const observer = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        const id = e.target.id;
        links.forEach(l => l.classList.toggle('active', l.getAttribute('href') === `#${id}`));
      }
    });
  }, { rootMargin: '-50% 0px -50% 0px' });

  sections.forEach(s => observer.observe(s));
}


/* ═══════════════════════════════════════════════════════════════
   7. ANIMACIONES AL SCROLL (Intersection Observer)
   ═══════════════════════════════════════════════════════════════ */
let revealObserver;

function observeRevealElements() {
  const targets = document.querySelectorAll('.reveal-up, .reveal-left, .reveal-right');
  if (!targets.length) return;

  if (revealObserver) revealObserver.disconnect();

  revealObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target;
        const delay = el.style.getPropertyValue('--delay') || '0s';
        el.style.transitionDelay = delay;
        el.classList.add('visible');
        revealObserver.unobserve(el);
      }
    });
  }, { threshold: 0.1 });

  targets.forEach(el => revealObserver.observe(el));
}


/* ═══════════════════════════════════════════════════════════════
   8. FORMULARIO
   ═══════════════════════════════════════════════════════════════ */
function setupForm() {
  const btn = document.getElementById('formSubmit');
  if (!btn) return;

  btn.addEventListener('click', () => {
    const t = translations[currentLang].form;
    const nombre = document.getElementById('formName')?.value.trim();
    const tel    = document.getElementById('formPhone')?.value.trim();
    const grado  = document.getElementById('formLevel')?.value;

    if (!nombre) { alert(t.errName);  return; }
    if (!tel)    { alert(t.errPhone); return; }
    if (!grado)  { alert(t.errLevel); return; }

    // Simula envío (reemplaza con tu integración real)
    btn.disabled = true;
    const originalHTML = btn.innerHTML;
    btn.innerHTML = `<i class="ri-loader-4-line"></i> ${t.sending}`;

    setTimeout(() => {
      btn.disabled = false;
      btn.innerHTML = originalHTML;

      // Limpia campos
      ['formName','formPhone','formEmail','formLevel','formMsg'].forEach(id => {
        const el = document.getElementById(id);
        if (el) el.value = '';
      });

      showToast();

      /*
       ── OPCIÓN: Redirigir al formulario a WhatsApp ──
       Descomenta el código de abajo para que al enviar, abra WhatsApp
       con un resumen del formulario:

      const msg =
        `*Nueva consulta — Building a Happy World*\n\n` +
        `👤 Nombre: ${nombre}\n📱 Tel: ${tel}\n📚 Grado: ${grado}`;
      window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`, '_blank');
      */

    }, 1600);
  });
}

function showToast() {
  const toast = document.getElementById('toast');
  if (!toast) return;
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 4500);
}


/* ═══════════════════════════════════════════════════════════════
   9. WHATSAPP
   ═══════════════════════════════════════════════════════════════ */
function updateWhatsAppLinks(lang) {
  const msg = lang === 'en' ? WHATSAPP_MESSAGE_EN : WHATSAPP_MESSAGE_ES;
  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`;

  const ids = ['waFab','waContact','waFooter','ctaWa'];
  ids.forEach(id => {
    const el = document.getElementById(id);
    if (el) el.href = url;
  });
}

function setupPhoneDisplay() {
  // Muestra el número formateado en contacto y footer
  const els = ['contactPhone','footerPhone'];
  els.forEach(id => {
    const el = document.getElementById(id);
    if (el) el.textContent = PHONE_DISPLAY;
  });
}


/* ═══════════════════════════════════════════════════════════════
   10. SCROLL SUAVE
   ═══════════════════════════════════════════════════════════════ */
function setupSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', e => {
      const id = link.getAttribute('href');
      if (id === '#') return;
      const target = document.querySelector(id);
      if (target) {
        e.preventDefault();
        const offset = (document.getElementById('navbar')?.offsetHeight || 72) + 8;
        window.scrollTo({ top: target.getBoundingClientRect().top + window.scrollY - offset, behavior: 'smooth' });
      }
    });
  });
}


/* ═══════════════════════════════════════════════════════════════
   11. SECCIÓN DE PAGOS
   ═══════════════════════════════════════════════════════════════ */

/** Rellena los datos bancarios desde PAYMENT_CONFIG */
function setupPaymentsDisplay() {
  const fields = {
    payBankName:      PAYMENT_CONFIG.bankName,
    payAccountNum:    PAYMENT_CONFIG.accountNumber,
    payAccountHolder: PAYMENT_CONFIG.accountHolder,
  };
  Object.entries(fields).forEach(([id, val]) => {
    const el = document.getElementById(id);
    if (el) el.textContent = val;
  });
}

/** Configura los botones de WhatsApp de la sección de pagos */
function setupPaymentButtons() {
  // Botón: Enviar comprobante (tarjeta bancaria)
  const payBankWa = document.getElementById('payBankWa');
  if (payBankWa) {
    payBankWa.addEventListener('click', () => {
      const msg = currentLang === 'en'
        ? PAYMENT_CONFIG.proofMessage_EN
        : PAYMENT_CONFIG.proofMessage_ES;
      window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`, '_blank');
    });
  }

  // Botón: Contactar administración (tarjeta WhatsApp)
  const payContactWa = document.getElementById('payContactWa');
  if (payContactWa) {
    payContactWa.addEventListener('click', () => {
      const msg = currentLang === 'en'
        ? PAYMENT_CONFIG.adminMessage_EN
        : PAYMENT_CONFIG.adminMessage_ES;
      window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`, '_blank');
    });
  }
}


/* ═══════════════════════════════════════════════════════════════
   12. DARK MODE
   ═══════════════════════════════════════════════════════════════ */
function setupDarkMode() {
  const btn  = document.getElementById('darkToggle');
  const icon = document.getElementById('darkIcon');
  if (!btn || !icon) return;

  /** Aplica o quita el tema oscuro */
  function applyTheme(dark) {
    document.body.classList.toggle('dark', dark);
    // Cambia el ícono: luna = modo claro activo, sol = modo oscuro activo
    icon.className = dark ? 'ri-sun-line' : 'ri-moon-line';
    btn.setAttribute('aria-label', dark ? 'Cambiar a modo claro' : 'Cambiar a modo oscuro');
  }

  // Restaura preferencia guardada
  let savedTheme = 'light';
  try { savedTheme = localStorage.getItem('bhw_theme') || 'light'; } catch(e) {}
  applyTheme(savedTheme === 'dark');

  // Click en el botón
  btn.addEventListener('click', () => {
    const isDark = document.body.classList.toggle('dark');
    icon.className = isDark ? 'ri-sun-line' : 'ri-moon-line';
    btn.setAttribute('aria-label', isDark ? 'Cambiar a modo claro' : 'Cambiar a modo oscuro');
    try { localStorage.setItem('bhw_theme', isDark ? 'dark' : 'light'); } catch(e) {}
  });
}


/* ═══════════════════════════════════════════════════════════════
   INICIALIZACIÓN — Se ejecuta cuando el DOM está listo
   ═══════════════════════════════════════════════════════════════ */

/* ═══════════════════════════════════════════════════════════════
   ⚽ CANCHA — Setup y soporte bilingüe
   ═══════════════════════════════════════════════════════════════ */
function setupCancha() {
  const f = FIELD_CONFIG;

  // Rellena precios y horarios desde FIELD_CONFIG
  const fill = {
    'fieldHoraSemana': f.horarios.semana_inicio + ' – ' + f.horarios.semana_fin,
    'fieldHoraFinde':  f.horarios.finde_inicio  + ' – ' + f.horarios.finde_fin,
  };
  Object.entries(fill).forEach(([id, val]) => {
    const el = document.getElementById(id);
    if (el) el.textContent = val;
  });

  // Botón reservar WhatsApp
  const btn = document.getElementById('fieldReserveBtn');
  if (btn) {
    btn.addEventListener('click', () => {
      const msg = currentLang === 'en' ? f.waMessage_EN : f.waMessage_ES;
      window.open('https://wa.me/' + WHATSAPP_NUMBER + '?text=' + encodeURIComponent(msg), '_blank');
    });
  }

  // Lightbox fotos
  const lightbox = document.getElementById('fieldLightbox');
  const lbImg    = document.getElementById('lbImg');
  const lbClose  = document.getElementById('lbClose');

  document.querySelectorAll('.field-gallery .fg-item').forEach(item => {
    item.addEventListener('click', () => {
      const img = item.querySelector('img');
      if (!img) return;
      lbImg.src = img.src;
      lightbox.classList.add('open');
    });
  });
  if (lbClose)  lbClose.addEventListener('click',  () => lightbox.classList.remove('open'));
  if (lightbox) lightbox.addEventListener('click', e => {
    if (e.target === lightbox) lightbox.classList.remove('open');
  });
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && lightbox) lightbox.classList.remove('open');
  });
}

function updateCanchaLang(lang) {
  const t = translations[lang] && translations[lang].field;
  if (!t) return;

  const f = FIELD_CONFIG;
  const isEN = lang === 'en';
  const perHour = isEN ? '/ hr'  : '/ hora';
  const perDay  = isEN ? '/ day' : '/ día';

  const map = {
    'fieldChip':         t.chip,
    'fieldTitle':        t.title,
    'fieldSub':          t.sub,
    'fieldSchedTitle':   t.schedTitle,
    'fieldSchedSub':     t.schedSub,
    'fieldDayWeek':      t.dayWeek,
    'fieldDayWeekend':   t.dayWeekend,
    'fieldDayEvent':     t.dayEvent,
    'fieldDayEventTime': t.dayEventTime,
    'fieldAvail1':       t.available,
    'fieldAvail2':       t.available,
    'fieldPriceTitle':   t.priceTitle,
    'fieldPriceSub':     t.priceSub,
    'fieldPriceWeekLbl': t.priceWeekLbl,
    'fieldPriceWeekSub': t.priceWeekSub,
    'fieldPriceWkndLbl': t.priceWkndLbl,
    'fieldPriceWkndSub': t.priceWkndSub,
    'fieldPriceEvtLbl':  t.priceEvtLbl,
    'fieldPriceEvtSub':  t.priceEvtSub,
    'fieldReserveTitle': t.reserveTitle,
    'fieldReserveSub':   t.reserveSub,
    'fieldReserveBtnTxt':t.reserveBtn,
    'fieldReserveNote':  t.reserveNote,
    'fieldAmenity1':     t.amenity1,
    'fieldAmenity2':     t.amenity2,
    'fieldAmenity3':     t.amenity3,
    'fieldAmenity4':     t.amenity4,
    'fieldPriceSemana':  f.currency + ' ' + f.prices.hora_semana + ' ' + perHour,
    'fieldPriceFinde':   f.currency + ' ' + f.prices.hora_finde  + ' ' + perHour,
    'fieldPriceEvento':  f.currency + ' ' + f.prices.evento_dia  + ' ' + perDay,
  };

  Object.entries(map).forEach(([id, text]) => {
    const el = document.getElementById(id);
    if (el) el.textContent = text;
  });

  // Navbar link
  const navLink = document.getElementById('navFieldLink');
  if (navLink) navLink.textContent = isEN ? '⚽ Football Field' : '⚽ Cancha de Fútbol';

  // Footer link
  const footerLink = document.getElementById('footerFieldLink');
  if (footerLink) footerLink.textContent = isEN ? 'Football Field' : 'Cancha de Fútbol';
}


/* ═══════════════════════════════════════════════════════════════
   INSCRIPCIONES — Lógica automática por fecha
   ═══════════════════════════════════════════════════════════════
   Abiertas: enero (mes 1) y febrero (mes 2)
   Cerradas: resto del año
   No requiere ningún cambio manual — se actualiza solo.
   ═══════════════════════════════════════════════════════════════ */
function isEnrollmentOpen() {
  const month = new Date().getMonth() + 1; // 1=enero … 12=diciembre
  return month === 1 || month === 2;
}

function setupEnrollment() {
  const open = isEnrollmentOpen();
  const t    = translations[currentLang].cta;

  // Badge
  const badge = document.getElementById('enrollBadge');
  if (badge) {
    badge.textContent = open ? t.badge : t.badgeClosed;
    badge.classList.toggle('badge-open',   open);
    badge.classList.toggle('badge-closed', !open);
  }

  // Subtítulo de la sección CTA
  const sub = document.getElementById('ctaSub');
  if (sub) sub.textContent = open ? t.sub : t.subClosed;

  // Botón principal
  const btn1 = document.getElementById('ctaBtn1');
  if (btn1) btn1.textContent = open ? t.btn1 : t.btn1Closed;

  // Sección CTA — clase para estilos
  const ctaSection = document.getElementById('inscribete');
  if (ctaSection) {
    ctaSection.classList.toggle('enrollment-open',   open);
    ctaSection.classList.toggle('enrollment-closed', !open);
  }
}

document.addEventListener('DOMContentLoaded', () => {

  // Restaura preferencia de idioma guardada
  let savedLang = 'es';
  try { savedLang = localStorage.getItem('bhw_lang') || 'es'; } catch(e) {}
  currentLang = savedLang;

  // Renderiza docentes
  renderTeachers(currentLang);

  // Aplica traducciones iniciales
  applyTranslations(currentLang);

  // Configura todos los módulos
  setupNavbar();
  setupHamburger();
  setupActiveLink();
  setupLangToggle();
  observeRevealElements();
  setupForm();
  setupSmoothScroll();
  setupPhoneDisplay();
  setupPaymentsDisplay();
  setupPaymentButtons();
  setupDarkMode();
  setupEnrollment();
  setupCancha();
  updateCanchaLang(currentLang);

  // Log de bienvenida
  console.log(
    '%c 🌱 Building a Happy World v2.1 ',
    'background:#163A6B;color:#F0C940;font-size:13px;font-weight:bold;padding:8px 16px;border-radius:8px;'
  );
  console.log(
    '%c Edita WHATSAPP_NUMBER, PAYMENT_CONFIG y TEACHERS_DATA en la parte superior de script.js ',
    'color:#475569;font-size:11px;'
  );
});
