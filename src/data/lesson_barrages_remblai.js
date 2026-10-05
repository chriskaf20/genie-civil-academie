// ── Lesson: Barrages en remblai — Module 18 ──────────────────────────────────
import { buildLesson } from './build_lesson.js';

export const lesson_barrages_remblai = buildLesson({
  moduleId: 18,
  slug: 'barrages_remblai',
  lessonIndex: 2,
  title: "Barrages en Remblai : Conception, Écoulements, Filtres, Revanche & Érosion Interne",
  subtitle: 'Module 18 — Conception & Sécurité des Barrages',
  level: 'Avancé',
  duration: '10h',
  diagramType: 'soil_profile',
  tags: ['Barrages', 'Remblai', 'Noyau', 'Réseau d’écoulement', 'Filtres', 'Revanche', 'Érosion interne'],
}, {
  definition: {
    title: 'Définition — Retenir l’eau avec de la terre et des enrochements',
    fr: 'Barrage en remblai (terre et enrochements)',
    en: 'Embankment dam',
    metier: "Utilisée par les ingénieurs barrages et géotechniciens, les maîtres d'ouvrage hydroélectriques et agricoles et les services de contrôle de la sécurité des ouvrages hydrauliques.",
    content: `Un **barrage en remblai** est construit avec des matériaux naturels (terre, graviers, enrochements) compactés. C'est le type de barrage le plus répandu dans le monde : il s'adapte aux fondations médiocres et utilise les matériaux du site.

### Les grands types
- **Homogène** : un seul matériau peu perméable (argile, limon), avec un drain aval.
- **À noyau** : un noyau central étanche en argile, protégé par des **filtres** et entouré de recharges perméables (graviers, enrochements).
- **À masque amont** : un écran étanche en béton ou en bitume sur le parement amont d'un remblai d'enrochements.

### Les ennemis du barrage en remblai
1. La **submersion** (déversement par-dessus la crête) : l'érosion détruit rapidement l'ouvrage ; d'où une **revanche** suffisante et un évacuateur de crues bien dimensionné.
2. L'**érosion interne** (renard) : l'eau entraîne les particules fines à travers le remblai ou la fondation.
3. Le **glissement des talus**, notamment lors des vidanges rapides.

> 💡 La moitié environ des ruptures de barrages en remblai est due à la submersion, une grande partie du reste à l'érosion interne.`,
  },
  importance: {
    content: `- **Sécurité publique** : une rupture libère une onde de submersion dévastatrice à l'aval.
- **Fiabilité** : les filtres et drains, invisibles, conditionnent la sécurité pendant toute la vie de l'ouvrage.
- **Économie** : utiliser les matériaux du site réduit fortement le coût et l'impact environnemental.
- **Réglementation** : en France, les barrages sont classés (A, B, C) et soumis à des obligations de surveillance.

> ⚠️ **À retenir** : un barrage en remblai ne doit jamais être submergé ; l'évacuateur de crues est un organe vital.`,
  },
  applications: {
    examples: [
      ['Retenue collinaire agricole', 'Barrage homogène de 10 à 15 m en limon argileux compacté, drain-tapis aval.'],
      ['Grand barrage hydroélectrique', 'Enrochements avec noyau argileux ou masque en béton (CFRD), hauteurs supérieures à 100 m.'],
      ['Digue de protection contre les crues', 'Remblai long et peu élevé, sensible à l’érosion interne et aux terriers.'],
      ['Bassin de stockage de résidus miniers', 'Digues rehaussées par étapes, risques de liquéfaction.'],
      ['Réhabilitation', 'Ajout d’un drain aval et d’un filtre pour stopper des fuites chargées.'],
    ],
  },
  theory: {
    title: 'Théorie — Écoulements, filtres et revanche',
    content: `### 1. Écoulement à travers le remblai
L'eau traverse lentement le remblai selon la loi de Darcy. Un **réseau d'écoulement** (lignes de courant et équipotentielles) permet d'estimer le débit de fuite par mètre de largeur :
$$q = k \\cdot H \\cdot \\frac{N_f}{N_d}$$
$N_f$ : nombre de tubes de courant ; $N_d$ : nombre de chutes de potentiel.

### 2. Filtres : règles de Terzaghi
Un filtre doit retenir les grains du sol protégé tout en laissant passer l'eau :
- **rétention** : $D_{15,filtre} \\le 4 \\text{ à } 5 \\times d_{85,sol}$ ;
- **perméabilité** : $D_{15,filtre} \\ge 4 \\text{ à } 5 \\times d_{15,sol}$.

### 3. Talus
Pentes usuelles : 2,5H/1V à 3,5H/1V selon les matériaux. La stabilité se vérifie en fin de construction, en retenue pleine (écoulement établi) et en **vidange rapide** (cas souvent critique pour le talus amont).

### 4. Revanche
Hauteur entre le plan d'eau maximal et la crête : elle couvre les vagues soulevées par le vent, leur déferlement sur le talus, et les tassements. Formule empirique de Stevenson-Molitor pour la hauteur des vagues :
$$h_v = 0{,}032\\sqrt{F \\cdot U} + 0{,}76 - 0{,}26\\,F^{1/4}$$
($h_v$ en m, $F$ fetch en km, $U$ vitesse du vent en km/h).`,
  },
  formulas: {
    title: 'Formules essentielles — Barrages en remblai',
    formulas: [
      {
        name: 'Débit de fuite par réseau d’écoulement',
        latex: "q = k \\cdot H \\cdot \\frac{N_f}{N_d}",
        description: 'Débit par mètre de longueur de barrage.',
        vars: [
          ['q', 'Débit de fuite', 'm³/s/m', 'Par mètre de longueur de digue.'],
          ['k', 'Perméabilité', 'm/s', 'Noyau argileux 10⁻⁹ à 10⁻⁷ ; recharges 10⁻⁴ à 10⁻².'],
          ['H', 'Charge hydraulique', 'm', 'Différence entre retenue et aval.'],
          ['N_f, N_d', 'Tubes de courant et chutes de potentiel', '-', 'Lus sur le réseau tracé.'],
        ],
      },
      {
        name: 'Règles de filtre de Terzaghi',
        latex: "4\\,d_{15,sol} \\le D_{15,filtre} \\le 4\\,d_{85,sol}",
        description: 'Le filtre retient le sol (borne haute) et reste perméable (borne basse).',
        vars: [
          ['D_{15,filtre}', 'Diamètre à 15 % de passant du filtre', 'mm', 'Diamètre caractéristique du filtre.'],
          ['d_{15,sol}, d_{85,sol}', 'Diamètres à 15 % et 85 % de passant du sol', 'mm', 'Sol protégé (noyau).'],
        ],
        rule: "Un filtre trop grossier laisse partir le noyau ; un filtre trop fin se met en pression.",
      },
      {
        name: 'Hauteur des vagues (Stevenson-Molitor)',
        latex: "h_v = 0{,}032\\sqrt{F \\cdot U} + 0{,}76 - 0{,}26\\,F^{1/4}",
        description: 'Formule empirique (F en km, U en km/h, h_v en m).',
        vars: [
          ['h_v', 'Hauteur des vagues', 'm', 'Vagues générées par le vent sur la retenue.'],
          ['F', 'Fetch', 'km', 'Longueur de plan d’eau sur laquelle souffle le vent.'],
          ['U', 'Vitesse du vent', 'km/h', 'Vent de projet.'],
        ],
      },
      {
        name: 'Gradient de sortie et sécurité au renard',
        latex: "i_s = \\frac{\\Delta h}{\\Delta l} \\qquad F_s = \\frac{i_{crit}}{i_s} \\quad (i_{crit} \\approx 1)",
        description: 'Vérification à la sortie des écoulements au pied aval.',
        vars: [
          ['i_s', 'Gradient de sortie', '-', 'Perte de charge du dernier carreau du réseau.'],
          ['F_s', 'Coefficient de sécurité', '-', 'Souvent ≥ 3 à 4 visé sans filtre.'],
        ],
      },
    ],
  },
  stepbystep: {
    title: 'Calcul complet — Fuites et filtre d’un barrage à noyau',
    problem: "Barrage de 300 m de long, charge H = 20 m, noyau argileux k = 10⁻⁷ m/s. Le réseau d'écoulement dans le noyau compte N_f = 4 tubes et N_d = 12 chutes. Le noyau a d₁₅ = 0,005 mm et d₈₅ = 0,08 mm. Calculer le débit de fuite et définir le filtre aval.",
    steps_demo: [
      { n: 1, text: "Débit par mètre : q = 10⁻⁷ × 20 × 4/12 = 6,7 × 10⁻⁷ m³/s/m." },
      { n: 2, text: "Débit total : Q = 6,7 × 10⁻⁷ × 300 = 2,0 × 10⁻⁴ m³/s = 0,2 L/s." },
      { n: 3, text: "Rétention : D₁₅ du filtre ≤ 4 × 0,08 = 0,32 mm." },
      { n: 4, text: "Perméabilité : D₁₅ du filtre ≥ 4 × 0,005 = 0,02 mm." },
      { n: 5, text: "Choix : sable propre avec D₁₅ ≈ 0,15 à 0,25 mm, sans fines plastiques ; protégé à son tour par un drain en graviers respectant les mêmes règles." },
    ],
    result_latex: "Q = 10^{-7} \\times 20 \\times \\frac{4}{12} \\times 300 = 2{,}0 \\times 10^{-4}\\ \\text{m}^3/\\text{s} \\qquad 0{,}02 \\le D_{15,filtre} \\le 0{,}32\\ \\text{mm}",
  },
  units: {
    table: [
      ['Perméabilité', 'm/s', 'ft/day', '10⁻⁷ m/s ≈ 0,028 ft/day'],
      ['Débit de fuite', 'L/s', 'gpm', '1 L/s = 15,85 gpm'],
      ['Diamètres de grains', 'mm', 'in', 'Courbe granulométrique : d₁₅, d₅₀, d₈₅'],
      ['Fetch', 'km', 'mi', '1 mi = 1,609 km'],
      ['Volume de retenue', 'hm³ (millions de m³)', 'acre-ft', '1 hm³ = 811 acre-ft'],
    ],
    note: 'Un débit de fuite stable et clair est normal ; un débit croissant ou chargé de particules est un signe d’alerte majeur.',
  },
  hypotheses: {
    items: [
      ['info', 'Le réseau d’écoulement suppose un milieu homogène, saturé, en régime permanent.'],
      ['info', 'Les règles de Terzaghi conviennent aux sols granulaires ; les sols dispersifs et argiles demandent des critères spécifiques.'],
      ['warning', 'Les conduites traversant le remblai (vidange, prise d’eau) sont des chemins préférentiels d’érosion interne.'],
      ['warning', 'Les terriers d’animaux et les racines d’arbres créent des renards sur les digues.'],
      ['tip', 'Un drain cheminée et un tapis drainant aval contrôlent la ligne de saturation et protègent le talus aval.'],
    ],
  },
  simple_examples: {
    examples: [
      {
        title: 'Exemple 1 : hauteur des vagues',
        given: 'Fetch 2 km, vent 80 km/h',
        find: 'h_v',
        solution_latex: "h_v = 0{,}032\\sqrt{160} + 0{,}76 - 0{,}26 \\times 2^{1/4} = 0{,}405 + 0{,}76 - 0{,}309 = 0{,}86\\ \\text{m}",
        result: '≈ 0,86 m de vagues, plus le déferlement sur le talus : revanche de l’ordre de 1,5 à 2 m.',
      },
      {
        title: 'Exemple 2 : débit d’un barrage homogène',
        given: 'k = 5 × 10⁻⁸ m/s, H = 12 m, N_f/N_d = 3/9, longueur 200 m',
        find: 'Q',
        solution_latex: "Q = 5 \\times 10^{-8} \\times 12 \\times \\frac{3}{9} \\times 200 = 4 \\times 10^{-5}\\ \\text{m}^3/\\text{s}",
        result: '0,04 L/s : fuite faible, à suivre dans le temps.',
      },
      {
        title: 'Exemple 3 : gradient de sortie',
        given: 'Perte de charge de 0,5 m sur le dernier carreau de 1,2 m',
        find: 'i_s et F_s',
        solution_latex: "i_s = \\frac{0{,}5}{1{,}2} = 0{,}42 \\qquad F_s = \\frac{1}{0{,}42} = 2{,}4",
        result: 'F_s = 2,4 : insuffisant sans filtre ; prévoir un filtre et un drain au pied aval.',
      },
    ],
  },
  real_examples: {
    title: 'Exemple réel — Rupture du barrage de Teton (États-Unis, 1976)',
    examples: [
      {
        context: 'Barrage en terre de 93 m, première mise en eau',
        scenario: "Des fuites sont apparues en rive droite puis se sont rapidement agrandies : l'érosion interne du noyau, à travers des fissures de la fondation rocheuse mal traitées et sans filtre adapté, a créé un renard. Le barrage s'est rompu en quelques heures (11 morts, d'importants dégâts).",
        decomposition_latex: "\\text{Fondation fissurée} + \\text{noyau érodable sans filtre} \\Rightarrow \\text{renard} \\Rightarrow \\text{brèche}",
        lesson: "Les filtres sont l'assurance-vie des barrages en remblai ; la fondation doit être traitée (injections, tapis) et la première mise en eau étroitement surveillée.",
      },
    ],
  },
  diagrams: {
    title: 'Schéma de principe — Coupe d’un barrage à noyau',
    diagram_description: [
      'Retenue et protection du talus amont (enrochements de protection contre les vagues)',
      'Recharge amont perméable',
      'Noyau central argileux étanche',
      'Filtre et drain cheminée aval protégeant le noyau',
      'Tapis drainant et pied aval drainant',
      'Fondation traitée : tranchée d’ancrage, injections, voile d’étanchéité',
    ],
  },
  mistakes: {
    items: [
      ['Revanche insuffisante', 'Risque de submersion en crue ou par vagues', 'Dimensionner évacuateur et revanche ensemble (crue de projet + vagues + tassements).'],
      ['Filtre non conforme aux critères', 'Érosion interne du noyau', 'Contrôler la granulométrie des filtres à chaque livraison.'],
      ['Conduite enterrée sans dispositif anti-renard', 'Écoulement préférentiel le long de la conduite', 'Filtres autour des conduites, compactage soigné, pas de colliers rigides.'],
    ],
  },
  tips: {
    tips: [
      'Mesurez séparément les débits de fuite rive gauche, rive droite et fond pour localiser une anomalie.',
      'Un drain aval visible permet de vérifier que l’eau reste claire.',
      'Évitez les arbres sur les digues : leurs racines créent des chemins d’eau.',
      'La première mise en eau doit se faire par paliers, avec une auscultation renforcée.',
    ],
  },
  norms: {
    norms: [
      ['Code de l’environnement (décret 2015-526)', 'Classement des barrages et obligations de sécurité.'],
      ['Recommandations du CFBR', 'Justification de la stabilité des barrages et digues en remblai.'],
      ['Bulletins de la CIGB (ICOLD)', 'Filtres, érosion interne, barrages en remblai.'],
      ['NF EN 1997-1', 'Eurocode 7 : stabilité des pentes et ouvrages en terre.'],
    ],
  },
  exercises: {
    exercises: [
      {
        level: 1,
        text: 'Calculer le débit de fuite par mètre pour k = 2 × 10⁻⁷ m/s, H = 15 m, N_f = 3, N_d = 10.',
        hint: 'q = kH N_f/N_d.',
        answer_latex: "q = 2 \\times 10^{-7} \\times 15 \\times 0{,}3 = 9 \\times 10^{-7}\\ \\text{m}^3/\\text{s/m}",
        answer_text: '9 × 10⁻⁷ m³/s par mètre.',
      },
      {
        level: 2,
        text: 'Un noyau a d₁₅ = 0,01 mm et d₈₅ = 0,15 mm. Donner la plage de D₁₅ du filtre.',
        hint: '4 d₁₅ ≤ D₁₅ ≤ 4 d₈₅.',
        answer_latex: "0{,}04\\ \\text{mm} \\le D_{15,filtre} \\le 0{,}60\\ \\text{mm}",
        answer_text: 'D₁₅ du filtre entre 0,04 et 0,60 mm.',
      },
      {
        level: 3,
        text: 'Calculer la hauteur des vagues pour un fetch de 5 km et un vent de 100 km/h.',
        hint: '5^(1/4) = 1,495.',
        answer_latex: "h_v = 0{,}032\\sqrt{500} + 0{,}76 - 0{,}26 \\times 1{,}495 = 0{,}716 + 0{,}76 - 0{,}389 = 1{,}09\\ \\text{m}",
        answer_text: '≈ 1,1 m.',
      },
    ],
  },
  quiz: {
    title: 'Quiz — Barrages en remblai',
    questions: [
      { q: 'Quelle est la cause la plus fréquente de rupture des barrages en remblai ?', options: ['Le séisme', 'La submersion', 'Le gel'], correct: 1, explain: 'Un remblai submergé s’érode très vite : environ la moitié des ruptures.' },
      { q: 'À quoi sert un filtre ?', options: ['À retenir les grains du noyau tout en laissant passer l’eau', 'À étancher le barrage', 'À protéger des vagues'], correct: 0, explain: 'Il empêche l’érosion interne sans créer de surpression.' },
      { q: 'Quel cas est souvent critique pour le talus amont ?', options: ['Fin de construction', 'Vidange rapide', 'Retenue vide depuis longtemps'], correct: 1, explain: 'Les pressions d’eau restent dans le remblai alors que l’eau extérieure a disparu.' },
    ],
  },
  exam_questions: {
    questions: [
      'Présentez les types de barrages en remblai et leurs organes d’étanchéité et de drainage.',
      'Tracez un réseau d’écoulement simplifié et calculez le débit de fuite.',
      'Expliquez le mécanisme d’érosion interne et le rôle des filtres (règles de Terzaghi).',
    ],
  },
  interview_questions: {
    questions: [
      ['Des fuites troubles apparaissent au pied d’une digue. Que faites-vous ?', "C'est un signe d'érosion interne possiblement grave : alerte immédiate, abaissement de la retenue si possible, surveillance renforcée et continue, mise en place d'une recharge filtrante au point de sortie (filtre inversé + lest), et information des autorités selon le plan de gestion des crises."],
      ['Pourquoi les barrages en remblai sont-ils si répandus ?', "Ils utilisent les matériaux du site, s'adaptent aux fondations médiocres (sols, roches altérées), sont économiques et se construisent avec des engins de terrassement classiques."],
    ],
  },
  practical_case: {
    title: 'Cas pratique — Revanche d’une retenue collinaire',
    scenario: 'Retenue de 12 m de hauteur, fetch 1,2 km, vent de projet 90 km/h ; crue de projet : surélévation de 0,9 m au-dessus de la retenue normale ; tassement prévisible de la crête : 0,15 m.',
    description: 'Déterminer la revanche et la cote de crête.',
    resolutions: [
      "h_v = 0{,}032\\sqrt{108} + 0{,}76 - 0{,}26 \\times 1{,}2^{1/4} = 0{,}333 + 0{,}76 - 0{,}272 = 0{,}82\\ \\text{m}",
      "\\text{Revanche au-dessus des plus hautes eaux : } \\approx 1{,}5 \\times h_v + \\text{tassement} = 1{,}23 + 0{,}15 = 1{,}38\\ \\text{m}",
      "\\text{Crête} = \\text{RN} + 0{,}90 + 1{,}38 \\approx \\text{RN} + 2{,}3\\ \\text{m}",
    ],
    conclusion: 'La crête est calée environ 2,3 m au-dessus de la retenue normale ; un parement amont protégé par enrochements limite le déferlement.',
  },
  summary: {
    content: `### Les barrages en remblai en 5 points
1. Homogène, à noyau, à masque amont.
2. Débit de fuite : $q = kH N_f/N_d$.
3. Filtres de Terzaghi : $4 d_{15} \\le D_{15} \\le 4 d_{85}$.
4. Talus vérifiés en fin de construction, retenue pleine et vidange rapide.
5. Revanche + évacuateur : jamais de submersion.`,
  },
  key_points: {
    points: [
      'q = k·H·N_f/N_d',
      'Filtres : 4 d₁₅ ≤ D₁₅ ≤ 4 d₈₅',
      'Pentes 2,5H/1V à 3,5H/1V',
      'Submersion et érosion interne : causes majeures de rupture',
      'Fuites troubles = alerte',
    ],
  },
  self_assessment: {
    objectives: [
      'Je connais les types de barrages en remblai',
      'Je sais estimer un débit de fuite par réseau d’écoulement',
      'Je sais dimensionner un filtre selon Terzaghi',
      'Je sais calculer une revanche',
      "J'ai réussi le quiz avec au moins 2 bonnes réponses sur 3",
    ],
  },
});
