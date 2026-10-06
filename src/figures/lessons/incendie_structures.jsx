// Plates — Module 43 · Résistance au feu des structures
import { Dim, Dot, ISection, Line, Plot, Poly, Rect, Text, fnPts } from '../../components/figures/kit.jsx';

const thetaCr = mu => 39.19 * Math.log(1 / (0.9674 * mu ** 3.833) - 1) + 482;
// Reduction factor of steel yield strength k_y,θ (EN 1993-1-2, table 3.1).
const KY = [[20, 1], [400, 1], [500, 0.78], [600, 0.47], [700, 0.23], [800, 0.11], [900, 0.06], [1000, 0.04], [1100, 0.02], [1200, 0]];
const ky = T => {
  for (let i = 1; i < KY.length; i++) {
    if (T <= KY[i][0]) {
      const [t0, k0] = KY[i - 1];
      const [t1, k1] = KY[i];
      return k0 + ((k1 - k0) * (T - t0)) / (t1 - t0);
    }
  }
  return 0;
};

export default [
  {
    id: 'trois-materiaux',
    title: 'Trois matériaux face au feu',
    steps: ['theory'],
    h: 290,
    draw: () => (
      <g>
        <Text x={85} y={26} a="middle" s={15} b c="ink">béton armé</Text>
        <Rect x={35} y={50} w={100} h={150} c="grey" sw={2} fill="pat:concrete" bg="~grey" />
        <Rect x={35} y={170} w={100} h={30} c="red" sw={0} fill="~red" />
        {[55, 85, 115].map(x => <Dot key={x} x={x} y={176} r={6} c="red" />)}
        <Dim x1={145} y1={200} x2={145} y2={176} label="a" s={13} side={-1} />
        <Text x={85} y={226} a="middle" s={12} c="mute">{'l’enrobage protège\nles armatures'}</Text>

        <Text x={250} y={26} a="middle" s={15} b c="ink">acier</Text>
        <ISection cx={250} cy={125} b={90} h={130} tf={10} tw={7} c="red" fill="~red" />
        <Text x={250} y={226} a="middle" s={12} c="mute">{'conducteur : s’échauffe\nvite, θ_{cr} ≈ 550 °C'}</Text>

        <Text x={415} y={26} a="middle" s={15} b c="ink">bois</Text>
        <Rect x={365} y={50} w={100} h={150} c="soil" sw={2} fill="txt" />
        <Rect x={380} y={50} w={70} h={135} c="soil" sw={1.6} fill="pat:wood" bg="~soil" />
        <Text x={415} y={128} a="middle" s={11} c="soil">section</Text>
        <Text x={415} y={142} a="middle" s={11} c="soil">résiduelle</Text>
        <Text x={415} y={226} a="middle" s={12} c="mute">{'la couche carbonisée\nisole le cœur'}</Text>
        {[35, 215, 365].map(x => <Line key={x} x1={x - 6} y1={262} x2={x + 106} y2={262} c="red" w={3} dash="6 4" />)}
        <Text x={250} y={282} a="middle" s={12} c="red">feu en sous-face (ISO 834)</Text>
      </g>
    ),
    caption: 'Béton : enrobage ; acier : protection ; bois : sur-épaisseur sacrificielle.',
  },
  {
    id: 'acier-temperature',
    title: 'Résistance de l’acier en fonction de la température',
    steps: ['formulas'],
    formula: ['\\theta_{cr} = 39{,}19 \\ln\\left(\\frac{1}{0{,}9674\\, \\mu_0^{3{,}833}} - 1\\right) + 482'],
    h: 300,
    draw: () => (
      <Plot x={60} y={30} w={380} h={210} xr={[0, 1200]} yr={[0, 1.1]} xl="θ (°C)" yl="k_y,θ"
        xt={[200, 400, 554, 800, 1000].map(v => [v, String(v)])} yt={[[0.5, '0,5'], [1, '1,0']]} grid
      >
        {(sx, sy) => (
          <g>
            <Poly pts={fnPts(ky, 20, 1200, sx, sy, 120)} c="ink" w={3} />
            <Line x1={sx(thetaCr(0.6))} y1={sy(0)} x2={sx(thetaCr(0.6))} y2={sy(0.6)} c="red" w={1.6} dash="5 4" />
            <Line x1={sx(0)} y1={sy(0.6)} x2={sx(thetaCr(0.6))} y2={sy(0.6)} c="red" w={1.6} dash="5 4" />
            <Text x={sx(thetaCr(0.6)) + 8} y={sy(0.62)} s={13} c="red">{'μ₀ = 0,6 → θ_{cr} ≈ 554 °C'}</Text>
          </g>
        )}
      </Plot>
    ),
    notes: ['La limite d’élasticité reste intacte jusqu’à 400 °C, puis chute rapidement.'],
    caption: 'Coefficient de réduction de la limite d’élasticité (EN 1993-1-2).',
  },
  {
    id: 'section-reduite-bois',
    title: 'Poutre GL24h 200 × 600 après 60 min de feu',
    steps: ['stepbystep'],
    formula: ['d_{ef} = 0{,}7 \\times 60 + 7 = 49\\ \\text{mm}'],
    h: 300,
    draw: () => {
      const k = 0.38;
      const W = 200 * k;
      const H = 600 * k;
      const d = 49 * k;
      const x0 = 160;
      const y0 = 40;
      return (
        <g>
          <Rect x={x0 - 40} y={y0 - 14} w={W + 80} h={14} c="grey" sw={1.6} fill="pat:concrete" bg="~grey" />
          <Rect x={x0} y={y0} w={W} h={H} c="txt" sw={2} fill="txt" />
          <Rect x={x0 + d} y={y0} w={W - 2 * d} h={H - d} c="soil" sw={2} fill="pat:wood" bg="~soil" />
          <Dim x1={x0} y1={y0 + H + 18} x2={x0 + W} y2={y0 + H + 18} label="200" side={-1} s={12} />
          <Dim x1={x0 + d} y1={y0 + H - d - 14} x2={x0 + W - d} y2={y0 + H - d - 14} label="102" s={11} c="soil" lc="soil" />
          <Dim x1={x0 - 18} y1={y0 + H} x2={x0 - 18} y2={y0} label="600" s={12} />
          <Text x={x0 + W + 30} y={y0 + 60} s={13}>{'zone carbonisée\n+ couche de 7 mm\n(49 mm par face)'}</Text>
          <Text x={x0 + W + 30} y={y0 + 150} s={13} c="soil">{'section résiduelle\n102 × 551 mm'}</Text>
          <Text x={x0 + W + 30} y={y0 + 210} s={13} c="red">{'W_{fi} / W = 0,43'}</Text>
          <Text x={x0 - 30} y={y0 - 20} a="end" s={12} c="mute">plancher (face protégée)</Text>
        </g>
      );
    },
    caption: 'Exposition sur trois faces : la face supérieure est protégée par le plancher.',
  },
  {
    id: 'poutre-parking-r90',
    title: 'Distance a d’une poutre de parking R 90',
    steps: ['practical_case'],
    formula: ['a = 30 + 8 + 10 = 48\\ \\text{mm} \\geq 40\\ \\text{mm}'],
    h: 290,
    draw: () => (
      <g>
        <Rect x={170} y={30} w={150} h={220} c="grey" sw={2.2} fill="pat:concrete" bg="~grey" />
        <Rect x={185} y={45} w={120} h={190} rx={6} c="ink" sw={1.8} />
        {[203, 245, 287].map(x => <Dot key={x} x={x} y={221} r={10} c="red" />)}
        <Dim x1={340} y1={250} x2={340} y2={221} label="a = 48 mm" s={12} side={-1} />
        <Dim x1={170} y1={268} x2={320} y2={268} label="b = 300 mm" side={-1} s={12} />
        <Text x={20} y={80} s={13}>{'cadres HA8\nenrobage 30 mm'}</Text>
        <Text x={20} y={210} s={13} c="red">HA20</Text>
        <Text x={360} y={140} s={13} c="green">{'R 90 : a ≥ 40 mm\npour b = 300 ✔'}</Text>
      </g>
    ),
    caption: 'a se mesure du parement exposé jusqu’à l’axe des barres longitudinales.',
  },
];
