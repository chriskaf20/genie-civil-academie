// Plates — Module 11 · Mécanique des roches
import { Circle, Line, Path, Plot, Poly, Rect, Text, fnPts } from '../../components/figures/kit.jsx';
import { Bars } from '../../components/figures/kit.jsx';

const X = rmr => 40 + 4.2 * rmr;
const CLASSES = [[0, 20, 'V', 'très médiocre', '~red'], [20, 40, 'IV', 'médiocre', '~orange'], [40, 60, 'III', 'moyenne', '~soil'], [60, 80, 'II', 'bonne', '~green'], [80, 100, 'I', 'très bonne', '~water']];
// Core run of 150 cm: pieces in cm (≥ 10 cm count in RQD).
const CORE = [25, 4, 6, 18, 3, 32, 5, 7, 12, 8, 20, 6, 4];
const hb = (s3, mb, s, a) => s3 + 60 * ((mb * s3) / 60 + s) ** a;
const tunnel = cx => `M ${cx - 55} 200 L ${cx - 55} 140 A 55 55 0 0 1 ${cx + 55} 140 L ${cx + 55} 200`;
const radial = (cx, angles, r1, r2) => angles.map(a => {
  const t = (a * Math.PI) / 180;
  return [cx + r1 * Math.cos(t), 140 + r1 * Math.sin(t), cx + r2 * Math.cos(t), 140 + r2 * Math.sin(t)];
});

