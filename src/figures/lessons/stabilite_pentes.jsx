// Plates — Module 12 · Stabilité des pentes
import { Angle, Arrow, Circle, Dot, Line, Path, Plot, Poly, Rect, Text, fnPts } from '../../components/figures/kit.jsx';
import { Flow, flowHeight } from '../../components/figures/kit.jsx';

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
  {
    id: 'mohr-coulomb',
    title: 'Critère de Mohr-Coulomb',
    steps: ['theory', 'formulas'],
    formula: ['\\tau_f = c\' + \\sigma\' \\tan\\varphi\''],
    h: 270,
    draw: () => (
      <Plot x={70} y={40} w={360} h={180} xr={[0, 200]} yr={[0, 100]} yl="τ"
        xt={[[50, '50'], [100, '100'], [150, '150']]} yt={[[50, '50'], [100, '100']]}
      >
        {(sx, sy) => (
          <g>
            <Line x1={sx(0)} y1={sy(10)} x2={sx(195)} y2={sy(10 + 0.466 * 195)} c="red" w={2.6} />
            <Path d={`M ${sx(48.7)} ${sy(0)} A 92.3 92.3 0 0 1 ${sx(151.3)} ${sy(0)}`} c="ink" w={2} />
            <Dot x={sx(78.3)} y={sy(46.5)} r={5} c="red" />
            <Text x={sx(78.3) - 8} y={sy(46.5) - 8} a="end" s={12} c="red" b>rupture</Text>
            <Line x1={sx(0)} y1={sy(10)} x2={sx(60)} y2={sy(10)} c="grey" w={1.2} dash="4 3" />
            <Angle cx={sx(0)} cy={sy(10)} r={52} a1={-25} a2={0} label="φ'" s={13} />
            <Text x={sx(0) + 6} y={sy(10) + 18} s={12} c="red" b>c'</Text>
            <Text x={sx(200)} y={sy(0) + 18} a="end" s={12}>σ' (kPa)</Text>
          </g>
        )}
      </Plot>
    ),
    notes: ['Un état de contrainte dont le cercle de Mohr touche la droite intrinsèque est un état de rupture ; c\' = 10 kPa et φ\' = 25° ici.'],
    caption: 'Droite intrinsèque et cercle tangent.',
  },
  {
    id: 'tranche-forces',
    title: 'Efforts sur une tranche (Fellenius)',
    steps: ['formulas'],
    h: 230,
    draw: () => (
      <g>
        <Poly pts={[[200, 60], [300, 40], [300, 130], [200, 170]]} c="ink" w={2} fill="~soil" close />
        <Arrow x1={250} y1={66} x2={250} y2={128} c="ink" w={2.4} hs={8} />
        <Text x={258} y={100} s={13} b>W</Text>
        <Arrow x1={267} y1={208} x2={246} y2={155} c="green" w={2.4} hs={8} />
        <Text x={274} y={214} s={13} c="green" b>N</Text>
        <Arrow x1={268} y1={143} x2={298} y2={131} c="red" w={2.4} hs={8} />
        <Text x={296} y={154} s={13} c="red" b>T</Text>
        <Line x1={200} y1={170} x2={260} y2={170} c="grey" w={1.2} dash="4 3" />
        <Angle cx={200} cy={170} r={24} a1={-21.8} a2={0} label="α" s={13} lr={10} />
        <Text x={330} y={80} s={12}>moteur : W sin α</Text>
        <Text x={330} y={104} s={12}>{"résistant : c'l + N' tan φ'"}</Text>
        <Text x={330} y={128} s={12} c="water">{"N' = W cos α − u l"}</Text>
      </g>
    ),
    notes: ['Fellenius néglige les efforts entre tranches ; Bishop les prend en compte et donne un F un peu plus élevé.'],
    caption: 'Tranche de largeur b, base de longueur l inclinée de α.',
  },
  {
    id: 'talus-sec',
    title: 'Talus sableux sec : β = 30°, φ\' = 35°',
    steps: ['simple_examples'],
    formula: ['F = \\frac{\\tan 35°}{\\tan 30°} = \\frac{0{,}700}{0{,}577} = 1{,}21'],
    h: 230,
    draw: () => (
      <g>
        <Poly pts={[[60, 200], [320, 50], [460, 50], [460, 200]]} c="ink" w={2} fill="pat:sand" close />
        <Line x1={20} y1={200} x2={60} y2={200} c="ink" w={2} />
        <Line x1={60} y1={200} x2={180} y2={200} c="grey" w={1.2} dash="4 3" />
        <Line x1={60} y1={200} x2={250} y2={67} c="red" w={1.6} dash="6 4" />
        <Angle cx={60} cy={200} r={70} a1={-30} a2={0} label="β" s={13} c="ink" />
        <Angle cx={60} cy={200} r={110} a1={-35} a2={-30} label="φ'" s={13} />
        <Text x={190} y={70} a="end" s={12} c="red">pente limite</Text>
        <Text x={300} y={160} a="middle" s={13} c="red" b>F = 1,21 &lt; 1,5</Text>
      </g>
    ),
    notes: ['Sans cohésion, la sécurité ne dépend que du rapport des tangentes, pas de la hauteur du talus.'],
    caption: 'Sol sec et sans cohésion : pente infinie.',
  },
  {
    id: 'ecoulement-pente',
    title: 'Même talus avec écoulement parallèle',
    steps: ['simple_examples', 'formulas'],
    formula: ['F = \\frac{\\gamma\'}{\\gamma_{sat}} \\cdot \\frac{\\tan\\varphi\'}{\\tan\\beta} = \\frac{10{,}2}{20} \\times 1{,}21 = 0{,}62'],
    h: 230,
    draw: () => (
      <g>
        <Poly pts={[[60, 200], [320, 50], [460, 50], [460, 200]]} c="ink" w={2} fill="pat:sand" close />
        <Line x1={20} y1={200} x2={60} y2={200} c="ink" w={2} />
        <Line x1={64} y1={196} x2={320} y2={48} c="water" w={2.4} dash="6 3" />
        {[[300, 90], [240, 125], [180, 160], [360, 100], [300, 135]].map(([x, y]) => <Arrow key={x + y} x1={x} y1={y} x2={x - 52} y2={y + 30} c="water" w={2} hs={7} />)}
        <Text x={20} y={220} s={12} c="water">suintement</Text>
        <Text x={330} y={176} a="middle" s={13} c="red" b>F = 0,62 : glissement</Text>
      </g>
    ),
    notes: ['L’écoulement réduit la contrainte effective et pousse les grains vers l’aval : la sécurité est environ divisée par deux.'],
    caption: 'Nappe affleurante, écoulement parallèle à la surface.',
  },
  {
    id: 'pente-admissible',
    title: 'Pente admissible pour F = 1,5',
    steps: ['simple_examples'],
    formula: ['\\tan\\beta \\le \\frac{\\tan 30°}{1{,}5} = 0{,}385 \\Rightarrow \\beta \\le 21°'],
    h: 230,
    draw: () => (
      <g>
        <Poly pts={[[100, 190], [282, 120], [460, 120], [460, 190]]} c="ink" w={2} fill="pat:sand" close />
        <Line x1={100} y1={190} x2={205} y2={120} c="red" w={1.6} dash="6 4" />
        <Text x={150} y={110} a="end" s={12} c="red">3H/2V : trop raide</Text>
        <Line x1={100} y1={190} x2={200} y2={190} c="grey" w={1.2} dash="4 3" />
        <Angle cx={100} cy={190} r={80} a1={-21} a2={0} label="21°" s={12} c="ink" />
        <Arrow x1={101} y1={206} x2={281} y2={206} c="txt" w={1.2} hs={6} both />
        <Text x={190} y={222} a="middle" s={12}>2,6</Text>
        <Arrow x1={300} y1={121} x2={300} y2={189} c="txt" w={1.2} hs={6} both />
        <Text x={308} y={160} s={12}>1</Text>
        <Text x={380} y={100} a="middle" s={13} c="green" b>2,6H/1V</Text>
      </g>
    ),
    notes: ['La règle pratique 2,5 à 3 pour 1 des talus en sable vient directement de ce calcul.'],
    caption: 'Sol sec, φ\' = 30°, sans cohésion.',
  },
  {
    id: 'court-long-terme',
    title: 'Court terme ou long terme : lequel est critique ?',
    steps: ['theory'],
    h: 275,
    draw: () => (
      <g>
        <Plot x={70} y={30} w={380} h={170} xr={[0, 10]} yr={[1, 1.8]} yl="F" yt={[[1.2, '1,2'], [1.5, '1,5'], [1.8, '1,8']]}>
          {(sx, sy) => (
            <g>
              <Poly pts={fnPts(t => 1.2 + 0.4 * Math.exp(-t / 2.5), 0, 10, sx, sy, 40)} c="red" w={2.6} />
              <Poly pts={fnPts(t => 1.6 - 0.4 * Math.exp(-t / 2.5), 0, 10, sx, sy, 40)} c="green" w={2.6} />
              <Text x={sx(9.6)} y={sy(1.26)} a="end" s={12} c="red" b>déblai</Text>
              <Text x={sx(9.6)} y={sy(1.66)} a="end" s={12} c="green" b>remblai</Text>
              <Text x={sx(10)} y={sy(1) + 16} a="end" s={12}>temps →</Text>
            </g>
          )}
        </Plot>
        <Text x={250} y={240} a="middle" s={11}>{"déblai : long terme critique (c', φ', u)"}</Text>
        <Text x={250} y={258} a="middle" s={11}>{'remblai sur argile molle : court terme critique (c_{u})'}</Text>
      </g>
    ),
    notes: ['Un déblai dans l’argile se dégrade lentement quand les pressions d’eau se rétablissent ; un remblai, au contraire, gagne en sécurité en se consolidant.'],
    caption: 'Évolution du coefficient de sécurité après les travaux.',
  },
  {
    id: 'confortements',
    title: 'Conforter un talus',
    steps: ['theory'],
    h: 200,
    draw: () => (
      <g>
        {['drainage', 'reprofilage', 'butée de pied', 'clouage', 'végétalisation'].map((t, i) => {
          const x = 10 + i * 97;
          return (
            <g key={t}>
              <Poly pts={[[x, 150], [x + 25, 150], [x + 65, 80], [x + 90, 80], [x + 90, 160], [x, 160]]} c="ink" w={1.6} fill="pat:soil" close />
              {i === 0 && [100, 125].map(y => <Line key={y} x1={x + 45 + (y - 100) * -0.3} y1={y + 15} x2={x + 88} y2={y + 4} c="water" w={2.4} />)}
              {i === 1 && <Line x1={x + 10} y1={150} x2={x + 75} y2={80} c="green" w={2} dash="5 3" />}
              {i === 2 && <Poly pts={[[x + 8, 150], [x + 34, 150], [x + 42, 128], [x + 8, 128]]} c="ink" w={1.4} fill="pat:gravel" close />}
              {i === 3 && [100, 120, 140].map(y => <Line key={y} x1={x + 25 + (150 - y) * 0.57} y1={y} x2={x + 80} y2={y + 12} c="red" w={2} />)}
              {i === 4 && [0.2, 0.45, 0.7].map(f => <Path key={f} d={`M ${x + 25 + f * 40} ${150 - f * 70} l -4 -8 M ${x + 25 + f * 40} ${150 - f * 70} l 4 -9`} c="green" w={1.8} />)}
              <Text x={x + 45} y={184} a="middle" s={11} b>{t}</Text>
            </g>
          );
        })}
      </g>
    ),
    notes: ['Le drainage est souvent le plus efficace et le moins cher : abaisser la nappe augmente directement la contrainte effective.'],
    caption: 'Cinq familles de solutions, souvent combinées.',
  },
  {
    id: 'demarche-talus',
    title: 'Étude de stabilité d’un talus',
    steps: ['diagrams'],
    h: flowHeight(['Géométrie : hauteur, pente, couches', "Paramètres : γ, c', φ' ou c_{u}", 'Hydraulique : nappe, écoulement, u', 'Mécanisme : plan, cercle, surface quelconque', 'Calcul : Fellenius, Bishop, logiciel', 'Confortement si F < 1,5'], { cols: 3 }),
    draw: () => <Flow items={['Géométrie : hauteur, pente, couches', "Paramètres : γ, c', φ' ou c_{u}", 'Hydraulique : nappe, écoulement, u', 'Mécanisme : plan, cercle, surface quelconque', 'Calcul : Fellenius, Bishop, logiciel', 'Confortement si F < 1,5']} cols={3} />,
    notes: ['On cherche le cercle le plus défavorable : un seul calcul ne suffit jamais.'],
    caption: 'De la géométrie au confortement.',
  },
];
