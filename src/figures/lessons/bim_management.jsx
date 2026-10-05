// Plates — Module 5 · BIM management, CDE ISO 19650, BCF & 4D/5D
import { Arrow, Box, Circle, Line, Path, Rect, Text, Bars, Grid } from '../../components/figures/kit.jsx';

export default [
  {
    id: 'cde-iso19650',
    title: 'Les états du CDE (ISO 19650)',
    steps: ['theory'],
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
    steps: ['formulas'],
    formula: ['\\text{LOIN} = \\text{LOG} + \\text{LOI}'],
    h: 230,
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
];
