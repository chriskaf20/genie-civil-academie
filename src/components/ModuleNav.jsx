import { useState, useMemo } from 'react';
import { modules, categories } from '../data/modules.js';
import { Search, LockKeyholeOpen, CheckCircle2 } from 'lucide-react';

const CATEGORY_COLORS = {
  blue: 'text-blue-400 bg-blue-500/10 border-blue-500/20',
  orange: 'text-orange-400 bg-orange-500/10 border-orange-500/20',
  violet: 'text-violet-400 bg-violet-500/10 border-violet-500/20',
  amber: 'text-amber-400 bg-amber-500/10 border-amber-500/20',
  teal: 'text-teal-400 bg-teal-500/10 border-teal-500/20',
  rose: 'text-rose-400 bg-rose-500/10 border-rose-500/20',
  indigo: 'text-indigo-400 bg-indigo-500/10 border-indigo-500/20',
  green: 'text-green-400 bg-green-500/10 border-green-500/20',
  emerald: 'text-emerald-400 bg-emerald-500/10 border-emerald-500/20',
  slate: 'text-slate-400 bg-slate-500/10 border-slate-500/20',
  cyan: 'text-cyan-400 bg-cyan-500/10 border-cyan-500/20',
  pink: 'text-pink-400 bg-pink-500/10 border-pink-500/20',
};

const LEVEL_COLORS = {
  'Débutant': 'text-green-400',
  'Intermédiaire': 'text-yellow-400',
  'Avancé': 'text-orange-400',
  'Tous niveaux': 'text-sky-400',
};

const QUICK_SEARCH_CHIPS = ['Béton', 'RDM', 'BIM', 'Routes', 'Ponts', 'Sols', 'Eurocode', 'IA'];

export default function ModuleNav({ activeSlug, onSelect, completedIds = [] }) {
  const [search, setSearch] = useState('');
  const [collapsed, setCollapsed] = useState({});
  const [filter, setFilter] = useState('Tous');

  const filteredModules = useMemo(() => {
    const q = search.toLowerCase().trim();
    return modules.filter(m => {
      const isLocked = false; // Total unlock on all modules
      const matchTitle = m.title.toLowerCase().includes(q);
      const matchDesc = m.description.toLowerCase().includes(q);
      const matchCat = m.category.toLowerCase().includes(q);
      const matchLessons = m.lessons && m.lessons.some(l => l.toLowerCase().includes(q));
      
      const matchSearch = !q || matchTitle || matchDesc || matchCat || matchLessons;
      const matchFilter = filter === 'Tous' || m.level === filter;
      return matchSearch && matchFilter && !isLocked;
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
      <div className="rounded-xl border border-emerald-500/30 bg-emerald-500/10 p-2 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <LockKeyholeOpen className="w-4 h-4 text-emerald-400" />
          <div>
            <p className="text-xs font-bold text-emerald-300">Accès Libre 100%</p>
            <p className="text-[10px] text-slate-400">Tous les 35 modules sont déverrouillés</p>
          </div>
        </div>
        <span className="tag-green text-[9px]">35 Cours</span>
      </div>

      {/* Global Search Input */}
      <div className="space-y-2">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500 w-3.5 h-3.5" />
          <input
            type="search"
            value={search}
            onChange={e => setSearch(e.target.value)}
            placeholder="Rechercher (Béton, RDM, Sols, Eurocode)..."
            className="w-full rounded-xl border border-slate-700 bg-slate-800/80 pl-9 pr-8 py-2 text-xs text-slate-200 placeholder:text-slate-500 focus:border-sky-500/50 transition-colors"
          />
          {search && (
            <button
              onClick={() => setSearch('')}
              className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white text-xs"
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
                  ? 'bg-sky-500/20 border-sky-400 text-sky-300 font-bold'
                  : 'bg-slate-800/60 border-slate-700/60 text-slate-400 hover:text-slate-200 hover:border-slate-600'
              }`}
            >
              {chip}
            </button>
          ))}
        </div>
      </div>

      {/* Level filter */}
      <div className="flex gap-1 flex-wrap">
        {['Tous', 'Débutant', 'Intermédiaire', 'Avancé'].map(lvl => (
          <button
            key={lvl}
            onClick={() => setFilter(lvl)}
            className={`px-2 py-0.5 rounded-full text-[10px] font-semibold transition-all ${
              filter === lvl ? 'bg-blue-600 text-white' : 'bg-slate-800 text-slate-400 hover:bg-slate-700'
            }`}
          >
            {lvl}
          </button>
        ))}
      </div>

      {/* Module groups */}
      <div className="flex-1 overflow-y-auto space-y-2 pr-1">
        {Object.entries(grouped).map(([cat, mods]) => {
          const catData = categories.find(c => c.name === cat);
          const color = catData ? CATEGORY_COLORS[catData.color] : CATEGORY_COLORS.blue;
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
                        className={`module-nav-item w-full flex items-start gap-2.5 rounded-xl px-2.5 py-2 text-left transition-all ${
                          isActive
                            ? 'bg-gradient-to-r from-blue-600/25 to-sky-500/15 border-sky-500/40 text-sky-200 shadow-md ring-1 ring-sky-500/30'
                            : 'bg-slate-900/70 border-slate-800 text-slate-300 hover:bg-slate-800 hover:text-white'
                        }`}
                      >
                        <span className="text-sm shrink-0 mt-0.5">{m.icon}</span>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center justify-between gap-1">
                            <span className="text-[10px] text-slate-500 font-mono shrink-0">{String(m.id).padStart(2, '0')}</span>
                            <div className="flex items-center gap-1">
                              {isDone && <CheckCircle2 className="w-3 h-3 text-emerald-400 shrink-0" />}
                              <span className="text-[9px] text-emerald-400 font-medium">🔓</span>
                            </div>
                          </div>
                          <p className={`text-xs font-semibold leading-tight mt-0.5 truncate ${isActive ? 'text-sky-200 font-bold' : 'text-slate-300'}`}>
                            {m.title}
                          </p>
                          <div className="flex items-center gap-2 mt-0.5">
                            <span className={`text-[10px] ${LEVEL_COLORS[m.level] || 'text-slate-500'}`}>{m.level}</span>
                            <span className="text-slate-600 text-[10px]">·</span>
                            <span className="text-[10px] text-slate-400">{m.duration}</span>
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
            <button onClick={() => { setSearch(''); setFilter('Tous'); }} className="mt-2 text-sky-400 text-xs hover:underline">
              Réinitialiser la recherche
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
