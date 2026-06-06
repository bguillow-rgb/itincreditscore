# ITINCreditScore.com — Migration & Launch Guide

How to take this Astro site live on `itincreditscore.com` while preserving the
SEO value of the old site. Same pattern as site 1 (`~/Itin/web/docs/MIGRATION.md`).
Do these in order.

## 0. The plan in one paragraph

The new static site is built in `/web` and published to `/docs` (GitHub Pages
serves from `main` → `/docs`). We put **Cloudflare (free)** in front of the
domain for DNS + **301 redirects**, so the old URLs pass their ranking signal to
the matching new pages instead of dying as 404s. Nothing about the old URLs
should 404 after cutover.

## 1. What's currently indexed (Day-1 truth, 2026-06-06)

A `site:itincreditscore.com` check on 2026-06-06 returns exactly **3 legacy URLs**
— these are the only pages Google has and the only ones carrying any signal, so
all three MUST 301 (see `redirects.csv`):

| Old URL | New target | Why |
|---|---|---|
| `/credit-reports-with-itin` | `/credit-bureaus-and-itin` | **The only page that ranks** (~#7 for "credit reports with itin" in the manual Day-1 snapshot). Highest-priority redirect — do not lose this signal. |
| `/f/understanding-itin-and-your-credit-score` | `/itin-credit-score-guide` | Old mission/explainer page → the new pillar. |
| `/start-building-now` | `/build-credit-history-with-itin` | "Why build credit with an ITIN" CTA page → the matching cluster. |

Plus a catch-all `/f/* → /itin-credit-score-guide` after the specific rules, so
any other old Strikingly-style `/f/...` URL that surfaces later 301s to the
pillar instead of 404ing.

> **Reconcile against GSC once verified.** This list is from a public `site:`
> search, which is not exhaustive. After the domain is GSC-verified, pull the
> **Pages report** (and the old sitemap if recoverable) and add any indexed URL
> not already mapped here before cutover.

## 2. Publish to GitHub Pages, put Cloudflare in front, stage the 301s

Identical to site 1 — follow `~/Itin/web/docs/MIGRATION.md` §1–§3, substituting
`itincreditscore.com`. The redirect map lives in `redirects.csv` next to this
file. Stage every row in **Cloudflare → Rules → Redirect Rules → Bulk
Redirects** as a **301 (permanent)**, specific rules first, catch-all last.

## 3. Post-launch SEO tasks (do the day you cut over)

1. **Google Search Console** — add `itincreditscore.com` (domain property),
   verify via DNS TXT in Cloudflare or the `PUBLIC_GSC_VERIFICATION` meta tag.
2. **Submit the sitemap**: `https://itincreditscore.com/sitemap-index.xml`.
3. **URL Inspection** — request re-crawl of the homepage + pillar/cluster pages.
4. **Confirm redirects** — spot-check each old URL returns `301`:
   `curl -sI https://itincreditscore.com/credit-reports-with-itin | head -3`
5. **Bing Webmaster Tools** — add the site + sitemap (feeds ChatGPT/Copilot).

GA4 is already live (`PUBLIC_GA4_ID = G-HDM7H448J9`, property 413651450).
