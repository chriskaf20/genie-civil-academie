// ── Lesson: Plateforme, ballast et maintenance de la voie — Module 21 ────────
import { buildLesson } from './build_lesson.js';

export const lesson_ferroviaire_plateforme = buildLesson({
  moduleId: 21,
  slug: 'ferroviaire_plateforme',
  lessonIndex: 3,
  title: "Plateforme, Ballast & Maintenance de la Voie : Transmission des Charges, Géométrie et Entretien",
  subtitle: 'Module 21 — Infrastructures Ferroviaires',
  level: 'Avancé',
  duration: '9h',
  diagramType: 'road_profile',
  tags: ['Ferroviaire', 'Ballast', 'Traverses', 'Plateforme', 'Charge à l’essieu', 'Bourrage', 'Défauts de géométrie'],
}, {
  definition: {
    title: 'Définition — Le chemin des charges sous le rail',
    fr: 'Voie ballastée et plateforme ferroviaire',
    en: 'Ballasted track and track bed',
    metier: "Utilisée par les ingénieurs voie et géotechnique ferroviaire, les gestionnaires d'infrastructure et les entreprises de travaux et de maintenance de la voie.",
    content: `La voie ballastée est un **système multicouche** qui transmet et répartit les charges des roues jusqu'au sol :
**rail → attaches et semelles → traverses → ballast → sous-couche → couche de forme → plateforme (sol support)**.

À chaque étage, la surface de contact augmente et la pression diminue : de plusieurs centaines de MPa au contact roue-rail à moins de 100 kPa environ sur la plateforme.

### Le rôle du ballast
- répartir les charges ;
- assurer la stabilité latérale et longitudinale de la voie ;
- drainer l'eau ;
- permettre le réglage de la géométrie par **bourrage** (relevage et compactage sous traverse).

### Une voie qui se dégrade
Le passage répété des trains tasse le ballast de façon inégale : des **défauts de géométrie** (nivellement, dressage, gauche, écartement) apparaissent et doivent être corrigés par la maintenance.

> 💡 Un essieu de 22,5 t porte 110 kN par roue, mais grâce à la répartition, la plateforme ne reçoit que quelques dizaines de kPa.`,
  },
  importance: {
    content: `- **Sécurité** : un défaut de géométrie excessif (gauche notamment) peut provoquer un déraillement.
- **Confort et vitesse** : la qualité géométrique conditionne la vitesse autorisée.
- **Coût** : la maintenance de la voie représente une part majeure des dépenses d'un gestionnaire.
- **Plateforme** : une plateforme mal drainée ou trop peu portante dégrade la voie très rapidement (boue remontant dans le ballast).

> ⚠️ **À retenir** : l'eau est l'ennemie de la plateforme ferroviaire ; le drainage conditionne la durée de vie de la voie.`,
  },
  applications: {
    examples: [
      ['Ligne nouvelle', 'Couche de forme traitée, sous-couche granulaire et 30 à 35 cm de ballast sous traverse.'],
      ['Renouvellement de voie', 'Train de renouvellement remplaçant rails, traverses et ballast.'],
      ['Maintenance', 'Bourrage mécanique lourd après mesure des défauts par une voiture d’enregistrement.'],
      ['Zone de boue', 'Assainissement de la plateforme : drains, géotextile, renouvellement de la sous-couche.'],
      ['Ouvrage d’art', 'Zone de transition entre plateforme et pont pour éviter une marche de rigidité.'],
    ],
  },
  theory: {
    title: 'Théorie — Répartition des charges et géométrie',
    content: `### 1. Charge par roue et effet dynamique
$$Q_{dyn} = \\phi \\cdot \\frac{P_{essieu}}{2}$$
$\\phi$ : coefficient dynamique (1,2 à 1,5 selon la vitesse et l'état de la voie).

### 2. Part reprise par une traverse
La rigidité du rail répartit la charge d'une roue sur plusieurs traverses : la traverse sous la roue en reprend environ 40 à 50 %.

### 3. Pression sous traverse puis sur la plateforme
$$\\sigma_b = \\frac{F_t}{A_{appui}} \\qquad \\sigma_p \\approx \\frac{F_t}{(b + 2h)(l + 2h)}$$
($b \\times l$ : surface d'appui de la demi-traverse sous un rail, $h$ : épaisseur de ballast et sous-couche ; diffusion à 45° simplifiée).

### 4. Défauts de géométrie
- **Nivellement longitudinal** et **dressage** (alignement) ;
- **gauche** : variation du dévers sur une base donnée (un des plus dangereux) ;
- **écartement** : 1 435 mm en voie normale.
Les tolérances dépendent de la vitesse de la ligne ; des seuils d'alerte, d'intervention et d'action immédiate sont définis.

### 5. Maintenance
Bourrage, régalage du ballast, meulage des rails, remplacement des composants, renouvellement de voie, assainissement de la plateforme.`,
  },
  formulas: {
    title: 'Formules essentielles — Voie ballastée',
    formulas: [
      {
        name: 'Charge dynamique par roue',
        latex: "Q_{dyn} = \\phi \\cdot \\frac{P_{essieu}}{2}",
        description: 'Charge statique de roue majorée de l’effet dynamique.',
        vars: [
          ['Q_{dyn}', 'Charge dynamique de roue', 'kN', 'Utilisée pour le dimensionnement.'],
          ['\\phi', 'Coefficient dynamique', '-', '1,2 à 1,5.'],
          ['P_{essieu}', 'Charge à l’essieu', 'kN', '22,5 t ≈ 220 kN ; TGV ≈ 170 kN.'],
        ],
      },
      {
        name: 'Pression sous traverse',
        latex: "\\sigma_b = \\frac{F_t}{A_{appui}}",
        description: 'Pression transmise au ballast sous la demi-traverse.',
        vars: [
          ['\\sigma_b', 'Pression sur le ballast', 'kPa', 'Souvent 200 à 400 kPa.'],
          ['F_t', 'Charge reprise par la traverse sous un rail', 'kN', '40 à 50 % de Q_dyn.'],
          ['A_{appui}', "Surface d'appui", 'm²', 'Demi-traverse béton ≈ 0,25 à 0,30 m².'],
        ],
      },
      {
        name: 'Pression sur la plateforme (diffusion à 45°)',
        latex: "\\sigma_p \\approx \\frac{F_t}{(b + 2h)(l + 2h)}",
        description: 'Approche simplifiée de la diffusion dans le ballast et la sous-couche.',
        vars: [
          ['\\sigma_p', 'Pression sur la plateforme', 'kPa', 'Viser moins de 100 kPa environ.'],
          ['b, l', "Dimensions de l'appui", 'm', 'Largeur et longueur d’appui de la demi-traverse.'],
          ['h', 'Épaisseur ballast + sous-couche', 'm', '0,3 à 0,6 m.'],
        ],
        rule: "Augmenter l'épaisseur de ballast est l'un des moyens les plus simples de soulager une plateforme faible.",
      },
      {
        name: 'Gauche de voie',
        latex: "g = \\frac{\\Delta d}{L_b}",
        description: 'Variation du dévers sur une base de mesure.',
        vars: [
          ['g', 'Gauche', 'mm/m', 'Limite fonction de la vitesse et de la base.'],
          ['\\Delta d', 'Variation du dévers', 'mm', 'Différence de dévers entre deux points.'],
          ['L_b', 'Base de mesure', 'm', 'Souvent 3 m (empattement de bogie).'],
        ],
      },
    ],
  },
  stepbystep: {
    title: 'Calcul complet — Des roues à la plateforme',
    problem: "Charge à l'essieu 22,5 t (220 kN), coefficient dynamique 1,3. La traverse béton sous la roue reprend 50 % de la charge de roue. Surface d'appui de la demi-traverse : 0,25 × 1,00 m. Épaisseur de ballast sous traverse : 0,30 m. Calculer les pressions sur le ballast et sur la plateforme.",
    steps_demo: [
      { n: 1, text: "Charge de roue dynamique : Q = 1,3 × 220 / 2 = 143 kN." },
      { n: 2, text: "Charge sur la traverse sous ce rail : F = 0,5 × 143 = 71,5 kN." },
      { n: 3, text: "Pression sur le ballast : σ_b = 71,5 / (0,25 × 1,00) = 286 kPa." },
      { n: 4, text: "Diffusion sur 0,30 m : surface = (0,25 + 0,60) × (1,00 + 0,60) = 0,85 × 1,60 = 1,36 m²." },
      { n: 5, text: "Pression sur la plateforme : σ_p = 71,5 / 1,36 = 53 kPa : acceptable pour une plateforme de qualité moyenne." },
    ],
    result_latex: "Q_{dyn} = 143\\ \\text{kN} \\quad \\sigma_b = \\frac{71{,}5}{0{,}25} = 286\\ \\text{kPa} \\quad \\sigma_p = \\frac{71{,}5}{0{,}85 \\times 1{,}60} = 53\\ \\text{kPa}",
  },
  units: {
    table: [
      ['Charge à l’essieu', 't, kN', 'short ton, kip', '22,5 t ≈ 220 kN'],
      ['Pression', 'kPa', 'psi', '100 kPa = 14,5 psi'],
      ['Écartement de voie', 'mm', 'in', 'Voie normale : 1 435 mm (4 ft 8,5 in)'],
      ['Gauche', 'mm/m', 'in/ft', 'Mesuré par voiture d’enregistrement'],
      ['Ballast', 'granulométrie 31,5/50 mm', '-', 'Roche dure concassée'],
    ],
    note: 'Les charges ferroviaires se donnent souvent en tonnes par essieu : multipliez par 9,81 pour obtenir des kN.',
  },
  hypotheses: {
    items: [
      ['info', 'La diffusion à 45° est une approximation ; les méthodes de poutre sur appui élastique (Zimmermann) décrivent mieux la répartition.'],
      ['info', 'La part de charge reprise par une traverse dépend de la rigidité du rail, des traverses et du ballast.'],
      ['warning', 'Un ballast pollué par des fines perd sa capacité de drainage et de stabilité.'],
      ['warning', 'Les transitions de rigidité (ponts, passages à niveau) concentrent les défauts de nivellement.'],
      ['tip', 'Les voitures d’enregistrement mesurent la géométrie à vitesse commerciale : elles guident le bourrage ciblé.'],
    ],
  },
  simple_examples: {
    examples: [
      {
        title: 'Exemple 1 : charge de roue d’un TGV',
        given: 'Essieu 17 t (167 kN), φ = 1,4',
        find: 'Q_dyn',
        solution_latex: "Q_{dyn} = 1{,}4 \\times \\frac{167}{2} = 117\\ \\text{kN}",
        result: '≈ 117 kN par roue.',
      },
      {
        title: 'Exemple 2 : effet d’un ballast plus épais',
        given: 'Même cas que l’étape pas à pas avec h = 0,50 m',
        find: 'σ_p',
        solution_latex: "\\sigma_p = \\frac{71{,}5}{(0{,}25 + 1{,}0)(1{,}0 + 1{,}0)} = \\frac{71{,}5}{2{,}5} = 29\\ \\text{kPa}",
        result: 'La pression sur la plateforme passe de 53 à 29 kPa.',
      },
      {
        title: 'Exemple 3 : gauche',
        given: 'Variation de dévers de 12 mm sur 3 m',
        find: 'g',
        solution_latex: "g = \\frac{12}{3} = 4\\ \\text{mm/m}",
        result: '4 mm/m : à comparer aux seuils du référentiel selon la vitesse.',
      },
    ],
  },
  real_examples: {
    title: 'Exemple réel — Zones de boue sur une ligne fret',
    examples: [
      {
        context: 'Ligne à fort trafic fret sur plateforme argileuse sans sous-couche',
        scenario: "Sous l'effet des charges répétées et de l'eau, l'argile de la plateforme remonte dans le ballast (« pompage »). Les défauts de nivellement réapparaissent quelques semaines après chaque bourrage.",
        decomposition_latex: "\\text{Eau} + \\text{argile} + \\text{charges répétées} \\Rightarrow \\text{boue dans le ballast} \\Rightarrow \\text{défauts récurrents}",
        lesson: "Le bourrage ne traite que le symptôme : il faut assainir la plateforme (drainage, géotextile, sous-couche granulaire) pour retrouver une voie stable.",
      },
    ],
  },
  diagrams: {
    title: 'Schéma de principe — Coupe d’une voie ballastée',
    diagram_description: [
      'Rail et attaches élastiques avec semelle',
      'Traverse en béton (ou bois) espacée d’environ 60 cm',
      'Ballast 31,5/50 mm, 25 à 35 cm sous traverse',
      'Sous-couche granulaire (et géotextile si nécessaire)',
      'Couche de forme et plateforme drainée',
      'Fossés et drains longitudinaux',
    ],
  },
  mistakes: {
    items: [
      ['Bourrer sans traiter la plateforme', 'Défauts qui reviennent rapidement', 'Diagnostiquer la plateforme (drainage, portance) avant de bourrer.'],
      ['Négliger les transitions de rigidité', 'Marches de nivellement aux abords des ouvrages', 'Prévoir des blocs techniques de transition.'],
      ['Réutiliser un ballast pollué', 'Drainage insuffisant, instabilité', 'Cribler ou remplacer le ballast pollué.'],
    ],
  },
  tips: {
    tips: [
      'Surveillez l’apparition de taches de boue sur le ballast : premier signe de problème de plateforme.',
      'Le meulage des rails réduit les défauts d’usure ondulatoire, le bruit et les efforts dynamiques.',
      'Planifiez le bourrage à partir des mesures, pas à date fixe.',
      'Après bourrage, la voie est moins stable latéralement : limitation temporaire de vitesse jusqu’à consolidation.',
    ],
  },
  norms: {
    norms: [
      ['NF EN 13450', 'Granulats pour ballast de voie ferrée.'],
      ['NF EN 13848', 'Qualité de la géométrie de la voie.'],
      ['Fiches UIC 719 R', 'Ouvrages en terre et couches d’assise ferroviaires.'],
      ['Référentiels SNCF Réseau (IN)', 'Maintenance de la voie et tolérances.'],
    ],
  },
  exercises: {
    exercises: [
      {
        level: 1,
        text: 'Calculer la charge dynamique de roue pour un essieu de 25 t (245 kN) avec φ = 1,3.',
        hint: 'Q = φ P/2.',
        answer_latex: "Q_{dyn} = 1{,}3 \\times \\frac{245}{2} = 159\\ \\text{kN}",
        answer_text: '≈ 159 kN.',
      },
      {
        level: 2,
        text: 'La traverse reprend 45 % de cette charge sur 0,28 m². Calculer la pression sur le ballast.',
        hint: 'F = 0,45 Q.',
        answer_latex: "\\sigma_b = \\frac{0{,}45 \\times 159}{0{,}28} = 256\\ \\text{kPa}",
        answer_text: '≈ 256 kPa.',
      },
      {
        level: 3,
        text: 'Quelle épaisseur h faut-il pour ramener la pression sur la plateforme à 40 kPa (appui 0,28 × 1,00 m, F = 71,6 kN) ? Tester h = 0,40 m.',
        hint: 'σ_p = F / ((b+2h)(l+2h)).',
        answer_latex: "\\sigma_p(0{,}40) = \\frac{71{,}6}{(0{,}28 + 0{,}80)(1{,}00 + 0{,}80)} = \\frac{71{,}6}{1{,}94} = 37\\ \\text{kPa} \\le 40",
        answer_text: 'h = 0,40 m (ballast + sous-couche) suffit.',
      },
    ],
  },
  quiz: {
    title: 'Quiz — Voie ballastée',
    questions: [
      { q: 'Quel est l’écartement de la voie normale ?', options: ['1 000 mm', '1 435 mm', '1 668 mm'], correct: 1, explain: '1 435 mm (voie métrique : 1 000 mm ; ibérique : 1 668 mm).' },
      { q: 'À quoi sert le bourrage ?', options: ['À nettoyer le rail', 'À relever et compacter le ballast sous les traverses pour corriger la géométrie', 'À remplacer les traverses'], correct: 1, explain: 'Il rétablit nivellement et dressage.' },
      { q: 'Quel défaut de géométrie est particulièrement dangereux vis-à-vis du déraillement ?', options: ['Le gauche', 'La couleur du ballast', 'L’usure des traverses'], correct: 0, explain: 'Le gauche peut décharger une roue et favoriser le déraillement.' },
    ],
  },
  exam_questions: {
    questions: [
      'Décrivez la constitution d’une voie ballastée et le rôle de chaque couche.',
      'Calculez la transmission des charges de la roue jusqu’à la plateforme.',
      'Présentez les défauts de géométrie de la voie et les opérations de maintenance associées.',
    ],
  },
  interview_questions: {
    questions: [
      ['Voie ballastée ou voie sur dalle : que choisir ?', "La voie sur dalle demande moins de maintenance et convient aux tunnels, ouvrages et très grandes vitesses, mais coûte plus cher à construire et exige une plateforme très stable ; la voie ballastée est moins chère, facile à régler et à réparer."],
      ['Comment diagnostiquer une zone où la voie se dégrade vite ?', 'Analyse des enregistrements géométriques, inspection visuelle (boue, ballast pollué), sondages et essais de portance de la plateforme, contrôle du drainage, puis traitement adapté.'],
    ],
  },
  practical_case: {
    title: 'Cas pratique — Renforcement d’une ligne pour le fret lourd',
    scenario: 'Une ligne doit passer de 20 t à 25 t à l’essieu. Plateforme de portance moyenne (pression admissible ≈ 60 kPa), ballast de 0,25 m, appui de demi-traverse 0,25 × 1,00 m, traverse reprenant 50 % de la roue, φ = 1,3.',
    description: 'Vérifier la plateforme et proposer une solution.',
    resolutions: [
      "F = 0{,}5 \\times 1{,}3 \\times \\frac{245}{2} = 79{,}6\\ \\text{kN}",
      "\\sigma_p(0{,}25) = \\frac{79{,}6}{(0{,}25 + 0{,}50)(1{,}00 + 0{,}50)} = \\frac{79{,}6}{1{,}125} = 71\\ \\text{kPa} > 60",
      "\\sigma_p(0{,}40) = \\frac{79{,}6}{(1{,}05)(1{,}80)} = 42\\ \\text{kPa} \\le 60 \\quad \\checkmark",
    ],
    conclusion: 'Le passage à 25 t impose d’épaissir l’assise (ballast + sous-couche ≈ 0,40 m), avec renouvellement des traverses et vérification des ouvrages d’art.',
  },
  summary: {
    content: `### La voie ballastée en 5 points
1. Rail → traverses → ballast → sous-couche → plateforme.
2. $Q_{dyn} = \\phi P/2$ ; la traverse reprend 40 à 50 %.
3. Pression sur le ballast puis sur la plateforme (diffusion).
4. Défauts : nivellement, dressage, gauche, écartement.
5. Maintenance : bourrage ciblé, mais d'abord drainage et plateforme saine.`,
  },
  key_points: {
    points: [
      'Écartement normal : 1 435 mm',
      'Q_dyn = φ·P/2',
      'Ballast 25 à 35 cm sous traverse',
      'Plateforme : quelques dizaines de kPa',
      'Le drainage conditionne la tenue de la voie',
    ],
  },
  self_assessment: {
    objectives: [
      'Je connais la constitution d’une voie ballastée',
      'Je sais calculer la transmission des charges jusqu’à la plateforme',
      'Je connais les défauts de géométrie et leur traitement',
      'Je sais diagnostiquer une zone de dégradation rapide',
      "J'ai réussi le quiz avec au moins 2 bonnes réponses sur 3",
    ],
  },
});
