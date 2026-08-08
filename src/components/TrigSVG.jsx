import { useState, useCallback } from 'react';
import { InlineMath } from 'react-katex';

export default function TrigSVG({ angle, setAngle }) {
  const [isDragging, setIsDragging] = useState(false);
  const rad = (angle * Math.PI) / 180;

  // SVG coordinate system: origin at bottom-left of triangle
  const W = 260, H = 240;
  const ox = 30, oy = H - 30; // origin point (angle θ)
  const maxLen = 160;

  const hyp_x = ox + maxLen * Math.cos(rad);
  const hyp_y = oy - maxLen * Math.sin(rad);
  const adj_x = ox + maxLen * Math.cos(rad);
  const adj_y = oy;

  const height = (maxLen * Math.sin(rad)).toFixed(1);
  const base = (maxLen * Math.cos(rad)).toFixed(1);
  const hypotenuse = maxLen.toFixed(1);

  const computeAngle = useCallback((event, svgEl) => {
    const bounds = svgEl.getBoundingClientRect();
    const mx = event.clientX - bounds.left;
    const my = event.clientY - bounds.top;
    // scale from DOM pixels to viewBox coords
    const scaleX = W / bounds.width;
    const scaleY = H / bounds.height;
    const vx = mx * scaleX;
    const vy = my * scaleY;
    const dx = vx - ox;
    const dy = oy - vy; // invert Y axis
    if (dx <= 0) return;
    const a = Math.round((Math.atan2(dy, dx) * 180) / Math.PI);
    return Math.min(89, Math.max(1, a));
  }, [ox, oy]);

  const handlePointerDown = (e) => {
    e.currentTarget.setPointerCapture(e.pointerId);
    setIsDragging(true);
    const a = computeAngle(e, e.currentTarget);
    if (a !== undefined) setAngle(a);
  };
  const handlePointerMove = (e) => {
    if (!isDragging) return;
    const a = computeAngle(e, e.currentTarget);
    if (a !== undefined) setAngle(a);
  };
  const handlePointerUp = () => setIsDragging(false);

  // Arc for angle θ
  const arcR = 28;
  const arcX = ox + arcR * Math.cos(rad / 2);
  const arcY = oy - arcR * Math.sin(rad / 2);

  return (
    <div className="rounded-2xl border border-slate-700/50 bg-slate-900/80 p-4">
      <div className="flex items-center justify-between mb-3">
        <span className="text-xs uppercase tracking-widest text-sky-400 font-semibold">Diagramme Interactif</span>
        <span className="text-xs bg-slate-800 px-3 py-1 rounded-full text-slate-300 font-mono">θ = {angle}°</span>
      </div>

      <svg
        viewBox={`0 0 ${W} ${H}`}
        className="w-full svg-interactive rounded-xl bg-slate-950/60"
        style={{ height: 200 }}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerLeave={handlePointerUp}
      >
        {/* Grid lines */}
        {[0.25, 0.5, 0.75].map(f => (
          <g key={f}>
            <line x1={ox} y1={oy - maxLen * f} x2={adj_x} y2={oy - maxLen * f}
              stroke="rgba(51,65,85,0.4)" strokeWidth="1" strokeDasharray="4,4" />
            <line x1={ox + maxLen * f} y1={oy} x2={ox + maxLen * f} y2={hyp_y}
              stroke="rgba(51,65,85,0.4)" strokeWidth="1" strokeDasharray="4,4" />
          </g>
        ))}

        {/* Right angle marker */}
        <rect x={adj_x - 14} y={adj_y - 14} width={14} height={14}
          fill="none" stroke="rgba(148,163,184,0.5)" strokeWidth="1.5" />

        {/* Adjacent side (orange) */}
        <line x1={ox} y1={oy} x2={adj_x} y2={adj_y}
          stroke="#FF6B00" strokeWidth="3" strokeLinecap="round" />

        {/* Opposite side (green) */}
        <line x1={adj_x} y1={adj_y} x2={hyp_x} y2={hyp_y}
          stroke="#10b981" strokeWidth="3" strokeLinecap="round" />

        {/* Hypotenuse (blue) */}
        <line x1={ox} y1={oy} x2={hyp_x} y2={hyp_y}
          stroke="#38bdf8" strokeWidth="4" strokeLinecap="round" />

        {/* Angle arc */}
        <path
          d={`M ${ox + arcR} ${oy} A ${arcR} ${arcR} 0 0 0 ${ox + arcR * Math.cos(rad)} ${oy - arcR * Math.sin(rad)}`}
          fill="rgba(56,189,248,0.15)" stroke="#38bdf8" strokeWidth="1.5"
        />

        {/* θ label */}
        <text x={arcX + 6} y={arcY + 4} fill="#93c5fd" fontSize="13" fontWeight="700" fontFamily="JetBrains Mono">θ</text>

        {/* Labels */}
        <text x={(ox + adj_x) / 2} y={oy + 18} fill="#fdba74" fontSize="11" textAnchor="middle" fontFamily="Inter">adj = {base}</text>
        <text x={adj_x + 8} y={(adj_y + hyp_y) / 2 + 4} fill="#6ee7b7" fontSize="11" fontFamily="Inter">opp = {height}</text>
        <text x={(ox + hyp_x) / 2 - 16} y={(oy + hyp_y) / 2 - 8} fill="#7dd3fc" fontSize="11" fontFamily="Inter">H = {hypotenuse}</text>

        {/* Drag hint */}
        {!isDragging && (
          <text x={W / 2} y={H - 8} fill="rgba(100,116,139,0.8)" fontSize="10" textAnchor="middle" fontFamily="Inter">
            ← glissez pour ajuster l'angle →
          </text>
        )}
      </svg>

      {/* Live values */}
      <div className="grid grid-cols-3 gap-2 mt-3">
        {[
          { label: 'sin(θ)', value: Math.sin(rad).toFixed(4), color: 'text-sky-300' },
          { label: 'cos(θ)', value: Math.cos(rad).toFixed(4), color: 'text-orange-300' },
          { label: 'tan(θ)', value: Math.tan(rad).toFixed(4), color: 'text-emerald-300' },
        ].map(item => (
          <div key={item.label} className="bg-slate-800/80 rounded-xl p-2 text-center">
            <p className="text-xs text-slate-500 font-mono">{item.label}</p>
            <p className={`text-sm font-bold font-mono mt-1 ${item.color}`}>{item.value}</p>
          </div>
        ))}
      </div>

      <p className="mt-3 text-xs text-slate-500 text-center">
        <InlineMath math="\\sin^2\\theta + \\cos^2\\theta = 1" />
        {' '}— identité fondamentale
      </p>
    </div>
  );
}
