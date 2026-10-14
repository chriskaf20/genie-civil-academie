// Plates — Module 4 · Plans d'exécution : coffrage, ferraillage, nomenclatures
import { Circle, Dim, Dot, Line, Path, Rect, Text } from '../../components/figures/ink.jsx';
import { Bars, Grid } from '../../components/figures/kit.jsx';
import { Arrow, Poly } from '../../components/figures/kit.jsx';

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
    h: 272,
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
  {
    id: 'designations-armatures',
    title: 'Lire les désignations d’armatures',
    steps: ['theory'],
    h: 270,
    draw: () => (
      <g>
        {[0, 1, 2].map(i => <Line key={i} x1={30} y1={50 + i * 12} x2={230} y2={50 + i * 12} c="ink" w={3.2} />)}
        <Text x={240} y={66} s={13} c="red" b>3 HA12 L = 4,80</Text>
        <Text x={240} y={84} s={11} c="mute">3 barres Ø12, longueur 4,80 m</Text>
        <Rect x={30} y={120} w={200} h={50} c="ink" sw={1.6} fill="~grey" />
        {Array.from({ length: 9 }, (_, i) => <Rect key={i} x={40 + i * 22} y={124} w={6} h={42} c="red" sw={1.6} />)}
        <Text x={240} y={146} s={13} c="red" b>Cad HA8 e = 15</Text>
        <Text x={240} y={164} s={11} c="mute">cadres Ø8 tous les 15 cm</Text>
        <Rect x={30} y={200} w={90} h={12} rx={6} c="ink" sw={1.6} fill="~grey" />
        <Text x={75} y={232} a="middle" s={12}>RL : rond lisse</Text>
        <Rect x={140} y={200} w={90} h={12} rx={6} c="ink" sw={1.6} fill="~grey" />
        {Array.from({ length: 10 }, (_, i) => <Line key={i} x1={145 + i * 9} y1={200} x2={150 + i * 9} y2={212} c="ink" w={1.4} />)}
        <Text x={185} y={232} a="middle" s={12}>HA : haute adhérence</Text>
        <Rect x={300} y={186} w={80} h={60} c="ink" sw={1.4} />
        {[1, 2, 3].map(i => <g key={i}><Line x1={300 + 20 * i} y1={186} x2={300 + 20 * i} y2={246} c="ink" w={1} /><Line x1={300} y1={186 + 15 * i} x2={380} y2={186 + 15 * i} c="ink" w={1} /></g>)}
        <Text x={390} y={212} s={12} b>{'ST25 :\n2,57 cm²/m'}</Text>
      </g>
    ),
    notes: ['Nombre, type, diamètre, longueur ou espacement : chaque annotation se traduit directement en barres à poser.'],
    caption: 'Codes usuels des plans de ferraillage.',
  },
  {
    id: 'masse-lineique',
    title: 'Masse linéique des barres HA',
    steps: ['formulas', 'simple_examples'],
    formula: ['m_l = 0{,}00617\\,d^2 \\qquad \\text{HA20 : } 0{,}00617 \\times 20^2 = 2{,}47\\ \\text{kg/m}'],
    h: 210,
    draw: () => {
      const bars = [[8, 0.395], [10, 0.617], [12, 0.888], [14, 1.208], [16, 1.578], [20, 2.466], [25, 3.853]];
      return (
        <g>
          {bars.map(([d, m], i) => (
            <g key={d}>
              <Circle cx={45 + i * 66} cy={90} r={d * 1.1} c={d === 20 ? 'red' : 'ink'} sw={2} fill={d === 20 ? '~red' : '~grey'} />
              <Text x={45 + i * 66} y={142} a="middle" s={13} b>{`HA${d}`}</Text>
              <Text x={45 + i * 66} y={162} a="middle" s={12} c={d === 20 ? 'red' : 'mute'}>{String(m).replace('.', ',')}</Text>
            </g>
          ))}
          <Text x={250} y={194} a="middle" s={12} c="mute">kg/m — la masse croît comme le carré du diamètre</Text>
        </g>
      );
    },
    notes: ['Doubler le diamètre quadruple la masse (et la section) : un HA20 pèse 6 fois plus qu’un HA8.'],
    caption: 'Sections des barres courantes à l’échelle et leur masse par mètre.',
  },
  {
    id: 'nombre-cadres',
    title: 'Compter les cadres : n = L/e + 1',
    steps: ['formulas'],
    formula: ['n = \\frac{L_{zone}}{e} + 1 = \\frac{3{,}00}{0{,}15} + 1 = 21\\ \\text{cadres}'],
    h: 200,
    draw: () => (
      <g>
        <Rect x={40} y={50} w={420} h={60} c="ink" sw={1.8} fill="~grey" />
        {Array.from({ length: 21 }, (_, i) => <Line key={i} x1={50 + i * 20} y1={54} x2={50 + i * 20} y2={106} c="red" w={2.2} />)}
        <Arrow x1={50} y1={130} x2={450} y2={130} c="txt" w={1.2} hs={6} both />
        <Text x={250} y={148} a="middle" s={12}>L = 3,00 m</Text>
        <Arrow x1={50} y1={40} x2={70} y2={40} c="red" w={1.2} hs={4} both />
        <Text x={74} y={36} s={12} c="red">e = 15 cm</Text>
        <Text x={250} y={182} a="middle" s={12} c="mute">20 intervalles mais 21 cadres : on compte aussi le premier</Text>
      </g>
    ),
    notes: ['C’est le « problème des piquets de clôture » : le nombre d’éléments dépasse d’un le nombre d’intervalles.'],
    caption: 'Cadres répartis régulièrement sur une zone de poutre.',
  },
  {
    id: 'cadre-25x50',
    title: 'Longueur d’un cadre de poutre 25 × 50',
    steps: ['simple_examples'],
    formula: ['L = 2 \\times (0{,}19 + 0{,}44) + 2 \\times 10 \\times 0{,}008 = 1{,}42\\ \\text{m}'],
    h: 270,
    draw: () => (
      <g>
        <Rect x={150} y={20} w={100} h={200} c="ink" sw={2.2} fill="pat:concrete" />
        <Rect x={162} y={32} w={76} h={176} c="red" sw={2.6} rx={4} />
        <Path d="M 170 40 l 18 18 M 176 34 l 18 18" c="red" w={2.4} />
        {[[172, 198], [228, 198], [172, 42], [228, 42]].map(([x, y]) => <Circle key={`${x}${y}`} cx={x} cy={y} r={5} c="ink" sw={1.2} fill="txt" />)}
        <Text x={200} y={242} a="middle" s={12}>25 cm</Text>
        <Text x={262} y={124} s={12}>50 cm</Text>
        <Text x={300} y={70} s={12} c="red" b>{'cadre HA8 :\n19 × 44 cm\n+ 2 crochets à 135°\n(2 × 10 Ø)'}</Text>
        <Text x={20} y={124} s={12}>{'enrobage\n3 cm'}</Text>
      </g>
    ),
    notes: ['Le plan d’exécution donne la longueur exacte avec les rayons de cintrage ; ce calcul en donne l’ordre de grandeur.'],
    caption: 'Section de poutre et cadre fermé par deux crochets.',
  },
  {
    id: 'volume-dalle',
    title: 'Volume de béton d’une dalle',
    steps: ['simple_examples'],
    formula: ['V = 6{,}00 \\times 4{,}50 \\times 0{,}20 = 5{,}40\\ \\text{m}^3'],
    h: 220,
    draw: () => (
      <g>
        <Poly pts={[[60, 130], [340, 130], [420, 70], [140, 70]]} c="ink" w={2} fill="~grey" close />
        <Poly pts={[[60, 130], [340, 130], [340, 150], [60, 150]]} c="ink" w={2} fill="pat:concrete" close />
        <Poly pts={[[340, 130], [420, 70], [420, 90], [340, 150]]} c="ink" w={2} fill="~grey" close />
        <Text x={200} y={172} a="middle" s={12}>6,00 m</Text>
        <Text x={392} y={130} s={12}>4,50 m</Text>
        <Text x={46} y={146} a="end" s={12}>0,20 m</Text>
        <Text x={250} y={204} a="middle" s={12} c="green" b>commander ≈ 5,6 m³ (+3 à 5 % de pertes)</Text>
      </g>
    ),
    notes: ['Le volume théorique ne suffit pas : pertes, flèche des coffrages et fonds de toupie justifient une petite marge.'],
    caption: 'Métré d’une dalle pleine rectangulaire.',
  },
  {
    id: 'ratio-acier',
    title: 'Ratios d’acier usuels',
    steps: ['theory', 'formulas'],
    formula: ['r = \\frac{M_{acier}}{V_{béton}}\\ \\ (\\text{kg/m}^3)'],
    h: 230,
    draw: () => {
      const X = v => 130 + v * 1.5;
      return (
        <g>
          {[['voile', 30, 60], ['dalle', 60, 100], ['poutre', 100, 150], ['poteau', 120, 200]].map(([t, a, b], i) => (
            <g key={t}>
              <Text x={120} y={58 + i * 36} a="end" s={13} b>{t}</Text>
              <Rect x={X(a)} y={42 + i * 36} w={X(b) - X(a)} h={22} c="red" sw={1.4} fill="~red" />
              <Text x={X(b) + 6} y={58 + i * 36} s={12}>{`${a} à ${b}`}</Text>
            </g>
          ))}
          {[0, 50, 100, 150, 200].map(v => <Text key={v} x={X(v)} y={196} a="middle" s={11} c="mute">{String(v)}</Text>)}
          <Text x={X(100)} y={216} a="middle" s={11} c="mute">kg d’acier par m³ de béton</Text>
        </g>
      );
    },
    notes: ['Un ratio très éloigné de ces fourchettes signale une erreur de métré ou un élément particulier à examiner.'],
    caption: 'Ordres de grandeur pour contrôler une nomenclature.',
  },
];
