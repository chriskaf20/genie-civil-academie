// Plates — Module 3 · Chimie des matériaux : hydratation, carbonatation, corrosion
import { Arrow, Circle, Dim, Dot, Line, Path, Plot, Poly, Rect, Text, fnPts } from '../../components/figures/ink.jsx';

// Pseudo-random but fixed positions for cement grains.
const GRAINS = [[30, 40, 13], [75, 30, 10], [110, 58, 14], [40, 92, 11], [86, 98, 12], [128, 112, 9], [58, 132, 10], [20, 140, 8]];

function Panel({ x, title, stage }) {
  return (
    <g>
      <Rect x={x} y={40} w={150} h={160} c="ink" sw={1.8} fill={stage === 0 ? '~water' : 'none'} rx={6} />
      <Text x={x + 75} y={28} a="middle" s={15} b c="ink">{title}</Text>
      {GRAINS.map(([gx, gy, r], i) => {
        const cx = x + gx;
        const cy = 40 + gy;
        const core = stage === 2 ? r * 0.45 : stage === 1 ? r * 0.8 : r;
        return (
          <g key={i}>
            {stage > 0 && Array.from({ length: 10 }, (_, k) => {
              const a = (k / 10) * 2 * Math.PI;
              const len = stage === 2 ? r + 12 : r + 5;
              return <Line key={k} x1={cx + Math.cos(a) * core} y1={cy + Math.sin(a) * core} x2={cx + Math.cos(a) * len} y2={cy + Math.sin(a) * len} c="green" w={1.1} />;
            })}
            <Circle cx={cx} cy={cy} r={core} c="grey" sw={1.6} fill="~grey" />
          </g>
        );
      })}
      {stage > 0 && [[x + 60, 70], [x + 120, 160], [x + 30, 185]].slice(0, stage === 2 ? 3 : 1).map(([hx, hy]) => (
        <Poly key={hx} pts={[[hx - 8, hy], [hx - 4, hy - 7], [hx + 4, hy - 7], [hx + 8, hy], [hx + 4, hy + 7], [hx - 4, hy + 7]]} c="violet" w={1.6} fill="~violet" />
      ))}
    </g>
  );
}