export default [
  {
    id: 'classifications',
    title: 'Classifications des massifs rocheux : RMR et Q',
    steps: ['theory'],
    formula: ['Q = \\frac{RQD}{J_n}\\cdot\\frac{J_r}{J_a}\\cdot\\frac{J_w}{SRF}', 'RMR \\approx 9 \\ln Q + 44'],
    h: 230,
    draw: () => (
      <g>
        <Text x={20} y={56} s={13} b>RMR</Text>
        {CLASSES.map(([a, b, cl, q, f]) => (
          <g key={cl}>
            <Rect x={X(a)} y={70} w={X(b) - X(a)} h={34} c="ink" sw={1.4} fill={f} />
            <Text x={(X(a) + X(b)) / 2} y={92} a="middle" s={14} b>{cl}</Text>
            <Text x={(X(a) + X(b)) / 2} y={62} a="middle" s={11}>{q}</Text>
          </g>
        ))}
        {[0, 20, 40, 60, 80, 100].map(v => <Text key={v} x={X(v)} y={120} a="middle" s={11} c="mute">{String(v)}</Text>)}
        <Text x={20} y={156} s={13} b>Q</Text>
        <Line x1={X(0)} y1={150} x2={X(100)} y2={150} c="ink" w={1.6} />
        {[[0.01, '0,01'], [0.1, '0,1'], [1, '1'], [10, '10'], [100, '100']].map(([q, lab]) => {
          const x = X(9 * Math.log(q) + 44);
          return (
            <g key={lab}>
              <Line x1={x} y1={145} x2={x} y2={155} c="ink" w={1.6} />
              <Text x={x} y={172} a="middle" s={11}>{lab}</Text>
            </g>
          );
        })}
        {[[66, 'calcaire du tunnel : Q = 11,8 ; RMR ≈ 66', 'green'], [30.4, 'rocher altéré : Q = 0,22 ; RMR ≈ 30', 'red']].map(([r, lab, c], k) => (
          <g key={lab}>
            <Line x1={X(r)} y1={66} x2={X(r)} y2={k ? 196 : 212} c={c} w={2} dash="4 3" />
            <Circle cx={X(r)} cy={87} r={5} c={c} sw={2} fill="paper" />
            <Text x={X(r)} y={k ? 210 : 226} a="middle" s={12} c={c} b>{lab}</Text>
          </g>
        ))}
      </g>
    ),
    notes: ['RMR additionne 5 notes (résistance, RQD, espacement et état des joints, eau) ; Q combine taille des blocs, frottement des joints et contraintes.'],
    caption: 'Deux échelles de qualité du rocher, reliées par une corrélation empirique.',
  },
  {
    id: 'rqd-carotte',
    title: 'RQD d’une passe de carottage de 1,50 m',
    steps: ['stepbystep'],
    formula: ['RQD = \\frac{25 + 18 + 32 + 12 + 20}{150} \\times 100 = 71\\ \\%'],
    h: 230,
    draw: () => {
      let x = 40;
      return (
        <g>
          <Rect x={34} y={70} w={432} h={38} rx={4} c="soil" sw={1.6} fill="pat:wood" />
          {CORE.map((L, k) => {
            const w = L * 2.8;
            const x0 = x;
            x += w;
            const ok = L >= 10;
            return (
              <g key={k}>
                <Rect x={x0 + 0.8} y={76} w={w - 1.6} h={26} rx={3} c={ok ? 'green' : 'red'} sw={1.4} fill={ok ? '~green' : '~red'} />
                {ok && <Text x={x0 + w / 2} y={94} a="middle" s={12} b>{String(L)}</Text>}
              </g>
            );
          })}
          <Text x={40} y={60} s={12} c="mute">longueurs en cm, sens du carottage →</Text>
          <Text x={250} y={140} a="middle" s={13} c="green" b>morceaux ≥ 10 cm : 107 cm sur 150 cm → RQD = 71 %</Text>
          <Text x={250} y={170} a="middle" s={12}>{'Q = (71 / 9) × (1,5 / 1) × (1 / 1) = 11,8 → RMR ≈ 66 (classe II) → GSI ≈ 61'}</Text>
          <Text x={250} y={196} a="middle" s={12}>{'Hoek-Brown : s = 0,013 → σ_{cm} ≈ 6,8 MPa ; charge d’Unal sur 10 m : 92 kPa'}</Text>
        </g>
      );
    },
    notes: ['Les fragments de moins de 10 cm (rouge) ne comptent pas : ils signalent des joints serrés ou un rocher broyé.'],
    caption: 'Du carottage au soutènement : RQD, Q, RMR, GSI puis résistance du massif.',
  },
  {
    id: 'hoek-brown',
    title: 'Critère de Hoek-Brown : roche intacte et massif',
    steps: ['formulas'],
    formula: ['\\sigma_1 = \\sigma_3 + \\sigma_{ci}\\left(m_b\\,\\frac{\\sigma_3}{\\sigma_{ci}} + s\\right)^a', 'GSI = 61 :\\ m_b = 2{,}48 \\quad s = 0{,}013 \\quad a = 0{,}503'],
    h: 290,
    draw: () => (
      <Plot x={70} y={30} w={380} h={200} xr={[0, 10]} yr={[0, 120]} yl="σ₁ (MPa)"
        xt={[0, 2, 4, 6, 8, 10].map(v => [v, String(v)])} yt={[[6.8, '6,8'], [60, '60'], [120, '120']]} grid
      >
        {(sx, sy) => (
          <g>
            <Poly pts={fnPts(s3 => hb(s3, 10, 1, 0.5), 0, 10, sx, sy, 60)} c="ink" w={2.8} />
            <Poly pts={fnPts(s3 => hb(s3, 2.484, 0.0131, 0.503), 0, 10, sx, sy, 60)} c="red" w={2.8} />
            <Text x={sx(5)} y={sy(98)} s={13} b>{'roche intacte (σ_{ci} = 60 MPa, m_i = 10)'}</Text>
            <Text x={sx(4.6)} y={sy(26)} s={13} c="red" b>massif fracturé (GSI = 61)</Text>
            <Text x={sx(9.8)} y={sy(4)} a="end" s={12} c="mute">confinement σ₃ (MPa) →</Text>
          </g>
        )}
      </Plot>
    ),
    notes: ['Les discontinuités divisent la résistance en compression simple par près de 9 : 60 MPa pour la carotte, 6,8 MPa pour le massif.'],
    caption: 'La résistance augmente avec le confinement ; le GSI dégrade l’enveloppe de la roche intacte.',
  },
  {
    id: 'profils-soutenement',
    title: 'Trois profils de soutènement pour un tunnel de 11 m',
    steps: ['practical_case'],
    formula: ['p = \\gamma\\,\\frac{100 - RMR}{100}\\,B'],
    h: 270,
    draw: () => (
      <g>
        {[[90, 'RMR 78 : 65 kPa', 'boulonnage ponctuel', 'green'], [250, 'RMR 52 : 143 kPa', 'boulons + béton projeté', 'orange'], [410, 'RMR 25 : 223 kPa', 'cintres, parapluie, radier', 'red']].map(([cx, a, b, c], k) => (
          <g key={cx}>
            <Path d={tunnel(cx)} c="ink" w={k === 0 ? 2.4 : k === 1 ? 6 : 4} />
            {k === 1 && <Path d={tunnel(cx)} c="grey" w={3} />}
            <Line x1={cx - 70} y1={200} x2={cx + 70} y2={200} c="ink" w={2} />
            {radial(cx, k === 0 ? [-140, -90, -40] : k === 1 ? [-180, -150, -120, -90, -60, -30, 0] : [], 55, 82).map(([x1, y1, x2, y2], i) => (
              <Line key={i} x1={x1} y1={y1} x2={x2} y2={y2} c={c} w={2.2} />
            ))}
            {k === 2 && (
              <g>
                {[-160, -135, -110, -90, -70, -45, -20].map(t => <Circle key={t} cx={cx + 66 * Math.cos((t * Math.PI) / 180)} cy={140 + 66 * Math.sin((t * Math.PI) / 180)} r={3.5} c={c} sw={1.6} fill="paper" />)}
                <Path d={`M ${cx - 55} 200 Q ${cx} 226 ${cx + 55} 200`} c="ink" w={4} />
              </g>
            )}
            <Text x={cx} y={246} a="middle" s={12} c={c} b>{a}</Text>
            <Text x={cx} y={264} a="middle" s={11}>{b}</Text>
          </g>
        ))}
      </g>
    ),
    notes: ['Granite sain, granite fracturé, zone de faille : la charge triple et le soutènement s’alourdit ; le profil définitif se choisit au front de taille.'],
    caption: 'Charge d’Unal (γ = 27 kN/m³, B = 11 m) et soutènement associé à chaque zone.',
  },
  {
    id: 'q-rocher-altere',
    title: 'Indice Q d’un rocher altéré et humide',
    steps: ['simple_examples'],
    formula: ['Q = \\frac{40}{12} \\times \\frac{1}{4} \\times \\frac{0{,}66}{2{,}5} = 0{,}22'],
    h: 190,
    draw: () => (
      <g>
        {[['RQD / J_n', '40 / 12', 'taille des blocs'], ['J_r / J_a', '1 / 4', 'frottement des joints'], ['J_w / SRF', '0,66 / 2,5', 'eau et contraintes']].map(([a, b, c], i) => (
          <g key={a}>
            <Rect x={20 + i * 160} y={40} w={140} h={70} rx={8} c="ink" sw={1.6} fill="~grey" />
            <Text x={90 + i * 160} y={64} a="middle" s={13} b>{a}</Text>
            <Text x={90 + i * 160} y={86} a="middle" s={13}>{b}</Text>
            <Text x={90 + i * 160} y={130} a="middle" s={11} c="mute">{c}</Text>
          </g>
        ))}
        <Text x={250} y={170} a="middle" s={14} c="red" b>Q = 0,22 : très médiocre, soutènement lourd</Text>
      </g>
    ),
    notes: ['Les trois rapports se multiplient : un seul mauvais facteur (joints argileux, eau) suffit à dégrader fortement Q.'],
    caption: 'Trois rapports du système Q de Barton.',
  },
  {
    id: 'charge-unal',
    title: 'Charge de terrain sur un soutènement (Unal)',
    steps: ['simple_examples', 'formulas'],
    formula: ['p = \\gamma\\,\\frac{100 - RMR}{100}\\,B = 26 \\times 0{,}65 \\times 12 = 203\\ \\text{kPa}'],
    h: 240,
    draw: () => (
      <g>
        <Rect x={20} y={20} w={460} h={210} c="grey" sw={0} fill="pat:rock" o={0.5} />
        <Path d="M 160 210 L 160 130 A 90 90 0 0 1 340 130 L 340 210 Z" c="ink" w={3} fill="paper" />
        <Path d="M 160 130 L 160 60 L 340 60 L 340 130" c="red" w={2} dash="6 4" fill="~red" />
        <Text x={250} y={84} a="middle" s={12} c="red" b>{'hauteur de roche décomprimée\n0,65 × B'}</Text>
        <Text x={250} y={180} a="middle" s={12}>B = 12 m, RMR = 35</Text>
      </g>
    ),
    notes: ['Plus le RMR est faible, plus la hauteur de roche à soutenir est grande : cintres et béton projeté épais ici.'],
    caption: 'Poids de la zone décomprimée au-dessus de la voûte.',
  },
  {
    id: 'gothard-tavetsch',
    title: 'Grandes convergences : soutènement déformable',
    steps: ['real_examples'],
    h: 240,
    draw: () => (
      <g>
        <Rect x={20} y={20} w={460} h={200} c="grey" sw={0} fill="pat:rock" o={0.6} />
        <Circle cx={250} cy={120} r={80} c="red" sw={2} dash="6 4" />
        <Circle cx={250} cy={120} r={64} c="ink" sw={3} fill="paper" />
        {[0, 60, 120, 180, 240, 300].map(a => {
          const t = (a * Math.PI) / 180;
          return <Rect key={a} x={250 + 64 * Math.cos(t) - 5} y={120 + 64 * Math.sin(t) - 5} w={10} h={10} c="orange" sw={1.6} fill="~orange" />;
        })}
        <Text x={250} y={124} a="middle" s={12} b>{'cintres\ncoulissants'}</Text>
        <Text x={350} y={40} s={12} c="red" b>surcreusement</Text>
        <Text x={250} y={232} a="middle" s={12}>convergences de plusieurs dizaines de cm avant le revêtement</Text>
      </g>
    ),
    notes: ['Quand la résistance du massif est faible devant les contraintes, on laisse le terrain se déformer de façon contrôlée plutôt que de le bloquer.'],
    caption: 'Tunnel de base du Saint-Gothard, zone de Tavetsch.',
  },
  {
    id: 'caracterisation-massif',
    title: 'Caractériser un massif rocheux',
    steps: ['diagrams'],
    h: 220,
    draw: () => (
      <g>
        {['relevés', 'carottes', 'RMR · Q · GSI', 'Hoek-Brown', 'soutènement', 'auscultation'].map((t, i) => (
          <g key={t}>
            <Rect x={10 + i * 81} y={80} w={72} h={50} rx={8} c={i === 4 ? 'red' : 'ink'} sw={1.6} fill={i === 4 ? '~red' : '~grey'} />
            <Text x={46 + i * 81} y={110} a="middle" s={11} b>{t}</Text>
            {i < 5 && <Path d={`M ${82 + i * 81} 105 l 8 0`} c="ink" w={2} />}
          </g>
        ))}
        <Path d="M 455 132 Q 455 180 250 180 Q 46 180 46 134" c="green" w={1.6} dash="5 4" />
        <Text x={250} y={200} a="middle" s={12} c="green">validation au front de taille</Text>
      </g>
    ),
    notes: ['Les classifications se font par zone homogène ; le front de taille confirme ou corrige le profil retenu.'],
    caption: 'De l’observation au choix du soutènement.',
  },
];
