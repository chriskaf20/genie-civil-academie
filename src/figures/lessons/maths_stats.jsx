// Plates — Module 1 · Statistiques & probabilités pour l'ingénieur
import { Dot, Line, Plot, Poly, Text, fnPts } from '../../components/figures/ink.jsx';
import { Flow, flowHeight } from '../../components/figures/kit.jsx';
import { Circle, Path, Rect } from '../../components/figures/kit.jsx';

const phi = z => Math.exp(-(z * z) / 2) / Math.sqrt(2 * Math.PI);
const pdf = (m, s) => x => phi((x - m) / s) / s;

const CHAIN = [
  'Série d’essais\n(éprouvettes, carottes)',
  'Moyenne, écart type,\ncoefficient de variation',
  'Modèle : loi normale\nou loi des extrêmes',
  'Valeur caractéristique\nfractile 5 % ou période T',
  'Valeur de calcul\nX_k / γ_M ou γ_F · F_k',
  'Fiabilité visée\nβ ≈ 3,8 sur 50 ans',
];

export default [
  {
    id: 'loi-normale',
    title: 'Loi normale et fractile à 5 %',
    steps: ['theory'],
    formula: ['x_k = \\bar{x} - 1{,}645\\, s'],
    h: 300,
    draw: () => (
      <Plot x={40} y={30} w={420} h={210} xr={[-3.4, 3.4]} yr={[0, 0.45]} xl="x"
        xt={[[-1.645, 'x̄ − 1,645 s'], [-1, 'x̄ − s'], [0, 'x̄'], [1, 'x̄ + s']]}
      >
        {(sx, sy) => (
          <g>
            <Poly pts={[[sx(-1), sy(0)], ...fnPts(phi, -1, 1, sx, sy, 40), [sx(1), sy(0)]]} c="ink" w={0} fill="~ink" />
            <Poly pts={[[sx(-3.4), sy(0)], ...fnPts(phi, -3.4, -1.645, sx, sy, 30), [sx(-1.645), sy(0)]]} c="red" w={0} fill="~red" />
            <Poly pts={fnPts(phi, -3.4, 3.4, sx, sy, 90)} c="ink" w={2.6} />
            <Line x1={sx(-1.645)} y1={sy(0)} x2={sx(-1.645)} y2={sy(0.2)} c="red" w={2} />
            <Line x1={sx(0)} y1={sy(0)} x2={sx(0)} y2={sy(0.42)} c="grey" w={1.2} dash="5 4" />
            <Text x={sx(0)} y={sy(0.12)} a="middle" s={16} c="ink">68 %</Text>
            <Text x={sx(-2.3)} y={sy(0.09)} a="middle" s={15} c="red">5 %</Text>
            <Text x={sx(-1.6)} y={sy(0.24)} a="end" s={14} c="red">{'valeur\ncaractéristique'}</Text>
            <Text x={sx(1.6)} y={sy(0.3)} s={14} c="mute">{'courbe en cloche\nsymétrique'}</Text>
          </g>
        )}
      </Plot>
    ),
    notes: ['95 % des résultats dépassent la valeur caractéristique : c’est elle qu’on utilise pour dimensionner.'],
    caption: 'Densité de la loi normale : 68 % des valeurs entre x̄ − s et x̄ + s, 5 % sous x_k.',
  },
  {
    id: 'fiabilite-r-s',
    title: 'Sollicitation S contre résistance R',
    steps: ['formulas'],
    formula: ['\\beta = \\frac{\\mu_R - \\mu_S}{\\sqrt{\\sigma_R^2 + \\sigma_S^2}}'],
    h: 300,
    draw: () => (
      <Plot x={40} y={30} w={420} h={210} xr={[0, 450]} yr={[0, 0.015]} xl="kN"
        xt={[0, 100, 150, 200, 300, 400].map(v => [v, String(v)])}
      >
        {(sx, sy) => (
          <g>
            <Poly pts={[[sx(0), sy(0)], ...fnPts(pdf(150, 30), 0, 450, sx, sy, 90), [sx(450), sy(0)]]} c="orange" w={0} fill="~orange" />
            <Poly pts={[[sx(0), sy(0)], ...fnPts(pdf(300, 30), 0, 450, sx, sy, 90), [sx(450), sy(0)]]} c="green" w={0} fill="~green" />
            <Poly pts={fnPts(pdf(150, 30), 0, 450, sx, sy, 90)} c="orange" w={2.6} />
            <Poly pts={fnPts(pdf(300, 30), 0, 450, sx, sy, 90)} c="green" w={2.6} />
            <Text x={sx(150)} y={sy(0.0142)} a="middle" s={16} c="orange" b>S (sollicitation)</Text>
            <Text x={sx(300)} y={sy(0.0142)} a="middle" s={16} c="green" b>R (résistance)</Text>
            <Line x1={sx(150)} y1={sy(0.0135)} x2={sx(150)} y2={sy(0)} c="orange" w={1} dash="4 4" />
            <Line x1={sx(300)} y1={sy(0.0135)} x2={sx(300)} y2={sy(0)} c="green" w={1} dash="4 4" />
            <Text x={sx(225)} y={sy(0.0105)} a="middle" s={15} c="ink">μ_R − μ_S = 150</Text>
            <Line x1={sx(150)} y1={sy(0.0098)} x2={sx(300)} y2={sy(0.0098)} c="ink" w={1.6} />
            <Text x={sx(225)} y={sy(0.0016)} a="middle" s={14} c="red">zone de recouvrement : R &lt; S possible</Text>
          </g>
        )}
      </Plot>
    ),
    notes: ['Exemple : β = 150 / √(30² + 30²) = 3,54, un peu en dessous de la cible de l’Eurocode 0 (3,8 sur 50 ans).'],
    caption: 'La rupture se produit quand R < S : plus les cloches sont éloignées et étroites, plus β est grand.',
  },
  {
    id: 'conformite-c25',
    title: 'Conformité d’un béton C25/30',
    steps: ['stepbystep'],
    formula: ['f_k = 35{,}2 - 1{,}645 \\times 3{,}1 = 30{,}1\\ \\text{MPa}'],
    h: 300,
    draw: () => {
      // 15 results with mean 35,2 MPa and standard deviation 3,1 MPa.
      const vals = [30.0, 31.0, 32.1, 32.9, 33.5, 34.0, 34.8, 35.2, 35.7, 35.9, 36.8, 37.6, 38.3, 39.1, 41.2];
      return (
        <Plot x={40} y={30} w={408} h={200} xr={[22, 46]} yr={[0, 0.15]} xl="MPa"
          xt={[25, 30, 35, 40, 45].map(v => [v, String(v)])}
        >
          {(sx, sy) => (
            <g>
              <Poly pts={fnPts(pdf(35.2, 3.1), 22, 46, sx, sy, 80)} c="ink" w={2.4} />
              {vals.map((v, i) => <Dot key={i} x={sx(v)} y={sy(0.006) - (i % 3) * 9} r={4} c="ink" />)}
              <Line x1={sx(35.2)} y1={sy(0)} x2={sx(35.2)} y2={sy(0.135)} c="ink" w={1.4} dash="5 4" />
              <Text x={sx(35.2) + 6} y={sy(0.138)} s={14} c="ink">moyenne 35,2</Text>
              <Line x1={sx(30.1)} y1={sy(0)} x2={sx(30.1)} y2={sy(0.1)} c="green" w={2.2} />
              <Text x={sx(30.1) - 4} y={sy(0.105)} a="end" s={14} c="green">f_k = 30,1</Text>
              <Line x1={sx(25)} y1={sy(0)} x2={sx(25)} y2={sy(0.07)} c="red" w={2.2} dash="6 4" />
              <Text x={sx(25)} y={sy(0.075)} a="middle" s={14} c="red">{'f_{ck} exigé = 25'}</Text>
            </g>
          )}
        </Plot>
      );
    },
    notes: ['15 éprouvettes (points) ; la cloche ajustée place le fractile à 5 % bien au-dessus de 25 MPa.'],
    caption: 'f_k = 30,1 MPa ≥ 25 MPa : la production est conforme à la classe C25/30.',
  },
  {
    id: 'essai-a-calcul',
    title: 'Du résultat d’essai à la valeur de calcul',
    steps: ['diagrams'],
    h: flowHeight(CHAIN),
    draw: () => <Flow items={CHAIN} />,
    caption: 'Chaîne statistique qui relie les essais aux coefficients partiels des Eurocodes.',
  },
  {
    id: 'carottes-pont',
    title: 'Huit carottes sur un pont existant',
    steps: ['practical_case'],
    formula: ['f_{ck,is} = 32 - 1{,}9 \\times 4{,}5 = 23{,}5\\ \\text{MPa}'],
    h: 250,
    draw: () => {
      // 8 cores with mean 32 MPa and standard deviation 4,5 MPa.
      const vals = [25.0, 27.8, 30.1, 31.5, 32.6, 34.0, 36.2, 39.0];
      return (
        <Plot x={40} y={30} w={408} h={150} xr={[20, 42]} yr={[0, 1]} xl="MPa"
          xt={[20, 25, 30, 35, 40].map(v => [v, String(v)])}
        >
          {(sx, sy) => (
            <g>
              {vals.map(v => <Dot key={v} x={sx(v)} y={sy(0.25)} r={6} c="ink" ring />)}
              <Line x1={sx(32)} y1={sy(0)} x2={sx(32)} y2={sy(0.8)} c="ink" w={1.4} dash="5 4" />
              <Text x={sx(32)} y={sy(0.85)} a="middle" s={14} c="ink">moyenne 32</Text>
              <Line x1={sx(23.5)} y1={sy(0)} x2={sx(23.5)} y2={sy(0.62)} c="red" w={2.2} />
              <Text x={sx(23.5)} y={sy(0.67)} a="middle" s={14} c="red">23,5 (k = 1,9)</Text>
              <Line x1={sx(24.6)} y1={sy(0)} x2={sx(24.6)} y2={sy(0.45)} c="orange" w={1.8} dash="4 4" />
              <Text x={sx(24.6) + 6} y={sy(0.45)} s={13} c="orange">24,6 (k = 1,645)</Text>
            </g>
          )}
        </Plot>
      );
    },
    notes: ['Avec peu d’essais, le coefficient k est plus grand : l’incertitude se paie en résistance exploitable.'],
    caption: 'Résistance caractéristique en place estimée à partir de 8 carottes (CV = 14 %).',
  },
  {
    id: 'exemples-stats',
    title: 'Moyenne, valeur centennale, indice de fiabilité',
    steps: ['simple_examples'],
    formula: ['\\beta = \\frac{\\mu_R - \\mu_S}{\\sqrt{\\sigma_R^2 + \\sigma_S^2}} = \\frac{150}{42{,}4} = 3{,}54', 'x_T = \\bar{x} + K_T\\,s \\quad (K_{100} = 3{,}14)'],
    h: 250,
    draw: () => {
      const xa = v => 30 + (v - 26) * 15;
      const xg = T => 190 + (Math.log10(T) - Math.log10(2)) * (130 / (2 - Math.log10(2)));
      const yg = p => 200 - (p - 50) * 2;
      const xr = v => 345 + (v - 50) * (145 / 350);
      const gauss = (m, s, k) => Array.from({ length: 41 }, (_, i) => { const v = m - 3 * s + (6 * s * i) / 40; return [xr(v), 200 - k * Math.exp(-((v - m) ** 2) / (2 * s * s))]; });
      return (
        <g>
          <Text x={95} y={30} a="middle" s={12} b>a) 5 résistances</Text>
          <Rect x={xa(27.9)} y={90} w={xa(32.1) - xa(27.9)} h={70} c="red" sw={0} fill="~red" />
          <Line x1={xa(26)} y1={160} x2={xa(35)} y2={160} c="ink" w={1.6} />
          {[[28, 0], [28, 1], [31, 0], [30, 0], [33, 0]].map(([v, k], i) => <Dot key={i} x={xa(v)} y={150 - k * 14} r={5} />)}
          <Line x1={xa(30)} y1={84} x2={xa(30)} y2={160} c="red" w={2} />
          {[26, 30, 35].map(v => <Text key={v} x={xa(v)} y={178} a="middle" s={11}>{String(v)}</Text>)}
          <Text x={95} y={206} a="middle" s={12} c="red" b>{'moyenne 30,0 ; s = 2,1 MPa'}</Text>
          <Text x={255} y={30} a="middle" s={12} b>b) pluie centennale</Text>
          <Line x1={190} y1={200} x2={320} y2={200} c="ink" w={1.4} />
          <Line x1={190} y1={200} x2={190} y2={70} c="ink" w={1.4} />
          <Poly pts={[[xg(2), yg(57)], [xg(10), yg(83.5)], [xg(100), yg(116.5)]]} c="water" w={2.4} />
          <Dot x={xg(100)} y={yg(116.5)} r={5} c="water" />
          {[[2, '2'], [10, '10'], [100, '100 ans']].map(([T, l]) => <Text key={T} x={xg(T)} y={216} a="middle" s={11}>{l}</Text>)}
          <Text x={314} y={yg(116.5) + 18} a="end" s={12} c="water" b>116 mm</Text>
          <Text x={196} y={yg(60) - 6} s={11} c="mute">moyenne 60 mm</Text>
          <Text x={418} y={30} a="middle" s={12} b>c) fiabilité R – S</Text>
          <Poly pts={gauss(150, 30, 90)} c="red" w={2} fill="~red" close />
          <Poly pts={gauss(300, 30, 90)} c="green" w={2} fill="~green" close />
          <Line x1={345} y1={200} x2={490} y2={200} c="ink" w={1.4} />
          <Text x={xr(150)} y={100} a="middle" s={12} c="red" b>S</Text>
          <Text x={xr(300)} y={100} a="middle" s={12} c="green" b>R</Text>
          <Text x={418} y={226} a="middle" s={12} b>β = 3,54 &lt; 3,8</Text>
        </g>
      );
    },
    notes: ['La pluie centennale se lit sur l’ajustement de Gumbel : $60 + 3{,}14 \\times 18 \\approx 116$ mm en 24 h.'],
    caption: 'Trois outils statistiques de l’ingénieur : dispersion, extrêmes, probabilité de ruine.',
  },
  {
    id: 'calibrage-en1990',
    title: 'Coefficients partiels et indice de fiabilité',
    steps: ['real_examples'],
    formula: ['\\frac{R_k}{\\gamma_M} \\ge \\gamma_G G_k + \\gamma_Q Q_k \\iff \\beta \\approx 3{,}8'],
    h: 210,
    draw: () => {
      const X = b => 40 + (b - 2.5) * 210;
      return (
        <g>
          <Rect x={X(2.5)} y={80} w={X(4.5) - X(2.5)} h={30} c="ink" sw={1.4} fill="~grey" />
          {[[3.3, 'RC1', '4,8 × 10⁻⁴', 'orange'], [3.8, 'RC2', '7,2 × 10⁻⁵', 'green'], [4.3, 'RC3', '8,5 × 10⁻⁶', 'red']].map(([b, rc, pf, c]) => (
            <g key={rc}>
              <Line x1={X(b)} y1={70} x2={X(b)} y2={120} c={c} w={3} />
              <Text x={X(b)} y={60} a="middle" s={13} c={c} b>{`${rc} : β = ${String(b).replace('.', ',')}`}</Text>
              <Text x={X(b)} y={140} a="middle" s={12} c={c}>{`P_f ≈ ${pf}`}</Text>
            </g>
          ))}
          {[2.5, 3, 3.5, 4, 4.5].map(b => <Text key={b} x={X(b)} y={100} a="middle" s={11} c="mute">{String(b).replace('.', ',')}</Text>)}
          <Text x={250} y={176} a="middle" s={12}>{'γ_G = 1,35 ; γ_Q = 1,5 ; γ_c = 1,5 ; γ_{M0} = 1,0 : calibrés pour β ≈ 3,8 sur 50 ans'}</Text>
        </g>
      );
    },
    notes: ['Plus les conséquences d’une ruine sont graves (classe RC3), plus l’indice de fiabilité visé est élevé.'],
    caption: 'Derrière chaque coefficient de sécurité : une probabilité de défaillance acceptée.',
  },
];
