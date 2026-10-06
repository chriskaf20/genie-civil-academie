// Plates — Module 45 · Conception d'un lotissement
import { Bars, Circle, Dim, Line, Path, Rect, Text, Tree } from '../../components/figures/kit.jsx';

/** Row of lots along a road edge. */
function Lots({ x, y, n, w, h, up }) {
  return (
    <g>
      {Array.from({ length: n }, (_, i) => (
        <g key={i}>
          <Rect x={x + i * w} y={up ? y - h : y} w={w} h={h} c="ink" sw={1.4} fill="~ink" />
          <Rect x={x + i * w + w * 0.25} y={up ? y - h * 0.55 : y + h * 0.15} w={w * 0.5} h={h * 0.4} c="ink" sw={1.2} fill="paper" />
        </g>
      ))}
    </g>
  );
}

export default [
  {
    id: 'plan-composition',
    title: 'Plan de composition d’un lotissement',
    steps: ['theory'],
    formula: ['A_{cessible} = A_{terrain}(1 - \\alpha)'],
    h: 330,
    draw: () => (
      <g>
        <Rect x={20} y={20} w={460} h={290} c="txt" sw={2} dash="10 5" />
        <Path d="M20,170 H360 C400,170 420,150 420,120 V20" c="grey" w={22} o={0.55} />
        <Text x={110} y={175} s={12} c="txt">voie de desserte (6 m)</Text>
        <Lots x={40} y={158} n={6} w={50} h={70} up />
        <Lots x={40} y={182} n={6} w={50} h={70} />
        <Lots x={432} y={60} n={1} w={46} h={90} />
        <Rect x={340} y={200} w={140} h={110} c="green" sw={1.8} fill="~green" />
        <Path d="M350,280 q60,-24 120,0" c="water" w={3} />
        <Text x={410} y={232} a="middle" s={12} c="green">espace vert + noue</Text>
        <Tree x={370} y={262} k={0.6} />
        <Tree x={450} y={262} k={0.6} />
        <Path d="M20,290 H340" c="orange" w={2} dash="5 4" />
        <Text x={60} y={304} s={11} c="orange">cheminement piéton vers l’école</Text>
        <Text x={270} y={110} s={12} c="ink">lots ≈ 375 m²</Text>
      </g>
    ),
    caption: 'Voie de desserte reliée au réseau existant, lots des deux côtés, espace vert qui gère les eaux pluviales.',
  },
  {
    id: 'bilan-amenageur',
    title: 'Bilan de l’opération de 48 lots',
    steps: ['stepbystep'],
    formula: ['R = 2\\,700\\,000 - 2\\,150\\,400 = 549\\,600\\ €'],
    h: 270,
    draw: () => (
      <Bars x={70} y={40} w={380} h={170} max={3000} ticks={[1000, 2000, 3000]} unit="k€" bars={[
        { label: 'ventes', v: 2700, c: 'green' },
        { label: 'foncier', v: 720, c: 'ink' },
        { label: 'VRD', v: 1200, c: 'ink' },
        { label: 'frais 12 %', v: 230, c: 'ink' },
        { label: 'résultat', v: 550, c: 'orange' },
      ]} />
    ),
    caption: 'Les travaux de voirie et réseaux sont le premier poste de dépense.',
  },
  {
    id: 'impasse-maillage',
    title: 'Impasses ou trame maillée',
    steps: ['real_examples'],
    h: 260,
    draw: () => (
      <g>
        <Text x={120} y={24} a="middle" s={14} b c="red">impasses</Text>
        <Line x1={20} y1={220} x2={220} y2={220} c="grey" w={12} o={0.6} />
        {[60, 120, 180].map(x => (
          <g key={x}>
            <Line x1={x} y1={220} x2={x} y2={90} c="grey" w={8} o={0.6} />
            <Circle cx={x} cy={84} r={12} c="grey" sw={0} fill="~grey" />
          </g>
        ))}
        <Text x={120} y={248} a="middle" s={12} c="mute">détours, demi-tours</Text>
        <Text x={370} y={24} a="middle" s={14} b c="green">maillage</Text>
        <Line x1={270} y1={220} x2={470} y2={220} c="grey" w={12} o={0.6} />
        <Line x1={270} y1={90} x2={470} y2={90} c="grey" w={10} o={0.6} />
        {[310, 370, 430].map(x => <Line key={x} x1={x} y1={220} x2={x} y2={90} c="grey" w={8} o={0.6} />)}
        <Path d="M290,150 H450" c="orange" w={2} dash="5 4" />
        <Text x={370} y={248} a="middle" s={12} c="mute">itinéraires directs, piétons</Text>
      </g>
    ),
    caption: 'La trame maillée raccourcit les trajets et facilite secours et collecte des déchets.',
  },
  {
    id: 'variantes-lots',
    title: 'Variante A (500 m²) ou B (375 m²)',
    steps: ['practical_case'],
    h: 250,
    draw: () => (
      <g>
        <Bars x={60} y={40} w={180} h={150} max={26} ticks={[10, 20]} unit="log/ha" bars={[
          { label: 'A', v: 15, c: 'red' },
          { label: 'B', v: 20, c: 'green' },
        ]} />
        <Line x1={60} y1={40 + 150 - (150 * 20) / 26} x2={240} y2={40 + 150 - (150 * 20) / 26} c="orange" w={1.6} dash="5 4" />
        <Text x={244} y={40 + 150 - (150 * 20) / 26 + 4} s={11} c="orange">OAP 20</Text>
        <Bars x={300} y={40} w={180} h={150} max={1000} ticks={[500]} unit="résultat k€" bars={[
          { label: 'A', v: 886, c: 'ink' },
          { label: 'B', v: 550, c: 'ink' },
        ]} />
      </g>
    ),
    caption: 'B respecte la densité imposée ; A rapporte plus mais n’est pas conforme.',
  },
];
