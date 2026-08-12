/**
 * GceaLogoSvg — Logo officiel vectoriel de Global Civil Engineering Academy
 *
 * Pont à haubans stylisé combiné au sigle GCEA.
 * Utilisable comme composant React inline ou export statique.
 *
 * Props :
 *   - size   : Taille en px (défaut 48)
 *   - isDark : true = couleurs mode sombre, false = mode clair
 *   - className : Classes CSS additionnelles
 *   - showText : Affiche le sigle "GCEA" sous le pont (défaut false)
 */
export default function GceaLogoSvg({ size = 48, isDark = true, className = '', showText = false }) {
  const w = size;
  const h = showText ? size * 1.35 : size;

  // Palette
  const cableColor = isDark ? '#60a5fa' : '#2563eb';     // Bleu haubans
  const deckColor = isDark ? '#e2e8f0' : '#1e293b';      // Tablier
  const pylonColor = isDark ? '#f8fafc' : '#0f172a';      // Pylônes
  const pylonAccent = isDark ? '#38bdf8' : '#0284c7';     // Accent pylône
  const waterColor = isDark ? '#1e40af' : '#93c5fd';      // Eau
  const textColor = isDark ? '#f1f5f9' : '#0f172a';       // Texte GCEA
  const glowColor = isDark ? 'rgba(96,165,250,0.35)' : 'rgba(37,99,235,0.2)';

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 120 120"
      width={w}
      height={h}
      className={className}
      role="img"
      aria-label="Logo Global Civil Engineering Academy — Pont à Haubans"
    >
      <defs>
        {/* Dégradé ciel */}
        <linearGradient id="gcea-sky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={isDark ? '#0f172a' : '#e0f2fe'} />
          <stop offset="100%" stopColor={isDark ? '#1e293b' : '#f0f9ff'} />
        </linearGradient>

        {/* Dégradé eau */}
        <linearGradient id="gcea-water" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={waterColor} stopOpacity="0.6" />
          <stop offset="100%" stopColor={waterColor} stopOpacity="0.15" />
        </linearGradient>

        {/* Lueur du pylône */}
        <filter id="gcea-glow" x="-40%" y="-40%" width="180%" height="180%">
          <feGaussianBlur stdDeviation="2.5" result="blur" />
          <feFlood floodColor={glowColor} result="color" />
          <feComposite in="color" in2="blur" operator="in" />
          <feMerge>
            <feMergeNode />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>

        {/* Dégradé pylône */}
        <linearGradient id="gcea-pylon-grad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={pylonAccent} />
          <stop offset="60%" stopColor={pylonColor} />
          <stop offset="100%" stopColor={pylonColor} />
        </linearGradient>
      </defs>

      {/* Fond circulaire */}
      <circle cx="60" cy="60" r="58" fill="url(#gcea-sky)" stroke={cableColor} strokeWidth="1.5" strokeOpacity="0.4" />

      {/* Reflet d'eau */}
      <ellipse cx="60" cy="82" rx="50" ry="18" fill="url(#gcea-water)" />

      {/* ── Pylône gauche ── */}
      <g filter="url(#gcea-glow)">
        <rect x="35" y="32" width="4.5" height="42" rx="1.2" fill="url(#gcea-pylon-grad)" />
        {/* Sommet triangulaire */}
        <polygon points="37.25,26 33,35 41.5,35" fill={pylonAccent} />
      </g>

      {/* ── Pylône droit ── */}
      <g filter="url(#gcea-glow)">
        <rect x="80.5" y="32" width="4.5" height="42" rx="1.2" fill="url(#gcea-pylon-grad)" />
        {/* Sommet triangulaire */}
        <polygon points="82.75,26 78.5,35 87,35" fill={pylonAccent} />
      </g>

      {/* ── Haubans gauches (éventail) ── */}
      <g stroke={cableColor} strokeWidth="0.8" strokeLinecap="round" opacity="0.85">
        <line x1="37.25" y1="28" x2="14" y2="68" />
        <line x1="37.25" y1="28" x2="20" y2="68" />
        <line x1="37.25" y1="28" x2="26" y2="68" />
        <line x1="37.25" y1="30" x2="32" y2="68" />
      </g>

      {/* ── Haubans entre pylônes ── */}
      <g stroke={cableColor} strokeWidth="0.7" strokeLinecap="round" opacity="0.6">
        <line x1="37.25" y1="30" x2="50" y2="68" />
        <line x1="37.25" y1="28" x2="55" y2="68" />
        <line x1="82.75" y1="28" x2="65" y2="68" />
        <line x1="82.75" y1="30" x2="70" y2="68" />
      </g>

      {/* ── Haubans droits (éventail) ── */}
      <g stroke={cableColor} strokeWidth="0.8" strokeLinecap="round" opacity="0.85">
        <line x1="82.75" y1="28" x2="106" y2="68" />
        <line x1="82.75" y1="28" x2="100" y2="68" />
        <line x1="82.75" y1="28" x2="94" y2="68" />
        <line x1="82.75" y1="30" x2="88" y2="68" />
      </g>

      {/* ── Tablier du pont ── */}
      <rect x="8" y="67" width="104" height="5" rx="2" fill={deckColor} opacity="0.95" />

      {/* Ligne d'accent centrale du tablier */}
      <line x1="10" y1="69.5" x2="110" y2="69.5" stroke={cableColor} strokeWidth="0.8" opacity="0.5" />

      {/* ── Piles dans l'eau ── */}
      <rect x="36" y="72" width="3" height="12" rx="0.8" fill={deckColor} opacity="0.6" />
      <rect x="81" y="72" width="3" height="12" rx="0.8" fill={deckColor} opacity="0.6" />

      {/* ── Petite ligne de rive ── */}
      <line x1="5" y1="83" x2="115" y2="83" stroke={waterColor} strokeWidth="0.5" opacity="0.3" />

      {/* ── Sigle GCEA (optionnel) ── */}
      {showText && (
        <text
          x="60"
          y="97"
          textAnchor="middle"
          fontFamily="'Outfit', 'Inter', sans-serif"
          fontWeight="800"
          fontSize="13"
          letterSpacing="3"
          fill={textColor}
        >
          GCEA
        </text>
      )}

      {/* ── Micro-étoile de qualité ── */}
      <circle cx="60" cy="12" r="2" fill={pylonAccent} opacity="0.7" />
      <circle cx="60" cy="12" r="4" fill="none" stroke={pylonAccent} strokeWidth="0.5" opacity="0.3" />
    </svg>
  );
}

