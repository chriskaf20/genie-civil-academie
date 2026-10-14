// Plates — Module 12 · Consolidation & tassements
import { Arrow, Circle, Dot, Line, Path, Plot, Poly, Rect, Text, fnPts } from '../../components/figures/kit.jsx';
import { Flow, flowHeight } from '../../components/figures/kit.jsx';

const U = T => (T <= 0.2827 ? Math.sqrt((4 * T) / Math.PI) : 1 - 10 ** (-(T + 0.085) / 0.933));
const rot = ([x, y], [cx, cy], deg) => {
  const t = (deg * Math.PI) / 180;
  return [cx + (x - cx) * Math.cos(t) - (y - cy) * Math.sin(t), cy + (x - cx) * Math.sin(t) + (y - cy) * Math.cos(t)];
};

export default [
  {
    id: 'diffusion-21',
    title: 'Diffusion des contraintes sous une fondation (2 : 1)',
    steps: ['theory'],
    formula: ['\\Delta\\sigma(z) = \\frac{q\\,B\\,L}{(B + z)(L + z)}', "s = \\frac{C_c}{1 + e_0}\\,H\\,\\log_{10}\\frac{\\sigma'_{v0} + \\Delta\\sigma}{\\sigma'_{v0}}"],
    h: 270,
    draw: () => (
      <g>
        <Rect x={20} y={50} w={360} h={200} c="soil" sw={0} fill="pat:soil" o={0.45} />
        <Line x1={20} y1={50} x2={380} y2={50} c="ink" w={2} />
        <Rect x={150} y={38} w={100} h={12} c="ink" sw={2} fill="pat:concrete" />
        {[160, 180, 200, 220, 240].map(x => <Arrow key={x} x1={x} y1={14} x2={x} y2={36} c="red" w={1.6} hs={6} />)}
        <Text x={256} y={24} s={13} c="red" b>q</Text>
        <Line x1={150} y1={50} x2={50} y2={250} c="red" w={1.8} dash="6 4" />
        <Line x1={250} y1={50} x2={350} y2={250} c="red" w={1.8} dash="6 4" />
        <Line x1={100} y1={150} x2={300} y2={150} c="red" w={2.6} />
        <Text x={200} y={144} a="middle" s={12} c="red" b>B + z</Text>
        <Text x={60} y={110} s={12} c="red">pente 2 : 1</Text>
        <Arrow x1={330} y1={51} x2={330} y2={149} c="txt" w={1.2} hs={5} both />
        <Text x={336} y={104} s={13} b>z</Text>
        <Line x1={420} y1={50} x2={420} y2={250} c="txt" w={1.4} />
        <Poly pts={Array.from({ length: 41 }, (_, k) => { const z = 5 * k; return [420 + 60 * (100 / (100 + z)), 50 + z]; })} c="red" w={2.6} />
        <Text x={484} y={66} a="end" s={12} c="red" b>Δσ = q</Text>
        <Text x={430} y={246} s={12} c="red">Δσ ↓</Text>
        <Text x={450} y={36} a="middle" s={12} b>Δσ(z)</Text>
      </g>
    ),
    notes: ['La charge se répartit sur une aire qui s’élargit avec la profondeur : la surcharge décroît, d’où des tassements surtout dus aux couches proches.'],
    caption: 'Méthode 2 : 1 : la charge q·B·L s’étale sur (B + z)(L + z) à la profondeur z.',
  },
  {
    id: 'radier-argile',
    title: 'Tassement d’un radier 10 × 20 m sur argile',
    steps: ['stepbystep'],
    formula: ["\\sigma'_{v0} = 87{,}0\\ \\text{kPa} \\qquad \\Delta\\sigma = \\frac{100 \\times 10 \\times 20}{17 \\times 27} = 43{,}6\\ \\text{kPa}", 's = \\frac{0{,}30}{1{,}90} \\times 6 \\times \\log_{10}\\frac{130{,}6}{87{,}0} = 0{,}167\\ \\text{m}'],
    h: 300,
    draw: () => (
      <g>
        <Rect x={20} y={40} w={460} h={80} c="soil" sw={0} fill="pat:sand" />
        <Rect x={20} y={120} w={460} h={120} c="soil" sw={0} fill="pat:clay" />
        <Rect x={20} y={240} w={460} h={30} c="grey" sw={0} fill="pat:gravel" o={0.7} />
        <Line x1={20} y1={40} x2={480} y2={40} c="ink" w={2} />
        <Rect x={120} y={28} w={200} h={12} c="ink" sw={2} fill="pat:concrete" />
        <Text x={220} y={22} a="middle" s={12} b>radier 10 m, q = 100 kPa</Text>
        <Line x1={20} y1={80} x2={480} y2={80} c="water" w={1.6} dash="6 4" />
        <Text x={476} y={74} a="end" s={11} c="water">nappe à 2 m</Text>
        <Line x1={120} y1={40} x2={50} y2={180} c="red" w={1.4} dash="5 4" />
        <Line x1={320} y1={40} x2={390} y2={180} c="red" w={1.4} dash="5 4" />
        <Line x1={50} y1={180} x2={390} y2={180} c="red" w={2} />
        <Dot x={220} y={180} r={6} c="red" />
        <Text x={228} y={172} s={12} c="red" b>{"z = 7 m : σ′ = 87 kPa, Δσ = 43,6 kPa"}</Text>
        <Text x={476} y={100} a="end" s={12} b>sables</Text>
        <Text x={476} y={140} a="end" s={12} b>argile (4–10 m)</Text>
        <Text x={476} y={262} a="end" s={12} b>graves drainantes</Text>
        <Arrow x1={440} y1={175} x2={440} y2={126} c="water" w={2} hs={7} />
        <Arrow x1={440} y1={185} x2={440} y2={234} c="water" w={2} hs={7} />
        <Text x={432} y={208} a="end" s={12} c="water" b>{'H_{dr} = 3 m'}</Text>
        <Text x={250} y={292} a="middle" s={13} c="green" b>{'s ≈ 17 cm ; t_{50} = 0,89 an ; t_{90} = 3,8 ans'}</Text>
      </g>
    ),
    notes: ['On calcule au milieu de la couche compressible : contrainte effective initiale, surcharge, puis tassement œdométrique.'],
    caption: 'Argile drainée en haut et en bas : chemin de drainage égal à la demi-épaisseur.',
  },
  {
    id: 'tassement-temps',
    title: 'Évolution du tassement dans le temps',
    steps: ['formulas', 'simple_examples'],
    formula: ['T_v = \\frac{c_v\\,t}{H_{dr}^2} \\qquad t_{90} = \\frac{0{,}848\\,H_{dr}^2}{c_v}'],
    h: 290,
    draw: () => (
      <Plot x={70} y={30} w={380} h={200} xr={[0, 16]} yr={[0, 18]} yl="tassement (cm)"
        xt={[0, 4, 8, 12, 16].map(v => [v, String(v)])} yt={[[8.35, '8,4'], [15, '15'], [16.7, '16,7']]} grid
      >
        {(sx, sy) => (
          <g>
            <Line x1={sx(0)} y1={sy(16.7)} x2={sx(16)} y2={sy(16.7)} c="grey" w={1.2} dash="4 3" />
            <Poly pts={fnPts(t => 16.7 * U((2 * t) / 9), 0, 16, sx, sy, 120)} c="green" w={2.8} />
            <Poly pts={fnPts(t => 16.7 * U((2 * t) / 36), 0, 16, sx, sy, 120)} c="red" w={2.6} dash="7 4" />
            <Dot x={sx(0.89)} y={sy(8.35)} r={5} c="green" />
            <Dot x={sx(3.8)} y={sy(15)} r={5} c="green" />
            <Text x={sx(4.2)} y={sy(13.6)} s={12} c="green" b>{'drainage double : t_{90} = 3,8 ans'}</Text>
            <Text x={sx(7)} y={sy(7)} s={12} c="red" b>{'drainage simple : 4 fois plus lent'}</Text>
            <Text x={sx(15.8)} y={sy(1)} a="end" s={12} c="mute">temps (années) →</Text>
          </g>
        )}
      </Plot>
    ),
    notes: ['La durée varie comme le carré du chemin de drainage : doubler $H_{dr}$ multiplie le temps par 4.'],
    caption: 'Courbes de consolidation de l’argile (c_v = 2 m²/an, couche de 6 m).',
  },
  {
    id: 'tour-pise',
    title: 'Le campanile penché : un tassement différentiel',
    steps: ['real_examples'],
    h: 290,
    draw: () => {
      const base = [250, 200];
      const pts = [[230, 200], [270, 200], [270, 40], [230, 40]].map(p => rot(p, base, 5.5));
      return (
        <g>
          <Rect x={20} y={200} w={460} h={30} c="soil" sw={0} fill="pat:sand" />
          <Rect x={20} y={230} w={230} h={50} c="soil" sw={0} fill="pat:clay" o={0.6} />
          <Rect x={250} y={230} w={230} h={50} c="soil" sw={0} fill="pat:clay" />
          <Line x1={20} y1={200} x2={480} y2={200} c="ink" w={2} />
          <Poly pts={pts} c="ink" w={2.4} fill="~ink" close />
          {[0, 1, 2, 3, 4, 5].map(k => {
            const [a, b] = [rot([230, 60 + 25 * k], base, 5.5), rot([270, 60 + 25 * k], base, 5.5)];
            return <Line key={k} x1={a[0]} y1={a[1]} x2={b[0]} y2={b[1]} c="ink" w={1} />;
          })}
          <Line x1={250} y1={200} x2={250} y2={30} c="grey" w={1.2} dash="5 4" />
          <Text x={262} y={34} s={13} c="red" b>5,5° (1990)</Text>
          <Text x={40} y={190} s={13} b>N</Text>
          <Text x={460} y={190} s={13} b>S</Text>
          <Text x={360} y={258} a="middle" s={12} b>argile plus compressible</Text>
          {[[150, 214], [170, 222]].map(([x, y]) => <Line key={x} x1={x - 60} y1={y - 40} x2={x + 46} y2={y + 4} c="red" w={2} />)}
          <Text x={70} y={160} s={12} c="red" b>{'sous-excavation\n(1999-2001)'}</Text>
        </g>
      );
    },
    notes: ['Le sol plus compressible au sud a tassé davantage. On a extrait un peu de sol sous le côté nord pour le faire tasser à son tour et réduire l’inclinaison.'],
    caption: 'Tour de 56 m sur argiles compressibles : un tassement différentiel de quelques décimètres suffit à l’incliner.',
  },
  {
    id: 'remblai-drains',
    title: 'Remblai d’accès sur argile molle : drains verticaux',
    steps: ['practical_case'],
    formula: ['s = \\frac{0{,}45}{2{,}30} \\times 8 \\times \\log_{10}\\frac{140}{40} = 0{,}85\\ \\text{m}', 't_{90} = \\frac{0{,}848 \\times 4^2}{1} = 13{,}6\\ \\text{ans}'],
    h: 280,
    draw: () => (
      <g>
        <Rect x={20} y={110} w={460} h={140} c="soil" sw={0} fill="pat:clay" />
        <Rect x={20} y={250} w={460} h={20} c="grey" sw={0} fill="pat:gravel" o={0.7} />
        <Poly pts={[[80, 110], [180, 40], [320, 40], [420, 110]]} c="ink" w={2.2} fill="pat:gravel" close />
        <Rect x={60} y={104} w={380} h={6} c="water" sw={0} fill="~water" />
        {Array.from({ length: 13 }, (_, k) => 90 + k * 27).map(x => <Line key={x} x1={x} y1={110} x2={x} y2={250} c="water" w={2} />)}
        {[[103, 170], [130, 200], [157, 150], [238, 180], [265, 210], [292, 160]].map(([x, y]) => (
          <g key={`${x}${y}`}>
            <Arrow x1={x + 12} y1={y} x2={x + 2} y2={y} c="water" w={1.4} hs={5} />
            <Arrow x1={x + 15} y1={y} x2={x + 25} y2={y} c="water" w={1.4} hs={5} />
          </g>
        ))}
        <Path d="M 80 118 Q 250 160 420 118" c="red" w={1.8} dash="6 4" />
        <Text x={250} y={34} a="middle" s={12} b>remblai 5 m (100 kPa)</Text>
        <Text x={476} y={132} a="end" s={12} b>argile molle 8 m</Text>
        <Text x={250} y={152} a="middle" s={12} c="red" b>tassement 85 cm</Text>
        <Text x={250} y={232} a="middle" s={12} c="water" b>drains verticaux tous les 1,5 m</Text>
        <Text x={20} y={20} s={12}>{'sans drains : t_{90} = 13,6 ans ; avec drains : 6 à 12 mois'}</Text>
      </g>
    ),
    notes: ['Les drains raccourcissent le chemin de l’eau (radial, quelques décimètres) : la consolidation se fait pendant le préchargement, avant la chaussée.'],
    caption: 'Préchargement par le remblai et drains verticaux : le tassement est « consommé » avant la mise en service.',
  },
  {
    id: 'analogie-ressort',
    title: 'Analogie du ressort et de l’eau (Terzaghi)',
    steps: ['theory'],
    h: 245,
    draw: () => (
      <g>
        {[[30, 60, 't = 0', 'u = Δσ'], [190, 74, 'drainage', 'u diminue'], [350, 88, 't → ∞', "Δσ' = Δσ"]].map(([x, py, t, d], k) => (
          <g key={t}>
            <Rect x={x + 11} y={py + 10} w={98} h={170 - py} c="water" sw={0} fill="~water" />
            <Path d={`M ${x + 60} ${py + 10} ${Array.from({ length: 8 }, (_, i) => `L ${x + 60 + (i % 2 ? -14 : 14)} ${py + 10 + ((i + 0.5) * (170 - py)) / 8}`).join(' ')} L ${x + 60} 180`} c="ink" w={1.8} />
            <Rect x={x + 10} y={70} w={100} h={110} c="ink" sw={2.2} />
            <Rect x={x + 11} y={py} w={98} h={10} c="ink" sw={1.4} fill="~grey" />
            <Arrow x1={x + 60} y1={py - 40} x2={x + 60} y2={py - 2} c="red" w={2.4} hs={8} />
            {k > 0 && <Circle cx={x + 118} cy={176} r={3} c="water" sw={0} fill="water" />}
            {k > 0 && <Circle cx={x + 124} cy={186} r={3} c="water" sw={0} fill="water" />}
            <Text x={x + 60} y={206} a="middle" s={12} b>{t}</Text>
            <Text x={x + 60} y={224} a="middle" s={12} c={k === 2 ? 'green' : 'water'}>{d}</Text>
          </g>
        ))}
      </g>
    ),
    notes: ['L’eau, incompressible, reprend d’abord toute la charge ; elle s’évacue lentement à travers l’argile peu perméable et le squelette (ressort) se charge peu à peu.'],
    caption: 'Le piston s’enfonce à mesure que l’eau s’échappe.',
  },
  {
    id: 'oedometre',
    title: 'L’essai œdométrique',
    steps: ['theory'],
    h: 230,
    draw: () => (
      <g>
        <Rect x={100} y={90} w={220} h={110} c="water" sw={1.4} fill="~water" />
        <Rect x={172} y={110} w={156} h={10} c="ink" sw={1} fill="pat:sand" />
        <Rect x={172} y={120} w={156} h={40} c="ink" sw={1} fill="pat:clay" />
        <Rect x={172} y={160} w={156} h={10} c="ink" sw={1} fill="pat:sand" />
        <Rect x={170} y={108} w={160} h={64} c="ink" sw={3} />
        <Rect x={180} y={94} w={140} h={14} c="ink" sw={1.6} fill="~grey" />
        <Arrow x1={250} y1={36} x2={250} y2={92} c="red" w={2.6} hs={9} />
        <Text x={242} y={56} a="end" s={12} c="red">charge par paliers</Text>
        <Circle cx={310} cy={50} r={18} c="ink" sw={1.8} fill="paper" />
        <Line x1={310} y1={50} x2={320} y2={40} c="red" w={1.6} />
        <Line x1={310} y1={68} x2={310} y2={94} c="ink" w={1.4} />
        <Text x={334} y={46} s={11}>comparateur</Text>
        {[[115, 'pierre poreuse'], [140, 'argile'], [172, 'anneau rigide']].map(([y, t]) => (
          <g key={t}>
            <Line x1={332} y1={y} x2={350} y2={y} c="txt" w={1} />
            <Text x={354} y={y + 4} s={11}>{t}</Text>
          </g>
        ))}
        <Text x={110} y={194} s={11} c="water">bain d’eau</Text>
      </g>
    ),
    notes: ['L’anneau empêche toute déformation latérale : on mesure la variation de hauteur, donc de l’indice des vides, sous chaque palier de charge.'],
    caption: 'Échantillon intact confiné, drainé en haut et en bas.',
  },
  {
    id: 'courbe-oedometrique',
    title: 'Courbe œdométrique : e en fonction de log σ\'',
    steps: ['theory', 'formulas'],
    formula: ['C_c = -\\frac{\\Delta e}{\\Delta \\log \\sigma\'} \\qquad C_s \\approx \\frac{C_c}{5} \\text{ à } \\frac{C_c}{10}'],
    h: 260,
    draw: () => (
      <Plot x={70} y={30} w={380} h={190} xr={[0, 3]} yr={[0.6, 1]} yl="e"
        xt={[[0, '1'], [1, '10'], [2, '100'], [3, '1000 kPa']]} yt={[[0.7, '0,70'], [0.8, '0,80'], [0.9, '0,90']]} grid
      >
        {(sx, sy) => (
          <g>
            <Poly pts={fnPts(x => (x < 2 ? 0.95 - 0.05 * (x - 1) : 0.9 - 0.3 * (x - 2)), 1, 3, sx, sy, 41)} c="ink" w={2.6} />
            <Line x1={sx(2)} y1={sy(0.6)} x2={sx(2)} y2={sy(0.9)} c="red" w={1.4} dash="5 4" />
            <Text x={sx(2) + 6} y={sy(0.64)} s={12} c="red" b>{"σ'_{p}"}</Text>
            <Text x={sx(1.5)} y={sy(0.95)} a="middle" s={12} c="green" b>C_s</Text>
            <Text x={sx(2.6) + 8} y={sy(0.73)} s={12} c="red" b>C_c</Text>
            <Text x={sx(1.3)} y={sy(0.99)} a="middle" s={11}>surconsolidé</Text>
            <Text x={sx(2.5)} y={sy(0.99)} a="middle" s={11}>normalement consolidé</Text>
          </g>
        )}
      </Plot>
    ),
    notes: ['Tant que la contrainte reste sous la préconsolidation $\\sigma\'_p$, le sol suit la pente faible $C_s$ : les tassements restent petits.'],
    caption: 'Recompression puis compression vierge.',
  },
  {
    id: 'contrainte-effective-6m',
    title: 'Contrainte effective à 6 m, nappe en surface',
    steps: ['simple_examples', 'formulas'],
    formula: ['\\sigma\' = \\sigma - u = 20 \\times 6 - 9{,}81 \\times 6 = 120 - 59 = 61\\ \\text{kPa}'],
    h: 230,
    draw: () => (
      <g>
        <Rect x={40} y={40} w={100} h={150} c="ink" sw={1.4} fill="pat:sand" />
        <Line x1={40} y1={40} x2={140} y2={40} c="water" w={2.6} dash="6 3" />
        <Text x={90} y={32} a="middle" s={12} c="water" b>▽ nappe</Text>
        <Arrow x1={30} y1={41} x2={30} y2={189} c="txt" w={1.2} hs={5} both />
        <Text x={24} y={118} a="end" s={12}>6 m</Text>
        <Rect x={200} y={170} w={118} h={26} c="water" sw={1.6} fill="~water" />
        <Rect x={318} y={170} w={122} h={26} c="soil" sw={1.6} fill="~soil" />
        <Text x={259} y={188} a="middle" s={12} b>u = 59</Text>
        <Text x={379} y={188} a="middle" s={12} b>σ' = 61</Text>
        <Arrow x1={200} y1={150} x2={440} y2={150} c="ink" w={1.4} hs={6} both />
        <Text x={320} y={142} a="middle" s={12}>σ = 120 kPa</Text>
        <Line x1={140} y1={183} x2={196} y2={183} c="grey" w={1} dash="3 3" />
      </g>
    ),
    notes: ['Près de la moitié de la contrainte totale est portée par l’eau : seule l’autre moitié serre les grains.'],
    caption: 'Partage de la contrainte totale entre l’eau et le squelette.',
  },
  {
    id: 'drainage-double',
    title: 'Longueur de drainage : simple ou double',
    steps: ['simple_examples'],
    formula: ['t \\propto H_{dr}^2 \\Rightarrow \\frac{t(H_{dr} = 6)}{t(H_{dr} = 3)} = \\frac{36}{9} = 4'],
    h: 250,
    draw: () => (
      <g>
        {[[40, true], [290, false]].map(([x, two]) => (
          <g key={x}>
            <Rect x={x} y={40} w={150} h={20} c="ink" sw={1} fill="pat:sand" />
            <Rect x={x} y={60} w={150} h={120} c="ink" sw={1} fill="pat:clay" />
            <Rect x={x} y={180} w={150} h={20} c="ink" sw={1} fill={two ? 'pat:sand' : 'pat:rock'} />
            {two ? (
              <g>
                <Arrow x1={x + 75} y1={118} x2={x + 75} y2={64} c="water" w={2.4} hs={8} />
                <Arrow x1={x + 75} y1={122} x2={x + 75} y2={176} c="water" w={2.4} hs={8} />
              </g>
            ) : <Arrow x1={x + 75} y1={176} x2={x + 75} y2={64} c="water" w={2.4} hs={8} />}
          </g>
        ))}
        <Text x={115} y={222} a="middle" s={12} b>{'H_{dr} = 3 m : t_{90} = 3,8 ans'}</Text>
        <Text x={365} y={222} a="middle" s={12} c="red" b>{'H_{dr} = 6 m : t_{90} = 15 ans'}</Text>
        <Text x={365} y={194} a="middle" s={11} c="mute">imperméable</Text>
      </g>
    ),
    notes: ['La même argile de 6 m met quatre fois plus de temps à se consolider si elle ne se draine que par le haut.'],
    caption: 'L’eau sort par la ou les faces perméables.',
  },
  {
    id: 'methode-oedometrique',
    title: 'Tassement par le module œdométrique',
    steps: ['simple_examples'],
    formula: ['s = \\frac{\\Delta\\sigma\\,h}{E_{oed}} = \\frac{50 \\times 2}{5\\,000} = 0{,}02\\ \\text{m}'],
    h: 210,
    draw: () => (
      <g>
        <Line x1={150} y1={66} x2={350} y2={66} c="grey" w={1.4} dash="5 4" />
        <Rect x={150} y={76} w={200} h={90} c="ink" sw={2} fill="pat:clay" />
        {[180, 220, 260, 300, 330].map(x => <Arrow key={x} x1={x} y1={34} x2={x} y2={72} c="red" w={1.8} hs={7} />)}
        <Text x={250} y={26} a="middle" s={12} c="red" b>Δσ = 50 kPa</Text>
        <Text x={250} y={126} a="middle" s={12} b>{'E_{oed} = 5 MPa'}</Text>
        <Arrow x1={130} y1={77} x2={130} y2={165} c="txt" w={1.2} hs={5} both />
        <Text x={124} y={126} a="end" s={12}>h = 2 m</Text>
        <Arrow x1={370} y1={66} x2={370} y2={76} c="red" w={1.4} hs={4} both />
        <Text x={378} y={76} s={12} c="red" b>s = 2 cm</Text>
        <Text x={250} y={194} a="middle" s={11} c="mute">{'couche mince : un ressort de raideur E_{oed}/h'}</Text>
      </g>
    ),
    notes: ['Méthode rapide pour des couches minces ou des sols peu compressibles ; on somme les couches.'],
    caption: 'Écrasement d’une couche confinée latéralement.',
  },
  {
    id: 'demarche-tassement',
    title: 'Démarche de calcul d’un tassement',
    steps: ['diagrams'],
    h: flowHeight(['Coupe : couches, nappe, poids volumiques', "Contraintes initiales σ'_{v0} au milieu des couches", 'Surcharge Δσ(z) : 2:1 ou Boussinesq', "Paramètres : C_c, C_s, e_0, σ'_{p} ou E_{oed}", 'Tassement de chaque couche, puis somme', 'Temps : c_v, H_{dr}, T_v → s(t)'], { cols: 3 }),
    draw: () => <Flow items={['Coupe : couches, nappe, poids volumiques', "Contraintes initiales σ'_{v0} au milieu des couches", 'Surcharge Δσ(z) : 2:1 ou Boussinesq', "Paramètres : C_c, C_s, e_0, σ'_{p} ou E_{oed}", 'Tassement de chaque couche, puis somme', 'Temps : c_v, H_{dr}, T_v → s(t)']} cols={3} />,
    notes: ['On calcule au milieu de chaque couche puis on additionne : une couche épaisse se découpe en sous-couches.'],
    caption: 'De la coupe géotechnique à la courbe tassement-temps.',
  },
];
