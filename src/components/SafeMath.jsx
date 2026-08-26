import React from 'react';
import { InlineMath, BlockMath } from 'react-katex';

/**
 * Universal LaTeX Sanitizer
 * Automatically heals broken escape characters (\t -> \text, \n -> \nabla, etc.)
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
    .replace(/\x0Corall/g, '\\forall')     // \f + orall -> \forall

  // 2. Repair common LaTeX typography artifacts and corrupted identifiers
  str = str
    .replace(/\bextopp\b/g, '\\text{opp}')
    .replace(/\bextadj\b/g, '\\text{adj}')
    .replace(/\bext\{/g, '\\text{')
    .replace(/\\ext\{/g, '\\text{')
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

export default {
  SafeInlineMath,
  SafeBlockMath,
  sanitizeLatexString
};
