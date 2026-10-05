// ── Lesson: Béton armé — poteaux en compression — Module 9 ───────────────────
import { buildLesson } from './build_lesson.js';

export const lesson_ba_poteaux = buildLesson({
  moduleId: 9,
  slug: 'ba_poteaux',
  lessonIndex: 3,
  title: "Poteaux en Béton Armé : Compression Centrée, Élancement & Flexion Composée",
  subtitle: 'Module 09 — Conception & Calcul en Béton Armé',
  level: 'Avancé',
  duration: '15h',
  diagramType: 'rebar_beam',
  tags: ['Béton armé', 'Poteaux', 'Compression', 'Élancement', 'Flexion composée', 'Armatures minimales', 'EC2'],
}, {
  definition: {
    title: 'Définition — Les éléments qui descendent les charges',
    fr: 'Poteau en béton armé (élément comprimé)',
    en: 'Reinforced concrete column',
    metier: "Utilisée par les ingénieurs béton armé, dessinateurs-projeteurs et conducteurs de travaux pour tous les bâtiments à ossature et les piles de ponts.",
    content: `Un **poteau** est un élément vertical dont la longueur est grande devant ses dimensions transversales ; il reprend principalement un **effort normal de compression** $N_{Ed}$, souvent accompagné d'un moment $M_{Ed}$ (charges excentrées, vent, séisme).

### Ce que l'on vérifie
1. **La résistance de la section** : béton et aciers comprimés ensemble.
2. **L'élancement** : un poteau élancé subit des moments supplémentaires dus à sa déformée (effets du second ordre).
3. **La flexion composée** quand un moment s'ajoute à l'effort normal.
4. **Les dispositions constructives** : armatures minimales et maximales, cadres de maintien des barres.

> 💡 En compression, le béton porte l'essentiel ; les aciers longitudinaux ajoutent de la résistance, apportent de la ductilité et reprennent les moments.`,
  },
  importance: {
    content: `- **Sécurité globale** : la défaillance d'un poteau peut entraîner l'effondrement progressif de plusieurs étages.
- **Séisme** : les poteaux doivent rester ductiles ; des cadres serrés confinent le béton.
- **Architecture** : la section des poteaux pèse sur les surfaces utiles et les parkings.
- **Exécution** : un poteau mal vibré (nids de cailloux en pied) perd une grande partie de sa résistance.

> ⚠️ **À retenir** : le principe « poteau fort, poutre faible » protège les structures contre l'effondrement en cas de séisme.`,
  },
  applications: {
    examples: [
      ['Bâtiment de bureaux', 'Poteaux carrés ou circulaires de 30 à 60 cm descendant les charges de 5 à 10 niveaux.'],
      ['Parking', 'Poteaux espacés de 7,5 à 8 m, protégés contre les chocs des véhicules.'],
      ['Pile de pont', 'Fûts de grande section en flexion composée sous freinage, vent et séisme.'],
      ['Poteau de rive', 'Moment dû à l’excentricité des poutres de façade.'],
      ['Reprise de charges', 'Poteau de transfert fortement chargé en sous-sol.'],
    ],
  },
  theory: {
    title: 'Théorie — Résistance, élancement et moment',
    content: `### 1. Compression centrée de la section
Le raccourcissement est limité à $\\varepsilon_{c2} = 2\\,‰$ ; à cette déformation, un acier B500 travaille à $\\sigma_s = 0{,}002 \\times 200\\,000 = 400$ MPa. La résistance de la section est :
$$N_{Rd} = A_c \\, f_{cd} + A_s \\, \\sigma_s$$

### 2. Élancement
$$\\lambda = \\frac{l_0}{i} \\qquad i = \\frac{h}{\\sqrt{12}} \\ \\text{(section rectangulaire)}$$
$l_0$ est la longueur de flambement (0,7 à 1,0 fois la hauteur pour un poteau de bâtiment contreventé). Au-delà d'un élancement limite (de l'ordre de 15 à 25 selon l'effort normal réduit), les effets du second ordre doivent être pris en compte.

### 3. Méthode simplifiée française (poteaux de bâtiment courants)
Pour un poteau rectangulaire faiblement excentré, les recommandations professionnelles françaises proposent :
$$N_{Rd} = k_h \\, k_s \\, \\alpha \\, (A_c f_{cd} + A_s f_{yd})$$
$$\\alpha = \\frac{0{,}86}{1 + (\\lambda/62)^2} \\ \\ (\\lambda \\le 60) \\qquad \\alpha = \\left(\\frac{32}{\\lambda}\\right)^{1{,}3} \\ \\ (60 < \\lambda \\le 120)$$
avec $k_h = k_s = 1$ pour une section d'au moins 50 cm et un acier B500.

### 4. Flexion composée
On ramène $M$ et $N$ à une excentricité $e = M/N$ (au moins $e_0 = \\max(h/30 ; 20\\ \\text{mm})$ d'imperfection). La section est vérifiée avec un **diagramme d'interaction** N-M.

### 5. Dispositions constructives
- $A_{s,min} = \\max(0{,}10 N_{Ed}/f_{yd} \\, ; \\, 0{,}002 A_c)$ et $A_{s,max} = 0{,}04 A_c$ (hors recouvrements).
- Au moins 4 barres (rectangulaire), diamètre ≥ 8 mm ; cadres espacés au plus de min(20 Ø ; plus petite dimension ; 400 mm).`,
  },
  formulas: {
    title: 'Formules essentielles — Poteaux (EC2)',
    formulas: [
      {
        name: 'Résistance de la section en compression centrée',
        latex: "N_{Rd} = A_c \\, f_{cd} + A_s \\, \\sigma_s \\qquad \\sigma_s = \\min(E_s \\, \\varepsilon_{c2} \\, ; \\, f_{yd})",
        description: 'Raccourcissement limité à 2 ‰ en compression centrée.',
        vars: [
          ['N_{Rd}', 'Effort normal résistant', 'N', 'Résistance de la section (sans élancement).'],
          ['A_c', 'Aire de béton', 'mm²', 'Section brute (ou nette des aciers).'],
          ['A_s', 'Section des armatures longitudinales', 'mm²', 'Toutes les barres.'],
          ['\\sigma_s', 'Contrainte des aciers', 'MPa', '400 MPa pour B500 à 2 ‰.'],
        ],
      },
      {
        name: 'Élancement d’un poteau rectangulaire',
        latex: "\\lambda = \\frac{l_0}{i} = \\frac{l_0 \\sqrt{12}}{h}",
        description: 'h est la dimension dans le plan de flambement considéré.',
        vars: [
          ['\\lambda', 'Élancement', '-', 'Calculé dans les deux directions.'],
          ['l_0', 'Longueur de flambement', 'mm', '0,7 à 1,0 × hauteur libre en structure contreventée.'],
          ['h', 'Dimension de la section', 'mm', 'Dans le plan de flambement.'],
        ],
      },
      {
        name: 'Méthode simplifiée — coefficient α',
        latex: "N_{Rd} = k_h k_s \\, \\alpha \\, (A_c f_{cd} + A_s f_{yd}) \\qquad \\alpha = \\frac{0{,}86}{1 + (\\lambda / 62)^2}",
        description: 'Recommandations professionnelles françaises, λ ≤ 60 (formule différente jusqu’à 120).',
        vars: [
          ['\\alpha', 'Coefficient de réduction', '-', 'Tient compte de l’élancement et des imperfections.'],
          ['k_h, k_s', 'Coefficients correctifs', '-', '1,0 pour h ≥ 0,50 m et B500.'],
          ['f_{yd}', "Limite d'élasticité de calcul", 'MPa', '434,8 MPa.'],
        ],
      },
      {
        name: 'Excentricité minimale',
        latex: "e_0 = \\max\\left(\\frac{h}{30} \\, ; \\, 20\\ \\text{mm}\\right) \\qquad M_{Ed,min} = N_{Ed} \\cdot e_0",
        description: 'Moment minimal à considérer, même pour un poteau supposé centré.',
        vars: [
          ['e_0', 'Excentricité minimale', 'mm', 'Imperfection géométrique forfaitaire.'],
          ['M_{Ed,min}', 'Moment minimal', 'kN·m', 'À combiner avec N_Ed.'],
        ],
      },
      {
        name: 'Armatures minimales et maximales',
        latex: "A_{s,min} = \\max\\left(\\frac{0{,}10 \\, N_{Ed}}{f_{yd}} \\, ; \\, 0{,}002 \\, A_c\\right) \\qquad A_{s,max} = 0{,}04 \\, A_c",
        description: 'EC2 §9.5.2 (8 % au droit des recouvrements).',
        vars: [
          ['A_{s,min}', 'Section minimale', 'mm²', 'Ductilité et résistance aux moments parasites.'],
          ['A_{s,max}', 'Section maximale', 'mm²', 'Bétonnage correct.'],
        ],
      },
    ],
  },
  stepbystep: {
    title: 'Calcul complet — Poteau de 50 × 50 cm',
    problem: "Poteau intérieur 50 × 50 cm d'un bâtiment contreventé, longueur de flambement l₀ = 3,50 m, béton C25/30 (f_cd = 16,67 MPa), 8 HA20 (A_s = 2 513 mm²) en B500. Effort de calcul N_Ed = 3 200 kN. Vérifier le poteau par la méthode simplifiée.",
    steps_demo: [
      { n: 1, text: "Élancement : λ = 3 500 × √12 / 500 = 24,2." },
      { n: 2, text: "Coefficient : α = 0,86 / (1 + (24,2/62)²) = 0,86 / 1,153 = 0,746." },
      { n: 3, text: "Béton : A_c f_cd = 250 000 × 16,67 = 4 168 kN." },
      { n: 4, text: "Aciers : A_s f_yd = 2 513 × 434,8 = 1 093 kN." },
      { n: 5, text: "Résistance : N_Rd = 1 × 1 × 0,746 × (4 168 + 1 093) = 3 925 kN ≥ 3 200 kN." },
      { n: 6, text: "Dispositions : A_s,min = max(0,10 × 3 200 000 / 434,8 ; 0,002 × 250 000) = 736 mm² < 2 513 mm² ≤ 10 000 mm² : conforme." },
    ],
    result_latex: "\\alpha = 0{,}746 \\qquad N_{Rd} = 0{,}746 \\times (4\\,168 + 1\\,093) = 3\\,925\\ \\text{kN} \\ge N_{Ed} = 3\\,200\\ \\text{kN} \\quad \\checkmark",
  },
  units: {
    table: [
      ['Effort normal', 'kN, MN', 'kip', '1 MN = 1 000 kN = 224,8 kip'],
      ['Section de béton', 'mm², m²', 'in²', '50 × 50 cm = 250 000 mm²'],
      ['Section d’acier', 'mm², cm²', 'in²', 'HA20 = 314 mm² ; 8 HA20 = 2 513 mm²'],
      ['Moment', 'kN·m', 'kip·ft', '1 kN·m = 0,7376 kip·ft'],
      ['Déformation', '‰', 'in/in', '2 ‰ = 0,002'],
    ],
    note: 'Pour la descente de charges, cumulez les efforts de tous les niveaux supérieurs, poids propre des poteaux compris.',
  },
  hypotheses: {
    items: [
      ['info', 'La méthode simplifiée s’applique aux poteaux de bâtiment contreventés, bi-articulés, faiblement excentrés.'],
      ['info', 'Au-delà, utiliser la méthode de la rigidité nominale ou de la courbure nominale de l’EC2 (§5.8).'],
      ['warning', 'Un poteau de structure non contreventée (portique) a une longueur de flambement supérieure à sa hauteur.'],
      ['warning', 'En zone sismique, des règles de confinement et de ductilité supplémentaires s’appliquent (EC8).'],
      ['tip', 'Les poteaux de rive et d’angle sont souvent gouvernés par la flexion composée, pas par la compression centrée.'],
    ],
  },
  simple_examples: {
    examples: [
      {
        title: 'Exemple 1 : résistance de section',
        given: 'Poteau 40 × 40 cm, C30/37 (f_cd = 20 MPa), 4 HA16 (804 mm²), B500',
        find: 'N_Rd de la section (compression centrée, σ_s = 400 MPa)',
        solution_latex: "N_{Rd} = 160\\,000 \\times 20 + 804 \\times 400 = 3\\,200\\,000 + 321\\,600 = 3\\,522\\ \\text{kN}",
        result: 'N_Rd ≈ 3 520 kN (avant prise en compte de l’élancement).',
      },
      {
        title: 'Exemple 2 : élancement d’un poteau de 30 × 30 cm',
        given: 'l₀ = 3,00 m, h = 300 mm',
        find: 'λ',
        solution_latex: "\\lambda = \\frac{3\\,000 \\times \\sqrt{12}}{300} = 34{,}6",
        result: 'λ ≈ 35 : effets du second ordre à examiner.',
      },
      {
        title: 'Exemple 3 : excentricité minimale',
        given: 'h = 450 mm, N_Ed = 2 000 kN',
        find: 'M_Ed,min',
        solution_latex: "e_0 = \\max\\left(\\frac{450}{30} ; 20\\right) = 20\\ \\text{mm} \\qquad M_{Ed,min} = 2\\,000 \\times 0{,}020 = 40\\ \\text{kN·m}",
        result: 'Le poteau doit résister à 2 000 kN avec au moins 40 kN·m.',
      },
    ],
  },
  real_examples: {
    title: 'Exemple réel — Effondrement du Sampoong (Séoul, 1995)',
    examples: [
      {
        context: 'Grand magasin de 5 étages, 502 morts',
        scenario: "Les poteaux avaient été réduits de 80 à 60 cm de diamètre et leur ferraillage diminué, des étages ajoutés, et de lourds équipements de climatisation déplacés sur la toiture. Le poinçonnement d'une dalle autour d'un poteau surchargé a déclenché un effondrement progressif.",
        decomposition_latex: "\\text{Section de poteau réduite} + \\text{surcharges non prévues} \\Rightarrow \\text{poinçonnement} \\Rightarrow \\text{effondrement progressif}",
        lesson: "Toute modification de section ou d'usage doit être recalculée ; les zones poteau-dalle doivent être vérifiées au poinçonnement.",
      },
    ],
  },
  diagrams: {
    title: 'Schéma de principe — Vérification d’un poteau',
    diagram_description: [
      'Descente de charges : N_Ed cumulé depuis la toiture',
      'Moments : excentricités des poutres, vent, imperfection e₀',
      'Élancement : λ = l₀√12 / h dans les deux directions',
      'Résistance : méthode simplifiée (α) ou second ordre (EC2 §5.8)',
      'Flexion composée : diagramme d’interaction N-M',
      'Dispositions : A_s,min, A_s,max, cadres et recouvrements',
    ],
  },
  mistakes: {
    items: [
      ['Oublier l’excentricité minimale', 'Poteau calculé en compression pure, sans réserve pour les moments parasites', 'Toujours considérer M_Ed ≥ N_Ed·e₀.'],
      ['Prendre f_yd = 435 MPa en compression centrée pure', 'Contribution des aciers surestimée', 'Limiter σ_s à E_s·2 ‰ = 400 MPa dans ce cas.'],
      ['Cadres trop espacés', 'Flambement local des barres comprimées et mauvais confinement', 'Espacement ≤ min(20 Ø ; b ; 400 mm), réduit près des nœuds.'],
    ],
  },
  tips: {
    tips: [
      'Prédimensionnement rapide : A_c ≈ N_Ed / (0,6 f_cd) pour un poteau peu élancé.',
      'Gardez la même section de poteau sur plusieurs niveaux et faites varier le ferraillage : coffrages réutilisables.',
      'Vérifiez le poinçonnement des dalles autour des poteaux, surtout en planchers-dalles.',
      'Vibrez soigneusement le pied de poteau : c’est la zone la plus sollicitée et la plus difficile à bétonner.',
    ],
  },
  norms: {
    norms: [
      ['NF EN 1992-1-1 §5.8', 'Analyse des effets du second ordre en présence d’une charge axiale.'],
      ['NF EN 1992-1-1 §6.1', 'Flexion simple et composée : hypothèses de calcul de la section.'],
      ['NF EN 1992-1-1 §9.5', 'Dispositions constructives des poteaux.'],
      ['Recommandations professionnelles FFB', 'Méthode simplifiée de calcul des poteaux de bâtiment.'],
      ['NF EN 1998-1 §5', 'Règles spécifiques aux bâtiments en béton en zone sismique.'],
    ],
  },
  exercises: {
    exercises: [
      {
        level: 1,
        text: 'Calculer l’élancement d’un poteau 40 × 40 cm de longueur de flambement 2,80 m.',
        hint: 'λ = l₀√12 / h.',
        answer_latex: "\\lambda = \\frac{2\\,800 \\times 3{,}464}{400} = 24{,}2",
        answer_text: 'λ ≈ 24.',
      },
      {
        level: 2,
        text: 'Calculer A_s,min pour un poteau 40 × 40 cm avec N_Ed = 2 500 kN.',
        hint: 'max(0,10 N_Ed / f_yd ; 0,002 A_c).',
        answer_latex: "A_{s,min} = \\max\\left(\\frac{0{,}10 \\times 2\\,500\\,000}{434{,}8} ; 0{,}002 \\times 160\\,000\\right) = \\max(575 ; 320) = 575\\ \\text{mm}^2",
        answer_text: 'A_s,min = 575 mm² (4 HA14 = 616 mm²).',
      },
      {
        level: 3,
        text: 'Avec la méthode simplifiée, déterminer la section d’acier nécessaire pour un poteau 50 × 50 cm, λ = 30, C25/30, N_Ed = 4 000 kN.',
        hint: 'α = 0,86 / (1 + (30/62)²) ; A_s = (N_Ed/α − A_c f_cd) / f_yd.',
        answer_latex: "\\alpha = 0{,}697 \\quad A_s = \\frac{4\\,000\\,000/0{,}697 - 250\\,000 \\times 16{,}67}{434{,}8} = \\frac{5\\,738\\,900 - 4\\,167\\,500}{434{,}8} = 3\\,614\\ \\text{mm}^2",
        answer_text: 'A_s ≈ 3 610 mm² → 8 HA25 (3 927 mm²).',
      },
    ],
  },
  quiz: {
    title: 'Quiz — Poteaux en béton armé',
    questions: [
      { q: 'Quelle déformation limite le raccourcissement en compression centrée ?', options: ['2 ‰', '3,5 ‰', '10 ‰'], correct: 0, explain: 'ε_c2 = 2 ‰ en compression centrée (3,5 ‰ en flexion).' },
      { q: 'Quelle est la section maximale d’armatures longitudinales hors recouvrement ?', options: ['1 % de A_c', '4 % de A_c', '10 % de A_c'], correct: 1, explain: 'A_s,max = 0,04 A_c (8 % au droit des recouvrements).' },
      { q: 'Que représente e₀ ?', options: ['Une excentricité minimale d’imperfection', 'L’enrobage', 'La flèche du poteau'], correct: 0, explain: 'e₀ = max(h/30 ; 20 mm) couvre les défauts de rectitude et de position.' },
    ],
  },
  exam_questions: {
    questions: [
      'Établissez la résistance d’une section de poteau en compression centrée et justifiez la limite σ_s = 400 MPa.',
      'Expliquez les effets du second ordre et la notion d’élancement limite.',
      'Dimensionnez un poteau de bâtiment par la méthode simplifiée et rédigez ses dispositions constructives.',
    ],
  },
  interview_questions: {
    questions: [
      ['Que signifie « poteau fort, poutre faible » ?', "Lors d'un séisme, on veut que les rotules plastiques se forment dans les poutres et non dans les poteaux, afin de dissiper l'énergie sans perdre la capacité portante verticale ; on surdimensionne donc les poteaux par rapport aux poutres."],
      ['Comment augmenter la capacité d’un poteau existant ?', 'Chemisage en béton armé, chemisage métallique, frettage par tissus de fibres de carbone (confinement), ou reprise des charges par de nouveaux éléments.'],
    ],
  },
  practical_case: {
    title: 'Cas pratique — Descente de charges sur un poteau intérieur',
    scenario: 'Bâtiment R+4, trame 6 × 6 m, charges par niveau G = 7 kN/m² (dalle, revêtements, cloisons) et Q = 2,5 kN/m² ; toiture G = 6 kN/m², Q = 1 kN/m². Poteau intérieur 40 × 40 cm.',
    description: "Calculer N_Ed en pied de poteau au rez-de-chaussée (5 planchers dont la toiture, poids propre des poteaux négligé ici).",
    resolutions: [
      "\\text{Surface reprise : } 6 \\times 6 = 36\\ \\text{m}^2",
      "N_{Ed} = 36 \\times [4 \\times (1{,}35 \\times 7 + 1{,}5 \\times 2{,}5) + (1{,}35 \\times 6 + 1{,}5 \\times 1)] = 36 \\times [4 \\times 13{,}2 + 9{,}6] = 36 \\times 62{,}4 = 2\\,246\\ \\text{kN}",
      "\\text{Section 40 × 40 en C25/30 : } A_c f_{cd} = 160\\,000 \\times 16{,}67 = 2\\,667\\ \\text{kN} \\Rightarrow \\text{prévoir le calcul avec } \\alpha \\text{ et les aciers}",
    ],
    conclusion: "N_Ed ≈ 2 250 kN : un poteau 40 × 40 en C25/30 est suffisant avec un ferraillage de l'ordre de 4 à 8 HA16 après application du coefficient α ; on vérifiera aussi la dégression des charges d'exploitation autorisée par l'EC1.",
  },
  summary: {
    content: `### Les poteaux en 5 points
1. $N_{Rd} = A_c f_{cd} + A_s \\sigma_s$ avec $\\sigma_s = 400$ MPa à 2 ‰.
2. Élancement $\\lambda = l_0 \\sqrt{12} / h$.
3. Méthode simplifiée : $N_{Rd} = \\alpha (A_c f_{cd} + A_s f_{yd})$.
4. Excentricité minimale $e_0 = \\max(h/30 ; 20\\ \\text{mm})$.
5. $0{,}002 A_c \\le A_s \\le 0{,}04 A_c$, cadres de maintien.`,
  },
  key_points: {
    points: [
      'ε_c2 = 2 ‰ en compression centrée',
      'λ = l₀·√12 / h',
      'α = 0,86 / (1 + (λ/62)²) pour λ ≤ 60',
      'e₀ = max(h/30 ; 20 mm)',
      'A_s,max = 4 % de A_c',
    ],
  },
  self_assessment: {
    objectives: [
      'Je sais faire la descente de charges sur un poteau',
      'Je sais calculer l’élancement d’un poteau',
      'Je sais vérifier un poteau par la méthode simplifiée',
      'Je connais les dispositions constructives des poteaux',
      "J'ai réussi le quiz avec au moins 2 bonnes réponses sur 3",
    ],
  },
});
