# Global Civil Engineering Academy (GCEA)

A French-language learning app for civil engineering. It has 35 modules and 45 interactive lessons, each taught in 23 steps (theory, formulas with explained variables, worked examples, exercises, quiz, exam and interview questions, a practical case and self-assessment). It installs as a Progressive Web App (PWA) and works offline.

It is a static single-page app built with React 18, Vite 6, Tailwind CSS 3 and KaTeX. There is no backend: progress is kept in the browser's `localStorage`.

## Getting started

Requirements: Node.js 18 or later (CI uses Node 20).

```bash
npm install
npm run dev        # development server at http://localhost:5173
npm run build      # production build in dist/
npm run preview    # serve dist/ at http://localhost:4173
```

The service worker is only registered in production builds. Use `npm run build && npm run preview` to test offline mode and installation.

## Scripts

| Script | What it does |
| --- | --- |
| `npm run dev` | Vite development server with hot reload. |
| `npm run build` | Production build. Also writes `dist/sw.js` (service worker with a content-hash version) and adds the Content Security Policy to `dist/index.html`. |
| `npm run preview` | Serves the production build locally. |
| `npm test` | Unit tests for the calculator and LaTeX helpers, then the content validator (summary only). |
| `npm run validate` | Content validator with the full report. Exits with code 1 if any lesson has an error. |
| `npm run icons` | Regenerates the PWA icons in `public/icons/` from `assets/brand/gcea-logo-1024.jpg`. Windows only (PowerShell + System.Drawing). |

Run `npm test` before every commit that touches lesson content.

## Project structure

```
index.html                 HTML entry (fonts, manifest, favicon)
vite.config.js             React plugin, CSP injection, service worker generation, chunking
public/
  manifest.json            PWA manifest (icons, screenshots, shortcuts)
  icons/                   Generated PNG icons (any + maskable)
  screenshots/             Install screenshots referenced by the manifest
assets/brand/              Master logo used to generate the icons
scripts/
  validate-content.mjs     Lesson validator (schema, KaTeX rendering, authoring mistakes)
  test-units.mjs           Unit tests
  generate-pwa-icons.ps1   Icon generator
src/
  main.jsx                 Entry point; registers the service worker in production
  App.jsx                  Layout, navigation (?module=…&lesson=…), progress storage
  components/              UI: dashboard, module list, lesson canvas, formula explainer,
                           diagrams, calculators, glossary, PWA prompt, error boundary
  data/
    modules.js             The 35-module catalog
    lesson_registry.js     Lessons of each module, loaded on demand
    lesson_*.js            Lesson content (one chunk per file)
    formula_dictionary.js  Variable dictionary and domain overrides
    glossary.js, tech_terms.js
  hooks/useLesson.js       Lazy lesson loading with retry
  pwa/sw.template.js       Service worker template (filled in at build time)
  utils/latex.js           KaTeX rendering, sanitising and rich-text tokenizer
  utils/calculator.js      Safe expression evaluator for the scientific calculator
```

## Lesson content

### Adding a lesson

1. Create `src/data/lesson_<key>.js` exporting the lesson object (copy an existing lesson as a template).
2. Register it in `src/data/lesson_registry.js` under its module id:
   ```js
   lesson('<key>', '<exact lesson title>', '<domain>', () => import('./lesson_<key>.js').then(m => m.lesson_<key>)),
   ```
   The title must match the lesson's own `title`. The `domain` sets the formula dictionary context and the structural sketches.
3. Run `npm run validate` and fix everything it reports.

### Structure

A lesson has metadata (`moduleId`, `slug`, `lessonIndex`, `title`, `subtitle`, `level`, `duration`, `diagramType`, `tags`), a `quickQuiz` shown in the side panel, and 23 `steps` in this order:

`definition`, `importance`, `applications`, `theory`, `formulas`, `stepbystep`, `units`, `hypotheses`, `examples_simple`, `examples_real`, `interactive_diagram`, `mistakes`, `tips`, `norms`, `exercises`, `corrections`, `quiz`, `exam`, `interview`, `practical`, `summary`, `keypoints`, `self_assessment`.

`scripts/validate-content.mjs` (`STEP_RULES`) lists the fields each step type must have. They match what `src/components/LessonCanvas.jsx` renders.

