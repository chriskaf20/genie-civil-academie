// Plates — Module 7 · Flambement des poteaux
import { Arrow, Axis, Box, Dim, Force, Ground, Line, Pin, Plot, Poly, Rect, Text, fnPts } from '../../components/figures/ink.jsx';

const BOT = 274;
const TOP = 104;
const LEN = BOT - TOP;

/** Support drawn upside down at the top of a column (apex on the column end). */
function TopPin({ x, y }) {
  return (
    <g>
      <Poly pts={[[x, y], [x - 11, y - 18], [x + 11, y - 18]]} c="ink" w={2} fill="~ink" />
      <Line x1={x - 18} y1={y - 18} x2={x + 18} y2={y - 18} c="mute" w={1.6} />
      {[-12, -4, 4, 12].map(d => <Line key={d} x1={x + d} y1={y - 18} x2={x + d + 6} y2={y - 26} c="mute" w={1.1} />)}
    </g>
  );
}

function Clamp({ x, y, top }) {
  const dir = top ? -1 : 1;
  return (
    <g>
      <Line x1={x - 20} y1={y} x2={x + 20} y2={y} c="ink" w={3} />
      {[-16, -8, 0, 8, 16].map(d => <Line key={d} x1={x + d} y1={y} x2={x + d - 6} y2={y + dir * 8} c="mute" w={1.1} />)}
    </g>
  );
}

/** Deformed shape: v(t) for t = 0 (bottom) → 1 (top), amplitude in px. */
function Mode({ cx, v, amp = 24 }) {
  const pts = Array.from({ length: 41 }, (_, i) => {
    const t = i / 40;
    return [cx + amp * v(t), BOT - LEN * t];
  });
  return (
    <g>
      <Line x1={cx} y1={BOT} x2={cx} y2={TOP} c="grey" w={1.2} dash="5 5" />
      <Poly pts={pts} c="ink" w={3} />
    </g>
  );
}

// Fixed (bottom) – pinned (top) mode: tan(kL) = kL, kL = 4.4934.
const KL = 4.4934;
const fpRaw = t => Math.sin(KL * t) - KL * t + KL * (1 - Math.cos(KL * t));
const fpMax = Math.max(...Array.from({ length: 101 }, (_, i) => fpRaw(i / 100)));

const cases = [
  { cx: 66, name: 'bi-articulé', k: 'K = 1', v: t => Math.sin(Math.PI * t), bottom: 'pin', top: 'pin', lcr: [0, 1] },
  { cx: 190, name: 'encastré-libre', k: 'K = 2', v: t => 1 - Math.cos((Math.PI * t) / 2), bottom: 'clamp', top: 'free', lcr: null },
  { cx: 314, name: 'encastré-articulé', k: 'K ≈ 0,7', v: t => fpRaw(t) / fpMax, bottom: 'clamp', top: 'pin', lcr: [0.3, 1] },
  { cx: 438, name: 'bi-encastré', k: 'K = 0,5', v: t => (1 - Math.cos(2 * Math.PI * t)) / 2, bottom: 'clamp', top: 'clamp', lcr: [0.25, 0.75] },
];

const chi = (lam, alpha) => {
  if (lam <= 0.2) return 1;
  const phi = 0.5 * (1 + alpha * (lam - 0.2) + lam * lam);
  return Math.min(1, 1 / (phi + Math.sqrt(phi * phi - lam * lam)));
};

/** Rolled I/H section (flanges horizontal), centred on (cx, cy). */
function HSection({ cx, cy, b = 120, h = 114, tf = 9, tw = 6 }) {
  const x0 = cx - b / 2;
  const y0 = cy - h / 2;
  const pts = [
    [x0, y0], [x0 + b, y0], [x0 + b, y0 + tf], [cx + tw / 2, y0 + tf], [cx + tw / 2, y0 + h - tf], [x0 + b, y0 + h - tf],
    [x0 + b, y0 + h], [x0, y0 + h], [x0, y0 + h - tf], [cx - tw / 2, y0 + h - tf], [cx - tw / 2, y0 + tf], [x0, y0 + tf],
  ];
  return <Poly pts={pts} c="ink" w={2} fill="~ink" />;
}

