// Plates — Module 10 · Analyse non linéaire : second ordre, rotules plastiques, push-over
import { Arrow, BeamScheme, Circle, Dot, ForceDiagram, Line, Path, Plot, Poly, Rect, Text, fnPts } from '../../components/figures/kit.jsx';

// Fixed-fixed beam, t ∈ [0, 1]: elastic M = q L² (6t − 6t² − 1) / 12 ; at collapse, hinges at ends and mid-span.
const Mel = t => (6 * t - 6 * t * t - 1) / 12;
const Mu = t => (8 * t * (1 - t) - 1) / 1; // ±M_p (−1 at ends, +1 at mid-span)

export default [
  {
    id: 'second-ordre-rotule',
    title: 'Effet P-Δ et rotule plastique',
    steps: ['theory'],
    formula: ['M_{II} = H\\,h + P\\,\\Delta', 'M_p = W_{pl}\\, f_y \\qquad f = \\frac{W_{pl}}{W_{el}}'],
    h: 280,
    draw: () => (
      <g>
        <Rect x={40} y={244} w={140} h={10} c="ink" sw={0} fill="pat:soil" />
        <Line x1={40} y1={244} x2={180} y2={244} c="ink" w={2} />
        <Line x1={90} y1={244} x2={90} y2={70} c="grey" w={1.2} dash="5 4" />
        <Path d="M 90 244 Q 92 140 124 70" c="ink" w={4} />
        <Arrow x1={124} y1={20} x2={124} y2={64} c="red" w={2.6} hs={10} />
        <Text x={130} y={34} s={14} c="red" b>P</Text>
        <Arrow x1={170} y1={70} x2={132} y2={70} c="red" w={2.6} hs={10} />
        <Text x={174} y={75} s={14} c="red" b>H</Text>
        <Arrow x1={91} y1={58} x2={123} y2={58} c="txt" w={1.2} hs={5} both />
        <Text x={107} y={52} a="middle" s={13} b>Δ</Text>
        <Text x={110} y={270} a="middle" s={12}>M en pied = H·h + P·Δ</Text>
        <Text x={330} y={34} a="middle" s={13} b>section rectangulaire</Text>
        {[[250, 'élastique', 'M_{el}'], [330, 'partiellement\nplastique', ''], [410, 'rotule\nplastique', 'M_p']].map(([x, lab, m], k) => (
          <g key={x}>
            <Line x1={x} y1={70} x2={x} y2={210} c="txt" w={1.4} />
            {k === 0 && <Poly pts={[[x, 70], [x - 28, 70], [x + 28, 210], [x, 210]]} c="red" w={1.6} fill="~red" close />}
            {k === 1 && <Poly pts={[[x, 70], [x - 28, 70], [x - 28, 100], [x + 28, 180], [x + 28, 210], [x, 210]]} c="red" w={1.6} fill="~red" close />}
            {k === 2 && <Poly pts={[[x, 70], [x - 28, 70], [x - 28, 140], [x + 28, 140], [x + 28, 210], [x, 210]]} c="red" w={1.6} fill="~red" close />}
            <Text x={x} y={232} a="middle" s={11}>{lab}</Text>
            {m && <Text x={x} y={258} a="middle" s={12} c="red" b>{m}</Text>}
          </g>
        ))}
        <Text x={460} y={74} a="end" s={11} c="mute">{'f_y'}</Text>
        <Text x={330} y={272} a="middle" s={12}>{'M_p / M_{el} = 1,5 pour un rectangle'}</Text>
      </g>
    ),
    notes: [
      'P-Δ : le déplacement latéral Δ fait naître un moment supplémentaire P·Δ ; il faut en tenir compte si la structure est souple.',
      'Plastification : la contrainte atteint $f_y$ de plus en plus profondément jusqu’à la rotule plastique ($M = M_p$).',
    ],
    caption: 'Deux non-linéarités : géométrique (second ordre) et matérielle (plasticité).',
  },
  {
    id: 'bi-encastree',
    title: 'Poutre bi-encastrée : de la première rotule à la ruine',
    steps: ['stepbystep'],
    formula: ['q_y = \\frac{12 M_{el}}{L^2} = 24{,}5\\ \\text{kN/m}', 'q_u = \\frac{16 M_p}{L^2} = 36{,}9\\ \\text{kN/m}'],
    h: 320,
    draw: () => (
      <g>
        <BeamScheme x1={90} x2={410} y={70} left="fixed" right="fixed" loads={[{ type: 'udl', h: 26, label: 'q' }]} names={['', '']} span="L = 8 m" spanY={108} />
        <ForceDiagram x1={90} x2={410} y0={180} f={Mel} scale={360} c="ink" fill="~ink" name="élastique" marks={[{ t: 0, label: 'qL²/12', dx: 30 }, { t: 0.5, label: 'qL²/24' }]} />
        <ForceDiagram x1={90} x2={410} y0={262} f={Mu} scale={26} c="red" fill="~red" name="ruine" marks={[{ t: 0.5, label: '+M_p' }]} />
        {[90, 250, 410].map(x => <Circle key={x} cx={x} cy={x === 250 ? 288 : 236} r={6} c="red" sw={2.2} fill="paper" />)}
        <Text x={250} y={226} a="middle" s={12} c="red">3 rotules : mécanisme</Text>
      </g>
    ),
    notes: [
      'Élastique : le moment maximal est aux encastrements (qL²/12) : première rotule pour $q_y = 24{,}5$ kN/m.',
      'Les rotules aux appuis tournent, les moments se redistribuent vers la travée jusqu’à la 3ᵉ rotule : $q_u / q_y = 1{,}51$.',
    ],
    caption: 'IPE 300 S235 bi-encastré de 8 m : 51 % de réserve au-delà de la première plastification.',
  },
  {
    id: 'alpha-cr',
    title: 'Sensibilité au second ordre : coefficient critique',
    steps: ['formulas', 'simple_examples', 'practical_case'],
    formula: ['\\alpha_{cr} = \\frac{H_{Ed}}{V_{Ed}} \\cdot \\frac{h}{\\delta_{H,Ed}}', 'k_{amp} = \\frac{1}{1 - 1/\\alpha_{cr}}'],
    h: 260,
    draw: () => {
      const X = a => 40 + (Math.min(a, 15) / 15) * 420;
      return (
        <g>
          <Rect x={X(0)} y={70} w={X(3) - X(0)} h={26} c="red" sw={0} fill="~red" />
          <Rect x={X(3)} y={70} w={X(10) - X(3)} h={26} c="orange" sw={0} fill="~orange" />
          <Rect x={X(10)} y={70} w={X(15) - X(10)} h={26} c="green" sw={0} fill="~green" />
          <Rect x={X(0)} y={70} w={X(15) - X(0)} h={26} c="ink" sw={1.6} />
          <Text x={(X(0) + X(3)) / 2} y={60} a="middle" s={11} c="red" b>{'calcul au\n2ᵈ ordre'}</Text>
          <Text x={(X(3) + X(10)) / 2} y={62} a="middle" s={12} c="orange" b>amplifier les efforts horizontaux</Text>
          <Text x={(X(10) + X(15)) / 2} y={62} a="middle" s={12} c="green" b>1ᵉʳ ordre suffit</Text>
          {[0, 3, 10, 15].map(a => <Text key={a} x={X(a)} y={112} a="middle" s={12}>{a === 15 ? '15 +' : String(a)}</Text>)}
          {[[12.5, 'δ = 8 mm : 12,5', 140], [5, 'δ = 20 mm : 5 → × 1,25', 140], [10, 'hall : 10', 186], [7.5, 'hall + neige : 7,5 → × 1,15', 214]].map(([a, lab, y]) => (
            <g key={lab}>
              <Line x1={X(a)} y1={96} x2={X(a)} y2={y - 14} c="txt" w={1.2} />
              <Dot x={X(a)} y={96} r={4.5} c="red" />
              <Text x={X(a)} y={y} a="middle" s={12} b>{lab}</Text>
            </g>
          ))}
        </g>
      );
    },
    notes: ['Hall : $\\alpha_{cr} = (45/900)(6\\,000/30) = 10$, limite ; avec la neige ($V_{Ed} = 1\\,200$ kN), $\\alpha_{cr} = 7{,}5$ : majorer de 15 % ou contreventer.'],
    caption: 'Plus le coefficient critique est faible, plus le portique est sensible au second ordre.',
  },
  {
    id: 'push-over',
    title: 'Courbe de capacité push-over',
    steps: ['diagrams', 'real_examples'],
    h: 290,
    draw: () => (
      <Plot x={70} y={30} w={380} h={200} xr={[0, 10]} yr={[0, 1.15]} yl="effort à la base"
        xt={[[1, 'd_y'], [8.5, 'd_u']]} yt={[]}
      >
        {(sx, sy) => {
          const cap = d => (d <= 1 ? 0.7 * d : d <= 3 ? 0.7 + 0.3 * (1 - (1 - (d - 1) / 2) ** 2) : d <= 7 ? 1 : 1 - 0.06 * (d - 7) ** 1.3);
          return (
            <g>
              <Poly pts={fnPts(cap, 0, 9.4, sx, sy, 120)} c="ink" w={3} />
              <Poly pts={fnPts(d => 0.39 * d, 0, 1.6, sx, sy, 10)} c="orange" w={2.2} dash="6 4" />
              <Text x={sx(1.5)} y={sy(0.95)} a="end" s={11} c="orange" b>{'étage souple\nμ ≈ 1,5'}</Text>
              {[[1, '1ʳᵉ rotule'], [2.2, 'rotules successives'], [5, 'plateau plastique'], [8.6, 'mécanisme, P-Δ']].map(([d, lab]) => (
                <g key={lab}>
                  <Dot x={sx(d)} y={sy(cap(d))} r={5} c="red" />
                  <Text x={sx(d) + 6} y={sy(cap(d)) + (d === 1 ? 18 : -10)} s={12} c="red">{lab}</Text>
                </g>
              ))}
              <Text x={sx(9.8)} y={sy(0.1)} a="end" s={12} c="mute">déplacement en tête →</Text>
            </g>
          );
        }}
      </Plot>
    ),
    notes: [
      'Ductilité $\\mu = d_u / d_y$ : capacité à se déformer après la première rotule sans perdre sa résistance.',
      'Immeuble à rez-de-chaussée ouvert : les rotules se concentrent dans les poteaux du RDC (étage souple), μ ≈ 1,5 seulement.',
    ],
    caption: 'On pousse la structure jusqu’à la ruine : la courbe donne résistance et ductilité réelles.',
  },
];
