// Plates — Module 4 · Dessin technique, cotation & lecture de plans
import { Arrow, Dim, Dot, Line, Poly, Rect, Text } from '../../components/figures/ink.jsx';
import { Circle, Path } from '../../components/figures/kit.jsx';

const LINES = [
  { name: 'continu fort', w: 3.4, use: 'contours vus et coupés' },
  { name: 'continu fin', w: 1.2, use: 'cotes, hachures, attaches' },
  { name: 'interrompu fin', w: 1.4, dash: '8 5', use: 'arêtes cachées' },
  { name: 'mixte fin', w: 1.2, dash: '16 4 2 4', use: 'axes, symétries' },
  { name: 'mixte fort aux bouts', w: 1.2, dash: '16 4 2 4', ends: true, use: 'trace d’un plan de coupe' },
];
const HATCH = [
  ['pat:concrete', '~grey', 'béton'],
  ['pat:brick', '~soil', 'maçonnerie'],
  ['pat:soil', '~soil', 'terre'],
  ['pat:insul', '~orange', 'isolant'],
  ['pat:wood', '~soil', 'bois'],
];

export default [
  {
    id: 'traits-hachures',
    title: 'Traits et hachures conventionnels',
    steps: ['theory'],
    formula: ['\\text{Réel} = \\text{mesure plan} \\times N \\quad (\\text{échelle } 1/N)'],
    h: 330,
    draw: () => (
      <g>
        {LINES.map((l, i) => {
          const y = 40 + i * 42;
          return (
            <g key={l.name}>
              <Line x1={20} y1={y} x2={150} y2={y} c="txt" w={l.w} dash={l.dash} />
              {l.ends && (
                <>
                  <Line x1={20} y1={y} x2={42} y2={y} c="txt" w={3.6} />
                  <Line x1={128} y1={y} x2={150} y2={y} c="txt" w={3.6} />
                  <Arrow x1={24} y1={y} x2={24} y2={y - 18} c="txt" w={1.6} hs={7} />
                  <Arrow x1={146} y1={y} x2={146} y2={y - 18} c="txt" w={1.6} hs={7} />
                  <Text x={8} y={y - 6} s={12} b>A</Text>
                  <Text x={154} y={y - 6} s={12} b>A</Text>
                </>
              )}
              <Text x={162} y={y - 4} s={14} b c="ink">{l.name}</Text>
              <Text x={162} y={y + 14} s={12} c="mute">{l.use}</Text>
            </g>
          );
        })}
        {HATCH.map(([fill, bg, name], i) => (
          <g key={name}>
            <Rect x={350} y={20 + i * 58} w={60} h={42} c="txt" sw={1.6} fill={fill} bg={bg} />
            <Text x={420} y={46 + i * 58} s={14}>{name}</Text>
          </g>
        ))}
      </g>
    ),
    notes: ['Un trait fort désigne ce que le plan de coupe traverse ; ce qu’on voit au-delà est en trait fin.'],
    caption: 'Les épaisseurs et les motifs de trait sont normalisés (NF EN ISO 128) : ils se lisent comme un langage.',
  },
  {
    id: 'voile-ferraillage',
    title: 'Voile de 6,00 × 2,80 m : coffrage et armatures',
    steps: ['stepbystep'],
    formula: ['S_{coff} = 2 \\times 6{,}00 \\times 2{,}80 = 33{,}60\\ \\text{m}^2', 'V = 3{,}36\\ \\text{m}^3'],
    h: 310,
    draw: () => {
      const x0 = 50;
      const y0 = 60;
      const W = 360;
      const H = 168;
      return (
        <g>
          <Rect x={x0} y={y0} w={W} h={H} c="grey" sw={2.4} fill="~grey" />
          {Array.from({ length: 41 }, (_, i) => (
            <Line key={i} x1={x0 + (W * i) / 40} y1={y0 - (i % 2 ? 0 : 18)} x2={x0 + (W * i) / 40} y2={y0 + H} c="red" w={1.1} />
          ))}
          {Array.from({ length: 15 }, (_, j) => (
            <Line key={j} x1={x0} y1={y0 + 6 + (H - 12) * (j / 14)} x2={x0 + W} y2={y0 + 6 + (H - 12) * (j / 14)} c="ink" w={0.9} />
          ))}
          <Dim x1={x0} y1={y0 + H + 22} x2={x0 + W} y2={y0 + H + 22} label="L = 6,00 m" side={-1} s={14} />
          <Dim x1={x0 - 18} y1={y0 + H} x2={x0 - 18} y2={y0} label="H = 2,80 m" s={14} />
          <Text x={x0 + W + 8} y={y0 + 40} s={12} c="red">{'HA12 e = 15\n2 lits :\n82 barres'}</Text>
          <Text x={x0 + W + 10} y={y0 + 110} s={13} c="ink">{'HA10 e = 20'}</Text>
          <Text x={x0 + W + 10} y={y0 - 22} s={12} c="mute">{'attentes\n50 Ø = 0,60 m'}</Text>
        </g>
      );
    },
    notes: ['Nombre de barres = nombre d’intervalles + 1 : 6,00 / 0,15 = 40 intervalles → 41 barres par lit.'],
    caption: 'Élévation d’un voile : barres verticales (rouge, avec attentes) et horizontales (bleu). HA12 : 278,8 m soit 247,6 kg.',
  },
  {
    id: 'plan-coffrage-tremies',
    title: 'Plan de coffrage : poutre noyée et trémies',
    steps: ['real_examples', 'diagrams'],
    h: 300,
    draw: () => (
      <g>
        <Rect x={30} y={30} w={440} h={220} c="txt" sw={3} fill="~grey" />
        <Line x1={250} y1={30} x2={250} y2={250} c="txt" w={1.4} dash="10 6" />
        <Line x1={238} y1={30} x2={238} y2={250} c="txt" w={1.4} dash="10 6" />
        <Line x1={262} y1={30} x2={262} y2={250} c="txt" w={1.4} dash="10 6" />
        <Text x={268} y={140} s={13} c="ink" rot={-90}>PN1 (30 × 20) noyée</Text>
        {[[110, 90, 32, 48, 'T1 40×60'], [330, 120, 80, 80, 'T2 100×100']].map(([x, y, w, h, lab]) => (
          <g key={lab}>
            <Rect x={x} y={y} w={w} h={h} c="red" sw={2} />
            <Line x1={x} y1={y} x2={x + w} y2={y + h} c="red" w={1.4} />
            <Line x1={x + w} y1={y} x2={x} y2={y + h} c="red" w={1.4} />
            <Text x={x + w / 2} y={y + h + 18} a="middle" s={13} c="red">{lab}</Text>
          </g>
        ))}
        <Rect x={30} y={30} w={24} h={24} c="txt" sw={0} fill="txt" />
        <Rect x={446} y={30} w={24} h={24} c="txt" sw={0} fill="txt" />
        <Rect x={30} y={226} w={24} h={24} c="txt" sw={0} fill="txt" />
        <Rect x={446} y={226} w={24} h={24} c="txt" sw={0} fill="txt" />
        <Text x={140} y={210} a="middle" s={15} c="ink">dalle pleine e = 20 cm</Text>
        <Text x={250} y={272} a="middle" s={13} c="mute">trémie : rectangle barré d’une croix · poteaux coupés : noircis</Text>
      </g>
    ),
    notes: ['La gaine de désenfumage (T2) impose des renforts d’armatures autour de l’ouverture.'],
    caption: 'Plancher haut du rez-de-chaussée d’une résidence R+3 à Lyon.',
  },
  {
    id: 'poteau-metre',
    title: 'Poteau 40 × 40 cm : coffrage, béton, aciers',
    steps: ['practical_case'],
    formula: ['V = 0{,}40 \\times 0{,}40 \\times 3{,}20 = 0{,}512\\ \\text{m}^3'],
    h: 330,
    draw: () => (
      <g>
        <Rect x={90} y={40} w={60} h={240} c="grey" sw={2.2} fill="~grey" />
        {Array.from({ length: 22 }, (_, i) => <Line key={i} x1={94} y1={46 + i * 10.9} x2={146} y2={46 + i * 10.9} c="ink" w={1} />)}
        <Line x1={100} y1={10} x2={100} y2={280} c="red" w={2} />
        <Line x1={140} y1={10} x2={140} y2={280} c="red" w={2} />
        <Text x={160} y={24} s={12} c="red">{'attentes\n50 Ø = 0,80 m'}</Text>
        <Dim x1={60} y1={280} x2={60} y2={40} label="H = 3,20 m" s={14} />
        <Text x={160} y={160} s={13} c="ink">{'cadres HA8\ne = 15 cm\n22 cadres'}</Text>
        <Rect x={320} y={90} w={110} h={110} c="grey" sw={2.2} fill="pat:concrete" bg="~grey" />
        <Rect x={332} y={102} w={86} h={86} rx={6} c="ink" sw={1.8} />
        {[[342, 112], [408, 112], [342, 178], [408, 178]].map(([x, y]) => <Dot key={`${x}-${y}`} x={x} y={y} r={7} c="red" />)}
        <Dim x1={320} y1={218} x2={430} y2={218} label="40 cm" side={-1} s={13} />
        <Text x={375} y={76} a="middle" s={14} b>coupe : 4 HA16</Text>
        <Text x={250} y={312} a="middle" s={13} c="mute">acier total 39,2 kg → ratio 76,5 kg/m³</Text>
      </g>
    ),
    notes: ['Le coffrage se compte sur les quatre faces : 4 × 0,40 × 3,20 = 5,12 m².'],
    caption: 'Élévation et coupe d’un poteau intérieur, bases du métré.',
  },
  {
    id: 'hachures-materiaux',
    title: 'Hachures conventionnelles par matériau',
    steps: ['theory'],
    h: 230,
    draw: () => {
      const cells = [
        ['béton armé', 'pat:hatch', 'ink'],
        ['béton non armé', 'pat:concrete', 'ink'],
        ['terrain naturel', 'pat:soil', 'soil'],
        ['isolant', 'pat:insul', 'orange'],
        ['acier (pochage)', 'txt', 'ink'],
      ];
      return (
        <g>
          {cells.map(([t, f, c], i) => (
            <g key={t}>
              <Rect x={20 + i * 94} y={50} w={80} h={100} c="ink" sw={2} fill={f} />
              {i === 0 && <Line x1={20} y1={135} x2={100} y2={135} c="ink" w={1.4} dash="6 4" />}
              <Text x={60 + i * 94} y={176} a="middle" s={12} b>{t}</Text>
            </g>
          ))}
          <Text x={250} y={212} a="middle" s={11} c="mute">béton armé : hachures à 45° (ou quadrillage) ; acier : noirci ou hachures serrées</Text>
        </g>
      );
    },
    notes: ['Sur une coupe, la hachure dit de quoi l’élément est fait : on reconnaît d’un coup d’œil le béton, la terre et l’isolant.'],
    caption: 'Légende des matériaux coupés (NF EN ISO 128).',
  },
  {
    id: 'echelles-usuelles',
    title: 'Une même pièce de 4,20 m à trois échelles',
    steps: ['theory', 'formulas', 'simple_examples'],
    formula: ['\\text{réel} = \\text{mesure} \\times N \\qquad 8{,}4\\ \\text{cm} \\times 50 = 4{,}20\\ \\text{m}'],
    h: 230,
    draw: () => (
      <g>
        {[[30, 1, '1/100 : 4,2 cm'], [130, 2, '1/50 : 8,4 cm'], [300, 4.4, '1/20 : 21 cm (réduit)']].map(([x, k, t]) => (
          <g key={t}>
            <Rect x={x} y={150 - 15 * k} w={21 * k * (k > 4 ? 0.8 : 1)} h={15 * k} c="ink" sw={2} fill="~grey" />
            <Text x={x} y={174} s={12} b>{t}</Text>
          </g>
        ))}
        <Text x={250} y={200} a="middle" s={12}>{'plans de masse 1/500–1/1000 · ensemble 1/100–1/50 · détails 1/20–1/5'}</Text>
        <Text x={250} y={30} a="middle" s={12} c="mute">plus l’échelle est grande (1/20), plus le dessin est détaillé</Text>
      </g>
    ),
    notes: ['On ne mesure jamais au double-décimètre pour construire : on lit les cotes. La règle sert à vérifier un ordre de grandeur.'],
    caption: 'Dimension réelle = dimension mesurée × N (échelle 1/N).',
  },
  {
    id: 'pente-caniveau',
    title: 'Pente d’un caniveau entre deux regards',
    steps: ['formulas', 'simple_examples'],
    formula: ['p = \\frac{Z_A - Z_B}{D_h} \\times 100 = \\frac{24{,}15 - 23{,}80}{35{,}0} \\times 100 = 1{,}00\\ \\%'],
    h: 230,
    draw: () => (
      <g>
        <Rect x={50} y={60} w={40} h={110} c="ink" sw={2} fill="~grey" />
        <Rect x={410} y={60} w={40} h={130} c="ink" sw={2} fill="~grey" />
        <Line x1={90} y1={150} x2={410} y2={170} c="water" w={4} />
        <Text x={70} y={50} a="middle" s={13} b>A</Text>
        <Text x={430} y={50} a="middle" s={13} b>B</Text>
        <Text x={98} y={142} s={12}>radier 24,15</Text>
        <Text x={402} y={162} a="end" s={12}>radier 23,80</Text>
        <Arrow x1={91} y1={204} x2={409} y2={204} c="txt" w={1.2} hs={6} both />
        <Text x={250} y={222} a="middle" s={12}>Dh = 35,0 m</Text>
        <Text x={250} y={120} a="middle" s={13} c="water" b>pente 1,00 % → écoulement gravitaire</Text>
      </g>
    ),
    notes: ['Sur un plan VRD, on lit les altitudes des fils d’eau aux regards : leur différence divisée par la distance donne la pente.'],
    caption: 'Profil en long simplifié d’un caniveau (pente exagérée).',
  },
  {
    id: 'niveaux-ngf',
    title: 'Niveau brut et niveau fini',
    steps: ['formulas'],
    formula: ['Z_{fini} = Z_{brut} + e_{chape + rev} = 12{,}25 + 0{,}05 = 12{,}30'],
    h: 220,
    draw: () => (
      <g>
        <Rect x={40} y={120} w={300} h={40} c="ink" sw={2} fill="pat:concrete" />
        <Rect x={40} y={104} w={300} h={16} c="orange" sw={1.6} fill="~orange" />
        <Line x1={40} y1={104} x2={460} y2={104} c="red" w={1.2} dash="6 4" />
        <Line x1={40} y1={120} x2={460} y2={120} c="ink" w={1.2} dash="6 4" />
        <Poly pts={[[380, 104], [372, 92], [388, 92]]} c="red" w={1.6} fill="~red" close />
        <Text x={394} y={98} s={13} c="red" b>+12,30 fini</Text>
        <Poly pts={[[380, 120], [372, 132], [388, 132]]} c="ink" w={1.6} fill="~grey" close />
        <Text x={394} y={140} s={13} b>+12,25 brut</Text>
        <Text x={190} y={116} a="middle" s={11}>chape + revêtement 5 cm</Text>
        <Text x={190} y={146} a="middle" s={11}>dalle béton</Text>
      </g>
    ),
    notes: ['Le gros œuvre travaille en niveaux bruts (dessus de dalle) ; l’architecte cote les niveaux finis : les confondre décale toutes les hauteurs.'],
    caption: 'Symboles de niveau : altitude brute du béton et altitude finie du sol.',
  },
  {
    id: 'cotation-baies',
    title: 'Coter une baie : L × H et allège',
    steps: ['formulas'],
    formula: ['\\text{baie : } L \\times H \\qquad \\text{allège : hauteur sous la baie}'],
    h: 250,
    draw: () => (
      <g>
        <Rect x={30} y={30} w={440} h={190} c="ink" sw={2} fill="pat:brick" />
        <Rect x={90} y={70} w={110} h={100} c="water" sw={2.4} fill="~water" />
        <Rect x={300} y={60} w={80} h={160} c="soil" sw={2.4} fill="~soil" />
        <Text x={145} y={124} a="middle" s={14} b>120 × 135</Text>
        <Text x={340} y={144} a="middle" s={14} b>{'90 ×\n215'}</Text>
        <Arrow x1={210} y1={171} x2={210} y2={219} c="red" w={1.4} hs={6} both />
        <Text x={216} y={200} s={13} c="red" b>allège 95</Text>
        <Line x1={20} y1={220} x2={480} y2={220} c="ink" w={2.4} />
        <Text x={145} y={60} a="middle" s={11} c="mute">fenêtre</Text>
        <Text x={340} y={52} a="middle" s={11} c="mute">porte</Text>
      </g>
    ),
    notes: ['Convention : largeur × hauteur (en cm), l’allège indiquant la hauteur du bas de la baie au-dessus du sol fini.'],
    caption: 'Élévation d’un mur avec une fenêtre et une porte cotées.',
  },
  {
    id: 'treillis-soude',
    title: 'Treillis soudé : surface et recouvrements',
    steps: ['formulas'],
    formula: ['M_{TS} = m_{surf} \\times A \\times 1{,}10 = 3{,}0 \\times 50 \\times 1{,}10 = 165\\ \\text{kg}'],
    h: 230,
    draw: () => (
      <g>
        {[[40, 50], [210, 50]].map(([x, y], k) => (
          <g key={x}>
            <Rect x={x} y={y} w={190} h={140} c={k ? 'red' : 'ink'} sw={2} />
            {Array.from({ length: 10 }, (_, i) => <Line key={`v${i}`} x1={x + 10 + i * 19} y1={y} x2={x + 10 + i * 19} y2={y + 140} c={k ? 'red' : 'ink'} w={1} />)}
            {Array.from({ length: 7 }, (_, i) => <Line key={`h${i}`} x1={x} y1={y + 10 + i * 20} x2={x + 190} y2={y + 10 + i * 20} c={k ? 'red' : 'ink'} w={1} />)}
          </g>
        ))}
        <Rect x={210} y={50} w={20} h={140} c="orange" sw={0} fill="~orange" />
        <Text x={220} y={214} a="middle" s={12} c="orange" b>recouvrement</Text>
        <Text x={420} y={90} s={12}>{'+10 % pour\nrecouvrements\net chutes'}</Text>
      </g>
    ),
    notes: ['Exemple chiffré avec un panneau de 3,0 kg/m² (valeur d’exemple) sur 50 m² de dalle : on commande environ 165 kg.'],
    caption: 'Deux panneaux de treillis soudé se recouvrent : la masse commandée dépasse la surface nette.',
  },
  {
    id: 'longueur-developpee',
    title: 'Longueur développée d’une barre façonnée',
    steps: ['formulas'],
    formula: ['L_{dev} = A + B + C - n_{coudes} \\cdot 2\\phi = 30 + 150 + 30 - 2 \\times 2 \\times 1{,}2 = 205{,}2\\ \\text{cm}'],
    h: 220,
    draw: () => (
      <g>
        <Path d="M 80 60 L 80 150 Q 80 160 90 160 L 410 160 Q 420 160 420 150 L 420 60" c="ink" w={4} />
        <Text x={70} y={110} a="end" s={14} c="red" b>A = 30</Text>
        <Text x={250} y={184} a="middle" s={14} c="red" b>B = 150</Text>
        <Text x={430} y={110} s={14} c="red" b>C = 30</Text>
        <Text x={250} y={120} a="middle" s={12}>HA12 · 2 coudes</Text>
        <Text x={250} y={40} a="middle" s={11} c="mute">cotes extérieures en cm</Text>
      </g>
    ),
    notes: ['Les cotes du plan sont prises à l’extérieur de la barre : à chaque coude, la longueur réelle de fibre moyenne est un peu plus courte.'],
    caption: 'Barre en U : somme des segments moins une correction par coude.',
  },
  {
    id: 'barres-semelle',
    title: 'Métré des aciers d’une semelle',
    steps: ['simple_examples'],
    formula: ['L_{tot} = 24 \\times 3{,}50 = 84{,}0\\ \\text{m} \\qquad P = 84{,}0 \\times 1{,}58 = 132{,}7\\ \\text{kg}'],
    h: 250,
    draw: () => (
      <g>
        <Rect x={110} y={30} w={190} h={190} c="ink" sw={2} fill="pat:concrete" />
        {Array.from({ length: 12 }, (_, i) => <Line key={`v${i}`} x1={124 + i * 15} y1={40} x2={124 + i * 15} y2={210} c="red" w={2} />)}
        {Array.from({ length: 12 }, (_, i) => <Line key={`h${i}`} x1={120} y1={44 + i * 15} x2={290} y2={44 + i * 15} c="red" w={2} o={0.7} />)}
        <Text x={320} y={90} s={13} b>{'24 HA16\n(12 + 12)'}</Text>
        <Text x={320} y={150} s={13}>{'L = 3,50 m\n1,58 kg/m'}</Text>
        <Text x={205} y={244} a="middle" s={12} c="mute">nappe inférieure de la semelle (vue en plan)</Text>
      </g>
    ),
    notes: ['Métré = nombre de barres × longueur ; poids = métré × masse linéique (0,00617 d² kg/m).'],
    caption: 'Plan de ferraillage d’une semelle : deux lits croisés de 12 barres HA16.',
  },
  {
    id: 'coupe-aa-hsp',
    title: 'Coupe A-A : dalle, poutre et hauteur sous plafond',
    steps: ['diagrams'],
    h: 260,
    draw: () => (
      <g>
        <Rect x={30} y={40} w={440} h={24} c="ink" sw={2} fill="pat:hatch" />
        <Rect x={200} y={64} w={60} h={40} c="ink" sw={2} fill="pat:hatch" />
        <Rect x={340} y={40} w={60} h={24} c="ink" sw={1.6} fill="paper" dash="5 4" />
        <Text x={370} y={34} a="middle" s={11} c="red">réservation</Text>
        <Rect x={30} y={230} w={440} h={16} c="ink" sw={2} fill="pat:concrete" />
        <Arrow x1={110} y1={65} x2={110} y2={229} c="red" w={1.4} hs={6} both />
        <Text x={116} y={154} s={13} c="red" b>HSP = 2,50 m</Text>
        <Arrow x1={290} y1={65} x2={290} y2={103} c="txt" w={1.2} hs={5} both />
        <Text x={296} y={90} s={12}>retombée 40</Text>
        <Text x={36} y={34} s={12} b>dalle 20 cm</Text>
        <Text x={230} y={124} a="middle" s={12}>poutre</Text>
      </g>
    ),
    notes: ['La coupe montre ce que le plan ne dit pas : hauteurs, retombées de poutres et passages des réseaux.'],
    caption: 'Coupe verticale d’un niveau : dalle, retombée de poutre, réservation et HSP.',
  },
];
