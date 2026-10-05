// Plates — Module 5 · DAO avec AutoCAD : coordonnées, calques, échelles, mise en page
import { Angle, Arrow, Box, Dim, Dot, Line, Plot, Poly, Rect, Text } from '../../components/figures/kit.jsx';

export default [
  {
    id: 'saisie-coordonnees',
    title: 'Absolu, relatif, polaire',
    steps: ['theory'],
    formula: ['\\Delta x = L\\cos\\theta \\qquad \\Delta y = L\\sin\\theta'],
    h: 310,
    draw: () => (
      <Plot x={50} y={30} w={400} h={230} xr={[0, 10]} yr={[0, 6]} xl="x" yl="y"
        xt={[2, 4, 6, 8].map(v => [v, String(v)])} yt={[2, 4].map(v => [v, String(v)])} grid
      >
        {(sx, sy) => {
          const B = [5, 2];
          const C = [B[0] + 3 * Math.cos(Math.PI / 4), B[1] + 3 * Math.sin(Math.PI / 4)];
          return (
            <g>
              <Arrow x1={sx(0)} y1={sy(0)} x2={sx(2)} y2={sy(1)} c="grey" w={1.4} dash="5 4" />
              <Dot x={sx(2)} y={sy(1)} r={5} c="ink" />
              <Text x={sx(2) - 4} y={sy(1) + 22} a="middle" s={14} c="ink">A (2 ; 1) absolu</Text>
              <Line x1={sx(2)} y1={sy(1)} x2={sx(5)} y2={sy(2)} c="ink" w={2.4} />
              <Line x1={sx(2)} y1={sy(1)} x2={sx(5)} y2={sy(1)} c="green" w={1.4} dash="4 4" />
              <Line x1={sx(5)} y1={sy(1)} x2={sx(5)} y2={sy(2)} c="green" w={1.4} dash="4 4" />
              <Dot x={sx(5)} y={sy(2)} r={5} c="ink" />
              <Text x={sx(5) + 8} y={sy(2) + 22} s={14} c="green">B : @3,1 (relatif)</Text>
              <Line x1={sx(B[0])} y1={sy(B[1])} x2={sx(C[0])} y2={sy(C[1])} c="red" w={2.4} />
              <Dot x={sx(C[0])} y={sy(C[1])} r={5} c="red" />
              <Line x1={sx(B[0])} y1={sy(B[1])} x2={sx(B[0] + 2)} y2={sy(B[1])} c="grey" w={1} dash="3 3" />
              <Angle cx={sx(B[0])} cy={sy(B[1])} r={30} a1={-45} a2={0} label="45°" s={12} />
              <Text x={sx(C[0]) + 8} y={sy(C[1]) - 6} s={14} c="red">C : @3&lt;45 (polaire)</Text>
            </g>
          );
        }}
      </Plot>
    ),
    notes: ['Le symbole @ signifie « depuis le dernier point » ; les angles se comptent depuis l’axe des x, sens trigonométrique.'],
    caption: 'Trois façons de saisir un point dans AutoCAD.',
  },
  {
    id: 'voile-polaire',
    title: 'Tracer un voile de 6,40 m à 30°',
    steps: ['stepbystep'],
    formula: ['(x, y) = (10 + 5{,}54 \\,;\\, 5 + 3{,}20) = (15{,}54 \\,;\\, 8{,}20)'],
    h: 300,
    draw: () => (
      <Plot x={50} y={30} w={400} h={220} xr={[8, 18]} yr={[3, 10]} xl="x (m)" yl="y (m)"
        xt={[10, 12, 14, 16].map(v => [v, String(v)])} yt={[5, 7, 9].map(v => [v, String(v)])} grid
      >
        {(sx, sy) => (
          <g>
            <Line x1={sx(10)} y1={sy(5)} x2={sx(15.54)} y2={sy(8.2)} c="grey" w={9} o={0.6} />
            <Line x1={sx(10)} y1={sy(5)} x2={sx(15.54)} y2={sy(5)} c="green" w={1.6} dash="5 4" />
            <Line x1={sx(15.54)} y1={sy(5)} x2={sx(15.54)} y2={sy(8.2)} c="green" w={1.6} dash="5 4" />
            <Dot x={sx(10)} y={sy(5)} r={5} c="ink" />
            <Dot x={sx(15.54)} y={sy(8.2)} r={5} c="red" />
            <Angle cx={sx(10)} cy={sy(5)} r={50} a1={-24.3} a2={0} label="30°" s={13} />
            <Text x={sx(10) - 8} y={sy(5) + 22} a="middle" s={14}>(10 ; 5)</Text>
            <Text x={sx(15.54)} y={sy(8.2) - 12} a="middle" s={14} c="red">(15,54 ; 8,20)</Text>
            <Text x={sx(12.8)} y={sy(5) + 20} a="middle" s={13} c="green">Δx = 5,54</Text>
            <Text x={sx(15.54) + 8} y={sy(6.6)} s={13} c="green">Δy = 3,20</Text>
            <Text x={sx(11)} y={sy(9)} s={14} c="ink">saisie : @6.40&lt;30</Text>
          </g>
        )}
      </Plot>
    ),
    notes: ['L’angle est affiché déformé ici car les axes n’ont pas la même échelle : sur le plan, il vaut bien 30°.'],
    caption: 'Le voile est dessiné en vraie grandeur dans l’espace objet, en mètres.',
  },
  {
    id: 'espace-objet-papier',
    title: 'Espace objet et espace papier',
    steps: ['formulas'],
    formula: ['h_{objet} = h_{papier} \\times 50 = 2{,}5 \\times 50 = 125\\ \\text{mm}'],
    h: 270,
    draw: () => (
      <g>
        <Rect x={20} y={40} w={200} h={180} c="ink" sw={2} fill="~ink" />
        <Text x={120} y={30} a="middle" s={15} b c="ink">espace objet (1:1)</Text>
        <Rect x={50} y={80} w={140} h={90} c="txt" sw={3} />
        <Text x={120} y={130} a="middle" s={13}>dalle 7,00 × 4,50 m</Text>
        <Text x={60} y={200} s={12} c="mute">texte : 0,125 m de haut</Text>
        <Rect x={270} y={40} w={210} h={180} c="txt" sw={2} />
        <Text x={375} y={30} a="middle" s={15} b c="ink">présentation A1</Text>
        <Rect x={290} y={60} w={120} h={90} c="red" sw={1.8} dash="6 4" />
        <Rect x={303} y={78} w={94} h={60} c="txt" sw={2} />
        <Text x={350} y={164} a="middle" s={12} c="red">fenêtre à l’échelle 1/50</Text>
        <Rect x={400} y={180} w={74} h={34} c="txt" sw={1.4} />
        <Text x={437} y={201} a="middle" s={11}>cartouche</Text>
        <Arrow x1={222} y1={125} x2={286} y2={105} c="red" w={2} />
      </g>
    ),
    caption: 'On dessine en vraie grandeur, puis on cadre une fenêtre à l’échelle sur la feuille.',
  },
  {
    id: 'xref-calques',
    title: 'Fonds de plan en XREF',
    steps: ['real_examples'],
    h: 270,
    draw: () => {
      const layer = (dy, c, lab) => (
        <g>
          <Poly pts={[[120, 200 - dy], [330, 200 - dy], [400, 150 - dy], [190, 150 - dy]]} c={c} w={2} fill={`~${c}`} />
          <Text x={410} y={176 - dy} s={14} c={c}>{lab}</Text>
        </g>
      );
      return (
        <g>
          {layer(0, 'grey', 'architecte (XREF)')}
          {layer(55, 'red', 'structure')}
          {layer(110, 'water', 'fluides')}
          <Line x1={155} y1={180} x2={155} y2={60} c="txt" w={1} dash="3 4" />
          <Dot x={155} y={180} r={4} c="txt" />
          <Text x={60} y={190} s={13}>origine (0,0,0)</Text>
          <Text x={250} y={250} a="middle" s={13} c="mute">chaque mise à jour du fond se propage à tous les plans</Text>
        </g>
      );
    },
    caption: 'Projet de 120 logements : chaque intervenant dessine sur ses calques, au-dessus du même fond.',
  },
  {
    id: 'feuille-trois-echelles',
    title: 'Une feuille A1 à trois échelles',
    steps: ['practical_case'],
    h: 280,
    draw: () => (
      <g>
        <Rect x={20} y={20} w={460} h={240} c="txt" sw={2} />
        {[[40, 40, 210, 150, 'plan au 1/100', 'texte 25 cm'], [270, 40, 190, 110, 'coupe au 1/50', 'texte 12,5 cm'], [270, 165, 110, 80, 'détail 1/10', 'texte 2,5 cm']].map(([x, y, w, h, lab, t]) => (
          <g key={lab}>
            <Rect x={x} y={y} w={w} h={h} c="ink" sw={1.8} dash="6 4" fill="~ink" />
            <Text x={x + w / 2} y={y + h / 2} a="middle" s={14} b c="ink">{lab}</Text>
            <Text x={x + w / 2} y={y + h / 2 + 20} a="middle" s={12} c="red">{t}</Text>
          </g>
        ))}
        <Box x={392} y={200} w={80} h={52} label="cartouche" s={12} c="txt" fill="none" />
        <Text x={140} y={220} a="middle" s={13} c="mute">tous imprimés à 2,5 mm</Text>
      </g>
    ),
    notes: ['Sans objets annotatifs, il faut trois hauteurs de texte dans le modèle ; avec, une seule suffit.'],
    caption: 'Projet dessiné en centimètres, mis en page sur un format A1.',
  },
];
