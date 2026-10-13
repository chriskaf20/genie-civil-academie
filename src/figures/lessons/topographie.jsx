// Plates — Module 5 · Topographie, géodésie & nivellement
import { Angle, Arrow, Circle, Dot, Line, Plot, Poly, Rect, Text } from '../../components/figures/kit.jsx';

/** Graduated levelling staff standing on the ground at (x, yBase). */
function Mire({ x, yBase, h = 150 }) {
  return (
    <g>
      <Rect x={x - 6} y={yBase - h} w={12} h={h} c="ink" sw={1.6} fill="paper" />
      {Array.from({ length: Math.floor(h / 20) }, (_, i) => (
        <Rect key={i} x={x - 6} y={yBase - h + i * 20} w={12} h={10} c="red" sw={0} fill="red" o={0.8} />
      ))}
    </g>
  );
}

// Compensated altitudes of the closed levelling line (4 equal spans of 200 m).
const PTS = [[0, 124.5], [200, 125.7375], [400, 126.585], [600, 126.2625], [800, 127.15]];
const MES = ['+1,240', '+0,850', '−0,320', '+0,890'];

// Closed traverse (8 stations) and a small Delaunay patch of the terrain model.
const POLY = [[60, 110], [110, 60], [180, 70], [215, 120], [205, 190], [160, 235], [90, 225], [50, 170]];
const MNT = [[290, 70], [350, 55], [420, 65], [475, 90], [300, 140], [365, 125], [440, 140], [290, 220], [360, 205], [430, 225], [475, 190]];
const TRI = [[0, 1, 5], [0, 5, 4], [1, 2, 5], [2, 6, 5], [2, 3, 6], [3, 10, 6], [4, 5, 8], [4, 8, 7], [5, 6, 8], [6, 9, 8], [6, 10, 9]];
const TRI_FILL = ['~green', '~green', '~soil', '~soil', '~orange', '~orange', '~green', '~green', '~soil', '~soil', '~orange'];

