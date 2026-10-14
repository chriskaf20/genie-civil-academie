// Plates — Module 6 · Hydrostatique : pression, poussée, sous-pression, flottaison
import { Arrow, Dim, Force, Ground, Line, Poly, Rect, Text, WaterLevel, SoilLayers } from '../../components/figures/kit.jsx';
import { Path } from '../../components/figures/kit.jsx';

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
    steps: ['formulas', 'simple_examples'],
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
  {
    id: 'pression-profondeur',
    title: 'La pression ne dépend que de la profondeur',
    steps: ['theory', 'formulas'],
    formula: ['p = p_0 + \\rho\\,g\\,h \\approx 10\\ \\text{kPa par mètre d’eau}'],
    h: 260,
    draw: () => (
      <g>
        <Poly pts={[[30, 60], [110, 60], [110, 200], [30, 200]]} c="water" w={2} fill="~water" close />
        <Poly pts={[[150, 60], [250, 60], [220, 200], [180, 200]]} c="water" w={2} fill="~water" close />
        <Poly pts={[[290, 60], [310, 60], [310, 140], [380, 140], [380, 200], [290, 200]]} c="water" w={2} fill="~water" close />
        <Line x1={20} y1={60} x2={390} y2={60} c="water" w={1.4} dash="6 4" />
        <Line x1={20} y1={200} x2={390} y2={200} c="red" w={1.4} dash="6 4" />
        <Text x={205} y={226} a="middle" s={13} c="red" b>même profondeur : même pression</Text>
        <Arrow x1={420} y1={61} x2={420} y2={199} c="txt" w={1.4} hs={6} both />
        <Text x={428} y={134} s={13} b>h</Text>
        <Text x={460} y={70} s={12}>0</Text>
        <Text x={444} y={206} s={12} c="red">ρgh</Text>
      </g>
    ),
    notes: ['Ni la forme ni le volume du récipient n’interviennent : 10 m d’eau donnent toujours environ 1 bar de pression relative.'],
    caption: 'Paradoxe hydrostatique : trois réservoirs, une seule pression au fond.',
  },
  {
    id: 'sous-pression-radier',
    title: 'Sous-pression sous un radier',
    steps: ['simple_examples'],
    formula: ['u = \\rho_w\\,g\\,h_w = 9{,}81 \\times 3{,}0 = 29{,}4\\ \\text{kPa} \\Rightarrow e_{béton} \\ge \\frac{29{,}4}{25} = 1{,}2\\ \\text{m}'],
    h: 250,
    draw: () => (
      <g>
        <Rect x={20} y={60} w={460} h={170} c="soil" sw={0} fill="pat:soil" o={0.5} />
        <Line x1={20} y1={80} x2={480} y2={80} c="water" w={2} dash="7 4" />
        <Text x={476} y={74} a="end" s={12} c="water" b>nappe</Text>
        <Rect x={120} y={60} w={260} h={140} c="ink" sw={2} fill="paper" />
        <Rect x={120} y={180} w={260} h={20} c="ink" sw={2} fill="pat:concrete" />
        {Array.from({ length: 9 }, (_, i) => 140 + i * 28).map(x => <Arrow key={x} x1={x} y1={228} x2={x} y2={204} c="water" w={1.8} hs={7} />)}
        <Text x={250} y={244} a="middle" s={12} c="water" b>u = 29,4 kPa</Text>
        <Arrow x1={400} y1={81} x2={400} y2={199} c="txt" w={1.2} hs={5} both />
        <Text x={406} y={144} s={12}>3,0 m</Text>
      </g>
    ),
    notes: ['Il faut 1,2 m de béton pour équilibrer la sous-pression, sans marge : on ajoute un coefficient de sécurité, des ancrages ou un drainage.'],
    caption: 'L’eau pousse le radier vers le haut avec une pression égale à ρ g h_w.',
  },
  {
    id: 'piscine-soulevee',
    title: 'Piscine vidée sous nappe : soulèvement',
    steps: ['real_examples'],
    formula: ['U = 9{,}81 \\times 1{,}1 \\times 32 = 345\\ \\text{kN} \\gg G \\approx 30\\ \\text{kN}'],
    h: 250,
    draw: () => (
      <g>
        <Rect x={20} y={60} w={460} h={170} c="soil" sw={0} fill="pat:soil" o={0.5} />
        <Line x1={20} y1={60} x2={480} y2={60} c="ink" w={2} />
        <Line x1={20} y1={84} x2={480} y2={84} c="water" w={2} dash="7 4" />
        <Text x={476} y={78} a="end" s={11} c="water" b>nappe à 0,5 m</Text>
        <Path d="M 140 30 L 140 120 Q 140 130 150 130 L 350 130 Q 360 130 360 120 L 360 30" c="red" w={3} />
        <Path d="M 140 60 L 140 154 L 360 154 L 360 60" c="grey" w={1.4} dash="5 4" />
        <Arrow x1={250} y1={150} x2={250} y2={134} c="red" w={2} hs={6} />
        <Text x={372} y={40} s={12} c="red" b>coque soulevée de 40 cm</Text>
        {Array.from({ length: 7 }, (_, i) => 160 + i * 30).map(x => <Arrow key={x} x1={x} y1={200} x2={x} y2={162} c="water" w={1.6} hs={6} />)}
        <Text x={250} y={222} a="middle" s={12} c="water" b>sous-pression sur 8 × 4 m</Text>
      </g>
    ),
    notes: ['On ne vidange jamais un ouvrage enterré sans vérifier la nappe ; sinon lest, ancrages ou clapet de décompression.'],
    caption: 'Coque de 1,6 m de profondeur, vide, soulevée par 1,1 m d’eau.',
  },
  {
    id: 'pressions-ouvrage',
    title: 'Les pressions de l’eau sur un ouvrage',
    steps: ['diagrams'],
    h: 260,
    draw: () => (
      <g>
        <Rect x={20} y={60} w={180} h={150} c="water" sw={0} fill="~water" />
        <Line x1={20} y1={60} x2={200} y2={60} c="water" w={2} />
        <Rect x={200} y={30} w={30} h={190} c="ink" sw={2} fill="pat:concrete" />
        <Poly pts={[[200, 60], [200, 210], [140, 210]]} c="red" w={1.6} fill="~red" close />
        <Arrow x1={140} y1={160} x2={196} y2={160} c="red" w={2.4} hs={8} />
        <Text x={110} y={156} a="end" s={12} c="red" b>{'½ρgH²\nà H/3'}</Text>
        <Rect x={230} y={196} w={180} h={24} c="ink" sw={2} fill="pat:concrete" />
        {Array.from({ length: 6 }, (_, i) => 250 + i * 30).map(x => <Arrow key={x} x1={x} y1={246} x2={x} y2={224} c="water" w={1.6} hs={6} />)}
        <Text x={320} y={252} a="middle" s={11} c="water" b>{'sous-pression u = ρ g h_w'}</Text>
        <Rect x={330} y={70} w={70} h={50} c="ink" sw={1.6} fill="~grey" />
        <Arrow x1={365} y1={150} x2={365} y2={124} c="green" w={2} hs={7} />
        <Text x={410} y={110} s={12} c="green" b>{'Archimède\nρ g V'}</Text>
        <Text x={30} y={50} s={12} c="water">surface libre : p = 0</Text>
      </g>
    ),
    notes: ['Poussée triangulaire sur les parois, sous-pression sous les radiers, poussée d’Archimède sur les corps immergés : trois effets d’une même loi.'],
    caption: 'Synthèse des actions de l’eau à vérifier sur un ouvrage hydraulique.',
  },
];
