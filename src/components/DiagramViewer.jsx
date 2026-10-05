import { useState } from 'react';
import { SafeInlineMath, renderInlineLatex } from './SafeMath.jsx';
import ErrorBoundary from './ErrorBoundary.jsx';

export default function DiagramViewer({
  type = 'trig_interactive',
  title,
  description,
  legend,
  annotations,
  cotations,
  items = [],
}) {
  const [activeTab, setActiveTab] = useState('diagram');
  const [angle, setAngle] = useState(30); // for force_decomposition & trig
  const [showStress, setShowStress] = useState(true); // for rebar_beam

  if (type === 'none') return null;
  if (type === 'process_flow') return <ProcessFlowDiagram title={title} items={items} />;

  // Safe normalized type — never fallback to bridge_structure
  const rawType = typeof type === 'string' && type.trim() ? type.trim().toLowerCase() : '';
  
  let safeType = 'trig_interactive';
  if (['plan_coffrage', 'plan_cartouche', 'dessin_plans', 'dessin', 'cartouche'].includes(rawType)) {
    safeType = 'plan_coffrage';
  } else if (['bim_workflow', 'bim_cycle', 'bim', 'openbim', 'ifc_lod', 'bim_management'].includes(rawType)) {
    safeType = 'bim_workflow';
  } else if (['topographie_nivellement', 'topo_survey', 'topographie', 'nivellement', 'nivellement_direct'].includes(rawType)) {
    safeType = 'topographie_nivellement';
  } else if (['force_decomposition', 'mecanique', 'physique'].includes(rawType)) {
    safeType = 'force_decomposition';
  } else if (['rebar_beam', 'beton_arme', 'beton-arme'].includes(rawType)) {
    safeType = 'rebar_beam';
  } else if (['road_profile', 'routes', 'chaussee'].includes(rawType)) {
    safeType = 'road_profile';
  } else if (['soil_profile', 'geotechnique', 'sols', 'fondations'].includes(rawType)) {
    safeType = 'soil_profile';
  } else if (['bridge_structure', 'precontrainte', 'beton_precontraint', 'beton-precontraint'].includes(rawType)) {
    safeType = 'bridge_structure';
  } else if (['trig_interactive', 'maths', 'trig'].includes(rawType)) {
    safeType = 'trig_interactive';
  } else {
    // Default safe fallback is trig_interactive (NEVER bridge_structure)
    safeType = 'trig_interactive';
  }

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

        {/* Tab Buttons */}
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
            {safeType === 'plan_coffrage' && <PlanCoffrageDiagram />}
            {safeType === 'bim_workflow' && <BimWorkflowDiagram />}
            {safeType === 'topographie_nivellement' && <TopographieNivellementDiagram />}
            {safeType === 'force_decomposition' && <ForceDecompositionDiagram angle={angle} setAngle={setAngle} />}
            {safeType === 'rebar_beam' && <RebarBeamDiagram showStress={showStress} setShowStress={setShowStress} />}
            {safeType === 'road_profile' && <RoadProfileDiagram />}
            {safeType === 'soil_profile' && <SoilProfileDiagram />}
            {safeType === 'bridge_structure' && <BridgeStructureDiagram />}
            {safeType === 'trig_interactive' && <TrigInteractiveDiagram angle={angle} setAngle={setAngle} />}
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
    case 'plan_coffrage': return "Plan de Coffrage Structuré & Cartouche Normalisé ISO";
    case 'bim_workflow': return "Cycle OpenBIM, Matrice LOD (100 à 500) & Fichiers IFC";
    case 'topographie_nivellement': return "Cheminement de Nivellement Direct (Mire AR, Mire AV, Dénivelée ΔH)";
    case 'force_decomposition': return "Décomposition des Forces sur Plan Incliné";
    case 'rebar_beam': return "Coupe Transversale Poutre Béton Armé (Eurocode 2)";
    case 'road_profile': return "Profil en Travers d'une Chaussée Routière";
    case 'soil_profile': return "Profil Géotechnique & Fondation Profonde";
    case 'bridge_structure': return "Coupe Longitudinale d'un Pont à Poutres Précontraintes";
    case 'trig_interactive': return "Triangle Rectangle & Projections Trigonométriques";
    default: return "Schéma Technique & Diagramme des Sollicitations";
  }
}

