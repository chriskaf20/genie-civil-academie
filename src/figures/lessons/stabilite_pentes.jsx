// Plates — Module 12 · Stabilité des pentes
import { Angle, Arrow, Circle, Dot, Line, Path, Plot, Poly, Rect, Text, fnPts } from '../../components/figures/kit.jsx';

const tan = d => Math.tan((d * Math.PI) / 180);
// Slip circle through the toe (150, 190) and the crest (340, 90), centre above the slope.
const O = [189.1, 33.8];
const R = 161;
const yArc = x => O[1] + Math.sqrt(R * R - (x - O[0]) ** 2);
const SLICES = [[150, 195, 1, '−5°'], [195, 240, 2, '15°'], [240, 290, 3, '35°'], [290, 340, 4, '55°']];
// Ground: crest at y = 90 (x ≥ 300), slope down to toe (150, 190), floor y = 190.
const ground = x => (x <= 150 ? 190 : x >= 300 ? 90 : 190 - ((x - 150) * 100) / 150);

export default [
  {
    id: 'pente-infinie',
    title: 'Pente infinie : glissement parallèle à la surface',
    steps: ['theory'],
    formula: ["F = \\frac{\\tan\\varphi'}{\\tan\\beta}", "F = \\frac{\\gamma'}{\\gamma_{sat}}\\,\\frac{\\tan\\varphi'}{\\tan\\beta} \\ \\ (\\text{écoulement parallèle})"],
    h: 270,
    draw: () => {
      const b = 30;
      const P = x => [x, 230 - (x - 30) * tan(b)];
      const c = (130 + 210) / 2;
      return (
        <g>
          <Poly pts={[P(30), P(420), [420, 250], [30, 250]]} c="soil" w={0} fill="pat:soil" o={0.5} close />
          <Line x1={30} y1={230} x2={420} y2={230 - 390 * tan(b)} c="ink" w={2.4} />
          <Line x1={30} y1={270} x2={420} y2={270 - 390 * tan(b)} c="red" w={1.8} dash="7 4" />
          <Poly pts={[P(130), P(210), [210, P(210)[1] + 40], [130, P(130)[1] + 40]]} c="ink" w={2.2} fill="~orange" close />
          <Arrow x1={c} y1={P(c)[1] + 20} x2={c} y2={P(c)[1] + 80} c="red" w={2.6} hs={9} />
          <Text x={c + 8} y={P(c)[1] + 82} s={14} c="red" b>W</Text>
          <Arrow x1={c} y1={P(c)[1] + 40} x2={c + 36 * Math.cos((b * Math.PI) / 180) * -1 + 0} y2={P(c)[1] + 40 + 36 * Math.sin((b * Math.PI) / 180)} c="green" w={2.2} hs={8} />
          <Text x={c - 70} y={P(c)[1] + 70} s={12} c="green" b>T (moteur)</Text>
          <Angle cx={30} cy={230} r={60} a1={-b} a2={0} label="β" c="ink" s={15} />
          <Text x={360} y={200} s={12} c="red">plan de glissement</Text>
          {[[300, 90], [360, 56], [420, 22]].map(([x, y]) => <Arrow key={x} x1={x} y1={y + 14} x2={x + 26} y2={y - 1} c="water" w={1.6} hs={6} />)}
          <Text x={300} y={30} s={12} c="water">écoulement // pente</Text>
        </g>
      );
    },
    notes: [
      'Sol sec : la pente tient tant que β < φ′ (F = 1 quand β = φ′).',
      'Avec un écoulement parallèle à la pente, la pression de l’eau divise la sécurité par deux environ.',
    ],
    caption: 'Tranche de sol sur un plan parallèle à la surface : poids, composante motrice, frottement résistant.',
  },
  {
    id: 'fellenius',
    title: 'Méthode des tranches de Fellenius',
    steps: ['formulas', 'stepbystep'],
    formula: ["F = \\frac{\\sum \\left[c'l + W\\cos\\alpha\\tan\\varphi'\\right]}{\\sum W\\sin\\alpha} = \\frac{99{,}0 + 676{,}4 \\times 0{,}466}{337{,}7} = 1{,}23"],
    h: 290,
    draw: () => (
      <g>
        <Poly pts={[[20, 190], [150, 190], [300, 90], [480, 90], [480, 270], [20, 270]]} c="soil" w={2.2} fill="pat:soil" o={0.5} close />
        <Path d={`M 150 ${yArc(150)} A ${R} ${R} 0 0 0 340 ${yArc(340)}`} c="red" w={2.6} />
        {SLICES.map(([a, b, n, al]) => (
          <g key={n}>
            <Poly pts={[[a, ground(a)], [b, ground(b)], [b, yArc(b)], [a, yArc(a)]]} c="ink" w={1.6} fill={n % 2 ? '~orange' : '~soil'} close />
            <Circle cx={(a + b) / 2} cy={(ground((a + b) / 2) + yArc((a + b) / 2)) / 2} r={10} c="red" sw={1.6} fill="paper" />
            <Text x={(a + b) / 2} y={(ground((a + b) / 2) + yArc((a + b) / 2)) / 2 + 5} a="middle" s={12} c="red" b halo={false}>{String(n)}</Text>
            <Text x={(a + b) / 2} y={yArc((a + b) / 2) + 22} a="middle" s={11}>{`α = ${al}`}</Text>
          </g>
        ))}
        <Dot x={O[0]} y={O[1]} r={4} />
        <Text x={O[0] + 8} y={O[1] + 4} s={12} b>O</Text>
        <Line x1={O[0]} y1={O[1]} x2={340} y2={yArc(340)} c="grey" w={1} dash="4 3" />
        <Text x={420} y={130} a="middle" s={12}>{"c′ = 10 kPa\nφ′ = 25°"}</Text>
        <Text x={420} y={230} a="middle" s={13} c="red" b>{'F = 1,23 < 1,5'}</Text>
      </g>
    ),
    notes: ['On répète le calcul pour de nombreux cercles : le cercle critique est celui qui donne le F le plus faible.'],
    caption: 'Quatre tranches au-dessus d’un cercle : chaque tranche apporte un effort moteur W sin α et une résistance.',
  },
  {
    id: 'abaque-beta',
    title: 'Sécurité d’un talus sableux selon sa pente',
    steps: ['simple_examples'],
    formula: ["\\beta_{max} = \\arctan\\frac{\\tan\\varphi'}{F} = \\arctan\\frac{\\tan 30°}{1{,}5} = 21°"],
    h: 290,
    draw: () => (
      <Plot x={70} y={30} w={380} h={200} xr={[0, 45]} yr={[0, 3]} yl="F"
        xt={[10, 21, 30, 40].map(v => [v, `${v}°`])} yt={[[0.62, '0,62'], [1, '1'], [1.21, '1,21'], [1.5, '1,5'], [3, '3']]} grid
      >
        {(sx, sy) => (
          <g>
            <Line x1={sx(0)} y1={sy(1)} x2={sx(45)} y2={sy(1)} c="red" w={1.4} dash="5 4" />
            <Poly pts={fnPts(b => Math.min(3, tan(35) / tan(b)), 13.2, 45, sx, sy, 80)} c="ink" w={2.6} />
            <Poly pts={fnPts(b => Math.min(3, 0.51 * tan(35) / tan(b)), 6.8, 45, sx, sy, 80)} c="water" w={2.6} dash="7 4" />
            <Poly pts={fnPts(b => Math.min(3, tan(30) / tan(b)), 10.9, 45, sx, sy, 80)} c="green" w={2.2} />
            <Dot x={sx(30)} y={sy(1.21)} r={5} />
            <Dot x={sx(30)} y={sy(0.62)} r={5} c="water" />
            <Dot x={sx(21)} y={sy(1.5)} r={5} c="green" />
            <Text x={sx(31)} y={sy(1.35)} s={12} b>{"sec, φ′ = 35°"}</Text>
            <Text x={sx(31)} y={sy(0.45)} s={12} c="water" b>avec écoulement</Text>
            <Text x={sx(22)} y={sy(1.75)} s={12} c="green" b>{"φ′ = 30° : β ≤ 21°"}</Text>
            <Text x={sx(44)} y={sy(2.8)} a="end" s={12} c="mute">pente β →</Text>
          </g>
        )}
      </Plot>
    ),
    notes: ['β = 30° et φ′ = 35° : F = 1,21 à sec, 0,62 avec écoulement. Pour F = 1,5 avec φ′ = 30°, la pente doit rester sous 21° (environ 2,6H/1V).'],
    caption: 'La sécurité d’une pente infinie chute vite avec l’inclinaison et avec l’eau.',
  },
  {
    id: 'versant-retenue',
    title: 'Glissement d’un versant dans une retenue',
    steps: ['real_examples'],
    h: 260,
    draw: () => (
      <g>
        <Poly pts={[[20, 40], [140, 50], [300, 150], [300, 250], [20, 250]]} c="ink" w={2} fill="pat:rock" close />
        <Poly pts={[[300, 150], [480, 150], [480, 250], [300, 250]]} c="ink" w={1.6} fill="pat:rock" close />
        <Rect x={300} y={110} w={180} h={40} c="water" sw={0} fill="~water" />
        <Line x1={300} y1={110} x2={480} y2={110} c="water" w={2} />
        <Path d="M 60 44 Q 120 190 300 160" c="red" w={2.6} />
        <Poly pts={[[60, 44], [140, 50], [300, 150], [300, 160]]} c="red" w={0} fill="~red" close />
        <Path d="M 70 70 Q 130 175 290 165" c="soil" w={1.6} dash="5 4" />
        <Text x={110} y={110} s={12} c="soil">couches argileuses</Text>
        <Arrow x1={150} y1={100} x2={230} y2={140} c="red" w={3} hs={11} />
        <Path d="M 330 108 Q 380 40 440 80" c="water" w={2.4} />
        <Arrow x1={432} y1={72} x2={446} y2={86} c="water" w={2.4} hs={8} />
        <Text x={440} y={40} a="middle" s={12} c="water" b>vague</Text>
        <Text x={390} y={140} a="middle" s={12} c="water" b>retenue</Text>
      </g>
    ),
    notes: ['La mise en eau a augmenté les pressions interstitielles dans le versant ; 270 millions de m³ ont glissé sur des couches argileuses inclinées vers la retenue, la vague a franchi le barrage.'],
    caption: 'Barrage-voûte de 262 m, 1963 : le barrage a tenu, le versant non.',
  },
  {
    id: 'deblai-solutions',
    title: 'Déblai de 8 m : atteindre F ≥ 1,5',
    steps: ['practical_case'],
    h: 270,
    draw: () => (
      <g>
        <Poly pts={[[20, 80], [120, 80], [360, 200], [480, 200], [480, 250], [20, 250]]} c="soil" w={0} fill="pat:soil" o={0.5} close />
        <Line x1={20} y1={80} x2={120} y2={80} c="ink" w={2} />
        <Line x1={360} y1={200} x2={480} y2={200} c="ink" w={2.4} />
        <Line x1={180} y1={80} x2={360} y2={200} c="red" w={2.2} dash="7 4" />
        <Line x1={120} y1={80} x2={360} y2={200} c="ink" w={2.6} />
        {[[180, 110], [240, 140], [300, 170]].map(([x, y]) => <Line key={x} x1={x} y1={y} x2={x - 70} y2={y + 14} c="water" w={2.2} />)}
        <Poly pts={[[300, 200], [360, 200], [324, 176]]} c="grey" w={1.6} fill="pat:gravel" close />
        <Line x1={20} y1={150} x2={340} y2={196} c="water" w={1.4} dash="5 4" />
        <Text x={224} y={74} s={12} c="red" b>3H/2V : F = 1,15</Text>
        <Text x={60} y={68} s={12} b>2H/1V : F ≈ 1,35</Text>
        <Text x={90} y={186} s={12} c="water" b>{'+ drains subhorizontaux : F ≈ 1,55'}</Text>
        <Text x={420} y={226} a="middle" s={12}>{'masque drainant\nen pied : F ≈ 1,5'}</Text>
        <Arrow x1={470} y1={81} x2={470} y2={199} c="txt" w={1.2} hs={5} both />
        <Text x={466} y={140} a="end" s={12}>8 m</Text>
      </g>
    ),
    notes: ['Adoucir la pente réduit les efforts moteurs ; drainer réduit les pressions interstitielles ; le masque en enrochements alourdit et draine le pied.'],
    caption: 'Limon argileux c′ = 8 kPa, φ′ = 26° : comparaison de trois solutions de conception.',
  },
];