/**
 * Exporte le SVG statique en string pour génération d'icônes serveur-side.
 * Utilisé par le script `scripts/generate-pwa-icons.js`.
 */
export function getLogoSvgString(size = 512, isDark = true) {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" width="${size}" height="${size}">
  <defs>
    <linearGradient id="sky" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="${isDark ? '#0f172a' : '#e0f2fe'}"/>
      <stop offset="100%" stop-color="${isDark ? '#1e293b' : '#f0f9ff'}"/>
    </linearGradient>
    <linearGradient id="water" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="${isDark ? '#1e40af' : '#93c5fd'}" stop-opacity="0.6"/>
      <stop offset="100%" stop-color="${isDark ? '#1e40af' : '#93c5fd'}" stop-opacity="0.15"/>
    </linearGradient>
    <linearGradient id="pylon" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="${isDark ? '#38bdf8' : '#0284c7'}"/>
      <stop offset="60%" stop-color="${isDark ? '#f8fafc' : '#0f172a'}"/>
    </linearGradient>
  </defs>
  <circle cx="60" cy="60" r="58" fill="url(#sky)" stroke="${isDark ? '#60a5fa' : '#2563eb'}" stroke-width="1.5" stroke-opacity="0.4"/>
  <ellipse cx="60" cy="82" rx="50" ry="18" fill="url(#water)"/>
  <rect x="35" y="32" width="4.5" height="42" rx="1.2" fill="url(#pylon)"/>
  <polygon points="37.25,26 33,35 41.5,35" fill="${isDark ? '#38bdf8' : '#0284c7'}"/>
  <rect x="80.5" y="32" width="4.5" height="42" rx="1.2" fill="url(#pylon)"/>
  <polygon points="82.75,26 78.5,35 87,35" fill="${isDark ? '#38bdf8' : '#0284c7'}"/>
  <g stroke="${isDark ? '#60a5fa' : '#2563eb'}" stroke-width="0.8" stroke-linecap="round" opacity="0.85">
    <line x1="37.25" y1="28" x2="14" y2="68"/><line x1="37.25" y1="28" x2="20" y2="68"/>
    <line x1="37.25" y1="28" x2="26" y2="68"/><line x1="37.25" y1="30" x2="32" y2="68"/>
  </g>
  <g stroke="${isDark ? '#60a5fa' : '#2563eb'}" stroke-width="0.7" stroke-linecap="round" opacity="0.6">
    <line x1="37.25" y1="30" x2="50" y2="68"/><line x1="37.25" y1="28" x2="55" y2="68"/>
    <line x1="82.75" y1="28" x2="65" y2="68"/><line x1="82.75" y1="30" x2="70" y2="68"/>
  </g>
  <g stroke="${isDark ? '#60a5fa' : '#2563eb'}" stroke-width="0.8" stroke-linecap="round" opacity="0.85">
    <line x1="82.75" y1="28" x2="106" y2="68"/><line x1="82.75" y1="28" x2="100" y2="68"/>
    <line x1="82.75" y1="28" x2="94" y2="68"/><line x1="82.75" y1="30" x2="88" y2="68"/>
  </g>
  <rect x="8" y="67" width="104" height="5" rx="2" fill="${isDark ? '#e2e8f0' : '#1e293b'}" opacity="0.95"/>
  <line x1="10" y1="69.5" x2="110" y2="69.5" stroke="${isDark ? '#60a5fa' : '#2563eb'}" stroke-width="0.8" opacity="0.5"/>
  <rect x="36" y="72" width="3" height="12" rx="0.8" fill="${isDark ? '#e2e8f0' : '#1e293b'}" opacity="0.6"/>
  <rect x="81" y="72" width="3" height="12" rx="0.8" fill="${isDark ? '#e2e8f0' : '#1e293b'}" opacity="0.6"/>
  <text x="60" y="97" text-anchor="middle" font-family="sans-serif" font-weight="800" font-size="13" letter-spacing="3" fill="${isDark ? '#f1f5f9' : '#0f172a'}">GCEA</text>
  <circle cx="60" cy="12" r="2" fill="${isDark ? '#38bdf8' : '#0284c7'}" opacity="0.7"/>
</svg>`;
}
