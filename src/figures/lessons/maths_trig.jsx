// Plates — Module 1 · Trigonométrie de base & Pythagore
import { Angle, Arrow, Circle, Dim, Dot, Ground, Line, Poly, Rect, Text } from '../../components/figures/ink.jsx';
import { House, Person } from '../../components/figures/kit.jsx';

const deg = r => (r * 180) / Math.PI;

export default [
  {
    id: 'triangle-rectangle',
    title: 'Le triangle rectangle',
    steps: ['theory'],
    formula: ['H^2 = \\text{adj}^2 + \\text{opp}^2'],
    h: 300,
    draw: () => {
      const A = [70, 250];
      const B = [420, 250];
      const C = [420, 66];
      const th = deg(Math.atan2(B[1] - C[1], B[0] - A[0]));
      return (
        <g>
          <Poly pts={[A, B, C]} c="ink" w={3} fill="~ink" />
          <Poly pts={[[B[0] - 20, B[1]], [B[0] - 20, B[1] - 20], [B[0], B[1] - 20]]} c="ink" w={1.8} />
          <Angle cx={A[0]} cy={A[1]} r={58} a1={-th} a2={0} label="θ" s={20} lr={16} />
          <Text x={(A[0] + B[0]) / 2} y={B[1] + 30} a="middle" s={19} c="ink" b>adjacent</Text>
          <Text x={B[0] + 12} y={(B[1] + C[1]) / 2 + 6} s={19} c="ink" b>opposé</Text>
          <Text x={(A[0] + C[0]) / 2 - 12} y={(A[1] + C[1]) / 2 - 14} a="middle" s={19} c="red" b rot={-th}>hypoténuse H</Text>
          <Text x={42} y={58} s={16} c="red" b>SOH</Text>
          <Text x={92} y={58} s={16}>sin θ = opp / H</Text>
          <Text x={42} y={84} s={16} c="red" b>CAH</Text>
          <Text x={92} y={84} s={16}>cos θ = adj / H</Text>
          <Text x={42} y={110} s={16} c="red" b>TOA</Text>
          <Text x={92} y={110} s={16}>tan θ = opp / adj</Text>
          <Text x={B[0] - 10} y={B[1] - 28} a="end" s={13} c="mute">90°</Text>
        </g>
      );
    },
    notes: [
      'L’hypoténuse est toujours en face de l’angle droit : c’est le plus grand côté.',
      '« Opposé » et « adjacent » dépendent de l’angle θ choisi.',
    ],
    caption: 'Nommer les côtés par rapport à l’angle θ avant d’écrire sin, cos ou tan.',
  },
  {
    id: 'cercle-trigonometrique',
    title: 'Cercle trigonométrique',
    steps: ['formulas'],
    formula: ['\\sin^2\\theta + \\cos^2\\theta = 1'],
    h: 320,
    draw: () => {
      const cx = 170;
      const cy = 170;
      const r = 125;
      const t = (35 * Math.PI) / 180;
      const px = cx + r * Math.cos(t);
      const py = cy - r * Math.sin(t);
      return (
        <g>
          <Arrow x1={cx - r - 25} y1={cy} x2={cx + r + 30} y2={cy} c="txt" w={1.5} hs={8} />
          <Arrow x1={cx} y1={cy + r + 20} x2={cx} y2={cy - r - 25} c="txt" w={1.5} hs={8} />
          <Circle cx={cx} cy={cy} r={r} c="ink" sw={2.4} />
          <Poly pts={[[cx, cy], [px, cy], [px, py]]} c="ink" w={0} fill="~ink" />
          <Line x1={cx} y1={cy} x2={px} y2={py} c="ink" w={2.6} />
          <Line x1={px} y1={py} x2={px} y2={cy} c="red" w={3} />
          <Line x1={cx} y1={cy} x2={px} y2={cy} c="green" w={3.4} />
          <Dot x={px} y={py} r={5} c="ink" />
          <Angle cx={cx} cy={cy} r={34} a1={-35} a2={0} label="θ" s={17} />
          <Text x={px + 8} y={py - 6} s={15} c="ink">M (cos θ ; sin θ)</Text>
          <Text x={px + 8} y={(py + cy) / 2 + 5} s={16} c="red">sin θ</Text>
          <Text x={(cx + px) / 2} y={cy + 22} a="middle" s={16} c="green">cos θ</Text>
          <Text x={(cx + px) / 2 - 18} y={(cy + py) / 2 - 6} a="middle" s={15} c="ink">1</Text>
          <Text x={cx + r + 8} y={cy - 8} s={13} c="mute">x</Text>
          <Text x={cx + 8} y={cy - r - 10} s={13} c="mute">y</Text>
          <Text x={330} y={70} s={16} b c="ink">Rayon = 1</Text>
          <Text x={330} y={100} s={15}>{'Pythagore dans le triangle\nOMH : cos²θ + sin²θ = 1'}</Text>
          <Text x={330} y={170} s={15}>{'θ = 30° : sin = 0,50\nθ = 45° : sin = cos = 0,707\nθ = 60° : cos = 0,50'}</Text>
        </g>
      );
    },
    notes: ['Sur le cercle de rayon 1, le cosinus se lit sur l’axe horizontal et le sinus sur l’axe vertical.'],
    caption: 'Le cercle trigonométrique relie les fonctions sinus et cosinus au théorème de Pythagore.',
  },
  {
    id: 'arbaletrier',
    title: 'Longueur d’un arbalétrier',
    steps: ['stepbystep'],
    formula: ['H = \\sqrt{8{,}00^2 + 2{,}40^2} = 8{,}35\\ \\text{m}'],
    h: 300,
    draw: () => {
      const x1 = 70;
      const x2 = 430;
      const yb = 220;
      const rise = 108;
      const th = deg(Math.atan2(rise, x2 - x1));
      return (
        <g>
          <Rect x={x1 - 16} y={yb} w={16} h={60} c="grey" sw={1.6} fill="pat:block" bg="~grey" />
          <Rect x={x2 - 8} y={yb - rise} w={16} h={rise + 60} c="grey" sw={1.6} fill="pat:block" bg="~grey" />
          <Ground x1={30} x2={470} y={280} />
          <Line x1={x1} y1={yb} x2={x2} y2={yb - rise} c="soil" w={9} o={0.85} />
          <Line x1={x1} y1={yb} x2={x2} y2={yb} c="grey" w={1.4} dash="6 5" />
          <Line x1={x2} y1={yb} x2={x2} y2={yb - rise} c="grey" w={1.4} dash="6 5" />
          <Angle cx={x1} cy={yb} r={70} a1={-th} a2={0} label="θ = 16,70°" s={14} lr={42} />
          <Dim x1={x1} y1={yb} x2={x2} y2={yb} off={34} label="portée horizontale 8,00 m" side={-1} s={14} />
          <Dim x1={x2} y1={yb} x2={x2} y2={yb - rise} off={-30} label="2,40 m" side={-1} s={14} />
          <Text x={(x1 + x2) / 2 - 10} y={(2 * yb - rise) / 2 - 16} a="middle" s={16} c="red" b rot={-th}>H = 8,35 m</Text>
          <Text x={90} y={60} s={15}>{'pente 30 % :\ntan θ = 0,30'}</Text>
          <Poly pts={[[250, 90], [350, 90], [350, 60]]} c="red" w={1.6} />
          <Text x={300} y={108} a="middle" s={13} c="red">100</Text>
          <Text x={356} y={80} s={13} c="red">30</Text>
        </g>
      );
    },
    notes: ['Une pente en % est une tangente : 30 % = 30 cm de montée pour 100 cm à l’horizontale.'],
    caption: 'Arbalétrier de toiture : portée horizontale, montée verticale et longueur réelle.',
  },
  {
    id: 'equerrage-3-4-5',
    title: 'Équerrer un angle sur le terrain : 3-4-5',
    steps: ['simple_examples'],
    formula: ['6^2 + 8^2 = 10^2'],
    h: 300,
    draw: () => {
      const O = [100, 262];
      const k = 26;
      const A = [O[0] + 6 * k * 1.15, O[1]];
      const B = [O[0], O[1] - 8 * k];
      return (
        <g>
          <Rect x={O[0] - 60} y={B[1] - 10} w={60} h={O[1] - B[1] + 40} c="grey" sw={1.5} fill="pat:hatch" bg="~grey" />
          <Text x={O[0] - 30} y={(O[1] + B[1]) / 2} a="middle" s={13} c="mute" rot={-90}>bâtiment existant</Text>
          <Line x1={O[0]} y1={O[1]} x2={A[0] + 60} y2={O[1]} c="ink" w={2.4} />
          <Line x1={O[0]} y1={O[1]} x2={B[0]} y2={B[1] - 10} c="ink" w={2.4} />
          <Line x1={A[0]} y1={A[1]} x2={B[0]} y2={B[1]} c="red" w={2.6} dash="8 5" />
          <Poly pts={[[O[0] + 18, O[1]], [O[0] + 18, O[1] - 18], [O[0], O[1] - 18]]} c="red" w={1.8} />
          {[O, A, B].map(([x, y]) => <Dot key={`${x}-${y}`} x={x} y={y} r={6} c="soil" ring />)}
          <Text x={(O[0] + A[0]) / 2} y={O[1] + 26} a="middle" s={16}>a = 6,00 m</Text>
          <Text x={O[0] + 12} y={(O[1] + B[1]) / 2} s={16}>b = 8,00 m</Text>
          <Text x={(A[0] + B[0]) / 2 + 26} y={(A[1] + B[1]) / 2} s={17} c="red" b>c = 10,00 m</Text>
          <Text x={300} y={66} s={15}>{'piquets + cordeau :\nsi la diagonale mesure 10,00 m,\nl’angle est droit'}</Text>
          <Text x={A[0] + 10} y={A[1] - 12} s={13} c="soil">piquet</Text>
        </g>
      );
    },
    notes: ['Tout multiple de 3-4-5 fonctionne : plus le triangle est grand, plus l’équerrage est précis.'],
    caption: 'Réciproque de Pythagore : on vérifie un angle droit par une simple mesure de diagonale.',
  },
  {
    id: 'rampe-pmr',
    title: 'Rampe d’accès PMR à 5 %',
    steps: ['practical_case'],
    formula: ['L = \\frac{0{,}60}{0{,}05} = 12{,}00\\ \\text{m}'],
    h: 290,
    draw: () => {
      const x1 = 40;
      const x2 = 400;
      const yb = 230;
      const rise = 72;
      return (
        <g>
          <Ground x1={20} x2={480} y={yb} />
          <Poly pts={[[x1, yb], [x2, yb - rise], [x2, yb]]} c="grey" w={2} fill="pat:concrete" bg="~grey" />
          <Rect x={x2} y={yb - rise} w={70} h={rise} c="grey" sw={2} fill="pat:hatch" bg="~grey" />
          <House x={x2 + 4} y={yb - rise} w={62} h={70} />
          <Person x={330} y={yb - rise * (290 / (x2 - x1)) - 1} k={0.8} />
          <Dim x1={x1} y1={yb} x2={x2} y2={yb} off={26} label="L = 12,00 m au sol" side={-1} s={14} />
          <Dim x1={x2} y1={yb} x2={x2} y2={yb - rise} off={-24} label="0,60 m" s={13} side={1} />
          <Text x={(x1 + x2) / 2 - 40} y={(2 * yb - rise) / 2 - 8} a="middle" s={15} c="red" b rot={-11.3}>R = 12,015 m — pente 5 %</Text>
          <Text x={30} y={40} s={13} c="mute">échelle verticale exagérée (× 4)</Text>
          <Text x={250} y={70} s={15} c="green">{'θ = arctan 0,05 = 2,86° ✔'}</Text>
        </g>
      );
    },
    notes: ['Avec une pente faible, la rampe et sa projection ont presque la même longueur (12,015 m contre 12,00 m).'],
    caption: 'Rampe d’accès : la pente maximale fixe la longueur au sol à réserver.',
  },
];
