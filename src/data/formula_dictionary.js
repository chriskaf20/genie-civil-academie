/**
 * formula_dictionary.js — Référentiel des variables et anatomies de formules
 * pour l'Académie de Génie Civil (GCEA).
 *
 * Décompose chaque variable : Symbole KaTeX, Nom en français, Unité usuelle, Rôle physique vulgarisé.
 */

export const VARIABLE_DICTIONARY = {
  // ── Moments & Flexion ──────────────────────────────────────────────────────
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
    role: 'L\'effort total de flexion appliqué à l\'ouvrage, calculé avec les charges majorées de sécurité (1,35G + 1,50Q).',
    category: 'Béton Armé / Eurocodes'
  },
  'M_{Rd}': {
    symbol: 'M_{Rd}',
    name: 'Moment fléchissant résistant de calcul',
    unit: '\\text{kN}\\cdot\\text{m}',
    role: 'Le moment maximal que la section peut supporter avant rupture. La sécurité impose M_{Ed} ≤ M_{Rd}.',
    category: 'Béton Armé / Eurocodes'
  },
  'M_{max}': {
    symbol: 'M_{max}',
    name: 'Moment fléchissant maximal',
    unit: '\\text{kN}\\cdot\\text{m}',
    role: 'Le pic de moment le long de la poutre (ex: qL²/8 à mi-travée pour une poutre sur 2 appuis).',
    category: 'RDM'
  },
  'M_{el,Rd}': {
    symbol: 'M_{el,Rd}',
    name: 'Moment résistant élastique',
    unit: '\\text{kN}\\cdot\\text{m}',
    role: 'Moment correspondant à l\'atteinte de la limite élastique sur la fibre la plus éloignée.',
    category: 'Métal / RDM'
  },
  'M_{pl,Rd}': {
    symbol: 'M_{pl,Rd}',
    name: 'Moment résistant plastique',
    unit: '\\text{kN}\\cdot\\text{m}',
    role: 'Moment correspondant à la plastification totale de la section métallique.',
    category: 'Métal / Eurocode 3'
  },

  // ── Efforts Axiaux & Tranchants ───────────────────────────────────────────
  'N': {
    symbol: 'N',
    name: 'Effort normal axial',
    unit: '\\text{kN}',
    role: 'Force agissant dans l\'axe de la pièce (positive en traction, négative en compression).',
    category: 'RDM'
  },
  'N_{Ed}': {
    symbol: 'N_{Ed}',
    name: 'Effort normal sollicitant de calcul',
    unit: '\\text{kN}',
    role: 'Charge axiale de calcul appliquée (compression ou traction de poteau, tirant, etc.).',
    category: 'Eurocodes'
  },
  'N_{Rd}': {
    symbol: 'N_{Rd}',
    name: 'Effort normal résistant',
    unit: '\\text{kN}',
    role: 'Capacité portante axiale maximale de la section.',
    category: 'Eurocodes'
  },
  'V': {
    symbol: 'V',
    name: 'Effort tranchant',
    unit: '\\text{kN}',
    role: 'Force perpendiculaire à l\'axe qui cherche à cisailler et couper la pièce transversalement.',
    category: 'RDM'
  },
  'V_{Ed}': {
    symbol: 'V_{Ed}',
    name: 'Effort tranchant sollicitant de calcul',
    unit: '\\text{kN}',
    role: 'Effort de cisaillement maximal appliqué à l\'ELU, généralement maximal près des appuis.',
    category: 'Béton Armé / Eurocodes'
  },
  'V_{Rd,c}': {
    symbol: 'V_{Rd,c}',
    name: 'Résistance au cisaillement sans armatures',
    unit: '\\text{kN}',
    role: 'Capacité de cisaillement assurée par le béton seul (engrenage des granulats + zone comprimée).',
    category: 'Béton Armé'
  },
  'V_{Rd,s}': {
    symbol: 'V_{Rd,s}',
    name: 'Résistance au cisaillement des armatures transversales',
    unit: '\\text{kN}',
    role: 'Effort tranchant repris par les cadres et étriers en acier cousant les fissures inclinées.',
    category: 'Béton Armé'
  },
  'P_{cr}': {
    symbol: 'P_{cr}',
    name: 'Charge critique de flambement d\'Euler',
    unit: '\\text{kN}',
    role: 'Force de compression axiale exacte qui provoque le pliage brusque (flambement) d\'un poteau élancé.',
    category: 'Stabilité / RDM'
  },

  // ── Contraintes & Déformations ────────────────────────────────────────────
  '\\sigma': {
    symbol: '\\sigma',
    name: 'Contrainte normale',
    unit: '\\text{MPa} \\text{ ou } \\text{N/mm}^2',
    role: 'Intensité de la force par unité de surface agissant perpendiculairement à la section (1 MPa = 10 bar).',
    category: 'RDM'
  },
  '\\sigma_{max}': {
    symbol: '\\sigma_{max}',
    name: 'Contrainte normale maximale',
    unit: '\\text{MPa}',
    role: 'La contrainte la plus élevée sur les fibres extrêmes de la pièce.',
    category: 'RDM'
  },
  '\\sigma_c': {
    symbol: '\\sigma_c',
    name: 'Contrainte de compression dans le béton',
    unit: '\\text{MPa}',
    role: 'Pression interne supportée par la partie comprimée du béton.',
    category: 'Béton Armé'
  },
  '\\sigma_s': {
    symbol: '\\sigma_s',
    name: 'Contrainte dans les armatures en acier',
    unit: '\\text{MPa}',
    role: 'Tension supportée par les barres d\'acier pour empêcher le béton tendu de s\'ouvrir.',
    category: 'Béton Armé'
  },
  '\\tau': {
    symbol: '\\tau',
    name: 'Contrainte tangentielle de cisaillement',
    unit: '\\text{MPa}',
    role: 'Contrainte parallèle au plan de la section provoquant le glissement des fibres.',
    category: 'RDM'
  },
  '\\varepsilon': {
    symbol: '\\varepsilon',
    name: 'Déformation relative',
    unit: '\\text{sans unité (ou } \\%o \\text{)}',
    role: 'Allongement ou raccourcissement par mètre : \\varepsilon = \\Delta L / L.',
    category: 'RDM'
  },
  '\\varepsilon_{cu}': {
    symbol: '\\varepsilon_{cu}',
    name: 'Raccourcissement ultime du béton',
    unit: '\\%o',
    role: 'Déformation limite du béton en compression avant écrasement (typiquement 3,5 ‰ en flexion).',
    category: 'Béton Armé'
  },
  '\\varepsilon_{uk}': {
    symbol: '\\varepsilon_{uk}',
    name: 'Allongement ultime caractéristique de l\'acier',
    unit: '\\%',
    role: 'Capacité de ductilité de l\'acier avant rupture (typiquement ≥ 5 % pour acier classe B).',
    category: 'Matériaux'
  },

  // ── Géométrie de Section & Matériaux ───────────────────────────────────────
  'b': {
    symbol: 'b',
    name: 'Largeur de la section',
    unit: '\\text{mm} \\text{ ou } \\text{m}',
    role: 'Dimension horizontale de la poutre ou du voile.',
    category: 'Géométrie'
  },
  'b_w': {
    symbol: 'b_w',
    name: 'Épaisseur de l\'âme',
    unit: '\\text{mm}',
    role: 'Largeur utile de la partie centrale (âme) reprenant l\'effort tranchant.',
    category: 'Géométrie'
  },
  'h': {
    symbol: 'h',
    name: 'Hauteur totale de la section',
    unit: '\\text{mm} \\text{ ou } \\text{m}',
    role: 'Hauteur complète de l\'élément de structure.',
    category: 'Géométrie'
  },
  'd': {
    symbol: 'd',
    name: 'Hauteur utile de la section',
    unit: '\\text{mm}',
    role: 'Distance entre la fibre supérieure la plus comprimée et le centre de gravité des armatures tendues (d ≈ 0,9·h).',
    category: 'Béton Armé'
  },
  'z': {
    symbol: 'z',
    name: 'Bras de levier des forces internes',
    unit: '\\text{mm}',
    role: 'Distance interne séparant la résultante de compression du béton Fc et la résultante de traction de l\'acier Fs (z ≈ 0,9·d).',
    category: 'Béton Armé'
  },
  'x_u': {
    symbol: 'x_u',
    name: 'Hauteur de l\'axe neutre / zone comprimée',
    unit: '\\text{mm}',
    role: 'Profondeur de béton travaillant en compression à l\'État Limite Ultime.',
    category: 'Béton Armé'
  },
  'A': {
    symbol: 'A',
    name: 'Aire de la section droite',
    unit: '\\text{cm}^2 \\text{ ou } \\text{mm}^2',
    role: 'Surface totale du matériau perpendiculaire à l\'axe.',
    category: 'Géométrie'
  },
  'A_s': {
    symbol: 'A_s',
    name: 'Section d\'armatures longitudinales tendues',
    unit: '\\text{cm}^2 \\text{ ou } \\text{mm}^2',
    role: 'Surface d\'acier requise pour reprendre l\'intégralité de l\'effort de traction dû à la flexion.',
    category: 'Béton Armé'
  },
  'A_{s,min}': {
    symbol: 'A_{s,min}',
    name: 'Section minimale d\'armatures',
    unit: '\\text{cm}^2',
    role: 'Ferraillage minimal réglementaire pour éviter une rupture fragile immédiate dès la première fissure.',
    category: 'Béton Armé / Eurocode 2'
  },
  'I': {
    symbol: 'I',
    name: 'Moment d\'inertie quadratique',
    unit: '\\text{cm}^4 \\text{ ou } \\text{mm}^4',
    role: 'Capacité géométrique de la forme à résister au pliage (ex: pour rectangle I = bh³/12).',
    category: 'RDM'
  },
  'W_{el}': {
    symbol: 'W_{el}',
    name: 'Module de flexion élastique (I/v)',
    unit: '\\text{cm}^3',
    role: 'Rapport I / v permettant de calculer directement σ_max = M / W_{el}.',
    category: 'RDM'
  },
  'W_{pl}': {
    symbol: 'W_{pl}',
    name: 'Module de flexion plastique',
    unit: '\\text{cm}^3',
    role: 'Module résistant lorsque toute la section métallique a atteint la plastification.',
    category: 'Métal / Eurocode 3'
  },
  'E': {
    symbol: 'E',
    name: 'Module d\'élasticité longitudinale (Young)',
    unit: '\\text{GPa} \\text{ ou } \\text{MPa}',
    role: 'Rigidité intrinsèque du matériau (Acier : 210 GPa, Béton : 30-35 GPa, Bois : 10-14 GPa).',
    category: 'Matériaux'
  },
  'G': {
    symbol: 'G',
    name: 'Module de cisaillement transversal (Coulomb)',
    unit: '\\text{GPa}',
    role: 'Résistance du matériau aux déformations de glissement/torsion (G ≈ E / [2(1+ν)]).',
    category: 'Matériaux'
  },
  '\\nu': {
    symbol: '\\nu',
    name: 'Coefficient de Poisson',
    unit: '\\text{sans unité}',
    role: 'Rapport entre le rétrécissement transversal et l\'allongement longitudinal (acier : 0,3 ; béton non fissuré : 0,2).',
    category: 'Matériaux'
  },
  'L': {
    symbol: 'L',
    name: 'Portée de la poutre ou longueur',
    unit: '\\text{m}',
    role: 'Distance libre entre les deux appuis de la structure.',
    category: 'Géométrie'
  },
  'q': {
    symbol: 'q',
    name: 'Charge linéique répartie',
    unit: '\\text{kN/m}',
    role: 'Poids uniformément distribué sur chaque mètre de longueur de la poutre.',
    category: 'Charges'
  },
  '\\delta': {
    symbol: '\\delta',
    name: 'Flèche (déformation verticale)',
    unit: '\\text{mm}',
    role: 'Affaissement maximal de la poutre sous charge. En service ELS, elle doit rester ≤ L/250 ou L/500.',
    category: 'RDM / ELS'
  },

  // ── Résistances & Coefficients Réglementaires ────────────────────────────
  'f_{ck}': {
    symbol: 'f_{ck}',
    name: 'Résistance caractéristique à la compression du béton',
    unit: '\\text{MPa}',
    role: 'Résistance minimale mesurée sur cylindre à 28 jours avec 95 % de garantie statistique (ex: C25/30 → fck = 25 MPa).',
    category: 'Béton Armé'
  },
  'f_{cd}': {
    symbol: 'f_{cd}',
    name: 'Résistance de calcul du béton en compression',
    unit: '\\text{MPa}',
    role: 'Valeur de sécurité utilisée dans les calculs : f_{cd} = \\alpha_{cc} \\cdot f_{ck} / \\gamma_c (ex: 0,85 × 25 / 1,5 = 14,17 MPa).',
    category: 'Béton Armé / Eurocode 2'
  },
  'f_{yk}': {
    symbol: 'f_{yk}',
    name: 'Limite d\'élasticité caractéristique de l\'acier',
    unit: '\\text{MPa}',
    role: 'Contrainte à partir de laquelle l\'acier se déforme irréversiblement (Acier HA FeE500 → fyk = 500 MPa).',
    category: 'Matériaux / Aciers'
  },
  'f_{yd}': {
    symbol: 'f_{yd}',
    name: 'Résistance de calcul de l\'acier en traction',
    unit: '\\text{MPa}',
    role: 'Valeur de calcul admissible de l\'acier : f_{yd} = f_{yk} / \\gamma_s (ex: 500 / 1,15 = 434,8 MPa).',
    category: 'Béton Armé / Eurocodes'
  },
  'f_{ctm}': {
    symbol: 'f_{ctm}',
    name: 'Résistance moyenne en traction du béton',
    unit: '\\text{MPa}',
    role: 'Faible résistance du béton avant fissuration (fctm ≈ 0,30 × fck^(2/3) ≈ 2,6 MPa pour C25/30).',
    category: 'Béton Armé'
  },
  '\\gamma_G': {
    symbol: '\\gamma_G',
    name: 'Coefficient partiel de sécurité pour charges permanentes',
    unit: '1{,}35',
    role: 'Facteur multiplicateur de sécurité majorant le poids propre et les charges fixes (Eurocode 0).',
    category: 'Sécurité Eurocodes'
  },
  '\\gamma_Q': {
    symbol: '\\gamma_Q',
    name: 'Coefficient partiel de sécurité pour charges variables',
    unit: '1{,}50',
    role: 'Facteur multiplicateur majorant les charges d\'exploitation, vent et foule (Eurocode 0).',
    category: 'Sécurité Eurocodes'
  },
  '\\gamma_c': {
    symbol: '\\gamma_c',
    name: 'Coefficient de sécurité du béton',
    unit: '1{,}50',
    role: 'Facteur minorateur de sécurité sur le matériau béton (1,50 en situations durables, 1,20 en accidentel).',
    category: 'Béton Armé'
  },
  '\\gamma_s': {
    symbol: '\\gamma_s',
    name: 'Coefficient de sécurité de l\'acier',
    unit: '1{,}15',
    role: 'Facteur minorateur de sécurité sur l\'acier (1,15 car la fabrication industrielle de l\'acier est plus contrôlée que le béton).',
    category: 'Eurocodes'
  },
  '\\gamma_M': {
    symbol: '\\gamma_M',
    name: 'Coefficient partiel de sécurité général du matériau',
    unit: '\\text{sans unité}',
    role: 'Coefficient garantissant la marge de sécurité entre résistance caractéristique et calcul.',
    category: 'Eurocodes'
  },
  '\\alpha_{cc}': {
    symbol: '\\alpha_{cc}',
    name: 'Coefficient d\'effets à long terme sur le béton',
    unit: '0{,}85 \\text{ à } 1{,}00',
    role: 'Prend en compte la réduction de résistance du béton sous charge soutenue de longue durée.',
    category: 'Béton Armé'
  },
  '\\mu': {
    symbol: '\\mu',
    name: 'Moment réduit de flexion (adimensionnel)',
    unit: '\\text{sans unité}',
    role: 'Rapport adimensionnel \\mu = M_{Ed} / (b d^2 f_{cd}) indiquant l\'intensité du travail de la section.',
    category: 'Béton Armé'
  },

  // ── Géotechnique, Hydraulique & Ponts ──────────────────────────────────────
  'q_u': {
    symbol: 'q_u',
    name: 'Contrainte de rupture ultime du sol (portance)',
    unit: '\\text{kPa} \\text{ ou } \\text{MPa}',
    role: 'Pression limite au-delà de laquelle le sol s\'effondre sous la fondation (formule de Terzaghi).',
    category: 'Géotechnique'
  },
  '\\phi': {
    symbol: '\\phi',
    name: 'Angle de frottement interne du sol',
    unit: '^{\\circ} \\text{ (degrés)}',
    role: 'Capacité des grains de sol à s\'accrocher entre eux sous pression (sables : 30° à 40°).',
    category: 'Géotechnique'
  },
  'c': {
    symbol: 'c',
    name: 'Cohésion du sol',
    unit: '\\text{kPa}',
    role: 'Force d\'attraction physico-chimique entre particules fines (argiles : 10 à 100 kPa ; sable propre : c=0).',
    category: 'Géotechnique'
  },
  '\\gamma': {
    symbol: '\\gamma',
    name: 'Poids volumique du matériau',
    unit: '\\text{kN/m}^3',
    role: 'Poids d\'un mètre cube de sol, béton ou eau (Eau : 10 kN/m³, Béton armé : 25 kN/m³, Sol : 18-20 kN/m³).',
    category: 'Physique'
  },
  'Q': {
    symbol: 'Q',
    name: 'Débit volumique',
    unit: '\\text{m}^3\\text{/s} \\text{ ou } \\text{L/s}',
    role: 'Volume de fluide s\'écoulant à travers la section par unité de temps : Q = v × S.',
    category: 'Hydraulique'
  },
  'v': {
    symbol: 'v',
    name: 'Vitesse moyenne d\'écoulement',
    unit: '\\text{m/s}',
    role: 'Vitesse de déplacement de l\'eau dans la conduite ou le canal à surface libre.',
    category: 'Hydraulique'
  },
  'p': {
    symbol: 'p',
    name: 'Pression hydrostatique',
    unit: '\\text{bar} \\text{ ou } \\text{kPa}',
    role: 'Pression exercée par le fluide au repos : p = \\rho \\cdot g \\cdot h.',
    category: 'Hydraulique'
  },
  'S_{ed}': {
    symbol: 'S_{ed}',
    name: 'Sollicitation de calcul (Effet des actions majorées)',
    unit: '\\text{kN} \\text{ ou } \\text{kN}\\cdot\\text{m}',
    role: 'L\'effort total appliqué à la structure à l\'ELU : S_{ed} = \\gamma_G G + \\gamma_Q Q.',
    category: 'Sécurité Eurocodes'
  },
  'R_{cd}': {
    symbol: 'R_{cd}',
    name: 'Résistance de calcul de la section',
    unit: '\\text{kN} \\text{ ou } \\text{kN}\\cdot\\text{m}',
    role: 'La capacité portante maximale de l\'élément. On doit toujours respecter S_{ed} \\le R_{cd}.',
    category: 'Sécurité Eurocodes'
  },
  'f_k': {
    symbol: 'f_k',
    name: 'Résistance caractéristique du matériau',
    unit: '\\text{MPa}',
    role: 'Résistance intrinsèque garantie statistiquement à 95 % par le fabricant ou la norme.',
    category: 'Matériaux'
  },
  'G': {
    symbol: 'G',
    name: 'Charge permanente (Poids propre & superstructures)',
    unit: '\\text{kN} \\text{ ou } \\text{kN/m}',
    role: 'Poids invariant des éléments structuraux, cloisons, revêtements et terre.',
    category: 'Charges'
  },
  'y': {
    symbol: 'y',
    name: 'Distance par rapport à l\'axe neutre',
    unit: '\\text{mm} \\text{ ou } \\text{m}',
    role: 'Position de la fibre étudiée comptée depuis le centre de gravité G de la section.',
    category: 'RDM'
  },
  '\\delta_{max}': {
    symbol: '\\delta_{max}',
    name: 'Flèche maximale en service (ELS)',
    unit: '\\text{mm}',
    role: 'Déformation verticale maximale sous charges d\'exploitation (doit rester ≤ L/250).',
    category: 'RDM / ELS'
  },
  'H': {
    symbol: 'H',
    name: 'Charge hydraulique totale',
    unit: '\\text{mCE (mètres de colonne d\'eau)}',
    role: 'Énergie totale du fluide par unité de poids : H = z + p/(\\rho g) + v²/(2g).',
    category: 'Hydraulique'
  },
};

