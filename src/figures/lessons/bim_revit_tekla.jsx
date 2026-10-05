// Plates — Module 5 · Modélisation BIM structure : Revit, Tekla, modèle analytique
import { Angle, Arrow, Dim, Dot, Line, Poly, Rect, Text, Pin, Pipe } from '../../components/figures/kit.jsx';

const rad = d => (d * Math.PI) / 180;

/** Frame drawn in 3D-ish oblique view: columns + beam. */
function Frame({ x, analytic }) {
  const pts = { a: [x, 230], b: [x, 90], c: [x + 160, 90], d: [x + 160, 230] };
  if (analytic) {
    return (
      <g>
        <Line x1={pts.a[0]} y1={pts.a[1]} x2={pts.b[0]} y2={pts.b[1]} c="red" w={2.4} />
        <Line x1={pts.b[0]} y1={pts.b[1]} x2={pts.c[0]} y2={pts.c[1]} c="red" w={2.4} />
        <Line x1={pts.c[0]} y1={pts.c[1]} x2={pts.d[0]} y2={pts.d[1]} c="red" w={2.4} />
        {[pts.b, pts.c].map(([px, py]) => <Dot key={px} x={px} y={py} r={5} c="red" />)}
        <Pin x={pts.a[0]} y={pts.a[1]} s={14} c="red" />
        <Pin x={pts.d[0]} y={pts.d[1]} s={14} c="red" />
      </g>
    );
  }
  return (
    <g>
      <Rect x={x - 12} y={90} w={24} h={140} c="grey" sw={2} fill="pat:concrete" bg="~grey" />
      <Rect x={x + 148} y={90} w={24} h={140} c="grey" sw={2} fill="pat:concrete" bg="~grey" />
      <Rect x={x - 12} y={70} w={184} h={36} c="grey" sw={2} fill="pat:concrete" bg="~grey" />
      <Rect x={x - 22} y={230} w={44} h={14} c="grey" sw={2} fill="~grey" />
      <Rect x={x + 138} y={230} w={44} h={14} c="grey" sw={2} fill="~grey" />
    </g>
  );
}

