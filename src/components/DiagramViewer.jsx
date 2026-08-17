import { useState } from 'react';
import { SafeInlineMath } from './SafeMath.jsx';
import ErrorBoundary from './ErrorBoundary.jsx';

export default function DiagramViewer({
  type = 'trig_interactive',
  title,
  description,
  legend,
  annotations,
  cotations,
}) {
  const [activeTab, setActiveTab] = useState('diagram');
  const [angle, setAngle] = useState(30); // for force_decomposition & trig
  const [showStress, setShowStress] = useState(true); // for rebar_beam

  // Safe normalized type
  const safeType = typeof type === 'string' && type.trim() ? type.trim() : 'trig_interactive';

  return (
    <div className="w-full max-w-full overflow-hidden rounded-2xl border border-slate-200 dark:border-slate-700/60 bg-white dark:bg-slate-900/90 p-3 sm:p-5 space-y-4 shadow-sm card-hover">
      {/* Header with clear Tab Switcher */}
      <div className="flex flex-wrap items-center justify-between gap-2.5 border-b border-slate-200 dark:border-slate-800 pb-3">
        <div className="flex items-center gap-2 min-w-0 flex-1">
          <span className="text-xl shrink-0">📐</span>
          <div className="min-w-0">
            <div className="flex items-center gap-2">
              <p className="text-[10px] sm:text-xs uppercase tracking-widest text-blue-600 dark:text-sky-400 font-semibold truncate">Schéma Technique & Diagramme</p>
              <span className={`text-[9px] px-1.5 py-0.5 rounded font-mono font-bold ${
                activeTab === 'diagram'
                  ? 'bg-blue-100 text-blue-700 border border-blue-300 dark:bg-blue-500/20 dark:text-sky-300 dark:border-blue-500/30'
                  : 'bg-emerald-100 text-emerald-700 border border-emerald-300 dark:bg-emerald-500/20 dark:text-emerald-300 dark:border-emerald-500/30'
              }`}>
                {activeTab === 'diagram' ? 'MODE SCHÉMA' : 'MODE TABLEAU'}
              </span>
            </div>
            <h4 className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white mt-0.5 truncate">{title || getDiagramTitle(safeType)}</h4>
          </div>
        </div>

        {/* Tab Buttons with obvious active badges */}
        <div className="flex gap-1 p-1 bg-slate-100 dark:bg-slate-950 rounded-xl border border-slate-200 dark:border-slate-800 shrink-0 shadow-inner w-full sm:w-auto justify-stretch sm:justify-end">
          <button
            type="button"
            onClick={() => setActiveTab('diagram')}
            className={`flex-1 sm:flex-initial flex items-center justify-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-all duration-200 ${
              activeTab === 'diagram'
                ? 'bg-gradient-to-r from-blue-600 to-sky-500 text-white shadow-md ring-1 ring-sky-400/50'
                : 'text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-200 dark:hover:bg-slate-900/60'
            }`}
          >
            <span>📐</span>
            <span>Vue Schématique</span>
            {activeTab === 'diagram' && (
              <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
            )}
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('legend')}
            className={`flex-1 sm:flex-initial flex items-center justify-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-all duration-200 ${
              activeTab === 'legend'
                ? 'bg-gradient-to-r from-emerald-600 to-teal-500 text-white shadow-md ring-1 ring-emerald-400/50'
                : 'text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-200 dark:hover:bg-slate-900/60'
            }`}
          >
            <span>📋</span>
            <span>Légende & Cotations</span>
            {activeTab === 'legend' && (
              <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
            )}
          </button>
        </div>
      </div>

      {description && (
        <p className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed bg-slate-50 dark:bg-slate-950/60 p-3 rounded-xl border border-slate-200 dark:border-slate-800/60">
          {description}
        </p>
      )}

      {/* Render Diagram or Legend Tab wrapped in ErrorBoundary */}
      <ErrorBoundary title="Erreur lors du chargement du schéma ou de la légende">
        {activeTab === 'diagram' ? (
          <div className="space-y-3 w-full max-w-full overflow-hidden">
            {safeType === 'force_decomposition' && <ForceDecompositionDiagram angle={angle} setAngle={setAngle} />}
            {safeType === 'rebar_beam' && <RebarBeamDiagram showStress={showStress} setShowStress={setShowStress} />}
            {safeType === 'road_profile' && <RoadProfileDiagram />}
            {safeType === 'soil_profile' && <SoilProfileDiagram />}
            {safeType === 'bridge_structure' && <BridgeStructureDiagram />}
            {safeType === 'trig_interactive' && <TrigInteractiveDiagram angle={angle} setAngle={setAngle} />}
            {/* Fallback for unknown custom types */}
            {!['force_decomposition', 'rebar_beam', 'road_profile', 'soil_profile', 'bridge_structure', 'trig_interactive'].includes(safeType) && (
              <TrigInteractiveDiagram angle={angle} setAngle={setAngle} />
            )}
          </div>
        ) : (
          <DiagramLegend
            type={safeType}
            angle={angle}
            legend={legend}
            annotations={annotations}
            cotations={cotations}
          />
        )}
      </ErrorBoundary>
    </div>
  );
}

function getDiagramTitle(type) {
  switch (type) {
    case 'force_decomposition': return 'Décomposition des Forces sur Plan Incliné';
    case 'rebar_beam': return 'Coupe Transversale Poutre Béton Armé (Eurocode 2)';
    case 'road_profile': return "Profil en Travers d'une Chaussée Routière";
    case 'soil_profile': return 'Profil Géotechnique & Fondation Profonde';
    case 'bridge_structure': return "Coupe Longitudinale d'un Pont à Poutres";
    case 'trig_interactive': return 'Triangle Rectangle & Projections Trigonométriques';
    default: return 'Schéma Technique & Diagramme des Sollicitations';
  }
}

