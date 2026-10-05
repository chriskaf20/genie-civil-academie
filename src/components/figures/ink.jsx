// Drawing primitives for the lesson plates ("planches").
// Coordinates are SVG user units (plates are usually 500 wide). Colours are tokens
// resolved to CSS variables, so the same drawing works on paper (light) and board (dark):
//   ink (blue marker), red, txt, mute, green, orange, water, soil, grey, violet
// Fills accept: 'none', a token ('ink'), a soft token ('~ink'), or a pattern ('pat:soil').
import { createContext, useContext } from 'react';
import { parseLabel } from '../../utils/figtext.js';

export const FigContext = createContext('fig');

const TOKENS = ['ink', 'red', 'txt', 'mute', 'green', 'orange', 'water', 'soil', 'grey', 'violet', 'paper'];
export const col = c => (TOKENS.includes(c) ? `var(--f-${c})` : c);
const soft = c => (TOKENS.includes(c) ? `var(--f-${c}-soft)` : c);

function usePaint() {
  const id = useContext(FigContext);
  return fill => {
    if (!fill || fill === 'none') return 'none';
    if (fill.startsWith('pat:')) return `url(#${id}-${fill.slice(4)})`;
    if (fill.startsWith('~')) return soft(fill.slice(1));
    return col(fill);
  };
}

const strokeStyle = (c, w, dash, o) => ({
  stroke: col(c), strokeWidth: w, strokeDasharray: dash, strokeLinecap: 'round', strokeLinejoin: 'round', fill: 'none', opacity: o,
});

const toPts = pts => (typeof pts === 'string' ? pts : pts.map(p => p.join(',')).join(' '));
const rad = d => (d * Math.PI) / 180;

// ── Basic shapes ─────────────────────────────────────────────────────────────

export function Line({ x1, y1, x2, y2, c = 'ink', w = 2.2, dash, o }) {
  return <line x1={x1} y1={y1} x2={x2} y2={y2} style={strokeStyle(c, w, dash, o)} />;
}

/** Polyline, or polygon when `close` or a fill is given. */
export function Poly({ pts, c = 'ink', w = 2.2, fill, close, dash, o, bg }) {
  const paint = usePaint();
  const points = toPts(pts);
  const closed = close || (fill && fill !== 'none');
  const Tag = closed ? 'polygon' : 'polyline';
  return (
    <>
      {bg && <polygon points={points} style={{ fill: paint(bg), stroke: 'none', opacity: o }} />}
      <Tag points={points} style={{ ...strokeStyle(c, w, dash, o), fill: closed ? paint(fill) : 'none', stroke: w ? col(c) : 'none' }} />
    </>
  );
}

export function Path({ d, c = 'ink', w = 2.2, fill, dash, o, bg }) {
  const paint = usePaint();
  return (
    <>
      {bg && <path d={d} style={{ fill: paint(bg), stroke: 'none', opacity: o }} />}
      <path d={d} style={{ ...strokeStyle(c, w, dash, o), fill: paint(fill), stroke: w ? col(c) : 'none' }} />
    </>
  );
}

export function Rect({ x, y, w, h, c = 'ink', sw = 2, fill, bg, rx = 0, dash, o }) {
  const paint = usePaint();
  return (
    <>
      {bg && <rect x={x} y={y} width={w} height={h} rx={rx} style={{ fill: paint(bg), stroke: 'none', opacity: o }} />}
      <rect x={x} y={y} width={w} height={h} rx={rx} style={{ ...strokeStyle(c, sw, dash, o), fill: paint(fill), stroke: sw ? col(c) : 'none' }} />
    </>
  );
}

export function Circle({ cx, cy, r, c = 'ink', sw = 2, fill, dash, o }) {
  const paint = usePaint();
  return <circle cx={cx} cy={cy} r={r} style={{ ...strokeStyle(c, sw, dash, o), fill: paint(fill), stroke: sw ? col(c) : 'none' }} />;
}

