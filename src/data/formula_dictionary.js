/**
 * formula_dictionary.js — Référentiel Universel des 100+ Symboles du Génie Civil
 * Académie Mondiale de Génie Civil (GCEA).
 *
 * Décompose chaque symbole :
 * - symbol: Code LaTeX exact
 * - name: Désignation officielle en français
 * - unit: Unité usuelle dans le système international ou de chantier
 * - role: Rôle physique vulgarisé et signification concrète pour l'ingénieur
 * - category: Discipline d'application
 */

export const VARIABLE_DICTIONARY = {
  // ── 0. Géométrie & Mathématiques Fondamentales ────────────────────────────
  'H': {
    symbol: 'H',
    name: 'Hypoténuse (côté opposé à l\'angle droit)',
    unit: '\\text{m ou mm}',
    role: 'Le plus long côté du triangle rectangle reliant les extrémités de la base et de la hauteur.',
    category: 'Trigonométrie'
  },
  '\\text{opp}': {
    symbol: '\\text{opp}',
    name: 'Côté Opposé',
    unit: '\\text{m ou mm}',
    role: 'Longueur du côté situé directement en face de l\'angle aigu \\theta.',
    category: 'Trigonométrie'
  },
  '\\text{adj}': {
    symbol: '\\text{adj}',
    name: 'Côté Adjacent',
    unit: '\\text{m ou mm}',
    role: 'Longueur du côté formant l\'angle \\theta avec l\'hypoténuse.',
    category: 'Trigonométrie'
  },
  '\\theta': {
    symbol: '\\theta',
    name: 'Angle d\'inclinaison',
    unit: '° \\text{ (degrés)}',
    role: 'Angle aigu définissant la pente d\'un versant ou d\'un élément : p(\\%) = \\tan(\\theta) \\times 100.',
    category: 'Trigonométrie'
  },

  // ── 1. Sollicitations & Moments ──────────────────────────────────────────
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
  'M_{el,Rd}': {
    symbol: 'M_{el,Rd}',
    name: 'Moment résistant élastique',
    unit: '\\text{kN}\\cdot\\text{m}',
    role: 'Moment correspondant à l\'atteinte de la limite élastique sur la fibre extrême la plus sollicitée.',
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
    role: 'Moment négatif créant de la traction sur la fibre supérieure au-dessus d\'un appui intermédiaire.',
    category: 'Béton Armé'
  },
  'T': {
    symbol: 'T',
    name: 'Moment de torsion',
    unit: '\\text{kN}\\cdot\\text{m}',
    role: 'Effort interne cherchant à faire pivoter ou tordre la section autour de son axe longitudinal.',
    category: 'RDM / Structures'
  },

  // ── 2. Efforts Axiaux & Tranchants ───────────────────────────────────────
  'N': {
    symbol: 'N',
    name: 'Effort normal axial',
    unit: '\\text{kN}',
    role: 'Force agissant dans l\'axe de la barre (positive en traction, négative en compression).',
    category: 'RDM'
  },
  'N_{Ed}': {
    symbol: 'N_{Ed}',
    name: 'Effort normal sollicitant de calcul',
    unit: '\\text{kN}',
    role: 'Charge axiale totale appliquée à l\'ELU sur un poteau, un tirant ou une bielle.',
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
    role: 'Charge axiale critique admissible tenant compte de l\'instabilité par flambement de la barre.',
    category: 'Métal / Bois'
  },
  'N_{cr}': {
    symbol: 'N_{cr}',
    name: 'Charge critique d\'Euler',
    unit: '\\text{kN}',
    role: 'Force axiale théorique exacte provoquant le flambement instantané d\'une colonne élancée.',
    category: 'Stabilité / RDM'
  },
  'V': {
    symbol: 'V',
    name: 'Effort tranchant',
    unit: '\\text{kN}',
    role: 'Force interne perpendiculaire à l\'axe qui tend à découper la poutre par cisaillement.',
    category: 'RDM'
  },
  'V_{Ed}': {
    symbol: 'V_{Ed}',
    name: 'Effort tranchant sollicitant de calcul',
    unit: '\\text{kN}',
    role: 'Effort tranchant maximal appliqué à l\'appui à l\'ELU, dimensionnant les cadres et étriers.',
    category: 'Béton Armé / Eurocode 2'
  },
  'V_{Rd,c}': {
    symbol: 'V_{Rd,c}',
    name: 'Résistance au cisaillement du béton seul',
    unit: '\\text{kN}',
    role: 'Effort tranchant maximal que le béton non armé peut reprendre avant apparition des fissures obliques à 45°.',
    category: 'Béton Armé'
  },
  'V_{Rd,s}': {
    symbol: 'V_{Rd,s}',
    name: 'Résistance d\'effort tranchant reprise par les armatures',
    unit: '\\text{kN}',
    role: 'Effort tranchant repris par les cadres transversaux d\'acier HA cousant les bielles de compression.',
    category: 'Béton Armé'
  },
  'V_{Rd,max}': {
    symbol: 'V_{Rd,max}',
    name: 'Effort tranchant limite d\'écrasement des bielles',
    unit: '\\text{kN}',
    role: 'Plafond absolu d\'effort tranchant au-delà duquel les bielles de béton comprimé éclatent.',
    category: 'Béton Armé'
  },
  'R_b': {
    symbol: 'R_b',
    name: 'Résistance de pointe d\'un pieu',
    unit: '\\text{kN}',
    role: 'Force portante exercée par le sol sous la base inférieure (pointe) du pieu de fondation.',
    category: 'Géotechnique / Fondations'
  },
  'R_s': {
    symbol: 'R_s',
    name: 'Frottement latéral d\'un pieu',
    unit: '\\text{kN}',
    role: 'Force de frottement cumulée développée le long du fût du pieu en contact avec le terrain.',
    category: 'Géotechnique / Fondations'
  },
  'R_{c,d}': {
    symbol: 'R_{c,d}',
    name: 'Capacité portante totale de calcul du pieu',
    unit: '\\text{kN}',
    role: 'Somme de la pointe et du frottement latéral divisée par les coefficients de sécurité.',
    category: 'Géotechnique'
  },

  // ── 3. Contraintes & Déformations ────────────────────────────────────────
  '\\sigma': {
    symbol: '\\sigma',
    name: 'Contrainte normale',
    unit: '\\text{MPa} \\text{ (N/mm}^2\\text{)}',
    role: 'Force par unité de surface perpendiculaire à la section (1 MPa = 10 bar = 100 t/m²).',
    category: 'RDM'
  },
  '\\sigma_{max}': {
    symbol: '\\sigma_{max}',
    name: 'Contrainte normale maximale',
    unit: '\\text{MPa}',
    role: 'Contrainte sur les fibres les plus éloignées de la fibre neutre (\\sigma = M / W_{el}).',
    category: 'RDM'
  },
  '\\sigma_c': {
    symbol: '\\sigma_c',
    name: 'Contrainte de compression dans le béton',
    unit: '\\text{MPa}',
    role: 'Pression interne supportée par la zone comprimée du béton.',
    category: 'Béton Armé'
  },
  '\\sigma_s': {
    symbol: '\\sigma_s',
    name: 'Contrainte dans les barres d\'acier',
    unit: '\\text{MPa}',
    role: 'Tension supportée par les armatures pour reprendre les efforts de traction.',
    category: 'Béton Armé'
  },
  '\\sigma_v': {
    symbol: '\\sigma_v',
    name: 'Contrainte verticale dans le sol',
    unit: '\\text{kPa} \\text{ ou } \\text{MPa}',
    role: 'Poids des terres sus-jacentes exercé sur une couche géologique à une profondeur donnée (\\sigma_v = \\gamma \\cdot z).',
    category: 'Géotechnique'
  },
  '\\sigma_h': {
    symbol: '\\sigma_h',
    name: 'Contrainte horizontale dans le sol',
    unit: '\\text{kPa}',
    role: 'Poussée latérale exercée par le sol sur un mur de soutènement (\\sigma_h = K_0 \\cdot \\sigma_v).',
    category: 'Géotechnique'
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
    role: 'Pic de cisaillement situé exactement au niveau de la fibre neutre (1,5 · V/A pour une section rectangulaire).',
    category: 'RDM'
  },
  '\\varepsilon': {
    symbol: '\\varepsilon',
    name: 'Déformation unitaire relative (Allongement)',
    unit: '\\text{mm/m} \\text{ ou } \\text{sans unité}',
    role: 'Variation relative de longueur \\Delta L / L selon la loi de Hooke (\\sigma = E · \\varepsilon).',
    category: 'Élasticité'
  },

  // ── 4. Matériaux & Resistances ───────────────────────────────────────────
  'f_{ck}': {
    symbol: 'f_{ck}',
    name: 'Résistance caractéristique du béton à 28 jours',
    unit: '\\text{MPa}',
    role: 'Résistance nominale en compression sur cylindre (ex: C25/30 => f_{ck} = 25 MPa).',
    category: 'Béton Armé'
  },
  'f_{cd}': {
    symbol: 'f_{cd}',
    name: 'Résistance de calcul du béton en compression',
    unit: '\\text{MPa}',
    role: 'Résistance utile à l\'ELU : f_{cd} = f_{ck} / \\gamma_c avec coefficient de sécurité \\gamma_c = 1,50.',
    category: 'Béton Armé / Eurocode 2'
  },
  'f_{yk}': {
    symbol: 'f_{yk}',
    name: 'Limite d\'élasticité caractéristique de l\'acier',
    unit: '\\text{MPa}',
    role: 'Limite d\'élasticité nominale des armatures passives (ex: B500B => f_{yk} = 500 MPa).',
    category: 'Aciers'
  },
  'f_{yd}': {
    symbol: 'f_{yd}',
    name: 'Résistance de calcul de l\'acier',
    unit: '\\text{MPa}',
    role: 'Limite d\'élasticité de calcul à l\'ELU : f_{yd} = f_{yk} / \\gamma_s (ex: 500 / 1,15 = 435 MPa).',
    category: 'Béton Armé / Métal'
  },
  'f_y': {
    symbol: 'f_y',
    name: 'Limite d\'élasticité nominale de l\'acier de construction',
    unit: '\\text{MPa}',
    role: 'Limite d\'élasticité garantie des profilés métalliques (ex: S235, S275, S355).',
    category: 'Construction Métallique'
  },
  'E': {
    symbol: 'E',
    name: 'Module d\'élasticité longitudinale de Young',
    unit: '\\text{GPa} \\text{ ou } \\text{MPa}',
    role: 'Rigidité élastique intrinsèque du matériau (Acier: 210 GPa, Béton: 30-35 GPa, Bois: 10-12 GPa).',
    category: 'Matériaux'
  },
  'G': {
    symbol: 'G',
    name: 'Module de cisaillement transversal / Charge permanente',
    unit: '\\text{GPa} \\text{ ou } \\text{kN/m}^2',
    role: 'Rigidité en torsion et cisaillement G = E / (2(1+ν)) OU Poids propre permanent des structures.',
    category: 'Matériaux / Charges'
  },
  '\\nu': {
    symbol: '\\nu',
    name: 'Coefficient de Poisson',
    unit: '-',
    role: 'Rapport de la contraction transversale à l\'allongement longitudinal (Acier: 0,30, Béton: 0,20).',
    category: 'Élasticité'
  },

  // ── 5. Géométrie des Sections Transversales ──────────────────────────────
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
    role: 'Hauteur totale de l\'élément de structure (prédimensionnement usuel : h ≈ L/15 à L/10).',
    category: 'Géométrie de section'
  },
  'd': {
    symbol: 'd',
    name: 'Hauteur utile de la section armée',
    unit: '\\text{mm ou cm}',
    role: 'Distance entre la fibre la plus comprimée et le centre de gravité des armatures tendues (d ≈ 0,9h).',
    category: 'Béton Armé'
  },
  'z': {
    symbol: 'z',
    name: 'Bras de levier du couple interne',
    unit: '\\text{mm ou cm}',
    role: 'Distance séparant la résultante de compression Fc et la traction Fs des aciers (z ≈ 0,9d).',
    category: 'Béton Armé'
  },
  'A_s': {
    symbol: 'A_s',
    name: 'Section d\'armatures longitudinales tendues',
    unit: '\\text{cm}^2 \\text{ ou } \\text{mm}^2',
    role: 'Surface totale des barres d\'acier reprenant 100% de la traction sous le moment fléchissant.',
    category: 'Béton Armé'
  },
  'I_z': {
    symbol: 'I_z',
    name: 'Moment d\'inertie quadratique par rapport à l\'axe fort',
    unit: '\\text{cm}^4 \\text{ ou } \\text{m}^4',
    role: 'Capacité géométrique de la section à s\'opposer à la flexion dans son plan principal (bh³/12).',
    category: 'RDM'
  },
  'W_{el}': {
    symbol: 'W_{el}',
    name: 'Module de flexion élastique de section',
    unit: '\\text{cm}^3',
    role: 'Rapport I / v permettant de calculer directement la contrainte maximale : \\sigma_{max} = M / W_{el}.',
    category: 'RDM'
  },
  'W_{pl}': {
    symbol: 'W_{pl}',
    name: 'Module de flexion plastique de section',
    unit: '\\text{cm}^3',
    role: 'Capacité de résistance plastique de la section métallique entièrement plastifiée.',
    category: 'Métal / Eurocode 3'
  },

  // ── 6. Géotechnique, Sols & Hydraulique ──────────────────────────────────
  'q_u': {
    symbol: 'q_u',
    name: 'Capacité portante ultime du sol de fondation',
    unit: '\\text{kPa} \\text{ ou } \\text{MPa}',
    role: 'Pression limite de rupture du sol sous la semelle calculée selon la formule de Terzaghi.',
    category: 'Géotechnique / Fondations'
  },
  'q_{els}': {
    symbol: 'q_{els}',
    name: 'Contrainte admissible de calcul sur le sol à l\'ELS',
    unit: '\\text{MPa ou bar}',
    role: 'Pression limite appliquée sous la semelle pour éviter tout tassement excessif de l\'ouvrage.',
    category: 'Fondations'
  },
  'K_a': {
    symbol: 'K_a',
    name: 'Coefficient de poussée active des terres',
    unit: '-',
    role: 'Rapport réduisant la contrainte verticale en contrainte horizontale active : K_a = \\tan^2(45^\\circ - \\phi\'/2).',
    category: 'Géotechnique / Soutènements'
  },
  'K_p': {
    symbol: 'K_p',
    name: 'Coefficient de butée passive des terres',
    unit: '-',
    role: 'Rapport multiplicateur de butée passive résistant au déplacement du mur : K_p = \\tan^2(45^\\circ + \\phi\'/2).',
    category: 'Géotechnique / Soutènements'
  },
  '\\gamma': {
    symbol: '\\gamma',
    name: 'Poids volumique du sol ou du matériau',
    unit: '\\text{kN/m}^3',
    role: 'Poids unitaire par mètre cube (Béton armé: 25 kN/m³, Sol sec: 18 kN/m³, Sol saturé: 20 kN/m³, Eau: 10 kN/m³).',
    category: 'Mécanique des Sols'
  },
  '\\phi\'': {
    symbol: '\\phi\'',
    name: 'Angle de frottement interne effectif du sol',
    unit: '° \\text{ (degrés)}',
    role: 'Angle de résistance au cisaillement par frottement entre les grains de sable ou de roche.',
    category: 'Géotechnique'
  },
  'c\'': {
    symbol: 'c\'',
    name: 'Cohésion effective du sol',
    unit: '\\text{kPa}',
    role: 'Capacité intrinsèque des argiles et sols fins à coller et résister au cisaillement sans contrainte normale.',
    category: 'Géotechnique'
  },
  'Q': {
    symbol: 'Q',
    name: 'Débit volumique / Charge d\'exploitation variable',
    unit: '\\text{m}^3/\\text{s} \\text{ ou } \\text{kN/m}^2',
    role: 'Volume de fluide s\'écoulant par seconde (Q = v · A) OU charges d\'exploitation mobiles.',
    category: 'Hydraulique / Actions'
  },
  'v': {
    symbol: 'v',
    name: 'Vitesse moyenne d\'écoulement de l\'eau',
    unit: '\\text{m/s}',
    role: 'Vitesse du fluide dans la conduite ou le canal (vitesse optimale : 1,0 à 2,0 m/s).',
    category: 'Hydraulique'
  },
  'D': {
    symbol: 'D',
    name: 'Diamètre intérieur de conduite',
    unit: '\\text{mm ou m}',
    role: 'Diamètre hydraulique utile de la canalisation.',
    category: 'Hydraulique'
  },
  'J': {
    symbol: 'J',
    name: 'Perte de charge linéaire unitaire',
    unit: '\\text{m/m ou mm/m}',
    role: 'Perte d\'énergie par frottement visqueux le long de chaque mètre linéaire de tuyau.',
    category: 'Hydraulique'
  }
};

