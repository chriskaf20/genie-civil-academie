// Plates — Module 1 · Calcul vectoriel, projection de forces & équilibre
import { Angle, Arrow, Dim, Dot, Force, Ground, Line, Poly, Rect, Text } from '../../components/figures/ink.jsx';
import { Crane } from '../../components/figures/kit.jsx';

const rad = d => (d * Math.PI) / 180;

export default [
  {
    id: 'projections',
    title: 'Projeter une force et calculer son moment',
    steps: ['theory'],
    formula: ['F_x = F\\cos\\theta', 'F_y = F\\sin\\theta', 'M_{/O} = F \\cdot d'],
    h: 300,
    draw: () => {
      const ox = 70;
      const oy = 240;
      const F = 150;
      const th = 35;
      const fx = ox + F * Math.cos(rad(th));
      const fy = oy - F * Math.sin(rad(th));
      // moment panel
      const P = [330, 230];
      const A = [400, 110];
      const dirF = [Math.cos(rad(-60)), Math.sin(rad(-60))];
      const O = [300, 120];
      // foot of perpendicular from O to the line of action through A
      const t = (O[0] - A[0]) * dirF[0] + (O[1] - A[1]) * dirF[1];
      const H = [A[0] + t * dirF[0], A[1] + t * dirF[1]];
      return (
        <g>
          <Arrow x1={ox - 20} y1={oy} x2={250} y2={oy} c="txt" w={1.4} hs={8} />
          <Arrow x1={ox} y1={oy + 20} x2={ox} y2={60} c="txt" w={1.4} hs={8} />
          <Text x={254} y={oy + 5} s={14} c="mute">x</Text>
          <Text x={ox + 6} y={60} s={14} c="mute">y</Text>
          <Line x1={fx} y1={fy} x2={fx} y2={oy} c="grey" w={1.2} dash="4 4" />
          <Line x1={fx} y1={fy} x2={ox} y2={fy} c="grey" w={1.2} dash="4 4" />
          <Arrow x1={ox} y1={oy} x2={fx} y2={oy} c="green" w={3} />
          <Arrow x1={ox} y1={oy} x2={ox} y2={fy} c="orange" w={3} />
          <Arrow x1={ox} y1={oy} x2={fx} y2={fy} c="red" w={3.4} hs={12} />
          <Angle cx={ox} cy={oy} r={42} a1={-th} a2={0} label="θ" s={16} />
          <Text x={(ox + fx) / 2} y={oy + 24} a="middle" s={16} c="green">F_x = F cos θ</Text>
          <Text x={ox - 8} y={(oy + fy) / 2} a="end" s={16} c="orange">F_y</Text>
          <Text x={fx + 6} y={fy - 4} s={18} c="red" b>F</Text>

          <Line x1={P[0] - 30} y1={P[1] + 20} x2={A[0] + 40} y2={A[1] - 70} c="grey" w={1} dash="10 6" />
          <Force x={A[0] + 20} y={A[1] - 35} ang={-60} len={70} c="red" label="F" lx={A[0] + 30} ly={A[1] - 40} />
          <Dot x={O[0]} y={O[1]} r={5} c="ink" />
          <Text x={O[0] - 18} y={O[1] + 6} s={16} b>O</Text>
          <Line x1={O[0]} y1={O[1]} x2={H[0]} y2={H[1]} c="ink" w={2} />
          <Text x={(O[0] + H[0]) / 2 - 4} y={(O[1] + H[1]) / 2 + 20} s={16} c="ink">d</Text>
          <Text x={300} y={268} s={13} c="mute">{'d = distance de O à la ligne\nd’action (perpendiculaire)'}</Text>
        </g>
      );
    },
    notes: ['Le bras de levier d se mesure perpendiculairement à la ligne d’action, pas jusqu’au point d’application.'],
    caption: 'Composantes d’une force dans un repère, et moment d’une force par rapport à un point.',
  },
  {
    id: 'noeud-deux-barres',
    title: 'Équilibre d’un nœud et polygone des forces',
    steps: ['stepbystep'],
    formula: ['\\sum F_x = 0', '\\sum F_y = 0'],
    h: 310,
    draw: () => {
      const N = [190, 180];
      const ceil = 80;
      const k = 2.4;
      const T2 = [Math.cos(rad(45)), -Math.sin(rad(45))];
      const S = [370, 60];
      const p1 = [S[0], S[1] + 50 * k];
      const p2 = [p1[0] + T2[0] * 44.82 * k, p1[1] + T2[1] * 44.82 * k];
      const rise = N[1] - ceil;
      return (
        <g>
          <Rect x={8} y={ceil - 14} w={302} h={14} c="grey" sw={1.4} fill="pat:hatch" bg="~grey" />
          <Line x1={N[0]} y1={N[1]} x2={N[0] - rise / Math.tan(rad(30))} y2={ceil} c="ink" w={4} />
          <Line x1={N[0]} y1={N[1]} x2={N[0] + rise} y2={ceil} c="ink" w={4} />
          <Dot x={N[0]} y={N[1]} r={7} c="ink" ring />
          <Force x={N[0]} y={N[1] + 76} len={70} c="red" label="P = 50 kN" lx={N[0] + 8} ly={N[1] + 66} />
          <Angle cx={N[0]} cy={N[1]} r={40} a1={180} a2={210} label="30°" s={13} c="ink" />
          <Angle cx={N[0]} cy={N[1]} r={40} a1={-45} a2={0} label="45°" s={13} c="ink" />
          <Line x1={N[0] - 60} y1={N[1]} x2={N[0] + 60} y2={N[1]} c="grey" w={1} dash="4 4" />
          <Text x={96} y={116} s={16} c="ink">T₁ (barre 1)</Text>
          <Text x={250} y={140} s={16} c="ink">T₂</Text>

          <Text x={S[0] - 14} y={S[1] - 14} s={14} b c="mute">polygone des forces</Text>
          <Arrow x1={S[0]} y1={S[1]} x2={p1[0]} y2={p1[1]} c="red" w={2.6} />
          <Arrow x1={p1[0]} y1={p1[1]} x2={p2[0]} y2={p2[1]} c="ink" w={2.6} />
          <Arrow x1={p2[0]} y1={p2[1]} x2={S[0]} y2={S[1]} c="green" w={2.6} />
          <Text x={S[0] - 8} y={(S[1] + p1[1]) / 2} a="end" s={14} c="red">50 kN</Text>
          <Text x={(p1[0] + p2[0]) / 2 + 6} y={(p1[1] + p2[1]) / 2 + 16} s={14} c="ink">T₂ = 44,82 kN</Text>
          <Text x={(p2[0] + S[0]) / 2 + 8} y={(p2[1] + S[1]) / 2 - 6} s={14} c="green">T₁ = 36,60 kN</Text>
          <Text x={370} y={270} s={13} c="mute">{'le polygone se referme :\nΣF = 0'}</Text>
        </g>
      );
    },
    notes: ['Les deux équations de projection donnent les deux inconnues T₁ et T₂ ; le polygone fermé le vérifie graphiquement.'],
    caption: 'Nœud suspendu par deux barres à 30° et 45° sous une charge de 50 kN.',
  },
  {
    id: 'poids-pente',
    title: 'Décomposer un poids sur un versant',
    steps: ['simple_examples'],
    formula: ['P_n = P\\cos\\theta', 'P_t = P\\sin\\theta'],
    h: 290,
    draw: () => {
      const th = 25;
      const A = [40, 250];
      const B = [460, 250];
      const C = [460, 250 - 420 * Math.tan(rad(th))];
      const S = [270, 250 - 230 * Math.tan(rad(th))];
      const u = [Math.cos(rad(th)), -Math.sin(rad(th))];
      const n = [Math.sin(rad(th)), Math.cos(rad(th))];
      const G = [S[0] - 17 * n[0], S[1] - 17 * n[1]];
      const L = 110;
      const pn = L * Math.cos(rad(th));
      const pt = L * Math.sin(rad(th));
      return (
        <g>
          <Poly pts={[A, B, C]} c="soil" w={2} fill="pat:hatch" bg="~soil" />
          <g transform={`rotate(${-th} ${S[0]} ${S[1]})`}>
            <Rect x={S[0] - 40} y={S[1] - 34} w={80} h={34} c="ink" sw={2.2} fill="~ink" />
          </g>
          <Arrow x1={G[0]} y1={G[1]} x2={G[0]} y2={G[1] + L} c="red" w={3} />
          <Arrow x1={G[0]} y1={G[1]} x2={G[0] + n[0] * pn} y2={G[1] + n[1] * pn} c="ink" w={2.6} />
          <Arrow x1={G[0]} y1={G[1]} x2={G[0] - u[0] * pt} y2={G[1] - u[1] * pt} c="orange" w={2.6} />
          <Line x1={G[0] + n[0] * pn} y1={G[1] + n[1] * pn} x2={G[0]} y2={G[1] + L} c="grey" w={1} dash="3 4" />
          <Dot x={G[0]} y={G[1]} r={4} c="red" />
          <Text x={G[0] - 8} y={G[1] + L + 14} a="end" s={15} c="red">P = 20 kN</Text>
          <Text x={G[0] + n[0] * pn + 8} y={G[1] + n[1] * pn + 6} s={15} c="ink">P_n = 18,13 kN</Text>
          <Text x={G[0] - u[0] * pt - 6} y={G[1] - u[1] * pt - 8} a="end" s={15} c="orange">P_t = 8,45 kN</Text>
          <Angle cx={A[0]} cy={A[1]} r={70} a1={-th} a2={0} label="25°" s={14} />
        </g>
      );
    },
    notes: ['P_n plaque la charge contre le versant ; P_t la fait glisser et doit être reprise par le frottement ou des fixations.'],
    caption: 'Projection du poids selon la normale et la tangente à un toit incliné à 25°.',
  },
  {
    id: 'contrepoids-grue',
    title: 'Contrepoids d’une grue à tour',
    steps: ['practical_case'],
    formula: ['P_c \\cdot 10 \\geq 1{,}5 \\times 80 \\times 25'],
    h: 300,
    draw: () => (
      <g>
        <Ground x1={20} x2={480} y={270} />
        <Crane x={180} y={270} h={180} jib={250} />
        <Force x={180 + 175} y={160} len={40} c="red" label="80 kN" />
        <Rect x={340} y={130} w={30} h={30} c="grey" sw={1.6} fill="~grey" />
        <Force x={180 - 70} y={120} len={36} c="ink" label="P_c" lx={60} ly={110} />
        <Dim x1={180} y1={70} x2={180 + 175} y2={70} label="25 m" s={14} />
        <Dim x1={180 - 72} y1={70} x2={180} y2={70} label="10 m" s={14} />
        <Dot x={180} y={270} r={5} c="red" ring />
        <Text x={190} y={258} s={13} c="red">pivot de basculement</Text>
        <Text x={260} y={232} s={14}>{'M renversant = 80 × 25 = 2 000 kN·m\nM stabilisant ≥ 1,5 × 2 000 = 3 000 kN·m\n⇒ P_c = 300 kN (30 t)'}</Text>
      </g>
    ),
    notes: ['On écrit l’équilibre des moments autour du point de basculement, avec un coefficient de sécurité de 1,5.'],
    caption: 'Le contrepoids équilibre le moment de la charge levée en bout de flèche.',
  },
];
