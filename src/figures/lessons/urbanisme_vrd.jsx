// Plates — Module 45 · Voirie et réseaux divers
import { Circle, Dim, Line, Path, Poly, Rect, Text } from '../../components/figures/kit.jsx';

/** Pipe cross-section (circle) with label. */
function Net({ x, y, r, c, lab }) {
  return (
    <g>
      <Circle cx={x} cy={y} r={r} c={c} sw={2.2} fill={`~${c}`} />
      <Text x={x} y={y + r + 14} a="middle" s={10} c={c}>{lab}</Text>
    </g>
  );
}

export default [
  {
    id: 'profil-travers',
    title: 'Profil en travers type d’une voie de lotissement',
    steps: ['theory', 'practical_case'],
    h: 320,
    draw: () => (
      <g>
        <Rect x={20} y={80} w={460} h={210} c="soil" sw={0} fill="pat:soil" bg="~soil" />
        <Rect x={20} y={74} w={80} h={10} c="grey" sw={1.4} fill="~grey" />
        <Rect x={100} y={80} w={250} h={14} c="txt" sw={1.4} fill="txt" />
        <Rect x={100} y={94} w={250} h={24} c="grey" sw={1} fill="pat:gravel" bg="~grey" />
        <Rect x={350} y={74} w={80} h={10} c="grey" sw={1.4} fill="~grey" />
        <Path d="M430,80 q25,18 50,0" c="green" w={2.4} />
        <Text x={60} y={66} a="middle" s={11}>trottoir 1,60</Text>
        <Text x={225} y={66} a="middle" s={11}>chaussée 5,00</Text>
        <Text x={390} y={66} a="middle" s={11}>trottoir 1,60</Text>
        <Text x={455} y={66} a="middle" s={11} c="green">noue</Text>
        <Net x={180} y={230} r={14} c="soil" lab="EU Ø200" />
        <Net x={260} y={210} r={18} c="water" lab="EP Ø300" />
        <Net x={60} y={150} r={8} c="water" lab="eau potable" />
        <Net x={380} y={140} r={6} c="red" lab="électricité" />
        <Net x={410} y={140} r={6} c="green" lab="télécom" />
        <Net x={36} y={124} r={5} c="orange" lab="éclairage" />
        <Line x1={160} y1={84} x2={160} y2={210} c="grey" w={1} dash="3 3" />
        <Dim x1={150} y1={94} x2={150} y2={216} label="≥ 0,80" s={11} side={1} />
        <Dim x1={20} y1={308} x2={480} y2={308} label="emprise 10,00 m" side={-1} s={12} />
      </g>
    ),
    notes: ['Les réseaux gravitaires (EU, EP), plus gros et plus profonds, sont sous la chaussée ; les réseaux secs et l’eau potable sous les trottoirs.'],
    caption: 'Chaque réseau a sa place, sa profondeur et sa couverture minimale.',
  },
  {
    id: 'profil-long-eu',
    title: 'Profil en long du collecteur R1 – R3',
    steps: ['stepbystep'],
    formula: ['Z_{aval} = Z_{amont} - i\\,L'],
    h: 300,
    draw: () => {
      const X = [60, 250, 440];
      const TN = [52.4, 52.1, 51.85];
      const FE = [51.1, 50.7, 50.3];
      const Y = z => 260 - (z - 50) * 70;
      return (
        <g>
          <Poly pts={X.map((x, i) => [x, Y(TN[i])])} c="soil" w={2.6} />
          <Text x={70} y={Y(52.4) - 10} s={12} c="soil">terrain fini</Text>
          <Poly pts={X.map((x, i) => [x, Y(FE[i])])} c="ink" w={3} />
          <Poly pts={X.map((x, i) => [x, Y(FE[i] + 0.2)])} c="ink" w={1.4} />
          {X.map((x, i) => (
            <g key={x}>
              <Rect x={x - 10} y={Y(TN[i])} w={20} h={Y(FE[i]) - Y(TN[i])} c="grey" sw={1.6} fill="~grey" />
              <Text x={x} y={Y(TN[i]) - 22} a="middle" s={12} b>{`R${i + 1}`}</Text>
              <Text x={x + 14} y={Y(FE[i]) + 18} s={11} c="ink">{`fe ${FE[i].toFixed(2).replace('.', ',')}`}</Text>
              <Text x={x + 14} y={Y(TN[i]) + 14} s={11} c="soil">{`TN ${TN[i].toFixed(2).replace('.', ',')}`}</Text>
            </g>
          ))}
          <Text x={155} y={Y(50.9) + 22} a="middle" s={12} c="red">1 % sur 40 m</Text>
          <Text x={345} y={Y(50.5) + 22} a="middle" s={12} c="red">1 % sur 40 m</Text>
          <Text x={250} y={290} a="middle" s={11} c="mute">échelle verticale exagérée</Text>
        </g>
      );
    },
    caption: 'Profondeurs de 1,30 à 1,55 m ; couverture minimale 1,09 m en R1.',
  },
  {
    id: 'tranchee',
    title: 'Coupe d’une tranchée de réseau',
    steps: ['diagrams'],
    h: 300,
    draw: () => (
      <g>
        <Rect x={40} y={40} w={420} h={240} c="soil" sw={0} fill="pat:soil" bg="~soil" />
        <Rect x={170} y={40} w={160} h={240} c="soil" sw={0} fill="paper" />
        <Rect x={170} y={40} w={160} h={160} c="soil" sw={1.4} fill="pat:sand" bg="~soil" />
        <Rect x={170} y={200} w={160} h={80} c="grey" sw={1.4} fill="pat:gravel" bg="~grey" />
        <Circle cx={250} cy={240} r={22} c="ink" sw={2.4} fill="paper" />
        <Line x1={170} y1={150} x2={330} y2={150} c="red" w={2} dash="6 4" />
        <Text x={340} y={154} s={11} c="red">grillage avertisseur</Text>
        <Text x={340} y={110} s={11} c="soil">remblai compacté par couches</Text>
        <Text x={340} y={234} s={11} c="grey">lit de pose et enrobage</Text>
        <Rect x={160} y={40} w={10} h={240} c="ink" sw={1.4} fill="~ink" />
        <Rect x={330} y={40} w={10} h={240} c="ink" sw={1.4} fill="~ink" />
        <Text x={40} y={30} s={11} c="ink">blindage obligatoire au-delà de 1,30 m</Text>
        <Dim x1={170} y1={292} x2={330} y2={292} label="b = D + 2 × 0,30" side={-1} s={11} />
      </g>
    ),
    caption: 'Lit de pose, enrobage, grillage avertisseur et remblai compacté protègent le réseau.',
  },
  {
    id: 'ventre-reseau',
    title: 'Contre-pente : un « ventre » dans le collecteur',
    steps: ['real_examples'],
    h: 230,
    draw: () => (
      <g>
        <Path d="M30,80 L180,110 Q260,140 330,116 L470,140" c="ink" w={3} />
        <Path d="M190,112 Q260,138 320,118 L320,124 Q260,146 190,118 Z" c="water" w={1.4} fill="~water" />
        <Text x={260} y={170} a="middle" s={12} c="red">tassement du lit de pose : 6 cm</Text>
        <Text x={260} y={190} a="middle" s={12} c="water">eaux stagnantes et dépôts</Text>
        <Text x={60} y={60} s={12}>pente prévue 1 %</Text>
      </g>
    ),
    caption: 'L’inspection caméra avant réception aurait détecté le défaut.',
  },
];
