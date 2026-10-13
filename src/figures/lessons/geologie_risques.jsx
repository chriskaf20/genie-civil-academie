// Plates — Module 11 · Risques géologiques
import { Arrow, Circle, House, Line, Path, Poly, Rect, Text } from '../../components/figures/kit.jsx';

/** Rockfall barrier: posts and net between x1 and x2 standing on y. */
function Ecran({ x1, x2, y, h = 40 }) {
  return (
    <g>
      <Line x1={x1} y1={y} x2={x1} y2={y - h} c="ink" w={2.4} />
      <Line x1={x2} y1={y} x2={x2} y2={y - h} c="ink" w={2.4} />
      <Path d={`M ${x1} ${y - h} ${Array.from({ length: 8 }, (_, k) => `L ${x1 + ((k + 0.5) * (x2 - x1)) / 8} ${y - (k % 2 ? h : 6)}`).join(' ')} L ${x2} ${y - h}`} c="grey" w={1.4} />
    </g>
  );
}

export default [
  {
    id: 'aleas',
    title: 'Quatre aléas géologiques',
    steps: ['theory'],
    formula: ['E = m\\,g\\,h', 'h_f = \\frac{H_v}{k - 1}'],
    h: 290,
    draw: () => (
      <g>
        {[[10, 20, 'chutes de blocs'], [255, 20, 'cavités et fontis'], [10, 155, 'retrait-gonflement des argiles'], [255, 155, 'liquéfaction']].map(([x, y, t]) => (
          <g key={t}>
            <Rect x={x} y={y} w={235} h={128} rx={8} c="grey" sw={1} />
            <Text x={x + 10} y={y + 18} s={12} b>{t}</Text>
          </g>
        ))}
        <Poly pts={[[20, 40], [70, 40], [90, 140], [235, 140], [235, 146], [20, 146]]} c="ink" w={1.6} fill="pat:rock" close />
        <Rect x={64} y={46} w={14} h={12} c="ink" sw={1.6} fill="~grey" />
        <Path d="M 80 52 Q 120 50 150 118" c="red" w={1.6} dash="5 3" />
        <Ecran x1={150} x2={190} y={140} h={30} />
        <Line x1={196} y1={140} x2={235} y2={140} c="ink" w={3} />
        <Line x1={255} y1={70} x2={490} y2={70} c="ink" w={2} />
        <House x={404} y={70} w={44} h={24} />
        <Rect x={300} y={124} w={150} h={16} c="ink" sw={1.6} fill="paper" />
        <Path d="M 340 124 Q 345 92 372 88 Q 400 92 410 124" c="red" w={1.6} dash="5 3" fill="~red" />
        <Text x={372} y={110} a="middle" s={11} c="red">cloche</Text>
        <Rect x={20} y={240} w={225} h={36} c="soil" sw={0} fill="pat:clay" />
        <Line x1={20} y1={240} x2={245} y2={240} c="ink" w={1.6} />
        <House x={86} y={240} w={60} h={28} />
        <Path d="M 132 218 l 5 6 l -4 5 l 5 6" c="red" w={2} />
        <Arrow x1={160} y1={252} x2={160} y2={268} c="red" w={1.8} hs={6} />
        <Arrow x1={180} y1={262} x2={180} y2={248} c="water" w={1.8} hs={6} />
        <Text x={196} y={276} s={10} c="mute">sec / humide</Text>
        <Rect x={265} y={232} w={215} h={44} c="water" sw={0} fill="pat:sand" />
        <Line x1={265} y1={240} x2={480} y2={240} c="water" w={1.6} dash="5 3" />
        <Poly pts={[[330, 236], [390, 222], [404, 172], [344, 186]]} c="ink" w={2} fill="~ink" close />
        <Text x={430} y={214} a="middle" s={10} c="water">{'sable saturé\n+ séisme'}</Text>
      </g>
    ),
    notes: ['Chaque aléa se caractérise par sa probabilité et son intensité ; le risque naît de sa rencontre avec des enjeux (routes, maisons).'],
    caption: 'Blocs qui tombent, vides qui remontent, argiles qui bougent, sables qui perdent toute résistance.',
  },
  {
    id: 'chute-bloc',
    title: 'Protéger une route contre les chutes de blocs',
    steps: ['stepbystep'],
    formula: ['E = 5\\,400 \\times 9{,}81 \\times 30 = 1\\,590\\ \\text{kJ}', 'v = \\sqrt{2 g h} = 24{,}3\\ \\text{m/s}'],
    h: 290,
    draw: () => (
      <g>
        <Poly pts={[[20, 30], [140, 30], [170, 250], [480, 262], [480, 280], [20, 280]]} c="ink" w={2} fill="pat:rock" close />
        <Rect x={120} y={36} w={20} h={18} c="ink" sw={2} fill="~grey" />
        <Text x={114} y={28} a="end" s={12} b>bloc 2 m³ (5,4 t)</Text>
        <Path d="M 142 50 Q 220 60 300 215" c="red" w={2} dash="6 4" />
        <Arrow x1={293} y1={202} x2={300} y2={215} c="red" w={2} hs={8} />
        <Ecran x1={300} x2={340} y={256} h={44} />
        <Text x={320} y={200} a="middle" s={12} c="green" b>écran 2 000 kJ</Text>
        <Line x1={380} y1={258} x2={480} y2={262} c="ink" w={3.2} />
        <Text x={430} y={250} a="middle" s={12} b>route</Text>
        <Line x1={150} y1={45} x2={250} y2={45} c="grey" w={1} dash="4 3" />
        <Line x1={240} y1={45} x2={240} y2={215} c="txt" w={1.2} />
        <Text x={246} y={134} s={13} b>h = 30 m</Text>
        <Text x={380} y={120} s={12} c="red">{'v = 24,3 m/s\nE ≈ 1 590 kJ'}</Text>
      </g>
    ),
    notes: ['Borne supérieure (chute libre) : une étude trajectographique affinera l’énergie ; on retient un écran certifié de classe supérieure, plus une purge et un entretien.'],
    caption: 'Énergie du bloc de projet et choix de la classe de l’écran de filets.',
  },
  {
    id: 'fontis',
    title: 'Remontée d’un fontis au-dessus d’une galerie',
    steps: ['simple_examples'],
    formula: ['h_f = \\frac{H_v}{k - 1} = \\frac{2}{0{,}25} = 8\\ \\text{m}'],
    h: 295,
    draw: () => (
      <g transform="translate(0 25)">
        <Rect x={40} y={40} w={420} h={210} c="soil" sw={0} fill="pat:soil" />
        <Line x1={40} y1={40} x2={460} y2={40} c="ink" w={2.4} />
        <House x={200} y={40} w={70} h={30} />
        <Rect x={120} y={200} w={260} h={32} c="ink" sw={2} fill="paper" />
        <Path d="M 180 200 Q 190 80 235 72 Q 280 80 290 200" c="red" w={2} fill="~red" dash="6 4" />
        {Array.from({ length: 22 }, (_, k) => <Circle key={k} cx={190 + (k % 11) * 9} cy={k < 11 ? 222 : 212} r={3} c="grey" sw={1} fill="~grey" />)}
        <Line x1={400} y1={40} x2={400} y2={200} c="txt" w={1.2} />
        <Text x={406} y={124} s={12} b>toit à 10 m</Text>
        <Line x1={130} y1={200} x2={130} y2={232} c="txt" w={1.2} />
        <Text x={124} y={222} a="end" s={12} b>{'H_v = 2 m'}</Text>
        <Line x1={300} y1={72} x2={300} y2={200} c="red" w={1.2} />
        <Text x={306} y={150} s={12} c="red" b>{'h_f = 8 m'}</Text>
        <Line x1={235} y1={40} x2={235} y2={72} c="green" w={2} />
        <Text x={241} y={62} s={12} c="green" b>marge 2 m</Text>
        <Text x={250} y={244} a="middle" s={11} c="mute">éboulis foisonnés (k = 1,25)</Text>
      </g>
    ),
    notes: ['Les terrains effondrés occupent plus de volume (foisonnement) : ils comblent le vide et la cloche s’arrête. Ici la marge de 2 m est faible : surveillance ou comblement.'],
    caption: 'Galerie de 2 m de haut à 10 m de profondeur : la cloche s’arrête théoriquement à 2 m de la surface.',
  },
  {
    id: 'carrieres',
    title: 'Lotissement sur d’anciennes carrières souterraines',
    steps: ['practical_case'],
    formula: ['h_f = \\frac{3}{0{,}25} = 12\\ \\text{m} < 15\\ \\text{m}'],
    h: 280,
    draw: () => (
      <g>
        <Rect x={20} y={40} w={460} h={210} c="soil" sw={0} fill="pat:rock" />
        <Line x1={20} y1={40} x2={480} y2={40} c="ink" w={2.4} />
        {[50, 140, 230, 320, 410].map(x => <House key={x} x={x} y={40} w={46} h={22} />)}
        <Rect x={30} y={131} w={190} h={21} c="ink" sw={1.6} fill="paper" />
        <Rect x={260} y={180} w={210} h={21} c="ink" sw={1.6} fill="paper" />
        {[70, 120, 170].map(x => <Rect key={x} x={x} y={131} w={14} h={21} c="ink" sw={1} fill="pat:rock" />)}
        {[300, 360, 420].map(x => <Rect key={x} x={x} y={180} w={14} h={21} c="ink" sw={1} fill="pat:rock" />)}
        <Path d="M 90 131 Q 100 50 125 46 Q 150 50 160 131" c="red" w={1.8} dash="5 3" fill="~red" />
        <Path d="M 330 180 Q 340 100 365 96 Q 390 100 400 180" c="orange" w={1.8} dash="5 3" />
        <Text x={125} y={172} a="middle" s={12} c="red" b>{'recouvrement 13 m : la cloche\narrive à 1 m de la surface'}</Text>
        <Text x={365} y={222} a="middle" s={12} c="green" b>{'recouvrement 20 m : 8 m de marge'}</Text>
        <Text x={250} y={268} a="middle" s={12}>{'vides de 3 m : h_f = 12 m ; injection sous les lots à faible recouvrement'}</Text>
      </g>
    ),
    notes: ['Le calcul seul ne suffit pas (piliers dégradés, effondrements en chaîne) : géophysique et sondages localisent les vides avant de décider des comblements.'],
    caption: 'Le même vide est sans danger sous 20 m de recouvrement, menaçant sous 13 m.',
  },
];
