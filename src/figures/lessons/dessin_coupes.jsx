// Plates — Module 4 · Projections, vues, coupes & sections
import { Angle, Arrow, Dim, Ground, Line, Poly, Rect, Text } from '../../components/figures/ink.jsx';

/** L-shaped block in first-angle (European) projection. */
function Views() {
  return (
    <g>
      {/* face */}
      <Poly pts={[[40, 230], [160, 230], [160, 190], [90, 190], [90, 130], [40, 130]]} c="txt" w={2.6} close />
      <Text x={100} y={252} a="middle" s={13} c="mute">vue de face</Text>
      {/* gauche (à droite de la face en projection européenne) */}
      <Rect x={200} y={130} w={80} h={100} c="txt" sw={2.6} />
      <Line x1={200} y1={190} x2={280} y2={190} c="txt" w={2.6} />
      <Text x={240} y={252} a="middle" s={13} c="mute">vue de gauche</Text>
      {/* dessus (sous la face) */}
      <Rect x={40} y={270} w={120} h={80} c="txt" sw={2.6} />
      <Line x1={90} y1={270} x2={90} y2={350} c="txt" w={2.6} />
      <Text x={100} y={370} a="middle" s={13} c="mute">vue de dessus</Text>
      <Line x1={180} y1={130} x2={180} y2={360} c="grey" w={1} dash="12 4 2 4" />
      <Line x1={20} y1={260} x2={300} y2={260} c="grey" w={1} dash="12 4 2 4" />
      {/* 3D */}
      <Poly pts={[[340, 240], [430, 240], [470, 215], [380, 215]]} c="ink" w={2} fill="~ink" />
      <Poly pts={[[430, 240], [430, 210], [470, 185], [470, 215]]} c="ink" w={2} fill="~ink" />
      <Poly pts={[[340, 240], [340, 160], [380, 135], [380, 215]]} c="ink" w={2} fill="~ink" />
      <Poly pts={[[340, 160], [377, 160], [417, 135], [380, 135]]} c="ink" w={2} fill="~ink" />
      <Poly pts={[[377, 160], [377, 210], [417, 185], [417, 135]]} c="ink" w={2} fill="~ink" />
      <Poly pts={[[377, 210], [430, 210], [470, 185], [417, 185]]} c="ink" w={2} fill="~ink" />
      <Arrow x1={300} y1={180} x2={336} y2={196} c="red" w={2} />
      <Text x={300} y={170} s={12} c="red">regard</Text>
      <Text x={405} y={275} a="middle" s={13} c="mute">pièce en perspective</Text>
    </g>
  );
}

