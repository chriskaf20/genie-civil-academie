// Plates — Module 6 · Hydrostatique : pression, poussée, sous-pression, flottaison
import { Arrow, Dim, Force, Ground, Line, Poly, Rect, Text, WaterLevel, SoilLayers } from '../../components/figures/kit.jsx';

export default [
  {
    id: 'poussee-paroi',
    title: 'Pression de l’eau sur une paroi verticale',
    steps: ['theory'],
    formula: ['p = \\rho g h', 'F = \\tfrac12 \\rho g H^2 b'],
    h: 300,
    draw: () => (
      <g>
        <Rect x={80} y={70} w={170} h={180} c="water" sw={0} fill="~water" />
        <WaterLevel x={110} y={70} x1={80} x2={250} />
        <Rect x={250} y={40} w={24} h={230} c="grey" sw={2} fill="pat:concrete" bg="~grey" />
        <Rect x={60} y={250} w={214} h={20} c="grey" sw={2} fill="pat:concrete" bg="~grey" />
        <Poly pts={[[274, 70], [274, 250], [400, 250]]} c="ink" w={2.4} fill="~ink" />
        {[0.25, 0.5, 0.75, 1].map(t => (
          <Arrow key={t} x1={274 + 126 * t} y1={70 + 180 * t} x2={278} y2={70 + 180 * t} c="ink" w={1.4} hs={7} />
        ))}
        <Text x={404} y={254} s={15} c="ink">p = ρgH</Text>
        <Arrow x1={440} y1={190} x2={282} y2={190} c="red" w={3.2} hs={12} />
        <Text x={444} y={194} s={16} c="red" b>F</Text>
        <Dim x1={470} y1={250} x2={470} y2={190} label="H/3" s={13} side={-1} />
        <Dim x1={40} y1={250} x2={40} y2={70} label="H" s={15} />
        <Text x={120} y={160} s={13} c="mute">{'+ 10 kPa\npar mètre'}</Text>
      </g>
    ),
    notes: ['La pression ne dépend que de la profondeur : elle croît de 10 kPa par mètre d’eau.'],
    caption: 'Diagramme triangulaire des pressions et résultante appliquée au tiers inférieur.',
  },
  {
    id: 'vanne-immergee',
    title: 'Vanne rectangulaire immergée',
    steps: ['formulas'],
    formula: ['F = \\rho g h_G A = 9{,}81 \\times 2{,}0 \\times 3{,}0 = 58{,}9\\ \\text{kN}', 'y_P = y_G + \\frac{I_G}{y_G A} = 2{,}17\\ \\text{m}'],
    h: 300,
    draw: () => {
      const s = 55;
      const y0 = 40;
      return (
        <g>
          <Rect x={60} y={y0} w={180} h={3.4 * s} c="water" sw={0} fill="~water" />
          <WaterLevel x={90} y={y0} x1={60} x2={240} />
          <Rect x={240} y={y0} w={14} h={3.4 * s} c="grey" sw={1.6} fill="pat:concrete" bg="~grey" />
          <Rect x={240} y={y0 + s} w={14} h={2 * s} c="red" sw={2.4} fill="~red" />
          <Poly pts={[[254, y0 + s], [254 + 0.55 * s, y0 + s], [254 + 1.65 * s, y0 + 3 * s], [254, y0 + 3 * s]]} c="ink" w={2.2} fill="~ink" />
          <Text x={254 + 0.55 * s + 4} y={y0 + s - 4} s={13} c="ink">ρg·1,0</Text>
          <Text x={254 + 1.65 * s + 4} y={y0 + 3 * s + 4} s={13} c="ink">ρg·3,0</Text>
          <Line x1={230} y1={y0 + 2 * s} x2={400} y2={y0 + 2 * s} c="grey" w={1} dash="4 4" />
          <Text x={404} y={y0 + 2 * s + 4} s={13} c="mute">G (2,00 m)</Text>
          <Arrow x1={430} y1={y0 + 2.17 * s} x2={262} y2={y0 + 2.17 * s} c="red" w={3} hs={11} />
          <Text x={404} y={y0 + 2.17 * s + 22} s={14} c="red">P (2,17 m)</Text>
          <Dim x1={40} y1={y0 + s} x2={40} y2={y0} label="1,0" s={13} />
          <Dim x1={40} y1={y0 + 3 * s} x2={40} y2={y0 + s} label="2,0" s={13} />
          <Text x={150} y={y0 + 3.4 * s + 20} a="middle" s={13} c="mute">vanne 1,5 m de large</Text>
        </g>
      );
    },
    notes: ['Le centre de poussée P est toujours sous le centre de gravité G de la surface.'],
    caption: 'Le diagramme trapézoïdal donne une résultante appliquée un peu sous le milieu de la vanne.',
  },
  {
    id: 'mur-reservoir',
    title: 'Mur de réservoir en console',
    steps: ['stepbystep'],
    formula: ['F = \\tfrac12 \\times 9{,}81 \\times 3^2 = 44{,}1\\ \\text{kN/m}', 'M = 44{,}1 \\times 1{,}0 = 44{,}1\\ \\text{kN·m/m}'],
    h: 300,
    draw: () => (
      <g>
        <Rect x={60} y={60} w={170} h={180} c="water" sw={0} fill="~water" />
        <WaterLevel x={90} y={60} x1={60} x2={230} label="3,0 m d’eau" />
        <Rect x={230} y={40} w={30} h={200} c="grey" sw={2} fill="pat:concrete" bg="~grey" />
        <Rect x={200} y={240} w={140} h={28} c="grey" sw={2} fill="pat:concrete" bg="~grey" />
        <Arrow x1={140} y1={180} x2={226} y2={180} c="red" w={3} hs={11} />
        <Text x={140} y={172} s={15} c="red">F = 44,1 kN/m</Text>
        <Dim x1={180} y1={240} x2={180} y2={180} label="1,0 m" s={13} />
        <Text x={270} y={235} s={14} c="red">M = 44,1 kN·m/m</Text>
        <Text x={270} y={100} s={13} c="mute">{'paroi encastrée\nen pied : armatures\ncôté eau'}</Text>
        <Text x={120} y={258} s={13}>p = 29,4 kPa</Text>
      </g>
    ),
    caption: 'Par mètre de paroi : pression au fond, poussée et moment d’encastrement.',
  },
  {
    id: 'caisson-flottant',
    title: 'Tirant d’eau d’un caisson flottant',
    steps: ['simple_examples'],
    formula: ['F_A = \\rho g V_{imm} = \\text{poids} \\Rightarrow d = \\frac{150\\,000}{1\\,025 \\times 60} = 2{,}44\\ \\text{m}'],
    h: 260,
    draw: () => (
      <g>
        <Rect x={20} y={110} w={460} h={130} c="water" sw={0} fill="~water" />
        <WaterLevel x={50} y={110} x1={20} x2={480} label="mer" />
        <Rect x={150} y={60} w={200} h={110} c="grey" sw={2.4} fill="~grey" />
        <Text x={250} y={96} a="middle" s={14}>caisson 10 × 6 m · 150 t</Text>
        <Force x={250} y={150} len={60} c="red" label="poids" lx={256} ly={150} />
        {[180, 220, 260, 300, 320].map(x => <Arrow key={x} x1={x} y1={210} x2={x} y2={174} c="ink" w={1.8} hs={8} />)}
        <Text x={360} y={208} s={14} c="ink">poussée d’Archimède</Text>
        <Dim x1={370} y1={110} x2={370} y2={170} label="d = 2,44 m" s={13} side={-1} />
      </g>
    ),
    caption: 'Le caisson s’enfonce jusqu’à ce que le poids d’eau déplacé égale son propre poids.',
  },
  {
    id: 'bassin-soulevement',
    title: 'Bassin enterré : risque de soulèvement',
    steps: ['practical_case'],
    formula: ['F_s = \\frac{5\\,000}{5\\,886} = 0{,}85 < 1{,}1'],
    h: 330,
    draw: () => (
      <g>
        <SoilLayers x1={10} x2={490} y0={60} layers={[{ h: 230, fill: 'pat:sand', bg: '~soil' }]} />
        <Rect x={110} y={60} w={280} h={180} c="paper" sw={0} fill="paper" />
        <Rect x={60} y={240} w={380} h={22} c="grey" sw={2} fill="pat:concrete" bg="~grey" />
        <Rect x={110} y={60} w={18} h={180} c="grey" sw={2} fill="pat:concrete" bg="~grey" />
        <Rect x={372} y={60} w={18} h={180} c="grey" sw={2} fill="pat:concrete" bg="~grey" />
        <WaterLevel x={30} y={105} x1={10} x2={110} label="nappe −1,0" />
        <Line x1={390} y1={105} x2={490} y2={105} c="water" w={1.6} dash="7 5" />
        {[140, 190, 240, 290, 340].map(x => <Arrow key={x} x1={x} y1={300} x2={x} y2={266} c="water" w={2.2} />)}
        <Text x={250} y={318} a="middle" s={14} c="water">sous-pression U = 9,81 × 3,0 × 200 = 5 886 kN</Text>
        <Force x={250} y={210} len={60} c="red" label="G = 5 000 kN (vide)" lx={258} ly={170} />
        <Text x={64} y={232} s={12} c="green">{'débord lesté\npar les terres'}</Text>
        <Dim x1={470} y1={262} x2={470} y2={105} label="h_w = 3,0 m" s={13} side={-1} />
      </g>
    ),
    notes: ['Vide, le bassin pèse moins que l’eau qu’il déplace : un débord de radier chargé par les terres le stabilise.'],
    caption: 'Bassin de 20 × 10 m fondé à −4,0 m, nappe des plus hautes eaux à −1,0 m.',
  },
];
