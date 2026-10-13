// Plates — Module 7 · Science & durabilité des matériaux
import { Arrow, Circle, Dot, Line, Plot, Poly, Rect, Text, fnPts } from '../../components/figures/kit.jsx';

const GRAINS = [[60, 80, 14], [110, 70, 11], [170, 85, 15], [75, 140, 12], [135, 130, 16], [190, 150, 11], [60, 190, 10], [120, 185, 13], [175, 195, 12]];
const HEX = [[360, 108], [425, 112], [372, 162], [318, 112], [430, 170]];
const PORES = [[305, 55], [470, 60], [300, 160], [468, 204], [360, 204], [415, 56]];
const hex = ([x, y], r = 7) => Array.from({ length: 6 }, (_, k) => [x + r * Math.cos((k * Math.PI) / 3), y + r * Math.sin((k * Math.PI) / 3)]);

export default [
  {
    id: 'hydratation',
    title: 'Hydratation du ciment',
    steps: ['theory'],
    formula: ['C_3S + H_2O \\longrightarrow C\\text{-}S\\text{-}H + Ca(OH)_2'],
    h: 270,
    draw: () => (
      <g>
        <Text x={115} y={30} a="middle" s={14} b>t = 0 : ciment + eau</Text>
        <Rect x={20} y={40} w={190} h={170} rx={10} c="water" sw={1.6} fill="~water" />
        {GRAINS.map(([x, y, r]) => <Circle key={`a${x}${y}`} cx={x} cy={y} r={r} c="ink" sw={1.8} fill="~grey" />)}
        <Arrow x1={216} y1={125} x2={284} y2={125} c="red" w={2.4} />
        <Text x={250} y={112} a="middle" s={12} c="red">28 jours</Text>
        <Text x={385} y={30} a="middle" s={14} b>pâte durcie</Text>
        <Rect x={290} y={40} w={190} h={170} rx={10} c="ink" sw={1.6} fill="paper" />
        {GRAINS.map(([x0, y, r]) => {
          const x = x0 + 270;
          return (
            <g key={`b${x}${y}`}>
              {Array.from({ length: 12 }, (_, k) => {
                const a = (k * Math.PI) / 6 + 0.2;
                return <Line key={k} x1={x + 0.6 * r * Math.cos(a)} y1={y + 0.6 * r * Math.sin(a)} x2={x + 1.55 * r * Math.cos(a)} y2={y + 1.55 * r * Math.sin(a)} c="green" w={1.3} />;
              })}
              <Circle cx={x} cy={y} r={0.6 * r} c="ink" sw={1.4} fill="~grey" />
            </g>
          );
        })}
        {HEX.map(p => <Poly key={p.join()} pts={hex(p)} c="orange" w={1.6} fill="~orange" close />)}
        {PORES.map(([x, y]) => <Circle key={`${x}${y}`} cx={x} cy={y} r={3.2} c="water" sw={1.2} fill="~water" />)}
        <Line x1={24} y1={232} x2={38} y2={232} c="green" w={2.4} />
        <Text x={44} y={236} s={12}>C-S-H : liant, résistance</Text>
        <Poly pts={hex([256, 232], 6)} c="orange" w={1.6} fill="~orange" close />
        <Text x={268} y={236} s={12}>Ca(OH)₂ : pH ≈ 12,5, protège les aciers</Text>
        <Circle cx={31} cy={254} r={3.5} c="water" sw={1.2} fill="~water" />
        <Text x={44} y={258} s={12}>pores capillaires : plus d’eau (E/C ↑) ⇒ plus de pores, moins de résistance</Text>
      </g>
    ),
    notes: [
      'Le gel de C-S-H soude les grains entre eux : c’est lui qui donne la résistance.',
      'La portlandite rend le béton basique : les armatures restent passivées tant que le pH reste élevé.',
    ],
    caption: 'Des grains isolés dans l’eau à une pâte durcie : C-S-H, portlandite et pores capillaires.',
  },
  {
    id: 'bolomey',
    title: 'Formule de Bolomey : résistance et rapport C/E',
    steps: ['formulas', 'stepbystep'],
    formula: ['f_{cm28} = K_B\\, f_{ce} \\left(\\frac{C}{E} - 0{,}5\\right)', 'K_B\\, f_{ce} = 0{,}55 \\times 48 = 26{,}4\\ \\text{MPa}'],
    h: 290,
    draw: () => (
      <Plot x={70} y={30} w={380} h={200} xr={[1.2, 2.6]} yr={[0, 60]} yl="MPa"
        xt={[[1.5, '1,5'], [1.94, '1,94'], [2.08, '2,08'], [2.5, '2,5']]} yt={[[20, '20'], [38, '38'], [60, '60']]} grid
      >
        {(sx, sy) => (
          <g>
            <Rect x={sx(2.0)} y={sy(60)} w={sx(2.6) - sx(2.0)} h={sy(0) - sy(60)} c="green" sw={0} fill="~green" />
            <Text x={sx(2.3)} y={sy(56)} a="middle" s={12} c="green" b>XC4 : E/C ≤ 0,50</Text>
            <Poly pts={fnPts(x => 26.4 * (x - 0.5), 1.2, 2.6, sx, sy, 20)} c="ink" w={2.8} />
            <Line x1={sx(1.2)} y1={sy(38)} x2={sx(1.939)} y2={sy(38)} c="grey" w={1.4} dash="5 4" />
            <Line x1={sx(1.939)} y1={sy(38)} x2={sx(1.939)} y2={sy(0)} c="grey" w={1.4} dash="5 4" />
            <Text x={sx(1.22)} y={sy(38) - 6} s={12}>cible 38 MPa</Text>
            <Line x1={sx(2.083)} y1={sy(41.8)} x2={sx(2.083)} y2={sy(0)} c="red" w={1.4} dash="5 4" />
            <Dot x={sx(2.083)} y={sy(41.8)} r={5} c="red" />
            <Text x={sx(2.12)} y={sy(33)} s={13} c="red" b>{'E/C = 0,48\n41,8 MPa'}</Text>
            <Text x={sx(1.3)} y={sy(9)} s={12} c="mute">C/E</Text>
          </g>
        )}
      </Plot>
    ),
    notes: [
      'Cible 38 MPa : $C/E = 1{,}94$, soit $E/C = 0{,}51$ — trop élevé pour la classe XC4.',
      'On retient $E/C = 0{,}48$ : $C = 175 / 0{,}48 = 365$ kg/m³ et $f_{cm28} = 41{,}8$ MPa.',
    ],
    caption: 'La résistance croît presque linéairement avec C/E ; la durabilité fixe souvent le rapport retenu.',
  },
  {
    id: 'carbonatation',
    title: 'Carbonatation et enrobage',
    steps: ['simple_examples'],
    formula: ['x_c = K\\sqrt{t} = 3{,}5\\sqrt{100} = 35\\ \\text{mm}'],
    h: 280,
    draw: () => (
      <g>
        <Plot x={60} y={30} w={240} h={190} xr={[0, 100]} yr={[0, 45]} yl="mm"
          xt={[0, 25, 50, 75, 100].map(v => [v, String(v)])} yt={[[10, '10'], [20, '20'], [35, '35']]} grid
        >
          {(sx, sy) => (
            <g>
              <Line x1={sx(0)} y1={sy(35)} x2={sx(100)} y2={sy(35)} c="red" w={1.8} dash="6 4" />
              <Text x={sx(3)} y={sy(35) - 6} s={12} c="red">enrobage c = 35 mm</Text>
              <Poly pts={fnPts(t => 3.5 * Math.sqrt(t), 0, 100, sx, sy, 50)} c="ink" w={2.8} />
              <Dot x={sx(100)} y={sy(35)} r={5} c="red" />
              <Text x={sx(40)} y={sy(14)} s={13}>{'x_c = 3,5 √t'}</Text>
            </g>
          )}
        </Plot>
        <Text x={180} y={262} a="middle" s={12} c="mute">temps (années)</Text>
        <Rect x={340} y={50} w={140} h={170} c="ink" sw={2} fill="pat:concrete" />
        <Rect x={340} y={50} w={58} h={170} c="orange" sw={0} fill="~orange" />
        <Line x1={398} y1={50} x2={398} y2={220} c="red" w={2} dash="5 4" />
        {[90, 135, 180].map(y => <Circle key={y} cx={407} cy={y} r={9} c="ink" sw={2} fill="txt" />)}
        {[90, 135, 180].map(y => <Arrow key={`a${y}`} x1={312} y1={y} x2={336} y2={y} c="mute" w={1.6} hs={6} />)}
        <Text x={318} y={74} a="middle" s={12} c="mute">CO₂</Text>
        <Text x={336} y={42} s={12} c="orange" b>zone carbonatée (pH ≈ 9)</Text>
        <Arrow x1={340} y1={232} x2={398} y2={232} c="txt" w={1.4} hs={6} both />
        <Text x={369} y={250} a="middle" s={12} b>c</Text>
        <Text x={480} y={268} a="end" s={12}>béton sain (pH ≈ 12,5)</Text>
      </g>
    ),
    notes: ['À 100 ans, le front de carbonatation atteint juste les aciers : viser c = 40 mm pour garder une marge.'],
    caption: 'Le front de carbonatation avance comme la racine du temps ; l’enrobage protège les armatures.',
  },
  {
    id: 'bois-feu',
    title: 'Poutre en bois après 45 min de feu',
    steps: ['simple_examples'],
    formula: ['d_{char} = \\beta_0\\, t = 0{,}65 \\times 45 = 29{,}25\\ \\text{mm}', 'd_{ef} = d_{char} + k_0 d_0 = 36{,}25\\ \\text{mm}'],
    h: 300,
    draw: () => (
      <g>
        <Arrow x1={175} y1={22} x2={325} y2={22} c="txt" w={1.4} hs={6} both />
        <Text x={250} y={16} a="middle" s={13} b>b₀ = 200 mm</Text>
        <Rect x={125} y={34} w={250} h={18} c="ink" sw={1.6} fill="pat:concrete" />
        <Text x={380} y={47} s={11} c="mute">dalle : face protégée</Text>
        <Rect x={175} y={52} w={150} h={225} c="ink" sw={2} fill="txt" o={0.85} />
        <Rect x={197} y={52} w={106} h={203} c="orange" sw={0} fill="~orange" />
        <Rect x={202} y={52} w={96} h={198} c="soil" sw={1.6} fill="pat:wood" />
        <Text x={250} y={140} a="middle" s={14} b>{'section\nefficace'}</Text>
        <Text x={250} y={196} a="middle" s={13} b>127,5 mm</Text>
        {[110, 190].map(y => <Arrow key={y} x1={128} y1={y} x2={168} y2={y} c="orange" w={2.6} hs={8} />)}
        <Arrow x1={250} y1={298} x2={250} y2={282} c="orange" w={2.6} hs={8} />
        <Text x={124} y={156} a="end" s={12} c="orange" b>{'feu sur\n3 faces'}</Text>
        <Line x1={314} y1={120} x2={344} y2={120} c="txt" w={1.2} />
        <Text x={348} y={116} s={12}>{'29,25 mm carbonisés\n(0,65 mm/min × 45 min)'}</Text>
        <Line x1={300} y1={205} x2={344} y2={205} c="txt" w={1.2} />
        <Text x={348} y={201} s={12} c="orange">{'+ 7 mm sans résistance\n(k₀·d₀, EC5)'}</Text>
      </g>
    ),
    notes: ['Largeur efficace : $200 - 2 \\times 36{,}25 = 127{,}5$ mm (feu sur les deux côtés et en sous-face).'],
    caption: 'Couche carbonisée, couche sans résistance, section efficace : la vérification au feu se fait sur cette dernière.',
  },
  {
    id: 'beton-marin',
    title: 'Béton de quai en zone de marnage',
    steps: ['practical_case'],
    formula: ['E/C = \\frac{155}{370} = 0{,}42 \\le 0{,}45'],
    h: 285,
    draw: () => (
      <g>
        <Rect x={20} y={110} w={224} h={70} c="water" sw={0} fill="~water" />
        <Rect x={20} y={180} w={224} h={95} c="water" sw={0} fill="water" o={0.35} />
        <Line x1={20} y1={110} x2={244} y2={110} c="water" w={1.8} />
        <Line x1={20} y1={180} x2={244} y2={180} c="water" w={1.8} />
        <Text x={26} y={104} s={12} c="water" b>pleine mer</Text>
        <Text x={26} y={174} s={12} c="water" b>basse mer</Text>
        <Text x={132} y={150} a="middle" s={14} b>zone de marnage : XS3</Text>
        <Poly pts={[[244, 100], [330, 100], [330, 140], [420, 275], [244, 275]]} c="ink" w={2.2} fill="pat:concrete" close />
        <Rect x={238} y={60} w={116} h={40} c="ink" sw={2.4} fill="~ink" />
        <Rect x={300} y={44} w={16} h={16} rx={3} c="ink" sw={2} fill="txt" />
        {[[252, 70], [252, 90], [340, 70], [340, 90]].map(([x, y]) => <Circle key={`${x}${y}`} cx={x} cy={y} r={4} c="ink" sw={1.4} fill="txt" />)}
        {[[222, 70], [214, 84], [226, 94], [210, 100]].map(([x, y]) => <Circle key={`${x}${y}`} cx={x} cy={y} r={2.5} c="water" sw={1} fill="~water" />)}
        <Text x={206} y={60} a="end" s={11} c="water">embruns</Text>
        <Text x={362} y={68} s={12} b>{'poutre de\ncouronnement'}</Text>
        <Text x={362} y={112} s={12} c="red">enrobage 50 mm</Text>
        <Text x={334} y={40} s={11} c="mute">bollard</Text>
      </g>
    ),
    notes: [
      'CEM III/A 42,5 N PM-ES (50 % de laitier) : 370 kg/m³ ; superplastifiant 1,2 % du ciment ; consistance S4.',
      'Enrobage 50 mm et E/C 0,42 : les chlorures n’atteignent pas les aciers pendant les 100 ans visés.',
    ],
    caption: 'Alternance mouillage-séchage et chlorures : la durabilité XS3 dicte la formule du béton.',
  },
];