// ── 1. Plan de Coffrage & Cartouche Normalisé (Module 04 - Dessin/Plans) ─────
function PlanCoffrageDiagram() {
  return (
    <div className="space-y-3 w-full max-w-full overflow-hidden">
      <div className="w-full max-w-full overflow-hidden rounded-xl bg-slate-950 border border-slate-800">
        <svg viewBox="0 0 500 320" className="w-full h-auto max-w-full block">
          {/* Background A3 drawing sheet format */}
          <rect x="5" y="5" width="490" height="310" fill="#0b1120" stroke="#334155" strokeWidth="1.5" rx="4" />
          <rect x="12" y="12" width="476" height="296" fill="none" stroke="#1e293b" strokeWidth="1" strokeDasharray="3,3" />

          {/* Grid Axes Lines */}
          {/* Axis 1 */}
          <line x1="60" y1="40" x2="60" y2="210" stroke="#0ea5e9" strokeWidth="1.2" strokeDasharray="8,4,2,4" />
          <circle cx="60" cy="30" r="12" fill="#0369a1" stroke="#38bdf8" strokeWidth="1.5" />
          <text x="60" y="34" fill="#ffffff" fontSize="11" fontWeight="bold" textAnchor="middle" fontFamily="JetBrains Mono">1</text>

          {/* Axis 2 */}
          <line x1="320" y1="40" x2="320" y2="210" stroke="#0ea5e9" strokeWidth="1.2" strokeDasharray="8,4,2,4" />
          <circle cx="320" cy="30" r="12" fill="#0369a1" stroke="#38bdf8" strokeWidth="1.5" />
          <text x="320" y="34" fill="#ffffff" fontSize="11" fontWeight="bold" textAnchor="middle" fontFamily="JetBrains Mono">2</text>

          {/* Axis A */}
          <line x1="30" y1="120" x2="360" y2="120" stroke="#0ea5e9" strokeWidth="1.2" strokeDasharray="8,4,2,4" />
          <circle cx="20" cy="120" r="12" fill="#0369a1" stroke="#38bdf8" strokeWidth="1.5" />
          <text x="20" y="124" fill="#ffffff" fontSize="11" fontWeight="bold" textAnchor="middle" fontFamily="JetBrains Mono">A</text>

          {/* Column P1 (30x30 cm) at Axis 1-A */}
          <rect x="45" y="105" width="30" height="30" fill="rgba(148,163,184,0.4)" stroke="#38bdf8" strokeWidth="2" />
          <line x1="45" y1="105" x2="75" y2="135" stroke="rgba(255,255,255,0.2)" strokeWidth="1" />
          <line x1="45" y1="135" x2="75" y2="105" stroke="rgba(255,255,255,0.2)" strokeWidth="1" />
          <text x="35" y="98" fill="#38bdf8" fontSize="9" fontWeight="bold" fontFamily="JetBrains Mono">P1 (30×30)</text>

          {/* Column P2 (30x30 cm) at Axis 2-A */}
          <rect x="305" y="105" width="30" height="30" fill="rgba(148,163,184,0.4)" stroke="#38bdf8" strokeWidth="2" />
          <line x1="305" y1="105" x2="335" y2="135" stroke="rgba(255,255,255,0.2)" strokeWidth="1" />
          <line x1="305" y1="135" x2="335" y2="105" stroke="rgba(255,255,255,0.2)" strokeWidth="1" />
          <text x="340" y="98" fill="#38bdf8" fontSize="9" fontWeight="bold" fontFamily="JetBrains Mono">P2 (30×30)</text>

          {/* Continuous Beam Poutre 01 (b=25 cm, h=50 cm) */}
          <rect x="75" y="108" width="230" height="24" fill="rgba(15,82,186,0.25)" stroke="#60a5fa" strokeWidth="1.8" />
          <text x="190" y="123" fill="#ffffff" fontSize="10" fontWeight="bold" textAnchor="middle" fontFamily="JetBrains Mono">POUTRE P01 (25×50)</text>

          {/* Slab Hatching background */}
          <rect x="75" y="55" width="230" height="53" fill="rgba(56,189,248,0.04)" stroke="rgba(56,189,248,0.15)" strokeDasharray="4,4" />
          <text x="190" y="85" fill="#94a3b8" fontSize="9" textAnchor="middle">Dalle pleine e = 20 cm</text>

          {/* Dimension Line 1: Between axes (5.00 m) */}
          <line x1="60" y1="170" x2="320" y2="170" stroke="#f59e0b" strokeWidth="1.2" />
          <line x1="55" y1="175" x2="65" y2="165" stroke="#f59e0b" strokeWidth="1.5" />
          <line x1="315" y1="175" x2="325" y2="165" stroke="#f59e0b" strokeWidth="1.5" />
          <text x="190" y="165" fill="#f59e0b" fontSize="10" fontWeight="bold" textAnchor="middle" fontFamily="JetBrains Mono">L_entre-axes = 5.00 m</text>

          {/* Dimension Line 2: Clear span (4.70 m) */}
          <line x1="75" y1="190" x2="305" y2="190" stroke="#10b981" strokeWidth="1.2" />
          <line x1="70" y1="195" x2="80" y2="185" stroke="#10b981" strokeWidth="1.5" />
          <line x1="300" y1="195" x2="310" y2="185" stroke="#10b981" strokeWidth="1.5" />
          <text x="190" y="203" fill="#10b981" fontSize="9" fontWeight="bold" textAnchor="middle" fontFamily="JetBrains Mono">Portée libre L_0 = 4.70 m</text>

          {/* Section Cut Line A-A */}
          <line x1="190" y1="45" x2="190" y2="150" stroke="#ef4444" strokeWidth="2" />
          <polygon points="186,50 194,50 190,40" fill="#ef4444" />
          <text x="198" y="52" fill="#ef4444" fontSize="10" fontWeight="bold">A</text>
          <polygon points="186,145 194,145 190,155" fill="#ef4444" />
          <text x="198" y="152" fill="#ef4444" fontSize="10" fontWeight="bold">A</text>

          {/* Level Annotation */}
          <polygon points="270,120 280,120 275,110" fill="#10b981" />
          <line x1="265" y1="120" x2="285" y2="120" stroke="#10b981" strokeWidth="1.5" />
          <text x="290" y="117" fill="#10b981" fontSize="9" fontWeight="bold" fontFamily="JetBrains Mono">+3.500 m</text>

          {/* ISO Title Block (Cartouche) in Bottom-Right Corner */}
          <g transform="translate(230, 220)">
            <rect x="0" y="0" width="250" height="82" fill="#0f172a" stroke="#0284c7" strokeWidth="1.5" />
            <line x1="0" y1="26" x2="250" y2="26" stroke="#334155" strokeWidth="1" />
            <line x1="0" y1="54" x2="250" y2="54" stroke="#334155" strokeWidth="1" />
            <line x1="130" y1="26" x2="130" y2="82" stroke="#334155" strokeWidth="1" />
            <line x1="190" y1="54" x2="190" y2="82" stroke="#334155" strokeWidth="1" />

            {/* Cartouche texts */}
            <text x="10" y="17" fill="#38bdf8" fontSize="10" fontWeight="bold">PLAN DE COFFRAGE — POUTRES & DALLES</text>
            <text x="10" y="42" fill="#94a3b8" fontSize="8">AFFAIRE : <tspan fill="#ffffff" fontWeight="bold">BÂTIMENT R+3 (GCEA)</tspan></text>
            <text x="140" y="42" fill="#94a3b8" fontSize="8">NIVEAU : <tspan fill="#ffffff" fontWeight="bold">R+1 (+3.50m)</tspan></text>
            <text x="10" y="70" fill="#94a3b8" fontSize="8">ÉCHELLE : <tspan fill="#38bdf8" fontWeight="bold">1/50</tspan></text>
            <text x="70" y="70" fill="#94a3b8" fontSize="8">FORMAT : <tspan fill="#ffffff" fontWeight="bold">A3</tspan></text>
            <text x="140" y="70" fill="#94a3b8" fontSize="8">DATE : <tspan fill="#ffffff">2026</tspan></text>
            <text x="200" y="70" fill="#94a3b8" fontSize="8">INDICE : <tspan fill="#f59e0b" fontWeight="bold">B</tspan></text>
          </g>
        </svg>
      </div>

      <div className="flex flex-wrap gap-2 text-[11px]">
        <span className="px-2.5 py-1 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-300">Axes structuraux : <strong>Axe 1 & 2</strong></span>
        <span className="px-2.5 py-1 rounded-full bg-slate-950 border border-slate-700 text-slate-300">Poteaux : <strong>30×30 cm</strong></span>
        <span className="px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-300">Poutre : <strong>25×50 cm (L=5.00m)</strong></span>
        <span className="px-2.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300">Cartouche : <strong>ISO 7200 (Éch. 1/50)</strong></span>
      </div>
    </div>
  );
}