Each formula has a `name`, a `latex` expression, a `description` and, when it relates quantities, a `variables` list:

```js
{
  name: "Résistance de calcul de l'acier",
  latex: "f_{yd} = \\frac{f_{yk}}{\\gamma_s}",
  description: "…",
  variables: [
    { symbol: "f_{yd}", name: "Limite d'élasticité de calcul", unit: "MPa", role: "434,8 MPa pour un acier B500." },
    { symbol: "\\gamma_s", name: "Coefficient partiel de l'acier", unit: "-", role: "1,15 en situation durable." },
  ],
}
```

Formulas that only state values (code formats, thresholds) have no `variables`, and the "Voir les variables" button is hidden for them.

### Writing LaTeX

- In JavaScript strings, every LaTeX backslash is doubled: `"\\frac{a}{b}"`. A single backslash before `t`, `n`, `r`, `b` or `f` silently becomes a control character (`"\frac"` turns into a form feed followed by "rac").
- Put words inside math in `\\text{…}`, e.g. `C_{\\text{béton}}`. Escape `%` as `\\%`, because KaTeX treats `%` as a comment even inside `\\text{}`.
- In text fields (content, examples, mistakes…), write inline math as `$…$` and display math as `$$…$$`. `**bold**`, `*italic*` and `` `code` `` also work.
- Plain-text units such as `kN·m` are wrapped in `\text{}` automatically. Units that contain `\`, `^`, `_` or braces are treated as LaTeX.
- `\\euro` is available as a macro for €.

### What the validator checks

- Every module in the catalog has at least one lesson, and every lesson file is registered.
- Each step has the fields its renderer needs, and quiz answers point to existing options.
- Every math expression, formula symbol and unit renders with the same KaTeX settings as the app.
- Common authoring mistakes: control characters from single backslashes, LaTeX commands outside `$…$`, unmatched `$`, unescaped `%`.
- Source problems, such as duplicate object keys.

## PWA and offline use

- When you run `npm run build`, `src/pwa/sw.template.js` is filled in with a version hash and the list of files in `dist/`, then written to `dist/sw.js`. All lesson chunks are precached, so every lesson works offline after the first visit.
- Navigation is network-first with an offline fallback. Built assets are cache-first. Google Fonts use stale-while-revalidate. Old caches are deleted when a new version activates.
- When a new version is available, the app shows an update banner, and the page reloads once the new service worker takes control.
- To change the icons, replace `assets/brand/gcea-logo-1024.jpg` and run `npm run icons`.

## Deployment

`dist/` is a set of static files that any static host can serve. Notes:

- **Serve the app at the domain root.** The service worker (`/sw.js`), the manifest and the shortcuts use absolute paths. To host under a sub-path, set Vite's `base` and update those paths.
- **No rewrite rules are needed.** Navigation uses query parameters (`/?module=beton-arme&lesson=1`), not routes.
- **Content Security Policy.** The build adds a CSP `<meta>` tag. It allows the app's own files plus Google Fonts, and inline styles because KaTeX needs them. A `<meta>` tag cannot set `frame-ancestors`, so set that, `X-Content-Type-Options: nosniff` and similar headers on the host if you need them.
- **Cache headers.** Don't put long-term cache headers on `sw.js`, `index.html` or `manifest.json`. Files in `assets/` have content hashes and can be cached for a long time.

## Data stored in the browser

| Key | Content |
| --- | --- |
| `gcea-v2-progress` | Current module, explored modules, theme, and per-lesson progress (best quiz score, self-assessment checklist). |
| `gcea-pwa-dismissed` | Whether the install prompt was dismissed. |

Clearing site data resets progress. Nothing is sent to a server.

## Known issues

- `npm audit` reports 5 high-severity advisories. They are all one issue in `braces`, reached through Tailwind CSS 3's build-time file watching and globbing (`chokidar`, `micromatch`, `fast-glob`). This code only runs on the developer's machine during builds; nothing from it ships to users. The fix is the major upgrade to Tailwind CSS 4, which needs a configuration migration.
- `npm run icons` needs Windows. On other systems, regenerate the icons with any image tool using the same sizes as in `public/manifest.json`.
