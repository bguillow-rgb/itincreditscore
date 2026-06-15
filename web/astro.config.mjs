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
  // NOTE: /credit-reports-with-itin (~10.5k cumulative impr) is now a dedicated
  // money page (pages/credit-reports-with-itin.astro + es/) — no longer redirected
  // — to capture credit-report intent on its own page instead of folding it into
  // the check-score page. Removed from the redirect map 2026-06-14.
  redirects: {
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
      // Emit reciprocal hreflang alternates (en / es / x-default) on every URL.
      // Our EN pages are un-prefixed (/foo) and ES live at /es/foo, which doesn't
      // fit @astrojs/sitemap's i18n option (it assumes every locale is path-
      // prefixed), so we set `links` manually per entry. This belt-and-suspenders
      // the in-<head> hreflang already on each page.
      serialize(item) {
        const { origin, pathname } = new URL(item.url);
        const path = pathname.replace(/\/$/, '') || '/';
        const enPath =
          path === '/es' ? '/' : path.startsWith('/es/') ? path.slice(3) : path;
        const enUrl = origin + (enPath === '/' ? '' : enPath);
        const esUrl = origin + (enPath === '/' ? '/es' : `/es${enPath}`);
        item.links = [
          { lang: 'en', url: enUrl },
          { lang: 'es', url: esUrl },
          { lang: 'x-default', url: enUrl },
        ];
        return item;
      },
    }),
    mdx(),
  ],
});
