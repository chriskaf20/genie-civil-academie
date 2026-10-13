// Plates — Module 12 · Identification & classification des sols
import { Arrow, Dot, Line, Plot, Poly, Rect, Text, fnPts } from '../../components/figures/kit.jsx';

/** Three-phase column: heights from volumes (px per cm³). */
function Phases({ x, y, va, vw, vs, k, labels }) {
  const ha = va * k;
  const hw = vw * k;
  const hs = vs * k;
  return (
    <g>
      <Rect x={x} y={y} w={70} h={ha} c="ink" sw={1.8} fill="paper" />
      <Rect x={x} y={y + ha} w={70} h={hw} c="ink" sw={1.8} fill="~water" />
      <Rect x={x} y={y + ha + hw} w={70} h={hs} c="ink" sw={1.8} fill="pat:sand" />
      <Text x={x + 35} y={y + ha / 2 + 5} a="middle" s={12} b>air</Text>
      <Text x={x + 35} y={y + ha + hw / 2 + 5} a="middle" s={12} c="water" b>eau</Text>
      <Text x={x + 35} y={y + ha + hw + hs / 2 + 5} a="middle" s={12} b>grains</Text>
      {labels && labels.map(([t, yy, left], i) => <Text key={i} x={left ? x - 8 : x + 78} y={yy} a={left ? 'end' : 'start'} s={12}>{t}</Text>)}
    </g>
  );
}

const A_LINE = wl => 0.73 * (wl - 20);

