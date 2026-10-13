// Plates — Module 10 · Structures hyperstatiques : trois moments & rigidité
import { Arrow, BeamScheme, Circle, Dot, ForceDiagram, Line, Moment, Poly, Rect, Text } from '../../components/figures/kit.jsx';

// Two spans of 6 m, q = 20 kN/m: M(x) with M_B = −90 kN·m (x in m, 0..12).
const M2 = x => {
  const u = x <= 6 ? x : 12 - x;
  return 45 * u - 10 * u * u;
};
// Three spans of 5 m, q = 25 kN/m, M_B = M_C = −62,5 kN·m.
const M3 = x => {
  if (x <= 5) return 50 * x - 12.5 * x * x;
  if (x <= 10) { const u = x - 5; return -62.5 + 62.5 * u - 12.5 * u * u; }
  const u = 15 - x;
  return 50 * u - 12.5 * u * u;
};

export default [
  {
    id: 'hyperstatique',
    title: 'Poutre continue : une inconnue en trop',
    steps: ['theory'],
    formula: ['h = r - 3', 'M_{i-1} L_i + 2 M_i (L_i + L_{i+1}) + M_{i+1} L_{i+1} = -\\frac{q_i L_i^3 + q_{i+1} L_{i+1}^3}{4}'],
    h: 270,
    draw: () => (
      <g>
        <Text x={20} y={26} s={13} b>1. Structure réelle : 4 réactions, 3 équations → h = 1</Text>
        <BeamScheme x1={70} x2={430} y={72} mid={[0.5]} loads={[{ type: 'udl', h: 26, label: 'q' }]} names={['A', 'C']} />
        <Text x={266} y={98} s={15} b>B</Text>
        <Text x={20} y={146} s={13} b>2. Structure isostatique associée + moment inconnu sur B</Text>
        <BeamScheme x1={70} x2={230} y={196} loads={[{ type: 'udl', h: 26, label: '' }]} names={['A', '']} />
        <BeamScheme x1={270} x2={430} y={196} loads={[{ type: 'udl', h: 26, label: '' }]} names={['', 'C']} />
        <Moment x={230} y={196} r={14} a1={-130} a2={130} c="red" />
        <Moment x={270} y={196} r={14} a1={-50} a2={-310} c="red" />
        <Text x={250} y={248} a="middle" s={14} c="red" b>{'M_B'}</Text>
        <Text x={250} y={266} a="middle" s={12} c="mute">continuité : même rotation à gauche et à droite de B</Text>
      </g>
    ),
    notes: ['On coupe sur l’appui intermédiaire, on y applique le moment inconnu, puis on écrit que la rotation est la même des deux côtés : c’est l’équation des trois moments.'],
    caption: 'Méthode des forces : structure isostatique associée + inconnue hyperstatique.',
  },
  {
    id: 'deux-travees',
    title: 'Deux travées de 6 m : moments et réactions',
    steps: ['stepbystep'],
    formula: ['2 M_B (6 + 6) = -\\frac{2 \\times 20 \\times 6^3}{4} \\Rightarrow M_B = -90\\ \\text{kN·m}'],
    h: 300,
    draw: () => (
      <g>
        <BeamScheme x1={80} x2={440} y={70} mid={[0.5]} loads={[{ type: 'udl', h: 26, label: '' }]} names={['A', 'C']} />
        <Text x={80} y={32} s={14} b>q = 20 kN/m</Text>
        <Text x={276} y={98} s={15} b>B</Text>
        <Text x={80} y={124} a="middle" s={12} c="red">45 kN</Text>
        <Text x={260} y={124} a="middle" s={12} c="red">150 kN</Text>
        <Text x={440} y={124} a="middle" s={12} c="red">45 kN</Text>
        <Poly pts={Array.from({ length: 61 }, (_, k) => { const x = (12 * k) / 60; const u = x <= 6 ? x : x - 6; return [80 + 30 * x, 200 + 0.55 * (10 * u * (6 - u))]; })} c="grey" w={1.4} dash="5 4" />
        <ForceDiagram x1={80} x2={440} y0={200} f={t => M2(12 * t)} scale={0.55} c="red" fill="~red" name="M (kN·m)" n={120}
          marks={[{ t: 2.25 / 12, label: '50,6' }, { t: 0.5, label: '−90' }, { t: 9.75 / 12, label: '50,6' }]} />
        <Text x={440} y={286} a="end" s={12} c="mute">tirets : travées isostatiques (90 kN·m)</Text>
      </g>
    ),
    notes: [
      '$R_A = qL/2 - |M_B|/L = 60 - 15 = 45$ kN ; $R_B = 2 \\times (60 + 15) = 150$ kN ; contrôle : 45 + 150 + 45 = 240 kN.',
      'La continuité fait passer le moment de travée de 90 à 50,6 kN·m (−44 %), au prix d’un moment négatif sur B.',
    ],
    caption: 'Le moment sur appui « soulage » les travées : diagramme continu (rouge) et travées isostatiques (tirets).',
  },
  {
    id: 'barres-serie',
    title: 'Méthode des déplacements : deux barres en série',
    steps: ['formulas', 'simple_examples'],
    formula: ['[k] = \\frac{EA}{L}\\begin{bmatrix} 1 & -1 \\\\ -1 & 1 \\end{bmatrix}', '[K]\\{U\\} = \\{F\\}'],
    h: 230,
    draw: () => (
      <g>
        <Rect x={40} y={60} w={14} h={80} c="ink" sw={2} fill="pat:hatch" />
        <Rect x={54} y={92} w={170} h={16} c="ink" sw={2} fill="~ink" />
        <Rect x={224} y={92} w={170} h={16} c="ink" sw={2} fill="~grey" />
        {[[54, '1'], [224, '2'], [394, '3']].map(([x, n]) => (
          <g key={n}>
            <Circle cx={x} cy={100} r={9} c="red" sw={2} fill="paper" />
            <Text x={x} y={105} a="middle" s={12} c="red" b halo={false}>{n}</Text>
          </g>
        ))}
        <Arrow x1={404} y1={100} x2={470} y2={100} c="red" w={3} hs={11} />
        <Text x={474} y={92} a="end" s={14} c="red" b>F</Text>
        <Text x={139} y={84} a="middle" s={12}>barre 1 : EA/L = 105 kN/mm</Text>
        <Text x={309} y={84} a="middle" s={12}>barre 2 : EA/L = 105 kN/mm</Text>
        <Text x={54} y={164} a="middle" s={12}>{'u_1 = 0'}</Text>
        <Text x={224} y={164} a="middle" s={12} c="green" b>{'u_2 = 2 mm'}</Text>
        <Text x={394} y={164} a="middle" s={12} c="green" b>{'u_3 = 4 mm'}</Text>
        <Text x={250} y={206} a="middle" s={13}>F = 210 kN traverse les deux barres : chacune s’allonge de 210 / 105 = 2 mm</Text>
      </g>
    ),
    notes: ['Assemblage : les matrices des deux barres se recouvrent au nœud 2 ; on bloque le nœud 1 puis on résout $[K]\\{U\\} = \\{F\\}$.'],
    caption: 'Nœuds, éléments, degrés de liberté : le principe de tout logiciel de calcul de structures.',
  },
  {
    id: 'trois-travees',
    title: 'Poutre continue sur trois travées égales',
    steps: ['practical_case'],
    formula: ['2 M_B (10) + 5 M_C = -1\\,562{,}5 \\ ;\\ M_B = M_C \\Rightarrow M_B = -\\frac{qL^2}{10} = -62{,}5\\ \\text{kN·m}'],
    h: 290,
    draw: () => (
      <g>
        <BeamScheme x1={50} x2={455} y={70} mid={[1 / 3, 2 / 3]} loads={[{ type: 'udl', h: 26, label: '' }]} names={['A', 'D']} />
        <Text x={50} y={32} s={14} b>q = 25 kN/m</Text>
        <Text x={201} y={98} s={15} b>B</Text>
        <Text x={336} y={98} s={15} b>C</Text>
        {[0, 1, 2].map(k => <Text key={k} x={117.5 + 135 * k} y={124} a="middle" s={12} c="mute">5 m</Text>)}
        <ForceDiagram x1={50} x2={455} y0={190} f={t => M3(15 * t)} scale={0.9} c="red" fill="~red" name="M" n={150}
          marks={[{ t: 2 / 15, label: '50' }, { t: 1 / 3, label: '−62,5' }, { t: 0.5, label: '15,6' }, { t: 2 / 3, label: '−62,5' }, { t: 13 / 15, label: '50' }]} />
        <Text x={455} y={280} a="end" s={12} c="mute">moments en kN·m</Text>
      </g>
    ),
    notes: ['Travée de rive : $R_A = 62{,}5 - 12{,}5 = 50$ kN, moment maximal 50 kN·m à 2 m de A ; travée centrale : $78{,}1 - 62{,}5 = 15{,}6$ kN·m.'],
    caption: 'On retrouve la valeur classique −qL²/10 sur les appuis intermédiaires.',
  },
];
