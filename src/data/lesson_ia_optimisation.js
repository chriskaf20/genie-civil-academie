// ── Lesson: Optimisation structurale et topologique — Module 30 ──────────────
import { buildLesson } from './build_lesson.js';

export const lesson_ia_optimisation = buildLesson({
  moduleId: 30,
  slug: 'ia_optimisation',
  lessonIndex: 2,
  title: "Optimisation Structurale et Topologique : Dimensionnement Optimal, SIMP et Conception Générative",
  subtitle: 'Module 30 — Intelligence Artificielle & Génie Civil',
  level: 'Avancé',
  duration: '6h',
  tags: ['Optimisation', 'Topologie', 'SIMP', 'Conception générative', 'Algorithme génétique', 'Matériau minimal'],
}, {
  definition: {
    title: 'Définition — Laisser l’algorithme chercher la meilleure structure',
    fr: 'Optimisation structurale',
    en: 'Structural optimization',
    metier: "Utilisée par les ingénieurs structure, les architectes-ingénieurs, les bureaux d'études en conception paramétrique et les industriels de la préfabrication.",
    content: `L'**optimisation structurale** cherche, parmi toutes les solutions possibles, celle qui **minimise un objectif** (masse, coût, carbone) tout en **respectant des contraintes** (résistance, flèche, géométrie).

### Trois niveaux
1. **Optimisation des sections** (dimensionnement) : la géométrie est fixe, on choisit les sections.
2. **Optimisation de forme** : on modifie la géométrie (hauteur d'un treillis, forme d'une arche).
3. **Optimisation topologique** : on décide où mettre de la matière et où il n'en faut pas, à partir d'un bloc plein.

### Les méthodes
- Méthodes à gradient (SIMP pour la topologie) ;
- Algorithmes évolutionnaires (génétiques) pour les choix discrets ;
- **Conception générative** : exploration de nombreuses variantes, parfois aidée par apprentissage automatique (modèles de substitution).

> 💡 Une forme optimale n'est utile que si elle est constructible : l'ingénieur traduit le résultat en éléments fabricables.`,
  },
  importance: {
    content: `- **Carbone** : réduire la matière est le premier levier de décarbonation des structures.
- **Coût** : les gains de 10 à 30 % de matière sont fréquents sur les éléments répétés.
- **Architecture** : formes nouvelles, efficaces et expressives.
- **Fabrication** : l'impression 3D et la préfabrication numérique rendent les formes complexes réalisables.

> ⚠️ **À retenir** : l'optimum calculé dépend entièrement des hypothèses ; un cas de charge oublié donne une structure optimale… et fausse.`,
  },
  applications: {
    examples: [
      ['Treillis de toiture', 'Choix des sections dans un catalogue pour minimiser la masse.'],
      ['Nœuds de façade', 'Pièces moulées ou imprimées issues d’une optimisation topologique.'],
      ['Planchers', 'Dalles nervurées à épaisseur variable, moins de béton.'],
      ['Ponts', 'Recherche de la forme d’arche suivant la ligne des pressions.'],
      ['Préfabrication', 'Optimisation de gammes de poutres réutilisées sur de nombreux projets.'],
    ],
  },
  theory: {
    title: 'Théorie — Formuler et résoudre un problème d’optimisation',
    content: `### 1. Formulation générale
$$\\min_x \\, f(x) \\quad \\text{sous} \\quad g_j(x) \\leq 0$$
$x$ : variables de conception (sections, coordonnées, densités) ; $f$ : objectif ; $g_j$ : contraintes (résistance, flèche).

### 2. Exemple analytique : barre tendue de masse minimale
Pour une barre de longueur $L$ sous un effort $N$ :
$$A_{min} = \\frac{N}{f_d} \\qquad m = \\rho A_{min} L = \\frac{\\rho}{f_d} N L$$
Le rapport $\\rho/f_d$ classe les matériaux pour les éléments tendus.

### 3. Optimisation topologique SIMP
Chaque élément fini reçoit une densité $\\rho_e$ entre 0 et 1. Son module vaut :
$$E_e = \\rho_e^p E_0 \\qquad p \\approx 3$$
La pénalisation $p$ pousse les densités vers 0 ou 1. On minimise la **compliance** (souplesse) sous une contrainte de volume :
$$\\min \\, C = \\mathbf{F}^T \\mathbf{u} \\quad \\text{avec} \\quad \\sum \\rho_e v_e \\leq V^*$$

### 4. Algorithmes génétiques
Une population de solutions évolue par sélection, croisement et mutation ; adaptés aux choix discrets (profilés d'un catalogue).

### 5. Modèles de substitution
Un réseau de neurones entraîné sur des milliers de calculs prédit rapidement la performance d'une variante, ce qui accélère l'exploration.`,
  },
  formulas: {
    title: 'Formules essentielles — Optimisation',
    formulas: [
      {
        name: 'Problème d’optimisation',
        latex: "\\min_x f(x) \\quad \\text{sous} \\quad g_j(x) \\leq 0",
        description: 'Forme générale.',
        vars: [
          ['x', 'Variables de conception', '-', 'Sections, géométrie, densités.'],
          ['f', 'Fonction objectif', '-', 'Masse, coût, CO₂.'],
          ['g_j', 'Contraintes', '-', 'Résistance, flèche, fabrication.'],
        ],
      },
      {
        name: 'Masse minimale d’un élément tendu',
        latex: "m = \\frac{\\rho}{f_d} N L",
        description: 'Indice de performance ρ/f_d pour la traction.',
        vars: [
          ['\\rho', 'Masse volumique', 'kg/m³', ''],
          ['f_d', 'Résistance de calcul', 'Pa', ''],
          ['N', 'Effort de traction', 'N', ''],
          ['L', 'Longueur', 'm', ''],
        ],
      },
      {
        name: 'Interpolation SIMP',
        latex: "E_e = \\rho_e^{\\,p} E_0",
        description: 'Module pénalisé d’un élément de densité intermédiaire.',
        vars: [
          ['\\rho_e', 'Densité de l’élément', '-', '0 à 1.'],
          ['p', 'Pénalisation', '-', '≈ 3.'],
          ['E_0', 'Module du matériau plein', 'MPa', ''],
        ],
        rule: 'Avec p = 3, une densité de 0,5 ne donne que 12,5 % de la rigidité : les zones intermédiaires sont « peu rentables ».',
      },
      {
        name: 'Compliance',
        latex: "C = \\mathbf{F}^T \\mathbf{u}",
        description: 'Travail des forces extérieures : plus il est faible, plus la structure est rigide.',
        vars: [
          ['\\mathbf{F}', 'Vecteur des forces', 'N', ''],
          ['\\mathbf{u}', 'Vecteur des déplacements', 'm', ''],
        ],
      },
    ],
  },
  stepbystep: {
    title: 'Calcul complet — Hauteur optimale d’un treillis',
    problem: "Un treillis simple de portée L = 20 m porte une charge centrée P = 200 kN. On cherche la hauteur h minimisant le volume de matière (membrure inférieure tendue et deux diagonales comprimées, contrainte admissible identique σ = 200 MPa, flambement négligé à ce stade).",
    steps_demo: [
      { n: 1, text: "Effort dans la membrure : T = P L / (4h). Effort dans chaque diagonale : D = P / (2 sin α), avec tan α = 2h/L." },
      { n: 2, text: "Volume : V = (T × L + 2 × D × l_d) / σ, avec l_d = √((L/2)² + h²)." },
      { n: 3, text: "En développant : V = P / σ × (L²/(4h) + ((L/2)² + h²)/h) = P / σ × (L²/(2h) + h)." },
      { n: 4, text: "Minimum : dV/dh = 0 ⇒ −L²/(2h²) + 1 = 0 ⇒ h = L/√2 = 14,1 m." },
      { n: 5, text: "Volume minimal : V = (200 000 N / 200 MPa) × 28,28 m = 1 000 mm² × 28,28 m = 0,0283 m³, soit environ 222 kg d'acier. En pratique, le flambement et l'encombrement conduisent à des hauteurs bien plus faibles (L/10 à L/15)." },
    ],
    result_latex: "V(h) = \\frac{P}{\\sigma}\\left(\\frac{L^2}{2h} + h\\right) \\Rightarrow h_{opt} = \\frac{L}{\\sqrt{2}} = 14{,}1\\ \\text{m}",
  },
  units: {
    table: [
      ['Masse', 'kg ou t', 'lb', '1 t = 2 205 lb'],
      ['Volume', 'm³', 'ft³', '1 m³ = 35,3 ft³'],
      ['Carbone', 'kg CO₂e', 'lb CO₂e', 'Objectif possible de l’optimisation'],
      ['Densité SIMP', '0 à 1', '0 to 1', 'Sans dimension'],
      ['Compliance', 'J (N·m)', 'lbf·ft', 'Énergie'],
    ],
    note: 'Un objectif carbone et un objectif masse donnent des solutions différentes quand plusieurs matériaux sont possibles.',
  },
  hypotheses: {
    items: [
      ['info', 'L’optimum dépend des cas de charge : tous les cas significatifs doivent être pris en compte (y compris asymétriques).'],
      ['info', 'L’optimisation topologique classique minimise la compliance, pas directement la contrainte ni le flambement.'],
      ['warning', 'Une structure optimisée pour un seul cas de charge peut être très sensible aux autres : vérifier la robustesse.'],
      ['warning', 'Les formes issues de SIMP doivent être interprétées puis recalculées avec les règles des Eurocodes.'],
      ['tip', 'Ajoutez des contraintes de fabrication (épaisseur minimale, symétrie, directions d’extraction) dès la formulation.'],
    ],
  },
  simple_examples: {
    examples: [
      {
        title: 'Exemple 1 : choix de matériau pour un tirant',
        given: 'Acier S355 : ρ = 7 850, f_d = 355 MPa ; aluminium : ρ = 2 700, f_d ≈ 200 MPa',
        find: 'Indice ρ/f_d',
        solution_latex: "\\frac{7\\,850}{355} = 22{,}1 \\qquad \\frac{2\\,700}{200} = 13{,}5",
        result: 'À résistance égale, le tirant aluminium est environ 39 % plus léger.',
      },
      {
        title: 'Exemple 2 : pénalisation SIMP',
        given: 'ρ_e = 0,6 ; p = 3',
        find: 'E_e / E₀',
        solution_latex: "0{,}6^3 = 0{,}216",
        result: '21,6 % de la rigidité pour 60 % de la matière.',
      },
      {
        title: 'Exemple 3 : gain d’une optimisation de sections',
        given: 'Treillis de 4,2 t avec sections uniformes ; 3,1 t après optimisation',
        find: 'Gain',
        solution_latex: "\\frac{4{,}2 - 3{,}1}{4{,}2} = 26\\ \\%",
        result: '26 % de matière en moins.',
      },
    ],
  },
  real_examples: {
    title: 'Exemple réel — Planchers à épaisseur variable imprimés en 3D',
    examples: [
      {
        context: 'Recherches universitaires européennes (ETH Zurich, années 2010–2020)',
        scenario: "Des planchers en béton nervurés, dont la forme suit les trajectoires d'efforts, ont été conçus par optimisation puis fabriqués avec des coffrages imprimés en 3D. Les prototypes ont montré des économies de béton importantes par rapport à une dalle pleine de même portée.",
        decomposition_latex: "\\text{Optimisation de forme} + \\text{coffrage numérique} \\Rightarrow \\text{matière réduite à résistance égale}",
        lesson: "L'optimisation n'a de valeur que si la fabrication suit : la conception et les méthodes de construction doivent être pensées ensemble.",
      },
    ],
  },
  diagrams: {
    title: 'Schéma de principe — Processus d’optimisation topologique',
    diagram_description: [
      'Domaine de conception, appuis et cas de charge',
      'Maillage et densités initiales uniformes',
      'Calcul éléments finis et sensibilités',
      'Mise à jour des densités (SIMP + filtrage)',
      'Convergence : répartition matière / vide',
      'Interprétation constructible et vérification réglementaire',
    ],
  },
  mistakes: {
    items: [
      ['Optimiser pour un seul cas de charge', 'Structure fragile sous les autres cas', 'Inclure toutes les combinaisons significatives.'],
      ['Ignorer le flambement', 'Barres comprimées trop fines', 'Ajouter des contraintes de stabilité.'],
      ['Livrer le résultat brut', 'Formes infabricables', 'Reconstruire une géométrie simple et la recalculer.'],
    ],
  },
  tips: {
    tips: [
      'Commencez par une optimisation des sections : gains rapides et sans risque.',
      'Utilisez l’optimisation topologique comme outil d’inspiration en avant-projet.',
      'Choisissez un objectif carbone si plusieurs matériaux sont en concurrence.',
      'Documentez les hypothèses : elles déterminent le résultat.',
    ],
  },
  norms: {
    norms: [
      ['NF EN 1990', 'Les solutions optimisées restent soumises aux mêmes exigences de fiabilité.'],
      ['NF EN 1993-1-1 et 1992-1-1', 'Vérifications finales des éléments optimisés.'],
      ['NF EN 15804 / ISO 21930', 'Données environnementales utilisables comme objectif carbone.'],
      ['Littérature : Bendsøe & Sigmund', 'Référence de l’optimisation topologique (méthode SIMP).'],
    ],
  },
  exercises: {
    exercises: [
      {
        level: 1,
        text: 'Avec p = 3, quelle rigidité relative a un élément de densité 0,3 ?',
        hint: 'E/E₀ = ρ^p.',
        answer_latex: "0{,}3^3 = 0{,}027",
        answer_text: '2,7 %.',
      },
      {
        level: 2,
        text: 'Calculer la masse minimale d’un tirant S355 de 8 m reprenant 500 kN.',
        hint: 'm = ρ N L / f_d.',
        answer_latex: "m = \\frac{7\\,850 \\times 500\\,000 \\times 8}{355 \\times 10^6} = 88{,}5\\ \\text{kg}",
        answer_text: '88,5 kg (A = 1 408 mm²).',
      },
      {
        level: 3,
        text: 'Pour le treillis de l’exemple, comparer le volume pour h = 2 m (L/10) au volume optimal.',
        hint: 'V ∝ L²/(2h) + h.',
        answer_latex: "\\frac{400/4 + 2}{28{,}28} = \\frac{102}{28{,}28} = 3{,}6",
        answer_text: 'Le volume est 3,6 fois l’optimum théorique, mais la hauteur L/10 est souvent imposée par l’encombrement et la stabilité.',
      },
    ],
  },
  quiz: {
    title: 'Quiz — Optimisation',
    questions: [
      { q: 'Que décide l’optimisation topologique ?', options: ['Les sections d’un catalogue', 'Où placer la matière', 'Le prix de l’acier'], correct: 1, explain: 'Elle répartit matière et vide dans un domaine.' },
      { q: 'Quel est le rôle de la pénalisation p dans SIMP ?', options: ['Accélérer le calcul', 'Pousser les densités vers 0 ou 1', 'Augmenter les charges'], correct: 1, explain: 'Les densités intermédiaires deviennent peu efficaces.' },
      { q: 'Quelle méthode convient aux choix discrets de profilés ?', options: ['Algorithme génétique', 'Méthode de Cross', 'Analyse modale'], correct: 0, explain: 'Les algorithmes évolutionnaires gèrent les variables discrètes.' },
    ],
  },
  exam_questions: {
    questions: [
      'Présentez les trois niveaux d’optimisation structurale.',
      'Expliquez le principe de la méthode SIMP.',
      'Quelles précautions prendre pour rendre une structure optimisée constructible et robuste ?',
    ],
  },
  interview_questions: {
    questions: [
      ['Avez-vous déjà utilisé l’optimisation dans un projet ?', 'Je décris un cas concret : variables, objectif, contraintes, gain obtenu et la façon dont le résultat a été rendu constructible et vérifié.'],
      ['L’optimisation topologique remplace-t-elle l’ingénieur ?', 'Non : elle explore des formes, mais l’ingénieur fixe les hypothèses, interprète le résultat, intègre la fabrication et vérifie la sécurité.'],
    ],
  },
  practical_case: {
    title: 'Cas pratique — Optimiser une série de 40 fermes de toiture',
    scenario: 'Une toiture de hangar comporte 40 fermes identiques de 4,2 t en sections uniformes. Une optimisation par algorithme génétique sur un catalogue de cornières réduit la masse à 3,1 t par ferme, mais ajoute 6 sections différentes.',
    description: 'Évaluer le gain et la pertinence.',
    resolutions: [
      "\\text{Acier économisé} : 40 \\times (4{,}2 - 3{,}1) = 44\\ \\text{t}",
      "\\text{Carbone évité (≈ 1,5 t CO}_2\\text{e/t, valeur indicative)} : 44 \\times 1{,}5 = 66\\ \\text{t CO}_2\\text{e}",
      "\\text{Contrainte de fabrication} : \\text{limiter à 3 sections} \\Rightarrow \\text{nouvelle optimisation à 3,3 t/ferme}",
    ],
    conclusion: 'La solution à 3 sections (3,3 t) conserve l’essentiel du gain (36 t d’acier) tout en simplifiant l’approvisionnement et le montage.',
  },
  summary: {
    content: `### L'optimisation en 5 points
1. $\\min f(x)$ sous contraintes $g_j(x) \\leq 0$.
2. Trois niveaux : sections, forme, topologie.
3. SIMP : $E_e = \\rho_e^p E_0$, minimisation de la compliance.
4. Algorithmes génétiques pour les choix discrets, modèles de substitution pour accélérer.
5. Résultat à rendre constructible, robuste et vérifié.`,
  },
  key_points: {
    points: [
      'Objectif + variables + contraintes',
      'Indice ρ/f_d pour la traction',
      'SIMP : E = ρ^p E₀',
      'Tous les cas de charge',
      'Constructibilité avant tout',
    ],
  },
  self_assessment: {
    objectives: [
      'Je sais formuler un problème d’optimisation',
      'Je comprends le principe de SIMP',
      'Je sais comparer des matériaux par un indice de performance',
      'Je sais intégrer des contraintes de fabrication',
      "J'ai réussi le quiz avec au moins 2 bonnes réponses sur 3",
    ],
  },
});
