import { useEffect, useState } from 'react';

// Loaded lessons are kept for the session; a lesson file is fetched at most once.
const loaded = new Map();
const pending = new Map();

export function loadLessonEntry(entry) {
  if (loaded.has(entry.key)) return Promise.resolve(loaded.get(entry.key));
  if (!pending.has(entry.key)) {
    pending.set(entry.key, entry.load().then(lesson => {
      if (!lesson) throw new Error(`La leçon « ${entry.title} » est introuvable.`);
      loaded.set(entry.key, lesson);
      pending.delete(entry.key);
      return lesson;
    }, error => {
      pending.delete(entry.key);
      throw error;
    }));
  }
  return pending.get(entry.key);
}

function initialState(entry) {
  if (!entry) return { status: 'empty', lesson: null, error: null };
  if (loaded.has(entry.key)) return { status: 'ready', lesson: loaded.get(entry.key), error: null };
  return { status: 'loading', lesson: null, error: null };
}

/** Loads a registry entry on demand. Returns { status: 'empty' | 'loading' | 'ready' | 'error', lesson, error, retry }. */
export function useLesson(entry) {
  const [state, setState] = useState(() => initialState(entry));
  const [attempt, setAttempt] = useState(0);
  const key = entry?.key;

  useEffect(() => {
    if (!entry) { setState(initialState(null)); return undefined; }
    if (loaded.has(entry.key)) { setState(initialState(entry)); return undefined; }
    let active = true;
    setState({ status: 'loading', lesson: null, error: null });
    loadLessonEntry(entry).then(
      lesson => { if (active) setState({ status: 'ready', lesson, error: null }); },
      error => { if (active) setState({ status: 'error', lesson: null, error }); },
    );
    return () => { active = false; };
    // `entry` is identified by its key; the registry objects never change.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [key, attempt]);

  return { ...state, retry: () => setAttempt(a => a + 1) };
}
