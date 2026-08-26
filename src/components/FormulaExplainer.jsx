import { useState } from 'react';
import { SafeBlockMath, SafeInlineMath } from './SafeMath.jsx';
import { extractVariablesFromLatex } from '../data/formula_dictionary.js';

/**
 * FormulaExplainer — Cartouche Universelle d'Explication Pédagogique des Formules
 *
 * Fonctionnalités clés :
 * 1. Formule principale KaTeX en grand format (haute lisibilité, support dark/light, SafeMath).
 * 2. Grille bicolore cyan/émeraude "Anatomie de la formule" avec décomposition exhaustive :
 *    - Symbole KaTeX exact
 *    - Nom clair en français
 *    - Unité usuelle (SI / chantier)
 *    - Rôle physique vulgarisé pour les ingénieurs débutants
 * 3. Dictionnaire de repli automatique (100+ variables de Génie Civil reconnues sans configuration).
 * 4. Mode interactif : sélection d'une variable au clic/toucher pour afficher ses détails isolés.
 * 5. Copie du code LaTeX et conseils de conversion d'unités de l'ingénieur.
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
  const currentDomain = domain || moduleSlug || (formula && (formula.domain || formula.moduleSlug)) || '';

  // Résolution automatique et contextualisée des variables selon le domaine
  const variables = extractVariablesFromLatex(formulaLatex, varsToUse, currentDomain);

  const handleCopyLatex = (e) => {
    e.stopPropagation();
    navigator.clipboard.writeText(formulaLatex);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className={`rounded-2xl border border-teal-200 dark:border-teal-900/60 bg-gradient-to-br from-white via-teal-50/20 to-emerald-50/30 dark:from-slate-900 dark:via-slate-900 dark:to-slate-950 shadow-sm overflow-hidden transition-all duration-200 hover:border-teal-400 dark:hover:border-teal-600/70 ${className}`}>
      {/* ── Cartouche Header (Bicolore Cyan / Émeraude) ── */}
      <div className="flex flex-wrap items-center justify-between gap-2 px-3.5 py-2.5 sm:px-4 sm:py-3 bg-gradient-to-r from-teal-500/10 via-cyan-500/10 to-emerald-500/10 dark:from-teal-950/50 dark:via-cyan-950/40 dark:to-emerald-950/40 border-b border-teal-200/70 dark:border-slate-800">
        <div className="flex items-center gap-2 min-w-0 flex-1">
          <span className="w-7 h-7 rounded-xl bg-gradient-to-br from-teal-600 to-cyan-500 text-white flex items-center justify-center text-xs font-bold shrink-0 shadow-sm">
            ∑
          </span>
          <div className="min-w-0">
            <span className="text-[10px] font-bold uppercase tracking-wider text-teal-700 dark:text-cyan-400">
              Formule de Calcul & Dimensionnement
            </span>
            <h4 className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white leading-tight truncate">
              {formulaName}
            </h4>
          </div>
        </div>

        <div className="flex items-center gap-1.5 shrink-0">
          <button
            type="button"
            onClick={handleCopyLatex}
            title="Copier la formule en code LaTeX"
            className="text-[11px] px-2.5 py-1 rounded-lg bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:text-teal-600 dark:hover:text-cyan-300 transition-colors flex items-center gap-1 shadow-2xs active:scale-95"
          >
            {copied ? '✓ Copié' : '📋 LaTeX'}
          </button>
          <button
            type="button"
            onClick={() => setExpanded(prev => !prev)}
            className="text-[11px] px-2.5 py-1 rounded-lg bg-teal-600 dark:bg-teal-700 text-white font-semibold hover:bg-teal-500 transition-all shadow-sm active:scale-95"
          >
            {expanded ? 'Masquer détails ▴' : 'Anatomie complète ▾'}
          </button>
        </div>
      </div>

      {/* ── Main Formula Display (Enlarged KaTeX) ── */}
      <div className="p-4 sm:p-5 bg-white/70 dark:bg-slate-950/60 border-b border-slate-100 dark:border-slate-800/80">
        <div className="overflow-x-auto max-w-full py-2 math-scroll text-center text-base sm:text-lg">
          <SafeBlockMath math={formulaLatex} />
        </div>
        {formulaDesc && (
          <p className="text-xs text-slate-600 dark:text-slate-300 mt-2 text-center max-w-2xl mx-auto leading-relaxed italic">
            {formulaDesc}
          </p>
        )}
      </div>

      {/* ── Variable Anatomy Grid ── */}
      {expanded && (
        <div className="p-3.5 sm:p-5 space-y-4">
          {/* Section title & Subtext */}
          <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 dark:border-slate-800 pb-2">
            <div className="flex items-center gap-1.5">
              <span className="text-sm">🔬</span>
              <span className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider">
                Anatomie des variables ({variables.length} termes)
              </span>
            </div>
            <span className="text-[10px] text-slate-500 dark:text-slate-400 font-medium">
              💡 Touchez une variable pour l'isoler
            </span>
          </div>

          {/* Variables Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5 sm:gap-3">
            {variables.map((v, i) => {
              const isSelected = selectedVar === v.symbol;
              return (
                <div
                  key={`${v.symbol}-${i}`}
                  onClick={() => setSelectedVar(isSelected ? null : v.symbol)}
                  className={`rounded-xl p-3 border transition-all duration-150 cursor-pointer select-none text-left ${
                    isSelected
                      ? 'bg-teal-50 dark:bg-teal-950/50 border-teal-500 shadow-md ring-2 ring-teal-400/40 dark:ring-teal-500/30'
                      : 'bg-white dark:bg-slate-800/70 border-slate-200/90 dark:border-slate-700/60 hover:border-teal-300 dark:hover:border-slate-600'
                  }`}
                >
                  {/* Symbol + Name + Unit */}
                  <div className="flex items-start justify-between gap-2 mb-1.5">
                    <div className="flex items-center gap-2 min-w-0">
                      <div className="px-2 py-0.5 rounded-md bg-teal-100 dark:bg-teal-900/60 text-teal-800 dark:text-cyan-300 font-mono font-bold text-xs shrink-0 flex items-center justify-center">
                        <SafeInlineMath math={v.symbol} />
                      </div>
                      <p className="text-xs font-bold text-slate-900 dark:text-white leading-snug truncate">
                        {v.name}
                      </p>
                    </div>
                    {v.unit && (
                      <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-slate-100 dark:bg-slate-700/80 text-slate-600 dark:text-slate-300 shrink-0 font-semibold">
                        <SafeInlineMath math={v.unit} />
                      </span>
                    )}
                  </div>

                  {/* Physical meaning / role */}
                  <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed pl-1.5 border-l-2 border-teal-300 dark:border-teal-700 mt-2">
                    {v.role || v.meaning}
                  </p>

                  {/* Category footer */}
                  {v.category && (
                    <div className="mt-2 flex items-center justify-between text-[10px] text-slate-400 dark:text-slate-500">
                      <span className="uppercase tracking-wider font-semibold text-[9px]">{v.category}</span>
                      {isSelected && (
                        <span className="text-teal-600 dark:text-cyan-400 font-bold">Sélectionné ✓</span>
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
              <span className="font-bold text-amber-900 dark:text-amber-300">Règle de bon sens de l'ingénieur : </span>
              {formulaRule || 'Homogénéité absolue des unités : convertissez toujours les forces en Newtons (N) et les dimensions en millimètres (mm). La contrainte s\'exprime alors directement en Mégapascals (1 N/mm² = 1 MPa) sans risque d\'erreur d\'ordre de grandeur.'}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
