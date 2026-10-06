// ── Lesson: Chauffage et ventilation — Module 44 ─────────────────────────────
import { buildLesson } from './build_lesson.js';

export const lesson_equipements_chauffage = buildLesson({
  moduleId: 44,
  slug: 'equipements_chauffage',
  lessonIndex: 2,
  title: "Chauffage et Ventilation : Puissance de Chauffage, Émetteurs, Pompe à Chaleur, Débits de VMC et Double Flux",
  subtitle: 'Module 44 — Équipements techniques du bâtiment (fluides)',
  level: 'Intermédiaire',
  duration: '5h',
  diagramType: 'none',
  tags: ['Chauffage', 'Déperditions', 'Radiateur', 'Plancher chauffant', 'Pompe à chaleur', 'COP', 'VMC', 'Double flux'],
}, {
  definition: {
    title: 'Définition — Produire, distribuer, émettre la chaleur et renouveler l’air',
    fr: 'Chauffage et ventilation',
    en: 'Heating and ventilation',
    metier: "Concerne les ingénieurs et techniciens CVC (chauffage, ventilation, climatisation), thermiciens et installateurs.",
    content: `Une installation de chauffage comprend trois fonctions :
1. **Production** : chaudière, pompe à chaleur (PAC), réseau de chaleur, poêle.
2. **Distribution** : réseau d'eau chaude (ou d'air), circulateur, vannes, régulation.
3. **Émission** : radiateurs, plancher chauffant, ventilo-convecteurs.

La **ventilation** renouvelle l'air pour évacuer l'humidité, le CO₂ et les polluants :
- **VMC simple flux** : extraction dans les pièces humides (cuisine, salle de bain, WC), entrées d'air dans les pièces de vie.
- **VMC double flux** : insufflation et extraction, avec un **échangeur** qui récupère la chaleur de l'air extrait.

> 💡 La puissance de chauffage se dimensionne pour la **température extérieure de base** du site (par exemple −7 °C), pas pour une journée moyenne.`,
  },
  importance: {
    content: `- **Confort** : une installation sous-dimensionnée ne chauffe pas par grand froid ; surdimensionnée, elle fonctionne mal (cycles courts).
- **Énergie** : chauffage et eau chaude représentent la majorité des consommations d'un logement.
- **Santé** : sans ventilation, humidité, moisissures et polluants s'accumulent.
- **Réglementation** : débits minimaux de ventilation, performances RE2020.

> ⚠️ **À retenir** : une PAC fonctionne d'autant mieux que l'eau qu'elle produit est tiède : émetteurs basse température et bonne isolation vont ensemble.`,
  },
  applications: {
    examples: [
      ['Maison neuve', 'PAC air-eau 6 kW et plancher chauffant basse température.'],
      ['Rénovation', 'Remplacement de chaudière fioul par PAC, radiateurs agrandis.'],
      ['Logements collectifs', 'Chaufferie gaz ou réseau de chaleur, VMC hygroréglable.'],
      ['Bureaux', 'Centrale de traitement d’air double flux avec récupération.'],
      ['École', 'Ventilation pilotée par le CO₂ des salles.'],
    ],
  },
  theory: {
    title: 'Théorie — Dimensionner chauffage et ventilation',
    content: `### 1. Puissance de chauffage
$$P = (H_T + H_V)\\,(T_i - T_{e,base})$$
$H_T$ : déperditions par les parois (W/K) ; $H_V = 0{,}34\\, n\\, V$ : déperditions par renouvellement d'air (W/K), $n$ en vol/h, $V$ en m³.

### 2. Émetteurs
La puissance d'un radiateur dépend de l'écart entre sa température moyenne et l'ambiance :
$$P = P_{nom} \\left(\\frac{\\Delta T}{50}\\right)^{1{,}3}$$
($P_{nom}$ donnée pour ΔT = 50 K). En basse température, il faut des émetteurs plus grands ou un plancher chauffant.

### 3. Débit d'eau dans le réseau
$$q_v = \\frac{P}{1{,}163\\, \\Delta T} \\quad [\\text{m}^3/\\text{h}, P \\text{ en kW}]$$

### 4. Pompe à chaleur
$$COP = \\frac{Q_{chaud}}{W_{élec}} \\qquad COP_{Carnot} = \\frac{T_c}{T_c - T_f}$$
(températures en kelvins). Plus l'écart de températures est faible, plus le COP est élevé.

### 5. Ventilation des logements (France)
Débits minimaux totaux (arrêté du 24 mars 1982) : T1 35, T2 60, T3 75, T4 90, T5 105 m³/h. Un échangeur double flux récupère 70 à 90 % de la chaleur de l'air extrait.`,
  },
  formulas: {
    title: 'Formules essentielles — Chauffage et ventilation',
    formulas: [
      { name: 'Puissance de chauffage', latex: "P = (H_T + H_V)(T_i - T_{e,base})", description: 'Puissance à installer par grand froid.', vars: [['H_T', 'Déperditions par les parois', 'W/K', ''], ['H_V', 'Déperditions par l’air', 'W/K', '0,34 n V.'], ['T_{e,base}', 'Température extérieure de base', '°C', '−7 °C par exemple.']] },
      { name: 'Puissance d’un radiateur', latex: "P = P_{nom}\\left(\\frac{\\Delta T}{50}\\right)^{1{,}3}", description: 'Correction pour un régime de température différent du nominal.', vars: [['\\Delta T', 'Écart température moyenne de l’eau – ambiance', 'K', '']] },
      { name: 'Débit d’eau', latex: "q_v = \\frac{P}{1{,}163\\, \\Delta T}", description: 'Débit dans le réseau de chauffage.', vars: [['q_v', 'Débit', 'm³/h', ''], ['P', 'Puissance', 'kW', ''], ['\\Delta T', 'Écart départ – retour', 'K', '5 à 20 K.']] },
      { name: 'Coefficient de performance', latex: "COP = \\frac{Q_{chaud}}{W_{élec}}", description: 'Chaleur fournie par kWh d’électricité.', vars: [['COP', 'Coefficient de performance', '-', '3 à 4,5 pour une PAC air-eau.']] },
      { name: 'Récupération d’un double flux', latex: "P_{récup} = 0{,}34\\, \\eta\\, \\dot V \\,(T_i - T_e)", description: 'Puissance récupérée par l’échangeur.', vars: [['\\eta', 'Efficacité de l’échangeur', '-', '0,7 à 0,9.'], ['\\dot V', 'Débit d’air', 'm³/h', '']] },
    ],
  },
  stepbystep: {
    title: 'Calcul complet — PAC et émetteurs d’une maison de 120 m²',
    problem: "Maison : H_T = 150 W/K, volume 300 m³, renouvellement 0,5 vol/h ; T_i = 19 °C, T_e,base = −7 °C. Calculer la puissance de chauffage, le débit d'eau pour un plancher chauffant (ΔT = 5 K), et la puissance nominale d'un radiateur qui doit fournir 800 W avec une eau à 40 °C de moyenne.",
    steps_demo: [
      { n: 1, text: "H_V = 0,34 × 0,5 × 300 = 51 W/K ; H = 150 + 51 = 201 W/K." },
      { n: 2, text: "P = 201 × (19 − (−7)) = 201 × 26 = 5 226 W ≈ 5,2 kW → PAC de 6 kW." },
      { n: 3, text: "Débit du plancher : q_v = 5,2 / (1,163 × 5) = 0,89 m³/h." },
      { n: 4, text: "Radiateur basse température : ΔT = 40 − 19 = 21 K → P = P_nom × (21/50)^1,3 = 0,32 P_nom." },
      { n: 5, text: "P_nom = 800 / 0,32 = 2 500 W : il faut un radiateur trois fois plus grand qu'en régime classique." },
    ],
    result_latex: "P = (150 + 51) \\times 26 = 5{,}2\\ \\text{kW} \\qquad q_v = \\frac{5{,}2}{1{,}163 \\times 5} = 0{,}89\\ \\text{m}^3/\\text{h}",
  },
  units: {
    table: [
      ['Puissance', 'kW', 'BTU/h', '1 kW = 3 412 BTU/h'],
      ['Déperditions', 'W/K', 'BTU/h·°F', '1 W/K = 1,90 BTU/h·°F'],
      ['Débit d’air', 'm³/h', 'cfm', '1 m³/h = 0,589 cfm'],
      ['Débit d’eau', 'm³/h', 'gpm', '1 m³/h = 4,40 gpm'],
      ['Énergie', 'kWh', 'therm', '1 therm = 29,3 kWh'],
    ],
    note: '0,34 Wh/m³K est la capacité thermique volumique de l’air ; 1,163 kWh/m³K celle de l’eau.',
  },
  hypotheses: {
    items: [
      ['info', 'Le calcul simplifié ne tient pas compte des apports gratuits ni de la relance : la norme NF EN 12831 détaille la méthode.'],
      ['info', 'Le COP réel varie selon la température extérieure ; on raisonne en performance saisonnière (SCOP).'],
      ['warning', 'Un réseau mal équilibré chauffe trop certaines pièces et pas assez d’autres.'],
      ['warning', 'Boucher les entrées d’air dégrade la qualité de l’air et favorise la condensation.'],
      ['tip', 'Abaissez la température de l’eau au strict nécessaire : chaque degré gagné améliore le COP.'],
    ],
  },
  simple_examples: {
    examples: [
      { title: 'Exemple 1 : COP', given: 'PAC fournissant 12 kWh de chaleur pour 3,5 kWh d’électricité', find: 'COP', solution_latex: "COP = \\frac{12}{3{,}5} = 3{,}4", result: '3,4.' },
      { title: 'Exemple 2 : débit VMC', given: 'Logement T4', find: 'Débit minimal total', solution_latex: "\\dot V_{min} = 90\\ \\text{m}^3/\\text{h}", result: '90 m³/h (arrêté de 1982).' },
      { title: 'Exemple 3 : récupération double flux', given: '150 m³/h, η = 0,85, 20 °C intérieur, 0 °C extérieur', find: 'Puissance récupérée', solution_latex: "P = 0{,}34 \\times 0{,}85 \\times 150 \\times 20 = 867\\ \\text{W}", result: '≈ 0,87 kW récupérés.' },
    ],
  },
  real_examples: {
    title: 'Exemple réel — PAC installée sans changer les radiateurs',
    examples: [
      {
        context: 'Rénovation d’une maison des années 1980 : chaudière fioul remplacée par une PAC air-eau',
        scenario: "Les anciens radiateurs, dimensionnés pour une eau à 70 °C, ont été conservés. Pour chauffer, la PAC devait produire de l'eau à 60–65 °C : COP réel proche de 2, appoint électrique fréquent et factures élevées. Après isolation des combles et ajout de radiateurs plus grands, la température d'eau a pu descendre à 45 °C et le COP saisonnier est remonté vers 3,5.",
        decomposition_latex: "T_{eau} \\uparrow \\Rightarrow COP \\downarrow \\qquad \\text{isolation} + \\text{émetteurs plus grands} \\Rightarrow T_{eau} \\downarrow \\Rightarrow COP \\uparrow",
        lesson: "Une PAC se conçoit avec le bâtiment et ses émetteurs : on réduit d'abord les besoins, puis on adapte les émetteurs à la basse température.",
      },
    ],
  },
  diagrams: {
    title: 'Schéma de principe — Installation de chauffage et ventilation',
    diagram_description: [
      'Besoins : déperditions par les parois et par l’air',
      'Production : PAC, chaudière ou réseau de chaleur',
      'Distribution : réseau d’eau, circulateur, régulation',
      'Émission : radiateurs ou plancher chauffant',
      'Ventilation : entrées d’air, extraction ou double flux',
      'Réglage, équilibrage et maintenance',
    ],
  },
  mistakes: {
    items: [
      ['Dimensionner sur la température moyenne d’hiver', 'Inconfort par grand froid', 'Utiliser la température de base du site.'],
      ['Oublier les déperditions par l’air', 'Puissance sous-estimée', 'Ajouter H_V = 0,34 n V.'],
      ['Radiateurs haute température avec une PAC', 'COP faible', 'Émetteurs basse température.'],
    ],
  },
  tips: {
    tips: [
      'Retenez : 0,34 pour l’air, 1,163 pour l’eau.',
      'Plancher chauffant : eau à 30–35 °C, idéal pour une PAC.',
      'Prévoyez des trappes d’accès pour l’entretien des filtres de VMC double flux.',
      'Faites équilibrer le réseau à la mise en service.',
    ],
  },
  norms: {
    norms: [
      ['NF EN 12831-1', 'Calcul de la charge thermique de conception (déperditions).'],
      ['Arrêté du 24 mars 1982 modifié', 'Aération des logements (débits).'],
      ['NF DTU 65.14', 'Planchers chauffants à eau chaude.'],
      ['NF DTU 68.3', 'Installations de ventilation mécanique.'],
      ['NF EN 14511 / 14825', 'Performances des pompes à chaleur (COP, SCOP).'],
    ],
  },
  exercises: {
    exercises: [
      { level: 1, text: 'Calculer H_V pour un logement de 200 m³ ventilé à 0,6 vol/h.', hint: '0,34 n V.', answer_latex: "H_V = 0{,}34 \\times 0{,}6 \\times 200 = 40{,}8\\ \\text{W/K}", answer_text: '40,8 W/K.' },
      { level: 2, text: 'H = 180 W/K, T_i = 20 °C, T_e,base = −10 °C. Quelle puissance ?', hint: 'P = H ΔT.', answer_latex: "P = 180 \\times 30 = 5\\,400\\ \\text{W}", answer_text: '5,4 kW.' },
      { level: 3, text: 'Calculer le COP de Carnot pour une eau à 35 °C et un air à 0 °C, puis pour une eau à 55 °C.', hint: 'Températures en K.', answer_latex: "\\frac{308}{35} = 8{,}8 \\qquad \\frac{328}{55} = 6{,}0", answer_text: 'COP théorique 8,8 puis 6,0 : produire plus chaud dégrade nettement la performance (les COP réels sont environ deux fois plus faibles).' },
    ],
  },
  quiz: {
    title: 'Quiz — Chauffage et ventilation',
    questions: [
      { q: 'Que mesure le COP d’une PAC ?', options: ['Sa puissance électrique', 'La chaleur fournie par unité d’électricité', 'Son bruit'], correct: 1, explain: 'COP = Q chaud / W électrique.' },
      { q: 'Avec quelle température dimensionne-t-on le chauffage ?', options: ['La moyenne de janvier', 'La température extérieure de base', 'La température de l’été'], correct: 1, explain: 'Elle représente les froids rares du site.' },
      { q: 'À quoi sert l’échangeur d’une VMC double flux ?', options: ['À filtrer seulement', 'À récupérer la chaleur de l’air extrait', 'À humidifier'], correct: 1, explain: 'Il préchauffe l’air neuf avec l’air extrait.' },
    ],
  },
  exam_questions: {
    questions: [
      'Calculez la puissance de chauffage d’un logement et choisissez une PAC.',
      'Expliquez pourquoi les émetteurs basse température conviennent aux PAC.',
      'Comparez VMC simple flux et double flux.',
    ],
  },
  interview_questions: {
    questions: [
      ['Comment dimensionnez-vous une PAC en rénovation ?', 'Je calcule les déperditions (NF EN 12831) après les travaux d’isolation prévus, je vérifie la température d’eau compatible avec les émetteurs et je choisis une puissance proche du besoin à la température de base, avec un appoint limité.'],
      ['Un logement a de la condensation : que vérifiez-vous côté ventilation ?', 'Les débits d’extraction réels, l’état des bouches et des entrées d’air, le fonctionnement du caisson et le détalonnage des portes.'],
    ],
  },
  practical_case: {
    title: 'Cas pratique — Ventilation d’un T4 en double flux',
    scenario: 'Logement T4 de 85 m² : débit de ventilation 120 m³/h, échangeur η = 0,85, saison de chauffe équivalente à 2 500 degrés-jours (base 18 °C).',
    description: 'Estimer l’énergie économisée par le double flux sur une saison.',
    resolutions: [
      "H_V = 0{,}34 \\times 120 = 40{,}8\\ \\text{W/K}",
      "E_{sans} = 40{,}8 \\times 2\\,500 \\times 24 / 1\\,000 = 2\\,448\\ \\text{kWh}",
      "E_{récupérée} = 0{,}85 \\times 2\\,448 = 2\\,081\\ \\text{kWh par saison}",
    ],
    conclusion: 'Le double flux récupère environ 2 000 kWh par saison ; il faut en déduire la consommation des ventilateurs (≈ 200 à 300 kWh) et prévoir l’entretien des filtres.',
  },
  summary: {
    content: `### Chauffage et ventilation en 5 points
1. $P = (H_T + 0{,}34 n V)(T_i - T_{e,base})$.
2. Émetteurs : $P = P_{nom}(\\Delta T/50)^{1{,}3}$ ; basse température = émetteurs plus grands.
3. Réseau : $q_v = P / (1{,}163 \\Delta T)$.
4. PAC : COP élevé si l'eau est tiède.
5. Ventilation : débits minimaux, double flux avec échangeur.`,
  },
  key_points: {
    points: ['P = H ΔT à T_e,base', 'H_V = 0,34 n V', 'q_v = P / (1,163 ΔT)', 'COP ↑ quand T_eau ↓', 'T4 : 90 m³/h minimum'],
  },
  self_assessment: {
    objectives: [
      'Je sais calculer une puissance de chauffage',
      'Je sais corriger la puissance d’un émetteur',
      'Je comprends le COP d’une pompe à chaleur',
      'Je connais les débits de ventilation et le double flux',
      "J'ai réussi le quiz avec au moins 2 bonnes réponses sur 3",
    ],
  },
});
