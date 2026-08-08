import { useState } from 'react';
import { InlineMath } from 'react-katex';

export default function DiagramViewer({ type = 'trig_interactive', title, description }) {
  const [activeTab, setActiveTab] = useState('diagram');
  const [angle, setAngle] = useState(30); // for force_decomposition & trig
  const [showStress, setShowStress] = useState(true); // for rebar_beam

  return (
    <div className="rounded-2xl border border-slate-700/60 bg-slate-900/90 p-5 space-y-4 shadow-xl card-hover">
      {/* Header */}
      <div className="flex items-center justify-between border-b border-slate-800 pb-3">
        <div className="flex items-center gap-2.5">
          <span className="text-xl">📐</span>
          <div>
            <p className="text-xs uppercase tracking-widest text-sky-400 font-semibold">Schéma Technique & Diagramme</p>
            <h4 className="text-sm font-bold text-white mt-0.5">{title || getDiagramTitle(type)}</h4>
          </div>
        </div>
        <div className="flex gap-1.5 p-1 bg-slate-950 rounded-xl border border-slate-800">
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

      {/* Render Diagram or Legend Tab */}
      {activeTab === 'diagram' ? (
        <div className="space-y-3">
          {type === 'force_decomposition' && <ForceDecompositionDiagram angle={angle} setAngle={setAngle} />}
          {type === 'rebar_beam' && <RebarBeamDiagram showStress={showStress} setShowStress={setShowStress} />}
          {type === 'road_profile' && <RoadProfileDiagram />}
          {type === 'soil_profile' && <SoilProfileDiagram />}
          {type === 'bridge_structure' && <BridgeStructureDiagram />}
          {(type === 'trig_interactive' || !type) && <TrigInteractiveDiagram angle={angle} setAngle={setAngle} />}
        </div>
      ) : (
        <DiagramLegend type={type} angle={angle} />
      )}
    </div>
  );
}

function getDiagramTitle(type) {
  switch (type) {
    case 'force_decomposition': return 'Décomposition des Forces sur Plan Incliné';
    case 'rebar_beam': return 'Coupe Transversale Poutre Béton Armé (Eurocode 2)';
    case 'road_profile': return 'Profil en Travers d\'une Chaussée Routière';
    case 'soil_profile': return 'Profil Géotechnique & Fondation Profonde';
    case 'bridge_structure': return 'Coupe Longitudinale d\'un Pont à Poutres';
    default: return 'Triangle Rectangle & Projections Trigonométriques';
  }
}

