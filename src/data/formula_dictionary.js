/**
 * formula_dictionary.js — Référentiel Universel des Symboles du Génie Civil
 * Académie Mondiale de Génie Civil (GCEA).
 *
 * Décompose et contextualise chaque symbole selon les 6 grands domaines :
 * - maths : Géométrie, trigonométrie, calcul vectoriel, surfaces & volumes
 * - physique : Mécanique générale, thermodynamique, thermique du bâtiment
 * - beton_arme : Eurocode 2, sections, armatures, états limites ELU / ELS
 * - rdm : Résistance des matériaux, flexion, cisaillement, déformations
 * - hydraulique : Écoulements en charge & à surface libre, pertes de charge, débits
 * - geotechnique : Mécanique des sols, fondations superficielles & profondes, soutènements
 */

// ── 1. Dictionnaire Universel de Base (Trigonométrie & Grandeurs Fondamentales) ─
export const VARIABLE_DICTIONARY = {
  // ── Géométrie & Mathématiques Fondamentales ──────────────────────────────
  'H': {
    symbol: 'H',
    name: "Hypoténuse (côté opposé à l'angle droit)",
    unit: '\\text{m ou mm}',
    role: "Le plus long côté du triangle rectangle reliant les extrémités de la base et de la hauteur : $H = \\sqrt{\\text{adj}^2 + \\text{opp}^2}$.",
    category: 'Trigonométrie / Maths'
  },
  '\\text{opp}': {
    symbol: '\\text{opp}',
    name: 'Côté Opposé',
    unit: '\\text{m ou mm}',
    role: "Longueur du côté situé directement en face de l'angle aigu $\\theta$ ($\\text{opp} = H \\cdot \\sin\\theta$).",
    category: 'Trigonométrie'
  },
  '\\text{adj}': {
    symbol: '\\text{adj}',
    name: 'Côté Adjacent',
    unit: '\\text{m ou mm}',
    role: "Longueur du côté formant l'angle $\\theta$ avec l'hypoténuse ($\\text{adj} = H \\cdot \\cos\\theta$).",
    category: 'Trigonométrie'
  },
  '\\theta': {
    symbol: '\\theta',
    name: "Angle d'inclinaison",
    unit: '° \\text{ (degrés)}',
    role: "Angle aigu définissant la pente d'un versant ou d'un talus : $p(\\%) = \\tan(\\theta) \\times 100$.",
    category: 'Trigonométrie'
  },
  'p': {
    symbol: 'p',
    name: 'Pente en pourcentage',
    unit: '\\%',
    role: "Rapport dénivelée sur distance horizontale : $p = \\frac{\\text{opp}}{\\text{adj}} \\times 100 = \\tan(\\theta) \\times 100$.",
    category: 'Topographie / Tracé'
  },

  // ── Sollicitations & Moments ─────────────────────────────────────────────
  'M': {
    symbol: 'M',
    name: 'Moment fléchissant',
    unit: '\\text{kN}\\cdot\\text{m}',
    role: 'Effort interne qui tend à courber la poutre sous les charges.',
    category: 'Flexion'
  },
  'M_{Ed}': {
    symbol: 'M_{Ed}',
    name: 'Moment fléchissant sollicitant de calcul (ELU)',
    unit: '\\text{kN}\\cdot\\text{m}',
    role: "L'effort total de flexion appliqué à l'ouvrage avec les coefficients de sécurité (1,35G + 1,50Q).",
    category: 'Béton Armé / Eurocodes'
  },
  'M_{Rd}': {
    symbol: 'M_{Rd}',
    name: 'Moment fléchissant résistant de calcul',
    unit: '\\text{kN}\\cdot\\text{m}',
    role: 'Le moment maximal que la section peut supporter avant rupture. La sécurité impose M_{Ed} ≤ M_{Rd}.',
    category: 'Béton Armé / Eurocodes'
  },
  'M_{el,Rd}': {
    symbol: 'M_{el,Rd}',
    name: 'Moment résistant élastique',
    unit: '\\text{kN}\\cdot\\text{m}',
    role: "Moment correspondant à l'atteinte de la limite élastique sur la fibre extrême.",
    category: 'Métal / Eurocode 3'
  },
  'M_{pl,Rd}': {
    symbol: 'M_{pl,Rd}',
    name: 'Moment résistant plastique',
    unit: '\\text{kN}\\cdot\\text{m}',
    role: 'Moment correspondant à la plastification complète de la section transversale en acier.',
    category: 'Métal / Eurocode 3'
  },
  'M_{max}': {
    symbol: 'M_{max}',
    name: 'Moment fléchissant maximal en travée',
    unit: '\\text{kN}\\cdot\\text{m}',
    role: 'Pic de moment le long de la poutre (ex: qL²/8 pour une charge uniforme sur 2 appuis simples).',
    category: 'RDM'
  },
  'M_0': {
    symbol: 'M_0',
    name: 'Moment isostatique de référence',
    unit: '\\text{kN}\\cdot\\text{m}',
    role: 'Moment fléchissant calculé comme si la travée était simplement appuyée sur ses deux extrémités.',
    category: 'Béton Armé'
  },
  'M_t': {
    symbol: 'M_t',
    name: 'Moment en travée',
    unit: '\\text{kN}\\cdot\\text{m}',
    role: 'Moment positif faisant travailler les armatures inférieures en traction au milieu de la portée.',
    category: 'Béton Armé'
  },
  'M_w': {
    symbol: 'M_w',
    name: 'Moment sur appui (chapeau)',
    unit: '\\text{kN}\\cdot\\text{m}',
    role: "Moment négatif créant de la traction sur la fibre supérieure au-dessus d'un appui intermédiaire.",
    category: 'Béton Armé'
  },
  'T': {
    symbol: 'T',
    name: 'Moment de torsion',
    unit: '\\text{kN}\\cdot\\text{m}',
    role: 'Effort interne cherchant à faire pivoter la section autour de son axe longitudinal.',
    category: 'RDM / Structures'
  },

  // ── Efforts Axiaux & Tranchants ──────────────────────────────────────────
  'N': {
    symbol: 'N',
    name: 'Effort normal axial',
    unit: '\\text{kN}',
    role: "Force agissant dans l'axe de la barre (positive en traction, négative en compression).",
    category: 'RDM'
  },
  'N_{Ed}': {
    symbol: 'N_{Ed}',
    name: 'Effort normal sollicitant de calcul',
    unit: '\\text{kN}',
    role: "Charge axiale totale appliquée à l'ELU sur un poteau, un tirant ou une bielle.",
    category: 'Eurocodes'
  },
  'N_{Rd}': {
    symbol: 'N_{Rd}',
    name: 'Effort normal résistant',
    unit: '\\text{kN}',
    role: 'Capacité portante axiale maximale de la pièce en compression ou traction pure.',
    category: 'Eurocodes'
  },
  'N_{b,Rd}': {
    symbol: 'N_{b,Rd}',
    name: 'Résistance de calcul au flambement',
    unit: '\\text{kN}',
    role: "Charge axiale admissible tenant compte du risque d'instabilité par flambement.",
    category: 'Métal / Bois'
  },
  'N_{cr}': {
    symbol: 'N_{cr}',
    name: "Charge critique d'Euler",
    unit: '\\text{kN}',
    role: "Force axiale théorique exacte provoquant le flambement instantané d'une colonne élancée : $N_{cr} = \\frac{\\pi^2 EI}{L_k^2}$.",
    category: 'Stabilité / RDM'
  },
  'V': {
    symbol: 'V',
    name: 'Effort tranchant',
    unit: '\\text{kN}',
    role: "Force interne perpendiculaire à l'axe qui tend à découper la poutre par cisaillement.",
    category: 'RDM'
  },
  'V_{Ed}': {
    symbol: 'V_{Ed}',
    name: 'Effort tranchant sollicitant de calcul',
    unit: '\\text{kN}',
    role: "Effort tranchant maximal appliqué à l'appui à l'ELU, dimensionnant les cadres et étriers.",
    category: 'Béton Armé / Eurocode 2'
  },
  'V_{Rd,c}': {
    symbol: 'V_{Rd,c}',
    name: 'Résistance au cisaillement du béton seul',
    unit: '\\text{kN}',
    role: 'Effort tranchant maximal repris par le béton non armé avant apparition des fissures à 45°.',
    category: 'Béton Armé'
  },
  'V_{Rd,s}': {
    symbol: 'V_{Rd,s}',
    name: "Résistance d'effort tranchant reprise par les armatures",
    unit: '\\text{kN}',
    role: 'Effort tranchant repris par les cadres transversaux cousant les bielles de compression.',
    category: 'Béton Armé'
  },
  'V_{Rd,max}': {
    symbol: 'V_{Rd,max}',
    name: "Effort tranchant limite d'écrasement des bielles",
    unit: '\\text{kN}',
    role: 'Plafond absolu au-delà duquel les bielles de béton comprimé éclatent.',
    category: 'Béton Armé'
  },

  // ── Contraintes & Déformations ───────────────────────────────────────────
  '\\sigma': {
    symbol: '\\sigma',
    name: 'Contrainte normale (Navier)',
    unit: '\\text{MPa} \\text{ (N/mm}^2\\text{)}',
    role: 'Force par unité de surface perpendiculaire à la section : $\\sigma = \\frac{N}{A} + \\frac{M \\cdot y}{I}$ (1 MPa = 10 bar = 100 t/m²).',
    category: 'RDM'
  },
  '\\sigma_{max}': {
    symbol: '\\sigma_{max}',
    name: 'Contrainte normale maximale',
    unit: '\\text{MPa}',
    role: 'Contrainte sur les fibres les plus éloignées de la fibre neutre : $\\sigma = \\frac{M}{W_{el}}$.',
    category: 'RDM'
  },
  '\\sigma_c': {
    symbol: '\\sigma_c',
    name: 'Contrainte de compression dans le béton',
    unit: '\\text{MPa}',
    role: 'Pression interne supportée par la zone comprimée du béton sous le moment fléchissant.',
    category: 'Béton Armé'
  },
  '\\sigma_s': {
    symbol: '\\sigma_s',
    name: "Contrainte dans les barres d'acier",
    unit: '\\text{MPa}',
    role: 'Tension supportée par les armatures pour reprendre les efforts de traction.',
    category: 'Béton Armé'
  },
  '\\tau': {
    symbol: '\\tau',
    name: 'Contrainte tangentielle de cisaillement',
    unit: '\\text{MPa}',
    role: 'Contrainte parallèle au plan de section cherchant à faire glisser les couches de matière.',
    category: 'RDM'
  },
  '\\tau_{max}': {
    symbol: '\\tau_{max}',
    name: 'Contrainte de cisaillement maximale (Jourawski)',
    unit: '\\text{MPa}',
    role: 'Pic de cisaillement au niveau de la fibre neutre : $\\tau_{max} = 1{,}5 \\cdot \\frac{V}{A}$ pour un rectangle.',
    category: 'RDM'
  },
  '\\varepsilon': {
    symbol: '\\varepsilon',
    name: 'Déformation unitaire relative (Allongement)',
    unit: '\\text{mm/m} \\text{ ou } -',
    role: 'Variation relative de longueur $\\Delta L / L$ selon la loi de Hooke ($\\sigma = E \\cdot \\varepsilon$).',
    category: 'Élasticité'
  },

  // ── Matériaux & Resistances ──────────────────────────────────────────────
  'f_{ck}': {
    symbol: 'f_{ck}',
    name: 'Résistance caractéristique du béton à 28 jours',
    unit: '\\text{MPa}',
    role: 'Résistance nominale en compression sur cylindre (ex: C25/30 => $f_{ck} = 25\\text{ MPa}$).',
    category: 'Béton Armé'
  },
  'f_{cd}': {
    symbol: 'f_{cd}',
    name: 'Résistance de calcul du béton en compression',
    unit: '\\text{MPa}',
    role: "Résistance utile à l'ELU : $f_{cd} = f_{ck} / \\gamma_c$ avec $\\gamma_c = 1{,}50$.",
    category: 'Béton Armé / Eurocode 2'
  },
  'f_{yk}': {
    symbol: 'f_{yk}',
    name: "Limite d'élasticité caractéristique de l'acier",
    unit: '\\text{MPa}',
    role: "Limite d'élasticité nominale des barres passives (ex: B500B => $f_{yk} = 500\\text{ MPa}$).",
    category: 'Aciers'
  },
  'f_{yd}': {
    symbol: 'f_{yd}',
    name: "Résistance de calcul de l'acier",
    unit: '\\text{MPa}',
    role: "Limite d'élasticité de calcul à l'ELU : $f_{yd} = f_{yk} / \\gamma_s$ (ex: $500 / 1{,}15 = 435\\text{ MPa}$).",
    category: 'Béton Armé / Métal'
  },
  'E': {
    symbol: 'E',
    name: "Module d'élasticité longitudinale de Young",
    unit: '\\text{GPa} \\text{ ou } \\text{MPa}',
    role: 'Rigidité élastique intrinsèque (Acier: 210 GPa, Béton: 30-35 GPa, Bois: 10-12 GPa).',
    category: 'Matériaux'
  },
  'G': {
    symbol: 'G',
    name: 'Module de cisaillement transversal / Charge permanente',
    unit: '\\text{GPa} \\text{ ou } \\text{kN/m}^2',
    role: 'Rigidité en torsion $G = E / (2(1+\\nu))$ OU Poids propre permanent des éléments.',
    category: 'Matériaux / Charges'
  },
  '\\nu': {
    symbol: '\\nu',
    name: 'Coefficient de Poisson',
    unit: '-',
    role: 'Rapport de la contraction transversale à l\'allongement longitudinal (Acier: 0,30, Béton: 0,20).',
    category: 'Élasticité'
  },

  // ── Géométrie des Sections ───────────────────────────────────────────────
  'b': {
    symbol: 'b',
    name: 'Largeur de la section transversale',
    unit: '\\text{mm ou cm}',
    role: 'Largeur transversale de la poutre, du poteau ou de la nervure.',
    category: 'Géométrie de section'
  },
  'h': {
    symbol: 'h',
    name: 'Hauteur totale de la section transversale',
    unit: '\\text{mm ou cm}',
    role: 'Hauteur totale de la pièce (prédimensionnement usuel : $h \\approx L/15$ à $L/10$).',
    category: 'Géométrie de section'
  },
  'd': {
    symbol: 'd',
    name: 'Hauteur utile de la section armée',
    unit: '\\text{mm ou cm}',
    role: 'Distance de la fibre comprimée au centre de gravité des armatures tendues ($d \\approx 0{,}9h$).',
    category: 'Béton Armé'
  },
  'z': {
    symbol: 'z',
    name: 'Bras de levier du couple interne',
    unit: '\\text{mm ou cm}',
    role: 'Distance entre la compression du béton et la traction des armatures ($z \\approx 0{,}9d$).',
    category: 'Béton Armé'
  },
  'A_s': {
    symbol: 'A_s',
    name: "Section d'armatures longitudinales tendues",
    unit: '\\text{cm}^2 \\text{ ou } \\text{mm}^2',
    role: 'Surface totale des barres reprenant 100% de la traction sous le moment fléchissant.',
    category: 'Béton Armé'
  },
  'I': {
    symbol: 'I',
    name: "Moment d'inertie quadratique",
    unit: '\\text{cm}^4 \\text{ ou } \\text{m}^4',
    role: "Capacité géométrique de la section à s'opposer à la flexion ($I = \\frac{b h^3}{12}$ pour un rectangle).",
    category: 'RDM'
  },
  'I_z': {
    symbol: 'I_z',
    name: "Moment d'inertie quadratique (axe fort)",
    unit: '\\text{cm}^4 \\text{ ou } \\text{m}^4',
    role: "Inertie de flexion principale de la section transversale ($I_z = \\frac{b h^3}{12}$).",
    category: 'RDM'
  },
  'W_{el}': {
    symbol: 'W_{el}',
    name: 'Module de flexion élastique de section',
    unit: '\\text{cm}^3',
    role: 'Rapport $I / v$ permettant de calculer la contrainte maximale : $\\sigma_{max} = M / W_{el}$.',
    category: 'RDM'
  },
  'W_{pl}': {
    symbol: 'W_{pl}',
    name: 'Module de flexion plastique de section',
    unit: '\\text{cm}^3',
    role: 'Capacité de résistance plastique de la section métallique entièrement plastifiée.',
    category: 'Métal / Eurocode 3'
  },
  'L': {
    symbol: 'L',
    name: 'Portée de la travée',
    unit: '\\text{m}',
    role: "Distance libre ou entre axes d'appuis de l'élément de franchissement.",
    category: 'Géométrie'
  },
  'q': {
    symbol: 'q',
    name: 'Charge linéique répartie',
    unit: '\\text{kN/m}',
    role: 'Poids ou charge appliqué par mètre linéaire de poutre ou dalle.',
    category: 'Actions & Charges'
  }
};

