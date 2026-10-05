// ── Lesson: Mécanique des roches et classifications — Module 36 ──────────────
import { buildLesson } from './build_lesson.js';

export const lesson_geologie_roches = buildLesson({
  moduleId: 36,
  slug: 'geologie_roches',
  lessonIndex: 3,
  title: "Mécanique des Roches : RQD, RMR, Système Q, GSI et Critère de Hoek-Brown",
  subtitle: "Module 36 — Géologie de l'Ingénieur",
  level: 'Avancé',
  duration: '7h',
  tags: ['Mécanique des roches', 'RQD', 'RMR', 'Barton Q', 'GSI', 'Hoek-Brown', 'Massif rocheux'],
}, {
  definition: {
    title: 'Définition — Caractériser un massif rocheux fracturé',
    fr: 'Mécanique des roches et classifications géomécaniques',
    en: 'Rock mechanics and rock mass classification',
    metier: "Utilisée par les ingénieurs tunnels, les géologues de l'ingénieur, les ingénieurs barrages et talus rocheux.",
    content: `Un **massif rocheux** n'est pas une roche intacte : c'est un assemblage de blocs séparés par des **discontinuités** (joints, failles, stratification). Sa résistance dépend autant des discontinuités que de la roche elle-même.

### Les classifications géomécaniques
- **RQD** (Rock Quality Designation) : part des carottes de longueur ≥ 10 cm.
- **RMR** (Rock Mass Rating, Bieniawski) : note de 0 à 100 à partir de 5 paramètres.
- **Q** (Barton) : indice de 0,001 à 1 000 combinant blocs, frottement et contraintes.
- **GSI** (Geological Strength Index) : note visuelle utilisée avec le critère de **Hoek-Brown**.

### Leur usage
Estimer les propriétés du massif, choisir le soutènement d'un tunnel, vérifier la stabilité d'un talus ou d'une fondation de barrage.

> 💡 Une roche très résistante peut former un massif médiocre si elle est très fracturée ou si ses joints sont argileux.`,
  },
  importance: {
    content: `- **Tunnels** : le soutènement (boulons, béton projeté, cintres) est choisi selon RMR ou Q.
- **Talus rocheux** : glissements plans, en dièdre, basculements dépendent des discontinuités.
- **Fondations** : barrages et piles de ponts sur rocher.
- **Coût** : la classe de rocher conditionne les cadences et les prix des travaux souterrains.

> ⚠️ **À retenir** : les classifications sont des outils empiriques ; elles complètent l'analyse géologique et ne la remplacent pas.`,
  },
  applications: {
    examples: [
      ['Tunnel routier', 'Profils de soutènement associés aux classes RMR.'],
      ['Carrière', 'Stabilité des fronts selon l’orientation des familles de joints.'],
      ['Barrage-voûte', 'Déformabilité et résistance des appuis rocheux.'],
      ['Talus routier', 'Purge, boulonnage, filets selon la fracturation.'],
      ['Puits et cavernes', 'Dimensionnement par le système Q.'],
    ],
  },
  theory: {
    title: 'Théorie — Les indices et le critère de rupture',
    content: `### 1. RQD
$$RQD = \\frac{\\sum L_{\\geq 10\\,cm}}{L_{passe}} \\times 100$$

### 2. RMR (Bieniawski, 1989)
Somme de 5 notes : résistance de la roche, RQD, espacement des discontinuités, état des discontinuités, venues d'eau ; puis ajustement selon l'orientation.
| RMR | Classe | Qualité |
|---|---|---|
| 81–100 | I | Très bonne |
| 61–80 | II | Bonne |
| 41–60 | III | Moyenne |
| 21–40 | IV | Médiocre |
| < 21 | V | Très médiocre |

### 3. Système Q (Barton)
$$Q = \\frac{RQD}{J_n} \\times \\frac{J_r}{J_a} \\times \\frac{J_w}{SRF}$$
taille des blocs × résistance au cisaillement des joints × contraintes actives. Corrélation usuelle : $RMR \\approx 9 \\ln Q + 44$.

### 4. Critère de Hoek-Brown généralisé
$$\\sigma_1 = \\sigma_3 + \\sigma_{ci} \\left( m_b \\frac{\\sigma_3}{\\sigma_{ci}} + s \\right)^a$$
avec $m_b = m_i \\, e^{(GSI-100)/(28-14D)}$, $s = e^{(GSI-100)/(9-3D)}$, $a \\approx 0{,}5$ pour les massifs de qualité moyenne à bonne. $D$ : facteur de remaniement (0 pour un creusement soigné). Résistance en compression du massif : $\\sigma_{cm} \\approx \\sigma_{ci} \\, s^a$.

### 5. Charge sur le soutènement (approche empirique d'Unal)
$$h_t = \\frac{100 - RMR}{100} \\, B \\qquad p = \\gamma \\, h_t$$`,
  },
  formulas: {
    title: 'Formules essentielles — Mécanique des roches',
    formulas: [
      {
        name: 'Rock Quality Designation',
        latex: "RQD = \\frac{\\sum L_{\\geq 10\\,cm}}{L_{passe}} \\times 100",
        description: 'Mesuré sur carottes de forage.',
        vars: [
          ['L_{\\geq 10\\,cm}', 'Longueur des morceaux ≥ 10 cm', 'm', 'Fractures naturelles seulement.'],
          ['L_{passe}', 'Longueur de la passe carottée', 'm', ''],
        ],
      },
      {
        name: 'Indice Q de Barton',
        latex: "Q = \\frac{RQD}{J_n} \\cdot \\frac{J_r}{J_a} \\cdot \\frac{J_w}{SRF}",
        description: 'Qualité du massif pour les travaux souterrains.',
        vars: [
          ['J_n', 'Nombre de familles de joints', '-', '1 à 20.'],
          ['J_r', 'Rugosité des joints', '-', '0,5 à 4.'],
          ['J_a', 'Altération des joints', '-', '0,75 à 20.'],
          ['J_w', 'Facteur eau', '-', '0,05 à 1.'],
          ['SRF', 'Facteur de contrainte', '-', '0,5 à 400.'],
        ],
      },
      {
        name: 'Paramètres de Hoek-Brown',
        latex: "m_b = m_i \\, e^{\\frac{GSI-100}{28-14D}} \\qquad s = e^{\\frac{GSI-100}{9-3D}}",
        description: 'Passage de la roche intacte au massif.',
        vars: [
          ['m_i', 'Constante de la roche intacte', '-', 'Calcaire ≈ 10 ; grès ≈ 17 ; granite ≈ 32.'],
          ['GSI', 'Geological Strength Index', '-', '≈ RMR89 − 5.'],
          ['D', 'Facteur de remaniement', '-', '0 (soigné) à 1 (tirs violents).'],
        ],
      },
      {
        name: 'Hauteur de charge rocheuse (Unal)',
        latex: "p = \\gamma \\, \\frac{100 - RMR}{100} \\, B",
        description: 'Ordre de grandeur de la pression sur le soutènement d’un tunnel.',
        vars: [
          ['p', 'Pression verticale', 'kPa', ''],
          ['\\gamma', 'Poids volumique', 'kN/m³', '≈ 27.'],
          ['B', 'Largeur du tunnel', 'm', ''],
        ],
      },
    ],
  },
  stepbystep: {
    title: 'Calcul complet — Caractériser un calcaire pour un tunnel',
    problem: "Une passe de 1,50 m de carottes de calcaire (σ_ci = 60 MPa, m_i = 10) contient des morceaux ≥ 10 cm de 0,25 ; 0,18 ; 0,32 ; 0,12 et 0,20 m. Trois familles de joints (J_n = 9), rugueux plans (J_r = 1,5), non altérés (J_a = 1), secs (J_w = 1), contraintes moyennes (SRF = 1). Calculer RQD, Q, RMR, GSI, la résistance du massif et la charge sur un tunnel de 10 m.",
    steps_demo: [
      { n: 1, text: "RQD = (0,25 + 0,18 + 0,32 + 0,12 + 0,20) / 1,50 = 1,07 / 1,50 = 71 %." },
      { n: 2, text: "Q = (71 / 9) × (1,5 / 1) × (1 / 1) = 11,8 : rocher « bon » (Q entre 10 et 40)." },
      { n: 3, text: "RMR ≈ 9 ln(11,8) + 44 = 9 × 2,47 + 44 = 66 : classe II ; GSI ≈ 66 − 5 = 61." },
      { n: 4, text: "Hoek-Brown (D = 0) : s = e^((61−100)/9) = 0,0131 ; a ≈ 0,503 ; σ_cm ≈ 60 × 0,0131^0,503 = 6,8 MPa." },
      { n: 5, text: "Charge d'Unal : p = 27 × (100 − 66)/100 × 10 = 92 kPa, soutenue par boulonnage systématique et béton projeté." },
    ],
    result_latex: "RQD = 71\\ \\% \\quad Q = \\frac{71}{9} \\times 1{,}5 = 11{,}8 \\quad RMR \\approx 66 \\quad \\sigma_{cm} \\approx 6{,}8\\ \\text{MPa}",
  },
  units: {
    table: [
      ['Résistance', 'MPa', 'psi', '1 MPa = 145 psi'],
      ['RQD', '%', '%', 'Sur carottes NX (54 mm) en principe'],
      ['RMR', 'points (0–100)', 'points', 'Version 1989 la plus utilisée'],
      ['Q', '0,001 à 1 000', '0.001 to 1000', 'Échelle logarithmique'],
      ['Poids volumique', 'kN/m³', 'pcf', '27 kN/m³ ≈ 172 pcf'],
    ],
    note: 'Les classifications doivent être réalisées par zones homogènes du massif.',
  },
  hypotheses: {
    items: [
      ['info', 'La corrélation RMR ≈ 9 ln Q + 44 présente une forte dispersion ; elle sert de contrôle de cohérence.'],
      ['info', 'Le critère de Hoek-Brown suppose un massif suffisamment fracturé pour être considéré isotrope.'],
      ['warning', 'Un massif à une ou deux familles de joints dominantes doit être étudié par analyse de blocs (dièdres, glissements plans).'],
      ['warning', 'Les roches gonflantes (anhydrite, argilites) et poussantes demandent des études spécifiques.'],
      ['tip', 'Relevez systématiquement l’orientation (pendage, direction) des discontinuités au front de taille.'],
    ],
  },
  simple_examples: {
    examples: [
      {
        title: 'Exemple 1 : RQD',
        given: 'Passe de 3,00 m ; morceaux ≥ 10 cm : 2,10 m au total',
        find: 'RQD',
        solution_latex: "RQD = \\frac{2{,}10}{3{,}00} \\times 100 = 70\\ \\%",
        result: '70 % : qualité « moyenne à bonne ».',
      },
      {
        title: 'Exemple 2 : indice Q d’un rocher altéré et humide',
        given: 'RQD = 40 ; J_n = 12 ; J_r = 1 ; J_a = 4 ; J_w = 0,66 ; SRF = 2,5',
        find: 'Q',
        solution_latex: "Q = \\frac{40}{12} \\times \\frac{1}{4} \\times \\frac{0{,}66}{2{,}5} = 0{,}22",
        result: 'Q = 0,22 : rocher très médiocre, soutènement lourd.',
      },
      {
        title: 'Exemple 3 : charge sur le soutènement',
        given: 'RMR = 35 ; B = 12 m ; γ = 26 kN/m³',
        find: 'p',
        solution_latex: "p = 26 \\times \\frac{100 - 35}{100} \\times 12 = 203\\ \\text{kPa}",
        result: 'Environ 200 kPa : cintres et béton projeté épais.',
      },
    ],
  },
  real_examples: {
    title: 'Exemple réel — Les roches poussantes du Saint-Gothard',
    examples: [
      {
        context: 'Tunnel de base du Saint-Gothard (Suisse), zones de Tavetsch',
        scenario: "Dans le massif intermédiaire de Tavetsch, des roches schisteuses très fracturées sous forte couverture ont subi des convergences de plusieurs dizaines de centimètres. Les ingénieurs ont utilisé des cintres coulissants et un surcreusement permettant au terrain de se déformer de façon contrôlée avant la mise en place du revêtement définitif.",
        decomposition_latex: "GSI \\text{ faible} + \\sigma_v \\text{ élevé} \\Rightarrow \\frac{\\sigma_{cm}}{\\sigma_v} \\ll 1 \\Rightarrow \\text{grandes convergences}",
        lesson: "Quand la résistance du massif est faible devant les contraintes, il faut un soutènement déformable plutôt qu'un soutènement rigide.",
      },
    ],
  },
  diagrams: {
    title: 'Schéma de principe — Caractérisation d’un massif rocheux',
    diagram_description: [
      'Relevés géologiques : lithologie, familles de discontinuités, eau',
      'Sondages carottés : RQD, essais de compression σ_ci',
      'Classifications : RMR, Q, GSI par zone homogène',
      'Paramètres du massif : Hoek-Brown, module de déformation',
      'Choix du soutènement ou du confortement',
      'Validation au front de taille et auscultation',
    ],
  },
  mistakes: {
    items: [
      ['Compter les cassures de forage dans le RQD', 'RQD sous-estimé', 'Ne compter que les discontinuités naturelles.'],
      ['Utiliser σ_ci comme résistance du massif', 'Résistance surestimée d’un facteur 5 à 10', 'Appliquer Hoek-Brown avec le GSI.'],
      ['Une seule classification pour tout le tunnel', 'Soutènement inadapté', 'Découper en zones homogènes.'],
    ],
  },
  tips: {
    tips: [
      'Calculez RMR et Q en parallèle pour vérifier leur cohérence.',
      'Photographiez les carottes humides et en caisses numérotées.',
      'Associez chaque classe de rocher à un profil type de soutènement prédéfini.',
      'Révisez la classification au front de taille au fur et à mesure du creusement.',
    ],
  },
  norms: {
    norms: [
      ['NF EN ISO 14689', 'Identification et classification des roches.'],
      ['NF EN 1997-2', 'Reconnaissance et essais géotechniques.'],
      ['Recommandations AFTES GT1 et GT7', 'Caractérisation des massifs rocheux et soutènements.'],
      ['ISRM Suggested Methods', 'Méthodes d’essai de la Société internationale de mécanique des roches.'],
    ],
  },
  exercises: {
    exercises: [
      {
        level: 1,
        text: 'Un RMR de 45 correspond à quelle classe ?',
        hint: '41 à 60.',
        answer_latex: "41 \\leq 45 \\leq 60 \\Rightarrow \\text{classe III}",
        answer_text: 'Classe III, rocher moyen.',
      },
      {
        level: 2,
        text: 'Estimer RMR pour Q = 2,5.',
        hint: 'RMR ≈ 9 ln Q + 44.',
        answer_latex: "RMR \\approx 9 \\ln(2{,}5) + 44 = 9 \\times 0{,}916 + 44 = 52",
        answer_text: 'RMR ≈ 52.',
      },
      {
        level: 3,
        text: 'Calculer s et la résistance du massif σ_cm ≈ σ_ci √s pour GSI = 45, D = 0, σ_ci = 80 MPa.',
        hint: 's = exp((GSI − 100)/9).',
        answer_latex: "s = e^{-55/9} = 0{,}0022 \\qquad \\sigma_{cm} \\approx 80 \\times \\sqrt{0{,}0022} = 3{,}8\\ \\text{MPa}",
        answer_text: 'Environ 3,8 MPa : 5 % seulement de la résistance de la roche intacte.',
      },
    ],
  },
  quiz: {
    title: 'Quiz — Mécanique des roches',
    questions: [
      { q: 'Que mesure le RQD ?', options: ['La résistance de la roche', 'La part de carottes en morceaux ≥ 10 cm', 'La perméabilité'], correct: 1, explain: 'C’est un indice de fracturation.' },
      { q: 'Un RMR de 85 correspond à…', options: ['Un rocher très bon', 'Un rocher moyen', 'Un rocher très médiocre'], correct: 0, explain: 'Classe I : 81 à 100.' },
      { q: 'Le critère de Hoek-Brown utilise…', options: ['Le GSI', 'L’indice des vides', 'Le module de Young du béton'], correct: 0, explain: 'm_b et s sont calculés à partir du GSI.' },
    ],
  },
  exam_questions: {
    questions: [
      'Présentez le RMR et le système Q et comparez-les.',
      'Expliquez le critère de Hoek-Brown et le rôle du GSI.',
      'Comment choisit-on le soutènement d’un tunnel à partir des classifications ?',
    ],
  },
  interview_questions: {
    questions: [
      ['Les classifications donnent des classes différentes : que faites-vous ?', 'Je reviens aux observations géologiques, je vérifie les paramètres sensibles (eau, altération des joints, orientation) et je retiens l’interprétation la plus cohérente avec les observations au front.'],
      ['Quand une classification ne suffit-elle pas ?', 'Quand le comportement est gouverné par quelques discontinuités (blocs), par des roches gonflantes ou poussantes, ou par de fortes contraintes : il faut des analyses spécifiques.'],
    ],
  },
  practical_case: {
    title: 'Cas pratique — Choix de profils de soutènement',
    scenario: 'Tunnel routier de 11 m de large traversant trois zones : granite sain (RMR 78), granite fracturé (RMR 52), zone de faille (RMR 25). γ = 27 kN/m³.',
    description: 'Estimer les charges et associer un profil de soutènement.',
    resolutions: [
      "RMR\\ 78 : p = 27 \\times 0{,}22 \\times 11 = 65\\ \\text{kPa} \\Rightarrow \\text{boulonnage ponctuel}",
      "RMR\\ 52 : p = 27 \\times 0{,}48 \\times 11 = 143\\ \\text{kPa} \\Rightarrow \\text{boulons systématiques + béton projeté fibré}",
      "RMR\\ 25 : p = 27 \\times 0{,}75 \\times 11 = 223\\ \\text{kPa} \\Rightarrow \\text{cintres, voûte parapluie, radier}",
    ],
    conclusion: 'Trois profils types sont définis ; le choix final se fait au front de taille selon la classification observée.',
  },
  summary: {
    content: `### La mécanique des roches en 5 points
1. Le massif = roche + discontinuités.
2. RQD : fracturation sur carottes.
3. RMR (0–100) et Q (Barton) : classifications pour le soutènement.
4. Hoek-Brown avec le GSI : résistance du massif.
5. Soutènement adapté à la classe et validé au front.`,
  },
  key_points: {
    points: [
      'RQD = Σ morceaux ≥ 10 cm / passe',
      'RMR : 5 classes',
      'Q = (RQD/Jn)(Jr/Ja)(Jw/SRF)',
      'RMR ≈ 9 ln Q + 44',
      'σ_massif ≪ σ_roche intacte',
    ],
  },
  self_assessment: {
    objectives: [
      'Je sais calculer un RQD',
      'Je sais calculer un indice Q',
      'Je sais utiliser le critère de Hoek-Brown',
      'Je sais estimer la charge sur un soutènement',
      "J'ai réussi le quiz avec au moins 2 bonnes réponses sur 3",
    ],
  },
});
