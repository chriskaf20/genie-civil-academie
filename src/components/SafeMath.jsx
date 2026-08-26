import React from 'react';
import { InlineMath, BlockMath } from 'react-katex';

/**
 * Universal LaTeX Sanitizer
 * Automatically heals broken escape characters (\t -> \text, \n -> \nabla, multiple \\, etc.)
 * caused by JS template strings or string literal escaping.
 */
export function sanitizeLatexString(rawMath) {
  if (rawMath === undefined || rawMath === null) return '';
  let str = String(rawMath);

  // 1. Repair JS control characters (\x09 = tab, \x0A = newline, \x0D = CR, \x08 = backspace, \x0C = form feed)
  // that consumed LaTeX backslashes during template literal interpolation
  str = str
    .replace(/\x09ext/g, '\\text')         // \t + ext -> \text
    .replace(/\x09an/g, '\\tan')           // \t + an -> \tan
    .replace(/\x09au/g, '\\tau')           // \t + au -> \tau
    .replace(/\x09heta/g, '\\theta')       // \t + heta -> \theta
    .replace(/\x09imes/g, '\\times')       // \t + imes -> \times
    .replace(/\x09riangle/g, '\\triangle') // \t + riangle -> \triangle
    .replace(/\x0Aabla/g, '\\nabla')       // \n + abla -> \nabla
    .replace(/\x0Aeq/g, '\\neq')           // \n + eq -> \neq
    .replace(/\x0Dho/g, '\\rho')           // \r + ho -> \rho
    .replace(/\x0Dight/g, '\\right')       // \r + ight -> \right
    .replace(/\x08eta/g, '\\beta')         // \b + eta -> \beta
    .replace(/\x08egin/g, '\\begin')       // \b + egin -> \begin
    .replace(/\x08ar/g, '\\bar')           // \b + ar -> \bar
    .replace(/\x0Crac/g, '\\frac')         // \f + rac -> \frac
    .replace(/\x0Corall/g, '\\forall')     // \f + orall -> \forall;

  // 2. Normalize multiple backslashes before LaTeX command keywords (e.g. \\text -> \text, \\theta -> \theta)
  str = str.replace(/\\{2,}(text|tan|tau|theta|times|triangle|nabla|neq|rho|right|beta|begin|bar|frac|forall|sin|cos|sqrt|alpha|lambda|sigma|cdot|approx|pm|le|ge|gamma|phi|sum|int|infty|quad|qquad|textopp|textadj)/g, '\\$1');

  // 3. Repair common LaTeX typography artifacts and corrupted identifiers
  str = str
    .replace(/\btextopp\b/g, '\\text{opp}')
    .replace(/\btextadj\b/g, '\\text{adj}')
    .replace(/\bextopp\b/g, '\\text{opp}')
    .replace(/\bextadj\b/g, '\\text{adj}')
    .replace(/\bext\{/g, '\\text{')
    .replace(/\\ext\{/g, '\\text{')
    .replace(/\\text\{opp\}\s*\\text\{opp\}/g, '\\text{opp}')
    .replace(/\\text\{adj\}\s*\\text\{adj\}/g, '\\text{adj}')
    .replace(/\balphacdot\b/g, '\\alpha \\cdot')
    .replace(/\blambdaabla\b/g, '\\lambda \\nabla')
    .replace(/\blambdaablaT\b/g, '\\lambda \\nabla T')
    .replace(/\blambdanabla\b/g, '\\lambda \\nabla')
    .replace(/\\lambdanabla/g, '\\lambda \\nabla')
    .replace(/\btextK\b/g, '\\text{ K}')
    .replace(/\\textK\b/g, '\\text{ K}')
    .replace(/\\text\s*\{\s*K\s*\}/g, '\\text{ K}');

  return str.trim();
}

/**
 * Safe wrapper around KaTeX InlineMath that prevents white-screen crashes,
 * sanitizes input, and forbids line breaks inside the formula.
 */
export function SafeInlineMath({ math, fallback, className = '' }) {
  if (math === undefined || math === null) {
    return <span className={`text-slate-300 ${className}`}>{fallback || ''}</span>;
  }

  const cleanMath = sanitizeLatexString(math);
  if (!cleanMath) {
    return <span className={className}>{fallback || ''}</span>;
  }

  return (
    <span className={`inline-block align-baseline whitespace-nowrap ${className}`}>
      <InlineMath
        math={cleanMath}
        renderError={(error) => (
          <span
            className="text-amber-600 dark:text-amber-400 font-mono text-xs px-1 py-0.5 rounded bg-amber-500/10 border border-amber-500/20"
            title={`KaTeX: ${error?.message || 'Syntaxe LaTeX'}`}
          >
            {fallback || cleanMath}
          </span>
        )}
      />
    </span>
  );
}

/**
 * Safe wrapper around KaTeX BlockMath with error boundary
 */
export function SafeBlockMath({ math, fallback, className = '' }) {
  if (math === undefined || math === null) {
    return <div className={`text-slate-300 ${className}`}>{fallback || ''}</div>;
  }

  const cleanMath = sanitizeLatexString(math);
  if (!cleanMath) {
    return <div className={className}>{fallback || ''}</div>;
  }

  return (
    <div className={`overflow-x-auto max-w-full math-scroll py-1.5 ${className}`}>
      <BlockMath
        math={cleanMath}
        renderError={(error) => (
          <div className="p-2 rounded bg-amber-500/10 border border-amber-500/30 text-amber-500 dark:text-amber-400 text-xs font-mono">
            ⚠️ {fallback || cleanMath}
          </div>
        )}
      />
    </div>
  );
}

/**
 * Helper to parse and render text with embedded inline LaTeX $ ... $ and formatting
 */
export function renderInlineLatex(text) {
  if (!text) return null;
  if (typeof text !== 'string') return text;

  // Split on inline math $...$, bold **...**, italic *...*, and code `...`
  const parts = text.split(/(\$[^$]+?\$|\*\*[^*]+?\*\*|\*[^*]+?\*|`[^`]+?`)/g);

  return parts.map((part, i) => {
    if (!part) return null;

    if (part.startsWith('$') && part.endsWith('$')) {
      const math = part.slice(1, -1).trim();
      return (
        <span key={i} className="inline-block px-0.5 align-baseline">
          <SafeInlineMath math={math} />
        </span>
      );
    }
    if (part.startsWith('**') && part.endsWith('**')) {
      return (
        <strong key={i} className="font-bold text-slate-900 dark:text-white">
          {renderInlineLatex(part.slice(2, -2))}
        </strong>
      );
    }
    if (part.startsWith('*') && part.endsWith('*')) {
      return (
        <em key={i} className="italic text-slate-700 dark:text-slate-200">
          {renderInlineLatex(part.slice(1, -1))}
        </em>
      );
    }
    if (part.startsWith('`') && part.endsWith('`')) {
      return (
        <code key={i} className="bg-slate-100 dark:bg-slate-800 text-teal-700 dark:text-cyan-300 px-1.5 py-0.5 rounded text-xs mono font-semibold">
          {part.slice(1, -1)}
        </code>
      );
    }

    return <span key={i}>{part}</span>;
  });
}

export default {
  SafeInlineMath,
  SafeBlockMath,
  sanitizeLatexString,
  renderInlineLatex
};
