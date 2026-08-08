// Leçon 1 complète — Module 1 : Mathématiques appliquées au Génie Civil
// 23 étapes pédagogiques canoniques

export const lesson_maths_trig = {
  moduleId: 1,
  slug: 'maths',
  lessonIndex: 1,
  title: 'Trigonométrie & Pythagore',
  subtitle: 'Module 1 — Mathématiques appliquées au Génie Civil',
  level: 'Débutant → Confirmé',
  duration: '3h',
  tags: ['Trigonométrie', 'Pythagore', 'Angles', 'Pentes', 'Distances'],

  steps: [
    {
      id: 1,
      key: 'definition',
      title: 'Définition simple',
      icon: '📖',
      type: 'definition',
      fr: 'Trigonométrie / Pythagore',
      en: 'Trigonometry / Pythagorean Theorem',
      metier: 'Utilisé quotidiennement par les ingénieurs géotechniciens, topographes, chefs de chantier et ingénieurs structures.',
      content: `La **trigonométrie** est la branche des mathématiques qui étudie les relations entre les angles et les longueurs des côtés des triangles. Le **théorème de Pythagore** est son fondement géométrique essentiel.

En génie civil, ces deux outils sont utilisés **chaque jour** pour :
- Calculer des **pentes de route** et des **dévers**
- Déterminer des **distances inaccessibles** sur le terrain
- Vérifier l'**alignement** d'éléments de structure
- Calculer des **forces décomposées** selon des directions spécifiques`,
    },
    {
      id: 2,
      key: 'importance',
      title: 'Pourquoi c\'est important en ingénierie',
      icon: '⚠️',
      type: 'importance',
      content: `La trigonométrie est **omniprésente** en génie civil. Sans elle, il est impossible de :

- **Tracer un projet** : tout profil en long ou en travers nécessite des calculs angulaires
- **Décomposer des forces** : une charge inclinée sur un toit se décompose en composantes horizontale et verticale
- **Réaliser des levés topographiques** : mesure d'altitudes, de distances, pose de repères
- **Calculer des talus** : la pente d'un remblai ou d'une tranchée est définie par son angle
- **Vérifier l'aplomb** d'une construction : contrôler que des poteaux sont bien verticaux

> 💡 **Fait professionnel** : Un ingénieur structure passe environ **40% de son temps** à résoudre des problèmes géométriques impliquant des relations trigonométriques.`,
    },
    {
      id: 3,
      key: 'applications',
      title: 'Applications réelles sur le terrain',
      icon: '🏗️',
      type: 'applications',
      examples: [
        { context: 'Voirie', text: 'Calcul du pourcentage de pente d\'une route (% = tan θ × 100)' },
        { context: 'Bâtiment', text: 'Calcul de la hauteur d\'un poteau à partir de son ombre et de l\'angle solaire' },
        { context: 'Topographie', text: 'Mesure de la hauteur d\'un bâtiment depuis un point connu avec un théodolite' },
        { context: 'Fondations', text: 'Vérification de l\'aplomb des pieux forés par mesure angulaire' },
        { context: 'Ponts', text: 'Calcul de la longueur d\'un câble de suspension connaissant la portée et la flèche' },
        { context: 'Charpente', text: 'Calcul des longueurs d\'arbalétriers et de la surface de couverture d\'une toiture' },
      ],
    },
    {
      id: 4,
      key: 'theory',
      title: 'Bases théoriques',
      icon: '📐',
      type: 'theory',
      content: `### Le triangle rectangle — élément fondamental

Un triangle rectangle possède **un angle droit** (90°) et deux autres angles aigus dont la somme vaut 90°.

**Ses trois côtés sont nommés par rapport à un angle aigu θ :**
- **Hypoténuse (H)** : le côté le plus long, opposé à l'angle droit
- **Adjacent (adj)** : le côté qui "touche" l'angle θ
- **Opposé (opp)** : le côté en face de l'angle θ

### Théorème de Pythagore
Dans tout triangle rectangle : **H² = adj² + opp²**

### Propriétés importantes
- La somme des angles d'un triangle vaut toujours **180°**
- Dans un triangle rectangle : **α + β = 90°** (les deux angles aigus sont complémentaires)
- Le sinus et le cosinus sont des fonctions **bornées entre -1 et +1**`,
    },
    {
      id: 5,
      key: 'formulas',
      title: 'Formules et équations mathématiques',
      icon: '🔢',
      type: 'formulas',
      formulas: [
        {
          name: 'Théorème de Pythagore',
          latex: 'H^2 = \\text{adj}^2 + \\text{opp}^2 \\quad \\Leftrightarrow \\quad H = \\sqrt{\\text{adj}^2 + \\text{opp}^2}',
          description: 'Relation entre les trois côtés d\'un triangle rectangle'
        },
        {
          name: 'Sinus',
          latex: '\\sin(\\theta) = \\frac{\\text{opp}}{H} \\quad \\Rightarrow \\quad \\text{opp} = H \\cdot \\sin(\\theta)',
          description: 'Rapport : côté opposé / hypoténuse'
        },
        {
          name: 'Cosinus',
          latex: '\\cos(\\theta) = \\frac{\\text{adj}}{H} \\quad \\Rightarrow \\quad \\text{adj} = H \\cdot \\cos(\\theta)',
          description: 'Rapport : côté adjacent / hypoténuse'
        },
        {
          name: 'Tangente',
          latex: '\\tan(\\theta) = \\frac{\\text{opp}}{\\text{adj}} = \\frac{\\sin(\\theta)}{\\cos(\\theta)}',
          description: 'Rapport : côté opposé / côté adjacent — utilisé pour les pentes'
        },
        {
          name: 'Fonctions inverses',
          latex: '\\theta = \\arcsin\\!\\left(\\frac{\\text{opp}}{H}\\right) = \\arccos\\!\\left(\\frac{\\text{adj}}{H}\\right) = \\arctan\\!\\left(\\frac{\\text{opp}}{\\text{adj}}\\right)',
          description: 'Pour retrouver un angle à partir des longueurs connues'
        },
        {
          name: 'Identité fondamentale',
          latex: '\\sin^2(\\theta) + \\cos^2(\\theta) = 1',
          description: 'Relation algébrique toujours vérifiée'
        },
        {
          name: 'Pente en % (Génie Civil)',
          latex: 'p\\,(\\%) = \\tan(\\theta) \\times 100 = \\frac{\\Delta h}{\\Delta L_{horiz}} \\times 100',
          description: 'Expression usuelle de la pente en voirie et terrassements'
        },
      ],
    },
    {
      id: 6,
      key: 'stepbystep',
      title: 'Démonstrations pas-à-pas',
      icon: '🔬',
      type: 'stepbystep',
      problem: 'Un ingénieur souhaite connaître la hauteur d\'une antenne installée au sommet d\'un bâtiment. Il se place à 50 m de la base et mesure un angle d\'élévation de 42°.',
      steps_demo: [
        { n: 1, text: 'Identifier le triangle rectangle : base = 50 m (adjacent), angle θ = 42°, hauteur = opposé' },
        { n: 2, text: 'Sélectionner la bonne formule : on connaît l\'adjacent et θ → on utilise tan(θ) = opp / adj' },
        { n: 3, text: 'Isoler l\'inconnue : opp = adj × tan(θ) = 50 × tan(42°)' },
        { n: 4, text: 'Calculer : tan(42°) ≈ 0,9004 → opp = 50 × 0,9004 = 45,02 m' },
        { n: 5, text: 'Vérifier : calculer l\'hypoténuse H = 50 / cos(42°) = 50 / 0,7431 ≈ 67,29 m' },
        { n: 6, text: 'Vérification Pythagore : √(50² + 45,02²) = √(2500 + 2027) = √4527 ≈ 67,28 m ✓' },
      ],
      result_latex: 'H_{bâtiment} = 50 \\times \\tan(42°) \\approx 45{,}02 \\text{ m}',
    },
    {
      id: 7,
      key: 'units',
      title: 'Unités & Systèmes de mesure',
      icon: '📏',
      type: 'units',
      table: [
        { grandeur: 'Longueur (SI)', si: 'm (mètre)', imperial: 'ft (pied) / in (pouce)', conversion: '1 m = 3,281 ft = 39,37 in' },
        { grandeur: 'Angle', si: 'rad (radian)', imperial: '° (degré) / gon', conversion: '1 rad = 180°/π ≈ 57,296° = 63,66 gon' },
        { grandeur: 'Pente', si: '% ou ‰', imperial: '% grade', conversion: 'identique en général' },
        { grandeur: 'Superficie', si: 'm²', imperial: 'ft² / acre', conversion: '1 m² = 10,764 ft²' },
      ],
      note: 'En France et en Europe, on travaille en **degrés décimaux** pour la topographie. Dans les pays anglophones, on utilise aussi les **pieds et pouces**. Toujours préciser l\'unité dans les rapports !',
    },
    {
      id: 8,
      key: 'hypotheses',
      title: 'Hypothèses d\'application',
      icon: '📋',
      type: 'hypotheses',
      items: [
        { type: 'warning', text: 'Le triangle doit être strictement **rectangle** (angle 90° exactement)' },
        { type: 'warning', text: 'Les mesures doivent être prises dans un **plan unique** (pas de 3D sauf si on décompose)' },
        { type: 'info', text: 'En topographie, on projette systématiquement sur le **plan horizontal** pour éviter les erreurs de pente' },
        { type: 'info', text: 'Pour les petits angles (θ < 5°), on peut approcher : sin(θ) ≈ tan(θ) ≈ θ (en rad)' },
        { type: 'tip', text: 'En chantier, les angles sont souvent donnés en **pourcentage de pente** plutôt qu\'en degrés' },
        { type: 'warning', text: 'Vérifier que la calculatrice est bien en **mode degrés (DEG)** et non en radians (RAD)' },
      ],
    },
    {
      id: 9,
      key: 'simple_examples',
      title: 'Exemples simples guidés',
      icon: '✏️',
      type: 'examples_simple',
      examples: [
        {
          title: 'Exemple 1 : Hauteur d\'un mur',
          given: 'Un câble de 15 m part du sol à 35° d\'angle',
          find: 'Hauteur du point d\'attache en haut du mur',
          solution_latex: 'h = 15 \\times \\sin(35°) = 15 \\times 0{,}5736 = 8{,}60 \\text{ m}',
          result: '8,60 m',
        },
        {
          title: 'Exemple 2 : Pente d\'une rampe',
          given: 'Rampe de 12 m de long, montée verticale de 1,5 m',
          find: 'Angle d\'inclinaison et pourcentage de pente',
          solution_latex: '\\theta = \\arcsin\\left(\\frac{1{,}5}{12}\\right) = \\arcsin(0{,}125) \\approx 7{,}18° \\quad\\quad p = \\tan(7{,}18°) \\times 100 \\approx 12{,}5\\%',
          result: 'θ ≈ 7,18° — Pente ≈ 12,5%',
        },
        {
          title: 'Exemple 3 : Distance entre deux points',
          given: 'Point A et point B : ΔH = 4 m, longueur inclinée L = 9 m',
          find: 'Distance horizontale D entre les deux points',
          solution_latex: 'D = \\sqrt{L^2 - \\Delta H^2} = \\sqrt{9^2 - 4^2} = \\sqrt{81-16} = \\sqrt{65} \\approx 8{,}06 \\text{ m}',
          result: '8,06 m',
        },
      ],
    },
    {
      id: 10,
      key: 'real_examples',
      title: 'Exemples réels de bureau d\'études & chantier',
      icon: '🏢',
      type: 'examples_real',
      examples: [
        {
          context: 'Bureau d\'études — Charpente métallique',
          scenario: 'Un arbalétrier de toiture incliné à 22° supporte une charge normale de 45 kN/m. L\'ingénieur doit décomposer cette force.',
          decomposition_latex: 'F_{vert} = 45 \\times \\cos(22°) = 45 \\times 0{,}927 = 41{,}7 \\text{ kN/m} \\quad F_{horiz} = 45 \\times \\sin(22°) = 45 \\times 0{,}374 = 16{,}8 \\text{ kN/m}',
          lesson: 'La composante horizontale crée une poussée sur les murs, qui doit être reprise par des tirants ou une ceinture.',
        },
        {
          context: 'Chantier — Voirie',
          scenario: 'Une route doit raccorder deux points distants de 200 m avec une dénivelée de 8 m. Le cahier des charges impose une pente max de 6%.',
          check_latex: 'p_{réelle} = \\frac{8}{200} \\times 100 = 4\\% < 6\\% \\quad \\checkmark',
          lesson: 'La pente de 4% est acceptable. On peut calculer l\'angle exact : θ = arctan(0,04) ≈ 2,29°',
        },
      ],
    },
    {
      id: 11,
      key: 'diagrams',
      title: 'Schémas techniques & diagrammes explicatifs',
      icon: '📊',
      type: 'interactive_diagram',
      description: 'Utilisez le widget interactif (colonne de droite) pour manipuler le triangle rectangle en temps réel. Cliquez ou glissez dans le SVG pour ajuster l\'angle et observez les valeurs recalculées instantanément.',
      diagram_description: [
        'Le côté **bleu** représente l\'hypoténuse H (cable, pente, diagonale)',
        'Le côté **orange** représente la base horizontale (adjacent)',
        'Le côté **vert** représente la hauteur verticale (opposé)',
        'L\'**arc cyan** représente l\'angle θ au point d\'origine',
      ],
    },
    {
      id: 12,
      key: 'mistakes',
      title: 'Erreurs fréquentes des débutants & pièges à éviter',
      icon: '⛔',
      type: 'mistakes',
      items: [
        {
          mistake: 'Confondre sinus et cosinus selon le côté de référence',
          trap: 'sin = opp/H, cos = adj/H — toujours repérer depuis QUEL angle vous travaillez',
          fix: 'Dessiner le triangle et annoter explicitement les côtés avant de calculer',
        },
        {
          mistake: 'Calculatrice en radians au lieu de degrés',
          trap: 'sin(30 rad) ≠ sin(30°). En France les angles de chantier sont en degrés.',
          fix: 'Vérifier que l\'écran affiche DEG ou D avant tout calcul trigonométrique',
        },
        {
          mistake: 'Appliquer Pythagore à un triangle non rectangle',
          trap: 'H² = a² + b² uniquement si l\'angle entre a et b est exactement 90°',
          fix: 'Utiliser la loi des cosinus pour les triangles quelconques : a² = b² + c² − 2bc·cos(A)',
        },
        {
          mistake: 'Confondre angle d\'inclinaison et pourcentage de pente',
          trap: 'Une pente de 5% correspond à θ = arctan(0,05) ≈ 2,86°, pas 5°',
          fix: 'p(%) = tan(θ) × 100 — toujours convertir avec la tangente',
        },
        {
          mistake: 'Négliger la projection horizontale en 3D',
          trap: 'En topographie, les distances mesurées "en pente" doivent être réduites à l\'horizontal',
          fix: 'D_horiz = D_pente × cos(θ) — toujours réduire à l\'horizontal',
        },
      ],
    },
    {
      id: 13,
      key: 'tips',
      title: 'Astuces et secrets professionnels du terrain',
      icon: '💡',
      type: 'tips',
      tips: [
        'Mémorisez SOH-CAH-TOA : Sin=Opp/Hyp, Cos=Adj/Hyp, Tan=Opp/Adj — indémodable depuis 50 ans',
        'Sur chantier, un angle de 45° est le seul où sin = cos = tan/2 ≈ 0,707. Utile pour les contrôles rapides.',
        'Le triangle 3-4-5 (côtés entiers) est un classique de chantier pour tracer un angle droit précis',
        'Pour les pentes routières, retenez : 1% ≈ 10 mm/m — facile à mémoriser',
        'Un niveau laser ou un fil à plomb remplace rarement la trigonométrie, mais vérifier l\'un avec l\'autre est une bonne pratique',
        'Sur une calculatrice scientifique, les fonctions inverses sont souvent appelées 2nd + sin/cos/tan ou INV+sin',
      ],
    },
    {
      id: 14,
      key: 'norms',
      title: 'Normes & standards concernés',
      icon: '📜',
      type: 'norms',
      norms: [
        { code: 'Eurocode 1 (EN 1991)', description: 'Actions sur les structures — les charges inclinées nécessitent une décomposition trigonométrique' },
        { code: 'Eurocode 7 (EN 1997)', description: 'Géotechnique — pentes de talus, angles de frottement, inclination des charges' },
        { code: 'NF P 98-080', description: 'Terrassements routiers — définition et calcul des pentes et dévers' },
        { code: 'ISO 1101', description: 'Tolérances géométriques — angles et perpendicularité dans les dessins techniques' },
        { code: 'AASHTO', description: 'Normes routières américaines utilisant des pentes en % et des angles en degrés' },
      ],
    },
    {
      id: 15,
      key: 'exercises',
      title: 'Exercices d\'application directe',
      icon: '✍️',
      type: 'exercises',
      exercises: [
        {
          id: 'ex1',
          number: 1,
          difficulty: 'Facile',
          text: 'Un câble d\'acier tendu du sol forme un angle de 60° avec l\'horizontal. Sa longueur est de 20 m. Calculez la hauteur (h) et la distance horizontale (d) de son point d\'attache.',
          hint: 'Utilisez sin pour la hauteur et cos pour la distance horizontale.',
          answer_latex: 'h = 20 \\sin(60°) = 17{,}32 \\text{ m} \\quad d = 20 \\cos(60°) = 10{,}00 \\text{ m}',
          answer_text: 'h = 17,32 m ; d = 10,00 m',
        },
        {
          id: 'ex2',
          number: 2,
          difficulty: 'Moyen',
          text: 'Une route en pente doit relier deux points : A (altitude 120 m) et B (altitude 135 m), séparés par une distance horizontale de 250 m. Calculez : a) le pourcentage de pente, b) l\'angle d\'inclinaison en degrés, c) la longueur réelle de la route.',
          hint: 'a) p = ΔH/D × 100 ; b) θ = arctan(p/100) ; c) L = D/cos(θ)',
          answer_latex: 'p = \\frac{15}{250} \\times 100 = 6\\% \\quad \\theta = \\arctan(0{,}06) \\approx 3{,}43° \\quad L = \\frac{250}{\\cos(3{,}43°)} \\approx 250{,}9 \\text{ m}',
          answer_text: 'p = 6% ; θ ≈ 3,43° ; L ≈ 250,9 m',
        },
        {
          id: 'ex3',
          number: 3,
          difficulty: 'Difficile',
          text: 'Un ingénieur topographe doit déterminer la hauteur H d\'une tour depuis deux points alignés. Depuis le point A (à 80 m de la base) l\'angle d\'élévation est de 38°. Depuis le point B (à 140 m de la base) il est de 25°. Vérifiez la cohérence des mesures et calculez H.',
          hint: 'H = 80·tan(38°) et H = 140·tan(25°) — les deux doivent donner la même valeur si les mesures sont cohérentes.',
          answer_latex: 'H_A = 80 \\tan(38°) = 80 \\times 0{,}781 = 62{,}5 \\text{ m} \\quad H_B = 140 \\tan(25°) = 140 \\times 0{,}466 = 65{,}2 \\text{ m}',
          answer_text: 'HA ≈ 62,5 m — HB ≈ 65,2 m — Légère différence due aux arrondis / imprécisions de mesure. Valeur finale ≈ 63–65 m.',
        },
      ],
    },
    {
      id: 16,
      key: 'corrections',
      title: 'Corrections détaillées pas-à-pas',
      icon: '✅',
      type: 'corrections',
      linked_to_exercises: true,
      note: 'Les corrections complètes sont accessibles après avoir soumis vos réponses dans la section Exercices ci-dessus.',
    },
    {
      id: 17,
      key: 'quiz',
      title: 'Quiz d\'évaluation rapide',
      icon: '🎯',
      type: 'quiz',
      questions: [
        {
          id: 'q1',
          question: 'Quel rapport trigonométrique exprime directement le pourcentage de pente d\'une route ?',
          options: [
            { id: 'a', text: 'sin(θ)' },
            { id: 'b', text: 'cos(θ)' },
            { id: 'c', text: 'tan(θ)' },
            { id: 'd', text: '1/sin(θ)' },
          ],
          correct: 'c',
          explanation: 'La pente est définie comme le rapport montée/distance horizontale = opp/adj = tan(θ). Le % de pente = tan(θ) × 100.',
        },
        {
          id: 'q2',
          question: 'Dans un triangle rectangle avec hypoténuse H = 10 m et angle θ = 30°, quelle est la hauteur (côté opposé) ?',
          options: [
            { id: 'a', text: '8,66 m' },
            { id: 'b', text: '5,00 m' },
            { id: 'c', text: '3,33 m' },
            { id: 'd', text: '7,07 m' },
          ],
          correct: 'b',
          explanation: 'h = H × sin(30°) = 10 × 0,5 = 5,00 m. Le sinus de 30° vaut exactement 1/2.',
        },
        {
          id: 'q3',
          question: 'Un triangle a des côtés de 3 m, 4 m et 5 m. Est-il rectangle ?',
          options: [
            { id: 'a', text: 'Oui, car 3 + 4 = 7 > 5' },
            { id: 'b', text: 'Oui, car 3² + 4² = 5² (9 + 16 = 25)' },
            { id: 'c', text: 'Non, les côtés ne sont pas égaux' },
            { id: 'd', text: 'Non, on ne peut pas le savoir sans connaître les angles' },
          ],
          correct: 'b',
          explanation: 'Théorème de Pythagore : 3² + 4² = 9 + 16 = 25 = 5². Donc ce triangle est bien rectangle. Le triplet (3,4,5) est le triplet pythagoricien classique utilisé sur les chantiers pour tracer des angles droits.',
        },
        {
          id: 'q4',
          question: 'Une route a une pente de 8%. Quel est l\'angle d\'inclinaison approximatif ?',
          options: [
            { id: 'a', text: '8,00°' },
            { id: 'b', text: '4,57°' },
            { id: 'c', text: '2,87°' },
            { id: 'd', text: '0,80°' },
          ],
          correct: 'b',
          explanation: 'θ = arctan(8/100) = arctan(0,08) ≈ 4,57°. Attention : 8% de pente ≠ 8° d\'angle ! La conversion se fait via la tangente.',
        },
        {
          id: 'q5',
          question: 'Quelle est la relation fondamentale toujours vraie entre sin et cos ?',
          options: [
            { id: 'a', text: 'sin(θ) + cos(θ) = 1' },
            { id: 'b', text: 'sin²(θ) + cos²(θ) = 1' },
            { id: 'c', text: 'sin(θ) × cos(θ) = 1' },
            { id: 'd', text: 'sin(θ) = cos(90° + θ)' },
          ],
          correct: 'b',
          explanation: 'L\'identité trigonométrique fondamentale est sin²(θ) + cos²(θ) = 1. Elle découle directement du théorème de Pythagore appliqué au cercle unité.',
        },
      ],
    },
    {
      id: 18,
      key: 'exam_questions',
      title: 'Questions d\'examen universitaire',
      icon: '🎓',
      type: 'exam',
      questions: [
        'Démontrez le théorème de Pythagore à partir de la définition géométrique du carré de l\'hypoténuse.',
        'Un ingénieur civil reçoit un plan topographique avec des courbes de niveau espacées de 5 m. Comment utilise-t-il la trigonométrie pour calculer le volume de déblais d\'un talus ?',
        'Expliquez la différence entre un angle en degrés, en radians et en grades (gons). Donnez les formules de conversion et un contexte d\'utilisation professionnel pour chacun.',
        'Résolvez le triangle quelconque avec a = 12 m, b = 15 m, angle C = 50°. Donnez c, les angles A et B. (Loi des cosinus et loi des sinus)',
      ],
    },
    {
      id: 19,
      key: 'interview_questions',
      title: 'Questions d\'entretien d\'embauche technique',
      icon: '💼',
      type: 'interview',
      questions: [
        {
          question: 'Expliquez en moins de 2 minutes comment vous vérifiez l\'aplomb d\'un poteau de 8 m sur chantier.',
          answer_hint: 'Mesure avec un niveau ou un fil à plomb, vérification trigonométrique si déviation mesurée.',
        },
        {
          question: 'Un architecte vous donne une pente de toiture de 35%. Quelle est l\'inclinaison en degrés ? Comment calculerez-vous la longueur des chevrons ?',
          answer_hint: 'arctan(0,35) ≈ 19,29° ; longueur chevron = distance horizontale / cos(θ)',
        },
        {
          question: 'Pourquoi utilise-t-on le triangle 3-4-5 sur les chantiers ?',
          answer_hint: 'Triplet pythagoricien permettant de tracer un angle droit parfait avec un simple mètre-ruban.',
        },
      ],
    },
    {
      id: 20,
      key: 'practical_case',
      title: 'Cas pratique professionnel — Scénario réel',
      icon: '🔧',
      type: 'practical',
      scenario: 'Dimensionnement d\'une rampe d\'accès PMR (Personnes à Mobilité Réduite)',
      description: `**Contexte** : Vous êtes chargé de concevoir une rampe d'accès pour un bâtiment public. L'entrée est surélevée de 45 cm par rapport au trottoir. La réglementation impose une pente maximale de 5%.

**Questions professionnelles** :
1. Quelle doit être la longueur minimale de la rampe ?
2. Quel angle d'inclinaison cela représente-t-il ?
3. Si l'espace disponible est limité à 8 m, la solution est-elle réglementaire ?`,
      resolution_latex_1: 'L_{min} = \\frac{\\Delta H}{\\tan(\\theta_{max})} = \\frac{0{,}45}{0{,}05} = 9{,}00 \\text{ m}',
      resolution_latex_2: '\\theta = \\arctan(0{,}05) \\approx 2{,}86°',
      resolution_latex_3: 'p_{dispo} = \\frac{0{,}45}{8{,}00} \\times 100 = 5{,}63\\% > 5\\% \\quad \\Rightarrow \\text{ Non conforme !}',
      conclusion: 'La rampe de 8 m présente une pente de 5,63%, supérieure à la limite de 5%. Il faut soit prévoir une rampe de 9 m minimum, soit envisager un ascenseur ou une autre solution.',
    },
    {
      id: 21,
      key: 'summary',
      title: 'Résumé exécutif',
      icon: '📋',
      type: 'summary',
      content: `La trigonométrie et le théorème de Pythagore constituent les **outils mathématiques les plus utilisés** en génie civil. Ils permettent de résoudre tout problème impliquant des angles et des distances dans un plan.

**En pratique** : chaque fois que vous avez un triangle rectangle — que ce soit une pente, un câble, un talus, ou une force décomposée — vous appliquez sin, cos ou tan selon les données disponibles et l'inconnue recherchée.

**La clé du succès** : identifier correctement les côtés (opposé/adjacent/hypoténuse) par rapport à l'angle de travail, et toujours vérifier que la calculatrice est en mode degrés.`,
    },
    {
      id: 22,
      key: 'key_points',
      title: 'Points clés à retenir',
      icon: '⭐',
      type: 'keypoints',
      points: [
        'SOH-CAH-TOA : Sin = Opp/Hyp | Cos = Adj/Hyp | Tan = Opp/Adj',
        'Pythagore : H² = a² + b² — UNIQUEMENT pour les triangles RECTANGLES',
        'Pente (%) = tan(θ) × 100 — conversion via la tangente, pas directement en degrés',
        'sin²(θ) + cos²(θ) = 1 — identité fondamentale, toujours vraie',
        'Fonctions inverses : arcsin, arccos, arctan — pour trouver un angle depuis des longueurs',
        'Triplet (3,4,5) : outil de chantier classique pour tracer un angle droit',
        'Vérification : toujours confirmer par le théorème de Pythagore après calcul',
        'En topographie : réduire les distances inclinées à l\'horizontal (× cos θ)',
      ],
    },
    {
      id: 23,
      key: 'self_assessment',
      title: 'Module de vérification de la compréhension',
      icon: '🏆',
      type: 'self_assessment',
      description: 'Testez votre compréhension avec les exercices interactifs et le quiz ci-dessus. Cochez mentalement les objectifs atteints :',
      objectives: [
        'Je sais nommer les 3 côtés d\'un triangle rectangle et les relier à SOH-CAH-TOA',
        'Je peux appliquer sin, cos et tan pour trouver une longueur inconnue',
        'Je peux retrouver un angle avec arcsin, arccos ou arctan',
        'Je sais convertir une pente en % en angle et inversement',
        'Je comprends quand appliquer Pythagore vs la loi des cosinus',
        'J\'ai réussi les 3 exercices avec une erreur < 1%',
        'J\'ai obtenu au moins 4/5 au quiz',
      ],
    },
  ],

  // Quiz data extracted for SidebarRight
  quickQuiz: {
    question: 'Sur chantier, quel rapport trigonométrique utilise-t-on pour calculer une pente ?',
    options: [
      { id: 'sin', label: 'A) sin(θ)' },
      { id: 'cos', label: 'B) cos(θ)' },
      { id: 'tan', label: 'C) tan(θ) ← pente = tan × 100' },
    ],
    correct: 'tan',
    explanation: 'La pente est définie comme Δhauteur/Δlongueur_horizontale = opp/adj = tan(θ). Le pourcentage de pente = tan(θ) × 100.',
  },
};
