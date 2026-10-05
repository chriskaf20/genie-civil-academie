// Plates — Module 39 · Chaînages, linteaux et ouvertures
import { Angle, Arrow, Beam, Dim, Ground, Line, Load, Path, Pin, Poly, Rect, Roller, Text } from '../../components/figures/ink.jsx';

/** Opening drawn on top of a masonry wall: paper-coloured hole with a blue outline. */
function Opening({ x, y, w, h }) {
  return <Rect x={x} y={y} w={w} h={h} c="ink" sw={2} fill="paper" />;
}

/** Reinforced-concrete band (lintel or ring beam). */
function Band({ x, y, w, h, c = 'red' }) {
  return <Rect x={x} y={y} w={w} h={h} c={c} sw={1.8} fill="pat:concrete" bg={`~${c}`} />;
}

function Leader({ x1, y1, x2, y2, label, a = 'start', c = 'txt', s = 13 }) {
  return (
    <g>
      <Line x1={x1} y1={y1} x2={x2} y2={y2} c="mute" w={1} />
      <circle cx={x1} cy={y1} r={2.2} style={{ fill: 'var(--f-mute)' }} />
      <Text x={x2 + (a === 'start' ? 4 : -4)} y={y2 + 4} a={a} s={s} c={c}>{label}</Text>
    </g>
  );
}

