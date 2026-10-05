// ── Lesson: Terrassements routiers et cubatures — Module 15 ──────────────────
import { buildLesson } from './build_lesson.js';

export const lesson_routes_terrassements = buildLesson({
  moduleId: 15,
  slug: 'routes_terrassements',
  lessonIndex: 3,
  title: "Terrassements Routiers : Profils en Travers, Cubatures, Mouvements des Terres & Compactage",
  subtitle: 'Module 15 — Ingénierie Routière & Infrastructures',
  level: 'Intermédiaire',
  duration: '10h',
  diagramType: 'road_profile',
  tags: ['Terrassements', 'Profil en travers', 'Cubatures', 'Foisonnement', 'Mouvement des terres', 'Compactage', 'Proctor'],
}, {
  definition: {
    title: 'Définition — Modeler le terrain pour la route',
    fr: 'Terrassements et mouvements des terres',
    en: 'Earthworks and mass haul',
    metier: "Utilisée par les ingénieurs routiers, les projeteurs VRD, les conducteurs de travaux de terrassement et les métreurs.",
    content: `Les **terrassements** transforment le terrain naturel pour obtenir la plateforme de la route : on **déblaie** (on enlève de la terre) là où le projet est sous le terrain et on **remblaie** là où il est au-dessus.

### Les documents de base
- **Profil en long** : la ligne rouge du projet le long de l'axe, comparée au terrain naturel.
- **Profils en travers** : coupes perpendiculaires à l'axe tous les 20 à 25 m, qui donnent les surfaces de déblai et de remblai.
- **Cubatures** : volumes calculés entre profils.
- **Épure des mouvements des terres** : où prendre les déblais et où les mettre en remblai, pour minimiser les distances de transport.

### Trois volumes à ne pas confondre
- Volume **en place** (terrain naturel) ;
- Volume **foisonné** (après extraction, plus important) : c'est ce que transportent les camions ;
- Volume **compacté** (en remblai, souvent un peu inférieur au volume en place).

> 💡 Un projet routier bien conçu équilibre au mieux déblais et remblais : chaque m³ évacué ou apporté coûte en transport, en carburant et en émissions.`,
  },
  importance: {
    content: `- **Coût** : les terrassements représentent souvent 20 à 40 % du coût d'une route neuve.
- **Délais** : ils dépendent de la météo (sols fins sensibles à l'eau) et des cadences des engins.
- **Qualité** : un remblai mal compacté tasse et déforme la chaussée.
- **Environnement** : limiter les volumes, les distances et les mises en dépôt réduit l'empreinte du chantier.

> ⚠️ **À retenir** : on paie les terrassements en volume en place, mais on transporte du volume foisonné.`,
  },
  applications: {
    examples: [
      ['Route neuve', 'Profils en travers tous les 25 m et cubatures par la méthode de la moyenne des aires.'],
      ['Plateforme logistique', 'Calage altimétrique optimisant l’équilibre déblais / remblais.'],
      ['Contrôle de compactage', 'Essais à la plaque et mesures de densité in situ par gammadensimètre.'],
      ['Organisation de chantier', 'Choix entre décapeuses, pelles et tombereaux selon les distances de transport.'],
      ['Valorisation', 'Traitement à la chaux des déblais limoneux pour les réemployer en remblai.'],
    ],
  },
  theory: {
    title: 'Théorie — Cubatures, foisonnement, compactage et rendement',
    content: `### 1. Volume entre deux profils (moyenne des aires)
$$V = \\frac{S_1 + S_2}{2} \\cdot d$$
$S_1$, $S_2$ : surfaces de déblai (ou de remblai) des deux profils, $d$ : distance entre profils. Pour un profil mixte, on calcule séparément déblai et remblai.

### 2. Foisonnement et tassement
$$V_{foisonné} = V_{en\\,place} \\cdot (1 + f) \\qquad V_{compacté} = V_{en\\,place} \\cdot (1 - t)$$
$f$ : 10 à 15 % (sables), 20 à 30 % (argiles), 30 à 50 % (roches abattues) ; le coefficient de tassement $t$ est souvent de quelques %.

### 3. Mouvement des terres
On trace la **courbe des volumes cumulés** (épure de Lalanne ou de Brückner) le long du projet : les portions croissantes sont en déblai, décroissantes en remblai. Une horizontale qui coupe la courbe délimite une zone où déblais et remblais s'équilibrent.

### 4. Compactage
Le compactage est contrôlé par rapport à l'essai **Proctor** : densité sèche obtenue / densité sèche de l'optimum Proctor normal (OPN). Objectifs usuels : **q4** (≈ 95 % de l'OPN) en remblai, **q3** (≈ 98,5 %) en couche de forme.

### 5. Rendement d'un engin de transport
$$Q = V_{benne} \\cdot \\frac{60}{T_{cycle}} \\cdot E$$
$E$ : coefficient d'efficacité (≈ 0,8 à 0,85).`,
  },
  formulas: {
    title: 'Formules essentielles — Terrassements',
    formulas: [
      {
        name: 'Méthode de la moyenne des aires',
        latex: "V = \\frac{S_1 + S_2}{2} \\cdot d",
        description: 'Volume de déblai ou de remblai entre deux profils en travers.',
        vars: [
          ['V', 'Volume entre profils', 'm³', 'En place (déblai) ou en œuvre (remblai).'],
          ['S_1, S_2', 'Surfaces des profils', 'm²', 'Mesurées sur les profils en travers.'],
          ['d', 'Distance entre profils', 'm', '20 à 25 m en général.'],
        ],
      },
      {
        name: 'Foisonnement',
        latex: "V_{foisonné} = V_{en\\,place} \\cdot (1 + f)",
        description: 'Augmentation de volume des terres extraites.',
        vars: [
          ['f', 'Coefficient de foisonnement', '-', 'Sables 0,10-0,15 ; argiles 0,20-0,30 ; roches 0,30-0,50.'],
        ],
        rule: "Un camion de 15 m³ ne transporte qu'environ 12 m³ en place d'une argile (f = 0,25).",
      },
      {
        name: 'Taux de compactage',
        latex: "q = \\frac{\\rho_{d,in\\,situ}}{\\rho_{d,OPN}} \\times 100",
        description: 'Comparaison de la densité obtenue à la densité de référence Proctor.',
        vars: [
          ['q', 'Taux de compactage', '%', 'q4 ≈ 95 % ; q3 ≈ 98,5 %.'],
          ['\\rho_{d,in\\,situ}', 'Masse volumique sèche mesurée', 't/m³', 'Gammadensimètre ou densitomètre.'],
          ['\\rho_{d,OPN}', 'Masse volumique sèche à l’optimum Proctor normal', 't/m³', 'Essai Proctor en laboratoire.'],
        ],
      },
      {
        name: 'Production horaire d’un engin',
        latex: "Q = V_{benne} \\cdot \\frac{60}{T_{cycle}} \\cdot E",
        description: 'Volume foisonné transporté par heure.',
        vars: [
          ['Q', 'Production', 'm³/h', 'Volume foisonné.'],
          ['V_{benne}', 'Capacité utile de la benne', 'm³', 'Volume foisonné.'],
          ['T_{cycle}', 'Durée du cycle', 'min', 'Chargement, aller, déchargement, retour.'],
          ['E', "Coefficient d'efficacité", '-', '0,80 à 0,85 (50 minutes utiles par heure).'],
        ],
      },
    ],
  },
  stepbystep: {
    title: 'Calcul complet — Cubature et transport d’un déblai',
    problem: "Deux profils en travers distants de 25 m présentent des surfaces de déblai de 42 m² et 58 m². Le sol est une argile (f = 0,25). Les terres sont transportées par des tombereaux de 15 m³ (foisonné), cycle de 12 minutes, efficacité 0,83. Calculer le volume, le nombre de rotations et la durée de transport avec 2 tombereaux.",
    steps_demo: [
      { n: 1, text: "Volume en place : V = (42 + 58) / 2 × 25 = 1 250 m³." },
      { n: 2, text: "Volume foisonné : 1 250 × 1,25 = 1 563 m³." },
      { n: 3, text: "Nombre de rotations : 1 563 / 15 = 104,2 → 105 rotations." },
      { n: 4, text: "Production d'un tombereau : 15 × 60/12 × 0,83 = 62,3 m³ foisonnés/h." },
      { n: 5, text: "Durée avec 2 tombereaux : 1 563 / (2 × 62,3) = 12,5 h, soit environ 2 jours de travail (à condition que la pelle suive)." },
    ],
    result_latex: "V = \\frac{42 + 58}{2} \\times 25 = 1\\,250\\ \\text{m}^3 \\quad V_f = 1\\,563\\ \\text{m}^3 \\quad Q = 15 \\times 5 \\times 0{,}83 = 62{,}3\\ \\text{m}^3/\\text{h}",
  },
  units: {
    table: [
      ['Volume', 'm³ (en place, foisonné, compacté)', 'yd³ (bank, loose, compacted)', '1 m³ = 1,308 yd³'],
      ['Surface de profil', 'm²', 'ft²', '1 m² = 10,76 ft²'],
      ['Masse volumique sèche', 't/m³', 'pcf', '1,9 t/m³ = 118,6 pcf'],
      ['Production', 'm³/h', 'yd³/h', 'Préciser en place ou foisonné'],
      ['Distance de transport', 'm, km', 'ft, mi', 'Distance moyenne pondérée'],
    ],
    note: 'Indiquez toujours si un volume est en place, foisonné ou compacté : c’est la source d’erreur la plus fréquente en terrassement.',
  },
  hypotheses: {
    items: [
      ['info', 'La moyenne des aires suppose une variation linéaire des surfaces entre profils ; la méthode du prismatoïde est plus précise.'],
      ['info', 'Les coefficients de foisonnement varient avec la nature et l’état du sol : les valider par des mesures en début de chantier.'],
      ['warning', 'Un profil en travers mixte (déblai d’un côté, remblai de l’autre) se calcule en séparant les deux volumes.'],
      ['warning', 'Les sols fins trop humides ne sont pas compactables : prévoir traitement, aération ou évacuation.'],
      ['tip', 'Les modèles numériques de terrain et les logiciels de projet routier calculent les cubatures automatiquement à partir des profils.'],
    ],
  },
  simple_examples: {
    examples: [
      {
        title: 'Exemple 1 : contrôle de compactage',
        given: 'ρd in situ = 1,82 t/m³ ; ρd OPN = 1,90 t/m³ ; objectif q4 (95 %)',
        find: 'Taux de compactage',
        solution_latex: "q = \\frac{1{,}82}{1{,}90} \\times 100 = 95{,}8\\,\\% \\ge 95\\,\\%",
        result: 'Conforme à l’objectif q4.',
      },
      {
        title: 'Exemple 2 : volume en place transporté',
        given: 'Tombereau de 20 m³ foisonnés, roche abattue f = 0,40',
        find: 'Volume en place par voyage',
        solution_latex: "V_{en\\,place} = \\frac{20}{1{,}40} = 14{,}3\\ \\text{m}^3",
        result: '14,3 m³ en place par voyage.',
      },
      {
        title: 'Exemple 3 : volume de remblai',
        given: 'Profils de remblai de 30 m² et 18 m² distants de 20 m',
        find: 'Le volume de remblai',
        solution_latex: "V = \\frac{30 + 18}{2} \\times 20 = 480\\ \\text{m}^3",
        result: '480 m³ de remblai compacté.',
      },
    ],
  },
  real_examples: {
    title: 'Exemple réel — Équilibre des terres d’une autoroute',
    examples: [
      {
        context: 'Section autoroutière de 15 km en région vallonnée',
        scenario: "Le calage initial du profil en long laissait un excédent de 400 000 m³ de déblais à mettre en dépôt. En relevant la ligne rouge de 0,5 à 1 m sur certaines sections et en traitant les limons à la chaux pour les réemployer, l'excédent a été réduit à 60 000 m³.",
        decomposition_latex: "\\text{Excédent : } 400\\,000 \\rightarrow 60\\,000\\ \\text{m}^3 \\Rightarrow \\text{environ 25 000 rotations de camions évitées}",
        lesson: "Le calage du profil en long et la valorisation des matériaux sont les premiers leviers d'économie et de réduction de l'impact environnemental des terrassements.",
      },
    ],
  },
  diagrams: {
    title: 'Schéma de principe — Étude des terrassements',
    diagram_description: [
      'Levé topographique et modèle numérique de terrain',
      'Profil en long (ligne rouge) et profils en travers types',
      'Cubatures : déblais et remblais par la moyenne des aires',
      'Épure des mouvements des terres : équilibre et distances de transport',
      'Choix des engins et des cadences',
      'Exécution : décapage, extraction, transport, mise en remblai, compactage, contrôle',
    ],
  },
  mistakes: {
    items: [
      ['Confondre volume en place et volume foisonné', 'Sous-estimation du nombre de camions de 20 à 40 %', 'Appliquer le coefficient de foisonnement au transport.'],
      ['Compacter en couches trop épaisses', 'Bas de couche mal compacté, tassements', 'Respecter l’épaisseur et le nombre de passes du GTR pour le compacteur choisi.'],
      ['Ignorer la terre végétale', 'Matériau organique en remblai, tassements', 'Décaper et stocker la terre végétale séparément pour le régalage final.'],
    ],
  },
  tips: {
    tips: [
      'Décapez la terre végétale (20 à 30 cm) et stockez-la en merlons de faible hauteur.',
      'Protégez les plateformes de la pluie par une pente et un compactage de fermeture en fin de journée.',
      'Équilibrez pelle et tombereaux : la pelle ne doit pas attendre les camions, ni l’inverse.',
      'Les engins avec GPS et guidage 3D réduisent les surplus de terrassement et les reprises.',
    ],
  },
  norms: {
    norms: [
      ['NF P 11-300', 'Classification des matériaux (GTR).'],
      ['Guide technique « Réalisation des remblais et des couches de forme » (GTR, Sétra-LCPC)', 'Conditions d’utilisation et de compactage des sols.'],
      ['NF P 94-093', 'Essai Proctor normal et modifié.'],
      ['Fascicule 2 du CCTG', 'Terrassements généraux (marchés publics).'],
    ],
  },
  exercises: {
    exercises: [
      {
        level: 1,
        text: 'Calculer le volume de déblai entre deux profils de 35 m² et 47 m² distants de 20 m.',
        hint: 'V = (S₁ + S₂)/2 × d.',
        answer_latex: "V = \\frac{35 + 47}{2} \\times 20 = 820\\ \\text{m}^3",
        answer_text: '820 m³ en place.',
      },
      {
        level: 2,
        text: 'Combien de rotations de camions de 12 m³ faut-il pour évacuer ce déblai si f = 0,20 ?',
        hint: 'Volume foisonné / capacité.',
        answer_latex: "V_f = 820 \\times 1{,}20 = 984\\ \\text{m}^3 \\qquad n = \\frac{984}{12} = 82",
        answer_text: '82 rotations.',
      },
      {
        level: 3,
        text: 'Un tombereau de 18 m³ a un cycle de 15 min et une efficacité de 0,8. Combien de tombereaux faut-il pour suivre une pelle produisant 200 m³ foisonnés/h ?',
        hint: 'Q par tombereau = 18 × 60/15 × 0,8.',
        answer_latex: "Q_1 = 18 \\times 4 \\times 0{,}8 = 57{,}6\\ \\text{m}^3/\\text{h} \\qquad n = \\frac{200}{57{,}6} = 3{,}5 \\Rightarrow 4",
        answer_text: '4 tombereaux.',
      },
    ],
  },
  quiz: {
    title: 'Quiz — Terrassements',
    questions: [
      { q: 'Quel volume transporte un camion ?', options: ['Le volume en place', 'Le volume foisonné', 'Le volume compacté'], correct: 1, explain: 'Les terres extraites occupent plus de place : on transporte du volume foisonné.' },
      { q: 'Que vaut l’objectif q4 de compactage ?', options: ['≈ 90 % OPN', '≈ 95 % OPN', '≈ 100 % OPM'], correct: 1, explain: 'q4 correspond à environ 95 % de la densité sèche de l’OPN.' },
      { q: 'Que représente une portion croissante de la courbe des volumes cumulés ?', options: ['Une zone de remblai', 'Une zone de déblai', 'Un ouvrage d’art'], correct: 1, explain: 'Le cumul augmente là où l’on extrait des terres.' },
    ],
  },
  exam_questions: {
    questions: [
      'Expliquez le calcul des cubatures à partir des profils en travers, y compris pour un profil mixte.',
      'Présentez l’épure des mouvements des terres et son usage pour organiser le chantier.',
      'Décrivez le contrôle du compactage d’un remblai et les objectifs de densification.',
    ],
  },
  interview_questions: {
    questions: [
      ['Comment réduire le coût des terrassements d’un projet ?', 'Caler le profil en long pour équilibrer déblais et remblais, réduire les distances de transport, valoriser les matériaux (traitement à la chaux ou au liant), organiser les phases selon la météo et adapter les engins aux distances.'],
      ['Que faire d’un déblai argileux trop humide ?', "Le laisser s'aérer si la météo le permet, le traiter à la chaux vive pour l'assécher, ou le mettre en dépôt ; on évite de le compacter en l'état car il formerait un remblai instable et peu portant."],
    ],
  },
  practical_case: {
    title: 'Cas pratique — Bilan de terrassement d’une voie nouvelle',
    scenario: 'Une voie de 600 m donne 9 600 m³ de déblai (limons, f = 0,20, réemployables après traitement) et 7 500 m³ de remblai compacté. Coefficient de passage du volume en place au volume compacté : 0,95.',
    description: 'Établir le bilan déblais / remblais et l’excédent à évacuer.',
    resolutions: [
      "\\text{Remblai en volume en place équivalent : } \\frac{7\\,500}{0{,}95} = 7\\,895\\ \\text{m}^3",
      "\\text{Excédent en place : } 9\\,600 - 7\\,895 = 1\\,705\\ \\text{m}^3",
      "\\text{Volume foisonné à évacuer : } 1\\,705 \\times 1{,}20 = 2\\,046\\ \\text{m}^3 \\approx 171\\ \\text{camions de 12 m}^3",
    ],
    conclusion: "Le projet est presque équilibré ; l'excédent d'environ 1 700 m³ en place (2 050 m³ foisonnés) peut être valorisé en modelés paysagers ou merlons acoustiques au lieu d'être mis en décharge.",
  },
  summary: {
    content: `### Les terrassements en 5 points
1. Profil en long + profils en travers → cubatures.
2. Moyenne des aires : $V = \\frac{S_1 + S_2}{2} d$.
3. Volumes en place, foisonné ($\\times (1+f)$), compacté.
4. Compactage contrôlé par rapport à l'OPN (q4 ≈ 95 %, q3 ≈ 98,5 %).
5. Équilibrer déblais/remblais et dimensionner les engins : $Q = V \\frac{60}{T} E$.`,
  },
  key_points: {
    points: [
      'V = (S₁ + S₂)/2 × d',
      'f : sables 10-15 %, argiles 20-30 %, roches 30-50 %',
      'q4 ≈ 95 % OPN ; q3 ≈ 98,5 % OPN',
      'Q = V_benne × 60/T_cycle × E',
      'Toujours préciser en place / foisonné / compacté',
    ],
  },
  self_assessment: {
    objectives: [
      'Je sais calculer des cubatures entre profils en travers',
      'Je sais appliquer le foisonnement au transport',
      'Je sais contrôler un taux de compactage',
      'Je sais dimensionner un atelier de transport',
      "J'ai réussi le quiz avec au moins 2 bonnes réponses sur 3",
    ],
  },
});
