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
  supportEmail: 'bguillow@gmail.com',

  // Publisher (legal operating entity) — drives Organization + Article
  // publisher schema and the footer copyright. The /about page is the
  // canonical entity anchor.
  publisher: {
    name: 'Timberline Ventures LLC',
    // Corporate entity site + its Wikidata item — the canonical publisher anchor.
    url: 'https://timberlineventuresllc.com',
    wikidata: 'https://www.wikidata.org/wiki/Q140082434',
    // Wikidata entities: this site (ITIN Credit Score) + the Timberline parent.
    // Closes the Knowledge-Graph sameAs chain on the Organization node.
    sameAs: [
      'https://www.wikidata.org/wiki/Q140083287',
      'https://www.wikidata.org/wiki/Q140082434',
    ] as string[],
    // Add LinkedIn / Crunchbase when ready. Empty entries filtered on render.
  },

  // Byline used on articles and the About page. An editorial-team author is a
  // legitimate E-E-A-T anchor when there is no single named author.
  editorial: {
    name: 'ITIN Credit Score Editorial Team',
    role: 'Editorial Team',
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
    // AdSense ad-unit slot IDs by position. Create each unit in the AdSense
    // dashboard and paste its numeric slot ID here via env. Empty = that slot
    // renders nothing. Strategy: AdSense lives on research-intent ARTICLES
    // (top = above fold, end = after body); MONEY pages get a single unit
    // below the fold (after the FAQ) so it only catches non-converters and
    // never cannibalizes lead/affiliate revenue.
    adSlots: {
      articleTop: import.meta.env.PUBLIC_ADSENSE_SLOT_ARTICLE_TOP ?? '',
      articleEnd: import.meta.env.PUBLIC_ADSENSE_SLOT_ARTICLE_END ?? '',
      moneyFooter: import.meta.env.PUBLIC_ADSENSE_SLOT_MONEY_FOOTER ?? '',
      // Post-conversion thank-you page — pure ad real estate, no lead/affiliate
      // to cannibalize, so it runs display ads at full density.
      thankYou: import.meta.env.PUBLIC_ADSENSE_SLOT_THANKYOU ?? '',
    },
    // Lead form endpoint. Use a static-friendly handler (Formspree,
    // Web3Forms, Basin). The form POSTs here. Empty shows a mailto fallback.
    // e.g. 'https://formspree.io/f/xxxxxxx'
    leadFormEndpoint: import.meta.env.PUBLIC_LEAD_ENDPOINT ?? '',
    // Web3Forms access key (public by design). Injected as the hidden
    // access_key field; the form only POSTs leads when this is set.
    web3formsKey: import.meta.env.PUBLIC_WEB3FORMS_KEY ?? '',
    // Primary affiliate "apply / get matched" destination used by CTAs that
    // route off-site. Empty routes to /apply.
    affiliateApplyUrl: import.meta.env.PUBLIC_AFFILIATE_APPLY_URL ?? '',
    // Per-product CJ advertiser deep links, keyed by money-page slug. A page's
    // CTA routes to its product-specific advertiser for max relevance/EPC, and
    // falls back to affiliateApplyUrl (then /apply) when its slot is empty.
    affiliateUrls: {
      'check-credit-score-with-itin': import.meta.env.PUBLIC_AFFILIATE_URL_CHECK ?? '',
      'build-credit-history-with-itin': import.meta.env.PUBLIC_AFFILIATE_URL_BUILD ?? '',
      'improve-credit-score': import.meta.env.PUBLIC_AFFILIATE_URL_IMPROVE ?? '',
      'credit-bureaus-and-itin': import.meta.env.PUBLIC_AFFILIATE_URL_BUREAUS ?? '',
      'credit-builder-loans': import.meta.env.PUBLIC_AFFILIATE_URL_BUILDER ?? '',
      'itin-credit-score-guide': import.meta.env.PUBLIC_AFFILIATE_URL_GUIDE ?? '',
    } as Record<string, string>,
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

// Pillar guide — the top of the hub-and-spoke. RelatedLinks links every
// cluster + article back up to it.
export const PILLAR = {
  slug: 'itin-credit-score-guide',
  label: 'ITIN Credit Score Guide',
  labelEs: 'Guía de Puntaje de Crédito ITIN',
};

export const NAV = [
  { label: 'Home', labelEs: 'Inicio', href: '/' },
  { label: 'Credit Score Guide', labelEs: 'Guía de Puntaje', href: '/itin-credit-score-guide' },
  { label: 'Build Credit', labelEs: 'Construir Crédito', href: '/build-credit-history-with-itin' },
  { label: 'Guides', labelEs: 'Guías', href: '/articles' },
  { label: 'About', labelEs: 'Nosotros', href: '/about' },
];

export const NAV_CTA = { label: 'Start building credit', labelEs: 'Empieza a construir crédito', href: '/apply' };

// Affiliate fallback chains by money-page slug. When a slug has no dedicated
// affiliate link set, resolution walks this chain (then the global apply URL).
// The credit-builder products (Self, Credit Strong) are the monetizable anchors
// here, so score/bureau-intent slugs fall back to those.
export const AFFILIATE_FALLBACKS: Record<string, string[]> = {
  'check-credit-score-with-itin': ['build-credit-history-with-itin', 'credit-builder-loans'],
  'credit-bureaus-and-itin': ['check-credit-score-with-itin', 'build-credit-history-with-itin'],
  'improve-credit-score': ['build-credit-history-with-itin', 'credit-builder-loans'],
  'build-credit-history-with-itin': ['credit-builder-loans'],
  'credit-builder-loans': ['build-credit-history-with-itin'],
};

// Resolve the off-site affiliate URL for a given money-page slug: its own link,
// then its fallback chain, then the global affiliateApplyUrl, then '' (callers
// route to /apply on empty). Pass a path like '/improve-credit-score' or
// '/es/improve-credit-score' — the locale prefix and leading slash are stripped.
export function affiliateUrlFor(pathOrSlug?: string): string {
  const slug = (pathOrSlug ?? '').replace(/^\/(es\/)?/, '').replace(/^\//, '');
  const urls = SITE.monetize.affiliateUrls;
  if (urls[slug]) return urls[slug];
  for (const fb of AFFILIATE_FALLBACKS[slug] ?? []) {
    if (urls[fb]) return urls[fb];
  }
  return SITE.monetize.affiliateApplyUrl || '';
}
