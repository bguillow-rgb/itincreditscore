// Site-wide constants. Single source of truth for the Astro site.
// Update these as the project evolves; schema, footer, nav, llms.txt,
// analytics, and monetization all read from here.

export const SITE = {
  name: 'ITIN Credit Score',
  legalName: 'ITINCreditScore.com',
  tagline: 'Build & Check Your Credit Score With an ITIN',
  taglineEs: 'Puntaje de Crédito y Construcción de Crédito para Personas con ITIN',
  description:
    'ITINCreditScore.com helps ITIN holders build a U.S. credit history, check their credit score without an SSN, and raise it — covering the credit bureaus, credit-builder tools, and what actually moves your score. Independent guides and tools matching.',
  descriptionEs:
    'ITINCreditScore.com ayuda a las personas con ITIN a construir un historial crediticio en EE. UU., revisar su puntaje de crédito sin Seguro Social y subirlo — cubriendo los burós de crédito, las herramientas para construir crédito y lo que realmente mueve tu puntaje. Guías independientes y conexión con herramientas.',
  url: 'https://itincreditscore.com',
  locale: 'en-US',
  supportEmail: 'hello@itincreditscore.com',

  // Publisher / author — used for Person and Organization schema. The
  // /about page is the canonical entity anchor. Fill bio details on /about.
  founder: {
    name: 'Bob Guillow',
    role: 'Founder & Editor',
    sameAs: [
      // Add LinkedIn / X when ready. Empty entries are filtered before render.
      // 'https://www.linkedin.com/in/...',
    ],
  },

  // Analytics + tracking. Values come from env vars at build time so local
  // builds and forks don't fire analytics or ads.
  analytics: {
    ga4Id: import.meta.env.PUBLIC_GA4_ID ?? '',
    gscVerification: import.meta.env.PUBLIC_GSC_VERIFICATION ?? '',
    indexNowKey: import.meta.env.PUBLIC_INDEXNOW_KEY ?? '',
  },

  // Monetization. All optional — features no-op until configured.
  monetize: {
    // Google AdSense publisher ID, e.g. 'ca-pub-0000000000000000'. Set via
    // PUBLIC_ADSENSE_ID at build time. Empty disables all ad slots.
    adsenseId: import.meta.env.PUBLIC_ADSENSE_ID ?? '',
    // Lead form endpoint. Use a static-friendly handler (Formspree,
    // Web3Forms, Basin). The form POSTs here. Empty shows a mailto fallback.
    // e.g. 'https://formspree.io/f/xxxxxxx'
    leadFormEndpoint: import.meta.env.PUBLIC_LEAD_ENDPOINT ?? '',
    // Primary affiliate "apply / get matched" destination used by CTAs that
    // route off-site. Empty routes to /apply.
    affiliateApplyUrl: import.meta.env.PUBLIC_AFFILIATE_APPLY_URL ?? '',
  },

  // Brand — modern, trustworthy fintech. Green = growth/financial health.
  theme: {
    bg: '#FFFFFF',
    surface: '#F1F8F3',
    surfaceAlt: '#E3F0E8',
    text: '#0F2418',
    muted: '#4F6256',
    primary: '#15803D',
    primaryDark: '#166534',
    accent: '#2563EB',
    accentDark: '#1D4ED8',
    border: '#DDEAE1',
  },
};

// Credit-score product clusters — the money-page topology. Each links to a
// cluster hub. Used on the homepage grid and in nav/footer.
export const PRODUCTS = [
  {
    slug: 'check-credit-score-with-itin',
    label: 'Check Your Score',
    labelEs: 'Revisa tu Puntaje',
    blurb: 'See your credit score using an ITIN.',
    blurbEs: 'Consulta tu puntaje de crédito usando un ITIN.',
    icon: 'search',
  },
  {
    slug: 'build-credit-history-with-itin',
    label: 'Build Credit History',
    labelEs: 'Construir Historial',
    blurb: 'Start a U.S. credit file with an ITIN.',
    blurbEs: 'Inicia tu expediente de crédito en EE. UU. con un ITIN.',
    icon: 'chart',
  },
  {
    slug: 'improve-credit-score',
    label: 'Improve Your Score',
    labelEs: 'Mejora tu Puntaje',
    blurb: 'Raise your score step by step.',
    blurbEs: 'Sube tu puntaje paso a paso.',
    icon: 'shield',
  },
  {
    slug: 'credit-bureaus-and-itin',
    label: 'Credit Bureaus & ITIN',
    labelEs: 'Burós de Crédito e ITIN',
    blurb: 'Experian, Equifax & TransUnion with an ITIN.',
    blurbEs: 'Experian, Equifax y TransUnion con un ITIN.',
    icon: 'briefcase',
  },
  {
    slug: 'credit-builder-loans',
    label: 'Credit-Builder Loans',
    labelEs: 'Préstamos para Crédito',
    blurb: 'Build credit with a small installment loan.',
    blurbEs: 'Construye crédito con un pequeño préstamo a plazos.',
    icon: 'cash',
  },
  {
    slug: 'how-to-get-an-itin',
    label: 'How to Get an ITIN',
    labelEs: 'Cómo Obtener un ITIN',
    blurb: 'Apply for an ITIN with the IRS.',
    blurbEs: 'Solicita tu ITIN ante el IRS.',
    icon: 'doc',
  },
];

export const NAV = [
  { label: 'Home', labelEs: 'Inicio', href: '/' },
  { label: 'Credit Score Guide', labelEs: 'Guía de Puntaje', href: '/itin-credit-score-guide' },
  { label: 'Build Credit', labelEs: 'Construir Crédito', href: '/build-credit-history-with-itin' },
  { label: 'Guides', labelEs: 'Guías', href: '/articles' },
  { label: 'About', labelEs: 'Nosotros', href: '/about' },
];

export const NAV_CTA = { label: 'Start building credit', labelEs: 'Empieza a construir crédito', href: '/apply' };