// ── 2. Dictionnaire Structuré & Contextualisé par les 6 Domaines Clés ───────────
export const DOMAIN_VARIABLE_OVERRIDES = {
  // ── 1. Mathématiques appliquées & Trigonométrie ──────────────────────────
  maths: {
    'H': {
      symbol: 'H',
      name: "Hypoténuse (côté opposé à l'angle droit)",
      unit: '\\text{m ou mm}',
      role: "Le plus long côté du triangle rectangle : $H = \\sqrt{\\text{adj}^2 + \\text{opp}^2} = \\frac{\\text{opp}}{\\sin\\theta} = \\frac{\\text{adj}}{\\cos\\theta}$.",
      category: 'Trigonométrie'
    },
    '\\text{opp}': {
      symbol: '\\text{opp}',
      name: "Côté Opposé",
      unit: '\\text{m ou mm}',
      role: "Longueur du côté situé en face de l'angle aigu $\\theta$ (dénivelée verticale).",
      category: 'Trigonométrie'
    },
    '\\text{adj}': {
      symbol: '\\text{adj}',
      name: "Côté Adjacent",
      unit: '\\text{m ou mm}',
      role: "Longueur du côté formant l'angle $\\theta$ avec l'hypoténuse (distance horizontale).",
      category: 'Trigonométrie'
    },
    '\\theta': {
      symbol: '\\theta',
      name: "Angle aigu d'inclinaison",
      unit: '° \\text{ (degrés)}',
      role: "Angle d'inclinaison de la pente : $p(\\%) = \\tan(\\theta) \\times 100$.",
      category: 'Trigonométrie'
    },
    'p': {
      symbol: 'p',
      name: "Pente",
      unit: '\\%',
      role: "Pente géométrique : $p = \\frac{\\Delta h}{L_h} \\times 100 = \\tan(\\theta) \\times 100$.",
      category: 'Géométrie'
    },
    'A': {
      symbol: 'A',
      name: "Aire / Surface",
      unit: '\\text{m}^2',
      role: "Superficie de la figure géométrique ou de la parcelle.",
      category: 'Géométrie'
    },
    'P': {
      symbol: 'P',
      name: "Périmètre",
      unit: '\\text{m}',
      role: "Longueur totale du contour de la figure géométrique.",
      category: 'Géométrie'
    },
    'V': {
      symbol: 'V',
      name: "Volume géométrique",
      unit: '\\text{m}^3',
      role: "Volume de béton, de déblai ou de remblai.",
      category: 'Géométrie'
    },
    'r': {
      symbol: 'r',
      name: "Rayon de courbure / cercle",
      unit: '\\text{m ou mm}',
      role: "Distance du centre au bord pour les cercles, tuyaux et raccordements routiers.",
      category: 'Géométrie'
    },
    '\\pi': {
      symbol: '\\pi',
      name: "Constante d'Archimède Pi",
      unit: '-',
      role: "Rapport de la circonférence au diamètre ($\\approx 3{,}14159265$).",
      category: 'Maths'
    }
  },

  // ── 2. Physique & Thermique des Matériaux ────────────────────────────────
  physique: {
    '\\Delta L': {
      symbol: '\\Delta L',
      name: "Allongement thermique",
      unit: '\\text{mm ou m}',
      role: "Variation de longueur due à l'écart de température : $\\Delta L = \\alpha \\cdot L \\cdot \\Delta T$.",
      category: 'Physique Thermique'
    },
    '\\alpha': {
      symbol: '\\alpha',
      name: "Coefficient de dilatation linéique",
      unit: '10^{-6}\\text{ K}^{-1}',
      role: "Sensibilité thermique du matériau (Béton: 10×10⁻⁶ K⁻¹, Acier: 12×10⁻⁶ K⁻¹).",
      category: 'Physique des Matériaux'
    },
    'q': {
      symbol: 'q',
      name: "Flux thermique surfacique",
      unit: '\\text{W/m}^2',
      role: "Puissance thermique traversant 1 m² de paroi : $q = \\frac{\\Delta T}{R} = -\\lambda \\cdot \\frac{dT}{dx}$.",
      category: 'Thermique'
    },
    '\\lambda': {
      symbol: '\\lambda',
      name: "Conductivité thermique",
      unit: '\\text{W/(m}\\cdot\\text{K)}',
      role: "Capacité d'un matériau à transmettre la chaleur (Isolant: 0,035, Béton: 1,75 W/(m·K)).",
      category: 'Thermique'
    },
    'R': {
      symbol: 'R',
      name: "Résistance thermique de la paroi",
      unit: '\\text{m}^2\\cdot\\text{K/W}',
      role: "Pouvoir isolant de l'épaisseur de matériau : $R = \\frac{e}{\\lambda}$.",
      category: 'Thermique'
    },
    'U': {
      symbol: 'U',
      name: "Coefficient de transmission thermique surfacique",
      unit: '\\text{W/(m}^2\\cdot\\text{K)}',
      role: "Performance globale de la paroi : $U = \\frac{1}{R_{total}}$. Plus $U$ est faible, meilleure est l'isolation.",
      category: 'Thermique'
    },
    '\\Delta T': {
      symbol: '\\Delta T',
      name: "Écart de température",
      unit: '\\text{K ou } ^\\circ\\text{C}',
      role: "Gradient de température entre l'intérieur et l'extérieur.",
      category: 'Thermique'
    },
    'F': {
      symbol: 'F',
      name: "Force mécanique appliquée",
      unit: '\\text{kN ou N}',
      role: "Action mécanique selon le principe fondamental de la dynamique : $\\vec{F} = m \\cdot \\vec{a}$.",
      category: 'Mécanique'
    },
    'g': {
      symbol: 'g',
      name: "Accélération de la pesanteur",
      unit: '\\text{m/s}^2',
      role: "Constante gravitationnelle terrestre ($g \\approx 9{,}81\\text{ m/s}^2$).",
      category: 'Mécanique'
    },
    '\\rho': {
      symbol: '\\rho',
      name: "Masse volumique",
      unit: '\\text{kg/m}^3',
      role: "Masse par unité de volume (Eau: 1000, Acier: 7850, Béton: 2400 kg/m³).",
      category: 'Physique des Matériaux'
    }
  },

  // ── 3. Béton Armé & Eurocode 2 ───────────────────────────────────────────
  beton_arme: {
    'M_{Ed}': {
      symbol: 'M_{Ed}',
      name: "Moment fléchissant sollicitant à l'ELU",
      unit: '\\text{kN}\\cdot\\text{m}',
      role: "Moment de calcul intégrant les actions majorées : $M_{Ed} = 1{,}35 M_G + 1{,}50 M_Q$.",
      category: 'Béton Armé'
    },
    'M_{Rd}': {
      symbol: 'M_{Rd}',
      name: "Moment résistant ultime de la section",
      unit: '\\text{kN}\\cdot\\text{m}',
      role: "Capacité portante maximale en flexion : $M_{Rd} = A_s \\cdot f_{yd} \\cdot z$.",
      category: 'Béton Armé'
    },
    'h': {
      symbol: 'h',
      name: "Hauteur totale de la section en béton",
      unit: '\\text{mm ou cm}',
      role: "Hauteur brute du coffrage de la poutre ou de la dalle.",
      category: 'Béton Armé'
    },
    'b': {
      symbol: 'b',
      name: "Largeur de la section transversale",
      unit: '\\text{mm ou cm}',
      role: "Largeur transversale de la nervure ou de la table de compression.",
      category: 'Béton Armé'
    },
    'd': {
      symbol: 'd',
      name: "Hauteur utile de calcul",
      unit: '\\text{mm ou cm}',
      role: "Distance de la fibre comprimée au centre de gravité des armatures tendues ($d \\approx 0{,}9h$).",
      category: 'Béton Armé'
    },
    'z': {
      symbol: 'z',
      name: "Bras de levier du couple interne",
      unit: '\\text{mm ou cm}',
      role: "Distance séparant la compression du béton et la traction des armatures ($z \\approx 0{,}9d$).",
      category: 'Béton Armé'
    },
    'A_s': {
      symbol: 'A_s',
      name: "Section d'acier d'armature tendue",
      unit: '\\text{cm}^2 \\text{ ou } \\text{mm}^2',
      role: "Section totale des barres longitudinales inférieures : $A_s = \\frac{M_{Ed}}{z \\cdot f_{yd}}$.",
      category: 'Béton Armé'
    },
    'A_{s,min}': {
      symbol: 'A_{s,min}',
      name: "Section minimale réglementaire d'armatures",
      unit: '\\text{cm}^2',
      role: "Section plancher pour éviter la rupture fragile lors de la première fissuration : $A_{s,min} \\ge 0{,}26 \\frac{f_{ctm}}{f_{yk}} b d$.",
      category: 'Béton Armé'
    },
    'f_{ck}': {
      symbol: 'f_{ck}',
      name: "Résistance caractéristique du béton à 28 jours",
      unit: '\\text{MPa}',
      role: "Résistance nominale en compression sur cylindre (ex: C25/30 => $f_{ck} = 25\\text{ MPa}$).",
      category: 'Béton Armé'
    },
    'f_{cd}': {
      symbol: 'f_{cd}',
      name: "Résistance de calcul du béton en compression",
      unit: '\\text{MPa}',
      role: "Résistance utile à l'ELU : $f_{cd} = \\frac{f_{ck}}{\\gamma_c} = \\frac{f_{ck}}{1{,}50}$.",
      category: 'Béton Armé'
    },
    'f_{yk}': {
      symbol: 'f_{yk}',
      name: "Limite d'élasticité caractéristique de l'acier",
      unit: '\\text{MPa}',
      role: "Limite d'élasticité nominale des aciers HA (ex: B500B => $f_{yk} = 500\\text{ MPa}$).",
      category: 'Béton Armé'
    },
    'f_{yd}': {
      symbol: 'f_{yd}',
      name: "Résistance de calcul de l'acier en traction",
      unit: '\\text{MPa}',
      role: "Limite d'élasticité utile à l'ELU : $f_{yd} = \\frac{f_{yk}}{\\gamma_s} = \\frac{500}{1{,}15} = 435\\text{ MPa}$.",
      category: 'Béton Armé'
    },
    'V_{Ed}': {
      symbol: 'V_{Ed}',
      name: "Effort tranchant sollicitant de calcul",
      unit: '\\text{kN}',
      role: "Effort tranchant maximal au nu de l'appui dimensionnant les cadres transversaux.",
      category: 'Béton Armé'
    },
    '\\mu_{cu}': {
      symbol: '\\mu_{cu}',
      name: "Moment réduit ultime en flexion simple",
      unit: '-',
      role: "Rapport adimensionnel : $\\mu_{cu} = \\frac{M_{Ed}}{b \\cdot d^2 \\cdot f_{cd}}$. Si $\\mu_{cu} \\le 0{,}372$, armatures comprimées inutiles.",
      category: 'Béton Armé'
    },
    '\\alpha_u': {
      symbol: '\\alpha_u',
      name: "Hauteur relative de l'axe neutre comprimé",
      unit: '-',
      role: "Position de l'axe neutre : $\\alpha_u = 1{,}25 (1 - \\sqrt{1 - 2\\mu_{cu}})$.",
      category: 'Béton Armé'
    },
    'c_{nom}': {
      symbol: 'c_{nom}',
      name: "Enrobage nominal des armatures",
      unit: '\\text{mm}',
      role: "Épaisseur de béton protecteur contre la corrosion et le feu (usuel: 30 à 50 mm).",
      category: 'Béton Armé'
    }
  },

  // ── 4. Résistance des Matériaux (RDM) & Calcul des Structures ────────────
  rdm: {
    'M': {
      symbol: 'M',
      name: "Moment fléchissant",
      unit: '\\text{kN}\\cdot\\text{m}',
      role: "Couple interne courbant la poutre dans le plan de chargement.",
      category: 'RDM'
    },
    'M_{max}': {
      symbol: 'M_{max}',
      name: "Moment fléchissant maximal en travée",
      unit: '\\text{kN}\\cdot\\text{m}',
      role: "Moment maximal sous charge répartie : $M_{max} = \\frac{q L^2}{8}$.",
      category: 'RDM'
    },
    'N': {
      symbol: 'N',
      name: "Effort normal axial",
      unit: '\\text{kN}',
      role: "Effort agissant dans l'axe neutre (traction > 0, compression < 0).",
      category: 'RDM'
    },
    'V': {
      symbol: 'V',
      name: "Effort tranchant",
      unit: '\\text{kN}',
      role: "Force perpendiculaire à l'axe générant le cisaillement ($V = -\\frac{dM}{dx}$).",
      category: 'RDM'
    },
    '\\sigma': {
      symbol: '\\sigma',
      name: "Contrainte normale de Navier",
      unit: '\\text{MPa}',
      role: "Contrainte normale : $\\sigma = \\frac{N}{A} + \\frac{M \\cdot y}{I}$.",
      category: 'RDM'
    },
    '\\sigma_{max}': {
      symbol: '\\sigma_{max}',
      name: "Contrainte normale maximale sur fibre extrême",
      unit: '\\text{MPa}',
      role: "Contrainte maximale en flexion : $\\sigma_{max} = \\frac{M}{W_{el}}$.",
      category: 'RDM'
    },
    '\\tau': {
      symbol: '\\tau',
      name: "Contrainte tangentielle de cisaillement (Jourawski)",
      unit: '\\text{MPa}',
      role: "Contrainte de cisaillement : $\\tau = \\frac{V \\cdot S}{I \\cdot b}$.",
      category: 'RDM'
    },
    '\\tau_{max}': {
      symbol: '\\tau_{max}',
      name: "Contrainte de cisaillement maximale sur l'axe neutre",
      unit: '\\text{MPa}',
      role: "Pic de cisaillement : $\\tau_{max} = 1{,}5 \\cdot \\frac{V}{A}$ pour section rectangulaire.",
      category: 'RDM'
    },
    'E': {
      symbol: 'E',
      name: "Module d'élasticité longitudinale de Young",
      unit: '\\text{GPa ou MPa}',
      role: "Constante d'élasticité du matériau régissant les déformations et flèches.",
      category: 'RDM'
    },
    'I': {
      symbol: 'I',
      name: "Moment d'inertie quadratique",
      unit: '\\text{cm}^4 \\text{ ou } \\text{m}^4',
      role: "Résistance géométrique de la section à la courbure ($I = \\frac{b h^3}{12}$).",
      category: 'RDM'
    },
    'W_{el}': {
      symbol: 'W_{el}',
      name: "Module d'inertie élastique",
      unit: '\\text{cm}^3',
      role: "Module de résistance de la section : $W_{el} = \\frac{I}{v} = \\frac{b h^2}{6}$.",
      category: 'RDM'
    },
    'f': {
      symbol: 'f',
      name: "Flèche de déformation",
      unit: '\\text{mm}',
      role: "Déplacement vertical de la poutre sous les charges de service : $f_{max} = \\frac{5 q L^4}{384 E I} \\le \\frac{L}{500}$.",
      category: 'RDM'
    },
    'N_{cr}': {
      symbol: 'N_{cr}',
      name: "Charge critique d'Euler au flambement",
      unit: '\\text{kN}',
      role: "Charge axiale limite avant instabilité élastique : $N_{cr} = \\frac{\\pi^2 E I}{L_k^2}$.",
      category: 'RDM / Stabilité'
    }
  },

  // ── 5. Hydraulique Urbaine & Ouvrages Hydrauliques ────────────────────────
  hydraulique: {
    'H': {
      symbol: 'H',
      name: "Charge hydraulique totale",
      unit: '\\text{mCE (mètres de colonne d\'eau)}',
      role: "Énergie mécanique totale du fluide par unité de poids (Théorème de Bernoulli) : $H = z + \\frac{p}{\\rho g} + \\frac{v^2}{2g}$.",
      category: 'Hydraulique'
    },
    'Q': {
      symbol: 'Q',
      name: "Débit volumique",
      unit: '\\text{m}^3/\\text{s} \\text{ ou L/s}',
      role: "Volume de fluide s'écoulant à travers la section par seconde : $Q = v \\cdot A$.",
      category: 'Hydraulique'
    },
    'v': {
      symbol: 'v',
      name: "Vitesse moyenne d'écoulement",
      unit: '\\text{m/s}',
      role: "Vitesse moyenne du fluide (plage recommandée en AEP : 0,5 à 2,0 m/s).",
      category: 'Hydraulique'
    },
    'D': {
      symbol: 'D',
      name: "Diamètre intérieur de la conduite",
      unit: '\\text{mm ou m}',
      role: "Diamètre hydraulique utile de passage de l'eau.",
      category: 'Hydraulique'
    },
    'J': {
      symbol: 'J',
      name: "Perte de charge linéaire unitaire",
      unit: '\\text{m/m ou mm/m}',
      role: "Dissipation d'énergie par frottement visqueux par mètre de conduite : $J = \\lambda \\frac{v^2}{2g D}$.",
      category: 'Hydraulique'
    },
    '\\Delta H': {
      symbol: '\\Delta H',
      name: "Perte de charge totale",
      unit: '\\text{mCE ou m}',
      role: "Perte d'énergie cumulée sur tout le tronçon : $\\Delta H = J \\cdot L + \\sum \\xi \\frac{v^2}{2g}$.",
      category: 'Hydraulique'
    },
    'R_h': {
      symbol: 'R_h',
      name: "Rayon hydraulique",
      unit: '\\text{m}',
      role: "Rapport de la section mouillée au périmètre mouillé : $R_h = \\frac{A}{P_m}$ (pour conduite pleine, $R_h = D/4$).",
      category: 'Hydraulique'
    },
    'K_s': {
      symbol: 'K_s',
      name: "Coefficient de rugosité de Strickler-Manning",
      unit: '\\text{m}^{1/3}/\\text{s}',
      role: "Rugosité de paroi dans la formule d'écoulement libre : $v = K_s \\cdot R_h^{2/3} \\cdot I^{1/2}$.",
      category: 'Hydraulique'
    },
    'I': {
      symbol: 'I',
      name: "Pente du radier / Ligne d'eau",
      unit: '\\text{m/m}',
      role: "Pente longitudinale du fond de canal ou de la canalisation gravitaire.",
      category: 'Hydraulique'
    },
    'p': {
      symbol: 'p',
      name: "Pression statique du fluide",
      unit: '\\text{bar ou kPa}',
      role: "Pression hydrostatique exercée par l'eau sur la paroi de la conduite ($1\\text{ bar} = 10\\text{ mCE}$).",
      category: 'Hydraulique'
    },
    'Re': {
      symbol: 'Re',
      name: "Nombre de Reynolds",
      unit: '-',
      role: "Régime d'écoulement : $\\text{Re} = \\frac{v D}{\\nu}$ (Laminaire si $\\text{Re} < 2300$, Turbulent au-delà).",
      category: 'Hydraulique'
    }
  },

  // ── 6. Géotechnique, Mécanique des Sols & Fondations ─────────────────────
  geotechnique: {
    'q_u': {
      symbol: 'q_u',
      name: "Capacité portante ultime du sol sous semelle",
      unit: '\\text{kPa ou MPa}',
      role: "Pression de rupture du terrain calculée selon la formule de Terzaghi : $q_u = c' N_c + q N_q + \\frac{1}{2} \\gamma B N_\\gamma$.",
      category: 'Géotechnique'
    },
    'q_{els}': {
      symbol: 'q_{els}',
      name: "Contrainte admissible sur le sol à l'ELS",
      unit: '\\text{MPa ou bar}',
      role: "Pression limite admissible évitant les tassements différentiels ($q_{els} \\approx q_u / 3$).",
      category: 'Fondations'
    },
    '\\sigma_v': {
      symbol: '\\sigma_v',
      name: "Contrainte verticale totale des terres",
      unit: '\\text{kPa}',
      role: "Poids des terres sus-jacentes à la profondeur $z$ : $\\sigma_v = \\gamma \\cdot z$.",
      category: 'Géotechnique'
    },
    '\\sigma_v\'': {
      symbol: '\\sigma_v\'',
      name: "Contrainte effective verticale (Terzaghi)",
      unit: '\\text{kPa}',
      role: "Contrainte transmise par le squelette granulaire : $\\sigma_v' = \\sigma_v - u$.",
      category: 'Géotechnique'
    },
    'u': {
      symbol: 'u',
      name: "Pression interstitielle de l'eau",
      unit: '\\text{kPa}',
      role: "Pression de l'eau dans les pores du sol sous la nappe phréatique ($u = \\gamma_w \\cdot h_w$).",
      category: 'Géotechnique'
    },
    'K_a': {
      symbol: 'K_a',
      name: "Coefficient de poussée active des terres",
      unit: '-',
      role: "Rapport de poussée horizontale active sur mur de soutènement : $K_a = \\tan^2(45^\\circ - \\phi'/2)$.",
      category: 'Soutènements'
    },
    'K_p': {
      symbol: 'K_p',
      name: "Coefficient de butée passive des terres",
      unit: '-',
      role: "Rapport multiplicateur de butée passive résistant au glissement : $K_p = \\tan^2(45^\\circ + \\phi'/2)$.",
      category: 'Soutènements'
    },
    '\\gamma': {
      symbol: '\\gamma',
      name: "Poids volumique total du sol",
      unit: '\\text{kN/m}^3',
      role: "Poids volumique humide (Sable: 18, Argile: 19-20, Béton: 25 kN/m³).",
      category: 'Géotechnique'
    },
    '\\phi\'': {
      symbol: '\\phi\'',
      name: "Angle de frottement interne effectif",
      unit: '° \\text{ (degrés)}',
      role: "Angle de résistance au cisaillement par frottement entre grains (Sable: 30-38°, Argile: 20-25°).",
      category: 'Géotechnique'
    },
    'c\'': {
      symbol: 'c\'',
      name: "Cohésion effective du sol",
      unit: '\\text{kPa}',
      role: "Capacité intrinsèque des particules d'argile à coller et résister sans contrainte normale.",
      category: 'Géotechnique'
    },
    'B': {
      symbol: 'B',
      name: "Largeur de la semelle de fondation",
      unit: '\\text{m}',
      role: "Largeur de contact gouvernant le terme de portance et le bulbe de contraintes.",
      category: 'Fondations'
    },
    'H': {
      symbol: 'H',
      name: "Hauteur du mur de soutènement ou de la couche",
      unit: '\\text{m}',
      role: "Hauteur libre de terres retenues ou épaisseur de la couche géologique.",
      category: 'Géotechnique'
    },
    'R_{c,d}': {
      symbol: 'R_{c,d}',
      name: "Capacité portante totale de calcul d'un pieu",
      unit: '\\text{kN}',
      role: "Somme de la résistance de pointe $R_b$ et du frottement latéral $R_s$ avec coefficients de sécurité.",
      category: 'Fondations Profondes'
    },
    's': {
      symbol: 's',
      name: "Tassement du sol",
      unit: '\\text{mm ou cm}',
      role: "Enfoncement vertical sous la charge de la structure.",
      category: 'Géotechnique'
    }
  }
};

