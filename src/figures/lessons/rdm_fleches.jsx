// Plates — Module 9 · Flèches & ligne élastique
import { Arrow, BeamScheme, Line, Path, Rect, Text } from '../../components/figures/kit.jsx';
import { Bars } from '../../components/figures/kit.jsx';

const CASES = [
  { x0: 20, y0: 30, left: 'pin', right: 'roller', load: { type: 'udl', h: 26, label: 'q' }, f: 'w = 5qL⁴ / 384EI', cant: false },
  { x0: 260, y0: 30, left: 'pin', right: 'roller', load: { type: 'point', at: 0.5, len: 38, label: 'P' }, f: 'w = PL³ / 48EI', cant: false },
  { x0: 20, y0: 170, left: 'fixed', right: 'free', load: { type: 'udl', h: 26, label: 'q' }, f: 'w = qL⁴ / 8EI', cant: true },
  { x0: 260, y0: 170, left: 'fixed', right: 'free', load: { type: 'point', at: 1, len: 38, label: 'P' }, f: 'w = PL³ / 3EI', cant: true },
];

export default [
  {
    id: 'formulaire-fleches',
    title: 'Formulaire des flèches usuelles',
    steps: ['theory', 'formulas', 'diagrams'],
    formula: ['E I\\,\\frac{d^2 w}{dx^2} = -M(x)'],
    h: 300,
    draw: () => (
      <g>
        {CASES.map(k => {
          const x1 = k.x0 + 30;
          const x2 = k.x0 + 190;
          const y = k.y0 + 52;
          return (
            <g key={k.f}>
              <Rect x={k.x0} y={k.y0 - 14} w={220} h={128} rx={8} c="grey" sw={1} />
              <BeamScheme x1={x1} x2={x2} y={y} left={k.left} right={k.right} loads={[k.load]} names={['', '']} />
              <Path d={k.cant ? `M ${x1} ${y} Q ${x1 + 0.6 * (x2 - x1)} ${y} ${x2} ${y + 30}` : `M ${x1} ${y + 4} Q ${(x1 + x2) / 2} ${y + 56} ${x2} ${y + 4}`} c="red" w={2} dash="6 4" />
              <Text x={k.x0 + 110} y={k.y0 + 106} a="middle" s={14} c="red" b>{k.f}</Text>
            </g>
          );
        })}
      </g>
    ),
    notes: [
      'Superposition : en élasticité linéaire, les flèches de plusieurs cas de charge s’additionnent.',
      'Limites usuelles : L/200 en toiture courante, L/250 à L/300 en plancher, davantage sous cloisons fragiles.',
    ],
    caption: 'Deux appuis ou console, charge répartie ou concentrée : les quatre cas de base du formulaire.',
  },
  {
    id: 'ipe300-6m',
    title: 'Flèche d’un IPE 300 de 6 m',
    steps: ['stepbystep'],
    formula: ['w = \\frac{5 \\times 15 \\times 6\\,000^4}{384 \\times 210\\,000 \\times 8{,}356 \\times 10^7} = 14{,}4\\ \\text{mm}'],
    h: 250,
    draw: () => (
      <g>
        <BeamScheme x1={60} x2={380} y={70} loads={[{ type: 'udl', h: 30, label: 'q = 15 kN/m' }]} span="L = 6 m" spanY={176} />
        <Path d="M 60 74 Q 220 174 380 74" c="red" w={2.2} dash="7 5" />
        <Text x={220} y={146} a="middle" s={13} c="red" b>w = 14,4 mm (déformée amplifiée)</Text>
        <Rect x={60} y={200} w={320} h={14} c="green" sw={1.4} fill="~green" />
        <Rect x={60} y={200} w={230.4} h={14} c="red" sw={0} fill="red" o={0.45} />
        <Text x={175} y={211} a="middle" s={11} b>w = 14,4 mm</Text>
        <Text x={380} y={232} a="end" s={12} c="green">limite L/300 = 20 mm</Text>
      </g>
    ),
    notes: ['Unités cohérentes (N/mm, mm, MPa, mm⁴) : la flèche sort en mm. 14,4 mm ≤ 20 mm, soit L/416 : vérifié.'],
    caption: 'La poutre utilise 72 % de la flèche admissible.',
  },
  {
    id: 'console-hauteur',
    title: 'Console de balcon ; effet de la hauteur',
    steps: ['simple_examples'],
    formula: ['w = \\frac{q L^4}{8EI}', 'I = \\frac{b\\,h^3}{12}'],
    h: 230,
    draw: () => (
      <g>
        <BeamScheme x1={70} x2={230} y={80} left="fixed" right="free" loads={[{ type: 'udl', h: 26, label: 'q = 8 kN/m' }]} names={['', '']} span="1,50 m" spanY={134} />
        <Path d="M 70 80 Q 166 80 230 104" c="red" w={2} dash="6 4" />
        <Text x={236} y={112} s={12} c="red" b>w ≈ 2,5 mm</Text>
        <Text x={150} y={176} a="middle" s={12} c="mute">EI = 2 000 kN·m²</Text>
        <Rect x={330} y={110} w={30} h={40} c="ink" sw={2} fill="~ink" />
        <Rect x={410} y={70} w={30} h={80} c="ink" sw={2} fill="~ink" />
        <Text x={345} y={170} a="middle" s={13} b>h</Text>
        <Text x={425} y={170} a="middle" s={13} b>2h</Text>
        <Arrow x1={366} y1={130} x2={402} y2={130} c="red" w={2} hs={8} />
        <Text x={385} y={200} a="middle" s={13} c="red" b>I × 8 → w ÷ 8</Text>
      </g>
    ),
    notes: ['Console : $w = 8 \\times 1{,}5^4 / (8 \\times 2\\,000) = 0{,}0025$ m = 2,5 mm. La hauteur est le levier le plus efficace contre la flèche.'],
    caption: 'Doubler la hauteur d’une section rectangulaire multiplie son inertie par 8.',
  },
  {
    id: 'solive-bois',
    title: 'Solives en bois C24 : flèche instantanée',
    steps: ['practical_case'],
    formula: ['w = \\frac{5 \\times 1{,}25 \\times 4\\,200^4}{384 \\times 11\\,000 \\times 5{,}0 \\times 10^7} = 9{,}2\\ \\text{mm}'],
    h: 290,
    draw: () => (
      <g>
        <Text x={40} y={12} s={12} c="mute">G + Q = 2,5 kN/m²</Text>
        {[60, 100, 140, 180, 220, 260, 300, 340, 380, 420, 460].map(x => <Arrow key={x} x1={x} y1={18} x2={x} y2={36} c="ink" w={1.4} hs={5} />)}
        <Rect x={145} y={34} w={150} h={4} c="orange" sw={0} fill="orange" />
        <Rect x={40} y={38} w={430} h={10} c="soil" sw={1.4} fill="pat:wood" />
        {[70, 220, 370].map(x => <Rect key={x} x={x - 11} y={48} w={22} h={60} c="soil" sw={1.8} fill="pat:wood" />)}
        <Arrow x1={71} y1={124} x2={219} y2={124} c="txt" w={1.2} hs={5} both />
        <Text x={145} y={140} a="middle" s={12}>0,50 m</Text>
        <Text x={236} y={84} s={12}>solive 75 × 200</Text>
        <Text x={300} y={140} s={12} c="orange">bande reprise : 0,50 m</Text>
        <BeamScheme x1={50} x2={380} y={190} loads={[{ type: 'udl', h: 22, label: 'q = 1,25 kN/m' }]} span="L = 4,20 m" spanY={236} names={['', '']} />
        <Path d="M 50 194 Q 215 236 380 194" c="red" w={2} dash="6 4" />
        <Text x={392} y={206} s={12} c="red" b>{'w = 9,2 mm'}</Text>
        <Text x={215} y={278} a="middle" s={13} c="green" b>9,2 mm ≤ L/300 = 14 mm ✓</Text>
      </g>
    ),
    notes: ['Reste à vérifier la flèche finale avec le fluage ($k_{def}$) et la résistance en flexion.'],
    caption: 'Chaque solive reprend une bande de plancher égale à son entraxe.',
  },
  {
    id: 'superposition-fleches',
    title: 'Superposition : les flèches s’additionnent',
    steps: ['theory'],
    formula: ['w = w_q + w_P = \\frac{5qL^4}{384EI} + \\frac{PL^3}{48EI}'],
    h: 250,
    draw: () => (
      <g>
        {[[20, [{ type: 'udl', h: 22, label: 'q' }], 'w_q'], [180, [{ type: 'point', at: 0.5, len: 34, label: 'P' }], 'w_P'], [340, [{ type: 'udl', h: 22, label: '' }, { type: 'point', at: 0.5, len: 34, label: 'P' }], 'w_q + w_P']].map(([x, loads, t], i) => (
          <g key={x}>
            <BeamScheme x1={x + 10} x2={x + 140} y={90} loads={loads} names={['', '']} />
            <Path d={`M ${x + 10} 94 Q ${x + 75} ${130 + i * 12} ${x + 140} 94`} c="red" w={2} dash="5 3" />
            <Text x={x + 75} y={180} a="middle" s={13} c="red" b>{t}</Text>
            {i < 2 && <Text x={x + 160} y={100} a="middle" s={20} b>{i === 0 ? '+' : '='}</Text>}
          </g>
        ))}
        <Text x={250} y={222} a="middle" s={12} c="mute">valable tant que le matériau reste élastique et les déplacements petits</Text>
      </g>
    ),
    notes: ['On décompose un cas complexe en cas simples du formulaire, puis on additionne les flèches au même point.'],
    caption: 'Charge répartie plus charge concentrée.',
  },
  {
    id: 'limites-fleche',
    title: 'Limites de flèche pour une portée de 6 m',
    steps: ['formulas'],
    formula: ['w \\le \\frac{L}{n}'],
    h: 230,
    draw: () => (
      <Bars x={80} y={30} w={330} h={160} max={32} ticks={[10, 20, 30]} unit="mm" bars={[
        { label: 'L/200', v: 30, c: 'grey' },
        { label: 'L/250', v: 24, c: 'ink' },
        { label: 'L/300', v: 20, c: 'orange' },
        { label: 'L/500', v: 12, c: 'red' },
      ]} />
    ),
    notes: ['Toitures courantes L/200, planchers L/250 à L/300, plancher portant des cloisons fragiles bien plus sévère.'],
    caption: 'Plus l’ouvrage est sensible, plus n est grand.',
  },
  {
    id: 'fleche-ponctuelle',
    title: 'Flèche sous une charge concentrée',
    steps: ['simple_examples'],
    formula: ['w = \\frac{P L^3}{48 EI} = \\frac{20 \\times 4^3}{48 \\times 4\\,000} = 0{,}0067\\ \\text{m} = 6{,}7\\ \\text{mm}'],
    h: 200,
    draw: () => (
      <g>
        <BeamScheme x1={80} x2={420} y={80} loads={[{ type: 'point', at: 0.5, len: 44, label: 'P = 20 kN' }]} names={['', '']} span="L = 4 m" spanY={150} />
        <Path d="M 80 84 Q 250 136 420 84" c="red" w={2.2} dash="6 4" />
        <Text x={250} y={124} a="middle" s={13} c="red" b>6,7 mm (L/600)</Text>
      </g>
    ),
    notes: ['EI = 4 000 kN·m² : en gardant les kN et les mètres, la flèche sort en mètres.'],
    caption: 'Poutre sur deux appuis chargée en son milieu.',
  },
  {
    id: 'toiture-cuvette',
    title: 'Toiture-terrasse souple : l’accumulation d’eau',
    steps: ['real_examples'],
    h: 240,
    draw: () => (
      <g>
        <Path d="M 40 70 Q 250 150 460 70" c="ink" w={4} />
        <Path d="M 120 96 Q 250 150 380 96 Z" c="water" w={0} fill="~water" />
        <Line x1={40} y1={70} x2={40} y2={200} c="ink" w={4} />
        <Line x1={460} y1={70} x2={460} y2={200} c="ink" w={4} />
        {[['flèche', 100, 40], ['l’eau s’accumule', 300, 40], ['charge ↑', 300, 200], ['flèche ↑', 100, 200]].map(([t, x, y]) => <Text key={t} x={x} y={y} a="middle" s={13} b c="red">{t}</Text>)}
        <Arrow x1={150} y1={36} x2={240} y2={36} c="red" w={1.6} hs={7} />
        <Arrow x1={330} y1={50} x2={330} y2={186} c="red" w={1.6} hs={7} />
        <Arrow x1={250} y1={196} x2={160} y2={196} c="red" w={1.6} hs={7} />
        <Arrow x1={80} y1={186} x2={80} y2={50} c="red" w={1.6} hs={7} />
      </g>
    ),
    notes: ['Avec des évacuations bouchées, la boucle s’emballe jusqu’à l’effondrement : on limite la flèche et on prévoit des trop-pleins.'],
    caption: 'Bac acier à faible pente sur pannes trop souples.',
  },
];
