// ── Lesson: Crues et statistiques — Module 37 ────────────────────────────────
import { buildLesson } from './build_lesson.js';

export const lesson_hydrologie_crues = buildLesson({
  moduleId: 37,
  slug: 'hydrologie_crues',
  lessonIndex: 3,
  title: "Crues et Statistiques : Période de Retour, Loi de Gumbel, Ajustement et Capacité des Cours d'Eau",
  subtitle: 'Module 37 — Hydrologie & Gestion des eaux pluviales',
  level: 'Avancé',
  duration: '6h',
  tags: ['Crue', 'Période de retour', 'Gumbel', 'Statistiques', 'Manning', 'Débit de projet', 'Inondation'],
}, {
  definition: {
    title: 'Définition — Estimer la crue rare que l’ouvrage doit supporter',
    fr: 'Analyse statistique des crues',
    en: 'Flood frequency analysis',
    metier: "Utilisée par les hydrologues, les ingénieurs ponts et barrages, les gestionnaires de cours d'eau et les services de prévention des risques.",
    content: `Pour dimensionner un pont, une digue ou un évacuateur de crues, on ne peut pas se contenter des crues observées : il faut estimer une crue **plus rare** que celles mesurées, définie par sa **période de retour** $T$.

### La démarche
1. Constituer une **série de maxima annuels** des débits (une valeur par année).
2. Ajuster une **loi statistique** (Gumbel, GEV, log-normale…).
3. Extrapoler pour la période de retour voulue (10, 100, 1 000 ans).
4. Évaluer l'**incertitude** de l'estimation.

### Période de retour
Une crue de période de retour 100 ans a une probabilité de 1/100 d'être dépassée **chaque année**. Elle peut survenir deux années de suite.

> 💡 Avec 30 ans de mesures, l'estimation de la crue centennale est déjà une extrapolation : l'incertitude est importante.`,
  },
  importance: {
    content: `- **Sécurité** : le débit de projet conditionne l'ouverture des ponts et la hauteur des digues.
- **Économie** : surdimensionner coûte cher ; sous-dimensionner expose à la destruction.
- **Réglementation** : PPRI fondés sur la crue centennale ou la plus forte crue connue.
- **Changement climatique** : les séries passées ne sont pas toujours représentatives du futur.

> ⚠️ **À retenir** : toujours indiquer l'incertitude (intervalle de confiance) avec un débit de projet.`,
  },
  applications: {
    examples: [
      ['Pont routier', 'Débit centennal pour la section d’écoulement et l’affouillement.'],
      ['Digue de protection', 'Crue de projet et revanche.'],
      ['Barrage', 'Crue millénale ou décamillénale pour l’évacuateur.'],
      ['PPRI', 'Cartographie de la crue de référence.'],
      ['Assurance', 'Évaluation des pertes probables.'],
    ],
  },
  theory: {
    title: 'Théorie — Ajustement de Gumbel et capacité hydraulique',
    content: `### 1. Fréquence empirique (formule de Weibull)
Les $n$ maxima sont classés par ordre décroissant ; la valeur de rang $m$ a une période de retour empirique :
$$T = \\frac{n + 1}{m}$$

### 2. Loi de Gumbel (méthode des moments)
$$Q_T = \\bar{Q} + K_T \\, \\sigma \\qquad K_T = -\\frac{\\sqrt{6}}{\\pi} \\left[ 0{,}5772 + \\ln\\left( -\\ln\\left( 1 - \\frac{1}{T} \\right) \\right) \\right]$$
Valeurs utiles : $K_{10}$ = 1,30 ; $K_{50}$ = 2,59 ; $K_{100}$ = 3,14.

### 3. Variable réduite
$u = -\\ln(-\\ln F)$ avec $F = 1 - 1/T$ : sur un graphique (u ; Q), une loi de Gumbel est une droite.

### 4. Capacité d'un lit (Manning-Strickler)
$$Q = \\frac{1}{n} A R_h^{2/3} \\sqrt{S}$$
On compare la capacité du lit mineur au débit de projet pour savoir si le lit majeur est inondé.

### 5. Autres méthodes
- **Gradex** (France) : extrapolation des débits à partir des pluies pour les crues très rares ;
- **Lois GEV**, log-Pearson III (États-Unis) ;
- **Analyse régionale** pour les sites peu jaugés.`,
  },
  formulas: {
    title: 'Formules essentielles — Statistique des crues',
    formulas: [
      {
        name: 'Période de retour empirique (Weibull)',
        latex: "T = \\frac{n + 1}{m}",
        description: 'Pour une série de n maxima annuels classés.',
        vars: [
          ['n', "Nombre d'années", '-', ''],
          ['m', 'Rang (1 = plus forte crue)', '-', ''],
        ],
      },
      {
        name: 'Débit de Gumbel',
        latex: "Q_T = \\bar{Q} + K_T \\, \\sigma",
        description: 'Ajustement par la méthode des moments.',
        vars: [
          ['\\bar{Q}', 'Moyenne des maxima annuels', 'm³/s', ''],
          ['\\sigma', 'Écart type', 'm³/s', ''],
          ['K_T', 'Facteur de fréquence', '-', '1,30 (10 ans) ; 3,14 (100 ans).'],
        ],
      },
      {
        name: 'Facteur de fréquence de Gumbel',
        latex: "K_T = -\\frac{\\sqrt{6}}{\\pi}\\left[0{,}5772 + \\ln\\left(-\\ln\\left(1 - \\frac{1}{T}\\right)\\right)\\right]",
        description: 'Formule de la loi de Gumbel (grand échantillon).',
        vars: [
          ['T', 'Période de retour', 'an', ''],
        ],
      },
      {
        name: 'Formule de Manning',
        latex: "Q = \\frac{1}{n} \\, A \\, R_h^{2/3} \\sqrt{S}",
        description: 'Débit en régime uniforme.',
        vars: [
          ['n', 'Coefficient de Manning', 's/m^{1/3}', '0,030 à 0,050 pour les rivières naturelles.'],
          ['A', 'Section mouillée', 'm²', ''],
          ['R_h', 'Rayon hydraulique A/P', 'm', ''],
          ['S', 'Pente', 'm/m', ''],
        ],
      },
    ],
  },
  stepbystep: {
    title: 'Calcul complet — Crue décennale et centennale d’une rivière',
    problem: "Sur 20 ans de mesures, les débits maximaux annuels d'une rivière ont une moyenne de 120 m³/s et un écart type de 40 m³/s. Estimer Q₁₀ et Q₁₀₀, puis vérifier si un lit rectangulaire de 10 m de large, 3 m de profondeur, n = 0,035, pente 0,1 % les contient.",
    steps_demo: [
      { n: 1, text: "K₁₀ : ln(−ln 0,9) = ln(0,1054) = −2,250 ; K₁₀ = −0,7797 × (0,5772 − 2,250) = 1,30." },
      { n: 2, text: "Q₁₀ = 120 + 1,30 × 40 = 172 m³/s." },
      { n: 3, text: "K₁₀₀ : ln(−ln 0,99) = ln(0,01005) = −4,600 ; K₁₀₀ = −0,7797 × (0,5772 − 4,600) = 3,14 ; Q₁₀₀ = 120 + 3,14 × 40 = 246 m³/s." },
      { n: 4, text: "Capacité du lit plein : A = 30 m² ; P = 16 m ; R_h = 1,875 m ; Q = (1/0,035) × 30 × 1,875^(2/3) × √0,001 = 28,57 × 30 × 1,520 × 0,0316 = 41 m³/s." },
      { n: 5, text: "Le lit mineur ne contient que 41 m³/s : le lit majeur est inondé bien avant la crue décennale ; le pont devra être dimensionné avec un modèle hydraulique incluant le lit majeur." },
    ],
    result_latex: "Q_{10} = 120 + 1{,}30 \\times 40 = 172 \\qquad Q_{100} = 120 + 3{,}14 \\times 40 = 246\\ \\text{m}^3/\\text{s} \\qquad Q_{lit} \\approx 41\\ \\text{m}^3/\\text{s}",
  },
  units: {
    table: [
      ['Débit', 'm³/s', 'cfs', '1 m³/s = 35,3 cfs'],
      ['Période de retour', 'ans', 'years', 'T = 1 / probabilité annuelle'],
      ['Coefficient de Manning', 's/m^(1/3)', 's/ft^(1/3)', 'En unités US : facteur 1,49'],
      ['Débit spécifique', 'L/s/km²', 'cfs/mi²', 'Utile pour comparer des bassins'],
      ['Hauteur d’eau', 'm', 'ft', 'Lien débit-hauteur : courbe de tarage'],
    ],
    note: 'Le coefficient de Strickler K = 1/n est souvent utilisé en France.',
  },
  hypotheses: {
    items: [
      ['info', 'L’analyse suppose une série homogène et stationnaire (pas de changement du bassin ni du climat).'],
      ['info', 'La formule de K_T présentée correspond à la loi de Gumbel théorique ; pour de petits échantillons, des coefficients corrigés existent.'],
      ['warning', 'Extrapoler au-delà de 2 à 3 fois la durée des mesures donne une grande incertitude.'],
      ['warning', 'Les crues historiques (repères de crue, archives) doivent être intégrées : elles sont souvent supérieures aux crues mesurées.'],
      ['tip', 'Comparez Gumbel à une autre loi (GEV) et à la méthode du Gradex pour les crues rares.'],
    ],
  },
  simple_examples: {
    examples: [
      {
        title: 'Exemple 1 : période de retour empirique',
        given: '35 ans de mesures, crue de rang 2',
        find: 'T',
        solution_latex: "T = \\frac{36}{2} = 18\\ \\text{ans}",
        result: 'Environ 18 ans.',
      },
      {
        title: 'Exemple 2 : crue cinquantennale',
        given: 'Moyenne 85 m³/s ; σ = 30 m³/s ; K₅₀ = 2,59',
        find: 'Q₅₀',
        solution_latex: "Q_{50} = 85 + 2{,}59 \\times 30 = 162{,}7\\ \\text{m}^3/\\text{s}",
        result: 'Environ 163 m³/s.',
      },
      {
        title: 'Exemple 3 : probabilité sur la durée de vie',
        given: 'Pont de durée de vie 100 ans, crue de projet T = 100 ans',
        find: 'Probabilité de dépassement',
        solution_latex: "P = 1 - 0{,}99^{100} = 0{,}63",
        result: '63 % : la crue de projet a de fortes chances d’être atteinte pendant la vie de l’ouvrage.',
      },
    ],
  },
  real_examples: {
    title: 'Exemple réel — Crue de la Seine de 1910',
    examples: [
      {
        context: 'Paris, janvier 1910',
        scenario: "La Seine a atteint 8,62 m à l'échelle du pont d'Austerlitz, inondant une partie de Paris pendant plusieurs semaines. Cette crue, estimée d'une période de retour de l'ordre de 100 ans, sert aujourd'hui de référence aux plans de prévention et aux exercices de gestion de crise de la région parisienne.",
        decomposition_latex: "\\text{Pluies prolongées sur sols saturés} + \\text{concomitance des affluents} \\Rightarrow \\text{crue lente mais très volumineuse}",
        lesson: "Les crues historiques documentées complètent utilement les séries de mesures récentes pour estimer les crues rares.",
      },
    ],
  },
  diagrams: {
    title: 'Schéma de principe — Estimer un débit de projet',
    diagram_description: [
      'Collecte des données : stations hydrométriques, crues historiques',
      'Série des maxima annuels et contrôle d’homogénéité',
      'Ajustement statistique (Gumbel, GEV) et graphique en variable réduite',
      'Extrapolation à la période de retour et intervalle de confiance',
      'Comparaison avec d’autres méthodes (Gradex, régionalisation)',
      'Débit de projet retenu et justifié',
    ],
  },
  mistakes: {
    items: [
      ['Utiliser les débits moyens journaliers comme débits de pointe', 'Sous-estimation de la pointe', 'Utiliser les débits instantanés maximaux.'],
      ['Ignorer les crues historiques', 'Crue de projet trop faible', 'Intégrer archives et repères de crue.'],
      ['Confondre T = 100 ans et « une fois par siècle »', 'Mauvaise perception du risque', 'Raisonner en probabilité annuelle de 1 %.'],
    ],
  },
  tips: {
    tips: [
      'Consultez les données hydrométriques publiques (en France : HydroPortail).',
      'Tracez toujours les points empiriques avec la loi ajustée.',
      'Donnez le débit de projet avec un intervalle de confiance.',
      'Intégrez une marge pour le changement climatique quand les guides nationaux le recommandent.',
    ],
  },
  norms: {
    norms: [
      ['Méthodes SHYREG (INRAE) et Gradex', 'Estimation des crues rares en France.'],
      ['Arrêté du 6 août 2018 (France)', 'Prescriptions techniques relatives à la sécurité des barrages (crues de projet).'],
      ['Bulletin 17C (USGS)', 'Analyse fréquentielle des crues aux États-Unis.'],
      ['Guides SETRA / Cerema (ponts en site aquatique)', 'Prise en compte des crues et de l’affouillement.'],
    ],
  },
  exercises: {
    exercises: [
      {
        level: 1,
        text: 'Quelle est la probabilité annuelle d’une crue de période de retour 50 ans ?',
        hint: 'p = 1/T.',
        answer_latex: "p = \\frac{1}{50} = 2\\ \\%",
        answer_text: '2 % par an.',
      },
      {
        level: 2,
        text: 'Calculer K₂₀ pour la loi de Gumbel.',
        hint: 'ln(−ln 0,95).',
        answer_latex: "K_{20} = -0{,}7797 \\times (0{,}5772 + \\ln(0{,}0513)) = -0{,}7797 \\times (0{,}5772 - 2{,}970) = 1{,}87",
        answer_text: 'K₂₀ ≈ 1,87.',
      },
      {
        level: 3,
        text: 'Quelle largeur de lit rectangulaire (h = 3 m, n = 0,035, S = 0,001) faut-il pour faire passer Q₁₀ = 172 m³/s ?',
        hint: 'Essayer b = 40 m.',
        answer_latex: "b = 40 : A = 120 ; R_h = \\frac{120}{46} = 2{,}61 ; Q = 28{,}57 \\times 120 \\times 1{,}895 \\times 0{,}0316 = 205\\ \\text{m}^3/\\text{s}",
        answer_text: 'Avec b = 40 m on obtient environ 205 m³/s ; une largeur d’environ 34 m suffit pour 172 m³/s.',
      },
    ],
  },
  quiz: {
    title: 'Quiz — Crues',
    questions: [
      { q: 'Une crue centennale a une probabilité annuelle de…', options: ['10 %', '1 %', '0,1 %'], correct: 1, explain: '1/100.' },
      { q: 'Quelle loi est classiquement utilisée pour les maxima annuels ?', options: ['Loi normale', 'Loi de Gumbel', 'Loi uniforme'], correct: 1, explain: 'La loi de Gumbel (ou GEV).' },
      { q: 'Sur un graphique en variable réduite, une loi de Gumbel est…', options: ['Une droite', 'Une parabole', 'Un cercle'], correct: 0, explain: 'Q est linéaire en u.' },
    ],
  },
  exam_questions: {
    questions: [
      'Décrivez la méthode d’ajustement de Gumbel et ses hypothèses.',
      'Pourquoi l’estimation des crues rares est-elle incertaine ?',
      'Comment vérifier si un cours d’eau déborde pour une crue donnée ?',
    ],
  },
  interview_questions: {
    questions: [
      ['Quel débit retenez-vous pour un pont ?', 'Le débit de période de retour exigé par le maître d’ouvrage (souvent 100 ans), estimé par plusieurs méthodes, avec une vérification pour une crue plus rare et une analyse de l’affouillement.'],
      ['Comment intégrez-vous le changement climatique ?', 'En suivant les guides nationaux, par des tests de sensibilité (majoration des pluies ou débits) et en privilégiant des conceptions robustes en cas de dépassement.'],
    ],
  },
  practical_case: {
    title: 'Cas pratique — Débit de projet d’un pont',
    scenario: 'Une station dispose de 25 ans de maxima annuels : moyenne 210 m³/s, écart type 65 m³/s. La plus forte crue historique connue (1930) est estimée à 480 m³/s.',
    description: 'Estimer Q₁₀₀ et choisir le débit de projet.',
    resolutions: [
      "Q_{100} = 210 + 3{,}14 \\times 65 = 414\\ \\text{m}^3/\\text{s}",
      "\\text{Crue historique} : 480\\ \\text{m}^3/\\text{s} > Q_{100} \\text{ estimée}",
      "\\text{Débit de projet retenu} : \\max(414 ; 480) = 480\\ \\text{m}^3/\\text{s}",
    ],
    conclusion: 'La crue historique, supérieure à l’estimation statistique, est retenue comme crue de référence, conformément aux pratiques des PPRI.',
  },
  summary: {
    content: `### Les crues en 5 points
1. Série de maxima annuels et période de retour.
2. Weibull : $T = (n + 1)/m$.
3. Gumbel : $Q_T = \\bar{Q} + K_T \\sigma$ ($K_{100}$ = 3,14).
4. Manning : capacité du lit et débordements.
5. Incertitude et crues historiques à intégrer.`,
  },
  key_points: {
    points: [
      'T = 1 / probabilité annuelle',
      'T = (n + 1)/m',
      'Q_T = Q̄ + K_T σ',
      'K₁₀₀ ≈ 3,14',
      'Crues historiques indispensables',
    ],
  },
  self_assessment: {
    objectives: [
      'Je sais calculer une période de retour empirique',
      'Je sais ajuster une loi de Gumbel',
      'Je sais vérifier la capacité d’un lit',
      'Je sais choisir et justifier un débit de projet',
      "J'ai réussi le quiz avec au moins 2 bonnes réponses sur 3",
    ],
  },
});
