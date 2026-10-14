// Plates — Module 7 · Formulation des bétons
import { Arrow, Circle, Dot, Line, Plot, Poly, Rect, Text } from '../../components/figures/kit.jsx';
import { fnPts } from '../../components/figures/kit.jsx';

const lg = Math.log10;
const lx = d => lg(d / 0.08); // abscissa: log of the sieve size, 0 at 0,08 mm
const SAND = [[0.08, 2], [0.16, 8], [0.315, 25], [0.63, 48], [1.25, 70], [2.5, 88], [5, 100]];
const GRAVEL = [[4, 2], [6.3, 12], [10, 40], [12.5, 60], [16, 85], [20, 98], [25, 100]];
const OAB = [[0.08, 0], [10, 48], [20, 100]];
// Dividing line (95 % of the sand, 5 % of the gravel) crossing O-A gives the share of sand.
const P95 = [3.5, 95];
const P5 = [4.6, 5];
const cross = (() => {
  const yOA = X => (48 * (X - lg(0.08))) / (lg(10) - lg(0.08));
  let lo = 0;
  let hi = 1;
  for (let k = 0; k < 40; k++) {
    const t = (lo + hi) / 2;
    const X = lg(P95[0]) + t * (lg(P5[0]) - lg(P95[0]));
    if (P95[1] + t * (P5[1] - P95[1]) > yOA(X)) lo = t; else hi = t;
  }
  return [10 ** (lg(P95[0]) + lo * (lg(P5[0]) - lg(P95[0]))), P95[1] + lo * (P5[1] - P95[1])];
})();

// 1 m³ by absolute volumes (litres), bottom to top.
const VOL = [
  { n: 'gravillons 400,3 L (1 061 kg)', v: 400.3, fill: 'pat:gravel' },
  { n: 'sable 266,8 L (707 kg)', v: 266.8, fill: 'pat:sand' },
  { n: 'air 20 L', v: 20, fill: 'paper' },
  { n: 'eau 200 L', v: 200, fill: '~water' },
  { n: 'ciment 112,9 L (350 kg)', v: 112.9, fill: '~grey' },
];

