// Plates — Module 46 · Carrefours à feux
import { Arrow, Car, Circle, Gantt, Line, Plot, Poly, Rect, Text, fnPts } from '../../components/figures/kit.jsx';

function Signal({ x, y, on }) {
  return (
    <g>
      <Rect x={x - 7} y={y} w={14} h={36} rx={3} c="txt" sw={1.6} fill="txt" />
      {['red', 'orange', 'green'].map((c, i) => <Circle key={c} cx={x} cy={y + 7 + i * 11} r={4} c={c} sw={0} fill={on === c ? c : 'grey'} />)}
    </g>
  );
}

export default [
  {
    id: 'deux-phases',
    title: 'Carrefour à deux phases',
    steps: ['theory'],
    formula: ['c = s\\, \\frac{g}{C}'],
    h: 310,
    draw: () => (
      <g>
        {[[0, 'phase 1 : nord-sud'], [250, 'phase 2 : est-ouest']].map(([dx, lab], i) => (
          <g key={dx}>
            <Text x={dx + 125} y={24} a="middle" s={14} b c={i === 0 ? 'green' : 'ink'}>{lab}</Text>
            <Rect x={dx + 95} y={40} w={60} h={240} c="grey" sw={0} fill="~grey" />
            <Rect x={dx + 15} y={130} w={220} h={60} c="grey" sw={0} fill="~grey" />
            {i === 0 ? (
              <>
                <Arrow x1={dx + 110} y1={50} x2={dx + 110} y2={270} c="green" w={3} />
                <Arrow x1={dx + 140} y1={270} x2={dx + 140} y2={50} c="green" w={3} />
                <Signal x={dx + 60} y={60} on="green" />
                <Signal x={dx + 200} y={210} on="red" />
              </>
            ) : (
              <>
                <Arrow x1={dx + 25} y1={145} x2={dx + 225} y2={145} c="green" w={3} />
                <Arrow x1={dx + 225} y1={175} x2={dx + 25} y2={175} c="green" w={3} />
                <Signal x={dx + 60} y={60} on="red" />
                <Signal x={dx + 200} y={210} on="green" />
              </>
            )}
          </g>
        ))}
      </g>
    ),
    caption: 'Les mouvements compatibles reçoivent le vert ensemble ; les deux phases alternent.',
  },
  {
    id: 'decharge-file',
    title: 'Débit de décharge d’une file au vert',
    steps: ['formulas'],
    formula: ['y_i = \\frac{q_i}{s_i}', 'C_0 = \\frac{1{,}5 L + 5}{1 - Y}'],
    h: 290,
    draw: () => (
      <Plot x={60} y={30} w={380} h={200} xr={[0, 34]} yr={[0, 2200]} xl="temps de vert (s)" yl="uvp/h"
        xt={[0, 2, 30, 33].map(v => [v, String(v)])} yt={[[1800, 's = 1 800']]} grid
      >
        {(sx, sy) => (
          <g>
            <Poly pts={[[sx(0), sy(0)], [sx(2), sy(1800)], [sx(30), sy(1800)], [sx(33), sy(900)], [sx(34), sy(0)]]} c="ink" w={2.8} />
            <Rect x={sx(0)} y={sy(1800)} w={sx(2) - sx(0)} h={sy(0) - sy(1800)} c="red" sw={0} fill="~red" />
            <Text x={sx(1)} y={sy(2000)} a="middle" s={11} c="red">démarrage</Text>
            <Text x={sx(16)} y={sy(1000)} a="middle" s={13} c="ink">écoulement au débit de saturation</Text>
            <Text x={sx(31.5)} y={sy(2000)} a="middle" s={11} c="orange">jaune</Text>
          </g>
        )}
      </Plot>
    ),
    notes: ['Les pertes au démarrage et à la fin du vert forment le temps perdu de chaque phase.'],
    caption: 'Après un court démarrage, la file s’écoule à environ un véhicule toutes les 2 secondes.',
  },
  {
    id: 'diagramme-feux',
    title: 'Diagramme des feux (cycle de 45 s)',
    steps: ['stepbystep'],
    formula: ['g_1 = 21{,}1\\ \\text{s} \\qquad g_2 = 15{,}9\\ \\text{s}'],
    h: 200,
    draw: () => (
      <Gantt x={150} y={40} w={320} rowH={40} total={45} step={5} unit="s" tasks={[
        { name: 'phase 1 (N-S)', start: 2, dur: 21.1, c: 'green' },
        { name: 'phase 2 (E-O)', start: 27.1, dur: 15.9, c: 'green' },
        { name: 'temps perdus', start: 0, dur: 2, c: 'red' },
      ]} />
    ),
    notes: ['Les temps perdus (4 s par phase) séparent les verts : jaune, rouge de dégagement et démarrage.'],
    caption: 'C = 45 s, vert disponible 37 s réparti selon y₁ = 0,333 et y₂ = 0,250.',
  },
  {
    id: 'onde-verte',
    title: 'Onde verte sur un boulevard',
    steps: ['real_examples'],
    h: 290,
    draw: () => (
      <Plot x={60} y={30} w={380} h={210} xr={[0, 1500]} yr={[0, 240]} xl="distance (m)" yl="temps (s)"
        xt={[0, 500, 1000, 1500].map(v => [v, String(v)])} yt={[80, 160, 240].map(v => [v, String(v)])}
      >
        {(sx, sy) => (
          <g>
            {[0, 300, 600, 900, 1200, 1500].map((d, i) => {
              const off = (d / (40 / 3.6)) % 80;
              return [0, 80, 160].map(t0 => (
                <g key={`${d}-${t0}`}>
                  <Line x1={sx(d)} y1={sy(t0 + off)} x2={sx(d)} y2={sy(Math.min(240, t0 + off + 40))} c="green" w={5} o={0.7} />
                  <Line x1={sx(d)} y1={sy(Math.min(240, t0 + off + 40))} x2={sx(d)} y2={sy(Math.min(240, t0 + off + 80))} c="red" w={5} o={0.5} />
                </g>
              ));
            })}
            <Line x1={sx(0)} y1={sy(10)} x2={sx(1500)} y2={sy(10 + 1500 / (40 / 3.6))} c="ink" w={2.4} dash="7 4" />
            <Text x={sx(700)} y={sy(90)} s={13} c="ink">véhicule à 40 km/h : toujours au vert</Text>
          </g>
        )}
      </Plot>
    ),
    caption: 'Diagramme espace-temps : les verts sont décalés de la durée du trajet entre carrefours.',
  },
];
