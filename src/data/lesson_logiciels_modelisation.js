// ── Lesson: Modélisation avec SAP2000 / ETABS / Robot — Module 29 ────────────
import { buildLesson } from './build_lesson.js';

export const lesson_logiciels_modelisation = buildLesson({
  moduleId: 29,
  slug: 'logiciels_modelisation',
  lessonIndex: 1,
  title: "Modélisation de Structures avec SAP2000, ETABS et Robot : Méthode, Analyse Modale et Contrôle des Résultats",
  subtitle: 'Module 29 — Logiciels de Génie Civil',
  level: 'Avancé',
  duration: '8h',
  diagramType: 'bim_workflow',
  tags: ['SAP2000', 'ETABS', 'Robot', 'Modélisation', 'Analyse modale', 'Diaphragme', 'Vérification'],
}, {
  definition: {
    title: 'Définition — Passer de la structure réelle au modèle de calcul',
    fr: 'Modélisation numérique des structures',
    en: 'Structural analysis modelling',
    metier: "Pratiquée par les ingénieurs structure, les projeteurs-calculateurs et les bureaux de contrôle.",
    content: `Les logiciels **SAP2000**, **ETABS** (CSI) et **Robot Structural Analysis** (Autodesk) calculent les efforts et déplacements d'une structure par la **méthode des éléments finis** :

- **SAP2000** : logiciel généraliste (ponts, structures spéciales, réservoirs).
- **ETABS** : spécialisé dans les bâtiments à étages (niveaux, diaphragmes, voiles).
- **Robot** : généraliste, très utilisé en Europe, intégré au flux BIM de Revit.

### Le modèle est une hypothèse
Le logiciel calcule exactement le **modèle** qu'on lui donne, pas la structure réelle. L'ingénieur choisit : la géométrie (axes), les éléments (barres, coques, ressorts), les appuis, les matériaux, les charges et les combinaisons.

> 💡 La règle d'or : **aucun résultat ne doit être utilisé sans contrôle par un calcul manuel d'ordre de grandeur.**`,
  },
  importance: {
    content: `- **Productivité** : des structures complexes sont analysées en quelques minutes.
- **Séisme et vent** : l'analyse modale spectrale est pratiquement impossible à la main.
- **Responsabilité** : l'ingénieur reste responsable des hypothèses et des résultats.
- **Risque** : une erreur de modélisation (appui, unité, charge) peut passer inaperçue dans des milliers de résultats.

> ⚠️ **À retenir** : un modèle bien construit est simple, contrôlé et documenté.`,
  },
  applications: {
    examples: [
      ['Immeuble de logements', 'ETABS : voiles, dalles en diaphragme, analyse modale spectrale.'],
      ['Pont à poutres', 'SAP2000 : grillage de poutres et convois mobiles.'],
      ['Halle métallique', 'Robot : portiques, vent, neige, vérifications EC3.'],
      ['Radier', 'Coques sur appuis élastiques (coefficient de réaction).'],
      ['Échange BIM', 'Import du modèle analytique depuis Revit.'],
    ],
  },
  theory: {
    title: 'Théorie — Les étapes d’un bon modèle',
    content: `### 1. Géométrie et éléments
- **Barres** (poutres, poteaux) sur les axes neutres ;
- **Coques** pour les dalles et voiles (maillage de taille adaptée) ;
- **Ressorts** pour les appuis élastiques (sol, appareils d'appui).

### 2. Diaphragmes
Une dalle rigide dans son plan est modélisée par un **diaphragme** : tous les nœuds d'un niveau ont le même mouvement horizontal de corps rigide. Cela simplifie l'analyse sismique.

### 3. Charges et combinaisons
Cas élémentaires (G, Q, S, W, E), puis combinaisons ELU/ELS générées selon l'EN 1990. Les **masses** sismiques sont définies séparément (G + ψ₂Q).

### 4. Analyse modale
Le logiciel calcule les modes propres (périodes, déformées). On retient assez de modes pour mobiliser **au moins 90 % de la masse** dans chaque direction (EC8).

### 5. Contrôles indispensables
1. **Équilibre** : somme des réactions = somme des charges, pour chaque cas.
2. **Déformée** : cohérente avec les charges (pas de nœud qui « s'envole »).
3. **Période** : comparée à une formule approchée.
4. **Efforts** : un élément type comparé à un calcul manuel.
5. **Convergence du maillage** : les résultats varient peu en raffinant.`,
  },
  formulas: {
    title: 'Formules essentielles — Contrôle des modèles',
    formulas: [
      {
        name: 'Contrôle d’équilibre',
        latex: "\\sum R_z = \\sum F_z \\qquad \\varepsilon = \\frac{|\\sum R - \\sum F|}{\\sum F}",
        description: 'Pour chaque cas de charge élémentaire.',
        vars: [
          ['R_z', 'Réactions verticales', 'kN', ''],
          ['F_z', 'Charges appliquées', 'kN', 'Calcul manuel indépendant.'],
          ['\\varepsilon', 'Écart relatif', '%', 'Doit être quasi nul (< 1 %).'],
        ],
      },
      {
        name: 'Période fondamentale approchée (EC8)',
        latex: "T_1 = C_t \\, H^{3/4}",
        description: 'Ordre de grandeur pour un bâtiment de hauteur H ≤ 40 m.',
        vars: [
          ['T_1', 'Période fondamentale', 's', ''],
          ['C_t', 'Coefficient', '-', '0,085 portiques acier ; 0,075 portiques béton ; 0,050 autres.'],
          ['H', 'Hauteur du bâtiment', 'm', 'Depuis les fondations ou un soubassement rigide.'],
        ],
      },
      {
        name: 'Masse modale cumulée',
        latex: "\\sum_{k=1}^{n} \\frac{M_{eff,k}}{M_{tot}} \\geq 90\\ \\%",
        description: 'Nombre de modes à retenir dans chaque direction.',
        vars: [
          ['M_{eff,k}', 'Masse effective du mode k', 't', ''],
          ['M_{tot}', 'Masse totale', 't', ''],
        ],
      },
      {
        name: 'Flèche de contrôle d’une poutre',
        latex: "f = \\frac{5 q L^4}{384 E I}",
        description: 'Comparaison rapide avec un élément isolé du modèle.',
        vars: [
          ['q', 'Charge répartie', 'kN/m', ''],
          ['L', 'Portée', 'm', ''],
          ['E I', 'Rigidité de flexion', 'kN·m²', ''],
        ],
      },
    ],
  },
  stepbystep: {
    title: 'Calcul complet — Contrôle d’un modèle ETABS de bâtiment',
    problem: "Bâtiment en béton à voiles de 10 niveaux (H = 30 m), plancher 20 × 30 m. Charges par niveau : G = 6,5 kN/m² (dalle + revêtements + cloisons) et Q = 2,5 kN/m². Le modèle donne ΣR(G) = 39 450 kN et une période T₁ = 0,71 s. Contrôler ces résultats.",
    steps_demo: [
      { n: 1, text: "Charges G manuelles : 6,5 × 20 × 30 × 10 = 39 000 kN, hors poids propre des voiles et poteaux." },
      { n: 2, text: "Le modèle trouve 39 450 kN : l'écart de 450 kN correspond au poids des éléments verticaux s'il est cohérent avec leur volume (≈ 18 m³ de béton). À vérifier, sinon recherche d'une charge en double." },
      { n: 3, text: "Période approchée : T₁ = 0,050 × 30^0,75 = 0,050 × 12,82 = 0,64 s." },
      { n: 4, text: "Le modèle donne 0,71 s, soit 11 % de plus : écart plausible (les formules approchées sous-estiment souvent un peu la période)." },
      { n: 5, text: "Si l'écart avait été de 50 % ou plus, il faudrait vérifier les rigidités (modules fissurés, appuis, diaphragmes) et les masses." },
    ],
    result_latex: "\\sum F_G = 6{,}5 \\times 600 \\times 10 = 39\\,000\\ \\text{kN} \\qquad T_1 = 0{,}050 \\times 30^{0{,}75} = 0{,}64\\ \\text{s}",
  },
  units: {
    table: [
      ['Longueur', 'm', 'ft / in', 'Régler les unités avant de modéliser'],
      ['Force', 'kN', 'kip', '1 kip = 4,448 kN'],
      ['Contrainte', 'MPa', 'ksi', '1 ksi = 6,895 MPa'],
      ['Masse', 't (kN·s²/m)', 'kip·s²/in', 'Ne pas confondre masse et poids'],
      ['Période', 's', 's', 'Fréquence f = 1/T'],
    ],
    note: 'Une erreur classique : entrer les masses en kN au lieu de tonnes, ce qui multiplie les masses par 9,81.',
  },
  hypotheses: {
    items: [
      ['info', 'Le calcul est en général linéaire élastique : les effets non linéaires (fissuration, plasticité, second ordre) doivent être traités explicitement.'],
      ['info', 'Pour le béton, on réduit souvent les rigidités pour tenir compte de la fissuration (EC8 : 50 % de la rigidité non fissurée par défaut).'],
      ['warning', 'Un diaphragme rigide est inadapté aux dalles avec grandes trémies ou formes très allongées.'],
      ['warning', 'Les liaisons (articulées ou encastrées) influencent fortement la distribution des efforts : justifiez chaque choix.'],
      ['tip', 'Construisez d’abord un modèle simple, contrôlez-le, puis ajoutez les détails.'],
    ],
  },
  simple_examples: {
    examples: [
      {
        title: 'Exemple 1 : contrôle de flèche',
        given: 'Poutre IPE 300 (I = 8 356 cm⁴), L = 6 m, q = 15 kN/m, E = 210 GPa',
        find: 'Flèche',
        solution_latex: "f = \\frac{5 \\times 15 \\times 6^4}{384 \\times 210 \\times 10^6 \\times 8\\,356 \\times 10^{-8}} = 0{,}0144\\ \\text{m}",
        result: '14,4 mm : le logiciel doit donner la même valeur pour une poutre isolée.',
      },
      {
        title: 'Exemple 2 : période d’un portique en béton',
        given: 'H = 18 m ; C_t = 0,075',
        find: 'T₁',
        solution_latex: "T_1 = 0{,}075 \\times 18^{0{,}75} = 0{,}075 \\times 8{,}74 = 0{,}66\\ \\text{s}",
        result: 'Environ 0,66 s.',
      },
      {
        title: 'Exemple 3 : nombre de modes',
        given: 'Masses effectives cumulées : mode 1 : 68 % ; 2 : 81 % ; 3 : 87 % ; 4 : 92 %',
        find: 'Modes à retenir',
        solution_latex: "92\\ \\% \\geq 90\\ \\% \\Rightarrow n = 4",
        result: '4 modes dans cette direction.',
      },
    ],
  },
  real_examples: {
    title: 'Exemple réel — Effondrement du Sleipner A',
    examples: [
      {
        context: 'Plate-forme pétrolière en béton, mer du Nord (1991)',
        scenario: "Lors d'un essai de ballastage, une cellule en béton de la structure de base a cédé et la plate-forme a coulé. L'analyse a montré qu'un maillage d'éléments finis trop grossier avait sous-estimé d'environ 45 % les efforts de cisaillement dans les parois, et que les armatures étaient insuffisantes à cet endroit.",
        decomposition_latex: "\\text{Maillage grossier} \\Rightarrow V \\text{ sous-estimé d'environ 45 \\%} \\Rightarrow \\text{rupture par cisaillement}",
        lesson: "Il faut vérifier la convergence du maillage et contrôler les zones critiques par un calcul indépendant.",
      },
    ],
  },
  diagrams: {
    title: 'Schéma de principe — Cycle de modélisation',
    diagram_description: [
      'Hypothèses : schéma statique, matériaux, liaisons, charges',
      'Construction du modèle : axes, éléments, maillage, appuis',
      'Chargements et combinaisons selon l’EN 1990',
      'Analyse : statique linéaire, modale, spectrale',
      'Contrôles : équilibre, déformée, période, calculs manuels',
      'Exploitation : dimensionnement, plans, note de calcul',
    ],
  },
  mistakes: {
    items: [
      ['Appuis trop rigides ou trop souples', 'Distribution des efforts fausse', 'Justifier chaque condition d’appui.'],
      ['Charges appliquées deux fois (poids propre automatique + manuel)', 'Surdimensionnement ou incohérence', 'Contrôler ΣR pour chaque cas.'],
      ['Utiliser les résultats sans lire la déformée', 'Erreurs grossières non détectées', 'Visualiser les déformées de chaque cas.'],
    ],
  },
  tips: {
    tips: [
      'Nommez les cas de charge clairement (G_dalle, Q_bureaux, W_X+…).',
      'Gardez une note d’hypothèses avec captures du modèle.',
      'Comparez les efforts d’un poteau type à une descente de charges manuelle.',
      'Sauvegardez des versions numérotées du modèle à chaque étape.',
    ],
  },
  norms: {
    norms: [
      ['NF EN 1990', 'Bases de calcul et combinaisons.'],
      ['NF EN 1998-1 (§ 4.3)', 'Modélisation et analyse sismique des bâtiments.'],
      ['NF EN 1992-1-1 (§ 5)', 'Analyse structurale des structures en béton.'],
      ['Guides NAFEMS', 'Bonnes pratiques de la simulation par éléments finis.'],
    ],
  },
  exercises: {
    exercises: [
      {
        level: 1,
        text: 'Un plancher de 15 × 24 m reçoit Q = 2,5 kN/m². Quelle somme de réactions doit afficher le logiciel pour le cas Q ?',
        hint: 'Charge × surface.',
        answer_latex: "2{,}5 \\times 15 \\times 24 = 900\\ \\text{kN}",
        answer_text: '900 kN.',
      },
      {
        level: 2,
        text: 'Estimer la période d’un bâtiment à voiles de 45 m (C_t = 0,050), en sachant que la formule n’est valable que pour H ≤ 40 m.',
        hint: 'Calculer quand même l’ordre de grandeur, puis commenter.',
        answer_latex: "T_1 \\approx 0{,}050 \\times 45^{0{,}75} = 0{,}050 \\times 17{,}37 = 0{,}87\\ \\text{s}",
        answer_text: 'Environ 0,87 s ; au-delà de 40 m, seule l’analyse modale fait foi.',
      },
      {
        level: 3,
        text: 'Un modèle donne T₁ = 2,1 s pour le bâtiment de l’exemple (estimation 0,64 s). Quelles causes rechercher ?',
        hint: 'Rigidités trop faibles ou masses trop fortes ; T ∝ √(m/k).',
        answer_latex: "\\frac{2{,}1}{0{,}64} = 3{,}3 \\Rightarrow \\frac{m}{k} \\times 10{,}8",
        answer_text: 'Un rapport m/k multiplié par environ 11 : masses en kN au lieu de tonnes (× 9,81), rigidités de voiles fortement réduites, appuis libérés ou diaphragmes manquants.',
      },
    ],
  },
  quiz: {
    title: 'Quiz — Modélisation',
    questions: [
      { q: 'Quel est le premier contrôle à faire sur un modèle ?', options: ['La couleur des éléments', 'L’équilibre : somme des réactions = somme des charges', 'Le temps de calcul'], correct: 1, explain: 'Ce contrôle détecte de nombreuses erreurs de charges.' },
      { q: 'Quel pourcentage de masse modale faut-il atteindre (EC8) ?', options: ['50 %', '75 %', '90 %'], correct: 2, explain: 'Au moins 90 % de la masse totale dans chaque direction.' },
      { q: 'Quel logiciel est spécialisé dans les bâtiments à étages ?', options: ['ETABS', 'AutoCAD', 'Excel'], correct: 0, explain: 'ETABS gère niveaux, diaphragmes et voiles.' },
    ],
  },
  exam_questions: {
    questions: [
      'Décrivez les étapes de construction d’un modèle de bâtiment.',
      'Quels contrôles réalisez-vous avant d’exploiter les résultats d’un logiciel ?',
      'Expliquez le rôle des diaphragmes et de l’analyse modale.',
    ],
  },
  interview_questions: {
    questions: [
      ['Comment savez-vous qu’un modèle est juste ?', 'Je contrôle l’équilibre, les déformées, la période par une formule approchée et quelques efforts par des calculs manuels ; je vérifie la convergence du maillage dans les zones critiques.'],
      ['Que faites-vous si le logiciel donne un résultat surprenant ?', 'Je ne l’accepte pas tel quel : j’isole le phénomène sur un modèle simplifié et je l’explique physiquement avant de conclure.'],
    ],
  },
  practical_case: {
    title: 'Cas pratique — Revue du modèle d’un portique de halle',
    scenario: 'Portique métallique de 24 m de portée, 7 m de hauteur, espacé de 6 m. Charges de toiture : G = 0,35 kN/m², S = 0,45 kN/m². Le modèle Robot donne des réactions verticales totales de 50,4 kN (G) et 64,8 kN (S) par portique.',
    description: 'Contrôler ces réactions et la flèche de la traverse.',
    resolutions: [
      "G : 0{,}35 \\times 6 \\times 24 = 50{,}4\\ \\text{kN} \\Rightarrow \\text{conforme (poids propre du portique compté à part)}",
      "S : 0{,}45 \\times 6 \\times 24 = 64{,}8\\ \\text{kN} \\Rightarrow \\text{conforme}",
      "\\text{Flèche ELS} : \\text{comparer à } L/200 = 120\\ \\text{mm (limite usuelle pour une toiture)}",
    ],
    conclusion: 'Les charges sont correctement appliquées ; la vérification se poursuit par la flèche, le déversement de la traverse et le flambement des poteaux.',
  },
  summary: {
    content: `### La modélisation en 5 points
1. Le logiciel calcule le modèle, pas la structure : les hypothèses sont la responsabilité de l'ingénieur.
2. Barres, coques, ressorts, diaphragmes : choisir le bon élément.
3. Combinaisons EN 1990 et masses sismiques séparées.
4. Analyse modale : ≥ 90 % de masse par direction.
5. Contrôles : ΣR = ΣF, déformée, $T_1 = C_t H^{3/4}$, calculs manuels.`,
  },
  key_points: {
    points: [
      'ΣR = ΣF pour chaque cas',
      'T₁ ≈ C_t H^(3/4)',
      'Masse modale ≥ 90 %',
      'Vérifier la convergence du maillage',
      'Toujours un calcul manuel de contrôle',
    ],
  },
  self_assessment: {
    objectives: [
      'Je connais les usages de SAP2000, ETABS et Robot',
      'Je sais construire un modèle simple et cohérent',
      'Je sais contrôler un modèle par l’équilibre et la période',
      'Je sais interpréter une analyse modale',
      "J'ai réussi le quiz avec au moins 2 bonnes réponses sur 3",
    ],
  },
});
