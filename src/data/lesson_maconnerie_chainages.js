// ── Lesson: Chaînages, linteaux et ouvertures — Module 39 ────────────────────
import { buildLesson } from './build_lesson.js';

export const lesson_maconnerie_chainages = buildLesson({
  moduleId: 39,
  slug: 'maconnerie_chainages',
  lessonIndex: 2,
  title: "Chaînages, Linteaux et Ouvertures : Effet de Voûte, Charge Triangulaire et Ferraillage des Linteaux",
  subtitle: 'Module 39 — Maçonnerie & Structures en maçonnerie',
  level: 'Intermédiaire',
  duration: '5h',
  diagramType: 'rebar_beam',
  tags: ['Chaînage', 'Linteau', 'Ouverture', 'Effet de voûte', 'DTU 20.1', 'Appui', 'Maçonnerie'],
}, {
  definition: {
    title: 'Définition — Tenir ensemble les murs et franchir les ouvertures',
    fr: 'Chaînages et linteaux en maçonnerie',
    en: 'Ring beams (bond beams) and lintels in masonry',
    metier: "Concerne les maçons, les chefs de chantier, les dessinateurs et les ingénieurs structure en construction individuelle et collective.",
    content: `Une maçonnerie résiste bien en compression mais mal en traction. Deux éléments en béton armé la complètent :

- **Les chaînages** : ceintures horizontales (à chaque plancher et en tête des murs) et poteaux verticaux (aux angles, aux jonctions de murs, de part et d'autre des grandes ouvertures). Ils **solidarisent** les murs entre eux et avec les planchers, reprennent les efforts de traction et limitent la fissuration.
- **Les linteaux** : poutres placées au-dessus des baies (portes, fenêtres) pour reporter les charges sur les **trumeaux** (parties de mur entre deux ouvertures).

### L'effet de voûte
Au-dessus d'une ouverture, la maçonnerie forme naturellement une **voûte de décharge** : le linteau ne porte que le poids d'un triangle de maçonnerie, à condition que la hauteur de mur au-dessus soit suffisante.

> 💡 Un chaînage n'est efficace que s'il est **continu** : armatures recouvertes aux angles et ancrées dans les chaînages verticaux.`,
  },
  importance: {
    content: `- **Stabilité d'ensemble** : sans chaînage, les murs peuvent s'écarter sous l'effet des poussées, des tassements ou du vent.
- **Séisme** : les chaînages sont la première protection des maisons en maçonnerie.
- **Fissuration** : un linteau sous-dimensionné ou mal appuyé fissure le mur au-dessus des baies.
- **Réglementation** : le DTU 20.1 et l'Eurocode 8 imposent les chaînages.

> ⚠️ **À retenir** : les appuis du linteau (au moins 20 cm de chaque côté en général) doivent reposer sur une maçonnerie capable de reprendre la charge concentrée.`,
  },
  applications: {
    examples: [
      ['Maison individuelle', 'Chaînage horizontal à chaque plancher et en rampant de pignon.'],
      ['Baie vitrée de 3 m', 'Linteau BA calculé avec poteaux raidisseurs de part et d’autre.'],
      ['Mur de clôture', 'Chaînage en tête et raidisseurs tous les 3 à 5 m.'],
      ['Ouverture créée dans un mur existant', 'Linteau posé en reprise avec étaiement.'],
      ['Immeuble en briques', 'Linteaux préfabriqués et chaînages coulés en place.'],
    ],
  },
  theory: {
    title: 'Théorie — Charge sur un linteau',
    content: `### 1. Portée de calcul
$$L = L_0 + a$$
$L_0$ : largeur de la baie ; $a$ : longueur d'appui (on ajoute en pratique une demi-longueur d'appui de chaque côté, soit environ $a$).

### 2. Charge de maçonnerie (effet de voûte)
Si la hauteur de mur au-dessus du linteau dépasse la hauteur du triangle, on admet que le linteau porte un **triangle** de maçonnerie à 60° :
$$h_t = \\frac{\\sqrt{3}}{2} L \\approx 0{,}87\\,L \\qquad W = \\frac{1}{2} \\, L \\, h_t \\, g_m$$
$g_m$ : poids du mur par m² de surface (kN/m²).

### 3. Charges de plancher
Si un plancher s'appuie sur le mur **à l'intérieur du triangle**, sa charge est reprise intégralement par le linteau comme une charge répartie sur la portée.

### 4. Moments
- Charge triangulaire totale $W$ : $M = \\frac{W L}{6}$
- Charge répartie $q$ : $M = \\frac{q L^2}{8}$

### 5. Ferraillage
$$A_s = \\frac{M_{Ed}}{z \\, f_{yd}} \\qquad z \\approx 0{,}9\\,d$$
Plus la vérification de l'effort tranchant et de la compression sur les appuis.`,
  },
  formulas: {
    title: 'Formules essentielles — Linteaux',
    formulas: [
      {
        name: 'Charge triangulaire de maçonnerie',
        latex: "W = \\frac{1}{2} L \\cdot 0{,}87 L \\cdot g_m",
        description: 'Poids du triangle de décharge à 60°.',
        vars: [
          ['W', 'Charge totale', 'kN', ''],
          ['L', 'Portée de calcul', 'm', ''],
          ['g_m', 'Poids surfacique du mur', 'kN/m²', 'Bloc creux 20 cm enduit ≈ 2,6 kN/m².'],
        ],
      },
      {
        name: 'Moment d’une charge triangulaire',
        latex: "M = \\frac{W L}{6}",
        description: 'Poutre sur deux appuis, triangle symétrique (sommet au centre).',
        vars: [
          ['M', 'Moment maximal', 'kN·m', ''],
          ['W', 'Charge totale du triangle', 'kN', ''],
        ],
      },
      {
        name: 'Section d’armatures',
        latex: "A_s = \\frac{M_{Ed}}{0{,}9 \\, d \\, f_{yd}}",
        description: 'Dimensionnement simplifié en flexion.',
        vars: [
          ['M_{Ed}', 'Moment de calcul ELU', 'N·mm', ''],
          ['d', 'Hauteur utile', 'mm', ''],
          ['f_{yd}', 'Limite de calcul de l’acier', 'MPa', '435 pour B500.'],
        ],
      },
      {
        name: 'Contrainte sous l’appui',
        latex: "\\sigma = \\frac{R}{t \\, a} \\leq \\beta \\, f_d",
        description: 'Vérification de la maçonnerie sous la réaction du linteau.',
        vars: [
          ['R', 'Réaction d’appui', 'N', ''],
          ['t', 'Épaisseur du mur', 'mm', ''],
          ['a', "Longueur d'appui", 'mm', '≥ 200 mm courant.'],
          ['\\beta', 'Coefficient de charge concentrée', '-', '1 à 1,5 selon l’EC6.'],
        ],
      },
    ],
  },
  stepbystep: {
    title: 'Calcul complet — Linteau d’une baie de 2,40 m',
    problem: "Baie de 2,40 m dans un mur en blocs béton de 20 cm (g_m = 2,6 kN/m²). Linteau BA de 20 × 25 cm (d = 21 cm), appuis de 20 cm (L = 2,60 m). Un plancher s'appuie à 1,50 m au-dessus du linteau : G = 12 kN/m, Q = 5 kN/m. Calculer le ferraillage.",
    steps_demo: [
      { n: 1, text: "Hauteur du triangle : 0,87 × 2,60 = 2,25 m > 1,50 m : le plancher est dans le triangle, sa charge est reprise." },
      { n: 2, text: "Maçonnerie : W = 0,5 × 2,60 × 2,25 × 2,6 = 7,6 kN ; ELU : 1,35 × 7,6 = 10,3 kN ; M₁ = 10,3 × 2,60 / 6 = 4,5 kN·m." },
      { n: 3, text: "Plancher : q = 1,35 × 12 + 1,5 × 5 = 23,7 kN/m ; M₂ = 23,7 × 2,60² / 8 = 20,0 kN·m." },
      { n: 4, text: "Poids propre : 0,20 × 0,25 × 25 × 1,35 = 1,69 kN/m ; M₃ = 1,69 × 2,60² / 8 = 1,4 kN·m. Total M_Ed = 25,9 kN·m." },
      { n: 5, text: "A_s = 25,9 × 10⁶ / (0,9 × 210 × 435) = 315 mm² : 3 HA12 (339 mm²), avec cadres HA6 et vérification de l'appui." },
    ],
    result_latex: "M_{Ed} = 4{,}5 + 20{,}0 + 1{,}4 = 25{,}9\\ \\text{kN·m} \\qquad A_s = \\frac{25{,}9 \\times 10^6}{0{,}9 \\times 210 \\times 435} = 315\\ \\text{mm}^2 \\Rightarrow 3\\ \\text{HA12}",
  },
  units: {
    table: [
      ['Poids surfacique', 'kN/m²', 'psf', '1 kN/m² = 20,9 psf'],
      ['Moment', 'kN·m', 'kip·ft', '1 kip·ft = 1,356 kN·m'],
      ['Section d’acier', 'mm²', 'in²', '1 in² = 645 mm²'],
      ['Longueur d’appui', 'cm', 'in', '20 cm ≈ 8 in'],
      ['Charge linéique', 'kN/m', 'plf', '1 kN/m = 68,5 plf'],
    ],
    note: 'Aux États-Unis, la même règle de l’effet de voûte s’applique avec un triangle à 45° dans certaines références (TMS 402).',
  },
  hypotheses: {
    items: [
      ['info', 'L’effet de voûte suppose une maçonnerie continue au-dessus, sans autre ouverture dans le triangle, et des trumeaux capables de reprendre la poussée.'],
      ['info', 'Les linteaux préfabriqués ont des charges admissibles données par les fabricants.'],
      ['warning', 'Une ouverture située dans le triangle de décharge d’une autre baie supprime l’effet de voûte : calculer avec toute la hauteur.'],
      ['warning', 'En phase de construction, la maçonnerie fraîche n’assure pas l’effet de voûte : étayer les linteaux.'],
      ['tip', 'Prévoyez un chaînage vertical de part et d’autre des grandes baies.'],
    ],
  },
  simple_examples: {
    examples: [
      {
        title: 'Exemple 1 : hauteur du triangle',
        given: 'L = 1,40 m',
        find: 'h_t',
        solution_latex: "h_t = 0{,}87 \\times 1{,}40 = 1{,}22\\ \\text{m}",
        result: 'Si le plancher est au-dessus de 1,22 m, il ne charge pas le linteau.',
      },
      {
        title: 'Exemple 2 : moment d’une charge triangulaire',
        given: 'W = 6 kN ; L = 1,60 m',
        find: 'M',
        solution_latex: "M = \\frac{6 \\times 1{,}60}{6} = 1{,}6\\ \\text{kN·m}",
        result: '1,6 kN·m.',
      },
      {
        title: 'Exemple 3 : contrainte d’appui',
        given: 'R = 35 kN ; t = 200 mm ; a = 200 mm',
        find: 'σ',
        solution_latex: "\\sigma = \\frac{35\\,000}{200 \\times 200} = 0{,}88\\ \\text{MPa}",
        result: '0,88 MPa : à comparer à la résistance de calcul de la maçonnerie (souvent 1,5 à 3 MPa).',
      },
    ],
  },
  real_examples: {
    title: 'Exemple réel — Fissures au-dessus d’une baie agrandie',
    examples: [
      {
        context: 'Rénovation d’une maison : baie de 1,20 m agrandie à 3,00 m',
        scenario: "Le propriétaire a fait poser un simple profilé métallique sans calcul, avec 10 cm d'appui de chaque côté. Quelques semaines après, des fissures en escalier sont apparues au-dessus de la baie et l'appui gauche s'est écrasé : le plancher de l'étage reposait à 1,10 m au-dessus, dans le triangle de décharge.",
        decomposition_latex: "L \\uparrow + \\text{plancher dans le triangle} + \\text{appuis de 10 cm} \\Rightarrow \\text{flèche et écrasement des appuis}",
        lesson: "Toute création ou agrandissement d'ouverture dans un mur porteur doit être calculé (linteau, appuis, étaiement) par un professionnel.",
      },
    ],
  },
  diagrams: {
    title: 'Schéma de principe — Chaînages et linteau d’une baie',
    diagram_description: [
      'Chaînage horizontal continu à chaque niveau de plancher',
      'Chaînages verticaux aux angles et aux jonctions de murs',
      'Linteau BA au-dessus de la baie avec appuis de 20 cm minimum',
      'Triangle de décharge à 60° au-dessus du linteau',
      'Raidisseurs verticaux de part et d’autre des grandes baies',
      'Recouvrements et ancrages des armatures aux angles',
    ],
  },
  mistakes: {
    items: [
      ['Chaînage interrompu aux angles', 'Écartement des murs', 'Équerres de liaison et recouvrements suffisants.'],
      ['Appuis trop courts', 'Écrasement local', 'Au moins 20 cm et vérification de la contrainte.'],
      ['Oublier le plancher dans le triangle', 'Linteau sous-dimensionné', 'Comparer la hauteur du plancher à 0,87 L.'],
    ],
  },
  tips: {
    tips: [
      'Utilisez des blocs d’angle et des blocs « U » pour couler les chaînages.',
      'Assurez un enrobage suffisant (≥ 2 à 3 cm) dans les blocs chaînage.',
      'Étayez les linteaux coulés en place jusqu’au durcissement du béton.',
      'Alignez les baies d’un étage à l’autre pour un cheminement simple des charges.',
    ],
  },
  norms: {
    norms: [
      ['NF DTU 20.1', 'Ouvrages en maçonnerie de petits éléments : parois et murs.'],
      ['NF EN 1996-1-1', 'Eurocode 6 : maçonnerie armée et non armée.'],
      ['NF EN 1992-1-1', 'Calcul des linteaux en béton armé.'],
      ['NF EN 845-2', 'Linteaux préfabriqués.'],
      ['NF EN 1998-1 (section 9)', 'Maçonnerie en zone sismique : chaînages.'],
    ],
  },
  exercises: {
    exercises: [
      {
        level: 1,
        text: 'Calculer la portée de calcul d’un linteau pour une baie de 1,80 m avec appuis de 20 cm.',
        hint: 'L ≈ L₀ + a.',
        answer_latex: "L = 1{,}80 + 0{,}20 = 2{,}00\\ \\text{m}",
        answer_text: '2,00 m.',
      },
      {
        level: 2,
        text: 'Calculer la charge triangulaire de maçonnerie pour L = 2,00 m et g_m = 3,0 kN/m².',
        hint: 'W = ½ L × 0,87 L × g_m.',
        answer_latex: "W = 0{,}5 \\times 2{,}00 \\times 1{,}74 \\times 3{,}0 = 5{,}2\\ \\text{kN}",
        answer_text: '5,2 kN (charge caractéristique).',
      },
      {
        level: 3,
        text: 'Un linteau de 3,20 m reprend q_Ed = 30 kN/m. Calculer A_s pour d = 26 cm.',
        hint: 'M = qL²/8.',
        answer_latex: "M = \\frac{30 \\times 3{,}2^2}{8} = 38{,}4\\ \\text{kN·m} \\Rightarrow A_s = \\frac{38{,}4 \\times 10^6}{0{,}9 \\times 260 \\times 435} = 377\\ \\text{mm}^2",
        answer_text: '377 mm² : 2 HA16 (402 mm²).',
      },
    ],
  },
  quiz: {
    title: 'Quiz — Chaînages et linteaux',
    questions: [
      { q: 'À quoi sert un chaînage horizontal ?', options: ['À décorer la façade', 'À solidariser les murs et les planchers', 'À isoler'], correct: 1, explain: 'Il ceinture le bâtiment et reprend les tractions.' },
      { q: 'Quelle est la hauteur du triangle de décharge à 60° ?', options: ['0,5 L', '0,87 L', '2 L'], correct: 1, explain: 'h = (√3/2) L.' },
      { q: 'Quel est le moment d’une charge triangulaire W sur une portée L ?', options: ['WL/4', 'WL/6', 'WL/8'], correct: 1, explain: 'M = WL/6 pour un triangle symétrique.' },
    ],
  },
  exam_questions: {
    questions: [
      'Expliquez le rôle des chaînages horizontaux et verticaux.',
      'Décrivez l’effet de voûte et ses conditions de validité.',
      'Dimensionnez un linteau supportant un plancher.',
    ],
  },
  interview_questions: {
    questions: [
      ['Un client veut agrandir une ouverture dans un mur porteur : quelle est votre démarche ?', 'Relevé et descente de charges, calcul du linteau et des appuis, vérification des trumeaux, procédure d’étaiement, puis exécution contrôlée.'],
      ['Pourquoi des fissures apparaissent-elles en angle de baie ?', 'Concentrations de contraintes, flèche du linteau, retrait ou tassement ; on les limite par des linteaux bien dimensionnés, des appuis suffisants et des chaînages.'],
    ],
  },
  practical_case: {
    title: 'Cas pratique — Façade avec deux baies proches',
    scenario: 'Deux fenêtres de 1,20 m sont séparées par un trumeau de 0,60 m, dans un mur de 20 cm (g_m = 2,6 kN/m²). Le plancher est à 1,40 m au-dessus des linteaux.',
    description: 'Vérifier l’effet de voûte et proposer une solution.',
    resolutions: [
      "L = 1{,}40\\ \\text{m (chaque baie)} \\Rightarrow h_t = 0{,}87 \\times 1{,}40 = 1{,}22\\ \\text{m} < 1{,}40\\ \\text{m}",
      "\\text{Plancher hors triangle, mais trumeau de 0,60 m étroit} \\Rightarrow \\text{concentration de charge}",
      "\\text{Solution} : \\text{linteau continu sur les deux baies} + \\text{vérification du trumeau en compression}",
    ],
    conclusion: 'Un linteau unique filant sur les deux baies et le trumeau répartit mieux les charges ; le trumeau est vérifié comme un poteau en maçonnerie.',
  },
  summary: {
    content: `### Chaînages et linteaux en 5 points
1. Chaînages horizontaux et verticaux continus.
2. Effet de voûte : triangle à 60°, $h_t = 0{,}87 L$.
3. Plancher dans le triangle : charge reprise par le linteau.
4. $M = WL/6$ (triangle) + $qL^2/8$ (réparti).
5. Appuis ≥ 20 cm, vérification de la maçonnerie sous l'appui.`,
  },
  key_points: {
    points: [
      'Chaînages continus',
      'h_t = 0,87 L',
      'M = WL/6',
      'A_s = M / (0,9 d f_yd)',
      'Appuis ≥ 20 cm',
    ],
  },
  self_assessment: {
    objectives: [
      'Je connais le rôle des chaînages',
      'Je sais appliquer l’effet de voûte',
      'Je sais calculer le moment d’un linteau',
      'Je sais vérifier les appuis',
      "J'ai réussi le quiz avec au moins 2 bonnes réponses sur 3",
    ],
  },
});
