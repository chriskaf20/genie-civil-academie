// ── Lesson: Aires de mouvement et servitudes aéronautiques — Module 19 ────────
import { buildLesson } from './build_lesson.js';

export const lesson_aeroports_aires = buildLesson({
  moduleId: 19,
  slug: 'aeroports_aires',
  lessonIndex: 2,
  title: "Aires de Mouvement : Orientation des Pistes, Voies de Circulation, Aires de Trafic & Servitudes",
  subtitle: 'Module 19 — Infrastructures Aéroportuaires',
  level: 'Avancé',
  duration: '9h',
  diagramType: 'road_profile',
  tags: ['Aéroports', 'Coefficient d’utilisation', 'Vent traversier', 'Voies de circulation', 'Aires de trafic', 'Servitudes', 'Code de référence OACI'],
}, {
  definition: {
    title: 'Définition — Tout ce qui permet aux avions de rouler et stationner',
    fr: 'Aires de mouvement d’un aérodrome',
    en: 'Aerodrome movement area',
    metier: "Utilisée par les ingénieurs aéroportuaires, les gestionnaires d'aéroports, les autorités de l'aviation civile et les bureaux d'études en infrastructures.",
    content: `L'**aire de mouvement** comprend les **pistes** (décollage et atterrissage), les **voies de circulation** (taxiways) et les **aires de trafic** (parkings avions, postes de stationnement). Sa conception suit les normes de l'OACI (Annexe 14).

### Le code de référence d'aérodrome
L'OACI classe les aérodromes par un **chiffre de code** (1 à 4, selon la longueur de piste de référence de l'avion) et une **lettre de code** (A à F, selon l'envergure de l'avion). Par exemple, un A320 relève de la lettre C, un A380 de la lettre F. Ce code fixe largeurs de pistes et de voies, distances de séparation et marges.

### Orientation des pistes
Les avions décollent et atterrissent face au vent ; une piste doit offrir un **coefficient d'utilisation** d'au moins 95 % : la part du temps où la composante de vent traversier reste admissible.

### Servitudes aéronautiques
Des **surfaces de limitation d'obstacles** (surface d'approche, surface de transition, surface horizontale intérieure…) limitent la hauteur des constructions autour de l'aéroport.

> 💡 Les numéros peints en bout de piste indiquent son orientation magnétique en dizaines de degrés : la piste 09 est orientée vers l'est (90°).`,
  },
  importance: {
    content: `- **Sécurité** : vents traversiers, obstacles et distances de séparation conditionnent la sécurité des mouvements.
- **Capacité** : la configuration des voies de sortie rapide et des aires de trafic fixe le nombre de mouvements par heure.
- **Urbanisme** : les servitudes aéronautiques et le bruit contraignent les constructions alentour.
- **Coût** : les chaussées aéronautiques (pistes, voies, aires) représentent l'essentiel de l'investissement d'infrastructure.

> ⚠️ **À retenir** : un obstacle (grue, immeuble, antenne) qui perce une surface de limitation peut entraîner des restrictions d'exploitation de la piste.`,
  },
  applications: {
    examples: [
      ['Aéroport régional', 'Choix de l’orientation d’une piste unique à partir de la rose des vents.'],
      ['Extension d’aérogare', 'Ajout de postes de stationnement et de voies de desserte pour avions de lettre C.'],
      ['Grand aéroport', 'Voies de sortie rapide à 30° pour réduire le temps d’occupation de piste.'],
      ['Permis de construire', 'Vérification d’un immeuble sous les surfaces de dégagement.'],
      ['Réception d’un A380', 'Élargissement des accotements et renforcement des voies (lettre F).'],
    ],
  },
  theory: {
    title: 'Théorie — Vent, géométrie et dégagements',
    content: `### 1. Composantes du vent
Pour un vent de vitesse $V$ faisant un angle $\\theta$ avec l'axe de la piste :
$$V_{trav} = V \\sin\\theta \\qquad V_{face} = V \\cos\\theta$$
L'OACI retient des composantes traversières admissibles de 10, 13 ou 20 nœuds selon la longueur de référence de l'avion.

### 2. Coefficient d'utilisation
$$CU = \\frac{\\text{temps avec } V_{trav} \\le V_{trav,adm}}{\\text{temps total}} \\ge 95\\,\\%$$
Il se calcule à partir de la **rose des vents** (statistiques de fréquence par direction et vitesse). Si une seule piste ne suffit pas, on ajoute une piste sécante.

### 3. Géométrie de l'aire de mouvement
- Largeur de piste : 45 m pour les codes 4 (lettres D à F), 30 m pour la lettre C de code 3 ou 4 dans les cas courants.
- Bande de piste et aires de sécurité d'extrémité de piste (RESA) dégagées d'obstacles.
- Voies de circulation reliées par des **voies de sortie rapide** (angle de 25 à 45°, souvent 30°).

### 4. Surfaces de limitation d'obstacles
La **surface d'approche** monte à partir du seuil avec une pente de 2 % (pistes aux instruments, première section) : un obstacle à la distance $d$ du début de la surface ne doit pas dépasser $h = 0{,}02 \\, d$ au-dessus du seuil.`,
  },
  formulas: {
    title: 'Formules essentielles — Aires de mouvement',
    formulas: [
      {
        name: 'Composantes du vent',
        latex: "V_{trav} = V \\sin\\theta \\qquad V_{face} = V \\cos\\theta",
        description: 'Décomposition du vent selon l’axe de la piste.',
        vars: [
          ['V_{trav}', 'Composante traversière', 'kt', 'Limitée à 10, 13 ou 20 nœuds selon l’avion.'],
          ['V_{face}', 'Composante de face (ou arrière si négative)', 'kt', 'Favorable au décollage et à l’atterrissage.'],
          ['V', 'Vitesse du vent', 'kt', '1 kt = 1,852 km/h.'],
          ['\\theta', 'Angle vent / axe de piste', '°', 'Entre 0 et 90°.'],
        ],
      },
      {
        name: "Coefficient d'utilisation",
        latex: "CU = \\frac{\\sum_{V_{trav} \\le V_{adm}} p_i}{\\sum p_i} \\ge 95\\,\\%",
        description: 'Somme des fréquences des vents acceptables sur la fréquence totale.',
        vars: [
          ['CU', "Coefficient d'utilisation", '%', '≥ 95 % exigé par l’OACI.'],
          ['p_i', 'Fréquence de la classe de vent i', '%', 'Issue de la rose des vents (≥ 5 ans de mesures).'],
        ],
      },
      {
        name: 'Hauteur maximale sous une surface d’approche',
        latex: "h_{max} = p \\cdot d",
        description: 'Hauteur admissible au-dessus du seuil à une distance d du début de la surface.',
        vars: [
          ['h_{max}', 'Hauteur maximale', 'm', 'Au-dessus de l’altitude du seuil.'],
          ['p', 'Pente de la surface', '-', '0,02 (2 %) pour la première section d’une approche aux instruments.'],
          ['d', 'Distance', 'm', 'Depuis le début de la surface d’approche.'],
        ],
        rule: "À 3 km du début de la surface d'approche, la hauteur limite est déjà de 60 m.",
      },
      {
        name: "Numéro de piste",
        latex: "N = \\text{arrondi}\\left(\\frac{\\text{QFU magnétique}}{10}\\right)",
        description: 'Désignation peinte au seuil (deux chiffres).',
        vars: [
          ['N', 'Numéro de piste', '-', 'De 01 à 36 ; les deux sens diffèrent de 18.'],
          ['QFU', 'Orientation magnétique de la piste', '°', 'Mesurée depuis le nord magnétique.'],
        ],
      },
    ],
  },
  stepbystep: {
    title: 'Calcul complet — Vent traversier sur une piste 09/27',
    problem: "Une piste orientée 090°/270° reçoit un vent du 130° de 25 nœuds. Les avions qui l'utilisent admettent 20 nœuds de vent traversier. Calculer les composantes et choisir le sens d'utilisation.",
    steps_demo: [
      { n: 1, text: "Angle vent / axe : 130° − 90° = 40°." },
      { n: 2, text: "Composante traversière : 25 × sin 40° = 25 × 0,643 = 16,1 kt ≤ 20 kt : acceptable." },
      { n: 3, text: "Composante longitudinale : 25 × cos 40° = 19,2 kt." },
      { n: 4, text: "Sens d'utilisation : le vent vient du sud-est, donc de face pour un avion orienté au 090° → piste 09 en service." },
      { n: 5, text: "Sur la piste 27, ce serait 19,2 kt de vent arrière, inacceptable (limite usuelle ≈ 10 kt)." },
    ],
    result_latex: "V_{trav} = 25 \\sin 40° = 16{,}1\\ \\text{kt} \\le 20\\ \\text{kt} \\qquad V_{face} = 25 \\cos 40° = 19{,}2\\ \\text{kt (piste 09)}",
  },
  units: {
    table: [
      ['Vitesse du vent', 'nœud (kt)', 'kt', '1 kt = 1,852 km/h = 0,514 m/s'],
      ['Orientation', '° magnétiques', '°', 'Piste 27 = 270° environ'],
      ['Distances', 'm', 'ft', 'Altitudes aéronautiques souvent en ft : 1 ft = 0,3048 m'],
      ['Pente', '%', '%', '2 % = 1/50'],
      ['Envergure (lettre de code)', 'm', 'ft', 'C : 24 à 36 m ; E : 52 à 65 m ; F : 65 à 80 m'],
    ],
    note: 'En aéronautique, les vitesses sont en nœuds et les altitudes en pieds : convertissez avant de mélanger avec des données de génie civil.',
  },
  hypotheses: {
    items: [
      ['info', 'Les valeurs géométriques citées sont des cas courants de l’Annexe 14 ; elles dépendent du code de référence et du type d’approche.'],
      ['info', 'Le coefficient d’utilisation se calcule sur au moins 5 ans d’observations météorologiques.'],
      ['warning', 'Les grues de chantier proches d’un aéroport doivent faire l’objet d’une autorisation et d’un balisage.'],
      ['warning', 'L’orientation magnétique évolue lentement : les numéros de piste sont parfois modifiés.'],
      ['tip', 'Superposez rose des vents, contraintes de bruit et relief avant de choisir l’orientation d’une nouvelle piste.'],
    ],
  },
  simple_examples: {
    examples: [
      {
        title: 'Exemple 1 : numéro de piste',
        given: 'Orientation magnétique 226°',
        find: 'Numéros des deux sens',
        solution_latex: "N = \\text{arrondi}(22{,}6) = 23 \\qquad 23 - 18 = 05",
        result: 'Piste 05/23.',
      },
      {
        title: 'Exemple 2 : obstacle sous une surface d’approche',
        given: 'Immeuble à 1 800 m du début de la surface, pente 2 %',
        find: 'Hauteur maximale au-dessus du seuil',
        solution_latex: "h_{max} = 0{,}02 \\times 1\\,800 = 36\\ \\text{m}",
        result: 'L’immeuble ne doit pas dépasser 36 m au-dessus de l’altitude du seuil.',
      },
      {
        title: 'Exemple 3 : conversion de vent',
        given: 'Vent traversier admissible 13 kt',
        find: 'En km/h et m/s',
        solution_latex: "13 \\times 1{,}852 = 24{,}1\\ \\text{km/h} = 6{,}7\\ \\text{m/s}",
        result: '≈ 24 km/h.',
      },
    ],
  },
  real_examples: {
    title: 'Exemple réel — Pistes parallèles des grands aéroports',
    examples: [
      {
        context: 'Grand aéroport européen à forte capacité',
        scenario: "Quatre pistes parallèles deux à deux, orientées selon les vents dominants d'ouest-est : les paires de pistes espacées permettent des approches simultanées ; les pistes intérieures servent plutôt aux décollages et les extérieures aux atterrissages, reliées par de nombreuses voies de sortie rapide.",
        decomposition_latex: "\\text{Vents dominants} \\Rightarrow \\text{orientation} \\qquad \\text{espacement des pistes} \\Rightarrow \\text{exploitation indépendante} \\Rightarrow \\text{capacité}",
        lesson: "La capacité d'un aéroport dépend autant de la géométrie (espacements, sorties rapides, voies) que du nombre de pistes.",
      },
    ],
  },
  diagrams: {
    title: 'Schéma de principe — Organisation d’une aire de mouvement',
    diagram_description: [
      'Piste : seuils, bandes de piste, aires de sécurité d’extrémité',
      'Voies de sortie rapide vers les voies de circulation parallèles',
      'Voies de circulation et points d’attente avant piste',
      'Aires de trafic : postes de stationnement au contact ou au large',
      'Surfaces de limitation d’obstacles autour de l’aérodrome',
      'Aides visuelles : marquages, balisage lumineux, panneaux',
    ],
  },
  mistakes: {
    items: [
      ['Choisir l’orientation sur la seule direction du vent dominant', 'Coefficient d’utilisation insuffisant', 'Calculer le CU avec toute la rose des vents et la limite de vent traversier.'],
      ['Oublier les servitudes dans un projet urbain voisin', 'Permis refusé ou restrictions aéroportuaires', 'Consulter le plan de servitudes aéronautiques dès l’esquisse.'],
      ['Sous-dimensionner les aires de trafic', 'Saturation, retards et conflits de roulage', 'Dimensionner sur l’heure de pointe et la flotte future.'],
    ],
  },
  tips: {
    tips: [
      'Les voies de sortie rapide réduisent le temps d’occupation de la piste et augmentent la capacité.',
      'Concevez les aires de trafic pour l’avion critique futur (envergure) afin d’éviter des reprises coûteuses.',
      'Les surfaces de limitation d’obstacles se lisent sur des plans de servitudes disponibles auprès de l’aviation civile.',
      'Prévoyez des points d’attente bien signalés pour éviter les incursions sur piste.',
    ],
  },
  norms: {
    norms: [
      ['OACI Annexe 14, volume I', 'Conception et exploitation technique des aérodromes.'],
      ['Manuel de conception des aérodromes (Doc 9157)', 'Pistes, voies de circulation, aires de trafic.'],
      ['Règlement (UE) 139/2014', 'Exigences applicables aux aérodromes dans l’Union européenne.'],
      ['Code des transports et code de l’aviation civile', 'Servitudes aéronautiques en France.'],
    ],
  },
  exercises: {
    exercises: [
      {
        level: 1,
        text: 'Une piste 18/36 reçoit un vent du 210° de 15 kt. Calculer la composante traversière.',
        hint: 'Angle = 210 − 180 = 30°.',
        answer_latex: "V_{trav} = 15 \\sin 30° = 7{,}5\\ \\text{kt}",
        answer_text: '7,5 kt.',
      },
      {
        level: 2,
        text: 'À partir de quelle vitesse de vent du 250° la piste 18/36 dépasse-t-elle 13 kt de vent traversier ?',
        hint: 'Angle = 70°.',
        answer_latex: "V = \\frac{13}{\\sin 70°} = \\frac{13}{0{,}940} = 13{,}8\\ \\text{kt}",
        answer_text: 'Au-delà d’environ 14 kt.',
      },
      {
        level: 3,
        text: 'La rose des vents donne : vents calmes 30 %, vents dans l’axe (V_trav ≤ 13 kt) 58 %, vents traversiers > 13 kt 12 %. Calculer CU et conclure.',
        hint: 'Les calmes comptent comme acceptables.',
        answer_latex: "CU = 30 + 58 = 88\\,\\% < 95\\,\\%",
        answer_text: 'CU = 88 % : insuffisant ; une piste secondaire sécante est nécessaire.',
      },
    ],
  },
  quiz: {
    title: 'Quiz — Aires de mouvement',
    questions: [
      { q: 'Quel coefficient d’utilisation minimal l’OACI exige-t-elle ?', options: ['80 %', '90 %', '95 %'], correct: 2, explain: 'Au moins 95 % du temps avec un vent traversier admissible.' },
      { q: 'Que désigne la lettre de code d’aérodrome ?', options: ['La longueur de piste', 'L’envergure de l’avion', 'Le nombre de pistes'], correct: 1, explain: 'Lettres A à F selon l’envergure (A380 : F).' },
      { q: 'Une piste numérotée 27 est orientée vers…', options: ['L’est', 'L’ouest', 'Le nord'], correct: 1, explain: '27 = 270° : vers l’ouest.' },
    ],
  },
  exam_questions: {
    questions: [
      'Expliquez le code de référence d’aérodrome et son influence sur la géométrie des aires de mouvement.',
      'Calculez le coefficient d’utilisation d’une piste à partir d’une rose des vents.',
      'Présentez les surfaces de limitation d’obstacles et leurs conséquences sur l’urbanisme.',
    ],
  },
  interview_questions: {
    questions: [
      ['Comment augmenter la capacité d’une piste sans en construire une nouvelle ?', 'Ajouter des voies de sortie rapide et une voie parallèle complète, optimiser les points d’attente et les séquences, améliorer les aides à l’approche et réduire le temps d’occupation de piste.'],
      ['Que vérifiez-vous pour une grue de chantier près d’un aéroport ?', 'Sa position et sa hauteur par rapport aux surfaces de limitation d’obstacles, l’autorisation de l’aviation civile, le balisage diurne et nocturne et la coordination avec l’exploitant.'],
    ],
  },
  practical_case: {
    title: 'Cas pratique — Immeuble près d’un aéroport',
    scenario: 'Un promoteur veut construire un immeuble de 45 m à 2 000 m du début de la surface d’approche d’une piste aux instruments (pente 2 %). Le terrain est 5 m plus haut que le seuil.',
    description: 'Vérifier la compatibilité avec la surface d’approche.',
    resolutions: [
      "h_{max} = 0{,}02 \\times 2\\,000 = 40\\ \\text{m au-dessus du seuil}",
      "\\text{Sommet de l'immeuble : } 5 + 45 = 50\\ \\text{m} > 40\\ \\text{m}",
      "\\text{Hauteur maximale autorisée : } 40 - 5 = 35\\ \\text{m}",
    ],
    conclusion: "L'immeuble percerait la surface d'approche de 10 m : il faut le limiter à 35 m de hauteur (environ 11 niveaux) ou le déplacer, sauf étude aéronautique spécifique.",
  },
  summary: {
    content: `### Les aires de mouvement en 5 points
1. Code de référence OACI : chiffre (longueur) + lettre (envergure).
2. Vent : $V_{trav} = V \\sin\\theta$ ; $CU \\ge 95\\,\\%$.
3. Pistes, voies de circulation, sorties rapides, aires de trafic.
4. Surfaces de limitation d'obstacles : $h_{max} = p \\cdot d$.
5. Numéro de piste = orientation magnétique / 10.`,
  },
  key_points: {
    points: [
      'V_trav = V sin θ',
      'CU ≥ 95 %',
      'Approche aux instruments : pente 2 %',
      '1 kt = 1,852 km/h',
      'Piste 09 = vers l’est',
    ],
  },
  self_assessment: {
    objectives: [
      'Je connais le code de référence d’aérodrome',
      'Je sais calculer les composantes du vent sur une piste',
      'Je sais évaluer un coefficient d’utilisation',
      'Je sais vérifier un obstacle par rapport aux servitudes',
      "J'ai réussi le quiz avec au moins 2 bonnes réponses sur 3",
    ],
  },
});
