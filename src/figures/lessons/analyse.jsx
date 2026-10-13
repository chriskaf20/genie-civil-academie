// Plates — Module 10 · Analyse avancée : éléments finis & dynamique
import { Arrow, Circle, Dot, Line, Moment, Path, Plot, Poly, Rect, Text, fnPts } from '../../components/figures/kit.jsx';

const D = (r, xi) => 1 / Math.sqrt((1 - r * r) ** 2 + (2 * xi * r) ** 2);

// Slab 8 × 8 m (20 px per 0,5 m), opening 2,0 × 2,5 m, columns at the corners.
const N = 16;
const CELL = 18;
const SX = 40;
const SY = 30;
const HOLE = { i0: 9, i1: 12, j0: 4, j1: 8 }; // cells of the opening
const inHole = (i, j) => i >= HOLE.i0 && i <= HOLE.i1 && j >= HOLE.j0 && j <= HOLE.j1;
const mClass = (i, j) => {
  const cx = (i + 0.5) / N;
  const cy = (j + 0.5) / N;
  const dCol = Math.min(...[[0, 0], [1, 0], [0, 1], [1, 1]].map(([a, b]) => Math.hypot(cx - a, cy - b)));
  if (dCol < 0.16) return 'red';
  if (Math.hypot(cx - 0.5, cy - 0.5) < 0.3) return 'water';
  return null;
};

