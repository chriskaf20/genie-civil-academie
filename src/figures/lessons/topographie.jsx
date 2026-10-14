// Plates — Module 5 · Topographie, géodésie & nivellement
import { Angle, Arrow, Circle, Dot, Line, Plot, Poly, Rect, Text } from '../../components/figures/kit.jsx';
import { Path, fnPts } from '../../components/figures/kit.jsx';

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
  {
    id: 'lambert93-cone',
    title: 'Projection conique conforme Lambert-93',
    steps: ['theory'],
    formula: ['X_0 = 700\\,000\\ \\text{m} \\qquad Y_0 = 6\\,600\\,000\\ \\text{m}'],
    h: 282,
    draw: () => (
      <g>
        <Circle cx={130} cy={150} r={90} c="ink" sw={2} fill="~water" />
        <Path d="M 40 150 Q 130 180 220 150" c="grey" w={1} />
        <Poly pts={[[130, 26.2], [10, 140], [250, 140]]} c="red" w={1.8} fill="~red" close />
        <Line x1={71} y1={82.1} x2={189} y2={82.1} c="red" w={2.6} />
        <Line x1={65.3} y1={87.5} x2={194.7} y2={87.5} c="red" w={2.6} />
        <Text x={200} y={76} s={11} c="red" b>44° et 49° N</Text>
        <Text x={130} y={268} a="middle" s={12}>cône sécant à la Terre</Text>
        <Arrow x1={240} y1={140} x2={280} y2={140} c="ink" w={2} hs={8} />
        <Path d="M 300 230 A 260 260 0 0 1 470 120 L 470 230 Z" c="ink" w={1.6} fill="~grey" />
        {[0, 1, 2, 3].map(i => <Line key={i} x1={320 + i * 40} y1={230} x2={330 + i * 40} y2={130} c="grey" w={1} />)}
        <Text x={385} y={252} a="middle" s={12}>{'cône déroulé : plan (X, Y)'}</Text>
        <Text x={385} y={46} a="middle" s={12} c="mute">{'angles conservés,\ndistances légèrement altérées'}</Text>
      </g>
    ),
    notes: ['Sur les deux parallèles de contact, les distances sont exactes ; entre et au-delà, l’altération reste de quelques décimètres par kilomètre.'],
    caption: 'La France métropolitaine est projetée sur un cône sécant puis « déroulée » à plat.',
  },
  {
    id: 'nivellement-trigo',
    title: 'Nivellement trigonométrique à la station totale',
    steps: ['formulas', 'simple_examples'],
    formula: ['\\Delta H = D_i \\cos V + h_s - h_m = 150 \\times \\cos(95\\ \\text{gon}) + 1{,}55 - 1{,}80 = 11{,}52\\ \\text{m}'],
    h: 260,
    draw: () => (
      <g>
        <Poly pts={[[20, 230], [100, 225], [420, 120], [480, 115], [480, 260], [20, 260]]} c="soil" w={2} fill="pat:soil" close />
        <Line x1={90} y1={170} x2={76} y2={227} c="ink" w={1.8} />
        <Line x1={90} y1={170} x2={104} y2={224} c="ink" w={1.8} />
        <Rect x={80} y={156} w={20} h={16} rx={3} c="ink" sw={2} fill="~ink" />
        <Line x1={410} y1={122} x2={410} y2={62} c="ink" w={2.2} />
        <Circle cx={410} cy={62} r={6} c="red" sw={2} fill="paper" />
        <Line x1={90} y1={164} x2={410} y2={62} c="red" w={2.2} />
        <Text x={250} y={100} a="middle" s={13} c="red" b rot={-17.7}>{'D_i = 150 m'}</Text>
        <Line x1={90} y1={164} x2={90} y2={90} c="grey" w={1} dash="3 4" />
        <Angle cx={90} cy={164} r={34} a1={-90} a2={-17.7} label="V = 95 gon" c="red" s={11} lr={30} />
        <Text x={60} y={200} a="end" s={12}>{'h_s = 1,55'}</Text>
        <Text x={420} y={96} s={12}>{'h_m = 1,80'}</Text>
        <Text x={100} y={250} s={12} b>A : 50,00 m</Text>
        <Text x={476} y={150} a="end" s={12} c="green" b>B : 61,52 m</Text>
      </g>
    ),
    notes: ['Visée montante (V < 100 gon) : cos V > 0, la dénivelée est positive. On ajoute la hauteur de l’instrument et on retire celle du prisme.'],
    caption: 'Altitude d’un point visé au prisme depuis une station d’altitude connue.',
  },
  {
    id: 'gnss-geoide',
    title: 'GNSS : de la hauteur ellipsoïdale à l’altitude NGF',
    steps: ['simple_examples'],
    formula: ['Z_{NGF} = h - N = 185{,}42 - 48{,}15 = 137{,}27\\ \\text{m}'],
    h: 250,
    draw: () => (
      <g>
        <Path d="M 20 210 Q 250 190 480 210" c="ink" w={2} />
        <Path d="M 20 170 Q 120 150 250 160 Q 380 172 480 150" c="water" w={2.2} dash="7 4" />
        <Path d="M 20 80 L 120 60 L 200 76 L 280 50 L 380 70 L 480 56" c="soil" w={2.4} />
        <Text x={476} y={226} a="end" s={12}>ellipsoïde (GNSS)</Text>
        <Text x={476} y={142} a="end" s={12} c="water">géoïde (≈ niveau moyen des mers)</Text>
        <Text x={476} y={46} a="end" s={12} c="soil">terrain</Text>
        <Dot x={280} y={50} r={5} c="red" />
        <Arrow x1={300} y1={199} x2={300} y2={52} c="red" w={2} hs={7} both />
        <Text x={306} y={110} s={12} c="red" b>h = 185,42</Text>
        <Arrow x1={240} y1={198} x2={240} y2={161} c="water" w={2} hs={6} both />
        <Text x={234} y={184} a="end" s={12} c="water" b>N = 48,15</Text>
        <Arrow x1={200} y1={159} x2={200} y2={78} c="green" w={2} hs={7} both />
        <Text x={194} y={124} a="end" s={12} c="green" b>Z = 137,27</Text>
      </g>
    ),
    notes: ['Le GNSS mesure une hauteur au-dessus de l’ellipsoïde ; l’altitude officielle se compte au-dessus du géoïde, dont la grille RAF20 donne l’écart N.'],
    caption: 'Trois surfaces de référence : ellipsoïde, géoïde et terrain (écarts exagérés).',
  },
  {
    id: 'tolerance-fermeture',
    title: 'Tolérance de fermeture d’un nivellement',
    steps: ['formulas'],
    formula: ['T_H = 2{,}5\\,\\sigma\\sqrt{L_{km}} = 25\\sqrt{L_{km}}\\ \\text{mm} \\quad (\\sigma = 10\\ \\text{mm/km})'],
    h: 280,
    draw: () => (
      <Plot x={70} y={30} w={380} h={190} xr={[0, 4]} yr={[0, 55]} yl="mm"
        xt={[0, 0.8, 2, 4].map(v => [v, `${String(v).replace('.', ',')} km`])} yt={[[10, '10'], [22.4, '22,4'], [50, '50']]} grid
      >
        {(sx, sy) => (
          <g>
            <Poly pts={[[sx(0), sy(0)], ...fnPts(L => 25 * Math.sqrt(L), 0, 4, sx, sy, 60).slice(1), [sx(4), sy(0)]]} c="green" w={0} fill="~green" close />
            <Poly pts={fnPts(L => 25 * Math.sqrt(L), 0, 4, sx, sy, 60)} c="green" w={2.8} />
            <Dot x={sx(0.8)} y={sy(10)} r={6} c="red" />
            <Text x={sx(0.9)} y={sy(10) + 4} s={12} c="red" b>{'f_H = 10 mm : accepté'}</Text>
            <Text x={sx(2.6)} y={sy(48)} s={12} c="green" b>{'T_H : zone admissible'}</Text>
          </g>
        )}
      </Plot>
    ),
    notes: ['La tolérance croît comme la racine de la longueur : les erreurs accidentelles de chaque portée se compensent en partie.'],
    caption: 'Un cheminement est accepté si son écart de fermeture reste sous la courbe.',
  },
  {
    id: 'piles-viaduc',
    title: 'Canevas de chantier d’un viaduc de 600 m',
    steps: ['real_examples'],
    h: 250,
    draw: () => (
      <g>
        <Line x1={40} y1={130} x2={460} y2={130} c="ink" w={2} dash="12 4 2 4" />
        {Array.from({ length: 9 }, (_, i) => 70 + i * 45).map(x => <Rect key={x} x={x - 8} y={122} w={16} h={16} c="ink" sw={1.6} fill="~grey" />)}
        <Text x={250} y={160} a="middle" s={12}>axes des piles à implanter</Text>
        {[[50, 50], [200, 40], [380, 45], [460, 200], [270, 220], [80, 210]].map(([x, y], i) => (
          <g key={i}>
            <Poly pts={[[x, y - 8], [x - 7, y + 5], [x + 7, y + 5]]} c="red" w={1.8} fill="~red" close />
            <Text x={x + 10} y={y + 4} s={11} c="red" b>{`B${i + 1}`}</Text>
          </g>
        ))}
        <Poly pts={[[50, 50], [200, 40], [380, 45], [460, 200], [270, 220], [80, 210]]} c="red" w={1.2} dash="5 4" close />
        <Text x={250} y={244} a="middle" s={12}>{'6 bornes béton hors chantier · station 0,5 mgon, 1 mm + 1 ppm'}</Text>
      </g>
    ),
    notes: ['Le canevas est mesuré et compensé avant les travaux ; chaque pile est ensuite implantée et contrôlée depuis plusieurs bornes.'],
    caption: 'Polygonale de haute précision autour du tracé d’une LGV.',
  },
  {
    id: 'mire-code-barres',
    title: 'Niveau numérique et mire à code-barres',
    steps: ['diagrams'],
    h: 250,
    draw: () => (
      <g>
        <Rect x={360} y={30} w={24} h={200} c="ink" sw={1.6} fill="paper" />
        {Array.from({ length: 30 }, (_, i) => (i % 3 === 0 || i % 7 === 0 ? <Rect key={i} x={360} y={30 + i * 6.6} w={24} h={3.6} c="ink" sw={0} fill="txt" /> : null))}
        <Line x1={160} y1={130} x2={150} y2={226} c="ink" w={1.8} />
        <Line x1={160} y1={130} x2={170} y2={226} c="ink" w={1.8} />
        <Rect x={130} y={112} w={60} h={20} rx={3} c="ink" sw={2} fill="~ink" />
        <Line x1={190} y1={122} x2={358} y2={122} c="red" w={1.6} dash="6 4" />
        <Text x={270} y={112} a="middle" s={12} c="red">visée horizontale</Text>
        <Text x={60} y={80} s={12}>{'le capteur lit le code\net calcule la hauteur'}</Text>
        <Text x={400} y={130} s={12} c="red" b>1,4562</Text>
        <Line x1={40} y1={228} x2={470} y2={228} c="ink" w={2} />
      </g>
    ),
    notes: ['La lecture automatique supprime les fautes de lecture et enregistre directement les dénivelées dans le carnet électronique.'],
    caption: 'Le niveau numérique « photographie » la mire et en déduit la lecture au dixième de millimètre.',
  },
];