export default [
  {
    id: 'effet-de-voute',
    title: 'Effet de voûte au-dessus d’un linteau',
    steps: ['theory'],
    formula: ['h_t = \\frac{\\sqrt{3}}{2} L \\approx 0{,}87\\,L', 'W = \\tfrac{1}{2}\\, L \\, h_t \\, g_m'],
    h: 360,
    draw: () => {
      const L = 143;
      const base = 196;
      const apex = base - 0.866 * L;
      return (
        <g>
          <Rect x={40} y={40} w={420} h={260} c="soil" sw={1.6} fill="pat:brick" bg="~soil" />
          <Band x={40} y={108} w={420} h={13} c="grey" />
          <Text x={466} y={119} s={13} c="mute">plancher</Text>
          <Opening x={184} y={210} w={132} h={90} />
          <Poly pts={[[250 - L / 2, base], [250, apex], [250 + L / 2, base]]} c="red" w={2.2} fill="~red" dash="7 5" />
          <Path d={`M${250 - L / 2},${base} Q250,${base - 112} ${250 + L / 2},${base}`} c="ink" w={2} dash="3 5" />
          <Text x={250} y={apex - 8} a="middle" s={14} c="red">triangle à 60°</Text>
          <Angle cx={250 + L / 2} cy={base} r={24} a1={180} a2={240} label="60°" lr={16} s={13} />
          <Band x={173} y={196} w={154} h={14} c="ink" />
          <Text x={250} y={232} a="middle" s={15} c="ink">linteau BA</Text>
          <Text x={250} y={262} a="middle" s={14} c="mute">baie</Text>
          <Dim x1={184} y1={318} x2={316} y2={318} label="L_0 = 2,40 m" s={14} side={-1} />
          <Dim x1={250 - L / 2} y1={182} x2={250 + L / 2} y2={182} label="L" s={14} />
          <Dim x1={360} y1={base} x2={360} y2={apex} label="h_t ≈ 0,87 L" s={14} side={-1} />
          <Dim x1={140} y1={base} x2={140} y2={114} label="1,50 m" s={13} />
          <Ground x1={30} x2={470} y={300} />
        </g>
      );
    },
    notes: [
      'La maçonnerie forme une voûte : le linteau ne porte que le triangle de décharge.',
      'Le plancher (à 1,50 m) est dans le triangle ($h_t$ = 2,25 m) : sa charge descend sur le linteau.',
      'Appuis du linteau : au moins 20 cm de chaque côté de la baie.',
    ],
    caption: 'Baie de 2,40 m : portée de calcul L = 2,60 m, triangle de décharge de 2,25 m de haut.',
  },
  {
    id: 'modele-linteau',
    title: 'Modèle de calcul du linteau',
    steps: ['formulas'],
    formula: ['M_{Ed} = \\frac{W L}{6} + \\frac{q L^2}{8}', 'A_s = \\frac{M_{Ed}}{0{,}9\\, d\\, f_{yd}}'],
    h: 290,
    draw: () => (
      <g>
        <Text x={130} y={24} a="middle" s={15} b c="ink">maçonnerie (triangle)</Text>
        <Load x1={40} x2={130} y={130} h1={0} h2={64} n={5} />
        <Load x1={130} x2={220} y={130} h1={64} h2={0} n={5} />
        <Text x={138} y={62} s={16} c="ink">W</Text>
        <Beam x1={40} x2={220} y={134} />
        <Pin x={40} y={138.5} s={15} />
        <Roller x={220} y={138.5} s={15} />
        <Dim x1={40} y1={176} x2={220} y2={176} label="L" s={14} side={-1} />
        <Text x={130} y={226} a="middle" s={18} c="red">M = W·L / 6</Text>
        <Text x={250} y={140} a="middle" s={26} c="txt">+</Text>
        <Text x={370} y={24} a="middle" s={15} b c="ink">plancher (uniforme)</Text>
        <Load x1={280} x2={460} y={130} h1={40} n={9} label="q" />
        <Beam x1={280} x2={460} y={134} />
        <Pin x={280} y={138.5} s={15} />
        <Roller x={460} y={138.5} s={15} />
        <Dim x1={280} y1={176} x2={460} y2={176} label="L" s={14} side={-1} />
        <Text x={370} y={226} a="middle" s={18} c="red">M = q·L² / 8</Text>
        <Text x={250} y={270} a="middle" s={14} c="mute">+ poids propre du linteau (charge uniforme)</Text>
      </g>
    ),
    notes: [
      'W = poids du triangle de maçonnerie (kN), réparti en triangle de sommet au milieu.',
      'On additionne les moments, puis on calcule les aciers inférieurs.',
    ],
    caption: 'Le linteau est une poutre sur deux appuis : charge triangulaire + charge uniforme.',
  },
  {
    id: 'chainages-maison',
    title: 'Chaînages d’une maison',
    steps: ['diagrams'],
    h: 360,
    draw: () => (
      <g>
        <Poly pts={[[40, 62], [250, 14], [460, 62]]} c="txt" w={2} />
        <Rect x={60} y={60} w={380} h={232} c="soil" sw={1.4} fill="pat:block" bg="~grey" />
        <Band x={60} y={56} w={380} h={12} />
        <Band x={60} y={170} w={380} h={12} />
        <Band x={60} y={60} w={12} h={232} />
        <Band x={428} y={60} w={12} h={232} />
        <Opening x={150} y={212} w={110} h={80} />
        <Band x={138} y={200} w={134} h={12} c="ink" />
        <Band x={138} y={212} w={12} h={80} />
        <Band x={260} y={212} w={12} h={80} />
        <Opening x={330} y={222} w={56} h={44} />
        <Band x={322} y={210} w={72} h={10} c="ink" />
        <Opening x={120} y={100} w={52} h={46} />
        <Band x={112} y={88} w={68} h={10} c="ink" />
        <Opening x={300} y={100} w={52} h={46} />
        <Band x={292} y={88} w={68} h={10} c="ink" />
        <Rect x={50} y={292} w={400} h={22} c="grey" sw={1.6} fill="pat:concrete" bg="~grey" />
        <Ground x1={30} x2={470} y={292} />
        <Leader x1={250} y1={62} x2={300} y2={34} label="chaînage horizontal (tête de mur)" />
        <Leader x1={210} y1={176} x2={190} y2={160} label="chaînage à chaque plancher" a="end" />
        <Leader x1={66} y1={240} x2={20} y2={330} label="chaînage vertical (angle)" />
        <Leader x1={266} y1={260} x2={300} y2={300} label="raidisseurs de la baie" />
        <Leader x1={205} y1={206} x2={240} y2={192} label="linteau BA" />
        <Text x={460} y={330} a="end" s={13} c="mute">semelle filante</Text>
      </g>
    ),
    notes: [
      'Les chaînages forment une « cage » en béton armé qui tient les murs ensemble.',
      'Ils doivent être continus : recouvrements et équerres aux angles.',
    ],
    caption: 'Façade en blocs béton : chaînages horizontaux, verticaux, raidisseurs et linteaux.',
  },
  {
    id: 'deux-baies',
    title: 'Deux baies proches : linteau continu',
    steps: ['practical_case'],
    h: 300,
    draw: () => {
      const tri = (x0, L) => [[x0, 150], [x0 + L / 2, 150 - 0.866 * L], [x0 + L, 150]];
      return (
        <g>
          <Rect x={30} y={30} w={440} h={210} c="soil" sw={1.6} fill="pat:block" bg="~grey" />
          <Line x1={30} y1={45} x2={470} y2={45} c="grey" w={1.4} dash="6 4" />
          <Text x={470} y={22} a="end" s={12} c="mute">plancher (1,40 m au-dessus des linteaux)</Text>
          <Poly pts={tri(106.5, 105)} c="red" w={2} fill="~red" dash="6 4" />
          <Poly pts={tri(288.5, 105)} c="red" w={2} fill="~red" dash="6 4" />
          <Opening x={114} y={164} w={90} h={76} />
          <Opening x={296} y={164} w={90} h={76} />
          <Band x={100} y={150} w={300} h={14} c="ink" />
          <Text x={250} y={142} a="middle" s={14} c="ink">linteau unique filant</Text>
          <Rect x={204} y={164} w={92} h={76} c="orange" sw={2} fill="~orange" />
          <Text x={250} y={206} a="middle" s={13} c="orange">{'trumeau\n0,60 m'}</Text>
          <Dim x1={114} y1={256} x2={204} y2={256} label="1,20 m" s={13} side={-1} />
          <Dim x1={296} y1={256} x2={386} y2={256} label="1,20 m" s={13} side={-1} />
          <Text x={159} y={118} a="middle" s={12} c="red">h_t = 1,22 m</Text>
        </g>
      );
    },
    notes: [
      'Les triangles (1,22 m) restent sous le plancher (1,40 m) : seule la maçonnerie charge les linteaux.',
      'Le trumeau étroit concentre les charges : un linteau filant les répartit mieux.',
    ],
    caption: 'Fenêtres de 1,20 m séparées par un trumeau de 0,60 m.',
  },
];
