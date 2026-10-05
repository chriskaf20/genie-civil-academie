// ── Lesson: Houle, marées et protection du littoral — Module 20 ───────────────
import { buildLesson } from './build_lesson.js';

export const lesson_ports_houle = buildLesson({
  moduleId: 20,
  slug: 'ports_houle',
  lessonIndex: 3,
  title: "Houle, Marées & Protection du Littoral : Propagation, Déferlement et Ouvrages Côtiers",
  subtitle: 'Module 20 — Ingénierie Maritime & Portuaire',
  level: 'Avancé',
  duration: '10h',
  tags: ['Houle', 'Marée', 'Déferlement', 'Énergie de la houle', 'Épis', 'Rechargement de plage', 'Érosion côtière'],
}, {
  definition: {
    title: 'Définition — Comprendre la mer pour construire au bord',
    fr: 'Hydrodynamique côtière : houle, marée, protection du littoral',
    en: 'Coastal hydrodynamics and shoreline protection',
    metier: "Utilisée par les ingénieurs côtiers et portuaires, les collectivités littorales, les services de l'État (risques de submersion) et les bureaux d'études environnementales.",
    content: `Sur le littoral, deux phénomènes dominent :
- la **houle** : ondes générées par le vent au large, caractérisées par leur **hauteur** $H$, leur **période** $T$ et leur **direction** ;
- la **marée** : variation périodique du niveau de la mer sous l'effet de la Lune et du Soleil, caractérisée par le **marnage** (écart entre pleine et basse mer).

### De la houle à la côte
En approchant de la côte, la houle « sent » le fond : elle ralentit, se réfracte (s'oriente parallèlement aux lignes de fond), son hauteur augmente (shoaling), puis elle **déferle**. Le déferlement libère l'énergie qui transporte les sédiments le long de la côte (dérive littorale) et vers le large.

### Protéger le littoral
- **Ouvrages durs** : digues, perrés, épis, brise-lames.
- **Solutions souples** : rechargement de plage, dunes restaurées, solutions fondées sur la nature.
- **Repli stratégique** : déplacer les enjeux face à l'érosion et à la montée du niveau de la mer.

> 💡 Un ouvrage qui bloque la dérive littorale engraisse la plage d'un côté… et fait reculer celle de l'autre côté.`,
  },
  importance: {
    content: `- **Risques** : érosion côtière et submersion marine menacent habitations et infrastructures (tempête Xynthia, 2010).
- **Ports** : la houle conditionne l'agitation des bassins et le dimensionnement des digues.
- **Changement climatique** : la montée du niveau marin aggrave les submersions et l'érosion.
- **Environnement** : les ouvrages modifient durablement le transit sédimentaire.

> ⚠️ **À retenir** : la cote de submersion combine marée haute, surcote de tempête, effet des vagues et élévation future du niveau marin.`,
  },
  applications: {
    examples: [
      ['Station balnéaire', 'Rechargement périodique de plage et gestion des épis.'],
      ['Port', 'Étude d’agitation dans les bassins et calage de la digue.'],
      ['Commune exposée', 'Plan de prévention des risques littoraux et cote de référence de submersion.'],
      ['Route côtière', 'Perré en enrochements protégeant un tronçon érodé.'],
      ['Marais littoral', 'Dépoldérisation et restauration de zones humides tampons.'],
    ],
  },
  theory: {
    title: 'Théorie — Houle, déferlement et marée',
    content: `### 1. Houle en grande profondeur
$$L_0 = \\frac{g T^2}{2\\pi} \\approx 1{,}56\\,T^2 \\qquad c_0 = \\frac{L_0}{T} = \\frac{g T}{2\\pi}$$
(eau « profonde » si la profondeur dépasse environ $L/2$).

### 2. Houle en faible profondeur
Quand la profondeur $d$ est petite devant la longueur d'onde, la célérité ne dépend plus que de $d$ : $c = \\sqrt{g d}$.

### 3. Énergie de la houle
$$E = \\frac{1}{8} \\rho g H^2$$
par m² de surface ; doubler la hauteur quadruple l'énergie.

### 4. Déferlement
La houle déferle lorsque $H_b \\approx 0{,}78\\,d_b$ (critère de McCowan) : la hauteur des vagues au pied d'un ouvrage en faible profondeur est limitée par la profondeur.

### 5. Marée : règle des douzièmes
Sur les 6 heures d'une marée montante ou descendante, la mer varie environ de 1/12, 2/12, 3/12, 3/12, 2/12 et 1/12 du marnage à chaque heure. En France, le **coefficient de marée** (20 à 120) indique l'amplitude relative.`,
  },
  formulas: {
    title: 'Formules essentielles — Hydrodynamique côtière',
    formulas: [
      {
        name: 'Longueur d’onde et célérité au large',
        latex: "L_0 = \\frac{g T^2}{2\\pi} \\approx 1{,}56\\,T^2 \\qquad c_0 = \\frac{g T}{2\\pi}",
        description: 'Théorie linéaire, eau profonde.',
        vars: [
          ['L_0', "Longueur d'onde au large", 'm', 'T = 10 s → 156 m.'],
          ['c_0', 'Célérité', 'm/s', 'Vitesse de propagation de la crête.'],
          ['T', 'Période', 's', 'Houle océanique 8 à 16 s ; mer du vent 3 à 6 s.'],
        ],
      },
      {
        name: 'Célérité en faible profondeur',
        latex: "c = \\sqrt{g \\, d}",
        description: 'Valable si d < L/20 environ.',
        vars: [
          ['d', "Profondeur d'eau", 'm', 'Près de la côte.'],
        ],
      },
      {
        name: 'Énergie de la houle',
        latex: "E = \\frac{1}{8} \\rho \\, g \\, H^2",
        description: 'Énergie moyenne par m² de surface de mer.',
        vars: [
          ['E', 'Énergie', 'J/m²', 'Énergie potentielle + cinétique.'],
          ['\\rho', "Masse volumique de l'eau de mer", 'kg/m³', '1 025.'],
          ['H', 'Hauteur de la houle', 'm', 'Creux à crête.'],
        ],
        rule: "Une houle de 4 m transporte quatre fois plus d'énergie qu'une houle de 2 m.",
      },
      {
        name: 'Critère de déferlement',
        latex: "H_b = \\gamma_b \\, d_b \\qquad \\gamma_b \\approx 0{,}78",
        description: 'Hauteur maximale d’une vague à la profondeur d_b.',
        vars: [
          ['H_b', 'Hauteur au déferlement', 'm', 'Hauteur maximale possible.'],
          ['d_b', 'Profondeur au déferlement', 'm', 'Profondeur locale.'],
          ['\\gamma_b', 'Indice de déferlement', '-', '≈ 0,78 (McCowan).'],
        ],
      },
      {
        name: 'Règle des douzièmes',
        latex: "\\Delta z(n) = \\frac{M}{12} \\times (1, 3, 6, 9, 11, 12) \\ \\text{après } n = 1 \\text{ à } 6\\ \\text{h}",
        description: 'Variation cumulée du niveau depuis la basse (ou haute) mer.',
        vars: [
          ['M', 'Marnage', 'm', 'Écart entre pleine et basse mer du jour.'],
          ['\\Delta z(n)', 'Variation cumulée après n heures', 'm', 'Approximation.'],
        ],
      },
    ],
  },
  stepbystep: {
    title: 'Calcul complet — Houle sur une plage et hauteur au pied d’un perré',
    problem: "Une houle de période 10 s et de hauteur 3 m au large se propage vers une côte. Un perré est fondé par 2,5 m de profondeur à marée haute. Calculer la longueur d'onde au large, l'énergie au large, puis la hauteur de vague maximale au pied du perré.",
    steps_demo: [
      { n: 1, text: "Longueur d'onde au large : L₀ = 1,56 × 10² = 156 m ; célérité c₀ = 15,6 m/s." },
      { n: 2, text: "Énergie au large : E = 1/8 × 1 025 × 9,81 × 3² = 11 300 J/m²." },
      { n: 3, text: "Au pied du perré : hauteur limitée par le déferlement H_b = 0,78 × 2,5 = 1,95 m." },
      { n: 4, text: "La houle de 3 m a déjà déferlé plus au large (à environ 3 / 0,78 = 3,8 m de profondeur)." },
      { n: 5, text: "Conclusion : le perré se dimensionne pour une vague d'environ 2 m (plus la surcote de tempête qui augmente la profondeur)." },
    ],
    result_latex: "L_0 = 156\\ \\text{m} \\quad E_0 = \\frac{1\\,025 \\times 9{,}81 \\times 9}{8} = 11\\,300\\ \\text{J/m}^2 \\quad H_b = 0{,}78 \\times 2{,}5 = 1{,}95\\ \\text{m}",
  },
  units: {
    table: [
      ['Hauteur de houle', 'm', 'ft', 'H_s = hauteur significative (tiers supérieur)'],
      ['Période', 's', 's', 'Houle 8-16 s'],
      ['Énergie', 'J/m²', 'ft·lb/ft²', '1 kJ/m² = 68,5 ft·lb/ft²'],
      ['Marnage', 'm', 'ft', 'Baie du Mont-Saint-Michel ≈ 14 m en vives eaux'],
      ['Coefficient de marée', '20 à 120', '-', '100 = marée moyenne de vives eaux d’équinoxe'],
    ],
    note: 'La hauteur significative H_s est la grandeur de référence statistique ; les vagues isolées peuvent atteindre près de 2 H_s.',
  },
  hypotheses: {
    items: [
      ['info', 'La théorie linéaire suppose des vagues de faible cambrure ; près du déferlement, les théories non linéaires sont plus précises.'],
      ['info', 'L’indice de déferlement 0,78 vaut pour une houle régulière sur fond plat ; il varie avec la pente de plage.'],
      ['warning', 'La surcote de tempête (baisse de pression, vent) augmente la profondeur et donc la hauteur des vagues au pied des ouvrages.'],
      ['warning', 'Un ouvrage côtier modifie le transit sédimentaire : étudier l’impact sur les plages voisines.'],
      ['tip', 'Les modèles numériques de propagation (SWAN, etc.) transfèrent les houles du large vers la côte.'],
    ],
  },
  simple_examples: {
    examples: [
      {
        title: 'Exemple 1 : célérité près de la côte',
        given: 'd = 4 m',
        find: 'c',
        solution_latex: "c = \\sqrt{9{,}81 \\times 4} = 6{,}3\\ \\text{m/s}",
        result: 'La houle ralentit de 15,6 à 6,3 m/s en approchant de la côte.',
      },
      {
        title: 'Exemple 2 : règle des douzièmes',
        given: 'Marnage 6 m, basse mer à 8 h',
        find: 'Hauteur d’eau gagnée à 11 h',
        solution_latex: "\\Delta z(3) = \\frac{6}{12} \\times 6 = 3{,}0\\ \\text{m}",
        result: 'À mi-marée (3 h après la basse mer), la mer est montée de 3 m.',
      },
      {
        title: 'Exemple 3 : énergie d’une tempête',
        given: 'H = 6 m',
        find: 'E',
        solution_latex: "E = \\frac{1\\,025 \\times 9{,}81 \\times 36}{8} = 45\\,250\\ \\text{J/m}^2",
        result: '4 fois l’énergie d’une houle de 3 m.',
      },
    ],
  },
  real_examples: {
    title: 'Exemple réel — Tempête Xynthia (2010)',
    examples: [
      {
        context: 'Tempête sur la côte atlantique française, 47 morts',
        scenario: "La tempête est survenue à marée haute de fort coefficient, avec une surcote d'environ 1,5 m. Des digues anciennes ont été submergées et rompues ; des lotissements construits en zone basse ont été inondés en pleine nuit.",
        decomposition_latex: "\\text{Marée haute} + \\text{surcote} + \\text{vagues} \\Rightarrow \\text{niveau extrême} > \\text{crête des digues}",
        lesson: "Depuis : plans de prévention des risques littoraux, renforcement des digues, cote de référence intégrant la montée du niveau marin, et réduction de l'urbanisation dans les zones les plus exposées.",
      },
    ],
  },
  diagrams: {
    title: 'Schéma de principe — Du large à la plage',
    diagram_description: [
      'Génération de la houle par le vent au large (fetch, durée, vitesse)',
      'Propagation en eau profonde : L₀ = 1,56 T²',
      'Faible profondeur : ralentissement, réfraction, augmentation de hauteur',
      'Déferlement : H_b ≈ 0,78 d_b',
      'Zone de surf : dérive littorale et transport de sable',
      'Ouvrages et plages : épis, brise-lames, rechargement, dunes',
    ],
  },
  mistakes: {
    items: [
      ['Dimensionner un ouvrage côtier sur la houle du large', 'Ouvrage surdimensionné ou mal calé', 'Propager la houle jusqu’au site et appliquer le critère de déferlement.'],
      ['Oublier la surcote de tempête', 'Submersion sous-estimée', 'Combiner marée, surcote, vagues et montée du niveau marin.'],
      ['Construire un épi sans étude sédimentaire', 'Érosion accélérée de la plage voisine', 'Analyser la dérive littorale et prévoir un rechargement.'],
    ],
  },
  tips: {
    tips: [
      'Consultez les données de houle (bouées, réanalyses) et les annuaires de marée (SHOM en France).',
      'Les solutions souples (rechargement, dunes) s’adaptent mieux à la montée du niveau marin.',
      'Suivez l’évolution du trait de côte par levés réguliers ou imagerie.',
      'Intégrez la montée du niveau de la mer à l’horizon de vie de l’ouvrage (souvent 2100).',
    ],
  },
  norms: {
    norms: [
      ['Coastal Engineering Manual (USACE)', 'Référence internationale en ingénierie côtière.'],
      ['Guide « Plans de prévention des risques littoraux » (France)', 'Aléas de submersion et d’érosion.'],
      ['EurOtop', 'Franchissement des ouvrages côtiers par les vagues.'],
      ['Rock Manual (CIRIA, CUR, CETMEF)', 'Ouvrages en enrochements.'],
    ],
  },
  exercises: {
    exercises: [
      {
        level: 1,
        text: 'Calculer la longueur d’onde au large d’une houle de période 12 s.',
        hint: 'L₀ = 1,56 T².',
        answer_latex: "L_0 = 1{,}56 \\times 144 = 225\\ \\text{m}",
        answer_text: '≈ 225 m.',
      },
      {
        level: 2,
        text: 'À quelle profondeur une vague de 2,4 m déferle-t-elle ?',
        hint: 'd_b = H / 0,78.',
        answer_latex: "d_b = \\frac{2{,}4}{0{,}78} = 3{,}1\\ \\text{m}",
        answer_text: '≈ 3,1 m.',
      },
      {
        level: 3,
        text: 'Calculer la cote d’eau de référence d’un port : pleine mer 4,2 m, surcote 0,8 m, montée du niveau marin 0,6 m, revanche 0,5 m.',
        hint: 'Additionner les termes.',
        answer_latex: "Z = 4{,}2 + 0{,}8 + 0{,}6 + 0{,}5 = 6{,}1\\ \\text{m}",
        answer_text: 'Cote de quai d’au moins 6,1 m (référence de la pleine mer).',
      },
    ],
  },
  quiz: {
    title: 'Quiz — Houle et marée',
    questions: [
      { q: 'Que vaut la longueur d’onde au large d’une houle de 10 s ?', options: ['15,6 m', '156 m', '1 560 m'], correct: 1, explain: 'L₀ = 1,56 × 10² = 156 m.' },
      { q: 'Si la hauteur de houle double, l’énergie est…', options: ['Doublée', 'Quadruplée', 'Inchangée'], correct: 1, explain: 'E ∝ H².' },
      { q: 'Quelle part du marnage la mer monte-t-elle pendant la 3ᵉ heure ?', options: ['1/12', '2/12', '3/12'], correct: 2, explain: 'Règle des douzièmes : 1, 2, 3, 3, 2, 1.' },
    ],
  },
  exam_questions: {
    questions: [
      'Décrivez la propagation de la houle du large vers la côte (réfraction, shoaling, déferlement).',
      'Présentez les solutions de protection du littoral et leurs effets sur le transit sédimentaire.',
      'Déterminez une cote de submersion de référence pour un aménagement littoral.',
    ],
  },
  interview_questions: {
    questions: [
      ['Faut-il toujours protéger le trait de côte par des ouvrages ?', "Non : selon les enjeux, on peut accompagner le recul (relocalisation), privilégier des solutions souples (rechargement, dunes) ou protéger les zones à forts enjeux par des ouvrages ; chaque solution a des effets sur les plages voisines et un coût d'entretien."],
      ['Pourquoi la houle déferle-t-elle ?', "Parce qu'en faible profondeur sa célérité diminue et sa hauteur augmente ; quand la hauteur atteint environ 0,78 fois la profondeur, la crête devient instable et la vague déferle."],
    ],
  },
  practical_case: {
    title: 'Cas pratique — Perré de protection d’une route littorale',
    scenario: 'Route en bord de mer : profondeur au pied du perré 1,5 m à pleine mer, surcote de tempête 1,0 m, houle du large H_s = 4 m.',
    description: 'Déterminer la vague de projet au pied du perré.',
    resolutions: [
      "d = 1{,}5 + 1{,}0 = 2{,}5\\ \\text{m en tempête}",
      "H_b = 0{,}78 \\times 2{,}5 = 1{,}95\\ \\text{m} < H_{s,large} = 4\\ \\text{m}",
      "\\text{Vague de projet} \\approx 2\\ \\text{m} \\Rightarrow \\text{enrochements (Hudson) et crête calée pour limiter le franchissement}",
    ],
    conclusion: "La vague au pied du perré est limitée par la profondeur (≈ 2 m) ; les enrochements se dimensionnent pour cette valeur, en intégrant la montée future du niveau marin qui augmentera la profondeur.",
  },
  summary: {
    content: `### Houle et littoral en 5 points
1. $L_0 = 1{,}56 T^2$ ; $c = \\sqrt{gd}$ en faible profondeur.
2. Énergie $E = \\rho g H^2 / 8$.
3. Déferlement : $H_b \\approx 0{,}78\\,d_b$.
4. Marée : marnage, coefficient, règle des douzièmes.
5. Protection : ouvrages durs, solutions souples, repli ; attention au transit sédimentaire.`,
  },
  key_points: {
    points: [
      'L₀ ≈ 1,56 T²',
      'c = √(g d) en faible profondeur',
      'E = ρ g H² / 8',
      'H_b ≈ 0,78 d_b',
      'Douzièmes : 1-2-3-3-2-1',
    ],
  },
  self_assessment: {
    objectives: [
      'Je sais caractériser une houle (H, T, L, c)',
      'Je sais appliquer le critère de déferlement',
      'Je sais utiliser la règle des douzièmes',
      'Je connais les solutions de protection du littoral',
      "J'ai réussi le quiz avec au moins 2 bonnes réponses sur 3",
    ],
  },
});
