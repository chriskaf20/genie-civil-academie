// Plates — Module 6 · Statique & mécanique des structures
import { Arrow, Beam, Dim, Fixed, Force, Line, Load, Moment, Pin, Poly, Rect, Roller, Text } from '../../components/figures/ink.jsx';
import { BeamScheme, ForceDiagram } from '../../components/figures/kit.jsx';
import { Angle, Circle, Dot } from '../../components/figures/kit.jsx';

/** One triangular load and its resultant, drawn between x1 and x2. */
function TriangleCase({ x1, x2, rising, type }) {
  const L = x2 - x1;
  const a = rising ? (2 * L) / 3 : L / 3;
  const xq = x1 + a;
  return (
    <g>
      <Line x1={x1} y1={105} x2={x2} y2={105} w={2.6} />
      <Load x1={x1} x2={x2} y={105} h1={rising ? 0 : 62} h2={rising ? 62 : 0} n={8} label="q" />
      <Dim x1={x1} y1={122} x2={x2} y2={122} label="L" side={-1} />
      <Text x={(x1 + x2) / 2} y={158} a="middle" s={13} c="mute">résultante équivalente</Text>
      <Line x1={x1} y1={215} x2={x2} y2={215} w={2.6} />
      <Force x={xq} y={213} len={44} c="red" label="Q = qL/2" s={15} />
      <Dim x1={x1} y1={232} x2={xq} y2={232} label="a" side={-1} />
      <Dim x1={xq} y1={232} x2={x2} y2={232} label="b" side={-1} />
      <Text x={x1} y={275} s={17}>{`Type ${type} : a = ${rising ? '2L/3' : 'L/3'}`}</Text>
      <Text x={x1 + 62} y={297} s={17}>{`b = ${rising ? 'L/3' : '2L/3'}`}</Text>
    </g>
  );
}

const supports = [
  { cx: 62, title: 'Appui simple', count: '1 inconnue\nR_y' },
  { cx: 187, title: 'Rotule', count: '2 inconnues\nR_x, R_y' },
  { cx: 312, title: 'Encastrement', count: '3 inconnues\nR_x, R_y, M' },
  { cx: 437, title: 'Glissière', count: '2 inconnues\nR_y, M' },
];

