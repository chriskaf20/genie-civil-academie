// Plates — Module 1 · Trigonométrie avancée & triangles quelconques
import { Angle, Circle, Dot, Line, Path, Poly, Text } from '../../components/figures/ink.jsx';
import { Tree } from '../../components/figures/kit.jsx';

const deg = r => (r * 180) / Math.PI;
const dir = (P, Q) => deg(Math.atan2(Q[1] - P[1], Q[0] - P[0]));

/** Circumcentre and radius of triangle ABC. */
function circum(A, B, C) {
  const d = 2 * (A[0] * (B[1] - C[1]) + B[0] * (C[1] - A[1]) + C[0] * (A[1] - B[1]));
  const sq = P => P[0] * P[0] + P[1] * P[1];
  const ux = (sq(A) * (B[1] - C[1]) + sq(B) * (C[1] - A[1]) + sq(C) * (A[1] - B[1])) / d;
  const uy = (sq(A) * (C[0] - B[0]) + sq(B) * (A[0] - C[0]) + sq(C) * (B[0] - A[0])) / d;
  return [ux, uy, Math.hypot(A[0] - ux, A[1] - uy)];
}

/** Angle mark at vertex P between the directions to Q and R. */
function Corner({ P, Q, R, label, r = 30, c = 'red', s = 16 }) {
  let a1 = dir(P, Q);
  let a2 = dir(P, R);
  if (a2 - a1 > 180) a1 += 360;
  if (a1 - a2 > 180) a2 += 360;
  return <Angle cx={P[0]} cy={P[1]} r={r} a1={Math.min(a1, a2)} a2={Math.max(a1, a2)} label={label} c={c} s={s} />;
}

