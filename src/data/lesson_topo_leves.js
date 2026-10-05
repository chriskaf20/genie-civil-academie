// ── Lesson: Levés topographiques et implantation — Module 22 ─────────────────
import { buildLesson } from './build_lesson.js';

export const lesson_topo_leves = buildLesson({
  moduleId: 22,
  slug: 'topo_leves',
  lessonIndex: 2,
  title: "Levés Topographiques & Implantation : Gisements, Rayonnement, Polygonation et Station Totale",
  subtitle: 'Module 22 — Topographie, Géodésie & SIG',
  level: 'Intermédiaire',
  duration: '10h',
  diagramType: 'topographie_nivellement',
  tags: ['Topographie', 'Gisement', 'Grades', 'Rayonnement', 'Polygonation', 'Implantation', 'Station totale'],
}, {
  definition: {
    title: 'Définition — Mesurer le terrain et y reporter le projet',
    fr: 'Levé topographique et implantation',
    en: 'Topographic survey and setting out',
    metier: "Utilisée par les géomètres-topographes, les techniciens de bureau d'études, les conducteurs de travaux et les chefs de chantier.",
    content: `Le **levé** consiste à mesurer la position (X, Y, Z) de points du terrain pour en dresser le plan. L'**implantation** est l'opération inverse : reporter sur le terrain la position des éléments du projet (axes, angles de bâtiments, piquets de chaussée).

### L'instrument principal : la station totale
Elle mesure des **angles horizontaux**, des **angles verticaux** (angle zénithal) et des **distances** (par onde électromagnétique). Le GNSS complète la station totale pour les grandes emprises.

### Unités et conventions françaises
- Les angles sont souvent exprimés en **grades** (gon) : un tour = 400 gon, un angle droit = 100 gon.
- Le **gisement** d'une direction est l'angle compté depuis le **nord** (axe des Y) dans le **sens horaire**.
- Les coordonnées sont rapportées à un système officiel (Lambert 93 en France) ou à un système local de chantier.

> 💡 En topographie, l'axe des X pointe vers l'est et l'axe des Y vers le nord : X = Est, Y = Nord.`,
  },
  importance: {
    content: `- **Précision** : une erreur d'implantation se retrouve dans tout l'ouvrage (fondations décalées, voiles hors tolérance).
- **Contrats** : les plans topographiques servent de base aux quantités de terrassement et aux limites de propriété.
- **Coordination** : tous les intervenants doivent travailler dans le même système de coordonnées.
- **Contrôle** : le récolement vérifie que l'ouvrage construit correspond au projet.

> ⚠️ **À retenir** : toute implantation importante doit être contrôlée depuis une autre station ou par une méthode indépendante.`,
  },
  applications: {
    examples: [
      ['Plan topographique', 'Levé par rayonnement de tous les points caractéristiques d’un terrain avant projet.'],
      ['Implantation de bâtiment', 'Axes et angles reportés depuis des points de référence connus.'],
      ['Route', 'Piquetage de l’axe et des profils en travers tous les 20 à 25 m.'],
      ['Polygonale de canevas', 'Réseau de points stables pour tout le chantier.'],
      ['Récolement', 'Levé de l’ouvrage exécuté pour le dossier des ouvrages exécutés.'],
    ],
  },
  theory: {
    title: 'Théorie — Coordonnées, gisements et polygonales',
    content: `### 1. Grades
$1\\ \\text{gon} = 0{,}9°$ ; $100\\ \\text{gon} = 90°$ ; $400\\ \\text{gon} = 360°$.

### 2. Rayonnement (calcul de coordonnées)
Depuis une station S de coordonnées $(X_S, Y_S)$, un point visé à la distance horizontale $D$ et au gisement $G$ a pour coordonnées :
$$X_P = X_S + D \\sin G \\qquad Y_P = Y_S + D \\cos G$$

### 3. Problème inverse (implantation)
Distance et gisement d'un point à implanter :
$$D = \\sqrt{\\Delta X^2 + \\Delta Y^2} \\qquad G = \\arctan\\frac{\\Delta X}{\\Delta Y} \\ (\\text{corrigé selon le quadrant})$$

### 4. Distances inclinées et dénivelées
Avec l'angle zénithal $V$ (0 au zénith, 100 gon à l'horizontale) :
$$D_h = D_i \\sin V \\qquad \\Delta H = D_i \\cos V + h_i - h_v$$
($h_i$ hauteur de l'instrument, $h_v$ hauteur du réflecteur).

### 5. Polygonation
On enchaîne des stations en mesurant angles et distances. Pour une polygonale fermée de $n$ sommets, la somme des angles intérieurs vaut $(n - 2) \\times 200$ gon. L'écart mesuré (**fermeture angulaire**) est réparti sur les angles s'il reste dans la tolérance, puis on compense la fermeture en coordonnées.`,
  },
  formulas: {
    title: 'Formules essentielles — Topométrie',
    formulas: [
      {
        name: 'Coordonnées par rayonnement',
        latex: "X_P = X_S + D \\sin G \\qquad Y_P = Y_S + D \\cos G",
        description: 'Gisement compté depuis le nord dans le sens horaire.',
        vars: [
          ['X_P, Y_P', 'Coordonnées du point', 'm', 'X vers l’est, Y vers le nord.'],
          ['X_S, Y_S', 'Coordonnées de la station', 'm', 'Point connu.'],
          ['D', 'Distance horizontale', 'm', 'Réduite à l’horizontale.'],
          ['G', 'Gisement', 'gon', 'Depuis le nord, sens horaire.'],
        ],
      },
      {
        name: 'Distance et gisement entre deux points',
        latex: "D = \\sqrt{\\Delta X^2 + \\Delta Y^2} \\qquad G = \\arctan\\frac{\\Delta X}{\\Delta Y}",
        description: 'Problème inverse, base de toute implantation.',
        vars: [
          ['\\Delta X, \\Delta Y', 'Différences de coordonnées', 'm', 'Point visé − station.'],
          ['G', 'Gisement', 'gon', 'Ajouter 200 gon si ΔY < 0, 400 gon si ΔX < 0 et ΔY > 0.'],
        ],
      },
      {
        name: 'Distance horizontale et dénivelée',
        latex: "D_h = D_i \\sin V \\qquad \\Delta H = D_i \\cos V + h_i - h_v",
        description: 'Réduction d’une mesure à la station totale.',
        vars: [
          ['D_i', 'Distance inclinée mesurée', 'm', 'Entre instrument et réflecteur.'],
          ['V', 'Angle zénithal', 'gon', '100 gon = visée horizontale.'],
          ['h_i', "Hauteur de l'instrument", 'm', 'Au-dessus du point de station.'],
          ['h_v', 'Hauteur du réflecteur', 'm', 'Au-dessus du point visé.'],
        ],
        rule: "Une visée à 96,5 gon monte d'environ 5,5 cm par mètre de distance.",
      },
      {
        name: 'Fermeture angulaire d’une polygonale fermée',
        latex: "f_\\alpha = \\sum \\alpha_{mesurés} - (n - 2) \\times 200\\ \\text{gon}",
        description: 'Écart à répartir si inférieur à la tolérance.',
        vars: [
          ['f_\\alpha', 'Fermeture angulaire', 'gon', 'Exprimée souvent en mgon.'],
          ['n', 'Nombre de sommets', '-', 'Stations de la polygonale.'],
        ],
      },
    ],
  },
  stepbystep: {
    title: 'Calcul complet — Rayonnement et implantation',
    problem: "Une station S (X = 1 000,00 ; Y = 2 000,00) vise un point A à 100,00 m horizontaux au gisement 50,0000 gon. On doit ensuite implanter un point P (1 050,00 ; 2 080,00). Calculer les coordonnées de A, puis la distance et le gisement S→P.",
    steps_demo: [
      { n: 1, text: "50 gon = 45° : sin = cos = 0,7071." },
      { n: 2, text: "A : X = 1 000 + 100 × 0,7071 = 1 070,71 ; Y = 2 000 + 70,71 = 2 070,71." },
      { n: 3, text: "Vers P : ΔX = 50,00 ; ΔY = 80,00 → D = √(2 500 + 6 400) = 94,34 m." },
      { n: 4, text: "Gisement : arctan(50/80) = 32,005° = 35,561 gon (ΔX et ΔY positifs : premier quadrant)." },
      { n: 5, text: "Sur le terrain : on oriente l'instrument, on tourne au gisement 35,561 gon et on reporte 94,34 m ; contrôle depuis une autre station." },
    ],
    result_latex: "A(1\\,070{,}71 \\, ; \\, 2\\,070{,}71) \\qquad D_{SP} = \\sqrt{50^2 + 80^2} = 94{,}34\\ \\text{m} \\qquad G_{SP} = 35{,}561\\ \\text{gon}",
  },
  units: {
    table: [
      ['Angle', 'gon (grade)', '° (degré)', '1 gon = 0,9° ; 1 mgon ≈ 1,6 mm à 100 m'],
      ['Distance', 'm', 'ft', 'Précision station totale ≈ 1 à 2 mm + 1 à 2 ppm'],
      ['Coordonnées', 'm (Lambert 93)', 'ft (state plane)', 'X = Est, Y = Nord'],
      ['Altitude', 'm NGF', 'ft', 'Réseau NGF-IGN69 en France continentale'],
      ['Tolérance d’implantation', 'mm', 'in', 'Bâtiment : quelques mm à 1 cm'],
    ],
    note: 'Un écart angulaire de 1 mgon produit environ 1,6 mm de décalage latéral à 100 m.',
  },
  hypotheses: {
    items: [
      ['info', 'Les formules de rayonnement supposent des distances réduites à l’horizontale et au système de projection.'],
      ['info', 'Le gisement est orienté depuis le nord du système de coordonnées (nord Lambert), différent du nord géographique et magnétique.'],
      ['warning', 'Les points de référence peuvent bouger (engins, tassements) : vérifiez-les avant chaque implantation importante.'],
      ['warning', 'La réfraction et la courbure terrestre deviennent sensibles au-delà de quelques centaines de mètres en nivellement trigonométrique.'],
      ['tip', 'Implantez toujours depuis deux stations différentes, ou contrôlez par des mesures de distances entre points implantés.'],
    ],
  },
  simple_examples: {
    examples: [
      {
        title: 'Exemple 1 : conversion d’angle',
        given: '35,561 gon',
        find: 'En degrés',
        solution_latex: "35{,}561 \\times 0{,}9 = 32{,}005°",
        result: '32,005°.',
      },
      {
        title: 'Exemple 2 : distance horizontale et dénivelée',
        given: 'D_i = 150,25 m, V = 96,5 gon, h_i = 1,55 m, h_v = 1,70 m',
        find: 'D_h et ΔH',
        solution_latex: "D_h = 150{,}25 \\sin(96{,}5) = 150{,}02\\ \\text{m} \\qquad \\Delta H = 150{,}25 \\cos(96{,}5) + 1{,}55 - 1{,}70 = 8{,}11\\ \\text{m}",
        result: 'D_h = 150,02 m ; le point est 8,11 m plus haut que la station.',
      },
      {
        title: 'Exemple 3 : fermeture angulaire',
        given: 'Polygonale de 5 sommets, somme des angles intérieurs 600,0120 gon',
        find: 'f_α et correction par angle',
        solution_latex: "f_\\alpha = 600{,}0120 - 3 \\times 200 = 0{,}0120\\ \\text{gon} \\qquad c = -\\frac{12}{5} = -2{,}4\\ \\text{mgon}",
        result: 'Correction de −2,4 mgon sur chaque angle.',
      },
    ],
  },
  real_examples: {
    title: 'Exemple réel — Bâtiment implanté avec un mauvais point de référence',
    examples: [
      {
        context: 'Construction d’un immeuble en limite de propriété',
        scenario: "Un piquet de référence avait été déplacé par un engin. Les fondations ont été implantées à partir de ce point sans contrôle : le bâtiment empiétait de 18 cm sur la parcelle voisine. Les fondations ont dû être démolies et refaites.",
        decomposition_latex: "\\text{Référence déplacée} + \\text{absence de contrôle} \\Rightarrow \\text{décalage de 18 cm} \\Rightarrow \\text{démolition des fondations}",
        lesson: "Les points de référence doivent être protégés, vérifiés entre eux avant usage, et toute implantation contrôlée par une méthode indépendante.",
      },
    ],
  },
  diagrams: {
    title: 'Schéma de principe — Du canevas à l’implantation',
    diagram_description: [
      'Canevas : points de référence rattachés au système officiel (GNSS, polygonale)',
      'Mise en station et orientation sur des points connus',
      'Levé par rayonnement : angles et distances vers les points du terrain',
      'Calcul des coordonnées, report sur plan, modèle numérique de terrain',
      'Implantation : calcul inverse (distance, gisement) et report des points du projet',
      'Contrôle depuis une autre station et récolement',
    ],
  },
  mistakes: {
    items: [
      ['Mélanger degrés et grades', 'Erreur d’orientation majeure', 'Vérifier l’unité réglée dans l’instrument et dans les calculs.'],
      ['Oublier la correction de quadrant du gisement', 'Point implanté dans la mauvaise direction', 'Analyser les signes de ΔX et ΔY.'],
      ['Ne pas mesurer les hauteurs d’instrument et de réflecteur', 'Altitudes fausses', 'Mesurer et noter h_i et h_v à chaque station.'],
    ],
  },
  tips: {
    tips: [
      'Matérialisez les points de canevas par des repères durables, hors des zones d’engins.',
      'Fermez toujours une polygonale sur un point connu pour contrôler les erreurs.',
      'Utilisez le mode « implantation » de la station totale qui guide directement vers le point.',
      'Consignez systématiquement les observations dans un carnet ou fichier de terrain.',
    ],
  },
  norms: {
    norms: [
      ['Arrêté du 16 septembre 2003 (France)', 'Classes de précision des levés topographiques et rattachement au système national.'],
      ['NF EN ISO 17123', 'Procédures d’essai des instruments géodésiques et topographiques.'],
      ['RGF93 / Lambert 93', 'Système de référence légal en France métropolitaine.'],
      ['NGF-IGN69', 'Réseau de nivellement légal en France continentale.'],
    ],
  },
  exercises: {
    exercises: [
      {
        level: 1,
        text: 'Convertir 120 gon en degrés.',
        hint: '1 gon = 0,9°.',
        answer_latex: "120 \\times 0{,}9 = 108°",
        answer_text: '108°.',
      },
      {
        level: 2,
        text: 'Depuis S (500,00 ; 800,00), on vise B à 60,00 m au gisement 150 gon. Calculer B.',
        hint: '150 gon = 135° : sin = 0,7071 ; cos = −0,7071.',
        answer_latex: "X_B = 500 + 60 \\times 0{,}7071 = 542{,}43 \\qquad Y_B = 800 - 60 \\times 0{,}7071 = 757{,}57",
        answer_text: 'B (542,43 ; 757,57).',
      },
      {
        level: 3,
        text: 'Calculer la distance et le gisement de S (500,00 ; 800,00) vers P (470,00 ; 840,00).',
        hint: 'ΔX < 0 et ΔY > 0 : quatrième quadrant, ajouter 400 gon.',
        answer_latex: "D = \\sqrt{30^2 + 40^2} = 50{,}00\\ \\text{m} \\qquad G = 400 + \\arctan\\left(\\frac{-30}{40}\\right) = 400 - 40{,}966 = 359{,}034\\ \\text{gon}",
        answer_text: 'D = 50,00 m ; G = 359,034 gon.',
      },
    ],
  },
  quiz: {
    title: 'Quiz — Levés et implantation',
    questions: [
      { q: 'Combien de grades dans un tour complet ?', options: ['360', '400', '100'], correct: 1, explain: 'Un tour = 400 gon.' },
      { q: 'Depuis quelle direction compte-t-on un gisement ?', options: ['L’est, sens antihoraire', 'Le nord, sens horaire', 'Le sud, sens horaire'], correct: 1, explain: 'Le gisement part du nord et tourne dans le sens horaire.' },
      { q: 'Que vaut la somme des angles intérieurs d’une polygonale fermée de 6 sommets ?', options: ['600 gon', '800 gon', '1 200 gon'], correct: 1, explain: '(6 − 2) × 200 = 800 gon.' },
    ],
  },
  exam_questions: {
    questions: [
      'Expliquez le calcul des coordonnées par rayonnement et le problème inverse.',
      'Décrivez la polygonation, le calcul de la fermeture angulaire et sa compensation.',
      'Présentez une méthode d’implantation d’un bâtiment et les contrôles associés.',
    ],
  },
  interview_questions: {
    questions: [
      ['Comment contrôlez-vous une implantation ?', 'Par une mesure indépendante : stationnement sur un autre point connu, mesure des distances et diagonales entre points implantés, comparaison avec les cotes du projet.'],
      ['Pourquoi rattacher un chantier au Lambert 93 ?', 'Pour que tous les intervenants (topographe, bureau d’études, concessionnaires de réseaux, cadastre) travaillent dans le même référentiel et que les données soient interopérables (SIG, réseaux, DT-DICT).'],
    ],
  },
  practical_case: {
    title: 'Cas pratique — Implantation des angles d’un bâtiment',
    scenario: 'Un bâtiment rectangulaire de 24,00 × 12,00 m a son angle A en (2 000,00 ; 5 000,00) et sa façade AB orientée au gisement 100 gon (vers l’est). La station S est en (1 980,00 ; 4 990,00).',
    description: 'Calculer les coordonnées des angles B, C, D et les éléments d’implantation de B depuis S.',
    resolutions: [
      "B = (2\\,024{,}00 \\, ; \\, 5\\,000{,}00) \\quad C = (2\\,024{,}00 \\, ; \\, 5\\,012{,}00) \\quad D = (2\\,000{,}00 \\, ; \\, 5\\,012{,}00)",
      "S \\rightarrow B : \\Delta X = 44{,}00 \\, ; \\, \\Delta Y = 10{,}00 \\Rightarrow D = 45{,}12\\ \\text{m}",
      "G = \\arctan\\frac{44}{10} = 77{,}196° = 85{,}773\\ \\text{gon}",
    ],
    conclusion: 'Les quatre angles sont calculés puis implantés depuis S ; le contrôle des diagonales (√(24² + 12²) = 26,83 m) valide la forme rectangulaire.',
  },
  summary: {
    content: `### Les levés en 5 points
1. Grades : 400 gon par tour ; gisement depuis le nord, sens horaire.
2. Rayonnement : $X = X_S + D\\sin G$, $Y = Y_S + D\\cos G$.
3. Inverse : $D = \\sqrt{\\Delta X^2 + \\Delta Y^2}$, $G = \\arctan(\\Delta X/\\Delta Y)$ + quadrant.
4. Station totale : $D_h = D_i \\sin V$, $\\Delta H = D_i \\cos V + h_i - h_v$.
5. Polygonale : fermeture $(n-2) \\times 200$ gon et contrôle systématique.`,
  },
  key_points: {
    points: [
      '1 gon = 0,9°',
      'X = Est ; Y = Nord',
      'X_P = X_S + D sin G',
      'Somme des angles : (n − 2) × 200 gon',
      'Toujours contrôler une implantation',
    ],
  },
  self_assessment: {
    objectives: [
      'Je sais calculer des coordonnées par rayonnement',
      'Je sais calculer distance et gisement entre deux points',
      'Je sais réduire une mesure à la station totale',
      'Je sais calculer et répartir une fermeture angulaire',
      "J'ai réussi le quiz avec au moins 2 bonnes réponses sur 3",
    ],
  },
});
