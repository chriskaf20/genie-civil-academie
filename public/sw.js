// ── GCEA Service Worker v1.0 ────────────────────────────────────────────────
// Stratégie : Cache-First pour les assets statiques (JS/CSS/fonts/images)
//             Stale-While-Revalidate pour les pages HTML et données JSON
// ─────────────────────────────────────────────────────────────────────────────

const CACHE_NAME = 'gcea-cache-v1';
const DATA_CACHE_NAME = 'gcea-data-v1';

// Assets qui sont mis en cache lors de l'installation (App Shell)
const APP_SHELL_URLS = [
  '/',
  '/index.html',
  '/manifest.json',
];

// ── Événement INSTALL ────────────────────────────────────────────────────────
self.addEventListener('install', (event) => {
  console.log('[GCEA SW] Installing Service Worker v1.0...');
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log('[GCEA SW] Pre-caching App Shell');
      return cache.addAll(APP_SHELL_URLS);
    }).then(() => {
      // Activer immédiatement sans attendre la fermeture des onglets
      return self.skipWaiting();
    })
  );
});

// ── Événement ACTIVATE ───────────────────────────────────────────────────────
self.addEventListener('activate', (event) => {
  console.log('[GCEA SW] Activating Service Worker v1.0...');
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames
          .filter((name) => name !== CACHE_NAME && name !== DATA_CACHE_NAME)
          .map((name) => {
            console.log(`[GCEA SW] Deleting stale cache: ${name}`);
            return caches.delete(name);
          })
      );
    }).then(() => {
      // Prendre le contrôle de toutes les pages immédiatement
      return self.clients.claim();
    })
  );
});

// ── Événement FETCH ──────────────────────────────────────────────────────────
self.addEventListener('fetch', (event) => {
  const { request } = event;
  const url = new URL(request.url);

  // Ignorer les requêtes non-GET et les extensions navigateur
  if (request.method !== 'GET') return;
  if (!url.protocol.startsWith('http')) return;
  if (url.pathname.startsWith('/api/')) return;

  // ── Stratégie Cache-First pour les assets statiques ──────────────────────
  // (JS, CSS, fontes KaTeX, images, woff2...)
  if (isStaticAsset(url)) {
    event.respondWith(cacheFirst(request));
    return;
  }

  // ── Stratégie Stale-While-Revalidate pour HTML et navigation ─────────────
  // (index.html, pages SPA)
  if (request.mode === 'navigate' || url.pathname.endsWith('.html')) {
    event.respondWith(staleWhileRevalidate(request, CACHE_NAME));
    return;
  }

  // ── Stratégie Network-First pour tout le reste ────────────────────────────
  event.respondWith(networkFirst(request));
});

// ── Helpers de stratégie ─────────────────────────────────────────────────────

/**
 * Cache-First : Retourne depuis le cache si disponible, sinon va chercher en réseau
 * et met à jour le cache. Idéal pour les assets Vite (hash dans le nom de fichier).
 */
async function cacheFirst(request) {
  const cachedResponse = await caches.match(request);
  if (cachedResponse) {
    return cachedResponse;
  }
  try {
    const networkResponse = await fetch(request);
    if (networkResponse.ok) {
      const cache = await caches.open(CACHE_NAME);
      cache.put(request, networkResponse.clone());
    }
    return networkResponse;
  } catch {
    // Offline : retourner une réponse vide ou une page offline si disponible
    return new Response('', { status: 408, statusText: 'Network unavailable (GCEA offline)' });
  }
}

/**
 * Stale-While-Revalidate : Retourne depuis le cache immédiatement (stale),
 * puis met à jour le cache en arrière-plan (revalidate).
 */
async function staleWhileRevalidate(request, cacheName) {
  const cache = await caches.open(cacheName);
  const cachedResponse = await cache.match(request);

  // Lancer la requête réseau en arrière-plan
  const networkFetch = fetch(request).then((networkResponse) => {
    if (networkResponse.ok) {
      cache.put(request, networkResponse.clone());
    }
    return networkResponse;
  }).catch(() => cachedResponse); // Si offline, retourner le cache

  // Retourner immédiatement le cache si disponible, sinon attendre le réseau
  return cachedResponse || networkFetch;
}

/**
 * Network-First : Essaie le réseau en priorité, cache en fallback.
 */
async function networkFirst(request) {
  try {
    const networkResponse = await fetch(request);
    if (networkResponse.ok) {
      const cache = await caches.open(CACHE_NAME);
      cache.put(request, networkResponse.clone());
    }
    return networkResponse;
  } catch {
    const cachedResponse = await caches.match(request);
    if (cachedResponse) return cachedResponse;
    return new Response(
      JSON.stringify({ error: 'Hors-ligne — Données non disponibles' }),
      { status: 503, headers: { 'Content-Type': 'application/json' } }
    );
  }
}

/**
 * Détecter si l'URL est un asset statique (JS, CSS, woff2, png, svg...)
 */
function isStaticAsset(url) {
  const staticExtensions = [
    '.js', '.mjs', '.css', '.woff', '.woff2', '.ttf', '.otf',
    '.png', '.jpg', '.jpeg', '.gif', '.svg', '.webp', '.ico',
    '.json',
  ];
  return staticExtensions.some((ext) => url.pathname.endsWith(ext));
}

// ── Messagerie inter-SW ───────────────────────────────────────────────────────
self.addEventListener('message', (event) => {
  if (event.data?.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
  if (event.data?.type === 'GET_VERSION') {
    event.ports[0].postMessage({ version: CACHE_NAME });
  }
});

console.log('[GCEA SW] Service Worker script loaded — Cache-First / Stale-While-Revalidate');
