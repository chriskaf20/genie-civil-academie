// Plates — Module 7 · Aciers de construction
import { Arrow, Badge, Dot, Line, Path, Plot, Poly, Rect, Text, fnPts } from '../../components/figures/kit.jsx';

// Schematic tensile curve (strains dilated): O, yield, plateau, hardening to f_u, necking to rupture.
const O = [70, 240];
const Y = [100, 120];
const PL = [140, 120];
const U = [300, 60];
const R = [350, 88];
const harden = Array.from({ length: 21 }, (_, k) => {
  const x = PL[0] + (k / 20) * (U[0] - PL[0]);
  return [x, U[1] + 60 * ((U[0] - x) / (U[0] - PL[0])) ** 2];
});

const LOT = [
  { t: 'R_e (MPa)', vals: [525, 532, 519], thr: 500, lo: 480, hi: 545, fmt: v => String(v) },
  { t: 'k = R_m / R_e', vals: [590 / 525, 598 / 532, 575 / 519], thr: 1.08, lo: 1.05, hi: 1.15, fmt: v => v.toFixed(3).replace('.', ',') },
  { t: 'ε_u (%)', vals: [6.8, 7.1, 5.9], thr: 5, lo: 4, hi: 8, fmt: v => v.toFixed(1).replace('.', ',') },
];

