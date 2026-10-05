// ── Lesson: Boues et réutilisation des eaux — Module 38 ──────────────────────
import { buildLesson } from './build_lesson.js';

export const lesson_eau_boues = buildLesson({
  moduleId: 38,
  slug: 'eau_boues',
  lessonIndex: 4,
  title: "Boues d'Épuration et Réutilisation : Épaississement, Déshydratation, Méthanisation, Épandage et REUT",
  subtitle: 'Module 38 — Traitement des Eaux',
  level: 'Avancé',
  duration: '5h',
  tags: ['Boues', 'Siccité', 'Déshydratation', 'Méthanisation', 'Biogaz', 'Épandage', 'REUT'],
}, {
  definition: {
    title: 'Définition — Valoriser les sous-produits du traitement de l’eau',
    fr: 'Traitement et valorisation des boues, réutilisation des eaux usées traitées',
    en: 'Sludge treatment and water reuse',
    metier: "Concerne les ingénieurs procédés, les exploitants de stations, les agronomes et les collectivités.",
    content: `Toute station d'épuration produit des **boues** : la biomasse en excès et les matières retenues. Elles sont très liquides à la sortie (environ 1 % de matière sèche) et doivent être **réduites en volume**, **stabilisées** et **valorisées**.

### La filière boues
1. **Épaississement** (gravitaire, flottation) : 1 % → 4 à 6 % de matière sèche.
2. **Stabilisation** : digestion anaérobie (méthanisation, production de biogaz) ou aérobie, chaulage.
3. **Déshydratation** (centrifugeuse, filtre-presse, filtre à bandes) : 18 à 35 % de matière sèche.
4. **Séchage** éventuel : jusqu'à 90 %.
5. **Destination** : épandage agricole, compostage, incinération.

### La réutilisation des eaux usées traitées (REUT)
Après un traitement complémentaire (filtration, désinfection), l'eau peut servir à l'**irrigation**, l'arrosage d'espaces verts, le nettoyage des voiries ou des usages industriels.

> 💡 La **siccité** est le pourcentage de matière sèche : passer de 1 % à 20 % divise le volume par environ 20.`,
  },
  importance: {
    content: `- **Coût** : le traitement des boues représente souvent 30 à 50 % du coût d'exploitation d'une station.
- **Énergie** : la méthanisation peut couvrir une grande part des besoins électriques d'une grande station.
- **Économie circulaire** : les boues apportent azote, phosphore et matière organique aux sols.
- **Sécheresse** : la REUT économise la ressource en eau potable.

> ⚠️ **À retenir** : la valorisation agricole est encadrée (qualité des boues, doses, suivi des sols) pour protéger la santé et l'environnement.`,
  },
  applications: {
    examples: [
      ['Grande station urbaine', 'Digestion anaérobie et cogénération du biogaz.'],
      ['Station rurale', 'Lits de séchage plantés de roseaux.'],
      ['Épandage agricole', 'Plan d’épandage avec analyses des sols.'],
      ['Golf ou espaces verts', 'Arrosage par eaux usées traitées.'],
      ['Injection de biométhane', 'Épuration du biogaz et injection dans le réseau de gaz.'],
    ],
  },
  theory: {
    title: 'Théorie — Bilans de matière et d’énergie',
    content: `### 1. Volume et siccité
$$V = \\frac{M_{MS}}{s \\, \\rho}$$
$M_{MS}$ : masse de matière sèche ; $s$ : siccité ; $\\rho$ ≈ 1 000 kg/m³ pour des boues liquides.

### 2. Production de boues
Ordre de grandeur pour des boues activées : 0,8 à 1 kg de MS par kg de DBO5 éliminée (sans digestion).

### 3. Méthanisation
- Destruction d'environ 40 à 50 % des matières volatiles (MV).
- Production de biogaz : environ 0,8 à 1 Nm³ par kg de MV détruite, à 60–65 % de méthane.
- Énergie : 1 Nm³ de CH₄ ≈ 10 kWh.
$$E = V_{CH_4} \\times 10\\ \\text{kWh}$$

### 4. Épandage
La dose est limitée par l'élément le plus contraignant, souvent l'azote :
$$D = \\frac{N_{max}}{t_N}$$
($N_{max}$ : apport d'azote organique admissible, par exemple 170 kg N/ha/an en zone vulnérable ; $t_N$ : teneur en azote de la boue en kg N/t MS).

### 5. REUT
Qualité définie par des classes (A à D) selon l'usage : paramètres MES, DBO5/DCO et indicateurs microbiologiques (E. coli).`,
  },
  formulas: {
    title: 'Formules essentielles — Boues et REUT',
    formulas: [
      {
        name: 'Volume de boues',
        latex: "V = \\frac{M_{MS}}{s \\, \\rho}",
        description: 'Volume en fonction de la siccité.',
        vars: [
          ['V', 'Volume', 'm³/j', ''],
          ['M_{MS}', 'Matière sèche', 'kg/j', ''],
          ['s', 'Siccité', '-', '0,01 à 0,90.'],
          ['\\rho', 'Masse volumique', 'kg/m³', '≈ 1 000 à 1 100.'],
        ],
      },
      {
        name: 'Biogaz et énergie',
        latex: "V_{biogaz} = k \\, MV_{détruite} \\qquad E = 10 \\, V_{CH_4}",
        description: 'Production de biogaz et énergie primaire.',
        vars: [
          ['k', 'Production spécifique', 'Nm³/kg MV', '0,8 à 1.'],
          ['V_{CH_4}', 'Volume de méthane', 'Nm³', '60–65 % du biogaz.'],
          ['E', 'Énergie primaire', 'kWh', ''],
        ],
      },
      {
        name: 'Dose d’épandage',
        latex: "D = \\frac{N_{max}}{t_N}",
        description: 'Tonnes de MS par hectare et par an.',
        vars: [
          ['N_{max}', 'Apport d’azote admissible', 'kg N/ha/an', 'Selon la réglementation et le plan d’épandage.'],
          ['t_N', 'Teneur en azote', 'kg N/t MS', '≈ 30 à 60.'],
        ],
      },
      {
        name: 'Abattement microbiologique',
        latex: "\\text{Abattement} = \\log_{10}\\left( \\frac{C_0}{C} \\right)",
        description: 'Exprimé en unités logarithmiques (log).',
        vars: [
          ['C_0, C', 'Concentrations en entrée et sortie', 'UFC/100 mL', 'Par exemple E. coli.'],
        ],
      },
    ],
  },
  stepbystep: {
    title: 'Calcul complet — Filière boues d’une station de 50 000 EH',
    problem: "Une station produit 2 500 kg de MS par jour (70 % de MV) à 1 % de siccité. Calculer les volumes après épaississement (5 %), après déshydratation (22 %), puis l'énergie produite par digestion (destruction de 45 % des MV, 0,9 Nm³ biogaz/kg MV détruite, 65 % de CH₄, rendement électrique 35 %).",
    steps_demo: [
      { n: 1, text: "Boues extraites : V = 2 500 / (0,01 × 1 000) = 250 m³/j." },
      { n: 2, text: "Après épaississement : 2 500 / 50 = 50 m³/j." },
      { n: 3, text: "Digestion : MV = 1 750 kg/j ; MV détruite = 0,45 × 1 750 = 788 kg/j ; MS restante = 2 500 − 788 = 1 712 kg/j." },
      { n: 4, text: "Biogaz : 0,9 × 788 = 709 Nm³/j ; CH₄ = 0,65 × 709 = 461 Nm³/j ; énergie primaire 4 610 kWh/j ; électricité ≈ 0,35 × 4 610 = 1 614 kWh/j." },
      { n: 5, text: "Après déshydratation à 22 % : 1 712 / 220 = 7,8 t/j de boues pâteuses (contre 250 m³/j à l'origine)." },
    ],
    result_latex: "V_{1\\%} = 250\\ \\text{m}^3/\\text{j} \\rightarrow V_{22\\%} = 7{,}8\\ \\text{t/j} \\qquad E_{élec} = 0{,}35 \\times 10 \\times 461 = 1\\,614\\ \\text{kWh/j}",
  },
  units: {
    table: [
      ['Matière sèche', 'kg MS/j', 'lb DS/day', '1 kg = 2,205 lb'],
      ['Siccité', '%', '% solids', 'Matière sèche / masse totale'],
      ['Biogaz', 'Nm³', 'scf', '1 Nm³ ≈ 37,3 scf'],
      ['Énergie', 'kWh', 'BTU', '1 kWh = 3 412 BTU'],
      ['Abattement', 'log', 'log removal', '1 log = 90 % ; 3 log = 99,9 %'],
    ],
    note: 'Nm³ : mètre cube normal, à 0 °C et 1 atm.',
  },
  hypotheses: {
    items: [
      ['info', 'Les ratios de production de boues et de biogaz sont des ordres de grandeur ; ils varient selon la filière et l’effluent.'],
      ['info', 'La digestion réduit la masse de MS et stabilise les boues (moins d’odeurs).'],
      ['warning', 'Le biogaz est inflammable et contient de l’H₂S toxique : zones ATEX et détection obligatoires.'],
      ['warning', 'L’épandage nécessite des analyses régulières (métaux, composés organiques) et le respect des périodes d’interdiction.'],
      ['tip', 'Comparez les filières en coût global : énergie, réactifs (polymères), transport et destination finale.'],
    ],
  },
  simple_examples: {
    examples: [
      {
        title: 'Exemple 1 : réduction de volume',
        given: '1 000 kg MS/j à 1 %, puis 20 %',
        find: 'Volumes',
        solution_latex: "V_{1\\%} = \\frac{1\\,000}{10} = 100\\ \\text{m}^3 \\qquad V_{20\\%} = \\frac{1\\,000}{200} = 5\\ \\text{m}^3",
        result: 'Volume divisé par 20.',
      },
      {
        title: 'Exemple 2 : dose d’épandage',
        given: 'N_max = 170 kg/ha/an ; t_N = 40 kg N/t MS',
        find: 'D',
        solution_latex: "D = \\frac{170}{40} = 4{,}25\\ \\text{t MS/ha/an}",
        result: '4,25 t de MS par hectare et par an.',
      },
      {
        title: 'Exemple 3 : abattement',
        given: 'E. coli : 10⁶ en entrée, 10² en sortie (UFC/100 mL)',
        find: 'Abattement',
        solution_latex: "\\log_{10}\\left(\\frac{10^6}{10^2}\\right) = 4\\ \\log",
        result: '4 log, soit 99,99 % d’élimination.',
      },
    ],
  },
  real_examples: {
    title: 'Exemple réel — Stations autonomes en énergie',
    examples: [
      {
        context: 'Grandes stations d’épuration européennes modernisées',
        scenario: "Plusieurs stations ont atteint ou dépassé l'autonomie énergétique en combinant digestion des boues, codigestion de déchets graisseux, cogénération et forte optimisation de l'aération. D'autres injectent le biométhane dans le réseau de gaz naturel.",
        decomposition_latex: "\\text{Aération optimisée} \\downarrow + \\text{biogaz valorisé} \\uparrow \\Rightarrow \\text{bilan énergétique} \\geq 0",
        lesson: "La station d'épuration devient une usine de ressources : eau, énergie et nutriments.",
      },
    ],
  },
  diagrams: {
    title: 'Schéma de principe — Filière boues et valorisations',
    diagram_description: [
      'Boues en excès à 1 % de MS',
      'Épaississement : 4 à 6 %',
      'Digestion anaérobie : biogaz → cogénération ou biométhane',
      'Déshydratation : 18 à 35 % (polymère)',
      'Séchage, compostage ou chaulage',
      'Épandage agricole, incinération ou valorisation énergétique',
    ],
  },
  mistakes: {
    items: [
      ['Sous-estimer la production de boues', 'Saturation des stockages', 'Bilan matière avec marge et suivi mensuel.'],
      ['Ignorer les retours en tête', 'Surcharge azotée de la station', 'Intégrer les centrats et filtrats au dimensionnement.'],
      ['Épandre sans plan d’épandage', 'Infraction et pollution', 'Plan validé, analyses et registre.'],
    ],
  },
  tips: {
    tips: [
      'Optimisez la dose de polymère par essais en laboratoire (jar-tests).',
      'Prévoyez des stockages couvrant les périodes d’interdiction d’épandage.',
      'Étudiez la codigestion de déchets pour augmenter la production de biogaz.',
      'Pour la REUT, impliquez tôt l’autorité sanitaire et les usagers.',
    ],
  },
  norms: {
    norms: [
      ['Arrêté du 8 janvier 1998 (France)', 'Prescriptions techniques de l’épandage des boues sur les sols agricoles.'],
      ['Règlement (UE) 2020/741', 'Exigences minimales pour la réutilisation de l’eau à des fins d’irrigation agricole.'],
      ['Arrêté du 2 août 2010 modifié (France)', 'Utilisation des eaux usées traitées pour l’irrigation.'],
      ['Directive 86/278/CEE', 'Utilisation des boues d’épuration en agriculture.'],
      ['NF EN 12255-8', 'Traitement et stockage des boues.'],
    ],
  },
  exercises: {
    exercises: [
      {
        level: 1,
        text: 'Quel volume occupent 600 kg de MS à 4 % de siccité ?',
        hint: 'V = M / (s ρ).',
        answer_latex: "V = \\frac{600}{0{,}04 \\times 1\\,000} = 15\\ \\text{m}^3",
        answer_text: '15 m³.',
      },
      {
        level: 2,
        text: 'Combien d’énergie primaire produisent 300 Nm³ de biogaz à 62 % de méthane ?',
        hint: '1 Nm³ CH₄ ≈ 10 kWh.',
        answer_latex: "E = 300 \\times 0{,}62 \\times 10 = 1\\,860\\ \\text{kWh}",
        answer_text: '1 860 kWh.',
      },
      {
        level: 3,
        text: 'Une station produit 1 200 t de MS par an (t_N = 45 kg N/t MS). Quelle surface d’épandage faut-il pour N_max = 170 kg N/ha/an ?',
        hint: 'Azote total / apport admissible.',
        answer_latex: "N = 1\\,200 \\times 45 = 54\\,000\\ \\text{kg} \\Rightarrow S = \\frac{54\\,000}{170} = 318\\ \\text{ha}",
        answer_text: 'Environ 320 ha par an (davantage en pratique, avec rotation des parcelles).',
      },
    ],
  },
  quiz: {
    title: 'Quiz — Boues et REUT',
    questions: [
      { q: 'Que mesure la siccité ?', options: ['La teneur en eau', 'Le pourcentage de matière sèche', 'La teneur en azote'], correct: 1, explain: 'MS / masse totale.' },
      { q: 'Quel gaz principal produit la digestion anaérobie ?', options: ['Le méthane', 'L’azote', 'L’oxygène'], correct: 0, explain: 'Le biogaz contient 60 à 65 % de CH₄.' },
      { q: 'Un abattement de 3 log correspond à…', options: ['90 %', '99 %', '99,9 %'], correct: 2, explain: '10³ fois moins.' },
    ],
  },
  exam_questions: {
    questions: [
      'Décrivez la filière de traitement des boues et ses objectifs.',
      'Calculez le bilan énergétique d’une digestion anaérobie.',
      'Quels sont les usages et les exigences de la réutilisation des eaux usées traitées ?',
    ],
  },
  interview_questions: {
    questions: [
      ['Quelle destination recommandez-vous pour les boues ?', 'Celle qui combine sécurité sanitaire, coût et valorisation : épandage ou compostage si la qualité et les surfaces le permettent, sinon valorisation énergétique ; la méthanisation est intéressante pour les grandes stations.'],
      ['Quels risques présente la REUT ?', 'Risques sanitaires (pathogènes), accumulation de sels et micropolluants ; ils se maîtrisent par un traitement adapté à l’usage, des barrières multiples et une surveillance.'],
    ],
  },
  practical_case: {
    title: 'Cas pratique — Projet de REUT pour l’arrosage d’un golf',
    scenario: 'Un golf consomme 120 000 m³ d’eau par an pour l’arrosage. Une station voisine rejette 4 000 m³/j d’eau traitée (E. coli ≈ 10⁵ UFC/100 mL). L’usage exige une qualité de classe imposant environ 10² UFC/100 mL.',
    description: 'Vérifier la ressource et le traitement complémentaire.',
    resolutions: [
      "\\text{Ressource annuelle} : 4\\,000 \\times 365 = 1\\,460\\,000\\ \\text{m}^3 \\gg 120\\,000\\ \\text{m}^3",
      "\\text{Pointe estivale} : \\frac{120\\,000 \\times 0{,}4}{60\\ \\text{j}} = 800\\ \\text{m}^3/\\text{j} < 4\\,000",
      "\\text{Abattement requis} : \\log_{10}(10^5 / 10^2) = 3\\ \\log \\Rightarrow \\text{filtration + UV}",
    ],
    conclusion: 'La ressource est largement suffisante ; un traitement par filtration et désinfection UV, avec stockage tampon, permet l’usage.',
  },
  summary: {
    content: `### Les boues et la REUT en 5 points
1. Boues : 1 % de MS à l'origine, réduction de volume par épaississement et déshydratation.
2. $V = M_{MS} / (s \\rho)$.
3. Méthanisation : biogaz, ≈ 10 kWh par Nm³ de CH₄.
4. Épandage encadré : dose $D = N_{max} / t_N$.
5. REUT : traitement complémentaire et abattement en log selon l'usage.`,
  },
  key_points: {
    points: [
      'V = M / (s ρ)',
      '1 % → 20 % : volume ÷ 20',
      '1 Nm³ CH₄ ≈ 10 kWh',
      'D = N_max / t_N',
      '3 log = 99,9 %',
    ],
  },
  self_assessment: {
    objectives: [
      'Je connais les étapes de la filière boues',
      'Je sais calculer un volume selon la siccité',
      'Je sais estimer la production de biogaz',
      'Je connais les conditions de la REUT',
      "J'ai réussi le quiz avec au moins 2 bonnes réponses sur 3",
    ],
  },
});