export default [
  {
    id: 'triangle-quelconque',
    title: 'Triangle quelconque : notations',
    steps: ['theory'],
    formula: ['a^2 = b^2 + c^2 - 2bc\\cos A', '\\frac{a}{\\sin A} = \\frac{b}{\\sin B} = \\frac{c}{\\sin C} = 2R'],
    h: 330,
    draw: () => {
      const A = [95, 255];
      const B = [395, 255];
      const C = [300, 92];
      const [ox, oy, R] = circum(A, B, C);
      return (
        <g>
          <Circle cx={ox} cy={oy} r={R} c="grey" sw={1.4} dash="6 5" />
          <Poly pts={[A, B, C]} c="ink" w={3} fill="~ink" />
          <Line x1={ox} y1={oy} x2={B[0]} y2={B[1]} c="violet" w={1.6} dash="4 4" />
          <Dot x={ox} y={oy} r={3.5} c="violet" />
          <Text x={(ox + B[0]) / 2 + 6} y={(oy + B[1]) / 2 - 4} s={15} c="violet">R</Text>
          <Text x={A[0] - 22} y={A[1] + 8} s={18} b>A</Text>
          <Text x={B[0] + 10} y={B[1] + 8} s={18} b>B</Text>
          <Text x={C[0] - 4} y={C[1] - 12} s={18} b>C</Text>
          <Corner P={A} Q={B} R={C} label="Â" />
          <Corner P={B} Q={C} R={A} label="B̂" />
          <Corner P={C} Q={A} R={B} label="Ĉ" r={24} />
          <Text x={(B[0] + C[0]) / 2 + 12} y={(B[1] + C[1]) / 2} s={19} c="ink" b>a</Text>
          <Text x={(A[0] + C[0]) / 2 - 14} y={(A[1] + C[1]) / 2 - 6} s={19} c="ink" b>b</Text>
          <Text x={(A[0] + B[0]) / 2} y={A[1] + 26} a="middle" s={19} c="ink" b>c</Text>
        </g>
      );
    },
    notes: [
      'Chaque côté porte la lettre minuscule du sommet qui lui fait face : a est en face de A.',
      'Si Â = 90°, Al-Kashi redonne Pythagore (cos 90° = 0).',
    ],
    caption: 'Côtés, angles opposés et cercle circonscrit de rayon R.',
  },
  {
    id: 'distance-inaccessible',
    title: 'Distance inaccessible par Al-Kashi',
    steps: ['stepbystep'],
    formula: ['a^2 = 120^2 + 150^2 - 2 \\cdot 120 \\cdot 150 \\cos 40° \\Rightarrow a = 96{,}55\\ \\text{m}'],
    h: 300,
    draw: () => {
      const A = [80, 250];
      const B = [410, 250];
      const C = [282.2, 80.3];
      return (
        <g>
          <Path d="M300,150 q40,-40 90,-10 q40,30 0,70 q-50,30 -90,-10 q-25,-25 0,-50 z" c="water" w={2} fill="~water" />
          <Text x={348} y={176} a="middle" s={13} c="water">étang</Text>
          <Tree x={200} y={140} k={0.8} />
          <Line x1={A[0]} y1={A[1]} x2={B[0]} y2={B[1]} c="ink" w={2.6} />
          <Line x1={A[0]} y1={A[1]} x2={C[0]} y2={C[1]} c="ink" w={2.6} />
          <Line x1={B[0]} y1={B[1]} x2={C[0]} y2={C[1]} c="red" w={2.6} dash="9 6" />
          {[A, B, C].map(([x, y]) => <Dot key={x} x={x} y={y} r={6} c="ink" ring />)}
          <Corner P={A} Q={B} R={C} label="40°" r={52} s={15} />
          <Corner P={B} Q={A} R={C} label="B = 53,03°" r={40} s={14} c="green" />
          <Text x={A[0] - 26} y={A[1] - 30} s={17} b>A</Text>
          <Text x={B[0] + 10} y={B[1] + 6} s={17} b>B</Text>
          <Text x={C[0] - 6} y={C[1] - 14} s={17} b>C</Text>
          <Text x={(A[0] + B[0]) / 2} y={A[1] + 26} a="middle" s={16}>c = 150 m (mesurée)</Text>
          <Text x={(A[0] + C[0]) / 2 - 16} y={(A[1] + C[1]) / 2} a="end" s={16}>b = 120 m</Text>
          <Text x={(B[0] + C[0]) / 2 + 20} y={(B[1] + C[1]) / 2 - 50} s={16} c="red" b>{'a = 96,55 m\n(calculée)'}</Text>
        </g>
      );
    },
    notes: ['On mesure deux côtés et l’angle compris depuis A ; la distance BC, qui traverse l’obstacle, se calcule.'],
    caption: 'Station en A : deux distances et un angle suffisent pour obtenir la troisième distance.',
  },
  {
    id: 'franchissement-riviere',
    title: 'Largeur d’une rivière par la loi des sinus',
    steps: ['real_examples'],
    formula: ['AC = \\frac{AB \\sin B}{\\sin C} = \\frac{80 \\sin 75°}{\\sin 40°} = 120{,}2\\ \\text{m}'],
    h: 300,
    draw: () => {
      const A = [120, 262];
      const B = [280, 262];
      const C = [221.4, 44.5];
      return (
        <g>
          <Path d="M20,70 C140,60 260,84 480,66 L480,212 C330,226 180,200 20,214 Z" c="water" w={0} fill="~water" />
          <Path d="M20,70 C140,60 260,84 480,66" c="soil" w={2.2} />
          <Path d="M20,214 C180,200 330,226 480,212" c="soil" w={2.2} />
          <Text x={400} y={150} s={15} c="water">rivière</Text>
          <Line x1={A[0]} y1={A[1]} x2={B[0]} y2={B[1]} c="ink" w={2.8} />
          <Line x1={A[0]} y1={A[1]} x2={C[0]} y2={C[1]} c="ink" w={2} dash="8 5" />
          <Line x1={B[0]} y1={B[1]} x2={C[0]} y2={C[1]} c="ink" w={2} dash="8 5" />
          <Line x1={C[0]} y1={C[1]} x2={C[0]} y2={A[1]} c="red" w={1.6} dash="3 4" />
          {[A, B, C].map(([x, y]) => <Dot key={x} x={x} y={y} r={6} c="ink" ring />)}
          <Corner P={A} Q={B} R={C} label="65°" r={34} s={14} />
          <Corner P={B} Q={C} R={A} label="75°" r={34} s={14} />
          <Corner P={C} Q={A} R={B} label="40°" r={44} s={14} />
          <Text x={A[0] - 24} y={A[1] + 6} s={17} b>A</Text>
          <Text x={B[0] + 10} y={B[1] + 6} s={17} b>B</Text>
          <Text x={C[0] + 12} y={C[1] - 2} s={17} b>C</Text>
          <Text x={(A[0] + B[0]) / 2} y={A[1] + 24} a="middle" s={15}>base AB = 80 m</Text>
          <Text x={C[0] + 8} y={150} s={15} c="red">{'largeur ≈ AC · sin 65°\n= 108,9 m'}</Text>
        </g>
      );
    },
    notes: ['Ĉ = 180° − 65° − 75° = 40° ; la loi des sinus donne AC, puis la largeur par projection.'],
    caption: 'Triangulation depuis une seule berge : une base mesurée et deux angles visés.',
  },
  {
    id: 'noeud-obtus',
    title: 'Angle obtus d’un nœud de charpente',
    steps: ['simple_examples'],
    formula: ['\\cos C = \\frac{a^2 + b^2 - c^2}{2ab} = \\frac{25 + 49 - 100}{70} = -0{,}371'],
    h: 270,
    draw: () => {
      const A = [70, 230];
      const B = [430, 230];
      const C = [293.2, 113];
      return (
        <g>
          <Poly pts={[A, B, C]} c="soil" w={7} o={0.85} close />
          {[A, B, C].map(([x, y]) => <Dot key={x} x={x} y={y} r={7} c="ink" ring />)}
          <Corner P={C} Q={A} R={B} label="C = 111,8°" r={30} s={15} />
          <Text x={A[0] - 22} y={A[1] + 6} s={17} b>A</Text>
          <Text x={B[0] + 10} y={B[1] + 6} s={17} b>B</Text>
          <Text x={C[0] - 6} y={C[1] - 46} s={17} b>C</Text>
          <Text x={(A[0] + C[0]) / 2 - 10} y={(A[1] + C[1]) / 2 - 12} a="end" s={16}>b = 7,0 m</Text>
          <Text x={(B[0] + C[0]) / 2 + 12} y={(B[1] + C[1]) / 2 - 8} s={16}>a = 5,0 m</Text>
          <Text x={(A[0] + B[0]) / 2} y={A[1] + 28} a="middle" s={16}>c = 10,0 m</Text>
        </g>
      );
    },
    notes: ['Un cosinus négatif signale un angle obtus (> 90°).'],
    caption: 'Les trois longueurs d’une ferme suffisent pour obtenir ses angles de coupe.',
  },
];
