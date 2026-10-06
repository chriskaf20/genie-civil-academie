import { useState, useMemo } from 'react';
import { modules } from '../data/modules.js';
import { getLessonEntries } from '../data/lesson_registry.js';
import { Search, LockKeyholeOpen, CheckCircle2 } from 'lucide-react';

const LEVEL_FILTERS = [
  { value: 'all', label: 'Tout' },
  { value: 'Débutant', label: 'Débutant' },
  { value: 'Intermédiaire', label: 'Intermédiaire' },
  { value: 'Avancé', label: 'Avancé' },
  { value: 'Tous niveaux', label: 'Tous niveaux' },
];

// Every category uses the same navy style: the learning order, not colour, structures the list.
const CATEGORY_STYLE = 'text-navy-700 dark:text-navy-200 bg-navy-50 dark:bg-navy-500/10 border-navy-200 dark:border-navy-500/30';

const LEVEL_COLORS = {
  'Débutant': 'text-slate-500 dark:text-slate-400',
  'Intermédiaire': 'text-navy-500 dark:text-navy-300',
  'Avancé': 'text-navy-700 dark:text-navy-100 font-semibold',
  'Tous niveaux': 'text-slate-500 dark:text-slate-400',
};

const QUICK_SEARCH_CHIPS = ['Béton', 'RDM', 'BIM', 'Routes', 'Ponts', 'Sols', 'Eurocode', 'IA'];