export default [
  {
    id: 'physique-analytique',
    title: 'Modèle physique et modèle analytique',
    steps: ['theory'],
    h: 290,
    draw: () => (
      <g>
        <Text x={110} y={40} a="middle" s={15} b c="ink">modèle physique</Text>
        <Frame x={30} />
        <Text x={370} y={40} a="middle" s={15} b c="red">modèle analytique</Text>
        <Frame x={290} analytic />
        <Arrow x1={215} y1={160} x2={270} y2={160} c="txt" w={2} />
        <Text x={242} y={150} a="middle" s={12} c="mute">export</Text>
        <Text x={370} y={276} a="middle" s={13} c="red">barres sur les axes, nœuds, appuis</Text>
        <Text x={110} y={276} a="middle" s={13} c="mute">béton et acier réels</Text>
      </g>
    ),
    notes: ['Les deux modèles doivent rester cohérents : un décalage d’axe change les efforts calculés.'],
    caption: 'Le logiciel de calcul reçoit une idéalisation filaire de la structure modélisée.',
  },
  {
    id: 'georeferencement',
    title: 'Géoréférencer un point du modèle',
    steps: ['stepbystep'],
    formula: ['X = x\\cos\\theta - y\\sin\\theta + T_x', 'Y = x\\sin\\theta + y\\cos\\theta + T_y'],
    h: 320,
    draw: () => {
      const O = [90, 260];
      const k = 7;
      const th = rad(15);
      const P = [O[0] + k * (24 * Math.cos(th) - 10 * Math.sin(th)), O[1] - k * (24 * Math.sin(th) + 10 * Math.cos(th))];
      const ux = [Math.cos(th), -Math.sin(th)];
      const uy = [-Math.sin(th) * -1, -Math.cos(th)];
      return (
        <g>
          <Arrow x1={O[0]} y1={O[1]} x2={O[0] + 340} y2={O[1]} c="grey" w={1.6} hs={9} />
          <Arrow x1={O[0]} y1={O[1]} x2={O[0]} y2={O[1] - 230} c="grey" w={1.6} hs={9} />
          <Text x={O[0] + 300} y={O[1] + 24} s={14} c="mute">X (Est)</Text>
          <Text x={O[0] + 6} y={O[1] - 234} s={14} c="mute">Y (Nord)</Text>
          <Arrow x1={O[0]} y1={O[1]} x2={O[0] + ux[0] * 260} y2={O[1] + ux[1] * 260} c="ink" w={2} hs={9} />
          <Arrow x1={O[0]} y1={O[1]} x2={O[0] - uy[0] * 160} y2={O[1] + uy[1] * 160} c="ink" w={2} hs={9} />
          <Text x={O[0] + ux[0] * 264} y={O[1] + ux[1] * 264 - 6} s={14} c="ink">x projet</Text>
          <Text x={O[0] - uy[0] * 164 - 4} y={O[1] + uy[1] * 164 - 6} s={14} c="ink">y projet</Text>
          <Angle cx={O[0]} cy={O[1]} r={70} a1={-15} a2={0} label="15°" s={13} />
          <Dot x={P[0]} y={P[1]} r={7} c="red" ring />
          <Text x={P[0] + 12} y={P[1] - 6} s={14} c="red">{'poteau (24 ; 10)\n→ (652 320,59 ;\n6 862 115,87)'}</Text>
          <Dot x={O[0]} y={O[1]} r={5} c="txt" />
          <Text x={O[0] - 4} y={O[1] + 22} a="middle" s={12}>point de base (652 300 ; 6 862 100)</Text>
        </g>
      );
    },
    notes: ['Contrôle : la distance au point de base (26,00 m) est la même dans les deux repères.'],
    caption: 'Rotation de 15° puis translation vers les coordonnées Lambert 93 du point de base.',
  },
  {
    id: 'gaine-sous-poutre',
    title: 'Conflit gaine / poutre sous faux plafond',
    steps: ['practical_case'],
    formula: ['2{,}90 - 2{,}70 = 0{,}20\\ \\text{m} < 0{,}40\\ \\text{m}'],
    h: 300,
    draw: () => (
      <g>
        <Rect x={20} y={30} w={460} h={30} c="grey" sw={2} fill="pat:concrete" bg="~grey" />
        <Rect x={200} y={60} w={60} h={90} c="grey" sw={2} fill="pat:concrete" bg="~grey" />
        <Text x={230} y={110} a="middle" s={12} rot={-90}>poutre</Text>
        <Line x1={20} y1={190} x2={480} y2={190} c="txt" w={2} dash="10 5" />
        <Text x={470} y={208} a="end" s={13}>faux plafond +2,70</Text>
        <Text x={470} y={145} a="end" s={13}>sous-face poutre +2,90</Text>
        <Rect x={60} y={70} w={380} h={60} c="water" sw={2} fill="~water" dash="6 4" />
        <Rect x={200} y={70} w={60} h={60} c="red" sw={2.4} fill="~red" />
        <Text x={110} y={104} s={13} c="water">gaine 40 cm</Text>
        <Text x={230} y={168} a="middle" s={13} c="red">clash</Text>
        <Dim x1={300} y1={150} x2={300} y2={190} label="0,20" s={12} side={-1} />
        <Text x={20} y={240} s={13} c="green">{'1 : passer entre les poutres, parallèlement à elles\n2 : réservation Ø 45 cm dans l’âme, validée par le calcul'}</Text>
      </g>
    ),
    notes: ['Le conflit est réglé dans la maquette, avant le chantier, au lieu d’un carottage imprévu.'],
    caption: 'Plateau de bureaux : retombée de poutre de 60 cm et gaine de 40 cm sous dalle.',
  },
];
