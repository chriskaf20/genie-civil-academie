// Plates — Module 12 · Fondations profondes & soutènements
import { Arrow, Bars, Circle, House, Line, Path, Poly, Rect, Text } from '../../components/figures/kit.jsx';

/** Ground anchor from the wall at (x, y) going down-left: free length then grouted bulb. */
function Tirant({ x, y, len = 150, bulb = 60, deg = 20 }) {
  const t = (deg * Math.PI) / 180;
  const fx = x - (len - bulb) * Math.cos(t);
  const fy = y + (len - bulb) * Math.sin(t);
  const ex = x - len * Math.cos(t);
  const ey = y + len * Math.sin(t);
  return (
    <g>
      <Line x1={x} y1={y} x2={fx} y2={fy} c="ink" w={1.8} />
      <Line x1={fx} y1={fy} x2={ex} y2={ey} c="grey" w={7} />
      <Rect x={x - 2} y={y - 6} w={10} h={12} c="ink" sw={1.4} fill="txt" />
    </g>
  );
}

export default [
  {
    id: 'pieu-frottement',
    title: 'Pieu : résistance de pointe et frottement latéral',
    steps: ['theory', 'diagrams'],
    formula: ['R_c = R_b + R_s = k_p\\,p^*_{le}\\,A_b + P \\sum q_{s,i}\\,\\Delta z_i'],
    h: 300,
    draw: () => (
      <g>
        <Rect x={20} y={50} w={300} h={70} c="soil" sw={0} fill="pat:clay" o={0.45} />
        <Rect x={20} y={120} w={300} h={90} c="soil" sw={0} fill="pat:sand" />
        <Rect x={20} y={210} w={300} h={80} c="grey" sw={0} fill="pat:rock" o={0.6} />
        <Line x1={20} y1={50} x2={320} y2={50} c="ink" w={2} />
        <Rect x={150} y={36} w={40} h={224} c="ink" sw={2.2} fill="pat:concrete" />
        <Arrow x1={170} y1={4} x2={170} y2={34} c="red" w={2.8} hs={10} />
        <Text x={178} y={18} s={13} c="red" b>Q</Text>
        {[[70, 4, 'argile molle'], [140, 10, 'sable'], [228, 16, 'marne']].map(([y, n, t]) => (
          <g key={t}>
            {Array.from({ length: n > 10 ? 4 : n > 4 ? 4 : 3 }, (_, k) => {
              const yy = y + k * 16;
              return yy < 258 ? <g key={k}><Arrow x1={136} y1={yy + 10} x2={146} y2={yy} c="green" w={1.4} hs={5} /><Arrow x1={204} y1={yy + 10} x2={194} y2={yy} c="green" w={1.4} hs={5} /></g> : null;
            })}
            <Text x={26} y={y + 6} s={12} b>{t}</Text>
          </g>
        ))}
        {[160, 168, 176, 184].map(x => <Arrow key={x} x1={x - 4} y1={284} x2={x - 4} y2={264} c="orange" w={1.8} hs={6} />)}
        <Text x={196} y={282} s={12} c="orange" b>{'R_b'}</Text>
        <Line x1={370} y1={50} x2={370} y2={260} c="txt" w={1.4} />
        <Rect x={370} y={50} w={14} h={70} c="green" sw={1.2} fill="~green" />
        <Rect x={370} y={120} w={44} h={90} c="green" sw={1.2} fill="~green" />
        <Rect x={370} y={210} w={70} h={50} c="green" sw={1.2} fill="~green" />
        <Text x={410} y={40} a="middle" s={12} c="green" b>{'q_s(z)'}</Text>
        <Text x={452} y={240} s={12} c="green">{'q_{s,max}'}</Text>
        <Text x={410} y={286} a="middle" s={12} c="green" b>{'R_s = P Σ q_s Δz'}</Text>
      </g>
    ),
    notes: ['Le frottement latéral se mobilise le long du fût, couche par couche ; la pointe travaille en compression sur la couche d’ancrage.'],
    caption: 'Coupe d’un pieu foré et diagramme du frottement unitaire q_s(z) selon les couches.',
  },
  {
    id: 'pieu-marne',
    title: 'Pieu foré Ø 0,80 m ancré dans la marne',
    steps: ['stepbystep'],
    formula: ['R_b = 0{,}80 \\times 2\\,000 \\times 0{,}503 = 804\\ \\text{kN} \\qquad R_s = 2{,}513 \\times 15 \\times 80 = 3\\,016\\ \\text{kN}', 'R_{c,d} = \\frac{804}{1{,}40 \\times 1{,}20} + \\frac{3\\,016}{1{,}30 \\times 1{,}20} = 2\\,412\\ \\text{kN}'],
    h: 250,
    draw: () => (
      <g>
        <Bars x={70} y={30} w={320} h={170} max={4000} ticks={[1000, 2000, 3000, 4000]} unit="kN" bars={[
          { label: 'pointe R_b', v: 804, c: 'orange' },
          { label: 'frottement R_s', v: 3016, c: 'green' },
          { label: 'total R_c', v: 3820, c: 'ink' },
          { label: 'calcul R_{c,d}', v: 2412, c: 'red' },
        ]} />
        <Text x={404} y={80} s={12}>{'L = 15 m\np*_{le} = 2 MPa\nq_s = 80 kPa\nk_p = 0,80'}</Text>
      </g>
    ),
    notes: ['Dans un pieu long, le frottement apporte l’essentiel de la résistance (près de 80 % ici).'],
    caption: 'Résistances caractéristiques puis de calcul (facteurs partiels γ et facteur de corrélation ξ).',
  },
  {
    id: 'poussee-butee',
    title: 'Poussée, butée et glissement d’un mur',
    steps: ['formulas', 'simple_examples'],
    formula: ['K_a = \\tan^2\\left(45° - \\tfrac{\\varphi}{2}\\right) = \\tfrac{1}{3} \\qquad K_p = \\tan^2\\left(45° + \\tfrac{\\varphi}{2}\\right) = 3', 'F_s = \\frac{V \\tan\\delta}{F_a} = \\frac{250 \\times 0{,}5}{75} = 1{,}67'],
    h: 290,
    draw: () => (
      <g>
        <Rect x={200} y={40} w={300} h={210} c="soil" sw={0} fill="pat:sand" o={0.6} />
        <Rect x={20} y={210} w={180} h={40} c="soil" sw={0} fill="pat:sand" o={0.6} />
        <Poly pts={[[150, 40], [200, 40], [200, 250], [110, 250]]} c="ink" w={2.4} fill="pat:concrete" close />
        <Poly pts={[[200, 40], [200, 250], [272, 250]]} c="red" w={2} fill="~red" close />
        <Arrow x1={272} y1={180} x2={204} y2={180} c="red" w={3} hs={10} />
        <Text x={280} y={176} s={13} c="red" b>{'F_a = 108 kN/m'}</Text>
        <Text x={280} y={194} s={11} c="mute">à H/3 = 2 m de la base</Text>
        <Text x={236} y={268} a="middle" s={12} c="red">36 kPa</Text>
        <Poly pts={[[110, 210], [110, 250], [50, 250]]} c="green" w={2} fill="~green" close />
        <Arrow x1={50} y1={238} x2={106} y2={238} c="green" w={2.6} hs={9} />
        <Text x={24} y={204} s={12} c="green" b>butée</Text>
        <Arrow x1={160} y1={140} x2={160} y2={196} c="ink" w={2.6} hs={9} />
        <Text x={166} y={170} s={13} b>V</Text>
        <Line x1={110} y1={252} x2={200} y2={252} c="orange" w={3} />
        <Text x={155} y={274} a="middle" s={12} c="orange" b>V·tan δ</Text>
        <Text x={300} y={70} s={12}>{'H = 6 m, γ = 18 kN/m³\nφ′ = 30° : K_a = 1/3'}</Text>
      </g>
    ),
    notes: [
      'La butée est 9 fois plus forte que la poussée pour φ′ = 30°, mais elle ne se mobilise qu’après un déplacement important : on la minore.',
      'Mur poids de l’exemple 3 : V = 250 kN/ml, F_a = 75 kN/ml, tan δ = 0,5 → F_s = 1,67 ≥ 1,5.',
    ],
    caption: 'Diagramme triangulaire de poussée derrière le mur, butée devant le pied, frottement sous la base.',
  },
  {
    id: 'fouille-paris',
    title: 'Fouille urbaine de 25 m : paroi moulée tirantée',
    steps: ['real_examples'],
    h: 345,
    draw: () => (
      <g transform="translate(0 35)">
        <Rect x={20} y={40} w={170} h={260} c="soil" sw={0} fill="pat:sand" o={0.6} />
        <Rect x={20} y={210} w={460} h={90} c="grey" sw={0} fill="pat:rock" o={0.55} />
        <Rect x={200} y={40} w={280} h={170} c="paper" sw={0} fill="paper" />
        <Rect x={190} y={40} w={12} h={240} c="ink" sw={2} fill="pat:concrete" />
        <Line x1={202} y1={210} x2={480} y2={210} c="ink" w={2.2} />
        <Line x1={20} y1={40} x2={190} y2={40} c="ink" w={2} />
        <House x={40} y={40} w={100} h={30} />
        {[80, 125, 170].map(y => <Tirant key={y} x={190} y={y} len={160} bulb={60} deg={18} />)}
        <Line x1={20} y1={70} x2={190} y2={70} c="water" w={1.6} dash="6 4" />
        <Text x={24} y={64} s={11} c="water">nappe haute</Text>
        <Text x={340} y={130} a="middle" s={13} b>fouille 25 m</Text>
        <Text x={210} y={262} s={12} b>calcaire grossier</Text>
        <Text x={210} y={290} s={12} c="red">{'paroi 1,00 m ancrée à 35 m'}</Text>
        <Text x={40} y={196} s={12} c="grey" b>{'3 lits de tirants\nprécontraints'}</Text>
      </g>
    ),
    notes: ['Les tirants passent sous les immeubles riverains ; la paroi ancrée dans le calcaire coupe aussi les venues d’eau.'],
    caption: 'Enceinte en paroi moulée au cœur de Paris : soutènement et barrière contre la nappe.',
  },
  {
    id: 'paroi-moulee',
    title: 'Paroi moulée de 21 m à deux lits de tirants',
    steps: ['practical_case'],
    formula: ['i = \\frac{\\Delta h}{L} = \\frac{12}{24} = 0{,}50 < i_{crit} = 1{,}0'],
    h: 320,
    draw: () => (
      <g>
        <Rect x={20} y={40} w={180} h={270} c="soil" sw={0} fill="pat:sand" o={0.6} />
        <Rect x={200} y={220} w={280} h={90} c="soil" sw={0} fill="pat:sand" o={0.6} />
        <Rect x={20} y={262} w={460} h={48} c="grey" sw={0} fill="pat:clay" o={0.5} />
        <Rect x={190} y={40} w={10} h={252} c="ink" sw={2} fill="pat:concrete" />
        <Line x1={20} y1={40} x2={190} y2={40} c="ink" w={2} />
        <Line x1={200} y1={220} x2={480} y2={220} c="ink" w={2.2} />
        <Tirant x={190} y={88} len={150} bulb={60} deg={20} />
        <Tirant x={190} y={160} len={150} bulb={60} deg={20} />
        <Text x={206} y={92} s={12} b>{'T_1 = 320 kN/ml (−4 m)'}</Text>
        <Text x={206} y={164} s={12} b>{'T_2 = 450 kN/ml (−10 m)'}</Text>
        <Line x1={20} y1={76} x2={190} y2={76} c="water" w={1.6} dash="6 4" />
        <Text x={24} y={70} s={11} c="water">nappe −3 m</Text>
        <Path d="M 120 80 Q 150 300 195 300 Q 240 300 260 224" c="water" w={2} dash="5 4" />
        <Arrow x1={256} y1={236} x2={260} y2={224} c="water" w={2} hs={7} />
        <Text x={270} y={264} s={12} c="water" b>écoulement sous le pied</Text>
        <Arrow x1={470} y1={41} x2={470} y2={219} c="txt" w={1.2} hs={5} both />
        <Text x={466} y={130} a="end" s={12}>fouille 15 m</Text>
        <Arrow x1={180} y1={221} x2={180} y2={291} c="txt" w={1.2} hs={5} both />
        <Text x={174} y={262} a="end" s={12}>fiche 6 m</Text>
      </g>
    ),
    notes: ['La fiche assure à la fois la butée en pied et un chemin d’écoulement assez long pour éviter le renard hydraulique.'],
    caption: 'Paroi de 80 cm : fiche, tirants et vérification hydraulique du fond de fouille.',
  },
];