export default [
  {
    id: 'hydratation',
    title: 'Hydratation du ciment',
    steps: ['theory'],
    formula: ['2\\,\\mathrm{C_3S} + 6\\,\\mathrm{H} \\rightarrow \\mathrm{C_3S_2H_3} + 3\\,\\mathrm{CH}'],
    h: 270,
    draw: () => (
      <g>
        <Panel x={10} title="gâchage" stage={0} />
        <Panel x={175} title="quelques heures" stage={1} />
        <Panel x={340} title="28 jours" stage={2} />
        <Arrow x1={162} y1={120} x2={174} y2={120} c="mute" w={2} />
        <Arrow x1={327} y1={120} x2={339} y2={120} c="mute" w={2} />
        <Circle cx={30} cy={232} r={7} c="grey" sw={1.6} fill="~grey" />
        <Text x={42} y={237} s={13}>grain de clinker</Text>
        <Line x1={170} y1={232} x2={186} y2={232} c="green" w={1.4} />
        <Text x={192} y={237} s={13} c="green">C-S-H (« colle »)</Text>
        <Poly pts={[[330, 232], [334, 225], [342, 225], [346, 232], [342, 239], [334, 239]]} c="violet" w={1.6} fill="~violet" />
        <Text x={352} y={237} s={13} c="violet">portlandite Ca(OH)₂</Text>
      </g>
    ),
    notes: ['Les C-S-H remplissent progressivement l’espace occupé par l’eau : la porosité diminue et la résistance augmente.'],
    caption: 'Les grains anhydres se recouvrent d’hydrates qui soudent le squelette granulaire.',
  },
  {
    id: 'front-carbonatation',
    title: 'Front de carbonatation dans l’enrobage',
    steps: ['formulas'],
    formula: ['\\mathrm{Ca(OH)_2} + \\mathrm{CO_2} \\rightarrow \\mathrm{CaCO_3} + \\mathrm{H_2O}', 'x_c = K\\sqrt{t}'],
    h: 330,
    draw: () => (
      <g>
        <Rect x={150} y={40} w={300} h={220} c="grey" sw={2} fill="pat:concrete" bg="~grey" />
        <Rect x={150} y={40} w={92} h={220} c="orange" sw={0} fill="~orange" />
        <Line x1={242} y1={40} x2={242} y2={260} c="orange" w={2.4} dash="7 5" />
        {[90, 150, 210].map(y => <Dot key={y} x={290} y={y} r={13} c="red" />)}
        {[70, 120, 170, 220].map(y => <Arrow key={y} x1={60} y1={y} x2={140} y2={y} c="mute" w={2} />)}
        <Text x={36} y={46} s={16} c="mute">CO₂ de l’air</Text>
        <Text x={196} y={30} a="middle" s={14} c="orange">pH ≈ 9</Text>
        <Text x={370} y={30} a="middle" s={14} c="violet">pH ≈ 13 (sain)</Text>
        <Dim x1={150} y1={275} x2={242} y2={275} label="x_c" side={-1} s={14} c="orange" lc="orange" />
        <Dim x1={150} y1={300} x2={277} y2={300} label="enrobage c" side={-1} s={13} />
        <Text x={318} y={154} s={14} c="red">armatures</Text>
      </g>
    ),
    notes: ['À la phénolphtaléine, la zone saine vire au rose ; la zone carbonatée reste incolore.'],
    caption: 'Le CO₂ consomme la portlandite : le pH chute et le front avance vers les armatures.',
  },
  {
    id: 'loi-racine-temps',
    title: 'Quand le front atteint-il les armatures ?',
    steps: ['stepbystep'],
    formula: ['K = \\frac{16}{\\sqrt{16}} = 4\\ \\text{mm}/\\sqrt{\\text{an}}', 't = \\left(\\frac{30}{4}\\right)^2 = 56\\ \\text{ans}'],
    h: 300,
    draw: () => (
      <Plot x={60} y={30} w={380} h={210} xr={[0, 80]} yr={[0, 40]} xl="t (ans)" yl="x_c (mm)"
        xt={[0, 16, 30, 50, 56, 70].map(v => [v, String(v)])} yt={[10, 16, 20, 28, 30].map(v => [v, String(v)])} grid
      >
        {(sx, sy) => (
          <g>
            <Poly pts={fnPts(t => 4 * Math.sqrt(t), 0, 80, sx, sy, 80)} c="orange" w={3} />
            <Line x1={sx(0)} y1={sy(30)} x2={sx(80)} y2={sy(30)} c="red" w={2.2} dash="8 5" />
            <Text x={sx(2)} y={sy(30) - 8} s={14} c="red">enrobage 30 mm = armatures</Text>
            <Dot x={sx(16)} y={sy(16)} r={6} c="ink" ring />
            <Text x={sx(16) + 10} y={sy(16) + 18} s={13} c="ink">mesure : 16 mm à 16 ans</Text>
            <Dot x={sx(50)} y={sy(28.3)} r={5} c="orange" />
            <Text x={sx(50) + 6} y={sy(28.3) + 18} s={13} c="orange">28,3 mm à 50 ans</Text>
            <Dot x={sx(56.25)} y={sy(30)} r={6} c="red" ring />
            <Line x1={sx(56.25)} y1={sy(30)} x2={sx(56.25)} y2={sy(0)} c="red" w={1.2} dash="3 4" />
          </g>
        )}
      </Plot>
    ),
    notes: ['La vitesse diminue avec le temps (racine carrée) : doubler l’enrobage multiplie par 4 la durée de protection.'],
    caption: 'Poutre de façade XC4 : extrapolation de la mesure à 16 ans par la loi x_c = K√t.',
  },
  {
    id: 'corrosion-eclatement',
    title: 'De la dépassivation à l’éclatement',
    steps: ['diagrams'],
    h: 250,
    draw: () => {
      const stage = (x, title, rust, crack, spall) => (
        <g>
          <Text x={x + 52} y={24} a="middle" s={14} b c="ink">{title}</Text>
          <Rect x={x} y={40} w={104} h={150} c="grey" sw={2} fill="pat:concrete" bg="~grey" />
          {spall && <Poly pts={[[x, 120], [x + 30, 112], [x + 44, 140], [x + 30, 170], [x, 176]]} c="grey" w={1.6} fill="paper" />}
          <Circle cx={x + 56} cy={142} r={11 + rust} c="orange" sw={rust ? 2 : 0} fill={rust ? '~orange' : 'none'} />
          <Dot x={x + 56} y={142} r={11} c="red" />
          {crack && <Path d={`M${x + 45},140 L${x + 30},128 L${x + 18},134 L${x},126`} c="txt" w={1.8} />}
          {crack && <Path d={`M${x + 56},128 L${x + 60},100 L${x + 54},76`} c="txt" w={1.4} />}
        </g>
      );
      return (
        <g>
          {stage(10, '1. passivé', 0, false, false)}
          {stage(132, '2. dépassivé', 2, false, false)}
          {stage(254, '3. rouille', 7, true, false)}
          {stage(376, '4. éclat', 9, true, true)}
          <Text x={250} y={222} a="middle" s={14} c="mute">la rouille occupe 2 à 6 fois le volume de l’acier : elle fait éclater l’enrobage</Text>
        </g>
      );
    },
    caption: 'Coupe dans l’enrobage d’une armature : passivation, dépassivation, corrosion puis épaufrure.',
  },
  {
    id: 'balcon-degrade',
    title: 'Diagnostic d’un balcon dégradé',
    steps: ['practical_case'],
    formula: ['t_{dép} = \\left(\\frac{15}{3{,}7}\\right)^2 \\approx 16\\ \\text{ans}'],
    h: 280,
    draw: () => (
      <g>
        <Rect x={20} y={40} w={60} h={220} c="grey" sw={2} fill="pat:hatch" bg="~grey" />
        <Rect x={80} y={100} w={380} h={60} c="grey" sw={2} fill="pat:concrete" bg="~grey" />
        <Rect x={80} y={137} w={380} h={23} c="orange" sw={0} fill="~orange" />
        {[140, 220, 300, 380].map(x => <Dot key={x} x={x} y={145} r={6} c="red" />)}
        <Poly pts={[[250, 160], [262, 172], [300, 176], [330, 166], [338, 160]]} c="grey" w={1.6} fill="paper" />
        <Path d="M330,166 l14,22 M300,176 l6,28" c="orange" w={1.6} dash="3 3" />
        <Text x={340} y={210} s={13} c="orange">coulures de rouille</Text>
        <Dim x1={470} y1={160} x2={470} y2={145} label="" s={12} />
        <Text x={476} y={156} s={12}>15</Text>
        <Text x={90} y={90} s={14}>{'carbonatation 22 mm > enrobage 15 mm\nchlorures 0,1 % (non significatifs)'}</Text>
        <Text x={90} y={248} s={14} c="green">{'réparation : purge, passivation, mortier R3/R4,\nrevêtement anti-carbonatation'}</Text>
      </g>
    ),
    notes: ['Cause principale : enrobage insuffisant ; la corrosion a commencé vers 16 ans.'],
    caption: 'Balcon de 35 ans : les armatures inférieures sont dans la zone carbonatée (orange).',
  },
];
