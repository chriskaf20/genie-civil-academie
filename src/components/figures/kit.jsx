// Higher-level drawing parts for the lesson plates, built on ./ink.jsx.
// Same conventions: SVG user units, colour tokens ('ink', 'red', '~ink' soft fills, 'pat:soil' patterns),
// and labels with `_` / `^` markup. Labels containing braces must be passed as JS strings.
import { Arrow, Beam, Box, Circle, Dim, Dot, Fixed, Force, Ground, Line, Load, Path, Pin, Poly, Rect, Roller, Text, WaterLevel } from './ink.jsx';

// ── Beams and internal-force diagrams ───────────────────────────────────────

/**
 * Beam between x1 and x2 at level y with supports and loads.
 *   left / right : 'pin' | 'roller' | 'fixed' | 'free'
 *   loads : [{ type: 'udl', a, b, h, label } | { type: 'point', at, len, label } | { type: 'tri', a, b, h1, h2, label }]
 *           positions a, b, at are fractions of the span (0 → 1).
 *   names : [left, right] point names; span : dimension label under the beam.
 */
export function BeamScheme({ x1, x2, y, left = 'pin', right = 'roller', loads = [], names = ['A', 'B'], span, spanY, c = 'ink', mid = [] }) {
  const X = t => x1 + (x2 - x1) * t;
  const sup = (kind, x, side) => {
    if (kind === 'pin') return <Pin x={x} y={y + 4.5} />;
    if (kind === 'roller') return <Roller x={x} y={y + 4.5} />;
    if (kind === 'fixed') return <Fixed x={x} y={y} side={side} />;
    return null;
  };
  return (
    <g>
      <Beam x1={x1} x2={x2} y={y} c={c} />
      {loads.map((ld, i) => {
        if (ld.type === 'udl') return <Load key={i} x1={X(ld.a ?? 0)} x2={X(ld.b ?? 1)} y={y - 4.5} h1={ld.h ?? 36} label={ld.label} c={ld.c || 'ink'} s={ld.s ?? 16} />;
        if (ld.type === 'tri') return <Load key={i} x1={X(ld.a ?? 0)} x2={X(ld.b ?? 1)} y={y - 4.5} h1={ld.h1 ?? 0} h2={ld.h2 ?? 40} label={ld.label} c={ld.c || 'ink'} />;
        if (ld.type === 'point') return <Force key={i} x={X(ld.at)} y={y - 4.5} len={ld.len ?? 46} c={ld.c || 'red'} label={ld.label} s={ld.s ?? 16} />;
        return null;
      })}
      {sup(left, x1, 'left')}
      {sup(right, x2, 'right')}
      {mid.map(t => <Roller key={t} x={X(t)} y={y + 4.5} />)}
      {names?.[0] && <Text x={x1 - (left === 'fixed' ? 30 : 24)} y={y + 6} s={16} b>{names[0]}</Text>}
      {names?.[1] && <Text x={x2 + (right === 'fixed' ? 16 : 13)} y={y + 6} s={16} b>{names[1]}</Text>}
      {span && <Dim x1={x1} y1={spanY ?? y + 44} x2={x2} y2={spanY ?? y + 44} label={span} side={-1} s={14} />}
    </g>
  );
}

/**
 * Internal-force diagram along a beam: f(t) for t ∈ [0, 1], drawn from baseline y0,
 * `scale` px per unit of f (positive values drawn downwards when `down`, the
 * tension-side convention for bending moments).
 * marks: [{ t, label, dy, a }] labels placed at the curve.
 */
