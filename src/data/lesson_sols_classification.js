// ── Lesson: Identification et classification des sols — Module 13 ────────────
import { buildLesson } from './build_lesson.js';

export const lesson_sols_classification = buildLesson({
  moduleId: 13,
  slug: 'sols_classification',
  lessonIndex: 3,
  title: "Identification & Classification des Sols : Paramètres d'État, Atterberg, GTR et Reconnaissance",
  subtitle: 'Module 13 — Géotechnique & Mécanique des sols',
  level: 'Avancé',
  duration: '12h',
  diagramType: 'soil_profile',
  tags: ['Géotechnique', 'Teneur en eau', 'Indice des vides', 'Limites d’Atterberg', 'GTR', 'Pressiomètre', 'Sondages'],
}, {
  definition: {
    title: 'Définition — Savoir de quoi est fait le sol',
    fr: 'Identification et classification des sols',
    en: 'Soil identification and classification',
    metier: "Utilisée par les laboratoires de géotechnique, les ingénieurs géotechniciens, les terrassiers et les ingénieurs routiers (réemploi des matériaux).",
    content: `Avant de calculer une fondation ou un remblai, il faut **identifier** le sol : sa composition, son état et sa sensibilité à l'eau. Un sol est un milieu à **trois phases** : grains solides, eau et air.

### Les trois familles d'essais
1. **Paramètres d'état** : teneur en eau, masses volumiques, indice des vides, degré de saturation.
2. **Paramètres de nature** : granulométrie (proportion de cailloux, sables, limons, argiles), limites d'Atterberg, valeur au bleu de méthylène (VBS).
3. **Essais en place** : sondages, pressiomètre Ménard, pénétromètre statique (CPT), essai SPT.

### Pourquoi classer ?
Une classification (GTR en France pour les terrassements, USCS à l'international) regroupe les sols de comportement voisin : elle permet de prévoir le réemploi en remblai, le traitement à la chaux ou au ciment et le comportement sous les ouvrages.

> 💡 Une argile et un sable de même densité ont des comportements opposés : l'argile est sensible à l'eau, peu perméable et tasse lentement ; le sable draine bien et tasse vite.`,
  },
  importance: {
    content: `- **Terrassements** : le réemploi des déblais en remblai dépend de leur classe et de leur teneur en eau ; mal évalué, il coûte des évacuations et des apports.
- **Fondations** : la nature et la consistance du sol conditionnent la portance et les tassements.
- **Sécurité** : les sols gonflants, liquéfiables ou organiques doivent être repérés tôt.
- **Contrats** : les quantités de matériaux et les plus-values de terrassement reposent sur les classes de sols.

> ⚠️ **À retenir** : une argile humide (consistance molle) peut devenir impossible à compacter et paralyser un chantier de terrassement.`,
  },
  applications: {
    examples: [
      ['Chantier routier', 'Classement GTR des déblais et choix entre réemploi, traitement à la chaux ou évacuation.'],
      ['Étude de fondations', 'Essais pressiométriques tous les mètres pour calculer portance et tassements.'],
      ['Maison individuelle', "Étude G1/G2 : sondages, limites d'Atterberg et risque de retrait-gonflement."],
      ['Plateforme industrielle', 'Contrôle de compactage : densité sèche et teneur en eau Proctor.'],
      ['Digue en terre', 'Sélection des matériaux du noyau étanche et des recharges.'],
    ],
  },
  theory: {
    title: "Théorie — Relations entre phases et indices de consistance",
    content: `### 1. Paramètres d'état
- Teneur en eau : $w = W_w / W_s$ (masse d'eau / masse de grains secs).
- Masse volumique sèche : $\\rho_d = \\rho / (1 + w)$.
- Indice des vides : $e = \\rho_s / \\rho_d - 1$ (avec $\\rho_s \\approx 2{,}65$ t/m³ pour les grains).
- Degré de saturation : $S_r = w \\, \\rho_s / (e \\, \\rho_w)$.

### 2. Granulométrie
Tamisage pour les grains > 80 µm, sédimentométrie en dessous. Le **passant à 80 µm** sépare sols fins et sols grenus.

### 3. Limites d'Atterberg (sols fins)
- $w_L$ : limite de liquidité ; $w_P$ : limite de plasticité.
- **Indice de plasticité** $I_P = w_L - w_P$ : plus il est grand, plus l'argile est plastique et sensible à l'eau.
- **Indice de consistance** $I_C = (w_L - w) / I_P$ : < 0 liquide, 0,5 à 0,75 ferme, > 1 dur.

### 4. Classification GTR (sols fins A)
- A1 : $I_P \\le 12$ (ou VBS ≤ 2,5) — limons peu plastiques ;
- A2 : $12 < I_P \\le 25$ — sables fins argileux, limons argileux ;
- A3 : $25 < I_P \\le 40$ — argiles ;
- A4 : $I_P > 40$ — argiles très plastiques.

### 5. Essais en place
Le **pressiomètre Ménard** donne un module $E_M$ (déformabilité) et une pression limite $p_l$ (résistance), utilisés directement par la norme française NF P 94-261 pour les fondations superficielles.`,
  },
  formulas: {
    title: "Formules essentielles — Paramètres d'identification",
    formulas: [
      {
        name: 'Teneur en eau et masse volumique sèche',
        latex: "w = \\frac{m_w}{m_s} \\qquad \\rho_d = \\frac{\\rho}{1 + w}",
        description: 'Mesures de base sur échantillon (étuvage à 105 °C).',
        vars: [
          ['w', 'Teneur en eau', '-', 'Exprimée en %.'],
          ['m_w, m_s', "Masses d'eau et de solides", 'g', 'Avant et après étuvage.'],
          ['\\rho', 'Masse volumique humide', 't/m³', 'Masse totale / volume total.'],
          ['\\rho_d', 'Masse volumique sèche', 't/m³', 'Masse des grains / volume total.'],
        ],
      },
      {
        name: 'Indice des vides et degré de saturation',
        latex: "e = \\frac{\\rho_s}{\\rho_d} - 1 \\qquad S_r = \\frac{w \\, \\rho_s}{e \\, \\rho_w}",
        description: 'Relations entre phases (grains, eau, air).',
        vars: [
          ['e', 'Indice des vides', '-', 'Volume des vides / volume des grains.'],
          ['\\rho_s', 'Masse volumique des grains', 't/m³', '≈ 2,65 à 2,70.'],
          ['S_r', 'Degré de saturation', '-', '1 = sol saturé.'],
          ['\\rho_w', "Masse volumique de l'eau", 't/m³', '1,0.'],
        ],
      },
      {
        name: "Indices d'Atterberg",
        latex: "I_P = w_L - w_P \\qquad I_C = \\frac{w_L - w}{I_P}",
        description: 'Plasticité et consistance des sols fins.',
        vars: [
          ['I_P', 'Indice de plasticité', '%', 'Base de la classification GTR des sols fins.'],
          ['w_L, w_P', 'Limites de liquidité et de plasticité', '%', "Essais à la coupelle de Casagrande et au rouleau."],
          ['I_C', 'Indice de consistance', '-', '< 0 liquide ; 0,5-0,75 ferme ; > 1 dur.'],
        ],
        rule: "Un sol avec I_P > 25 est une argile sensible à l'eau, susceptible de retrait-gonflement.",
      },
      {
        name: 'Ligne A de Casagrande (USCS)',
        latex: "I_{P,A} = 0{,}73 \\, (w_L - 20)",
        description: 'Au-dessus : argiles (C) ; en dessous : limons (M).',
        vars: [
          ['I_{P,A}', 'Indice de plasticité de la ligne A', '%', 'Frontière argiles / limons.'],
        ],
      },
    ],
  },
  stepbystep: {
    title: "Calcul complet — Identification d'un échantillon",
    problem: "Un échantillon intact de 100 cm³ pèse 185 g humide et 160 g après étuvage. ρ_s = 2,65 g/cm³. Limites d'Atterberg : w_L = 45 %, w_P = 22 %. Calculer w, ρ_d, e, S_r, I_P, I_C et classer le sol.",
    steps_demo: [
      { n: 1, text: "Teneur en eau : w = (185 − 160) / 160 = 0,156 = 15,6 %." },
      { n: 2, text: "Masses volumiques : ρ = 1,85 g/cm³ ; ρ_d = 1,60 g/cm³." },
      { n: 3, text: "Indice des vides : e = 2,65 / 1,60 − 1 = 0,656." },
      { n: 4, text: "Saturation : S_r = 0,156 × 2,65 / 0,656 = 0,63 (63 %)." },
      { n: 5, text: "Plasticité : I_P = 45 − 22 = 23 % → GTR classe A2 ; ligne A : 0,73 × (45 − 20) = 18,3 < 23 → argile peu plastique (CL)." },
      { n: 6, text: "Consistance : I_C = (45 − 15,6) / 23 = 1,28 > 1 → sol dur (sec) au moment du prélèvement." },
    ],
    result_latex: "w = 15{,}6\\,\\% \\quad e = 0{,}656 \\quad S_r = 63\\,\\% \\quad I_P = 23\\,\\% \\ (A2) \\quad I_C = 1{,}28",
  },
  units: {
    table: [
      ['Masse volumique', 't/m³ = g/cm³', 'pcf', '1 t/m³ = 62,4 pcf'],
      ['Poids volumique', 'kN/m³', 'pcf', 'γ = ρ g : 1,9 t/m³ → 18,6 kN/m³'],
      ['Teneur en eau, limites', '%', '%', 'Rapportées à la masse sèche'],
      ['Pression limite, module pressiométrique', 'MPa', 'tsf', '1 MPa ≈ 10,4 tsf'],
      ['Résistance de pointe CPT', 'MPa', 'tsf', 'q_c'],
    ],
    note: 'La teneur en eau se rapporte toujours à la masse de sol **sec** : elle peut dépasser 100 % pour une argile très molle ou une tourbe.',
  },
  hypotheses: {
    items: [
      ['info', 'Les relations entre phases supposent un échantillon représentatif et non remanié pour les masses volumiques en place.'],
      ['info', "Les limites d'Atterberg se mesurent sur la fraction < 400 µm du sol."],
      ['warning', 'Les classifications GTR et USCS ne remplacent pas les essais mécaniques pour le calcul des ouvrages.'],
      ['warning', 'La teneur en eau varie avec la saison : un même sol peut être réemployable en été et non en hiver.'],
      ['tip', 'Combinez sondages carottés (identification) et essais en place (pressiomètre, CPT) pour une campagne équilibrée.'],
    ],
  },
  simple_examples: {
    examples: [
      {
        title: 'Exemple 1 : sol saturé',
        given: 'Argile saturée, w = 32 %, ρ_s = 2,70 t/m³',
        find: "L'indice des vides",
        solution_latex: "S_r = 1 \\Rightarrow e = w \\, \\frac{\\rho_s}{\\rho_w} = 0{,}32 \\times 2{,}70 = 0{,}864",
        result: 'e ≈ 0,86.',
      },
      {
        title: 'Exemple 2 : classe GTR',
        given: 'w_L = 60 %, w_P = 25 %',
        find: 'I_P et classe GTR',
        solution_latex: "I_P = 60 - 25 = 35\\,\\% \\Rightarrow 25 < I_P \\le 40 \\Rightarrow A3",
        result: 'Argile A3, très sensible à l’eau ; réemploi difficile sans traitement.',
      },
      {
        title: 'Exemple 3 : consistance sur chantier',
        given: 'w_L = 45 %, w_P = 22 %, w = 38 % après la pluie',
        find: 'I_C',
        solution_latex: "I_C = \\frac{45 - 38}{23} = 0{,}30",
        result: 'I_C = 0,30 : sol mou, circulation des engins et compactage impossibles sans traitement à la chaux.',
      },
    ],
  },
  real_examples: {
    title: 'Exemple réel — Terrassements d’une déviation routière',
    examples: [
      {
        context: 'Déviation de 6 km, 300 000 m³ de déblais limono-argileux',
        scenario: "Le classement GTR montre des sols A2 avec des teneurs en eau supérieures à l'optimum (état humide). Sans traitement, 60 % des déblais seraient évacués et remplacés par des matériaux d'apport.",
        decomposition_latex: "A2_h + \\text{chaux vive } (1{,}5\\,\\%) \\Rightarrow \\text{séchage et floculation} \\Rightarrow \\text{réemploi en remblai}",
        lesson: "Le traitement à la chaux a permis de réemployer la quasi-totalité des déblais, réduisant les coûts et les camions sur les routes.",
      },
    ],
  },
  diagrams: {
    title: 'Schéma de principe — Démarche d’identification',
    diagram_description: [
      'Reconnaissance : sondages, puits, prélèvements intacts et remaniés',
      'Paramètres d’état : w, ρ, ρ_d, e, S_r',
      'Nature : granulométrie, passant à 80 µm, Atterberg, VBS',
      'Classification : GTR (terrassements) ou USCS',
      'Essais en place : pressiomètre (E_M, p_l), CPT (q_c), SPT',
      'Modèle géotechnique : couches, nappe, paramètres de calcul',
    ],
  },
  mistakes: {
    items: [
      ['Rapporter la teneur en eau à la masse humide', 'w sous-estimée', 'Toujours diviser par la masse sèche.'],
      ['Confondre ρ et ρ_d', "Indice des vides faux", 'Calculer ρ_d = ρ / (1 + w) avant e.'],
      ['Classer un sol sur un seul échantillon', 'Variabilité ignorée', 'Multiplier les essais par couche et par zone.'],
    ],
  },
  tips: {
    tips: [
      "Sur chantier, le test « au rouleau » donne une idée de la plasticité : plus le boudin de sol est fin sans se casser, plus l'argile est plastique.",
      'La valeur au bleu (VBS) est rapide et bien adaptée au classement GTR des sols peu plastiques.',
      'Stockez les échantillons intacts à l’abri de la dessiccation (paraffinage).',
      "Reportez toutes les données sur des coupes de sondages pour visualiser la stratigraphie.",
    ],
  },
  norms: {
    norms: [
      ['NF P 11-300', 'Classification des matériaux utilisables dans la construction des remblais et couches de forme (GTR).'],
      ['NF EN ISO 17892', "Essais de laboratoire sur les sols (teneur en eau, masse volumique, limites d'Atterberg)."],
      ['NF EN ISO 14688', 'Identification et classification des sols.'],
      ['NF EN ISO 22476-4', 'Essai pressiométrique Ménard.'],
      ['NF P 94-500', 'Missions d’ingénierie géotechnique (G1 à G5).'],
    ],
  },
  exercises: {
    exercises: [
      {
        level: 1,
        text: 'Un échantillon pèse 212 g humide et 178 g sec. Calculer w.',
        hint: 'w = (m_h − m_s) / m_s.',
        answer_latex: "w = \\frac{212 - 178}{178} = 0{,}191 = 19{,}1\\,\\%",
        answer_text: 'w ≈ 19 %.',
      },
      {
        level: 2,
        text: 'Un sable a ρ = 1,95 t/m³, w = 12 %, ρ_s = 2,65 t/m³. Calculer ρ_d, e et S_r.',
        hint: 'ρ_d = ρ / (1 + w).',
        answer_latex: "\\rho_d = \\frac{1{,}95}{1{,}12} = 1{,}74 \\quad e = \\frac{2{,}65}{1{,}74} - 1 = 0{,}523 \\quad S_r = \\frac{0{,}12 \\times 2{,}65}{0{,}523} = 0{,}61",
        answer_text: 'ρ_d ≈ 1,74 t/m³ ; e ≈ 0,52 ; S_r ≈ 61 %.',
      },
      {
        level: 3,
        text: "Un limon a w_L = 32 % et w_P = 24 %. Calculer I_P, situer le sol par rapport à la ligne A et donner sa classe GTR.",
        hint: 'Ligne A : 0,73 (w_L − 20).',
        answer_latex: "I_P = 8\\,\\% \\qquad I_{P,A} = 0{,}73 \\times 12 = 8{,}8\\,\\% > 8 \\Rightarrow \\text{limon (ML)} \\qquad I_P \\le 12 \\Rightarrow A1",
        answer_text: 'Limon peu plastique (ML), classe GTR A1.',
      },
    ],
  },
  quiz: {
    title: 'Quiz — Identification des sols',
    questions: [
      { q: 'À quoi se rapporte la teneur en eau ?', options: ['À la masse humide', 'À la masse sèche', 'Au volume total'], correct: 1, explain: 'w = masse d’eau / masse des grains secs.' },
      { q: "Comment calcule-t-on l'indice de plasticité ?", options: ['w_L + w_P', 'w_L − w_P', 'w_P / w_L'], correct: 1, explain: 'I_P = w_L − w_P.' },
      { q: 'Que mesure le pressiomètre Ménard ?', options: ['La teneur en eau', 'Un module et une pression limite', 'La perméabilité'], correct: 1, explain: 'E_M (déformabilité) et p_l (résistance), utilisés pour les fondations.' },
    ],
  },
  exam_questions: {
    questions: [
      'Établissez les relations entre w, ρ, ρ_d, e et S_r à partir du schéma à trois phases.',
      "Décrivez les limites d'Atterberg, leur mesure et leur usage dans la classification GTR.",
      'Proposez une campagne de reconnaissance pour un bâtiment R+5 sur un site argileux.',
    ],
  },
  interview_questions: {
    questions: [
      ['Pourquoi traite-t-on certains sols à la chaux ?', "Pour assécher les sols fins trop humides (la chaux vive consomme l'eau), modifier leur plasticité et améliorer leur portance ; on peut ainsi les réemployer en remblai ou en couche de forme au lieu de les évacuer."],
      ['Quelle différence entre un essai en laboratoire et un essai en place ?', "Le laboratoire mesure précisément des paramètres sur un petit échantillon parfois remanié ; l'essai en place teste un volume plus grand dans son état naturel, mais avec des paramètres plus globaux."],
    ],
  },
  practical_case: {
    title: 'Cas pratique — Réemploi des déblais d’un lotissement',
    scenario: "Déblais limoneux : w_L = 38 %, w_P = 22 %, teneur en eau naturelle w = 26 %, optimum Proctor w_OPN = 17 %.",
    description: 'Classer le sol, évaluer son état hydrique et proposer une solution de réemploi.',
    resolutions: [
      "I_P = 38 - 22 = 16\\,\\% \\Rightarrow A2",
      "\\frac{w}{w_{OPN}} = \\frac{26}{17} = 1{,}53 \\Rightarrow \\text{état humide à très humide}",
      "I_C = \\frac{38 - 26}{16} = 0{,}75 \\Rightarrow \\text{consistance ferme, traitement à la chaux (1 à 2 \\%) pour assécher}",
    ],
    conclusion: 'Sol A2 humide : réemploi possible en remblai après traitement à la chaux vive et aération ; en période pluvieuse, prévoir un stockage protégé.',
  },
  summary: {
    content: `### L'identification des sols en 5 points
1. Trois phases : grains, eau, air.
2. $w$, $\\rho_d = \\rho/(1+w)$, $e = \\rho_s/\\rho_d - 1$, $S_r$.
3. Atterberg : $I_P = w_L - w_P$, $I_C = (w_L - w)/I_P$.
4. GTR : A1 à A4 selon $I_P$ pour les sols fins.
5. Essais en place : pressiomètre ($E_M$, $p_l$), CPT, SPT.`,
  },
  key_points: {
    points: [
      'w rapportée à la masse sèche',
      'ρ_d = ρ / (1 + w)',
      'I_P = w_L − w_P ; I_C = (w_L − w) / I_P',
      'GTR : A1 ≤ 12 < A2 ≤ 25 < A3 ≤ 40 < A4',
      'Pressiomètre : E_M et p_l',
    ],
  },
  self_assessment: {
    objectives: [
      "Je sais calculer les paramètres d'état d'un sol",
      "Je sais interpréter les limites d'Atterberg",
      'Je sais classer un sol fin selon le GTR',
      'Je connais les principaux essais en place',
      "J'ai réussi le quiz avec au moins 2 bonnes réponses sur 3",
    ],
  },
});
