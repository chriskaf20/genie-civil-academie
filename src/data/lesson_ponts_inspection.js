// ── Lesson: Inspection, surveillance et maintenance des ponts — Module 16 ─────
import { buildLesson } from './build_lesson.js';

export const lesson_ponts_inspection = buildLesson({
  moduleId: 16,
  slug: 'ponts_inspection',
  lessonIndex: 3,
  title: "Inspection, Surveillance & Maintenance des Ponts : Classification IQOA, Épreuves et Gestion du Patrimoine",
  subtitle: 'Module 16 — Conception & Maintenance des Ponts',
  level: 'Avancé',
  duration: '10h',
  diagramType: 'bridge_structure',
  tags: ['Ponts', 'Inspection', 'IQOA', 'Surveillance', 'Épreuve de chargement', 'Affouillement', 'Gestion de patrimoine'],
}, {
  definition: {
    title: 'Définition — Garder les ouvrages en service et en sécurité',
    fr: "Surveillance et entretien des ouvrages d'art",
    en: 'Bridge inspection and maintenance',
    metier: "Utilisée par les gestionnaires de réseaux (État, départements, concessionnaires, SNCF Réseau), les inspecteurs d'ouvrages d'art et les bureaux d'études en réparation.",
    content: `Un pont vieillit : le béton se carbonate, l'acier se corrode, les appareils d'appui et les joints s'usent, l'eau affouille les fondations. La **surveillance** détecte les désordres à temps et l'**entretien** les traite avant qu'ils ne deviennent graves.

### Les niveaux de surveillance (France)
- **Surveillance continue** par les agents du gestionnaire (passages réguliers, après crues ou accidents).
- **Visites** d'évaluation, en général annuelles.
- **Inspections détaillées périodiques** (IDP) par des inspecteurs qualifiés, en général tous les 6 ans (plus souvent pour les ouvrages sensibles), avec des moyens d'accès (nacelles, plongeurs).
- **Inspections exceptionnelles** et **diagnostics** approfondis si nécessaire.

### La cotation IQOA
Chaque ouvrage reçoit une classe d'état : **1** (bon état), **2** (défauts mineurs, entretien courant), **2E** (défauts nécessitant un entretien spécialisé), **3** (structure altérée, réparation à prévoir), **3U** (altération grave, réparation urgente).

> 💡 Les effondrements de ponts (Gênes en 2018, Mirepoix-sur-Tarn en 2019) ont rappelé que la surveillance est une condition de sécurité, pas une option budgétaire.`,
  },
  importance: {
    content: `- **Sécurité des usagers** : détecter à temps corrosion de câbles, affouillement ou fissures structurelles.
- **Économie** : une maintenance préventive coûte bien moins qu'une réparation lourde ou une reconstruction.
- **Disponibilité** : fermer un pont coupe des itinéraires essentiels.
- **Patrimoine** : en France, plus de 200 000 ponts routiers, dont une part notable en état préoccupant.

> ⚠️ **À retenir** : les défauts les plus dangereux (câbles de précontrainte corrodés, affouillements) sont souvent invisibles sans investigations spécifiques.`,
  },
  applications: {
    examples: [
      ['Pont en maçonnerie', 'Inspection des voûtes, joints, fondations en rivière (plongeurs) après crue.'],
      ['Pont en béton précontraint', 'Recherche de fissures, mesures de flèche et investigations sur les câbles (gammagraphie).'],
      ['Pont métallique', 'Contrôle de la corrosion, des assemblages rivetés et des fissures de fatigue.'],
      ['Équipements', 'Remplacement des joints de chaussée, appareils d’appui et étanchéité.'],
      ['Requalification', 'Épreuve de chargement avant remise en service après réparation.'],
    ],
  },
  theory: {
    title: 'Théorie — Désordres, mesures et décisions',
    content: `### 1. Principaux désordres
- **Béton** : fissures, éclatements dus à la corrosion des armatures, efflorescences, alcali-réaction.
- **Précontrainte** : corrosion des câbles mal injectés, rupture de fils.
- **Acier** : corrosion, fissures de fatigue aux soudures et aux assemblages.
- **Fondations** : **affouillement** (érosion du lit autour des piles), tassements.
- **Équipements** : joints, appareils d'appui écrasés ou bloqués, étanchéité défaillante.

### 2. Perte de section par corrosion
$$A_{rés} = \\frac{\\pi (d - 2x)^2}{4}$$
($x$ : épaisseur corrodée par face).

### 3. Épreuve de chargement
On place des camions de masse connue et on mesure la flèche. On compare à la flèche théorique et on vérifie le retour après déchargement :
$$\\eta = \\frac{w_{mesurée}}{w_{théorique}} \\qquad r = \\frac{w_{résiduelle}}{w_{mesurée}}$$
Un rapport $\\eta$ proche ou inférieur à 1 et une faible flèche résiduelle traduisent un comportement élastique sain.

### 4. Hiérarchisation
On combine l'état (IQOA), l'importance de l'ouvrage (trafic, itinéraire) et l'évolution des désordres pour programmer les interventions dans le budget disponible.`,
  },
  formulas: {
    title: 'Formules essentielles — Surveillance des ouvrages',
    formulas: [
      {
        name: 'Section résiduelle d’une barre corrodée',
        latex: "A_{rés} = \\frac{\\pi (d - 2x)^2}{4} \\qquad \\frac{A_{rés}}{A_0} = \\left(1 - \\frac{2x}{d}\\right)^2",
        description: 'Corrosion uniforme sur le pourtour de la barre.',
        vars: [
          ['A_{rés}', 'Section résiduelle', 'mm²', 'Section d’acier restante.'],
          ['d', 'Diamètre initial', 'mm', 'Diamètre nominal.'],
          ['x', 'Épaisseur corrodée par face', 'mm', 'Mesurée après piquage du béton.'],
        ],
        rule: "Perdre 1 mm sur le pourtour d'une barre de 12 mm lui retire 31 % de section.",
      },
      {
        name: "Rapport d'épreuve",
        latex: "\\eta = \\frac{w_{mesurée}}{w_{théorique}}",
        description: 'Comparaison de la flèche mesurée sous charge à la flèche calculée.',
        vars: [
          ['\\eta', "Rapport d'épreuve", '-', 'Proche de 0,7 à 1,0 pour un ouvrage sain.'],
          ['w_{mesurée}', 'Flèche mesurée', 'mm', 'Par nivellement ou capteurs.'],
          ['w_{théorique}', 'Flèche calculée', 'mm', 'Sous la même charge, avec les caractéristiques de l’ouvrage.'],
        ],
      },
      {
        name: 'Taux de flèche résiduelle',
        latex: "r = \\frac{w_{résiduelle}}{w_{mesurée}}",
        description: 'Part de la flèche qui ne revient pas après déchargement.',
        vars: [
          ['r', 'Taux de résiduelle', '-', 'Faible (quelques %) pour un comportement élastique.'],
          ['w_{résiduelle}', 'Flèche après déchargement', 'mm', 'Mesurée après stabilisation.'],
        ],
      },
      {
        name: 'Vitesse de progression d’un désordre',
        latex: "v = \\frac{\\Delta a}{\\Delta t}",
        description: 'Ouverture de fissure ou profondeur d’affouillement suivie dans le temps.',
        vars: [
          ['v', 'Vitesse d’évolution', 'mm/an', 'Un désordre évolutif est prioritaire.'],
          ['\\Delta a', 'Variation mesurée', 'mm', 'Entre deux inspections.'],
          ['\\Delta t', 'Durée', 'an', 'Intervalle entre mesures.'],
        ],
      },
    ],
  },
  stepbystep: {
    title: 'Calcul complet — Épreuve de chargement d’un pont réparé',
    problem: "Après réparation, un pont à poutres est chargé par 4 camions de 32 t. La flèche théorique à mi-portée est de 18,0 mm. On mesure 14,8 mm sous charge et 0,9 mm après déchargement. Interpréter l'épreuve.",
    steps_demo: [
      { n: 1, text: "Charge totale : 4 × 32 = 128 t, soit environ 1 256 kN." },
      { n: 2, text: "Rapport d'épreuve : η = 14,8 / 18,0 = 0,82." },
      { n: 3, text: "Résiduelle : r = 0,9 / 14,8 = 6 %." },
      { n: 4, text: "Interprétation : flèche inférieure à la théorie (rigidité réelle supérieure : équipements, continuités), retour quasi complet." },
      { n: 5, text: "Conclusion : comportement élastique satisfaisant, l'ouvrage peut être remis en service ; la valeur de référence est archivée pour les suivis futurs." },
    ],
    result_latex: "\\eta = \\frac{14{,}8}{18{,}0} = 0{,}82 \\qquad r = \\frac{0{,}9}{14{,}8} = 6\\,\\% \\quad \\Rightarrow \\text{comportement élastique satisfaisant}",
  },
  units: {
    table: [
      ['Ouverture de fissure', 'mm', 'in', '0,3 mm ≈ 0,012 in (fissuromètre)'],
      ['Flèche', 'mm', 'in', 'Nivellement de précision au 1/10 mm'],
      ['Charge d’épreuve', 't, kN', 'kip', '1 t ≈ 9,81 kN'],
      ['Perte de section', '%', '%', 'Par rapport à la section nominale'],
      ['Profondeur d’affouillement', 'm', 'ft', 'Mesurée par sondage ou plongeur'],
    ],
    note: 'Les mesures de suivi n’ont de valeur que si elles sont reproductibles : mêmes repères, mêmes appareils, mêmes conditions (température).',
  },
  hypotheses: {
    items: [
      ['info', 'La cotation IQOA décrite est celle du réseau routier national français ; d’autres gestionnaires ont des échelles similaires.'],
      ['info', 'Le calcul de section résiduelle suppose une corrosion uniforme ; la corrosion par piqûres est plus dangereuse localement.'],
      ['warning', 'Une épreuve de chargement ne prouve pas l’absence de défauts locaux (câbles corrodés) : elle complète l’inspection.'],
      ['warning', 'L’affouillement progresse surtout pendant les crues, quand il est invisible.'],
      ['tip', 'Installez des témoins (jauges, fissuromètres) sur les fissures pour savoir si elles évoluent.'],
    ],
  },
  simple_examples: {
    examples: [
      {
        title: 'Exemple 1 : armature corrodée',
        given: 'HA25 ayant perdu 2 mm sur chaque face',
        find: 'Section résiduelle',
        solution_latex: "\\frac{A_{rés}}{A_0} = \\left(1 - \\frac{4}{25}\\right)^2 = 0{,}84^2 = 0{,}706",
        result: '70,6 % de la section : perte de près de 30 %.',
      },
      {
        title: 'Exemple 2 : fissure évolutive',
        given: 'Ouverture 0,20 mm en 2019, 0,45 mm en 2024',
        find: 'Vitesse d’évolution',
        solution_latex: "v = \\frac{0{,}45 - 0{,}20}{5} = 0{,}05\\ \\text{mm/an}",
        result: 'Fissure active : diagnostic approfondi à programmer.',
      },
      {
        title: 'Exemple 3 : affouillement',
        given: 'Semelle de pile fondée à 2,0 m sous le lit ; mesure : fosse de 1,6 m au pied de la pile',
        find: 'Marge restante',
        solution_latex: "\\text{Marge} = 2{,}0 - 1{,}6 = 0{,}4\\ \\text{m}",
        result: 'Marge très faible : protection d’urgence (enrochements) et surveillance renforcée en crue.',
      },
    ],
  },
  real_examples: {
    title: 'Exemple réel — Effondrement du viaduc Polcevera, Gênes (2018)',
    examples: [
      {
        context: 'Pont à haubans en béton précontraint de 1967, 43 morts',
        scenario: "Les haubans étaient des tirants en béton précontraint enrobant les câbles : la corrosion des câbles, difficile à inspecter, a progressé pendant des décennies. La rupture d'un hauban a entraîné l'effondrement d'une travée entière.",
        decomposition_latex: "\\text{Câbles inaccessibles} + \\text{corrosion} + \\text{surveillance insuffisante} \\Rightarrow \\text{rupture d'un hauban} \\Rightarrow \\text{effondrement}",
        lesson: "Les ouvrages dont les éléments vitaux ne sont pas inspectables exigent des investigations spécifiques (instrumentation, auscultation non destructive) et un programme de surveillance renforcé.",
      },
    ],
  },
  diagrams: {
    title: 'Schéma de principe — Cycle de gestion d’un ouvrage',
    diagram_description: [
      'Inventaire et dossier d’ouvrage (plans, calculs, historique)',
      'Surveillance continue, visites annuelles, inspections détaillées périodiques',
      'Cotation de l’état (IQOA 1, 2, 2E, 3, 3U) et évolution des désordres',
      'Diagnostic approfondi si nécessaire (essais, recalcul)',
      'Programmation : entretien courant, réparations, renforcement, reconstruction',
      'Travaux, réception (épreuve éventuelle) et mise à jour du dossier',
    ],
  },
  mistakes: {
    items: [
      ['Inspecter sans le dossier de l’ouvrage', 'Désordres mal interprétés', 'Consulter plans, calculs et inspections précédentes avant la visite.'],
      ['Ne pas mesurer les fissures', 'Impossible de savoir si elles évoluent', 'Relever ouverture, longueur, position et poser des témoins.'],
      ['Reporter indéfiniment l’entretien courant', 'Petits défauts devenus réparations lourdes', 'Entretenir joints, étanchéité et évacuation des eaux chaque année.'],
    ],
  },
  tips: {
    tips: [
      'L’eau est l’ennemi n°1 des ponts : vérifiez d’abord l’étanchéité, les gargouilles et les joints.',
      'Après chaque crue importante, faites contrôler les appuis en rivière.',
      'Photographiez chaque désordre avec une échelle et sa localisation précise.',
      'Les capteurs connectés (inclinomètres, fibres optiques) permettent une surveillance continue des ouvrages sensibles.',
    ],
  },
  norms: {
    norms: [
      ['ITSEOA (Instruction technique pour la surveillance et l’entretien des ouvrages d’art)', 'Organisation de la surveillance des ouvrages en France.'],
      ['Méthode IQOA', 'Classification de l’état des ouvrages d’art du réseau national.'],
      ['NF EN 1504', 'Réparation et protection des structures en béton.'],
      ['Guides Cerema / LCPC sur l’affouillement et la précontrainte', 'Diagnostic des pathologies spécifiques.'],
    ],
  },
  exercises: {
    exercises: [
      {
        level: 1,
        text: 'Une barre HA16 a perdu 1,5 mm par face. Quel pourcentage de section reste-t-il ?',
        hint: '(1 − 2x/d)².',
        answer_latex: "\\left(1 - \\frac{3}{16}\\right)^2 = 0{,}8125^2 = 0{,}66",
        answer_text: '66 % de la section initiale.',
      },
      {
        level: 2,
        text: 'Lors d’une épreuve, la flèche théorique est 22 mm, la flèche mesurée 25 mm et la résiduelle 4 mm. Interpréter.',
        hint: 'Calculer η et r.',
        answer_latex: "\\eta = \\frac{25}{22} = 1{,}14 \\qquad r = \\frac{4}{25} = 16\\,\\%",
        answer_text: 'Ouvrage plus souple que prévu et résiduelle élevée : comportement anormal, investigations complémentaires nécessaires avant remise en service.',
      },
      {
        level: 3,
        text: 'Un gestionnaire dispose d’un budget pour un seul ouvrage : A (IQOA 3U, 500 véh/j) ou B (IQOA 3, 25 000 véh/j, désordres évolutifs). Quelle démarche ?',
        hint: 'Combiner sécurité immédiate, enjeu et évolution.',
        answer_text: 'L’urgence 3U impose d’abord des mesures de sécurité sur A (limitation de tonnage, fermeture, étaiement). Les travaux lourds se décident ensuite selon le risque (état × enjeu) : B, très circulé et évolutif, est prioritaire pour la réparation si A est sécurisé.',
      },
    ],
  },
  quiz: {
    title: 'Quiz — Surveillance des ponts',
    questions: [
      { q: 'Que signifie une classe IQOA 3U ?', options: ['Ouvrage en bon état', 'Défauts mineurs', 'Altération grave nécessitant une intervention urgente'], correct: 2, explain: '3U : structure gravement altérée, urgence.' },
      { q: 'Quelle est la fréquence usuelle des inspections détaillées périodiques ?', options: ['Tous les ans', 'Tous les 6 ans environ', 'Tous les 30 ans'], correct: 1, explain: 'En général tous les 6 ans, plus souvent pour les ouvrages sensibles.' },
      { q: 'Quel phénomène menace les piles en rivière ?', options: ['La carbonatation', "L'affouillement", 'Le fluage'], correct: 1, explain: "L'érosion du lit autour des appuis peut déchausser les fondations." },
    ],
  },
  exam_questions: {
    questions: [
      'Décrivez l’organisation de la surveillance des ouvrages d’art et le rôle de chaque niveau.',
      'Présentez les principaux désordres des ponts en béton, en acier et en maçonnerie.',
      'Expliquez le déroulement et l’interprétation d’une épreuve de chargement.',
    ],
  },
  interview_questions: {
    questions: [
      ['Que faites-vous si vous découvrez une fissure importante sur un pont en service ?', 'Je la relève (position, ouverture, longueur, photo), j’évalue son lien avec la structure (flexion, effort tranchant, corrosion), j’alerte le gestionnaire, je propose des mesures conservatoires si nécessaire (limitation de charge), et je fais poser des témoins et un diagnostic.'],
      ['Pourquoi les ponts en béton précontraint anciens posent-ils des problèmes ?', "Parce que l'injection des gaines pouvait être incomplète, laissant les câbles exposés à la corrosion sans signe visible ; leur diagnostic demande des investigations spécifiques (gammagraphie, ouverture de fenêtres, instrumentation)."],
    ],
  },
  practical_case: {
    title: 'Cas pratique — Pont-dalle en béton armé avec armatures corrodées',
    scenario: 'Un pont-dalle de 1965 présente des éclatements de béton en sous-face. Les HA20 inférieurs ont perdu 1,5 mm par face sur 20 % de la largeur ; l’enrobage mesuré est de 15 mm.',
    description: 'Évaluer la perte de capacité et proposer une stratégie.',
    resolutions: [
      "\\frac{A_{rés}}{A_0} = \\left(1 - \\frac{3}{20}\\right)^2 = 0{,}72 \\ \\text{sur 20 \\% de la largeur}",
      "\\text{Perte globale d'armatures : } 0{,}20 \\times (1 - 0{,}72) = 5{,}6\\,\\% \\Rightarrow \\text{capacité réduite d'environ 5 à 6 \\%}",
      "\\text{Stratégie : purge, traitement des aciers, mortier de réparation, protection (et renfort composite si le recalcul l'exige)}",
    ],
    conclusion: "La perte de capacité est modérée mais l'enrobage insuffisant laisse prévoir une extension : on répare et on protège rapidement, puis on vérifie par recalcul que la capacité reste suffisante ; un renfort composite est ajouté si nécessaire.",
  },
  summary: {
    content: `### La surveillance des ponts en 5 points
1. Surveillance continue, visites annuelles, IDP (≈ 6 ans), inspections exceptionnelles.
2. Cotation IQOA : 1, 2, 2E, 3, 3U.
3. Corrosion : $A_{rés}/A_0 = (1 - 2x/d)^2$.
4. Épreuve : $\\eta = w_{mes}/w_{th}$ et flèche résiduelle faible.
5. Prioriser selon l'état, l'enjeu et l'évolution des désordres.`,
  },
  key_points: {
    points: [
      'IQOA : 1, 2, 2E, 3, 3U',
      'IDP en général tous les 6 ans',
      'A_rés/A₀ = (1 − 2x/d)²',
      'Épreuve : η ≤ 1 et résiduelle faible',
      "L'eau est l'ennemi n°1 des ouvrages",
    ],
  },
  self_assessment: {
    objectives: [
      'Je connais l’organisation de la surveillance des ouvrages d’art',
      'Je sais reconnaître les principaux désordres',
      'Je sais calculer une perte de section par corrosion',
      'Je sais interpréter une épreuve de chargement',
      "J'ai réussi le quiz avec au moins 2 bonnes réponses sur 3",
    ],
  },
});
