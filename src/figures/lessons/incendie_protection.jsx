// Plates — Module 43 · Protection passive et active
import { Arrow, Box, Circle, Dim, Line, Path, Rect, Text } from '../../components/figures/kit.jsx';

/** Sprinkler head with spray cone at (x, y). */
function Head({ x, y, open }) {
  return (
    <g>
      <Line x1={x} y1={y - 12} x2={x} y2={y} c="red" w={2.4} />
      <Circle cx={x} cy={y + 3} r={4} c="red" sw={1.8} fill={open ? 'red' : 'paper'} />
      {open && [-40, -20, 0, 20, 40].map(dx => <Line key={dx} x1={x} y1={y + 8} x2={x + dx} y2={y + 70} c="water" w={1.2} dash="3 4" />)}
    </g>
  );
}

export default [
  {
    id: 'passif-actif',
    title: 'Protection passive et active dans un bâtiment',
    steps: ['theory'],
    h: 310,
    draw: () => (
      <g>
        <Rect x={30} y={40} w={440} h={220} c="txt" sw={2.4} />
        <Line x1={30} y1={150} x2={470} y2={150} c="txt" w={3} />
        <Rect x={240} y={40} w={10} h={220} c="red" sw={1.6} fill="~red" />
        <Text x={256} y={100} s={12} c="red">mur coupe-feu EI 60</Text>
        <Rect x={240} y={196} w={10} h={50} c="orange" sw={1.8} fill="paper" />
        <Text x={256} y={230} s={12} c="orange">porte EI 30</Text>
        <Line x1={30} y1={60} x2={470} y2={60} c="red" w={1.6} />
        {[80, 160, 330, 410].map(x => <Head key={x} x={x} y={60} open={x === 80} />)}
        <Text x={92} y={84} s={11} c="water">sprinkler ouvert</Text>
        <Circle cx={190} cy={164} r={8} c="ink" sw={1.8} fill="~ink" />
        <Text x={204} y={168} s={11} c="ink">détecteur</Text>
        <Rect x={50} y={214} w={16} h={34} rx={4} c="red" sw={1.8} fill="~red" />
        <Text x={72} y={236} s={11} c="red">extincteur</Text>
        <Box x={360} y={170} w={90} h={40} label="SSI" s={14} c="ink" />
        <Text x={140} y={290} a="middle" s={13} c="ink" b>passif : murs, portes, clapets</Text>
        <Text x={370} y={290} a="middle" s={13} c="red" b>actif : détection, sprinklers</Text>
      </g>
    ),
    caption: 'Le compartimentage confine le feu ; les équipements le détectent et le combattent.',
  },
  {
    id: 'reseau-sprinkler',
    title: 'Atelier OH1 : 6 têtes ouvertes sur 72 m²',
    steps: ['stepbystep'],
    formula: ['Q = K\\sqrt{P}', 'Q_{tot} = 5 \\times 72 = 360\\ \\text{L/min}'],
    h: 300,
    draw: () => (
      <g>
        <Rect x={30} y={30} w={440} h={240} c="txt" sw={2} />
        {[0, 1, 2, 3].map(r => <Line key={r} x1={60} y1={70 + r * 55} x2={440} y2={70 + r * 55} c="red" w={1.8} />)}
        <Line x1={60} y1={50} x2={60} y2={250} c="red" w={3} />
        {[0, 1, 2, 3].map(r => [0, 1, 2, 3, 4, 5].map(cI => {
          const x = 110 + cI * 60;
          const y = 70 + r * 55;
          const open = r >= 1 && r <= 2 && cI >= 2 && cI <= 4;
          return <Circle key={`${r}-${cI}`} cx={x} cy={y} r={6} c="red" sw={1.8} fill={open ? 'red' : 'paper'} />;
        }))}
        <Rect x={200} y={105} w={180} h={95} c="water" sw={2} fill="~water" dash="6 4" />
        <Text x={290} y={220} a="middle" s={12} c="water">surface impliquée 72 m²</Text>
        <Text x={36} y={264} s={12} c="red">colonne principale</Text>
        <Text x={300} y={22} a="middle" s={12}>chaque tête : 12 m² → 60 L/min à 0,56 bar</Text>
      </g>
    ),
    caption: 'Têtes rouges pleines : têtes ouvertes au-dessus du foyer ; réserve de 22 m³ pour 60 min.',
  },
  {
    id: 'traversee-calfeutree',
    title: 'Traversée d’une paroi coupe-feu',
    steps: ['diagrams'],
    h: 270,
    draw: () => (
      <g>
        <Rect x={220} y={30} w={60} h={210} c="grey" sw={2} fill="pat:concrete" bg="~grey" />
        <Rect x={40} y={110} w={420} h={44} c="ink" sw={2} fill="~ink" />
        <Rect x={240} y={104} w={20} h={56} c="red" sw={2} fill="~red" />
        <Text x={250} y={96} a="middle" s={12} c="red">clapet coupe-feu</Text>
        <Rect x={220} y={180} w={60} h={20} c="orange" sw={1.6} fill="pat:insul" bg="~orange" />
        <Line x1={60} y1={190} x2={440} y2={190} c="txt" w={3} />
        <Text x={300} y={214} s={12} c="orange">calfeutrement certifié (câbles)</Text>
        <Text x={120} y={136} a="middle" s={12} c="ink">gaine de ventilation</Text>
        <Text x={250} y={262} a="middle" s={12} c="mute">paroi EI 60 : chaque traversée garde le même degré</Text>
      </g>
    ),
    caption: 'Gaines et câbles ne doivent pas créer de chemin au feu ni aux fumées.',
  },
  {
    id: 'plateau-bureaux',
    title: 'Équipement d’un plateau de 1 150 m²',
    steps: ['practical_case'],
    formula: ['n = \\lceil 1\\,150 / 200 \\rceil = 6'],
    h: 290,
    draw: () => (
      <g>
        <Rect x={30} y={30} w={440} h={220} c="txt" sw={2.4} />
        {[[30, 'escalier'], [420, 'escalier']].map(([x, lab]) => (
          <g key={x}>
            <Rect x={x} y={30} w={50} h={60} c="red" sw={2.4} fill="~red" />
            <Text x={x + 25} y={64} a="middle" s={10} c="red">{lab}</Text>
          </g>
        ))}
        <Rect x={200} y={190} w={90} h={60} c="red" sw={2.4} fill="~red" />
        <Text x={245} y={225} a="middle" s={11} c="red">serveur EI 60</Text>
        {[[100, 150], [180, 80], [290, 80], [380, 150], [110, 230], [370, 230]].map(([x, y], i) => (
          <g key={i}>
            <Rect x={x - 6} y={y - 12} w={12} h={24} rx={3} c="red" sw={1.6} fill="red" />
          </g>
        ))}
        <Rect x={300} y={232} w={10} h={18} c="ink" sw={1.4} fill="ink" />
        <Text x={316} y={246} s={10} c="ink">CO₂</Text>
        <Text x={250} y={272} a="middle" s={12} c="mute">6 extincteurs à eau, à moins de 15 m de tout point</Text>
      </g>
    ),
    caption: 'Escaliers protégés et local serveur compartimentés ; extincteurs répartis près des circulations.',
  },
];