export function ForceDiagram({ x1, x2, y0, f, scale = 1, down = true, c = 'ink', fill = '~ink', name, marks = [], n = 60, s = 14 }) {
  const sgn = down ? 1 : -1;
  const pts = Array.from({ length: n + 1 }, (_, i) => {
    const t = i / n;
    return [x1 + (x2 - x1) * t, y0 + sgn * scale * f(t)];
  });
  return (
    <g>
      <Poly pts={[[x1, y0], ...pts, [x2, y0]]} c={c} w={0} fill={fill} />
      <Line x1={x1} y1={y0} x2={x2} y2={y0} c="txt" w={1.5} />
      <Poly pts={pts} c={c} w={2.4} />
      <Line x1={x1} y1={y0} x2={pts[0][0]} y2={pts[0][1]} c={c} w={2.4} />
      <Line x1={x2} y1={y0} x2={pts[n][0]} y2={pts[n][1]} c={c} w={2.4} />
      {name && <Text x={x1 - 12} y={y0 + 5} a="end" s={16} b c={c}>{name}</Text>}
      {marks.map(({ t, label, dy = 0, dx = 0, a = 'middle', mc }) => {
        const v = f(t);
        const yy = y0 + sgn * scale * v;
        return <Text key={label + t} x={x1 + (x2 - x1) * t + dx} y={yy + (sgn * v >= 0 ? 18 : -8) + dy} a={a} s={s} c={mc || c}>{label}</Text>;
      })}
    </g>
  );
}

// ── Sections ────────────────────────────────────────────────────────────────

/**
 * Reinforced-concrete rectangular section, top-left at (x, y), size w × h px.
 * bars: bottom bar count; top: top bar count; r: bar radius; cover: px.
 */
export function RCSection({ x, y, w, h, bars = 3, top = 2, r = 6, rt = 4.5, cover = 16, stirrup = true, labels = true, bl = 'b', hl = 'h', dl }) {
  const xs = (k, rr) => Array.from({ length: k }, (_, i) => x + cover + rr + ((w - 2 * cover - 2 * rr) * i) / Math.max(1, k - 1));
  return (
    <g>
      <Rect x={x} y={y} w={w} h={h} c="grey" sw={2.2} fill="pat:concrete" bg="~grey" />
      {stirrup && <Rect x={x + cover - 5} y={y + cover - 5} w={w - 2 * cover + 10} h={h - 2 * cover + 10} rx={6} c="ink" sw={1.8} />}
      {xs(bars, r).map(cx => <Dot key={`b${cx}`} x={cx} y={y + h - cover - r} r={r} c="red" />)}
      {top > 0 && xs(top, rt).map(cx => <Dot key={`t${cx}`} x={cx} y={y + cover + rt} r={rt} c="ink" />)}
      {labels && (
        <>
          <Dim x1={x} y1={y + h + 16} x2={x + w} y2={y + h + 16} label={bl} side={-1} s={14} />
          <Dim x1={x - 16} y1={y + h} x2={x - 16} y2={y} label={hl} side={1} s={14} />
          {dl && <Dim x1={x + w + 16} y1={y + h - cover - r} x2={x + w + 16} y2={y} label={dl} side={-1} s={14} />}
        </>
      )}
    </g>
  );
}

/** Rolled I / H section centred on (cx, cy): b flange width, h depth (px). */
export function ISection({ cx, cy, b = 90, h = 120, tf = 10, tw = 6, c = 'ink', fill = '~ink' }) {
  const x0 = cx - b / 2;
  const y0 = cy - h / 2;
  const pts = [
    [x0, y0], [x0 + b, y0], [x0 + b, y0 + tf], [cx + tw / 2, y0 + tf], [cx + tw / 2, y0 + h - tf], [x0 + b, y0 + h - tf],
    [x0 + b, y0 + h], [x0, y0 + h], [x0, y0 + h - tf], [cx - tw / 2, y0 + h - tf], [cx - tw / 2, y0 + tf], [x0, y0 + tf],
  ];
  return <Poly pts={pts} c={c} w={2} fill={fill} />;
}

// ── Ground and water ────────────────────────────────────────────────────────

/**
 * Stack of soil layers between x1 and x2 from y0 downwards.
 * layers: [{ h, fill: 'pat:sand', bg: '~soil', label, sub }]
 */