/**
 * Dictionnaire d'overrides par domaine de module pour lever toute ambiguïté
 */
export const DOMAIN_VARIABLE_OVERRIDES = {
  maths: {
    'H': {
      symbol: 'H',
      name: "Hypoténuse (côté opposé à l'angle droit)",
      unit: '\\text{m ou mm}',
      role: "Le plus long côté du triangle rectangle : H = \\sqrt{\\text{adj}^2 + \\text{opp}^2}.",
      category: 'Trigonométrie'
    },
    '\\text{opp}': {
      symbol: '\\text{opp}',
      name: "Côté Opposé",
      unit: '\\text{m ou mm}',
      role: "Longueur du côté situé en face de l'angle aigu \\theta.",
      category: 'Trigonométrie'
    },
    '\\text{adj}': {
      symbol: '\\text{adj}',
      name: "Côté Adjacent",
      unit: '\\text{m ou mm}',
      role: "Longueur du côté formant l'angle \\theta avec l'hypoténuse.",
      category: 'Trigonométrie'
    },
    '\\theta': {
      symbol: '\\theta',
      name: "Angle aigu",
      unit: '° \\text{ (degrés)}',
      role: "Angle d'inclinaison : p(\\%) = \\tan(\\theta) \\times 100.",
      category: 'Trigonométrie'
    }
  },
  physique: {
    '\\Delta L': {
      symbol: '\\Delta L',
      name: "Allongement thermique",
      unit: '\\text{mm ou m}',
      role: "Variation de longueur due aux variations de température : \\Delta L = \\alpha \\cdot L \\cdot \\Delta T.",
      category: 'Physique Thermique'
    },
    '\\alpha': {
      symbol: '\\alpha',
      name: "Coefficient de dilatation linéique",
      unit: '10^{-6}\\text{ K}^{-1}',
      role: "Sensibilité thermique du matériau (Béton: 10×10⁻⁶, Acier: 12×10⁻⁶ K⁻¹).",
      category: 'Physique des Matériaux'
    },
    'q': {
      symbol: 'q',
      name: "Flux thermique surfacique",
      unit: '\\text{W/m}^2',
      role: "Puissance thermique traversant 1 m² de paroi : q = -\\lambda \\cdot \\nabla T.",
      category: 'Thermique'
    },
    '\\lambda': {
      symbol: '\\lambda',
      name: "Conductivité thermique du matériau",
      unit: '\\text{W/(m}\\cdot\\text{K)}',
      role: "Capacité d'un matériau à laisser passer la chaleur.",
      category: 'Thermique'
    },
    'R': {
      symbol: 'R',
      name: "Résistance thermique de la paroi",
      unit: '\\text{m}^2\\cdot\\text{K/W}',
      role: "Pouvoir isolant de l'élément de paroi : R = e / \\lambda.",
      category: 'Thermique'
    }
  },
  beton_arme: {
    'h': {
      symbol: 'h',
      name: "Hauteur totale de section",
      unit: '\\text{mm ou cm}',
      role: "Hauteur transversale totale de la poutre en béton armé.",
      category: 'Béton Armé'
    },
    'b': {
      symbol: 'b',
      name: "Largeur de la section",
      unit: '\\text{mm ou cm}',
      role: "Largeur transversale de la nervure ou de la table de compression.",
      category: 'Béton Armé'
    },
    'd': {
      symbol: 'd',
      name: "Hauteur utile de calcul",
      unit: '\\text{mm ou cm}',
      role: "Distance de la fibre comprimée au centre de gravité des armatures (d \\approx 0{,}9h).",
      category: 'Béton Armé'
    },
    'A_s': {
      symbol: 'A_s',
      name: "Section d'acier d'armature tendue",
      unit: '\\text{cm}^2 \\text{ ou } \\text{mm}^2',
      role: "Section totale des barres d'armatures longitudinales inférieures reprenant la flexion.",
      category: 'Béton Armé'
    },
    'z': {
      symbol: 'z',
      name: "Bras de levier interne",
      unit: '\\text{mm ou cm}',
      role: "Distance séparant la résultante comprimée du béton Fc et la traction Fs des aciers (z ≈ 0,9d).",
      category: 'Béton Armé'
    }
  },
  rdm: {
    '\\sigma': {
      symbol: '\\sigma',
      name: "Contrainte normale (Navier)",
      unit: '\\text{MPa}',
      role: "Contrainte normale : \\sigma = N/A + (M \\cdot y)/I.",
      category: 'RDM'
    },
    '\\tau': {
      symbol: '\\tau',
      name: "Contrainte tangentielle (Jourawski)",
      unit: '\\text{MPa}',
      role: "Contrainte de cisaillement : \\tau = (V \\cdot S)/(I \\cdot b).",
      category: 'RDM'
    },
    'E': {
      symbol: 'E',
      name: "Module d'élasticité de Young",
      unit: '\\text{GPa}',
      role: "Rigidité élastique intrinsèque du matériau.",
      category: 'RDM'
    },
    'I': {
      symbol: 'I',
      name: "Moment d'inertie quadratique",
      unit: '\\text{cm}^4',
      role: "Résistance géométrique de la section à la flexion.",
      category: 'RDM'
    }
  },
  hydraulique: {
    'H': {
      symbol: 'H',
      name: "Charge hydraulique totale",
      unit: '\\text{mCE (mètres de colonne d\'eau)}',
      role: "Énergie mécanique totale du fluide par unité de poids (Théorème de Bernoulli).",
      category: 'Hydraulique'
    },
    'Q': {
      symbol: 'Q',
      name: "Débit volumique",
      unit: '\\text{m}^3/\\text{s} \\text{ ou L/s}',
      role: "Volume d'eau s'écoulant à travers la section par seconde : Q = v \\cdot A.",
      category: 'Hydraulique'
    },
    'v': {
      symbol: 'v',
      name: "Vitesse moyenne d'écoulement",
      unit: '\\text{m/s}',
      role: "Vitesse moyenne de l'eau dans la conduite.",
      category: 'Hydraulique'
    },
    'D': {
      symbol: 'D',
      name: "Diamètre intérieur de la canalisation",
      unit: '\\text{mm ou m}',
      role: "Diamètre hydraulique utile de passage de l'eau.",
      category: 'Hydraulique'
    },
    'J': {
      symbol: 'J',
      name: "Perte de charge linéaire unitaire",
      unit: '\\text{m/m ou mm/m}',
      role: "Dissipation d'énergie par frottement visqueux par mètre de tuyau.",
      category: 'Hydraulique'
    }
  },
  geotechnique: {
    'H': {
      symbol: 'H',
      name: "Hauteur du mur de soutènement ou couche",
      unit: '\\text{m}',
      role: "Hauteur géométrique de sol soutenu par le mur.",
      category: 'Géotechnique'
    },
    'B': {
      symbol: 'B',
      name: "Largeur de la semelle de fondation",
      unit: '\\text{m}',
      role: "Largeur de contact sol-fondation gouvernant la capacité portante.",
      category: 'Fondations'
    },
    'q_u': {
      symbol: 'q_u',
      name: "Capacité portante ultime du sol",
      unit: '\\text{kPa ou MPa}',
      role: "Pression limite de rupture du sol sous la semelle calculée selon Terzaghi.",
      category: 'Géotechnique'
    }
  },
  fondations: {
    'H': {
      symbol: 'H',
      name: "Profondeur de la fondation ou fiche du pieu",
      unit: '\\text{m}',
      role: "Longueur d'ancrage du pieu dans la couche de bon sol porteur.",
      category: 'Fondations'
    },
    'B': {
      symbol: 'B',
      name: "Largeur de la semelle",
      unit: '\\text{m}',
      role: "Dimension transversale de la semelle superficielle.",
      category: 'Fondations'
    }
  }
};

