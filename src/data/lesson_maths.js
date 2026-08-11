// Module 1 : Mathématiques appliquées au Génie Civil
// 4 Leçons complètes avec chacune les 23 étapes pédagogiques canoniques

export const lesson_maths_trig = {
  moduleId: 1,
  slug: 'maths',
  lessonIndex: 1,
  title: 'Trigonométrie de Base & Théorème de Pythagore',
  subtitle: 'Module 1 — Leçon 1 : Trigonométrie de Base & Pythagore',
  level: 'Débutant → Confirmé',
  duration: '3h',
  diagramType: 'trig_interactive',
  tags: ['Trigonométrie', 'Pythagore', 'SOH-CAH-TOA', 'Angles', 'Pentes', 'Règle 3-4-5'],

  steps: [
    {
      id: 1, key: 'definition', title: 'Définition simple', icon: '📖', type: 'definition',
      fr: 'Trigonométrie / Théorème de Pythagore', en: 'Trigonometry / Pythagorean Theorem',
      metier: 'Utilisé quotidiennement par les ingénieurs géotechniciens, topographes, chefs de chantier et ingénieurs structures.',
      content: `La **trigonométrie de base** étudie les relations fondamentales entre les angles et les côtés d'un triangle rectangle. Le **théorème de Pythagore** établit la relation géométrique directe entre les carrés des trois côtés.

En génie civil :
- **SOH-CAH-TOA** définit les rapports trigonométriques ($\sin$, $\cos$, $\tan$).
- **La règle du 3-4-5** est l'outil ultime de chantier pour tracer un angle droit d'une précision millimétrique.`,
    },
    {
      id: 2, key: 'importance', title: 'Pourquoi c\'est important en ingénierie', icon: '⚠️', type: 'importance',
      content: `Sans trigonométrie élémentaire, aucun ouvrage ne peut être implanté ni dimensionné correctement.
- **Tracé d'implantation** : vérifier l'équerrage des dalles et des coffrages.
- **Calcul de pentes** : dimensionner les réseaux d'assainissement et rampes PMR.
- **Décomposition de forces** : projeter le poids propre sur les axes de la structure.`,
    },
    {
      id: 3, key: 'applications', title: 'Applications réelles sur le terrain', icon: '🏗️', type: 'applications',
      examples: [
        { context: 'Chantier', text: 'Implantation d\'une dalle 12×16 m en utilisant la diagonale 20 m (3-4-5 × 4).' },
        { context: 'Voirie', text: 'Vérification du pourcentage de pente d\'une rampe d\'accès PMR (tan θ × 100 ≤ 5%).' },
        { context: 'Topographie', text: 'Mesure de hauteur d\'un poteau électrique par visée angulaire au théodolite.' },
        { context: 'Charpente', text: 'Calcul de la longueur des arbalétriers d\'une ferme de toiture à deux versants.' },
      ],
    },
    {
      id: 4, key: 'theory', title: 'Bases théoriques', icon: '📐', type: 'theory', diagramType: 'trig_interactive',
      content: `Dans tout triangle rectangle dont un angle aigu est $\\theta$ :
- **Hypoténuse ($H$)** : côté opposé à l'angle droit (le plus long).
- **Côté Opposé ($\text{opp}$)** : côté en face de l'angle $\\theta$.
- **Côté Adjacent ($\text{adj}$)** : côté formant l'angle $\\theta$ avec l'hypoténuse.

Théorème de Pythagore : $H^2 = \\text{adj}^2 + \\text{opp}^2$`,
    },
    {
      id: 5, key: 'formulas', title: 'Formules et équations mathématiques', icon: '🔢', type: 'formulas', diagramType: 'trig_interactive',
      formulas: [
        { name: 'Théorème de Pythagore', latex: 'H = \\sqrt{\\text{adj}^2 + \\text{opp}^2}', description: 'Calcul de l\'hypoténuse ou diagonale' },
        { name: 'Sinus (SOH)', latex: '\\sin(\\theta) = \\frac{\\text{opp}}{H}', description: 'Rapport opposé sur hypoténuse' },
        { name: 'Cosinus (CAH)', latex: '\\cos(\\theta) = \\frac{\\text{adj}}{H}', description: 'Rapport adjacent sur hypoténuse' },
        { name: 'Tangente (TOA)', latex: '\\tan(\\theta) = \\frac{\\text{opp}}{\\text{adj}}', description: 'Calcul du pourcentage de pente : p(\\%) = \\tan(\\theta) \\cdot 100' },
        { name: 'Identité fondamentale', latex: '\\sin^2(\\theta) + \\cos^2(\\theta) = 1', description: 'Relation toujours vérifiée sur le cercle unité' },
      ],
    },
    {
      id: 6, key: 'stepbystep', title: 'Démonstrations pas-à-pas', icon: '🔬', type: 'stepbystep',
      problem: 'Un arbalétrier de toiture a une portée horizontale de 8,00 m et une pente de 30%. Calculer sa longueur réelle H et l\'angle d\'inclinaison θ.',
      steps_demo: [
        { n: 1, text: 'Convertir la pente en tangente : tan(θ) = 0,30' },
        { n: 2, text: 'Calculer la hauteur verticale : opp = 8,00 × 0,30 = 2,40 m' },
        { n: 3, text: 'Appliquer Pythagore : H = √(8,00² + 2,40²) = √(64,00 + 5,76) = √69,76' },
        { n: 4, text: 'Calculer H : H = 8,35 m' },
        { n: 5, text: 'Calculer l\'angle : θ = arctan(0,30) = 16,70°' },
      ],
      result_latex: 'H = 8{,}35 \\text{ m}, \\quad \\theta = 16{,}70°',
    },
    {
      id: 7, key: 'units', title: 'Unités & Systèmes de mesure', icon: '📏', type: 'units',
      table: [
        { grandeur: 'Longueur', si: 'm (mètre)', imperial: 'ft / in', conversion: '1 m = 3,2808 ft' },
        { grandeur: 'Angle', si: 'degré (°) / rad', imperial: 'deg / min / sec', conversion: '1 rad = 57,2958°' },
        { grandeur: 'Pente', si: '% ou ‰', imperial: '% grade', conversion: 'p(%) = tan(θ) × 100' },
      ],
      note: 'Vérifier systématiquement que la calculatrice est réglée sur DEG (Degrés).',
    },
    {
      id: 8, key: 'hypotheses', title: 'Hypothèses d\'application', icon: '📋', type: 'hypotheses',
      items: [
        { type: 'warning', text: 'Le théorème de Pythagore s\'applique UNIQUEMENT dans un triangle strictement rectangle (90°)' },
        { type: 'info', text: 'La projection des pentes en topographie se fait toujours sur le plan horizontal' },
        { type: 'tip', text: 'Sur chantier, la règle 3-4-5 s\'utilise avec un multiple (ex: 6-8-10 m ou 9-12-15 m)' },
      ],
    },
    {
      id: 9, key: 'simple_examples', title: 'Exemples simples guidés', icon: '✏️', type: 'examples_simple',
      examples: [
        {
          title: 'Exemple : Contrôle d\'équerrage 3-4-5',
          given: 'Côté a = 6,00 m, Côté b = 8,00 m',
          find: 'Longueur de la diagonale d\'équerrage c',
          solution_latex: 'c = \\sqrt{6{,}00^2 + 8{,}00^2} = \\sqrt{36 + 64} = \\sqrt{100} = 10{,}00 \\text{ m}',
          result: 'c = 10.00 m — Angle 90° parfait',
        },
      ],
    },
    {
      id: 10, key: 'real_examples', title: 'Exemples réels de bureau d\'études & chantier', icon: '🏢', type: 'examples_real', diagramType: 'trig_interactive',
      examples: [
        {
          context: 'Chantier Bâtiment',
          scenario: 'Contrôle d\'aplomb d\'un voilier de coffrage de 6,00 m de hauteur par mesure de décalage au laser.',
          decomposition_latex: '\\Delta x = H \\cdot \\sin(\\Delta \\theta) = 6000 \\cdot \\sin(0{,}2°) = 20{,}9 \\text{ mm}',
          lesson: 'Le décalage de 20.9 mm dépasse la tolérance ISO (15 mm). Régler les vérins d\'étaiement.',
        },
      ],
    },
    {
      id: 11, key: 'diagrams', title: 'Schémas techniques & diagrammes explicatifs', icon: '📊', type: 'interactive_diagram', diagramType: 'trig_interactive',
      description: 'Diagramme vectoriel interactif du triangle rectangle avec valeurs trigonométriques réelles.',
      diagram_description: ['Axe des abscisses : Adjacent', 'Axe des ordonnées : Opposé', 'Diagonale : Hypoténuse'],
    },
    {
      id: 12, key: 'mistakes', title: 'Erreurs fréquentes des débutants & pièges à éviter', icon: '⛔', type: 'mistakes',
      items: [
        { mistake: 'Confondre % de pente et angle en degrés', trap: 'Une pente de 10% n\'est PAS un angle de 10°', fix: 'θ = arctan(0,10) = 5.71°' },
        { mistake: 'Calculatrice en Radians au lieu de Degrés', trap: 'sin(30 rad) = -0.988 au lieu de 0.500', fix: 'Vérifier l\'indicateur DEG sur l\'écran' },
      ],
    },
    {
      id: 13, key: 'tips', title: 'Astuces et secrets professionnels du terrain', icon: '💡', type: 'tips',
      tips: [
        'Mnémonique universel : SOH - CAH - TOA',
        'Pour 45°, sin(45°) = cos(45°) = √2 / 2 ≈ 0.707',
        'Règle du 1% de pente = 1 cm de dénivelée par mètre linéaire',
      ],
    },
    {
      id: 14, key: 'norms', title: 'Normes & standards concernés', icon: '📜', type: 'norms',
      norms: [
        { code: 'ISO 4463-1', description: 'Méthodes de mesure dans le bâtiment — Implantation et levés' },
        { code: 'Eurocode 7', description: 'Géotechnique — Inflexion et inclinaison des talus' },
      ],
    },
    {
      id: 15, key: 'exercises', title: 'Exercices d\'application directe', icon: '✍️', type: 'exercises',
      exercises: [
        {
          id: 'ex1', number: 1, difficulty: 'Facile',
          text: 'Un câble de tirant d\'ancrage est incliné à 35° et fixé à une hauteur H = 5,00 m. Calculer la longueur du câble L.',
          hint: 'L = H / sin(35°)',
          answer_latex: 'L = \\frac{5{,}00}{\\sin(35°)} = \\frac{5{,}00}{0{,}5736} = 8{,}72 \\text{ m}',
          answer_text: 'L = 8.72 m',
        },
      ],
    },
    { id: 16, key: 'corrections', title: 'Corrections détaillées pas-à-pas', icon: '✅', type: 'corrections', note: 'Voir les corrections interactives sous chaque exercice.' },
    {
      id: 17, key: 'quiz', title: 'Quiz d\'évaluation rapide', icon: '🎯', type: 'quiz',
      questions: [
        {
          id: 'q1', question: 'Quelle est la valeur de sin(30°) ?',
          options: [{ id: 'a', text: '0,50' }, { id: 'b', text: '0,866' }, { id: 'c', text: '1,00' }], correct: 'a',
          explanation: 'Le sinus de 30° vaut exactement 1/2 = 0.50.',
        },
      ],
    },
    { id: 18, key: 'exam_questions', title: 'Questions d\'examen universitaire', icon: '🎓', type: 'exam', questions: ['Démontrer l\'identité sin²(θ) + cos²(θ) = 1 sur le cercle trigonométrique.'] },
    { id: 19, key: 'interview_questions', title: 'Questions d\'entretien d\'embauche technique', icon: '💼', type: 'interview', questions: [{ question: 'Comment contrôlez-vous l\'angle droit d\'une dalle 20×15 m sur chantier ?', answer_hint: 'Méthode des diagonales égales d = √(20² + 15²) = √625 = 25.00 m.' }] },
    {
      id: 20, key: 'practical_case', title: 'Cas pratique professionnel — Scénario réel', icon: '🔧', type: 'practical', diagramType: 'trig_interactive',
      scenario: 'Implantation d\'une Rampe d\'Accès Handicapés (PMR)',
      description: 'Entrée surélevée de 60 cm. Pente maximale PMR = 5%. Calculer la longueur minimale au sol L et la longueur de la rampe R.',
      resolution_latex_1: 'L_{sol} = \\frac{0{,}60}{0{,}05} = 12{,}00 \\text{ m}',
      resolution_latex_2: 'R = \\sqrt{12{,}00^2 + 0{,}60^2} = \\sqrt{144 + 0{,}36} = 12{,}015 \\text{ m}',
      resolution_latex_3: '\\theta = \\arctan(0{,}05) = 2{,}86° \\quad \\checkmark \\text{ (Conforme PMR)}',
      conclusion: 'La rampe doit avoir une portée au sol de 12.00 m.',
    },
    { id: 21, key: 'summary', title: 'Résumé exécutif', icon: '📋', type: 'summary', content: 'La trigonométrie élémentaire et la règle 3-4-5 constituent le socle de l\'implantation et du contrôle géométrique en génie civil.' },
    { id: 22, key: 'key_points', title: 'Points clés à retenir', icon: '⭐', type: 'keypoints', points: ['SOH-CAH-TOA', 'Pythagore : H² = a² + b²', 'p(%) = tan(θ) × 100', 'Toujours en mode DEG'] },
    { id: 23, key: 'self_assessment', title: 'Module de vérification de la compréhension', icon: '🏆', type: 'self_assessment', description: 'Vérifiez vos acquis :', objectives: ['Je maîtrise SOH-CAH-TOA', 'Je sais convertir les pentes', 'J\'applique la règle 3-4-5'] },
  ],
};

