// ── Lesson: BIM Management, IFC/BCF & Coordination 4D/5D — Module 34 ─────────
export const lesson_bim_management = {
  moduleId: 34,
  slug: 'cas',
  lessonIndex: 1,
  title: "BIM Management, Collaboration IFC/BCF, CDE & Coordination 4D/5D",
  subtitle: "Module 34 — BIM Management & Processus Numériques",
  level: 'Avancé',
  duration: '35h',
  diagramType: 'bridge_structure',
  tags: ['BIM', 'BIM Management', 'IFC', 'BCF', 'CDE', 'ISO 19650', 'LOD', 'Navisworks', 'Solibri'],

  steps: [
    {
      id: 1,
      key: 'definition',
      title: "Définition — Le BIM Management & l'openBIM",
      icon: '📖',
      type: 'definition',
      fr: 'Convention BIM, Formats IFC & BCF, CDE ISO 19650 & Niveaux LOD / LOIN',
      en: 'BIM Management, openBIM (IFC/BCF), CDE (ISO 19650) & 4D/5D Simulation',
      metier: "Pratiquée par les BIM Managers, Coordinateurs BIM, Responsables Synthèse 3D et Directeurs de la Transition Numérique du BTP.",
      content: `Le **BIM Management** est l'ingénierie d'organisation et de pilotage des processus numériques de modélisation de l'information du bâtiment (BIM). Il structure la collaboration multidisciplinaire entre la maîtrise d'ouvrage, les architectes, les bureaux d'études et les entreprises à travers un langage universel : **l'openBIM**.

### Les 4 piliers du BIM Management :
1. **La Convention BIM (BIM Execution Plan - BEP)** : Document contractuel rédigé par le BIM Manager fixant les règles du jeu, le rôle des acteurs, les logiciels, les repères géographiques et les formats d'échange.
2. **L'Environnement Commun de Données (CDE / ISO 19650)** : Plateforme collaborative cloud unique où sont stockées, validées et diffusées les maquettes et documents.
3. **Les Formats Neutres openBIM (IFC & BCF)** :
   - **IFC (Industry Foundation Classes / ISO 16739)** : Format d'échange 3D universel décrivant la géométrie et les attributs de la structure sans dépendre d'un logiciel propriétaire (Revit, ArchiCAD, Tekla).
   - **BCF (BIM Collaboration Format)** : Format léger d'échange des requêtes d'erreurs/clashs entre logiciels.
4. **Le Niveau de Détail & de Besoin en Information (LOD / LOIN)** : Définition de la maturité de la maquette (LOD 100 esquisse $\\to$ LOD 300 exécution $\\to$ LOD 500 as-built tel que construit).

> 💡 **Le rôle du BIM Manager** : Le BIM Manager ne dessine pas les plans ! C'est le "chef d'orchestre numérique" qui garantit l'interopérabilité des maquettes, élimine les conflits 3D et pilote les dimensions 4D (Temps) et 5D (Coûts).`,
    },

    {
      id: 2,
      key: 'importance',
      title: "Pourquoi le BIM Management transforme la rentabilité du projet",
      icon: '⚠️',
      type: 'importance',
      content: `Construire numériquement d'abord (Virtual Design and Construction - VDC) permet de détecter et résoudre toutes les erreurs de conception sur écran avant de poser le premier m³ de béton.

- **Élimination des clashs sur chantier (Zero Clash)** : Un réseau de gaines CVC traversant une poutre béton armé détecté en synthèse 3D coûte 0 € à corriger sur ordinateur. Découvert sur le chantier, il stoppe l'équipe et coûte 10 000 € !
- **Gestion du planning 4D & des coûts 5D** : Associer les objets IFC aux tâches du planning Gantt (4D) pour simuler visuellement l'avancement du chantier et extraire automatiquement les métrés (5D).
- **Continuité numérique vers le GEM (BIM 6D/7D)** : Livrer au Maître d'Ouvrage un **Jumeau Numérique (Digital Twin)** complet pour la gestion-exploitation-maintenance.

> ⚠️ **Règle d'or** : "Sans Convention BIM signée par tous les mandataires dès le démarrage des études, le BIM se transforme en une anarchie de fichiers propriétaires inexploitables !"`,
    },

    {
      id: 3,
      key: 'applications',
      title: "Applications terrain — Logiciels & Processus de Synthèse",
      icon: '🏗️',
      type: 'applications',
      examples: [
        {
          context: "Détection d'Interférences sous Solibri / Navisworks",
          text: "Analyse automatique de collision entre la maquette Structure IFC et la maquette MEP (Fluides) générant un rapport BCF de 45 clashs prioritaires.",
        },
        {
          context: "Gestion de l'Environnement Commun de Données (CDE ISO 19650)",
          text: "Mise en place d'un CDE sous Trimble Connect, Autodesk Construction Cloud ou Catenda avec workflow de validation (WIP -> Shared -> Published -> Archived).",
        },
        {
          context: "Simulation 4D de la Phase de Gros-Œuvre sous Synchro 4D",
          text: "Liaison du planning MS Project avec la maquette IFC pour valider visuellement les phases de rotation des banches et l'avancement de la grue.",
        },
        {
          context: "Extraction des Métrés 5D (Quantity Take-Off / QTO)",
          text: "Liaison automatique des propriétés IFC (IfcSlab, IfcBeam) au bordereau de prix BPU pour générer le devis quantitatif estimatif sans saisie manuelle.",
        },
        {
          context: "Livraison de la Maquette DOE Numérique (LOD 500 / BIM GEM)",
          text: "Intégration des fiches techniques des équipements (Pompes, CTA, TGBT) dans la maquette IFC transmise au système de GMAO du client.",
        },
      ],
    },

    {
      id: 4,
      key: 'theory',
      title: "Théorie — Architecture IFC, BCF & Norme ISO 19650",
      icon: '📐',
      type: 'theory',
      diagramType: 'bridge_structure',
      content: `### 1. La Hiérarchie Spatiale des Fichiers IFC (ISO 16739)

La structure orientée objet d'un fichier IFC suit une arborescence rigide :

$$\\text{IfcProject} \\longrightarrow \\text{IfcSite} \\longrightarrow \\text{IfcBuilding} \\longrightarrow \\text{IfcBuildingStorey} \\longrightarrow \\begin{cases} \\text{IfcWall} \\\\ \\text{IfcSlab} \\\\ \\text{IfcBeam} \\\\ \\text{IfcColumn} \\end{cases}$$

Chaque composant contient des **Property Sets (Psets)** normalisés (ex: \`Pset_WallCommon.LoadBearing = TRUE\`, \`Pset_Concrete.CompressiveStrength = C30/37\`).

### 2. Le Standard BCF (BIM Collaboration Format)

Au lieu de réexporter une maquette IFC lourde de 500 Mo à chaque correction, les coordinateurs échangent des fichiers **.bcfzip** légers (quelques Ko) contenant :
- Un GUID unique d'identification du composant en clash.
- La position de la caméra 3D (point de vue).
- Une capture d'écran de l'erreur avec annotation.
- L'attribution de la tâche à l'ingénieur responsable (ex: "Déplacer gaine Ø 200 de 15 cm vers le bas").

### 3. Les États de l'Information selon la Norme ISO 19650 (CDE)

1. **WIP (Work In Progress)** : Travail en cours interne à chaque discipline.
2. **SHARED (Partagé)** : Maquettes publiées pour coordination inter-métiers.
3. **PUBLISHED (Publié)** : Documents validés par le MOA pour exécution.
4. **ARCHIVED (Archivé)** : Historique contractuel du projet.`,
    },

    {
      id: 5,
      key: 'formulas',
      title: "Formules essentielles — Maturité BIM & Indicateurs",
      icon: '🔢',
      type: 'formulas',
      diagramType: 'bridge_structure',
      formulas: [
        {
          name: "Calcul du Niveau de Besoin en Information (LOIN)",
          latex: "\\text{LOIN} = \\text{LOG (Niveau de détail Géométrique)} + \\text{LOI (Niveau de détail Informationnel)}",
          description: "Remplace la notion floue de LOD en séparant la forme 3D (LOG) des attributs de la base de données (LOI).",
        },
        {
          name: "Taux de Résolution des Clashs (CRR)",
          latex: "CRR = \\frac{N_{\\text{clashs résolus}}}{N_{\\text{clashs totaux identifiés}}} \\times 100 \\quad [\\%]",
          description: "Doit atteindre 100% avant le lancement de la fabrication des éléments en usine ou sur chantier.",
        },
        {
          name: "Gain de temps sur la Synthèse 3D grâce au BIM",
          latex: "\\Delta T_{\\text{synthèse}} = T_{\\text{synthèse 2D classique}} \\times (0{,}40 \\text{ à } 0{,}60)",
          description: "Le BIM réduit la durée des réunions de synthèse de 50% grâce à la visualisation 3D des conflits.",
        },
      ],
    },

    {
      id: 6,
      key: 'stepbystep',
      title: "Calcul complet — Processus de détection et résolution de clashs 3D",
      icon: '🔬',
      type: 'stepbystep',
      problem: "Sur un projet de bâtiment de bureaux de 10 000 m², le BIM Manager effectue la revue de synthèse 3D de l'Étape EXE. Il superpose la maquette IFC Structure (35 Mo) et la maquette IFC CVC-Fluides (42 Mo) sous Solibri Model Checker. 1) L'outil détecte 120 collisions géométriques brutes. 2) Après filtrage des tolérances (ignorer les réservations < 50 mm), il reste 35 clashs critiques (gaines traversant des poutres BA). 3) Organiser l'export BCF et la résolution avec l'ingénieur Fluides.",
      steps_demo: [
        { n: 1, text: "Filtrage et classification des clashs : Éliminer les faux positifs en appliquant une tolérance de clash de 20 mm sous Solibri." },
        { n: 2, text: "Génération des fiches de requêtes BCF : Export d'un fichier .bcfzip contenant les 35 vues 3D annotées avec attribution au BET Fluides." },
        { n: 3, text: "Envoi via le CDE (BIM Track) : La tâche BCF-042 est assignée avec priorité Haute et délai de réponse de 5 jours." },
        { n: 4, text: "Correction dans Revit CVC : L'ingénieur CVC ouvre la fiche BCF dans Revit via le plugin BCF Manager, la caméra se place automatiquement sur la gaine en conflit. Il abaisse la gaine de 20 cm." },
        { n: 5, text: "Mise à jour et clôture : Réexport IFC CVC (v2). Le BIM Manager relance la détection : le clash BCF-042 passe automatiquement au statut 'SOLVED / CLOSED' ✓" },
      ],
      result_latex: "N_{\\text{clashs critiques}} = \\textbf{35} \\qquad \\text{Résolution via BCF 2.1} \\implies \\text{Statut : } \\textbf{100\\% SOLVED} \\quad \\checkmark",
    },

    {
      id: 7,
      key: 'units',
      title: "Unités & Acronymes du BIM Management — Tableau de référence",
      icon: '📏',
      type: 'units',
      table: [
        { grandeur: "IFC (Industry Foundation Classes)", si: "Format openBIM ISO 16739 (.ifc)", imperial: ".ifc", conversion: "Standard d'échange 3D universel certifié par buildingSMART" },
        { grandeur: "BCF (BIM Collaboration Format)", si: "Format de commentaires/clashs (.bcfzip)", imperial: ".bcf", conversion: "Échange léger de requêtes de modifications entre logiciels BIM" },
        { grandeur: "CDE (Common Data Environment)", si: "Plateforme cloud ISO 19650", imperial: "Cloud CDE", conversion: "Espace unique de stockage et de validation des maquettes" },
        { grandeur: "LOD (Level of Development)", si: "LOD 100, 200, 300, 350, 400, 500", imperial: "LOD 100-500", conversion: "Niveau de développement et de précision géométrique de l'objet" },
        { grandeur: "Dimensions du BIM", si: "3D (Géométrie) | 4D (Temps) | 5D (Coûts) | 6D (Développement durable) | 7D (GEM)", imperial: "3D-7D", conversion: "Niveaux d'exploitation des données de la maquette numérique" },
      ],
      note: "⚠️ ATTENTION : Les fichiers IFC doivent être exportés en **coordonnées géographiques réelles (Lambert 93 / NGF)** d'après le point origine défini dans la Convention BIM !",
    },

    {
      id: 8,
      key: 'hypotheses',
      title: "Hypothèses & principes d'organisation d'un projet BIM",
      icon: '📋',
      type: 'hypotheses',
      items: [
        { type: 'info', text: "La Convention BIM rédigée en phase d'amorçage prévaut sur les règles logicielles individuelles. Elle est opposable à tous les intervenants." },
        { type: 'info', text: "L'openBIM impose d'utiliser le format IFC4 ou IFC2x3 certifié buildingSMART pour garantir la pérennité des données sur 50 ans." },
        { type: 'warning', text: "ATTENTION : Ne jamais modifier la maquette d'une autre discipline ! Le Coordinateur BIM Structure ne modifie jamais les tuyaux du CVC. Il émet une requête BCF." },
        { type: 'warning', text: "Poids des maquettes IFC : Limiter la taille des fichiers IFC à 200 Mo maximum par tronçon/niveau pour ne pas saturer les ordinateurs du chantier." },
        { type: 'tip', text: "Nommage normalisé des fichiers : Appliquer la règle de nommage ISO 19650 : \`PROJET-LOT-NIVEAU-TYPE-DISCIPLINE-ZONE.ifc\` (ex: \`TGV-BAT-N01-MAQ-STR-Z01.ifc\`)." },
      ],
    },

    {
      id: 9,
      key: 'simple_examples',
      title: "Exemples guidés — Structures IFC & Niveaux LOD",
      icon: '✏️',
      type: 'examples_simple',
      examples: [
        {
          title: "Exemple 1 : Correspondance des entités IFC pour le Gros-Œuvre",
          given: "Objets de modélisation 3D : Voile béton, Dalle pleine, Poteau, Poutre, Fondation semelle",
          find: "Les entités IFC officielles correspondantes",
          solution_latex: "\\text{Voile } \\to \\text{IfcWall} \\quad | \\quad \\text{Dalle } \\to \\text{IfcSlab} \\quad | \\quad \\text{Poteau } \\to \\text{IfcColumn} \\quad | \\quad \\text{Poutre } \\to \\text{IfcBeam} \\quad | \\quad \\text{Semelle } \\to \\text{IfcFooting}",
          result: "Mappage IFC universel buildingSMART.",
        },
        {
          title: "Exemple 2 : Définition des niveaux LOD 300 vs LOD 400",
          given: "Poutre en béton armé",
          find: "Différence entre LOD 300 (Études) et LOD 400 (Exécution)",
          solution_latex: "\\text{LOD 300 : Géométrie exacte de la poutre béton sans les aciers} \\quad | \\quad \\text{LOD 400 : Poutre + Armatures BA 3D complètes façonnées avec étriers}",
          result: "LOD 400 intègre le ferraillage 3D d'exécution prêt pour le façonnage d'usine.",
        },
        {
          title: "Exemple 3 : Calcul du Taux de Résolution des Clashs (CRR)",
          given: "Total de 80 clashs identifiés en phase APD. 72 clashs ont été résolus en phase PRO/EXE",
          find: "Le taux de résolution CRR",
          solution_latex: "CRR = \\frac{72}{80} \\times 100 = 90{,}0\\%",
          result: "CRR = 90%. Il reste 10% de clashs à solder avant visa d'exécution.",
        },
      ],
    },

    {
      id: 10,
      key: 'real_examples',
      title: "Exemple réel — Le BIM 4D/5D du Grand Paris Express (Ligne 15 Sud)",
      icon: '🏢',
      type: 'examples_real',
      diagramType: 'bridge_structure',
      examples: [
        {
          context: "Construction simultanée de 16 gares et 33 km de tunnels en milieu urbain dense",
          scenario: "Utilisation d'une plateforme CDE centralisée hébergeant plus de 4 000 maquettes IFC. Coordination 4D (Synchro) pour simuler les approvisionnements par camion et 5D pour les décomptes.",
          decomposition_latex: "\\text{Réduction de 85\\% des clashs sur chantier grâce à la revue de synthèse openBIM bimensuelle}",
          lesson: "Le BIM Management a permis d'éviter les arrêts de chantier coûteux en détectant plus de 12 000 interférences réseau-structure pendant la phase d'études.",
        },
      ],
    },

    {
      id: 11,
      key: 'diagrams',
      title: "Schéma du Workflow ISO 19650 (CDE) & Dimensions du BIM 3D à 7D",
      icon: '📊',
      type: 'interactive_diagram',
      diagramType: 'bridge_structure',
      description: "Visualisez l'organisation d'un Environnement Commun de Données CDE (WIP, Shared, Published, Archived) et l'arbre des dimensions BIM 3D, 4D, 5D, 6D, 7D.",
      diagram_description: [
        "Workflow CDE ISO 19650 : Circulation des maquettes IFC du statut WIP (Travail) vers SHARED (Synthèse) puis PUBLISHED (Bon pour exécution)",
        "Dimensions du BIM : 3D (Modèle), 4D (Planning Gantt), 5D (Budget/Métrés), 6D (Décarbonation/ACV), 7D (GEM/Maintenance)",
        "Échange BCF : Transmission du fichier .bcfzip contenant l'image 3D et la caméra d'orientation",
      ],
    },

    {
      id: 12,
      key: 'mistakes',
      title: "Erreurs fatales en BIM Management",
      icon: '⛔',
      type: 'mistakes',
      items: [
        {
          mistake: "Confondre BIM Manager et Projeteur / Modélisateur BIM",
          trap: "Exiger du BIM Manager qu'il modélise les plans d'armatures sous Revit",
          fix: "Le BIM Manager est un manager de processus et de données. La modélisation est assurée par les projeteurs des BET spécialisés.",
        },
        {
          mistake: "Travailler en 'BIM fermé' (Propriétaire) sans contrôler les exports IFC",
          trap: "Envoyer uniquement des fichiers .RVT ou .DWG sans vérifier l'export IFC4",
          fix: "Les acteurs n'utilisant pas le même logiciel ne peuvent pas lire vos maquettes. Valider systématiquement l'export IFC sous un viewer neutre (BIMvision, Solibri).",
        },
        {
          mistake: "Négliger le géo-référencement de la maquette (Point Topographique)",
          trap: "Modéliser la structure à l'origine (0,0,0) sans l'ancrer dans le système Lambert 93 / NGF",
          fix: "Lors de la superposition 3D avec le projet VRD/Géomètre, la maquette se retrouve volante à 500 km ! Fixer le point de base projet (Project Base Point) dans la Convention BIM.",
        },
      ],
    },

    {
      id: 13,
      key: 'tips',
      title: "Astuces du BIM Manager certifié buildingSMART",
      icon: '💡',
      type: 'tips',
      tips: [
        "Filtres d'export IFC Revit : Utiliser le fichier de mappage officiel \`exportlayers-dwg-IFC.txt\` pour s'assurer que chaque famille Revit s'exporte dans la bonne classe IFC.",
        "Réunion de synthèse 3D efficace : Ne jamais projeter des listings de 500 clashs secondaires ! Filtrer uniquement les 'Major Clashs' (Interférences Dalle-Conduite, Poteau-Gaine).",
        "Utilisation de BCF Manager : Installer le plugin BCF gratuit dans Revit / ArchiCAD pour cliquer sur la tâche et aller directement à la caméra 3D du clash.",
        "Logiciels de BIM Management de référence : Solibri Model Checker, Navisworks Manage, Revizto, BIM Track (Newforma), Catenda / BIMSync, Trimble Connect.",
      ],
    },

    {
      id: 14,
      key: 'normes',
      title: "Normes & Standards openBIM",
      icon: '📜',
      type: 'norms',
      norms: [
        { code: "NF EN ISO 19650-1 & 2", description: "Organisation et numérisation des informations relatives aux bâtiments et ouvrages de génie civil, y compris le BIM (CDE, BEP, LOIN)." },
        { code: "ISO 16739-1 (IFC4)", description: "Industry Foundation Classes (IFC) pour le partage de données dans le secteur de la construction." },
        { code: "Standard BCF (buildingSMART)", description: "BIM Collaboration Format pour l'échange de commentaires et de gestion de réserve 3D." },
        { code: "Guide la Convention BIM (MINnD)", description: "Recommandations françaises pour la rédaction de la Convention BIM de projet." },
      ],
    },

    {
      id: 15,
      key: 'exercises',
      title: "Exercices BIM Management & IFC — 3 niveaux",
      icon: '✍️',
      type: 'exercises',
      exercises: [
        {
          id: 'ex_bim_1',
          number: 1,
          difficulty: 'Facile',
          text: "Quelle entité IFC doit être utilisée pour modéliser une dalle de couverture en béton armé d'après le standard buildingSMART ISO 16739 ?",
          hint: "IfcWall, IfcSlab, IfcBeam ou IfcColumn ?",
          answer_latex: "\\text{Entité officielle : } \\textbf{IfcSlab} \\quad (\\text{PredefinedType = ROOF ou FLOOR})",
          answer_text: "Entité IFC : IfcSlab.",
        },
        {
          id: 'ex_bim_2',
          number: 2,
          difficulty: 'Moyen',
          text: "Une synthèse 3D sous Navisworks identifie 150 clashs en phase APD. Lors de la revue PRO, 125 clashs ont été corrigés par les BET. Calculer le taux de résolution CRR.",
          hint: "CRR = (Clashs résolus / Total) × 100.",
          answer_latex: "CRR = \\frac{125}{150} \\times 100 = 83{,}33\\%",
          answer_text: "Taux de résolution des clashs CRR = 83,3%.",
        },
        {
          id: 'ex_bim_3',
          number: 3,
          difficulty: 'Difficile',
          text: "Un projet de 20 000 m² subissait habituellement 80 heures de réunions de synthèse 2D sur plans papier. Grâce au BIM et au format BCF, la durée de synthèse est réduite de 50%. Les honoraires de synthèse sont valorisés à 85 €/h. Calculer l'économie financière réalisée.",
          hint: "Heures gagnées = 80 × 50%. Économie = Heures × 85 €.",
          answer_latex: "\\text{Heures économisées} = 80 \\times 0{,}50 = 40 \\text{ h} \\qquad \\text{Économie} = 40 \\times 85 = 3\\,400 \\text{ \\euro}",
          answer_text: "Économie directe de 3 400 € + annulation des erreurs de chantier.",
        },
      ],
    },

    {
      id: 16,
      key: 'corrections',
      title: "Corrections détaillées",
      icon: '✅',
      type: 'corrections',
      note: "Retrouvez les schémas de structuration IFC et les protocoles BCF en cliquant sur 'Voir la correction'.",
    },

    {
      id: 17,
      key: 'quiz',
      title: "Quiz BIM Management — 3 questions",
      icon: '🎯',
      type: 'quiz',
      questions: [
        {
          id: 'q_bim_1',
          question: "Quelle est la différence fondamentale entre le format IFC et le format BCF ?",
          options: [
            { id: 'a', text: "Il n'y en a aucune" },
            { id: 'b', text: "Le fichier IFC contient toute la géométrie 3D et les données de la maquette (lourd), tandis que le BCF ne contient que des notes/commentaires et la vue caméra de clashs (très léger)" },
            { id: 'c', text: "Le BCF est payant" },
          ],
          correct: 'b',
          explanation: "L'IFC transporte la maquette 3D complète, tandis que le BCF transporte les requêtes de modifications et annotations entre les intervenants.",
        },
        {
          id: 'q_bim_2',
          question: "Quel document contractuel rédigé par le BIM Manager fixe les règles du jeu, les formats et les standards du projet ?",
          options: [
            { id: 'a', text: "Le permis de construire" },
            { id: 'b', text: "La Convention BIM (BIM Execution Plan - BEP)" },
            { id: 'c', text: "Le bulletin de paye" },
          ],
          correct: 'b',
          explanation: "La Convention BIM (BEP) régit l'organisation numérique, les règles de modélisation et le processus de collaboration entre tous les acteurs.",
        },
        {
          id: 'q_bim_3',
          question: "À quelle dimension du BIM correspond la simulation temporelle du planning de chantier (Gantt) ?",
          options: [
            { id: 'a', text: "BIM 3D" },
            { id: 'b', text: "BIM 4D (Temps)" },
            { id: 'c', text: "BIM 5D (Coûts)" },
          ],
          correct: 'b',
          explanation: "Le BIM 4D associe la géométrie 3D au planning de construction (4ème dimension : le temps).",
        },
      ],
    },

    {
      id: 18,
      key: 'exam_questions',
      title: "Questions d'examen — Master BIM Management",
      icon: '🎓',
      type: 'exam',
      questions: [
        "Détaillez la structure et le modèle de données orienté objet d'un fichier IFC4 (IfcRoot, IfcRelationship, Psets).",
        "Rédigez la trame d'une Convention BIM selon la norme ISO 19650 pour la construction d'un complexe hospitalier.",
      ],
    },

    {
      id: 19,
      key: 'interview_questions',
      title: "Questions d'entretien — BIM Manager",
      icon: '💼',
      type: 'interview',
      questions: [
        {
          question: "Comment gérez-vous le refus d'un bureau d'études de fournir des maquettes au format openBIM IFC ?",
          answer_hint: "Rappeler que la Convention BIM signée contractuellement impose le format openBIM IFC. Proposer une séance de formation/accompagnement pour configurer leur filtre d'export IFC dans leur logiciel (Revit/ArchiCAD) afin de débloquer la collaboration.",
        },
      ],
    },

    {
      id: 20,
      key: 'practical_case',
      title: "Cas pratique — Revue de Synthèse BIM 3D d'un projet de gare",
      icon: '🔧',
      type: 'practical',
      scenario: "Revue de synthèse numérique d'une gare de 15 000 m² sous Solibri avec 4 maquettes IFC (Structure, Architecte, CVC, Électricité).",
      description: "Détection de 200 clashs, filtrage et animation de la réunion de synthèse.",
      resolution_latex_1: "\\text{Clashs majeurs retenus : } 18 \\text{ réservations de gaines en poutres BA non prévues}",
      resolution_latex_2: "\\text{Diffusion BCF 2.1 via Catenda : } 18 \\text{ fiches BCF assignées au BET Structure et CVC}",
      conclusion: "Toutes les réservations de poutres validées en 48 heures sans arrêt de chantier.",
    },

    {
      id: 21,
      key: 'summary',
      title: "Résumé exécutif — Le BIM Management en 6 points",
      icon: '📋',
      type: 'summary',
      content: `### Le BIM Management en 6 points clés

1. **Convention BIM (BEP)** : Document contractuel fixant les règles de modélisation.
2. **ISO 19650 & CDE** : Environnement Commun de Données (WIP, Shared, Published).
3. **Format IFC (ISO 16739)** : Standard 3D openBIM neutre et universel.
4. **Format BCF** : Échange léger des requêtes d'erreurs et de clashs 3D.
5. **Dimensions BIM** : 3D (Modèle), 4D (Planning), 5D (Budget/Métrés), 7D (GEM).
6. **Synthèse 3D Zero Clash** : Élimination des conflits avant l'exécution sur chantier.`,
    },

    {
      id: 22,
      key: 'key_points',
      title: "Points clés à mémoriser — BIM Management",
      icon: '⭐',
      type: 'keypoints',
      points: [
        "IFC = Modèle 3D neutre | BCF = Notes de clashs légères",
        "Convention BIM obligatoire dès la phase d'études",
        "BIM 4D = Planning | BIM 5D = Coûts",
        "CDE : Espace unique de validation des maquettes ISO 19650",
        "Toujours géo-référencer les maquettes en Lambert 93 / NGF",
      ],
    },

    {
      id: 23,
      key: 'self_assessment',
      title: "Auto-évaluation — BIM Management",
      icon: '🏆',
      type: 'self_assessment',
      description: "Validez vos compétences en BIM Management et openBIM :",
      objectives: [
        "Je comprends la structure d'un fichier IFC et le rôle du format BCF",
        "Je sais rédiger une Convention BIM et structurer un CDE selon l'ISO 19650",
        "Je maîtrise le processus de synthèse 3D et de détection de clashs",
        "J'ai résolu les 3 exercices de BIM Management avec succès",
        "J'ai obtenu 3/3 au quiz BIM Management",
      ],
    },
  ],

  quickQuiz: {
    question: "Quel format openBIM est spécifiquement conçu pour échanger des commentaires et des requêtes de clashs légères entre logiciels ?",
    options: [
      { id: 'a', label: "A) Le format IFC" },
      { id: 'b', label: "B) Le format BCF (BIM Collaboration Format)" },
      { id: 'c', label: "C) Le format DWG" },
    ],
    correct: 'b',
    explanation: "Le format BCF transporte les requêtes de modifications et annotations de clashs 3D sans renvoyer la maquette lourde.",
  },
};
