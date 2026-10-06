// Plates — Module 44 · Climatisation et CVC
import { Arrow, Bars, Box, Circle, Line, Path, Person, Rect, Text } from '../../components/figures/kit.jsx';

export default [
  {
    id: 'apports-bureau',
    title: 'Les apports de chaleur d’un bureau',
    steps: ['theory'],
    formula: ['Q = Q_{sol} + Q_{cond} + Q_{air} + Q_{int}'],
    h: 290,
    draw: () => (
      <g>
        <Rect x={60} y={40} w={380} h={200} c="txt" sw={2.4} />
        <Rect x={436} y={80} w={8} h={110} c="water" sw={1.6} fill="~water" />
        <Circle cx={480} cy={30} r={16} c="orange" sw={2} fill="~orange" />
        {[90, 120, 150].map(y => <Arrow key={y} x1={480} y1={50} x2={330} y2={y + 30} c="orange" w={2} dash="6 4" />)}
        <Text x={460} y={226} a="end" s={12} c="orange">soleil (vitrage)</Text>
        <Person x={150} y={238} k={0.9} />
        <Person x={200} y={238} k={0.9} />
        <Rect x={240} y={190} w={40} h={28} c="ink" sw={1.6} fill="~ink" />
        <Text x={260} y={232} a="middle" s={11} c="ink">PC</Text>
        <Line x1={140} y1={60} x2={240} y2={60} c="orange" w={4} />
        <Text x={190} y={80} a="middle" s={11} c="orange">éclairage</Text>
        {[110, 160].map(y => <Arrow key={y} x1={20} y1={y} x2={56} y2={y} c="red" w={2} />)}
        <Text x={20} y={100} s={11} c="red">parois</Text>
        <Rect x={300} y={40} w={60} h={14} c="ink" sw={1.6} fill="~ink" />
        <Arrow x1={330} y1={56} x2={330} y2={110} c="water" w={2.2} />
        <Text x={340} y={94} s={11} c="water">air soufflé froid</Text>
        <Text x={250} y={266} a="middle" s={12} c="mute">apports externes (soleil, parois, air neuf) + internes (personnes, éclairage, appareils)</Text>
      </g>
    ),
    caption: 'La climatisation doit évacuer la somme des apports à l’heure la plus défavorable.',
  },
  {
    id: 'bilan-bureau-30',
    title: 'Bilan du bureau de 30 m²',
    steps: ['stepbystep'],
    formula: ['\\dot V = \\frac{2\\,265}{0{,}34 \\times 8} = 833\\ \\text{m}^3/\\text{h}'],
    h: 270,
    draw: () => (
      <Bars x={60} y={40} w={400} h={170} max={1400} ticks={[400, 800, 1200]} unit="W" bars={[
        { label: 'soleil', v: 1200, c: 'orange' },
        { label: 'occupants', v: 225, c: 'ink' },
        { label: 'PC', v: 300, c: 'ink' },
        { label: 'éclairage', v: 240, c: 'ink' },
        { label: 'parois + air', v: 300, c: 'red' },
      ]} />
    ),
    notes: ['Le vitrage sud représente plus de la moitié des 2 265 W : un store extérieur diviserait ce poste par près de trois.'],
    caption: 'Apports sensibles de pointe : 2,3 kW → split de 2,5 kW.',
  },
  {
    id: 'cycle-frigorifique',
    title: 'Le cycle frigorifique',
    steps: ['diagrams'],
    formula: ['EER = \\frac{Q_{froid}}{W_{élec}}'],
    h: 300,
    draw: () => (
      <g>
        <Box x={40} y={110} w={120} h={70} label={'évaporateur\n(intérieur)'} s={12} c="water" fill="~water" />
        <Box x={340} y={110} w={120} h={70} label={'condenseur\n(extérieur)'} s={12} c="red" fill="~red" />
        <Circle cx={250} cy={60} r={30} c="ink" sw={2.2} fill="~ink" />
        <Text x={250} y={65} a="middle" s={11} c="ink" b halo={false}>compresseur</Text>
        <Rect x={235} y={226} w={30} h={30} c="ink" sw={2} fill="~ink" />
        <Text x={250} y={278} a="middle" s={11} c="ink">détendeur</Text>
        <Path d="M100,110 V60 H220" c="ink" w={2.4} />
        <Arrow x1={200} y1={60} x2={220} y2={60} c="ink" w={2.4} />
        <Path d="M280,60 H400 V110" c="red" w={2.4} />
        <Arrow x1={400} y1={96} x2={400} y2={110} c="red" w={2.4} />
        <Path d="M400,180 V241 H265" c="red" w={2.4} />
        <Arrow x1={280} y1={241} x2={265} y2={241} c="red" w={2.4} />
        <Path d="M235,241 H100 V180" c="water" w={2.4} />
        <Arrow x1={100} y1={194} x2={100} y2={180} c="water" w={2.4} />
        <Text x={100} y={210} a="middle" s={11} c="water">absorbe la chaleur</Text>
        <Text x={400} y={210} a="middle" s={11} c="red">rejette la chaleur</Text>
        <Text x={250} y={110} a="middle" s={11} c="mute">gaz chaud haute pression</Text>
      </g>
    ),
    caption: 'Le fluide s’évapore dans le local (froid) et se condense dehors (chaud) ; inversé, le cycle chauffe.',
  },
  {
    id: 'salle-reunion',
    title: 'Salle de réunion de 40 m²',
    steps: ['practical_case'],
    formula: ['Q_s = 780 + 1\\,520 + 500 = 2\\,800\\ \\text{W}'],
    h: 260,
    draw: () => (
      <g>
        <Rect x={60} y={40} w={340} h={180} c="txt" sw={2.4} />
        <Rect x={392} y={60} w={8} h={140} c="water" sw={1.6} fill="~water" />
        {[60, 85, 110, 135, 160, 185].map(y => <Line key={y} x1={404} y1={y} x2={426} y2={y + 10} c="ink" w={3} />)}
        <Text x={430} y={52} s={12} c="ink">brise-soleil g = 0,15</Text>
        <Rect x={150} y={110} w={160} h={50} rx={10} c="soil" sw={2} fill="~soil" />
        {[0, 1, 2, 3, 4, 5].map(i => <Circle key={i} cx={165 + i * 26} cy={100} r={7} c="txt" sw={1.6} fill="paper" />)}
        {[0, 1, 2, 3, 4, 5].map(i => <Circle key={`b${i}`} cx={165 + i * 26} cy={170} r={7} c="txt" sw={1.6} fill="paper" />)}
        {[120, 300].map(x => <Rect key={x} x={x - 25} y={40} w={50} h={12} c="water" sw={1.6} fill="~water" />)}
        <Text x={230} y={246} a="middle" s={13}>12 personnes · 2,8 kW sensibles · ≈ 1 000 m³/h</Text>
      </g>
    ),
    caption: 'Vue en plan : diffuseurs de soufflage au plafond, protection solaire extérieure sur la façade ouest.',
  },
];