// ── LEÇON 2 : Trigonométrie Avancée & Triangles Quelconques ────────────────────
export const lesson_maths_advanced_trig = {
  moduleId: 1,
  slug: 'maths',
  lessonIndex: 2,
  title: 'Trigonométrie Avancée & Triangles Quelconques',
  subtitle: 'Module 1 — Leçon 2 : Théorème d\'Al-Kashi & Loi des Sinus',
  level: 'Intermédiaire',
  duration: '4h',
  diagramType: 'trig_interactive',
  tags: ['Al-Kashi', 'Loi des Sinus', 'Triangles Quelconques', 'Géodésie', 'Ambiguïté Arcsin'],

  steps: [
    {
      id: 1, key: 'definition', title: 'Définition simple', icon: '📖', type: 'definition',
      fr: 'Théorème d\'Al-Kashi (Loi des Cosinus) & Loi des Sinus', en: 'Law of Cosines & Law of Sines',
      metier: 'Indispensable pour le calcul des réseaux de triangulation géodésique, assemblages métalliques non perpendiculaires et ponts haubanés.',
      content: `Dans la réalité du terrain, les triangles ne sont pas toujours rectangles. La **trigonométrie avancée** fournit les outils mathématiques universels pour résoudre n'importe quel triangle quelconque (scalène, isocèle, obtusangle).

- **Théorème d'Al-Kashi (Loi des Cosinus)** : Généralisation du théorème de Pythagore à tous les triangles.
- **Loi des Sinus** : Établit la proportionnalité stricte entre la longueur d'un côté et le sinus de son angle opposé.`,
    },
    {
      id: 2, key: 'importance', title: 'Pourquoi c\'est important en ingénierie', icon: '⚠️', type: 'importance',
      content: `Les structures réelles comportent de nombreuses membrures inclinées (nœuds de treillis, haubans, contreventements).
- **Calcul de nœuds de treillis** : déterminer les angles entre barres non orthogonales.
- **Relevés topographiques** : calculer la distance entre deux points inaccessibles (méthode de l'intersection).
- **Levés par triangulation** : calcul de réseaux géodésiques.`,
    },
    {
      id: 3, key: 'applications', title: 'Applications réelles sur le terrain', icon: '🏗️', type: 'applications',
      examples: [
        { context: 'Ponts Haubanés', text: 'Calcul des tensions et longueurs des câbles reliant le pylône au tablier avec angles variables.' },
        { context: 'Topographie', text: 'Détermination de la distance AB séparée par un obstacle (rivière, falaise) depuis une base C.' },
        { context: 'Charpente Métallique', text: 'Vérification de l\'écartement entre deux pannes de toiture sur ferme brisée (mansardée).' },
      ],
    },
    {
      id: 4, key: 'theory', title: 'Bases théoriques', icon: '📐', type: 'theory', diagramType: 'trig_interactive',
      content: `Soit un triangle quelconque $ABC$ de côtés $a, b, c$ opposés aux angles $A, B, C$ :

### 1. Théorème d'Al-Kashi (Loi des Cosinus)
$a^2 = b^2 + c^2 - 2bc \\cdot \\cos(A)$

### 2. Loi des Sinus
$\\frac{a}{\\sin(A)} = \\frac{b}{\\sin(B)} = \\frac{c}{\\sin(C)} = 2R$ (où $R$ est le rayon du cercle circonscrit).`,
    },
    {
      id: 5, key: 'formulas', title: 'Formules et équations mathématiques', icon: '🔢', type: 'formulas', diagramType: 'trig_interactive',
      formulas: [
        { name: 'Al-Kashi (Côté a)', latex: 'a = \\sqrt{b^2 + c^2 - 2bc \\cos(A)}', description: 'Calcul du côté opposé à l\'angle connu A' },
        { name: 'Al-Kashi (Angle A)', latex: '\\cos(A) = \\frac{b^2 + c^2 - a^2}{2bc}', description: 'Calcul d\'un angle lorsque les 3 côtés sont connus' },
        { name: 'Loi des Sinus', latex: '\\frac{\\sin(A)}{a} = \\frac{\\sin(B)}{b} = \\frac{\\sin(C)}{c}', description: 'Calcul d\'un côté ou angle par proportionnalité' },
        { name: 'Aire d\'un triangle quelconque', latex: '\\text{Aire} = \\frac{1}{2} a b \\sin(C) = \\sqrt{s(s-a)(s-b)(s-c)}', description: 'Formule trigonométrique et formule d\'Héron (s = demi-périmètre)' },
      ],
    },
    {
      id: 6, key: 'stepbystep', title: 'Démonstrations pas-à-pas', icon: '🔬', type: 'stepbystep',
      problem: 'Un ingénieur géomètre mesure deux distances $b = 120\\text{ m}$, $c = 150\\text{ m}$ et l\'angle formé $A = 40°$. Calculer la distance inaccessible $a$ et l\'angle $B$.',
      steps_demo: [
        { n: 1, text: 'Appliquer Al-Kashi pour calculer a : a² = 120² + 150² - 2(120)(150)cos(40°)' },
        { n: 2, text: 'Calculer les carrés : 120² + 150² = 14400 + 22500 = 36900' },
        { n: 3, text: 'Calculer le terme croisé : 2 × 120 × 150 × cos(40°) = 36000 × 0.76604 = 27577.6' },
        { n: 4, text: 'Déduire a² : a² = 36900 - 27577.6 = 9322.4 ⇒ a = √9322.4 = 96.55 m' },
        { n: 5, text: 'Utiliser la Loi des Sinus pour B : sin(B) = (b · sin(A)) / a = (120 · sin(40°)) / 96.55 = 77.13 / 96.55 = 0.7989' },
        { n: 6, text: 'Calculer B : B = arcsin(0.7989) = 53.03°' },
      ],
      result_latex: 'a = 96{,}55 \\text{ m}, \\quad B = 53{,}03°',
    },
    {
      id: 7, key: 'units', title: 'Unités & Systèmes de mesure', icon: '📏', type: 'units',
      table: [
        { grandeur: 'Angle', si: 'Degrés décimaux (°)', imperial: 'Deg-Min-Sec', conversion: '1° = 60\' = 3600"' },
        { grandeur: 'Distance', si: 'mètres (m)', imperial: 'feet (ft)', conversion: '1 m = 3,2808 ft' },
      ],
      note: 'Attention à l\'ambiguïté de la fonction arcsin (un sinus positif donne deux angles : B ou 180°-B).',
    },
    {
      id: 8, key: 'hypotheses', title: 'Hypothèses d\'application', icon: '📋', type: 'hypotheses',
      items: [
        { type: 'warning', text: 'Vérifier la somme des angles A + B + C = 180° à chaque étape' },
        { type: 'info', text: 'L\'ambiguïté SSA (Côté-Côté-Angle) peut donner 0, 1 ou 2 solutions possibles' },
      ],
    },
    {
      id: 9, key: 'simple_examples', title: 'Exemples simples guidés', icon: '✏️', type: 'examples_simple',
      examples: [
        {
          title: 'Exemple : Nœud de charpente triangulé',
          given: 'a = 5.0 m, b = 7.0 m, c = 10.0 m',
          find: 'Calculer l\'angle C opposé au plus grand côté c',
          solution_latex: '\\cos(C) = \\frac{5^2 + 7^2 - 10^2}{2 \\cdot 5 \\cdot 7} = \\frac{25 + 49 - 100}{70} = \\frac{-26}{70} = -0{,}3714',
          result: 'C = arccos(-0.3714) = 111.80° (Angle obtus)',
        },
      ],
    },
    {
      id: 10, key: 'real_examples', title: 'Exemples réels de bureau d\'études & chantier', icon: '🏢', type: 'examples_real', diagramType: 'trig_interactive',
      examples: [
        {
          context: 'Topographie — Franchissement de rivière',
          scenario: 'Visée de deux berges C1 et C2 depuis une station A. Base AB = 80 m, Angle A = 65°, Angle B = 75°.',
          decomposition_latex: 'C = 180° - 65° - 75° = 40° \\quad \\Rightarrow \\quad AC = \\frac{80 \\cdot \\sin(75°)}{\\sin(40°)} = 120{,}2 \\text{ m}',
          lesson: 'La loi des sinus permet de déterminer les distances de pontage sans traverser la rivière.',
        },
      ],
    },
    { id: 11, key: 'diagrams', title: 'Schémas techniques & diagrammes explicatifs', icon: '📊', type: 'interactive_diagram', diagramType: 'trig_interactive', description: 'Diagramme de résolution de triangles quelconques.', diagram_description: ['Repérage des 3 côtés a, b, c', 'Angles opposés A, B, C'] },
    { id: 12, key: 'mistakes', title: 'Erreurs fréquentes des débutants & pièges à éviter', icon: '⛔', type: 'mistakes', items: [{ mistake: 'Oublier le signe négatif dans cos(C) pour les angles obtus', trap: 'cos(C) < 0 si C > 90°', fix: 'La calculatrice gère le signe négatif automatiquement en arccos' }] },
    { id: 13, key: 'tips', title: 'Astuces et secrets professionnels du terrain', icon: '💡', type: 'tips', tips: ['Utiliser Al-Kashi pour trouver le plus grand angle en premier pour éviter l\'ambiguïté des sinus.'] },
    { id: 14, key: 'norms', title: 'Normes & standards concernés', icon: '📜', type: 'norms', norms: [{ code: 'EN 1993-1-1', description: 'Calcul des assemblages et treillis métalliques' }] },
    { id: 15, key: 'exercises', title: 'Exercices d\'application directe', icon: '✍️', type: 'exercises', exercises: [{ id: 'ex1', number: 1, difficulty: 'Moyen', text: 'Soit un triangle avec a=8m, b=10m, C=60°. Calculer c.', hint: 'c² = a² + b² - 2ab cos(C)', answer_latex: 'c = \\sqrt{64 + 100 - 2(8)(10)(0.5)} = \\sqrt{164 - 80} = \\sqrt{84} = 9{,}17 \\text{ m}', answer_text: 'c = 9.17 m' }] },
    { id: 16, key: 'corrections', title: 'Corrections détaillées pas-à-pas', icon: '✅', type: 'corrections', note: 'Voir les corrections sous chaque exercice.' },
    { id: 17, key: 'quiz', title: 'Quiz d\'évaluation rapide', icon: '🎯', type: 'quiz', questions: [{ id: 'q1', question: 'Quelle est la formule d\'Al-Kashi pour c² ?', options: [{ id: 'a', text: 'a² + b² - 2ab cos(C)' }, { id: 'b', text: 'a² + b²' }], correct: 'a', explanation: 'c² = a² + b² - 2ab cos(C).' }] },
    { id: 18, key: 'exam_questions', title: 'Questions d\'examen universitaire', icon: '🎓', type: 'exam', questions: ['Démontrer la loi des sinus par le calcul de la hauteur h.'] },
    { id: 19, key: 'interview_questions', title: 'Questions d\'entretien d\'embauche technique', icon: '💼', type: 'interview', questions: [{ question: 'Comment calculez-vous la longueur d\'un hauban incliné non perpendiculaire ?', answer_hint: 'Par le théorème d\'Al-Kashi connaissant les hauteurs de pylône et la portée.' }] },
    { id: 20, key: 'practical_case', title: 'Cas pratique professionnel — Scénario réel', icon: '🔧', type: 'practical', diagramType: 'trig_interactive', scenario: 'Calcul de membrure de treillis', description: 'Calcul des longueurs de barres pour une ferme triangulée non symétrique.', resolution_latex_1: 'a = 9{,}17 \\text{ m}', resolution_latex_2: 'B = 53{,}03°', resolution_latex_3: 'C = 60{,}00°', conclusion: 'Structure triangulée vérifiée.' },
    { id: 21, key: 'summary', title: 'Résumé exécutif', icon: '📋', type: 'summary', content: 'Al-Kashi et la loi des sinus permettent de résoudre n\'importe quel système triangulé du génie civil.' },
    { id: 22, key: 'key_points', title: 'Points clés à retenir', icon: '⭐', type: 'keypoints', points: ['Al-Kashi : a² = b² + c² - 2bc cos(A)', 'Loi des sinus : a/sinA = b/sinB = c/sinC'] },
    { id: 23, key: 'self_assessment', title: 'Module de vérification de la compréhension', icon: '🏆', type: 'self_assessment', description: 'Acquis :', objectives: ['Je sais appliquer Al-Kashi', 'Je résous un triangle quelconque'] },
  ],
};

