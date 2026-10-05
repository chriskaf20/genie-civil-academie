import { renderMath, tokenizeInline } from '../utils/latex.js';

/**
 * Inline formula. Invalid LaTeX never crashes the page: it is shown as source text
 * in an amber chip (class `math-error`, also counted by the browser smoke test).
 */
export function SafeInlineMath({ math, fallback, className = '' }) {
  const { html, error, source } = renderMath(math, false);
  if (error) {
    return (
      <span
        className={`math-error text-amber-700 dark:text-amber-300 font-mono text-xs px-1 py-0.5 rounded bg-amber-500/10 border border-amber-500/20 ${className}`}
        title={`LaTeX : ${error.message}`}
      >
        {fallback || source}
      </span>
    );
  }
  if (!html) return fallback ? <span className={className}>{fallback}</span> : null;
  return (
    <span
      className={`inline-block align-baseline whitespace-nowrap ${className}`}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}

/** Display formula, horizontally scrollable on narrow screens. */
export function SafeBlockMath({ math, fallback, className = '' }) {
  const { html, error, source } = renderMath(math, true);
  if (error) {
    return (
      <div
        className={`math-error p-2 rounded bg-amber-500/10 border border-amber-500/30 text-amber-700 dark:text-amber-300 text-xs font-mono ${className}`}
        title={`LaTeX : ${error.message}`}
      >
        ⚠️ {fallback || source}
      </div>
    );
  }
  if (!html) return fallback ? <div className={className}>{fallback}</div> : null;
  return (
    <div
      className={`overflow-x-auto max-w-full math-scroll py-1.5 ${className}`}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}

/** Renders inline rich text: $math$, **bold**, *italic* and `code`. */
export function renderInlineLatex(text) {
  if (text === undefined || text === null || text === '') return null;
  if (typeof text !== 'string') return String(text);
  return renderTokens(tokenizeInline(text));
}

function renderTokens(tokens, keyPrefix = '') {
  return tokens.map((token, i) => {
    const key = `${keyPrefix}${i}`;
    switch (token.kind) {
      case 'math':
        return <SafeInlineMath key={key} math={token.value} className="px-0.5" />;
      case 'bold':
        return <strong key={key} className="font-bold text-slate-900 dark:text-white">{renderTokens(token.children, `${key}-`)}</strong>;
      case 'italic':
        return <em key={key} className="italic">{renderTokens(token.children, `${key}-`)}</em>;
      case 'code':
        return <code key={key} className="bg-slate-100 dark:bg-slate-800 text-teal-700 dark:text-cyan-300 px-1.5 py-0.5 rounded text-xs mono font-semibold">{token.value}</code>;
      default:
        return <span key={key}>{token.value}</span>;
    }
  });
}
