// Theme: white and black, with navy blue as the single brand colour.
// Every cool hue used in the components (teal, cyan, sky, blue, indigo, violet) maps to navy,
// and slate maps to neutral greys, so the whole app follows the palette without per-class edits.
const navy = {
  50: '#f0f4fb',
  100: '#dde6f6',
  200: '#bccdeb',
  300: '#93acdc',
  400: '#6a89c9',
  500: '#3d5fa6',
  600: '#1f3d7a',
  700: '#172f61',
  800: '#11244b',
  900: '#0c1a37',
  950: '#070f22',
};
const neutral = {
  50: '#fafafa',
  100: '#f4f4f5',
  200: '#e4e4e7',
  300: '#d4d4d8',
  400: '#a1a1aa',
  500: '#71717a',
  600: '#52525b',
  700: '#3f3f46',
  750: '#333338',
  800: '#27272a',
  900: '#18181b',
  950: '#0a0a0a',
};

export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: navy[600],
        navy,
        chantier: '#b45309',
        beton: neutral[600],
        surface: neutral[50],
        surface2: neutral[950],
        slate: neutral,
        gray: neutral,
        teal: navy,
        cyan: navy,
        sky: navy,
        blue: navy,
        indigo: navy,
        violet: navy,
        purple: navy,
      },
      // Sizes used by the components that Tailwind 3 does not define by default.
      boxShadow: {
        '2xs': '0 1px rgb(0 0 0 / 0.05)',
        xs: '0 1px 2px 0 rgb(0 0 0 / 0.05)',
      },
      backdropBlur: {
        xs: '2px',
      },
      keyframes: {
        'fade-in': { from: { opacity: '0' }, to: { opacity: '1' } },
        'slide-left': { from: { transform: 'translateX(100%)' }, to: { transform: 'translateX(0)' } },
      },
      animation: {
        'fade-in': 'fade-in 0.2s ease-out',
        'slide-left': 'slide-left 0.25s cubic-bezier(0.4, 0, 0.2, 1)',
      },
    },
  },
  plugins: [],
};
