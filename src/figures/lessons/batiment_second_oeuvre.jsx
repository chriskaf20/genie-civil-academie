// Plates — Module 41 · Second œuvre et finitions
import { Dim, Gantt, Line, Path, Rect, Text } from '../../components/figures/kit.jsx';

export default [
  {
    id: 'cloison-72-48',
    title: 'Cloison 72/48 sur ossature métallique',
    steps: ['theory'],
    formula: ['e = a + 2\\,n\\,t = 48 + 2 \\times 12{,}5 \\approx 72\\ \\text{mm}'],
    h: 290,
    draw: () => (
      <g>
        <Text x={120} y={28} a="middle" s={14} b c="ink">coupe horizontale</Text>
        <Rect x={40} y={110} w={160} h={10} c="grey" sw={1.6} fill="~grey" />
        <Rect x={40} y={168} w={160} h={10} c="grey" sw={1.6} fill="~grey" />
        <Rect x={40} y={120} w={160} h={48} c="orange" sw={0} fill="pat:insul" bg="~orange" />
        {[60, 140].map(x => <Rect key={x} x={x} y={120} w={8} h={48} c="ink" sw={1.6} fill="~ink" />)}
        <Dim x1={220} y1={178} x2={220} y2={110} label="72 mm" s={12} side={-1} />
        <Text x={120} y={104} a="middle" s={12} c="grey">plaque BA13</Text>
        <Text x={120} y={196} a="middle" s={12} c="ink">montants 48 mm tous les 60 cm</Text>
        <Text x={120} y={150} a="middle" s={12} c="orange">laine minérale</Text>

        <Text x={380} y={28} a="middle" s={14} b c="ink">élévation</Text>
        <Rect x={300} y={40} w={160} h={220} c="grey" sw={1.6} fill="~grey" />
        <Rect x={300} y={40} w={160} h={8} c="ink" sw={1.4} fill="~ink" />
        <Rect x={300} y={252} w={160} h={8} c="ink" sw={1.4} fill="~ink" />
        {[300, 380, 452].map(x => <Rect key={x} x={x} y={48} w={8} h={204} c="ink" sw={1.2} fill="~ink" />)}
        <Text x={470} y={48} s={11} c="ink">rail haut</Text>
        <Text x={470} y={258} s={11} c="ink">rail bas</Text>
        <Dim x1={304} y1={276} x2={384} y2={276} label="60 cm" side={-1} s={11} />
      </g>
    ),
    notes: ['L’isolant dans le vide de la cloison améliore l’isolement acoustique entre pièces.'],
    caption: 'Ossature (rails et montants) et parements en plaques de plâtre.',
  },
  {
    id: 'chambre-quantites',
    title: 'Quantités de finitions d’une chambre',
    steps: ['stepbystep'],
    formula: ['S_{murs} = 15{,}00 \\times 2{,}50 - 3{,}39 = 34{,}11\\ \\text{m}^2'],
    h: 290,
    draw: () => (
      <g>
        <Rect x={60} y={40} w={240} h={210} c="txt" sw={6} fill="pat:hatch" bg="~grey" />
        <Rect x={66} y={46} w={228} h={198} c="txt" sw={0} fill="paper" />
        <Line x1={130} y1={250} x2={184} y2={250} c="paper" w={8} />
        <Line x1={130} y1={250} x2={174} y2={206} c="ink" w={1.6} />
        <Line x1={300} y1={100} x2={300} y2={172} c="paper" w={8} />
        <Line x1={300} y1={100} x2={300} y2={172} c="water" w={2.4} />
        <Text x={180} y={145} a="middle" s={14} c="ink">{'sol carrelé\n14,00 m² + 8 %'}</Text>
        <Dim x1={60} y1={272} x2={300} y2={272} label="4,00 m" side={-1} s={13} />
        <Dim x1={40} y1={250} x2={40} y2={40} label="3,50 m" s={13} />
        <Text x={320} y={60} s={13}>{'h = 2,50 m\nporte 0,90 × 2,10\nfenêtre 1,20 × 1,25'}</Text>
        <Text x={320} y={160} s={13} c="red">{'murs nets 34,1 m²\n+ plafond 14,0 m²\n= 48,1 m² × 2 couches\n→ 9,6 L de peinture'}</Text>
      </g>
    ),
    caption: 'Vue en plan : on déduit les baies de la surface des murs.',
  },
  {
    id: 'ordre-corps-etat',
    title: 'Enchaînement des corps d’état',
    steps: ['diagrams', 'practical_case'],
    h: 290,
    draw: () => (
      <Gantt x={170} y={34} w={300} rowH={34} total={8} step={1} unit="sem." tasks={[
        { name: 'cloisons', start: 0, dur: 1 },
        { name: 'chape', start: 1, dur: 0.5, crit: true },
        { name: 'séchage de la chape', start: 1.5, dur: 4, c: 'grey' },
        { name: 'plâtrerie', start: 1.5, dur: 1.2 },
        { name: 'menuiseries intérieures', start: 2.7, dur: 0.6 },
        { name: 'carrelage', start: 5.5, dur: 0.8, crit: true },
        { name: 'peinture', start: 6.3, dur: 1.2, crit: true },
      ]} />
    ),
    notes: ['Les tâches sèches occupent le temps de séchage de la chape : le chemin critique passe par la chape.'],
    caption: 'Appartement de 70 m² : environ 7,5 semaines de finitions.',
  },
  {
    id: 'regle-2m',
    title: 'Contrôle de planéité à la règle de 2 m',
    steps: ['simple_examples'],
    h: 230,
    draw: () => (
      <g>
        <Rect x={40} y={60} w={420} h={10} c="ink" sw={2} fill="~ink" />
        <Text x={250} y={50} a="middle" s={13} c="ink">règle de 2,00 m</Text>
        <Path d="M30,74 C140,74 200,96 260,96 C320,96 380,74 470,74 L470,156 L30,156 Z" c="soil" w={2.4} fill="pat:sand" bg="~soil" />
        <Dim x1={260} y1={70} x2={260} y2={96} label="flèche ≤ 5 mm" s={12} side={-1} c="red" lc="red" />
        <Text x={250} y={190} a="middle" s={13} c="mute">au-delà : ragréage avant le revêtement</Text>
      </g>
    ),
    caption: 'L’écart mesuré sous la règle est comparé à la tolérance du DTU du revêtement.',
  },
];
