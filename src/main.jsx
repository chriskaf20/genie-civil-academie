import React from 'react';
import ReactDOM from 'react-dom/client';
import 'katex/dist/katex.min.css';
import './styles.css';
import App from './App.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(<App />);

// ── Enregistrement du Service Worker PWA ─────────────────────────────────────
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker
      .register('/sw.js', { scope: '/' })
      .then((registration) => {
        console.log('[GCEA] Service Worker enregistré — scope :', registration.scope);

        // Vérifier les mises à jour toutes les 30 minutes en arrière-plan
        setInterval(() => registration.update(), 30 * 60 * 1000);
      })
      .catch((error) => {
        console.warn('[GCEA] Échec de l\'enregistrement du Service Worker :', error);
      });
  });
}
