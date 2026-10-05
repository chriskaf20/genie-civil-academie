// ── Lesson: Technologie du bâtiment — gros œuvre — Module 41 ─────────────────
import { buildLesson } from './build_lesson.js';

export const lesson_batiment_gros_oeuvre = buildLesson({
  moduleId: 41,
  slug: 'batiment_gros_oeuvre',
  lessonIndex: 1,
  title: "Technologie du Bâtiment : Gros Œuvre, Fondations, Murs, Planchers & Escaliers",
  subtitle: 'Module 41 — Technologie du bâtiment : gros œuvre & second œuvre',
  level: 'Débutant',
  duration: '10h',
  diagramType: 'plan_coffrage',
  tags: ['Gros œuvre', 'Fondations', 'Chaînages', 'Planchers', 'Escaliers', 'Blondel', 'Prédimensionnement'],
}, {
  definition: {
    title: "Définition — Le squelette d'un bâtiment",
    fr: 'Gros œuvre (structure porteuse du bâtiment)',
    en: 'Structural work / shell and core',
    metier: "Utilisée par les conducteurs de travaux, chefs de chantier, dessinateurs, économistes et ingénieurs structure du bâtiment.",
    content: `Le **gros œuvre** regroupe tous les ouvrages qui assurent la **stabilité** et la **solidité** du bâtiment : fondations, soubassements, murs porteurs, poteaux, poutres, planchers, escaliers et charpente. Le **second œuvre** (cloisons, menuiseries, revêtements, équipements) vient ensuite le compléter.

### Le cheminement des charges
Les charges suivent toujours le même chemin, du haut vers le bas :
**toiture → planchers → poutres → murs ou poteaux → fondations → sol**.

Chaque élément doit être capable de reprendre les charges qu'il reçoit et de les transmettre à l'élément suivant : c'est la **descente de charges**.

> 💡 Comprendre ce cheminement permet de savoir immédiatement quel mur on peut ou non supprimer.`,
  },
  importance: {
    content: `- **Coût** : le gros œuvre représente 40 à 50 % du coût de construction d'un bâtiment courant.
- **Délais** : c'est le chemin critique du chantier ; tout retard se répercute sur les corps d'état suivants.
- **Pérennité** : une erreur de fondation ou de chaînage provoque des fissures difficiles et coûteuses à réparer.
- **Coordination** : réservations (gaines, trémies, fourreaux) à prévoir avant le coulage du béton.

> ⚠️ **À retenir** : une réservation oubliée dans une dalle coûte un carottage, parfois une étude de renforcement.`,
  },
  applications: {
    examples: [
      ['Maison individuelle', 'Semelles filantes, vide sanitaire, murs en blocs béton chaînés, plancher poutrelles-entrevous, charpente bois.'],
      ['Immeuble de logements', 'Voiles béton coulés en banches, dalles pleines, escaliers préfabriqués.'],
      ['Bâtiment tertiaire', 'Ossature poteaux-poutres, dalles alvéolées précontraintes de grande portée.'],
      ['Bâtiment industriel', 'Fondations isolées sous poteaux, dallage sur terre-plein fortement chargé.'],
      ['Extension', 'Reprise en sous-œuvre et liaison avec l’existant par goujons scellés.'],
    ],
  },
  theory: {
    title: "Théorie — Les ouvrages du gros œuvre",
    content: `### 1. Fondations superficielles
- **Semelles filantes** sous les murs, **semelles isolées** sous les poteaux, **radier** quand le sol est faible ou les charges importantes.
- Hors gel : profondeur minimale de 0,50 à 0,90 m selon la région ; davantage en sol argileux.
- Largeur : $B = N_{ser} / q_{adm}$ (charge de service / contrainte admissible du sol).

### 2. Murs et chaînages
Murs en blocs béton, briques, béton banché. Les **chaînages** horizontaux (à chaque plancher) et verticaux (aux angles et jonctions) ceinturent la construction.

### 3. Planchers
- **Dalle pleine** coulée en place : épaisseur ≈ L/25 (isostatique) à L/30 (continue).
- **Poutrelles et entrevous** avec dalle de compression : très courant en maison individuelle.
- **Prédalles** et **dalles alvéolées** précontraintes : rapidité et grandes portées.

### 4. Poutres et linteaux
Prédimensionnement d'une poutre béton armé : hauteur $h \\approx L/12$ à $L/10$, largeur $b \\approx 0{,}3h$ à $0{,}5h$.

### 5. Escaliers
Le confort de marche est donné par la **loi de Blondel** : $2h + g = 60$ à $64$ cm, avec une hauteur de marche $h$ de 16 à 18 cm et un giron $g$ de 25 à 32 cm.`,
  },
  formulas: {
    title: 'Formules essentielles — Prédimensionnement du gros œuvre',
    formulas: [
      {
        name: 'Loi de Blondel (confort des escaliers)',
        latex: "60\\ \\text{cm} \\le 2h + g \\le 64\\ \\text{cm}",
        description: 'Relation entre la hauteur de marche et le giron pour un pas confortable.',
        vars: [
          ['h', 'Hauteur de marche', 'cm', '16 à 18 cm en logement ; ≤ 16 cm en ERP.'],
          ['g', 'Giron', 'cm', 'Profondeur utile de la marche, 25 à 32 cm.'],
        ],
        rule: "Une valeur de 63 cm correspond à la longueur moyenne d'un pas en montée.",
      },
      {
        name: "Nombre de marches et reculement",
        latex: "n = \\frac{H}{h} \\qquad L_r = (n - 1) \\cdot g",
        description: "La dernière marche est le palier d'arrivée : le reculement compte n − 1 girons.",
        vars: [
          ['n', 'Nombre de hauteurs de marche', '-', 'Arrondi à l’entier, puis recalcul de h.'],
          ['H', 'Hauteur à monter', 'cm', 'De sol fini à sol fini.'],
          ['L_r', 'Reculement', 'm', "Longueur projetée de l'escalier droit."],
        ],
      },
      {
        name: 'Épaisseur de dalle pleine',
        latex: "e \\approx \\frac{L}{25} \\ \\text{(isostatique)} \\qquad e \\approx \\frac{L}{30} \\ \\text{(continue)}",
        description: 'Prédimensionnement avant calcul (vérifier ensuite flèche, feu et acoustique).',
        vars: [
          ['e', 'Épaisseur de dalle', 'm', 'Au moins 16 à 20 cm en logement collectif pour l’acoustique.'],
          ['L', 'Petite portée', 'm', 'Portée entre appuis.'],
        ],
      },
      {
        name: "Poids propre d'une dalle",
        latex: "G = \\gamma_{béton} \\cdot e",
        description: 'Charge permanente surfacique due au béton armé.',
        vars: [
          ['G', 'Poids propre', 'kN/m²', 'À compléter par les revêtements et cloisons.'],
          ['\\gamma_{béton}', 'Poids volumique du béton armé', 'kN/m³', '25 kN/m³.'],
          ['e', 'Épaisseur', 'm', 'Épaisseur de la dalle.'],
        ],
      },
      {
        name: 'Largeur de semelle filante',
        latex: "B = \\frac{N_{ser}}{q_{adm}}",
        description: 'Largeur nécessaire pour ne pas dépasser la contrainte admissible du sol.',
        vars: [
          ['B', 'Largeur de semelle', 'm', 'Au moins 0,40 à 0,50 m en pratique.'],
          ['N_{ser}', 'Charge de service', 'kN/m', 'Par mètre de mur, poids de la semelle compris.'],
          ['q_{adm}', 'Contrainte admissible du sol', 'kPa', 'Donnée par l’étude géotechnique (1 bar = 100 kPa).'],
        ],
      },
    ],
  },
  stepbystep: {
    title: "Calcul complet — Escalier droit d'une maison",
    problem: "Concevoir un escalier droit entre le rez-de-chaussée et l'étage : hauteur de sol fini à sol fini H = 2,80 m.",
    steps_demo: [
      { n: 1, text: "Hauteur de marche visée ≈ 17,5 cm : n = 280 / 17,5 = 16 marches (hauteurs)." },
      { n: 2, text: "Hauteur réelle : h = 280 / 16 = 17,5 cm." },
      { n: 3, text: "Giron par Blondel avec 2h + g = 63 cm : g = 63 − 35 = 28 cm." },
      { n: 4, text: "Reculement : L_r = (16 − 1) × 0,28 = 4,20 m." },
      { n: 5, text: "Échappée (hauteur libre sous plafond) ≥ 2,00 m à vérifier au droit de la trémie." },
      { n: 6, text: "Conclusion : 16 marches de 17,5 cm, giron 28 cm, reculement 4,20 m." },
    ],
    result_latex: "n = 16 \\quad h = 17{,}5\\ \\text{cm} \\quad g = 28\\ \\text{cm} \\quad 2h + g = 63\\ \\text{cm} \\quad L_r = 4{,}20\\ \\text{m}",
  },
  units: {
    table: [
      ['Charge surfacique', 'kN/m²', 'psf', '1 kN/m² = 20,9 psf'],
      ['Charge linéique', 'kN/m', 'plf', '1 kN/m = 68,5 plf'],
      ['Contrainte du sol', 'kPa, bar', 'psf', '1 bar = 100 kPa = 2 089 psf'],
      ['Poids volumique béton armé', 'kN/m³', 'pcf', '25 kN/m³ = 159 pcf'],
      ['Dimensions courantes', 'cm', 'in', 'Bloc 20 × 20 × 50 cm ; dalle 20 cm = 7,9 in'],
    ],
    note: 'Sur les plans, les cotes de niveau sont en mètres (NGF ou relatives), les dimensions des éléments en centimètres.',
  },
  hypotheses: {
    items: [
      ['info', 'Les ratios de prédimensionnement (L/25, L/12…) servent à démarrer le projet : le calcul réglementaire les confirme ou les corrige.'],
      ['info', 'La largeur de semelle suppose une contrainte uniforme sous une charge centrée.'],
      ['warning', 'En sol argileux sensible au retrait-gonflement, la profondeur d’ancrage minimale est de 0,80 à 1,20 m selon l’exposition.'],
      ['warning', 'Un escalier d’ERP obéit à des règles plus strictes (hauteur ≤ 16 cm, giron ≥ 28 cm, mains courantes).'],
      ['tip', 'Coordonnez les réservations dès le plan de coffrage : gaines de ventilation, évacuations, fourreaux électriques.'],
    ],
  },
  simple_examples: {
    examples: [
      {
        title: 'Exemple 1 : épaisseur et poids d’une dalle',
        given: 'Dalle continue de 4,50 m de portée',
        find: 'Épaisseur et poids propre',
        solution_latex: "e \\approx \\frac{4{,}50}{30} = 0{,}15\\ \\text{m} \\qquad G = 25 \\times 0{,}15 = 3{,}75\\ \\text{kN/m}^2",
        result: 'Dalle de 15 cm (portée à 18-20 cm en collectif pour l’acoustique).',
      },
      {
        title: 'Exemple 2 : semelle filante',
        given: 'N_ser = 60 kN/m, q_adm = 0,15 MPa',
        find: 'La largeur de la semelle',
        solution_latex: "B = \\frac{60}{150} = 0{,}40\\ \\text{m}",
        result: 'B = 0,40 m ; on retient souvent 0,50 m pour faciliter l’exécution.',
      },
      {
        title: 'Exemple 3 : poutre de 6 m',
        given: 'Poutre continue de 6 m de portée',
        find: 'Section de prédimensionnement',
        solution_latex: "h \\approx \\frac{6{,}00}{12} = 0{,}50\\ \\text{m} \\qquad b \\approx 0{,}4 \\times 0{,}50 = 0{,}20\\ \\text{m}",
        result: 'Poutre de 20 × 50 cm à vérifier par le calcul.',
      },
    ],
  },
  real_examples: {
    title: 'Exemple réel — Fissuration d’une maison sans chaînage',
    examples: [
      {
        context: 'Maison de plain-pied des années 1980 sur sol argileux',
        scenario: "Après un été sec, des fissures en escalier apparaissent aux angles des ouvertures. Le diagnostic révèle des fondations à 0,40 m de profondeur et l'absence de chaînage vertical aux angles.",
        decomposition_latex: "\\text{Retrait de l'argile} + \\text{fondations peu profondes} + \\text{absence de chaînage} \\Rightarrow \\text{tassements différentiels}",
        lesson: "Un ancrage suffisant sous la zone de dessiccation et des chaînages continus auraient évité les désordres. La réparation (micropieux, agrafage) coûte plusieurs dizaines de milliers d'euros.",
      },
    ],
  },
  diagrams: {
    title: 'Schéma de principe — Phasage du gros œuvre',
    diagram_description: [
      'Implantation et terrassements : piquetage, fouilles en rigole ou en pleine masse',
      'Fondations : béton de propreté, semelles armées, longrines',
      'Soubassement : murs de vide sanitaire ou dallage sur terre-plein',
      'Élévation : murs, poteaux, chaînages verticaux, linteaux',
      'Planchers : coffrage ou poutrelles, réservations, coulage de la dalle',
      'Charpente et couverture : mise hors d’eau du bâtiment',
    ],
  },
  mistakes: {
    items: [
      ['Fonder au-dessus de la profondeur hors gel', 'Soulèvement des fondations en hiver', 'Respecter la profondeur hors gel locale (0,50 à 0,90 m en France).'],
      ['Escalier avec des marches irrégulières', 'Risque de chute élevé', 'Toutes les marches d’une volée doivent avoir la même hauteur (tolérance de quelques millimètres).'],
      ['Couler une dalle sans vérifier les réservations', 'Carottages coûteux et armatures coupées', 'Faire valider le plan de réservations par tous les corps d’état avant le coulage.'],
    ],
  },
  tips: {
    tips: [
      'Vérifiez l’échappée d’un escalier : au moins 2,00 m entre le nez de marche et le plafond.',
      'Sous une dalle pleine, laissez l’étaiement au moins 21 jours ou jusqu’à résistance suffisante.',
      'Un béton de propreté de 5 cm sous les semelles protège les armatures et facilite le travail.',
      'Les arases de murs doivent être de niveau avant la pose des poutrelles : contrôlez au laser.',
    ],
  },
  norms: {
    norms: [
      ['NF DTU 13.1', 'Fondations superficielles.'],
      ['NF DTU 20.1', 'Ouvrages en maçonnerie de petits éléments (murs, chaînages).'],
      ['NF DTU 21', 'Exécution des ouvrages en béton.'],
      ['NF DTU 23.1', 'Murs en béton banché.'],
      ['NF EN 1992-1-1', 'Eurocode 2 : calcul des structures en béton.'],
    ],
  },
  exercises: {
    exercises: [
      {
        level: 1,
        text: 'Un escalier monte 2,55 m. Proposer le nombre de marches, la hauteur de marche et le giron (2h + g = 63 cm).',
        hint: 'Essayer n = 15.',
        answer_latex: "h = \\frac{255}{15} = 17\\ \\text{cm} \\qquad g = 63 - 34 = 29\\ \\text{cm}",
        answer_text: '15 marches de 17 cm, giron 29 cm.',
      },
      {
        level: 2,
        text: 'Calculer le reculement de l’escalier de l’exercice 1.',
        hint: 'L_r = (n − 1)·g.',
        answer_latex: "L_r = 14 \\times 0{,}29 = 4{,}06\\ \\text{m}",
        answer_text: 'Reculement ≈ 4,06 m.',
      },
      {
        level: 3,
        text: 'Un mur transmet 85 kN/m (service) sur un sol de contrainte admissible 0,20 MPa. Calculer la largeur de semelle en ajoutant le poids propre de la semelle (B × 0,30 m × 25 kN/m³).',
        hint: 'B = (85 + 7,5·B) / 200.',
        answer_latex: "200 B = 85 + 7{,}5 B \\Rightarrow B = \\frac{85}{192{,}5} = 0{,}44\\ \\text{m}",
        answer_text: 'B ≈ 0,44 m, on retient 0,50 m.',
      },
    ],
  },
  quiz: {
    title: 'Quiz — Gros œuvre',
    questions: [
      { q: 'Que vaut 2h + g pour un escalier confortable ?', options: ['40 à 44 cm', '60 à 64 cm', '80 à 84 cm'], correct: 1, explain: 'Loi de Blondel : 2h + g compris entre 60 et 64 cm.' },
      { q: 'Quel est le rôle d’un chaînage horizontal ?', options: ['Décorer la façade', 'Ceinturer les murs au niveau des planchers', 'Isoler thermiquement'], correct: 1, explain: 'Il relie les murs, répartit les charges et limite la fissuration.' },
      { q: 'Quelle épaisseur pour une dalle continue de 6 m (L/30) ?', options: ['12 cm', '20 cm', '30 cm'], correct: 1, explain: '6 / 30 = 0,20 m.' },
    ],
  },
  exam_questions: {
    questions: [
      'Décrivez le cheminement des charges dans un bâtiment courant, de la toiture au sol.',
      'Comparez les différents types de planchers (dalle pleine, poutrelles-entrevous, prédalles, dalles alvéolées).',
      'Concevez un escalier droit pour une hauteur d’étage donnée en justifiant chaque dimension.',
    ],
  },
  interview_questions: {
    questions: [
      ['Quel plancher conseillez-vous pour une maison individuelle ?', "Le plancher poutrelles-entrevous : économique, rapide à poser sans coffrage, adapté aux portées de 4 à 6 m ; avec des entrevous isolants pour un plancher sur vide sanitaire."],
      ['Comment savez-vous si un mur est porteur ?', "Je regarde le sens de portée des planchers et des solives (le mur qui les reçoit est porteur), son épaisseur, sa position dans l'alignement des murs des étages, et je consulte les plans d'origine."],
    ],
  },
  practical_case: {
    title: 'Cas pratique — Plancher d’un séjour',
    scenario: 'Séjour de 5,40 × 4,20 m entre deux murs porteurs distants de 4,20 m. Le maître d’ouvrage hésite entre dalle pleine et poutrelles-entrevous.',
    description: 'Prédimensionner la dalle pleine et comparer son poids propre à celui d’un plancher 16 + 4 (poids ≈ 2,8 kN/m²).',
    resolutions: [
      "e \\approx \\frac{4{,}20}{25} = 0{,}17\\ \\text{m} \\ \\text{(dalle isostatique)}",
      "G_{dalle} = 25 \\times 0{,}17 = 4{,}25\\ \\text{kN/m}^2 \\quad > \\quad G_{16+4} \\approx 2{,}8\\ \\text{kN/m}^2",
      "\\text{Poutrelles portant sur 4,20 m, sans coffrage ni étaiement lourd}",
    ],
    conclusion: 'Le plancher poutrelles-entrevous 16 + 4 est plus léger et plus rapide ; la dalle pleine se justifie si l’on recherche une meilleure isolation acoustique ou des charges concentrées.',
  },
  summary: {
    content: `### Le gros œuvre en 5 points
1. Les charges descendent : toiture → planchers → murs / poteaux → fondations → sol.
2. Semelle : $B = N_{ser} / q_{adm}$, hors gel.
3. Chaînages horizontaux et verticaux indispensables.
4. Dalle : $e \\approx L/25$ à $L/30$ ; poutre : $h \\approx L/12$ à $L/10$.
5. Escalier : **Blondel** $2h + g = 60$ à $64$ cm.`,
  },
  key_points: {
    points: [
      'Blondel : 2h + g = 60 à 64 cm',
      'Reculement = (n − 1) × g',
      'Dalle pleine : e ≈ L/25 à L/30',
      'Poids du béton armé : 25 kN/m³',
      'Semelle : B = N_ser / q_adm',
    ],
  },
  self_assessment: {
    objectives: [
      'Je connais les ouvrages du gros œuvre et leur rôle',
      'Je sais prédimensionner une dalle et une poutre',
      'Je sais calculer la largeur d’une semelle filante',
      'Je sais concevoir un escalier avec la loi de Blondel',
      "J'ai réussi le quiz avec au moins 2 bonnes réponses sur 3",
    ],
  },
});
