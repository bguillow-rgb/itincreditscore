// Site-wide constants. Single source of truth for the Astro site.
// Update these as the project evolves; schema, footer, nav, llms.txt,
// analytics, and monetization all read from here.

export const SITE = {
  name: 'ITIN Credit Score',
  legalName: 'ITINCreditScore.com',
  tagline: 'Build a U.S. Credit Score With an ITIN, No SSN Needed',
  taglineEs: 'Puntaje de Crédito y Construcción de Crédito para Personas con ITIN',
  description:
    'ITINCreditScore.com helps ITIN holders build a U.S. credit history, check their credit score without an SSN, and raise it, covering the credit bureaus, credit-builder tools, and what actually moves your score. Independent guides and tools matching.',
  descriptionEs:
    'ITINCreditScore.com ayuda a las personas con ITIN a construir un historial crediticio en EE. UU., revisar su puntaje de crédito sin Seguro Social y subirlo, cubriendo los burós de crédito, las herramientas para construir crédito y lo que realmente mueve tu puntaje. Guías independientes y conexión con herramientas.',
  url: 'https://itincreditscore.com',
  locale: 'en-US',
  supportEmail: 'info@timberlineventuresllc.com',

  // Publisher (legal operating entity), drives Organization + Article
  // publisher schema and the footer copyright. The /about page is the
  // canonical entity anchor.
  publisher: {
    name: 'Timberline Ventures LLC',
    // Corporate entity site + its Wikidata item, the canonical publisher anchor.
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

  // Editorial byline identity. Bylines are NON-PERSONAL ("Editorial Team",
  // "Editorial Staff", "Research Desk"), never a human name (per Bob's rule,
  // 2026-07-07). Article schema `author` is the Organization, not a Person, so
  // there is no fake individual to anchor. Bios describe the real editorial
  // process and must never claim fabricated licenses/credentials (YMYL trust).
  // `name` must stay first in this block, the daily generator reads it by regex.
  editorial: {
    name: 'Editorial Team',
    role: 'ITIN Credit Score',
    bio: "ITIN Credit Score's guides are written and reviewed by our editorial team. We translate FICO scoring rules, bureau processes, and IRS, CFPB, and FTC guidance into clear, accurate, plain-English steps on building and improving U.S. credit scores for ITIN holders and foreign nationals. Every guide is researched against primary sources, FICO, the IRS, the Consumer Financial Protection Bureau, the Federal Trade Commission, and the credit bureaus' own documentation, and reviewed for accuracy before it goes live. We publish in both English and Spanish.",
    bioEs: "Las guías de ITIN Credit Score las escribe y revisa nuestro equipo editorial. Traducimos las reglas del puntaje FICO, los procesos de los burós y las guías del IRS, la CFPB y la FTC en pasos claros, precisos y en lenguaje sencillo sobre cómo construir y mejorar el puntaje de crédito en EE. UU. para personas con ITIN y extranjeros. Cada guía se investiga con fuentes primarias, FICO, el IRS, la Oficina para la Protección Financiera del Consumidor (CFPB), la Comisión Federal de Comercio (FTC) y la documentación de los propios burós de crédito, y se revisa antes de publicarse. Publicamos en inglés y español.",
    // Non-personal byline roster. Daily/seed generators rotate new posts across
    // these labels so the site doesn't read as written by one hand, without ever
    // attaching a human name. Every bio is honest about the real editorial
    // process; none claims a fabricated license or credential (YMYL trust rule).
    team: [
      {
        name: 'Editorial Team',
        role: 'Credit Scores & Building',
        bio: "ITIN Credit Score's editorial team writes and edits our plain-English guides on building and improving U.S. credit scores for ITIN holders and foreign nationals. Every guide is built from primary sources, FICO, the IRS, the CFPB, the FTC, and the credit bureaus' own documentation, and reviewed for accuracy before it is published. We publish in both English and Spanish.",
        bioEs: "El equipo editorial de ITIN Credit Score escribe y edita nuestras guías en lenguaje sencillo sobre cómo construir y mejorar el puntaje de crédito en EE. UU. para personas con ITIN y extranjeros. Cada guía se construye a partir de fuentes primarias, FICO, el IRS, el CFPB, la FTC y la documentación de los propios burós de crédito, y se revisa antes de publicarse. Publicamos en inglés y español.",
      },
      {
        name: 'Editorial Staff',
        role: 'Credit Reports & Bureaus',
        bio: "Our editorial staff covers credit reports, the three bureaus, and how an ITIN file is built and read. We focus on checking and monitoring reports, disputing errors, and how thin files mature, building each guide from the bureaus' own documentation and CFPB and FTC guidance. We publish in English and Spanish.",
        bioEs: "Nuestro equipo editorial cubre informes de crédito, los tres burós y cómo se construye y se lee un expediente con ITIN. Nos enfocamos en revisar y monitorear los informes, disputar errores y cómo maduran los expedientes nuevos, a partir de la documentación de los propios burós y las guías del CFPB y la FTC. Publicamos en inglés y español.",
      },
      {
        name: 'Research Desk',
        role: 'Scores & Credit Building',
        bio: "ITIN Credit Score's research desk covers building and improving FICO scores, credit-builder loans, and moving credit history to an SSN for ITIN holders. We dig into what each scoring factor weighs and how fast changes show up, checking every figure against FICO and bureau documentation before it runs. We publish in English and Spanish.",
        bioEs: "El equipo de investigación de ITIN Credit Score cubre cómo construir y mejorar los puntajes FICO, los préstamos para construir crédito y cómo trasladar el historial de crédito a un SSN para personas con ITIN. Investigamos el peso de cada factor del puntaje y la rapidez con que aparecen los cambios, verificando cada cifra con la documentación de FICO y de los burós. Publicamos en inglés y español.",
      },
    ],
  },

  // Analytics + tracking. Values come from env vars at build time so local
  // builds and forks don't fire analytics or ads.
  analytics: {
    ga4Id: import.meta.env.PUBLIC_GA4_ID ?? '',
    gscVerification: import.meta.env.PUBLIC_GSC_VERIFICATION ?? '',
    indexNowKey: import.meta.env.PUBLIC_INDEXNOW_KEY ?? '',
  },

  // Monetization. All optional, features no-op until configured.
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
      // Post-conversion thank-you page, pure ad real estate, no lead/affiliate
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
    // Awin affiliate display creatives (Credit Karma). The hero ad unit on the
    // homepage renders an Awin banner via CreditKarmaAd.astro. The embed URL is
    // built as cread.php / cshow.php?s=<creativeId>&v=<advertiserId>&q=<campaignId>&r=<publisherId>.
    // publisherId (r) and the Credit Karma advertiser (v) + campaign (q) are
    // account-level constants shared across all three sites; only the per-site
    // creativeId changes. Set the creative IDs in each homepage's <CreditKarmaAd />.
    awin: {
      publisherId: '2931103',
      advertiserId: '66532',
      campaignId: '475588',
      // Default ad topic for pages with no topic-specific keyword in their path
      // (homepage, /about, utility). Per-site so a generic page shows the most
      // on-brand creative: this site leads with credit scores → 'score'.
      defaultTopic: 'score',
      // Credit Karma display creatives under the campaign (all 300×250, shared
      // across all 3 sites, creatives are campaign-level). Keyed by topic so each
      // page renders the most relevant banner. Add new IDs here as more creatives
      // are pulled from the Awin dashboard to widen relevance granularity.
      creatives: {
        finance: '3641184', // general "all things finance", loans, mortgage, income
        cards: '3641203',   // credit cards
        score: '3597059',   // credit score & credit building
      } as Record<string, string>,
    },
  },

  // Brand identity: "Educational / calm / approachable guide". Green = growth
  // and financial health, paired with a calm blue secondary for a reassuring,
  // teacher-like feel. Soft, light surfaces and generous breathing room set
  // this site apart from its two sister sites (no shared system-font template).
  // Typography: Syne (geometric display) for headings, Source Sans 3 for body,
  // both loaded via Google Fonts with font-display:swap (see BaseLayout +
  // global.css). fontHead / fontBody mirror the --font-head / --font-body CSS
  // tokens; they replace the old shared --font system stack.
  // "Civic Record — The Report" identity (2026-07-17 redesign). Ink-on-paper
  // documentary system; graphite-blue accent (a credit report is a printed
  // black-and-white document); oxblood reserved for scam warnings only.
  theme: {
    bg: '#FBFAF7',
    surface: '#F1EFE9',
    surfaceAlt: '#F1EFE9',
    text: '#1A1D1A',
    muted: '#5C6159',
    primary: '#2E3A47',
    primaryDark: '#1F2933',
    accent: '#405264',
    accentDark: '#2E3A47',
    border: '#D8D4CB',
    flag: '#9A3324',
    fontHead: "'Newsreader Variable', Georgia, serif",
    fontBody: "'Public Sans Variable', system-ui, -apple-system, sans-serif",
  },
};

