// Plates — Module 9 · Contraintes normales & moments fléchissants
import { Arrow, BeamScheme, ForceDiagram, ISection, Line, Path, Poly, Rect, Text } from '../../components/figures/kit.jsx';

// Bent segment (sagging): centre of curvature above the beam.
const C = [130, -250];
const at = (r, deg) => [C[0] + r * Math.sin((deg * Math.PI) / 180), C[1] + r * Math.cos((deg * Math.PI) / 180)];
const arcPts = (r, a, b) => Array.from({ length: 33 }, (_, k) => at(r, a + ((b - a) * k) / 32));
const SEG = [...arcPts(340, -16, 16), ...arcPts(400, 16, -16)];

export default [
  {
    id: 'flexion-navier',
    title: 'Flexion : contraintes normales dans la section',
    steps: ['theory'],
    formula: ['\\sigma(y) = \\frac{M\\,y}{I}', '\\sigma_{max} = \\frac{M\\,v}{I} = \\frac{M}{W_{el}}'],
    h: 250,
    draw: () => (
      <g>
        <Poly pts={SEG} c="ink" w={2.4} fill="~ink" close />
        {[-8, 0, 8].map(t => {
          const [p, q] = [at(340, t), at(400, t)];
          return <Line key={t} x1={p[0]} y1={p[1]} x2={q[0]} y2={q[1]} c="ink" w={1.6} />;
        })}
        <Poly pts={arcPts(370, -16, 16)} c="grey" w={1.2} dash="5 4" />
        <Text x={130} y={64} a="middle" s={12} c="red">fibres comprimées (raccourcies)</Text>
        <Text x={130} y={172} a="middle" s={12} c="water">fibres tendues (allongées)</Text>
        <Text x={130} y={200} a="middle" s={12} c="mute">moment M &gt; 0 (flexion positive)</Text>
        <Text x={130} y={220} a="middle" s={12} c="mute">les sections droites restent planes</Text>
        <Rect x={290} y={70} w={50} h={120} c="ink" sw={2.2} fill="~ink" />
        <Line x1={280} y1={130} x2={490} y2={130} c="grey" w={1.2} dash="5 4" />
        <Text x={490} y={124} a="end" s={11} c="mute">axe neutre</Text>
        <Line x1={290} y1={160} x2={340} y2={160} c="grey" w={1} dash="3 3" />
        <Arrow x1={280} y1={130} x2={280} y2={159} c="txt" w={1.2} hs={5} both />
        <Text x={274} y={150} a="end" s={13} b>y</Text>
        <Line x1={400} y1={70} x2={400} y2={190} c="txt" w={1.6} />
        <Poly pts={[[400, 70], [355, 70], [400, 130]]} c="red" w={1.8} fill="~red" close />
        <Poly pts={[[400, 130], [445, 190], [400, 190]]} c="water" w={1.8} fill="~water" close />
        <Line x1={400} y1={160} x2={422.5} y2={160} c="water" w={1.6} />
        <Text x={428} y={164} s={12} c="water">σ(y)</Text>
        <Text x={352} y={60} a="end" s={12} c="red">compression</Text>
        <Text x={446} y={206} a="end" s={12} c="water">traction</Text>
        <Arrow x1={470} y1={131} x2={470} y2={189} c="txt" w={1.2} hs={5} both />
        <Text x={476} y={166} s={13} b>v</Text>
      </g>
    ),
    notes: [
      'Navier-Bernoulli : les sections planes restent planes, la déformation varie linéairement avec la distance y à l’axe neutre.',
      'Avec Hooke ($\\sigma = E\\varepsilon$), la contrainte est elle aussi linéaire : nulle sur l’axe neutre, maximale aux fibres extrêmes.',
    ],
    caption: 'Flexion simple : compression d’un côté de l’axe neutre, traction de l’autre.',
  },
  {
    id: 'poutre-6m',
    title: 'Poutre de 6 m : efforts et contrainte',
    steps: ['formulas', 'stepbystep'],
    formula: ['M_{max} = \\frac{qL^2}{8} = 112{,}5\\ \\text{kN·m}', 'W_{el} = \\frac{bh^2}{6} = 12\\,500\\ \\text{cm}^3 \\Rightarrow \\sigma = 9{,}0\\ \\text{MPa}'],
    h: 330,
    draw: () => (
      <g>
        <BeamScheme x1={90} x2={370} y={80} loads={[{ type: 'udl', h: 34, label: 'q = 25 kN/m' }]} span="L = 6 m" spanY={118} />
        <ForceDiagram x1={90} x2={370} y0={190} f={t => 0.5 - t} scale={80} down={false} name="V (kN)" marks={[{ t: 0, label: '+75', dx: 22 }, { t: 1, label: '−75', dx: -22 }]} />
        <ForceDiagram x1={90} x2={370} y0={255} f={t => 4 * t * (1 - t)} scale={50} c="red" fill="~red" name="M (kN·m)" marks={[{ t: 0.5, label: '112,5' }]} />
        <Text x={428} y={140} a="middle" s={12} b>30 × 50 cm</Text>
        <Rect x={410} y={150} w={36} h={60} c="ink" sw={2} fill="pat:concrete" />
        <Line x1={470} y1={150} x2={470} y2={210} c="txt" w={1.4} />
        <Poly pts={[[470, 150], [452, 150], [470, 180]]} c="red" w={1.4} fill="~red" close />
        <Poly pts={[[470, 180], [488, 210], [470, 210]]} c="water" w={1.4} fill="~water" close />
        <Text x={466} y={232} a="middle" s={11}>± 9,0 MPa</Text>
      </g>
    ),
    notes: [
      '$V_{max} = qL/2 = 75$ kN aux appuis ; $M_{max}$ à mi-portée, là où V s’annule.',
      'Béton armé : la fibre tendue fissure et les armatures reprennent la traction ; la compression (9,0 MPa) reste inférieure à $f_{cd} = 16{,}7$ MPa.',
    ],
    caption: 'Charge uniforme : V linéaire, M parabolique ; la contrainte maximale se lit avec le module de résistance.',
  },
  {
    id: 'exemples-rdm',
    title: 'Traction, inertie, flèche : trois calculs rapides',
    steps: ['simple_examples'],
    formula: ['\\sigma = \\frac{N}{A}', 'I = \\frac{b\\,h^3}{12}', 'w = \\frac{5qL^4}{384EI}'],
    h: 240,
    draw: () => (
      <g>
        <Text x={20} y={20} s={13} b>a)</Text>
        <Rect x={70} y={60} w={22} h={110} c="ink" sw={2} fill="~grey" />
        <Arrow x1={81} y1={60} x2={81} y2={26} c="red" w={2.4} hs={9} />
        <Arrow x1={81} y1={170} x2={81} y2={204} c="red" w={2.4} hs={9} />
        <Text x={96} y={40} s={12} c="red">N = 350 kN</Text>
        <Text x={98} y={120} s={12}>A = 15,08 cm²</Text>
        <Text x={85} y={226} a="middle" s={12} c="green" b>σ = 232 MPa ≤ 235</Text>
        <Text x={180} y={20} s={13} b>b)</Text>
        <Rect x={230} y={50} w={40} h={96} c="ink" sw={2} fill="~ink" />
        <Line x1={218} y1={98} x2={282} y2={98} c="grey" w={1.2} dash="5 4" />
        <Text x={286} y={102} s={12} c="mute">z</Text>
        <Text x={250} y={164} a="middle" s={12}>b = 25 cm</Text>
        <Text x={276} y={66} s={12}>h = 60 cm</Text>
        <Text x={250} y={196} a="middle" s={12}>I = bh³ / 12</Text>
        <Text x={250} y={214} a="middle" s={12} c="green" b>= 450 000 cm⁴</Text>
        <Text x={344} y={20} s={13} b>c)</Text>
        <BeamScheme x1={360} x2={470} y={80} loads={[{ type: 'udl', h: 22, label: '' }]} names={['', '']} />
        <Path d="M 360 84 Q 415 120 470 84" c="red" w={2} dash="6 4" />
        <Text x={415} y={140} a="middle" s={12} c="red" b>w = 4,6 mm</Text>
        <Text x={415} y={158} a="middle" s={12} c="green">≤ L/250 = 20 mm</Text>
        <Text x={415} y={184} a="middle" s={11} c="mute">IPE 300, L = 5 m, q = 10 kN/m</Text>
      </g>
    ),
    notes: ['b) attention aux unités : 1 cm⁴ = 10⁴ mm⁴, donc 450 000 cm⁴ = 4,5 × 10⁹ mm⁴.'],
    caption: 'Contrainte de traction, moment d’inertie d’un rectangle, flèche d’un profilé.',
  },
  {
    id: 'plancher-hea360',
    title: 'Poutre de plancher de bureaux (8 m)',
    steps: ['practical_case'],
    formula: ['q_{ELU} = (1{,}35 \\times 7 + 1{,}5 \\times 3{,}5) \\times 2{,}5 = 36{,}75\\ \\text{kN/m}', 'M_{Ed} = \\frac{36{,}75 \\times 8^2}{8} = 294\\ \\text{kN·m}'],
    h: 300,
    draw: () => (
      <g>
        <Rect x={40} y={90} w={280} h={60} c="orange" sw={0} fill="~orange" />
        {[60, 120, 180].map(y => (
          <g key={y}>
            <Line x1={40} y1={y} x2={320} y2={y} c={y === 120 ? 'red' : 'ink'} w={y === 120 ? 5 : 3.5} />
            <Rect x={35} y={y - 5} w={10} h={10} c="ink" sw={1.6} fill="txt" />
            <Rect x={315} y={y - 5} w={10} h={10} c="ink" sw={1.6} fill="txt" />
          </g>
        ))}
        <Text x={180} y={112} a="middle" s={12} c="red" b>poutre étudiée</Text>
        <Arrow x1={338} y1={91} x2={338} y2={149} c="txt" w={1.2} hs={5} both />
        <Text x={344} y={124} s={12}>2,5 m</Text>
        <Arrow x1={41} y1={205} x2={319} y2={205} c="txt" w={1.2} hs={6} both />
        <Text x={180} y={222} a="middle" s={12}>L = 8 m</Text>
        <Text x={180} y={244} a="middle" s={12} c="mute">G = 7 kN/m² ; Q = 3,5 kN/m² (bureaux)</Text>
        <Text x={430} y={48} a="middle" s={13} b>HEA 360</Text>
        <ISection cx={430} cy={112} b={90} h={105} tf={7} tw={4} />
        <Text x={430} y={186} a="middle" s={12}>{'W_{pl} = 2 088 cm³'}</Text>
        <Text x={430} y={204} a="middle" s={12}>{'I_y = 33 090 cm⁴'}</Text>
        <Text x={250} y={272} a="middle" s={13}>{'M_{Ed} = 294 kN·m → W_{pl,min} = 828 cm³ (taux 40 %)'}</Text>
        <Text x={250} y={292} a="middle" s={13} c="red" b>flèche ELS 20,1 mm ≤ L/300 = 26,7 mm : c’est elle qui gouverne</Text>
      </g>
    ),
    notes: ['Un IPE 360 suffirait en résistance ($W_{pl} = 1\\,019$ cm³) mais fléchirait d’environ 41 mm, au-delà de 26,7 mm.'],
    caption: 'Largeur de plancher reprise, combinaison ELU, moment, puis vérification de la flèche.',
  },
];