// Alias des domaines pour assurer une compatibilité universelle
DOMAIN_VARIABLE_OVERRIDES['beton-arme'] = DOMAIN_VARIABLE_OVERRIDES.beton_arme;
DOMAIN_VARIABLE_OVERRIDES['fondations'] = DOMAIN_VARIABLE_OVERRIDES.geotechnique;
DOMAIN_VARIABLE_OVERRIDES['mecanique'] = DOMAIN_VARIABLE_OVERRIDES.rdm;
DOMAIN_VARIABLE_OVERRIDES['structures'] = DOMAIN_VARIABLE_OVERRIDES.rdm;
DOMAIN_VARIABLE_OVERRIDES['metal'] = DOMAIN_VARIABLE_OVERRIDES.rdm;
DOMAIN_VARIABLE_OVERRIDES['bois'] = DOMAIN_VARIABLE_OVERRIDES.rdm;

// Mapping ID numérique vers nom de domaine
const MODULE_ID_TO_DOMAIN = {
  1: 'maths',
  2: 'physique',
  6: 'rdm',
  7: 'rdm',
  8: 'rdm',
  9: 'beton_arme',
  10: 'beton_arme',
  11: 'rdm',
  12: 'rdm',
  13: 'geotechnique',
  14: 'hydraulique',
  16: 'rdm',
  18: 'hydraulique'
};

