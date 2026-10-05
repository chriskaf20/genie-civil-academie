// Plates — Module 1 · Statistiques & probabilités pour l'ingénieur
import { Dot, Line, Plot, Poly, Text, fnPts } from '../../components/figures/ink.jsx';
import { Flow, flowHeight } from '../../components/figures/kit.jsx';

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
        <Plot x={40} y={30} w={420} h={200} xr={[22, 46]} yr={[0, 0.15]} xl="MPa"
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
        <Plot x={40} y={30} w={420} h={150} xr={[20, 42]} yr={[0, 1]} xl="MPa"
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
];
