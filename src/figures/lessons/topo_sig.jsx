// Plates — Module 5 · SIG & projections
import { Arrow, Dot, Flow, Line, Path, Poly, Rect, Text, flowHeight } from '../../components/figures/kit.jsx';

// Radial geometry around the Earth's centre O (off the plate, below).
const O = [250, 900];
const onArc = (r, deg) => [O[0] + r * Math.sin((deg * Math.PI) / 180), O[1] - r * Math.cos((deg * Math.PI) / 180)];
const arc = (r, d1, d2) => {
  const [x1, y1] = onArc(r, d1);
  const [x2, y2] = onArc(r, d2);
  return `M ${x1.toFixed(1)} ${y1.toFixed(1)} A ${r} ${r} 0 0 1 ${x2.toFixed(1)} ${y2.toFixed(1)}`;
};

const BASE = [
  'Distance mesurée : D_h = 1 000,000 m, à H = 300 m d’altitude',
  'Réduction à l’ellipsoïde : × 6 380 000 / 6 380 300 → D_0 = 999,953 m (−4,7 cm)',
  'Facteur d’échelle local : k = 1 + 0,8 / 1 000 = 1,0008',
  'Distance Lambert : D_p = 999,953 × 1,0008 = 1 000,753 m',
];

// Flood raster (10 × 8 cells of 5 m) crossed with four cadastral parcels.
const COLS = 10;
const ROWS = 8;
const CELL = 24;
const GX = 20;
const GY = 40;
const depth = (i, j) => 1.4 - (0.45 * Math.abs(10 * (j + 0.5 - 6.5) + 3 * (i + 0.5))) / Math.hypot(10, 3);
const PARCELS = [
  { n: 'P1', i0: 0, i1: 5, j0: 0, j1: 2 },
  { n: 'P2', i0: 6, i1: 9, j0: 0, j1: 4 },
  { n: 'P3', i0: 0, i1: 5, j0: 3, j1: 7 },
  { n: 'P4', i0: 6, i1: 9, j0: 5, j1: 7 },
];
const CELLS = Array.from({ length: COLS * ROWS }, (_, k) => ({ i: k % COLS, j: Math.floor(k / COLS), h: depth(k % COLS, Math.floor(k / COLS)) }));
const touched = p => CELLS.filter(c => c.h > 0.5 && c.i >= p.i0 && c.i <= p.i1 && c.j >= p.j0 && c.j <= p.j1).length * 25;
const fmt = v => v.toLocaleString('fr-FR').replace(/ | /g, ' ');

