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
];
