// ── Lesson: Assainissement non collectif — Module 38 ─────────────────────────
import { buildLesson } from './build_lesson.js';

export const lesson_eau_anc = buildLesson({
  moduleId: 38,
  slug: 'eau_anc',
  lessonIndex: 3,
  title: "Assainissement Non Collectif : Fosse Toutes Eaux, Essai de Perméabilité, Épandage et Filières Agréées",
  subtitle: 'Module 38 — Traitement des Eaux',
  level: 'Débutant',
  duration: '4h',
  tags: ['ANC', 'Fosse toutes eaux', 'Épandage', 'Porchet', 'SPANC', 'Microstation', 'DTU 64.1'],
}, {
  definition: {
    title: 'Définition — Traiter les eaux usées sur la parcelle',
    fr: 'Assainissement non collectif (ANC)',
    en: 'On-site wastewater treatment (septic systems)',
    metier: "Concerne les bureaux d'études de sol, les installateurs, les SPANC, les architectes de maisons individuelles et les particuliers.",
    content: `L'**assainissement non collectif** (ou autonome) traite les eaux usées des habitations **non raccordées** à un réseau public. En France, environ 5 millions de logements sont concernés.

### La filière classique
1. **Prétraitement** : la **fosse toutes eaux** reçoit eaux vannes (WC) et eaux ménagères ; elle retient les solides et les graisses et liquéfie une partie de la matière organique.
2. **Traitement** : le **sol en place** (tranchées d'épandage) ou un **sol reconstitué** (filtre à sable) épure l'effluent.
3. **Évacuation** : infiltration dans le sol ou, à défaut, rejet vers un milieu superficiel autorisé.

### Les filières agréées
Microstations, filtres compacts, filtres plantés : agréées par les ministères, avec des performances et un entretien définis.

### Le contrôle
Le **SPANC** (service public d'assainissement non collectif) contrôle la conception, l'exécution puis le bon fonctionnement des installations.

> 💡 En ANC, l'unité de dimensionnement est la **pièce principale** (PP) : en règle générale, 1 PP = 1 EH.`,
  },
  importance: {
    content: `- **Santé** : une installation défaillante contamine puits, sources et zones de baignade.
- **Immobilier** : un diagnostic ANC est obligatoire lors de la vente d'une maison.
- **Coût** : une installation coûte typiquement de 6 000 à 15 000 € ; une erreur de conception oblige à tout refaire.
- **Sol** : la perméabilité conditionne entièrement le choix de la filière.

> ⚠️ **À retenir** : l'étude de sol à la parcelle (sondages, essai de perméabilité) est la base de tout projet d'ANC.`,
  },
  applications: {
    examples: [
      ['Maison neuve en zone rurale', 'Fosse toutes eaux + tranchées d’épandage.'],
      ['Sol imperméable', 'Filtre à sable vertical drainé avec rejet autorisé.'],
      ['Petit terrain', 'Microstation agréée, compacte.'],
      ['Gîte de 15 personnes', 'Installation de 15 EH, filière dimensionnée en conséquence.'],
      ['Réhabilitation', 'Remplacement d’un puisard non conforme.'],
    ],
  },
  theory: {
    title: 'Théorie — Dimensionner une installation',
    content: `### 1. Volume de la fosse toutes eaux
Règle usuelle (DTU 64.1, réglementation française) : **3 m³ jusqu'à 5 pièces principales**, plus **1 m³ par pièce supplémentaire**.

### 2. Perméabilité du sol (essai Porchet à niveau variable)
$$K = \\frac{r/2}{t_2 - t_1} \\ln\\left( \\frac{h_1 + r/2}{h_2 + r/2} \\right)$$
$r$ : rayon du trou ; $h_1$, $h_2$ : hauteurs d'eau aux temps $t_1$ et $t_2$.
| K (mm/h) | Aptitude |
|---|---|
| < 15 | Sol trop peu perméable : sol reconstitué drainé |
| 15 à 500 | Épandage en sol naturel possible |
| > 500 | Sol trop perméable : filtre à sable non drainé |

### 3. Surface d'infiltration
$$S = \\frac{Q}{q_h}$$
$Q$ : débit journalier ; $q_h$ : charge hydraulique admissible (L/m²/j), d'autant plus faible que le sol est peu perméable. Les longueurs de tranchées sont ensuite fixées par le DTU 64.1.

### 4. Temps de séjour et vidange
$$t_s = \\frac{V_{fosse}}{Q} \\qquad t_{vidange} \\approx \\frac{0{,}5 \\, V_{fosse}}{N_{EH} \\, a}$$
La vidange est nécessaire quand les boues atteignent environ 50 % du volume ; $a$ : accumulation de boues par EH et par an.`,
  },
  formulas: {
    title: 'Formules essentielles — ANC',
    formulas: [
      {
        name: 'Essai Porchet (niveau variable)',
        latex: "K = \\frac{r/2}{t_2 - t_1} \\ln\\left(\\frac{h_1 + r/2}{h_2 + r/2}\\right)",
        description: 'Perméabilité du sol à partir de la baisse du niveau d’eau dans un trou.',
        vars: [
          ['K', 'Perméabilité', 'm/s', 'Exprimée aussi en mm/h.'],
          ['r', 'Rayon du trou', 'm', ''],
          ['h_1, h_2', 'Hauteurs d’eau', 'm', 'Aux temps t₁ et t₂.'],
          ['t_2 - t_1', 'Durée de mesure', 's', ''],
        ],
      },
      {
        name: 'Volume de fosse',
        latex: "V = 3 + \\max(0 ; N_{PP} - 5) \\times 1\\ \\text{m}^3",
        description: 'Règle de dimensionnement de la fosse toutes eaux.',
        vars: [
          ['V', 'Volume utile', 'm³', ''],
          ['N_{PP}', 'Nombre de pièces principales', '-', 'Chambres et séjour.'],
        ],
      },
      {
        name: 'Surface d’infiltration',
        latex: "S = \\frac{Q}{q_h}",
        description: 'Surface de fond de tranchées.',
        vars: [
          ['Q', 'Débit journalier', 'L/j', '≈ 150 L/EH/j.'],
          ['q_h', 'Charge hydraulique admissible', 'L/m²/j', 'Ordre de grandeur : 15 à 50 selon le sol.'],
        ],
      },
      {
        name: 'Fréquence de vidange',
        latex: "t = \\frac{0{,}5 \\, V}{N_{EH} \\, a}",
        description: 'Durée avant que les boues occupent la moitié de la fosse.',
        vars: [
          ['a', 'Accumulation de boues', 'm³/EH/an', '≈ 0,07 (ordre de grandeur).'],
        ],
      },
    ],
  },
  stepbystep: {
    title: 'Calcul complet — Maison de 5 pièces principales',
    problem: "Une maison de 5 PP est construite sur un sol limoneux. Un essai Porchet (trou de 150 mm de diamètre) donne une baisse de 0,30 m à 0,20 m en 30 minutes. Dimensionner la fosse, vérifier l'aptitude du sol et estimer la surface d'infiltration (q_h = 20 L/m²/j).",
    steps_demo: [
      { n: 1, text: "Fosse : 5 PP → 3 m³." },
      { n: 2, text: "Porchet : r/2 = 0,0375 m ; K = 0,0375 / 1 800 × ln(0,3375 / 0,2375) = 2,08 × 10⁻⁵ × 0,351 = 7,3 × 10⁻⁶ m/s." },
      { n: 3, text: "Conversion : 7,3 × 10⁻⁶ × 3,6 × 10⁶ = 26 mm/h : sol apte à l'épandage (15 à 500 mm/h)." },
      { n: 4, text: "Débit : 5 EH × 150 L = 750 L/j ; S = 750 / 20 = 37,5 m² de fond de tranchées, soit 75 m de tranchées de 0,50 m (à confronter aux longueurs minimales du DTU 64.1)." },
      { n: 5, text: "Temps de séjour : 3 000 / 750 = 4 jours ; vidange estimée tous les 0,5 × 3 / (5 × 0,07) ≈ 4 ans." },
    ],
    result_latex: "K = \\frac{0{,}0375}{1\\,800} \\ln\\frac{0{,}3375}{0{,}2375} = 7{,}3 \\times 10^{-6}\\ \\text{m/s} = 26\\ \\text{mm/h} \\qquad S = \\frac{750}{20} = 37{,}5\\ \\text{m}^2",
  },
  units: {
    table: [
      ['Perméabilité', 'mm/h', 'in/h', '10 mm/h ≈ 0,39 in/h ; 1 mm/h = 2,78 × 10⁻⁷ m/s'],
      ['Volume de fosse', 'm³', 'gal', '3 m³ ≈ 790 gal (US)'],
      ['Débit', 'L/j', 'gpd', '1 gpd = 3,785 L/j'],
      ['Charge hydraulique', 'L/m²/j', 'gpd/ft²', '1 gpd/ft² ≈ 40,7 L/m²/j'],
      ['Capacité', 'PP ou EH', 'bedrooms', 'Aux États-Unis : dimensionnement par chambre'],
    ],
    note: 'Les valeurs de charge hydraulique sont des ordres de grandeur ; seules les règles du DTU 64.1 et de l’agrément font foi.',
  },
  hypotheses: {
    items: [
      ['info', 'La règle 1 PP = 1 EH peut être adaptée (gîtes, locations saisonnières) selon l’occupation réelle.'],
      ['info', 'L’essai Porchet doit être réalisé à la profondeur des tranchées, après saturation du sol.'],
      ['warning', 'Une nappe à faible profondeur (< 1 m sous le fond de fouille) interdit l’épandage en sol naturel.'],
      ['warning', 'Les distances aux puits, limites de propriété et arbres doivent être respectées (35 m d’un captage d’eau potable en France).'],
      ['tip', 'Ne jamais faire circuler de véhicules sur les tranchées ou filtres.'],
    ],
  },
  simple_examples: {
    examples: [
      {
        title: 'Exemple 1 : volume de fosse',
        given: 'Maison de 7 PP',
        find: 'Volume',
        solution_latex: "V = 3 + (7 - 5) \\times 1 = 5\\ \\text{m}^3",
        result: '5 m³.',
      },
      {
        title: 'Exemple 2 : conversion de perméabilité',
        given: 'K = 2 × 10⁻⁵ m/s',
        find: 'En mm/h',
        solution_latex: "2 \\times 10^{-5} \\times 3{,}6 \\times 10^{6} = 72\\ \\text{mm/h}",
        result: '72 mm/h : bonne aptitude à l’infiltration.',
      },
      {
        title: 'Exemple 3 : surface d’infiltration',
        given: '4 EH ; 150 L/EH/j ; q_h = 30 L/m²/j',
        find: 'S',
        solution_latex: "S = \\frac{600}{30} = 20\\ \\text{m}^2",
        result: '20 m², soit 40 m de tranchées de 0,50 m.',
      },
    ],
  },
  real_examples: {
    title: 'Exemple réel — Contamination d’un puits par un épandage trop proche',
    examples: [
      {
        context: 'Hameau rural alimenté par des puits privés',
        scenario: "Des analyses ont révélé des bactéries fécales dans un puits. L'enquête a montré qu'une ancienne installation, avec un puisard creusé dans un sol fissuré à 15 m du puits, rejetait directement dans la nappe. L'installation a été remplacée par une filière agréée avec rejet éloigné, et le puits désinfecté.",
        decomposition_latex: "\\text{Puisard} + \\text{sol fissuré} + \\text{distance} < 35\\ \\text{m} \\Rightarrow \\text{contamination de la nappe}",
        lesson: "Les distances réglementaires et l'étude de sol protègent la ressource en eau ; les anciens puisards doivent être supprimés.",
      },
    ],
  },
  diagrams: {
    title: 'Schéma de principe — Filière d’assainissement non collectif',
    diagram_description: [
      'Collecte des eaux usées de la maison (eaux vannes et ménagères)',
      'Fosse toutes eaux avec ventilation haute',
      'Regard de répartition',
      'Tranchées d’épandage ou filtre à sable',
      'Infiltration dans le sol ou rejet autorisé',
      'Contrôles SPANC et vidanges périodiques',
    ],
  },
  mistakes: {
    items: [
      ['Oublier la ventilation de la fosse', 'Odeurs et corrosion', 'Ventilation haute au-dessus du toit.'],
      ['Implanter sous une allée carrossable', 'Écrasement des drains', 'Zone réservée sans circulation ni plantations.'],
      ['Négliger les vidanges', 'Colmatage de l’épandage', 'Vidanger quand les boues atteignent 50 % du volume.'],
    ],
  },
  tips: {
    tips: [
      'Faites réaliser l’étude de sol avant le permis de construire.',
      'Préférez l’épandage gravitaire si le terrain le permet.',
      'Choisissez une microstation selon son coût global (électricité, entretien), pas seulement son prix.',
      'Conservez le plan de récolement de l’installation.',
    ],
  },
  norms: {
    norms: [
      ['Arrêté du 7 septembre 2009 modifié (France)', 'Prescriptions techniques des installations d’ANC jusqu’à 20 EH.'],
      ['NF DTU 64.1', 'Mise en œuvre des dispositifs d’ANC.'],
      ['NF EN 12566', 'Petites installations de traitement des eaux usées jusqu’à 50 PTE.'],
      ['Code de la santé publique, L. 1331-1-1', 'Obligations des propriétaires et contrôles.'],
    ],
  },
  exercises: {
    exercises: [
      {
        level: 1,
        text: 'Quel volume de fosse pour une maison de 4 PP ?',
        hint: '3 m³ jusqu’à 5 PP.',
        answer_latex: "V = 3\\ \\text{m}^3",
        answer_text: '3 m³.',
      },
      {
        level: 2,
        text: 'Convertir K = 4 mm/h en m/s et conclure sur l’aptitude du sol.',
        hint: '1 mm/h = 2,78 × 10⁻⁷ m/s.',
        answer_latex: "4 \\times 2{,}78 \\times 10^{-7} = 1{,}1 \\times 10^{-6}\\ \\text{m/s}",
        answer_text: '< 15 mm/h : épandage impossible, filtre à sable vertical drainé ou filière agréée avec rejet.',
      },
      {
        level: 3,
        text: 'Un gîte de 12 EH (150 L/EH/j) dispose d’un sol à q_h = 25 L/m²/j. Calculer la surface d’infiltration et la fréquence de vidange d’une fosse de 10 m³ (a = 0,07).',
        hint: 'S = Q / q_h ; t = 0,5 V / (N a).',
        answer_latex: "S = \\frac{1\\,800}{25} = 72\\ \\text{m}^2 \\qquad t = \\frac{0{,}5 \\times 10}{12 \\times 0{,}07} = 6\\ \\text{ans}",
        answer_text: '72 m² de surface d’infiltration ; vidange environ tous les 6 ans (contrôler la hauteur de boues).',
      },
    ],
  },
  quiz: {
    title: 'Quiz — Assainissement non collectif',
    questions: [
      { q: 'Quel est le rôle de la fosse toutes eaux ?', options: ['Infiltrer l’eau', 'Prétraiter en retenant les solides et graisses', 'Désinfecter'], correct: 1, explain: 'Elle prépare l’effluent au traitement par le sol.' },
      { q: 'Quel service contrôle les installations ?', options: ['La DDT', 'Le SPANC', 'Le cadastre'], correct: 1, explain: 'Service public d’assainissement non collectif.' },
      { q: 'Avec K = 8 mm/h, l’épandage en sol naturel est…', options: ['Possible', 'Impossible', 'Obligatoire'], correct: 1, explain: 'Il faut au moins 15 mm/h.' },
    ],
  },
  exam_questions: {
    questions: [
      'Décrivez la filière classique d’assainissement non collectif.',
      'Expliquez l’essai Porchet et l’interprétation de ses résultats.',
      'Quand choisir une filière agréée plutôt qu’un épandage ?',
    ],
  },
  interview_questions: {
    questions: [
      ['Comment conseillez-vous un particulier en terrain argileux ?', 'Étude de sol, puis, si K < 15 mm/h, filtre à sable vertical drainé ou filière agréée avec exutoire autorisé ; je compare les coûts d’investissement et d’entretien.'],
      ['Que vérifie le SPANC lors d’un contrôle ?', 'La conformité de conception et d’exécution, l’accessibilité, la ventilation, l’entretien (vidanges), l’absence de rejet direct et l’impact sanitaire et environnemental.'],
    ],
  },
  practical_case: {
    title: 'Cas pratique — Réhabilitation d’une installation',
    scenario: 'Maison de 6 PP avec un ancien puisard. Sondage : sol limoneux de 1,2 m sur roche fissurée ; K mesuré 40 mm/h ; puits voisin à 25 m.',
    description: 'Choisir la filière et vérifier les contraintes.',
    resolutions: [
      "\\text{Fosse} : V = 3 + 1 = 4\\ \\text{m}^3",
      "\\text{Roche fissurée à 1,2 m} \\Rightarrow \\text{épaisseur de sol insuffisante pour un épandage protecteur}",
      "\\text{Filtre à sable vertical non drainé ou filière agréée, implantée à plus de 35 m du puits}",
    ],
    conclusion: 'Malgré une perméabilité correcte, la faible épaisseur de sol et la proximité du puits imposent une filière avec sol reconstitué, implantée loin du puits.',
  },
  summary: {
    content: `### L'ANC en 5 points
1. Prétraitement (fosse toutes eaux) puis traitement par le sol.
2. Fosse : 3 m³ jusqu'à 5 PP, + 1 m³ par PP supplémentaire.
3. Essai Porchet : aptitude entre 15 et 500 mm/h.
4. Surface d'infiltration $S = Q / q_h$ et règles du DTU 64.1.
5. Contrôle par le SPANC, vidanges régulières.`,
  },
  key_points: {
    points: [
      '1 PP = 1 EH',
      'Fosse : 3 m³ jusqu’à 5 PP',
      'Épandage si 15 ≤ K ≤ 500 mm/h',
      'S = Q / q_h',
      'Vidange à 50 % de boues',
    ],
  },
  self_assessment: {
    objectives: [
      'Je connais la filière classique d’ANC',
      'Je sais interpréter un essai Porchet',
      'Je sais dimensionner une fosse toutes eaux',
      'Je sais choisir une filière selon le sol',
      "J'ai réussi le quiz avec au moins 2 bonnes réponses sur 3",
    ],
  },
});
