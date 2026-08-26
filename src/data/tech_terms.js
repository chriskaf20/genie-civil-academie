/**
 * tech_terms.js — Dictionnaire exhaustif des termes techniques, acronymes et normes
 * pour l'Académie de Génie Civil (GCEA).
 *
 * Utilisé par `TechTooltip.jsx` pour générer des infobulles interactives au survol ou au clic.
 */

export const TECH_TERMS = {
  // ── Concepts & États Limites ──────────────────────────────────────────────
  'ELU': {
    term: 'ELU',
    full: 'État Limite Ultime',
    en: 'Ultimate Limit State (ULS)',
    category: 'Sécurité & Normes',
    icon: '🛡️',
    summary: 'Seuil de sécurité au-delà duquel l\'ouvrage subit la ruine (effondrement, rupture, instabilité).',
    details: 'À l\'ELU, les charges permanentes G sont majorées par γ_G = 1,35 et les charges variables Q par γ_Q = 1,50. Les résistances des matériaux sont minorées (γ_c = 1,50 pour le béton, γ_s = 1,15 pour l\'acier).'
  },
  'ELS': {
    term: 'ELS',
    full: 'État Limite de Service',
    en: 'Serviceability Limit State (SLS)',
    category: 'Durabilité & Confort',
    icon: '📐',
    summary: 'Seuil garantissant le bon fonctionnement et le confort en conditions normales d\'utilisation.',
    details: 'À l\'ELS, on vérifie sans majoration de charge (G + Q) que les flèches restent admissibles (ex: f ≤ L/250), que les fissures ne dépassent pas 0,3 mm et que les contraintes ne dépassent pas les seuils de fluage (0,6·fck).'
  },
  'RDM': {
    term: 'RDM',
    full: 'Résistance des Matériaux',
    en: 'Strength of Materials',
    category: 'Calcul Structurel',
    icon: '🔩',
    summary: 'Science mécanique qui calcule les contraintes, déformations et déplacements dans les solides déformables.',
    details: 'Base fondamentale de l\'ingénierie des structures développée par Navier, Bernoulli et Timoshenko.'
  },
  'MEF': {
    term: 'MEF / FEM',
    full: 'Méthode des Éléments Finis',
    en: 'Finite Element Method (FEM)',
    category: 'Calcul Numérique',
    icon: '💻',
    summary: 'Technique numérique discrétisant une structure continue en petits éléments géométriques simples pour calculer ses contraintes.',
    details: 'Moteur de calcul interne des logiciels professionnels comme Robot Structural Analysis, SAP2000, ETABS, ANSYS ou Cast3M.'
  },
  'BAEL': {
    term: 'BAEL 91',
    full: 'Béton Armé aux États Limites',
    en: 'French RC Code (pre-Eurocode)',
    category: 'Historique / France',
    icon: '📜',
    summary: 'Ancien règlement officiel français de calcul du béton armé, aujourd\'hui remplacé par l\'Eurocode 2.',
    details: 'Encore fréquemment rencontré lors du diagnostic ou de la réhabilitation de bâtiments construits avant 2010.'
  },
  'BPEL': {
    term: 'BPEL 91',
    full: 'Béton Précontraint aux États Limites',
    en: 'French Prestressed Concrete Code',
    category: 'Historique / France',
    icon: '⛓️',
    summary: 'Ancien règlement français pour les ouvrages en béton précontraint, remplacé par l\'Eurocode 2 partie 1-1.'
  },

  // ── Normes & Eurocodes ───────────────────────────────────────────────────
  'Eurocode': {
    term: 'Eurocode',
    full: 'Norme européenne de calcul des structures (EN)',
    en: 'European Structural Standards',
    category: 'Réglementation',
    icon: '🇪🇺',
    summary: 'Ensemble unifié de 10 normes européennes (EN 1990 à EN 1999) régissant la conception des bâtiments et ouvrages d\'art.',
    details: 'Eurocode 0 (Bases), 1 (Actions), 2 (Béton), 3 (Acier), 4 (Mixte), 5 (Bois), 6 (Maçonnerie), 7 (Géotechnique), 8 (Séisme), 9 (Aluminium).'
  },
  'Eurocode 0': {
    term: 'Eurocode 0 (EN 1990)',
    full: 'Bases de calcul des structures',
    en: 'Basis of Structural Design',
    category: 'Eurocodes',
    icon: '📜',
    summary: 'Définit les principes fondamentaux de sécurité, les états limites (ELU/ELS) et les combinaisons d\'actions.'
  },
  'Eurocode 1': {
    term: 'Eurocode 1 (EN 1991)',
    full: 'Actions sur les structures',
    en: 'Actions on Structures',
    category: 'Eurocodes',
    icon: '💨',
    summary: 'Fixe les valeurs réglementaires des charges de poids propre, d\'exploitation, de vent, de neige et thermiques.'
  },
  'Eurocode 2': {
    term: 'Eurocode 2 (EN 1992)',
    full: 'Calcul des structures en béton',
    en: 'Design of Concrete Structures',
    category: 'Eurocodes',
    icon: '🏛️',
    summary: 'Règles de dimensionnement et de ferraillage du béton armé et du béton précontraint.'
  },
  'Eurocode 3': {
    term: 'Eurocode 3 (EN 1993)',
    full: 'Calcul des structures en acier',
    en: 'Design of Steel Structures',
    category: 'Eurocodes',
    icon: '🔧',
    summary: 'Dimensionnement des profilés métalliques (poutres, poteaux, fermes), des assemblages boulonnés et soudés.'
  },
  'Eurocode 5': {
    term: 'Eurocode 5 (EN 1995)',
    full: 'Calcul des structures en bois',
    en: 'Design of Timber Structures',
    category: 'Eurocodes',
    icon: '🌲',
    summary: 'Règles de calcul pour le bois massif, le lamellé-collé et les panneaux de bois contrecollé (CLT).'
  },
  'Eurocode 7': {
    term: 'Eurocode 7 (EN 1997)',
    full: 'Calcul géotechnique',
    en: 'Geotechnical Design',
    category: 'Eurocodes',
    icon: '⛏️',
    summary: 'Dimensionnement des fondations superficielles, pieux profonds, soutènements, talus et ancrages dans le sol.'
  },
  'Eurocode 8': {
    term: 'Eurocode 8 (EN 1998)',
    full: 'Conception des structures parasismiques',
    en: 'Design of Structures for Earthquake Resistance',
    category: 'Eurocodes',
    icon: '⚡',
    summary: 'Règles de résistance aux tremblements de terre : calcul modal spectral, ductilité et détails de ferraillage parasismique.'
  },
  'DTU': {
    term: 'DTU',
    full: 'Document Technique Unifié',
    en: 'Unified Technical Document (France)',
    category: 'Normes d\'Exécution',
    icon: '📄',
    summary: 'Règles de l\'art professionnelles applicables en France pour l\'exécution des travaux de bâtiment (ex: DTU 13.12 fondations, DTU 21 béton).'
  },
  'CCTP': {
    term: 'CCTP',
    full: 'Cahier des Clauses Techniques Particulières',
    en: 'Technical Specifications (Bill of Quantities)',
    category: 'Marchés & Chantier',
    icon: '📋',
    summary: 'Document contractuel contracté entre le maître d\'ouvrage et l\'entreprise détaillant les matériaux et modes d\'exécution imposés.'
  },

  // ── Numérique, BIM & Modélisation ─────────────────────────────────────────
  'BIM': {
    term: 'BIM',
    full: 'Building Information Modeling',
    en: 'Building Information Modeling',
    category: 'Numérique',
    icon: '🏗️',
    summary: 'Processus collaboratif basé sur une maquette numérique 3D intelligente contenant toutes les propriétés géométriques et techniques du bâtiment.',
    details: 'Permet la synthèse spatiale, la détection des clashs (conflits), le métré automatique (5D) et la planification 4D.'
  },
  'IFC': {
    term: 'IFC',
    full: 'Industry Foundation Classes',
    en: 'Industry Foundation Classes (ISO 16739)',
    category: 'Numérique / BIM',
    icon: '🌐',
    summary: 'Format de fichier ouvert et universel permettant d\'échanger des maquettes 3D entre différents logiciels (Revit, ArchiCAD, Tekla, Allplan).'
  },
  'BCF': {
    term: 'BCF',
    full: 'BIM Collaboration Format',
    en: 'BIM Collaboration Format',
    category: 'Numérique / BIM',
    icon: '💬',
    summary: 'Format d\'échange de commentaires, alertes et réserves géolocalisées sur une maquette 3D sans modifier le fichier géométrique IFC.'
  },
  'LOD': {
    term: 'LOD',
    full: 'Level of Development / Detail',
    en: 'Level of Development (LOD 100 à 500)',
    category: 'BIM',
    icon: '🔍',
    summary: 'Niveau de maturité et de précision des objets dans la maquette numérique (LOD 100 = esquisse volumique, LOD 400 = fabrication/exécution).'
  },

  // ── Géotechnique & Travaux ───────────────────────────────────────────────
  'SPT': {
    term: 'SPT',
    full: 'Standard Penetration Test',
    en: 'Standard Penetration Test',
    category: 'Géotechnique',
    icon: '⛏️',
    summary: 'Essai géotechnique in-situ mesurant le nombre de coups (N) nécessaires pour enfoncer un carottier de 30 cm sous l\'impact d\'une masse de 63,5 kg.',
    details: 'Permet d\'estimer la compacité des sables, la résistance au cisaillement et le risque de liquéfaction sismique.'
  },
  'TBM': {
    term: 'TBM',
    full: 'Tunnel Boring Machine (Tunnelier)',
    en: 'Tunnel Boring Machine',
    category: 'Tunnels',
    icon: '🚇',
    summary: 'Machine géante cylindrique automatisée excavant la roche ou le sol tout en posant simultanément les voussoirs en béton du tunnel.'
  },
  'NATM': {
    term: 'NATM',
    full: 'Nouvelle Méthode Autrichienne (Nouvelle Méthode de Creusement)',
    en: 'New Austrian Tunneling Method',
    category: 'Tunnels',
    icon: '🚇',
    summary: 'Méthode de creusement séquentiel utilisant la déformation contrôlée du massif rocheux et un soutènement immédiat par béton projeté et boulons.'
  },

  // ── Matériaux & Profilés ─────────────────────────────────────────────────
  'CLT': {
    term: 'CLT',
    full: 'Cross-Laminated Timber (Bois Lamellé-Croisé)',
    en: 'Cross-Laminated Timber',
    category: 'Bois & Éco-construction',
    icon: '🌲',
    summary: 'Panneaux massifs constitués de plis de bois croisés à 90° collés sous haute pression, très résistants et biosourcés.'
  },
  'LVL': {
    term: 'LVL',
    full: 'Laminated Veneer Lumber (Lamibois)',
    en: 'Laminated Veneer Lumber',
    category: 'Bois',
    icon: '🌲',
    summary: 'Bois composé de fines feuilles de placage orientées parallèlement, offrant une résistance mécanique homogène très élevée pour de grandes portées.'
  },
  'HEA': {
    term: 'HEA',
    full: 'Poutrelle métallique européenne à larges ailes allégées',
    en: 'European Wide Flange Beam',
    category: 'Métal',
    icon: '🔧',
    summary: 'Profilé métallique normalisé en H laminé à chaud, fréquemment employé comme poteau grâce à sa bonne inertie selon les deux axes.'
  },
  'IPE': {
    term: 'IPE',
    full: 'Poutrelle métallique européenne à profil I à ailes parallèles',
    en: 'European Standard I-Beam',
    category: 'Métal',
    icon: '🔧',
    summary: 'Profilé métallique normalisé en I laminé à chaud, optimal pour travailler en flexion comme poutre principale ou panne de toiture.'
  },

  // ── Chantier, HSE & Management ──────────────────────────────────────────
  'OPR': {
    term: 'OPR',
    full: 'Opérations Préalables à la Réception',
    en: 'Pre-handover Inspections',
    category: 'Chantier',
    icon: '🔍',
    summary: 'Visite détaillée de fin de chantier listant les malfaçons, non-conformités et réserves à lever avant la remise officielle des clés.'
  },
  'PPSPS': {
    term: 'PPSPS',
    full: 'Plan Particulier de Sécurité et de Protection de la Santé',
    en: 'Site Health and Safety Plan',
    category: 'HSE',
    icon: '⛑️',
    summary: 'Document rédigé par chaque entreprise détaillant les mesures de prévention des accidents adaptées aux risques spécifiques du chantier.'
  },
  'EPI': {
    term: 'EPI',
    full: 'Équipements de Protection Individuelle',
    en: 'Personal Protective Equipment (PPE)',
    category: 'HSE / Sécurité',
    icon: '🦺',
    summary: 'Ensemble des protections corporelles obligatoires sur chantier : casque EN 397, chaussures S3, gilet fluo EN ISO 20471, lunettes et gants.'
  },
  'ACV': {
    term: 'ACV',
    full: 'Analyse du Cycle de Vie',
    en: 'Life Cycle Assessment (LCA)',
    category: 'Développement Durable',
    icon: '🌿',
    summary: 'Méthode normalisée (ISO 14040) évaluant l\'empreinte environnementale globale d\'un matériau ou bâtiment de son extraction à sa démolition (kg eq. CO₂/m²).'
  },
  'OACI': {
    term: 'OACI / ICAO',
    full: 'Organisation de l\'Aviation Civile Internationale',
    en: 'International Civil Aviation Organization',
    category: 'Aéroports',
    icon: '✈️',
    summary: 'Organisme mondial édictant les normes de géométrie des pistes (Annexe 14), longueurs de bandes d\'arrêt et balisage lumineux des aérodromes.'
  },
  'UIC': {
    term: 'UIC',
    full: 'Union Internationale des Chemins de Fer',
    en: 'International Union of Railways',
    category: 'Ferroviaire',
    icon: '🚄',
    summary: 'Organisation internationale fixant les standards des voies ferrées (écartement standard 1435 mm, profil de rail UIC 60, gabarit cinématique).'
  },
};
