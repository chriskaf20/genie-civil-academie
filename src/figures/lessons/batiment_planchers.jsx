// Plates — Module 41 · Planchers préfabriqués
import { Bars, Circle, Dim, Dot, Ground, Line, Poly, Rect, Text } from '../../components/figures/kit.jsx';

/** Precast joist cross-section (inverted T) at x, bottom at y. */
function Joist({ x, y }) {
  return <Poly pts={[[x - 10, y], [x + 10, y], [x + 10, y - 6], [x + 4, y - 6], [x + 4, y - 18], [x - 4, y - 18], [x - 4, y - 6], [x - 10, y - 6]]} c="grey" w={1.6} fill="~grey" />;
}

/** Hollow block between two joists. */
function Block({ x, y, w }) {
  return (
    <g>
      <Rect x={x} y={y - 40} w={w} h={34} c="soil" sw={1.4} fill="~soil" />
      {[0.2, 0.5, 0.8].map(t => <Rect key={t} x={x + w * t - 7} y={y - 33} w={14} h={20} c="soil" sw={1} />)}
    </g>
  );
}

export default [
  {
    id: 'trois-planchers',
    title: 'Trois planchers industrialisés',
    steps: ['theory'],
    h: 330,
    draw: () => (
      <g>
        <Text x={20} y={30} s={15} b c="ink">1. Poutrelles-hourdis « 16 + 4 »</Text>
        <Rect x={20} y={46} w={300} h={14} c="grey" sw={1.6} fill="pat:concrete" bg="~grey" />
        <Line x1={24} y1={53} x2={316} y2={53} c="red" w={1} dash="3 3" />
        {[0, 1, 2, 3].map(i => <Block key={i} x={32 + i * 74} y={100} w={60} />)}
        {[0, 1, 2, 3, 4].map(i => <Joist key={i} x={26 + i * 74} y={100} />)}
        <Text x={330} y={58} s={12} c="grey">dalle de compression 4 cm + treillis</Text>
        <Text x={330} y={84} s={12} c="soil">entrevous 16 cm</Text>
        <Text x={330} y={102} s={12} c="grey">poutrelle tous les 60 cm</Text>

        <Text x={20} y={140} s={15} b c="ink">2. Prédalle + dalle coulée</Text>
        <Rect x={20} y={152} w={300} h={34} c="grey" sw={1.6} fill="pat:concrete" bg="~grey" />
        <Rect x={20} y={186} w={300} h={14} c="ink" sw={1.8} fill="~ink" />
        {Array.from({ length: 10 }, (_, i) => <Dot key={i} x={34 + i * 30} y={194} r={2.6} c="red" />)}
        <Text x={330} y={172} s={12} c="grey">béton coulé en place</Text>
        <Text x={330} y={196} s={12} c="ink">prédalle 5 cm (armatures)</Text>

        <Text x={20} y={238} s={15} b c="ink">3. Dalle alvéolaire précontrainte</Text>
        <Rect x={20} y={250} w={300} h={50} c="grey" sw={1.8} fill="~grey" />
        {Array.from({ length: 6 }, (_, i) => <Circle key={i} cx={46 + i * 50} cy={275} r={17} c="grey" sw={1.4} fill="paper" />)}
        {Array.from({ length: 12 }, (_, i) => <Dot key={i} x={26 + i * 25.5} y={294} r={2} c="red" />)}
        <Text x={330} y={270} s={12} c="grey">alvéoles : allègement</Text>
        <Text x={330} y={294} s={12} c="red">torons précontraints</Text>
      </g>
    ),
    notes: ['Les trois portent dans un seul sens ; la dalle coulée en place les rend monolithes.'],
    caption: 'Coupes transversales des trois systèmes courants.',
  },
  {
    id: 'calepinage-poutrelles',
    title: 'Plancher 16 + 4 d’une pièce de 4,20 × 4,80 m',
    steps: ['stepbystep'],
    formula: ['q = 8{,}12 \\times 0{,}60 = 4{,}87\\ \\text{kN/m}', 'M = \\frac{4{,}87 \\times 4{,}80^2}{8} = 14{,}0\\ \\text{kN·m}'],
    h: 300,
    draw: () => (
      <g>
        <Rect x={60} y={40} w={360} h={210} c="grey" sw={0} fill="pat:block" bg="~grey" />
        <Rect x={80} y={56} w={320} h={178} c="txt" sw={1.4} fill="paper" />
        {Array.from({ length: 8 }, (_, i) => {
          const y = 66 + (i * 158) / 7;
          return <Rect key={i} x={70} y={y - 3} w={340} h={6} c="ink" sw={1.2} fill="~ink" />;
        })}
        <Rect x={70} y={66 + 158 / 7 * 3 - 13.5} w={340} h={27} c="red" sw={1.4} fill="~red" dash="5 4" />
        <Text x={240} y={66 + 158 / 7 * 3 + 30} a="middle" s={12} c="red">bande reprise par une poutrelle (e = 0,60 m)</Text>
        <Dim x1={80} y1={270} x2={400} y2={270} label="portée 4,80 m" side={-1} s={13} />
        <Dim x1={440} y1={234} x2={440} y2={56} label="4,20 m : 8 poutrelles" s={13} side={-1} />
        <Text x={30} y={30} s={12} c="mute">murs porteurs (appuis ≥ 5 cm)</Text>
      </g>
    ),
    caption: 'Vue en plan : les poutrelles franchissent la petite portée, de mur à mur.',
  },
  {
    id: 'etaiement',
    title: 'Étaiement d’un plancher au coulage',
    steps: ['real_examples'],
    h: 270,
    draw: () => (
      <g>
        <Rect x={30} y={60} w={440} h={20} c="grey" sw={1.8} fill="pat:concrete" bg="~grey" />
        <Rect x={10} y={60} w={20} h={170} c="grey" sw={1.8} fill="pat:block" bg="~grey" />
        <Rect x={470} y={60} w={20} h={170} c="grey" sw={1.8} fill="pat:block" bg="~grey" />
        {[177, 323].map(x => (
          <g key={x}>
            <Rect x={x - 40} y={80} w={80} h={8} c="soil" sw={1.4} fill="~soil" />
            <Line x1={x} y1={88} x2={x} y2={222} c="ink" w={4} />
            <Rect x={x - 30} y={222} w={60} h={8} c="soil" sw={1.4} fill="~soil" />
          </g>
        ))}
        <Ground x1={10} x2={490} y={230} />
        <Text x={250} y={50} a="middle" s={13}>béton frais + ouvriers + matériel</Text>
        <Text x={177} y={250} a="middle" s={12} c="soil">madrier de répartition</Text>
        <Text x={323} y={250} a="middle" s={12} c="soil">sol stable</Text>
        <Dim x1={30} y1={110} x2={177} y2={110} label="≤ 1,6 à 2 m" s={12} />
        <Text x={250} y={140} a="middle" s={13} c="red">nombre de files selon l’avis technique</Text>
      </g>
    ),
    notes: ['Une file d’étais manquante ou des étais posés sur un sol mou peuvent provoquer l’effondrement au coulage.'],
    caption: 'Deux files d’étais sur madriers, posées sur un sol porteur.',
  },
  {
    id: 'masse-acoustique',
    title: 'Masse surfacique et isolement acoustique',
    steps: ['practical_case'],
    h: 250,
    draw: () => (
      <Bars x={80} y={40} w={340} h={150} max={560} ticks={[100, 200, 300, 400, 500]} unit="masse (kg/m²)" bars={[
        { label: 'poutrelles 16 + 4', v: 290, c: 'grey' },
        { label: 'prédalle + dalle 20 cm', v: 500, c: 'ink' },
      ]} />
    ),
    notes: ['Plus un plancher est lourd, mieux il isole des bruits aériens (loi de masse).'],
    caption: 'Logements R+2 : la dalle de 20 cm est retenue entre logements.',
  },
];
