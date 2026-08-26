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

  // 2. Repair common LaTeX typography artifacts
  str = str
    .replace(/\bextopp\b/g, '\\text{opp}')
    .replace(/\bextadj\b/g, '\\text{adj}')
    .replace(/\bext\{/g, '\\text{')
    .replace(/\\ext\{/g, '\\text{')
    .replace(/\balphacdot\b/g, '\\alpha \\cdot')
    .replace(/\blambdaabla\b/g, '\\lambda \\nabla')
    .replace(/\blambdaablaT\b/g, '\\lambda \\nabla T');

  // 3. Ensure proper space between units in \text
  str = str.replace(/\\text\s*\{([^{}]+)\}/g, (match, p1) => {
    return `\\text{${p1.trim()}}`;
  });

  return str.trim();
}

/**
 * Safe wrapper around KaTeX InlineMath that prevents white-screen crashes
 * and sanitizes input.
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
      <InlineMath
        math={cleanMath}
        renderError={(error) => (
          <span
            className={`text-amber-400 font-mono text-xs px-1 py-0.5 rounded bg-amber-500/10 border border-amber-500/20 ${className}`}
            title={`KaTeX: ${error?.message || 'Syntaxe LaTeX'}`}
          >
            {fallback || cleanMath}
          </span>
        )}
      />
    );
  } catch (err) {
    return (
      <span className={`text-amber-400 font-mono text-xs ${className}`}>
        {fallback || cleanMath}
      </span>
    );
  }
}

/**
 * Safe wrapper around KaTeX BlockMath with overflow-x-auto container
 * and robust crash protection.
 */
export function SafeBlockMath({ math, fallback, className = '' }) {
  if (math === undefined || math === null) {
    return (
      <div className={`overflow-x-auto max-w-full py-1 text-slate-300 ${className}`}>
        {fallback || ''}
      </div>
    );
  }

  const cleanMath = sanitizeLatexString(math);
  if (!cleanMath) {
    return <div className="py-1">{fallback || ''}</div>;
  }

  try {
    return (
      <div className="overflow-x-auto max-w-full py-1 math-scroll -webkit-overflow-scrolling-touch">
        <BlockMath
          math={cleanMath}
          renderError={(error) => (
            <div
              className={`p-2 my-1 rounded-xl bg-slate-950 border border-amber-500/30 text-amber-400 font-mono text-xs overflow-x-auto ${className}`}
              title={`KaTeX: ${error?.message || 'Syntaxe LaTeX'}`}
            >
              {fallback || cleanMath}
            </div>
          )}
        />
      </div>
    );
  } catch (err) {
    return (
      <div className={`overflow-x-auto max-w-full py-1 text-amber-400 font-mono text-xs ${className}`}>
        {fallback || cleanMath}
      </div>
    );
  }
}

export default { SafeInlineMath, SafeBlockMath, sanitizeLatexString };
