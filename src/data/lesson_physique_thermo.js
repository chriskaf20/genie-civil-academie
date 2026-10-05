// ── Lesson: Thermodynamique et transferts thermiques — Module 2 ───────────────
import { buildLesson } from './build_lesson.js';

export const lesson_physique_thermo = buildLesson({
  moduleId: 2,
  slug: 'physique_thermo',
  lessonIndex: 3,
  title: "Thermodynamique & Transferts de Chaleur : Dilatation, Chaleur, Conduction et Rayonnement",
  subtitle: 'Module 02 — Physique fondamentale & Physique des matériaux',
  level: 'Débutant',
  duration: '10h',
  tags: ['Thermodynamique', 'Dilatation thermique', 'Chaleur massique', 'Chaleur latente', 'Conduction', 'Rayonnement', 'Joints de dilatation'],
}, {
  definition: {
    title: 'Définition — La chaleur et ses effets sur les ouvrages',
    fr: 'Thermodynamique et transferts thermiques',
    en: 'Thermodynamics and heat transfer',
    metier: "Utilisée pour les joints de dilatation des ponts et bâtiments, le bétonnage par temps froid ou chaud, les pièces massives, le gel des sols et l'isolation des bâtiments.",
    content: `La **thermodynamique** étudie l'énergie thermique et ses échanges. Pour l'ingénieur civil, trois effets dominent :
1. **La dilatation** : les matériaux s'allongent quand la température augmente ; si l'allongement est empêché, des contraintes apparaissent.
2. **Le stockage de chaleur** : chaleur sensible (élévation de température) et chaleur latente (changement d'état : gel, fonte).
3. **Les transferts** : conduction (dans la matière), convection (par un fluide en mouvement) et rayonnement (ondes électromagnétiques).

### Les principes à retenir
- **Premier principe** : l'énergie se conserve (la chaleur fournie modifie l'énergie interne ou produit un travail).
- **Second principe** : la chaleur va spontanément du chaud vers le froid.

> 💡 Un pont de 100 m en béton s'allonge d'environ 5 cm entre l'hiver et l'été : sans joints ni appareils d'appui adaptés, il fissurerait ses appuis.`,
  },
  importance: {
    content: `- **Joints de dilatation** : bâtiments, chaussées en béton, rails, ponts, canalisations doivent pouvoir se dilater.
- **Béton jeune** : l'hydratation dégage de la chaleur ; les pièces massives fissurent si l'écart de température cœur-surface est trop grand.
- **Gel** : l'eau gèle en augmentant son volume de 9 % ; gélifraction des roches, soulèvement des sols, dégradation des bétons poreux.
- **Énergie des bâtiments** : les transferts thermiques déterminent le chauffage et le confort d'été.

> ⚠️ **À retenir** : une dilatation empêchée crée une contrainte σ = E α ΔT, indépendante de la longueur de la pièce.`,
  },
  applications: {
    examples: [
      ['Pont', 'Calcul du souffle des joints de chaussée et du déplacement des appareils d’appui.'],
      ['Voie ferrée', 'Rails longs soudés : contraintes thermiques reprises par le ballast.'],
      ['Radier massif', 'Suivi de la température du béton et limitation du gradient thermique.'],
      ['Chaussée en béton', 'Joints sciés tous les 4 à 5 m pour localiser la fissuration de retrait et thermique.'],
      ['Bâtiment', 'Joints de dilatation tous les 25 à 50 m selon le climat et le matériau.'],
    ],
  },
  theory: {
    title: 'Théorie — Dilatation, chaleur et transferts',
    content: `### 1. Dilatation thermique
$$\\Delta L = \\alpha \\, L \\, \\Delta T$$
$\\alpha$ ≈ 10 à 12 × 10⁻⁶ /°C pour le béton et l'acier (d'où leur bonne compatibilité en béton armé), 23 × 10⁻⁶ /°C pour l'aluminium.

### 2. Contrainte de dilatation empêchée
$$\\sigma = E \\, \\alpha \\, \\Delta T$$

### 3. Chaleur sensible et chaleur latente
$$Q = m \\, c \\, \\Delta T \\qquad Q = m \\, L_f$$
$c$ ≈ 880 J/kg·K pour le béton, 4 186 J/kg·K pour l'eau ; chaleur latente de fusion de la glace $L_f$ = 334 kJ/kg.

### 4. Conduction (loi de Fourier)
$$\\Phi = \\lambda \\, \\frac{A \\, \\Delta T}{e}$$
$\\lambda$ est la conductivité thermique (W/m·K).

### 5. Convection et rayonnement
- Convection : $\\Phi = h \\, A \\, (T_s - T_f)$.
- Rayonnement d'une surface : $\\Phi = \\varepsilon \\, \\sigma \\, A \\, T^4$ avec $\\sigma = 5{,}67 \\times 10^{-8}$ W/m²·K⁴ et $T$ en kelvins.`,
  },
  formulas: {
    title: 'Formules essentielles — Thermique',
    formulas: [
      {
        name: 'Dilatation linéaire',
        latex: "\\Delta L = \\alpha \\, L \\, \\Delta T",
        description: 'Allongement libre d’une pièce soumise à une variation de température.',
        vars: [
          ['\\Delta L', 'Allongement', 'm', 'Positif quand la température augmente.'],
          ['\\alpha', 'Coefficient de dilatation', '1/°C', 'Béton ≈ 10 × 10⁻⁶ ; acier 12 × 10⁻⁶.'],
          ['L', 'Longueur', 'm', 'Longueur initiale.'],
          ['\\Delta T', 'Variation de température', '°C', 'Écart été-hiver ou jour-nuit.'],
        ],
        rule: "Repère : 1 mm par mètre pour 100 °C d'écart dans le béton et l'acier.",
      },
      {
        name: 'Contrainte de dilatation empêchée',
        latex: "\\sigma = E \\, \\alpha \\, \\Delta T",
        description: 'Contrainte dans une pièce bloquée à ses extrémités.',
        vars: [
          ['\\sigma', 'Contrainte thermique', 'MPa', 'Compression si la pièce chauffe.'],
          ['E', "Module d'Young", 'MPa', 'Acier 210 000 ; béton ≈ 30 000.'],
        ],
      },
      {
        name: 'Chaleur sensible et chaleur latente',
        latex: "Q = m \\, c \\, \\Delta T \\qquad Q_f = m \\, L_f",
        description: 'Énergie pour chauffer un matériau ou faire fondre de la glace.',
        vars: [
          ['Q', 'Quantité de chaleur', 'J', '1 kWh = 3,6 MJ.'],
          ['m', 'Masse', 'kg', 'Masse du matériau.'],
          ['c', 'Chaleur massique', 'J/(kg·K)', 'Béton ≈ 880 ; eau 4 186 ; acier ≈ 460.'],
          ['L_f', 'Chaleur latente de fusion', 'J/kg', 'Glace : 334 000 J/kg.'],
        ],
      },
      {
        name: 'Loi de Fourier (conduction)',
        latex: "\\Phi = \\lambda \\, \\frac{A \\, \\Delta T}{e}",
        description: 'Flux de chaleur à travers une paroi plane en régime permanent.',
        vars: [
          ['\\Phi', 'Flux thermique', 'W', 'Puissance transmise.'],
          ['\\lambda', 'Conductivité thermique', 'W/(m·K)', 'Béton ≈ 2 ; isolant ≈ 0,035.'],
          ['A', 'Surface', 'm²', 'Surface traversée.'],
          ['e', 'Épaisseur', 'm', 'Épaisseur de la paroi.'],
        ],
      },
      {
        name: 'Loi de Stefan-Boltzmann (rayonnement)',
        latex: "\\Phi = \\varepsilon \\, \\sigma \\, A \\, T^4",
        description: 'Puissance rayonnée par une surface à la température absolue T.',
        vars: [
          ['\\varepsilon', 'Émissivité', '-', '≈ 0,9 pour les matériaux de construction.'],
          ['\\sigma', 'Constante de Stefan-Boltzmann', 'W/(m²·K⁴)', '5,67 × 10⁻⁸.'],
          ['T', 'Température absolue', 'K', 'T(K) = θ(°C) + 273,15.'],
        ],
      },
    ],
  },
  stepbystep: {
    title: 'Calcul complet — Joint de dilatation d’un pont',
    problem: "Un tablier de pont en béton (α = 10 × 10⁻⁶ /°C) de 120 m est fixé sur la culée amont et libre sur la culée aval. Les températures du tablier varient de −15 °C à +40 °C ; il est posé à +15 °C. Calculer les déplacements à reprendre par le joint aval.",
    steps_demo: [
      { n: 1, text: "Dilatation maximale (de +15 à +40 °C) : ΔL = 10 × 10⁻⁶ × 120 × 25 = 0,030 m = 30 mm (fermeture du joint)." },
      { n: 2, text: "Contraction maximale (de +15 à −15 °C) : ΔL = 10 × 10⁻⁶ × 120 × 30 = 0,036 m = 36 mm (ouverture)." },
      { n: 3, text: "Souffle thermique total : 30 + 36 = 66 mm." },
      { n: 4, text: "En béton, on ajoute le retrait et le fluage (raccourcissements) : de l'ordre de 2 à 4 × 10⁻⁴, soit 24 à 48 mm sur 120 m." },
      { n: 5, text: "Choix : joint de chaussée d'un souffle d'au moins 100 à 120 mm, appareil d'appui aval glissant ou en élastomère adapté." },
    ],
    result_latex: "\\Delta L_{+} = 10^{-5} \\times 120 \\times 25 = 30\\ \\text{mm} \\qquad \\Delta L_{-} = 10^{-5} \\times 120 \\times 30 = 36\\ \\text{mm} \\qquad \\text{souffle thermique} = 66\\ \\text{mm}",
  },
  units: {
    table: [
      ['Température', '°C, K', '°F', 'T(K) = θ(°C) + 273,15 ; °F = 1,8 °C + 32'],
      ['Coefficient de dilatation', '1/°C = 1/K', '1/°F', '1 × 10⁻⁵ /°C = 0,556 × 10⁻⁵ /°F'],
      ['Chaleur', 'J, kWh', 'BTU', '1 kWh = 3,6 MJ = 3 412 BTU'],
      ['Conductivité', 'W/(m·K)', 'BTU·in/(h·ft²·°F)', '1 W/(m·K) = 6,93 BTU·in/(h·ft²·°F)'],
      ['Chaleur massique', 'J/(kg·K)', 'BTU/(lb·°F)', '4 186 J/(kg·K) = 1 BTU/(lb·°F)'],
    ],
    note: 'Un écart de température en °C est identique en kelvins : ΔT = 20 °C = 20 K.',
  },
  hypotheses: {
    items: [
      ['info', 'Coefficients de dilatation supposés constants dans la plage de températures usuelle.'],
      ['info', 'La loi de Fourier présentée est en régime permanent ; les phénomènes journaliers demandent une analyse transitoire (inertie).'],
      ['warning', 'La contrainte σ = EαΔT suppose un blocage total ; en réalité les liaisons sont partiellement souples.'],
      ['warning', 'Les ponts subissent aussi un gradient de température dans l’épaisseur (dessus ensoleillé) qui les fait fléchir.'],
      ['tip', 'Pour les températures de projet des ponts, utilisez l’EN 1991-1-5 et la carte des températures de l’annexe nationale.'],
    ],
  },
  simple_examples: {
    examples: [
      {
        title: 'Exemple 1 : rail bloqué',
        given: 'Acier E = 210 000 MPa, α = 12 × 10⁻⁶ /°C, échauffement de 40 °C',
        find: 'La contrainte de compression',
        solution_latex: "\\sigma = 210\\,000 \\times 12 \\times 10^{-6} \\times 40 = 100{,}8\\ \\text{MPa}",
        result: '≈ 100 MPa, quelle que soit la longueur du rail.',
      },
      {
        title: 'Exemple 2 : échauffement d’un radier',
        given: 'Béton de 2 400 kg/m³, c = 880 J/kg·K ; chaleur d’hydratation 60 MJ/m³ sans pertes',
        find: 'L’élévation de température adiabatique',
        solution_latex: "\\Delta T = \\frac{60 \\times 10^6}{2\\,400 \\times 880} = 28{,}4\\ °C",
        result: '≈ 28 °C : risque de fissuration si la surface refroidit vite (gradient cœur-surface).',
      },
      {
        title: 'Exemple 3 : énergie pour faire fondre la glace',
        given: '1 m³ de glace (917 kg)',
        find: 'L’énergie de fusion',
        solution_latex: "Q = 917 \\times 334\\,000 = 306 \\times 10^6\\ \\text{J} = 85\\ \\text{kWh}",
        result: '85 kWh : c’est pourquoi le dégel d’un sol prend du temps.',
      },
    ],
  },
  real_examples: {
    title: 'Exemple réel — Flambement thermique des voies ferrées',
    examples: [
      {
        context: 'Vagues de chaleur sur les réseaux ferrés',
        scenario: "Les rails longs soudés sont posés à une température de neutralisation (≈ 25 °C en France) pour limiter les contraintes. Lors de températures de rail supérieures à 50-60 °C, la compression thermique peut faire flamber latéralement la voie si le ballast est insuffisamment consolidé (travaux récents).",
        decomposition_latex: "\\sigma = 210\\,000 \\times 12 \\times 10^{-6} \\times 35 \\approx 88\\ \\text{MPa} \\Rightarrow N \\approx 680\\ \\text{kN par rail UIC 60}",
        lesson: "On limite les vitesses lors des fortes chaleurs, surtout sur les sections récemment travaillées, et on contrôle la température de libération des rails.",
      },
    ],
  },
  diagrams: {
    title: 'Schéma de principe — Effets de la température sur un ouvrage',
    diagram_description: [
      'Variation uniforme de température → allongement ΔL = αLΔT',
      'Allongement libre → déplacements aux joints et appareils d’appui',
      'Allongement empêché → contrainte σ = EαΔT',
      'Gradient dans l’épaisseur → courbure et flexion',
      'Chaleur d’hydratation du béton jeune → risque de fissuration thermique',
      'Gel de l’eau (+9 % de volume) → dégradation des matériaux poreux',
    ],
  },
  mistakes: {
    items: [
      ['Utiliser les °C dans le rayonnement', 'Résultats absurdes', 'Convertir en kelvins dans T⁴.'],
      ['Oublier le retrait du béton dans le souffle des joints', 'Joint trop ouvert en hiver', 'Ajouter retrait et fluage aux effets thermiques.'],
      ['Supposer la contrainte proportionnelle à la longueur', 'Erreur de raisonnement', 'La contrainte empêchée ne dépend que de E, α et ΔT ; c’est le déplacement qui dépend de L.'],
    ],
  },
  tips: {
    tips: [
      'Repère : un bâtiment en béton de 40 m sans joint subit environ 12 mm de variation pour 30 °C.',
      'Bétonnez les pièces massives de préférence avec des ciments à faible chaleur d’hydratation et suivez les températures.',
      'Les chaussées et dallages ont des joints sciés pour localiser les fissures.',
      'Par temps froid, protégez le béton frais du gel jusqu’à environ 5 MPa de résistance.',
    ],
  },
  norms: {
    norms: [
      ['NF EN 1991-1-5', 'Actions thermiques sur les structures.'],
      ['NF EN 1992-1-1 §3.1.3', 'Coefficient de dilatation thermique du béton (10 × 10⁻⁶ /°C).'],
      ['NF EN ISO 6946', 'Calcul des transferts thermiques à travers les parois.'],
      ['Fascicule 65', 'Exécution des ouvrages en béton (bétonnage par temps froid et chaud).'],
    ],
  },
  exercises: {
    exercises: [
      {
        level: 1,
        text: 'Une canalisation en acier de 200 m passe de 10 °C à 60 °C. Calculer son allongement (α = 12 × 10⁻⁶ /°C).',
        hint: 'ΔL = αLΔT.',
        answer_latex: "\\Delta L = 12 \\times 10^{-6} \\times 200 \\times 50 = 0{,}12\\ \\text{m}",
        answer_text: '12 cm : il faut des lyres ou des compensateurs de dilatation.',
      },
      {
        level: 2,
        text: 'Calculer le flux traversant 10 m² de béton de 20 cm (λ = 2,0 W/m·K) pour un écart de 20 °C.',
        hint: 'Φ = λAΔT/e.',
        answer_latex: "\\Phi = 2{,}0 \\times \\frac{10 \\times 20}{0{,}20} = 2\\,000\\ \\text{W}",
        answer_text: '2 kW : un mur béton non isolé est très déperditif.',
      },
      {
        level: 3,
        text: 'Quelle énergie faut-il pour chauffer 1 m³ de béton (2 400 kg, c = 880 J/kg·K) de 5 à 20 °C ? Exprimer en kWh.',
        hint: 'Q = mcΔT puis ÷ 3,6 × 10⁶.',
        answer_latex: "Q = 2\\,400 \\times 880 \\times 15 = 31{,}7 \\times 10^6\\ \\text{J} = 8{,}8\\ \\text{kWh}",
        answer_text: '≈ 8,8 kWh.',
      },
    ],
  },
  quiz: {
    title: 'Quiz — Thermique',
    questions: [
      { q: 'Pourquoi l’acier et le béton forment-ils un bon couple ?', options: ['Ils ont la même couleur', 'Ils ont des coefficients de dilatation voisins', 'Ils ont la même densité'], correct: 1, explain: 'α ≈ 10 à 12 × 10⁻⁶ /°C pour les deux : pas de contraintes internes avec la température.' },
      { q: 'De combien augmente le volume de l’eau en gelant ?', options: ['≈ 1 %', '≈ 9 %', '≈ 50 %'], correct: 1, explain: 'La glace occupe environ 9 % de volume de plus que l’eau.' },
      { q: 'La contrainte de dilatation empêchée dépend-elle de la longueur ?', options: ['Oui, proportionnellement', 'Non', 'Seulement pour l’acier'], correct: 1, explain: 'σ = EαΔT, indépendante de la longueur.' },
    ],
  },
  exam_questions: {
    questions: [
      'Établissez la contrainte d’une barre dont la dilatation est empêchée et discutez des solutions constructives.',
      'Expliquez les trois modes de transfert de chaleur et donnez un exemple pour chacun dans le bâtiment.',
      'Analysez le risque de fissuration thermique d’une pièce massive en béton.',
    ],
  },
  interview_questions: {
    questions: [
      ['Pourquoi prévoit-on des joints de dilatation dans les bâtiments ?', "Pour permettre les variations de longueur dues à la température et au retrait sans créer d'efforts importants ni de fissures ; on fractionne les grands bâtiments en blocs de 25 à 50 m selon le matériau et le climat."],
      ['Comment bétonner une pièce massive ?', "Ciment à faible chaleur d'hydratation, additions minérales, réduction du dosage, refroidissement des granulats ou de l'eau, bétonnage par levées, protection thermique de surface pour limiter le gradient, et suivi par sondes de température."],
    ],
  },
  practical_case: {
    title: 'Cas pratique — Bâtiment de 90 m de long',
    scenario: 'Un bâtiment en béton armé de 90 m de long, posé en été à 25 °C, peut descendre à −10 °C en hiver (structure non chauffée en phase chantier). Retrait final estimé : 3 × 10⁻⁴.',
    description: 'Évaluer le raccourcissement total et décider du fractionnement.',
    resolutions: [
      "\\Delta L_{th} = 10^{-5} \\times 90 \\times 35 = 31{,}5\\ \\text{mm}",
      "\\Delta L_{retrait} = 3 \\times 10^{-4} \\times 90\\,000 = 27\\ \\text{mm} \\qquad \\Delta L_{total} = 58{,}5\\ \\text{mm}",
      "\\text{Deux joints (3 blocs de 30 m) : } \\approx 20\\ \\text{mm par bloc}",
    ],
    conclusion: 'Près de 6 cm de raccourcissement sur 90 m : on fractionne le bâtiment en trois blocs de 30 m séparés par des joints de dilatation, traversant la structure du dessus des fondations à la toiture.',
  },
  summary: {
    content: `### La thermique en 5 points
1. Dilatation : $\\Delta L = \\alpha L \\Delta T$ (≈ 1 mm/m pour 100 °C).
2. Dilatation empêchée : $\\sigma = E \\alpha \\Delta T$.
3. Chaleur : $Q = mc\\Delta T$ ; fusion $Q = m L_f$.
4. Conduction : $\\Phi = \\lambda A \\Delta T / e$.
5. Rayonnement : $\\Phi = \\varepsilon \\sigma A T^4$ (T en K).`,
  },
  key_points: {
    points: [
      'α béton ≈ 10 × 10⁻⁶ /°C ; acier 12 × 10⁻⁶ /°C',
      'σ = E·α·ΔT',
      'c eau = 4 186 J/kg·K ; L_f glace = 334 kJ/kg',
      'Φ = λ·A·ΔT / e',
      'Joints de dilatation tous les 25 à 50 m',
    ],
  },
  self_assessment: {
    objectives: [
      'Je sais calculer une dilatation et une contrainte thermique',
      'Je sais calculer une quantité de chaleur',
      'Je connais les trois modes de transfert de chaleur',
      'Je sais dimensionner le souffle d’un joint de dilatation',
      "J'ai réussi le quiz avec au moins 2 bonnes réponses sur 3",
    ],
  },
});