export function SoilLayers({ x1, x2, y0, layers, s = 14, labelX, grass = true }) {
  let y = y0;
  const out = layers.map((ly, i) => {
    const top = y;
    y += ly.h;
    return (
      <g key={i}>
        <Rect x={x1} y={top} w={x2 - x1} h={ly.h} c={ly.c || 'soil'} sw={1.4} fill={ly.fill || 'pat:sand'} bg={ly.bg ?? '~soil'} />
        {ly.label && <Text x={labelX ?? x1 + 10} y={top + ly.h / 2 + 5} s={s} c={ly.tc || 'soil'}>{ly.label}</Text>}
        {ly.sub && <Text x={labelX ?? x1 + 10} y={top + ly.h / 2 + 5 + s * 1.1} s={s * 0.85} c="mute">{ly.sub}</Text>}
      </g>
    );
  });
  return (
    <g>
      {out}
      {grass && <Rect x={x1} y={y0 - 7} w={x2 - x1} h={7} c="green" sw={0} fill="pat:grass" />}
      <Line x1={x1} y1={y0} x2={x2} y2={y0} c="soil" w={2.4} />
    </g>
  );
}

/** Water surface between x1 and x2 at y, with a ▽ marker. */
export function Water({ x1, x2, y, depth, label, mark = true }) {
  return (
    <g>
      {depth && <Rect x={x1} y={y} w={x2 - x1} h={depth} c="water" sw={0} fill="~water" />}
      <Line x1={x1} y1={y} x2={x2} y2={y} c="water" w={2} />
      {mark && <WaterLevel x={x1 + 24} y={y} label={label} s={13} />}
    </g>
  );
}

// ── Charts ──────────────────────────────────────────────────────────────────

/** Breaks a label into lines of at most `max` characters (explicit '\n' are kept). */
export function wrapLabel(label, max) {
  return String(label).split('\n').flatMap(par => {
    const lines = [];
    let cur = '';
    for (const word of par.split(/\s+/).filter(Boolean)) {
      if (cur && (cur + ' ' + word).length > max) { lines.push(cur); cur = word; } else cur = cur ? `${cur} ${word}` : word;
    }
    if (cur) lines.push(cur);
    return lines;
  }).join('\n');
}

const flowGeom = (items, { w = 480, cols = 3, gap = 26, s = 13.5 }) => {
  const bw = (w - gap * (cols - 1)) / cols;
  const max = Math.max(10, Math.floor(bw / (s * 0.5)));
  const labels = items.map(it => wrapLabel(typeof it === 'string' ? it : it.label, max));
  const lines = Math.max(...labels.map(l => l.split('\n').length));
  return { bw, labels, bh: Math.max(64, lines * s * 1.2 + 26) };
};

/** Height a Flow of these items needs (same options as Flow). */
export function flowHeight(items, opts = {}) {
  const { cols = 3, vgap = 34, y = 14 } = opts;
  const n = typeof items === 'number' ? items : items.length;
  const bh = opts.bh ?? (typeof items === 'number' ? 74 : flowGeom(items, opts).bh);
  return y + Math.ceil(n / cols) * (bh + vgap) - vgap + 14;
}

/**
 * Process chart: boxes laid out left→right in rows of `cols`, rows snake back
 * (boustrophedon) so the arrows stay short. items: strings or { label, c }.
 * Labels are word-wrapped to the box width; box height follows the longest label.
 */
export function Flow({ items, x = 10, y = 14, w = 480, cols = 3, bh: bhIn, gap = 26, vgap = 34, s = 13.5, last = 'green' }) {
  const geom = flowGeom(items, { w, cols, gap, s });
  const { bw, labels } = geom;
  const bh = bhIn ?? geom.bh;
  const pos = items.map((_, i) => {
    const row = Math.floor(i / cols);
    let col = i % cols;
    if (row % 2) col = cols - 1 - col;
    return [x + col * (bw + gap), y + row * (bh + vgap)];
  });
  return (
    <g>
      {items.map((it, i) => {
        const label = labels[i];
        const isLast = i === items.length - 1 && last;
        const c = (typeof it === 'object' && it.c) || (isLast ? last : 'ink');
        const [bx, by] = pos[i];
        return (
          <g key={i}>
            <Box x={bx} y={by} w={bw} h={bh} label={label} c={c} fill={`~${c}`} s={s} />
            <Circle cx={bx + 2} cy={by + 2} r={11} c={c} sw={1.8} fill="paper" />
            <Text x={bx + 2} y={by + 7} a="middle" s={13} b c={c} halo={false}>{String(i + 1)}</Text>
          </g>
        );
      })}
      {pos.slice(1).map(([bx, by], i) => {
        const [px, py] = pos[i];
        if (by === py) {
          const dir = bx > px ? 1 : -1;
          const ya = by + bh / 2;
          return <Arrow key={i} x1={dir > 0 ? px + bw + 3 : px - 3} y1={ya} x2={dir > 0 ? bx - 3 : bx + bw + 3} y2={ya} />;
        }
        return <Arrow key={i} x1={px + bw / 2} y1={py + bh + 3} x2={bx + bw / 2} y2={by - 3} />;
      })}
    </g>
  );
}

