// ── Lesson: DAO avec AutoCAD — Module 5 ──────────────────────────────────────
import { buildLesson } from './build_lesson.js';

export const lesson_bim_autocad = buildLesson({
  moduleId: 5,
  slug: 'bim_autocad',
  lessonIndex: 3,
  title: "DAO avec AutoCAD : Coordonnées, Calques, Blocs, Échelles d'Annotation & Mise en Page",
  subtitle: 'Module 05 — DAO & Technologies BIM',
  level: 'Intermédiaire',
  duration: '12h',
  diagramType: 'plan_coffrage',
  tags: ['DAO', 'AutoCAD', 'Coordonnées', 'Calques', 'Blocs', 'Échelle d’annotation', 'Présentation'],
}, {
  definition: {
    title: 'Définition — Dessiner juste, une fois',
    fr: 'Dessin assisté par ordinateur (DAO) en 2D',
    en: 'Computer-aided drafting (CAD)',
    metier: "Utilisée par les dessinateurs-projeteurs, techniciens de bureau d'études, géomètres et ingénieurs pour produire et modifier les plans.",
    content: `La **DAO** remplace la planche à dessin : on dessine **en vraie grandeur** dans un espace sans limite (l'**espace objet**), puis on prépare des **présentations** à l'échelle pour l'impression (l'**espace papier**).

### Les principes d'un bon dessin DAO
1. **Dessiner à l'échelle 1** dans l'unité du projet (mm, cm ou m), jamais réduit.
2. **Organiser en calques** (murs, axes, cotes, textes…) avec des couleurs et épaisseurs cohérentes.
3. **Réutiliser** : blocs pour les éléments répétés, références externes (XREF) pour les fonds de plan.
4. **Annoter à l'échelle** : textes et cotes adaptés à l'échelle d'impression.
5. **Échanger proprement** : formats DWG et DXF, gabarits et chartes graphiques communes.

> 💡 Un dessin DAO bien structuré se modifie en quelques minutes ; un dessin mal organisé (tout sur le calque 0, objets éclatés) peut devoir être refait.`,
  },
  importance: {
    content: `- **Productivité** : copies, réseaux, blocs dynamiques et gabarits divisent les temps de dessin.
- **Précision** : l'accrochage aux objets et la saisie de coordonnées évitent les approximations.
- **Coordination** : les fonds de plan partagés (XREF) garantissent que tous les intervenants travaillent sur la même base.
- **Transition BIM** : la DAO 2D reste utilisée pour les détails, les plans topographiques et les projets d'infrastructure.

> ⚠️ **À retenir** : tout ce qui est dessiné dans l'espace objet doit l'être en vraie grandeur ; l'échelle ne se règle qu'à la mise en page.`,
  },
  applications: {
    examples: [
      ['Plan de coffrage', 'Dessin des voiles et poutres sur un fond architecte en référence externe.'],
      ['Plan topographique', 'Import d’un levé, courbes de niveau et points cotés en coordonnées Lambert 93.'],
      ['Détail de ferraillage', 'Blocs de barres et de cadres, nomenclature extraite des attributs.'],
      ['Dossier de permis', 'Présentations au 1/100 et 1/200 avec cartouche normalisé.'],
      ['Plan de réseaux', 'Calques par réseau (EU, EP, AEP, électricité) avec codes couleurs.'],
    ],
  },
  theory: {
    title: 'Théorie — Coordonnées, organisation et échelles',
    content: `### 1. Systèmes de coordonnées
- **Absolues** : $(x, y)$ par rapport à l'origine.
- **Relatives** : @Δx,Δy depuis le dernier point.
- **Polaires relatives** : @L<θ (longueur L, angle θ depuis l'axe des x, sens trigonométrique).
Conversion : $x = L \\cos\\theta$ et $y = L \\sin\\theta$.

### 2. Calques
Chaque calque porte une couleur, un type de ligne et une épaisseur. On peut geler, verrouiller ou masquer un calque. Une convention de nommage (par exemple « S-POTEAU », « A-MUR ») facilite les échanges.

### 3. Blocs et références externes
Un **bloc** est un groupe d'objets réutilisable (porte, symbole, cartouche), éventuellement avec des **attributs** (textes variables). Une **XREF** insère un autre fichier DWG mis à jour automatiquement.

### 4. Échelles d'annotation
Pour qu'un texte mesure $h_p$ sur le papier, il doit mesurer dans l'espace objet :
$$h_{objet} = \\frac{h_p}{E}$$
Les objets **annotatifs** font ce calcul automatiquement pour chaque échelle de fenêtre.

### 5. Mise en page
Dans une **présentation**, une fenêtre montre l'espace objet à une échelle donnée (1/50, 1/100…). Les épaisseurs d'impression sont gérées par un **style de tracé** (CTB/STB).`,
  },
  formulas: {
    title: 'Formules essentielles — DAO',
    formulas: [
      {
        name: 'Coordonnées polaires en cartésiennes',
        latex: "\\Delta x = L \\cos\\theta \\qquad \\Delta y = L \\sin\\theta",
        description: 'Saisie @L<θ convertie en déplacements relatifs.',
        vars: [
          ['L', 'Longueur', 'unité du dessin', 'Distance entre les deux points.'],
          ['\\theta', 'Angle', '°', 'Depuis l’axe des x, sens antihoraire.'],
          ['\\Delta x, \\Delta y', 'Déplacements', 'unité du dessin', 'Composantes du segment.'],
        ],
      },
      {
        name: 'Hauteur de texte dans l’espace objet',
        latex: "h_{objet} = \\frac{h_p}{E}",
        description: 'Texte ou cote non annotatif dessiné dans l’espace objet.',
        vars: [
          ['h_{objet}', 'Hauteur dans le modèle', 'unité du dessin', 'À convertir selon l’unité de travail.'],
          ['h_p', 'Hauteur imprimée', 'mm', '2,5 mm pour les textes courants, 3,5 à 5 mm pour les titres.'],
          ['E', 'Échelle d’impression', '-', '1/50, 1/100…'],
        ],
        rule: "Au 1/100 en dessinant en mètres, un texte de 2,5 mm mesure 0,25 m dans le modèle.",
      },
      {
        name: 'Facteur d’échelle d’une fenêtre',
        latex: "f = \\frac{1}{E} \\times \\frac{\\text{unité papier}}{\\text{unité modèle}}",
        description: 'Relation entre l’échelle voulue et les unités de travail.',
        vars: [
          ['f', 'Rapport modèle / papier', '-', 'Nombre d’unités modèle par unité papier.'],
        ],
      },
      {
        name: 'Distance et angle entre deux points',
        latex: "d = \\sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2} \\qquad \\theta = \\arctan\\frac{y_2 - y_1}{x_2 - x_1}",
        description: 'Ce que renvoie la commande de mesure (DISTANCE).',
        vars: [
          ['d', 'Distance', 'unité du dessin', 'Longueur du segment.'],
          ['(x_1, y_1), (x_2, y_2)', 'Coordonnées des points', 'unité du dessin', 'Points saisis ou accrochés.'],
        ],
      },
    ],
  },
  stepbystep: {
    title: 'Calcul complet — Préparer un plan au 1/50 dessiné en mètres',
    problem: "Un plan de coffrage est dessiné en mètres. On veut l'imprimer au 1/50 sur un format A1, avec des textes de 2,5 mm et des titres de 5 mm. Tracer aussi un voile de 6,40 m incliné à 30° à partir du point (10 ; 5).",
    steps_demo: [
      { n: 1, text: "Hauteur des textes dans le modèle : 2,5 mm × 50 = 125 mm = 0,125 m." },
      { n: 2, text: "Hauteur des titres : 5 mm × 50 = 250 mm = 0,25 m (ou objets annotatifs avec l'échelle 1:50)." },
      { n: 3, text: "Échelle de fenêtre : 1 mm papier = 50 mm = 0,05 m modèle." },
      { n: 4, text: "Voile : saisie @6.40<30 → Δx = 6,40 × cos 30° = 5,54 m ; Δy = 6,40 × sin 30° = 3,20 m." },
      { n: 5, text: "Extrémité du voile : (10 + 5,54 ; 5 + 3,20) = (15,54 ; 8,20)." },
    ],
    result_latex: "h_{texte} = 2{,}5 \\times 50 = 125\\ \\text{mm} = 0{,}125\\ \\text{m} \\qquad (x, y) = (10 + 5{,}54 \\, ; \\, 5 + 3{,}20) = (15{,}54 \\, ; \\, 8{,}20)",
  },
  units: {
    table: [
      ['Unités de dessin', 'mm, cm, m', 'in, ft', 'Bâtiment : cm ou m ; charpente : mm ; topographie : m'],
      ['Hauteur de texte imprimée', 'mm', 'in', '2,5 mm ≈ 3/32 in'],
      ['Échelle', '1:n', '1/8" = 1\'-0"', '1/8 in par pied ≈ 1:96'],
      ['Épaisseur de trait', 'mm', '-', '0,18 à 0,70 mm selon le type de trait'],
      ['Formats', 'A0 à A4 (ISO 216)', 'ANSI', 'A0 = 841 × 1 189 mm'],
    ],
    note: 'Définissez l’unité de travail au démarrage du projet (commande UNITS) et notez-la dans le cartouche.',
  },
  hypotheses: {
    items: [
      ['info', 'Les commandes citées sont celles d’AutoCAD ; les logiciels équivalents (BricsCAD, DraftSight, ZWCAD) utilisent les mêmes principes.'],
      ['info', 'Les angles sont mesurés depuis l’axe des x dans le sens trigonométrique, sauf réglage différent.'],
      ['warning', 'Un plan géoréférencé (Lambert 93) a des coordonnées très grandes : ne le déplacez jamais vers l’origine sans le documenter.'],
      ['warning', 'Éclater des blocs ou des cotes fait perdre leur intelligence (attributs, mise à jour).'],
      ['tip', 'Utilisez un gabarit (DWT) d’entreprise : calques, styles de texte et de cote, cartouche déjà définis.'],
    ],
  },
  simple_examples: {
    examples: [
      {
        title: 'Exemple 1 : saisie polaire',
        given: 'Segment de 4,00 m à 135° depuis (0 ; 0)',
        find: 'Le point d’arrivée',
        solution_latex: "x = 4{,}00 \\cos 135° = -2{,}83 \\qquad y = 4{,}00 \\sin 135° = 2{,}83",
        result: 'Point (−2,83 ; 2,83).',
      },
      {
        title: 'Exemple 2 : texte au 1/200',
        given: 'Dessin en cm, texte imprimé de 3 mm',
        find: 'Hauteur dans le modèle',
        solution_latex: "h = 3 \\times 200 = 600\\ \\text{mm} = 60\\ \\text{cm}",
        result: '60 unités (cm) dans l’espace objet.',
      },
      {
        title: 'Exemple 3 : distance entre deux points topographiques',
        given: 'A (652 340,25 ; 6 862 118,40) ; B (652 372,85 ; 6 862 141,10) en Lambert 93',
        find: 'Distance AB',
        solution_latex: "d = \\sqrt{32{,}60^2 + 22{,}70^2} = \\sqrt{1\\,062{,}8 + 515{,}3} = 39{,}72\\ \\text{m}",
        result: 'AB = 39,72 m.',
      },
    ],
  },
  real_examples: {
    title: 'Exemple réel — Fond de plan partagé sur un projet de logements',
    examples: [
      {
        context: 'Projet de 120 logements avec architecte, bureau structure et bureau fluides',
        scenario: "L'architecte publie un fond de plan DWG par niveau ; les autres intervenants l'insèrent en XREF au même point d'insertion (0,0,0) et dessinent leurs éléments sur leurs propres calques. À chaque mise à jour de l'architecte, tous les plans se mettent à jour.",
        decomposition_latex: "\\text{XREF architecte} + \\text{calques par lot} + \\text{point d'insertion commun} \\Rightarrow \\text{coordination 2D fiable}",
        lesson: "Une charte DAO commune (unités, calques, origine, nommage des fichiers) est la condition d'une bonne coordination ; c'est aussi le premier pas vers une démarche BIM.",
      },
    ],
  },
  diagrams: {
    title: 'Schéma de principe — Flux de travail DAO',
    diagram_description: [
      'Gabarit : unités, calques, styles de texte et de cote, cartouche',
      'Fonds de plan en XREF (architecte, topographe)',
      'Dessin en vraie grandeur dans l’espace objet, sur les bons calques',
      'Blocs et attributs pour les éléments répétés',
      'Présentations : fenêtres à l’échelle, annotations, cartouche',
      'Impression ou export PDF avec style de tracé, puis diffusion indicée',
    ],
  },
  mistakes: {
    items: [
      ['Dessiner à l’échelle réduite dans le modèle', 'Cotes fausses et impossibilité de réutiliser le dessin', 'Dessiner en vraie grandeur, échelle uniquement dans les fenêtres.'],
      ['Tout dessiner sur le calque 0', 'Impossible de gérer l’affichage et l’impression', 'Respecter la liste de calques du gabarit.'],
      ['Insérer les XREF à des points différents', 'Plans décalés entre intervenants', 'Insertion au point 0,0,0 commun, défini dans la charte.'],
    ],
  },
  tips: {
    tips: [
      'Activez l’accrochage aux objets (extrémité, milieu, intersection) : précision garantie.',
      'Purgez régulièrement les fichiers (PURGE) et vérifiez-les (AUDIT) pour éviter les corruptions.',
      'Utilisez des blocs dynamiques pour les portes et fenêtres de largeurs variables.',
      'Exportez en PDF vectoriel avec calques pour faciliter la lecture sur chantier.',
    ],
  },
  norms: {
    norms: [
      ['NF EN ISO 13567', 'Organisation et dénomination des calques pour la CAO.'],
      ['NF EN ISO 128', 'Principes généraux de représentation des dessins techniques.'],
      ['NF EN ISO 7200', 'Champs de données dans les cartouches.'],
      ['NF EN ISO 5457', 'Formats et présentation des feuilles de dessin.'],
    ],
  },
  exercises: {
    exercises: [
      {
        level: 1,
        text: 'Quelle hauteur donner dans le modèle (dessin en mm) à une cote de 2,5 mm imprimée au 1/20 ?',
        hint: 'h = h_p / E.',
        answer_latex: "h = 2{,}5 \\times 20 = 50\\ \\text{mm}",
        answer_text: '50 mm.',
      },
      {
        level: 2,
        text: 'Depuis le point (2 ; 3), on trace @5<60. Quelles sont les coordonnées du point d’arrivée ?',
        hint: 'Δx = 5 cos 60°, Δy = 5 sin 60°.',
        answer_latex: "(2 + 2{,}50 \\, ; \\, 3 + 4{,}33) = (4{,}50 \\, ; \\, 7{,}33)",
        answer_text: '(4,50 ; 7,33).',
      },
      {
        level: 3,
        text: 'Un plan au 1/100 est dessiné en mètres. Quelle est l’échelle de fenêtre à saisir si l’on mesure le papier en millimètres ?',
        hint: '1 mm papier = 100 mm réels = 0,1 m modèle.',
        answer_latex: "1\\ \\text{m modèle} = \\frac{1\\,000\\ \\text{mm}}{100} = 10\\ \\text{mm papier}",
        answer_text: '10 unités papier (mm) pour 1 unité modèle (m) : zoom « 10XP » dans la fenêtre.',
      },
    ],
  },
  quiz: {
    title: 'Quiz — DAO',
    questions: [
      { q: 'À quelle échelle dessine-t-on dans l’espace objet ?', options: ['À l’échelle d’impression', 'En vraie grandeur', 'Au 1/100 toujours'], correct: 1, explain: 'On dessine à l’échelle 1 ; l’échelle d’impression se règle dans les fenêtres.' },
      { q: 'Que signifie la saisie @5<30 ?', options: ['Point absolu (5 ; 30)', '5 unités à 30° depuis le dernier point', '30 unités à 5°'], correct: 1, explain: 'Coordonnées polaires relatives : longueur 5, angle 30°.' },
      { q: 'À quoi sert une XREF ?', options: ['À exploser un bloc', 'À insérer un autre dessin mis à jour automatiquement', 'À imprimer en PDF'], correct: 1, explain: 'La référence externe lie un fichier DWG qui se met à jour.' },
    ],
  },
  exam_questions: {
    questions: [
      'Expliquez la différence entre espace objet et espace papier, et comment gérer plusieurs échelles sur une même feuille.',
      'Décrivez une organisation de calques pour un plan de structure et justifiez-la.',
      'Présentez les avantages des blocs, des attributs et des références externes dans un projet.',
    ],
  },
  interview_questions: {
    questions: [
      ['Comment organisez-vous un fichier DAO partagé ?', 'Gabarit commun, unités et origine définies, calques normalisés par lot, fonds de plan en XREF, blocs à attributs, convention de nommage des fichiers et gestion des indices.'],
      ['DAO 2D ou BIM : que choisir ?', 'Le BIM pour la conception et la coordination des projets de bâtiment et d’ouvrages complexes ; la DAO 2D reste efficace pour les détails, les petits projets, la topographie et certains plans d’infrastructure, souvent extraits du modèle BIM.'],
    ],
  },
  practical_case: {
    title: 'Cas pratique — Mise en page d’un dossier de plans',
    scenario: 'Un projet dessiné en centimètres doit être imprimé sur A1 : plan de niveau au 1/100, coupe au 1/50 et détail au 1/10 sur la même feuille, avec des textes de 2,5 mm.',
    description: 'Déterminer les hauteurs de texte nécessaires si l’on n’utilise pas d’objets annotatifs.',
    resolutions: [
      "\\text{1/100 : } h = 2{,}5\\ \\text{mm} \\times 100 = 250\\ \\text{mm} = 25\\ \\text{cm}",
      "\\text{1/50 : } h = 2{,}5 \\times 50 = 125\\ \\text{mm} = 12{,}5\\ \\text{cm}",
      "\\text{1/10 : } h = 2{,}5 \\times 10 = 25\\ \\text{mm} = 2{,}5\\ \\text{cm}",
    ],
    conclusion: 'Trois hauteurs de texte différentes dans le modèle : c’est précisément ce que les objets annotatifs évitent, en adaptant automatiquement la taille à chaque échelle de fenêtre.',
  },
  summary: {
    content: `### La DAO en 5 points
1. Dessiner en **vraie grandeur** dans l'espace objet.
2. Coordonnées absolues, relatives @Δx,Δy, polaires @L<θ.
3. **Calques**, **blocs** et **XREF** pour organiser et réutiliser.
4. Texte : $h_{objet} = h_p / E$ ou objets annotatifs.
5. Présentations, styles de tracé, charte DAO commune.`,
  },
  key_points: {
    points: [
      'Espace objet à l’échelle 1',
      'Polaire : Δx = L cos θ ; Δy = L sin θ',
      'h_objet = h_papier / E',
      'XREF au point 0,0,0 commun',
      'Gabarit et charte DAO partagés',
    ],
  },
  self_assessment: {
    objectives: [
      'Je sais saisir des coordonnées absolues, relatives et polaires',
      'Je sais organiser un dessin en calques et blocs',
      'Je sais régler les échelles d’annotation et les fenêtres',
      'Je sais préparer un dossier de plans pour l’impression',
      "J'ai réussi le quiz avec au moins 2 bonnes réponses sur 3",
    ],
  },
});
