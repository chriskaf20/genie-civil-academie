import React from 'react';
import { InlineMath, BlockMath } from 'react-katex';

/**
 * Universal LaTeX Sanitizer
 * Automatically heals broken escape characters (\t -> \text, \n -> \nabla, etc.)
 * and typographic residues caused by JS template strings or string literal escaping.
 */
export function sanitizeLatexString(rawMath) {
  if (rawMath === undefined || rawMath === null) return '';
  let str = String(rawMath);

  // 1. Repair JS whitespace / control characters that consumed LaTeX backslashes
  str = str
    .replace(/\text/g, '\\text')         // \t + ext -> \text
    .replace(/\tan/g, '\\tan')           // \t + an -> \tan
    .replace(/\tau/g, '\\tau')           // \t + au -> \tau
    .replace(/\theta/g, '\\theta')       // \t + heta -> \theta
    .replace(/\times/g, '\\times')       // \t + imes -> \times
    .replace(/\triangle/g, '\\triangle') // \t + riangle -> \triangle
    .replace(/\nabla/g, '\\nabla')       // \n + abla -> \nabla
    .replace(/\neq/g, '\\neq')           // \n + eq -> \neq
    .replace(/\rho/g, '\\rho')           // \r + ho -> \rho
    .replace(/\right/g, '\\right')       // \r + ight -> \right
    .replace(/\beta/g, '\\beta')         // \b + eta -> \beta
    .replace(/\begin/g, '\\begin')       // \b + egin -> \begin
    .replace(/\bar/g, '\\bar')           // \b + ar -> \bar
    .replace(/\frac/g, '\\frac')         // \f + rac -> \frac
    .replace(/\forall/g, '\\forall')     // \f + orall -> \forall
    .replace(/\phi/g, '\\phi');

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

  // 3. Ensure proper space between units in \text
  str = str.replace(/\\text\s*\{([^{}]+)\}/g, (match, p1) => {
    return `\\text{${p1.trim()}}`;
  });

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

  try {
    return (
      <span className={`inline-block align-baseline whitespace-nowrap ${className}`}>
        <InlineMath
          math={cleanMath}
          renderError={(error) => (
            <span
              className="text-amber-500 dark:text-amber-400 font-mono text-xs px-1 py-0.5 rounded bg-amber-500/10 border border-amber-500/20"
              title={`KaTeX: ${error?.message || 'Syntaxe LaTeX'}`}
            >
              {fallback || cleanMath}
            </span>
          )}
        />
      </span>
    );
  } catch (err) {
    return (
      <span className={`inline-block align-baseline text-amber-500 font-mono text-xs ${className}`}>
        {fallback || cleanMath}
      </span>
    );
  }
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

  try {
    return (
      <div className={`overflow-x-auto max-w-full math-scroll py-1.5 ${className}`}>
        <BlockMath
          math={cleanMath}
          renderError={(error) => (
            <div className="p-2 rounded bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-mono">
              ⚠️ {fallback || cleanMath}
            </div>
          )}
        />
      </div>
    );
  } catch (err) {
    return (
      <div className={`text-amber-400 font-mono text-xs ${className}`}>
        {fallback || cleanMath}
      </div>
    );
  }
}

export default {
  SafeInlineMath,
  SafeBlockMath,
  sanitizeLatexString
};
