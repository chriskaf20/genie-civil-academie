// Plates — Module 3 · Polymères, adjuvants, résines & composites
import { Circle, Line, Path, Plot, Poly, Rect, Text } from '../../components/figures/ink.jsx';
import { Bars, BeamScheme } from '../../components/figures/kit.jsx';
import { Arrow, Building, Dot, fnPts } from '../../components/figures/kit.jsx';

const FLOC = [[60, 80], [82, 92], [72, 112], [96, 110], [52, 104], [110, 86], [140, 150], [160, 140], [150, 168], [175, 162], [60, 170], [84, 178]];
const DISP = [[255, 70], [320, 74], [390, 68], [450, 82], [270, 130], [340, 128], [410, 136], [460, 140], [250, 186], [320, 190], [390, 180], [455, 194]];

export default [
  {
    id: 'superplastifiant',
    title: 'Effet d’un superplastifiant',
    steps: ['theory'],
    formula: ['E = E_0\\,(1 - r)'],
    h: 270,
    draw: () => (
      <g>
        <Rect x={20} y={40} w={200} h={180} c="water" sw={1.6} fill="~water" rx={8} />
        <Rect x={240} y={40} w={240} h={180} c="water" sw={1.6} fill="~water" rx={8} />
        <Text x={120} y={28} a="middle" s={15} b c="ink">sans adjuvant : floculation</Text>
        <Text x={360} y={28} a="middle" s={15} b c="ink">avec superplastifiant : dispersion</Text>
        {FLOC.map(([x, y]) => <Circle key={`${x}-${y}`} cx={x} cy={y} r={11} c="grey" sw={1.6} fill="~grey" />)}
        <Path d="M60,92 q12,6 22,0" c="water" w={2} />
        <Text x={120} y={236} a="middle" s={13} c="water">eau piégée dans les amas</Text>
        {DISP.map(([x, y]) => (
          <g key={`${x}-${y}`}>
            <Circle cx={x} cy={y} r={11} c="grey" sw={1.6} fill="~grey" />
            {[0, 1, 2, 3, 4, 5].map(k => {
              const a = (k / 6) * 2 * Math.PI;
              return <Path key={k} d={`M${x + Math.cos(a) * 11},${y + Math.sin(a) * 11} l${Math.cos(a) * 8},${Math.sin(a) * 8}`} c="violet" w={1.4} />;
            })}
          </g>
        ))}
        <Text x={360} y={236} a="middle" s={13} c="violet">polymères adsorbés : les grains se repoussent</Text>
      </g>
    ),
    notes: ['L’eau libérée améliore l’ouvrabilité : on peut donc réduire l’eau de 15 à 40 % à ouvrabilité égale.'],
    caption: 'Les chaînes de polymère adsorbées écartent les grains de ciment et libèrent l’eau piégée.',
  },
  {
    id: 'loi-des-melanges',
    title: 'Composite : fibres dans une matrice',
    steps: ['formulas', 'theory', 'simple_examples'],
    formula: ['E_c = V_f E_f + (1 - V_f) E_m'],
    h: 290,
    draw: () => (
      <g>
        <Rect x={20} y={50} w={170} h={170} c="orange" sw={2} fill="~orange" />
        {Array.from({ length: 6 }, (_, i) => Array.from({ length: 6 }, (_, j) => (
          <Circle key={`${i}${j}`} cx={36 + i * 28} cy={66 + j * 28} r={10} c="txt" sw={1.4} fill="txt" />
        )))}
        <Text x={105} y={40} a="middle" s={14} b>coupe d’une lamelle</Text>
        <Text x={105} y={244} a="middle" s={13} c="mute">{'fibres de carbone (noir)\nmatrice époxy (orange)'}</Text>
        <Plot x={260} y={40} w={200} h={180} xr={[0, 1]} yr={[0, 240]} xl="V_f" yl="E_c (GPa)"
          xt={[[0.6, '0,6'], [1, '1']]} yt={[[140, '140'], [230, '230']]} grid
        >
          {(sx, sy) => (
            <g>
              <Line x1={sx(0)} y1={sy(3.5)} x2={sx(1)} y2={sy(230)} c="ink" w={2.6} />
              <Circle cx={sx(0.6)} cy={sy(139.4)} r={6} c="red" sw={2} fill="paper" />
              <Text x={sx(0.6) - 8} y={sy(139.4) - 10} a="end" s={13} c="red">lamelle : 139 GPa</Text>
            </g>
          )}
        </Plot>
      </g>
    ),
    notes: ['Avec 60 % de fibres, la lamelle atteint environ deux tiers du module de l’acier pour un cinquième de sa masse.'],
    caption: 'Le module longitudinal varie linéairement avec la fraction volumique de fibres.',
  },
  {
    id: 'effet-ec',
    title: 'Superplastifiant : moins d’eau, même ciment',
    steps: ['stepbystep'],
    formula: ['E = 190 \\times 0{,}75 = 142{,}5\\ \\text{L/m}^3'],
    h: 260,
    draw: () => (
      <g>
        <Bars x={50} y={40} w={180} h={160} max={220} bars={[
          { label: 'sans', v: 190, c: 'water', txt: '190 L' },
          { label: 'avec', v: 142.5, c: 'green', txt: '142,5 L' },
        ]} unit="eau par m³" />
        <Bars x={290} y={40} w={180} h={160} max={0.62} bars={[
          { label: 'sans', v: 0.54, c: 'red', txt: '0,54' },
          { label: 'avec', v: 0.41, c: 'green', txt: '0,41' },
        ]} unit="rapport E/C" />
        <Text x={250} y={244} a="middle" s={14}>350 kg de ciment · adjuvant 3,5 kg/m³ · résistance ≈ +46 %</Text>
      </g>
    ),
    caption: 'Réduction d’eau de 25 % à ouvrabilité égale.',
  },
  {
    id: 'lamelle-carbone',
    title: 'Renforcer une poutre par lamelle de carbone',
    steps: ['real_examples'],
    h: 260,
    draw: () => (
      <g>
        <BeamScheme x1={40} x2={330} y={110} loads={[{ type: 'udl', h: 34, label: 'q' }]} names={['', '']} />
        <Rect x={60} y={115} w={250} h={5} c="txt" sw={1.2} fill="txt" />
        <Text x={185} y={150} a="middle" s={14}>lamelle collée en sous-face</Text>
        <Rect x={380} y={50} w={70} h={120} c="grey" sw={2} fill="pat:concrete" bg="~grey" />
        <Rect x={385} y={170} w={60} h={6} c="txt" sw={1} fill="txt" />
        {[395, 415, 435].map(x => <Circle key={x} cx={x} cy={154} r={6} c="red" sw={1.6} fill="red" />)}
        <Line x1={385} y1={182} x2={445} y2={182} c="violet" w={1} />
        <Text x={415} y={204} a="middle" s={13} c="violet">colle époxy</Text>
        <Text x={415} y={40} a="middle" s={13}>coupe</Text>
        <Poly pts={[[40, 230], [330, 230]]} c="grey" w={1} />
        <Text x={40} y={248} s={13} c="mute">+20 % de capacité en flexion, sans perte de hauteur libre</Text>
      </g>
    ),
    notes: ['La lamelle travaille en traction comme une armature supplémentaire placée au plus loin de l’axe neutre.'],
    caption: 'Parking des années 1980 adapté à des véhicules plus lourds.',
  },
  {
    id: 'beton-bas-carbone',
    title: 'Moins de ciment à E/C constant',
    steps: ['practical_case'],
    formula: ['C = \\frac{148}{0{,}51} = 290\\ \\text{kg/m}^3'],
    h: 240,
    draw: () => (
      <Bars x={80} y={40} w={340} h={150} max={420} ticks={[100, 200, 300, 400]} unit="ciment (kg/m³)" bars={[
        { label: 'formule initiale', v: 360, c: 'grey', txt: '360' },
        { label: 'avec superplastifiant', v: 290, c: 'green', txt: '290' },
      ]} />
    ),
    notes: ['Gain : 70 kg de ciment par m³, soit environ 60 kg de CO₂ — à condition de respecter le liant minimal de l’EN 206.'],
    caption: 'Béton C30/37 : même rapport E/C, donc même résistance, avec moins de ciment.',
  },
  {
    id: 'polymere-tg-fluage',
    title: 'Polymères : transition vitreuse et fluage',
    steps: ['theory'],
    h: 260,
    draw: () => (
      <g>
        <Text x={120} y={22} a="middle" s={12} b>rigidité selon la température</Text>
        <Line x1={30} y1={200} x2={220} y2={200} c="ink" w={1.4} />
        <Line x1={30} y1={200} x2={30} y2={40} c="ink" w={1.4} />
        <Path d="M 30 60 L 110 66 Q 130 70 140 130 Q 150 180 170 184 L 220 188" c="red" w={2.8} />
        <Line x1={140} y1={40} x2={140} y2={200} c="grey" w={1.2} dash="4 4" />
        <Text x={144} y={56} s={12} c="red" b>{'T_g'}</Text>
        <Text x={60} y={84} s={11}>vitreux, rigide</Text>
        <Text x={150} y={176} s={11}>caoutchouteux</Text>
        <Text x={124} y={222} a="middle" s={11} c="mute">température →</Text>
        <Text x={370} y={22} a="middle" s={12} b>fluage sous charge constante</Text>
        <Line x1={270} y1={200} x2={470} y2={200} c="ink" w={1.4} />
        <Line x1={270} y1={200} x2={270} y2={40} c="ink" w={1.4} />
        <Line x1={270} y1={150} x2={270} y2={120} c="water" w={2.8} />
        <Path d="M 270 120 Q 320 84 380 76 Q 430 70 470 66" c="water" w={2.8} />
        <Text x={280} y={142} s={11} c="water">instantané</Text>
        <Text x={420} y={60} a="middle" s={11} c="water">différé (fluage)</Text>
        <Text x={370} y={222} a="middle" s={11} c="mute">temps →</Text>
      </g>
    ),
    notes: ['Au-dessus de T_g, une résine perd l’essentiel de sa rigidité : d’où la protection au feu des renforts collés. Sous charge durable, la déformation continue de croître.'],
    caption: 'Deux traits du comportement viscoélastique des polymères.',
  },
  {
    id: 'adjuvants-prise',
    title: 'Retardateur et accélérateur de prise',
    steps: ['theory'],
    h: 260,
    draw: () => (
      <Plot x={70} y={30} w={380} h={180} xr={[0, 12]} yr={[0, 1]} yl="raidissement"
        xt={[0, 2, 4, 6, 8, 10, 12].map(v => [v, `${v} h`])} yt={[]}
      >
        {(sx, sy) => {
          const s = (t, t0) => 1 / (1 + Math.exp(-(t - t0) * 1.6));
          return (
            <g>
              <Poly pts={fnPts(t => s(t, 2.5), 0, 12, sx, sy, 60)} c="red" w={2.6} />
              <Poly pts={fnPts(t => s(t, 5), 0, 12, sx, sy, 60)} c="ink" w={2.6} />
              <Poly pts={fnPts(t => s(t, 8), 0, 12, sx, sy, 60)} c="water" w={2.6} />
              <Text x={sx(2.7)} y={sy(0.86)} a="end" s={12} c="red" b>accéléré</Text>
              <Text x={sx(5.4)} y={sy(0.5)} s={12} b>normal</Text>
              <Text x={sx(8.4)} y={sy(0.3)} s={12} c="water" b>retardé</Text>
              <Text x={sx(11.8)} y={sy(0.06)} a="end" s={11} c="mute">{'décoffrage rapide (accélérateur) ·\nbétonnage par temps chaud (retardateur)'}</Text>
            </g>
          );
        }}
      </Plot>
    ),
    notes: ['Les adjuvants de prise décalent le moment où le béton durcit sans changer sa résistance finale.'],
    caption: 'Évolution schématique du raidissement d’un béton selon l’adjuvant de prise.',
  },
  {
    id: 'geosynthetiques',
    title: 'Géosynthétiques : séparer, renforcer, étancher',
    steps: ['theory'],
    h: 250,
    draw: () => (
      <g>
        {[[20, 'géotextile : séparation'], [180, 'géogrille : renforcement'], [340, 'géomembrane : étanchéité']].map(([x, t]) => <Text key={t} x={x + 70} y={24} a="middle" s={12} b>{t}</Text>)}
        <Rect x={20} y={60} w={140} h={50} c="grey" sw={1.4} fill="pat:gravel" />
        <Rect x={20} y={110} w={140} h={80} c="soil" sw={1.4} fill="pat:clay" />
        <Line x1={20} y1={110} x2={160} y2={110} c="red" w={3} dash="8 3" />
        <Text x={90} y={210} a="middle" s={11} c="mute">{'empêche la grave de\ns’enfoncer dans l’argile'}</Text>
        <Rect x={200} y={60} w={110} h={130} c="soil" sw={1.4} fill="pat:soil" />
        <Line x1={200} y1={60} x2={200} y2={190} c="ink" w={3} />
        {[80, 105, 130, 155, 180].map(y => <Line key={y} x1={200} y1={y} x2={292} y2={y} c="red" w={2.4} />)}
        {[70, 95, 120, 145, 170].map(y => <Rect key={y} x={192} y={y} w={8} h={20} c="ink" sw={1.2} fill="~grey" />)}
        <Text x={250} y={210} a="middle" s={11} c="mute">{'nappes ancrées dans le\nremblai : parement vertical'}</Text>
        <Path d="M 350 70 L 380 170 L 450 170 L 480 70" c="red" w={3} />
        <Rect x={372} y={110} w={86} h={58} c="water" sw={0} fill="~water" />
        <Text x={415} y={210} a="middle" s={11} c="mute">{'bassin ou décharge :\nliner PEHD'}</Text>
      </g>
    ),
    notes: ['Les géosynthétiques (PP, PET, PEHD) remplacent ou allègent des solutions minérales coûteuses en matériaux.'],
    caption: 'Trois familles de géosynthétiques et leurs fonctions.',
  },
  {
    id: 'dosage-adjuvant',
    title: 'Dosage d’un adjuvant',
    steps: ['formulas', 'simple_examples'],
    formula: ['m_{adj} = \\frac{p}{100}\\,C = 0{,}0005 \\times 380 = 0{,}19\\ \\text{kg/m}^3'],
    h: 210,
    draw: () => (
      <g>
        <Rect x={60} y={60} w={120} h={110} rx={8} c="ink" sw={2} fill="~grey" />
        <Text x={120} y={110} a="middle" s={14} b>ciment</Text>
        <Text x={120} y={132} a="middle" s={13}>380 kg</Text>
        <Text x={230} y={124} a="middle" s={20} b>×</Text>
        <Text x={290} y={124} a="middle" s={16} c="red" b>0,05 %</Text>
        <Text x={340} y={124} a="middle" s={20} b>=</Text>
        <Rect x={380} y={110} w={40} h={44} rx={4} c="water" sw={2} fill="~water" />
        <Text x={400} y={180} a="middle" s={13} c="water" b>190 g</Text>
        <Text x={250} y={36} a="middle" s={12} c="mute">entraîneur d’air, par mètre cube de béton</Text>
      </g>
    ),
    notes: ['Le dosage s’exprime en % de la masse de ciment ; pour de si petites quantités, seul un doseur automatique est fiable.'],
    caption: 'Un pourcentage minuscule du ciment suffit à modifier le béton.',
  },
  {
    id: 'dilatation-pvc',
    title: 'Dilatation d’une descente en PVC',
    steps: ['formulas', 'simple_examples'],
    formula: ['\\Delta L = \\alpha_p\\,L\\,\\Delta T = 80 \\times 10^{-6} \\times 12 \\times 40 = 0{,}038\\ \\text{m}'],
    h: 270,
    draw: () => (
      <g>
        <Building x={140} y={250} w={160} floors={4} fh={50} />
        <Rect x={316} y={50} w={12} h={200} c="grey" sw={1.6} fill="~grey" />
        {[100, 150, 200].map(y => <Rect key={y} x={312} y={y - 8} w={20} h={16} c="red" sw={1.8} fill="~red" />)}
        <Text x={340} y={100} s={12} c="red" b>manchon de dilatation</Text>
        <Text x={340} y={150} s={12} c="red">à chaque étage</Text>
        <Arrow x1={300} y1={51} x2={300} y2={249} c="txt" w={1.2} hs={5} both />
        <Text x={296} y={74} a="end" s={12}>12 m</Text>
        <Text x={340} y={220} s={12}>{'α = 80 × 10⁻⁶ /°C\nΔT = 40 °C → 38 mm'}</Text>
      </g>
    ),
    notes: ['Le PVC se dilate environ 7 fois plus que l’acier : sans manchons, la descente se cintre ou arrache ses colliers.'],
    caption: 'Descente d’eaux pluviales de 12 m en façade exposée au soleil.',
  },
  {
    id: 'polymeres-chantier',
    title: 'Les polymères sur un chantier',
    steps: ['diagrams'],
    h: 280,
    draw: () => (
      <g>
        <Rect x={20} y={230} w={460} h={30} c="soil" sw={0} fill="pat:soil" />
        <Rect x={150} y={80} w={200} h={150} c="ink" sw={2} fill="~grey" />
        <Rect x={146} y={72} w={208} h={8} c="ink" sw={1.4} fill="txt" />
        <Line x1={150} y1={232} x2={350} y2={232} c="red" w={3} dash="8 3" />
        <Rect x={354} y={90} w={8} h={140} c="grey" sw={1.4} fill="~grey" />
        <Rect x={80} y={180} w={50} h={30} rx={6} c="ink" sw={1.6} fill="~orange" />
        <Text x={60} y={60} s={11} b>membrane d’étanchéité SBS</Text>
        <Line x1={150} y1={64} x2={190} y2={74} c="ink" w={1} />
        <Text x={20} y={174} s={11} b>{'béton adjuvanté\n(toupie)'}</Text>
        <Text x={372} y={140} s={11} b>{'descente PVC,\nréseaux PEHD'}</Text>
        <Text x={250} y={250} a="middle" s={11} c="red" b>géotextile sous dallage</Text>
        <Text x={250} y={160} a="middle" s={11}>{'réparations : résines époxy,\ncomposites de carbone'}</Text>
        <Text x={430} y={40} a="middle" s={11}>{'appareils d’appui\nen élastomère (ponts)'}</Text>
        <Rect x={410} y={66} w={40} h={16} c="ink" sw={1.6} fill="~grey" />
        {[70, 74, 78].map(y => <Line key={y} x1={410} y1={y} x2={450} y2={y} c="ink" w={1} />)}
      </g>
    ),
    notes: ['Des adjuvants du béton frais aux membranes et renforts, les polymères sont présents à chaque étape d’un ouvrage.'],
    caption: 'Où trouve-t-on des polymères dans un bâtiment et ses ouvrages annexes ?',
  },
];
