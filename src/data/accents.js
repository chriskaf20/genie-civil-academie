// Secondary accent colours of the learning-path stages (see categories in modules.js).
export const ACCENTS = {
  navy: { bg: 'bg-navy-50 dark:bg-navy-500/10', border: 'border-navy-200 dark:border-navy-500/30', text: 'text-navy-700 dark:text-navy-200', dot: 'bg-navy-600', badge: 'bg-navy-700 text-white', glow: 'shadow-navy-500/5' },
  emerald: { bg: 'bg-emerald-50 dark:bg-emerald-500/10', border: 'border-emerald-200 dark:border-emerald-500/30', text: 'text-emerald-800 dark:text-emerald-300', dot: 'bg-emerald-600', badge: 'bg-emerald-700 text-white', glow: 'shadow-emerald-500/5' },
  amber: { bg: 'bg-amber-50 dark:bg-amber-500/10', border: 'border-amber-200 dark:border-amber-500/30', text: 'text-amber-800 dark:text-amber-300', dot: 'bg-amber-500', badge: 'bg-amber-700 text-white', glow: 'shadow-amber-500/5' },
  rose: { bg: 'bg-rose-50 dark:bg-rose-500/10', border: 'border-rose-200 dark:border-rose-500/30', text: 'text-rose-800 dark:text-rose-300', dot: 'bg-rose-600', badge: 'bg-rose-600 text-white', glow: 'shadow-rose-500/5' },
};
export const accentOf = key => ACCENTS[key] || ACCENTS.navy;

// Levels: green → amber → rose as difficulty grows.
export const LEVEL_STYLES = {
  'Débutant': { text: 'text-emerald-700 dark:text-emerald-300', badge: 'bg-emerald-50 text-emerald-800 border border-emerald-200 dark:bg-emerald-500/10 dark:text-emerald-300 dark:border-emerald-500/30', dot: 'bg-emerald-500' },
  'Intermédiaire': { text: 'text-amber-700 dark:text-amber-300', badge: 'bg-amber-50 text-amber-800 border border-amber-200 dark:bg-amber-500/10 dark:text-amber-300 dark:border-amber-500/30', dot: 'bg-amber-500' },
  'Avancé': { text: 'text-rose-700 dark:text-rose-300', badge: 'bg-rose-50 text-rose-800 border border-rose-200 dark:bg-rose-500/10 dark:text-rose-300 dark:border-rose-500/30', dot: 'bg-rose-500' },
  'Tous niveaux': { text: 'text-slate-600 dark:text-slate-300', badge: 'bg-slate-100 text-slate-800 border border-slate-300 dark:bg-slate-800 dark:text-slate-200 dark:border-slate-600', dot: 'bg-slate-400' },
};