/**
 * Extraction intelligente, contextualisée et robuste des variables d'une formule LaTeX.
 * Filtre les doublons et adapte la signification selon le domaine (maths, physique, beton_arme, rdm, hydraulique, geotechnique).
 */
export function extractVariablesFromLatex(latex = '', customVariables = [], domainOrSlug = '') {
  let normDomain = '';

  if (typeof domainOrSlug === 'number' || (!isNaN(domainOrSlug) && String(domainOrSlug).trim() !== '')) {
    const numId = Number(domainOrSlug);
    normDomain = MODULE_ID_TO_DOMAIN[numId] || '';
  }

  if (!normDomain) {
    const raw = String(domainOrSlug || '').replace(/-/g, '_').toLowerCase();
    normDomain = DOMAIN_VARIABLE_OVERRIDES[raw] ? raw : (DOMAIN_VARIABLE_OVERRIDES[raw.replace(/_/g, '-')] ? raw.replace(/_/g, '-') : raw);
  }

  const domainOverrides = DOMAIN_VARIABLE_OVERRIDES[normDomain] || {};

  // 1. Si des variables sont explicitement fournies, les utiliser EXCLUSIVEMENT
  if (customVariables && Array.isArray(customVariables) && customVariables.length > 0) {
    return customVariables.map(v => {
      const cleanSym = String(v.symbol || '').trim();
      const override = domainOverrides[cleanSym] || domainOverrides[cleanSym.replace(/\\/g, '')];
      const dictMatch = override || VARIABLE_DICTIONARY[cleanSym] || VARIABLE_DICTIONARY[cleanSym.replace(/\\/g, '')];
      return {
        symbol: v.symbol || dictMatch?.symbol || cleanSym || 'x',
        name: v.name || v.label || dictMatch?.name || 'Grandeur de calcul',
        unit: v.unit || dictMatch?.unit || '-',
        role: v.role || v.meaning || v.desc || v.description || dictMatch?.role || 'Paramètre intervenant dans la relation.',
        // Only the lesson's own category: one looked up by letter can be wrong (M = mass tagged "Flexion").
        category: v.category || ''
      };
    });
  }

  // 2. Nettoyage strict du LaTeX : suppression des blocs textuels pour éviter les faux positifs (ex: "Échelle" -> "E", "Volume" -> "V")
  const mathOnlyLatex = String(latex || '')
    .replace(/\\text\{[^}]*\}/g, ' ')
    .replace(/\\mathrm\{[^}]*\}/g, ' ')
    .replace(/\\operatorname\{[^}]*\}/g, ' ')
    .replace(/\\tag\{[^}]*\}/g, ' ');

  const foundVars = [];
  const registeredSymbols = Object.keys({ ...VARIABLE_DICTIONARY, ...domainOverrides });

  // Trier par longueur décroissante pour matcher d'abord les symboles complexes (ex: M_{Ed} avant M)
  const sortedSymbols = [...new Set(registeredSymbols)].sort((a, b) => b.length - a.length);

  const seenSymbols = new Set();

  for (const sym of sortedSymbols) {
    // Ignorer les lettres uniques génériques isolées ('E', 'V', 'H', 'A', 'S') en mode aveugle si elles ne sont pas strictement dans le domaine
    const escaped = sym.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
    const regex = new RegExp(`(^|[^a-zA-Z0-9_])${escaped}([^a-zA-Z0-9_]|$)`);
    if (regex.test(mathOnlyLatex)) {
      const item = domainOverrides[sym] || VARIABLE_DICTIONARY[sym];
      if (item && !seenSymbols.has(item.symbol)) {
        seenSymbols.add(item.symbol);
        foundVars.push(item);
      }
    }
  }

  return foundVars;
}
