// ── Lesson: Béton armé — effort tranchant et armatures transversales — Module 9 ─
import { buildLesson } from './build_lesson.js';

export const lesson_ba_effort_tranchant = buildLesson({
  moduleId: 9,
  slug: 'ba_effort_tranchant',
  lessonIndex: 2,
  title: "Effort Tranchant en Béton Armé : Bielles, Étriers & Méthode de l'EC2",
  subtitle: 'Module 09 — Conception & Calcul en Béton Armé',
  level: 'Avancé',
  duration: '15h',
  diagramType: 'rebar_beam',
  tags: ['Béton armé', 'Effort tranchant', 'Étriers', 'Bielles', 'Treillis de Ritter-Mörsch', 'EC2', 'V_Rd,max'],
}, {
  definition: {
    title: 'Définition — Coudre les fissures inclinées',
    fr: 'Armatures transversales (étriers, cadres, épingles) et effort tranchant',
    en: 'Shear reinforcement (stirrups)',
    metier: "Utilisée par les ingénieurs béton armé pour toutes les poutres, voiles et dalles épaisses ; contrôlée par les bureaux de contrôle et sur chantier lors de la réception des ferraillages.",
    content: `Près des appuis d'une poutre, l'effort tranchant crée des **contraintes de traction inclinées** à environ 45°. Le béton, peu résistant en traction, se fissure en biais. Sans armatures transversales, la poutre peut se rompre **brutalement** le long d'une fissure diagonale.

### Le modèle du treillis (Ritter-Mörsch)
Après fissuration, la poutre fonctionne comme un **treillis** :
- les **bielles de béton** inclinées d'un angle $\\theta$ travaillent en compression ;
- les **étriers** verticaux travaillent en traction comme les montants du treillis ;
- les **armatures longitudinales** forment la membrure tendue, le béton comprimé la membrure supérieure.

L'Eurocode 2 vérifie deux choses :
1. que les **étriers** sont suffisants : $V_{Ed} \\le V_{Rd,s}$ ;
2. que les **bielles** ne s'écrasent pas : $V_{Ed} \\le V_{Rd,max}$.

> 💡 La rupture par effort tranchant est fragile : c'est pourquoi un minimum d'étriers est toujours exigé dans les poutres.`,
  },
  importance: {
    content: `- **Sécurité** : la rupture par effort tranchant ne prévient pas, contrairement à la flexion (grandes flèches, fissures visibles).
- **Économie** : le choix de l'angle des bielles (cot θ de 1 à 2,5) peut réduire fortement la quantité d'étriers.
- **Ferraillage** : l'espacement des étriers varie le long de la poutre, serré près des appuis, plus large en travée.
- **Exécution** : des étriers mal fermés ou mal ancrés ne reprennent rien.

> ⚠️ **À retenir** : réduire les étriers augmente l'effort dans les armatures longitudinales (décalage de la courbe des moments) ; les deux se calculent ensemble.`,
  },
  applications: {
    examples: [
      ['Poutre de plancher', 'Étriers HA6 à HA10 resserrés sur 1 à 1,5 m près des appuis.'],
      ['Poutre de transfert', 'Fort effort tranchant sous un poteau en reprise : étriers multiples et vérification des bielles.'],
      ['Voile de contreventement', 'Armatures horizontales dimensionnées pour l’effort tranchant sismique.'],
      ['Dalle sans armatures transversales', 'Vérification V_Ed ≤ V_Rd,c pour éviter d’en mettre.'],
      ['Corbeau', 'Modèle bielles-tirants pour une console courte.'],
    ],
  },
  theory: {
    title: 'Théorie — Les trois résistances de l’EC2',
    content: `### 1. Sans armatures d'effort tranchant
$$V_{Rd,c} = C_{Rd,c} \\, k \\, (100 \\rho_l f_{ck})^{1/3} \\, b_w d \\qquad k = 1 + \\sqrt{200/d} \\le 2$$
avec $C_{Rd,c} = 0{,}18/\\gamma_c = 0{,}12$ et un minimum $v_{min} = 0{,}035 \\, k^{3/2} \\sqrt{f_{ck}}$. Si $V_{Ed} \\le V_{Rd,c}$, les dalles n'ont pas besoin d'armatures transversales (les poutres gardent le minimum).

### 2. Avec étriers verticaux
$$V_{Rd,s} = \\frac{A_{sw}}{s} \\cdot z \\cdot f_{ywd} \\cdot \\cot\\theta$$
$z \\approx 0{,}9 d$ ; $\\theta$ est l'inclinaison des bielles, choisie telle que $1 \\le \\cot\\theta \\le 2{,}5$ (21,8° ≤ θ ≤ 45°).

### 3. Écrasement des bielles
$$V_{Rd,max} = \\frac{\\alpha_{cw} \\, b_w \\, z \\, \\nu_1 \\, f_{cd}}{\\cot\\theta + \\tan\\theta} \\qquad \\nu_1 = 0{,}6\\left(1 - \\frac{f_{ck}}{250}\\right)$$

### 4. Démarche
On prend d'abord $\\cot\\theta = 2{,}5$ (le moins d'étriers) et on vérifie $V_{Rd,max}$ ; si les bielles ne passent pas, on diminue $\\cot\\theta$ ou on augmente $b_w$.

### 5. Dispositions constructives
- Taux minimal : $\\rho_{w,min} = 0{,}08\\sqrt{f_{ck}} / f_{yk}$.
- Espacement maximal : $s_{l,max} = 0{,}75 d$.`,
  },
  formulas: {
    title: 'Formules essentielles — Effort tranchant (EC2 §6.2)',
    formulas: [
      {
        name: 'Résistance sans armatures transversales',
        latex: "V_{Rd,c} = C_{Rd,c} \\, k \\, (100 \\rho_l f_{ck})^{1/3} \\, b_w \\, d",
        description: 'Valeur minimale : v_min · b_w · d avec v_min = 0,035 k^(3/2) √f_ck.',
        vars: [
          ['V_{Rd,c}', 'Résistance du béton seul', 'N', 'Effort tranchant repris sans étriers.'],
          ['C_{Rd,c}', 'Coefficient', '-', '0,18 / γ_c = 0,12.'],
          ['k', "Coefficient d'échelle", '-', '1 + √(200/d) ≤ 2 (d en mm).'],
          ['\\rho_l', "Taux d'armatures longitudinales tendues", '-', 'A_sl / (b_w d) ≤ 0,02.'],
          ['b_w, d', "Largeur d'âme et hauteur utile", 'mm', 'Section de la poutre.'],
        ],
      },
      {
        name: 'Résistance des étriers',
        latex: "V_{Rd,s} = \\frac{A_{sw}}{s} \\cdot z \\cdot f_{ywd} \\cdot \\cot\\theta",
        description: 'Étriers verticaux, modèle du treillis à bielles d’inclinaison θ.',
        vars: [
          ['A_{sw}', "Section d'un cours d'étriers", 'mm²', '2 brins HA8 = 100,5 mm².'],
          ['s', 'Espacement des étriers', 'mm', '≤ 0,75 d.'],
          ['z', 'Bras de levier', 'mm', '≈ 0,9 d.'],
          ['f_{ywd}', "Limite d'élasticité de calcul des étriers", 'MPa', '434,8 MPa pour B500.'],
          ['\\cot\\theta', 'Cotangente de l’angle des bielles', '-', 'Entre 1 et 2,5.'],
        ],
        rule: "Avec cot θ = 2,5, on obtient 2,5 fois moins d'étriers qu'avec des bielles à 45°.",
      },
      {
        name: 'Résistance des bielles de béton',
        latex: "V_{Rd,max} = \\frac{\\alpha_{cw} \\, b_w \\, z \\, \\nu_1 \\, f_{cd}}{\\cot\\theta + \\tan\\theta}",
        description: 'Limite supérieure : au-delà, il faut agrandir la section.',
        vars: [
          ['\\alpha_{cw}', "Coefficient d'état de contrainte", '-', '1,0 sans précontrainte.'],
          ['\\nu_1', 'Coefficient de réduction du béton fissuré', '-', '0,6 (1 − f_ck/250).'],
          ['f_{cd}', 'Résistance de calcul du béton', 'MPa', 'f_ck / 1,5.'],
        ],
      },
      {
        name: 'Section et espacement des étriers requis',
        latex: "\\frac{A_{sw}}{s} \\ge \\frac{V_{Ed}}{z \\, f_{ywd} \\, \\cot\\theta}",
        description: 'Inversion de la formule de V_Rd,s.',
        vars: [
          ['V_{Ed}', 'Effort tranchant de calcul', 'N', 'Au nu de l’appui (ou à d du nu pour les charges réparties).'],
          ['A_{sw}/s', 'Section d’étriers par mm de poutre', 'mm²/mm', 'À traduire en diamètre et espacement.'],
        ],
      },
      {
        name: "Taux minimal d'armatures transversales",
        latex: "\\rho_{w,min} = \\frac{0{,}08 \\sqrt{f_{ck}}}{f_{yk}} \\qquad \\rho_w = \\frac{A_{sw}}{s \\, b_w}",
        description: 'Ductilité minimale des poutres.',
        vars: [
          ['\\rho_w', 'Taux d’armatures transversales', '-', 'Doit être ≥ ρ_w,min.'],
          ['f_{ck}', 'Résistance caractéristique du béton', 'MPa', 'C25/30 : 25 MPa.'],
          ['f_{yk}', "Limite d'élasticité des étriers", 'MPa', '500 MPa.'],
        ],
      },
    ],
  },
  stepbystep: {
    title: 'Calcul complet — Étriers d’une poutre de 30 × 60 cm',
    problem: "Poutre b_w = 300 mm, h = 600 mm, d = 540 mm, béton C25/30 (f_cd = 16,67 MPa), étriers B500 (f_ywd = 434,8 MPa). Effort tranchant de calcul V_Ed = 250 kN. Dimensionner les étriers.",
    steps_demo: [
      { n: 1, text: "Bras de levier : z = 0,9 × 540 = 486 mm ; on choisit cot θ = 2,5 (tan θ = 0,4)." },
      { n: 2, text: "ν₁ = 0,6 × (1 − 25/250) = 0,54." },
      { n: 3, text: "Bielles : V_Rd,max = 300 × 486 × 0,54 × 16,67 / (2,5 + 0,4) = 453 kN ≥ 250 kN : bielles vérifiées." },
      { n: 4, text: "Étriers : A_sw/s ≥ 250 000 / (486 × 434,8 × 2,5) = 0,473 mm²/mm." },
      { n: 5, text: "Avec un cadre HA8 (2 brins, A_sw = 100,5 mm²) : s ≤ 100,5 / 0,473 = 212 mm → s = 200 mm." },
      { n: 6, text: "Vérifications : s = 200 ≤ 0,75 d = 405 mm ; ρ_w = 100,5 / (200 × 300) = 0,0017 ≥ ρ_w,min = 0,0008." },
    ],
    result_latex: "V_{Rd,max} = 453\\ \\text{kN} \\ge 250\\ \\text{kN} \\qquad \\frac{A_{sw}}{s} = 0{,}473\\ \\text{mm}^2/\\text{mm} \\Rightarrow \\text{cadres HA8 tous les 200 mm}",
  },
  units: {
    table: [
      ['Effort tranchant', 'kN', 'kip', '1 kN = 0,2248 kip'],
      ["Section d'étriers", 'mm²', 'in²', 'HA6 = 28,3 ; HA8 = 50,3 ; HA10 = 78,5 mm² par brin'],
      ['A_sw/s', 'mm²/mm = cm²/m × 0,1', 'in²/in', '0,473 mm²/mm = 4,73 cm²/m'],
      ['Espacement', 'mm, cm', 'in', 's ≤ 0,75 d'],
      ['Contrainte', 'MPa', 'psi', 'f_ywd = 434,8 MPa pour B500'],
    ],
    note: 'Un cadre fermé compte deux brins verticaux ; un cadre plus un étrier intérieur en compte quatre.',
  },
  hypotheses: {
    items: [
      ['info', 'Le modèle du treillis suppose des membrures parallèles et une âme fissurée en bielles uniformes.'],
      ['info', 'Pour les charges réparties, V_Ed peut être pris à une distance d du nu de l’appui.'],
      ['warning', 'Choisir cot θ = 2,5 augmente l’effort de traction dans les aciers longitudinaux (décalage a_l = z cot θ / 2).'],
      ['warning', 'Les étriers doivent être ancrés autour des barres longitudinales (crochets à 135°) pour être efficaces.'],
      ['tip', 'Calculez A_sw/s à plusieurs abscisses : on peut espacer les étriers en travée où l’effort tranchant diminue.'],
    ],
  },
  simple_examples: {
    examples: [
      {
        title: 'Exemple 1 : résistance sans étriers',
        given: 'b_w = 300 mm, d = 540 mm, ρ_l = 1 %, C25/30',
        find: 'V_Rd,c',
        solution_latex: "k = 1 + \\sqrt{\\frac{200}{540}} = 1{,}61 \\quad V_{Rd,c} = 0{,}12 \\times 1{,}61 \\times (100 \\times 0{,}01 \\times 25)^{1/3} \\times 300 \\times 540 = 91{,}5\\ \\text{kN}",
        result: 'V_Rd,c ≈ 91 kN < 250 kN : les étriers sont indispensables.',
      },
      {
        title: 'Exemple 2 : taux minimal',
        given: 'C30/37, B500',
        find: 'ρ_w,min',
        solution_latex: "\\rho_{w,min} = \\frac{0{,}08 \\times \\sqrt{30}}{500} = 0{,}00088",
        result: 'ρ_w,min ≈ 0,09 %.',
      },
      {
        title: 'Exemple 3 : résistance de cadres HA10 tous les 150 mm',
        given: 'A_sw = 157 mm², s = 150 mm, z = 486 mm, cot θ = 2,5',
        find: 'V_Rd,s',
        solution_latex: "V_{Rd,s} = \\frac{157}{150} \\times 486 \\times 434{,}8 \\times 2{,}5 = 553\\,000\\ \\text{N} = 553\\ \\text{kN}",
        result: 'V_Rd,s ≈ 553 kN, à plafonner par V_Rd,max = 453 kN.',
      },
    ],
  },
  real_examples: {
    title: 'Exemple réel — Effondrement du viaduc de la Concorde, Laval (2006)',
    examples: [
      {
        context: 'Passage supérieur en béton armé de 1970 au Québec, 5 morts',
        scenario: "La rupture s'est produite dans l'about en porte-à-faux (« appui à redan ») : armatures mal positionnées dès la construction, absence de détails de ferraillage adaptés et béton dégradé par le gel et les sels.",
        decomposition_latex: "\\text{Ferraillage d'about mal placé} + \\text{dégradation du béton} \\Rightarrow \\text{rupture fragile par cisaillement}",
        lesson: "Les zones de discontinuité (abouts, redans, corbeaux) se calculent par bielles et tirants, et la qualité du positionnement des armatures sur chantier est aussi importante que le calcul.",
      },
    ],
  },
  diagrams: {
    title: 'Schéma de principe — Treillis de Ritter-Mörsch',
    diagram_description: [
      'Fissures inclinées à l’approche des appuis (traction diagonale)',
      'Bielles de béton comprimées inclinées d’un angle θ',
      'Étriers tendus : montants verticaux du treillis',
      'Aciers longitudinaux : membrure tendue (effort augmenté de V·cot θ / 2)',
      'Béton comprimé en partie haute : membrure comprimée',
      'Vérifications : V_Ed ≤ V_Rd,s (étriers) et V_Ed ≤ V_Rd,max (bielles)',
    ],
  },
  mistakes: {
    items: [
      ['Oublier de vérifier V_Rd,max', 'Écrasement des bielles malgré beaucoup d’étriers', 'Toujours vérifier les bielles ; augmenter b_w si nécessaire.'],
      ['Compter un seul brin par cadre', 'Section d’étriers sous-estimée de moitié (ou erreur inverse)', 'Compter le nombre de brins verticaux traversant la fissure.'],
      ['Étriers ouverts ou crochets à 90°', 'Ancrage insuffisant, étriers inefficaces', 'Cadres fermés, crochets à 135° avec un retour de 10 Ø.'],
    ],
  },
  tips: {
    tips: [
      'Commencez par cot θ = 2,5 : c’est la solution la plus économique en étriers si les bielles passent.',
      'Évitez des espacements inférieurs à 75-100 mm : le bétonnage devient difficile.',
      'Pour les fortes charges proches des appuis (a_v < 2d), l’EC2 autorise une réduction de V_Ed.',
      'Sur chantier, vérifiez le nombre et l’espacement des cadres sur la zone d’about : c’est là que les erreurs coûtent le plus.',
    ],
  },
  norms: {
    norms: [
      ['NF EN 1992-1-1 §6.2', 'Effort tranchant : V_Rd,c, V_Rd,s, V_Rd,max, choix de θ.'],
      ['NF EN 1992-1-1 §9.2.2', 'Dispositions constructives des armatures d’effort tranchant.'],
      ['NF EN 1992-1-1 §6.5', 'Méthode des bielles et tirants.'],
      ['NF EN 1992-1-1/NA', 'Annexe nationale française (valeurs de C_Rd,c, v_min).'],
    ],
  },
  exercises: {
    exercises: [
      {
        level: 1,
        text: 'Calculer V_Rd,max pour b_w = 250 mm, d = 450 mm, C30/37 (f_cd = 20 MPa) et cot θ = 2,5.',
        hint: 'ν₁ = 0,6 (1 − 30/250) = 0,528 ; z = 0,9 d.',
        answer_latex: "V_{Rd,max} = \\frac{250 \\times 405 \\times 0{,}528 \\times 20}{2{,}9} = 368\\,700\\ \\text{N} = 369\\ \\text{kN}",
        answer_text: 'V_Rd,max ≈ 369 kN.',
      },
      {
        level: 2,
        text: 'Pour la même poutre et V_Ed = 180 kN, calculer A_sw/s puis l’espacement de cadres HA8 (2 brins).',
        hint: 'A_sw/s = V_Ed / (z f_ywd cot θ).',
        answer_latex: "\\frac{A_{sw}}{s} = \\frac{180\\,000}{405 \\times 434{,}8 \\times 2{,}5} = 0{,}409 \\quad s = \\frac{100{,}5}{0{,}409} = 246\\ \\text{mm}",
        answer_text: 'Cadres HA8 tous les 240 mm (≤ 0,75 d = 337 mm).',
      },
      {
        level: 3,
        text: 'Si V_Ed = 400 kN pour la même poutre, que faire ? Calculer V_Rd,max avec cot θ = 1,5.',
        hint: 'V_Rd,max est maximal pour θ = 45° (cot θ = 1).',
        answer_latex: "V_{Rd,max}(\\cot\\theta = 1{,}5) = \\frac{250 \\times 405 \\times 0{,}528 \\times 20}{1{,}5 + 0{,}667} = 493\\ \\text{kN} \\ge 400\\ \\text{kN}",
        answer_text: 'Les bielles passent avec cot θ = 1,5 ; il faudra plus d’étriers : A_sw/s = 400 000 / (405 × 434,8 × 1,5) = 1,51 mm²/mm.',
      },
    ],
  },
  quiz: {
    title: 'Quiz — Effort tranchant en béton armé',
    questions: [
      { q: 'Dans le modèle du treillis, que représentent les étriers ?', options: ['Les membrures comprimées', 'Les montants tendus', 'Les bielles comprimées'], correct: 1, explain: 'Les étriers travaillent en traction comme les montants du treillis.' },
      { q: 'Quelles sont les bornes de cot θ dans l’EC2 ?', options: ['0,5 à 1', '1 à 2,5', '2,5 à 5'], correct: 1, explain: '1 ≤ cot θ ≤ 2,5, soit 21,8° ≤ θ ≤ 45°.' },
      { q: 'Que faire si V_Ed > V_Rd,max ?', options: ['Ajouter des étriers', 'Augmenter la section de béton', 'Augmenter les aciers longitudinaux'], correct: 1, explain: 'Les bielles s’écrasent : il faut plus de béton (b_w ou h) ou un béton plus résistant.' },
    ],
  },
  exam_questions: {
    questions: [
      'Présentez le modèle du treillis de Ritter-Mörsch et les éléments qu’il fait intervenir.',
      'Établissez les expressions de V_Rd,s et V_Rd,max et discutez l’influence de θ.',
      'Dimensionnez les armatures transversales d’une poutre de section et de chargement donnés, avec répartition le long de la portée.',
    ],
  },
  interview_questions: {
    questions: [
      ['Pourquoi la rupture par effort tranchant est-elle plus dangereuse que la rupture par flexion ?', "Parce qu'elle est fragile et soudaine : une poutre sous-armée en flexion prévient par de grandes fissures et flèches, alors qu'une fissure diagonale peut se propager brutalement sans étriers suffisants."],
      ['Une dalle a-t-elle besoin d’étriers ?', "En général non : on vérifie V_Ed ≤ V_Rd,c ; si ce n'est pas le cas (dalles très chargées, poinçonnement autour des poteaux), on ajoute des armatures transversales ou on épaissit la dalle."],
    ],
  },
  practical_case: {
    title: 'Cas pratique — Répartition des étriers le long d’une poutre',
    scenario: 'Poutre de 7 m sur deux appuis, b_w = 300 mm, d = 540 mm, charge ELU p_u = 70 kN/m. C25/30, cadres HA8 (2 brins), cot θ = 2,5.',
    description: 'Calculer les espacements à l’appui et à 2 m de l’appui.',
    resolutions: [
      "V_{Ed}(0) = \\frac{70 \\times 7}{2} = 245\\ \\text{kN} \\Rightarrow \\frac{A_{sw}}{s} = 0{,}464 \\Rightarrow s = 216 \\rightarrow 200\\ \\text{mm}",
      "V_{Ed}(2\\ \\text{m}) = 245 - 70 \\times 2 = 105\\ \\text{kN} \\Rightarrow \\frac{A_{sw}}{s} = 0{,}199 \\Rightarrow s = 505\\ \\text{mm}",
      "s_{max} = 0{,}75\\, d = 405\\ \\text{mm} \\Rightarrow s = 400\\ \\text{mm} \\ \\text{en zone centrale}",
    ],
    conclusion: "Cadres HA8 tous les 200 mm sur les 2 premiers mètres côté appuis, puis tous les 400 mm (limite des dispositions constructives) en partie centrale.",
  },
  summary: {
    content: `### L'effort tranchant en 5 points
1. Fissures inclinées → modèle du **treillis** (bielles + étriers).
2. Sans étriers : $V_{Rd,c}$ (dalles).
3. Étriers : $V_{Rd,s} = (A_{sw}/s)\\, z\\, f_{ywd} \\cot\\theta$.
4. Bielles : $V_{Rd,max}$ avec $\\nu_1 = 0{,}6(1 - f_{ck}/250)$.
5. Minimum $\\rho_{w,min}$ et espacement $\\le 0{,}75 d$.`,
  },
  key_points: {
    points: [
      '1 ≤ cot θ ≤ 2,5',
      'z ≈ 0,9 d',
      'A_sw/s = V_Ed / (z·f_ywd·cot θ)',
      'ν₁ = 0,6 (1 − f_ck/250)',
      's ≤ 0,75 d ; ρ_w ≥ 0,08√f_ck / f_yk',
    ],
  },
  self_assessment: {
    objectives: [
      'Je comprends le modèle du treillis',
      'Je sais calculer V_Rd,c, V_Rd,s et V_Rd,max',
      'Je sais dimensionner et répartir des étriers',
      'Je connais les dispositions constructives minimales',
      "J'ai réussi le quiz avec au moins 2 bonnes réponses sur 3",
    ],
  },
});
