// Renders every lesson plate (src/figures/lessons/*.jsx) to static SVG markup and
// reports plates that throw, have no title, point at unknown steps or unknown lessons.
// Usage: node scripts/check-figures.mjs [--quiet]
import { readdirSync, readFileSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { createElement } from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { createServer } from 'vite';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const quiet = process.argv.includes('--quiet');
const STEPS = new Set(['theory', 'formulas', 'stepbystep', 'simple_examples', 'real_examples', 'diagrams', 'practical_case']);

const server = await createServer({
  root,
  logLevel: 'error',
  server: { middlewareMode: true, hmr: false },
  appType: 'custom',
  optimizeDeps: { noDiscovery: true, include: [] },
});

let errors = 0;
let plates = 0;
const fail = (where, msg) => { errors++; console.log(`  ✗ ${where}: ${msg}`); };

try {
  const { default: Planche } = await server.ssrLoadModule('/src/components/figures/Planche.jsx');
  const { MODULE_LESSONS } = await server.ssrLoadModule('/src/data/lesson_registry.js');
  const lessonKeys = new Set(Object.values(MODULE_LESSONS).flat().map(e => e.key));

  const files = readdirSync(path.join(root, 'src/figures/lessons')).filter(f => f.endsWith('.jsx')).sort();
  for (const file of files) {
    const key = file.replace(/\.jsx$/, '');
    if (!lessonKeys.has(key)) fail(file, 'no lesson with this key in lesson_registry.js');
    // Labels and KaTeX notes subscript a single character: `w_max` must be written `w_{max}`.
    const source = readFileSync(path.join(root, 'src/figures/lessons', file), 'utf8');
    source.split('\n').forEach((line, i) => {
      if (/^\s*(\/\/|import |steps:|id:)/.test(line)) return;
      // `>a_{b}</Text>` is JSX text: React would evaluate {b}. Such labels must be JS strings.
      if (/>[^<>{}'"`]*[_^]\{[^}]*\}[^<>]*<\/Text>/.test(line)) fail(`${file}:${i + 1}`, 'label with _{…} written as JSX text: wrap it in {\'…\'}');
      // Ignores SCREAMING_CASE constants such as R_TOT.
      for (const m of line.replace(/\b[A-Z][A-Z0-9]*_[A-Z0-9_]+\b/g, '').matchAll(/[A-Za-zÀ-ÿα-ωΑ-Ω'´]_([A-Za-z0-9]{2,})/g)) {
        fail(`${file}:${i + 1}`, `multi-character subscript without braces: "${m[0]}" (write _{${m[1]}})`);
      }
    });
    let figs;
    try {
      figs = (await server.ssrLoadModule(`/src/figures/lessons/${file}`)).default;
    } catch (e) {
      fail(file, `module failed to load: ${e.message.split('\n')[0]}`);
      continue;
    }
    if (!Array.isArray(figs) || !figs.length) { fail(file, 'default export must be a non-empty array'); continue; }
    const ids = new Set();
    figs.forEach((fig, i) => {
      plates++;
      const where = `${key}[${i}] ${fig.id || ''}`;
      if (!fig.id || ids.has(fig.id)) fail(where, 'missing or duplicate id');
      ids.add(fig.id);
      if (!fig.title) fail(where, 'missing title');
      if (typeof fig.draw !== 'function') { fail(where, 'draw must be a function'); return; }
      for (const s of fig.steps || ['diagrams']) if (!STEPS.has(s)) fail(where, `unknown step "${s}"`);
      try {
        const html = renderToStaticMarkup(createElement(Planche, { fig: { steps: ['diagrams'], ...fig }, n: i + 1, total: figs.length }));
        if (/NaN|undefined/.test(html.replace(/<style[\s\S]*?<\/style>/g, ''))) fail(where, 'markup contains NaN or undefined');
      } catch (e) {
        fail(where, `render error: ${e.message.split('\n')[0]}`);
      }
    });
    if (!quiet) console.log(`${errors ? '·' : '✓'} ${key}: ${figs.length} plates`);
  }
  console.log(`\nChecked ${files.length} lessons with plates, ${plates} plates: ${errors} error(s).`);
} finally {
  await server.close();
}
process.exitCode = errors ? 1 : 0;
