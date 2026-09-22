# SEO context — ITIN Credit Score

> Source of truth for every SEO run in this project. Fill once; never re-ask.
> Site 3 of 3 in the Itin family. Central docs hub: ~/Itin/project-docs/.

## Surface
surface: web

## Basics
- business_name: ITIN Credit Score (itincreditscore.com)
- website_url: https://itincreditscore.com
- one_liner: Bilingual guides to checking & building a US credit score with an ITIN — bureaus, reports, and credit-builder tools, no SSN required.
- ideal_customer: ITIN holders checking/building credit (largely Spanish-speaking)
- primary_conversion: lead/affiliate → per-product Commission Junction deep links (money pages)

## Keywords
- want_to_rank: check credit score with itin, how to check credit score with itin, build credit history with itin, itin credit score, credit builder loan itin
- currently_rank: pos 32–43 on several; 78 queries, 729 impr (as of 2026-06-12 GSC) — LEADER, closest to page-2 breakthrough. Note: "how to check credit score with itin" = 183 impr but pos 70 (consolidate authority on /check-credit-score-with-itin).
- should_rank_but_dont: bureau-specific — "transunion credit report itin" (Bing pos ~5, 10 impr, 0 clicks as of 2026-09-21). DROPPED 2026-09-22: "annualcreditreport.com itin" and "experian credit report with itin" (zero Google impressions across 9 audits).
- also_track (added 2026-09-22; these families produce every real ranking and click, almost all on Bing):
  - Spanish checar/puntaje family: puntaje de credito con itin, como checar mi credito con itin gratis, cómo ver mi crédito con itin, cómo saber mi puntaje de crédito con itin gratis
  - ITIN → SSN transfer family (EN + ES): transfer itin credit history to ssn, how to merge credit reports with old itin and new ss number, si cambie de itin a ssn como actualizar mi credito

## Competitors
1. Established credit-education / personal-finance sites — win on domain age + authority

## Already tried
- Daily auto-published research articles; IndexNow + Google Indexing API daily
- Legacy URLs redirected in astro.config.mjs (/credit-reports-with-itin, /start-building-now)
- /check-credit-score-with-itin carries bureau-by-bureau + "ways to check" comparison tables
- Covered in cross-site audit 2026-06-12 (~/Itin/.seo/output/audit-2026-06-12.md)

## Working style
- quick wins first unless told otherwise
- every rec tagged impact (high/med/low) + time-to-result
- comparisons as spreadsheets
- flag uncertainty, never guess
- never re-ask this context
- never publish a personal byline — use the editorial-team byline (see auto-memory)

## Success + timeline
- Push the pos-32–43 cluster to page 2; concentrate internal links on /check-credit-score-with-itin; 2–4 wks to move, 3–6 mo authority

---
## Web-only
- stack: Astro static → /docs → GitHub Pages (repo bguillow-rgb/itincreditscore). Bilingual EN + /es (es-419).
- in_place: schema (Organization/WebSite/Article+Speakable/AboutPage/Service/CollectionPage), sitemap, robots.txt, llms.txt, GSC, GA4, hreflang en/es/x-default, ads.txt. Shared AdSense account. publisher.url → timberlineventuresllc.com; inLanguage locale-aware (es-419).
- live_clusters: pillar /itin-credit-score-guide; pages check-credit-score-with-itin, build-credit-history-with-itin, improve-credit-score, credit-builder-loans, credit-bureaus-and-itin, how-to-get-an-itin

---
## Accounts
- google_search_console: set up (Google SSO / browser). GSC_SA_KEY not set (headless report no-ops).
- google_analytics_4: set up
- google_ads_keyword_planner: not set up
- keyword_surfer_extension: not set up
- bing_webmaster_tools: set up — API key wired to seo-pulse (.secrets/bing_api_key.txt) 2026-06-20; feeds rankings skill Bing-position column + ChatGPT-citation surface
- serper_dev: set up — API key wired to seo-pulse (.secrets/serper_api_key.txt) 2026-06-20; live absolute-SERP rank (Google+Bing), 2,500 free credits, cached 12h
- semrush: not used (free path)
- ahrefs: not used (free path)
