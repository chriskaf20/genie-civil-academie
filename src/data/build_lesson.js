// Builds a 23-step lesson from compact content, so lesson files hold only teaching material.
// The result has exactly the shape LessonCanvas renders and scripts/validate-content.mjs checks.
//
// Compact forms accepted (the full object forms work too):
//   applications.examples : [context, text]
//   formulas.formulas     : { name, latex, description, vars: [[symbol, name, unit, role]], rule }
//   units.table           : [grandeur, si, imperial, conversion]
//   hypotheses.items      : [type ('info' | 'warning' | 'tip'), text]
//   mistakes.items        : [mistake, trap, fix]
//   norms.norms           : [code, description]
//   exercises.exercises   : { level, text, hint, answer_latex, answer_text }
//   quiz.questions        : { q, options: [text, …], correct: index, explain }
//   interview.questions   : [question, answer_hint]
//   practical.resolutions : [latex, …]  (becomes resolution_latex_1, _2, …)
// quickQuiz defaults to the first quiz question.

const STEPS = [
  ['definition', 'definition', '📖', 'Définition'],
  ['importance', 'importance', '⚠️', "Pourquoi c'est important"],
  ['applications', 'applications', '🏗️', 'Applications sur le terrain'],
  ['theory', 'theory', '📐', 'Théorie'],
  ['formulas', 'formulas', '🔢', 'Formules essentielles'],
  ['stepbystep', 'stepbystep', '🔬', 'Calcul complet pas à pas'],
  ['units', 'units', '📏', 'Unités & ordres de grandeur'],
  ['hypotheses', 'hypotheses', '📋', 'Hypothèses et domaine de validité'],
  ['simple_examples', 'examples_simple', '✏️', 'Exemples guidés'],
  ['real_examples', 'examples_real', '🏢', 'Exemple réel'],
  ['diagrams', 'interactive_diagram', '📊', 'Schéma de principe'],
  ['mistakes', 'mistakes', '⛔', 'Erreurs fréquentes'],
  ['tips', 'tips', '💡', "Astuces d'ingénieur"],
  ['norms', 'norms', '📜', 'Normes et références'],
  ['exercises', 'exercises', '✍️', "Exercices d'application"],
  ['corrections', 'corrections', '✅', 'Corrections détaillées'],
  ['quiz', 'quiz', '🎯', 'Quiz'],
  ['exam_questions', 'exam', '🎓', "Questions d'examen"],
  ['interview_questions', 'interview', '💼', "Questions d'entretien technique"],
  ['practical_case', 'practical', '🔧', 'Cas pratique'],
  ['summary', 'summary', '📋', 'Résumé'],
  ['key_points', 'keypoints', '⭐', 'Points clés à retenir'],
  ['self_assessment', 'self_assessment', '🏆', 'Auto-évaluation'],
];

const LEVELS = { 1: 'Facile', 2: 'Moyen', 3: 'Difficile' };
const pair = (v, a, b) => (Array.isArray(v) ? { [a]: v[0], [b]: v[1] } : v);

function expand(type, c, slug) {
  const s = { ...c };
  switch (type) {
    case 'applications':
      s.examples = s.examples.map(e => pair(e, 'context', 'text'));
      break;
    case 'formulas':
      s.formulas = s.formulas.map(({ vars, rule, ...f }) => ({
        ...f,
        ...(vars ? { variables: vars.map(v => (Array.isArray(v) ? { symbol: v[0], name: v[1], unit: v[2], role: v[3] } : v)) } : {}),
        ...(rule ? { ruleOfThumb: rule } : {}),
      }));
      break;
    case 'units':
      s.table = s.table.map(r => (Array.isArray(r) ? { grandeur: r[0], si: r[1], imperial: r[2] || '-', conversion: r[3] || '' } : r));
      break;
    case 'hypotheses':
      s.items = s.items.map(i => (Array.isArray(i) ? { type: i[0], text: i[1] } : i));
      break;
    case 'mistakes':
      s.items = s.items.map(i => (Array.isArray(i) ? { mistake: i[0], trap: i[1], fix: i[2] } : i));
      break;
    case 'norms':
      s.norms = s.norms.map(n => pair(n, 'code', 'description'));
      break;
    case 'exercises':
      s.exercises = s.exercises.map(({ level, ...e }, i) => ({
        id: `ex_${slug}_${i + 1}`,
        number: i + 1,
        difficulty: LEVELS[level] || level || 'Moyen',
        ...e,
      }));
      break;
    case 'quiz':
      s.questions = s.questions.map((q, i) => (q.q === undefined ? q : {
        id: `q_${slug}_${i + 1}`,
        question: q.q,
        options: q.options.map((text, j) => ({ id: 'abcdef'[j], text })),
        correct: 'abcdef'[q.correct],
        explanation: q.explain,
      }));
      break;
    case 'interview':
      s.questions = s.questions.map(q => pair(q, 'question', 'answer_hint'));
      break;
    case 'practical':
      (s.resolutions || []).forEach((r, i) => { s[`resolution_latex_${i + 1}`] = r; });
      delete s.resolutions;
      break;
    default:
  }
  return s;
}

export function buildLesson(meta, content) {
  const diagramType = meta.diagramType || 'process_flow';
  const steps = STEPS.map(([key, type, icon, defaultTitle], i) => {
    const c = content[key] || {};
    const base = { id: i + 1, key, title: c.title || defaultTitle, icon, type };
    if (['theory', 'formulas', 'examples_real', 'interactive_diagram', 'practical'].includes(type)) base.diagramType = diagramType;
    if (type === 'corrections') base.note = "Chaque correction est disponible sous l'exercice correspondant : écrivez d'abord votre démarche, puis comparez.";
    if (type === 'self_assessment') base.description = 'Cochez les compétences acquises :';
    if (type === 'interactive_diagram') base.description = c.description || 'Les étapes clés, dans l’ordre.';
    return { ...base, ...expand(type, c, meta.slug) };
  });

  const first = steps.find(s => s.type === 'quiz').questions[0];
  const quickQuiz = meta.quickQuiz || {
    question: first.question,
    options: first.options.map((o, j) => ({ id: o.id, label: `${'ABCDEF'[j]}) ${o.text}` })),
    correct: first.correct,
    explanation: first.explanation,
  };

  const { quickQuiz: _q, ...rest } = meta;
  return { ...rest, diagramType, steps, quickQuiz };
}
