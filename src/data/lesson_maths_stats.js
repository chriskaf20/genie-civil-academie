// ── Lesson: Statistiques et probabilités pour l'ingénieur — Module 1 ─────────
import { buildLesson } from './build_lesson.js';

export const lesson_maths_stats = buildLesson({
  moduleId: 1,
  slug: 'maths_stats',
  lessonIndex: 5,
  title: "Statistiques & Probabilités pour l'Ingénieur : Valeurs Caractéristiques, Fiabilité & Événements Extrêmes",
  subtitle: 'Module 01 — Mathématiques appliquées au Génie Civil',
  level: 'Débutant',
  duration: '8h',
  tags: ['Statistiques', 'Probabilités', 'Loi normale', 'Fractile', 'Valeur caractéristique', 'Gumbel', 'Indice de fiabilité'],
}, {
  definition: {
    title: "Définition — Raisonner avec l'incertitude",
    fr: "Statistiques et probabilités appliquées à l'ingénierie",
    en: 'Engineering statistics and probability',
    metier: "Utilisées pour le contrôle qualité des matériaux, la définition des valeurs caractéristiques des Eurocodes, l'hydrologie (crues), la fiabilité des structures et l'analyse des risques.",
    content: `Les matériaux, les charges et les sols **varient** : deux éprouvettes du même béton n'ont jamais la même résistance, deux hivers n'ont pas la même neige. Les statistiques permettent de **quantifier cette variabilité** et les probabilités de **décider** malgré elle.

### Les notions clés
- **Moyenne** $\\bar{x}$ et **écart-type** $s$ : position et dispersion d'un échantillon.
- **Loi normale** (Gauss) : modèle de nombreuses résistances de matériaux.
- **Valeur caractéristique** : fractile de la distribution, par exemple la valeur qui n'a que 5 % de chances d'être plus faible pour une résistance.
- **Période de retour** et lois d'**extrêmes** (Gumbel) pour les crues, le vent, la neige.
- **Probabilité de défaillance** et **indice de fiabilité** $\\beta$, à l'origine des coefficients partiels des Eurocodes.

> 💡 Quand on écrit « béton C25/30 », on affirme qu'au plus 5 % des éprouvettes cylindriques auront une résistance inférieure à 25 MPa.`,
  },
  importance: {
    content: `- **Eurocodes** : toutes les résistances caractéristiques ($f_{ck}$, $f_{yk}$, $f_{m,k}$) sont des fractiles statistiques.
- **Contrôle qualité** : la conformité d'un béton se juge sur des séries d'essais, pas sur un résultat isolé.
- **Hydrologie et climat** : les crues et vents de projet sont des événements de probabilité donnée.
- **Gestion des risques** : choisir un niveau de sécurité revient à accepter une probabilité de défaillance très faible.

> ⚠️ **À retenir** : la moyenne seule ne suffit jamais ; c'est la dispersion qui fait la différence entre un matériau fiable et un matériau risqué.`,
  },
  applications: {
    examples: [
      ['Centrale à béton', 'Calcul de la moyenne et de l’écart-type des résistances pour vérifier la classe C30/37.'],
      ['Essais de pieux', 'Résistance caractéristique d’après plusieurs essais de chargement (facteurs ξ de l’EC7).'],
      ['Hydrologie', 'Ajustement d’une loi de Gumbel sur les pluies maximales annuelles.'],
      ['Auscultation', 'Régression linéaire entre indice sclérométrique et résistance sur carottes.'],
      ['Fiabilité', 'Calcul de la probabilité de défaillance d’un élément avec la marge de sécurité.'],
    ],
  },
  theory: {
    title: "Théorie — De l'échantillon à la décision",
    content: `### 1. Statistiques descriptives
$$\\bar{x} = \\frac{1}{n} \\sum x_i \\qquad s = \\sqrt{\\frac{1}{n - 1} \\sum (x_i - \\bar{x})^2} \\qquad CV = \\frac{s}{\\bar{x}}$$

### 2. Loi normale et fractile
Si $X$ suit une loi normale, la valeur caractéristique inférieure à 5 % vaut :
$$x_k = \\bar{x} - 1{,}645 \\, s$$
(68 % des valeurs sont dans $\\bar{x} \\pm s$, 95 % dans $\\bar{x} \\pm 1{,}96 s$.)

### 3. Événements extrêmes : loi de Gumbel
Pour les maxima annuels (pluie, débit, vent), la valeur de période de retour $T$ vaut :
$$x_T = u - \\frac{1}{\\alpha} \\ln\\left[-\\ln\\left(1 - \\frac{1}{T}\\right)\\right] \\qquad \\frac{1}{\\alpha} = 0{,}78\\, s \\quad u = \\bar{x} - 0{,}45\\, s$$

### 4. Fiabilité
On compare la résistance $R$ et la sollicitation $S$ par la marge $M = R - S$. Si $R$ et $S$ sont normales et indépendantes :
$$\\beta = \\frac{\\mu_R - \\mu_S}{\\sqrt{\\sigma_R^2 + \\sigma_S^2}} \\qquad P_f = \\Phi(-\\beta)$$
L'Eurocode 0 vise $\\beta = 3{,}8$ sur 50 ans pour les bâtiments courants, soit $P_f \\approx 7 \\times 10^{-5}$.

### 5. Régression linéaire
La droite $y = a + b x$ des moindres carrés : $b = \\dfrac{\\sum (x_i - \\bar{x})(y_i - \\bar{y})}{\\sum (x_i - \\bar{x})^2}$ et $a = \\bar{y} - b \\bar{x}$.`,
  },
  formulas: {
    title: 'Formules essentielles — Statistiques de l’ingénieur',
    formulas: [
      {
        name: 'Moyenne, écart-type et coefficient de variation',
        latex: "\\bar{x} = \\frac{1}{n} \\sum x_i \\qquad s = \\sqrt{\\frac{\\sum (x_i - \\bar{x})^2}{n - 1}} \\qquad CV = \\frac{s}{\\bar{x}}",
        description: 'Description d’un échantillon de mesures.',
        vars: [
          ['\\bar{x}', 'Moyenne', 'selon la grandeur', 'Valeur centrale.'],
          ['s', 'Écart-type', 'selon la grandeur', 'Dispersion autour de la moyenne.'],
          ['CV', 'Coefficient de variation', '-', 'Béton ≈ 0,10 à 0,15 ; acier ≈ 0,05.'],
          ['n', "Nombre d'essais", '-', 'Taille de l’échantillon.'],
        ],
      },
      {
        name: 'Valeur caractéristique (fractile à 5 %)',
        latex: "x_k = \\bar{x} - 1{,}645 \\, s",
        description: 'Loi normale, écart-type connu ; pour peu d’essais, un coefficient plus grand (Student) est utilisé.',
        vars: [
          ['x_k', 'Valeur caractéristique', 'selon la grandeur', '5 % de chances d’être inférieure.'],
          ['1{,}645', 'Fractile de la loi normale', '-', 'Correspond à une probabilité de 5 %.'],
        ],
        rule: "Pour un béton bien maîtrisé (s ≈ 3 à 5 MPa), f_cm ≈ f_ck + 8 MPa (EC2).",
      },
      {
        name: 'Valeur de période de retour (Gumbel)',
        latex: "x_T = u - \\frac{1}{\\alpha} \\ln\\left[-\\ln\\left(1 - \\frac{1}{T}\\right)\\right]",
        description: 'Ajustement par la méthode des moments : 1/α = 0,78 s et u = x̄ − 0,45 s.',
        vars: [
          ['x_T', 'Valeur de période T', 'selon la grandeur', 'Pluie, débit, vitesse de vent…'],
          ['u', 'Paramètre de position', 'selon la grandeur', 'Mode de la loi.'],
          ['1/\\alpha', "Paramètre d'échelle", 'selon la grandeur', 'Proportionnel à l’écart-type.'],
          ['T', 'Période de retour', 'ans', '10, 50, 100 ans…'],
        ],
      },
      {
        name: 'Indice de fiabilité (Cornell)',
        latex: "\\beta = \\frac{\\mu_R - \\mu_S}{\\sqrt{\\sigma_R^2 + \\sigma_S^2}} \\qquad P_f = \\Phi(-\\beta)",
        description: 'Résistance R et sollicitation S normales et indépendantes.',
        vars: [
          ['\\beta', 'Indice de fiabilité', '-', '3,8 sur 50 ans (EC0, classe RC2).'],
          ['\\mu_R, \\mu_S', 'Moyennes de R et S', 'selon la grandeur', 'Résistance et sollicitation moyennes.'],
          ['\\sigma_R, \\sigma_S', 'Écarts-types', 'selon la grandeur', 'Dispersions.'],
          ['P_f', 'Probabilité de défaillance', '-', 'Φ = fonction de répartition de la loi normale.'],
        ],
      },
    ],
  },
  stepbystep: {
    title: 'Calcul complet — Conformité d’un béton C25/30',
    problem: "Sur une production, 15 éprouvettes cylindriques donnent une moyenne de 35,2 MPa et un écart-type de 3,1 MPa. Estimer la résistance caractéristique (loi normale, écart-type supposé connu) et conclure sur la classe C25/30.",
    steps_demo: [
      { n: 1, text: "Coefficient de variation : CV = 3,1 / 35,2 = 0,088 : production bien maîtrisée." },
      { n: 2, text: "Fractile à 5 % : f_k = 35,2 − 1,645 × 3,1 = 35,2 − 5,1 = 30,1 MPa." },
      { n: 3, text: "Comparaison : 30,1 MPa ≥ 25 MPa exigés pour C25/30." },
      { n: 4, text: "Contrôle par le critère de la norme (production continue) : f_cm ≥ f_ck + 1,48 σ = 25 + 4,6 = 29,6 MPa ≤ 35,2 MPa." },
      { n: 5, text: "Conclusion : conforme avec une marge ; le béton pourrait même viser C30/37 (f_k ≈ 30 MPa), à confirmer sur une série plus longue." },
    ],
    result_latex: "f_k = 35{,}2 - 1{,}645 \\times 3{,}1 = 30{,}1\\ \\text{MPa} \\ge f_{ck} = 25\\ \\text{MPa} \\quad \\checkmark",
  },
  units: {
    table: [
      ['Moyenne, écart-type', 'unité de la mesure', '-', 'MPa pour une résistance, mm pour une pluie'],
      ['Coefficient de variation', '-, %', '-', 'Sans dimension'],
      ['Probabilité', '-', '-', 'Entre 0 et 1 ; 10⁻⁴ = 1 sur 10 000'],
      ['Période de retour', 'ans', 'years', 'Probabilité annuelle = 1/T'],
      ['Indice de fiabilité β', '-', '-', 'β = 3,8 ↔ P_f ≈ 7 × 10⁻⁵'],
    ],
    note: 'Pour une probabilité très faible, raisonnez en ordre de grandeur (10⁻³, 10⁻⁴…) plutôt qu’en pourcentage.',
  },
  hypotheses: {
    items: [
      ['info', 'La loi normale convient bien aux résistances des matériaux homogènes ; les charges climatiques suivent plutôt des lois d’extrêmes.'],
      ['info', 'L’ajustement de Gumbel par les moments est simple mais sensible aux séries courtes.'],
      ['warning', 'Avec peu d’essais, l’incertitude sur l’écart-type impose un coefficient supérieur à 1,645 (loi de Student, EN 1990 annexe D).'],
      ['warning', 'Extrapoler une crue centennale à partir de 15 ans de mesures donne une grande incertitude.'],
      ['tip', 'Tracez toujours l’histogramme ou la droite de Henry avant de supposer une loi normale.'],
    ],
  },
  simple_examples: {
    examples: [
      {
        title: 'Exemple 1 : moyenne et écart-type',
        given: 'Résistances : 28, 31, 30, 33, 28 MPa',
        find: 'Moyenne, écart-type, CV',
        solution_latex: "\\bar{x} = 30{,}0 \\quad s = \\sqrt{\\frac{4 + 1 + 0 + 9 + 4}{4}} = 2{,}12\\ \\text{MPa} \\quad CV = 7\\,\\%",
        result: 'Moyenne 30,0 MPa, écart-type 2,1 MPa.',
      },
      {
        title: 'Exemple 2 : pluie centennale (Gumbel)',
        given: 'Pluies journalières maximales annuelles : moyenne 60 mm, écart-type 18 mm',
        find: 'La pluie de période 100 ans',
        solution_latex: "\\frac{1}{\\alpha} = 14{,}0 \\quad u = 60 - 0{,}45 \\times 18 = 51{,}9 \\quad x_{100} = 51{,}9 + 14{,}0 \\times 4{,}60 = 116\\ \\text{mm}",
        result: '≈ 116 mm en 24 heures.',
      },
      {
        title: 'Exemple 3 : indice de fiabilité',
        given: 'R : moyenne 300 kN, écart-type 30 kN ; S : moyenne 150 kN, écart-type 30 kN',
        find: 'β et P_f',
        solution_latex: "\\beta = \\frac{300 - 150}{\\sqrt{30^2 + 30^2}} = \\frac{150}{42{,}4} = 3{,}54 \\qquad P_f = \\Phi(-3{,}54) \\approx 2 \\times 10^{-4}",
        result: 'β = 3,54 : un peu inférieur à la cible de 3,8.',
      },
    ],
  },
  real_examples: {
    title: 'Exemple réel — Calibrage des coefficients partiels des Eurocodes',
    examples: [
      {
        context: 'Rédaction de l’EN 1990 (bases de calcul des structures)',
        scenario: "Les coefficients γ_G = 1,35, γ_Q = 1,5, γ_c = 1,5 ou γ_M0 = 1,0 ont été calibrés pour que les structures courantes atteignent un indice de fiabilité proche de 3,8 sur 50 ans, compte tenu de la variabilité des charges et des matériaux.",
        decomposition_latex: "\\frac{R_k}{\\gamma_M} \\ge \\gamma_G G_k + \\gamma_Q Q_k \\quad \\Longleftrightarrow \\quad \\beta \\approx 3{,}8 \\ (P_f \\approx 7 \\times 10^{-5} \\text{ sur 50 ans})",
        lesson: "Les coefficients de sécurité ne sont pas arbitraires : ils traduisent une probabilité de défaillance acceptée par la société, plus faible pour les ouvrages à fortes conséquences (classe RC3).",
      },
    ],
  },
  diagrams: {
    title: 'Schéma de principe — Du résultat d’essai à la valeur de calcul',
    diagram_description: [
      'Mesures : série d’essais (éprouvettes, carottes, pluies annuelles)',
      'Statistiques : moyenne, écart-type, coefficient de variation',
      'Modèle : loi normale (résistances) ou loi d’extrêmes (climat)',
      'Valeur caractéristique : fractile 5 % (résistance) ou période de retour (action)',
      'Valeur de calcul : division ou multiplication par un coefficient partiel',
      'Fiabilité : β ≈ 3,8 visé pour les ouvrages courants',
    ],
  },
  mistakes: {
    items: [
      ['Utiliser la moyenne comme résistance de calcul', 'Une structure sur deux serait sous-dimensionnée', 'Utiliser la valeur caractéristique puis le coefficient partiel.'],
      ['Diviser par n au lieu de n − 1 pour un échantillon', 'Écart-type sous-estimé sur les petites séries', 'Utiliser l’écart-type d’échantillon (n − 1).'],
      ['Croire qu’une crue centennale ne se produit qu’une fois par siècle', 'Sous-estimation du risque', 'La probabilité annuelle est de 1 % chaque année, indépendamment du passé.'],
    ],
  },
  tips: {
    tips: [
      'Un tableur suffit pour la moyenne, l’écart-type, la régression et la loi normale (LOI.NORMALE.N).',
      'Repère : 1,645 (5 %), 1,96 (2,5 %), 3,09 (0,1 %) pour la loi normale centrée réduite.',
      'Pour les contrôles de chantier, suivez la moyenne glissante et l’écart-type sur les 15 derniers résultats.',
      'Utilisez les séries officielles (Météo-France, banque HYDRO) plutôt que des valeurs isolées.',
    ],
  },
  norms: {
    norms: [
      ['NF EN 1990 annexe C et D', 'Bases de la fiabilité ; dimensionnement assisté par l’expérimentation.'],
      ['NF EN 206 §8', 'Critères de conformité de la résistance du béton.'],
      ['NF EN 13791', 'Évaluation de la résistance du béton en place.'],
      ['NF EN 1997-1 §7.6.2', 'Facteurs de corrélation ξ pour les essais de pieux.'],
    ],
  },
  exercises: {
    exercises: [
      {
        level: 1,
        text: 'Un acier B500 a une limite d’élasticité moyenne de 560 MPa et un écart-type de 25 MPa. Calculer la valeur caractéristique à 5 %.',
        hint: 'x_k = x̄ − 1,645 s.',
        answer_latex: "f_{yk} = 560 - 1{,}645 \\times 25 = 518{,}9\\ \\text{MPa} \\ge 500\\ \\text{MPa}",
        answer_text: 'f_yk ≈ 519 MPa : conforme à la nuance B500.',
      },
      {
        level: 2,
        text: 'Calculer la pluie décennale avec la loi de Gumbel (moyenne 60 mm, écart-type 18 mm).',
        hint: '−ln(−ln(0,9)) = 2,25.',
        answer_latex: "x_{10} = 51{,}9 + 14{,}0 \\times 2{,}25 = 83{,}4\\ \\text{mm}",
        answer_text: '≈ 83 mm.',
      },
      {
        level: 3,
        text: 'R : moyenne 400 kN, CV = 10 % ; S : moyenne 200 kN, CV = 20 %. Calculer β.',
        hint: 'σ_R = 40 kN ; σ_S = 40 kN.',
        answer_latex: "\\beta = \\frac{400 - 200}{\\sqrt{40^2 + 40^2}} = \\frac{200}{56{,}6} = 3{,}54",
        answer_text: 'β ≈ 3,54 (P_f ≈ 2 × 10⁻⁴).',
      },
    ],
  },
  quiz: {
    title: 'Quiz — Statistiques et probabilités',
    questions: [
      { q: 'Que représente la valeur caractéristique d’une résistance ?', options: ['La moyenne', 'Le fractile à 5 %', 'La valeur maximale'], correct: 1, explain: '5 % seulement des valeurs sont inférieures.' },
      { q: 'Quelle est la probabilité annuelle d’une crue de période de retour 50 ans ?', options: ['0,5 %', '2 %', '50 %'], correct: 1, explain: '1/T = 1/50 = 2 %.' },
      { q: 'Quel indice de fiabilité vise l’Eurocode 0 sur 50 ans pour les bâtiments courants ?', options: ['β = 1,6', 'β = 3,8', 'β = 10'], correct: 1, explain: 'β = 3,8 pour la classe de fiabilité RC2.' },
    ],
  },
  exam_questions: {
    questions: [
      'Définissez moyenne, écart-type, coefficient de variation et valeur caractéristique ; appliquez-les à des résultats d’essais.',
      'Présentez la loi de Gumbel et calculez une crue de projet à partir d’une série de maxima annuels.',
      'Expliquez la notion d’indice de fiabilité et son lien avec les coefficients partiels des Eurocodes.',
    ],
  },
  interview_questions: {
    questions: [
      ['Pourquoi f_cm = f_ck + 8 MPa dans l’EC2 ?', "Parce que la résistance caractéristique est un fractile à 5 % : avec un écart-type d'environ 5 MPa, la moyenne se situe environ 1,645 × 5 ≈ 8 MPa au-dessus."],
      ['Comment exploiteriez-vous des mesures sclérométriques ?', "En établissant une corrélation (régression) avec des résistances mesurées sur quelques carottes du même ouvrage, puis en calculant une résistance caractéristique en place selon l'EN 13791, en tenant compte de la dispersion."],
    ],
  },
  practical_case: {
    title: 'Cas pratique — Résistance en place d’un ouvrage existant',
    scenario: 'Huit carottes prélevées sur un pont donnent une moyenne de 32 MPa et un écart-type de 4,5 MPa. Le bureau d’études veut une résistance caractéristique en place.',
    description: 'Estimer f_ck,is avec un coefficient de Student adapté à 8 essais (k ≈ 1,9 pour un fractile à 5 %).',
    resolutions: [
      "CV = \\frac{4{,}5}{32} = 14\\,\\%",
      "f_{ck,is} = 32 - 1{,}9 \\times 4{,}5 = 23{,}5\\ \\text{MPa}",
      "\\text{Avec 1,645 (écart-type connu) : } 32 - 7{,}4 = 24{,}6\\ \\text{MPa} \\Rightarrow \\text{l'incertitude coûte environ 1 MPa}",
    ],
    conclusion: "On retient une résistance caractéristique en place de l'ordre de 23 à 24 MPa ; davantage de carottes réduiraient l'incertitude et augmenteraient la valeur exploitable.",
  },
  summary: {
    content: `### Les statistiques de l'ingénieur en 5 points
1. $\\bar{x}$, $s$ et $CV$ décrivent un échantillon.
2. Valeur caractéristique : $x_k = \\bar{x} - 1{,}645 s$ (fractile 5 %).
3. Extrêmes : loi de Gumbel et période de retour $T$.
4. Fiabilité : $\\beta = (\\mu_R - \\mu_S)/\\sqrt{\\sigma_R^2 + \\sigma_S^2}$, cible 3,8.
5. Peu d'essais = plus d'incertitude = valeur caractéristique plus faible.`,
  },
  key_points: {
    points: [
      'x_k = x̄ − 1,645 s',
      's avec n − 1 au dénominateur',
      'Probabilité annuelle = 1/T',
      'β = 3,8 ↔ P_f ≈ 7 × 10⁻⁵ sur 50 ans',
      'f_cm ≈ f_ck + 8 MPa',
    ],
  },
  self_assessment: {
    objectives: [
      'Je sais calculer moyenne, écart-type et coefficient de variation',
      'Je sais calculer une valeur caractéristique à 5 %',
      'Je sais utiliser la loi de Gumbel pour un événement extrême',
      'Je comprends l’indice de fiabilité β',
      "J'ai réussi le quiz avec au moins 2 bonnes réponses sur 3",
    ],
  },
});
