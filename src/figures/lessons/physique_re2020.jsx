// Plates — Module 42 · RE2020
import { Arrow, Bars, Circle, Line, Path, Plot, Poly, Rect, Text, House } from '../../components/figures/kit.jsx';

const day = h => 27 + 4 * Math.sin(((h - 10) / 24) * 2 * Math.PI);

export default [
  {
    id: 'indicateurs',
    title: 'Les indicateurs de la RE2020 autour d’une maison',
    steps: ['theory'],
    h: 300,
    draw: () => (
      <g>
        <House x={180} y={220} w={140} h={90} />
        <Line x1={150} y1={220} x2={350} y2={220} c="soil" w={2} />
        {[
          [60, 60, 'Bbio', 'conception :\nisolation, soleil'],
          [380, 60, 'Cep', 'énergie primaire\n(équipements)'],
          [40, 200, 'DH', 'confort d’été'],
          [390, 200, 'Ic énergie', 'carbone\ndes consommations'],
          [250, 268, 'Ic construction', 'carbone des matériaux (ACV)'],
        ].map(([x, y, k, t]) => (
          <g key={k}>
            <Circle cx={x} cy={y} r={30} c="ink" sw={2} fill="~ink" />
            <Text x={x} y={y + 5} a="middle" s={k.length > 4 ? 10 : 15} b c="ink" halo={false}>{k}</Text>
            <Text x={x} y={y + 46} a="middle" s={11} c="mute">{t}</Text>
          </g>
        ))}
      </g>
    ),
    caption: 'Cinq indicateurs : conception, énergie, confort d’été et carbone sur tout le cycle de vie.',
  },
  {
    id: 'seuils-ic',
    title: 'Seuils Ic construction d’une maison individuelle',
    steps: ['formulas'],
    formula: ['Ic_{construction} = \\frac{\\sum Q_i\\, FE_i}{S_{réf}}'],
    h: 270,
    draw: () => (
      <Bars x={70} y={40} w={360} h={170} max={720} ticks={[200, 400, 600]} unit="kg CO₂e/m²" bars={[
        { label: '2022', v: 640, c: 'ink' },
        { label: '2025', v: 530, c: 'ink' },
        { label: '2028', v: 475, c: 'ink' },
        { label: '2031', v: 415, c: 'green' },
      ]} />
    ),
    notes: ['Logement collectif : 740, 650, 580 puis 490 kg CO₂e/m² aux mêmes dates.'],
    caption: 'Les seuils baissent d’environ un tiers entre 2022 et 2031.',
  },
  {
    id: 'acv-maison',
    title: 'Répartition de l’Ic construction de la maison de 100 m²',
    steps: ['stepbystep'],
    formula: ['Ic = \\frac{62\\,000}{100} = 620\\ \\text{kg CO}_2\\text{e/m}^2'],
    h: 290,
    draw: () => (
      <g>
        <Bars x={60} y={30} w={420} h={170} max={34000} ticks={[10000, 20000, 30000]} unit="kg CO₂e" s={11} bars={[
          { label: 'gros œuvre', v: 30000, c: 'red', txt: '30 t' },
          { label: 'charpente', v: 6000, c: 'ink', txt: '6' },
          { label: 'menuis.', v: 5000, c: 'ink', txt: '5' },
          { label: 'isolation', v: 4000, c: 'ink', txt: '4' },
          { label: 'équip.', v: 8000, c: 'ink', txt: '8' },
          { label: '2nd œuvre', v: 7000, c: 'ink', txt: '7' },
          { label: 'chantier', v: 2000, c: 'ink', txt: '2' },
        ]} />
        <Text x={270} y={262} a="middle" s={13} c="green">variante ossature bois : gros œuvre 18 t → Ic = 500 ≤ 530 ✔</Text>
      </g>
    ),
    caption: 'Le gros œuvre représente près de la moitié de l’impact.',
  },
  {
    id: 'degres-heures',
    title: 'Degrés-heures d’inconfort',
    steps: ['practical_case'],
    formula: ['DH = \\sum \\max(0,\\ T_{int} - T_{confort})'],
    h: 290,
    draw: () => (
      <Plot x={60} y={30} w={380} h={200} xr={[0, 24]} yr={[20, 34]} xl="heure" yl="T (°C)"
        xt={[0, 6, 12, 18, 24].map(v => [v, String(v)])} yt={[22, 26, 28, 30, 32].map(v => [v, String(v)])} grid
      >
        {(sx, sy) => {
          const pts = Array.from({ length: 97 }, (_, i) => [i / 4, day(i / 4)]);
          const over = pts.filter(([, T]) => T > 28);
          return (
            <g>
              <Poly pts={[[sx(over[0][0]), sy(28)], ...over.map(([h, T]) => [sx(h), sy(T)]), [sx(over[over.length - 1][0]), sy(28)]]} c="red" w={0} fill="~red" />
              <Poly pts={pts.map(([h, T]) => [sx(h), sy(T)])} c="ink" w={2.6} />
              <Line x1={sx(0)} y1={sy(28)} x2={sx(24)} y2={sy(28)} c="red" w={1.6} dash="7 5" />
              <Text x={sx(0.5)} y={sy(28) - 6} s={12} c="red">T confort</Text>
              <Text x={sx(16)} y={sy(31.5)} s={13} c="red">aire = DH du jour</Text>
            </g>
          );
        }}
      </Plot>
    ),
    notes: ['Volets extérieurs et ventilation nocturne abaissent la courbe et réduisent l’aire rouge.'],
    caption: 'Séjour exposé à l’ouest : seules les heures au-dessus de la température de confort comptent.',
  },
];