export default [
  {
    id: 'longueurs-flambement',
    title: 'Longueur de flambement',
    steps: ['theory'],
    formula: ['L_{cr} = K \\cdot L', 'N_{cr} = \\frac{\\pi^2 E I}{L_{cr}^2}'],
    h: 332,
    draw: () => (
      <g>
        {cases.map(({ cx, name, k, v, bottom, top, lcr }) => (
          <g key={name}>
            <Text x={cx} y={20} a="middle" s={13.5} b c="ink">{name}</Text>
            <Force x={cx} y={top === 'pin' ? TOP - 27 : TOP - 2} len={30} c="red" label="N" s={15} />
            <Mode cx={cx} v={v} />
            {bottom === 'pin' ? <Pin x={cx} y={BOT} s={16} /> : <Clamp x={cx} y={BOT} />}
            {top === 'pin' && <TopPin x={cx} y={TOP} />}
            {top === 'clamp' && <Clamp x={cx} y={TOP} top />}
            {lcr && (
              <Dim x1={cx - 30} y1={BOT - LEN * lcr[0]} x2={cx - 30} y2={BOT - LEN * lcr[1]} label="L_{cr}" s={13} side={-1} />
            )}
            {!lcr && <Text x={cx - 34} y={(TOP + BOT) / 2} a="end" s={13} c="txt">{'L_{cr}\n= 2L'}</Text>}
            <Text x={cx} y={318} a="middle" s={18} b c="red">{k}</Text>
          </g>
        ))}
        <Dim x1={10} y1={BOT} x2={10} y2={TOP} label="L" s={14} side={1} />
      </g>
    ),
    notes: [
      'La longueur de flambement est la distance entre deux points d’inflexion de la déformée.',
      'Plus les extrémités sont bloquées, plus $L_{cr}$ est courte et plus $N_{cr}$ est grand.',
    ],
    caption: 'Déformées de flambement selon les conditions d’appui (poteau de longueur L).',
  },
  {
    id: 'courbes-europeennes',
    title: 'Courbes européennes de flambement',
    steps: ['formulas'],
    formula: ['\\chi = \\frac{1}{\\Phi + \\sqrt{\\Phi^2 - \\bar\\lambda^2}}', 'N_{b,Rd} = \\chi \\, A f_y / \\gamma_{M1}'],
    h: 320,
    draw: () => (
      <Plot
        x={58} y={28} w={380} h={232} xr={[0, 3]} yr={[0, 1.1]}
        xl="λ̄" yl="χ"
        xt={[[0, '0'], [0.2, '0,2'], [1, '1'], [2, '2'], [3, '3']]}
        yt={[[0.2, '0,2'], [0.4, '0,4'], [0.6, '0,6'], [0.8, '0,8'], [1, '1,0']]}
        grid
      >
        {(sx, sy) => (
          <g>
            <Poly pts={fnPts(l => 1 / (l * l), 0.96, 3, sx, sy)} c="grey" w={1.8} dash="6 5" />
            <Text x={sx(1.02)} y={sy(1.03)} s={13} c="mute">Euler 1/λ̄²</Text>
            {[
              [0.21, 'ink', 'a'],
              [0.34, 'green', 'b'],
              [0.49, 'orange', 'c'],
              [0.76, 'red', 'd'],
            ].map(([alpha, c, name], i) => (
              <g key={name}>
                <Poly pts={fnPts(l => chi(l, alpha), 0, 3, sx, sy, 90)} c={c} w={2.6} />
                <Text x={sx(2.35 + i * 0.16)} y={sy(chi(2.35 + i * 0.16, alpha)) - 6} s={16} b c={c}>{name}</Text>
              </g>
            ))}
            <Line x1={sx(0.2)} y1={sy(1)} x2={sx(0.2)} y2={sy(0)} c="mute" w={1} dash="3 4" />
            <Text x={sx(0.24)} y={sy(0.08)} s={12} c="mute">plateau χ = 1</Text>
          </g>
        )}
      </Plot>
    ),
    notes: [
      'α = 0,21 (a) · 0,34 (b) · 0,49 (c) · 0,76 (d) : imperfections croissantes.',
      'Pour λ̄ ≤ 0,2 il n’y a pas de réduction : χ = 1.',
      'Aux grands élancements, toutes les courbes rejoignent la courbe d’Euler.',
    ],
    caption: 'Coefficient de réduction χ en fonction de l’élancement réduit (EN 1993-1-1).',
  },
  {
    id: 'poteau-hea200',
    title: 'Poteau HEA 200 articulé',
    steps: ['stepbystep'],
    formula: '\\bar\\lambda_z = \\frac{L_{cr}}{i_z \\, \\lambda_1}',
    h: 330,
    draw: () => (
      <g>
        <Force x={110} y={34} len={26} c="red" label="N_{Ed}" s={15} />
        <TopPin x={110} y={56} />
        <Rect x={104} y={56} w={12} h={232} c="ink" sw={2} fill="~ink" />
        <Pin x={110} y={288} s={16} />
        <Poly pts={Array.from({ length: 31 }, (_, i) => [110 + 26 * Math.sin((Math.PI * i) / 30), 288 - 232 * (i / 30)])} c="red" w={1.6} dash="5 5" />
        <Dim x1={60} y1={288} x2={60} y2={56} label="L = 4,00 m" s={14} side={1} />
        <HSection cx={330} cy={150} />
        <Axis x1={250} y1={150} x2={410} y2={150} />
        <Axis x1={330} y1={70} x2={330} y2={230} />
        <Text x={414} y={155} s={16} c="mute">y</Text>
        <Text x={336} y={68} s={16} c="mute">z</Text>
        <Arrow x1={300} y1={250} x2={360} y2={250} c="red" w={2} hs={9} both />
        <Text x={330} y={276} a="middle" s={14} c="red">{'déplacement latéral :\nflambement autour de z'}</Text>
        <Text x={250} y={40} s={16} b>HEA 200 · S235</Text>
        <Text x={420} y={98} s={13} c="mute" a="start">{'i_z = 49,8 mm\ni_y = 82,8 mm'}</Text>
      </g>
    ),
    notes: [
      'L’axe faible z (plus petit rayon de giration) gouverne : courbe c pour un H laminé.',
      '$L_{cr} = 1{,}0 \\times 4{,}00 = 4{,}00$ m (articulé – articulé).',
    ],
    caption: 'Le poteau flambe en déplaçant ses semelles latéralement, autour de l’axe faible z.',
  },
  {
    id: 'verification-poteau',
    title: 'Vérifier un poteau comprimé',
    steps: ['diagrams'],
    h: 300,
    draw: () => {
      const boxes = [
        [20, 30, 'Appuis\nK · L = L_{cr}'], [180, 30, 'Section\nA, I, i'], [340, 30, 'Élancement\nλ = L_{cr} / i'],
        [340, 175, 'Courbe a, b, c, d\nfacteur α'], [180, 175, 'χ puis\nN_{b,Rd} = χ A f_y / γ_{M1}'], [20, 175, 'N_{Ed} ≤ N_{b,Rd}\n✔ vérifié'],
      ];
      return (
        <g>
          {boxes.map(([x, y, label], i) => (
            <Box key={label} x={x} y={y} w={140} h={95} label={label} s={14.5} fill={i === 5 ? '~green' : '~ink'} c={i === 5 ? 'green' : 'ink'} />
          ))}
          <Arrow x1={162} y1={77} x2={178} y2={77} />
          <Arrow x1={322} y1={77} x2={338} y2={77} />
          <Arrow x1={410} y1={127} x2={410} y2={173} />
          <Arrow x1={338} y1={222} x2={322} y2={222} />
          <Arrow x1={178} y1={222} x2={162} y2={222} />
          <Text x={250} y={292} a="middle" s={13} c="mute">Vérifier chaque axe (y et z) : le plus défavorable gouverne.</Text>
        </g>
      );
    },
    caption: 'Démarche de vérification au flambement selon l’Eurocode 3.',
  },
  {
    id: 'etai-coffrage',
    title: 'Étai de coffrage',
    steps: ['practical_case'],
    formula: 'N_{adm} = \\frac{N_{cr}}{3}',
    h: 330,
    draw: () => (
      <g>
        <Rect x={60} y={28} w={380} h={26} c="grey" sw={1.6} fill="pat:concrete" bg="~grey" />
        <Text x={448} y={46} s={13} c="mute">dalle fraîche</Text>
        <Rect x={150} y={54} w={200} h={10} c="soil" sw={1.6} fill="~soil" />
        <Text x={358} y={66} s={12} c="soil">coffrage</Text>
        <Rect x={238} y={64} w={24} h={6} c="ink" sw={1.6} fill="ink" />
        <Rect x={246} y={70} w={8} h={100} c="ink" sw={1.8} fill="~ink" />
        <Rect x={242} y={166} w={16} h={124} c="ink" sw={2} fill="~ink" />
        {[184, 204, 224].map(y => <circle key={y} cx={250} cy={y} r={2.6} style={{ fill: 'var(--f-paper)', stroke: 'var(--f-ink)', strokeWidth: 1.2 }} />)}
        <Rect x={234} y={290} w={32} h={6} c="ink" sw={1.6} fill="ink" />
        <Ground x1={70} x2={430} y={296} />
        <Arrow x1={300} y1={92} x2={262} y2={110} c="red" w={1.6} hs={8} />
        <Text x={304} y={92} s={15} c="red">{'N (poids de la dalle\n+ charges de chantier)'}</Text>
        <Dim x1={200} y1={296} x2={200} y2={64} label="L = 3,20 m" s={14} side={1} />
        <Text x={290} y={230} s={14} c="txt">{'tube coulissant\nI = 1,5·10⁵ mm⁴\nA = 450 mm²'}</Text>
      </g>
    ),
    notes: ['Étai articulé à ses deux extrémités : $L_{cr} = L = 3{,}20$ m.'],
    caption: 'Un étai est un poteau élancé : la charge admissible est limitée par le flambement, pas par la résistance de l’acier.',
  },
];
