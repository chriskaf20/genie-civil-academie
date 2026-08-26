import { useState } from 'react';
import { SafeInlineMath, SafeBlockMath } from './SafeMath.jsx';

/**
 * StructuralSketches — Croquis SVG didactiques des sections et contraintes
 *
 * Visualise :
 * 1. Section rectangulaire b x h (cotations b, h, d, z, enrobage c, aciers As).
 * 2. Répartition des contraintes σ (Élastique Navier vs Bloc rectangulaire plastique ELU).
 * 3. Diagramme des déformations ε et position de l'axe neutre (Bernoulli).
 * 4. Contraintes de cisaillement τ (Jourawski) et bielles à 45°.
 */
export default function StructuralSketches({
  initialTab = 'section',
  title = 'Croquis Didactique — Section & Contraintes',
  showTabs = true
}) {
  const [activeTab, setActiveTab] = useState(initialTab); // 'section' | 'stress' | 'strain' | 'shear'
  const [stressMode, setStressMode] = useState('elu'); // 'elu' (plastique) | 'els' (élastique)
  const [showRebarDetails, setShowRebarDetails] = useState(true);

  return (
    <div className="rounded-2xl border border-blue-200 dark:border-blue-900/60 bg-gradient-to-br from-blue-50/50 to-indigo-50/30 dark:from-slate-900/90 dark:to-slate-950 p-4 sm:p-5 shadow-sm space-y-4 my-4">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-blue-100 dark:border-slate-800 pb-3">
        <div className="flex items-center gap-2.5">
          <span className="w-8 h-8 rounded-xl bg-blue-600 dark:bg-sky-500 text-white flex items-center justify-center text-sm shadow-md">
            📐
          </span>
          <div>
            <span className="text-[10px] uppercase font-bold tracking-widest text-blue-600 dark:text-sky-400">
              Visualisation Didactique de Dimensionnement
            </span>
            <h4 className="text-sm font-bold text-slate-900 dark:text-white leading-tight">
              {title}
            </h4>
          </div>
        </div>

        {/* Tab Buttons */}
        {showTabs && (
          <div className="flex flex-wrap gap-1 bg-white dark:bg-slate-950 p-1 rounded-xl border border-slate-200 dark:border-slate-800 text-xs font-semibold">
            <button
              onClick={() => setActiveTab('section')}
              className={`px-3 py-1.5 rounded-lg transition-all ${
                activeTab === 'section'
                  ? 'bg-blue-600 text-white shadow-sm'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              1. Section <SafeInlineMath math="b \times h" />
            </button>
            <button
              onClick={() => setActiveTab('stress')}
              className={`px-3 py-1.5 rounded-lg transition-all ${
                activeTab === 'stress'
                  ? 'bg-blue-600 text-white shadow-sm'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              2. Contraintes <SafeInlineMath math="\sigma(y)" />
            </button>
            <button
              onClick={() => setActiveTab('strain')}
              className={`px-3 py-1.5 rounded-lg transition-all ${
                activeTab === 'strain'
                  ? 'bg-blue-600 text-white shadow-sm'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              3. Déformations <SafeInlineMath math="\varepsilon(y)" />
            </button>
            <button
              onClick={() => setActiveTab('shear')}
              className={`px-3 py-1.5 rounded-lg transition-all ${
                activeTab === 'shear'
                  ? 'bg-blue-600 text-white shadow-sm'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              4. Cisaillement <SafeInlineMath math="\tau(y)" />
            </button>
          </div>
        )}
      </div>

      {/* ── Content View ── */}
      <div className="w-full">
        {activeTab === 'section' && (
          <SectionSketch showRebarDetails={showRebarDetails} setShowRebarDetails={setShowRebarDetails} />
        )}
        {activeTab === 'stress' && (
          <StressSketch stressMode={stressMode} setStressMode={setStressMode} />
        )}
        {activeTab === 'strain' && (
          <StrainSketch />
        )}
        {activeTab === 'shear' && (
          <ShearSketch />
        )}
      </div>
    </div>
  );
}

// ── 1. SECTION SKETCH (b x h, d, z, As, enrobage) ───────────────────────────
function SectionSketch({ showRebarDetails, setShowRebarDetails }) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-center">
      {/* SVG Canvas */}
      <div className="lg:col-span-7 bg-white dark:bg-slate-950 p-4 rounded-xl border border-slate-200 dark:border-slate-800 flex justify-center items-center">
        <svg viewBox="0 0 380 340" className="w-full max-w-[360px] h-auto font-sans select-none">
          <defs>
            {/* Hachures béton comprimé */}
            <pattern id="diag-comp" width="10" height="10" patternTransform="rotate(45 0 0)" patternUnits="userSpaceOnUse">
              <line x1="0" y1="0" x2="0" y2="10" stroke="#3b82f6" strokeWidth="2" opacity="0.25" />
            </pattern>
            {/* Hachures zone tendue fissurée */}
            <pattern id="diag-tens" width="12" height="12" patternTransform="rotate(-45 0 0)" patternUnits="userSpaceOnUse">
              <line x1="0" y1="0" x2="0" y2="12" stroke="#f43f5e" strokeWidth="1" strokeDasharray="3 3" opacity="0.2" />
            </pattern>
          </defs>

          {/* ── Section rectangulaire b x h ── */}
          {/* Béton total */}
          <rect x="100" y="40" width="160" height="240" rx="4" fill="#f8fafc" stroke="#334155" strokeWidth="2" className="dark:fill-slate-900 dark:stroke-slate-600" />

          {/* Zone comprimée supérieure (0 à xu) */}
          <rect x="100" y="40" width="160" height="75" fill="url(#diag-comp)" />
          <rect x="100" y="40" width="160" height="75" fill="#3b82f6" opacity="0.1" />

          {/* Zone tendue fissurée inférieure (xu à h) */}
          <rect x="100" y="115" width="160" height="165" fill="url(#diag-tens)" />

          {/* Ligne d'axe neutre (G / xu) */}
          <line x1="80" y1="115" x2="280" y2="115" stroke="#3b82f6" strokeWidth="2" strokeDasharray="6 3" />
          <text x="285" y="119" fill="#2563eb" className="dark:fill-sky-400" fontSize="10" fontWeight="bold">Axe Neutre (x_u)</text>

          {/* Cadre / Étriers de cisaillement */}
          <rect x="114" y="54" width="132" height="212" rx="8" fill="none" stroke="#64748b" strokeWidth="2" strokeDasharray="4 2" />

          {/* Armatures comprimées supérieures A's (2 HA 10) */}
          <circle cx="128" cy="68" r="7" fill="#64748b" stroke="#1e293b" strokeWidth="1.5" />
          <circle cx="232" cy="68" r="7" fill="#64748b" stroke="#1e293b" strokeWidth="1.5" />
          <text x="180" y="72" textAnchor="middle" fill="#64748b" fontSize="9" fontWeight="bold">A's (montage)</text>

          {/* Armatures tendues inférieures As (3 HA 16) */}
          <circle cx="128" cy="250" r="9" fill="#ef4444" stroke="#991b1b" strokeWidth="2" />
          <circle cx="180" cy="250" r="9" fill="#ef4444" stroke="#991b1b" strokeWidth="2" />
          <circle cx="232" cy="250" r="9" fill="#ef4444" stroke="#991b1b" strokeWidth="2" />

          {/* Cotes de Largeur b */}
          <line x1="100" y1="25" x2="260" y2="25" stroke="#475569" strokeWidth="1.5" />
          <line x1="100" y1="20" x2="100" y2="30" stroke="#475569" strokeWidth="1.5" />
          <line x1="260" y1="20" x2="260" y2="30" stroke="#475569" strokeWidth="1.5" />
          <text x="180" y="20" textAnchor="middle" fill="#1e293b" className="dark:fill-slate-200" fontSize="12" fontWeight="bold">Largeur b</text>

          {/* Cotes de Hauteur totale h */}
          <line x1="60" y1="40" x2="60" y2="280" stroke="#475569" strokeWidth="1.5" />
          <line x1="55" y1="40" x2="65" y2="40" stroke="#475569" strokeWidth="1.5" />
          <line x1="55" y1="280" x2="65" y2="280" stroke="#475569" strokeWidth="1.5" />
          <text x="48" y="165" textAnchor="middle" transform="rotate(-90 48 165)" fill="#1e293b" className="dark:fill-slate-200" fontSize="12" fontWeight="bold">Hauteur h</text>

          {/* Cotes de Hauteur utile d */}
          <line x1="30" y1="40" x2="30" y2="250" stroke="#2563eb" strokeWidth="1.5" />
          <line x1="25" y1="40" x2="35" y2="40" stroke="#2563eb" strokeWidth="1.5" />
          <line x1="25" y1="250" x2="35" y2="250" stroke="#2563eb" strokeWidth="1.5" />
          <text x="18" y="145" textAnchor="middle" transform="rotate(-90 18 145)" fill="#2563eb" className="dark:fill-sky-400" fontSize="11" fontWeight="bold">Hauteur utile d ≈ 0.9h</text>

          {/* Enrobage c */}
          <line x1="260" y1="280" x2="285" y2="280" stroke="#94a3b8" strokeWidth="1" />
          <line x1="260" y1="250" x2="285" y2="250" stroke="#94a3b8" strokeWidth="1" />
          <line x1="280" y1="250" x2="280" y2="280" stroke="#f59e0b" strokeWidth="1.5" />
          <text x="292" y="268" fill="#d97706" className="dark:fill-amber-400" fontSize="10" fontWeight="bold">c (enrobage)</text>

          {/* Label As */}
          <line x1="180" y1="260" x2="180" y2="300" stroke="#ef4444" strokeWidth="1.5" />
          <text x="180" y="318" textAnchor="middle" fill="#dc2626" className="dark:fill-rose-400" fontSize="12" fontWeight="bold">
            Aciers tendus As (HA)
          </text>
        </svg>
      </div>

      {/* Explanatory Cards */}
      <div className="lg:col-span-5 space-y-3">
        <div className="p-3.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
          <p className="text-xs font-bold text-blue-700 dark:text-sky-300 uppercase tracking-wide mb-1">
            📏 Relations géométriques fondamentales
          </p>
          <ul className="text-xs text-slate-600 dark:text-slate-300 space-y-1.5">
            <li>• <strong>Hauteur utile <SafeInlineMath math="d" /></strong> : <SafeInlineMath math="d = h - c - \phi_{cadre} - \phi_L/2 \approx 0{,}9 \cdot h" /></li>
            <li>• <strong>Bras de levier interne <SafeInlineMath math="z" /></strong> : Distance entre la résultante comprimée et les aciers : <SafeInlineMath math="z \approx 0{,}9 \cdot d" /></li>
            <li>• <strong>Enrobage <SafeInlineMath math="c_{nom}" /></strong> : Protection anti-corrosion et tenue au feu (<SafeInlineMath math="c = 30 \text{ à } 45 \text{ mm}" />).</li>
          </ul>
        </div>

        <div className="p-3.5 rounded-xl bg-amber-50/70 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-900/50">
          <p className="text-xs font-bold text-amber-800 dark:text-amber-300 mb-1">
            💡 Pourquoi le béton est fissuré en bas ?
          </p>
          <p className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed">
            Le béton a une excellente résistance en compression (<SafeInlineMath math="f_{ck} \ge 25 \text{ MPa}" />), mais une résistance en traction presque négligeable (<SafeInlineMath math="f_{ctm} \approx 2{,}6 \text{ MPa}" />). Dès que la poutre fléchit, la zone tendue se micro-fissure et <strong>l'acier <SafeInlineMath math="A_s" /> reprend 100 % de la traction</strong>.
          </p>
        </div>
      </div>
    </div>
  );
}

// ── 2. STRESS SKETCH (Élastique Navier vs Plastique ELU) ──────────────────────
function StressSketch({ stressMode, setStressMode }) {
  return (
    <div className="space-y-4">
      {/* Mode Switcher */}
      <div className="flex items-center justify-between bg-white dark:bg-slate-950 p-2.5 rounded-xl border border-slate-200 dark:border-slate-800">
        <span className="text-xs font-bold text-slate-700 dark:text-slate-300">
          Modèle de comportement mécanique :
        </span>
        <div className="flex gap-1">
          <button
            onClick={() => setStressMode('els')}
            className={`px-3 py-1 rounded-lg text-xs font-bold transition-all ${
              stressMode === 'els'
                ? 'bg-blue-600 text-white shadow-sm'
                : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400'
            }`}
          >
            Modèle Élastique Navier (ELS)
          </button>
          <button
            onClick={() => setStressMode('elu')}
            className={`px-3 py-1 rounded-lg text-xs font-bold transition-all ${
              stressMode === 'elu'
                ? 'bg-emerald-600 text-white shadow-sm'
                : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400'
            }`}
          >
            Bloc Plastique / Parabole (ELU Eurocode)
          </button>
        </div>
      </div>

      {/* SVG Canvas & Comparison */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-center">
        <div className="lg:col-span-7 bg-white dark:bg-slate-950 p-4 rounded-xl border border-slate-200 dark:border-slate-800 flex justify-center items-center">
          <svg viewBox="0 0 400 280" className="w-full max-w-[380px] h-auto font-sans select-none">
            {/* Section droite */}
            <rect x="50" y="30" width="80" height="200" rx="3" fill="#f1f5f9" stroke="#475569" strokeWidth="2" className="dark:fill-slate-900 dark:stroke-slate-600" />
            <text x="90" y="20" textAnchor="middle" fill="#475569" fontSize="10" fontWeight="bold">Section b×h</text>

            {/* Axe neutre */}
            <line x1="30" y1="110" x2="360" y2="110" stroke="#3b82f6" strokeWidth="1.5" strokeDasharray="4 3" />
            <text x="365" y="114" fill="#3b82f6" fontSize="9" fontWeight="bold">Axe Neutre</text>

            {/* Axe central de contrainte zéro */}
            <line x1="200" y1="20" x2="200" y2="240" stroke="#94a3b8" strokeWidth="1.5" />

            {stressMode === 'els' ? (
              // ── Diagramme Élastique Navier (Triangulaire) ──
              <g>
                {/* Zone comprimée (triangle haut) */}
                <polygon points="200,30 290,30 200,110" fill="#3b82f6" opacity="0.25" stroke="#2563eb" strokeWidth="2" />
                {/* Flèches de compression */}
                <line x1="290" y1="40" x2="205" y2="40" stroke="#2563eb" strokeWidth="1.5" markerEnd="url(#arrow)" />
                <line x1="260" y1="65" x2="205" y2="65" stroke="#2563eb" strokeWidth="1.5" />
                <line x1="230" y1="90" x2="205" y2="90" stroke="#2563eb" strokeWidth="1.5" />
                <text x="295" y="35" fill="#1d4ed8" className="dark:fill-sky-300" fontSize="11" fontWeight="bold">+σ_c (Compression)</text>

                {/* Zone tendue (triangle bas) */}
                <polygon points="200,110 120,230 200,230" fill="#f43f5e" opacity="0.2" stroke="#e11d48" strokeWidth="2" />
                <line x1="200" y1="210" x2="135" y2="210" stroke="#e11d48" strokeWidth="1.5" />
                <line x1="200" y1="170" x2="160" y2="170" stroke="#e11d48" strokeWidth="1.5" />
                <text x="110" y="245" textAnchor="middle" fill="#be123c" className="dark:fill-rose-300" fontSize="11" fontWeight="bold">-σ_t (Traction)</text>

                {/* Formule de Navier */}
                <rect x="190" y="245" width="160" height="25" rx="5" fill="#eff6ff" stroke="#bfdbfe" className="dark:fill-slate-900 dark:stroke-slate-700" />
                <text x="270" y="262" textAnchor="middle" fill="#1e40af" className="dark:fill-sky-300" fontSize="11" fontWeight="bold">σ(y) = (M · y) / I</text>
              </g>
            ) : (
              // ── Diagramme Bloc Rectangulaire Plastique ELU (Eurocode 2) ──
              <g>
                {/* Bloc rectangulaire équivalent (0.8 xu) */}
                <rect x="200" y="30" width="100" height="64" fill="#10b981" opacity="0.3" stroke="#059669" strokeWidth="2" />
                {/* Flèches de compression uniforme */}
                <line x1="300" y1="45" x2="205" y2="45" stroke="#059669" strokeWidth="2" />
                <line x1="300" y1="62" x2="205" y2="62" stroke="#059669" strokeWidth="2" />
                <line x1="300" y1="79" x2="205" y2="79" stroke="#059669" strokeWidth="2" />
                <text x="305" y="65" fill="#047857" className="dark:fill-emerald-400" fontSize="11" fontWeight="bold">σ_c = 0.85 · f_cd</text>

                {/* Force de traction concentrée dans l'acier */}
                <circle cx="200" cy="205" r="5" fill="#ef4444" />
                <line x1="200" y1="205" x2="110" y2="205" stroke="#ef4444" strokeWidth="2.5" />
                <text x="100" y="210" textAnchor="end" fill="#dc2626" className="dark:fill-rose-400" fontSize="11" fontWeight="bold">Fs = As · f_yd</text>

                {/* Bras de levier z */}
                <line x1="340" y1="62" x2="340" y2="205" stroke="#6366f1" strokeWidth="2" />
                <line x1="335" y1="62" x2="345" y2="62" stroke="#6366f1" strokeWidth="2" />
                <line x1="335" y1="205" x2="345" y2="205" stroke="#6366f1" strokeWidth="2" />
                <text x="350" y="140" fill="#4f46e5" className="dark:fill-indigo-400" fontSize="12" fontWeight="bold">z</text>

                {/* Formule de capacité portante MRd */}
                <rect x="180" y="245" width="200" height="25" rx="5" fill="#ecfdf5" stroke="#a7f3d0" className="dark:fill-slate-900 dark:stroke-slate-700" />
                <text x="280" y="262" textAnchor="middle" fill="#065f46" className="dark:fill-emerald-300" fontSize="11" fontWeight="bold">M_Rd = F_c · z = F_s · z</text>
              </g>
            )}
          </svg>
        </div>

        {/* Textual comparison */}
        <div className="lg:col-span-5 space-y-3">
          {stressMode === 'els' ? (
            <div className="p-3.5 rounded-xl bg-blue-50/80 dark:bg-slate-900 border border-blue-200 dark:border-slate-800">
              <p className="text-xs font-bold text-blue-900 dark:text-sky-300 mb-1.5">
                📐 Domaine Élastique Linéaire (Navier)
              </p>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed mb-2">
                Les contraintes varient proportionnellement à la distance <SafeInlineMath math="y" /> par rapport à la fibre neutre. La contrainte maximale vaut :
              </p>
              <div className="p-1.5 rounded bg-white dark:bg-slate-950 font-mono text-center text-xs">
                <SafeInlineMath math="\sigma_{max} = \frac{M}{I/v} = \frac{M}{W_{el}}" />
              </div>
            </div>
          ) : (
            <div className="p-3.5 rounded-xl bg-emerald-50/80 dark:bg-slate-900 border border-emerald-200 dark:border-slate-800">
              <p className="text-xs font-bold text-emerald-900 dark:text-emerald-300 mb-1.5">
                🛡️ Bloc Plastique Équivalent à l'ELU (Eurocode 2)
              </p>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed mb-2">
                Pour simplifier l'intégration du diagramme parabole-rectangle réel, l'Eurocode 2 adopte un bloc rectangulaire de hauteur <SafeInlineMath math="0{,}8 \cdot x_u" /> et de contrainte constante :
              </p>
              <div className="p-1.5 rounded bg-white dark:bg-slate-950 font-mono text-center text-xs">
                <SafeInlineMath math="F_c = 0{,}8 \cdot x_u \cdot b \cdot f_{cd} = F_s = A_s \cdot f_{yd}" />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

// ── 3. STRAIN SKETCH (Déformations de Bernoulli) ────────────────────────────
function StrainSketch() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-center">
      <div className="lg:col-span-7 bg-white dark:bg-slate-950 p-4 rounded-xl border border-slate-200 dark:border-slate-800 flex justify-center items-center">
        <svg viewBox="0 0 380 260" className="w-full max-w-[360px] h-auto font-sans select-none">
          {/* Ligne initiale verticale */}
          <line x1="180" y1="30" x2="180" y2="230" stroke="#94a3b8" strokeWidth="2" strokeDasharray="3 3" />
          <text x="180" y="20" textAnchor="middle" fill="#64748b" fontSize="10">Section initiale droite</text>

          {/* Section déformée inclinée (Hypothèse de Bernoulli) */}
          <line x1="260" y1="30" x2="90" y2="230" stroke="#3b82f6" strokeWidth="2.5" />

          {/* Axe neutre */}
          <line x1="50" y1="105" x2="330" y2="105" stroke="#0ea5e9" strokeWidth="1.5" strokeDasharray="4 2" />
          <circle cx="180" cy="105" r="4" fill="#0284c7" />
          <text x="335" y="108" fill="#0284c7" fontSize="9" fontWeight="bold">ε = 0 (Fibre neutre)</text>

          {/* Raccourcissement béton ε_cu2 */}
          <line x1="180" y1="30" x2="260" y2="30" stroke="#2563eb" strokeWidth="2" />
          <polygon points="260,30 250,26 250,34" fill="#2563eb" />
          <text x="270" y="34" fill="#1d4ed8" className="dark:fill-sky-300" fontSize="11" fontWeight="bold">ε_c ≤ 3.5 ‰</text>

          {/* Allongement acier ε_ud */}
          <line x1="180" y1="210" x2="105" y2="210" stroke="#ef4444" strokeWidth="2" />
          <polygon points="105,210 115,206 115,214" fill="#ef4444" />
          <text x="95" y="214" textAnchor="end" fill="#dc2626" className="dark:fill-rose-300" fontSize="11" fontWeight="bold">ε_s ≤ 10 ‰</text>
        </svg>
      </div>

      <div className="lg:col-span-5 space-y-3">
        <div className="p-3.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
          <p className="text-xs font-bold text-slate-900 dark:text-white mb-1">
            📐 Hypothèse fondamentale de Navier-Bernoulli
          </p>
          <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
            Les sections planes perpendiculaires à la ligne moyenne <strong>restent planes</strong> après déformation. Par conséquent, la déformation relative <SafeInlineMath math="\varepsilon(y)" /> est strictement linéaire sur toute la hauteur.
          </p>
        </div>
      </div>
    </div>
  );
}

// ── 4. SHEAR SKETCH (Jourawski & Bielles) ────────────────────────────────────
function ShearSketch() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-center">
      <div className="lg:col-span-7 bg-white dark:bg-slate-950 p-4 rounded-xl border border-slate-200 dark:border-slate-800 flex justify-center items-center">
        <svg viewBox="0 0 380 260" className="w-full max-w-[360px] h-auto font-sans select-none">
          {/* Poutre */}
          <rect x="40" y="40" width="70" height="180" rx="2" fill="#f8fafc" stroke="#475569" strokeWidth="1.5" className="dark:fill-slate-900 dark:stroke-slate-600" />

          {/* Axe neutre */}
          <line x1="20" y1="130" x2="350" y2="130" stroke="#3b82f6" strokeWidth="1" strokeDasharray="3 3" />

          {/* Profil parabolique de Jourawski */}
          <path d="M 180,40 Q 290,130 180,220" fill="#f97316" opacity="0.25" stroke="#ea580c" strokeWidth="2.5" />
          <line x1="180" y1="40" x2="180" y2="220" stroke="#94a3b8" strokeWidth="1.5" />

          {/* Pic de contrainte tangentielle tau_max */}
          <line x1="180" y1="130" x2="290" y2="130" stroke="#ea580c" strokeWidth="2" />
          <circle cx="290" cy="130" r="4" fill="#c2410c" />
          <text x="300" y="134" fill="#c2410c" className="dark:fill-orange-400" fontSize="11" fontWeight="bold">τ_max = 1.5 · V / A</text>

          {/* Nul en haut et bas */}
          <text x="190" y="52" fill="#64748b" fontSize="9">τ = 0</text>
          <text x="190" y="215" fill="#64748b" fontSize="9">τ = 0</text>
        </svg>
      </div>

      <div className="lg:col-span-5 space-y-3">
        <div className="p-3.5 rounded-xl bg-orange-50/70 dark:bg-slate-900 border border-orange-200 dark:border-slate-800">
          <p className="text-xs font-bold text-orange-900 dark:text-orange-300 mb-1">
            ⚡ Formule de Jourawski
          </p>
          <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed mb-2">
            La contrainte de cisaillement est <strong>maximale au niveau de la fibre neutre</strong> et nulle sur les fibres extrêmes supérieure et inférieure :
          </p>
          <div className="p-1.5 rounded bg-white dark:bg-slate-950 font-mono text-center text-xs">
            <SafeInlineMath math="\tau(y) = \frac{V \cdot S(y)}{I \cdot b(y)}" />
          </div>
        </div>
      </div>
    </div>
  );
}
