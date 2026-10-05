// Plates — Module 2 · Dynamique des corps, énergie, chocs et oscillations
import { Arrow, Circle, Dim, Fixed, Ground, Line, Path, Plot, Poly, Rect, Text, fnPts } from '../../components/figures/ink.jsx';
import { Bars, Car, Person, Truck } from '../../components/figures/kit.jsx';

const amp = z => r => 1 / Math.sqrt((1 - r * r) ** 2 + (2 * z * r) ** 2);

/** Zigzag spring between (x, y1) and (x, y2). */
function Spring({ x, y1, y2, n = 8, wd = 14 }) {
  const step = (y2 - y1) / (n * 2 + 2);
  const pts = [[x, y1], [x, y1 + step]];
  for (let i = 0; i < n * 2; i++) pts.push([x + (i % 2 ? -wd : wd), y1 + step * (i + 1.5)]);
  pts.push([x, y2 - step], [x, y2]);
  return <Poly pts={pts} c="ink" w={2} />;
}

export default [
  {
    id: 'oscillateur-resonance',
    title: 'Oscillateur et résonance',
    steps: ['theory'],
    formula: ['f_0 = \\frac{1}{2\\pi}\\sqrt{\\frac{k}{m}}'],
    h: 310,
    draw: () => (
      <g>
        <Rect x={30} y={30} w={110} h={12} c="grey" sw={1.4} fill="pat:hatch" bg="~grey" />
        <Spring x={85} y1={42} y2={150} />
        <Rect x={55} y={150} w={60} h={44} c="ink" sw={2.2} fill="~ink" />
        <Text x={85} y={178} a="middle" s={18} b c="ink">m</Text>
        <Text x={100} y={100} s={16} c="ink">k</Text>
        <Arrow x1={130} y1={150} x2={130} y2={200} c="red" w={1.8} both hs={8} />
        <Text x={138} y={180} s={14} c="red">x(t)</Text>
        <Path d="M40,250 q12,-26 24,0 t24,0 t24,0 t24,0" c="red" w={2} />
        <Text x={40} y={285} s={13} c="mute">oscillation libre de période T₀</Text>
        <Plot x={210} y={40} w={250} h={200} xr={[0, 2.2]} yr={[0, 6]} xl="f / f₀" yl="amplification"
          xt={[[0.5, '0,5'], [1, '1'], [1.5, '1,5'], [2, '2']]} yt={[[1, '1'], [3, '3'], [5, '5']]} grid
        >
          {(sx, sy) => (
            <g>
              {[[0.1, 'red', 'ζ = 10 %'], [0.2, 'orange', 'ζ = 20 %'], [0.5, 'ink', 'ζ = 50 %']].map(([z, c, lab], i) => (
                <g key={z}>
                  <Poly pts={fnPts(r => Math.min(6, amp(z)(r)), 0, 2.2, sx, sy, 120)} c={c} w={2.4} />
                  <Text x={sx(1.35)} y={sy(4.8 - i * 1.1)} s={13} c={c}>{lab}</Text>
                </g>
              ))}
              <Line x1={sx(1)} y1={sy(0)} x2={sx(1)} y2={sy(6)} c="grey" w={1} dash="4 4" />
              <Text x={sx(1) + 4} y={sy(5.6)} s={12} c="mute">résonance</Text>
            </g>
          )}
        </Plot>
      </g>
    ),
    notes: ['Si la fréquence d’excitation approche f₀, l’amplitude n’est limitée que par l’amortissement ζ.'],
    caption: 'Masse-ressort et facteur d’amplification dynamique selon le rapport des fréquences.',
  },
  {
    id: 'choc-voiture',
    title: 'Choc d’une voiture sur un poteau',
    steps: ['stepbystep'],
    formula: ['E_c = \\tfrac12 \\times 1\\,500 \\times 13{,}9^2 = 145\\ \\text{kJ}', 'F = \\frac{E_c}{d} = 290\\ \\text{kN}'],
    h: 280,
    draw: () => (
      <g>
        <Ground x1={20} x2={480} y={200} />
        <Rect x={400} y={70} w={30} h={130} c="grey" sw={2} fill="pat:concrete" bg="~grey" />
        <Text x={415} y={60} a="middle" s={14}>poteau</Text>
        <g transform="translate(150 200) scale(2.2) translate(-150 -200)">
          <Car x={102} y={200} w={86} />
        </g>
        <Rect x={340} y={120} w={60} h={70} c="red" sw={1.6} fill="~red" dash="5 4" />
        <Dim x1={340} y1={225} x2={400} y2={225} label="d = 0,50 m" side={-1} s={14} />
        <Arrow x1={110} y1={100} x2={190} y2={100} c="ink" w={2.6} />
        <Text x={110} y={88} s={15} c="ink">v = 50 km/h = 13,9 m/s</Text>
        <Arrow x1={460} y1={140} x2={432} y2={140} c="red" w={3} />
        <Text x={445} y={128} s={14} c="red">F</Text>
        <Text x={30} y={258} s={14}>{'m = 1 500 kg · F ≈ 290 kN · durée Δt = 2d/v ≈ 0,07 s'}</Text>
      </g>
    ),
    notes: ['La zone déformable allonge la distance d’arrêt : la force moyenne est inversement proportionnelle à d.'],
    caption: 'L’énergie cinétique est absorbée par la déformation de la carrosserie sur 0,50 m.',
  },
  {
    id: 'passerelle-londres',
    title: 'Passerelle mise en résonance par les piétons',
    steps: ['real_examples'],
    formula: ['f_{latérale} \\approx 1\\ \\text{Hz} \\approx \\tfrac12 f_{marche}'],
    h: 270,
    draw: () => (
      <g>
        <Path d="M20,120 Q250,150 480,120" c="ink" w={3} />
        <Path d="M20,60 Q250,150 480,60" c="grey" w={1.6} />
        {Array.from({ length: 9 }, (_, i) => {
          const x = 70 + i * 45;
          const t = (x - 20) / 460;
          return <Person key={i} x={x} y={120 + 60 * t * (1 - t) - 2} k={0.55} c="mute" />;
        })}
        <Text x={250} y={40} a="middle" s={14} c="mute">vue de côté</Text>
        <Poly pts={fnPts(t => Math.sin(2 * Math.PI * t * 3), 0, 1, t => 40 + 420 * t, v => 215 + 18 * v, 120)} c="red" w={2.2} />
        <Text x={40} y={250} s={14} c="red">balancement latéral à ≈ 1 Hz : les piétons se synchronisent</Text>
      </g>
    ),
    notes: ['Corrigée par des amortisseurs visqueux et à masse accordée, la passerelle a rouvert en 2002.'],
    caption: 'Les pas latéraux, à la moitié de la fréquence de marche, ont excité le mode latéral de la passerelle.',
  },
  {
    id: 'absorbeur-pile',
    title: 'Absorbeur de choc devant une pile de pont',
    steps: ['practical_case'],
    formula: ['F = \\frac{E_c}{d} \\quad E_c = 2{,}90\\ \\text{MJ}'],
    h: 310,
    draw: () => (
      <g>
        <Ground x1={20} x2={480} y={140} />
        <Truck x={40} y={140} w={130} />
        <Rect x={250} y={100} w={90} h={34} c="orange" sw={2} fill="~orange" />
        {[0, 1, 2, 3].map(i => <Line key={i} x1={262 + i * 22} y1={102} x2={262 + i * 22} y2={132} c="orange" w={1.2} />)}
        <Rect x={340} y={30} w={40} h={110} c="grey" sw={2} fill="pat:concrete" bg="~grey" />
        <Text x={295} y={92} a="middle" s={13} c="orange">absorbeur 1,2 m</Text>
        <Text x={360} y={24} a="middle" s={13}>pile</Text>
        <Bars x={90} y={175} w={330} h={100} max={11} bars={[
          { label: 'choc direct (0,3 m)', v: 9.7, c: 'red', txt: '9,7 MN' },
          { label: 'avec absorbeur (1,5 m)', v: 1.9, c: 'green', txt: '1,9 MN' },
        ]} />
      </g>
    ),
    notes: ['Même énergie, distance d’arrêt cinq fois plus longue : force moyenne cinq fois plus faible.'],
    caption: 'Poids lourd de 30 t à 50 km/h : effet d’un absorbeur sur la force moyenne d’impact.',
  },
];
