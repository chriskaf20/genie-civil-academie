// Plates — Module 43 · Désenfumage
import { Arrow, Dim, Ground, Line, Path, Person, Poly, Rect, Text } from '../../components/figures/kit.jsx';

/** Flame drawn at (x, y) base. */
function Flame({ x, y, k = 1 }) {
  return (
    <g>
      <Path d={`M${x - 14 * k},${y} C${x - 18 * k},${y - 20 * k} ${x - 4 * k},${y - 26 * k} ${x},${y - 44 * k} C${x + 6 * k},${y - 26 * k} ${x + 18 * k},${y - 20 * k} ${x + 14 * k},${y} Z`} c="red" w={2} fill="~red" />
      <Path d={`M${x - 6 * k},${y} C${x - 8 * k},${y - 10 * k} ${x},${y - 14 * k} ${x},${y - 22 * k} C${x + 3 * k},${y - 12 * k} ${x + 8 * k},${y - 10 * k} ${x + 6 * k},${y} Z`} c="orange" w={1.4} fill="orange" />
    </g>
  );
}

export default [
  {
    id: 'balayage',
    title: 'Principe du balayage des fumées',
    steps: ['theory'],
    formula: ['\\dot m \\approx 0{,}071\\, Q_c^{1/3} z^{5/3} + 0{,}0018\\, Q_c'],
    h: 300,
    draw: () => (
      <g>
        <Rect x={30} y={40} w={440} h={200} c="txt" sw={2.4} />
        <Rect x={32} y={42} w={436} h={66} c="grey" sw={0} fill="~grey" />
        <Text x={250} y={70} a="middle" s={14} c="grey">couche de fumée chaude</Text>
        <Poly pts={[[214, 238], [250, 108], [286, 238]]} c="grey" w={1.4} dash="5 4" fill="~grey" />
        <Flame x={250} y={238} />
        <Text x={300} y={170} s={12} c="mute">panache : entraîne l’air</Text>
        <Rect x={370} y={30} w={60} h={12} c="red" sw={1.8} fill="~red" />
        <Arrow x1={400} y1={42} x2={400} y2={6} c="red" w={2.8} />
        <Text x={410} y={20} s={13} c="red">extraction haute</Text>
        <Rect x={22} y={190} w={10} h={46} c="water" sw={1.8} fill="~water" />
        <Arrow x1={0} y1={212} x2={60} y2={212} c="water" w={2.8} />
        <Text x={40} y={258} s={13} c="water">amenée d’air basse</Text>
        <Person x={130} y={238} k={0.9} />
        <Arrow x1={110} y1={150} x2={60} y2={150} c="green" w={2} />
        <Text x={64} y={142} s={12} c="green">zone d’air frais : évacuation</Text>
        <Ground x1={30} x2={470} y={240} />
      </g>
    ),
    notes: ['On maintient la fumée en partie haute pour garder les chemins d’évacuation praticables.'],
    caption: 'Extraction en partie haute, air frais en partie basse : la fumée reste stratifiée.',
  },
  {
    id: 'cantons',
    title: 'Cantons de désenfumage et écrans',
    steps: ['formulas'],
    formula: ['\\dot V_{ext} \\approx 1\\ \\text{m}^3/\\text{s} \\times \\frac{S}{100}'],
    h: 270,
    draw: () => (
      <g>
        <Rect x={20} y={40} w={460} h={180} c="txt" sw={2.4} />
        <Rect x={175} y={40} w={6} h={70} c="ink" sw={1.6} fill="ink" />
        <Rect x={325} y={40} w={6} h={70} c="ink" sw={1.6} fill="ink" />
        {[[22, 151], [183, 140], [333, 145]].map(([x, w], i) => (
          <g key={x}>
            <Rect x={x} y={42} w={w} h={40} c="grey" sw={0} fill="~grey" />
            <Text x={x + w / 2} y={66} a="middle" s={12} c="grey">{`canton ${i + 1}`}</Text>
          </g>
        ))}
        <Text x={178} y={128} a="middle" s={12} c="ink">écran de cantonnement</Text>
        <Line x1={20} y1={220} x2={480} y2={220} c="soil" w={2} />
        <Dim x1={20} y1={240} x2={480} y2={240} label="chaque canton ≤ 1 600 m² et ≤ 60 m" side={-1} s={13} />
      </g>
    ),
    caption: 'Les écrans descendent sous le plafond et empêchent la fumée de s’étaler dans tout le volume.',
  },
  {
    id: 'atelier-1200',
    title: 'Désenfumage mécanique d’un atelier de 1 200 m²',
    steps: ['stepbystep'],
    formula: ['\\dot V_{ext} = 12\\ \\text{m}^3/\\text{s}', 'A_{amenée} = \\frac{12}{5} = 2{,}4\\ \\text{m}^2'],
    h: 290,
    draw: () => (
      <g>
        <Rect x={60} y={40} w={360} h={220} c="txt" sw={2.6} fill="~grey" />
        {[[150, 100], [330, 100], [150, 200], [330, 200]].map(([x, y]) => (
          <g key={`${x}-${y}`}>
            <Rect x={x - 18} y={y - 18} w={36} h={36} c="red" sw={2} fill="~red" />
            <Text x={x} y={y + 5} a="middle" s={11} c="red" halo={false}>3 m³/s</Text>
          </g>
        ))}
        {[110, 230].map(y => <Rect key={y} x={52} y={y - 20} w={8} h={40} c="water" sw={1.8} fill="water" />)}
        {[110, 230].map(y => <Rect key={y} x={420} y={y - 20} w={8} h={40} c="water" sw={1.8} fill="water" />)}
        <Text x={240} y={150} a="middle" s={13}>un seul canton</Text>
        <Text x={240} y={30} a="middle" s={13} c="red">4 bouches d’extraction en toiture</Text>
        <Text x={30} y={278} s={12} c="water">amenées d’air basses : 4 × 0,6 m² = 2,4 m²</Text>
        <Dim x1={60} y1={262} x2={420} y2={262} label="" side={-1} s={12} />
        <Text x={460} y={150} s={12}>40 × 30 m</Text>
      </g>
    ),
    caption: 'Vue en plan : extraction répartie, amenées d’air sur deux façades opposées.',
  },
  {
    id: 'couloir-hotel',
    title: 'Couloir d’hôtel : amenées et extractions alternées',
    steps: ['practical_case'],
    h: 230,
    draw: () => (
      <g>
        <Rect x={20} y={70} w={460} h={90} c="txt" sw={2.2} />
        {[60, 280].map(x => (
          <g key={x}>
            <Rect x={x - 14} y={70} w={28} h={14} c="red" sw={1.8} fill="~red" />
            <Arrow x1={x} y1={70} x2={x} y2={40} c="red" w={2.2} />
          </g>
        ))}
        {[170, 400].map(x => (
          <g key={x}>
            <Rect x={x - 14} y={146} w={28} h={14} c="water" sw={1.8} fill="~water" />
            <Arrow x1={x} y1={190} x2={x} y2={160} c="water" w={2.2} />
          </g>
        ))}
        {[[170, 60], [170, 280], [400, 280]].map(([a, b], i) => <Path key={i} d={`M${a},140 Q${(a + b) / 2},110 ${b},92`} c="mute" w={1.4} dash="5 4" />)}
        <Text x={60} y={30} a="middle" s={12} c="red">extraction haute</Text>
        <Text x={400} y={210} a="middle" s={12} c="water">amenée basse</Text>
        <Dim x1={20} y1={210} x2={250} y2={210} label="" s={12} />
        <Text x={135} y={228} a="middle" s={12}>45 m de couloir</Text>
      </g>
    ),
    caption: 'Chaque tronçon est balayé de l’amenée d’air vers l’extraction voisine.',
  },
];
