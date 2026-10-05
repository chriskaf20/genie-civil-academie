// ── Lesson: Aciers de construction — Module 23 ───────────────────────────────
import { buildLesson } from './build_lesson.js';

export const lesson_materiaux_aciers = buildLesson({
  moduleId: 23,
  slug: 'materiaux_aciers',
  lessonIndex: 2,
  title: "Aciers de Construction : Armatures B500, Aciers de Charpente S235–S355, Essai de Traction et Soudabilité",
  subtitle: 'Module 23 — Matériaux de Construction',
  level: 'Intermédiaire',
  duration: '6h',
  tags: ['Acier', 'B500B', 'S355', 'Essai de traction', 'Ductilité', 'Soudabilité', 'Corrosion'],
}, {
  definition: {
    title: 'Définition — L’acier, matériau ductile du génie civil',
    fr: 'Aciers de construction',
    en: 'Construction steels',
    metier: "Utilisés par les ingénieurs structure, les laboratoires d'essais, les charpentiers métalliques et les ferrailleurs.",
    content: `L'**acier** est un alliage de fer et de carbone (moins de 2 %, en pratique 0,1 à 0,25 % pour la construction) auquel on ajoute du manganèse et d'autres éléments. En génie civil, on rencontre trois familles :

- **Armatures pour béton armé** : barres et treillis à haute adhérence B500A, B500B, B500C (NF EN 10080, NF A 35-080).
- **Aciers de charpente** : profilés et tôles S235, S275, S355, S460 (NF EN 10025).
- **Aciers de précontrainte** : torons et fils à très haute résistance (Y1860 : $f_{pk}$ = 1 860 MPa).

### La propriété essentielle : la ductilité
Avant de rompre, l'acier se déforme plastiquement de façon importante : une structure prévient avant de céder. Les classes B500A, B et C diffèrent justement par leur ductilité.

> 💡 La lettre S signifie « structural » ; le nombre donne la limite d'élasticité minimale en MPa (pour les épaisseurs courantes).`,
  },
  importance: {
    content: `- **Dimensionnement** : $f_{yk}$, $E$ et la ductilité entrent directement dans les calculs EC2 et EC3.
- **Sécurité sismique** : les zones dissipatives exigent des aciers très ductiles (classe C).
- **Soudage** : un acier trop riche en carbone équivalent fissure à froid au soudage.
- **Durabilité** : la corrosion est la première cause de dégradation des ouvrages métalliques et en béton armé.

> ⚠️ **À retenir** : un acier « plus résistant » n'est pas toujours meilleur ; ductilité, soudabilité et ténacité comptent autant.`,
  },
  applications: {
    examples: [
      ['Ferraillage de poutres', 'Barres B500B, f_yk = 500 MPa, E = 200 GPa.'],
      ['Charpente de hall', 'Profilés S355 J2 laminés à chaud.'],
      ['Ouvrage parasismique', 'Armatures B500C pour les zones critiques.'],
      ['Pont précontraint', 'Torons T15S Y1860.'],
      ['Ambiance marine', 'Armatures inox ou galvanisées dans les zones très exposées.'],
    ],
  },
  theory: {
    title: 'Théorie — Comportement mécanique et classes',
    content: `### 1. Essai de traction
On tire une éprouvette jusqu'à rupture et on enregistre la courbe contrainte-déformation :
- domaine élastique linéaire : $\\sigma = E \\varepsilon$ ;
- **limite d'élasticité** $R_e$ (ou $f_y$) ;
- écrouissage jusqu'à la **résistance à la traction** $R_m$ (ou $f_t$, $f_u$) ;
- striction puis rupture ; **allongement** $A$ ou $\\varepsilon_{uk}$ sous charge maximale.

### 2. Classes de ductilité des armatures (EC2, annexe C)
| Classe | $k = (f_t/f_y)_k$ | $\\varepsilon_{uk}$ |
|---|---|---|
| A | ≥ 1,05 | ≥ 2,5 % |
| B | ≥ 1,08 | ≥ 5,0 % |
| C | 1,15 à 1,35 | ≥ 7,5 % |

### 3. Aciers de charpente (EC3, t ≤ 40 mm)
| Nuance | $f_y$ (MPa) | $f_u$ (MPa) |
|---|---|---|
| S235 | 235 | 360 |
| S275 | 275 | 430 |
| S355 | 355 | 490 |

La qualité (JR, J0, J2) indique la **ténacité** : énergie de rupture Charpy de 27 J à +20 °C, 0 °C ou −20 °C.

### 4. Soudabilité
Elle est évaluée par le **carbone équivalent** :
$$CEV = C + \\frac{Mn}{6} + \\frac{Cr + Mo + V}{5} + \\frac{Ni + Cu}{15}$$
Plus il est élevé, plus le risque de fissuration à froid augmente (préchauffage nécessaire).

### 5. Corrosion
En béton, l'acier est protégé par l'alcalinité (pH ≈ 13) ; la carbonatation ou les chlorures détruisent cette protection. En charpente, on protège par peinture, galvanisation ou acier autopatinable.`,
  },
  formulas: {
    title: 'Formules essentielles — Aciers',
    formulas: [
      {
        name: 'Loi de Hooke',
        latex: "\\sigma = E \\, \\varepsilon",
        description: 'Valable jusqu’à la limite d’élasticité.',
        vars: [
          ['\\sigma', 'Contrainte', 'MPa', ''],
          ['E', "Module d'Young", 'MPa', '200 000 (armatures, EC2) ; 210 000 (charpente, EC3).'],
          ['\\varepsilon', 'Déformation', '-', ''],
        ],
      },
      {
        name: 'Résultats de l’essai de traction',
        latex: "R_e = \\frac{F_e}{S_0} \\qquad R_m = \\frac{F_m}{S_0} \\qquad A = \\frac{L_u - L_0}{L_0}",
        description: 'Limite d’élasticité, résistance et allongement après rupture.',
        vars: [
          ['F_e, F_m', 'Force à la limite élastique et force maximale', 'N', ''],
          ['S_0', 'Section initiale', 'mm²', 'Section nominale pour les barres HA.'],
          ['L_0, L_u', 'Longueurs initiale et ultime entre repères', 'mm', ''],
        ],
      },
      {
        name: 'Masse linéique d’une barre',
        latex: "m = \\frac{\\pi d^2}{4} \\times 7\\,850 \\times 10^{-6} \\approx 0{,}00617 \\, d^2",
        description: 'Masse en kg/m pour un diamètre d en mm.',
        vars: [
          ['m', 'Masse linéique', 'kg/m', ''],
          ['d', 'Diamètre nominal', 'mm', ''],
        ],
        rule: 'HA10 : 0,617 kg/m ; HA12 : 0,888 ; HA16 : 1,578 ; HA20 : 2,466.',
      },
      {
        name: 'Carbone équivalent (IIW)',
        latex: "CEV = C + \\frac{Mn}{6} + \\frac{Cr + Mo + V}{5} + \\frac{Ni + Cu}{15}",
        description: 'Indicateur de soudabilité, teneurs en % massique.',
        vars: [
          ['CEV', 'Carbone équivalent', '%', 'Valeurs maximales fixées par la norme de produit.'],
          ['C, Mn, Cr…', 'Teneurs des éléments', '%', 'Certificat matière 3.1.'],
        ],
      },
    ],
  },
  stepbystep: {
    title: 'Calcul complet — Interprétation d’un essai de traction sur HA12',
    problem: "Une barre HA12 (S₀ = 113,1 mm²) atteint sa limite d'élasticité à 57,5 kN et rompt sous 64,0 kN. La déformation sous force maximale mesurée vaut 6,2 %. La barre est-elle conforme à la classe B500B ?",
    steps_demo: [
      { n: 1, text: "Limite d'élasticité : R_e = 57 500 / 113,1 = 508 MPa ≥ 500 MPa : conforme." },
      { n: 2, text: "Résistance : R_m = 64 000 / 113,1 = 566 MPa." },
      { n: 3, text: "Rapport k = 566 / 508 = 1,114 ≥ 1,08 : conforme classe B." },
      { n: 4, text: "Allongement sous charge maximale : 6,2 % ≥ 5,0 % : conforme classe B." },
      { n: 5, text: "Conclusion : la barre satisfait B500B (mais pas B500C, qui exige ε_uk ≥ 7,5 %)." },
    ],
    result_latex: "R_e = \\frac{57\\,500}{113{,}1} = 508\\ \\text{MPa} \\qquad k = \\frac{566}{508} = 1{,}11 \\geq 1{,}08 \\qquad \\varepsilon_u = 6{,}2\\ \\% \\geq 5\\ \\%",
  },
  units: {
    table: [
      ['Contrainte', 'MPa', 'ksi', '1 ksi = 6,895 MPa'],
      ['Module E', 'GPa', 'ksi', '200 GPa = 29 000 ksi'],
      ['Masse volumique', 'kg/m³', 'lb/ft³', '7 850 kg/m³ = 490 lb/ft³'],
      ['Résilience', 'J', 'ft·lbf', '27 J ≈ 20 ft·lbf'],
      ['Dilatation thermique', '1/°C', '1/°F', '≈ 12 × 10⁻⁶ /°C (proche du béton)'],
    ],
    note: 'La proximité des coefficients de dilatation de l’acier et du béton rend possible le béton armé.',
  },
  hypotheses: {
    items: [
      ['info', 'Les valeurs f_y de S235 à S355 indiquées valent pour t ≤ 40 mm ; elles diminuent pour les fortes épaisseurs.'],
      ['info', 'Les caractéristiques des armatures sont garanties par la certification (marque NF-AFCAB en France).'],
      ['warning', 'Le soudage des armatures n’est autorisé que pour des aciers déclarés soudables et selon des procédures qualifiées.'],
      ['warning', 'Le pliage à un mandrin trop petit fissure les barres : respecter les diamètres de mandrin de l’EC2.'],
      ['tip', 'Demandez toujours le certificat de réception 3.1 (NF EN 10204) pour les aciers de charpente.'],
    ],
  },
  simple_examples: {
    examples: [
      {
        title: 'Exemple 1 : masse d’armatures',
        given: '24 barres HA16 de 6,00 m',
        find: 'Masse totale',
        solution_latex: "24 \\times 6{,}00 \\times 1{,}578 = 227{,}2\\ \\text{kg}",
        result: 'Environ 227 kg.',
      },
      {
        title: 'Exemple 2 : allongement élastique',
        given: 'Tirant S355 de 4,0 m, contrainte 200 MPa',
        find: 'Allongement',
        solution_latex: "\\Delta L = \\frac{\\sigma}{E} L = \\frac{200}{210\\,000} \\times 4\\,000 = 3{,}8\\ \\text{mm}",
        result: '3,8 mm.',
      },
      {
        title: 'Exemple 3 : carbone équivalent',
        given: 'C = 0,18 ; Mn = 1,40 ; Cr + Mo + V = 0,08 ; Ni + Cu = 0,30 (en %)',
        find: 'CEV',
        solution_latex: "CEV = 0{,}18 + \\frac{1{,}40}{6} + \\frac{0{,}08}{5} + \\frac{0{,}30}{15} = 0{,}449",
        result: 'CEV ≈ 0,45 : acier soudable, préchauffage à étudier pour les fortes épaisseurs.',
      },
    ],
  },
  real_examples: {
    title: 'Exemple réel — Ruptures fragiles des navires Liberty',
    examples: [
      {
        context: 'Navires soudés construits en série pendant la Seconde Guerre mondiale',
        scenario: "Plusieurs centaines de navires ont subi des fissures importantes et certains se sont brisés en deux, souvent par temps froid. L'acier, ductile à température ambiante, devenait fragile au froid ; les angles vifs et les défauts de soudure amorçaient les fissures.",
        decomposition_latex: "\\text{Basse température} + \\text{acier peu tenace} + \\text{concentration de contraintes} \\Rightarrow \\text{rupture fragile}",
        lesson: "La ténacité (essai Charpy, qualités J0, J2, K2) doit être choisie selon la température minimale de service et l'épaisseur (EN 1993-1-10).",
      },
    ],
  },
  diagrams: {
    title: 'Schéma de principe — Courbe contrainte-déformation de l’acier',
    diagram_description: [
      'Domaine élastique : droite de pente E',
      'Limite d’élasticité f_y (palier pour les aciers laminés à chaud)',
      'Écrouissage : la contrainte remonte jusqu’à f_u',
      'Striction : la section se réduit localement',
      'Rupture après un grand allongement (ductilité)',
    ],
  },
  mistakes: {
    items: [
      ['Utiliser E = 210 GPa en béton armé', 'Légère erreur sur les déformations', 'EC2 : E_s = 200 GPa ; EC3 : E = 210 GPa.'],
      ['Ignorer la qualité J0/J2', 'Risque de rupture fragile au froid', 'Choisir la qualité selon EN 1993-1-10.'],
      ['Souder une armature non soudable', 'Fragilisation de la barre', 'Utiliser des coupleurs ou des recouvrements.'],
    ],
  },
  tips: {
    tips: [
      'Retenez : HA12 ≈ 0,9 kg/m, HA16 ≈ 1,6 kg/m, HA20 ≈ 2,5 kg/m.',
      'Pour les zones sismiques, spécifiez B500C dans les zones critiques.',
      'Stockez les aciers sur cales, à l’abri de la boue et des sels.',
      'Contrôlez le marquage (nervures) des armatures pour vérifier l’origine et la classe.',
    ],
  },
  norms: {
    norms: [
      ['NF EN 10080 / NF A 35-080', 'Aciers pour l’armature du béton.'],
      ['NF EN 10025', 'Produits laminés à chaud en aciers de construction.'],
      ['NF EN ISO 6892-1', 'Essai de traction à température ambiante.'],
      ['NF EN 1993-1-10', 'Choix des qualités d’acier vis-à-vis de la ténacité.'],
      ['NF EN 10204', 'Documents de contrôle (certificats 3.1, 3.2).'],
    ],
  },
  exercises: {
    exercises: [
      {
        level: 1,
        text: 'Calculer la masse linéique d’une barre HA25.',
        hint: 'm ≈ 0,00617 d².',
        answer_latex: "0{,}00617 \\times 25^2 = 3{,}86\\ \\text{kg/m}",
        answer_text: '3,86 kg/m.',
      },
      {
        level: 2,
        text: 'Une éprouvette de L₀ = 60 mm mesure 87 mm après rupture. Calculer A.',
        hint: 'A = (L_u − L₀)/L₀.',
        answer_latex: "A = \\frac{87 - 60}{60} = 45\\ \\%",
        answer_text: 'A = 45 %.',
      },
      {
        level: 3,
        text: 'Une barre HA16 donne F_e = 104 kN, F_m = 118 kN, ε_u = 8,5 %. Quelle classe de ductilité ?',
        hint: 'S₀ = 201,1 mm² ; vérifier k et ε_u pour les classes B et C.',
        answer_latex: "R_e = 517\\ \\text{MPa} ; \\ R_m = 587\\ \\text{MPa} ; \\ k = 1{,}135",
        answer_text: 'k = 1,135 < 1,15 : pas classe C malgré ε_u = 8,5 % ; la barre est de classe B.',
      },
    ],
  },
  quiz: {
    title: 'Quiz — Aciers de construction',
    questions: [
      { q: 'Que signifie le 355 de S355 ?', options: ['La résistance à la traction', 'La limite d’élasticité minimale en MPa', 'La teneur en carbone'], correct: 1, explain: 'f_y = 355 MPa pour les épaisseurs courantes.' },
      { q: 'Quelle classe d’armature est la plus ductile ?', options: ['A', 'B', 'C'], correct: 2, explain: 'Classe C : ε_uk ≥ 7,5 %.' },
      { q: 'Que mesure l’essai Charpy ?', options: ['La dureté', 'La ténacité (énergie de rupture)', 'La limite d’élasticité'], correct: 1, explain: 'L’énergie absorbée par une éprouvette entaillée.' },
    ],
  },
  exam_questions: {
    questions: [
      'Décrivez l’essai de traction et les grandeurs qu’on en tire.',
      'Comparez les classes de ductilité A, B et C des armatures.',
      'Expliquez la notion de soudabilité et le carbone équivalent.',
    ],
  },
  interview_questions: {
    questions: [
      ['Pourquoi la ductilité est-elle si importante ?', 'Elle permet la redistribution des efforts, l’alerte visible avant rupture et la dissipation d’énergie en séisme.'],
      ['Comment protégez-vous une charpente contre la corrosion ?', 'Selon la catégorie de corrosivité (ISO 12944) : système de peinture adapté, galvanisation à chaud ou duplex, détails évitant les rétentions d’eau, et inspection périodique.'],
    ],
  },
  practical_case: {
    title: 'Cas pratique — Réception d’un lot d’armatures',
    scenario: 'Un lot de HA20 B500B arrive sur chantier ; trois essais de traction donnent : R_e = 525, 532, 519 MPa ; R_m = 590, 598, 575 MPa ; ε_u = 6,8 ; 7,1 ; 5,9 %.',
    description: 'Vérifier la conformité du lot.',
    resolutions: [
      "R_{e,min} = 519\\ \\text{MPa} \\geq 500 \\Rightarrow \\text{conforme}",
      "k_{min} = \\min\\left(\\frac{590}{525}, \\frac{598}{532}, \\frac{575}{519}\\right) = \\min(1{,}124 ; 1{,}124 ; 1{,}108) = 1{,}108 \\geq 1{,}08",
      "\\varepsilon_{u,min} = 5{,}9\\ \\% \\geq 5{,}0\\ \\% \\Rightarrow \\text{lot conforme B500B}",
    ],
    conclusion: 'Le lot est accepté ; les résultats et certificats sont archivés dans le dossier qualité.',
  },
  summary: {
    content: `### Les aciers en 5 points
1. Armatures B500 (EC2, E = 200 GPa) ; charpente S235–S355 (EC3, E = 210 GPa).
2. Essai de traction : $R_e$, $R_m$, $A$.
3. Ductilité : classes A, B, C selon $k$ et $\\varepsilon_{uk}$.
4. Ténacité (JR, J0, J2) et soudabilité (CEV).
5. Masse : $m \\approx 0{,}00617 d^2$ kg/m ; protection contre la corrosion.`,
  },
  key_points: {
    points: [
      'B500B : k ≥ 1,08 ; ε_uk ≥ 5 %',
      'S355 : f_y = 355 ; f_u = 490 MPa',
      'm ≈ 0,00617 d² kg/m',
      'Ténacité : essai Charpy',
      'CEV élevé → préchauffage',
    ],
  },
  self_assessment: {
    objectives: [
      'Je sais exploiter un essai de traction',
      'Je connais les classes de ductilité des armatures',
      'Je connais les nuances d’acier de charpente',
      'Je sais calculer une masse d’armatures',
      "J'ai réussi le quiz avec au moins 2 bonnes réponses sur 3",
    ],
  },
});
