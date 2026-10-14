// Plates — Module 3 · Chimie des matériaux : hydratation, carbonatation, corrosion
import { Arrow, Circle, Dim, Dot, Line, Path, Plot, Poly, Rect, Text, fnPts } from '../../components/figures/ink.jsx';
import { Bars } from '../../components/figures/kit.jsx';

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
    steps: ['theory', 'formulas'],
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
      <Plot x={60} y={30} w={370} h={210} xr={[0, 80]} yr={[0, 40]} xl="ans" yl="x_c (mm)"
        xt={[0, 16, 30, 50, 56, 70].map(v => [v, String(v)])} yt={[10, 16, 20, 30].map(v => [v, String(v)])} grid
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
  {
    id: 'clinker-phases',
    title: 'Du cru au clinker : quatre phases',
    steps: ['theory'],
    formula: ['\\text{calcaire (80 \\%)} + \\text{argile (20 \\%)} \\xrightarrow{1\\,450\\ °C} \\text{clinker}'],
    h: 260,
    draw: () => (
      <g>
        <Poly pts={[[30, 120], [230, 60], [240, 90], [40, 150]]} c="ink" w={2.2} fill="~orange" close />
        {[[70, 140], [190, 92]].map(([x, y]) => <Circle key={x} cx={x} cy={y} r={14} c="ink" sw={1.6} fill="~grey" />)}
        <Text x={135} y={60} a="middle" s={12} b>four rotatif</Text>
        <Text x={135} y={186} a="middle" s={12} c="red" b>≈ 1 450 °C</Text>
        <Arrow x1={244} y1={80} x2={280} y2={80} c="ink" w={2} hs={8} />
        <Bars x={290} y={30} w={190} h={170} max={70} ticks={[20, 40, 60]} unit="%" s={11} bars={[
          { label: 'C₃S', v: 60, c: 'red' },
          { label: 'C₂S', v: 20, c: 'orange' },
          { label: 'C₃A', v: 8, c: 'water' },
          { label: 'C₄AF', v: 12, c: 'grey' },
        ]} />
        <Text x={135} y={222} a="middle" s={12}>{'C₃S : jeune âge · C₂S : long terme\nC₃A : prise, sulfates · C₄AF : couleur'}</Text>
      </g>
    ),
    notes: ['Le gypse ajouté au broyage régule la prise de l’aluminate C₃A, très réactif.'],
    caption: 'Composition typique d’un clinker Portland et rôle de chaque phase.',
  },
  {
    id: 'ph-passivation',
    title: 'pH du béton et passivation de l’acier',
    steps: ['theory', 'formulas', 'simple_examples'],
    formula: ['\\mathrm{pH} = -\\log_{10}[\\mathrm{H_{3}O^+}] \\qquad \\frac{[\\mathrm{H_{3}O^+}]_9}{[\\mathrm{H_{3}O^+}]_{13}} = 10^4'],
    h: 230,
    draw: () => {
      const X = p => 30 + p * 31;
      return (
        <g>
          {Array.from({ length: 14 }, (_, p) => (
            <Rect key={p} x={X(p)} y={70} w={31} h={30} c="ink" sw={0.8} fill={p < 7 ? '~red' : p < 10 ? '~orange' : '~green'} />
          ))}
          {[0, 7, 9, 13, 14].map(p => <Text key={p} x={X(p)} y={118} a="middle" s={11}>{String(p)}</Text>)}
          <Text x={X(3.5)} y={62} a="middle" s={12} c="red">acide</Text>
          <Text x={X(9)} y={62} a="middle" s={12} c="orange" b>béton carbonaté ≈ 9</Text>
          <Text x={X(12.6)} y={62} a="middle" s={12} c="green" b>{'béton sain\n12,5 – 13,5'}</Text>
          <Rect x={X(12.5)} y={140} w={X(13.5) - X(12.5)} h={14} c="green" sw={1.4} fill="~green" />
          <Text x={X(13)} y={174} a="middle" s={12} c="green">film passif sur l’acier</Text>
          <Rect x={X(8.5)} y={140} w={X(9.5) - X(8.5)} h={14} c="orange" sw={1.4} fill="~orange" />
          <Text x={X(9)} y={174} a="middle" s={12} c="orange">acier dépassivé</Text>
          <Text x={250} y={210} a="middle" s={12}>{'4 unités de pH = 10 000 fois plus d’ions H₃O⁺'}</Text>
        </g>
      );
    },
    notes: ['La portlandite maintient un pH très basique qui protège l’acier ; quand le pH chute vers 9, la protection disparaît.'],
    caption: 'Échelle de pH : du béton sain au béton carbonaté.',
  },
  {
    id: 'carbonatation-vs-chlorures',
    title: 'Deux façons de perdre la protection',
    steps: ['theory'],
    h: 250,
    draw: () => (
      <g>
        {[[20, 'carbonatation'], [260, 'chlorures']].map(([x, t], k) => (
          <g key={t}>
            <Text x={x + 110} y={24} a="middle" s={13} b>{t}</Text>
            <Rect x={x} y={40} w={220} h={160} c="ink" sw={2} fill="pat:concrete" />
            <Rect x={x} y={150} w={220} h={18} c="ink" sw={1.6} fill="~grey" />
            {k === 0 ? (
              <g>
                <Rect x={x} y={40} w={220} h={118} c="orange" sw={0} fill="~orange" />
                <Line x1={x} y1={158} x2={x + 220} y2={158} c="orange" w={2.4} dash="6 4" />
                <Text x={x + 110} y={100} a="middle" s={12} c="orange" b>{'front uniforme\npH ≈ 9'}</Text>
                <Text x={x + 110} y={222} a="middle" s={12}>corrosion généralisée</Text>
              </g>
            ) : (
              <g>
                {[60, 110, 170].map(cx => <Dot key={cx} x={x + cx} y={150} r={6} c="red" />)}
                {[[40, 60], [90, 90], [150, 70], [190, 110]].map(([a, b], i) => <Text key={i} x={x + a} y={b} s={12} c="red" b>Cl⁻</Text>)}
                <Text x={x + 110} y={222} a="middle" s={12} c="red">{'piqûres localisées\n(> 0,4 % du ciment)'}</Text>
              </g>
            )}
          </g>
        ))}
      </g>
    ),
    notes: ['La carbonatation attaque toute la surface de l’acier ; les chlorures percent la couche passive par points, avec une perte de section rapide et dangereuse.'],
    caption: 'Dépassivation par le CO₂ de l’air ou par les sels (marins, de déneigement).',
  },
  {
    id: 'loi-faraday',
    title: 'Loi de Faraday : vitesse de corrosion',
    steps: ['formulas'],
    formula: ['m = \\frac{M\\,I\\,t}{n\\,F} \\qquad 1\\ \\mu\\text{A/cm}^2 \\approx 11{,}6\\ \\mu\\text{m d’acier perdu par an}'],
    h: 230,
    draw: () => (
      <g>
        {[[110, 46, 'neuf'], [250, 40, '10 ans à 1 µA/cm²'], [390, 30, 'corrosion active forte']].map(([x, r, t], k) => (
          <g key={x}>
            <Circle cx={x} cy={110} r={50} c="soil" sw={2} fill={k ? '~soil' : 'paper'} />
            <Circle cx={x} cy={110} r={r} c="ink" sw={2} fill="~grey" />
            <Text x={x} y={190} a="middle" s={12} b>{t}</Text>
          </g>
        ))}
        <Text x={250} y={214} a="middle" s={12} c="mute">{'section résiduelle d’acier (gris) et rouille (brun), échelle exagérée'}</Text>
        <Text x={250} y={36} a="middle" s={12}>{'M = 55,85 g/mol, n = 2, F = 96 485 C/mol'}</Text>
      </g>
    ),
    notes: ['La masse d’acier dissoute est proportionnelle au courant de corrosion et au temps : on mesure ce courant sur ouvrage pour estimer la perte de section.'],
    caption: 'Un courant de corrosion, même minuscule, ronge l’armature année après année.',
  },
  {
    id: 'decarbonatation-co2',
    title: 'Décarbonatation : le CO₂ du ciment',
    steps: ['formulas', 'simple_examples'],
    formula: ['\\mathrm{CaCO_{3}} \\xrightarrow{\\approx 900\\ °C} \\mathrm{CaO} + \\mathrm{CO_{2}} \\qquad m_{CO_2} = 1\\,000 \\times \\frac{44}{100} = 440\\ \\text{kg}'],
    h: 220,
    draw: () => (
      <g>
        <Rect x={30} y={90} w={120} h={60} c="ink" sw={2} fill="~grey" />
        <Text x={90} y={118} a="middle" s={13} b>CaCO₃</Text>
        <Text x={90} y={138} a="middle" s={12}>1 000 kg</Text>
        <Arrow x1={156} y1={120} x2={236} y2={120} c="red" w={2.6} hs={10} />
        <Text x={196} y={110} a="middle" s={12} c="red">900 °C</Text>
        <Rect x={244} y={90} w={110} h={60} c="ink" sw={2} fill="~orange" />
        <Text x={299} y={118} a="middle" s={13} b>CaO</Text>
        <Text x={299} y={138} a="middle" s={12}>560 kg</Text>
        <Path d="M 380 140 q 20 -30 0 -50 q -20 -20 10 -50" c="grey" w={3} />
        <Text x={410} y={70} s={13} c="grey" b>{'CO₂\n440 kg'}</Text>
        <Text x={250} y={196} a="middle" s={12} c="mute">avant même de brûler le moindre combustible</Text>
      </g>
    ),
    notes: ['C’est la principale source de CO₂ du ciment : remplacer une partie du clinker (laitier, cendres, argiles calcinées) réduit l’empreinte.'],
    caption: 'Bilan de masse de la cuisson du calcaire.',
  },
  {
    id: 'rapport-ec',
    title: 'Contrôler le rapport eau/ciment (XC4)',
    steps: ['simple_examples'],
    formula: ['\\frac{E}{C} = \\frac{180}{350} = 0{,}51 > 0{,}50'],
    h: 220,
    draw: () => {
      const X = v => 60 + (v - 0.4) * 2000;
      return (
        <g>
          <Line x1={X(0.4)} y1={100} x2={X(0.6)} y2={100} c="ink" w={2} />
          {[0.4, 0.45, 0.5, 0.55, 0.6].map(v => <Text key={v} x={X(v)} y={120} a="middle" s={11}>{v.toFixed(2).replace('.', ',')}</Text>)}
          <Rect x={X(0.4)} y={88} w={X(0.5) - X(0.4)} h={12} c="green" sw={0} fill="~green" />
          <Rect x={X(0.5)} y={88} w={X(0.6) - X(0.5)} h={12} c="red" sw={0} fill="~red" />
          <Dot x={X(0.514)} y={94} r={7} c="red" />
          <Text x={X(0.514)} y={76} a="middle" s={12} c="red" b>350 kg + 180 L : 0,51</Text>
          <Dot x={X(0.5)} y={94} r={6} c="green" />
          <Text x={X(0.5)} y={150} a="middle" s={12} c="green" b>{'360 kg : 0,50 ✓'}</Text>
          <Text x={X(0.45)} y={180} a="middle" s={12} c="green">{'ou superplastifiant :\nmoins d’eau'}</Text>
          <Text x={X(0.57)} y={170} a="middle" s={12} c="red">{'trop d’eau : pores,\ncarbonatation plus rapide'}</Text>
        </g>
      );
    },
    notes: ['L’eau en excès laisse des pores qui facilitent l’entrée du CO₂ et des chlorures : la limite E/C est une exigence de durabilité.'],
    caption: 'Le béton commandé doit respecter le E/C maximal de sa classe d’exposition.',
  },
  {
    id: 'parking-1975',
    title: 'Parking de 1975 : carbonatation et sels de déneigement',
    steps: ['real_examples'],
    formula: ['K = \\frac{25}{\\sqrt{45}} \\approx 3{,}7\\ \\text{mm}/\\sqrt{\\text{an}}'],
    h: 250,
    draw: () => (
      <g>
        <Rect x={30} y={70} w={420} h={110} c="ink" sw={2} fill="pat:concrete" />
        <Rect x={30} y={70} w={420} h={50} c="orange" sw={0} fill="~orange" />
        <Line x1={30} y1={120} x2={450} y2={120} c="orange" w={2.4} dash="6 4" />
        {[90, 170, 250, 330, 410].map(x => <Circle key={x} cx={x} cy={104} r={7} c="ink" sw={1.6} fill="txt" />)}
        <Path d="M 160 70 l 8 -20 l 14 6 l 10 -16" c="red" w={2.2} />
        <Text x={200} y={40} s={12} c="red" b>épaufrure, armature apparente</Text>
        {[60, 120, 300, 380].map(x => <Text key={x} x={x} y={62} a="middle" s={12} c="water" b>Cl⁻</Text>)}
        <Text x={444} y={114} a="end" s={11} c="orange" b>front carbonaté : 25 mm</Text>
        <Text x={444} y={170} a="end" s={11}>enrobage réel : 15 à 20 mm</Text>
        <Text x={240} y={204} a="middle" s={12}>{'chlorures jusqu’à 0,8 % du ciment (seuil ≈ 0,4 %)'}</Text>
        <Text x={240} y={228} a="middle" s={12} c="green">{'réparation : purge, passivation, mortier NF EN 1504, imperméabilisation'}</Text>
      </g>
    ),
    notes: ['Les deux mécanismes se cumulent : enrobage trop faible dès la construction et aucune protection contre les sels.'],
    caption: 'Rive de dalle diagnostiquée : front de carbonatation au-delà des armatures et chlorures en excès.',
  },
];
