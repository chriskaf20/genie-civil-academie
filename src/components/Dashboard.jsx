import { useMemo } from 'react';
import { modules, categories } from '../data/modules.js';

const CATEGORY_COLORS = {
  blue: { bg: 'bg-blue-500/10', border: 'border-blue-500/30', text: 'text-blue-400', glow: 'shadow-blue-500/10' },
  orange: { bg: 'bg-orange-500/10', border: 'border-orange-500/30', text: 'text-orange-400', glow: 'shadow-orange-500/10' },
  violet: { bg: 'bg-violet-500/10', border: 'border-violet-500/30', text: 'text-violet-400', glow: 'shadow-violet-500/10' },
  amber: { bg: 'bg-amber-500/10', border: 'border-amber-500/30', text: 'text-amber-400', glow: 'shadow-amber-500/10' },
  teal: { bg: 'bg-teal-500/10', border: 'border-teal-500/30', text: 'text-teal-400', glow: 'shadow-teal-500/10' },
  rose: { bg: 'bg-rose-500/10', border: 'border-rose-500/30', text: 'text-rose-400', glow: 'shadow-rose-500/10' },
  indigo: { bg: 'bg-indigo-500/10', border: 'border-indigo-500/30', text: 'text-indigo-400', glow: 'shadow-indigo-500/10' },
  green: { bg: 'bg-green-500/10', border: 'border-green-500/30', text: 'text-green-400', glow: 'shadow-green-500/10' },
  emerald: { bg: 'bg-emerald-500/10', border: 'border-emerald-500/30', text: 'text-emerald-400', glow: 'shadow-emerald-500/10' },
  slate: { bg: 'bg-slate-700/30', border: 'border-slate-600/30', text: 'text-slate-400', glow: 'shadow-slate-500/10' },
  cyan: { bg: 'bg-cyan-500/10', border: 'border-cyan-500/30', text: 'text-cyan-400', glow: 'shadow-cyan-500/10' },
  pink: { bg: 'bg-pink-500/10', border: 'border-pink-500/30', text: 'text-pink-400', glow: 'shadow-pink-500/10' },
};

const LEVEL_CONFIG = {
  'Débutant': { color: 'text-green-400', bg: 'bg-green-500/10 border border-green-500/30', dot: 'bg-green-400' },
  'Intermédiaire': { color: 'text-yellow-400', bg: 'bg-yellow-500/10 border border-yellow-500/30', dot: 'bg-yellow-400' },
  'Avancé': { color: 'text-orange-400', bg: 'bg-orange-500/10 border border-orange-500/30', dot: 'bg-orange-400' },
  'Tous niveaux': { color: 'text-sky-400', bg: 'bg-sky-500/10 border border-sky-500/30', dot: 'bg-sky-400' },
};

const FEATURED_MODULES = [9, 7, 16, 13, 29, 30]; // Béton Armé, RDM, Ponts, Géotechnique, Logiciels, IA

function StatCard({ value, label, icon, color }) {
  return (
    <div className={`rounded-2xl border ${color.border} ${color.bg} p-4 flex flex-col items-center justify-center text-center`}>
      <span className="text-2xl mb-1">{icon}</span>
      <p className={`text-2xl font-bold font-mono ${color.text}`}>{value}</p>
      <p className="text-xs text-slate-500 mt-0.5">{label}</p>
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
      className={`group w-full text-left rounded-2xl border ${color.border} ${color.bg} p-4 transition-all duration-200 hover:scale-[1.02] hover:shadow-lg ${color.glow} relative overflow-hidden`}
    >
      {isDone && (
        <div className="absolute top-2 right-2">
          <span className="text-emerald-400 text-sm">✓</span>
        </div>
      )}
      <div className="flex items-start gap-3">
        <div className={`w-10 h-10 rounded-xl ${color.bg} border ${color.border} flex items-center justify-center text-xl shrink-0`}>
          {module.icon}
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-1">
            <span className="text-[10px] font-mono text-slate-500">#{String(module.id).padStart(2, '0')}</span>
            <span className={`text-[9px] px-1.5 py-0.5 rounded-full font-semibold ${level.bg} ${level.color}`}>
              {module.level}
            </span>
          </div>
          <p className={`text-sm font-bold ${color.text} leading-tight group-hover:text-white transition-colors truncate`}>
            {module.title}
          </p>
          <p className="text-xs text-slate-500 mt-1 line-clamp-1">{module.description}</p>
          <div className="flex items-center gap-2 mt-2">
            <span className="text-[10px] text-slate-400">⏱ {module.duration}</span>
            <span className="text-slate-600 text-[10px]">·</span>
            <span className="text-[10px] text-slate-400">{module.lessons?.length || 0} leçons</span>
          </div>
        </div>
      </div>
    </button>
  );
}