/** Filled dot (rebar, node, measured point). */
export function Dot({ x, y, r = 4, c = 'ink', ring }) {
  return (
    <>
      <circle cx={x} cy={y} r={r} style={{ fill: col(c) }} />
      {ring && <circle cx={x} cy={y} r={r + 3} style={strokeStyle(c, 1.4)} />}
    </>
  );
}

// ── Text ─────────────────────────────────────────────────────────────────────

/**
 * Handwritten label. Supports `x_i`, `x_{ij}`, `x^2`, and '\n' for new lines.
 * a: 'start' | 'middle' | 'end'. rot: degrees around (x, y).
 */
export function Text({ x, y, children, s = 16, c = 'txt', a = 'start', b, rot, it, o, lh = 1.25, font, mid, halo = true }) {
  // JSX like `T = {T} ans` arrives as an array of parts.
  const str = Array.isArray(children) ? children.join('') : String(children ?? '');
  const lines = str.split('\n');
  return (
    <text
      x={x}
      y={y}
      textAnchor={a}
      transform={rot ? `rotate(${rot} ${x} ${y})` : undefined}
      style={{
        fill: col(c), fontSize: s, fontWeight: b ? 700 : 400, fontStyle: it ? 'italic' : undefined,
        fontFamily: font === 'sans' ? 'var(--f-sans)' : 'var(--f-font)', opacity: o,
        dominantBaseline: mid ? 'central' : undefined,
        // Paper-coloured outline behind the glyphs keeps labels readable over hatching and lines.
        ...(halo ? { paintOrder: 'stroke', stroke: 'var(--f-paper)', strokeWidth: Math.max(2.5, s * 0.24), strokeLinejoin: 'round' } : {}),
      }}
    >
      {lines.map((line, i) => (
        <tspan key={i} x={x} dy={i ? `${lh}em` : 0}>{runsOf(line, s)}</tspan>
      ))}
    </text>
  );
}

function runsOf(line, s) {
  const out = [];
  let offset = 0;
  parseLabel(line).forEach((run, i) => {
    const target = run.shift === 'sub' ? 0.3 * s : run.shift === 'sup' ? -0.45 * s : 0;
    const dy = target - offset;
    offset = target;
    out.push(
      <tspan key={i} dy={dy || undefined} style={run.shift ? { fontSize: 0.68 * s } : undefined}>{run.text}</tspan>,
    );
  });
  if (offset) out.push(<tspan key="reset" dy={-offset}>{'​'}</tspan>);
  return out;
}

// ── Arrows & dimensions ──────────────────────────────────────────────────────

function head(x, y, ang, size) {
  const half = size * 0.42;
  const bx = x - size * Math.cos(ang);
  const by = y - size * Math.sin(ang);
  const nx = -Math.sin(ang) * half;
  const ny = Math.cos(ang) * half;
  return `${x},${y} ${bx + nx},${by + ny} ${bx - nx},${by - ny}`;
}

/** Straight arrow from (x1, y1) to (x2, y2). `both` adds a head at the start. */
export function Arrow({ x1, y1, x2, y2, c = 'ink', w = 2.2, hs = 10, both, dash, o }) {
  const ang = Math.atan2(y2 - y1, x2 - x1);
  const back = hs * 0.75;
  const sx = both ? x1 + Math.cos(ang) * back : x1;
  const sy = both ? y1 + Math.sin(ang) * back : y1;
  return (
    <g style={{ opacity: o }}>
      <line x1={sx} y1={sy} x2={x2 - Math.cos(ang) * back} y2={y2 - Math.sin(ang) * back} style={strokeStyle(c, w, dash)} />
      <polygon points={head(x2, y2, ang, hs)} style={{ fill: col(c) }} />
      {both && <polygon points={head(x1, y1, ang + Math.PI, hs)} style={{ fill: col(c) }} />}
    </g>
  );
}

