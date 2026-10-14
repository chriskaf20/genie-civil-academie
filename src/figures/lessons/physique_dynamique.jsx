// Plates — Module 2 · Dynamique des corps, énergie, chocs et oscillations
import { Arrow, Circle, Dim, Fixed, Ground, Line, Path, Plot, Poly, Rect, Text, fnPts } from '../../components/figures/ink.jsx';
import { Bars, Car, Person, Truck } from '../../components/figures/kit.jsx';
import { Dot } from '../../components/figures/kit.jsx';

const amp = z => r => 1 / Math.sqrt((1 - r * r) ** 2 + (2 * z * r) ** 2);

/** Zigzag spring between (x, y1) and (x, y2). */
function Spring({ x, y1, y2, n = 8, wd = 14 }) {
  const step = (y2 - y1) / (n * 2 + 2);
  const pts = [[x, y1], [x, y1 + step]];
  for (let i = 0; i < n * 2; i++) pts.push([x + (i % 2 ? -wd : wd), y1 + step * (i + 1.5)]);
  pts.push([x, y2 - step], [x, y2]);
  return <Poly pts={pts} c="ink" w={2} />;
}

export default [
  {
    id: 'oscillateur-resonance',
    title: 'Oscillateur et résonance',
    steps: ['theory', 'formulas'],
    formula: ['f_0 = \\frac{1}{2\\pi}\\sqrt{\\frac{k}{m}}'],
    h: 310,
    draw: () => (
      <g>
        <Rect x={30} y={30} w={110} h={12} c="grey" sw={1.4} fill="pat:hatch" bg="~grey" />
        <Spring x={85} y1={42} y2={150} />
        <Rect x={55} y={150} w={60} h={44} c="ink" sw={2.2} fill="~ink" />
        <Text x={85} y={178} a="middle" s={18} b c="ink">m</Text>
        <Text x={100} y={100} s={16} c="ink">k</Text>
        <Arrow x1={130} y1={150} x2={130} y2={200} c="red" w={1.8} both hs={8} />
        <Text x={138} y={180} s={14} c="red">x(t)</Text>
        <Path d="M40,250 q12,-26 24,0 t24,0 t24,0 t24,0" c="red" w={2} />
        <Text x={40} y={285} s={13} c="mute">oscillation libre de période T₀</Text>
        <Plot x={210} y={40} w={236} h={200} xr={[0, 2.2]} yr={[0, 6]} xl="f/f₀" yl="amplification"
          xt={[[0.5, '0,5'], [1, '1'], [1.5, '1,5'], [2, '2']]} yt={[[1, '1'], [3, '3'], [5, '5']]} grid
        >
          {(sx, sy) => (
            <g>
              {[[0.1, 'red', 'ζ = 10 %'], [0.2, 'orange', 'ζ = 20 %'], [0.5, 'ink', 'ζ = 50 %']].map(([z, c, lab], i) => (
                <g key={z}>
                  <Poly pts={fnPts(r => Math.min(6, amp(z)(r)), 0, 2.2, sx, sy, 120)} c={c} w={2.4} />
                  <Text x={sx(1.35)} y={sy(4.8 - i * 1.1)} s={13} c={c}>{lab}</Text>
                </g>
              ))}
              <Line x1={sx(1)} y1={sy(0)} x2={sx(1)} y2={sy(6)} c="grey" w={1} dash="4 4" />
              <Text x={sx(1) + 4} y={sy(5.6)} s={12} c="mute">résonance</Text>
            </g>
          )}
        </Plot>
      </g>
    ),
    notes: ['Si la fréquence d’excitation approche f₀, l’amplitude n’est limitée que par l’amortissement ζ.'],
    caption: 'Masse-ressort et facteur d’amplification dynamique selon le rapport des fréquences.',
  },
  {
    id: 'choc-voiture',
    title: 'Choc d’une voiture sur un poteau',
    steps: ['stepbystep', 'formulas'],
    formula: ['E_c = \\tfrac12 \\times 1\\,500 \\times 13{,}9^2 = 145\\ \\text{kJ}', 'F = \\frac{E_c}{d} = 290\\ \\text{kN}'],
    h: 280,
    draw: () => (
      <g>
        <Ground x1={20} x2={480} y={200} />
        <Rect x={400} y={70} w={30} h={130} c="grey" sw={2} fill="pat:concrete" bg="~grey" />
        <Text x={415} y={60} a="middle" s={14}>poteau</Text>
        <g transform="translate(150 200) scale(2.2) translate(-150 -200)">
          <Car x={102} y={200} w={86} />
        </g>
        <Rect x={340} y={120} w={60} h={70} c="red" sw={1.6} fill="~red" dash="5 4" />
        <Dim x1={340} y1={225} x2={400} y2={225} label="d = 0,50 m" side={-1} s={14} />
        <Arrow x1={110} y1={100} x2={190} y2={100} c="ink" w={2.6} />
        <Text x={110} y={88} s={15} c="ink">v = 50 km/h = 13,9 m/s</Text>
        <Arrow x1={460} y1={140} x2={432} y2={140} c="red" w={3} />
        <Text x={445} y={128} s={14} c="red">F</Text>
        <Text x={30} y={258} s={14}>{'m = 1 500 kg · F ≈ 290 kN · durée Δt = 2d/v ≈ 0,07 s'}</Text>
      </g>
    ),
    notes: ['La zone déformable allonge la distance d’arrêt : la force moyenne est inversement proportionnelle à d.'],
    caption: 'L’énergie cinétique est absorbée par la déformation de la carrosserie sur 0,50 m.',
  },
  {
    id: 'passerelle-londres',
    title: 'Passerelle mise en résonance par les piétons',
    steps: ['real_examples'],
    formula: ['f_{latérale} \\approx 1\\ \\text{Hz} \\approx \\tfrac12 f_{marche}'],
    h: 270,
    draw: () => (
      <g>
        <Path d="M20,120 Q250,150 480,120" c="ink" w={3} />
        <Path d="M20,60 Q250,150 480,60" c="grey" w={1.6} />
        {Array.from({ length: 9 }, (_, i) => {
          const x = 70 + i * 45;
          const t = (x - 20) / 460;
          return <Person key={i} x={x} y={120 + 60 * t * (1 - t) - 2} k={0.55} c="mute" />;
        })}
        <Text x={250} y={40} a="middle" s={14} c="mute">vue de côté</Text>
        <Poly pts={fnPts(t => Math.sin(2 * Math.PI * t * 3), 0, 1, t => 40 + 420 * t, v => 215 + 18 * v, 120)} c="red" w={2.2} />
        <Text x={40} y={250} s={14} c="red">balancement latéral à ≈ 1 Hz : les piétons se synchronisent</Text>
      </g>
    ),
    notes: ['Corrigée par des amortisseurs visqueux et à masse accordée, la passerelle a rouvert en 2002.'],
    caption: 'Les pas latéraux, à la moitié de la fréquence de marche, ont excité le mode latéral de la passerelle.',
  },
  {
    id: 'absorbeur-pile',
    title: 'Absorbeur de choc devant une pile de pont',
    steps: ['practical_case'],
    formula: ['F = \\frac{E_c}{d} \\quad E_c = 2{,}90\\ \\text{MJ}'],
    h: 310,
    draw: () => (
      <g>
        <Ground x1={20} x2={480} y={140} />
        <Truck x={40} y={140} w={130} />
        <Rect x={250} y={100} w={90} h={34} c="orange" sw={2} fill="~orange" />
        {[0, 1, 2, 3].map(i => <Line key={i} x1={262 + i * 22} y1={102} x2={262 + i * 22} y2={132} c="orange" w={1.2} />)}
        <Rect x={340} y={30} w={40} h={110} c="grey" sw={2} fill="pat:concrete" bg="~grey" />
        <Text x={295} y={92} a="middle" s={13} c="orange">absorbeur 1,2 m</Text>
        <Text x={360} y={24} a="middle" s={13}>pile</Text>
        <Bars x={90} y={175} w={330} h={100} max={11} bars={[
          { label: 'choc direct (0,3 m)', v: 9.7, c: 'red', txt: '9,7 MN' },
          { label: 'avec absorbeur (1,5 m)', v: 1.9, c: 'green', txt: '1,9 MN' },
        ]} />
      </g>
    ),
    notes: ['Même énergie, distance d’arrêt cinq fois plus longue : force moyenne cinq fois plus faible.'],
    caption: 'Poids lourd de 30 t à 50 km/h : effet d’un absorbeur sur la force moyenne d’impact.',
  },
  {
    id: 'exemples-dynamique',
    title: 'Levage, freinage, vibration d’un plancher',
    steps: ['simple_examples'],
    formula: ['T = m\\,(g + a)', 'd = \\frac{v^2}{2a}', 'f_0 \\approx \\frac{15{,}8}{\\sqrt{\\delta_{mm}}}'],
    h: 260,
    draw: () => (
      <g>
        <Text x={80} y={24} a="middle" s={12} b>a) levage</Text>
        <Line x1={80} y1={34} x2={80} y2={120} c="ink" w={2} />
        <Rect x={50} y={120} w={60} h={46} c="ink" sw={2} fill="~grey" />
        <Text x={80} y={148} a="middle" s={12} b>2 t</Text>
        <Arrow x1={120} y1={160} x2={120} y2={120} c="green" w={2.2} hs={8} />
        <Text x={126} y={146} s={11} c="green">a = 0,5</Text>
        <Text x={80} y={196} a="middle" s={12} c="red" b>T = 20,6 kN</Text>
        <Text x={80} y={214} a="middle" s={11} c="mute">(+5 % du poids)</Text>
        <Text x={260} y={24} a="middle" s={12} b>b) freinage à 90 km/h</Text>
        <Truck x={170} y={110} w={70} />
        <Line x1={170} y1={112} x2={360} y2={112} c="ink" w={2} />
        <Arrow x1={242} y1={136} x2={350} y2={136} c="red" w={1.4} hs={6} both />
        <Text x={296} y={156} a="middle" s={12} c="red" b>62,5 m</Text>
        <Text x={260} y={190} a="middle" s={11} c="mute">{'v = 25 m/s, décélération 5 m/s²\n+ distance de réaction'}</Text>
        <Text x={430} y={24} a="middle" s={12} b>c) plancher</Text>
        <Line x1={380} y1={170} x2={480} y2={170} c="ink" w={1.4} />
        <Rect x={386} y={150} w={20} h={20} c="orange" sw={1.4} fill="~orange" />
        <Text x={396} y={186} a="middle" s={11}>marche</Text>
        <Text x={396} y={200} a="middle" s={11}>≈ 2 Hz</Text>
        <Rect x={448} y={80} w={22} h={90} c="green" sw={1.6} fill="~green" />
        <Text x={459} y={186} a="middle" s={11} c="green" b>6,5 Hz</Text>
        <Text x={430} y={226} a="middle" s={11} c="mute">{'flèche 6 mm\n→ hors résonance'}</Text>
      </g>
    ),
    notes: ['La dynamique ajoute des efforts (accélération), des distances (freinage) et des risques de résonance (fréquences propres).'],
    caption: 'Trois applications directes de la mécanique du mouvement sur un chantier ou un ouvrage.',
  },
  {
    id: 'mua-graphes',
    title: 'Mouvement uniformément accéléré : le freinage',
    steps: ['theory'],
    formula: ['v = v_0 + a\\,t \\qquad x = v_0 t + \\tfrac{1}{2} a t^2 \\qquad v^2 = v_0^2 + 2 a x'],
    h: 290,
    draw: () => (
      <Plot x={70} y={30} w={380} h={200} xr={[0, 6]} yr={[0, 30]} yl="v (m/s)"
        xt={[0, 1, 2, 3, 4, 5, 6].map(v => [v, `${v} s`])} yt={[[25, '25'], [12.5, '12,5']]} grid
      >
        {(sx, sy) => (
          <g>
            <Poly pts={[[sx(0), sy(0)], [sx(0), sy(25)], [sx(5), sy(0)]]} c="water" w={0} fill="~water" close />
            <Line x1={sx(0)} y1={sy(25)} x2={sx(5)} y2={sy(0)} c="red" w={3} />
            <Text x={sx(1.6)} y={sy(7)} a="middle" s={14} c="water" b>{'aire = distance\n= 62,5 m'}</Text>
            <Text x={sx(2.6)} y={sy(15)} s={13} c="red" b>{'pente = a = −5 m/s²'}</Text>
            <Dot x={sx(5)} y={sy(0)} r={5} c="red" />
            <Text x={sx(5)} y={sy(0) - 12} a="middle" s={12} c="red">arrêt à 5 s</Text>
          </g>
        )}
      </Plot>
    ),
    notes: ['Sur le graphe de la vitesse, la pente est l’accélération et l’aire sous la courbe est la distance parcourue.'],
    caption: 'Camion à 90 km/h (25 m/s) freinant à 5 m/s² : arrêt en 5 s sur 62,5 m.',
  },
  {
    id: 'energie-chute',
    title: 'Énergie potentielle devenue énergie cinétique',
    steps: ['theory'],
    formula: ['E_p = m\\,g\\,h = 3\\,000 \\times 9{,}81 \\times 1{,}5 = 44\\ \\text{kJ} \\qquad v = \\sqrt{2gh} = 5{,}4\\ \\text{m/s}'],
    h: 290,
    draw: () => (
      <g>
        <Rect x={20} y={230} w={300} h={50} c="soil" sw={0} fill="pat:soil" />
        <Line x1={20} y1={230} x2={320} y2={230} c="ink" w={2} />
        <Line x1={130} y1={20} x2={130} y2={230} c="ink" w={3} />
        <Line x1={210} y1={20} x2={210} y2={230} c="ink" w={3} />
        <Rect x={140} y={40} w={60} h={50} c="ink" sw={2.2} fill="~grey" />
        <Text x={170} y={70} a="middle" s={13} b>3 t</Text>
        <Rect x={150} y={160} w={40} h={120} c="ink" sw={2} fill="pat:concrete" />
        <Arrow x1={170} y1={94} x2={170} y2={152} c="red" w={2.4} hs={9} dash="6 4" />
        <Arrow x1={240} y1={91} x2={240} y2={159} c="txt" w={1.2} hs={5} both />
        <Text x={246} y={130} s={13} b>h = 1,5 m</Text>
        <Text x={110} y={190} a="end" s={12}>pieu</Text>
        <Rect x={360} y={60} w={40} h={140} c="water" sw={1.6} fill="~water" />
        <Rect x={420} y={60} w={40} h={140} c="red" sw={1.6} fill="~red" />
        <Text x={380} y={218} a="middle" s={12} c="water" b>{'E_p\nen haut'}</Text>
        <Text x={440} y={218} a="middle" s={12} c="red" b>{'E_c\nà l’impact'}</Text>
        <Text x={410} y={46} a="middle" s={12}>44 kJ = 44 kJ</Text>
      </g>
    ),
    notes: ['Sans pertes, toute l’énergie de position du mouton se retrouve en énergie de mouvement au moment du choc sur la tête du pieu.'],
    caption: 'Battage d’un pieu : la masse lâchée de 1,5 m frappe à 5,4 m/s.',
  },
  {
    id: 'impulsion-duree',
    title: 'Même impulsion, durées différentes',
    steps: ['theory', 'formulas'],
    formula: ['F\\,\\Delta t = m\\,\\Delta v = 30\\,000 \\times 13{,}9 = 417\\ \\text{kN·s}'],
    h: 290,
    draw: () => (
      <Plot x={70} y={30} w={380} h={200} xr={[0, 0.25]} yr={[0, 11]} yl="F (MN)"
        xt={[[0.043, '0,043 s'], [0.1, '0,1'], [0.216, '0,216 s']]} yt={[[1.93, '1,9'], [9.7, '9,7']]} grid
      >
        {(sx, sy) => (
          <g>
            <Rect x={sx(0)} y={sy(9.7)} w={sx(0.043) - sx(0)} h={sy(0) - sy(9.7)} c="red" sw={2} fill="~red" />
            <Rect x={sx(0)} y={sy(1.93)} w={sx(0.216) - sx(0)} h={sy(0) - sy(1.93)} c="green" sw={2} fill="~green" o={0.8} />
            <Text x={sx(0.05)} y={sy(9.2)} s={13} c="red" b>choc direct : 9,7 MN</Text>
            <Text x={sx(0.11)} y={sy(3.2)} s={13} c="green" b>avec absorbeur : 1,9 MN</Text>
            <Text x={sx(0.24)} y={sy(6)} a="end" s={12} c="mute">{'aires égales :\nmême impulsion'}</Text>
          </g>
        )}
      </Plot>
    ),
    notes: ['L’impulsion à fournir est fixée par la masse et la vitesse ; l’allonger dans le temps réduit la force : c’est le rôle des absorbeurs et des glissières.'],
    caption: 'Poids lourd de 30 t à 50 km/h contre une pile : force moyenne selon la durée du choc.',
  },
  {
    id: 'fleche-frequence',
    title: 'Fréquence propre d’après la flèche statique',
    steps: ['formulas'],
    formula: ['f_0 \\approx \\frac{15{,}8}{\\sqrt{\\delta_{st}\\,[\\text{mm}]}}'],
    h: 290,
    draw: () => (
      <Plot x={70} y={30} w={380} h={200} xr={[0, 30]} yr={[0, 18]} yl="f₀ (Hz)"
        xt={[0, 6, 10, 20, 30].map(v => [v, `${v}`])} yt={[[2, '2'], [5, '5'], [6.5, '6,5'], [15, '15']]} grid
      >
        {(sx, sy) => (
          <g>
            <Rect x={sx(0)} y={sy(2.4)} w={sx(30) - sx(0)} h={sy(1.6) - sy(2.4)} c="orange" sw={0} fill="~orange" />
            <Rect x={sx(0)} y={sy(4.8)} w={sx(30) - sx(0)} h={sy(3.2) - sy(4.8)} c="orange" sw={0} fill="~orange" o={0.5} />
            <Text x={sx(29.5)} y={sy(2.0) + 4} a="end" s={11} c="orange" b>marche</Text>
            <Text x={sx(29.5)} y={sy(4.0) + 4} a="end" s={11} c="orange">2ᵉ harmonique</Text>
            <Poly pts={fnPts(d => Math.min(18, 15.8 / Math.sqrt(d)), 0.8, 30, sx, sy, 80)} c="ink" w={2.8} />
            <Dot x={sx(6)} y={sy(6.5)} r={6} c="green" />
            <Text x={sx(6.8)} y={sy(7.6)} s={12} c="green" b>plancher : 6 mm → 6,5 Hz</Text>
            <Text x={sx(29.5)} y={sy(12)} a="end" s={12} c="mute">flèche sous charges permanentes (mm) →</Text>
          </g>
        )}
      </Plot>
    ),
    notes: ['Une structure souple (grande flèche) vibre lentement : au-delà de 10 mm de flèche, on approche de la zone des harmoniques de la marche.'],
    caption: 'Une simple flèche statique donne un ordre de grandeur de la fréquence propre.',
  },
  {
    id: 'charge-brutale',
    title: 'Charge appliquée brutalement : coefficient 2',
    steps: ['diagrams'],
    formula: ['u_{max} = 2\\,u_{st} \\quad (\\text{charge appliquée d’un coup, sans amortissement})'],
    h: 290,
    draw: () => (
      <Plot x={70} y={30} w={380} h={200} xr={[0, 2]} yr={[0, 2.2]} yl="u / u_{st}"
        xt={[[0.5, 'T₀/2'], [1, 'T₀'], [2, '2T₀']]} yt={[[1, '1'], [2, '2']]} grid
      >
        {(sx, sy) => (
          <g>
            <Poly pts={fnPts(t => 1 - Math.cos(2 * Math.PI * t), 0, 2, sx, sy, 120)} c="red" w={2.8} />
            <Poly pts={fnPts(t => Math.min(1, t / 1.2) - (t < 1.2 ? 0 : 0), 0, 2, sx, sy, 40)} c="green" w={2.4} dash="7 4" />
            <Text x={sx(0.52)} y={sy(2.08)} s={13} c="red" b>appliquée d’un coup</Text>
            <Text x={sx(1.3)} y={sy(0.8)} s={13} c="green" b>appliquée lentement</Text>
          </g>
        )}
      </Plot>
    ),
    notes: ['Une charge posée brusquement (sans choc) produit un déplacement maximal double du déplacement statique ; l’amortissement réduit ensuite les oscillations.'],
    caption: 'Réponse d’une structure à une charge constante appliquée instantanément ou progressivement.',
  },
];
