import { useState, useRef, useEffect } from 'react';
import { TECH_TERMS } from '../data/tech_terms.js';

/**
 * TechTooltip — Infobulle pédagogique pour débutants
 * Affiche une infobulle soignée avec définition, catégorie, icône et équivalent anglais.
 * Positionnement intelligent automatique (haut/bas) et fermeture au clic extérieur.
 */
export default function TechTooltip({ term, children, className = '' }) {
  const [isOpen, setIsOpen] = useState(false);
  const [position, setPosition] = useState({ top: 0, left: 0, placeBelow: false });
  const triggerRef = useRef(null);
  const popupRef = useRef(null);

  const cleanTerm = typeof term === 'string' ? term.trim() : '';
  const info = TECH_TERMS[cleanTerm] || {
    term: cleanTerm,
    full: cleanTerm,
    summary: 'Terme technique usuel en ingénierie civile.',
    category: 'Général',
    icon: '💡'
  };

  const updateCoordinates = () => {
    if (triggerRef.current) {
      const rect = triggerRef.current.getBoundingClientRect();
      const popupWidth = Math.min(300, window.innerWidth - 32);
      const placeBelow = rect.top < 160;

      let left = rect.left + rect.width / 2 - popupWidth / 2;
      left = Math.max(16, Math.min(window.innerWidth - popupWidth - 16, left));

      setPosition({
        top: placeBelow ? rect.bottom + 8 : rect.top - 8,
        left,
        placeBelow
      });
    }
  };

  const handleMouseEnter = () => {
    updateCoordinates();
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    setIsOpen(false);
  };

  const handleClick = (e) => {
    e.stopPropagation();
    updateCoordinates();
    setIsOpen(prev => !prev);
  };

  // Fermeture au clic à l'extérieur
  useEffect(() => {
    if (!isOpen) return;
    const handleOutsideClick = (e) => {
      if (
        triggerRef.current && !triggerRef.current.contains(e.target) &&
        popupRef.current && !popupRef.current.contains(e.target)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener('click', handleOutsideClick);
    document.addEventListener('touchstart', handleOutsideClick);
    return () => {
      document.removeEventListener('click', handleOutsideClick);
      document.removeEventListener('touchstart', handleOutsideClick);
    };
  }, [isOpen]);

  return (
    <>
      <span
        ref={triggerRef}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={handleClick}
        className={`inline-flex items-center cursor-help border-b-2 border-dotted border-teal-400 dark:border-cyan-400 text-teal-800 dark:text-cyan-300 font-semibold px-0.5 rounded transition-colors hover:bg-teal-50 dark:hover:bg-teal-950/50 ${className}`}
        title={`Définition de ${cleanTerm}`}
      >
        {children || cleanTerm}
      </span>

      {isOpen && (
        <div
          ref={popupRef}
          className="fixed z-50 w-72 max-w-[calc(100vw-2rem)] p-3.5 rounded-2xl bg-white dark:bg-slate-900 border border-teal-200 dark:border-slate-700 shadow-2xl backdrop-blur-xl animate-fade-up text-left text-slate-800 dark:text-slate-100"
          style={{
            top: `${position.top}px`,
            left: `${position.left}px`,
            transform: position.placeBelow ? 'none' : 'translateY(-100%)'
          }}
          onMouseEnter={() => setIsOpen(true)}
          onMouseLeave={() => setIsOpen(false)}
        >
          {/* Header */}
          <div className="flex items-start justify-between gap-2 border-b border-slate-100 dark:border-slate-800 pb-2 mb-2">
            <div className="flex items-center gap-2 min-w-0">
              <span className="text-lg shrink-0">{info.icon || '💡'}</span>
              <div className="min-w-0">
                <p className="text-xs font-bold text-slate-900 dark:text-white leading-tight truncate">
                  {info.full || info.term}
                </p>
                {info.en && (
                  <p className="text-[10px] text-slate-500 dark:text-slate-400 italic truncate">
                    🇬🇧 {info.en}
                  </p>
                )}
              </div>
            </div>
            <span className="text-[9px] uppercase px-1.5 py-0.5 rounded-full bg-teal-100 dark:bg-teal-900/60 text-teal-700 dark:text-cyan-300 font-bold shrink-0">
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
            <span className="font-mono text-[9px] bg-slate-100 dark:bg-slate-800 px-1 py-0.5 rounded">
              Astuce débutant
            </span>
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
