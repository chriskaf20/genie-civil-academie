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
    role: 'Capacité portante axiale maximale admissible de la section.',
    category: 'Eurocodes'
  },
  'N_{b,Rd}': {
    symbol: 'N_{b,Rd}',
    name: 'Effort normal résistant au flambement',
    unit: '\\text{kN}',
    role: 'Capacité portante axiale réduite prenant en compte le risque d\'instabilité par flambement.',
    category: 'Métal / Eurocode 3'
  },
  'P_{cr}': {
    symbol: 'P_{cr}',
    name: 'Charge critique d\'Euler',
    unit: '\\text{kN}',
    role: 'Force axiale théorique exacte provoquant le flambage brusque d\'une colonne élancée.',
    category: 'Stabilité / RDM'
  },
  'V': {
    symbol: 'V',
    name: 'Effort tranchant',
    unit: '\\text{kN}',
    role: 'Force transversale cherchant à cisailler et couper la pièce perpendiculairement à son axe.',
    category: 'RDM'
  },
  'V_{Ed}': {
    symbol: 'V_{Ed}',
    name: 'Effort tranchant sollicitant de calcul',
    unit: '\\text{kN}',
    role: 'Cisaillement de calcul à l\'ELU, maximal aux abords immédiats des appuis.',
    category: 'Béton Armé / Eurocode 2'
  },
  'V_{Rd,c}': {
    symbol: 'V_{Rd,c}',
    name: 'Résistance au cisaillement du béton seul',
    unit: '\\text{kN}',
    role: 'Effort tranchant repris sans armatures d\'âme (engrenage des granulats + zone comprimée).',
    category: 'Béton Armé'
  },
  'V_{Rd,s}': {
    symbol: 'V_{Rd,s}',
    name: 'Résistance des armatures transversales au cisaillement',
    unit: '\\text{kN}',
    role: 'Effort tranchant repris par les cadres et étriers en acier cousant les fissures inclinées.',
    category: 'Béton Armé'
  },
  'V_{Rd,max}': {
    symbol: 'V_{Rd,max}',
    name: 'Résistance maximale de la bielle comprimée de béton',
    unit: '\\text{kN}',
    role: 'Limite absolue de cisaillement pour éviter l\'écrasement prématuré des bielles de béton inclinées.',
    category: 'Béton Armé / Eurocode 2'
  },
  'F_c': {
    symbol: 'F_c',
    name: 'Résultante de compression du béton',
    unit: '\\text{kN}',
    role: 'Force totale résultante exercée par le bloc comprimé de béton en flexion.',
    category: 'Béton Armé'
  },
  'F_s': {
    symbol: 'F_s',
    name: 'Résultante de traction des aciers',
    unit: '\\text{kN}',
    role: 'Force totale développée par l\'ensemble des barres d\'armatures tendues (Fs = As · fyd).',
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
  '\\sigma_0': {
    symbol: '\\sigma_0',
    name: 'Contrainte géostatique initiale / précontrainte initiale',
    unit: '\\text{MPa}',
    role: 'État de contrainte naturelle du massif avant creusement ou tension initiale des câbles.',
    category: 'Tunnels / Précontrainte'
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
    name: 'Contrainte de cisaillement maximale',
    unit: '\\text{MPa}',
    role: 'Pic de cisaillement situé au niveau de la fibre neutre (pour un rectangle: \\tau_{max} = 1,5 · V/A).',
    category: 'RDM'
  },
  '\\varepsilon': {
    symbol: '\\varepsilon',
    name: 'Déformation relative unitaire',
    unit: '\\text{sans unité (ou } \\%o\\text{)}',
    role: 'Variation relative de longueur d\'un tronçon sous contrainte : \\varepsilon = \\Delta L / L_0.',
    category: 'RDM'
  },
  '\\varepsilon_c': {
    symbol: '\\varepsilon_c',
    name: 'Déformation du béton en compression',
    unit: '\\%o',
    role: 'Raccourcissement de la fibre supérieure comprimée de béton (≤ 3,5 ‰ à l\'ELU).',
    category: 'Béton Armé'
  },
  '\\varepsilon_{cu}': {
    symbol: '\\varepsilon_{cu}',
    name: 'Raccourcissement ultime du béton',
    unit: '\\%o',
    role: 'Déformation maximale avant écrasement du béton (3,5 ‰ pour bétons ≤ C50/60).',
    category: 'Béton Armé'
  },
  '\\varepsilon_s': {
    symbol: '\\varepsilon_s',
    name: 'Allongement de l\'acier en traction',
    unit: '\\%o',
    role: 'Allongement des armatures sous charge (doit rester ≤ 10 ‰ selon le pivot A/B).',
    category: 'Béton Armé'
  },
  '\\varepsilon_{uk}': {
    symbol: '\\varepsilon_{uk}',
    name: 'Allongement caractéristique à rupture de l\'acier',
    unit: '\\%',
    role: 'Ductilité garantie de l\'acier (≥ 5 % pour acier classe B, ≥ 7,5 % pour classe C parasismique).',
    category: 'Matériaux'
  },

  // ── 4. Dimensions Géométriques ───────────────────────────────────────────
  'b': {
    symbol: 'b',
    name: 'Largeur de la section droite',
    unit: '\\text{mm} \\text{ ou } \\text{m}',
    role: 'Largeur transversale de la poutre, du poteau ou de la semelle.',
    category: 'Géométrie'
  },
  'b_w': {
    symbol: 'b_w',
    name: 'Épaisseur de l\'âme',
    unit: '\\text{mm}',
    role: 'Largeur utile de la partie verticale (âme) reprenant l\'effort tranchant.',
    category: 'Géométrie'
  },
  'b_{eff}': {
    symbol: 'b_{eff}',
    name: 'Largeur efficace de la table de compression',
    unit: '\\text{mm}',
    role: 'Largeur de dalle participant effectivement à la flexion d\'une poutre en T.',
    category: 'Béton Armé'
  },
  'h': {
    symbol: 'h',
    name: 'Hauteur totale de la section',
    unit: '\\text{mm} \\text{ ou } \\text{m}',
    role: 'Dimension verticale complète de l\'élément porteur.',
    category: 'Géométrie'
  },
  'h_f': {
    symbol: 'h_f',
    name: 'Épaisseur de la membrure / table de compression',
    unit: '\\text{mm}',
    role: 'Épaisseur de la dalle supérieure liée à la nervure de la poutre.',
    category: 'Béton Armé'
  },
  'd': {
    symbol: 'd',
    name: 'Hauteur utile de la section',
    unit: '\\text{mm}',
    role: 'Distance entre la fibre comprimée supérieure et le centre de gravité des aciers tendus (d ≈ 0,9·h).',
    category: 'Béton Armé'
  },
  'd\'': {
    symbol: 'd\'',
    name: 'Distance aux armatures comprimées supérieures',
    unit: '\\text{mm}',
    role: 'Distance entre le bord supérieur comprimé et l\'axe des aciers de montage A\'s.',
    category: 'Béton Armé'
  },
  'z': {
    symbol: 'z',
    name: 'Bras de levier interne',
    unit: '\\text{mm}',
    role: 'Distance interne séparant la force de compression Fc et la force de traction Fs (z ≈ 0,9·d).',
    category: 'Béton Armé'
  },
  'x': {
    symbol: 'x',
    name: 'Position de l\'axe neutre',
    unit: '\\text{mm}',
    role: 'Hauteur de béton travaillant en compression mesurée depuis la fibre supérieure.',
    category: 'Béton Armé'
  },
  'x_u': {
    symbol: 'x_u',
    name: 'Hauteur de l\'axe neutre à l\'ELU',
    unit: '\\text{mm}',
    role: 'Profondeur de la zone comprimée de calcul à l\'État Limite Ultime (x_u = \\lambda · x).',
    category: 'Béton Armé'
  },
  'y': {
    symbol: 'y',
    name: 'Distance à l\'axe neutre',
    unit: '\\text{mm}',
    role: 'Coordonnée verticale mesurée depuis le centre de gravité G de la section.',
    category: 'RDM'
  },
  'A': {
    symbol: 'A',
    name: 'Aire de la section droite',
    unit: '\\text{cm}^2 \\text{ ou } \\text{mm}^2',
    role: 'Surface totale transversale de l\'élément résistant.',
    category: 'Géométrie'
  },
  'A_c': {
    symbol: 'A_c',
    name: 'Section brute de béton',
    unit: '\\text{cm}^2 \\text{ ou } \\text{m}^2',
    role: 'Aire géométrique totale du béton sans déduction des armatures (Ac = b · h).',
    category: 'Béton Armé'
  },
  'A_s': {
    symbol: 'A_s',
    name: 'Section des armatures longitudinales tendues',
    unit: '\\text{cm}^2 \\text{ ou } \\text{mm}^2',
    role: 'Surface totale d\'acier requise pour reprendre la totalité de l\'effort de traction.',
    category: 'Béton Armé'
  },
  'A_s\'': {
    symbol: 'A_s\'',
    name: 'Section des armatures comprimées supérieures',
    unit: '\\text{cm}^2',
    role: 'Aciers additionnels placés en zone comprimée pour soulager un béton surchargé.',
    category: 'Béton Armé'
  },
  'A_{s,min}': {
    symbol: 'A_{s,min}',
    name: 'Section minimale réglementaire d\'acier',
    unit: '\\text{cm}^2',
    role: 'Ferraillage minimal de non-fragilité imposé par l\'Eurocode 2 pour éviter une rupture brutale dès la première fissure.',
    category: 'Eurocode 2'
  },
  'A_{sw}': {
    symbol: 'A_{sw}',
    name: 'Section d\'un cours d\'armatures transversales',
    unit: '\\text{cm}^2 \\text{ ou } \\text{mm}^2',
    role: 'Somme des sections des brins verticaux d\'un cadre ou étrier reprenant le cisaillement.',
    category: 'Béton Armé'
  },
  's': {
    symbol: 's',
    name: 'Espacement des cadres / étriers',
    unit: '\\text{cm} \\text{ ou } \\text{mm}',
    role: 'Distance longitudinale séparant deux cadres successifs le long de la poutre (ex: s = 15 cm).',
    category: 'Béton Armé'
  },
  'I': {
    symbol: 'I',
    name: 'Moment d\'inertie quadratique',
    unit: '\\text{cm}^4 \\text{ ou } \\text{mm}^4',
    role: 'Capacité géométrique de la section à s\'opposer à la flexion (pour un rectangle: I = bh³/12).',
    category: 'RDM'
  },
  'I_y': {
    symbol: 'I_y',
    name: 'Moment d\'inertie selon l\'axe fort y',
    unit: '\\text{cm}^4',
    role: 'Inertie principale reprise en flexion verticale (axe horizontal).',
    category: 'RDM / Métal'
  },
  'I_z': {
    symbol: 'I_z',
    name: 'Moment d\'inertie selon l\'axe faible z',
    unit: '\\text{cm}^4',
    role: 'Inertie secondaire déterminante pour le risque de flambement ou déversement latéral.',
    category: 'RDM / Métal'
  },
  'W_{el}': {
    symbol: 'W_{el}',
    name: 'Module d\'inertie élastique (I/v)',
    unit: '\\text{cm}^3',
    role: 'Rapport I / v permettant de calculer directement la contrainte maximale : \\sigma_{max} = M / W_{el}.',
    category: 'RDM'
  },
  'W_{pl}': {
    symbol: 'W_{pl}',
    name: 'Module d\'inertie plastique',
    unit: '\\text{cm}^3',
    role: 'Module résistant lorsque toute la section métallique a atteint son palier plastique.',
    category: 'Métal / Eurocode 3'
  },
  'i': {
    symbol: 'i',
    name: 'Rayon de giration',
    unit: '\\text{cm} \\text{ ou } \\text{mm}',
    role: 'Distance caractéristique de distribution de la matière : i = \\sqrt{I/A}.',
    category: 'Stabilité / Flambement'
  },
  '\\lambda': {
    symbol: '\\lambda',
    name: 'Élancement de la colonne',
    unit: '\\text{sans unité}',
    role: 'Rapport \\lambda = L_{cr} / i mesurant la minceur du poteau et son risque de flambement.',
    category: 'Stabilité / Eurocodes'
  },
  'L': {
    symbol: 'L',
    name: 'Portée libre entre appuis',
    unit: '\\text{m}',
    role: 'Distance séparant deux appuis consécutifs de la structure.',
    category: 'Géométrie'
  },
  'L_{cr}': {
    symbol: 'L_{cr}',
    name: 'Longueur de flambement (longueur critique)',
    unit: '\\text{m}',
    role: 'Longueur équivalente d\'une barre articulée-articulée : L_{cr} = K \\cdot L.',
    category: 'Stabilité'
  },
  'c': {
    symbol: 'c',
    name: 'Enrobage nominal du béton / Cohésion du sol',
    unit: '\\text{mm} \\text{ ou } \\text{kPa}',
    role: 'Épaisseur de béton protecteur entourant les aciers (30-45 mm) ou cohésion géotechnique.',
    category: 'Béton Armé / Sol'
  },
  'c_{nom}': {
    symbol: 'c_{nom}',
    name: 'Enrobage nominal de calcul',
    unit: '\\text{mm}',
    role: 'Enrobage minimal prescrit augmenté de la marge de tolérance d\'exécution (\\Delta c_{dev} = 10 \\text{ mm}).',
    category: 'Eurocode 2'
  },
  'B': {
    symbol: 'B',
    name: 'Largeur de semelle de fondation / Diamètre pieu',
    unit: '\\text{m}',
    role: 'Dimension transversale au sol répartissant la charge sur le terrain.',
    category: 'Fondations'
  },
  'D': {
    symbol: 'D',
    name: 'Profondeur d\'ancrage de la fondation',
    unit: '\\text{m}',
    role: 'Niveau d\'encastrement sous le terrain naturel pour atteindre le bon sol porteur hors-gel.',
    category: 'Fondations'
  },
  'R': {
    symbol: 'R',
    name: 'Rayon de courbure en plan / Rayon de tunnel',
    unit: '\\text{m}',
    role: 'Rayon géométrique de la courbe routière/ferroviaire ou rayon d\'excavation du tunnelier.',
    category: 'Infrastructures'
  },

  // ── 5. Matériaux & Propriétés Physiques ──────────────────────────────────
  'E': {
    symbol: 'E',
    name: 'Module d\'élasticité longitudinale (Young)',
    unit: '\\text{GPa} \\text{ ou } \\text{MPa}',
    role: 'Rigidité intrinsèque du matériau sous tension/compression (Acier: 210 GPa, Béton: 30-35 GPa, Bois: 11 GPa).',
    category: 'Matériaux'
  },
  'E_{cm}': {
    symbol: 'E_{cm}',
    name: 'Module sécant d\'élasticité du béton',
    unit: '\\text{GPa}',
    role: 'Rigidité moyenne du béton à 28 jours : E_{cm} = 22 \\cdot (f_{cm}/10)^{0{,}3} \\text{ GPa}.',
    category: 'Béton Armé'
  },
  'E_s': {
    symbol: 'E_s',
    name: 'Module d\'Young de l\'acier d\'armature',
    unit: '200\\,000 \\text{ MPa}',
    role: 'Module élastique conventionnel de l\'acier d\'armature selon l\'Eurocode 2 (200 GPa).',
    category: 'Béton Armé'
  },
  'G': {
    symbol: 'G',
    name: 'Module de cisaillement transversal (Coulomb) / Charge permanente',
    unit: '\\text{GPa} \\text{ ou } \\text{kN/m}',
    role: 'Rigidité du matériau au glissement (G ≈ E / [2(1+ν)]) ou poids propre permanent G.',
    category: 'Matériaux / Charges'
  },
  '\\nu': {
    symbol: '\\nu',
    name: 'Coefficient de Poisson',
    unit: '\\text{sans unité}',
    role: 'Rapport entre déformation transversale et axiale (acier: 0,3 ; béton fissuré: 0 ; non-fissuré: 0,2).',
    category: 'Matériaux'
  },
  'f_{ck}': {
    symbol: 'f_{ck}',
    name: 'Résistance caractéristique à la compression du béton',
    unit: '\\text{MPa}',
    role: 'Résistance mesurée sur cylindre à 28 jours avec 95 % de garantie statistique (C25/30 → fck = 25 MPa).',
    category: 'Béton Armé'
  },
  'f_{cd}': {
    symbol: 'f_{cd}',
    name: 'Résistance de calcul du béton en compression',
    unit: '\\text{MPa}',
    role: 'Résistance admissible en calcul : f_{cd} = \\alpha_{cc} \\cdot f_{ck} / \\gamma_c (ex: 0,85 × 25 / 1,5 = 14,17 MPa).',
    category: 'Béton Armé / Eurocode 2'
  },
  'f_{yk}': {
    symbol: 'f_{yk}',
    name: 'Limite d\'élasticité caractéristique de l\'acier',
    unit: '\\text{MPa}',
    role: 'Contrainte marquant le début de plastification irréversible de l\'acier (Acier HA FeE500 → fyk = 500 MPa).',
    category: 'Aciers'
  },
  'f_{yd}': {
    symbol: 'f_{yd}',
    name: 'Résistance de calcul de l\'acier en traction',
    unit: '\\text{MPa}',
    role: 'Limite de calcul de l\'acier : f_{yd} = f_{yk} / \\gamma_s (ex: 500 / 1,15 = 434,8 MPa).',
    category: 'Béton Armé / Eurocodes'
  },
  'f_{ctm}': {
    symbol: 'f_{ctm}',
    name: 'Résistance moyenne du béton en traction',
    unit: '\\text{MPa}',
    role: 'Faible capacité du béton à résister à l\'étirement avant fissuration (f_{ctm} ≈ 0,30 · f_{ck}^{2/3} ≈ 2,6 MPa).',
    category: 'Béton Armé'
  },
  'f_y': {
    symbol: 'f_y',
    name: 'Limite d\'élasticité des profilés en acier',
    unit: '\\text{MPa}',
    role: 'Nuance de l\'acier structural métallique (ex: S235 → fy = 235 MPa, S355 → fy = 355 MPa).',
    category: 'Métal / Eurocode 3'
  },
  'f_m': {
    symbol: 'f_m',
    name: 'Résistance caractéristique en flexion du bois',
    unit: '\\text{MPa}',
    role: 'Capacité en flexion des pièces de charpente en bois (ex: bois massif C24 → fm,k = 24 MPa).',
    category: 'Bois / Eurocode 5'
  },
  '\\alpha_{cc}': {
    symbol: '\\alpha_{cc}',
    name: 'Coefficient de réduction de durée de charge',
    unit: '0{,}85 \\text{ à } 1{,}00',
    role: 'Prend en compte la légère fatigue du béton sous charge de très longue durée (0,85 en France).',
    category: 'Béton Armé'
  },
  '\\mu': {
    symbol: '\\mu',
    name: 'Moment réduit de flexion (adimensionnel)',
    unit: '\\text{sans unité}',
    role: 'Rapport adimensionnel \\mu = M_{Ed} / (b · d^2 · f_{cd}) qualifiant l\'intensité du travail de la section.',
    category: 'Béton Armé'
  },
  '\\rho': {
    symbol: '\\rho',
    name: 'Masse volumique',
    unit: '\\text{kg/m}^3',
    role: 'Masse par unité de volume (Eau: 1000 kg/m³, Acier: 7850 kg/m³, Béton armé: 2500 kg/m³).',
    category: 'Physique'
  },
  '\\gamma': {
    symbol: '\\gamma',
    name: 'Poids volumique',
    unit: '\\text{kN/m}^3',
    role: 'Poids par mètre cube : \\gamma = \\rho \\cdot g (Eau: 10 kN/m³, Béton: 25 kN/m³, Sol sec: 18 kN/m³).',
    category: 'Physique / Sol'
  },
  '\\gamma_{sat}': {
    symbol: '\\gamma_{sat}',
    name: 'Poids volumique saturé du sol sous la nappe',
    unit: '\\text{kN/m}^3',
    role: 'Poids d\'un sol dont l\'intégralité des pores est remplie d\'eau (19-21 kN/m³).',
    category: 'Géotechnique'
  },
  '\\gamma\'': {
    symbol: '\\gamma\'',
    name: 'Poids volumique déjaugé du sol',
    unit: '\\text{kN/m}^3',
    role: 'Poids effectif du sol après déduction de la poussée d\'Archimède : \\gamma\' = \\gamma_{sat} - 10 \\text{ kN/m}³.',
    category: 'Géotechnique'
  },

  // ── 6. Coefficients de Sécurité ──────────────────────────────────────────
  '\\gamma_G': {
    symbol: '\\gamma_G',
    name: 'Coefficient partiel de sécurité pour charges permanentes',
    unit: '1{,}35',
    role: 'Majoration réglementaire à l\'ELU sur les poids propres et charges fixes défavorables (Eurocode 0).',
    category: 'Eurocodes'
  },
  '\\gamma_Q': {
    symbol: '\\gamma_Q',
    name: 'Coefficient partiel de sécurité pour charges variables',
    unit: '1{,}50',
    role: 'Majoration réglementaire à l\'ELU sur les charges d\'exploitation, vent et neige (Eurocode 0).',
    category: 'Eurocodes'
  },
  '\\gamma_c': {
    symbol: '\\gamma_c',
    name: 'Coefficient partiel de sécurité du béton',
    unit: '1{,}50',
    role: 'Minorateur de sécurité appliqué à la résistance du béton en situation durable (1,20 en accidentel).',
    category: 'Béton Armé'
  },
  '\\gamma_s': {
    symbol: '\\gamma_s',
    name: 'Coefficient partiel de sécurité de l\'acier',
    unit: '1{,}15',
    role: 'Minorateur de sécurité appliqué à la résistance des armatures en situation durable (1,0 en accidentel).',
    category: 'Eurocodes'
  },
  '\\gamma_M': {
    symbol: '\\gamma_M',
    name: 'Coefficient partiel général de sécurité matériau',
    unit: '\\text{sans unité}',
    role: 'Coefficient garantissant la marge entre résistance caractéristique d\'usine et calcul d\'exécution.',
    category: 'Eurocodes'
  },
  '\\xi': {
    symbol: '\\xi',
    name: 'Facteur de réduction des charges permanentes favorables / corrélation',
    unit: '0{,}85',
    role: 'Facteur combinatoire Eurocode pour optimiser les calculs ou corrélation d\'essais de sol.',
    category: 'Eurocodes'
  },
  '\\psi_0': {
    symbol: '\\psi_0',
    name: 'Facteur de combinaison pour action variable d\'accompagnement',
    unit: '0{,}7 \\text{ (bâtiment)}',
    role: 'Réduction de probabilité de survenue simultanée de plusieurs charges variables au pic d\'intensité.',
    category: 'Eurocode 0'
  },

  // ── 7. Déformations & Flèches ────────────────────────────────────────────
  '\\delta': {
    symbol: '\\delta',
    name: 'Flèche (déplacement vertical)',
    unit: '\\text{mm}',
    role: 'Déformation maximale de la poutre sous charges de service (doit rester ≤ L/250 ou L/500).',
    category: 'RDM / ELS'
  },
  '\\delta_{max}': {
    symbol: '\\delta_{max}',
    name: 'Flèche maximale admissible',
    unit: '\\text{mm}',
    role: 'Seuil réglementaire pour éviter les fissures dans les cloisons et désordres de vitrage.',
    category: 'ELS'
  },
  'f': {
    symbol: 'f',
    name: 'Flèche / coefficient de frottement',
    unit: '\\text{mm} \\text{ ou sans unité}',
    role: 'Déplacement vertical de flexion ou coefficient de frottement de contact.',
    category: 'RDM / Mécanique'
  },
  'w': {
    symbol: 'w',
    name: 'Ouverture de fissure',
    unit: '\\text{mm}',
    role: 'Largeur maximale des fissures en surface du béton (doit rester ≤ 0,30 mm pour la durabilité).',
    category: 'Béton Armé / ELS'
  },
  '\\theta': {
    symbol: '\\theta',
    name: 'Angle de rotation de la section / Inclinaison des bielles',
    unit: '^{\\circ} \\text{ ou rad}',
    role: 'Pente de la déformée en un point ou inclinaison des bielles comprimées (21,8° ≤ θ ≤ 45°).',
    category: 'RDM / Béton Armé'
  },
  '\\Delta L': {
    symbol: '\\Delta L',
    name: 'Allongement absolu',
    unit: '\\text{mm}',
    role: 'Variation totale de longueur : \\Delta L = (N \\cdot L) / (E \\cdot A).',
    category: 'RDM'
  },
  '\\Delta T': {
    symbol: '\\Delta T',
    name: 'Variation de température',
    unit: '^{\\circ}\\text{C} \\text{ ou K}',
    role: 'Écart thermique saisonnier générant de la dilatation ou contraction libre/bloquée.',
    category: 'Physique / Thermique'
  },

  // ── 8. Géotechnique, Sols & Soutènements ──────────────────────────────────
  'q_u': {
    symbol: 'q_u',
    name: 'Contrainte de rupture ultime du sol',
    unit: '\\text{kPa} \\text{ ou } \\text{MPa}',
    role: 'Pression maximale absolue que le sol peut encaisser sous une fondation avant poinçonnement.',
    category: 'Géotechnique'
  },
  'q_{adm}': {
    symbol: 'q_{adm}',
    name: 'Contrainte admissible de calcul du sol',
    unit: '\\text{bars} \\text{ ou } \\text{kPa}',
    role: 'Pression de travail autorisée sous la semelle avec coefficient de sécurité (q_u / 3).',
    category: 'Fondations'
  },
  '\\phi\'': {
    symbol: '\\phi\'',
    name: 'Angle de frottement interne effectif du sol',
    unit: '^{\\circ}',
    role: 'Capacité des grains de sol à s\'imbriquer sous contrainte normale (sable: 30-40°, argile: 15-25°).',
    category: 'Géotechnique'
  },
  'c\'': {
    symbol: 'c\'',
    name: 'Cohésion effective du sol',
    unit: '\\text{kPa}',
    role: 'Force d\'attraction physico-chimique entre particules fines indépendant de la pression (sable: c\'=0).',
    category: 'Géotechnique'
  },
  'K_a': {
    symbol: 'K_a',
    name: 'Coefficient de poussée active des terres (Rankine)',
    unit: '\\text{sans unité}',
    role: 'Facteur de poussée exercé par le sol qui pousse sur le mur : K_a = \\tan^2(45° - \\phi/2) ≈ 0,33.',
    category: 'Soutènements'
  },
  'K_p': {
    symbol: 'K_p',
    name: 'Coefficient de butée passive des terres',
    unit: '\\text{sans unité}',
    role: 'Résistance offerte par le sol poussé devant la fiche : K_p = 1 / K_a = \\tan^2(45° + \\phi/2) ≈ 3,0.',
    category: 'Soutènements'
  },
  'K_0': {
    symbol: 'K_0',
    name: 'Coefficient de pression des terres au repos',
    unit: '\\text{sans unité}',
    role: 'État de poussée naturelle sans déplacement du mur : K_0 ≈ 1 - \\sin(\\phi\').',
    category: 'Géotechnique'
  },
  'E_{sol}': {
    symbol: 'E_{sol}',
    name: 'Module pressiométrique Ménard / Module de Young du sol',
    unit: '\\text{MPa}',
    role: 'Rigidité du sol mesurée in-situ pour le calcul des tassements de fondations.',
    category: 'Géotechnique'
  },
  'CBR': {
    symbol: 'CBR',
    name: 'Indice Portant Californien (California Bearing Ratio)',
    unit: '\\%',
    role: 'Indicateur de portance du sol support pour le dimensionnement des chaussées routières (ex: CBR ≥ 8).',
    category: 'Routes'
  },
  'EV_2': {
    symbol: 'EV_2',
    name: 'Module de déformation à la plaque au 2ème cycle',
    unit: '\\text{MPa}',
    role: 'Contrôle de compactage de plate-forme de terrassement (PF2: EV2 ≥ 50 MPa, PF3: EV2 ≥ 120 MPa).',
    category: 'Terrassement'
  },
  'u': {
    symbol: 'u',
    name: 'Pression interstitielle de l\'eau dans le sol',
    unit: '\\text{kPa}',
    role: 'Pression de l\'eau présente dans les pores du sol, qui réduit la contrainte effective : \\sigma\' = \\sigma - u.',
    category: 'Géotechnique'
  },

  // ── 9. Hydraulique & Fluides ─────────────────────────────────────────────
  'Q': {
    symbol: 'Q',
    name: 'Débit volumique d\'écoulement / Charge variable',
    unit: '\\text{m}^3\\text{/s} \\text{ ou } \\text{L/s}',
    role: 'Volume de fluide traversant la section par seconde : Q = v × S.',
    category: 'Hydraulique'
  },
  'v': {
    symbol: 'v',
    name: 'Vitesse moyenne d\'écoulement',
    unit: '\\text{m/s}',
    role: 'Vitesse du fluide dans la conduite ou le canal (admissible entre 0,6 et 2,5 m/s pour éviter dépôts et érosion).',
    category: 'Hydraulique'
  },
  'p': {
    symbol: 'p',
    name: 'Pression hydrostatique',
    unit: '\\text{bar} \\text{ ou } \\text{kPa}',
    role: 'Pression exercée par la colonne d\'eau au repos : p = \\rho \\cdot g \\cdot h (1 bar ≈ 10 mCE).',
    category: 'Hydraulique'
  },
  'H': {
    symbol: 'H',
    name: 'Charge hydraulique totale de Bernoulli',
    unit: '\\text{mCE}',
    role: 'Énergie totale du fluide par unité de poids : H = z + p/(\\rho g) + v^2 / (2g).',
    category: 'Hydraulique'
  },
  'J': {
    symbol: 'J',
    name: 'Perte de charge linéaire unitaire',
    unit: '\\text{m/m} \\text{ ou } \\text{mm/m}',
    role: 'Perte d\'énergie hydraulique par frottement le long de chaque mètre linéaire de canalisation.',
    category: 'Hydraulique'
  },
  'k_s': {
    symbol: 'k_s',
    name: 'Coefficient de rugosité de Manning-Strickler',
    unit: '\\text{m}^{1/3}\\text{/s}',
    role: 'Indicateur de rugosité de la paroi (PVC: 100, Béton lisse: 75, Canal en terre: 30-40).',
    category: 'Hydraulique'
  },
  'R_h': {
    symbol: 'R_h',
    name: 'Rayon hydraulique de la section',
    unit: '\\text{m}',
    role: 'Rapport entre la section mouillée Sm et le périmètre mouillé Pm : R_h = S_m / P_m.',
    category: 'Hydraulique'
  },
  'g': {
    symbol: 'g',
    name: 'Accélération de la pesanteur',
    unit: '9{,}81 \\text{ m/s}^2',
    role: 'Accélération gravitationnelle terrestre standard.',
    category: 'Physique'
  },

  // ── 10. Infrastructures & Transports ─────────────────────────────────────
  'V_{85}': {
    symbol: 'V_{85}',
    name: 'Vitesse du 85ème percentile',
    unit: '\\text{km/h}',
    role: 'Vitesse en dessous de laquelle circulent 85 % des usagers en conditions fluides sur la route.',
    category: 'Routes'
  },
  'd_a': {
    symbol: 'd_a',
    name: 'Distance d\'arrêt d\'urgence',
    unit: '\\text{m}',
    role: 'Distance totale de réaction + freinage nécessaire pour immobiliser un véhicule : d_a = d_r + d_f.',
    category: 'Routes'
  },
  'd_{th}': {
    symbol: 'd_{th}',
    name: 'Dévers théorique ferroviaire',
    unit: '\\text{mm}',
    role: 'Surélévation du rail extérieur en courbe pour compenser l\'accélération centrifuge : d_{th} ≈ 11,8 · V²/R.',
    category: 'Ferroviaire'
  },
  'I': {
    symbol: 'I',
    name: 'Insuffisance de dévers ferroviaire / Moment d\'inertie',
    unit: '\\text{mm} \\text{ ou } \\text{cm}^4',
    role: 'Écart entre dévers théorique et dévers réel posé en voie (doit rester ≤ 100 à 130 mm sur LGV).',
    category: 'Ferroviaire'
  },
  'q': {
    symbol: 'q',
    name: 'Charge linéique uniforme répartie',
    unit: '\\text{kN/m}',
    role: 'Charge distribuée de façon homogène sur chaque mètre de longueur de la structure.',
    category: 'Charges'
  },
  'S_{ed}': {
    symbol: 'S_{ed}',
    name: 'Sollicitation de calcul (Effet des actions majorées)',
    unit: '\\text{kN} \\text{ ou } \\text{kN}\\cdot\\text{m}',
    role: 'L\'effort total appliqué à la structure à l\'ELU : S_{ed} = \\gamma_G G + \\gamma_Q Q.',
    category: 'Sécurité Eurocodes'
  },
  'S_{Ed}': {
    symbol: 'S_{Ed}',
    name: 'Sollicitation de calcul à l\'ELU',
    unit: '\\text{kN} \\text{ ou } \\text{kN}\\cdot\\text{m}',
    role: 'L\'effort total appliqué à la structure : S_{Ed} = 1,35 G + 1,50 Q.',
    category: 'Sécurité Eurocodes'
  },
  'R_{cd}': {
    symbol: 'R_{cd}',
    name: 'Résistance de calcul de la section',
    unit: '\\text{kN} \\text{ ou } \\text{kN}\\cdot\\text{m}',
    role: 'La capacité portante maximale de l\'élément. On doit toujours respecter S_{ed} ≤ R_{cd}.',
    category: 'Sécurité Eurocodes'
  },
  'R_d': {
    symbol: 'R_d',
    name: 'Résistance de calcul de la section',
    unit: '\\text{kN} \\text{ ou } \\text{kN}\\cdot\\text{m}',
    role: 'Capacité portante admissible de calcul déterminée selon les Eurocodes.',
    category: 'Sécurité Eurocodes'
  },
  'f_k': {
    symbol: 'f_k',
    name: 'Résistance caractéristique nominale du matériau',
    unit: '\\text{MPa}',
    role: 'Résistance brute garantie statistiquement avant application du coefficient de sécurité γ_M.',
    category: 'Matériaux'
  }
};

/**
 * Extraction intelligente et robuste des variables d'une formule LaTeX.
 * Filtre les doublons et classe par pertinence physique.
 */
export function extractVariablesFromLatex(latex = '', customVariables = []) {
  if (customVariables && customVariables.length > 0) {
    return customVariables.map(v => {
      const cleanSym = String(v.symbol || '').trim();
      const dictMatch = VARIABLE_DICTIONARY[cleanSym] || VARIABLE_DICTIONARY[cleanSym.replace(/\\/g, '')];
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
      const item = VARIABLE_DICTIONARY[sym];
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
