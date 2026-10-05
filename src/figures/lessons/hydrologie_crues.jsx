// Plates — Module 37 · Crues et statistiques
import { Box, Dot, Line, Path, Plot, Poly, Rect, Text, WaterLevel, Dim } from '../../components/figures/ink.jsx';

const MEAN = 120;
const SIGMA = 40;
const ALPHA = 0.7797 * SIGMA;
const MU = MEAN - 0.5772 * ALPHA;
const gumbel = u => MU + ALPHA * u;
const uOfT = T => -Math.log(-Math.log(1 - 1 / T));
// 20 annual maxima placed at their Weibull plotting positions, with a little scatter.
const SCATTER = [-6, 4, -3, 7, -5, 2, -8, 5, 1, -4, 6, -2, 3, -7, 8, -3, 4, -9, 10, -6];
const SAMPLE = SCATTER.map((d, i) => {
  const u = -Math.log(-Math.log((i + 1) / 21));
  return [u, gumbel(u) + d];
});

export default [
  {
    id: 'ajustement-gumbel',
    title: 'Ajustement de Gumbel',
    steps: ['theory'],
    formula: ['Q_T = \\bar{Q} + K_T\\,\\sigma', 'u = -\\ln\\!\\left(-\\ln\\left(1 - \\tfrac{1}{T}\\right)\\right)'],
    h: 330,
    draw: () => (
      <Plot
        x={62} y={30} w={390} h={240} xr={[-2, 5]} yr={[40, 280]}
        xl="u" yl="Q (m³/s)"
        xt={[[-1, '−1'], [0, '0'], [1, '1'], [2, '2'], [3, '3'], [4, '4'], [5, '5']]}
        yt={[[80, '80'], [120, '120'], [160, '160'], [200, '200'], [240, '240']]}
        grid
      >
        {(sx, sy) => (
          <g>
            {[2, 10, 50, 100].map(T => (
              <g key={T}>
                <Line x1={sx(uOfT(T))} y1={sy(40)} x2={sx(uOfT(T))} y2={sy(280)} c="violet" w={1} dash="3 5" />
                <Text x={sx(uOfT(T)) - 5} y={sy(46)} rot={-90} s={12} c="violet">{`T = ${T} ans`}</Text>
              </g>
            ))}
            <Line x1={sx(-1.8)} y1={sy(gumbel(-1.8))} x2={sx(5)} y2={sy(gumbel(5))} c="red" w={2.6} />
            {SAMPLE.map(([u, q]) => <Dot key={u} x={sx(u)} y={sy(q)} r={4} c="ink" />)}
            <Dot x={sx(uOfT(10))} y={sy(gumbel(uOfT(10)))} r={6} c="red" ring />
            <Dot x={sx(uOfT(100))} y={sy(gumbel(uOfT(100)))} r={6} c="red" ring />
            <Text x={sx(uOfT(10)) + 10} y={sy(gumbel(uOfT(10))) + 18} s={14} c="red">Q₁₀ = 172</Text>
            <Text x={sx(uOfT(100)) - 10} y={sy(gumbel(uOfT(100))) + 24} a="end" s={14} c="red">Q₁₀₀ = 246</Text>
            <Text x={sx(0.15)} y={sy(268)} s={13} c="ink">● maxima annuels observés (20 ans)</Text>
            <Text x={sx(0.15)} y={sy(250)} s={13} c="red">— droite de Gumbel ajustée</Text>
          </g>
        )}
      </Plot>
    ),
    notes: [
      'En variable réduite u, la loi de Gumbel est une droite : on y lit directement $Q_T$.',
      'Au-delà de la dernière observation, la droite est une extrapolation : l’incertitude grandit.',
    ],
    caption: 'Série de 20 maxima annuels (moyenne 120 m³/s, écart type 40 m³/s) et droite ajustée.',
  },
  {
    id: 'lit-riviere',
    title: 'Lit mineur et lit majeur',
    steps: ['formulas'],
    formula: ['Q = \\frac{1}{n} A\\, R_h^{2/3} \\sqrt{S}', 'R_h = \\frac{A}{P}'],
    h: 290,
    draw: () => {
      const bed = [[20, 120], [140, 120], [160, 128], [190, 210], [310, 210], [340, 128], [360, 120], [480, 120]];
      return (
        <g>
          <Poly pts={[...bed, [480, 250], [20, 250]]} c="soil" w={0} fill="pat:soil" bg="~soil" />
          <Poly pts={[[20, 100], [480, 100], [480, 120], [360, 120], [340, 128], [310, 210], [190, 210], [160, 128], [140, 120], [20, 120]]} c="water" w={0} fill="~water" />
          <Poly pts={[[167, 148], [333, 148], [310, 210], [190, 210]]} c="water" w={0} fill="pat:water" />
          <Poly pts={bed} c="soil" w={2.4} />
          <Poly pts={[[167, 148], [190, 210], [310, 210], [333, 148]]} c="red" w={3} />
          <WaterLevel x={60} y={100} x1={20} x2={480} label="crue décennale : débordement" s={12} />
          <Line x1={160} y1={148} x2={340} y2={148} c="water" w={1.4} dash="5 4" />
          <Text x={250} y={142} a="middle" s={12} c="water">plein bord</Text>
          <Text x={250} y={185} a="middle" s={15} c="ink">A</Text>
          <Text x={320} y={232} s={14} c="red">P (périmètre mouillé)</Text>
          <Text x={70} y={142} a="middle" s={13} c="soil">lit majeur</Text>
          <Text x={430} y={142} a="middle" s={13} c="soil">lit majeur</Text>
          <Text x={250} y={244} a="middle" s={13} c="soil">lit mineur</Text>
          <Dim x1={190} y1={262} x2={310} y2={262} label="b = 10 m" s={13} side={-1} />
          <Dim x1={360} y1={210} x2={360} y2={148} label="h = 3 m" s={13} side={-1} />
        </g>
      );
    },
    notes: [
      'Lit mineur plein : environ 41 m³/s — bien moins que Q₁₀ = 172 m³/s.',
      'Au-delà, l’eau occupe le lit majeur : le pont doit être étudié avec un modèle incluant les plaines.',
    ],
    caption: 'Section mouillée A, périmètre mouillé P et rayon hydraulique R_h = A/P.',
  },
  {
    id: 'debit-de-projet',
    title: 'Choisir le débit de projet',
    steps: ['practical_case'],
    h: 290,
    draw: () => (
      <Plot x={70} y={30} w={360} h={210} xr={[0, 4]} yr={[0, 520]} yl="Q (m³/s)"
        yt={[[100, '100'], [200, '200'], [300, '300'], [400, '400'], [500, '500']]} grid
      >
        {(sx, sy) => (
          <g>
            {[
              [0.6, 210, 'moyenne', 'grey'],
              [1.6, 414, 'Q₁₀₀ Gumbel', 'ink'],
              [2.6, 480, 'crue de 1930', 'orange'],
            ].map(([x, q, lab, c]) => (
              <g key={lab}>
                <Rect x={sx(x)} y={sy(q)} w={sx(x + 0.7) - sx(x)} h={sy(0) - sy(q)} c={c} sw={2} fill={`~${c}`} />
                <Text x={sx(x + 0.35)} y={sy(q) - 6} a="middle" s={14} c={c}>{String(q)}</Text>
                <Text x={sx(x + 0.35)} y={sy(0) + 18} a="middle" s={13} c="txt">{lab}</Text>
              </g>
            ))}
            <Line x1={sx(0.2)} y1={sy(480)} x2={sx(3.8)} y2={sy(480)} c="red" w={2} dash="7 5" />
            <Text x={sx(3.8)} y={sy(480) - 8} a="end" s={14} c="red">débit de projet retenu : 480</Text>
          </g>
        )}
      </Plot>
    ),
    notes: ['La crue historique dépasse l’estimation statistique : c’est elle qui est retenue.'],
    caption: 'Comparaison de l’estimation statistique et de la plus forte crue connue.',
  },
  {
    id: 'demarche-crue',
    title: 'Démarche : du jaugeage au débit de projet',
    steps: ['diagrams'],
    h: 300,
    draw: () => (
      <g>
        <Box x={14} y={20} w={150} h={112} label="" c="ink" fill="~ink" />
        <Rect x={44} y={40} w={8} h={70} c="ink" sw={1.4} fill="paper" />
        {[0, 1, 2, 3, 4, 5, 6].map(i => <Line key={i} x1={44} y1={46 + i * 10} x2={i % 2 ? 49 : 52} y2={46 + i * 10} c="ink" w={1} />)}
        <Path d="M30,92 q10,-6 20,0 t20,0 t20,0 t20,0 t20,0" c="water" w={2} />
        <Text x={89} y={124} a="middle" s={13}>1. stations et archives</Text>

        <Box x={175} y={20} w={150} h={112} label="" c="ink" fill="~ink" />
        {[30, 55, 40, 75, 48, 62, 35, 90, 52].map((h, i) => <Rect key={i} x={190 + i * 14} y={105 - h} w={9} h={h} c="ink" sw={1.2} fill="~ink" />)}
        <Text x={250} y={124} a="middle" s={13}>2. maxima annuels</Text>

        <Box x={336} y={20} w={150} h={112} label="" c="ink" fill="~ink" />
        <Line x1={352} y1={104} x2={470} y2={42} c="red" w={2.2} />
        {[[362, 98], [378, 92], [392, 82], [408, 78], [420, 68], [440, 60]].map(([x, y]) => <Dot key={x} x={x} y={y} r={3} />)}
        <Text x={411} y={124} a="middle" s={13}>3. ajustement (Gumbel)</Text>

        <Box x={336} y={166} w={150} h={112} label="" c="ink" fill="~ink" />
        <Line x1={352} y1={252} x2={470} y2={186} c="red" w={2.2} dash="6 4" />
        <Dot x={462} y={190} r={5} c="red" ring />
        <Text x={411} y={270} a="middle" s={13}>4. extrapolation T = 100</Text>

        <Box x={175} y={166} w={150} h={112} label="" c="ink" fill="~ink" />
        <Rect x={215} y={178} w={70} h={66} c="grey" sw={1.4} fill="pat:block" bg="~grey" />
        <Line x1={208} y1={200} x2={292} y2={200} c="red" w={2} />
        <Text x={250} y={196} a="middle" s={11} c="red">1910</Text>
        <Text x={250} y={270} a="middle" s={13}>5. crues historiques</Text>

        <Box x={14} y={166} w={150} h={112} label="" c="green" fill="~green" />
        <Text x={89} y={226} a="middle" s={26} c="green">Q projet ✔</Text>
        <Text x={89} y={270} a="middle" s={13}>6. débit retenu justifié</Text>

        <Path d="M164,76 H175 M325,76 H336 M411,132 V166 M336,222 H325 M175,222 H164" c="ink" w={2} />
      </g>
    ),
    caption: 'Les six étapes de l’estimation d’un débit de crue de projet.',
  },
];
