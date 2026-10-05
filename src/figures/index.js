// Lesson plates live in ./lessons/<lessonKey>.jsx and export an array of figures:
//   { id, title, steps: ['theory' | 'formulas' | 'stepbystep' | 'simple_examples' | 'real_examples'
//     | 'diagrams' | 'practical_case'], formula?, notes?, caption?, viewBox? | h?, draw: () => <svg content> }
// They are lazy-loaded with the lesson, so each lesson only downloads its own drawings.
import { useEffect, useState } from 'react';

const loaders = import.meta.glob('./lessons/*.jsx');
const cache = new Map();
const pathOf = key => `./lessons/${key}.jsx`;

/** True when the lesson has its own plates (known at build time). */
export function hasFigures(key) {
  return Boolean(key && loaders[pathOf(key)]);
}

export function loadFigures(key) {
  const loader = loaders[pathOf(key)];
  if (!loader) return Promise.resolve([]);
  if (!cache.has(key)) {
    cache.set(key, loader()
      .then(m => (m.default || []).map((f, i) => ({ steps: ['diagrams'], ...f, n: i + 1 })))
      .catch(err => { cache.delete(key); throw err; }));
  }
  return cache.get(key);
}

/** Plates of a lesson: { expected, figures } — `expected` is known before loading ends. */
export function useFigures(key) {
  const [state, setState] = useState({ key: null, figures: [] });
  useEffect(() => {
    let alive = true;
    if (!hasFigures(key)) return undefined;
    loadFigures(key)
      .then(figures => { if (alive) setState({ key, figures }); })
      .catch(err => {
        console.error(`Planches de la leçon « ${key} » non chargées :`, err);
        if (alive) setState({ key, figures: [] });
      });
    return () => { alive = false; };
  }, [key]);
  return { expected: hasFigures(key), figures: state.key === key ? state.figures : [] };
}
