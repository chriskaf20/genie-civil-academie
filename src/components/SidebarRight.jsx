import { useState } from 'react';
import GlossarySearch from './GlossarySearch.jsx';
import UnitConverter from './UnitConverter.jsx';
import BeamCalculator from './BeamCalculator.jsx';
import { renderInlineLatex } from './SafeMath.jsx';
import { modules } from '../data/modules.js';
import { getLessonEntries, countLessons } from '../data/lesson_registry.js';
import { useLesson } from '../hooks/useLesson.js';

// Used when a lesson has no quick quiz of its own.
const FALLBACK_QUIZ = {
  question: 'Pour une poutre bi-appuyée de portée L = 8 m sous charge uniforme q = 20 kN/m, quel est le moment maximal ?',
  options: [
    { id: 'a', label: 'A) 80 kN·m' },
    { id: 'b', label: 'B) 160 kN·m' },
    { id: 'c', label: 'C) 320 kN·m' },
    { id: 'd', label: 'D) 640 kN·m' },
  ],
  correct: 'b',
  explanation: 'M_max = q·L²/8 = 20 × 8² / 8 = 160 kN·m, à mi-travée. Formule fondamentale à connaître par cœur.',
};

const TOOLS = ['Quiz', 'Glossaire', 'Convertisseur', 'Poutre'];
const TOTAL_HOURS = modules.reduce((sum, m) => sum + (parseInt(m.duration, 10) || 0), 0);

function QuickQuiz({ quiz }) {
  const [answer, setAnswer] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const correct = answer === quiz.correct;

  return (
    <div className="rounded-2xl border border-slate-200 dark:border-slate-700/50 bg-white dark:bg-slate-900/80 p-5 space-y-4 shadow-sm">
      <div className="flex items-center gap-3">
        <span className="text-xl" aria-hidden="true">🎯</span>
        <div>
          <p className="text-xs uppercase tracking-widest text-blue-600 dark:text-sky-400 font-semibold">Quiz express</p>
          <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">Question de la leçon en cours</p>
        </div>
      </div>
      <p className="text-sm text-slate-900 dark:text-slate-200 font-semibold leading-relaxed">{renderInlineLatex(quiz.question)}</p>
      <div className="space-y-2">
        {quiz.options.map(opt => {
          let cls = 'quiz-option w-full rounded-xl border border-slate-200 dark:border-slate-700/50 bg-slate-50 dark:bg-slate-800/50 px-4 py-3 text-sm text-left transition-all text-slate-700 dark:text-slate-300 shadow-sm';
          if (submitted) {
            if (opt.id === quiz.correct) cls += ' selected-correct';
            else if (opt.id === answer) cls += ' selected-incorrect';
          } else if (answer === opt.id) {
            cls += ' bg-blue-50 border-blue-400 text-blue-700 dark:bg-sky-500/15 dark:border-sky-500/40 dark:text-sky-200 font-medium';
          }
          return (
            <button type="button" key={opt.id} onClick={() => !submitted && setAnswer(opt.id)} disabled={submitted} className={cls} aria-pressed={answer === opt.id}>
              {renderInlineLatex(opt.label)}
            </button>
          );
        })}
      </div>
      {answer && !submitted && (
        <button
          type="button"
          onClick={() => setSubmitted(true)}
          className="w-full bg-gradient-to-r from-blue-600 to-sky-500 text-white py-3 rounded-xl font-semibold text-sm hover:from-blue-700 hover:to-sky-600 transition-all shadow-sm"
        >
          Valider
        </button>
      )}
      {submitted && (
        <div className={`rounded-xl p-4 ${correct ? 'alert-tip' : 'alert-warning'}`} role="status">
          <p className={`font-bold text-sm mb-1 ${correct ? 'text-emerald-700 dark:text-emerald-300' : 'text-orange-700 dark:text-orange-300'}`}>
            {correct ? '✅ Bonne réponse' : '❌ Mauvaise réponse'}
          </p>
          <p className="text-xs text-slate-700 dark:text-slate-300">{renderInlineLatex(quiz.explanation)}</p>
          <button type="button" onClick={() => { setAnswer(''); setSubmitted(false); }} className="mt-3 text-xs text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white underline font-medium">
            Réessayer
          </button>
        </div>
      )}
    </div>
  );
}

export default function SidebarRight({ module, lessonIndex = 0, inLesson = false, progress = {} }) {
  const [activeTool, setActiveTool] = useState('Quiz');
  const entries = getLessonEntries(module);
  const entry = entries[Math.min(lessonIndex, entries.length - 1)];
  const { lesson } = useLesson(entry);
  const quiz = lesson?.quickQuiz || FALLBACK_QUIZ;

  const validatedCount = Object.values(progress.lessons || {}).filter(p => (p?.quizBest ?? 0) >= 80 || p?.allObjectives).length;
  const exploredCount = (progress.completedIds || []).length;

  return (
    <div className="flex flex-col h-full gap-4">
      <div className="flex gap-1.5 p-1 bg-slate-100 dark:bg-slate-900/80 rounded-2xl border border-slate-200 dark:border-slate-700/50 shadow-inner" role="tablist">
        {TOOLS.map(tool => (
          <button
            type="button"
            role="tab"
            aria-selected={activeTool === tool}
            key={tool}
            onClick={() => setActiveTool(tool)}
            className={`flex-1 py-2 rounded-xl text-xs font-semibold transition-all ${activeTool === tool ? 'bg-blue-600 text-white shadow-md' : 'text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-200'}`}
          >
            {tool}
          </button>
        ))}
      </div>

      {activeTool === 'Quiz' && <QuickQuiz key={`${entry?.key}-${quiz.question}`} quiz={quiz} />}
      {activeTool === 'Glossaire' && <GlossarySearch />}
      {activeTool === 'Convertisseur' && <UnitConverter />}
      {activeTool === 'Poutre' && <BeamCalculator />}

      <div className="rounded-2xl border border-slate-200 dark:border-slate-700/50 bg-white dark:bg-slate-900/80 p-4 mt-auto shadow-sm">
        <p className="text-xs uppercase tracking-widest text-slate-500 dark:text-slate-400 font-semibold mb-3">Catalogue & progression</p>
        <div className="grid grid-cols-3 gap-3 text-center">
          {[
            { label: 'Modules', value: modules.length, color: 'text-blue-600 dark:text-sky-400' },
            { label: 'Leçons', value: countLessons(), color: 'text-orange-600 dark:text-orange-400' },
            { label: 'Heures', value: `${TOTAL_HOURS}h`, color: 'text-emerald-600 dark:text-emerald-400' },
          ].map(stat => (
            <div key={stat.label} className="bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-transparent rounded-xl p-2">
              <p className={`text-lg font-bold font-mono ${stat.color}`}>{stat.value}</p>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">{stat.label}</p>
            </div>
          ))}
        </div>
        <ul className="mt-3 space-y-1 text-xs text-slate-600 dark:text-slate-400">
          <li className="flex items-center gap-2">
            <span className="inline-block w-2 h-2 rounded-full bg-emerald-500 pulse-dot" aria-hidden="true" />
            {inLesson && entry
              ? <span>Module {module.id} en cours — leçon {Math.min(lessonIndex, entries.length - 1) + 1}/{entries.length}</span>
              : <span>Aucune leçon ouverte</span>}
          </li>
          <li>Modules explorés : <strong>{exploredCount}/{modules.length}</strong></li>
          <li>Leçons validées (quiz ≥ 80 % ou objectifs atteints) : <strong>{validatedCount}</strong></li>
        </ul>
      </div>
    </div>
  );
}
