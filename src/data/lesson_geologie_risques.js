// ── Lesson: Risques géologiques — Module 36 ──────────────────────────────────
import { buildLesson } from './build_lesson.js';

export const lesson_geologie_risques = buildLesson({
  moduleId: 36,
  slug: 'geologie_risques',
  lessonIndex: 4,
  title: "Risques Géologiques : Chutes de Blocs, Cavités et Fontis, Retrait-Gonflement des Argiles, Liquéfaction",
  subtitle: "Module 36 — Géologie de l'Ingénieur",
  level: 'Intermédiaire',
  duration: '6h',
  tags: ['Risques naturels', 'Chutes de blocs', 'Cavités', 'Fontis', 'Retrait-gonflement', 'Karst', 'PPR'],
}, {
  definition: {
    title: 'Définition — Les dangers venant du sol et du sous-sol',
    fr: 'Risques géologiques',
    en: 'Geological hazards',
    metier: "Concerne les géotechniciens, les collectivités, les aménageurs, les assureurs et les ingénieurs de conception.",
    content: `Un **risque géologique** combine un **aléa** (phénomène géologique possible, avec une probabilité et une intensité) et des **enjeux** exposés (personnes, bâtiments, réseaux) :
$$\\text{Risque} = \\text{Aléa} \\times \\text{Vulnérabilité des enjeux}$$

### Les principaux aléas
- **Mouvements de terrain** : glissements, chutes de blocs, éboulements, coulées.
- **Cavités souterraines** : karst (dissolution du calcaire et du gypse), anciennes carrières et mines ; effondrements et **fontis**.
- **Retrait-gonflement des argiles** (RGA) : variations de volume avec la teneur en eau, première cause de sinistres sur les maisons en France.
- **Séismes** et **liquéfaction** des sables saturés.
- **Volcanisme**, **tsunamis**, **érosion côtière**.

> 💡 En France, les Plans de prévention des risques (PPR) cartographient les aléas et imposent des règles de construction.`,
  },
  importance: {
    content: `- **Vies humaines** : chutes de blocs et effondrements surviennent souvent sans préavis.
- **Coûts** : le RGA représente plusieurs centaines de millions d'euros d'indemnisation par an les années sèches.
- **Urbanisme** : les zones d'aléa fort peuvent être inconstructibles.
- **Obligations** : étude géotechnique préalable obligatoire pour la vente de terrains en zone RGA moyen ou fort (loi ELAN).

> ⚠️ **À retenir** : identifier l'aléa en amont coûte peu ; le découvrir après construction coûte très cher.`,
  },
  applications: {
    examples: [
      ['Route de montagne', 'Filets, merlons et écrans contre les chutes de blocs.'],
      ['Lotissement sur argile', 'Fondations ancrées à 1,20 m minimum, trottoirs périphériques, gestion des eaux.'],
      ['Ville sur anciennes carrières', 'Inspection et comblement des vides par injection.'],
      ['Zone karstique', 'Reconnaissance géophysique avant construction.'],
      ['Port sur remblai sableux', 'Traitement contre la liquéfaction (compactage dynamique, colonnes ballastées).'],
    ],
  },
  theory: {
    title: 'Théorie — Quantifier les aléas',
    content: `### 1. Chutes de blocs
Énergie d'un bloc de masse $m$ tombant d'une hauteur $h$ (sans frottement, borne supérieure) :
$$E = m \\, g \\, h \\qquad v = \\sqrt{2 g h}$$
Les ouvrages de protection sont classés par l'énergie qu'ils absorbent (filets de 100 à plus de 5 000 kJ). Les trajectoires réelles sont étudiées par simulations trajectographiques.

### 2. Cavités et fontis
Lorsqu'un vide de hauteur $H_v$ s'effondre, les terrains au-dessus se décompressent (foisonnement $k$). La cloche de fontis remonte jusqu'à une hauteur d'environ :
$$h_f = \\frac{H_v}{k - 1}$$
Si $h_f$ dépasse la profondeur du toit du vide, un effondrement peut atteindre la surface.

### 3. Retrait-gonflement des argiles
La variation de hauteur d'une couche d'argile d'épaisseur active $H_a$ :
$$\\Delta H = \\varepsilon_v \\, H_a$$
L'épaisseur active est de l'ordre de 1 à 2 m en climat tempéré, davantage sous les arbres.

### 4. Probabilité d'occurrence
Pour un phénomène de période de retour $T$, la probabilité d'au moins une occurrence en $n$ années :
$$P = 1 - \\left( 1 - \\frac{1}{T} \\right)^n$$

### 5. Liquéfaction
Les sables lâches saturés perdent leur résistance sous séisme quand la pression interstitielle atteint la contrainte effective. On compare la sollicitation cyclique (CSR) à la résistance (CRR) déduite d'essais in situ (SPT, CPT).`,
  },
  formulas: {
    title: 'Formules essentielles — Risques géologiques',
    formulas: [
      {
        name: 'Énergie d’un bloc',
        latex: "E = m \\, g \\, h \\qquad v = \\sqrt{2 g h}",
        description: 'Borne supérieure (chute libre).',
        vars: [
          ['E', 'Énergie', 'J', ''],
          ['m', 'Masse du bloc', 'kg', 'ρ × V, avec ρ ≈ 2 600 à 2 700 kg/m³.'],
          ['h', 'Hauteur de chute', 'm', ''],
        ],
      },
      {
        name: 'Hauteur de remontée d’un fontis',
        latex: "h_f = \\frac{H_v}{k - 1}",
        description: 'Modèle simplifié de foisonnement.',
        vars: [
          ['H_v', 'Hauteur du vide', 'm', ''],
          ['k', 'Coefficient de foisonnement', '-', '1,1 à 1,5 selon les terrains.'],
        ],
      },
      {
        name: 'Probabilité d’occurrence',
        latex: "P = 1 - \\left(1 - \\frac{1}{T}\\right)^n",
        description: 'Au moins un événement en n années.',
        vars: [
          ['T', 'Période de retour', 'an', ''],
          ['n', 'Durée considérée', 'an', 'Durée de vie de l’ouvrage.'],
        ],
      },
      {
        name: 'Variation de hauteur par retrait-gonflement',
        latex: "\\Delta H = \\varepsilon_v \\, H_a",
        description: 'Ordre de grandeur des mouvements des fondations superficielles.',
        vars: [
          ['\\varepsilon_v', 'Déformation volumique', '-', 'Mesurée à l’œdomètre.'],
          ['H_a', 'Épaisseur active', 'm', 'Zone soumise aux variations d’humidité.'],
        ],
      },
    ],
  },
  stepbystep: {
    title: 'Calcul complet — Protéger une route contre les chutes de blocs',
    problem: "Une falaise calcaire domine une route. Le bloc de projet a un volume de 2 m³ (ρ = 2 700 kg/m³) et peut tomber de 30 m au-dessus de l'écran envisagé. Estimer l'énergie et la vitesse maximales, puis choisir la classe d'écran.",
    steps_demo: [
      { n: 1, text: "Masse : m = 2 × 2 700 = 5 400 kg." },
      { n: 2, text: "Énergie (borne supérieure) : E = 5 400 × 9,81 × 30 = 1,59 × 10⁶ J = 1 590 kJ." },
      { n: 3, text: "Vitesse : v = √(2 × 9,81 × 30) = 24,3 m/s." },
      { n: 4, text: "Une étude trajectographique réduira probablement l'énergie (frottements, rebonds) ; à ce stade, on retient un écran certifié de 2 000 kJ." },
      { n: 5, text: "On complète par une purge des blocs instables et un entretien régulier de l'écran." },
    ],
    result_latex: "E = 5\\,400 \\times 9{,}81 \\times 30 = 1\\,590\\ \\text{kJ} \\qquad v = \\sqrt{2 \\times 9{,}81 \\times 30} = 24{,}3\\ \\text{m/s}",
  },
  units: {
    table: [
      ['Énergie', 'kJ', 'ft·lbf', '1 kJ = 737,6 ft·lbf'],
      ['Volume de bloc', 'm³', 'yd³', '1 m³ = 1,308 yd³'],
      ['Vitesse', 'm/s', 'ft/s', '1 m/s = 3,281 ft/s'],
      ['Période de retour', 'ans', 'years', 'Inverse de la probabilité annuelle'],
      ['Déformation', '%', '%', 'Gonflement libre mesuré à l’œdomètre'],
    ],
    note: 'Les écrans de filets sont évalués selon le document européen EAD 340059-00-0106 (anciennement ETAG 027).',
  },
  hypotheses: {
    items: [
      ['info', 'L’énergie en chute libre surestime l’énergie réelle, mais les rebonds peuvent dévier les trajectoires.'],
      ['info', 'Le modèle de foisonnement suppose un effondrement progressif des terrains de recouvrement.'],
      ['warning', 'Les zones de cavités anciennes sont souvent mal connues : consultez les bases de données (BRGM, inspections des carrières).'],
      ['warning', 'Les arbres proches d’une maison sur argile aggravent fortement le retrait en été.'],
      ['tip', 'Consultez Géorisques et le PPR de la commune avant tout projet.'],
    ],
  },
  simple_examples: {
    examples: [
      {
        title: 'Exemple 1 : remontée de fontis',
        given: 'Galerie de 2 m de haut ; k = 1,25 ; toit à 10 m de profondeur',
        find: 'h_f',
        solution_latex: "h_f = \\frac{2}{1{,}25 - 1} = 8\\ \\text{m} < 10\\ \\text{m}",
        result: 'La cloche s’arrête théoriquement 2 m sous la surface : marge faible, surveillance ou comblement nécessaires.',
      },
      {
        title: 'Exemple 2 : probabilité d’un séisme',
        given: 'T = 475 ans ; n = 50 ans',
        find: 'P',
        solution_latex: "P = 1 - \\left(1 - \\frac{1}{475}\\right)^{50} = 0{,}10",
        result: '10 % en 50 ans : c’est la définition de l’action sismique de référence des Eurocodes.',
      },
      {
        title: 'Exemple 3 : retrait d’une argile',
        given: 'ε_v = 2 % ; H_a = 1,5 m',
        find: 'ΔH',
        solution_latex: "\\Delta H = 0{,}02 \\times 1{,}5 = 0{,}030\\ \\text{m}",
        result: '3 cm : suffisant pour fissurer une maison fondée superficiellement.',
      },
    ],
  },
  real_examples: {
    title: 'Exemple réel — Sécheresse de 2022 et sinistres de retrait-gonflement en France',
    examples: [
      {
        context: 'Été 2022, sécheresse exceptionnelle',
        scenario: "La sécheresse a provoqué des fissurations de dizaines de milliers de maisons individuelles fondées superficiellement sur des sols argileux. Le coût des sinistres a été parmi les plus élevés jamais enregistrés pour ce phénomène. Les constructions récentes respectant les dispositions de la loi ELAN (fondations plus profondes, chaînages, éloignement des arbres) ont été nettement moins touchées.",
        decomposition_latex: "\\text{Sécheresse} + \\text{argile gonflante} + \\text{fondations peu profondes} \\Rightarrow \\text{tassements différentiels} \\Rightarrow \\text{fissures}",
        lesson: "Le retrait-gonflement se prévient à la conception : étude géotechnique, fondations ancrées, structure rigide, gestion des eaux et de la végétation.",
      },
    ],
  },
  diagrams: {
    title: 'Schéma de principe — Démarche face à un risque géologique',
    diagram_description: [
      'Recherche documentaire : PPR, Géorisques, cartes géologiques, archives',
      'Reconnaissance : géophysique, sondages, relevés de falaise',
      'Caractérisation de l’aléa : probabilité, intensité, extension',
      'Analyse de la vulnérabilité des enjeux',
      'Mesures : éviter, protéger, renforcer, surveiller',
      'Entretien des protections et alerte',
    ],
  },
  mistakes: {
    items: [
      ['Construire sans consulter les cartes d’aléas', 'Exposition non anticipée', 'Consulter PPR et Géorisques dès l’esquisse.'],
      ['Fondations superficielles trop peu profondes sur argile', 'Fissurations en été', 'Ancrage ≥ 1,20 m en zone d’aléa fort, chaînages.'],
      ['Oublier l’entretien des écrans pare-blocs', 'Filets saturés inefficaces', 'Visites et purges régulières.'],
    ],
  },
  tips: {
    tips: [
      'Utilisez la géophysique (microgravimétrie, radar) pour détecter les cavités.',
      'Évitez de planter de grands arbres à moins d’une fois et demie leur hauteur d’une maison sur argile.',
      'Collectez et éloignez les eaux pluviales des fondations.',
      'Prévoyez un plan de surveillance pour les falaises au-dessus des voies.',
    ],
  },
  norms: {
    norms: [
      ['Code de l’environnement, L. 562-1', 'Plans de prévention des risques naturels prévisibles.'],
      ['Loi ELAN (2018) et arrêtés de 2019', 'Étude géotechnique obligatoire en zone d’aléa RGA moyen ou fort.'],
      ['NF P 94-500', 'Missions d’ingénierie géotechnique (G1 à G5).'],
      ['NF EN 1998-5', 'Fondations et aspects géotechniques en zone sismique (liquéfaction).'],
      ['EAD 340059-00-0106', 'Kits de protection contre les chutes de blocs.'],
    ],
  },
  exercises: {
    exercises: [
      {
        level: 1,
        text: 'Calculer l’énergie d’un bloc de 500 kg tombant de 20 m.',
        hint: 'E = m g h.',
        answer_latex: "E = 500 \\times 9{,}81 \\times 20 = 98\\,100\\ \\text{J}",
        answer_text: 'Environ 98 kJ.',
      },
      {
        level: 2,
        text: 'Quelle est la probabilité d’une crue centennale pendant 30 ans ?',
        hint: 'P = 1 − (1 − 1/T)^n.',
        answer_latex: "P = 1 - 0{,}99^{30} = 0{,}26",
        answer_text: '26 %.',
      },
      {
        level: 3,
        text: 'Une ancienne carrière a des vides de 3,5 m de haut sous 12 m de recouvrement (k = 1,3). Un fontis peut-il atteindre la surface ?',
        hint: 'Comparer h_f au recouvrement.',
        answer_latex: "h_f = \\frac{3{,}5}{0{,}3} = 11{,}7\\ \\text{m} \\approx 12\\ \\text{m}",
        answer_text: 'Oui, très probablement : le fontis peut déboucher en surface. Comblement par injection ou fondations profondes requis.',
      },
    ],
  },
  quiz: {
    title: 'Quiz — Risques géologiques',
    questions: [
      { q: 'Qu’est-ce qu’un fontis ?', options: ['Un glissement de terrain', 'Un effondrement localisé au-dessus d’une cavité', 'Une coulée de boue'], correct: 1, explain: 'La voûte d’une cavité remonte jusqu’à la surface.' },
      { q: 'Quelle est la première cause de sinistres sur les maisons en France ?', options: ['Les séismes', 'Le retrait-gonflement des argiles', 'Les volcans'], correct: 1, explain: 'Le RGA cause de très nombreux sinistres en période de sécheresse.' },
      { q: 'Risque = …', options: ['Aléa × vulnérabilité des enjeux', 'Aléa + coût', 'Probabilité seule'], correct: 0, explain: 'Sans enjeu exposé, il n’y a pas de risque.' },
    ],
  },
  exam_questions: {
    questions: [
      'Distinguez aléa, enjeu et risque à partir d’un exemple.',
      'Présentez les mesures de protection contre les chutes de blocs.',
      'Comment prévenir les désordres liés au retrait-gonflement des argiles ?',
    ],
  },
  interview_questions: {
    questions: [
      ['Un client veut construire sur un terrain en zone d’aléa RGA fort : que lui conseillez-vous ?', 'Une étude géotechnique G1 puis G2, des fondations ancrées et homogènes, une structure chaînée, une gestion des eaux pluviales et l’éloignement des arbres.'],
      ['Comment détectez-vous une cavité ?', 'Par la recherche d’archives, la géophysique (microgravimétrie, radar, sismique) puis des sondages destructifs ciblés pour confirmer et délimiter les vides.'],
    ],
  },
  practical_case: {
    title: 'Cas pratique — Lotissement sur ancienne zone de carrières',
    scenario: 'Un lotissement de 20 lots est prévu sur une zone où des carrières souterraines de calcaire (vides de 3 m, recouvrement de 15 à 25 m, k = 1,25) sont signalées.',
    description: 'Évaluer l’aléa et proposer une stratégie.',
    resolutions: [
      "h_f = \\frac{3}{0{,}25} = 12\\ \\text{m} < 15\\ \\text{m} \\Rightarrow \\text{fontis théoriquement non débouchant}",
      "\\text{Mais incertitudes (piliers dégradés, effondrements multiples)} \\Rightarrow \\text{géophysique} + \\text{sondages}",
      "\\text{Zones de recouvrement} < 15\\ \\text{m ou piliers dégradés : comblement par injection sous emprises bâties}",
    ],
    conclusion: 'L’aménagement est possible après reconnaissance complète et traitement des zones critiques, avec une servitude d’inspection.',
  },
  summary: {
    content: `### Les risques géologiques en 5 points
1. Risque = aléa × vulnérabilité.
2. Chutes de blocs : $E = m g h$ et écrans dimensionnés en kJ.
3. Cavités : fontis $h_f = H_v / (k - 1)$.
4. Retrait-gonflement : étude géotechnique et fondations adaptées.
5. $P = 1 - (1 - 1/T)^n$ pour la probabilité sur la durée de vie.`,
  },
  key_points: {
    points: [
      'Risque = aléa × vulnérabilité',
      'E = m g h',
      'h_f = H_v / (k − 1)',
      'P = 1 − (1 − 1/T)ⁿ',
      'Consulter PPR et Géorisques',
    ],
  },
  self_assessment: {
    objectives: [
      'Je connais les principaux aléas géologiques',
      'Je sais estimer l’énergie d’une chute de bloc',
      'Je sais évaluer le risque de fontis',
      'Je sais calculer une probabilité d’occurrence',
      "J'ai réussi le quiz avec au moins 2 bonnes réponses sur 3",
    ],
  },
});
