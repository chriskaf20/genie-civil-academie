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
    <div className="w-full max-w-full overflow-hidden rounded-2xl border border-slate-700/60 bg-slate-900/90 p-4 sm:p-5 space-y-4 shadow-xl card-hover">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-800 pb-3">
        <div className="flex items-center gap-2.5 min-w-0">
          <span className="text-xl shrink-0">📐</span>
          <div className="min-w-0">
            <p className="text-xs uppercase tracking-widest text-sky-400 font-semibold truncate">Schéma Technique & Diagramme</p>
            <h4 className="text-sm font-bold text-white mt-0.5 truncate">{title || getDiagramTitle(safeType)}</h4>
          </div>
        </div>
        <div className="flex gap-1.5 p-1 bg-slate-950 rounded-xl border border-slate-800 shrink-0">
          <button
            onClick={() => setActiveTab('diagram')}
            className={`px-3 py-1 rounded-lg text-xs font-semibold transition-all ${
              activeTab === 'diagram' ? 'bg-blue-600 text-white shadow' : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            Vue Schématique
          </button>
          <button
            onClick={() => setActiveTab('legend')}
            className={`px-3 py-1 rounded-lg text-xs font-semibold transition-all ${
              activeTab === 'legend' ? 'bg-blue-600 text-white shadow' : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            Légende & Cotations
          </button>
        </div>
      </div>

      {description && (
        <p className="text-xs text-slate-300 leading-relaxed bg-slate-950/60 p-3 rounded-xl border border-slate-800/60">
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
      <div className="flex items-center gap-3 bg-slate-950 p-3 rounded-xl border border-slate-800">
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
      <div className="flex flex-wrap justify-between items-center gap-2 bg-slate-950 p-3 rounded-xl border border-slate-800">
        <span className="text-xs text-slate-300 font-medium">Affichage des diagrammes d'efforts :</span>
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
      <div className="flex items-center gap-3 bg-slate-950 p-3 rounded-xl border border-slate-800">
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
  const defaultCotationTable = getDefaultCotations(type, safeAngle);

  return (
    <div className="space-y-4 text-xs bg-slate-950 p-4 sm:p-5 rounded-xl border border-slate-800 w-full max-w-full overflow-hidden">
      <div className="flex items-center justify-between border-b border-slate-800/80 pb-2">
        <h5 className="font-bold text-sky-400 uppercase tracking-wider text-xs">
          Notice Technique & Légende des Cotations
        </h5>
        <span className="text-[10px] text-slate-500 font-mono">Conformité Eurocodes</span>
      </div>

      {/* 1. Custom or Default Legend Items */}
      {hasCustomLegend ? (
        <ul className="space-y-2 text-slate-300">
          {legend.map((item, idx) => (
            <li key={idx} className="flex items-start gap-2.5">
              <span
                className="w-3 h-3 rounded-full mt-0.5 shrink-0"
                style={{ backgroundColor: item?.color || '#38bdf8' }}
              />
              <div className="leading-relaxed min-w-0">
                <strong className="text-white">{item?.symbol || item?.label || `Élément ${idx + 1}`}</strong>
                {item?.unit ? <span className="text-sky-300 font-mono text-[10px] ml-1">({item.unit})</span> : null}
                {item?.desc || item?.description ? ` : ${item.desc || item.description}` : ''}
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <ul className="space-y-2.5 text-slate-300">
          {defaultItems.map((item, idx) => (
            <li key={idx} className="flex items-start gap-2.5">
              <span className={`w-3 h-3 rounded-full mt-0.5 shrink-0 ${item.dotClass || 'bg-sky-400'}`} />
              <div className="leading-relaxed min-w-0">
                <strong className="text-white">{item.title}</strong> : {item.text}{' '}
                {item.math && (
                  <span className="inline-block mx-1">
                    (<SafeInlineMath math={item.math} />)
                  </span>
                )}
                {item.extra && <span>. {item.extra}</span>}
              </div>
            </li>
          ))}
        </ul>
      )}

      {/* 2. Annotations list if available */}
      {hasCustomAnnotations && (
        <div className="pt-2 border-t border-slate-800/60">
          <p className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider mb-1.5">Annotations Techniques :</p>
          <ul className="space-y-1 text-slate-400">
            {annotations.map((ann, i) => (
              <li key={i} className="flex items-center gap-2">
                <span className="text-sky-400 text-xs">▸</span>
                <span>{typeof ann === 'string' ? ann : ann?.text || JSON.stringify(ann)}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* 3. Cotations Table (Custom or Default) */}
      <div className="pt-3 border-t border-slate-800/80">
        <p className="text-[11px] font-bold text-slate-300 uppercase tracking-wider mb-2 flex items-center gap-1.5">
          <span>📏</span>
          <span>Tableau Récapitulatif des Cotations & Paramètres</span>
        </p>

        <div className="overflow-x-auto max-w-full py-1 rounded-lg border border-slate-800/60">
          <table className="w-full text-left text-xs border-collapse">
            <thead>
              <tr className="border-b border-slate-800 bg-slate-900/80">
                <th className="py-2 px-3 text-slate-400 font-semibold uppercase text-[10px]">Grandeur / Élément</th>
                <th className="py-2 px-3 text-slate-400 font-semibold uppercase text-[10px]">Symbole</th>
                <th className="py-2 px-3 text-slate-400 font-semibold uppercase text-[10px]">Valeur / Formule</th>
                <th className="py-2 px-3 text-slate-400 font-semibold uppercase text-[10px]">Rôle & Justification</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/60">
              {hasCustomCotations
                ? cotations.map((row, i) => (
                    <tr key={i} className="hover:bg-slate-900/40 transition-colors">
                      <td className="py-2 px-3 font-medium text-white">{row?.name || row?.label || `Grandeur ${i + 1}`}</td>
                      <td className="py-2 px-3 text-sky-400 font-mono">
                        {row?.symbol ? <SafeInlineMath math={row.symbol} /> : '-'}
                      </td>
                      <td className="py-2 px-3 text-emerald-400 font-mono">{row?.value || row?.val || '-'}</td>
                      <td className="py-2 px-3 text-slate-400">{row?.desc || row?.role || '-'}</td>
                    </tr>
                  ))
                : defaultCotationTable.map((row, i) => (
                    <tr key={i} className="hover:bg-slate-900/40 transition-colors">
                      <td className="py-2 px-3 font-medium text-white">{row.name}</td>
                      <td className="py-2 px-3 text-sky-400 font-mono">
                        {row.symbol ? <SafeInlineMath math={row.symbol} /> : '-'}
                      </td>
                      <td className="py-2 px-3 text-emerald-400 font-mono">
                        {row.mathValue ? <SafeInlineMath math={row.mathValue} /> : row.value}
                      </td>
                      <td className="py-2 px-3 text-slate-400">{row.role}</td>
                    </tr>
                  ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
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

function getDefaultCotations(type, angle = 30) {
  switch (type) {
    case 'force_decomposition':
      return [
        { name: 'Poids propre vertical', symbol: 'W', mathValue: '100.0\\text{ kN}', role: 'Charge gravitaire verticale descendante' },
        { name: 'Pression normale', symbol: 'W_n', mathValue: `${(100 * Math.cos((angle * Math.PI) / 180)).toFixed(1)}\\text{ kN}`, role: 'Contrainte de compression sur le plan' },
        { name: 'Effort tangentiel', symbol: 'W_t', mathValue: `${(100 * Math.sin((angle * Math.PI) / 180)).toFixed(1)}\\text{ kN}`, role: 'Sollicitation motrice de glissement' },
        { name: 'Angle de talus / toiture', symbol: '\\theta', mathValue: `${angle}^\\circ`, role: 'Pente géométrique par rapport à l horizontal' },
        { name: 'Coefficient de frottement min.', symbol: '\\mu_{min}', mathValue: '\\tan\\theta', role: 'Condition de non-glissement à sec' },
      ];

    case 'rebar_beam':
      return [
        { name: 'Largeur de la section', symbol: 'b', mathValue: '300\\text{ mm}', role: 'Dimension de coffrage transversal' },
        { name: 'Hauteur totale', symbol: 'h', mathValue: '500\\text{ mm}', role: 'Hauteur statique de la poutre' },
        { name: 'Hauteur utile', symbol: 'd', mathValue: '445\\text{ mm}', role: 'Distance fibre comprimée / barycentre aciers' },
        { name: 'Enrobage nominal', symbol: 'c_{nom}', mathValue: '35\\text{ mm}', role: 'Protection anti-corrosion (Eurocode 2)' },
        { name: 'Section aciers tendus', symbol: 'A_s', mathValue: '9.42\\text{ cm}^2', role: '3 HA 20 reprenant le moment fléchissant' },
        { name: 'Espacement des cadres', symbol: 's', mathValue: '15\\text{ cm}', role: 'Reprise du cisaillement V_Ed' },
      ];

    case 'road_profile':
      return [
        { name: 'Couche de roulement', symbol: 'e_1', mathValue: '4\\text{ cm}', role: 'BBM 0/10 étanche et adhérent' },
        { name: 'Couche de base', symbol: 'e_2', mathValue: '12\\text{ cm}', role: 'Grave Bitume GB3 rigide sous essieux' },
        { name: 'Couche de forme', symbol: 'e_3', mathValue: '30\\text{ cm}', role: 'GNT 0/31.5 assurant la portance PF3' },
        { name: 'Pente de dévers', symbol: 'i', mathValue: '-2.5\\%', role: 'Évacuation rapide des eaux vers fossé' },
        { name: 'Largeur chaussée', symbol: 'L_c', mathValue: '7.00\\text{ m}', role: '2 voies de circulation bidirectionnelle' },
      ];

    case 'soil_profile':
      return [
        { name: 'Épaisseur remblai', symbol: 'h_1', mathValue: '1.50\\text{ m}', role: 'Sol compressible à décaper' },
        { name: 'Cohésion effective argile', symbol: "c'", mathValue: '25\\text{ kPa}', role: 'Résistance intrinsèque au cisaillement' },
        { name: 'Angle de frottement interne', symbol: "\\phi'", mathValue: '22^\\circ', role: 'Frottement intergranulaire argileux' },
        { name: 'Profondeur de la nappe', symbol: 'z_w', mathValue: '-2.20\\text{ m}', role: 'Niveau piézométrique hydrostatique' },
        { name: 'Contrainte admissible marne', symbol: 'q_{admis}', mathValue: '0.35\\text{ MPa}', role: 'Capacité portante de la semelle' },
        { name: 'Largeur semelle filante', symbol: 'B', mathValue: '1.80\\text{ m}', role: 'Répartition surfacique des charges' },
      ];

    case 'bridge_structure':
      return [
        { name: 'Portée principale tablier', symbol: 'L', mathValue: '35.00\\text{ m}', role: 'Franchissement sans appui intermédiaire dans l eau' },
        { name: 'Hauteur libre / Tirant d air', symbol: 'H_{libre}', mathValue: '5.50\\text{ m}', role: 'Gabarit de sécurité sous ouvrage' },
        { name: 'Épaisseur tablier', symbol: 'h_t', mathValue: '1.40\\text{ m}', role: 'Élancement L/25 en béton précontraint' },
        { name: 'Section des appuis néoprène', symbol: 'A_{app}', mathValue: '160 \\times 200\\text{ mm}', role: 'Transmission souple des réactions d appui' },
        { name: 'Hauteur garde-corps', symbol: 'h_{gc}', mathValue: '1.10\\text{ m}', role: 'Sécurité antichute (norme NF P98-405)' },
      ];

    default: // generic fallback
      return [
        { name: 'Longueur de portée', symbol: 'L', mathValue: '6.00\\text{ m}', role: 'Portée libre entre appuis théoriques' },
        { name: 'Charge permanente', symbol: 'G', mathValue: '15.0\\text{ kN/m}', role: 'Poids propre structure et superstructures' },
        { name: 'Charge d exploitation', symbol: 'Q', mathValue: '8.0\\text{ kN/m}', role: 'Surcharges mobiles d usage' },
        { name: 'Combinaison ELU', symbol: 'q_{Ed}', mathValue: '1.35G + 1.5Q', role: 'Vérification à l État Limite Ultime' },
        { name: 'Flèche admissible ELS', symbol: 'f_{max}', mathValue: 'L / 500', role: 'Critère de confort et d intégrité' },
      ];
  }
}
