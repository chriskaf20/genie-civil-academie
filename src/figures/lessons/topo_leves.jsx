// Plates — Module 5 · Levés topographiques & implantation
import { Angle, Arrow, Circle, Dot, Line, Poly, Rect, Text } from '../../components/figures/kit.jsx';

const rad = g => (g * Math.PI) / 200; // grades → radians
/** Point at distance d (px) and bearing g (gon) from station [x, y]; north is up. */
const at = ([x, y], d, g) => [x + d * Math.sin(rad(g)), y - d * Math.cos(rad(g))];
/** SVG angle (deg, clockwise from +x) of a bearing in gon. */
const svgAng = g => g * 0.9 - 90;

const S = [170, 172];
const P1 = at(S, 130, 50);
const P2 = at(S, 150, 130);
const P3 = at(S, 120, 320);
const R = at(S, 130, 370);

export default [
  {
    id: 'rayonnement',
    title: 'Levé par rayonnement',
    steps: ['theory'],
    formula: ['X_P = X_S + D\\sin G \\qquad Y_P = Y_S + D\\cos G'],
    h: 290,
    draw: () => (
      <g>
        <Arrow x1={S[0]} y1={S[1]} x2={S[0]} y2={36} c="ink" w={1.6} />
        <Text x={S[0]} y={28} a="middle" s={14} b>N</Text>
        <Line x1={S[0]} y1={S[1]} x2={R[0]} y2={R[1]} c="green" w={2} dash="7 4" />
        <Dot x={R[0]} y={R[1]} r={5} c="green" ring />
        <Text x={R[0] - 10} y={R[1] - 6} a="end" s={12} c="green">référence connue</Text>
        {[[P1, 'P_1'], [P2, 'P_2'], [P3, 'P_3']].map(([P, name]) => (
          <g key={name}>
            <Line x1={S[0]} y1={S[1]} x2={P[0]} y2={P[1]} c="red" w={1.8} dash="6 4" />
            <Dot x={P[0]} y={P[1]} r={4} c="red" />
          </g>
        ))}
        <Rect x={P1[0]} y={P1[1] - 44} w={70} h={44} c="ink" sw={2} fill="pat:hatch" />
        <Text x={P1[0] + 35} y={P1[1] - 52} a="middle" s={11} c="mute">bâtiment (plan)</Text>
        <Text x={P1[0] - 8} y={P1[1] + 4} a="end" s={14} b>{'P_1'}</Text>
        <Circle cx={P2[0]} cy={P2[1]} r={9} c="ink" sw={2} fill="paper" />
        <Text x={P2[0] + 14} y={P2[1] + 5} s={14} b>{'P_2'}</Text>
        <Text x={P2[0] + 14} y={P2[1] + 25} s={11} c="mute">regard</Text>
        <Circle cx={P3[0]} cy={P3[1]} r={14} c="green" sw={2} fill="~green" />
        <Text x={P3[0]} y={P3[1] + 30} a="middle" s={14} b>{'P_3'}</Text>
        <Text x={P3[0]} y={P3[1] + 48} a="middle" s={11} c="mute">arbre</Text>
        <Angle cx={S[0]} cy={S[1]} r={44} a1={-90} a2={svgAng(50)} label="G" c="red" s={15} />
        <Text x={(S[0] + P1[0]) / 2 + 10} y={(S[1] + P1[1]) / 2 + 14} s={14} c="red">D</Text>
        <Circle cx={S[0]} cy={S[1]} r={7} c="ink" sw={2} fill="paper" />
        <Dot x={S[0]} y={S[1]} r={2.5} />
        <Text x={S[0] - 12} y={S[1] + 22} a="end" s={14} b>S (station)</Text>
        <Rect x={350} y={150} w={140} h={92} rx={8} c="grey" sw={1.2} fill="paper" />
        <Text x={360} y={172} s={13} b>Chaque visée :</Text>
        <Text x={360} y={192} s={13}>• gisement G (gon)</Text>
        <Text x={360} y={210} s={13}>• distance D (m)</Text>
        <Text x={360} y={230} s={13} c="mute">400 gon = 360°</Text>
      </g>
    ),
    notes: [
      'L’instrument est d’abord orienté sur un point connu ; chaque visée donne ensuite un gisement et une distance.',
      '1 gon = 0,9° ; 100 gon = 90° ; 400 gon = 360°.',
    ],
    caption: 'Depuis une station connue, les points du terrain sont levés en étoile.',
  },
  {
    id: 'station-totale',
    title: 'Station totale : distance inclinée et dénivelée',
    steps: ['formulas', 'simple_examples'],
    formula: ['D_h = D_i \\sin V', '\\Delta H = D_i \\cos V + h_i - h_v'],
    h: 295,
    draw: () => (
      <g>
        <Poly pts={[[20, 258], [80, 250], [250, 215], [420, 180], [480, 170], [480, 295], [20, 295]]} c="soil" w={2} fill="pat:soil" close />
        <Line x1={80} y1={196} x2={64} y2={252} c="ink" w={1.8} />
        <Line x1={80} y1={196} x2={96} y2={247} c="ink" w={1.8} />
        <Rect x={70} y={180} w={20} h={18} rx={3} c="ink" sw={2} fill="~ink" />
        <Dot x={80} y={190} r={3} c="red" />
        <Line x1={420} y1={180} x2={420} y2={118} c="ink" w={2.4} />
        <Circle cx={420} cy={120} r={7} c="red" sw={2} fill="paper" />
        <Line x1={80} y1={190} x2={420} y2={120} c="red" w={2.4} />
        <Text x={250} y={141} a="middle" s={15} c="red" b rot={-11.6}>{'D_i'}</Text>
        <Line x1={80} y1={190} x2={420} y2={190} c="grey" w={1.4} dash="6 4" />
        <Text x={300} y={184} a="middle" s={14}>{'D_h = D_i sin V'}</Text>
        <Line x1={80} y1={190} x2={80} y2={110} c="mute" w={1.2} dash="3 4" />
        <Text x={80} y={102} a="middle" s={12} c="mute">zénith</Text>
        <Angle cx={80} cy={190} r={40} a1={-90} a2={-11.6} label="V" c="red" s={16} />
        <Line x1={420} y1={190} x2={420} y2={180} c="grey" w={1.2} />
        <Arrow x1={52} y1={250} x2={52} y2={191} c="txt" w={1.4} hs={6} both />
        <Text x={46} y={226} a="end" s={14} b>{'h_i'}</Text>
        <Arrow x1={440} y1={180} x2={440} y2={121} c="txt" w={1.4} hs={6} both />
        <Text x={446} y={156} s={14} b>{'h_v'}</Text>
        <Line x1={96} y1={250} x2={472} y2={250} c="grey" w={1.1} dash="4 4" />
        <Arrow x1={470} y1={250} x2={470} y2={172} c="green" w={2} hs={7} both />
        <Text x={466} y={232} a="end" s={15} c="green" b>ΔH</Text>
        <Text x={92} y={272} s={14} b>S</Text>
        <Text x={404} y={196} a="end" s={14} b>P</Text>
      </g>
    ),
    notes: [
      'V est l’angle zénithal : 0 gon au zénith, 100 gon à l’horizontale ; V < 100 gon : on vise vers le haut.',
      'Exemple : $D_i = 150{,}25$ m, $V = 96{,}5$ gon, $h_i = 1{,}55$ m, $h_v = 1{,}70$ m → $D_h = 150{,}02$ m et $\\Delta H = +8{,}11$ m.',
    ],
    caption: 'La station mesure la distance inclinée et l’angle zénithal ; le calcul donne distance horizontale et dénivelée.',
  },
  {
    id: 'implantation-point',
    title: 'Rayonnement puis implantation d’un point',
    steps: ['stepbystep'],
    formula: ['D = \\sqrt{\\Delta X^2 + \\Delta Y^2}', 'G = \\arctan\\frac{\\Delta X}{\\Delta Y}'],
    h: 285,
    draw: () => {
      // 2 px/m, station S (1 000 ; 2 000) at (120, 245)
      const s = [120, 245];
      const A = [261.4, 103.6];
      const P = [220, 85];
      return (
        <g>
          <Arrow x1={s[0]} y1={s[1]} x2={s[0]} y2={50} c="ink" w={1.6} />
          <Text x={s[0]} y={42} a="middle" s={14} b>N</Text>
          <Line x1={P[0]} y1={P[1]} x2={P[0]} y2={s[1]} c="grey" w={1.2} dash="4 4" />
          <Line x1={s[0]} y1={s[1]} x2={P[0]} y2={s[1]} c="grey" w={1.2} dash="4 4" />
          <Text x={170} y={264} a="middle" s={13}>ΔX = 50,00</Text>
          <Text x={P[0] + 6} y={190} s={13}>ΔY = 80,00</Text>
          <Line x1={s[0]} y1={s[1]} x2={A[0]} y2={A[1]} c="ink" w={2.2} />
          <Line x1={s[0]} y1={s[1]} x2={P[0]} y2={P[1]} c="red" w={2.6} />
          <Angle cx={s[0]} cy={s[1]} r={64} a1={-90} a2={-45} c="ink" />
          <Text x={178} y={212} s={13}>50 gon</Text>
          <Angle cx={s[0]} cy={s[1]} r={46} a1={-90} a2={-58} label="G" c="red" s={15} />
          <Text x={192} y={148.5} a="middle" s={13} c="red" rot={-58}>D = 94,34 m</Text>
          <Text x={241.5} y={140.5} a="middle" s={13} rot={-45}>100,00 m</Text>
          <Dot x={s[0]} y={s[1]} r={5} />
          <Dot x={A[0]} y={A[1]} r={5} />
          <Dot x={P[0]} y={P[1]} r={5} c="red" />
          <Text x={s[0] - 8} y={s[1] + 18} a="end" s={13} b>S (1 000 ; 2 000)</Text>
          <Text x={A[0] + 10} y={A[1] + 5} s={13} b>A (1 070,71 ; 2 070,71)</Text>
          <Text x={P[0] + 10} y={P[1] - 8} s={13} c="red" b>P à implanter (1 050 ; 2 080)</Text>
        </g>
      );
    },
    notes: [
      '$A$ : $X = 1\\,000 + 100\\sin(50\\ \\text{gon}) = 1\\,070{,}71$ ; $Y = 2\\,000 + 100\\cos(50\\ \\text{gon}) = 2\\,070{,}71$.',
      'Vers $P$ : $D = \\sqrt{50^2 + 80^2} = 94{,}34$ m ; $G = \\arctan(50/80) = 35{,}561$ gon (1er quadrant).',
    ],
    caption: 'Calcul direct (rayonnement vers A) puis calcul inverse (distance et gisement pour implanter P).',
  },
  {
    id: 'implantation-batiment',
    title: 'Implantation des angles d’un bâtiment',
    steps: ['practical_case'],
    formula: ['D_{SB} = \\sqrt{44^2 + 10^2} = 45{,}12\\ \\text{m}', 'G_{SB} = \\arctan\\frac{44}{10} = 85{,}773\\ \\text{gon}'],
    h: 290,
    draw: () => {
      // 8 px/m : x = 40 + 8 (X − 1 975), y = 40 + 8 (5 016 − Y)
      const A = [240, 168];
      const B = [432, 168];
      const C = [432, 72];
      const D = [240, 72];
      const s = [80, 248];
      return (
        <g>
          <Poly pts={[A, B, C, D]} c="ink" w={2.8} fill="~ink" close />
          <Line x1={A[0]} y1={A[1]} x2={C[0]} y2={C[1]} c="grey" w={1.2} dash="5 4" />
          <Line x1={B[0]} y1={B[1]} x2={D[0]} y2={D[1]} c="grey" w={1.2} dash="5 4" />
          <Text x={336} y={108} a="middle" s={13} c="green" b>diagonales 26,83 m</Text>
          <Text x={336} y={160} a="middle" s={13}>24,00 m</Text>
          <Text x={424} y={124} a="end" s={13}>12,00 m</Text>
          <Arrow x1={s[0]} y1={s[1]} x2={s[0]} y2={120} c="ink" w={1.6} />
          <Text x={s[0]} y={112} a="middle" s={14} b>N</Text>
          <Line x1={s[0]} y1={s[1]} x2={B[0]} y2={B[1]} c="red" w={2.4} />
          <Angle cx={s[0]} cy={s[1]} r={44} a1={-90} a2={-12.8} label="85,773 gon" c="red" s={13} lr={22} />
          <Text x={262} y={226} a="middle" s={13} c="red" rot={-12.8}>D = 45,12 m</Text>
          <Circle cx={s[0]} cy={s[1]} r={7} c="ink" sw={2} fill="paper" />
          {[[A, 'A'], [B, 'B'], [C, 'C'], [D, 'D']].map(([P, n]) => <Dot key={n} x={P[0]} y={P[1]} r={4.5} c="red" />)}
          <Text x={A[0] - 8} y={A[1] + 4} a="end" s={13} b>A (2 000 ; 5 000)</Text>
          <Text x={B[0] + 8} y={B[1] + 18} s={14} b>B</Text>
          <Text x={C[0] + 8} y={C[1] - 6} s={14} b>C</Text>
          <Text x={D[0] - 8} y={D[1] - 6} a="end" s={14} b>D</Text>
          <Text x={s[0] + 12} y={s[1] + 22} s={13} b>S (1 980 ; 4 990)</Text>
        </g>
      );
    },
    notes: [
      'Façade AB vers l’est (gisement 100 gon) : B (2 024 ; 5 000), C (2 024 ; 5 012), D (2 000 ; 5 012).',
      'Contrôle indépendant des diagonales : $\\sqrt{24^2 + 12^2} = 26{,}83$ m.',
    ],
    caption: 'Chaque angle est implanté depuis S par sa distance et son gisement, puis contrôlé.',
  },
];
