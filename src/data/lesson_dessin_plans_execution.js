// ── Lesson: Lecture des plans d'exécution — Module 4 ─────────────────────────
import { buildLesson } from './build_lesson.js';

export const lesson_dessin_plans_execution = buildLesson({
  moduleId: 4,
  slug: 'dessin_plans_execution',
  lessonIndex: 3,
  title: "Lecture des Plans d'Exécution : Coffrage, Ferraillage, Nomenclatures & Quantités",
  subtitle: 'Module 04 — Dessin technique & Lecture de plans',
  level: 'Débutant',
  duration: '8h',
  diagramType: 'rebar_beam',
  tags: ['Plans d’exécution', 'Plan de coffrage', 'Plan de ferraillage', 'Nomenclature', 'Ratio d’acier', 'Métré', 'Façonnage'],
}, {
  definition: {
    title: 'Définition — Les plans qui servent à construire',
    fr: "Plans d'exécution (coffrage et ferraillage)",
    en: 'Construction (shop) drawings: formwork and reinforcement',
    metier: "Utilisés par les chefs de chantier, coffreurs, ferrailleurs, conducteurs de travaux, métreurs et contrôleurs de ferraillage.",
    content: `Les **plans d'exécution** traduisent les calculs de l'ingénieur en instructions précises pour le chantier. En béton armé, on distingue :
- le **plan de coffrage** : géométrie du béton (dimensions, niveaux, réservations, inserts) ;
- le **plan de ferraillage** : position, nombre, diamètre et forme des armatures, avec la **nomenclature** (liste de façonnage).

### Les informations clés d'un plan de ferraillage
- **Repère** de chaque barre (numéro) et sa **forme** (droite, coudée, cadre, épingle).
- **Nombre** et **diamètre** : « 4 HA16 » signifie 4 barres haute adhérence de 16 mm.
- **Longueurs** développées et cotes de façonnage.
- **Enrobage**, longueurs de recouvrement, espacement des cadres (« cadres HA8 e = 20 »).

> 💡 Sur chantier, le contrôle du ferraillage avant bétonnage (nombre de barres, diamètres, enrobage, recouvrements) est une étape obligatoire : une fois le béton coulé, une erreur est presque irréparable.`,
  },
  importance: {
    content: `- **Qualité** : la position des armatures conditionne la résistance réellement obtenue.
- **Durabilité** : un enrobage insuffisant entraîne une corrosion précoce.
- **Coût** : la nomenclature sert à commander et façonner les aciers ; le ratio d'acier (kg/m³) est un indicateur économique.
- **Planning** : les plans doivent être validés (bon pour exécution) avant façonnage.

> ⚠️ **À retenir** : seuls les plans portant la mention « bon pour exécution » et le dernier indice de révision doivent être utilisés sur chantier.`,
  },
  applications: {
    examples: [
      ['Contrôle avant coulage', 'Vérification du ferraillage d’une poutre par le chef de chantier et le bureau de contrôle.'],
      ['Commande d’aciers', 'Nomenclature transmise à l’atelier de façonnage avec les poids par repère.'],
      ['Métré', 'Calcul des volumes de béton et des surfaces de coffrage à partir des plans.'],
      ['Réservations', 'Report des trémies et fourreaux des corps d’état techniques sur le plan de coffrage.'],
      ['Préfabrication', 'Plans de fabrication des prédalles et poutres préfabriquées.'],
    ],
  },
  theory: {
    title: "Théorie — Codes et calculs d'un plan d'exécution",
    content: `### 1. Désignation des armatures
- « HA » : haute adhérence (barres crénelées B500), « RL » : rond lisse.
- « 3 HA12 L = 4,80 » : 3 barres de 12 mm de 4,80 m.
- « Cad HA8 e = 15 » : cadres de 8 mm espacés de 15 cm.
- Treillis soudés : désignation par la section par mètre (ST25 : 2,57 cm²/m).

### 2. Masse linéique des barres
$$m_l = 0{,}00617 \\, d^2 \\quad (\\text{kg/m}, \\ d \\ \\text{en mm})$$
HA8 : 0,395 ; HA10 : 0,617 ; HA12 : 0,888 ; HA14 : 1,208 ; HA16 : 1,578 ; HA20 : 2,466 ; HA25 : 3,853 kg/m.

### 3. Longueur développée d'un cadre
Périmètre aux axes des barres, plus les crochets de fermeture (environ 2 × 10 Ø pour des crochets à 135°).

### 4. Ratio d'acier
$$r = \\frac{\\text{masse d'acier}}{\\text{volume de béton}}$$
Ordres de grandeur : dalle 60 à 100 kg/m³, poutre 100 à 150 kg/m³, poteau 120 à 200 kg/m³, voile 30 à 60 kg/m³.

### 5. Niveaux et repères
Les niveaux bruts (dessus de dalle brute, arase) et les niveaux finis sont différents : l'écart correspond aux revêtements et chapes.`,
  },
  formulas: {
    title: 'Formules essentielles — Plans de ferraillage et métré',
    formulas: [
      {
        name: 'Masse linéique d’une barre',
        latex: "m_l = \\frac{\\pi d^2}{4} \\times 7\\,850 \\times 10^{-6} \\approx 0{,}00617 \\, d^2",
        description: 'Masse par mètre d’une barre de diamètre d (mm), acier à 7 850 kg/m³.',
        vars: [
          ['m_l', 'Masse linéique', 'kg/m', 'HA12 : 0,888 kg/m.'],
          ['d', 'Diamètre nominal', 'mm', '6, 8, 10, 12, 14, 16, 20, 25, 32.'],
        ],
        rule: "Repère : HA10 ≈ 0,62 kg/m, HA20 ≈ 2,47 kg/m (le poids est multiplié par 4 quand le diamètre double).",
      },
      {
        name: 'Masse d’un repère de la nomenclature',
        latex: "M = n \\cdot L \\cdot m_l",
        description: 'Nombre de barres × longueur développée × masse linéique.',
        vars: [
          ['M', 'Masse du repère', 'kg', 'À sommer pour l’ensemble de l’ouvrage.'],
          ['n', 'Nombre de barres', '-', 'Quantité du repère.'],
          ['L', 'Longueur développée', 'm', 'Longueur avant façonnage.'],
        ],
      },
      {
        name: 'Nombre de cadres sur une longueur',
        latex: "n = \\frac{L_{zone}}{e} + 1",
        description: 'Cadres espacés régulièrement de e sur une zone de longueur L.',
        vars: [
          ['n', 'Nombre de cadres', '-', 'Arrondi à l’entier supérieur.'],
          ['L_{zone}', 'Longueur de la zone', 'm', 'Entre le premier et le dernier cadre.'],
          ['e', 'Espacement', 'm', 'Indiqué sur le plan (e = 0,20).'],
        ],
      },
      {
        name: "Ratio d'acier",
        latex: "r = \\frac{M_{acier}}{V_{béton}}",
        description: 'Indicateur économique et de vraisemblance du ferraillage.',
        vars: [
          ['r', "Ratio d'acier", 'kg/m³', 'Poutre courante : 100 à 150 kg/m³.'],
          ['V_{béton}', 'Volume de béton', 'm³', 'Volume de l’élément.'],
        ],
      },
    ],
  },
  stepbystep: {
    title: 'Calcul complet — Nomenclature d’une poutre de 25 × 50 cm',
    problem: "Une poutre de 25 × 50 cm et 5,00 m de long comporte : 4 HA16 de 5,20 m (aciers inférieurs), 2 HA12 de 5,20 m (aciers de montage), et des cadres HA8 de 1,50 m de longueur développée, espacés de 17 cm. Calculer la masse d'acier et le ratio.",
    steps_demo: [
      { n: 1, text: "HA16 : 4 × 5,20 × 1,578 = 32,8 kg." },
      { n: 2, text: "HA12 : 2 × 5,20 × 0,888 = 9,2 kg." },
      { n: 3, text: "Nombre de cadres : 5,00 / 0,17 + 1 = 30,4 → 31 cadres." },
      { n: 4, text: "Cadres HA8 : 31 × 1,50 × 0,395 = 18,4 kg." },
      { n: 5, text: "Total : 32,8 + 9,2 + 18,4 = 60,4 kg." },
      { n: 6, text: "Béton : 0,25 × 0,50 × 5,00 = 0,625 m³ → ratio = 60,4 / 0,625 = 97 kg/m³ (cohérent pour une poutre)." },
    ],
    result_latex: "M = 32{,}8 + 9{,}2 + 18{,}4 = 60{,}4\\ \\text{kg} \\qquad r = \\frac{60{,}4}{0{,}625} = 97\\ \\text{kg/m}^3",
  },
  units: {
    table: [
      ['Diamètres', 'mm', 'in (#bar)', 'HA16 ≈ #5 (5/8 in)'],
      ['Masse linéique', 'kg/m', 'lb/ft', '1 kg/m = 0,672 lb/ft'],
      ['Ratio d’acier', 'kg/m³', 'lb/yd³', '1 kg/m³ = 1,686 lb/yd³'],
      ['Section d’acier', 'cm²', 'in²', 'HA16 = 2,01 cm²'],
      ['Treillis soudé', 'cm²/m', 'in²/ft', 'ST25 : 2,57 cm²/m'],
    ],
    note: 'Les longueurs de la nomenclature sont des longueurs développées (avant pliage) : elles servent à la commande et au poids.',
  },
  hypotheses: {
    items: [
      ['info', 'Les masses linéiques sont calculées pour une masse volumique de l’acier de 7 850 kg/m³.'],
      ['info', 'Les longueurs développées tiennent compte des crochets et des retours selon les rayons de cintrage normalisés.'],
      ['warning', 'Un ratio anormalement bas ou haut doit alerter : erreur de plan ou de saisie possible.'],
      ['warning', 'Les recouvrements de barres ajoutent de l’acier : ils doivent figurer sur le plan.'],
      ['tip', 'Utilisez des cales et distanciers adaptés pour garantir l’enrobage indiqué sur le plan.'],
    ],
  },
  simple_examples: {
    examples: [
      {
        title: 'Exemple 1 : masse linéique d’un HA20',
        given: 'd = 20 mm',
        find: 'm_l',
        solution_latex: "m_l = 0{,}00617 \\times 20^2 = 2{,}47\\ \\text{kg/m}",
        result: '2,47 kg/m.',
      },
      {
        title: 'Exemple 2 : longueur d’un cadre',
        given: 'Poutre 25 × 50 cm, enrobage 3 cm, cadre HA8, crochets 2 × 10 Ø',
        find: 'Longueur développée approximative',
        solution_latex: "L = 2 \\times (0{,}19 + 0{,}44) + 2 \\times 10 \\times 0{,}008 = 1{,}26 + 0{,}16 = 1{,}42\\ \\text{m}",
        result: '≈ 1,42 m (le plan donne la valeur exacte avec les rayons de cintrage).',
      },
      {
        title: 'Exemple 3 : volume de béton d’une dalle',
        given: 'Dalle de 6,00 × 4,50 m, épaisseur 0,20 m',
        find: 'Volume',
        solution_latex: "V = 6{,}00 \\times 4{,}50 \\times 0{,}20 = 5{,}40\\ \\text{m}^3",
        result: '5,40 m³ (commander environ 3 à 5 % de plus pour les pertes).',
      },
    ],
  },
  real_examples: {
    title: 'Exemple réel — Contrôle du ferraillage avant bétonnage',
    examples: [
      {
        context: 'Dalle de transfert d’un immeuble de logements',
        scenario: "Lors du contrôle avant coulage, le bureau de contrôle constate que les chapeaux sur une file de voiles ont été posés en HA12 au lieu de HA16 prévus au plan (indice B). L'atelier avait façonné à partir d'une nomenclature de l'indice A.",
        decomposition_latex: "\\frac{A_{s,posé}}{A_{s,requis}} = \\frac{1{,}13}{2{,}01} = 0{,}56 \\Rightarrow \\text{remplacement avant coulage}",
        lesson: "La traçabilité des indices de plans entre bureau d'études, atelier et chantier est essentielle ; le contrôle avant coulage a évité un défaut structurel majeur.",
      },
    ],
  },
  diagrams: {
    title: 'Schéma de principe — Du calcul au béton coulé',
    diagram_description: [
      'Note de calcul : sections d’acier requises',
      'Plan de coffrage : géométrie, niveaux, réservations',
      'Plan de ferraillage : repères, formes, espacements, enrobages',
      'Nomenclature : longueurs développées, poids, commande à l’atelier',
      'Pose et contrôle : nombre, diamètres, recouvrements, cales',
      'Bétonnage après réception du ferraillage',
    ],
  },
  mistakes: {
    items: [
      ['Confondre longueur développée et longueur hors tout', 'Barres trop courtes après façonnage', 'Utiliser la longueur développée de la nomenclature.'],
      ['Oublier les recouvrements', 'Discontinuité des armatures', 'Respecter les longueurs de recouvrement indiquées (souvent 40 à 60 Ø).'],
      ['Ne pas vérifier l’indice du plan', 'Ferraillage d’une version périmée', 'Contrôler l’indice et la mention « bon pour exécution ».'],
    ],
  },
  tips: {
    tips: [
      'Contrôlez le ferraillage avec une check-list : diamètres, nombre, espacements, enrobages, recouvrements, ancrages, attentes.',
      'Photographiez le ferraillage avant coulage : c’est une preuve précieuse en cas de litige.',
      'Repère : 1 tonne d’acier HA12 représente environ 1 126 m de barres.',
      'Les logiciels BIM génèrent automatiquement nomenclatures et plans de façonnage à partir du modèle 3D.',
    ],
  },
  norms: {
    norms: [
      ['NF EN ISO 3766', 'Dessins de construction : représentation simplifiée des armatures de béton.'],
      ['NF A 35-080', 'Aciers pour béton armé : barres et couronnes soudables à verrous (B500).'],
      ['NF EN 13670 et NF DTU 21', 'Exécution des structures en béton (tolérances, enrobages, contrôle).'],
      ['NF EN 1992-1-1 §8', 'Dispositions constructives : ancrages, recouvrements, mandrins de cintrage.'],
    ],
  },
  exercises: {
    exercises: [
      {
        level: 1,
        text: 'Calculer la masse de 12 barres HA14 de 6,00 m.',
        hint: 'm_l(HA14) = 1,208 kg/m.',
        answer_latex: "M = 12 \\times 6{,}00 \\times 1{,}208 = 87{,}0\\ \\text{kg}",
        answer_text: '≈ 87 kg.',
      },
      {
        level: 2,
        text: 'Combien de cadres HA8 espacés de 20 cm faut-il sur une poutre de 7,20 m ?',
        hint: 'n = L/e + 1.',
        answer_latex: "n = \\frac{7{,}20}{0{,}20} + 1 = 37",
        answer_text: '37 cadres.',
      },
      {
        level: 3,
        text: 'Un poteau 30 × 30 × 2,80 m contient 4 HA16 de 3,50 m et 15 cadres HA8 de 1,25 m. Calculer le ratio d’acier.',
        hint: 'Volume = 0,30 × 0,30 × 2,80.',
        answer_latex: "M = 4 \\times 3{,}50 \\times 1{,}578 + 15 \\times 1{,}25 \\times 0{,}395 = 22{,}1 + 7{,}4 = 29{,}5\\ \\text{kg} \\qquad r = \\frac{29{,}5}{0{,}252} = 117\\ \\text{kg/m}^3",
        answer_text: 'Ratio ≈ 117 kg/m³.',
      },
    ],
  },
  quiz: {
    title: 'Quiz — Plans d’exécution',
    questions: [
      { q: 'Que signifie « 4 HA16 » ?', options: ['4 barres lisses de 16 mm', '4 barres haute adhérence de 16 mm', '16 barres de 4 mm'], correct: 1, explain: 'HA = haute adhérence, 16 = diamètre en mm.' },
      { q: 'Quelle est la masse linéique d’un HA10 ?', options: ['0,395 kg/m', '0,617 kg/m', '1,578 kg/m'], correct: 1, explain: '0,00617 × 10² = 0,617 kg/m.' },
      { q: 'Quel document sert à façonner les aciers ?', options: ['Le plan de masse', 'La nomenclature', 'Le permis de construire'], correct: 1, explain: 'La nomenclature liste repères, formes, longueurs et poids.' },
    ],
  },
  exam_questions: {
    questions: [
      'Présentez le contenu d’un plan de coffrage et d’un plan de ferraillage.',
      'Établissez la nomenclature d’une poutre à partir de son plan et calculez son ratio d’acier.',
      'Décrivez la procédure de contrôle du ferraillage avant bétonnage.',
    ],
  },
  interview_questions: {
    questions: [
      ['Que contrôlez-vous avant de couler une dalle ?', 'Coffrage (niveaux, étanchéité, étaiement), réservations, ferraillage (diamètres, espacements, chapeaux, recouvrements, enrobage, calage), inserts et attentes, propreté du fond, puis réception formelle avec traçabilité.'],
      ['Un ratio de 250 kg/m³ sur une dalle vous paraît-il normal ?', 'Non, c’est très élevé pour une dalle (60 à 100 kg/m³ usuellement) : je vérifierais la nomenclature, les unités et le dimensionnement avant de commander.'],
    ],
  },
  practical_case: {
    title: 'Cas pratique — Commande d’acier pour un niveau de logements',
    scenario: 'Un niveau comprend 45 m³ de dalle (ratio 80 kg/m³), 12 m³ de poutres (ratio 120 kg/m³) et 25 m³ de voiles (ratio 45 kg/m³).',
    description: 'Estimer la masse d’acier à commander, avec 3 % de pertes.',
    resolutions: [
      "M = 45 \\times 80 + 12 \\times 120 + 25 \\times 45 = 3\\,600 + 1\\,440 + 1\\,125 = 6\\,165\\ \\text{kg}",
      "M_{commande} = 1{,}03 \\times 6\\,165 = 6\\,350\\ \\text{kg} \\approx 6{,}4\\ \\text{t}",
      "\\text{Ratio moyen du niveau : } \\frac{6\\,165}{82} = 75\\ \\text{kg/m}^3",
    ],
    conclusion: 'On commande environ 6,4 t d’acier façonné pour le niveau ; la commande définitive se fait sur la base des nomenclatures des plans « bon pour exécution ».',
  },
  summary: {
    content: `### Les plans d'exécution en 5 points
1. Plan de **coffrage** (béton) et plan de **ferraillage** (aciers).
2. Désignation : nombre + HA + diamètre + longueur ou espacement.
3. Masse : $m_l = 0{,}00617 d^2$ kg/m ; $M = n L m_l$.
4. Ratio d'acier : indicateur économique et de vraisemblance.
5. Contrôle avant coulage et vérification des indices de plans.`,
  },
  key_points: {
    points: [
      'm_l ≈ 0,00617·d² (kg/m)',
      'HA8 0,395 · HA12 0,888 · HA16 1,578 kg/m',
      'Cadres : n = L/e + 1',
      'Ratios : dalle 60-100, poutre 100-150 kg/m³',
      'Plans « bon pour exécution » uniquement',
    ],
  },
  self_assessment: {
    objectives: [
      'Je sais lire un plan de coffrage et un plan de ferraillage',
      'Je sais interpréter une nomenclature d’armatures',
      'Je sais calculer une masse d’acier et un ratio',
      'Je connais les points de contrôle avant bétonnage',
      "J'ai réussi le quiz avec au moins 2 bonnes réponses sur 3",
    ],
  },
});