/**
 * Dimension line between two points, drawn `off` units away along the normal,
 * with extension lines and the label on side 1 (above / left) or -1.
 */
export function Dim({ x1, y1, x2, y2, label, off = 0, c = 'txt', s = 15, side = 1, hs = 8, lc, gap }) {
  const ang = Math.atan2(y2 - y1, x2 - x1);
  const nx = -Math.sin(ang);
  const ny = Math.cos(ang);
  const ax = x1 + nx * off;
  const ay = y1 + ny * off;
  const bx = x2 + nx * off;
  const by = y2 + ny * off;
  const sign = off >= 0 ? 1 : -1;
  const over = off ? 5 * sign : 0;
  // Text reads left→right or bottom→top; side 1 puts it on the text's "up" side.
  let deg = (ang * 180) / Math.PI;
  if (deg >= 90) deg -= 180;
  if (deg < -90) deg += 180;
  const d = gap ?? s * 0.85;
  const mx = (ax + bx) / 2 + Math.sin(rad(deg)) * side * d;
  const my = (ay + by) / 2 - Math.cos(rad(deg)) * side * d;
  return (
    <g>
      {off !== 0 && (
        <>
          <Line x1={x1} y1={y1} x2={ax + nx * over} y2={ay + ny * over} c={c} w={1} o={0.7} />
          <Line x1={x2} y1={y2} x2={bx + nx * over} y2={by + ny * over} c={c} w={1} o={0.7} />
        </>
      )}
      <Arrow x1={ax} y1={ay} x2={bx} y2={by} c={c} w={1.4} hs={hs} both />
      {label && (
        <Text x={mx} y={my} a="middle" s={s} c={lc || c} rot={Math.abs(deg) > 0.5 ? deg : undefined} mid>{label}</Text>
      )}
    </g>
  );
}

/** Curly brace from (x1,y1) to (x2,y2), bulging to side 1 (above/left) or -1, with a label. */
export function Brace({ x1, y1, x2, y2, label, side = 1, d = 10, c = 'txt', s = 15, w = 1.6 }) {
  const ang = Math.atan2(y2 - y1, x2 - x1);
  const nx = -Math.sin(ang) * side;
  const ny = Math.cos(ang) * side;
  const mx = (x1 + x2) / 2;
  const my = (y1 + y2) / 2;
  const q = (t, k) => [x1 + (x2 - x1) * t - nx * d * k, y1 + (y2 - y1) * t - ny * d * k];
  const [ax, ay] = q(0.02, 1);
  const [bx, by] = q(0.48, 1);
  const [tx, ty] = [mx - nx * d * 2, my - ny * d * 2];
  const [cx, cy] = q(0.52, 1);
  const [ex, ey] = q(0.98, 1);
  const pathD = `M${x1},${y1} Q${ax},${ay} ${(ax + bx) / 2},${(ay + by) / 2} T${tx},${ty} M${tx},${ty} Q${cx},${cy} ${(cx + ex) / 2},${(cy + ey) / 2} T${x2},${y2}`;
  return (
    <g>
      <path d={pathD} style={strokeStyle(c, w)} />
      {label && <Text x={tx - nx * s * 0.9} y={ty - ny * s * 0.9 + s * 0.33} a="middle" s={s} c={c}>{label}</Text>}
    </g>
  );
}

