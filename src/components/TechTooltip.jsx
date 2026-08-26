import { useState, useRef, useEffect } from 'react';
import { TECH_TERMS } from '../data/tech_terms.js';

/**
 * TechTooltip — Infobulle pédagogique pour débutants
 * Affiche une infobulle soignée avec définition, catégorie, icône et équivalent anglais.
 */
export default function TechTooltip({ term, children, className = '' }) {
  const [isOpen, setIsOpen] = useState(false);
  const [coords, setCoords] = useState({ top: 0, left: 0 });
  const triggerRef = useRef(null);
  const info = TECH_TERMS[term] || {
    term: term,
    full: term,
    summary: 'Terme technique usuel en ingénierie civile.',
    category: 'Général',
    icon: '💡'
  };

  const handleMouseEnter = () => {
    if (triggerRef.current) {
      const rect = triggerRef.current.getBoundingClientRect();
      setCoords({
        top: rect.top - 8,
        left: Math.max(16, Math.min(window.innerWidth - 300, rect.left + rect.width / 2 - 140))
      });
      setIsOpen(true);
    }
  };

  const handleMouseLeave = () => {
    setIsOpen(false);
  };

  const handleClick = (e) => {
    e.stopPropagation();
    if (triggerRef.current) {
      const rect = triggerRef.current.getBoundingClientRect();
      setCoords({
        top: rect.top - 8,
        left: Math.max(16, Math.min(window.innerWidth - 300, rect.left + rect.width / 2 - 140))
      });
      setIsOpen(prev => !prev);
    }
  };

  return (
    <>
      <span
        ref={triggerRef}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={handleClick}
        className={`inline-flex items-center cursor-help border-b-2 border-dotted border-blue-400 dark:border-sky-400 text-blue-800 dark:text-sky-300 font-semibold px-0.5 rounded transition-colors hover:bg-blue-50 dark:hover:bg-blue-900/40 ${className}`}
        title={`Cliquez pour la définition de ${term}`}
      >
        {children || term}
      </span>

      {isOpen && (
        <div
          className="fixed z-50 w-72 max-w-[calc(100vw-2rem)] p-3.5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 shadow-2xl backdrop-blur-xl animate-fade-up text-left text-slate-800 dark:text-slate-100"
          style={{
            top: `${coords.top}px`,
            left: `${coords.left}px`,
            transform: 'translateY(-100%)'
          }}
          onMouseEnter={() => setIsOpen(true)}
          onMouseLeave={() => setIsOpen(false)}
        >
          {/* Header */}
          <div className="flex items-start justify-between gap-2 border-b border-slate-100 dark:border-slate-800 pb-2 mb-2">
            <div className="flex items-center gap-2">
              <span className="text-lg">{info.icon || '💡'}</span>
              <div>
                <p className="text-xs font-bold text-slate-900 dark:text-white leading-tight">{info.full || info.term}</p>
                {info.en && (
                  <p className="text-[10px] text-slate-500 dark:text-slate-400 italic">🇬🇧 {info.en}</p>
                )}
              </div>
            </div>
            <span className="text-[9px] uppercase px-1.5 py-0.5 rounded-full bg-blue-100 dark:bg-blue-900/60 text-blue-700 dark:text-sky-300 font-bold shrink-0">
              {info.category || 'Terme'}
            </span>
          </div>

          {/* Body */}
          <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
            {info.summary}
          </p>

          {info.details && (
            <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-2 pt-2 border-t border-slate-100 dark:border-slate-800 leading-relaxed italic">
              {info.details}
            </p>
          )}

          {/* Footer badge */}
          <div className="mt-2.5 flex items-center justify-between text-[10px] text-slate-400 dark:text-slate-500">
            <span>💡 Lexique GCEA</span>
            <span className="font-mono text-[9px] bg-slate-100 dark:bg-slate-800 px-1 rounded">Astuce débutant</span>
          </div>
        </div>
      )}
    </>
  );
}

/**
 * Fonction utilitaire pour surligner automatiquement les termes techniques connus dans un texte.
 */
export function enhanceTextWithTerms(text) {
  if (!text || typeof text !== 'string') return text;

  // Liste des clés de termes triée par longueur décroissante
  const terms = Object.keys(TECH_TERMS).sort((a, b) => b.length - a.length);
  const regex = new RegExp(`\\b(${terms.map(t => t.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&')).join('|')})\\b`, 'g');

  const parts = [];
  let lastIndex = 0;
  let match;

  while ((match = regex.exec(text)) !== null) {
    if (match.index > lastIndex) {
      parts.push(text.substring(lastIndex, match.index));
    }
    const matchedTerm = match[1];
    parts.push(
      <TechTooltip key={`${matchedTerm}-${match.index}`} term={matchedTerm}>
        {matchedTerm}
      </TechTooltip>
    );
    lastIndex = regex.lastIndex;
  }

  if (lastIndex < text.length) {
    parts.push(text.substring(lastIndex));
  }

  return parts.length > 0 ? parts : text;
}
