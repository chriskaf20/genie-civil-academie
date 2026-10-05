// ── Lesson: Dessin technique — projections, vues, coupes et échelles — Module 4 ─
import { buildLesson } from './build_lesson.js';

export const lesson_dessin_coupes = buildLesson({
  moduleId: 4,
  slug: 'dessin_coupes',
  lessonIndex: 2,
  title: "Projections, Vues, Coupes & Sections : Représenter un Ouvrage à l'Échelle",
  subtitle: 'Module 04 — Dessin technique & Lecture de plans',
  level: 'Débutant',
  duration: '8h',
  diagramType: 'plan_coffrage',
  tags: ['Dessin technique', 'Projections', 'Vues', 'Coupes', 'Sections', 'Échelles', 'Pentes'],
}, {
  definition: {
    title: 'Définition — Passer de l’objet en 3D au plan en 2D',
    fr: 'Projections orthogonales, vues, coupes et sections',
    en: 'Orthographic projection, views, sections',
    metier: "Utilisée par les dessinateurs-projeteurs, architectes, ingénieurs, conducteurs de travaux et chefs de chantier pour concevoir et lire les plans.",
    content: `Un ouvrage en trois dimensions se représente sur papier par des **projections orthogonales** : on projette l'objet perpendiculairement sur des plans.

### Les vues
- **Vue de face**, **vue de dessus**, **vues de côté** : en France on utilise la **méthode européenne** (premier dièdre) : la vue de dessus est placée **sous** la vue de face.
- En bâtiment, la vue de dessus coupée à 1 m du sol s'appelle le **plan** ; les vues extérieures sont les **façades** (ou élévations).

### Coupes et sections
- **Coupe** : on coupe l'objet par un plan fictif, on retire la partie avant et on dessine ce qui est coupé **et** ce qui est vu au-delà.
- **Section** : on ne dessine que la partie coupée (la « tranche »).
- Les matériaux coupés sont **hachurés** ; le trait de coupe est repéré par des lettres (coupe A-A) et des flèches indiquant le sens d'observation.

### L'échelle
$$E = \\frac{\\text{dimension sur le dessin}}{\\text{dimension réelle}}$$
1/100 pour les plans d'ensemble, 1/50 pour les plans d'exécution, 1/20 à 1/5 pour les détails.

> 💡 Un bon dessin se lit sans hésitation : une coupe placée au bon endroit évite des dizaines de questions sur le chantier.`,
  },
  importance: {
    content: `- **Communication** : le plan est le langage commun entre concepteurs, entreprises et contrôleurs.
- **Contrat** : les plans font partie des pièces du marché ; une erreur de représentation peut coûter cher.
- **Exécution** : coffreurs, ferrailleurs et maçons travaillent directement à partir des plans et coupes.
- **Sécurité** : une mauvaise lecture (niveau, réservation, sens de pente) entraîne malfaçons et reprises.

> ⚠️ **À retenir** : les cotes écrites priment toujours sur la mesure au réglet sur le papier.`,
  },
  applications: {
    examples: [
      ['Permis de construire', 'Plan de masse, plans de niveaux, coupes et façades à l’échelle 1/100.'],
      ['Plan de coffrage', 'Vue en plan et coupes au 1/50 avec niveaux et réservations.'],
      ['Profil en travers routier', 'Coupe transversale de la chaussée avec pentes et couches.'],
      ['Détail de toiture', 'Coupe au 1/5 de l’acrotère et du relevé d’étanchéité.'],
      ['Ouvrage d’art', 'Coupe longitudinale et transversale d’un pont.'],
    ],
  },
  theory: {
    title: 'Théorie — Règles de représentation',
    content: `### 1. Les traits
- Trait continu fort : arêtes vues, contours coupés.
- Trait continu fin : cotes, hachures, lignes d'attache.
- Trait interrompu : arêtes cachées.
- Trait mixte fin (point-trait) : axes, plans de symétrie, traces de plans de coupe.

### 2. Coupes
Le plan de coupe est indiqué sur la vue principale par un trait mixte renforcé aux extrémités, avec des flèches et des lettres. On distingue la coupe simple, la coupe brisée (plusieurs plans) et la demi-coupe pour les pièces symétriques.

### 3. Échelles et conversions
- Longueur réelle = longueur dessin / E.
- Une surface mesurée sur le dessin doit être divisée par $E^2$.

### 4. Pentes
Une pente s'exprime en pourcentage ou en angle :
$$p = \\frac{\\Delta h}{L} \\times 100 \\qquad \\alpha = \\arctan\\left(\\frac{\\Delta h}{L}\\right)$$
Une pente de 100 % correspond à 45°. Sur les plans, une flèche indique le sens de la descente.

### 5. Niveaux
Les altitudes sont données par des **cotes de niveau** (par exemple +3,05 m), relatives à un niveau zéro du projet ou au nivellement général (NGF).`,
  },
  formulas: {
    title: 'Formules essentielles — Échelles et pentes',
    formulas: [
      {
        name: 'Échelle d’un dessin',
        latex: "E = \\frac{l_{dessin}}{l_{réelle}} \\qquad l_{réelle} = \\frac{l_{dessin}}{E}",
        description: 'Les deux longueurs doivent être dans la même unité.',
        vars: [
          ['E', 'Échelle', '-', '1/100, 1/50, 1/20…'],
          ['l_{dessin}', 'Longueur sur le dessin', 'cm', 'Mesurée sur le plan.'],
          ['l_{réelle}', 'Longueur réelle', 'cm', 'Dimension de l’ouvrage.'],
        ],
        rule: "Au 1/100, 1 cm sur le plan = 1 m réel ; au 1/50, 2 cm = 1 m.",
      },
      {
        name: 'Surface réelle à partir du dessin',
        latex: "A_{réelle} = \\frac{A_{dessin}}{E^2}",
        description: 'Les surfaces se convertissent avec le carré de l’échelle.',
        vars: [
          ['A_{dessin}', 'Surface mesurée sur le plan', 'cm²', 'Planimétrage ou logiciel.'],
          ['A_{réelle}', 'Surface réelle', 'cm²', 'À convertir en m² (÷ 10 000).'],
        ],
      },
      {
        name: 'Pente en pourcentage et en angle',
        latex: "p = \\frac{\\Delta h}{L} \\times 100 \\qquad \\alpha = \\arctan\\left(\\frac{p}{100}\\right)",
        description: 'Conversion entre pente en % et angle en degrés.',
        vars: [
          ['p', 'Pente', '%', 'Toiture tuiles 30 à 100 % ; terrasse 1 à 5 % ; rampe d’accès PMR ≤ 5 %.'],
          ['\\Delta h', 'Dénivelée', 'm', 'Différence de hauteur.'],
          ['L', 'Longueur horizontale', 'm', 'Projection horizontale.'],
          ['\\alpha', 'Angle', '°', 'Angle avec l’horizontale.'],
        ],
      },
      {
        name: 'Longueur réelle d’un rampant',
        latex: "L_{rampant} = \\frac{L}{\\cos\\alpha} = \\sqrt{L^2 + \\Delta h^2}",
        description: 'Longueur en vraie grandeur d’un élément incliné vu en plan.',
        vars: [
          ['L_{rampant}', 'Longueur inclinée', 'm', 'Chevron, rampe, escalier.'],
        ],
      },
    ],
  },
  stepbystep: {
    title: 'Calcul complet — Lecture d’une coupe de toiture au 1/50',
    problem: "Sur une coupe au 1/50, la demi-largeur de la toiture mesure 9,0 cm et la hauteur du faîtage au-dessus de l'égout 2,7 cm. Déterminer les dimensions réelles, la pente et la longueur des chevrons.",
    steps_demo: [
      { n: 1, text: "Demi-largeur réelle : 9,0 × 50 = 450 cm = 4,50 m." },
      { n: 2, text: "Hauteur réelle : 2,7 × 50 = 135 cm = 1,35 m." },
      { n: 3, text: "Pente : p = 1,35 / 4,50 × 100 = 30 %." },
      { n: 4, text: "Angle : α = arctan(0,30) = 16,7°." },
      { n: 5, text: "Chevron : √(4,50² + 1,35²) = √(20,25 + 1,82) = 4,70 m (plus le débord de toit)." },
    ],
    result_latex: "p = \\frac{1{,}35}{4{,}50} = 30\\,\\% \\qquad \\alpha = 16{,}7° \\qquad L_{chevron} = \\sqrt{4{,}50^2 + 1{,}35^2} = 4{,}70\\ \\text{m}",
  },
  units: {
    table: [
      ['Cotes des plans de bâtiment', 'cm (ou m pour les niveaux)', 'ft-in', '1 ft = 30,48 cm ; 1 in = 2,54 cm'],
      ['Échelle', '1/n', '1/8" = 1\'-0"', '1/8 in par pied ≈ 1/96'],
      ['Pente', '% ou °', 'in/ft', '1 in/ft ≈ 8,3 %'],
      ['Niveaux', 'm (NGF ou relatif)', 'ft', '+3,05 = 3,05 m au-dessus du zéro'],
      ['Format papier', 'A0 à A4', 'ANSI A à E', 'A1 = 594 × 841 mm'],
    ],
    note: 'Vérifiez toujours l’unité indiquée dans le cartouche : les plans de génie civil sont souvent cotés en mètres, ceux de charpente métallique en millimètres.',
  },
  hypotheses: {
    items: [
      ['info', 'Les règles décrites suivent la méthode européenne de projection (premier dièdre), utilisée en France.'],
      ['info', 'Les pays anglo-saxons utilisent souvent la méthode américaine (troisième dièdre) : vérifiez le symbole dans le cartouche.'],
      ['warning', 'Un plan imprimé à une autre taille que son format d’origine n’est plus à l’échelle indiquée.'],
      ['warning', 'Ne mesurez jamais une cote manquante sur un plan papier : demandez-la au concepteur.'],
      ['tip', 'Pour lire une coupe, repérez d’abord son trait sur le plan et le sens des flèches.'],
    ],
  },
  simple_examples: {
    examples: [
      {
        title: 'Exemple 1 : longueur au 1/100',
        given: 'Mur dessiné sur 7,3 cm au 1/100',
        find: 'Sa longueur réelle',
        solution_latex: "l = 7{,}3 \\times 100 = 730\\ \\text{cm} = 7{,}30\\ \\text{m}",
        result: '7,30 m.',
      },
      {
        title: 'Exemple 2 : surface d’une pièce au 1/50',
        given: 'Surface mesurée sur le plan : 48 cm²',
        find: 'Surface réelle',
        solution_latex: "A = 48 \\times 50^2 = 120\\,000\\ \\text{cm}^2 = 12\\ \\text{m}^2",
        result: '12 m².',
      },
      {
        title: 'Exemple 3 : rampe d’accès',
        given: 'Rampe de 6,00 m de long (horizontal) pour monter de 0,30 m',
        find: 'La pente',
        solution_latex: "p = \\frac{0{,}30}{6{,}00} \\times 100 = 5\\,\\%",
        result: '5 % : limite usuelle pour une rampe accessible aux personnes à mobilité réduite.',
      },
    ],
  },
  real_examples: {
    title: 'Exemple réel — Erreur de sens de lecture d’une coupe',
    examples: [
      {
        context: 'Construction d’un groupe scolaire, voile de sous-sol',
        scenario: "Le coffreur a lu la coupe B-B dans le mauvais sens : la réservation pour la gaine de ventilation a été placée côté opposé du voile. Il a fallu carotter le béton et vérifier que l'ouverture ne coupait pas d'armature principale.",
        decomposition_latex: "\\text{Flèches de coupe ignorées} \\Rightarrow \\text{réservation inversée} \\Rightarrow \\text{carottage} + \\text{vérification structure}",
        lesson: "Le sens d'observation des coupes et les repères d'axes doivent être vérifiés systématiquement ; un plan de réservations dédié, validé avant coulage, évite ces reprises.",
      },
    ],
  },
  diagrams: {
    title: 'Schéma de principe — Lire un dossier de plans',
    diagram_description: [
      'Cartouche : projet, échelle, indice de révision, unités, date',
      'Plan de masse : implantation, orientation, accès, réseaux',
      'Plans de niveaux : murs, ouvertures, cotes et niveaux',
      'Coupes : hauteurs, épaisseurs de planchers, pentes',
      'Façades : aspect extérieur, matériaux, hauteurs',
      'Détails : points singuliers au 1/20 à 1/5',
    ],
  },
  mistakes: {
    items: [
      ['Mesurer au réglet une cote absente', 'Erreur due au rétrécissement du papier ou à l’impression', 'Utiliser les cotes écrites ou demander la cote au concepteur.'],
      ['Utiliser un plan périmé', 'Exécution d’une ancienne version', 'Vérifier l’indice de révision dans le cartouche et la liste des plans à jour.'],
      ['Convertir une surface avec E au lieu de E²', 'Surface fausse d’un facteur 50 ou 100', 'Les surfaces se convertissent avec le carré de l’échelle.'],
    ],
  },
  tips: {
    tips: [
      'Repérez les axes (files A, B, C… et 1, 2, 3…) : ils permettent de se localiser sur tous les plans.',
      'Une coupe doit passer par les éléments intéressants : escalier, trémie, changement de niveau.',
      'Hachurez différemment chaque matériau (béton, maçonnerie, isolant) selon les conventions.',
      'Gardez la même orientation (nord en haut) sur tous les plans d’un même projet.',
    ],
  },
  norms: {
    norms: [
      ['NF EN ISO 128', 'Dessins techniques : principes généraux de représentation (traits, vues, coupes).'],
      ['NF EN ISO 5455', 'Dessins techniques : échelles.'],
      ['NF EN ISO 7519', 'Dessins de bâtiment : principes généraux de présentation.'],
      ['NF EN ISO 129-1', 'Cotation et tolérancement.'],
      ['NF EN ISO 7200', 'Champs de données des cartouches.'],
    ],
  },
  exercises: {
    exercises: [
      {
        level: 1,
        text: 'Sur un plan au 1/50, une poutre mesure 12,4 cm. Quelle est sa longueur réelle ?',
        hint: 'l = l_dessin / E.',
        answer_latex: "l = 12{,}4 \\times 50 = 620\\ \\text{cm} = 6{,}20\\ \\text{m}",
        answer_text: '6,20 m.',
      },
      {
        level: 2,
        text: 'Une toiture a une pente de 45 %. Calculer son angle et la longueur d’un chevron pour une projection horizontale de 5,20 m.',
        hint: 'α = arctan(0,45) ; L = 5,20 / cos α.',
        answer_latex: "\\alpha = \\arctan(0{,}45) = 24{,}2° \\qquad L = \\frac{5{,}20}{\\cos 24{,}2°} = \\frac{5{,}20}{0{,}912} = 5{,}70\\ \\text{m}",
        answer_text: 'α ≈ 24,2° ; chevron ≈ 5,70 m.',
      },
      {
        level: 3,
        text: 'Une parcelle mesure 36 cm² sur un plan au 1/500. Calculer sa surface réelle en m².',
        hint: 'A = A_dessin × 500².',
        answer_latex: "A = 36 \\times 250\\,000 = 9\\,000\\,000\\ \\text{cm}^2 = 900\\ \\text{m}^2",
        answer_text: '900 m².',
      },
    ],
  },
  quiz: {
    title: 'Quiz — Projections et coupes',
    questions: [
      { q: 'Dans la méthode européenne, où se place la vue de dessus ?', options: ['Au-dessus de la vue de face', 'Sous la vue de face', 'À gauche de la vue de face'], correct: 1, explain: 'Premier dièdre : la vue de dessus est sous la vue de face.' },
      { q: 'Quelle différence entre coupe et section ?', options: ['Aucune', 'La coupe montre aussi ce qui est vu au-delà du plan de coupe', 'La section est toujours au 1/10'], correct: 1, explain: 'La section ne montre que la partie coupée.' },
      { q: 'Quel angle correspond à une pente de 100 % ?', options: ['30°', '45°', '90°'], correct: 1, explain: 'tan 45° = 1, soit 100 %.' },
    ],
  },
  exam_questions: {
    questions: [
      'Expliquez la méthode européenne de projection et la disposition des vues.',
      'Distinguez coupe et section, et décrivez les conventions de représentation (traits, hachures, repères).',
      'Réalisez la coupe d’un petit bâtiment à partir de son plan en justifiant la position du plan de coupe.',
    ],
  },
  interview_questions: {
    questions: [
      ['Comment vérifiez-vous la cohérence d’un dossier de plans ?', 'En comparant les mêmes éléments sur les différents documents : axes et cotes identiques entre plans et coupes, niveaux cohérents, réservations reportées sur les plans de structure, indices de révision à jour.'],
      ['Pourquoi les cotes écrites priment-elles ?', 'Parce que les tirages papier peuvent être réduits ou déformés et que le dessin peut comporter des imprécisions ; la cote écrite est la donnée contractuelle.'],
    ],
  },
  practical_case: {
    title: 'Cas pratique — Contrôle d’un plan de rampe de parking',
    scenario: 'Sur un plan au 1/100, une rampe de parking mesure 18,5 cm de long et franchit un dénivelé de 2,90 m (niveaux −2,90 et ±0,00).',
    description: 'Vérifier la pente par rapport aux valeurs usuelles des rampes droites de parking (de l’ordre de 15 à 18 % au maximum).',
    resolutions: [
      "L = 18{,}5 \\times 100 = 1\\,850\\ \\text{cm} = 18{,}50\\ \\text{m}",
      "p = \\frac{2{,}90}{18{,}50} \\times 100 = 15{,}7\\,\\% \\ (\\text{dans la plage usuelle})",
      "L_{réelle} = \\sqrt{18{,}50^2 + 2{,}90^2} = 18{,}73\\ \\text{m}",
    ],
    conclusion: 'La pente de 15,7 % reste dans les valeurs usuelles, à confirmer avec la norme et le programme du projet ; on vérifiera aussi les raccordements en haut et en bas de rampe (pentes intermédiaires) pour éviter que les véhicules touchent le sol.',
  },
  summary: {
    content: `### Le dessin en 5 points
1. Méthode européenne : vue de dessus sous la vue de face.
2. Coupe = partie coupée + ce qui est vu ; section = partie coupée seule.
3. Échelle : $l_{réelle} = l_{dessin}/E$ ; surfaces avec $E^2$.
4. Pente : $p = \\Delta h / L$ ; 100 % = 45°.
5. Les cotes écrites priment ; vérifier l'indice de révision.`,
  },
  key_points: {
    points: [
      '1/100 : 1 cm = 1 m',
      'Surface : diviser par E²',
      'p (%) = Δh / L × 100',
      'Trait mixte : axes et plans de coupe',
      'Cotes écrites prioritaires',
    ],
  },
  self_assessment: {
    objectives: [
      'Je sais disposer et lire les vues d’un objet',
      'Je sais lire une coupe et son sens d’observation',
      'Je sais convertir longueurs et surfaces à l’échelle',
      'Je sais calculer une pente en % et en degrés',
      "J'ai réussi le quiz avec au moins 2 bonnes réponses sur 3",
    ],
  },
});