// ── 1. Force Decomposition Diagram ──────────────────────────────────────────
function ForceDecompositionDiagram({ angle = 30, setAngle }) {
  const safeAngle = typeof angle === 'number' && !isNaN(angle) ? angle : 30;
  const rad = (safeAngle * Math.PI) / 180;
  const W = 100; // Gravity force vector magnitude
  const Wn = (W * Math.cos(rad)).toFixed(1);
  const Wt = (W * Math.sin(rad)).toFixed(1);

  // SVG parameters
  const svgW = 420, svgH = 260;
  const slopeLen = 300;
  const originX = 60, originY = 220;
  const endX = originX + slopeLen * Math.cos(rad);
  const endY = originY - slopeLen * Math.sin(rad);

  // Block position on slope (at mid length)
  const blockDist = 160;
  const bx = originX + blockDist * Math.cos(rad);
  const by = originY - blockDist * Math.sin(rad);

  const vecScale = 1.0;

  // W: Straight down
  const wx2 = bx;
  const wy2 = by + W * vecScale;

  // Wn: Perpendicular to slope (into surface)
  const wnx2 = bx + Wn * Math.sin(rad) * vecScale;
  const wny2 = by + Wn * Math.cos(rad) * vecScale;

  // Wt: Parallel to slope (downward)
  const wtx2 = bx - Wt * Math.cos(rad) * vecScale;
  const wty2 = by + Wt * Math.sin(rad) * vecScale;

  // Reaction N: opposite of Wn
  const nx2 = bx - Wn * Math.sin(rad) * vecScale;
  const ny2 = by - Wn * Math.cos(rad) * vecScale;

  return (
    <div className="space-y-3 w-full max-w-full overflow-hidden">
      {/* Control slider */}
      <div className="flex items-center gap-3 bg-slate-950 p-2.5 sm:p-3 rounded-xl border border-slate-800">
        <span className="text-xs text-slate-400 font-medium whitespace-nowrap">Inclinaison θ :</span>
        <input
          type="range"
          min="5"
          max="55"
          value={safeAngle}
          onChange={e => setAngle && setAngle(Number(e.target.value))}
          className="flex-1 h-2 accent-sky-500 cursor-pointer"
        />
        <span className="text-xs font-bold font-mono text-sky-400 w-10 text-right">{safeAngle}°</span>
      </div>

      {/* SVG Canvas */}
      <div className="w-full max-w-full overflow-hidden rounded-xl bg-slate-950 border border-slate-800">
        <svg viewBox={`0 0 ${svgW} ${svgH}`} className="w-full h-auto max-w-full block">
          {/* Horizontal base ground line */}
          <line x1={originX - 20} y1={originY} x2={originX + slopeLen + 20} y2={originY}
            stroke="rgba(148,163,184,0.3)" strokeWidth="1.5" strokeDasharray="4,4" />

          {/* Inclined Surface */}
          <line x1={originX} y1={originY} x2={endX} y2={endY}
            stroke="#0F52BA" strokeWidth="4" strokeLinecap="round" />

          {/* Hatching under slope */}
          <polygon points={`${originX},${originY} ${endX},${endY} ${endX},${originY}`}
            fill="rgba(15,82,186,0.08)" />

          {/* Angle Arc */}
          <path d={`M ${originX + 40} ${originY} A 40 40 0 0 0 ${originX + 40 * Math.cos(rad)} ${originY - 40 * Math.sin(rad)}`}
            fill="rgba(56,189,248,0.15)" stroke="#38bdf8" strokeWidth="1.5" />
          <text x={originX + 50} y={originY - 10} fill="#38bdf8" fontSize="12" fontWeight="bold" fontFamily="JetBrains Mono">θ = {safeAngle}°</text>

          {/* Block on slope */}
          <g transform={`translate(${bx},${by}) rotate(${-safeAngle})`}>
            <rect x="-24" y="-30" width="48" height="30" fill="rgba(255,107,0,0.25)" stroke="#FF6B00" strokeWidth="2" rx="4" />
            <circle cx="0" cy="-15" r="4" fill="#FF6B00" />
          </g>

          {/* Vector W (Gravity, vertical down, RED) */}
          <line x1={bx} y1={by} x2={wx2} y2={wy2} stroke="#ef4444" strokeWidth="3" markerEnd="url(#arrow-red)" />
          <text x={wx2 + 8} y={wy2} fill="#ef4444" fontSize="11" fontWeight="bold" fontFamily="JetBrains Mono">W (100 kN)</text>

          {/* Vector Wn (Normal component, BLUE) */}
          <line x1={bx} y1={by} x2={wnx2} y2={wny2} stroke="#38bdf8" strokeWidth="2.5" strokeDasharray="3,3" />
          <text x={wnx2 + 8} y={wny2 + 4} fill="#38bdf8" fontSize="11" fontFamily="JetBrains Mono">Wn = {Wn} kN</text>

          {/* Vector Wt (Tangential component, ORANGE) */}
          <line x1={bx} y1={by} x2={wtx2} y2={wty2} stroke="#FF6B00" strokeWidth="2.5" strokeDasharray="3,3" />
          <text x={wtx2 - 75} y={wty2 + 4} fill="#FF6B00" fontSize="11" fontFamily="JetBrains Mono">Wt = {Wt} kN</text>

          {/* Vector N (Reaction, GREEN) */}
          <line x1={bx} y1={by} x2={nx2} y2={ny2} stroke="#10b981" strokeWidth="2.5" />
          <text x={nx2 - 60} y={ny2 - 4} fill="#10b981" fontSize="11" fontWeight="bold" fontFamily="JetBrains Mono">N (Réaction)</text>

          {/* Arrow Marker Definitions */}
          <defs>
            <marker id="arrow-red" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
              <path d="M 0 0 L 10 5 L 0 10 z" fill="#ef4444" />
            </marker>
          </defs>
        </svg>
      </div>

      {/* Live calculations */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
        <div className="bg-slate-950 p-2.5 rounded-xl border border-red-500/30 text-center">
          <p className="text-[10px] text-slate-400">Poids Total W</p>
          <p className="text-sm font-bold text-red-400 font-mono">100.0 kN</p>
        </div>
        <div className="bg-slate-950 p-2.5 rounded-xl border border-sky-500/30 text-center">
          <p className="text-[10px] text-slate-400">Pression Normale Wn</p>
          <p className="text-sm font-bold text-sky-400 font-mono">{Wn} kN</p>
          <div className="text-[9px] text-slate-500 font-mono mt-0.5 overflow-x-auto"><SafeInlineMath math="W \cos\theta" /></div>
        </div>
        <div className="bg-slate-950 p-2.5 rounded-xl border border-orange-500/30 text-center">
          <p className="text-[10px] text-slate-400">Poussée Glissement Wt</p>
          <p className="text-sm font-bold text-orange-400 font-mono">{Wt} kN</p>
          <div className="text-[9px] text-slate-500 font-mono mt-0.5 overflow-x-auto"><SafeInlineMath math="W \sin\theta" /></div>
        </div>
      </div>
    </div>
  );
}

// ── 2. Rebar Beam Diagram (Béton Armé - Eurocode 2) ─────────────────────────
function RebarBeamDiagram({ showStress = true, setShowStress }) {
  return (
    <div className="space-y-3 w-full max-w-full overflow-hidden">
      <div className="flex flex-wrap justify-between items-center gap-2 bg-slate-950 p-2.5 sm:p-3 rounded-xl border border-slate-800">
        <span className="text-xs text-slate-300 font-medium">Diagrammes d'efforts :</span>
        <button
          onClick={() => setShowStress && setShowStress(!showStress)}
          className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
            showStress ? 'bg-emerald-600 text-white' : 'bg-slate-800 text-slate-400'
          }`}
        >
          {showStress ? 'Masquer contraintes/déformations' : 'Afficher contraintes (ELU)'}
        </button>
      </div>

      <div className="w-full max-w-full overflow-hidden rounded-xl bg-slate-950 border border-slate-800">
        <svg viewBox="0 0 460 300" className="w-full h-auto max-w-full block">
          {/* Beam Concrete Cross Section */}
          <g transform="translate(40, 20)">
            {/* Concrete section */}
            <rect x="0" y="0" width="140" height="240" fill="rgba(74,85,104,0.4)" stroke="#718096" strokeWidth="2" rx="4" />
            <line x1="20" y1="30" x2="35" y2="45" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
            <line x1="80" y1="120" x2="95" y2="135" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />

            {/* Stirrup */}
            <rect x="12" y="12" width="116" height="216" fill="none" stroke="#FF6B00" strokeWidth="2.5" rx="3" />

            {/* Top Longitudinal Bars */}
            <circle cx="24" cy="24" r="7" fill="#38bdf8" stroke="#0F52BA" strokeWidth="1.5" />
            <circle cx="116" cy="24" r="7" fill="#38bdf8" stroke="#0F52BA" strokeWidth="1.5" />

            {/* Bottom Longitudinal Tension Bars */}
            <circle cx="24" cy="216" r="9" fill="#38bdf8" stroke="#0F52BA" strokeWidth="2" />
            <circle cx="70" cy="216" r="9" fill="#38bdf8" stroke="#0F52BA" strokeWidth="2" />
            <circle cx="116" cy="216" r="9" fill="#38bdf8" stroke="#0F52BA" strokeWidth="2" />

            {/* Neutral Axis */}
            <line x1="-15" y1="96" x2="155" y2="96" stroke="#eab308" strokeWidth="1.5" strokeDasharray="5,3" />
            <text x="160" y="99" fill="#eab308" fontSize="10" fontWeight="bold" fontFamily="JetBrains Mono">A.N. (y = 0.4d)</text>

            {/* Dimension b = 300 mm */}
            <line x1="0" y1="252" x2="140" y2="252" stroke="#94a3b8" strokeWidth="1" />
            <line x1="0" y1="247" x2="0" y2="257" stroke="#94a3b8" strokeWidth="1" />
            <line x1="140" y1="247" x2="140" y2="257" stroke="#94a3b8" strokeWidth="1" />
            <text x="70" y="265" fill="#94a3b8" fontSize="11" textAnchor="middle" fontFamily="JetBrains Mono">b = 300 mm</text>

            {/* Dimension h = 500 mm */}
            <line x1="-15" y1="0" x2="-15" y2="240" stroke="#94a3b8" strokeWidth="1" />
            <line x1="-20" y1="0" x2="-10" y2="0" stroke="#94a3b8" strokeWidth="1" />
            <line x1="-20" y1="240" x2="-10" y2="240" stroke="#94a3b8" strokeWidth="1" />
            <text x="-25" y="125" fill="#94a3b8" fontSize="11" textAnchor="middle" fontFamily="JetBrains Mono" transform="rotate(-90 -25 125)">h = 500 mm</text>

            {/* Cover */}
            <text x="35" y="234" fill="#FF6B00" fontSize="9" fontFamily="JetBrains Mono">c_nom = 35mm</text>
          </g>

          {/* Stress & Strain Diagrams */}
          {showStress && (
            <g transform="translate(260, 20)">
              {/* Strain diagram */}
              <text x="30" y="-5" fill="#38bdf8" fontSize="11" fontWeight="bold" textAnchor="middle">Déformations ε</text>
              <line x1="30" y1="0" x2="30" y2="240" stroke="rgba(148,163,184,0.4)" strokeWidth="1" />
              <polygon points="30,0 55,0 30,96" fill="rgba(56,189,248,0.2)" stroke="#38bdf8" strokeWidth="1.5" />
              <polygon points="30,96 5,216 30,216" fill="rgba(239,68,68,0.2)" stroke="#ef4444" strokeWidth="1.5" />
              <text x="60" y="12" fill="#38bdf8" fontSize="9" fontFamily="JetBrains Mono">εcu = 3.5‰</text>
              <text x="-15" y="220" fill="#ef4444" fontSize="9" fontFamily="JetBrains Mono">εuk = 10‰</text>

              {/* Stress block */}
              <text x="140" y="-5" fill="#10b981" fontSize="11" fontWeight="bold" textAnchor="middle">Contraintes σ (ELU)</text>
              <line x1="140" y1="0" x2="140" y2="240" stroke="rgba(148,163,184,0.4)" strokeWidth="1" />
              <rect x="140" y="0" width="40" height="76" fill="rgba(16,185,129,0.3)" stroke="#10b981" strokeWidth="1.5" />
              <text x="145" y="42" fill="#10b981" fontSize="10" fontWeight="bold" fontFamily="JetBrains Mono">fcd = 16.7 MPa</text>

              {/* Resultant Tension Force */}
              <line x1="140" y1="216" x2="185" y2="216" stroke="#38bdf8" strokeWidth="2.5" markerEnd="url(#arrow-blue)" />
              <text x="145" y="234" fill="#38bdf8" fontSize="10" fontWeight="bold" fontFamily="JetBrains Mono">Fs = As · fyd</text>
            </g>
          )}

          <defs>
            <marker id="arrow-blue" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
              <path d="M 0 0 L 10 5 L 0 10 z" fill="#38bdf8" />
            </marker>
          </defs>
        </svg>
      </div>

      {/* Legend badge row */}
      <div className="flex flex-wrap gap-2 text-[11px]">
        <span className="px-2.5 py-1 rounded-full bg-slate-950 border border-slate-700 text-slate-300">Section : <strong className="text-white">30×50 cm</strong></span>
        <span className="px-2.5 py-1 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-300">Armatures tendues : <strong className="text-white">3 HA 20 (9.42 cm²)</strong></span>
        <span className="px-2.5 py-1 rounded-full bg-orange-500/10 border border-orange-500/30 text-orange-300">Étriers : <strong className="text-white">HA 8 (esp. 15 cm)</strong></span>
        <span className="px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 flex items-center gap-1">
          <span>Enrobage</span> <SafeInlineMath math="c_{nom}" /> = <strong className="text-white">35 mm</strong>
        </span>
      </div>
    </div>
  );
}

// ── 3. Road Profile Diagram (Profil en Travers Chaussée) ────────────────────
function RoadProfileDiagram() {
  return (
    <div className="space-y-3 w-full max-w-full overflow-hidden">
      <div className="w-full max-w-full overflow-hidden rounded-xl bg-slate-950 border border-slate-800">
        <svg viewBox="0 0 460 240" className="w-full h-auto max-w-full block">
          {/* Subgrade Soil */}
          <polygon points="20,190 440,190 440,220 20,220" fill="rgba(113,128,150,0.3)" />

          {/* Couche de Forme GNT */}
          <polygon points="40,160 420,160 430,190 30,190" fill="rgba(160,174,192,0.4)" stroke="#a0aec0" strokeWidth="1" />
          <text x="230" y="178" fill="#cbd5e1" fontSize="10" textAnchor="middle" fontFamily="JetBrains Mono">Couche de Forme (GNT 0/31.5 — 30 cm)</text>

          {/* Couche de Base GB */}
          <polygon points="50,135 410,135 420,160 40,160" fill="rgba(74,85,104,0.7)" stroke="#718096" strokeWidth="1" />
          <text x="230" y="150" fill="#e2e8f0" fontSize="10" textAnchor="middle" fontFamily="JetBrains Mono">Couche de Base (Grave Bitume GB — 12 cm)</text>

          {/* Couche de Liaison EME */}
          <polygon points="55,120 405,120 410,135 50,135" fill="rgba(45,55,72,0.85)" stroke="#4a5568" strokeWidth="1" />

          {/* Couche de Roulement BB */}
          <polygon points="60,113 230,108 400,113 405,120 55,120" fill="#1a202c" stroke="#38bdf8" strokeWidth="1.5" />
          <text x="230" y="100" fill="#38bdf8" fontSize="10" fontWeight="bold" textAnchor="middle" fontFamily="JetBrains Mono">Couche de Roulement (BBM — 4 cm)</text>

          {/* Slope Indicators */}
          <line x1="100" y1="95" x2="160" y2="97" stroke="#FF6B00" strokeWidth="1.5" markerEnd="url(#arrow-orange)" />
          <text x="130" y="90" fill="#FF6B00" fontSize="9" fontWeight="bold" textAnchor="middle">Dévers -2.5%</text>

          <line x1="360" y1="95" x2="300" y2="97" stroke="#FF6B00" strokeWidth="1.5" markerEnd="url(#arrow-orange)" />
          <text x="330" y="90" fill="#FF6B00" fontSize="9" fontWeight="bold" textAnchor="middle">Dévers -2.5%</text>

          {/* Drainage Ditch */}
          <polygon points="430,190 445,215 455,215 460,190" fill="rgba(56,189,248,0.2)" stroke="#38bdf8" strokeWidth="1" />
          <text x="445" y="180" fill="#38bdf8" fontSize="9">Fossé</text>

          {/* Center Line Axis */}
          <line x1="230" y1="70" x2="230" y2="210" stroke="#eab308" strokeWidth="1" strokeDasharray="6,4" />
          <text x="230" y="65" fill="#eab308" fontSize="10" textAnchor="middle" fontFamily="JetBrains Mono">Axe de la chaussée</text>

          <defs>
            <marker id="arrow-orange" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
              <path d="M 0 0 L 10 5 L 0 10 z" fill="#FF6B00" />
            </marker>
          </defs>
        </svg>
      </div>
    </div>
  );
}

// ── 4. Soil Profile Diagram (Profil Géotechnique) ───────────────────────────
function SoilProfileDiagram() {
  return (
    <div className="space-y-3 w-full max-w-full overflow-hidden">
      <div className="w-full max-w-full overflow-hidden rounded-xl bg-slate-950 border border-slate-800">
        <svg viewBox="0 0 460 250" className="w-full h-auto max-w-full block">
          {/* Layer 1: Topsoil / Fill */}
          <rect x="0" y="20" width="460" height="50" fill="rgba(180,83,9,0.15)" stroke="rgba(180,83,9,0.4)" strokeWidth="1" />
          <text x="20" y="45" fill="#fcd34d" fontSize="11" fontWeight="bold" fontFamily="JetBrains Mono">Couche 1 : Terre végétale / Remblai (0.00 à -1.50 m)</text>

          {/* Layer 2: Overconsolidated Clay */}
          <rect x="0" y="70" width="460" height="90" fill="rgba(15,82,186,0.15)" stroke="rgba(15,82,186,0.4)" strokeWidth="1" />
          <text x="20" y="105" fill="#93c5fd" fontSize="11" fontWeight="bold" fontFamily="JetBrains Mono">Couche 2 : Argile plastique (c' = 25 kPa, φ' = 22°)</text>

          {/* Water Table Level Line */}
          <line x1="0" y1="115" x2="460" y2="115" stroke="#38bdf8" strokeWidth="2" strokeDasharray="8,4" />
          <text x="320" y="110" fill="#38bdf8" fontSize="10" fontWeight="bold" fontFamily="JetBrains Mono">▼ Nappe phréatique (-2.20 m)</text>

          {/* Layer 3: Good Bearing Marl */}
          <rect x="0" y="160" width="460" height="80" fill="rgba(16,185,129,0.15)" stroke="rgba(16,185,129,0.4)" strokeWidth="1" />
          <text x="20" y="185" fill="#6ee7b7" fontSize="11" fontWeight="bold" fontFamily="JetBrains Mono">Couche 3 : Marne compacte / Bon sol (q_admis = 0.35 MPa)</text>

          {/* Foundation Footing */}
          <g transform="translate(180, 20)">
            <rect x="40" y="0" width="20" height="65" fill="#4a5568" stroke="#718096" strokeWidth="1.5" />
            <polygon points="10,65 90,65 100,90 0,90" fill="#2d3748" stroke="#0F52BA" strokeWidth="2" />
            <text x="50" y="82" fill="#38bdf8" fontSize="9" textAnchor="middle" fontWeight="bold">Semelle Béton Armé</text>

            <path d="M 0 90 C -20 140, 120 140, 100 90" fill="none" stroke="#ef4444" strokeWidth="1.5" strokeDasharray="4,3" />
            <text x="50" y="130" fill="#ef4444" fontSize="9" textAnchor="middle" fontFamily="JetBrains Mono">Bulbe des contraintes (σ_z)</text>
          </g>
        </svg>
      </div>
    </div>
  );
}

// ── 5. Bridge Structure Diagram (Pont à Poutres) ────────────────────────────
function BridgeStructureDiagram() {
  return (
    <div className="space-y-3 w-full max-w-full overflow-hidden">
      <div className="w-full max-w-full overflow-hidden rounded-xl bg-slate-950 border border-slate-800">
        <svg viewBox="0 0 460 220" className="w-full h-auto max-w-full block">
          {/* River Water Level */}
          <rect x="120" y="160" width="220" height="40" fill="rgba(56,189,248,0.2)" />
          <path d="M 120 160 Q 175 155, 230 160 T 340 160" fill="none" stroke="#38bdf8" strokeWidth="1.5" />

          {/* Abutment Left */}
          <polygon points="20,100 80,100 80,180 20,180" fill="#4a5568" stroke="#718096" strokeWidth="2" />
          <text x="50" y="140" fill="#e2e8f0" fontSize="10" textAnchor="middle" fontWeight="bold">Culée C1</text>

          {/* Abutment Right */}
          <polygon points="380,100 440,100 440,180 380,180" fill="#4a5568" stroke="#718096" strokeWidth="2" />
          <text x="410" y="140" fill="#e2e8f0" fontSize="10" textAnchor="middle" fontWeight="bold">Culée C2</text>

          {/* Pier */}
          <polygon points="215,100 245,100 245,185 215,185" fill="#2d3748" stroke="#0F52BA" strokeWidth="2" />
          <text x="230" y="145" fill="#38bdf8" fontSize="10" textAnchor="middle" fontWeight="bold">Pile P1</text>

          {/* Elastomeric Bearings */}
          <rect x="70" y="94" width="16" height="6" fill="#FF6B00" />
          <rect x="218" y="94" width="16" height="6" fill="#FF6B00" />
          <rect x="236" y="94" width="16" height="6" fill="#FF6B00" />
          <rect x="384" y="94" width="16" height="6" fill="#FF6B00" />

          {/* Deck Girder */}
          <rect x="65" y="80" width="340" height="14" fill="#0F52BA" stroke="#38bdf8" strokeWidth="1.5" rx="2" />
          <text x="230" y="91" fill="#ffffff" fontSize="10" textAnchor="middle" fontWeight="bold" fontFamily="JetBrains Mono">Tablier Béton Précontraint (Portée = 35 m)</text>

          {/* Safety Barrier */}
          <line x1="65" y1="72" x2="405" y2="72" stroke="#94a3b8" strokeWidth="2" />
        </svg>
      </div>
    </div>
  );
}

// ── 6. Trig Interactive Diagram ─────────────────────────────────────────────
function TrigInteractiveDiagram({ angle = 30, setAngle }) {
  const safeAngle = typeof angle === 'number' && !isNaN(angle) ? angle : 30;
  const rad = (safeAngle * Math.PI) / 180;
  const H = 160;
  const opp = (H * Math.sin(rad)).toFixed(1);
  const adj = (H * Math.cos(rad)).toFixed(1);

  return (
    <div className="space-y-3 w-full max-w-full overflow-hidden">
      <div className="flex items-center gap-3 bg-slate-950 p-2.5 sm:p-3 rounded-xl border border-slate-800">
        <span className="text-xs text-slate-400 font-medium whitespace-nowrap">Angle θ :</span>
        <input
          type="range"
          min="1"
          max="89"
          value={safeAngle}
          onChange={e => setAngle && setAngle(Number(e.target.value))}
          className="flex-1 h-2 accent-sky-500 cursor-pointer"
        />
        <span className="text-xs font-bold font-mono text-sky-400 w-10 text-right">{safeAngle}°</span>
      </div>

      <div className="w-full max-w-full overflow-hidden rounded-xl bg-slate-950 border border-slate-800">
        <svg viewBox="0 0 420 220" className="w-full h-auto max-w-full block">
          <g transform="translate(50, 180)">
            {/* Base Adjacent */}
            <line x1="0" y1="0" x2={adj} y2="0" stroke="#FF6B00" strokeWidth="3" />
            <text x={adj / 2} y="20" fill="#FF6B00" fontSize="11" textAnchor="middle" fontFamily="JetBrains Mono">Adjacent ({adj} m)</text>

            {/* Height Opposite */}
            <line x1={adj} y1="0" x2={adj} y2={-opp} stroke="#10b981" strokeWidth="3" />
            <text x={Number(adj) + 12} y={-opp / 2} fill="#10b981" fontSize="11" fontFamily="JetBrains Mono">Opposé ({opp} m)</text>

            {/* Hypotenuse */}
            <line x1="0" y1="0" x2={adj} y2={-opp} stroke="#38bdf8" strokeWidth="4" />
            <text x={adj / 2 - 20} y={-opp / 2 - 10} fill="#38bdf8" fontSize="11" fontWeight="bold" fontFamily="JetBrains Mono">Hypoténuse (160 m)</text>

            {/* Right Angle marker */}
            <rect x={adj - 15} y="-15" width="15" height="15" fill="none" stroke="rgba(148,163,184,0.6)" strokeWidth="1.5" />

            {/* Angle Arc */}
            <path d={`M 35 0 A 35 35 0 0 0 ${35 * Math.cos(rad)} ${-35 * Math.sin(rad)}`} fill="rgba(56,189,248,0.2)" stroke="#38bdf8" strokeWidth="2" />
            <text x="45" y="-10" fill="#38bdf8" fontSize="12" fontWeight="bold">θ</text>
          </g>
        </svg>
      </div>
    </div>
  );
}

// ── Diagram Legend & Annotations Component ───────────────────────────────────
function DiagramLegend({ type = 'trig_interactive', angle = 30, legend, annotations, cotations }) {
  const safeAngle = typeof angle === 'number' && !isNaN(angle) ? angle : 30;

  // Check if custom user data was passed
  const hasCustomLegend = Array.isArray(legend) && legend.length > 0;
  const hasCustomCotations = Array.isArray(cotations) && cotations.length > 0;
  const hasCustomAnnotations = Array.isArray(annotations) && annotations.length > 0;

  // Retrieve built-in default data if custom is missing
  const defaultItems = getDefaultLegendItems(type, safeAngle);
  const technicalTableData = getDetailedTechnicalTable(type, safeAngle);

  return (
    <div className="space-y-4 text-xs bg-slate-50 dark:bg-slate-950 p-3 sm:p-5 rounded-xl border border-slate-200 dark:border-slate-800 w-full max-w-full overflow-hidden animate-fade-up">
      {/* Header Banner */}
      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-200 dark:border-slate-800/80 pb-2.5">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          <h5 className="font-bold text-emerald-700 dark:text-emerald-400 uppercase tracking-wider text-xs sm:text-sm">
            Tableau Technique des Cotations & Règles Eurocodes
          </h5>
        </div>
        <span className="text-[10px] text-slate-500 dark:text-slate-400 font-mono bg-white dark:bg-slate-900 px-2 py-0.5 rounded border border-slate-200 dark:border-slate-800 shadow-sm">
          Normes NF EN / EC
        </span>
      </div>

      {/* 1. Full-Width Stylized 3-Column Technical Table */}
      <div className="w-full max-w-full overflow-hidden rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/40 shadow-inner">
        <div className="overflow-x-auto max-w-full py-0.5 table-scroll">
          <table className="w-full min-w-full text-left text-xs border-collapse">
            <thead>
              <tr className="border-b border-slate-200 dark:border-slate-800 bg-slate-100 dark:bg-slate-950/90 text-slate-700 dark:text-slate-300">
                <th className="py-2.5 px-3 font-bold text-blue-700 dark:text-sky-400 uppercase tracking-wider text-[11px] w-28 sm:w-36 shrink-0">
                  1. Symbole / Élément
                </th>
                <th className="py-2.5 px-3 font-bold text-slate-800 dark:text-slate-300 uppercase tracking-wider text-[11px] min-w-[140px]">
                  2. Désignation & Unité
                </th>
                <th className="py-2.5 px-3 font-bold text-emerald-700 dark:text-emerald-400 uppercase tracking-wider text-[11px] min-w-[180px]">
                  3. Valeur / Règle Eurocode
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-slate-800/60">
              {hasCustomCotations ? (
                cotations.map((row, i) => (
                  <tr key={i} className={`hover:bg-slate-50 dark:hover:bg-slate-800/40 transition-colors ${i % 2 === 0 ? 'bg-slate-50/50 dark:bg-slate-900/20' : 'bg-transparent'}`}>
                    <td className="py-2.5 px-3 font-mono font-bold text-blue-700 dark:text-sky-300 whitespace-nowrap align-top">
                      {row?.symbol ? <SafeInlineMath math={row.symbol} /> : (row?.name || `Élément ${i + 1}`)}
                    </td>
                    <td className="py-2.5 px-3 font-medium text-slate-800 dark:text-slate-200 align-top">
                      <div>{row?.designation || row?.name || row?.label || '-'}</div>
                      {row?.unit && <span className="text-[10px] text-slate-500 dark:text-slate-400 font-mono">[{row.unit}]</span>}
                    </td>
                    <td className="py-2.5 px-3 text-slate-700 dark:text-slate-300 align-top">
                      <div className="font-mono text-emerald-700 dark:text-emerald-300 font-semibold">
                        {row?.value ? <SafeInlineMath math={String(row.value)} /> : (row?.val || '-')}
                      </div>
                      {row?.rule && <div className="text-[10px] text-slate-500 dark:text-slate-400 mt-0.5">{row.rule}</div>}
                    </td>
                  </tr>
                ))
              ) : (
                technicalTableData.map((row, i) => (
                  <tr key={i} className={`hover:bg-slate-50 dark:hover:bg-slate-800/40 transition-colors ${i % 2 === 0 ? 'bg-slate-50/50 dark:bg-slate-900/30' : 'bg-transparent'}`}>
                    {/* Colonne 1: Symbole / Élément */}
                    <td className="py-2.5 px-3 align-top font-mono font-bold text-blue-700 dark:text-sky-300 whitespace-nowrap">
                      <div className="flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-500 dark:bg-sky-400 shrink-0" />
                        <SafeInlineMath math={row.symbol} />
                      </div>
                    </td>
                    {/* Colonne 2: Désignation & Unité */}
                    <td className="py-2.5 px-3 align-top text-slate-800 dark:text-slate-200">
                      <p className="font-semibold text-slate-900 dark:text-white leading-snug">{row.designation}</p>
                      {row.unit && (
                        <span className="inline-block mt-0.5 text-[10px] text-blue-700 dark:text-sky-400/90 font-mono bg-blue-50 dark:bg-sky-500/10 px-1.5 py-0.2 rounded border border-blue-200 dark:border-sky-500/20">
                          {row.unit}
                        </span>
                      )}
                    </td>
                    {/* Colonne 3: Valeur / Règle Eurocode associée */}
                    <td className="py-2.5 px-3 align-top text-slate-700 dark:text-slate-300">
                      <div className="font-mono text-emerald-700 dark:text-emerald-300 font-bold leading-relaxed">
                        {row.mathValue ? <SafeInlineMath math={row.mathValue} /> : row.value}
                      </div>
                      <p className="text-[10px] text-slate-500 dark:text-slate-400 mt-0.5 leading-relaxed">{row.eurocodeRule}</p>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* 2. Key Observations & Summary Badges */}
      <div className="pt-2">
        <p className="text-[11px] font-bold text-slate-600 dark:text-slate-400 uppercase tracking-wider mb-2 flex items-center gap-1.5">
          <span>💡</span>
          <span>Synthèse & Justifications Techniques</span>
        </p>

        {hasCustomLegend ? (
          <ul className="space-y-1.5 text-slate-700 dark:text-slate-300">
            {legend.map((item, idx) => (
              <li key={idx} className="flex items-start gap-2.5">
                <span
                  className="w-2.5 h-2.5 rounded-full mt-1 shrink-0"
                  style={{ backgroundColor: item?.color || '#38bdf8' }}
                />
                <div className="leading-relaxed min-w-0">
                  <strong className="text-slate-900 dark:text-white">{item?.symbol || item?.label || `Élément ${idx + 1}`}</strong>
                  {item?.unit ? <span className="text-blue-700 dark:text-sky-300 font-mono text-[10px] ml-1">({item.unit})</span> : null}
                  {item?.desc || item?.description ? ` : ${item.desc || item.description}` : ''}
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {defaultItems.map((item, idx) => (
              <div key={idx} className="p-2.5 rounded-xl bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800/80 flex items-start gap-2 shadow-sm">
                <span className={`w-2.5 h-2.5 rounded-full mt-1 shrink-0 ${item.dotClass || 'bg-sky-400'}`} />
                <div className="min-w-0 flex-1 leading-relaxed">
                  <strong className="text-slate-900 dark:text-white text-[11px]">{item.title}</strong>
                  <p className="text-[10px] text-slate-600 dark:text-slate-300 mt-0.5">
                    {item.text}{' '}
                    {item.math && (
                      <span className="inline-block mx-0.5 font-mono text-blue-700 dark:text-sky-300">
                        (<SafeInlineMath math={item.math} />)
                      </span>
                    )}
                  </p>
                  {item.extra && <p className="text-[9px] text-slate-500 font-mono mt-0.5">{item.extra}</p>}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* 3. Annotations list if available */}
      {hasCustomAnnotations && (
        <div className="pt-2 border-t border-slate-200 dark:border-slate-800/60">
          <p className="text-[11px] font-semibold text-slate-600 dark:text-slate-400 uppercase tracking-wider mb-1.5">Annotations de Chantier :</p>
          <ul className="space-y-1 text-slate-600 dark:text-slate-400">
            {annotations.map((ann, i) => (
              <li key={i} className="flex items-center gap-2">
                <span className="text-blue-600 dark:text-sky-400 text-xs">▸</span>
                <span>{typeof ann === 'string' ? ann : ann?.text || JSON.stringify(ann)}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

// ── Detailed 3-Column Technical Table Generator ─────────────────────────────
function getDetailedTechnicalTable(type, angle = 30) {
  switch (type) {
    case 'rebar_beam':
      return [
        {
          symbol: 'b',
          designation: 'Largeur de coffrage de la section',
          unit: 'mm',
          mathValue: '300\\text{ mm}',
          eurocodeRule: 'Dimension transversale normalisée / Coffrage régulier',
        },
        {
          symbol: 'h',
          designation: 'Hauteur totale de la poutre',
          unit: 'mm',
          mathValue: '500\\text{ mm}',
          eurocodeRule: 'Hauteur statique globale (Élancement L/12 à L/15)',
        },
        {
          symbol: 'd',
          designation: 'Hauteur utile de calcul en flexion',
          unit: 'mm',
          mathValue: 'd = h - c - \\phi_t - \\phi_l/2 = 445\\text{ mm}',
          eurocodeRule: 'Distance fibre extrême comprimée au centre de gravité des aciers (EC2 §5.3)',
        },
        {
          symbol: 'c_{nom}',
          designation: "Enrobage nominal de durabilité",
          unit: 'mm',
          mathValue: 'c_{nom} = c_{min} + \\Delta c_{dev} = 35\\text{ mm}',
          eurocodeRule: 'Classe d exposition XC4, protection anti-corrosion 50 ans (EC2 §4.4.1)',
        },
        {
          symbol: 'A_s',
          designation: 'Section d armatures tendues longitudinales',
          unit: 'cm²',
          mathValue: '3\\text{ HA }20 = 9.42\\text{ cm}^2',
          eurocodeRule: 'Reprise intégrale du moment de traction ELU M_Ed (Pivot B)',
        },
        {
          symbol: "A_s'",
          designation: 'Armatures supérieures de montage',
          unit: 'cm²',
          mathValue: '2\\text{ HA }12 = 2.26\\text{ cm}^2',
          eurocodeRule: 'Maintien rigide de la cage et limitation du fluage ELS',
        },
        {
          symbol: 'A_{sw} / s',
          designation: 'Armatures transversales (Étriers / Cadres)',
          unit: 'cm²/m',
          mathValue: '\\text{HA }8\\text{ espacés de }15\\text{ cm}',
          eurocodeRule: 'Cousure des fissures obliques d effort tranchant V_Ed à 45° (EC2 §6.2)',
        },
        {
          symbol: 'f_{cd}',
          designation: 'Résistance de calcul du béton en compression',
          unit: 'MPa',
          mathValue: 'f_{cd} = \\alpha_{cc} f_{ck} / \\gamma_c = 16.7\\text{ MPa}',
          eurocodeRule: 'Béton C25/30, coefficient partiel gamma_c = 1.50 (EC2 §3.1.6)',
        },
        {
          symbol: 'f_{yd}',
          designation: 'Limite d élasticité de calcul de l acier',
          unit: 'MPa',
          mathValue: 'f_{yd} = f_{yk} / \\gamma_s = 435\\text{ MPa}',
          eurocodeRule: 'Acier B500B haute adhérence, coefficient gamma_s = 1.15 (EC2 §3.2.7)',
        },
        {
          symbol: 'x_u / d',
          designation: 'Position relative de l axe neutre à l ELU',
          unit: '-',
          mathValue: 'x_u \\approx 0.40 \\cdot d = 178\\text{ mm}',
          eurocodeRule: 'Diagramme rectangulaire simplifié / Section normalement armée',
        },
      ];

    case 'force_decomposition':
      return [
        {
          symbol: 'W',
          designation: 'Poids propre total vertical (Action gravitaire)',
          unit: 'kN',
          mathValue: 'W = m \\cdot g = 100.0\\text{ kN}',
          eurocodeRule: 'Action permanente descendante G (Eurocode 1 / NF EN 1991)',
        },
        {
          symbol: 'W_n',
          designation: 'Composante normale pressante sur le plan',
          unit: 'kN',
          mathValue: `W_n = W \\cos\\theta = ${(100 * Math.cos((angle * Math.PI) / 180)).toFixed(1)}\\text{ kN}`,
          eurocodeRule: 'Force de réaction d appui perpendiculaire générant l adhérence',
        },
        {
          symbol: 'W_t',
          designation: 'Composante tangentielle motrice de glissement',
          unit: 'kN',
          mathValue: `W_t = W \\sin\\theta = ${(100 * Math.sin((angle * Math.PI) / 180)).toFixed(1)}\\text{ kN}`,
          eurocodeRule: 'Effort de cisaillement parallèle à la pente tendant au décrochement',
        },
        {
          symbol: 'N',
          designation: 'Réaction normale du support de toiture / talus',
          unit: 'kN',
          mathValue: 'N = -W_n',
          eurocodeRule: 'Principe d équilibre statique d appui (sigma_sol <= q_admis)',
        },
        {
          symbol: '\\theta',
          designation: 'Angle d inclinaison du versant / toiture',
          unit: '°',
          mathValue: `\\theta = ${angle}^\\circ`,
          eurocodeRule: 'Pente géométrique par rapport au plan horizontal de référence',
        },
        {
          symbol: '\\mu_{min}',
          designation: 'Coefficient de frottement minimal anti-glissement',
          unit: '-',
          mathValue: `\\mu_{min} = \\tan\\theta = ${(Math.tan((angle * Math.PI) / 180)).toFixed(3)}`,
          eurocodeRule: 'Loi de Coulomb : condition de stabilité à sec W_t <= mu * W_n',
        },
      ];

    case 'road_profile':
      return [
        {
          symbol: 'e_{BB}',
          designation: 'Couche de roulement (Béton Bitumineux)',
          unit: 'cm',
          mathValue: 'e = 4\\text{ cm}',
          eurocodeRule: 'BBTM 0/10 étanche, adhérent et résistant à l usure du trafic',
        },
        {
          symbol: 'e_{EME}',
          designation: 'Couche de liaison (Enrobé Module Élevé)',
          unit: 'cm',
          mathValue: 'e = 7\\text{ cm}',
          eurocodeRule: 'EME2 0/14 conférant une rigidité intermédiaire (NF EN 13108-1)',
        },
        {
          symbol: 'e_{GB}',
          designation: 'Couche de base structurelle (Grave Bitume)',
          unit: 'cm',
          mathValue: 'e = 12\\text{ cm}',
          eurocodeRule: 'GB3 0/14 reprenant les efforts de flexion sous essieux lourds (E=9000 MPa)',
        },
        {
          symbol: 'e_{GNT}',
          designation: 'Couche de forme / fondation (GNT)',
          unit: 'cm',
          mathValue: 'e = 30\\text{ cm}',
          eurocodeRule: 'GNT 0/31.5 plateforme de terrassement classe PF3 (Portance EV2 > 120 MPa)',
        },
        {
          symbol: 'i',
          designation: 'Pente transversale de dévers chaussée',
          unit: '%',
          mathValue: 'i = -2.5\\%',
          eurocodeRule: 'Évacuation gravitaire accélérée des eaux de ruissellement (Guide SETRA)',
        },
        {
          symbol: 'L_c',
          designation: 'Largeur totale de la chaussée bidirectionnelle',
          unit: 'm',
          mathValue: 'L_c = 7.00\\text{ m}',
          eurocodeRule: '2 voies de circulation de 3.50 m (Norme d aménagement ICTAARN)',
        },
        {
          symbol: 'h_f',
          designation: 'Profondeur du fossé latéral trapézoïdal',
          unit: 'm',
          mathValue: 'h_f = 0.50\\text{ m}',
          eurocodeRule: 'Talutage 1:1 pour le drainage hydraulique longitudinal',
        },
      ];

    case 'soil_profile':
      return [
        {
          symbol: 'h_1',
          designation: 'Horizon supérieur : Terre végétale & remblais',
          unit: 'm',
          mathValue: '0.00 \\rightarrow -1.50\\text{ m}',
          eurocodeRule: 'Sol organique compressible impropre aux fondations (décapage exigé)',
        },
        {
          symbol: "c'",
          designation: 'Cohésion effective de l argile plastique',
          unit: 'kPa',
          mathValue: "c' = 25\\text{ kPa}",
          eurocodeRule: 'Résistance intrinsèque au cisaillement drainé (Eurocode 7 / NF P94-261)',
        },
        {
          symbol: "\\phi'",
          designation: 'Angle de frottement effectif interne',
          unit: '°',
          mathValue: "\\phi' = 22^\\circ",
          eurocodeRule: 'Frottement intergranulaire de l horizon argileux consolidé',
        },
        {
          symbol: 'z_w',
          designation: 'Profondeur de la nappe phréatique',
          unit: 'm',
          mathValue: 'z_w = -2.20\\text{ m}',
          eurocodeRule: "Calcul des contraintes effectives selon Terzaghi (sigma' = sigma - u)",
        },
        {
          symbol: 'q_{admis}',
          designation: 'Capacité portante admissible de la marne',
          unit: 'MPa',
          mathValue: 'q_{admis} = 0.35\\text{ MPa} = 3.5\\text{ bars}',
          eurocodeRule: 'Pression limite nette de calcul au pressiomètre ou pénétromètre (EC7)',
        },
        {
          symbol: 'B',
          designation: 'Largeur de semelle filante en béton armé',
          unit: 'm',
          mathValue: 'B = 1.80\\text{ m}',
          eurocodeRule: 'Ancrage D = 2.00 m dans le substratum compact marneux',
        },
        {
          symbol: '\\gamma',
          designation: 'Poids volumique moyen des sols humides',
          unit: 'kN/m³',
          mathValue: '\\gamma = 19.0\\text{ kN/m}^3',
          eurocodeRule: 'Calcul des pressions géostatiques verticales sigma_v = gamma * z',
        },
      ];

    case 'bridge_structure':
      return [
        {
          symbol: 'L',
          designation: 'Portée principale du tablier de pont',
          unit: 'm',
          mathValue: 'L = 35.00\\text{ m}',
          eurocodeRule: 'Franchissement de la brèche sans appui dans le lit mineur (EC2-2 / EC1-2)',
        },
        {
          symbol: 'h_t',
          designation: 'Hauteur totale des poutres précontraintes',
          unit: 'm',
          mathValue: 'h_t = 1.40\\text{ m}',
          eurocodeRule: 'Élancement économique L/25 en béton précontraint post-tension',
        },
        {
          symbol: 'H_{libre}',
          designation: 'Tirant d air / Gabarit sous ouvrage',
          unit: 'm',
          mathValue: 'H_{libre} = 5.50\\text{ m}',
          eurocodeRule: 'Hauteur libre de sécurité routière / fluviale réglementaire',
        },
        {
          symbol: 'A_{app}',
          designation: 'Appareils d appui en élastomère fretté',
          unit: 'mm',
          mathValue: '160 \\times 200 \\times 60\\text{ mm}',
          eurocodeRule: 'Néoprène + frettes acier reprenant rotations et dilatations sans fissure (EN 1337)',
        },
        {
          symbol: 'H_{cul}',
          designation: 'Hauteur totale des culées d extrémité C1/C2',
          unit: 'm',
          mathValue: 'H = 8.00\\text{ m}',
          eurocodeRule: 'Murs garde-grève et chevêtres en béton armé C30/37',
        },
        {
          symbol: 'b \\times l',
          designation: 'Section du fût de la pile intermédiaire P1',
          unit: 'm',
          mathValue: '1.20 \\times 3.00\\text{ m}',
          eurocodeRule: 'Béton armé C35/45 reprenant les réactions d appui verticales et chocs',
        },
        {
          symbol: 'h_{gc}',
          designation: 'Hauteur normalisée des garde-corps',
          unit: 'm',
          mathValue: 'h_{gc} = 1.10\\text{ m}',
          eurocodeRule: 'Sécurité antichute piétons et usagers (Norme NF P98-405)',
        },
      ];

    default: // trig_interactive & fallback
      return [
        {
          symbol: 'H',
          designation: 'Longueur de l hypoténuse (Distance oblique)',
          unit: 'm',
          mathValue: 'H = 160.0\\text{ m}',
          eurocodeRule: 'Distance directe inclinée de mesure tachéométrique ou visée laser',
        },
        {
          symbol: '\\text{opp}',
          designation: 'Côté opposé / Dénivelé vertical',
          unit: 'm',
          mathValue: `\\text{opp} = H \\sin\\theta = ${(160 * Math.sin((angle * Math.PI) / 180)).toFixed(1)}\\text{ m}`,
          eurocodeRule: 'Projection verticale représentant la hauteur d ouvrage franchie',
        },
        {
          symbol: '\\text{adj}',
          designation: 'Côté adjacent / Distance horizontale',
          unit: 'm',
          mathValue: `\\text{adj} = H \\cos\\theta = ${(160 * Math.cos((angle * Math.PI) / 180)).toFixed(1)}\\text{ m}`,
          eurocodeRule: 'Projection horizontale cartographique (Distance de calcul au sol)',
        },
        {
          symbol: '\\theta',
          designation: 'Angle au sommet / Dénivelée angulaire',
          unit: '°',
          mathValue: `\\theta = ${angle}^\\circ`,
          eurocodeRule: 'Angle formé par l hypoténuse avec le plan horizontal',
        },
        {
          symbol: 'p',
          designation: 'Pente topographique en pourcentage',
          unit: '%',
          mathValue: `p = \\tan\\theta \\times 100 = ${(Math.tan((angle * Math.PI) / 180) * 100).toFixed(1)}\\%`,
          eurocodeRule: 'Pente normalisée pour rampes d accès et talus (Guide terrassement GTR)',
        },
        {
          symbol: '\\alpha',
          designation: 'Angle complémentaire au sommet supérieur',
          unit: '°',
          mathValue: `\\alpha = 90^\\circ - \\theta = ${90 - angle}^\\circ`,
          eurocodeRule: 'Relation trigonométrique euclidienne : alpha + theta = 90°',
        },
      ];
  }
}

function getDefaultLegendItems(type, angle = 30) {
  switch (type) {
    case 'force_decomposition':
      return [
        {
          title: 'W (Poids vertical total)',
          text: 'Force de gravité globale agissant verticalement vers le centre de la Terre',
          math: 'W = m \\cdot g',
          extra: 'Constante = 100 kN',
          dotClass: 'bg-red-500',
        },
        {
          title: 'Wn (Composante normale au plan)',
          text: 'Force pressant la masse perpendiculairement contre la surface',
          math: 'W_n = W \\cos\\theta',
          extra: `Valeur actuelle = ${(100 * Math.cos((angle * Math.PI) / 180)).toFixed(1)} kN`,
          dotClass: 'bg-sky-400',
        },
        {
          title: 'Wt (Composante tangentielle / glissement)',
          text: 'Force parallèle à la pente tendant à faire glisser le bloc vers le bas',
          math: 'W_t = W \\sin\\theta',
          extra: `Valeur actuelle = ${(100 * Math.sin((angle * Math.PI) / 180)).toFixed(1)} kN`,
          dotClass: 'bg-orange-500',
        },
        {
          title: "N (Réaction normale d'appui)",
          text: "Réaction élastique développée par la structure pour équilibrer l'enfoncement",
          math: 'N = -W_n',
          extra: 'Condition de contact non décollant',
          dotClass: 'bg-emerald-400',
        },
      ];

    case 'rebar_beam':
      return [
        {
          title: 'Armatures longitudinales tendues (3 HA 20)',
          text: "Aciers haute adhérence placés en fibre inférieure pour reprendre l'intégralité de la traction",
          math: 'A_s = 9.42\\text{ cm}^2',
          extra: 'Limite élastique fyd = 435 MPa',
          dotClass: 'bg-blue-500',
        },
        {
          title: 'Armatures supérieures de montage (2 HA 12)',
          text: 'Barres de maintien de la cage et renfort comprimé constructif',
          math: "A_s' = 2.26\\text{ cm}^2",
          extra: 'Fixation des cadres',
          dotClass: 'bg-sky-400',
        },
        {
          title: 'Étriers et cadres transversaux (HA 8)',
          text: "Armatures fermées cousant les fissures obliques d'effort tranchant à 45°",
          math: 's = 15\\text{ cm}',
          extra: 'Eurocode 2 - Art 6.2',
          dotClass: 'bg-orange-500',
        },
        {
          title: 'Enrobage nominal de durabilité',
          text: 'Épaisseur minimale de béton protégeant les aciers de la carbonatation et des chlorures',
          math: 'c_{nom} = 35\\text{ mm}',
          extra: 'Classe d exposition XC4',
          dotClass: 'bg-emerald-400',
        },
      ];

    case 'road_profile':
      return [
        {
          title: 'Couche de Roulement (4 cm)',
          text: "Béton Bitumineux Mince (BBM 0/10) assurant l'adhérence et l'étanchéité de surface",
          math: 'e = 4\\text{ cm}',
          extra: 'Résistance à l usure',
          dotClass: 'bg-sky-400',
        },
        {
          title: 'Couche de Base (12 cm)',
          text: 'Grave Bitume (GB3 0/14) conférant la résistance structurelle sous essieux lourds',
          math: 'e = 12\\text{ cm}',
          extra: 'Module E = 9000 MPa',
          dotClass: 'bg-slate-400',
        },
        {
          title: 'Couche de Forme (30 cm)',
          text: 'Grave Non Traitée (GNT 0/31.5) homogénéisant la portance et protégeant du gel',
          math: 'e = 30\\text{ cm}',
          extra: 'Plateforme classe PF3',
          dotClass: 'bg-amber-400',
        },
        {
          title: 'Pente transversale / Dévers (-2.5%)',
          text: "Pente continue orientée vers le fossé pour l'évacuation gravitaire instantanée des eaux pluviales",
          math: 'i = -2.5\\%',
          extra: 'Sécurité contre l aquaplaning',
          dotClass: 'bg-orange-500',
        },
      ];

    case 'soil_profile':
      return [
        {
          title: 'Horizon Supérieur : Remblai / Terre végétale (0 à -1.50 m)',
          text: "Couche hétérogène de surface impropre à l'assise directe de fondations",
          math: '0.00 \\rightarrow -1.50\\text{ m}',
          extra: 'Décapage systématique',
          dotClass: 'bg-amber-500',
        },
        {
          title: 'Horizon Compressible : Argile plastique (-1.50 à -4.00 m)',
          text: 'Sol fin cohérent sensible aux tassements différentiels et variations hydriques',
          math: "c' = 25\\text{ kPa},\\;\\phi' = 22^\\circ",
          extra: 'Pression de gonflement',
          dotClass: 'bg-sky-400',
        },
        {
          title: 'Niveau Piézométrique de la Nappe Phréatique (-2.20 m)',
          text: 'Surface libre de la nappe saturant les pores et réduisant les contraintes effectives',
          math: 'z_w = -2.20\\text{ m}',
          extra: "Calcul selon Terzaghi (sigma' = sigma - u)",
          dotClass: 'bg-blue-400',
        },
        {
          title: 'Substratum Porteur : Marne compacte (<-4.00 m)',
          text: 'Horizon géotechnique résistant assurant la stabilité de la semelle',
          math: 'q_{admis} = 0.35\\text{ MPa}',
          extra: 'Tassement admissible < 25 mm',
          dotClass: 'bg-emerald-400',
        },
      ];

    case 'bridge_structure':
      return [
        {
          title: 'Tablier à Poutres Précontraintes',
          text: "Structure principale franchissant la brèche par câbles de post-tension",
          math: 'L = 35.00\\text{ m}',
          extra: 'Béton C40/50 haute résistance',
          dotClass: 'bg-blue-500',
        },
        {
          title: 'Culées d Extrémité C1 et C2',
          text: 'Ouvrages de transition reprenant les poussées des terres et les charges du tablier',
          math: 'H = 8.00\\text{ m}',
          extra: 'Murs garde-grève avec corbeaux',
          dotClass: 'bg-slate-400',
        },
        {
          title: 'Pile Intermédiaire P1',
          text: 'Appui central transmettant les réactions verticales et horizontales au sol de fondation',
          math: 'b \\times h = 1.20 \\times 3.00\\text{ m}',
          extra: 'Béton armé C35/45',
          dotClass: 'bg-sky-400',
        },
        {
          title: 'Appareils d Appui en Néoprène Fretté',
          text: 'Plaques élastomères autorisant les rotations et dilatations thermiques sans fissuration',
          math: '160 \\times 200 \\times 60\\text{ mm}',
          extra: 'Capacité portante = 1800 kN',
          dotClass: 'bg-orange-500',
        },
      ];

    default: // trig_interactive & fallback
      return [
        {
          title: 'Hypoténuse (H)',
          text: 'Plus grand côté du triangle rectangle opposé à l angle droit de 90°',
          math: 'H = 160.0\\text{ m}',
          extra: 'Longueur de référence',
          dotClass: 'bg-sky-400',
        },
        {
          title: 'Côté Opposé (opp)',
          text: 'Projection verticale représentant le dénivelé ou la hauteur franchie',
          math: 'opp = H \\cdot \\sin\\theta',
          extra: `Valeur = ${(160 * Math.sin((angle * Math.PI) / 180)).toFixed(1)} m`,
          dotClass: 'bg-emerald-400',
        },
        {
          title: 'Côté Adjacent (adj)',
          text: 'Projection horizontale représentant la distance cartographique au sol',
          math: 'adj = H \\cdot \\cos\\theta',
          extra: `Valeur = ${(160 * Math.cos((angle * Math.PI) / 180)).toFixed(1)} m`,
          dotClass: 'bg-orange-500',
        },
        {
          title: 'Pente Trigonométrique (p)',
          text: 'Rapport entre la dénivellation verticale et le développement horizontal',
          math: 'p = \\tan\\theta \\times 100\\%',
          extra: `Pente = ${(Math.tan((angle * Math.PI) / 180) * 100).toFixed(1)} %`,
          dotClass: 'bg-violet-400',
        },
      ];
  }
}
