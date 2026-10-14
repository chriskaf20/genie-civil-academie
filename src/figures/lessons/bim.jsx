// Plates — Module 5 · BIM, CAO, interopérabilité IFC & modélisation 3D
import { Arrow, Box, Circle, Line, Path, Poly, Rect, Text } from '../../components/figures/ink.jsx';
import { Bars } from '../../components/figures/kit.jsx';

/** Simple isometric box with its three visible faces. */
function Iso({ x, y, w, d = 20, h, c = 'ink', fill = '~ink' }) {
  const dx = d * 0.87;
  const dy = d * 0.5;
  return (
    <g>
      <Poly pts={[[x, y], [x + w, y], [x + w, y - h], [x, y - h]]} c={c} w={1.8} fill={fill} />
      <Poly pts={[[x, y - h], [x + w, y - h], [x + w + dx, y - h - dy], [x + dx, y - h - dy]]} c={c} w={1.8} fill={fill} />
      <Poly pts={[[x + w, y], [x + w + dx, y - dy], [x + w + dx, y - h - dy], [x + w, y - h]]} c={c} w={1.8} fill={fill} />
    </g>
  );
}

export default [
  {
    id: 'arborescence-ifc',
    title: 'L’arborescence d’un fichier IFC',
    steps: ['theory'],
    formula: ['\\text{IfcProject} \\rightarrow \\text{IfcSite} \\rightarrow \\text{IfcBuilding} \\rightarrow \\text{IfcBuildingStorey}'],
    h: 330,
    draw: () => {
      const chain = [['IfcProject', 20], ['IfcSite', 75], ['IfcBuilding', 130], ['IfcBuildingStorey\n« R+1 »', 185]];
      const leaves = ['IfcWall', 'IfcSlab', 'IfcBeam', 'IfcColumn', 'IfcRebar'];
      return (
        <g>
          {chain.map(([lab, y], i) => (
            <g key={lab}>
              <Box x={30 + i * 26} y={y} w={170} h={i === 3 ? 48 : 36} label={lab} s={13} c="ink" />
              {i < 3 && <Path d={`M${45 + i * 26},${y + 36} V${y + 55 + 18} H${56 + (i + 1) * 26}`} c="ink" w={1.6} />}
            </g>
          ))}
          {leaves.map((lab, i) => (
            <g key={lab}>
              <Box x={300} y={20 + i * 58} w={150} h={40} label={lab} s={14} c="green" fill="~green" />
              <Path d={`M290,${40 + i * 58} H300`} c="green" w={1.6} />
            </g>
          ))}
          <Path d="M278,209 H290 M290,40 V272" c="green" w={1.6} />
          <Text x={115} y={285} a="middle" s={13} c="mute">{'chaque objet porte des propriétés\n(Pset\\_WallCommon, résistance C30/37…)'}</Text>
        </g>
      );
    },
    notes: ['L’IFC est un format ouvert (ISO 16739) : chaque logiciel l’exporte et le relit, sans dépendre d’un éditeur.'],
    caption: 'Structure spatiale d’une maquette IFC et objets du gros œuvre rattachés à un niveau.',
  },
  {
    id: 'lod-poteau',
    title: 'Un poteau de LOD 100 à LOD 500',
    steps: ['simple_examples'],
    h: 270,
    draw: () => {
      const cols = [
        ['LOD 100', 'volume\nconceptuel'],
        ['LOD 200', 'objet générique\ndimensions approchées'],
        ['LOD 300', 'géométrie\nexacte'],
        ['LOD 400', 'ferraillage\nde fabrication'],
        ['LOD 500', 'tel que\nconstruit'],
      ];
      return (
        <g>
          {cols.map(([lod, txt], i) => {
            const x = 30 + i * 95;
            return (
              <g key={lod}>
                <Text x={x + 25} y={24} a="middle" s={15} b c="ink">{lod}</Text>
                {i === 0 && <Rect x={x} y={60} w={50} h={140} c="grey" sw={1.6} fill="~grey" dash="6 4" />}
                {i > 0 && <Iso x={x} y={200} w={34} h={140} c={i === 4 ? 'green' : 'ink'} fill={i === 4 ? '~green' : '~ink'} />}
                {i >= 3 && [x + 7, x + 27].map(bx => <Line key={bx} x1={bx} y1={66} x2={bx} y2={196} c="red" w={2} />)}
                {i >= 3 && Array.from({ length: 8 }, (_, k) => <Line key={k} x1={x + 4} y1={80 + k * 15} x2={x + 30} y2={80 + k * 15} c="red" w={1} />)}
                {i === 2 && <Text x={x + 17} y={130} a="middle" s={11} c="ink" rot={-90}>40 × 40</Text>}
                {i === 4 && <Circle cx={x + 50} cy={70} r={9} c="green" sw={2} fill="paper" />}
                {i === 4 && <Path d={`M${x + 45},70 l4,4 l7,-8`} c="green" w={2} />}
                <Text x={x + 25} y={228} a="middle" s={12} c="mute">{txt}</Text>
              </g>
            );
          })}
        </g>
      );
    },
    notes: ['Le LOD augmente avec les phases : esquisse (100), APD (200), PRO/EXE (300), fabrication (400), DOE (500).'],
    caption: 'Le même poteau gagne en précision géométrique et en information au fil du projet.',
  },
  {
    id: 'quantitatifs-r1',
    title: 'Quantitatifs extraits de la maquette',
    steps: ['stepbystep'],
    formula: ['V = 96 + 54 = 150\\ \\text{m}^3', 'M_{acier} = 8\\,160 + 4\\,050 = 12\\,210\\ \\text{kg}'],
    h: 260,
    draw: () => (
      <g>
        <Bars x={50} y={40} w={180} h={150} max={110} unit="béton (m³)" bars={[
          { label: '12 dalles', v: 96, c: 'grey' },
          { label: '18 voiles', v: 54, c: 'ink' },
        ]} />
        <Bars x={290} y={40} w={180} h={150} max={9500} unit="acier (kg)" bars={[
          { label: '85 kg/m³', v: 8160, c: 'red', txt: '8 160' },
          { label: '75 kg/m³', v: 4050, c: 'orange', txt: '4 050' },
        ]} />
        <Text x={250} y={244} a="middle" s={14}>coût : 150 m³ × 140 € + 12 210 kg × 1,80 € = 42 978 €</Text>
      </g>
    ),
    caption: 'Niveau R+1 : les volumes sont lus directement dans les propriétés des objets IFC.',
  },
  {
    id: 'clash-bcf',
    title: 'Détection d’un conflit et ticket BCF',
    steps: ['diagrams'],
    h: 290,
    draw: () => (
      <g>
        <Iso x={40} y={170} w={260} d={60} h={60} c="grey" fill="~grey" />
        <Text x={60} y={160} s={14} c="mute">poutre BA 40 × 60 (STR)</Text>
        <Path d="M150,60 L150,250" c="water" w={22} o={0.35} />
        <Line x1={139} y1={60} x2={139} y2={250} c="water" w={2} />
        <Line x1={161} y1={60} x2={161} y2={250} c="water" w={2} />
        <Text x={170} y={66} s={14} c="water">EP Ø 200 (MEP)</Text>
        <Circle cx={150} cy={140} r={44} c="red" sw={2.6} dash="6 4" />
        <Text x={198} y={214} s={14} c="red" b>clash : 150 mm</Text>
        <Rect x={330} y={50} w={150} h={150} rx={8} c="orange" sw={2} fill="~orange" />
        <Text x={405} y={74} a="middle" s={14} b c="orange">BCF-042</Text>
        <Rect x={346} y={84} w={118} h={56} c="orange" sw={1.2} />
        <Circle cx={405} cy={112} r={16} c="red" sw={1.6} dash="4 3" />
        <Text x={346} y={160} s={12}>{'attribué : BE structure\npriorité haute · 5 jours'}</Text>
        <Arrow x1={200} y1={110} x2={326} y2={110} c="orange" w={2} />
      </g>
    ),
    notes: ['Le fichier BCF transporte la vue 3D, la caméra et le commentaire, pas la maquette : il est léger et traçable.'],
    caption: 'Une canalisation traverse une poutre : le conflit est signalé au bureau d’études concerné.',
  },
  {
    id: 'boucle-synthese',
    title: 'La boucle hebdomadaire de synthèse',
    steps: ['practical_case'],
    h: 300,
    draw: () => {
      const nodes = [
        [250, 50, 'Archicad · Tekla · Revit\nexport IFC (vendredi)'],
        [420, 150, 'CDE\ndossier SHARED'],
        [250, 250, 'Solibri\nrègles de clash δ = 5 mm'],
        [80, 150, 'tickets BCF\ntraités sous 48 h'],
      ];
      return (
        <g>
          <Circle cx={250} cy={150} r={100} c="grey" sw={1.4} dash="6 6" />
          {nodes.map(([x, y, lab]) => <Box key={lab} x={x - 78} y={y - 26} w={156} h={52} label={lab} s={12.5} />)}
          <Arrow x1={330} y1={70} x2={392} y2={120} c="ink" w={2} />
          <Arrow x1={392} y1={180} x2={330} y2={230} c="ink" w={2} />
          <Arrow x1={170} y1={230} x2={108} y2={180} c="ink" w={2} />
          <Arrow x1={108} y1={120} x2={170} y2={70} c="ink" w={2} />
          <Text x={250} y={156} a="middle" s={14} c="green" b>650 clashs résolus</Text>
        </g>
      );
    },
    caption: 'Bureaux R+5 de 12 000 m² : 8 semaines de synthèse, aucun percement imprévu sur le chantier.',
  },
  {
    id: 'lod-phases',
    title: 'Niveaux de développement selon la phase',
    steps: ['theory'],
    h: 250,
    draw: () => (
      <g>
        {[['LOD 100', 'esquisse', 'masse'], ['LOD 200', 'APS / APD', 'objets génériques'], ['LOD 300', 'PRO / DCE', 'dimensions exactes'], ['LOD 400', 'EXE', 'détails, ferraillage'], ['LOD 500', 'DOE', 'tel que construit']].map(([l, p, d], i) => (
          <g key={l}>
            <Rect x={20 + i * 94} y={40} w={86} h={150} c="ink" sw={1.4} fill={`~${['grey', 'water', 'green', 'orange', 'red'][i]}`} />
            <Text x={63 + i * 94} y={62} a="middle" s={13} b>{l}</Text>
            <Text x={63 + i * 94} y={84} a="middle" s={11}>{p}</Text>
            <Rect x={43 + i * 94} y={100} w={40} h={50} c="ink" sw={1.6} fill={i === 0 ? '~grey' : 'paper'} rx={i === 0 ? 10 : 0} />
            {i >= 3 && [0, 1, 2].map(k => <Line key={k} x1={47 + i * 94 + k * 15} y1={104} x2={47 + i * 94 + k * 15} y2={146} c="red" w={1.4} />)}
            <Text x={63 + i * 94} y={176} a="middle" s={10}>{d}</Text>
          </g>
        ))}
        <Arrow x1={20} y1={214} x2={480} y2={214} c="ink" w={1.6} hs={8} />
        <Text x={250} y={236} a="middle" s={12} c="mute">la maquette s’enrichit en géométrie et en information</Text>
      </g>
    ),
    notes: ['La convention BIM fixe le LOD attendu à chaque phase : modéliser trop tôt trop finement coûte cher, trop tard empêche la synthèse.'],
    caption: 'De la masse conceptuelle au jumeau numérique de l’ouvrage exécuté.',
  },
  {
    id: 'bcf-ticket',
    title: 'Anatomie d’un ticket BCF',
    steps: ['theory'],
    h: 240,
    draw: () => (
      <g>
        <Rect x={30} y={30} w={440} h={190} rx={10} c="ink" sw={2} fill="paper" />
        <Rect x={46} y={46} w={180} h={120} c="ink" sw={1.4} fill="~grey" />
        <Rect x={70} y={100} w={130} h={22} c="grey" sw={1.4} fill="pat:hatch" />
        <Line x1={60} y1={110} x2={210} y2={110} c="water" w={6} />
        <Circle cx={136} cy={111} r={16} c="red" sw={2.2} />
        <Text x={136} y={186} a="middle" s={11} c="mute">capture + point de vue 3D</Text>
        {[['GUID', '2O2Fr$t4X7Zf8NOew3FLKI'], ['titre', 'gaine Ø200 dans poutre'], ['assigné à', 'BET structure'], ['statut', 'ouvert → résolu'], ['taille', 'quelques Ko']].map(([k, v], i) => (
          <g key={k}>
            <Text x={244} y={66 + i * 28} s={12} b>{k}</Text>
            <Text x={322} y={66 + i * 28} s={12} c={i === 3 ? 'red' : 'ink'}>{v}</Text>
          </g>
        ))}
      </g>
    ),
    notes: ['On échange le problème, pas la maquette : le ticket désigne l’objet par son GUID et replace la caméra au bon endroit.'],
    caption: 'Un fichier .bcfzip léger au lieu d’une maquette IFC de plusieurs centaines de Mo.',
  },
  {
    id: 'formules-5d',
    title: 'Quantités et coûts extraits de la maquette',
    steps: ['formulas'],
    formula: ['V_{beton} = \\sum V_{Slab} + \\sum V_{Wall} \\qquad C_{total} = \\sum Q_k \\times P_k'],
    h: 230,
    draw: () => (
      <g>
        {[['IfcSlab', '420 m³', '~grey'], ['IfcWall', '310 m³', '~grey'], ['IfcColumn', '45 m³', '~grey']].map(([t, v, f], i) => (
          <g key={t}>
            <Rect x={30} y={40 + i * 50} w={150} h={36} rx={6} c="ink" sw={1.6} fill={f} />
            <Text x={105} y={63 + i * 50} a="middle" s={12} b>{`${t} : ${v}`}</Text>
          </g>
        ))}
        <Arrow x1={190} y1={108} x2={250} y2={108} c="red" w={2.2} hs={9} />
        <Text x={360} y={80} a="middle" s={13} b>{'Q × P par poste'}</Text>
        <Text x={360} y={110} a="middle" s={12}>{'775 m³ × prix unitaire'}</Text>
        <Text x={360} y={140} a="middle" s={13} c="red" b>coût 5D</Text>
        <Text x={250} y={214} a="middle" s={11} c="mute">quantités d’exemple ; les volumes sont recalculés à chaque mise à jour</Text>
      </g>
    ),
    notes: ['La maquette donne des quantités cohérentes avec la géométrie ; le ratio d’acier et le coût en découlent directement.'],
    caption: 'Du modèle aux métrés et au budget.',
  },
  {
    id: 'gain-metre',
    title: 'Métré manuel ou extraction BIM',
    steps: ['simple_examples'],
    formula: ['\\text{gain} = \\frac{40 - 6}{40} \\times 100 = 85\\ \\%'],
    h: 220,
    draw: () => (
      <Bars x={90} y={30} w={300} h={150} max={45} ticks={[10, 20, 30, 40]} unit="heures" bars={[
        { label: 'métré manuel', v: 40, c: 'grey' },
        { label: 'BIM (2 h + 4 h)', v: 6, c: 'green' },
      ]} />
    ),
    notes: ['L’extraction prend 2 h, la vérification 4 h : on ne supprime pas le contrôle humain, on le concentre.'],
    caption: 'Bureaux de 5 000 m² : temps de réalisation des quantitatifs.',
  },
  {
    id: 'clash-canalisation',
    title: 'Clash dur : canalisation dans une poutre',
    steps: ['simple_examples'],
    h: 250,
    draw: () => (
      <g>
        <Rect x={160} y={40} w={80} h={120} c="ink" sw={2.2} fill="pat:hatch" />
        <Text x={200} y={30} a="middle" s={12} b>poutre 40 × 60</Text>
        <Rect x={20} y={136} w={460} h={22} rx={11} c="water" sw={2} fill="~water" />
        <Rect x={160} y={136} w={80} h={24} c="red" sw={2.4} fill="~red" />
        <Text x={300} y={130} s={12} c="water" b>EP Ø200</Text>
        <Text x={200} y={184} a="middle" s={12} c="red" b>chevauchement 15 cm</Text>
        <Path d="M 40 147 L 120 147 Q 140 147 140 190 L 260 190 Q 280 190 280 147 L 460 147" c="green" w={2.2} dash="7 4" />
        <Text x={200} y={214} a="middle" s={12} c="green">A : dévoiement sous la poutre</Text>
        <Text x={200} y={236} a="middle" s={12}>B : réservation validée par l’ingénieur béton</Text>
      </g>
    ),
    notes: ['Le clash donne lieu à un ticket BCF vers le bureau structure ou le bureau fluides selon la solution retenue.'],
    caption: 'Collision détectée dans Navisworks entre un réseau et la structure.',
  },
  {
    id: 'hopital-45-maquettes',
    title: '45 maquettes, 14 200 clashs, zéro sur le chantier',
    steps: ['real_examples'],
    h: 230,
    draw: () => (
      <g>
        <Poly pts={[[40, 40], [460, 40], [340, 190], [160, 190]]} c="red" w={2} fill="~red" close />
        <Text x={250} y={70} a="middle" s={14} b>14 200 clashs initiaux</Text>
        <Text x={250} y={110} a="middle" s={12}>6 mois de synthèse BIM</Text>
        <Text x={250} y={150} a="middle" s={12}>45 maquettes · 12 bureaux d’études</Text>
        <Rect x={200} y={196} w={100} h={26} rx={6} c="green" sw={2} fill="~green" />
        <Text x={250} y={214} a="middle" s={13} c="green" b>0 sur chantier</Text>
      </g>
    ),
    notes: ['Plus de 3,5 M€ de reprises et d’arrêts de chantier évités sur un hôpital de 225 000 m².'],
    caption: 'La synthèse anticipe sur écran ce qui coûterait cher en béton.',
  },
  {
    id: 'openbim-workflow',
    title: 'Workflow OpenBIM',
    steps: ['diagrams'],
    h: 250,
    draw: () => (
      <g>
        {[['Archicad', 'architecte', 40], ['Tekla', 'structure', 110], ['Revit', 'fluides', 180]].map(([n, r, y]) => (
          <g key={n}>
            <Rect x={20} y={y} w={110} h={50} rx={6} c="ink" sw={1.6} fill="~grey" />
            <Text x={75} y={y + 22} a="middle" s={12} b>{n}</Text>
            <Text x={75} y={y + 40} a="middle" s={11}>{r}</Text>
            <Arrow x1={132} y1={y + 25} x2={198} y2={140} c="water" w={1.6} hs={7} />
          </g>
        ))}
        <Text x={165} y={30} a="middle" s={11} c="water">IFC</Text>
        <Rect x={200} y={110} w={100} h={60} rx={8} c="water" sw={2} fill="~water" />
        <Text x={250} y={146} a="middle" s={13} b>CDE</Text>
        <Arrow x1={302} y1={140} x2={358} y2={140} c="ink" w={1.8} hs={7} />
        <Rect x={360} y={110} w={120} h={60} rx={8} c="ink" sw={1.6} fill="~grey" />
        <Text x={420} y={136} a="middle" s={12} b>synthèse</Text>
        <Text x={420} y={154} a="middle" s={11}>Navisworks, Solibri</Text>
        <Path d="M 420 172 Q 420 230 75 230 L 75 232" c="red" w={1.8} dash="6 4" />
        <Text x={250} y={222} a="middle" s={12} c="red" b>tickets BCF vers les auteurs</Text>
      </g>
    ),
    notes: ['Chaque métier garde son logiciel ; l’IFC sert de langue commune et le BCF de messagerie de la synthèse.'],
    caption: 'Échanges ouverts entre logiciels de conception et de synthèse.',
  },
];
