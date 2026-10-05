// ── Lesson: Construction métallique — instabilités — Module 11 ───────────────
import { buildLesson } from './build_lesson.js';

export const lesson_metal_instabilites = buildLesson({
  moduleId: 11,
  slug: 'metal_instabilites',
  lessonIndex: 3,
  title: "Instabilités des Éléments en Acier : Classes de Sections, Déversement & Voilement (EC3)",
  subtitle: 'Module 11 — Construction Métallique',
  level: 'Avancé',
  duration: '14h',
  tags: ['Construction métallique', 'Déversement', 'M_cr', 'χ_LT', 'Classes de sections', 'Voilement', 'EC3'],
}, {
  definition: {
    title: 'Définition — Quand l’acier cède par instabilité',
    fr: 'Instabilités des éléments métalliques : déversement et voilement',
    en: 'Lateral-torsional buckling and local buckling',
    metier: "Utilisée par les ingénieurs charpente pour les poutres de grande portée, les traverses de portiques, les poutres reconstituées soudées et les ponts métalliques.",
    content: `L'acier est si résistant que ses éléments sont élancés et minces : ils cèdent souvent par **instabilité** avant d'atteindre la limite d'élasticité.

### Trois instabilités à connaître
1. **Flambement** des pièces comprimées (traité en RDM).
2. **Déversement** des poutres fléchies : la semelle comprimée se comporte comme un poteau ; si elle n'est pas tenue latéralement, la poutre se déplace latéralement et se tord.
3. **Voilement local** des parois minces (semelles, âmes) : la paroi comprimée ou cisaillée forme des ondulations.

### Les classes de sections
L'EC3 classe les sections de 1 à 4 selon l'élancement de leurs parois :
- **Classe 1 et 2** : la section atteint son moment plastique (classe 1 : avec capacité de rotation) ;
- **Classe 3** : seulement le moment élastique ;
- **Classe 4** : voilement avant la limite élastique, on calcule avec une section efficace réduite.

> 💡 Une poutre IPE non maintenue latéralement sur 6 m peut perdre près de la moitié de sa résistance en flexion à cause du déversement.`,
  },
  importance: {
    content: `- **Sécurité** : le déversement est brutal et a provoqué de nombreuses ruines en phase de montage (poutres non encore contreventées).
- **Économie** : des maintiens latéraux bien placés (pannes, bracons, dalle) évitent de surdimensionner les profilés.
- **Poutres reconstituées** : les âmes minces des PRS et des ponts exigent des raidisseurs contre le voilement.
- **Modèles** : les logiciels demandent les longueurs de déversement : une mauvaise saisie fausse toute la vérification.

> ⚠️ **À retenir** : une poutre dont la semelle comprimée est tenue en continu (dalle connectée, bac acier fixé) ne déverse pas.`,
  },
  applications: {
    examples: [
      ['Traverse de portique', 'Semelle inférieure comprimée près des poteaux : bracons fixés aux pannes.'],
      ['Poutre de pont roulant', 'Charges appliquées sur la semelle supérieure, déversement aggravé.'],
      ['Poutre en phase de montage', 'Contreventement provisoire avant la pose de la dalle.'],
      ['Poutre reconstituée soudée', 'Raidisseurs d’âme contre le voilement par cisaillement.'],
      ['Panne en Z ou en C', 'Profils minces formés à froid de classe 4.'],
    ],
  },
  theory: {
    title: 'Théorie — Classification, moment critique et réduction χ_LT',
    content: `### 1. Classes de sections (parois comprimées, $\\varepsilon = \\sqrt{235/f_y}$)
- Semelle en console comprimée : classe 1 si $c/t \\le 9\\varepsilon$, classe 2 si $\\le 10\\varepsilon$, classe 3 si $\\le 14\\varepsilon$.
- Âme fléchie : classe 1 si $c/t \\le 72\\varepsilon$, classe 2 si $\\le 83\\varepsilon$, classe 3 si $\\le 124\\varepsilon$.

### 2. Moment critique de déversement
Pour une poutre à section doublement symétrique, appuis à fourche, charge appliquée au centre de cisaillement :
$$M_{cr} = C_1 \\frac{\\pi^2 E I_z}{L^2} \\sqrt{\\frac{I_w}{I_z} + \\frac{L^2 G I_t}{\\pi^2 E I_z}}$$
$C_1$ dépend du diagramme de moments : 1,0 (moment constant), 1,13 (charge répartie), 1,35 (charge concentrée au centre), jusqu'à 2,5 environ pour un moment variant d'un appui à l'autre.

### 3. Réduction (méthode générale, EC3 §6.3.2.2)
$$\\bar{\\lambda}_{LT} = \\sqrt{\\frac{W_y f_y}{M_{cr}}} \\qquad \\Phi_{LT} = 0{,}5\\left[1 + \\alpha_{LT}(\\bar{\\lambda}_{LT} - 0{,}2) + \\bar{\\lambda}_{LT}^2\\right]$$
$$\\chi_{LT} = \\frac{1}{\\Phi_{LT} + \\sqrt{\\Phi_{LT}^2 - \\bar{\\lambda}_{LT}^2}} \\qquad M_{b,Rd} = \\chi_{LT} \\frac{W_y f_y}{\\gamma_{M1}}$$
Pour un profilé laminé en I : courbe a ($\\alpha_{LT} = 0{,}21$) si $h/b \\le 2$, courbe b (0,34) sinon.

### 4. Voilement par cisaillement des âmes
Une âme non raidie doit être vérifiée au voilement si $h_w / t_w > 72 \\varepsilon / \\eta$ (η = 1,2 pour les aciers jusqu'à S460 selon l'annexe nationale).`,
  },
  formulas: {
    title: 'Formules essentielles — Déversement et voilement',
    formulas: [
      {
        name: 'Coefficient matériau',
        latex: "\\varepsilon = \\sqrt{\\frac{235}{f_y}}",
        description: 'Utilisé dans toutes les limites d’élancement des parois.',
        vars: [
          ['\\varepsilon', 'Coefficient', '-', '1,00 (S235) ; 0,92 (S275) ; 0,81 (S355).'],
          ['f_y', "Limite d'élasticité", 'MPa', 'Nuance de l’acier.'],
        ],
      },
      {
        name: 'Moment critique de déversement',
        latex: "M_{cr} = C_1 \\frac{\\pi^2 E I_z}{L^2} \\sqrt{\\frac{I_w}{I_z} + \\frac{L^2 G I_t}{\\pi^2 E I_z}}",
        description: 'Section doublement symétrique, appuis à fourche, charge au centre de cisaillement.',
        vars: [
          ['M_{cr}', 'Moment critique élastique', 'kN·m', 'Moment de déversement de la poutre parfaite.'],
          ['C_1', 'Facteur de moment', '-', '1,13 pour une charge uniforme sur appuis simples.'],
          ['I_z', "Inertie selon l'axe faible", 'mm⁴', 'Rigidité latérale.'],
          ['I_w', 'Inertie de gauchissement', 'mm⁶', 'Tables de profilés.'],
          ['I_t', 'Inertie de torsion', 'mm⁴', 'Tables de profilés.'],
          ['G', 'Module de cisaillement', 'MPa', '80 770 MPa.'],
          ['L', 'Longueur entre maintiens latéraux', 'mm', 'Longueur de déversement.'],
        ],
        rule: "Diviser par deux la longueur entre maintiens multiplie M_cr par environ 2,5 à 3 (davantage pour les profilés peu résistants en torsion).",
      },
      {
        name: 'Élancement réduit de déversement',
        latex: "\\bar{\\lambda}_{LT} = \\sqrt{\\frac{W_y \\, f_y}{M_{cr}}}",
        description: 'Pas de réduction si λ̄_LT ≤ 0,2 (méthode générale).',
        vars: [
          ['\\bar{\\lambda}_{LT}', 'Élancement réduit', '-', 'Compare la résistance de section à M_cr.'],
          ['W_y', 'Module de flexion', 'mm³', 'W_pl,y pour les classes 1 et 2.'],
        ],
      },
      {
        name: 'Résistance au déversement',
        latex: "\\chi_{LT} = \\frac{1}{\\Phi_{LT} + \\sqrt{\\Phi_{LT}^2 - \\bar{\\lambda}_{LT}^2}} \\qquad M_{b,Rd} = \\chi_{LT} \\frac{W_y f_y}{\\gamma_{M1}}",
        description: 'Φ_LT = 0,5 [1 + α_LT (λ̄_LT − 0,2) + λ̄_LT²].',
        vars: [
          ['\\chi_{LT}', 'Coefficient de réduction', '-', 'Entre 0 et 1.'],
          ['\\alpha_{LT}', "Facteur d'imperfection", '-', 'Courbe a : 0,21 ; b : 0,34 ; c : 0,49 ; d : 0,76.'],
          ['M_{b,Rd}', 'Moment résistant au déversement', 'kN·m', 'À comparer à M_Ed.'],
        ],
      },
      {
        name: 'Limite de voilement par cisaillement',
        latex: "\\frac{h_w}{t_w} \\le \\frac{72 \\, \\varepsilon}{\\eta}",
        description: 'Au-delà, l’âme non raidie doit être vérifiée au voilement (EN 1993-1-5).',
        vars: [
          ['h_w', "Hauteur de l'âme", 'mm', 'Entre semelles.'],
          ['t_w', "Épaisseur de l'âme", 'mm', 'Âme du profilé.'],
          ['\\eta', 'Coefficient', '-', '1,2 (S235 à S460, selon l’annexe nationale).'],
        ],
      },
    ],
  },
  stepbystep: {
    title: 'Calcul complet — Déversement d’un IPE 300 non maintenu sur 6 m',
    problem: "Poutre IPE 300 en S235 sur appuis à fourche, portée 6 m sans maintien latéral, charge uniforme (C₁ = 1,13). Données : I_z = 603,8 cm⁴, I_t = 20,12 cm⁴, I_w = 125 900 cm⁶, W_pl,y = 628,4 cm³. Calculer M_cr, χ_LT et M_b,Rd.",
    steps_demo: [
      { n: 1, text: "Terme d'Euler : π²E I_z / L² = 9,870 × 210 000 × 6,038 × 10⁶ / 6 000² = 347 600 N." },
      { n: 2, text: "Racine : √(I_w/I_z + L²G I_t / (π²E I_z)) = √(20 850 + 46 750) = 260,0 mm." },
      { n: 3, text: "M_cr = 1,13 × 347 600 × 260,0 = 102,1 kN·m." },
      { n: 4, text: "Élancement : λ̄_LT = √(628,4 × 10³ × 235 / 102,1 × 10⁶) = √1,446 = 1,203." },
      { n: 5, text: "Courbe a (h/b = 2) : Φ_LT = 0,5 × [1 + 0,21 × 1,003 + 1,446] = 1,328 ; χ_LT = 1 / (1,328 + √(1,765 − 1,446)) = 0,528." },
      { n: 6, text: "M_b,Rd = 0,528 × 147,7 = 78,0 kN·m, soit 53 % du moment plastique : le déversement gouverne." },
    ],
    result_latex: "M_{cr} = 102{,}1\\ \\text{kN·m} \\quad \\bar{\\lambda}_{LT} = 1{,}20 \\quad \\chi_{LT} = 0{,}528 \\quad M_{b,Rd} = 78{,}0\\ \\text{kN·m}",
  },
  units: {
    table: [
      ['Inertie de gauchissement I_w', 'cm⁶, mm⁶', 'in⁶', '1 cm⁶ = 10⁶ mm⁶'],
      ['Inertie de torsion I_t', 'cm⁴, mm⁴', 'in⁴', '1 cm⁴ = 10⁴ mm⁴'],
      ['Moment critique', 'kN·m', 'kip·ft', '1 kN·m = 0,7376 kip·ft'],
      ['Module de cisaillement G', 'MPa', 'ksi', '80 770 MPa = 11 715 ksi'],
      ['Élancement de paroi c/t', '-', '-', 'Sans dimension'],
    ],
    note: 'Attention aux puissances : I_w est en cm⁶ dans les tables (× 10⁶ pour les mm⁶), I_t et I_z en cm⁴ (× 10⁴).',
  },
  hypotheses: {
    items: [
      ['info', 'La formule de M_cr suppose des appuis à fourche (rotation de torsion empêchée, gauchissement libre) et une charge au centre de cisaillement.'],
      ['info', 'Une charge appliquée sur la semelle supérieure (déstabilisante) réduit M_cr ; appliquée sous la semelle inférieure, elle l’augmente.'],
      ['warning', 'En phase de montage, la poutre n’a pas encore ses maintiens définitifs : vérifier le déversement provisoire.'],
      ['warning', 'Les sections de classe 4 se calculent avec une section efficace réduite (EN 1993-1-5).'],
      ['tip', 'Un maintien latéral efficace doit tenir la semelle comprimée, pas la semelle tendue.'],
    ],
  },
  simple_examples: {
    examples: [
      {
        title: 'Exemple 1 : classe de la semelle d’un IPE 300',
        given: 'b = 150 mm, t_w = 7,1 mm, t_f = 10,7 mm, r = 15 mm, S235',
        find: 'c/t de la semelle et sa classe',
        solution_latex: "c = \\frac{150 - 7{,}1 - 2 \\times 15}{2} = 56{,}5\\ \\text{mm} \\qquad \\frac{c}{t_f} = \\frac{56{,}5}{10{,}7} = 5{,}3 \\le 9\\varepsilon",
        result: 'Semelle de classe 1.',
      },
      {
        title: 'Exemple 2 : effet d’un maintien à mi-portée',
        given: 'Même IPE 300, maintien latéral à mi-portée (L = 3 m entre maintiens)',
        find: 'Ordre de grandeur de M_cr',
        solution_latex: "M_{cr}(3\\ \\text{m}) = 1{,}13 \\times 1\\,390\\,400 \\times \\sqrt{20\\,850 + 11\\,690} = 283\\ \\text{kN·m} \\approx 2{,}8 \\times M_{cr}(6\\ \\text{m})",
        result: 'λ̄_LT ≈ 0,72 → χ_LT ≈ 0,84 : la poutre retrouve l’essentiel de sa résistance (C₁ conservé à 1,13 par simplicité).',
      },
      {
        title: 'Exemple 3 : voilement de l’âme d’un PRS',
        given: 'Âme 1 200 × 8 mm en S355 (ε = 0,81), η = 1,2',
        find: 'Faut-il vérifier le voilement par cisaillement ?',
        solution_latex: "\\frac{h_w}{t_w} = 150 > \\frac{72 \\times 0{,}81}{1{,}2} = 48{,}6",
        result: 'Oui : âme élancée, raidisseurs transversaux à prévoir ou vérification selon l’EN 1993-1-5.',
      },
    ],
  },
  real_examples: {
    title: 'Exemple réel — Déversement en phase de montage',
    examples: [
      {
        context: 'Pose de poutres métalliques de 25 m d’un pont mixte avant coulage de la dalle',
        scenario: "Les deux poutres principales, posées sans leurs entretoises provisoires, ont déversé sous l'effet du vent et des efforts de montage, entraînant leur chute. En service, la dalle connectée aurait maintenu la semelle supérieure.",
        decomposition_latex: "L_{déversement} = 25\\ \\text{m (montage)} \\gg L_{service} \\approx 0 \\ (\\text{dalle connectée})",
        lesson: "Chaque phase de montage est une structure différente : le plan de montage doit prévoir entretoises et contreventements provisoires dimensionnés.",
      },
    ],
  },
  diagrams: {
    title: 'Schéma de principe — Vérification d’une poutre au déversement',
    diagram_description: [
      'Classe de section : c/t des semelles et de l’âme → W_pl ou W_el',
      'Maintiens latéraux : longueur L entre points de maintien de la semelle comprimée',
      'Diagramme de moments : facteur C₁',
      'Moment critique M_cr (formule ou logiciel)',
      'λ̄_LT, Φ_LT, χ_LT selon la courbe de déversement',
      'M_b,Rd ≥ M_Ed, sinon ajouter des maintiens ou changer de profilé',
    ],
  },
  mistakes: {
    items: [
      ['Considérer une poutre maintenue par une simple dalle posée', 'Maintien non garanti', 'Connecter la dalle ou fixer le bac pour assurer un maintien effectif.'],
      ['Placer les bracons sur la semelle tendue', 'Le déversement de la semelle comprimée n’est pas empêché', 'Maintenir la semelle comprimée (inférieure près des appuis de portique).'],
      ['Ignorer la classe de section', 'Moment plastique utilisé pour une section de classe 3 ou 4', 'Classer la section avant de choisir W_pl, W_el ou W_eff.'],
    ],
  },
  tips: {
    tips: [
      'Les logiciels gratuits (LTBeam) calculent M_cr pour des cas complexes (charges, appuis, maintiens).',
      'Un profilé HEA ou HEB, plus large, déverse beaucoup moins qu’un IPE de même hauteur.',
      'Les bracons reliant la semelle inférieure aux pannes sont la solution classique des traverses de portiques.',
      'Pour les âmes de PRS, des raidisseurs transversaux tous les 1 à 1,5 fois la hauteur règlent le voilement.',
    ],
  },
  norms: {
    norms: [
      ['NF EN 1993-1-1 §5.5', 'Classification des sections transversales.'],
      ['NF EN 1993-1-1 §6.3.2', 'Déversement des éléments fléchis.'],
      ['NF EN 1993-1-5', 'Plaques planes : voilement, sections efficaces.'],
      ['NF EN 1993-1-1/NA', 'Annexe nationale française (choix des courbes, η).'],
    ],
  },
  exercises: {
    exercises: [
      {
        level: 1,
        text: "Calculer ε pour un acier S355 et la limite c/t de classe 1 d'une semelle comprimée.",
        hint: 'ε = √(235/f_y).',
        answer_latex: "\\varepsilon = \\sqrt{\\frac{235}{355}} = 0{,}814 \\qquad 9\\varepsilon = 7{,}3",
        answer_text: 'ε = 0,81 ; c/t ≤ 7,3 pour la classe 1.',
      },
      {
        level: 2,
        text: 'Pour λ̄_LT = 0,80 et la courbe b (α_LT = 0,34), calculer χ_LT.',
        hint: 'Φ = 0,5 [1 + α(λ̄ − 0,2) + λ̄²].',
        answer_latex: "\\Phi_{LT} = 0{,}5 \\times [1 + 0{,}34 \\times 0{,}6 + 0{,}64] = 0{,}922 \\qquad \\chi_{LT} = \\frac{1}{0{,}922 + \\sqrt{0{,}850 - 0{,}64}} = 0{,}725",
        answer_text: 'χ_LT ≈ 0,73.',
      },
      {
        level: 3,
        text: 'Une poutre a W_pl = 1 019 cm³ (S235) et M_cr = 400 kN·m. Calculer M_b,Rd avec la courbe a.',
        hint: 'λ̄_LT = √(W f_y / M_cr).',
        answer_latex: "\\bar{\\lambda}_{LT} = \\sqrt{\\frac{239{,}5}{400}} = 0{,}774 \\quad \\Phi = 0{,}5[1 + 0{,}21 \\times 0{,}574 + 0{,}599] = 0{,}860 \\quad \\chi = 0{,}812 \\quad M_{b,Rd} = 0{,}812 \\times 239{,}5 = 194\\ \\text{kN·m}",
        answer_text: 'M_b,Rd ≈ 194 kN·m.',
      },
    ],
  },
  quiz: {
    title: 'Quiz — Instabilités',
    questions: [
      { q: 'Quelle semelle faut-il maintenir pour empêcher le déversement ?', options: ['La semelle tendue', 'La semelle comprimée', 'Aucune'], correct: 1, explain: 'Le déversement est le flambement latéral de la semelle comprimée.' },
      { q: 'Une section de classe 3 peut atteindre…', options: ['Son moment plastique', 'Son moment élastique', 'Ni l’un ni l’autre'], correct: 1, explain: 'Classe 3 : le voilement survient entre M_el et M_pl.' },
      { q: 'Que vaut C₁ pour une poutre sur appuis simples sous charge uniforme ?', options: ['1,00', '1,13', '2,50'], correct: 1, explain: 'C₁ ≈ 1,13 pour un diagramme parabolique.' },
    ],
  },
  exam_questions: {
    questions: [
      'Expliquez le phénomène de déversement et les paramètres qui influencent M_cr.',
      'Classez une section en I soumise à la flexion et justifiez le module de flexion à utiliser.',
      'Vérifiez une traverse de portique au déversement en tenant compte des maintiens par bracons.',
    ],
  },
  interview_questions: {
    questions: [
      ['Comment éviter le déversement d’une poutre de plancher ?', 'En maintenant la semelle comprimée : dalle béton connectée, bac acier fixé à chaque onde, solives ou entretoises rapprochées ; à défaut, choisir un profilé plus large (HEA, HEB) ou un caisson.'],
      ['Qu’est-ce qu’une section de classe 4 ?', "Une section dont les parois sont si minces qu'elles voilent localement avant d'atteindre la limite d'élasticité ; on calcule avec une section efficace réduite (largeurs efficaces) selon l'EN 1993-1-5."],
    ],
  },
  practical_case: {
    title: 'Cas pratique — Choix des maintiens d’une poutre de toiture',
    scenario: "Poutre IPE 300 en S235 de 6 m sous charge uniforme : M_Ed = 95 kN·m. Sans maintien, M_b,Rd = 78 kN·m (étape pas à pas).",
    description: 'Proposer une solution et la vérifier.',
    resolutions: [
      "\\text{Sans maintien : } \\frac{M_{Ed}}{M_{b,Rd}} = \\frac{95}{78} = 1{,}22 > 1 \\Rightarrow \\text{non vérifié}",
      "\\text{Maintien à mi-portée (panne fixée) : } M_{cr} \\approx 283\\ \\text{kN·m} \\Rightarrow \\bar{\\lambda}_{LT} \\approx 0{,}72 \\Rightarrow \\chi_{LT} \\approx 0{,}84",
      "M_{b,Rd} \\approx 0{,}84 \\times 147{,}7 = 124\\ \\text{kN·m} \\ge 95\\ \\text{kN·m} \\quad \\checkmark",
    ],
    conclusion: 'Un simple maintien latéral de la semelle comprimée à mi-portée suffit ; inutile de passer à un profilé plus lourd.',
  },
  summary: {
    content: `### Les instabilités de l'acier en 5 points
1. Classer la section ($\\varepsilon = \\sqrt{235/f_y}$) : classes 1 à 4.
2. Déversement : flambement latéral de la semelle comprimée.
3. $M_{cr}$ dépend de $I_z$, $I_t$, $I_w$, $L$ et $C_1$.
4. $\\bar\\lambda_{LT}$, $\\chi_{LT}$ puis $M_{b,Rd} = \\chi_{LT} W_y f_y / \\gamma_{M1}$.
5. Âmes minces : voilement si $h_w/t_w > 72\\varepsilon/\\eta$.`,
  },
  key_points: {
    points: [
      'ε = √(235 / f_y)',
      'Semelle classe 1 : c/t ≤ 9ε',
      'C₁ ≈ 1,13 sous charge uniforme',
      'M_b,Rd = χ_LT·W_y·f_y / γ_M1',
      'Maintenir la semelle comprimée',
    ],
  },
  self_assessment: {
    objectives: [
      'Je sais classer une section métallique',
      'Je sais calculer un moment critique de déversement',
      'Je sais vérifier une poutre au déversement selon l’EC3',
      'Je sais identifier un risque de voilement d’âme',
      "J'ai réussi le quiz avec au moins 2 bonnes réponses sur 3",
    ],
  },
});
