// ── Lesson: Bassins versants et ruissellement — Module 37 ────────────────────
import { buildLesson } from './build_lesson.js';

export const lesson_hydrologie_ruissellement = buildLesson({
  moduleId: 37,
  slug: 'hydrologie_ruissellement',
  lessonIndex: 2,
  title: "Bassins Versants et Ruissellement : Morphométrie, Méthode SCS-CN et Hydrogramme Unitaire",
  subtitle: 'Module 37 — Hydrologie & Gestion des eaux pluviales',
  level: 'Intermédiaire',
  duration: '6h',
  tags: ['Bassin versant', 'Ruissellement', 'SCS-CN', 'Hydrogramme unitaire', 'Gravelius', 'Pluie nette'],
}, {
  definition: {
    title: 'Définition — Transformer une pluie en hydrogramme de crue',
    fr: 'Ruissellement et réponse hydrologique d’un bassin versant',
    en: 'Runoff and catchment response',
    metier: "Utilisé par les hydrologues, les ingénieurs VRD et ouvrages hydrauliques, les bureaux d'études en assainissement et en aménagement.",
    content: `Un **bassin versant** est la surface qui draine toutes les eaux vers un même exutoire. Sa réponse à une pluie dépend de :

- sa **forme** et sa **taille** (temps de concentration) ;
- sa **pente** et son réseau hydrographique ;
- l'**occupation du sol** et la nature des sols (infiltration).

### Deux étapes
1. **Fonction de production** : quelle part de la pluie ruisselle ? C'est la **pluie nette** (méthode SCS-CN, coefficient de ruissellement).
2. **Fonction de transfert** : comment cette pluie nette arrive-t-elle à l'exutoire dans le temps ? C'est l'**hydrogramme** (hydrogramme unitaire).

> 💡 La méthode rationnelle donne seulement un débit de pointe ; l'hydrogramme donne aussi le volume et la forme de la crue, indispensables pour dimensionner un bassin ou un barrage.`,
  },
  importance: {
    content: `- **Dimensionnement** : ponts, buses, fossés, bassins dépendent de la crue de projet.
- **Urbanisation** : imperméabiliser augmente fortement le ruissellement et la pointe de crue.
- **Inondations** : prévision et cartographie des zones à risque.
- **Réglementation** : les dossiers loi sur l'eau exigent une analyse de l'impact du projet.

> ⚠️ **À retenir** : un sol saturé par des pluies antérieures ruisselle beaucoup plus ; l'état initial du bassin compte autant que la pluie.`,
  },
  applications: {
    examples: [
      ['Ouvrage de franchissement routier', 'Hydrogramme de crue centennale du ruisseau.'],
      ['Zone d’activités', 'Comparaison du ruissellement avant et après aménagement.'],
      ['Bassin rural', 'Pluie nette par SCS-CN selon cultures et sols.'],
      ['Étude d’inondation', 'Hydrogrammes injectés dans un modèle hydraulique.'],
      ['Petit barrage', 'Volume de crue à laminer.'],
    ],
  },
  theory: {
    title: 'Théorie — Production et transfert',
    content: `### 1. Morphométrie
Indice de compacité de Gravelius :
$$K_G = 0{,}28 \\, \\frac{P}{\\sqrt{A}}$$
($P$ périmètre en km, $A$ surface en km²). $K_G$ ≈ 1 : bassin ramassé (crues rapides et pointues) ; $K_G$ > 1,5 : bassin allongé.

### 2. Méthode SCS-CN (Curve Number)
$$S = \\frac{25\\,400}{CN} - 254 \\qquad I_a = 0{,}2\\,S \\qquad Q = \\frac{(P - I_a)^2}{P - I_a + S}$$
($P$, $Q$, $S$ en mm ; $Q = 0$ si $P \\leq I_a$). CN varie de 30 (forêt sur sol perméable) à 98 (surfaces imperméables).

### 3. Hydrogramme unitaire triangulaire (SCS)
Temps de montée : $t_p = \\frac{\\Delta t}{2} + 0{,}6 \\, t_c$ ; base : $t_b = 2{,}67 \\, t_p$.
$$q_p = \\frac{0{,}208 \\, A \\, Q}{t_p}$$
($q_p$ en m³/s, $A$ en km², $Q$ en mm, $t_p$ en h).

### 4. Effet de l'urbanisation
L'augmentation de CN (ou de C) et la réduction de $t_c$ (réseaux, surfaces lisses) augmentent à la fois le volume ruisselé et le débit de pointe.`,
  },
  formulas: {
    title: 'Formules essentielles — Ruissellement',
    formulas: [
      {
        name: 'Indice de compacité de Gravelius',
        latex: "K_G = 0{,}28 \\, \\frac{P}{\\sqrt{A}}",
        description: 'Forme du bassin versant.',
        vars: [
          ['K_G', 'Indice de compacité', '-', '≥ 1.'],
          ['P', 'Périmètre', 'km', ''],
          ['A', 'Surface', 'km²', ''],
        ],
      },
      {
        name: 'Pluie nette SCS-CN',
        latex: "Q = \\frac{(P - 0{,}2S)^2}{P + 0{,}8S} \\qquad S = \\frac{25\\,400}{CN} - 254",
        description: 'Lame ruisselée pour une pluie totale P.',
        vars: [
          ['Q', 'Pluie nette (lame ruisselée)', 'mm', ''],
          ['P', 'Pluie totale', 'mm', ''],
          ['S', 'Rétention potentielle maximale', 'mm', ''],
          ['CN', 'Curve Number', '-', '30 à 98.'],
        ],
      },
      {
        name: 'Pointe de l’hydrogramme unitaire SCS',
        latex: "q_p = \\frac{0{,}208 \\, A \\, Q}{t_p} \\qquad t_p = \\frac{\\Delta t}{2} + 0{,}6\\, t_c",
        description: 'Hydrogramme triangulaire de base 2,67 t_p.',
        vars: [
          ['q_p', 'Débit de pointe', 'm³/s', ''],
          ['A', 'Surface', 'km²', ''],
          ['t_p', 'Temps de montée', 'h', ''],
          ['t_c', 'Temps de concentration', 'h', ''],
          ['\\Delta t', 'Durée de la pluie nette', 'h', ''],
        ],
      },
      {
        name: 'Volume ruisselé',
        latex: "V = 1\\,000 \\, A \\, Q",
        description: 'Volume de crue en m³.',
        vars: [
          ['V', 'Volume', 'm³', ''],
          ['A', 'Surface', 'km²', ''],
          ['Q', 'Lame ruisselée', 'mm', ''],
        ],
      },
    ],
  },
  stepbystep: {
    title: 'Calcul complet — Hydrogramme d’un petit bassin rural',
    problem: "Un bassin de 5 km² (périmètre 12 km, t_c = 1,5 h, CN = 80) reçoit une pluie de projet de 60 mm. On retient une pluie nette de durée Δt = 0,5 h. Calculer K_G, la lame ruisselée, le volume et le débit de pointe.",
    steps_demo: [
      { n: 1, text: "Gravelius : K_G = 0,28 × 12 / √5 = 1,50 : bassin allongé." },
      { n: 2, text: "S = 25 400 / 80 − 254 = 63,5 mm ; I_a = 12,7 mm." },
      { n: 3, text: "Q = (60 − 12,7)² / (60 + 50,8) = 2 237 / 110,8 = 20,2 mm (coefficient de ruissellement apparent 0,34)." },
      { n: 4, text: "Volume : V = 1 000 × 5 × 20,2 = 101 000 m³." },
      { n: 5, text: "t_p = 0,25 + 0,6 × 1,5 = 1,15 h ; q_p = 0,208 × 5 × 20,2 / 1,15 = 18,3 m³/s ; base de l'hydrogramme : 2,67 × 1,15 = 3,1 h." },
    ],
    result_latex: "Q = \\frac{(60 - 12{,}7)^2}{60 + 50{,}8} = 20{,}2\\ \\text{mm} \\qquad q_p = \\frac{0{,}208 \\times 5 \\times 20{,}2}{1{,}15} = 18{,}3\\ \\text{m}^3/\\text{s}",
  },
  units: {
    table: [
      ['Surface', 'km² ou ha', 'mi² ou acre', '1 km² = 100 ha = 0,386 mi²'],
      ['Pluie', 'mm', 'in', '1 in = 25,4 mm'],
      ['Débit', 'm³/s', 'cfs', '1 m³/s = 35,3 cfs'],
      ['Volume', 'm³', 'acre-ft', '1 acre-ft = 1 233 m³'],
      ['Temps', 'h ou min', 'h', 'Cohérent avec la formule'],
    ],
    note: 'La formule SCS d’origine est en pouces : S = 1 000/CN − 10 ; la version métrique utilise 25 400/CN − 254.',
  },
  hypotheses: {
    items: [
      ['info', 'La méthode SCS-CN suppose des conditions d’humidité antérieure moyennes (AMC II) ; il existe des corrections pour sols secs ou humides.'],
      ['info', 'L’hydrogramme unitaire suppose une réponse linéaire du bassin : doubler la pluie nette double les débits.'],
      ['warning', 'Ces méthodes sont calibrées sur des petits et moyens bassins ; au-delà de quelques centaines de km², il faut un modèle distribué.'],
      ['warning', 'Le choix de CN est sensible : quelques points de CN changent fortement la pluie nette pour les pluies modérées.'],
      ['tip', 'Calez les paramètres sur des crues observées quand des mesures existent.'],
    ],
  },
  simple_examples: {
    examples: [
      {
        title: 'Exemple 1 : effet de l’urbanisation',
        given: 'P = 60 mm ; CN passe de 70 à 90',
        find: 'Lames ruisselées',
        solution_latex: "CN\\ 70 : S = 108{,}9 ; \\ Q = \\frac{(60 - 21{,}8)^2}{60 + 87{,}1} = 9{,}9\\ \\text{mm} \\qquad CN\\ 90 : S = 28{,}2 ; \\ Q = \\frac{(60 - 5{,}6)^2}{60 + 22{,}6} = 35{,}8\\ \\text{mm}",
        result: 'Le ruissellement est multiplié par environ 3,6.',
      },
      {
        title: 'Exemple 2 : CN pondéré',
        given: '60 % prairie (CN 69), 30 % culture (CN 81), 10 % voirie (CN 98)',
        find: 'CN moyen',
        solution_latex: "CN = 0{,}6 \\times 69 + 0{,}3 \\times 81 + 0{,}1 \\times 98 = 75{,}5",
        result: 'CN ≈ 75.',
      },
      {
        title: 'Exemple 3 : compacité',
        given: 'A = 16 km² ; P = 16 km',
        find: 'K_G',
        solution_latex: "K_G = 0{,}28 \\times \\frac{16}{4} = 1{,}12",
        result: 'Bassin ramassé : crues rapides.',
      },
    ],
  },
  real_examples: {
    title: 'Exemple réel — Crues éclair en zone périurbaine méditerranéenne',
    examples: [
      {
        context: 'Petits bassins versants urbanisés du sud de la France',
        scenario: "Lors d'épisodes méditerranéens (plus de 200 mm en quelques heures), des bassins de quelques km² fortement urbanisés ont produit des crues éclair : la montée des eaux s'est faite en moins d'une heure. Les études ont montré que l'imperméabilisation et la canalisation des ruisseaux avaient réduit le temps de concentration et augmenté les débits de pointe.",
        decomposition_latex: "CN \\uparrow + t_c \\downarrow \\Rightarrow Q \\uparrow \\text{ et } q_p \\uparrow\\uparrow",
        lesson: "Les projets d'aménagement doivent compenser l'imperméabilisation (rétention, infiltration) et préserver les axes d'écoulement naturels.",
      },
    ],
  },
  diagrams: {
    title: 'Schéma de principe — De la pluie à l’hydrogramme',
    diagram_description: [
      'Pluie de projet (hyétogramme) issue des courbes IDF',
      'Pertes initiales et infiltration : fonction de production (SCS-CN)',
      'Pluie nette',
      'Transfert par hydrogramme unitaire (t_p, t_b)',
      'Hydrogramme de crue à l’exutoire : pointe et volume',
      'Utilisation : dimensionnement d’ouvrages, cartographie',
    ],
  },
  mistakes: {
    items: [
      ['Utiliser la méthode rationnelle sur un grand bassin', 'Débit de pointe faux', 'Utiliser un hydrogramme ou un modèle.'],
      ['Oublier les pertes initiales', 'Ruissellement surestimé pour les petites pluies', 'Appliquer I_a = 0,2 S.'],
      ['Mélanger mm, km² et m³', 'Erreurs d’un facteur 1 000', 'V = 1 000 × A(km²) × Q(mm).'],
    ],
  },
  tips: {
    tips: [
      'Délimitez le bassin versant sur un MNT avec un SIG.',
      'Comparez toujours l’état actuel et l’état projeté.',
      'Testez la sensibilité des résultats à CN et à t_c.',
      'Contrôlez la cohérence avec les débits observés de bassins voisins.',
    ],
  },
  norms: {
    norms: [
      ['NF EN 752', 'Réseaux d’évacuation et d’assainissement à l’extérieur des bâtiments.'],
      ['Guide « La ville et son assainissement » (CERTU, 2003)', 'Méthodes de calcul des eaux pluviales en France.'],
      ['USDA NRCS, National Engineering Handbook, partie 630', 'Méthode SCS-CN et hydrogrammes unitaires.'],
      ['Code de l’environnement, rubrique 2.1.5.0', 'Rejets d’eaux pluviales soumis à la loi sur l’eau.'],
    ],
  },
  exercises: {
    exercises: [
      {
        level: 1,
        text: 'Calculer S pour CN = 75.',
        hint: 'S = 25 400 / CN − 254.',
        answer_latex: "S = \\frac{25\\,400}{75} - 254 = 84{,}7\\ \\text{mm}",
        answer_text: '84,7 mm.',
      },
      {
        level: 2,
        text: 'Avec CN = 75, quelle lame ruisselle pour P = 80 mm ?',
        hint: 'I_a = 16,9 mm.',
        answer_latex: "Q = \\frac{(80 - 16{,}9)^2}{80 + 67{,}8} = \\frac{3\\,982}{147{,}8} = 26{,}9\\ \\text{mm}",
        answer_text: '26,9 mm.',
      },
      {
        level: 3,
        text: 'Calculer le débit de pointe d’un bassin de 12 km² (t_c = 2 h, Δt = 1 h) pour Q = 26,9 mm.',
        hint: 't_p = 0,5 + 1,2 = 1,7 h.',
        answer_latex: "q_p = \\frac{0{,}208 \\times 12 \\times 26{,}9}{1{,}7} = 39{,}5\\ \\text{m}^3/\\text{s}",
        answer_text: 'Environ 39,5 m³/s.',
      },
    ],
  },
  quiz: {
    title: 'Quiz — Ruissellement',
    questions: [
      { q: 'Que représente un CN élevé ?', options: ['Un sol très perméable', 'Un ruissellement important', 'Une forte évaporation'], correct: 1, explain: 'CN proche de 100 : surfaces imperméables.' },
      { q: 'Un bassin avec K_G = 1,05 est…', options: ['Allongé', 'Ramassé', 'Plat'], correct: 1, explain: 'K_G proche de 1 : forme compacte.' },
      { q: 'Que donne l’hydrogramme en plus de la méthode rationnelle ?', options: ['Le volume et la forme de la crue', 'La qualité de l’eau', 'La pente'], correct: 0, explain: 'L’hydrogramme décrit tout l’événement.' },
    ],
  },
  exam_questions: {
    questions: [
      'Expliquez les fonctions de production et de transfert.',
      'Présentez la méthode SCS-CN et ses limites.',
      'Quels sont les effets de l’urbanisation sur un hydrogramme de crue ?',
    ],
  },
  interview_questions: {
    questions: [
      ['Comment estimez-vous la crue d’un bassin non jaugé ?', 'Par plusieurs méthodes (rationnelle, SCS-CN + hydrogramme unitaire, formules régionales), en comparant avec des bassins jaugés voisins et en retenant une valeur argumentée.'],
      ['Comment compensez-vous l’imperméabilisation d’un projet ?', 'En limitant le débit de fuite au débit avant aménagement grâce à des ouvrages de rétention et d’infiltration (noues, bassins, toitures stockantes).'],
    ],
  },
  practical_case: {
    title: 'Cas pratique — Impact d’une zone d’activités',
    scenario: 'Un bassin de 0,8 km² passe de CN = 70 à CN = 88 après aménagement. Pluie de projet P = 70 mm.',
    description: 'Comparer les volumes ruisselés et en déduire le volume à stocker pour revenir au volume initial.',
    resolutions: [
      "CN\\ 70 : S = 108{,}9 ; \\ Q = \\frac{(70 - 21{,}8)^2}{70 + 87{,}1} = 14{,}8\\ \\text{mm} \\Rightarrow V = 1\\,000 \\times 0{,}8 \\times 14{,}8 = 11\\,840\\ \\text{m}^3",
      "CN\\ 88 : S = 34{,}6 ; \\ Q = \\frac{(70 - 6{,}9)^2}{70 + 27{,}7} = 40{,}7\\ \\text{mm} \\Rightarrow V = 32\\,560\\ \\text{m}^3",
      "\\text{Excédent} : 32\\,560 - 11\\,840 = 20\\,720\\ \\text{m}^3 \\text{ à stocker ou infiltrer}",
    ],
    conclusion: 'Le projet génère environ 20 700 m³ de ruissellement supplémentaire : une combinaison de noues d’infiltration et de bassins de rétention est nécessaire.',
  },
  summary: {
    content: `### Le ruissellement en 5 points
1. Bassin versant : surface, forme ($K_G$), pente, sols.
2. Production : $Q = (P - 0{,}2S)^2 / (P + 0{,}8S)$.
3. Transfert : hydrogramme unitaire, $q_p = 0{,}208 A Q / t_p$.
4. Volume : $V = 1\\,000 \\, A \\, Q$.
5. L'urbanisation augmente le volume et la pointe : compenser.`,
  },
  key_points: {
    points: [
      'K_G = 0,28 P / √A',
      'S = 25 400 / CN − 254',
      'Q = (P − 0,2S)² / (P + 0,8S)',
      'q_p = 0,208 A Q / t_p',
      'Urbanisation → crues plus fortes',
    ],
  },
  self_assessment: {
    objectives: [
      'Je sais caractériser un bassin versant',
      'Je sais calculer une pluie nette par SCS-CN',
      'Je sais construire un hydrogramme unitaire triangulaire',
      'Je sais évaluer l’impact d’un aménagement',
      "J'ai réussi le quiz avec au moins 2 bonnes réponses sur 3",
    ],
  },
});
