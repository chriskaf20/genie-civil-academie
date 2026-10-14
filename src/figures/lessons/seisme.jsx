// Plates — Module 10 · Génie parasismique (Eurocode 8)
import { Arrow, Circle, Dot, Line, Path, Plot, Poly, Rect, Text, fnPts } from '../../components/figures/kit.jsx';
import { Building } from '../../components/figures/kit.jsx';

const AG_S = 1.6 * 1.15; // a_g · S (zone 4, sol C)
const TB = 0.2;
const TC = 0.6;
const TD = 2.0;
const Se = T => (T <= TB ? AG_S * (1 + (T / TB) * 1.5) : T <= TC ? 2.5 * AG_S : T <= TD ? (2.5 * AG_S * TC) / T : (2.5 * AG_S * TC * TD) / (T * T));
const Sd = (T, q = 3) => {
  if (T <= TB) return AG_S * (2 / 3 + (T / TB) * (2.5 / q - 2 / 3));
  const v = T <= TC ? (2.5 * AG_S) / q : T <= TD ? (2.5 * AG_S * TC) / (q * T) : (2.5 * AG_S * TC * TD) / (q * T * T);
  return Math.max(v, 0.2 * 1.6);
};
const LEVELS = [3, 6, 9, 12, 15];

export default [
  {
    id: 'spectre-ec8',
    title: 'Spectre de réponse de l’Eurocode 8',
    steps: ['theory'],
    formula: ['S_d(T) = a_g\\, S\\, \\frac{2{,}5}{q} \\quad (T_B \\le T \\le T_C)', 'F_b = S_d(T_1)\\, m\\, \\lambda'],
    h: 290,
    draw: () => (
      <Plot x={70} y={30} w={380} h={200} xr={[0, 3]} yr={[0, 5]} yl="S (m/s²)"
        xt={[[TB, 'T_B'], [TC, 'T_C'], [1, '1 s'], [TD, 'T_D'], [3, '3 s']]} yt={[1, 2, 3, 4, 5].map(v => [v, String(v)])} grid
      >
        {(sx, sy) => (
          <g>
            <Poly pts={fnPts(Se, 0, 3, sx, sy, 150)} c="grey" w={2} dash="6 4" />
            <Poly pts={fnPts(T => Sd(T), 0, 3, sx, sy, 150)} c="red" w={3} />
            <Text x={sx(0.65)} y={sy(4.75)} s={12} c="grey" b>spectre élastique (q = 1)</Text>
            <Text x={sx(1.05)} y={sy(1.15)} s={12} c="red" b>spectre de calcul (q = 3)</Text>
            <Dot x={sx(0.35)} y={sy(Sd(0.35))} r={5.5} c="ink" />
            <Text x={sx(0.45)} y={sy(2.15)} a="middle" s={12} b>{'R+4 : T_1 = 0,35 s'}</Text>
            <Dot x={sx(2.5)} y={sy(Sd(2.5))} r={5.5} c="green" />
            <Text x={sx(2.45)} y={sy(0.72)} a="end" s={12} c="green" b>isolé : T = 2,5 s</Text>
          </g>
        )}
      </Plot>
    ),
    notes: [
      'Plateau entre $T_B$ et $T_C$ : $S_d = 1{,}6 \\times 1{,}15 \\times 2{,}5 / 3 = 1{,}53$ m/s² ; au-delà, l’accélération décroît avec la période.',
      'Le coefficient de comportement q (ductilité) divise le spectre élastique ; allonger la période (isolation) éloigne du plateau.',
    ],
    caption: 'Zone 4, sol C : accélération spectrale en fonction de la période propre du bâtiment.',
  },
  {
    id: 'r4-forces',
    title: 'Immeuble R+4 : force sismique et forces d’étage',
    steps: ['stepbystep'],
    formula: ['F_b = 1{,}533 \\times 2\\,000\\,000 \\times 0{,}85 = 2\\,606\\ \\text{kN}', 'F_{toit} = F_b\\,\\frac{z_5\\, m_5}{\\sum z_j\\, m_j} = 760\\ \\text{kN}'],
    h: 280,
    draw: () => (
      <g>
        <Rect x={150} y={250} w={240} h={10} c="ink" sw={0} fill="pat:soil" />
        <Line x1={130} y1={250} x2={410} y2={250} c="ink" w={2} />
        <Rect x={220} y={50} w={140} h={200} c="ink" sw={2.4} fill="~ink" />
        {LEVELS.map((z, k) => {
          const y = 250 - (z / 15) * 200;
          const len = 30 + (z / 15) * 90;
          return (
            <g key={z}>
              <Line x1={220} y1={y} x2={360} y2={y} c="ink" w={k === 4 ? 2.4 : 1.6} />
              <Arrow x1={216 - len} y1={y} x2={216} y2={y} c="red" w={2.4} hs={9} />
              <Text x={372} y={y + 5} s={12} c="mute">{`z = ${z} m`}</Text>
            </g>
          );
        })}
        <Text x={90} y={44} a="middle" s={13} c="red" b>{'F_{toit} = 760 kN'}</Text>
        <Text x={92} y={150} a="middle" s={12} c="red">{'F_i ∝ z_i m_i'}</Text>
        <Arrow x1={300} y1={268} x2={240} y2={268} c="green" w={3} hs={11} />
        <Text x={306} y={273} s={13} c="green" b>{'F_b = 2 606 kN à la base'}</Text>
      </g>
    ),
    notes: ['La force totale se répartit sur la hauteur proportionnellement à $z_i\\,m_i$ : les étages hauts reçoivent les plus grandes forces.'],
    caption: 'Méthode des forces latérales : effort tranchant à la base réparti en forces d’étage croissantes.',
  },
  {
    id: 'joint-isolation',
    title: 'Joint parasismique et isolation à la base',
    steps: ['simple_examples'],
    formula: ['d_s = \\sqrt{d_1^2 + d_2^2} = \\sqrt{35^2 + 45^2} = 57\\ \\text{mm}'],
    h: 270,
    draw: () => (
      <g>
        <Rect x={20} y={240} w={230} h={10} c="ink" sw={0} fill="pat:soil" />
        <Rect x={40} y={60} w={80} h={180} c="ink" sw={2} fill="~ink" />
        <Rect x={140} y={60} w={80} h={180} c="ink" sw={2} fill="~grey" />
        <Path d="M 40 240 Q 42 140 60 60" c="red" w={1.8} dash="6 4" />
        <Path d="M 220 240 Q 218 140 196 60" c="red" w={1.8} dash="6 4" />
        <Arrow x1={121} y1={50} x2={139} y2={50} c="txt" w={1.2} hs={5} both />
        <Text x={130} y={40} a="middle" s={13} b>{'d_s ≥ 60 mm'}</Text>
        <Text x={80} y={262} a="middle" s={12}>{'d_1 = 35 mm'}</Text>
        <Text x={180} y={262} a="middle" s={12}>{'d_2 = 45 mm'}</Text>
        <Text x={375} y={30} a="middle" s={13} b>appui isolateur</Text>
        <Rect x={300} y={42} w={150} h={60} c="ink" sw={2} fill="~ink" />
        <Text x={375} y={78} a="middle" s={12}>bâtiment</Text>
        <Rect x={310} y={102} w={130} h={10} c="ink" sw={1.8} fill="txt" />
        {Array.from({ length: 7 }, (_, k) => (
          <Rect key={k} x={318} y={112 + k * 12} w={114} h={k % 2 ? 4 : 8} c={k % 2 ? 'ink' : 'grey'} sw={k % 2 ? 0 : 1.2} fill={k % 2 ? 'ink' : '~grey'} />
        ))}
        <Rect x={364} y={112} w={22} h={80} c="grey" sw={1.4} fill="~orange" />
        <Rect x={310} y={192} w={130} h={10} c="ink" sw={1.8} fill="txt" />
        <Rect x={300} y={202} w={150} h={30} c="ink" sw={1.4} fill="pat:concrete" />
        <Text x={444} y={150} a="start" s={11} c="mute">{'caoutchouc\n+ acier'}</Text>
        <Text x={375} y={252} a="middle" s={12} c="orange" b>noyau de plomb (amortissement)</Text>
      </g>
    ),
    notes: ['Isolation : la période passe de 0,40 s à 2,50 s, l’accélération de calcul de 2,5 à 0,5 m/s² : −80 % d’efforts dans la structure.'],
    caption: 'Deux bâtiments voisins ne doivent pas s’entrechoquer ; un isolateur découple le bâtiment du sol.',
  },
  {
    id: 'tour-r8',
    title: 'Tour R+8 en zone 5 : effort et voiles confinés',
    steps: ['practical_case'],
    formula: ['S_d = 3{,}0 \\times 1{,}15 \\times \\frac{2{,}5}{3{,}6} = 2{,}40\\ \\text{m/s}^2', 'F_b = 2{,}396 \\times 4\\,500\\,000 \\times 0{,}85 = 9\\,165\\ \\text{kN}'],
    h: 290,
    draw: () => (
      <g>
        <Rect x={30} y={262} w={150} h={10} c="ink" sw={0} fill="pat:soil" />
        <Rect x={70} y={40} w={70} h={222} c="ink" sw={2.2} fill="~ink" />
        {Array.from({ length: 8 }, (_, k) => <Line key={k} x1={70} y1={64.7 + k * 24.7} x2={140} y2={64.7 + k * 24.7} c="ink" w={1} />)}
        <Arrow x1={240} y1={272} x2={150} y2={272} c="green" w={3} hs={11} />
        <Text x={190} y={258} a="middle" s={12} c="green" b>{'F_b ≈ 9 165 kN'}</Text>
        <Text x={105} y={30} a="middle" s={12} b>R+8, m = 4 500 t</Text>
        <Text x={365} y={56} a="middle" s={13} b>voile 25 cm, vue en plan</Text>
        <Rect x={260} y={100} w={210} h={30} c="ink" sw={2} fill="pat:concrete" />
        {[[260, 300], [430, 470]].map(([a, b]) => (
          <g key={a}>
            <Rect x={a + 4} y={104} w={b - a - 8} h={22} c="red" sw={2} rx={3} />
            {[0, 1, 2].map(k => <Line key={k} x1={a + 10 + k * 12} y1={104} x2={a + 10 + k * 12} y2={126} c="red" w={1.2} />)}
            {[[a + 8, 108], [b - 8, 108], [a + 8, 122], [b - 8, 122], [(a + b) / 2, 108], [(a + b) / 2, 122]].map(([x, y]) => <Circle key={`${x}${y}`} cx={x} cy={y} r={3} c="ink" sw={1} fill="txt" />)}
          </g>
        ))}
        <Text x={280} y={150} a="middle" s={11} c="red">potelet</Text>
        <Text x={450} y={150} a="middle" s={11} c="red">potelet</Text>
        <Text x={365} y={186} a="middle" s={12} b>{'cadres Φ10 tous les 6 cm'}</Text>
        <Path d="M 330 250 L 330 214 L 380 214 L 380 250 L 336 250 L 348 238" c="ink" w={2.4} />
        <Path d="M 330 214 L 342 226" c="ink" w={2.4} />
        <Text x={392} y={236} s={12}>{'crochets\nà 135°'}</Text>
      </g>
    ),
    notes: [
      'Zone 5 (Antilles) : $a_{gr} = 3{,}0$ m/s², sol C ($S = 1{,}15$), q = 3,6 → $S_d = 0{,}24$ g.',
      'Les extrémités des voiles (potelets) sont confinées par des cadres serrés à crochets à 135° : le béton y reste ductile sous les cycles.',
    ],
    caption: 'L’effort sismique est repris par les voiles ; leurs rives confinées assurent la ductilité.',
  },
  {
    id: 'zonage-ag',
    title: 'Accélération de calcul : zone et importance',
    steps: ['theory'],
    formula: ['a_g = \\gamma_I\\,a_{gr}'],
    h: 260,
    draw: () => (
      <g>
        <Text x={130} y={24} a="middle" s={13} b>zones de sismicité</Text>
        {[['1 très faible', 0.4], ['2 faible', 0.7], ['3 modérée', 1.1], ['4 moyenne', 1.6], ['5 forte', 3.0]].map(([t, a], i) => (
          <g key={t}>
            <Rect x={30} y={40 + i * 38} w={a * 60} h={28} c="red" sw={1.4} fill="~red" o={0.3 + i * 0.15} />
            <Text x={36 + a * 60} y={59 + i * 38} s={12} b>{`${t} : ${String(a).replace('.', ',')} m/s²`}</Text>
          </g>
        ))}
        <Text x={390} y={24} a="middle" s={13} b>catégorie d’importance</Text>
        {[['I : hangars', '0,8'], ['II : logements', '1,0'], ['III : écoles', '1,2'], ['IV : hôpitaux, secours', '1,4']].map(([t, g], i) => (
          <g key={t}>
            <Rect x={300} y={40 + i * 44} w={180} h={34} rx={6} c="ink" sw={1.4} fill={i === 3 ? '~red' : '~grey'} />
            <Text x={310} y={62 + i * 44} s={12}>{t}</Text>
            <Text x={470} y={62 + i * 44} a="end" s={13} b>{`γI = ${g}`}</Text>
          </g>
        ))}
      </g>
    ),
    notes: ['L’action sismique dépend du lieu (zone) et des conséquences d’un effondrement (importance) : un hôpital est calculé pour 40 % de plus qu’un logement.'],
    caption: 'Accélération de référence par zone et coefficient d’importance.',
  },
  {
    id: 'critere-etage-souple',
    title: 'Critère d’étage souple',
    steps: ['formulas'],
    formula: ['K_{étage,i} \\ge 0{,}70\\,K_{étage,i+1}'],
    h: 240,
    draw: () => (
      <g>
        {[[60, 1.0, 'R+2'], [120, 1.0, 'R+1'], [180, 0.5, 'RDC']].map(([y, k, t]) => (
          <g key={t}>
            <Rect x={60} y={y} w={k * 200} h={36} c={k < 0.7 ? 'red' : 'ink'} sw={1.6} fill={k < 0.7 ? '~red' : '~grey'} />
            <Text x={50} y={y + 24} a="end" s={12} b>{t}</Text>
            <Text x={68 + k * 200} y={y + 24} s={12} c={k < 0.7 ? 'red' : 'ink'}>{`K = ${k.toFixed(1).replace('.', ',')} K₀`}</Text>
          </g>
        ))}
        <Line x1={200} y1={170} x2={200} y2={226} c="green" w={2} dash="6 4" />
        <Text x={206} y={232} s={12} c="green" b>{'seuil 0,70 K₀'}</Text>
        <Text x={420} y={130} a="middle" s={12} c="red" b>{'RDC trop souple :\nconcentration des\ndéformations'}</Text>
      </g>
    ),
    notes: ['Un niveau beaucoup moins rigide que celui du dessus concentre les déplacements : on le raidit (voiles, contreventements).'],
    caption: 'Rigidités relatives des niveaux d’un bâtiment.',
  },
  {
    id: 'spectre-zone3',
    title: 'Accélération spectrale en zone 3, sol B',
    steps: ['simple_examples'],
    formula: ['S_d = a_{gr}\\,\\gamma_I\\,S\\,\\frac{2{,}5}{q} = 1{,}1 \\times 1{,}0 \\times 1{,}35 \\times \\frac{2{,}5}{3{,}0} = 1{,}24\\ \\text{m/s}^2'],
    h: 180,
    draw: () => (
      <g>
        {[['a_{gr} = 1,1', 'zone 3'], ['γI = 1,0', 'logements'], ['S = 1,35', 'sol B'], ['2,5 / q = 0,83', 'ductilité q = 3']].map(([a, b], i) => (
          <g key={a}>
            <Rect x={20 + i * 120} y={40} w={100} h={60} rx={8} c="ink" sw={1.6} fill="~grey" />
            <Text x={70 + i * 120} y={66} a="middle" s={13} b>{a}</Text>
            <Text x={70 + i * 120} y={88} a="middle" s={11}>{b}</Text>
            {i < 3 && <Text x={130 + i * 120} y={76} a="middle" s={18} b>×</Text>}
          </g>
        ))}
        <Text x={250} y={150} a="middle" s={14} c="red" b>{'S_d = 1,24 m/s² (≈ 0,13 g)'}</Text>
      </g>
    ),
    notes: ['Chaque facteur se lit dans un tableau : zone, importance, nature du sol et coefficient de comportement.'],
    caption: 'Composition de l’accélération de calcul sur le plateau du spectre.',
  },
  {
    id: 'chu-isolateurs',
    title: 'Hôpital sur isolateurs sismiques',
    steps: ['real_examples'],
    h: 250,
    draw: () => (
      <g>
        <Rect x={20} y={220} w={460} h={20} c="ink" sw={0} fill="pat:soil" />
        <Rect x={60} y={196} w={380} h={24} c="ink" sw={1.6} fill="pat:concrete" />
        {Array.from({ length: 8 }, (_, i) => 80 + i * 48).map(x => (
          <g key={x}>
            <Rect x={x} y={172} w={28} h={24} c="ink" sw={1.4} fill="~grey" />
            <Rect x={x + 10} y={172} w={8} h={24} c="orange" sw={0} fill="~orange" />
          </g>
        ))}
        <Building x={70} y={172} w={360} floors={4} fh={30} />
        <Text x={250} y={30} a="middle" s={12} b>{'zone 5 : a_{gr} = 3,0 m/s²'}</Text>
        <Text x={460} y={150} a="end" s={12} c="orange" b>{'220 appuis élastomère\nà noyau de plomb'}</Text>
        <Text x={250} y={58} a="middle" s={12} c="green" b>{'T₁ porté à 2,8 s'}</Text>
      </g>
    ),
    notes: ['Avec une période longue, le bâtiment sort du plateau du spectre : il « flotte » sur ses isolateurs pendant que le sol bouge.'],
    caption: 'CHU de Guadeloupe : isolation à la base de tout le bâtiment.',
  },
  {
    id: 'confinement-poteau',
    title: 'Zone critique d’un poteau : confinement',
    steps: ['diagrams'],
    h: 270,
    draw: () => (
      <g>
        <Rect x={150} y={20} w={80} h={230} c="ink" sw={2} fill="pat:concrete" />
        {[160, 220].map(x => <Line key={x} x1={x} y1={20} x2={x} y2={250} c="ink" w={2.6} />)}
        {Array.from({ length: 10 }, (_, i) => 250 - i * 6).map(y => <Line key={y} x1={154} y1={y} x2={226} y2={y} c="red" w={1.6} />)}
        {Array.from({ length: 8 }, (_, i) => 170 - i * 18).map(y => <Line key={y} x1={154} y1={y} x2={226} y2={y} c="ink" w={1.4} />)}
        <Line x1={130} y1={196} x2={130} y2={250} c="red" w={1.4} />
        <Text x={124} y={226} a="end" s={12} c="red" b>{'zone\ncritique'}</Text>
        <Text x={240} y={226} s={12} c="red">cadres e = 5 cm</Text>
        <Text x={240} y={120} s={12}>cadres courants</Text>
        <Path d="M 360 140 L 360 100 L 420 100 L 420 140 L 366 140 L 380 126" c="red" w={2.6} />
        <Path d="M 360 100 L 374 114" c="red" w={2.6} />
        <Text x={390} y={170} a="middle" s={12} c="red" b>crochets à 135°</Text>
      </g>
    ),
    notes: ['En pied de poteau, les cadres serrés et bien ancrés confinent le béton et empêchent le flambement des barres : la rotule plastique reste ductile.'],
    caption: 'Détail de ferraillage parasismique.',
  },
];
