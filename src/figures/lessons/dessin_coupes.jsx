// Plates — Module 4 · Projections, vues, coupes & sections
import { Angle, Arrow, Dim, Ground, Line, Poly, Rect, Text } from '../../components/figures/ink.jsx';
import { Circle, Path } from '../../components/figures/kit.jsx';

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
    steps: ['stepbystep', 'formulas'],
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
        <Text x={250} y={82} a="middle" s={13}>faîtage</Text>
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
        <Text x={400} y={246} a="middle" s={14} c="red">= 48 × 50² cm² = 12 m²</Text>
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
  {
    id: 'traits-conventions',
    title: 'Les traits et la trace d’un plan de coupe',
    steps: ['theory'],
    h: 260,
    draw: () => (
      <g>
        {[['continu fort : contours vus et coupés', 3.4, null], ['continu fin : cotes, hachures', 1.2, null], ['interrompu : arêtes cachées', 1.6, '7 5'], ['mixte fin : axes, symétries', 1.2, '16 4 2 4']].map(([t, w, d], i) => (
          <g key={t}>
            <Line x1={20} y1={40 + i * 26} x2={120} y2={40 + i * 26} c="ink" w={w} dash={d} />
            <Text x={130} y={44 + i * 26} s={12}>{t}</Text>
          </g>
        ))}
        <Rect x={300} y={120} w={170} h={110} c="ink" sw={3.4} fill="none" />
        <Rect x={360} y={120} w={50} h={10} c="ink" sw={1.4} fill="paper" />
        <Line x1={290} y1={175} x2={480} y2={175} c="ink" w={1.2} dash="16 4 2 4" />
        <Line x1={282} y1={175} x2={296} y2={175} c="ink" w={4} />
        <Line x1={474} y1={175} x2={488} y2={175} c="ink" w={4} />
        <Arrow x1={289} y1={176} x2={289} y2={196} c="ink" w={2} hs={7} />
        <Arrow x1={481} y1={176} x2={481} y2={196} c="ink" w={2} hs={7} />
        <Text x={282} y={168} a="end" s={14} b>A</Text>
        <Text x={492} y={168} s={14} b>A</Text>
        <Text x={250} y={252} a="middle" s={12} c="mute">trace de coupe A-A : trait mixte renforcé, flèches = sens de vue</Text>
      </g>
    ),
    notes: ['L’épaisseur du trait hiérarchise le dessin : ce qui est coupé ressort en trait fort, le reste s’efface.'],
    caption: 'Types de traits normalisés et indication d’une coupe sur un plan.',
  },
  {
    id: 'types-coupes',
    title: 'Coupe simple, coupe brisée, demi-coupe',
    steps: ['theory'],
    h: 240,
    draw: () => (
      <g>
        {[[20, 'coupe simple'], [180, 'coupe brisée'], [340, 'demi-coupe']].map(([x, t], k) => (
          <g key={t}>
            <Text x={x + 70} y={24} a="middle" s={12} b>{t}</Text>
            <Rect x={x} y={40} w={140} h={90} c="ink" sw={2} />
            <Circle cx={x + 40} cy={70} r={12} c="ink" sw={1.6} />
            <Circle cx={x + 100} cy={100} r={12} c="ink" sw={1.6} />
            {k === 0 && <Line x1={x - 8} y1={85} x2={x + 148} y2={85} c="red" w={1.6} dash="12 4 2 4" />}
            {k === 1 && <Path d={`M ${x - 8} 70 L ${x + 70} 70 L ${x + 70} 100 L ${x + 148} 100`} c="red" w={1.6} dash="12 4 2 4" />}
            {k === 2 && <Line x1={x + 70} y1={32} x2={x + 70} y2={138} c="red" w={1.6} dash="12 4 2 4" />}
            <Rect x={x} y={160} w={140} h={50} c="ink" sw={2} fill={k === 2 ? 'none' : 'pat:hatch'} />
            {k === 2 && <Rect x={x + 70} y={160} w={70} h={50} c="ink" sw={2} fill="pat:hatch" />}
            {k === 1 && <>
              <Rect x={x + 28} y={160} w={24} h={50} c="ink" sw={1.6} fill="paper" />
              <Rect x={x + 88} y={160} w={24} h={50} c="ink" sw={1.6} fill="paper" />
            </>}
            {k === 2 && <Rect x={x + 88} y={160} w={24} h={50} c="ink" sw={1.6} fill="paper" />}
            {k === 0 && <Text x={x + 70} y={150} a="middle" s={10} c="red">ne traverse aucun trou</Text>}
          </g>
        ))}
        <Text x={250} y={232} a="middle" s={11} c="mute">en haut : vue en plan et trace de coupe ; en bas : la coupe obtenue</Text>
      </g>
    ),
    notes: ['Une coupe simple mal placée peut ne rien montrer ; la coupe brisée passe par plusieurs détails à la fois ; la demi-coupe montre l’extérieur et l’intérieur d’une pièce symétrique.'],
    caption: 'Trois façons de couper une pièce percée de deux trous.',
  },
  {
    id: 'surface-echelle',
    title: 'Les surfaces se convertissent au carré de l’échelle',
    steps: ['formulas', 'simple_examples'],
    formula: ['A_{réelle} = \\frac{A_{dessin}}{E^2} = 48\\ \\text{cm}^2 \\times 50^2 = 12\\ \\text{m}^2'],
    h: 230,
    draw: () => (
      <g>
        <Rect x={60} y={60} w={40} h={40} c="ink" sw={2} fill="~grey" />
        <Text x={80} y={124} a="middle" s={12}>1 cm² au 1/50</Text>
        <Arrow x1={116} y1={80} x2={176} y2={80} c="red" w={2} hs={8} />
        <Rect x={190} y={30} w={100} h={100} c="ink" sw={2} fill="~grey" />
        {[1, 2, 3, 4].map(i => <g key={i}><Line x1={190 + 20 * i} y1={30} x2={190 + 20 * i} y2={130} c="grey" w={0.8} /><Line x1={190} y1={30 + 20 * i} x2={290} y2={30 + 20 * i} c="grey" w={0.8} /></g>)}
        <Text x={240} y={152} a="middle" s={12}>{'0,50 m × 0,50 m = 0,25 m²'}</Text>
        <Text x={390} y={70} a="middle" s={13} c="red" b>{'× 50 en longueur'}</Text>
        <Text x={390} y={94} a="middle" s={13} c="red" b>{'× 2 500 en surface'}</Text>
        <Text x={250} y={200} a="middle" s={12}>{'pièce mesurée 48 cm² sur le plan → 48 × 0,25 = 12 m²'}</Text>
      </g>
    ),
    notes: ['Erreur classique : multiplier une surface mesurée par N au lieu de N² : la pièce semblerait 50 fois trop petite.'],
    caption: 'Un carré de 1 cm sur un plan au 1/50 représente 0,25 m².',
  },
  {
    id: 'niveaux-coupe',
    title: 'Cotes de niveau sur une coupe',
    steps: ['theory'],
    h: 260,
    draw: () => (
      <g>
        <Rect x={20} y={226} w={460} h={20} c="soil" sw={0} fill="pat:soil" />
        <Rect x={100} y={40} w={260} h={186} c="ink" sw={2} fill="none" />
        {[[226, '±0,00'], [134, '+3,05'], [42, '+6,10']].map(([y, t]) => (
          <g key={t}>
            <Rect x={100} y={y - 8} w={260} h={8} c="ink" sw={1.4} fill="pat:hatch" />
            <Poly pts={[[380, y - 8], [372, y - 20], [388, y - 20]]} c="red" w={1.4} fill="~red" close />
            <Text x={394} y={y - 12} s={13} c="red" b>{t}</Text>
          </g>
        ))}
        <Text x={60} y={222} a="end" s={11} c="mute">{'±0,00 =\nNGF 152,30'}</Text>
        <Text x={230} y={186} a="middle" s={12}>RDC</Text>
        <Text x={230} y={94} a="middle" s={12}>R+1</Text>
      </g>
    ),
    notes: ['Les niveaux sont donnés par rapport au zéro du projet, lui-même rattaché au nivellement général (NGF).'],
    caption: 'Coupe d’un bâtiment R+1 avec ses cotes de niveau.',
  },
  {
    id: 'mur-1-100',
    title: 'Lire une longueur au 1/100',
    steps: ['simple_examples'],
    formula: ['l = 7{,}3\\ \\text{cm} \\times 100 = 730\\ \\text{cm} = 7{,}30\\ \\text{m}'],
    h: 170,
    draw: () => (
      <g>
        <Rect x={60} y={60} w={292} h={24} c="ink" sw={2.4} fill="pat:hatch" />
        <Arrow x1={61} y1={110} x2={351} y2={110} c="txt" w={1.2} hs={6} both />
        <Text x={206} y={130} a="middle" s={13} b>7,3 cm sur le plan</Text>
        <Text x={206} y={154} a="middle" s={13} c="red" b>= 7,30 m réels</Text>
        <Text x={370} y={78} s={12} c="mute">échelle 1/100</Text>
      </g>
    ),
    notes: ['Au 1/100, 1 cm sur le plan vaut 1 m sur le terrain.'],
    caption: 'Mesure d’un mur sur un plan d’ensemble.',
  },
  {
    id: 'rampe-pmr-5pc',
    title: 'Pente d’une rampe accessible',
    steps: ['simple_examples'],
    formula: ['p = \\frac{0{,}30}{6{,}00} \\times 100 = 5\\ \\% \\qquad \\alpha = \\arctan 0{,}05 = 2{,}9°'],
    h: 212,
    draw: () => (
      <g>
        <Line x1={40} y1={160} x2={460} y2={160} c="ink" w={2} />
        <Poly pts={[[60, 160], [420, 160], [420, 124]]} c="ink" w={2.4} fill="~grey" close />
        <Arrow x1={300} y1={128} x2={140} y2={148} c="red" w={2} hs={8} />
        <Text x={230} y={124} a="middle" s={12} c="red" b>sens de la descente</Text>
        <Arrow x1={61} y1={182} x2={419} y2={182} c="txt" w={1.2} hs={6} both />
        <Text x={240} y={198} a="middle" s={12}>6,00 m</Text>
        <Text x={428} y={146} s={12}>0,30 m</Text>
        <Text x={240} y={60} a="middle" s={12} c="mute">dénivelée exagérée</Text>
      </g>
    ),
    notes: ['5 % est la pente maximale usuelle d’une rampe accessible ; sur les plans, une flèche indique le sens de la descente.'],
    caption: 'Rampe de 6 m pour franchir 30 cm.',
  },
  {
    id: 'reservation-inversee',
    title: 'Coupe lue à l’envers : réservation du mauvais côté',
    steps: ['real_examples'],
    h: 250,
    draw: () => (
      <g>
        <Rect x={40} y={90} w={420} h={24} c="ink" sw={2.4} fill="pat:hatch" />
        <Line x1={250} y1={40} x2={250} y2={160} c="ink" w={1.2} dash="16 4 2 4" />
        <Arrow x1={250} y1={44} x2={276} y2={44} c="ink" w={2} hs={7} />
        <Arrow x1={250} y1={156} x2={276} y2={156} c="ink" w={2} hs={7} />
        <Text x={244} y={40} a="end" s={13} b>B</Text>
        <Text x={244} y={170} a="end" s={13} b>B</Text>
        <Rect x={300} y={90} w={40} h={24} c="green" sw={2} fill="~green" />
        <Text x={320} y={84} a="middle" s={12} c="green" b>prévu</Text>
        <Rect x={160} y={90} w={40} h={24} c="red" sw={2} fill="~red" />
        <Text x={180} y={84} a="middle" s={12} c="red" b>réalisé</Text>
        <Text x={250} y={200} a="middle" s={12}>{'flèches de coupe ignorées → réservation inversée\n→ carottage et vérification des armatures'}</Text>
      </g>
    ),
    notes: ['Vérifier le sens d’observation et les axes de chaque coupe ; un plan de réservations validé avant coulage évite les reprises.'],
    caption: 'Voile de sous-sol d’un groupe scolaire : la gaine de ventilation placée en symétrie.',
  },
  {
    id: 'dossier-plans',
    title: 'Lire un dossier de plans',
    steps: ['diagrams'],
    h: 260,
    draw: () => (
      <g>
        {[[20, 30, 'plan de masse'], [180, 30, 'plans de niveaux'], [340, 30, 'coupes'], [20, 140, 'façades'], [180, 140, 'détails 1/20–1/5']].map(([x, y, t], i) => (
          <g key={t}>
            <Rect x={x} y={y} w={140} h={90} c="ink" sw={1.6} fill="paper" />
            {i === 0 && <><Rect x={x + 40} y={y + 25} w={50} h={35} c="ink" sw={1.6} fill="~grey" /><Arrow x1={x + 120} y1={y + 70} x2={x + 120} y2={y + 30} c="ink" w={1.4} hs={6} /></>}
            {i === 1 && <><Rect x={x + 20} y={y + 15} w={100} h={60} c="ink" sw={2.4} /><Line x1={x + 70} y1={y + 15} x2={x + 70} y2={y + 75} c="ink" w={2} /></>}
            {i === 2 && <><Rect x={x + 25} y={y + 20} w={90} h={50} c="ink" sw={1.6} /><Rect x={x + 25} y={y + 42} w={90} h={6} c="ink" sw={1} fill="pat:hatch" /></>}
            {i === 3 && <><Rect x={x + 25} y={y + 20} w={90} h={55} c="ink" sw={1.6} fill="pat:brick" /><Rect x={x + 45} y={y + 35} w={20} h={20} c="water" sw={1.4} fill="~water" /></>}
            {i === 4 && <><Rect x={x + 30} y={y + 20} w={30} h={55} c="ink" sw={1.6} fill="pat:hatch" /><Rect x={x + 60} y={y + 20} w={40} h={55} c="orange" sw={1.4} fill="pat:insul" /></>}
            <Text x={x + 70} y={y + 108} a="middle" s={12} b>{t}</Text>
          </g>
        ))}
        <Rect x={340} y={140} w={140} h={90} c="red" sw={2} fill="~red" />
        <Text x={410} y={164} a="middle" s={12} c="red" b>cartouche</Text>
        <Text x={410} y={186} a="middle" s={11}>{'projet · échelle\nindice · date'}</Text>
      </g>
    ),
    notes: ['Toujours commencer par le cartouche : échelle, unités et indice de révision évitent de travailler sur un plan périmé.'],
    caption: 'Les pièces graphiques d’un dossier et ce que chacune apporte.',
  },
];
