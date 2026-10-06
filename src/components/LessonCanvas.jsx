import { useMemo, useState } from 'react';
import DiagramViewer from './DiagramViewer.jsx';
import TrigWidget from './TrigWidget.jsx';
import BeamCalculator from './BeamCalculator.jsx';
import UnitConverter from './UnitConverter.jsx';
import SciCalc from './SciCalc.jsx';
import FormulaExplainer from './FormulaExplainer.jsx';
import StructuralSketches from './StructuralSketches.jsx';
import { SafeInlineMath, SafeBlockMath } from './SafeMath.jsx';
import { enhanceTextWithTerms } from './TechTooltip.jsx';
import ErrorBoundary from './ErrorBoundary.jsx';
import { getLessonEntries } from '../data/lesson_registry.js';
import { TECH_TERMS } from '../data/tech_terms.js';
import { useLesson } from '../hooks/useLesson.js';
import { splitMathBlocks, tokenizeInline } from '../utils/latex.js';
import { Planches } from './figures/Planche.jsx';
import { useFigures } from '../figures/index.js';
import { principlePlate } from '../figures/auto.jsx';

// Diagram types drawn by DiagramViewer. Any other lesson diagram is shown as a process flow.
const DRAWN_DIAGRAMS = new Set(['plan_coffrage', 'bim_workflow', 'topographie_nivellement', 'force_decomposition', 'rebar_beam', 'road_profile', 'soil_profile', 'bridge_structure', 'trig_interactive']);
const SKETCH_DOMAINS = new Set(['rdm', 'beton_arme', 'precontrainte', 'metal', 'bois', 'geotechnique', 'fondations']);
const TRIG_DOMAINS = new Set(['maths', 'topographie', 'physique']);
const BEAM_DOMAINS = new Set(['rdm', 'mecanique', 'structures', 'beton_arme', 'precontrainte', 'metal', 'bois', 'ponts']);

const isDrawn = type => DRAWN_DIAGRAMS.has(type);

/** Plates of the lesson shown in a given step (matched on the step key). */
const platesFor = (figs = [], key) => figs.filter(f => f.steps.includes(key));
/** Plates for the "schéma" step and the workstation's diagram tab. */
const diagramPlates = (figs = []) => platesFor(figs, 'diagrams');

// ── Rich text ────────────────────────────────────────────────────────────────

function renderTokens(tokens, keyPrefix = '') {
  return tokens.map((token, i) => {
    const key = `${keyPrefix}${i}`;
    switch (token.kind) {
      case 'math':
        return (
          <span key={key} className="inline-block px-0.5 align-baseline text-slate-900 dark:text-slate-100 font-medium">
            <SafeInlineMath math={token.value} />
          </span>
        );
      case 'bold':
        return <strong key={key} className="text-slate-900 dark:text-white font-bold">{renderTokens(token.children, `${key}-`)}</strong>;
      case 'italic':
        return <em key={key} className="italic">{renderTokens(token.children, `${key}-`)}</em>;
      case 'code':
        return <code key={key} className="bg-slate-100 dark:bg-slate-800 text-teal-700 dark:text-cyan-300 px-1.5 py-0.5 rounded text-xs mono font-semibold">{token.value}</code>;
      default:
        return <span key={key}>{enhanceTextWithTerms(token.value)}</span>;
    }
  });
}

/** One line of lesson text with $math$, **bold**, *italic*, `code` and term tooltips. */
function renderInline(text) {
  if (text === undefined || text === null || text === '') return null;
  if (typeof text === 'number') return String(text);
  if (typeof text !== 'string') return renderInline(text.text ?? text.description ?? text.title ?? '');
  return renderTokens(tokenizeInline(text));
}

const TABLE_ROW = /^\s*\|(.*)\|\s*$/;
const TABLE_SEPARATOR = /^\s*\|?\s*:?-{2,}:?\s*(\|\s*:?-{2,}:?\s*)*\|?\s*$/;
const splitCells = line => line.trim().replace(/^\||\|$/g, '').split('|').map(c => c.trim());

