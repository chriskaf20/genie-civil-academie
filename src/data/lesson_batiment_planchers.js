// ── Lesson: Planchers préfabriqués — Module 41 ───────────────────────────────
import { buildLesson } from './build_lesson.js';

export const lesson_batiment_planchers = buildLesson({
  moduleId: 41,
  slug: 'batiment_planchers',
  lessonIndex: 3,
  title: "Planchers du Bâtiment : Poutrelles-Hourdis, Prédalles, Dalles Alvéolaires — Choix, Charges et Mise en Œuvre",
  subtitle: 'Module 41 — Technologie du bâtiment : gros œuvre & second œuvre',
  level: 'Débutant',
  duration: '5h',
  diagramType: 'none',
  tags: ['Plancher', 'Poutrelles-hourdis', 'Prédalle', 'Dalle alvéolaire', 'Table de compression', 'Étaiement'],
}, {
  definition: {
    title: 'Définition — Les planchers industrialisés',
    fr: 'Planchers préfabriqués (poutrelles-hourdis, prédalles, dalles alvéolaires)',
    en: 'Precast floor systems (beam-and-block, precast planks, hollow-core slabs)',
    metier: "Utilisés par les entreprises de gros œuvre, les bureaux d'études et les conducteurs de travaux du bâtiment.",
    content: `Un **plancher** porte les charges d'un niveau et les transmet aux murs ou aux poutres. À côté de la dalle pleine coulée en place, trois systèmes industrialisés dominent :

- **Poutrelles-hourdis** : poutrelles précontraintes ou treillis tous les 60 cm environ, entrevous (hourdis) en béton, terre cuite ou polystyrène, puis une **dalle de compression** de 4 à 5 cm coulée en place. Désignation « 16 + 4 » : 16 cm d'entrevous + 4 cm de dalle.
- **Prédalles** : plaques de 4 à 6 cm d'épaisseur, contenant les armatures inférieures, servant de coffrage perdu ; on coule le complément de dalle sur chantier.
- **Dalles alvéolaires** : éléments précontraints creux de 1,20 m de large, de 16 à 50 cm d'épaisseur, franchissant de grandes portées sans étai.

> 💡 Le choix se fait sur la portée, les charges, le délai, l'acoustique, le coût et les moyens de levage du chantier.`,
  },
  importance: {
    content: `- **Délais** : moins de coffrage et d'étaiement qu'une dalle pleine.
- **Coût** : la majorité des maisons et petits collectifs utilisent des poutrelles-hourdis.
- **Sécurité** : la pose d'entrevous et les zones non encore bétonnées exposent aux chutes : circulation sur planches et protections collectives.
- **Performance** : masse (acoustique), isolation (entrevous isolants en vide sanitaire), résistance au feu.

> ⚠️ **À retenir** : un plancher préfabriqué se calcule et se pose selon les **tableaux et l'avis technique du fabricant** ; la dalle de compression et ses chaînages sont indispensables au monolithisme.`,
  },
  applications: {
    examples: [
      ['Maison individuelle', 'Poutrelles-hourdis 12 + 4 ou 16 + 4 sur murs en blocs.'],
      ['Vide sanitaire', 'Entrevous isolants en polystyrène pour limiter les déperditions.'],
      ['Logements collectifs', 'Prédalles + dalle coulée : sous-face lisse prête à peindre.'],
      ['Parking, bureaux', 'Dalles alvéolaires de 8 à 15 m de portée sur poutres.'],
      ['Rénovation', 'Plancher léger entre murs existants.'],
    ],
  },
  theory: {
    title: 'Théorie — Fonctionnement et charges d’un plancher',
    content: `### 1. Sens de portée
Les poutrelles et les dalles alvéolaires portent dans **un seul sens**, d'appui à appui. Une dalle pleine sur quatre côtés peut porter dans deux sens.

### 2. Charges surfaciques
- **Poids propre** : 16 + 4 béton ≈ 2,85 kN/m² ; prédalle + dalle 20 cm ≈ 5 kN/m² ; alvéolaire 20 cm ≈ 3 kN/m².
- **Charges permanentes ajoutées** : revêtement, chape, plafond, cloisons (souvent 1 à 2 kN/m²).
- **Exploitation** (EN 1991-1-1) : 1,5 kN/m² en logement, 2,5 à 3 en bureaux, 5 en zone de réunion.

### 3. Charge sur une poutrelle
$$q = (\\gamma_G\\, G + \\gamma_Q\\, Q) \\times e$$
$e$ : entraxe des poutrelles. Le moment maximal (poutrelle sur deux appuis) vaut $M = q L^2 / 8$, à comparer à la valeur admissible du fabricant.

### 4. Étaiement et mise en œuvre
Les poutrelles et prédalles sont étayées pendant le coulage (lignes d'étais tous les 1,5 à 2 m selon l'avis technique). Les dalles alvéolaires s'en dispensent en général. La dalle de compression reçoit un **treillis soudé** et se lie aux **chaînages** périphériques.`,
  },
  formulas: {
    title: 'Formules essentielles — Planchers',
    formulas: [
      {
        name: 'Charge linéique sur une poutrelle',
        latex: "q = (\\gamma_G\\, G + \\gamma_Q\\, Q) \\times e",
        description: 'Charge surfacique ramenée à une poutrelle.',
        vars: [
          ['G', 'Charges permanentes', 'kN/m²', 'Poids propre + revêtements + cloisons.'],
          ['Q', "Charges d'exploitation", 'kN/m²', '1,5 en logement.'],
          ['e', 'Entraxe des poutrelles', 'm', '≈ 0,60 m.'],
          ['\\gamma_G, \\gamma_Q', 'Coefficients ELU', '-', '1,35 et 1,5.'],
        ],
      },
      {
        name: 'Moment maximal',
        latex: "M = \\frac{q L^2}{8}",
        description: 'Poutrelle ou bande de dalle sur deux appuis.',
        vars: [['L', 'Portée entre appuis', 'm', '']],
      },
      {
        name: 'Élancement indicatif',
        latex: "h \\approx \\frac{L}{22} \\text{ à } \\frac{L}{25}",
        description: 'Épaisseur totale d’un plancher poutrelles-hourdis ou alvéolaire courant.',
        vars: [['h', 'Hauteur totale', 'm', 'Ordre de grandeur de prédimensionnement.']],
      },
      {
        name: 'Nombre de poutrelles',
        latex: "n = \\frac{B}{e} + 1",
        description: 'Pour une largeur de pièce B.',
        vars: [['B', 'Largeur à couvrir', 'm', '']],
      },
    ],
  },
  stepbystep: {
    title: 'Calcul complet — Plancher 16 + 4 d’une maison',
    problem: "Plancher poutrelles-hourdis 16 + 4 (poids propre 2,85 kN/m²), portée 4,80 m, entraxe 0,60 m. Revêtements et cloisons : 1,50 kN/m². Logement : Q = 1,5 kN/m². Calculer la charge et le moment de calcul d'une poutrelle, et le nombre de poutrelles pour une pièce de 4,20 m de large.",
    steps_demo: [
      { n: 1, text: "G = 2,85 + 1,50 = 4,35 kN/m²." },
      { n: 2, text: "ELU : 1,35 × 4,35 + 1,5 × 1,5 = 5,87 + 2,25 = 8,12 kN/m²." },
      { n: 3, text: "Par poutrelle : q = 8,12 × 0,60 = 4,87 kN/m." },
      { n: 4, text: "Moment : M = 4,87 × 4,80² / 8 = 14,0 kN·m, à comparer au tableau du fabricant pour le type de poutrelle." },
      { n: 5, text: "Nombre : n = 4,20 / 0,60 + 1 = 8 poutrelles (on ajuste l'entraxe des rives selon le calepinage)." },
      { n: 6, text: "Contrôle d'épaisseur : 4,80 / 0,20 = 24 : cohérent avec un élancement L/22 à L/25." },
    ],
    result_latex: "q = (1{,}35 \\times 4{,}35 + 1{,}5 \\times 1{,}5) \\times 0{,}60 = 4{,}87\\ \\text{kN/m} \\qquad M = \\frac{4{,}87 \\times 4{,}80^2}{8} = 14{,}0\\ \\text{kN·m}",
  },
  units: {
    table: [
      ['Charge surfacique', 'kN/m²', 'psf', '1 kN/m² = 20,9 psf'],
      ['Charge linéique', 'kN/m', 'lb/ft', '1 kN/m = 68,5 lb/ft'],
      ['Moment', 'kN·m', 'kip·ft', '1 kip·ft = 1,356 kN·m'],
      ['Épaisseur', 'cm', 'in', '20 cm ≈ 8 in'],
      ['Entraxe', 'm', 'in', '0,60 m ≈ 24 in'],
    ],
    note: '« 16 + 4 » désigne 16 cm d’entrevous et 4 cm de dalle de compression : 20 cm au total.',
  },
  hypotheses: {
    items: [
      ['info', 'Les poids propres indiqués sont des ordres de grandeur ; les fiches des fabricants font foi.'],
      ['info', 'Les poutrelles sont calculées sur deux appuis ; la continuité sur appui intermédiaire demande des chapeaux.'],
      ['warning', 'Ne jamais marcher sur les entrevous non bétonnés : circuler sur des planches posées sur les poutrelles.'],
      ['warning', 'Les trémies (escalier, gaines) imposent des chevêtres et renforts définis par le fabricant ou le BET.'],
      ['tip', 'Vérifiez le calepinage avant commande : sens de pose, rives, trémies et longueurs d’appui (≥ 5 cm sur les murs).'],
    ],
  },
  simple_examples: {
    examples: [
      { title: 'Exemple 1 : nombre de poutrelles', given: 'Pièce de 3,60 m de large, entraxe 0,60 m', find: 'n', solution_latex: "n = \\frac{3{,}60}{0{,}60} + 1 = 7", result: '7 poutrelles.' },
      { title: 'Exemple 2 : épaisseur d’une dalle alvéolaire', given: 'Portée 9,60 m, élancement L/40 (élément précontraint)', find: 'h', solution_latex: "h \\approx \\frac{9{,}60}{40} = 0{,}24\\ \\text{m}", result: 'Dalle alvéolaire de 24 à 26 cm environ (à confirmer par le fabricant selon les charges).' },
      { title: 'Exemple 3 : charge de service', given: 'G = 4,35 ; Q = 1,5 kN/m² ; entraxe 0,60 m', find: 'q ELS', solution_latex: "q = (4{,}35 + 1{,}5) \\times 0{,}60 = 3{,}51\\ \\text{kN/m}", result: '3,51 kN/m pour vérifier la flèche.' },
    ],
  },
  real_examples: {
    title: 'Exemple réel — Effondrement d’un plancher en cours de coulage',
    examples: [
      {
        context: 'Chantier de maison individuelle, plancher poutrelles-hourdis',
        scenario: "Le plancher a été coulé avec une seule ligne d'étais au lieu des deux prévues par l'avis technique, sur une dalle de sol encore fraîche. Sous le poids du béton frais et des ouvriers, les étais ont poinçonné le sol et les poutrelles ont fléchi jusqu'à la rupture.",
        decomposition_latex: "\\text{Étaiement insuffisant} + \\text{appui des étais non fiable} \\Rightarrow \\text{effondrement au coulage}",
        lesson: "Le plan d'étaiement du fabricant est une exigence de sécurité : nombre de files, espacement, appuis répartis (madriers) sur un sol stable.",
      },
    ],
  },
  diagrams: {
    title: 'Schéma de principe — Choisir un plancher',
    diagram_description: [
      'Portée et charges : logement, bureaux, parking',
      'Poutrelles-hourdis : portées jusqu’à 6–7 m, léger et économique',
      'Prédalles : sous-face lisse, portées moyennes, levage à la grue',
      'Dalles alvéolaires : grandes portées sans étai, levage lourd',
      'Contraintes : acoustique, feu, isolation, trémies',
      'Calepinage et plan d’étaiement validés par le fabricant',
    ],
  },
  mistakes: {
    items: [
      ['Oublier les cloisons dans G', 'Poutrelle sous-dimensionnée', 'Ajouter 0,5 à 1 kN/m² de cloisons légères selon l’EN 1991-1-1.'],
      ['Appui trop court sur le mur', 'Écrasement ou glissement', 'Respecter la longueur d’appui minimale du fabricant.'],
      ['Dalle de compression sans treillis', 'Fissuration et perte du diaphragme', 'Treillis soudé et liaison aux chaînages.'],
    ],
  },
  tips: {
    tips: [
      'Orientez les poutrelles dans le sens de la plus petite portée.',
      'Doublez les poutrelles sous les cloisons lourdes parallèles.',
      'Prévoyez les réservations (gaines, évacuations) avant la pose.',
      'Pour un vide sanitaire, utilisez des entrevous isolants : gain de 0,5 à 1 m²K/W.',
    ],
  },
  norms: {
    norms: [
      ['NF EN 15037', 'Planchers à poutrelles et entrevous.'],
      ['NF EN 13747', 'Prédalles pour systèmes de planchers.'],
      ['NF EN 1168', 'Dalles alvéolaires.'],
      ['NF EN 1991-1-1', 'Charges permanentes et d’exploitation.'],
      ['Avis techniques / DTA du fabricant', 'Portées, étaiement et mise en œuvre.'],
    ],
  },
  exercises: {
    exercises: [
      { level: 1, text: 'Quelle est l’épaisseur totale d’un plancher 20 + 4 ?', hint: 'Entrevous + dalle de compression.', answer_latex: "20 + 4 = 24\\ \\text{cm}", answer_text: '24 cm.' },
      { level: 2, text: 'Calculer q ELU sur une poutrelle : G = 4,0 kN/m², Q = 2,5 kN/m², entraxe 0,60 m.', hint: '1,35 G + 1,5 Q.', answer_latex: "q = (5{,}40 + 3{,}75) \\times 0{,}60 = 5{,}49\\ \\text{kN/m}", answer_text: '5,49 kN/m.' },
      { level: 3, text: 'Avec q = 5,49 kN/m et L = 5,20 m, quel moment la poutrelle doit-elle reprendre ? La poutrelle choisie admet 17 kN·m : convient-elle ?', hint: 'M = qL²/8.', answer_latex: "M = \\frac{5{,}49 \\times 5{,}20^2}{8} = 18{,}6\\ \\text{kN·m} > 17", answer_text: '18,6 kN·m > 17 kN·m : non, choisir une poutrelle plus forte ou réduire l’entraxe.' },
    ],
  },
  quiz: {
    title: 'Quiz — Planchers',
    questions: [
      { q: 'Dans « 16 + 4 », que représente le 4 ?', options: ['La portée', 'La dalle de compression', 'Le nombre de poutrelles'], correct: 1, explain: '4 cm de dalle coulée sur les entrevous.' },
      { q: 'Quel plancher franchit le plus souvent de grandes portées sans étai ?', options: ['Dalle alvéolaire', 'Poutrelles-hourdis', 'Plancher bois'], correct: 0, explain: 'Les dalles alvéolaires précontraintes portent jusqu’à 15 m et plus.' },
      { q: 'Dans combien de sens porte une poutrelle ?', options: ['Un seul', 'Deux', 'Quatre'], correct: 0, explain: 'D’appui à appui.' },
    ],
  },
  exam_questions: {
    questions: [
      'Comparez dalle pleine, poutrelles-hourdis, prédalles et dalles alvéolaires.',
      'Calculez la charge et le moment de calcul d’une poutrelle.',
      'Quelles précautions de sécurité prendre lors de la pose d’un plancher préfabriqué ?',
    ],
  },
  interview_questions: {
    questions: [
      ['Quel plancher proposez-vous pour un parking de 12 m de portée ?', 'Des dalles alvéolaires précontraintes sur poutres, ou une dalle post-contrainte ; je vérifie le levage, le feu et les charges de véhicules.'],
      ['Que contrôlez-vous avant le coulage d’un plancher poutrelles-hourdis ?', 'Le calepinage, les longueurs d’appui, l’étaiement, les chevêtres, le treillis de la dalle de compression, les chaînages et les réservations.'],
    ],
  },
  practical_case: {
    title: 'Cas pratique — Choix du plancher d’un petit collectif',
    scenario: 'Logements R+2, trame de murs porteurs à 5,40 m, exigence acoustique forte entre logements, grue disponible.',
    description: 'Comparer poutrelles-hourdis 16 + 4 et prédalles + dalle de 20 cm.',
    resolutions: [
      "\\text{Poutrelles 16+4 : } G \\approx 2{,}85\\ \\text{kN/m}^2 \\text{, masse} \\approx 290\\ \\text{kg/m}^2",
      "\\text{Prédalle + dalle 20 cm : } G \\approx 5{,}0\\ \\text{kN/m}^2 \\text{, masse} \\approx 500\\ \\text{kg/m}^2",
      "\\text{Acoustique : la masse surfacique double} \\Rightarrow \\text{meilleur isolement aux bruits aériens}",
    ],
    conclusion: 'Pour l’isolement entre logements, la solution prédalles + dalle pleine de 20 cm est retenue ; les poutrelles conviennent pour les planchers de combles ou de maisons individuelles.',
  },
  summary: {
    content: `### Les planchers en 5 points
1. Poutrelles-hourdis, prédalles, dalles alvéolaires, dalle pleine.
2. Portée dans un sens pour les systèmes préfabriqués.
3. $q = (1{,}35 G + 1{,}5 Q) \\times e$, puis $M = qL^2/8$.
4. Étaiement selon l'avis technique ; dalle de compression armée et chaînée.
5. Choix selon portée, acoustique, feu, délai et levage.`,
  },
  key_points: {
    points: ['16 + 4 = 20 cm', 'Entraxe ≈ 0,60 m', 'q = (1,35G + 1,5Q) × e', 'Étaiement obligatoire au coulage', 'Masse = acoustique'],
  },
  self_assessment: {
    objectives: [
      'Je connais les trois systèmes de planchers préfabriqués',
      'Je sais calculer la charge d’une poutrelle',
      'Je sais choisir un plancher selon la portée et l’acoustique',
      'Je connais les règles de sécurité de pose',
      "J'ai réussi le quiz avec au moins 2 bonnes réponses sur 3",
    ],
  },
});
