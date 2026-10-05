// Plates — Module 6 · Dynamique des fluides : continuité, Bernoulli, pertes de charge
import { Arrow, Circle, Dim, Dot, Ground, Line, Path, Poly, Rect, Text, WaterLevel, Box } from '../../components/figures/kit.jsx';

export default [
  {
    id: 'venturi',
    title: 'Continuité et Bernoulli dans un rétrécissement',
    steps: ['theory'],
    formula: ['v_1 A_1 = v_2 A_2', 'z + \\frac{p}{\\rho g} + \\frac{v^2}{2g} = \\text{cte}'],
    h: 300,
    draw: () => (
      <g>
        <Path d="M20,160 H170 C210,160 220,190 260,190 H300 C340,190 350,160 390,160 H480" c="ink" w={2.6} />
        <Path d="M20,260 H170 C210,260 220,230 260,230 H300 C340,230 350,260 390,260 H480" c="ink" w={2.6} />
        <Rect x={20} y={160} w={460} h={100} c="water" sw={0} fill="~water" o={0.7} />
        {[[95, 60, 'p₁ / ρg'], [280, 110, 'p₂ / ρg']].map(([x, top, lab]) => (
          <g key={x}>
            <Rect x={x - 8} y={top - 20} w={16} h={(x < 200 ? 160 : 190) - top + 20} c="ink" sw={1.6} />
            <Rect x={x - 6} y={top} w={12} h={(x < 200 ? 160 : 190) - top} c="water" sw={0} fill="water" o={0.5} />
            <Text x={x + 14} y={top + 5} s={14} c="water">{lab}</Text>
          </g>
        ))}
        <Line x1={60} y1={60} x2={320} y2={110} c="red" w={1.4} dash="6 4" />
        <Arrow x1={50} y1={210} x2={110} y2={210} c="ink" w={2.4} />
        <Text x={50} y={200} s={14} c="ink">v₁</Text>
        <Arrow x1={240} y1={210} x2={340} y2={210} c="red" w={3} />
        <Text x={260} y={204} s={14} c="red">v₂ &gt; v₁</Text>
        <Text x={250} y={286} a="middle" s={13} c="mute">la section diminue : la vitesse augmente et la pression baisse</Text>
      </g>
    ),
    notes: ['Diviser le diamètre par 2 divise la section par 4 : la vitesse est multipliée par 4.'],
    caption: 'Tube de Venturi : les piézomètres montrent la baisse de pression dans le col.',
  },
  {
    id: 'laminaire-turbulent',
    title: 'Régime laminaire et turbulent',
    steps: ['formulas'],
    formula: ['Re = \\frac{v D}{\\nu}'],
    h: 260,
    draw: () => (
      <g>
        {[[30, 'laminaire (Re < 2 000)', true], [270, 'turbulent (Re > 4 000)', false]].map(([x, lab, lam]) => (
          <g key={x}>
            <Line x1={x} y1={60} x2={x + 200} y2={60} c="ink" w={2.4} />
            <Line x1={x} y1={200} x2={x + 200} y2={200} c="ink" w={2.4} />
            <Line x1={x + 40} y1={60} x2={x + 40} y2={200} c="grey" w={1} dash="4 4" />
            {Array.from({ length: 7 }, (_, i) => {
              const yy = 70 + i * 20;
              const r = (yy - 130) / 70;
              const len = lam ? 120 * (1 - r * r) : 110 * Math.pow(1 - Math.abs(r), 1 / 7);
              return <Arrow key={i} x1={x + 40} y1={yy} x2={x + 40 + Math.max(len, 14)} y2={yy} c={lam ? 'ink' : 'red'} w={1.6} hs={7} />;
            })}
            <Text x={x + 100} y={36} a="middle" s={14} b c={lam ? 'ink' : 'red'}>{lab}</Text>
          </g>
        ))}
        <Text x={250} y={240} a="middle" s={13} c="mute">eau à 1,7 m/s dans Ø 150 mm : Re = 255 000, turbulent (cas courant en génie civil)</Text>
      </g>
    ),
    caption: 'Profils de vitesse : parabolique en laminaire, aplati en turbulent.',
  },
  {
    id: 'ligne-de-charge',
    title: 'Ligne de charge d’un refoulement',
    steps: ['stepbystep'],
    formula: ['H_{mt} = 25 + 16{,}4 = 41{,}4\\ \\text{m}', 'P = \\frac{\\rho g Q H_{mt}}{\\eta} = 17{,}4\\ \\text{kW}'],
    h: 320,
    draw: () => (
      <g>
        <Rect x={20} y={240} w={90} h={50} c="water" sw={2} fill="~water" />
        <WaterLevel x={40} y={240} />
        <Rect x={400} y={100} w={90} h={50} c="water" sw={2} fill="~water" />
        <WaterLevel x={420} y={100} />
        <Path d="M110,275 H140 V265" c="ink" w={2.4} />
        <Circle cx={150} cy={258} r={14} c="ink" sw={2.4} fill="~ink" />
        <Text x={150} y={292} a="middle" s={13}>pompe</Text>
        <Path d="M164,258 L400,130" c="ink" w={2.4} />
        <Line x1={150} y1={240} x2={150} y2={60} c="red" w={1.4} dash="3 4" />
        <Path d="M20,240 H140 V58 L400,100" c="red" w={2.6} />
        <Text x={260} y={70} s={14} c="red">ligne de charge (pente = pertes)</Text>
        <Dim x1={470} y1={240} x2={470} y2={100} label="25 m" s={13} side={-1} />
        <Dim x1={128} y1={240} x2={128} y2={58} label="HMT 41,4 m" s={13} />
        <Text x={300} y={140} s={13} c="mute">{'800 m · Ø 150\nΔH = 16,4 m'}</Text>
      </g>
    ),
    notes: ['La pompe fournit la hauteur géométrique plus toutes les pertes de charge.'],
    caption: 'Q = 30 L/s vers un réservoir 25 m plus haut : la charge saute à la pompe puis décroît jusqu’au réservoir.',
  },
  {
    id: 'cavitation',
    title: 'Cavitation à l’aspiration',
    steps: ['real_examples'],
    h: 270,
    draw: () => (
      <g>
        <Rect x={20} y={200} w={160} h={50} c="water" sw={2} fill="~water" />
        <WaterLevel x={40} y={200} />
        <Path d="M100,240 V60 H260" c="ink" w={2.4} />
        <Circle cx={280} cy={60} r={22} c="ink" sw={2.4} fill="~ink" />
        <Dim x1={70} y1={200} x2={70} y2={60} label="6 m" s={14} />
        {[[268, 50], [276, 66], [290, 56], [284, 72], [296, 64]].map(([x, y]) => <Circle key={`${x}-${y}`} cx={x} cy={y} r={3} c="red" sw={1.4} fill="paper" />)}
        <Text x={310} y={100} s={14} c="red">{'pression < tension de vapeur :\nbulles qui implosent sur la roue'}</Text>
        <Text x={110} y={140} s={13} c="mute">{'aspiration longue\net sous-dimensionnée'}</Text>
      </g>
    ),
    notes: ['On limite la hauteur d’aspiration et les pertes, ou on installe la pompe en charge (sous le niveau d’eau).'],
    caption: 'Pompe placée trop haut : la pression d’entrée chute sous la tension de vapeur de l’eau.',
  },
  {
    id: 'hameau-gravitaire',
    title: 'Alimenter un hameau par gravité',
    steps: ['practical_case'],
    formula: ['\\frac{p}{\\rho g} = 250 - 195 - 29{,}2 = 25{,}8\\ \\text{m} \\approx 2{,}5\\ \\text{bar}'],
    h: 300,
    draw: () => (
      <g>
        <Path d="M10,90 L120,80 L220,170 L340,210 L490,230" c="soil" w={2} />
        <Rect x={40} y={50} w={60} h={34} c="water" sw={2} fill="~water" />
        <Text x={70} y={42} a="middle" s={13}>réservoir 250 m</Text>
        <Path d="M100,80 L220,176 L340,216 L420,226" c="ink" w={2.4} />
        <Rect x={410} y={200} w={40} h={28} c="ink" sw={1.8} fill="~ink" />
        <Text x={430} y={250} a="middle" s={13}>hameau 195 m</Text>
        <Line x1={70} y1={50} x2={490} y2={50} c="grey" w={1.4} dash="6 4" />
        <Text x={480} y={44} a="end" s={12} c="mute">charge statique (débit nul) : 55 m</Text>
        <Line x1={100} y1={50} x2={430} y2={120} c="red" w={2.2} />
        <Text x={260} y={78} s={13} c="red">ligne de charge en pointe</Text>
        <Dim x1={440} y1={120} x2={440} y2={200} label="25,8 m" s={12} side={-1} />
        <Dim x1={470} y1={50} x2={470} y2={120} label="29,2 m" s={12} side={-1} />
      </g>
    ),
    notes: ['La pression au hameau dépasse les 2 bar exigés, même en pointe.'],
    caption: 'Conduite de 2 500 m, Ø 100 mm, 8 L/s : les pertes consomment 29 m des 55 m disponibles.',
  },
];