/**
 * Gantt chart. tasks: [{ name, start, dur, c, crit }] in time units; total: span.
 * Draws a time axis with `unit` labels every `step`.
 */
export function Gantt({ x = 150, y = 30, w = 330, rowH = 30, tasks, total, step = 1, unit = 'sem.', s = 13 }) {
  const X = v => x + (w * v) / total;
  const ticks = [];
  for (let v = 0; v <= total; v += step) ticks.push(v);
  const h = rowH * tasks.length;
  return (
    <g>
      {ticks.map(v => (
        <g key={v}>
          <Line x1={X(v)} y1={y - 6} x2={X(v)} y2={y + h} c="grey" w={0.8} o={0.45} />
          <Text x={X(v)} y={y - 10} a="middle" s={11} c="mute">{String(v)}</Text>
        </g>
      ))}
      <Text x={x + w + 6} y={y - 10} s={11} c="mute">{unit}</Text>
      {tasks.map((t, i) => {
        const yy = y + i * rowH;
        const c = t.c || (t.crit ? 'red' : 'ink');
        return (
          <g key={t.name}>
            <Text x={x - 8} y={yy + rowH / 2 + 5} a="end" s={s}>{t.name}</Text>
            {t.dur > 0
              ? <Rect x={X(t.start)} y={yy + 6} w={X(t.start + t.dur) - X(t.start)} h={rowH - 12} rx={4} c={c} sw={1.8} fill={`~${c}`} />
              : <Poly pts={[[X(t.start), yy + 6], [X(t.start) + 8, yy + rowH / 2], [X(t.start), yy + rowH - 6], [X(t.start) - 8, yy + rowH / 2]]} c={c} w={1.8} fill={c} />}
          </g>
        );
      })}
    </g>
  );
}

/** Vertical bar chart inside a frame. bars: [{ label, v, c, txt }]. */
export function Bars({ x = 60, y = 24, w = 400, h = 200, max, bars, unit = '', s = 13, bw = 0.6, ticks }) {
  const top = max ?? Math.max(...bars.map(b => b.v)) * 1.15;
  const slot = w / bars.length;
  const Y = v => y + h - (h * v) / top;
  return (
    <g>
      {(ticks || []).map(v => (
        <g key={v}>
          <Line x1={x} y1={Y(v)} x2={x + w} y2={Y(v)} c="grey" w={0.8} o={0.4} />
          <Text x={x - 6} y={Y(v) + 4} a="end" s={11} c="mute">{String(v)}</Text>
        </g>
      ))}
      <Line x1={x} y1={y + h} x2={x + w} y2={y + h} c="txt" w={1.6} />
      <Line x1={x} y1={y - 8} x2={x} y2={y + h} c="txt" w={1.6} />
      {unit && <Text x={x + 6} y={y - 10} s={12} c="mute">{unit}</Text>}
      {bars.map((b, i) => {
        const bx = x + slot * i + (slot * (1 - bw)) / 2;
        const c = b.c || 'ink';
        return (
          <g key={b.label}>
            <Rect x={bx} y={Y(b.v)} w={slot * bw} h={y + h - Y(b.v)} c={c} sw={2} fill={`~${c}`} />
            <Text x={bx + (slot * bw) / 2} y={Y(b.v) - 6} a="middle" s={s} c={c} b>{b.txt ?? String(b.v)}</Text>
            <Text x={bx + (slot * bw) / 2} y={y + h + 17} a="middle" s={s - 1}>{b.label}</Text>
          </g>
        );
      })}
    </g>
  );
}