export default [
  {
    id: 'courbe-granulaire',
    title: 'Courbe granulaire de référence (Dreux)',
    steps: ['theory'],
    h: 300,
    draw: () => (
      <g>
        <Plot x={60} y={30} w={400} h={210} xr={[0, lx(31.5)]} yr={[0, 100]} yl="tamisats (%)"
          xt={[0.08, 0.315, 1.25, 5, 10, 20].map(v => [lx(v), String(v).replace('.', ',')])} yt={[0, 25, 50, 75, 100].map(v => [v, String(v)])} grid
        >
          {(sx, sy) => {
            const P = ([d, p]) => [sx(lx(d)), sy(p)];
            return (
              <g>
                <Poly pts={SAND.map(P)} c="soil" w={2.6} />
                <Poly pts={GRAVEL.map(P)} c="ink" w={2.6} />
                <Poly pts={OAB.map(P)} c="red" w={2.4} />
                <Line x1={P(P95)[0]} y1={P(P95)[1]} x2={P(P5)[0]} y2={P(P5)[1]} c="green" w={1.8} dash="6 4" />
                <Dot x={P(cross)[0]} y={P(cross)[1]} r={5} c="green" />
                <Text x={P(cross)[0] - 12} y={P(cross)[1] - 10} a="end" s={13} c="green" b>≈ 40 % de sable</Text>
                <Text x={sx(lx(0.63)) - 10} y={sy(62)} a="end" s={13} c="soil" b>sable 0/4</Text>
                <Text x={sx(lx(10)) - 12} y={sy(72)} a="end" s={13} b>gravillon 4/20</Text>
                <Text x={sx(lx(16)) + 4} y={sy(58)} s={13} c="red" b>OAB</Text>
                <Text x={sx(lx(10)) + 8} y={sy(48) + 18} s={12} c="red">A (D/2)</Text>
                <Dot x={sx(lx(10))} y={sy(48)} r={4} c="red" />
                <Dot x={sx(lx(20))} y={sy(100)} r={4} c="red" />
              </g>
            );
          }}
        </Plot>
        <Text x={260} y={276} a="middle" s={12} c="mute">ouverture des tamis (mm), échelle logarithmique</Text>
      </g>
    ),
    notes: [
      'La courbe de référence OAB a sa cassure A au milieu de D ; son ordonnée dépend du dosage, de la forme des granulats et de la vibration.',
      'La ligne de partage (95 % du sable – 5 % du gravillon) coupe OAB à la proportion de sable du mélange.',
    ],
    caption: 'Méthode Dreux-Gorisse : les proportions de sable et de gravillon se lisent sur les courbes granulaires.',
  },
  {
    id: 'volumes-1m3',
    title: 'Un mètre cube en volumes absolus',
    steps: ['formulas', 'stepbystep'],
    formula: ['\\frac{C}{\\rho_c} + E + V_{air} + V_{granulats} = 1\\,000\\ \\text{L}'],
    h: 290,
    draw: () => {
      let top = 250;
      const k = 0.22;
      const LABEL_Y = [206, 133, 104, 77, 42];
      return (
        <g>
          {VOL.map((c, i) => {
            const hgt = c.v * k;
            top -= hgt;
            const mid = top + hgt / 2;
            return (
              <g key={c.n}>
                <Rect x={150} y={top} w={110} h={hgt} c="ink" sw={1.6} fill={c.fill} />
                <Line x1={262} y1={mid} x2={272} y2={LABEL_Y[i] - 4} c="grey" w={1} />
                <Text x={276} y={LABEL_Y[i]} s={13} b={i !== 2}>{c.n}</Text>
              </g>
            );
          })}
          <Arrow x1={128} y1={30} x2={128} y2={250} c="txt" w={1.4} hs={7} both />
          <Text x={120} y={136} a="end" s={14} b>{'1 m³\n= 1 000 L'}</Text>
          <Text x={205} y={274} a="middle" s={13} c="mute">masse du béton frais : 2 318 kg/m³</Text>
        </g>
      );
    },
    notes: ['Granulats : $1\\,000 - 112{,}9 - 200 - 20 = 667{,}1$ L, répartis 40 % sable / 60 % gravillons ($\\rho = 2{,}65$ kg/L).'],
    caption: 'La somme des volumes réels des constituants (sans les vides) fait exactement 1 m³.',
  },
  {
    id: 'eau-humidite',
    title: 'Correction d’eau des granulats humides',
    steps: ['simple_examples'],
    formula: ['E_{ajoutée} = E - \\sum m_{granulat}\\, w = 200 - 35 - 11 = 154\\ \\text{L}'],
    h: 200,
    draw: () => (
      <g>
        <Text x={60} y={36} s={13} b>Eau efficace E = 200 L par m³ :</Text>
        <Rect x={60} y={50} w={308} h={40} c="water" sw={1.8} fill="~water" />
        <Rect x={368} y={50} w={70} h={40} c="soil" sw={1.8} fill="~soil" />
        <Rect x={438} y={50} w={22} h={40} c="ink" sw={1.8} fill="~grey" />
        <Text x={214} y={76} a="middle" s={14} c="water" b>eau à ajouter : 154 L</Text>
        <Text x={403} y={110} a="middle" s={12} c="soil">sable : 35 L</Text>
        <Text x={460} y={126} a="end" s={12}>gravillons : 11 L</Text>
        <Line x1={403} y1={92} x2={403} y2={98} c="soil" w={1.2} />
        <Line x1={449} y1={92} x2={449} y2={114} c="txt" w={1.2} />
        <Text x={60} y={160} s={13}>On pèse les granulats humides :</Text>
        <Text x={60} y={182} s={13} b>sable 707 × 1,05 = 742 kg ; gravillons 1 061 × 1,01 = 1 072 kg</Text>
      </g>
    ),
    notes: ['Sans cette correction, l’eau des granulats s’ajoute à l’eau de gâchage : E/C augmente et la résistance chute.'],
    caption: 'L’eau libre des granulats compte dans E/C : on la retire de l’eau versée au malaxeur.',
  },
  {
    id: 'dalle-parking',
    title: 'Dalle de parking extérieure : spécifier le béton',
    steps: ['practical_case'],
    formula: ['D \\le \\min(40 ;\\ 150) - 5 = 35\\ \\text{mm} \\Rightarrow D = 20\\ \\text{mm}', 'XF4 :\\ E/C \\le 0{,}45,\\ \\text{air} \\ge 4\\ \\%'],
    h: 265,
    draw: () => (
      <g>
        {[70, 120, 170, 220, 270, 320, 370, 420].map(x => (
          <g key={x}>
            <Arrow x1={x} y1={58} x2={x} y2={104} c="water" w={1.6} hs={7} />
            <Rect x={x - 12} y={44} w={6} h={6} c="grey" sw={1} fill="paper" />
          </g>
        ))}
        <Text x={250} y={32} a="middle" s={13} c="water" b>gel + sels de déverglaçage (XF4)</Text>
        <Rect x={40} y={110} w={420} h={80} c="ink" sw={2.2} fill="pat:concrete" />
        {[70, 130, 190, 250, 310, 370, 430].map(x => (
          <g key={x}>
            <Circle cx={x} cy={131} r={5} c="ink" sw={1.4} fill="txt" />
            <Circle cx={x} cy={169} r={5} c="ink" sw={1.4} fill="txt" />
          </g>
        ))}
        {[[95, 150], [160, 122], [215, 160], [282, 145], [340, 178], [398, 150], [455, 128], [58, 178], [150, 182]].map(([x, y]) => (
          <Circle key={`${x}${y}`} cx={x} cy={y} r={2.6} c="water" sw={1.2} fill="paper" />
        ))}
        <Arrow x1={30} y1={110} x2={30} y2={126} c="red" w={1.4} hs={5} both />
        <Text x={36} y={123} s={11} c="red">40 mm</Text>
        <Arrow x1={130} y1={200} x2={190} y2={200} c="txt" w={1.4} hs={6} both />
        <Text x={160} y={214} a="middle" s={12}>150 mm</Text>
        <Line x1={282} y1={147} x2={300} y2={204} c="water" w={1} />
        <Text x={304} y={212} s={12} c="water">air entraîné ≥ 4 %</Text>
        <Rect x={40} y={226} w={420} h={30} rx={6} c="green" sw={1.8} fill="~green" />
        <Text x={250} y={246} a="middle" s={14} b>BPS NF EN 206 C30/37 XC4 XF4 S3 D20 Cl 0,40</Text>
      </g>
    ),
    notes: ['La spécification est dictée par la durabilité (gel et sels), bien plus que par la résistance mécanique.'],
    caption: 'Enrobage, espacement, granulat, air entraîné : chaque terme de la commande a une raison.',
  },
  {
    id: 'resistance-visee',
    title: 'Résistance visée : viser au-dessus de la résistance caractéristique',
    steps: ['theory'],
    formula: ['f_{c,visée} \\approx 1{,}15\\,f_{ck} = 1{,}15 \\times 30 = 34{,}5\\ \\text{MPa}'],
    h: 270,
    draw: () => {
      const pdf = x => Math.exp(-((x - 34.5) ** 2) / (2 * 2.74 * 2.74));
      return (
        <Plot x={60} y={30} w={390} h={180} xr={[24, 44]} yr={[0, 1.1]} yl="fréquence"
          xt={[[30, '30 (f_{ck})'], [34.5, '34,5']]} yt={[]}
        >
          {(sx, sy) => (
            <g>
              <Poly pts={[[sx(24), sy(0)], ...fnPts(pdf, 24, 30, sx, sy, 30).slice(1), [sx(30), sy(0)]]} c="red" w={0} fill="~red" close />
              <Poly pts={fnPts(pdf, 24, 44, sx, sy, 80)} c="ink" w={2.6} />
              <Line x1={sx(34.5)} y1={sy(0)} x2={sx(34.5)} y2={sy(1)} c="green" w={2} dash="6 4" />
              <Text x={sx(35)} y={sy(1.04)} s={12} c="green" b>moyenne visée</Text>
              <Text x={sx(27.5)} y={sy(0.18)} a="middle" s={11} c="red" b>5 %</Text>
              <Text x={sx(43.5)} y={sy(0.6)} a="end" s={11} c="mute">{'dispersion de\nla production'}</Text>
            </g>
          )}
        </Plot>
      );
    },
    notes: ['La production étant dispersée, il faut viser une moyenne plus haute pour que 95 % des résultats dépassent $f_{ck}$.'],
    caption: 'Majoration de Dreux : environ 15 % au-dessus de la résistance caractéristique.',
  },
  {
    id: 'limites-en206',
    title: 'Limites de composition par classe d’exposition',
    steps: ['theory', 'simple_examples'],
    h: 270,
    draw: () => {
      const rows = [['XC1', '0,65', '260'], ['XC2', '0,60', '280'], ['XC3', '0,55', '280'], ['XC4', '0,50', '300'], ['XF4', '0,45', '340'], ['XS3', '0,45', '340']];
      return (
        <g>
          <Rect x={60} y={20} w={380} h={30} c="ink" sw={1.4} fill="~grey" />
          {[['classe', 110], ['E/C max', 250], ['C min (kg/m³)', 380]].map(([t, x]) => <Text key={t} x={x} y={40} a="middle" s={12} b>{t}</Text>)}
          {rows.map(([c, e, m], i) => (
            <g key={c}>
              <Rect x={60} y={50 + i * 30} w={380} h={30} c="grey" sw={0.8} fill={i === 2 ? '~green' : i === 3 ? '~red' : 'paper'} />
              <Text x={110} y={70 + i * 30} a="middle" s={12} b>{c}</Text>
              <Text x={250} y={70 + i * 30} a="middle" s={12}>{e}</Text>
              <Text x={380} y={70 + i * 30} a="middle" s={12}>{m}</Text>
            </g>
          ))}
          <Text x={250} y={250} a="middle" s={12}>{'C = 320 kg, E = 176 L : E/C = 0,55 → admis en XC3, refusé en XC4'}</Text>
        </g>
      );
    },
    notes: ['Valeurs recommandées par l’EN 206 (annexe F) ; l’annexe nationale peut les adapter. La durabilité fixe souvent le dosage plus que la résistance.'],
    caption: 'E/C maximal et dosage minimal en ciment selon l’environnement.',
  },
  {
    id: 'bolomey-g05',
    title: 'Résistance prévue par Bolomey',
    steps: ['simple_examples'],
    formula: ['f_c = G\\,\\sigma\'_c\\left(\\frac{C}{E} - 0{,}5\\right) = 0{,}5 \\times 55 \\times (2{,}0 - 0{,}5) = 41\\ \\text{MPa}'],
    h: 270,
    draw: () => (
      <Plot x={70} y={30} w={380} h={180} xr={[1.2, 2.6]} yr={[0, 60]} yl="MPa"
        xt={[[1.5, '1,5'], [2, '2,0'], [2.5, '2,5']]} yt={[[20, '20'], [41.25, '41'], [60, '60']]} grid
      >
        {(sx, sy) => (
          <g>
            <Poly pts={fnPts(x => 27.5 * (x - 0.5), 1.2, 2.6, sx, sy, 10)} c="ink" w={2.6} />
            <Line x1={sx(2)} y1={sy(0)} x2={sx(2)} y2={sy(41.25)} c="red" w={1.4} dash="5 4" />
            <Line x1={sx(1.2)} y1={sy(41.25)} x2={sx(2)} y2={sy(41.25)} c="red" w={1.4} dash="5 4" />
            <Dot x={sx(2)} y={sy(41.25)} r={6} c="red" />
            <Text x={sx(2.05)} y={sy(38)} s={12} c="red" b>C/E = 2,0</Text>
            <Text x={sx(2.55)} y={sy(5)} a="end" s={11} c="mute">C/E →</Text>
          </g>
        )}
      </Plot>
    ),
    notes: ['Granulats courants (G = 0,5) et CEM 42,5 (σ′c ≈ 55 MPa) : environ 41 MPa de résistance moyenne.'],
    caption: 'Lecture directe de la résistance sur la droite de Bolomey.',
  },
  {
    id: 'ajout-eau-chantier',
    title: '30 litres d’eau ajoutés au pompage',
    steps: ['real_examples'],
    formula: ['\\frac{E}{C} : \\frac{165}{300} = 0{,}55 \\rightarrow \\frac{195}{300} = 0{,}65'],
    h: 230,
    draw: () => (
      <g>
        {[[110, 'E/C', [0.55, 0.65], v => v * 200, v => v.toFixed(2).replace('.', ',')], [340, 'résistance relative', [100, 79], v => v * 1.3, v => `${v} %`]].map(([x, t, vals, h, f]) => (
          <g key={t}>
            <Text x={x} y={24} a="middle" s={12} b>{t}</Text>
            {vals.map((v, i) => (
              <g key={i}>
                <Rect x={x - 60 + i * 64} y={190 - h(v)} w={50} h={h(v)} c={i ? 'red' : 'green'} sw={1.6} fill={i ? '~red' : '~green'} />
                <Text x={x - 35 + i * 64} y={184 - h(v)} a="middle" s={12} b>{f(v)}</Text>
                <Text x={x - 35 + i * 64} y={210} a="middle" s={11}>{i ? 'avec eau' : 'livré'}</Text>
              </g>
            ))}
          </g>
        ))}
      </g>
    ),
    notes: ['22 MPa mesurés au lieu de 30 attendus : carottages, recalcul et renforcement de deux voiles. L’ouvrabilité s’obtient par la formulation et les adjuvants, pas par l’eau.'],
    caption: 'C25/30 dégradé par un ajout d’eau sur chantier.',
  },
];
