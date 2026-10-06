import { useMemo } from 'react';
import { modules, categories } from '../data/modules.js';
import { getLessonEntries, countLessons } from '../data/lesson_registry.js';

const NAVY = { bg: 'bg-navy-50 dark:bg-navy-500/10', border: 'border-navy-200 dark:border-navy-500/30', text: 'text-navy-700 dark:text-navy-200', glow: 'shadow-navy-500/5 dark:shadow-navy-500/10' };
const INK = { bg: 'bg-slate-100 dark:bg-slate-800', border: 'border-slate-200 dark:border-slate-700', text: 'text-slate-900 dark:text-white', glow: 'shadow-slate-500/5' };
// One navy style for every category; ink (black / white) for the neutral statistics.
const CATEGORY_COLORS = new Proxy({ ink: INK }, { get: (t, k) => t[k] || NAVY });

const LEVEL_CONFIG = {
  'Débutant': { color: 'text-slate-700 dark:text-slate-200', bg: 'bg-white dark:bg-transparent border border-slate-300 dark:border-slate-600', dot: 'bg-slate-400' },
  'Intermédiaire': { color: 'text-navy-700 dark:text-navy-200', bg: 'bg-navy-50 dark:bg-navy-500/15 border border-navy-200 dark:border-navy-500/40', dot: 'bg-navy-400' },
  'Avancé': { color: 'text-white', bg: 'bg-navy-700 border border-navy-700', dot: 'bg-navy-700' },
  'Tous niveaux': { color: 'text-slate-700 dark:text-slate-200', bg: 'bg-slate-100 dark:bg-slate-800 border border-slate-300 dark:border-slate-600', dot: 'bg-slate-400' },
};

const FEATURED_MODULES = [9, 7, 16, 13, 29, 30]; // Béton Armé, RDM, Ponts, Géotechnique, Logiciels, IA

function StatCard({ value, label, icon, color }) {
  return (
    <div className="rounded-2xl border border-slate-200 dark:border-slate-700/60 bg-white dark:bg-slate-800 p-4 flex flex-col items-center justify-center text-center shadow-sm">
      <span className="text-2xl mb-1">{icon}</span>
      <p className={`text-2xl font-bold font-mono ${color.text}`}>{value}</p>
      <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">{label}</p>
    </div>
  );
}

function ModuleCard({ module, onSelect, isDone }) {
  const catData = categories.find(c => c.ids.includes(module.id));
  const colorKey = catData?.color || 'blue';
  const color = CATEGORY_COLORS[colorKey];
  const level = LEVEL_CONFIG[module.level] || LEVEL_CONFIG['Intermédiaire'];

  return (
    <button
      onClick={() => onSelect(module)}
      className="group w-full text-left rounded-2xl border border-slate-200 dark:border-slate-700/60 bg-white dark:bg-slate-800 p-4 transition-all duration-200 hover:scale-[1.02] hover:shadow-md hover:border-blue-400 dark:hover:border-sky-500/50 shadow-sm relative overflow-hidden"
    >
      {isDone && (
        <div className="absolute top-2 right-2">
          <span className="text-emerald-500 dark:text-emerald-400 text-sm">✓</span>
        </div>
      )}
      <div className="flex items-start gap-3">
        <div className={`w-10 h-10 rounded-xl ${color.bg} border ${color.border} flex items-center justify-center text-xl shrink-0`}>
          {module.icon}
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-1">
            <span className="text-[10px] font-mono text-slate-400 dark:text-slate-500">#{String(module.n).padStart(2, '0')}</span>
            <span className={`text-[9px] px-1.5 py-0.5 rounded-full font-semibold ${level.bg} ${level.color}`}>
              {module.level}
            </span>
          </div>
          <p className="text-sm font-bold text-slate-900 dark:text-white leading-tight group-hover:text-blue-600 dark:group-hover:text-sky-300 transition-colors truncate">
            {module.title}
          </p>
          <p className="text-xs text-slate-600 dark:text-slate-300 mt-1 line-clamp-1">{module.description}</p>
          <div className="flex items-center gap-2 mt-2">
            <span className="text-[10px] text-slate-500 dark:text-slate-400">⏱ {module.duration}</span>
            <span className="text-slate-400 dark:text-slate-600 text-[10px]">·</span>
            <span className="text-[10px] text-slate-500 dark:text-slate-400">{lessonCountLabel(getLessonEntries(module).length)}</span>
          </div>
        </div>
      </div>
    </button>
  );
}

