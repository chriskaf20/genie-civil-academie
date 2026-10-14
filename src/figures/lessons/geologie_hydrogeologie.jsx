// Plates — Module 36 · Hydrogéologie de l'ingénieur
import { Arrow, Box, Circle, Dim, Line, Path, Poly, Rect, Text, WaterLevel } from '../../components/figures/ink.jsx';
import { Dot } from '../../components/figures/kit.jsx';

/** Ground surface with a few grass tufts. */
function Surface({ x1, x2, y }) {
  const tufts = [];
  for (let x = x1 + 10; x < x2; x += 34) tufts.push(<Path key={x} d={`M${x},${y} l2,-6 M${x + 4},${y} l0,-7 M${x + 8},${y} l-2,-6`} c="green" w={1.2} />);
  return <g><Line x1={x1} y1={y} x2={x2} y2={y} c="soil" w={2.2} />{tufts}</g>;
}

/** Drawdown cone of an unconfined aquifer (Dupuit): returns points for r = rw → R on one side. */
function dupuit(H, hw, rw, R, side, xw, yBase, n = 40) {
  return Array.from({ length: n + 1 }, (_, i) => {
    const r = rw * (R / rw) ** (i / n);
    const h = Math.sqrt(hw * hw + ((H * H - hw * hw) * Math.log(r / rw)) / Math.log(R / rw));
    return [xw + side * r, yBase - h];
  });
}

