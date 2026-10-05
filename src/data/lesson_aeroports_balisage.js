// ── Lesson: Balisage lumineux et aides visuelles — Module 19 ──────────────────
import { buildLesson } from './build_lesson.js';

export const lesson_aeroports_balisage = buildLesson({
  moduleId: 19,
  slug: 'aeroports_balisage',
  lessonIndex: 3,
  title: "Balisage Lumineux & Aides Visuelles : Marquages, Feux de Piste, Rampes d'Approche et Catégories d'Exploitation",
  subtitle: 'Module 19 — Infrastructures Aéroportuaires',
  level: 'Avancé',
  duration: '8h',
  diagramType: 'road_profile',
  tags: ['Aéroports', 'Balisage', 'PAPI', 'ILS', 'Feux de piste', 'Catégories CAT I II III', 'Marquages'],
}, {
  definition: {
    title: "Définition — Guider l'avion jusqu'au sol et au parking",
    fr: 'Aides visuelles et balisage lumineux d’aérodrome',
    en: 'Aerodrome visual aids and airfield lighting',
    metier: "Utilisée par les ingénieurs électriciens et aéroportuaires, les services techniques des aéroports, les contrôleurs aériens et les autorités de l'aviation civile.",
    content: `Les **aides visuelles** permettent au pilote de se positionner pendant l'approche, l'atterrissage, le roulage et le stationnement, de jour comme de nuit et par visibilité réduite :
- **marquages** peints (seuil, axe, point d'aiming, zone de toucher, voies de circulation) ;
- **balisage lumineux** : rampe d'approche, feux de seuil et d'extrémité, feux de bord et d'axe de piste, feux de zone de toucher, feux de voies de circulation ;
- **indicateurs de pente d'approche** comme le **PAPI** ;
- **panneaux** de guidage au sol.

### Les catégories d'exploitation
Avec l'**ILS** (système d'atterrissage aux instruments), l'aéroport peut accueillir des atterrissages par visibilité réduite, en **CAT I, II ou III**. Plus la catégorie est élevée, plus le balisage exigé est complet (feux d'axe, de zone de toucher) et plus son alimentation électrique doit être fiable.

> 💡 Le PAPI aligne quatre feux qui paraissent blancs ou rouges selon que l'avion est trop haut ou trop bas : deux blancs et deux rouges signifient « sur le plan de descente ».`,
  },
  importance: {
    content: `- **Sécurité** : les phases d'approche et d'atterrissage concentrent une grande part des accidents aériens.
- **Régularité** : sans balisage adapté, l'aéroport ferme dès que la visibilité baisse (brouillard).
- **Fiabilité électrique** : alimentations secourues et temps de basculement très courts sont exigés en CAT II/III.
- **Maintenance** : feux encastrés dans la chaussée soumis aux roues des avions, au déneigement et au caoutchouc des pneus.

> ⚠️ **À retenir** : un balisage défaillant peut imposer de déclasser l'exploitation d'une piste (de CAT III à CAT I par exemple).`,
  },
  applications: {
    examples: [
      ['Piste CAT I', 'Rampe d’approche de 900 m, feux de bord tous les 60 m au plus, PAPI de chaque côté ou d’un côté.'],
      ['Piste CAT III', 'Feux d’axe de piste et de zone de toucher, alimentation secourue à basculement très rapide.'],
      ['Voies de circulation', 'Feux d’axe verts, barres d’arrêt rouges aux points d’attente.'],
      ['Aire de trafic', 'Système de guidage au poste de stationnement (VDGS).'],
      ['Rénovation', 'Remplacement des lampes halogènes par des feux à LED à faible consommation.'],
    ],
  },
  theory: {
    title: 'Théorie — Géométrie de l’approche et dispositions des feux',
    content: `### 1. Plan de descente
Le plan de descente standard est de **3°** (pente d'environ 5,2 %). L'avion franchit le seuil à une hauteur de référence d'environ 15 m (50 ft). Le point où le plan de descente rencontre la piste est à :
$$d = \\frac{h_{seuil}}{\\tan\\gamma}$$

### 2. PAPI
Quatre feux alignés perpendiculairement à la piste, émettant un faisceau blanc au-dessus d'un angle de réglage et rouge en dessous ; leurs réglages sont échelonnés autour de 3° (par exemple 2°30', 2°50', 3°10', 3°30').

### 3. Espacements des feux
- Feux de bord de piste : espacement d'au plus 60 m (pistes aux instruments).
- Feux d'axe de piste : 15 m (CAT III) ou 30 m.
- Nombre de feux sur une longueur $L$ : $n = L / s + 1$.

### 4. Catégories d'exploitation (ordres de grandeur)
- **CAT I** : hauteur de décision ≥ 60 m (200 ft), portée visuelle de piste (RVR) ≥ 550 m.
- **CAT II** : hauteur de décision de 30 à 60 m, RVR ≥ 300 m.
- **CAT III** : hauteur de décision < 30 m ou nulle, RVR plus faible encore.

### 5. Alimentation électrique
Les feux sont alimentés en **circuits série** à courant constant (régulateurs, souvent 6,6 A maximum), avec transformateurs d'isolement à chaque feu ; une coupure de lampe n'interrompt pas le circuit.`,
  },
  formulas: {
    title: 'Formules essentielles — Aides visuelles',
    formulas: [
      {
        name: 'Point d’impact du plan de descente',
        latex: "d = \\frac{h_{seuil}}{\\tan\\gamma}",
        description: 'Distance après le seuil où le plan de descente rencontre la piste.',
        vars: [
          ['d', 'Distance après le seuil', 'm', 'Zone de toucher des roues.'],
          ['h_{seuil}', 'Hauteur de franchissement du seuil', 'm', '≈ 15 m (50 ft).'],
          ['\\gamma', 'Angle du plan de descente', '°', '3° standard.'],
        ],
      },
      {
        name: 'Pente du plan de descente',
        latex: "p = \\tan\\gamma \\qquad h = d_{seuil} \\cdot \\tan\\gamma",
        description: 'Hauteur de l’avion sur le plan à une distance donnée du point d’impact.',
        vars: [
          ['p', 'Pente', '-', 'tan 3° ≈ 0,0524 (5,2 %).'],
          ['h', 'Hauteur sur le plan', 'm', 'Au-dessus de la piste.'],
          ['d_{seuil}', 'Distance au point d’impact', 'm', 'Le long de l’axe.'],
        ],
        rule: "Repère des pilotes : sur un plan à 3°, on descend d'environ 300 ft par mille nautique (≈ 50 m par km).",
      },
      {
        name: 'Nombre de feux sur une longueur',
        latex: "n = \\frac{L}{s} + 1",
        description: 'Feux régulièrement espacés de s sur une longueur L.',
        vars: [
          ['n', 'Nombre de feux', '-', 'Par rangée.'],
          ['L', 'Longueur', 'm', 'Longueur de la piste ou de la rangée.'],
          ['s', 'Espacement', 'm', '60 m (bord) ; 15 ou 30 m (axe).'],
        ],
      },
      {
        name: 'Puissance dissipée dans un circuit série',
        latex: "P = n \\cdot P_{feu} + R_{câble} \\cdot I^2",
        description: 'Puissance demandée au régulateur de courant constant.',
        vars: [
          ['P', 'Puissance', 'W', 'À fournir par le régulateur.'],
          ['P_{feu}', 'Puissance par feu', 'W', 'Halogène 45 à 200 W ; LED 10 à 50 W.'],
          ['R_{câble}', 'Résistance du câble série', 'Ω', 'Fonction de la longueur et de la section.'],
          ['I', 'Courant du circuit', 'A', '6,6 A à pleine intensité.'],
        ],
      },
    ],
  },
  stepbystep: {
    title: 'Calcul complet — Balisage d’une piste de 3 000 m',
    problem: "Piste de 3 000 m aux instruments, CAT I, avec feux de bord espacés de 60 m et feux d'axe espacés de 30 m (prévus pour une évolution future). Calculer le nombre de feux et le point d'impact d'un plan à 3° franchissant le seuil à 15 m.",
    steps_demo: [
      { n: 1, text: "Feux de bord par rangée : 3 000 / 60 + 1 = 51 ; deux rangées : 102 feux." },
      { n: 2, text: "Feux d'axe : 3 000 / 30 + 1 = 101 feux (en pratique, on ne place pas de feux dans les zones de seuil selon la configuration)." },
      { n: 3, text: "Point d'impact : d = 15 / tan 3° = 15 / 0,0524 = 286 m après le seuil." },
      { n: 4, text: "Hauteur de l'avion à 2 km du point d'impact : 2 000 × 0,0524 = 105 m." },
      { n: 5, text: "Le PAPI est implanté au voisinage de ce point (environ 300 m après le seuil), réglé pour donner 2 blancs / 2 rouges sur le plan de 3°." },
    ],
    result_latex: "n_{bord} = 2 \\times \\left(\\frac{3\\,000}{60} + 1\\right) = 102 \\qquad d = \\frac{15}{\\tan 3°} = 286\\ \\text{m}",
  },
  units: {
    table: [
      ['Hauteur de décision', 'ft, m', 'ft', '200 ft = 61 m ; 100 ft = 30 m'],
      ['Portée visuelle de piste (RVR)', 'm', 'ft', '550 m ≈ 1 800 ft'],
      ['Angle de descente', '°', '°', '3° = 5,24 %'],
      ['Distance', 'NM (mille nautique)', 'NM', '1 NM = 1 852 m'],
      ['Courant de balisage', 'A', 'A', '2,8 à 6,6 A selon la brillance'],
    ],
    note: 'Les règles d’exploitation tous temps sont exprimées en pieds et en mètres : vérifiez toujours l’unité.',
  },
  hypotheses: {
    items: [
      ['info', 'Les valeurs citées sont des ordres de grandeur de l’OACI ; les exigences exactes dépendent de la catégorie et de l’autorité nationale.'],
      ['info', 'Le calcul du point d’impact suppose un plan de descente rectiligne et une piste horizontale.'],
      ['warning', 'Les feux encastrés doivent résister aux charges des roues et au déneigement : choisir des produits certifiés.'],
      ['warning', 'Une alimentation secourue mal dimensionnée (temps de basculement) empêche l’exploitation en CAT II/III.'],
      ['tip', 'Le passage aux LED réduit la consommation et la maintenance, mais nécessite d’adapter régulateurs et surveillance des circuits.'],
    ],
  },
  simple_examples: {
    examples: [
      {
        title: 'Exemple 1 : hauteur sur le plan de descente',
        given: 'Plan de 3°, avion à 5 NM du point d’impact',
        find: 'Hauteur',
        solution_latex: "h = 5 \\times 1\\,852 \\times 0{,}0524 = 485\\ \\text{m} \\approx 1\\,590\\ \\text{ft}",
        result: '≈ 1 600 ft au-dessus de la piste.',
      },
      {
        title: 'Exemple 2 : feux de voie de circulation',
        given: 'Voie de circulation de 1 200 m, feux d’axe tous les 30 m',
        find: 'Nombre de feux',
        solution_latex: "n = \\frac{1\\,200}{30} + 1 = 41",
        result: '41 feux.',
      },
      {
        title: 'Exemple 3 : économie des LED',
        given: '200 feux passant de 150 W (halogène) à 30 W (LED), 3 000 h d’allumage par an',
        find: 'Énergie économisée par an',
        solution_latex: "\\Delta E = 200 \\times (150 - 30) \\times 3\\,000 = 72 \\times 10^6\\ \\text{Wh} = 72\\ \\text{MWh}",
        result: '≈ 72 MWh économisés par an (hors pertes du circuit).',
      },
    ],
  },
  real_examples: {
    title: 'Exemple réel — Passage en exploitation CAT III d’un aéroport régional',
    examples: [
      {
        context: 'Aéroport régional fréquemment touché par le brouillard en hiver',
        scenario: "Les déroutements par faible visibilité étaient nombreux. L'aéroport a installé feux d'axe et de zone de toucher, renforcé l'ILS, doublé les alimentations électriques avec basculement rapide et formé ses équipes à l'exploitation par faible visibilité.",
        decomposition_latex: "\\text{CAT I (RVR} \\ge 550\\ \\text{m)} \\rightarrow \\text{CAT III (RVR très faible)} \\Rightarrow \\text{déroutements fortement réduits}",
        lesson: "La catégorie d'exploitation dépend d'un ensemble cohérent : aides radio, balisage, alimentation électrique, procédures et maintenance.",
      },
    ],
  },
  diagrams: {
    title: 'Schéma de principe — Aides visuelles d’une piste aux instruments',
    diagram_description: [
      'Rampe d’approche lumineuse (≈ 900 m en CAT I)',
      'Feux de seuil verts et feux d’extrémité rouges',
      'PAPI : 2 blancs / 2 rouges sur le plan de 3°',
      'Feux de bord blancs (≤ 60 m) et feux d’axe (15 ou 30 m)',
      'Feux de zone de toucher (CAT II/III)',
      'Voies de circulation : feux d’axe verts, barres d’arrêt rouges, panneaux',
    ],
  },
  mistakes: {
    items: [
      ['Confondre hauteur de décision et altitude', 'Erreur d’exploitation', 'La hauteur de décision est mesurée au-dessus du seuil de piste.'],
      ['Négliger l’alimentation secourue', 'Perte du balisage pendant une approche', 'Groupes électrogènes et onduleurs avec temps de basculement conformes à la catégorie.'],
      ['Ne pas entretenir les feux encastrés', 'Intensité réduite (caoutchouc, saleté), non-conformité', 'Nettoyage et mesures photométriques périodiques.'],
    ],
  },
  tips: {
    tips: [
      'Mesurez régulièrement la photométrie des feux avec un véhicule de mesure.',
      'Dégommez la piste (dépôts de caoutchouc) pour préserver marquages et adhérence.',
      'Les barres d’arrêt aux points d’attente réduisent les incursions sur piste.',
      'Coordonnez tout travail sur le balisage avec le contrôle aérien et publiez les restrictions (NOTAM).',
    ],
  },
  norms: {
    norms: [
      ['OACI Annexe 14, volume I, chapitre 5', 'Aides visuelles : marquages, feux, panneaux.'],
      ['Manuel de conception des aérodromes, partie 4 (Doc 9157)', 'Aides visuelles.'],
      ['Manuel de conception des aérodromes, partie 5', 'Systèmes électriques.'],
      ['Spécifications de certification de l’AESA (CS-ADR-DSN)', 'Exigences européennes pour les aérodromes.'],
    ],
  },
  exercises: {
    exercises: [
      {
        level: 1,
        text: 'Calculer le nombre de feux de bord de piste (deux rangées) pour une piste de 2 400 m avec un espacement de 60 m.',
        hint: 'n = 2 (L/s + 1).',
        answer_latex: "n = 2 \\times \\left(\\frac{2\\,400}{60} + 1\\right) = 82",
        answer_text: '82 feux.',
      },
      {
        level: 2,
        text: 'Un plan de descente de 3,5° franchit le seuil à 15 m. Où rencontre-t-il la piste ?',
        hint: 'tan 3,5° = 0,0612.',
        answer_latex: "d = \\frac{15}{0{,}0612} = 245\\ \\text{m}",
        answer_text: '≈ 245 m après le seuil.',
      },
      {
        level: 3,
        text: 'Un avion à 140 kt survole une rampe d’approche de 900 m. Combien de temps le pilote a-t-il pour l’utiliser ?',
        hint: '140 kt = 72 m/s.',
        answer_latex: "t = \\frac{900}{140 \\times 0{,}514} = \\frac{900}{72} = 12{,}5\\ \\text{s}",
        answer_text: '≈ 12,5 s.',
      },
    ],
  },
  quiz: {
    title: 'Quiz — Balisage',
    questions: [
      { q: 'Sur le PAPI, que signifient 4 feux rouges ?', options: ['Trop haut', 'Sur le plan', 'Trop bas'], correct: 2, explain: 'Quatre rouges : l’avion est nettement sous le plan de descente.' },
      { q: 'Quel est l’angle standard du plan de descente ?', options: ['1°', '3°', '6°'], correct: 1, explain: '3°, soit environ 5,2 %.' },
      { q: 'Pourquoi les feux sont-ils montés en circuit série à courant constant ?', options: ['Pour économiser le câble seulement', 'Pour une brillance identique de tous les feux et une continuité malgré une lampe défaillante', 'Pour pouvoir utiliser du 230 V'], correct: 1, explain: 'Le courant est le même dans tous les feux et les transformateurs d’isolement maintiennent le circuit.' },
    ],
  },
  exam_questions: {
    questions: [
      'Décrivez les aides visuelles d’une piste aux instruments de catégorie I.',
      'Expliquez le fonctionnement du PAPI et la géométrie du plan de descente.',
      'Présentez les exigences supplémentaires pour une exploitation en CAT II/III.',
    ],
  },
  interview_questions: {
    questions: [
      ['Quels sont les enjeux d’un passage au balisage LED ?', 'Réduction de la consommation et de la maintenance, meilleure durée de vie, mais compatibilité avec les régulateurs et la surveillance des circuits, gestion du givre (moins de chaleur émise) et conformité photométrique à vérifier.'],
      ['Que se passe-t-il si le balisage tombe en panne par faible visibilité ?', 'Les approches de la catégorie concernée sont suspendues ou déclassées ; d’où les alimentations secourues, la surveillance continue des circuits et les procédures d’exploitation par faible visibilité.'],
    ],
  },
  practical_case: {
    title: 'Cas pratique — Rénovation du balisage d’une piste de 2 500 m',
    scenario: 'Piste CAT I de 2 500 m : 2 rangées de feux de bord (60 m), feux de seuil et d’extrémité (2 × 20), PAPI des deux côtés (8 feux). On passe de l’halogène (150 W) à la LED (35 W), 2 500 heures d’allumage par an, électricité à 0,15 €/kWh.',
    description: 'Calculer le nombre de feux et l’économie annuelle.',
    resolutions: [
      "n = 2 \\times \\left(\\frac{2\\,500}{60} + 1\\right) + 40 + 8 \\approx 2 \\times 43 + 48 = 134\\ \\text{feux}",
      "\\Delta E = 134 \\times (150 - 35) \\times 2\\,500 = 38{,}5\\ \\text{MWh/an}",
      "\\text{Économie : } 38\\,500 \\times 0{,}15 \\approx 5\\,800\\ \\text{€/an (hors maintenance)}",
    ],
    conclusion: "L'économie d'énergie (≈ 38 MWh/an) s'ajoute à la forte réduction des remplacements de lampes ; la rénovation se programme par phases nocturnes coordonnées avec l'exploitation.",
  },
  summary: {
    content: `### Le balisage en 5 points
1. Marquages, feux, PAPI, panneaux : guidage de l'approche au parking.
2. Plan de 3° : $d = h_{seuil}/\\tan\\gamma \\approx 286$ m pour 15 m.
3. Feux de bord ≤ 60 m ; feux d'axe 15 ou 30 m ; $n = L/s + 1$.
4. CAT I, II, III : balisage et alimentation de plus en plus exigeants.
5. Circuits série à courant constant, maintenance photométrique.`,
  },
  key_points: {
    points: [
      'Plan de descente 3° = 5,2 %',
      'PAPI : 2 blancs / 2 rouges = sur le plan',
      'CAT I : DH ≥ 200 ft, RVR ≥ 550 m',
      'Feux de bord ≤ 60 m',
      '1 NM = 1 852 m',
    ],
  },
  self_assessment: {
    objectives: [
      'Je connais les aides visuelles d’une piste aux instruments',
      'Je sais calculer la géométrie d’un plan de descente',
      'Je sais dénombrer les feux d’une piste',
      'Je connais les catégories d’exploitation et leurs exigences',
      "J'ai réussi le quiz avec au moins 2 bonnes réponses sur 3",
    ],
  },
});