// ── LEÇON 3 : Calcul Vectoriel, Projection de Forces & Équilibre Statique ──────
export const lesson_maths_vectors = {
  moduleId: 1,
  slug: 'maths',
  lessonIndex: 3,
  title: 'Calcul Vectoriel, Projection de Forces & Équilibre Statique',
  subtitle: 'Module 1 — Leçon 3 : Statique & Équilibre des Forces',
  level: 'Intermédiaire',
  duration: '4h',
  diagramType: 'force_decomposition',
  tags: ['Vecteurs', 'Statique', 'Forces', 'Équilibre', 'Produit Scalaire', 'Nœud de Treillis'],

  steps: [
    {
      id: 1, key: 'definition', title: 'Définition simple', icon: '📖', type: 'definition',
      fr: 'Vecteurs & Équilibre Statique', en: 'Vector Mechanics & Static Equilibrium',
      metier: 'Utilisé par les ingénieurs calcul de structures pour déterminer les réactions d\'appui et les efforts internes (N, V, M).',
      content: `Une **force** en génie civil est une grandeur vectorielle définie par son point d'application, sa direction, son sens et son intensité. Le **principe fondamental de la statique** stipule qu'une structure au repos est en équilibre si et seulement si la somme des forces et la somme des moments sont nulles.

- **Composantes cartésiennes** : $F_x = F \\cdot \\cos(\\theta)$ et $F_y = F \\cdot \\sin(\\theta)$.
- **Équilibre statique 2D** : $\\sum F_x = 0$, $\\sum F_y = 0$, $\\sum M_{/O} = 0$.`,
    },
    {
      id: 2, key: 'importance', title: 'Pourquoi c\'est important en ingénierie', icon: '⚠️', type: 'importance',
      content: `Toute la résistance des matériaux (RDM) et la conception des ponts, bâtiments et barrages reposent sur l'équilibre des forces.
- **Réactions d'appui** : calculer les charges transmises aux fondations.
- **Efforts internes** : déterminer la traction et la compression dans les barres de treillis.
- **Stabilité globale** : prévenir le glissement et le basculement sous le vent.`,
    },
    {
      id: 3, key: 'applications', title: 'Applications réelles sur le terrain', icon: '🏗️', type: 'applications',
      examples: [
        { context: 'Grue de Chantier', text: 'Calcul du contrepoids de stabilité pour éviter le basculement sous charge maximale.' },
        { context: 'Halle Métallique', text: 'Calcul des tractions T1 et T2 dans les tirants d\'un nœud de toiture sous charge de neige.' },
        { context: 'Mur de Soutènement', text: 'Vérification de l\'équilibre au glissement sous la poussée des terres.' },
      ],
    },
    {
      id: 4, key: 'theory', title: 'Bases théoriques', icon: '📐', type: 'theory', diagramType: 'force_decomposition',
      content: `### Conditions d'Équilibre Statique en 2D
1. **Équilibre en translation** :
   $$\\sum F_x = 0 \\quad \\text{et} \\quad \\sum F_y = 0$$
2. **Équilibre en rotation** :
   $$\\sum M_{/A} = 0$$

### Produit Scalaire & Produit Vectoriel
- **Produit scalaire** (Travail d'une force) : $\\vec{F} \\cdot \\vec{u} = F \\cdot u \\cdot \\cos(\\theta)$
- **Produit vectoriel** (Moment d'une force) : $\\vec{M}_{/O} = \\vec{r} \\times \\vec{F}$`,
    },
    {
      id: 5, key: 'formulas', title: 'Formules et équations mathématiques', icon: '🔢', type: 'formulas', diagramType: 'force_decomposition',
      formulas: [
        { name: 'Projection horizontale', latex: 'F_x = F \\cos(\\theta)', description: 'Composante de la force sur l\'axe x' },
        { name: 'Projection verticale', latex: 'F_y = F \\sin(\\theta)', description: 'Composante de la force sur l\'axe y' },
        { name: 'Norme du vecteur force', latex: 'F = \\sqrt{F_x^2 + F_y^2}', description: 'Intensité résultante de la force' },
        { name: 'Moment d\'une force par rapport à un point O', latex: 'M_{/O} = F \\cdot d', description: 'd = bras de levier perpendiculaire à la ligne d\'action' },
      ],
    },
    {
      id: 6, key: 'stepbystep', title: 'Démonstrations pas-à-pas', icon: '🔬', type: 'stepbystep',
      problem: 'Un nœud de charpente reçoit une charge verticale descendant P = 50 kN. Il est maintenu par deux barres inclinées à θ1 = 30° et θ2 = 45°. Calculer les efforts de tension T1 et T2.',
      steps_demo: [
        { n: 1, text: 'Écrire l\'équation d\'équilibre sur l\'axe X : T2 · cos(45°) - T1 · cos(30°) = 0' },
        { n: 2, text: 'Exprimer T2 en fonction de T1 : T2 = T1 · (cos(30°) / cos(45°)) = T1 · (0.8660 / 0.7071) = 1.2247 T1' },
        { n: 3, text: 'Écrire l\'équation sur Y : T1 · sin(30°) + T2 · sin(45°) - 50 = 0' },
        { n: 4, text: 'Injecter T2 : T1 · 0.5 + (1.2247 T1) · 0.7071 = 50 ⇒ 0.5 T1 + 0.8660 T1 = 50' },
        { n: 5, text: 'Résoudre T1 : 1.3660 T1 = 50 ⇒ T1 = 36.60 kN' },
        { n: 6, text: 'Déduire T2 : T2 = 1.2247 × 36.60 = 44.82 kN' },
      ],
      result_latex: 'T_1 = 36{,}60 \\text{ kN (Traction)}, \\quad T_2 = 44{,}82 \\text{ kN (Traction)}',
    },
    {
      id: 7, key: 'units', title: 'Unités & Systèmes de mesure', icon: '📏', type: 'units',
      table: [
        { grandeur: 'Force', si: 'kN (Kilonewton)', imperial: 'kips / lbf', conversion: '1 kN = 224.8 lbf' },
        { grandeur: 'Moment', si: 'kN·m', imperial: 'kip·ft', conversion: '1 kN·m = 737.56 lbf·ft' },
      ],
      note: '1 kN correspond approximativement au poids d\'une masse de 100 kg sous la gravité terrestre (g ≈ 9.81 m/s²).',
    },
    {
      id: 8, key: 'hypotheses', title: 'Hypothèses d\'application', icon: '📋', type: 'hypotheses',
      items: [
        { type: 'warning', text: 'Le Principe Fondamental de la Statique suppose que la structure est rigide et parfaitement immobile' },
        { type: 'info', text: 'Pour un treillis articulé, les barres ne travaillent qu\'en traction ou compression axiale pure' },
      ],
    },
    {
      id: 9, key: 'simple_examples', title: 'Exemples simples guidés', icon: '✏️', type: 'examples_simple',
      examples: [
        {
          title: 'Exemple : Décomposition d\'un poids sur un toit à 25°',
          given: 'Poids P = 20 kN, Angle θ = 25°',
          find: 'Composante normale Pn et tangentielle Pt',
          solution_latex: 'P_n = 20 \\cos(25°) = 18{,}13 \\text{ kN}, \\quad P_t = 20 \\sin(25°) = 8{,}45 \\text{ kN}',
          result: 'Pn = 18.13 kN (Pression), Pt = 8.45 kN (Glissement)',
        },
      ],
    },
    { id: 10, key: 'real_examples', title: 'Exemples réels de bureau d\'études & chantier', icon: '🏢', type: 'examples_real', diagramType: 'force_decomposition', examples: [{ context: 'Stabilité d\'un pylône', scenario: 'Calcul de la tension du hauban nécessaire pour compenser un effort de vent W = 35 kN.', decomposition_latex: 'T = \\frac{W}{\\cos(40°)} = \\frac{35}{0.766} = 45{,}7 \\text{ kN}', lesson: 'Le hauban doit être dimensionné pour résister à au moins 45.7 kN avec coefficient de sécurité.' }] },
    { id: 11, key: 'diagrams', title: 'Schémas techniques & diagrammes explicatifs', icon: '📊', type: 'interactive_diagram', diagramType: 'force_decomposition', description: 'Diagramme interactif de décomposition de forces sur plan incliné.', diagram_description: ['Vecteur Poids W (Rouge)', 'Composante Normale Wn (Bleu)', 'Composante Tangentielle Wt (Orange)'] },
    { id: 12, key: 'mistakes', title: 'Erreurs fréquentes des débutants & pièges à éviter', icon: '⛔', type: 'mistakes', items: [{ mistake: 'Oublier le sens des composantes (signes + ou -)', trap: 'Une force vers la gauche a un signe négatif sur l\'axe X', fix: 'Définir clairement le repère orthonormé (O, x, y) avant de projeter' }] },
    { id: 13, key: 'tips', title: 'Astuces et secrets professionnels du terrain', icon: '💡', type: 'tips', tips: ['Toujours placer le centre du repère au nœud étudié pour simplifier l\'écriture des équations.'] },
    { id: 14, key: 'norms', title: 'Normes & standards concernés', icon: '📜', type: 'norms', norms: [{ code: 'Eurocode 3', description: 'Calcul des structures métalliques — Équilibre des assemblages' }] },
    { id: 15, key: 'exercises', title: 'Exercices d\'application directe', icon: '✍️', type: 'exercises', exercises: [{ id: 'ex1', number: 1, difficulty: 'Moyen', text: 'Calculer le moment créé par une force F = 15 kN s\'appliquant à une distance d = 4.5 m.', hint: 'M = F · d', answer_latex: 'M = 15 \\times 4{,}5 = 67{,}5 \\text{ kN·m}', answer_text: 'M = 67.5 kN·m' }] },
    { id: 16, key: 'corrections', title: 'Corrections détaillées pas-à-pas', icon: '✅', type: 'corrections', note: 'Voir les corrections sous les exercices.' },
    { id: 17, key: 'quiz', title: 'Quiz d\'évaluation rapide', icon: '🎯', type: 'quiz', questions: [{ id: 'q1', question: 'Quelle est la condition d\'équilibre en translation sur X ?', options: [{ id: 'a', text: '∑Fx = 0' }, { id: 'b', text: '∑Fx = F' }], correct: 'a', explanation: 'Pour être immobile, la somme algébrique des forces sur X doit être nulle.' }] },
    { id: 18, key: 'exam_questions', title: 'Questions d\'examen universitaire', icon: '🎓', type: 'exam', questions: ['Calculer les réactions d\'appui d\'une poutre bi-appuyée sollicitée par une charge ponctuelle excentrée.'] },
    { id: 19, key: 'interview_questions', title: 'Questions d\'entretien d\'embauche technique', icon: '💼', type: 'interview', questions: [{ question: 'Comment vérifiez-vous l\'équilibre au renversement d\'un mur de soutènement ?', answer_hint: 'Ratio du moment stabilisateur / moment renversant ≥ 1.50.' }] },
    { id: 20, key: 'practical_case', title: 'Cas pratique professionnel — Scénario réel', icon: '🔧', type: 'practical', diagramType: 'force_decomposition', scenario: 'Dimensionnement du contrepoids d\'une grue à tour', description: 'Calcul du moment de renversement et du contrepoids nécessaire.', resolution_latex_1: 'M_{renversement} = 80 \\text{ kN} \\times 25 \\text{ m} = 2000 \\text{ kN·m}', resolution_latex_2: 'P_{contrepoids} = \\frac{2000 \\times 1.5}{10 \\text{ m}} = 300 \\text{ kN}', resolution_latex_3: 'M_{contrepoids} = 3000 \\text{ kN·m} \\ge 3000 \\quad \\checkmark', conclusion: 'Le contrepoids requis est de 30 tonnes (300 kN).'},
    { id: 21, key: 'summary', title: 'Résumé exécutif', icon: '📋', type: 'summary', content: 'L\'équilibre statique (∑F=0, ∑M=0) permet d\'isoler n\'importe quel sous-ensemble de structure et d\'en calculer les forces internes.' },
    { id: 22, key: 'key_points', title: 'Points clés à retenir', icon: '⭐', type: 'keypoints', points: ['∑Fx = 0, ∑Fy = 0, ∑M = 0', 'Fx = F cosθ, Fy = F sinθ', 'Moment M = F · d'] },
    { id: 23, key: 'self_assessment', title: 'Module de vérification de la compréhension', icon: '🏆', type: 'self_assessment', description: 'Acquis :', objectives: ['Je sais projeter des forces', 'Je calcule un moment', 'Je résous l\'équilibre d\'un nœud'] },
  ],
};

