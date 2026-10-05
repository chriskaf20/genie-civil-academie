// ── Lesson: RDM — flambement des poteaux — Module 7 ──────────────────────────
import { buildLesson } from './build_lesson.js';

export const lesson_rdm_flambement = buildLesson({
  moduleId: 7,
  slug: 'rdm_flambement',
  lessonIndex: 4,
  title: "Flambement des Poteaux : Charge Critique d'Euler, Élancement & Courbes Européennes",
  subtitle: 'Module 07 — Résistance des Matériaux (RDM)',
  level: 'Intermédiaire',
  duration: '10h',
  tags: ['RDM', 'Flambement', 'Euler', 'Élancement', 'Longueur de flambement', 'EC3', 'Coefficient χ'],
}, {
  definition: {
    title: 'Définition — L’instabilité des pièces comprimées',
    fr: 'Flambement (instabilité élastique d’une pièce comprimée)',
    en: 'Buckling',
    metier: "Utilisée pour le dimensionnement des poteaux, des membrures comprimées de treillis, des contreventements et des étais.",
    content: `Une pièce **élancée** comprimée ne cède pas par écrasement du matériau : elle se dérobe **latéralement** en se courbant brusquement. Ce phénomène d'**instabilité** s'appelle le **flambement**.

### Pourquoi c'est dangereux
- La rupture est **soudaine**, sans signe annonciateur.
- Elle survient pour une charge bien inférieure à la résistance de la section ($A \\cdot f_y$).
- Elle dépend surtout de la **longueur** et de la **rigidité** de la pièce, pas de sa résistance.

### Euler (1744)
Pour une barre parfaite articulée à ses deux extrémités, la charge à laquelle l'équilibre devient instable est :
$$N_{cr} = \\frac{\\pi^2 E I}{L^2}$$

> 💡 Une règle d'écolier de 30 cm se comprime facilement entre les doigts sans casser : elle flambe bien avant de s'écraser.`,
  },
  importance: {
    content: `- **Poteaux métalliques et bois** : le flambement gouverne presque toujours leur dimensionnement.
- **Étaiements** : de nombreux accidents de chantier viennent d'étais trop élancés ou mal contreventés.
- **Treillis** : les barres comprimées doivent être plus massives que les barres tendues de même effort.
- **Choix de la section** : à surface égale, un tube ou un H large résiste mieux qu'un plat ou un I étroit.

> ⚠️ **À retenir** : doubler la longueur de flambement divise la charge critique par 4.`,
  },
  applications: {
    examples: [
      ['Poteau de bâtiment métallique', 'Vérification au flambement selon les deux axes avec les courbes européennes.'],
      ['Étais de coffrage', 'Charge admissible donnée par le fabricant en fonction de la longueur déployée.'],
      ['Contreventement en croix', 'Barres tendues seules actives, les barres comprimées flambant sous faible effort.'],
      ['Membrure supérieure de ferme', 'Longueur de flambement réduite par les pannes qui la maintiennent.'],
      ['Poteau en bois', 'Coefficient k_c de l’EC5 selon l’élancement relatif.'],
    ],
  },
  theory: {
    title: 'Théorie — De la barre parfaite au poteau réel',
    content: `### 1. Longueur de flambement
Les conditions d'appui modifient la forme de la déformée. On se ramène au cas bi-articulé avec une **longueur de flambement** $L_{cr} = K \\cdot L$ :
- bi-articulé : $K = 1{,}0$ ;
- encastré-libre (mât) : $K = 2{,}0$ ;
- encastré-articulé : $K \\approx 0{,}7$ ;
- bi-encastré : $K = 0{,}5$.

### 2. Élancement
$$\\lambda = \\frac{L_{cr}}{i} \\qquad i = \\sqrt{\\frac{I}{A}}$$
$i$ est le **rayon de giration**. On vérifie le flambement autour de l'axe le plus faible (plus petit $i$) ou autour des deux axes si les longueurs diffèrent.

### 3. Contrainte critique
$$\\sigma_{cr} = \\frac{N_{cr}}{A} = \\frac{\\pi^2 E}{\\lambda^2}$$

### 4. Poteaux réels : courbes européennes (EC3)
Les défauts (rectitude, contraintes résiduelles) réduisent la résistance. L'Eurocode 3 utilise l'**élancement réduit** et un coefficient de réduction $\\chi$ :
$$\\bar{\\lambda} = \\sqrt{\\frac{A f_y}{N_{cr}}} = \\frac{\\lambda}{93{,}9\\,\\varepsilon} \\qquad \\varepsilon = \\sqrt{\\frac{235}{f_y}}$$
$$\\Phi = 0{,}5\\left[1 + \\alpha(\\bar{\\lambda} - 0{,}2) + \\bar{\\lambda}^2\\right] \\qquad \\chi = \\frac{1}{\\Phi + \\sqrt{\\Phi^2 - \\bar{\\lambda}^2}} \\le 1$$
Le facteur d'imperfection $\\alpha$ dépend de la courbe (a : 0,21 ; b : 0,34 ; c : 0,49 ; d : 0,76). Résistance : $N_{b,Rd} = \\chi A f_y / \\gamma_{M1}$.`,
  },
  formulas: {
    title: 'Formules essentielles — Flambement',
    formulas: [
      {
        name: "Charge critique d'Euler",
        latex: "N_{cr} = \\frac{\\pi^2 E I}{L_{cr}^2}",
        description: 'Charge de flambement d’une barre parfaite élastique.',
        vars: [
          ['N_{cr}', 'Charge critique', 'N', 'Charge de bifurcation de l’équilibre.'],
          ['E', "Module d'Young", 'MPa', 'Acier 210 000 MPa.'],
          ['I', "Inertie selon l'axe de flambement", 'mm⁴', 'Axe faible en général.'],
          ['L_{cr}', 'Longueur de flambement', 'mm', 'K × L selon les appuis.'],
        ],
        rule: "N_cr ne dépend pas de la limite d'élasticité : un acier plus résistant ne flambe pas plus tard s'il est très élancé.",
      },
      {
        name: 'Élancement et rayon de giration',
        latex: "\\lambda = \\frac{L_{cr}}{i} \\qquad i = \\sqrt{\\frac{I}{A}}",
        description: 'Plus l’élancement est grand, plus la pièce est sensible au flambement.',
        vars: [
          ['\\lambda', 'Élancement', '-', 'Sans dimension.'],
          ['i', 'Rayon de giration', 'mm', 'Donné dans les tables de profilés (i_y, i_z).'],
          ['A', 'Aire de la section', 'mm²', 'Section brute.'],
        ],
      },
      {
        name: 'Élancement réduit (EC3)',
        latex: "\\bar{\\lambda} = \\sqrt{\\frac{A f_y}{N_{cr}}} = \\frac{\\lambda}{93{,}9\\, \\varepsilon}",
        description: 'Compare la résistance plastique et la charge critique.',
        vars: [
          ['\\bar{\\lambda}', 'Élancement réduit', '-', 'Pas de réduction si ≤ 0,2.'],
          ['f_y', "Limite d'élasticité", 'MPa', '235, 275 ou 355 MPa.'],
          ['\\varepsilon', 'Coefficient matériau', '-', '√(235/f_y).'],
        ],
      },
      {
        name: 'Coefficient de réduction χ (courbes européennes)',
        latex: "\\Phi = 0{,}5\\left[1 + \\alpha(\\bar{\\lambda} - 0{,}2) + \\bar{\\lambda}^2\\right] \\qquad \\chi = \\frac{1}{\\Phi + \\sqrt{\\Phi^2 - \\bar{\\lambda}^2}}",
        description: 'Prend en compte les imperfections géométriques et les contraintes résiduelles.',
        vars: [
          ['\\Phi', 'Paramètre intermédiaire', '-', 'Calculé à partir de α et λ̄.'],
          ['\\alpha', "Facteur d'imperfection", '-', 'Courbe a : 0,21 ; b : 0,34 ; c : 0,49 ; d : 0,76.'],
          ['\\chi', 'Coefficient de réduction', '-', 'Entre 0 et 1.'],
        ],
      },
      {
        name: 'Résistance au flambement',
        latex: "N_{b,Rd} = \\frac{\\chi \\, A \\, f_y}{\\gamma_{M1}}",
        description: 'À comparer à l’effort de compression de calcul N_Ed.',
        vars: [
          ['N_{b,Rd}', 'Résistance au flambement', 'kN', 'Résistance de calcul de la barre.'],
          ['\\gamma_{M1}', 'Coefficient partiel', '-', '1,0 (annexe nationale française).'],
        ],
      },
    ],
  },
  stepbystep: {
    title: 'Calcul complet — Poteau HEA 200 en S235',
    problem: "Poteau HEA 200 (A = 5 383 mm², I_z = 1 336 cm⁴, i_z = 49,8 mm) de 4,00 m, articulé en tête et en pied, en S235. Flambement selon l'axe faible z (courbe c, α = 0,49). Calculer N_b,Rd.",
    steps_demo: [
      { n: 1, text: "Longueur de flambement : L_cr = 1,0 × 4 000 = 4 000 mm." },
      { n: 2, text: "Élancement : λ = 4 000 / 49,8 = 80,3." },
      { n: 3, text: "Élancement réduit : λ̄ = 80,3 / 93,9 = 0,855 (ε = 1 pour S235)." },
      { n: 4, text: "Φ = 0,5 × [1 + 0,49 × (0,855 − 0,2) + 0,855²] = 0,5 × [1 + 0,321 + 0,731] = 1,026." },
      { n: 5, text: "χ = 1 / (1,026 + √(1,026² − 0,731)) = 1 / (1,026 + 0,567) = 0,628." },
      { n: 6, text: "N_b,Rd = 0,628 × 5 383 × 235 / 1,0 = 794 kN, soit 63 % de la résistance plastique (1 265 kN)." },
    ],
    result_latex: "\\bar{\\lambda} = 0{,}855 \\quad \\chi = 0{,}628 \\quad N_{b,Rd} = 0{,}628 \\times 5\\,383 \\times 235 = 794\\ \\text{kN}",
  },
  units: {
    table: [
      ['Charge critique', 'kN', 'kip', '1 kN = 0,2248 kip'],
      ['Rayon de giration', 'mm, cm', 'in', 'Tables : i_y, i_z en cm'],
      ['Inertie', 'cm⁴, mm⁴', 'in⁴', '1 cm⁴ = 10⁴ mm⁴'],
      ['Élancement', '-', '-', 'Sans dimension'],
      ['Contrainte critique', 'MPa', 'ksi', 'σ_cr = π²E / λ²'],
    ],
    note: 'Vérifiez toujours les deux axes : la longueur de flambement peut être réduite selon un axe par des entretoises ou des lisses.',
  },
  hypotheses: {
    items: [
      ['info', 'Euler suppose une barre parfaitement droite, centrée, élastique : c’est une borne supérieure.'],
      ['info', 'Les courbes européennes intègrent des imperfections équivalentes calibrées par essais.'],
      ['warning', 'Les longueurs de flambement des poteaux de portiques à nœuds déplaçables sont supérieures à la hauteur d’étage (K > 1).'],
      ['warning', 'Une compression accompagnée de flexion impose une vérification d’interaction (EC3 §6.3.3).'],
      ['tip', 'Pour un poteau élancé, une section à large inertie dans les deux directions (tube, HEB) est plus efficace.'],
    ],
  },
  simple_examples: {
    examples: [
      {
        title: 'Exemple 1 : charge critique de l’HEA 200',
        given: 'I_z = 1,336 × 10⁷ mm⁴, L_cr = 4 000 mm, E = 210 000 MPa',
        find: 'N_cr selon z',
        solution_latex: "N_{cr} = \\frac{\\pi^2 \\times 210\\,000 \\times 1{,}336 \\times 10^7}{4\\,000^2} = 1{,}73 \\times 10^6\\ \\text{N} = 1\\,731\\ \\text{kN}",
        result: 'N_cr = 1 731 kN ; on retrouve λ̄ = √(1 265 / 1 731) = 0,855.',
      },
      {
        title: 'Exemple 2 : effet des appuis',
        given: 'Même poteau encastré en pied, libre en tête (K = 2)',
        find: 'La nouvelle charge critique',
        solution_latex: "N_{cr} = \\frac{1\\,731}{2^2} = 433\\ \\text{kN}",
        result: 'La charge critique est divisée par 4.',
      },
      {
        title: 'Exemple 3 : rayon de giration d’un tube',
        given: 'Tube Ø 168,3 × 5 mm : A = 2 565 mm², I = 8,56 × 10⁶ mm⁴',
        find: 'i',
        solution_latex: "i = \\sqrt{\\frac{8{,}56 \\times 10^6}{2\\,565}} = 57{,}8\\ \\text{mm}",
        result: 'i ≈ 58 mm dans toutes les directions : idéal pour un poteau.',
      },
    ],
  },
  real_examples: {
    title: 'Exemple réel — Effondrement du pont de Québec (1907)',
    examples: [
      {
        context: 'Pont cantilever en acier sur le Saint-Laurent, en construction',
        scenario: "Les membrures inférieures comprimées, constituées de plats assemblés par des treillis de liaison trop faibles, ont flambé. Le poids propre avait été sous-estimé et les déformations observées n'ont pas arrêté le chantier : 75 ouvriers sont morts.",
        decomposition_latex: "\\text{Poids propre sous-estimé} + \\text{membrures composées mal liaisonnées} \\Rightarrow \\text{flambement des membrures comprimées}",
        lesson: "Le flambement des pièces composées dépend de leur liaisonnement ; les signes de déformation doivent conduire à l'arrêt immédiat des travaux. Cet accident est à l'origine de la tradition de l'anneau de fer des ingénieurs canadiens.",
      },
    ],
  },
  diagrams: {
    title: 'Schéma de principe — Vérification d’un poteau comprimé',
    diagram_description: [
      'Appuis : déterminer K pour chaque axe et L_cr = K·L',
      'Section : A, I_y, I_z, i_y, i_z dans les tables',
      'Élancements λ_y et λ_z, puis élancements réduits λ̄',
      'Courbe de flambement selon la forme de section et l’axe (α)',
      'Coefficient χ puis N_b,Rd = χ·A·f_y / γ_M1',
      'Vérification : N_Ed ≤ N_b,Rd sur l’axe le plus défavorable',
    ],
  },
  mistakes: {
    items: [
      ['Vérifier seulement l’axe fort', 'Le poteau flambe selon l’axe faible', 'Vérifier les deux axes avec leurs longueurs de flambement respectives.'],
      ['Prendre L_cr = L pour un poteau de portique non contreventé', 'Résistance surestimée', 'Utiliser K > 1 ou une analyse au second ordre.'],
      ['Comparer N_Ed à A·f_y', 'Oubli complet du flambement', 'Toujours appliquer χ pour les pièces comprimées.'],
    ],
  },
  tips: {
    tips: [
      'Repère : un poteau métallique avec λ > 150 à 200 est généralement trop élancé.',
      'Des entretoises à mi-hauteur divisent par 2 la longueur de flambement selon l’axe faible.',
      'Les tables de fabricants donnent directement N_b,Rd en fonction de la longueur pour chaque profilé.',
      'En béton armé, les poteaux élancés se vérifient au second ordre (EC2 §5.8).',
    ],
  },
  norms: {
    norms: [
      ['NF EN 1993-1-1 §6.3.1', 'Résistance au flambement des éléments uniformes comprimés (courbes a0 à d).'],
      ['NF EN 1993-1-1 §6.3.3', 'Interaction flexion et compression.'],
      ['NF EN 1995-1-1 §6.3.2', 'Stabilité des poteaux en bois (coefficient k_c).'],
      ['NF EN 1992-1-1 §5.8', 'Effets du second ordre dans les éléments en béton comprimés.'],
    ],
  },
  exercises: {
    exercises: [
      {
        level: 1,
        text: 'Un tube (I = 8,56 × 10⁶ mm⁴) de 5 m est bi-articulé. Calculer N_cr (E = 210 000 MPa).',
        hint: 'N_cr = π²EI/L².',
        answer_latex: "N_{cr} = \\frac{9{,}87 \\times 210\\,000 \\times 8{,}56 \\times 10^6}{5\\,000^2} = 709\\,700\\ \\text{N} = 710\\ \\text{kN}",
        answer_text: 'N_cr ≈ 710 kN.',
      },
      {
        level: 2,
        text: 'Pour le tube de l’exercice 1 (A = 2 565 mm², S235), calculer λ̄ puis χ avec la courbe a (α = 0,21).',
        hint: 'λ̄ = √(A f_y / N_cr).',
        answer_latex: "\\bar{\\lambda} = \\sqrt{\\frac{2\\,565 \\times 235}{709\\,700}} = 0{,}922 \\quad \\Phi = 0{,}5[1 + 0{,}21 \\times 0{,}722 + 0{,}850] = 1{,}001 \\quad \\chi = 0{,}718",
        answer_text: 'λ̄ ≈ 0,92 ; χ ≈ 0,72.',
      },
      {
        level: 3,
        text: 'En déduire N_b,Rd du tube, et la comparer à un effort N_Ed = 400 kN.',
        hint: 'N_b,Rd = χ·A·f_y.',
        answer_latex: "N_{b,Rd} = 0{,}718 \\times 2\\,565 \\times 235 = 432\\,800\\ \\text{N} = 433\\ \\text{kN} \\ge 400\\ \\text{kN}",
        answer_text: 'N_b,Rd ≈ 433 kN : vérifié (taux 92 %).',
      },
    ],
  },
  quiz: {
    title: 'Quiz — Flambement',
    questions: [
      { q: 'Si la longueur de flambement double, la charge critique est…', options: ['Divisée par 2', 'Divisée par 4', 'Inchangée'], correct: 1, explain: 'N_cr est inversement proportionnelle à L_cr².' },
      { q: 'Quelle est la longueur de flambement d’un mât encastré en pied et libre en tête ?', options: ['0,5 L', 'L', '2 L'], correct: 2, explain: 'K = 2 pour une console.' },
      { q: 'Selon quel axe un HEA flambe-t-il en général ?', options: ['Axe fort y', 'Axe faible z', 'Les deux en même temps'], correct: 1, explain: 'L’axe faible a le plus petit rayon de giration, donc le plus grand élancement.' },
    ],
  },
  exam_questions: {
    questions: [
      "Établissez la charge critique d'Euler pour une barre bi-articulée.",
      'Expliquez les notions de longueur de flambement, de rayon de giration et d’élancement.',
      'Dimensionnez un poteau métallique au flambement selon l’EC3 en justifiant le choix de la courbe.',
    ],
  },
  interview_questions: {
    questions: [
      ['Pourquoi utiliser un acier S355 au lieu de S235 n’améliore-t-il pas toujours un poteau ?', "Parce que pour un poteau très élancé, la résistance est gouvernée par N_cr, qui ne dépend que de E et de l'inertie ; le gain de f_y n'est utile que pour les élancements faibles à moyens."],
      ['Comment réduire le risque de flambement d’un poteau ?', 'Augmenter l’inertie selon l’axe faible, réduire la longueur de flambement par des maintiens latéraux ou des encastrements, choisir une section fermée (tube), contreventer la structure.'],
    ],
  },
  practical_case: {
    title: 'Cas pratique — Étai de coffrage',
    scenario: 'Étai tubulaire en acier (I = 1,5 × 10⁵ mm⁴, A = 450 mm²) déployé à 3,20 m, articulé aux extrémités. On veut connaître sa charge critique et une charge admissible avec un coefficient de sécurité de 3.',
    description: 'Calculer N_cr et la charge admissible.',
    resolutions: [
      "N_{cr} = \\frac{\\pi^2 \\times 210\\,000 \\times 1{,}5 \\times 10^5}{3\\,200^2} = 30\\,360\\ \\text{N} \\approx 30\\ \\text{kN}",
      "N_{adm} = \\frac{30{,}4}{3} \\approx 10\\ \\text{kN}",
      "\\text{Déployé à 2,20 m : } N_{cr} = 30{,}4 \\times \\left(\\frac{3{,}2}{2{,}2}\\right)^2 = 64\\ \\text{kN}",
    ],
    conclusion: "L'étai déployé au maximum ne porte qu'environ 10 kN : c'est pourquoi les fabricants donnent des charges admissibles décroissantes avec la longueur et pourquoi on contrevente les étaiements.",
  },
  summary: {
    content: `### Le flambement en 5 points
1. Instabilité des pièces comprimées élancées, rupture brutale.
2. Euler : $N_{cr} = \\pi^2 EI / L_{cr}^2$ avec $L_{cr} = K L$.
3. Élancement $\\lambda = L_{cr}/i$ ; axe faible souvent déterminant.
4. EC3 : $\\bar\\lambda$, $\\Phi$, $\\chi$ et $N_{b,Rd} = \\chi A f_y / \\gamma_{M1}$.
5. Améliorer : plus d'inertie, maintiens latéraux, sections fermées.`,
  },
  key_points: {
    points: [
      'N_cr = π²EI / L_cr²',
      'K = 1 (bi-articulé), 2 (console), 0,7, 0,5 (bi-encastré)',
      'λ = L_cr / i ; i = √(I/A)',
      'λ̄ = λ / (93,9 ε)',
      'N_b,Rd = χ·A·f_y / γ_M1',
    ],
  },
  self_assessment: {
    objectives: [
      "Je sais calculer la charge critique d'Euler",
      'Je sais déterminer une longueur de flambement',
      'Je sais calculer un élancement réduit et le coefficient χ',
      'Je sais vérifier un poteau métallique au flambement',
      "J'ai réussi le quiz avec au moins 2 bonnes réponses sur 3",
    ],
  },
});
