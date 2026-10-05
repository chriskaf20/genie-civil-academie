// ── Lesson: Poteaux mixtes — Module 40 ───────────────────────────────────────
import { buildLesson } from './build_lesson.js';

export const lesson_mixte_poteaux = buildLesson({
  moduleId: 40,
  slug: 'mixte_poteaux',
  lessonIndex: 3,
  title: "Poteaux Mixtes Acier-Béton : Tubes Remplis, Profilés Enrobés, Résistance Plastique et Flambement (EC4)",
  subtitle: 'Module 40 — Structures mixtes acier-béton',
  level: 'Avancé',
  duration: '6h',
  tags: ['Poteau mixte', 'Tube rempli', 'Profilé enrobé', 'EC4', 'Flambement', 'Rigidité efficace', 'Feu'],
}, {
  definition: {
    title: 'Définition — Associer acier et béton dans un même poteau',
    fr: 'Poteaux mixtes acier-béton',
    en: 'Composite columns',
    metier: "Utilisés par les ingénieurs structure de bâtiments de grande hauteur, de parkings, de halls et de ponts.",
    content: `Un **poteau mixte** associe un profilé ou un tube en acier et du béton qui travaillent ensemble :

- **Tube rempli de béton** (CFT) : tube circulaire ou rectangulaire rempli ; le tube sert de coffrage et **confine** le béton.
- **Profilé totalement enrobé** : profilé en H noyé dans du béton armé ; bonne résistance au feu.
- **Profilé partiellement enrobé** : béton entre les ailes du profilé.

### Avantages
- Sections plus compactes qu'en béton armé, plus rigides qu'en acier seul.
- **Résistance au feu** améliorée par le béton (masse thermique).
- Montage rapide : le tube sert de coffrage.

### Principe de calcul (EC4 § 6.7)
On additionne les résistances plastiques de l'acier, du béton et des armatures, puis on applique un coefficient de **flambement** calculé avec une **rigidité efficace** de la section mixte.

> 💡 Le rapport de contribution $\\delta$ (part de l'acier dans la résistance) doit être compris entre 0,2 et 0,9 pour que le poteau soit considéré comme mixte.`,
  },
  importance: {
    content: `- **Tours** : les poteaux mixtes réduisent les sections et augmentent les surfaces utiles.
- **Parkings et halls** : grande résistance pour un encombrement réduit.
- **Feu** : un tube rempli peut atteindre 60 à 120 min avec des armatures intérieures.
- **Séisme** : bonne ductilité des tubes remplis grâce au confinement.

> ⚠️ **À retenir** : le béton d'un tube rempli doit être bien compacté (béton autoplaçant conseillé) et le tube doit comporter des évents pour la vapeur en cas d'incendie.`,
  },
  applications: {
    examples: [
      ['Immeuble de grande hauteur', 'Poteaux mixtes à profilé enrobé en partie basse.'],
      ['Parking métallique', 'Tubes circulaires remplis de béton.'],
      ['Gare ou aéroport', 'Grands tubes remplis, esthétiques et fins.'],
      ['Pile de pont', 'Tubes remplis de grand diamètre.'],
      ['Renforcement', 'Chemisage métallique d’un poteau béton existant.'],
    ],
  },
  theory: {
    title: 'Théorie — Résistance et flambement',
    content: `### 1. Résistance plastique en compression
$$N_{pl,Rd} = A_a f_{yd} + \\alpha_c A_c f_{cd} + A_s f_{sd}$$
$\\alpha_c$ = 0,85 pour les profilés enrobés, **1,0 pour les tubes remplis** (effet de confinement partiel).

### 2. Rapport de contribution
$$\\delta = \\frac{A_a f_{yd}}{N_{pl,Rd}} \\qquad 0{,}2 \\leq \\delta \\leq 0{,}9$$

### 3. Rigidité efficace et charge critique
$$(EI)_{eff} = E_a I_a + E_s I_s + 0{,}6 \\, E_{cm} I_c \\qquad N_{cr} = \\frac{\\pi^2 (EI)_{eff}}{L_{cr}^2}$$

### 4. Élancement réduit et flambement
$$\\bar{\\lambda} = \\sqrt{\\frac{N_{pl,Rk}}{N_{cr}}} \\qquad N_{b,Rd} = \\chi \\, N_{pl,Rd}$$
$\\chi$ selon les courbes de flambement de l'EC3 (courbe **a** pour les tubes remplis avec peu d'armatures, **b** ou **c** pour les profilés enrobés selon l'axe).

### 5. Confinement des tubes circulaires
Pour les tubes circulaires peu élancés ($\\bar{\\lambda} \\leq 0{,}5$) et faiblement excentrés, l'EC4 permet de majorer la résistance du béton grâce au confinement.`,
  },
  formulas: {
    title: 'Formules essentielles — Poteaux mixtes (EC4)',
    formulas: [
      {
        name: 'Résistance plastique',
        latex: "N_{pl,Rd} = A_a f_{yd} + \\alpha_c A_c f_{cd} + A_s f_{sd}",
        description: 'Somme des contributions des trois matériaux.',
        vars: [
          ['A_a', 'Aire du profilé ou tube', 'mm²', ''],
          ['A_c', 'Aire de béton', 'mm²', ''],
          ['A_s', 'Aire des armatures', 'mm²', ''],
          ['\\alpha_c', 'Coefficient du béton', '-', '0,85 enrobé ; 1,0 tube rempli.'],
        ],
      },
      {
        name: 'Rigidité efficace',
        latex: "(EI)_{eff} = E_a I_a + E_s I_s + 0{,}6 \\, E_{cm} I_c",
        description: 'Pour le calcul de la charge critique.',
        vars: [
          ['E_{cm}', 'Module du béton', 'MPa', '≈ 33 000 pour C30/37.'],
          ['I_c', 'Inertie du béton', 'mm⁴', 'Non fissuré.'],
        ],
      },
      {
        name: 'Élancement réduit',
        latex: "\\bar{\\lambda} = \\sqrt{\\frac{N_{pl,Rk}}{N_{cr}}} \\qquad N_{cr} = \\frac{\\pi^2 (EI)_{eff}}{L_{cr}^2}",
        description: 'N_pl,Rk calculé avec les résistances caractéristiques.',
        vars: [
          ['N_{pl,Rk}', 'Résistance caractéristique', 'N', 'Sans coefficients partiels.'],
          ['L_{cr}', 'Longueur de flambement', 'mm', ''],
        ],
      },
      {
        name: 'Résistance au flambement',
        latex: "N_{b,Rd} = \\chi \\, N_{pl,Rd} \\qquad \\chi = \\frac{1}{\\Phi + \\sqrt{\\Phi^2 - \\bar{\\lambda}^2}}",
        description: 'Courbes de flambement européennes.',
        vars: [
          ['\\Phi', 'Paramètre', '-', '0,5 [1 + α(λ̄ − 0,2) + λ̄²].'],
          ['\\alpha', 'Facteur d’imperfection', '-', '0,21 (courbe a) ; 0,34 (b) ; 0,49 (c).'],
        ],
      },
    ],
  },
  stepbystep: {
    title: 'Calcul complet — Tube circulaire rempli de béton',
    problem: "Poteau de 4,00 m (bi-articulé) en tube CHS 323,9 × 10 S355 rempli de béton C30/37 (f_cd = 20 MPa, E_cm = 33 000 MPa), sans armatures. Calculer N_pl,Rd, δ, λ̄ et N_b,Rd (courbe a).",
    steps_demo: [
      { n: 1, text: "Aires : A_a = π(323,9² − 303,9²)/4 = 9 861 mm² ; A_c = π × 303,9²/4 = 72 536 mm²." },
      { n: 2, text: "N_pl,Rd = 9 861 × 355 + 1,0 × 72 536 × 20 = 3 501 + 1 451 = 4 952 kN ; δ = 3 501 / 4 952 = 0,71 (compris entre 0,2 et 0,9)." },
      { n: 3, text: "Inerties : I_a = 1,216 × 10⁸ mm⁴ ; I_c = 4,187 × 10⁸ mm⁴ ; (EI)_eff = 210 000 × 1,216 × 10⁸ + 0,6 × 33 000 × 4,187 × 10⁸ = 3,38 × 10¹³ N·mm²." },
      { n: 4, text: "N_cr = π² × 3,38 × 10¹³ / 4 000² = 20 863 kN ; N_pl,Rk = 3 501 + 72 536 × 30 = 5 677 kN ; λ̄ = √(5 677 / 20 863) = 0,52." },
      { n: 5, text: "Courbe a : Φ = 0,5 × [1 + 0,21 × 0,32 + 0,272] = 0,670 ; χ = 0,917 ; N_b,Rd = 0,917 × 4 952 = 4 543 kN." },
    ],
    result_latex: "N_{pl,Rd} = 4\\,952\\ \\text{kN} \\qquad \\bar{\\lambda} = 0{,}52 \\qquad N_{b,Rd} = 0{,}917 \\times 4\\,952 = 4\\,543\\ \\text{kN}",
  },
  units: {
    table: [
      ['Effort normal', 'kN', 'kip', '1 kip = 4,448 kN'],
      ['Inertie', 'mm⁴', 'in⁴', '1 in⁴ = 416 231 mm⁴'],
      ['Rigidité', 'N·mm²', 'kip·in²', '1 kip·in² = 2,87 × 10⁶ N·mm²'],
      ['Diamètre de tube', 'mm', 'in', '323,9 mm = 12,75 in'],
      ['Contrainte', 'MPa', 'ksi', '355 MPa = 51,5 ksi'],
    ],
    note: 'Les tubes sont désignés par diamètre extérieur × épaisseur (CHS) ou côtés × épaisseur (RHS, SHS).',
  },
  hypotheses: {
    items: [
      ['info', 'La méthode simplifiée de l’EC4 s’applique aux sections doublement symétriques et constantes sur la hauteur.'],
      ['info', 'Les effets à long terme du béton (fluage) réduisent la rigidité efficace sous charges permanentes élevées.'],
      ['warning', 'Le voilement local du tube doit être vérifié (limites d/t de l’EC4).'],
      ['warning', 'L’introduction des charges dans le béton (cisaillement à l’interface) doit être assurée par des platines ou connecteurs.'],
      ['tip', 'Pour la résistance au feu, ajoutez des armatures dans le béton du tube et des évents.'],
    ],
  },
  simple_examples: {
    examples: [
      {
        title: 'Exemple 1 : contribution du béton',
        given: 'Profilé enrobé : A_a = 11 000 mm² (S355), A_c = 150 000 mm² (C30/37)',
        find: 'N_pl,Rd (sans armatures)',
        solution_latex: "N = 11\\,000 \\times 355 + 0{,}85 \\times 150\\,000 \\times 20 = 3\\,905 + 2\\,550 = 6\\,455\\ \\text{kN}",
        result: '6 455 kN.',
      },
      {
        title: 'Exemple 2 : rapport de contribution',
        given: 'Résultats de l’exemple 1',
        find: 'δ',
        solution_latex: "\\delta = \\frac{3\\,905}{6\\,455} = 0{,}60",
        result: '0,60 : section mixte au sens de l’EC4.',
      },
      {
        title: 'Exemple 3 : élancement réduit',
        given: 'N_pl,Rk = 8 000 kN ; N_cr = 32 000 kN',
        find: 'λ̄',
        solution_latex: "\\bar{\\lambda} = \\sqrt{\\frac{8\\,000}{32\\,000}} = 0{,}50",
        result: 'λ̄ = 0,50.',
      },
    ],
  },
  real_examples: {
    title: 'Exemple réel — Tours à noyau et poteaux mixtes',
    examples: [
      {
        context: 'Tours de bureaux de grande hauteur en Asie et au Moyen-Orient',
        scenario: "De nombreuses tours utilisent des « méga-poteaux » mixtes : profilés lourds enrobés ou tubes de grand diamètre remplis de béton à haute résistance. Ils combinent la résistance et la rigidité nécessaires contre le vent, une emprise réduite sur les plateaux et la résistance au feu.",
        decomposition_latex: "A_a f_{yd} + A_c f_{cd} \\Rightarrow \\text{section réduite} \\Rightarrow \\text{surface utile} \\uparrow",
        lesson: "La mixité permet d'utiliser chaque matériau au mieux : l'acier pour la ductilité et la rapidité, le béton pour la compression, la rigidité et le feu.",
      },
    ],
  },
  diagrams: {
    title: 'Schéma de principe — Vérification d’un poteau mixte',
    diagram_description: [
      'Choix du type : tube rempli, profilé enrobé ou partiellement enrobé',
      'Résistance plastique N_pl,Rd et rapport δ',
      'Rigidité efficace (EI)_eff et charge critique N_cr',
      'Élancement réduit et coefficient de flambement χ',
      'Interaction compression-flexion si moments',
      'Introduction des charges, voilement local, feu',
    ],
  },
  mistakes: {
    items: [
      ['Prendre α_c = 1 pour un profilé enrobé', 'Résistance surestimée', 'α_c = 0,85 sauf pour les tubes remplis.'],
      ['Utiliser E_cm I_c sans coefficient 0,6', 'Flambement sous-estimé', 'Appliquer K_e = 0,6.'],
      ['Oublier le transfert d’effort au béton', 'Béton non sollicité', 'Platines, connecteurs ou longueur d’introduction.'],
    ],
  },
  tips: {
    tips: [
      'Utilisez du béton autoplaçant pour remplir les tubes.',
      'Prévoyez des trous d’évent (≥ 20 mm) en tête et pied de chaque niveau.',
      'Comparez la solution mixte à un poteau acier protégé contre le feu.',
      'Vérifiez le voilement local des tubes minces avant remplissage (phase de montage).',
    ],
  },
  norms: {
    norms: [
      ['NF EN 1994-1-1 (§ 6.7)', 'Poteaux mixtes et éléments comprimés mixtes.'],
      ['NF EN 1994-1-2', 'Calcul au feu des structures mixtes.'],
      ['NF EN 1993-1-1', 'Courbes de flambement.'],
      ['NF EN 10210 / 10219', 'Profils creux de construction.'],
    ],
  },
  exercises: {
    exercises: [
      {
        level: 1,
        text: 'Calculer l’aire de béton d’un tube de diamètre intérieur 200 mm.',
        hint: 'A = π d² / 4.',
        answer_latex: "A_c = \\frac{\\pi \\times 200^2}{4} = 31\\,416\\ \\text{mm}^2",
        answer_text: '31 416 mm².',
      },
      {
        level: 2,
        text: 'Un poteau a N_pl,Rd = 3 000 kN dont 2 850 kN apportés par l’acier. Est-il mixte au sens de l’EC4 ?',
        hint: 'δ ≤ 0,9.',
        answer_latex: "\\delta = \\frac{2\\,850}{3\\,000} = 0{,}95 > 0{,}9",
        answer_text: 'Non : il doit être calculé comme un poteau en acier (le béton est négligeable).',
      },
      {
        level: 3,
        text: 'Calculer χ pour λ̄ = 0,80 sur la courbe a.',
        hint: 'Φ = 0,5 [1 + 0,21 (λ̄ − 0,2) + λ̄²].',
        answer_latex: "\\Phi = 0{,}5 \\times (1 + 0{,}126 + 0{,}64) = 0{,}883 \\qquad \\chi = \\frac{1}{0{,}883 + \\sqrt{0{,}780 - 0{,}64}} = 0{,}796",
        answer_text: 'χ ≈ 0,80.',
      },
    ],
  },
  quiz: {
    title: 'Quiz — Poteaux mixtes',
    questions: [
      { q: 'Quel coefficient α_c pour un tube rempli ?', options: ['0,85', '1,0', '0,6'], correct: 1, explain: 'Le confinement du tube le justifie.' },
      { q: 'Quelles bornes pour le rapport de contribution δ ?', options: ['0 à 1', '0,2 à 0,9', '0,5 à 1,5'], correct: 1, explain: 'EC4 § 6.7.1.' },
      { q: 'Pourquoi prévoir des évents dans les tubes remplis ?', options: ['Pour l’esthétique', 'Pour évacuer la vapeur en cas d’incendie', 'Pour alléger'], correct: 1, explain: 'Évite l’éclatement du tube par la pression de vapeur.' },
    ],
  },
  exam_questions: {
    questions: [
      'Présentez les différents types de poteaux mixtes et leurs avantages.',
      'Détaillez la méthode simplifiée de l’EC4 pour la compression centrée.',
      'Comment le béton améliore-t-il la résistance au feu ?',
    ],
  },
  interview_questions: {
    questions: [
      ['Quand proposez-vous un poteau mixte ?', 'Quand les charges sont fortes et l’encombrement limité, quand une résistance au feu est exigée sans protection rapportée, ou pour accélérer le montage en évitant les coffrages.'],
      ['Quelle difficulté d’exécution pour un tube rempli ?', 'Le bon remplissage sans vides (béton autoplaçant, contrôle), les évents, et l’introduction des efforts aux niveaux des planchers.'],
    ],
  },
  practical_case: {
    title: 'Cas pratique — Poteau de parking',
    scenario: 'Un poteau de parking doit reprendre N_Ed = 4 200 kN sur 4,00 m. On compare le tube rempli de l’exemple (N_b,Rd = 4 543 kN) à un tube vide de même dimension.',
    description: 'Comparer les deux solutions.',
    resolutions: [
      "\\text{Tube rempli} : N_{b,Rd} = 4\\,543\\ \\text{kN} \\geq 4\\,200 \\Rightarrow \\text{vérifié}",
      "\\text{Tube vide} : N_{pl,Rd} = 3\\,501\\ \\text{kN} < 4\\,200 \\Rightarrow \\text{insuffisant même sans flambement}",
      "\\text{Le béton apporte} : 4\\,543 - \\chi_{vide} \\times 3\\,501 > 1\\,000\\ \\text{kN}",
    ],
    conclusion: 'Le remplissage en béton, peu coûteux, évite de passer à un tube plus lourd et améliore la résistance au feu.',
  },
  summary: {
    content: `### Les poteaux mixtes en 5 points
1. Tubes remplis, profilés enrobés ou partiellement enrobés.
2. $N_{pl,Rd} = A_a f_{yd} + \\alpha_c A_c f_{cd} + A_s f_{sd}$.
3. $0{,}2 \\leq \\delta \\leq 0{,}9$.
4. $(EI)_{eff} = E_a I_a + E_s I_s + 0{,}6 E_{cm} I_c$, puis $\\bar{\\lambda}$ et $\\chi$.
5. Feu, évents, introduction des charges.`,
  },
  key_points: {
    points: [
      'α_c = 1,0 tube rempli ; 0,85 enrobé',
      '0,2 ≤ δ ≤ 0,9',
      '(EI)eff avec 0,6 E_cm I_c',
      'N_b,Rd = χ N_pl,Rd',
      'Évents dans les tubes',
    ],
  },
  self_assessment: {
    objectives: [
      'Je connais les types de poteaux mixtes',
      'Je sais calculer N_pl,Rd et δ',
      'Je sais calculer la rigidité efficace et λ̄',
      'Je sais vérifier le flambement',
      "J'ai réussi le quiz avec au moins 2 bonnes réponses sur 3",
    ],
  },
});
