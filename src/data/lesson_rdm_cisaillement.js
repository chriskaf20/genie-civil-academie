// ── Lesson: RDM — effort tranchant, cisaillement et torsion — Module 7 ────────
import { buildLesson } from './build_lesson.js';

export const lesson_rdm_cisaillement = buildLesson({
  moduleId: 7,
  slug: 'rdm_cisaillement',
  lessonIndex: 2,
  title: "Effort Tranchant, Contraintes de Cisaillement & Torsion",
  subtitle: 'Module 07 — Résistance des Matériaux (RDM)',
  level: 'Intermédiaire',
  duration: '12h',
  diagramType: 'rebar_beam',
  tags: ['RDM', 'Effort tranchant', 'Cisaillement', 'Jourawski', 'Moment statique', 'Torsion', 'Flux de cisaillement'],
}, {
  definition: {
    title: 'Définition — Quand les fibres veulent glisser',
    fr: 'Contrainte de cisaillement (contrainte tangentielle)',
    en: 'Shear stress',
    metier: "Utilisée par tous les ingénieurs structure : vérification des âmes de poutres, des assemblages, des goujons, des arbres de transmission et des poutres en bois.",
    content: `Une poutre fléchie subit, en plus des contraintes normales $\\sigma$ dues au moment, des **contraintes de cisaillement** $\\tau$ dues à l'**effort tranchant** $V$. Elles agissent dans le plan de la section et tendent à faire glisser les fibres les unes sur les autres.

### Deux origines du cisaillement
1. **L'effort tranchant** dans les poutres : le cisaillement est maximal à l'axe neutre et nul aux fibres extrêmes.
2. **La torsion** (moment autour de l'axe de la pièce) : le cisaillement est maximal en surface et nul au centre.

> 💡 Expérience simple : un paquet de feuilles fléchi glisse feuille sur feuille ; collées entre elles, elles forment une poutre beaucoup plus rigide. La colle reprend le cisaillement.`,
  },
  importance: {
    content: `- **Poutres courtes et fortement chargées** : la rupture par effort tranchant est brutale (béton armé) ou par voilement de l'âme (acier).
- **Bois** : sa faible résistance au cisaillement parallèle aux fibres gouverne souvent les poutres courtes.
- **Assemblages** : boulons, goujons, soudures et connecteurs travaillent en cisaillement.
- **Torsion** : arbres de machines, poutres de rive supportant des balcons, ponts courbes.

> ⚠️ **À retenir** : la flexion gouverne les grandes portées, l'effort tranchant les petites portées et les zones d'appui.`,
  },
  applications: {
    examples: [
      ['Poutre béton armé', 'Calcul des contraintes de cisaillement près des appuis pour dimensionner les étriers.'],
      ['Profilé métallique', "Vérification de l'âme d'un IPE sous une charge concentrée proche de l'appui."],
      ['Poutre en bois', 'Vérification du cisaillement longitudinal des solives courtes très chargées.'],
      ['Poutre reconstituée', 'Calcul du flux de cisaillement pour espacer les clous ou les cordons de soudure semelle-âme.'],
      ['Arbre de transmission', 'Dimensionnement en torsion d’un arbre de pompe.'],
    ],
  },
  theory: {
    title: "Théorie — Jourawski, sections usuelles et torsion",
    content: `### 1. Formule de Jourawski
La contrainte de cisaillement moyenne sur une coupe horizontale située à la cote $y$ vaut :
$$\\tau(y) = \\frac{V \\cdot S(y)}{I \\cdot b(y)}$$
$S(y)$ est le **moment statique** de la partie de section située au-delà de la coupe, par rapport à l'axe neutre.

### 2. Section rectangulaire
La répartition est parabolique, maximale à l'axe neutre :
$$\\tau_{max} = \\frac{3}{2} \\cdot \\frac{V}{b h}$$
soit 50 % de plus que la contrainte moyenne $V/A$.

### 3. Profilés en I
Les semelles reprennent le moment, l'**âme** reprend presque tout l'effort tranchant, avec une contrainte quasi uniforme :
$$\\tau \\approx \\frac{V}{h_w \\cdot t_w}$$

### 4. Flux de cisaillement
Dans une poutre reconstituée (semelles clouées, soudées ou collées), l'effort de glissement par unité de longueur à l'interface vaut $q = V S / I$ ; l'espacement des connecteurs de résistance $F$ est $s = F / q$.

### 5. Torsion des sections circulaires
$$\\tau_{max} = \\frac{T \\cdot r}{I_0} = \\frac{16\\, T}{\\pi d^3} \\qquad I_0 = \\frac{\\pi d^4}{32}$$
La section tourne d'un angle $\\theta = T L / (G I_0)$.`,
  },
  formulas: {
    title: 'Formules essentielles — Cisaillement et torsion',
    formulas: [
      {
        name: 'Formule de Jourawski',
        latex: "\\tau(y) = \\frac{V \\cdot S(y)}{I \\cdot b(y)}",
        description: 'Contrainte de cisaillement due à l’effort tranchant à la cote y.',
        vars: [
          ['\\tau(y)', 'Contrainte de cisaillement', 'MPa', 'Moyenne sur la largeur b(y).'],
          ['V', 'Effort tranchant', 'N', 'Dans la section étudiée.'],
          ['S(y)', 'Moment statique', 'mm³', 'De la partie de section au-delà de la coupe, par rapport à l’axe neutre.'],
          ['I', "Moment d'inertie", 'mm⁴', 'De toute la section par rapport à l’axe neutre.'],
          ['b(y)', 'Largeur à la cote y', 'mm', 'Largeur de la coupe.'],
        ],
        rule: "Le cisaillement est maximal là où la largeur est faible et le moment statique grand : à l'axe neutre, dans l'âme.",
      },
      {
        name: 'Cisaillement maximal d’une section rectangulaire',
        latex: "\\tau_{max} = \\frac{3}{2} \\cdot \\frac{V}{b \\cdot h}",
        description: 'Répartition parabolique, maximum à l’axe neutre.',
        vars: [
          ['b', 'Largeur', 'mm', 'Largeur de la section.'],
          ['h', 'Hauteur', 'mm', 'Hauteur totale.'],
        ],
      },
      {
        name: "Cisaillement dans l'âme d'un profilé en I",
        latex: "\\tau \\approx \\frac{V}{h_w \\cdot t_w}",
        description: "Approximation : l'âme reprend tout l'effort tranchant de façon quasi uniforme.",
        vars: [
          ['h_w', "Hauteur de l'âme", 'mm', 'Entre semelles.'],
          ['t_w', "Épaisseur de l'âme", 'mm', 'Lue dans les tables.'],
        ],
      },
      {
        name: 'Flux de cisaillement et espacement des connecteurs',
        latex: "q = \\frac{V \\cdot S}{I} \\qquad s = \\frac{F}{q}",
        description: 'Effort de glissement par unité de longueur à une interface.',
        vars: [
          ['q', 'Flux de cisaillement', 'N/mm', 'Effort longitudinal par mm de poutre.'],
          ['S', 'Moment statique de la partie connectée', 'mm³', 'Par exemple la semelle rapportée.'],
          ['F', "Résistance d'un connecteur", 'N', 'Clou, boulon, goujon.'],
          ['s', 'Espacement', 'mm', 'Maximal admissible.'],
        ],
      },
      {
        name: "Torsion d'une section circulaire pleine",
        latex: "\\tau_{max} = \\frac{16\\, T}{\\pi d^3} \\qquad \\theta = \\frac{T \\cdot L}{G \\cdot I_0}",
        description: 'Contrainte maximale en surface et angle de rotation.',
        vars: [
          ['T', 'Moment de torsion', 'N·mm', 'Couple appliqué.'],
          ['d', 'Diamètre', 'mm', 'Diamètre de l’arbre.'],
          ['\\theta', 'Angle de torsion', 'rad', 'Rotation relative des extrémités.'],
          ['L', 'Longueur', 'mm', 'Longueur de l’arbre.'],
          ['G', 'Module de cisaillement', 'MPa', 'Acier ≈ 81 000 MPa.'],
          ['I_0', "Moment d'inertie polaire", 'mm⁴', 'πd⁴/32.'],
        ],
      },
    ],
  },
  stepbystep: {
    title: 'Calcul complet — Cisaillement dans une poutre rectangulaire',
    problem: "Poutre rectangulaire 200 × 500 mm, effort tranchant V = 120 kN. Calculer τ_max à l'axe neutre, puis τ à 125 mm au-dessus de l'axe neutre par Jourawski.",
    steps_demo: [
      { n: 1, text: "Inertie : I = 200 × 500³ / 12 = 2,083 × 10⁹ mm⁴." },
      { n: 2, text: "Moment statique à l'axe neutre : S = 200 × 250 × 125 = 6,25 × 10⁶ mm³." },
      { n: 3, text: "τ_max = 120 000 × 6,25 × 10⁶ / (2,083 × 10⁹ × 200) = 1,80 MPa (= 1,5 V/A)." },
      { n: 4, text: "À y = 125 mm : partie au-dessus = 200 × 125 mm, centre à 187,5 mm → S = 200 × 125 × 187,5 = 4,69 × 10⁶ mm³." },
      { n: 5, text: "τ(125) = 120 000 × 4,69 × 10⁶ / (2,083 × 10⁹ × 200) = 1,35 MPa (75 % du maximum)." },
    ],
    result_latex: "\\tau_{max} = \\frac{3}{2} \\times \\frac{120\\,000}{200 \\times 500} = 1{,}80\\ \\text{MPa} \\qquad \\tau(125) = 1{,}35\\ \\text{MPa}",
  },
  units: {
    table: [
      ['Contrainte de cisaillement', 'MPa = N/mm²', 'psi, ksi', '1 MPa = 145 psi'],
      ['Moment statique', 'mm³', 'in³', '1 in³ = 16 387 mm³'],
      ['Flux de cisaillement', 'N/mm', 'lb/in', '1 N/mm = 5,71 lb/in'],
      ['Moment de torsion', 'N·m, kN·m', 'lb·ft', '1 kN·m = 737,6 lb·ft'],
      ['Module de cisaillement G', 'MPa', 'ksi', 'Acier 81 000 ; béton ≈ 12 500 ; bois ≈ 500 à 700'],
    ],
    note: 'Travaillez en N et mm : les contraintes sortent directement en MPa.',
  },
  hypotheses: {
    items: [
      ['info', 'Jourawski suppose un matériau élastique linéaire et une contrainte uniforme sur la largeur de la coupe.'],
      ['info', 'La formule de torsion τ = Tr/I₀ ne vaut que pour les sections circulaires (pleines ou creuses).'],
      ['warning', 'Les sections ouvertes minces (I, U, cornières) sont très peu résistantes en torsion : à éviter pour reprendre un couple.'],
      ['warning', 'Près des charges concentrées et des appuis, la répartition réelle diffère de la théorie des poutres.'],
      ['tip', 'Pour une section en caisson ou un tube, préférez la formule de Bredt (τ = T / (2 A_m t)).'],
    ],
  },
  simple_examples: {
    examples: [
      {
        title: "Exemple 1 : âme d'un IPE 300",
        given: 'V = 120 kN, h_w = 278,6 mm, t_w = 7,1 mm',
        find: "La contrainte de cisaillement dans l'âme",
        solution_latex: "\\tau \\approx \\frac{120\\,000}{278{,}6 \\times 7{,}1} = 60{,}7\\ \\text{MPa}",
        result: '≈ 61 MPa, à comparer à f_y/√3 = 136 MPa pour un S235.',
      },
      {
        title: "Exemple 2 : torsion d'un arbre",
        given: 'T = 2 kN·m, d = 60 mm',
        find: 'τ_max',
        solution_latex: "\\tau_{max} = \\frac{16 \\times 2 \\times 10^6}{\\pi \\times 60^3} = 47{,}2\\ \\text{MPa}",
        result: '≈ 47 MPa en surface de l’arbre.',
      },
      {
        title: 'Exemple 3 : solive en bois',
        given: 'Solive 75 × 225 mm, V = 9 kN',
        find: 'τ_max',
        solution_latex: "\\tau_{max} = 1{,}5 \\times \\frac{9\\,000}{75 \\times 225} = 0{,}80\\ \\text{MPa}",
        result: '0,80 MPa, à comparer à la résistance de calcul du bois en cisaillement (≈ 1,9 à 2,5 MPa pour C24).',
      },
    ],
  },
  real_examples: {
    title: 'Exemple réel — Rupture par effort tranchant d’un entrepôt (Wilkins Air Force Depot, 1955)',
    examples: [
      {
        context: 'Poutres en béton armé de grande hauteur sans étriers suffisants, dans un entrepôt de l’US Air Force',
        scenario: "Des poutres de 0,9 m de hauteur se sont rompues par effort tranchant sous des charges inférieures à celles prévues par le règlement de l'époque. Le retrait et la dilatation thermique avaient ajouté des efforts de traction.",
        decomposition_latex: "\\text{Grande hauteur} + \\text{peu d'étriers} + \\text{traction axiale} \\Rightarrow \\text{rupture fragile par effort tranchant}",
        lesson: "Cet accident a fait évoluer les règles de calcul à l'effort tranchant : effet d'échelle (les grandes poutres sont relativement moins résistantes) et armatures transversales minimales.",
      },
    ],
  },
  diagrams: {
    title: 'Schéma de principe — Répartition des contraintes dans une section',
    diagram_description: [
      'Moment fléchissant → contraintes normales σ, linéaires, maximales aux fibres extrêmes',
      'Effort tranchant → contraintes tangentielles τ, maximales à l’axe neutre',
      'Section rectangulaire : τ parabolique, τ_max = 1,5 V/A',
      'Profilé en I : l’âme reprend l’effort tranchant, les semelles le moment',
      'Poutre reconstituée : flux q = V·S/I à l’interface',
      'Torsion d’un arbre : τ linéaire du centre (0) à la surface (maximum)',
    ],
  },
  mistakes: {
    items: [
      ['Utiliser V/A comme contrainte maximale', 'Sous-estimation de 50 % pour un rectangle', 'Utiliser τ_max = 1,5 V/A ou Jourawski.'],
      ['Prendre le moment statique de toute la section', 'S nul par définition (axe neutre)', 'Prendre seulement la partie située au-delà de la coupe.'],
      ['Calculer la torsion d’un IPE avec τ = Tr/I₀', 'Formule réservée aux sections circulaires', 'Utiliser les formules des sections ouvertes minces ou éviter la torsion.'],
    ],
  },
  tips: {
    tips: [
      'Tracez toujours le diagramme de l’effort tranchant : le maximum est en général à l’appui.',
      'Pour les charges proches des appuis, une partie de la charge descend directement en bielle : l’EC2 permet de réduire V.',
      'Une poutre courte (L/h < 10) est souvent gouvernée par l’effort tranchant.',
      'En torsion, un tube est bien plus efficace qu’un plein de même masse.',
    ],
  },
  norms: {
    norms: [
      ['NF EN 1993-1-1 §6.2.6', 'Résistance des profilés métalliques à l’effort tranchant : V_pl,Rd = A_v (f_y/√3)/γ_M0.'],
      ['NF EN 1992-1-1 §6.2', 'Effort tranchant dans les éléments en béton armé.'],
      ['NF EN 1995-1-1 §6.1.7', 'Vérification au cisaillement des poutres en bois.'],
      ['NF EN 1993-1-1 §6.2.7', 'Résistance des profilés à la torsion.'],
    ],
  },
  exercises: {
    exercises: [
      {
        level: 1,
        text: 'Une poutre 150 × 300 mm reprend V = 40 kN. Calculer τ_max.',
        hint: 'τ_max = 1,5 V / (b h).',
        answer_latex: "\\tau_{max} = 1{,}5 \\times \\frac{40\\,000}{150 \\times 300} = 1{,}33\\ \\text{MPa}",
        answer_text: 'τ_max ≈ 1,33 MPa.',
      },
      {
        level: 2,
        text: "Calculer V_pl,Rd d'un IPE 300 en S235 (A_v = 2 568 mm², γ_M0 = 1,0).",
        hint: 'V_pl,Rd = A_v·f_y / (√3·γ_M0).',
        answer_latex: "V_{pl,Rd} = \\frac{2\\,568 \\times 235}{\\sqrt{3}} = 348\\,400\\ \\text{N} = 348\\ \\text{kN}",
        answer_text: 'V_pl,Rd ≈ 348 kN.',
      },
      {
        level: 3,
        text: "Une semelle 200 × 20 mm est clouée sur une âme ; la section totale a I = 1,2 × 10⁸ mm⁴ et le centre de la semelle est à 140 mm de l'axe neutre. Pour V = 15 kN et des clous de 1,0 kN, calculer l'espacement maximal.",
        hint: 'S = A_semelle × distance ; q = V·S/I ; s = F/q.',
        answer_latex: "S = 4\\,000 \\times 140 = 5{,}6 \\times 10^5\\ \\text{mm}^3 \\quad q = \\frac{15\\,000 \\times 5{,}6 \\times 10^5}{1{,}2 \\times 10^8} = 70\\ \\text{N/mm} \\quad s = \\frac{1\\,000}{70} = 14{,}3\\ \\text{mm}",
        answer_text: 'Espacement ≈ 14 mm : trop serré pour des clous, il faut des connecteurs plus résistants ou du collage.',
      },
    ],
  },
  quiz: {
    title: 'Quiz — Cisaillement et torsion',
    questions: [
      { q: 'Où le cisaillement dû à l’effort tranchant est-il maximal dans une section rectangulaire ?', options: ['Aux fibres extrêmes', "À l'axe neutre", 'Il est uniforme'], correct: 1, explain: 'La répartition est parabolique, nulle aux fibres extrêmes et maximale à l’axe neutre.' },
      { q: 'Que vaut τ_max/τ_moyen pour un rectangle ?', options: ['1,0', '1,5', '2,0'], correct: 1, explain: 'τ_max = 1,5 V/A.' },
      { q: "Dans un IPE, quelle partie reprend l'effort tranchant ?", options: ['Les semelles', "L'âme", 'Les congés'], correct: 1, explain: "L'âme reprend la quasi-totalité de l'effort tranchant." },
    ],
  },
  exam_questions: {
    questions: [
      'Établissez la formule de Jourawski et appliquez-la à une section rectangulaire.',
      'Expliquez pourquoi l’âme d’un profilé en I reprend l’effort tranchant et les semelles le moment.',
      'Dimensionnez l’espacement des connecteurs d’une poutre reconstituée à partir du flux de cisaillement.',
      'Calculez la contrainte et l’angle de torsion d’un arbre circulaire.',
    ],
  },
  interview_questions: {
    questions: [
      ['Pourquoi les poutres en béton armé ont-elles des étriers ?', "Pour reprendre l'effort tranchant : le béton fissure en traction diagonale près des appuis ; les étriers cousent ces fissures et forment avec les bielles de béton un treillis (modèle de Ritter-Mörsch)."],
      ['Comment résister à la torsion avec une poutre métallique ?', "En choisissant une section fermée (tube, caisson), bien plus rigide en torsion qu'un profilé ouvert, ou en évitant la torsion par des appuis et un contreventement adaptés."],
    ],
  },
  practical_case: {
    title: 'Cas pratique — Vérification d’une poutre métallique courte',
    scenario: 'Poutre IPE 270 en S235 (A_v = 2 214 mm²), portée 2,0 m, charge concentrée de calcul de 300 kN placée à 0,4 m d’un appui.',
    description: "Calculer l'effort tranchant maximal et vérifier la résistance de l'âme.",
    resolutions: [
      "V_{max} = 300 \\times \\frac{1{,}6}{2{,}0} = 240\\ \\text{kN}",
      "V_{pl,Rd} = \\frac{2\\,214 \\times 235}{\\sqrt{3}} = 300\\,400\\ \\text{N} = 300\\ \\text{kN}",
      "\\frac{V_{Ed}}{V_{pl,Rd}} = \\frac{240}{300} = 0{,}80 \\le 1 \\quad \\checkmark \\quad (> 0{,}5 : \\text{interaction M-V à vérifier})",
    ],
    conclusion: "L'âme résiste à l'effort tranchant, mais V > 0,5 V_pl,Rd : il faut réduire la résistance en flexion au droit de la charge (interaction moment-tranchant de l'EC3).",
  },
  summary: {
    content: `### Le cisaillement en 5 points
1. Jourawski : $\\tau = V S / (I b)$.
2. Rectangle : $\\tau_{max} = 1{,}5\\, V / (bh)$ à l'axe neutre.
3. Profilé en I : l'âme reprend $V$, $\\tau \\approx V / (h_w t_w)$.
4. Flux $q = V S / I$ pour espacer les connecteurs.
5. Torsion circulaire : $\\tau_{max} = 16T / (\\pi d^3)$.`,
  },
  key_points: {
    points: [
      'τ = V·S / (I·b)',
      'Rectangle : τ_max = 1,5·V/A',
      'Âme d’un I : τ ≈ V / (h_w·t_w)',
      'Acier : V_pl,Rd = A_v·f_y / √3',
      'Torsion : τ_max = 16T / (πd³)',
    ],
  },
  self_assessment: {
    objectives: [
      'Je sais calculer un moment statique',
      'Je sais appliquer la formule de Jourawski',
      'Je sais vérifier l’âme d’un profilé à l’effort tranchant',
      'Je sais calculer une contrainte de torsion dans un arbre',
      "J'ai réussi le quiz avec au moins 2 bonnes réponses sur 3",
    ],
  },
});