export default [
  {
    id: 'nappes',
    title: 'Nappe libre et nappe captive',
    steps: ['theory'],
    h: 300,
    draw: () => (
      <g>
        <Text x={130} y={22} a="middle" s={16} b c="ink">nappe libre</Text>
        <Rect x={20} y={60} w={220} h={50} c="soil" sw={0} fill="pat:sand" bg="~soil" />
        <Rect x={20} y={110} w={220} h={92} c="water" sw={0} fill="pat:sand" bg="~water" />
        <Rect x={20} y={202} w={220} h={50} c="soil" sw={1.4} fill="pat:clay" bg="~soil" />
        <Surface x1={20} x2={240} y={60} />
        <WaterLevel x={70} y={110} x1={20} x2={240} />
        <Rect x={170} y={40} w={14} h={162} c="ink" sw={1.8} fill="paper" />
        <Rect x={171} y={110} w={12} h={92} c="water" sw={0} fill="~water" />
        <Text x={30} y={88} s={13} c="soil">zone non saturée</Text>
        <Text x={30} y={160} s={13} c="water">zone saturée (aquifère)</Text>
        <Text x={30} y={232} s={13} c="soil">substratum imperméable</Text>
        <Text x={190} y={36} s={12} c="mute">puits</Text>

        <Text x={370} y={22} a="middle" s={16} b c="ink">nappe captive</Text>
        <Rect x={260} y={60} w={220} h={48} c="soil" sw={1.4} fill="pat:clay" bg="~soil" />
        <Rect x={260} y={108} w={220} h={78} c="water" sw={0} fill="pat:gravel" bg="~water" />
        <Rect x={260} y={186} w={220} h={66} c="soil" sw={1.4} fill="pat:clay" bg="~soil" />
        <Surface x1={260} x2={480} y={60} />
        <WaterLevel x={300} y={44} x1={260} x2={480} label="niveau piézométrique" s={12} />
        <Rect x={420} y={40} w={14} h={146} c="ink" sw={1.8} fill="paper" />
        <Rect x={421} y={44} w={12} h={142} c="water" sw={0} fill="~water" />
        <Arrow x1={427} y1={170} x2={427} y2={70} c="water" w={1.6} hs={8} />
        <Text x={270} y={88} s={13} c="soil">toit imperméable</Text>
        <Text x={270} y={150} s={13} c="water">{'aquifère sous pression'}</Text>
        <Text x={270} y={226} s={13} c="soil">mur imperméable</Text>
        <Text x={398} y={286} a="middle" s={12} c="mute">l’eau monte au-dessus du toit</Text>
      </g>
    ),
    notes: [
      'Nappe libre : la surface de l’eau est à la pression atmosphérique (▽).',
      'Nappe captive : l’eau monte dans le forage jusqu’au niveau piézométrique ; au-dessus du sol, le puits est artésien.',
    ],
    caption: 'Les deux grands types de nappes rencontrés en fouille.',
  },
  {
    id: 'puits-dupuit',
    title: 'Pompage en nappe libre (Dupuit)',
    steps: ['formulas', 'stepbystep'],
    formula: 'Q = \\frac{\\pi K (H^2 - h^2)}{\\ln(R/r)}',
    h: 330,
    draw: () => {
      const yBase = 270;
      const H = 170;
      const hw = 108;
      const xw = 250;
      const left = dupuit(H, hw, 8, 200, -1, xw, yBase);
      const right = dupuit(H, hw, 8, 200, 1, xw, yBase);
      const water = [...left.slice().reverse(), ...right];
      return (
        <g>
          <Rect x={30} y={50} w={440} h={220} c="soil" sw={0} fill="pat:sand" bg="~soil" />
          <Poly pts={[[30, yBase], ...water.filter(p => p[0] >= 30 && p[0] <= 470), [470, yBase]]} c="water" w={0} fill="~water" />
          <Rect x={30} y={270} w={440} h={36} c="soil" sw={1.4} fill="pat:clay" bg="~soil" />
          <Surface x1={30} x2={470} y={50} />
          <Line x1={30} y1={yBase - H} x2={470} y2={yBase - H} c="water" w={1.6} dash="7 5" />
          <WaterLevel x={420} y={yBase - H} label="niveau initial" s={12} />
          <Poly pts={left} c="water" w={2.4} />
          <Poly pts={right} c="water" w={2.4} />
          <Rect x={xw - 8} y={36} w={16} h={234} c="ink" sw={1.8} fill="paper" />
          <Rect x={xw - 7} y={yBase - hw} w={14} h={hw} c="water" sw={0} fill="~water" />
          <Arrow x1={xw} y1={150} x2={xw} y2={14} c="ink" w={2.4} hs={11} />
          <Text x={xw + 10} y={22} s={17} c="ink">Q</Text>
          {[[90, 210], [140, 190], [360, 190], [410, 210]].map(([x, y]) => (
            <Arrow key={x} x1={x} y1={y} x2={x + (x < xw ? 28 : -28)} y2={y + 6} c="water" w={1.5} hs={7} />
          ))}
          <Dim x1={58} y1={yBase} x2={58} y2={yBase - H} label="H" s={15} />
          <Dim x1={xw - 26} y1={yBase} x2={xw - 26} y2={yBase - hw} label="h" s={15} />
          <Dim x1={xw + 28} y1={yBase - H} x2={xw + 28} y2={yBase - hw} label="s" s={15} side={-1} />
          <Dim x1={xw} y1={306} x2={450} y2={306} label="R (rayon d’influence)" s={13} side={-1} />
          <Text x={40} y={292} s={12} c="soil">substratum imperméable</Text>
        </g>
      );
    },
    notes: [
      'Le pompage crée un cône de rabattement qui s’étend jusqu’au rayon d’influence R.',
      'Rabattement dans le puits : $s = H - h$ ; estimation de R (Sichardt) : $R = 3000\\, s \\sqrt{K}$.',
    ],
    caption: 'Puits complet dans une nappe libre reposant sur un substratum imperméable.',
  },
  {
    id: 'fouille-rabattement',
    title: 'Fouille sous la nappe : rabattement',
    steps: ['diagrams'],
    h: 330,
    draw: () => {
      const wt = 110;
      const lowered = Array.from({ length: 41 }, (_, i) => {
        const x = 20 + (460 * i) / 40;
        const d = Math.abs(x - 250);
        const y = d < 100 ? 196 : 196 - (196 - wt) * Math.min(1, ((d - 100) / 130) ** 0.7);
        return [x, y];
      });
      return (
        <g>
          <Rect x={20} y={60} w={460} h={230} c="soil" sw={0} fill="pat:sand" bg="~soil" />
          <Poly pts={[[20, 290], ...lowered, [480, 290]]} c="water" w={0} fill="~water" />
          <Line x1={20} y1={60} x2={480} y2={60} c="soil" w={2.2} />
          <Rect x={170} y={58} w={160} h={112} c="ink" sw={2} fill="paper" />
          <Text x={250} y={120} a="middle" s={15} c="ink">fouille</Text>
          <Line x1={20} y1={wt} x2={480} y2={wt} c="water" w={1.4} dash="6 5" />
          <Text x={476} y={wt - 6} a="end" s={12} c="water">nappe avant travaux</Text>
          <Poly pts={lowered} c="water" w={2.4} />
          <Text x={250} y={214} a="middle" s={12} c="water">nappe rabattue sous le fond de fouille</Text>
          {[150, 350].map(x => (
            <g key={x}>
              <Rect x={x - 5} y={50} w={10} h={210} c="ink" sw={1.6} fill="~ink" />
              <Arrow x1={x} y1={70} x2={x} y2={30} c="ink" w={2} hs={9} />
            </g>
          ))}
          <Text x={150} y={24} a="middle" s={12} c="ink">puits</Text>
          <Text x={350} y={24} a="middle" s={12} c="ink">puits</Text>
          <Rect x={36} y={22} w={70} h={38} c="grey" sw={1.6} fill="~grey" />
          <Rect x={30} y={60} w={82} h={8} c="grey" sw={1.4} fill="~grey" />
          <Text x={71} y={84} a="middle" s={11} c="red">tassement ?</Text>
          <Rect x={436} y={40} w={8} h={160} c="mute" sw={1.4} fill="paper" />
          <WaterLevel x={440} y={150} />
          <Text x={448} y={36} a="end" s={11} c="mute">piézomètre</Text>
          <Box x={378} y={232} w={92} h={40} label={'bac de\ndécantation'} s={12} c="water" fill="~water" />
          <Path d="M350,30 H392 V232" c="ink" w={1.6} />
          <Text x={250} y={312} a="middle" s={13} c="mute">surveiller les niveaux, les débits, la turbidité et les bâtiments voisins</Text>
        </g>
      );
    },
    caption: 'Rabattement par puits autour d’une fouille : la nappe est abaissée sous le fond.',
  },
  {
    id: 'plan-puits',
    title: 'Plan du rabattement (5 puits)',
    steps: ['practical_case'],
    formula: 'n = \\frac{Q}{Q_{pompe}} = \\frac{67}{15} \\Rightarrow 5',
    h: 280,
    draw: () => {
      const wells = [[120, 60], [250, 40], [380, 60], [380, 200], [120, 200]];
      return (
        <g>
          <Rect x={150} y={80} w={200} h={110} c="ink" sw={2.2} fill="~ink" />
          <Text x={250} y={140} a="middle" s={16} c="ink">fouille 30 × 20 m</Text>
          {wells.map(([x, y], i) => (
            <g key={i}>
              <Circle cx={x} cy={y} r={11} c="water" sw={2} fill="~water" />
              <Text x={x} y={y + 5} a="middle" s={12} c="water">P{i + 1}</Text>
            </g>
          ))}
          <Path d="M131,60 H239 M261,40 H300 V60 H369 M380,71 V189 M369,200 H131 M120,189 V71" c="water" w={1.4} dash="5 4" />
          <Path d="M380,200 H440 V236" c="water" w={2} />
          <Box x={400} y={236} w={84} h={36} label="décantation" s={12} c="water" fill="~water" />
          <Text x={24} y={260} s={13} c="mute">{'5 puits en service + 2 pompes de secours'}</Text>
        </g>
      );
    },
    notes: ['Débit total ≈ 67 m³/h, soit environ 1 600 m³/jour à rejeter après décantation.'],
    caption: 'Vue en plan : puits répartis autour de la fouille et collecteur vers le bac de décantation.',
  },
  {
    id: 'darcy-loi',
    title: 'Loi de Darcy : le perméamètre',
    steps: ['theory'],
    formula: ['Q = K\\,i\\,A \\qquad i = \\frac{\\Delta h}{L}'],
    h: 250,
    draw: () => (
      <g>
        <Rect x={160} y={90} w={160} h={70} c="ink" sw={2} fill="pat:sand" />
        <Rect x={80} y={40} w={40} h={120} c="ink" sw={1.6} fill="~water" />
        <Rect x={360} y={100} w={40} h={60} c="ink" sw={1.6} fill="~water" />
        <Line x1={120} y1={125} x2={160} y2={125} c="water" w={6} />
        <Line x1={320} y1={125} x2={360} y2={125} c="water" w={6} />
        <Line x1={60} y1={40} x2={420} y2={40} c="water" w={1} dash="4 4" />
        <Line x1={60} y1={100} x2={420} y2={100} c="water" w={1} dash="4 4" />
        <Arrow x1={440} y1={41} x2={440} y2={99} c="red" w={1.4} hs={6} both />
        <Text x={446} y={74} s={13} c="red" b>Δh</Text>
        <Arrow x1={161} y1={180} x2={319} y2={180} c="txt" w={1.2} hs={6} both />
        <Text x={240} y={198} a="middle" s={13}>L</Text>
        <Text x={240} y={130} a="middle" s={13} b>sol, section A</Text>
        <Arrow x1={330} y1={220} x2={400} y2={220} c="water" w={2.2} hs={8} />
        <Text x={410} y={224} s={12} c="water" b>Q</Text>
      </g>
    ),
    notes: ['Le débit est proportionnel à la perte de charge par unité de longueur (gradient i) et à la perméabilité K du sol.'],
    caption: 'Écoulement à travers un échantillon de sol.',
  },
  {
    id: 'debit-darcy',
    title: 'Débit à travers une couche',
    steps: ['simple_examples'],
    formula: ['Q = 10^{-5} \\times 0{,}02 \\times 500 = 10^{-4}\\ \\text{m}^3/\\text{s} = 0{,}36\\ \\text{m}^3/\\text{h}'],
    h: 190,
    draw: () => (
      <g>
        <Rect x={40} y={60} w={420} h={60} c="soil" sw={1.4} fill="pat:sand" />
        {[80, 180, 280, 380].map(x => <Arrow key={x} x1={x} y1={90} x2={x + 60} y2={94} c="water" w={2} hs={7} />)}
        <Text x={250} y={48} a="middle" s={12}>section A = 500 m², gradient i = 0,02</Text>
        <Text x={250} y={150} a="middle" s={13} c="water" b>K = 10⁻⁵ m/s → 0,36 m³/h</Text>
      </g>
    ),
    notes: ['Un sable fin peu perméable laisse passer peu d’eau, même sur une grande section.'],
    caption: 'Application directe de Darcy à une nappe.',
  },
  {
    id: 'vitesse-reelle',
    title: 'Vitesse de Darcy et vitesse réelle',
    steps: ['simple_examples'],
    formula: ['v_r = \\frac{K\\,i}{n_e} = \\frac{10^{-4} \\times 0{,}01}{0{,}20} = 5 \\times 10^{-6}\\ \\text{m/s} \\approx 158\\ \\text{m/an}'],
    h: 210,
    draw: () => (
      <g>
        <Rect x={60} y={40} w={380} h={110} c="ink" sw={1.6} fill="paper" />
        {Array.from({ length: 24 }, (_, i) => <Circle key={i} cx={80 + (i % 8) * 48} cy={60 + Math.floor(i / 8) * 36} r={16} c="soil" sw={1.4} fill="~soil" />)}
        <Path d="M 60 78 Q 105 96 128 78 T 224 78 T 320 78 T 440 78" c="water" w={2.4} />
        <Text x={250} y={176} a="middle" s={12}>{'l’eau ne passe que dans les pores (n_e = 20 %) : elle va 5 fois plus vite'}</Text>
      </g>
    ),
    notes: ['C’est la vitesse réelle qui compte pour le transport d’une pollution : 158 m par an ici.'],
    caption: 'Cheminement de l’eau entre les grains.',
  },
  {
    id: 'puits-captive',
    title: 'Puits en nappe captive (Thiem)',
    steps: ['formulas', 'simple_examples'],
    formula: ['Q = \\frac{2\\pi K b\\,(H - h)}{\\ln(R/r)} = \\frac{2\\pi \\times 10^{-4} \\times 10 \\times 3}{\\ln 600} = 10{,}6\\ \\text{m}^3/\\text{h}'],
    h: 250,
    draw: () => (
      <g>
        <Rect x={20} y={70} w={460} h={30} c="soil" sw={0} fill="pat:clay" />
        <Rect x={20} y={100} w={460} h={80} c="soil" sw={0} fill="pat:sand" />
        <Rect x={20} y={180} w={460} h={30} c="soil" sw={0} fill="pat:clay" />
        <Rect x={240} y={30} w={20} h={150} c="ink" sw={1.6} fill="paper" />
        <Path d="M 20 50 Q 200 54 240 80" c="water" w={2.2} />
        <Path d="M 480 50 Q 300 54 260 80" c="water" w={2.2} />
        <Text x={60} y={44} s={12} c="water">niveau piézométrique</Text>
        <Arrow x1={300} y1={101} x2={300} y2={179} c="txt" w={1.2} hs={5} both />
        <Text x={306} y={144} s={12}>b = 10 m</Text>
        <Text x={250} y={232} a="middle" s={12}>couche perméable confinée entre deux argiles</Text>
      </g>
    ),
    notes: ['En nappe captive, l’aquifère reste saturé : seule la pression baisse autour du puits.'],
    caption: 'Rabattement de 3 m avec un rayon d’influence de 90 m.',
  },
  {
    id: 'sichardt-rayon',
    title: 'Rayon d’influence d’un pompage',
    steps: ['formulas'],
    formula: ['R = 3\\,000\\,s\\,\\sqrt{K} = 3\\,000 \\times 4 \\times \\sqrt{5 \\times 10^{-4}} = 268\\ \\text{m}'],
    h: 230,
    draw: () => (
      <g>
        <Rect x={20} y={190} w={460} h={20} c="soil" sw={0} fill="pat:clay" />
        <Rect x={20} y={60} w={460} h={130} c="soil" sw={0} fill="pat:sand" o={0.5} />
        <Rect x={240} y={40} w={20} h={150} c="ink" sw={1.6} fill="paper" />
        <Path d="M 20 70 Q 180 74 240 120" c="water" w={2.4} />
        <Path d="M 480 70 Q 320 74 260 120" c="water" w={2.4} />
        <Line x1={20} y1={70} x2={480} y2={70} c="water" w={1} dash="4 4" />
        <Arrow x1={30} y1={50} x2={238} y2={50} c="red" w={1.4} hs={6} both />
        <Text x={134} y={44} a="middle" s={12} c="red" b>R ≈ 268 m</Text>
        <Arrow x1={270} y1={71} x2={270} y2={119} c="txt" w={1.2} hs={5} both />
        <Text x={276} y={100} s={12}>s = 4 m</Text>
      </g>
    ),
    notes: ['Le cône de rabattement s’étend d’autant plus loin que le sol est perméable et le rabattement grand : attention aux ouvrages voisins.'],
    caption: 'Cône de rabattement autour d’un puits en nappe libre.',
  },
  {
    id: 'essais-permeabilite',
    title: 'Mesurer la perméabilité',
    steps: ['theory'],
    h: 230,
    draw: () => (
      <g>
        {[[20, 'perméamètre', 'laboratoire'], [140, 'Lefranc', 'sols, en forage'], [260, 'Lugeon', 'roches, en forage'], [380, 'pompage d’essai', 'échelle de l’ouvrage']].map(([x, t, d], k) => (
          <g key={t}>
            <Rect x={x} y={40} w={100} h={110} rx={6} c={k === 3 ? 'green' : 'ink'} sw={1.6} fill={k === 3 ? '~green' : '~grey'} />
            <Rect x={x + 44} y={56} w={12} h={70} c="ink" sw={1.2} fill="paper" />
            {k > 0 && <Rect x={x + 44} y={110} w={12} h={16} c="water" sw={0} fill="water" />}
            <Text x={x + 50} y={170} a="middle" s={12} b>{t}</Text>
            <Text x={x + 50} y={188} a="middle" s={11} c="mute">{d}</Text>
          </g>
        ))}
      </g>
    ),
    notes: ['L’essai de pompage, plus coûteux, intègre l’hétérogénéité du terrain : c’est lui qui fiabilise le dimensionnement d’un rabattement.'],
    caption: 'Du petit échantillon à l’essai en grand.',
  },
  {
    id: 'parking-tourbe',
    title: 'Rabattement de 8 m et tassements chez les voisins',
    steps: ['real_examples'],
    formula: ['\\Delta\\sigma\'_v = \\gamma_w\\,\\Delta h = 10 \\times 8 = 80\\ \\text{kPa}'],
    h: 240,
    draw: () => (
      <g>
        <Rect x={20} y={60} w={460} h={160} c="soil" sw={0} fill="pat:sand" o={0.5} />
        <Rect x={60} y={130} w={120} h={20} c="soil" sw={0} fill="pat:clay" />
        <Text x={120} y={145} a="middle" s={11} b>tourbe</Text>
        <Rect x={60} y={30} w={100} h={30} c="ink" sw={1.6} fill="~grey" />
        <Path d="M 100 30 l 6 10 l -4 8 l 6 10" c="red" w={2} />
        <Rect x={300} y={60} w={160} h={110} c="ink" sw={2} fill="paper" />
        <Text x={380} y={110} a="middle" s={12} b>parking 4 niveaux</Text>
        <Line x1={20} y1={80} x2={300} y2={80} c="water" w={1.4} dash="4 4" />
        <Path d="M 20 84 Q 220 90 300 168" c="water" w={2.4} />
        <Text x={180} y={196} a="middle" s={12} c="red" b>tassements différentiels de plusieurs cm</Text>
      </g>
    ),
    notes: ['La suite des travaux s’est faite avec des parois étanches ancrées dans le substratum et une réinjection d’eau à l’extérieur.'],
    caption: 'Abaisser la nappe charge les sols compressibles : ils se consolident.',
  },
];
