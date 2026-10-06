// Plates — Module 42 · Acoustique du bâtiment
import { Arrow, Bars, Circle, Line, Path, Person, Plot, Poly, Rect, Text, fnPts } from '../../components/figures/kit.jsx';

export default [
  {
    id: 'chemins-du-son',
    title: 'Transmission directe et transmissions latérales',
    steps: ['theory'],
    formula: ['D = L_1 - L_2'],
    h: 300,
    draw: () => (
      <g>
        <Rect x={20} y={40} w={460} h={16} c="grey" sw={1.6} fill="pat:concrete" bg="~grey" />
        <Rect x={20} y={244} w={460} h={16} c="grey" sw={1.6} fill="pat:concrete" bg="~grey" />
        <Rect x={240} y={56} w={20} h={188} c="grey" sw={1.8} fill="pat:concrete" bg="~grey" />
        <Text x={120} y={80} a="middle" s={14} b c="ink">local émetteur L₁</Text>
        <Text x={380} y={80} a="middle" s={14} b c="ink">local récepteur L₂</Text>
        {[0, 1, 2].map(i => <Path key={i} d={`M${130 + i * 18},${150 - i * 22} a${30 + i * 18},${30 + i * 18} 0 0 1 0,${60 + i * 44}`} c="red" w={1.6} />)}
        <Circle cx={110} cy={180} r={12} c="red" sw={2} fill="~red" />
        <Arrow x1={200} y1={180} x2={300} y2={180} c="red" w={3} hs={11} />
        <Text x={300} y={170} s={13} c="red">directe</Text>
        <Path d="M180,236 Q250,262 330,236" c="orange" w={2.2} dash="6 4" />
        <Arrow x1={320} y1={240} x2={334} y2={232} c="orange" w={2.2} hs={8} />
        <Path d="M180,64 Q250,38 330,64" c="orange" w={2.2} dash="6 4" />
        <Arrow x1={320} y1={60} x2={334} y2={68} c="orange" w={2.2} hs={8} />
        <Text x={250} y={290} a="middle" s={13} c="orange">latérales : par le plancher, le plafond et les façades</Text>
      </g>
    ),
    notes: ['L’isolement mesuré in situ inclut tous ces chemins : il est inférieur à l’indice de laboratoire de la paroi seule.'],
    caption: 'Le son passe par la paroi séparative et par les parois qui lui sont liées.',
  },
  {
    id: 'loi-de-masse',
    title: 'Loi de masse',
    steps: ['formulas'],
    formula: ['R \\approx 20 \\log_{10}(m\\, f) - 47'],
    h: 300,
    draw: () => (
      <Plot x={60} y={30} w={380} h={210} xr={[0, 600]} yr={[30, 70]} xl="m (kg/m²)" yl="R à 500 Hz (dB)"
        xt={[100, 200, 300, 400, 480, 600].map(v => [v, String(v)])} yt={[40, 50, 60].map(v => [v, String(v)])} grid
      >
        {(sx, sy) => (
          <g>
            <Poly pts={fnPts(m => 20 * Math.log10(m * 500) - 47, 20, 600, sx, sy, 80)} c="ink" w={3} />
            {[[100, 'cloison légère'], [200, 'brique'], [480, 'béton 20 cm']].map(([m, lab]) => {
              const R = 20 * Math.log10(m * 500) - 47;
              return (
                <g key={m}>
                  <Circle cx={sx(m)} cy={sy(R)} r={5} c="red" sw={2} fill="paper" />
                  <Text x={sx(m) + 8} y={sy(R) + 18} s={12} c="red">{`${lab} : ${R.toFixed(0)} dB`}</Text>
                </g>
              );
            })}
            <Text x={sx(250)} y={sy(66)} s={13} c="mute">doubler m : + 6 dB</Text>
          </g>
        )}
      </Plot>
    ),
    caption: 'Une paroi plus lourde vibre moins sous l’effet de la pression acoustique.',
  },
  {
    id: 'classe-sabine',
    title: 'Salle de classe : avant et après correction',
    steps: ['stepbystep'],
    formula: ['T = 0{,}16\\, \\frac{V}{A}'],
    h: 300,
    draw: () => (
      <g>
        <Poly pts={[[40, 230], [220, 230], [220, 90], [40, 90]]} c="ink" w={2.2} />
        <Rect x={40} y={84} w={180} h={8} c="grey" sw={1.4} fill="~grey" />
        <Text x={130} y={74} a="middle" s={13}>plafond béton α = 0,02</Text>
        <Path d="M60,120 L120,92 L180,226 L210,150 L150,92" c="red" w={1.6} dash="5 4" />
        <Person x={90} y={230} k={0.7} c="mute" />
        <Text x={130} y={260} a="middle" s={14} c="red">T = 3,2 s</Text>
        <Poly pts={[[280, 230], [460, 230], [460, 90], [280, 90]]} c="ink" w={2.2} />
        <Rect x={280} y={84} w={180} h={14} c="green" sw={1.4} fill="pat:insul" bg="~green" />
        <Text x={370} y={74} a="middle" s={13} c="green">plafond absorbant α = 0,80</Text>
        <Path d="M300,140 L340,100" c="red" w={1.6} dash="5 4" />
        <Person x={330} y={230} k={0.7} c="mute" />
        <Text x={370} y={260} a="middle" s={14} c="green">T = 0,47 s ✔</Text>
        <Text x={250} y={290} a="middle" s={12} c="mute">8,0 × 7,0 × 3,0 m = 168 m³ · objectif T ≤ 0,6 s</Text>
      </g>
    ),
    notes: ['Le son absorbé au plafond ne revient plus vers les élèves : la voix redevient intelligible.'],
    caption: 'L’aire d’absorption passe de 8,4 à 57 m².',
  },
  {
    id: 'chape-flottante',
    title: 'Chape flottante contre les bruits de chocs',
    steps: ['real_examples', 'practical_case'],
    h: 270,
    draw: () => (
      <g>
        <Rect x={60} y={170} w={380} h={50} c="grey" sw={1.8} fill="pat:concrete" bg="~grey" />
        <Rect x={60} y={156} w={380} h={14} c="orange" sw={1.4} fill="pat:insul" bg="~orange" />
        <Rect x={68} y={110} w={364} h={46} c="grey" sw={1.8} fill="pat:concrete" bg="~grey" />
        <Rect x={68} y={100} w={364} h={10} c="ink" sw={1.4} fill="~ink" />
        <Rect x={40} y={40} w={20} h={200} c="grey" sw={1.8} fill="pat:block" bg="~grey" />
        <Rect x={60} y={96} w={8} h={74} c="red" sw={1.4} fill="~red" />
        <Text x={460} y={108} s={12} c="ink">revêtement</Text>
        <Text x={460} y={136} s={12} c="grey">chape flottante</Text>
        <Text x={460} y={166} s={12} c="orange">sous-couche résiliente</Text>
        <Text x={460} y={198} s={12} c="grey">dalle porteuse</Text>
        <Text x={80} y={70} s={12} c="red">bande périphérique (désolidarisation)</Text>
        <Line x1={74} y1={74} x2={66} y2={96} c="red" w={1} />
        <Arrow x1={250} y1={40} x2={250} y2={96} c="red" w={2.6} />
        <Text x={258} y={50} s={13} c="red">choc</Text>
        <Text x={250} y={250} a="middle" s={13} c="green">L’nT,w : 68 dB → ≈ 50 dB (exigence ≤ 58 dB)</Text>
      </g>
    ),
    notes: ['La chape ne doit toucher ni les murs ni la dalle : un seul contact rigide crée un pont phonique.'],
    caption: 'Système masse-ressort-masse : la sous-couche résiliente découple la chape de la dalle.',
  },
  {
    id: 'addition-db',
    title: 'Les décibels ne s’additionnent pas',
    steps: ['simple_examples'],
    formula: ['L_{tot} = 10 \\log_{10}\\left(\\sum 10^{L_i/10}\\right)'],
    h: 250,
    draw: () => (
      <Bars x={70} y={40} w={360} h={160} max={80} ticks={[20, 40, 60, 80]} unit="dB" bars={[
        { label: '1 source', v: 60, c: 'grey', txt: '60' },
        { label: '2 sources', v: 63, c: 'ink', txt: '63' },
        { label: '4 sources', v: 66, c: 'ink', txt: '66' },
        { label: '10 sources', v: 70, c: 'red', txt: '70' },
      ]} />
    ),
    caption: 'Doubler le nombre de sources identiques ajoute 3 dB.',
  },
];
