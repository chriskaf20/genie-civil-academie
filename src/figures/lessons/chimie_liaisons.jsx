// Plates — Module 3 · Structure de la matière & liaisons chimiques
import { Arrow, Circle, Dim, Dot, Line, Path, Poly, Text } from '../../components/figures/ink.jsx';
import { Bars } from '../../components/figures/kit.jsx';

function Atom({ x, y, r = 16, c = 'ink', label, s = 13 }) {
  return (
    <g>
      <Circle cx={x} cy={y} r={r} c={c} sw={2} fill={`~${c}`} />
      {label && <Text x={x} y={y + s * 0.36} a="middle" s={s} b c={c} halo={false}>{label}</Text>}
    </g>
  );
}

export default [
  {
    id: 'trois-liaisons',
    title: 'Ionique, covalente, métallique',
    steps: ['theory'],
    formula: ['\\Delta\\chi > 1{,}7 \\Rightarrow \\text{liaison ionique}'],
    h: 290,
    draw: () => (
      <g>
        <Text x={85} y={26} a="middle" s={15} b c="ink">ionique (CaO)</Text>
        {[0, 1, 2].map(i => [0, 1, 2].map(j => (
          <Atom key={`${i}${j}`} x={35 + i * 50} y={60 + j * 50} r={(i + j) % 2 ? 17 : 11} c={(i + j) % 2 ? 'red' : 'ink'} label={(i + j) % 2 ? 'O²⁻' : 'Ca²⁺'} s={10} />
        )))}
        <Text x={85} y={232} a="middle" s={13} c="mute">{'attraction entre ions\n→ dur et fragile'}</Text>

        <Text x={250} y={26} a="middle" s={15} b c="ink">covalente (SiO₂)</Text>
        <Atom x={250} y={110} r={18} c="ink" label="Si" />
        {[[250, 50], [310, 110], [250, 170], [190, 110]].map(([x, y]) => (
          <g key={`${x}-${y}`}>
            <Line x1={250} y1={110} x2={x} y2={y} c="txt" w={3} />
            <Atom x={x} y={y} r={14} c="red" label="O" />
          </g>
        ))}
        <Dot x={278} y={106} r={3} c="txt" />
        <Dot x={278} y={114} r={3} c="txt" />
        <Text x={250} y={232} a="middle" s={13} c="mute">{'électrons partagés\n→ très dur (quartz)'}</Text>

        <Text x={415} y={26} a="middle" s={15} b c="ink">métallique (Fe)</Text>
        {[0, 1, 2].map(i => [0, 1, 2].map(j => (
          <Atom key={`m${i}${j}`} x={365 + i * 50} y={60 + j * 50} r={15} c="grey" label="+" s={14} />
        )))}
        {[[388, 82], [440, 86], [395, 138], [445, 132], [372, 180], [420, 182], [462, 160], [350, 110]].map(([x, y]) => (
          <Dot key={`${x}-${y}`} x={x} y={y} r={3} c="orange" />
        ))}
        <Text x={415} y={232} a="middle" s={13} c="mute">{'« mer » d’électrons libres\n→ ductile, conducteur'}</Text>
      </g>
    ),
    notes: ['Le type de liaison explique le comportement : le métal se déforme, la pierre et le béton se fissurent.'],
    caption: 'Les trois liaisons fortes rencontrées dans les matériaux de construction.',
  },
  {
    id: 'maille-cubique-centree',
    title: 'Maille cubique centrée du fer (ferrite)',
    steps: ['stepbystep'],
    formula: ['\\rho = \\frac{n\\,M}{N_A\\,a^3} = \\frac{2 \\times 55{,}85}{6{,}022\\cdot 10^{23} \\times (2{,}866\\cdot 10^{-8})^3} = 7{,}88\\ \\text{g/cm}^3'],
    h: 300,
    draw: () => {
      const o = [90, 250];
      const a = 150;
      const d = [60, -50];
      const P = (i, j, k) => [o[0] + i * a + k * d[0], o[1] - j * a + k * d[1]];
      const edges = [
        [[0, 0, 0], [1, 0, 0]], [[0, 0, 0], [0, 1, 0]], [[1, 0, 0], [1, 1, 0]], [[0, 1, 0], [1, 1, 0]],
        [[0, 0, 1], [1, 0, 1]], [[0, 0, 1], [0, 1, 1]], [[1, 0, 1], [1, 1, 1]], [[0, 1, 1], [1, 1, 1]],
        [[0, 0, 0], [0, 0, 1]], [[1, 0, 0], [1, 0, 1]], [[0, 1, 0], [0, 1, 1]], [[1, 1, 0], [1, 1, 1]],
      ];
      const corners = [0, 1].flatMap(i => [0, 1].flatMap(j => [0, 1].map(k => P(i, j, k))));
      const C = P(0.5, 0.5, 0.5);
      return (
        <g>
          {edges.map(([p, q], i) => {
            const [x1, y1] = P(...p);
            const [x2, y2] = P(...q);
            // The back-bottom-left corner (0, 0, 1) is hidden: its three edges are dashed.
            const isHidden = v => v[0] === 0 && v[1] === 0 && v[2] === 1;
            const hidden = isHidden(p) || isHidden(q);
            return <Line key={i} x1={x1} y1={y1} x2={x2} y2={y2} c="ink" w={1.8} dash={hidden ? '5 4' : undefined} />;
          })}
          <Line x1={P(0, 0, 0)[0]} y1={P(0, 0, 0)[1]} x2={P(1, 1, 1)[0]} y2={P(1, 1, 1)[1]} c="grey" w={1} dash="3 4" />
          {corners.map(([x, y], i) => <Atom key={i} x={x} y={y} r={13} c="ink" />)}
          <Atom x={C[0]} y={C[1]} r={17} c="red" />
          <Dim x1={o[0]} y1={o[1] + 18} x2={o[0] + a} y2={o[1] + 18} label="a = 0,2866 nm" side={-1} s={14} />
          <Text x={330} y={110} s={14}>{'8 sommets × 1/8 = 1 atome\n+ 1 atome au centre\n= n = 2 atomes par maille'}</Text>
          <Line x1={C[0] + 20} y1={C[1] + 6} x2={326} y2={185} c="red" w={1.2} />
          <Text x={330} y={190} s={14} c="red">atome central</Text>
        </g>
      );
    },
    notes: ['Chaque atome de sommet est partagé entre 8 mailles voisines.'],
    caption: 'Le calcul retrouve la masse volumique mesurée du fer (7,87 g/cm³).',
  },
  {
    id: 'glissement-rupture',
    title: 'Pourquoi l’acier plie et la pierre casse',
    steps: ['diagrams'],
    h: 280,
    draw: () => (
      <g>
        <Text x={120} y={26} a="middle" s={15} b c="ink">métal : les plans glissent</Text>
        {[0, 1, 2, 3].map(j => [0, 1, 2, 3, 4].map(i => (
          <Circle key={`a${i}${j}`} cx={40 + i * 34 + (j < 2 ? 22 : 0)} cy={70 + j * 34} r={14} c="grey" sw={1.6} fill="~grey" />
        )))}
        <Line x1={20} y1={121} x2={240} y2={121} c="red" w={2} dash="6 4" />
        <Arrow x1={60} y1={52} x2={120} y2={52} c="red" w={2.4} />
        <Arrow x1={200} y1={200} x2={140} y2={200} c="red" w={2.4} />
        <Text x={120} y={240} a="middle" s={13} c="mute">{'les liaisons se reforment :\ndéformation plastique'}</Text>

        <Text x={375} y={26} a="middle" s={15} b c="ink">céramique : une fissure s’ouvre</Text>
        {[0, 1, 2, 3].map(j => [0, 1, 2, 3, 4].map(i => (
          <Circle key={`b${i}${j}`} cx={300 + i * 34} cy={70 + j * 34 + (i > 2 ? 4 : 0)} r={14} c={(i + j) % 2 ? 'red' : 'ink'} sw={1.6} fill={(i + j) % 2 ? '~red' : '~ink'} />
        )))}
        <Path d="M385,52 L382,90 L392,120 L384,160 L390,192" c="txt" w={2.6} />
        <Arrow x1={300} y1={210} x2={270} y2={210} c="red" w={2.4} />
        <Arrow x1={450} y1={210} x2={480} y2={210} c="red" w={2.4} />
        <Text x={375} y={240} a="middle" s={13} c="mute">{'ions de même signe face à face :\nrupture fragile'}</Text>
      </g>
    ),
    caption: 'La liaison métallique tolère le glissement des plans d’atomes ; la liaison ionique non.',
  },
  {
    id: 'acier-1930',
    title: 'Acier de 1930 : souder ou boulonner ?',
    steps: ['practical_case'],
    formula: ['CE = 0{,}25 + \\frac{0{,}60}{6} = 0{,}35\\ \\%'],
    h: 280,
    draw: () => (
      <g>
        <Bars x={60} y={40} w={400} h={170} max={0.1} ticks={[0.02, 0.04, 0.06, 0.08]} unit="% massique" bars={[
          { label: 'P (1930)', v: 0.08, c: 'red', txt: '0,08 %' },
          { label: 'S (1930)', v: 0.06, c: 'red', txt: '0,06 %' },
          { label: 'P, S (actuel)', v: 0.035, c: 'green', txt: '≤ 0,035 %' },
        ]} />
        <Line x1={60} y1={40 + 170 - (170 * 0.035) / 0.1} x2={460} y2={40 + 170 - (170 * 0.035) / 0.1} c="green" w={1.6} dash="6 4" />
        <Text x={60} y={262} s={14} c="ink">CE correct, mais P et S élevés → risque de fissuration : renfort boulonné.</Text>
      </g>
    ),
    notes: ['Le carbone équivalent ne suffit pas : les impuretés (phosphore, soufre) fragilisent la zone soudée.'],
    caption: 'Comparaison des teneurs en phosphore et soufre d’un acier ancien et d’un acier actuel.',
  },
];
