// ── Lesson: Épuration des eaux usées — Module 38 ─────────────────────────────
import { buildLesson } from './build_lesson.js';

export const lesson_eau_epuration = buildLesson({
  moduleId: 38,
  slug: 'eau_epuration',
  lessonIndex: 2,
  title: "Épuration des Eaux Usées : Équivalent-Habitant, Boues Activées, Clarification et Normes de Rejet",
  subtitle: 'Module 38 — Traitement des Eaux',
  level: 'Intermédiaire',
  duration: '7h',
  tags: ['Station d’épuration', 'STEU', 'Boues activées', 'DBO5', 'Équivalent-habitant', 'Clarificateur', 'Aération'],
}, {
  definition: {
    title: 'Définition — Rendre au milieu naturel une eau compatible',
    fr: 'Épuration des eaux usées',
    en: 'Wastewater treatment',
    metier: "Concerne les ingénieurs en traitement des eaux, les exploitants de stations, les collectivités et les bureaux d'études en assainissement.",
    content: `Une **station de traitement des eaux usées (STEU)** élimine la pollution des eaux domestiques et industrielles avant rejet dans une rivière ou la mer.

### Les paramètres de pollution
- **DBO5** : demande biochimique en oxygène en 5 jours (matière organique biodégradable).
- **DCO** : demande chimique en oxygène (matière oxydable totale).
- **MES** : matières en suspension.
- **NGL, Pt** : azote global et phosphore total, responsables de l'eutrophisation.

### L'équivalent-habitant (EH)
Unité de dimensionnement : **1 EH = 60 g de DBO5 par jour** (définition européenne).

### Les étapes d'une filière à boues activées
1. **Prétraitements** : dégrillage, dessablage, dégraissage.
2. **Traitement biologique** : des bactéries consomment la pollution dans un bassin aéré.
3. **Clarification** : séparation des boues par décantation ; une partie est recirculée.
4. **Traitements complémentaires** : azote, phosphore, désinfection si nécessaire.
5. **Traitement des boues** (leçon dédiée).

> 💡 Les boues activées sont la filière la plus répandue au-delà de quelques milliers d'EH ; pour les petites communes, on utilise souvent des filtres plantés de roseaux ou des lagunes.`,
  },
  importance: {
    content: `- **Santé publique** : éviter la contamination des eaux de baignade et de captage.
- **Milieux aquatiques** : l'oxygène des rivières est consommé par la pollution organique.
- **Réglementation** : directive européenne sur les eaux résiduaires urbaines et arrêtés nationaux.
- **Énergie** : l'aération représente souvent plus de la moitié de la consommation électrique d'une station.

> ⚠️ **À retenir** : une station surchargée ou mal exploitée rejette une eau non conforme ; le dimensionnement doit intégrer la croissance de la population et les pointes.`,
  },
  applications: {
    examples: [
      ['Commune de 5 000 habitants', 'Boues activées en aération prolongée.'],
      ['Village de 300 habitants', 'Filtres plantés de roseaux à deux étages.'],
      ['Zone sensible à l’eutrophisation', 'Traitement de l’azote et du phosphore.'],
      ['Industrie agroalimentaire', 'Prétraitement avant raccordement au réseau public.'],
      ['Zone littorale', 'Désinfection UV pour protéger les baignades.'],
    ],
  },
  theory: {
    title: 'Théorie — Dimensionner un bassin d’aération',
    content: `### 1. Charges à traiter
$$L = N_{EH} \\times 60\\ \\text{g DBO5/j} \\qquad Q = N_{EH} \\times q$$
$q$ : débit par EH (souvent 120 à 150 L/j).

### 2. Volume du bassin d'aération (charge volumique)
$$V = \\frac{L}{C_v}$$
Aération prolongée (faible charge) : $C_v \\leq 0{,}35$ kg DBO5/m³/j.

### 3. Charge massique
$$C_m = \\frac{L}{MVS \\times V}$$
$MVS$ : concentration en matières volatiles en suspension (biomasse) ; aération prolongée : $C_m \\leq 0{,}1$ ; faible charge : 0,1 à 0,2 kg DBO5/kg MVS/j.

### 4. Besoins en oxygène
$$O_2 = a' \\, L_e + b' \\, S_v$$
$L_e$ : DBO5 éliminée (kg/j) ; $S_v$ : masse de MVS dans le bassin (kg) ; $a'$ ≈ 0,6 ; $b'$ ≈ 0,07.

### 5. Clarificateur
Surface déterminée par la **vitesse ascensionnelle** au débit de pointe (souvent ≤ 0,6 m/h) :
$$S = \\frac{Q_p}{v_a}$$

### 6. Rendement
$$\\eta = \\frac{C_0 - C}{C_0}$$`,
  },
  formulas: {
    title: 'Formules essentielles — Épuration',
    formulas: [
      {
        name: 'Charge polluante',
        latex: "L = N_{EH} \\times 0{,}060\\ \\text{kg DBO5/j}",
        description: 'Charge organique à traiter.',
        vars: [
          ['L', 'Charge en DBO5', 'kg/j', ''],
          ['N_{EH}', 'Capacité', 'EH', '1 EH = 60 g DBO5/j.'],
        ],
      },
      {
        name: 'Volume du bassin d’aération',
        latex: "V = \\frac{L}{C_v}",
        description: 'Dimensionnement par la charge volumique.',
        vars: [
          ['V', 'Volume', 'm³', ''],
          ['C_v', 'Charge volumique', 'kg DBO5/m³/j', '≤ 0,35 en aération prolongée.'],
        ],
      },
      {
        name: 'Besoins en oxygène',
        latex: "O_2 = a' \\, L_e + b' \\, S_v",
        description: 'Respiration de synthèse et endogène.',
        vars: [
          ["a'", 'Coefficient de synthèse', 'kg O₂/kg DBO5', '≈ 0,6.'],
          ['L_e', 'DBO5 éliminée', 'kg/j', ''],
          ["b'", 'Coefficient de respiration endogène', 'kg O₂/kg MVS/j', '≈ 0,07.'],
          ['S_v', 'Masse de MVS dans le bassin', 'kg', ''],
        ],
      },
      {
        name: 'Surface du clarificateur',
        latex: "S = \\frac{Q_p}{v_a}",
        description: 'Limitation de la vitesse ascensionnelle.',
        vars: [
          ['Q_p', 'Débit de pointe', 'm³/h', ''],
          ['v_a', 'Vitesse ascensionnelle admissible', 'm/h', '≤ 0,6 m/h courant.'],
        ],
      },
    ],
  },
  stepbystep: {
    title: 'Calcul complet — Station de 5 000 EH en aération prolongée',
    problem: "Dimensionner une station de 5 000 EH : 150 L/EH/j, coefficient de pointe horaire 3, aération prolongée (C_v = 0,35 kg/m³/j), boues à 4,0 g/L de MES dont 70 % de MVS, rejet visé 25 mg/L de DBO5, vitesse ascensionnelle 0,6 m/h.",
    steps_demo: [
      { n: 1, text: "Charge : L = 5 000 × 0,060 = 300 kg DBO5/j ; débit : Q = 750 m³/j ; concentration d'entrée = 300 / 750 = 0,400 kg/m³ = 400 mg/L." },
      { n: 2, text: "Bassin : V = 300 / 0,35 = 857 m³ (par exemple 2 bassins de 430 m³)." },
      { n: 3, text: "Biomasse : MVS = 0,7 × 4,0 = 2,8 kg/m³ ; S_v = 2,8 × 857 = 2 400 kg ; C_m = 300 / 2 400 = 0,125 kg/kg/j (faible charge)." },
      { n: 4, text: "Oxygène : DBO5 éliminée = 300 × (400 − 25)/400 = 281 kg/j ; O₂ = 0,6 × 281 + 0,07 × 2 400 = 169 + 168 = 337 kg O₂/j." },
      { n: 5, text: "Clarificateur : Q_p = 750 / 24 × 3 = 94 m³/h ; S = 94 / 0,6 = 156 m², soit un diamètre de 14,1 m. Rendement en DBO5 : (400 − 25)/400 = 94 %." },
    ],
    result_latex: "V = \\frac{300}{0{,}35} = 857\\ \\text{m}^3 \\qquad O_2 = 0{,}6 \\times 281 + 0{,}07 \\times 2\\,400 = 337\\ \\text{kg/j} \\qquad D = 14{,}1\\ \\text{m}",
  },
  units: {
    table: [
      ['Charge organique', 'kg DBO5/j', 'lb BOD/day', '1 kg = 2,205 lb'],
      ['Concentration', 'mg/L', 'mg/L', '1 mg/L = 1 g/m³'],
      ['Capacité', 'EH', 'population equivalent (PE)', '1 EH = 60 g DBO5/j'],
      ['Débit', 'm³/j', 'MGD', '1 MGD = 3 785 m³/j'],
      ['Vitesse ascensionnelle', 'm/h', 'gpd/ft²', '1 m/h ≈ 589 gpd/ft²'],
    ],
    note: 'Aux États-Unis, la charge par habitant est souvent prise à 0,17 à 0,2 lb BOD/j (77 à 90 g/j).',
  },
  hypotheses: {
    items: [
      ['info', 'Les coefficients a′ et b′ sont des valeurs usuelles ; ils dépendent de la température et de l’âge des boues.'],
      ['info', 'Le dimensionnement présenté ne traite que la pollution carbonée ; la nitrification demande un bassin plus grand et plus d’oxygène.'],
      ['warning', 'Les eaux parasites (infiltrations, eaux pluviales) diluent l’effluent et surchargent hydrauliquement le clarificateur.'],
      ['warning', 'Le débit de pointe et la charge de la saison touristique doivent être pris en compte en zone littorale ou de montagne.'],
      ['tip', 'Réalisez une campagne de mesures (débits et charges) avant de dimensionner une extension.'],
    ],
  },
  simple_examples: {
    examples: [
      {
        title: 'Exemple 1 : capacité en EH',
        given: 'Charge mesurée : 480 kg DBO5/j',
        find: 'Capacité',
        solution_latex: "N_{EH} = \\frac{480}{0{,}060} = 8\\,000\\ \\text{EH}",
        result: '8 000 EH.',
      },
      {
        title: 'Exemple 2 : rendement',
        given: 'DCO entrée 800 mg/L ; sortie 60 mg/L',
        find: 'η',
        solution_latex: "\\eta = \\frac{800 - 60}{800} = 92{,}5\\ \\%",
        result: '92,5 %.',
      },
      {
        title: 'Exemple 3 : temps de séjour',
        given: 'V = 857 m³ ; Q = 750 m³/j',
        find: 'Temps de séjour hydraulique',
        solution_latex: "t_s = \\frac{857}{750} = 1{,}14\\ \\text{j} = 27\\ \\text{h}",
        result: 'Environ 27 heures, typique de l’aération prolongée.',
      },
    ],
  },
  real_examples: {
    title: 'Exemple réel — Mise en conformité des stations européennes',
    examples: [
      {
        context: 'Directive européenne 91/271/CEE sur les eaux résiduaires urbaines',
        scenario: "Après la directive, de nombreuses agglomérations ont dû construire ou moderniser leurs stations, notamment pour traiter l'azote et le phosphore dans les zones sensibles. Les rivières en aval ont vu leur teneur en oxygène remonter et les phénomènes d'eutrophisation diminuer, même si les pollutions diffuses agricoles restent un enjeu.",
        decomposition_latex: "\\text{Exigences de rejet} + \\text{traitement N et P} \\Rightarrow \\text{qualité des rivières améliorée}",
        lesson: "Une réglementation claire, appliquée avec des objectifs mesurables, a transformé la qualité des cours d'eau européens.",
      },
    ],
  },
  diagrams: {
    title: 'Schéma de principe — Filière à boues activées',
    diagram_description: [
      'Arrivée des eaux usées et poste de relevage',
      'Prétraitements : dégrillage, dessablage, dégraissage',
      'Bassin d’aération : biomasse bactérienne et insufflation d’air',
      'Clarificateur : décantation des boues et recirculation',
      'Traitement tertiaire éventuel : phosphore, désinfection',
      'Rejet au milieu naturel ; boues en excès vers la filière boues',
    ],
  },
  mistakes: {
    items: [
      ['Oublier les eaux parasites', 'Surcharge hydraulique', 'Mesurer les débits par temps sec et temps de pluie.'],
      ['Sous-dimensionner l’aération', 'Rejet non conforme', 'Calculer les besoins en O₂ en pointe et en été.'],
      ['Clarificateur trop petit', 'Départs de boues', 'Respecter la vitesse ascensionnelle en pointe.'],
    ],
  },
  tips: {
    tips: [
      'Prévoyez au moins deux files de traitement pour l’entretien.',
      'Optimisez l’aération par une régulation sur l’oxygène dissous.',
      'Anticipez les extensions dans le plan de masse.',
      'Intégrez la valorisation énergétique (biogaz) dès 30 000 à 50 000 EH.',
    ],
  },
  norms: {
    norms: [
      ['Directive 91/271/CEE', 'Traitement des eaux résiduaires urbaines.'],
      ['Arrêté du 21 juillet 2015 (France)', 'Systèmes d’assainissement collectif : rejets et surveillance.'],
      ['NF EN 12255', 'Stations d’épuration : principes de conception.'],
      ['Fascicule 81 titre II du CCTG', 'Conception et exécution des stations d’épuration.'],
    ],
  },
  exercises: {
    exercises: [
      {
        level: 1,
        text: 'Calculer la charge en DBO5 de 12 000 EH.',
        hint: '60 g par EH et par jour.',
        answer_latex: "12\\,000 \\times 0{,}060 = 720\\ \\text{kg/j}",
        answer_text: '720 kg DBO5/j.',
      },
      {
        level: 2,
        text: 'Quel volume d’aération faut-il pour 720 kg/j avec C_v = 0,35 ?',
        hint: 'V = L / C_v.',
        answer_latex: "V = \\frac{720}{0{,}35} = 2\\,057\\ \\text{m}^3",
        answer_text: 'Environ 2 060 m³.',
      },
      {
        level: 3,
        text: 'Dimensionner le clarificateur de 12 000 EH (150 L/EH/j, pointe 2,5, v_a = 0,6 m/h).',
        hint: 'Q_p = Q/24 × 2,5.',
        answer_latex: "Q_p = \\frac{1\\,800}{24} \\times 2{,}5 = 187{,}5\\ \\text{m}^3/\\text{h} \\Rightarrow S = 312{,}5\\ \\text{m}^2 \\Rightarrow D = 20\\ \\text{m}",
        answer_text: 'Un clarificateur de 20 m de diamètre (ou deux de 14 m).',
      },
    ],
  },
  quiz: {
    title: 'Quiz — Épuration',
    questions: [
      { q: 'Combien vaut 1 équivalent-habitant ?', options: ['60 g DBO5/j', '150 L/j', '1 kg DCO/j'], correct: 0, explain: 'Définition européenne.' },
      { q: 'Quel ouvrage sépare les boues de l’eau traitée ?', options: ['Le dégrilleur', 'Le clarificateur', 'Le dessableur'], correct: 1, explain: 'Il fonctionne par décantation.' },
      { q: 'Quel poste consomme le plus d’énergie ?', options: ['L’aération', 'L’éclairage', 'Le dégrillage'], correct: 0, explain: 'Souvent plus de 50 % de l’électricité.' },
    ],
  },
  exam_questions: {
    questions: [
      'Décrivez une filière de traitement par boues activées.',
      'Dimensionnez le bassin d’aération et le clarificateur d’une station.',
      'Quelles sont les normes de rejet et comment sont-elles contrôlées ?',
    ],
  },
  interview_questions: {
    questions: [
      ['Comment choisir une filière pour une petite commune ?', 'Selon la taille, la place disponible, les exigences de rejet et les capacités d’exploitation : filtres plantés de roseaux ou lagunage pour quelques centaines d’EH, boues activées au-delà de quelques milliers.'],
      ['Comment réduire la consommation énergétique d’une station ?', 'Régulation de l’aération, diffuseurs fines bulles, variateurs de vitesse, digestion des boues et valorisation du biogaz.'],
    ],
  },
  practical_case: {
    title: 'Cas pratique — Extension d’une station saturée',
    scenario: 'Station de 3 000 EH recevant désormais 230 kg DBO5/j. Bassin existant de 520 m³.',
    description: 'Évaluer la surcharge et dimensionner l’extension.',
    resolutions: [
      "N_{EH} = \\frac{230}{0{,}060} = 3\\,833\\ \\text{EH} \\ (+28\\ \\%)",
      "C_v = \\frac{230}{520} = 0{,}44 > 0{,}35 \\Rightarrow \\text{surcharge}",
      "\\text{Horizon 20 ans (5 000 EH)} : V = \\frac{300}{0{,}35} = 857\\ \\text{m}^3 \\Rightarrow \\text{extension de } 340\\ \\text{m}^3",
    ],
    conclusion: 'Une deuxième file de 340 m³ est créée, avec renforcement de l’aération et un second clarificateur.',
  },
  summary: {
    content: `### L'épuration en 5 points
1. Paramètres : DBO5, DCO, MES, N, P ; 1 EH = 60 g DBO5/j.
2. Filière : prétraitements, biologique, clarification, boues.
3. Bassin : $V = L / C_v$ ; $C_m = L / (MVS \\cdot V)$.
4. Oxygène : $O_2 = a' L_e + b' S_v$.
5. Clarificateur : $S = Q_p / v_a$ ; rejets selon la réglementation.`,
  },
  key_points: {
    points: [
      '1 EH = 60 g DBO5/j',
      'V = L / C_v',
      'O₂ = a′ L_e + b′ S_v',
      'S = Q_p / v_a',
      'Rejet type : 25 mg/L DBO5',
    ],
  },
  self_assessment: {
    objectives: [
      'Je connais les paramètres de pollution',
      'Je sais calculer une charge en EH',
      'Je sais dimensionner un bassin d’aération',
      'Je sais dimensionner un clarificateur',
      "J'ai réussi le quiz avec au moins 2 bonnes réponses sur 3",
    ],
  },
});
