// ── Lesson: Besoins en eau des cultures et irrigation — Module 47 ─────────────
import { buildLesson } from './build_lesson.js';

export const lesson_irrigation_besoins = buildLesson({
  moduleId: 47,
  slug: 'irrigation_besoins',
  lessonIndex: 1,
  title: "Besoins en Eau des Cultures & Dimensionnement d'un Réseau d'Irrigation",
  subtitle: 'Module 47 — Hydraulique agricole : irrigation & drainage',
  level: 'Intermédiaire',
  duration: '8h',
  tags: ['Irrigation', 'Évapotranspiration', 'Kc', 'Réserve utile', 'Débit fictif continu', 'Efficience', 'FAO-56'],
}, {
  definition: {
    title: "Définition — Apporter à la plante l'eau que la pluie ne fournit pas",
    fr: 'Irrigation (hydraulique agricole)',
    en: 'Irrigation engineering',
    metier: "Utilisée par les ingénieurs du génie rural, les bureaux d'études en aménagements hydro-agricoles, les sociétés d'aménagement régional et les projets de développement agricole.",
    content: `L'**irrigation** apporte artificiellement de l'eau aux cultures pour compenser le déficit entre leurs besoins et les pluies. Le projet suit une logique simple :
1. **Combien d'eau** la culture consomme-t-elle ? (évapotranspiration)
2. **Combien la pluie et le sol en fournissent-ils ?**
3. **Quel débit** faut-il amener, avec quelles pertes ?
4. **Quand et en quelle quantité** irriguer ? (dose et fréquence)

### Les trois grandes techniques
- **Gravitaire** (à la raie, par bassins) : simple mais peu efficiente (50 à 70 %).
- **Aspersion** (canons, pivots, couverture intégrale) : efficience de 70 à 85 %.
- **Localisée** (goutte-à-goutte, micro-aspersion) : 85 à 95 %, idéale quand l'eau est rare.

> 💡 L'agriculture irriguée consomme environ 70 % de l'eau prélevée dans le monde : chaque point d'efficience compte.`,
  },
  importance: {
    content: `- **Sécurité alimentaire** : 20 % des terres cultivées sont irriguées mais produisent environ 40 % de la nourriture mondiale.
- **Ressource** : un réseau mal dimensionné gaspille l'eau ou ne satisfait pas les besoins de pointe.
- **Coût** : pompes, conduites et énergie sont dimensionnés sur le débit de pointe du mois le plus sec.
- **Sols** : une irrigation excessive sans drainage provoque engorgement et salinisation.

> ⚠️ **À retenir** : le réseau se dimensionne sur les besoins du **mois de pointe**, pas sur la moyenne annuelle.`,
  },
  applications: {
    examples: [
      ['Périmètre irrigué', 'Canal principal, canaux secondaires et prises parcellaires dimensionnés sur le débit fictif continu.'],
      ['Pivot central', 'Arrosage de 50 à 100 ha de maïs par une rampe tournante alimentée sous pression.'],
      ['Verger en goutte-à-goutte', 'Économie d’eau et fertirrigation en climat méditerranéen.'],
      ['Riziculture', 'Submersion des casiers et gestion des niveaux d’eau.'],
      ['Retenue collinaire', 'Stockage des eaux d’hiver pour l’irrigation d’été.'],
    ],
  },
  theory: {
    title: "Théorie — De l'évapotranspiration au débit de projet",
    content: `### 1. Évapotranspiration de référence $ET_0$
C'est l'eau consommée par un gazon de référence bien alimenté. Elle dépend du climat (rayonnement, température, humidité, vent). La méthode de référence est Penman-Monteith (FAO-56) ; à défaut, la formule de **Hargreaves** utilise seulement les températures :
$$ET_0 = 0{,}0023 \\cdot R_a \\cdot (T_{moy} + 17{,}8) \\cdot \\sqrt{T_{max} - T_{min}}$$

### 2. Besoin de la culture
$$ET_c = K_c \\cdot ET_0$$
Le **coefficient cultural** $K_c$ varie avec le stade : faible à la levée (0,3 à 0,5), maximal en pleine croissance (1,0 à 1,2), plus faible à maturité.

### 3. Besoins nets et bruts
- Besoin net : $B_n = ET_c - P_{eff}$ (pluie efficace déduite).
- Besoin brut : $B_b = B_n / \\eta$ avec $\\eta$ l'efficience globale du système.

### 4. Débit fictif continu
Un besoin de 1 mm/j sur 1 ha représente 10 m³/j, soit **0,116 L/s/ha** en continu. Si l'on n'irrigue que $T$ heures par jour, le débit est majoré du rapport $24/T$.

### 5. Réserve du sol et fréquence
La **réserve utile** est l'eau que le sol retient entre la capacité au champ et le point de flétrissement : $RU = (\\theta_{cc} - \\theta_{pf}) \\cdot Z$. On irrigue lorsque la plante a consommé la **réserve facilement utilisable** $RFU = p \\cdot RU$ (p ≈ 0,5).`,
  },
  formulas: {
    title: 'Formules essentielles — Besoins en eau et irrigation',
    formulas: [
      {
        name: 'Évapotranspiration de référence (Hargreaves)',
        latex: "ET_0 = 0{,}0023 \\cdot R_a \\cdot (T_{moy} + 17{,}8) \\cdot \\sqrt{T_{max} - T_{min}}",
        description: 'Méthode simplifiée quand seules les températures sont disponibles.',
        vars: [
          ['ET_0', 'Évapotranspiration de référence', 'mm/j', 'Gazon de référence bien alimenté.'],
          ['R_a', 'Rayonnement extraterrestre', 'mm/j', 'Exprimé en équivalent d’évaporation, tables FAO selon latitude et mois.'],
          ['T_{moy}, T_{max}, T_{min}', 'Températures de l’air', '°C', 'Moyennes mensuelles.'],
        ],
      },
      {
        name: 'Besoin en eau de la culture',
        latex: "ET_c = K_c \\cdot ET_0",
        description: 'Évapotranspiration d’une culture bien alimentée en eau.',
        vars: [
          ['ET_c', 'Évapotranspiration de la culture', 'mm/j', 'Consommation réelle de la culture.'],
          ['K_c', 'Coefficient cultural', '-', 'Maïs en pleine croissance ≈ 1,20 ; tomate ≈ 1,15.'],
        ],
      },
      {
        name: 'Besoin brut d’irrigation',
        latex: "B_b = \\frac{ET_c - P_{eff}}{\\eta}",
        description: 'Quantité d’eau à prélever pour couvrir le besoin net malgré les pertes.',
        vars: [
          ['B_b', 'Besoin brut', 'mm/j', 'Ramené à la journée ou au mois.'],
          ['P_{eff}', 'Pluie efficace', 'mm/j', 'Part de la pluie réellement utilisée par la culture.'],
          ['\\eta', 'Efficience globale', '-', 'Gravitaire 0,5-0,7 ; aspersion 0,7-0,85 ; goutte-à-goutte 0,85-0,95.'],
        ],
      },
      {
        name: 'Débit fictif continu et débit de projet',
        latex: "q_{fc} = 0{,}116 \\cdot B_b \\qquad Q = q_{fc} \\cdot A \\cdot \\frac{24}{T}",
        description: '1 mm/j sur 1 ha = 10 m³/j = 0,116 L/s en continu.',
        vars: [
          ['q_{fc}', 'Débit fictif continu', 'L/s/ha', 'Débit nécessaire en arrosant 24 h/24.'],
          ['Q', 'Débit de projet', 'L/s', 'Débit à amener en tête de réseau.'],
          ['A', 'Surface irriguée', 'ha', 'Surface nette.'],
          ['T', "Durée d'irrigation journalière", 'h', 'Par exemple 18 à 22 h.'],
        ],
        rule: "Repère : un besoin brut de 8 à 9 mm/j correspond à environ 1 L/s/ha en continu.",
      },
      {
        name: 'Réserve utile et intervalle entre irrigations',
        latex: "RU = (\\theta_{cc} - \\theta_{pf}) \\cdot Z \\qquad I = \\frac{p \\cdot RU}{ET_c}",
        description: 'Quantité d’eau mobilisable dans la zone racinaire et fréquence d’arrosage.',
        vars: [
          ['RU', 'Réserve utile', 'mm', 'Eau retenue utilisable par la plante.'],
          ['\\theta_{cc}, \\theta_{pf}', 'Teneurs en eau volumiques', '-', 'Capacité au champ et point de flétrissement.'],
          ['Z', 'Profondeur racinaire', 'mm', '600 à 1 200 mm selon la culture.'],
          ['p', 'Fraction facilement utilisable', '-', '≈ 0,5.'],
          ['I', 'Intervalle entre irrigations', 'j', 'Arrondi au jour inférieur.'],
        ],
      },
    ],
  },
  stepbystep: {
    title: 'Calcul complet — Périmètre de 50 ha de maïs',
    problem: "Au mois de pointe, ET₀ = 6,0 mm/j, K_c = 1,1, pluie efficace nulle. Irrigation par aspersion (η = 0,75) pendant 20 h/j. Calculer le débit de projet pour 50 ha.",
    steps_demo: [
      { n: 1, text: "Besoin de la culture : ET_c = 1,1 × 6,0 = 6,6 mm/j." },
      { n: 2, text: "Besoin brut : B_b = 6,6 / 0,75 = 8,8 mm/j." },
      { n: 3, text: "Débit fictif continu : q_fc = 0,116 × 8,8 = 1,02 L/s/ha." },
      { n: 4, text: "Majoration pour 20 h/j : 1,02 × 24 / 20 = 1,22 L/s/ha." },
      { n: 5, text: "Débit de projet : Q = 1,22 × 50 = 61 L/s (220 m³/h)." },
      { n: 6, text: "Volume journalier prélevé : 8,8 mm × 50 ha × 10 = 4 400 m³/j." },
    ],
    result_latex: "ET_c = 6{,}6\\ \\text{mm/j} \\quad B_b = 8{,}8\\ \\text{mm/j} \\quad Q = 0{,}116 \\times 8{,}8 \\times 50 \\times \\frac{24}{20} = 61\\ \\text{L/s}",
  },
  units: {
    table: [
      ['Lame d’eau', 'mm', 'in', '1 mm sur 1 ha = 10 m³'],
      ['Débit spécifique', 'L/s/ha', 'gpm/acre', '1 L/s/ha = 6,4 gpm/acre'],
      ['Débit', 'L/s, m³/h', 'gpm', '1 L/s = 3,6 m³/h'],
      ['Teneur en eau', 'm³/m³ ou %', '-', 'θ = 0,30 → 300 mm d’eau par mètre de sol'],
      ['Évapotranspiration', 'mm/j', 'in/day', '1 in = 25,4 mm'],
    ],
    note: "Pensez en lames d'eau (mm) : 1 mm d'eau sur 1 m² = 1 litre, sur 1 ha = 10 m³.",
  },
  hypotheses: {
    items: [
      ['info', 'K_c et ET₀ sont des valeurs moyennes ; en pointe climatique, les besoins réels peuvent dépasser les moyennes mensuelles.'],
      ['info', "L'efficience globale combine les pertes de transport, de distribution et d'application à la parcelle."],
      ['warning', 'En climat aride, prévoir une fraction de lessivage pour éviter l’accumulation des sels dans le sol.'],
      ['warning', 'La pluie efficace n’est qu’une partie de la pluie tombée : ruissellement et percolation profonde ne profitent pas à la culture.'],
      ['tip', 'Des sondes tensiométriques ou capacitives permettent de piloter l’irrigation sur l’état réel du sol.'],
    ],
  },
  simple_examples: {
    examples: [
      {
        title: 'Exemple 1 : ET₀ par Hargreaves',
        given: 'R_a = 16 mm/j, T_moy = 25 °C, T_max = 33 °C, T_min = 17 °C',
        find: 'ET₀',
        solution_latex: "ET_0 = 0{,}0023 \\times 16 \\times (25 + 17{,}8) \\times \\sqrt{16} = 0{,}0023 \\times 16 \\times 42{,}8 \\times 4 = 6{,}3\\ \\text{mm/j}",
        result: 'ET₀ ≈ 6,3 mm/j.',
      },
      {
        title: 'Exemple 2 : réserve utile',
        given: 'θcc = 0,30, θpf = 0,15, profondeur racinaire 600 mm, p = 0,5',
        find: 'RU et RFU',
        solution_latex: "RU = (0{,}30 - 0{,}15) \\times 600 = 90\\ \\text{mm} \\qquad RFU = 0{,}5 \\times 90 = 45\\ \\text{mm}",
        result: 'RU = 90 mm ; RFU = 45 mm.',
      },
      {
        title: 'Exemple 3 : intervalle d’irrigation',
        given: 'RFU = 45 mm, ET_c = 6,6 mm/j',
        find: 'L’intervalle entre deux arrosages',
        solution_latex: "I = \\frac{45}{6{,}6} = 6{,}8 \\Rightarrow 6\\ \\text{jours}",
        result: 'Arroser tous les 6 jours avec une dose nette de 6 × 6,6 ≈ 40 mm.',
      },
    ],
  },
  real_examples: {
    title: 'Exemple réel — Conversion d’un périmètre gravitaire au goutte-à-goutte',
    examples: [
      {
        context: 'Périmètre de 500 ha d’arboriculture en climat semi-aride',
        scenario: "Le passage du gravitaire (η = 0,55) au goutte-à-goutte (η = 0,90) pour un besoin net de pointe de 6 mm/j réduit fortement le prélèvement en rivière.",
        decomposition_latex: "B_b : \\frac{6}{0{,}55} = 10{,}9 \\rightarrow \\frac{6}{0{,}90} = 6{,}7\\ \\text{mm/j} \\quad (-39\\,\\%)",
        lesson: "L'économie d'eau est importante, mais le goutte-à-goutte exige une filtration soignée, une pression stable et un entretien régulier des goutteurs.",
      },
    ],
  },
  diagrams: {
    title: 'Schéma de principe — Calcul des besoins d’un périmètre',
    diagram_description: [
      'Climat : ET₀ du mois de pointe (Penman-Monteith ou Hargreaves)',
      'Culture : ET_c = K_c · ET₀ selon le stade',
      'Pluie : déduction de la pluie efficace → besoin net',
      'Pertes : division par l’efficience du système → besoin brut',
      'Débit : q_fc = 0,116 · B_b puis majoration 24/T et surface',
      'Sol : RU, RFU, dose et intervalle entre irrigations',
    ],
  },
  mistakes: {
    items: [
      ['Dimensionner sur le besoin annuel moyen', 'Réseau insuffisant au mois de pointe', 'Utiliser l’ET_c du mois le plus exigeant.'],
      ['Oublier l’efficience', 'Débit sous-estimé de 15 à 50 %', 'Diviser le besoin net par l’efficience du système.'],
      ['Irriguer 24 h/24 sur le papier', 'Aucune marge pour les pannes et la maintenance', 'Prévoir une durée d’irrigation de 18 à 22 h et majorer le débit.'],
    ],
  },
  tips: {
    tips: [
      'Retenez : 8,6 mm/j ≈ 1 L/s/ha en continu.',
      'Le logiciel CROPWAT de la FAO automatise le calcul des besoins mensuels.',
      'Irriguez la nuit en aspersion : moins d’évaporation et de dérive par le vent.',
      'Un compteur par prise parcellaire responsabilise les irrigants et facilite la gestion collective.',
    ],
  },
  norms: {
    norms: [
      ['FAO-56 (Allen et al., 1998)', 'Méthode de référence de calcul de l’évapotranspiration et des coefficients culturaux.'],
      ['FAO-24 / FAO-33', 'Besoins en eau des cultures et réponse des rendements à l’eau.'],
      ['NF EN 12324', 'Matériel d’irrigation : systèmes d’arrosage par enrouleur.'],
      ["Code de l'environnement", 'Autorisation des prélèvements d’eau et gestion quantitative de la ressource.'],
    ],
  },
  exercises: {
    exercises: [
      {
        level: 1,
        text: 'ET₀ = 5 mm/j et K_c = 1,15. Calculer ET_c et le besoin brut en goutte-à-goutte (η = 0,9).',
        hint: 'B_b = ET_c / η.',
        answer_latex: "ET_c = 5{,}75\\ \\text{mm/j} \\qquad B_b = \\frac{5{,}75}{0{,}9} = 6{,}4\\ \\text{mm/j}",
        answer_text: 'ET_c = 5,75 mm/j ; B_b ≈ 6,4 mm/j.',
      },
      {
        level: 2,
        text: 'Calculer le débit de projet pour 30 ha avec B_b = 6,4 mm/j et 22 h d’irrigation par jour.',
        hint: 'Q = 0,116 × B_b × A × 24 / T.',
        answer_latex: "Q = 0{,}116 \\times 6{,}4 \\times 30 \\times \\frac{24}{22} = 24{,}3\\ \\text{L/s}",
        answer_text: 'Q ≈ 24 L/s.',
      },
      {
        level: 3,
        text: 'Un sol a θcc = 0,28 et θpf = 0,12 ; profondeur racinaire 800 mm ; p = 0,5 ; ET_c = 7 mm/j. Calculer RU, RFU, l’intervalle et la dose brute en aspersion (η = 0,75).',
        hint: 'Dose brute = RFU / η.',
        answer_latex: "RU = 0{,}16 \\times 800 = 128\\ \\text{mm} \\quad RFU = 64\\ \\text{mm} \\quad I = \\frac{64}{7} = 9{,}1 \\Rightarrow 9\\ \\text{j} \\quad D_b = \\frac{9 \\times 7}{0{,}75} = 84\\ \\text{mm}",
        answer_text: 'RU = 128 mm ; RFU = 64 mm ; irrigation tous les 9 jours avec une dose brute de 84 mm.',
      },
    ],
  },
  quiz: {
    title: 'Quiz — Irrigation',
    questions: [
      { q: 'Que représente le coefficient cultural K_c ?', options: ['La pluie efficace', 'Le rapport ET_c / ET₀', 'L’efficience du réseau'], correct: 1, explain: 'K_c ajuste l’évapotranspiration de référence à la culture et à son stade.' },
      { q: '1 mm d’eau apporté sur 1 ha représente…', options: ['1 m³', '10 m³', '100 m³'], correct: 1, explain: '0,001 m × 10 000 m² = 10 m³.' },
      { q: 'Quelle technique a la meilleure efficience ?', options: ['Gravitaire', 'Aspersion', 'Goutte-à-goutte'], correct: 2, explain: 'L’irrigation localisée atteint 85 à 95 %.' },
    ],
  },
  exam_questions: {
    questions: [
      'Définissez ET₀, ET_c et K_c ; expliquez comment K_c évolue au cours du cycle cultural.',
      'Calculez le débit de projet d’un périmètre irrigué à partir des données climatiques du mois de pointe.',
      'Comparez les techniques d’irrigation en termes d’efficience, de coût et de contraintes.',
    ],
  },
  interview_questions: {
    questions: [
      ['Comment réduiriez-vous la consommation d’eau d’un périmètre existant ?', "Réduire les pertes de transport (canaux revêtus ou conduites), passer à l'aspersion ou au goutte-à-goutte, piloter l'irrigation par sondes et prévisions météo, adapter les cultures et les assolements, et compter l'eau à la parcelle."],
      ['Pourquoi le drainage est-il souvent associé à l’irrigation ?', "Parce qu'un apport excessif fait remonter la nappe et concentre les sels en surface ; le drainage évacue l'excédent et permet le lessivage des sels."],
    ],
  },
  practical_case: {
    title: 'Cas pratique — Pompage pour un pivot',
    scenario: 'Un pivot irrigue 60 ha de maïs. Mois de pointe : ET₀ = 6,5 mm/j, K_c = 1,2, pluie efficace 0,5 mm/j, efficience 0,85, fonctionnement 22 h/j.',
    description: 'Calculer le débit de la station de pompage.',
    resolutions: [
      "ET_c = 1{,}2 \\times 6{,}5 = 7{,}8\\ \\text{mm/j} \\qquad B_n = 7{,}8 - 0{,}5 = 7{,}3\\ \\text{mm/j}",
      "B_b = \\frac{7{,}3}{0{,}85} = 8{,}6\\ \\text{mm/j}",
      "Q = 0{,}116 \\times 8{,}6 \\times 60 \\times \\frac{24}{22} = 65{,}3\\ \\text{L/s} \\approx 235\\ \\text{m}^3/\\text{h}",
    ],
    conclusion: 'La station de pompage doit fournir environ 65 L/s (235 m³/h) à la pression requise par le pivot ; le volume journalier prélevé atteint environ 5 200 m³.',
  },
  summary: {
    content: `### L'irrigation en 5 points
1. $ET_c = K_c \\cdot ET_0$ au mois de pointe.
2. Besoin brut : $B_b = (ET_c - P_{eff}) / \\eta$.
3. Débit : $q_{fc} = 0{,}116 B_b$ (L/s/ha), majoré de $24/T$.
4. Sol : $RU = (\\theta_{cc} - \\theta_{pf}) Z$ et $RFU = p \\cdot RU$.
5. Efficience : gravitaire < aspersion < goutte-à-goutte.`,
  },
  key_points: {
    points: [
      'ET_c = K_c · ET₀',
      '1 mm sur 1 ha = 10 m³',
      '1 mm/j continu = 0,116 L/s/ha',
      'Efficience : 0,5-0,7 / 0,7-0,85 / 0,85-0,95',
      'Intervalle = RFU / ET_c',
    ],
  },
  self_assessment: {
    objectives: [
      'Je sais calculer les besoins en eau d’une culture',
      'Je sais passer du besoin net au besoin brut',
      'Je sais calculer le débit de projet d’un périmètre',
      'Je sais déterminer la dose et la fréquence d’irrigation',
      "J'ai réussi le quiz avec au moins 2 bonnes réponses sur 3",
    ],
  },
});
