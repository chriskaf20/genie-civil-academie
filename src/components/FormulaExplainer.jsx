import { useState } from 'react';
import { SafeBlockMath, SafeInlineMath, renderInlineLatex } from './SafeMath.jsx';
import { extractVariablesFromLatex } from '../data/formula_dictionary.js';
import { unitToLatex } from '../utils/latex.js';

/**
 * FormulaExplainer — Cartouche Universelle d'Explication Pédagogique des Formules
 * Affiche l'équation KaTeX agrandie et l'anatomie de chaque variable sur 2 colonnes équilibrées en pleine largeur.
 */
export default function FormulaExplainer({
  formula,
  name,
  description,
  latex,
  role,
  variables: customVariables,
  ruleOfThumb,
  domain = '',
  moduleSlug = '',
  className = ''
}) {
  const [selectedVar, setSelectedVar] = useState(null);
  const [copied, setCopied] = useState(false);
  const [expanded, setExpanded] = useState(true);

  // Normalisation des propriétés reçues
  const formulaName = name || (formula && formula.name) || 'Formule Fondamentale de Dimensionnement';
  const formulaLatex = latex || (formula && formula.latex) || '\\sigma = \\frac{N}{A} + \\frac{M \\cdot y}{I}';
  const formulaDesc = description || (formula && formula.description) || role || (formula && formula.role) || '';
  const formulaRule = ruleOfThumb || (formula && formula.ruleOfThumb) || '';
  const varsToUse = customVariables || (formula && formula.variables) || [];
  const currentDomain = domain || moduleSlug || (formula && (formula.domain || formula.slug || formula.moduleSlug)) || '';

  // Variables are shown only when the lesson defines them for this formula: guessing them from
  // single letters gave wrong meanings (V = speed read as shear force, T = period as torsion…).
  // The dictionary only fills a missing name/unit of an explicitly listed symbol.
  const variables = varsToUse.length ? extractVariablesFromLatex(formulaLatex, varsToUse, currentDomain) : [];

  const handleCopyLatex = async (e) => {
    e.stopPropagation();
    try {
      // The Clipboard API is missing on pages not served over HTTPS.
      if (!navigator.clipboard) throw new Error('Clipboard API indisponible');
      await navigator.clipboard.writeText(formulaLatex);
      setCopied('ok');
    } catch {
      setCopied('error');
    }
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className={`rounded-2xl border border-teal-200 dark:border-teal-900/60 bg-gradient-to-br from-white via-teal-50/20 to-emerald-50/30 dark:from-slate-900 dark:via-slate-900 dark:to-slate-950 shadow-sm overflow-hidden transition-all duration-200 hover:border-teal-400 dark:hover:border-teal-600/70 w-full max-w-full ${className}`}>
      {/* ── Cartouche Header (Bicolore Cyan / Émeraude) ── */}
      <div className="flex flex-wrap items-center justify-between gap-2 px-3.5 py-2.5 sm:px-4 sm:py-3 bg-gradient-to-r from-teal-500/10 via-cyan-500/10 to-emerald-500/10 dark:from-teal-950/50 dark:via-cyan-950/40 dark:to-emerald-950/40 border-b border-teal-200/70 dark:border-slate-800">
        {/* basis-56: on narrow screens the buttons wrap below the title instead of squeezing it */}
        <div className="flex items-center gap-2 min-w-0 flex-1 basis-56">
          <span className="w-7 h-7 rounded-xl bg-gradient-to-br from-teal-600 to-cyan-500 text-white flex items-center justify-center text-xs font-bold shrink-0 shadow-sm">
            ∑
          </span>
          <div className="min-w-0">
            <span className="text-[10px] font-bold uppercase tracking-wider text-teal-700 dark:text-cyan-400">
              Formule de Calcul & Dimensionnement
            </span>
            <h4 className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white leading-tight">
              {renderInlineLatex(formulaName)}
            </h4>
          </div>
        </div>

        <div className="flex items-center gap-1.5 shrink-0">
          <button
            type="button"
            onClick={handleCopyLatex}
            title="Copier la formule en code LaTeX"
            className="text-[11px] px-2.5 py-1 rounded-lg bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:text-teal-600 dark:hover:text-cyan-300 transition-colors flex items-center gap-1 shadow-2xs active:scale-95 cursor-pointer"
          >
            {copied === 'ok' ? '✓ Copié' : copied === 'error' ? 'Copie impossible' : '📋 LaTeX'}
          </button>
          {variables.length > 0 && (
            <button
              type="button"
              onClick={() => setExpanded(prev => !prev)}
              aria-expanded={expanded}
              className="text-[11px] px-2.5 py-1 rounded-lg bg-teal-600 dark:bg-teal-700 text-white font-semibold hover:bg-teal-500 transition-all shadow-sm active:scale-95 cursor-pointer"
            >
              {expanded ? 'Masquer les variables ▴' : 'Voir les variables ▾'}
            </button>
          )}
        </div>
      </div>

      {/* ── Main Formula Display (Enlarged KaTeX) ── */}
      <div className="p-4 sm:p-5 bg-white/70 dark:bg-slate-950/60 border-b border-slate-100 dark:border-slate-800/80">
        <div className="overflow-x-auto max-w-full py-2 math-scroll text-center text-base sm:text-lg">
          <SafeBlockMath math={formulaLatex} />
        </div>
        {formulaDesc && (
          <div className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mt-2 text-center max-w-2xl mx-auto leading-relaxed italic">
            {renderInlineLatex(formulaDesc)}
          </div>
        )}
      </div>

      {/* ── Variable Anatomy Grid (2 Balanced Columns Full Width) ── */}
      {expanded && variables.length > 0 && (
        <div className="p-3.5 sm:p-5 space-y-4 w-full">
          {/* Section title & Subtext */}
          <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 dark:border-slate-800 pb-2">
            <div className="flex items-center gap-1.5">
              <span className="text-sm">🔬</span>
              <span className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider">
                Anatomie des variables ({variables.length} termes)
              </span>
            </div>
            <span className="text-[10px] text-slate-500 dark:text-slate-400 font-medium">
              💡 Cliquez sur une variable pour la mettre en valeur
            </span>
          </div>

          {/* 2 Balanced Columns Grid in Full Width */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-3.5 w-full">
            {variables.map((v, i) => {
              const isSelected = selectedVar === v.symbol;
              return (
                <div
                  key={`${v.symbol}-${i}`}
                  onClick={() => setSelectedVar(isSelected ? null : v.symbol)}
                  className={`rounded-xl p-3.5 border transition-all duration-150 cursor-pointer select-none text-left flex flex-col justify-between w-full shadow-2xs ${
                    isSelected
                      ? 'bg-teal-50 dark:bg-teal-950/50 border-teal-500 shadow-md ring-2 ring-teal-400/40 dark:ring-teal-500/30'
                      : 'bg-white dark:bg-slate-800/70 border-slate-200/90 dark:border-slate-700/60 hover:border-teal-300 dark:hover:border-slate-600 hover:shadow-xs'
                  }`}
                >
                  <div>
                    {/* Symbol + Name + Unit */}
                    <div className="flex items-start justify-between gap-2 mb-2">
                      <div className="flex items-center gap-2 min-w-0 flex-1">
                        <div className="px-2 py-0.5 rounded-md bg-teal-100 dark:bg-teal-900/60 text-teal-800 dark:text-cyan-300 font-mono font-bold text-xs shrink-0 flex items-center justify-center">
                          <SafeInlineMath math={v.symbol} />
                        </div>
                        <p className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white leading-snug truncate">
                          {v.name}
                        </p>
                      </div>
                      {unitToLatex(v.unit) && (
                        <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-slate-100 dark:bg-slate-700/80 text-slate-600 dark:text-slate-300 shrink-0 font-semibold">
                          <SafeInlineMath math={unitToLatex(v.unit)} />
                        </span>
                      )}
                    </div>

                    {/* Physical meaning / role */}
                    <div className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed pl-2 border-l-2 border-teal-400 dark:border-teal-600 my-2">
                      {renderInlineLatex(v.role || v.meaning)}
                    </div>
                  </div>

                  {/* Category footer */}
                  {v.category && (
                    <div className="mt-2.5 pt-2 border-t border-slate-100 dark:border-slate-700/50 flex items-center justify-between text-[10px] text-slate-400 dark:text-slate-500">
                      <span className="uppercase tracking-wider font-semibold text-[9px] text-teal-700 dark:text-cyan-400/90">{v.category}</span>
                      {isSelected ? (
                        <span className="text-teal-600 dark:text-cyan-400 font-bold">Sélectionné ✓</span>
                      ) : (
                        <span className="text-slate-400 dark:text-slate-500 hover:text-slate-600">Détail</span>
                      )}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* ── Rule of Thumb (only when the lesson provides one) ── */}
          {formulaRule && (
            <div className="rounded-xl p-3.5 bg-amber-50/90 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-900/50 flex items-start gap-2.5 w-full">
              <span className="text-amber-600 dark:text-amber-400 text-base shrink-0 mt-0.5" aria-hidden="true">💡</span>
              <div className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                <span className="font-bold text-amber-900 dark:text-amber-300">Règle de bon sens de l'ingénieur : </span>
                {renderInlineLatex(formulaRule)}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