/**
 * Grid of cells: rows × cols with optional fills, for matrices and tables.
 * cells[r][c] = text or { t, c, fill }; header row/col styled bold.
 */
export function Grid({ x, y, cw, rh, cells, s = 13, head = true, colW }) {
  const widths = colW || cells[0].map(() => cw);
  const xs = widths.reduce((acc, ww) => [...acc, acc[acc.length - 1] + ww], [x]);
  return (
    <g>
      {cells.map((row, r) => row.map((cell, ci) => {
        const obj = typeof cell === 'object' && cell !== null ? cell : { t: cell };
        const isHead = head && (r === 0 || ci === 0);
        return (
          <g key={`${r}-${ci}`}>
            <Rect x={xs[ci]} y={y + r * rh} w={widths[ci]} h={rh} c="grey" sw={1.2} fill={obj.fill || (isHead ? '~ink' : 'none')} />
            {obj.t !== undefined && obj.t !== '' && (
              <Text x={xs[ci] + widths[ci] / 2} y={y + r * rh + rh / 2 + s * 0.35} a="middle" s={s} b={isHead || obj.b} c={obj.c || (isHead ? 'ink' : 'txt')} halo={false}>{String(obj.t)}</Text>
            )}
          </g>
        );
      }))}
    </g>
  );
}

// ── Small scene icons (line art) ────────────────────────────────────────────

/** Standing person, feet at (x, y), height ≈ 46·k. */
export function Person({ x, y, k = 1, c = 'txt', helmet }) {
  const h = 46 * k;
  return (
    <g>
      <Circle cx={x} cy={y - h + 6 * k} r={6 * k} c={c} sw={1.8} fill="paper" />
      {helmet && <Path d={`M${x - 7 * k},${y - h + 5 * k} a${7 * k},${7 * k} 0 0 1 ${14 * k},0 z`} c="orange" w={1.5} fill="orange" />}
      <Line x1={x} y1={y - h + 12 * k} x2={x} y2={y - 16 * k} c={c} w={2} />
      <Line x1={x} y1={y - 16 * k} x2={x - 7 * k} y2={y} c={c} w={2} />
      <Line x1={x} y1={y - 16 * k} x2={x + 7 * k} y2={y} c={c} w={2} />
      <Line x1={x - 9 * k} y1={y - h + 22 * k} x2={x + 9 * k} y2={y - h + 22 * k} c={c} w={2} />
    </g>
  );
}

/** House with pitched roof, ground-floor left corner at (x, y). */
export function House({ x, y, w = 70, h = 46, c = 'ink' }) {
  return (
    <g>
      <Rect x={x} y={y - h} w={w} h={h} c={c} sw={2} fill={`~${c}`} />
      <Poly pts={[[x - 6, y - h], [x + w / 2, y - h - w * 0.42], [x + w + 6, y - h]]} c="red" w={2.2} fill="~red" />
      <Rect x={x + w * 0.4} y={y - h * 0.55} w={w * 0.2} h={h * 0.55} c={c} sw={1.6} />
      <Rect x={x + w * 0.1} y={y - h * 0.75} w={w * 0.18} h={h * 0.25} c={c} sw={1.4} />
      <Rect x={x + w * 0.72} y={y - h * 0.75} w={w * 0.18} h={h * 0.25} c={c} sw={1.4} />
    </g>
  );
}

/** Multi-storey building, base left corner at (x, y). */
export function Building({ x, y, w = 80, floors = 5, fh = 22, c = 'ink' }) {
  const wins = [];
  for (let f = 0; f < floors; f++) {
    for (let k = 0; k < 3; k++) wins.push(<Rect key={`${f}-${k}`} x={x + 10 + k * ((w - 20) / 3)} y={y - (f + 1) * fh + 6} w={(w - 20) / 3 - 8} h={fh - 12} c={c} sw={1.2} />);
  }
  return <g><Rect x={x} y={y - floors * fh} w={w} h={floors * fh} c={c} sw={2} fill={`~${c}`} />{wins}</g>;
}

