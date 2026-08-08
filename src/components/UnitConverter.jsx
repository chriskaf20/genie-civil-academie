import { useState } from 'react';

// Unit converter for Civil Engineering
const CONVERSIONS = {
  Longueur: {
    units: ['m', 'cm', 'mm', 'km', 'ft', 'in', 'yd', 'mi'],
    toBase: { m: 1, cm: 0.01, mm: 0.001, km: 1000, ft: 0.3048, in: 0.0254, yd: 0.9144, mi: 1609.344 },
  },
  Pression: {
    units: ['MPa', 'kPa', 'Pa', 'bar', 'psi', 'kN/m²', 'kgf/cm²'],
    toBase: { MPa: 1e6, kPa: 1e3, Pa: 1, bar: 1e5, psi: 6894.76, 'kN/m²': 1e3, 'kgf/cm²': 98066.5 },
  },
  Force: {
    units: ['kN', 'N', 'MN', 'kgf', 'tf', 'lbf'],
    toBase: { kN: 1e3, N: 1, MN: 1e6, kgf: 9.80665, tf: 9806.65, lbf: 4.44822 },
  },
  Masse: {
    units: ['kg', 't', 'g', 'lb', 'ton (US)'],
    toBase: { kg: 1, t: 1000, g: 0.001, lb: 0.453592, 'ton (US)': 907.185 },
  },
  Surface: {
    units: ['m²', 'cm²', 'mm²', 'ft²', 'in²', 'ha', 'acre'],
    toBase: { 'm²': 1, 'cm²': 1e-4, 'mm²': 1e-6, 'ft²': 0.092903, 'in²': 6.4516e-4, ha: 10000, acre: 4046.86 },
  },
  Angle: {
    units: ['°', 'rad', 'gon', '%'],
    toBase: {
      '°': Math.PI / 180,
      rad: 1,
      gon: Math.PI / 200,
      '%': (v) => Math.atan(v / 100), // special case
    },
  },
};

export default function UnitConverter() {
  const [category, setCategory] = useState('Pression');
  const [fromUnit, setFromUnit] = useState('MPa');
  const [toUnit, setToUnit] = useState('psi');
  const [value, setValue] = useState('1');

  const cats = Object.keys(CONVERSIONS);
  const conv = CONVERSIONS[category];
  const units = conv.units;

  const convert = () => {
    const v = parseFloat(value);
    if (isNaN(v)) return '—';
    if (category === 'Angle') {
      // Convert to radians first, then to target
      let radians;
      if (fromUnit === '%') radians = Math.atan(v / 100);
      else radians = v * conv.toBase[fromUnit];
      let result;
      if (toUnit === '%') result = Math.tan(radians) * 100;
      else result = radians / conv.toBase[toUnit];
      return result.toFixed(6);
    }
    const inBase = v * conv.toBase[fromUnit];
    const result = inBase / conv.toBase[toUnit];
    return result.toFixed(6);
  };

  const result = convert();

  return (
    <div className="rounded-2xl border border-slate-700/50 bg-slate-900/80 p-5">
      <div className="flex items-center gap-3 mb-4">
        <span className="text-xl">⚖️</span>
        <div>
          <p className="text-xs uppercase tracking-widest text-orange-400 font-semibold">Convertisseur d'Unités</p>
          <p className="text-xs text-slate-500 mt-0.5">Spécialisé Génie Civil</p>
        </div>
      </div>

      {/* Category selector */}
      <div className="flex gap-2 flex-wrap mb-4">
        {cats.map(cat => (
          <button
            key={cat}
            onClick={() => {
              setCategory(cat);
              const newUnits = CONVERSIONS[cat].units;
              setFromUnit(newUnits[0]);
              setToUnit(newUnits[1] || newUnits[0]);
              setValue('1');
            }}
            className={`px-3 py-1 rounded-full text-xs font-semibold transition-all ${
              category === cat
                ? 'bg-orange-600 text-white'
                : 'bg-slate-800 text-slate-400 hover:bg-slate-700'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Conversion inputs */}
      <div className="space-y-3">
        <div className="flex gap-2">
          <input
            type="number"
            value={value}
            onChange={e => setValue(e.target.value)}
            className="flex-1 rounded-xl border border-slate-700 bg-slate-800 px-3 py-2.5 text-white text-sm"
            placeholder="Valeur..."
          />
          <select
            value={fromUnit}
            onChange={e => setFromUnit(e.target.value)}
            className="rounded-xl border border-slate-700 bg-slate-800 px-3 py-2.5 text-sky-300 text-sm font-mono"
          >
            {units.map(u => <option key={u}>{u}</option>)}
          </select>
        </div>

        <div className="flex items-center justify-center">
          <button
            onClick={() => {
              const tmp = fromUnit;
              setFromUnit(toUnit);
              setToUnit(tmp);
            }}
            className="text-slate-400 hover:text-sky-400 transition-colors bg-slate-800 rounded-full p-2"
            title="Inverser"
          >
            ⇅
          </button>
        </div>

        <div className="flex gap-2">
          <div className="flex-1 rounded-xl border border-orange-500/30 bg-orange-500/5 px-3 py-2.5 text-orange-300 text-sm font-mono font-bold">
            {result}
          </div>
          <select
            value={toUnit}
            onChange={e => setToUnit(e.target.value)}
            className="rounded-xl border border-slate-700 bg-slate-800 px-3 py-2.5 text-orange-300 text-sm font-mono"
          >
            {units.map(u => <option key={u}>{u}</option>)}
          </select>
        </div>
      </div>

      {/* Quick reference */}
      <div className="mt-4 pt-3 border-t border-slate-700/50">
        <p className="text-xs text-slate-500 mb-2">Conversions fréquentes :</p>
        <div className="space-y-1 text-xs text-slate-400">
          {category === 'Pression' && (
            <>
              <p>• 1 MPa = 145,04 psi = 10,197 kgf/cm²</p>
              <p>• 1 bar = 100 kPa = 14,504 psi</p>
            </>
          )}
          {category === 'Longueur' && (
            <>
              <p>• 1 m = 3,281 ft = 39,37 in = 100 cm</p>
              <p>• 1 ft = 30,48 cm = 12 in</p>
            </>
          )}
          {category === 'Angle' && (
            <>
              <p>• 45° = 0,7854 rad = 50 gon = 100%</p>
              <p>• 1 rad ≈ 57,296° = 63,66 gon</p>
            </>
          )}
          {category === 'Force' && (
            <>
              <p>• 1 kN = 101,97 kgf ≈ 224,8 lbf</p>
              <p>• 1 MN = 1000 kN = 101,97 tf</p>
            </>
          )}
          {category === 'Surface' && (
            <>
              <p>• 1 m² = 10,764 ft² = 10 000 cm²</p>
              <p>• 1 ha = 10 000 m² = 2,471 acres</p>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
