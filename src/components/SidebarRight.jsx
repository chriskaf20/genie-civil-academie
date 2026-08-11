import { useState } from 'react';
import GlossarySearch from './GlossarySearch.jsx';
import UnitConverter from './UnitConverter.jsx';
import BeamCalculator from './BeamCalculator.jsx';

const QUIZ_DATA = {
  maths: {
    question: 'Sur chantier, pour calculer une pente de 15°, quel rapport utilisez-vous ?',
    options: [
      { id: 'sin', label: 'A) sin(15°) ≈ 0,259' },
      { id: 'cos', label: 'B) cos(15°) ≈ 0,966' },
      { id: 'tan', label: 'C) tan(15°) ≈ 0,268 — pente = 26,8%' },
      { id: 'none', label: 'D) Aucun, on mesure directement' },
    ],
    correct: 'tan',
    explanation: 'La pente = opp/adj = tan(θ). Pour θ=15° → tan(15°)=0,268 → pente = 26,8%. Le sin correspond à la dénivelée/longueur inclinée (toujours différent de la pente %).',
  },
  physique: {
    question: 'Une charge de 10 kN est appliquée à un bras de levier de 3 m. Quel est le moment ?',
    options: [
      { id: 'a', label: 'A) 3,33 kN' },
      { id: 'b', label: 'B) 13 kN·m' },
      { id: 'c', label: 'C) 30 kN·m' },
      { id: 'd', label: 'D) 10 kN·m' },
    ],
    correct: 'c',
    explanation: 'M = F × d = 10 kN × 3 m = 30 kN·m. Le moment est le produit de la force par son bras de levier (distance perpendiculaire à la ligne d\'action).',
  },
  rdm: {
    question: 'Pour une poutre bi-appuyée L=8m, q=20 kN/m, quel est M_max (kN·m) ?',
    options: [
      { id: 'a', label: 'A) 80 kN·m' },
      { id: 'b', label: 'B) 160 kN·m' },
      { id: 'c', label: 'C) 160 kN·m' },
      { id: 'd', label: 'D) 320 kN·m' },
    ],
    correct: 'b',
    explanation: 'M_max = q·L²/8 = 20 × 8²/8 = 20 × 64/8 = 160 kN·m. Cette formule fondamentale doit être mémorisée — elle s\'applique aux poutres bi-appuyées sous charge uniforme.',
  },
  'beton-arme': {
    question: 'Quelle est la résistance de calcul fyd d\'un acier HA 500 (γs = 1,15) ?',
    options: [
      { id: 'a', label: 'A) 500 MPa' },
      { id: 'b', label: 'B) 435 MPa (arrondi)' },
      { id: 'c', label: 'C) 400 MPa' },
      { id: 'd', label: 'D) 575 MPa' },
    ],
    correct: 'b',
    explanation: 'fyd = fyk/γs = 500/1,15 = 434,8 MPa ≈ 435 MPa. γs = 1,15 est le coefficient partiel de sécurité sur l\'acier imposé par l\'Eurocode 2.',
  },
  geotechnique: {
    question: 'Selon le critère de Terzaghi, la capacité portante d\'une semelle filante vaut ?',
    options: [
      { id: 'a', label: 'A) qu = c·Nc + q·Nq + 0,5·γ·B·Nγ' },
      { id: 'b', label: 'B) qu = c + φ' },
      { id: 'c', label: 'C) qu = N/A' },
      { id: 'd', label: 'D) qu = γ·z·Ka' },
    ],
    correct: 'a',
    explanation: 'Formule de Terzaghi : qu = c·Nc + q·Nq + 0,5·γ·B·Nγ, où Nc, Nq, Nγ sont les facteurs de portance dépendant de φ. Pour une semelle filante : terme 0,5·γ·B·Nγ est présent.',
  },
  ponts: {
    question: 'Quel type de pont est le plus adapté pour franchir une portée de 50-200 m ?',
    options: [
      { id: 'a', label: 'A) Pont dalle en béton armé' },
      { id: 'b', label: 'B) Pont à poutres précontraintes' },
      { id: 'c', label: 'C) Pont à haubans' },
      { id: 'd', label: 'D) Ponceau en béton' },
    ],
    correct: 'b',
    explanation: 'Pour 50-200 m, les ponts à poutres précontraintes (BPEL/EC2) sont les plus courants. Le haubannage s\'impose au-delà de 200-300 m. Les dalles BA sont limitées à 15-20 m.',
  },
  logiciels: {
    question: 'Dans SAP2000/ROBOT, quel type d\'analyse permet de trouver les fréquences propres d\'une structure ?',
    options: [
      { id: 'a', label: 'A) Analyse statique linéaire' },
      { id: 'b', label: 'B) Analyse modale (analyse des modes propres)' },
      { id: 'c', label: 'C) Analyse pushover' },
      { id: 'd', label: 'D) Analyse time-history' },
    ],
    correct: 'b',
    explanation: 'L\'analyse modale (ou analyse des valeurs propres) permet d\'obtenir les fréquences et modes propres de vibration. Elle est le point de départ de toute analyse sismique (spectre de réponse, EC8).',
  },
  ia: {
    question: 'Quelle technique de Machine Learning est la plus utilisée pour la détection de fissures sur images de béton ?',
    options: [
      { id: 'a', label: 'A) Régression linéaire' },
      { id: 'b', label: 'B) Réseau de neurones convolutifs (CNN)' },
      { id: 'c', label: 'C) Arbre de décision' },
      { id: 'd', label: 'D) K-means clustering' },
    ],
    correct: 'b',
    explanation: 'Les CNN (Convolutional Neural Networks) sont les plus performants pour l\'analyse d\'images. Ils sont utilisés dans les applications d\'inspection automatique de structures (drones + IA) pour détecter fissures, écaillages et défauts.',
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