// ── 2. BIM OpenBIM & Matrice LOD 100 à 500 (Module 05 - BIM) ────────────────
function BimWorkflowDiagram() {
  return (
    <div className="space-y-3 w-full max-w-full overflow-hidden">
      <div className="w-full max-w-full overflow-hidden rounded-xl bg-slate-950 border border-slate-800">
        <svg viewBox="0 0 500 280" className="w-full h-auto max-w-full block">
          {/* Header Banner */}
          <rect x="10" y="10" width="480" height="32" fill="#0f172a" stroke="#0284c7" strokeWidth="1" rx="6" />
          <text x="25" y="30" fill="#38bdf8" fontSize="11" fontWeight="bold">PROCESSUS OPENBIM — COLLABORATION & CYCLE IFC (ISO 19650)</text>
          <rect x="390" y="16" width="90" height="20" fill="#0369a1" rx="4" />
          <text x="435" y="30" fill="#ffffff" fontSize="9" fontWeight="bold" textAnchor="middle">IFC4 / BCF 3.0</text>

          {/* 5 LOD Cards Flow */}
          {/* LOD 100 */}
          <g transform="translate(15, 55)">
            <rect x="0" y="0" width="84" height="110" fill="rgba(30,41,59,0.8)" stroke="#64748b" strokeWidth="1.5" rx="6" />
            <rect x="0" y="0" width="84" height="24" fill="#334155" rx="6" />
            <text x="42" y="16" fill="#ffffff" fontSize="10" fontWeight="bold" textAnchor="middle">LOD 100</text>
            <text x="42" y="42" fill="#38bdf8" fontSize="8" fontWeight="bold" textAnchor="middle">Conceptuel</text>
            <text x="42" y="60" fill="#94a3b8" fontSize="7.5" textAnchor="middle">Esquisse 3D</text>
            <text x="42" y="74" fill="#94a3b8" fontSize="7.5" textAnchor="middle">Surfaces &</text>
            <text x="42" y="88" fill="#94a3b8" fontSize="7.5" textAnchor="middle">Volumes bruts</text>
            <circle cx="42" cy="100" r="3" fill="#64748b" />
          </g>

          {/* Arrow 1 */}
          <line x1="102" y1="110" x2="110" y2="110" stroke="#0ea5e9" strokeWidth="2" markerEnd="url(#arrow-cyan)" />

          {/* LOD 200 */}
          <g transform="translate(112, 55)">
            <rect x="0" y="0" width="84" height="110" fill="rgba(30,41,59,0.8)" stroke="#0284c7" strokeWidth="1.5" rx="6" />
            <rect x="0" y="0" width="84" height="24" fill="#0369a1" rx="6" />
            <text x="42" y="16" fill="#ffffff" fontSize="10" fontWeight="bold" textAnchor="middle">LOD 200</text>
            <text x="42" y="42" fill="#38bdf8" fontSize="8" fontWeight="bold" textAnchor="middle">Géométrie</text>
            <text x="42" y="60" fill="#94a3b8" fontSize="7.5" textAnchor="middle">Phase APS-APD</text>
            <text x="42" y="74" fill="#94a3b8" fontSize="7.5" textAnchor="middle">Dimensions</text>
            <text x="42" y="88" fill="#94a3b8" fontSize="7.5" textAnchor="middle">estimatives</text>
            <circle cx="42" cy="100" r="3" fill="#0284c7" />
          </g>

          {/* Arrow 2 */}
          <line x1="199" y1="110" x2="207" y2="110" stroke="#0ea5e9" strokeWidth="2" markerEnd="url(#arrow-cyan)" />

          {/* LOD 300 */}
          <g transform="translate(209, 55)">
            <rect x="0" y="0" width="84" height="110" fill="rgba(30,41,59,0.8)" stroke="#059669" strokeWidth="1.5" rx="6" />
            <rect x="0" y="0" width="84" height="24" fill="#047857" rx="6" />
            <text x="42" y="16" fill="#ffffff" fontSize="10" fontWeight="bold" textAnchor="middle">LOD 300</text>
            <text x="42" y="42" fill="#34d399" fontSize="8" fontWeight="bold" textAnchor="middle">Conception</text>
            <text x="42" y="60" fill="#94a3b8" fontSize="7.5" textAnchor="middle">Phase PRO-DCE</text>
            <text x="42" y="74" fill="#94a3b8" fontSize="7.5" textAnchor="middle">Éléments réels</text>
            <text x="42" y="88" fill="#94a3b8" fontSize="7.5" textAnchor="middle">& Matériaux</text>
            <circle cx="42" cy="100" r="3" fill="#059669" />
          </g>

          {/* Arrow 3 */}
          <line x1="296" y1="110" x2="304" y2="110" stroke="#0ea5e9" strokeWidth="2" markerEnd="url(#arrow-cyan)" />

          {/* LOD 400 */}
          <g transform="translate(306, 55)">
            <rect x="0" y="0" width="84" height="110" fill="rgba(30,41,59,0.8)" stroke="#d97706" strokeWidth="1.5" rx="6" />
            <rect x="0" y="0" width="84" height="24" fill="#b45309" rx="6" />
            <text x="42" y="16" fill="#ffffff" fontSize="10" fontWeight="bold" textAnchor="middle">LOD 400</text>
            <text x="42" y="42" fill="#fbbf24" fontSize="8" fontWeight="bold" textAnchor="middle">Fabrication</text>
            <text x="42" y="60" fill="#94a3b8" fontSize="7.5" textAnchor="middle">Phase Exécution</text>
            <text x="42" y="74" fill="#94a3b8" fontSize="7.5" textAnchor="middle">Ferraillage 3D &</text>
            <text x="42" y="88" fill="#94a3b8" fontSize="7.5" textAnchor="middle">Assemblages</text>
            <circle cx="42" cy="100" r="3" fill="#d97706" />
          </g>

          {/* Arrow 4 */}
          <line x1="393" y1="110" x2="401" y2="110" stroke="#0ea5e9" strokeWidth="2" markerEnd="url(#arrow-cyan)" />

          {/* LOD 500 */}
          <g transform="translate(403, 55)">
            <rect x="0" y="0" width="84" height="110" fill="rgba(30,41,59,0.8)" stroke="#7c3aed" strokeWidth="1.5" rx="6" />
            <rect x="0" y="0" width="84" height="24" fill="#6d28d9" rx="6" />
            <text x="42" y="16" fill="#ffffff" fontSize="10" fontWeight="bold" textAnchor="middle">LOD 500</text>
            <text x="42" y="42" fill="#c084fc" fontSize="8" fontWeight="bold" textAnchor="middle">Exploitation</text>
            <text x="42" y="60" fill="#94a3b8" fontSize="7.5" textAnchor="middle">As-Built / DOE</text>
            <text x="42" y="74" fill="#94a3b8" fontSize="7.5" textAnchor="middle">GMAO &</text>
            <text x="42" y="88" fill="#94a3b8" fontSize="7.5" textAnchor="middle">Maintenance</text>
            <circle cx="42" cy="100" r="3" fill="#7c3aed" />
          </g>

          {/* Bottom Collaboration Hub */}
          <g transform="translate(15, 180)">
            <rect x="0" y="0" width="472" height="85" fill="#0f172a" stroke="#334155" strokeWidth="1.2" rx="6" />
            
            {/* Discipline 1: Archi */}
            <rect x="15" y="15" width="125" height="26" fill="rgba(56,189,248,0.15)" stroke="#38bdf8" strokeWidth="1" rx="4" />
            <text x="77" y="32" fill="#38bdf8" fontSize="9" fontWeight="bold" textAnchor="middle">🏛️ Modèle Archi (IFC)</text>

            {/* Discipline 2: Structure */}
            <rect x="150" y="15" width="135" height="26" fill="rgba(16,185,129,0.15)" stroke="#10b981" strokeWidth="1" rx="4" />
            <text x="217" y="32" fill="#10b981" fontSize="9" fontWeight="bold" textAnchor="middle">🔩 Modèle Structure (IFC)</text>

            {/* Discipline 3: MEP */}
            <rect x="295" y="15" width="160" height="26" fill="rgba(245,158,11,0.15)" stroke="#f59e0b" strokeWidth="1" rx="4" />
            <text x="375" y="32" fill="#f59e0b" fontSize="9" fontWeight="bold" textAnchor="middle">⚡ Modèle MEP / Réseaux (IFC)</text>

            {/* Federation Line */}
            <text x="236" y="65" fill="#94a3b8" fontSize="9" textAnchor="middle">
              ⚡ Détection de Clashs Automatisée (BCF) • Synthèse 3D • Extraction des Quantités QTO
            </text>
          </g>

          <defs>
            <marker id="arrow-cyan" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
              <path d="M 0 0 L 10 5 L 0 10 z" fill="#0ea5e9" />
            </marker>
          </defs>
        </svg>
      </div>

      <div className="flex flex-wrap gap-2 text-[11px]">
        <span className="px-2.5 py-1 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-300">Format d'échange : <strong>IFC 4 / IFC 2x3</strong></span>
        <span className="px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-300">Gestion des conflits : <strong>BCF (OpenBIM)</strong></span>
        <span className="px-2.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300">Matrice de maturité : <strong>LOD 100 → LOD 500</strong></span>
      </div>
    </div>
  );
}