// ── 1. Force Decomposition Diagram ──────────────────────────────────────────
function ForceDecompositionDiagram({ angle, setAngle }) {
  const rad = (angle * Math.PI) / 180;
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

  // Normal & Tangential vector directions
  // Tangential is down the slope: (cos(rad), -sin(rad))
  // Normal is perpendicular upwards: (-sin(rad), -cos(rad))
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
    <div className="space-y-3">
      {/* Control slider */}
      <div className="flex items-center gap-4 bg-slate-950 p-3 rounded-xl border border-slate-800">
        <span className="text-xs text-slate-400 font-medium">Inclinaison du toit / plan :</span>
        <input
          type="range" min="5" max="55" value={angle}
          onChange={e => setAngle(Number(e.target.value))}
          className="flex-1 h-2 accent-sky-500 cursor-pointer"
        />
        <span className="text-xs font-bold font-mono text-sky-400 w-12">{angle}°</span>
      </div>

      {/* SVG Canvas */}
      <svg viewBox={`0 0 ${svgW} ${svgH}`} className="w-full rounded-xl bg-slate-950 border border-slate-800">
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
        <text x={originX + 50} y={originY - 10} fill="#38bdf8" fontSize="12" fontWeight="bold" fontFamily="JetBrains Mono">θ = {angle}°</text>

        {/* Block on slope */}
        <g transform={`translate(${bx},${by}) rotate(${-angle})`}>
          <rect x="-24" y="-30" width="48" height="30" fill="rgba(255,107,0,0.25)" stroke="#FF6B00" strokeWidth="2" rx="4" />
          <circle cx="0" cy="-15" r="4" fill="#FF6B00" />
        </g>

        {/* Vector W (Gravity, vertical down, RED) */}
        <line x1={bx} y1={by} x2={wx2} y2={wy2} stroke="#ef4444" strokeWidth="3" markerEnd="url(#arrow-red)" />
        <text x={wx2 + 8} y={wy2} fill="#ef4444" fontSize="11" fontWeight="bold" fontFamily="JetBrains Mono">W (Poids = 100 kN)</text>

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

      {/* Live calculations */}
      <div className="grid grid-cols-3 gap-2">
        <div className="bg-slate-950 p-2.5 rounded-xl border border-red-500/30 text-center">
          <p className="text-[10px] text-slate-400">Poids Total W</p>
          <p className="text-sm font-bold text-red-400 font-mono">100 kN</p>
        </div>
        <div className="bg-slate-950 p-2.5 rounded-xl border border-sky-500/30 text-center">
          <p className="text-[10px] text-slate-400">Pression Normale Wn</p>
          <p className="text-sm font-bold text-sky-400 font-mono">{Wn} kN</p>
          <p className="text-[9px] text-slate-500 font-mono mt-0.5"><InlineMath math="W \\cos\\theta" /></p>
        </div>
        <div className="bg-slate-950 p-2.5 rounded-xl border border-orange-500/30 text-center">
          <p className="text-[10px] text-slate-400">Poussée Glissement Wt</p>
          <p className="text-sm font-bold text-orange-400 font-mono">{Wt} kN</p>
          <p className="text-[9px] text-slate-500 font-mono mt-0.5"><InlineMath math="W \\sin\\theta" /></p>
        </div>
      </div>
    </div>
  );
}