/**
 * Reconnaissance intelligente des variables dans une formule LaTeX.
 * Permet d'extraire automatiquement l'anatomie complète sans configuration manuelle.
 */
export function extractVariablesFromLatex(latex = '', customVariables = []) {
  if (customVariables && customVariables.length > 0) {
    return customVariables.map(v => {
      const dictMatch = VARIABLE_DICTIONARY[v.symbol] || VARIABLE_DICTIONARY[v.symbol.replace(/\\/g, '')];
      return {
        symbol: v.symbol || dictMatch?.symbol || 'x',
        name: v.name || dictMatch?.name || 'Grandeur physique',
        unit: v.unit || dictMatch?.unit || '-',
        role: v.role || dictMatch?.role || 'Paramètre intervenant dans la relation mathématique.',
        category: v.category || dictMatch?.category || 'Général'
      };
    });
  }

  const foundVars = [];
  const registeredSymbols = Object.keys(VARIABLE_DICTIONARY);

  // Trier par longueur décroissante pour matcher d'abord les symboles complexes (ex: M_{Ed} avant M)
  const sortedSymbols = [...registeredSymbols].sort((a, b) => b.length - a.length);

  for (const sym of sortedSymbols) {
    // Échapper les caractères spéciaux regex
    const escaped = sym.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
    const regex = new RegExp(`(^|[^a-zA-Z0-9_])${escaped}([^a-zA-Z0-9_]|$)`);
    if (regex.test(latex)) {
      foundVars.push(VARIABLE_DICTIONARY[sym]);
    }
  }

  // Si rien n'a été trouvé, fallback sur les variables fondamentales
  if (foundVars.length === 0) {
    return [
      {
        symbol: 'S_{Ed}',
        name: 'Sollicitation de calcul (Effet des actions)',
        unit: '\\text{kN} \\text{ ou } \\text{kN}\\cdot\\text{m}',
        role: 'L\'effort total exercé sur la structure après application des coefficients partiels de sécurité.',
        category: 'Eurocodes'
      },
      {
        symbol: 'R_{d}',
        name: 'Résistance de calcul de la section',
        unit: '\\text{kN} \\text{ ou } \\text{kN}\\cdot\\text{m}',
        role: 'La capacité portante maximale offerte par les matériaux de l\'ouvrage.',
        category: 'Eurocodes'
      }
    ];
  }

  return foundVars;
}
