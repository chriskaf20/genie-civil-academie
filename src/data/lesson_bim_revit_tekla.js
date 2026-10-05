// ── Lesson: Modélisation BIM structure — Revit et Tekla — Module 5 ────────────
import { buildLesson } from './build_lesson.js';

export const lesson_bim_revit_tekla = buildLesson({
  moduleId: 5,
  slug: 'bim_revit_tekla',
  lessonIndex: 4,
  title: "Modélisation BIM Structure : Revit Structure, Tekla, Modèle Analytique & Échanges IFC",
  subtitle: 'Module 05 — DAO & Technologies BIM',
  level: 'Intermédiaire',
  duration: '14h',
  diagramType: 'bim_workflow',
  tags: ['BIM', 'Revit', 'Tekla', 'Modèle analytique', 'IFC', 'Géoréférencement', 'Quantités'],
}, {
  definition: {
    title: 'Définition — La maquette numérique de la structure',
    fr: 'Modélisation BIM de la structure (maquette numérique)',
    en: 'Structural BIM modelling',
    metier: "Utilisée par les projeteurs et modeleurs BIM structure, les ingénieurs calcul, les entreprises de charpente et de béton préfabriqué et les BIM managers.",
    content: `Un modèle **BIM structure** représente les éléments porteurs (fondations, poteaux, poutres, dalles, voiles, contreventements) comme des **objets** dotés de propriétés : matériau, section, classe de résistance, phase, quantités.

### Deux logiciels emblématiques
- **Revit (Structure)** : modélisation du bâtiment par niveaux et quadrillages, familles paramétriques, production des plans et nomenclatures ; il contient un **modèle analytique** (axes, appuis, liaisons) transférable vers les logiciels de calcul.
- **Tekla Structures** : modélisation détaillée (LOD 400) pour la charpente métallique, le béton préfabriqué et le ferraillage ; assemblages paramétriques, numérotation des pièces, plans d'atelier et fichiers de commande numérique.

### Les échanges
Le format ouvert **IFC** permet d'échanger avec les autres intervenants (architecte, fluides) ; le format **BCF** transmet les remarques de coordination.

> 💡 Un même modèle sert à concevoir, calculer, dessiner, quantifier et fabriquer : c'est le gain principal du BIM par rapport à la DAO.`,
  },
  importance: {
    content: `- **Cohérence** : plans, coupes et nomenclatures sont extraits du même modèle ; une modification se répercute partout.
- **Coordination** : la détection de conflits (clash detection) repère les collisions structure-réseaux avant le chantier.
- **Calcul** : le modèle analytique évite de ressaisir la géométrie dans le logiciel de calcul.
- **Fabrication** : en charpente et préfabrication, le modèle pilote directement les machines.

> ⚠️ **À retenir** : un modèle n'a de valeur que si son niveau de détail et ses informations correspondent à l'usage prévu (convention BIM).`,
  },
  applications: {
    examples: [
      ['Immeuble de bureaux', 'Modèle Revit structure LOD 300 coordonné avec l’architecte et les fluides en IFC.'],
      ['Charpente métallique', 'Modèle Tekla LOD 400 : assemblages, plans d’atelier et fichiers CN pour la découpe.'],
      ['Béton préfabriqué', 'Panneaux et prédalles modélisés avec inserts, levage et ferraillage pour l’usine.'],
      ['Calcul de structure', 'Export du modèle analytique vers Robot ou un autre logiciel de calcul.'],
      ['Synthèse', 'Détection de conflits poutres / gaines de ventilation avant le lancement des réservations.'],
    ],
  },
  theory: {
    title: 'Théorie — Structure d’un modèle BIM structure',
    content: `### 1. Organisation du modèle
- **Niveaux** et **quadrillages** (axes) : la trame de référence.
- **Familles** et **types** : un type de poutre (par exemple « IPE 300 S355 ») porte des paramètres communs ; chaque instance a ses paramètres propres (longueur, niveau).
- **Phases** et **lots** : existant, démolition, neuf.

### 2. Modèle physique et modèle analytique
Le modèle physique représente le béton et l'acier réels ; le **modèle analytique** est une idéalisation en barres et plaques (axes, nœuds, appuis, libérations) utilisée pour le calcul. Les deux doivent rester cohérents.

### 3. Niveaux de développement (LOD)
LOD 100 à 500 : de l'esquisse (volumes) à l'ouvrage exécuté. Une **convention BIM** précise le LOD attendu par phase et par lot.

### 4. Géoréférencement
Le modèle est placé dans un repère de projet ; ses coordonnées se transforment vers le système national (Lambert 93, altitudes NGF) par une rotation et une translation :
$$X = x \\cos\\theta - y \\sin\\theta + T_x \\qquad Y = x \\sin\\theta + y \\cos\\theta + T_y$$

### 5. Quantités et coordination
Les nomenclatures donnent volumes de béton, masses d'acier et longueurs de profilés. La détection de conflits signale les interférences au-delà d'une tolérance donnée (par exemple 20 mm entre une gaine et une poutre).`,
  },
  formulas: {
    title: 'Formules essentielles — Exploitation d’un modèle BIM',
    formulas: [
      {
        name: 'Transformation repère projet → repère géographique',
        latex: "X = x \\cos\\theta - y \\sin\\theta + T_x \\qquad Y = x \\sin\\theta + y \\cos\\theta + T_y",
        description: 'Rotation d’angle θ puis translation (géoréférencement en plan).',
        vars: [
          ['x, y', 'Coordonnées dans le repère du projet', 'm', 'Relatives au point de base du projet.'],
          ['X, Y', 'Coordonnées géographiques', 'm', 'Par exemple Lambert 93.'],
          ['\\theta', 'Rotation du nord du projet', '°', 'Écart entre nord du projet et nord géographique.'],
          ['T_x, T_y', 'Translation', 'm', 'Coordonnées géographiques du point de base.'],
        ],
      },
      {
        name: 'Masse d’un profilé',
        latex: "M = L \\cdot m_l",
        description: 'Quantité d’acier extraite du modèle pour la commande.',
        vars: [
          ['M', 'Masse', 'kg', 'Par élément ou par repère.'],
          ['L', 'Longueur', 'm', 'Longueur de débit.'],
          ['m_l', 'Masse linéique', 'kg/m', 'IPE 300 : 42,2 ; HEA 200 : 42,3 ; HEB 200 : 61,3.'],
        ],
      },
      {
        name: 'Masse d’acier à partir d’un volume',
        latex: "M = \\rho_{acier} \\cdot V = 7\\,850 \\cdot V",
        description: 'Pour les tôles et pièces modélisées en volume.',
        vars: [
          ['\\rho_{acier}', "Masse volumique de l'acier", 'kg/m³', '7 850 kg/m³.'],
          ['V', 'Volume', 'm³', 'Calculé par le logiciel.'],
        ],
      },
      {
        name: 'Critère de conflit (clash)',
        latex: "d_{min} < \\delta \\Rightarrow \\text{conflit}",
        description: 'Deux objets sont en conflit si leur distance minimale est inférieure à la tolérance.',
        vars: [
          ['d_{min}', 'Distance minimale entre objets', 'mm', 'Négative en cas d’interpénétration.'],
          ['\\delta', 'Tolérance', 'mm', 'Souvent 0 à 50 mm selon les lots et la phase.'],
        ],
      },
    ],
  },
  stepbystep: {
    title: 'Calcul complet — Géoréférencement d’un point du modèle',
    problem: "Le point de base du projet a pour coordonnées Lambert 93 (T_x ; T_y) = (652 300,00 ; 6 862 100,00) et le repère du projet est tourné de θ = 15° par rapport au nord géographique. Un poteau est à (x ; y) = (24,00 ; 10,00) m dans le repère du projet. Calculer ses coordonnées Lambert 93.",
    steps_demo: [
      { n: 1, text: "cos 15° = 0,9659 ; sin 15° = 0,2588." },
      { n: 2, text: "Rotation en x : 24,00 × 0,9659 − 10,00 × 0,2588 = 23,182 − 2,588 = 20,594 m." },
      { n: 3, text: "Rotation en y : 24,00 × 0,2588 + 10,00 × 0,9659 = 6,211 + 9,659 = 15,870 m." },
      { n: 4, text: "Translation : X = 652 300,00 + 20,59 = 652 320,59 ; Y = 6 862 100,00 + 15,87 = 6 862 115,87." },
      { n: 5, text: "Contrôle : la distance au point de base est conservée : √(24² + 10²) = 26,00 m = √(20,59² + 15,87²)." },
    ],
    result_latex: "X = 652\\,300{,}00 + 20{,}59 = 652\\,320{,}59 \\qquad Y = 6\\,862\\,100{,}00 + 15{,}87 = 6\\,862\\,115{,}87",
  },
  units: {
    table: [
      ['Coordonnées', 'm (Lambert 93), altitude NGF', 'ft (state plane)', '1 ft = 0,3048 m'],
      ['Masse linéique des profilés', 'kg/m', 'lb/ft', '1 kg/m = 0,672 lb/ft'],
      ['Volume de béton', 'm³', 'yd³', '1 m³ = 1,308 yd³'],
      ['Tolérance de conflit', 'mm', 'in', '25 mm ≈ 1 in'],
      ['Niveau de développement', 'LOD 100 à 500', 'LOD', 'LOD 300 : géométrie précise ; 400 : fabrication'],
    ],
    note: 'Les modèles IFC doivent tous partager le même point de base et les mêmes unités pour se superposer correctement.',
  },
  hypotheses: {
    items: [
      ['info', 'Le modèle analytique est une idéalisation : il doit être vérifié (appuis, excentrements, libérations) avant tout calcul.'],
      ['info', 'Les quantités extraites dépendent des règles de modélisation (jonctions, priorités entre éléments).'],
      ['warning', 'Un export IFC mal paramétré peut perdre des propriétés ou des objets : contrôler avec une visionneuse IFC.'],
      ['warning', 'Le modèle n’est pas une note de calcul : la justification réglementaire reste nécessaire.'],
      ['tip', 'Rédigez une convention BIM dès le début : LOD par phase, formats, origine, nommage, fréquence d’échange.'],
    ],
  },
  simple_examples: {
    examples: [
      {
        title: 'Exemple 1 : masse d’une file de poutres',
        given: '12 poutres IPE 300 de 8,00 m (42,2 kg/m)',
        find: 'La masse totale',
        solution_latex: "M = 12 \\times 8{,}00 \\times 42{,}2 = 4\\,051\\ \\text{kg}",
        result: '≈ 4,05 t de profilés.',
      },
      {
        title: 'Exemple 2 : platine modélisée en volume',
        given: 'Platine de 400 × 300 × 20 mm',
        find: 'Sa masse',
        solution_latex: "M = 7\\,850 \\times (0{,}40 \\times 0{,}30 \\times 0{,}020) = 7\\,850 \\times 0{,}0024 = 18{,}8\\ \\text{kg}",
        result: '18,8 kg.',
      },
      {
        title: 'Exemple 3 : conflit gaine / poutre',
        given: 'Sous-face de poutre à +2,85 m ; dessus de gaine à +2,88 m ; tolérance 20 mm',
        find: 'Y a-t-il conflit ?',
        solution_latex: "d_{min} = 2{,}85 - 2{,}88 = -0{,}03\\ \\text{m} < 0{,}020\\ \\text{m} \\Rightarrow \\text{conflit}",
        result: 'Interpénétration de 30 mm : déplacer la gaine ou prévoir une réservation dans la poutre (validation structure).',
      },
    ],
  },
  real_examples: {
    title: 'Exemple réel — Charpente métallique d’un centre commercial en Tekla',
    examples: [
      {
        context: 'Charpente de 1 800 t, plus de 15 000 pièces',
        scenario: "Le modèle Tekla, coordonné avec le modèle Revit de l'architecte en IFC, a permis de détecter plus de 400 conflits avant fabrication. Les plans d'atelier et les fichiers de commande numérique ont été générés directement depuis le modèle.",
        decomposition_latex: "\\text{Modèle LOD 400} \\Rightarrow \\text{plans d'atelier} + \\text{fichiers CN} + \\text{listes de colisage} \\Rightarrow \\text{montage sans reprise}",
        lesson: "Le gain du BIM en charpente vient surtout de la fabrication sans erreur : chaque conflit réglé dans le modèle évite une reprise coûteuse sur chantier.",
      },
    ],
  },
  diagrams: {
    title: 'Schéma de principe — Cycle de vie du modèle structure',
    diagram_description: [
      'Convention BIM : LOD, formats, origine, rôles des intervenants',
      'Modèle physique Revit : niveaux, quadrillages, éléments porteurs',
      'Modèle analytique : export vers le logiciel de calcul, retour des sections',
      'Coordination IFC / BCF : détection et résolution des conflits',
      'Production : plans, nomenclatures, quantités ; modèle de fabrication Tekla',
      'DOE numérique : modèle tel que construit pour l’exploitation',
    ],
  },
  mistakes: {
    items: [
      ['Modéliser sans convention BIM', 'Modèles incompatibles entre intervenants', 'Définir LOD, origine, unités et formats dès le démarrage.'],
      ['Calculer sur un modèle analytique non vérifié', 'Appuis ou liaisons faux, efforts erronés', 'Contrôler le modèle analytique comme un modèle de calcul classique.'],
      ['Sur-modéliser trop tôt', 'Temps perdu à détailler des éléments encore instables', 'Adapter le niveau de détail à la phase (LOD).'],
    ],
  },
  tips: {
    tips: [
      'Utilisez des familles et des profils de bibliothèque validés plutôt que des modélisations libres.',
      'Planifiez des réunions de synthèse régulières avec un rapport BCF des conflits.',
      'Vérifiez vos exports IFC dans une visionneuse gratuite avant de les diffuser.',
      'Gardez le point de base du projet et le point topographique verrouillés.',
    ],
  },
  norms: {
    norms: [
      ['NF EN ISO 19650', 'Organisation et numérisation des informations relatives aux bâtiments (BIM).'],
      ['NF EN ISO 16739 (IFC)', 'Format d’échange de données pour la construction.'],
      ['NF EN 17412-1', 'Niveau du besoin d’information (LOIN).'],
      ['Guides PTNB / Plan BIM 2022', 'Recommandations françaises pour la mise en œuvre du BIM.'],
    ],
  },
  exercises: {
    exercises: [
      {
        level: 1,
        text: 'Calculer la masse de 20 poteaux HEB 200 de 3,50 m (61,3 kg/m).',
        hint: 'M = n·L·m_l.',
        answer_latex: "M = 20 \\times 3{,}50 \\times 61{,}3 = 4\\,291\\ \\text{kg}",
        answer_text: '≈ 4,3 t.',
      },
      {
        level: 2,
        text: 'Un point (x ; y) = (10 ; 0) est tourné de 30° puis translaté de (1 000 ; 2 000). Calculer (X ; Y).',
        hint: 'X = x cos θ − y sin θ + T_x.',
        answer_latex: "X = 10 \\times 0{,}866 + 1\\,000 = 1\\,008{,}66 \\qquad Y = 10 \\times 0{,}5 + 2\\,000 = 2\\,005{,}00",
        answer_text: '(1 008,66 ; 2 005,00).',
      },
      {
        level: 3,
        text: 'Une dalle de 18 × 24 m et 0,22 m d’épaisseur comporte 6 trémies de 1,2 × 1,5 m. Calculer le volume de béton que doit renvoyer la nomenclature.',
        hint: 'Volume brut moins les trémies.',
        answer_latex: "V = (18 \\times 24 - 6 \\times 1{,}2 \\times 1{,}5) \\times 0{,}22 = (432 - 10{,}8) \\times 0{,}22 = 92{,}7\\ \\text{m}^3",
        answer_text: '≈ 92,7 m³.',
      },
    ],
  },
  quiz: {
    title: 'Quiz — BIM structure',
    questions: [
      { q: 'À quoi sert le modèle analytique ?', options: ['À produire les rendus 3D', 'À transférer une idéalisation de la structure vers le calcul', 'À chiffrer les finitions'], correct: 1, explain: 'Axes, nœuds, appuis et liaisons pour le logiciel de calcul.' },
      { q: 'Quel format ouvert sert à échanger les maquettes ?', options: ['DWG', 'IFC', 'PDF'], correct: 1, explain: 'L’IFC est le format ouvert normalisé du BIM.' },
      { q: 'Quel LOD correspond à la fabrication ?', options: ['LOD 100', 'LOD 300', 'LOD 400'], correct: 2, explain: 'LOD 400 : détail suffisant pour fabriquer (assemblages, pièces).' },
    ],
  },
  exam_questions: {
    questions: [
      'Comparez Revit et Tekla : usages, niveaux de détail et livrables.',
      'Expliquez la relation entre modèle physique et modèle analytique et les points de vigilance.',
      'Décrivez un processus de coordination BIM (IFC, BCF, détection de conflits) sur un projet de bâtiment.',
    ],
  },
  interview_questions: {
    questions: [
      ['Qu’est-ce qu’une convention BIM ?', 'Un document contractuel qui fixe les objectifs et usages du BIM, les rôles, les niveaux de détail par phase, les formats et logiciels, l’origine et les unités, le nommage et le calendrier des échanges.'],
      ['Comment fiabiliser les quantités issues du modèle ?', 'Avec des règles de modélisation claires (jonctions, priorités, découpage par phase et par lot), des paramètres renseignés, et un contrôle croisé sur quelques éléments par un métré manuel.'],
    ],
  },
  practical_case: {
    title: 'Cas pratique — Synthèse structure / fluides',
    scenario: 'Un plateau de bureaux a des poutres de 60 cm de retombée sous dalle (sous-face à +2,90 m) et un faux plafond à +2,70 m. Le bureau fluides fait passer une gaine de 40 cm de haut sous dalle.',
    description: 'Analyser le conflit et proposer des solutions.',
    resolutions: [
      "\\text{Plénum disponible sous poutre : } 2{,}90 - 2{,}70 = 0{,}20\\ \\text{m} < 0{,}40\\ \\text{m de gaine}",
      "\\text{Solution 1 : réservation dans l'âme des poutres (trémie } \\varnothing\\, 45\\ \\text{cm, à valider par le calcul)}",
      "\\text{Solution 2 : faire passer la gaine entre les poutres et réorganiser le réseau parallèlement aux poutres}",
    ],
    conclusion: 'Le conflit est résolu dans le modèle avant le chantier : on retient le passage parallèle aux poutres quand c’est possible, sinon des réservations dimensionnées et validées par l’ingénieur structure.',
  },
  summary: {
    content: `### Le BIM structure en 5 points
1. Objets paramétriques : familles, types, instances.
2. Modèle physique + modèle **analytique** pour le calcul.
3. Revit pour la conception, Tekla pour la fabrication (LOD 400).
4. Échanges **IFC**, remarques **BCF**, détection de conflits.
5. Géoréférencement : rotation + translation vers Lambert 93.`,
  },
  key_points: {
    points: [
      'Convention BIM dès le démarrage',
      'LOD 300 conception, LOD 400 fabrication',
      'IFC pour les échanges, BCF pour les remarques',
      'X = x cos θ − y sin θ + T_x',
      'Acier : 7 850 kg/m³',
    ],
  },
  self_assessment: {
    objectives: [
      'Je connais l’organisation d’un modèle BIM structure',
      'Je distingue modèle physique et modèle analytique',
      'Je sais géoréférencer un point du modèle',
      'Je sais exploiter les quantités et traiter un conflit',
      "J'ai réussi le quiz avec au moins 2 bonnes réponses sur 3",
    ],
  },
});
