// Shared LaTeX helpers. Used by the React components and by scripts/validate-content.mjs,
// so the validator checks exactly what the app renders.
import katex from 'katex';

// Commands the lesson data uses that KaTeX does not define.
export const KATEX_MACROS = {
  '\\euro': '\\text{€}',
};

const KATEX_OPTIONS = {
  throwOnError: true,
  strict: 'ignore',
  trust: false,
  output: 'htmlAndMathml',
};

/**
 * Repairs LaTeX that was damaged by JavaScript string escaping (a single backslash before
 * t, n, r, b, f turns into a control character) and normalises a few legacy notations.
 * The data has been cleaned at the source; this stays as a safety net.
 */
export function sanitizeLatexString(rawMath) {
  if (rawMath === undefined || rawMath === null) return '';
  let str = String(rawMath);

  // 1. Control characters produced by \t \n \r \b \f inside JS strings.
  str = str
    .replace(/\x09ext/g, '\\text')
    .replace(/\x09an/g, '\\tan')
    .replace(/\x09au/g, '\\tau')
    .replace(/\x09heta/g, '\\theta')
    .replace(/\x09imes/g, '\\times')
    .replace(/\x09riangle/g, '\\triangle')
    .replace(/\x0Aabla/g, '\\nabla')
    .replace(/\x0Aeq/g, '\\neq')
    .replace(/\x0Dho/g, '\\rho')
    .replace(/\x0Dight/g, '\\right')
    .replace(/\x08eta/g, '\\beta')
    .replace(/\x08egin/g, '\\begin')
    .replace(/\x08ar/g, '\\bar')
    .replace(/\x0Crac/g, '\\frac')
    .replace(/\x0Corall/g, '\\forall');

  // 2. Legacy accent commands → Unicode characters.
  const accentCommands = [
    { regex: /\\acute\{([^}]+)\}/g, map: { a: 'á', e: 'é', E: 'É', i: 'í', o: 'ó', u: 'ú', y: 'ý', c: 'ć', n: 'ń' } },
    { regex: /\\grave\{([^}]+)\}/g, map: { a: 'à', e: 'è', E: 'È', i: 'ì', o: 'ò', u: 'ù', y: 'ỳ' } },
    { regex: /\\hat\{([^}]+)\}/g, map: { a: 'â', e: 'ê', E: 'Ê', i: 'î', o: 'ô', u: 'û', y: 'ŷ' } },
    { regex: /\\ddot\{([^}]+)\}/g, map: { a: 'ä', e: 'ë', i: 'ï', o: 'ö', u: 'ü', y: 'ÿ' } },
    { regex: /\\c\{([^}]+)\}/g, map: { c: 'ç', C: 'Ç' } },
  ];
  accentCommands.forEach(({ regex, map }) => {
    str = str.replace(regex, (match, char) => map[char] || match);
  });

  // 3. Doubled backslashes before a command (\\text → \text).
  str = str.replace(/\\{2,}(text|tan|tau|theta|times|triangle|nabla|neq|rho|right|beta|begin|bar|frac|forall|sin|cos|sqrt|alpha|lambda|sigma|cdot|approx|pm|le|ge|gamma|phi|sum|int|infty|quad|qquad)\b/g, '\\$1');

  return str.trim();
}

// ── Rendering ────────────────────────────────────────────────────────────────

const cache = new Map();
const CACHE_LIMIT = 4000;

function renderWithKatex(source, displayMode) {
  const warn = console.warn;
  // KaTeX warns about glyphs it has no metrics for (€, some accents); they still render.
  console.warn = (...args) => {
    if (typeof args[0] === 'string' && args[0].startsWith('No character metrics')) return;
    warn(...args);
  };
  try {
    return katex.renderToString(source, { ...KATEX_OPTIONS, displayMode, macros: { ...KATEX_MACROS } });
  } finally {
    console.warn = warn;
  }
}

/**
 * Renders LaTeX to an HTML string. Returns { html } on success or { error } when KaTeX
 * rejects the input. Results are memoised because lessons re-render often.
 */
