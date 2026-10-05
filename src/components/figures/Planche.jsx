// One illustrated plate ("planche") of a lesson, styled like a hand-drawn course board:
// red numbered title, red-boxed key formula, blue drawing, handwritten notes.
import { useId } from 'react';
import '@fontsource/kalam/latin-400.css';
import '@fontsource/kalam/latin-700.css';
import { SafeInlineMath } from '../SafeMath.jsx';
import { FigContext } from './ink.jsx';

/** Hatch and texture patterns shared by every drawing (ids are unique per plate). */
function Patterns({ id }) {
  const pat = (name, size, body) => (
    <pattern id={`${id}-${name}`} width={size} height={size} patternUnits="userSpaceOnUse">{body}</pattern>
  );
  const st = (c, w = 1.1) => ({ stroke: `var(--f-${c})`, strokeWidth: w, fill: 'none', strokeLinecap: 'round' });
  const fl = c => ({ fill: `var(--f-${c})` });
  return (
    <defs>
      {pat('soil', 10, <path d="M-1,11 L11,-1" style={st('soil')} />)}
      {pat('hatch', 8, <path d="M-1,9 L9,-1" style={st('grey', 1)} />)}
      {pat('wall', 9, <path d="M-1,10 L10,-1" style={st('ink', 1)} />)}
      {pat('sand', 10, <><circle cx="2.5" cy="3" r="1" style={fl('soil')} /><circle cx="7.5" cy="7.5" r="1" style={fl('soil')} /></>)}
      {pat('gravel', 18, <><circle cx="5" cy="5" r="3" style={st('soil')} /><circle cx="13.5" cy="13" r="2.4" style={st('soil')} /></>)}
      {pat('clay', 16, <><path d="M1,5 H8" style={st('soil')} /><path d="M9,12 H15" style={st('soil')} /></>)}
      {pat('rock', 22, <path d="M0,7 L8,3 L15,9 L22,5 M2,17 L10,20 L18,14" style={st('grey')} />)}
      {pat('concrete', 20, <><circle cx="4" cy="5" r="1.2" style={fl('grey')} /><path d="M12,12 l3.5,-4.5 l2,5.5 z" style={st('grey', 1)} /><circle cx="15" cy="17" r="0.9" style={fl('grey')} /><circle cx="6" cy="15" r="0.7" style={fl('grey')} /></>)}
      {pat('insul', 12, <path d="M0,6 Q3,0 6,6 T12,6" style={st('orange', 1)} />)}
      {pat('wood', 16, <path d="M0,4 Q8,1 16,4 M0,11 Q8,14 16,11" style={st('soil', 1)} />)}
      {pat('water', 18, <path d="M0,9 q4.5,-4 9,0 t9,0" style={st('water', 1)} />)}
      {pat('grass', 14, <path d="M3,12 l1,-5 M7,12 l0,-6 M11,12 l-1,-5" style={st('green', 1)} />)}
      {pat('brick', 32, <path d="M0,8 H32 M0,16 H32 M0,24 H32 M0,32 H32 M8,0 V8 M24,8 V16 M8,16 V24 M24,24 V32" style={st('soil', 0.8)} />)}
      {pat('block', 40, <path d="M0,20 H40 M0,40 H40 M20,0 V20 M0,20 V40 M40,20 V40" style={st('grey', 0.9)} />)}
    </defs>
  );
}

/** Note line: plain text with optional $math$ segments. */
function Note({ text }) {
  const parts = String(text).split(/(\$[^$]+\$)/g).filter(Boolean);
  return (
    <li>
      {parts.map((p, i) => (p.startsWith('$') && p.endsWith('$')
        ? <span key={i} className="planche-math"><SafeInlineMath math={p.slice(1, -1)} /></span>
        : <span key={i}>{p}</span>))}
    </li>
  );
}

function Dots({ n, total }) {
  const count = Math.min(total, 9);
  return (
    <span className="planche-dots" aria-hidden="true">
      {Array.from({ length: count }, (_, i) => <span key={i} className={i < n ? 'on' : ''} />)}
    </span>
  );
}

export default function Planche({ fig, n = 1, total = 1 }) {
  const id = `f${useId().replace(/[^a-zA-Z0-9]/g, '')}`;
  const [, , vw = 500, vh = 300] = (fig.viewBox || `0 0 500 ${fig.h || 300}`).split(/\s+/).map(Number);
  const formulas = Array.isArray(fig.formula) ? fig.formula : fig.formula ? [fig.formula] : [];
  return (
    <figure className="planche" data-planche={fig.id}>
      <div className="planche-head">
        <h4 className="planche-title">{n}. {fig.title}</h4>
        <span className="planche-badge">Planche {n}/{total} <Dots n={n} total={total} /></span>
      </div>
      {formulas.length > 0 && (
        <div className="planche-formulas">
          {formulas.map(f => (
            <div key={f} className="planche-formula"><SafeInlineMath math={`\\displaystyle ${f}`} /></div>
          ))}
        </div>
      )}
      <svg
        viewBox={`0 0 ${vw} ${vh}`}
        role="img"
        aria-label={[fig.title, fig.caption].filter(Boolean).join(' — ')}
        className="planche-svg"
        style={{ maxWidth: fig.maxWidth || 680 }}
      >
        <Patterns id={id} />
        <FigContext.Provider value={id}>{fig.draw()}</FigContext.Provider>
      </svg>
      {fig.notes?.length > 0 && (
        <ul className="planche-notes">{fig.notes.map((t, i) => <Note key={i} text={t} />)}</ul>
      )}
      {fig.caption && <figcaption>Fig. {n} — {fig.caption}</figcaption>}
    </figure>
  );
}

/** Several plates in a row (one column on phones). */
export function Planches({ figs, total }) {
  if (!figs?.length) return null;
  return (
    <div className="planches">
      {figs.map(f => <Planche key={f.id} fig={f} n={f.n} total={total} />)}
    </div>
  );
}