// ── 2. Rebar Beam Diagram (Béton Armé - Eurocode 2) ─────────────────────────
function RebarBeamDiagram({ showStress, setShowStress }) {
  const b = 300; // mm
  const h = 500; // mm
  const c = 35;  // cover mm
  const d = h - c - 20; // 445 mm

  return (
    <div className="space-y-3">
      <div className="flex justify-between items-center bg-slate-950 p-3 rounded-xl border border-slate-800">
        <span className="text-xs text-slate-300 font-medium">Affichage des diagrammes d'efforts :</span>
        <button
          onClick={() => setShowStress(!showStress)}
          className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
            showStress ? 'bg-emerald-600 text-white' : 'bg-slate-800 text-slate-400'
          }`}
        >
          {showStress ? 'Masquer contraintes/déformations' : 'Afficher contraintes (ELU)'}
        </button>
      </div>

      <svg viewBox="0 0 460 300" className="w-full rounded-xl bg-slate-950 border border-slate-800">
        {/* Beam Concrete Cross Section (left side: x=60 to 200, y=30 to 270) */}
        <g transform="translate(40, 20)">
          {/* Concrete section */}
          <rect x="0" y="0" width="140" height="240" fill="rgba(74,85,104,0.4)" stroke="#718096" strokeWidth="2" rx="4" />
          {/* Concrete texture lines */}
          <line x1="20" y1="30" x2="35" y2="45" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
          <line x1="80" y1="120" x2="95" y2="135" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />

          {/* Stirrup (Cadre / Étriers en orange) */}
          <rect x="12" y="12" width="116" height="216" fill="none" stroke="#FF6B00" strokeWidth="2.5" rx="3" />

          {/* Top Longitudinal Bars (Aciers de montage 2Φ12) */}
          <circle cx="24" cy="24" r="7" fill="#38bdf8" stroke="#0F52BA" strokeWidth="1.5" />
          <circle cx="116" cy="24" r="7" fill="#38bdf8" stroke="#0F52BA" strokeWidth="1.5" />

          {/* Bottom Longitudinal Tension Bars (Armatures tendues 3Φ20) */}
          <circle cx="24" cy="216" r="9" fill="#38bdf8" stroke="#0F52BA" strokeWidth="2" />
          <circle cx="70" cy="216" r="9" fill="#38bdf8" stroke="#0F52BA" strokeWidth="2" />
          <circle cx="116" cy="216" r="9" fill="#38bdf8" stroke="#0F52BA" strokeWidth="2" />

          {/* Neutral Axis (Axe neutre N.A.) */}
          <line x1="-15" y1="96" x2="155" y2="96" stroke="#eab308" strokeWidth="1.5" strokeDasharray="5,3" />
          <text x="160" y="99" fill="#eab308" fontSize="10" fontWeight="bold" fontFamily="JetBrains Mono">A.N. (y = 0.4d)</text>

          {/* Dimension b = 300 mm (bottom) */}
          <line x1="0" y1="252" x2="140" y2="252" stroke="#94a3b8" strokeWidth="1" />
          <line x1="0" y1="247" x2="0" y2="257" stroke="#94a3b8" strokeWidth="1" />
          <line x1="140" y1="247" x2="140" y2="257" stroke="#94a3b8" strokeWidth="1" />
          <text x="70" y="265" fill="#94a3b8" fontSize="11" textAnchor="middle" fontFamily="JetBrains Mono">b = 300 mm</text>

          {/* Dimension h = 500 mm (left) */}
          <line x1="-15" y1="0" x2="-15" y2="240" stroke="#94a3b8" strokeWidth="1" />
          <line x1="-20" y1="0" x2="-10" y2="0" stroke="#94a3b8" strokeWidth="1" />
          <line x1="-20" y1="240" x2="-10" y2="240" stroke="#94a3b8" strokeWidth="1" />
          <text x="-25" y="125" fill="#94a3b8" fontSize="11" textAnchor="middle" fontFamily="JetBrains Mono" transform="rotate(-90 -25 125)">h = 500 mm</text>

          {/* Cover c_nom = 35 mm */}
          <text x="35" y="234" fill="#FF6B00" fontSize="9" fontFamily="JetBrains Mono">c_nom = 35mm</text>
        </g>

        {/* Stress & Strain Diagrams (Right side if showStress) */}
        {showStress && (
          <g transform="translate(260, 20)">
            {/* Strain diagram ε */}
            <text x="30" y="-5" fill="#38bdf8" fontSize="11" fontWeight="bold" textAnchor="middle">Déformations ε</text>
            <line x1="30" y1="0" x2="30" y2="240" stroke="rgba(148,163,184,0.4)" strokeWidth="1" />
            <polygon points="30,0 55,0 30,96" fill="rgba(56,189,248,0.2)" stroke="#38bdf8" strokeWidth="1.5" />
            <polygon points="30,96 5,216 30,216" fill="rgba(239,68,68,0.2)" stroke="#ef4444" strokeWidth="1.5" />
            <text x="60" y="12" fill="#38bdf8" fontSize="9" fontFamily="JetBrains Mono">εcu = 3.5‰</text>
            <text x="-15" y="220" fill="#ef4444" fontSize="9" fontFamily="JetBrains Mono">εuk = 10‰</text>

            {/* Stress block (Rectangulaire compressé fcd) */}
            <text x="140" y="-5" fill="#10b981" fontSize="11" fontWeight="bold" textAnchor="middle">Contraintes σ (ELU)</text>
            <line x1="140" y1="0" x2="140" y2="240" stroke="rgba(148,163,184,0.4)" strokeWidth="1" />
            <rect x="140" y="0" width="40" height="76" fill="rgba(16,185,129,0.3)" stroke="#10b981" strokeWidth="1.5" />
            <text x="145" y="42" fill="#10b981" fontSize="10" fontWeight="bold" fontFamily="JetBrains Mono">fcd = 16.7 MPa</text>

            {/* Resultant Tension Force Fs */}
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

      {/* Legend badge row */}
      <div className="flex flex-wrap gap-2 text-[11px]">
        <span className="px-2.5 py-1 rounded-full bg-slate-950 border border-slate-700 text-slate-300">Section : <strong className="text-white">30×50 cm</strong></span>
        <span className="px-2.5 py-1 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-300">Armatures tendues : <strong className="text-white">3 HA 20 (9.42 cm²)</strong></span>
        <span className="px-2.5 py-1 rounded-full bg-orange-500/10 border border-orange-500/30 text-orange-300">Étriers : <strong className="text-white">HA 8 (esp. 15 cm)</strong></span>
        <span className="px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-300">Enrobage <InlineMath math="c_{nom}" /> = <strong className="text-white">35 mm</strong></span>
      </div>
    </div>
  );
}

// ── 3. Road Profile Diagram (Profil en Travers Chaussée) ────────────────────
function RoadProfileDiagram() {
  return (
    <div className="space-y-3">
      <svg viewBox="0 0 460 240" className="w-full rounded-xl bg-slate-950 border border-slate-800">
        {/* Subgrade Soil (Sol de forme) */}
        <polygon points="20,190 440,190 440,220 20,220" fill="rgba(113,128,150,0.3)" />

        {/* Couche de Forme GNT (30cm) */}
        <polygon points="40,160 420,160 430,190 30,190" fill="rgba(160,174,192,0.4)" stroke="#a0aec0" strokeWidth="1" />
        <text x="230" y="178" fill="#cbd5e1" fontSize="10" textAnchor="middle" fontFamily="JetBrains Mono">Couche de Forme (GNT 0/31.5 — 30 cm)</text>

        {/* Couche de Base GB (12cm) */}
        <polygon points="50,135 410,135 420,160 40,160" fill="rgba(74,85,104,0.7)" stroke="#718096" strokeWidth="1" />
        <text x="230" y="150" fill="#e2e8f0" fontSize="10" textAnchor="middle" fontFamily="JetBrains Mono">Couche de Base (Grave Bitume GB — 12 cm)</text>

        {/* Couche de Liaison EME (7cm) */}
        <polygon points="55,120 405,120 410,135 50,135" fill="rgba(45,55,72,0.85)" stroke="#4a5568" strokeWidth="1" />

        {/* Couche de Roulement BB (4cm, top surface with slope) */}
        {/* Crown at center x=230, y=110. Slopes -2.5% towards edges */}
        <polygon points="60,113 230,108 400,113 405,120 55,120" fill="#1a202c" stroke="#38bdf8" strokeWidth="1.5" />
        <text x="230" y="100" fill="#38bdf8" fontSize="10" fontWeight="bold" textAnchor="middle" fontFamily="JetBrains Mono">Couche de Roulement (BBM — 4 cm)</text>

        {/* Slope Indicators (% devers) */}
        <line x1="100" y1="95" x2="160" y2="97" stroke="#FF6B00" strokeWidth="1.5" markerEnd="url(#arrow-orange)" />
        <text x="130" y="90" fill="#FF6B00" fontSize="9" fontWeight="bold" textAnchor="middle">Dévers -2.5%</text>

        <line x1="360" y1="95" x2="300" y2="97" stroke="#FF6B00" strokeWidth="1.5" markerEnd="url(#arrow-orange)" />
        <text x="330" y="90" fill="#FF6B00" fontSize="9" fontWeight="bold" textAnchor="middle">Dévers -2.5%</text>

        {/* Drainage Ditch (Fossé de drainage trapézoïdal) */}
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
  );
}

// ── 4. Soil Profile Diagram (Profil Géotechnique) ───────────────────────────
function SoilProfileDiagram() {
  return (
    <div className="space-y-3">
      <svg viewBox="0 0 460 250" className="w-full rounded-xl bg-slate-950 border border-slate-800">
        {/* Layer 1: Topsoil / Fill (0 to -1.5m) */}
        <rect x="0" y="20" width="460" height="50" fill="rgba(180,83,9,0.15)" stroke="rgba(180,83,9,0.4)" strokeWidth="1" />
        <text x="20" y="45" fill="#fcd34d" fontSize="11" fontWeight="bold" fontFamily="JetBrains Mono">Couche 1 : Terre végétale / Remblai (0.00 à -1.50 m)</text>

        {/* Layer 2: Overconsolidated Clay (Argile, -1.5m to -4.0m) */}
        <rect x="0" y="70" width="460" height="90" fill="rgba(15,82,186,0.15)" stroke="rgba(15,82,186,0.4)" strokeWidth="1" />
        <text x="20" y="105" fill="#93c5fd" fontSize="11" fontWeight="bold" fontFamily="JetBrains Mono">Couche 2 : Argile plastique (c' = 25 kPa, φ' = 22°)</text>

        {/* Water Table Level Line (Nappe phréatique à -2.20 m) */}
        <line x1="0" y1="115" x2="460" y2="115" stroke="#38bdf8" strokeWidth="2" strokeDasharray="8,4" />
        <text x="340" y="110" fill="#38bdf8" fontSize="10" fontWeight="bold" fontFamily="JetBrains Mono">▼ Nappe phréatique (-2.20 m)</text>

        {/* Layer 3: Good Bearing Marl (Bon sol marneux, <-4.0m) */}
        <rect x="0" y="160" width="460" height="80" fill="rgba(16,185,129,0.15)" stroke="rgba(16,185,129,0.4)" strokeWidth="1" />
        <text x="20" y="185" fill="#6ee7b7" fontSize="11" fontWeight="bold" fontFamily="JetBrains Mono">Couche 3 : Marne compacte / Bon sol (q_admis = 0.35 MPa)</text>

        {/* Foundation Footing (Semelle filante B=1.80m à D=2.00m) */}
        <g transform="translate(180, 20)">
          {/* Column Poteau */}
          <rect x="40" y="0" width="20" height="65" fill="#4a5568" stroke="#718096" strokeWidth="1.5" />
          {/* Footing slab */}
          <polygon points="10,65 90,65 100,90 0,90" fill="#2d3748" stroke="#0F52BA" strokeWidth="2" />
          <text x="50" y="82" fill="#38bdf8" fontSize="9" textAnchor="middle" fontWeight="bold">Semelle Béton Armé</text>

          {/* Boussinesq Stress Bulb (Bulbe des contraintes) */}
          <path d="M 0 90 C -20 140, 120 140, 100 90" fill="none" stroke="#ef4444" strokeWidth="1.5" strokeDasharray="4,3" />
          <text x="50" y="130" fill="#ef4444" fontSize="9" textAnchor="middle" fontFamily="JetBrains Mono">Bulbe des contraintes (σ_z)</text>
        </g>
      </svg>
    </div>
  );
}

// ── 5. Bridge Structure Diagram (Pont à Poutres) ────────────────────────────
function BridgeStructureDiagram() {
  return (
    <div className="space-y-3">
      <svg viewBox="0 0 460 220" className="w-full rounded-xl bg-slate-950 border border-slate-800">
        {/* River Water Level */}
        <rect x="120" y="160" width="220" height="40" fill="rgba(56,189,248,0.2)" />
        <path d="M 120 160 Q 175 155, 230 160 T 340 160" fill="none" stroke="#38bdf8" strokeWidth="1.5" />

        {/* Abutment Left (Culée C1) */}
        <polygon points="20,100 80,100 80,180 20,180" fill="#4a5568" stroke="#718096" strokeWidth="2" />
        <text x="50" y="140" fill="#e2e8f0" fontSize="10" textAnchor="middle" fontWeight="bold">Culée C1</text>

        {/* Abutment Right (Culée C2) */}
        <polygon points="380,100 440,100 440,180 380,180" fill="#4a5568" stroke="#718096" strokeWidth="2" />
        <text x="410" y="140" fill="#e2e8f0" fontSize="10" textAnchor="middle" fontWeight="bold">Culée C2</text>

        {/* Pier (Pile P1) */}
        <polygon points="215,100 245,100 245,185 215,185" fill="#2d3748" stroke="#0F52BA" strokeWidth="2" />
        <text x="230" y="145" fill="#38bdf8" fontSize="10" textAnchor="middle" fontWeight="bold">Pile P1</text>

        {/* Elastomeric Bearings (Appareils d'appui en néoprène) */}
        <rect x="70" y="94" width="16" height="6" fill="#FF6B00" />
        <rect x="218" y="94" width="16" height="6" fill="#FF6B00" />
        <rect x="236" y="94" width="16" height="6" fill="#FF6B00" />
        <rect x="384" y="94" width="16" height="6" fill="#FF6B00" />

        {/* Deck Girder (Tablier à poutres précontraintes) */}
        <rect x="65" y="80" width="340" height="14" fill="#0F52BA" stroke="#38bdf8" strokeWidth="1.5" rx="2" />
        <text x="230" y="91" fill="#white" fontSize="10" textAnchor="middle" fontWeight="bold" fontFamily="JetBrains Mono">Tablier Béton Précontraint (Portée = 35 m)</text>

        {/* Safety Barrier (Garde-corps) */}
        <line x1="65" y1="72" x2="405" y2="72" stroke="#94a3b8" strokeWidth="2" />
      </svg>
    </div>
  );
}

// ── 6. Trig Interactive Diagram ─────────────────────────────────────────────
function TrigInteractiveDiagram({ angle, setAngle }) {
  const rad = (angle * Math.PI) / 180;
  const H = 160;
  const opp = (H * Math.sin(rad)).toFixed(1);
  const adj = (H * Math.cos(rad)).toFixed(1);

  return (
    <div className="space-y-3">
      <div className="flex items-center gap-4 bg-slate-950 p-3 rounded-xl border border-slate-800">
        <span className="text-xs text-slate-400 font-medium">Angle θ (degrés) :</span>
        <input
          type="range" min="1" max="89" value={angle}
          onChange={e => setAngle(Number(e.target.value))}
          className="flex-1 h-2 accent-sky-500 cursor-pointer"
        />
        <span className="text-xs font-bold font-mono text-sky-400 w-12">{angle}°</span>
      </div>

      <svg viewBox="0 0 420 220" className="w-full rounded-xl bg-slate-950 border border-slate-800">
        <g transform="translate(50, 180)">
          {/* Base Adjacent */}
          <line x1="0" y1="0" x2={adj} y2="0" stroke="#FF6B00" strokeWidth="3" />
          <text x={adj / 2} y="20" fill="#FF6B00" fontSize="11" textAnchor="middle" fontFamily="JetBrains Mono">Adjacent (adj = {adj} m)</text>

          {/* Height Opposite */}
          <line x1={adj} y1="0" x2={adj} y2={-opp} stroke="#10b981" strokeWidth="3" />
          <text x={Number(adj) + 12} y={-opp / 2} fill="#10b981" fontSize="11" fontFamily="JetBrains Mono">Opposé (opp = {opp} m)</text>

          {/* Hypotenuse */}
          <line x1="0" y1="0" x2={adj} y2={-opp} stroke="#38bdf8" strokeWidth="4" />
          <text x={adj / 2 - 20} y={-opp / 2 - 10} fill="#38bdf8" fontSize="11" fontWeight="bold" fontFamily="JetBrains Mono">Hypoténuse (H = 160 m)</text>

          {/* Right Angle marker */}
          <rect x={adj - 15} y="-15" width="15" height="15" fill="none" stroke="rgba(148,163,184,0.6)" strokeWidth="1.5" />

          {/* Angle Arc */}
          <path d={`M 35 0 A 35 35 0 0 0 ${35 * Math.cos(rad)} ${-35 * Math.sin(rad)}`} fill="rgba(56,189,248,0.2)" stroke="#38bdf8" strokeWidth="2" />
          <text x="45" y="-10" fill="#38bdf8" fontSize="12" fontWeight="bold">θ</text>
        </g>
      </svg>
    </div>
  );
}

// ── Diagram Legend & Annotations Component ───────────────────────────────────
function DiagramLegend({ type, angle }) {
  return (
    <div className="space-y-3 text-xs bg-slate-950 p-4 rounded-xl border border-slate-800">
      <h5 className="font-bold text-sky-400 uppercase tracking-wider mb-2">Notice Technique & Légende des Cotations</h5>

      {type === 'force_decomposition' && (
        <ul className="space-y-2 text-slate-300">
          <li className="flex items-start gap-2">
            <span className="w-3 h-3 rounded-full bg-red-500 mt-0.5 shrink-0" />
            <div><strong>W (Poids vertical)</strong> : Force de gravité globale agissant verticalement vers le bas (<InlineMath math="W = m \cdot g" />).</div>
          </li>
          <li className="flex items-start gap-2">
            <span className="w-3 h-3 rounded-full bg-sky-400 mt-0.5 shrink-0" />
            <div><strong>Wn (Composante normale)</strong> : Force pressant le bloc contre le toit (<InlineMath math="W_n = W \cos\theta" />). Détermine le frottement.</div>
          </li>
          <li className="flex items-start gap-2">
            <span className="w-3 h-3 rounded-full bg-orange-500 mt-0.5 shrink-0" />
            <div><strong>Wt (Composante tangentielle)</strong> : Force provoquant la glissade vers le bas du toit (<InlineMath math="W_t = W \sin\theta" />).</div>
          </li>
          <li className="flex items-start gap-2">
            <span className="w-3 h-3 rounded-full bg-emerald-400 mt-0.5 shrink-0" />
            <div><strong>N (Réaction du support)</strong> : Force de réaction normale opposée par la charpente pour empêcher l'enfoncement.</div>
          </li>
        </ul>
      )}

      {type === 'rebar_beam' && (
        <ul className="space-y-2 text-slate-300">
          <li className="flex items-start gap-2">
            <span className="w-3 h-3 rounded-full bg-blue-500 mt-0.5 shrink-0" />
            <div><strong>Armatures tendues (3 HA 20)</strong> : Placées en zone inférieure pour reprendre l'intégralité des efforts de traction.</div>
          </li>
          <li className="flex items-start gap-2">
            <span className="w-3 h-3 rounded-full bg-orange-500 mt-0.5 shrink-0" />
            <div><strong>Étriers / Cadres (HA 8)</strong> : Armatures transversales cousant les fissures de cisaillement à 45°.</div>
          </li>
          <li className="flex items-start gap-2">
            <span className="w-3 h-3 rounded-full bg-emerald-500 mt-0.5 shrink-0" />
            <div><strong>Enrobage <InlineMath math="c_{nom} = 35\text{ mm}" /></strong> : Épaisseur minimale de béton protégeant les aciers de la corrosion (Eurocode 2).</div>
          </li>
        </ul>
      )}

      {type === 'road_profile' && (
        <ul className="space-y-2 text-slate-300">
          <li><strong>Couche de Roulement (4 cm)</strong> : Enrobé bitumineux résistant à l'usure des pneumatiques et imperméabilisant.</li>
          <li><strong>Couche de Base (12 cm)</strong> : Grave bitume apportant la rigidité structurelle sous le trafic lourd.</li>
          <li><strong>Couche de Forme (30 cm)</strong> : Homogénéise le sol de terrassement et protège contre le gel.</li>
          <li><strong>Dévers (-2.5%)</strong> : Pente transversale assurant l'évacuation rapide des eaux de pluie vers le fossé.</li>
        </ul>
      )}

      {(type === 'trig_interactive' || !type) && (
        <ul className="space-y-2 text-slate-300">
          <li><strong>Hypoténuse ($H$)</strong> : Côté opposé à l'angle droit, représentant la longueur du câble ou du remblai.</li>
          <li><strong>Opposé ($\text{opp}$)</strong> : Hauteur verticale calculée par $H \cdot \sin\theta$.</li>
          <li><strong>Adjacent ($\text{adj}$)</strong> : Projection horizontale calculée par $H \cdot \cos\theta$.</li>
        </ul>
      )}
    </div>
  );
}
