// ── Lesson: Matériaux innovants — Module 23 ──────────────────────────────────
import { buildLesson } from './build_lesson.js';

export const lesson_materiaux_innovants = buildLesson({
  moduleId: 23,
  slug: 'materiaux_innovants',
  lessonIndex: 3,
  title: "Matériaux Innovants : BFUP, Composites FRP, Bétons Autoplaçants et Bas Carbone",
  subtitle: 'Module 23 — Matériaux de Construction',
  level: 'Avancé',
  duration: '6h',
  tags: ['BFUP', 'UHPC', 'FRP', 'Carbone', 'BAP', 'Bas carbone', 'Géopolymère', 'Impression 3D'],
}, {
  definition: {
    title: 'Définition — Les matériaux qui repoussent les limites',
    fr: 'Matériaux innovants de construction',
    en: 'Innovative construction materials',
    metier: "Utilisés par les ingénieurs de recherche, les bureaux d'études spécialisés en réparation, les entreprises de préfabrication et les maîtres d'ouvrage engagés dans la décarbonation.",
    content: `Les **matériaux innovants** apportent des performances que les matériaux classiques n'offrent pas, ou réduisent fortement l'impact environnemental :

- **BFUP** (béton fibré à ultra-hautes performances) : résistance en compression de 130 à 250 MPa, fibres métalliques, très faible porosité.
- **Composites FRP** (polymères renforcés de fibres de carbone, de verre ou de basalte) : légers, très résistants en traction, non corrodables.
- **BAP** (béton autoplaçant) : se met en place sous son propre poids, sans vibration.
- **Bétons bas carbone** : ciments à forte teneur en laitier, argiles calcinées (LC3), liants alcali-activés (géopolymères).
- **Impression 3D**, bétons auto-cicatrisants, bétons de chanvre et de terre.

> 💡 Un matériau innovant n'est utilisable que s'il dispose d'un cadre : norme, avis technique ou évaluation technique européenne.`,
  },
  importance: {
    content: `- **Réparation** : les FRP renforcent poutres, dalles et poteaux sans ajouter de poids.
- **Ouvrages fins et durables** : le BFUP permet des passerelles élancées et des éléments sans armatures passives.
- **Productivité** : le BAP réduit le bruit et la main-d'œuvre, améliore les parements.
- **Climat** : le ciment représente environ 7 à 8 % des émissions mondiales de CO₂.

> ⚠️ **À retenir** : l'innovation doit être assurable : vérifiez l'existence d'un avis technique ou d'une ATEx avant de prescrire.`,
  },
  applications: {
    examples: [
      ['Renforcement de poutre', 'Lamelles de carbone collées en sous-face.'],
      ['Confinement de poteau', 'Tissus de carbone enroulés pour augmenter la résistance et la ductilité.'],
      ['Passerelle en BFUP', 'Tablier mince précontraint, portée importante.'],
      ['Voiles architecturaux', 'BAP pour des parements lisses sans vibration.'],
      ['Fondations bas carbone', 'Béton CEM III/A ou CEM III/B pour réduire l’empreinte.'],
    ],
  },
  theory: {
    title: 'Théorie — Propriétés et dimensionnement',
    content: `### 1. Composites FRP
Comportement **élastique linéaire jusqu'à la rupture** (pas de plasticité). Ordres de grandeur :
| Matériau | $E$ (GPa) | Résistance (MPa) |
|---|---|---|
| Acier B500 | 200 | 500 (élastique) |
| CFRP (carbone) | 150 à 230 | 2 000 à 3 000 |
| GFRP (verre) | 35 à 50 | 600 à 1 200 |

En renforcement collé, la déformation de calcul est limitée (souvent 0,4 à 0,8 %) pour éviter le **décollement**.

### 2. Loi des mélanges
Le module d'un composite unidirectionnel dans le sens des fibres :
$$E_c = V_f E_f + (1 - V_f) E_m$$

### 3. BFUP
Squelette granulaire très fin (D ≤ quelques mm), E/C ≈ 0,20, fumée de silice, superplastifiant, 2 à 3 % de fibres en volume. Traction post-fissuration de l'ordre de 8 à 10 MPa. Encadré en France par la NF P 18-470 et la NF P 18-710.

### 4. BAP
Caractérisé par l'**étalement** (slump-flow) : SF1 550–650 mm, SF2 660–750 mm, SF3 760–850 mm, ainsi que par sa résistance à la ségrégation.

### 5. Empreinte carbone
$$CO_2 = \\sum_i m_i \\cdot FE_i$$
Le facteur d'émission du clinker est le plus élevé ; les ciments composés et les additions le réduisent.`,
  },
  formulas: {
    title: 'Formules essentielles — Matériaux innovants',
    formulas: [
      {
        name: 'Effort repris par un renfort FRP',
        latex: "F_f = E_f \\, \\varepsilon_{fd} \\, A_f",
        description: 'Effort de traction mobilisable par le composite, limité par la déformation de calcul.',
        vars: [
          ['F_f', 'Effort dans le renfort', 'N', ''],
          ['E_f', 'Module du composite', 'MPa', '≈ 165 000 pour une lamelle carbone courante.'],
          ['\\varepsilon_{fd}', 'Déformation de calcul', '-', 'Souvent 0,004 à 0,008 (décollement).'],
          ['A_f', 'Section du renfort', 'mm²', 'Largeur × épaisseur.'],
        ],
      },
      {
        name: 'Loi des mélanges',
        latex: "E_c = V_f E_f + (1 - V_f) E_m",
        description: 'Module longitudinal d’un composite unidirectionnel.',
        vars: [
          ['E_c', 'Module du composite', 'GPa', ''],
          ['V_f', 'Fraction volumique de fibres', '-', '0,5 à 0,7 pour les lamelles.'],
          ['E_f, E_m', 'Modules des fibres et de la matrice', 'GPa', 'Carbone ≈ 230 ; époxy ≈ 3,5.'],
        ],
      },
      {
        name: 'Empreinte carbone d’un béton',
        latex: "CO_2 = \\sum_i m_i \\cdot FE_i",
        description: 'Somme des masses par leur facteur d’émission (données de FDES ou EPD).',
        vars: [
          ['m_i', 'Masse du constituant', 'kg/m³', ''],
          ['FE_i', "Facteur d'émission", 'kg CO₂e/kg', 'Valeurs à prendre dans les déclarations environnementales.'],
        ],
        rule: 'Le ciment représente en général plus de 80 % de l’empreinte d’un béton courant.',
      },
      {
        name: 'Rigidité spécifique',
        latex: "e = \\frac{E}{\\rho}",
        description: 'Compare l’efficacité des matériaux à masse égale.',
        vars: [
          ['E', "Module d'Young", 'GPa', ''],
          ['\\rho', 'Masse volumique', 't/m³', ''],
        ],
      },
    ],
  },
  stepbystep: {
    title: 'Calcul complet — Renforcement d’une poutre par lamelle carbone',
    problem: "Une poutre en béton armé doit reprendre un moment supplémentaire. On colle une lamelle CFRP de 100 × 1,2 mm (E_f = 165 GPa) avec une déformation de calcul ε_fd = 0,6 %. Le bras de levier vaut z ≈ 0,50 m. Estimer l'effort repris par la lamelle et le gain de moment.",
    steps_demo: [
      { n: 1, text: "Section : A_f = 100 × 1,2 = 120 mm²." },
      { n: 2, text: "Contrainte de calcul : σ = 165 000 × 0,006 = 990 MPa (loin de la résistance de 2 800 MPa : c'est le décollement qui gouverne)." },
      { n: 3, text: "Effort : F_f = 990 × 120 = 118 800 N = 118,8 kN." },
      { n: 4, text: "Gain de moment : ΔM ≈ F_f × z = 118,8 × 0,50 = 59,4 kN·m." },
      { n: 5, text: "Vérifier ensuite l'ancrage d'extrémité, la résistance au feu (protection) et le moment résistant initial sans renfort." },
    ],
    result_latex: "F_f = 165\\,000 \\times 0{,}006 \\times 120 = 118{,}8\\ \\text{kN} \\qquad \\Delta M \\approx 118{,}8 \\times 0{,}50 = 59{,}4\\ \\text{kN·m}",
  },
  units: {
    table: [
      ['Module', 'GPa', 'Msi', '1 Msi = 6,895 GPa'],
      ['Résistance', 'MPa', 'ksi', '1 ksi = 6,895 MPa'],
      ['Étalement BAP', 'mm', 'in', 'SF2 : 660 à 750 mm'],
      ['Fibres', '% volumique', '% volumique', '2 % de fibres acier ≈ 157 kg/m³'],
      ['Empreinte', 'kg CO₂e/m³', 'lb CO₂e/yd³', '1 kg/m³ = 1,686 lb/yd³'],
    ],
    note: 'Les composites ont une résistance très élevée mais un module souvent plus faible que l’acier : vérifiez les déformations.',
  },
  hypotheses: {
    items: [
      ['info', 'Les FRP sont élastiques fragiles : le dimensionnement vise une rupture du béton ou un décollement contrôlé.'],
      ['info', 'Les valeurs de résistance et de module dépendent fortement du produit : utilisez les fiches techniques et avis techniques.'],
      ['warning', 'Les résines époxy perdent leurs propriétés au-delà de leur température de transition vitreuse (souvent 50 à 80 °C) : protection au feu nécessaire.'],
      ['warning', 'Les bétons bas carbone peuvent avoir une montée en résistance plus lente et une résistance à la carbonatation différente.'],
      ['tip', 'Pour un BAP, contrôlez l’étalement et la stabilité à chaque livraison.'],
    ],
  },
  simple_examples: {
    examples: [
      {
        title: 'Exemple 1 : loi des mélanges',
        given: 'V_f = 0,60 ; E_f = 230 GPa ; E_m = 3,5 GPa',
        find: 'E_c',
        solution_latex: "E_c = 0{,}60 \\times 230 + 0{,}40 \\times 3{,}5 = 138 + 1{,}4 = 139{,}4\\ \\text{GPa}",
        result: 'Environ 139 GPa.',
      },
      {
        title: 'Exemple 2 : gain carbone d’un ciment composé',
        given: '350 kg de ciment ; FE = 0,80 (CEM I) ou 0,45 (CEM III/A) kg CO₂e/kg (valeurs indicatives)',
        find: 'Réduction',
        solution_latex: "350 \\times 0{,}80 = 280 \\qquad 350 \\times 0{,}45 = 157{,}5 \\qquad \\frac{280 - 157{,}5}{280} = 44\\ \\%",
        result: 'Environ 44 % d’émissions en moins sur le ciment.',
      },
      {
        title: 'Exemple 3 : rigidité spécifique',
        given: 'Acier : E = 210 GPa, ρ = 7,85 ; CFRP : E = 165 GPa, ρ = 1,6',
        find: 'E/ρ',
        solution_latex: "\\frac{210}{7{,}85} = 26{,}8 \\qquad \\frac{165}{1{,}6} = 103",
        result: 'À masse égale, le carbone est environ 4 fois plus rigide.',
      },
    ],
  },
  real_examples: {
    title: 'Exemple réel — Les passerelles en BFUP',
    examples: [
      {
        context: 'Passerelle de Sherbrooke (Canada, 1997) puis passerelle de la Paix à Séoul (2002)',
        scenario: "Ces passerelles ont été parmi les premières à utiliser le BFUP en structure. La passerelle de la Paix franchit environ 120 m avec un arc en BFUP de faible épaisseur, sans armatures passives classiques.",
        decomposition_latex: "f_c \\approx 200\\ \\text{MPa} + \\text{fibres} + \\text{précontrainte} \\Rightarrow \\text{sections minces et très durables}",
        lesson: "Le BFUP permet des ouvrages fins et durables, mais exige une maîtrise industrielle de la fabrication (malaxage, orientation des fibres, cure).",
      },
    ],
  },
  diagrams: {
    title: 'Schéma de principe — Choisir un matériau innovant',
    diagram_description: [
      'Besoin : performance, réparation, délai ou carbone',
      'Matériaux candidats : BFUP, FRP, BAP, bas carbone, biosourcés',
      'Vérification du cadre : norme, avis technique, ATEx, assurabilité',
      'Dimensionnement avec les règles spécifiques (décollement, feu, fluage)',
      'Contrôles de fabrication et de mise en œuvre',
      'Suivi en service et retour d’expérience',
    ],
  },
  mistakes: {
    items: [
      ['Dimensionner un FRP à sa résistance ultime', 'Décollement prématuré', 'Limiter la déformation de calcul et vérifier les ancrages.'],
      ['Oublier la tenue au feu des résines', 'Perte du renfort en cas d’incendie', 'Vérifier la situation accidentelle sans renfort ou protéger.'],
      ['Remplacer un ciment sans vérifier l’exposition', 'Durabilité insuffisante', 'Contrôler la compatibilité ciment/classe d’exposition.'],
    ],
  },
  tips: {
    tips: [
      'Préparez soigneusement le support avant collage d’un FRP (sablage, propreté, cohésion ≥ 1,5 MPa).',
      'Demandez les déclarations environnementales (FDES, EPD) pour comparer les bétons.',
      'Testez le BAP sur une maquette avant un parement architectural.',
      'Le BFUP coûte cher au m³ : son intérêt vient de la réduction des volumes et de la maintenance.',
    ],
  },
  norms: {
    norms: [
      ['NF EN 206 (annexe G)', 'Exigences complémentaires pour les bétons autoplaçants.'],
      ['NF P 18-470 et NF P 18-710', 'BFUP : spécification et calcul des structures.'],
      ['fib Bulletin 90 / ACI 440.2R', 'Renforcement de structures par FRP collés.'],
      ['NF EN 197-5', 'Ciments CEM II/C-M et CEM VI.'],
      ['NF EN 15804', 'Déclarations environnementales des produits de construction.'],
    ],
  },
  exercises: {
    exercises: [
      {
        level: 1,
        text: 'Quelle est la plage d’étalement d’un BAP de classe SF2 ?',
        hint: 'Trois classes SF1 à SF3.',
        answer_latex: "660 \\text{ à } 750\\ \\text{mm}",
        answer_text: '660 à 750 mm.',
      },
      {
        level: 2,
        text: 'Calculer l’effort repris par deux lamelles de 50 × 1,4 mm, E_f = 165 GPa, ε_fd = 0,5 %.',
        hint: 'A_f = 2 × 50 × 1,4.',
        answer_latex: "F = 165\\,000 \\times 0{,}005 \\times 140 = 115{,}5\\ \\text{kN}",
        answer_text: '115,5 kN.',
      },
      {
        level: 3,
        text: 'Un BFUP contient 2,5 % de fibres d’acier en volume. Calculer la masse de fibres par m³.',
        hint: 'ρ_acier = 7 850 kg/m³.',
        answer_latex: "0{,}025 \\times 7\\,850 = 196\\ \\text{kg/m}^3",
        answer_text: 'Environ 196 kg/m³.',
      },
    ],
  },
  quiz: {
    title: 'Quiz — Matériaux innovants',
    questions: [
      { q: 'Comment se comporte un composite carbone en traction ?', options: ['Ductile avec palier', 'Élastique jusqu’à la rupture', 'Plastique dès le début'], correct: 1, explain: 'Les FRP sont élastiques linéaires et fragiles.' },
      { q: 'Quel est l’ordre de grandeur de la résistance d’un BFUP ?', options: ['30 MPa', '60 MPa', '150 à 250 MPa'], correct: 2, explain: 'Le BFUP dépasse 130 MPa en compression.' },
      { q: 'Quel constituant pèse le plus dans l’empreinte carbone d’un béton ?', options: ['Les granulats', 'Le ciment', 'L’eau'], correct: 1, explain: 'Le clinker du ciment concentre l’essentiel des émissions.' },
    ],
  },
  exam_questions: {
    questions: [
      'Présentez le principe et les limites du renforcement par FRP collés.',
      'Décrivez la composition et les applications du BFUP.',
      'Quels leviers permettent de réduire l’empreinte carbone d’un béton ?',
    ],
  },
  interview_questions: {
    questions: [
      ['Quand proposez-vous un renforcement carbone plutôt qu’acier ?', 'Quand le poids, l’encombrement, la corrosion ou la rapidité d’intervention comptent, et que la situation au feu peut être traitée.'],
      ['Quels risques voyez-vous dans un béton bas carbone ?', 'Une résistance au jeune âge plus faible qui allonge les décoffrages, une sensibilité à la cure et une durabilité à vérifier vis-à-vis de la carbonatation ; il faut adapter le planning et la cure.'],
    ],
  },
  practical_case: {
    title: 'Cas pratique — Réduire l’empreinte d’un béton de fondations',
    scenario: 'Fondations d’un bâtiment : 600 m³ de béton C25/30 XC2 à 330 kg de CEM I par m³. Le maître d’ouvrage veut réduire l’empreinte carbone.',
    description: 'Comparer la solution initiale et une solution CEM III/A (facteurs indicatifs 0,80 et 0,45 kg CO₂e/kg).',
    resolutions: [
      "\\text{Initial} : 600 \\times 330 \\times 0{,}80 = 158\\,400\\ \\text{kg CO}_2\\text{e} \\approx 158\\ \\text{t}",
      "\\text{CEM III/A} : 600 \\times 330 \\times 0{,}45 = 89\\,100\\ \\text{kg} \\approx 89\\ \\text{t}",
      "\\text{Gain} : 158{,}4 - 89{,}1 = 69{,}3\\ \\text{t CO}_2\\text{e} \\ (-44\\ \\%)",
    ],
    conclusion: 'La solution CEM III/A est compatible avec XC2 et les fondations, où la montée en résistance lente pose peu de problèmes de planning.',
  },
  summary: {
    content: `### Les matériaux innovants en 5 points
1. FRP : très résistants, élastiques fragiles ; dimensionnement limité par le décollement.
2. BFUP : 130 à 250 MPa, fibres, ouvrages minces et durables.
3. BAP : étalement SF1 à SF3, mise en place sans vibration.
4. Bas carbone : ciments composés, LC3, liants alcali-activés.
5. Toujours vérifier le cadre normatif ou l'avis technique.`,
  },
  key_points: {
    points: [
      'F_f = E_f × ε_fd × A_f',
      'E_c = V_f E_f + (1 − V_f) E_m',
      'BFUP > 130 MPa',
      'BAP : classes SF1 à SF3',
      'Ciment = l’essentiel du CO₂ du béton',
    ],
  },
  self_assessment: {
    objectives: [
      'Je connais les propriétés des FRP',
      'Je sais estimer un renfort par lamelle carbone',
      'Je connais le BFUP et le BAP',
      'Je sais comparer l’empreinte carbone de deux bétons',
      "J'ai réussi le quiz avec au moins 2 bonnes réponses sur 3",
    ],
  },
});
