// ── Lesson: Urbanisme, PLU et lotissements — Module 45 ────────────────────────
import { buildLesson } from './build_lesson.js';

export const lesson_urbanisme_plu = buildLesson({
  moduleId: 45,
  slug: 'urbanisme_plu',
  lessonIndex: 1,
  title: "Urbanisme & Aménagement : PLU, Autorisations et Conception de Lotissements",
  subtitle: 'Module 45 — Urbanisme, aménagement & VRD',
  level: 'Intermédiaire',
  duration: '9h',
  diagramType: 'road_profile',
  tags: ['Urbanisme', 'PLU', 'Permis de construire', 'Lotissement', 'Emprise au sol', 'Densité', 'VRD'],
}, {
  definition: {
    title: "Définition — Organiser l'occupation du sol",
    fr: "Urbanisme réglementaire et opérationnel",
    en: 'Urban planning and land development',
    metier: "Utilisée par les ingénieurs VRD, urbanistes, géomètres-experts, aménageurs, services instructeurs des collectivités et promoteurs.",
    content: `L'**urbanisme** organise l'usage du sol : où construire, quoi, à quelle hauteur et avec quelle densité. On distingue :
- l'**urbanisme réglementaire** : documents qui fixent les règles (SCoT à l'échelle d'un bassin de vie, **PLU** ou PLUi à l'échelle communale ou intercommunale, à défaut le Règlement national d'urbanisme) ;
- l'**urbanisme opérationnel** : réalisation des projets (lotissements, ZAC, rénovation urbaine).

### Le PLU en bref
Il découpe le territoire en zones : **U** (urbaines), **AU** (à urbaniser), **A** (agricoles) et **N** (naturelles). Le règlement de chaque zone fixe l'implantation, l'emprise au sol, la hauteur, l'aspect extérieur, le stationnement et les espaces verts.

> 💡 Avant tout projet, l'ingénieur consulte le PLU, ses annexes (servitudes, réseaux, risques) et demande un certificat d'urbanisme.`,
  },
  importance: {
    content: `- **Faisabilité** : le PLU fixe la surface constructible ; il conditionne l'équilibre financier d'une opération.
- **Délais** : une autorisation mal préparée entraîne refus ou demandes de pièces, soit des mois de retard.
- **Réseaux** : la capacité des voies et des réseaux (eau, assainissement, électricité) peut limiter un projet.
- **Sobriété foncière** : la loi Climat et Résilience vise le « zéro artificialisation nette » ; densifier devient la règle.

> ⚠️ **À retenir** : un permis de construire accordé peut être contesté par les tiers pendant deux mois après l'affichage sur le terrain.`,
  },
  applications: {
    examples: [
      ['Maison individuelle', 'Vérifier zone, emprise, hauteur et reculs du PLU avant de déposer le permis.'],
      ['Lotissement de 30 lots', 'Permis d’aménager, voirie, réseaux, gestion des eaux pluviales et règlement de lotissement.'],
      ['Immeuble en centre-ville', 'Gabarits, prospects, stationnement et avis de l’architecte des Bâtiments de France en secteur protégé.'],
      ['Zone d’activités', 'Desserte poids lourds, réseaux renforcés, bassins de rétention.'],
      ['Renouvellement urbain', 'Densification d’une friche, dépollution et création d’espaces publics.'],
    ],
  },
  theory: {
    title: "Théorie — Règles d'urbanisme et autorisations",
    content: `### 1. Les principales règles du PLU
- **Emprise au sol** : projection verticale du bâtiment ; souvent limitée par un coefficient d'emprise au sol (CES).
- **Hauteur** maximale, à l'égout ou au faîtage.
- **Implantation** par rapport aux voies (alignement ou recul) et aux limites séparatives.
- **Espaces verts** et coefficient de pleine terre, **stationnement** (places par logement).
- Le coefficient d'occupation des sols (COS) a été supprimé par la loi ALUR en 2014.

### 2. Les autorisations d'urbanisme
- **Déclaration préalable** : petits travaux (création de 5 à 20 m² d'emprise ou de surface de plancher ; jusqu'à 40 m² pour une extension en zone U d'un PLU, sous conditions).
- **Permis de construire** : constructions plus importantes ; architecte obligatoire au-delà de 150 m² de surface de plancher pour un particulier.
- **Permis d'aménager** : notamment les lotissements créant des voies ou espaces communs.

### 3. Règle de prospect classique
Sans règle locale (RNU), un bâtiment non implanté en limite doit respecter une distance au moins égale à la moitié de la différence d'altitude, et au minimum 3 m :
$$L \\ge \\max\\left(\\frac{H}{2} \\, ; \\, 3\\ \\text{m}\\right)$$

### 4. Densité
La densité brute d'une opération rapporte le nombre de logements à la surface totale (voiries et espaces communs compris) ; la densité nette ne compte que les lots.`,
  },
  formulas: {
    title: 'Formules essentielles — Urbanisme et lotissement',
    formulas: [
      {
        name: "Coefficient d'emprise au sol",
        latex: "CES = \\frac{A_{emprise}}{A_{terrain}}",
        description: "Part du terrain couverte par la construction (le PLU en fixe le maximum).",
        vars: [
          ['CES', "Coefficient d'emprise au sol", '-', 'Par exemple 0,40 = 40 %.'],
          ['A_{emprise}', 'Emprise au sol du bâtiment', 'm²', 'Projection verticale, débords compris selon le PLU.'],
          ['A_{terrain}', 'Surface du terrain', 'm²', 'Surface cadastrale.'],
        ],
      },
      {
        name: 'Prospect sur limite séparative (RNU)',
        latex: "L \\ge \\max\\left(\\frac{H}{2} \\, ; \\, 3\\ \\text{m}\\right)",
        description: 'Distance minimale entre la construction et la limite séparative si elle n’est pas implantée sur la limite.',
        vars: [
          ['L', 'Distance à la limite', 'm', 'Mesurée horizontalement.'],
          ['H', "Différence d'altitude", 'm', 'Entre le point du bâtiment et le sol de la limite.'],
        ],
      },
      {
        name: 'Densité de logements',
        latex: "d = \\frac{N_{log}}{A_{opération}}",
        description: 'Indicateur de consommation foncière d’une opération.',
        vars: [
          ['d', 'Densité', 'log/ha', 'Pavillonnaire diffus 5 à 10 ; individuel groupé 20 à 40 ; collectif 50 à 150.'],
          ['N_{log}', 'Nombre de logements', '-', 'Logements créés.'],
          ['A_{opération}', "Surface de l'opération", 'ha', 'Brute (avec voiries) ou nette (lots seuls).'],
        ],
      },
      {
        name: 'Nombre de lots d’un lotissement',
        latex: "N = \\frac{A \\cdot (1 - \\alpha)}{a_{lot}}",
        description: "Surface cessible divisée par la surface moyenne d'un lot.",
        vars: [
          ['N', 'Nombre de lots', '-', 'Arrondi à l’entier inférieur.'],
          ['A', 'Surface totale', 'm²', 'Emprise du lotissement.'],
          ['\\alpha', 'Part des espaces communs', '-', 'Voirie, espaces verts, bassins : 20 à 30 %.'],
          ['a_{lot}', 'Surface moyenne d’un lot', 'm²', '300 à 600 m² en périurbain aujourd’hui.'],
        ],
      },
    ],
  },
  stepbystep: {
    title: 'Calcul complet — Constructibilité d’une parcelle',
    problem: "Parcelle de 600 m² en zone UB : CES maximal 40 %, hauteur maximale 9 m à l'égout, recul de 5 m sur voie, prospect sur limites L ≥ max(H/2 ; 3 m). La maison prévue a une emprise de 12 × 18 m et une hauteur de 7 m.",
    steps_demo: [
      { n: 1, text: "Emprise maximale : 0,40 × 600 = 240 m²." },
      { n: 2, text: "Emprise du projet : 12 × 18 = 216 m² ≤ 240 m² : conforme." },
      { n: 3, text: "Hauteur : 7 m ≤ 9 m : conforme." },
      { n: 4, text: "Prospect : L ≥ max(7/2 ; 3) = 3,5 m des limites séparatives." },
      { n: 5, text: "Vérifier sur le plan masse que la largeur de parcelle permet 12 m + 2 × 3,5 m = 19 m (ou implantation en limite si le PLU l'autorise)." },
      { n: 6, text: "Surface de plancher sur 2 niveaux ≈ 2 × 200 = 400 m² > 150 m² : recours à un architecte obligatoire." },
    ],
    result_latex: "A_{max} = 0{,}40 \\times 600 = 240\\ \\text{m}^2 \\ge 216\\ \\text{m}^2 \\qquad L \\ge \\max(3{,}5 ; 3) = 3{,}5\\ \\text{m}",
  },
  units: {
    table: [
      ['Surface', 'm², ha', 'ft², acre', '1 ha = 10 000 m² = 2,471 acres'],
      ['Densité', 'logements/ha', 'units/acre', '20 log/ha ≈ 8 log/acre'],
      ['Hauteur', 'm', 'ft', 'Un niveau ≈ 3 m'],
      ['Stationnement', 'places/logement', '-', 'Place standard 2,50 × 5,00 m'],
      ['Voirie', 'm (largeur)', 'ft', 'Chaussée de desserte 5 à 6 m à double sens'],
    ],
    note: "La surface de plancher (somme des surfaces closes et couvertes sous plus de 1,80 m de hauteur, déductions faites) n'est pas la surface habitable : vérifiez toujours la définition employée.",
  },
  hypotheses: {
    items: [
      ['info', 'Les règles citées sont générales : seul le règlement du PLU applicable à la parcelle fait foi.'],
      ['info', 'Les seuils de déclaration préalable et de permis évoluent : vérifier le code de l’urbanisme en vigueur.'],
      ['warning', 'Les servitudes d’utilité publique (monuments historiques, plans de prévention des risques, lignes électriques) s’ajoutent au PLU.'],
      ['warning', 'Un plan de prévention des risques (inondation, mouvements de terrain) peut interdire ou conditionner toute construction.'],
      ['tip', 'Un certificat d’urbanisme opérationnel fige les règles applicables pendant 18 mois.'],
    ],
  },
  simple_examples: {
    examples: [
      {
        title: 'Exemple 1 : densité d’un lotissement',
        given: '30 logements sur 1,5 ha',
        find: 'La densité brute',
        solution_latex: "d = \\frac{30}{1{,}5} = 20\\ \\text{log/ha}",
        result: '20 logements par hectare : individuel groupé.',
      },
      {
        title: 'Exemple 2 : nombre de lots',
        given: 'Terrain de 2 ha, 25 % d’espaces communs, lots de 500 m²',
        find: 'Le nombre de lots',
        solution_latex: "N = \\frac{20\\,000 \\times 0{,}75}{500} = 30\\ \\text{lots}",
        result: '30 lots.',
      },
      {
        title: 'Exemple 3 : prospect d’un bâtiment de 11 m',
        given: 'H = 11 m',
        find: 'La distance minimale à la limite',
        solution_latex: "L \\ge \\max\\left(\\frac{11}{2} ; 3\\right) = 5{,}5\\ \\text{m}",
        result: 'L ≥ 5,5 m.',
      },
    ],
  },
  real_examples: {
    title: 'Exemple réel — Densification d’un quartier pavillonnaire (BIMBY)',
    examples: [
      {
        context: 'Commune périurbaine soumise à l’objectif de zéro artificialisation nette',
        scenario: "Plutôt que d'ouvrir 10 ha agricoles à l'urbanisation, la commune adapte son PLU pour permettre la division de grandes parcelles bâties (1 000 à 1 500 m²) et la construction d'une seconde maison en fond de jardin.",
        decomposition_latex: "d : 8 \\rightarrow 14\\ \\text{log/ha} \\qquad \\text{sans consommer de terres agricoles}",
        lesson: "La densification douce exige de vérifier la capacité des réseaux existants, la gestion des eaux pluviales à la parcelle et l'accès (servitudes de passage).",
      },
    ],
  },
  diagrams: {
    title: 'Schéma de principe — De l’idée au permis',
    diagram_description: [
      'Analyse réglementaire : PLU, servitudes, plans de prévention des risques',
      'Certificat d’urbanisme : règles applicables et équipements existants',
      'Esquisse : implantation, emprise, hauteur, accès et stationnement',
      'Études techniques : réseaux, eaux pluviales, sol',
      'Dépôt : déclaration préalable, permis de construire ou d’aménager',
      'Instruction (1 à 3 mois), affichage et purge du recours des tiers (2 mois)',
    ],
  },
  mistakes: {
    items: [
      ['Confondre surface de plancher et emprise au sol', 'Projet non conforme au CES', 'Calculer chacune selon sa définition réglementaire.'],
      ['Oublier les servitudes', 'Refus du permis ou travaux arrêtés', 'Consulter les annexes du PLU et l’état des risques.'],
      ['Commencer les travaux avant la purge des recours', 'Risque d’annulation du permis en cours de chantier', 'Attendre le délai de recours des tiers (2 mois après affichage).'],
    ],
  },
  tips: {
    tips: [
      'Le Géoportail de l’urbanisme donne accès aux PLU numérisés et aux servitudes.',
      'Rencontrez le service instructeur avant le dépôt pour les projets complexes.',
      'Gérez les eaux pluviales à la parcelle (infiltration, noues) : de plus en plus de PLU l’imposent.',
      'Photographiez l’affichage du permis sur le terrain avec un constat d’huissier pour sécuriser le délai de recours.',
    ],
  },
  norms: {
    norms: [
      ["Code de l'urbanisme", 'Documents d’urbanisme, autorisations, lotissements et RNU.'],
      ['Loi ALUR (2014)', 'Suppression du COS et de la superficie minimale des terrains constructibles.'],
      ['Loi Climat et Résilience (2021)', 'Objectif de zéro artificialisation nette des sols en 2050.'],
      ["Code de l'environnement", 'Évaluation environnementale et loi sur l’eau pour les projets d’aménagement.'],
    ],
  },
  exercises: {
    exercises: [
      {
        level: 1,
        text: 'Une parcelle de 850 m² a un CES de 30 %. Quelle emprise maximale peut-on construire ?',
        hint: 'A = CES × surface.',
        answer_latex: "A_{max} = 0{,}30 \\times 850 = 255\\ \\text{m}^2",
        answer_text: '255 m².',
      },
      {
        level: 2,
        text: 'Un aménageur dispose de 3,2 ha. Il réserve 28 % aux espaces communs et vise des lots de 400 m². Combien de lots, et quelle densité brute ?',
        hint: 'N = A(1 − α) / a_lot.',
        answer_latex: "N = \\frac{32\\,000 \\times 0{,}72}{400} = 57{,}6 \\Rightarrow 57 \\qquad d = \\frac{57}{3{,}2} = 17{,}8\\ \\text{log/ha}",
        answer_text: '57 lots ; ≈ 18 log/ha.',
      },
      {
        level: 3,
        text: 'Une extension de 35 m² est prévue en zone U d’un PLU sur une maison de 100 m². Quelle autorisation faut-il ? Et si la maison faisait 130 m² ?',
        hint: 'Seuil de 40 m² en zone U et seuil de 150 m² pour le recours à l’architecte.',
        answer_text: 'Cas 1 : déclaration préalable (35 m² ≤ 40 m², total 135 m² ≤ 150 m²). Cas 2 : total 165 m² > 150 m² → permis de construire avec architecte.',
      },
    ],
  },
  quiz: {
    title: 'Quiz — Urbanisme',
    questions: [
      { q: 'Que désigne une zone N d’un PLU ?', options: ['Une zone à urbaniser', 'Une zone naturelle et forestière', 'Une zone industrielle'], correct: 1, explain: 'U urbaines, AU à urbaniser, A agricoles, N naturelles.' },
      { q: 'Quelle loi a supprimé le COS ?', options: ['Loi SRU (2000)', 'Loi ALUR (2014)', 'Loi ELAN (2018)'], correct: 1, explain: 'La loi ALUR a supprimé le coefficient d’occupation des sols.' },
      { q: 'Au-delà de quelle surface de plancher un particulier doit-il recourir à un architecte ?', options: ['100 m²', '150 m²', '250 m²'], correct: 1, explain: 'Le seuil est de 150 m² de surface de plancher.' },
    ],
  },
  exam_questions: {
    questions: [
      'Présentez la hiérarchie des documents d’urbanisme (SCoT, PLU, RNU) et le contenu d’un règlement de zone.',
      'Comparez déclaration préalable, permis de construire et permis d’aménager.',
      'Concevez le découpage d’un lotissement en justifiant les surfaces de voirie, d’espaces verts et de lots.',
    ],
  },
  interview_questions: {
    questions: [
      ['Quelles sont vos premières vérifications sur un terrain ?', 'Zone et règlement du PLU, servitudes et risques (PPR, monuments), accès et réseaux disponibles, géotechnique et gestion des eaux pluviales, puis un certificat d’urbanisme opérationnel.'],
      ['Comment concilier densité et qualité de vie ?', 'Par des formes urbaines compactes mais variées (maisons groupées, petits collectifs), des espaces publics de qualité, des cheminements piétons et cyclables, et une gestion paysagère des eaux pluviales.'],
    ],
  },
  practical_case: {
    title: 'Cas pratique — Pré-étude d’un lotissement',
    scenario: 'Terrain de 2,4 ha en zone 1AU. Orientations du PLU : densité brute minimale de 20 log/ha, 25 % d’espaces communs au moins.',
    description: 'Déterminer le nombre minimal de logements et la surface moyenne maximale des lots.',
    resolutions: [
      "N_{min} = 20 \\times 2{,}4 = 48\\ \\text{logements}",
      "A_{cessible} = 24\\,000 \\times (1 - 0{,}25) = 18\\,000\\ \\text{m}^2",
      "a_{lot,max} = \\frac{18\\,000}{48} = 375\\ \\text{m}^2",
    ],
    conclusion: 'Il faut au moins 48 logements avec des lots de 375 m² en moyenne : on mixera des lots libres (450 m²), des maisons groupées et un petit collectif pour respecter la densité.',
  },
  summary: {
    content: `### L'urbanisme en 5 points
1. SCoT → **PLU** (zones U, AU, A, N) → autorisations.
2. Règles clés : emprise au sol, hauteur, implantation, stationnement, espaces verts.
3. Autorisations : **DP**, **PC** (architecte > 150 m²), **PA** pour les lotissements.
4. Prospect RNU : $L \\ge \\max(H/2 ; 3\\ \\text{m})$.
5. Densité et sobriété foncière : objectif zéro artificialisation nette.`,
  },
  key_points: {
    points: [
      'Zones du PLU : U, AU, A, N',
      'CES = emprise / surface du terrain',
      'Architecte obligatoire au-delà de 150 m²',
      'Recours des tiers : 2 mois après affichage',
      'Densité brute = logements / surface totale',
    ],
  },
  self_assessment: {
    objectives: [
      'Je sais lire un règlement de zone de PLU',
      'Je sais vérifier l’emprise, la hauteur et les reculs d’un projet',
      'Je connais les différentes autorisations d’urbanisme',
      'Je sais prédimensionner un lotissement',
      "J'ai réussi le quiz avec au moins 2 bonnes réponses sur 3",
    ],
  },
});
