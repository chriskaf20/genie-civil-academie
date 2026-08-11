// ── Lesson: Organisation, Gestion & Conduite de Chantier — Module 24 ──────────
export const lesson_chantier = {
  moduleId: 24,
  slug: 'chantier',
  lessonIndex: 1,
  title: "Organisation, Planification & Conduite de Chantier de BTP",
  subtitle: "Module 24 — Organisation, Gestion & Conduite de Chantier",
  level: 'Intermédiaire',
  duration: '40h',
  diagramType: 'bridge_structure',
  tags: ['Chantier', 'PIC', 'Gantt', 'PERT', 'Déboursé Sec', 'PPSPS', 'Grue', 'Méthodes', 'Budget'],

  steps: [
    {
      id: 1,
      key: 'definition',
      title: "Définition — La Conduite et l'Organisation de Chantier",
      icon: '📖',
      type: 'definition',
      fr: 'Organisation, Conduite & Management de Chantier de BTP',
      en: 'Site Management, Planning & Construction Logistics',
      metier: "Pratiquée par les directeurs de travaux, conducteurs de travaux, ingénieurs méthodes, chefs de chantier et coordonnateurs SPS. Le maillon opérationnel qui transforme les études en réalisation physique.",
      content: `La **gestion et conduite de chantier** englobe l'ensemble des activités de préparation, de planification, d'approvisionnement, d'encadrement humain et de suivi financier nécessaires pour réaliser un ouvrage dans le **respect de la sécurité, des délais et de la qualité**.

### Les 4 piliers de la conduite de chantier :
1. **La Préparation de Chantier (Phase Méthodes)** : Élaboration du **Plan d'Installation de Chantier (PIC)**, dimensionnement et implantation des grues, étude des rotations de banches et modes opératoires.
2. **La Planification & le Suivi Temporel** : Établissement du **planning de Gantt**, détermination du **Chemin Critique (CPM)** et ajustement des effectifs d'ouvriers (courbe d'effectifs).
3. **La Gestion Financière & le Contrôle Budgétaire** : Suivi des déboursés secs (DS), des frais de chantier (FC), calcul du coût de revient et contrôle de l'écart budgétaire (Budget PR - Réalisé).
4. **La Sécurité & l'Environnement (SPS & QSE)** : Rédaction du **PPSPS** (Plan Particulier de Sécurité et de Protection de la Santé), mise en place du balisage, des EPI et tri des déchets (SOSED).

> 💡 **Le rôle clé du PIC (Plan d'Installation de Chantier)** : C'est la carte d'identité du chantier ! Il fixe la position de la grue (rayon, charge max, survol), des cantonnements (base vie), des aires de stockage, des accès camions et des branchements fluides.`,
    },

    {
      id: 2,
      key: 'importance',
      title: "Pourquoi l'organisation de chantier est la clé du profit",
      icon: '⚠️',
      type: 'importance',
      content: `Un chantier mal préparé ou mal géré perd immédiatement toute la marge financière calculée en étude de prix.

- **Pénalités de retard** : Généralement de $1/1000^{\\text{ème}}$ du montant du marché par jour calendaire de retard (ex: 2 000 €/jour sur un marché de 2 M€).
- **Rendements et productivité** : Une mauvaise rotation des banches ou une grue mal positionnée fait chuter la productivité des maçons de 30%.
- **Sécurité et zéro accident** : La responsabilité pénale du conducteur de travaux et du chef de chantier est engagée en cas d'accident grave (chute de hauteur, basculement de grue).
- **Gestion des sous-traitants** : Synchronisation des corps d'état secondaires (CES : électriciens, plombiers, étancheurs) pour éviter les bouchons et reprises de malfaçons.

> ⚠️ **Règle d'or** : "Un jour gagné en préparation de chantier fait gagner 3 jours en phase d'exécution et préserve 100% de la marge budgétaire !"`,
    },

    {
      id: 3,
      key: 'applications',
      title: "Applications terrain — Outils, Matériels & Rôles",
      icon: '🏗️',
      type: 'applications',
      examples: [
        {
          context: "Établissement du Plan d'Installation de Chantier (PIC)",
          text: "Positionnement de la grue à tour à flèche distribuante (GME) avec calcul de la courbe de charge, aires de balayage, clôtures de chantier et cantonnement (base vie R+1).",
        },
        {
          context: "Planification des Rotations de Banches (Planning Chemin de Fer)",
          text: "Optimisation de l'utilisation des banches métalliques (ex: coffrage de 25 m de voile par jour avec 1 équipage de 4 bancheurs).",
        },
        {
          context: "Rédaction du PPSPS & Réunions de Chantier",
          text: "Rédaction des modes opératoires sécurisés (passerelles de travail PIRL, garde-corps provisoires, élingage des charges) et réunions hebdomadaires avec le CSPS.",
        },
        {
          context: "Suivi Budgétaire & Rapport Mensuel d'Avancement (RMA)",
          text: "Comparaison mensuelle entre le Déboursé Sec prévu (temps d'heures, matériaux consommés) et le réalisé pour identifier les dérives de coût.",
        },
        {
          context: "Gestion des Déchets & Chantier Vert (SOSED / HQE)",
          text: "Mise en place des bennes de tri à la source (Béton/Gravats, Bois, Plâtre, DIB, Métaux) et valorisation à 80% des déchets du BTP.",
        },
        {
          context: "Réceptions des Ouvrages & Levée des Réserves (OPR / DOE)",
          text: "Organisation des Opérations Préalables à la Réception avec l'architecte, contrôle des autocontrôles et remise du DOE (Dossier d'Ouvrage Exécuté).",
        },
      ],
    },

    {
      id: 4,
      key: 'theory',
      title: "Théorie — Déboursé Sec, Prix de Vente & Chemin Critique (Gantt)",
      icon: '📐',
      type: 'theory',
      diagramType: 'bridge_structure',
      content: `### 1. La Décomposition Financière du Prix en BTP

Pour calculer le Prix de Vente HT d'un ouvrage, on applique la cascade des coefficients d'étude de prix :

$$\\text{Prix de Vente HT (PV_{HT})} = \\frac{\\text{Déboursé Sec (DS)} + \\text{Frais de Chantier (FC)}}{1 - (FG + B)}$$

- **Déboursé Sec (DS)** : Coût direct strict des matériaux, de la main-d'œuvre directe (MOD) et du matériel spécifique affecté.
- **Frais de Chantier (FC)** : Coûts d'installation (grue, base vie, fluides, encadrement de chantier).
- **Frais Généraux (FG)** : Coûts de fonctionnement du siège social (bureaux, direction, comptabilité, R&D) $\\approx 8\\% \\text{ à } 12\\%$.
- **Bénéfice & Aléas (B)** : Marge bénéficiaire visée et provision pour risques $\\approx 3\\% \\text{ à } 7\\%$.
- **Coefficient de Vente ($K_v$)** :
  $$PV_{HT} = DS \\times K_v \\qquad K_v = \\frac{1 + \\frac{FC}{DS}}{1 - (FG + B)}$$

### 2. Le Chemin Critique (CPM - Critical Path Method)

Sur un **diagramme de Gantt** ou un **réseau PERT** :
- **Marge Totale ($MT_i$)** : Retard maximal que peut prendre une tâche sans retarder la date de fin du chantier.
- **Chemin Critique** : Chaîne continue de tâches dont la **marge totale est NULLE ($MT = 0$)**. Tout retard sur une tâche critique retarde d'autant la livraison du chantier.

### 3. Les Ratios d'Encadrement & Matériels
- **Ratio d'encadrement** : 1 Chef de Chantier pour 10 à 15 compagnons | 1 Conducteur de Travaux pour 2 à 4 chantiers simultanés.
- **Temps Unitaire (TU)** : Heures de main-d'œuvre nécessaires pour réaliser 1 unité d'ouvrage (ex: $TU_{voile} = 1{,}2\\text{ h/m}^2$, $TU_{dalle} = 0{,}8\\text{ h/m}^2$).`,
    },

    {
      id: 5,
      key: 'formulas',
      title: "Formules essentielles — Méthodes, Déboursé & Temps Unitaire",
      icon: '🔢',
      type: 'formulas',
      diagramType: 'bridge_structure',
      formulas: [
        {
          name: "Calcul des Heures de Main-d'Œuvre (H_MO)",
          latex: "H_{MO} = \\sum_{k=1}^{N} \\left( \\text{Quantit\\acute{e}}_k \\times TU_k \\right) \\quad [\\text{heures}]",
          description: "TU = Temps Unitaire [h/m², h/m³, h/t]. Ex: 500 m² de voile × 1,2 h/m² = 600 heures de travail.",
        },
        {
          name: "Nombre d'ouvriers requis (Effectif journalier N_ouvriers)",
          latex: "N_{ouvriers} = \\frac{H_{MO}}{\\text{Dur\\acute{e}e (jours)} \\times h_{journali\\grave{e}re}}",
          description: "Ex: 600 heures sur 10 jours ouvrés à 7h/jour → N = 600 / (10 × 7) = 8,57 → 9 ouvriers.",
        },
        {
          name: "Déboursé Sec de Main-d'Œuvre (DS_MO)",
          latex: "DS_{MO} = H_{MO} \\times DHO \\quad [\\euro] \\qquad (DHO = \\text{D\\acute{e}bours\\acute{e} Horaire Ouvrier \\approx 28 à 38 \\euro/h})",
          description: "Le DHO comprend le salaire brut, les charges sociales (salaire chargé ≈ +70 à 80%), primes et paniers repas.",
        },
        {
          name: "Calcul de la Charge Maximale de Grue à Tour (P_grue)",
          latex: "P_{grue} = \\text{Poids du Banchage / Benne à béton} + \\text{Poids des Élingues} \\le P_{admissible}(R)",
          description: "La capacité de levage diminue avec la portée (rayon R). Ex: Grue de 6 tonnes au pied, 1,8 t en bout de flèche à 50 m.",
        },
        {
          name: "Marge Totale d'une Tâche (MT_i)",
          latex: "MT_i = D_{t\\hat{a}t,max} - D_{t\\hat{a}t,min} = F_{t\\hat{a}t,max} - F_{t\\hat{a}t,min}",
          description: "Si MTi = 0 → Tâche CRITIQUE (à suivre avec priorité absolue sur le planning).",
        },
        {
          name: "Bilan financier du Coût de Revient (CR) et Marge Brute",
          latex: "CR = DS + FC + FG \\qquad \\text{Marge Brute} = PV_{HT} - CR = PV_{HT} \\cdot B",
          description: "Si le chantier dépasse son déboursé prévu (DS_réel > DS_prévu), la marge brute s'effondre.",
        },
      ],
    },

    {
      id: 6,
      key: 'stepbystep',
      title: "Calcul complet — Étude de prix & Planning d'un plancher d'immeuble",
      icon: '🔬',
      type: 'stepbystep',
      problem: "Réaliser le métré financier et l'effectif pour le coulage d'un plancher béton armé de 400 m² (épaisseur e = 20 cm, soit V = 80 m³ de béton et S = 400 m² de coffrage). Données : TU_coffrage = 0,60 h/m², TU_béton = 0,30 h/m³, TU_armatures = 12 h/tonne (Poids aciers = 3,2 tonnes). DHO = 32,00 €/h. Béton prêt à l'emploi (BPE) C30/37 = 130,00 €/m³. Aciers B500B façonné = 1,60 €/kg. Déterminer : 1) Les heures totales de main-d'œuvre H_MO. 2) Le Déboursé Sec total DS (MO + Matériaux). 3) L'effectif d'équipe pour couler le plancher en 3 jours (7h/jour).",
      steps_demo: [
        { n: 1, text: "Calcul des heures de coffrage : H_coff = 400 m² × 0,60 h/m² = 240,0 heures" },
        { n: 2, text: "Calcul des heures de bétonnage : H_beton = 80 m³ × 0,30 h/m³ = 24,0 heures" },
        { n: 3, text: "Calcul des heures de ferraillage : H_acier = 3,2 tonnes × 12,0 h/t = 38,4 heures" },
        { n: 4, text: "Heures totales de main-d'œuvre : H_tot = 240,0 + 24,0 + 38,4 = 302,4 heures" },
        { n: 5, text: "Calcul du DS Main-d'Œuvre : DS_MO = 302,4 h × 32,00 €/h = 9 676,80 €" },
        { n: 6, text: "Calcul du DS Matériaux : DS_Béton = 80 m³ × 130 € = 10 400,00 € | DS_Aciers = 3 200 kg × 1,60 € = 5 120,00 € → DS_Matériaux = 15 520,00 €" },
        { n: 7, text: "Déboursé Sec Total (DS) : DS_Total = 9 676,80 + 15 520,00 = 25 196,80 € (soit 62,99 €/m²)" },
        { n: 8, text: "Calcul de l'effectif pour réaliser l'ouvrage en 3 jours de 7h (21h/homme) : N_ouvriers = 302,4 / (3 × 7) = 302,4 / 21 = 14,4 → Équipe de 14 à 15 compagnons." },
      ],
      result_latex: "H_{MO} = \\textbf{302{,}4 h} \\qquad DS_{Total} = \\textbf{25 196{,}80 \\euro} \\qquad N_{ouvriers} = \\textbf{15 compagnons (3 jours)} \\quad \\checkmark",
    },

    {
      id: 7,
      key: 'units',
      title: "Unités & Acronymes en Management de Chantier — Tableau de référence",
      icon: '📏',
      type: 'units',
      table: [
        { grandeur: "PIC (Plan d'Installation de Chantier)", si: "Document graphique échelles 1/200 à 1/500", imperial: "Site Layout Plan", conversion: "Fixe l'emplacement des grues, réseaux provisoires et cantonnements" },
        { grandeur: "PPSPS", si: "Plan Particulier de Sécurité et de Protection de la Santé", imperial: "Safety Plan", conversion: "Obligatoire (Loi du 31/12/1993) pour tous les chantiers soumis au CSPS" },
        { grandeur: "DHO (Déboursé Horaire Ouvrier)", si: "€/heure", imperial: "$/hour", conversion: "Coût horaire moyen chargé d'un compagnon (ex: 30 à 38 €/h)" },
        { grandeur: "TU (Temps Unitaire)", si: "heures/unité (h/m², h/m³, h/kg)", imperial: "man-hours", conversion: "Rendement de la main-d'œuvre (ex: 1,2 h/m² de voile banché)" },
        { grandeur: "Chemin Critique (CPM)", si: "Jours / Semaines", imperial: "Critical Path", conversion: "Séquence de tâches à marge nulle déterminant la livraison du chantier" },
        { grandeur: "SOSED / Schéma Déchets", si: "Taux de valorisation %", imperial: "Waste Plan", conversion: "Tri à la source et suivi du bordereau de suivi des déchets (BSDD)" },
      ],
      note: "⚠️ ATTENTION : Le DHO ne se limite pas au salaire horaire net ! Il comprend le **salaire de base + charges sociales (~70%) + indemnités de déplacement/panier + équipement/outillage**.",
    },

    {
      id: 8,
      key: 'hypotheses',
      title: "Hypothèses & règles de préparation de chantier",
      icon: '📋',
      type: 'hypotheses',
      items: [
        { type: 'info', text: "Stabilité de la grue à tour : La fondation de la grue (massif en béton armé de 40 à 80 m³) doit faire l'objet d'une note de calcul géotechnique (pression sol ≤ q_adm) et d'un contrôle par organisme agréé." },
        { type: 'info', text: "Survol des propriétés voisines : Le survol des habitations voisines par la charge ou la flèche de la grue nécessite une autorisation conventionnelle du propriétaire ou un système d'interdiction de survol automatisé." },
        { type: 'warning', text: "ATTENTION : Tout chantier de plus de 4 mois exige la mise en place d'une base vie / cantonnement conforme au Code du Travail (réfectoire, vestiaires chauffés, douches, WC raccordés au réseau EU)." },
        { type: 'warning', text: "Interdiction des garde-corps de sécurité non conformes : Les protections collectives contre les chutes de hauteur doivent résister à une poussée horizontale de 30 daN/m à 1,00 m du sol (NF EN 13374)." },
        { type: 'tip', text: "Gestion des bétons par temps froid (< 5°C) : Utiliser un ciment à hydratation rapide (CEM I 52.5 N), chauffer l'eau de gâchage, ajouter un accélérateur de prise et bâcher les coffrages." },
        { type: 'warning', text: "Déclaration d'Intention de Commencement de Travaux (DICT) : Obligatoire auprès des concessionnaires de réseaux avant tout coup de pelle de terrassement." },
      ],
    },

    {
      id: 9,
      key: 'simple_examples',
      title: "Exemples guidés — Budgets & Planning de chantier",
      icon: '✏️',
      type: 'examples_simple',
      examples: [
        {
          title: "Exemple 1 : Calcul du Prix de Vente HT avec Coefficient de Vente Kv",
          given: "Déboursé Sec total d'une opération DS = 500 000 €. Frais de chantier FC = 50 000 €. Frais généraux FG = 8%. Marge bénéficiaire B = 5%",
          find: "Le coefficient de vente Kv et le Prix de Vente HT (PV_HT)",
          solution_latex: "K_v = \\frac{1 + \\frac{50\\,000}{500\\,000}}{1 - (0{,}08 + 0{,}05)} = \\frac{1{,}10}{0{,}87} = 1{,}2644 \\qquad PV_{HT} = 500\\,000 \\times 1{,}2644 = 632\\,200 \\text{ \\euro}",
          result: "Prix de Vente HT = 632 200 € (Marge brute = 132 200 €).",
        },
        {
          title: "Exemple 2 : Calcul du nombre de rotations de banches nécessaires",
          given: "Voiles linéaires du bâtiment = 180 m de longueur. Matériel de coffrage disponible = 30 m linéaires de banches métalliques.",
          find: "Nombre de jours de coulage (rotations de banches)",
          solution_latex: "N_{rotations} = \\frac{180 \\text{ m}}{30 \\text{ m/jour}} = 6{,}0 \\text{ jours de coulage}",
          result: "Il faut 6 rotations (6 jours de coulage) pour réaliser l'ensemble des voiles de l'étage.",
        },
        {
          title: "Exemple 3 : Calcul de la capacité de levage d'une grue à 40 m",
          given: "Grue à tour de capacité maximale 6,0 tonnes à 15 m. La courbe de charge donne P(R) = P_max × (15 / R).",
          find: "La charge maximale autorisée à 40 m de portée",
          solution_latex: "P(40\\text{m}) = 6{,}0 \\times \\frac{15}{40} = 2{,}25 \\text{ tonnes}",
          result: "À 40 m de portée, la grue ne peut pas lever plus de 2,25 tonnes (2 250 kg).",
        },
      ],
    },

    {
      id: 10,
      key: 'real_examples',
      title: "Exemple réel — Chantier de la Tour Hekla (La Défense)",
      icon: '🏢',
      type: 'examples_real',
      diagramType: 'bridge_structure',
      examples: [
        {
          context: "Tour de 220 m de hauteur en milieu urbain hyper-dense",
          scenario: "Installation de 2 grues à tour à élévation automatique (grues à flèche relevable) ancrées sur le noyau béton de la tour. Logistique flux tendus par camions livrés sur des créneaux horaires de 15 min.",
          decomposition_latex: "\\text{Cadence : 1 étage de 1 400 m}^2 \\text{ coulé et monté tous les 4 jours ouvrés}",
          lesson: "La logistique 4D et le suivi au quart d'heure des livraisons sur le PIC ont permis d'éviter tout engorgement sur le boulevard circulaire de La Défense.",
        },
      ],
    },

    {
      id: 11,
      key: 'diagrams',
      title: "Schéma d'un Plan d'Installation de Chantier (PIC) & Diagramme de Gantt",
      icon: '📊',
      type: 'interactive_diagram',
      diagramType: 'bridge_structure',
      description: "Visualisez l'organisation spatiale d'un PIC (implantation grue, base vie, zones d'accès camions, stockages) et l'ordonnancement d'un diagramme de Gantt avec mise en évidence du Chemin Critique.",
      diagram_description: [
        "Plan d'Installation de Chantier (PIC) : Emprise du bâtiment, grue à tour avec flèche/contre-flèche, clôture, cantonnement et aires de livraison",
        "Planning de Gantt & PERT : Représentation des jalons, des marges libres et du Chemin Critique (tâches en rouge à marge nulle)",
        "Rotation de banches : Schéma du cycle de coffrage, coulage, séchage et décoffrage à J+1",
      ],
    },

    {
      id: 12,
      key: 'mistakes',
      title: "Erreurs classiques & risques majeurs sur Chantier",
      icon: '⛔',
      type: 'mistakes',
      items: [
        {
          mistake: "Négliger l'étude d'implantation et de charge de la grue",
          trap: "Positionner la grue à tour trop loin du bâtiment, empêchant d'atteindre le coin opposé avec une benne à béton pleine (2,5 tonnes)",
          fix: "Vérifier le diagramme de charge de la grue sur l'ensemble de l'emprise. La benne à béton de 1 000 L chargée (2 500 kg) doit être levable au point le plus éloigné du chantier.",
        },
        {
          mistake: "Démarrer les travaux sans balisage ni PPSPS validé",
          trap: "Laisser les compagnons travailler sur une dalle de R+1 sans garde-corps provisoires ni filets anti-chute",
          fix: "Arrêt de chantier immédiat par l'Inspection du Travail ou le CSPS. Les protections collectives contre les chutes de hauteur doivent être posées AVANT le démarrage de tout travail en hauteur.",
        },
        {
          mistake: "Oublier de vérifier le chemin critique lors des glissements de planning",
          trap: "Accélérer des tâches secondaires qui ont de la marge (ex: peinture) tout en laissant dériver les voiles bétons critiques",
          fix: "Toute action corrective de rattrapage de délai (heures supplémentaires, grue supplémentaire) doit être ciblée EXCLUSIVEMENT sur les tâches situées sur le Chemin Critique.",
        },
        {
          mistake: "Absence d'autocontrôle et de traçabilité des bétons",
          trap: "Coulé un plancher sans relever le numéro de bon de livraison de la toupie BPE ni effectuer d'essai d'affaissement au cône",
          fix: "En cas de défaillance mécanique à 28 jours, l'entreprise est incapable de prouver la conformité du lot. Exiger la conservation systématique des bons de livraison et prélèvements d'éprouvettes.",
        },
      ],
    },

    {
      id: 13,
      key: 'tips',
      title: "Astuces du conducteur de travaux & chef de chantier",
      icon: '💡',
      type: 'tips',
      tips: [
        "Chronométrage des cycles de grue : Le temps de cycle moyen d'une grue (prise de charge, levage, déplacement, déchargement, retour) est de 4 à 6 minutes. Planifier un maximum de 10 à 12 levages par heure.",
        "Méthode des 5S sur chantier : Se débarrasser, Structurer, Nettoyer, Standardiser, Maintenir. Un chantier propre et ordonné réduit les accidents du travail de 50% !",
        "Fiches d'autocontrôle : Mettre à disposition du chef d'équipe des fiches plastifiées simples (Vérification ferraillage, enrobage, réservation, altimétrie d'arase avant coulage).",
        "Optimisation des livraisons BPE : Programmer l'arrivée des toupies de béton avec un espacement de 20 à 30 minutes pour éviter l'attente des chauffeurs (pénalités d'attente) ou les arrêts du bétonnage.",
        "Suivi budgétaire hebdomadaire : Suivre l'écart d'heures (Heures budgétées vs Heures consommées) chaque vendredi soir pour réagir dès le lundi en cas de dérive.",
        "Logiciels de gestion de chantier : MS Project / Primavera P6 (Planning), Revit/Navisworks (BIM 4D), Finalcad / LeanCo / Fieldwire (Gestion des réserves et suivi d'avancement sur tablette).",
      ],
    },

    {
      id: 14,
      key: 'normes',
      title: "Normes & Réglementations — Conduite de Chantier",
      icon: '📜',
      type: 'norms',
      norms: [
        { code: "Loi n° 93-1418 du 31/12/1993", description: "Réglementation relative à la coordination SPS (Sécurité et Protection de la Santé) sur les chantiers de bâtiment et génie civil." },
        { code: "NF EN 13374", description: "Garde-corps périphériques temporaires — Spécification du produit et méthodes d'essai (Classes A, B, C)." },
        { code: "Code du Travail (Articles R4532-1 et suiv.)", description: "Obligation du PPSPS, conformité des cantonnements de chantier, sécurité des grues et engins." },
        { code: "NF EN 14439", description: "Appareils de levage à charge suspendue — Grues à tour (Stabilité, freins, dispositifs de sécurité)." },
        { code: "NFP 03-001", description: "Cahier des clauses administratives générales (CCAG) applicables aux marchés privés de travaux de bâtiment." },
        { code: "Décret Anti-Endommagement 2012", description: "Obligation des DT-DICT et du repérage des réseaux enterrés (Classes A, B, C) avant terrassement." },
      ],
    },

    {
      id: 15,
      key: 'exercises',
      title: "Exercices Gestion & Organisation de Chantier — 3 niveaux",
      icon: '✍️',
      type: 'exercises',
      exercises: [
        {
          id: 'ex_cha_1',
          number: 1,
          difficulty: 'Facile',
          text: "Pour réaliser 250 m² de voiles banchés, le temps unitaire est TU = 1,2 h/m². Calculer le nombre d'heures total de main-d'œuvre requis H_MO.",
          hint: "H_MO = Surface × TU.",
          answer_latex: "H_{MO} = 250 \\text{ m}^2 \\times 1{,}2 \\text{ h/m}^2 = 300{,}0 \\text{ heures}",
          answer_text: "Heures de main-d'œuvre H_MO = 300 heures",
        },
        {
          id: 'ex_cha_2',
          number: 2,
          difficulty: 'Moyen',
          text: "Un chantier exige 420 heures de main-d'œuvre pour être exécuté en 6 jours ouvrés de 7h/jour. Quel doit être l'effectif moyen de l'équipe de maçons ?",
          hint: "N_ouvriers = H_MO / (Jours × 7h).",
          answer_latex: "N_{ouvriers} = \\frac{420 \\text{ h}}{6 \\text{ jours} \\times 7 \\text{ h/jour}} = \\frac{420}{42} = 10{,}0 \\text{ compagnons}",
          answer_text: "Effectif requis = 10 compagnons",
        },
        {
          id: 'ex_cha_3',
          number: 3,
          difficulty: 'Difficile',
          text: "Un ouvrage présente un Déboursé Sec DS = 200 000 € et des Frais de Chantier FC = 24 000 €. Sachant que les Frais Généraux FG = 10% et le Bénéfice B = 5%, calculer le coefficient de vente Kv et le Prix de Vente HT (PV_HT).",
          hint: "Kv = (1 + FC/DS) / (1 - (FG + B)). PV_HT = DS × Kv.",
          answer_latex: "K_v = \\frac{1 + \\frac{24\\,000}{200\\,000}}{1 - 0{,}15} = \\frac{1{,}12}{0{,}85} = 1{,}31765 \\qquad PV_{HT} = 200\\,000 \\times 1{,}31765 = 263\\,530 \\text{ \\euro}",
          answer_text: "Coefficient Kv = 1,318 | Prix de Vente HT = 263 530 €.",
        },
      ],
    },

    {
      id: 16,
      key: 'corrections',
      title: "Corrections détaillées",
      icon: '✅',
      type: 'corrections',
      note: "Retrouvez la méthodologie complète des calculs d'étude de prix, de planning et d'effectifs en cliquant sur 'Voir la correction'.",
    },

    {
      id: 17,
      key: 'quiz',
      title: "Quiz Gestion & Conduite de Chantier — 3 questions",
      icon: '🎯',
      type: 'quiz',
      questions: [
        {
          id: 'q_cha_1',
          question: "Quel document graphique obligatoire fixe la position de la grue, des cantonnements, des voies d'accès et des aires de stockage sur un chantier ?",
          options: [
            { id: 'a', text: "Le PPSPS" },
            { id: 'b', text: "Le Plan d'Installation de Chantier (PIC)" },
            { id: 'c', text: "Le bilan comptable" },
            { id: 'd', text: "Le permis de construire" },
          ],
          correct: 'b',
          explanation: "Le PIC (Plan d'Installation de Chantier) est le plan d'organisation spatiale du chantier fixant la position des grues, réseaux, base vie, zones de stockage et accès camions.",
        },
        {
          id: 'q_cha_2',
          question: "Que représente le 'Chemin Critique' dans un planning de chantier (Gantt / CPM) ?",
          options: [
            { id: 'a', text: "Le chemin le plus dangereux où porter un casque" },
            { id: 'b', text: "La séquence de tâches à marge totale nulle (MT = 0) déterminant la date de livraison finale de l'ouvrage" },
            { id: 'c', text: "Le trajet des camions de livraison" },
            { id: 'd', text: "La liste des sous-traitants en retard" },
          ],
          correct: 'b',
          explanation: "Le chemin critique regroupe les tâches dont le retard entraîne immédiatement un retard sur la livraison finale du chantier. Sa marge totale est égale à zéro.",
        },
        {
          id: 'q_cha_3',
          question: "Que comprend le Déboursé Sec (DS) dans une étude de prix BTP ?",
          options: [
            { id: 'a', text: "Les coûts administratifs du siège social" },
            { id: 'b', text: "Les coûts directs stricts de main-d'œuvre (MOD), matériaux consommés et matériels affectés à l'ouvrage" },
            { id: 'c', text: "Le bénéfice net de l'entreprise" },
            { id: 'd', text: "La TVA" },
          ],
          correct: 'b',
          explanation: "Le Déboursé Sec (DS) réunit exclusivement les dépenses directes affectées à la réalisation physique de l'ouvrage (matériaux, heures ouvriers, engins).",
        },
      ],
    },

    {
      id: 18,
      key: 'exam_questions',
      title: "Questions d'examen — Niveau BTS / Licence Conducteur de Travaux",
      icon: '🎓',
      type: 'exam',
      questions: [
        "Démontrez la formule d'établissement du Prix de Vente HT à partir du Déboursé Sec (DS), des Frais de Chantier (FC), des Frais Généraux (FG) et de la marge bénéficiaire (B). Expliquez la notion de coefficient de vente Kv.",
        "Présentez la méthodologie d'établissement d'un Plan d'Installation de Chantier (PIC) pour un immeuble R+6 en milieu urbain contraint. Comment dimensionne-t-on le massif de fondation de la grue à tour et son survol ?",
        "Exposez le principe d'un suivi budgétaire mensuel sur chantier (RMA). Comment calcule-t-on l'écart sur quantité et l'écart sur coût entre le prévisionnel et le réalisé ?",
        "Détaillez le rôle et les responsabilités du Conducteur de Travaux dans l'application de la réglementation SPS (Loi de 1993, rédaction du PPSPS, coactivité avec les sous-traitants).",
      ],
    },

    {
      id: 19,
      key: 'interview_questions',
      title: "Questions d'entretien — Conducteur de Travaux / Chef de Chantier",
      icon: '💼',
      type: 'interview',
      questions: [
        {
          question: "En cours de chantier, votre chef de chantier vous informe que l'équipe de maçons a 4 jours de retard sur la réalisation des voiles du R+2. Comment réagissez-vous ?",
          answer_hint: "Procédure méthodique : 1. Vérifier immédiatement si les voiles sont sur le Chemin Critique (si MT > 4 jours, aucun impact sur la fin de chantier). 2. Si les voiles sont critiques, analyser la cause du retard (intempéries, panne de grue, sous-effectif). 3. Mettre en place un plan de rattrapage (ajouter un bancheur supplémentaire, faire des heures supplémentaires le samedi, ajouter du matériel de coffrage pour faire 2 coulages/jour).",
        },
        {
          question: "Quelle est la différence entre le PPSPS et le PGC (Plan Général de Coordination) ?",
          answer_hint: "Le PGC est rédigé par le Coordonnateur SPS (CSPS) pour la maîtrise d'ouvrage : il définit les règles de sécurité globales et les mesures de prévention de coactivité sur le chantier. Le PPSPS (Plan Particulier de Sécurité et de Protection de la Santé) est rédigé par chaque entreprise de travaux pour détailler ses propres modes opératoires sécurisés et équipements de protection.",
        },
        {
          question: "Comment gérez-vous la livraison des bétons BPE en toupie pour éviter les bouchons et les pénalités d'attente ?",
          answer_hint: "Établir un cadencement précis avec la centrale à béton (ex: 1 toupie de 8 m³ toutes les 25 minutes). S me synchroniser avec le temps de pompage ou de vidange à la benne (8 m³ à la benne de 1 000 L = 8 levages × 4 min = 32 minutes). Prévoir une aire de lavage des toupies propre sur le PIC.",
        },
      ],
    },

    {
      id: 20,
      key: 'practical_case',
      title: "Cas pratique — Organisation du gros œuvre d'un immeuble R+4",
      icon: '🔧',
      type: 'practical',
      scenario: "Étude de cas — Organisation et budget gros œuvre d'un bâtiment R+4 de 2 500 m² SHAB (Durée gros œuvre accordée = 5 mois)",
      description: `**Mise en situation** : Conducteur de travaux principal. Budget Déboursé Sec DS = 1 200 000 €. Frais de chantier FC = 120 000 €. Temps total estimé = 12 000 heures de main-d'œuvre sur 20 semaines de travail (5 mois).`,
      resolution_latex_1: "\\text{Effectif moyen nécessaire : } N = \\frac{12\\,000 \\text{ h}}{20 \\text{ semaines} \\times 39 \\text{ h/semaine}} = \\frac{12\\,000}{780} = 15{,}38 \\implies 16 \\text{ compagnons}",
      resolution_latex_2: "K_v = \\frac{1 + \\frac{120\\,000}{1\\,200\\,000}}{1 - (0{,}09 + 0{,}05)} = \\frac{1{,}10}{0{,}86} = 1{,}2791 \\implies PV_{HT} = 1\\,200\\,000 \\times 1{,}2791 = 1\\,534\\,920 \\text{ \\euro}",
      resolution_latex_3: "\\text{Choix Grue à tour : Potain MDT 178 (Flèche 50 m, charge en bout 1,5 t, massif béton 6×6×1,2 m)}",
      conclusion: "Chantier organisé avec 16 compagnons (1 chef de chantier, 2 chefs d'équipe, 8 maçons-bancheurs, 3 ferrailleurs, 2 grutiers/manœuvres). Livraison gros œuvre tenue en 19,5 semaines.",
    },

    {
      id: 21,
      key: 'summary',
      title: "Résumé exécutif — La Conduite de Chantier en 6 points",
      icon: '📋',
      type: 'summary',
      content: `### La Conduite de Chantier en 6 fondamentaux

1. **PIC (Plan d'Installation de Chantier)** : Carte d'identité spatiale (grues, base vie, stockage, accès, fluides).
2. **Étude de Prix** : $PV_{HT} = DS \\times K_v$ — le Déboursé Sec (DS) réunit les coûts directs stricts (MO, matériaux, matériels).
3. **Planning & Chemin Critique (CPM)** : Les tâches à marge totale nulle ($MT = 0$) régissent impérativement la date de livraison.
4. **Main-d'Œuvre & Effectifs** : $H_{MO} = \\sum \\text{Quantité} \\times TU$ — adapter l'équipe au délai accordé.
5. **Sécurité SPS & PPSPS** : Analyse des risques, garde-corps conformes (NF EN 13374) et zéros accidents du travail.
6. **Contrôle Budgétaire** : Suivi hebdomadaire des heures et mensuel des écarts DS prévus vs réalisés (RMA).`,
    },

    {
      id: 22,
      key: 'key_points',
      title: "Points clés à mémoriser — Conduite de Chantier",
      icon: '⭐',
      type: 'keypoints',
      points: [
        "Le PIC doit être validé avant tout démarrage d'installation sur le terrain",
        "Prix de Vente HT : PV_HT = DS × Kv — veiller à ne pas dépasser le Déboursé Sec prévu",
        "Chemin critique (CPM) : Tout retard sur une tâche du chemin critique retarde la livraison du chantier",
        "PPSPS obligatoire pour chaque entreprise avant toute intervention sur le chantier",
        "Un chantier propre (méthode 5S / SOSED) réduit les accidents de 50% et améliore les rendements",
        "Toujours vérifier la courbe de charge de la grue au point le plus éloigné du bâtiment",
        "Calcul des effectifs : N_ouvriers = Heures totales / (Nombre de jours × Heures/jour)",
      ],
    },

    {
      id: 23,
      key: 'self_assessment',
      title: "Auto-évaluation — Organisation & Conduite de Chantier",
      icon: '🏆',
      type: 'self_assessment',
      description: "Validez vos compétences en gestion et organisation de chantier de BTP :",
      objectives: [
        "Je sais élaborer et lire un Plan d'Installation de Chantier (PIC) complet",
        "Je maîtrise le calcul du Déboursé Sec (DS), du coefficient de vente Kv et du Prix de Vente HT",
        "Je sais calculer les heures de main-d'œuvre (H_MO) avec les Temps Unitaires (TU)",
        "Je sais dimensionner l'effectif d'équipe en fonction du planning d'exécution",
        "Je comprends la notion de Chemin Critique (CPM) et de Marge Totale sur un planning Gantt",
        "Je connais les exigences de sécurité du PPSPS et de la réglementation SPS",
        "J'ai résolu les 3 exercices d'organisation de chantier avec succès",
        "J'ai obtenu 3/3 au quiz de conduite de chantier",
      ],
    },
  ],

  quickQuiz: {
    question: "Dans une étude de prix BTP, que représente le Déboursé Sec (DS) ?",
    options: [
      { id: 'a', label: "A) Les coûts de publicité de l'entreprise" },
      { id: 'b', label: "B) Le coût direct strict des matériaux, de la main-d'œuvre et du matériel affecté" },
      { id: 'c', label: "C) Le bénéfice net avant impôts" },
    ],
    correct: 'b',
    explanation: "Le Déboursé Sec (DS) réunit l'ensemble des coûts directs stricts nécessaires à la réalisation physique de l'ouvrage sans les frais généraux ni le bénéfice.",
  },
};
