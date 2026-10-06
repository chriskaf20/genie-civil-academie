// Plates — Module 44 · Chauffage et ventilation
import { Arrow, Box, Circle, Line, Path, Pipe, Plot, Poly, Rect, Text, fnPts, House } from '../../components/figures/kit.jsx';

export default [
  {
    id: 'chaine-chauffage',
    title: 'Production, distribution, émission',
    steps: ['theory'],
    formula: ['P = (H_T + H_V)(T_i - T_{e,base})'],
    h: 290,
    draw: () => (
      <g>
        <Rect x={20} y={80} w={90} h={110} rx={8} c="ink" sw={2} fill="~ink" />
        <Circle cx={65} cy={120} r={22} c="ink" sw={2} fill="paper" />
        <Path d="M50,120 q15,-14 30,0" c="ink" w={2} />
        <Text x={65} y={176} a="middle" s={12} b c="ink">PAC</Text>
        <Text x={65} y={70} a="middle" s={13} c="mute">production</Text>
        <Pipe x1={110} y1={110} x2={300} y2={110} d={10} c="red" />
        <Pipe x1={300} y1={170} x2={110} y2={170} d={10} c="water" />
        <Circle cx={170} cy={110} r={11} c="red" sw={2} fill="paper" />
        <Text x={170} y={95} a="middle" s={11} c="red">circulateur</Text>
        <Text x={205} y={70} a="middle" s={13} c="mute">distribution</Text>
        <Text x={205} y={196} a="middle" s={11} c="water">retour</Text>
        <Rect x={300} y={90} w={60} h={100} c="red" sw={2} fill="~red" />
        {[312, 324, 336, 348].map(x => <Line key={x} x1={x} y1={96} x2={x} y2={184} c="red" w={1.4} />)}
        <Text x={330} y={70} a="middle" s={13} c="mute">émission</Text>
        <Path d="M370,170 q20,-30 0,-60 q-20,-30 0,-60" c="orange" w={1.6} dash="4 4" />
        <Text x={400} y={130} s={12} c="orange">{'chaleur\ndans la pièce'}</Text>
        <Text x={250} y={250} a="middle" s={12} c="mute">eau chaude au départ (rouge), eau refroidie au retour (bleu)</Text>
      </g>
    ),
    caption: 'Les trois fonctions d’une installation de chauffage à eau chaude.',
  },
  {
    id: 'cop-temperature',
    title: 'Le COP chute quand l’eau produite est plus chaude',
    steps: ['formulas'],
    formula: ['COP_{Carnot} = \\frac{T_c}{T_c - T_f}'],
    h: 290,
    draw: () => (
      <Plot x={60} y={30} w={380} h={200} xr={[25, 65]} yr={[0, 6]} xl="T eau (°C)" yl="COP"
        xt={[30, 35, 45, 55, 65].map(v => [v, String(v)])} yt={[1, 2, 3, 4, 5].map(v => [v, String(v)])} grid
      >
        {(sx, sy) => (
          <g>
            <Poly pts={fnPts(T => 0.5 * (T + 273) / (T - 0), 25, 65, sx, sy, 60)} c="ink" w={2.8} />
            <Text x={sx(40)} y={sy(0.5 * 313 / 40) - 10} s={12} c="ink">COP réel ≈ 0,5 × Carnot (air 0 °C)</Text>
            <Rect x={sx(28)} y={sy(5.9)} w={sx(36) - sx(28)} h={sy(0) - sy(5.9)} c="green" sw={0} fill="~green" />
            <Text x={sx(32)} y={sy(0.3)} a="middle" s={12} c="green">plancher</Text>
            <Rect x={sx(55)} y={sy(5.9)} w={sx(65) - sx(55)} h={sy(0) - sy(5.9)} c="red" sw={0} fill="~red" />
            <Text x={sx(60)} y={sy(0.3)} a="middle" s={12} c="red">vieux radiateurs</Text>
          </g>
        )}
      </Plot>
    ),
    caption: 'Ordre de grandeur : COP ≈ 4,5 avec un plancher chauffant, ≈ 2,8 avec une eau à 60 °C.',
  },
  {
    id: 'maison-120',
    title: 'Maison de 120 m² : déperditions et PAC',
    steps: ['stepbystep'],
    formula: ['P = 201 \\times 26 = 5{,}2\\ \\text{kW}'],
    h: 280,
    draw: () => (
      <g>
        <House x={140} y={220} w={200} h={110} />
        {[[120, 150, 90, 150], [360, 150, 410, 150], [240, 74, 240, 30]].map(([x1, y1, x2, y2], i) => (
          <Arrow key={i} x1={x1} y1={y1} x2={x2} y2={y2} c="red" w={2.4} />
        ))}
        <Text x={420} y={140} s={13} c="red">{'parois\nH_T = 150 W/K'}</Text>
        <Text x={250} y={24} s={13} c="red">toiture</Text>
        <Path d="M60,200 q20,-10 40,0" c="water" w={2} />
        <Arrow x1={60} y1={186} x2={110} y2={186} c="water" w={2} />
        <Text x={20} y={176} s={12} c="water">{'air 0,5 vol/h\nH_V = 51 W/K'}</Text>
        <Text x={240} y={258} a="middle" s={13}>19 °C dedans · −7 °C de base dehors : ΔT = 26 K</Text>
      </g>
    ),
    caption: 'H = 201 W/K → 5,2 kW : on retient une PAC de 6 kW.',
  },
  {
    id: 'double-flux',
    title: 'VMC double flux avec échangeur',
    steps: ['practical_case'],
    formula: ['P_{récup} = 0{,}34\\, \\eta\\, \\dot V (T_i - T_e)'],
    h: 290,
    draw: () => (
      <g>
        <Rect x={190} y={100} w={120} h={90} c="ink" sw={2.4} fill="~ink" />
        <Line x1={190} y1={100} x2={310} y2={190} c="ink" w={1.6} />
        <Line x1={310} y1={100} x2={190} y2={190} c="ink" w={1.6} />
        <Text x={250} y={212} a="middle" s={12} b c="ink">échangeur η = 0,85</Text>
        <Pipe x1={40} y1={120} x2={190} y2={120} d={14} c="water" />
        <Text x={40} y={100} s={12} c="water">air neuf 0 °C</Text>
        <Pipe x1={310} y1={120} x2={460} y2={120} d={14} c="orange" />
        <Text x={380} y={100} s={12} c="orange">insufflé 17 °C</Text>
        <Pipe x1={460} y1={170} x2={310} y2={170} d={14} c="red" />
        <Text x={390} y={200} s={12} c="red">extrait 20 °C</Text>
        <Pipe x1={190} y1={170} x2={40} y2={170} d={14} c="grey" />
        <Text x={40} y={200} s={12} c="grey">rejeté 3 °C</Text>
        <Text x={250} y={250} a="middle" s={13}>T4 : 120 m³/h → ≈ 2 000 kWh récupérés par saison</Text>
      </g>
    ),
    caption: 'L’air extrait réchauffe l’air neuf sans se mélanger à lui.',
  },
];
