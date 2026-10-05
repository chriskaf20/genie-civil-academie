// Plates — Module 4 · Plans d'exécution : coffrage, ferraillage, nomenclatures
import { Circle, Dim, Dot, Line, Path, Rect, Text } from '../../components/figures/ink.jsx';
import { Bars, Grid } from '../../components/figures/kit.jsx';

function Rep({ x, y, n }) {
  return (
    <g>
      <Circle cx={x} cy={y} r={11} c="red" sw={1.8} fill="paper" />
      <Text x={x} y={y + 5} a="middle" s={13} b c="red" halo={false}>{String(n)}</Text>
    </g>
  );
}

export default [
  {
    id: 'lire-ferraillage',
    title: 'Lire un plan de ferraillage de poutre',
    steps: ['theory'],
    formula: ['m_l \\approx 0{,}00617\\, d^2\\ \\text{(kg/m)}'],
    h: 300,
    draw: () => (
      <g>
        <Rect x={30} y={80} w={330} h={90} c="grey" sw={2.2} fill="~grey" />
        <Line x1={36} y1={160} x2={354} y2={160} c="red" w={3} />
        <Line x1={36} y1={90} x2={354} y2={90} c="ink" w={2} />
        {Array.from({ length: 20 }, (_, i) => <Line key={i} x1={40 + i * 16.4} y1={86} x2={40 + i * 16.4} y2={164} c="ink" w={0.9} />)}
        <Rep x={200} y={196} n={1} />
        <Line x1={200} y1={185} x2={200} y2={162} c="red" w={1} />
        <Text x={216} y={201} s={13} c="red">4 HA16 L = 5,20</Text>
        <Rep x={90} y={56} n={2} />
        <Line x1={90} y1={67} x2={90} y2={88} c="red" w={1} />
        <Text x={106} y={61} s={13} c="ink">2 HA12 (montage)</Text>
        <Rep x={300} y={56} n={3} />
        <Line x1={300} y1={67} x2={300} y2={86} c="red" w={1} />
        <Text x={316} y={61} s={13} c="ink">Cad HA8 e = 17</Text>
        <Dim x1={30} y1={226} x2={360} y2={226} label="5,00 m" side={-1} s={13} />
        <Rect x={400} y={70} w={60} h={110} c="grey" sw={2} fill="pat:concrete" bg="~grey" />
        <Rect x={408} y={78} w={44} h={94} rx={5} c="ink" sw={1.6} />
        {[414, 425, 435, 446].map(x => <Dot key={x} x={x} y={164} r={5} c="red" />)}
        {[414, 446].map(x => <Dot key={x} x={x} y={85} r={4} c="ink" />)}
        <Text x={430} y={196} a="middle" s={13}>25 × 50</Text>
        <Text x={250} y={280} a="middle" s={13} c="mute">chaque repère renvoie à une ligne de la nomenclature</Text>
      </g>
    ),
    caption: 'Élévation et coupe d’une poutre : les repères cerclés identifient les familles de barres.',
  },
  {
    id: 'cadre-developpe',
    title: 'Longueur développée d’un cadre',
    steps: ['formulas'],
    formula: ['n = \\frac{L_{zone}}{e} + 1'],
    h: 280,
    draw: () => (
      <g>
        <Rect x={150} y={30} w={110} h={220} rx={8} c="ink" sw={3} />
        <Path d="M152,44 l36,34 M168,32 l34,32" c="ink" w={3} />
        <Dim x1={150} y1={262} x2={260} y2={262} label="19 cm" side={-1} s={13} />
        <Dim x1={130} y1={250} x2={130} y2={30} label="44 cm" s={13} />
        <Text x={280} y={70} s={14}>{'crochets à 135°\n≈ 2 × 10 Ø'}</Text>
        <Text x={280} y={160} s={14} c="red">{'L ≈ 2 × (19 + 44)\n+ 2 × 10 × 0,8\n≈ 1,42 m'}</Text>
      </g>
    ),
    notes: ['On compte le périmètre à l’axe des barres, plus les crochets de fermeture.'],
    caption: 'Cadre HA8 d’une poutre 25 × 50 cm avec 3 cm d’enrobage.',
  },
  {
    id: 'nomenclature',
    title: 'Nomenclature de la poutre',
    steps: ['stepbystep'],
    formula: ['M = 60{,}4\\ \\text{kg}', 'r = \\frac{60{,}4}{0{,}625} = 97\\ \\text{kg/m}^3'],
    h: 230,
    draw: () => (
      <Grid x={20} y={20} rh={34} colW={[60, 90, 70, 90, 90, 60]} s={13} cells={[
        ['Rep.', 'Barres', 'Nombre', 'L (m)', 'kg/m', 'kg'],
        ['1', 'HA16', '4', '5,20', '1,578', '32,8'],
        ['2', 'HA12', '2', '5,20', '0,888', '9,2'],
        ['3', 'Cad HA8', '31', '1,50', '0,395', '18,4'],
        ['', { t: 'Total', b: true }, '', '', '', { t: '60,4', c: 'red', b: true }],
      ]} />
    ),
    notes: ['31 cadres : 5,00 / 0,17 + 1 = 30,4, arrondi au nombre entier supérieur.'],
    caption: 'Chaque repère du plan donne une ligne : nombre × longueur × masse linéique.',
  },
  {
    id: 'chapeaux-indice',
    title: 'Chapeaux sur voile : contrôler l’indice du plan',
    steps: ['real_examples'],
    h: 250,
    draw: () => (
      <g>
        <Rect x={30} y={90} w={440} h={50} c="grey" sw={2} fill="~grey" />
        <Rect x={220} y={140} w={60} h={100} c="grey" sw={2} fill="pat:concrete" bg="~grey" />
        <Path d="M120,112 V98 H380 V112" c="red" w={3} />
        <Line x1={34} y1={130} x2={466} y2={130} c="ink" w={2} />
        <Text x={250} y={80} a="middle" s={14} c="red">chapeaux HA16 (plan indice B)</Text>
        <Text x={250} y={36} a="middle" s={14} c="orange">posés : HA12 (nomenclature indice A périmée)</Text>
        <Text x={250} y={262} a="middle" s={13} c="mute">voile</Text>
      </g>
    ),
    notes: ['Les chapeaux reprennent le moment négatif au-dessus des appuis : une section insuffisante n’est pas acceptable.'],
    caption: 'Erreur détectée avant coulage : l’atelier avait façonné à partir d’un indice ancien.',
  },
  {
    id: 'commande-acier',
    title: 'Commande d’acier d’un niveau',
    steps: ['practical_case'],
    formula: ['M = 6\\,165\\ \\text{kg} \\times 1{,}03 \\approx 6{,}4\\ \\text{t}'],
    h: 260,
    draw: () => (
      <Bars x={60} y={40} w={400} h={170} max={4000} ticks={[1000, 2000, 3000]} unit="kg d’acier" bars={[
        { label: 'dalle 45 m³ × 80', v: 3600, c: 'ink' },
        { label: 'poutres 12 m³ × 120', v: 1440, c: 'orange' },
        { label: 'voiles 25 m³ × 45', v: 1125, c: 'green' },
      ]} />
    ),
    notes: ['Ratio moyen du niveau : 6 165 / 82 = 75 kg/m³.'],
    caption: 'Estimation par ratios, confirmée ensuite par les nomenclatures « bon pour exécution ».',
  },
];
