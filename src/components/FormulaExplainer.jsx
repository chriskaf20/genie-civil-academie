import { useState } from 'react';
import { SafeBlockMath, SafeInlineMath } from './SafeMath.jsx';
import { extractVariablesFromLatex } from '../data/formula_dictionary.js';

/**
 * FormulaExplainer — Cartouche d'explication pédagogique avancée des formules
 *
 * Fonctionnalités :
 * 1. Affiche la formule principale en KaTeX agrandie avec un style haute lisibilité.
 * 2. Génère automatiquement ou à partir des données la grille "Anatomie de la formule" :
 *    - Symbole KaTeX
 *    - Nom clair en français
 *    - Unité usuelle
 *    - Rôle physique vulgarisé
 * 3. Permet d'interagir avec les variables (clic pour surligner et inspecter).
 * 4. Bouton de copie du code LaTeX et astuces d'unités de l'ingénieur.
 */
export default function FormulaExplainer({
  formula,
  name,
  description,
  latex,
  variables: customVariables,
  ruleOfThumb,
  className = ''
}) {
  const [selectedVar, setSelectedVar] = useState(null);
  const [copied, setCopied] = useState(false);
  const [expanded, setExpanded] = useState(true);

  // Normalisation des props (accepte un objet formula ou des props séparées)
  const formulaName = name || (formula && formula.name) || 'Formule de calcul';
  const formulaLatex = latex || (formula && formula.latex) || '\\sigma = \\frac{N}{A}';
  const formulaDesc = description || (formula && formula.description) || '';
  const formulaRule = ruleOfThumb || (formula && formula.ruleOfThumb) || '';
  const varsToUse = (customVariables || (formula && formula.variables)) || [];

  // Extraction automatique des variables enrichies
  const variables = extractVariablesFromLatex(formulaLatex, varsToUse);

  const handleCopyLatex = () => {
    navigator.clipboard.writeText(formulaLatex);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className={`rounded-2xl border border-slate-200 dark:border-slate-700/80 bg-white dark:bg-slate-900/90 shadow-sm overflow-hidden transition-all duration-200 hover:border-blue-300 dark:hover:border-blue-700/60 ${className}`}>
      {/* ── Header ── */}
      <div className="flex flex-wrap items-center justify-between gap-2 px-4 py-3 bg-gradient-to-r from-slate-50 to-blue-50/40 dark:from-slate-800/80 dark:to-slate-800/40 border-b border-slate-200 dark:border-slate-800">
        <div className="flex items-center gap-2 min-w-0">
          <span className="w-6 h-6 rounded-lg bg-blue-600 dark:bg-sky-500 text-white flex items-center justify-center text-xs font-bold shrink-0">
            ∑
          </span>
          <h4 className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white truncate">
            {formulaName}
          </h4>
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={handleCopyLatex}
            title="Copier le code LaTeX"
            className="text-[11px] px-2 py-1 rounded-md bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-sky-300 transition-colors flex items-center gap-1"
          >
            {copied ? '✓ Copié' : '📋 LaTeX'}
          </button>
          <button
            type="button"
            onClick={() => setExpanded(prev => !prev)}
            className="text-[11px] px-2 py-1 rounded-md bg-blue-50 dark:bg-blue-900/40 border border-blue-200 dark:border-blue-800 text-blue-700 dark:text-sky-300 font-semibold hover:bg-blue-100 transition-colors"
          >
            {expanded ? 'Masquer anatomie ▴' : 'Anatomie détaillée ▾'}
          </button>
        </div>
      </div>

      {/* ── Main Formula Display (Enlarged KaTeX) ── */}
      <div className="p-4 sm:p-5 bg-slate-50/50 dark:bg-slate-950/40 border-b border-slate-100 dark:border-slate-800/60">
        <div className="overflow-x-auto max-w-full py-2 math-scroll text-center text-base sm:text-lg">
          <SafeBlockMath math={formulaLatex} />
        </div>
        {formulaDesc && (
          <p className="text-xs text-slate-600 dark:text-slate-300 mt-2 text-center max-w-2xl mx-auto leading-relaxed">
            {formulaDesc}
          </p>
        )}
      </div>

      {/* ── Variable Anatomy Grid ── */}
      {expanded && (
        <div className="p-4 sm:p-5 space-y-4">
          {/* Section title & Quick Pills */}
          <div className="flex flex-wrap items-center justify-between gap-2">
            <div className="flex items-center gap-1.5">
              <span className="text-sm">🔬</span>
              <span className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider">
                Anatomie de la formule ({variables.length} composantes)
              </span>
            </div>
            <span className="text-[10px] text-slate-500 dark:text-slate-400 italic">
              Cliquez sur une variable pour l'isoler
            </span>
          </div>

          {/* Variables Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {variables.map((v, i) => {
              const isSelected = selectedVar === v.symbol;
              return (
                <div
                  key={`${v.symbol}-${i}`}
                  onClick={() => setSelectedVar(isSelected ? null : v.symbol)}
                  className={`rounded-xl p-3 border transition-all cursor-pointer select-none text-left ${
                    isSelected
                      ? 'bg-blue-50/90 dark:bg-blue-900/30 border-blue-500 shadow-md ring-2 ring-blue-400/40'
                      : 'bg-white dark:bg-slate-800/70 border-slate-200 dark:border-slate-700/60 hover:border-blue-300 dark:hover:border-slate-600'
                  }`}
                >
                  {/* Top row: Symbol + Name + Unit */}
                  <div className="flex items-start justify-between gap-2 mb-1.5">
                    <div className="flex items-center gap-2 min-w-0">
                      <div className="px-2 py-0.5 rounded-lg bg-blue-100 dark:bg-blue-900/60 text-blue-800 dark:text-sky-300 font-mono font-bold text-xs shrink-0 flex items-center justify-center">
                        <SafeInlineMath math={v.symbol} />
                      </div>
                      <p className="text-xs font-bold text-slate-900 dark:text-white leading-snug truncate">
                        {v.name}
                      </p>
                    </div>
                    {v.unit && (
                      <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-slate-100 dark:bg-slate-700/80 text-slate-600 dark:text-slate-300 shrink-0">
                        <SafeInlineMath math={v.unit} />
                      </span>
                    )}
                  </div>

                  {/* Physical role explanation */}
                  <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed pl-1 border-l-2 border-slate-200 dark:border-slate-700 mt-2">
                    {v.role}
                  </p>

                  {/* Category tag */}
                  {v.category && (
                    <div className="mt-2 flex items-center justify-between text-[10px] text-slate-400 dark:text-slate-500">
                      <span className="uppercase tracking-wider font-semibold">{v.category}</span>
                      {isSelected && (
                        <span className="text-blue-600 dark:text-sky-400 font-bold">Sélectionné ✓</span>
                      )}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* ── Rule of Thumb / Units Advice ── */}
          <div className="rounded-xl p-3 bg-amber-50/80 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-900/50 flex items-start gap-2.5">
            <span className="text-amber-600 dark:text-amber-400 text-base shrink-0 mt-0.5">💡</span>
            <div className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed">
              <span className="font-bold text-amber-900 dark:text-amber-300">Règle d'or de l'ingénieur : </span>
              {formulaRule || 'Toujours exprimer les forces en Newtons (N) et les dimensions géométriques en millimètres (mm). La division donne alors automatiquement des Mégapascals (1 N/mm² = 1 MPa) sans conversion d\'ordre de grandeur.'}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
