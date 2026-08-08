import { useMemo, useState } from 'react';
import { glossaryData } from '../data/glossary.js';

const CATEGORIES = ['Tous', ...Array.from(new Set(glossaryData.map(g => g.category)))];

export default function GlossarySearch() {
  const [query, setQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('Tous');

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    return glossaryData.filter(item => {
      const matchCat = activeCategory === 'Tous' || item.category === activeCategory;
      const matchQ = !q
        || item.fr.toLowerCase().includes(q)
        || item.en.toLowerCase().includes(q)
        || item.definition.toLowerCase().includes(q);
      return matchCat && matchQ;
    });
  }, [query, activeCategory]);

  return (
    <div className="rounded-2xl border border-slate-700/50 bg-slate-900/80 p-5">
      <div className="flex items-center gap-3 mb-4">
        <span className="text-lg">📚</span>
        <div>
          <p className="text-xs uppercase tracking-widest text-sky-400 font-semibold">Glossaire Bilingue</p>
          <p className="text-xs text-slate-500 mt-0.5">{glossaryData.length} termes FR/EN</p>
        </div>
      </div>

      {/* Search */}
      <div className="relative mb-3">
        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500">🔍</span>
        <input
          value={query}
          onChange={e => setQuery(e.target.value)}
          placeholder="Rechercher : Moment fléchissant, Slump..."
          className="w-full rounded-xl border border-slate-700 bg-slate-800/80 pl-9 pr-4 py-2.5 text-slate-100 text-sm placeholder:text-slate-600 focus:border-sky-500/50 transition-colors"
        />
        {query && (
          <button onClick={() => setQuery('')} className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-500 hover:text-slate-300">✕</button>
        )}
      </div>

      {/* Category filter */}
      <div className="flex gap-2 flex-wrap mb-4">
        {CATEGORIES.slice(0, 5).map(cat => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-3 py-1 rounded-full text-xs font-semibold transition-all ${
              activeCategory === cat
                ? 'bg-blue-600 text-white'
                : 'bg-slate-800 text-slate-400 hover:bg-slate-700'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Results */}
      <div className="space-y-2 max-h-72 overflow-y-auto">
        {results.length === 0 ? (
          <p className="text-center text-slate-500 text-sm py-6">Aucun résultat pour "{query}"</p>
        ) : (
          results.slice(0, 8).map(item => (
            <div key={item.en} className="rounded-xl bg-slate-800/60 p-3 hover:bg-slate-700/60 transition-colors">
              <div className="flex items-start justify-between gap-2">
                <div className="flex-1">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="text-sm font-bold text-white">{item.fr}</span>
                    <span className="text-xs text-slate-500">—</span>
                    <span className="text-xs text-sky-400 font-medium font-mono">{item.en}</span>
                  </div>
                  <p className="text-xs text-slate-400 mt-1 leading-relaxed">{item.definition}</p>
                </div>
                <span className="tag-blue shrink-0 mt-0.5">{item.category}</span>
              </div>
            </div>
          ))
        )}
        {results.length > 8 && (
          <p className="text-center text-xs text-slate-500 pt-2">+{results.length - 8} autres résultats — affinez la recherche</p>
        )}
      </div>
    </div>
  );
}