// ── 3. Topographie & Nivellement Direct (Module 22 - Topographie) ────────────
function TopographieNivellementDiagram() {
  const [lAr, setLAr] = useState(1.650);
  const [lAv, setLAv] = useState(0.430);
  const zA = 100.000;
  const deltaH = (lAr - lAv).toFixed(3);
  const zB = (zA + Number(deltaH)).toFixed(3);
  const hv = (zA + lAr).toFixed(3);

  return (
    <div className="space-y-3 w-full max-w-full overflow-hidden">
      {/* Live Surveyor Controls */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 bg-slate-950 p-2.5 sm:p-3 rounded-xl border border-slate-800">
        <div className="flex items-center gap-2">
          <span className="text-xs text-sky-400 font-medium">Lecture Arrière (L_AR) :</span>
          <input
            type="range"
            min="0.500"
            max="2.500"
            step="0.010"
            value={lAr}
            onChange={e => setLAr(Number(e.target.value))}
            className="flex-1 h-2 accent-sky-500 cursor-pointer"
          />
          <span className="text-xs font-mono font-bold text-sky-400 w-16 text-right">{lAr.toFixed(3)} m</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-xs text-emerald-400 font-medium">Lecture Avant (L_AV) :</span>
          <input
            type="range"
            min="0.200"
            max="2.000"
            step="0.010"
            value={lAv}
            onChange={e => setLAv(Number(e.target.value))}
            className="flex-1 h-2 accent-emerald-500 cursor-pointer"
          />
          <span className="text-xs font-mono font-bold text-emerald-400 w-16 text-right">{lAv.toFixed(3)} m</span>
        </div>
      </div>

      <div className="w-full max-w-full overflow-hidden rounded-xl bg-slate-950 border border-slate-800">
        <svg viewBox="0 0 500 270" className="w-full h-auto max-w-full block">
          {/* Ground surface profile with slope from A to B */}
          <path d="M 20 220 Q 150 215, 250 200 T 480 160 L 480 260 L 20 260 Z" fill="rgba(74,85,104,0.3)" stroke="#64748b" strokeWidth="2" />
          <line x1="20" y1="220" x2="480" y2="160" stroke="#94a3b8" strokeWidth="1.5" strokeDasharray="3,3" />

          {/* Reference Datum Line Z = 100.000 m */}
          <line x1="20" y1="245" x2="480" y2="245" stroke="#475569" strokeWidth="1" strokeDasharray="6,4" />
          <text x="30" y="240" fill="#64748b" fontSize="9" fontFamily="JetBrains Mono">Plan de référence altimétrique (NGF)</text>

          {/* Point A (Repère R1) */}
          <polygon points="55,220 65,220 60,210" fill="#38bdf8" />
          <circle cx="60" cy="220" r="4" fill="#0284c7" />
          <text x="60" y="235" fill="#38bdf8" fontSize="10" fontWeight="bold" textAnchor="middle" fontFamily="JetBrains Mono">Point A (Z_A = 100.000 m)</text>

          {/* Point B */}
          <polygon points="435,170 445,170 440,160" fill="#10b981" />
          <circle cx="440" cy="170" r="4" fill="#047857" />
          <text x="440" y="185" fill="#10b981" fontSize="10" fontWeight="bold" textAnchor="middle" fontFamily="JetBrains Mono">Point B (Z_B = {zB} m)</text>

          {/* Surveyor Tripod & Optical Level Station (Milieu) */}
          <g transform="translate(240, 140)">
            {/* Tripod legs */}
            <line x1="10" y1="20" x2="-25" y2="60" stroke="#f59e0b" strokeWidth="2.5" />
            <line x1="10" y1="20" x2="10" y2="60" stroke="#f59e0b" strokeWidth="2.5" />
            <line x1="10" y1="20" x2="45" y2="60" stroke="#f59e0b" strokeWidth="2.5" />

            {/* Level Instrument */}
            <rect x="-10" y="5" width="40" height="15" fill="#0369a1" stroke="#38bdf8" strokeWidth="1.5" rx="3" />
            <circle cx="25" cy="12" r="5" fill="#38bdf8" />
            <text x="10" y="-3" fill="#f59e0b" fontSize="9" fontWeight="bold" textAnchor="middle">Station Niv. 01</text>
          </g>

          {/* Horizontal Line of Collimation (Visée horizontale) */}
          <line x1="40" y1="152" x2="460" y2="152" stroke="#eab308" strokeWidth="1.8" strokeDasharray="5,3" />
          <text x="250" y="130" fill="#eab308" fontSize="10" fontWeight="bold" textAnchor="middle" fontFamily="JetBrains Mono">
            Horizon de Visée H_V = {hv} m
          </text>

          {/* Mire Arrière (Rod on Point A) */}
          <g transform="translate(55, 70)">
            <rect x="0" y="0" width="10" height="150" fill="#ffffff" stroke="#0284c7" strokeWidth="1.5" />
            <line x1="0" y1="20" x2="10" y2="20" stroke="#ef4444" strokeWidth="1.5" />
            <line x1="0" y1="40" x2="10" y2="40" stroke="#000000" strokeWidth="1.5" />
            <line x1="0" y1="60" x2="10" y2="60" stroke="#ef4444" strokeWidth="1.5" />
            <line x1="0" y1="82" x2="10" y2="82" stroke="#0284c7" strokeWidth="2" />
            {/* L_AR reading line */}
            <text x="-8" y="80" fill="#38bdf8" fontSize="10" fontWeight="bold" textAnchor="end" fontFamily="JetBrains Mono">L_AR = {lAr.toFixed(3)} m</text>
            <text x="5" y="-6" fill="#38bdf8" fontSize="9" fontWeight="bold" textAnchor="middle">Mire AR</text>
          </g>

          {/* Mire Avant (Rod on Point B) */}
          <g transform="translate(435, 70)">
            <rect x="0" y="0" width="10" height="100" fill="#ffffff" stroke="#047857" strokeWidth="1.5" />
            <line x1="0" y1="20" x2="10" y2="20" stroke="#ef4444" strokeWidth="1.5" />
            <line x1="0" y1="40" x2="10" y2="40" stroke="#000000" strokeWidth="1.5" />
            <line x1="0" y1="82" x2="10" y2="82" stroke="#047857" strokeWidth="2" />
            {/* L_AV reading line */}
            <text x="18" y="80" fill="#10b981" fontSize="10" fontWeight="bold" textAnchor="start" fontFamily="JetBrains Mono">L_AV = {lAv.toFixed(3)} m</text>
            <text x="5" y="-6" fill="#10b981" fontSize="9" fontWeight="bold" textAnchor="middle">Mire AV</text>
          </g>
        </svg>
      </div>

      {/* Live Calculation Output Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
        <div className="bg-slate-950 p-2.5 rounded-xl border border-sky-500/30 text-center">
          <p className="text-[10px] text-slate-400">Plan de Visée (H_V)</p>
          <p className="text-sm font-bold text-sky-400 font-mono">{hv} m</p>
          <p className="text-[9px] text-slate-500 font-mono mt-0.5">Z_A + L_AR = 100.000 + {lAr.toFixed(3)}</p>
        </div>
        <div className="bg-slate-950 p-2.5 rounded-xl border border-amber-500/30 text-center">
          <p className="text-[10px] text-slate-400">Dénivelée (ΔH_AB)</p>
          <p className={`text-sm font-bold font-mono ${Number(deltaH) >= 0 ? 'text-amber-400' : 'text-rose-400'}`}>
            {Number(deltaH) >= 0 ? `+${deltaH}` : deltaH} m
          </p>
          <p className="text-[9px] text-slate-500 font-mono mt-0.5">L_AR - L_AV = {lAr.toFixed(3)} - {lAv.toFixed(3)}</p>
        </div>
        <div className="bg-slate-950 p-2.5 rounded-xl border border-emerald-500/30 text-center">
          <p className="text-[10px] text-slate-400">Altitude Finale (Z_B)</p>
          <p className="text-sm font-bold text-emerald-400 font-mono">{zB} m</p>
          <p className="text-[9px] text-slate-500 font-mono mt-0.5">Z_A + ΔH_AB = {zB} m NGF</p>
        </div>
      </div>
    </div>
  );
}

// ── 4. Force Decomposition Diagram ──────────────────────────────────────────
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

  // Wn: Perpendicular to slope
  const wnx2 = bx + Wn * Math.sin(rad) * vecScale;
  const wny2 = by + Wn * Math.cos(rad) * vecScale;

  // Wt: Parallel to slope
  const wtx2 = bx - Wt * Math.cos(rad) * vecScale;
  const wty2 = by + Wt * Math.sin(rad) * vecScale;

  // Reaction N: opposite of Wn
  const nx2 = bx - Wn * Math.sin(rad) * vecScale;
  const ny2 = by - Wn * Math.cos(rad) * vecScale;

  return (
    <div className="space-y-3 w-full max-w-full overflow-hidden">
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

      <div className="w-full max-w-full overflow-hidden rounded-xl bg-slate-950 border border-slate-800">
        <svg viewBox={`0 0 ${svgW} ${svgH}`} className="w-full h-auto max-w-full block">
          <line x1={originX - 20} y1={originY} x2={originX + slopeLen + 20} y2={originY}
            stroke="rgba(148,163,184,0.3)" strokeWidth="1.5" strokeDasharray="4,4" />

          <line x1={originX} y1={originY} x2={endX} y2={endY}
            stroke="#0F52BA" strokeWidth="4" strokeLinecap="round" />

          <polygon points={`${originX},${originY} ${endX},${endY} ${endX},${originY}`}
            fill="rgba(15,82,186,0.08)" />

          <path d={`M ${originX + 40} ${originY} A 40 40 0 0 0 ${originX + 40 * Math.cos(rad)} ${originY - 40 * Math.sin(rad)}`}
            fill="rgba(56,189,248,0.15)" stroke="#38bdf8" strokeWidth="1.5" />
          <text x={originX + 50} y={originY - 10} fill="#38bdf8" fontSize="12" fontWeight="bold" fontFamily="JetBrains Mono">θ = {safeAngle}°</text>

          <g transform={`translate(${bx},${by}) rotate(${-safeAngle})`}>
            <rect x="-24" y="-30" width="48" height="30" fill="rgba(255,107,0,0.25)" stroke="#FF6B00" strokeWidth="2" rx="4" />
            <circle cx="0" cy="-15" r="4" fill="#FF6B00" />
          </g>

          <line x1={bx} y1={by} x2={wx2} y2={wy2} stroke="#ef4444" strokeWidth="3" markerEnd="url(#arrow-red)" />
          <text x={wx2 + 8} y={wy2} fill="#ef4444" fontSize="11" fontWeight="bold" fontFamily="JetBrains Mono">W (100 kN)</text>

          <line x1={bx} y1={by} x2={wnx2} y2={wny2} stroke="#38bdf8" strokeWidth="2.5" strokeDasharray="3,3" />
          <text x={wnx2 + 8} y={wny2 + 4} fill="#38bdf8" fontSize="11" fontFamily="JetBrains Mono">Wn = {Wn} kN</text>

          <line x1={bx} y1={by} x2={wtx2} y2={wty2} stroke="#FF6B00" strokeWidth="2.5" strokeDasharray="3,3" />
          <text x={wtx2 - 75} y={wty2 + 4} fill="#FF6B00" fontSize="11" fontFamily="JetBrains Mono">Wt = {Wt} kN</text>

          <line x1={bx} y1={by} x2={nx2} y2={ny2} stroke="#10b981" strokeWidth="2.5" />
          <text x={nx2 - 60} y={ny2 - 4} fill="#10b981" fontSize="11" fontWeight="bold" fontFamily="JetBrains Mono">N (Réaction)</text>

          <defs>
            <marker id="arrow-red" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
              <path d="M 0 0 L 10 5 L 0 10 z" fill="#ef4444" />
            </marker>
          </defs>
        </svg>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
        <div className="bg-slate-950 p-2.5 rounded-xl border border-red-500/30 text-center">
          <p className="text-[10px] text-slate-400">Poids Total W</p>
          <p className="text-sm font-bold text-red-400 font-mono">100.0 kN</p>
        </div>
        <div className="bg-slate-950 p-2.5 rounded-xl border border-sky-500/30 text-center">
          <p className="text-[10px] text-slate-400">Pression Normale Wn</p>
          <p className="text-sm font-bold text-sky-400 font-mono">{Wn} kN</p>
        </div>
        <div className="bg-slate-950 p-2.5 rounded-xl border border-orange-500/30 text-center">
          <p className="text-[10px] text-slate-400">Poussée Glissement Wt</p>
          <p className="text-sm font-bold text-orange-400 font-mono">{Wt} kN</p>
        </div>
      </div>
    </div>
  );
}

// ── 5. Rebar Beam Diagram (Béton Armé - Eurocode 2) ─────────────────────────
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
          <g transform="translate(40, 20)">
            <rect x="0" y="0" width="140" height="240" fill="rgba(74,85,104,0.4)" stroke="#718096" strokeWidth="2" rx="4" />
            <rect x="12" y="12" width="116" height="216" fill="none" stroke="#FF6B00" strokeWidth="2.5" rx="3" />

            <circle cx="24" cy="24" r="7" fill="#38bdf8" stroke="#0F52BA" strokeWidth="1.5" />
            <circle cx="116" cy="24" r="7" fill="#38bdf8" stroke="#0F52BA" strokeWidth="1.5" />

            <circle cx="24" cy="216" r="9" fill="#38bdf8" stroke="#0F52BA" strokeWidth="2" />
            <circle cx="70" cy="216" r="9" fill="#38bdf8" stroke="#0F52BA" strokeWidth="2" />
            <circle cx="116" cy="216" r="9" fill="#38bdf8" stroke="#0F52BA" strokeWidth="2" />

            <line x1="-15" y1="96" x2="155" y2="96" stroke="#eab308" strokeWidth="1.5" strokeDasharray="5,3" />
            <text x="160" y="99" fill="#eab308" fontSize="10" fontWeight="bold" fontFamily="JetBrains Mono">A.N. (y = 0.4d)</text>

            <line x1="0" y1="252" x2="140" y2="252" stroke="#94a3b8" strokeWidth="1" />
            <line x1="0" y1="247" x2="0" y2="257" stroke="#94a3b8" strokeWidth="1" />
            <line x1="140" y1="247" x2="140" y2="257" stroke="#94a3b8" strokeWidth="1" />
            <text x="70" y="265" fill="#94a3b8" fontSize="11" textAnchor="middle" fontFamily="JetBrains Mono">b = 300 mm</text>

            <line x1="-15" y1="0" x2="-15" y2="240" stroke="#94a3b8" strokeWidth="1" />
            <line x1="-20" y1="0" x2="-10" y2="0" stroke="#94a3b8" strokeWidth="1" />
            <line x1="-20" y1="240" x2="-10" y2="240" stroke="#94a3b8" strokeWidth="1" />
            <text x="-25" y="125" fill="#94a3b8" fontSize="11" textAnchor="middle" fontFamily="JetBrains Mono" transform="rotate(-90 -25 125)">h = 500 mm</text>
          </g>

          {showStress && (
            <g transform="translate(260, 20)">
              <text x="30" y="-5" fill="#38bdf8" fontSize="11" fontWeight="bold" textAnchor="middle">Déformations ε</text>
              <line x1="30" y1="0" x2="30" y2="240" stroke="rgba(148,163,184,0.4)" strokeWidth="1" />
              <polygon points="30,0 55,0 30,96" fill="rgba(56,189,248,0.2)" stroke="#38bdf8" strokeWidth="1.5" />
              <polygon points="30,96 5,216 30,216" fill="rgba(239,68,68,0.2)" stroke="#ef4444" strokeWidth="1.5" />
              <text x="60" y="12" fill="#38bdf8" fontSize="9" fontFamily="JetBrains Mono">εcu = 3.5‰</text>
              <text x="-15" y="220" fill="#ef4444" fontSize="9" fontFamily="JetBrains Mono">εuk = 10‰</text>

              <text x="140" y="-5" fill="#10b981" fontSize="11" fontWeight="bold" textAnchor="middle">Contraintes σ (ELU)</text>
              <line x1="140" y1="0" x2="140" y2="240" stroke="rgba(148,163,184,0.4)" strokeWidth="1" />
              <rect x="140" y="0" width="40" height="76" fill="rgba(16,185,129,0.3)" stroke="#10b981" strokeWidth="1.5" />
              <text x="145" y="42" fill="#10b981" fontSize="10" fontWeight="bold" fontFamily="JetBrains Mono">fcd = 16.7 MPa</text>

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

      <div className="flex flex-wrap gap-2 text-[11px]">
        <span className="px-2.5 py-1 rounded-full bg-slate-950 border border-slate-700 text-slate-300">Section : <strong>30×50 cm</strong></span>
        <span className="px-2.5 py-1 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-300">Armatures tendues : <strong>3 HA 20 (9.42 cm²)</strong></span>
        <span className="px-2.5 py-1 rounded-full bg-orange-500/10 border border-orange-500/30 text-orange-300">Étriers : <strong>HA 8 (esp. 15 cm)</strong></span>
      </div>
    </div>
  );
}

// ── 6. Road Profile Diagram (Profil Chaussée) ───────────────────────────────
function RoadProfileDiagram() {
  return (
    <div className="space-y-3 w-full max-w-full overflow-hidden">
      <div className="w-full max-w-full overflow-hidden rounded-xl bg-slate-950 border border-slate-800">
        <svg viewBox="0 0 460 240" className="w-full h-auto max-w-full block">
          <polygon points="20,190 440,190 440,220 20,220" fill="rgba(113,128,150,0.3)" />

          <polygon points="40,160 420,160 430,190 30,190" fill="rgba(160,174,192,0.4)" stroke="#a0aec0" strokeWidth="1" />
          <text x="230" y="178" fill="#cbd5e1" fontSize="10" textAnchor="middle" fontFamily="JetBrains Mono">Couche de Forme (GNT 0/31.5 — 30 cm)</text>

          <polygon points="50,135 410,135 420,160 40,160" fill="rgba(74,85,104,0.7)" stroke="#718096" strokeWidth="1" />
          <text x="230" y="150" fill="#e2e8f0" fontSize="10" textAnchor="middle" fontFamily="JetBrains Mono">Couche de Base (Grave Bitume GB — 12 cm)</text>

          <polygon points="60,113 230,108 400,113 405,120 55,120" fill="#1a202c" stroke="#38bdf8" strokeWidth="1.5" />
          <text x="230" y="100" fill="#38bdf8" fontSize="10" fontWeight="bold" textAnchor="middle" fontFamily="JetBrains Mono">Couche de Roulement (BBM — 4 cm)</text>

          <line x1="100" y1="95" x2="160" y2="97" stroke="#FF6B00" strokeWidth="1.5" markerEnd="url(#arrow-orange)" />
          <text x="130" y="90" fill="#FF6B00" fontSize="9" fontWeight="bold" textAnchor="middle">Dévers -2.5%</text>

          <line x1="360" y1="95" x2="300" y2="97" stroke="#FF6B00" strokeWidth="1.5" markerEnd="url(#arrow-orange)" />
          <text x="330" y="90" fill="#FF6B00" fontSize="9" fontWeight="bold" textAnchor="middle">Dévers -2.5%</text>

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

// ── 7. Soil Profile Diagram (Profil Géotechnique) ───────────────────────────
function SoilProfileDiagram() {
  return (
    <div className="space-y-3 w-full max-w-full overflow-hidden">
      <div className="w-full max-w-full overflow-hidden rounded-xl bg-slate-950 border border-slate-800">
        <svg viewBox="0 0 460 250" className="w-full h-auto max-w-full block">
          <rect x="0" y="20" width="460" height="50" fill="rgba(180,83,9,0.15)" stroke="rgba(180,83,9,0.4)" strokeWidth="1" />
          <text x="20" y="45" fill="#fcd34d" fontSize="11" fontWeight="bold" fontFamily="JetBrains Mono">Couche 1 : Terre végétale / Remblai (0.00 à -1.50 m)</text>

          <rect x="0" y="70" width="460" height="90" fill="rgba(15,82,186,0.15)" stroke="rgba(15,82,186,0.4)" strokeWidth="1" />
          <text x="20" y="105" fill="#93c5fd" fontSize="11" fontWeight="bold" fontFamily="JetBrains Mono">Couche 2 : Argile plastique (c' = 25 kPa, φ' = 22°)</text>

          <line x1="0" y1="115" x2="460" y2="115" stroke="#38bdf8" strokeWidth="2" strokeDasharray="8,4" />
          <text x="320" y="110" fill="#38bdf8" fontSize="10" fontWeight="bold" fontFamily="JetBrains Mono">▼ Nappe phréatique (-2.20 m)</text>

          <rect x="0" y="160" width="460" height="80" fill="rgba(16,185,129,0.15)" stroke="rgba(16,185,129,0.4)" strokeWidth="1" />
          <text x="20" y="185" fill="#6ee7b7" fontSize="11" fontWeight="bold" fontFamily="JetBrains Mono">Couche 3 : Marne compacte / Bon sol (q_admis = 0.35 MPa)</text>

          <g transform="translate(180, 20)">
            <rect x="40" y="0" width="20" height="65" fill="#4a5568" stroke="#718096" strokeWidth="1.5" />
            <polygon points="10,65 90,65 100,90 0,90" fill="#2d3748" stroke="#0F52BA" strokeWidth="2" />
            <text x="50" y="82" fill="#38bdf8" fontSize="9" textAnchor="middle" fontWeight="bold">Semelle Béton Armé</text>
          </g>
        </svg>
      </div>
    </div>
  );
}

// ── 8. Bridge Structure Diagram (Réservé UNIQUEMENT au Module 10 Précontrainte)
function BridgeStructureDiagram() {
  return (
    <div className="space-y-3 w-full max-w-full overflow-hidden">
      <div className="w-full max-w-full overflow-hidden rounded-xl bg-slate-950 border border-slate-800">
        <svg viewBox="0 0 460 220" className="w-full h-auto max-w-full block">
          <rect x="120" y="160" width="220" height="40" fill="rgba(56,189,248,0.2)" />
          <path d="M 120 160 Q 175 155, 230 160 T 340 160" fill="none" stroke="#38bdf8" strokeWidth="1.5" />

          <polygon points="20,100 80,100 80,180 20,180" fill="#4a5568" stroke="#718096" strokeWidth="2" />
          <text x="50" y="140" fill="#e2e8f0" fontSize="10" textAnchor="middle" fontWeight="bold">Culée C1</text>

          <polygon points="380,100 440,100 440,180 380,180" fill="#4a5568" stroke="#718096" strokeWidth="2" />
          <text x="410" y="140" fill="#e2e8f0" fontSize="10" textAnchor="middle" fontWeight="bold">Culée C2</text>

          <polygon points="215,100 245,100 245,185 215,185" fill="#2d3748" stroke="#0F52BA" strokeWidth="2" />
          <text x="230" y="145" fill="#38bdf8" fontSize="10" textAnchor="middle" fontWeight="bold">Pile P1</text>

          <rect x="70" y="94" width="16" height="6" fill="#FF6B00" />
          <rect x="218" y="94" width="16" height="6" fill="#FF6B00" />
          <rect x="236" y="94" width="16" height="6" fill="#FF6B00" />
          <rect x="384" y="94" width="16" height="6" fill="#FF6B00" />

          <rect x="65" y="80" width="340" height="14" fill="#0F52BA" stroke="#38bdf8" strokeWidth="1.5" rx="2" />
          <text x="230" y="91" fill="#ffffff" fontSize="10" textAnchor="middle" fontWeight="bold" fontFamily="JetBrains Mono">Tablier Béton Précontraint (Portée = 35 m)</text>
        </svg>
      </div>
    </div>
  );
}

// ── 9. Trig Interactive Diagram ─────────────────────────────────────────────
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
            <line x1="0" y1="0" x2={adj} y2="0" stroke="#FF6B00" strokeWidth="3" />
            <text x={adj / 2} y="20" fill="#FF6B00" fontSize="11" textAnchor="middle" fontFamily="JetBrains Mono">Adjacent ({adj} m)</text>

            <line x1={adj} y1="0" x2={adj} y2={-opp} stroke="#10b981" strokeWidth="3" />
            <text x={Number(adj) + 12} y={-opp / 2} fill="#10b981" fontSize="11" fontFamily="JetBrains Mono">Opposé ({opp} m)</text>

            <line x1="0" y1="0" x2={adj} y2={-opp} stroke="#38bdf8" strokeWidth="4" />
            <text x={adj / 2 - 20} y={-opp / 2 - 10} fill="#38bdf8" fontSize="11" fontWeight="bold" fontFamily="JetBrains Mono">Hypoténuse (160 m)</text>

            <rect x={adj - 15} y="-15" width="15" height="15" fill="none" stroke="rgba(148,163,184,0.6)" strokeWidth="1.5" />

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

  const hasCustomLegend = Array.isArray(legend) && legend.length > 0;
  const hasCustomCotations = Array.isArray(cotations) && cotations.length > 0;
  const hasCustomAnnotations = Array.isArray(annotations) && annotations.length > 0;

  const defaultItems = getDefaultLegendItems(type, safeAngle);
  const technicalTableData = getDetailedTechnicalTable(type, safeAngle);

  return (
    <div className="space-y-4 text-xs bg-slate-50 dark:bg-slate-950 p-3 sm:p-5 rounded-xl border border-slate-200 dark:border-slate-800 w-full max-w-full overflow-hidden animate-fade-up">
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

      <div className="w-full max-w-full overflow-hidden rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/40 shadow-inner">
        <div className="overflow-x-auto max-w-full py-0.5 table-scroll">
          <table className="w-full min-w-[500px] text-left text-xs border-collapse">
            <thead>
              <tr className="border-b border-slate-200 dark:border-slate-800 bg-slate-100 dark:bg-slate-950/90 text-slate-700 dark:text-slate-300">
                <th className="py-2.5 px-3 font-bold text-blue-700 dark:text-sky-400 uppercase tracking-wider text-[11px] w-32 shrink-0">
                  1. Symbole / Réf
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
                    <td className="py-2.5 px-3 align-top font-mono font-bold text-blue-700 dark:text-sky-300 whitespace-nowrap">
                      <div className="flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-500 dark:bg-sky-400 shrink-0" />
                        <SafeInlineMath math={row.symbol} />
                      </div>
                    </td>
                    <td className="py-2.5 px-3 align-top text-slate-800 dark:text-slate-200">
                      <p className="font-semibold text-slate-900 dark:text-white leading-snug">{row.designation}</p>
                      {row.unit && (
                        <span className="inline-block mt-0.5 text-[10px] text-blue-700 dark:text-sky-400/90 font-mono bg-blue-50 dark:bg-sky-500/10 px-1.5 py-0.2 rounded border border-blue-200 dark:border-sky-500/20">
                          {row.unit}
                        </span>
                      )}
                    </td>
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

function getDetailedTechnicalTable(type, angle = 30) {
  switch (type) {
    case 'plan_coffrage':
      return [
        {
          symbol: 'L_{entre-axes}',
          designation: "Distance entre axes structuraux (Trame 1 - 2)",
          unit: 'm',
          mathValue: '5.00\\text{ m}',
          eurocodeRule: 'Trame de coffrage standard pour bâtiment de bureaux/logements',
        },
        {
          symbol: 'b \\times h',
          designation: 'Section de coffrage de la poutre continue P01',
          unit: 'cm',
          mathValue: '25 \\times 50\\text{ cm}',
          eurocodeRule: 'Prédimensionnement usuel h ≈ L/10 (50 cm pour 5.00 m de portée)',
        },
        {
          symbol: 'e_{dalle}',
          designation: 'Épaisseur brute de la dalle pleine en béton armé',
          unit: 'cm',
          mathValue: '20\\text{ cm}',
          eurocodeRule: 'Isolation acoustique aux bruits d impact et reprise des moments',
        },
        {
          symbol: 'P_1 / P_2',
          designation: 'Section transversale des poteaux porteurs',
          unit: 'cm',
          mathValue: '30 \\times 30\\text{ cm}',
          eurocodeRule: 'Béton C30/37 reprenant la descente de charges ELU',
        },
        {
          symbol: '\\nabla',
          designation: 'Cotation altimétrique du niveau brut supérieur',
          unit: 'm',
          mathValue: '+3.500\\text{ m NGF}',
          eurocodeRule: 'Niveau brut béton avant coulage de la chape et carrelage (+3.550 m)',
        },
      ];

    case 'bim_workflow':
      return [
        {
          symbol: 'LOD',
          designation: 'Level of Development (Niveau de Développement)',
          unit: '100 à 500',
          mathValue: '\\text{LOD } 100 \\rightarrow 500',
          eurocodeRule: 'Norme ISO 19650 : Graduation de maturité géométrique et informationnelle',
        },
        {
          symbol: 'IFC',
          designation: 'Industry Foundation Classes (OpenBIM neutre)',
          unit: 'Format ISO',
          mathValue: '\\text{IFC } 4 \\text{ / } 2\\times 3',
          eurocodeRule: 'Interopérabilité universelle sans dépendance à un éditeur logiciel',
        },
        {
          symbol: 'BCF',
          designation: 'BIM Collaboration Format (Suivi des conflits)',
          unit: 'XML / API',
          mathValue: '\\text{BCF } 3.0',
          eurocodeRule: 'Rapportage horodaté des clashs géométriques et réservations',
        },
        {
          symbol: 'QTO',
          designation: 'Quantity Take-Off (Métrés automatisés)',
          unit: 'm³, m², kg',
          mathValue: 'V = \\sum V_{IFC}',
          eurocodeRule: 'Extraction dynamique des volumes de béton et tonnages d acier',
        },
      ];

    case 'topographie_nivellement':
      return [
        {
          symbol: 'Z_A',
          designation: 'Altitude connue du repère de nivellement (Mire AR)',
          unit: 'm',
          mathValue: 'Z_A = 100.000\\text{ m}',
          eurocodeRule: 'Repère officiel rattaché au nivellement général de la France (NGF)',
        },
        {
          symbol: 'L_{AR}',
          designation: 'Lecture sur mire arrière',
          unit: 'm',
          mathValue: 'L_{AR} = 1.650\\text{ m}',
          eurocodeRule: 'Pointage au fil niveleur horizontal du niveau automatique',
        },
        {
          symbol: 'H_V',
          designation: 'Altitude du plan de visée horizontal de l appareil',
          unit: 'm',
          mathValue: 'H_V = Z_A + L_{AR} = 101.650\\text{ m}',
          eurocodeRule: 'Horizon optique invariant sur toute la station de nivellement',
        },
        {
          symbol: 'L_{AV}',
          designation: 'Lecture sur mire avant sur le point à déterminer',
          unit: 'm',
          mathValue: 'L_{AV} = 0.430\\text{ m}',
          eurocodeRule: 'Mesure directe sur le piquet d implantation du projet',
        },
        {
          symbol: '\\Delta H_{AB}',
          designation: 'Dénivelée calculée entre A et B',
          unit: 'm',
          mathValue: '\\Delta H = L_{AR} - L_{AV} = +1.220\\text{ m}',
          eurocodeRule: 'Contrôle par cheminement fermé : écart de fermeture < tolérance',
        },
        {
          symbol: 'Z_B',
          designation: 'Altitude finale déterminée du point B',
          unit: 'm',
          mathValue: 'Z_B = Z_A + \\Delta H = 101.220\\text{ m}',
          eurocodeRule: 'Cote NGF servant au calage des semelles de fondation',
        },
      ];

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
          eurocodeRule: 'Distance fibre comprimée au centre de gravité des aciers (EC2 §5.3)',
        },
        {
          symbol: 'c_{nom}',
          designation: "Enrobage nominal de durabilité",
          unit: 'mm',
          mathValue: 'c_{nom} = 35\\text{ mm}',
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
          symbol: 'f_{cd}',
          designation: 'Résistance de calcul du béton en compression',
          unit: 'MPa',
          mathValue: 'f_{cd} = 16.7\\text{ MPa}',
          eurocodeRule: 'Béton C25/30, coefficient partiel gamma_c = 1.50 (EC2 §3.1.6)',
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
          eurocodeRule: 'Effort de cisaillement parallèle à la pente tendant au glissement',
        },
      ];

    case 'road_profile':
      return [
        {
          symbol: 'e_{BB}',
          designation: 'Couche de roulement (Béton Bitumineux)',
          unit: 'cm',
          mathValue: 'e = 4\\text{ cm}',
          eurocodeRule: 'BBTM 0/10 étanche et adhérent (NF EN 13108-1)',
        },
        {
          symbol: 'e_{GB}',
          designation: 'Couche de base structurelle (Grave Bitume)',
          unit: 'cm',
          mathValue: 'e = 12\\text{ cm}',
          eurocodeRule: 'GB3 0/14 reprenant les efforts de flexion sous essieux lourds',
        },
        {
          symbol: 'e_{GNT}',
          designation: 'Couche de forme / fondation (GNT)',
          unit: 'cm',
          mathValue: 'e = 30\\text{ cm}',
          eurocodeRule: 'Plateforme classe PF3 (Portance EV2 > 120 MPa)',
        },
      ];

    case 'soil_profile':
      return [
        {
          symbol: 'h_1',
          designation: 'Horizon supérieur : Terre végétale & remblais',
          unit: 'm',
          mathValue: '0.00 \\rightarrow -1.50\\text{ m}',
          eurocodeRule: 'Sol compressible impropre aux fondations',
        },
        {
          symbol: "c'",
          designation: 'Cohésion effective de l argile plastique',
          unit: 'kPa',
          mathValue: "c' = 25\\text{ kPa}",
          eurocodeRule: 'Résistance intrinsèque au cisaillement drainé (EC7)',
        },
        {
          symbol: 'q_{admis}',
          designation: 'Capacité portante admissible de la marne',
          unit: 'MPa',
          mathValue: 'q_{admis} = 0.35\\text{ MPa}',
          eurocodeRule: 'Pression limite nette de calcul au pressiomètre (EC7)',
        },
      ];

    case 'bridge_structure':
      return [
        {
          symbol: 'L',
          designation: 'Portée principale du tablier de pont',
          unit: 'm',
          mathValue: 'L = 35.00\\text{ m}',
          eurocodeRule: 'Franchissement en béton précontraint par post-tension (EC2-2)',
        },
        {
          symbol: 'h_t',
          designation: 'Hauteur totale des poutres précontraintes',
          unit: 'm',
          mathValue: 'h_t = 1.40\\text{ m}',
          eurocodeRule: 'Élancement économique L/25 en précontrainte',
        },
      ];

    default: // trig_interactive & fallback
      return [
        {
          symbol: 'H',
          designation: "Longueur de l'hypoténuse (Distance oblique)",
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
          symbol: 'p',
          designation: 'Pente topographique en pourcentage',
          unit: '%',
          mathValue: `p = \\tan\\theta \\times 100 = ${(Math.tan((angle * Math.PI) / 180) * 100).toFixed(1)}\\%`,
          eurocodeRule: 'Pente normalisée pour rampes d accès et talus',
        },
      ];
  }
}

function getDefaultLegendItems(type, angle = 30) {
  switch (type) {
    case 'plan_coffrage':
      return [
        {
          title: 'Axes structuraux (1, 2, A, B)',
          text: 'Lignes de référence de l ossature assurant le positionnement rigoureux des éléments',
          math: '\\text{Trame } 5.00\\text{ m}',
          dotClass: 'bg-sky-400',
        },
        {
          title: 'Poutre continue P01 (25×50 cm)',
          text: 'Élément fléchi franchissant la portée entre poteaux P1 et P2',
          math: 'b=25\\text{ cm}, h=50\\text{ cm}',
          dotClass: 'bg-blue-500',
        },
        {
          title: 'Poteaux porteurs P1 & P2 (30×30 cm)',
          text: 'Éléments verticaux reprenant la descente de charges vers les fondations',
          math: '30 \\times 30\\text{ cm}',
          dotClass: 'bg-emerald-400',
        },
        {
          title: 'Cartouche ISO 7200',
          text: 'Bloc d identification officiel du plan avec titre, échelle, indice et niveau',
          math: '\\text{Échelle } 1/50',
          dotClass: 'bg-amber-400',
        },
      ];

    case 'bim_workflow':
      return [
        {
          title: 'Modèle Fédéré OpenBIM',
          text: 'Superposition et coordination des maquettes Architecte, Structure et Fluides',
          math: '\\text{IFC } 4',
          dotClass: 'bg-sky-400',
        },
        {
          title: 'Matrice LOD (100 à 500)',
          text: 'Progression de la précision géométrique de l esquisse au dossier d exploitation',
          math: '\\text{LOD } 100 \\rightarrow 500',
          dotClass: 'bg-emerald-400',
        },
        {
          title: 'Détection de Clashs (BCF)',
          text: 'Identification automatique des conflits spatiaux entre corps d état',
          math: '\\text{BCF } 3.0',
          dotClass: 'bg-orange-500',
        },
        {
          title: 'Exploitation / DOE Numérique',
          text: 'Base de données technique pour la maintenance et la gestion de patrimoine (LOD 500)',
          math: '\\text{GMAO}',
          dotClass: 'bg-violet-400',
        },
      ];

    case 'topographie_nivellement':
      return [
        {
          title: 'Lecture Arrière (L_AR)',
          text: 'Visée sur la mire posée sur le repère d altitude connue pour déterminer le plan de visée',
          math: 'L_{AR} = 1.650\\text{ m}',
          dotClass: 'bg-sky-400',
        },
        {
          title: 'Lecture Avant (L_AV)',
          text: 'Visée sur le point dont l altitude est recherchée',
          math: 'L_{AV} = 0.430\\text{ m}',
          dotClass: 'bg-emerald-400',
        },
        {
          title: 'Dénivelée (ΔH_AB)',
          text: 'Différence de hauteur : positive en montée, négative en descente',
          math: '\\Delta H = L_{AR} - L_{AV}',
          dotClass: 'bg-amber-400',
        },
        {
          title: 'Horizon de Visée (H_V)',
          text: 'Altitude du rayon optique horizontal passant par le réticule du niveau',
          math: 'H_V = Z_A + L_{AR}',
          dotClass: 'bg-violet-400',
        },
      ];

    case 'force_decomposition':
      return [
        {
          title: 'W (Poids vertical total)',
          text: 'Force de gravité globale agissant verticalement',
          math: 'W = m \\cdot g',
          dotClass: 'bg-red-500',
        },
        {
          title: 'Wn (Composante normale au plan)',
          text: 'Force pressant la masse perpendiculairement contre la surface',
          math: 'W_n = W \\cos\\theta',
          dotClass: 'bg-sky-400',
        },
        {
          title: 'Wt (Composante tangentielle)',
          text: 'Force parallèle à la pente tendant au glissement',
          math: 'W_t = W \\sin\\theta',
          dotClass: 'bg-orange-500',
        },
      ];

    case 'rebar_beam':
      return [
        {
          title: 'Armatures tendues (3 HA 20)',
          text: 'Aciers reprenant l intégralité de la traction sous flexion',
          math: 'A_s = 9.42\\text{ cm}^2',
          dotClass: 'bg-blue-500',
        },
        {
          title: 'Étriers transversaux (HA 8)',
          text: 'Armatures cousant les bielles de cisaillement à 45°',
          math: 's = 15\\text{ cm}',
          dotClass: 'bg-orange-500',
        },
      ];

    case 'bridge_structure':
      return [
        {
          title: 'Tablier Précontraint',
          text: 'Poutres précontraintes par post-tension (Module 10)',
          math: 'L = 35.00\\text{ m}',
          dotClass: 'bg-blue-500',
        },
      ];

    default: // trig_interactive & fallback
      return [
        {
          title: 'Hypoténuse (H)',
          text: 'Plus grand côté du triangle rectangle opposé à l angle droit de 90°',
          math: 'H = 160.0\\text{ m}',
          dotClass: 'bg-sky-400',
        },
        {
          title: 'Côté Opposé (opp)',
          text: 'Projection verticale représentant le dénivelé franchi',
          math: 'opp = H \\cdot \\sin\\theta',
          dotClass: 'bg-emerald-400',
        },
        {
          title: 'Côté Adjacent (adj)',
          text: 'Projection horizontale représentant la distance au sol',
          math: 'adj = H \\cdot \\cos\\theta',
          dotClass: 'bg-orange-500',
        },
        {
          title: 'Pente (p)',
          text: 'Rapport dénivelée sur distance horizontale',
          math: 'p = \\tan\\theta \\times 100\\%',
          dotClass: 'bg-violet-400',
        },
      ];
  }
}

// ── Process flow (law, management, energy, AI… lessons without a technical drawing) ──
function ProcessFlowDiagram({ title, items = [] }) {
  const steps = items.map(item => {
    const text = String(item);
    const cut = text.indexOf(' : ');
    return cut > 0 ? { head: text.slice(0, cut), body: text.slice(cut + 3) } : { head: text, body: '' };
  });

  return (
    <div className="w-full max-w-full overflow-hidden rounded-2xl border border-slate-200 dark:border-slate-700/60 bg-white dark:bg-slate-900/90 p-3 sm:p-5 space-y-4 shadow-sm">
      <div className="flex items-center gap-2 border-b border-slate-200 dark:border-slate-800 pb-3">
        <span className="text-xl shrink-0" aria-hidden="true">📊</span>
        <div className="min-w-0">
          <p className="text-[10px] sm:text-xs uppercase tracking-widest text-teal-700 dark:text-cyan-400 font-semibold">Schéma de principe</p>
          {title && <h4 className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white mt-0.5">{title}</h4>}
        </div>
      </div>
      {steps.length === 0 ? (
        <p className="text-sm text-slate-600 dark:text-slate-400">Aucun schéma n'est défini pour cette leçon.</p>
      ) : (
        <ol className="flex flex-col md:flex-row md:flex-wrap items-stretch gap-2">
          {steps.map((step, i) => (
            <li key={i} className="contents">
              <div className="md:flex-1 md:min-w-[200px] rounded-xl border border-teal-200 dark:border-slate-700 bg-teal-50/50 dark:bg-slate-800/60 p-3.5">
                <div className="flex items-start gap-2 mb-1.5">
                  <span className="step-badge shrink-0">{i + 1}</span>
                  <p className="text-sm font-bold text-slate-900 dark:text-white leading-snug">{renderInlineLatex(step.head)}</p>
                </div>
                {step.body && <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">{renderInlineLatex(step.body)}</p>}
              </div>
              {i < steps.length - 1 && (
                <span className="self-center text-teal-500 dark:text-cyan-400 font-bold text-lg" aria-hidden="true">
                  <span className="md:hidden">↓</span>
                  <span className="hidden md:inline">→</span>
                </span>
              )}
            </li>
          ))}
        </ol>
      )}
    </div>
  );
}
