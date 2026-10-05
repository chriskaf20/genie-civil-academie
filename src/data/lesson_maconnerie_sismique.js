// ── Lesson: Maçonnerie en zone sismique — Module 39 ──────────────────────────
import { buildLesson } from './build_lesson.js';

export const lesson_maconnerie_sismique = buildLesson({
  moduleId: 39,
  slug: 'maconnerie_sismique',
  lessonIndex: 3,
  title: "Maçonnerie en Zone Sismique : Maçonnerie Chaînée, Règles de l'Eurocode 8 et Vérification au Cisaillement",
  subtitle: 'Module 39 — Maçonnerie & Structures en maçonnerie',
  level: 'Avancé',
  duration: '6h',
  tags: ['Séisme', 'Maçonnerie chaînée', 'Eurocode 8', 'Cisaillement', 'Contreventement', 'Coefficient q', 'Bâtiment simple'],
}, {
  definition: {
    title: 'Définition — Rendre la maçonnerie capable de résister aux séismes',
    fr: 'Maçonnerie parasismique',
    en: 'Seismic design of masonry buildings',
    metier: "Concerne les ingénieurs structure, les architectes, les maçons et les contrôleurs techniques en zones sismiques.",
    content: `La maçonnerie non armée est **fragile** : sous séisme, les murs se fissurent en X, les angles se détachent et les murs hors plan basculent. Trois types sont définis par l'Eurocode 8 :

- **Maçonnerie non armée** : limitée aux zones de faible sismicité.
- **Maçonnerie chaînée** : murs encadrés par des chaînages horizontaux et verticaux en béton armé, coulés **après** la maçonnerie.
- **Maçonnerie armée** : armatures horizontales dans les joints et verticales dans les alvéoles.

### Les principes de conception
- **Simplicité et régularité** : plan compact, murs de contreventement dans les deux directions, alignés d'un étage à l'autre.
- **Diaphragmes rigides** : planchers liés aux chaînages.
- **Chaînages** aux angles, aux jonctions, autour des grandes ouvertures.
- **Limiter les ouvertures** et éviter les étages « transparents ».

> 💡 La maçonnerie chaînée correctement réalisée a montré un très bon comportement lors des séismes en Amérique latine et en Europe du Sud.`,
  },
  importance: {
    content: `- **Vies humaines** : l'effondrement de maisons en maçonnerie est une cause majeure de victimes lors des séismes.
- **Réglementation** : en France, les règles parasismiques s'appliquent selon la zone (1 à 5) et la catégorie d'importance.
- **Coût** : les dispositions de chaînage coûtent peu par rapport au gain de sécurité.
- **Existant** : de nombreux bâtiments anciens non chaînés doivent être renforcés.

> ⚠️ **À retenir** : un séisme sollicite toute la structure ; un seul défaut (angle non chaîné, mur non lié au plancher) peut provoquer l'effondrement.`,
  },
  applications: {
    examples: [
      ['Maison individuelle en zone 3', 'Règles simplifiées type CP-MI (France).'],
      ['Petit collectif R+2', 'Calcul EC8 avec maçonnerie chaînée.'],
      ['École', 'Catégorie d’importance III : exigences renforcées.'],
      ['Renforcement d’un bâtiment ancien', 'Ajout de chaînages, tirants et liaisons planchers-murs.'],
      ['Reconstruction post-séisme', 'Maçonnerie chaînée enseignée aux artisans.'],
    ],
  },
  theory: {
    title: 'Théorie — Règles et vérifications de l’Eurocode 8',
    content: `### 1. Exigences géométriques (valeurs recommandées EC8, tableau 9.2)
| Type | $t_{ef,min}$ | $(h_{ef}/t_{ef})_{max}$ |
|---|---|---|
| Non armée | 240 mm | 12 |
| Non armée, faible sismicité | 170 mm | 15 |
| Chaînée | 240 mm | 15 |
| Armée | 240 mm | 15 |

### 2. Chaînages (maçonnerie chaînée, EC8 § 9.5.3)
- Chaînages verticaux aux bords libres, aux intersections, de part et d'autre des ouvertures de plus de 1,5 m², espacement ≤ 5 m.
- Chaînages horizontaux à chaque plancher et au moins tous les 4 m.
- Armatures longitudinales : au moins **300 mm²** ou 1 % de la section du chaînage.

### 3. Coefficient de comportement (valeurs recommandées)
Non armée : $q$ = 1,5 ; chaînée : $q$ = 2 à 3 ; armée : $q$ = 2,5 à 3.

### 4. Effort tranchant à la base
$$F_b = S_d(T_1) \\, m \\, \\lambda$$
Pour un bâtiment bas et rigide, on est sur le plateau du spectre : $S_d = a_g \\, S \\, \\frac{2{,}5}{q}$.

### 5. Résistance au cisaillement des murs
$$f_{vk} = f_{vk0} + 0{,}4 \\, \\sigma_d \\qquad V_{Rd} = \\frac{f_{vk}}{\\gamma_M} \\, t \\, l_c$$
$l_c$ : longueur comprimée du mur. La somme des résistances des murs d'une direction doit dépasser $F_b$, en tenant compte de la torsion.`,
  },
  formulas: {
    title: 'Formules essentielles — Maçonnerie parasismique',
    formulas: [
      {
        name: 'Effort tranchant à la base',
        latex: "F_b = S_d(T_1) \\, m \\, \\lambda",
        description: 'Méthode des forces latérales.',
        vars: [
          ['F_b', 'Effort tranchant à la base', 'kN', ''],
          ['S_d', 'Ordonnée du spectre de calcul', 'm/s²', ''],
          ['m', 'Masse sismique', 't', 'G + ψ₂ Q.'],
          ['\\lambda', 'Coefficient de correction', '-', '0,85 si plus de 2 étages et T₁ ≤ 2T_C, sinon 1.'],
        ],
      },
      {
        name: 'Spectre sur le plateau',
        latex: "S_d = a_g \\, S \\, \\frac{2{,}5}{q}",
        description: 'Pour T_B ≤ T ≤ T_C.',
        vars: [
          ['a_g', 'Accélération de calcul au rocher', 'm/s²', 'a_gR × γ_I.'],
          ['S', 'Paramètre de sol', '-', '1 à 1,8 selon la classe de sol et le pays.'],
          ['q', 'Coefficient de comportement', '-', ''],
        ],
      },
      {
        name: 'Résistance au cisaillement',
        latex: "f_{vk} = f_{vk0} + 0{,}4\\,\\sigma_d \\qquad V_{Rd} = \\frac{f_{vk}}{\\gamma_M} t \\, l_c",
        description: 'Résistance d’un mur de contreventement.',
        vars: [
          ['f_{vk0}', 'Résistance initiale au cisaillement', 'MPa', '0,1 à 0,3 selon élément et mortier.'],
          ['\\sigma_d', 'Contrainte de compression de calcul', 'MPa', ''],
          ['t', 'Épaisseur', 'mm', ''],
          ['l_c', 'Longueur comprimée', 'mm', ''],
        ],
      },
      {
        name: 'Section minimale des chaînages (EC8)',
        latex: "A_s \\geq \\max(300\\ \\text{mm}^2 \\, ; \\, 0{,}01 \\, A_c)",
        description: 'Armatures longitudinales des chaînages en maçonnerie chaînée.',
        vars: [
          ['A_s', 'Section d’armatures', 'mm²', '4 HA10 = 314 mm².'],
          ['A_c', 'Section de béton du chaînage', 'mm²', ''],
        ],
      },
    ],
  },
  stepbystep: {
    title: 'Calcul complet — Petit bâtiment R+1 en maçonnerie chaînée',
    problem: "Bâtiment R+1 en maçonnerie chaînée : masse sismique 300 t, a_g = 1,6 m/s², S = 1,2, q = 2,5, λ = 1. Dans la direction X, 30 m de murs de 20 cm (longueur comprimée supposée égale à 80 % de la longueur), f_vk0 = 0,20 MPa, σ_d = 0,30 MPa, γ_M = 1,7 (situation sismique). Vérifier la résistance globale au cisaillement.",
    steps_demo: [
      { n: 1, text: "Spectre : S_d = 1,6 × 1,2 × 2,5 / 2,5 = 1,92 m/s²." },
      { n: 2, text: "Effort à la base : F_b = 1,92 × 300 × 1 = 576 kN." },
      { n: 3, text: "f_vk = 0,20 + 0,4 × 0,30 = 0,32 MPa ; f_vd = 0,32 / 1,7 = 0,188 MPa." },
      { n: 4, text: "V_Rd = 0,188 × 200 × (0,8 × 30 000) = 903 000 N = 903 kN." },
      { n: 5, text: "903 kN ≥ 576 kN : vérifié avec une marge de 57 %, qui doit couvrir la torsion accidentelle et la répartition réelle entre murs." },
    ],
    result_latex: "F_b = 1{,}6 \\times 1{,}2 \\times \\frac{2{,}5}{2{,}5} \\times 300 = 576\\ \\text{kN} \\qquad V_{Rd} = 0{,}188 \\times 200 \\times 24\\,000 = 903\\ \\text{kN}",
  },
  units: {
    table: [
      ['Accélération', 'm/s²', 'g', '1 g = 9,81 m/s²'],
      ['Masse', 't', 'kip·s²/ft', '1 t ≈ 9,81 kN de poids'],
      ['Contrainte', 'MPa', 'psi', '0,2 MPa = 29 psi'],
      ['Effort tranchant', 'kN', 'kip', '1 kip = 4,448 kN'],
      ['Section d’acier', 'mm²', 'in²', '300 mm² ≈ 0,47 in²'],
    ],
    note: 'En France, a_gR vaut de 0,4 m/s² (zone 1) à 3 m/s² (zone 5, Antilles).',
  },
  hypotheses: {
    items: [
      ['info', 'Les valeurs du tableau 9.2 sont les valeurs recommandées de l’EC8 ; les annexes nationales peuvent les modifier.'],
      ['info', 'La méthode des forces latérales convient aux bâtiments réguliers en élévation et de période courte.'],
      ['warning', 'Les chaînages doivent être coulés après la maçonnerie pour assurer le confinement.'],
      ['warning', 'Les murs de refend non liés aux façades ne participent pas efficacement au contreventement.'],
      ['tip', 'Pour les maisons individuelles en France, les règles simplifiées (CP-MI Antilles, guide de construction parasismique) évitent un calcul complet.'],
    ],
  },
  simple_examples: {
    examples: [
      {
        title: 'Exemple 1 : élancement d’un mur',
        given: 'Mur chaîné h_ef = 2,70 m ; t = 0,20 m',
        find: 'h_ef / t_ef',
        solution_latex: "\\frac{2{,}70}{0{,}20} = 13{,}5 \\leq 15",
        result: 'Conforme pour la maçonnerie chaînée, mais t = 200 mm < 240 mm recommandé : vérifier l’annexe nationale.',
      },
      {
        title: 'Exemple 2 : armatures d’un chaînage',
        given: 'Chaînage 20 × 20 cm',
        find: 'A_s minimal',
        solution_latex: "\\max(300 \\, ; \\, 0{,}01 \\times 40\\,000) = 400\\ \\text{mm}^2",
        result: '400 mm² : 4 HA12 (452 mm²).',
      },
      {
        title: 'Exemple 3 : résistance au cisaillement',
        given: 'f_vk0 = 0,15 MPa ; σ_d = 0,5 MPa',
        find: 'f_vk',
        solution_latex: "f_{vk} = 0{,}15 + 0{,}4 \\times 0{,}5 = 0{,}35\\ \\text{MPa}",
        result: '0,35 MPa : la compression améliore la résistance au cisaillement.',
      },
    ],
  },
  real_examples: {
    title: 'Exemple réel — Séisme de L’Aquila (Italie, 2009)',
    examples: [
      {
        context: 'Centre historique et bâtiments récents en maçonnerie',
        scenario: "Le séisme de magnitude 6,3 a fait plus de 300 victimes. De nombreux bâtiments anciens en maçonnerie de pierres non chaînée, avec planchers mal liés aux murs, se sont effondrés partiellement (basculement de façades, rupture d'angles). Les bâtiments ayant reçu des tirants métalliques et des liaisons planchers-murs se sont nettement mieux comportés.",
        decomposition_latex: "\\text{Murs non liés} + \\text{planchers flexibles} \\Rightarrow \\text{basculement hors plan} \\Rightarrow \\text{effondrement}",
        lesson: "Le « comportement en boîte » (murs liés entre eux et aux planchers) est la condition première de la tenue sismique des maçonneries.",
      },
    ],
  },
  diagrams: {
    title: 'Schéma de principe — Bâtiment en maçonnerie chaînée',
    diagram_description: [
      'Plan compact avec murs de contreventement dans les deux directions',
      'Chaînages verticaux aux angles, jonctions et bords d’ouvertures',
      'Chaînages horizontaux à chaque plancher',
      'Planchers rigides liés aux chaînages (diaphragmes)',
      'Ouvertures limitées et alignées d’un étage à l’autre',
      'Fondations continues et chaînées',
    ],
  },
  mistakes: {
    items: [
      ['Couler les poteaux avant la maçonnerie', 'Maçonnerie non confinée', 'Monter les murs avec harpage puis couler les chaînages.'],
      ['Grandes baies au rez-de-chaussée', 'Étage « transparent » fragile', 'Conserver des murs de contreventement à tous les niveaux.'],
      ['Planchers simplement posés', 'Murs libres de basculer', 'Ancrer les planchers dans les chaînages.'],
    ],
  },
  tips: {
    tips: [
      'Réalisez des harpes (dents) entre maçonnerie et chaînages verticaux.',
      'Répartissez les murs de façon symétrique pour limiter la torsion.',
      'Utilisez des blocs et mortiers de classe connue (résistance garantie).',
      'Contrôlez sur chantier la continuité des armatures aux angles.',
    ],
  },
  norms: {
    norms: [
      ['NF EN 1998-1 (section 9)', 'Règles particulières aux bâtiments en maçonnerie.'],
      ['Arrêté du 22 octobre 2010 modifié (France)', 'Classification et règles parasismiques des bâtiments à risque normal.'],
      ['Guide CP-MI Antilles', 'Construction parasismique des maisons individuelles.'],
      ['NF EN 1996-1-1', 'Calcul des maçonneries.'],
    ],
  },
  exercises: {
    exercises: [
      {
        level: 1,
        text: 'Quel est le coefficient de comportement recommandé pour une maçonnerie non armée ?',
        hint: 'C’est le plus faible.',
        answer_latex: "q = 1{,}5",
        answer_text: 'q = 1,5.',
      },
      {
        level: 2,
        text: 'Calculer F_b pour m = 450 t, a_g = 1,1 m/s², S = 1,35, q = 2 et λ = 1.',
        hint: 'S_d = a_g S 2,5 / q.',
        answer_latex: "S_d = 1{,}1 \\times 1{,}35 \\times 1{,}25 = 1{,}86\\ \\text{m/s}^2 \\Rightarrow F_b = 1{,}86 \\times 450 = 835\\ \\text{kN}",
        answer_text: 'Environ 835 kN.',
      },
      {
        level: 3,
        text: 'Avec f_vd = 0,18 MPa et t = 200 mm, quelle longueur comprimée de murs faut-il pour reprendre 835 kN ?',
        hint: 'l_c = V / (f_vd t).',
        answer_latex: "l_c = \\frac{835\\,000}{0{,}18 \\times 200} = 23\\,200\\ \\text{mm}",
        answer_text: 'Environ 23 m de murs comprimés, soit environ 29 m de murs si 80 % de leur longueur est comprimée.',
      },
    ],
  },
  quiz: {
    title: 'Quiz — Maçonnerie parasismique',
    questions: [
      { q: 'Dans la maçonnerie chaînée, les chaînages sont coulés…', options: ['Avant les murs', 'Après les murs', 'Jamais'], correct: 1, explain: 'Pour confiner la maçonnerie.' },
      { q: 'Quelle section minimale d’armatures pour un chaînage selon l’EC8 ?', options: ['100 mm²', '300 mm² ou 1 % de la section', '1 000 mm²'], correct: 1, explain: 'EC8 § 9.5.3.' },
      { q: 'Quel principe est essentiel pour la tenue sismique ?', options: ['Le comportement en boîte', 'Les grandes baies', 'Les planchers flexibles'], correct: 0, explain: 'Murs et planchers liés.' },
    ],
  },
  exam_questions: {
    questions: [
      'Comparez maçonnerie non armée, chaînée et armée vis-à-vis du séisme.',
      'Présentez les dispositions constructives de l’EC8 pour la maçonnerie chaînée.',
      'Vérifiez la résistance au cisaillement d’un bâtiment simple.',
    ],
  },
  interview_questions: {
    questions: [
      ['Quels défauts recherchez-vous sur un chantier de maçonnerie en zone sismique ?', 'Continuité des chaînages et des recouvrements, harpage, liaison des planchers, qualité du mortier et des joints, respect des ouvertures prévues.'],
      ['Comment renforcer une maison ancienne en pierre ?', 'Liaisons planchers-murs, tirants, chaînages en tête, rejointoiement ou injection des maçonneries, et éventuellement des enduits armés.'],
    ],
  },
  practical_case: {
    title: 'Cas pratique — Vérifier la conception d’une maison en zone 4',
    scenario: 'Maison R+1 de 10 × 8 m en blocs béton de 20 cm. Façade sud : 60 % d’ouvertures au rez-de-chaussée. Planchers en poutrelles-hourdis.',
    description: 'Identifier les points faibles et proposer des corrections.',
    resolutions: [
      "\\text{Façade sud} : 60\\ \\% \\text{ d’ouvertures} \\Rightarrow \\text{rigidité très inférieure à la façade nord : torsion}",
      "\\text{Correction} : \\text{réduire les baies ou ajouter des trumeaux chaînés, voile BA ponctuel}",
      "\\text{Planchers} : \\text{dalle de compression armée et ancrée dans les chaînages (diaphragme)}",
    ],
    conclusion: 'La conception est rééquilibrée (murs mieux répartis) et les planchers forment un diaphragme : la maison respecte le principe de comportement en boîte.',
  },
  summary: {
    content: `### La maçonnerie parasismique en 5 points
1. Non armée (faible sismicité), chaînée, armée.
2. Comportement en boîte : murs et planchers liés.
3. Chaînages : ≥ 300 mm² ou 1 %, aux angles, jonctions, ouvertures.
4. $F_b = S_d(T_1) m \\lambda$ avec $q$ = 1,5 à 3.
5. $V_{Rd} = (f_{vk0} + 0{,}4 \\sigma_d) t l_c / \\gamma_M$.`,
  },
  key_points: {
    points: [
      'Comportement en boîte',
      'Chaînages coulés après la maçonnerie',
      'A_s ≥ 300 mm² ou 1 %',
      'F_b = S_d m λ',
      'f_vk = f_vk0 + 0,4 σ_d',
    ],
  },
  self_assessment: {
    objectives: [
      'Je connais les types de maçonnerie parasismique',
      'Je connais les dispositions de l’EC8',
      'Je sais calculer l’effort sismique à la base',
      'Je sais vérifier la résistance au cisaillement',
      "J'ai réussi le quiz avec au moins 2 bonnes réponses sur 3",
    ],
  },
});
