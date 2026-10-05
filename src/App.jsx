import { useCallback, useEffect, useState } from 'react';
import ModuleNav from './components/ModuleNav.jsx';
import LessonCanvas from './components/LessonCanvas.jsx';
import SidebarRight from './components/SidebarRight.jsx';
import Dashboard from './components/Dashboard.jsx';
import SciCalc from './components/SciCalc.jsx';
import GlossarySearch from './components/GlossarySearch.jsx';
import PwaInstallPrompt from './components/PwaInstallPrompt.jsx';
import GceaLogoSvg from './components/GceaLogoSvg.jsx';
import ErrorBoundary from './components/ErrorBoundary.jsx';
import { modules } from './data/modules.js';
import { getLessonEntries } from './data/lesson_registry.js';

const STORAGE_KEY = 'gcea-v2-progress';
const DEFAULT_PROGRESS = { currentModuleId: 1, completedIds: [], theme: 'dark', lessons: {} };

function loadProgress() {
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY) || 'null');
    return saved ? { ...DEFAULT_PROGRESS, ...saved, lessons: saved.lessons || {} } : DEFAULT_PROGRESS;
  } catch {
    return DEFAULT_PROGRESS;
  }
}

function saveProgress(data) {
  try { localStorage.setItem(STORAGE_KEY, JSON.stringify(data)); } catch { /* storage unavailable */ }
}

function findModule(value) {
  if (!value) return null;
  return modules.find(m => m.slug === value || String(m.id) === String(value)) || null;
}

/** Reads ?module=<slug|id>&lesson=<n> from the address bar. */
function readLocation() {
  const params = new URLSearchParams(window.location.search);
  const module = findModule(params.get('module'));
  if (!module) return { view: 'dashboard' };
  const count = getLessonEntries(module).length;
  const lesson = Math.min(Math.max(1, parseInt(params.get('lesson') || '1', 10) || 1), Math.max(1, count));
  return { view: 'lesson', module, lessonIndex: lesson - 1 };
}

function writeLocation({ view, module, lessonIndex = 0 }, replace = false) {
  const url = view === 'lesson' && module
    ? `?module=${module.slug}${lessonIndex > 0 ? `&lesson=${lessonIndex + 1}` : ''}`
    : window.location.pathname;
  if (`${window.location.search}` === (url.startsWith('?') ? url : '')) return;
  window.history[replace ? 'replaceState' : 'pushState']({}, '', url);
}

