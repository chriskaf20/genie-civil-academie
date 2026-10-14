// Plates — Module 5 · BIM management, CDE ISO 19650, BCF & 4D/5D
import { Arrow, Box, Circle, Line, Path, Rect, Text, Bars, Grid } from '../../components/figures/kit.jsx';
import { Poly } from '../../components/figures/kit.jsx';

export default [
  {
    id: 'cde-iso19650',
    title: 'Les états du CDE (ISO 19650)',
    steps: ['theory', 'diagrams'],
    h: 270,
    draw: () => {
      const st = [
        ['WIP', 'en cours\n(chaque équipe)', 'orange'],
        ['SHARED', 'partagé\npour synthèse', 'ink'],
        ['PUBLISHED', 'publié\nbon pour exécution', 'green'],
        ['ARCHIVED', 'archivé\n(historique)', 'grey'],
      ];
      return (
        <g>
          {st.map(([name, txt, c], i) => (
            <g key={name}>
              <Box x={14 + i * 122} y={70} w={104} h={90} label={`${name}\n\n${txt}`} s={13} c={c} fill={`~${c}`} />
              {i < 3 && <Arrow x1={120 + i * 122} y1={115} x2={134 + i * 122} y2={115} c="txt" w={2} />}
            </g>
          ))}
          <Text x={128} y={60} a="middle" s={12} c="mute">contrôle</Text>
          <Text x={250} y={60} a="middle" s={12} c="mute">approbation</Text>
          <Path d="M188,170 C188,220 66,220 66,170" c="red" w={1.8} dash="6 4" />
          <Arrow x1={70} y1={180} x2={66} y2={166} c="red" w={1.8} hs={7} />
          <Text x={128} y={232} a="middle" s={13} c="red">BCF : retour pour correction</Text>
        </g>
      );
    },
    notes: ['Une maquette ne sert de référence qu’au statut PUBLISHED : on ne construit jamais d’après un WIP.'],
    caption: 'Circulation des maquettes IFC dans l’environnement commun de données.',
  },
  {
    id: 'dimensions-bim',
    title: 'Les dimensions du BIM : de la 3D à la 7D',
    steps: ['formulas', 'diagrams'],
    formula: ['\\text{LOIN} = \\text{LOG} + \\text{LOI}'],
    h: 242,
    draw: () => (
      <Grid x={10} y={20} rh={36} colW={[70, 170, 240]} s={13} cells={[
        ['Dim.', 'Contenu', 'Usage'],
        ['3D', 'géométrie', 'synthèse, plans, clashs'],
        ['4D', '+ planning', 'phasage, approvisionnements'],
        ['5D', '+ coûts, métrés', 'devis, situations'],
        ['6D', '+ environnement', 'ACV, carbone'],
        ['7D', '+ exploitation', 'maintenance (GEM)'],
      ]} />
    ),
    caption: 'Chaque dimension ajoute une information liée aux mêmes objets.',
  },
  {
    id: 'entonnoir-clashs',
    title: 'Du clash brut au clash résolu',
    steps: ['stepbystep'],
    formula: ['CRR = \\frac{N_{résolus}}{N_{total}} \\times 100'],
    h: 260,
    draw: () => (
      <g>
        <Bars x={60} y={40} w={400} h={160} max={135} ticks={[40, 80, 120]} bars={[
          { label: 'détectés', v: 120, c: 'grey' },
          { label: 'après filtrage', v: 35, c: 'orange' },
          { label: 'tickets BCF', v: 35, c: 'ink' },
          { label: 'résolus', v: 35, c: 'green', txt: '35 ✔' },
        ]} />
        <Text x={260} y={248} a="middle" s={13} c="mute">tolérance 20 mm : les faux positifs sont éliminés avant d’émettre les tickets</Text>
      </g>
    ),
    caption: 'Revue de synthèse STR / CVC d’un immeuble de bureaux de 10 000 m².',
  },
  {
    id: 'taux-resolution',
    title: 'Taux de résolution des clashs',
    steps: ['simple_examples'],
    formula: ['CRR = \\frac{72}{80} = 90\\ \\%'],
    h: 230,
    draw: () => {
      const cx = 160;
      const cy = 115;
      const r = 80;
      const a = 2 * Math.PI * 0.9;
      const x = cx + r * Math.sin(a);
      const y = cy - r * Math.cos(a);
      return (
        <g>
          <Circle cx={cx} cy={cy} r={r} c="red" sw={22} o={0.5} />
          <Path d={`M${cx},${cy - r} A${r},${r} 0 1 1 ${x},${y}`} c="green" w={22} />
          <Text x={cx} y={cy + 10} a="middle" s={28} b c="green">90 %</Text>
          <Rect x={300} y={70} w={18} h={18} c="green" sw={0} fill="green" />
          <Text x={326} y={84} s={14}>72 résolus</Text>
          <Rect x={300} y={110} w={18} h={18} c="red" sw={0} fill="~red" />
          <Text x={326} y={124} s={14}>8 à solder avant visa</Text>
        </g>
      );
    },
    caption: '80 clashs identifiés en APD, 72 résolus en PRO/EXE.',
  },
  {
    id: 'psets-ifc',
    title: 'Un objet IFC et ses Property Sets',
    steps: ['theory'],
    h: 240,
    draw: () => (
      <g>
        <Poly pts={[[40, 180], [160, 180], [190, 150], [70, 150]]} c="ink" w={1.8} fill="~grey" close />
        <Poly pts={[[40, 180], [160, 180], [160, 60], [40, 60]]} c="ink" w={1.8} fill="pat:hatch" close />
        <Poly pts={[[160, 180], [190, 150], [190, 30], [160, 60]]} c="ink" w={1.8} fill="~grey" close />
        <Text x={110} y={206} a="middle" s={13} b>IfcWall</Text>
        <Rect x={230} y={30} w={250} h={190} rx={8} c="ink" sw={1.6} fill="paper" />
        <Text x={244} y={54} s={12} b>GUID : 3cUkl32yn9qRSPvBJVyWYp</Text>
        <Text x={244} y={86} s={12} c="water" b>{'Pset\\_WallCommon'}</Text>
        <Text x={256} y={106} s={11}>LoadBearing = TRUE</Text>
        <Text x={256} y={124} s={11}>IsExternal = FALSE</Text>
        <Text x={244} y={156} s={12} c="water" b>{'Pset\\_Concrete'}</Text>
        <Text x={256} y={176} s={11}>CompressiveStrength = C30/37</Text>
        <Text x={256} y={196} s={11}>Épaisseur = 0,20 m</Text>
        <Line x1={192} y1={110} x2={228} y2={110} c="ink" w={1} dash="3 3" />
      </g>
    ),
    notes: ['La géométrie ne suffit pas : ce sont les propriétés normalisées qui rendent la maquette exploitable par les autres logiciels.'],
    caption: 'Voile porteur décrit par son identifiant et ses jeux de propriétés.',
  },
  {
    id: 'loin-log-loi',
    title: 'LOIN = géométrie + information',
    steps: ['formulas'],
    formula: ['\\text{LOIN} = \\text{LOG} + \\text{LOI}'],
    h: 250,
    draw: () => (
      <g>
        <Arrow x1={60} y1={210} x2={460} y2={210} c="ink" w={1.6} hs={8} />
        <Arrow x1={60} y1={210} x2={60} y2={20} c="ink" w={1.6} hs={8} />
        <Text x={460} y={230} a="end" s={12} b>LOG : précision géométrique</Text>
        <Text x={70} y={30} s={12} b>LOI : informations</Text>
        {[[110, 170, 'esquisse'], [220, 130, 'APD'], [330, 90, 'PRO'], [420, 50, 'EXE']].map(([x, y, t]) => (
          <g key={t}>
            <Rect x={x - 30} y={y - 16} w={60} h={32} rx={6} c="water" sw={1.6} fill="~water" />
            <Text x={x} y={y + 5} a="middle" s={12} b>{t}</Text>
          </g>
        ))}
        <Text x={260} y={190} a="middle" s={11} c="mute">un objet peut être simple en géométrie mais riche en informations (et inversement)</Text>
      </g>
    ),
    notes: ['Le niveau d’information nécessaire se définit par usage : ce dont le destinataire a besoin, ni plus, ni moins.'],
    caption: 'Deux axes indépendants du besoin d’information.',
  },
  {
    id: 'mapping-ifc',
    title: 'Correspondance des objets gros œuvre et des entités IFC',
    steps: ['simple_examples'],
    h: 230,
    draw: () => (
      <g>
        {[['voile', 'IfcWall'], ['dalle', 'IfcSlab'], ['poteau', 'IfcColumn'], ['poutre', 'IfcBeam'], ['semelle', 'IfcFooting']].map(([a, b], i) => (
          <g key={a}>
            <Rect x={60} y={20 + i * 40} w={120} h={30} rx={6} c="ink" sw={1.4} fill="~grey" />
            <Text x={120} y={40 + i * 40} a="middle" s={12} b>{a}</Text>
            <Arrow x1={182} y1={35 + i * 40} x2={278} y2={35 + i * 40} c="water" w={1.6} hs={7} />
            <Rect x={280} y={20 + i * 40} w={150} h={30} rx={6} c="water" sw={1.4} fill="~water" />
            <Text x={355} y={40 + i * 40} a="middle" s={12} b>{b}</Text>
          </g>
        ))}
      </g>
    ),
    notes: ['Exporter un voile en « objet générique » le rend invisible aux contrôles et aux quantités : la classe IFC doit être juste.'],
    caption: 'Le mappage IFC universel de buildingSMART.',
  },
  {
    id: 'lod300-400',
    title: 'Poutre en LOD 300 et en LOD 400',
    steps: ['simple_examples'],
    h: 220,
    draw: () => (
      <g>
        {[[40, 'LOD 300 : géométrie exacte'], [270, 'LOD 400 : + armatures 3D']].map(([x, t], k) => (
          <g key={t}>
            <Rect x={x} y={60} w={190} h={80} c="ink" sw={2} fill="~grey" />
            {k === 1 && (
              <g>
                {[74, 126].map(y => <Line key={y} x1={x + 8} y1={y} x2={x + 182} y2={y} c="red" w={2.6} />)}
                {Array.from({ length: 9 }, (_, i) => <Rect key={i} x={x + 14 + i * 20} y={68} w={4} h={64} c="red" sw={1.2} />)}
              </g>
            )}
            <Text x={x + 95} y={168} a="middle" s={12} b>{t}</Text>
          </g>
        ))}
      </g>
    ),
    notes: ['Le LOD 400 porte le ferraillage d’exécution, prêt pour le façonnage en usine.'],
    caption: 'Même poutre, deux niveaux de développement.',
  },
  {
    id: 'gares-cde',
    title: '16 gares et 33 km de tunnels sur un CDE',
    steps: ['real_examples'],
    h: 230,
    draw: () => (
      <g>
        <Rect x={190} y={80} w={120} h={60} rx={10} c="water" sw={2} fill="~water" />
        <Text x={250} y={106} a="middle" s={13} b>CDE</Text>
        <Text x={250} y={126} a="middle" s={11}>4 000 maquettes IFC</Text>
        {[['4D : approvisionnements', 40, 40], ['5D : décomptes', 40, 160], ['synthèse bimensuelle', 340, 40], ['12 000 interférences', 340, 160]].map(([t, x, y]) => (
          <g key={t}>
            <Rect x={x} y={y} w={140} h={36} rx={6} c="ink" sw={1.4} fill="~grey" />
            <Text x={x + 70} y={y + 23} a="middle" s={11}>{t}</Text>
            <Line x1={x < 200 ? x + 140 : x} y1={y + 18} x2={x < 200 ? 190 : 310} y2={110} c="ink" w={1.2} />
          </g>
        ))}
        <Text x={250} y={222} a="middle" s={12} c="green" b>−85 % de clashs sur chantier</Text>
      </g>
    ),
    notes: ['Le BIM management organise les échanges : sans plateforme commune ni rythme de synthèse, la maquette ne réduit pas les conflits.'],
    caption: 'Coordination openBIM d’un grand projet de transport urbain.',
  },
  {
    id: 'synthese-gare',
    title: 'Revue de synthèse d’une gare de 15 000 m²',
    steps: ['practical_case'],
    h: 230,
    draw: () => (
      <Bars x={80} y={30} w={330} h={160} max={220} ticks={[50, 100, 150, 200]} unit="clashs" bars={[
        { label: 'détectés', v: 200, c: 'grey' },
        { label: 'majeurs', v: 18, c: 'red' },
        { label: 'résolus en 48 h', v: 18, c: 'green' },
      ]} />
    ),
    notes: ['4 maquettes IFC sous Solibri ; les 18 réservations de gaines en poutres sont attribuées par BCF au BET structure et au BET CVC.'],
    caption: 'Filtrer d’abord les conflits qui comptent, puis les traiter vite.',
  },
];