export default function ModuleNav({ activeSlug, onSelect, completedIds = [] }) {
  const [search, setSearch] = useState('');
  const [collapsed, setCollapsed] = useState({});
  const [filter, setFilter] = useState('all');

  const filteredModules = useMemo(() => {
    const q = search.toLowerCase().trim();
    return modules.filter(m => {
      const topics = [...(m.lessons || []), ...getLessonEntries(m).map(e => e.title)];
      const matchSearch = !q
        || m.title.toLowerCase().includes(q)
        || m.description.toLowerCase().includes(q)
        || m.category.toLowerCase().includes(q)
        || topics.some(t => t.toLowerCase().includes(q));
      const matchFilter = filter === 'all' || m.level === filter;
      return matchSearch && matchFilter;
    });
  }, [search, filter]);

  // Group by category
  const grouped = useMemo(() => {
    const catMap = {};
    filteredModules.forEach(m => {
      const cat = m.category;
      if (!catMap[cat]) catMap[cat] = [];
      catMap[cat].push(m);
    });
    return catMap;
  }, [filteredModules]);

  const toggleCategory = (cat) => setCollapsed(p => ({ ...p, [cat]: !p[cat] }));

  return (
    <div className="flex flex-col h-full space-y-3">
      {/* Free Access Header Banner */}
      <div className="rounded-xl border border-navy-200 dark:border-navy-500/30 bg-navy-50 dark:bg-navy-500/10 p-2 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <LockKeyholeOpen className="w-4 h-4 text-navy-600 dark:text-navy-300" />
          <div>
            <p className="text-xs font-bold text-navy-700 dark:text-navy-200">Accès Libre 100%</p>
            <p className="text-[10px] text-slate-600 dark:text-slate-400">Tous les {modules.length} modules sont déverrouillés</p>
          </div>
        </div>
        <span className="tag-blue text-[9px]">{modules.length} cours</span>
      </div>

      {/* Global Search Input */}
      <div className="space-y-2">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 dark:text-slate-500 w-3.5 h-3.5" />
          <input
            type="search"
            value={search}
            onChange={e => setSearch(e.target.value)}
            placeholder="Rechercher (Béton, RDM, Sols, Eurocode)..."
            className="w-full rounded-xl border border-slate-200 bg-slate-50 pl-9 pr-8 py-2 text-xs text-slate-900 placeholder:text-slate-400 focus:border-blue-500 focus:bg-white dark:border-slate-700 dark:bg-slate-800/80 dark:text-slate-200 dark:placeholder:text-slate-500 dark:focus:border-sky-500/50 transition-colors shadow-sm"
          />
          {search && (
            <button
              onClick={() => setSearch('')}
              className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 dark:hover:text-white text-xs"
            >
              ✕
            </button>
          )}
        </div>

        {/* Keyword Chips */}
        <div className="flex flex-wrap gap-1">
          {QUICK_SEARCH_CHIPS.map(chip => (
            <button
              key={chip}
              onClick={() => setSearch(prev => prev === chip ? '' : chip)}
              className={`text-[10px] px-2 py-0.5 rounded-full border transition-all ${
                search.toLowerCase() === chip.toLowerCase()
                  ? 'bg-blue-100 border-blue-300 text-blue-700 font-bold dark:bg-sky-500/20 dark:border-sky-400 dark:text-sky-300'
                  : 'bg-slate-100 border-slate-200 text-slate-600 hover:bg-slate-200 dark:bg-slate-800/60 dark:border-slate-700/60 dark:text-slate-400 dark:hover:text-slate-200 dark:hover:border-slate-600'
              }`}
            >
              {chip}
            </button>
          ))}
        </div>
      </div>

      {/* Level filter */}
      <div className="flex gap-1 flex-wrap">
        {LEVEL_FILTERS.map(({ value, label }) => (
          <button
            type="button"
            key={value}
            onClick={() => setFilter(value)}
            aria-pressed={filter === value}
            className={`px-2 py-0.5 rounded-full text-[10px] font-semibold transition-all ${
              filter === value
                ? 'bg-blue-600 text-white shadow-sm'
                : 'bg-slate-100 text-slate-700 hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-400 dark:hover:bg-slate-700'
            }`}
          >
            {label}
          </button>
        ))}
      </div>

      {/* Module groups */}
      <div className="flex-1 overflow-y-auto space-y-2 pr-1">
        {Object.entries(grouped).map(([cat, mods]) => {
          const color = CATEGORY_STYLE;
          const isCollapsed = collapsed[cat];

          return (
            <div key={cat} className="rounded-xl overflow-hidden">
              {/* Category header */}
              <button
                onClick={() => toggleCategory(cat)}
                className={`w-full flex items-center justify-between px-3 py-1.5 rounded-xl border text-[11px] font-bold uppercase tracking-wider transition-colors ${color}`}
              >
                <span>{cat}</span>
                <div className="flex items-center gap-2">
                  <span className="opacity-70">{mods.length}</span>
                  <span className="transition-transform duration-200 text-[10px]" style={{ transform: isCollapsed ? 'rotate(-90deg)' : 'rotate(0deg)' }}>▾</span>
                </div>
              </button>

              {/* Modules list */}
              {!isCollapsed && (
                <div className="mt-1 space-y-1 ml-1">
                  {mods.map(m => {
                    const isActive = m.slug === activeSlug;
                    const isDone = completedIds && completedIds.includes(m.id);
                    return (
                      <button
                        key={m.slug}
                        onClick={() => onSelect(m)}
                        className={`module-nav-item w-full flex items-start gap-2.5 rounded-xl px-2.5 py-2 text-left transition-all border ${
                          isActive
                            ? 'bg-blue-50 text-blue-700 border-blue-200 dark:bg-blue-900/30 dark:text-cyan-300 dark:border-cyan-700/50 shadow-sm'
                            : 'bg-slate-50 text-slate-700 hover:bg-slate-100 border-slate-200/80 dark:bg-slate-800/60 dark:text-slate-300 dark:border-slate-800 dark:hover:bg-slate-800 dark:hover:text-white'
                        }`}
                      >
                        <span className="text-sm shrink-0 mt-0.5">{m.icon}</span>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center justify-between gap-1">
                            <span className="text-[10px] text-slate-400 dark:text-slate-500 font-mono shrink-0">{String(m.n).padStart(2, '0')}</span>
                            <div className="flex items-center gap-1">
                              {isDone && <CheckCircle2 className="w-3 h-3 text-emerald-500 dark:text-emerald-400 shrink-0" />}
                              <span className="text-[9px] text-emerald-600 dark:text-emerald-400 font-medium">🔓</span>
                            </div>
                          </div>
                          <p className={`text-xs font-semibold leading-tight mt-0.5 truncate ${
                            isActive
                              ? 'text-blue-700 dark:text-cyan-300 font-bold'
                              : 'text-slate-800 dark:text-slate-300'
                          }`}>
                            {m.title}
                          </p>
                          <div className="flex items-center gap-2 mt-0.5">
                            <span className={`text-[10px] font-medium ${LEVEL_COLORS[m.level] || 'text-slate-500'}`}>{m.level}</span>
                            <span className="text-slate-400 dark:text-slate-600 text-[10px]">·</span>
                            <span className="text-[10px] text-slate-500 dark:text-slate-400">{m.duration}</span>
                          </div>
                        </div>
                      </button>
                    );
                  })}
                </div>
              )}
            </div>
          );
        })}

        {Object.keys(grouped).length === 0 && (
          <div className="text-center text-slate-500 text-xs py-6">
            <p>Aucun module correspondant à "{search}"</p>
            <button type="button" onClick={() => { setSearch(''); setFilter('all'); }} className="mt-2 text-blue-600 dark:text-sky-400 text-xs hover:underline">
              Réinitialiser la recherche
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