export default [
  {
    id: 'projection-europeenne',
    title: 'Les vues en projection européenne',
    steps: ['theory'],
    h: 270,
    draw: () => <g transform="translate(0 -110)"><Views /></g>,
    notes: ['En projection européenne, la vue de gauche se place à droite de la vue de face et la vue de dessus en dessous.'],
    caption: 'Une pièce en L représentée par trois vues alignées par des lignes de rappel.',
  },
  {
    id: 'plan-et-coupe',
    title: 'Du plan à la coupe A-A',
    steps: ['theory'],
    h: 300,
    draw: () => (
      <g>
        <Rect x={20} y={40} w={190} h={150} c="txt" sw={0} fill="none" />
        <Poly pts={[[20, 40], [210, 40], [210, 190], [20, 190]]} c="txt" w={7} close />
        <Line x1={80} y1={190} x2={120} y2={190} c="paper" w={8} />
        <Line x1={150} y1={40} x2={185} y2={40} c="paper" w={8} />
        <Line x1={150} y1={40} x2={185} y2={40} c="ink" w={1.4} />
        <Line x1={105} y1={20} x2={105} y2={210} c="red" w={1.4} dash="14 4 2 4" />
        <Line x1={105} y1={14} x2={105} y2={32} c="red" w={3.6} />
        <Line x1={105} y1={198} x2={105} y2={216} c="red" w={3.6} />
        <Arrow x1={105} y1={22} x2={128} y2={22} c="red" w={1.8} hs={7} />
        <Arrow x1={105} y1={208} x2={128} y2={208} c="red" w={1.8} hs={7} />
        <Text x={132} y={26} s={14} b c="red">A</Text>
        <Text x={132} y={212} s={14} b c="red">A</Text>
        <Text x={115} y={240} a="middle" s={13} c="mute">plan (vue de dessus coupée)</Text>
        <Text x={60} y={120} s={12} c="mute">séjour</Text>

        <Ground x1={260} x2={480} y={250} />
        <Rect x={270} y={110} w={14} h={140} c="txt" sw={1.6} fill="pat:brick" bg="~soil" />
        <Rect x={450} y={110} w={14} h={140} c="txt" sw={1.6} fill="pat:brick" bg="~soil" />
        <Rect x={270} y={98} w={194} h={12} c="txt" sw={1.6} fill="pat:concrete" bg="~grey" />
        <Rect x={450} y={150} w={14} h={40} c="paper" sw={0} fill="paper" />
        <Line x1={450} y1={150} x2={464} y2={150} c="txt" w={1.6} />
        <Line x1={450} y1={190} x2={464} y2={190} c="txt" w={1.6} />
        <Poly pts={[[262, 98], [367, 40], [472, 98]]} c="red" w={2.4} />
        <Text x={367} y={240} a="middle" s={13} c="mute">coupe A-A</Text>
        <Dim x1={300} y1={250} x2={300} y2={110} label="HSP 2,50" s={12} side={-1} />
      </g>
    ),
    notes: ['La coupe montre ce que le plan ne dit pas : hauteurs, épaisseurs de planchers, pentes de toiture.'],
    caption: 'La trace A-A sur le plan indique où l’on coupe et dans quel sens on regarde (flèches).',
  },
  {
    id: 'coupe-toiture-150',
    title: 'Lire une coupe de toiture au 1/50',
    steps: ['stepbystep'],
    formula: ['p = \\frac{1{,}35}{4{,}50} = 30\\ \\%', 'L = \\sqrt{4{,}50^2 + 1{,}35^2} = 4{,}70\\ \\text{m}'],
    h: 280,
    draw: () => (
      <g>
        <Rect x={40} y={170} w={16} h={80} c="txt" sw={1.6} fill="pat:block" bg="~grey" />
        <Rect x={444} y={170} w={16} h={80} c="txt" sw={1.6} fill="pat:block" bg="~grey" />
        <Poly pts={[[30, 176], [250, 110], [470, 176]]} c="soil" w={7} o={0.85} />
        <Line x1={48} y1={170} x2={452} y2={170} c="grey" w={1.4} dash="6 5" />
        <Line x1={250} y1={110} x2={250} y2={170} c="grey" w={1.4} dash="6 5" />
        <Dim x1={48} y1={200} x2={250} y2={200} label="9,0 cm × 50 = 4,50 m" side={-1} s={13} />
        <Dim x1={262} y1={170} x2={262} y2={110} label="2,7 cm × 50 = 1,35 m" s={13} side={-1} />
        <Angle cx={48} cy={170} r={70} a1={-16.7} a2={0} label="16,7°" s={13} lr={26} />
        <Text x={150} y={118} a="middle" s={15} c="red" b rot={-16.7}>chevron 4,70 m</Text>
        <Text x={250} y={96} a="middle" s={13}>faîtage</Text>
        <Text x={30} y={268} s={13} c="mute">égout</Text>
      </g>
    ),
    caption: 'Mesures sur le plan × 50 = dimensions réelles ; la pente vaut 30 %.',
  },
  {
    id: 'echelles',
    title: 'Longueurs et surfaces à l’échelle',
    steps: ['formulas'],
    formula: ['l_{réelle} = \\frac{l_{dessin}}{E}', 'A_{réelle} = \\frac{A_{dessin}}{E^2}'],
    h: 270,
    draw: () => (
      <g>
        <Rect x={40} y={60} w={60} h={40} c="ink" sw={2} fill="~ink" />
        <Text x={70} y={48} a="middle" s={14} b>1/100</Text>
        <Dim x1={40} y1={116} x2={100} y2={116} label="6 cm" side={-1} s={12} />
        <Rect x={160} y={60} w={120} h={80} c="ink" sw={2} fill="~ink" />
        <Text x={220} y={48} a="middle" s={14} b>1/50</Text>
        <Dim x1={160} y1={156} x2={280} y2={156} label="12 cm" side={-1} s={12} />
        <Text x={160} y={210} s={14}>{'même pièce de 6,00 × 4,00 m :\nau 1/50, les longueurs doublent\net les surfaces quadruplent'}</Text>
        <Rect x={330} y={60} w={140} h={120} c="grey" sw={1} />
        {[1, 2, 3].map(i => <Line key={i} x1={330 + i * 35} y1={60} x2={330 + i * 35} y2={180} c="grey" w={1} />)}
        {[1, 2].map(i => <Line key={i} x1={330} y1={60 + i * 40} x2={470} y2={60 + i * 40} c="grey" w={1} />)}
        <Text x={400} y={200} a="middle" s={13} c="mute">48 cm² au 1/50</Text>
        <Text x={400} y={222} a="middle" s={14} c="red">= 48 × 50² cm² = 12 m²</Text>
      </g>
    ),
    caption: 'Une surface se convertit avec le carré de l’échelle.',
  },
  {
    id: 'rampe-parking',
    title: 'Rampe de parking : pente et raccordements',
    steps: ['practical_case'],
    formula: ['p = \\frac{2{,}90}{18{,}50} = 15{,}7\\ \\%'],
    h: 260,
    draw: () => (
      <g>
        <Poly pts={[[20, 70], [100, 70], [120, 74], [360, 184], [380, 190], [480, 190]]} c="txt" w={3} />
        <Poly pts={[[20, 70], [100, 70], [120, 74], [360, 184], [380, 190], [480, 190], [480, 220], [20, 220]]} c="grey" w={0} fill="pat:hatch" bg="~grey" />
        <Text x={60} y={60} a="middle" s={13}>±0,00</Text>
        <Text x={440} y={180} a="middle" s={13}>−2,90</Text>
        <Dim x1={110} y1={240} x2={370} y2={240} label="18,50 m (18,5 cm au 1/100)" side={-1} s={13} />
        <Text x={240} y={110} a="middle" s={15} c="red" b rot={24}>15,7 %</Text>
        <Text x={110} y={46} s={12} c="orange">raccordement (pente ≈ 8 %)</Text>
        <Text x={330} y={214} s={12} c="orange">raccordement</Text>
      </g>
    ),
    notes: ['Les raccordements en haut et en bas évitent que le bas de caisse ou le pare-chocs touche le sol.'],
    caption: 'Coupe longitudinale d’une rampe droite (échelle verticale exagérée).',
  },
];
