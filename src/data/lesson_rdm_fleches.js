// ── Lesson: RDM — flèches et déformées — Module 7 ────────────────────────────
import { buildLesson } from './build_lesson.js';

export const lesson_rdm_fleches = buildLesson({
  moduleId: 7,
  slug: 'rdm_fleches',
  lessonIndex: 3,
  title: "Flèches & Déformées des Poutres : Équation de la Ligne Élastique et Formulaire",
  subtitle: 'Module 07 — Résistance des Matériaux (RDM)',
  level: 'Intermédiaire',
  duration: '12h',
  diagramType: 'rebar_beam',
  tags: ['RDM', 'Flèche', 'Déformée', 'Ligne élastique', 'Rigidité EI', 'ELS', 'Superposition'],
}, {
  definition: {
    title: 'Définition — De combien la poutre descend-elle ?',
    fr: 'Flèche (déplacement vertical) et déformée d’une poutre',
    en: 'Deflection and elastic curve',
    metier: "Utilisée par les ingénieurs structure pour les vérifications aux états limites de service (ELS) : planchers, poutres de façade, ponts, passerelles.",
    content: `La **déformée** est la courbe prise par l'axe d'une poutre sous charge ; la **flèche** $w$ est le déplacement vertical en un point, le plus souvent à mi-portée ou en bout de console.

Une poutre peut être **assez résistante** (pas de rupture) mais **trop souple** : flèche visible, fissuration des cloisons, carrelages décollés, vibrations, eau stagnante en toiture. C'est l'objet des vérifications aux **états limites de service**.

### La grandeur clé : la rigidité EI
La flèche est inversement proportionnelle au produit $E \\cdot I$ (module du matériau × inertie de la section). Doubler la hauteur d'une section rectangulaire multiplie $I$ par 8 et divise la flèche par 8.

> 💡 La flèche varie comme $L^4$ sous charge répartie : allonger une portée de 20 % double presque la flèche.`,
  },
  importance: {
    content: `- **Usage** : au-delà d'environ L/250, une flèche devient visible et inquiète les occupants.
- **Second œuvre** : les cloisons et carrelages fissurent sous des flèches bien plus faibles (L/500).
- **Matériaux souples** : en acier, bois et aluminium, la flèche gouverne souvent le choix de la section, avant la résistance.
- **Fluage** : en béton et en bois, la flèche augmente avec le temps sous charges permanentes.

> ⚠️ **À retenir** : pour le bois et l'acier, vérifiez la flèche dès le prédimensionnement ; c'est souvent elle qui dimensionne.`,
  },
  applications: {
    examples: [
      ['Plancher de bureaux', 'Limitation de la flèche à L/300 ou L/500 selon la présence de cloisons fragiles.'],
      ['Poutre de façade vitrée', 'Flèche limitée à quelques millimètres pour ne pas casser les vitrages.'],
      ['Solives de plancher bois', 'Vérification de la flèche instantanée et finale (fluage) selon l’EC5.'],
      ['Toiture-terrasse', 'Éviter les poches d’eau qui augmentent la charge (risque d’effondrement progressif).'],
      ['Pont roulant', 'Flèche des chemins de roulement limitée à L/600 à L/1000.'],
    ],
  },
  theory: {
    title: 'Théorie — La ligne élastique',
    content: `### 1. Équation différentielle
Pour de petites déformations, la courbure est proportionnelle au moment fléchissant :
$$E I \\, \\frac{d^2 w}{dx^2} = -M(x)$$
On intègre deux fois et on fixe les constantes avec les conditions aux appuis (flèche nulle sur un appui, rotation nulle à un encastrement).

### 2. Formulaire des cas usuels
- Poutre sur deux appuis, charge répartie $q$ : $w_{max} = \\dfrac{5 q L^4}{384 E I}$
- Poutre sur deux appuis, charge centrée $P$ : $w_{max} = \\dfrac{P L^3}{48 E I}$
- Console, charge répartie : $w_{max} = \\dfrac{q L^4}{8 E I}$
- Console, charge en bout : $w_{max} = \\dfrac{P L^3}{3 E I}$

### 3. Superposition
En élasticité linéaire, les flèches dues à plusieurs charges s'additionnent : on décompose un cas complexe en cas simples du formulaire.

### 4. Limites usuelles
Les limites de flèche s'expriment en fraction de la portée : L/200 (toitures courantes), L/250 à L/300 (planchers), L/500 (planchers supportant des cloisons fragiles). Les annexes nationales et les DTU précisent les valeurs.`,
  },
  formulas: {
    title: 'Formules essentielles — Flèches',
    formulas: [
      {
        name: 'Équation de la ligne élastique',
        latex: "E I \\, \\frac{d^2 w}{dx^2} = -M(x)",
        description: 'Relation entre la courbure de la déformée et le moment fléchissant.',
        vars: [
          ['w(x)', 'Flèche', 'mm', 'Déplacement vertical à l’abscisse x.'],
          ['E', "Module d'Young", 'MPa', 'Acier 210 000 ; béton ≈ 30 000 ; bois ≈ 11 000.'],
          ['I', "Moment d'inertie", 'mm⁴', 'Par rapport à l’axe de flexion.'],
          ['M(x)', 'Moment fléchissant', 'N·mm', 'Avec la convention de signe choisie.'],
        ],
      },
      {
        name: 'Poutre sur deux appuis — charge uniforme',
        latex: "w_{max} = \\frac{5 \\, q \\, L^4}{384 \\, E \\, I}",
        description: 'Flèche à mi-portée.',
        vars: [
          ['q', 'Charge répartie (ELS)', 'N/mm', '1 kN/m = 1 N/mm.'],
          ['L', 'Portée', 'mm', 'Entre appuis.'],
        ],
        rule: "La flèche est proportionnelle à L⁴ : +10 % de portée donne +46 % de flèche.",
      },
      {
        name: 'Poutre sur deux appuis — charge centrée',
        latex: "w_{max} = \\frac{P \\, L^3}{48 \\, E \\, I}",
        description: 'Charge concentrée à mi-portée.',
        vars: [
          ['P', 'Charge concentrée', 'N', 'Valeur de service.'],
        ],
      },
      {
        name: 'Console — charges en bout et répartie',
        latex: "w_{P} = \\frac{P \\, L^3}{3 \\, E \\, I} \\qquad w_{q} = \\frac{q \\, L^4}{8 \\, E \\, I}",
        description: 'Flèche à l’extrémité libre d’une console encastrée.',
        vars: [
          ['w_P', 'Flèche due à la charge en bout', 'mm', 'Charge P à l’extrémité.'],
          ['w_q', 'Flèche due à la charge répartie', 'mm', 'Charge q sur toute la longueur.'],
        ],
      },
      {
        name: 'Vérification ELS',
        latex: "w \\le \\frac{L}{n}",
        description: 'n = 200 à 500 selon l’usage et les éléments supportés.',
        vars: [
          ['w', 'Flèche calculée', 'mm', 'Instantanée, différée ou active selon le critère.'],
          ['n', 'Coefficient de limite', '-', '250 à 300 pour un plancher courant, 500 avec cloisons fragiles.'],
        ],
      },
    ],
  },
  stepbystep: {
    title: 'Calcul complet — Flèche d’une poutre métallique',
    problem: "Poutre IPE 300 (I = 8 356 cm⁴) en acier (E = 210 000 MPa), portée 6 m sur deux appuis, charge de service q = 15 kN/m. Vérifier la flèche par rapport à L/300.",
    steps_demo: [
      { n: 1, text: "Unités : q = 15 N/mm ; L = 6 000 mm ; I = 8,356 × 10⁷ mm⁴." },
      { n: 2, text: "L⁴ = 6 000⁴ = 1,296 × 10¹⁵ mm⁴." },
      { n: 3, text: "Numérateur : 5 × 15 × 1,296 × 10¹⁵ = 9,72 × 10¹⁶." },
      { n: 4, text: "Dénominateur : 384 × 210 000 × 8,356 × 10⁷ = 6,738 × 10¹⁵." },
      { n: 5, text: "w = 9,72 × 10¹⁶ / 6,738 × 10¹⁵ = 14,4 mm." },
      { n: 6, text: "Limite : L/300 = 20 mm ≥ 14,4 mm : la flèche est vérifiée (L/416)." },
    ],
    result_latex: "w = \\frac{5 \\times 15 \\times 6\\,000^4}{384 \\times 210\\,000 \\times 8{,}356 \\times 10^7} = 14{,}4\\ \\text{mm} \\le \\frac{6\\,000}{300} = 20\\ \\text{mm} \\quad \\checkmark",
  },
  units: {
    table: [
      ['Flèche', 'mm', 'in', '1 in = 25,4 mm'],
      ['Inertie', 'mm⁴, cm⁴', 'in⁴', '1 cm⁴ = 10⁴ mm⁴ ; 1 in⁴ = 416 231 mm⁴'],
      ['Rigidité EI', 'N·mm²', 'lb·in²', 'Souvent en kN·m² : 1 kN·m² = 10⁹ N·mm²'],
      ['Charge linéique', 'kN/m = N/mm', 'lb/ft', '1 kN/m = 68,5 lb/ft'],
      ['Module E', 'MPa', 'ksi', 'Acier 210 000 MPa = 30 458 ksi'],
    ],
    note: "Erreur classique : les inerties des tables sont en cm⁴ ; multipliez par 10⁴ pour passer en mm⁴.",
  },
  hypotheses: {
    items: [
      ['info', 'Matériau élastique linéaire, petites déformations, sections planes (Navier-Bernoulli).'],
      ['info', 'La déformation due à l’effort tranchant est négligée (valable pour les poutres élancées, L/h > 10).'],
      ['warning', 'En béton armé, utilisez une inertie fissurée et tenez compte du fluage : la flèche réelle peut atteindre 2 à 3 fois la flèche élastique non fissurée.'],
      ['warning', 'Le bois flue fortement en ambiance humide : coefficient k_def de l’EC5 pour la flèche finale.'],
      ['tip', 'Une contreflèche à la fabrication compense la flèche due aux charges permanentes.'],
    ],
  },
  simple_examples: {
    examples: [
      {
        title: 'Exemple 1 : charge concentrée',
        given: 'P = 20 kN au centre, L = 4 m, EI = 4 000 kN·m²',
        find: 'La flèche',
        solution_latex: "w = \\frac{20 \\times 4^3}{48 \\times 4\\,000} = 0{,}00667\\ \\text{m} = 6{,}7\\ \\text{mm}",
        result: 'w ≈ 6,7 mm (L/600).',
      },
      {
        title: 'Exemple 2 : console de balcon',
        given: 'q = 8 kN/m, L = 1,5 m, EI = 2 000 kN·m²',
        find: 'La flèche en bout',
        solution_latex: "w = \\frac{8 \\times 1{,}5^4}{8 \\times 2\\,000} = 0{,}00253\\ \\text{m} = 2{,}5\\ \\text{mm}",
        result: 'w ≈ 2,5 mm.',
      },
      {
        title: 'Exemple 3 : effet de la hauteur',
        given: 'Section rectangulaire dont on double la hauteur',
        find: 'Le rapport des flèches',
        solution_latex: "\\frac{I_2}{I_1} = \\frac{b (2h)^3}{b h^3} = 8 \\Rightarrow \\frac{w_2}{w_1} = \\frac{1}{8}",
        result: 'La flèche est divisée par 8.',
      },
    ],
  },
  real_examples: {
    title: 'Exemple réel — Effondrement par poches d’eau d’une toiture légère',
    examples: [
      {
        context: 'Entrepôt à toiture-terrasse en bac acier, faible pente',
        scenario: "Des pannes trop souples fléchissent sous l'eau de pluie ; la flèche crée une cuvette qui retient plus d'eau, donc plus de charge et plus de flèche. Avec des évacuations obstruées, la toiture s'effondre.",
        decomposition_latex: "w \\uparrow \\Rightarrow \\text{volume d'eau} \\uparrow \\Rightarrow q \\uparrow \\Rightarrow w \\uparrow \\ \\text{(instabilité par accumulation)}",
        lesson: "Pour les toitures plates, il faut une pente suffisante, des trop-pleins et une rigidité qui limite les flèches ; c'est un cas où l'ELS conditionne la sécurité.",
      },
    ],
  },
  diagrams: {
    title: 'Schéma de principe — Calcul d’une flèche',
    diagram_description: [
      'Schéma statique : appuis, encastrements, portée',
      'Charges de service (ELS) : combinaison caractéristique ou quasi permanente',
      'Rigidité EI : E du matériau, I de la section (cm⁴ → mm⁴)',
      'Formulaire ou intégration de E·I·w″ = −M',
      'Superposition des cas de charge',
      'Comparaison à la limite L/n et ajustement de la section',
    ],
  },
  mistakes: {
    items: [
      ['Calculer la flèche avec les charges ELU', 'Flèche surestimée de 35 à 50 %', 'Utiliser les combinaisons ELS (charges non pondérées).'],
      ['Oublier de convertir I de cm⁴ en mm⁴', 'Flèche fausse d’un facteur 10 000', 'Travailler en N et mm de bout en bout.'],
      ['Ignorer le fluage en béton et en bois', 'Flèche à long terme sous-estimée', 'Appliquer les coefficients de fluage des Eurocodes.'],
    ],
  },
  tips: {
    tips: [
      'Retenez 5/384 ≈ 1/77 : w ≈ qL⁴/(77 EI) pour une poutre sur deux appuis.',
      'Une poutre continue fléchit environ 2 à 5 fois moins qu’une poutre isostatique de même portée.',
      'Pour le prédimensionnement en acier, choisissez d’abord la section sur la flèche, puis vérifiez la résistance.',
      'Contrôlez aussi la fréquence propre des planchers légers (vibrations).',
    ],
  },
  norms: {
    norms: [
      ['NF EN 1990 Annexe A1.4', 'Critères d’aptitude au service : déformations verticales.'],
      ['NF EN 1993-1-1/NA', 'Valeurs limites de flèche des éléments en acier.'],
      ['NF EN 1992-1-1 §7.4', 'Limitation des flèches des éléments en béton.'],
      ['NF EN 1995-1-1 §7.2', 'Limites de flèche instantanée et finale des structures en bois.'],
    ],
  },
  exercises: {
    exercises: [
      {
        level: 1,
        text: 'Poutre sur deux appuis, L = 5 m, q = 10 kN/m (ELS), EI = 20 000 kN·m². Calculer la flèche.',
        hint: 'Travailler en kN et m.',
        answer_latex: "w = \\frac{5 \\times 10 \\times 5^4}{384 \\times 20\\,000} = 0{,}00407\\ \\text{m} = 4{,}1\\ \\text{mm}",
        answer_text: 'w ≈ 4,1 mm.',
      },
      {
        level: 2,
        text: 'Une console de 2 m porte 5 kN en bout ; EI = 1 500 kN·m². Calculer la flèche et la comparer à L/150.',
        hint: 'w = PL³ / (3EI).',
        answer_latex: "w = \\frac{5 \\times 2^3}{3 \\times 1\\,500} = 0{,}00889\\ \\text{m} = 8{,}9\\ \\text{mm} \\le \\frac{2\\,000}{150} = 13{,}3\\ \\text{mm}",
        answer_text: 'w ≈ 8,9 mm : vérifié.',
      },
      {
        level: 3,
        text: 'Quelle inertie minimale faut-il en acier pour une poutre de 7 m sous q = 12 kN/m (ELS) avec w ≤ L/300 ?',
        hint: 'I ≥ 5qL⁴ / (384 E w_lim).',
        answer_latex: "I \\ge \\frac{5 \\times 12 \\times 7\\,000^4}{384 \\times 210\\,000 \\times 23{,}3} = 7{,}66 \\times 10^7\\ \\text{mm}^4",
        answer_text: 'I ≥ 7 660 cm⁴ → IPE 300 (8 356 cm⁴).',
      },
    ],
  },
  quiz: {
    title: 'Quiz — Flèches',
    questions: [
      { q: 'Comment varie la flèche d’une poutre sous charge répartie avec la portée ?', options: ['Comme L', 'Comme L²', 'Comme L⁴'], correct: 2, explain: 'w = 5qL⁴/(384EI).' },
      { q: 'Avec quelles charges vérifie-t-on les flèches ?', options: ['ELU', 'ELS', 'Accidentelles'], correct: 1, explain: 'Les flèches sont des critères de service (ELS).' },
      { q: 'Que devient la flèche si l’inertie double ?', options: ['Elle double', 'Elle est divisée par 2', 'Elle est divisée par 4'], correct: 1, explain: 'La flèche est inversement proportionnelle à EI.' },
    ],
  },
  exam_questions: {
    questions: [
      'Établissez la flèche d’une poutre sur deux appuis sous charge uniforme par intégration de l’équation de la ligne élastique.',
      'Expliquez le principe de superposition et appliquez-le à une poutre portant une charge répartie et une charge concentrée.',
      'Discutez les limites de flèche selon les usages et les matériaux.',
    ],
  },
  interview_questions: {
    questions: [
      ['Votre poutre résiste mais fléchit trop. Que proposez-vous ?', 'Augmenter l’inertie (section plus haute plutôt que plus lourde), rendre la poutre continue ou encastrée, réduire la portée par un appui, prévoir une contreflèche pour les charges permanentes, ou utiliser une section mixte.'],
      ['Pourquoi la flèche d’une dalle béton augmente-t-elle avec le temps ?', 'À cause du fluage et du retrait du béton sous charges permanentes, et de la fissuration qui réduit la rigidité ; la flèche finale peut valoir 2 à 3 fois la flèche instantanée.'],
    ],
  },
  practical_case: {
    title: 'Cas pratique — Choix d’une solive bois',
    scenario: 'Solives en bois C24 (E_0,mean = 11 000 MPa) de section 75 × 200 mm espacées de 0,50 m, portée 4,2 m, charge de service 2,5 kN/m² (G + Q).',
    description: 'Vérifier la flèche instantanée par rapport à L/300.',
    resolutions: [
      "q = 2{,}5 \\times 0{,}50 = 1{,}25\\ \\text{kN/m} = 1{,}25\\ \\text{N/mm} \\qquad I = \\frac{75 \\times 200^3}{12} = 5{,}0 \\times 10^7\\ \\text{mm}^4",
      "w = \\frac{5 \\times 1{,}25 \\times 4\\,200^4}{384 \\times 11\\,000 \\times 5{,}0 \\times 10^7} = 9{,}2\\ \\text{mm}",
      "w = 9{,}2\\ \\text{mm} \\le \\frac{4\\,200}{300} = 14\\ \\text{mm} \\quad \\checkmark",
    ],
    conclusion: 'La flèche instantanée est vérifiée ; il reste à vérifier la flèche finale avec le fluage (k_def) et la résistance en flexion.',
  },
  summary: {
    content: `### Les flèches en 5 points
1. $E I \\, w'' = -M$ : la flèche dépend de la rigidité $EI$.
2. Deux appuis : $5qL^4/(384EI)$ et $PL^3/(48EI)$.
3. Console : $qL^4/(8EI)$ et $PL^3/(3EI)$.
4. **Superposition** des cas simples.
5. Vérification ELS : $w \\le L/n$ (n = 200 à 500).`,
  },
  key_points: {
    points: [
      'w = 5qL⁴ / (384EI)',
      'w = PL³ / (48EI)',
      'Console : PL³/(3EI) et qL⁴/(8EI)',
      'Flèches aux ELS, jamais aux ELU',
      'Tables en cm⁴ : × 10⁴ pour les mm⁴',
    ],
  },
  self_assessment: {
    objectives: [
      'Je connais l’équation de la ligne élastique',
      'Je sais utiliser le formulaire des flèches',
      'Je sais appliquer la superposition',
      'Je sais vérifier une flèche aux ELS',
      "J'ai réussi le quiz avec au moins 2 bonnes réponses sur 3",
    ],
  },
});