// Credit-score product clusters, the money-page topology. Each links to a
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

// Pillar guide, the top of the hub-and-spoke. RelatedLinks links every
// cluster + article back up to it.
export const PILLAR = {
  slug: 'itin-credit-score-guide',
  label: 'ITIN Credit Score Guide',
  labelEs: 'Guía de Puntaje de Crédito ITIN',
};

export const NAV = [
  { label: 'Home', labelEs: 'Inicio', href: '/' },
  { label: 'Credit Score Guide', labelEs: 'Guía de Puntaje', href: '/itin-credit-score-guide' },
  { label: 'Check Your Score', labelEs: 'Revisa tu Puntaje', href: '/check-credit-score-with-itin' },
  { label: 'Build Credit', labelEs: 'Construir Crédito', href: '/build-credit-history-with-itin' },
  { label: 'Calculator', labelEs: 'Calculadora', href: '/credit-readiness-calculator' },
  { label: 'Guides', labelEs: 'Guías', href: '/articles' },
  { label: 'About', labelEs: 'Nosotros', href: '/about' },
];

export const NAV_CTA = { label: 'Apply Here', labelEs: 'Aplica aquí', href: '/apply' };

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
// '/es/improve-credit-score', the locale prefix and leading slash are stripped.
export function affiliateUrlFor(pathOrSlug?: string): string {
  const slug = (pathOrSlug ?? '').replace(/^\/(es\/)?/, '').replace(/^\//, '');
  const urls = SITE.monetize.affiliateUrls;
  if (urls[slug]) return urls[slug];
  for (const fb of AFFILIATE_FALLBACKS[slug] ?? []) {
    if (urls[fb]) return urls[fb];
  }
  return SITE.monetize.affiliateApplyUrl || '';
}

// --- Credit Karma (Awin) ad targeting -------------------------------------
// Display CTA + alt copy per ad topic, EN + ES. The creative IDs themselves live
// in SITE.monetize.awin.creatives; this is the human-facing copy that wraps them.
export type CkTopic = 'finance' | 'cards' | 'score';
export const CK_AD_COPY: Record<CkTopic, { en: { cta: string; alt: string }; es: { cta: string; alt: string } }> = {
  finance: {
    en: { cta: 'See how much you qualify for here', alt: 'Credit Karma, all things finance at your fingertips' },
    es: { cta: 'Mira cuánto puedes calificar aquí', alt: 'Credit Karma, todas tus finanzas al alcance' },
  },
  cards: {
    en: { cta: 'Compare top credit cards here', alt: 'Credit Karma, find a credit card' },
    es: { cta: 'Compara las mejores tarjetas aquí', alt: 'Credit Karma, encuentra una tarjeta de crédito' },
  },
  score: {
    en: { cta: 'Check your credit score free here', alt: 'Credit Karma, see your credit score free' },
    es: { cta: 'Revisa tu puntaje de crédito gratis aquí', alt: 'Credit Karma, mira tu puntaje de crédito gratis' },
  },
};

// Map a page path/slug to the most relevant Credit Karma ad topic. Keyword match
// wins; otherwise the page falls back to the site's defaultTopic so every page
// shows an on-brand creative. Pass a path like '/itin-mortgage' or '/es/itin-cards'.
export function ckTopicForPath(pathOrSlug?: string): CkTopic {
  const s = (pathOrSlug ?? '').toLowerCase();
  if (/card/.test(s)) return 'cards';
  if (/score|credit-report|credit-bureau|build-credit|credit-history|improve-credit|credit-builder|check-credit/.test(s)) return 'score';
  if (/loan|mortgage|auto|personal|business|finance|income/.test(s)) return 'finance';
  return (SITE.monetize.awin.defaultTopic as CkTopic) ?? 'finance';
}

// Resolve the relevant Credit Karma creative + display copy for a page. Returns
// the creative ID (falling back to the default topic's creative if a topic has
// none configured) plus the localized CTA + alt text.
export function creditKarmaAdFor(pathOrSlug: string | undefined, lang: 'en' | 'es') {
  const topic = ckTopicForPath(pathOrSlug);
  const creatives = SITE.monetize.awin.creatives;
  const creativeId = creatives[topic] ?? creatives[SITE.monetize.awin.defaultTopic] ?? '';
  const copy = CK_AD_COPY[topic][lang];
  return { creativeId, cta: copy.cta, alt: copy.alt, topic };
}