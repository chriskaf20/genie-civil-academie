import { useState, useRef } from 'react';
import DiagramViewer from './DiagramViewer.jsx';
import TrigWidget from './TrigWidget.jsx';
import SciCalc from './SciCalc.jsx';
import FormulaExplainer from './FormulaExplainer.jsx';
import StructuralSketches from './StructuralSketches.jsx';
import { SafeInlineMath, SafeBlockMath } from './SafeMath.jsx';
import TechTooltip, { enhanceTextWithTerms } from './TechTooltip.jsx';
import { getLessonForModule } from '../data/lesson_generator.js';

// ── Helpers ──────────────────────────────────────────────────────────────────

function parseLatexContent(text) {
  if (!text) return null;

  // Split on block math equations $$...$$
  const blocks = text.split(/(\$\$[\s\S]+?\$\$)/g);

  return blocks.map((block, bi) => {
    const trimmed = block.trim();
    if (trimmed.startsWith('$$') && trimmed.endsWith('$$')) {
      const math = trimmed.slice(2, -2).trim();
      return (
        <div key={bi} className="overflow-x-auto max-w-full py-2.5 my-3 math-scroll text-center">
          <SafeBlockMath math={math} />
        </div>
      );
    }

    const lines = block.split('\n');
    return lines.map((line, li) => {
      const key = `${bi}-${li}`;
      const lineTrim = line.trim();

      if (line.startsWith('### ')) {
        return (
          <h4 key={key} className="text-lg font-bold text-slate-900 dark:text-white mt-5 mb-2.5 break-words">
            {renderInline(line.slice(4))}
          </h4>
        );
      }
      if (line.startsWith('## ')) {
        return (
          <h3 key={key} className="text-xl font-bold text-slate-900 dark:text-white mt-6 mb-3 break-words">
            {renderInline(line.slice(3))}
          </h3>
        );
      }
      if (line.startsWith('> ')) {
        return (
          <blockquote key={key} className="border-l-4 border-teal-500 dark:border-cyan-500 pl-4 py-2.5 my-3 text-teal-950 dark:text-cyan-100 text-base italic break-words bg-teal-50/60 dark:bg-slate-900/70 rounded-r-xl leading-relaxed">
            {renderInline(line.slice(2))}
          </blockquote>
        );
      }
      if (line.startsWith('- ')) {
        return (
          <li key={key} className="text-slate-700 dark:text-slate-200 text-base ml-5 list-disc leading-relaxed my-1.5 break-words">
            {renderInline(line.slice(2))}
          </li>
        );
      }
      if (/^\d+\.\s/.test(line)) {
        const match = line.match(/^(\d+\.)\s(.*)$/);
        return (
          <li key={key} className="text-slate-700 dark:text-slate-200 text-base ml-5 list-decimal leading-relaxed my-1.5 break-words">
            {renderInline(match ? match[2] : line)}
          </li>
        );
      }
      if (lineTrim === '') {
        return null;
      }
      return (
        <p key={key} className="text-slate-700 dark:text-slate-200 text-base leading-relaxed my-2 break-words">
          {renderInline(line)}
        </p>
      );
    });
  });
}

