// Plates — Module 10 · Analyse non linéaire : second ordre, rotules plastiques, push-over
import { Arrow, BeamScheme, Circle, Dot, ForceDiagram, Line, Path, Plot, Poly, Rect, Text, fnPts } from '../../components/figures/kit.jsx';
import { Bars, Building } from '../../components/figures/kit.jsx';

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
  {
    id: 'facteur-forme',
    title: 'Facteur de forme : rectangle et profilé en I',
    steps: ['theory'],
    formula: ['f = \\frac{W_{pl}}{W_{el}} \\qquad \\text{rectangle : } 1{,}5 \\qquad \\text{profilé en I : } 1{,}12 \\text{ à } 1{,}15'],
    h: 240,
    draw: () => (
      <g>
        {[[60, 'rectangle', 1.5], [260, 'profilé en I', 1.13]].map(([x, t, f], k) => (
          <g key={t}>
            {k === 0 ? <Rect x={x} y={40} w={60} h={140} c="ink" sw={2} fill="~grey" /> : (
              <g>
                <Rect x={x - 10} y={40} w={80} h={14} c="ink" sw={2} fill="~grey" />
                <Rect x={x + 24} y={54} w={12} h={112} c="ink" sw={2} fill="~grey" />
                <Rect x={x - 10} y={166} w={80} h={14} c="ink" sw={2} fill="~grey" />
              </g>
            )}
            <Line x1={x + 140} y1={40} x2={x + 140} y2={180} c="txt" w={1.2} />
            <Poly pts={[[x + 140, 40], [x + 170, 40], [x + 110, 180], [x + 140, 180]]} c="grey" w={1.4} fill="~grey" close />
            <Poly pts={[[x + 140, 40], [x + 180, 40], [x + 180, 110], [x + 100, 110], [x + 100, 180], [x + 140, 180]]} c="red" w={1.8} />
            <Text x={x + 30} y={206} a="middle" s={13} b>{t}</Text>
            <Text x={x + 140} y={226} a="middle" s={13} c="red" b>{`f ≈ ${String(f).replace('.', ',')}`}</Text>
          </g>
        ))}
      </g>
    ),
    notes: ['Dans un I, la matière est déjà loin de l’axe : la plastification complète ajoute peu ; dans un rectangle, le cœur sous-utilisé ajoute 50 %.'],
    caption: 'Contraintes élastiques (gris) et totalement plastiques (rouge).',
  },
  {
    id: 'appuis-reserve',
    title: 'Charge de ruine : appuis simples ou encastrements',
    steps: ['simple_examples'],
    formula: ['q_u = \\frac{8 M_p}{L^2} = 18{,}5\\ \\text{kN/m} \\quad \\text{contre} \\quad \\frac{16 M_p}{L^2} = 36{,}9\\ \\text{kN/m}'],
    h: 250,
    draw: () => (
      <g>
        <BeamScheme x1={40} x2={220} y={80} names={['', '']} />
        <Circle cx={130} cy={80} r={6} c="red" sw={2} fill="paper" />
        <Text x={130} y={130} a="middle" s={12}>1 rotule : mécanisme</Text>
        <BeamScheme x1={280} x2={460} y={80} left="fixed" right="fixed" names={['', '']} />
        {[280, 370, 460].map(x => <Circle key={x} cx={x} cy={80} r={6} c="red" sw={2} fill="paper" />)}
        <Text x={370} y={130} a="middle" s={12}>3 rotules nécessaires</Text>
        <Bars x={130} y={150} w={240} h={80} max={40} ticks={[20, 40]} unit="" s={11} bars={[
          { label: 'appuis simples', v: 18.45, c: 'grey' },
          { label: 'bi-encastrée', v: 36.9, c: 'green' },
        ]} />
      </g>
    ),
    notes: ['M_p = 147,6 kN·m, L = 8 m : l’hyperstaticité double la charge de ruine.'],
    caption: 'IPE 300 S235 de 8 m : réserve apportée par la redistribution.',
  },
  {
    id: 'etage-souple',
    title: 'Mécanisme d’étage souple',
    steps: ['real_examples'],
    h: 270,
    draw: () => (
      <g>
        <Rect x={20} y={250} w={460} h={10} c="ink" sw={0} fill="pat:soil" />
        <Rect x={150} y={40} w={200} h={150} c="ink" sw={2} fill="pat:brick" />
        {[0, 1, 2, 3, 4].map(i => <Line key={i} x1={150} y1={40 + i * 30} x2={350} y2={40 + i * 30} c="ink" w={1.4} />)}
        {[150, 250, 350].map(x => <Path key={x} d={`M ${x - 30} 250 C ${x - 30} 220, ${x} 220, ${x} 190`} c="ink" w={4} />)}
        {[150, 250, 350].map(x => (
          <g key={x}>
            <Circle cx={x} cy={192} r={6} c="red" sw={2} fill="paper" />
            <Circle cx={x - 30} cy={248} r={6} c="red" sw={2} fill="paper" />
          </g>
        ))}
        <Text x={250} y={30} a="middle" s={12}>étages courants rigides (remplissages)</Text>
        <Text x={410} y={226} s={12} c="red" b>{'RDC ouvert :\nrotules en tête\net en pied'}</Text>
        <Text x={60} y={150} a="middle" s={13} c="red" b>μ ≈ 1,5</Text>
      </g>
    ),
    notes: ['Toute la déformation se concentre dans le rez-de-chaussée : la ductilité globale est bien plus faible que la demande sismique.'],
    caption: 'Immeuble R+6 à rez-de-chaussée commercial ouvert.',
  },
];