export default function App() {
  const [progress, setProgress] = useState(loadProgress);
  const [initial] = useState(readLocation);
  const [selectedModule, setSelectedModule] = useState(
    () => initial.module || findModule(String(progress.currentModuleId)) || modules[0]
  );
  const [lessonIndex, setLessonIndex] = useState(initial.lessonIndex || 0);
  const [view, setView] = useState(initial.view);
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [rightPanelOpen, setRightPanelOpen] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);
  const [showSciCalc, setShowSciCalc] = useState(false);
  const [showMobileGlossary, setShowMobileGlossary] = useState(false);

  const isDark = progress.theme === 'dark';

  useEffect(() => {
    saveProgress(progress);
  }, [progress]);

  useEffect(() => {
    const root = document.documentElement;
    root.classList.toggle('dark', isDark);
    root.classList.toggle('theme-dark', isDark);
    root.classList.toggle('theme-light', !isDark);
  }, [isDark]);

  // Record a module opened from a link as explored.
  useEffect(() => {
    if (initial.view === 'lesson' && initial.module) markExplored(initial.module);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Browser back / forward.
  useEffect(() => {
    const onPop = () => {
      const loc = readLocation();
      setView(loc.view);
      if (loc.module) {
        setSelectedModule(loc.module);
        setLessonIndex(loc.lessonIndex);
      }
      setMobileMenu(false);
    };
    window.addEventListener('popstate', onPop);
    return () => window.removeEventListener('popstate', onPop);
  }, []);

  useEffect(() => {
    document.title = view === 'lesson'
      ? `${selectedModule.title} — GCEA`
      : 'Global Civil Engineering Academy — Plateforme d\'Apprentissage du Génie Civil';
  }, [view, selectedModule]);

  function markExplored(module) {
    setProgress(p => ({
      ...p,
      currentModuleId: module.id,
      completedIds: p.completedIds.includes(module.id) ? p.completedIds : [...p.completedIds, module.id],
    }));
  }

  const toggleTheme = () => setProgress(p => ({ ...p, theme: p.theme === 'dark' ? 'light' : 'dark' }));

  const closeOverlays = () => {
    setMobileMenu(false);
    setShowMobileGlossary(false);
    setShowSciCalc(false);
  };

  const selectModule = module => {
    setSelectedModule(module);
    setLessonIndex(0);
    setView('lesson');
    closeOverlays();
    markExplored(module);
    writeLocation({ view: 'lesson', module, lessonIndex: 0 });
    window.scrollTo({ top: 0 });
  };

  const selectLesson = index => {
    setLessonIndex(index);
    writeLocation({ view: 'lesson', module: selectedModule, lessonIndex: index });
    window.scrollTo({ top: 0 });
  };

  const goHome = () => {
    setView('dashboard');
    closeOverlays();
    writeLocation({ view: 'dashboard' });
  };

  const openLessonView = () => {
    setView('lesson');
    closeOverlays();
    markExplored(selectedModule);
    writeLocation({ view: 'lesson', module: selectedModule, lessonIndex });
  };

  const updateLessonProgress = useCallback((key, patch) => {
    setProgress(p => ({ ...p, lessons: { ...p.lessons, [key]: { ...(p.lessons?.[key] || {}), ...patch } } }));
  }, []);

  const completedCount = progress.completedIds.length;
  const totalCount = modules.length;
  const progressPct = Math.round((completedCount / totalCount) * 100);

  const bgClass = isDark ? 'bg-slate-950 text-slate-100' : 'bg-slate-50 text-slate-900 eng-grid-bg-light';
  const sidebarBg = isDark ? 'bg-slate-900 border-slate-800/60' : 'bg-white border-slate-200';
  const headerBg = isDark ? 'bg-slate-900/95 border-slate-800/60' : 'bg-white/95 border-slate-200';
  const navButton = active => `flex flex-col items-center py-1 px-2 rounded-xl transition-all ${active ? 'text-sky-400 font-bold bg-sky-500/10' : 'text-slate-400 hover:text-slate-200'}`;

  return (
    <div className={`min-h-screen flex flex-col ${isDark ? 'dark' : ''} ${bgClass} w-full max-w-full`}>
      <PwaInstallPrompt isDark={isDark} />

      {showSciCalc && <SciCalc onClose={() => setShowSciCalc(false)} />}

      {showMobileGlossary && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4" onClick={() => setShowMobileGlossary(false)}>
          <div className="w-full max-w-lg max-h-[85vh] overflow-y-auto" onClick={e => e.stopPropagation()} role="dialog" aria-label="Glossaire">
            <div className="flex justify-end mb-2">
              <button type="button" onClick={() => setShowMobileGlossary(false)} aria-label="Fermer le glossaire" className="text-slate-300 hover:text-white bg-slate-800 rounded-full w-8 h-8 flex items-center justify-center text-sm">✕</button>
            </div>
            <GlossarySearch />
          </div>
        </div>
      )}

      {rightPanelOpen && (
        <div className="fixed inset-0 z-50 overflow-hidden flex justify-end animate-fade-in">
          <div className="fixed inset-0 bg-black/50 backdrop-blur-xs transition-opacity" onClick={() => setRightPanelOpen(false)} />
          <div className={`relative w-full max-w-md h-full shadow-2xl z-10 flex flex-col ${sidebarBg} border-l border-slate-200 dark:border-slate-800 animate-slide-left`} role="dialog" aria-label="Outils et ressources">
            <div className="flex items-center justify-between px-5 py-4 border-b border-slate-200 dark:border-slate-800">
              <div className="flex items-center gap-2">
                <span className="text-lg" aria-hidden="true">🧰</span>
                <p className="text-sm font-bold text-slate-900 dark:text-white">Outils & ressources complémentaires</p>
              </div>
              <button
                type="button"
                onClick={() => setRightPanelOpen(false)}
                aria-label="Fermer les outils"
                className="w-8 h-8 rounded-full flex items-center justify-center bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-500 hover:text-slate-900 dark:hover:text-white transition-colors"
              >
                ✕
              </button>
            </div>
            <div className="flex-1 overflow-y-auto p-5">
              <SidebarRight
                module={selectedModule}
                lessonIndex={lessonIndex}
                inLesson={view === 'lesson'}
                progress={progress}
              />
            </div>
          </div>
        </div>
      )}

      {/* ── Header ── */}
      <header
        className={`sticky top-0 shrink-0 border-b ${headerBg} backdrop-blur-md px-2 py-1.5 sm:px-4 md:py-2.5 md:px-6 flex items-center gap-2 sm:gap-3 z-30 w-full max-w-full`}
        style={{ background: isDark ? 'rgba(15,23,42,0.95)' : 'rgba(255,255,255,0.95)' }}
      >
        <div className="flex items-center gap-2 md:gap-3">
          <button
            type="button"
            onClick={() => setSidebarOpen(p => !p)}
            className="hidden md:flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 dark:bg-slate-800/90 dark:hover:bg-slate-750 dark:text-slate-200 text-xs font-semibold transition-all border border-slate-200 dark:border-slate-700/60 shadow-2xs cursor-pointer"
            aria-expanded={sidebarOpen}
          >
            <span>{sidebarOpen ? '◀ Masquer le sommaire' : `▶ Sommaire (${totalCount} modules)`}</span>
          </button>

          <button
            type="button"
            onClick={() => { setMobileMenu(true); setShowMobileGlossary(false); }}
            className="md:hidden w-7 h-7 flex items-center justify-center rounded-lg text-slate-600 hover:text-slate-900 bg-slate-100 dark:text-slate-300 dark:hover:text-white dark:bg-slate-800/80 text-sm"
            aria-label="Ouvrir la liste des modules"
          >
            🗂️
          </button>

          <button type="button" onClick={goHome} className="flex items-center gap-2 group cursor-pointer" aria-label="Retour au tableau de bord">
            <GceaLogoSvg size={30} isDark={isDark} className="md:w-[34px] md:h-[34px] group-hover:scale-105 transition-transform duration-200" />
            <div className="text-left">
              <div className="flex items-center gap-1.5">
                <p className="text-[10px] md:text-xs uppercase tracking-widest text-teal-600 dark:text-cyan-400 font-semibold leading-tight">Académie Génie Civil</p>
                <span className="tag-green text-[8px] md:text-[9px]">Accès libre</span>
              </div>
              <p className="text-xs md:text-sm font-bold text-slate-900 dark:text-white leading-tight hidden sm:block">Global Civil Engineering Academy</p>
            </div>
          </button>
        </div>

        <div className="flex-1 hidden lg:flex items-center justify-center">
          {view === 'lesson' ? (
            <button
              type="button"
              onClick={goHome}
              className="flex items-center gap-2.5 text-sm bg-slate-100 text-slate-800 border border-slate-200 hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-200 dark:border-slate-700/50 dark:hover:bg-slate-750 px-3.5 py-1 rounded-full transition-all group shadow-sm cursor-pointer"
            >
              <span className="text-lg" aria-hidden="true">{selectedModule.icon}</span>
              <span className="flex items-center gap-1.5">
                <span className="text-xs text-teal-600 dark:text-cyan-400 font-mono font-bold">Module {selectedModule.id}/{totalCount} :</span>
                <span className="font-semibold text-slate-900 dark:text-white text-xs truncate max-w-xs">{selectedModule.title}</span>
              </span>
              <span className="text-[10px] text-slate-500 group-hover:text-slate-700 dark:group-hover:text-slate-300 transition-colors">· Accueil ⌂</span>
            </button>
          ) : (
            <div className="flex items-center gap-2 text-sm bg-teal-50 text-teal-700 border border-teal-200 dark:bg-teal-500/10 dark:text-cyan-400 dark:border-teal-500/20 px-3.5 py-1 rounded-full font-medium shadow-sm">
              <span className="text-xs">🏠 Tableau de bord — {totalCount} modules en accès libre</span>
            </div>
          )}
        </div>

        <div className="flex items-center gap-2 ml-auto">
          <div className="hidden sm:flex items-center gap-2.5" title="Modules ouverts au moins une fois">
            <div className="text-right">
              <p className="text-[10px] text-slate-500">Explorés</p>
              <p className="text-xs font-bold text-slate-800 dark:text-white font-mono">{completedCount}/{totalCount}</p>
            </div>
            <div className="w-24 h-2 rounded-full bg-slate-200 dark:bg-slate-800 overflow-hidden" role="progressbar" aria-valuenow={progressPct} aria-valuemin={0} aria-valuemax={100}>
              <div className="progress-bar-animated h-full rounded-full transition-all duration-700" style={{ width: `${Math.max(3, progressPct)}%` }} />
            </div>
            <span className="text-xs font-bold text-teal-600 dark:text-cyan-400 font-mono">{progressPct}%</span>
          </div>

          <div className="w-px h-5 bg-slate-300 dark:bg-slate-700 hidden sm:block" />

          <button
            type="button"
            onClick={toggleTheme}
            className="w-7 h-7 md:w-8 md:h-8 rounded-lg flex items-center justify-center transition-all bg-slate-100 hover:bg-slate-200 text-slate-700 dark:bg-transparent dark:hover:bg-slate-800 dark:text-slate-300 text-xs md:text-sm border border-slate-200 dark:border-transparent cursor-pointer"
            aria-label={isDark ? 'Passer en mode clair' : 'Passer en mode sombre'}
            title={isDark ? 'Mode clair' : 'Mode sombre'}
          >
            {isDark ? '☀️' : '🌙'}
          </button>

          <button
            type="button"
            onClick={() => setRightPanelOpen(p => !p)}
            className="flex items-center gap-1.5 px-2.5 py-1 md:px-3 md:py-1.5 rounded-lg text-xs font-semibold bg-slate-100 hover:bg-slate-200 text-slate-700 dark:bg-slate-800 dark:hover:bg-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-700 transition-all shadow-2xs cursor-pointer"
            title="Quiz express, glossaire, poutre, convertisseur"
          >
            <span>🧰 Outils</span>
          </button>
        </div>
      </header>

      <div className="flex-1 flex relative w-full max-w-full items-start">
        {mobileMenu && <div className="fixed inset-0 bg-black/60 z-40 md:hidden" onClick={() => setMobileMenu(false)} />}

        {/* Desktop sidebar */}
        <aside
          className={`${sidebarOpen ? 'w-72' : 'w-0'} sidebar-left shrink-0 border-r ${sidebarBg} hidden md:flex flex-col sticky top-[53px] md:top-[60px] h-[calc(100vh-60px)] overflow-y-auto z-20`}
          style={{ transition: 'width 0.25s cubic-bezier(0.4,0,0.2,1)' }}
          aria-label="Sommaire des modules"
        >
          <div className="w-72 p-3">
            <ModuleNav activeSlug={view === 'lesson' ? selectedModule.slug : null} onSelect={selectModule} completedIds={progress.completedIds} />
          </div>
        </aside>

        {/* Mobile drawer */}
        <aside
          className={`fixed top-0 left-0 h-full z-50 w-72 max-w-[85vw] flex flex-col ${sidebarBg} border-r shadow-2xl transform transition-transform duration-300 md:hidden ${mobileMenu ? 'translate-x-0' : '-translate-x-full'}`}
          aria-label="Modules"
          aria-hidden={!mobileMenu}
        >
          <div className="flex items-center justify-between px-4 py-3 border-b border-slate-200 dark:border-slate-800/60">
            <div className="flex items-center gap-2">
              <span className="text-base" aria-hidden="true">🗂️</span>
              <p className="text-sm font-bold text-slate-900 dark:text-white">{totalCount} modules de génie civil</p>
            </div>
            <button type="button" onClick={() => setMobileMenu(false)} aria-label="Fermer la liste" className="text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white text-sm">✕</button>
          </div>
          <div className="flex-1 overflow-y-auto p-3">
            <ModuleNav activeSlug={view === 'lesson' ? selectedModule.slug : null} onSelect={selectModule} completedIds={progress.completedIds} />
          </div>
        </aside>

        <main className={`flex-1 min-w-0 pb-16 md:pb-8 w-full max-w-full ${isDark ? '' : 'bg-slate-50'}`}>
          <div className={`w-full max-w-full ${isDark ? 'eng-grid-bg' : ''}`}>
            <div className="px-3 py-4 sm:px-6 md:px-8 w-full max-w-full">
              <ErrorBoundary
                key={`${view}-${selectedModule.id}-${lessonIndex}`}
                fallback={(error, reset) => (
                  <div className="rounded-3xl border border-rose-500/40 bg-slate-900/90 p-6 sm:p-8 text-center space-y-4 max-w-xl mx-auto my-8 shadow-xl">
                    <span className="text-3xl" aria-hidden="true">⚠️</span>
                    <h3 className="text-lg font-bold text-rose-400">Un problème d'affichage est survenu</h3>
                    <p className="text-slate-300 text-sm leading-relaxed">{error?.message || 'Erreur inconnue.'}</p>
                    <div className="flex gap-3 justify-center pt-2">
                      <button type="button" onClick={reset} className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-white text-xs font-bold transition-colors cursor-pointer">🔄 Réessayer</button>
                      <button type="button" onClick={goHome} className="px-4 py-2 rounded-xl bg-teal-600 hover:bg-teal-700 text-white text-xs font-bold transition-colors cursor-pointer">🏠 Retour à l'accueil</button>
                    </div>
                  </div>
                )}
              >
                {view === 'dashboard' ? (
                  <Dashboard onSelectModule={selectModule} completedIds={progress.completedIds} />
                ) : (
                  <LessonCanvas
                    module={selectedModule}
                    lessonIndex={lessonIndex}
                    onSelectLesson={selectLesson}
                    lessonProgress={progress.lessons}
                    onLessonProgress={updateLessonProgress}
                  />
                )}
              </ErrorBoundary>
            </div>
          </div>
        </main>
      </div>

      {/* Mobile bottom navigation */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-slate-900/95 border-t border-slate-800/80 backdrop-blur-md px-2 py-1.5 flex justify-around items-center" aria-label="Navigation principale">
        <button type="button" onClick={goHome} className={navButton(view === 'dashboard' && !mobileMenu && !showSciCalc && !showMobileGlossary)}>
          <span className="text-base" aria-hidden="true">🏠</span>
          <span className="text-[10px] mt-0.5">Accueil</span>
        </button>
        <button type="button" onClick={openLessonView} className={navButton(view === 'lesson' && !mobileMenu && !showSciCalc && !showMobileGlossary)}>
          <span className="text-base" aria-hidden="true">📚</span>
          <span className="text-[10px] mt-0.5">Cours</span>
        </button>
        <button type="button" onClick={() => { setMobileMenu(true); setShowMobileGlossary(false); setShowSciCalc(false); }} className={navButton(mobileMenu)}>
          <span className="text-base" aria-hidden="true">🗂️</span>
          <span className="text-[10px] mt-0.5">{totalCount} modules</span>
        </button>
        <button type="button" onClick={() => { setShowSciCalc(true); setMobileMenu(false); setShowMobileGlossary(false); }} className={navButton(showSciCalc)}>
          <span className="text-base" aria-hidden="true">🧮</span>
          <span className="text-[10px] mt-0.5">Calculatrice</span>
        </button>
        <button type="button" onClick={() => { setShowMobileGlossary(true); setMobileMenu(false); setShowSciCalc(false); }} className={navButton(showMobileGlossary)}>
          <span className="text-base" aria-hidden="true">🔍</span>
          <span className="text-[10px] mt-0.5">Glossaire</span>
        </button>
      </nav>
    </div>
  );
}