/** Arc showing an angle at (cx, cy) from direction a1 to a2 (degrees, SVG frame: 0 = right, 90 = down). */
export function Angle({ cx, cy, r = 28, a1, a2, label, c = 'red', s = 15, lr = 14, w = 1.8, arrow }) {
  const p = a => [cx + r * Math.cos(rad(a)), cy + r * Math.sin(rad(a))];
  const [x1, y1] = p(a1);
  const [x2, y2] = p(a2);
  const sweep = a2 > a1 ? 1 : 0;
  const large = Math.abs(a2 - a1) > 180 ? 1 : 0;
  const mid = (a1 + a2) / 2;
  const tang = rad(a2 + (sweep ? 90 : -90));
  return (
    <g>
      <path d={`M${x1},${y1} A${r},${r} 0 ${large} ${sweep} ${x2},${y2}`} style={strokeStyle(c, w)} />
      {arrow && <polygon points={head(x2, y2, tang, 8)} style={{ fill: col(c) }} />}
      {label && (
        <Text x={cx + (r + lr) * Math.cos(rad(mid))} y={cy + (r + lr) * Math.sin(rad(mid)) + s * 0.33} a="middle" s={s} c={c}>{label}</Text>
      )}
    </g>
  );
}

/** Curved moment arrow around (x, y), from angle a1 to a2 (degrees). */
export function Moment({ x, y, r = 20, a1 = 200, a2 = -20, c = 'red', w = 2.2, label, s = 16, lx, ly }) {
  const p = a => [x + r * Math.cos(rad(a)), y + r * Math.sin(rad(a))];
  const [sx, sy] = p(a1);
  const [ex, ey] = p(a2);
  const sweep = a2 > a1 ? 1 : 0;
  const large = Math.abs(a2 - a1) > 180 ? 1 : 0;
  const tang = rad(a2 + (sweep ? 90 : -90));
  return (
    <g>
      <path d={`M${sx},${sy} A${r},${r} 0 ${large} ${sweep} ${ex},${ey}`} style={strokeStyle(c, w)} />
      <polygon points={head(ex + Math.cos(tang) * 3, ey + Math.sin(tang) * 3, tang, 10)} style={{ fill: col(c) }} />
      {label && <Text x={lx ?? x + r + 6} y={ly ?? y - r - 2} s={s} c={c}>{label}</Text>}
    </g>
  );
}

// ── Structural symbols ───────────────────────────────────────────────────────

/** Ground line with short 45° hatching below it. */
export function Ground({ x1, x2, y, c = 'mute', step = 9, len = 8, w = 1.6 }) {
  const ticks = [];
  for (let x = x1 + 4; x <= x2; x += step) ticks.push(<Line key={x} x1={x} y1={y} x2={x - len * 0.7} y2={y + len} c={c} w={1.1} />);
  return <g><Line x1={x1} y1={y} x2={x2} y2={y} c={c} w={w} />{ticks}</g>;
}

/** Pinned support (rotule): apex at (x, y). */
export function Pin({ x, y, s = 18, c = 'ink' }) {
  return (
    <g>
      <Poly pts={[[x, y], [x - s * 0.62, y + s], [x + s * 0.62, y + s]]} c={c} w={2} fill={`~${c}`} />
      <Ground x1={x - s} x2={x + s} y={y + s} />
    </g>
  );
}

/** Roller support (appui simple): apex at (x, y). */
export function Roller({ x, y, s = 18, c = 'ink' }) {
  const r = s * 0.16;
  return (
    <g>
      <Poly pts={[[x, y], [x - s * 0.62, y + s * 0.78], [x + s * 0.62, y + s * 0.78]]} c={c} w={2} fill={`~${c}`} />
      <Circle cx={x - s * 0.3} cy={y + s * 0.78 + r} r={r} c={c} sw={1.6} />
      <Circle cx={x + s * 0.3} cy={y + s * 0.78 + r} r={r} c={c} sw={1.6} />
      <Ground x1={x - s} x2={x + s} y={y + s * 0.78 + 2 * r} />
    </g>
  );
}

/** Fixed support (encastrement): wall at x, centred on y, hatched on `side`. */
export function Fixed({ x, y, h = 56, side = 'left', c = 'ink' }) {
  const dir = side === 'left' ? -1 : 1;
  const ticks = [];
  for (let yy = y - h / 2 + 4; yy <= y + h / 2; yy += 8) ticks.push(<Line key={yy} x1={x} y1={yy} x2={x + dir * 9} y2={yy + 7} c="mute" w={1.1} />);
  return <g><Line x1={x} y1={y - h / 2} x2={x} y2={y + h / 2} c={c} w={2.6} />{ticks}</g>;
}

