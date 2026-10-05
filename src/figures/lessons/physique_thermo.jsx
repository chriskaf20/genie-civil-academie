// Plates — Module 2 · Thermodynamique & transferts de chaleur
import { Arrow, Circle, Dim, Ground, Line, Path, Pin, Plot, Poly, Rect, Roller, Text } from '../../components/figures/ink.jsx';

// Heating 1 kg of ice from −10 °C to water at +20 °C (kJ cumulated).
const Q1 = 2.1 * 10;
const Q2 = Q1 + 334;
const Q3 = Q2 + 4.186 * 20;

export default [
  {
    id: 'trois-modes',
    title: 'Conduction, convection, rayonnement',
    steps: ['theory'],
    formula: ['\\Phi = \\lambda \\frac{A\\,\\Delta T}{e}', '\\Phi = h A (T_s - T_f)', '\\Phi = \\varepsilon \\sigma A T^4'],
    h: 300,
    draw: () => (
      <g>
        <Rect x={200} y={40} w={70} h={220} c="grey" sw={2} fill="pat:concrete" bg="~grey" />
        <Circle cx={60} cy={60} r={22} c="orange" sw={2} fill="~orange" />
        {[[-30, 80], [0, 92], [30, 104]].map(([d, y]) => (
          <Arrow key={d} x1={86} y1={70 + d * 0.3} x2={194} y2={y} c="orange" w={2} dash="6 4" />
        ))}
        <Text x={40} y={110} s={15} c="orange">rayonnement</Text>
        {[150, 190, 230].map(y => <Arrow key={y} x1={214} y1={y} x2={258} y2={y} c="red" w={2.6} />)}
        <Text x={235} y={280} a="middle" s={15} c="red">conduction</Text>
        <Path d="M300,240 C340,240 340,140 300,140 C270,140 290,90 320,80" c="water" w={2.2} />
        <Arrow x1={318} y1={84} x2={330} y2={74} c="water" w={2.2} />
        <Path d="M370,250 C410,250 410,150 370,150 C340,150 360,100 390,90" c="water" w={2.2} />
        <Arrow x1={388} y1={94} x2={400} y2={84} c="water" w={2.2} />
        <Text x={340} y={290} s={15} c="water">convection (air)</Text>
        <Text x={60} y={190} s={14} c="mute">{'extérieur\nensoleillé'}</Text>
        <Text x={420} y={200} s={14} c="mute">intérieur</Text>
      </g>
    ),
    notes: ['Dans un matériau solide la chaleur passe par conduction ; à la surface elle est échangée par convection et rayonnement.'],
    caption: 'Les trois modes de transfert de chaleur autour d’une paroi.',
  },
  {
    id: 'chaleur-latente',
    title: 'Chauffer de la glace : chaleur sensible et latente',
    steps: ['formulas'],
    formula: ['Q = m\\,c\\,\\Delta T', 'Q_f = m\\,L_f = 334\\ \\text{kJ/kg}'],
    h: 300,
    draw: () => (
      <Plot x={60} y={30} w={380} h={210} xr={[0, 460]} yr={[-12, 24]} xl="Q (kJ/kg)" yl="T (°C)"
        xt={[[Q1, '21'], [Q2, '355'], [Q3, '439']]} yt={[[-10, '−10'], [0, '0'], [20, '20']]} grid
      >
        {(sx, sy) => (
          <g>
            <Poly pts={[[sx(0), sy(-10)], [sx(Q1), sy(0)], [sx(Q2), sy(0)], [sx(Q3), sy(20)]]} c="red" w={3} />
            <Text x={sx(Q1 / 2) + 6} y={sy(-6)} s={13} c="ink">glace</Text>
            <Text x={sx((Q1 + Q2) / 2)} y={sy(0) - 12} a="middle" s={14} c="ink">{'fusion à 0 °C : palier (chaleur latente)'}</Text>
            <Text x={sx(Q2) + 6} y={sy(14)} s={13} c="ink">eau</Text>
          </g>
        )}
      </Plot>
    ),
    notes: ['Pendant la fusion, toute la chaleur sert au changement d’état : la température reste à 0 °C.'],
    caption: 'Faire fondre la glace demande 16 fois plus d’énergie que de la réchauffer de 10 °C.',
  },
  {
    id: 'joint-pont-120m',
    title: 'Pont de 120 m : point fixe et joint aval',
    steps: ['stepbystep'],
    formula: ['\\Delta L_+ = 30\\ \\text{mm} \\qquad \\Delta L_- = 36\\ \\text{mm}'],
    h: 280,
    draw: () => (
      <g>
        <Rect x={20} y={100} w={40} h={110} c="grey" sw={2} fill="pat:concrete" bg="~grey" />
        <Rect x={440} y={100} w={40} h={110} c="grey" sw={2} fill="pat:concrete" bg="~grey" />
        <Rect x={60} y={84} w={376} h={16} c="ink" sw={2} fill="~ink" />
        <Pin x={70} y={100} s={14} />
        <Roller x={426} y={100} s={14} />
        <Text x={70} y={150} a="middle" s={13} c="ink">appui fixe</Text>
        <Text x={420} y={150} a="middle" s={13} c="ink">appui glissant</Text>
        <Line x1={436} y1={60} x2={436} y2={100} c="red" w={2} />
        <Arrow x1={380} y1={56} x2={428} y2={56} c="red" w={2.2} />
        <Text x={380} y={44} a="end" s={14} c="red">été : +30 mm</Text>
        <Arrow x1={380} y1={260} x2={428} y2={260} c="ink" w={2.2} both hs={8} />
        <Text x={376} y={265} a="end" s={14} c="ink">{'souffle du joint ≥ 66 mm + retrait/fluage'}</Text>
        <Text x={430} y={240} a="end" s={14} c="water">hiver : −36 mm</Text>
        <Dim x1={70} y1={190} x2={426} y2={190} label="L = 120 m (posé à +15 °C)" side={-1} s={14} />
      </g>
    ),
    notes: ['Les déplacements se mesurent depuis le point fixe : tout le mouvement se reporte sur le joint aval.'],
    caption: 'Tablier en béton, températures de −15 °C à +40 °C, α = 10⁻⁵ /°C.',
  },
  {
    id: 'batiment-trois-blocs',
    title: 'Bâtiment de 90 m fractionné en trois blocs',
    steps: ['practical_case'],
    formula: ['\\Delta L = 31{,}5 + 27 = 58{,}5\\ \\text{mm}'],
    h: 260,
    draw: () => (
      <g>
        <Ground x1={20} x2={480} y={200} />
        {[0, 1, 2].map(i => (
          <g key={i}>
            <Rect x={30 + i * 148} y={60} w={140} h={140} c="ink" sw={2} fill="~ink" />
            {[0, 1, 2, 3].map(f => <Line key={f} x1={30 + i * 148} y1={95 + f * 35} x2={170 + i * 148} y2={95 + f * 35} c="ink" w={1} o={0.5} />)}
            <Text x={100 + i * 148} y={50} a="middle" s={14}>bloc de 30 m</Text>
          </g>
        ))}
        {[174, 322].map(x => (
          <g key={x}>
            <Line x1={x} y1={60} x2={x} y2={200} c="red" w={2.6} />
            <Text x={x} y={226} a="middle" s={13} c="red">joint</Text>
          </g>
        ))}
        <Text x={250} y={250} a="middle" s={14} c="mute">≈ 20 mm de raccourcissement par bloc au lieu de 58,5 mm</Text>
      </g>
    ),
    notes: ['Les joints traversent toute la structure, du dessus des fondations à la toiture.'],
    caption: 'Dilatation (35 °C d’écart) et retrait cumulés sur 90 m imposent deux joints de dilatation.',
  },
];
