export const glossaryData = [
  /* ── Mathématiques & Géométrie ── */
  { fr: 'Hypoténuse', en: 'Hypotenuse', definition: 'Côté le plus long d\'un triangle rectangle, opposé à l\'angle droit.', category: 'Mathématiques' },
  { fr: 'Trigonométrie', en: 'Trigonometry', definition: 'Branche des mathématiques étudiant les relations entre angles et longueurs.', category: 'Mathématiques' },
  { fr: 'Pente', en: 'Slope / Grade', definition: 'Rapport entre la montée verticale et la distance horizontale (tan θ).', category: 'Mathématiques' },
  { fr: 'Vecteur', en: 'Vector', definition: 'Grandeur physique dotée d\'une magnitude, d\'une direction et d\'un sens.', category: 'Mathématiques' },
  { fr: 'Moment d\'inertie', en: 'Second Moment of Area (I)', definition: 'Résistance d\'une section à la flexion, en mm⁴ ou cm⁴.', category: 'Calcul structurel' },

  /* ── Résistance des Matériaux ── */
  { fr: 'Moment fléchissant', en: 'Bending Moment (M)', definition: 'Effort interne de flexion agissant dans une poutre, exprimé en kN·m.', category: 'Calcul structurel' },
  { fr: 'Effort tranchant', en: 'Shear Force (V)', definition: 'Force interne transversale agissant sur une section, en kN.', category: 'Calcul structurel' },
  { fr: 'Contrainte normale', en: 'Normal Stress (σ)', definition: 'Contrainte perpendiculaire à la section, σ = N/A, en MPa.', category: 'Calcul structurel' },
  { fr: 'Contrainte de cisaillement', en: 'Shear Stress (τ)', definition: 'Contrainte tangentielle à la section, τ = V·S/(I·b), en MPa.', category: 'Calcul structurel' },
  { fr: 'Déformation', en: 'Strain (ε)', definition: 'Changement de longueur relative d\'un élément : ε = ΔL/L (adimensionnel).', category: 'Calcul structurel' },
  { fr: 'Module d\'élasticité', en: 'Young\'s Modulus (E)', definition: 'Rapport contrainte/déformation dans le domaine élastique, en GPa ou MPa.', category: 'Matériaux' },
  { fr: 'Flèche', en: 'Deflection (δ)', definition: 'Déplacement transversal d\'une poutre sous charge, en mm.', category: 'Calcul structurel' },
  { fr: 'Flambage', en: 'Buckling', definition: 'Instabilité soudaine d\'un élément comprimé qui se déforme latéralement.', category: 'Calcul structurel' },
  { fr: 'Charge critique d\'Euler', en: 'Euler\'s Critical Load (Pcr)', definition: 'Charge axiale provoquant le flambage : Pcr = π²EI/(KL)².', category: 'Calcul structurel' },

  /* ── Béton & Matériaux ── */
  { fr: 'Béton armé', en: 'Reinforced Concrete (RC)', definition: 'Béton associé à des armatures en acier pour reprendre les efforts de traction.', category: 'Matériaux' },
  { fr: 'Résistance caractéristique', en: 'Characteristic Strength (fck)', definition: 'Résistance à la compression du béton à 28 jours, fractile à 5%, en MPa.', category: 'Matériaux' },
  { fr: 'Enrobage', en: 'Concrete Cover (c)', definition: 'Distance entre la surface de l\'armature et le parement extérieur du béton.', category: 'Matériaux' },
  { fr: 'Affaissement', en: 'Slump (S)', definition: 'Mesure de la maniabilité d\'un béton frais par le cône d\'Abrams, en mm.', category: 'Matériaux' },
  { fr: 'Rapport E/C', en: 'Water/Cement Ratio (w/c)', definition: 'Rapport eau/ciment influençant la résistance et la durabilité du béton.', category: 'Matériaux' },
  { fr: 'Armature de traction', en: 'Tension Reinforcement (As)', definition: 'Aciers placés dans la zone tendue d\'une section fléchie, en cm² ou mm².', category: 'Matériaux' },
  { fr: 'Béton précontraint', en: 'Prestressed Concrete (PC)', definition: 'Béton dont les aciers sont mis sous tension avant ou après coulage.', category: 'Matériaux' },

  /* ── Géotechnique ── */
  { fr: 'Capacité portante', en: 'Bearing Capacity (qu)', definition: 'Contrainte maximale qu\'un sol peut supporter sans rupture, en kPa ou MPa.', category: 'Géotechnique' },
  { fr: 'Tassement', en: 'Settlement (s)', definition: 'Déplacement vertical d\'une fondation sous l\'effet des charges, en mm ou cm.', category: 'Géotechnique' },
  { fr: 'Angle de frottement interne', en: 'Friction Angle (φ)', definition: 'Paramètre de résistance au cisaillement d\'un sol, en degrés (°).', category: 'Géotechnique' },
  { fr: 'Cohésion', en: 'Cohesion (c)', definition: 'Résistance intrinsèque au cisaillement d\'un sol cohérent, en kPa.', category: 'Géotechnique' },
  { fr: 'Indice de vides', en: 'Void Ratio (e)', definition: 'Rapport du volume des vides au volume des solides dans un sol.', category: 'Géotechnique' },
  { fr: 'Consolidation', en: 'Consolidation', definition: 'Processus de réduction progressive du volume d\'un sol sous chargement drainé.', category: 'Géotechnique' },
  { fr: 'SPT', en: 'Standard Penetration Test', definition: 'Essai de pénétration standard mesurant la résistance du sol (nombre de coups N).', category: 'Géotechnique' },

  /* ── Hydraulique ── */
  { fr: 'Pression hydrostatique', en: 'Hydrostatic Pressure', definition: 'Pression exercée par un fluide au repos : p = ρgh, en Pa ou kPa.', category: 'Hydraulique' },
  { fr: 'Débit', en: 'Flow Rate (Q)', definition: 'Volume de fluide traversant une section par unité de temps, en m³/s ou L/s.', category: 'Hydraulique' },
  { fr: 'Vitesse d\'écoulement', en: 'Flow Velocity (v)', definition: 'Déplacement moyen du fluide par unité de temps, en m/s.', category: 'Hydraulique' },

  /* ── Ponts & Ouvrages ── */
  { fr: 'Tablier', en: 'Bridge Deck', definition: 'Partie supérieure d\'un pont recevant la chaussée ou la voie ferrée.', category: 'Ouvrages d\'art' },
  { fr: 'Pile de pont', en: 'Bridge Pier', definition: 'Support vertical intermédiaire d\'un pont entre les culées.', category: 'Ouvrages d\'art' },
  { fr: 'Culée', en: 'Abutment', definition: 'Appui situé aux extrémités d\'un pont, ancré dans le terrain.', category: 'Ouvrages d\'art' },
  { fr: 'Poutre maîtresse', en: 'Main Girder', definition: 'Élément de structure longitudinal principal reprenant les charges du tablier.', category: 'Ouvrages d\'art' },

  /* ── Normes ── */
  { fr: 'Eurocode', en: 'Eurocode (EN)', definition: 'Ensemble de normes européennes de calcul des structures (EN 1990 à EN 1999).', category: 'Normes' },
  { fr: 'État Limite Ultime (ELU)', en: 'Ultimate Limit State (ULS)', definition: 'État correspondant à la ruine de la structure. Les charges sont pondérées (γG, γQ).', category: 'Normes' },
  { fr: 'État Limite de Service (ELS)', en: 'Serviceability Limit State (SLS)', definition: 'État correspondant aux conditions normales d\'utilisation (déformation, fissuration).', category: 'Normes' },
  { fr: 'Coefficient partiel de sécurité', en: 'Partial Safety Factor (γ)', definition: 'Coefficient multiplicateur appliqué aux actions ou résistances pour assurer la sécurité.', category: 'Normes' },
  { fr: 'ACI 318', en: 'ACI 318 (US)', definition: 'Code américain de conception et calcul du béton armé (American Concrete Institute).', category: 'Normes' },

  /* ── Topographie ── */
  { fr: 'Nivellement', en: 'Leveling', definition: 'Opération topographique mesurant les différences d\'altitude entre des points.', category: 'Topographie' },
  { fr: 'Coordonnées géographiques', en: 'Geographic Coordinates (Lat/Lon)', definition: 'Position sur Terre exprimée en latitude et longitude (degrés décimaux ou DMS).', category: 'Topographie' },
  { fr: 'SIG', en: 'GIS (Geographic Information System)', definition: 'Système de gestion, d\'analyse et de visualisation de données géographiques.', category: 'Topographie' },

  /* ── Chantier & Management ── */
  { fr: 'CCTP', en: 'Technical Specifications', definition: 'Cahier des Clauses Techniques Particulières : descriptif technique des travaux.', category: 'Management' },
  { fr: 'Chemin critique', en: 'Critical Path', definition: 'Suite de tâches sans marge dont le retard décale la fin du projet.', category: 'Management' },
  { fr: 'OPR', en: 'Pre-acceptance Operations', definition: 'Opérations Préalables à la Réception : vérification avant remise de l\'ouvrage.', category: 'Management' },
  { fr: 'PPSPS', en: 'Health & Safety Plan', definition: 'Plan Particulier de Sécurité et de Protection de la Santé sur chantier.', category: 'HSE' },
  { fr: 'EPI', en: 'PPE (Personal Protective Equipment)', definition: 'Équipements de Protection Individuelle (casque, gilet, harnais, chaussures).', category: 'HSE' },
];