export default [
  {
    id: 'phases',
    title: 'Un sol = grains + eau + air',
    steps: ['theory'],
    formula: ['w = \\frac{m_w}{m_s} \\qquad e = \\frac{V_v}{V_s} \\qquad S_r = \\frac{V_w}{V_v}', 'I_P = w_L - w_P \\qquad I_C = \\frac{w_L - w}{I_P}'],
    h: 270,
    draw: () => (
      <g>
        <Phases x={90} y={40} va={40} vw={50} vs={110} k={1} labels={[['V_a', 64, true], ['V_w', 109, true], ['V_s', 194, true], ['m = 0', 64, false], ['m_w', 109, false], ['m_s', 194, false]]} />
        <Line x1={46} y1={40} x2={46} y2={130} c="red" w={1.6} />
        <Text x={40} y={92} a="end" s={12} c="red" b>{'V_v'}</Text>
        <Text x={125} y={262} a="middle" s={12} c="mute">volumes ← → masses</Text>
        <Text x={370} y={34} a="middle" s={13} b>états de consistance (sols fins)</Text>
        <Line x1={270} y1={150} x2={480} y2={150} c="ink" w={2} />
        <Arrow x1={470} y1={150} x2={490} y2={150} c="ink" w={2} hs={8} />
        <Text x={490} y={170} a="end" s={12}>w</Text>
        {[[300, 'solide'], [350, 'semi-solide'], [405, 'plastique'], [462, 'liquide']].map(([x, t]) => <Text key={t} x={x} y={130} a="middle" s={11} c="mute">{t}</Text>)}
        {[[325, 'w_S'], [380, 'w_P'], [435, 'w_L']].map(([x, t]) => (
          <g key={t}>
            <Line x1={x} y1={140} x2={x} y2={160} c="red" w={2.2} />
            <Text x={x} y={178} a="middle" s={13} c="red" b>{t}</Text>
          </g>
        ))}
        <Arrow x1={381} y1={196} x2={434} y2={196} c="green" w={1.4} hs={6} both />
        <Text x={407} y={214} a="middle" s={12} c="green" b>{'I_P'}</Text>
        <Text x={370} y={246} a="middle" s={12}>{'I_C > 1 : sol dur ; I_C < 0,5 : sol mou'}</Text>
      </g>
    ),
    notes: ['Les limites d’Atterberg $w_P$ et $w_L$ bornent le domaine plastique ; leur écart $I_P$ mesure la sensibilité à l’eau.'],
    caption: 'Diagramme des trois phases et états de consistance d’un sol fin.',
  },
  {
    id: 'echantillon',
    title: 'Identification d’un échantillon de 100 cm³',
    steps: ['stepbystep'],
    formula: ['w = \\frac{185 - 160}{160} = 15{,}6\\ \\% \\qquad e = \\frac{2{,}65}{1{,}60} - 1 = 0{,}656', 'S_r = \\frac{0{,}156 \\times 2{,}65}{0{,}656} = 63\\ \\% \\qquad I_C = \\frac{45 - 15{,}6}{23} = 1{,}28'],
    h: 260,
    draw: () => (
      <g>
        <Phases x={120} y={30} va={14.6} vw={25} vs={60.4} k={2.1} labels={[['14,6 cm³', 47, true], ['25 cm³', 87, true], ['60,4 cm³', 178, true], ['25 g', 87, false], ['160 g', 178, false]]} />
        <Text x={155} y={252} a="middle" s={12} c="mute">V = 100 cm³, ρ_s = 2,65 g/cm³</Text>
        <Line x1={290} y1={130} x2={480} y2={130} c="ink" w={2} />
        {[[22, 'w_P = 22'], [45, 'w_L = 45']].map(([w, t]) => (
          <g key={t}>
            <Line x1={290 + 4 * w} y1={120} x2={290 + 4 * w} y2={140} c="red" w={2.2} />
            <Text x={290 + 4 * w} y={158} a="middle" s={12} c="red" b>{t}</Text>
          </g>
        ))}
        <Dot x={290 + 4 * 15.6} y={130} r={6} c="green" />
        <Text x={290 + 4 * 15.6} y={112} a="middle" s={12} c="green" b>w = 15,6</Text>
        <Text x={385} y={190} a="middle" s={12}>{'I_P = 23 : classe A2 (GTR)\nau-dessus de la ligne A : CL'}</Text>
        <Text x={385} y={236} a="middle" s={12} c="green">{'w < w_P : sol dur au prélèvement'}</Text>
      </g>
    ),
    notes: ['Volume des grains : $160 / 2{,}65 = 60{,}4$ cm³ ; vides : 39,6 cm³ dont 25 cm³ d’eau et 14,6 cm³ d’air.'],
    caption: 'Pesées avant et après étuvage : tous les paramètres d’état s’en déduisent.',
  },
  {
    id: 'casagrande',
    title: 'Abaque de plasticité de Casagrande',
    steps: ['formulas', 'simple_examples'],
    formula: ['I_{P,A} = 0{,}73\\,(w_L - 20)'],
    h: 290,
    draw: () => (
      <Plot x={70} y={30} w={380} h={200} xr={[0, 80]} yr={[0, 50]} yl="I_P (%)"
        xt={[20, 35, 50, 65, 80].map(v => [v, String(v)])} yt={[10, 20, 30, 40, 50].map(v => [v, String(v)])} grid
      >
        {(sx, sy) => (
          <g>
            <Poly pts={fnPts(A_LINE, 20, 80, sx, sy, 10)} c="red" w={2.6} />
            <Line x1={sx(50)} y1={sy(0)} x2={sx(50)} y2={sy(50)} c="ink" w={1.6} dash="6 4" />
            <Text x={sx(80)} y={sy(A_LINE(80) - 8)} a="end" s={12} c="red" b>ligne A</Text>
            <Text x={sx(36)} y={sy(30)} a="middle" s={13} b>{'CL\nargile peu plastique'}</Text>
            <Text x={sx(62)} y={sy(48)} a="middle" s={13} b>{'CH\nargile très plastique'}</Text>
            <Text x={sx(38)} y={sy(5)} a="middle" s={12} c="mute">ML / OL</Text>
            <Text x={sx(68)} y={sy(14)} a="middle" s={12} c="mute">MH / OH</Text>
            <Dot x={sx(45)} y={sy(23)} r={6} c="green" />
            <Text x={sx(45) + 9} y={sy(23) + 4} s={12} c="green" b>échantillon (45 ; 23)</Text>
            <Dot x={sx(60)} y={sy(35)} r={6} c="orange" />
            <Text x={sx(60) - 9} y={sy(35) + 4} a="end" s={12} c="orange" b>A3 (60 ; 35)</Text>
            <Text x={sx(79)} y={sy(1.5)} a="end" s={12} c="mute">w_L (%) →</Text>
          </g>
        )}
      </Plot>
    ),
    notes: ['Au-dessus de la ligne A : argiles ; en dessous : limons ou sols organiques. $w_L = 50$ % sépare peu et très plastique.'],
    caption: 'Classer un sol fin avec deux essais : limite de liquidité et indice de plasticité.',
  },
  {
    id: 'reemploi',
    title: 'Réemploi de déblais limoneux : état hydrique',
    steps: ['practical_case'],
    formula: ['\\frac{w}{w_{OPN}} = \\frac{26}{17} = 1{,}53 \\qquad I_C = \\frac{38 - 26}{16} = 0{,}75'],
    h: 230,
    draw: () => {
      const X = r => 40 + (r - 0.6) * 420;
      const zones = [[0.6, 0.7, 'ts', '~orange'], [0.7, 0.9, 's', '~soil'], [0.9, 1.1, 'm', '~green'], [1.1, 1.3, 'h', '~water'], [1.3, 1.6, 'th', 'water']];
      return (
        <g>
          <Text x={40} y={36} s={12} b>{'rapport w / w_{OPN} (ordres de grandeur pour un sol A2)'}</Text>
          {zones.map(([a, b, t, f]) => (
            <g key={t}>
              <Rect x={X(a)} y={50} w={X(b) - X(a)} h={40} c="ink" sw={1.2} fill={f} o={t === 'th' ? 0.45 : 1} />
              <Text x={(X(a) + X(b)) / 2} y={76} a="middle" s={13} b>{t}</Text>
            </g>
          ))}
          {[0.7, 0.9, 1.1, 1.3].map(v => <Text key={v} x={X(v)} y={106} a="middle" s={11} c="mute">{String(v).replace('.', ',')}</Text>)}
          <Dot x={X(1.53)} y={70} r={7} c="red" />
          <Text x={X(1.53)} y={126} a="middle" s={12} c="red" b>déblai : 1,53</Text>
          <Arrow x1={X(1.5)} y1={150} x2={X(1.12)} y2={150} c="green" w={2.4} hs={9} />
          <Text x={X(1.3)} y={170} a="middle" s={12} c="green" b>chaux vive 1 à 2 % + aération</Text>
          <Text x={40} y={206} s={12}>{'ts très sec · s sec · m moyen (proche de l’optimum) · h humide · th très humide'}</Text>
        </g>
      );
    },
    notes: ['Sol A2 humide : la chaux vive absorbe de l’eau, en évapore par sa réaction et flocule les fines ; le sol redevient compactable.'],
    caption: 'Le classement GTR combine la nature (A2) et l’état hydrique pour décider du réemploi.',
  },
  {
    id: 'deviation-deblais',
    title: 'Déviation routière : réemployer 300 000 m³ de déblais',
    steps: ['real_examples'],
    h: 230,
    draw: () => (
      <g>
        <Rect x={150} y={20} w={200} h={46} rx={8} c="ink" sw={2} fill="~soil" />
        <Text x={250} y={40} a="middle" s={13} b>300 000 m³ de déblais</Text>
        <Text x={250} y={58} a="middle" s={12}>A2, plus humides que l’optimum</Text>
        <Arrow x1={210} y1={68} x2={130} y2={112} c="red" w={2.2} hs={9} />
        <Arrow x1={290} y1={68} x2={370} y2={112} c="green" w={2.2} hs={9} />
        <Rect x={20} y={116} w={220} h={92} rx={8} c="red" sw={2} fill="~red" />
        <Text x={130} y={138} a="middle" s={13} c="red" b>sans traitement</Text>
        <Text x={130} y={162} a="middle" s={12}>{'60 % évacués en décharge\n+ autant de matériaux d’apport\n= camions sur les routes'}</Text>
        <Rect x={260} y={116} w={220} h={92} rx={8} c="green" sw={2} fill="~green" />
        <Text x={370} y={138} a="middle" s={13} c="green" b>traitement à la chaux</Text>
        <Text x={370} y={162} a="middle" s={12}>{'réemploi en remblai de\nla quasi-totalité des déblais\n= coûts et trafic réduits'}</Text>
      </g>
    ),
    notes: ['Le classement GTR a montré des sols réemployables à condition de corriger leur état hydrique.'],
    caption: 'Classer les sols tôt permet de choisir entre évacuation et traitement.',
  },
];
