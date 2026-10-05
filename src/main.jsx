import React from 'react';
import ReactDOM from 'react-dom/client';
import 'katex/dist/katex.min.css';
import './styles.css';
import App from './App.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// ── Service worker (offline mode) ────────────────────────────────────────────
if ('serviceWorker' in navigator) {
  if (import.meta.env.PROD) {
    window.addEventListener('load', () => {
      navigator.serviceWorker
        .register('/sw.js', { scope: '/' })
        .then(registration => {
          // Look for a new version every 30 minutes.
          setInterval(() => registration.update(), 30 * 60 * 1000);
        })
        .catch(error => {
          console.warn('[GCEA] Service worker non enregistré :', error);
        });
    });
  } else {
    // A worker left by a production build would serve stale modules to the dev server.
    navigator.serviceWorker.getRegistrations().then(registrations => {
      registrations.forEach(registration => registration.unregister());
    });
  }
}
