// Plates — Module 12 · Identification & classification des sols
import { Arrow, Dot, Line, Plot, Poly, Rect, Text, fnPts } from '../../components/figures/kit.jsx';
import { Flow, flowHeight } from '../../components/figures/kit.jsx';

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
  {
    id: 'granulometrie',
    title: 'Courbe granulométrique et passant à 80 µm',
    steps: ['theory'],
    h: 260,
    draw: () => (
      <Plot x={70} y={30} w={390} h={190} xr={[-3, 2]} yr={[0, 100]} yl="passant %"
        xt={[[-3, '0,001'], [-2, '0,01'], [-1, '0,1'], [0, '1'], [1, '10'], [2, '100 mm']]} yt={[[50, '50'], [100, '100']]} grid
      >
        {(sx, sy) => (
          <g>
            <Line x1={sx(-1.1)} y1={sy(0)} x2={sx(-1.1)} y2={sy(100)} c="red" w={1.6} dash="6 4" />
            <Text x={sx(-1.1) + 6} y={sy(8)} s={12} c="red" b>80 µm</Text>
            <Poly pts={fnPts(x => 100 / (1 + Math.exp(-(x + 2) / 0.4)), -3, 2, sx, sy, 60)} c="violet" w={2.6} />
            <Poly pts={fnPts(x => 100 / (1 + Math.exp(-(x + 0.3) / 0.25)), -3, 2, sx, sy, 60)} c="orange" w={2.6} />
            <Text x={sx(-2.9)} y={sy(76)} s={12} c="violet" b>sol fin</Text>
            <Text x={sx(0.25)} y={sy(52)} s={12} c="orange" b>sable</Text>
          </g>
        )}
      </Plot>
    ),
    notes: ['Tamisage au-dessus de 80 µm, sédimentométrie en dessous ; plus de 35 % de passant à 80 µm classe le sol parmi les sols fins.'],
    caption: 'Diamètre des grains en échelle logarithmique.',
  },
  {
    id: 'atterberg-etats',
    title: 'Limites d’Atterberg : les états d’un sol fin',
    steps: ['theory', 'formulas'],
    formula: ['I_P = w_L - w_P \\qquad I_C = \\frac{w_L - w}{I_P}'],
    h: 230,
    draw: () => (
      <g>
        <Rect x={40} y={90} w={132} h={40} c="ink" sw={1.6} fill="~grey" />
        <Rect x={172} y={90} w={138} h={40} c="ink" sw={1.6} fill="~orange" />
        <Rect x={310} y={90} w={150} h={40} c="ink" sw={1.6} fill="~water" />
        <Text x={106} y={115} a="middle" s={13} b>solide</Text>
        <Text x={241} y={115} a="middle" s={13} b>plastique</Text>
        <Text x={385} y={115} a="middle" s={13} b>liquide</Text>
        <Text x={172} y={78} a="middle" s={12}>w_P = 22 %</Text>
        <Text x={310} y={78} a="middle" s={12}>w_L = 45 %</Text>
        <Text x={460} y={78} a="end" s={12} c="mute">w →</Text>
        <Arrow x1={173} y1={150} x2={309} y2={150} c="red" w={1.4} hs={6} both />
        <Text x={241} y={170} a="middle" s={12} c="red" b>I_P = 23 %</Text>
        <Text x={172} y={204} a="middle" s={12}>I_C = 1</Text>
        <Text x={310} y={204} a="middle" s={12}>I_C = 0</Text>
        <Text x={60} y={204} s={11} c="mute">dur</Text>
        <Text x={440} y={204} a="end" s={11} c="mute">I_C &lt; 0</Text>
      </g>
    ),
    notes: ['Plus l’intervalle plastique $I_P$ est large, plus l’argile est sensible aux variations de teneur en eau.'],
    caption: 'Teneur en eau croissante de gauche à droite.',
  },
  {
    id: 'classes-gtr',
    title: 'Classes GTR des sols fins selon I_P',
    steps: ['theory'],
    h: 220,
    draw: () => (
      <g>
        {[[40, 124, 'A1', '~green', 'limons\npeu plastiques'], [124, 215, 'A2', '~orange', 'sables fins\nargileux'], [215, 320, 'A3', '~red', 'argiles'], [320, 460, 'A4', '~violet', 'argiles très\nplastiques']].map(([a, b, t, f, d]) => (
          <g key={t}>
            <Rect x={a} y={70} w={b - a} h={50} c="ink" sw={1.6} fill={f} />
            <Text x={(a + b) / 2} y={100} a="middle" s={14} b>{t}</Text>
            <Text x={(a + b) / 2} y={142} a="middle" s={10}>{d}</Text>
          </g>
        ))}
        {[[124, '12'], [215, '25'], [320, '40']].map(([x, t]) => <Text key={t} x={x} y={60} a="middle" s={12}>{t}</Text>)}
        <Text x={460} y={60} a="end" s={12} c="mute">I_P (%)</Text>
        {[[152, '16 : cas'], [201, '23 : étape'], [285, '35 : ex. 2']].map(([x, t]) => (
          <g key={t}>
            <Dot x={x} y={120} r={5} c="red" />
            <Text x={x} y={195} a="middle" s={11} c="red">{t}</Text>
          </g>
        ))}
      </g>
    ),
    notes: ['La classe guide le réemploi : un A1 se compacte facilement, un A3 ou un A4 demande souvent un traitement à la chaux.'],
    caption: 'Seuils 12, 25 et 40 de l’indice de plasticité.',
  },
  {
    id: 'pressiometre',
    title: 'Essai pressiométrique Ménard',
    steps: ['theory'],
    h: 240,
    draw: () => (
      <g>
        <Rect x={20} y={50} w={200} h={170} c="soil" sw={0} fill="pat:soil" o={0.5} />
        <Line x1={20} y1={50} x2={220} y2={50} c="ink" w={2} />
        <Rect x={100} y={50} w={30} h={170} c="ink" sw={1.4} fill="paper" />
        <Line x1={115} y1={20} x2={115} y2={140} c="ink" w={1.6} />
        <Rect x={92} y={140} w={46} h={44} rx={10} c="water" sw={2} fill="~water" />
        <Arrow x1={92} y1={162} x2={56} y2={162} c="red" w={2} hs={7} />
        <Arrow x1={138} y1={162} x2={174} y2={162} c="red" w={2} hs={7} />
        <Rect x={140} y={12} w={70} h={24} rx={4} c="ink" sw={1.4} fill="~grey" />
        <Text x={175} y={29} a="middle" s={11}>p, V</Text>
        <Plot x={280} y={30} w={190} h={170} xr={[0, 1]} yr={[0, 1]}>
          {(sx, sy) => (
            <g>
              <Poly pts={fnPts(v => 0.85 * (1 - Math.exp(-3 * v)), 0, 1, sx, sy, 40)} c="ink" w={2.4} />
              <Line x1={sx(0)} y1={sy(0.85)} x2={sx(1)} y2={sy(0.85)} c="red" w={1.4} dash="5 4" />
              <Text x={sx(0.6)} y={sy(0.89)} s={12} c="red" b>p_l</Text>
              <Line x1={sx(0)} y1={sy(0)} x2={sx(0.22)} y2={sy(0.56)} c="green" w={1.6} dash="4 3" />
              <Text x={sx(0.26)} y={sy(0.4)} s={12} c="green" b>{'pente → E_{M}'}</Text>
              <Text x={sx(0.02)} y={sy(1)} s={12}>p</Text>
              <Text x={sx(1)} y={sy(0) + 16} a="end" s={12}>V</Text>
            </g>
          )}
        </Plot>
      </g>
    ),
    notes: ['La sonde dilatée dans le forage donne le module $E_M$ (déformations) et la pression limite $p_l$ (rupture), utilisés directement par la NF P 94-261.'],
    caption: 'Sonde gonflée par paliers et courbe pression-volume.',
  },
  {
    id: 'sol-sature',
    title: 'Argile saturée : indice des vides',
    steps: ['simple_examples'],
    formula: ['S_r = 1 \\Rightarrow e = \\frac{w\\,\\rho_s}{\\rho_w} = 0{,}32 \\times 2{,}70 = 0{,}86'],
    h: 240,
    draw: () => (
      <g>
        <Rect x={120} y={30} w={110} h={86} c="ink" sw={2} fill="~water" />
        <Rect x={120} y={116} w={110} h={100} c="ink" sw={2} fill="pat:sand" />
        <Text x={175} y={78} a="middle" s={13} b>eau</Text>
        <Text x={175} y={170} a="middle" s={13} b>grains</Text>
        <Arrow x1={250} y1={31} x2={250} y2={115} c="water" w={1.4} hs={6} both />
        <Text x={258} y={78} s={13} c="water" b>e = 0,86</Text>
        <Arrow x1={250} y1={117} x2={250} y2={215} c="txt" w={1.4} hs={6} both />
        <Text x={258} y={170} s={13}>V_s = 1</Text>
        <Text x={110} y={124} a="end" s={12} c="mute">pas d’air</Text>
      </g>
    ),
    notes: ['Quand le sol est saturé, tous les vides sont remplis d’eau : la teneur en eau suffit à trouver e.'],
    caption: 'Volumes rapportés à un volume de grains égal à 1.',
  },
  {
    id: 'argile-a3',
    title: 'w_L = 60 % et w_P = 25 % : argile A3',
    steps: ['simple_examples'],
    formula: ['I_P = 60 - 25 = 35\\ \\% \\Rightarrow 25 < I_P \\le 40 \\Rightarrow A3'],
    h: 180,
    draw: () => (
      <g>
        <Line x1={40} y1={80} x2={460} y2={80} c="txt" w={1.6} />
        {[[40, '0'], [145, '25'], [292, '60']].map(([x, t]) => (
          <g key={t}>
            <Line x1={x} y1={74} x2={x} y2={86} c="txt" w={1.6} />
            <Text x={x} y={66} a="middle" s={12}>{t}</Text>
          </g>
        ))}
        <Rect x={145} y={88} w={147} h={26} c="red" sw={1.6} fill="~red" />
        <Text x={218} y={106} a="middle" s={12} b>I_P = 35 %</Text>
        <Text x={145} y={136} a="middle" s={11}>w_P</Text>
        <Text x={292} y={136} a="middle" s={11}>w_L</Text>
        <Rect x={340} y={92} w={110} h={46} rx={8} c="red" sw={2} fill="paper" />
        <Text x={395} y={113} a="middle" s={14} c="red" b>A3</Text>
        <Text x={395} y={130} a="middle" s={10}>argile</Text>
        <Text x={250} y={166} a="middle" s={12}>très sensible à l’eau : réemploi difficile sans traitement</Text>
      </g>
    ),
    notes: ['Une argile A3 gonfle et colle en saison humide, se fissure en saison sèche.'],
    caption: 'Intervalle plastique reporté sur l’échelle des teneurs en eau.',
  },
  {
    id: 'consistance-pluie',
    title: 'Consistance du sol après la pluie',
    steps: ['simple_examples'],
    formula: ['I_C = \\frac{w_L - w}{I_P} = \\frac{45 - 38}{23} = 0{,}30'],
    h: 215,
    draw: () => (
      <g>
        {[[40, 145, '~water', 'liquide'], [145, 250, '~orange', 'molle'], [250, 302, '~green', 'ferme'], [302, 355, '~green', 'très\nferme'], [355, 460, '~grey', 'dure']].map(([a, b, f, t]) => (
          <g key={a}>
            <Rect x={a} y={80} w={b - a} h={40} c="ink" sw={1.4} fill={f} />
            <Text x={(a + b) / 2} y={t.includes('\n') ? 97 : 104} a="middle" s={11} b>{t}</Text>
          </g>
        ))}
        {[[145, '0'], [250, '0,5'], [302, '0,75'], [355, '1']].map(([x, t]) => <Text key={t} x={x} y={70} a="middle" s={11}>{t}</Text>)}
        <Text x={40} y={70} s={11} c="mute">I_C</Text>
        <Dot x={208} y={134} r={6} c="red" />
        <Text x={208} y={158} a="middle" s={11} c="red" b>0,30 : après la pluie</Text>
        <Dot x={414} y={134} r={6} />
        <Text x={414} y={158} a="middle" s={11}>1,28 : échantillon sec</Text>
        <Text x={250} y={196} a="middle" s={12} c="red">sol mou : engins et compactage impossibles sans chaux</Text>
      </g>
    ),
    notes: ['La même argile passe de dure à molle selon sa teneur en eau : on mesure $w$ le jour des travaux.'],
    caption: 'Échelle de l’indice de consistance.',
  },
  {
    id: 'demarche-identification',
    title: 'Démarche d’identification d’un sol',
    steps: ['diagrams'],
    h: flowHeight(['Reconnaissance : sondages, puits, prélèvements', 'Paramètres d’état : w, ρ, ρ_d, e, S_r', 'Nature : granulométrie, Atterberg, VBS', 'Classification GTR ou USCS', 'Essais en place : pressiomètre, CPT, SPT', 'Modèle géotechnique : couches, nappe, paramètres'], { cols: 3 }),
    draw: () => <Flow items={['Reconnaissance : sondages, puits, prélèvements', 'Paramètres d’état : w, ρ, ρ_d, e, S_r', 'Nature : granulométrie, Atterberg, VBS', 'Classification GTR ou USCS', 'Essais en place : pressiomètre, CPT, SPT', 'Modèle géotechnique : couches, nappe, paramètres']} cols={3} />,
    notes: ['Chaque étape alimente la suivante : le modèle géotechnique final sert à tous les calculs.'],
    caption: 'Du sondage au modèle de calcul.',
  },
];
