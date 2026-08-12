/**
 * generate-pwa-icons.js
 * 
 * Script utilitaire pour générer les icônes PWA de GCEA à partir du logo SVG.
 * 
 * Prérequis : Node.js 18+ (utilise les API natives, pas de dépendance externe).
 * 
 * Usage :
 *   node scripts/generate-pwa-icons.js
 * 
 * Les icônes sont déjà générées et présentes dans public/icons/.
 * Ce script documente la procédure pour les régénérer si besoin.
 * 
 * Pour une régénération automatique avec redimensionnement précis,
 * installez sharp : npm i -D sharp, puis exécutez ce script.
 */

import { readFileSync, writeFileSync, mkdirSync, existsSync, copyFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const ROOT = join(__dirname, '..');
const ICONS_DIR = join(ROOT, 'public', 'icons');

// Tailles requises par le manifest.json
const SIZES = [72, 96, 128, 144, 152, 192, 384, 512];

// SVG source du logo GCEA (version statique dark mode)
const LOGO_SVG = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" width="512" height="512">
  <defs>
    <linearGradient id="sky" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#0f172a"/>
      <stop offset="100%" stop-color="#1e293b"/>
    </linearGradient>
    <linearGradient id="water" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#1e40af" stop-opacity="0.6"/>
      <stop offset="100%" stop-color="#1e40af" stop-opacity="0.15"/>
    </linearGradient>
    <linearGradient id="pylon" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#38bdf8"/>
      <stop offset="60%" stop-color="#f8fafc"/>
    </linearGradient>
  </defs>
  <rect width="120" height="120" fill="#0f172a" rx="12"/>
  <circle cx="60" cy="56" r="48" fill="url(#sky)" stroke="#60a5fa" stroke-width="1" stroke-opacity="0.3"/>
  <ellipse cx="60" cy="74" rx="42" ry="14" fill="url(#water)"/>
  <rect x="38" y="32" width="3.5" height="36" rx="1" fill="url(#pylon)"/>
  <polygon points="39.75,27 36,33 43.5,33" fill="#38bdf8"/>
  <rect x="78.5" y="32" width="3.5" height="36" rx="1" fill="url(#pylon)"/>
  <polygon points="80.25,27 76.5,33 84,33" fill="#38bdf8"/>
  <g stroke="#60a5fa" stroke-width="0.7" stroke-linecap="round" opacity="0.8">
    <line x1="39.75" y1="29" x2="18" y2="62"/>
    <line x1="39.75" y1="29" x2="24" y2="62"/>
    <line x1="39.75" y1="29" x2="30" y2="62"/>
    <line x1="39.75" y1="30" x2="35" y2="62"/>
  </g>
  <g stroke="#60a5fa" stroke-width="0.6" stroke-linecap="round" opacity="0.55">
    <line x1="39.75" y1="30" x2="50" y2="62"/>
    <line x1="39.75" y1="29" x2="55" y2="62"/>
    <line x1="80.25" y1="29" x2="65" y2="62"/>
    <line x1="80.25" y1="30" x2="70" y2="62"/>
  </g>
  <g stroke="#60a5fa" stroke-width="0.7" stroke-linecap="round" opacity="0.8">
    <line x1="80.25" y1="29" x2="102" y2="62"/>
    <line x1="80.25" y1="29" x2="96" y2="62"/>
    <line x1="80.25" y1="29" x2="90" y2="62"/>
    <line x1="80.25" y1="30" x2="85" y2="62"/>
  </g>
  <rect x="12" y="61" width="96" height="4" rx="1.5" fill="#e2e8f0" opacity="0.9"/>
  <line x1="14" y1="63" x2="106" y2="63" stroke="#60a5fa" stroke-width="0.6" opacity="0.4"/>
  <rect x="39" y="65" width="2.5" height="10" rx="0.6" fill="#e2e8f0" opacity="0.5"/>
  <rect x="79" y="65" width="2.5" height="10" rx="0.6" fill="#e2e8f0" opacity="0.5"/>
  <text x="60" y="100" text-anchor="middle" font-family="Arial, Helvetica, sans-serif" font-weight="900" font-size="14" letter-spacing="4" fill="#f1f5f9">GCEA</text>
  <circle cx="60" cy="13" r="1.5" fill="#38bdf8" opacity="0.7"/>
</svg>`;

async function main() {
  // Créer le répertoire icons s'il n'existe pas
  if (!existsSync(ICONS_DIR)) {
    mkdirSync(ICONS_DIR, { recursive: true });
    console.log('📁 Créé : public/icons/');
  }

  // Sauvegarder le SVG source
  const svgPath = join(ICONS_DIR, 'logo-source.svg');
  writeFileSync(svgPath, LOGO_SVG, 'utf-8');
  console.log('✅ Sauvegardé : public/icons/logo-source.svg');

  // Tenter de redimensionner avec sharp si disponible
  try {
    const sharp = (await import('sharp')).default;
    console.log('🔧 sharp détecté — Génération des PNG redimensionnés...');

    const svgBuffer = Buffer.from(LOGO_SVG);

    for (const size of SIZES) {
      const outputPath = join(ICONS_DIR, `icon-${size}x${size}.png`);
      await sharp(svgBuffer)
        .resize(size, size)
        .png({ quality: 95 })
        .toFile(outputPath);
      console.log(`  ✅ icon-${size}x${size}.png`);
    }

    // Apple touch icon (180x180 standard)
    const applePath = join(ICONS_DIR, 'apple-touch-icon.png');
    await sharp(svgBuffer)
      .resize(180, 180)
      .png({ quality: 95 })
      .toFile(applePath);
    console.log('  ✅ apple-touch-icon.png (180x180)');

    console.log(`\n🎉 ${SIZES.length + 1} icônes PNG générées avec succès !`);
  } catch {
    console.log('⚠️  sharp non installé — Les PNG existants dans public/icons/ seront utilisés.');
    console.log('   Pour générer toutes les tailles, installez sharp :');
    console.log('   npm i -D sharp && node scripts/generate-pwa-icons.js');
    console.log('\n📋 Icônes requises par manifest.json :');
    SIZES.forEach((size) => {
      const exists = existsSync(join(ICONS_DIR, `icon-${size}x${size}.png`));
      console.log(`   ${exists ? '✅' : '❌'} icon-${size}x${size}.png`);
    });
    const appleExists = existsSync(join(ICONS_DIR, 'apple-touch-icon.png'));
    console.log(`   ${appleExists ? '✅' : '❌'} apple-touch-icon.png`);
  }
}

main().catch(console.error);
