// Plates — Module 5 · DAO avec AutoCAD : coordonnées, calques, échelles, mise en page
import { Angle, Arrow, Box, Dim, Dot, Line, Plot, Poly, Rect, Text } from '../../components/figures/kit.jsx';
import { Bars, Circle, Path } from '../../components/figures/kit.jsx';

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
      <Plot x={50} y={30} w={390} h={220} xr={[8, 18]} yr={[3, 10]} xl="x" yl="y (m)"
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
          <Text x={406} y={176 - dy} s={12} c={c}>{lab.replace(' (', '\n(')}</Text>
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
  {
    id: 'calques-convention',
    title: 'Calques : couleur, type de ligne, épaisseur',
    steps: ['theory'],
    h: 240,
    draw: () => (
      <g>
        <Rect x={20} y={30} w={460} h={30} c="ink" sw={1.4} fill="~grey" />
        {[['calque', 30], ['visible', 160], ['gel', 220], ['verrou', 270], ['couleur', 330], ['type', 390]].map(([t, x]) => <Text key={t} x={x} y={50} s={12} b>{t}</Text>)}
        {[['S-POTEAU', 'ink', 'continu'], ['A-MUR', 'red', 'continu'], ['F-GAINE', 'water', 'interrompu'], ['S-AXES', 'green', 'mixte']].map(([n, c, t], i) => (
          <g key={n}>
            <Rect x={20} y={60 + i * 34} w={460} h={34} c="grey" sw={0.8} fill="paper" />
            <Text x={30} y={82 + i * 34} s={12} b>{n}</Text>
            <Circle cx={172} cy={77 + i * 34} r={6} c="green" sw={1.4} fill={i === 2 ? 'paper' : '~green'} />
            <Text x={226} y={82 + i * 34} s={12}>{i === 3 ? '❄' : '·'}</Text>
            <Rect x={272} y={70 + i * 34} w={12} h={12} rx={2} c="ink" sw={1.2} fill={i === 0 ? '~grey' : 'paper'} />
            <Rect x={330} y={70 + i * 34} w={30} h={12} c={c} sw={0} fill={c} />
            <Line x1={390} y1={77 + i * 34} x2={470} y2={77 + i * 34} c={c} w={2} dash={t === 'interrompu' ? '6 4' : t === 'mixte' ? '14 4 2 4' : undefined} />
          </g>
        ))}
        <Text x={250} y={222} a="middle" s={12} c="mute">préfixe par lot (S structure, A architecture, F fluides) : échanges et filtres simples</Text>
      </g>
    ),
    notes: ['Geler ou masquer un calque permet d’isoler un lot ; une convention de nommage commune est indispensable dès qu’on échange des DWG.'],
    caption: 'Le gestionnaire de calques d’un plan de structure.',
  },
  {
    id: 'blocs-xref',
    title: 'Blocs, attributs et références externes',
    steps: ['theory'],
    h: 240,
    draw: () => (
      <g>
        <Text x={120} y={26} a="middle" s={12} b>bloc « porte » avec attribut</Text>
        {[30, 110, 190].map((x, i) => (
          <g key={x}>
            <Line x1={x} y1={120} x2={x + 50} y2={120} c="ink" w={2.4} />
            <Path d={`M ${x} 120 A 50 50 0 0 1 ${x + 50} 70`} c="ink" w={1.2} dash="4 3" />
            <Line x1={x} y1={120} x2={x} y2={70} c="ink" w={2} />
            <Text x={x + 25} y={144} a="middle" s={12} c="red" b>{`P0${i + 1}`}</Text>
          </g>
        ))}
        <Text x={120} y={176} a="middle" s={11} c="mute">une définition, plusieurs insertions</Text>
        <Rect x={290} y={40} w={180} h={130} c="ink" sw={1.6} fill="~grey" />
        <Rect x={300} y={50} w={160} h={110} c="water" sw={1.6} dash="6 4" />
        <Text x={380} y={110} a="middle" s={12} c="water" b>{'XREF architecte\n(fond de plan)'}</Text>
        <Text x={380} y={196} a="middle" s={11} c="mute">{'fichier lié : mis à jour\nà chaque ouverture'}</Text>
      </g>
    ),
    notes: ['Un bloc modifié une fois se met à jour partout ; une XREF reste un fichier séparé, que son auteur fait évoluer.'],
    caption: 'Réutiliser des objets et partager des fonds de plan.',
  },
  {
    id: 'echelle-annotation',
    title: 'Hauteur de texte selon l’échelle d’impression',
    steps: ['formulas', 'simple_examples'],
    formula: ['h_{objet} = \\frac{h_p}{E} = 3\\ \\text{mm} \\times 200 = 60\\ \\text{cm}'],
    h: 230,
    draw: () => (
      <g>
        {[[70, 1, '1/50', '15 cm'], [220, 2, '1/100', '30 cm'], [380, 4, '1/200', '60 cm']].map(([x, k, e, h], i) => (
          <g key={e}>
            <Rect x={x - 50} y={40} w={100} h={110} c="ink" sw={1.2} fill="paper" />
            <Text x={x} y={100} a="middle" s={9 + 4 * k} b c={i === 2 ? 'red' : 'ink'}>A</Text>
            <Text x={x} y={170} a="middle" s={12} b>{e}</Text>
            <Text x={x} y={190} a="middle" s={12} c={i === 2 ? 'red' : 'mute'}>{`texte modèle : ${h}`}</Text>
          </g>
        ))}
        <Text x={250} y={220} a="middle" s={11} c="mute">même texte de 3 mm sur le papier, dessin en centimètres</Text>
      </g>
    ),
    notes: ['Plus l’échelle est petite (1/200), plus le texte doit être grand dans l’espace objet pour sortir à 3 mm sur le papier.'],
    caption: 'Les objets annotatifs font ce calcul pour chaque échelle de fenêtre.',
  },
  {
    id: 'saisie-polaire-135',
    title: 'Saisie polaire : @4.00<135',
    steps: ['simple_examples'],
    formula: ['x = 4{,}00\\cos 135° = -2{,}83 \\qquad y = 4{,}00\\sin 135° = 2{,}83'],
    h: 240,
    draw: () => (
      <g>
        <Arrow x1={250} y1={190} x2={460} y2={190} c="txt" w={1.4} hs={7} />
        <Arrow x1={250} y1={190} x2={250} y2={20} c="txt" w={1.4} hs={7} />
        <Line x1={40} y1={190} x2={250} y2={190} c="grey" w={1} />
        <Line x1={250} y1={190} x2={137} y2={77} c="red" w={3} />
        <Dot x={137} y={77} r={5} c="red" />
        <Path d="M 290 190 A 40 40 0 0 0 222 162" c="red" w={1.6} />
        <Text x={296} y={160} s={13} c="red" b>135°</Text>
        <Text x={130} y={66} a="end" s={13} b>(−2,83 ; 2,83)</Text>
        <Line x1={137} y1={77} x2={137} y2={190} c="grey" w={1} dash="4 3" />
        <Text x={190} y={120} s={13} c="red" b rot={-45}>L = 4,00</Text>
        <Text x={256} y={206} s={12}>origine (0 ; 0)</Text>
      </g>
    ),
    notes: ['L’angle se mesure depuis l’axe des x, dans le sens trigonométrique : 135° pointe vers le haut et la gauche.'],
    caption: 'Un segment saisi par sa longueur et son angle.',
  },
  {
    id: 'distance-lambert',
    title: 'Distance entre deux points en Lambert 93',
    steps: ['formulas', 'simple_examples'],
    formula: ['d = \\sqrt{32{,}60^2 + 22{,}70^2} = 39{,}72\\ \\text{m} \\qquad \\theta = \\arctan\\frac{22{,}70}{32{,}60} = 34{,}8°'],
    h: 250,
    draw: () => (
      <g>
        <Dot x={80} y={190} r={6} />
        <Dot x={400} y={70} r={6} c="red" />
        <Line x1={80} y1={190} x2={400} y2={70} c="red" w={2.6} />
        <Line x1={80} y1={190} x2={400} y2={190} c="grey" w={1.2} dash="5 4" />
        <Line x1={400} y1={190} x2={400} y2={70} c="grey" w={1.2} dash="5 4" />
        <Text x={240} y={212} a="middle" s={13}>ΔX = 32,60 m</Text>
        <Text x={408} y={134} s={13}>ΔY = 22,70</Text>
        <Text x={230} y={118} a="middle" s={13} c="red" b rot={-20.6}>AB = 39,72 m</Text>
        <Text x={60} y={234} s={11}>A (652 340,25 ; 6 862 118,40)</Text>
        <Text x={480} y={56} a="end" s={11}>B (652 372,85 ; 6 862 141,10)</Text>
      </g>
    ),
    notes: ['Dessiner dans les coordonnées réelles (Lambert 93) permet de superposer directement les levés topographiques et les plans.'],
    caption: 'Pythagore sur les écarts de coordonnées.',
  },
  {
    id: 'flux-dao',
    title: 'Flux de travail DAO',
    steps: ['diagrams'],
    h: 260,
    draw: () => (
      <g>
        {[['gabarit', 'unités, calques, styles'], ['XREF', 'fonds de plan'], ['espace objet', 'dessin en vraie grandeur'], ['blocs', 'éléments répétés'], ['présentations', 'fenêtres à l’échelle'], ['PDF indicé', 'style de tracé']].map(([t, d], i) => {
          const x = 20 + (i % 3) * 160;
          const y = 30 + Math.floor(i / 3) * 110;
          return (
            <g key={t}>
              <Rect x={x} y={y} w={140} h={70} rx={8} c={i === 5 ? 'green' : 'ink'} sw={1.8} fill={i === 5 ? '~green' : '~grey'} />
              <Text x={x + 70} y={y + 30} a="middle" s={13} b>{t}</Text>
              <Text x={x + 70} y={y + 50} a="middle" s={11}>{d}</Text>
              {i % 3 < 2 && <Arrow x1={x + 142} y1={y + 35} x2={x + 158} y2={y + 35} c="ink" w={1.6} hs={6} />}
            </g>
          );
        })}
        <Path d="M 410 102 Q 410 124 250 124 Q 90 124 90 138" c="ink" w={1.6} />
        <Arrow x1={90} y1={132} x2={90} y2={139} c="ink" w={1.6} hs={6} />
      </g>
    ),
    notes: ['Chaque étape prépare la suivante : un bon gabarit évite de réparer des centaines de plans à la fin du projet.'],
    caption: 'Du gabarit au plan diffusé.',
  },
];
