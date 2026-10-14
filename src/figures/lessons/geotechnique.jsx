// Plates — Module 12 · Capacité portante & mécanique des sols
import { Arrow, Bars, Line, Path, Plot, Poly, Rect, Text } from '../../components/figures/kit.jsx';
import { Angle, Dot, fnPts } from '../../components/figures/kit.jsx';

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
  {
    id: 'classes-granulo',
    title: 'Classes de sols selon la taille des grains',
    steps: ['theory'],
    h: 220,
    draw: () => (
      <g>
        {[[30, 89, '~violet', 'argile', 'cohésive,\ncompressible'], [89, 199, '~orange', 'limon', 'sensible\nà l’eau'], [199, 309, 'pat:sand', 'sable', 'frottant,\nperméable'], [309, 419, 'pat:gravel', 'gravier', 'très\nperméable'], [419, 470, '~grey', 'cailloux', 'très\nrigide']].map(([a, b, f, t, d]) => (
          <g key={t}>
            <Rect x={a} y={90} w={b - a} h={44} c="ink" sw={1.6} fill={f} />
            <Text x={(a + b) / 2} y={78} a="middle" s={12} b>{t}</Text>
            <Text x={(a + b) / 2} y={154} a="middle" s={10}>{d}</Text>
          </g>
        ))}
        {[[89, '0,002'], [199, '0,063'], [309, '2'], [419, '63 mm']].map(([x, t]) => <Text key={t} x={x} y={204} a="middle" s={11} c="red">{t}</Text>)}
      </g>
    ),
    notes: ['Échelle logarithmique : chaque classe couvre un rapport d’environ 30 sur les diamètres.'],
    caption: 'Limites de classes de la NF EN ISO 14688.',
  },
  {
    id: 'rupture-semelle',
    title: 'Mécanisme de rupture sous une semelle',
    steps: ['theory'],
    h: 230,
    draw: () => (
      <g>
        <Rect x={20} y={50} w={460} h={30} c="soil" sw={0} fill="~soil" />
        <Rect x={20} y={80} w={460} h={130} c="soil" sw={0} fill="pat:sand" o={0.45} />
        <Rect x={200} y={50} w={100} h={30} c="ink" sw={2} fill="pat:concrete" />
        <Arrow x1={250} y1={14} x2={250} y2={48} c="red" w={2.6} hs={9} />
        <Poly pts={[[200, 80], [300, 80], [250, 130]]} c="ink" w={2} fill="~red" close />
        <Path d="M 250 130 Q 340 168 380 110 L 440 80" c="ink" w={2} />
        <Path d="M 250 130 Q 160 168 120 110 L 60 80" c="ink" w={2} />
        <Line x1={300} y1={80} x2={380} y2={110} c="ink" w={1.4} dash="4 3" />
        <Line x1={200} y1={80} x2={120} y2={110} c="ink" w={1.4} dash="4 3" />
        <Text x={250} y={104} a="middle" s={13} b>I</Text>
        <Text x={318} y={124} a="middle" s={13} b>II</Text>
        <Text x={392} y={96} a="middle" s={13} b>III</Text>
        <Text x={182} y={124} a="middle" s={13} b>II</Text>
        <Text x={108} y={96} a="middle" s={13} b>III</Text>
        <Text x={100} y={70} a="middle" s={11}>{'q = γ D_{f}'}</Text>
        <Text x={250} y={196} a="middle" s={11}>I coin sous la semelle · II zone radiale · III zone de butée</Text>
      </g>
    ),
    notes: ['Le coin I s’enfonce et repousse latéralement le sol : c’est pourquoi la cohésion, la surcharge q et le poids du sol interviennent dans les trois termes de $q_u$.'],
    caption: 'Rupture générale d’un sol frottant (Prandtl, Terzaghi).',
  },
  {
    id: 'facteurs-portance',
    title: 'Facteurs de portance en fonction de φ',
    steps: ['formulas'],
    formula: ['N_q = e^{\\pi \\tan\\varphi} \\tan^2\\!\\left(45° + \\frac{\\varphi}{2}\\right) \\quad N_c = \\frac{N_q - 1}{\\tan\\varphi} \\quad N_\\gamma = 2\\,(N_q - 1)\\tan\\varphi'],
    h: 260,
    draw: () => {
      const r = d => (d * Math.PI) / 180;
      const Nq = f => Math.exp(Math.PI * Math.tan(r(f))) * Math.tan(r(45 + f / 2)) ** 2;
      return (
        <Plot x={70} y={40} w={360} h={180} xr={[20, 40]} yr={[0, 110]} yl="N"
          xt={[20, 25, 30, 35, 40].map(v => [v, `${v}°`])} yt={[[25, '25'], [50, '50'], [75, '75'], [100, '100']]} grid
        >
          {(sx, sy) => (
            <g>
              <Poly pts={fnPts(f => (Nq(f) - 1) / Math.tan(r(f)), 20, 40, sx, sy, 40)} c="red" w={2.4} />
              <Poly pts={fnPts(Nq, 20, 40, sx, sy, 40)} c="water" w={2.4} />
              <Poly pts={fnPts(f => 2 * (Nq(f) - 1) * Math.tan(r(f)), 20, 40, sx, sy, 40)} c="green" w={2.4} />
              <Text x={sx(40) + 4} y={sy(75)} s={12} c="red" b>N_c</Text>
              <Text x={sx(40) + 4} y={sy(62)} s={12} c="water" b>N_q</Text>
              <Text x={sx(40) + 4} y={sy(104)} s={12} c="green" b>N_γ</Text>
              <Line x1={sx(30)} y1={sy(0)} x2={sx(30)} y2={sy(110)} c="grey" w={1.2} dash="5 4" />
              {[30.14, 18.4, 20.09].map(v => <Dot key={v} x={sx(30)} y={sy(v)} r={4} />)}
              <Text x={sx(21)} y={sy(96)} s={12}>φ = 30° : 30,1 · 18,4 · 20,1</Text>
            </g>
          )}
        </Plot>
      );
    },
    notes: ['Les facteurs croissent très vite avec φ : 2° d’erreur sur l’angle de frottement changent la portance de 25 à 30 %.'],
    caption: 'Valeurs de l’annexe D de l’Eurocode 7.',
  },
  {
    id: 'contrainte-5m',
    title: 'Contrainte effective à 5 m de profondeur',
    steps: ['simple_examples'],
    formula: ['\\sigma\'_v = \\sigma_v - u = (18 \\times 3 + 20 \\times 2) - 10 \\times 2 = 94 - 20 = 74\\ \\text{kPa}'],
    h: 225,
    draw: () => (
      <g>
        <Rect x={40} y={40} w={160} h={90} c="ink" sw={1.4} fill="pat:clay" />
        <Rect x={40} y={130} w={160} h={60} c="ink" sw={1.4} fill="pat:sand" />
        <Text x={120} y={90} a="middle" s={12} b>argile γ = 18</Text>
        <Text x={120} y={165} a="middle" s={12} b>{'sable γ_{sat} = 20'}</Text>
        <Line x1={40} y1={130} x2={200} y2={130} c="water" w={2.4} dash="6 3" />
        <Text x={196} y={124} a="end" s={12} c="water" b>▽ nappe</Text>
        <Text x={34} y={134} a="end" s={12}>3 m</Text>
        <Text x={34} y={194} a="end" s={12}>5 m</Text>
        <Line x1={260} y1={40} x2={260} y2={190} c="txt" w={1.6} />
        <Line x1={260} y1={40} x2={440} y2={40} c="txt" w={1.6} />
        <Text x={440} y={32} a="end" s={11} c="mute">σ (kPa)</Text>
        <Poly pts={[[260, 40], [346, 130], [410, 190]]} c="ink" w={2.4} />
        <Poly pts={[[260, 130], [292, 190]]} c="water" w={2.4} />
        <Poly pts={[[260, 40], [346, 130], [378, 190]]} c="red" w={2.4} dash="6 3" />
        <Text x={414} y={192} s={12} b>σ_v = 94</Text>
        <Text x={378} y={208} a="middle" s={12} c="red" b>σ' = 74</Text>
        <Text x={292} y={208} a="middle" s={12} c="water" b>u = 20</Text>
      </g>
    ),
    notes: ['Sous la nappe, l’eau reprend une partie du poids : seule la contrainte effective mobilise la résistance du sol.'],
    caption: 'Diagrammes de contraintes totale, interstitielle et effective.',
  },
  {
    id: 'poussee-mur-5m',
    title: 'Poussée active sur un mur de 5 m',
    steps: ['simple_examples'],
    formula: ['K_a = \\tan^2(45° - 15°) = 0{,}333 \\qquad E_a = \\tfrac{1}{2} K_a \\gamma H^2 = 0{,}5 \\times 0{,}333 \\times 18 \\times 25 = 75\\ \\text{kN/m}'],
    h: 230,
    draw: () => (
      <g>
        <Rect x={160} y={40} w={180} h={150} c="soil" sw={0} fill="pat:sand" o={0.6} />
        <Rect x={145} y={30} w={15} h={165} c="ink" sw={2} fill="pat:concrete" />
        <Line x1={40} y1={195} x2={160} y2={195} c="ink" w={2} />
        <Poly pts={[[145, 40], [145, 190], [55, 190]]} c="red" w={2} fill="~red" close />
        <Text x={92} y={212} a="middle" s={12} c="red" b>K_a γ H = 30 kPa</Text>
        <Arrow x1={260} y1={140} x2={164} y2={140} c="red" w={2.6} hs={9} />
        <Text x={270} y={136} s={12} c="red" b>E_a = 75 kN/m</Text>
        <Text x={270} y={156} s={11} c="mute">à H/3 du pied</Text>
        <Arrow x1={370} y1={41} x2={370} y2={189} c="txt" w={1.2} hs={6} both />
        <Text x={378} y={118} s={12}>H = 5 m</Text>
      </g>
    ),
    notes: ['La pression croît linéairement avec la profondeur ; la résultante, aire du triangle, s’applique au tiers inférieur.'],
    caption: 'Sol frottant sec : c = 0, φ = 30°, γ = 18 kN/m³.',
  },
  {
    id: 'tassement-remblai-4m',
    title: 'Tassement d’une couche d’argile sous un remblai',
    steps: ['simple_examples'],
    formula: ['s_c = \\frac{0{,}35}{1{,}85} \\times 4 \\times \\log\\frac{60 + 40}{60} = 0{,}168\\ \\text{m}'],
    h: 220,
    draw: () => (
      <g>
        <Poly pts={[[120, 50], [380, 50], [430, 90], [70, 90]]} c="ink" w={1.8} fill="pat:gravel" close />
        <Text x={250} y={76} a="middle" s={12} b>{'remblai : Δσ\'_{v} = 40 kPa'}</Text>
        <Rect x={20} y={90} w={460} h={80} c="soil" sw={0} fill="pat:clay" />
        <Rect x={20} y={170} w={460} h={30} c="soil" sw={0} fill="pat:sand" />
        <Text x={250} y={140} a="middle" s={12} b>{'argile H = 4 m · C_c = 0,35 · e_0 = 0,85 · σ\'_{v0} = 60 kPa'}</Text>
        <Arrow x1={420} y1={96} x2={420} y2={122} c="red" w={2.2} hs={7} />
        <Text x={410} y={116} a="end" s={12} c="red" b>s = 17 cm</Text>
      </g>
    ),
    notes: ['Ce tassement se développe en 2 à 5 ans : on le surveille avant de réaliser les ouvrages sensibles.'],
    caption: 'Consolidation primaire d’une argile normalement consolidée.',
  },
];
