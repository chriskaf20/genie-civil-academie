// ── Lesson: Plomberie sanitaire — Module 44 ─────────────────────────────────
import { buildLesson } from './build_lesson.js';

export const lesson_plomberie = buildLesson({
  moduleId: 44,
  slug: 'plomberie',
  lessonIndex: 1,
  title: "Plomberie Sanitaire : Dimensionnement des Réseaux d'Eau, d'Eau Chaude & d'Évacuation",
  subtitle: 'Module 44 — Équipements techniques du bâtiment (fluides)',
  level: 'Intermédiaire',
  duration: '9h',
  tags: ['Plomberie', 'DTU 60.11', 'Coefficient de simultanéité', 'Eau chaude sanitaire', 'Évacuations', 'Pertes de charge'],
}, {
  definition: {
    title: "Définition — Amener l'eau et l'évacuer",
    fr: 'Plomberie sanitaire (distribution d’eau froide et chaude, évacuation des eaux usées et vannes)',
    en: 'Plumbing / domestic water and drainage',
    metier: "Utilisée par les bureaux d'études fluides, les plombiers-chauffagistes, les conducteurs de travaux tous corps d'état et les maîtres d'œuvre.",
    content: `La **plomberie sanitaire** regroupe trois réseaux :
1. **L'alimentation en eau froide** depuis le compteur jusqu'aux appareils ;
2. **La production et la distribution d'eau chaude sanitaire** (ECS) ;
3. **L'évacuation** des eaux usées (EU : lavabos, douches, éviers) et des eaux vannes (EV : WC) jusqu'au réseau public ou à l'assainissement individuel.

### L'idée clé du dimensionnement
Tous les robinets d'un bâtiment ne sont jamais ouverts en même temps. On applique donc au débit total un **coefficient de simultanéité** qui diminue quand le nombre d'appareils augmente.

> 💡 Un appartement compte environ 5 à 8 points de puisage, mais le débit de pointe réel ne dépasse guère celui de 2 ou 3 robinets ouverts ensemble.`,
  },
  importance: {
    content: `- **Confort** : un réseau sous-dimensionné donne des débits faibles et des variations de température désagréables sous la douche.
- **Hygiène** : l'eau chaude doit être maintenue à une température suffisante pour éviter la prolifération des légionelles.
- **Économie d'eau et d'énergie** : l'eau chaude sanitaire représente environ 15 à 20 % de la consommation d'énergie d'un logement.
- **Sinistres** : dégâts des eaux, odeurs et refoulements viennent souvent d'une mauvaise pente ou d'une ventilation des chutes absente.

> ⚠️ **À retenir** : en France, l'eau chaude doit être produite et stockée à au moins 55 °C dans les installations collectives pour limiter le risque de légionellose.`,
  },
  applications: {
    examples: [
      ['Logement collectif', 'Colonnes montantes eau froide et eau chaude, comptage individuel, chutes EU/EV ventilées en toiture.'],
      ['Maison individuelle', 'Ballon thermodynamique, distribution en pieuvre (nourrice) en multicouche, évacuations PVC vers le regard.'],
      ['Hôtel', 'Production d’ECS centralisée avec boucle de recirculation et maintien en température.'],
      ['Établissement de santé', 'Surveillance légionelles, mitigeurs thermostatiques au plus près des points de puisage.'],
      ['Bureaux', 'Réseau d’eau froide dimensionné sur les sanitaires et l’alimentation des équipements techniques.'],
    ],
  },
  theory: {
    title: "Théorie — Débits, simultanéité, diamètres et évacuations",
    content: `### 1. Débits de base des appareils (DTU 60.11)
Évier, lavabo, douche, lave-linge : 0,20 L/s ; baignoire : 0,33 L/s ; WC à réservoir : 0,12 L/s ; lave-vaisselle : 0,10 L/s.

### 2. Coefficient de simultanéité
Pour $x$ appareils desservis par un tronçon :
$$y = \\frac{0{,}8}{\\sqrt{x - 1}}$$
Le débit probable est $Q_p = y \\cdot \\sum q_b$.

### 3. Diamètre des canalisations
On limite la vitesse (bruit, coups de bélier, érosion) : environ 1,5 à 2 m/s en distribution intérieure.
$$d = \\sqrt{\\frac{4 Q}{\\pi v}}$$
Il faut ensuite vérifier que la pression disponible au point le plus défavorisé reste suffisante (au moins 1 bar environ) après les pertes de charge.

### 4. Eau chaude sanitaire
L'énergie pour chauffer un volume d'eau vaut $E = m \\cdot c \\cdot \\Delta\\theta$ avec $c$ = 4,18 kJ/kg·K ; en kWh : $E \\approx 1{,}16 \\times V \\times \\Delta\\theta / 1\\,000$ (V en litres).

### 5. Évacuations
Écoulement gravitaire à surface libre, pente de 1 à 3 cm/m pour les collecteurs horizontaux, chutes verticales **ventilées** en toiture pour éviter le désamorçage des siphons (odeurs).`,
  },
  formulas: {
    title: 'Formules essentielles — Plomberie',
    formulas: [
      {
        name: 'Coefficient de simultanéité (DTU 60.11)',
        latex: "y = \\frac{0{,}8}{\\sqrt{x - 1}} \\qquad Q_p = y \\cdot \\sum q_b",
        description: 'Applicable à partir de 2 appareils ; on retient au minimum le débit du plus gros appareil.',
        vars: [
          ['y', 'Coefficient de simultanéité', '-', 'Diminue quand le nombre d’appareils augmente.'],
          ['x', "Nombre d'appareils desservis", '-', 'Par le tronçon considéré.'],
          ['Q_p', 'Débit probable', 'L/s', 'Débit de dimensionnement du tronçon.'],
          ['q_b', 'Débit de base d’un appareil', 'L/s', '0,20 L/s pour la plupart des robinets.'],
        ],
        rule: "Pour 5 appareils, y = 0,40 : seulement 40 % du débit cumulé.",
      },
      {
        name: 'Diamètre intérieur d’une canalisation',
        latex: "d = \\sqrt{\\frac{4 Q}{\\pi v}}",
        description: 'Diamètre minimal pour ne pas dépasser la vitesse admissible.',
        vars: [
          ['d', 'Diamètre intérieur', 'm', 'Choisir le diamètre commercial immédiatement supérieur.'],
          ['Q', 'Débit', 'm³/s', '1 L/s = 0,001 m³/s.'],
          ['v', 'Vitesse admissible', 'm/s', '1,5 à 2 m/s en distribution.'],
        ],
      },
      {
        name: "Énergie de chauffage de l'eau chaude",
        latex: "E = \\frac{1{,}163 \\cdot V \\cdot (\\theta_c - \\theta_f)}{1\\,000}",
        description: "Énergie théorique, sans pertes de stockage ni de distribution.",
        vars: [
          ['E', 'Énergie', 'kWh', 'Énergie à fournir à l’eau.'],
          ['V', 'Volume d’eau chauffée', 'L', '≈ 50 L/personne/jour à 40 °C, soit environ 30 L à 60 °C.'],
          ['\\theta_c, \\theta_f', 'Températures chaude et froide', '°C', '60 °C et 10 °C par exemple.'],
        ],
      },
      {
        name: 'Puissance de mise en température d’un ballon',
        latex: "P = \\frac{E}{t}",
        description: 'Puissance nécessaire pour chauffer le volume du ballon en un temps donné.',
        vars: [
          ['P', 'Puissance', 'kW', 'Résistance électrique, échangeur ou PAC.'],
          ['t', 'Durée de chauffe', 'h', 'Par exemple 6 à 8 h en heures creuses.'],
        ],
      },
    ],
  },
  stepbystep: {
    title: 'Calcul complet — Alimentation en eau froide d’un appartement',
    problem: "Un appartement comprend un évier (0,20 L/s), un lavabo (0,20), une douche (0,20), un WC à réservoir (0,12) et un lave-linge (0,20). Calculer le débit probable et le diamètre de l'alimentation pour v = 1,5 m/s.",
    steps_demo: [
      { n: 1, text: "Débit cumulé : 0,20 + 0,20 + 0,20 + 0,12 + 0,20 = 0,92 L/s." },
      { n: 2, text: "Coefficient de simultanéité : y = 0,8 / √(5 − 1) = 0,8 / 2 = 0,40." },
      { n: 3, text: "Débit probable : Q_p = 0,40 × 0,92 = 0,37 L/s (supérieur au plus gros appareil, 0,20 L/s)." },
      { n: 4, text: "Section : A = 0,000 37 / 1,5 = 2,45 × 10⁻⁴ m²." },
      { n: 5, text: "Diamètre : d = √(4 × 2,45 × 10⁻⁴ / π) = 0,0177 m = 17,7 mm." },
      { n: 6, text: "Choix : tube cuivre 20 × 22 mm ou multicouche 20 × 26 mm (diamètre intérieur ≥ 17,7 mm)." },
    ],
    result_latex: "Q_p = \\frac{0{,}8}{\\sqrt{4}} \\times 0{,}92 = 0{,}37\\ \\text{L/s} \\qquad d = \\sqrt{\\frac{4 \\times 0{,}000\\,37}{\\pi \\times 1{,}5}} = 17{,}7\\ \\text{mm}",
  },
  units: {
    table: [
      ['Débit', 'L/s, m³/h', 'gpm', '1 L/s = 3,6 m³/h = 15,85 gpm (US)'],
      ['Pression', 'bar, kPa', 'psi', '1 bar = 100 kPa = 14,5 psi ≈ 10 m de colonne d’eau'],
      ['Diamètre de tube', 'mm', 'in', 'Cuivre 14/16, 16/18, 20/22 (intérieur / extérieur)'],
      ['Énergie', 'kWh', 'BTU', '1 kWh = 3 412 BTU ; 1,163 Wh pour chauffer 1 L de 1 °C'],
      ['Pente d’évacuation', 'cm/m, %', 'in/ft', '1 cm/m = 1 % ≈ 1/8 in/ft'],
    ],
    note: 'Pour les tubes, vérifiez toujours si la cote donnée est le diamètre intérieur ou extérieur : c’est l’intérieur qui compte pour le débit.',
  },
  hypotheses: {
    items: [
      ['info', 'Le coefficient de simultanéité du DTU 60.11 est adapté aux logements ; les établissements à usages simultanés (écoles, stades) demandent des coefficients spécifiques.'],
      ['info', 'Le calcul de diamètre par la vitesse doit être complété par une vérification des pertes de charge et de la pression au point le plus défavorisé.'],
      ['warning', 'Au-delà de 3 bars en sortie de compteur, un réducteur de pression est recommandé pour protéger les appareils et limiter le bruit.'],
      ['warning', "Une boucle d'eau chaude mal équilibrée crée des bras morts tièdes, favorables aux légionelles."],
      ['tip', 'Placez le ballon d’eau chaude au plus près des points de puisage les plus utilisés pour réduire l’attente et les pertes.'],
    ],
  },
  simple_examples: {
    examples: [
      {
        title: 'Exemple 1 : énergie d’un ballon de 200 L',
        given: 'V = 200 L, eau froide 10 °C, consigne 60 °C',
        find: 'L’énergie de chauffe',
        solution_latex: "E = \\frac{1{,}163 \\times 200 \\times (60 - 10)}{1\\,000} = 11{,}6\\ \\text{kWh}",
        result: '11,6 kWh, soit environ 1,9 kW pendant 6 heures creuses.',
      },
      {
        title: 'Exemple 2 : simultanéité d’une colonne de 10 logements',
        given: '10 logements de 5 appareils, débit cumulé 9,2 L/s',
        find: 'Le débit probable de la colonne',
        solution_latex: "y = \\frac{0{,}8}{\\sqrt{50 - 1}} = 0{,}114 \\qquad Q_p = 0{,}114 \\times 9{,}2 = 1{,}05\\ \\text{L/s}",
        result: '≈ 1,05 L/s pour la colonne (à comparer aux règles spécifiques des immeubles collectifs).',
      },
      {
        title: 'Exemple 3 : vitesse dans un tube',
        given: 'Q = 0,30 L/s dans un tube de diamètre intérieur 16 mm',
        find: 'La vitesse',
        solution_latex: "v = \\frac{4 \\times 0{,}000\\,30}{\\pi \\times 0{,}016^2} = 1{,}49\\ \\text{m/s}",
        result: 'v ≈ 1,5 m/s : acceptable.',
      },
    ],
  },
  real_examples: {
    title: 'Exemple réel — Légionelles dans un hôtel',
    examples: [
      {
        context: 'Hôtel de 80 chambres, production centralisée d’eau chaude à 50 °C',
        scenario: "Des analyses révèlent des légionelles au-delà du seuil en bout de réseau. La boucle de recirculation était déséquilibrée : certaines branches restaient entre 35 et 45 °C.",
        decomposition_latex: "\\theta_{retour} < 50\\ °C + \\text{bras morts} \\Rightarrow \\text{développement de Legionella}",
        lesson: 'Correctifs : production portée à 60 °C, équilibrage de la boucle (retour ≥ 50 °C), suppression des bras morts et choc thermique. Le maintien en température est une exigence de conception, pas seulement d’exploitation.',
      },
    ],
  },
  diagrams: {
    title: 'Schéma de principe — Réseaux sanitaires d’un bâtiment',
    diagram_description: [
      'Branchement : compteur, clapet anti-retour, réducteur de pression',
      'Distribution eau froide : colonne ou nourrice, diamètres selon Q_p',
      'Production ECS : ballon ou production instantanée, consigne ≥ 55 °C en collectif',
      'Distribution ECS : boucle de recirculation, mitigeurs aux points de puisage',
      'Évacuation : siphons, branchements, chutes ventilées en toiture',
      'Raccordement : regard de visite puis réseau public ou assainissement individuel',
    ],
  },
  mistakes: {
    items: [
      ['Additionner tous les débits sans simultanéité', 'Tubes surdimensionnés et coûteux', 'Appliquer y = 0,8 / √(x − 1).'],
      ['Évacuation sans pente suffisante', 'Engorgements et dépôts', 'Pente de 1 à 3 cm/m et regards de visite aux changements de direction.'],
      ['Chute non ventilée', 'Désamorçage des siphons et odeurs', 'Prolonger la chute en ventilation primaire hors toiture.'],
    ],
  },
  tips: {
    tips: [
      'Isolez les canalisations d’eau chaude et de bouclage : les pertes en distribution peuvent dépasser 30 %.',
      'Installez un disconnecteur pour toute alimentation d’un réseau technique (chauffage, arrosage) afin de protéger le réseau d’eau potable.',
      'Prévoyez des trappes de visite au droit des vannes et des regards.',
      'Faites un essai de pression (au moins 1,5 fois la pression de service) avant de fermer les doublages.',
    ],
  },
  norms: {
    norms: [
      ['NF DTU 60.11', 'Règles de calcul des installations de plomberie sanitaire et d’eaux pluviales.'],
      ['NF DTU 60.1', 'Plomberie sanitaire pour bâtiments.'],
      ['NF EN 806', 'Installations de distribution d’eau destinée à la consommation humaine à l’intérieur des bâtiments.'],
      ['NF EN 12056', 'Réseaux d’évacuation gravitaire à l’intérieur des bâtiments.'],
      ['Arrêté du 30 novembre 2005', 'Températures de l’eau chaude sanitaire et prévention des légionelles.'],
    ],
  },
  exercises: {
    exercises: [
      {
        level: 1,
        text: 'Une salle de bains comprend un lavabo, une douche et une baignoire. Calculer le débit probable.',
        hint: 'Débit cumulé 0,73 L/s ; x = 3.',
        answer_latex: "y = \\frac{0{,}8}{\\sqrt{2}} = 0{,}566 \\qquad Q_p = 0{,}566 \\times 0{,}73 = 0{,}41\\ \\text{L/s}",
        answer_text: 'Q_p ≈ 0,41 L/s.',
      },
      {
        level: 2,
        text: 'Quel diamètre intérieur faut-il pour 0,41 L/s à 2 m/s ?',
        hint: 'd = √(4Q / πv).',
        answer_latex: "d = \\sqrt{\\frac{4 \\times 0{,}000\\,41}{\\pi \\times 2}} = 0{,}0162\\ \\text{m}",
        answer_text: 'd ≈ 16 mm intérieur (cuivre 16/18).',
      },
      {
        level: 3,
        text: 'Une famille de 4 personnes consomme 120 L/j d’eau à 60 °C (eau froide à 12 °C). Calculer l’énergie annuelle théorique.',
        hint: 'E journalière puis × 365.',
        answer_latex: "E_j = \\frac{1{,}163 \\times 120 \\times 48}{1\\,000} = 6{,}70\\ \\text{kWh} \\qquad E_{an} = 6{,}70 \\times 365 = 2\\,445\\ \\text{kWh}",
        answer_text: '≈ 2 450 kWh/an hors pertes.',
      },
    ],
  },
  quiz: {
    title: 'Quiz — Plomberie',
    questions: [
      { q: 'Que vaut le coefficient de simultanéité pour 5 appareils ?', options: ['0,20', '0,40', '0,80'], correct: 1, explain: 'y = 0,8 / √4 = 0,40.' },
      { q: 'Pourquoi ventile-t-on les chutes d’évacuation ?', options: ['Pour sécher les tuyaux', 'Pour éviter le désamorçage des siphons', 'Pour refroidir les eaux usées'], correct: 1, explain: 'La ventilation équilibre la pression et préserve la garde d’eau des siphons.' },
      { q: 'Quelle température de production limite le risque de légionellose en collectif ?', options: ['40 °C', '45 °C', '55 °C et plus'], correct: 2, explain: 'Les légionelles prolifèrent entre 25 et 45 °C ; au-delà de 55-60 °C elles sont détruites.' },
    ],
  },
  exam_questions: {
    questions: [
      'Expliquez le principe du coefficient de simultanéité et dimensionnez l’alimentation d’un logement.',
      'Décrivez les risques sanitaires liés à l’eau chaude et les dispositions de conception associées.',
      'Présentez le réseau d’évacuation d’un immeuble : branchements, chutes, ventilation et collecteurs.',
    ],
  },
  interview_questions: {
    questions: [
      ['Un client se plaint de manque de pression au dernier étage. Que vérifiez-vous ?', 'La pression disponible au compteur, la hauteur à monter (1 bar perdu pour 10 m), les diamètres et pertes de charge du réseau, les filtres et réducteurs encrassés ; si nécessaire, un surpresseur.'],
      ['Production d’ECS instantanée ou à accumulation ?', "L'accumulation lisse la puissance (ballon chauffé en heures creuses ou par PAC) ; l'instantané évite le stockage mais demande une forte puissance. Le choix dépend des besoins simultanés, de l'énergie disponible et de la place."],
    ],
  },
  practical_case: {
    title: 'Cas pratique — Ballon thermodynamique d’une maison',
    scenario: 'Famille de 5 personnes, besoin de 40 L par personne et par jour à 55 °C, eau froide à 12 °C. Ballon thermodynamique à choisir parmi 200, 250 et 300 L.',
    description: 'Calculer le besoin journalier et choisir le volume du ballon (réserve de 20 %).',
    resolutions: [
      "V_{besoin} = 5 \\times 40 = 200\\ \\text{L/j à 55 °C}",
      "V_{ballon} = 1{,}2 \\times 200 = 240\\ \\text{L} \\Rightarrow \\text{ballon de 250 L}",
      "E = \\frac{1{,}163 \\times 200 \\times (55 - 12)}{1\\,000} = 10{,}0\\ \\text{kWh/j}",
    ],
    conclusion: 'Un ballon de 250 L convient. Avec une pompe à chaleur de COP 2,8, la consommation électrique est d’environ 10,0 / 2,8 ≈ 3,6 kWh/j.',
  },
  summary: {
    content: `### La plomberie en 5 points
1. Trois réseaux : **eau froide, eau chaude, évacuations**.
2. Simultanéité : $y = 0{,}8/\\sqrt{x-1}$ puis $Q_p = y \\sum q_b$.
3. Diamètre : $d = \\sqrt{4Q/(\\pi v)}$ avec $v \\le 2$ m/s.
4. ECS : $E = 1{,}163 \\, V \\, \\Delta\\theta / 1\\,000$ (kWh) et production ≥ 55 °C en collectif.
5. Évacuations : pente 1 à 3 cm/m, chutes ventilées.`,
  },
  key_points: {
    points: [
      'Débit de base courant : 0,20 L/s',
      'y = 0,8 / √(x − 1)',
      'Vitesse en distribution : 1,5 à 2 m/s',
      '1,163 Wh pour chauffer 1 L d’eau de 1 °C',
      'Pente des évacuations : 1 à 3 cm/m',
    ],
  },
  self_assessment: {
    objectives: [
      'Je sais calculer un débit probable avec le coefficient de simultanéité',
      'Je sais choisir un diamètre de canalisation',
      'Je sais dimensionner un ballon d’eau chaude',
      'Je connais les règles de base des évacuations',
      "J'ai réussi le quiz avec au moins 2 bonnes réponses sur 3",
    ],
  },
});
