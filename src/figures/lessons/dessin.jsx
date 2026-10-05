// Plates — Module 4 · Dessin technique, cotation & lecture de plans
import { Arrow, Dim, Dot, Line, Poly, Rect, Text } from '../../components/figures/ink.jsx';

const LINES = [
  { name: 'continu fort', w: 3.4, use: 'contours vus et coupés' },
  { name: 'continu fin', w: 1.2, use: 'cotes, hachures, attaches' },
  { name: 'interrompu fin', w: 1.4, dash: '8 5', use: 'arêtes cachées' },
  { name: 'mixte fin', w: 1.2, dash: '16 4 2 4', use: 'axes, symétries' },
  { name: 'mixte fort aux bouts', w: 1.2, dash: '16 4 2 4', ends: true, use: 'trace d’un plan de coupe' },
];
const HATCH = [
  ['pat:concrete', '~grey', 'béton'],
  ['pat:brick', '~soil', 'maçonnerie'],
  ['pat:soil', '~soil', 'terre'],
  ['pat:insul', '~orange', 'isolant'],
  ['pat:wood', '~soil', 'bois'],
];

export default [
  {
    id: 'traits-hachures',
    title: 'Traits et hachures conventionnels',
    steps: ['theory'],
    formula: ['\\text{Réel} = \\text{mesure plan} \\times N \\quad (\\text{échelle } 1/N)'],
    h: 330,
    draw: () => (
      <g>
        {LINES.map((l, i) => {
          const y = 40 + i * 42;
          return (
            <g key={l.name}>
              <Line x1={20} y1={y} x2={150} y2={y} c="txt" w={l.w} dash={l.dash} />
              {l.ends && (
                <>
                  <Line x1={20} y1={y} x2={42} y2={y} c="txt" w={3.6} />
                  <Line x1={128} y1={y} x2={150} y2={y} c="txt" w={3.6} />
                  <Arrow x1={24} y1={y} x2={24} y2={y - 18} c="txt" w={1.6} hs={7} />
                  <Arrow x1={146} y1={y} x2={146} y2={y - 18} c="txt" w={1.6} hs={7} />
                  <Text x={8} y={y - 6} s={12} b>A</Text>
                  <Text x={154} y={y - 6} s={12} b>A</Text>
                </>
              )}
              <Text x={162} y={y - 4} s={14} b c="ink">{l.name}</Text>
              <Text x={162} y={y + 14} s={12} c="mute">{l.use}</Text>
            </g>
          );
        })}
        {HATCH.map(([fill, bg, name], i) => (
          <g key={name}>
            <Rect x={350} y={20 + i * 58} w={60} h={42} c="txt" sw={1.6} fill={fill} bg={bg} />
            <Text x={420} y={46 + i * 58} s={14}>{name}</Text>
          </g>
        ))}
      </g>
    ),
    notes: ['Un trait fort désigne ce que le plan de coupe traverse ; ce qu’on voit au-delà est en trait fin.'],
    caption: 'Les épaisseurs et les motifs de trait sont normalisés (NF EN ISO 128) : ils se lisent comme un langage.',
  },
  {
    id: 'voile-ferraillage',
    title: 'Voile de 6,00 × 2,80 m : coffrage et armatures',
    steps: ['stepbystep'],
    formula: ['S_{coff} = 2 \\times 6{,}00 \\times 2{,}80 = 33{,}60\\ \\text{m}^2', 'V = 3{,}36\\ \\text{m}^3'],
    h: 310,
    draw: () => {
      const x0 = 50;
      const y0 = 60;
      const W = 360;
      const H = 168;
      return (
        <g>
          <Rect x={x0} y={y0} w={W} h={H} c="grey" sw={2.4} fill="~grey" />
          {Array.from({ length: 41 }, (_, i) => (
            <Line key={i} x1={x0 + (W * i) / 40} y1={y0 - (i % 2 ? 0 : 18)} x2={x0 + (W * i) / 40} y2={y0 + H} c="red" w={1.1} />
          ))}
          {Array.from({ length: 15 }, (_, j) => (
            <Line key={j} x1={x0} y1={y0 + 6 + (H - 12) * (j / 14)} x2={x0 + W} y2={y0 + 6 + (H - 12) * (j / 14)} c="ink" w={0.9} />
          ))}
          <Dim x1={x0} y1={y0 + H + 22} x2={x0 + W} y2={y0 + H + 22} label="L = 6,00 m" side={-1} s={14} />
          <Dim x1={x0 - 18} y1={y0 + H} x2={x0 - 18} y2={y0} label="H = 2,80 m" s={14} />
          <Text x={x0 + W + 10} y={y0 + 40} s={13} c="red">{'HA12 e = 15\n2 lits : 82 barres'}</Text>
          <Text x={x0 + W + 10} y={y0 + 110} s={13} c="ink">{'HA10 e = 20'}</Text>
          <Text x={x0 + W + 10} y={y0 - 22} s={12} c="mute">{'attentes\n50 Ø = 0,60 m'}</Text>
        </g>
      );
    },
    notes: ['Nombre de barres = nombre d’intervalles + 1 : 6,00 / 0,15 = 40 intervalles → 41 barres par lit.'],
    caption: 'Élévation d’un voile : barres verticales (rouge, avec attentes) et horizontales (bleu). HA12 : 278,8 m soit 247,6 kg.',
  },
  {
    id: 'plan-coffrage-tremies',
    title: 'Plan de coffrage : poutre noyée et trémies',
    steps: ['real_examples'],
    h: 300,
    draw: () => (
      <g>
        <Rect x={30} y={30} w={440} h={220} c="txt" sw={3} fill="~grey" />
        <Line x1={250} y1={30} x2={250} y2={250} c="txt" w={1.4} dash="10 6" />
        <Line x1={238} y1={30} x2={238} y2={250} c="txt" w={1.4} dash="10 6" />
        <Line x1={262} y1={30} x2={262} y2={250} c="txt" w={1.4} dash="10 6" />
        <Text x={268} y={140} s={13} c="ink" rot={-90}>PN1 (30 × 20) noyée</Text>
        {[[110, 90, 32, 48, 'T1 40×60'], [330, 120, 80, 80, 'T2 100×100']].map(([x, y, w, h, lab]) => (
          <g key={lab}>
            <Rect x={x} y={y} w={w} h={h} c="red" sw={2} />
            <Line x1={x} y1={y} x2={x + w} y2={y + h} c="red" w={1.4} />
            <Line x1={x + w} y1={y} x2={x} y2={y + h} c="red" w={1.4} />
            <Text x={x + w / 2} y={y + h + 18} a="middle" s={13} c="red">{lab}</Text>
          </g>
        ))}
        <Rect x={30} y={30} w={24} h={24} c="txt" sw={0} fill="txt" />
        <Rect x={446} y={30} w={24} h={24} c="txt" sw={0} fill="txt" />
        <Rect x={30} y={226} w={24} h={24} c="txt" sw={0} fill="txt" />
        <Rect x={446} y={226} w={24} h={24} c="txt" sw={0} fill="txt" />
        <Text x={140} y={210} a="middle" s={15} c="ink">dalle pleine e = 20 cm</Text>
        <Text x={250} y={272} a="middle" s={13} c="mute">trémie : rectangle barré d’une croix · poteaux coupés : noircis</Text>
      </g>
    ),
    notes: ['La gaine de désenfumage (T2) impose des renforts d’armatures autour de l’ouverture.'],
    caption: 'Plancher haut du rez-de-chaussée d’une résidence R+3 à Lyon.',
  },
  {
    id: 'poteau-metre',
    title: 'Poteau 40 × 40 cm : coffrage, béton, aciers',
    steps: ['practical_case'],
    formula: ['V = 0{,}40 \\times 0{,}40 \\times 3{,}20 = 0{,}512\\ \\text{m}^3'],
    h: 330,
    draw: () => (
      <g>
        <Rect x={90} y={40} w={60} h={240} c="grey" sw={2.2} fill="~grey" />
        {Array.from({ length: 22 }, (_, i) => <Line key={i} x1={94} y1={46 + i * 10.9} x2={146} y2={46 + i * 10.9} c="ink" w={1} />)}
        <Line x1={100} y1={10} x2={100} y2={280} c="red" w={2} />
        <Line x1={140} y1={10} x2={140} y2={280} c="red" w={2} />
        <Text x={160} y={24} s={12} c="red">{'attentes\n50 Ø = 0,80 m'}</Text>
        <Dim x1={60} y1={280} x2={60} y2={40} label="H = 3,20 m" s={14} />
        <Text x={160} y={160} s={13} c="ink">{'cadres HA8\ne = 15 cm\n22 cadres'}</Text>
        <Rect x={320} y={90} w={110} h={110} c="grey" sw={2.2} fill="pat:concrete" bg="~grey" />
        <Rect x={332} y={102} w={86} h={86} rx={6} c="ink" sw={1.8} />
        {[[342, 112], [408, 112], [342, 178], [408, 178]].map(([x, y]) => <Dot key={`${x}-${y}`} x={x} y={y} r={7} c="red" />)}
        <Dim x1={320} y1={218} x2={430} y2={218} label="40 cm" side={-1} s={13} />
        <Text x={375} y={76} a="middle" s={14} b>coupe : 4 HA16</Text>
        <Text x={250} y={312} a="middle" s={13} c="mute">acier total 39,2 kg → ratio 76,5 kg/m³</Text>
      </g>
    ),
    notes: ['Le coffrage se compte sur les quatre faces : 4 × 0,40 × 3,20 = 5,12 m².'],
    caption: 'Élévation et coupe d’un poteau intérieur, bases du métré.',
  },
];
