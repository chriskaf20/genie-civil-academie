// Plates — Module 44 · Électricité et courants faibles
import { Arrow, Bars, Box, Circle, Dim, Line, Path, Rect, Text } from '../../components/figures/kit.jsx';

function Breaker({ x, y, lab, c = 'ink' }) {
  return (
    <g>
      <Rect x={x - 12} y={y} w={24} h={40} rx={3} c={c} sw={1.8} fill={`~${c}`} />
      <Line x1={x} y1={y + 8} x2={x + 6} y2={y + 26} c={c} w={2} />
      <Text x={x} y={y + 56} a="middle" s={10} c={c}>{lab}</Text>
    </g>
  );
}

export default [
  {
    id: 'tableau-logement',
    title: 'Du compteur aux circuits',
    steps: ['theory', 'diagrams'],
    formula: ['I_B \\leq I_n \\leq I_Z'],
    h: 310,
    draw: () => (
      <g>
        <Box x={20} y={40} w={80} h={50} label={'compteur\n9 kVA'} s={12} />
        <Breaker x={140} y={45} lab="branchement" c="red" />
        <Line x1={100} y1={65} x2={128} y2={65} c="txt" w={2} />
        <Line x1={152} y1={65} x2={470} y2={65} c="txt" w={2.4} />
        {[200, 340].map(x => (
          <g key={x}>
            <Line x1={x} y1={65} x2={x} y2={110} c="txt" w={2} />
            <Breaker x={x} y={110} lab="différentiel 30 mA" c="green" />
            <Line x1={x - 50} y1={170} x2={x + 50} y2={170} c="txt" w={2} />
          </g>
        ))}
        {[[160, '16 A\néclairage\n1,5 mm²'], [210, '20 A\nprises\n2,5 mm²'], [250, '20 A\nchauffe-eau\n2,5 mm²'], [300, '32 A\ncuisson\n6 mm²'], [350, '20 A\nlave-linge\n2,5 mm²'], [390, '16 A\nVMC\n1,5 mm²']].map(([x, lab]) => (
          <g key={x}>
            <Line x1={x} y1={170} x2={x} y2={186} c="txt" w={1.6} />
            <Breaker x={x} y={186} lab="" />
            <Text x={x} y={244} a="middle" s={10}>{lab}</Text>
          </g>
        ))}
        <Line x1={30} y1={290} x2={120} y2={290} c="green" w={2} />
        <Path d="M60,290 v10 M50,300 h20 M54,305 h12 M58,310 h4" c="green" w={1.8} />
        <Text x={80} y={286} s={11} c="green">terre</Text>
        <Text x={300} y={300} s={11} c="mute">courants faibles : coffret de communication séparé</Text>
      </g>
    ),
    caption: 'Tableau de logement : différentiels 30 mA en tête de rangée, un disjoncteur par circuit.',
  },
  {
    id: 'chute-tension',
    title: 'Chute de tension le long d’un câble',
    steps: ['stepbystep'],
    formula: ['\\Delta U = 2 \\times 0{,}0225 \\times \\frac{25}{2{,}5} \\times 15{,}2 = 6{,}8\\ \\text{V}'],
    h: 270,
    draw: () => (
      <g>
        <Box x={20} y={90} w={80} h={70} label={'tableau\n230 V'} s={12} />
        <Line x1={100} y1={110} x2={400} y2={110} c="red" w={3} />
        <Line x1={400} y1={140} x2={100} y2={140} c="water" w={3} />
        <Arrow x1={200} y1={110} x2={260} y2={110} c="red" w={2} />
        <Arrow x1={300} y1={140} x2={240} y2={140} c="water" w={2} />
        <Rect x={400} y={70} w={70} h={110} rx={10} c="ink" sw={2} fill="~ink" />
        <Text x={435} y={130} a="middle" s={11} c="ink" halo={false}>{'chauffe-\neau\n3,5 kW'}</Text>
        <Dim x1={100} y1={200} x2={400} y2={200} label="L = 25 m · 2,5 mm² · 15,2 A" side={-1} s={12} />
        <Text x={250} y={60} a="middle" s={13} c="red">aller + retour : 2 L de cuivre</Text>
        <Text x={250} y={250} a="middle" s={13}>tension aux bornes : 230 − 6,8 = 223,2 V (3,0 % ≤ 5 %)</Text>
      </g>
    ),
    caption: 'La résistance du câble aller et retour fait perdre une partie de la tension.',
  },
  {
    id: 'foisonnement',
    title: 'Puissance installée et puissance souscrite',
    steps: ['practical_case'],
    formula: ['P_{souscrite} \\approx 0{,}5 \\times 20{,}7 = 10{,}4\\ \\text{kVA}'],
    h: 270,
    draw: () => (
      <Bars x={60} y={40} w={400} h={170} max={8} ticks={[2, 4, 6]} unit="kW" s={11} bars={[
        { label: 'PAC', v: 4, c: 'ink' },
        { label: 'ECS', v: 2.2, c: 'ink' },
        { label: 'plaque', v: 7, c: 'red' },
        { label: 'four', v: 2.5, c: 'ink' },
        { label: 'lave-l.', v: 2, c: 'ink' },
        { label: 'prises', v: 3, c: 'ink' },
      ]} />
    ),
    notes: ['20,7 kW installés, mais les appareils ne fonctionnent jamais tous ensemble : on souscrit environ la moitié.'],
    caption: 'Le coefficient de foisonnement réduit la puissance d’abonnement.',
  },
];
