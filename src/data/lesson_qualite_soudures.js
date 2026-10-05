// ── Lesson: Contrôle des aciers et des soudures — Module 33 ──────────────────
import { buildLesson } from './build_lesson.js';

export const lesson_qualite_soudures = buildLesson({
  moduleId: 33,
  slug: 'qualite_soudures',
  lessonIndex: 2,
  title: "Contrôle des Aciers et des Soudures : Classes d'Exécution EN 1090, Défauts, CND et Serrage des Boulons",
  subtitle: 'Module 33 — Contrôle Qualité & Essais',
  level: 'Avancé',
  duration: '6h',
  tags: ['Soudure', 'EN 1090', 'EXC2', 'CND', 'Ultrasons', 'ISO 5817', 'Boulons précontraints'],
}, {
  definition: {
    title: 'Définition — Garantir la qualité d’une charpente métallique',
    fr: 'Contrôle qualité des constructions métalliques',
    en: 'Quality control of steel structures',
    metier: "Concerne les coordonnateurs en soudage, les contrôleurs CND, les ingénieurs méthodes de charpente et les bureaux de contrôle.",
    content: `La qualité d'une charpente métallique repose sur trois éléments :

1. **Les matériaux** : nuance et qualité vérifiées par les certificats 3.1 (NF EN 10204).
2. **Les soudures** : réalisées selon des modes opératoires qualifiés (DMOS/QMOS) par des soudeurs qualifiés, puis contrôlées.
3. **Les assemblages boulonnés** : classes de boulons, serrage et précontrainte contrôlés.

### Les classes d'exécution (NF EN 1090-2)
**EXC1 à EXC4** : plus la classe est élevée, plus les exigences de contrôle sont fortes. La plupart des bâtiments relèvent d'EXC2 ; les ponts et structures soumises à la fatigue relèvent souvent d'EXC3.

### Les contrôles non destructifs (CND)
- **VT** : contrôle visuel (100 % des soudures) ;
- **MT / PT** : magnétoscopie et ressuage, pour les défauts débouchants ;
- **UT** : ultrasons, pour les défauts internes des soudures épaisses ;
- **RT** : radiographie.

> 💡 Le niveau d'acceptation des défauts de soudure est défini par l'ISO 5817 : niveau B (sévère), C (intermédiaire, EXC2 et EXC3 courant), D (modéré).`,
  },
  importance: {
    content: `- **Sécurité** : une soudure défectueuse peut provoquer une rupture fragile ou en fatigue.
- **Marquage CE** : la NF EN 1090-1 impose un contrôle de production en usine certifié.
- **Responsabilité** : la traçabilité (matière, soudeur, contrôle) est exigée en cas de sinistre.
- **Coût** : réparer une soudure sur site coûte beaucoup plus cher qu'en atelier.

> ⚠️ **À retenir** : le contrôle visuel est obligatoire sur toutes les soudures ; les autres CND se font selon un pourcentage fixé par la classe d'exécution.`,
  },
  applications: {
    examples: [
      ['Bâtiment industriel', 'EXC2, VT 100 % et contrôles par sondage MT/UT.'],
      ['Pont métallique', 'EXC3 ou EXC4, UT importants sur les soudures bout à bout.'],
      ['Assemblage boulonné précontraint', 'Contrôle du serrage à la clé dynamométrique.'],
      ['Réception de matière', 'Vérification des certificats 3.1 et du marquage.'],
      ['Réparation', 'Gougeage et ressoudage d’une soudure non conforme.'],
    ],
  },
  theory: {
    title: 'Théorie — Soudures, défauts et boulons',
    content: `### 1. Résistance d'un cordon d'angle (EC3, méthode simplifiée)
$$F_{w,Rd} = f_{vw,d} \\, a \\qquad f_{vw,d} = \\frac{f_u}{\\sqrt{3} \\, \\beta_w \\, \\gamma_{M2}}$$
$a$ : épaisseur de gorge ; $\\beta_w$ : 0,8 (S235), 0,85 (S275), 0,9 (S355).

### 2. Énergie de soudage
$$Q = k \\, \\frac{U \\, I}{v}$$
Elle influence la dureté, la ténacité et le risque de fissuration ($k$ ≈ 0,8 pour le MAG, 1,0 pour l'arc submergé).

### 3. Défauts de soudure courants
Fissures, manque de fusion, manque de pénétration, inclusions, soufflures (porosités), caniveaux, surépaisseur excessive. Les fissures sont toujours refusées.

### 4. Étendue des contrôles (NF EN 1090-2, exemples EXC2)
| Type de soudure | CND complémentaire |
|---|---|
| Bout à bout transversales en traction | 10 % |
| Angle d'épaisseur > 12 mm | 5 % |
| Autres soudures d'angle | 0 % (VT seulement) |

### 5. Boulons précontraints
Précontrainte de calcul :
$$F_{p,C} = 0{,}7 f_{ub} A_s$$
Obtenue par la méthode du couple, du tour d'écrou ou combinée ; vérifiée par sondage.`,
  },
  formulas: {
    title: 'Formules essentielles — Soudures et boulons',
    formulas: [
      {
        name: 'Résistance d’un cordon d’angle',
        latex: "F_{w,Rd} = \\frac{f_u}{\\sqrt{3} \\, \\beta_w \\, \\gamma_{M2}} \\, a",
        description: 'Effort par unité de longueur (méthode simplifiée de l’EC3-1-8).',
        vars: [
          ['F_{w,Rd}', 'Résistance par unité de longueur', 'N/mm', ''],
          ['f_u', 'Résistance à la traction de la pièce la plus faible', 'MPa', '490 pour S355 (t ≤ 40 mm).'],
          ['\\beta_w', 'Coefficient de corrélation', '-', '0,9 pour S355.'],
          ['\\gamma_{M2}', 'Coefficient partiel', '-', '1,25.'],
          ['a', 'Épaisseur de gorge', 'mm', '≥ 3 mm.'],
        ],
      },
      {
        name: 'Énergie de soudage',
        latex: "Q = k \\, \\frac{U \\, I \\times 60}{v \\times 1\\,000}",
        description: 'Énergie linéique en kJ/mm.',
        vars: [
          ['U', 'Tension', 'V', ''],
          ['I', 'Intensité', 'A', ''],
          ['v', 'Vitesse de soudage', 'mm/min', ''],
          ['k', 'Rendement thermique', '-', '0,8 MAG ; 1,0 arc submergé.'],
        ],
      },
      {
        name: 'Précontrainte d’un boulon',
        latex: "F_{p,C} = 0{,}7 \\, f_{ub} \\, A_s",
        description: 'Effort de serrage requis pour les assemblages précontraints.',
        vars: [
          ['f_{ub}', 'Résistance du boulon', 'MPa', '1 000 pour la classe 10.9.'],
          ['A_s', 'Section résistante', 'mm²', 'M20 : 245 mm² ; M24 : 353 mm².'],
        ],
      },
      {
        name: 'Couple de serrage',
        latex: "M = k_m \\, d \\, F_{p,C}",
        description: 'Couple à appliquer selon le coefficient du lot de boulons.',
        vars: [
          ['M', 'Couple', 'N·m', ''],
          ['k_m', 'Coefficient de couple', '-', 'Donné par le fabricant (≈ 0,10 à 0,16).'],
          ['d', 'Diamètre nominal', 'm', ''],
        ],
      },
    ],
  },
  stepbystep: {
    title: 'Calcul complet — Cordons d’angle d’une attache',
    problem: "Une attache en S355 doit transmettre 400 kN par deux cordons d'angle parallèles à l'effort, d'épaisseur de gorge a = 5 mm. Calculer la longueur nécessaire de chaque cordon, puis l'énergie de soudage pour U = 28 V, I = 250 A, v = 300 mm/min (MAG).",
    steps_demo: [
      { n: 1, text: "f_vw,d = 490 / (1,732 × 0,9 × 1,25) = 490 / 1,949 = 251,4 MPa." },
      { n: 2, text: "Résistance par mm de cordon : 251,4 × 5 = 1 257 N/mm." },
      { n: 3, text: "Longueur totale : 400 000 / 1 257 = 318 mm, soit 159 mm par cordon." },
      { n: 4, text: "On ajoute 2a pour les extrémités : 159 + 10 = 169 mm, arrondi à 170 mm par cordon." },
      { n: 5, text: "Énergie : Q = 0,8 × 28 × 250 × 60 / (300 × 1 000) = 1,12 kJ/mm, à comparer au DMOS qualifié." },
    ],
    result_latex: "F_{w,Rd} = \\frac{490}{\\sqrt{3} \\times 0{,}9 \\times 1{,}25} \\times 5 = 1\\,257\\ \\text{N/mm} \\qquad L = \\frac{400\\,000}{2 \\times 1\\,257} + 2a \\approx 170\\ \\text{mm}",
  },
  units: {
    table: [
      ['Épaisseur de gorge', 'mm', 'in', 'a ≈ 0,7 × côté du cordon'],
      ['Énergie de soudage', 'kJ/mm', 'kJ/in', '1 kJ/mm = 25,4 kJ/in'],
      ['Couple', 'N·m', 'lbf·ft', '1 lbf·ft = 1,356 N·m'],
      ['Précontrainte', 'kN', 'kip', '1 kip = 4,448 kN'],
      ['Résilience', 'J', 'ft·lbf', 'Essai Charpy'],
    ],
    note: 'Sur les plans, le symbole de soudure indique en général l’épaisseur de gorge a, précédée de la lettre a.',
  },
  hypotheses: {
    items: [
      ['info', 'La méthode simplifiée de l’EC3 est valable quelle que soit l’orientation du cordon, de façon conservative.'],
      ['info', 'Les pourcentages de CND dépendent de la classe d’exécution, du type de soudure et de la sollicitation.'],
      ['warning', 'Un défaut détecté dans un sondage impose d’étendre le contrôle aux soudures voisines selon la NF EN 1090-2.'],
      ['warning', 'Les boulons précontraints ne doivent pas être réutilisés après serrage complet.'],
      ['tip', 'Exigez le plan de contrôle (ITP) avant le démarrage de la fabrication.'],
    ],
  },
  simple_examples: {
    examples: [
      {
        title: 'Exemple 1 : précontrainte d’un M20 10.9',
        given: 'f_ub = 1 000 MPa ; A_s = 245 mm²',
        find: 'F_p,C',
        solution_latex: "F_{p,C} = 0{,}7 \\times 1\\,000 \\times 245 = 171\\,500\\ \\text{N}",
        result: '171,5 kN.',
      },
      {
        title: 'Exemple 2 : couple de serrage',
        given: 'k_m = 0,13 ; d = 0,020 m ; F_p,C = 171,5 kN',
        find: 'M',
        solution_latex: "M = 0{,}13 \\times 0{,}020 \\times 171\\,500 = 446\\ \\text{N·m}",
        result: 'Environ 446 N·m.',
      },
      {
        title: 'Exemple 3 : nombre de contrôles',
        given: '60 soudures bout à bout transversales tendues, EXC2 (10 %)',
        find: 'Nombre à contrôler par UT',
        solution_latex: "0{,}10 \\times 60 = 6",
        result: '6 soudures contrôlées, choisies de façon représentative (soudeurs, positions).',
      },
    ],
  },
  real_examples: {
    title: 'Exemple réel — Rupture du pont de Hasselt (Belgique, 1938)',
    examples: [
      {
        context: 'Pont soudé de type Vierendeel sur le canal Albert',
        scenario: "Par une nuit froide, le pont s'est rompu brutalement, peu après sa mise en service. Les enquêtes ont mis en cause des ruptures fragiles amorcées dans des soudures d'acier peu adapté au soudage, avec des concentrations de contraintes et des contraintes résiduelles importantes.",
        decomposition_latex: "\\text{Acier peu soudable} + \\text{soudures défectueuses} + \\text{froid} \\Rightarrow \\text{rupture fragile}",
        lesson: "Ce type d'accident est à l'origine des exigences actuelles : aciers soudables et tenaces, modes opératoires qualifiés, contrôles non destructifs.",
      },
    ],
  },
  diagrams: {
    title: 'Schéma de principe — Plan de contrôle d’une charpente',
    diagram_description: [
      'Réception matière : certificats 3.1, marquage, dimensions',
      'Préparation : chanfreins, accostage, préchauffage si nécessaire',
      'Soudage selon DMOS qualifié par soudeurs qualifiés',
      'Contrôle visuel 100 % et CND selon la classe d’exécution',
      'Traitement de surface et contrôle des épaisseurs de peinture',
      'Montage : serrage des boulons, contrôles et dossier qualité',
    ],
  },
  mistakes: {
    items: [
      ['Confondre côté et gorge du cordon', 'Résistance surestimée de 40 %', 'a = 0,7 × côté pour un cordon à 45°.'],
      ['Souder sans préchauffage sur forte épaisseur', 'Fissuration à froid', 'Appliquer le DMOS et la NF EN 1011-2.'],
      ['Serrer sans étalonner la clé', 'Précontrainte incertaine', 'Étalonnage et contrôle par sondage.'],
    ],
  },
  tips: {
    tips: [
      'Vérifiez les qualifications des soudeurs (ISO 9606-1) avant le démarrage.',
      'Réalisez les CND après le délai d’attente prescrit pour la fissuration différée.',
      'Tenez un registre des soudures (repère, soudeur, date, contrôles).',
      'Marquez les boulons serrés et contrôlés pour la traçabilité.',
    ],
  },
  norms: {
    norms: [
      ['NF EN 1090-1 et -2', 'Exécution des structures en acier et marquage CE.'],
      ['NF EN 1993-1-8', 'Calcul des assemblages.'],
      ['NF EN ISO 5817', 'Niveaux de qualité des soudures (B, C, D).'],
      ['NF EN ISO 17635 / 17640', 'Contrôles non destructifs des soudures, ultrasons.'],
      ['NF EN 14399', 'Boulons à serrage contrôlé.'],
    ],
  },
  exercises: {
    exercises: [
      {
        level: 1,
        text: 'Un cordon a un côté de 8 mm. Quelle est son épaisseur de gorge ?',
        hint: 'a ≈ 0,7 × côté.',
        answer_latex: "a = 0{,}707 \\times 8 = 5{,}7\\ \\text{mm}",
        answer_text: 'Environ 5,6 à 5,7 mm (on retient a = 5,5 mm).',
      },
      {
        level: 2,
        text: 'Calculer F_p,C pour un boulon M24 10.9 (A_s = 353 mm²).',
        hint: '0,7 f_ub A_s.',
        answer_latex: "0{,}7 \\times 1\\,000 \\times 353 = 247\\ \\text{kN}",
        answer_text: '247 kN.',
      },
      {
        level: 3,
        text: 'Deux cordons de 120 mm (longueur efficace) en S275 (f_u = 430 MPa, β_w = 0,85) avec a = 4 mm. Quelle force peuvent-ils transmettre ?',
        hint: 'f_vw,d = f_u / (√3 β_w γ_M2).',
        answer_latex: "f_{vw,d} = \\frac{430}{1{,}732 \\times 0{,}85 \\times 1{,}25} = 233{,}7 \\Rightarrow F = 233{,}7 \\times 4 \\times 240 = 224\\ \\text{kN}",
        answer_text: 'Environ 224 kN.',
      },
    ],
  },
  quiz: {
    title: 'Quiz — Contrôle des soudures',
    questions: [
      { q: 'Quel contrôle est obligatoire sur toutes les soudures ?', options: ['Radiographie', 'Contrôle visuel', 'Ultrasons'], correct: 1, explain: 'Le VT est réalisé à 100 %.' },
      { q: 'Quel CND détecte les défauts internes d’une soudure épaisse ?', options: ['Ressuage', 'Ultrasons', 'Visuel'], correct: 1, explain: 'Les ultrasons (ou la radiographie).' },
      { q: 'Quelle classe d’exécution est la plus courante pour un bâtiment ?', options: ['EXC1', 'EXC2', 'EXC4'], correct: 1, explain: 'EXC2 est la classe par défaut de nombreux bâtiments.' },
    ],
  },
  exam_questions: {
    questions: [
      'Présentez les classes d’exécution et leur influence sur les contrôles.',
      'Décrivez les principaux défauts de soudure et les CND adaptés.',
      'Expliquez le dimensionnement d’un cordon d’angle selon l’EC3.',
    ],
  },
  interview_questions: {
    questions: [
      ['Un contrôle UT révèle un manque de fusion : que faites-vous ?', 'Je fais délimiter le défaut, gouger et ressouder selon le DMOS, recontrôler, puis étendre les contrôles aux soudures du même soudeur ou de la même série selon la NF EN 1090-2.'],
      ['Quels documents demandez-vous à un charpentier avant fabrication ?', 'Certificat de contrôle de production (EN 1090-1), DMOS/QMOS, qualifications des soudeurs, plan d’inspection et d’essais, certificats matière et fiches de peinture.'],
    ],
  },
  practical_case: {
    title: 'Cas pratique — Plan de contrôle d’un portique',
    scenario: 'Charpente EXC2 : 40 soudures bout à bout transversales tendues, 120 cordons d’angle dont 30 de gorge > 12 mm, 400 boulons HR M20 précontraints.',
    description: 'Établir le nombre de contrôles complémentaires.',
    resolutions: [
      "\\text{Bout à bout} : 10\\ \\% \\times 40 = 4 \\text{ soudures (UT)}",
      "\\text{Angle} > 12\\ \\text{mm} : 5\\ \\% \\times 30 = 1{,}5 \\Rightarrow 2 \\text{ soudures (MT ou UT)}",
      "\\text{Boulons} : \\text{contrôle du serrage par sondage selon NF EN 1090-2 (par exemple 5 \\% des boulons de chaque assemblage)}",
    ],
    conclusion: 'Le plan prévoit VT à 100 %, 6 CND complémentaires et un contrôle de serrage par sondage, étendu en cas de non-conformité.',
  },
  summary: {
    content: `### Le contrôle des soudures en 5 points
1. Classes d'exécution EXC1 à EXC4 (NF EN 1090-2).
2. VT à 100 %, CND (MT, PT, UT, RT) par sondage.
3. Niveaux de qualité ISO 5817 : B, C, D.
4. Cordon d'angle : $F_{w,Rd} = f_u a / (\\sqrt{3} \\beta_w \\gamma_{M2})$.
5. Boulons précontraints : $F_{p,C} = 0{,}7 f_{ub} A_s$.`,
  },
  key_points: {
    points: [
      'EXC2 courant en bâtiment',
      'VT 100 %',
      'a ≈ 0,7 × côté',
      'F_p,C = 0,7 f_ub A_s',
      'Fissures toujours refusées',
    ],
  },
  self_assessment: {
    objectives: [
      'Je connais les classes d’exécution',
      'Je sais choisir un CND adapté',
      'Je sais calculer un cordon d’angle',
      'Je sais calculer la précontrainte d’un boulon',
      "J'ai réussi le quiz avec au moins 2 bonnes réponses sur 3",
    ],
  },
});
