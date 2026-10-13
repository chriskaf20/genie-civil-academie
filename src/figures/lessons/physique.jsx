// Plates — Module 2 · Physique fondamentale, dilatation & transferts thermiques
import { Arrow, Dim, Fixed, Line, Plot, Poly, Rect, Text } from '../../components/figures/ink.jsx';
import { Path } from '../../components/figures/kit.jsx';

// Wall of the example: 20 cm concrete (inside) + 12 cm glass wool (outside), 20 °C inside, 0 °C outside.
const LAYERS = [
  { name: 'R_{si}', r: 0.13 },
  { name: 'béton 20 cm', r: 0.2 / 1.6 },
  { name: 'laine 12 cm', r: 0.12 / 0.032 },
  { name: 'R_{se}', r: 0.04 },
];
const R_TOT = LAYERS.reduce((s, l) => s + l.r, 0);

export default [
  {
    id: 'dilatation-libre-empechee',
    title: 'Dilatation libre ou empêchée',
    steps: ['theory'],
    formula: ['\\Delta L = \\alpha\\, L_0\\, \\Delta T', '\\sigma = E\\, \\alpha\\, \\Delta T'],
    h: 300,
    draw: () => (
      <g>
        <Text x={20} y={30} s={16} b c="ink">1. Barre libre : elle s’allonge</Text>
        <Fixed x={60} y={80} h={50} />
        <Rect x={60} y={68} w={300} h={24} c="grey" sw={2} fill="~grey" />
        <Rect x={60} y={68} w={340} h={24} c="red" sw={1.6} dash="6 4" />
        <Dim x1={60} y1={112} x2={360} y2={112} label="L₀" side={-1} s={15} />
        <Dim x1={360} y1={56} x2={400} y2={56} label="ΔL" s={15} lc="red" c="red" />
        <Text x={420} y={86} s={14} c="mute">σ = 0</Text>

        <Text x={20} y={170} s={16} b c="ink">2. Barre bloquée : elle se comprime</Text>
        <Fixed x={60} y={222} h={56} />
        <Fixed x={400} y={222} h={56} side="right" />
        <Rect x={60} y={210} w={340} h={24} c="grey" sw={2} fill="~red" />
        <Arrow x1={120} y1={222} x2={80} y2={222} c="red" w={2.6} />
        <Arrow x1={340} y1={222} x2={380} y2={222} c="red" w={2.6} />
        <Text x={230} y={227} a="middle" s={15} c="red">compression σ = E α ΔT</Text>
        <Text x={60} y={275} s={14} c="mute">les appuis reprennent l’effort N = σ · A</Text>
      </g>
    ),
    notes: ['La contrainte d’une dilatation empêchée ne dépend pas de la longueur : seule compte la variation de température.'],
    caption: 'Le même échauffement donne un allongement (barre libre) ou une contrainte (barre bloquée).',
  },
  {
    id: 'profil-temperature-mur',
    title: 'Profil de température dans un mur isolé',
    steps: ['formulas'],
    formula: ['R_{tot} = R_{si} + \\sum \\frac{e_i}{\\lambda_i} + R_{se} = 4{,}05', 'U = \\frac{1}{R_{tot}} = 0{,}25\\ \\text{W/m}^2\\text{K}'],
    h: 320,
    draw: () => {
      const x0 = 150;
      const xb = 230;
      const xi = 330;
      const yTop = 40;
      const yBot = 270;
      const ty = t => yBot - ((t + 2) / 24) * (yBot - yTop);
      const q = 20 / R_TOT;
      const t1 = 20 - q * LAYERS[0].r;
      const t2 = t1 - q * LAYERS[1].r;
      const t3 = t2 - q * LAYERS[2].r;
      return (
        <g>
          <Rect x={x0} y={yTop} w={xb - x0} h={yBot - yTop} c="grey" sw={2} fill="pat:concrete" bg="~grey" />
          <Rect x={xb} y={yTop} w={xi - xb} h={yBot - yTop} c="orange" sw={2} fill="pat:insul" bg="~orange" />
          <Poly pts={[[40, ty(20)], [x0, ty(t1)], [xb, ty(t2)], [xi, ty(t3)], [460, ty(0)]]} c="red" w={3} />
          <Text x={40} y={ty(20) - 10} s={16} c="red">{'T_{int} = 20 °C'}</Text>
          <Text x={460} y={ty(0) - 10} a="end" s={16} c="ink">{'T_{ext} = 0 °C'}</Text>
          <Text x={x0 - 6} y={ty(t1) + 22} a="end" s={13} c="red">{t1.toFixed(1).replace('.', ',') + ' °C'}</Text>
          <Text x={xb + 6} y={ty(t2) - 8} s={13} c="red">{t2.toFixed(1).replace('.', ',') + ' °C'}</Text>
          <Text x={(x0 + xb) / 2} y={yBot + 20} a="middle" s={14}>béton</Text>
          <Text x={(xb + xi) / 2} y={yBot + 20} a="middle" s={14}>laine de verre</Text>
          <Text x={(x0 + xb) / 2} y={yBot + 38} a="middle" s={12} c="mute">λ = 1,6</Text>
          <Text x={(xb + xi) / 2} y={yBot + 38} a="middle" s={12} c="mute">λ = 0,032</Text>
          <Arrow x1={60} y1={150} x2={130} y2={150} c="orange" w={2.6} />
          <Text x={60} y={140} s={14} c="orange">{`flux q = ${q.toFixed(2).replace('.', ',')} W/m²`}</Text>
          <Text x={355} y={170} s={13} c="mute">{'la chute de\ntempérature\nse fait dans\nl’isolant'}</Text>
        </g>
      );
    },
    notes: ['Le flux est le même dans chaque couche ; la chute de température est proportionnelle à la résistance de la couche.'],
    caption: 'Mur de 20 cm de béton isolé par 12 cm de laine de verre : presque toute la chute de température a lieu dans l’isolant.',
  },
  {
    id: 'rail-long-soude',
    title: 'Rail long soudé chauffé de 40 °C',
    steps: ['stepbystep'],
    formula: ['\\sigma_{th} = 210\\,000 \\times 12 \\cdot 10^{-6} \\times 40 = 100{,}8\\ \\text{MPa}'],
    h: 300,
    draw: () => (
      <g>
        {[130, 170].map(y => <Rect key={y} x={30} y={y} w={340} h={10} c="ink" sw={1.8} fill="~ink" />)}
        {Array.from({ length: 12 }, (_, i) => <Rect key={i} x={40 + i * 28} y={118} w={14} h={78} c="soil" sw={1.4} fill="~soil" />)}
        <Poly pts={Array.from({ length: 31 }, (_, i) => [30 + (340 * i) / 30, 140 + 22 * Math.sin((Math.PI * i) / 30)])} c="red" w={2} dash="7 5" />
        <Text x={200} y={238} a="middle" s={14} c="red">risque de flambage latéral (« coup de chaleur »)</Text>
        <Arrow x1={400} y1={150} x2={372} y2={150} c="red" w={3} hs={12} />
        <Arrow x1={0} y1={150} x2={28} y2={150} c="red" w={3} hs={12} />
        <Text x={392} y={130} s={15} c="red">N = 766 kN</Text>
        <Text x={30} y={40} s={15}>{'L₀ = 50 m · α = 12·10⁻⁶ /°C · ΔT = +40 °C'}</Text>
        <Text x={30} y={70} s={15}>{'si libre : ΔL = 24 mm'}</Text>
        <Text x={30} y={96} s={15} c="red">{'bloqué : σ = 100,8 MPa sur A = 76 cm²'}</Text>
        <Text x={30} y={278} s={13} c="mute">vue en plan : traverses et rails</Text>
      </g>
    ),
    notes: ['Le poids du ballast et des traverses retient la voie latéralement ; une voie fraîchement bourrée est plus vulnérable.'],
    caption: 'Un rail soudé ne peut pas s’allonger : l’échauffement se transforme en un effort de compression de 766 kN.',
  },
  {
    id: 'joint-peigne',
    title: 'Joint de dilatation à peigne',
    steps: ['practical_case'],
    formula: ['S_{req} = 1{,}30 \\times 50{,}4 = 65{,}5\\ \\text{mm} \\Rightarrow 70\\ \\text{mm}'],
    h: 280,
    draw: () => {
      const fingers = [0, 1, 2, 3, 4, 5];
      return (
        <g>
          <Rect x={30} y={40} w={180} h={200} c="grey" sw={2} fill="~grey" />
          <Rect x={290} y={40} w={180} h={200} c="grey" sw={2} fill="~grey" />
          {fingers.map(i => (
            <g key={i}>
              <Rect x={210} y={48 + i * 32} w={56} h={14} c="ink" sw={1.6} fill="~ink" />
              <Rect x={234} y={64 + i * 32} w={56} h={14} c="red" sw={1.6} fill="~red" />
            </g>
          ))}
          <Text x={120} y={150} a="middle" s={15}>tablier</Text>
          <Text x={380} y={150} a="middle" s={15}>culée</Text>
          <Dim x1={234} y1={262} x2={266} y2={262} label="" side={-1} s={13} />
          <Text x={250} y={268} a="middle" s={14} c="red" b>souffle 70 mm</Text>
          <Arrow x1={170} y1={20} x2={210} y2={20} c="ink" w={2} both hs={8} />
          <Text x={140} y={24} a="end" s={13} c="mute">dilatation</Text>
        </g>
      );
    },
    notes: ['Les dents s’emboîtent : la chaussée reste continue pour les roues quel que soit l’écartement.'],
    caption: 'Vue en plan d’un joint à peigne : passerelle de 60 m, ΔT = 70 °C, ΔL = 50,4 mm.',
  },
  {
    id: 'exemples-physique',
    title: 'Dilatation d’un pont, poids d’une dalle',
    steps: ['simple_examples'],
    formula: ['\\Delta L = \\alpha\\,L\\,\\Delta T = 10 \\times 10^{-6} \\times 80 \\times 50 = 40\\ \\text{mm}', 'P = V\\,\\gamma = 15 \\times 25 = 375\\ \\text{kN}'],
    h: 250,
    draw: () => (
      <g>
        <Text x={130} y={28} a="middle" s={12} b>pont béton de 80 m</Text>
        <Rect x={30} y={70} w={200} h={14} c="ink" sw={2} fill="~ink" />
        <Rect x={30} y={100} w={210} h={14} c="red" sw={2} fill="~red" />
        <Line x1={30} y1={60} x2={30} y2={124} c="ink" w={2.4} />
        <Text x={236} y={82} s={11}>hiver (−15 °C)</Text>
        <Text x={246} y={112} s={11} c="red">été (+35 °C)</Text>
        <Arrow x1={231} y1={136} x2={239} y2={136} c="red" w={1.2} hs={4} both />
        <Text x={130} y={160} a="middle" s={13} c="red" b>ΔL = 40 mm au joint</Text>
        <Text x={130} y={186} a="middle" s={11} c="mute">(allongement exagéré)</Text>
        <Text x={380} y={28} a="middle" s={12} b>dalle de 15 m³</Text>
        <Poly pts={[[300, 120], [420, 120], [460, 90], [340, 90]]} c="ink" w={2} fill="~grey" close />
        <Poly pts={[[300, 120], [420, 120], [420, 136], [300, 136]]} c="ink" w={2} fill="pat:concrete" close />
        <Poly pts={[[420, 120], [460, 90], [460, 106], [420, 136]]} c="ink" w={2} fill="~grey" close />
        <Arrow x1={380} y1={140} x2={380} y2={196} c="red" w={3} hs={10} />
        <Text x={390} y={186} s={13} c="red" b>P = 375 kN</Text>
        <Text x={380} y={222} a="middle" s={12}>{'m = 375 000 / 9,81 = 38,2 t'}</Text>
      </g>
    ),
    notes: ['Mur isolé (exemple 2) : $R = 0{,}17 + 0{,}125 + 3{,}75 = 4{,}05$ m²K/W, soit $U = 0{,}25$ W/m²K — voir le profil de température du mur.'],
    caption: 'Le joint de chaussée doit absorber l’allongement saisonnier ; le poids se déduit du volume et du poids volumique.',
  },
  {
    id: 'viaduc-dilatation',
    title: 'Viaduc de 2 460 m : où va la dilatation ?',
    steps: ['real_examples'],
    formula: ['\\Delta L = 12 \\times 10^{-6} \\times 2\\,460 \\times 60 = 1{,}77\\ \\text{m}'],
    h: 230,
    draw: () => (
      <g>
        <Rect x={30} y={80} w={440} h={14} c="ink" sw={2} fill="~ink" />
        {[90, 160, 230, 270, 340, 410].map(x => <Rect key={x} x={x - 4} y={94} w={8} h={70} c="ink" sw={1.4} fill="~grey" />)}
        <Rect x={244} y={94} w={12} h={70} c="red" sw={1.8} fill="~red" />
        <Text x={250} y={182} a="middle" s={12} c="red" b>point fixe</Text>
        <Arrow x1={240} y1={60} x2={40} y2={60} c="red" w={2} hs={8} />
        <Arrow x1={260} y1={60} x2={460} y2={60} c="red" w={2} hs={8} />
        <Text x={140} y={52} a="middle" s={12} c="red" b>≈ 0,9 m</Text>
        <Text x={360} y={52} a="middle" s={12} c="red" b>≈ 0,9 m</Text>
        <Path d="M 470 80 l 8 0 l 0 4 l -8 0 m 0 3 l 8 0 l 0 4 l -8 0" c="ink" w={1.6} />
        <Text x={476} y={124} a="end" s={11}>{'joint à\npeigne'}</Text>
        <Text x={250} y={214} a="middle" s={12}>{'tablier acier, ΔT = 60 °C : la moitié de l’allongement de chaque côté'}</Text>
      </g>
    ),
    notes: ['Le tablier est bloqué vers son milieu : chaque culée reçoit un joint capable d’environ 0,9 m de déplacement, plus les marges de pose.'],
    caption: 'Sans joints dimensionnés pour ces mouvements, le tablier pousserait sur les culées.',
  },
];
