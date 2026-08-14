import { useState } from 'react';
import { SafeBlockMath, SafeInlineMath } from './SafeMath.jsx';

export default function TrigWidget({ angle = 30, setAngle, hypotenuse = 10, setHypotenuse }) {
  const [mode, setMode] = useState('hyp-angle'); // 'hyp-angle' | 'two-sides'
  const [sideA, setSideA] = useState(3);
  const [sideB, setSideB] = useState(4);

  const clamp = (v, min = 0, max = 89) => Math.max(min, Math.min(max, Number(v)));

  // Mode 1: hyp + angle
  const height = (Number(hypotenuse) * Math.sin((angle * Math.PI) / 180));
  const base = (Number(hypotenuse) * Math.cos((angle * Math.PI) / 180));
  const slope = (Math.tan((angle * Math.PI) / 180) * 100);

  // Mode 2: two known sides → Pythagore
  const hyp2 = Math.sqrt(Number(sideA) ** 2 + Number(sideB) ** 2);
  const angle2 = (Math.atan2(Number(sideA), Number(sideB)) * 180) / Math.PI;

  return (
    <div className="space-y-3 w-full max-w-full overflow-hidden">
      {/* Mode tabs */}
      <div className="flex gap-2 p-1 bg-slate-900/80 rounded-xl">
        {[
          { key: 'hyp-angle', label: 'Angle + Hyp.' },
          { key: 'two-sides', label: 'Deux côtés' },
        ].map(tab => (
          <button
            key={tab.key}
            onClick={() => setMode(tab.key)}
            className={`flex-1 py-2 px-3 rounded-lg text-xs font-semibold transition-all ${
              mode === tab.key
                ? 'bg-gradient-to-r from-blue-600 to-sky-500 text-white shadow-lg'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {mode === 'hyp-angle' ? (
        <div className="space-y-3 w-full max-w-full">
          {/* Inputs */}
          <div className="grid grid-cols-2 gap-3">
            <label className="space-y-1">
              <span className="text-xs text-slate-400 font-medium">Hypoténuse (m)</span>
              <input
                type="number" value={hypotenuse} min="0.1" step="0.5"
                onChange={e => setHypotenuse && setHypotenuse(Math.max(0.1, Number(e.target.value)))}
                className="w-full rounded-xl border border-slate-700 bg-slate-900 px-3 py-2 text-slate-100 text-sm"
              />
            </label>
            <label className="space-y-1">
              <span className="text-xs text-slate-400 font-medium">Angle θ (°)</span>
              <input
                type="number" value={angle} min="1" max="89"
                onChange={e => setAngle && setAngle(clamp(e.target.value, 1, 89))}
                className="w-full rounded-xl border border-slate-700 bg-slate-900 px-3 py-2 text-slate-100 text-sm"
              />
            </label>
          </div>

          {/* Slider */}
          <div className="space-y-1">
            <div className="flex justify-between text-xs text-slate-500">
              <span>1°</span><span className="text-sky-400 font-bold">{angle}°</span><span>89°</span>
            </div>
            <input
              type="range" min="1" max="89" value={angle}
              onChange={e => setAngle && setAngle(Number(e.target.value))}
              className="w-full h-2 accent-sky-500 cursor-pointer"
            />
          </div>

          {/* Results */}
          <div className="grid grid-cols-2 gap-2">
            {[
              { label: 'Hauteur (opp)', value: height.toFixed(3) + ' m', formula: 'H\\cdot\\sin\\theta', color: 'border-emerald-500/30 bg-emerald-500/5' },
              { label: 'Base (adj)', value: base.toFixed(3) + ' m', formula: 'H\\cdot\\cos\\theta', color: 'border-orange-500/30 bg-orange-500/5' },
              { label: 'Pente', value: slope.toFixed(2) + ' %', formula: '\\tan\\theta\\times 100', color: 'border-sky-500/30 bg-sky-500/5' },
              { label: 'Angle rad', value: ((angle * Math.PI) / 180).toFixed(4) + ' rad', formula: '\\theta\\cdot\\pi/180', color: 'border-violet-500/30 bg-violet-500/5' },
            ].map(item => (
              <div key={item.label} className={`rounded-xl border p-3 ${item.color}`}>
                <p className="text-xs text-slate-500">{item.label}</p>
                <p className="text-base font-bold text-white mt-1 font-mono">{item.value}</p>
                <div className="text-xs text-slate-600 mt-1 overflow-x-auto">
                  <SafeInlineMath math={item.formula} />
                </div>
              </div>
            ))}
          </div>

          {/* Formula display */}
          <div className="formula-card w-full max-w-full overflow-x-auto">
            <div className="overflow-x-auto max-w-full py-1 math-scroll">
              <SafeBlockMath math={`H=${hypotenuse}\\text{ m},\\;\\theta=${angle}^\\circ\\;\\Rightarrow\\;h=${height.toFixed(2)}\\text{ m}`} />
            </div>
          </div>
        </div>
      ) : (
        <div className="space-y-3 w-full max-w-full">
          <div className="grid grid-cols-2 gap-3">
            <label className="space-y-1">
              <span className="text-xs text-slate-400 font-medium">Côté a (opp, m)</span>
              <input
                type="number" value={sideA} min="0.1" step="0.5"
                onChange={e => setSideA(Math.max(0.1, Number(e.target.value)))}
                className="w-full rounded-xl border border-slate-700 bg-slate-900 px-3 py-2 text-slate-100 text-sm"
              />
            </label>
            <label className="space-y-1">
              <span className="text-xs text-slate-400 font-medium">Côté b (adj, m)</span>
              <input
                type="number" value={sideB} min="0.1" step="0.5"
                onChange={e => setSideB(Math.max(0.1, Number(e.target.value)))}
                className="w-full rounded-xl border border-slate-700 bg-slate-900 px-3 py-2 text-slate-100 text-sm"
              />
            </label>
          </div>

          <div className="grid grid-cols-2 gap-2">
            {[
              { label: 'Hypoténuse', value: hyp2.toFixed(3) + ' m', color: 'border-sky-500/30 bg-sky-500/5' },
              { label: 'Angle θ', value: angle2.toFixed(2) + '°', color: 'border-violet-500/30 bg-violet-500/5' },
              { label: 'Pente', value: (Math.tan(angle2 * Math.PI / 180) * 100).toFixed(2) + ' %', color: 'border-orange-500/30 bg-orange-500/5' },
              { label: 'Angle complémentaire', value: (90 - angle2).toFixed(2) + '°', color: 'border-emerald-500/30 bg-emerald-500/5' },
            ].map(item => (
              <div key={item.label} className={`rounded-xl border p-3 ${item.color}`}>
                <p className="text-xs text-slate-500">{item.label}</p>
                <p className="text-base font-bold text-white mt-1 font-mono">{item.value}</p>
              </div>
            ))}
          </div>

          <div className="formula-card w-full max-w-full overflow-x-auto">
            <div className="overflow-x-auto max-w-full py-1 math-scroll">
              <SafeBlockMath math={`H = \\sqrt{${Number(sideA).toFixed(1)}^2 + ${Number(sideB).toFixed(1)}^2} = ${hyp2.toFixed(3)}\\text{ m}`} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
