import { useState, useRef } from 'react';
import 'katex/dist/katex.min.css';
import { SafeBlockMath, SafeInlineMath } from './SafeMath.jsx';
import TrigWidget from './TrigWidget.jsx';
import TrigSVG from './TrigSVG.jsx';
import SciCalc from './SciCalc.jsx';
import DiagramViewer from './DiagramViewer.jsx';
import FormulaExplainer from './FormulaExplainer.jsx';
import StructuralSketches from './StructuralSketches.jsx';
import TechTooltip, { enhanceTextWithTerms } from './TechTooltip.jsx';
import { getLessonForModule } from '../data/lesson_generator.js';

// ── Helpers ──────────────────────────────────────────────────────────────────

function parseLatexContent(text) {
  if (!text) return null;
  const parts = text.split(/(\$\$[\s\S]+?\$\$|\$[^$]+\$)/g);
  return parts.map((part, i) => {
    if (part.startsWith('$$') && part.endsWith('$$')) {
      const math = part.slice(2, -2).trim();
      return (
        <div key={i} className="overflow-x-auto max-w-full py-1 math-scroll">
          <SafeBlockMath math={math} />
        </div>
      );
    }
    if (part.startsWith('$') && part.endsWith('$')) {
      return <SafeInlineMath key={i} math={part.slice(1, -1)} />;
    }
    const lines = part.split('\n');
    return lines.map((line, li) => {
      if (line.startsWith('### ')) return <h4 key={li} className="text-base font-bold text-slate-900 dark:text-white mt-4 mb-2 break-words">{renderInline(line.slice(4))}</h4>;
      if (line.startsWith('## ')) return <h3 key={li} className="text-lg font-bold text-slate-900 dark:text-white mt-5 mb-2 break-words">{renderInline(line.slice(3))}</h3>;
      if (line.startsWith('> ')) return <blockquote key={li} className="border-l-2 border-blue-500 dark:border-sky-500 pl-3 my-2 text-blue-900 dark:text-sky-200 text-sm italic break-words">{renderInline(line.slice(2))}</blockquote>;
      if (line.startsWith('- ')) return <li key={li} className="text-slate-600 dark:text-slate-300 text-sm ml-4 list-disc leading-6 break-words">{renderInline(line.slice(2))}</li>;
      if (line.trim() === '') return <br key={li} />;
      return <p key={li} className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed break-words">{renderInline(line)}</p>;
    });
  });
}

