// Plates — Module 41 · Toitures et étanchéité
import { Angle, Arrow, Circle, Dim, Dot, Line, Path, Plot, Poly, Rect, Text } from '../../components/figures/kit.jsx';

const deg = r => (r * 180) / Math.PI;

export default [
  {
    id: 'coupe-toiture',
    title: 'Coupe d’une toiture à deux pans',
    steps: ['theory'],
    formula: ['p = \\frac{\\Delta h}{L_h} \\times 100', 'L_{rampant} = \\frac{L_h}{\\cos\\alpha}'],
    h: 230,
    draw: () => {
      const e = [60, 120];
      const r = [250, 54];
      const f = [440, 120];
      const a = deg(Math.atan2(e[1] - r[1], r[0] - e[0]));
      return (
        <g>
          <Rect x={60} y={120} w={380} h={80} c="grey" sw={0} fill="~grey" />
          <Rect x={60} y={120} w={18} h={80} c="grey" sw={1.8} fill="pat:block" bg="~grey" />
          <Rect x={422} y={120} w={18} h={80} c="grey" sw={1.8} fill="pat:block" bg="~grey" />
          <Line x1={60} y1={120} x2={440} y2={120} c="soil" w={4} />
          <Poly pts={[e, r, f]} c="soil" w={4} />
          {/* W truss: bottom-chord third points to rafter mid-points and ridge */}
          <Poly pts={[[155, 87], [187, 120], [250, 54], [313, 120], [345, 87]]} c="soil" w={1.8} />
          <Poly pts={[[44, 128], [250, 44], [456, 128]]} c="red" w={3} />
          <Text x={140} y={70} a="middle" s={13} c="red" rot={-a}>couverture (tuiles)</Text>
          <Text x={330} y={136} a="middle" s={12} c="soil">fermette en W</Text>
          <Angle cx={60} cy={120} r={60} a1={-a} a2={0} label="α" s={15} />
          <Dim x1={60} y1={212} x2={250} y2={212} label="L_h (demi-portée)" side={-1} s={13} />
          <Dim x1={262} y1={120} x2={262} y2={54} label="Δh" s={13} side={-1} />
          <Text x={330} y={50} s={13} c="mute">rampant = L_h / cos α</Text>
          <Text x={250} y={36} a="middle" s={12}>faîtage</Text>
          <Text x={40} y={116} a="end" s={12}>égout</Text>
        </g>
      );
    },
    notes: ['La pente minimale dépend de la tuile et de la zone climatique (DTU série 40).'],
    caption: 'Charpente en fermettes, couverture et grandeurs géométriques d’un versant.',
  },
  {
    id: 'coefficient-neige',
    title: 'Coefficient de forme de la neige',
    steps: ['formulas'],
    formula: ['s = \\mu_1 \\, C_e \\, C_t \\, s_k'],
    h: 290,
    draw: () => (
      <Plot x={60} y={30} w={380} h={200} xr={[0, 70]} yr={[0, 1]} xl="α (°)" yl="μ₁"
        xt={[0, 15, 30, 45, 60].map(v => [v, String(v)])} yt={[[0.4, '0,4'], [0.8, '0,8']]} grid
      >
        {(sx, sy) => (
          <g>
            <Poly pts={[[sx(0), sy(0.8)], [sx(30), sy(0.8)], [sx(60), sy(0)], [sx(70), sy(0)]]} c="ink" w={3} />
            <Line x1={sx(19.3)} y1={sy(0)} x2={sx(19.3)} y2={sy(0.8)} c="red" w={1.4} dash="4 4" />
            <Text x={sx(19.3) + 4} y={sy(0.86)} s={13} c="red">maison 19,3° : 0,8</Text>
            <Line x1={sx(40)} y1={sy(0)} x2={sx(40)} y2={sy(0.533)} c="orange" w={1.4} dash="4 4" />
            <Text x={sx(40) + 6} y={sy(0.56)} s={13} c="orange">40° : 0,53</Text>
            <Text x={sx(45)} y={sy(0.2)} s={13} c="mute">au-delà de 60° la neige glisse</Text>
          </g>
        )}
      </Plot>
    ),
    caption: 'EN 1991-1-3 : μ₁ = 0,8 jusqu’à 30°, puis décroît jusqu’à 0 à 60°.',
  },
  {
    id: 'plan-toiture-maison',
    title: 'Toiture d’une maison de 10 × 12 m',
    steps: ['stepbystep'],
    formula: ['L_r = \\frac{5{,}00}{\\cos 19{,}3°} = 5{,}30\\ \\text{m}'],
    h: 290,
    draw: () => (
      <g>
        <Rect x={90} y={40} w={300} h={210} c="red" sw={2.4} fill="~red" />
        <Line x1={90} y1={145} x2={390} y2={145} c="red" w={3} />
        <Text x={240} y={138} a="middle" s={13} c="red">faîtage</Text>
        <Arrow x1={240} y1={150} x2={240} y2={236} c="ink" w={1.8} />
        <Arrow x1={240} y1={140} x2={240} y2={54} c="ink" w={1.8} />
        <Text x={250} y={210} s={13} c="ink">pan 2 : 63,6 m²</Text>
        <Text x={250} y={86} s={13} c="ink">pan 1 : 63,6 m²</Text>
        {[44, 246].map(y => <Circle key={y} cx={402} cy={y} r={9} c="water" sw={2} fill="~water" />)}
        <Text x={414} y={36} s={12} c="water">DN 100</Text>
        <Text x={414} y={268} s={12} c="water">DN 100</Text>
        <Dim x1={90} y1={268} x2={390} y2={268} label="12,00 m" side={-1} s={13} />
        <Dim x1={70} y1={250} x2={70} y2={40} label="10,00 m" s={13} />
      </g>
    ),
    notes: ['60 m² en plan par pan : 60 cm² de descente au minimum, une DN 100 (78 cm²) suffit.'],
    caption: 'Vue en plan : deux versants, faîtage, gouttières et descentes.',
  },
  {
    id: 'complexe-terrasse',
    title: 'Coupe d’une toiture-terrasse isolée',
    steps: ['diagrams'],
    h: 300,
    draw: () => {
      const layers = [
        [192, 30, 'pat:concrete', '~grey', 'grey', 'élément porteur : dalle béton'],
        [184, 8, 'none', '~violet', 'violet', 'pare-vapeur'],
        [140, 44, 'pat:insul', '~orange', 'orange', 'isolant'],
        [130, 10, 'none', 'txt', 'txt', 'étanchéité bicouche'],
        [104, 26, 'pat:gravel', '~soil', 'soil', 'protection gravillons'],
      ];
      return (
        <g>
          {layers.map(([y, h, fill, bg, c, lab]) => (
            <g key={lab}>
              <Rect x={40} y={y} w={300} h={h} c={c} sw={1.6} fill={fill} bg={bg} />
              <Line x1={340} y1={y + h / 2} x2={354} y2={y + h / 2} c={c} w={1.2} />
              <Text x={358} y={y + h / 2 + 5} s={13} c={c}>{lab}</Text>
            </g>
          ))}
          <Rect x={10} y={30} w={30} h={192} c="grey" sw={1.8} fill="pat:concrete" bg="~grey" />
          <Text x={25} y={22} a="middle" s={12}>acrotère</Text>
          <Path d="M40,130 V82 H52" c="txt" w={3} />
          <Dim x1={58} y1={104} x2={58} y2={82} label="≥ 15 cm" s={11} side={-1} />
          <Text x={78} y={78} s={12} c="red">relevé d’étanchéité</Text>
          <Rect x={270} y={130} w={24} h={92} c="water" sw={1.8} fill="~water" />
          <Text x={282} y={244} a="middle" s={12} c="water">EEP</Text>
          <Rect x={10} y={54} w={30} h={10} c="water" sw={1.6} fill="paper" />
          <Text x={46} y={63} s={11} c="water">trop-plein</Text>
        </g>
      );
    },
    notes: ['Ordre « toiture chaude » : porteur, pare-vapeur, isolant, étanchéité, protection.'],
    caption: 'Les relevés montent d’au moins 15 cm au-dessus de la protection ; un trop-plein traverse l’acrotère.',
  },
  {
    id: 'terrasse-immeuble',
    title: 'Évacuations d’une toiture-terrasse de 360 m²',
    steps: ['practical_case'],
    formula: ['S \\geq 360\\ \\text{cm}^2 \\Rightarrow 5 \\times \\text{DN 100}'],
    h: 290,
    draw: () => (
      <g>
        <Rect x={40} y={40} w={420} h={210} c="txt" sw={3} fill="~grey" />
        <Line x1={40} y1={145} x2={460} y2={145} c="water" w={1.8} dash="8 5" />
        {[60, 160, 340, 440].map(x => <Arrow key={x} x1={x} y1={70} x2={x} y2={125} c="mute" w={1.4} hs={7} />)}
        {[60, 160, 340, 440].map(x => <Arrow key={`b${x}`} x1={x} y1={220} x2={x} y2={165} c="mute" w={1.4} hs={7} />)}
        {[90, 170, 250, 330, 410].map(x => <Dot key={x} x={x} y={145} r={7} c="water" ring />)}
        <Text x={250} y={134} a="middle" s={12} c="water">noue : 5 descentes DN 100</Text>
        {[40, 460].map(x => <Rect key={x} x={x - 6} y={139} w={12} h={12} c="red" sw={1.8} fill="paper" />)}
        <Text x={58} y={168} s={12} c="red">trop-plein</Text>
        <Dim x1={40} y1={270} x2={460} y2={270} label="24 m" side={-1} s={13} />
        <Dim x1={20} y1={250} x2={20} y2={40} label="15 m" s={13} />
        <Text x={250} y={60} a="middle" s={12} c="mute">pente 1,5 % vers la noue</Text>
      </g>
    ),
    caption: '5 × 78 = 390 cm² ≥ 360 cm² ; un trop-plein à chaque extrémité de la noue.',
  },
];
