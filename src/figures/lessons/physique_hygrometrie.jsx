// Plates — Module 42 · Hygrométrie et condensation
import { Arrow, Dim, Dot, Line, Path, Plot, Poly, Rect, Text, fnPts } from '../../components/figures/kit.jsx';

const psat = T => 610.5 * Math.exp((17.27 * T) / (T + 237.3));

// Timber-frame wall of the worked example, inside → outside (x in px, 1.5 px per mm).
const X0 = 110;
const WALL = [
  { name: 'BA13', mm: 13, R: 0.05, sd: 0.1, fill: 'pat:hatch', bg: '~grey', c: 'grey' },
  { name: 'laine 145 mm', mm: 145, R: 4.14, sd: 0.15, fill: 'pat:insul', bg: '~orange', c: 'orange' },
  { name: 'OSB', mm: 12, R: 0.09, sd: 2.4, fill: 'pat:wood', bg: '~soil', c: 'soil' },
];
const RSI = 0.13;
const RSE = 0.04;
const RT = RSI + RSE + WALL.reduce((s, l) => s + l.R, 0);
const Q = 20 / RT;

/** Interfaces: x position, temperature, cumulated s_d (with or without the 18 m vapour barrier after BA13). */
function interfaces(barrier) {
  let x = X0;
  let T = 20 - Q * RSI;
  let sd = 0;
  const pts = [{ x, T, sd }];
  WALL.forEach((l, i) => {
    x += l.mm * 1.5;
    T -= Q * l.R;
    sd += l.sd + (barrier && i === 0 ? 18 : 0);
    pts.push({ x, T, sd });
  });
  return pts;
}