export default [
  {
    id: 'appuis',
    title: 'Appuis et réactions',
    steps: ['theory'],
    formula: '\\sum F_x = 0 \\qquad \\sum F_y = 0 \\qquad \\sum M = 0',
    h: 262,
    draw: () => (
      <g>
        {supports.map(({ cx, title, count }) => (
          <Text key={title} x={cx} y={26} a="middle" s={16} b c="ink">{title}</Text>
        ))}
        {/* Appui simple */}
        <Beam x1={20} x2={104} y={95} />
        <Roller x={62} y={99.5} />
        <Arrow x1={62} y1={178} x2={62} y2={142} c="red" />
        <Text x={68} y={172} s={15} c="red">R_y</Text>
        {/* Rotule */}
        <Beam x1={145} x2={229} y={95} />
        <Pin x={187} y={99.5} />
        <Arrow x1={187} y1={178} x2={187} y2={142} c="red" />
        <Text x={193} y={172} s={15} c="red">R_y</Text>
        <Arrow x1={140} y1={152} x2={172} y2={152} c="red" />
        <Text x={140} y={145} s={15} c="red">R_x</Text>
        {/* Encastrement */}
        <Fixed x={272} y={95} h={64} />
        <Beam x1={272} x2={356} y={95} />
        <Arrow x1={292} y1={170} x2={292} y2={105} c="red" />
        <Text x={298} y={165} s={15} c="red">R_y</Text>
        <Arrow x1={300} y1={132} x2={332} y2={132} c="red" />
        <Text x={336} y={137} s={15} c="red">R_x</Text>
        <Moment x={284} y={95} r={24} a1={200} a2={330} label="M" lx={306} ly={62} />
        {/* Glissière : coulisse le long de la poutre, bloque la translation verticale et la rotation */}
        <Line x1={386} y1={74} x2={458} y2={74} w={2.4} />
        <Line x1={386} y1={116} x2={458} y2={116} w={2.4} />
        <Rect x={434} y={78} w={20} h={34} fill="~ink" />
        <Beam x1={390} x2={434} y={95} />
        <Arrow x1={407} y1={146} x2={449} y2={146} c="ink" w={1.4} hs={7} both />
        <Text x={428} y={162} a="middle" s={11} c="mute">libre</Text>
        <Arrow x1={444} y1={200} x2={444} y2={170} c="red" />
        <Text x={437} y={196} s={15} c="red" a="end">R_y</Text>
        <Moment x={444} y={95} r={34} a1={-62} a2={62} label="M" lx={480} ly={66} />
        {supports.map(({ cx, count }) => (
          <Text key={count} x={cx} y={222} a="middle" s={13.5} c="txt" lh={1.15}>{count}</Text>
        ))}
      </g>
    ),
    notes: [
      'À chaque déplacement bloqué correspond une réaction (force ou moment).',
      'Structure plane isostatique : $r - s = 3m$ (r réactions, s relâchements, m barres).',
    ],
    caption: 'Les quatre liaisons planes usuelles et les inconnues de réaction qu’elles introduisent.',
  },
  {
    id: 'charge-triangulaire',
    title: 'Charge triangulaire',
    steps: ['formulas'],
    formula: 'Q = \\frac{q\\,L}{2}',
    h: 305,
    draw: () => (
      <g>
        <TriangleCase x1={28} x2={222} rising type={1} />
        <Line x1={250} y1={30} x2={250} y2={290} c="grey" w={1} dash="4 6" />
        <TriangleCase x1={278} x2={472} rising={false} type={2} />
      </g>
    ),
    notes: [
      'a : depuis la gauche · b : depuis la droite.',
      'Aire = base × hauteur / 2, donc la résultante vaut $Q = qL/2$.',
      'Q passe par le centre de gravité du triangle : au tiers de la portée, côté le plus chargé.',
    ],
    caption: 'Une charge triangulaire est remplacée par sa résultante pour calculer les réactions.',
  },
  {
    id: 'efforts-v-m',
    title: 'Poutre sur deux appuis : V(x) et M(x)',
    steps: ['diagrams'],
    formula: ['V_{max} = \\frac{qL}{2}', 'M_{max} = \\frac{qL^2}{8}'],
    h: 442,
    draw: () => {
      const x1 = 80;
      const x2 = 430;
      const xm = (x1 + x2) / 2;
      const parabola = Array.from({ length: 41 }, (_, i) => {
        const t = i / 40;
        return [x1 + (x2 - x1) * t, 330 + 76 * 4 * t * (1 - t)];
      });
      return (
        <g>
          <Beam x1={x1} x2={x2} y={95} />
          <Load x1={x1} x2={x2} y={90.5} h1={40} n={14} label="q" />
          <Pin x={x1} y={99.5} />
          <Roller x={x2} y={99.5} />
          <Text x={x1 - 26} y={100} s={17} b>A</Text>
          <Text x={x2 + 14} y={100} s={17} b>B</Text>
          <Arrow x1={x1} y1={172} x2={x1} y2={135} c="red" />
          <Arrow x1={x2} y1={172} x2={x2} y2={135} c="red" />
          <Text x={x1 + 8} y={166} s={15} c="red">R_A = qL/2</Text>
          <Text x={x2 - 8} y={166} s={15} c="red" a="end">R_B = qL/2</Text>
          <Dim x1={x1} y1={190} x2={x2} y2={190} label="L" side={-1} />
          {/* V(x) */}
          <Text x={18} y={258} s={17} b c="ink">V(x)</Text>
          <Poly pts={[[x1, 255], [x1, 218], [x2, 292], [x2, 255]]} c="ink" w={0} fill="~ink" />
          <Line x1={x1} y1={255} x2={x2} y2={255} c="txt" w={1.6} />
          <Line x1={x1} y1={218} x2={x2} y2={292} c="ink" w={2.4} />
          <Line x1={x1} y1={218} x2={x1} y2={255} c="ink" w={2.4} />
          <Line x1={x2} y1={255} x2={x2} y2={292} c="ink" w={2.4} />
          <Text x={x1 + 6} y={214} s={15}>+qL/2</Text>
          <Text x={x2 - 6} y={309} s={15} a="end">−qL/2</Text>
          {/* M(x) */}
          <Text x={18} y={333} s={17} b c="ink">M(x)</Text>
          <Poly pts={[[x1, 330], ...parabola, [x2, 330]]} c="ink" w={0} fill="~red" />
          <Line x1={x1} y1={330} x2={x2} y2={330} c="txt" w={1.6} />
          <Poly pts={parabola} c="red" w={2.4} />
          <Line x1={xm} y1={232} x2={xm} y2={406} c="grey" w={1.2} dash="5 5" />
          <Text x={xm + 8} y={250} s={13} c="mute">V = 0</Text>
          <Text x={xm} y={424} a="middle" s={16} c="red">{'M_{max} = qL²/8 (en x = L/2)'}</Text>
        </g>
      );
    },
    notes: [
      '$V(x) = q\\left(\\frac{L}{2} - x\\right)$ : droite qui s’annule à mi-portée.',
      '$M(x) = \\frac{qx}{2}(L - x)$ : parabole, maximale là où V = 0.',
      'Le moment est tracé du côté des fibres tendues (en bas).',
    ],
    caption: 'Effort tranchant et moment fléchissant d’une poutre bi-appuyée sous charge uniforme.',
  },
  {
    id: 'poutre-q-et-p',
    title: 'Poutre de 8 m : charge répartie et charge ponctuelle',
    steps: ['stepbystep'],
    formula: ['R_A = \\frac{10 \\times 8 \\times 4 + 30 \\times 5}{8} = 58{,}75\\ \\text{kN}', 'M(3) = 131{,}25\\ \\text{kN·m}'],
    h: 440,
    draw: () => {
      const x1 = 80;
      const x2 = 430;
      const L = 8;
      const V = t => { const x = t * L; return 58.75 - 10 * x - (x > 3 ? 30 : 0); };
      const M = t => { const x = t * L; return 58.75 * x - 5 * x * x - (x > 3 ? 30 * (x - 3) : 0); };
      const xp = x1 + ((x2 - x1) * 3) / L;
      return (
        <g>
          <BeamScheme x1={x1} x2={x2} y={90} loads={[{ type: 'udl', h: 30, label: 'q' }, { type: 'point', at: 3 / L, len: 56, label: 'P = 30 kN' }]} span="L = 8 m" spanY={130} />
          <Text x={x1} y={40} s={13} b>q = 10 kN/m</Text>
          <Dim x1={x1} y1={60} x2={xp} y2={60} label="3 m" s={13} />
          <ForceDiagram x1={x1} x2={x2} y0={225} f={V} scale={0.9} down={false} name="V (kN)" n={160}
            marks={[{ t: 0, label: '+58,75', dx: 28 }, { t: 3 / L - 0.01, label: '+28,75', dx: -6 }, { t: 3 / L + 0.01, label: '−1,25', dx: 26, dy: 4 }, { t: 1, label: '−51,25', dx: -30 }]} />
          <ForceDiagram x1={x1} x2={x2} y0={300} f={M} scale={0.75} c="red" fill="~red" name="M (kN·m)" n={160}
            marks={[{ t: 3 / L, label: 'M_{max} = 131,25' }]} />
          <Line x1={xp} y1={95} x2={xp} y2={410} c="grey" w={1.2} dash="5 5" />
        </g>
      );
    },
    notes: ['L’effort tranchant change de signe sous la charge P : c’est là que le moment est maximal.'],
    caption: 'Réactions, effort tranchant et moment fléchissant (moment tracé côté fibres tendues).',
  },
  {
    id: 'portique-hangar',
    title: 'Portique de hangar : charges de calcul',
    steps: ['practical_case'],
    formula: ['q_{ELU} = 1{,}35 \\times 15 + 1{,}5 \\times 8 = 32{,}25\\ \\text{kN/m}'],
    h: 330,
    draw: () => (
      <g>
        <Line x1={90} y1={270} x2={90} y2={110} w={5} />
        <Line x1={410} y1={270} x2={410} y2={110} w={5} />
        <Line x1={90} y1={110} x2={410} y2={110} w={5} />
        <Pin x={90} y={272} />
        <Pin x={410} y={272} />
        <Load x1={90} x2={410} y={104} h1={34} n={14} label="q_{ELU} = 32,25 kN/m" la="end" lx={410} ly={58} />
        {[130, 170, 210, 250].map(y => <Arrow key={y} x1={40} y1={y} x2={84} y2={y} c="ink" w={1.8} hs={8} />)}
        <Line x1={40} y1={115} x2={40} y2={265} c="ink" w={2} />
        <Text x={8} y={100} s={13} c="ink">{'w = 5,4\nkN/m'}</Text>
        <Dim x1={90} y1={305} x2={410} y2={305} label="24 m" side={-1} s={14} />
        <Dim x1={450} y1={270} x2={450} y2={110} label="9 m" side={-1} s={14} />
        <Arrow x1={90} y1={320} x2={90} y2={292} c="red" w={2.2} />
        <Arrow x1={410} y1={320} x2={410} y2={292} c="red" w={2.2} />
        <Text x={100} y={318} s={13} c="red">387 kN</Text>
        <Text x={400} y={318} a="end" s={13} c="red">387 kN</Text>
      </g>
    ),
    notes: ['Ordre de grandeur : le moment de la traverse est encadré par qL²/8 = 2 322 kN·m (traverse articulée) ; la continuité avec les poteaux le réduit.'],
    caption: 'Hangar de 24 m bi-articulé : charges verticales (toiture + neige) et vent latéral.',
  },
  {
    id: 'isostaticite',
    title: 'Isostatique, hyperstatique ou mécanisme ?',
    steps: ['theory', 'formulas'],
    formula: ['r - s = 3m \\ \\text{(isostatique)} \\qquad h = r - s - 3m'],
    h: 260,
    draw: () => (
      <g>
        <BeamScheme x1={40} x2={200} y={60} left="pin" right="roller" names={['', '']} />
        <Text x={340} y={58} s={13} b>{'r = 3 : h = 0'}</Text>
        <Text x={340} y={76} s={12} c="green">isostatique</Text>
        <BeamScheme x1={40} x2={200} y={140} left="fixed" right="roller" names={['', '']} />
        <Text x={340} y={138} s={13} b>{'r = 4 : h = 1'}</Text>
        <Text x={340} y={156} s={12} c="orange">hyperstatique</Text>
        <BeamScheme x1={40} x2={200} y={220} left="roller" right="roller" names={['', '']} />
        <Arrow x1={210} y1={212} x2={250} y2={212} c="red" w={2} hs={8} />
        <Text x={340} y={218} s={13} b>{'r = 2 : h = −1'}</Text>
        <Text x={340} y={236} s={12} c="red">mécanisme : la poutre glisse</Text>
      </g>
    ),
    notes: ['Trois équations d’équilibre en plan : avec moins de trois inconnues d’appui bien placées, la structure est instable ; avec plus, il faut des équations de déformation.'],
    caption: 'Même poutre, trois façons de la tenir.',
  },
  {
    id: 'varignon',
    title: 'Théorème de Varignon',
    steps: ['theory'],
    formula: ['M_A(\\vec F) = F_y\\,d_x - F_x\\,d_y \\quad (\\text{sens trigonométrique positif})'],
    h: 250,
    draw: () => (
      <g>
        <Dot x={80} y={200} r={5} />
        <Text x={70} y={218} a="end" s={14} b>A</Text>
        <Dot x={300} y={120} r={4} c="red" />
        <Arrow x1={300} y1={120} x2={380} y2={60} c="red" w={3} hs={10} />
        <Text x={386} y={58} s={14} c="red" b>F</Text>
        <Arrow x1={300} y1={120} x2={380} y2={120} c="green" w={2.2} hs={8} />
        <Arrow x1={300} y1={120} x2={300} y2={60} c="water" w={2.2} hs={8} />
        <Text x={384} y={124} s={12} c="green" b>{'F_x'}</Text>
        <Text x={306} y={58} s={12} c="water" b>{'F_y'}</Text>
        <Line x1={300} y1={120} x2={140} y2={240} c="grey" w={1.2} dash="6 4" />
        <Line x1={80} y1={200} x2={300} y2={200} c="grey" w={1} dash="3 3" />
        <Line x1={300} y1={200} x2={300} y2={120} c="grey" w={1} dash="3 3" />
        <Text x={190} y={216} a="middle" s={12}>{'d_x'}</Text>
        <Text x={306} y={164} s={12}>{'d_y'}</Text>
        <Text x={160} y={60} a="middle" s={12} c="mute">{'le moment de la résultante\n= somme des moments\ndes composantes'}</Text>
      </g>
    ),
    notes: ['On décompose une force inclinée en composantes horizontale et verticale, dont les bras de levier se lisent directement sur les cotes ; ici F_y fait tourner dans le sens trigonométrique, F_x dans le sens horaire.'],
    caption: 'Calculer un moment sans chercher la distance perpendiculaire à la force inclinée.',
  },
  {
    id: 'console-encastree',
    title: 'Console encastrée sous une charge en bout',
    steps: ['simple_examples', 'formulas'],
    formula: ['R_{Ay} = P = 20\\ \\text{kN} \\qquad M_A = -P\\,L = -80\\ \\text{kN·m}'],
    h: 230,
    draw: () => (
      <g>
        <BeamScheme x1={80} x2={400} y={100} left="fixed" right="free" loads={[{ type: 'point', at: 1, len: 50, label: 'P = 20 kN' }]} names={['A', 'B']} span="L = 4 m" spanY={150} />
        <Arrow x1={80} y1={200} x2={80} y2={110} c="green" w={2.6} hs={9} />
        <Text x={88} y={190} s={13} c="green" b>{'R_{Ay} = 20 kN'}</Text>
        <Moment x={80} y={100} r={34} a1={160} a2={20} c="green" label="" />
        <Text x={40} y={46} s={13} c="green" b>{'M_A = 80 kN·m'}</Text>
      </g>
    ),
    notes: ['L’encastrement reprend à la fois la force (réaction verticale) et le moment P·L qui tend à faire tourner la console.'],
    caption: 'Les trois équations d’équilibre suffisent : console isostatique.',
  },
  {
    id: 'portique-encastre',
    title: 'Portique encastré en pied : 3 fois hyperstatique',
    steps: ['simple_examples'],
    formula: ['n_s = r - s - 3m = 6 - 0 - 3 = 3'],
    h: 250,
    draw: () => (
      <g>
        <Line x1={120} y1={210} x2={120} y2={60} c="ink" w={5} />
        <Line x1={380} y1={210} x2={380} y2={60} c="ink" w={5} />
        <Line x1={120} y1={60} x2={380} y2={60} c="ink" w={5} />
        <Rect x={98} y={210} w={44} h={12} c="ink" sw={1.6} fill="pat:hatch" />
        <Rect x={358} y={210} w={44} h={12} c="ink" sw={1.6} fill="pat:hatch" />
        {[120, 380].map(x => (
          <g key={x}>
            <Arrow x1={x} y1={246} x2={x} y2={222} c="green" w={2} hs={7} />
            <Arrow x1={x - 34} y1={232} x2={x - 10} y2={232} c="green" w={2} hs={7} />
            <Moment x={x} y={216} r={20} a1={200} a2={340} c="green" />
          </g>
        ))}
        <Text x={250} y={120} a="middle" s={13} b>{'r = 3 + 3 = 6'}</Text>
        <Text x={250} y={142} a="middle" s={12}>un seul corps rigide (m = 1)</Text>
        <Text x={250} y={170} a="middle" s={13} c="red" b>6 − 3 = 3 inconnues de trop</Text>
      </g>
    ),
    notes: ['Montants et traverse soudés rigidement forment un seul corps : 6 réactions pour 3 équations.'],
    caption: 'Chaque encastrement fournit deux forces et un moment.',
  },
  {
    id: 'treillis-noeuds',
    title: 'Méthode des nœuds sur un treillis triangulaire',
    steps: ['simple_examples', 'formulas'],
    formula: ['N_{AC} = \\frac{-R_A}{\\sin 45°} = -28{,}3\\ \\text{kN} \\qquad N_{AB} = +20\\ \\text{kN}'],
    h: 250,
    draw: () => (
      <g>
        <Poly pts={[[90, 200], [410, 200], [250, 40]]} c="ink" w={3} close />
        <Pin x={90} y={204} />
        <Roller x={410} y={204} />
        <Arrow x1={250} y1={0} x2={250} y2={36} c="red" w={2.6} hs={9} />
        <Text x={258} y={18} s={13} c="red" b>P = 40 kN</Text>
        <Text x={150} y={110} a="end" s={13} c="red" b>−28,3 (compr.)</Text>
        <Text x={350} y={110} s={13} c="red" b>−28,3</Text>
        <Text x={250} y={194} a="middle" s={13} c="water" b>+20 (traction)</Text>
        <Arrow x1={90} y1={246} x2={90} y2={224} c="green" w={2} hs={7} />
        <Arrow x1={410} y1={246} x2={410} y2={224} c="green" w={2} hs={7} />
        <Text x={98} y={244} s={12} c="green">20 kN</Text>
        <Text x={402} y={244} a="end" s={12} c="green">20 kN</Text>
        <Angle cx={90} cy={200} r={36} a1={-45} a2={0} label="45°" s={12} c="ink" />
        <Text x={74} y={196} a="end" s={13} b>A</Text>
        <Text x={430} y={196} s={13} b>B</Text>
        <Text x={250} y={34} a="end" s={13} b>C </Text>
      </g>
    ),
    notes: ['On isole un nœud et on écrit ΣFx = 0 et ΣFy = 0 : les barres inclinées sont comprimées, l’entrait tendu.'],
    caption: 'Efforts normaux dans une ferme triangulée chargée au faîtage.',
  },
  {
    id: 'portique-vent',
    title: 'Portique bi-articulé sous charge et vent',
    steps: ['real_examples'],
    formula: ['R_{Ay} = R_{By} = \\frac{40 \\times 12}{2} = 240\\ \\text{kN} \\qquad R_{Ax} + R_{Bx} = 8 \\times 6 = 48\\ \\text{kN}'],
    h: 270,
    draw: () => (
      <g>
        <Line x1={130} y1={220} x2={130} y2={70} c="ink" w={5} />
        <Line x1={400} y1={220} x2={400} y2={70} c="ink" w={5} />
        <Line x1={130} y1={70} x2={400} y2={70} c="ink" w={5} />
        <Pin x={130} y={224} />
        <Pin x={400} y={224} />
        {Array.from({ length: 10 }, (_, i) => 140 + i * 28).map(x => <Arrow key={x} x1={x} y1={34} x2={x} y2={64} c="ink" w={1.6} hs={6} />)}
        <Text x={265} y={26} a="middle" s={13} b>G = 40 kN/m</Text>
        {Array.from({ length: 6 }, (_, i) => 80 + i * 26).map(y => <Arrow key={y} x1={80} y1={y} x2={124} y2={y} c="water" w={1.6} hs={6} />)}
        <Text x={74} y={130} a="end" s={13} c="water" b>{'W = 8\nkN/m'}</Text>
        <Text x={265} y={160} a="middle" s={12}>12 m</Text>
        <Text x={410} y={150} s={12}>6 m</Text>
        <Dot x={130} y={70} r={6} c="red" />
        <Dot x={400} y={70} r={6} c="red" />
        <Text x={265} y={100} a="middle" s={12} c="red" b>moments maximaux aux angles</Text>
        <Text x={265} y={258} a="middle" s={12}>pieds articulés : moment nul en base, 1 fois hyperstatique</Text>
      </g>
    ),
    notes: ['Le vent crée un couple qui augmente une réaction verticale et diminue l’autre ; le partage des réactions horizontales demande un calcul hyperstatique.'],
    caption: 'Portique acier R+3 : premières réactions à la main avant le calcul complet.',
  },
];