export default [
  {
    id: 'element-poutre',
    title: 'Élément fini de poutre : 3 degrés de liberté par nœud',
    steps: ['theory'],
    formula: ['\\{F_e\\} = [k_e]\\,\\{u_e\\}', 'k_{ww} = \\frac{12EI}{L^3} \\quad k_{\\theta\\theta} = \\frac{4EI}{L} \\quad k_{uu} = \\frac{EA}{L}'],
    h: 230,
    draw: () => (
      <g>
        <Rect x={110} y={112} w={280} h={16} c="ink" sw={2.2} fill="~ink" />
        {[[110, '1'], [390, '2']].map(([x, n]) => (
          <g key={n}>
            <Circle cx={x} cy={120} r={10} c="red" sw={2} fill="paper" />
            <Text x={x} y={125} a="middle" s={13} c="red" b halo={false}>{n}</Text>
            <Arrow x1={x} y1={120} x2={x + 56} y2={120} c="green" w={2} hs={8} />
            <Arrow x1={x} y1={120} x2={x} y2={62} c="water" w={2} hs={8} />
            <Moment x={x} y={120} r={26} a1={330} a2={210} c="orange" />
          </g>
        ))}
        <Text x={172} y={114} s={13} c="green" b>{'u_1'}</Text>
        <Text x={452} y={114} s={13} c="green" b>{'u_2'}</Text>
        <Text x={116} y={60} s={13} c="water" b>{'w_1'}</Text>
        <Text x={396} y={60} s={13} c="water" b>{'w_2'}</Text>
        <Text x={74} y={96} a="end" s={13} c="orange" b>{'θ_1'}</Text>
        <Text x={354} y={96} a="end" s={13} c="orange" b>{'θ_2'}</Text>
        <Arrow x1={111} y1={164} x2={389} y2={164} c="txt" w={1.2} hs={6} both />
        <Text x={250} y={182} a="middle" s={13}>L ; E, A, I</Text>
        <Text x={250} y={214} a="middle" s={12} c="mute">effort normal N, effort tranchant V et moment M aux deux nœuds ↔ 6 déplacements</Text>
      </g>
    ),
    notes: ['La matrice 6 × 6 relie les efforts aux déplacements des nœuds ; on l’assemble pour tous les éléments, puis on résout $[K]\\{U\\} = \\{F\\}$.'],
    caption: 'Chaque nœud d’une poutre plane a trois déplacements : u, w et θ.',
  },
  {
    id: 'portique-1ddl',
    title: 'Portique à dalle rigide : fréquence propre',
    steps: ['stepbystep'],
    formula: ['k = 4 \\times \\frac{12EI}{H^3} = 24{,}2\\ \\text{MN/m}', 'f_0 = \\frac{1}{2\\pi}\\sqrt{\\frac{k}{m}} = 3{,}91\\ \\text{Hz}'],
    h: 270,
    draw: () => (
      <g>
        <Rect x={40} y={232} w={250} h={10} c="ink" sw={0} fill="pat:soil" />
        <Line x1={40} y1={232} x2={290} y2={232} c="ink" w={2} />
        <Line x1={70} y1={232} x2={70} y2={80} c="grey" w={1.2} dash="5 4" />
        <Line x1={260} y1={232} x2={260} y2={80} c="grey" w={1.2} dash="5 4" />
        <Path d="M 70 232 C 70 170, 100 140, 100 80" c="ink" w={4} />
        <Path d="M 260 232 C 260 170, 290 140, 290 80" c="ink" w={4} />
        <Rect x={86} y={62} w={218} h={18} c="ink" sw={2.4} fill="~ink" />
        <Text x={195} y={56} a="middle" s={13} b>dalle rigide m = 40 t</Text>
        <Arrow x1={310} y1={71} x2={340} y2={71} c="red" w={2.4} hs={9} />
        <Text x={344} y={76} s={13} c="red" b>δ</Text>
        <Text x={110} y={160} s={12}>{'poteaux 30 × 30\nencastrés en tête\net en pied, H = 3,50 m'}</Text>
        <Text x={410} y={44} a="middle" s={13} b>modèle à 1 ddl</Text>
        <Line x1={360} y1={150} x2={360} y2={110} c="ink" w={2.2} />
        <Path d="M 360 130 l 10 0 l 5 -8 l 8 16 l 8 -16 l 8 16 l 8 -16 l 5 8 l 10 0" c="ink" w={1.8} />
        <Rect x={422} y={110} w={44} h={40} c="ink" sw={2} fill="~grey" />
        <Text x={444} y={135} a="middle" s={14} b>m</Text>
        <Text x={392} y={104} a="middle" s={14} b>k</Text>
        <Circle cx={430} cy={156} r={4} c="ink" sw={1.4} fill="paper" />
        <Circle cx={458} cy={156} r={4} c="ink" sw={1.4} fill="paper" />
        <Line x1={350} y1={161} x2={480} y2={161} c="ink" w={1.6} />
        <Text x={414} y={192} a="middle" s={13} c="red" b>T₀ = 0,256 s</Text>
        <Text x={414} y={212} a="middle" s={12}>{'V_k = m · S_d = 100 kN'}</Text>
      </g>
    ),
    notes: ['Rigidité d’un poteau bi-encastré : $12EI/H^3 = 6{,}05$ MN/m ; avec 4 poteaux, $\\omega_0 = \\sqrt{24\\,182\\,000 / 40\\,000} = 24{,}6$ rad/s.'],
    caption: 'Les poteaux bi-encastrés se déforment en S ; le portique se ramène à une masse sur un ressort.',
  },
  {
    id: 'resonance',
    title: 'Amplification dynamique et résonance',
    steps: ['formulas', 'simple_examples'],
    formula: ['D = \\frac{1}{\\sqrt{\\left(1 - r^2\\right)^2 + \\left(2\\xi r\\right)^2}} \\qquad r = \\frac{f}{f_0}'],
    h: 290,
    draw: () => (
      <Plot x={70} y={30} w={380} h={200} xr={[0, 3]} yr={[0, 11]} yl="D"
        xt={[0, 0.5, 1, 1.5, 2, 2.5, 3].map(v => [v, String(v).replace('.', ',')])} yt={[1, 5, 10].map(v => [v, String(v)])} grid
      >
        {(sx, sy) => (
          <g>
            <Rect x={sx(1.0)} y={sy(11)} w={sx(1.5) - sx(1.0)} h={sy(0) - sy(11)} c="orange" sw={0} fill="~orange" />
            <Text x={sx(1.3)} y={sy(10.4)} a="middle" s={12} c="orange" b>{'marche\n1,6–2,4 Hz'}</Text>
            {[[0.05, 'red', 'ξ = 5 %'], [0.1, 'ink', 'ξ = 10 %'], [0.2, 'green', 'ξ = 20 %']].map(([xi, c, lab], k) => (
              <g key={lab}>
                <Poly pts={fnPts(r => Math.min(11, D(r, xi)), 0, 3, sx, sy, 240)} c={c} w={2.4} />
                <Line x1={sx(2.15)} y1={sy(9.6 - 1.1 * k)} x2={sx(2.35)} y2={sy(9.6 - 1.1 * k)} c={c} w={2.4} />
                <Text x={sx(2.4)} y={sy(9.6 - 1.1 * k) + 4} s={12} c={c} b>{lab}</Text>
              </g>
            ))}
            <Text x={sx(2.95)} y={sy(1.8)} a="end" s={12} c="mute">au-delà de √2 : la masse filtre</Text>
          </g>
        )}
      </Plot>
    ),
    notes: [
      'Passerelle : $f_0 = \\frac{1}{2\\pi}\\sqrt{1\\,500\\,000 / 15\\,000} = 1{,}59$ Hz, dans la gamme de la marche : risque de résonance.',
      'Remède : raidir ou alourdir pour sortir de la gamme (f₀ > 3,5 Hz), ou ajouter un amortisseur.',
    ],
    caption: 'Quand la fréquence d’excitation approche la fréquence propre, la réponse est multipliée par D.',
  },
  {
    id: 'dalle-tremie',
    title: 'Plancher-dalle avec trémie : modèle éléments finis',
    steps: ['diagrams', 'practical_case'],
    formula: ['M_{ud,x} = M_{xx} + |M_{xy}| = 48{,}5 + 12{,}0 = 60{,}5\\ \\text{kN·m/m}', 'A_{s,x} = \\frac{60{,}5 \\times 10^6}{0{,}9 \\times 200 \\times 435} = 7{,}73\\ \\text{cm}^2/\\text{m}'],
    h: 340,
    draw: () => (
      <g>
        {Array.from({ length: N * N }, (_, k) => {
          const i = k % N;
          const j = Math.floor(k / N);
          if (inHole(i, j)) return null;
          const m = mClass(i, j);
          return <Rect key={k} x={SX + i * CELL} y={SY + j * CELL} w={CELL} h={CELL} c="grey" sw={0.6} fill={m ? `~${m}` : 'paper'} />;
        })}
        {Array.from({ length: (HOLE.i1 - HOLE.i0 + 3) * 2 }, (_, k) => {
          const x = SX + (HOLE.i0 - 1) * CELL + (k * CELL) / 2;
          return <Line key={`v${k}`} x1={x} y1={SY + (HOLE.j0 - 1) * CELL} x2={x} y2={SY + (HOLE.j1 + 2) * CELL} c="grey" w={0.5} />;
        })}
        {Array.from({ length: (HOLE.j1 - HOLE.j0 + 3) * 2 }, (_, k) => {
          const y = SY + (HOLE.j0 - 1) * CELL + (k * CELL) / 2;
          return <Line key={`h${k}`} x1={SX + (HOLE.i0 - 1) * CELL} y1={y} x2={SX + (HOLE.i1 + 2) * CELL} y2={y} c="grey" w={0.5} />;
        })}
        <Rect x={SX + HOLE.i0 * CELL} y={SY + HOLE.j0 * CELL} w={(HOLE.i1 - HOLE.i0 + 1) * CELL} h={(HOLE.j1 - HOLE.j0 + 1) * CELL} c="ink" sw={2.4} fill="paper" />
        <Text x={SX + ((HOLE.i0 + HOLE.i1 + 1) / 2) * CELL} y={SY + ((HOLE.j0 + HOLE.j1 + 1) / 2) * CELL + 5} a="middle" s={12} b>trémie</Text>
        <Rect x={SX} y={SY} w={N * CELL} h={N * CELL} c="ink" sw={2.4} />
        {[[0, 0], [1, 0], [0, 1], [1, 1]].map(([a, b]) => <Rect key={`${a}${b}`} x={SX + a * N * CELL - 9} y={SY + b * N * CELL - 9} w={18} h={18} c="ink" sw={1.6} fill="txt" />)}
        {[0, 1].map(s => <Line key={s} x1={SX + HOLE.i0 * CELL - 6} y1={SY + (s ? HOLE.j1 + 1 : HOLE.j0) * CELL + (s ? 5 : -5)} x2={SX + (HOLE.i1 + 1) * CELL + 6} y2={SY + (s ? HOLE.j1 + 1 : HOLE.j0) * CELL + (s ? 5 : -5)} c="red" w={3} />)}
        <Rect x={346} y={40} w={16} h={12} c="red" sw={0} fill="~red" />
        <Text x={368} y={51} s={12}>{'M < 0 sur poteaux'}</Text>
        <Text x={368} y={67} s={12} c="red" b>−92,0 kN·m/m</Text>
        <Rect x={346} y={84} w={16} h={12} c="water" sw={0} fill="~water" />
        <Text x={368} y={95} s={12}>M &gt; 0 en travée</Text>
        <Text x={368} y={111} s={12} c="water" b>48,5 kN·m/m</Text>
        <Line x1={346} y1={136} x2={362} y2={136} c="red" w={3} />
        <Text x={368} y={140} s={12}>chevêtres 4 HA14</Text>
        <Text x={346} y={170} s={12} c="mute">{'éléments plaques\n25 × 25 cm,\nraffinés autour\nde la trémie'}</Text>
        <Text x={346} y={258} s={12} b>{'travée : HA12 e = 14 cm\n(8,1 cm²/m ≥ 7,73)'}</Text>
      </g>
    ),
    notes: ['Le maillage est raffiné là où les efforts varient vite : autour de la trémie et des poteaux. Les moments de torsion $M_{xy}$ sont repris par la méthode de Wood-Armer.'],
    caption: 'Dalle 8 × 8 m, e = 22 cm, sur 4 poteaux : cartographie des moments et renforts autour de la trémie.',
  },
];
