import { useState } from 'react';
import { evaluate, formatResult } from '../utils/calculator.js';

const KEYS = [
  ['7', '8', '9', '÷', 'sin'],
  ['4', '5', '6', '×', 'cos'],
  ['1', '2', '3', '-', 'tan'],
  ['0', '.', '±', '+', '√'],
  ['(', ')', '^', 'π', 'e'],
  ['C', '⌫', 'DEG', '=', ''],
];

export default function SciCalc({ onClose }) {
  const [display, setDisplay] = useState('0');
  const [expr, setExpr] = useState('');
  const [mode, setMode] = useState('DEG'); // DEG | RAD

  const update = next => {
    setExpr(next);
    setDisplay(next || '0');
  };

  const handleKey = (key) => {
    if (key === 'C') { update(''); return; }
    if (key === '⌫') { update(expr.slice(0, -1)); return; }
    if (key === 'DEG') { setMode(m => (m === 'DEG' ? 'RAD' : 'DEG')); return; }
    if (key === '±') { update(expr.startsWith('-') ? expr.slice(1) : `-${expr}`); return; }
    if (key === '=') {
      try {
        const result = formatResult(evaluate(expr, mode));
        setExpr(result);
        setDisplay(result);
      } catch (error) {
        setDisplay(error.message || 'Erreur');
      }
      return;
    }
    const append = ['sin', 'cos', 'tan', '√'].includes(key) ? `${key}(` : key;
    update(expr + append);
  };

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50" onClick={onClose}>
      <div
        className="glass rounded-2xl p-5 w-80 shadow-2xl border border-slate-600/50"
        onClick={e => e.stopPropagation()}
      >
        <div className="flex items-center justify-between mb-4">
          <div>
            <p className="text-xs uppercase tracking-widest text-sky-400 font-semibold">Calculatrice Scientifique</p>
            <p className="text-xs text-slate-500 mt-0.5">Mode : <span className="text-orange-400 font-mono font-bold">{mode}</span></p>
          </div>
          <button onClick={onClose} className="text-slate-400 hover:text-white w-8 h-8 flex items-center justify-center rounded-lg hover:bg-slate-700 transition-colors">✕</button>
        </div>

        {/* Display */}
        <div className="bg-slate-950 rounded-xl p-4 mb-4 min-h-16 flex flex-col items-end justify-end">
          <p className="text-slate-500 text-xs font-mono h-4">{expr || ' '}</p>
          <p className="text-2xl font-bold text-white font-mono mt-1 break-all text-right">{display}</p>
        </div>

        {/* Keys */}
        <div className="grid gap-2">
          {KEYS.map((row, ri) => (
            <div key={ri} className="grid grid-cols-5 gap-2">
              {row.map((key, ci) => {
                if (!key) return <div key={ci} />;
                const isOp = ['÷', '×', '-', '+'].includes(key);
                const isFn = ['sin', 'cos', 'tan', '√', '^', 'π', 'e', '(', ')'].includes(key);
                const isEq = key === '=';
                const isDel = key === 'C' || key === '⌫';
                const isDeg = key === 'DEG';
                return (
                  <button
                    key={ci}
                    onClick={() => handleKey(key)}
                    className={`h-10 rounded-xl text-sm font-bold transition-all active:scale-95 ${
                      isEq ? 'bg-gradient-to-br from-blue-600 to-sky-500 text-white col-span-1' :
                      isOp ? 'bg-orange-600/20 border border-orange-500/30 text-orange-300 hover:bg-orange-600/30' :
                      isFn ? 'bg-violet-600/20 border border-violet-500/30 text-violet-300 hover:bg-violet-600/30' :
                      isDel ? 'bg-rose-600/20 border border-rose-500/30 text-rose-300 hover:bg-rose-600/30' :
                      isDeg ? `${mode === 'DEG' ? 'bg-emerald-600/30 text-emerald-300' : 'bg-slate-700 text-slate-300'} border border-emerald-500/30 hover:bg-emerald-600/30` :
                      'bg-slate-800 text-slate-200 hover:bg-slate-700 border border-slate-700/50'
                    }`}
                  >
                    {key}
                  </button>
                );
              })}
            </div>
          ))}
        </div>

        <p className="text-xs text-slate-600 text-center mt-3">Cliquez en dehors pour fermer</p>
      </div>
    </div>
  );
}
