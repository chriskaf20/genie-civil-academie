// Plates — Module 1 · Calcul différentiel & intégral appliqué aux poutres
import { Line, Plot, Poly, Rect, Text } from '../../components/figures/ink.jsx';
import { BeamScheme, ForceDiagram, ISection } from '../../components/figures/kit.jsx';

const X1 = 120;
const X2 = 440;

const PROFILS = [20, 28, 40, 30, 25, 19];

export default [
  {
    id: 'chaine-integration',
    title: 'De la charge à la déformée : quatre intégrations',
    steps: ['theory'],
    formula: ['\\frac{dV}{dx} = -q', '\\frac{dM}{dx} = V', 'EI\\,\\frac{d^2 w}{dx^2} = -M'],
    h: 560,
    draw: () => (
      <g>
        <BeamScheme x1={X1} x2={X2} y={70} loads={[{ type: 'udl', h: 34, label: 'q' }]} names={['', '']} />
        <Text x={X1 - 12} y={60} a="end" s={16} b c="ink">q(x)</Text>
        <ForceDiagram x1={X1} x2={X2} y0={160} f={t => 0.5 - t} scale={70} down={false} name="V(x)" marks={[{ t: 0, label: '+qL/2', dx: 26 }, { t: 1, label: '−qL/2', dx: -26 }]} />
        <ForceDiagram x1={X1} x2={X2} y0={225} f={t => 4 * t * (1 - t)} scale={56} c="red" fill="~red" name="M(x)" marks={[{ t: 0.5, label: 'qL²/8' }]} />
        <ForceDiagram x1={X1} x2={X2} y0={345} f={t => 1 - 6 * t * t + 4 * t * t * t} scale={34} c="violet" fill="~violet" down={false} name="θ(x)" marks={[{ t: 0.08, label: 'θ_A', dx: 18 }]} />
        <ForceDiagram x1={X1} x2={X2} y0={420} f={t => (t - 2 * t ** 3 + t ** 4) / 0.3125} scale={52} c="green" fill="~green" name="w(x)" marks={[{ t: 0.5, label: 'w_{max} = 5qL⁴/384EI' }]} />
        <Line x1={(X1 + X2) / 2} y1={110} x2={(X1 + X2) / 2} y2={490} c="grey" w={1.2} dash="5 5" />
        <Text x={(X1 + X2) / 2} y={535} a="middle" s={13} c="mute">{'x = L/2 : V = 0, M max, θ = 0, w max'}</Text>
        {[[125, '∫'], [192, '∫'], [290, '∫ ÷ EI'], [382, '∫']].map(([y, t]) => (
          <Text key={y} x={470} y={y} s={18} c="mute">{t}</Text>
        ))}
      </g>
    ),
    notes: [
      'Chaque courbe est la dérivée de la suivante : V est la pente de M, θ la pente de w.',
      'Le moment est maximal là où l’effort tranchant s’annule ; la flèche est maximale là où la rotation s’annule.',
    ],
    caption: 'Poutre bi-appuyée sous charge uniforme : q, V, M, rotation θ et flèche w (tracées vers le bas).',
  },
  {
    id: 'cubature-profils',
    title: 'Cubature par la méthode des trapèzes',
    steps: ['real_examples'],
    formula: ['V \\approx \\sum \\frac{S_i + S_{i+1}}{2}\\, d_i = 14\\,250\\ \\text{m}^3'],
    h: 300,
    draw: () => (
      <Plot x={60} y={30} w={380} h={200} xr={[0, 500]} yr={[0, 48]} xl="x (m)" yl="S (m²)"
        xt={[0, 100, 200, 300, 400, 500].map(v => [v, String(v)])}
        yt={[10, 20, 30, 40].map(v => [v, String(v)])} grid
      >
        {(sx, sy) => (
          <g>
            {PROFILS.slice(1).map((s2, i) => {
              const s1 = PROFILS[i];
              return (
                <g key={i}>
                  <Poly pts={[[sx(i * 100), sy(0)], [sx(i * 100), sy(s1)], [sx(i * 100 + 100), sy(s2)], [sx(i * 100 + 100), sy(0)]]} c="ink" w={1.8} fill={i % 2 ? '~ink' : '~violet'} />
                  <Text x={sx(i * 100 + 50)} y={sy(0) - 10} a="middle" s={13} c="mute">{`${((s1 + s2) / 2) * 100} m³`}</Text>
                </g>
              );
            })}
            {PROFILS.map((v, i) => (
              <Text key={i} x={sx(i * 100)} y={sy(v) - 8} a="middle" s={14} c="red" b>{`S${i} = ${v}`}</Text>
            ))}
          </g>
        )}
      </Plot>
    ),
    notes: ['Le volume est l’aire sous la courbe S(x) : chaque tranche vaut la moyenne de deux profils × la distance.'],
    caption: 'Tronçon de 500 m, profils en travers tous les 100 m : 2 400 + 3 400 + 3 500 + 2 750 + 2 200 = 14 250 m³.',
  },
  {
    id: 'fleche-ipe300',
    title: 'Flèche d’une poutre IPE 300',
    steps: ['simple_examples'],
    formula: ['w_{max} = \\frac{5 \\times 12 \\times 6000^4}{384 \\times 210\\,000 \\times 83{,}56 \\times 10^6} = 11{,}5\\ \\text{mm}'],
    h: 270,
    draw: () => (
      <g>
        <BeamScheme x1={50} x2={340} y={100} loads={[{ type: 'udl', h: 34, label: 'q = 12 kN/m' }]} span="L = 6,00 m" />
        <Poly pts={Array.from({ length: 41 }, (_, i) => { const t = i / 40; return [50 + 290 * t, 104 + 46 * (t - 2 * t ** 3 + t ** 4) / 0.3125]; })} c="red" w={2.2} dash="7 5" />
        <Text x={195} y={170} a="middle" s={14} c="red">déformée (amplifiée)</Text>
        <ISection cx={420} cy={110} b={70} h={120} tf={9} tw={6} />
        <Text x={420} y={196} a="middle" s={14} b>IPE 300</Text>
        <Text x={420} y={216} a="middle" s={13} c="mute">I = 8 356 cm⁴</Text>
        <Text x={60} y={238} s={15}>w = 11,5 mm ≤ L/250 = 24 mm</Text>
        <Text x={318} y={238} s={15} c="green">✔ ELS</Text>
      </g>
    ),
    notes: ['Attention aux unités : 12 kN/m = 12 N/mm.'],
    caption: 'La flèche varie comme L⁴ : doubler la portée multiplie la flèche par 16.',
  },
  {
    id: 'poutre-plancher',
    title: 'Poutre de plancher 30 × 60 cm',
    steps: ['practical_case'],
    formula: ['I = \\frac{b h^3}{12} = 5{,}40 \\times 10^9\\ \\text{mm}^4'],
    h: 270,
    draw: () => (
      <g>
        <BeamScheme x1={40} x2={330} y={110} loads={[{ type: 'udl', h: 40, label: 'q = 18 kN/m' }]} span="L = 7,50 m" />
        <Rect x={392} y={50} w={60} h={120} c="grey" sw={2} fill="pat:concrete" bg="~grey" />
        <Text x={422} y={190} a="middle" s={14}>30 × 60 cm</Text>
        <Line x1={392} y1={110} x2={452} y2={110} c="grey" w={1} dash="4 4" />
        <Text x={60} y={236} s={15}>{'w = 4,3 mm (instantanée, non fissurée)\nlimite L/250 = 30 mm'}</Text>
      </g>
    ),
    notes: ['La fissuration et le fluage multiplient la flèche réelle par 2 à 4 : la marge reste confortable.'],
    caption: 'Vérification de flèche d’une poutre de bureau en béton armé.',
  },
];
