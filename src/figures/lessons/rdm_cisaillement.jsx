// Plates — Module 9 · Effort tranchant, cisaillement & torsion
import { Arrow, BeamScheme, Circle, Dot, ForceDiagram, ISection, Line, Path, Poly, Rect, Text } from '../../components/figures/kit.jsx';

const range = (a, b, n) => Array.from({ length: n + 1 }, (_, k) => a + ((b - a) * k) / n);
// Parabolic τ of a rectangle (axis x0, mid-height ym, half-depth c, maximum m px).
const parab = (x0, ym, c, m) => [[x0, ym - c], ...range(ym - c, ym + c, 40).map(y => [x0 + m * (1 - ((y - ym) / c) ** 2), y]), [x0, ym + c]];
// τ in an I-section: small in the flanges, nearly uniform in the web.
const tauI = (x0, ym) => [[x0, ym - 90], ...range(ym - 90, ym + 90, 72).map(y => {
  const d = Math.abs(y - ym);
  return [d > 76 ? x0 + (5 * (90 - d)) / 14 : x0 + 40 + 8 * (1 - (d / 76) ** 2), y];
}), [x0, ym + 90]];

export default [
  {
    id: 'tau-sections',
    title: 'Contraintes de cisaillement dans les sections',
    steps: ['theory', 'diagrams'],
    formula: ['\\tau(y) = \\frac{V\\,S(y)}{I\\,b(y)}'],
    h: 270,
    draw: () => (
      <g>
        <Text x={100} y={36} a="middle" s={13} b>rectangle</Text>
        <Rect x={40} y={50} w={60} h={180} c="ink" sw={2.2} fill="~ink" />
        <Line x1={30} y1={140} x2={190} y2={140} c="grey" w={1.1} dash="5 4" />
        <Line x1={120} y1={50} x2={120} y2={230} c="txt" w={1.4} />
        <Poly pts={parab(120, 140, 90, 60)} c="green" w={2} fill="~green" close />
        <Text x={186} y={136} s={12} c="green" b>{'τ_{max} = 1,5 V/A'}</Text>
        <Text x={330} y={36} a="middle" s={13} b>profilé en I</Text>
        <ISection cx={330} cy={140} b={110} h={180} tf={14} tw={8} />
        <Line x1={410} y1={50} x2={410} y2={230} c="txt" w={1.4} />
        <Poly pts={tauI(410, 140)} c="green" w={2} fill="~green" close />
        <Text x={490} y={44} a="end" s={11} c="mute">semelles : τ faible</Text>
        <Text x={425} y={254} a="middle" s={12} c="green" b>{'âme : τ ≈ V / (h_w t_w)'}</Text>
      </g>
    ),
    notes: [
      'Rectangle : τ nul aux fibres extrêmes, maximal à l’axe neutre (1,5 fois la moyenne V/A).',
      'Profilé en I : les semelles reprennent le moment, l’âme presque tout l’effort tranchant.',
    ],
    caption: 'La contrainte de cisaillement est maximale à l’axe neutre, là où la contrainte de flexion est nulle.',
  },
  {
    id: 'jourawski-200x500',
    title: 'Jourawski sur une section 200 × 500 mm',
    steps: ['stepbystep'],
    formula: ['\\tau(125) = \\frac{120\\,000 \\times 4{,}69 \\times 10^6}{2{,}083 \\times 10^9 \\times 200} = 1{,}35\\ \\text{MPa}'],
    h: 270,
    draw: () => (
      <g>
        <Rect x={90} y={50} w={72} h={45} c="orange" sw={0} fill="~orange" />
        <Rect x={90} y={50} w={72} h={180} c="ink" sw={2.2} />
        <Line x1={80} y1={95} x2={172} y2={95} c="orange" w={1.8} dash="6 4" />
        <Dot x={126} y={72.5} r={4} c="orange" />
        <Text x={168} y={78} s={12} c="orange" b>S</Text>
        <Line x1={40} y1={140} x2={330} y2={140} c="grey" w={1.1} dash="5 4" />
        <Text x={420} y={144} s={11} c="mute">axe neutre</Text>
        <Arrow x1={74} y1={139} x2={74} y2={96} c="txt" w={1.2} hs={5} both />
        <Text x={68} y={122} a="end" s={11}>125</Text>
        <Arrow x1={50} y1={139} x2={50} y2={73.5} c="orange" w={1.2} hs={5} both />
        <Text x={44} y={104} a="end" s={11} c="orange">187,5</Text>
        <Text x={126} y={250} a="middle" s={12}>b = 200 mm</Text>
        <Line x1={200} y1={50} x2={200} y2={230} c="txt" w={1.4} />
        <Poly pts={parab(200, 140, 90, 120)} c="green" w={2} fill="~green" close />
        <Line x1={200} y1={95} x2={290} y2={95} c="red" w={2} />
        <Dot x={290} y={95} r={4.5} c="red" />
        <Text x={296} y={90} s={12} c="red" b>τ(125) = 1,35 MPa</Text>
        <Text x={326} y={134} s={12} c="green" b>{'τ_{max} = 1,80 MPa'}</Text>
      </g>
    ),
    notes: [
      '$S(125) = 200 \\times 125 \\times 187{,}5 = 4{,}69 \\times 10^6$ mm³ : aire au-dessus de la coupe × distance de son centre à l’axe neutre.',
      'À l’axe neutre : $S = 200 \\times 250 \\times 125 = 6{,}25 \\times 10^6$ mm³, d’où $\\tau_{max} = 1{,}80$ MPa $= 1{,}5\\,V/A$.',
    ],
    caption: 'Partie de section au-dessus de la coupe, son moment statique et la contrainte τ correspondante.',
  },
  {
    id: 'torsion-flux',
    title: 'Torsion d’un arbre et flux de cisaillement',
    steps: ['formulas', 'simple_examples'],
    formula: ['\\tau_{max} = \\frac{16\\,T}{\\pi d^3}', 'q = \\frac{V S}{I} \\qquad s = \\frac{F}{q}'],
    h: 270,
    draw: () => (
      <g>
        <Circle cx={110} cy={130} r={75} c="ink" sw={2.4} fill="~grey" />
        <Dot x={110} y={130} r={3} />
        <Line x1={35} y1={130} x2={185} y2={130} c="grey" w={1} dash="4 4" />
        {[25, 50, 75].map(r => (
          <g key={r}>
            <Arrow x1={110 + r} y1={130} x2={110 + r} y2={130 - 0.4 * r} c="red" w={2} hs={6} />
            <Arrow x1={110 - r} y1={130} x2={110 - r} y2={130 + 0.4 * r} c="red" w={2} hs={6} />
          </g>
        ))}
        <Line x1={110} y1={130} x2={185} y2={100} c="red" w={1.2} dash="4 3" />
        <Path d="M 192.7 99.9 A 88 88 0 0 0 27.3 99.9" c="ink" w={2} />
        <Arrow x1={31.4} y1={88.6} x2={27.3} y2={99.9} c="ink" w={2} hs={9} />
        <Text x={110} y={34} a="middle" s={15} b>T</Text>
        <Text x={110} y={232} a="middle" s={12}>τ nul au centre, maximal en surface</Text>
        <Text x={110} y={252} a="middle" s={12} c="red" b>T = 2 kN·m, d = 60 mm → 47 MPa</Text>
        <Rect x={280} y={70} w={200} h={25} c="soil" sw={1.8} fill="pat:wood" />
        <Rect x={280} y={95} w={200} h={55} c="soil" sw={1.8} fill="pat:wood" />
        {[300, 340, 380, 420, 460].map(x => (
          <g key={x}>
            <Line x1={x} y1={64} x2={x} y2={120} c="txt" w={2.2} />
            <Rect x={x - 4} y={62} w={8} h={3} c="txt" sw={0} fill="txt" />
          </g>
        ))}
        <Arrow x1={341} y1={56} x2={379} y2={56} c="txt" w={1.2} hs={5} both />
        <Text x={360} y={50} a="middle" s={13} b>s</Text>
        <Arrow x1={470} y1={91} x2={436} y2={91} c="red" w={2} hs={7} />
        <Arrow x1={290} y1={100} x2={324} y2={100} c="red" w={2} hs={7} />
        <Text x={380} y={176} a="middle" s={12} c="red">{'glissement à l’interface : q = V·S / I'}</Text>
        <Text x={380} y={196} a="middle" s={12} b>{'espacement des clous : s = F / q'}</Text>
      </g>
    ),
    notes: ['Arbre plein : $\\tau_{max} = 16 \\times 2 \\times 10^6 / (\\pi \\times 60^3) = 47$ MPa ; poutre reconstituée : chaque connecteur reprend $F = q\\,s$.'],
    caption: 'À gauche, la torsion fait tourner les sections ; à droite, l’effort tranchant fait glisser les pièces assemblées.',
  },
  {
    id: 'ipe270-court',
    title: 'Poutre courte IPE 270 sous charge concentrée',
    steps: ['practical_case'],
    formula: ['V_{pl,Rd} = \\frac{A_v\\, f_y}{\\sqrt{3}} = \\frac{2\\,214 \\times 235}{\\sqrt{3}} = 300\\ \\text{kN}'],
    h: 300,
    draw: () => (
      <g>
        <BeamScheme x1={60} x2={360} y={80} loads={[{ type: 'point', at: 0.2, len: 56, label: '300 kN' }]} span="2,00 m" spanY={118} />
        <Arrow x1={61} y1={136} x2={119} y2={136} c="txt" w={1.2} hs={5} both />
        <Text x={126} y={140} s={12}>0,40 m</Text>
        <ForceDiagram x1={60} x2={360} y0={205} f={t => (t < 0.2 ? 240 : -60)} scale={0.18} down={false} name="V (kN)" n={200} marks={[{ t: 0.1, label: '+240' }, { t: 0.6, label: '−60' }]} />
        <Text x={430} y={52} a="middle" s={13} b>IPE 270 – S235</Text>
        <ISection cx={430} cy={120} b={58} h={110} tf={8} tw={5} />
        <Rect x={427.5} y={73} w={5} h={94} c="red" sw={1.2} fill="~red" />
        <Text x={430} y={196} a="middle" s={12} c="red">{'A_v = 2 214 mm²'}</Text>
        <Text x={250} y={272} a="middle" s={13} b>{'V_{Ed} / V_{pl,Rd} = 240 / 300 = 0,80 ≤ 1 ✓'}</Text>
        <Text x={250} y={292} a="middle" s={12} c="red">{'V_{Ed} dépasse 0,5 V_{pl,Rd} : interaction moment-tranchant à vérifier'}</Text>
      </g>
    ),
    notes: ['Charge près d’un appui : la réaction de cet appui vaut $300 \\times 1{,}6 / 2{,}0 = 240$ kN, c’est l’effort tranchant maximal.'],
    caption: 'L’âme (aire de cisaillement A_v) reprend l’effort tranchant ; la proximité de l’appui le rend prépondérant.',
  },
  {
    id: 'glissement-planches',
    title: 'Pourquoi il y a du cisaillement dans une poutre',
    steps: ['theory'],
    h: 250,
    draw: () => (
      <g>
        <Text x={120} y={24} a="middle" s={12} b>planches simplement posées</Text>
        <Path d="M 20 70 Q 120 100 220 70 L 220 86 Q 120 116 20 86 Z" c="soil" w={1.8} fill="~soil" />
        <Path d="M 26 92 Q 126 122 226 92 L 226 108 Q 126 138 26 108 Z" c="soil" w={1.8} fill="~soil" />
        <Path d="M 32 114 Q 132 144 232 114 L 232 130 Q 132 160 32 130 Z" c="soil" w={1.8} fill="~soil" />
        <Text x={120} y={180} a="middle" s={12} c="red">{'les planches glissent\nles unes sur les autres'}</Text>
        <Text x={370} y={24} a="middle" s={12} b>planches collées</Text>
        <Path d="M 270 70 Q 370 100 470 70 L 470 118 Q 370 148 270 118 Z" c="soil" w={2} fill="~soil" />
        {[86, 102].map(y => <Path key={y} d={`M 270 ${y} Q 370 ${y + 30} 470 ${y}`} c="red" w={1.4} dash="5 3" />)}
        <Text x={370} y={180} a="middle" s={12} c="green">{'la colle reprend le glissement :\nc’est la contrainte de cisaillement τ'}</Text>
      </g>
    ),
    notes: ['Une poutre monobloc empêche ce glissement : les contraintes tangentielles qui s’y développent sont maximales à l’axe neutre.'],
    caption: 'L’expérience des planches empilées.',
  },
  {
    id: 'ame-ipe300',
    title: 'Cisaillement dans l’âme d’un IPE 300',
    steps: ['simple_examples'],
    formula: ['\\tau \\approx \\frac{V}{h_w\\,t_w} = \\frac{120\\,000}{278{,}6 \\times 7{,}1} = 61\\ \\text{MPa} < \\frac{f_y}{\\sqrt 3} = 136\\ \\text{MPa}'],
    h: 230,
    draw: () => (
      <g>
        <ISection cx={150} cy={115} b={80} h={170} tf={10} tw={6} />
        <Rect x={147} y={40} w={6} h={150} c="red" sw={1.6} fill="~red" />
        {[60, 90, 120, 150, 175].map(y => <Arrow key={y} x1={150} y1={y + 10} x2={150} y2={y} c="red" w={1.6} hs={5} />)}
        <Text x={260} y={90} s={13} b>{'h_w = 278,6 mm\nt_w = 7,1 mm\nV = 120 kN'}</Text>
        <Text x={260} y={180} s={13} c="red" b>τ ≈ 61 MPa</Text>
      </g>
    ),
    notes: ['L’âme mince reprend presque tout l’effort tranchant, avec une contrainte quasi uniforme.'],
    caption: 'Vérification rapide de l’âme d’un profilé S235.',
  },
  {
    id: 'solive-cisaillement',
    title: 'Solive en bois : cisaillement maximal',
    steps: ['simple_examples'],
    formula: ['\\tau_{max} = \\frac{3}{2}\\,\\frac{V}{b\\,h} = 1{,}5 \\times \\frac{9\\,000}{75 \\times 225} = 0{,}80\\ \\text{MPa}'],
    h: 230,
    draw: () => (
      <g>
        <Rect x={120} y={30} w={60} h={180} c="soil" sw={2} fill="pat:wood" />
        <Line x1={110} y1={120} x2={190} y2={120} c="grey" w={1} dash="4 3" />
        <Line x1={210} y1={30} x2={210} y2={210} c="txt" w={1.2} />
        <Path d="M 210 30 Q 290 120 210 210" c="green" w={2.4} fill="~green" />
        <Text x={256} y={124} s={12} c="green" b>0,80 MPa</Text>
        <Text x={150} y={226} a="middle" s={12}>75 × 225 mm</Text>
        <Text x={320} y={90} s={12}>{'V = 9 kN\nC24 : résistance de\ncalcul ≈ 1,9 à 2,5 MPa'}</Text>
      </g>
    ),
    notes: ['Le bois résiste mal au cisaillement le long des fibres : on le vérifie près des appuis, où V est maximal.'],
    caption: 'Répartition parabolique de τ dans une solive rectangulaire.',
  },
  {
    id: 'poutres-sans-etriers',
    title: 'Rupture par effort tranchant de poutres hautes',
    steps: ['real_examples'],
    h: 230,
    draw: () => (
      <g>
        <Rect x={40} y={50} w={420} h={110} c="ink" sw={2} fill="pat:concrete" />
        <Line x1={50} y1={150} x2={450} y2={150} c="ink" w={3} />
        <Rect x={40} y={160} w={30} h={30} c="ink" sw={1.6} fill="~grey" />
        <Rect x={430} y={160} w={30} h={30} c="ink" sw={1.6} fill="~grey" />
        <Path d="M 80 150 L 110 120 L 130 110 L 160 70 L 180 58" c="red" w={3} />
        <Text x={200} y={100} s={12} c="red" b>fissure diagonale près de l’appui</Text>
        <Text x={250} y={40} a="middle" s={12}>poutre de 0,9 m de hauteur, peu d’étriers</Text>
        <Text x={250} y={212} a="middle" s={12} c="mute">retrait et dilatation thermique ajoutaient des tractions</Text>
      </g>
    ),
    notes: ['Ces ruptures sous des charges inférieures aux prévisions ont conduit à revoir les règles de cisaillement et l’effet d’échelle des poutres hautes.'],
    caption: 'Entrepôt : rupture fragile par effort tranchant, sans signe avant-coureur.',
  },
];
