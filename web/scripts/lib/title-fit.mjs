// Hard 60-character cap on article titles, enforced at generation time.
//
// BaseLayout's fits-in-60 guard (2026-08-17) only drops the brand suffix; it
// can't shorten a title that is already too long. The generator prompt used to
// ask for "55-65 char" titles and the translator had no limit at all, so the
// live site went from 29 to 45 over-60 titles between 2026-08-17 and 09-21
// (34 of them Spanish, up to 92 chars). Google and Bing cut those off in the
// snippet.
//
// fitTitle asks the model for a shorter title (keyword kept), checks the length
// itself, and falls back to a word-boundary trim so a title can never ship long.

export const TITLE_MAX = 60;

function wordTrim(title, max = TITLE_MAX) {
  if (title.length <= max) return title;
  let cut = title.slice(0, max + 1);
  cut = cut.slice(0, cut.lastIndexOf(' ')).replace(/[\s,:;&(\-¿¡]+$/, '');
  // Drop a dangling unmatched "(" / "¿" opener left by the cut.
  if ((cut.match(/\(/g) || []).length > (cut.match(/\)/g) || []).length) cut = cut.replace(/\s*\([^)]*$/, '');
  if (cut.includes('¿') && !cut.includes('?')) cut = cut.replace(/¿/g, '');
  // Never end on a function word ("...de todos los", "...for the").
  const STOP = /\s+(de|del|los|las|la|el|y|o|con|en|para|por|tu|su|un|una|the|a|an|and|or|of|to|for|with|in|on|your|every|all|todos|todas)$/i;
  while (STOP.test(cut)) cut = cut.replace(STOP, '');
  cut = cut.replace(/[\s,:;&]+$/, '');
  return cut.trim();
}

export async function fitTitle({ title, lang = 'en', apiKey, model = 'claude-sonnet-4-6', attempts = 2 }) {
  const t = String(title || '').trim();
  if (t.length <= TITLE_MAX) return t;
  if (!apiKey) return wordTrim(t);

  const langNote = lang === 'es' ? 'Write it in Latin-American Spanish (es-419), same as the input.' : 'Write it in English.';
  for (let i = 1; i <= attempts; i++) {
    try {
      const res = await fetch('https://api.anthropic.com/v1/messages', {
        method: 'POST',
        headers: { 'x-api-key': apiKey, 'anthropic-version': '2023-06-01', 'content-type': 'application/json' },
        body: JSON.stringify({
          model,
          max_tokens: 200,
          messages: [{
            role: 'user',
            content: `Shorten this SEO page title to at most ${TITLE_MAX - 6} characters (count every character, including spaces and accents). Keep the main search phrase and the meaning, drop filler words first, and keep "(2026)" only if it still fits. Do not add claims. No em or en dashes. ${langNote} Reply with the title only, no quotes.\n\nTitle (${t.length} chars): ${t}`,
          }],
        }),
      });
      if (!res.ok) throw new Error(`Anthropic API ${res.status}`);
      const data = await res.json();
      const out = (data.content || []).filter((b) => b.type === 'text').map((b) => b.text).join('').trim().replace(/^["']|["']$/g, '');
      if (out && out.length <= TITLE_MAX) {
        console.log(`fitTitle: ${t.length} -> ${out.length} chars: "${out}"`);
        return out;
      }
      console.error(`fitTitle: attempt ${i} returned ${out.length} chars, retrying`);
    } catch (e) {
      console.error(`fitTitle: attempt ${i} failed: ${e.message}`);
    }
  }
  const trimmed = wordTrim(t);
  console.error(`fitTitle: model could not shorten, word-trimmed to ${trimmed.length}: "${trimmed}"`);
  return trimmed;
}