/** Beam drawn as a thin outlined bar centred on y. */
export function Beam({ x1, x2, y, h = 9, c = 'ink', fill = '~ink' }) {
  return <Rect x={x1} y={y - h / 2} w={x2 - x1} h={h} c={c} sw={2} fill={fill} rx={1.5} />;
}

/** Hinge (rotule interne). */
export function Hinge({ x, y, r = 5, c = 'ink' }) {
  return <Circle cx={x} cy={y} r={r} c={c} sw={2} fill="paper" />;
}

/**
 * Distributed load over [x1, x2] acting down on level y. Arrow heights h1 → h2
 * (0 for a triangle end). n = number of intervals.
 */
export function Load({ x1, x2, y, h1, h2 = h1, n, c = 'ink', w = 1.7, label, s = 17, lx, ly, la, hs = 7 }) {
  const count = n ?? Math.max(2, Math.round((x2 - x1) / 26));
  const arrows = [];
  for (let i = 0; i <= count; i++) {
    const t = i / count;
    const x = x1 + (x2 - x1) * t;
    const h = h1 + (h2 - h1) * t;
    if (h > hs + 2) arrows.push(<Arrow key={i} x1={x} y1={y - h} x2={x} y2={y} c={c} w={w} hs={hs} />);
  }
  const right = h2 >= h1;
  return (
    <g>
      <Line x1={x1} y1={y - h1} x2={x2} y2={y - h2} c={c} w={w + 0.5} />
      {arrows}
      {label && (
        <Text x={lx ?? (right ? x2 + 6 : x1 - 6)} y={ly ?? y - Math.max(h1, h2) + 2} a={la ?? (right ? 'start' : 'end')} s={s} c={c}>{label}</Text>
      )}
    </g>
  );
}

/** Point force acting at (x, y); `ang` is the direction of the force (90 = downwards). */
export function Force({ x, y, len = 46, ang = 90, c = 'red', w = 2.4, label, s = 17, lx, ly, a = 'start', hs = 11 }) {
  const x1 = x - len * Math.cos(rad(ang));
  const y1 = y - len * Math.sin(rad(ang));
  return (
    <g>
      <Arrow x1={x1} y1={y1} x2={x} y2={y} c={c} w={w} hs={hs} />
      {label && <Text x={lx ?? x1 + 7} y={ly ?? y1 + 5} s={s} c={c} a={a}>{label}</Text>}
    </g>
  );
}

/** Dash-dot axis line. */
export function Axis({ x1, y1, x2, y2, c = 'mute', w = 1.2 }) {
  return <Line x1={x1} y1={y1} x2={x2} y2={y2} c={c} w={w} dash="12 4 2 4" />;
}

/** Water level symbol ▽ at (x, y) with an optional dashed level line from x1 to x2. */
export function WaterLevel({ x, y, x1, x2, c = 'water', label, s = 14 }) {
  return (
    <g>
      {x1 !== undefined && <Line x1={x1} y1={y} x2={x2} y2={y} c={c} w={1.6} dash="7 5" />}
      <Poly pts={[[x - 7, y - 11], [x + 7, y - 11], [x, y]]} c={c} w={1.6} fill="~water" />
      <Line x1={x - 6} y1={y + 4} x2={x + 6} y2={y + 4} c={c} w={1.4} />
      <Line x1={x - 3} y1={y + 8} x2={x + 3} y2={y + 8} c={c} w={1.4} />
      {label && <Text x={x + 12} y={y - 3} s={s} c={c}>{label}</Text>}
    </g>
  );
}

