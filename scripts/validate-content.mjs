// Validates every lesson: step structure (the fields LessonCanvas renders), every LaTeX
// expression (rendered with the same KaTeX setup as the app), common LaTeX authoring
// mistakes, and source-level problems such as duplicate object keys.
//
//   npm run validate            → report, exit code 1 on errors
//   npm run validate -- --quiet → summary only
import { readFileSync, readdirSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';
import { transform } from 'esbuild';
import { renderMath, sanitizeLatexString, unitToLatex, collectMath } from '../src/utils/latex.js';
import { modules } from '../src/data/modules.js';
import { MODULE_LESSONS } from '../src/data/lesson_registry.js';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const DATA_DIR = path.join(ROOT, 'src', 'data');
const QUIET = process.argv.includes('--quiet');

const errors = [];
const warnings = [];
const err = (where, msg) => errors.push(`${where}: ${msg}`);
const warn = (where, msg) => warnings.push(`${where}: ${msg}`);

// ── Step schema: the fields each step type must provide ──────────────────────
const isStr = v => typeof v === 'string' && v.trim() !== '';
const arrayOf = (v, check) => Array.isArray(v) && v.length > 0 && v.every(check);

const STEP_RULES = {
  definition: s => isStr(s.content),
  importance: s => isStr(s.content),
  applications: s => arrayOf(s.examples, e => isStr(e.context) && isStr(e.text)),
  theory: s => isStr(s.content),
  formulas: s => arrayOf(s.formulas, f => isStr(f.name) && isStr(f.latex)),
  stepbystep: s => isStr(s.problem) && arrayOf(s.steps_demo, d => isStr(d.text)),
  units: s => arrayOf(s.table, r => isStr(r.grandeur) && isStr(r.si)),
  hypotheses: s => arrayOf(s.items, i => isStr(i) || (isStr(i.text) && ['warning', 'info', 'tip'].includes(i.type))),
  examples_simple: s => arrayOf(s.examples, e => isStr(e.title) && isStr(e.given) && isStr(e.find) && (isStr(e.solution_latex) || isStr(e.result))),
  examples_real: s => arrayOf(s.examples, e => isStr(e.context) && isStr(e.scenario) && isStr(e.lesson)),
  interactive_diagram: s => arrayOf(s.diagram_description, isStr),
  mistakes: s => arrayOf(s.items, i => isStr(i.mistake) && (isStr(i.trap) || isStr(i.fix))),
  tips: s => arrayOf(s.tips, isStr),
  norms: s => arrayOf(s.norms, n => isStr(n.code) && isStr(n.description)),
  exercises: s => arrayOf(s.exercises, e => isStr(e.text) && (isStr(e.answer_latex) || isStr(e.answer_text))),
  corrections: () => true,
  quiz: s => arrayOf(s.questions, q => isStr(q.question) && arrayOf(q.options, o => isStr(o.id) && isStr(o.text)) && q.options.some(o => o.id === q.correct)),
  exam: s => arrayOf(s.questions, isStr),
  interview: s => arrayOf(s.questions, q => isStr(q.question) && isStr(q.answer_hint)),
  practical: s => isStr(s.scenario) && isStr(s.description) && isStr(s.resolution_latex_1) && isStr(s.conclusion),
  summary: s => isStr(s.content),
  keypoints: s => arrayOf(s.points, isStr),
  self_assessment: s => arrayOf(s.objectives, isStr),
};
const STEP_ORDER = Object.keys(STEP_RULES);

// Keys that are identifiers or labels, never rendered as rich text.
const NON_TEXT_KEYS = new Set(['key', 'type', 'icon', 'id', 'difficulty', 'correct', 'slug', 'diagramType', 'level', 'duration', 'category']);

// ── LaTeX checks ─────────────────────────────────────────────────────────────
const BARE_COMMANDS = 'frac|dfrac|sqrt|cdot|cdots|ldots|times|div|approx|simeq|leq|geq|neq|le|ge|pm|alpha|beta|gamma|Gamma|delta|Delta|epsilon|varepsilon|eta|theta|Theta|lambda|Lambda|mu|nu|xi|pi|Pi|rho|sigma|Sigma|tau|phi|Phi|varphi|psi|Psi|omega|Omega|infty|partial|nabla|Rightarrow|rightarrow|Leftrightarrow|implies|iff|checkmark|sum|prod|int|oint|quad|qquad|mathrm|mathbf|textbf|overline|underbrace|vec|circ|sin|cos|tan|cot|arcsin|arccos|arctan|log|ln|exp|acute|grave';
const BARE_RE = new RegExp(`(?<![\\\\\\p{L}])(${BARE_COMMANDS})(?!\\p{L})`, 'gu');

function stripTextGroups(latex) {
  // Words inside \text{…} groups and subscript/superscript labels (p_{le}, T_{int}) are not commands.
  return latex
    .replace(/\\(?:text|textbf|textit|mathrm|operatorname|mathbf)\s*\{(?:[^{}]|\{[^{}]*\})*\}/g, ' ')
    .replace(/[_^]\{(?:[^{}]|\{[^{}]*\})*\}/g, ' ');
}

function inspectMath(where, raw, display) {
  if (/[\x00-\x08\x0B\x0C\x0E-\x1F]/.test(raw)) {
    err(where, `control character in LaTeX (a single backslash was eaten by JS escaping): ${JSON.stringify(raw.slice(0, 80))}`);
  }
  const { error, source } = renderMath(raw, display);
  if (error) {
    err(where, `KaTeX error: ${String(error.message).replace(/^KaTeX parse error: /, '').slice(0, 140)} ← ${JSON.stringify(source.slice(0, 100))}`);
    return;
  }
  const bare = stripTextGroups(source);
  const hits = [...new Set([...bare.matchAll(BARE_RE)].map(m => m[1]))];
  if (hits.length) warn(where, `command name without backslash (${hits.join(', ')}) ← ${JSON.stringify(source.slice(0, 100))}`);
  if (/(?<!\\)%/.test(source)) err(where, `unescaped % (KaTeX treats the rest as a comment) ← ${JSON.stringify(source.slice(0, 100))}`);
  if (/\\\\[a-zA-Z]/.test(source.replace(/\\begin\{[a-z*]+\}[\s\S]*?\\end\{[a-z*]+\}/g, ''))) {
    warn(where, `"\\\\" line break before a command outside an environment ← ${JSON.stringify(source.slice(0, 100))}`);
  }
}

function inspectText(where, text) {
  if (/[\x00-\x08\x0B\x0C\x0E-\x1F]/.test(text)) {
    err(where, `control character in text: ${JSON.stringify(text.slice(0, 80))}`);
  }
  for (const { latex, display } of collectMath(text)) inspectMath(where, latex, display);
  // LaTeX commands left outside $…$ show up as raw backslashes.
  const outside = text.replace(/\$\$[\s\S]+?\$\$/g, ' ').replace(/\$[^$]+?\$/g, ' ');
  const leftover = outside.match(/\\[a-zA-Z]{2,}/g);
  if (leftover) warn(where, `LaTeX outside $…$ (${[...new Set(leftover)].join(', ')})`);
  const singles = outside.match(/\$/g);
  if (singles && singles.length % 2 === 1) warn(where, 'unmatched $ delimiter');
}

function walk(value, where, key) {
  if (typeof value === 'string') {
    if (NON_TEXT_KEYS.has(key)) return;
    if (/latex/i.test(key)) inspectMath(where, value, true);
    else if (key === 'symbol') inspectMath(where, value, false);
    else if (key === 'unit') { const u = unitToLatex(value); if (u) inspectMath(where, u, false); }
    else inspectText(where, value);
  } else if (Array.isArray(value)) {
    value.forEach((v, i) => walk(v, `${where}[${i}]`, key));
  } else if (value && typeof value === 'object') {
    for (const [k, v] of Object.entries(value)) walk(v, `${where}.${k}`, k);
  }
}

function validateLesson(name, lesson) {
  if (!isStr(lesson.title)) err(name, 'missing title');
  if (!Array.isArray(lesson.steps) || lesson.steps.length !== 23) err(name, `expected 23 steps, found ${lesson.steps?.length}`);
  (lesson.steps || []).forEach((s, i) => {
    const where = `${name} step ${s?.id ?? i + 1} (${s?.type})`;
    const rule = STEP_RULES[s?.type];
    if (!rule) { err(where, 'unknown step type'); return; }
    if (!rule(s)) err(where, 'missing or malformed fields for this step type');
    if (s.type !== STEP_ORDER[i]) warn(where, `position ${i + 1} expected "${STEP_ORDER[i]}"`);
    if (s.id !== i + 1) warn(where, `id ${s.id} at position ${i + 1}`);
  });
  if (lesson.quickQuiz) {
    const q = lesson.quickQuiz;
    if (!isStr(q.question) || !arrayOf(q.options, o => isStr(o.id) && isStr(o.label)) || !q.options.some(o => o.id === q.correct)) {
      err(`${name} quickQuiz`, 'malformed quick quiz');
    }
  }
  walk(lesson, name, '');
}

// ── Source-level checks (duplicate keys, single-backslash LaTeX) ─────────────
const LATEX_WORDS = new Set(BARE_COMMANDS.split('|').concat(['text', 'textbf','textit', 'operatorname', 'left', 'right', 'begin', 'end', 'underline', 'hat', 'bar', 'dot', 'ddot', 'tilde', 'longrightarrow', 'leftarrow', 'mathbb', 'mathcal', 'boxed', 'displaystyle', 'forall', 'exists', 'in', 'notin', 'subset', 'cup', 'cap', 'to', 'mapsto', 'propto', 'ell', 'hbar', 'degree', 'triangle', 'angle', 'perp', 'parallel', 'cdotp', 'euro']));

async function checkSources() {
  const files = readdirSync(DATA_DIR).filter(f => f.endsWith('.js'));
  for (const f of files) {
    const src = readFileSync(path.join(DATA_DIR, f), 'utf8');
    const result = await transform(src, { loader: 'js', logLevel: 'silent' }).catch(e => ({ warnings: e.warnings || [], errors: e.errors }));
    for (const w of result.warnings || []) {
      err(`${f}:${w.location?.line}`, w.text);
    }
    const singles = [...src.matchAll(/(?<!\\)\\([a-zA-Z]+)/g)].filter(m => LATEX_WORDS.has(m[1]));
    if (singles.length) {
      const sample = [...new Set(singles.map(m => m[1]))].slice(0, 8).join(', ');
      err(f, `${singles.length} LaTeX command(s) written with a single backslash in JS source (${sample})`);
    }
  }
}

// ── Registry ─────────────────────────────────────────────────────────────────
async function main() {
  await checkSources();

  const loaded = new Set();
  for (const m of modules) {
    const entries = MODULE_LESSONS[m.id] || [];
    if (!entries.length) err(`module ${m.id} (${m.slug})`, 'no lesson registered');
    for (const [i, entry] of entries.entries()) {
      const name = `module ${m.id} lesson ${i + 1} [${entry.key}]`;
      let lesson;
      try { lesson = await entry.load(); } catch (e) { err(name, `cannot load: ${e.message}`); continue; }
      if (!lesson) { err(name, 'loader returned nothing'); continue; }
      loaded.add(lesson);
      if (lesson.title !== entry.title) err(name, `registry title differs from lesson title "${lesson.title}"`);
      if (lesson.moduleId !== m.id) warn(name, `lesson.moduleId is ${lesson.moduleId}, registered under module ${m.id}`);
      validateLesson(name, lesson);
    }
  }

  // Lesson objects that exist in data files but are not reachable from the catalog.
  for (const f of readdirSync(DATA_DIR).filter(f => /^lesson_.*\.js$/.test(f) && f !== 'lesson_registry.js')) {
    const mod = await import(pathToFileURL(path.join(DATA_DIR, f)).href);
    for (const [name, value] of Object.entries(mod)) {
      if (value && !Array.isArray(value) && Array.isArray(value.steps) && !loaded.has(value)) {
        warn(`${f} ${name}`, 'lesson is not registered in lesson_registry.js (unreachable)');
      }
    }
  }

  const lessonCount = Object.values(MODULE_LESSONS).reduce((a, l) => a + l.length, 0);
  if (!QUIET) {
    if (errors.length) console.log(`\nERRORS (${errors.length})\n` + errors.map(e => '  ✗ ' + e).join('\n'));
    if (warnings.length) console.log(`\nWARNINGS (${warnings.length})\n` + warnings.map(w => '  ! ' + w).join('\n'));
  }
  console.log(`\nChecked ${modules.length} modules, ${lessonCount} lessons: ${errors.length} error(s), ${warnings.length} warning(s).`);
  process.exitCode = errors.length ? 1 : 0;
}

main().catch(e => { console.error(e); process.exitCode = 1; });

export { sanitizeLatexString };
