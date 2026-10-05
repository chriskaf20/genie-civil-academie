import { useEffect, useState } from 'react';

const DISMISS_KEY = 'gcea-pwa-dismissed';

function readDismissed() {
  try { return localStorage.getItem(DISMISS_KEY) === 'true'; } catch { return false; }
}

function writeDismissed() {
  try { localStorage.setItem(DISMISS_KEY, 'true'); } catch { /* storage unavailable */ }
}

/**
 * PwaInstallPrompt — Bannière d'installation PWA pour Global Civil Engineering Academy
 *
 * Comportement :
 * - Capture l'événement natif `beforeinstallprompt` du navigateur.
 * - Affiche une bannière flottante glassmorphism en bas de l'écran.
 * - Propose l'installation avec un seul clic ("Installer l'app").
 * - Se ferme définitivement si l'utilisateur refuse (via localStorage).
 * - Disparaît automatiquement si l'app est déjà installée.
 * - Affiche une bannière de notification de mise à jour si un nouveau SW est détecté.
 */
export default function PwaInstallPrompt({ isDark }) {
  const [installPrompt, setInstallPrompt] = useState(null);
  const [showInstallBanner, setShowInstallBanner] = useState(false);
  const [showUpdateBanner, setShowUpdateBanner] = useState(false);
  const [isInstalled, setIsInstalled] = useState(false);
  const [newWorker, setNewWorker] = useState(null);

  // ── Capturer l'événement beforeinstallprompt ──────────────────────────────
  useEffect(() => {
    // Vérifier si l'app est déjà installée
    if (window.matchMedia('(display-mode: standalone)').matches) {
      setIsInstalled(true);
      return;
    }

    // Vérifier si l'utilisateur a déjà refusé
    if (readDismissed()) return undefined;

    let timer;
    const handleBeforeInstallPrompt = (e) => {
      e.preventDefault();
      setInstallPrompt(e);
      // Délai de 3 secondes avant d'afficher la bannière pour ne pas interrompre le chargement
      timer = setTimeout(() => setShowInstallBanner(true), 3000);
    };
    const handleInstalled = () => {
      setIsInstalled(true);
      setShowInstallBanner(false);
    };

    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
    window.addEventListener('appinstalled', handleInstalled);
    return () => {
      clearTimeout(timer);
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
      window.removeEventListener('appinstalled', handleInstalled);
    };
  }, []);

  // ── Détecter les mises à jour du Service Worker (production uniquement) ───
  useEffect(() => {
    if (!import.meta.env.PROD || !('serviceWorker' in navigator)) return undefined;

    // Recharger une seule fois quand la nouvelle version prend le contrôle —
    // mais pas lors de la toute première installation.
    const hadController = Boolean(navigator.serviceWorker.controller);
    let reloading = false;
    const handleControllerChange = () => {
      if (!hadController || reloading) return;
      reloading = true;
      window.location.reload();
    };
    navigator.serviceWorker.addEventListener('controllerchange', handleControllerChange);

    navigator.serviceWorker.ready.then((registration) => {
      const offerUpdate = (worker) => {
        setNewWorker(worker);
        setShowUpdateBanner(true);
      };
      if (registration.waiting && navigator.serviceWorker.controller) offerUpdate(registration.waiting);
      registration.addEventListener('updatefound', () => {
        const installingWorker = registration.installing;
        if (!installingWorker) return;
        installingWorker.addEventListener('statechange', () => {
          if (installingWorker.state === 'installed' && navigator.serviceWorker.controller) {
            offerUpdate(installingWorker);
          }
        });
      });
    });

    return () => navigator.serviceWorker.removeEventListener('controllerchange', handleControllerChange);
  }, []);

  // ── Gestionnaire d'installation ───────────────────────────────────────────
  const handleInstall = async () => {
    if (!installPrompt) return;
    setShowInstallBanner(false);
    const { outcome } = await installPrompt.prompt();
    if (outcome === 'accepted') {
      setInstallPrompt(null);
    }
  };

  // ── Refuser l'installation définitivement ─────────────────────────────────
  const handleDismiss = () => {
    setShowInstallBanner(false);
    writeDismissed();
  };

  // ── Appliquer la mise à jour : la page se recharge sur `controllerchange` ──
  const handleUpdate = () => {
    setShowUpdateBanner(false);
    if (newWorker) newWorker.postMessage({ type: 'SKIP_WAITING' });
    else window.location.reload();
  };

  // Ne rien afficher si déjà installé
  if (isInstalled) return null;

  // ── Styles communs ────────────────────────────────────────────────────────
  const bannerBase = `
    fixed bottom-20 md:bottom-6 left-1/2 -translate-x-1/2
    w-[calc(100%-2rem)] max-w-md
    z-50 flex items-center gap-3 px-4 py-3
    rounded-2xl shadow-2xl border backdrop-blur-xl
    transition-all duration-500 ease-out
  `;

  const darkBanner = 'bg-slate-900/90 border-slate-700/60 text-white';
  const lightBanner = 'bg-white/90 border-slate-200 text-slate-900 shadow-slate-200/60';
  const bannerTheme = isDark ? darkBanner : lightBanner;

  return (
    <>
      {/* ── Bannière d'Installation ────────────────────────────────────────── */}
      {showInstallBanner && (
        <div
          className={`${bannerBase} ${bannerTheme} animate-slideUp`}
          role="dialog"
          aria-label="Installer l'application GCEA"
        >
          {/* Icône app */}
          <div className="shrink-0 w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center text-xl shadow-lg">
            🏗
          </div>

          {/* Texte */}
          <div className="flex-1 min-w-0">
            <p className={`text-sm font-semibold leading-tight ${isDark ? 'text-white' : 'text-slate-900'}`}>
              Installer GCEA
            </p>
            <p className={`text-xs mt-0.5 leading-tight ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
              Accès hors-ligne · 35 modules · Rapide
            </p>
          </div>

          {/* Boutons */}
          <div className="flex items-center gap-2 shrink-0">
            <button
              id="pwa-install-btn"
              onClick={handleInstall}
              className="px-3 py-1.5 rounded-lg bg-blue-600 hover:bg-blue-500 active:bg-blue-700 text-white text-xs font-semibold transition-colors duration-150 shadow-md shadow-blue-900/30"
            >
              Installer
            </button>
            <button
              id="pwa-dismiss-btn"
              onClick={handleDismiss}
              aria-label="Fermer la bannière d'installation"
              className={`w-6 h-6 flex items-center justify-center rounded-full text-xs transition-colors duration-150
                ${isDark ? 'text-slate-500 hover:text-slate-300 hover:bg-slate-700' : 'text-slate-400 hover:text-slate-600 hover:bg-slate-100'}`}
            >
              ✕
            </button>
          </div>
        </div>
      )}

      {/* ── Bannière de Mise à Jour ────────────────────────────────────────── */}
      {showUpdateBanner && (
        <div
          className={`${bannerBase} ${bannerTheme} animate-slideUp`}
          role="dialog"
          aria-label="Mise à jour disponible"
        >
          {/* Icône update */}
          <div className="shrink-0 w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center text-xl shadow-lg">
            🔄
          </div>

          {/* Texte */}
          <div className="flex-1 min-w-0">
            <p className={`text-sm font-semibold leading-tight ${isDark ? 'text-white' : 'text-slate-900'}`}>
              Mise à jour disponible
            </p>
            <p className={`text-xs mt-0.5 ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
              Nouveaux contenus GCEA disponibles
            </p>
          </div>

          {/* Boutons */}
          <div className="flex items-center gap-2 shrink-0">
            <button
              id="pwa-update-btn"
              onClick={handleUpdate}
              className="px-3 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 active:bg-emerald-700 text-white text-xs font-semibold transition-colors duration-150 shadow-md shadow-emerald-900/30"
            >
              Mettre à jour
            </button>
            <button
              id="pwa-update-dismiss-btn"
              onClick={() => setShowUpdateBanner(false)}
              aria-label="Ignorer la mise à jour"
              className={`w-6 h-6 flex items-center justify-center rounded-full text-xs transition-colors duration-150
                ${isDark ? 'text-slate-500 hover:text-slate-300 hover:bg-slate-700' : 'text-slate-400 hover:text-slate-600 hover:bg-slate-100'}`}
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </>
  );
}