// ── LEÇON 4 : Calcul Différentiel & Intégral Appliqué aux Poutres ──────────────
export const lesson_maths_calculus = {
  moduleId: 1,
  slug: 'maths',
  lessonIndex: 4,
  title: 'Calcul Différentiel & Intégral Appliqué aux Poutres',
  subtitle: 'Module 1 — Leçon 4 : Dérivations & Intégrations en RDM',
  level: 'Avancé',
  duration: '5h',
  diagramType: 'rebar_beam',
  tags: ['Calcul Différentiel', 'Intégrales', 'Équation de la Déformée', 'Effort Tranchant', 'Moment Fléchissant', 'Terrassement'],

  steps: [
    {
      id: 1, key: 'definition', title: 'Définition simple', icon: '📖', type: 'definition',
      fr: 'Calcul Différentiel & Intégral appliqué aux Poutres', en: 'Differential & Integral Calculus for Beams',
      metier: 'Formulation fondamentale utilisée par les moteurs de calcul par éléments finis (SAP2000, Robot) pour déterminer les équations de déformée w(x).',
      content: `Le **calcul différentiel et intégral** relie directement la charge répartie $q(x)$, l'effort tranchant $V(x)$, le moment fléchissant $M(x)$ et la déformée de la poutre $w(x)$.

- **Relations différentielles fondamentales** :
  $$q(x) = -\\frac{dV(x)}{dx}, \\quad V(x) = \\frac{dM(x)}{dx}, \\quad EI \\cdot w''(x) = -M(x)$$
- **Calculs d'intégration** : calcul des surfaces de moments, des centres de gravité et des volumes de déblais/remblais en terrassement.`,
    },
    {
      id: 2, key: 'importance', title: 'Pourquoi c\'est important en ingénierie', icon: '⚠️', type: 'importance',
      content: `Comprendre ces équations différentielles permet à l'ingénieur de :
- Déterminer la position exacte du **moment fléchissant maximal** (là où l'effort tranchant s'annule : $V(x) = 0$).
- Calculer la **flèche maximale** $w_{max}$ pour vérifier le critère de déformation à l'ELS ($w \\le L/250$).
- Calculer les **volumes exacts de terrassement** par intégration de profils en travers.`,
    },
    {
      id: 3, key: 'applications', title: 'Applications réelles sur le terrain', icon: '🏗️', type: 'applications',
      examples: [
        { context: 'Poutre de Bâtiment', text: 'Calcul de la courbe de déformée d\'une poutre continue sous charge uniforme.' },
        { context: 'Terrassement Routier', text: 'Calcul du cubage de terre par la méthode des profilés et intégration numérique (Règle de Simpson).' },
        { context: 'Réservoir d\'Eau', text: 'Calcul de la poussée hydrostatique triangulaire p(z) = ρ·g·z et du moment d\'encastrement.' },
      ],
    },
    {
      id: 4, key: 'theory', title: 'Bases théoriques', icon: '📐', type: 'theory', diagramType: 'rebar_beam',
      content: `### Chaîne de Dérivation & Intégration en RDM
$$q(x) \\xrightarrow{\\int} -V(x) \\xrightarrow{\\int} -M(x) \\xrightarrow{\\int} EI \\cdot \\theta(x) \\xrightarrow{\\int} EI \\cdot w(x)$$

1. **Effort tranchant** : $V(x) = V(0) - \\int_0^x q(t) \\, dt$
2. **Moment fléchissant** : $M(x) = M(0) + \\int_0^x V(t) \\, dt$
3. **Pente (rotation)** : $\\theta(x) = \\frac{1}{EI} \\int (-M(x)) \\, dx + C_1$
4. **Déformée (flèche)** : $w(x) = \\int \\theta(x) \\, dx + C_2$`,
    },
    {
      id: 5, key: 'formulas', title: 'Formules et équations mathématiques', icon: '🔢', type: 'formulas', diagramType: 'rebar_beam',
      formulas: [
        { name: 'Relation Charge - Tranchant', latex: '\\frac{dV(x)}{dx} = -q(x)', description: 'La dérivée du tranchant est l\'opposé de la charge' },
        { name: 'Relation Tranchant - Moment', latex: '\\frac{dM(x)}{dx} = V(x)', description: 'Le moment est maximal quand V(x) = 0' },
        { name: 'Équation différentielle de la ligne moyenne', latex: 'EI \\frac{d^2 w(x)}{dx^2} = -M(x)', description: 'Équation d\'Euler-Bernoulli' },
        { name: 'Flèche max poutre travée simple (charge q)', latex: 'w_{max} = \\frac{5 q L^4}{384 E I}', description: 'Flèche au milieu de la portée (x = L/2)' },
        { name: 'Intégration d\'un volume de terrassement', latex: '\\text{Vol} = \\int_{x_1}^{x_2} S(x) \\, dx \\approx \\sum \\frac{S_i + S_{i+1}}{2} \\cdot d_i', description: 'Méthode des aires moyennes' },
      ],
    },
    {
      id: 6, key: 'stepbystep', title: 'Démonstrations pas-à-pas', icon: '🔬', type: 'stepbystep',
      problem: 'Démontrer la formule de la flèche maximale w_max = 5qL⁴ / (384 EI) pour une poutre simplement appuyée sous charge uniforme q.',
      steps_demo: [
        { n: 1, text: 'Réactions d\'appui : RA = RB = qL / 2' },
        { n: 2, text: 'Expression du moment fléchissant : M(x) = (qL/2)·x - (q x²)/2' },
        { n: 3, text: 'Équation différentielle : EI w\'\'(x) = - (qLx/2 - qx²/2) = -qLx/2 + qx²/2' },
        { n: 4, text: 'Première intégration (pente) : EI w\'(x) = -qLx²/4 + qx³/6 + C1' },
        { n: 5, text: 'Seconde intégration (flèche) : EI w(x) = -qLx³/12 + qx⁴/24 + C1 x + C2' },
        { n: 6, text: 'Conditions aux limites : w(0)=0 ⇒ C2=0. w(L)=0 ⇒ -qL⁴/12 + qL⁴/24 + C1 L = 0 ⇒ C1 = qL³/24' },
        { n: 7, text: 'Calcul au milieu x = L/2 : EI w(L/2) = -qL⁴/96 + qL⁴/384 + qL⁴/48 = (5/384) qL⁴ ⇒ w_max = 5qL⁴ / (384 EI)' },
      ],
      result_latex: 'w_{max} = \\frac{5 q L^4}{384 E I} \\quad \\checkmark \\text{ (Formule exacte démontrée)}',
    },
    {
      id: 7, key: 'units', title: 'Unités & Systèmes de mesure', icon: '📏', type: 'units',
      table: [
        { grandeur: 'Rigidité à la flexion EI', si: 'N·mm² ou kN·m²', imperial: 'lbf·in²', conversion: '1 kN·m² = 10⁹ N·mm²' },
        { grandeur: 'Flèche w', si: 'mm (millimètre)', imperial: 'inches (in)', conversion: '1 in = 25.4 mm' },
        { grandeur: 'Volume de terrassement', si: 'm³ (mètre cube)', imperial: 'yd³ (cubic yard)', conversion: '1 m³ = 1.30795 yd³' },
      ],
      note: 'Lors de l\'intégration de la flèche, toujours exprimer E en N/mm² (MPa), I en mm⁴, q en N/mm et L en mm.',
    },
    {
      id: 8, key: 'hypotheses', title: 'Hypothèses d\'application', icon: '📋', type: 'hypotheses',
      items: [
        { type: 'warning', text: 'L\'équation d\'Euler-Bernoulli néglige la déformation due au cisaillement (valable si L/h > 10)' },
        { type: 'info', text: 'La rigidité flexionnelle EI est supposée constante le long de la travée' },
      ],
    },
    {
      id: 9, key: 'simple_examples', title: 'Exemples simples guidés', icon: '✏️', type: 'examples_simple',
      examples: [
        {
          title: 'Exemple : Calcul de flèche sur poutre acier IPE 300',
          given: 'L = 6.0 m, q = 12 kN/m (0.012 N/mm), E = 210 000 MPa, I = 8356 cm⁴ (83.56×10⁶ mm⁴)',
          find: 'Calculer la flèche w_max et vérifier ELS (L/250)',
          solution_latex: 'w_{max} = \\frac{5 \\times 0{,}012 \\times 6000^4}{384 \\times 210000 \\times 83{,}56 \\times 10^6} = \\frac{77{,}76 \\times 10^12}{6{,}734 \\times 10^12} = 11{,}55 \\text{ mm}',
          result: 'w_max = 11.55 mm ≤ L/250 = 24.0 mm — Conforme à l\'ELS ✓',
        },
      ],
    },
    { id: 10, key: 'real_examples', title: 'Exemples réels de bureau d\'études & chantier', icon: '🏢', type: 'examples_real', diagramType: 'rebar_beam', examples: [{ context: 'Projet Routier — Cubage de Déblais', scenario: 'Calcul du volume de sol à caver sur un tronçon de 500 m découpé en 5 profils.', decomposition_latex: 'V_{sol} = \\sum \\frac{S_i + S_{i+1}}{2} \\cdot d_i = 14\\,250 \\text{ m}^3', lesson: 'L\'intégration des profils permet d\'établir le bilan des mouvements de terres (Déblais/Remblais).' }] },
    { id: 11, key: 'diagrams', title: 'Schémas techniques & diagrammes explicatifs', icon: '📊', type: 'interactive_diagram', diagramType: 'rebar_beam', description: 'Courbes comparatives des sollicitations M(x), V(x) et déformée w(x).', diagram_description: ['V(x) = dM/dx', 'M_max situé là où V(x) = 0'] },
    { id: 12, key: 'mistakes', title: 'Erreurs fréquentes des débutants & pièges à éviter', icon: '⛔', type: 'mistakes', items: [{ mistake: 'Mélanger les mètres et millimètres dans l\'équation de la flèche', trap: 'Calculer L⁴ en mètres et E en N/mm²', fix: 'Convertir impérativement toutes les longueurs en mm avant calcul !' }] },
    { id: 13, key: 'tips', title: 'Astuces et secrets professionnels du terrain', icon: '💡', type: 'tips', tips: ['Retenir : La dérivée du moment donne l\'effort tranchant ; le zéro du tranchant donne le sommet de parabole du moment.'] },
    { id: 14, key: 'norms', title: 'Normes & standards concernés', icon: '📜', type: 'norms', norms: [{ code: 'Eurocode 3 (EN 1993-1-1)', description: 'Limites de flèches ELS w_max ≤ L/250 (courant) ou L/350 (exigeant)' }] },
    { id: 15, key: 'exercises', title: 'Exercices d\'application directe', icon: '✍️', type: 'exercises', exercises: [{ id: 'ex1', number: 1, difficulty: 'Difficile', text: 'Une poutre console de longueur L = 3 m supporte une charge ponctuelle F = 20 kN à son extrémité. Calculer la flèche w à l\'extrémité.', hint: 'w = F L³ / (3 EI)', answer_latex: 'w = \\frac{F L^3}{3 E I}', answer_text: 'w = F L³ / (3 EI)' }] },
    { id: 16, key: 'corrections', title: 'Corrections détaillées pas-à-pas', icon: '✅', type: 'corrections', note: 'Voir les corrections sous les exercices.' },
    { id: 17, key: 'quiz', title: 'Quiz d\'évaluation rapide', icon: '🎯', type: 'quiz', questions: [{ id: 'q1', question: 'Quelle est la dérivée de l\'effort tranchant V(x) ?', options: [{ id: 'a', text: '-q(x)' }, { id: 'b', text: 'M(x)' }], correct: 'a', explanation: 'dV(x)/dx = -q(x).' }] },
    { id: 18, key: 'exam_questions', title: 'Questions d\'examen universitaire', icon: '🎓', type: 'exam', questions: ['Intégrer l\'équation d\'Euler-Bernoulli pour une poutre encastrée-appuyée (structure hyperstatique).'] },
    { id: 19, key: 'interview_questions', title: 'Questions d\'entretien d\'embauche technique', icon: '💼', type: 'interview', questions: [{ question: 'Comment trouvez-vous l\'emplacement du moment fléchissant maximal sur une poutre sollicitée par une charge trapézoïdale ?', answer_hint: 'En annulant l\'effort tranchant V(x) = 0 par résolution d\'équation du second degré.' }] },
    { id: 20, key: 'practical_case', title: 'Cas pratique professionnel — Scénario réel', icon: '🔧', type: 'practical', diagramType: 'rebar_beam', scenario: 'Vérification de la flèche d\'un plancher de bureau', description: 'Portée L = 7.50 m, charge q = 18 kN/m. Poutre béton armé 30×60 cm.', resolution_latex_1: 'I = \\frac{b h^3}{12} = \\frac{300 \\times 600^3}{12} = 5{,}40 \\times 10^9 \\text{ mm}^4', resolution_latex_2: 'E_cd = 32000 / 1.5 = 21333 \\text{ MPa}', resolution_latex_3: 'w_{max} = \\frac{5 \\times 0.018 \\times 7500^4}{384 \\times 21333 \\times 5.40 \\times 10^9} = 6{,}44 \\text{ mm} \\le 30.0 \\text{ mm}', conclusion: 'Flèche 6.44 mm très inférieure à la limite ELS L/250 (30 mm). Structure validée.' },
    { id: 21, key: 'summary', title: 'Résumé exécutif', icon: '📋', type: 'summary', content: 'Le calcul différentiel relie les charges, les sollicitations internes (V, M) et les déformations (w) de manière analytique exacte.' },
    { id: 22, key: 'key_points', title: 'Points clés à retenir', icon: '⭐', type: 'keypoints', points: ['q = -dV/dx', 'V = dM/dx', 'EI w\'\' = -M', 'w_max = 5qL⁴/384EI'] },
    { id: 23, key: 'self_assessment', title: 'Module de vérification de la compréhension', icon: '🏆', type: 'self_assessment', description: 'Acquis :', objectives: ['Je sais dériver M(x) pour trouver V(x)', 'Je sais calculer la flèche w_max', 'Je valide le critère ELS'] },
  ],
};

// Export all Module 1 lessons as an ordered list
export const module1Lessons = [
  lesson_maths_trig,
  lesson_maths_advanced_trig,
  lesson_maths_vectors,
  lesson_maths_calculus,
];
