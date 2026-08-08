import { useEffect, useState } from 'react';
import ModuleNav from './components/ModuleNav.jsx';
import LessonCanvas from './components/LessonCanvas.jsx';
import SidebarRight from './components/SidebarRight.jsx';
import { modules } from './data/modules.js';
import './styles.css';

const STORAGE_KEY = 'gcea-v2-progress';

function loadProgress() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    return saved ? JSON.parse(saved) : { currentModuleId: 1, completedIds: [1], theme: 'dark' };
  } catch {
    return { currentModuleId: 1, completedIds: [1], theme: 'dark' };
  }
}

function saveProgress(data) {
  try { localStorage.setItem(STORAGE_KEY, JSON.stringify(data)); } catch {}
}

export default function App() {
  const [progress, setProgress] = useState(loadProgress);
  const [selectedModule, setSelectedModule] = useState(
    () => modules.find(m => m.id === loadProgress().currentModuleId) || modules[0]
  );
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [rightPanelOpen, setRightPanelOpen] = useState(true);
  const [mobileMenu, setMobileMenu] = useState(false);

  const theme = progress.theme;
  const isDark = theme === 'dark';

  useEffect(() => {
    saveProgress(progress);
  }, [progress]);

  const toggleTheme = () => {
    setProgress(p => ({ ...p, theme: p.theme === 'dark' ? 'light' : 'dark' }));
  };

  const selectModule = (module) => {
    setSelectedModule(module);
    setMobileMenu(false);
    setProgress(p => ({
      ...p,
      currentModuleId: module.id,
      completedIds: p.completedIds.includes(module.id) ? p.completedIds : [...p.completedIds, module.id],
    }));
  };

  const completedCount = progress.completedIds.length;
  const totalCount = modules.length;
  const progressPct = Math.round((completedCount / totalCount) * 100);

  const bgClass = isDark
    ? 'bg-slate-950 text-slate-100'
    : 'bg-slate-50 text-slate-900 eng-grid-bg-light';

  const sidebarBg = isDark ? 'bg-slate-900 border-slate-800/60' : 'bg-white border-slate-200';
  const rightBg = isDark ? 'bg-slate-950 border-slate-800/60' : 'bg-slate-50 border-slate-200';
  const headerBg = isDark ? 'bg-slate-900/95 border-slate-800/60' : 'bg-white/95 border-slate-200';

  return (
    <div className={`h-screen flex flex-col ${bgClass} overflow-hidden`}>
      {/* ── Top Header bar ── */}
      <header className={`shrink-0 border-b ${headerBg} backdrop-blur-md px-4 py-3 flex items-center gap-4 z-30`}
        style={{ background: isDark ? 'rgba(15,23,42,0.95)' : 'rgba(255,255,255,0.95)' }}>
        
        {/* Logo & brand */}
        <div className="flex items-center gap-3">
          {/* Sidebar toggle */}
          <button
            onClick={() => setSidebarOpen(p => !p)}
            className="sidebar-toggle hidden md:flex w-8 h-8 items-center justify-center rounded-lg text-slate-400 hover:text-white text-base"
            title={sidebarOpen ? 'Masquer la navigation' : 'Afficher la navigation'}
          >
            {sidebarOpen ? '◀' : '▶'}
          </button>

          {/* Mobile menu */}
          <button
            onClick={() => setMobileMenu(p => !p)}
            className="md:hidden w-8 h-8 flex items-center justify-center rounded-lg text-slate-400 hover:text-white"
          >
            ☰
          </button>

          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-600 to-sky-400 flex items-center justify-center text-white font-bold text-sm shadow-lg shadow-blue-500/30">
              G
            </div>
            <div className="hidden sm:block">
              <div className="flex items-center gap-2">
                <p className="text-xs uppercase tracking-widest text-sky-400 font-semibold leading-tight">Académie Mondiale</p>
                <span className="tag-green text-[9px]">Accès Libre</span>
              </div>
              <p className="text-sm font-bold text-white leading-tight">Global Civil Engineering Academy</p>
            </div>
          </div>
        </div>

        {/* Center: current module indicator */}
        <div className="flex-1 hidden lg:flex items-center justify-center">
          <div className="flex items-center gap-3 text-sm bg-slate-800/50 px-4 py-1.5 rounded-full border border-slate-700/50">
            <span className="text-xl">{selectedModule.icon}</span>
            <div className="flex items-center gap-2">
              <span className="text-xs text-sky-400 font-mono font-bold">Module {selectedModule.id}/{totalCount} :</span>
              <p className="font-semibold text-white text-sm truncate max-w-xs">{selectedModule.title}</p>
            </div>
          </div>
        </div>

        {/* Right: progress + controls */}
        <div className="flex items-center gap-3 ml-auto">
          {/* Global progress */}
          <div className="hidden sm:flex items-center gap-3">
            <div className="text-right">
              <p className="text-xs text-slate-500">Modules consultés</p>
              <p className="text-xs font-bold text-white font-mono">{completedCount}/{totalCount}</p>
            </div>
            <div className="w-28 h-2 rounded-full bg-slate-800 overflow-hidden">
              <div
                className="progress-bar-animated h-full rounded-full transition-all duration-700"
                style={{ width: `${Math.max(3, progressPct)}%` }}
              />
            </div>
            <span className="text-xs font-bold text-sky-400 font-mono">{progressPct}%</span>
          </div>

          <div className="w-px h-6 bg-slate-700 hidden sm:block" />

          {/* Theme toggle */}
          <button
            onClick={toggleTheme}
            className="w-9 h-9 rounded-xl flex items-center justify-center transition-all hover:bg-slate-800 text-base"
            title={isDark ? 'Mode clair' : 'Mode sombre'}
          >
            {isDark ? '☀️' : '🌙'}
          </button>

          {/* Right panel toggle */}
          <button
            onClick={() => setRightPanelOpen(p => !p)}
            className="hidden xl:flex w-9 h-9 rounded-xl items-center justify-center transition-all hover:bg-slate-800 text-base text-slate-400"
            title={rightPanelOpen ? 'Masquer le panneau' : 'Afficher le panneau'}
          >
            {rightPanelOpen ? '▶' : '◀'}
          </button>
        </div>
      </header>

      {/* ── Main layout ── */}
      <div className="flex-1 flex overflow-hidden relative">
        {/* Mobile overlay */}
        {mobileMenu && (
          <div
            className="fixed inset-0 bg-black/60 z-40 md:hidden"
            onClick={() => setMobileMenu(false)}
          />
        )}

        {/* ── Left Sidebar ── */}
        <aside
          className={`
            ${sidebarOpen ? 'w-72' : 'w-0'} sidebar-left shrink-0
            border-r ${sidebarBg} overflow-hidden
            hidden md:flex flex-col
          `}
          style={{ transition: 'width 0.25s cubic-bezier(0.4,0,0.2,1)' }}
        >
          <div className="w-72 flex flex-col h-full">
            {/* Module progress summary */}
            <div className={`px-4 py-3 border-b ${isDark ? 'border-slate-800/60' : 'border-slate-200'}`}>
              <div className="rounded-2xl bg-gradient-to-br from-blue-950/80 to-slate-900 p-3.5 border border-blue-900/30 relative overflow-hidden">
                <div className="absolute inset-0 eng-grid-bg opacity-40" />
                <div className="relative">
                  <div className="flex items-center justify-between mb-2">
                    <p className="text-xs uppercase tracking-widest text-sky-400 font-semibold">Suivi d'apprentissage</p>
                    <span className="text-xs font-bold text-white font-mono">{progressPct}%</span>
                  </div>
                  <div className="h-2 rounded-full bg-slate-800 overflow-hidden mb-2">
                    <div
                      className="progress-bar-animated h-full rounded-full"
                      style={{ width: `${Math.max(3, progressPct)}%` }}
                    />
                  </div>
                  <p className="text-[11px] text-slate-400">{completedCount} sur {totalCount} modules explorés (🔓 Accès libre)</p>
                </div>
              </div>
            </div>

            {/* Navigation */}
            <div className="flex-1 overflow-y-auto p-3">
              <ModuleNav
                activeSlug={selectedModule.slug}
                onSelect={selectModule}
                completedIds={progress.completedIds}
              />
            </div>
          </div>
        </aside>

        {/* Mobile sidebar drawer */}
        <aside
          className={`
            fixed top-0 left-0 h-full z-50 w-80 flex flex-col
            ${sidebarBg} border-r shadow-2xl
            transform transition-transform duration-300 md:hidden
            ${mobileMenu ? 'translate-x-0' : '-translate-x-full'}
          `}
        >
          <div className="flex items-center justify-between px-4 py-4 border-b border-slate-800/60">
            <p className="text-sm font-bold text-white">Navigation 35 Modules</p>
            <button onClick={() => setMobileMenu(false)} className="text-slate-400 hover:text-white">✕</button>
          </div>
          <div className="flex-1 overflow-y-auto p-3">
            <ModuleNav
              activeSlug={selectedModule.slug}
              onSelect={selectModule}
              completedIds={progress.completedIds}
            />
          </div>
        </aside>

        {/* ── Main Content ── */}
        <main className={`flex-1 overflow-y-auto ${isDark ? '' : 'bg-slate-50'}`}>
          <div className={`min-h-full ${isDark ? 'eng-grid-bg' : ''}`}>
            <div className="p-4 xl:p-6">
              <LessonCanvas module={selectedModule} theme={theme} />
            </div>
          </div>
        </main>

        {/* ── Right Panel ── */}
        <aside
          className={`
            ${rightPanelOpen ? 'w-96' : 'w-0'} sidebar-left shrink-0
            border-l ${rightBg} overflow-hidden
            hidden xl:flex flex-col
          `}
          style={{ transition: 'width 0.25s cubic-bezier(0.4,0,0.2,1)' }}
        >
          <div className="w-96 flex flex-col h-full p-4 overflow-y-auto">
            <SidebarRight module={selectedModule} />
          </div>
        </aside>
      </div>

      {/* ── Bottom mobile nav hint ── */}
      <div className="md:hidden shrink-0 border-t border-slate-800 bg-slate-900 px-4 py-2 flex items-center justify-between">
        <button onClick={() => setMobileMenu(true)} className="text-sm text-slate-400 flex items-center gap-2">
          ☰ <span>Modules (35)</span>
        </button>
        <div className="text-xs text-slate-400">
          Module {selectedModule.id} — {selectedModule.title.substring(0, 18)}...
        </div>
        <button onClick={toggleTheme} className="text-slate-400 text-base">
          {isDark ? '☀️' : '🌙'}
        </button>
      </div>
    </div>
  );
}
