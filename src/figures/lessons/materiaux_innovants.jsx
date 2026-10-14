// Plates — Module 7 · Matériaux innovants
import { Arrow, Bars, Circle, Line, Plot, Poly, Rect, Text } from '../../components/figures/kit.jsx';
import { Path } from '../../components/figures/kit.jsx';

export default [
  {
    id: 'frp-acier',
    title: 'Acier et composites FRP en traction',
    steps: ['theory'],
    formula: ['F_f = E_f\\,\\varepsilon_{fd}\\,A_f'],
    h: 290,
    draw: () => (
      <Plot x={70} y={30} w={380} h={200} xr={[0, 2.5]} yr={[0, 3000]} yl="σ (MPa)"
        xt={[0, 0.5, 1, 1.5, 2, 2.5].map(v => [v, `${String(v).replace('.', ',')} %`])} yt={[500, 1000, 2000, 3000].map(v => [v, String(v)])} grid
      >
        {(sx, sy) => {
          const X = (x, y) => [[sx(x) - 6, sy(y) - 6, sx(x) + 6, sy(y) + 6], [sx(x) - 6, sy(y) + 6, sx(x) + 6, sy(y) - 6]];
          return (
            <g>
              <Rect x={sx(0)} y={sy(3000)} w={sx(0.6) - sx(0)} h={sy(0) - sy(3000)} c="green" sw={0} fill="~green" />
              <Line x1={sx(0.6)} y1={sy(0)} x2={sx(0.6)} y2={sy(3000)} c="green" w={1.8} dash="6 4" />
              <Text x={sx(0.62)} y={sy(2850)} s={12} c="green" b>{'ε_{fd} ≈ 0,6 % (décollement)'}</Text>
              <Poly pts={[[sx(0), sy(0)], [sx(0.25), sy(500)], [sx(2.5), sy(560)]]} c="ink" w={2.8} />
              <Text x={sx(2.45)} y={sy(560) - 10} a="end" s={13} b>acier B500 (ductile)</Text>
              <Line x1={sx(0)} y1={sy(0)} x2={sx(1.7)} y2={sy(2800)} c="red" w={2.8} />
              <Text x={sx(1.75)} y={sy(2800) + 4} s={13} c="red" b>CFRP</Text>
              <Line x1={sx(0)} y1={sy(0)} x2={sx(2.2)} y2={sy(900)} c="orange" w={2.8} />
              <Text x={sx(2.2) - 4} y={sy(900) - 10} a="end" s={13} c="orange" b>GFRP</Text>
              {[...X(1.7, 2800), ...X(2.2, 900)].map(([x1, y1, x2, y2], k) => <Line key={k} x1={x1} y1={y1} x2={x2} y2={y2} c="txt" w={2.2} />)}
              <Text x={sx(1.25)} y={sy(1500)} s={12} c="mute">rupture sans palier</Text>
            </g>
          );
        }}
      </Plot>
    ),
    notes: [
      'Les FRP restent élastiques jusqu’à la rupture : pas de palier, donc pas d’alerte avant la ruine.',
      'En renfort collé, on plafonne la déformation (0,4 à 0,8 %) pour éviter le décollement.',
    ],
    caption: 'Résistances très élevées mais comportement fragile : le dimensionnement des FRP suit ses propres règles.',
  },
  {
    id: 'lamelle-carbone',
    title: 'Renforcement d’une poutre par lamelle carbone',
    steps: ['formulas', 'stepbystep'],
    formula: ['F_f = 165\\,000 \\times 0{,}006 \\times 120 = 118{,}8\\ \\text{kN}', '\\Delta M \\approx F_f\\, z = 59{,}4\\ \\text{kN·m}'],
    h: 290,
    draw: () => (
      <g>
        <Rect x={110} y={40} w={120} h={220} c="ink" sw={2.4} fill="pat:concrete" />
        <Rect x={110} y={40} w={120} h={36} c="red" sw={0} fill="~red" />
        {[132, 170, 208].map(x => <Circle key={x} cx={x} cy={232} r={7} c="ink" sw={1.6} fill="txt" />)}
        <Rect x={116} y={261} w={108} h={6} c="txt" sw={0} fill="txt" />
        <Text x={104} y={270} a="end" s={12} b>{'lamelle CFRP\n100 × 1,2 mm'}</Text>
        <Text x={104} y={236} a="end" s={12}>aciers</Text>
        <Text x={104} y={62} a="end" s={12} c="red">{'béton\ncomprimé'}</Text>
        <Arrow x1={350} y1={58} x2={260} y2={58} c="red" w={2.6} hs={10} />
        <Text x={356} y={63} s={15} c="red" b>C</Text>
        <Arrow x1={260} y1={232} x2={330} y2={232} c="ink" w={2.6} hs={10} />
        <Text x={336} y={237} s={15} b>{'T_s'}</Text>
        <Arrow x1={260} y1={264} x2={380} y2={264} c="green" w={3.4} hs={12} />
        <Text x={386} y={269} s={14} c="green" b>{'F_f = 118,8 kN'}</Text>
        <Arrow x1={430} y1={58} x2={430} y2={262} c="txt" w={1.4} hs={7} both />
        <Text x={436} y={160} s={14} b>{'z ≈\n0,50 m'}</Text>
      </g>
    ),
    notes: [
      '$\\sigma_f = 165\\,000 \\times 0{,}006 = 990$ MPa, loin des 2 800 MPa de rupture : c’est le décollement qui gouverne.',
      'À vérifier ensuite : ancrage d’extrémité, protection au feu, moment résistant initial sans renfort.',
    ],
    caption: 'La lamelle collée en sous-face ajoute un effort de traction au bras de levier z.',
  },
  {
    id: 'loi-melanges',
    title: 'Composite unidirectionnel : loi des mélanges',
    steps: ['simple_examples'],
    formula: ['E_c = V_f E_f + (1 - V_f) E_m = 0{,}6 \\times 230 + 0{,}4 \\times 3{,}5 \\approx 139\\ \\text{GPa}'],
    h: 250,
    draw: () => (
      <g>
        <Rect x={30} y={60} w={200} h={120} c="ink" sw={2} fill="~orange" />
        {Array.from({ length: 12 }, (_, k) => <Line key={k} x1={30} y1={66 + k * 10} x2={230} y2={66 + k * 10} c="txt" w={4.2} />)}
        <Arrow x1={4} y1={120} x2={26} y2={120} c="red" w={2} hs={7} />
        <Arrow x1={256} y1={120} x2={234} y2={120} c="red" w={2} hs={7} />
        <Text x={130} y={48} a="middle" s={13} b>fibres de carbone 60 % (230 GPa)</Text>
        <Text x={130} y={200} a="middle" s={13} c="orange" b>matrice époxy 40 % (3,5 GPa)</Text>
        <Text x={130} y={224} a="middle" s={12} c="mute">effort dans le sens des fibres</Text>
        <Bars x={300} y={40} w={180} h={150} max={120} ticks={[50, 100]} unit="E/ρ" s={12} bars={[
          { label: 'acier', v: 26.8, c: 'grey' },
          { label: 'CFRP', v: 103, c: 'ink' },
        ]} />
      </g>
    ),
    notes: ['Rigidité spécifique : acier $210 / 7{,}85 = 27$, CFRP $165 / 1{,}6 = 103$ — à masse égale, le carbone est environ 4 fois plus rigide.'],
    caption: 'Les fibres portent presque tout l’effort ; la matrice les tient et transmet les efforts.',
  },
  {
    id: 'empreinte-carbone',
    title: 'Empreinte carbone des fondations',
    steps: ['practical_case'],
    formula: ['CO_2 = V \\times C \\times FE = 600 \\times 330 \\times 0{,}80 = 158\\ \\text{t}'],
    h: 250,
    draw: () => (
      <g>
        <Bars x={90} y={40} w={300} h={160} max={180} ticks={[50, 100, 150]} unit="t CO₂e" bars={[
          { label: 'CEM I', v: 158.4, c: 'grey' },
          { label: 'CEM III/A', v: 89.1, c: 'green' },
        ]} />
        <Arrow x1={420} y1={62} x2={420} y2={120} c="red" w={2.4} hs={9} />
        <Text x={428} y={88} s={14} c="red" b>{'− 69 t\n(− 44 %)'}</Text>
      </g>
    ),
    notes: [
      '600 m³ à 330 kg de ciment par m³ : 158 t de CO₂e avec du CEM I, 89 t avec du CEM III/A (facteurs indicatifs 0,80 et 0,45).',
      'La montée en résistance plus lente du CEM III/A ne gêne pas le planning des fondations.',
    ],
    caption: 'Changer de ciment est le levier carbone le plus simple pour un béton courant.',
  },
  {
    id: 'bfup-composition',
    title: 'BFUP : un béton sans gros granulats, armé de fibres',
    steps: ['theory'],
    h: 240,
    draw: () => (
      <g>
        {[[30, 'béton courant', false], [270, 'BFUP', true]].map(([x, t, u]) => (
          <g key={t}>
            <Text x={x + 100} y={24} a="middle" s={13} b>{t}</Text>
            <Rect x={x} y={36} w={200} h={140} c="ink" sw={2} fill="paper" />
            {!u && [[40, 60, 14], [90, 80, 18], [150, 60, 12], [60, 130, 16], [120, 140, 20], [170, 120, 13]].map(([a, b, r], i) => <Circle key={i} cx={x + a} cy={b} r={r} c="grey" sw={1.4} fill="~grey" />)}
            {u && Array.from({ length: 60 }, (_, i) => <Circle key={i} cx={x + 10 + ((i * 37) % 180)} cy={46 + ((i * 53) % 120)} r={2} c="grey" sw={0.8} fill="~grey" />)}
            {u && Array.from({ length: 30 }, (_, i) => {
              const cx = x + 15 + ((i * 41) % 170);
              const cy = 50 + ((i * 29) % 115);
              const a = (i * 47) % 180;
              return <Line key={`f${i}`} x1={cx} y1={cy} x2={cx + 14 * Math.cos((a * Math.PI) / 180)} y2={cy + 14 * Math.sin((a * Math.PI) / 180)} c="ink" w={1.6} />;
            })}
          </g>
        ))}
        <Text x={130} y={200} a="middle" s={12}>{'gravillons jusqu’à 20 mm\nE/C ≈ 0,5'}</Text>
        <Text x={370} y={200} a="middle" s={12}>{'grains de quelques mm, fumée de silice\nE/C ≈ 0,20, 2 à 3 % de fibres'}</Text>
      </g>
    ),
    notes: ['Le squelette très fin et compact donne 150 à 200 MPa ; les fibres reprennent 8 à 10 MPa de traction après fissuration.'],
    caption: 'Comparaison schématique des microstructures.',
  },
  {
    id: 'bap-etalement',
    title: 'Béton autoplaçant : l’essai d’étalement',
    steps: ['theory'],
    h: 250,
    draw: () => (
      <g>
        <Poly pts={[[60, 160], [100, 60], [140, 60], [180, 160]]} c="ink" w={2} fill="~grey" close />
        <Text x={120} y={190} a="middle" s={12}>cône d’Abrams soulevé</Text>
        {[[85, 'SF3 : 760–850 mm', 'red'], [70, 'SF2 : 660–750 mm', 'orange'], [55, 'SF1 : 550–650 mm', 'green']].map(([r, t, c], i) => (
          <g key={t}>
            <Circle cx={300} cy={125} r={r} c={c} sw={2} fill={i === 2 ? '~grey' : 'none'} />
            <Line x1={392} y1={80 + i * 24} x2={404} y2={80 + i * 24} c={c} w={3} />
            <Text x={408} y={84 + i * 24} s={10} c={c} b>{t}</Text>
          </g>
        ))}
        <Text x={300} y={238} a="middle" s={11} c="mute">diamètre de la galette après étalement libre</Text>
      </g>
    ),
    notes: ['Le BAP se met en place sous son seul poids, sans vibration ; il doit aussi résister à la ségrégation.'],
    caption: 'Classes d’étalement SF1 à SF3.',
  },
  {
    id: 'gain-carbone-cem3',
    title: 'CO₂ d’un béton : changer de ciment',
    steps: ['formulas', 'simple_examples'],
    formula: ['CO_2 = \\sum m_i\\,FE_i : \\quad 350 \\times 0{,}80 = 280 \\ \\text{kg} \\quad 350 \\times 0{,}45 = 158\\ \\text{kg}'],
    h: 230,
    draw: () => (
      <Bars x={90} y={30} w={300} h={160} max={300} ticks={[100, 200, 300]} unit="kg CO₂e par m³" bars={[
        { label: 'CEM I', v: 280, c: 'grey' },
        { label: 'CEM III/A', v: 158, c: 'green' },
      ]} />
    ),
    notes: ['Facteurs indicatifs 0,80 et 0,45 kg CO₂e/kg : environ 44 % d’émissions en moins sur le ciment.'],
    caption: 'Empreinte du ciment d’un mètre cube dosé à 350 kg.',
  },
  {
    id: 'passerelle-paix',
    title: 'Passerelle en BFUP de 120 m',
    steps: ['real_examples'],
    h: 220,
    draw: () => (
      <g>
        <Rect x={10} y={180} w={480} h={30} c="water" sw={0} fill="~water" />
        <Rect x={10} y={150} w={40} h={60} c="soil" sw={0} fill="pat:soil" />
        <Rect x={450} y={150} w={40} h={60} c="soil" sw={0} fill="pat:soil" />
        <Path d="M 50 150 Q 250 20 450 150" c="ink" w={4} />
        <Line x1={50} y1={100} x2={450} y2={100} c="ink" w={2.6} />
        {Array.from({ length: 9 }, (_, i) => 90 + i * 40).map(x => {
          const t = (x - 50) / 400;
          const y = 150 - 4 * 65 * t * (1 - t);
          return y < 100 ? null : <Line key={x} x1={x} y1={100} x2={x} y2={y} c="ink" w={1} />;
        })}
        <Text x={250} y={64} a="middle" s={13} b>arc mince en BFUP</Text>
        <Text x={250} y={128} a="middle" s={12}>≈ 120 m</Text>
        <Text x={250} y={204} a="middle" s={11} c="mute">{'f_c ≈ 200 MPa + fibres + précontrainte'}</Text>
      </g>
    ),
    notes: ['Le BFUP permet des ouvrages fins et durables, à condition de maîtriser malaxage, orientation des fibres et cure.'],
    caption: 'Passerelle de la Paix (Séoul, 2002), après celle de Sherbrooke (1997).',
  },
];