/**
 * Extraction intelligente, contextualisée et robuste des variables d'une formule LaTeX.
 * Filtre les doublons et adapte la signification selon le domaine (maths, physique, béton, rdm, hydraulique, géotech).
 */
export function extractVariablesFromLatex(latex = '', customVariables = [], domainOrSlug = '') {
  const normSlug = (domainOrSlug || '').replace(/-/g, '_').toLowerCase();
  const domainOverrides = DOMAIN_VARIABLE_OVERRIDES[normSlug] || {};

  if (customVariables && customVariables.length > 0) {
    return customVariables.map(v => {
      const cleanSym = String(v.symbol || '').trim();
      const override = domainOverrides[cleanSym] || domainOverrides[cleanSym.replace(/\\/g, '')];
      const dictMatch = override || VARIABLE_DICTIONARY[cleanSym] || VARIABLE_DICTIONARY[cleanSym.replace(/\\/g, '')];
      return {
        symbol: v.symbol || dictMatch?.symbol || 'x',
        name: v.name || dictMatch?.name || 'Grandeur physique',
        unit: v.unit || dictMatch?.unit || '-',
        role: v.role || v.meaning || dictMatch?.role || 'Paramètre intervenant dans la relation mathématique.',
        category: v.category || dictMatch?.category || 'Général'
      };
    });
  }

  const foundVars = [];
  const registeredSymbols = Object.keys(VARIABLE_DICTIONARY);

  // Trier par longueur décroissante pour matcher d'abord les symboles complexes (ex: M_{Ed} avant M)
  const sortedSymbols = [...registeredSymbols].sort((a, b) => b.length - a.length);

  const seenSymbols = new Set();

  for (const sym of sortedSymbols) {
    const escaped = sym.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
    const regex = new RegExp(`(^|[^a-zA-Z0-9_])${escaped}([^a-zA-Z0-9_]|$)`);
    if (regex.test(latex)) {
      // Priorité absolue à l'override contextuel du domaine
      const item = domainOverrides[sym] || VARIABLE_DICTIONARY[sym];
      if (item && !seenSymbols.has(item.symbol)) {
        seenSymbols.add(item.symbol);
        foundVars.push(item);
      }
    }
  }

  // Fallback si rien n'a été trouvé
  if (foundVars.length === 0) {
    return [
      {
        symbol: 'S_{Ed}',
        name: 'Sollicitation de calcul (Effet des actions majorées)',
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