/** Deciduous tree, trunk base at (x, y). */
export function Tree({ x, y, k = 1 }) {
  return (
    <g>
      <Line x1={x} y1={y} x2={x} y2={y - 22 * k} c="soil" w={3} />
      <Circle cx={x} cy={y - 34 * k} r={15 * k} c="green" sw={2} fill="~green" />
    </g>
  );
}

/** Car seen from the side, wheels on y. */
export function Car({ x, y, w = 54, c = 'ink' }) {
  return (
    <g>
      <Path d={`M${x},${y - 7} v-11 l${w * 0.18},-3 l${w * 0.14},-11 h${w * 0.36} l${w * 0.14},11 l${w * 0.18},3 v11 z`} c={c} w={1.8} fill={`~${c}`} />
      <Circle cx={x + w * 0.22} cy={y - 5} r={5} c={c} sw={1.8} fill="paper" />
      <Circle cx={x + w * 0.78} cy={y - 5} r={5} c={c} sw={1.8} fill="paper" />
    </g>
  );
}

/** Truck, wheels on y. */
export function Truck({ x, y, w = 90, c = 'ink' }) {
  return (
    <g>
      <Rect x={x} y={y - 38} w={w * 0.68} h={30} c={c} sw={1.8} fill={`~${c}`} />
      <Path d={`M${x + w * 0.7},${y - 8} v-24 h${w * 0.18} l${w * 0.12},12 v12 z`} c={c} w={1.8} fill={`~${c}`} />
      {[0.14, 0.36, 0.84].map(t => <Circle key={t} cx={x + w * t} cy={y - 5} r={6} c={c} sw={1.8} fill="paper" />)}
    </g>
  );
}

/** Tower crane, mast base at (x, y). */
export function Crane({ x, y, h = 150, jib = 140, c = 'orange' }) {
  return (
    <g>
      <Rect x={x - 6} y={y - h} w={12} h={h} c={c} sw={1.8} />
      {Array.from({ length: Math.floor(h / 16) }, (_, i) => <Line key={i} x1={x - 6} y1={y - i * 16} x2={x + 6} y2={y - (i + 1) * 16} c={c} w={1} />)}
      <Line x1={x - jib * 0.3} y1={y - h} x2={x + jib} y2={y - h} c={c} w={2.4} />
      <Line x1={x} y1={y - h - 22} x2={x + jib} y2={y - h} c={c} w={1.2} />
      <Line x1={x} y1={y - h - 22} x2={x - jib * 0.3} y2={y - h} c={c} w={1.2} />
      <Rect x={x - jib * 0.3} y={y - h} w={18} h={12} c="grey" sw={1.4} fill="~grey" />
      <Line x1={x + jib * 0.7} y1={y - h} x2={x + jib * 0.7} y2={y - h + 40} c="txt" w={1.2} />
    </g>
  );
}

/** Pipe drawn as a double line with flow arrow, from (x1,y1) to (x2,y2). */
export function Pipe({ x1, y1, x2, y2, d = 10, c = 'water', flow = true }) {
  const ang = Math.atan2(y2 - y1, x2 - x1);
  const nx = (-Math.sin(ang) * d) / 2;
  const ny = (Math.cos(ang) * d) / 2;
  return (
    <g>
      <Poly pts={[[x1 + nx, y1 + ny], [x2 + nx, y2 + ny], [x2 - nx, y2 - ny], [x1 - nx, y1 - ny]]} c={c} w={1.8} fill={`~${c}`} />
      {flow && <Arrow x1={x1 + (x2 - x1) * 0.4} y1={y1 + (y2 - y1) * 0.4} x2={x1 + (x2 - x1) * 0.6} y2={y1 + (y2 - y1) * 0.6} c={c} w={1.6} hs={7} />}
    </g>
  );
}

/** Number badge (circled step number) at (x, y). */
export function Badge({ x, y, n, c = 'red', r = 11 }) {
  return (
    <g>
      <Circle cx={x} cy={y} r={r} c={c} sw={2} fill="paper" />
      <Text x={x} y={y + 5} a="middle" s={13} b c={c} halo={false}>{String(n)}</Text>
    </g>
  );
}

// Every primitive is available from this module too, so plate files need a single import.
export * from './ink.jsx';