function lessonCountLabel(count) {
  return count > 1 ? `${count} leçons` : `${count} leçon`;
}

function CategorySection({ cat, onSelect, completedIds }) {
  const catModules = modules.filter(m => cat.ids.includes(m.id));
  const color = CATEGORY_COLORS[cat.color] || CATEGORY_COLORS.blue;
  const doneCount = catModules.filter(m => completedIds.includes(m.id)).length;

  return (
    <div>
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2">
          <div className={`w-2 h-2 rounded-full ${color.text.replace('text-', 'bg-')}`} />
          <h3 className={`text-sm font-bold ${color.text}`}>{cat.name}</h3>
          <span className="text-xs text-slate-500 dark:text-slate-400">({catModules.length} modules)</span>
        </div>
        {doneCount > 0 && (
          <span className="text-xs text-emerald-600 dark:text-emerald-400 font-mono font-medium">{doneCount}/{catModules.length} explorés</span>
        )}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
        {catModules.map(m => (
          <ModuleCard
            key={m.id}
            module={m}
            onSelect={onSelect}
            isDone={completedIds.includes(m.id)}
          />
        ))}
      </div>
    </div>
  );
}

export default function Dashboard({ onSelectModule, completedIds = [] }) {
  const totalHours = modules.reduce((acc, m) => acc + (parseInt(m.duration, 10) || 0), 0);
  const totalLessons = countLessons();
  const exploredPct = Math.round((completedIds.length / modules.length) * 100);

  const featuredModules = useMemo(() =>
    FEATURED_MODULES.map(id => modules.find(m => m.id === id)).filter(Boolean),
    []
  );

  return (
    <div className="max-w-6xl mx-auto space-y-8 animate-fade-up">
      {/* Hero Banner */}
      <div className="relative rounded-3xl overflow-hidden border border-slate-200 dark:border-slate-700/50 bg-gradient-to-br from-blue-50 via-sky-50/70 to-white dark:from-slate-900 dark:via-blue-950/40 dark:to-slate-900 p-6 sm:p-8 shadow-sm">
        <div className="absolute inset-0 eng-grid-bg opacity-40 dark:opacity-40" />
        <div className="relative">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div>
              <div className="flex items-center gap-3 mb-3">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-600 to-sky-400 flex items-center justify-center text-white font-bold text-2xl shadow-lg shadow-blue-500/20">
                  G
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-blue-600 dark:text-sky-400 font-semibold">Bienvenue sur</p>
                  <h1 className="text-2xl md:text-3xl font-black text-slate-900 dark:text-white leading-tight">
                    Global Civil Engineering Academy
                  </h1>
                </div>
              </div>
              <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed max-w-lg">
                La plateforme d'apprentissage progressif et exhaustif du Génie Civil. 
                De zéro à ingénieur accompli — <strong className="text-blue-600 dark:text-sky-400">{modules.length} modules, {totalLessons} leçons interactives de 23 étapes, {totalHours} heures de formation.</strong>
              </p>
              <div className="flex flex-wrap gap-2 mt-4">
                <span className="tag-green">🔓 Accès Libre 100%</span>
                <span className="tag-blue">📐 KaTeX & SVG interactifs</span>
                <span className="tag-orange">🎯 Eurocodes & NF</span>
                <span className="tag-blue">🌍 FR / EN</span>
              </div>
            </div>
            <div className="shrink-0 w-full md:w-auto">
              <div className="rounded-2xl border border-sky-300 dark:border-sky-500/30 bg-white/80 dark:bg-sky-500/5 p-5 text-center min-w-[140px] shadow-sm">
                <p className="text-4xl font-black text-blue-600 dark:text-sky-400 font-mono">{modules.length}</p>
                <p className="text-xs text-slate-600 dark:text-slate-400 mt-1">Modules en accès libre</p>
                <div className="mt-2 h-1.5 bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-blue-600 to-sky-400 rounded-full transition-all duration-700"
                    style={{ width: `${Math.max(3, exploredPct)}%` }}
                  />
                </div>
                <p className="text-[10px] text-slate-500 mt-1 font-medium">
                  {completedIds.length}/{modules.length} explorés ({exploredPct}%)
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Global Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        <StatCard value={modules.length} label="Modules" icon="📚" color={CATEGORY_COLORS.blue} />
        <StatCard value={totalLessons} label="Leçons de 23 étapes" icon="📖" color={CATEGORY_COLORS.violet} />
        <StatCard value={`${totalHours}h`} label="Volume de formation indicatif" icon="⏱" color={CATEGORY_COLORS.ink} />
        <StatCard value="∞" label="Accès illimité" icon="🔓" color={CATEGORY_COLORS.ink} />
      </div>

      {/* Featured Modules */}
      <div>
        <div className="flex items-center gap-3 mb-4">
          <span className="text-lg">⭐</span>
          <h2 className="text-lg font-bold text-slate-900 dark:text-white">Modules Phares</h2>
          <span className="text-xs text-slate-500">Les incontournables du Génie Civil</span>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {featuredModules.map(m => (
            <ModuleCard key={m.id} module={m} onSelect={onSelectModule} isDone={completedIds.includes(m.id)} />
          ))}
        </div>
      </div>

      {/* Separator */}
      <div className="border-t border-slate-200 dark:border-slate-800/60" />

      {/* Learning Path Banner */}
      <div className="rounded-2xl border border-navy-200 dark:border-navy-500/30 bg-white dark:bg-slate-900/60 p-5 shadow-sm">
        <div className="flex items-start gap-4">
          <span className="text-3xl shrink-0" aria-hidden="true">🗺️</span>
          <div className="min-w-0 flex-1">
            <h3 className="text-sm font-bold text-navy-700 dark:text-navy-200 mb-1">Parcours d'apprentissage</h3>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed mb-3">
              Les modules sont numérotés dans l'ordre où il faut les suivre : chaque étape s'appuie sur les précédentes.
            </p>
            <ol className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 text-xs">
              {categories.map((cat, i) => {
                const mods = cat.ids.map(id => modules.find(m => m.id === id)).filter(Boolean);
                const first = mods[0];
                const last = mods[mods.length - 1];
                return (
                  <li key={cat.name}>
                    <button
                      type="button"
                      onClick={() => onSelectModule(first)}
                      className="w-full h-full flex items-center gap-2.5 text-left bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/60 px-3 py-2 rounded-xl hover:border-navy-400 hover:bg-navy-50 dark:hover:bg-navy-500/10 transition-all"
                    >
                      <span className="w-6 h-6 shrink-0 rounded-full bg-navy-700 text-white text-[11px] font-bold flex items-center justify-center">{i + 1}</span>
                      <span className="min-w-0">
                        <span className="block font-semibold text-slate-900 dark:text-slate-100 truncate">{cat.name}</span>
                        <span className="block text-[10px] text-slate-500 dark:text-slate-400">
                          {first === last ? `Module ${first.n}` : `Modules ${first.n} à ${last.n}`}
                        </span>
                      </span>
                    </button>
                  </li>
                );
              })}
            </ol>
          </div>
        </div>
      </div>

      {/* All Modules by Category */}
      <div>
        <div className="flex items-center gap-3 mb-6">
          <span className="text-lg">🗂️</span>
          <h2 className="text-lg font-bold text-slate-900 dark:text-white">Les {modules.length} modules — catalogue complet</h2>
        </div>
        <div className="space-y-8">
          {categories.map(cat => (
            <CategorySection
              key={cat.name}
              cat={cat}
              onSelect={onSelectModule}
              completedIds={completedIds}
            />
          ))}
        </div>
      </div>

      {/* Footer */}
      <div className="rounded-2xl border border-slate-200 dark:border-slate-800/60 bg-white dark:bg-slate-900/40 p-6 text-center shadow-sm">
        <p className="text-slate-600 dark:text-slate-400 text-xs">
          🌐 <strong className="text-slate-800 dark:text-slate-300">Global Civil Engineering Academy</strong> — 
          Plateforme open-access d'excellence pour la formation en Génie Civil.
          Contenu basé sur les Eurocodes, normes ACI, NF EN ISO et pratiques internationales.
        </p>
      </div>
    </div>
  );
}
