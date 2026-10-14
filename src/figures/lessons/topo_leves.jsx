// Plates — Module 5 · Levés topographiques & implantation
import { Angle, Arrow, Circle, Dot, Line, Poly, Rect, Text } from '../../components/figures/kit.jsx';
import { Path } from '../../components/figures/kit.jsx';

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
  {
    id: 'grades-degres',
    title: 'Grades et degrés',
    steps: ['theory', 'simple_examples'],
    formula: ['1\\ \\text{gon} = 0{,}9° \\qquad 35{,}561\\ \\text{gon} \\times 0{,}9 = 32{,}005°'],
    h: 264,
    draw: () => (
      <g>
        <Circle cx={160} cy={130} r={95} c="ink" sw={2} />
        <Line x1={160} y1={30} x2={160} y2={230} c="grey" w={1} />
        <Line x1={60} y1={130} x2={260} y2={130} c="grey" w={1} />
        {[[160, 24, '0 gon = 0°'], [270, 134, '100 gon = 90°'], [160, 248, '200 gon = 180°'], [60, 128, '300 gon\n= 270°']].map(([x, y, t]) => <Text key={t} x={x} y={y} a={x > 200 ? 'start' : x < 100 ? 'end' : 'middle'} s={12} b>{t}</Text>)}
        <Line x1={160} y1={130} x2={160 + 95 * Math.sin(0.5586)} y2={130 - 95 * Math.cos(0.5586)} c="red" w={2.4} />
        <Text x={230} y={64} s={12} c="red" b>35,561 gon</Text>
        <Text x={380} y={110} a="middle" s={13}>{'400 gon = 360°\n100 gon = 90°\n1 gon = 0,9°'}</Text>
      </g>
    ),
    notes: ['Les topographes comptent en grades : un angle droit vaut exactement 100 gon, ce qui simplifie les calculs de quadrants.'],
    caption: 'Le tour d’horizon en grades (sens horaire depuis le nord).',
  },
  {
    id: 'probleme-inverse',
    title: 'Problème inverse : gisement selon le quadrant',
    steps: ['theory'],
    formula: ['D = \\sqrt{\\Delta X^2 + \\Delta Y^2} \\qquad G = \\arctan\\frac{\\Delta X}{\\Delta Y} + 0,\\ 200\\ \\text{ou}\\ 400\\ \\text{gon}'],
    h: 260,
    draw: () => (
      <g>
        <Line x1={250} y1={20} x2={250} y2={240} c="ink" w={1.4} />
        <Line x1={60} y1={130} x2={440} y2={130} c="ink" w={1.4} />
        <Text x={256} y={30} s={12} b>N (Y)</Text>
        <Text x={436} y={124} a="end" s={12} b>E (X)</Text>
        {[[350, 60, 'ΔX > 0, ΔY > 0', '+ 0'], [350, 200, 'ΔX > 0, ΔY < 0', '+ 200'], [150, 200, 'ΔX < 0, ΔY < 0', '+ 200'], [150, 60, 'ΔX < 0, ΔY > 0', '+ 400']].map(([x, y, a, b]) => (
          <g key={a}>
            <Line x1={250} y1={130} x2={x} y2={y} c="red" w={2} />
            <Dot x={x} y={y} r={4} c="red" />
            <Text x={x + (x > 250 ? 10 : -10)} y={y + (y < 130 ? -6 : 18)} a={x > 250 ? 'start' : 'end'} s={11}>{a}</Text>
            <Text x={x + (x > 250 ? 10 : -10)} y={y + (y < 130 ? 10 : 34)} a={x > 250 ? 'start' : 'end'} s={12} c="red" b>{`G = arctan ${b}`}</Text>
          </g>
        ))}
      </g>
    ),
    notes: ['La calculatrice ne renvoie un arctangente qu’entre −100 et +100 gon : le signe de ΔX et de ΔY dit dans quel quadrant ramener le résultat.'],
    caption: 'Correction du gisement selon les signes des écarts de coordonnées.',
  },
  {
    id: 'polygonale-fermee',
    title: 'Fermeture angulaire d’une polygonale',
    steps: ['theory', 'simple_examples'],
    formula: ['f_\\alpha = \\sum \\alpha - (n - 2) \\times 200 = 600{,}0120 - 600 = +12\\ \\text{mgon}'],
    h: 268,
    draw: () => {
      const P = [[120, 60], [300, 40], [400, 140], [300, 220], [110, 190]];
      return (
        <g>
          <Poly pts={P} c="ink" w={2.2} fill="~grey" close />
          {P.map(([x, y], i) => (
            <g key={i}>
              <Poly pts={[[x, y - 8], [x - 7, y + 5], [x + 7, y + 5]]} c="red" w={1.6} fill="~red" close />
              <Text x={x + (x > 250 ? 12 : -12)} y={y + (y > 130 ? 18 : -8)} a={x > 250 ? 'start' : 'end'} s={12} b>{`S${i + 1}`}</Text>
            </g>
          ))}
          <Text x={250} y={130} a="middle" s={13}>{'somme théorique\n(5 − 2) × 200 = 600 gon'}</Text>
          <Text x={250} y={262} a="middle" s={12} c="red" b>correction : −12 / 5 = −2,4 mgon par angle</Text>
        </g>
      );
    },
    notes: ['L’écart de fermeture est réparti également sur tous les angles s’il reste dans la tolérance ; sinon on reprend les mesures.'],
    caption: 'Polygonale fermée à 5 sommets et compensation angulaire.',
  },
  {
    id: 'piquet-deplace',
    title: 'Un piquet déplacé, un bâtiment hors limite',
    steps: ['real_examples'],
    h: 250,
    draw: () => (
      <g>
        <Line x1={300} y1={20} x2={300} y2={230} c="red" w={2.6} dash="10 4" />
        <Text x={306} y={34} s={12} c="red" b>limite de propriété</Text>
        <Rect x={110} y={70} w={190} h={120} c="green" sw={2} dash="6 4" />
        <Rect x={128} y={70} w={190} h={120} c="ink" sw={2.4} fill="~ink" />
        <Text x={223} y={134} a="middle" s={12} b>fondations réalisées</Text>
        <Rect x={300} y={70} w={18} h={120} c="red" sw={0} fill="~red" />
        <Text x={330} y={140} s={12} c="red" b>18 cm chez le voisin</Text>
        <Circle cx={90} cy={210} r={5} c="green" sw={2} fill="paper" />
        <Circle cx={108} cy={210} r={5} c="red" sw={2} fill="~red" />
        <Arrow x1={92} y1={224} x2={106} y2={224} c="red" w={1.4} hs={5} />
        <Text x={60} y={244} s={11}>piquet de référence déplacé par un engin</Text>
      </g>
    ),
    notes: ['Un contrôle depuis une seconde station ou des points de référence indépendants aurait révélé l’erreur avant de couler les fondations.'],
    caption: 'Implantation faite sans contrôle à partir d’un repère bousculé.',
  },
  {
    id: 'canevas-implantation',
    title: 'Du canevas à l’implantation sur le chantier',
    steps: ['diagrams'],
    h: 260,
    draw: () => (
      <g>
        {[[40, 40], [460, 50], [450, 230], [50, 220]].map(([x, y], i) => (
          <g key={i}>
            <Poly pts={[[x, y - 9], [x - 8, y + 6], [x + 8, y + 6]]} c="red" w={1.8} fill="~red" close />
            <Text x={x + 12} y={y + 4} s={11} c="red" b>{`R${i + 1}`}</Text>
          </g>
        ))}
        <Circle cx={250} cy={140} r={8} c="ink" sw={2} fill="paper" />
        <Text x={262} y={160} s={12} b>station</Text>
        {[[40, 40], [460, 50]].map(([x, y]) => <Line key={x} x1={250} y1={140} x2={x} y2={y} c="green" w={1.4} dash="5 4" />)}
        <Rect x={150} y={80} w={120} h={70} c="ink" sw={1.6} fill="none" dash="6 4" />
        {[[150, 80], [270, 80], [270, 150], [150, 150]].map(([x, y]) => (
          <g key={`${x}${y}`}>
            <Line x1={250} y1={140} x2={x} y2={y} c="water" w={1.2} />
            <Rect x={x - 3} y={y - 3} w={6} h={6} c="water" sw={1.4} fill="water" />
          </g>
        ))}
        <Text x={250} y={250} a="middle" s={12}>{'1 orientation sur repères · 2 calcul inverse · 3 implantation · 4 contrôle'}</Text>
      </g>
    ),
    notes: ['On s’oriente sur au moins deux repères connus avant d’implanter, puis on contrôle depuis une autre station.'],
    caption: 'Repères du canevas, station, angles du bâtiment implantés.',
  },
];
