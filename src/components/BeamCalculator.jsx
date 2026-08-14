import { useState } from 'react';
import { SafeBlockMath } from './SafeMath.jsx';

// Beam calculator: Simply supported beam with uniform load
export default function BeamCalculator() {
  const [L, setL] = useState(6);    // span (m)
  const [q, setQ] = useState(15);   // uniform load (kN/m)
  const [P, setP] = useState(0);    // point load at center (kN)
  const [showDiagram, setShowDiagram] = useState(true);

  const L_ = Math.max(0.1, Number(L));
  const q_ = Number(q);
  const P_ = Number(P);

  // Reactions (simply supported, symmetric)
  const RA = (q_ * L_) / 2 + P_ / 2;
  const RB = RA;

  // Max bending moment at midspan
  const M_max_q = (q_ * L_ * L_) / 8;
  const M_max_P = (P_ * L_) / 4;
  const M_max = M_max_q + M_max_P;

  // Max shear at supports
  const V_max = RA;

  // Number of segments for diagram
  const N = 40;
  const dx = L_ / N;
  const points_M = [];
  const points_V = [];

  for (let i = 0; i <= N; i++) {
    const x = i * dx;
    // Bending moment: M(x) = RA·x - q·x²/2 - P·(x-L/2) if x > L/2
    let Mx = RA * x - (q_ * x * x) / 2;
    if (x > L_ / 2) Mx -= P_ * (x - L_ / 2);
    // Shear: V(x) = RA - q·x - P if x >= L/2
    let Vx = RA - q_ * x;
    if (x >= L_ / 2) Vx -= P_;
    points_M.push({ x, M: Mx });
    points_V.push({ x, V: Vx });
  }

  // SVG dimensions
  const svgW = 340, svgH = 130;
  const padX = 20, padY = 15;
  const plotW = svgW - 2 * padX;
  const plotH = svgH - 2 * padY;

  const toSVG_M = (x, M) => ({
    sx: padX + (x / L_) * plotW,
    sy: padY + plotH / 2 - (M / (M_max || 1)) * (plotH / 2 - 5),
  });

  const pathM = points_M.map((p, i) => {
    const { sx, sy } = toSVG_M(p.x, p.M);
    return (i === 0 ? 'M' : 'L') + `${sx.toFixed(1)},${sy.toFixed(1)}`;
  }).join(' ');

  const fillM = [
    `M${padX},${padY + plotH / 2}`,
    ...points_M.map(p => { const { sx, sy } = toSVG_M(p.x, p.M); return `L${sx.toFixed(1)},${sy.toFixed(1)}`; }),
    `L${padX + plotW},${padY + plotH / 2}Z`,
  ].join(' ');

  return (
    <div className="rounded-2xl border border-slate-700/50 bg-slate-900/80 p-4 sm:p-5 space-y-4 w-full max-w-full overflow-hidden">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <span className="text-xl">📊</span>
          <div>
            <p className="text-xs uppercase tracking-widest text-violet-400 font-semibold">Calculateur de Poutre</p>
            <p className="text-xs text-slate-500 mt-0.5">Poutre simplement appuyée</p>
          </div>
        </div>
        <button
          onClick={() => setShowDiagram(!showDiagram)}
          className="text-xs bg-slate-800 hover:bg-slate-700 px-3 py-1.5 rounded-lg text-slate-300 transition-colors"
        >
          {showDiagram ? 'Masquer' : 'Diagramme'}
        </button>
      </div>

      {/* Inputs */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
        {[
          { label: 'Portée L (m)', value: L, set: setL, min: 0.5, step: 0.5, color: 'text-sky-300' },
          { label: 'Charge q (kN/m)', value: q, set: setQ, min: 0, step: 1, color: 'text-orange-300' },
          { label: 'Charge P (kN)', value: P, set: setP, min: 0, step: 5, color: 'text-emerald-300' },
        ].map(inp => (
          <label key={inp.label} className="space-y-1">
            <span className={`text-xs font-medium ${inp.color}`}>{inp.label}</span>
            <input
              type="number" value={inp.value} min={inp.min} step={inp.step}
              onChange={e => inp.set(Number(e.target.value))}
              className="w-full rounded-xl border border-slate-700 bg-slate-800 px-2 py-2 text-slate-100 text-sm"
            />
          </label>
        ))}
      </div>

      {/* Results */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
        {[
          { label: 'M_max', value: M_max.toFixed(2) + ' kN·m', sub: 'Moment max (mi-travée)', color: 'border-violet-500/40 bg-violet-500/8' },
          { label: 'V_max', value: V_max.toFixed(2) + ' kN', sub: 'Effort tranchant max', color: 'border-rose-500/40 bg-rose-500/8' },
          { label: 'R_A = R_B', value: RA.toFixed(2) + ' kN', sub: 'Réactions d\'appui', color: 'border-sky-500/40 bg-sky-500/8' },
          { label: 'Charge totale', value: (q_ * L_ + P_).toFixed(2) + ' kN', sub: 'Charge totale sur la poutre', color: 'border-amber-500/40 bg-amber-500/8' },
        ].map(r => (
          <div key={r.label} className={`rounded-xl border p-3 ${r.color}`}>
            <p className="text-xs text-slate-400">{r.label}</p>
            <p className="text-sm font-bold text-white font-mono mt-0.5">{r.value}</p>
            <p className="text-xs text-slate-600 mt-0.5">{r.sub}</p>
          </div>
        ))}
      </div>

      {/* Bending moment formula */}
      <div className="formula-card text-xs w-full max-w-full overflow-x-auto">
        <div className="overflow-x-auto max-w-full py-1 math-scroll">
          <SafeBlockMath math={`M_{max} = \\frac{q L^2}{8} + \\frac{PL}{4} = \\frac{${q_}\\times${L_}^2}{8} + \\frac{${P_}\\times${L_}}{4} = ${M_max.toFixed(2)}\\text{ kN·m}`} />
        </div>
      </div>

      {/* Diagram */}
      {showDiagram && (
        <div className="w-full max-w-full overflow-hidden">
          <p className="text-xs text-slate-500 mb-2 uppercase tracking-wider">Diagramme des Moments Fléchissants (M)</p>
          <div className="w-full max-w-full overflow-hidden rounded-xl bg-slate-950/50">
            <svg viewBox={`0 0 ${svgW} ${svgH}`} className="w-full h-auto max-w-full beam-canvas block">
              {/* Baseline */}
              <line x1={padX} y1={padY + plotH / 2} x2={padX + plotW} y2={padY + plotH / 2}
                stroke="rgba(148,163,184,0.4)" strokeWidth="1.5" />
              {/* Moment fill */}
              <path d={fillM} fill="rgba(139,92,246,0.15)" />
              {/* Moment curve */}
              <path d={pathM} fill="none" stroke="#8b5cf6" strokeWidth="2.5" strokeLinejoin="round" />
              {/* Supports */}
              <polygon points={`${padX},${padY + plotH / 2} ${padX - 8},${padY + plotH / 2 + 14} ${padX + 8},${padY + plotH / 2 + 14}`}
                fill="rgba(56,189,248,0.4)" stroke="#38bdf8" strokeWidth="1" />
              <polygon points={`${padX + plotW},${padY + plotH / 2} ${padX + plotW - 8},${padY + plotH / 2 + 14} ${padX + plotW + 8},${padY + plotH / 2 + 14}`}
                fill="rgba(56,189,248,0.4)" stroke="#38bdf8" strokeWidth="1" />
              {/* Labels */}
              <text x={padX} y={padY + plotH / 2 + 28} fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="Inter">A</text>
              <text x={padX + plotW} y={padY + plotH / 2 + 28} fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="Inter">B</text>
              <text x={padX + plotW / 2} y={padY + 12} fill="#a78bfa" fontSize="11" textAnchor="middle" fontFamily="JetBrains Mono" fontWeight="bold">
                {M_max.toFixed(1)} kN·m
              </text>
            </svg>
          </div>
        </div>
      )}
    </div>
  );
}
