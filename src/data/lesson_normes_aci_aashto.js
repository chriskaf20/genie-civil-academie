// ── Lesson: Codes américains ACI et AASHTO — Module 28 ───────────────────────
import { buildLesson } from './build_lesson.js';

export const lesson_normes_aci_aashto = buildLesson({
  moduleId: 28,
  slug: 'normes_aci_aashto',
  lessonIndex: 3,
  title: "Codes Américains : ACI 318, ASCE 7 et AASHTO LRFD — Combinaisons, Facteurs φ et Comparaison avec les Eurocodes",
  subtitle: 'Module 28 — Normes & Réglementations',
  level: 'Avancé',
  duration: '6h',
  tags: ['ACI 318', 'ASCE 7', 'AASHTO LRFD', 'LRFD', 'Facteur φ', 'Unités impériales', 'International'],
}, {
  definition: {
    title: 'Définition — Les codes de référence en Amérique du Nord et à l’international',
    fr: 'Codes de construction américains',
    en: 'US building and bridge codes',
    metier: "Utilisés par les ingénieurs travaillant sur des projets internationaux, au Moyen-Orient, en Afrique, en Asie et en Amérique.",
    content: `De nombreux projets internationaux sont calculés selon les **codes américains** :

- **ASCE 7** : charges et combinaisons pour les bâtiments (équivalent des EN 1990 et EN 1991).
- **ACI 318** : béton armé des bâtiments (équivalent de l'EC2).
- **AISC 360** : charpente métallique (équivalent de l'EC3).
- **AASHTO LRFD Bridge Design Specifications** : ponts routiers.

### La philosophie LRFD
Comme les Eurocodes, on applique des **facteurs de charge** (supérieurs à 1) sur les actions. En revanche, la résistance est réduite par un **facteur φ** (inférieur à 1) appliqué à la résistance nominale :
$$\\phi R_n \\geq U = \\sum \\gamma_i Q_i$$

> 💡 Les codes américains utilisent les unités impériales (psi, ksi, kip, in, ft) : la conversion fiable des unités est une compétence essentielle.`,
  },
  importance: {
    content: `- **Marchés internationaux** : de nombreux pays imposent ACI/AASHTO ou s'en inspirent.
- **Comparaison** : un même ouvrage dimensionné avec deux codes peut aboutir à des sections différentes.
- **Contrats** : le code de référence est une donnée contractuelle majeure.
- **Erreur d'unités** : source classique d'accidents et d'erreurs de calcul.

> ⚠️ **À retenir** : ne mélangez jamais les facteurs de charge d'un code avec les facteurs de résistance d'un autre.`,
  },
  applications: {
    examples: [
      ['Tour au Moyen-Orient', 'ASCE 7 pour le vent et le séisme, ACI 318 pour le béton.'],
      ['Pont routier', 'AASHTO LRFD avec le chargement HL-93.'],
      ['Usine en Afrique', 'Cahier des charges client en ACI/AISC.'],
      ['Projet financé par une banque internationale', 'Codes américains ou Eurocodes selon le contrat.'],
      ['Comparaison de variantes', 'Calcul croisé EC2 / ACI 318.'],
    ],
  },
  theory: {
    title: 'Théorie — Combinaisons et résistances',
    content: `### 1. Combinaisons ASCE 7 (principales)
$$U = 1{,}4D \\qquad U = 1{,}2D + 1{,}6L + 0{,}5(L_r \\text{ ou } S)$$
D : charges permanentes ; L : exploitation ; S : neige ; W : vent ; E : séisme.

### 2. Facteurs φ de l'ACI 318
| Cas | φ |
|---|---|
| Flexion, section à rupture ductile (tension-controlled) | 0,90 |
| Effort tranchant et torsion | 0,75 |
| Compression, armatures transversales en cadres | 0,65 |
| Compression, frettes hélicoïdales | 0,75 |

### 3. Flexion d'une poutre rectangulaire (ACI 318)
Bloc de contraintes rectangulaire de hauteur $a$ et d'intensité $0{,}85 f'_c$ :
$$a = \\frac{A_s f_y}{0{,}85 f'_c b} \\qquad M_n = A_s f_y \\left(d - \\frac{a}{2}\\right)$$
On vérifie $\\phi M_n \\geq M_u$ et la ductilité ($\\varepsilon_t \\geq 0{,}005$ pour φ = 0,90).

### 4. AASHTO LRFD (ponts)
Combinaison Strength I typique : $1{,}25\\,DC + 1{,}50\\,DW + 1{,}75\\,(LL + IM)$, avec le chargement **HL-93** (camion de conception ou tandem, plus une charge répartie de 0,64 kip/ft) et un coefficient dynamique IM = 33 % sur les charges de camion.

### 5. Comparaison avec les Eurocodes
| Élément | Eurocodes | ASCE 7 / ACI |
|---|---|---|
| Charges permanentes | 1,35 G | 1,2 D |
| Exploitation | 1,5 Q | 1,6 L |
| Résistance béton | $f_{ck}/1{,}5$ | $\\phi \\times 0{,}85 f'_c$ |
| Résistance acier | $f_{yk}/1{,}15$ | $\\phi f_y$ |`,
  },
  formulas: {
    title: 'Formules essentielles — ACI 318 et ASCE 7',
    formulas: [
      {
        name: 'Combinaison fondamentale ASCE 7',
        latex: "U = 1{,}2D + 1{,}6L",
        description: 'Combinaison la plus courante pour les planchers.',
        vars: [
          ['U', 'Effort ultime requis', 'kip ou kN', ''],
          ['D', 'Charges permanentes', 'kip ou kN', 'Dead load.'],
          ['L', "Charges d'exploitation", 'kip ou kN', 'Live load.'],
        ],
      },
      {
        name: 'Hauteur du bloc de compression',
        latex: "a = \\frac{A_s f_y}{0{,}85 f'_c b}",
        description: 'Équilibre entre traction des armatures et compression du béton.',
        vars: [
          ['A_s', 'Section d’armatures tendues', 'in²', ''],
          ['f_y', "Limite d'élasticité", 'ksi', '60 ksi courant (Grade 60).'],
          ["f'_c", 'Résistance spécifiée du béton', 'ksi', '4 ksi ≈ 27,6 MPa.'],
          ['b', 'Largeur de la poutre', 'in', ''],
        ],
      },
      {
        name: 'Moment nominal',
        latex: "M_n = A_s f_y \\left(d - \\frac{a}{2}\\right) \\qquad \\phi M_n \\geq M_u",
        description: 'Résistance en flexion d’une section rectangulaire simplement armée.',
        vars: [
          ['M_n', 'Moment nominal', 'kip·in', ''],
          ['d', 'Hauteur utile', 'in', ''],
          ['\\phi', 'Facteur de résistance', '-', '0,90 si ε_t ≥ 0,005.'],
          ['M_u', 'Moment ultime requis', 'kip·in', ''],
        ],
      },
      {
        name: 'Déformation des armatures tendues',
        latex: "c = \\frac{a}{\\beta_1} \\qquad \\varepsilon_t = 0{,}003 \\, \\frac{d - c}{c}",
        description: 'Contrôle de ductilité.',
        vars: [
          ['c', 'Profondeur de l’axe neutre', 'in', ''],
          ['\\beta_1', 'Coefficient du bloc', '-', '0,85 pour f′c ≤ 4 ksi.'],
          ['\\varepsilon_t', 'Déformation des armatures', '-', '≥ 0,005 : section ductile.'],
        ],
      },
    ],
  },
  stepbystep: {
    title: 'Calcul complet — Poutre en béton armé selon l’ACI 318',
    problem: "Poutre rectangulaire b = 12 in, d = 21,5 in, armée de 3 barres #8 (A_s = 3 × 0,79 = 2,37 in²), f'c = 4 ksi, f_y = 60 ksi. Charges : D = 1,2 kip/ft, L = 1,0 kip/ft, portée simple 24 ft. Vérifier la flexion.",
    steps_demo: [
      { n: 1, text: "w_u = 1,2 × 1,2 + 1,6 × 1,0 = 3,04 kip/ft ; M_u = 3,04 × 24² / 8 = 218,9 kip·ft." },
      { n: 2, text: "a = 2,37 × 60 / (0,85 × 4 × 12) = 142,2 / 40,8 = 3,49 in." },
      { n: 3, text: "M_n = 142,2 × (21,5 − 1,74) = 2 810 kip·in = 234,2 kip·ft." },
      { n: 4, text: "Ductilité : c = 3,49 / 0,85 = 4,10 in ; ε_t = 0,003 × (21,5 − 4,10) / 4,10 = 0,0127 ≥ 0,005 : φ = 0,90." },
      { n: 5, text: "φM_n = 0,90 × 234,2 = 210,8 kip·ft < M_u = 218,9 kip·ft : la poutre est insuffisante d'environ 4 %. Passer à 2 #8 + 2 #7 ou augmenter d." },
    ],
    result_latex: "\\phi M_n = 0{,}90 \\times 2{,}37 \\times 60 \\times \\left(21{,}5 - \\frac{3{,}49}{2}\\right) / 12 = 210{,}8\\ \\text{kip·ft} < M_u = 218{,}9\\ \\text{kip·ft}",
  },
  units: {
    table: [
      ['Contrainte', 'MPa', 'psi / ksi', '1 ksi = 6,895 MPa ; 4 000 psi = 27,6 MPa'],
      ['Force', 'kN', 'kip', '1 kip = 4,448 kN'],
      ['Charge linéique', 'kN/m', 'kip/ft', '1 kip/ft = 14,59 kN/m'],
      ['Moment', 'kN·m', 'kip·ft', '1 kip·ft = 1,356 kN·m'],
      ['Section d’acier', 'mm²', 'in²', '1 in² = 645,2 mm² ; barre #8 ≈ HA25'],
    ],
    note: 'Les barres américaines sont désignées en huitièmes de pouce : #8 = 8/8 in = 25,4 mm.',
  },
  hypotheses: {
    items: [
      ['info', "f'c est une résistance spécifiée, proche mais pas identique au f_ck des Eurocodes."],
      ['info', 'Les facteurs φ dépendent de l’édition de l’ACI 318 ; ceux indiqués correspondent aux éditions récentes.'],
      ['warning', 'Le chargement HL-93 d’AASHTO n’est pas transposable aux modèles de charge de l’EN 1991-2.'],
      ['warning', 'Ne convertissez pas une note de calcul en changeant seulement les unités : les combinaisons et résistances diffèrent.'],
      ['tip', 'Travaillez entièrement dans un système d’unités, et convertissez seulement les résultats.'],
    ],
  },
  simple_examples: {
    examples: [
      {
        title: 'Exemple 1 : conversion de résistance',
        given: "f'c = 5 000 psi",
        find: 'En MPa',
        solution_latex: "5 \\times 6{,}895 = 34{,}5\\ \\text{MPa}",
        result: '34,5 MPa (proche d’un C35/45).',
      },
      {
        title: 'Exemple 2 : comparaison de combinaisons',
        given: 'G = D = 20 kN/m ; Q = L = 15 kN/m',
        find: 'Charge ultime EC0 et ASCE 7',
        solution_latex: "\\text{EC} : 1{,}35 \\times 20 + 1{,}5 \\times 15 = 49{,}5 \\qquad \\text{ASCE} : 1{,}2 \\times 20 + 1{,}6 \\times 15 = 48{,}0\\ \\text{kN/m}",
        result: 'Les deux combinaisons sont proches pour ce rapport Q/G.',
      },
      {
        title: 'Exemple 3 : charge AASHTO',
        given: 'DC = 30 kN/m ; DW = 5 kN/m ; LL + IM = 25 kN/m',
        find: 'Strength I',
        solution_latex: "1{,}25 \\times 30 + 1{,}50 \\times 5 + 1{,}75 \\times 25 = 37{,}5 + 7{,}5 + 43{,}75 = 88{,}75\\ \\text{kN/m}",
        result: 'Environ 88,8 kN/m.',
      },
    ],
  },
  real_examples: {
    title: 'Exemple réel — La perte de Mars Climate Orbiter',
    examples: [
      {
        context: 'Sonde spatiale de la NASA (1999), un cas d’école repris en ingénierie',
        scenario: "Un logiciel fournissait des impulsions en livres-force·seconde alors que le logiciel de navigation attendait des newtons·seconde. L'erreur d'un facteur 4,45 a conduit la sonde sur une trajectoire trop basse, où elle a été perdue.",
        decomposition_latex: "1\\ \\text{lbf·s} = 4{,}448\\ \\text{N·s} \\Rightarrow \\text{erreur systématique} \\Rightarrow \\text{perte de la sonde}",
        lesson: "Sur les projets internationaux, chaque interface de données doit préciser ses unités ; les logiciels doivent être contrôlés par des calculs manuels.",
      },
    ],
  },
  diagrams: {
    title: 'Schéma de principe — Vérification LRFD',
    diagram_description: [
      'Charges nominales : D, L, S, W, E (ASCE 7) ou DC, DW, LL (AASHTO)',
      'Combinaisons pondérées : U = Σ γ Q',
      'Analyse structurale : efforts ultimes M_u, V_u, P_u',
      'Résistance nominale : M_n, V_n, P_n',
      'Résistance de calcul : φ R_n',
      'Vérification : φ R_n ≥ U',
    ],
  },
  mistakes: {
    items: [
      ['Mélanger 1,35 G et φ de l’ACI', 'Niveau de sécurité incohérent', 'Utiliser un code complet et cohérent.'],
      ['Oublier de convertir kip·in en kip·ft', 'Erreur d’un facteur 12', 'Vérifier les unités à chaque ligne.'],
      ['Prendre φ = 0,90 sans contrôler ε_t', 'Section fragile surestimée', 'Calculer ε_t et réduire φ si nécessaire.'],
    ],
  },
  tips: {
    tips: [
      'Retenez : 1 ksi ≈ 6,9 MPa ; 1 kip ≈ 4,45 kN ; 1 kip·ft ≈ 1,36 kN·m.',
      'Préparez une feuille de conversion validée pour le projet.',
      'Lisez le commentaire de l’ACI 318 : il explique l’origine des règles.',
      'Vérifiez l’édition de code exigée par le contrat (ACI 318-19, AASHTO 9e édition…).',
    ],
  },
  norms: {
    norms: [
      ['ACI 318', 'Building Code Requirements for Structural Concrete.'],
      ['ASCE/SEI 7', 'Minimum Design Loads and Associated Criteria for Buildings.'],
      ['AISC 360', 'Specification for Structural Steel Buildings.'],
      ['AASHTO LRFD Bridge Design Specifications', 'Conception des ponts routiers.'],
      ['IBC (International Building Code)', 'Code de construction référençant ces normes.'],
    ],
  },
  exercises: {
    exercises: [
      {
        level: 1,
        text: 'Convertir 60 ksi en MPa.',
        hint: '1 ksi = 6,895 MPa.',
        answer_latex: "60 \\times 6{,}895 = 413{,}7\\ \\text{MPa}",
        answer_text: '413,7 MPa (Grade 60).',
      },
      {
        level: 2,
        text: 'D = 2,0 kip/ft ; L = 1,5 kip/ft. Calculer w_u selon ASCE 7 et vérifier la combinaison 1,4D.',
        hint: 'Garder la plus grande.',
        answer_latex: "1{,}2 \\times 2{,}0 + 1{,}6 \\times 1{,}5 = 4{,}8 \\qquad 1{,}4 \\times 2{,}0 = 2{,}8 \\Rightarrow w_u = 4{,}8\\ \\text{kip/ft}",
        answer_text: '4,8 kip/ft.',
      },
      {
        level: 3,
        text: "Calculer φM_n d'une poutre b = 14 in, d = 24 in, A_s = 3,16 in² (4 #8), f'c = 4 ksi, f_y = 60 ksi.",
        hint: 'a puis M_n ; vérifier ε_t.',
        answer_latex: "a = \\frac{189{,}6}{47{,}6} = 3{,}98\\ \\text{in} \\quad \\phi M_n = 0{,}9 \\times 189{,}6 \\times (24 - 1{,}99)/12 = 313\\ \\text{kip·ft}",
        answer_text: 'φM_n ≈ 313 kip·ft (c = 4,68 in, ε_t = 0,0124 : φ = 0,90 validé).',
      },
    ],
  },
  quiz: {
    title: 'Quiz — Codes américains',
    questions: [
      { q: 'Quelle est la combinaison principale ASCE 7 pour un plancher ?', options: ['1,35D + 1,5L', '1,2D + 1,6L', '1,0D + 1,0L'], correct: 1, explain: 'U = 1,2D + 1,6L.' },
      { q: 'Quel est le facteur φ pour la flexion d’une section ductile (ACI 318) ?', options: ['0,65', '0,75', '0,90'], correct: 2, explain: 'φ = 0,90 pour une section tension-controlled.' },
      { q: 'Combien vaut 1 kip ?', options: ['1 kN', '4,448 kN', '10 kN'], correct: 1, explain: '1 kip = 1 000 lbf = 4,448 kN.' },
    ],
  },
  exam_questions: {
    questions: [
      'Comparez la philosophie des Eurocodes et celle de l’ACI 318.',
      'Détaillez le calcul de flexion d’une poutre rectangulaire selon l’ACI 318.',
      'Présentez la combinaison Strength I d’AASHTO et le chargement HL-93.',
    ],
  },
  interview_questions: {
    questions: [
      ['Vous reprenez un projet calculé en ACI pour le passer en Eurocodes : comment procédez-vous ?', 'Je reprends les charges selon l’EN 1991, les combinaisons de l’EN 1990, les propriétés des matériaux et toutes les vérifications ; je ne convertis pas les résultats, je refais le calcul.'],
      ['Comment évitez-vous les erreurs d’unités ?', 'Un seul système par note, des conversions centralisées, des calculs de contrôle à la main et une relecture croisée.'],
    ],
  },
  practical_case: {
    title: 'Cas pratique — Comparer une poutre selon les deux codes',
    scenario: "Poutre de 7,30 m (24 ft) : G = 17,5 kN/m (1,2 kip/ft), Q = 14,6 kN/m (1,0 kip/ft). Section 305 × 610 mm, d = 546 mm, A_s = 1 529 mm² (3 #8), béton 27,6 MPa, acier 414 MPa.",
    description: 'Comparer M_Ed et M_Rd selon l’EC2 et l’ACI 318 (bloc simplifié EC2 : 0,8x, η = 1).',
    resolutions: [
      "\\text{EC2} : M_{Ed} = (1{,}35 \\times 17{,}5 + 1{,}5 \\times 14{,}6) \\times 7{,}3^2/8 = 303\\ \\text{kN·m}",
      "M_{Rd} = 1\\,529 \\times 360 \\times (546 - 0{,}5 \\times \\frac{1\\,529 \\times 360}{305 \\times 18{,}4}) = 274\\ \\text{kN·m}",
      "\\text{ACI} : M_u = 218{,}9\\ \\text{kip·ft} = 297\\ \\text{kN·m} \\qquad \\phi M_n = 210{,}8\\ \\text{kip·ft} = 286\\ \\text{kN·m}",
    ],
    conclusion: 'Les deux codes concluent à une section insuffisante, avec des écarts de 10 % (EC2) et 4 % (ACI) : les niveaux de sécurité sont proches mais pas identiques.',
  },
  summary: {
    content: `### Les codes américains en 5 points
1. ASCE 7 (charges), ACI 318 (béton), AISC 360 (acier), AASHTO LRFD (ponts).
2. LRFD : $\\phi R_n \\geq \\sum \\gamma_i Q_i$.
3. Combinaison courante : $1{,}2D + 1{,}6L$.
4. Flexion : $a = A_s f_y / (0{,}85 f'_c b)$, $M_n = A_s f_y (d - a/2)$, φ = 0,90.
5. Unités impériales : 1 ksi = 6,895 MPa, 1 kip = 4,448 kN.`,
  },
  key_points: {
    points: [
      'U = 1,2D + 1,6L',
      'φ = 0,90 flexion ; 0,75 tranchant',
      'a = A_s f_y / (0,85 f′c b)',
      'Strength I : 1,25DC + 1,5DW + 1,75(LL+IM)',
      'Un code complet, jamais mélangé',
    ],
  },
  self_assessment: {
    objectives: [
      'Je connais les principaux codes américains',
      'Je sais former les combinaisons ASCE 7',
      'Je sais vérifier une poutre en flexion selon l’ACI 318',
      'Je sais convertir les unités impériales',
      "J'ai réussi le quiz avec au moins 2 bonnes réponses sur 3",
    ],
  },
});