export default [
  {
    id: 'point-de-rosee',
    title: 'Pression de saturation et point de rosée',
    steps: ['theory'],
    formula: ['\\varphi = \\frac{p_v}{p_{sat}(T)}'],
    h: 300,
    draw: () => (
      <Plot x={60} y={30} w={380} h={210} xr={[0, 30]} yr={[0, 4400]} xl="T (°C)" yl="p (Pa)"
        xt={[0, 9.3, 20, 30].map(v => [v, String(v).replace('.', ',')])} yt={[1000, 1169, 2000, 2337, 3000, 4000].map(v => [v, String(v)])} grid
      >
        {(sx, sy) => (
          <g>
            <Poly pts={fnPts(psat, 0, 30, sx, sy, 60)} c="ink" w={2.8} />
            <Text x={sx(25)} y={sy(psat(25)) - 10} a="middle" s={13} c="ink">saturation (100 %)</Text>
            <Poly pts={fnPts(T => 0.5 * psat(T), 0, 30, sx, sy, 60)} c="water" w={1.8} dash="6 4" />
            <Text x={sx(27)} y={sy(0.5 * psat(27)) + 18} a="middle" s={12} c="water">50 %</Text>
            <Dot x={sx(20)} y={sy(1169)} r={6} c="red" ring />
            <Arrow x1={sx(20) - 8} y1={sy(1169)} x2={sx(9.5)} y2={sy(1169)} c="red" w={2.2} />
            <Dot x={sx(9.3)} y={sy(1169)} r={5} c="red" />
            <Text x={sx(20) + 10} y={sy(1169) + 18} s={13} c="red">air 20 °C – 50 %</Text>
            <Text x={sx(9.3) - 6} y={sy(1169) - 12} a="end" s={13} c="red">rosée 9,3 °C</Text>
          </g>
        )}
      </Plot>
    ),
    notes: ['On refroidit l’air sans changer sa quantité de vapeur : il atteint la saturation à 9,3 °C.'],
    caption: 'La pression de vapeur saturante croît très vite avec la température.',
  },
  {
    id: 'paroi-ossature-bois',
    title: 'Paroi ossature bois : du plus fermé au plus ouvert',
    steps: ['formulas'],
    formula: ['s_d = \\mu\\, e', 's_{d,int} \\geq 5\\, s_{d,ext}'],
    h: 300,
    draw: () => {
      const layers = [
        [70, 14, 'pat:hatch', '~grey', 'grey', 'BA13'],
        [84, 6, 'none', 'red', 'red', 'pare-vapeur s_d ≥ 18 m'],
        [90, 140, 'pat:insul', '~orange', 'orange', 'isolant'],
        [230, 14, 'pat:wood', '~soil', 'soil', 'OSB'],
        [244, 4, 'none', 'water', 'water', 'pare-pluie ouvert'],
        [248, 26, 'none', 'paper', 'grey', 'lame d’air ventilée'],
        [274, 14, 'pat:wood', '~soil', 'soil', 'bardage'],
      ];
      return (
        <g>
          {layers.map(([x, w, fill, bg, c, lab], i) => (
            <g key={lab}>
              <Rect x={x} y={50} w={w} h={190} c={c} sw={1.4} fill={fill} bg={bg} />
              <Line x1={x + w / 2} y1={240} x2={x + w / 2} y2={252 + (i % 2) * 18} c={c} w={1} />
              <Text x={x + w / 2} y={266 + (i % 2) * 18} a="middle" s={11} c={c}>{lab}</Text>
            </g>
          ))}
          {[90, 140, 190].map(y => <Arrow key={y} x1={20} y1={y} x2={64} y2={y} c="water" w={2} />)}
          <Text x={20} y={40} s={13} c="water">vapeur (intérieur 20 °C)</Text>
          <Text x={330} y={110} s={13}>{'côté chaud : fermé\n→ côté froid : ouvert'}</Text>
          <Arrow x1={330} y1={150} x2={460} y2={150} c="ink" w={2} />
          <Text x={330} y={180} s={12} c="mute">l’humidité qui entre doit pouvoir sortir</Text>
        </g>
      );
    },
    caption: 'Ordre des couches : pare-vapeur à l’intérieur, pare-pluie perméable et lame d’air à l’extérieur.',
  },
  {
    id: 'diagramme-glaser',
    title: 'Diagramme de Glaser du mur ossature bois',
    steps: ['stepbystep'],
    formula: ['p_v = p_{v,int} - (p_{v,int} - p_{v,ext}) \\frac{s_{d,x}}{s_{d,tot}}'],
    h: 330,
    draw: () => {
      const a = interfaces(false);
      const b = interfaces(true);
      const xEnd = a[a.length - 1].x;
      const Y = p => 270 - ((p - 400) / 1800) * 220;
      const pvLine = (pts, tot) => pts.map(p => [p.x, Y(1169 - 680 * (p.sd / tot))]);
      const psatPts = [];
      WALL.reduce((acc, l, i) => {
        const p0 = a[i];
        const p1 = a[i + 1];
        for (let k = 0; k <= 10; k++) {
          const t = k / 10;
          psatPts.push([p0.x + (p1.x - p0.x) * t, Y(psat(p0.T + (p1.T - p0.T) * t))]);
        }
        return acc;
      }, 0);
      return (
        <g>
          {WALL.map((l, i) => <Rect key={l.name} x={a[i].x} y={40} w={a[i + 1].x - a[i].x} h={230} c={l.c} sw={1} fill={l.fill} bg={l.bg} o={0.55} />)}
          <Line x1={X0 - 30} y1={270} x2={xEnd + 40} y2={270} c="txt" w={1.4} />
          {[600, 1000, 1400, 1800, 2200].map(p => <Text key={p} x={X0 - 34} y={Y(p) + 4} a="end" s={11} c="mute">{String(p)}</Text>)}
          <Text x={X0 - 34} y={30} a="end" s={12} c="mute">Pa</Text>
          <Poly pts={psatPts} c="ink" w={2.6} />
          <Text x={X0 + 40} y={Y(psat(18)) - 8} s={12} c="ink">{'p_{sat} (selon T)'}</Text>
          <Poly pts={pvLine(a, 2.65)} c="red" w={2.6} />
          <Poly pts={pvLine(b, 20.65)} c="green" w={2.6} dash="8 5" />
          <Dot x={a[2].x} y={Y(1105)} r={6} c="red" ring />
          <Text x={a[2].x - 12} y={Y(1105) - 34} a="end" s={12} c="red">{'sans pare-vapeur :\n1 105 Pa > 640 Pa → condensation'}</Text>
          <Dot x={a[2].x} y={Y(568)} r={5} c="green" />
          <Text x={a[2].x + 10} y={Y(568) + 22} s={12} c="green">avec pare-vapeur : 568 Pa ✔</Text>
          <Text x={X0} y={292} a="middle" s={12}>intérieur</Text>
          <Text x={xEnd} y={292} a="middle" s={12}>OSB</Text>
          <Text x={X0 + 120} y={312} a="middle" s={11} c="mute">épaisseur (échelle 1,5 px/mm)</Text>
        </g>
      );
    },
    notes: ['La condensation apparaît là où la pression de vapeur réelle dépasse la pression saturante.'],
    caption: 'Pression saturante (bleu) et pression réelle sans (rouge) et avec pare-vapeur (vert).',
  },
  {
    id: 'about-de-dalle',
    title: 'Pont thermique en about de dalle de balcon',
    steps: ['practical_case'],
    formula: ['f_{Rsi} = \\frac{T_{si} - T_e}{T_i - T_e}'],
    h: 280,
    draw: () => (
      <g>
        {[[20, 'sans rupteur', 10.5, 0.62, 'red'], [260, 'avec rupteur', 16, 0.84, 'green']].map(([x0, lab, T, f, c]) => (
          <g key={lab}>
            <Text x={x0 + 110} y={24} a="middle" s={14} b c={c}>{lab}</Text>
            <Rect x={x0 + 80} y={40} w={30} h={200} c="grey" sw={1.4} fill="pat:concrete" bg="~grey" />
            <Rect x={x0 + 110} y={40} w={24} h={200} c="orange" sw={1.2} fill="pat:insul" bg="~orange" />
            <Rect x={x0} y={130} w={220} h={22} c="grey" sw={1.4} fill="pat:concrete" bg="~grey" />
            {x0 > 100 && <Rect x={x0 + 110} y={130} w={24} h={22} c="orange" sw={1.6} fill="pat:insul" bg="~orange" />}
            <Dot x={x0 + 80} y={140} r={6} c={c} ring />
            <Text x={x0 + 70} y={176} a="end" s={12} c={c}>{`T_{si} = ${String(T).replace('.', ',')} °C`}</Text>
            <Text x={x0 + 70} y={194} a="end" s={12} c={c}>{`f_{Rsi} = ${String(f).replace('.', ',')}`}</Text>
            <Text x={x0 + 40} y={64} a="middle" s={12} c="mute">intérieur</Text>
            <Text x={x0 + 190} y={64} a="middle" s={12} c="mute">balcon</Text>
          </g>
        ))}
        <Text x={250} y={264} a="middle" s={12} c="mute">{'20 °C intérieur, −5 °C extérieur ; seuil usuel f_{Rsi} ≥ 0,70'}</Text>
      </g>
    ),
    caption: 'Le rupteur interrompt la dalle traversante et relève la température de surface intérieure.',
  },
];
