// Plates — Module 11 · Géologie de l'ingénieur
import { Angle, Arrow, Line, Path, Poly, Rect, Text } from '../../components/figures/kit.jsx';

const sine = (y0, amp) => Array.from({ length: 41 }, (_, k) => [320 + 4 * k, y0 + amp * Math.sin((k / 40) * 2 * Math.PI)]);

// Cut slope with clay joints dipping 35° towards the road.
const face = y => 250 + 0.3125 * (y - 60);
const joint = x0 => {
  const x = (250 - 0.21875 * x0) / 0.78125;
  const y = 60 + 0.7 * (x - x0);
  return y <= 220 ? [[x0, 60], [x, y]] : [[x0, 60], [x0 + 160 / 0.7, 220]];
};

export default [
  {
    id: 'pendage',
    title: 'Direction, pendage, plis et failles',
    steps: ['theory'],
    h: 270,
    draw: () => (
      <g>
        <Poly pts={[[30, 110], [230, 110], [290, 60], [90, 60]]} c="ink" w={2} fill="~grey" close />
        <Poly pts={[[30, 110], [230, 110], [230, 230], [30, 230]]} c="ink" w={2} fill="paper" close />
        <Poly pts={[[230, 110], [290, 60], [290, 180], [230, 230]]} c="ink" w={2} fill="~grey" close />
        <Poly pts={[[100, 110], [160, 60], [210, 60], [150, 110]]} c="soil" w={1.6} fill="pat:hatch" close />
        <Poly pts={[[100, 110], [150, 110], [230, 156.2], [230, 185]]} c="soil" w={1.6} fill="pat:hatch" close />
        <Poly pts={[[230, 156.2], [290, 106.2], [290, 135], [230, 185]]} c="soil" w={1.6} fill="pat:hatch" close />
        <Line x1={118} y1={96} x2={148} y2={71} c="red" w={3} />
        <Line x1={133} y1={83.5} x2={150} y2={83.5} c="red" w={3} />
        <Text x={153} y={88} s={12} c="red" b>30</Text>
        <Arrow x1={256} y1={52} x2={280} y2={32} c="ink" w={1.6} hs={7} />
        <Text x={286} y={30} s={13} b>N</Text>
        <Angle cx={100} cy={110} r={36} a1={0} a2={30} label="α" c="red" s={14} />
        <Text x={60} y={252} s={12}>{'symbole : trait = direction,\npetit trait = sens du pendage'}</Text>
        <Text x={400} y={34} a="middle" s={13} b>plis</Text>
        {[0, 12, 24].map(d => <Poly key={d} pts={sine(70 + d, -16)} c="soil" w={2} />)}
        <Text x={360} y={46} a="middle" s={11} c="mute">anticlinal</Text>
        <Text x={440} y={124} a="middle" s={11} c="mute">synclinal</Text>
        <Text x={400} y={156} a="middle" s={13} b>faille normale</Text>
        {[0, 15, 30].map(d => (
          <g key={d}>
            <Line x1={320} y1={186 + d} x2={384 + d * 0.5} y2={186 + d} c="soil" w={2} />
            <Line x1={388 + (d + 22) * 0.5} y1={208 + d} x2={480} y2={208 + d} c="soil" w={2} />
          </g>
        ))}
        <Line x1={378} y1={170} x2={420} y2={254} c="red" w={2.6} />
        <Arrow x1={414} y1={214} x2={420} y2={226} c="red" w={1.8} hs={6} />
        <Arrow x1={384} y1={206} x2={378} y2={194} c="red" w={1.8} hs={6} />
      </g>
    ),
    notes: [
      'Une couche se décrit par sa direction (horizontale dans le plan de la couche) et son pendage α (plus grande pente).',
      'Les plis et les failles découpent le massif : ils guident les eaux et les ruptures.',
    ],
    caption: 'Bloc-diagramme d’une couche plongeant de 30° vers l’est ; plis et faille normale en coupe.',
  },
  {
    id: 'pendage-apparent',
    title: 'Pendage apparent et épaisseur vraie',
    steps: ['formulas', 'stepbystep'],
    formula: ["\\tan\\alpha' = \\tan\\alpha \\cdot \\sin\\beta \\Rightarrow \\alpha' = 20{,}4°", 'e = w \\sin\\alpha = 50 \\times \\sin 30° = 25\\ \\text{m}'],
    h: 290,
    draw: () => (
      <g>
        <Text x={130} y={30} a="middle" s={13} b>plan</Text>
        <Rect x={90} y={40} w={100} h={220} c="soil" sw={0} fill="pat:hatch" />
        <Line x1={90} y1={40} x2={90} y2={260} c="soil" w={2} />
        <Line x1={190} y1={40} x2={190} y2={260} c="soil" w={2} />
        <Arrow x1={30} y1={110} x2={30} y2={50} c="ink" w={1.6} hs={7} />
        <Text x={30} y={44} a="middle" s={13} b>N</Text>
        <Line x1={46} y1={250} x2={213} y2={51} c="red" w={3} />
        <Angle cx={130} cy={150} r={34} a1={-90} a2={-50} label="β" c="red" s={14} />
        <Line x1={130} y1={150} x2={130} y2={100} c="grey" w={1} dash="4 3" />
        <Text x={214} y={66} s={12} c="red" b>déblai</Text>
        <Arrow x1={91} y1={272} x2={189} y2={272} c="txt" w={1.2} hs={5} both />
        <Text x={140} y={286} a="middle" s={12}>w = 50 m</Text>
        <Text x={375} y={30} a="middle" s={13} b>coupe E-O</Text>
        <Line x1={260} y1={80} x2={485} y2={80} c="soil" w={2} />
        <Poly pts={[[300, 80], [400, 80], [480, 126.2], [480, 183.9]]} c="soil" w={2} fill="pat:hatch" close />
        <Angle cx={300} cy={80} r={40} a1={0} a2={30} label="α = 30°" c="red" s={13} lr={30} />
        <Line x1={400} y1={80} x2={375} y2={123.3} c="green" w={2.6} />
        <Text x={392} y={124} s={13} c="green" b>e = 25 m</Text>
        <Arrow x1={301} y1={66} x2={399} y2={66} c="txt" w={1.2} hs={5} both />
        <Text x={350} y={60} a="middle" s={12}>w</Text>
        <Text x={375} y={214} a="middle" s={12}>{"dans le talus, recoupé à β = 40° :"}</Text>
        <Text x={375} y={236} a="middle" s={13} c="red" b>{"α' = 20,4° < α :\nla couche paraît moins inclinée"}</Text>
      </g>
    ),
    notes: ['Une coupe oblique à la direction ne montre qu’un pendage apparent ; seule la coupe perpendiculaire montre le vrai pendage.'],
    caption: 'Plan et coupe d’une couche de calcaire recoupée par un déblai routier.',
  },
  {
    id: 'appui-barrage',
    title: 'Rupture d’un appui de barrage-voûte',
    steps: ['real_examples'],
    h: 270,
    draw: () => (
      <g>
        <Poly pts={[[20, 60], [200, 60], [480, 250], [20, 250]]} c="ink" w={2} fill="pat:rock" close />
        <Poly pts={[[200, 60], [300, 60], [480, 180], [480, 250]]} c="water" w={1.6} fill="~water" close />
        <Text x={420} y={170} a="middle" s={12} c="water" b>retenue</Text>
        <Rect x={196} y={30} w={34} h={60} c="ink" sw={2.2} fill="~ink" />
        <Text x={212} y={24} a="middle" s={12} b>voûte</Text>
        <Arrow x1={180} y1={70} x2={130} y2={92} c="ink" w={2.6} hs={10} />
        <Text x={128} y={64} a="end" s={12}>poussée de la voûte</Text>
        <Line x1={70} y1={60} x2={250} y2={250} c="red" w={3} />
        <Text x={250} y={240} a="end" s={12} c="red" b>faille</Text>
        <Line x1={40} y1={175} x2={200} y2={145} c="orange" w={3} />
        <Text x={44} y={196} s={12} c="orange" b>discontinuité</Text>
        <Poly pts={[[70, 60], [196, 60], [178, 174], [118, 160]]} c="red" w={0} fill="~red" close />
        <Text x={124} y={124} a="middle" s={12} c="red" b>dièdre</Text>
        {[[150, 186], [178, 196], [206, 206]].map(([x, y]) => <Arrow key={x} x1={x + 20} y1={y + 20} x2={x} y2={y} c="water" w={2} hs={7} />)}
        <Text x={232} y={226} s={12} c="water">sous-pressions</Text>
      </g>
    ),
    notes: ['La faille, peu perméable, retenait l’eau sous pression derrière elle ; les sous-pressions ont soulevé le dièdre qui portait l’appui de la voûte.'],
    caption: 'Barrage-voûte de 66 m près de Fréjus : une faille et une discontinuité découpaient un dièdre sous l’appui gauche.',
  },
  {
    id: 'talus-bancs',
    title: 'Talus rocheux : glissement banc sur banc',
    steps: ['practical_case'],
    formula: ['F_s = \\frac{\\tan\\varphi}{\\tan\\alpha} = \\frac{\\tan 25°}{\\tan 35°} = 0{,}67 < 1'],
    h: 280,
    draw: () => (
      <g>
        <Poly pts={[[20, 60], [250, 60], [300, 220], [480, 220], [480, 250], [20, 250]]} c="ink" w={2.2} fill="pat:rock" close />
        {[40, 100, 160, 200].map(x0 => {
          const [[a, b], [c, d]] = joint(x0);
          return <Line key={x0} x1={a} y1={b} x2={c} y2={d} c="soil" w={2} />;
        })}
        <Poly pts={[[160, 60], [250, 60], [275.2, 140.6]]} c="orange" w={2.2} fill="~orange" close />
        <Arrow x1={228} y1={87} x2={228} y2={137} c="red" w={2.6} hs={9} />
        <Text x={236} y={128} s={14} c="red" b>W</Text>
        <Arrow x1={262} y1={122} x2={300} y2={148} c="red" w={2} hs={8} dash="5 3" />
        <Angle cx={160} cy={60} r={40} a1={0} a2={35} label="35°" c="red" s={13} lr={22} />
        <Text x={92} y={150} a="middle" s={12} c="soil" b>{'joints argileux\nφ = 25°'}</Text>
        <Line x1={300} y1={220} x2={480} y2={220} c="ink" w={2.4} />
        <Text x={400} y={212} a="middle" s={12} b>route</Text>
        <Arrow x1={330} y1={61} x2={330} y2={219} c="txt" w={1.2} hs={5} both />
        <Text x={336} y={144} s={12}>12 m</Text>
        <Text x={250} y={272} a="middle" s={12} c="mute">{"remèdes : talus à 35°, ancrages passifs, drainage des joints"}</Text>
      </g>
    ),
    notes: ['Le joint plonge plus que son angle de frottement et « débouche » dans le talus : le bloc peut glisser sans aucune autre rupture.'],
    caption: 'Déblai de 12 m dans des bancs calcaires plongeant vers la route.',
  },
];