function CategorySection({ cat, onSelect, completedIds }) {
  const catModules = modules.filter(m => cat.ids.includes(m.id));
  const color = CATEGORY_COLORS[cat.color] || CATEGORY_COLORS.blue;
  const doneCount = catModules.filter(m => completedIds.includes(m.id)).length;

  return (
    <div>
      <div className={`flex items-center justify-between mb-3`}>
        <div className="flex items-center gap-2">
          <div className={`w-2 h-2 rounded-full ${color.text.replace('text-', 'bg-')}`} />
          <h3 className={`text-sm font-bold ${color.text}`}>{cat.name}</h3>
          <span className="text-xs text-slate-500">({catModules.length} modules)</span>
        </div>
        {doneCount > 0 && (
          <span className="text-xs text-emerald-400 font-mono">{doneCount}/{catModules.length} explorés</span>
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

export default function Dashboard({ onSelectModule, completedIds = [], theme }) {
  const isDark = theme === 'dark';
  const totalHours = modules.reduce((acc, m) => acc + parseInt(m.duration), 0);
  const totalLessons = modules.reduce((acc, m) => acc + (m.lessons?.length || 0), 0);

  const featuredModules = useMemo(() =>
    FEATURED_MODULES.map(id => modules.find(m => m.id === id)).filter(Boolean),
    []
  );

  return (
    <div className="max-w-6xl mx-auto space-y-8 animate-fade-up">
      {/* Hero Banner */}
      <div className="relative rounded-3xl overflow-hidden border border-slate-700/50 bg-gradient-to-br from-slate-900 via-blue-950/40 to-slate-900 p-8">
        <div className="absolute inset-0 eng-grid-bg opacity-40" />
        <div className="relative">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div>
              <div className="flex items-center gap-3 mb-3">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-600 to-sky-400 flex items-center justify-center text-white font-bold text-2xl shadow-lg shadow-blue-500/30">
                  G
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-sky-400 font-semibold">Bienvenue sur</p>
                  <h1 className="text-2xl md:text-3xl font-black text-white leading-tight">
                    Global Civil Engineering Academy
                  </h1>
                </div>
              </div>
              <p className="text-slate-400 text-sm leading-relaxed max-w-lg">
                La plateforme d'apprentissage progressif et exhaustif du Génie Civil. 
                De zéro à ingénieur accompli — <strong className="text-sky-400">35 modules, 120+ leçons, 1200+ heures de contenu.</strong>
              </p>
              <div className="flex flex-wrap gap-2 mt-4">
                <span className="tag-green">🔓 Accès Libre 100%</span>
                <span className="tag-blue">📐 KaTeX & SVG interactifs</span>
                <span className="tag-orange">🎯 Eurocodes & NF</span>
                <span className="tag-blue">🌍 FR / EN</span>
              </div>
            </div>
            <div className="shrink-0">
              <div className="rounded-2xl border border-sky-500/30 bg-sky-500/5 p-5 text-center min-w-[140px]">
                <p className="text-4xl font-black text-sky-400 font-mono">35</p>
                <p className="text-xs text-slate-400 mt-1">Modules Déverrouillés</p>
                <div className="mt-2 h-1.5 bg-slate-800 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-blue-600 to-sky-400 rounded-full transition-all duration-700"
                    style={{ width: `${Math.max(3, Math.round((completedIds.length / 35) * 100))}%` }}
                  />
                </div>
                <p className="text-[10px] text-slate-500 mt-1">
                  {completedIds.length}/{35} explorés ({Math.round((completedIds.length / 35) * 100)}%)
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Global Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        <StatCard value="35" label="Modules Complets" icon="📚" color={CATEGORY_COLORS.blue} />
        <StatCard value={`${totalLessons}+`} label="Leçons détaillées" icon="📖" color={CATEGORY_COLORS.violet} />
        <StatCard value={`${totalHours}h`} label="Contenu structuré" icon="⏱" color={CATEGORY_COLORS.orange} />
        <StatCard value="∞" label="Accès Illimité" icon="🔓" color={CATEGORY_COLORS.emerald} />
      </div>

      {/* Featured Modules */}
      <div>
        <div className="flex items-center gap-3 mb-4">
          <span className="text-lg">⭐</span>
          <h2 className="text-lg font-bold text-white">Modules Phares</h2>
          <span className="text-xs text-slate-500">Les incontournables du Génie Civil</span>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {featuredModules.map(m => (
            <ModuleCard key={m.id} module={m} onSelect={onSelectModule} isDone={completedIds.includes(m.id)} />
          ))}
        </div>
      </div>

      {/* Separator */}
      <div className="border-t border-slate-800/60" />

      {/* Learning Path Banner */}
      <div className="rounded-2xl border border-amber-500/20 bg-amber-500/5 p-5">
        <div className="flex items-start gap-4">
          <span className="text-3xl shrink-0">🗺️</span>
          <div>
            <h3 className="text-sm font-bold text-amber-300 mb-1">Parcours d'apprentissage recommandé</h3>
            <p className="text-xs text-slate-400 leading-relaxed mb-3">
              Pour une progression optimale de débutant à expert, suivez cet ordre thématique :
            </p>
            <div className="flex flex-wrap gap-2 items-center text-xs">
              {[
                { icon: '∑', label: 'Maths', id: 1 },
                { icon: '→', label: null },
                { icon: '⚛', label: 'Physique', id: 2 },
                { icon: '→', label: null },
                { icon: '🔩', label: 'RDM', id: 7 },
                { icon: '→', label: null },
                { icon: '🏛', label: 'Béton Armé', id: 9 },
                { icon: '→', label: null },
                { icon: '⛏', label: 'Géotech', id: 13 },
                { icon: '→', label: null },
                { icon: '🌉', label: 'Ponts', id: 16 },
                { icon: '→', label: null },
                { icon: '🤖', label: 'IA', id: 30 },
              ].map((step, i) => step.label ? (
                <button
                  key={i}
                  onClick={() => onSelectModule(modules.find(m => m.id === step.id))}
                  className="flex items-center gap-1 bg-slate-800/60 border border-slate-700/50 px-2 py-1 rounded-lg hover:border-amber-500/40 hover:bg-amber-500/10 transition-all"
                >
                  <span>{step.icon}</span>
                  <span className="text-slate-300 font-medium">{step.label}</span>
                </button>
              ) : (
                <span key={i} className="text-slate-600">→</span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* All Modules by Category */}
      <div>
        <div className="flex items-center gap-3 mb-6">
          <span className="text-lg">🗂️</span>
          <h2 className="text-lg font-bold text-white">Tous les 35 Modules — Catalogue Complet</h2>
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
      <div className="rounded-2xl border border-slate-800/60 bg-slate-900/40 p-6 text-center">
        <p className="text-slate-500 text-xs">
          🌐 <strong className="text-slate-400">Global Civil Engineering Academy</strong> — 
          Plateforme open-access d'excellence pour la formation en Génie Civil.
          Contenu basé sur les Eurocodes, normes ACI, NF EN ISO et pratiques internationales.
        </p>
      </div>
    </div>
  );
}
