// ── Lesson: Thermique du bâtiment — Module 42 ───────────────────────────────
import { buildLesson } from './build_lesson.js';

export const lesson_thermique_batiment = buildLesson({
  moduleId: 42,
  slug: 'thermique_batiment',
  lessonIndex: 1,
  title: "Thermique du Bâtiment : Déperditions, Isolation & Ponts Thermiques",
  subtitle: 'Module 42 — Physique du bâtiment : thermique, hygrométrie & acoustique',
  level: 'Intermédiaire',
  duration: '9h',
  tags: ['Thermique', 'Résistance thermique', 'Coefficient U', 'Ponts thermiques', 'Déperditions', 'DJU', 'Isolation'],
}, {
  definition: {
    title: "Définition — Garder la chaleur à l'intérieur",
    fr: 'Thermique du bâtiment (transferts de chaleur à travers l’enveloppe)',
    en: 'Building thermal physics / heat loss',
    metier: "Utilisée par les thermiciens, bureaux d'études fluides, architectes, économistes et ingénieurs de la rénovation énergétique.",
    content: `La **thermique du bâtiment** quantifie les échanges de chaleur entre l'intérieur chauffé et l'extérieur. En hiver, la chaleur s'échappe par trois voies :
1. **Les parois** (murs, toiture, plancher bas, fenêtres) par conduction ;
2. **Les ponts thermiques** (jonctions mur-plancher, tableaux de fenêtres) où l'isolation est interrompue ;
3. **Le renouvellement d'air** (ventilation et infiltrations).

### Les deux grandeurs clés
- La **résistance thermique** $R$ d'une couche (m²·K/W) : plus elle est grande, mieux la couche isole.
- Le **coefficient de transmission** $U$ d'une paroi (W/m²·K) : la puissance perdue par m² et par degré d'écart. C'est l'inverse de la résistance totale.

> 💡 Un mur non isolé des années 1960 a un U d'environ 2 W/m²·K ; un mur isolé performant atteint 0,20 W/m²·K, soit dix fois moins de pertes.`,
  },
  importance: {
    content: `- **Climat** : le bâtiment représente près de la moitié de l'énergie consommée en France.
- **Réglementation** : la RE2020 (neuf) et les aides à la rénovation imposent des niveaux d'isolation et des calculs justifiés.
- **Confort** : une paroi froide crée une sensation d'inconfort même avec un air chaud ; les ponts thermiques favorisent condensation et moisissures.
- **Dimensionnement** : la puissance de chauffage se calcule à partir des déperditions par la température extérieure de base.

> ⚠️ **À retenir** : les ponts thermiques peuvent représenter 20 à 30 % des déperditions d'un bâtiment bien isolé.`,
  },
  applications: {
    examples: [
      ['Maison neuve RE2020', 'Calcul des U de paroi et des ponts thermiques, choix des isolants et des menuiseries.'],
      ['Rénovation énergétique', 'Isolation par l’extérieur d’un immeuble des années 1970 et calcul du gain sur la consommation.'],
      ['Dimensionnement de chauffage', 'Puissance d’une pompe à chaleur à partir des déperditions à −7 °C.'],
      ['Audit énergétique', 'Bilan des pertes par poste pour hiérarchiser les travaux.'],
      ['Bâtiment tertiaire', 'Traitement des ponts thermiques des balcons par rupteurs.'],
    ],
  },
  theory: {
    title: "Théorie — Conduction, coefficient U et bilan de déperditions",
    content: `### 1. Résistance d'une couche homogène
$$R = \\frac{e}{\\lambda}$$
$\\lambda$ est la **conductivité thermique** du matériau (W/m·K) : 0,030 à 0,040 pour les isolants, 1,75 à 2,3 pour le béton, 0,13 pour le bois.

### 2. Coefficient U d'une paroi
Les résistances en série s'additionnent, y compris les **résistances superficielles** $R_{si}$ (intérieur) et $R_{se}$ (extérieur) :
$$U = \\frac{1}{R_{si} + \\sum R_i + R_{se}}$$
Pour un mur (flux horizontal) : $R_{si} = 0{,}13$ et $R_{se} = 0{,}04$ m²·K/W.

### 3. Déperditions par transmission
$$H_T = \\sum U_i A_i + \\sum \\psi_j L_j$$
$\\psi$ (W/m·K) est le coefficient linéique d'un pont thermique de longueur $L$.

### 4. Déperditions par renouvellement d'air
$$H_V = 0{,}34 \\cdot q_v$$
0,34 Wh/m³·K est la capacité thermique volumique de l'air et $q_v$ le débit d'air en m³/h.

### 5. Puissance et énergie
- Puissance de chauffage : $\\Phi = (H_T + H_V) \\cdot (\\theta_i - \\theta_e)$.
- Besoin annuel brut : $Q = H \\cdot DJU \\cdot 24 / 1\\,000$ (kWh), avec les **degrés-jours unifiés** du site (≈ 2 000 à 3 000 en France métropolitaine).`,
  },
  formulas: {
    title: 'Formules essentielles — Déperditions thermiques',
    formulas: [
      {
        name: "Résistance thermique d'une couche",
        latex: "R = \\frac{e}{\\lambda}",
        description: 'Couche homogène traversée perpendiculairement par le flux.',
        vars: [
          ['R', 'Résistance thermique', 'm²·K/W', 'Capacité de la couche à freiner le flux de chaleur.'],
          ['e', 'Épaisseur', 'm', 'Épaisseur de la couche.'],
          ['\\lambda', 'Conductivité thermique', 'W/(m·K)', 'Laine minérale ≈ 0,035 ; béton ≈ 2,0.'],
        ],
        rule: "10 cm de laine minérale isolent autant qu'environ 5 m de béton.",
      },
      {
        name: "Coefficient de transmission d'une paroi",
        latex: "U = \\frac{1}{R_{si} + \\sum R_i + R_{se}}",
        description: 'Inverse de la résistance totale de la paroi, résistances superficielles comprises.',
        vars: [
          ['U', 'Coefficient de transmission', 'W/(m²·K)', 'Plus il est faible, mieux la paroi isole.'],
          ['R_{si}', 'Résistance superficielle intérieure', 'm²·K/W', '0,13 (mur), 0,10 (toiture), 0,17 (plancher bas).'],
          ['R_i', 'Résistance de la couche i', 'm²·K/W', 'e / λ ou valeur certifiée du fabricant.'],
          ['R_{se}', 'Résistance superficielle extérieure', 'm²·K/W', '0,04.'],
        ],
      },
      {
        name: 'Coefficient de déperdition par transmission',
        latex: "H_T = \\sum U_i A_i + \\sum \\psi_j L_j",
        description: 'Somme des pertes par les parois et par les ponts thermiques linéiques.',
        vars: [
          ['H_T', 'Déperditions par transmission', 'W/K', 'Puissance perdue par degré d’écart.'],
          ['A_i', 'Surface de la paroi i', 'm²', 'Mesurée en dimensions intérieures ou extérieures selon la méthode.'],
          ['\\psi_j', 'Coefficient linéique', 'W/(m·K)', '0,1 avec rupteur ; 0,5 à 0,9 sans traitement.'],
          ['L_j', 'Longueur du pont thermique', 'm', 'Linéaire de jonction.'],
        ],
      },
      {
        name: 'Déperditions par renouvellement d’air',
        latex: "H_V = 0{,}34 \\cdot q_v",
        description: "Chaleur nécessaire pour réchauffer l'air neuf entrant.",
        vars: [
          ['H_V', 'Déperditions par ventilation', 'W/K', 'Par degré d’écart intérieur-extérieur.'],
          ['q_v', 'Débit d’air renouvelé', 'm³/h', 'Ventilation + infiltrations.'],
        ],
      },
      {
        name: 'Puissance et besoin annuel de chauffage',
        latex: "\\Phi = H \\cdot (\\theta_i - \\theta_e) \\qquad Q = \\frac{H \\cdot DJU \\cdot 24}{1\\,000}",
        description: 'H = H_T + H_V. Q est un besoin brut, avant déduction des apports solaires et internes.',
        vars: [
          ['\\Phi', 'Puissance de chauffage', 'W', 'À la température extérieure de base.'],
          ['\\theta_i, \\theta_e', 'Températures intérieure et extérieure', '°C', '19 °C et −7 °C par exemple.'],
          ['DJU', 'Degrés-jours unifiés', 'K·j', 'Base 18 °C, ≈ 2 000 (Nice) à 3 000 (Strasbourg).'],
          ['Q', 'Besoin annuel', 'kWh', 'Énergie à fournir sur la saison de chauffe.'],
        ],
      },
    ],
  },
  stepbystep: {
    title: 'Calcul complet — Coefficient U d’un mur isolé par l’intérieur',
    problem: "Mur en blocs béton creux de 20 cm (R = 0,23 m²·K/W), doublage en laine minérale de 12 cm (λ = 0,035 W/m·K) et plaque de plâtre de 13 mm (λ = 0,25 W/m·K). Calculer U et les pertes de 30 m² de ce mur pour 19 °C intérieur et −7 °C extérieur.",
    steps_demo: [
      { n: 1, text: "Laine minérale : R = 0,12 / 0,035 = 3,43 m²·K/W." },
      { n: 2, text: "Plâtre : R = 0,013 / 0,25 = 0,05 m²·K/W." },
      { n: 3, text: "Résistance totale : 0,13 + 0,23 + 3,43 + 0,05 + 0,04 = 3,88 m²·K/W." },
      { n: 4, text: "U = 1 / 3,88 = 0,26 W/m²·K." },
      { n: 5, text: "Pertes : Φ = 0,26 × 30 × (19 − (−7)) = 0,26 × 30 × 26 = 203 W." },
      { n: 6, text: "Sans isolant : U = 1 / (0,13 + 0,23 + 0,05 + 0,04) = 2,22 W/m²·K, soit 8,5 fois plus de pertes." },
    ],
    result_latex: "U = \\frac{1}{0{,}13 + 0{,}23 + 3{,}43 + 0{,}05 + 0{,}04} = 0{,}26\\ \\text{W/m}^2\\text{K} \\qquad \\Phi = 0{,}26 \\times 30 \\times 26 = 203\\ \\text{W}",
  },
  units: {
    table: [
      ['Conductivité λ', 'W/(m·K)', 'BTU·in/(h·ft²·°F)', '1 W/(m·K) = 6,93 BTU·in/(h·ft²·°F)'],
      ['Résistance R', 'm²·K/W', 'h·ft²·°F/BTU (R-value)', '1 m²·K/W = R-5,68'],
      ['Coefficient U', 'W/(m²·K)', 'BTU/(h·ft²·°F)', '1 W/(m²·K) = 0,176 BTU/(h·ft²·°F)'],
      ['Puissance', 'W, kW', 'BTU/h', '1 kW = 3 412 BTU/h'],
      ['Énergie', 'kWh', 'BTU, therm', '1 kWh = 3 412 BTU'],
    ],
    note: "Pour les isolants, utilisez les valeurs λ et R certifiées (ACERMI en France), plus fiables que les valeurs génériques.",
  },
  hypotheses: {
    items: [
      ['info', 'Le calcul suppose un régime permanent (températures constantes) : il donne la puissance de dimensionnement, pas le comportement dynamique.'],
      ['info', "Les couches sont supposées homogènes ; une ossature ou des fixations métalliques traversantes réduisent la performance réelle."],
      ['warning', 'Les ponts thermiques de liaison (plancher / mur, balcons) doivent être comptés : ils sont majeurs dans un bâtiment isolé par l’intérieur.'],
      ['warning', 'Un isolant tassé ou humide perd une grande partie de sa performance.'],
      ['tip', 'L’isolation par l’extérieur supprime la plupart des ponts thermiques de plancher et conserve l’inertie des murs à l’intérieur.'],
    ],
  },
  simple_examples: {
    examples: [
      {
        title: 'Exemple 1 : résistance d’un isolant',
        given: 'Polystyrène graphité de 14 cm, λ = 0,032 W/m·K',
        find: 'R',
        solution_latex: "R = \\frac{0{,}14}{0{,}032} = 4{,}38\\ \\text{m}^2\\text{K/W}",
        result: 'R ≈ 4,4 m²·K/W.',
      },
      {
        title: 'Exemple 2 : pertes par ventilation',
        given: 'Logement ventilé à 120 m³/h, θi = 19 °C, θe = −7 °C',
        find: 'H_V et la puissance perdue',
        solution_latex: "H_V = 0{,}34 \\times 120 = 40{,}8\\ \\text{W/K} \\qquad \\Phi_V = 40{,}8 \\times 26 = 1\\,061\\ \\text{W}",
        result: '≈ 1,1 kW perdus par le renouvellement d’air, d’où l’intérêt d’une VMC double flux.',
      },
      {
        title: 'Exemple 3 : pont thermique de plancher',
        given: 'Liaison plancher intermédiaire / façade : ψ = 0,6 W/m·K sur 40 m',
        find: 'Les pertes linéiques',
        solution_latex: "\\psi L = 0{,}6 \\times 40 = 24\\ \\text{W/K}",
        result: '24 W/K, autant que 92 m² de mur à U = 0,26.',
      },
    ],
  },
  real_examples: {
    title: 'Exemple réel — Rénovation d’un immeuble des années 1970',
    examples: [
      {
        context: 'Immeuble de 40 logements, murs béton de 18 cm non isolés, simple vitrage',
        scenario: "L'isolation par l'extérieur (16 cm de laine de roche), le remplacement des fenêtres et une VMC hygroréglable font passer les déperditions de 75 kW à 28 kW à −7 °C.",
        decomposition_latex: "U_{mur} : 3{,}0 \\rightarrow 0{,}21\\ \\text{W/m}^2\\text{K} \\qquad \\Phi : 75 \\rightarrow 28\\ \\text{kW} \\ (-63\\,\\%)",
        lesson: "L'isolation par l'extérieur traite aussi les ponts thermiques des planchers ; la chaufferie a pu être réduite de moitié.",
      },
    ],
  },
  diagrams: {
    title: 'Schéma de principe — Bilan des déperditions',
    diagram_description: [
      'Parois opaques : murs, toiture, plancher bas → Σ U·A',
      'Baies vitrées : fenêtres et portes, U élevé → Σ U·A',
      'Ponts thermiques : jonctions et tableaux → Σ ψ·L',
      'Renouvellement d’air : ventilation et infiltrations → 0,34·q_v',
      'Puissance : Φ = H·(θi − θe) pour le dimensionnement du chauffage',
      'Énergie : Q = H·DJU·24/1 000 puis déduction des apports gratuits',
    ],
  },
  mistakes: {
    items: [
      ['Oublier les résistances superficielles', 'U surestimé pour une paroi peu isolée', 'Ajouter toujours R_si et R_se.'],
      ['Additionner des U au lieu des R', 'Résultat absurde', 'Les résistances s’additionnent en série ; U est l’inverse de leur somme.'],
      ['Négliger les ponts thermiques', 'Puissance de chauffage sous-estimée de 20 à 30 %', 'Les compter avec leurs valeurs ψ ou des valeurs forfaitaires.'],
    ],
  },
  tips: {
    tips: [
      'Une caméra thermique en hiver révèle les ponts thermiques et les défauts de pose de l’isolant.',
      'Doubler l’épaisseur d’isolant ne divise pas les pertes par deux quand les ponts thermiques dominent.',
      'Visez l’étanchéité à l’air : un test d’infiltrométrie est obligatoire en RE2020.',
      'Pour une fenêtre, comparez le Uw (fenêtre complète) et non le Ug (vitrage seul).',
    ],
  },
  norms: {
    norms: [
      ['NF EN ISO 6946', 'Résistance et coefficient de transmission thermique des parois.'],
      ['NF EN ISO 10211', 'Calcul des ponts thermiques.'],
      ['NF EN 12831-1', 'Calcul de la puissance de chauffage (charge thermique de conception).'],
      ['Règles Th-Bât', 'Méthode française de caractérisation thermique des bâtiments.'],
      ['RE2020', 'Réglementation environnementale des bâtiments neufs (Bbio, Cep, confort d’été).'],
    ],
  },
  exercises: {
    exercises: [
      {
        level: 1,
        text: 'Calculer U d’une toiture isolée par 30 cm de laine de verre (λ = 0,040), avec R_si = 0,10 et R_se = 0,04 (autres couches négligées).',
        hint: 'R = 0,30 / 0,040.',
        answer_latex: "U = \\frac{1}{0{,}10 + 7{,}50 + 0{,}04} = 0{,}13\\ \\text{W/m}^2\\text{K}",
        answer_text: 'U ≈ 0,13 W/m²·K.',
      },
      {
        level: 2,
        text: 'Une maison a H_T = 137 W/K et H_V = 41 W/K. Calculer la puissance de chauffage pour 19 °C intérieur et −7 °C extérieur.',
        hint: 'Φ = (H_T + H_V)·ΔT.',
        answer_latex: "\\Phi = (137 + 41) \\times 26 = 4\\,628\\ \\text{W}",
        answer_text: 'Φ ≈ 4,6 kW.',
      },
      {
        level: 3,
        text: 'Avec H = 178 W/K et 2 500 DJU, calculer le besoin brut annuel de chauffage.',
        hint: 'Q = H·DJU·24 / 1 000.',
        answer_latex: "Q = \\frac{178 \\times 2\\,500 \\times 24}{1\\,000} = 10\\,680\\ \\text{kWh}",
        answer_text: '≈ 10 700 kWh par an avant apports gratuits.',
      },
    ],
  },
  quiz: {
    title: 'Quiz — Thermique du bâtiment',
    questions: [
      { q: 'Comment calcule-t-on la résistance d’une couche ?', options: ['R = λ / e', 'R = e / λ', 'R = e × λ'], correct: 1, explain: 'R = épaisseur / conductivité.' },
      { q: 'Que représente U ?', options: ['La puissance perdue par m² et par degré', 'La température de surface', 'La masse de l’isolant'], correct: 0, explain: 'U en W/m²·K : flux par unité de surface et d’écart de température.' },
      { q: 'Que vaut H_V pour 100 m³/h d’air ?', options: ['3,4 W/K', '34 W/K', '340 W/K'], correct: 1, explain: '0,34 × 100 = 34 W/K.' },
    ],
  },
  exam_questions: {
    questions: [
      'Établissez l’expression du coefficient U d’une paroi multicouche et calculez-le pour une paroi donnée.',
      'Présentez les différentes composantes des déperditions d’un bâtiment et leur ordre de grandeur.',
      'Expliquez la notion de pont thermique et les solutions pour les traiter.',
      'Calculez la puissance de chauffage et le besoin annuel d’une maison à partir de ses parois.',
    ],
  },
  interview_questions: {
    questions: [
      ['Isolation par l’intérieur ou par l’extérieur : que conseillez-vous ?', "Par l'extérieur quand c'est possible : elle traite les ponts thermiques des planchers, conserve l'inertie et la surface habitable, et protège la structure. Par l'intérieur quand la façade est protégée ou pour un coût moindre, en soignant les ponts thermiques et l'étanchéité à l'air."],
      ['Pourquoi U et pas seulement l’épaisseur d’isolant ?', "Parce que U intègre toutes les couches, les résistances superficielles et le matériau : 10 cm d'un isolant à λ = 0,022 valent 16 cm d'un isolant à λ = 0,035."],
    ],
  },
  practical_case: {
    title: 'Cas pratique — Bilan d’une maison de 100 m²',
    scenario: 'Murs 120 m² (U = 0,26), toiture 100 m² (U = 0,15), plancher bas 100 m² (U = 0,25), fenêtres 20 m² (U = 1,3), ponts thermiques ψ = 0,5 W/m·K sur 80 m, ventilation 120 m³/h.',
    description: 'Calculer H_T, H_V et la puissance de chauffage à −7 °C (θi = 19 °C).',
    resolutions: [
      "H_T = 0{,}26 \\times 120 + 0{,}15 \\times 100 + 0{,}25 \\times 100 + 1{,}3 \\times 20 + 0{,}5 \\times 80 = 31{,}2 + 15 + 25 + 26 + 40 = 137{,}2\\ \\text{W/K}",
      "H_V = 0{,}34 \\times 120 = 40{,}8\\ \\text{W/K} \\qquad H = 178\\ \\text{W/K}",
      "\\Phi = 178 \\times 26 = 4\\,628\\ \\text{W} \\approx 4{,}6\\ \\text{kW}",
    ],
    conclusion: 'Une pompe à chaleur de 5 kW suffit. Les ponts thermiques (40 W/K) sont le premier poste de transmission : des rupteurs ou une isolation par l’extérieur seraient les améliorations les plus efficaces.',
  },
  summary: {
    content: `### La thermique du bâtiment en 5 points
1. $R = e/\\lambda$ pour chaque couche.
2. $U = 1 / (R_{si} + \\sum R + R_{se})$.
3. $H_T = \\sum UA + \\sum \\psi L$ et $H_V = 0{,}34\\, q_v$.
4. Puissance : $\\Phi = H (\\theta_i - \\theta_e)$.
5. Énergie : $Q = H \\cdot DJU \\cdot 24 / 1\\,000$.`,
  },
  key_points: {
    points: [
      'R = e / λ ; les résistances s’additionnent',
      'U = 1 / R_totale',
      'Mur : R_si = 0,13 ; R_se = 0,04',
      'H_V = 0,34 × q_v',
      'Les ponts thermiques : 20 à 30 % des pertes',
    ],
  },
  self_assessment: {
    objectives: [
      'Je sais calculer la résistance et le U d’une paroi',
      'Je sais établir le bilan des déperditions d’un logement',
      'Je sais calculer une puissance de chauffage',
      'Je sais estimer un besoin annuel avec les DJU',
      "J'ai réussi le quiz avec au moins 2 bonnes réponses sur 3",
    ],
  },
});
