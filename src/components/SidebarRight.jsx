import { useState } from 'react';
import GlossarySearch from './GlossarySearch.jsx';
import UnitConverter from './UnitConverter.jsx';
import BeamCalculator from './BeamCalculator.jsx';

const QUIZ_DATA = {
  maths: {
    question: 'Sur chantier, pour calculer une pente, quel rapport utilisez-vous ?',
    options: [
      { id: 'sin', label: 'A) sin(θ)' },
      { id: 'cos', label: 'B) cos(θ)' },
      { id: 'tan', label: 'C) tan(θ) — pente = tan × 100' },
      { id: 'none', label: 'D) Aucun, on mesure directement' },
    ],
    correct: 'tan',
    explanation: 'La pente = opp/adj = tan(θ). On multiplie par 100 pour obtenir le % de pente. Le sin correspond à la dénivelée/longueur inclinée, pas à la pente.',
  },
};

const TOOLS = ['Quiz', 'Glossaire', 'Convertisseur', 'Poutre'];

export default function SidebarRight({ module }) {
  const [activeTool, setActiveTool] = useState('Quiz');
  const [quizAnswer, setQuizAnswer] = useState('');
  const [quizSubmitted, setQuizSubmitted] = useState(false);

  const quiz = QUIZ_DATA[module?.slug] || QUIZ_DATA.maths;

  const handleQuizSelect = (id) => {
    if (quizSubmitted) return;
    setQuizAnswer(id);
  };
  const handleQuizSubmit = () => setQuizSubmitted(true);
  const handleQuizReset = () => { setQuizAnswer(''); setQuizSubmitted(false); };

  return (
    <div className="flex flex-col h-full gap-4">
      {/* Tool switcher */}
      <div className="flex gap-1.5 p-1 bg-slate-900/80 rounded-2xl border border-slate-700/50">
        {TOOLS.map(tool => (
          <button
            key={tool}
            onClick={() => setActiveTool(tool)}
            className={`flex-1 py-2 rounded-xl text-xs font-semibold transition-all ${
              activeTool === tool
                ? 'bg-gradient-to-br from-blue-600 to-sky-500 text-white shadow-lg shadow-blue-500/20'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            {tool}
          </button>
        ))}
      </div>

      {/* Quiz */}
      {activeTool === 'Quiz' && (
        <div className="rounded-2xl border border-slate-700/50 bg-slate-900/80 p-5 space-y-4">
          <div className="flex items-center gap-3">
            <span className="text-xl">🎯</span>
            <div>
              <p className="text-xs uppercase tracking-widest text-sky-400 font-semibold">Quiz Express</p>
              <p className="text-xs text-slate-500 mt-0.5">Question du module en cours</p>
            </div>
          </div>

          <p className="text-sm text-slate-200 font-medium leading-relaxed">{quiz.question}</p>

          <div className="space-y-2">
            {quiz.options.map(opt => {
              let cls = 'quiz-option w-full rounded-xl border border-slate-700/50 bg-slate-800/50 px-4 py-3 text-sm text-left transition-all text-slate-300';
              if (quizSubmitted) {
                if (opt.id === quiz.correct) cls += ' selected-correct';
                else if (opt.id === quizAnswer && opt.id !== quiz.correct) cls += ' selected-incorrect';
              } else if (quizAnswer === opt.id) {
                cls += ' bg-sky-500/15 border-sky-500/40 text-sky-200';
              }
              return (
                <button
                  key={opt.id}
                  onClick={() => handleQuizSelect(opt.id)}
                  disabled={quizSubmitted}
                  className={cls}
                >
                  {opt.label}
                </button>
              );
            })}
          </div>

          {quizAnswer && !quizSubmitted && (
            <button
              onClick={handleQuizSubmit}
              className="w-full bg-gradient-to-r from-blue-600 to-sky-500 text-white py-3 rounded-xl font-semibold text-sm hover:from-blue-700 hover:to-sky-600 transition-all"
            >
              Valider
            </button>
          )}

          {quizSubmitted && (
            <div className={`rounded-xl p-4 ${quizAnswer === quiz.correct ? 'alert-tip' : 'alert-warning'}`}>
              <p className={`font-bold text-sm mb-1 ${quizAnswer === quiz.correct ? 'text-emerald-300' : 'text-orange-300'}`}>
                {quizAnswer === quiz.correct ? '✅ Correct !' : '❌ Incorrect'}
              </p>
              <p className="text-xs text-slate-300">{quiz.explanation}</p>
              <button onClick={handleQuizReset} className="mt-3 text-xs text-slate-400 hover:text-white underline">
                Réessayer
              </button>
            </div>
          )}
        </div>
      )}

      {/* Glossary */}
      {activeTool === 'Glossaire' && <GlossarySearch />}

      {/* Unit Converter */}
      {activeTool === 'Convertisseur' && <UnitConverter />}

      {/* Beam Calculator */}
      {activeTool === 'Poutre' && <BeamCalculator />}

      {/* Progress stats */}
      <div className="rounded-2xl border border-slate-700/50 bg-slate-900/80 p-4 mt-auto">
        <p className="text-xs uppercase tracking-widest text-slate-500 font-semibold mb-3">Progression Globale</p>
        <div className="grid grid-cols-3 gap-3 text-center">
          {[
            { label: 'Modules', value: '35', color: 'text-sky-400' },
            { label: 'Leçons', value: '120+', color: 'text-orange-400' },
            { label: 'Heures', value: '1200+', color: 'text-emerald-400' },
          ].map(stat => (
            <div key={stat.label} className="bg-slate-800/60 rounded-xl p-2">
              <p className={`text-lg font-bold font-mono ${stat.color}`}>{stat.value}</p>
              <p className="text-xs text-slate-500 mt-0.5">{stat.label}</p>
            </div>
          ))}
        </div>
        <div className="mt-3 text-xs text-slate-500 flex items-center gap-2">
          <span className="inline-block w-2 h-2 rounded-full bg-emerald-500 pulse-dot" />
          <span>Module 1 en cours — Leçon 1</span>
        </div>
      </div>
    </div>
  );
}