/** Box with centred (multi-line) label, for flow charts and plant schematics. */
export function Box({ x, y, w, h, label, c = 'ink', fill = '~ink', s = 14, rx = 8, sw = 2, tc = 'txt', b, dash }) {
  const lines = String(label ?? '').split('\n');
  const lh = s * 1.2;
  const top = y + h / 2 - ((lines.length - 1) * lh) / 2 + s * 0.33;
  return (
    <g>
      <Rect x={x} y={y} w={w} h={h} c={c} sw={sw} fill={fill} rx={rx} dash={dash} />
      {lines.map((line, i) => (
        <Text key={i} x={x + w / 2} y={top + i * lh} a="middle" s={s} c={tc} b={b} halo={false}>{line}</Text>
      ))}
    </g>
  );
}

// ── Graphs ───────────────────────────────────────────────────────────────────

/** Scales for a plot frame: returns [sx, sy]. */
export function scales({ x, y, w, h, xr, yr }) {
  return [
    v => x + ((v - xr[0]) / (xr[1] - xr[0])) * w,
    v => y + h - ((v - yr[0]) / (yr[1] - yr[0])) * h,
  ];
}

/** Points of a function sampled on [a, b], already scaled. */
export function fnPts(fn, a, b, sx, sy, n = 60) {
  return Array.from({ length: n + 1 }, (_, i) => {
    const v = a + ((b - a) * i) / n;
    return [sx(v), sy(fn(v))];
  });
}

/**
 * Axes with ticks. xt / yt: [value, label] pairs (label optional).
 * `children` may be a function (sx, sy) => elements.
 */
export function Plot({ x, y, w, h, xr = [0, 1], yr = [0, 1], xl, yl, xt = [], yt = [], grid, c = 'txt', ts = 12, ls = 15, children }) {
  const [sx, sy] = scales({ x, y, w, h, xr, yr });
  const x0 = sx(Math.max(xr[0], Math.min(0, xr[1])));
  const y0 = sy(Math.max(yr[0], Math.min(0, yr[1])));
  const tick = t => (Array.isArray(t) ? t : [t, String(t)]);
  return (
    <g>
      {grid && xt.map(t => <Line key={`gx${tick(t)[0]}`} x1={sx(tick(t)[0])} y1={y} x2={sx(tick(t)[0])} y2={y + h} c="grey" w={0.8} o={0.35} />)}
      {grid && yt.map(t => <Line key={`gy${tick(t)[0]}`} x1={x} y1={sy(tick(t)[0])} x2={x + w} y2={sy(tick(t)[0])} c="grey" w={0.8} o={0.35} />)}
      <Arrow x1={x} y1={y0} x2={x + w + 14} y2={y0} c={c} w={1.6} hs={8} />
      <Arrow x1={x0} y1={y + h} x2={x0} y2={y - 14} c={c} w={1.6} hs={8} />
      {xt.map(t => {
        const [v, lab] = tick(t);
        return (
          <g key={`xt${v}`}>
            <Line x1={sx(v)} y1={y0 - 3} x2={sx(v)} y2={y0 + 3} c={c} w={1.2} />
            {lab && <Text x={sx(v)} y={y0 + ts + 5} a="middle" s={ts} c={c}>{lab}</Text>}
          </g>
        );
      })}
      {yt.map(t => {
        const [v, lab] = tick(t);
        return (
          <g key={`yt${v}`}>
            <Line x1={x0 - 3} y1={sy(v)} x2={x0 + 3} y2={sy(v)} c={c} w={1.2} />
            {lab && <Text x={x0 - 6} y={sy(v) + ts * 0.35} a="end" s={ts} c={c}>{lab}</Text>}
          </g>
        );
      })}
      {xl && <Text x={x + w + 18} y={y0 + 5} s={ls} c={c}>{xl}</Text>}
      {yl && <Text x={x0 + 8} y={y - 14} s={ls} c={c}>{yl}</Text>}
      {typeof children === 'function' ? children(sx, sy) : children}
    </g>
  );
}
