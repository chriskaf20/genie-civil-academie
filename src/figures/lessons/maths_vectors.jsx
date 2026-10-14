// Plates — Module 1 · Calcul vectoriel, projection de forces & équilibre
import { Angle, Arrow, Dim, Dot, Force, Ground, Line, Poly, Rect, Text } from '../../components/figures/ink.jsx';
import { Crane } from '../../components/figures/kit.jsx';
import { Circle, Moment } from '../../components/figures/kit.jsx';

const rad = d => (d * Math.PI) / 180;

export default [
  {
    id: 'projections',
    title: 'Projeter une force et calculer son moment',
    steps: ['theory', 'formulas'],
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
          <Text x={(p2[0] + S[0]) / 2 - 2} y={(p2[1] + S[1]) / 2 - 6} s={14} c="green">T₁ = 36,60 kN</Text>
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
    steps: ['simple_examples', 'diagrams'],
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
        <Text x={232} y={196} s={13}>{'M renversant = 80 × 25 = 2 000 kN·m\nM stabilisant ≥ 1,5 × 2 000 = 3 000 kN·m\n⇒ P_c = 300 kN (30 t)'}</Text>
      </g>
    ),
    notes: ['On écrit l’équilibre des moments autour du point de basculement, avec un coefficient de sécurité de 1,5.'],
    caption: 'Le contrepoids équilibre le moment de la charge levée en bout de flèche.',
  },
  {
    id: 'pylone-hauban',
    title: 'Hauban d’un pylône sous le vent',
    steps: ['real_examples'],
    formula: ['T\\cos 40° = W \\Rightarrow T = \\frac{35}{0{,}766} = 45{,}7\\ \\text{kN}'],
    h: 280,
    draw: () => (
      <g>
        <Rect x={20} y={250} w={300} h={14} c="soil" sw={0} fill="pat:soil" />
        <Line x1={20} y1={250} x2={320} y2={250} c="ink" w={2} />
        <Line x1={260} y1={250} x2={260} y2={100} c="ink" w={5} />
        <Line x1={260} y1={100} x2={81} y2={250} c="red" w={2.4} />
        <Rect x={73} y={248} w={16} h={10} c="ink" sw={1.4} fill="txt" />
        <Angle cx={81} cy={250} r={46} a1={-40} a2={0} label="40°" c="red" s={13} />
        <Arrow x1={180} y1={100} x2={256} y2={100} c="water" w={3} hs={10} />
        <Text x={176} y={92} a="end" s={13} c="water" b>W = 35 kN</Text>
        <Text x={150} y={170} s={13} c="red" b>T</Text>
        <Text x={266} y={180} s={12}>mât</Text>
        <Text x={390} y={130} a="middle" s={12} b>équilibre de la tête</Text>
        <Arrow x1={340} y1={150} x2={440} y2={150} c="water" w={2.6} hs={9} />
        <Arrow x1={440} y1={150} x2={341} y2={233} c="red" w={2.6} hs={9} />
        <Arrow x1={340} y1={233} x2={340} y2={151} c="ink" w={2.6} hs={9} />
        <Text x={390} y={144} a="middle" s={12} c="water">W</Text>
        <Text x={400} y={204} s={12} c="red" b>T = 45,7 kN</Text>
        <Text x={334} y={196} a="end" s={12}>{'N = 29,4 kN'}</Text>
      </g>
    ),
    notes: ['La composante horizontale du hauban équilibre le vent ; sa composante verticale $T \\sin 40° = 29{,}4$ kN comprime le mât et tire sur l’ancrage.'],
    caption: 'Le triangle des forces se ferme : vent, tension du hauban et réaction du mât.',
  },
  {
    id: 'polygone-forces',
    title: 'Équilibre en translation : le polygone des forces se ferme',
    steps: ['theory'],
    formula: ['\\sum F_x = 0 \\qquad \\sum F_y = 0'],
    h: 260,
    draw: () => (
      <g>
        <Dot x={130} y={150} r={6} />
        <Arrow x1={130} y1={150} x2={130} y2={230} c="red" w={3} hs={10} />
        <Arrow x1={130} y1={150} x2={79.3} y2={120.7} c="green" w={3} hs={10} />
        <Arrow x1={130} y1={150} x2={180.7} y2={99.3} c="water" w={3} hs={10} />
        <Text x={138} y={226} s={14} c="red" b>P = 50 kN</Text>
        <Text x={74} y={112} a="end" s={13} c="green" b>{'T_1 = 36,6'}</Text>
        <Text x={186} y={94} s={13} c="water" b>{'T_2 = 44,8'}</Text>
        <Text x={130} y={36} a="middle" s={13} b>forces sur le nœud</Text>
        <Arrow x1={330} y1={70} x2={330} y2={150} c="red" w={3} hs={10} />
        <Arrow x1={330} y1={150} x2={279.3} y2={120.7} c="green" w={3} hs={10} />
        <Arrow x1={279.3} y1={120.7} x2={330} y2={70} c="water" w={3} hs={10} />
        <Text x={390} y={36} a="middle" s={13} b>mises bout à bout</Text>
        <Text x={350} y={120} s={13} c="red" b>la figure se ferme</Text>
        <Text x={350} y={140} s={12}>{'⇒ résultante nulle'}</Text>
        <Text x={250} y={250} a="middle" s={12} c="mute">même échelle pour les deux figures (1 kN = 1,6 px)</Text>
      </g>
    ),
    notes: ['Si le nœud est en équilibre, la somme vectorielle des forces est nulle : placées bout à bout, elles reviennent au point de départ.'],
    caption: 'Le nœud de charpente du calcul pas à pas : trois forces, un triangle fermé.',
  },
  {
    id: 'moment-levier',
    title: 'Moment d’une force : force × bras de levier',
    steps: ['theory', 'formulas'],
    formula: ['M_{/O} = F \\cdot d \\qquad d = L\\sin\\alpha'],
    h: 270,
    draw: () => (
      <g>
        <Rect x={120} y={164} w={262} h={12} c="ink" sw={2} fill="~ink" />
        <Circle cx={120} cy={170} r={7} c="ink" sw={2} fill="paper" />
        <Poly pts={[[120, 177], [106, 200], [134, 200]]} c="ink" w={1.8} fill="~grey" close />
        <Line x1={380} y1={170} x2={305} y2={40} c="grey" w={1.4} dash="6 4" />
        <Line x1={120} y1={170} x2={315} y2={57.4} c="red" w={2.6} />
        <Rect x={305} y={55} w={10} h={10} c="red" sw={1.2} />
        <Arrow x1={415} y1={230.6} x2={382} y2={174} c="water" w={3.2} hs={11} />
        <Text x={420} y={234} s={15} c="water" b>F</Text>
        <Text x={200} y={100} a="end" s={14} c="red" b rot={-30}>d = L sin α</Text>
        <Text x={250} y={196} a="middle" s={13}>L</Text>
        <Angle cx={380} cy={170} r={34} a1={180} a2={240} label="α" c="water" s={14} />
        <Moment x={120} y={170} r={30} a1={20} a2={-160} c="green" />
        <Text x={78} y={150} a="end" s={13} c="green" b>M</Text>
        <Text x={120} y={222} a="middle" s={12}>O (pivot)</Text>
      </g>
    ),
    notes: ['Le bras de levier est la distance perpendiculaire entre le point O et la ligne d’action de la force, pas la longueur de la barre.'],
    caption: 'Plus la force est éloignée du pivot et perpendiculaire à la barre, plus elle fait tourner.',
  },
  {
    id: 'produit-scalaire-travail',
    title: 'Produit scalaire : le travail d’une force',
    steps: ['theory'],
    formula: ['W = \\vec{F}\\cdot\\vec{u} = F\\,u\\cos\\theta = 10 \\times 5 \\times \\cos 30° = 43{,}3\\ \\text{kJ}'],
    h: 230,
    draw: () => (
      <g>
        <Line x1={40} y1={180} x2={460} y2={180} c="ink" w={2} />
        <Rect x={120} y={140} w={70} h={40} c="ink" sw={2} fill="~grey" />
        <Arrow x1={190} y1={150} x2={311} y2={80} c="red" w={3} hs={11} />
        <Text x={316} y={78} s={15} c="red" b>F = 10 kN</Text>
        <Arrow x1={190} y1={150} x2={311} y2={150} c="green" w={2.6} hs={9} />
        <Line x1={311} y1={150} x2={311} y2={80} c="grey" w={1.4} dash="5 4" />
        <Text x={250} y={168} a="middle" s={13} c="green" b>F cos θ : travaille</Text>
        <Text x={318} y={122} s={12} c="mute">{'F sin θ :\nne travaille pas'}</Text>
        <Angle cx={190} cy={150} r={44} a1={-30} a2={0} label="θ = 30°" c="red" s={12} lr={34} />
        <Arrow x1={120} y1={204} x2={330} y2={204} c="water" w={2} hs={8} />
        <Text x={225} y={222} a="middle" s={13} c="water" b>déplacement u = 5 m</Text>
      </g>
    ),
    notes: ['Seule la composante de la force parallèle au déplacement fournit du travail ; une force perpendiculaire au déplacement ne travaille pas.'],
    caption: 'Treuil tirant une charge sur des rails : le travail dépend de l’angle entre la force et le déplacement.',
  },
  {
    id: 'produit-vectoriel-moment',
    title: 'Produit vectoriel : le moment, perpendiculaire au plan',
    steps: ['theory'],
    formula: ['\\vec{M}_{/O} = \\vec{r} \\wedge \\vec{F} \\qquad \\|\\vec{M}\\| = r\\,F\\sin\\alpha = F\\,d'],
    h: 250,
    draw: () => (
      <g>
        <Dot x={100} y={180} r={5} />
        <Text x={92} y={200} a="end" s={14} b>O</Text>
        <Arrow x1={100} y1={180} x2={300} y2={130} c="ink" w={2.6} hs={10} />
        <Text x={200} y={172} a="middle" s={15} b>r</Text>
        <Arrow x1={300} y1={130} x2={372.8} y2={182.9} c="red" w={3} hs={11} />
        <Text x={380} y={192} s={15} c="red" b>F</Text>
        <Line x1={300} y1={130} x2={192.9} y2={52.2} c="grey" w={1.4} dash="6 4" />
        <Line x1={100} y1={180} x2={192.9} y2={52.2} c="green" w={2.4} />
        <Text x={128} y={110} a="end" s={14} c="green" b>d</Text>
        <Angle cx={300} cy={130} r={30} a1={-14} a2={36} label="α" c="red" s={14} />
        <Moment x={100} y={180} r={36} a1={-150} a2={30} c="water" />
        <Circle cx={60} cy={110} r={11} c="water" sw={2} fill="paper" />
        <Line x1={53} y1={103} x2={67} y2={117} c="water" w={2} />
        <Line x1={67} y1={103} x2={53} y2={117} c="water" w={2} />
        <Text x={36} y={90} s={12} c="water">{'M ⟂ au plan (rentrant)'}</Text>
        <Text x={300} y={232} a="middle" s={12} c="mute">d : distance de O à la ligne d’action de F</Text>
      </g>
    ),
    notes: ['La norme du produit vectoriel est $rF\\sin\\alpha$, c’est-à-dire la force multipliée par son bras de levier : on retrouve $M = F\\,d$.'],
    caption: 'Le moment est un vecteur perpendiculaire au plan ; en 2D on ne garde que sa valeur et son sens de rotation.',
  },
  {
    id: 'norme-composantes',
    title: 'Recomposer une force à partir de ses composantes',
    steps: ['formulas'],
    formula: ['F = \\sqrt{F_x^2 + F_y^2} = \\sqrt{30^2 + 40^2} = 50\\ \\text{kN}', '\\theta = \\arctan\\frac{F_y}{F_x} = 53{,}1°'],
    h: 250,
    draw: () => (
      <g>
        <Arrow x1={100} y1={210} x2={290} y2={210} c="txt" w={1.4} hs={7} />
        <Arrow x1={100} y1={210} x2={100} y2={20} c="txt" w={1.4} hs={7} />
        <Text x={296} y={214} s={13}>x</Text>
        <Text x={106} y={26} s={13}>y</Text>
        <Line x1={220} y1={210} x2={220} y2={50} c="grey" w={1.2} dash="5 4" />
        <Line x1={100} y1={50} x2={220} y2={50} c="grey" w={1.2} dash="5 4" />
        <Arrow x1={100} y1={210} x2={220} y2={210} c="green" w={3} hs={10} />
        <Arrow x1={100} y1={210} x2={100} y2={50} c="water" w={3} hs={10} />
        <Arrow x1={100} y1={210} x2={220} y2={50} c="red" w={3.4} hs={12} />
        <Text x={160} y={232} a="middle" s={13} c="green" b>{'F_x = 30 kN'}</Text>
        <Text x={92} y={130} a="end" s={13} c="water" b>{'F_y = 40'}</Text>
        <Text x={176} y={118} s={14} c="red" b>F = 50 kN</Text>
        <Angle cx={100} cy={210} r={40} a1={-53.1} a2={0} label="θ" c="red" s={14} />
        <Text x={330} y={110} s={13}>{'triangle 3-4-5 :\n30-40-50 kN'}</Text>
      </g>
    ),
    notes: ['C’est l’opération inverse de la projection : on additionne les composantes sur chaque axe, puis on reconstruit la résultante.'],
    caption: 'Norme et direction d’une force à partir de ses composantes horizontale et verticale.',
  },
];