/** Multi-line lesson text: headings, quotes, bullet and numbered lists, Markdown tables, $$ display math. */
function RichText({ text }) {
  if (!text) return null;
  const nodes = [];
  let list = null;
  let table = null;
  const flushList = () => {
    if (!list) return;
    const Tag = list.ordered ? 'ol' : 'ul';
    nodes.push(
      <Tag key={`list-${nodes.length}`} className={`${list.ordered ? 'list-decimal' : 'list-disc'} ml-5 my-2 space-y-1.5 text-slate-700 dark:text-slate-200 text-base leading-relaxed`}>
        {list.items}
      </Tag>
    );
    list = null;
  };
  const flushTable = () => {
    if (!table) return;
    const [head, ...body] = table.hasHeader ? table.rows : [null, ...table.rows];
    nodes.push(
      <div key={`table-${nodes.length}`} className="w-full overflow-x-auto my-3 table-scroll">
        <table className="w-full text-left text-sm border border-slate-200 dark:border-slate-700/80 border-collapse">
          {head && (
            <thead className="bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-100">
              <tr>{head.map((c, i) => <th key={i} className="px-3 py-2 border border-slate-200 dark:border-slate-700/80 font-semibold">{renderInline(c)}</th>)}</tr>
            </thead>
          )}
          <tbody className="text-slate-700 dark:text-slate-200">
            {body.map((row, r) => (
              <tr key={r} className="odd:bg-white even:bg-slate-50 dark:odd:bg-slate-900 dark:even:bg-slate-800/50">
                {row.map((c, i) => <td key={i} className="px-3 py-2 border border-slate-200 dark:border-slate-700/80 align-top">{renderInline(c)}</td>)}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
    table = null;
  };
  const flushAll = () => { flushList(); flushTable(); };

  splitMathBlocks(text).forEach((part, bi) => {
    if (part.kind === 'block') {
      flushAll();
      nodes.push(
        <div key={`math-${bi}`} className="overflow-x-auto max-w-full py-2.5 my-3 math-scroll text-center">
          <SafeBlockMath math={part.value} />
        </div>
      );
      return;
    }
    part.value.split('\n').forEach((rawLine, li) => {
      const key = `${bi}-${li}`;
      const line = rawLine.trimEnd();
      if (TABLE_ROW.test(line)) {
        flushList();
        if (!table) table = { rows: [], hasHeader: false };
        if (TABLE_SEPARATOR.test(line)) table.hasHeader = table.rows.length === 1;
        else table.rows.push(splitCells(line));
        return;
      }
      flushTable();
      const bullet = line.match(/^\s*[-•]\s+(.*)$/);
      const numbered = line.match(/^\s*\d+[.)]\s+(.*)$/);
      if (bullet || numbered) {
        const ordered = Boolean(numbered);
        if (list && list.ordered !== ordered) flushList();
        if (!list) list = { ordered, items: [] };
        list.items.push(<li key={key} className="break-words">{renderInline((bullet || numbered)[1])}</li>);
        return;
      }
      flushList();
      if (line.trim() === '') return;
      if (line.startsWith('### ')) {
        nodes.push(<h4 key={key} className="text-lg font-bold text-slate-900 dark:text-white mt-5 mb-2.5 break-words">{renderInline(line.slice(4))}</h4>);
      } else if (line.startsWith('## ')) {
        nodes.push(<h3 key={key} className="text-xl font-bold text-slate-900 dark:text-white mt-6 mb-3 break-words">{renderInline(line.slice(3))}</h3>);
      } else if (line.startsWith('> ')) {
        nodes.push(
          <blockquote key={key} className="border-l-4 border-teal-500 dark:border-cyan-500 pl-4 py-2.5 my-3 text-teal-950 dark:text-cyan-100 text-base break-words bg-teal-50/60 dark:bg-slate-900/70 rounded-r-xl leading-relaxed">
            {renderInline(line.slice(2))}
          </blockquote>
        );
      } else {
        nodes.push(<p key={key} className="text-slate-700 dark:text-slate-200 text-base leading-relaxed my-2 break-words">{renderInline(line)}</p>);
      }
    });
  });
  flushAll();
  return <>{nodes}</>;
}

// ── Layout pieces ────────────────────────────────────────────────────────────

function StepHeader({ step, title, icon }) {
  return (
    <div className="flex items-center gap-3 mb-4 sm:mb-5 pb-3 border-b border-slate-100 dark:border-slate-800">
      <div className="step-badge">{step || '•'}</div>
      <span className="text-xl shrink-0" aria-hidden="true">{icon || '📌'}</span>
      <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white leading-snug">{title || 'Étape pédagogique'}</h3>
    </div>
  );
}

function Section({ children, className = '' }) {
  return (
    <section className={`rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/90 p-4 sm:p-6 card-hover animate-fade-up w-full max-w-full mx-0 overflow-hidden shadow-xs text-base ${className}`}>
      {children}
    </section>
  );
}

function FormulaBox({ math, label }) {
  if (!math) return null;
  return (
    <div className="formula-card w-full max-w-full overflow-x-auto">
      {label && <p className="text-xs text-emerald-600 dark:text-emerald-400 font-bold mb-2 uppercase tracking-wide">{label}</p>}
      <div className="overflow-x-auto max-w-full py-1 math-scroll">
        <SafeBlockMath math={math} />
      </div>
    </div>
  );
}

// ── Step renderers (one per step type) ───────────────────────────────────────

function DefinitionStep({ s }) {
  return (
    <Section>
      <StepHeader step={s.id} title={s.title} icon={s.icon} />
      <div className="space-y-4">
        <div className="flex flex-wrap gap-2.5 sm:gap-3">
          {s.fr && <span className="tag-blue">🇫🇷 {s.fr}</span>}
          {s.en && <span className="tag-orange">🇬🇧 {s.en}</span>}
        </div>
        {s.metier && (
          <div className="alert-info">
            <p className="text-xs text-teal-800 dark:text-cyan-300 font-semibold uppercase tracking-wider mb-1">💼 Utilisation métier & rôle de l'ingénieur</p>
            <p className="text-base text-slate-700 dark:text-slate-200 leading-relaxed font-medium">{renderInline(s.metier)}</p>
          </div>
        )}
        <div className="prose-custom"><RichText text={s.content} /></div>
      </div>
    </Section>
  );
}

function ContentStep({ s, className }) {
  return (
    <Section className={className}>
      <StepHeader step={s.id} title={s.title} icon={s.icon} />
      <div className="prose-custom"><RichText text={s.content} /></div>
    </Section>
  );
}

function ApplicationsStep({ s }) {
  const examples = s.examples || [];
  return (
    <Section>
      <StepHeader step={s.id} title={s.title} icon={s.icon} />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {examples.map((ex, i) => (
          <div key={ex.context || i} className="rounded-xl bg-slate-50 dark:bg-slate-800/60 p-4 border border-slate-200 dark:border-slate-700/50 shadow-2xs">
            <span className="tag-orange mb-2.5 inline-block">{ex.context || 'Pratique'}</span>
            <p className="text-base text-slate-700 dark:text-slate-200 leading-relaxed">{renderInline(ex.text)}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}

function TheoryStep({ s, lessonDiagram, domain, figs, hasPlates, total }) {
  const diagram = s.diagramType || lessonDiagram;
  if (hasPlates) {
    return (
      <Section>
        <StepHeader step={s.id} title={s.title} icon={s.icon} />
        <div className="prose-custom mb-5"><RichText text={s.content} /></div>
        <Planches figs={platesFor(figs, s.key)} total={total} />
      </Section>
    );
  }
  return (
    <Section>
      <StepHeader step={s.id} title={s.title} icon={s.icon} />
      <div className="prose-custom mb-5"><RichText text={s.content} /></div>
      {SKETCH_DOMAINS.has(domain) && (
        <StructuralSketches
          initialTab={domain === 'geotechnique' || domain === 'fondations' ? 'geotech' : 'section'}
          title="Croquis de dimensionnement — section, contraintes & axe neutre"
        />
      )}
      {isDrawn(diagram) && <DiagramViewer type={diagram} title="Schéma théorique & cotations" />}
    </Section>
  );
}

function FormulasStep({ s, lessonDiagram, domain, figs, hasPlates, total }) {
  const formulas = s.formulas || [];
  const diagram = s.diagramType || lessonDiagram;
  return (
    <Section>
      <StepHeader step={s.id} title={s.title} icon={s.icon} />
      <div className="space-y-4 mb-5 w-full max-w-full">
        {formulas.map((f, i) => (
          <FormulaExplainer
            key={f.name || i}
            name={f.name}
            latex={f.latex}
            description={f.description}
            variables={f.variables}
            ruleOfThumb={f.ruleOfThumb}
            domain={domain}
          />
        ))}
      </div>
      {hasPlates
        ? <Planches figs={platesFor(figs, s.key)} total={total} />
        : isDrawn(diagram) && <DiagramViewer type={diagram} title="Illustration des équations & sollicitations" />}
    </Section>
  );
}

function StepByStepStep({ s, figs, total }) {
  const [revealed, setRevealed] = useState([]);
  const toggle = n => setRevealed(prev => (prev.includes(n) ? prev.filter(x => x !== n) : [...prev, n]));
  const steps = s.steps_demo || [];
  return (
    <Section>
      <StepHeader step={s.id} title={s.title} icon={s.icon} />
      {s.problem && (
        <div className="alert-info mb-4">
          <p className="text-sm text-teal-900 dark:text-cyan-300 font-bold">📋 Énoncé du problème :</p>
          <p className="text-base text-slate-700 dark:text-slate-200 mt-1.5 leading-relaxed">{renderInline(s.problem)}</p>
        </div>
      )}
      <Planches figs={platesFor(figs, s.key)} total={total} />
      <ol className="space-y-2.5">
        {steps.map((step, i) => {
          const n = step.n || i + 1;
          const active = revealed.includes(n);
          return (
            <li key={n}>
              <button
                type="button"
                onClick={() => toggle(n)}
                className="w-full text-left rounded-xl border border-slate-200 dark:border-slate-700/60 bg-slate-50 dark:bg-slate-800/50 p-3.5 hover:bg-slate-100 dark:hover:bg-slate-800/80 transition-all cursor-pointer"
              >
                <span className="flex items-start gap-3">
                  <span className="step-badge shrink-0">{n}</span>
                  <span className={`text-base leading-relaxed ${active ? 'text-slate-900 dark:text-white font-semibold' : 'text-slate-700 dark:text-slate-300'}`}>
                    {renderInline(step.text)}
                  </span>
                </span>
              </button>
            </li>
          );
        })}
      </ol>
      {s.result_latex && <div className="mt-4"><FormulaBox math={s.result_latex} label="✅ Résultat & dimensionnement :" /></div>}
    </Section>
  );
}

function UnitsStep({ s }) {
  const table = s.table || [];
  return (
    <Section>
      <StepHeader step={s.id} title={s.title} icon={s.icon} />
      <div className="w-full overflow-x-auto my-4 table-scroll">
        <table className="w-full min-w-[560px] text-left text-sm border border-slate-200 dark:border-slate-700/80 rounded-xl overflow-hidden border-collapse">
          <thead>
            <tr className="border-b border-slate-200 dark:border-slate-700 bg-slate-100 dark:bg-slate-800/80">
              <th className="py-3 px-4 text-xs font-bold uppercase tracking-wider text-teal-800 dark:text-cyan-400">Grandeur</th>
              <th className="py-3 px-4 text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300">Système SI</th>
              <th className="py-3 px-4 text-xs font-bold uppercase tracking-wider text-orange-700 dark:text-orange-400">Système impérial</th>
              <th className="py-3 px-4 text-xs font-bold uppercase tracking-wider text-emerald-700 dark:text-emerald-400">Conversion & remarque</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200 dark:divide-slate-700/60 bg-white dark:bg-slate-900/50">
            {table.map((row, i) => (
              <tr key={row.grandeur || i} className={i % 2 === 0 ? 'bg-slate-50/40 dark:bg-slate-900/30' : ''}>
                <td className="py-3 px-4 text-slate-900 dark:text-white font-medium">{renderInline(row.grandeur || row.name || '-')}</td>
                <td className="py-3 px-4 text-teal-700 dark:text-cyan-300 font-semibold">{renderInline(row.si || '-')}</td>
                <td className="py-3 px-4 text-orange-700 dark:text-orange-300">{renderInline(row.imperial || '-')}</td>
                <td className="py-3 px-4 text-slate-700 dark:text-slate-300 leading-relaxed">{renderInline(row.conversion || '-')}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {s.note && (
        <div className="alert-info mt-4">
          <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed font-medium">{renderInline(s.note)}</p>
        </div>
      )}
    </Section>
  );
}

const HYPOTHESIS_STYLE = {
  warning: { box: 'alert-warning', icon: '⚠️', label: 'Attention' },
  info: { box: 'alert-info', icon: 'ℹ️', label: 'Hypothèse' },
  tip: { box: 'alert-tip', icon: '💡', label: 'Conseil' },
};

function HypothesesStep({ s }) {
  const items = s.items || [];
  return (
    <Section>
      <StepHeader step={s.id} title={s.title} icon={s.icon} />
      <ul className="space-y-3">
        {items.map((item, i) => {
          const text = typeof item === 'string' ? item : item?.text;
          const style = HYPOTHESIS_STYLE[item?.type] || HYPOTHESIS_STYLE.info;
          return (
            <li key={i} className={`${style.box} flex gap-3 items-start`}>
              <span className="shrink-0 mt-0.5" aria-label={style.label}>{style.icon}</span>
              <span className="text-base text-slate-700 dark:text-slate-200 leading-relaxed">{renderInline(text)}</span>
            </li>
          );
        })}
      </ul>
    </Section>
  );
}

function ExamplesSimpleStep({ s, figs, total }) {
  const examples = s.examples || [];
  return (
    <Section>
      <StepHeader step={s.id} title={s.title} icon={s.icon} />
      <div className="space-y-4">
        {examples.map((ex, i) => (
          <article key={ex.title || i} className="rounded-xl border border-slate-200 dark:border-slate-700/40 bg-slate-50 dark:bg-slate-800/40 p-4 sm:p-5 space-y-3">
            <h4 className="text-base font-bold text-slate-900 dark:text-white">{renderInline(ex.title)}</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
              <div>
                <p className="text-xs uppercase tracking-wide text-slate-500 dark:text-slate-400 font-semibold mb-1">Données</p>
                <p className="text-slate-800 dark:text-slate-200 leading-relaxed">{renderInline(ex.given)}</p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-wide text-slate-500 dark:text-slate-400 font-semibold mb-1">À déterminer</p>
                <p className="text-teal-800 dark:text-cyan-300 font-medium leading-relaxed">{renderInline(ex.find)}</p>
              </div>
            </div>
            <FormulaBox math={ex.solution_latex} />
            <FormulaBox math={ex.solution_latex_2} />
            {ex.result && (
              <p className="flex items-start gap-2 text-sm text-emerald-700 dark:text-emerald-300 font-semibold">
                <span aria-hidden="true">✅</span>
                <span>{renderInline(ex.result)}</span>
              </p>
            )}
          </article>
        ))}
      </div>
      <Planches figs={platesFor(figs, s.key)} total={total} />
    </Section>
  );
}

function RealExamplesStep({ s, figs, total }) {
  const examples = s.examples || [];
  return (
    <Section>
      <StepHeader step={s.id} title={s.title} icon={s.icon} />
      <div className="space-y-4">
        {examples.map((ex, i) => (
          <article key={ex.context || i} className="rounded-xl border border-slate-200 dark:border-slate-700/40 bg-slate-50 dark:bg-slate-800/30 p-4 sm:p-5 space-y-3">
            <span className="tag-orange inline-block">{renderInline(ex.context)}</span>
            <p className="text-base text-slate-700 dark:text-slate-200 leading-relaxed">{renderInline(ex.scenario)}</p>
            <FormulaBox math={ex.decomposition_latex} />
            <FormulaBox math={ex.check_latex} />
            {ex.lesson && (
              <div className="alert-tip">
                <p className="text-sm text-emerald-800 dark:text-emerald-200 leading-relaxed">💡 <strong>Leçon professionnelle :</strong> {renderInline(ex.lesson)}</p>
              </div>
            )}
          </article>
        ))}
      </div>
      <Planches figs={platesFor(figs, s.key)} total={total} />
    </Section>
  );
}

function DiagramStep({ s, lessonDiagram, figs, hasPlates, total }) {
  const items = s.diagram_description || [];
  const diagram = s.diagramType || lessonDiagram;
  return (
    <Section>
      <StepHeader step={s.id} title={s.title} icon={s.icon} />
      {/* The builder's default description only introduces the list of stages, which plates replace. */}
      {s.description && !(hasPlates && /^Les étapes clés/.test(s.description)) && (
        <div className="alert-info mb-4">
          <p className="text-base text-slate-700 dark:text-slate-200 leading-relaxed font-medium">{renderInline(s.description)}</p>
        </div>
      )}
      {hasPlates ? (
        <Planches figs={diagramPlates(figs)} total={total} />
      ) : isDrawn(diagram) ? (
        <>
          {items.length > 0 && (
            <ul className="space-y-1.5 mb-5 list-disc ml-5 text-sm text-slate-600 dark:text-slate-300">
              {items.map((d, i) => <li key={i}>{renderInline(d)}</li>)}
            </ul>
          )}
          <DiagramViewer type={diagram} title="Schéma interactif & cotations principales" />
        </>
      ) : (
        <DiagramViewer type="process_flow" items={items} title={s.title} />
      )}
    </Section>
  );
}

function MistakesStep({ s }) {
  const items = s.items || [];
  return (
    <Section>
      <StepHeader step={s.id} title={s.title} icon={s.icon} />
      <div className="space-y-4">
        {items.map((item, i) => (
          <div key={i} className="rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700/50 p-4 space-y-2.5 shadow-2xs">
            <p className="flex gap-2.5 items-start text-base text-rose-700 dark:text-rose-200 font-semibold leading-relaxed">
              <span aria-hidden="true">❌</span>
              <span>{renderInline(item.mistake)}</span>
            </p>
            {item.trap && (
              <div className="alert-warning">
                <p className="text-sm text-orange-900 dark:text-orange-200">⚠️ <strong>Piège :</strong> {renderInline(item.trap)}</p>
              </div>
            )}
            {item.fix && (
              <div className="alert-tip">
                <p className="text-sm text-emerald-900 dark:text-emerald-200">✅ <strong>Règle de l'art :</strong> {renderInline(item.fix)}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </Section>
  );
}

function TipsStep({ s }) {
  return (
    <Section>
      <StepHeader step={s.id} title={s.title} icon={s.icon} />
      <ul className="space-y-2.5">
        {(s.tips || []).map((tip, i) => (
          <li key={i} className="flex gap-3 items-start rounded-xl bg-emerald-50/70 dark:bg-emerald-950/20 border border-emerald-200 dark:border-emerald-900/50 p-3.5">
            <span className="text-emerald-600 dark:text-emerald-400 shrink-0 text-lg" aria-hidden="true">💡</span>
            <span className="text-base text-slate-800 dark:text-slate-200 leading-relaxed font-medium">{renderInline(tip)}</span>
          </li>
        ))}
      </ul>
    </Section>
  );
}

function NormsStep({ s }) {
  return (
    <Section>
      <StepHeader step={s.id} title={s.title} icon={s.icon} />
      <div className="space-y-2.5 w-full">
        {(s.norms || []).map((n, i) => (
          <div key={n.code || i} className="flex flex-col sm:flex-row sm:items-center gap-2.5 sm:gap-3.5 rounded-xl bg-blue-50/70 dark:bg-slate-800/80 border border-blue-200/80 dark:border-slate-700 p-3.5 w-full max-w-full overflow-hidden shadow-2xs">
            <span className="tag-blue shrink-0 self-start text-xs font-mono font-bold px-2.5 py-1">{n.code || 'Norme'}</span>
            <p className="text-base text-slate-800 dark:text-slate-200 leading-relaxed flex-1 min-w-0 break-words">{renderInline(n.description)}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}

function ExercisesStep({ s, onOpenCalculator }) {
  const [answers, setAnswers] = useState({});
  const [revealed, setRevealed] = useState({});
  const exercises = s.exercises || [];
  const difficultyTag = d => (d === 'Facile' ? 'tag-green' : d === 'Moyen' ? 'tag-blue' : 'tag-orange');

  return (
    <Section>
      <StepHeader step={s.id} title={s.title} icon={s.icon} />
      <div className="flex justify-end mb-3">
        <button
          type="button"
          onClick={onOpenCalculator}
          className="flex items-center gap-2 text-xs bg-slate-100 hover:bg-violet-100 border border-violet-300 text-violet-700 dark:bg-slate-800 dark:hover:bg-violet-600/20 dark:border-violet-500/30 dark:text-violet-300 px-3.5 py-2 rounded-xl transition-all shadow-sm cursor-pointer"
        >
          🧮 Calculatrice scientifique
        </button>
      </div>
      <div className="space-y-5">
        {exercises.map((ex, i) => {
          const exId = ex.id || `ex-${i}`;
          return (
            <div key={exId} className="rounded-xl border border-slate-200 dark:border-slate-700/50 bg-slate-50 dark:bg-slate-800/30 p-4 sm:p-5">
              <div className="flex items-start gap-3 mb-3">
                <div className="step-badge shrink-0">{ex.number || i + 1}</div>
                <div className="min-w-0">
                  <span className={`${difficultyTag(ex.difficulty)} mb-2 inline-block`}>{ex.difficulty || 'Exercice'}</span>
                  <p className="text-base text-slate-800 dark:text-slate-200 leading-relaxed font-medium">{renderInline(ex.text)}</p>
                </div>
              </div>
              {ex.hint && (
                <div className="alert-info mb-3">
                  <p className="text-sm text-teal-800 dark:text-cyan-300 font-medium">💡 Indice : {renderInline(ex.hint)}</p>
                </div>
              )}
              <label className="sr-only" htmlFor={`answer-${exId}`}>Votre réponse à l'exercice {ex.number || i + 1}</label>
              <textarea
                id={`answer-${exId}`}
                placeholder="Écrivez votre raisonnement et votre résultat…"
                value={answers[exId] || ''}
                onChange={e => setAnswers(prev => ({ ...prev, [exId]: e.target.value }))}
                className="w-full rounded-xl border border-slate-200 bg-white dark:border-slate-700 dark:bg-slate-900 px-3.5 py-2.5 text-base text-slate-900 dark:text-slate-200 placeholder:text-slate-400 min-h-20 resize-y shadow-inner font-mono"
              />
              <button
                type="button"
                onClick={() => setRevealed(prev => ({ ...prev, [exId]: !prev[exId] }))}
                aria-expanded={Boolean(revealed[exId])}
                className="mt-3 text-xs bg-slate-100 hover:bg-slate-200 border border-slate-300 text-slate-700 dark:bg-slate-800 dark:hover:bg-slate-700 dark:border-slate-600 dark:text-slate-300 px-3.5 py-2 rounded-lg transition-colors font-medium shadow-sm cursor-pointer"
              >
                {revealed[exId] ? 'Masquer la correction' : '📋 Voir la correction détaillée'}
              </button>
              {revealed[exId] && (
                <div className="mt-4 space-y-2.5 animate-fade-up">
                  <FormulaBox math={ex.answer_latex} label="✅ Correction :" />
                  <FormulaBox math={ex.answer_latex_2} />
                  {ex.answer_text && (
                    <p className="text-base text-emerald-800 dark:text-emerald-300 font-medium break-words">{renderInline(ex.answer_text)}</p>
                  )}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </Section>
  );
}

function QuizStep({ s, bestScore, onScore }) {
  const [answers, setAnswers] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const questions = (s.questions || []).map((q, i) => ({ ...q, id: q.id ?? `q${i + 1}` }));
  const score = questions.filter(q => answers[q.id] === q.correct).length;
  const pct = questions.length ? Math.round((score / questions.length) * 100) : 0;

  const submit = () => {
    setSubmitted(true);
    onScore?.(pct);
  };

  return (
    <Section>
      <StepHeader step={s.id} title={s.title} icon={s.icon} />
      {typeof bestScore === 'number' && !submitted && (
        <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">🏅 Meilleur score enregistré : <strong>{bestScore}%</strong></p>
      )}
      {submitted && questions.length > 0 && (
        <div className={`rounded-xl p-4 mb-5 ${pct >= 80 ? 'alert-tip' : 'alert-warning'}`} role="status">
          <p className="text-lg font-bold text-slate-900 dark:text-white">
            {pct >= 80 ? '🏆' : pct >= 50 ? '📈' : '📚'} Score : {score}/{questions.length} ({pct}%)
          </p>
          <p className="text-base mt-1.5 text-slate-700 dark:text-slate-200 leading-relaxed">
            {pct === 100 ? 'Excellent ! Toutes les notions du module sont maîtrisées.'
              : pct >= 80 ? 'Très bien ! Le quiz est validé (≥ 80 %).'
                : pct >= 50 ? 'Bonne base. Relisez les explications des questions manquées.'
                  : 'Relisez les étapes clés de la leçon puis refaites le quiz.'}
          </p>
        </div>
      )}
      <div className="space-y-5">
        {questions.map((q, qi) => {
          const chosen = answers[q.id];
          return (
            <fieldset key={q.id || qi} className="rounded-xl border border-slate-200 dark:border-slate-700/50 bg-slate-50 dark:bg-slate-800/30 p-4 sm:p-5 shadow-sm">
              <legend className="sr-only">Question {qi + 1}</legend>
              <p className="text-base font-bold text-slate-900 dark:text-white mb-3.5">
                <span className="text-teal-600 dark:text-cyan-400 mr-2">Q{qi + 1}.</span>
                {renderInline(q.question)}
              </p>
              <div className="space-y-2.5">
                {(q.options || []).map(opt => {
                  let cls = 'quiz-option rounded-xl border border-slate-200 dark:border-slate-700/50 bg-white dark:bg-slate-800/50 px-4 py-3 text-base text-slate-700 dark:text-slate-300 w-full text-left shadow-2xs transition-all cursor-pointer';
                  if (submitted) {
                    if (opt.id === q.correct) cls += ' selected-correct';
                    else if (opt.id === chosen) cls += ' selected-incorrect';
                  } else if (chosen === opt.id) {
                    cls += ' bg-teal-50 border-teal-500 text-teal-900 dark:bg-teal-500/20 dark:border-cyan-500 dark:text-cyan-200 font-bold';
                  }
                  return (
                    <button
                      type="button"
                      key={opt.id}
                      onClick={() => !submitted && setAnswers(prev => ({ ...prev, [q.id]: opt.id }))}
                      className={cls}
                      disabled={submitted}
                      aria-pressed={chosen === opt.id}
                    >
                      <span className="font-mono text-slate-400 dark:text-slate-500 mr-2.5">{String(opt.id).toUpperCase()})</span>
                      {renderInline(opt.text)}
                    </button>
                  );
                })}
              </div>
              {submitted && q.explanation && (
                <div className="mt-3.5 text-sm alert-info">
                  <p className="text-slate-800 dark:text-slate-100">💡 <strong>Explication :</strong> {renderInline(q.explanation)}</p>
                </div>
              )}
            </fieldset>
          );
        })}
      </div>
      <div className="mt-5">
        {!submitted ? (
          <button
            type="button"
            onClick={submit}
            disabled={Object.keys(answers).length === 0}
            className="w-full sm:w-auto bg-teal-600 hover:bg-teal-700 disabled:opacity-50 disabled:cursor-not-allowed text-white font-bold px-6 py-3 rounded-xl transition-all shadow-md cursor-pointer"
          >
            Valider mes réponses
          </button>
        ) : (
          <button
            type="button"
            onClick={() => { setAnswers({}); setSubmitted(false); }}
            className="w-full sm:w-auto bg-slate-200 hover:bg-slate-300 dark:bg-slate-700 dark:hover:bg-slate-600 text-slate-900 dark:text-white font-bold px-6 py-3 rounded-xl transition-all cursor-pointer"
          >
            Recommencer le quiz
          </button>
        )}
      </div>
    </Section>
  );
}

function ExamStep({ s }) {
  return (
    <Section>
      <StepHeader step={s.id} title={s.title} icon={s.icon} />
      <ol className="space-y-3">
        {(s.questions || []).map((q, i) => (
          <li key={i} className="flex gap-3 rounded-xl bg-amber-50/50 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-900/50 p-4">
            <span className="step-badge shrink-0">{i + 1}</span>
            <span className="text-base text-slate-800 dark:text-slate-200 leading-relaxed">{renderInline(q)}</span>
          </li>
        ))}
      </ol>
      <div className="alert-info mt-4">
        <p className="text-sm text-slate-700 dark:text-slate-300">🎓 Questions typiques d'un examen de licence ou de master en génie civil. Rédigez une réponse structurée : définitions, hypothèses, formules, application numérique, conclusion.</p>
      </div>
    </Section>
  );
}

function InterviewStep({ s }) {
  const [revealed, setRevealed] = useState({});
  return (
    <Section>
      <StepHeader step={s.id} title={s.title} icon={s.icon} />
      <div className="space-y-4">
        {(s.questions || []).map((q, i) => (
          <div key={i} className="rounded-xl border border-slate-200 dark:border-slate-700/50 bg-slate-50 dark:bg-slate-800/40 p-4 sm:p-5">
            <p className="flex items-start gap-3 mb-2.5 text-base font-bold text-slate-900 dark:text-white leading-snug">
              <span aria-hidden="true">👔</span>
              <span>{renderInline(q.question)}</span>
            </p>
            <button
              type="button"
              onClick={() => setRevealed(p => ({ ...p, [i]: !p[i] }))}
              aria-expanded={Boolean(revealed[i])}
              className="text-xs text-teal-700 dark:text-cyan-400 hover:underline font-bold cursor-pointer"
            >
              {revealed[i] ? 'Masquer la piste de réponse' : '💡 Voir la piste de réponse attendue'}
            </button>
            {revealed[i] && (
              <div className="alert-tip mt-3 animate-fade-up">
                <p className="text-base text-slate-800 dark:text-slate-200 leading-relaxed">{renderInline(q.answer_hint)}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </Section>
  );
}

function PracticalStep({ s, lessonDiagram, figs, hasPlates, total }) {
  const resolutions = Object.keys(s)
    .filter(k => /^resolution_latex_\d+$/.test(k) && s[k])
    .sort((a, b) => Number(a.split('_').pop()) - Number(b.split('_').pop()))
    .map(k => s[k]);
  const [shown, setShown] = useState(1);
  const allShown = shown >= resolutions.length;
  const diagram = s.diagramType || lessonDiagram;

  return (
    <Section>
      <StepHeader step={s.id} title={s.title} icon={s.icon} />
      {s.scenario && <p className="tag-orange inline-block mb-3 leading-relaxed whitespace-normal">{renderInline(s.scenario)}</p>}
      {s.description && <div className="alert-info mb-4"><RichText text={s.description} /></div>}
      <ol className="space-y-3 mb-4">
        {resolutions.slice(0, shown + 1).map((latex, i) => (
          <li key={i} className="w-full max-w-full">
            <p className="flex items-center gap-2 mb-1.5 text-xs text-slate-500 dark:text-slate-400 font-semibold uppercase tracking-wide">
              <span className="step-badge">{i + 1}</span> Étape de résolution {i + 1}
            </p>
            {i < shown ? (
              <FormulaBox math={latex} />
            ) : (
              i === shown && (
                <button
                  type="button"
                  onClick={() => setShown(i + 1)}
                  className="text-xs bg-slate-100 hover:bg-slate-200 text-slate-700 border border-slate-300 dark:bg-slate-800 dark:text-slate-300 dark:hover:bg-slate-700 dark:border-slate-700 px-3 py-2 rounded-xl transition-colors font-medium shadow-sm cursor-pointer"
                >
                  Afficher l'étape {i + 1} →
                </button>
              )
            )}
          </li>
        ))}
      </ol>
      {hasPlates
        ? <Planches figs={platesFor(figs, s.key)} total={total} />
        : isDrawn(diagram) && <DiagramViewer type={diagram} title="Schéma d'exécution du cas pratique" />}
      {allShown && s.conclusion && (
        <div className="alert-warning mt-4 animate-fade-up">
          <p className="text-base text-orange-900 dark:text-orange-200 font-semibold">⚠️ Conclusion : {renderInline(s.conclusion)}</p>
        </div>
      )}
    </Section>
  );
}

function KeyPointsStep({ s }) {
  return (
    <Section>
      <StepHeader step={s.id} title={s.title} icon={s.icon} />
      <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {(s.points || []).map((pt, i) => (
          <li key={i} className="flex items-start gap-3 rounded-xl bg-white dark:bg-slate-800/90 border border-slate-200/90 dark:border-slate-700 p-4 shadow-2xs">
            <span className="text-amber-500 dark:text-amber-400 shrink-0 text-lg" aria-hidden="true">⭐</span>
            <span className="text-base text-slate-900 dark:text-slate-100 font-semibold leading-relaxed break-words">{renderInline(pt)}</span>
          </li>
        ))}
      </ul>
    </Section>
  );
}

function SelfAssessmentStep({ s, checked = [], onChange }) {
  const objectives = s.objectives || [];
  const toggle = i => onChange?.(checked.includes(i) ? checked.filter(x => x !== i) : [...checked, i]);
  const pct = objectives.length ? Math.round((checked.length / objectives.length) * 100) : 0;

  return (
    <Section className="border-emerald-300 dark:border-emerald-500/30 bg-emerald-50/40 dark:bg-emerald-950/20">
      <StepHeader step={s.id} title={s.title} icon={s.icon} />
      {s.description && <p className="text-base text-slate-700 dark:text-slate-300 mb-4 font-medium">{renderInline(s.description)}</p>}
      <div className="space-y-2.5 mb-5">
        {objectives.map((obj, i) => (
          <label key={i} className="flex items-start gap-3 cursor-pointer rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800/60 p-3 transition-colors">
            <input
              type="checkbox"
              checked={checked.includes(i)}
              onChange={() => toggle(i)}
              className="mt-1 accent-emerald-600 dark:accent-emerald-500 w-4 h-4"
            />
            <span className={`text-base ${checked.includes(i) ? 'text-emerald-700 dark:text-emerald-300 line-through' : 'text-slate-800 dark:text-slate-200'}`}>{renderInline(obj)}</span>
          </label>
        ))}
      </div>
      <div className="rounded-xl bg-white dark:bg-slate-800/80 p-4 border border-slate-200 dark:border-transparent shadow-sm">
        <div className="flex justify-between text-sm mb-2 font-semibold">
          <span className="text-slate-700 dark:text-slate-300">Objectifs atteints</span>
          <span className={`font-mono ${pct >= 80 ? 'text-emerald-600 dark:text-emerald-400' : pct >= 50 ? 'text-amber-600 dark:text-yellow-400' : 'text-slate-500'}`}>{pct}%</span>
        </div>
        <div className="h-2.5 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
          <div className={`h-full rounded-full transition-all duration-500 ${pct >= 80 ? 'bg-emerald-500' : pct >= 50 ? 'bg-amber-500' : 'bg-slate-400'}`} style={{ width: `${pct}%` }} />
        </div>
        {pct === 100 && (
          <p className="mt-3.5 text-center text-emerald-700 dark:text-emerald-300 font-bold text-base">🏆 Leçon validée — vos objectifs sont tous atteints.</p>
        )}
      </div>
    </Section>
  );
}

// ── Tools dock (adapted to the lesson's subject) ─────────────────────────────

function collectTerms(lesson) {
  const text = JSON.stringify(lesson.steps);
  return Object.values(TECH_TERMS)
    .filter(t => new RegExp(`(^|[^A-Za-z0-9])${t.term.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}([^A-Za-z0-9]|$)`).test(text))
    .slice(0, 12);
}

function Workstation({ lesson, domain, moduleTitle, figs = [], hasPlates }) {
  const [tab, setTab] = useState('tool');
  const [angle, setAngle] = useState(35);
  const [hypotenuse, setHypotenuse] = useState(10);

  const formulas = useMemo(() => (lesson.steps.find(s => s.type === 'formulas')?.formulas || []).slice(0, 8), [lesson]);
  const terms = useMemo(() => collectTerms(lesson), [lesson]);
  const diagramStep = lesson.steps.find(s => s.type === 'interactive_diagram');
  const definition = lesson.steps.find(s => s.type === 'definition');

  const tool = TRIG_DOMAINS.has(domain)
    ? { label: '📐 Triangle & trigonométrie', node: <TrigWidget angle={angle} setAngle={setAngle} hypotenuse={hypotenuse} setHypotenuse={setHypotenuse} /> }
    : BEAM_DOMAINS.has(domain)
      ? { label: '🏗️ Poutre isostatique', node: <BeamCalculator /> }
      : { label: '🔁 Convertisseur d\'unités', node: <UnitConverter /> };

  const tabs = [
    { key: 'tool', label: tool.label },
    { key: 'diagram', label: '📊 Schéma' },
    { key: 'cheatsheet', label: '💡 Formules clés' },
    { key: 'glossary', label: '📖 Lexique FR/EN' },
  ];

  return (
    <div className="rounded-3xl border border-teal-200 dark:border-slate-800 bg-gradient-to-br from-teal-50/50 via-cyan-50/30 to-white dark:from-slate-900 dark:via-slate-900 dark:to-slate-950 p-4 sm:p-7 shadow-lg space-y-5 my-6">
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-teal-100 dark:border-slate-800 pb-4">
        <div className="flex items-center gap-2.5">
          <span className="w-9 h-9 rounded-2xl bg-gradient-to-br from-teal-600 to-cyan-500 text-white flex items-center justify-center text-lg shadow-md" aria-hidden="true">🧰</span>
          <div>
            <span className="text-[10px] uppercase font-bold tracking-widest text-teal-700 dark:text-cyan-400">Atelier pratique</span>
            <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white">Outils & aide-mémoire — {moduleTitle}</h3>
          </div>
        </div>
        <div className="flex flex-wrap gap-1.5 p-1 bg-white dark:bg-slate-950 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-inner text-xs font-semibold" role="tablist">
          {tabs.map(t => (
            <button
              type="button"
              role="tab"
              aria-selected={tab === t.key}
              key={t.key}
              onClick={() => setTab(t.key)}
              className={`px-3.5 py-2 rounded-xl transition-all cursor-pointer ${tab === t.key ? 'bg-teal-600 text-white shadow-md font-bold' : 'text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-200'}`}
            >
              {t.label}
            </button>
          ))}
        </div>
      </div>

      {tab === 'tool' && (
        <div className="rounded-2xl bg-white dark:bg-slate-950/80 p-4 sm:p-6 border border-slate-200 dark:border-slate-800 shadow-sm">{tool.node}</div>
      )}
      {tab === 'diagram' && hasPlates && <Planches figs={diagramPlates(figs)} total={figs.length} />}
      {tab === 'diagram' && !hasPlates && (
        isDrawn(lesson.diagramType)
          ? <DiagramViewer type={lesson.diagramType} title={diagramStep?.title} />
          : <DiagramViewer type="process_flow" items={diagramStep?.diagram_description || []} title={diagramStep?.title} />
      )}
      {tab === 'cheatsheet' && (
        formulas.length ? (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-3.5">
            {formulas.map(f => (
              <div key={f.name} className="p-3.5 rounded-xl bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 shadow-2xs min-w-0">
                <span className="tag-blue mb-1.5 inline-block text-[11px] font-bold">{f.name}</span>
                <div className="overflow-x-auto py-1 math-scroll"><SafeInlineMath math={f.latex} /></div>
              </div>
            ))}
          </div>
        ) : <p className="text-sm text-slate-600 dark:text-slate-400">Cette leçon ne contient pas de formule.</p>
      )}
      {tab === 'glossary' && (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 bg-white dark:bg-slate-950 p-4 rounded-2xl border border-slate-200 dark:border-slate-800">
          {definition?.fr && (
            <div className="sm:col-span-2 p-2.5 rounded-xl bg-teal-50 dark:bg-slate-900 border border-teal-100 dark:border-slate-800 text-sm">
              <p className="font-semibold text-slate-900 dark:text-white">🇫🇷 {definition.fr}</p>
              {definition.en && <p className="text-teal-700 dark:text-cyan-400 mt-0.5">🇬🇧 {definition.en}</p>}
            </div>
          )}
          {terms.map(t => (
            <div key={t.term} className="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-100 dark:border-slate-800/80 text-sm">
              <p className="text-slate-900 dark:text-white font-semibold">{t.term} — <span className="font-normal">{t.full}</span></p>
              {t.en && <p className="text-teal-700 dark:text-cyan-400 font-mono text-xs mt-0.5">{t.en}</p>}
            </div>
          ))}
          {!terms.length && !definition?.fr && <p className="text-sm text-slate-600 dark:text-slate-400">Aucun terme technique référencé pour cette leçon.</p>}
        </div>
      )}
    </div>
  );
}

// ── Lesson page ──────────────────────────────────────────────────────────────

function LessonSelector({ entries, index, onSelect, progress }) {
  if (entries.length < 2) return null;
  return (
    <nav aria-label="Leçons du module" className="flex flex-wrap gap-2 pt-1">
      {entries.map((entry, i) => {
        const validated = isValidated(progress[entry.key]);
        const active = i === index;
        return (
          <button
            type="button"
            key={entry.key}
            onClick={() => onSelect(i)}
            aria-current={active ? 'page' : undefined}
            className={`text-left text-xs sm:text-sm rounded-xl border px-3 py-2 transition-all cursor-pointer max-w-full ${active
              ? 'bg-teal-600 border-teal-600 text-white shadow-md font-semibold'
              : 'bg-white/80 border-slate-200 text-slate-700 hover:border-teal-400 dark:bg-slate-800/80 dark:border-slate-700 dark:text-slate-200'}`}
          >
            <span className="font-mono mr-1.5">{validated ? '✓' : `L${i + 1}`}</span>
            {entry.title}
          </button>
        );
      })}
    </nav>
  );
}

export function isValidated(progress) {
  if (!progress) return false;
  return (progress.quizBest ?? 0) >= 80 || Boolean(progress.allObjectives);
}

export default function LessonCanvas({ module, lessonIndex = 0, onSelectLesson, lessonProgress = {}, onLessonProgress }) {
  const [showSciCalc, setShowSciCalc] = useState(false);
  const entries = getLessonEntries(module);
  const index = Math.min(Math.max(0, lessonIndex), Math.max(0, entries.length - 1));
  const entry = entries[index];
  const { status, lesson, error, retry } = useLesson(entry);
  const { expected: hasPlates, figures } = useFigures(entry?.key);
  // A lesson without its own "schéma de principe" plate gets one drawn from the step's stages.
  const plates = useMemo(() => {
    if (!figures.length || figures.some(f => f.steps.includes('diagrams'))) return figures;
    const auto = principlePlate(lesson?.steps?.find(st => st.type === 'interactive_diagram'));
    return auto ? [...figures, { ...auto, n: figures.length + 1 }] : figures;
  }, [figures, lesson]);
  const progress = (entry && lessonProgress[entry.key]) || {};

  const saveProgress = patch => entry && onLessonProgress?.(entry.key, patch);

  const renderStep = s => {
    if (!s?.type) return null;
    const key = `${entry.key}-${s.id ?? s.key}`;
    const common = { s, lessonDiagram: lesson.diagramType, domain: entry.domain, figs: plates, hasPlates, total: plates.length };
    switch (s.type) {
      case 'definition': return <DefinitionStep key={key} {...common} />;
      case 'importance': return <ContentStep key={key} {...common} />;
      case 'applications': return <ApplicationsStep key={key} {...common} />;
      case 'theory': return <TheoryStep key={key} {...common} />;
      case 'formulas': return <FormulasStep key={key} {...common} />;
      case 'stepbystep': return <StepByStepStep key={key} {...common} />;
      case 'units': return <UnitsStep key={key} {...common} />;
      case 'hypotheses': return <HypothesesStep key={key} {...common} />;
      case 'examples_simple': return <ExamplesSimpleStep key={key} {...common} />;
      case 'examples_real': return <RealExamplesStep key={key} {...common} />;
      case 'interactive_diagram': return <DiagramStep key={key} {...common} />;
      case 'mistakes': return <MistakesStep key={key} {...common} />;
      case 'tips': return <TipsStep key={key} {...common} />;
      case 'norms': return <NormsStep key={key} {...common} />;
      case 'exercises': return <ExercisesStep key={key} {...common} onOpenCalculator={() => setShowSciCalc(true)} />;
      case 'corrections':
        return (
          <Section key={key}>
            <StepHeader step={s.id} title={s.title} icon={s.icon} />
            <div className="alert-info"><p className="text-base text-teal-800 dark:text-cyan-300 font-medium">{renderInline(s.note || 'Les corrections détaillées sont disponibles sous chaque exercice.')}</p></div>
          </Section>
        );
      case 'quiz':
        return <QuizStep key={key} {...common} bestScore={progress.quizBest} onScore={pct => saveProgress({ quizBest: Math.max(pct, progress.quizBest ?? 0) })} />;
      case 'exam': return <ExamStep key={key} {...common} />;
      case 'interview': return <InterviewStep key={key} {...common} />;
      case 'practical': return <PracticalStep key={key} {...common} />;
      case 'summary': return <ContentStep key={key} {...common} className="border-teal-300 dark:border-cyan-500/30 bg-teal-50/40 dark:bg-slate-900/50" />;
      case 'keypoints': return <KeyPointsStep key={key} {...common} />;
      case 'self_assessment':
        return (
          <SelfAssessmentStep
            key={key}
            {...common}
            checked={progress.checked || []}
            onChange={checked => saveProgress({ checked, allObjectives: checked.length === (s.objectives || []).length })}
          />
        );
      default: return null;
    }
  };

  const validated = isValidated(progress);

  return (
    <ErrorBoundary title="Erreur lors du chargement de la leçon">
      <div className="w-full max-w-5xl mx-auto overflow-x-hidden space-y-6">
        {showSciCalc && <SciCalc onClose={() => setShowSciCalc(false)} />}

        {/* Lesson header */}
        <header className="rounded-3xl border border-teal-200/80 dark:border-slate-800 bg-gradient-to-br from-teal-50/70 via-cyan-50/40 to-white dark:from-slate-900 dark:via-slate-900 dark:to-slate-950 p-4 sm:p-7 relative overflow-hidden w-full max-w-full shadow-sm">
          <div className="absolute inset-0 eng-grid-bg opacity-30 dark:opacity-50 pointer-events-none" />
          <div className="relative space-y-4">
            <div className="flex flex-wrap items-start justify-between gap-4">
              <div className="min-w-0 flex-1">
                <div className="flex items-center gap-2 sm:gap-3 mb-3 flex-wrap">
                  {module?.icon && <span className="text-2xl sm:text-3xl shrink-0" aria-hidden="true">{module.icon}</span>}
                  <span className="tag-blue text-xs font-bold">Module {module?.n}</span>
                  {entries.length > 1 && <span className="tag-blue text-xs font-bold">Leçon {index + 1}/{entries.length}</span>}
                  {lesson?.level && <span className={`${String(lesson.level).includes('Débutant') ? 'tag-green' : 'tag-orange'} text-xs font-bold`}>{lesson.level}</span>}
                  {lesson?.duration && <span className="tag-blue text-xs font-bold">{lesson.duration}</span>}
                  {validated && <span className="tag-green text-xs font-bold">✓ Leçon validée</span>}
                </div>
                <p className="text-xs sm:text-sm uppercase tracking-widest text-teal-700 dark:text-cyan-400 font-bold mb-1.5">
                  Module {module?.n} — {module?.title}
                </p>
                <h2 className="text-xl sm:text-3xl font-extrabold text-slate-900 dark:text-white leading-tight break-words">{lesson?.title || entry?.title || module?.title}</h2>
                {lesson?.tags?.length > 0 && (
                  <div className="flex flex-wrap gap-2 mt-3.5">
                    {lesson.tags.map((t, i) => (
                      <span key={`${t}-${i}`} className="text-xs bg-white text-slate-700 border border-slate-200 dark:bg-slate-800 dark:text-slate-300 dark:border-slate-700 px-2.5 py-1 rounded-full shadow-2xs font-medium">{t}</span>
                    ))}
                  </div>
                )}
              </div>
              <button
                type="button"
                onClick={() => setShowSciCalc(true)}
                className="w-full sm:w-auto flex items-center justify-center gap-2 bg-gradient-to-r from-teal-600 to-cyan-600 hover:from-teal-700 hover:to-cyan-700 text-white px-5 py-3 rounded-2xl text-sm font-bold transition-all shadow-md cursor-pointer"
              >
                🧮 Calculatrice scientifique
              </button>
            </div>
            <LessonSelector entries={entries} index={index} onSelect={i => onSelectLesson?.(i)} progress={lessonProgress} />
            {lesson && (
              <div className="pt-1">
                <div className="flex justify-between text-xs text-slate-500 dark:text-slate-400 mb-1.5 font-medium">
                  <span>{lesson.steps.length} étapes pédagogiques</span>
                  <span>Accès libre</span>
                </div>
                <div className="flex gap-1" aria-hidden="true">
                  {lesson.steps.map((s, i) => (
                    <div key={s.id || i} className="h-2 flex-1 rounded-full bg-teal-500/70 dark:bg-cyan-500/70" title={`${s.id || i + 1}. ${s.title || 'Étape'}`} />
                  ))}
                </div>
              </div>
            )}
          </div>
        </header>

        {!entry && (
          <Section><p className="text-base text-slate-700 dark:text-slate-200">Aucune leçon n'est encore disponible pour ce module.</p></Section>
        )}

        {entry && status === 'loading' && (
          <Section>
            <div className="flex items-center gap-3 text-slate-600 dark:text-slate-300" role="status">
              <span className="w-5 h-5 rounded-full border-2 border-teal-500 border-t-transparent animate-spin" aria-hidden="true" />
              Chargement de la leçon « {entry.title} »…
            </div>
          </Section>
        )}

        {entry && status === 'error' && (
          <Section>
            <p className="text-base text-rose-700 dark:text-rose-300 font-semibold mb-2">La leçon n'a pas pu être chargée.</p>
            <p className="text-sm text-slate-600 dark:text-slate-300 mb-4">
              {typeof navigator !== 'undefined' && navigator.onLine === false
                ? 'Vous êtes hors ligne et cette leçon n\'a pas encore été enregistrée sur cet appareil. Reconnectez-vous puis réessayez.'
                : String(error?.message || 'Erreur inconnue.')}
            </p>
            <button type="button" onClick={retry} className="px-4 py-2 rounded-xl bg-teal-600 hover:bg-teal-700 text-white text-sm font-bold cursor-pointer">🔄 Réessayer</button>
          </Section>
        )}

        {status === 'ready' && lesson && (
          <>
            <div className="space-y-6 w-full max-w-full min-w-0">
              {lesson.steps.map(s => (
                <ErrorBoundary key={`${entry.key}-${s.id}`} title={`Erreur d'affichage — étape ${s.id}`}>
                  {renderStep(s)}
                </ErrorBoundary>
              ))}
            </div>
            <Workstation key={entry.key} lesson={lesson} domain={entry.domain} moduleTitle={module?.title} figs={plates} hasPlates={hasPlates} />
          </>
        )}
      </div>
    </ErrorBoundary>
  );
}
