// ── Lesson: Logiciels de calcul & automatisation Python — Module 29 ─────────────
export const lesson_logiciels = {
  moduleId: 29,
  slug: 'logiciels',
  lessonIndex: 1,
  title: "Logiciels de Calcul de Structures, Méthode des Éléments Finis & Automatisation en Python",
  subtitle: "Module 29 — Logiciels Métiers & Scripting Python/MATLAB",
  level: 'Intermédiaire',
  duration: '50h',
  diagramType: 'process_flow',
  tags: ['Logiciels', 'Robot', 'SAP2000', 'ETABS', 'MEF', 'Python', 'NumPy', 'Vérification'],

  steps: [
    {
      id: 1,
      key: 'definition',
      title: "Définition — Le calcul assisté par ordinateur en bureau d'études",
      icon: '📖',
      type: 'definition',
      fr: "Logiciels de calcul de structures et programmation appliquée",
      en: 'Structural Analysis Software & Engineering Scripting',
      metier: "Outil quotidien des ingénieurs structure, des projeteurs et des ingénieurs méthodes ; le scripting est de plus en plus demandé pour automatiser les tâches répétitives.",
      content: `Un **logiciel de calcul de structures** (Robot Structural Analysis, SAP2000, ETABS, SCIA Engineer, Advance Design…) construit un modèle numérique de l'ouvrage, résout les équations d'équilibre par la **méthode des éléments finis (MEF)** et vérifie les éléments selon les Eurocodes.

### Ce que fait le logiciel
1. **Discrétiser** la structure en éléments (barres, poutres, plaques, coques, volumes) reliés par des **nœuds**.
2. **Assembler** la matrice de rigidité globale $[K]$.
3. **Résoudre** $[K]\\{u\\} = \\{F\\}$ pour obtenir les déplacements $\\{u\\}$.
4. **Déduire** efforts, contraintes et réactions, puis les comparer aux résistances.

### Ce que fait l'ingénieur
- Choisir un modèle **représentatif** (appuis, liaisons, rigidités, phasage).
- Définir les charges et les combinaisons de l'EN 1990.
- **Vérifier** les résultats par des contrôles indépendants.

> 💡 Le logiciel calcule exactement le modèle qu'on lui donne, pas l'ouvrage réel : « garbage in, garbage out ».`,
    },

    {
      id: 2,
      key: 'importance',
      title: "Pourquoi ces outils sont indispensables… et dangereux",
      icon: '⚠️',
      type: 'importance',
      content: `Les logiciels permettent d'étudier des structures impossibles à traiter à la main (bâtiments de grande hauteur, ponts courbes, analyses sismiques).

- **Productivité** : des centaines de combinaisons d'actions vérifiées en quelques minutes.
- **Coordination BIM** : échange de modèles IFC avec l'architecte et les fluides.
- **Automatisation** : un script Python ou un appel d'API supprime les ressaisies et les erreurs de copie.
- **Risque** : une unité mal saisie, un appui mal défini ou un cas de charge oublié produit des résultats faux mais crédibles.

> ⚠️ **Règle d'or** : aucun résultat de logiciel ne quitte le bureau d'études sans contrôle d'équilibre et sans vérification d'ordre de grandeur à la main.`,
    },

    {
      id: 3,
      key: 'applications',
      title: "Applications professionnelles",
      icon: '🏗️',
      type: 'applications',
      examples: [
        { context: "Bâtiment en béton armé", text: "Modèle 3D poteaux-poutres-voiles, descente de charges, analyse modale et spectrale selon l'EC8." },
        { context: "Charpente métallique", text: "Vérification des barres au flambement et au déversement, calcul des assemblages, optimisation du tonnage." },
        { context: "Géotechnique", text: "Plaxis pour les écrans de soutènement et les tassements, avec phasage des excavations." },
        { context: "Automatisation", text: "Script Python qui lit les efforts exportés, vérifie 500 poutres et génère un tableau de synthèse." },
        { context: "Interopérabilité", text: "API du logiciel (Robot, ETABS) pilotée par script pour créer automatiquement des modèles paramétriques." },
      ],
    },

    {
      id: 4,
      key: 'theory',
      title: "Théorie — La méthode des déplacements",
      icon: '📐',
      type: 'theory',
      diagramType: 'process_flow',
      content: `### 1. Élément barre (traction-compression)
Un élément de longueur $L$, de section $A$ et de module $E$ a une rigidité axiale $k = \\frac{EA}{L}$. Sa matrice élémentaire relie les forces nodales aux déplacements :

$$\\begin{bmatrix} F_1 \\\\ F_2 \\end{bmatrix} = \\frac{EA}{L} \\begin{bmatrix} 1 & -1 \\\\ -1 & 1 \\end{bmatrix} \\begin{bmatrix} u_1 \\\\ u_2 \\end{bmatrix}$$

### 2. Assemblage et conditions aux limites
Les matrices élémentaires sont additionnées dans la matrice globale $[K]$. On supprime ensuite les lignes et colonnes des degrés de liberté bloqués (appuis), puis on résout le système.

### 3. Types d'analyse
- **Linéaire statique** : cas courant, superposition des cas de charge.
- **Modale** : fréquences et modes propres, $\\det\\left([K] - \\omega^2 [M]\\right) = 0$.
- **Spectrale** : réponse sismique combinée des modes (EC8).
- **Second ordre (P-Delta)** et **flambement** : structures élancées.
- **Non linéaire** : matériaux plastiques, fissuration, contact, câbles.

### 4. Qualité d'un modèle
- **Convergence du maillage** : raffiner jusqu'à ce que les résultats ne varient presque plus.
- **Singularités** : un pic de contrainte sur un appui ponctuel ou un angle rentrant n'est pas physique ; on l'interprète, on ne le dimensionne pas.`,
    },

    {
      id: 5,
      key: 'formulas',
      title: "Formules essentielles",
      icon: '🔢',
      type: 'formulas',
      diagramType: 'process_flow',
      formulas: [
        {
          name: "Système global de la méthode des déplacements",
          latex: "[K]\\{u\\} = \\{F\\}",
          description: "Le logiciel assemble [K], applique les conditions d'appui et résout ce système linéaire.",
          variables: [
            { symbol: '[K]', name: 'Matrice de rigidité globale', unit: '\\text{kN/m, kN·m/rad}', role: "Assemblage des rigidités de tous les éléments.", category: 'Modèle' },
            { symbol: '\\{u\\}', name: 'Vecteur des déplacements nodaux', unit: '\\text{m, rad}', role: 'Inconnues du problème.', category: 'Résultat' },
            { symbol: '\\{F\\}', name: 'Vecteur des forces nodales', unit: '\\text{kN, kN·m}', role: 'Charges ramenées aux nœuds.', category: 'Action' },
          ],
          ruleOfThumb: "Un message « matrice singulière » signale presque toujours un mécanisme : appui manquant ou barre libre en rotation.",
        },
        {
          name: "Rigidité axiale d'une barre",
          latex: "k = \\frac{E\\,A}{L}",
          description: "Force à appliquer pour allonger la barre de une unité de longueur.",
          variables: [
            { symbol: 'k', name: 'Rigidité axiale', unit: '\\text{N/mm}', role: "Plus elle est grande, plus la barre est raide.", category: 'Résultat' },
            { symbol: 'E', name: "Module d'Young", unit: '\\text{MPa}', role: 'Acier : 210 000 MPa ; béton : environ 30 000 MPa.', category: 'Matériau' },
            { symbol: 'A', name: 'Aire de la section', unit: '\\text{mm}^2', role: 'Section droite de la barre.', category: 'Géométrie' },
            { symbol: 'L', name: 'Longueur de la barre', unit: '\\text{mm}', role: 'Distance entre les deux nœuds.', category: 'Géométrie' },
          ],
        },
        {
          name: "Fréquence propre d'un système à un degré de liberté",
          latex: "f = \\frac{1}{2\\pi}\\sqrt{\\frac{k}{m}}",
          description: "Base de l'analyse modale : chaque mode a sa fréquence propre.",
          variables: [
            { symbol: 'f', name: 'Fréquence propre', unit: '\\text{Hz}', role: 'Nombre d\'oscillations par seconde.', category: 'Résultat' },
            { symbol: 'k', name: 'Rigidité', unit: '\\text{N/m}', role: 'Rigidité latérale ou verticale du système.', category: 'Modèle' },
            { symbol: 'm', name: 'Masse', unit: '\\text{kg}', role: 'Masse participante (poids propre + part des charges).', category: 'Modèle' },
          ],
          ruleOfThumb: "Vérification rapide : la période fondamentale d'un bâtiment courant est de l'ordre de N/10 secondes (N = nombre de niveaux).",
        },
        {
          name: "Contrôle d'équilibre global",
          latex: "\\sum R_z = \\sum F_z \\qquad \\varepsilon = \\frac{\\left|\\sum R_z - \\sum F_z\\right|}{\\sum F_z}",
          description: "La somme des réactions verticales doit égaler la somme des charges appliquées, cas par cas.",
          variables: [
            { symbol: '\\sum R_z', name: 'Somme des réactions verticales', unit: '\\text{kN}', role: 'Lue dans le tableau des réactions du logiciel.', category: 'Résultat' },
            { symbol: '\\sum F_z', name: 'Somme des charges verticales', unit: '\\text{kN}', role: 'Calculée à la main (surface × charge).', category: 'Contrôle' },
            { symbol: '\\varepsilon', name: 'Écart relatif', unit: '-', role: 'Doit être proche de 0 (quelques pour mille au plus).', category: 'Contrôle' },
          ],
          ruleOfThumb: "Faites ce contrôle pour chaque cas de charge élémentaire avant de regarder les combinaisons.",
        },
        {
          name: "Critère de convergence du maillage",
          latex: "e_n = \\frac{\\left|R_n - R_{n-1}\\right|}{\\left|R_n\\right|} < 2\\,\\%",
          description: "On raffine le maillage tant que le résultat étudié varie de plus de quelques pour cent.",
          variables: [
            { symbol: 'R_n', name: 'Résultat du maillage n', unit: '\\text{kN·m, mm…}', role: 'Moment, flèche ou contrainte observé.', category: 'Résultat' },
            { symbol: 'e_n', name: 'Variation relative', unit: '-', role: 'Indicateur de stabilité du résultat.', category: 'Contrôle' },
          ],
        },
      ],
    },

    {
      id: 6,
      key: 'stepbystep',
      title: "Calcul complet — Résoudre un petit modèle à la main puis en Python",
      icon: '🔬',
      type: 'stepbystep',
      problem: "Deux barres en série : nœud 1 encastré, barre 1 (nœuds 1-2) de rigidité k₁ = 50 kN/mm, barre 2 (nœuds 2-3) de rigidité k₂ = 25 kN/mm, force F = 10 kN au nœud 3. Calculer les déplacements u₂ et u₃.",
      steps_demo: [
        { n: 1, text: "Matrices élémentaires : barre 1 → k₁[[1, −1], [−1, 1]] ; barre 2 → k₂[[1, −1], [−1, 1]]." },
        { n: 2, text: "Assemblage puis suppression du degré de liberté bloqué (u₁ = 0) : K = [[k₁ + k₂, −k₂], [−k₂, k₂]] = [[75, −25], [−25, 25]]." },
        { n: 3, text: "Second membre : F = [0 ; 10] kN." },
        { n: 4, text: "Résolution : u₂ = F / k₁ = 0,2 mm et u₃ = u₂ + F / k₂ = 0,6 mm." },
        { n: 5, text: "Contrôle : rigidité équivalente en série 1 / (1/50 + 1/25) = 16,7 kN/mm, donc u₃ = 10 / 16,7 = 0,6 mm." },
        { n: 6, text: "En Python : u = np.linalg.solve(K, F) renvoie [0,2 ; 0,6] mm." },
      ],
      result_latex: "\\begin{bmatrix} 75 & -25 \\\\ -25 & 25 \\end{bmatrix} \\begin{bmatrix} u_2 \\\\ u_3 \\end{bmatrix} = \\begin{bmatrix} 0 \\\\ 10 \\end{bmatrix} \\ \\Rightarrow \\ u_2 = 0{,}2\\ \\text{mm}, \\ u_3 = 0{,}6\\ \\text{mm}",
    },

    {
      id: 7,
      key: 'units',
      title: "Cohérence des unités dans un modèle",
      icon: '📏',
      type: 'units',
      table: [
        { grandeur: "Force", si: "kN", imperial: "kip", conversion: "1 kip = 4,448 kN" },
        { grandeur: "Contrainte / module", si: "MPa = N/mm²", imperial: "ksi", conversion: "1 ksi = 6,895 MPa ; E acier = 210 000 MPa ≈ 30 500 ksi (les codes américains retiennent 29 000 ksi)" },
        { grandeur: "Moment", si: "kN·m", imperial: "kip·ft", conversion: "1 kip·ft = 1,356 kN·m" },
        { grandeur: "Masse volumique", si: "kg/m³ (ou t/m³)", imperial: "lb/ft³", conversion: "Béton armé : 2 500 kg/m³ ≈ 156 lb/ft³" },
        { grandeur: "Fréquence", si: "Hz", imperial: "Hz", conversion: "Période T = 1 / f" },
      ],
      note: "Avant de lancer le calcul, vérifiez les **unités par défaut** du logiciel et celles des fichiers importés : une section en cm² lue comme des m² est une erreur fréquente.",
    },

    {
      id: 8,
      key: 'hypotheses',
      title: "Hypothèses de modélisation",
      icon: '📋',
      type: 'hypotheses',
      items: [
        { type: 'info', text: "Une analyse linéaire suppose un comportement élastique et de petits déplacements : la superposition des cas de charge est alors valable." },
        { type: 'info', text: "Les appuis du modèle sont idéalisés (articulation, encastrement) : la réalité est souvent entre les deux ; encadrez le résultat si nécessaire." },
        { type: 'warning', text: "Les rigidités du béton fissuré sont plus faibles que celles du béton brut : l'EC8 permet de les réduire (souvent 50 %) pour l'analyse sismique." },
        { type: 'warning', text: "Les pics de contraintes au droit des singularités (appuis ponctuels, angles) dépendent du maillage et ne doivent pas être dimensionnés tels quels." },
        { type: 'tip', text: "Construisez d'abord un modèle simple et vérifiable, puis complexifiez-le pas à pas en contrôlant les résultats à chaque étape." },
      ],
    },

    {
      id: 9,
      key: 'simple_examples',
      title: "Exemples guidés",
      icon: '✏️',
      type: 'examples_simple',
      examples: [
        {
          title: "Exemple 1 : rigidité d'un tirant",
          given: "Tirant acier : A = 2 000 mm², L = 4 000 mm, E = 210 000 MPa, effort 210 kN",
          find: "La rigidité et l'allongement",
          solution_latex: "k = \\frac{210\\,000 \\times 2\\,000}{4\\,000} = 105\\,000\\ \\text{N/mm} \\qquad \\Delta L = \\frac{210\\,000}{105\\,000} = 2{,}0\\ \\text{mm}",
          result: "k = 105 kN/mm ; allongement 2,0 mm.",
        },
        {
          title: "Exemple 2 : fréquence propre",
          given: "Portique à un niveau : rigidité latérale 2 000 kN/m, masse 20 t",
          find: "La fréquence et la période",
          solution_latex: "f = \\frac{1}{2\\pi}\\sqrt{\\frac{2\\,000 \\times 10^3}{20 \\times 10^3}} = \\frac{10}{2\\pi} = 1{,}59\\ \\text{Hz} \\qquad T = 0{,}63\\ \\text{s}",
          result: "f ≈ 1,6 Hz, T ≈ 0,63 s.",
        },
        {
          title: "Exemple 3 : convergence du maillage",
          given: "Moment maximal d'une dalle : 152,0 (maille 1 m), 155,6 (0,5 m), 156,1 kN·m (0,25 m)",
          find: "Le maillage est-il suffisant ?",
          solution_latex: "e = \\frac{156{,}1 - 155{,}6}{156{,}1} = 0{,}3\\,\\% < 2\\,\\%",
          result: "Oui : le maillage de 0,5 m suffit pour ce résultat.",
        },
      ],
    },

    {
      id: 10,
      key: 'real_examples',
      title: "Exemple réel — Une charge oubliée détectée par le contrôle des réactions",
      icon: '🏢',
      type: 'examples_real',
      diagramType: 'process_flow',
      examples: [
        {
          context: "Plancher de 40 m × 25 m, charge d'exploitation 2,5 kN/m²",
          scenario: "La somme des réactions du cas « exploitation » vaut 2 250 kN alors que la charge appliquée devrait être 40 × 25 × 2,5 = 2 500 kN. L'écart de 10 % révèle une zone de dalle non chargée : le panneau avait été créé après la définition du cas de charge.",
          decomposition_latex: "\\varepsilon = \\frac{2\\,500 - 2\\,250}{2\\,500} = 10\\,\\% \\quad \\Rightarrow \\quad \\text{modèle à corriger avant toute exploitation}",
          lesson: "Le contrôle d'équilibre prend cinq minutes et détecte des erreurs que l'examen visuel des diagrammes ne montre pas.",
        },
      ],
    },

    {
      id: 11,
      key: 'diagrams',
      title: "Schéma de principe — Le cycle d'un calcul fiable",
      icon: '📊',
      type: 'interactive_diagram',
      diagramType: 'process_flow',
      description: "De la note d'hypothèses à la note de calcul : chaque étape a son contrôle.",
      diagram_description: [
        "Hypothèses : normes, matériaux, charges, combinaisons, validées avant de modéliser",
        "Modèle : géométrie, sections, appuis, liaisons, maillage",
        "Contrôles du modèle : unités, réactions = charges, déformée cohérente",
        "Analyse : linéaire, modale, spectrale ou non linéaire selon le besoin",
        "Vérifications : éléments selon les Eurocodes, comparaison à des calculs manuels",
        "Livrables : note de calcul traçable, fichiers et scripts archivés avec leur version",
      ],
    },

    {
      id: 12,
      key: 'mistakes',
      title: "Erreurs fréquentes",
      icon: '⛔',
      type: 'mistakes',
      items: [
        {
          mistake: "Faire confiance au résultat parce qu'il est affiché en couleur",
          trap: "Ne contrôler ni les réactions ni l'ordre de grandeur",
          fix: "Contrôle d'équilibre par cas de charge + vérification manuelle d'au moins un élément type (qL²/8, N/A).",
        },
        {
          mistake: "Mélanger les unités",
          trap: "Saisir un module en GPa dans un champ attendu en MPa, ou une section en cm² comme des m²",
          fix: "Fixer les unités du projet dès le départ et les rappeler dans la note d'hypothèses.",
        },
        {
          mistake: "Dimensionner un pic de contrainte de singularité",
          trap: "Augmenter l'épaisseur d'un voile à cause d'une contrainte au coin d'une ouverture",
          fix: "Lire les efforts intégrés (moments, efforts tranchants par mètre) à distance de la singularité et traiter localement le détail.",
        },
      ],
    },

    {
      id: 13,
      key: 'tips',
      title: "Astuces de productivité",
      icon: '💡',
      type: 'tips',
      tips: [
        "Nommez les cas de charge et les groupes de barres de façon explicite : « G_dalle », « Q_bureaux », « Poteaux_RDC ».",
        "Exportez les résultats en CSV et traitez-les avec pandas : un tableau de vérification se met à jour en une seconde quand le modèle change.",
        "Versionnez vos scripts (git) et gardez une copie datée de chaque modèle transmis.",
        "Quelques lignes de Python suffisent pour résoudre un petit système : `import numpy as np` puis `u = np.linalg.solve(K, F)`.",
      ],
    },

    {
      id: 14,
      key: 'norms',
      title: "Références",
      icon: '📜',
      type: 'norms',
      norms: [
        { code: "NF EN 1990 (annexe C) et EN 1992 à 1998", description: "Les vérifications réglementaires restent celles des Eurocodes, quel que soit le logiciel utilisé." },
        { code: "NF EN 1998-1 §4.3", description: "Modélisation pour l'analyse sismique : masses, rigidités fissurées, analyses modale et spectrale." },
        { code: "ISO 19650", description: "Gestion de l'information des projets BIM, échanges de modèles entre acteurs." },
        { code: "ISO 16739 (IFC)", description: "Format d'échange ouvert des maquettes numériques entre logiciels." },
      ],
    },

    {
      id: 15,
      key: 'exercises',
      title: "Exercices d'application",
      icon: '✍️',
      type: 'exercises',
      exercises: [
        {
          id: 'ex_log_1',
          number: 1,
          difficulty: 'Facile',
          text: "Une barre en acier (E = 210 000 MPa) de section 1 500 mm² et de longueur 3 m reçoit un effort de 63 kN. Calculer sa rigidité et son allongement.",
          hint: "k = EA/L avec L en mm.",
          answer_latex: "k = \\frac{210\\,000 \\times 1\\,500}{3\\,000} = 105\\,000\\ \\text{N/mm} \\qquad \\Delta L = \\frac{63\\,000}{105\\,000} = 0{,}6\\ \\text{mm}",
          answer_text: "k = 105 kN/mm ; ΔL = 0,6 mm.",
        },
        {
          id: 'ex_log_2',
          number: 2,
          difficulty: 'Moyen',
          text: "Un plancher de 30 m × 12 m reçoit 3,5 kN/m² de charges permanentes supplémentaires. Le logiciel affiche une somme de réactions de 1 260 kN pour ce cas. Le modèle est-il correct ?",
          hint: "Calculer la charge totale attendue.",
          answer_latex: "\\sum F = 30 \\times 12 \\times 3{,}5 = 1\\,260\\ \\text{kN} = \\sum R \\quad \\Rightarrow \\quad \\varepsilon = 0",
          answer_text: "Oui, l'équilibre global de ce cas est vérifié.",
        },
        {
          id: 'ex_log_3',
          number: 3,
          difficulty: 'Difficile',
          text: "Trois ressorts en série (k₁ = 60, k₂ = 30, k₃ = 20 kN/mm) sont encastrés à une extrémité et chargés de 12 kN à l'autre. Calculer le déplacement de l'extrémité et celui de chaque nœud.",
          hint: "Même effort dans chaque ressort ; déplacements cumulés.",
          answer_latex: "u_2 = \\frac{12}{60} = 0{,}2 \\qquad u_3 = 0{,}2 + \\frac{12}{30} = 0{,}6 \\qquad u_4 = 0{,}6 + \\frac{12}{20} = 1{,}2\\ \\text{mm}",
          answer_text: "Déplacements : 0,2 ; 0,6 ; 1,2 mm (rigidité équivalente 10 kN/mm).",
        },
      ],
    },

    {
      id: 16,
      key: 'corrections',
      title: "Corrections détaillées",
      icon: '✅',
      type: 'corrections',
      note: "Comparez votre démarche à la correction sous chaque exercice ; refaites l'exercice 3 en Python avec une matrice 3 × 3 pour vous entraîner.",
    },

    {
      id: 17,
      key: 'quiz',
      title: "Quiz — Logiciels et modélisation",
      icon: '🎯',
      type: 'quiz',
      questions: [
        {
          id: 'q_log_1',
          question: "Quel contrôle faut-il faire en premier après un calcul ?",
          options: [
            { id: 'a', text: "Regarder les couleurs des contraintes" },
            { id: 'b', text: 'Comparer la somme des réactions à la somme des charges' },
            { id: 'c', text: 'Imprimer la note de calcul' },
          ],
          correct: 'b',
          explanation: "L'équilibre global détecte immédiatement les charges oubliées, dupliquées ou mal orientées.",
        },
        {
          id: 'q_log_2',
          question: "Que signifie un message « matrice singulière » ?",
          options: [
            { id: 'a', text: 'Le maillage est trop fin' },
            { id: 'b', text: 'La structure ou une partie est un mécanisme (appui ou liaison manquant)' },
            { id: 'c', text: 'Le matériau est trop résistant' },
          ],
          correct: 'b',
          explanation: "Sans appui suffisant, une partie peut se déplacer sans effort : le système n'a pas de solution unique.",
        },
        {
          id: 'q_log_3',
          question: "Quand peut-on arrêter de raffiner un maillage ?",
          options: [
            { id: 'a', text: 'Quand le résultat étudié ne varie presque plus' },
            { id: 'b', text: 'Dès que le calcul est plus long' },
            { id: 'c', text: 'Quand les pics aux singularités disparaissent' },
          ],
          correct: 'a',
          explanation: "La convergence porte sur le résultat utile ; les pics de singularité, eux, augmentent avec le raffinement.",
        },
      ],
    },

    {
      id: 18,
      key: 'exam_questions',
      title: "Questions d'examen",
      icon: '🎓',
      type: 'exam',
      questions: [
        "Établissez la matrice de rigidité d'un élément barre et assemblez celle d'un système de deux barres en série.",
        "Décrivez les contrôles à réaliser pour valider un modèle aux éléments finis avant d'exploiter ses résultats.",
        "Expliquez la différence entre une analyse linéaire statique, une analyse modale et une analyse spectrale.",
      ],
    },

    {
      id: 19,
      key: 'interview_questions',
      title: "Questions d'entretien",
      icon: '💼',
      type: 'interview',
      questions: [
        {
          question: "Comment vérifiez-vous un modèle réalisé par un collègue ?",
          answer_hint: "Je relis la note d'hypothèses, je contrôle les unités, les appuis et les cas de charge, je compare réactions et charges, puis je recalcule à la main un élément type et une flèche ; enfin je regarde la déformée et les modes propres.",
        },
        {
          question: "Avez-vous déjà automatisé une tâche ? Avec quel gain ?",
          answer_hint: "Répondre avec un exemple concret (méthode STAR) : par exemple un script Python qui lit les efforts exportés, vérifie toutes les poutres et produit un tableau, réduisant une journée de travail à quelques minutes et supprimant les erreurs de recopie.",
        },
      ],
    },

    {
      id: 20,
      key: 'practical_case',
      title: "Cas pratique — Contrôler le résultat d'une poutre continue",
      icon: '🔧',
      type: 'practical',
      diagramType: 'process_flow',
      scenario: "Le logiciel donne M = −61,9 kN·m sur l'appui central d'une poutre continue à deux travées égales de 5 m sous q = 20 kN/m.",
      description: "Vérifier ce résultat à la main avec les formules de la poutre continue à deux travées égales.",
      resolution_latex_1: "M_B = -\\frac{q L^2}{8} = -\\frac{20 \\times 5^2}{8} = -62{,}5\\ \\text{kN·m}",
      resolution_latex_2: "R_B = 1{,}25\\, q L = 1{,}25 \\times 20 \\times 5 = 125\\ \\text{kN} \\qquad R_A = R_C = 0{,}375\\, q L = 37{,}5\\ \\text{kN}",
      resolution_latex_3: "\\varepsilon = \\frac{62{,}5 - 61{,}9}{62{,}5} = 1\\,\\% \\quad \\Rightarrow \\quad \\text{écart acceptable (largeur d'appui, maillage)}",
      conclusion: "Le modèle est cohérent : l'écart de 1 % s'explique par la modélisation de l'appui. Le résultat peut être exploité.",
    },

    {
      id: 21,
      key: 'summary',
      title: "Résumé",
      icon: '📋',
      type: 'summary',
      content: `### Les logiciels de calcul en 6 points
1. **MEF** : discrétiser, assembler $[K]$, résoudre $[K]\\{u\\} = \\{F\\}$.
2. **Modèle** : appuis, liaisons, rigidités et charges conditionnent tout.
3. **Contrôles** : unités, réactions = charges, ordre de grandeur à la main.
4. **Maillage** : vérifier la convergence ; ne pas dimensionner les singularités.
5. **Analyses** : linéaire, modale, spectrale, second ordre, non linéaire.
6. **Automatisation** : Python et API suppriment les ressaisies et tracent les calculs.`,
    },

    {
      id: 22,
      key: 'key_points',
      title: "Points clés à retenir",
      icon: '⭐',
      type: 'keypoints',
      points: [
        "Le logiciel calcule le modèle, pas l'ouvrage",
        "$\\sum R = \\sum F$ pour chaque cas de charge",
        "Rigidité d'une barre : $k = \\frac{EA}{L}$",
        "Fréquence propre : $f = \\frac{1}{2\\pi}\\sqrt{\\frac{k}{m}}$",
        "Toujours un calcul manuel d'ordre de grandeur",
      ],
    },

    {
      id: 23,
      key: 'self_assessment',
      title: "Auto-évaluation",
      icon: '🏆',
      type: 'self_assessment',
      description: "Cochez les compétences acquises :",
      objectives: [
        "Je sais assembler et résoudre un petit système [K]{u} = {F}",
        "Je réalise un contrôle d'équilibre sur un modèle",
        "Je sais vérifier la convergence d'un maillage",
        "Je sais résoudre un système linéaire avec NumPy",
        "J'ai réussi les trois exercices",
      ],
    },
  ],

  quickQuiz: {
    question: "Votre modèle affiche une somme de réactions inférieure de 10 % à la charge appliquée. Que faites-vous ?",
    options: [
      { id: 'a', label: "A) J'exploite les résultats, l'écart est faible" },
      { id: 'b', label: 'B) Je cherche la charge manquante avant toute exploitation' },
      { id: 'c', label: 'C) Je raffine le maillage' },
    ],
    correct: 'b',
    explanation: "Un écart d'équilibre de 10 % signale une erreur de chargement (zone non chargée, cas mal défini) : le modèle doit être corrigé.",
  },
};
