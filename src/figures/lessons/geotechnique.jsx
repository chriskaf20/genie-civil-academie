// Plates — Module 12 · Capacité portante & mécanique des sols
import { Arrow, Bars, Line, Path, Plot, Poly, Rect, Text } from '../../components/figures/kit.jsx';

export default [
  {
    id: 'portance',
    title: 'Capacité portante d’une semelle (Terzaghi)',
    steps: ['theory', 'formulas'],
    formula: ['q_u = c\\,N_c + q\\,N_q + \\tfrac{1}{2}\\,\\gamma\\,B\\,N_\\gamma', 'q_{adm} = \\frac{q_u - q}{F_s}'],
    h: 270,
    draw: () => (
      <g>
        <Rect x={20} y={80} w={460} h={180} c="soil" sw={0} fill="pat:soil" o={0.5} />
        <Line x1={20} y1={80} x2={480} y2={80} c="ink" w={2} />
        <Rect x={200} y={80} w={100} h={40} c="ink" sw={2.2} fill="pat:concrete" />
        <Rect x={236} y={30} w={28} h={50} c="ink" sw={2} fill="pat:concrete" />
        <Arrow x1={250} y1={6} x2={250} y2={28} c="red" w={2.6} hs={9} />
        <Poly pts={[[200, 120], [300, 120], [250, 206.6]]} c="red" w={2} fill="~red" close />
        <Path d="M 250 206.6 Q 400 236 440 80" c="red" w={2} dash="6 4" />
        <Path d="M 250 206.6 Q 100 236 60 80" c="red" w={2} dash="6 4" />
        <Line x1={300} y1={120} x2={392} y2={170} c="red" w={1.2} dash="3 3" />
        <Line x1={200} y1={120} x2={108} y2={170} c="red" w={1.2} dash="3 3" />
        {[60, 90, 120, 380, 410, 440].map(x => <Arrow key={x} x1={x} y1={58} x2={x} y2={78} c="soil" w={1.4} hs={5} />)}
        <Text x={90} y={50} a="middle" s={12} c="soil" b>{'q = γ·D_f'}</Text>
        <Text x={410} y={50} a="middle" s={12} c="soil" b>{'q = γ·D_f'}</Text>
        <Text x={250} y={150} a="middle" s={11} c="red" b>coin</Text>
        <Text x={250} y={250} a="middle" s={12} c="red">surface de rupture</Text>
        <Arrow x1={310} y1={81} x2={310} y2={119} c="txt" w={1.2} hs={5} both />
        <Text x={316} y={106} s={12}>{'D_f'}</Text>
      </g>
    ),
    notes: ['Trois termes : cohésion le long de la surface de rupture, surcharge des terres sur les côtés, poids du coin de sol entraîné.'],
    caption: 'Mécanisme de Prandtl : coin sous la semelle, zones radiales et zones de butée de part et d’autre.',
  },
  {
    id: 'semelle-2x2',
    title: 'Semelle carrée 2 × 2 m dans un sable dense',
    steps: ['stepbystep'],
    formula: ['q_u = q\\,N_q + 0{,}4\\,\\gamma B N_\\gamma = 660{,}6 + 459{,}4 = 1\\,120\\ \\text{kPa}', 'q_{adm} = \\frac{1\\,120 - 28{,}5}{3} = 364\\ \\text{kPa}'],
    h: 250,
    draw: () => (
      <g>
        <Bars x={70} y={30} w={300} h={170} max={1200} ticks={[300, 600, 900, 1200]} unit="kPa" bars={[
          { label: 'q·N_q', v: 660.6, c: 'soil' },
          { label: '0,4γBN_γ', v: 459.4, c: 'orange' },
          { label: 'q_u', v: 1120, c: 'ink' },
          { label: 'q_{adm}', v: 364, c: 'green' },
        ]} />
        <Text x={390} y={70} s={12}>{'φ = 32° :\nN_q = 23,18\nN_γ = 30,22\nq = 19 × 1,5\n   = 28,5 kPa'}</Text>
      </g>
    ),
    notes: ['Sable sans cohésion : le terme $c N_c$ est nul ; la profondeur (terme $q N_q$) apporte plus de la moitié de la portance.'],
    caption: 'Décomposition de la capacité portante et contrainte admissible avec F_s = 3.',
  },
  {
    id: 'contraintes-poussee',
    title: 'Contraintes effectives et poussée des terres',
    steps: ['simple_examples', 'diagrams'],
    formula: ["\\sigma'_v = \\sigma_v - u", 'E_a = \\tfrac{1}{2} K_a \\gamma H^2 = 74{,}9\\ \\text{kN/m}'],
    h: 290,
    draw: () => (
      <g>
        <Plot x={60} y={30} w={190} h={210} xr={[0, 100]} yr={[-5, 0]} yl="kPa"
          xt={[[0, '0'], [54, '54'], [94, '94']]} yt={[[-3, '3 m'], [-5, '5 m']]}
        >
          {(sx, sy) => (
            <g>
              <Poly pts={[[sx(0), sy(0)], [sx(54), sy(-3)], [sx(94), sy(-5)]]} c="ink" w={2.4} />
              <Poly pts={[[sx(0), sy(-3)], [sx(20), sy(-5)]]} c="water" w={2.4} />
              <Poly pts={[[sx(0), sy(0)], [sx(54), sy(-3)], [sx(74), sy(-5)]]} c="red" w={2.6} dash="6 3" />
              <Line x1={sx(0)} y1={sy(-3)} x2={sx(100)} y2={sy(-3)} c="water" w={1.2} dash="4 3" />
              <Text x={sx(96)} y={sy(-2.75)} a="end" s={11} c="water">nappe</Text>
              <Text x={sx(98)} y={sy(-4.6)} a="end" s={12} b>σ</Text>
              <Text x={sx(60)} y={sy(-4.25)} s={12} c="red" b>σ′</Text>
              <Text x={sx(14)} y={sy(-4.3)} s={12} c="water" b>u</Text>
            </g>
          )}
        </Plot>
        <Rect x={300} y={50} w={24} h={200} c="ink" sw={2} fill="pat:concrete" />
        <Rect x={324} y={50} w={160} h={200} c="soil" sw={0} fill="pat:sand" o={0.6} />
        <Poly pts={[[324, 50], [324, 250], [384, 250]]} c="red" w={2} fill="~red" close />
        <Arrow x1={384} y1={183} x2={328} y2={183} c="red" w={3} hs={10} />
        <Text x={392} y={188} s={13} c="red" b>{'E_a = 74,9 kN/m'}</Text>
        <Text x={392} y={206} s={11} c="mute">à H/3 de la base</Text>
        <Text x={354} y={268} a="middle" s={12}>{'K_a γ H = 30 kPa'}</Text>
        <Text x={404} y={70} s={12}>{'φ = 30°\nK_a = 1/3\nH = 5 m'}</Text>
      </g>
    ),
    notes: ['Sous la nappe, l’eau porte une partie de la charge : seule la contrainte effective σ′ = σ − u mobilise le frottement entre grains.'],
    caption: 'À gauche : σ, u et σ′ avec la nappe à 3 m. À droite : diagramme triangulaire de poussée sur un mur de 5 m.',
  },
  {
    id: 'pieux-pile',
    title: 'Fondations d’une pile de pont sur pieux',
    steps: ['practical_case'],
    formula: ['Q_p = q_c\\,A_p = 503\\ \\text{kN} \\qquad Q_s = \\alpha\\,c_u\\,\\pi D\\,l = 703\\ \\text{kN}', 'Q = \\frac{503 + 703}{1{,}4} = 861\\ \\text{kN/pieu}'],
    h: 300,
    draw: () => (
      <g>
        <Rect x={20} y={60} w={460} h={60} c="soil" sw={0} fill="pat:clay" o={0.45} />
        <Rect x={20} y={120} w={460} h={100} c="soil" sw={0} fill="pat:clay" />
        <Rect x={20} y={220} w={460} h={70} c="grey" sw={0} fill="pat:rock" o={0.6} />
        <Line x1={20} y1={60} x2={480} y2={60} c="ink" w={2} />
        <Text x={476} y={92} a="end" s={12} b>limon mou 0–5 m</Text>
        <Text x={476} y={172} a="end" s={12} b>{'argile c_u = 80 kPa'}</Text>
        <Text x={476} y={262} a="end" s={12} b>craie</Text>
        <Rect x={150} y={24} w={44} h={60} c="ink" sw={2.2} fill="pat:concrete" />
        <Rect x={90} y={84} w={164} h={26} c="ink" sw={2.2} fill="pat:concrete" />
        <Arrow x1={172} y1={2} x2={172} y2={22} c="red" w={2.6} hs={9} />
        <Text x={180} y={16} s={12} c="red" b>8 500 kN</Text>
        {[106, 140, 172, 204, 238].map(x => <Rect key={x} x={x - 8} y={110} w={16} h={140} c="ink" sw={1.8} fill="pat:concrete" />)}
        {[150, 180, 210].map(y => <Arrow key={y} x1={262} y1={y} x2={250} y2={y + 10} c="green" w={1.8} hs={6} />)}
        <Arrow x1={238} y1={274} x2={238} y2={254} c="orange" w={2.4} hs={8} />
        <Text x={270} y={160} s={12} c="green" b>{'frottement Q_s'}</Text>
        <Text x={250} y={284} s={12} c="orange" b>{'pointe Q_p'}</Text>
        <Text x={20} y={20} s={12}>{'10 pieux Ø 80 cm, L = 14 m\n(5 visibles sur la coupe)'}</Text>
      </g>
    ),
    notes: ['Une semelle demanderait 52 m² sur l’argile : on traverse le limon mou et on s’appuie sur l’argile et la craie. 10 × 861 = 8 610 kN ≥ 8 500 kN.'],
    caption: 'Charge de la pile reprise par frottement latéral et effort de pointe des pieux forés.',
  },
  {
    id: 'r8-radier',
    title: 'Immeuble R+8 : semelles ou radier ?',
    steps: ['real_examples'],
    formula: ['q_{adm} = \\frac{5{,}14\\,S_u}{2{,}5} = 164\\ \\text{kPa} \\qquad A = \\frac{25\\,000}{164} = 152\\ \\text{m}^2'],
    h: 280,
    draw: () => (
      <g>
        <Rect x={20} y={170} w={460} h={60} c="soil" sw={0} fill="pat:clay" />
        <Rect x={20} y={230} w={460} h={40} c="grey" sw={0} fill="pat:rock" o={0.6} />
        <Line x1={20} y1={170} x2={480} y2={170} c="ink" w={2} />
        <Rect x={150} y={20} w={200} h={140} c="ink" sw={2.2} fill="~ink" />
        {Array.from({ length: 8 }, (_, k) => <Line key={k} x1={150} y1={35.5 + k * 15.5} x2={350} y2={35.5 + k * 15.5} c="ink" w={1} />)}
        <Rect x={130} y={160} w={240} h={14} c="ink" sw={2} fill="pat:concrete" />
        <Line x1={20} y1={215} x2={480} y2={215} c="water" w={1.6} dash="6 4" />
        <Text x={476} y={209} a="end" s={11} c="water">nappe à 3 m</Text>
        <Text x={476} y={190} a="end" s={12} b>{'argile raide S_u = 80 kPa (0–4 m)'}</Text>
        <Text x={476} y={258} a="end" s={12} b>calcaire compact</Text>
        <Text x={250} y={12} a="middle" s={12} c="red" b>N = 25 000 kN</Text>
        <Text x={60} y={110} a="middle" s={12} c="green" b>{'radier\n13 × 12 m\n= 156 m²'}</Text>
        <Text x={430} y={110} a="middle" s={12}>{'tassement\nde l’argile\n≈ 35 mm'}</Text>
      </g>
    ),
    notes: ['Il faut 152 m² d’appui : des semelles isolées se toucheraient presque ; un radier général de 13 × 12 m répartit la charge et limite les tassements différentiels.'],
    caption: 'Mission G2 AVP à Lyon : la surface nécessaire conduit au radier ; le tassement calculé reste acceptable.',
  },
];