function renderInline(text) {
  if (!text) return null;
  const parts = text.split(/(\*\*[^*]+\*\*|\*[^*]+\*|`[^`]+`)/g);
  return parts.map((p, i) => {
    if (p.startsWith('**') && p.endsWith('**')) return <strong key={i} className="text-slate-900 dark:text-white font-semibold">{enhanceTextWithTerms(p.slice(2, -2))}</strong>;
    if (p.startsWith('*') && p.endsWith('*')) return <em key={i} className="text-slate-700 dark:text-slate-200 italic">{enhanceTextWithTerms(p.slice(1, -1))}</em>;
    if (p.startsWith('`') && p.endsWith('`')) return <code key={i} className="bg-slate-100 dark:bg-slate-800 text-blue-700 dark:text-sky-300 px-1.5 py-0.5 rounded text-xs mono">{p.slice(1, -1)}</code>;
    return <span key={i}>{enhanceTextWithTerms(p)}</span>;
  });
}

// ── Step Icon Badge ───────────────────────────────────────────────────────────
function StepHeader({ step, title, icon }) {
  return (
    <div className="flex items-center gap-3 mb-4">
      <div className="step-badge">{step}</div>
      <span className="text-lg shrink-0">{icon}</span>
      <h3 className="text-base font-bold text-slate-900 dark:text-white leading-snug">{title}</h3>
    </div>
  );
}

// ── Section Card wrapper ──────────────────────────────────────────────────────
function Section({ children, className = '' }) {
  return (
    <div className={`rounded-2xl border border-slate-200 dark:border-slate-700/60 bg-white dark:bg-slate-800 p-3 sm:p-5 card-hover animate-fade-up w-full max-w-full mx-0 overflow-hidden shadow-sm ${className}`}>
      {children}
    </div>
  );
}

// ── Step renderers ────────────────────────────────────────────────────────────

function DefinitionStep({ s }) {
  return (
    <Section>
      <StepHeader step={s.id} title={s.title} icon={s.icon} />
      <div className="space-y-3">
        <div className="flex flex-wrap gap-2 sm:gap-3">
          <span className="tag-blue">🇫🇷 {s.fr}</span>
          <span className="tag-orange">🇬🇧 {s.en}</span>
        </div>
        <div className="alert-info mt-3">
          <p className="text-xs text-blue-700 dark:text-sky-300 font-semibold mb-1">💼 Utilisation métier</p>
          <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">{s.metier}</p>
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
      <div className="grid gap-2 sm:grid-cols-2">
        {s.examples.map(ex => (
          <div key={ex.context} className="rounded-xl bg-slate-50 dark:bg-slate-800/60 p-3 border border-slate-200 dark:border-slate-700/40">
            <span className="tag-orange mb-2 inline-block">{ex.context}</span>
            <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">{ex.text}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}

function TheoryStep({ s, diagramType, moduleSlug }) {
  return (
    <Section>
      <StepHeader step={s.id} title={s.title} icon={s.icon} />
      <div className="prose-custom mb-4">{parseLatexContent(s.content)}</div>
      {/* Croquis didactique de dimensionnement (section, contraintes, déformations) */}
      <StructuralSketches title="Croquis de Dimensionnement — Section b×h, Contraintes & Axe Neutre" />
      <DiagramViewer type={s.diagramType || diagramType} title="Schéma Théorique & Cotations" />
    </Section>
  );
}

function FormulasStep({ s, diagramType, moduleSlug }) {
  return (
    <Section>
      <StepHeader step={s.id} title={s.title} icon={s.icon} />
      <div className="space-y-4 mb-4 w-full max-w-full">
        {s.formulas.map((f, i) => (
          <FormulaExplainer
            key={f.name || i}
            formula={f}
            name={f.name}
            latex={f.latex}
            description={f.description}
            variables={f.variables}
            ruleOfThumb={f.ruleOfThumb}
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
        <p className="text-sm text-blue-900 dark:text-sky-300 font-medium">📋 Problème :</p>
        <p className="text-sm text-slate-700 dark:text-slate-300 mt-1 italic">{s.problem}</p>
      </div>
      <div className="space-y-2">
        {s.steps_demo.map(step => (
          <div
            key={step.n}
            onClick={() => toggle(step.n)}
            className="rounded-xl border border-slate-200 dark:border-slate-700/50 bg-slate-50 dark:bg-slate-800/40 p-3 cursor-pointer hover:bg-slate-100 dark:hover:bg-slate-800/70 transition-all"
          >
            <div className="flex items-center gap-3">
              <div className="step-badge">{step.n}</div>
              <p className={`text-sm transition-colors ${revealed.includes(step.n) ? 'text-slate-900 dark:text-white font-semibold' : 'text-slate-600 dark:text-slate-400'}`}>
                {step.text}
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="formula-card mt-4 w-full max-w-full overflow-x-auto">
        <p className="text-xs text-emerald-600 dark:text-emerald-400 font-semibold mb-2">✅ Résultat :</p>
        <div className="overflow-x-auto max-w-full py-1 math-scroll">
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
        <table className="w-full text-sm text-left border-collapse">
          <thead>
            <tr className="border-b border-slate-200 dark:border-slate-700/50">
              <th className="text-xs text-slate-500 dark:text-slate-400 uppercase pb-2 pr-4">Grandeur</th>
              <th className="text-xs text-slate-500 dark:text-slate-400 uppercase pb-2 pr-4">SI</th>
              <th className="text-xs text-slate-500 dark:text-slate-400 uppercase pb-2 pr-4">Impérial</th>
              <th className="text-xs text-slate-500 dark:text-slate-400 uppercase pb-2">Conversion</th>
            </tr>
          </thead>
          <tbody>
            {s.table.map(row => (
              <tr key={row.grandeur} className="border-b border-slate-100 dark:border-slate-800/50">
                <td className="py-2 pr-4 text-slate-900 dark:text-white font-medium whitespace-nowrap">{row.grandeur}</td>
                <td className="py-2 pr-4 text-blue-600 dark:text-sky-300 font-mono text-xs whitespace-nowrap">{row.si}</td>
                <td className="py-2 pr-4 text-orange-600 dark:text-orange-300 font-mono text-xs whitespace-nowrap">{row.imperial}</td>
                <td className="py-2 text-slate-600 dark:text-slate-400 text-xs">{row.conversion}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="alert-info mt-3">
        <p className="text-xs text-slate-700 dark:text-slate-300">{s.note}</p>
      </div>
    </Section>
  );
}

function HypothesesStep({ s }) {
  const colorMap = { warning: 'alert-warning', info: 'alert-info', tip: 'alert-tip' };
  const iconMap = { warning: '⚠️', info: 'ℹ️', tip: '💡' };
  return (
    <Section>
      <StepHeader step={s.id} title={s.title} icon={s.icon} />
      <div className="space-y-2">
        {s.items.map((item, i) => (
          <div key={i} className={colorMap[item.type]}>
            <p className="text-sm text-slate-700 dark:text-slate-300">
              <span className="mr-2">{iconMap[item.type]}</span>
              <span dangerouslySetInnerHTML={{ __html: item.text.replace(/\*\*([^*]+)\*\*/g, '<strong class="text-slate-900 dark:text-white">$1</strong>') }} />
            </p>
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
      <div className="space-y-4">
        {s.examples.map(ex => (
          <div key={ex.title} className="rounded-xl border border-slate-200 dark:border-slate-700/40 bg-slate-50 dark:bg-slate-800/40 p-4">
            <p className="text-sm font-bold text-slate-900 dark:text-white mb-2">{ex.title}</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs mb-3">
              <div><p className="text-slate-500">Données :</p><p className="text-slate-700 dark:text-slate-300 font-medium">{ex.given}</p></div>
              <div><p className="text-slate-500">Trouver :</p><p className="text-blue-600 dark:text-sky-300 font-medium">{ex.find}</p></div>
            </div>
            <div className="formula-card w-full max-w-full overflow-x-auto">
              <div className="overflow-x-auto max-w-full py-1 math-scroll">
                <SafeBlockMath math={ex.solution_latex} />
              </div>
            </div>
            <div className="flex items-center gap-2 mt-2">
              <span className="text-emerald-500 text-sm">✅</span>
              <p className="text-sm font-mono text-emerald-600 dark:text-emerald-300 font-bold">{ex.result}</p>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}

function RealExamplesStep({ s, diagramType }) {
  return (
    <Section>
      <StepHeader step={s.id} title={s.title} icon={s.icon} />
      <div className="space-y-4 mb-4">
        {s.examples.map(ex => (
          <div key={ex.context} className="rounded-xl border border-slate-200 dark:border-slate-700/40 bg-slate-50 dark:bg-slate-800/30 p-4">
            <span className="tag-orange mb-2 inline-block">{ex.context}</span>
            <p className="text-sm text-slate-700 dark:text-slate-300 mb-3 italic leading-relaxed">{ex.scenario}</p>
            {ex.decomposition_latex && (
              <div className="formula-card mb-3 w-full max-w-full overflow-x-auto">
                <div className="overflow-x-auto max-w-full py-1 math-scroll">
                  <SafeBlockMath math={ex.decomposition_latex} />
                </div>
              </div>
            )}
            {ex.check_latex && (
              <div className="formula-card mb-3 w-full max-w-full overflow-x-auto">
                <div className="overflow-x-auto max-w-full py-1 math-scroll">
                  <SafeBlockMath math={ex.check_latex} />
                </div>
              </div>
            )}
            <div className="alert-tip">
              <p className="text-xs text-emerald-700 dark:text-emerald-300">💡 Leçon professionnelle : {ex.lesson}</p>
            </div>
          </div>
        ))}
      </div>
      <DiagramViewer type={s.diagramType || diagramType} title="Diagramme d'Application sur le Terrain" />
    </Section>
  );
}

function DiagramStep({ s, diagramType }) {
  return (
    <Section>
      <StepHeader step={s.id} title={s.title} icon={s.icon} />
      <div className="alert-info mb-3">
        <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">{s.description}</p>
      </div>
      <ul className="space-y-1 mb-4">
        {s.diagram_description.map((d, i) => (
          <li key={i} className="text-xs text-slate-600 dark:text-slate-400 flex gap-2">
            <span>•</span>
            <span dangerouslySetInnerHTML={{ __html: d.replace(/\*\*([^*]+)\*\*/g, '<strong class="text-slate-900 dark:text-slate-200">$1</strong>') }} />
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
      <div className="space-y-3">
        {s.items.map((item, i) => (
          <div key={i} className="rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700/40 p-4">
            <div className="flex gap-3 mb-2">
              <span className="text-rose-500 text-base shrink-0">❌</span>
              <p className="text-sm text-rose-700 dark:text-rose-200 font-medium">{item.mistake}</p>
            </div>
            <div className="alert-warning mb-2">
              <p className="text-xs text-orange-800 dark:text-orange-200">⚠️ Piège : {item.trap}</p>
            </div>
            <div className="alert-tip">
              <p className="text-xs text-emerald-800 dark:text-emerald-200">✅ Correction : {item.fix}</p>
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
      <div className="space-y-2">
        {s.tips.map((tip, i) => (
          <div key={i} className="flex gap-3 rounded-xl bg-emerald-50 dark:bg-emerald-500/5 border border-emerald-200 dark:border-emerald-500/20 p-3">
            <span className="text-emerald-500 dark:text-emerald-400 shrink-0">💡</span>
            <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">{tip}</p>
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
      <div className="space-y-2">
        {s.norms.map(n => (
          <div key={n.code} className="flex gap-3 items-start rounded-xl bg-blue-50/50 dark:bg-violet-500/5 border border-blue-200 dark:border-violet-500/20 p-3">
            <span className="tag-blue shrink-0">{n.code}</span>
            <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">{n.description}</p>
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
          className="flex items-center gap-2 text-xs bg-slate-100 hover:bg-violet-100 border border-violet-300 text-violet-700 dark:bg-slate-800 dark:hover:bg-violet-600/20 dark:border-violet-500/30 dark:text-violet-300 px-3 py-2 rounded-xl transition-all shadow-sm"
        >
          🧮 Calculatrice scientifique
        </button>
      </div>
      <div className="space-y-4">
        {s.exercises.map(ex => (
          <div key={ex.id} className="rounded-xl border border-slate-200 dark:border-slate-700/40 bg-slate-50 dark:bg-slate-800/30 p-4">
            <div className="flex items-start gap-3 mb-3">
              <div className="step-badge shrink-0">{ex.number}</div>
              <div>
                <span className={`tag-${ex.difficulty === 'Facile' ? 'green' : ex.difficulty === 'Moyen' ? 'blue' : 'orange'} mb-2 inline-block`}>
                  {ex.difficulty}
                </span>
                <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">{ex.text}</p>
              </div>
            </div>

            <div className="alert-info mb-3">
              <p className="text-xs text-blue-700 dark:text-sky-300">💡 Indice : {ex.hint}</p>
            </div>

            <textarea
              placeholder="Entrez votre réponse ici..."
              value={answers[ex.id] || ''}
              onChange={e => setAnswers(prev => ({ ...prev, [ex.id]: e.target.value }))}
              className="w-full rounded-xl border border-slate-200 bg-white dark:border-slate-700 dark:bg-slate-900 px-3 py-2 text-sm text-slate-900 dark:text-slate-200 placeholder:text-slate-400 dark:placeholder:text-slate-600 min-h-16 resize-none shadow-inner"
            />

            <div className="flex gap-2 mt-2">
              <button
                onClick={() => setRevealed(prev => ({ ...prev, [ex.id]: !prev[ex.id] }))}
                className="text-xs bg-slate-100 hover:bg-slate-200 border border-slate-300 text-slate-700 dark:bg-slate-800 dark:hover:bg-slate-700 dark:border-slate-600 dark:text-slate-300 px-3 py-2 rounded-lg transition-colors font-medium shadow-sm"
              >
                {revealed[ex.id] ? 'Masquer correction' : '📋 Voir la correction'}
              </button>
            </div>

            {revealed[ex.id] && (
              <div className="mt-3 formula-card animate-fade-up w-full max-w-full overflow-x-auto">
                <p className="text-xs text-emerald-600 dark:text-emerald-400 font-semibold mb-2">✅ Solution :</p>
                <div className="overflow-x-auto max-w-full py-1 math-scroll">
                  <SafeBlockMath math={ex.answer_latex} />
                </div>
                <p className="text-sm text-emerald-700 dark:text-emerald-300 font-mono mt-2 break-words font-medium">{ex.answer_text}</p>
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
        <div className={`rounded-xl p-4 mb-4 ${score >= s.questions.length * 0.8 ? 'alert-tip' : 'alert-warning'}`}>
          <p className="text-base font-bold text-slate-900 dark:text-white">
            {score >= s.questions.length * 0.8 ? '🏆' : score >= s.questions.length * 0.5 ? '📈' : '📚'} {' '}
            Score : {score}/{s.questions.length} ({Math.round(score / s.questions.length * 100)}%)
          </p>
          <p className="text-sm mt-1 text-slate-700 dark:text-slate-300 leading-relaxed">
            {score === s.questions.length ? 'Excellent ! Toutes les réponses sont correctes.' :
             score >= s.questions.length * 0.8 ? 'Très bien ! Revoyez les questions ratées.' :
             score >= s.questions.length * 0.5 ? 'Bien. Approfondissez les notions manquantes.' :
             'Relisez les sections 4 et 5 et réessayez.'}
          </p>
        </div>
      )}

      <div className="space-y-5">
        {s.questions.map((q, qi) => {
          const chosen = answers[q.id];
          const isSubmitted = submitted;
          return (
            <div key={q.id} className="rounded-xl border border-slate-200 dark:border-slate-700/40 bg-slate-50 dark:bg-slate-800/30 p-4 shadow-sm">
              <p className="text-sm font-semibold text-slate-900 dark:text-white mb-3">
                <span className="text-slate-400 dark:text-slate-500 mr-2">Q{qi + 1}.</span>
                {q.question}
              </p>
              <div className="space-y-2">
                {q.options.map(opt => {
                  let cls = 'quiz-option rounded-xl border border-slate-200 dark:border-slate-700/50 bg-white dark:bg-slate-800/50 px-4 py-3 text-sm text-slate-700 dark:text-slate-300 w-full text-left shadow-sm';
                  if (isSubmitted) {
                    if (opt.id === q.correct) cls += ' selected-correct';
                    else if (opt.id === chosen && opt.id !== q.correct) cls += ' selected-incorrect';
                  } else if (chosen === opt.id) {
                    cls += ' bg-blue-50 border-blue-400 text-blue-700 dark:bg-sky-500/20 dark:border-sky-500/50 dark:text-sky-200 font-medium';
                  }
                  return (
                    <button
                      key={opt.id}
                      onClick={() => !isSubmitted && setAnswers(prev => ({ ...prev, [q.id]: opt.id }))}
                      className={cls}
                      disabled={isSubmitted}
                    >
                      <span className="font-mono text-slate-400 dark:text-slate-500 mr-2">{opt.id.toUpperCase()})</span>
                      {opt.text}
                    </button>
                  );
                })}
              </div>
              {isSubmitted && (
                <div className="alert-info mt-3">
                  <p className="text-xs text-blue-700 dark:text-sky-300">💡 {q.explanation}</p>
                </div>
              )}
            </div>
          );
        })}
      </div>

      <div className="flex gap-3 mt-4">
        {!submitted ? (
          <button
            onClick={handleSubmit}
            disabled={Object.keys(answers).length < s.questions.length}
            className="flex-1 bg-gradient-to-r from-blue-600 to-sky-500 text-white py-3 rounded-xl font-semibold text-sm disabled:opacity-40 hover:from-blue-700 hover:to-sky-600 transition-all shadow-sm"
          >
            Soumettre ({Object.keys(answers).length}/{s.questions.length} répondues)
          </button>
        ) : (
          <button onClick={handleReset} className="flex-1 bg-slate-200 hover:bg-slate-300 text-slate-800 dark:bg-slate-700 dark:hover:bg-slate-600 dark:text-white py-3 rounded-xl font-semibold text-sm transition-colors shadow-sm">
            🔄 Recommencer le quiz
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
      <div className="space-y-3">
        {s.questions.map((q, i) => (
          <div key={i} className="flex gap-3 rounded-xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-700/40 p-4">
            <div className="step-badge shrink-0">{i + 1}</div>
            <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">{q}</p>
          </div>
        ))}
      </div>
      <div className="alert-info mt-4">
        <p className="text-xs text-blue-700 dark:text-sky-300">🎓 Ces questions sont typiques d'un examen de fin de semestre de licence ou de master en génie civil.</p>
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
        {s.questions.map((q, i) => (
          <div key={i} className="rounded-xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-700/40 p-4">
            <div className="flex gap-3 mb-3">
              <div className="step-badge shrink-0">{i + 1}</div>
              <p className="text-sm font-semibold text-slate-900 dark:text-white">{q.question}</p>
            </div>
            <button
              onClick={() => setRevealed(p => ({ ...p, [i]: !p[i] }))}
              className="text-xs bg-slate-100 hover:bg-slate-200 text-slate-700 border border-slate-300 dark:bg-slate-700 dark:hover:bg-slate-600 dark:text-slate-300 dark:border-transparent px-3 py-1.5 rounded-lg transition-colors font-medium shadow-sm"
            >
              {revealed[i] ? 'Masquer' : '💼 Voir la piste de réponse'}
            </button>
            {revealed[i] && (
              <div className="alert-tip mt-2 animate-fade-up">
                <p className="text-xs text-emerald-800 dark:text-emerald-200 leading-relaxed">{q.answer_hint}</p>
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
      <div className="mb-4">
        <span className="tag-orange">{s.scenario}</span>
        <div className="alert-info mt-3">{parseLatexContent(s.description)}</div>
      </div>
      <div className="space-y-3 mb-4">
        {[
          { label: 'Calcul des sollicitations de calcul', latex: s.resolution_latex_1 },
          { label: 'Détermination des contraintes', latex: s.resolution_latex_2 },
          { label: 'Vérification du critère de sécurité', latex: s.resolution_latex_3 },
        ].map((r, i) => (
          <div key={i} className="w-full max-w-full overflow-hidden">
            <div className="flex items-center gap-2 mb-1">
              <div className="step-badge">{i + 1}</div>
              <p className="text-xs text-slate-500 dark:text-slate-400 font-medium">{r.label}</p>
            </div>
            {(step > i || i === 0) ? (
              <div className="formula-card animate-fade-up w-full max-w-full overflow-x-auto">
                <div className="overflow-x-auto max-w-full py-1 math-scroll">
                  <SafeBlockMath math={r.latex} />
                </div>
              </div>
            ) : (
              <button onClick={() => setStep(i)} className="text-xs bg-slate-100 hover:bg-slate-200 text-slate-700 border border-slate-300 dark:bg-slate-800 dark:text-slate-400 dark:hover:bg-slate-700 dark:border-slate-700 px-3 py-2 rounded-xl transition-colors font-medium shadow-sm">
                Afficher l'étape {i + 1} →
              </button>
            )}
          </div>
        ))}
      </div>
      <DiagramViewer type={s.diagramType || diagramType} title="Schéma d'Exécution & Détails du Cas Pratique" />
      {step >= 2 && (
        <div className="alert-warning mt-4 animate-fade-up">
          <p className="text-sm text-orange-800 dark:text-orange-200 font-semibold">⚠️ Conclusion : {s.conclusion}</p>
        </div>
      )}
    </Section>
  );
}

function SummaryStep({ s }) {
  return (
    <Section className="border-blue-300 dark:border-sky-500/30 bg-blue-50/50 dark:bg-sky-500/5">
      <StepHeader step={s.id} title={s.title} icon={s.icon} />
      <div className="prose-custom">{parseLatexContent(s.content)}</div>
    </Section>
  );
}

function KeyPointsStep({ s }) {
  return (
    <Section>
      <StepHeader step={s.id} title={s.title} icon={s.icon} />
      <div className="grid gap-2 sm:grid-cols-2">
        {s.points.map((pt, i) => (
          <div key={i} className="flex gap-2 rounded-xl bg-blue-50 dark:bg-gradient-to-r dark:from-blue-500/10 dark:to-transparent border border-blue-200 dark:border-blue-500/20 p-3">
            <span className="text-yellow-500 dark:text-yellow-400 shrink-0">⭐</span>
            <p className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed">{pt}</p>
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
    <Section className="border-emerald-300 dark:border-emerald-500/30 bg-emerald-50/50 dark:bg-emerald-500/5">
      <StepHeader step={s.id} title={s.title} icon={s.icon} />
      <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">{s.description}</p>
      <div className="space-y-2 mb-4">
        {s.objectives.map((obj, i) => (
          <label key={i} className="flex items-start gap-3 cursor-pointer rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800/40 p-2 transition-colors">
            <input
              type="checkbox"
              checked={checked.includes(i)}
              onChange={() => toggle(i)}
              className="mt-0.5 accent-emerald-600 dark:accent-emerald-500"
            />
            <span className={`text-sm transition-colors ${checked.includes(i) ? 'text-emerald-700 dark:text-emerald-300 line-through font-medium' : 'text-slate-700 dark:text-slate-300'}`}>{obj}</span>
          </label>
        ))}
      </div>
      <div className="rounded-xl bg-white dark:bg-slate-800/60 p-4 border border-slate-200 dark:border-transparent shadow-sm">
        <div className="flex justify-between text-xs mb-2">
          <span className="text-slate-600 dark:text-slate-400 font-medium">Objectifs atteints</span>
          <span className={`font-bold font-mono ${pct >= 80 ? 'text-emerald-600 dark:text-emerald-400' : pct >= 50 ? 'text-amber-600 dark:text-yellow-400' : 'text-slate-500 dark:text-slate-400'}`}>{pct}%</span>
        </div>
        <div className="h-2 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
          <div
            className={`h-full rounded-full transition-all duration-500 ${pct >= 80 ? 'bg-emerald-500' : pct >= 50 ? 'bg-amber-500' : 'bg-slate-400'}`}
            style={{ width: `${pct}%` }}
          />
        </div>
        {pct === 100 && (
          <div className="mt-3 text-center">
            <p className="text-2xl">🏆</p>
            <p className="text-emerald-700 dark:text-emerald-300 font-bold text-sm mt-1">Leçon complétée ! Félicitations !</p>
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
  const [activeTab, setActiveTab] = useState('widget'); // 'widget' | 'diagram'
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
            <p className="text-sm text-blue-700 dark:text-sky-300">{s.note}</p>
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
    <div className="w-full max-w-5xl mx-0 sm:mx-auto overflow-x-hidden px-0">
      {showSciCalc && <SciCalc onClose={() => setShowSciCalc(false)} />}

      {/* Lesson Header */}
      <div className="rounded-2xl border border-slate-200 dark:border-slate-700/50 bg-gradient-to-br from-blue-50 via-sky-50/60 to-white dark:from-slate-900 dark:via-slate-900 dark:to-blue-950/50 p-3.5 sm:p-6 mb-4 sm:mb-6 relative overflow-hidden w-full max-w-full mx-0 shadow-sm">
        <div className="absolute inset-0 eng-grid-bg opacity-40 dark:opacity-60 pointer-events-none" />
        <div className="relative">
          <div className="flex flex-wrap items-start justify-between gap-3 sm:gap-4">
            <div className="min-w-0 flex-1">
              <div className="flex items-center gap-1.5 sm:gap-3 mb-2.5 sm:mb-3 flex-wrap">
                <span className="text-xl sm:text-2xl shrink-0">{module.icon}</span>
                <span className="tag-blue">Module {module.id}</span>
                <span className="tag-green">🔓 Accès Libre</span>
                <span className={`tag-${lesson.level.includes('Débutant') ? 'green' : 'orange'}`}>{lesson.level}</span>
                <span className="tag-blue">{lesson.duration}</span>
              </div>
              <p className="text-[10px] sm:text-xs uppercase tracking-widest text-blue-600 dark:text-sky-400 font-semibold mb-1">{lesson.subtitle}</p>
              <h2 className="text-lg sm:text-2xl font-bold text-slate-900 dark:text-white leading-tight break-words">{lesson.title}</h2>
              <div className="flex flex-wrap gap-1.5 sm:gap-2 mt-2.5 sm:mt-3">
                {lesson.tags.map(t => (
                  <span key={t} className="text-[10px] sm:text-xs bg-white text-slate-600 border border-slate-200 dark:bg-slate-800/80 dark:text-slate-400 dark:border-slate-700 px-2 py-0.5 rounded-full shadow-sm">{t}</span>
                ))}
              </div>
            </div>
            <div className="shrink-0 w-full sm:w-auto mt-1 sm:mt-0">
              <button
                onClick={() => setShowSciCalc(true)}
                className="w-full sm:w-auto flex items-center justify-center gap-2 bg-violet-50 hover:bg-violet-100 border border-violet-300 text-violet-700 dark:bg-violet-600/20 dark:hover:bg-violet-600/30 dark:border-violet-500/30 dark:text-violet-300 px-3.5 py-2 sm:px-4 sm:py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all shadow-sm"
              >
                🧮 Calculatrice Scientifique
              </button>
            </div>
          </div>

          {/* Step progress bar */}
          <div className="mt-4 sm:mt-5">
            <div className="flex justify-between text-[10px] sm:text-xs text-slate-500 dark:text-slate-400 mb-1">
              <span>{lesson.steps.length} étapes pédagogiques</span>
              <span>100% déverrouillé</span>
            </div>
            <div className="flex gap-0.5 sm:gap-1">
              {lesson.steps.map(s => (
                <div
                  key={s.id}
                  className="h-1.5 flex-1 rounded-full bg-blue-500/60 dark:bg-sky-500/60"
                  title={`${s.id}. ${s.title}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Two-column layout (Single-column on mobile) */}
      <div className="grid grid-cols-1 xl:grid-cols-[1fr_360px] gap-4 sm:gap-6 w-full max-w-full mx-0">
        {/* Left: Main content (all steps) */}
        <div ref={contentRef} className="space-y-4 sm:space-y-5 w-full max-w-full min-w-0 mx-0 overflow-x-hidden">
          {lesson.steps.map(s => renderStep(s))}
        </div>

        {/* Right: Sticky interactive panel */}
        <aside className="space-y-4 sm:space-y-5 w-full max-w-full min-w-0 mx-0">
          <div className="sticky top-4 space-y-4">
            {/* Tabs */}
            <div className="flex gap-2 p-1 bg-slate-100 dark:bg-slate-900/80 rounded-2xl border border-slate-200 dark:border-slate-700/50 shadow-inner">
              {[
                { key: 'widget', label: '🔢 Calculateur' },
                { key: 'diagram', label: '📐 Diagramme SVG' },
              ].map(tab => (
                <button
                  key={tab.key}
                  onClick={() => setActiveTab(tab.key)}
                  className={`flex-1 py-2 rounded-xl text-xs font-semibold transition-all ${
                    activeTab === tab.key
                      ? 'bg-blue-600 text-white shadow-md'
                      : 'text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-200'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Calculator Widget */}
            {activeTab === 'widget' && (
              <div className="rounded-2xl border border-slate-200 dark:border-slate-700/50 bg-white dark:bg-slate-900/80 p-4 sm:p-5 w-full max-w-full overflow-hidden shadow-sm">
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-blue-600 dark:text-sky-400 text-xs uppercase tracking-widest font-semibold">Calculateur Trigonométrique & Sollicitations</span>
                </div>
                <TrigWidget angle={angle} setAngle={setAngle} hypotenuse={hypotenuse} setHypotenuse={setHypotenuse} />
              </div>
            )}

            {/* Interactive SVG Diagram Tab */}
            {activeTab === 'diagram' && (
              <DiagramViewer type={diagramType} title={`Diagramme Interactif — ${module.title}`} />
            )}

            {/* Quick reference formulas — always visible */}
            <div className="rounded-2xl border border-slate-200 dark:border-slate-700/50 bg-white dark:bg-slate-900/80 p-4 w-full max-w-full overflow-hidden shadow-sm">
              <p className="text-xs uppercase tracking-widest text-blue-600 dark:text-sky-400 font-semibold mb-3">Aide-mémoire & Formules Clés</p>
              <div className="space-y-2 text-xs">
                {[
                  { label: 'Équilibre', formula: '\\sum \\vec{F} = \\vec{0}, \\quad \\sum \\vec{M} = \\vec{0}' },
                  { label: 'Contrainte', formula: '\\sigma = \\frac{N}{A} + \\frac{M \\cdot y}{I}' },
                  { label: 'Eurocode ELU', formula: '1{,}35 G + 1{,}50 Q \\le f_{yd}' },
                  { label: 'Hooke', formula: '\\sigma = E \\cdot \\varepsilon' },
                ].map(item => (
                  <div key={item.label} className="flex items-center gap-3 rounded-lg bg-slate-50 dark:bg-slate-800/60 px-3 py-2 overflow-x-auto max-w-full border border-slate-100 dark:border-transparent">
                    <span className="tag-blue w-20 text-center shrink-0">{item.label}</span>
                    <div className="overflow-x-auto max-w-full py-0.5">
                      <SafeInlineMath math={item.formula} />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Bilingual mini-glossary */}
            <div className="rounded-2xl border border-slate-200 dark:border-slate-700/50 bg-white dark:bg-slate-900/80 p-4 w-full max-w-full overflow-hidden shadow-sm">
              <p className="text-xs uppercase tracking-widest text-blue-600 dark:text-sky-400 font-semibold mb-3">Glossaire de la leçon</p>
              <div className="space-y-2">
                {[
                  { fr: 'Contrainte normale', en: 'Normal Stress (σ)' },
                  { fr: 'Effort tranchant', en: 'Shear Force (V)' },
                  { fr: 'Moment fléchissant', en: 'Bending Moment (M)' },
                  { fr: 'Armature tendue', en: 'Tension Rebar (As)' },
                  { fr: 'Nappe phréatique', en: 'Water Table' },
                ].map(g => (
                  <div key={g.en} className="flex justify-between text-xs py-1.5 border-b border-slate-100 dark:border-slate-800/60">
                    <span className="text-slate-900 dark:text-white font-medium">{g.fr}</span>
                    <span className="text-blue-600 dark:text-sky-400 font-mono font-medium">{g.en}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}
