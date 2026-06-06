import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import mdx from '@astrojs/mdx';

export default defineConfig({
  site: 'https://itincreditscore.com',
  trailingSlash: 'never',
  build: { format: 'file' }, // Generates /about.html, /apply.html, etc.
  // Legacy URLs from the pre-Astro site that Google still indexes/ranks but that
  // now 404 (the site was rebuilt onto Astro with new paths). Each maps to its
  // closest live-intent equivalent so the ~16k cumulative impressions those URLs
  // earned consolidate onto a live page instead of bleeding into 404s. The
  // static build emits a meta-refresh + canonical redirect HTML per source.
  // The big one (/credit-reports-with-itin, ~10.5k impr) is consolidated to the
  // check-score page, which already covers pulling your report — revisit if we
  // later build a dedicated credit-reports money page.
  redirects: {
    '/credit-reports-with-itin': '/check-credit-score-with-itin',
    '/f/understanding-itin-and-your-credit-score': '/itin-credit-score-guide',
    '/start-building-now': '/build-credit-history-with-itin',
    '/f/starting-your-credit-journey-with-an-itin': '/build-credit-history-with-itin',
    '/guest-columnist': '/about',
    '/credit-agencies': '/credit-bureaus-and-itin',
    '/contact-us': '/contact',
    '/first-hand-story': '/about',
    '/f/boosting-your-financial-profile-with-itin': '/improve-credit-score',
    '/f/itin-not-just-for-taxes': '/how-to-get-an-itin',
    '/f/the-myths-around-itin-and-credit-scores': '/itin-credit-score-guide',
  },
  integrations: [
    sitemap({
      changefreq: 'weekly',
      priority: 0.7,
      lastmod: new Date(),
      filter: (page) => !/\/(404|thank-you)(\/|$)/.test(page),
    }),
    mdx(),
  ],
});
