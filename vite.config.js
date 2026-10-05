import { createHash } from 'node:crypto';
import { readFileSync, readdirSync, statSync, writeFileSync } from 'node:fs';
import path from 'node:path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

function listFiles(dir, base = dir) {
  return readdirSync(dir).flatMap(name => {
    const full = path.join(dir, name);
    return statSync(full).isDirectory() ? listFiles(full, base) : [path.relative(base, full).split(path.sep).join('/')];
  });
}

/**
 * Writes dist/sw.js from src/pwa/sw.template.js once the build is on disk:
 * precache list = every built file (KaTeX .ttf/.woff fallbacks and screenshots excluded),
 * version = hash of all file contents, so any change ships a new service worker.
 */
function serviceWorker() {
  let root;
  let outDir;
  return {
    name: 'gcea-service-worker',
    apply: 'build',
    configResolved(config) {
      root = config.root;
      outDir = path.resolve(config.root, config.build.outDir);
    },
    closeBundle() {
      const files = listFiles(outDir)
        .filter(f => f !== 'sw.js' && !/\.(map|ttf|woff)$/.test(f) && !f.startsWith('screenshots/'))
        .sort();
      const hash = createHash('sha256');
      files.forEach(f => hash.update(f).update(readFileSync(path.join(outDir, f))));
      const precache = ['/', ...files.filter(f => f !== 'index.html').map(f => `/${f}`)];
      const template = readFileSync(path.join(root, 'src/pwa/sw.template.js'), 'utf8');
      const source = template
        .replace("'__GCEA_VERSION__'", JSON.stringify(hash.digest('hex').slice(0, 12)))
        .replace('__GCEA_PRECACHE__', JSON.stringify(precache, null, 2));
      writeFileSync(path.join(outDir, 'sw.js'), source);
    },
  };
}

// Production pages get a Content-Security-Policy (the dev server needs inline scripts for HMR).
// 'unsafe-inline' styles: KaTeX output carries inline style attributes.
const CSP = [
  "default-src 'self'",
  "script-src 'self'",
  "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
  "font-src 'self' data: https://fonts.gstatic.com",
  "img-src 'self' data:",
  "connect-src 'self' https://fonts.googleapis.com https://fonts.gstatic.com",
  "manifest-src 'self'",
  "worker-src 'self'",
  "object-src 'none'",
  "base-uri 'self'",
  "form-action 'self'",
].join('; ');

function contentSecurityPolicy() {
  return {
    name: 'gcea-csp',
    apply: 'build',
    transformIndexHtml: () => [
      { tag: 'meta', attrs: { 'http-equiv': 'Content-Security-Policy', content: CSP }, injectTo: 'head-prepend' },
    ],
  };
}

export default defineConfig({
  plugins: [react(), contentSecurityPolicy(), serviceWorker()],
  build: {
    rollupOptions: {
      output: {
        // Libraries change rarely: separate chunks stay cached across content updates.
        manualChunks(id) {
          if (id.includes('node_modules/katex')) return 'katex';
          if (id.includes('node_modules/react') || id.includes('node_modules/scheduler')) return 'react';
          return undefined;
        },
      },
    },
  },
});
