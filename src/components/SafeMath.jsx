import React from 'react';
import { InlineMath, BlockMath } from 'react-katex';

/**
 * Safe wrapper around KaTeX InlineMath that prevents white-screen crashes
 * when malformed LaTeX strings or undefined variables are passed.
 */
export function SafeInlineMath({ math, fallback, className = '' }) {
  if (math === undefined || math === null || typeof math !== 'string') {
    return <span className={`text-slate-300 ${className}`}>{fallback || (math != null ? String(math) : '')}</span>;
  }

  const cleanMath = String(math).trim();
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
            title={`Erreur KaTeX: ${error?.message || 'Syntaxe LaTeX non valide'}`}
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
 * and robust crash protection for mobile responsive screens.
 */
export function SafeBlockMath({ math, fallback, className = '' }) {
  if (math === undefined || math === null || typeof math !== 'string') {
    return (
      <div className={`overflow-x-auto max-w-full py-1 text-slate-300 ${className}`}>
        {fallback || (math != null ? String(math) : '')}
      </div>
    );
  }

  const cleanMath = String(math).trim();
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
              title={`Erreur KaTeX: ${error?.message || 'Syntaxe LaTeX non valide'}`}
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

export default { SafeInlineMath, SafeBlockMath };