export function renderMath(rawMath, displayMode = false) {
  const source = sanitizeLatexString(rawMath);
  const key = `${displayMode ? 'D' : 'I'}:${source}`;
  if (cache.has(key)) return cache.get(key);

  let result;
  if (!source) {
    result = { html: '', source };
  } else {
    try {
      result = { html: renderWithKatex(source, displayMode), source };
    } catch (error) {
      result = { error, source };
    }
  }
  if (cache.size >= CACHE_LIMIT) cache.clear();
  cache.set(key, result);
  return result;
}

/**
 * Units are written either as LaTeX ("\\text{kN}", "m^2") or as plain text ("kN·m", "MPa").
 * Plain text is wrapped in \text{} so KaTeX keeps spacing and upright letters.
 */
export function unitToLatex(unit) {
  const u = String(unit ?? '').trim();
  if (!u || u === '-') return '';
  if (/[\\^_{}]/.test(u)) return u;
  // % # & are special in LaTeX, even inside \text{} (% would start a comment).
  return `\\text{${u.replace(/[%#&]/g, '\\$&')}}`;
}

// ── Rich text tokenizer ──────────────────────────────────────────────────────

/** Splits lesson text on display-math blocks ($$…$$). */
export function splitMathBlocks(text) {
  return String(text ?? '')
    .split(/(\$\$[\s\S]+?\$\$)/g)
    .filter(part => part !== '')
    .map(part => {
      const trimmed = part.trim();
      if (trimmed.startsWith('$$') && trimmed.endsWith('$$') && trimmed.length > 4) {
        return { kind: 'block', value: trimmed.slice(2, -2).trim() };
      }
      return { kind: 'text', value: part };
    });
}

const INLINE_PATTERN = /(\$[^$]+?\$|\*\*[^*]+?\*\*|\*[^*\s][^*]*?\*|`[^`]+?`)/g;

/**
 * Splits one line of lesson text into inline tokens: math ($…$), bold (**…**),
 * italic (*…*), code (`…`) and plain text. Bold and italic contain nested tokens.
 */
export function tokenizeInline(text) {
  const cleanText = String(text ?? '')
    .replace(/\\acute\{e\}/g, 'é')
    .replace(/\\acute\{E\}/g, 'É')
    .replace(/\\acute\{a\}/g, 'á')
    .replace(/\\grave\{e\}/g, 'è')
    .replace(/\\grave\{E\}/g, 'È')
    .replace(/\\grave\{a\}/g, 'à')
    .replace(/\\grave\{u\}/g, 'ù')
    .replace(/\\hat\{e\}/g, 'ê')
    .replace(/\\hat\{E\}/g, 'Ê')
    .replace(/\\hat\{a\}/g, 'â')
    .replace(/\\hat\{o\}/g, 'ô')
    .replace(/\\hat\{u\}/g, 'û')
    .replace(/\\ddot\{e\}/g, 'ë');

  return cleanText
    .split(INLINE_PATTERN)
    .filter(part => part)
    .map(part => {
      if (part.length > 2 && part.startsWith('$') && part.endsWith('$')) {
        return { kind: 'math', value: part.slice(1, -1).trim() };
      }
      if (part.length > 4 && part.startsWith('**') && part.endsWith('**')) {
        return { kind: 'bold', children: tokenizeInline(part.slice(2, -2)) };
      }
      if (part.length > 2 && part.startsWith('*') && part.endsWith('*') && !part.startsWith('**')) {
        return { kind: 'italic', children: tokenizeInline(part.slice(1, -1)) };
      }
      if (part.length > 2 && part.startsWith('`') && part.endsWith('`')) {
        return { kind: 'code', value: part.slice(1, -1) };
      }
      return { kind: 'text', value: part };
    });
}

/** Every math expression in a piece of rich text, with its display mode. */
export function collectMath(text) {
  const found = [];
  const walk = tokens => tokens.forEach(t => {
    if (t.kind === 'math') found.push({ latex: t.value, display: false });
    else if (t.children) walk(t.children);
  });
  splitMathBlocks(text).forEach(part => {
    if (part.kind === 'block') found.push({ latex: part.value, display: true });
    else part.value.split('\n').forEach(line => walk(tokenizeInline(line)));
  });
  return found;
}
