// ── Lesson: SIG et projections cartographiques — Module 22 ───────────────────
import { buildLesson } from './build_lesson.js';

export const lesson_topo_sig = buildLesson({
  moduleId: 22,
  slug: 'topo_sig',
  lessonIndex: 3,
  title: "SIG & Projections : Lambert 93, Réduction des Distances, Données Vecteur et Raster",
  subtitle: 'Module 22 — Topographie, Géodésie & SIG',
  level: 'Intermédiaire',
  duration: '8h',
  tags: ['SIG', 'QGIS', 'Lambert 93', 'RGF93', 'Projection', 'MNT', 'Vecteur', 'Raster'],
}, {
  definition: {
    title: 'Définition — Situer et analyser l’information géographique',
    fr: "Système d'information géographique (SIG) et projections",
    en: 'Geographic Information System (GIS) and map projections',
    metier: "Utilisé par les géomètres, les urbanistes, les gestionnaires de réseaux, les ingénieurs VRD et les collectivités.",
    content: `Un **SIG** est un ensemble de logiciels et de données permettant de stocker, analyser et représenter des objets géoréférencés : parcelles, réseaux, routes, zones inondables. QGIS (libre) et ArcGIS sont les plus utilisés.

### Deux types de données
- **Vecteur** : points, lignes, polygones, chacun associé à une ligne d'une **table attributaire** (diamètre d'une conduite, propriétaire d'une parcelle).
- **Raster** : grille de cellules (pixels) portant une valeur (altitude d'un MNT, photo aérienne, occupation du sol).

### Les projections
La Terre est approchée par un **ellipsoïde** (GRS80 pour le RGF93). Pour dessiner un plan, on **projette** l'ellipsoïde sur un plan, ce qui déforme forcément les distances. En France métropolitaine, la projection légale est le **Lambert 93** (conique conforme, système RGF93).

> 💡 Une même coordonnée n'a de sens qu'avec son système (code EPSG) : Lambert 93 = EPSG:2154, WGS84 géographique = EPSG:4326.`,
  },
  importance: {
    content: `- **Interopérabilité** : réseaux, cadastre, PLU et projets doivent se superposer exactement.
- **Analyse** : zones inondables, contraintes environnementales, choix de tracé.
- **Gestion patrimoniale** : inventaire et âge des réseaux, planification des renouvellements.
- **Réglementation** : les plans des réseaux sensibles (DT-DICT) sont rattachés au système national.

> ⚠️ **À retenir** : une erreur de système de coordonnées peut décaler des données de plusieurs centaines de mètres.`,
  },
  applications: {
    examples: [
      ['Réseaux d’eau', 'Inventaire des conduites, diamètres, matériaux et âges dans un SIG.'],
      ['Étude de tracé', 'Superposition de contraintes (pentes, zones protégées, bâti) pour choisir un itinéraire.'],
      ['Risque inondation', 'Croisement d’un MNT et de hauteurs d’eau pour cartographier les zones exposées.'],
      ['Urbanisme', 'Zonage du PLU superposé au cadastre.'],
      ['Chantier', 'Conversion des coordonnées GNSS vers le système du projet.'],
    ],
  },
  theory: {
    title: 'Théorie — De la mesure terrain au plan projeté',
    content: `### 1. Systèmes de référence
- **Géographiques** : latitude φ et longitude λ sur l'ellipsoïde (WGS84 pour le GPS, RGF93 en France ; les deux diffèrent de moins d'un mètre).
- **Projetés** : coordonnées planes E, N en mètres (Lambert 93, UTM).
- **Altimétriques** : altitudes NGF-IGN69, différentes des hauteurs ellipsoïdales du GNSS (écart corrigé par une grille de géoïde, environ 50 m en France).

### 2. Le Lambert 93
Projection conique conforme sécante aux parallèles 44° N et 49° N ; origine 3° E, 46,5° N ; coordonnées de l'origine E = 700 000 m, N = 6 600 000 m. Conforme : les angles sont conservés, les distances sont altérées (de l'ordre de −1 à +3 m/km selon la latitude).

### 3. Réduction des distances
Une distance horizontale mesurée sur le terrain doit être :
1. ramenée à l'ellipsoïde (correction d'altitude) : $D_0 = D_h \\cdot \\frac{R}{R + H}$ ;
2. projetée : $D_p = k \\cdot D_0$, avec $k$ le facteur d'échelle local.

### 4. Analyses SIG courantes
- **Zone tampon (buffer)** : bande d'une largeur donnée autour d'un objet.
- **Intersection et jointure spatiale** : croiser des couches (parcelles × zone inondable).
- **Analyse de MNT** : pente, orientation, bassins versants.
- **Calcul de surface** d'un polygone à partir de ses sommets (formule de Gauss).`,
  },
  formulas: {
    title: 'Formules essentielles — Géodésie et SIG',
    formulas: [
      {
        name: 'Réduction à l’ellipsoïde',
        latex: "D_0 = D_h \\cdot \\frac{R}{R + H}",
        description: 'Une distance mesurée en altitude est plus longue que sa projection sur l’ellipsoïde.',
        vars: [
          ['D_0', 'Distance sur l’ellipsoïde', 'm', 'Distance réduite.'],
          ['D_h', 'Distance horizontale mesurée', 'm', 'Sur le terrain.'],
          ['R', 'Rayon terrestre moyen', 'm', '≈ 6 380 000 m.'],
          ['H', 'Altitude moyenne de la mesure', 'm', 'Ellipsoïdale, ≈ altitude NGF + ondulation du géoïde.'],
        ],
        rule: 'Correction d’environ −1,6 cm par km pour 100 m d’altitude.',
      },
      {
        name: 'Distance projetée',
        latex: "D_p = k \\cdot D_0 = D_0 \\left(1 + \\frac{\\text{alt}}{1000}\\right)",
        description: 'Le facteur d’échelle k dépend de la latitude ; « alt » est l’altération linéaire en m/km.',
        vars: [
          ['D_p', 'Distance en projection', 'm', 'Celle du plan Lambert.'],
          ['k', "Facteur d'échelle", '-', 'Proche de 1.'],
          ['\\text{alt}', 'Altération linéaire', 'm/km', 'Fournie par les grilles ou logiciels.'],
        ],
      },
      {
        name: 'Surface d’un polygone (formule de Gauss)',
        latex: "A = \\frac{1}{2} \\left| \\sum_{i=1}^{n} (X_i Y_{i+1} - X_{i+1} Y_i) \\right|",
        description: 'Surface à partir des coordonnées des sommets, avec X_{n+1} = X_1.',
        vars: [
          ['A', 'Surface', 'm²', 'En projection.'],
          ['X_i, Y_i', 'Coordonnées des sommets', 'm', 'Parcourus dans l’ordre.'],
        ],
      },
      {
        name: 'Taille d’un raster',
        latex: "N = \\frac{L_x}{r} \\times \\frac{L_y}{r} \\qquad V = N \\times o",
        description: 'Nombre de cellules et volume mémoire.',
        vars: [
          ['N', 'Nombre de cellules', '-', ''],
          ['L_x, L_y', 'Dimensions de l’emprise', 'm', ''],
          ['r', 'Résolution', 'm', 'Taille d’une cellule.'],
          ['o', 'Octets par cellule', 'octet', '4 pour un réel simple précision.'],
        ],
        rule: 'Diviser la résolution par 2 multiplie le volume par 4.',
      },
    ],
  },
  stepbystep: {
    title: 'Calcul complet — Réduction d’une distance au Lambert 93',
    problem: "Une base est mesurée à 1 000,000 m horizontaux à une altitude de 300 m, dans une zone où l'altération linéaire du Lambert 93 vaut +0,8 m/km. Calculer la distance à utiliser dans les coordonnées Lambert.",
    steps_demo: [
      { n: 1, text: "Correction d'altitude : R/(R + H) = 6 380 000 / 6 380 300 = 0,999953." },
      { n: 2, text: "D₀ = 1 000,000 × 0,999953 = 999,953 m (−4,7 cm)." },
      { n: 3, text: "Facteur d'échelle : k = 1 + 0,8/1 000 = 1,0008." },
      { n: 4, text: "D_p = 999,953 × 1,0008 = 1 000,753 m (+80 cm)." },
      { n: 5, text: "Écart total de +75 cm par km entre le terrain et le plan : il faut en tenir compte en implantant depuis des coordonnées Lambert." },
    ],
    result_latex: "D_p = 1\\,000 \\times \\frac{6\\,380\\,000}{6\\,380\\,300} \\times 1{,}0008 = 1\\,000{,}753\\ \\text{m}",
  },
  units: {
    table: [
      ['Coordonnées planes', 'm (E, N)', 'ft (state plane)', 'Lambert 93 : E ≈ 100 000 à 1 250 000'],
      ['Coordonnées géographiques', '° décimaux', '° ′ ″', '1″ de latitude ≈ 31 m'],
      ['Altération linéaire', 'm/km', 'ppm', '1 m/km = 1 000 ppm'],
      ['Résolution raster', 'm/pixel', 'ft/pixel', 'MNT courant : 1 à 25 m'],
      ['Échelle', '1/n', '1 in = n ft', '1/500 : 1 mm = 0,5 m'],
    ],
    note: 'Toujours indiquer le code EPSG du système de coordonnées avec les données échangées.',
  },
  hypotheses: {
    items: [
      ['info', 'Le rayon terrestre moyen R ≈ 6 380 km suffit pour la réduction d’altitude des distances courantes.'],
      ['info', 'Une projection conforme conserve les angles mais jamais les distances ni les surfaces partout.'],
      ['warning', 'Les hauteurs GNSS sont ellipsoïdales : sans grille de géoïde, les altitudes sont fausses d’environ 50 m en France.'],
      ['warning', 'Superposer des couches de systèmes différents sans reprojection produit des décalages importants.'],
      ['tip', 'Sur un chantier étendu, on peut travailler dans un système local à échelle 1 rattaché au Lambert pour que les distances du plan égalent celles du terrain.'],
    ],
  },
  simple_examples: {
    examples: [
      {
        title: 'Exemple 1 : surface d’une parcelle',
        given: 'Sommets (0 ; 0), (50 ; 0), (60 ; 40), (10 ; 30) en m',
        find: 'Surface',
        solution_latex: "A = \\frac{1}{2} \\left| 0 + 2\\,000 + (1\\,800 - 400) + 0 \\right| = \\frac{3\\,400}{2} = 1\\,700\\ \\text{m}^2",
        result: '1 700 m².',
      },
      {
        title: 'Exemple 2 : taille d’un MNT',
        given: 'Emprise 1 km × 1 km, résolution 0,5 m, 4 octets par cellule',
        find: 'Nombre de cellules et volume',
        solution_latex: "N = 2\\,000 \\times 2\\,000 = 4 \\times 10^6 \\qquad V = 16 \\times 10^6\\ \\text{octets} \\approx 16\\ \\text{Mo}",
        result: '4 millions de cellules, environ 16 Mo.',
      },
      {
        title: 'Exemple 3 : zone tampon autour d’une conduite',
        given: 'Conduite rectiligne de 1 000 m, tampon de 5 m de chaque côté',
        find: 'Surface du tampon',
        solution_latex: "A = 1\\,000 \\times 10 + \\pi \\times 5^2 = 10\\,078{,}5\\ \\text{m}^2",
        result: 'Environ 10 080 m² (bande plus deux demi-disques aux extrémités).',
      },
    ],
  },
  real_examples: {
    title: 'Exemple réel — Réseau décalé par un mauvais système de coordonnées',
    examples: [
      {
        context: 'Intégration de plans de récolement dans le SIG d’une collectivité',
        scenario: "Des plans livrés en ancien Lambert II étendu ont été importés comme s'ils étaient en Lambert 93. Les conduites apparaissaient à environ 1 km de leur position réelle, puis un second lot a été « recalé » à la main avec plusieurs mètres d'erreur. Une DICT a ensuite indiqué un réseau au mauvais endroit.",
        decomposition_latex: "\\text{Système non déclaré} + \\text{recalage manuel} \\Rightarrow \\text{erreurs métriques} \\Rightarrow \\text{risque d'endommagement de réseau}",
        lesson: "Chaque fichier doit indiquer son système (EPSG) ; la conversion se fait par transformation officielle, jamais par recalage visuel.",
      },
    ],
  },
  diagrams: {
    title: 'Schéma de principe — Chaîne de traitement d’une donnée géographique',
    diagram_description: [
      'Acquisition : levé GNSS ou station totale, photogrammétrie, lidar, numérisation',
      'Référencement : système géodésique (RGF93), projection (Lambert 93), altitudes (NGF-IGN69)',
      'Structuration : couches vecteur et raster, tables attributaires',
      'Analyse : tampons, intersections, MNT, pentes, bassins versants',
      'Restitution : cartes, plans, export vers la CAO et le BIM',
      'Mise à jour : récolements et métadonnées',
    ],
  },
  mistakes: {
    items: [
      ['Inverser latitude et longitude', 'Points projetés au milieu de l’océan', 'Vérifier l’ordre des axes du système (EPSG:4326 : latitude puis longitude).'],
      ['Utiliser la hauteur GNSS comme altitude', 'Erreur de l’ordre de 50 m', 'Appliquer la grille de géoïde officielle.'],
      ['Calculer des distances en degrés', 'Résultats sans signification', 'Reprojeter en système métrique avant tout calcul.'],
    ],
  },
  tips: {
    tips: [
      'Définissez le système de projection du projet QGIS avant d’importer des données.',
      'Utilisez les flux officiels (cadastre, orthophotos, MNT) disponibles dans votre pays.',
      'Remplissez les métadonnées : source, date, précision, système.',
      'Contrôlez un import en superposant une orthophoto ou des points connus.',
    ],
  },
  norms: {
    norms: [
      ['Décret n° 2000-1276 modifié (France)', 'RGF93 et Lambert 93 comme système légal en métropole.'],
      ['Directive INSPIRE (2007/2/CE)', 'Infrastructure européenne de données géographiques.'],
      ['ISO 19111 et ISO 19115', 'Référencement par coordonnées et métadonnées géographiques.'],
      ['Réforme DT-DICT', 'Cartographie géoréférencée des réseaux sensibles en classe de précision A.'],
    ],
  },
  exercises: {
    exercises: [
      {
        level: 1,
        text: 'Quel est le code EPSG du Lambert 93 ?',
        hint: 'Il est utilisé dans tous les logiciels SIG.',
        answer_latex: "\\text{EPSG:2154}",
        answer_text: 'EPSG:2154.',
      },
      {
        level: 2,
        text: 'Calculer la correction d’altitude pour une distance de 2 000 m mesurée à 800 m d’altitude.',
        hint: 'ΔD ≈ −D × H / R.',
        answer_latex: "\\Delta D = -2\\,000 \\times \\frac{800}{6\\,380\\,800} = -0{,}251\\ \\text{m}",
        answer_text: 'Environ −25 cm.',
      },
      {
        level: 3,
        text: 'Calculer la surface du polygone (100 ; 100), (180 ; 120), (160 ; 200), (90 ; 170).',
        hint: 'Formule de Gauss, en refermant sur le premier sommet.',
        answer_latex: "\\frac{1}{2} |(12\\,000 - 18\\,000) + (36\\,000 - 19\\,200) + (27\\,200 - 18\\,000) + (9\\,000 - 17\\,000)| = \\frac{12\\,000}{2} = 6\\,000\\ \\text{m}^2",
        answer_text: '6 000 m² (0,6 ha).',
      },
    ],
  },
  quiz: {
    title: 'Quiz — SIG et projections',
    questions: [
      { q: 'Quelle projection est légale en France métropolitaine ?', options: ['UTM 31', 'Lambert 93', 'Mercator'], correct: 1, explain: 'Le Lambert 93, associé au RGF93.' },
      { q: 'Une donnée raster est constituée de…', options: ['Points, lignes et polygones', 'Une grille de cellules', 'Une table attributaire seule'], correct: 1, explain: 'Le raster est une grille de pixels portant une valeur.' },
      { q: 'Une projection conforme conserve…', options: ['Les surfaces', 'Les distances', 'Les angles'], correct: 2, explain: 'Conforme = angles conservés.' },
    ],
  },
  exam_questions: {
    questions: [
      'Expliquez la différence entre coordonnées géographiques, projetées et altitudes.',
      'Décrivez la réduction d’une distance terrain vers le Lambert 93.',
      'Présentez trois analyses SIG utiles à un projet de génie civil.',
    ],
  },
  interview_questions: {
    questions: [
      ['Un fichier DWG arrive sans système de coordonnées : que faites-vous ?', 'Je demande le système à l’émetteur ; à défaut, je compare l’ordre de grandeur des coordonnées aux systèmes possibles et je contrôle sur des points connus ou une orthophoto avant toute utilisation.'],
      ['Pourquoi les distances du plan diffèrent-elles du terrain ?', 'Parce que le plan est projeté : la réduction à l’ellipsoïde et le facteur d’échelle de la projection modifient les distances de quelques centimètres à quelques décimètres par kilomètre.'],
    ],
  },
  practical_case: {
    title: 'Cas pratique — Parcelles touchées par une zone inondable',
    scenario: 'Une commune dispose d’une couche cadastrale (Lambert 93) et d’une carte des hauteurs d’eau centennales issue d’un modèle hydraulique (raster, résolution 5 m).',
    description: 'Identifier les parcelles touchées par plus de 50 cm d’eau et estimer la surface concernée.',
    resolutions: [
      "\\text{Reclassement du raster} : h > 0{,}50\\ \\text{m} \\rightarrow 1, \\text{sinon} \\rightarrow 0",
      "\\text{Vectorisation de la classe 1 puis intersection avec le cadastre}",
      "\\text{Surface touchée} = \\sum A_{intersection} ; \\text{chaque cellule de } 5 \\times 5 = 25\\ \\text{m}^2",
    ],
    conclusion: 'La couche résultat liste les parcelles et la surface inondée de chacune : elle alimente le zonage réglementaire et l’information des propriétaires.',
  },
  summary: {
    content: `### SIG et projections en 5 points
1. Vecteur (points, lignes, polygones + attributs) et raster (grille).
2. Lambert 93 = EPSG:2154, conique conforme, RGF93.
3. Réduction : $D_0 = D_h R/(R+H)$ puis $D_p = k D_0$.
4. Altitudes GNSS : appliquer la grille de géoïde.
5. Analyses : tampons, intersections, MNT, surface par la formule de Gauss.`,
  },
  key_points: {
    points: [
      'Toujours déclarer le système (EPSG)',
      'Lambert 93 = EPSG:2154',
      'D₀ = D_h × R/(R + H)',
      'Conforme = angles conservés',
      'Surface : formule de Gauss',
    ],
  },
  self_assessment: {
    objectives: [
      'Je distingue vecteur et raster',
      'Je connais les systèmes de référence français',
      'Je sais réduire une distance au Lambert 93',
      'Je sais calculer une surface par la formule de Gauss',
      "J'ai réussi le quiz avec au moins 2 bonnes réponses sur 3",
    ],
  },
});