export default [
  {
    id: 'courbe-traction',
    title: 'Essai de traction : courbe contrainte-déformation',
    steps: ['theory', 'diagrams'],
    formula: ['\\sigma = E\\,\\varepsilon', 'R_e = \\frac{F_e}{S_0} \\qquad R_m = \\frac{F_m}{S_0} \\qquad A = \\frac{L_u - L_0}{L_0}'],
    h: 300,
    draw: () => (
      <g>
        <Arrow x1={O[0]} y1={O[1]} x2={380} y2={O[1]} c="txt" w={1.5} hs={8} />
        <Arrow x1={O[0]} y1={O[1]} x2={O[0]} y2={28} c="txt" w={1.5} hs={8} />
        <Text x={384} y={244} s={15} b>ε</Text>
        <Text x={78} y={34} s={15} b>σ</Text>
        <Line x1={O[0]} y1={Y[1]} x2={PL[0]} y2={Y[1]} c="grey" w={1.2} dash="4 4" />
        <Line x1={O[0]} y1={U[1]} x2={U[0]} y2={U[1]} c="grey" w={1.2} dash="4 4" />
        <Text x={64} y={124} a="end" s={13} b>{'f_y'}</Text>
        <Text x={64} y={64} a="end" s={13} b>{'f_u'}</Text>
        <Poly pts={[O, Y, PL, ...harden]} c="ink" w={3} />
        <Path d={`M ${U[0]} ${U[1]} Q 330 62 ${R[0]} ${R[1]}`} c="ink" w={3} />
        <Line x1={R[0] - 6} y1={R[1] - 6} x2={R[0] + 6} y2={R[1] + 6} c="red" w={2.4} />
        <Line x1={R[0] - 6} y1={R[1] + 6} x2={R[0] + 6} y2={R[1] - 6} c="red" w={2.4} />
        <Text x={86} y={224} s={13} c="red">E</Text>
        <Badge x={100} y={186} n={1} />
        <Badge x={120} y={104} n={2} />
        <Badge x={220} y={96} n={3} />
        <Badge x={340} y={50} n={4} />
        <Text x={392} y={92} s={12}>{'1 élastique\n2 palier f_y\n3 écrouissage\n4 striction\n   et rupture'}</Text>
        <Path d="M 120 262 h 40 v 8 q 10 0 14 4 h 92 q 4 -4 14 -4 v -8 h 40 v 36 h -40 v -8 q -10 0 -14 -4 h -92 q -4 4 -14 4 v 8 h -40 z" c="ink" w={1.8} fill="~grey" />
        <Arrow x1={174} y1={280} x2={266} y2={280} c="red" w={1.2} hs={6} both />
        <Text x={220} y={276} a="middle" s={12} c="red">{'L_0'}</Text>
        <Text x={110} y={284} a="end" s={12} c="mute">{'éprouvette (S_0)'}</Text>
        <Arrow x1={330} y1={280} x2={360} y2={280} c="ink" w={2} hs={8} />
        <Text x={364} y={285} s={13} b>F</Text>
      </g>
    ),
    notes: ['Échelle des déformations dilatée : en réalité le domaine élastique s’arrête vers 0,25 % et la rupture survient après 10 à 25 %.'],
    caption: 'Domaine élastique, palier de plasticité, écrouissage, striction : l’acier prévient avant de rompre.',
  },
  {
    id: 'classes-ductilite',
    title: 'Essai sur HA12 : quelle classe de ductilité ?',
    steps: ['stepbystep'],
    formula: ['R_e = \\frac{57\\,500}{113{,}1} = 508\\ \\text{MPa} \\ge 500', 'k = \\frac{566}{508} = 1{,}11 \\ge 1{,}08'],
    h: 290,
    draw: () => (
      <Plot x={70} y={30} w={380} h={200} xr={[0, 10]} yr={[1.0, 1.4]} yl="k = f_t / f_y"
        xt={[2.5, 5, 7.5, 10].map(v => [v, String(v).replace('.', ',')])} yt={[1.05, 1.08, 1.15, 1.35].map(v => [v, v.toFixed(2).replace('.', ',')])}
      >
        {(sx, sy) => (
          <g>
            <Rect x={sx(2.5)} y={sy(1.4)} w={sx(10) - sx(2.5)} h={sy(1.05) - sy(1.4)} c="grey" sw={1.4} fill="~grey" />
            <Rect x={sx(5)} y={sy(1.4)} w={sx(10) - sx(5)} h={sy(1.08) - sy(1.4)} c="soil" sw={1.6} fill="~soil" />
            <Rect x={sx(7.5)} y={sy(1.35)} w={sx(10) - sx(7.5)} h={sy(1.15) - sy(1.35)} c="green" sw={1.8} fill="~green" />
            <Text x={sx(2.6)} y={sy(1.06) - 4} s={13} b>classe A</Text>
            <Text x={sx(5.1)} y={sy(1.09) - 4} s={13} c="soil" b>classe B</Text>
            <Text x={sx(7.6)} y={sy(1.16) - 4} s={13} c="green" b>classe C</Text>
            <Dot x={sx(6.2)} y={sy(1.114)} r={6} c="red" />
            <Text x={sx(6.2) + 10} y={sy(1.114) - 8} s={13} c="red" b>{'HA12 : 6,2 % ; 1,11'}</Text>
            <Text x={sx(5.2)} y={sy(1.3)} s={12} c="mute">{'ε_{uk} (%) →'}</Text>
          </g>
        )}
      </Plot>
    ),
    notes: [
      '$R_m = 64\\,000 / 113{,}1 = 566$ MPa ; $\\varepsilon_u = 6{,}2\\ \\% \\ge 5\\ \\%$ : la barre est conforme B500B.',
      'Elle n’est pas B500C : il faudrait $\\varepsilon_{uk} \\ge 7{,}5\\ \\%$ et $k \\ge 1{,}15$.',
    ],
    caption: 'Classes de ductilité (EC2, annexe C) : le point de l’essai tombe dans la classe B.',
  },
  {
    id: 'transition-charpy',
    title: 'Ténacité : transition ductile-fragile',
    steps: ['real_examples'],
    formula: ['KV \\ge 27\\ \\text{J}'],
    h: 290,
    draw: () => (
      <Plot x={70} y={30} w={380} h={200} xr={[0, 100]} yr={[0, 200]} yl="énergie KV (J)"
        xt={[-60, -40, -20, 0, 20, 40].map(v => [v + 60, `${v} °C`])} yt={[[27, '27'], [100, '100'], [200, '200']]} grid
      >
        {(sx0, sy) => {
          const sx = T => sx0(T + 60);
          return (
          <g>
            <Poly pts={fnPts(T => 10 + 170 / (1 + Math.exp(-(T + 12) / 7)), -60, 40, sx, sy, 60)} c="ink" w={2.8} />
            <Line x1={sx(-60)} y1={sy(27)} x2={sx(40)} y2={sy(27)} c="red" w={1.6} dash="6 4" />
            {[[20, 'JR'], [0, 'J0'], [-20, 'J2']].map(([T, q]) => (
              <g key={q}>
                <Dot x={sx(T)} y={sy(27)} r={5} c="red" />
                <Text x={sx(T)} y={sy(27) + 20} a="middle" s={13} c="red" b>{q}</Text>
              </g>
            ))}
            <Text x={sx(-56)} y={sy(60)} s={13} c="mute">{'rupture fragile\n(par clivage)'}</Text>
            <Text x={sx(8)} y={sy(150)} s={13} c="mute">{'rupture ductile\n(grande énergie)'}</Text>
          </g>
          );
        }}
      </Plot>
    ),
    notes: [
      'JR, J0, J2 : 27 J garantis à +20 °C, 0 °C ou −20 °C ; choisir la qualité selon la température de service.',
      'Navires soudés de 1942-1945 : acier devenu fragile par temps froid, angles vifs et défauts de soudure ⇒ ruptures brutales.',
    ],
    caption: 'Sous la température de transition, l’acier casse comme du verre : la qualité Charpy se choisit selon le climat.',
  },
  {
    id: 'reception-lot',
    title: 'Réception d’un lot de HA20 B500B',
    steps: ['practical_case'],
    formula: ['R_{e,min} = 519 \\ge 500 \\qquad k_{min} = 1{,}108 \\ge 1{,}08 \\qquad \\varepsilon_{u,min} = 5{,}9\\ \\% \\ge 5\\ \\%'],
    h: 250,
    draw: () => (
      <g>
        {LOT.map((p, i) => {
          const x0 = 30 + i * 160;
          const y0 = 40;
          const H = 160;
          const yv = v => y0 + H - ((v - p.lo) / (p.hi - p.lo)) * H;
          return (
            <g key={p.t}>
              <Rect x={x0} y={y0} w={140} h={H} rx={6} c="grey" sw={1.2} fill="paper" />
              <Text x={x0 + 70} y={30} a="middle" s={13} b>{p.t}</Text>
              <Rect x={x0} y={yv(p.thr)} w={140} h={y0 + H - yv(p.thr)} c="red" sw={0} fill="~red" />
              <Line x1={x0} y1={yv(p.thr)} x2={x0 + 140} y2={yv(p.thr)} c="red" w={2} dash="6 4" />
              <Text x={x0 + 136} y={yv(p.thr) + 16} a="end" s={12} c="red">{`seuil ${p.fmt(p.thr)}`}</Text>
              {p.vals.map((v, k) => (
                <g key={k}>
                  <Dot x={x0 + 30 + k * 40} y={yv(v)} r={6} c="green" />
                  <Text x={x0 + 30 + k * 40} y={yv(v) - 10} a="middle" s={12} b>{p.fmt(v)}</Text>
                </g>
              ))}
              <Text x={x0 + 70} y={y0 + H + 22} a="middle" s={13} c="green" b>conforme</Text>
            </g>
          );
        })}
      </g>
    ),
    notes: ['On compare la plus faible valeur de chaque grandeur au seuil de la classe : les trois essais passent, le lot est accepté.'],
    caption: 'Trois essais de traction, trois critères (R_e, k, ε_u) : le lot est conforme B500B.',
  },
];
