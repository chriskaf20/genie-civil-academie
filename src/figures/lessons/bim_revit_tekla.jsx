// Plates — Module 5 · Modélisation BIM structure : Revit, Tekla, modèle analytique
import { Angle, Arrow, Dim, Dot, Line, Poly, Rect, Text, Pin, Pipe } from '../../components/figures/kit.jsx';
import { Circle, ISection, Path } from '../../components/figures/kit.jsx';

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
    steps: ['stepbystep', 'formulas'],
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
          <Text x={O[0] - 14} y={O[1] + 22} s={11}>point de base (652 300 ; 6 862 100)</Text>
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
  {
    id: 'niveaux-quadrillages',
    title: 'Niveaux et quadrillages : la trame du modèle',
    steps: ['theory'],
    h: 260,
    draw: () => (
      <g>
        {['A', 'B', 'C', 'D'].map((n, i) => (
          <g key={n}>
            <Line x1={60 + i * 90} y1={40} x2={60 + i * 90} y2={190} c="red" w={1.2} dash="14 4 2 4" />
            <Circle cx={60 + i * 90} cy={28} r={11} c="red" sw={1.6} fill="paper" />
            <Text x={60 + i * 90} y={33} a="middle" s={12} c="red" b halo={false}>{n}</Text>
          </g>
        ))}
        {['1', '2', '3'].map((n, i) => (
          <g key={n}>
            <Line x1={40} y1={70 + i * 55} x2={350} y2={70 + i * 55} c="red" w={1.2} dash="14 4 2 4" />
            <Circle cx={28} cy={70 + i * 55} r={11} c="red" sw={1.6} fill="paper" />
            <Text x={28} y={75 + i * 55} a="middle" s={12} c="red" b halo={false}>{n}</Text>
          </g>
        ))}
        {[0, 1, 2, 3].map(i => [0, 1, 2].map(j => <Rect key={`${i}${j}`} x={52 + i * 90} y={62 + j * 55} w={16} h={16} c="ink" sw={1.4} fill="~ink" />))}
        <Text x={205} y={222} a="middle" s={12}>poteaux aux intersections des axes</Text>
        {[['R+2', 60], ['R+1', 120], ['RDC', 180]].map(([n, y]) => (
          <g key={n}>
            <Line x1={380} y1={y} x2={480} y2={y} c="ink" w={1.4} dash="6 4" />
            <Text x={480} y={y - 6} a="end" s={12} b>{n}</Text>
          </g>
        ))}
        <Text x={430} y={222} a="middle" s={12} c="mute">niveaux</Text>
      </g>
    ),
    notes: ['Tous les éléments s’accrochent aux axes et aux niveaux : déplacer un axe déplace les poteaux qui y sont liés.'],
    caption: 'Quadrillage A–D × 1–3 et niveaux d’un modèle structure.',
  },
  {
    id: 'familles-types',
    title: 'Famille, type et instance',
    steps: ['theory'],
    h: 240,
    draw: () => (
      <g>
        <Rect x={20} y={30} w={140} h={60} rx={8} c="ink" sw={1.8} fill="~grey" />
        <Text x={90} y={56} a="middle" s={13} b>famille</Text>
        <Text x={90} y={76} a="middle" s={11}>poutres en I</Text>
        <Arrow x1={162} y1={60} x2={198} y2={60} c="ink" w={1.6} hs={7} />
        <Rect x={200} y={30} w={140} h={60} rx={8} c="water" sw={1.8} fill="~water" />
        <Text x={270} y={56} a="middle" s={13} b>type</Text>
        <Text x={270} y={76} a="middle" s={11}>IPE 300 S355</Text>
        <ISection cx={270} cy={150} b={40} h={60} tf={5} tw={3} />
        <Text x={270} y={204} a="middle" s={11}>{'section, matériau :\ncommuns à toutes'}</Text>
        {[[380, 40, 'L = 6,00 m · R+1'], [380, 110, 'L = 8,00 m · R+1'], [380, 180, 'L = 6,00 m · R+2']].map(([x, y, t]) => (
          <g key={t}>
            <Arrow x1={342} y1={60} x2={x - 2} y2={y + 20} c="water" w={1.2} hs={6} />
            <Rect x={x} y={y} w={110} h={40} rx={6} c="green" sw={1.6} fill="~green" />
            <Text x={x + 55} y={y + 24} a="middle" s={11}>{t}</Text>
          </g>
        ))}
        <Text x={435} y={234} a="middle" s={11} c="mute">instances</Text>
      </g>
    ),
    notes: ['Modifier le type change toutes les poutres d’un coup ; chaque instance garde ses propres paramètres (longueur, niveau).'],
    caption: 'Hiérarchie des objets paramétriques d’un logiciel BIM.',
  },
  {
    id: 'masse-profils',
    title: 'Masses d’acier extraites du modèle',
    steps: ['formulas', 'simple_examples'],
    formula: ['M = L\\,m_l = 12 \\times 8{,}00 \\times 42{,}2 = 4\\,051\\ \\text{kg}', 'M = 7\\,850 \\times 0{,}40 \\times 0{,}30 \\times 0{,}020 = 18{,}8\\ \\text{kg}'],
    h: 230,
    draw: () => (
      <g>
        {Array.from({ length: 12 }, (_, i) => <Rect key={i} x={30} y={30 + i * 12} w={220} h={7} c="ink" sw={1} fill="~ink" />)}
        <Text x={140} y={196} a="middle" s={12}>{'12 IPE 300 × 8,00 m\n(42,2 kg/m) ≈ 4,05 t'}</Text>
        <Poly pts={[[300, 120], [440, 120], [470, 90], [330, 90]]} c="ink" w={1.8} fill="~grey" close />
        <Poly pts={[[300, 120], [440, 120], [440, 130], [300, 130]]} c="ink" w={1.8} fill="~grey" close />
        <Poly pts={[[440, 120], [470, 90], [470, 100], [440, 130]]} c="ink" w={1.8} fill="~grey" close />
        <Text x={385} y={160} a="middle" s={12}>{'platine 400 × 300 × 20\n= 18,8 kg'}</Text>
      </g>
    ),
    notes: ['Profilés : longueur × masse linéique ; pièces volumiques : volume × 7 850 kg/m³.'],
    caption: 'Deux façons de calculer une masse d’acier dans une nomenclature.',
  },
  {
    id: 'clash-tolerance',
    title: 'Conflit gaine / poutre : critère de distance',
    steps: ['formulas', 'simple_examples'],
    formula: ['d_{min} = 2{,}85 - 2{,}88 = -0{,}03\\ \\text{m} < \\delta = 0{,}02\\ \\text{m} \\Rightarrow \\text{conflit}'],
    h: 230,
    draw: () => (
      <g>
        <Rect x={60} y={40} w={360} h={70} c="ink" sw={2} fill="pat:hatch" />
        <Text x={440} y={112} s={12}>+2,85</Text>
        <Line x1={40} y1={110} x2={480} y2={110} c="ink" w={1} dash="4 3" />
        <Rect x={140} y={104} w={220} h={50} c="water" sw={2} fill="~water" />
        <Rect x={140} y={104} w={220} h={6} c="red" sw={0} fill="red" />
        <Text x={250} y={136} a="middle" s={12} c="water" b>gaine</Text>
        <Text x={126} y={108} a="end" s={12} c="red" b>+2,88</Text>
        <Text x={250} y={186} a="middle" s={12} c="red" b>interpénétration de 30 mm</Text>
        <Text x={250} y={208} a="middle" s={11} c="mute">tolérance 20 mm : déplacer la gaine ou réserver dans la poutre</Text>
      </g>
    ),
    notes: ['Le logiciel signale tout écart inférieur à la tolérance, y compris un jeu trop faible pour le montage.'],
    caption: 'Dessus de gaine plus haut que la sous-face de poutre.',
  },
  {
    id: 'charpente-1800t',
    title: 'Charpente de 1 800 t : du modèle à l’atelier',
    steps: ['real_examples'],
    h: 230,
    draw: () => (
      <g>
        <Rect x={20} y={70} w={120} h={70} rx={8} c="ink" sw={1.8} fill="~grey" />
        <Text x={80} y={100} a="middle" s={13} b>modèle Tekla</Text>
        <Text x={80} y={120} a="middle" s={11}>LOD 400</Text>
        {[['plans d’atelier', 40], ['fichiers CN', 100], ['listes de colisage', 160]].map(([t, y]) => (
          <g key={t}>
            <Arrow x1={142} y1={105} x2={218} y2={y + 18} c="ink" w={1.6} hs={7} />
            <Rect x={220} y={y} w={130} h={36} rx={6} c="water" sw={1.6} fill="~water" />
            <Text x={285} y={y + 23} a="middle" s={12}>{t}</Text>
          </g>
        ))}
        <Arrow x1={352} y1={118} x2={388} y2={118} c="green" w={2} hs={8} />
        <Text x={430} y={110} a="middle" s={12} c="green" b>{'montage\nsans reprise'}</Text>
        <Text x={250} y={214} a="middle" s={12} c="red">400 conflits réglés avant fabrication (15 000 pièces)</Text>
      </g>
    ),
    notes: ['Le gain du BIM en charpente vient surtout de la fabrication sans erreur : chaque conflit réglé dans le modèle évite une reprise.'],
    caption: 'Chaîne numérique de la conception à la fabrication.',
  },
  {
    id: 'cycle-modele-structure',
    title: 'Cycle de vie du modèle structure',
    steps: ['diagrams'],
    h: 270,
    draw: () => {
      const items = ['convention BIM', 'modèle physique', 'modèle analytique', 'coordination IFC/BCF', 'plans et quantités', 'DOE numérique'];
      return (
        <g>
          {items.map((t, i) => {
            const a = (i / items.length) * 2 * Math.PI - Math.PI / 2;
            const x = 250 + 170 * Math.cos(a);
            const y = 135 + 100 * Math.sin(a);
            return (
              <g key={t}>
                <Rect x={x - 70} y={y - 16} w={140} h={32} rx={16} c={i === 2 ? 'red' : 'ink'} sw={1.6} fill={i === 2 ? '~red' : '~grey'} />
                <Text x={x} y={y + 5} a="middle" s={12} b>{t}</Text>
              </g>
            );
          })}
          <Text x={250} y={140} a="middle" s={12} c="mute">{'calcul : sections\nretournées au modèle'}</Text>
        </g>
      );
    },
    notes: ['Le modèle analytique part vers le logiciel de calcul ; les sections retenues reviennent dans le modèle physique.'],
    caption: 'De la convention BIM au dossier des ouvrages exécutés.',
  },
];
