// Plates — Module 3 · Polymères, adjuvants, résines & composites
import { Circle, Line, Path, Plot, Poly, Rect, Text } from '../../components/figures/ink.jsx';
import { Bars, BeamScheme } from '../../components/figures/kit.jsx';

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
    steps: ['formulas'],
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
];