function renderInline(text) {
  if (!text) return null;

  // Unified tokenizer: $math$, **bold**, *italic*, `code`
  const parts = text.split(/(\$[^$]+?\$|\*\*[^*]+?\*\*|\*[^*]+?\*|`[^`]+?`)/g);

  return parts.map((part, i) => {
    if (!part) return null;

    if (part.startsWith('$') && part.endsWith('$')) {
      const math = part.slice(1, -1).trim();
      return (
        <span key={i} className="inline-block px-0.5 align-baseline text-slate-900 dark:text-slate-100 font-medium">
          <SafeInlineMath math={math} />
        </span>
      );
    }
    if (part.startsWith('**') && part.endsWith('**')) {
      const inner = part.slice(2, -2);
      return (
        <strong key={i} className="text-slate-900 dark:text-white font-bold">
          {renderInline(inner)}
        </strong>
      );
    }
    if (part.startsWith('*') && part.endsWith('*')) {
      const inner = part.slice(1, -1);
      return (
        <em key={i} className="text-slate-700 dark:text-slate-200 italic">
          {renderInline(inner)}
        </em>
      );
    }
    if (part.startsWith('`') && part.endsWith('`')) {
      return (
        <code key={i} className="bg-slate-100 dark:bg-slate-800 text-teal-700 dark:text-cyan-300 px-1.5 py-0.5 rounded text-xs mono font-semibold">
          {part.slice(1, -1)}
        </code>
      );
    }

    return <span key={i}>{enhanceTextWithTerms(part)}</span>;
  });
}

// ── Step Icon Badge ───────────────────────────────────────────────────────────
function StepHeader({ step, title, icon }) {
  return (
    <div className="flex items-center gap-3 mb-4 sm:mb-5 pb-3 border-b border-slate-100 dark:border-slate-800">
      <div className="step-badge">{step}</div>
      <span className="text-xl shrink-0">{icon}</span>
      <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white leading-snug">{title}</h3>
    </div>
  );
}

// ── Section Card wrapper ──────────────────────────────────────────────────────
function Section({ children, className = '' }) {
  return (
    <div className={`rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/90 p-4 sm:p-6 card-hover animate-fade-up w-full max-w-full mx-0 overflow-hidden shadow-xs text-base ${className}`}>
      {children}
    </div>
  );
}

// ── Step renderers ────────────────────────────────────────────────────────────

function DefinitionStep({ s }) {
  return (
    <Section>
      <StepHeader step={s.id} title={s.title} icon={s.icon} />
      <div className="space-y-4">
        <div className="flex flex-wrap gap-2.5 sm:gap-3">
          <span className="tag-blue">🇫🇷 {s.fr}</span>
          <span className="tag-orange">🇬🇧 {s.en}</span>
        </div>
        <div className="alert-info">
          <p className="text-xs text-teal-800 dark:text-cyan-300 font-semibold uppercase tracking-wider mb-1">💼 Utilisation métier & Rôle Ingénieur</p>
          <p className="text-base text-slate-700 dark:text-slate-200 leading-relaxed font-medium">{s.metier}</p>
        </div>
        <div className="prose-custom">{parseLatexContent(s.content)}</div>
      </div>
    </Section>
  );
}

function ImportanceStep({ s }) {
  return (
    <Section>
      <StepHeader step={s.id} title={s.title} icon={s.icon} />
      <div className="prose-custom">{parseLatexContent(s.content)}</div>
    </Section>
  );
}

function ApplicationsStep({ s }) {
  return (
    <Section>
      <StepHeader step={s.id} title={s.title} icon={s.icon} />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {s.examples.map(ex => (
          <div key={ex.context} className="rounded-xl bg-slate-50 dark:bg-slate-800/60 p-4 border border-slate-200 dark:border-slate-700/50 shadow-2xs">
            <span className="tag-orange mb-2.5 inline-block">{ex.context}</span>
            <p className="text-base text-slate-700 dark:text-slate-200 leading-relaxed">{ex.text}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}

function TheoryStep({ s, diagramType, moduleSlug }) {
  const normSlug = (moduleSlug || '').replace(/-/g, '_').toLowerCase();
  // N'affiche StructuralSketches QUE si le module est concerné par le dimensionnement structural
  const isStructural = ['rdm', 'beton_arme', 'metal', 'geotechnique', 'fondations', 'bois', 'precontrainte'].includes(normSlug);

  return (
    <Section>
      <StepHeader step={s.id} title={s.title} icon={s.icon} />
      <div className="prose-custom mb-5">{parseLatexContent(s.content)}</div>
      {/* Croquis didactique de dimensionnement (ciblé par module) */}
      {isStructural && (
        <StructuralSketches
          initialTab={normSlug === 'geotechnique' || normSlug === 'fondations' ? 'geotech' : 'section'}
          title="Croquis de Dimensionnement — Section b×h, Contraintes & Axe Neutre"
        />
      )}
      <DiagramViewer type={s.diagramType || diagramType} title="Schéma Théorique & Cotations" />
    </Section>
  );
}

function FormulasStep({ s, diagramType, moduleSlug }) {
  return (
    <Section>
      <StepHeader step={s.id} title={s.title} icon={s.icon} />
      <div className="space-y-4 mb-5 w-full max-w-full">
        {s.formulas.map((f, i) => (
          <FormulaExplainer
            key={f.name || i}
            formula={f}
            name={f.name}
            latex={f.latex}
            description={f.description}
            variables={f.variables}
            ruleOfThumb={f.ruleOfThumb}
            moduleSlug={moduleSlug}
          />
        ))}
      </div>
      <DiagramViewer type={s.diagramType || diagramType} title="Illustration des Équations & Sollicitations" />
    </Section>
  );
}

function StepByStepSection({ s }) {
  const [revealed, setRevealed] = useState([]);
  const toggle = (n) => setRevealed(prev => prev.includes(n) ? prev.filter(x => x !== n) : [...prev, n]);

  return (
    <Section>
      <StepHeader step={s.id} title={s.title} icon={s.icon} />
      <div className="alert-info mb-4">
        <p className="text-sm text-teal-900 dark:text-cyan-300 font-bold">📋 Énoncé du Problème :</p>
        <p className="text-base text-slate-700 dark:text-slate-200 mt-1.5 italic leading-relaxed">{s.problem}</p>
      </div>
      <div className="space-y-2.5">
        {s.steps_demo.map(step => (
          <div
            key={step.n}
            onClick={() => toggle(step.n)}
            className="rounded-xl border border-slate-200 dark:border-slate-700/60 bg-slate-50 dark:bg-slate-800/50 p-3.5 cursor-pointer hover:bg-slate-100 dark:hover:bg-slate-800/80 transition-all"
          >
            <div className="flex items-center gap-3">
              <div className="step-badge shrink-0">{step.n}</div>
              <p className={`text-base transition-colors ${revealed.includes(step.n) ? 'text-slate-900 dark:text-white font-semibold' : 'text-slate-700 dark:text-slate-300'}`}>
                {step.text}
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="formula-card mt-4 w-full max-w-full overflow-x-auto">
        <p className="text-xs text-emerald-600 dark:text-emerald-400 font-bold mb-2 uppercase tracking-wide">✅ Résultat & Dimensionnement :</p>
        <div className="overflow-x-auto max-w-full py-1.5 math-scroll">
          <SafeBlockMath math={s.result_latex} />
        </div>
      </div>
    </Section>
  );
}

function UnitsStep({ s }) {
  return (
    <Section>
      <StepHeader step={s.id} title={s.title} icon={s.icon} />
      <div className="overflow-x-auto max-w-full py-1 table-scroll">
        <table className="w-full text-base text-left border-collapse">
          <thead>
            <tr className="border-b border-slate-200 dark:border-slate-700/60 pb-3">
              <th className="text-xs text-slate-500 dark:text-slate-400 uppercase pb-2.5 pr-4 font-bold">Grandeur</th>
              <th className="text-xs text-slate-500 dark:text-slate-400 uppercase pb-2.5 pr-4 font-bold">Système SI</th>
              <th className="text-xs text-slate-500 dark:text-slate-400 uppercase pb-2.5 pr-4 font-bold">Système Impérial</th>
              <th className="text-xs text-slate-500 dark:text-slate-400 uppercase pb-2.5 font-bold">Facteur de Conversion</th>
            </tr>
          </thead>
          <tbody>
            {s.table.map(row => (
              <tr key={row.grandeur} className="border-b border-slate-100 dark:border-slate-800/60">
                <td className="py-2.5 pr-4 text-slate-900 dark:text-white font-medium whitespace-nowrap">{row.grandeur}</td>
                <td className="py-2.5 pr-4 text-teal-700 dark:text-cyan-300 font-mono text-sm whitespace-nowrap font-bold">{row.si}</td>
                <td className="py-2.5 pr-4 text-orange-600 dark:text-orange-300 font-mono text-sm whitespace-nowrap">{row.imperial}</td>
                <td className="py-2.5 text-slate-600 dark:text-slate-300 text-sm leading-relaxed">{row.conversion}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="alert-info mt-4">
        <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed font-medium">{s.note}</p>
      </div>
    </Section>
  );
}

function HypothesesStep({ s }) {
  return (
    <Section>
      <StepHeader step={s.id} title={s.title} icon={s.icon} />
      <div className="space-y-3">
        {s.items.map((item, i) => (
          <div key={i} className="flex gap-3 items-start rounded-xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-700/40 p-4">
            <span className="text-teal-600 dark:text-cyan-400 font-bold shrink-0 mt-0.5">•</span>
            <p className="text-base text-slate-700 dark:text-slate-200 leading-relaxed">{renderInline(item)}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}

function ExamplesSimpleStep({ s }) {
  return (
    <Section>
      <StepHeader step={s.id} title={s.title} icon={s.icon} />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {s.items.map((item, i) => (
          <div key={i} className="rounded-xl border border-slate-200 dark:border-slate-700/40 bg-slate-50 dark:bg-slate-800/30 p-4 shadow-2xs">
            <span className="tag-blue mb-2.5 inline-block">{item.title}</span>
            <p className="text-base text-slate-700 dark:text-slate-200 leading-relaxed">{item.content}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}

function RealExamplesStep({ s }) {
  return (
    <Section>
      <StepHeader step={s.id} title={s.title} icon={s.icon} />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {s.cases.map((c, i) => (
          <div key={i} className="rounded-xl border border-slate-200 dark:border-slate-700/50 bg-slate-50 dark:bg-slate-800/40 p-4 space-y-2 shadow-2xs">
            <div className="flex items-center gap-2">
              <span className="text-xl">🏗️</span>
              <p className="text-base font-bold text-slate-900 dark:text-white leading-tight">{c.project}</p>
            </div>
            <p className="text-base text-slate-700 dark:text-slate-200 leading-relaxed">{c.description}</p>
            <div className="alert-tip mt-2">
              <p className="text-sm font-semibold text-emerald-800 dark:text-emerald-300">💡 Solution ingénieur : {c.solution}</p>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}

function DiagramStep({ s, diagramType }) {
  return (
    <Section>
      <StepHeader step={s.id} title={s.title} icon={s.icon} />
      <div className="alert-info mb-3.5">
        <p className="text-base text-slate-700 dark:text-slate-200 leading-relaxed font-medium">{s.description}</p>
      </div>
      <ul className="space-y-1.5 mb-5">
        {s.diagram_description.map((d, i) => (
          <li key={i} className="text-sm text-slate-600 dark:text-slate-300 flex gap-2">
            <span>•</span>
            <span dangerouslySetInnerHTML={{ __html: d.replace(/\*\*([^*]+)\*\*/g, '<strong class="text-slate-900 dark:text-slate-100 font-semibold">$1</strong>') }} />
          </li>
        ))}
      </ul>
      <DiagramViewer type={s.diagramType || diagramType} title="Schéma Interactif & Cotations Principales" />
    </Section>
  );
}

function MistakesStep({ s }) {
  return (
    <Section>
      <StepHeader step={s.id} title={s.title} icon={s.icon} />
      <div className="space-y-4">
        {s.items.map((item, i) => (
          <div key={i} className="rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700/50 p-4 space-y-2.5 shadow-2xs">
            <div className="flex gap-2.5 items-start">
              <span className="text-rose-500 text-lg shrink-0 mt-0.5">❌</span>
              <p className="text-base text-rose-700 dark:text-rose-200 font-semibold leading-relaxed">{item.mistake}</p>
            </div>
            <div className="alert-warning">
              <p className="text-sm text-orange-900 dark:text-orange-200">⚠️ <strong>Piège technique</strong> : {item.trap}</p>
            </div>
            <div className="alert-tip">
              <p className="text-sm text-emerald-900 dark:text-emerald-200">✅ <strong>Correction & Règle de l'art</strong> : {item.fix}</p>
            </div>
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
      <div className="space-y-2.5">
        {s.tips.map((tip, i) => (
          <div key={i} className="flex gap-3 items-start rounded-xl bg-emerald-50/70 dark:bg-emerald-950/20 border border-emerald-200 dark:border-emerald-900/50 p-3.5">
            <span className="text-emerald-600 dark:text-emerald-400 shrink-0 text-lg mt-0.5">💡</span>
            <p className="text-base text-slate-800 dark:text-slate-200 leading-relaxed font-medium">{tip}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}

function NormsStep({ s }) {
  return (
    <Section>
      <StepHeader step={s.id} title={s.title} icon={s.icon} />
      <div className="space-y-2.5 w-full">
        {s.norms.map(n => (
          <div
            key={n.code}
            className="flex flex-col sm:flex-row sm:items-center gap-2.5 sm:gap-3.5 rounded-xl bg-blue-50/70 dark:bg-slate-800/80 border border-blue-200/80 dark:border-slate-700 p-3.5 w-full max-w-full overflow-hidden shadow-2xs"
          >
            <span className="tag-blue shrink-0 self-start text-xs font-mono font-bold px-2.5 py-1">
              {n.code}
            </span>
            <p className="text-base text-slate-800 dark:text-slate-200 leading-relaxed flex-1 min-w-0 break-words font-medium">
              {renderInline(n.description)}
            </p>
          </div>
        ))}
      </div>
    </Section>
  );
}

function ExercisesStep({ s, showSciCalc, setShowSciCalc }) {
  const [answers, setAnswers] = useState({});
  const [revealed, setRevealed] = useState({});

  return (
    <Section>
      <StepHeader step={s.id} title={s.title} icon={s.icon} />
      <div className="flex justify-end mb-3">
        <button
          onClick={() => setShowSciCalc(true)}
          className="flex items-center gap-2 text-xs bg-slate-100 hover:bg-violet-100 border border-violet-300 text-violet-700 dark:bg-slate-800 dark:hover:bg-violet-600/20 dark:border-violet-500/30 dark:text-violet-300 px-3.5 py-2 rounded-xl transition-all shadow-sm cursor-pointer"
        >
          🧮 Calculatrice scientifique
        </button>
      </div>
      <div className="space-y-5">
        {s.exercises.map(ex => (
          <div key={ex.id} className="rounded-xl border border-slate-200 dark:border-slate-700/50 bg-slate-50 dark:bg-slate-800/30 p-4 sm:p-5">
            <div className="flex items-start gap-3 mb-3">
              <div className="step-badge shrink-0">{ex.number}</div>
              <div>
                <span className={`tag-${ex.difficulty === 'Facile' ? 'green' : ex.difficulty === 'Moyen' ? 'blue' : 'orange'} mb-2 inline-block`}>
                  {ex.difficulty}
                </span>
                <p className="text-base text-slate-800 dark:text-slate-200 leading-relaxed font-medium">{ex.text}</p>
              </div>
            </div>

            <div className="alert-info mb-3">
              <p className="text-sm text-teal-800 dark:text-cyan-300 font-medium">💡 Indice : {ex.hint}</p>
            </div>

            <textarea
              placeholder="Entrez votre raisonnement et résultat..."
              value={answers[ex.id] || ''}
              onChange={e => setAnswers(prev => ({ ...prev, [ex.id]: e.target.value }))}
              className="w-full rounded-xl border border-slate-200 bg-white dark:border-slate-700 dark:bg-slate-900 px-3.5 py-2.5 text-base text-slate-900 dark:text-slate-200 placeholder:text-slate-400 min-h-20 resize-none shadow-inner font-mono"
            />

            <div className="flex gap-2 mt-3">
              <button
                onClick={() => setRevealed(prev => ({ ...prev, [ex.id]: !prev[ex.id] }))}
                className="text-xs bg-slate-100 hover:bg-slate-200 border border-slate-300 text-slate-700 dark:bg-slate-800 dark:hover:bg-slate-700 dark:border-slate-600 dark:text-slate-300 px-3.5 py-2 rounded-lg transition-colors font-medium shadow-sm cursor-pointer"
              >
                {revealed[ex.id] ? 'Masquer correction' : '📋 Voir la solution détaillée'}
              </button>
            </div>

            {revealed[ex.id] && (
              <div className="mt-4 formula-card animate-fade-up w-full max-w-full overflow-x-auto">
                <p className="text-xs text-emerald-600 dark:text-emerald-400 font-bold mb-2 uppercase tracking-wide">✅ Solution :</p>
                <div className="overflow-x-auto max-w-full py-1.5 math-scroll">
                  <SafeBlockMath math={ex.answer_latex} />
                </div>
                <p className="text-base text-emerald-800 dark:text-emerald-300 font-mono mt-2.5 break-words font-medium">{ex.answer_text}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </Section>
  );
}

function QuizStep({ s }) {
  const [answers, setAnswers] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const score = Object.entries(answers).filter(([qid, aid]) => {
    const q = s.questions.find(q => q.id === qid);
    return q && q.correct === aid;
  }).length;

  const handleSubmit = () => setSubmitted(true);
  const handleReset = () => { setAnswers({}); setSubmitted(false); };

  return (
    <Section>
      <StepHeader step={s.id} title={s.title} icon={s.icon} />

      {submitted && (
        <div className={`rounded-xl p-4 mb-5 ${score >= s.questions.length * 0.8 ? 'alert-tip' : 'alert-warning'}`}>
          <p className="text-lg font-bold text-slate-900 dark:text-white">
            {score >= s.questions.length * 0.8 ? '🏆' : score >= s.questions.length * 0.5 ? '📈' : '📚'} {' '}
            Score : {score}/{s.questions.length} ({Math.round(score / s.questions.length * 100)}%)
          </p>
          <p className="text-base mt-1.5 text-slate-700 dark:text-slate-200 leading-relaxed font-medium">
            {score === s.questions.length ? 'Excellent ! Maîtrise parfaite de toutes les compétences du module.' :
             score >= s.questions.length * 0.8 ? 'Très bien ! Vous êtes prêt pour les applications de dimensionnement.' :
             score >= s.questions.length * 0.5 ? 'Bonne assimilation globale. Révisez les points manqués.' :
             'Relisez les étapes 4 et 5 et repassez le quiz pour consolider vos acquis.'}
          </p>
        </div>
      )}

      <div className="space-y-5">
        {s.questions.map((q, qi) => {
          const chosen = answers[q.id];
          const isSubmitted = submitted;
          return (
            <div key={q.id} className="rounded-xl border border-slate-200 dark:border-slate-700/50 bg-slate-50 dark:bg-slate-800/30 p-4 sm:p-5 shadow-sm">
              <p className="text-base font-bold text-slate-900 dark:text-white mb-3.5">
                <span className="text-teal-600 dark:text-cyan-400 mr-2">Q{qi + 1}.</span>
                {q.question}
              </p>
              <div className="space-y-2.5">
                {q.options.map(opt => {
                  let cls = 'quiz-option rounded-xl border border-slate-200 dark:border-slate-700/50 bg-white dark:bg-slate-800/50 px-4 py-3 text-base text-slate-700 dark:text-slate-300 w-full text-left shadow-2xs transition-all cursor-pointer';
                  if (isSubmitted) {
                    if (opt.id === q.correct) cls += ' selected-correct';
                    else if (opt.id === chosen && opt.id !== q.correct) cls += ' selected-incorrect';
                  } else if (chosen === opt.id) {
                    cls += ' bg-teal-50 border-teal-500 text-teal-900 dark:bg-teal-500/20 dark:border-cyan-500 dark:text-cyan-200 font-bold';
                  }
                  return (
                    <button
                      key={opt.id}
                      onClick={() => !isSubmitted && setAnswers(prev => ({ ...prev, [q.id]: opt.id }))}
                      className={cls}
                      disabled={isSubmitted}
                    >
                      <span className="font-mono text-slate-400 dark:text-slate-500 mr-2.5">{opt.id.toUpperCase()})</span>
                      {opt.text}
                    </button>
                  );
                })}
              </div>
              {isSubmitted && (
                <div className="mt-3.5 text-sm alert-info">
                  <p className="font-bold text-slate-900 dark:text-white">💡 Explication : {q.explanation}</p>
                </div>
              )}
            </div>
          );
        })}
      </div>

      <div className="mt-5 flex gap-3">
        {!submitted ? (
          <button
            onClick={handleSubmit}
            className="w-full sm:w-auto bg-teal-600 hover:bg-teal-700 text-white font-bold px-6 py-3 rounded-xl transition-all shadow-md cursor-pointer"
          >
            Valider mes réponses
          </button>
        ) : (
          <button
            onClick={handleReset}
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
  const [showCriteria, setShowCriteria] = useState(false);

  return (
    <Section>
      <StepHeader step={s.id} title={s.title} icon={s.icon} />
      <div className="border border-amber-200 dark:border-amber-900/50 bg-amber-50/50 dark:bg-amber-950/20 rounded-xl p-4 sm:p-5 mb-4">
        <div className="flex items-center gap-2 mb-2">
          <span className="text-xl">⏱️</span>
          <p className="text-base font-bold text-amber-900 dark:text-amber-200">Sujet d'Épreuve — Durée : {s.duration}</p>
        </div>
        <p className="text-base text-slate-800 dark:text-slate-200 leading-relaxed font-medium">{s.prompt}</p>
      </div>

      <button
        onClick={() => setShowCriteria(p => !p)}
        className="text-xs text-teal-700 dark:text-cyan-400 hover:underline font-bold mb-3 inline-block cursor-pointer"
      >
        {showCriteria ? 'Masquer la grille d\'évaluation' : '📋 Voir le barème et critères de notation'}
      </button>

      {showCriteria && (
        <div className="space-y-2 mb-4 animate-fade-up">
          {s.criteria.map((cr, i) => (
            <div key={i} className="flex justify-between items-center text-sm p-3 rounded-xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-700">
              <span className="text-slate-700 dark:text-slate-200">{cr.item}</span>
              <span className="tag-blue shrink-0">{cr.pts} pts</span>
            </div>
          ))}
        </div>
      )}
    </Section>
  );
}

function InterviewStep({ s }) {
  const [revealed, setRevealed] = useState({});
  const toggle = (i) => setRevealed(p => ({ ...p, [i]: !p[i] }));

  return (
    <Section>
      <StepHeader step={s.id} title={s.title} icon={s.icon} />
      <div className="space-y-4">
        {s.questions.map((q, i) => (
          <div key={i} className="rounded-xl border border-slate-200 dark:border-slate-700/50 bg-slate-50 dark:bg-slate-800/40 p-4 sm:p-5">
            <div className="flex items-start gap-3 mb-2.5">
              <span className="text-lg">👔</span>
              <p className="text-base font-bold text-slate-900 dark:text-white leading-snug">{q.q}</p>
            </div>
            <button
              onClick={() => toggle(i)}
              className="text-xs text-teal-700 dark:text-cyan-400 hover:underline font-bold mt-1 cursor-pointer"
            >
              {revealed[i] ? 'Masquer la réponse attendue' : '💡 Voir la réponse attendue par le recruteur'}
            </button>
            {revealed[i] && (
              <div className="alert-tip mt-3 animate-fade-up">
                <p className="text-base text-slate-800 dark:text-slate-200 leading-relaxed font-medium">{q.a}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </Section>
  );
}

function PracticalStep({ s, diagramType }) {
  const [step, setStep] = useState(0);

  return (
    <Section>
      <StepHeader step={s.id} title={s.title} icon={s.icon} />
      <div className="alert-info mb-4">
        <p className="text-base text-slate-800 dark:text-slate-200 leading-relaxed font-medium">{s.scenario}</p>
      </div>
      <div className="space-y-3 mb-5">
        {s.phases.map((ph, i) => (
          <div
            key={i}
            className={`rounded-xl border p-4 transition-all ${
              i <= step
                ? 'bg-slate-50 dark:bg-slate-800/70 border-teal-300 dark:border-cyan-500/40 shadow-xs'
                : 'opacity-50 border-slate-200 dark:border-slate-700/30'
            }`}
          >
            <div className="flex items-center gap-3 mb-2">
              <div className="step-badge">{i + 1}</div>
              <p className="text-base font-bold text-slate-900 dark:text-white">{ph.title}</p>
            </div>
            {i <= step ? (
              <p className="text-base text-slate-700 dark:text-slate-200 leading-relaxed">{ph.action}</p>
            ) : (
              <button
                onClick={() => setStep(i)}
                className="text-xs text-teal-700 dark:text-cyan-400 hover:underline font-bold cursor-pointer"
              >
                Déverrouiller l'étape {i + 1} →
              </button>
            )}
          </div>
        ))}
      </div>
      <DiagramViewer type={s.diagramType || diagramType} title="Schéma d'Exécution & Détails du Cas Pratique" />
      {step >= 2 && (
        <div className="alert-warning mt-4 animate-fade-up">
          <p className="text-base text-orange-900 dark:text-orange-200 font-bold">⚠️ Conclusion d'ingénierie : {s.conclusion}</p>
        </div>
      )}
    </Section>
  );
}

function SummaryStep({ s }) {
  return (
    <Section className="border-teal-300 dark:border-cyan-500/30 bg-teal-50/40 dark:bg-slate-900/50">
      <StepHeader step={s.id} title={s.title} icon={s.icon} />
      <div className="prose-custom">{parseLatexContent(s.content)}</div>
    </Section>
  );
}

function KeyPointsStep({ s }) {
  return (
    <Section>
      <StepHeader step={s.id} title={s.title} icon={s.icon} />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {s.points.map((pt, i) => (
          <div
            key={i}
            className="flex items-start gap-3 rounded-xl bg-white dark:bg-slate-800/90 border border-slate-200/90 dark:border-slate-700 p-4 shadow-2xs transition-all hover:border-teal-300 dark:hover:border-slate-600"
          >
            <span className="text-amber-500 dark:text-amber-400 shrink-0 text-lg mt-0.5">⭐</span>
            <div className="text-base text-slate-900 dark:text-slate-100 font-semibold leading-relaxed break-words flex-1">
              {renderInline(pt)}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}

function SelfAssessmentStep({ s }) {
  const [checked, setChecked] = useState([]);
  const toggle = (i) => setChecked(p => p.includes(i) ? p.filter(x => x !== i) : [...p, i]);
  const pct = Math.round((checked.length / s.objectives.length) * 100);

  return (
    <Section className="border-emerald-300 dark:border-emerald-500/30 bg-emerald-50/40 dark:bg-emerald-950/20">
      <StepHeader step={s.id} title={s.title} icon={s.icon} />
      <p className="text-base text-slate-700 dark:text-slate-300 mb-4 font-medium">{s.description}</p>
      <div className="space-y-2.5 mb-5">
        {s.objectives.map((obj, i) => (
          <label key={i} className="flex items-start gap-3 cursor-pointer rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800/60 p-3 transition-colors">
            <input
              type="checkbox"
              checked={checked.includes(i)}
              onChange={() => toggle(i)}
              className="mt-1 accent-emerald-600 dark:accent-emerald-500 w-4 h-4"
            />
            <span className={`text-base transition-colors ${checked.includes(i) ? 'text-emerald-700 dark:text-emerald-300 line-through font-medium' : 'text-slate-800 dark:text-slate-200'}`}>{obj}</span>
          </label>
        ))}
      </div>
      <div className="rounded-xl bg-white dark:bg-slate-800/80 p-4 border border-slate-200 dark:border-transparent shadow-sm">
        <div className="flex justify-between text-sm mb-2 font-semibold">
          <span className="text-slate-700 dark:text-slate-300">Objectifs atteints</span>
          <span className={`font-mono ${pct >= 80 ? 'text-emerald-600 dark:text-emerald-400' : pct >= 50 ? 'text-amber-600 dark:text-yellow-400' : 'text-slate-500'}`}>{pct}%</span>
        </div>
        <div className="h-2.5 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
          <div
            className={`h-full rounded-full transition-all duration-500 ${pct >= 80 ? 'bg-emerald-500' : pct >= 50 ? 'bg-amber-500' : 'bg-slate-400'}`}
            style={{ width: `${pct}%` }}
          />
        </div>
        {pct === 100 && (
          <div className="mt-3.5 text-center">
            <p className="text-3xl">🏆</p>
            <p className="text-emerald-700 dark:text-emerald-300 font-bold text-base mt-1">Leçon validée avec succès ! Félicitations !</p>
          </div>
        )}
      </div>
    </Section>
  );
}

// ── Main Component ─────────────────────────────────────────────────────────────

export default function LessonCanvas({ module, theme }) {
  const [angle, setAngle] = useState(35);
  const [hypotenuse, setHypotenuse] = useState(10);
  const [showSciCalc, setShowSciCalc] = useState(false);
  const [activeTab, setActiveTab] = useState('widget'); // 'widget' | 'diagram' | 'cheatsheet' | 'glossary'
  const contentRef = useRef(null);

  // Load lesson dynamically for ALL 35 modules
  const lesson = getLessonForModule(module);
  const diagramType = lesson.diagramType || 'trig_interactive';

  const renderStep = (s) => {
    const props = { s, showSciCalc, setShowSciCalc, diagramType, moduleSlug: module?.slug };
    switch (s.type) {
      case 'definition': return <DefinitionStep key={s.id} {...props} />;
      case 'importance': return <ImportanceStep key={s.id} {...props} />;
      case 'applications': return <ApplicationsStep key={s.id} {...props} />;
      case 'theory': return <TheoryStep key={s.id} {...props} />;
      case 'formulas': return <FormulasStep key={s.id} {...props} />;
      case 'stepbystep': return <StepByStepSection key={s.id} {...props} />;
      case 'units': return <UnitsStep key={s.id} {...props} />;
      case 'hypotheses': return <HypothesesStep key={s.id} {...props} />;
      case 'examples_simple': return <ExamplesSimpleStep key={s.id} {...props} />;
      case 'examples_real': return <RealExamplesStep key={s.id} {...props} />;
      case 'interactive_diagram': return <DiagramStep key={s.id} {...props} />;
      case 'mistakes': return <MistakesStep key={s.id} {...props} />;
      case 'tips': return <TipsStep key={s.id} {...props} />;
      case 'norms': return <NormsStep key={s.id} {...props} />;
      case 'exercises': return <ExercisesStep key={s.id} {...props} />;
      case 'corrections': return (
        <Section key={s.id}>
          <StepHeader step={s.id} title={s.title} icon={s.icon} />
          <div className="alert-info">
            <p className="text-base text-teal-800 dark:text-cyan-300 font-medium">{s.note}</p>
          </div>
        </Section>
      );
      case 'quiz': return <QuizStep key={s.id} {...props} />;
      case 'exam': return <ExamStep key={s.id} {...props} />;
      case 'interview': return <InterviewStep key={s.id} {...props} />;
      case 'practical': return <PracticalStep key={s.id} {...props} />;
      case 'summary': return <SummaryStep key={s.id} {...props} />;
      case 'keypoints': return <KeyPointsStep key={s.id} {...props} />;
      case 'self_assessment': return <SelfAssessmentStep key={s.id} {...props} />;
      default: return null;
    }
  };

  return (
    <div className="w-full max-w-5xl mx-auto overflow-x-hidden space-y-6">
      {showSciCalc && <SciCalc onClose={() => setShowSciCalc(false)} />}

      {/* Lesson Header Banner */}
      <div className="rounded-3xl border border-teal-200/80 dark:border-slate-800 bg-gradient-to-br from-teal-50/70 via-cyan-50/40 to-white dark:from-slate-900 dark:via-slate-900 dark:to-slate-950 p-4 sm:p-7 relative overflow-hidden w-full max-w-full mx-0 shadow-sm">
        <div className="absolute inset-0 eng-grid-bg opacity-30 dark:opacity-50 pointer-events-none" />
        <div className="relative space-y-4">
          <div className="flex flex-wrap items-start justify-between gap-4">
            <div className="min-w-0 flex-1">
              <div className="flex items-center gap-2 sm:gap-3 mb-3 flex-wrap">
                <span className="text-2xl sm:text-3xl shrink-0">{module.icon}</span>
                <span className="tag-blue text-xs font-bold">Module {module.id}</span>
                <span className="tag-green text-xs font-bold">🔓 Accès Libre</span>
                <span className={`tag-${lesson.level.includes('Débutant') ? 'green' : 'orange'} text-xs font-bold`}>{lesson.level}</span>
                <span className="tag-blue text-xs font-bold">{lesson.duration}</span>
              </div>
              <p className="text-xs sm:text-sm uppercase tracking-widest text-teal-700 dark:text-cyan-400 font-bold mb-1.5">{lesson.subtitle}</p>
              <h2 className="text-xl sm:text-3xl font-extrabold text-slate-900 dark:text-white leading-tight break-words">{lesson.title}</h2>
              <div className="flex flex-wrap gap-2 mt-3.5">
                {lesson.tags.map(t => (
                  <span key={t} className="text-xs bg-white text-slate-700 border border-slate-200 dark:bg-slate-800 dark:text-slate-300 dark:border-slate-700 px-2.5 py-1 rounded-full shadow-2xs font-medium">{t}</span>
                ))}
              </div>
            </div>
            <div className="shrink-0 w-full sm:w-auto">
              <button
                onClick={() => setShowSciCalc(true)}
                className="w-full sm:w-auto flex items-center justify-center gap-2 bg-gradient-to-r from-teal-600 to-cyan-600 hover:from-teal-700 hover:to-cyan-700 text-white px-5 py-3 rounded-2xl text-sm font-bold transition-all shadow-md cursor-pointer"
              >
                🧮 Calculatrice Scientifique
              </button>
            </div>
          </div>

          {/* Step progress bar */}
          <div className="pt-2">
            <div className="flex justify-between text-xs text-slate-500 dark:text-slate-400 mb-1.5 font-medium">
              <span>{lesson.steps.length} étapes pédagogiques complètes</span>
              <span>100% Déverrouillé</span>
            </div>
            <div className="flex gap-1">
              {lesson.steps.map(s => (
                <div
                  key={s.id}
                  className="h-2 flex-1 rounded-full bg-teal-500/70 dark:bg-cyan-500/70"
                  title={`${s.id}. ${s.title}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ── Main Stream of 23 Canonical Steps (100% Reading Area) ── */}
      <div ref={contentRef} className="space-y-6 w-full max-w-full min-w-0">
        {lesson.steps.map(s => renderStep(s))}
      </div>

      {/* ── Interactive Engineering Workstation & Tools (Bottom Dock) ── */}
      <div className="rounded-3xl border border-teal-200 dark:border-slate-800 bg-gradient-to-br from-teal-50/50 via-cyan-50/30 to-white dark:from-slate-900 dark:via-slate-900 dark:to-slate-950 p-4 sm:p-7 shadow-lg space-y-5 my-6">
        {/* Workstation Header & Tabs */}
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-teal-100 dark:border-slate-800 pb-4">
          <div className="flex items-center gap-2.5">
            <span className="w-9 h-9 rounded-2xl bg-gradient-to-br from-teal-600 to-cyan-500 text-white flex items-center justify-center text-lg shadow-md">
              🧰
            </span>
            <div>
              <span className="text-[10px] uppercase font-bold tracking-widest text-teal-700 dark:text-cyan-400">Atelier Pratique & Outils Numériques</span>
              <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white">Poste de Calcul & Aide-Mémoire du Module</h3>
            </div>
          </div>

          {/* Tabs */}
          <div className="flex flex-wrap gap-1.5 p-1 bg-white dark:bg-slate-950 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-inner text-xs font-semibold">
            {[
              { key: 'widget', label: '🔢 Calculateur Interactif' },
              { key: 'diagram', label: '📐 Schéma Interactif' },
              { key: 'cheatsheet', label: '💡 Formules Clés' },
              { key: 'glossary', label: '📖 Lexique Bilingue' },
            ].map(tab => (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                className={`px-3.5 py-2 rounded-xl transition-all cursor-pointer ${
                  activeTab === tab.key
                    ? 'bg-teal-600 text-white shadow-md font-bold'
                    : 'text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-200'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Active Tab Content */}
        <div className="w-full">
          {activeTab === 'widget' && (
            <div className="rounded-2xl bg-white dark:bg-slate-950/80 p-4 sm:p-6 border border-slate-200 dark:border-slate-800 shadow-sm">
              <TrigWidget angle={angle} setAngle={setAngle} hypotenuse={hypotenuse} setHypotenuse={setHypotenuse} />
            </div>
          )}
          {activeTab === 'diagram' && (
            <div className="rounded-2xl bg-white dark:bg-slate-950/80 p-4 sm:p-6 border border-slate-200 dark:border-slate-800 shadow-sm">
              <DiagramViewer type={diagramType} title={`Diagramme Interactif — ${module.title}`} />
            </div>
          )}
          {activeTab === 'cheatsheet' && (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              {[
                { label: 'Équilibre fondamental', formula: '\\sum \\vec{F} = \\vec{0}, \\quad \\sum \\vec{M} = \\vec{0}' },
                { label: 'Contrainte normale (Navier)', formula: '\\sigma = \\frac{N}{A} + \\frac{M \\cdot y}{I}' },
                { label: 'Combinaison fondamentale ELU', formula: '1{,}35 G + 1{,}50 Q \\le f_{yd}' },
                { label: 'Loi de Hooke 1D', formula: '\\sigma = E \\cdot \\varepsilon' },
                { label: 'Cisaillement Jourawski', formula: '\\tau_{max} = 1{,}5 \\cdot \\frac{V}{A}' },
                { label: 'Capacité portante Terzaghi', formula: 'q_u = c N_c + q N_q + \\frac{1}{2} \\gamma B N_\\gamma' },
              ].map(item => (
                <div key={item.label} className="p-3.5 rounded-xl bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 shadow-2xs">
                  <span className="tag-blue mb-1.5 inline-block text-[11px] font-bold">{item.label}</span>
                  <div className="overflow-x-auto py-1">
                    <SafeInlineMath math={item.formula} />
                  </div>
                </div>
              ))}
            </div>
          )}
          {activeTab === 'glossary' && (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 bg-white dark:bg-slate-950 p-4 rounded-2xl border border-slate-200 dark:border-slate-800">
              {[
                { fr: 'Contrainte normale', en: 'Normal Stress (σ)' },
                { fr: 'Effort tranchant', en: 'Shear Force (V)' },
                { fr: 'Moment fléchissant', en: 'Bending Moment (M)' },
                { fr: 'Armature tendue', en: 'Tension Rebar (As)' },
                { fr: 'Hauteur utile', en: 'Effective Depth (d)' },
                { fr: 'Enrobage nominal', en: 'Nominal Concrete Cover (c_nom)' },
                { fr: 'Nappe phréatique', en: 'Water Table' },
                { fr: 'Limite d\'élasticité', en: 'Yield Strength (f_yk)' },
              ].map(g => (
                <div key={g.en} className="flex justify-between items-center p-2.5 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-100 dark:border-slate-800/80 text-sm">
                  <span className="text-slate-900 dark:text-white font-medium">{g.fr}</span>
                  <span className="text-teal-700 dark:text-cyan-400 font-mono text-xs font-semibold">{g.en}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
