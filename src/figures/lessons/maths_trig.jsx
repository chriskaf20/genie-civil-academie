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
          <Text x={318} y={62} s={16} b c="ink">Rayon = 1</Text>
          <Text x={318} y={130} s={14}>{'Pythagore (triangle OMH) :\ncos²θ + sin²θ = 1'}</Text>
          <Text x={318} y={196} s={14}>{'30° : sin = 0,50\n45° : sin = cos = 0,707\n60° : cos = 0,50'}</Text>
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
  {
    id: 'aplomb-voile',
    title: 'Contrôle d’aplomb d’un voile coffré',
    steps: ['real_examples'],
    formula: ['\\Delta x = H \\sin\\Delta\\theta = 6\\,000 \\times \\sin 0{,}2° = 20{,}9\\ \\text{mm}'],
    h: 290,
    draw: () => (
      <g>
        <Rect x={20} y={260} w={460} h={16} c="soil" sw={0} fill="pat:soil" />
        <Line x1={20} y1={260} x2={480} y2={260} c="ink" w={2} />
        <Poly pts={[[180, 260], [200, 260], [214, 60], [194, 60]]} c="ink" w={2.4} fill="pat:concrete" close />
        {[[90, 150], [120, 205]].map(([x, y]) => (
          <g key={x}>
            <Line x1={x} y1={260} x2={184 + (260 - y) * 0.07} y2={y} c="ink" w={2.2} />
            <Rect x={(x + 184) / 2 - 6} y={(260 + y) / 2 - 5} w={12} h={10} c="orange" sw={1.4} fill="~orange" />
          </g>
        ))}
        <Text x={40} y={200} s={12} c="orange" b>{'étais à\nvérins'}</Text>
        <Rect x={232} y={248} w={16} h={12} c="red" sw={1.6} fill="~red" />
        <Line x1={240} y1={248} x2={240} y2={50} c="red" w={1.8} dash="6 4" />
        <Text x={252} y={258} s={12} c="red">laser</Text>
        <Arrow x1={215} y1={70} x2={239} y2={70} c="txt" w={1.2} hs={5} both />
        <Arrow x1={201} y1={240} x2={239} y2={240} c="txt" w={1.2} hs={5} both />
        <Text x={248} y={74} s={12}>a</Text>
        <Text x={246} y={232} s={12}>b</Text>
        <Arrow x1={300} y1={61} x2={300} y2={259} c="txt" w={1.2} hs={5} both />
        <Text x={306} y={164} s={13} b>H = 6,00 m</Text>
        <Text x={340} y={110} s={13} c="red" b>{'Δx = b − a = 20,9 mm'}</Text>
        <Text x={340} y={132} s={12}>{'tolérance : 15 mm\n→ régler les vérins'}</Text>
        <Text x={340} y={210} s={11} c="mute">inclinaison exagérée sur le dessin</Text>
      </g>
    ),
    notes: ['Un écart d’angle de 0,2° paraît négligeable mais donne 21 mm en tête de voile : on règle les étais avant de bétonner.'],
    caption: 'La mesure de deux distances au faisceau laser vertical donne le faux aplomb du voile.',
  },
  {
    id: 'opp-adj-selon-angle',
    title: 'Opposé et adjacent dépendent de l’angle choisi',
    steps: ['theory'],
    h: 250,
    draw: () => (
      <g>
        {[0, 250].map((dx, k) => {
          const A = [40 + dx, 200];
          const B = [220 + dx, 200];
          const C = [220 + dx, 70];
          return (
            <g key={dx}>
              <Poly pts={[A, B, C]} c="ink" w={2.6} fill="~ink" close />
              <Rect x={B[0] - 14} y={B[1] - 14} w={14} h={14} c="ink" sw={1.4} />
              <Line x1={A[0]} y1={A[1]} x2={B[0]} y2={B[1]} c={k ? 'red' : 'green'} w={4} />
              <Line x1={B[0]} y1={B[1]} x2={C[0]} y2={C[1]} c={k ? 'green' : 'red'} w={4} />
              <Text x={(A[0] + B[0]) / 2} y={224} a="middle" s={13} c={k ? 'red' : 'green'} b>{k ? 'opposé à φ' : 'adjacent à θ'}</Text>
              <Text x={k ? B[0] - 8 : B[0] + 8} y={k ? 168 : 140} a={k ? 'end' : 'start'} s={13} c={k ? 'green' : 'red'} b>{k ? 'adjacent\nà φ' : 'opposé\nà θ'}</Text>
              <Text x={(A[0] + C[0]) / 2 - 14} y={(A[1] + C[1]) / 2 - 8} a="end" s={13} b>H</Text>
              {k === 0 ? <Angle cx={A[0]} cy={A[1]} r={40} a1={-35.8} a2={0} label="θ" c="red" s={16} />
                : <Angle cx={C[0]} cy={C[1]} r={34} a1={90} a2={144.2} label="φ" c="red" s={16} />}
              <Text x={130 + dx} y={30} a="middle" s={13} b>{k ? 'vu depuis φ = 90° − θ' : 'vu depuis θ'}</Text>
            </g>
          );
        })}
      </g>
    ),
    notes: ['L’hypoténuse ne change jamais (face à l’angle droit) ; les deux autres côtés échangent leur nom quand on change d’angle.'],
    caption: 'Même triangle, deux angles de référence : on nomme toujours les côtés par rapport à l’angle utilisé.',
  },
  {
    id: 'pythagore-carres',
    title: 'Pythagore : l’aire des carrés',
    steps: ['formulas'],
    formula: ['H^2 = \\text{adj}^2 + \\text{opp}^2 \\quad\\Rightarrow\\quad 5^2 = 4^2 + 3^2'],
    h: 300,
    draw: () => {
      const A = [92, 190];
      const B = [180, 190];
      const C = [180, 124];
      const P = [114, 36];
      const Q = [26, 102];
      const lerp = (p, q, t) => [p[0] + (q[0] - p[0]) * t, p[1] + (q[1] - p[1]) * t];
      return (
        <g>
          <Poly pts={[A, C, P, Q]} c="red" w={2.2} fill="~red" close />
          {[1, 2, 3, 4].map(k => {
            const [a, b] = [lerp(A, C, k / 5), lerp(Q, P, k / 5)];
            const [c, d] = [lerp(A, Q, k / 5), lerp(C, P, k / 5)];
            return <g key={k}><Line x1={a[0]} y1={a[1]} x2={b[0]} y2={b[1]} c="red" w={0.8} o={0.6} /><Line x1={c[0]} y1={c[1]} x2={d[0]} y2={d[1]} c="red" w={0.8} o={0.6} /></g>;
          })}
          <Rect x={92} y={190} w={88} h={88} c="green" sw={2.2} fill="~green" />
          {[1, 2, 3].map(k => <g key={k}><Line x1={92 + 22 * k} y1={190} x2={92 + 22 * k} y2={278} c="green" w={0.8} o={0.6} /><Line x1={92} y1={190 + 22 * k} x2={180} y2={190 + 22 * k} c="green" w={0.8} o={0.6} /></g>)}
          <Rect x={180} y={124} w={66} h={66} c="water" sw={2.2} fill="~water" />
          {[1, 2].map(k => <g key={k}><Line x1={180 + 22 * k} y1={124} x2={180 + 22 * k} y2={190} c="water" w={0.8} o={0.6} /><Line x1={180} y1={124 + 22 * k} x2={246} y2={124 + 22 * k} c="water" w={0.8} o={0.6} /></g>)}
          <Poly pts={[A, B, C]} c="ink" w={2.8} fill="paper" close />
          <Text x={70} y={110} a="middle" s={18} c="red" b>25</Text>
          <Text x={136} y={240} a="middle" s={18} c="green" b>16</Text>
          <Text x={213} y={163} a="middle" s={18} c="water" b>9</Text>
          <Text x={300} y={120} s={16} b>{'4² + 3² = 5²\n16 + 9 = 25'}</Text>
          <Text x={300} y={190} s={13} c="mute">{'triangles « 3-4-5 » :\n6-8-10, 9-12-15…\npour tracer un angle droit'}</Text>
        </g>
      );
    },
    notes: ['Le carré construit sur l’hypoténuse a la même aire que les deux autres réunis : c’est ce qu’exprime $H^2 = \\text{adj}^2 + \\text{opp}^2$.'],
    caption: 'Triangle 3-4-5 : 9 + 16 carreaux remplissent exactement le grand carré de 25.',
  },
  {
    id: 'sinus-echelle',
    title: 'Sinus : la hauteur atteinte par une échelle',
    steps: ['formulas'],
    formula: ['\\sin\\theta = \\frac{\\text{opp}}{H} \\Rightarrow h = L\\sin\\theta = 5{,}00 \\times \\sin 75° = 4{,}83\\ \\text{m}'],
    h: 286,
    draw: () => (
      <g>
        <Rect x={300} y={40} w={40} h={200} c="ink" sw={2} fill="pat:brick" />
        <Rect x={60} y={240} w={300} h={12} c="soil" sw={0} fill="pat:soil" />
        <Line x1={60} y1={240} x2={360} y2={240} c="ink" w={2} />
        <Line x1={250} y1={240} x2={296} y2={66} c="ink" w={2.4} />
        <Line x1={258} y1={240} x2={304} y2={68} c="ink" w={2.4} o={0} />
        {Array.from({ length: 9 }, (_, k) => { const t = (k + 1) / 10; const x = 250 + 46 * t; const y = 240 - 174 * t; return <Line key={k} x1={x - 7} y1={y} x2={x + 5} y2={y} c="ink" w={1.8} />; })}
        <Line x1={256} y1={240} x2={302} y2={66} c="ink" w={2.4} />
        <Angle cx={250} cy={240} r={42} a1={-75} a2={0} label="75°" c="red" s={14} />
        <Text x={236} y={150} a="end" s={14} b>L = 5,00 m</Text>
        <Arrow x1={380} y1={239} x2={380} y2={67} c="red" w={1.4} hs={6} both />
        <Text x={386} y={158} s={14} c="red" b>{'h = 4,83 m'}</Text>
        <Arrow x1={251} y1={258} x2={299} y2={258} c="green" w={1.2} hs={5} both />
        <Text x={275} y={274} a="middle" s={12} c="green">1,29 m</Text>
      </g>
    ),
    notes: ['Règle de chantier : pied de l’échelle à environ ¼ de la hauteur, soit un angle voisin de 75°.'],
    caption: 'Le sinus relie l’hypoténuse (l’échelle) au côté opposé à l’angle (la hauteur atteinte).',
  },
  {
    id: 'cosinus-projection',
    title: 'Cosinus : longueur réelle et longueur en plan',
    steps: ['formulas'],
    formula: ['\\cos\\theta = \\frac{\\text{adj}}{H} \\Rightarrow \\text{adj} = H\\cos\\theta = 8{,}35 \\times \\cos 16{,}7° = 8{,}00\\ \\text{m}'],
    h: 250,
    draw: () => (
      <g>
        <Poly pts={[[60, 200], [420, 92], [420, 200]]} c="ink" w={0} fill="~ink" close />
        <Line x1={60} y1={200} x2={420} y2={92} c="ink" w={3.4} />
        <Line x1={60} y1={200} x2={420} y2={200} c="green" w={3} />
        <Line x1={420} y1={200} x2={420} y2={92} c="grey" w={1.4} dash="5 4" />
        <Angle cx={60} cy={200} r={60} a1={-16.7} a2={0} label="16,7°" c="red" s={13} lr={30} />
        <Text x={230} y={132} a="middle" s={14} b rot={-16.7}>arbalétrier H = 8,35 m</Text>
        <Text x={240} y={222} a="middle" s={14} c="green" b>projection en plan : 8,00 m</Text>
        <Text x={428} y={150} s={12}>2,40 m</Text>
      </g>
    ),
    notes: ['Sur un plan de toiture, les longueurs sont projetées : la vraie longueur du bois à commander est $H = \\text{adj}/\\cos\\theta$.'],
    caption: 'La longueur mesurée sur le plan est la projection horizontale de la pièce inclinée.',
  },
  {
    id: 'tangente-pente',
    title: 'Tangente : la pente en pourcentage',
    steps: ['formulas'],
    formula: ['p = \\tan\\theta = \\frac{\\Delta h}{d} \\qquad 6\\ \\% \\Rightarrow \\theta = \\arctan 0{,}06 = 3{,}43°'],
    h: 270,
    draw: () => (
      <g>
        <Line x1={60} y1={210} x2={440} y2={96} c="ink" w={3.4} />
        <Line x1={60} y1={210} x2={440} y2={210} c="grey" w={1.4} dash="5 4" />
        <Line x1={440} y1={210} x2={440} y2={96} c="red" w={2.4} />
        <Text x={250} y={232} a="middle" s={13}>d = 100 m</Text>
        <Text x={432} y={170} a="end" s={13} c="red" b>Δh = 6 m</Text>
        <Angle cx={60} cy={210} r={70} a1={-16.7} a2={0} label="θ" c="red" s={15} />
        <Text x={240} y={140} a="middle" s={13} b rot={-16.7}>route à 6 %</Text>
        <Text x={60} y={36} s={12} c="mute">échelle verticale × 5</Text>
        <Text x={60} y={258} s={12}>{'5 % → 2,86° · 10 % → 5,71° · 30 % → 16,70° · 100 % → 45°'}</Text>
      </g>
    ),
    notes: ['Une pente en % est une tangente : 6 % signifie 6 m de dénivelée pour 100 m horizontaux, et non un angle de 6°.'],
    caption: 'Pente d’une route : dénivelée sur distance horizontale.',
  },
  {
    id: 'repere-triangle',
    title: 'Le triangle dans un repère',
    steps: ['diagrams'],
    formula: ['M = (H\\cos\\theta\\ ;\\ H\\sin\\theta)'],
    h: 270,
    draw: () => {
      const O = [80, 220];
      const M = [80 + 200 * Math.cos(Math.PI * 35 / 180), 220 - 200 * Math.sin(Math.PI * 35 / 180)];
      return (
        <g>
          <Arrow x1={O[0]} y1={O[1]} x2={460} y2={O[1]} c="txt" w={1.6} hs={8} />
          <Arrow x1={O[0]} y1={O[1]} x2={O[0]} y2={30} c="txt" w={1.6} hs={8} />
          <Poly pts={[O, [M[0], O[1]], M]} c="ink" w={2.6} fill="~ink" close />
          <Line x1={O[0]} y1={O[1]} x2={M[0]} y2={O[1]} c="green" w={4} />
          <Line x1={M[0]} y1={O[1]} x2={M[0]} y2={M[1]} c="red" w={4} />
          <Line x1={O[0]} y1={M[1]} x2={M[0]} y2={M[1]} c="grey" w={1.2} dash="4 4" />
          <Angle cx={O[0]} cy={O[1]} r={46} a1={-35} a2={0} label="θ" c="red" s={15} />
          <Text x={(O[0] + M[0]) / 2} y={242} a="middle" s={13} c="green" b>adjacent = H cos θ (axe x)</Text>
          <Text x={M[0] + 8} y={170} s={13} c="red" b>{'opposé = H sin θ\n(axe y)'}</Text>
          <Text x={140} y={140} a="end" s={14} b rot={-35}>hypoténuse H</Text>
          <Text x={M[0] + 6} y={M[1] - 8} s={13} b>M</Text>
          <Text x={70} y={M[1] + 4} a="end" s={12} c="mute">H sin θ</Text>
        </g>
      );
    },
    notes: ['C’est ainsi qu’un logiciel décompose une barre ou une force inclinée : composante sur x, composante sur y.'],
    caption: 'Adjacent sur l’axe des abscisses, opposé sur l’axe des ordonnées, hypoténuse en diagonale.',
  },
];
