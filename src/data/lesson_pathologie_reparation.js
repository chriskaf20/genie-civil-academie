// ── Lesson: Techniques de réparation et de renforcement — Module 32 ──────────
import { buildLesson } from './build_lesson.js';

export const lesson_pathologie_reparation = buildLesson({
  moduleId: 32,
  slug: 'pathologie_reparation',
  lessonIndex: 1,
  title: "Réparation et Renforcement des Ouvrages en Béton : NF EN 1504, Injection, Protection Cathodique et Chemisage",
  subtitle: 'Module 32 — Pathologie & Réhabilitation',
  level: 'Avancé',
  duration: '6h',
  tags: ['Réparation', 'NF EN 1504', 'Injection', 'Protection cathodique', 'Chemisage', 'Carbonatation', 'Renforcement'],
}, {
  definition: {
    title: 'Définition — Rendre à un ouvrage sa capacité et sa durabilité',
    fr: 'Réparation et renforcement des structures',
    en: 'Repair and strengthening of structures',
    metier: "Concerne les ingénieurs en réhabilitation, les gestionnaires de patrimoine, les entreprises spécialisées et les bureaux de contrôle.",
    content: `Après le diagnostic, il faut choisir une **stratégie** :

- **Réparer** : rétablir l'état initial (reconstitution du béton dégradé, traitement des fissures).
- **Protéger** : empêcher la poursuite de la dégradation (revêtements, imprégnations, protection cathodique).
- **Renforcer** : augmenter la capacité portante (chemisage, composites, précontrainte additionnelle).

### Le cadre : la NF EN 1504
Elle définit des **principes** de réparation : protection contre la pénétration, contrôle de l'humidité, restauration du béton, renforcement structural, préservation ou restauration de la passivité des armatures, protection cathodique, etc.

### Règle fondamentale
On traite la **cause** avant les **symptômes** : réparer un éclat de béton sans supprimer la cause de corrosion conduit à une nouvelle dégradation, souvent autour de la réparation (effet d'anode induite).

> 💡 Une réparation durable associe compatibilité des matériaux, bonne préparation du support et traitement de la cause.`,
  },
  importance: {
    content: `- **Patrimoine** : une grande partie des ouvrages en service a plus de 40 ans.
- **Sécurité** : la corrosion des armatures réduit la section d'acier et l'adhérence.
- **Économie** : réparer coûte généralement beaucoup moins cher que reconstruire.
- **Carbone** : prolonger un ouvrage évite les émissions d'une reconstruction.

> ⚠️ **À retenir** : le choix de la technique dépend du diagnostic (carbonatation, chlorures, fissuration active ou passive, insuffisance structurelle).`,
  },
  applications: {
    examples: [
      ['Façade d’immeuble', 'Purge des éclats, passivation, mortier R3, revêtement anticarbonatation.'],
      ['Parking', 'Chlorures des sels de déverglaçage : protection cathodique ou mortier + revêtement.'],
      ['Poutre fissurée', 'Injection de résine époxy pour un monolithisme retrouvé.'],
      ['Poteau sous-dimensionné', 'Chemisage en béton armé ou confinement par tissus de carbone.'],
      ['Pont', 'Précontrainte additionnelle extérieure.'],
    ],
  },
  theory: {
    title: 'Théorie — Choisir et dimensionner une réparation',
    content: `### 1. Carbonatation et durée de protection
La profondeur de carbonatation suit approximativement :
$$x = K \\sqrt{t}$$
Les armatures sont dépassivées quand $x$ atteint l'enrobage $c$, soit à $t = (c/K)^2$.

### 2. Reconstitution du béton (NF EN 1504-3)
Purge jusqu'au béton sain, dégagement des armatures corrodées (souvent 15 à 20 mm derrière), nettoyage, passivation éventuelle, puis mortier de réparation : classes **R1, R2** (non structurales) et **R3, R4** (structurales, R4 ≥ 45 MPa).

### 3. Injection des fissures (NF EN 1504-5)
- **Résine époxy** : fissures stabilisées, rétablit le monolithisme (transmission d'efforts).
- **Polyuréthane** : étanchement, fissures humides ou légèrement actives.
- **Coulis de ciment** : fissures larges.

### 4. Protection cathodique (NF EN ISO 12696)
Un courant imposé (ou une anode sacrificielle) rend l'armature cathodique et stoppe la corrosion, même en présence de chlorures. Densité de courant typique : quelques mA/m² d'acier.

### 5. Renforcement
- **Chemisage en béton armé** : augmentation de section et d'armatures ;
- **Composites FRP** collés ou enroulés ;
- **Précontrainte additionnelle** ;
- **Plats métalliques collés** (technique plus ancienne).`,
  },
  formulas: {
    title: 'Formules essentielles — Réparation',
    formulas: [
      {
        name: 'Profondeur de carbonatation',
        latex: "x = K \\sqrt{t} \\qquad t_{dépass} = \\left(\\frac{c}{K}\\right)^2",
        description: 'Estimation du temps avant dépassivation.',
        vars: [
          ['x', 'Profondeur carbonatée', 'mm', 'Mesurée à la phénolphtaléine.'],
          ['K', 'Coefficient de carbonatation', 'mm/√an', '2 à 8 selon le béton et l’exposition.'],
          ['t', 'Âge', 'an', ''],
          ['c', 'Enrobage', 'mm', ''],
        ],
      },
      {
        name: 'Volume de résine d’injection',
        latex: "V = w \\times p \\times L \\times k_p",
        description: 'Quantité de résine à prévoir.',
        vars: [
          ['w', 'Ouverture de fissure', 'm', ''],
          ['p', 'Profondeur de la fissure', 'm', ''],
          ['L', 'Longueur', 'm', ''],
          ['k_p', 'Coefficient de pertes', '-', '1,5 à 2 (ramifications, pertes).'],
        ],
      },
      {
        name: 'Courant de protection cathodique',
        latex: "I = i \\times S_{acier}",
        description: 'Courant total à fournir.',
        vars: [
          ['I', 'Courant', 'A', ''],
          ['i', 'Densité de courant', 'A/m²', 'Typiquement 0,002 à 0,02 A/m² d’acier.'],
          ['S_{acier}', 'Surface d’acier à protéger', 'm²', ''],
        ],
      },
      {
        name: 'Gain d’un chemisage (compression centrée simplifiée)',
        latex: "\\Delta N_{Rd} \\approx \\eta \\left( \\Delta A_c f_{cd} + \\Delta A_s f_{yd} \\right)",
        description: 'Le nouveau béton ne reprend que les charges appliquées après le chemisage.',
        vars: [
          ['\\Delta A_c', 'Section de béton ajoutée', 'mm²', ''],
          ['\\Delta A_s', 'Armatures ajoutées', 'mm²', ''],
          ['\\eta', 'Coefficient de monolithisme', '-', '≈ 0,8 à 1 selon la liaison.'],
        ],
      },
    ],
  },
  stepbystep: {
    title: 'Calcul complet — Diagnostic et réparation d’un balcon',
    problem: "Un balcon de 30 ans présente des éclats. Mesures : carbonatation 22 mm, enrobage moyen 20 mm (minimum 12 mm). On veut une réparation durable pour 30 ans supplémentaires.",
    steps_demo: [
      { n: 1, text: "Coefficient : K = 22 / √30 = 4,0 mm/√an." },
      { n: 2, text: "Dépassivation de l'enrobage moyen : t = (20 / 4,0)² = 25 ans : déjà atteinte, ce qui explique la corrosion." },
      { n: 3, text: "Réparation : purge, dégagement des armatures, traitement, mortier R3 rétablissant un enrobage de 30 mm." },
      { n: 4, text: "Avec un revêtement anticarbonatation, K est fortement réduit ; sans revêtement, 30 mm sont atteints en (30 / 4)² = 56 ans." },
      { n: 5, text: "Le cahier des charges impose mortier R3 + revêtement de protection (NF EN 1504-2) sur toutes les faces exposées." },
    ],
    result_latex: "K = \\frac{22}{\\sqrt{30}} = 4{,}0 \\qquad t = \\left(\\frac{30}{4{,}0}\\right)^2 = 56\\ \\text{ans}",
  },
  units: {
    table: [
      ['Ouverture de fissure', 'mm', 'in', '0,3 mm ≈ 0,012 in'],
      ['Coefficient K', 'mm/√an', 'in/√yr', 'Dépend du béton et de l’humidité'],
      ['Densité de courant', 'mA/m²', 'mA/ft²', '1 mA/ft² = 10,76 mA/m²'],
      ['Teneur en chlorures', '% masse de ciment', '% by weight of cement', 'Seuil d’amorçage souvent 0,4 %'],
      ['Adhérence', 'MPa', 'psi', 'Essai d’arrachement : ≥ 1,5 MPa courant'],
    ],
    note: 'La teneur en chlorures se mesure au niveau des armatures sur des prélèvements de poudre de béton.',
  },
  hypotheses: {
    items: [
      ['info', 'La loi en √t est une approximation pour une exposition constante ; elle donne un ordre de grandeur.'],
      ['info', 'Le béton de chemisage ne reprend que les charges ajoutées après sa mise en œuvre, sauf vérinage préalable.'],
      ['warning', 'Une réparation locale dans un béton chloruré peut accélérer la corrosion autour du patch (anode induite).'],
      ['warning', 'Injecter une fissure active à l’époxy la fait réapparaître à côté : traiter d’abord la cause du mouvement.'],
      ['tip', 'Réalisez des planches d’essai et des essais d’arrachement avant la réparation généralisée.'],
    ],
  },
  simple_examples: {
    examples: [
      {
        title: 'Exemple 1 : volume d’injection',
        given: 'Fissure de 0,3 mm, profondeur 200 mm, longueur 5 m, k_p = 1,5',
        find: 'Volume de résine',
        solution_latex: "V = 0{,}0003 \\times 0{,}2 \\times 5 \\times 1{,}5 = 4{,}5 \\times 10^{-4}\\ \\text{m}^3",
        result: '0,45 L de résine.',
      },
      {
        title: 'Exemple 2 : courant de protection cathodique',
        given: 'S_acier = 250 m² ; i = 10 mA/m²',
        find: 'I',
        solution_latex: "I = 0{,}010 \\times 250 = 2{,}5\\ \\text{A}",
        result: '2,5 A au total, réparti en zones.',
      },
      {
        title: 'Exemple 3 : carbonatation future',
        given: 'K = 5 mm/√an ; enrobage 25 mm',
        find: 'Âge de dépassivation',
        solution_latex: "t = \\left(\\frac{25}{5}\\right)^2 = 25\\ \\text{ans}",
        result: '25 ans.',
      },
    ],
  },
  real_examples: {
    title: 'Exemple réel — Parkings exposés aux sels de déverglaçage',
    examples: [
      {
        context: 'Parkings en béton armé en Europe du Nord et en Amérique du Nord',
        scenario: "Des décennies de sels apportés par les véhicules ont saturé les dalles en chlorures. Les réparations par simple ragréage échouaient en quelques années : la corrosion reprenait autour des zones réparées. Les gestionnaires ont adopté la protection cathodique, des membranes d'étanchéité et, dans certains cas, le remplacement des dalles.",
        decomposition_latex: "\\text{Cl}^- > \\text{seuil} + \\text{réparation locale} \\Rightarrow \\text{anode induite} \\Rightarrow \\text{nouvelles dégradations}",
        lesson: "La technique doit agir sur la cause (chlorures) sur l'ensemble de la zone contaminée, pas seulement sur les éclats visibles.",
      },
    ],
  },
  diagrams: {
    title: 'Schéma de principe — Démarche de réparation',
    diagram_description: [
      'Diagnostic : relevés, carbonatation, chlorures, potentiels, enrobages',
      'Choix de la stratégie : réparer, protéger, renforcer (NF EN 1504-9)',
      'Préparation du support : purge, dégagement, nettoyage',
      'Mise en œuvre : mortier, injection, protection cathodique, renfort',
      'Protection finale : revêtement, imprégnation',
      'Contrôles et surveillance après travaux',
    ],
  },
  mistakes: {
    items: [
      ['Réparer sans diagnostic', 'Récidive rapide', 'Mesurer carbonatation, chlorures et enrobage avant de choisir.'],
      ['Purge insuffisante derrière les armatures', 'Corrosion qui continue', 'Dégager les aciers sur tout leur pourtour.'],
      ['Mortier incompatible (module, retrait)', 'Décollement, fissures', 'Choisir une classe R adaptée et réaliser des essais.'],
    ],
  },
  tips: {
    tips: [
      'Cartographiez les potentiels de corrosion pour délimiter les zones actives.',
      'Mesurez l’adhérence des réparations par essais d’arrachement.',
      'Prévoyez la surveillance de la protection cathodique (potentiels, courant).',
      'Documentez les réparations dans le dossier de l’ouvrage.',
    ],
  },
  norms: {
    norms: [
      ['NF EN 1504 (parties 1 à 10)', 'Produits et systèmes de protection et de réparation des structures en béton.'],
      ['NF EN 1504-9', 'Principes généraux d’utilisation des produits et systèmes.'],
      ['NF EN ISO 12696', 'Protection cathodique de l’acier dans le béton.'],
      ['Guides STRRES (France)', 'Recommandations professionnelles pour la réparation des ouvrages.'],
      ['NF EN 1992-1-1', 'Vérification des éléments renforcés.'],
    ],
  },
  exercises: {
    exercises: [
      {
        level: 1,
        text: 'Quelle classe de mortier est la plus résistante selon la NF EN 1504-3 ?',
        hint: 'Classes R1 à R4.',
        answer_latex: "\\text{R4} \\ (\\geq 45\\ \\text{MPa})",
        answer_text: 'R4.',
      },
      {
        level: 2,
        text: 'Une poutre de 20 ans présente 12 mm de carbonatation. Quand l’enrobage de 30 mm sera-t-il atteint ?',
        hint: 'K = x / √t.',
        answer_latex: "K = \\frac{12}{\\sqrt{20}} = 2{,}68 \\Rightarrow t = \\left(\\frac{30}{2{,}68}\\right)^2 = 125\\ \\text{ans}",
        answer_text: 'Vers 125 ans : la carbonatation n’est pas la cause principale à craindre.',
      },
      {
        level: 3,
        text: 'Un poteau de 30 × 30 cm est chemisé à 40 × 40 cm en C30/37 avec 4 HA16 ajoutés. Estimer ΔN_Rd (η = 0,9).',
        hint: 'ΔA_c = 0,16 − 0,09 m² moins les aciers ; f_cd = 20 MPa ; f_yd = 435 MPa.',
        answer_latex: "\\Delta N_{Rd} \\approx 0{,}9 \\times (70\\,000 \\times 20 + 804 \\times 435) = 0{,}9 \\times (1\\,400 + 350) = 1\\,575\\ \\text{kN}",
        answer_text: 'Environ 1 575 kN supplémentaires (hors flambement), pour les charges appliquées après chemisage.',
      },
    ],
  },
  quiz: {
    title: 'Quiz — Réparation des ouvrages',
    questions: [
      { q: 'Quelle résine injecter pour rétablir le monolithisme d’une poutre ?', options: ['Polyuréthane', 'Époxy', 'Silicone'], correct: 1, explain: 'L’époxy transmet les efforts.' },
      { q: 'Que permet la protection cathodique ?', options: ['Arrêter la corrosion même avec des chlorures', 'Augmenter la résistance du béton', 'Réduire le retrait'], correct: 0, explain: 'L’acier devient cathode.' },
      { q: 'Quelle norme encadre la réparation des ouvrages en béton ?', options: ['NF EN 1504', 'NF EN 1090', 'NF EN 13108'], correct: 0, explain: 'NF EN 1504.' },
    ],
  },
  exam_questions: {
    questions: [
      'Présentez les principes de la NF EN 1504 et donnez un exemple pour chacun.',
      'Comment choisir entre réparation localisée et protection cathodique ?',
      'Décrivez les techniques de renforcement d’un poteau.',
    ],
  },
  interview_questions: {
    questions: [
      ['Quelle est votre démarche face à un ouvrage dégradé ?', 'Inspection, essais (carbonatation, chlorures, enrobages, potentiels), identification de la cause, choix de la stratégie, essais de convenance, travaux, contrôles et surveillance.'],
      ['Pourquoi des réparations échouent-elles ?', 'Cause non traitée, préparation insuffisante, matériaux incompatibles, conditions de mise en œuvre non respectées (température, humidité, cure).'],
    ],
  },
  practical_case: {
    title: 'Cas pratique — Réhabilitation d’une façade en béton',
    scenario: 'Façade de 1 200 m² : 4 % de surface éclatée, carbonatation moyenne 18 mm, enrobage moyen 22 mm, chlorures négligeables.',
    description: 'Définir et quantifier les travaux.',
    resolutions: [
      "\\text{Surface à réparer} : 0{,}04 \\times 1\\,200 = 48\\ \\text{m}^2 \\ (+ 20\\ \\% \\text{ de zones cachées} \\Rightarrow 58\\ \\text{m}^2)",
      "\\text{Mortier R3, épaisseur moyenne 30 mm} : 58 \\times 0{,}030 = 1{,}74\\ \\text{m}^3",
      "\\text{Revêtement anticarbonatation sur } 1\\,200\\ \\text{m}^2 \\text{ pour freiner l’avancée vers les armatures}",
    ],
    conclusion: 'La carbonatation approche de l’enrobage : réparer les éclats ne suffit pas, le revêtement généralisé est indispensable.',
  },
  summary: {
    content: `### La réparation en 5 points
1. Diagnostiquer et traiter la cause avant les symptômes.
2. Réparer, protéger ou renforcer (NF EN 1504).
3. Carbonatation : $x = K\\sqrt{t}$.
4. Injection : époxy (monolithisme), polyuréthane (étanchéité).
5. Chlorures : protection cathodique ; renforcement : chemisage, FRP, précontrainte.`,
  },
  key_points: {
    points: [
      'Traiter la cause',
      'x = K √t',
      'Mortiers R1 à R4',
      'Époxy = structural ; PU = étanchéité',
      'Chlorures → protection cathodique',
    ],
  },
  self_assessment: {
    objectives: [
      'Je connais les principes de la NF EN 1504',
      'Je sais estimer une durée avant dépassivation',
      'Je sais choisir un produit d’injection',
      'Je sais dimensionner simplement un chemisage',
      "J'ai réussi le quiz avec au moins 2 bonnes réponses sur 3",
    ],
  },
});
