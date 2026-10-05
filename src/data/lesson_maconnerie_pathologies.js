// ── Lesson: Pathologies de la maçonnerie — Module 39 ─────────────────────────
import { buildLesson } from './build_lesson.js';

export const lesson_maconnerie_pathologies = buildLesson({
  moduleId: 39,
  slug: 'maconnerie_pathologies',
  lessonIndex: 4,
  title: "Pathologies de la Maçonnerie : Fissures, Remontées Capillaires, Dilatation, Gel et Techniques de Réparation",
  subtitle: 'Module 39 — Maçonnerie & Structures en maçonnerie',
  level: 'Intermédiaire',
  duration: '5h',
  tags: ['Pathologie', 'Fissures', 'Remontées capillaires', 'Dilatation', 'Joint de fractionnement', 'Agrafage', 'Efflorescences'],
}, {
  definition: {
    title: 'Définition — Lire les désordres d’un mur',
    fr: 'Pathologies de la maçonnerie',
    en: 'Masonry defects and pathologies',
    metier: "Concerne les experts en bâtiment, les ingénieurs en réhabilitation, les maçons et les assureurs.",
    content: `Les désordres des maçonneries sont fréquents et souvent révélateurs d'une cause précise. Les principaux :

- **Fissures** : tassements différentiels, retrait, dilatation thermique, surcharge, flèche des planchers ou linteaux.
- **Humidité** : remontées capillaires, infiltrations, condensation.
- **Dégradations des matériaux** : gel des briques et pierres poreuses, efflorescences (sels), décollement des enduits.
- **Corrosion** des armatures de chaînages et des linteaux.

### La démarche
1. **Observer** : forme, orientation, ouverture, localisation et évolution des fissures.
2. **Mesurer** : fissuromètres, jauges, hygrométrie.
3. **Comprendre** la cause.
4. **Traiter la cause**, puis réparer.

> 💡 La forme d'une fissure « raconte » son origine : une fissure en escalier à 45° près d'un angle évoque un tassement ; une fissure verticale régulière sur un long mur évoque le retrait ou la dilatation.`,
  },
  importance: {
    content: `- **Sinistralité** : les fissures sont l'un des premiers motifs de réclamation en garantie décennale.
- **Sécurité** : une fissure évolutive peut révéler un problème de fondation grave.
- **Confort** : l'humidité dégrade l'isolation, les finitions et la qualité de l'air.
- **Patrimoine** : les bâtiments anciens demandent des réparations compatibles (chaux, matériaux respirants).

> ⚠️ **À retenir** : réparer une fissure sans connaître sa cause ni savoir si elle est stabilisée conduit presque toujours à sa réapparition.`,
  },
  applications: {
    examples: [
      ['Maison sur argile', 'Fissures en escalier après une sécheresse : tassement différentiel.'],
      ['Long mur de clôture', 'Fissures verticales régulières : absence de joints de dilatation.'],
      ['Bâtiment ancien', 'Remontées capillaires : injection d’une barrière hydrophobe.'],
      ['Façade en briques', 'Efflorescences blanches : sels transportés par l’humidité.'],
      ['Mur fissuré stabilisé', 'Agrafage et rejointoiement.'],
    ],
  },
  theory: {
    title: 'Théorie — Causes et ordres de grandeur',
    content: `### 1. Dilatation thermique
$$\\Delta L = \\alpha \\, \\Delta T \\, L$$
$\\alpha$ ≈ 5 à 7 × 10⁻⁶ /°C (terre cuite) ; 8 à 12 × 10⁻⁶ /°C (béton, blocs béton). Les blocs béton subissent aussi un **retrait** de séchage. D'où des **joints de fractionnement** sur les longs murs.

### 2. Tassement différentiel et distorsion angulaire
$$\\beta = \\frac{\\delta}{L}$$
$\\delta$ : tassement différentiel entre deux points distants de $L$. Ordres de grandeur (Bjerrum) : premières fissures dans les murs vers $\\beta$ ≈ 1/300 ; dommages structurels vers 1/150.

### 3. Remontées capillaires (loi de Jurin)
$$h = \\frac{2 \\, \\gamma_s \\cos\\theta}{\\rho \\, g \\, r}$$
Plus les pores sont fins, plus l'eau monte. En pratique, l'évaporation limite la hauteur à 1 à 1,5 m environ.

### 4. Gel
L'eau qui gèle augmente de volume d'environ 9 % : les matériaux poreux saturés éclatent (épaufrures, délitage).

### 5. Suivi des fissures
Mesurer l'ouverture $w$ à intervalles réguliers. Une fissure qui évolue (vitesse $v = \\Delta w / \\Delta t$ non nulle) est **active** ; une fissure stabilisée après plusieurs cycles saisonniers peut être réparée.`,
  },
  formulas: {
    title: 'Formules essentielles — Pathologie des maçonneries',
    formulas: [
      {
        name: 'Dilatation thermique',
        latex: "\\Delta L = \\alpha \\, \\Delta T \\, L",
        description: 'Mouvement d’un mur libre de se dilater.',
        vars: [
          ['\\alpha', 'Coefficient de dilatation', '1/°C', '6 × 10⁻⁶ terre cuite ; 10 × 10⁻⁶ béton.'],
          ['\\Delta T', 'Variation de température', '°C', '40 à 60 °C en façade exposée.'],
          ['L', 'Longueur', 'm', ''],
        ],
      },
      {
        name: 'Distorsion angulaire',
        latex: "\\beta = \\frac{\\delta}{L}",
        description: 'Indicateur de risque de fissuration par tassement.',
        vars: [
          ['\\delta', 'Tassement différentiel', 'mm', ''],
          ['L', 'Distance entre les points', 'mm', ''],
        ],
        rule: 'Fissuration probable des murs au-delà d’environ 1/300.',
      },
      {
        name: 'Ascension capillaire (Jurin)',
        latex: "h = \\frac{2 \\gamma_s \\cos\\theta}{\\rho g r}",
        description: 'Hauteur théorique de remontée dans un pore de rayon r.',
        vars: [
          ['\\gamma_s', "Tension superficielle de l'eau", 'N/m', '0,073.'],
          ['\\theta', 'Angle de contact', '°', '≈ 0° pour les matériaux minéraux.'],
          ['r', 'Rayon du pore', 'm', ''],
        ],
      },
      {
        name: 'Vitesse d’évolution d’une fissure',
        latex: "v = \\frac{w_2 - w_1}{t_2 - t_1}",
        description: 'Distinction fissure active / stabilisée.',
        vars: [
          ['w', 'Ouverture de la fissure', 'mm', 'Mesurée au fissuromètre.'],
          ['t', 'Date de mesure', 'mois', ''],
        ],
      },
    ],
  },
  stepbystep: {
    title: 'Calcul complet — Diagnostic d’une maison fissurée',
    problem: "Une maison de 12 m de long sur sol argileux présente des fissures en escalier à 45° près de l'angle nord-est. Un nivellement montre que cet angle est 18 mm plus bas qu'un point situé 6 m plus loin. Un suivi sur 6 mois indique une ouverture passée de 1,2 à 1,9 mm. Analyser.",
    steps_demo: [
      { n: 1, text: "Forme : fissures en escalier vers l'angle qui descend : signature d'un tassement différentiel." },
      { n: 2, text: "Distorsion : β = 18 / 6 000 = 1/333, proche du seuil de fissuration (1/300)." },
      { n: 3, text: "Évolution : v = (1,9 − 1,2) / 6 = 0,12 mm/mois : fissure active." },
      { n: 4, text: "Cause probable : retrait des argiles (sécheresse), aggravé par un arbre proche ou une fuite d'eau ; étude géotechnique G5 recommandée." },
      { n: 5, text: "Traitement : stabiliser d'abord (reprise en sous-œuvre par micropieux ou injection, gestion des eaux et de la végétation), puis réparer les fissures après stabilisation." },
    ],
    result_latex: "\\beta = \\frac{18}{6\\,000} = \\frac{1}{333} \\qquad v = \\frac{1{,}9 - 1{,}2}{6} = 0{,}12\\ \\text{mm/mois} \\Rightarrow \\text{fissure active}",
  },
  units: {
    table: [
      ['Ouverture de fissure', 'mm', 'in', '0,2 mm = microfissure ; > 2 mm = fissure importante'],
      ['Dilatation', 'mm', 'in', '1 mm ≈ 0,04 in'],
      ['Distorsion angulaire', '-', '-', 'Souvent exprimée en 1/n'],
      ['Teneur en eau', '% massique', '%', 'Mesure par carbure ou étuvage'],
      ['Hauteur capillaire', 'm', 'ft', '1 m ≈ 3,3 ft'],
    ],
    note: 'Classification usuelle : microfissure < 0,2 mm ; fissure 0,2 à 2 mm ; lézarde > 2 mm.',
  },
  hypotheses: {
    items: [
      ['info', 'Les seuils de distorsion sont des ordres de grandeur issus de retours d’expérience ; ils dépendent du type de maçonnerie.'],
      ['info', 'La loi de Jurin donne une hauteur théorique ; l’évaporation et les sels modifient fortement la hauteur réelle.'],
      ['warning', 'Une fissure traversante qui s’élargit vers le haut ou le bas indique un mouvement de fondation : alerter un expert.'],
      ['warning', 'Un enduit ciment sur une maçonnerie ancienne bloque l’évaporation et aggrave l’humidité.'],
      ['tip', 'Posez des témoins datés (jauges) et suivez-les au moins sur un cycle saisonnier complet.'],
    ],
  },
  simple_examples: {
    examples: [
      {
        title: 'Exemple 1 : dilatation d’un mur de clôture',
        given: 'Mur en blocs béton de 30 m ; α = 10 × 10⁻⁶ ; ΔT = 40 °C',
        find: 'ΔL',
        solution_latex: "\\Delta L = 10 \\times 10^{-6} \\times 40 \\times 30\\,000 = 12\\ \\text{mm}",
        result: '12 mm de mouvement, plus le retrait : des joints de fractionnement sont nécessaires.',
      },
      {
        title: 'Exemple 2 : remontée capillaire théorique',
        given: 'r = 10 µm ; γ_s = 0,073 N/m ; θ = 0°',
        find: 'h',
        solution_latex: "h = \\frac{2 \\times 0{,}073}{1\\,000 \\times 9{,}81 \\times 10^{-5}} = 1{,}49\\ \\text{m}",
        result: 'Environ 1,5 m.',
      },
      {
        title: 'Exemple 3 : seuil de distorsion',
        given: 'Mur de 8 m',
        find: 'Tassement différentiel admissible à 1/300',
        solution_latex: "\\delta = \\frac{8\\,000}{300} = 27\\ \\text{mm}",
        result: 'Au-delà d’environ 27 mm, des fissures sont probables.',
      },
    ],
  },
  real_examples: {
    title: 'Exemple réel — Mur ancien dégradé par un enduit ciment',
    examples: [
      {
        context: 'Maison rurale du XIXᵉ siècle en moellons hourdés à la chaux',
        scenario: "Lors d'une rénovation, les murs ont été recouverts d'un enduit ciment étanche. En quelques années, l'humidité est montée plus haut à l'intérieur, les plâtres se sont décollés et des sels ont fait éclater les pierres au pied des murs. Le remède a consisté à piquer l'enduit ciment, drainer le pied de mur et appliquer un enduit à la chaux perméable à la vapeur.",
        decomposition_latex: "\\text{Enduit étanche} \\Rightarrow \\text{évaporation bloquée} \\Rightarrow \\text{remontée plus haute} + \\text{cristallisation des sels}",
        lesson: "Les maçonneries anciennes doivent pouvoir « respirer » : les réparations doivent utiliser des matériaux compatibles.",
      },
    ],
  },
  diagrams: {
    title: 'Schéma de principe — Démarche de diagnostic',
    diagram_description: [
      'Relevé des désordres : plans, photos, cartographie des fissures',
      'Interprétation des formes : escalier, verticale, horizontale, en X',
      'Mesures : nivellement, fissuromètres, humidité',
      'Recherche de la cause : sol, eau, thermique, surcharge',
      'Traitement de la cause (fondations, drainage, joints)',
      'Réparation : agrafage, injection, rejointoiement, enduits compatibles',
    ],
  },
  mistakes: {
    items: [
      ['Reboucher une fissure active', 'Réapparition rapide', 'Suivre l’évolution et traiter la cause d’abord.'],
      ['Long mur sans joint', 'Fissures verticales régulières', 'Joints de fractionnement selon le DTU.'],
      ['Enduit ciment sur mur ancien', 'Humidité aggravée', 'Enduit chaux ou système perméable à la vapeur.'],
    ],
  },
  tips: {
    tips: [
      'Photographiez les fissures avec une règle graduée et la date.',
      'Notez la météo et la saison : beaucoup de fissures « respirent ».',
      'Recherchez les fuites de réseaux enterrés près des fondations.',
      'Utilisez des agrafes inox scellées pour recoudre les fissures stabilisées.',
    ],
  },
  norms: {
    norms: [
      ['NF DTU 20.1', 'Joints de fractionnement et dispositions constructives.'],
      ['NF DTU 26.1', 'Enduits de mortier.'],
      ['NF P 94-500 (mission G5)', 'Diagnostic géotechnique.'],
      ['Guides de l’Agence Qualité Construction (AQC)', 'Retours d’expérience sur les pathologies.'],
    ],
  },
  exercises: {
    exercises: [
      {
        level: 1,
        text: 'Calculer la dilatation d’un mur en briques de 20 m pour ΔT = 50 °C (α = 6 × 10⁻⁶).',
        hint: 'ΔL = α ΔT L.',
        answer_latex: "\\Delta L = 6 \\times 10^{-6} \\times 50 \\times 20\\,000 = 6\\ \\text{mm}",
        answer_text: '6 mm.',
      },
      {
        level: 2,
        text: 'Un tassement différentiel de 12 mm est mesuré sur 5 m. Calculer β et conclure.',
        hint: 'Comparer à 1/300.',
        answer_latex: "\\beta = \\frac{12}{5\\,000} = \\frac{1}{417}",
        answer_text: '1/417 < 1/300 : fissures fines possibles, sans dommage structurel probable.',
      },
      {
        level: 3,
        text: 'Une fissure mesure 0,8 mm en mars, 1,1 mm en septembre, 0,8 mm en mars suivant et 1,1 mm en septembre suivant. Est-elle active ?',
        hint: 'Comparer les mêmes saisons.',
        answer_latex: "v_{annuelle} = \\frac{0{,}8 - 0{,}8}{12} = 0",
        answer_text: 'Elle « respire » de façon saisonnière mais n’évolue pas d’une année sur l’autre : réparation avec un produit souple adapté.',
      },
    ],
  },
  quiz: {
    title: 'Quiz — Pathologies de la maçonnerie',
    questions: [
      { q: 'Une fissure en escalier à 45° près d’un angle évoque…', options: ['Un tassement différentiel', 'La dilatation', 'Le gel'], correct: 0, explain: 'L’angle descend et la maçonnerie se cisaille.' },
      { q: 'Que faut-il faire avant de réparer une fissure ?', options: ['La peindre', 'Vérifier qu’elle est stabilisée et traiter la cause', 'L’élargir'], correct: 1, explain: 'Sinon elle réapparaît.' },
      { q: 'Pourquoi éviter un enduit ciment sur un mur ancien ?', options: ['Il est trop cher', 'Il bloque l’évaporation', 'Il est trop clair'], correct: 1, explain: 'L’humidité monte plus haut.' },
    ],
  },
  exam_questions: {
    questions: [
      'Présentez la démarche de diagnostic d’une fissure.',
      'Expliquez les mécanismes de remontée capillaire et leurs traitements.',
      'Comment prévenir les fissures dues à la dilatation et au retrait ?',
    ],
  },
  interview_questions: {
    questions: [
      ['Un client vous montre une fissure : que lui demandez-vous ?', 'Depuis quand, si elle évolue, sa position et sa forme, les événements récents (sécheresse, travaux, fuite), puis je pose des témoins et je mesure.'],
      ['Comment traitez-vous des remontées capillaires ?', 'Diagnostic (mesures d’humidité, sels), drainage périphérique, barrière par injection de résine hydrophobe, enduits perméables et assainissement des pieds de murs.'],
    ],
  },
  practical_case: {
    title: 'Cas pratique — Mur de clôture fissuré',
    scenario: 'Mur de clôture en blocs béton de 45 m sans joint, chaîné en tête. Fissures verticales tous les 8 à 10 m, ouverture 1 mm, stables depuis un an.',
    description: 'Expliquer et réparer.',
    resolutions: [
      "\\text{Cause} : \\text{retrait} + \\text{dilatation} \\ (\\Delta L = 10^{-5} \\times 40 \\times 45\\,000 = 18\\ \\text{mm})",
      "\\text{Fissures stables} \\Rightarrow \\text{transformer les fissures en joints de fractionnement (sciage + mastic)}",
      "\\text{Joints tous les 8 à 10 m environ, coupure du chaînage ou glissement prévu}",
    ],
    conclusion: 'Le mur a « choisi » ses joints : on les régularise en vrais joints de fractionnement, étanches et souples, au lieu de les reboucher.',
  },
  summary: {
    content: `### Les pathologies en 5 points
1. Observer la forme : la fissure révèle sa cause.
2. Dilatation $\\Delta L = \\alpha \\Delta T L$ : joints de fractionnement.
3. Tassement : $\\beta = \\delta / L$, fissures vers 1/300.
4. Humidité : remontées capillaires, matériaux compatibles.
5. Traiter la cause, vérifier la stabilité, puis réparer.`,
  },
  key_points: {
    points: [
      'La forme de la fissure indique la cause',
      'ΔL = α ΔT L',
      'β ≈ 1/300 : premières fissures',
      'Fissure active → ne pas reboucher',
      'Matériaux compatibles sur l’ancien',
    ],
  },
  self_assessment: {
    objectives: [
      'Je sais interpréter les formes de fissures',
      'Je sais calculer une dilatation et une distorsion',
      'Je comprends les remontées capillaires',
      'Je sais proposer une réparation adaptée',
      "J'ai réussi le quiz avec au moins 2 bonnes réponses sur 3",
    ],
  },
});
