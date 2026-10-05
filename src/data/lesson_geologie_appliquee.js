// ── Lesson: Géologie de l'ingénieur — Module 36 ─────────────────────────────
import { buildLesson } from './build_lesson.js';

export const lesson_geologie_appliquee = buildLesson({
  moduleId: 36,
  slug: 'geologie_appliquee',
  lessonIndex: 1,
  title: "Géologie de l'Ingénieur : Roches, Structures Géologiques & Cartes",
  subtitle: "Module 36 — Géologie de l'ingénieur & Mécanique des roches",
  level: 'Intermédiaire',
  duration: '9h',
  diagramType: 'soil_profile',
  tags: ['Géologie', 'Roches', 'Pendage', 'Failles', 'Carte géologique', 'RQD', 'Sondages'],
}, {
  definition: {
    title: "Définition — La géologie au service du projet",
    fr: "Géologie de l'ingénieur (géologie appliquée au génie civil)",
    en: 'Engineering geology',
    metier: "Utilisée par les géotechniciens, ingénieurs tunnels, barrages, routes et carrières, et les bureaux d'études de sols.",
    content: `La **géologie de l'ingénieur** étudie la nature, la disposition et le comportement des terrains qui portent ou entourent un ouvrage. Elle répond à trois questions avant tout calcul :
1. **Quels terrains** rencontre-t-on (roches, sols, remblais) ?
2. **Comment sont-ils disposés** (couches, pendages, failles, karsts) ?
3. **Comment vont-ils se comporter** (altération, eau, instabilités) ?

### Roche ou sol ?
Pour l'ingénieur, une **roche** est un matériau cohérent qui garde sa forme sans soutien (granite, calcaire, grès), alors qu'un **sol** est un assemblage de grains plus ou moins liés (sables, argiles, limons). La frontière est floue : une marne altérée se comporte comme un sol.

> 💡 La plupart des grands accidents de génie civil (barrage de Malpasset, glissement du Vajont) ont une cause géologique mal identifiée.`,
  },
  importance: {
    content: `- **Choix du site et du tracé** : éviter une faille active, une zone karstique ou un versant instable coûte moins cher que de les traiter.
- **Coût des terrassements** : la proportion de rocher à miner ou de sol à purger change le budget d'un projet routier.
- **Fondations et tunnels** : la qualité du massif fixe le type de fondation, le soutènement et la vitesse d'avancement.
- **Eau** : nappes, sources et circulations karstiques gouvernent la stabilité et les venues d'eau.

> ⚠️ **À retenir** : une étude géologique préalable (mission G1 en France) se fait avant tout dimensionnement.`,
  },
  applications: {
    examples: [
      ['Tracé autoroutier', 'Carte géologique et photo-interprétation pour éviter les zones de glissement et estimer les volumes de rocher.'],
      ['Tunnel', 'Coupes géologiques prévisionnelles le long de l’axe, sondages carottés et classification du massif.'],
      ['Barrage', "Étude de l'étanchéité de la fondation, des failles et de la perméabilité des appuis."],
      ['Carrière de granulats', 'Évaluation de la qualité du gisement (Los Angeles, Micro-Deval) et du volume exploitable.'],
      ['Bâtiment en zone karstique', 'Recherche de cavités par géophysique avant de fonder.'],
    ],
  },
  theory: {
    title: "Théorie — Roches, structures et représentation",
    content: `### 1. Les trois familles de roches
- **Magmatiques** (granite, basalte) : issues du refroidissement d'un magma ; généralement dures et peu poreuses.
- **Sédimentaires** (calcaire, grès, argile, marne) : déposées en couches ; les plus fréquentes en surface, sensibles à l'eau (dissolution du calcaire, gonflement des argiles).
- **Métamorphiques** (schiste, gneiss, marbre) : transformées par la pression et la température ; souvent feuilletées (schistosité), donc anisotropes.

### 2. Structures géologiques
- **Couche** : définie par sa direction (orientation de l'horizontale) et son **pendage** (angle de plus grande pente).
- **Plis** (anticlinaux, synclinaux) et **failles** (normales, inverses, décrochements).
- **Discontinuités** (diaclases, joints de stratification) : elles découpent le massif en blocs et contrôlent sa résistance.

### 3. Pendage apparent
Sur une coupe qui n'est pas perpendiculaire à la direction des couches, le pendage visible est plus faible :

$$\\tan \\alpha' = \\tan \\alpha \\cdot \\sin \\beta$$

### 4. Lire une carte géologique
Chaque couleur correspond à une formation (notice BRGM au 1/50 000). Les figurés indiquent pendages et failles ; la coupe géologique se construit en reportant les contacts sur un profil topographique.

### 5. Qualité de carottage : le RQD
Le **Rock Quality Designation** mesure la fracturation : part de la longueur carottée constituée de morceaux d'au moins 10 cm.`,
  },
  formulas: {
    title: 'Formules essentielles — Géologie appliquée',
    formulas: [
      {
        name: 'Pendage apparent sur une coupe oblique',
        latex: "\\tan \\alpha' = \\tan \\alpha \\cdot \\sin \\beta",
        description: 'Le pendage observé sur une coupe dépend de son orientation par rapport à la direction des couches.',
        vars: [
          ["\\alpha'", 'Pendage apparent', '°', 'Angle visible sur la coupe ou le talus.'],
          ['\\alpha', 'Pendage réel', '°', 'Angle de plus grande pente de la couche.'],
          ['\\beta', 'Angle coupe / direction', '°', '90° si la coupe est perpendiculaire à la direction (pendage réel).'],
        ],
        rule: "Une coupe parallèle à la direction des couches (β = 0) les montre horizontales, quel que soit leur pendage réel.",
      },
      {
        name: "Épaisseur réelle d'une couche",
        latex: "e = w \\cdot \\sin \\alpha",
        description: "Terrain horizontal, largeur d'affleurement mesurée perpendiculairement à la direction.",
        vars: [
          ['e', 'Épaisseur vraie', 'm', 'Mesurée perpendiculairement aux limites de la couche.'],
          ['w', "Largeur d'affleurement", 'm', 'Distance horizontale entre le toit et le mur de la couche.'],
          ['\\alpha', 'Pendage réel', '°', 'Pendage de la couche.'],
        ],
      },
      {
        name: 'Rock Quality Designation (RQD)',
        latex: "RQD = \\frac{\\sum L_{\\ge 10\\,\\text{cm}}}{L_{totale}} \\times 100",
        description: "Classes : < 25 très mauvais, 25-50 mauvais, 50-75 moyen, 75-90 bon, > 90 excellent.",
        vars: [
          ['RQD', 'Indice de qualité de la roche', '%', 'Indicateur de fracturation du massif.'],
          ['L_{\\ge 10\\,\\text{cm}}', 'Morceaux de carotte ≥ 10 cm', 'cm', 'Fragments intacts, cassures naturelles seulement.'],
          ['L_{totale}', 'Longueur de la passe', 'cm', 'Longueur forée de la passe de carottage.'],
        ],
      },
      {
        name: 'Porosité et indice des vides',
        latex: "n = \\frac{V_v}{V} \\qquad e = \\frac{V_v}{V_s} = \\frac{n}{1 - n}",
        description: 'La porosité gouverne la perméabilité, la gélivité et la résistance des roches.',
        vars: [
          ['n', 'Porosité', '-', 'Granite < 1 %, calcaire 5 à 20 %, craie jusqu’à 45 %.'],
          ['V_v', 'Volume des vides', 'm³', 'Pores et fissures.'],
          ['V', 'Volume total', 'm³', 'Vides et solides.'],
          ['e', 'Indice des vides', '-', 'Rapport vides / solides.'],
          ['V_s', 'Volume des solides', 'm³', 'Volume des grains.'],
        ],
      },
      {
        name: 'Poids volumique',
        latex: "\\gamma = \\rho \\cdot g",
        description: 'Utilisé pour les contraintes géostatiques et la stabilité des talus.',
        vars: [
          ['\\gamma', 'Poids volumique', 'kN/m³', 'Granite ≈ 26,5 ; calcaire 24 à 26 ; argile 18 à 21.'],
          ['\\rho', 'Masse volumique', 'kg/m³', 'Mesurée sur échantillon.'],
          ['g', 'Pesanteur', 'm/s²', '9,81 m/s².'],
        ],
      },
    ],
  },
  stepbystep: {
    title: 'Calcul complet — Couche de calcaire recoupée par un déblai routier',
    problem: "Une couche de calcaire de direction N-S plonge de 30° vers l'Est. Un déblai routier orienté à 40° de la direction des couches la recoupe. Sur un plateau horizontal, la couche affleure sur une largeur de 50 m (mesurée E-O). Déterminer le pendage apparent dans le talus et l'épaisseur de la couche.",
    steps_demo: [
      { n: 1, text: "Données : α = 30°, β = 40° (talus / direction), w = 50 m perpendiculairement à la direction." },
      { n: 2, text: "Pendage apparent : tan α' = tan 30° × sin 40° = 0,5774 × 0,6428 = 0,3711." },
      { n: 3, text: "α' = arctan(0,3711) = 20,4° : la couche paraît moins inclinée dans le talus." },
      { n: 4, text: "Épaisseur vraie : e = 50 × sin 30° = 25 m." },
      { n: 5, text: "Conséquence : couches plongeant vers la chaussée → risque de glissement banc sur banc à étudier." },
    ],
    result_latex: "\\alpha' = \\arctan(\\tan 30° \\times \\sin 40°) = 20{,}4° \\qquad e = 50 \\times \\sin 30° = 25\\ \\text{m}",
  },
  units: {
    table: [
      ['Pendage, direction', '° (degrés)', '-', 'Direction en azimut (0 à 360°) ou N-S/E-O'],
      ['Poids volumique', 'kN/m³', 'lb/ft³', '1 kN/m³ = 6,366 lb/ft³'],
      ['Résistance en compression simple', 'MPa', 'psi', 'Granite 100-250 ; calcaire 30-150 ; marne 1-20'],
      ['Perméabilité', 'm/s', 'ft/day', 'Granite sain 10⁻¹⁰ ; calcaire karstique jusqu’à 10⁻² m/s'],
      ['Échelle de carte', '-', '-', '1/50 000 : 1 cm = 500 m'],
    ],
    note: "Sur les cartes BRGM, l'âge des formations est codé par une lettre et un indice (j = Jurassique, c = Crétacé, e = Éocène…).",
  },
  hypotheses: {
    items: [
      ['info', "Les relations géométriques supposent des couches planes et d'épaisseur constante à l'échelle du site."],
      ['info', "Le RQD ne tient compte que des cassures naturelles ; les cassures de forage doivent être écartées."],
      ['warning', "Une carte au 1/50 000 ne remplace pas les sondages : elle ne voit pas les variations sur quelques mètres."],
      ['warning', "Les marnes et argiles s'altèrent rapidement à l'air : un talus sain le jour du terrassement peut se dégrader en quelques mois."],
      ['tip', "Orientez les sondages carottés perpendiculairement aux discontinuités principales pour mesurer un RQD représentatif."],
    ],
  },
  simple_examples: {
    examples: [
      {
        title: 'Exemple 1 : RQD d’une passe de carottage',
        given: 'Passe de 150 cm ; morceaux ≥ 10 cm : 25, 18, 32, 12 et 20 cm',
        find: 'Le RQD et la qualité du massif',
        solution_latex: "RQD = \\frac{25 + 18 + 32 + 12 + 20}{150} \\times 100 = \\frac{107}{150} \\times 100 = 71\\,\\%",
        result: 'RQD = 71 % : roche de qualité moyenne (50-75 %).',
      },
      {
        title: 'Exemple 2 : indice des vides d’une craie',
        given: 'Porosité n = 0,40',
        find: "L'indice des vides e",
        solution_latex: "e = \\frac{0{,}40}{1 - 0{,}40} = 0{,}67",
        result: 'e = 0,67 : la craie très poreuse est sensible au gel et à la dissolution.',
      },
      {
        title: 'Exemple 3 : contrainte verticale sous 30 m de calcaire',
        given: 'γ = 25 kN/m³, profondeur 30 m',
        find: 'La contrainte verticale naturelle',
        solution_latex: "\\sigma_v = \\gamma \\cdot z = 25 \\times 30 = 750\\ \\text{kPa}",
        result: '750 kPa = 0,75 MPa au niveau d’un futur tunnel.',
      },
    ],
  },
  real_examples: {
    title: 'Exemple réel — Rupture du barrage de Malpasset (1959)',
    examples: [
      {
        context: 'Barrage-voûte de 66 m près de Fréjus, rompu à la première mise en eau complète',
        scenario: "La rive gauche reposait sur un gneiss traversé par une faille et des discontinuités défavorables. Les sous-pressions dans la fondation ont soulevé un dièdre rocheux qui a emporté l'appui de la voûte.",
        decomposition_latex: "\\text{Faille} + \\text{schistosité défavorable} + \\text{sous-pressions} \\Rightarrow \\text{glissement d'un dièdre rocheux}",
        lesson: "La voûte elle-même était correctement calculée : c'est la géologie de la fondation qui a cédé. Depuis, les études de fondation (discontinuités, drainage) sont au cœur de la conception des barrages.",
      },
    ],
  },
  diagrams: {
    title: 'Schéma de principe — Démarche géologique d’un projet',
    diagram_description: [
      'Étude documentaire : cartes géologiques BRGM, Banque du sous-sol, archives',
      'Visite de terrain : affleurements, pendages, sources, indices de glissement',
      'Géophysique : sismique réfraction, électrique, radar pour localiser les anomalies',
      'Sondages : destructifs et carottés, RQD, essais en laboratoire',
      'Modèle géologique : coupes interprétées le long du projet',
      'Synthèse : aléas géologiques et recommandations de conception',
    ],
  },
  mistakes: {
    items: [
      ['Lire le pendage réel sur un talus oblique', 'Pendage sous-estimé', "Corriger avec tan α' = tan α · sin β ou mesurer à la boussole sur le plan de couche."],
      ['Interpoler entre deux sondages trop éloignés', 'Faille ou poche karstique non détectée', 'Compléter par une campagne géophysique entre les sondages.'],
      ["Ignorer l'altération des marnes", 'Talus qui se dégrade après terrassement', "Prévoir une pente plus douce, une protection de surface ou un drainage."],
    ],
  },
  tips: {
    tips: [
      "Photographiez toujours les caisses de carottes mouillées : les discontinuités sont plus visibles.",
      "Une source au pied d'un versant signale souvent un contact entre une couche perméable et une couche imperméable : zone propice aux glissements.",
      "Le site InfoTerre du BRGM donne en France les cartes géologiques et les sondages existants.",
      "Notez les pendages au format direction / pendage / sens (ex. N020 / 35 E) pour éviter toute ambiguïté.",
    ],
  },
  norms: {
    norms: [
      ['NF P 94-500', 'Missions d’ingénierie géotechnique (G1 à G5) : la mission G1 inclut l’étude géologique du site.'],
      ['NF EN ISO 14689', 'Identification et classification des roches.'],
      ['NF EN ISO 22475-1', 'Méthodes de prélèvement et mesures piézométriques (sondages).'],
      ['NF EN 1997-2', 'Eurocode 7 : reconnaissance des terrains et essais.'],
    ],
  },
  exercises: {
    exercises: [
      {
        level: 1,
        text: "Une couche plonge de 45°. Quel pendage apparent voit-on sur une coupe faisant 30° avec la direction ?",
        hint: "tan α' = tan 45° × sin 30°.",
        answer_latex: "\\tan \\alpha' = 1 \\times 0{,}5 = 0{,}5 \\Rightarrow \\alpha' = 26{,}6°",
        answer_text: "α' ≈ 26,6°.",
      },
      {
        level: 2,
        text: "Une passe carottée de 3 m contient des morceaux ≥ 10 cm totalisant 2,46 m. Calculer le RQD et qualifier la roche.",
        hint: 'RQD = longueur des morceaux ≥ 10 cm / longueur de la passe.',
        answer_latex: "RQD = \\frac{2{,}46}{3{,}00} \\times 100 = 82\\,\\%",
        answer_text: 'RQD = 82 % : roche de bonne qualité.',
      },
      {
        level: 3,
        text: "Un grès a une masse volumique sèche de 2 300 kg/m³ et une masse volumique des grains de 2 650 kg/m³. Calculer sa porosité.",
        hint: 'n = 1 − ρ_d / ρ_s.',
        answer_latex: "n = 1 - \\frac{2\\,300}{2\\,650} = 0{,}132 = 13{,}2\\,\\%",
        answer_text: 'Porosité ≈ 13 %.',
      },
    ],
  },
  quiz: {
    title: 'Quiz — Géologie de l’ingénieur',
    questions: [
      { q: 'Quelle famille de roches se dépose en couches successives ?', options: ['Magmatiques', 'Sédimentaires', 'Métamorphiques'], correct: 1, explain: 'Les roches sédimentaires (calcaires, grès, argiles) se forment par dépôts successifs.' },
      { q: 'Un RQD de 40 % indique une roche…', options: ['Excellente', 'Moyenne', 'Mauvaise'], correct: 2, explain: 'Entre 25 et 50 %, la roche est de mauvaise qualité (très fracturée).' },
      { q: 'Sur une coupe parallèle à la direction des couches, le pendage apparent vaut…', options: ['Le pendage réel', '0°', '90°'], correct: 1, explain: 'β = 0 donne sin β = 0 : les couches paraissent horizontales.' },
    ],
  },
  exam_questions: {
    questions: [
      "Présentez les trois familles de roches et leur comportement vis-à-vis de l'eau et de l'altération.",
      "Établissez la relation entre pendage réel et pendage apparent et donnez une application à un talus routier.",
      "Décrivez la démarche de reconnaissance géologique d'un tracé de tunnel.",
    ],
  },
  interview_questions: {
    questions: [
      ['Pourquoi les discontinuités sont-elles plus importantes que la roche elle-même ?', "Parce que la résistance et la perméabilité d'un massif sont gouvernées par ses fractures : un granite très résistant en laboratoire peut être instable s'il est découpé en blocs par des joints défavorablement orientés."],
      ['Que vous apprend une carte géologique avant un projet ?', "Les formations présentes, leur âge, leurs pendages, les failles, les zones karstiques ou alluviales et les risques associés : elle oriente le programme de sondages."],
    ],
  },
  practical_case: {
    title: 'Cas pratique — Talus rocheux de déblai',
    scenario: 'Un déblai de 12 m de haut recoupe des bancs de calcaire séparés par des joints argileux plongeant de 35° vers la chaussée.',
    description: "Évaluer le risque de glissement banc sur banc en comparant le pendage des joints à leur angle de frottement (φ = 25°, cohésion négligée).",
    resolutions: [
      "\\text{Pendage des joints} = 35° > \\varphi = 25° \\Rightarrow \\text{glissement possible}",
      "F_s = \\frac{\\tan \\varphi}{\\tan \\alpha} = \\frac{\\tan 25°}{\\tan 35°} = \\frac{0{,}466}{0{,}700} = 0{,}67 < 1",
      "\\text{Solutions : talus parallèle aux bancs (35°), ancrages passifs, drainage des joints}",
    ],
    conclusion: "Le talus raide est instable (F_s = 0,67) : on retient un talus à la pente des bancs ou un confortement par clous et drainage.",
  },
  summary: {
    content: `### La géologie de l'ingénieur en 5 points
1. Trois familles de roches : **magmatiques, sédimentaires, métamorphiques**.
2. Une couche est définie par sa **direction** et son **pendage**.
3. Pendage apparent : $\\tan\\alpha' = \\tan\\alpha \\sin\\beta$.
4. Les **discontinuités** gouvernent le comportement du massif (RQD).
5. Étude documentaire, terrain, géophysique puis **sondages**.`,
  },
  key_points: {
    points: [
      "tan α' = tan α · sin β",
      'Épaisseur vraie : e = w · sin α',
      'RQD = morceaux ≥ 10 cm / longueur de passe',
      'e = n / (1 − n)',
      'Mission G1 : étude géologique avant tout calcul',
    ],
  },
  self_assessment: {
    objectives: [
      'Je distingue les trois familles de roches',
      'Je sais calculer un pendage apparent et une épaisseur de couche',
      'Je sais calculer et interpréter un RQD',
      'Je sais lire une carte géologique',
      "J'ai réussi le quiz avec au moins 2 bonnes réponses sur 3",
    ],
  },
});
