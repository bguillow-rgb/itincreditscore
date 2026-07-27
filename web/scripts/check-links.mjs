#!/usr/bin/env node
// Fail the build if any internal link in the built output points at a page that
// doesn't exist.
//
// This exists because 208 in-body article links shipped pointing at un-prefixed
// paths (`/credit-builder-loan-with-itin` instead of `/articles/…`), all of them
// live 404s, and the ES copies inherited the EN paths so Spanish readers were
// sent to English 404s. GSC's "Not found (404)" bucket tripled before anyone
// noticed. A crawler finds these in a day; a human never does.
//
// Usage: node scripts/check-links.mjs [distDir]   (default: ./dist)

import fs from 'node:fs';
import path from 'node:path';

const distDir = path.resolve(process.argv[2] ?? 'dist');

if (!fs.existsSync(distDir)) {
  console.error(`check-links: no build output at ${distDir} — run \`npm run build\` first.`);
  process.exit(1);
}

/** Every path the built site actually serves. */
function collectServedPaths(root) {
  const served = new Set(['/']);
  const walk = (dir) => {
    for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
      const full = path.join(dir, entry.name);
      if (entry.isDirectory()) {
        if (entry.name === '_astro') continue;
        walk(full);
      } else if (entry.name.endsWith('.html')) {
        const rel = path.relative(root, full).split(path.sep).join('/');
        const p = '/' + rel.replace(/\.html$/, '');
        const clean = p.replace(/\/index$/, '') || '/';
        // GitHub Pages serves both the extensionless path and the .html file.
        served.add(clean);
        served.add(clean + '/');
        served.add('/' + rel);
      }
    }
  };
  walk(root);
  return served;
}

function collectHtmlFiles(root) {
  const out = [];
  const walk = (dir) => {
    for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
      const full = path.join(dir, entry.name);
      if (entry.isDirectory()) {
        if (entry.name === '_astro') continue;
        walk(full);
      } else if (entry.name.endsWith('.html')) {
        out.push(full);
      }
    }
  };
  walk(root);
  return out;
}

const SKIP_PREFIX = ['/_astro', '/og/', '/img/', '/fonts'];
const ASSET_RE = /\.(png|jpe?g|webp|avif|svg|xml|txt|ico|json|css|js|pdf|mjs|map)$/i;

const served = collectServedPaths(distDir);
const broken = new Map(); // href -> Set(source pages)

for (const file of collectHtmlFiles(distDir)) {
  const src = '/' + path.relative(distDir, file).split(path.sep).join('/').replace(/\.html$/, '');
  const html = fs.readFileSync(file, 'utf8');
  for (const m of html.matchAll(/href="(\/[^"#?]*)"/g)) {
    const href = m[1];
    if (SKIP_PREFIX.some((p) => href.startsWith(p))) continue;
    if (ASSET_RE.test(href)) continue;
    if (served.has(href) || served.has(href.replace(/\/$/, ''))) continue;
    if (!broken.has(href)) broken.set(href, new Set());
    broken.get(href).add(src);
  }
}

if (broken.size === 0) {
  console.log(`check-links: OK — every internal link in ${path.relative(process.cwd(), distDir) || 'dist'} resolves.`);
  process.exit(0);
}

const total = [...broken.values()].reduce((n, s) => n + s.size, 0);
console.error(`\ncheck-links: ${broken.size} broken internal link target(s), ${total} instance(s):\n`);
for (const [href, sources] of [...broken].sort((a, b) => b[1].size - a[1].size)) {
  const list = [...sources].sort();
  console.error(`  ${href}  <- ${list.length} page(s)`);
  for (const s of list.slice(0, 5)) console.error(`      ${s}`);
  if (list.length > 5) console.error(`      … +${list.length - 5} more`);
}
console.error('');
process.exit(1);
