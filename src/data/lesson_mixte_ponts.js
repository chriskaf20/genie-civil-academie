// ── Lesson: Ponts mixtes — Module 40 ─────────────────────────────────────────
import { buildLesson } from './build_lesson.js';

export const lesson_mixte_ponts = buildLesson({
  moduleId: 40,
  slug: 'mixte_ponts',
  lessonIndex: 4,
  title: "Ponts Mixtes Acier-Béton : Bipoutre, Coefficient d'Équivalence, Section Homogénéisée et Phasage",
  subtitle: 'Module 40 — Structures mixtes acier-béton',
  level: 'Avancé',
  duration: '7h',
  diagramType: 'bridge_structure',
  tags: ['Pont mixte', 'Bipoutre', 'Coefficient d’équivalence', 'Section homogénéisée', 'Fluage', 'Lançage', 'EN 1994-2'],
}, {
  definition: {
    title: 'Définition — Des poutres en acier sous une dalle en béton',
    fr: 'Ponts mixtes acier-béton',
    en: 'Steel-concrete composite bridges',
    metier: "Utilisés par les ingénieurs ouvrages d'art, les charpentiers métalliques et les maîtres d'ouvrage routiers et ferroviaires.",
    content: `Un **pont mixte** associe des poutres en acier et une dalle en béton armé, reliées par des **connecteurs** (goujons). La dalle forme la membrure supérieure comprimée en travée ; l'acier reprend la traction.

### Le bipoutre, solution reine
Deux poutres principales en I reconstituées soudées, des entretoises, et une dalle de 25 à 30 cm. C'est la solution la plus courante en France pour les portées de **40 à 90 m** environ.

### Les spécificités du calcul
- **Coefficient d'équivalence** $n = E_a / E_c$ : le béton est remplacé par une aire d'acier équivalente.
- **Effets différés** : fluage et retrait du béton modifient la répartition des contraintes au cours du temps.
- **Phasage** : l'acier seul porte la dalle fraîche, puis la section mixte porte les superstructures et le trafic.
- **Zones sur appuis** : la dalle est tendue et fissurée ; seules ses armatures participent.

> 💡 On distingue les calculs « à court terme » ($n_0 \\approx 6$) et « à long terme » ($n_L \\approx 15$ à 20) selon la durée des charges.`,
  },
  importance: {
    content: `- **Économie** : poids réduit, montage rapide par lançage ou à la grue.
- **Délais** : la charpente est fabriquée en usine pendant la réalisation des appuis.
- **Durabilité** : peinture, acier autopatinable et inspection facile des poutres.
- **Fatigue** : les assemblages soudés et les goujons doivent être vérifiés sous trafic.

> ⚠️ **À retenir** : un pont mixte se calcule par phases ; oublier une phase ou un effet différé fausse les contraintes finales.`,
  },
  applications: {
    examples: [
      ['Pont autoroutier', 'Bipoutre de 3 travées 50–70–50 m, lancé depuis une culée.'],
      ['Passage supérieur', 'Poutres laminées enrobées (PRAD) pour les petites portées.'],
      ['Viaduc ferroviaire', 'Caisson mixte pour la rigidité en torsion.'],
      ['Élargissement', 'Ajout d’une poutre et d’une bande de dalle.'],
      ['Ouvrage urbain', 'Pont mixte à faible épaisseur pour respecter un gabarit.'],
    ],
  },
  theory: {
    title: 'Théorie — Section homogénéisée et phasage',
    content: `### 1. Largeur efficace
$$b_{eff} = b_0 + \\sum b_{ei} \\qquad b_{ei} = \\min\\left(\\frac{L_e}{8} \\, ; \\, b_i\\right)$$
$L_e$ : longueur équivalente (distance entre points de moment nul).

### 2. Coefficient d'équivalence
$$n_0 = \\frac{E_a}{E_{cm}} \\qquad n_L = n_0 \\, (1 + \\psi_L \\, \\varphi_t)$$
$\\varphi_t$ : coefficient de fluage (souvent 1,5 à 2,5) ; $\\psi_L$ = 1,1 pour les charges permanentes, 0,55 pour le retrait.

### 3. Section homogénéisée
On remplace la dalle par une aire d'acier $A_c / n$ :
$$y_G = \\frac{A_a y_a + (A_c/n) \\, y_c}{A_a + A_c/n} \\qquad I = I_a + A_a (y_G - y_a)^2 + \\frac{I_c}{n} + \\frac{A_c}{n} (y_c - y_G)^2$$

### 4. Phasage typique
1. Charpente seule : poids propre de l'acier et de la dalle fraîche (pianotage des plots de bétonnage).
2. Section mixte long terme ($n_L$) : superstructures (revêtement, corniches, dispositifs de retenue), retrait.
3. Section mixte court terme ($n_0$) : trafic (modèles de charge LM1, LM71…), température.

### 5. Contraintes
On additionne les contraintes de chaque phase calculées avec la section correspondante :
$$\\sigma = \\sum_{phases} \\frac{M_i \\, v_i}{I_i}$$`,
  },
  formulas: {
    title: 'Formules essentielles — Ponts mixtes',
    formulas: [
      {
        name: 'Coefficient d’équivalence long terme',
        latex: "n_L = n_0 (1 + \\psi_L \\varphi_t)",
        description: 'Prise en compte du fluage du béton.',
        vars: [
          ['n_0', 'Coefficient court terme', '-', 'E_a / E_cm ≈ 6.'],
          ['\\psi_L', 'Multiplicateur de fluage', '-', '1,1 (permanent) ; 0,55 (retrait).'],
          ['\\varphi_t', 'Coefficient de fluage', '-', '≈ 1,5 à 2,5.'],
        ],
      },
      {
        name: 'Centre de gravité de la section homogénéisée',
        latex: "y_G = \\frac{A_a y_a + (A_c / n) \\, y_c}{A_a + A_c / n}",
        description: 'Position de l’axe neutre élastique.',
        vars: [
          ['A_a, y_a', 'Aire et centre de gravité de l’acier', 'mm², mm', ''],
          ['A_c, y_c', 'Aire et centre de gravité de la dalle', 'mm², mm', 'Largeur efficace.'],
        ],
      },
      {
        name: 'Inertie homogénéisée',
        latex: "I = I_a + A_a (y_G - y_a)^2 + \\frac{I_c}{n} + \\frac{A_c}{n}(y_c - y_G)^2",
        description: 'Théorème de Huygens appliqué aux deux matériaux.',
        vars: [
          ['I_a', "Inertie propre de l'acier", 'mm⁴', ''],
          ['I_c', 'Inertie propre de la dalle', 'mm⁴', ''],
        ],
      },
      {
        name: 'Largeur efficace (EC4)',
        latex: "b_{eff} = b_0 + \\sum \\min\\left(\\frac{L_e}{8} ; b_i\\right)",
        description: 'Traînage de cisaillement dans la dalle.',
        vars: [
          ['b_0', 'Entraxe des goujons extrêmes', 'mm', ''],
          ['L_e', 'Longueur équivalente', 'mm', '0,85 L en travée de rive, 0,70 L en travée intermédiaire.'],
        ],
      },
    ],
  },
  stepbystep: {
    title: 'Calcul complet — Section mixte d’un bipoutre à court et long terme',
    problem: "Une poutre de bipoutre (hauteur 2 000 mm) : A_a = 60 000 mm², I_a = 4,0 × 10¹⁰ mm⁴, centre de gravité à 900 mm du bas. Dalle efficace : 3 500 × 250 mm, centre à 2 125 mm du bas. Calculer la section homogénéisée pour n₀ = 6 et n_L = 18, puis la flèche sous une charge de trafic de 20 kN/m sur 50 m (isostatique, court terme).",
    steps_demo: [
      { n: 1, text: "n₀ = 6 : A_c/n = 875 000 / 6 = 145 833 mm² ; y_G = (60 000 × 900 + 145 833 × 2 125) / 205 833 = 1 768 mm." },
      { n: 2, text: "I₀ = 4,0 × 10¹⁰ + 60 000 × 868² + 4,56 × 10⁹/6 + 145 833 × 357² = 1,046 × 10¹¹ mm⁴ (2,6 fois l'acier seul)." },
      { n: 3, text: "n_L = 18 : A_c/n = 48 611 mm² ; y_G = 1 448 mm ; I_L = 8,06 × 10¹⁰ mm⁴ (2,0 fois l'acier seul)." },
      { n: 4, text: "Flèche trafic (court terme) : f = 5 × 20 × 50 000⁴ / (384 × 210 000 × 1,046 × 10¹¹) = 74 mm, soit L/676." },
      { n: 5, text: "Sous charges permanentes appliquées sur la section mixte, on utiliserait I_L : la flèche serait 30 % plus grande (96 mm pour la même charge)." },
    ],
    result_latex: "I_0 = 1{,}046 \\times 10^{11}\\ \\text{mm}^4 \\quad I_L = 8{,}06 \\times 10^{10}\\ \\text{mm}^4 \\quad f = \\frac{5 \\times 20 \\times 50\\,000^4}{384 \\times 210\\,000 \\times I_0} = 74\\ \\text{mm}",
  },
  units: {
    table: [
      ['Inertie', 'mm⁴ ou m⁴', 'in⁴', '1 m⁴ = 10¹² mm⁴'],
      ['Charge linéique', 'kN/m', 'kip/ft', '1 kip/ft = 14,59 kN/m'],
      ['Portée', 'm', 'ft', '50 m = 164 ft'],
      ['Contrainte', 'MPa', 'ksi', '1 ksi = 6,895 MPa'],
      ['Masse de charpente', 'kg/m² de tablier', 'psf', 'Bipoutre : souvent 150 à 300 kg/m²'],
    ],
    note: 'Le ratio d’acier de charpente (kg/m² de tablier) est un indicateur économique courant des ponts mixtes.',
  },
  hypotheses: {
    items: [
      ['info', 'La section homogénéisée suppose une connexion complète et un comportement élastique.'],
      ['info', 'Sur appuis intermédiaires, la dalle fissurée est remplacée par ses seules armatures longitudinales.'],
      ['warning', 'Le retrait du béton crée des efforts isostatiques et hyperstatiques à ne pas oublier.'],
      ['warning', 'Le voilement des âmes élancées et le déversement des membrures inférieures comprimées sur appuis doivent être vérifiés.'],
      ['tip', 'Bétonnez la dalle par plots en commençant par les zones de travée, puis les zones sur appuis (pianotage) pour limiter la fissuration.'],
    ],
  },
  simple_examples: {
    examples: [
      {
        title: 'Exemple 1 : coefficient long terme',
        given: 'n₀ = 6,2 ; φ_t = 2,0 ; ψ_L = 1,1',
        find: 'n_L',
        solution_latex: "n_L = 6{,}2 \\times (1 + 1{,}1 \\times 2{,}0) = 19{,}8",
        result: 'n_L ≈ 20.',
      },
      {
        title: 'Exemple 2 : largeur efficace',
        given: 'Travée centrale de 60 m (L_e = 0,7 × 60 = 42 m) ; b₀ = 0,6 m ; b₁ = 2,0 m ; b₂ = 3,0 m',
        find: 'b_eff',
        solution_latex: "\\frac{L_e}{8} = 5{,}25\\ \\text{m} \\Rightarrow b_{eff} = 0{,}6 + 2{,}0 + 3{,}0 = 5{,}6\\ \\text{m}",
        result: 'Toute la largeur participe (b_i < L_e/8).',
      },
      {
        title: 'Exemple 3 : aire équivalente',
        given: 'Dalle 3 000 × 250 mm ; n = 6',
        find: 'A_c / n',
        solution_latex: "\\frac{750\\,000}{6} = 125\\,000\\ \\text{mm}^2",
        result: '125 000 mm² d’acier équivalent.',
      },
    ],
  },
  real_examples: {
    title: 'Exemple réel — Généralisation du bipoutre en France',
    examples: [
      {
        context: 'Autoroutes et lignes à grande vitesse françaises depuis les années 1980–1990',
        scenario: "La simplification du bipoutre (poutres reconstituées soudées, entretoises espacées, dalle sans longerons) et l'industrialisation de la fabrication ont rendu les ponts mixtes compétitifs face au béton précontraint pour les portées moyennes. Les guides du Sétra (devenu Cerema) ont standardisé les méthodes de calcul.",
        decomposition_latex: "\\text{Conception simplifiée} + \\text{fabrication industrielle} + \\text{lançage} \\Rightarrow \\text{coût et délai réduits}",
        lesson: "La simplicité constructive est souvent plus économique que l'optimisation de la matière.",
      },
    ],
  },
  diagrams: {
    title: 'Schéma de principe — Construction d’un bipoutre',
    diagram_description: [
      'Fabrication des tronçons de poutres en usine',
      'Assemblage et lançage de la charpente depuis une culée',
      'Pose des prédalles ou de l’équipage mobile',
      'Bétonnage de la dalle par plots (pianotage)',
      'Mise en place des superstructures',
      'Épreuves de chargement et mise en service',
    ],
  },
  mistakes: {
    items: [
      ['Utiliser n₀ pour les charges permanentes', 'Contraintes dans le béton surestimées, acier sous-estimé', 'Utiliser n_L pour les actions de longue durée.'],
      ['Oublier la phase « charpente seule »', 'Contraintes dans l’acier sous-estimées', 'Cumuler les phases.'],
      ['Négliger la fissuration sur appuis', 'Raideur surestimée', 'Analyse fissurée sur environ 15 % de la portée de part et d’autre des appuis.'],
    ],
  },
  tips: {
    tips: [
      'Tenez un tableau des phases avec la section résistante de chacune.',
      'Vérifiez la fatigue des goujons et des détails soudés (catégories de détail).',
      'Concevez des contreflèches pour compenser les déformations de construction.',
      'Choisissez l’acier autopatinable pour réduire l’entretien quand l’environnement le permet.',
    ],
  },
  norms: {
    norms: [
      ['NF EN 1994-2', 'Ponts mixtes acier-béton.'],
      ['NF EN 1993-2', 'Ponts métalliques.'],
      ['NF EN 1991-2', 'Charges de trafic sur les ponts.'],
      ['Guides Sétra/Cerema « Ponts mixtes »', 'Conception et calcul des bipoutres.'],
    ],
  },
  exercises: {
    exercises: [
      {
        level: 1,
        text: 'Calculer n₀ pour E_a = 210 000 MPa et E_cm = 34 000 MPa.',
        hint: 'n₀ = E_a / E_cm.',
        answer_latex: "n_0 = \\frac{210\\,000}{34\\,000} = 6{,}2",
        answer_text: '6,2.',
      },
      {
        level: 2,
        text: 'Calculer y_G pour A_a = 50 000 mm² (y_a = 800 mm) et A_c/n = 100 000 mm² (y_c = 1 900 mm).',
        hint: 'Moyenne pondérée des positions.',
        answer_latex: "y_G = \\frac{50\\,000 \\times 800 + 100\\,000 \\times 1\\,900}{150\\,000} = 1\\,533\\ \\text{mm}",
        answer_text: '1 533 mm.',
      },
      {
        level: 3,
        text: 'Pour la section de l’exemple à court terme (I₀ = 1,046 × 10¹¹ mm⁴, y_G = 1 768 mm), calculer la contrainte en fibre inférieure de l’acier sous un moment de trafic de 6 000 kN·m.',
        hint: 'σ = M v / I avec v = 1 768 mm.',
        answer_latex: "\\sigma = \\frac{6 \\times 10^9 \\times 1\\,768}{1{,}046 \\times 10^{11}} = 101\\ \\text{MPa}",
        answer_text: '101 MPa de traction, à cumuler avec les phases précédentes.',
      },
    ],
  },
  quiz: {
    title: 'Quiz — Ponts mixtes',
    questions: [
      { q: 'Pourquoi n_L est-il plus grand que n₀ ?', options: ['Le béton durcit', 'Le fluage réduit le module apparent du béton', 'L’acier s’allonge'], correct: 1, explain: 'Le béton se déforme sous charge durable.' },
      { q: 'Quelle est la solution la plus courante pour un pont mixte de 60 m ?', options: ['Bipoutre', 'Pont suspendu', 'Voûte maçonnée'], correct: 0, explain: 'Le bipoutre est très répandu.' },
      { q: 'Que se passe-t-il dans la dalle sur appui intermédiaire ?', options: ['Elle est comprimée', 'Elle est tendue et fissurée', 'Elle ne travaille pas'], correct: 1, explain: 'Moment négatif : la dalle est en traction.' },
    ],
  },
  exam_questions: {
    questions: [
      'Expliquez le calcul d’une section mixte homogénéisée et le rôle de n.',
      'Décrivez le phasage de construction d’un bipoutre et son influence sur les contraintes.',
      'Quelles vérifications spécifiques demandent les zones sur appuis ?',
    ],
  },
  interview_questions: {
    questions: [
      ['Pont mixte ou béton précontraint ?', 'Je compare la portée, les délais, le poids (fondations), les conditions de montage (lançage, grue), l’entretien et les coûts ; le mixte est souvent avantageux entre 40 et 90 m et quand le délai ou le poids sont critiques.'],
      ['Comment gérez-vous la fissuration de la dalle sur appuis ?', 'Par le pianotage du bétonnage, un ferraillage longitudinal suffisant (maîtrise de l’ouverture des fissures) et une analyse fissurée.'],
    ],
  },
  practical_case: {
    title: 'Cas pratique — Contraintes cumulées en fibre inférieure',
    scenario: 'Poutre de l’exemple, mi-travée : M₁ = 9 000 kN·m (charpente + dalle fraîche, acier seul, v = 900 mm, I_a = 4,0 × 10¹⁰) ; M₂ = 3 000 kN·m (superstructures, n_L, v = 1 448 mm) ; M₃ = 6 000 kN·m (trafic, n₀, v = 1 768 mm).',
    description: 'Calculer la contrainte totale en fibre inférieure.',
    resolutions: [
      "\\sigma_1 = \\frac{9 \\times 10^9 \\times 900}{4{,}0 \\times 10^{10}} = 202{,}5\\ \\text{MPa}",
      "\\sigma_2 = \\frac{3 \\times 10^9 \\times 1\\,448}{8{,}06 \\times 10^{10}} = 53{,}9\\ \\text{MPa} \\qquad \\sigma_3 = 101{,}4\\ \\text{MPa}",
      "\\sigma_{tot} = 202{,}5 + 53{,}9 + 101{,}4 = 357{,}8\\ \\text{MPa} \\ (\\text{moments ELU pondérés à comparer à } f_y)",
    ],
    conclusion: 'La phase « charpente seule » représente plus de la moitié de la contrainte : c’est pourquoi le phasage est essentiel. Ici 357,8 MPa > 355 MPa : la semelle inférieure en S355 est insuffisante (a fortiori au-delà de 40 mm d’épaisseur, où f_y = 335 MPa) ; on épaissit la semelle ou on passe en S460.',
  },
  summary: {
    content: `### Les ponts mixtes en 5 points
1. Bipoutre + dalle reliés par goujons ; portées 40 à 90 m.
2. $n_0 \\approx 6$ (court terme), $n_L = n_0(1 + \\psi_L \\varphi_t)$ (long terme).
3. Section homogénéisée : $A_c/n$, $y_G$, $I$.
4. Phasage : acier seul → mixte long terme → mixte court terme.
5. Appuis : dalle fissurée, voilement et déversement à vérifier.`,
  },
  key_points: {
    points: [
      'n₀ ≈ 6 ; n_L ≈ 15 à 20',
      'A_c / n dans la section',
      'Cumuler les phases',
      'Dalle fissurée sur appuis',
      'Pianotage du bétonnage',
    ],
  },
  self_assessment: {
    objectives: [
      'Je sais calculer une section mixte homogénéisée',
      'Je comprends le rôle du fluage',
      'Je sais cumuler les contraintes par phase',
      'Je connais la construction d’un bipoutre',
      "J'ai réussi le quiz avec au moins 2 bonnes réponses sur 3",
    ],
  },
});
