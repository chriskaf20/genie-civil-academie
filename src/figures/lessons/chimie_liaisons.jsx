// Plates — Module 3 · Structure de la matière & liaisons chimiques
import { Arrow, Circle, Dim, Dot, Line, Path, Poly, Text } from '../../components/figures/ink.jsx';
import { Bars } from '../../components/figures/kit.jsx';
import { Plot, Rect } from '../../components/figures/kit.jsx';

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
    steps: ['stepbystep', 'formulas'],
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
  {
    id: 'atome-mole',
    title: 'L’atome et la mole',
    steps: ['theory', 'formulas', 'simple_examples'],
    formula: ['n = \\frac{m}{M} \\qquad N = n\\,N_A = \\frac{1}{55{,}85} \\times 6{,}022 \\times 10^{23} = 1{,}08 \\times 10^{22}'],
    h: 250,
    draw: () => (
      <g>
        <Circle cx={120} cy={125} r={82} c="grey" sw={1.4} dash="5 4" />
        <Circle cx={120} cy={125} r={50} c="grey" sw={1.4} dash="5 4" />
        {[[0, 50], [180, 50], [60, 82], [150, 82], [250, 82], [320, 82]].map(([a, r], i) => (
          <Dot key={i} x={120 + r * Math.cos((a * Math.PI) / 180)} y={125 + r * Math.sin((a * Math.PI) / 180)} r={5} c="water" />
        ))}
        {[[-6, -5, 'red'], [6, -5, 'ink'], [0, 6, 'red'], [-7, 7, 'ink'], [7, 7, 'red']].map(([dx, dy, c], i) => <Circle key={i} cx={120 + dx} cy={125 + dy} r={6} c={c} sw={1.2} fill={c === 'red' ? '~red' : '~grey'} />)}
        <Text x={120} y={232} a="middle" s={12}>{'noyau (protons, neutrons)\n+ électrons'}</Text>
        <Poly pts={[[300, 170], [440, 170], [410, 120], [330, 120]]} c="ink" w={2} fill="~grey" close />
        <Text x={370} y={150} a="middle" s={13} b>55,85 g de fer</Text>
        <Text x={370} y={198} a="middle" s={13} c="red" b>= 1 mole</Text>
        <Text x={370} y={218} a="middle" s={12}>{'= 6,022 × 10²³ atomes'}</Text>
        <Text x={370} y={90} a="middle" s={12} c="mute">{'1 g de fer ≈ 10²² atomes'}</Text>
      </g>
    ),
    notes: ['La masse molaire relie la balance (grammes) au nombre d’atomes : c’est la base de toutes les équations de la chimie du ciment et de la corrosion.'],
    caption: 'Un atome, puis un tas de N_A atomes : la mole.',
  },
  {
    id: 'echelle-electronegativite',
    title: 'Électronégativité et type de liaison',
    steps: ['theory', 'simple_examples'],
    formula: ['\\Delta\\chi > 1{,}7 \\Rightarrow \\text{liaison ionique}'],
    h: 240,
    draw: () => {
      const X = c => 40 + (c - 0.8) * 150;
      return (
        <g>
          <Line x1={X(0.8)} y1={130} x2={X(3.6)} y2={130} c="ink" w={2} />
          {[1, 1.5, 2, 2.5, 3, 3.5].map(v => <Text key={v} x={X(v)} y={150} a="middle" s={11} c="mute">{String(v).replace('.', ',')}</Text>)}
          {[[1.0, 'Ca'], [1.83, 'Fe'], [1.9, 'Si'], [2.55, 'C'], [3.44, 'O']].map(([v, n], i) => (
            <g key={n}>
              <Dot x={X(v)} y={130} r={6} c={n === 'O' ? 'red' : 'ink'} />
              <Text x={X(v) + (n === 'Si' ? 8 : n === 'Fe' ? -8 : 0)} y={116} a={n === 'Si' ? 'start' : n === 'Fe' ? 'end' : 'middle'} s={13} b>{n}</Text>
            </g>
          ))}
          <Path d={`M ${X(1.0)} 100 Q ${(X(1.0) + X(3.44)) / 2} 40 ${X(3.44)} 100`} c="red" w={2} />
          <Text x={(X(1.0) + X(3.44)) / 2} y={58} a="middle" s={13} c="red" b>{'Ca–O : Δχ = 2,44 > 1,7 → ionique (chaux)'}</Text>
          <Path d={`M ${X(1.9)} 160 Q ${(X(1.9) + X(3.44)) / 2} 210 ${X(3.44)} 160`} c="water" w={2} />
          <Text x={(X(1.9) + X(3.44)) / 2} y={222} a="middle" s={13} c="water" b>{'Si–O : Δχ = 1,54 → covalente polaire (quartz)'}</Text>
        </g>
      );
    },
    notes: ['Plus l’écart d’électronégativité est grand, plus un atome « arrache » les électrons de l’autre : liaison ionique ; sinon, ils sont partagés : covalente.'],
    caption: 'Échelle de Pauling et liaisons de deux constituants courants du génie civil.',
  },
  {
    id: 'diagramme-fer-carbone',
    title: 'L’acier : diagramme fer-carbone simplifié',
    steps: ['theory'],
    formula: ['\\text{acier : } C < 2{,}1\\ \\% \\qquad \\text{aciers de construction : } 0{,}1 \\text{ à } 0{,}25\\ \\%'],
    h: 300,
    draw: () => (
      <Plot x={70} y={30} w={380} h={210} xr={[0, 2.1]} yr={[400, 1000]} yl="T (°C)"
        xt={[[0.022, ''], [0.77, '0,77'], [2.1, '2,1 % C']]} yt={[[727, '727'], [912, '912']]} grid
      >
        {(sx, sy) => (
          <g>
            <Rect x={sx(0.1)} y={sy(1000)} w={sx(0.25) - sx(0.1)} h={sy(400) - sy(1000)} c="green" sw={0} fill="~green" />
            <Line x1={sx(0)} y1={sy(912)} x2={sx(0.77)} y2={sy(727)} c="ink" w={2.4} />
            <Line x1={sx(0.77)} y1={sy(727)} x2={sx(1.632)} y2={sy(1000)} c="ink" w={2.4} />
            <Line x1={sx(0.022)} y1={sy(727)} x2={sx(2.1)} y2={sy(727)} c="ink" w={2.4} />
            <Text x={sx(1.0)} y={sy(900)} a="middle" s={13} b>austénite γ</Text>
            <Text x={sx(0.38)} y={sy(790)} a="middle" s={11}>α + γ</Text>
            <Text x={sx(0.42)} y={sy(560)} a="middle" s={12} b>{'ferrite α\n+ perlite'}</Text>
            <Text x={sx(1.45)} y={sy(560)} a="middle" s={12} b>{'perlite\n+ cémentite Fe₃C'}</Text>
            <Arrow x1={sx(0.2)} y1={sy(880)} x2={sx(0.2)} y2={sy(620)} c="water" w={2} hs={8} dash="6 4" />
            <Arrow x1={sx(0.3)} y1={sy(880)} x2={sx(0.62)} y2={sy(450)} c="red" w={2.4} hs={9} />
            <Text x={sx(0.66)} y={sy(470)} s={12} c="red" b>{'trempe → martensite\n(très dure, fragile)'}</Text>
            <Text x={sx(0.12)} y={sy(985)} s={11} c="green" b>{'aciers de\nconstruction'}</Text>
          </g>
        )}
      </Plot>
    ),
    notes: ['Refroidi lentement, l’acier de construction devient ferrite (ductile) + perlite ; refroidi brutalement (trempe), il devient martensite, que le revenu adoucit.'],
    caption: 'Phases de l’acier selon la teneur en carbone et la température.',
  },
  {
    id: 'carbone-equivalent',
    title: 'Carbone équivalent et soudabilité',
    steps: ['formulas', 'simple_examples'],
    formula: ['CE = C + \\frac{Mn}{6} + \\frac{Cr + Mo + V}{5} + \\frac{Ni + Cu}{15}'],
    h: 230,
    draw: () => {
      const X = v => 40 + v * 700;
      return (
        <g>
          <Rect x={X(0.4)} y={40} w={X(0.45) - X(0.4)} h={130} c="orange" sw={0} fill="~orange" />
          <Rect x={X(0.45)} y={40} w={X(0.6) - X(0.45)} h={130} c="red" sw={0} fill="~red" />
          <Text x={X(0.425)} y={34} a="middle" s={11} c="orange" b>préchauffage ?</Text>
          <Text x={X(0.52)} y={34} a="middle" s={11} c="red" b>préchauffage</Text>
          {[[0, 0.18, 'C', 'ink'], [0.18, 0.233, 'Mn/6', 'orange'], [0.413, 0.01, '', 'green'], [0.423, 0.01, '', 'water']].map(([a, w, l, c], i) => (
            <g key={i}>
              <Rect x={X(a)} y={70} w={w * 700} h={30} c={c} sw={1.4} fill={`~${c}`} />
              {l && <Text x={X(a + w / 2)} y={90} a="middle" s={12} b>{l}</Text>}
            </g>
          ))}
          <Text x={X(0.44)} y={90} s={12} c="red" b>S355 : 0,43 %</Text>
          {[[0, 0.25, 'C', 'ink'], [0.25, 0.1, 'Mn/6', 'orange']].map(([a, w, l, c], i) => (
            <g key={i}>
              <Rect x={X(a)} y={120} w={w * 700} h={30} c={c} sw={1.4} fill={`~${c}`} />
              <Text x={X(a + w / 2)} y={140} a="middle" s={12} b>{l}</Text>
            </g>
          ))}
          <Text x={X(0.36)} y={140} s={12} b>acier de 1930 : 0,35 %</Text>
          {[0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6].map(v => <Text key={v} x={X(v)} y={190} a="middle" s={11} c="mute">{String(v).replace('.', ',')}</Text>)}
          <Text x={250} y={214} a="middle" s={12}>{'CE (%) : au-delà de 0,40–0,45 %, risque de fissuration à froid'}</Text>
        </g>
      );
    },
    notes: ['Le carbone équivalent ne dit pas tout : l’acier de 1930 a un bon CE mais trop de phosphore et de soufre pour être soudé sans essais.'],
    caption: 'Contribution de chaque élément d’alliage à la trempabilité, donc au risque de fissuration au soudage.',
  },
  {
    id: 'oxydation-fer',
    title: 'Corrosion d’une armature : une pile électrochimique',
    steps: ['formulas', 'diagrams'],
    formula: ['4\\,\\mathrm{Fe} + 3\\,\\mathrm{O_{2}} + 2x\\,\\mathrm{H_{2}O} \\longrightarrow 2\\,\\mathrm{Fe_{2}O_{3} \\cdot x\\,H_{2}O}'],
    h: 260,
    draw: () => (
      <g>
        <Rect x={20} y={40} w={460} h={170} c="ink" sw={2} fill="pat:concrete" />
        <Rect x={20} y={150} w={460} h={22} c="ink" sw={1.6} fill="~grey" />
        <Rect x={120} y={146} w={70} h={30} c="soil" sw={1.6} fill="~soil" />
        <Text x={155} y={196} a="middle" s={12} c="soil" b>anode : Fe → Fe²⁺ + 2e⁻</Text>
        <Text x={360} y={196} a="middle" s={12} c="water" b>cathode : O₂ + 2H₂O + 4e⁻ → 4OH⁻</Text>
        <Arrow x1={200} y1={161} x2={330} y2={161} c="red" w={2} hs={8} />
        <Text x={265} y={158} a="middle" s={11} c="red">e⁻</Text>
        <Arrow x1={330} y1={100} x2={330} y2={142} c="water" w={1.8} hs={7} />
        <Text x={336} y={100} s={11} c="water">O₂, eau</Text>
        <Path d="M 140 146 l -6 -30 l 8 -20 l -4 -30 l 4 -26" c="red" w={2} />
        <Path d="M 172 146 l 6 -34 l -6 -18 l 8 -28 l -2 -26" c="red" w={2} />
        <Text x={60} y={70} s={12} c="red" b>{'rouille : volume × 3 à 6\n→ fissures, éclatement'}</Text>
      </g>
    ),
    notes: ['Le fer redevient oxyde ; la rouille occupe plusieurs fois le volume de l’acier et fait éclater l’enrobage, ce qui accélère encore la corrosion.'],
    caption: 'Zones anodique et cathodique sur une armature dépassivée.',
  },
  {
    id: 'navire-rupture',
    title: 'Navires brisés en deux : la rupture fragile',
    steps: ['real_examples'],
    h: 230,
    draw: () => (
      <g>
        <Rect x={20} y={150} w={460} h={70} c="water" sw={0} fill="~water" />
        <Line x1={20} y1={150} x2={480} y2={150} c="water" w={2} />
        <Poly pts={[[40, 120], [230, 120], [236, 168], [70, 168]]} c="ink" w={2.2} fill="~grey" close />
        <Poly pts={[[262, 112], [460, 120], [430, 168], [256, 160]]} c="ink" w={2.2} fill="~grey" close />
        <Rect x={200} y={108} w={26} h={12} c="ink" sw={1.6} fill="paper" />
        <Path d="M 226 120 l 6 12 l -4 10 l 8 12 l -2 14" c="red" w={2.6} />
        <Text x={190} y={92} a="middle" s={12} c="red" b>angle vif d’écoutille</Text>
        <Text x={360} y={96} a="middle" s={12} b>{'défaut de soudure\n+ acier peu tenace'}</Text>
        <Text x={250} y={204} a="middle" s={12} c="water" b>eau froide</Text>
      </g>
    ),
    notes: ['Ces accidents ont fondé la mécanique de la rupture et l’exigence de ténacité (Charpy JR, J0, J2) adaptée à la température de service.'],
    caption: 'Acier peu tenace + basse température + concentration de contraintes = rupture brutale sans déformation.',
  },
  {
    id: 'polymeres-argiles',
    title: 'Polymères et argiles : liaisons faibles',
    steps: ['diagrams'],
    h: 240,
    draw: () => (
      <g>
        <Text x={120} y={24} a="middle" s={13} b>polymère</Text>
        {[0, 1, 2].map(k => (
          <Path key={k} d={`M 30 ${70 + k * 40} q 25 -30 50 0 t 50 0 t 50 0 t 50 0`} c={['ink', 'red', 'water'][k]} w={2.4} />
        ))}
        {[[70, 74], [130, 112], [180, 148], [100, 140]].map(([x, y], i) => <Line key={i} x1={x} y1={y} x2={x + 6} y2={y + 22} c="grey" w={1.2} dash="2 3" />)}
        <Text x={120} y={196} a="middle" s={12}>{'chaînes covalentes\n+ liaisons faibles entre chaînes\n→ souplesse, fluage'}</Text>
        <Text x={370} y={24} a="middle" s={13} b>argile</Text>
        {[0, 1, 2, 3].map(k => <Rect key={k} x={290} y={50 + k * 34} w={160} h={10} c="soil" sw={1.4} fill="~soil" />)}
        {[0, 1, 2].map(k => [0, 1, 2, 3, 4, 5].map(i => <Dot key={`${k}${i}`} x={300 + i * 28} y={72 + k * 34} r={3} c="water" />))}
        <Arrow x1={470} y1={110} x2={470} y2={60} c="water" w={1.8} hs={7} />
        <Text x={370} y={196} a="middle" s={12} c="water">{'feuillets liés faiblement :\nl’eau s’insère → gonflement'}</Text>
      </g>
    ),
    notes: ['Ce sont les liaisons faibles qui expliquent le fluage des polymères et le retrait-gonflement des sols argileux.'],
    caption: 'Deux structures où des liaisons faibles commandent le comportement.',
  },
];
