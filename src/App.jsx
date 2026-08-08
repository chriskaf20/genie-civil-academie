import { useEffect, useState } from 'react';
import ModuleNav from './components/ModuleNav.jsx';
import LessonCanvas from './components/LessonCanvas.jsx';
import SidebarRight from './components/SidebarRight.jsx';
import SciCalc from './components/SciCalc.jsx';
import GlossarySearch from './components/GlossarySearch.jsx';
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
  const [showSciCalc, setShowSciCalc] = useState(false);
  const [showMobileGlossary, setShowMobileGlossary] = useState(false);
  const [activeMobileTab, setActiveMobileTab] = useState('cours'); // 'cours' | 'modules' | 'calc' | 'glossaire'

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
    setActiveMobileTab('cours');
    setProgress(p => ({
      ...p,
      currentModuleId: module.id,
      completedIds: p.completedIds.includes(module.id) ? p.completedIds : [...p.completedIds, module.id],
    }));
  };

  const handleMobileTabClick = (tabKey) => {
    setActiveMobileTab(tabKey);
    if (tabKey === 'cours') {
      setMobileMenu(false);
      setShowMobileGlossary(false);
      setShowSciCalc(false);
    } else if (tabKey === 'modules') {
      setMobileMenu(true);
      setShowMobileGlossary(false);
    } else if (tabKey === 'calc') {
      setShowSciCalc(true);
      setShowMobileGlossary(false);
    } else if (tabKey === 'glossaire') {
      setShowMobileGlossary(true);
      setMobileMenu(false);
    }
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
      {/* Popups */}
      {showSciCalc && <SciCalc onClose={() => setShowSciCalc(false)} />}

      {/* Mobile Glossary Modal */}
      {showMobileGlossary && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4" onClick={() => setShowMobileGlossary(false)}>
          <div className="w-full max-w-lg max-h-[85vh] overflow-y-auto" onClick={e => e.stopPropagation()}>
            <div className="flex justify-end mb-2">
              <button onClick={() => setShowMobileGlossary(false)} className="text-slate-400 hover:text-white bg-slate-800 rounded-full w-8 h-8 flex items-center justify-center text-sm">✕</button>
            </div>
            <GlossarySearch />
          </div>
        </div>
      )}

      {/* ── Compact Header Bar ── */}
      <header className={`shrink-0 border-b ${headerBg} backdrop-blur-md px-3 py-1.5 md:py-3 md:px-4 flex items-center gap-3 z-30`}
        style={{ background: isDark ? 'rgba(15,23,42,0.95)' : 'rgba(255,255,255,0.95)' }}>
        
        {/* Logo & brand */}
        <div className="flex items-center gap-2 md:gap-3">
          {/* Sidebar toggle (desktop) */}
          <button
            onClick={() => setSidebarOpen(p => !p)}
            className="sidebar-toggle hidden md:flex w-8 h-8 items-center justify-center rounded-lg text-slate-400 hover:text-white text-base"
            title={sidebarOpen ? 'Masquer la navigation' : 'Afficher la navigation'}
          >
            {sidebarOpen ? '◀' : '▶'}
          </button>

          {/* Mobile menu trigger */}
          <button
            onClick={() => handleMobileTabClick('modules')}
            className="md:hidden w-7 h-7 flex items-center justify-center rounded-lg text-slate-300 hover:text-white bg-slate-800/80 text-sm"
            title="Menu modules"
          >
            🗂️
          </button>

          <div className="flex items-center gap-2">
            <div className="w-7 h-7 md:w-8 md:h-8 rounded-lg bg-gradient-to-br from-blue-600 to-sky-400 flex items-center justify-center text-white font-bold text-xs md:text-sm shadow-md">
              G
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <p className="text-[10px] md:text-xs uppercase tracking-widest text-sky-400 font-semibold leading-tight">Académie Génie Civil</p>
                <span className="tag-green text-[8px] md:text-[9px]">Accès Libre</span>
              </div>
              <p className="text-xs md:text-sm font-bold text-white leading-tight hidden sm:block">Global Civil Engineering Academy</p>
            </div>
          </div>
        </div>

        {/* Center: current module indicator */}
        <div className="flex-1 hidden lg:flex items-center justify-center">
          <div className="flex items-center gap-2.5 text-sm bg-slate-800/50 px-3.5 py-1 rounded-full border border-slate-700/50">
            <span className="text-lg">{selectedModule.icon}</span>
            <div className="flex items-center gap-1.5">
              <span className="text-xs text-sky-400 font-mono font-bold">Module {selectedModule.id}/{totalCount} :</span>
              <p className="font-semibold text-white text-xs truncate max-w-xs">{selectedModule.title}</p>
            </div>
          </div>
        </div>

        {/* Right: progress + controls */}
        <div className="flex items-center gap-2 ml-auto">
          {/* Global progress */}
          <div className="hidden sm:flex items-center gap-2.5">
            <div className="text-right">
              <p className="text-[10px] text-slate-500">Explorés</p>
              <p className="text-xs font-bold text-white font-mono">{completedCount}/{totalCount}</p>
            </div>
            <div className="w-24 h-2 rounded-full bg-slate-800 overflow-hidden">
              <div
                className="progress-bar-animated h-full rounded-full transition-all duration-700"
                style={{ width: `${Math.max(3, progressPct)}%` }}
              />
            </div>
            <span className="text-xs font-bold text-sky-400 font-mono">{progressPct}%</span>
          </div>

          <div className="w-px h-5 bg-slate-700 hidden sm:block" />

          {/* Theme toggle */}
          <button
            onClick={toggleTheme}
            className="w-7 h-7 md:w-8 md:h-8 rounded-lg flex items-center justify-center transition-all hover:bg-slate-800 text-xs md:text-sm"
            title={isDark ? 'Mode clair' : 'Mode sombre'}
          >
            {isDark ? '☀️' : '🌙'}
          </button>

          {/* Right panel toggle */}
          <button
            onClick={() => setRightPanelOpen(p => !p)}
            className="hidden xl:flex w-8 h-8 rounded-lg items-center justify-center transition-all hover:bg-slate-800 text-xs text-slate-400"
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

        {/* ── Left Sidebar (Desktop) ── */}
        <aside
          className={`
            ${sidebarOpen ? 'w-72' : 'w-0'} sidebar-left shrink-0
            border-r ${sidebarBg} overflow-hidden
            hidden md:flex flex-col
          `}
          style={{ transition: 'width 0.25s cubic-bezier(0.4,0,0.2,1)' }}
        >
          <div className="w-72 flex flex-col h-full">
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
          <div className="flex items-center justify-between px-4 py-3 border-b border-slate-800/60">
            <div className="flex items-center gap-2">
              <span className="text-base">🗂️</span>
              <p className="text-sm font-bold text-white">35 Modules de Génie Civil</p>
            </div>
            <button onClick={() => setMobileMenu(false)} className="text-slate-400 hover:text-white text-sm">✕</button>
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
        <main className={`flex-1 overflow-y-auto pb-16 md:pb-0 ${isDark ? '' : 'bg-slate-50'}`}>
          <div className={`min-h-full ${isDark ? 'eng-grid-bg' : ''}`}>
            <div className="p-3 md:p-6">
              <LessonCanvas module={selectedModule} theme={theme} />
            </div>
          </div>
        </main>

        {/* ── Right Panel (Desktop) ── */}
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

      {/* ── Fixed Bottom Navigation Bar (Mobile) ── */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-slate-900/95 border-t border-slate-800/80 backdrop-blur-md px-2 py-1.5 flex justify-around items-center">
        <button
          onClick={() => handleMobileTabClick('cours')}
          className={`flex flex-col items-center py-1 px-2 rounded-xl transition-all ${
            activeMobileTab === 'cours' && !mobileMenu && !showSciCalc && !showMobileGlossary
              ? 'text-sky-400 font-bold bg-sky-500/10'
              : 'text-slate-400 hover:text-slate-200'
          }`}
        >
          <span className="text-base">📚</span>
          <span className="text-[10px] mt-0.5">Cours</span>
        </button>

        <button
          onClick={() => handleMobileTabClick('modules')}
          className={`flex flex-col items-center py-1 px-2 rounded-xl transition-all ${
            mobileMenu
              ? 'text-sky-400 font-bold bg-sky-500/10'
              : 'text-slate-400 hover:text-slate-200'
          }`}
        >
          <span className="text-base">🗂️</span>
          <span className="text-[10px] mt-0.5">35 Modules</span>
        </button>

        <button
          onClick={() => handleMobileTabClick('calc')}
          className={`flex flex-col items-center py-1 px-2 rounded-xl transition-all ${
            showSciCalc
              ? 'text-violet-400 font-bold bg-violet-500/10'
              : 'text-slate-400 hover:text-slate-200'
          }`}
        >
          <span className="text-base">🧮</span>
          <span className="text-[10px] mt-0.5">Calculatrice</span>
        </button>

        <button
          onClick={() => handleMobileTabClick('glossaire')}
          className={`flex flex-col items-center py-1 px-2 rounded-xl transition-all ${
            showMobileGlossary
              ? 'text-orange-400 font-bold bg-orange-500/10'
              : 'text-slate-400 hover:text-slate-200'
          }`}
        >
          <span className="text-base">🔍</span>
          <span className="text-[10px] mt-0.5">Glossaire</span>
        </button>
      </nav>
    </div>
  );
}
