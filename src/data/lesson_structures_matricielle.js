// ── Lesson: Structures hyperstatiques et méthode matricielle — Module 8 ──────
import { buildLesson } from './build_lesson.js';

export const lesson_structures_matricielle = buildLesson({
  moduleId: 8,
  slug: 'structures_matricielle',
  lessonIndex: 3,
  title: "Structures Hyperstatiques : Théorème des Trois Moments & Méthode Matricielle des Déplacements",
  subtitle: 'Module 08 — Analyse avancée des structures',
  level: 'Avancé',
  duration: '15h',
  tags: ['Hyperstatique', 'Clapeyron', 'Trois moments', 'Méthode des déplacements', 'Matrice de rigidité', 'Assemblage', 'Poutre continue'],
}, {
  definition: {
    title: 'Définition — Quand l’équilibre ne suffit plus',
    fr: 'Analyse des structures hyperstatiques (méthode des forces et méthode des déplacements)',
    en: 'Analysis of statically indeterminate structures / direct stiffness method',
    metier: "Utilisée par tous les ingénieurs structure : poutres continues, portiques, treillis hyperstatiques ; c'est le cœur des logiciels de calcul (Robot, SAP2000, ETABS).",
    content: `Une structure est **hyperstatique** lorsqu'elle possède plus de liaisons que nécessaire à son équilibre : les trois équations de la statique (dans le plan) ne suffisent plus à calculer les réactions et les efforts. Il faut ajouter des équations de **compatibilité des déformations**.

### Deux grandes familles de méthodes
1. **Méthode des forces** : on supprime des liaisons surabondantes, on calcule les déformations, puis on rétablit la compatibilité (ex. : **théorème des trois moments** de Clapeyron pour les poutres continues).
2. **Méthode des déplacements** : les inconnues sont les déplacements des nœuds ; chaque élément est décrit par sa **matrice de rigidité**. Les matrices sont **assemblées** puis le système $[K]\\{U\\} = \\{F\\}$ est résolu. C'est la méthode des logiciels.

> 💡 L'hyperstaticité est un atout : elle réduit les moments, redistribue les efforts et offre des réserves si un élément faiblit.`,
  },
  importance: {
    content: `- **Économie** : une poutre continue a un moment maximal plus faible qu'une série de travées isostatiques.
- **Robustesse** : les structures hyperstatiques offrent des chemins de charge alternatifs.
- **Logiciels** : comprendre la méthode matricielle permet de modéliser correctement (appuis, libérations, unités) et de vérifier les résultats.
- **Effets indirects** : tassements d'appuis, température et retrait créent des efforts dans les structures hyperstatiques.

> ⚠️ **À retenir** : dans une structure hyperstatique, les efforts dépendent des rigidités relatives des éléments ; modifier une section change la répartition des efforts.`,
  },
  applications: {
    examples: [
      ['Poutre continue de plancher', 'Moments sur appuis par le théorème des trois moments.'],
      ['Portique de hall', 'Modèle à barres et nœuds rigides résolu par la méthode des déplacements.'],
      ['Treillis de toiture', 'Assemblage des matrices de rigidité des barres articulées.'],
      ['Pont continu', 'Effet d’un tassement d’appui sur les moments.'],
      ['Vérification de logiciel', 'Comparaison d’un résultat informatique avec un calcul manuel simplifié.'],
    ],
  },
  theory: {
    title: 'Théorie — Trois moments et rigidité',
    content: `### 1. Degré d'hyperstaticité
Pour une poutre plane : $h = r - 3$ ($r$ = nombre d'inconnues de liaison). Une poutre sur trois appuis simples est hyperstatique de degré 1.

### 2. Théorème des trois moments (Clapeyron)
Pour une poutre continue d'inertie constante, chargée uniformément, entre les appuis $i-1$, $i$ et $i+1$ :
$$M_{i-1} L_i + 2 M_i (L_i + L_{i+1}) + M_{i+1} L_{i+1} = -\\frac{q_i L_i^3 + q_{i+1} L_{i+1}^3}{4}$$
Les moments sur appuis de rive simplement appuyés sont nuls.

### 3. Rigidité d'une barre (traction-compression)
$$[k] = \\frac{EA}{L} \\begin{bmatrix} 1 & -1 \\\\ -1 & 1 \\end{bmatrix}$$

### 4. Rigidité d'un élément de poutre (flexion)
Avec deux degrés de liberté par nœud (flèche $w$, rotation $\\theta$) :
$$[k] = \\frac{EI}{L^3} \\begin{bmatrix} 12 & 6L & -12 & 6L \\\\ 6L & 4L^2 & -6L & 2L^2 \\\\ -12 & -6L & 12 & -6L \\\\ 6L & 2L^2 & -6L & 4L^2 \\end{bmatrix}$$

### 5. Démarche de la méthode des déplacements
1. Numéroter nœuds et degrés de liberté.
2. Écrire la matrice de rigidité de chaque élément (dans le repère global).
3. **Assembler** la matrice globale $[K]$ et le vecteur des charges nodales $\\{F\\}$.
4. Appliquer les conditions d'appui (supprimer les lignes et colonnes bloquées).
5. Résoudre $[K]\\{U\\} = \\{F\\}$, puis remonter aux efforts dans les éléments.`,
  },
  formulas: {
    title: 'Formules essentielles — Analyse hyperstatique',
    formulas: [
      {
        name: "Degré d'hyperstaticité (poutre plane)",
        latex: "h = r - 3",
        description: 'Nombre de liaisons surabondantes.',
        vars: [
          ['h', "Degré d'hyperstaticité", '-', '0 : isostatique ; > 0 : hyperstatique.'],
          ['r', 'Nombre de réactions inconnues', '-', 'Appui simple : 1 ; articulation : 2 ; encastrement : 3.'],
        ],
      },
      {
        name: 'Théorème des trois moments (charges uniformes, EI constant)',
        latex: "M_{i-1} L_i + 2 M_i (L_i + L_{i+1}) + M_{i+1} L_{i+1} = -\\frac{q_i L_i^3 + q_{i+1} L_{i+1}^3}{4}",
        description: 'Une équation par appui intermédiaire.',
        vars: [
          ['M_i', "Moment sur l'appui i", 'kN·m', 'Négatif (traction en fibre supérieure).'],
          ['L_i', 'Portée de la travée i', 'm', 'Travée entre les appuis i−1 et i.'],
          ['q_i', 'Charge uniforme sur la travée i', 'kN/m', 'Charge de calcul.'],
        ],
        rule: "Deux travées égales sous charge uniforme : M_appui = −qL²/8, comme le moment maximal d'une travée isostatique.",
      },
      {
        name: "Matrice de rigidité d'une barre",
        latex: "[k] = \\frac{EA}{L} \\begin{bmatrix} 1 & -1 \\\\ -1 & 1 \\end{bmatrix}",
        description: 'Relation entre les efforts et les déplacements axiaux aux deux nœuds.',
        vars: [
          ['E', "Module d'Young", 'MPa', 'Matériau de la barre.'],
          ['A', 'Section', 'mm²', 'Section de la barre.'],
          ['L', 'Longueur', 'mm', 'Longueur de la barre.'],
        ],
      },
      {
        name: "Matrice de rigidité d'un élément de poutre",
        latex: "[k] = \\frac{EI}{L^3} \\begin{bmatrix} 12 & 6L & -12 & 6L \\\\ 6L & 4L^2 & -6L & 2L^2 \\\\ -12 & -6L & 12 & -6L \\\\ 6L & 2L^2 & -6L & 4L^2 \\end{bmatrix}",
        description: 'Degrés de liberté : (w₁, θ₁, w₂, θ₂).',
        vars: [
          ['I', "Moment d'inertie", 'mm⁴', 'Section de l’élément.'],
          ['w, \\theta', 'Flèche et rotation nodales', 'mm, rad', 'Inconnues de la méthode.'],
        ],
      },
      {
        name: 'Système global',
        latex: "[K] \\{U\\} = \\{F\\}",
        description: 'Matrice de rigidité assemblée × déplacements = charges nodales.',
        vars: [
          ['[K]', 'Matrice de rigidité globale', '-', 'Symétrique, définie positive après appuis.'],
          ['\\{U\\}', 'Vecteur des déplacements', 'mm, rad', 'Déplacements inconnus des nœuds libres.'],
          ['\\{F\\}', 'Vecteur des charges', 'N, N·mm', 'Charges nodales (charges réparties converties).'],
        ],
      },
    ],
  },
  stepbystep: {
    title: 'Calcul complet — Poutre continue sur trois appuis',
    problem: "Poutre continue de deux travées de 6 m (appuis A, B, C), EI constant, charge uniforme q = 20 kN/m. Calculer le moment sur l'appui B, les réactions et le moment maximal en travée.",
    steps_demo: [
      { n: 1, text: "Degré d'hyperstaticité : 3 réactions verticales + 1 horizontale − 3 = 1 (inconnue : M_B)." },
      { n: 2, text: "Trois moments avec M_A = M_C = 0 : 2 M_B (6 + 6) = −(20 × 6³ + 20 × 6³) / 4 = −2 160 → M_B = −90 kN·m." },
      { n: 3, text: "Réaction en A (travée AB isolée) : R_A = qL/2 − |M_B|/L = 60 − 15 = 45 kN ; de même R_C = 45 kN." },
      { n: 4, text: "Réaction en B : R_B = 2 × (60 + 15) = 150 kN. Contrôle : 45 + 150 + 45 = 240 kN = 20 × 12." },
      { n: 5, text: "Moment maximal en travée à x = R_A/q = 2,25 m : M = 45 × 2,25 − 20 × 2,25²/2 = 50,6 kN·m." },
      { n: 6, text: "Comparaison : en travées isostatiques, M = qL²/8 = 90 kN·m en travée ; la continuité réduit le moment de travée de 44 %." },
    ],
    result_latex: "M_B = -\\frac{q L^2}{8} = -90\\ \\text{kN·m} \\quad R_A = R_C = 45\\ \\text{kN} \\quad R_B = 150\\ \\text{kN} \\quad M_{travée} = 50{,}6\\ \\text{kN·m}",
  },
  units: {
    table: [
      ['Rigidité axiale EA/L', 'N/mm, kN/m', 'kip/in', '1 kN/mm = 5,71 kip/in'],
      ['Rigidité en flexion EI', 'kN·m², N·mm²', 'kip·in²', '1 kN·m² = 10⁹ N·mm²'],
      ['Moment', 'kN·m', 'kip·ft', '1 kN·m = 0,7376 kip·ft'],
      ['Rotation', 'rad', 'rad', '1 mrad = 0,057°'],
      ['Déplacement', 'mm', 'in', '1 in = 25,4 mm'],
    ],
    note: 'Dans un calcul matriciel, choisissez un système d’unités cohérent (N, mm, MPa) et tenez-vous-y pour toutes les matrices.',
  },
  hypotheses: {
    items: [
      ['info', 'Comportement élastique linéaire et petits déplacements (premier ordre).'],
      ['info', 'Le théorème des trois moments présenté suppose une inertie constante et des appuis indéformables.'],
      ['warning', 'Un tassement d’appui crée des moments supplémentaires dans une structure hyperstatique (pas dans une isostatique).'],
      ['warning', 'Des appuis mal modélisés (encastrement au lieu d’articulation) faussent complètement la répartition des efforts.'],
      ['tip', 'Vérifiez toujours un modèle informatique par l’équilibre global : somme des réactions = somme des charges.'],
    ],
  },
  simple_examples: {
    examples: [
      {
        title: 'Exemple 1 : travées inégales',
        given: 'Travées de 5 et 7 m, q = 20 kN/m sur les deux',
        find: 'M_B',
        solution_latex: "2 M_B (5 + 7) = -\\frac{20 \\times 125 + 20 \\times 343}{4} = -2\\,340 \\Rightarrow M_B = -97{,}5\\ \\text{kN·m}",
        result: 'M_B = −97,5 kN·m.',
      },
      {
        title: 'Exemple 2 : deux barres en série',
        given: 'Barre 1 : EA/L = 105 000 N/mm ; barre 2 : EA/L = 105 000 N/mm ; force F = 210 kN en bout',
        find: 'Les déplacements des nœuds 2 et 3',
        solution_latex: "105\\,000 \\begin{bmatrix} 2 & -1 \\\\ -1 & 1 \\end{bmatrix} \\begin{Bmatrix} u_2 \\\\ u_3 \\end{Bmatrix} = \\begin{Bmatrix} 0 \\\\ 210\\,000 \\end{Bmatrix} \\Rightarrow u_2 = 2\\ \\text{mm}, \\ u_3 = 4\\ \\text{mm}",
        result: 'Chaque barre s’allonge de 2 mm sous 210 kN.',
      },
      {
        title: 'Exemple 3 : degré d’hyperstaticité',
        given: 'Poutre encastrée à une extrémité et sur appui simple à l’autre',
        find: 'h',
        solution_latex: "h = (3 + 1) - 3 = 1",
        result: 'Hyperstatique de degré 1.',
      },
    ],
  },
  real_examples: {
    title: 'Exemple réel — Tassement d’appui d’un pont continu',
    examples: [
      {
        context: 'Pont à trois travées continues en béton précontraint',
        scenario: "Une pile intermédiaire tasse de 30 mm après une crue (affouillement). Dans une structure isostatique, rien ne changerait ; ici, des moments parasites apparaissent dans le tablier et des fissures se forment.",
        decomposition_latex: "\\Delta M \\propto \\frac{EI \\, \\delta}{L^2} \\quad (\\text{proportionnel à la rigidité et au tassement})",
        lesson: "Les structures hyperstatiques sont sensibles aux déplacements imposés : on les dimensionne pour des tassements probables, ou l'on prévoit des appuis réglables (vérinage).",
      },
    ],
  },
  diagrams: {
    title: 'Schéma de principe — Méthode des déplacements',
    diagram_description: [
      'Discrétisation : nœuds, éléments, degrés de liberté',
      'Matrices élémentaires [k] (barres, poutres)',
      'Changement de repère : local → global',
      'Assemblage de [K] et du vecteur des charges {F}',
      'Conditions d’appui puis résolution [K]{U} = {F}',
      'Efforts internes dans chaque élément et réactions',
    ],
  },
  mistakes: {
    items: [
      ['Oublier un appui ou une libération dans le modèle', 'Matrice singulière (mécanisme) ou efforts aberrants', 'Vérifier le degré d’hyperstaticité et les conditions d’appui avant le calcul.'],
      ['Mélanger les unités dans les matrices', 'Déplacements faux d’un facteur 1 000', 'Travailler en N, mm et MPa partout.'],
      ['Appliquer une charge répartie directement aux nœuds sans conversion', 'Moments en travée faux', 'Utiliser les charges nodales équivalentes (actions d’encastrement parfait).'],
    ],
  },
  tips: {
    tips: [
      'Pour une poutre continue à travées égales, retenez : moment sur appui intermédiaire ≈ −qL²/8 (2 travées), −qL²/10 (3 travées).',
      'Une structure hyperstatique « attire » les efforts vers ses éléments les plus rigides.',
      'Comparez toujours un résultat de logiciel à un ordre de grandeur calculé à la main.',
      'Le conditionnement de [K] se dégrade si l’on mélange des éléments très rigides et très souples : attention aux liaisons « infiniment rigides ».',
    ],
  },
  norms: {
    norms: [
      ['NF EN 1990', 'Bases de calcul : combinaisons d’actions utilisées dans l’analyse.'],
      ['NF EN 1992-1-1 §5.4 à 5.6', 'Analyse linéaire, avec redistribution limitée ou plastique des structures en béton.'],
      ['NF EN 1993-1-1 §5.4', 'Analyse globale élastique ou plastique des structures en acier.'],
    ],
  },
  exercises: {
    exercises: [
      {
        level: 1,
        text: 'Déterminer le degré d’hyperstaticité d’une poutre bi-encastrée.',
        hint: 'Un encastrement apporte 3 réactions.',
        answer_latex: "h = 6 - 3 = 3",
        answer_text: 'h = 3 (en flexion pure, seuls 2 sont utiles car l’effort normal est nul).',
      },
      {
        level: 2,
        text: 'Poutre continue sur 3 appuis, travées de 4 m et 6 m, q = 15 kN/m. Calculer M_B.',
        hint: '2 M_B (L₁ + L₂) = −q (L₁³ + L₂³) / 4.',
        answer_latex: "2 M_B (10) = -\\frac{15 \\times (64 + 216)}{4} = -1\\,050 \\Rightarrow M_B = -52{,}5\\ \\text{kN·m}",
        answer_text: 'M_B = −52,5 kN·m.',
      },
      {
        level: 3,
        text: 'Pour la poutre de l’exercice 2, calculer les réactions R_A, R_B et R_C.',
        hint: 'Isoler chaque travée avec M_B.',
        answer_latex: "R_A = 30 - \\frac{52{,}5}{4} = 16{,}9 \\quad R_C = 45 - \\frac{52{,}5}{6} = 36{,}3 \\quad R_B = 150 - 16{,}9 - 36{,}3 = 96{,}8\\ \\text{kN}",
        answer_text: 'R_A ≈ 16,9 kN ; R_B ≈ 96,8 kN ; R_C ≈ 36,3 kN.',
      },
    ],
  },
  quiz: {
    title: 'Quiz — Analyse hyperstatique',
    questions: [
      { q: 'Quelles sont les inconnues de la méthode des déplacements ?', options: ['Les réactions', 'Les déplacements et rotations des nœuds', 'Les moments sur appuis'], correct: 1, explain: 'On résout [K]{U} = {F} en déplacements nodaux.' },
      { q: 'Que vaut le moment sur l’appui central d’une poutre continue à deux travées égales sous q ?', options: ['−qL²/12', '−qL²/8', '−qL²/2'], correct: 1, explain: 'Le théorème des trois moments donne −qL²/8.' },
      { q: 'Un tassement d’appui crée-t-il des efforts dans une poutre isostatique ?', options: ['Oui', 'Non', 'Seulement en acier'], correct: 1, explain: 'Une structure isostatique suit le déplacement sans contrainte ; seules les hyperstatiques en subissent.' },
    ],
  },
  exam_questions: {
    questions: [
      'Établissez le théorème des trois moments et appliquez-le à une poutre continue à trois travées.',
      'Construisez la matrice de rigidité d’un élément de poutre et expliquez l’assemblage.',
      'Résolvez une poutre continue par la méthode des déplacements et comparez au résultat de Clapeyron.',
    ],
  },
  interview_questions: {
    questions: [
      ['Comment vérifiez-vous un modèle de calcul informatique ?', "Équilibre global des charges et réactions, déformée cohérente, ordres de grandeur des moments par calcul manuel simplifié, cohérence des unités et des appuis, et analyse des éléments les plus sollicités."],
      ['Pourquoi les moments dépendent-ils des rigidités dans une structure hyperstatique ?', 'Parce que la compatibilité des déformations impose que les éléments liés se déforment ensemble ; les éléments les plus rigides reprennent donc une plus grande part des efforts.'],
    ],
  },
  practical_case: {
    title: 'Cas pratique — Poutre de plancher continue sur trois travées',
    scenario: 'Poutre continue A-B-C-D de trois travées égales de 5 m, EI constant, q = 25 kN/m sur toutes les travées.',
    description: 'Calculer les moments sur les appuis B et C par le théorème des trois moments.',
    resolutions: [
      "\\text{Appui B : } 2 M_B (10) + 5 M_C = -\\frac{25 \\times 125 \\times 2}{4} = -1\\,562{,}5",
      "\\text{Symétrie : } M_B = M_C \\Rightarrow 25 M_B = -1\\,562{,}5 \\Rightarrow M_B = M_C = -62{,}5\\ \\text{kN·m}",
      "M_B = -\\frac{q L^2}{10} = -\\frac{25 \\times 25}{10} = -62{,}5\\ \\text{kN·m} \\quad \\checkmark",
    ],
    conclusion: 'Les moments sur appuis valent −qL²/10 = −62,5 kN·m ; on retrouve la valeur classique des poutres continues à trois travées égales.',
  },
  summary: {
    content: `### L'analyse hyperstatique en 5 points
1. $h = r - 3$ : nombre d'équations de compatibilité à ajouter.
2. Trois moments : une équation par appui intermédiaire.
3. Barre : $[k] = \\frac{EA}{L}\\begin{bmatrix}1 & -1\\\\ -1 & 1\\end{bmatrix}$.
4. Poutre : matrice 4 × 4 en $(w, \\theta)$ aux deux nœuds.
5. Assembler, appliquer les appuis, résoudre $[K]\\{U\\} = \\{F\\}$.`,
  },
  key_points: {
    points: [
      'h = r − 3 pour une poutre plane',
      'Deux travées égales : M_appui = −qL²/8',
      'Trois travées égales : M_appuis = −qL²/10',
      'Barre : k = EA/L',
      'Toujours vérifier l’équilibre global',
    ],
  },
  self_assessment: {
    objectives: [
      'Je sais déterminer le degré d’hyperstaticité d’une poutre',
      'Je sais appliquer le théorème des trois moments',
      'Je sais écrire et assembler des matrices de rigidité',
      'Je sais critiquer un résultat de logiciel',
      "J'ai réussi le quiz avec au moins 2 bonnes réponses sur 3",
    ],
  },
});
