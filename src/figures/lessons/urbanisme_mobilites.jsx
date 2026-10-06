// Plates — Module 45 · Espaces publics et mobilités douces
import { Building, Car, Circle, Dim, Line, Path, Person, Plot, Poly, Rect, Text, Tree } from '../../components/figures/kit.jsx';

/** Bicycle seen from the side, wheels on y. */
function Bike({ x, y, c = 'green' }) {
  return (
    <g>
      <Circle cx={x} cy={y - 8} r={8} c={c} sw={1.8} />
      <Circle cx={x + 26} cy={y - 8} r={8} c={c} sw={1.8} />
      <Path d={`M${x},${y - 8} L${x + 9},${y - 22} L${x + 21},${y - 22} L${x + 26},${y - 8} M${x + 9},${y - 22} L${x + 13},${y - 8} L${x + 21},${y - 22}`} c={c} w={1.6} />
      <Circle cx={x + 12} cy={y - 34} r={4} c={c} sw={1.6} fill="paper" />
      <Line x1={x + 12} y1={y - 30} x2={x + 12} y2={y - 22} c={c} w={1.6} />
    </g>
  );
}

export default [
  {
    id: 'rue-16m',
    title: 'Coupe d’une rue partagée de 16 m',
    steps: ['theory', 'stepbystep'],
    formula: ['2 \\times 2{,}50 + 2 \\times 1{,}80 + 2 \\times 2{,}90 + 1{,}60 = 16{,}00\\ \\text{m}'],
    h: 300,
    draw: () => {
      const k = 28;
      const x0 = 26;
      const parts = [[2.5, 'trottoir', 'grey'], [1.8, 'piste', 'green'], [2.9, 'voie', 'txt'], [2.9, 'voie', 'txt'], [1.6, 'stat./arbre', 'soil'], [1.8, 'piste', 'green'], [2.5, 'trottoir', 'grey']];
      let x = x0;
      return (
        <g>
          <Building x={0} y={210} w={26} floors={7} fh={24} />
          <Building x={474} y={210} w={26} floors={7} fh={24} />
          {parts.map(([w, lab, c], i) => {
            const px = x;
            x += w * k;
            const h = c === 'grey' ? 12 : c === 'green' ? 8 : 4;
            return (
              <g key={i}>
                <Rect x={px} y={210 - h} w={w * k} h={h} c={c} sw={1.4} fill={`~${c}`} />
                <Text x={px + (w * k) / 2} y={238} a="middle" s={10} c={c}>{lab}</Text>
                <Text x={px + (w * k) / 2} y={254} a="middle" s={10} c="mute">{String(w).replace('.', ',')}</Text>
              </g>
            );
          })}
          <Person x={60} y={198} k={0.8} />
          <Bike x={105} y={202} />
          <Car x={170} y={206} w={60} />
          <Car x={262} y={206} w={60} c="grey" />
          <Tree x={347} y={206} k={0.9} />
          <Bike x={373} y={202} />
          <Person x={440} y={198} k={0.8} />
          <Dim x1={26} y1={278} x2={474} y2={278} label="16,00 m entre façades" side={-1} s={12} />
        </g>
      );
    },
    caption: 'Chaque usage a sa place : piétons, cyclistes, voitures, arbres et stationnement.',
  },
  {
    id: 'distance-arret',
    title: 'Distance d’arrêt selon la vitesse',
    steps: ['formulas', 'simple_examples'],
    formula: ['d = v\\, t_r + \\frac{v^2}{2a}'],
    h: 290,
    draw: () => (
      <Plot x={60} y={30} w={380} h={200} xr={[0, 70]} yr={[0, 50]} xl="km/h" yl="d (m)"
        xt={[10, 20, 30, 50, 70].map(v => [v, String(v)])} yt={[10, 20, 30, 40].map(v => [v, String(v)])} grid
      >
        {(sx, sy) => {
          const d = V => { const v = V / 3.6; return v * 1 + (v * v) / 12; };
          const pts = Array.from({ length: 71 }, (_, i) => [sx(i), sy(d(i))]);
          return (
            <g>
              <Poly pts={pts} c="ink" w={2.8} />
              {[30, 50].map(V => (
                <g key={V}>
                  <Line x1={sx(V)} y1={sy(0)} x2={sx(V)} y2={sy(d(V))} c={V === 30 ? 'green' : 'red'} w={1.6} dash="5 4" />
                  <Text x={sx(V) + 6} y={sy(d(V)) - 6} s={13} c={V === 30 ? 'green' : 'red'}>{`${V} km/h : ${Math.round(d(V))} m`}</Text>
                </g>
              ))}
            </g>
          );
        }}
      </Plot>
    ),
    notes: ['Temps de réaction 1 s, décélération 6 m/s².'],
    caption: 'À 50 km/h, la distance d’arrêt est le double de celle à 30 km/h.',
  },
  {
    id: 'accessibilite-trottoir',
    title: 'Un trottoir accessible',
    steps: ['diagrams'],
    h: 270,
    draw: () => (
      <g>
        <Rect x={40} y={40} w={420} h={150} c="grey" sw={1.6} fill="~grey" />
        <Rect x={40} y={190} w={420} h={50} c="txt" sw={0} fill="~txt" />
        <Rect x={40} y={40} w={420} h={30} c="ink" sw={0} fill="~ink" />
        <Text x={250} y={60} a="middle" s={11} c="ink">façades</Text>
        <Rect x={40} y={70} w={420} h={60} c="green" sw={1.6} dash="6 4" />
        <Text x={250} y={104} a="middle" s={12} c="green">cheminement libre ≥ 1,40 m</Text>
        {[90, 210, 330, 430].map(x => <Rect key={x} x={x} y={140} w={14} h={14} c="soil" sw={1.4} fill="~soil" />)}
        <Text x={200} y={176} s={11} c="soil">mobilier aligné (bande de service)</Text>
        <Rect x={240} y={186} w={60} h={8} c="orange" sw={1.2} fill="pat:gravel" bg="~orange" />
        <Text x={270} y={256} a="middle" s={11} c="orange">abaissé + bande d’éveil de vigilance</Text>
        <Text x={60} y={214} s={11} c="mute">chaussée</Text>
      </g>
    ),
    caption: 'Vue en plan : le cheminement piéton reste continu, sans obstacle ni ressaut.',
  },
  {
    id: 'abords-ecole',
    title: 'Abords d’école : avant et après',
    steps: ['practical_case'],
    h: 260,
    draw: () => (
      <g>
        <Text x={120} y={24} a="middle" s={14} b c="red">avant : 9 m de chaussée</Text>
        <Rect x={20} y={40} w={200} h={30} c="grey" sw={1.4} fill="~grey" />
        <Rect x={20} y={70} w={200} h={120} c="txt" sw={0} fill="~txt" />
        <Rect x={20} y={190} w={200} h={30} c="grey" sw={1.4} fill="~grey" />
        <Text x={120} y={136} a="middle" s={12}>50 km/h · traversée 9 s</Text>
        <Text x={370} y={24} a="middle" s={14} b c="green">après : parvis et zone 30</Text>
        <Rect x={270} y={40} w={200} h={60} c="grey" sw={1.4} fill="~grey" />
        <Rect x={270} y={100} w={200} h={80} c="txt" sw={0} fill="~txt" />
        <Rect x={330} y={100} w={80} h={80} c="orange" sw={1.6} fill="pat:hatch" bg="~orange" />
        <Text x={370} y={145} a="middle" s={11} c="orange">plateau</Text>
        <Rect x={270} y={180} w={200} h={40} c="grey" sw={1.4} fill="~grey" />
        <Person x={300} y={92} k={0.6} />
        <Person x={320} y={92} k={0.5} />
        <Text x={370} y={240} a="middle" s={12}>traversée 6 s</Text>
      </g>
    ),
    caption: 'Le parvis élargi accueille l’attente ; le plateau et la chaussée réduite modèrent la vitesse.',
  },
];