export default [
  {
    id: 'reduction-distances',
    title: 'Du terrain au plan : deux réductions',
    steps: ['theory'],
    formula: ['D_0 = D_h \\cdot \\frac{R}{R + H}', 'D_p = k \\cdot D_0'],
    h: 235,
    draw: () => {
      const [t1, t2] = [onArc(800, -8), onArc(800, 8)];
      const yP = 232;
      const [b1, b2] = [onArc((O[1] - yP) / Math.cos((8 * Math.PI) / 180), -8), onArc((O[1] - yP) / Math.cos((8 * Math.PI) / 180), 8)];
      const px = d => O[0] + (O[1] - yP) * Math.tan((d * Math.PI) / 180);
      return (
        <g transform="translate(0 -55)">
          <Path d={arc(800, -15, 15)} c="soil" w={2.6} />
          <Path d={arc(740, -15, 15)} c="ink" w={2.2} />
          <Line x1={t1[0]} y1={t1[1]} x2={b1[0]} y2={b1[1]} c="grey" w={1.2} dash="5 4" />
          <Line x1={t2[0]} y1={t2[1]} x2={b2[0]} y2={b2[1]} c="grey" w={1.2} dash="5 4" />
          <Path d={arc(800, -8, 8)} c="red" w={4.5} />
          <Path d={arc(740, -8, 8)} c="green" w={4.5} />
          <Line x1={60} y1={yP} x2={440} y2={yP} c="violet" w={1.8} />
          <Line x1={px(-8)} y1={yP} x2={px(8)} y2={yP} c="violet" w={4.5} />
          <Text x={250} y={86} a="middle" s={15} c="red" b>{'D_h mesurée'}</Text>
          <Text x={250} y={190} a="middle" s={15} c="green" b>{'D_0 sur l’ellipsoïde'}</Text>
          <Text x={250} y={254} a="middle" s={14} c="violet" b>{'D_p = k · D_0 sur le plan Lambert 93'}</Text>
          <Arrow x1={250} y1={102} x2={250} y2={158} c="txt" w={1.4} hs={6} both />
          <Text x={256} y={136} s={15} b>H</Text>
          <Text x={30} y={100} s={12} c="soil">terrain (altitude H)</Text>
          <Text x={64} y={160} s={13}>ellipsoïde</Text>
          <Text x={250} y={280} a="middle" s={12} c="mute">rayons vers le centre de la Terre (R ≈ 6 380 km)</Text>
        </g>
      );
    },
    notes: [
      'Ramener la distance à l’ellipsoïde la raccourcit : −4,7 cm par km à 300 m d’altitude.',
      'Le facteur d’échelle $k$ du Lambert 93 l’allonge ou la raccourcit selon la latitude (−1 à +3 m/km).',
    ],
    caption: 'Une distance mesurée n’est pas la distance du plan : correction d’altitude, puis facteur d’échelle.',
  },
  {
    id: 'base-1000m',
    title: 'Réduction d’une base de 1 000 m',
    steps: ['stepbystep'],
    formula: ['D_p = 1\\,000 \\times \\frac{6\\,380\\,000}{6\\,380\\,300} \\times 1{,}0008 = 1\\,000{,}753\\ \\text{m}'],
    h: flowHeight(BASE, { cols: 2 }),
    draw: () => <Flow items={BASE} cols={2} />,
    notes: ['Écart de +75 cm par km entre terrain et plan : on implante à partir des coordonnées Lambert en tenant compte de ces corrections.'],
    caption: 'Chaîne de calcul : mesure, réduction à l’ellipsoïde, projection.',
  },
  {
    id: 'surface-gauss',
    title: 'Surface d’une parcelle (formule de Gauss)',
    steps: ['formulas', 'simple_examples'],
    formula: ['A = \\frac{1}{2}\\left|\\sum (X_i Y_{i+1} - X_{i+1} Y_i)\\right|'],
    h: 285,
    draw: () => {
      const x = X => 110 + 5 * X;
      const y = Y => 250 - 5 * Y;
      const V = [[0, 0], [50, 0], [60, 40], [10, 30]];
      return (
        <g>
          {[0, 10, 20, 30, 40, 50, 60].map(X => (
            <g key={`x${X}`}>
              <Line x1={x(X)} y1={y(0)} x2={x(X)} y2={y(40)} c="grey" w={0.8} o={0.5} />
              <Text x={x(X)} y={268} a="middle" s={12} c="mute">{String(X)}</Text>
            </g>
          ))}
          {[0, 10, 20, 30, 40].map(Y => (
            <g key={`y${Y}`}>
              <Line x1={x(0)} y1={y(Y)} x2={x(60)} y2={y(Y)} c="grey" w={0.8} o={0.5} />
              <Text x={100} y={y(Y) + 4} a="end" s={12} c="mute">{String(Y)}</Text>
            </g>
          ))}
          <Text x={440} y={254} s={13} c="mute">X (m)</Text>
          <Text x={110} y={38} a="middle" s={13} c="mute">Y (m)</Text>
          <Poly pts={V.map(([X, Y]) => [x(X), y(Y)])} c="green" w={2.6} fill="~green" close />
          {V.map(([X, Y]) => <Dot key={`${X}-${Y}`} x={x(X)} y={y(Y)} r={4.5} c="green" />)}
          <Text x={118} y={242} s={13} b>1 (0 ; 0)</Text>
          <Text x={352} y={242} a="end" s={13} b>2 (50 ; 0)</Text>
          <Text x={400} y={40} a="end" s={13} b>3 (60 ; 40)</Text>
          <Text x={150} y={84} a="end" s={13} b>4 (10 ; 30)</Text>
          <Text x={262} y={168} a="middle" s={18} c="green" b>A = 1 700 m²</Text>
        </g>
      );
    },
    notes: ['Produits croisés : $0 + 2\\,000 + 1\\,400 + 0 = 3\\,400$, d’où $A = 3\\,400 / 2 = 1\\,700$ m².'],
    caption: 'Le SIG calcule la surface de tout polygone à partir des coordonnées de ses sommets.',
  },
  {
    id: 'zone-inondable',
    title: 'Parcelles touchées par la crue centennale',
    steps: ['practical_case'],
    formula: ['A_{touchée} = n_{cellules} \\times 25\\ \\text{m}^2'],
    h: 270,
    draw: () => {
      const total = PARCELS.reduce((s, p) => s + touched(p), 0);
      return (
        <g>
          <Text x={GX} y={GY - 12} s={12} c="mute">raster des hauteurs d’eau (cellules de 5 m)</Text>
          {CELLS.map(({ i, j, h }) => (h > 0 ? (
            <Rect key={`${i}-${j}`} x={GX + i * CELL} y={GY + j * CELL} w={CELL} h={CELL} c="water" sw={0} fill={h > 0.5 ? 'water' : '~water'} o={h > 0.5 ? 0.55 : 1} />
          ) : null))}
          {Array.from({ length: COLS + 1 }, (_, i) => <Line key={`v${i}`} x1={GX + i * CELL} y1={GY} x2={GX + i * CELL} y2={GY + ROWS * CELL} c="grey" w={0.6} o={0.6} />)}
          {Array.from({ length: ROWS + 1 }, (_, j) => <Line key={`h${j}`} x1={GX} y1={GY + j * CELL} x2={GX + COLS * CELL} y2={GY + j * CELL} c="grey" w={0.6} o={0.6} />)}
          {PARCELS.map(p => (
            <g key={p.n}>
              <Rect x={GX + p.i0 * CELL} y={GY + p.j0 * CELL} w={(p.i1 - p.i0 + 1) * CELL} h={(p.j1 - p.j0 + 1) * CELL} c="ink" sw={2.6} />
              <Text x={GX + ((p.i0 + p.i1 + 1) / 2) * CELL} y={GY + ((p.j0 + p.j1 + 1) / 2) * CELL + 6} a="middle" s={16} b>{p.n}</Text>
            </g>
          ))}
          <Text x={GX} y={GY + ROWS * CELL + 20} s={12} c="mute">parcelles cadastrales (vecteur, trait noir)</Text>
          <Rect x={285} y={44} w={18} h={14} c="water" sw={0} fill="water" o={0.55} />
          <Text x={310} y={56} s={13}>h &gt; 0,50 m : classe 1</Text>
          <Rect x={285} y={68} w={18} h={14} c="water" sw={1} fill="~water" />
          <Text x={310} y={80} s={13}>0 &lt; h ≤ 0,50 m</Text>
          <Rect x={285} y={92} w={18} h={14} c="grey" sw={1} fill="paper" />
          <Text x={310} y={104} s={13}>hors d’eau</Text>
          <Text x={285} y={140} s={14} b>Surface touchée (classe 1) :</Text>
          {PARCELS.map((p, k) => {
            const a = touched(p);
            return <Text key={p.n} x={295} y={164 + k * 21} s={14} c={a ? 'red' : 'mute'}>{`${p.n} : ${fmt(a)} m²`}</Text>;
          })}
          <Text x={285} y={252} s={14} b>{`Total : ${fmt(total)} m²`}</Text>
        </g>
      );
    },
    notes: [
      'Reclassement du raster : $h > 0{,}50$ m → 1, sinon 0 ; vectorisation de la classe 1, puis intersection avec le cadastre.',
      'Chaque cellule de 5 × 5 m compte pour 25 m² ; la table résultat alimente le zonage et l’information des propriétaires.',
    ],
    caption: 'Croisement raster × vecteur : surface inondée sous plus de 50 cm d’eau, parcelle par parcelle.',
  },
];