export default [
  {
    id: 'nivellement-direct',
    title: 'Nivellement direct',
    steps: ['theory'],
    formula: ['\\Delta H_{AB} = L_{AR} - L_{AV}', 'Z_B = Z_A + \\Delta H_{AB}'],
    h: 290,
    draw: () => (
      <g>
        <Poly pts={[[20, 250], [80, 245], [250, 232], [420, 210], [480, 204], [480, 290], [20, 290]]} c="soil" w={2.2} fill="pat:soil" close />
        <Mire x={80} yBase={245} />
        <Mire x={420} yBase={210} />
        <Line x1={250} y1={140} x2={232} y2={233} c="ink" w={2} />
        <Line x1={250} y1={140} x2={268} y2={230} c="ink" w={2} />
        <Line x1={250} y1={140} x2={250} y2={232} c="ink" w={1.6} />
        <Rect x={228} y={118} w={44} h={14} rx={3} c="ink" sw={2} fill="~ink" />
        <Rect x={240} y={132} w={20} h={8} c="ink" sw={1.6} fill="paper" />
        <Arrow x1={226} y1={125} x2={88} y2={125} c="red" w={1.8} dash="7 5" />
        <Arrow x1={274} y1={125} x2={412} y2={125} c="red" w={1.8} dash="7 5" />
        <Text x={155} y={115} a="middle" s={13} c="red">visée arrière</Text>
        <Text x={345} y={115} a="middle" s={13} c="red">visée avant</Text>
        <Text x={278} y={152} s={13} c="mute">niveau</Text>
        <Arrow x1={56} y1={244} x2={56} y2={126} c="txt" w={1.5} hs={7} both />
        <Text x={50} y={190} a="end" s={15} b>{'L_{AR}'}</Text>
        <Arrow x1={444} y1={209} x2={444} y2={126} c="txt" w={1.5} hs={7} both />
        <Text x={450} y={172} s={15} b>{'L_{AV}'}</Text>
        <Line x1={86} y1={245} x2={470} y2={245} c="grey" w={1.2} dash="5 4" />
        <Arrow x1={470} y1={245} x2={470} y2={211} c="green" w={2} hs={7} both />
        <Text x={476} y={234} s={15} c="green" b>ΔH</Text>
        <Text x={94} y={238} s={16} b>A</Text>
        <Text x={404} y={204} a="end" s={16} b>B</Text>
        <Text x={92} y={102} s={12} c="mute">mire</Text>
      </g>
    ),
    notes: [
      'L’axe de visée du niveau est horizontal : la différence des deux lectures est la dénivelée.',
      'Grande lecture arrière, petite lecture avant : le terrain monte de A vers B.',
    ],
    caption: 'Une station entre deux mires : lecture arrière sur le point connu, lecture avant sur le point cherché.',
  },
  {
    id: 'gisement',
    title: 'Gisement et coordonnées rectangulaires',
    steps: ['formulas', 'simple_examples'],
    formula: ['X_B = X_A + D\\sin G \\qquad Y_B = Y_A + D\\cos G', 'G = \\arctan\\frac{\\Delta X}{\\Delta Y}'],
    h: 290,
    draw: () => (
      <g>
        <Arrow x1={140} y1={240} x2={140} y2={50} c="ink" w={1.8} />
        <Text x={140} y={42} a="middle" s={14} b>N (Y)</Text>
        <Arrow x1={140} y1={240} x2={320} y2={240} c="ink" w={1.8} />
        <Text x={326} y={245} s={14} b>E (X)</Text>
        <Line x1={260} y1={80} x2={260} y2={240} c="grey" w={1.4} dash="5 4" />
        <Line x1={140} y1={80} x2={260} y2={80} c="grey" w={1.2} dash="3 4" />
        <Line x1={140} y1={240} x2={260} y2={80} c="red" w={3} />
        <Dot x={140} y={240} r={5} />
        <Dot x={260} y={80} r={5} c="red" />
        <Angle cx={140} cy={240} r={52} a1={-90} a2={-53.13} label="G" c="red" s={16} />
        <Text x={220} y={113} a="middle" s={14} c="red" rot={-53.13}>D = 500,00 m</Text>
        <Text x={200} y={262} a="middle" s={14}>ΔX = 300 m</Text>
        <Text x={266} y={170} s={14}>ΔY = 400 m</Text>
        <Text x={124} y={262} s={16} b>A</Text>
        <Text x={268} y={74} s={16} b>B</Text>
        <Circle cx={415} cy={150} r={52} c="ink" sw={1.6} />
        <Line x1={415} y1={98} x2={415} y2={202} c="mute" w={1} />
        <Line x1={363} y1={150} x2={467} y2={150} c="mute" w={1} />
        <Angle cx={415} cy={150} r={38} a1={-90} a2={0} c="red" arrow />
        <Text x={415} y={90} a="middle" s={13} b>0 gon (N)</Text>
        <Text x={472} y={155} s={13}>100</Text>
        <Text x={415} y={220} a="middle" s={13}>200</Text>
        <Text x={358} y={155} a="end" s={13}>300</Text>
        <Text x={415} y={238} a="middle" s={11} c="mute">{'sens horaire\n400 gon = un tour'}</Text>
      </g>
    ),
    notes: [
      'Exemple : $\\Delta X = 300$ m, $\\Delta Y = 400$ m → $D = 500{,}00$ m et $G = \\arctan 0{,}75 = 40{,}97$ gon.',
      'Le gisement se compte depuis le nord (axe Y), dans le sens horaire ; le signe de ΔX et ΔY donne le quadrant.',
    ],
    caption: 'Gisement G de A vers B : angle compté depuis le nord jusqu’à la direction AB.',
  },
  {
    id: 'cheminement-encadre',
    title: 'Cheminement encadré et compensation',
    steps: ['stepbystep'],
    formula: ['f_H = \\sum \\Delta H_{mes} - (H_B - H_A) = +10\\ \\text{mm}', 'T_H = 2{,}5\\,\\sigma\\sqrt{L_{km}} = 22{,}4\\ \\text{mm}'],
    h: 290,
    draw: () => (
      <Plot x={70} y={30} w={390} h={200} xr={[0, 800]} yr={[124, 127.5]} yl="altitude (m)"
        xt={[[0, 'A'], [200, '1'], [400, '2'], [600, '3'], [800, 'B']]} yt={[124.5, 125.5, 126.5, 127.5].map(v => [v, String(v).replace('.', ',')])} grid
      >
        {(sx, sy) => (
          <g>
            <Poly pts={PTS.map(([d, z]) => [sx(d), sy(z)])} c="ink" w={2.6} />
            {PTS.map(([d, z], i) => (
              <g key={d}>
                <Dot x={sx(d)} y={sy(z)} r={i === 0 || i === 4 ? 6 : 4} c={i === 0 || i === 4 ? 'red' : 'ink'} />
                <Text x={i === 0 ? sx(d) + 8 : sx(d)} y={sy(z) - 12} a={i === 0 ? 'start' : i === 4 ? 'end' : 'middle'} s={12} b>
                  {z.toFixed(i === 0 || i === 4 ? 3 : 4).replace('.', ',')}
                </Text>
              </g>
            ))}
            {MES.map((m, i) => {
              const [d1, z1] = PTS[i];
              const [d2, z2] = PTS[i + 1];
              const down = z2 < z1;
              return <Text key={m} x={sx((d1 + d2) / 2) + (down ? 0 : 8)} y={sy((z1 + z2) / 2) + (down ? 20 : 16)} a={down ? 'middle' : 'start'} s={12} c="green">{m}</Text>;
            })}
            <Text x={sx(790)} y={sy(124.25)} a="end" s={12} c="red">correction : −2,5 mm par portée</Text>
            <Text x={sx(790)} y={sy(124.6)} a="end" s={12} c="mute">repères A et B connus (rouge) ; 4 portées de 200 m</Text>
          </g>
        )}
      </Plot>
    ),
    notes: [
      '$|f_H| = 10$ mm $\\le T_H = 22{,}4$ mm (σ = 10 mm/km) : le cheminement est accepté.',
      'Portées égales : chaque dénivelée reçoit −2,5 mm, puis on recalcule les altitudes de proche en proche.',
    ],
    caption: 'Dénivelées mesurées (vert) et altitudes compensées entre les repères A (124,500 m) et B (127,150 m).',
  },
  {
    id: 'polygonale-mnt',
    title: 'Canevas polygonal et MNT d’une ZAC',
    steps: ['practical_case'],
    formula: ['f = \\sqrt{F_X^2 + F_Y^2} = \\sqrt{8^2 + 6^2} = 10\\ \\text{mm} \\le 25\\ \\text{mm}'],
    h: 285,
    draw: () => (
      <g>
        <Poly pts={[...POLY, [76, 98]]} c="ink" w={2} />
        <Arrow x1={60} y1={110} x2={76} y2={98} c="red" w={2} hs={7} />
        <Text x={82} y={94} s={12} c="red">f (×2 000)</Text>
        {POLY.map(([x, y], i) => {
          const ox = x - 132;
          const oy = y - 148;
          const k = 18 / Math.hypot(ox, oy);
          return (
            <g key={i}>
              <Poly pts={[[x, y - 6], [x - 5, y + 4], [x + 5, y + 4]]} c="ink" w={1.4} fill="paper" close />
              <Text x={x + ox * k} y={y + oy * k + 4} a="middle" s={12} b>{`S${i + 1}`}</Text>
            </g>
          );
        })}
        <Text x={132} y={280} a="middle" s={12} c="mute">polygonale fermée : 8 sommets, 1 200 m</Text>
        {TRI.map((t, i) => <Poly key={i} pts={t.map(k => MNT[k])} c="mute" w={1} fill={TRI_FILL[i]} close />)}
        {MNT.map(([x, y], i) => <Dot key={i} x={x} y={y} r={3} />)}
        <Text x={382} y={36} a="middle" s={13} b>MNT : triangulation de Delaunay</Text>
        <Text x={382} y={252} a="middle" s={12} c="mute">12 500 points (drone + station totale)</Text>
        <Line x1={250} y1={40} x2={250} y2={250} c="grey" w={1} dash="4 5" o={0.6} />
      </g>
    ),
    notes: [
      'Fermeture angulaire 1,2 mgon ≤ 2,5 mgon, puis fermeture planimétrique 10 mm ≤ 25 mm : le canevas est compensé.',
      'Les points levés sont triangulés : le MNT donne courbes de niveau, profils et cubatures du projet VRD.',
    ],
    caption: 'Le canevas rattaché au Lambert-93 porte tout le levé ; le MNT est le fond du projet.',
  },
];
