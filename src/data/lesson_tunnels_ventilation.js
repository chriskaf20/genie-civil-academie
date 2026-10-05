// ── Lesson: Ventilation, sécurité et équipements des tunnels — Module 17 ──────
import { buildLesson } from './build_lesson.js';

export const lesson_tunnels_ventilation = buildLesson({
  moduleId: 17,
  slug: 'tunnels_ventilation',
  lessonIndex: 3,
  title: "Ventilation, Sécurité & Équipements des Tunnels Routiers : Air Sain, Désenfumage et Évacuation",
  subtitle: 'Module 17 — Ingénierie des Tunnels',
  level: 'Avancé',
  duration: '9h',
  tags: ['Tunnels', 'Ventilation', 'Accélérateurs', 'Vitesse critique', 'Désenfumage', 'Issues de secours', 'Sécurité'],
}, {
  definition: {
    title: "Définition — Rendre le tunnel respirable et sûr",
    fr: 'Ventilation et sécurité des tunnels routiers',
    en: 'Road tunnel ventilation and safety',
    metier: "Utilisée par les ingénieurs d'équipements de tunnels, les exploitants, les services de secours et les autorités de contrôle (CNESOR en France).",
    content: `Un tunnel routier doit garantir aux usagers :
1. un **air sain** en exploitation normale : dilution des polluants (CO, NO₂) et des particules qui réduisent la visibilité ;
2. la **sécurité en cas d'incendie** : maîtrise des fumées, évacuation des usagers, intervention des secours.

### Deux grands systèmes de ventilation
- **Longitudinale** : des **accélérateurs** (ventilateurs suspendus en voûte) mettent tout l'air du tunnel en mouvement dans un sens. Simple et économique, adaptée aux tunnels unidirectionnels.
- **Transversale ou semi-transversale** : des gaines amènent l'air frais et/ou extraient l'air vicié et les fumées par des trappes ; nécessaire pour les tunnels longs bidirectionnels.

### Les équipements de sécurité
Issues de secours ou abris, niches de sécurité (téléphone, extincteurs), éclairage, signalisation, détection automatique d'incident, radio, poteaux incendie, centre de contrôle.

> 💡 Dans un tunnel en feu, les fumées tuent avant la chaleur : la stratégie de désenfumage est au cœur de la sécurité.`,
  },
  importance: {
    content: `- **Vies humaines** : les incendies du Mont-Blanc (1999, 39 morts) et du Tauern (1999) ont transformé la réglementation.
- **Réglementation** : en Europe, la directive 2004/54/CE impose des exigences minimales (issues de secours, ventilation, centre de contrôle) pour les tunnels de plus de 500 m du réseau transeuropéen.
- **Coût** : les équipements et leur exploitation représentent une part majeure du coût global d'un tunnel.
- **Disponibilité** : un équipement de sécurité défaillant peut imposer la fermeture du tunnel.

> ⚠️ **À retenir** : en ventilation longitudinale, il faut pousser les fumées dans le sens où se trouvent les véhicules qui peuvent sortir, jamais vers les usagers bloqués.`,
  },
  applications: {
    examples: [
      ['Tunnel autoroutier unidirectionnel', 'Ventilation longitudinale par accélérateurs, fumées poussées vers l’aval (sens de circulation).'],
      ['Tunnel alpin bidirectionnel', 'Ventilation transversale avec extraction massive des fumées par trappes motorisées.'],
      ['Tunnel urbain', 'Détection automatique d’incident par caméras, issues vers le tube voisin.'],
      ['Tranchée couverte', 'Désenfumage naturel ou mécanique selon la longueur.'],
      ['Exploitation', 'Exercices de sécurité réguliers avec les services de secours.'],
    ],
  },
  theory: {
    title: 'Théorie — Débits d’air, vitesse critique et dimensionnement',
    content: `### 1. Débit d'air frais pour la dilution
Pour maintenir une concentration admissible $C_{adm}$ d'un polluant émis à un débit $G$ :
$$Q = \\frac{G}{C_{adm} - C_0}$$

### 2. Vitesse critique en incendie
En ventilation longitudinale, la vitesse de l'air doit être suffisante pour empêcher les fumées de remonter à contre-courant (« backlayering ») : c'est la **vitesse critique**, de l'ordre de 2,5 à 3,5 m/s selon la puissance du feu. Débit nécessaire : $Q = v_c \\cdot A$.

### 3. Pertes de charge à vaincre
$$\\Delta p = \\left(\\lambda \\frac{L}{D_h} + \\sum \\xi\\right) \\frac{\\rho v^2}{2} + \\Delta p_{ext}$$
$\\Delta p_{ext}$ regroupe les effets du vent aux têtes, du tirage thermique et de l'effet piston des véhicules.

### 4. Nombre d'accélérateurs
La poussée totale des accélérateurs doit équilibrer ces pertes : $n \\approx \\Delta p \\cdot A / T_{eff}$, où $T_{eff}$ est la poussée efficace d'un accélérateur installé (réduite par la proximité des parois). On ajoute des appareils de réserve (panne, appareils détruits par le feu).

### 5. Évacuation
Les issues de secours permettent aux usagers de rejoindre un lieu sûr (tube voisin, galerie, extérieur) ; la directive européenne fixe une distance maximale de 500 m entre issues lorsque des issues sont requises.`,
  },
  formulas: {
    title: 'Formules essentielles — Ventilation des tunnels',
    formulas: [
      {
        name: 'Débit de dilution',
        latex: "Q = \\frac{G}{C_{adm} - C_0}",
        description: 'Débit d’air frais pour maintenir la concentration d’un polluant sous le seuil.',
        vars: [
          ['Q', "Débit d'air frais", 'm³/s', 'Air neuf à introduire.'],
          ['G', 'Émission de polluant', 'm³/s', 'Selon le trafic et le parc de véhicules.'],
          ['C_{adm}', 'Concentration admissible', '-', 'Exprimée en fraction volumique (ppm × 10⁻⁶).'],
          ['C_0', "Concentration de l'air extérieur", '-', 'Souvent négligeable.'],
        ],
      },
      {
        name: 'Débit pour atteindre la vitesse critique',
        latex: "Q = v_c \\cdot A",
        description: 'Ventilation longitudinale en cas d’incendie.',
        vars: [
          ['v_c', 'Vitesse critique', 'm/s', '≈ 2,5 à 3,5 m/s selon la puissance du feu.'],
          ['A', 'Section du tunnel', 'm²', '50 à 90 m² pour un tunnel routier.'],
        ],
        rule: "La vitesse critique varie peu avec la puissance du feu au-delà de quelques dizaines de MW.",
      },
      {
        name: 'Pertes de charge de l’écoulement',
        latex: "\\Delta p = \\left(\\lambda \\frac{L}{D_h} + \\sum \\xi\\right) \\frac{\\rho v^2}{2} + \\Delta p_{ext}",
        description: 'Pression que la ventilation doit vaincre.',
        vars: [
          ['\\Delta p', 'Perte de charge totale', 'Pa', 'Frottement + singularités + effets extérieurs.'],
          ['\\lambda', 'Coefficient de frottement', '-', '≈ 0,02 à 0,03.'],
          ['L', 'Longueur du tunnel', 'm', 'Tronçon ventilé.'],
          ['D_h', 'Diamètre hydraulique', 'm', '4A / périmètre.'],
          ['\\xi', 'Pertes singulières', '-', 'Entrée ≈ 0,5 ; sortie ≈ 1.'],
          ['\\rho', "Masse volumique de l'air", 'kg/m³', '≈ 1,2.'],
          ['\\Delta p_{ext}', 'Effets extérieurs', 'Pa', 'Vent, tirage thermique, effet piston.'],
        ],
      },
      {
        name: "Nombre d'accélérateurs",
        latex: "n = \\frac{\\Delta p \\cdot A}{T_{eff}}",
        description: 'Poussée nécessaire divisée par la poussée efficace d’un appareil, avant réserve.',
        vars: [
          ['n', "Nombre d'accélérateurs", '-', 'Arrondi, plus réserve.'],
          ['T_{eff}', 'Poussée efficace installée', 'N', '≈ 600 à 1 500 N par appareil selon la taille.'],
        ],
      },
    ],
  },
  stepbystep: {
    title: 'Calcul complet — Nombre d’accélérateurs d’un tunnel de 1,5 km',
    problem: "Tunnel unidirectionnel de 1 500 m, section A = 60 m², diamètre hydraulique 8 m, λ = 0,025, pertes singulières Σξ = 1,5. On vise une vitesse de 3 m/s en incendie, avec une contre-pression extérieure (vent, tirage) de 30 Pa. Poussée efficace d'un accélérateur : 1 000 N.",
    steps_demo: [
      { n: 1, text: "Pression dynamique : ρv²/2 = 1,2 × 3² / 2 = 5,4 Pa." },
      { n: 2, text: "Coefficient total : 0,025 × 1 500 / 8 + 1,5 = 4,69 + 1,5 = 6,19." },
      { n: 3, text: "Pertes : Δp = 6,19 × 5,4 + 30 = 33,4 + 30 = 63,4 Pa." },
      { n: 4, text: "Poussée nécessaire : 63,4 × 60 = 3 800 N → n = 3 800 / 1 000 = 3,8 → 4 accélérateurs." },
      { n: 5, text: "Réserve : on ajoute les appareils susceptibles d'être dans la zone du feu ou en panne (par exemple 2 batteries supplémentaires) → 6 accélérateurs." },
    ],
    result_latex: "\\Delta p = \\left(0{,}025 \\times \\frac{1\\,500}{8} + 1{,}5\\right) \\times 5{,}4 + 30 = 63{,}4\\ \\text{Pa} \\qquad n = \\frac{63{,}4 \\times 60}{1\\,000} = 3{,}8 \\Rightarrow 4 + 2 = 6",
  },
  units: {
    table: [
      ['Débit d’air', 'm³/s', 'cfm', '1 m³/s = 2 119 cfm'],
      ['Pression', 'Pa', 'in w.g.', '1 in d’eau = 249 Pa'],
      ['Concentration', 'ppm', 'ppm', '1 ppm = 10⁻⁶ en volume'],
      ['Puissance d’un feu', 'MW', 'BTU/h', 'Voiture ≈ 5 MW ; poids lourd 30 à 100 MW'],
      ['Poussée', 'N', 'lbf', '1 000 N = 225 lbf'],
    ],
    note: 'La puissance de feu de dimensionnement dépend du trafic admis : 30 MW si les poids lourds de marchandises dangereuses sont interdits, beaucoup plus sinon.',
  },
  hypotheses: {
    items: [
      ['info', 'Le calcul simplifié suppose un écoulement unidimensionnel et des propriétés de l’air constantes.'],
      ['info', 'La poussée efficace d’un accélérateur dépend de sa position (distance à la paroi) et de la vitesse de l’air.'],
      ['warning', 'En tunnel bidirectionnel congestionné, la ventilation longitudinale pousse les fumées sur des usagers bloqués : extraction transversale nécessaire.'],
      ['warning', 'Les appareils proches du feu peuvent être détruits : ils ne comptent pas dans la poussée disponible.'],
      ['tip', 'Les études de sécurité (EDD) et les simulations numériques de fumées complètent les calculs simplifiés.'],
    ],
  },
  simple_examples: {
    examples: [
      {
        title: 'Exemple 1 : débit pour la vitesse critique',
        given: 'A = 70 m², v_c = 3 m/s',
        find: 'Q',
        solution_latex: "Q = 3 \\times 70 = 210\\ \\text{m}^3/\\text{s}",
        result: '210 m³/s à mettre en mouvement.',
      },
      {
        title: 'Exemple 2 : dilution du CO',
        given: 'Émission de CO : 0,5 m³/h ; concentration admissible 70 ppm',
        find: 'Débit d’air frais',
        solution_latex: "Q = \\frac{0{,}5}{70 \\times 10^{-6}} = 7\\,143\\ \\text{m}^3/\\text{h} \\approx 2\\ \\text{m}^3/\\text{s}",
        result: '≈ 2 m³/s : faible par rapport aux besoins en incendie, qui dimensionnent souvent la ventilation.',
      },
      {
        title: 'Exemple 3 : diamètre hydraulique',
        given: 'Section 60 m², périmètre 30 m',
        find: 'D_h',
        solution_latex: "D_h = \\frac{4 \\times 60}{30} = 8\\ \\text{m}",
        result: 'D_h = 8 m.',
      },
    ],
  },
  real_examples: {
    title: 'Exemple réel — Incendie du tunnel du Mont-Blanc (1999)',
    examples: [
      {
        context: 'Tunnel bidirectionnel de 11,6 km entre la France et l’Italie, 39 morts',
        scenario: "Un poids lourd transportant de la margarine et de la farine prend feu. La ventilation, mal coordonnée entre les deux exploitants, n'a pas contrôlé les fumées ; les abris de l'époque, non désenfumés et mal protégés, sont devenus des pièges.",
        decomposition_latex: "\\text{Feu de poids lourd} + \\text{ventilation non maîtrisée} + \\text{abris insuffisants} \\Rightarrow \\text{catastrophe}",
        lesson: "Après la reconstruction : abris pressurisés reliés à une galerie d'évacuation tous les 300 m, extraction massive des fumées, exploitant unique, contrôle des poids lourds et exercices réguliers. La réglementation européenne et française a été entièrement revue.",
      },
    ],
  },
  diagrams: {
    title: 'Schéma de principe — Stratégie en cas d’incendie (ventilation longitudinale)',
    diagram_description: [
      'Détection automatique de l’incident (caméras, détecteurs de fumée)',
      'Fermeture du tunnel aux entrées (feux, barrières)',
      'Ventilation : fumées poussées vers l’aval où les véhicules peuvent sortir',
      'Vitesse d’air ≥ vitesse critique pour éviter le retour des fumées',
      'Évacuation des usagers vers les issues de secours (≤ 500 m)',
      'Intervention des secours par l’amont, à l’abri des fumées',
    ],
  },
  mistakes: {
    items: [
      ['Dimensionner la ventilation sur la seule pollution', 'Ventilation insuffisante en incendie', 'Vérifier le cas incendie (vitesse critique), souvent dimensionnant.'],
      ['Oublier les effets extérieurs (vent, tirage)', 'Accélérateurs insuffisants', 'Ajouter Δp_ext défavorable selon les données météo et thermiques.'],
      ['Ventiler fortement un feu en tunnel bidirectionnel congestionné', 'Fumées envoyées sur les usagers bloqués', 'Adopter une stratégie d’extraction et de maintien de la stratification.'],
    ],
  },
  tips: {
    tips: [
      'Dans les premières minutes d’un feu, une ventilation faible préserve la stratification des fumées en voûte.',
      'Testez la ventilation et l’automatisme de sécurité à chaque grande maintenance.',
      'Les niches de sécurité et issues doivent être signalées par une signalisation lumineuse visible dans la fumée.',
      'Formez les exploitants avec des exercices réguliers en lien avec les secours.',
    ],
  },
  norms: {
    norms: [
      ['Directive 2004/54/CE', 'Exigences de sécurité minimales pour les tunnels du réseau routier transeuropéen.'],
      ['Circulaire interministérielle 2000-63 (France)', 'Sécurité dans les tunnels du réseau routier national.'],
      ['Instruction technique annexée (France)', 'Ventilation, issues, équipements des tunnels routiers.'],
      ['Recommandations du CETU et de l’AIPCR', 'Ventilation, désenfumage et exploitation des tunnels.'],
    ],
  },
  exercises: {
    exercises: [
      {
        level: 1,
        text: 'Calculer la pression dynamique de l’air à 2,5 m/s (ρ = 1,2 kg/m³).',
        hint: 'ρv²/2.',
        answer_latex: "\\frac{1{,}2 \\times 2{,}5^2}{2} = 3{,}75\\ \\text{Pa}",
        answer_text: '3,75 Pa.',
      },
      {
        level: 2,
        text: 'Un tunnel de 800 m (A = 55 m², D_h = 7,5 m, λ = 0,025, Σξ = 1,5) doit être ventilé à 2,5 m/s sans effet extérieur. Calculer Δp et la poussée nécessaire.',
        hint: 'Coefficient total × 3,75 Pa.',
        answer_latex: "\\Delta p = \\left(0{,}025 \\times \\frac{800}{7{,}5} + 1{,}5\\right) \\times 3{,}75 = 4{,}17 \\times 3{,}75 = 15{,}6\\ \\text{Pa} \\qquad F = 15{,}6 \\times 55 = 860\\ \\text{N}",
        answer_text: 'Δp ≈ 15,6 Pa ; poussée ≈ 860 N (avant effets extérieurs et réserve).',
      },
      {
        level: 3,
        text: 'Pour le tunnel de l’exercice 2, avec un vent défavorable de 25 Pa et des accélérateurs de 800 N efficaces, combien d’appareils prévoir avec 2 de réserve ?',
        hint: 'Δp total = 15,6 + 25.',
        answer_latex: "F = (15{,}6 + 25) \\times 55 = 2\\,233\\ \\text{N} \\qquad n = \\frac{2\\,233}{800} = 2{,}8 \\Rightarrow 3 + 2 = 5",
        answer_text: '5 accélérateurs.',
      },
    ],
  },
  quiz: {
    title: 'Quiz — Ventilation des tunnels',
    questions: [
      { q: 'Qu’est-ce que la vitesse critique ?', options: ['La vitesse maximale des véhicules', 'La vitesse d’air qui empêche les fumées de remonter à contre-courant', 'La vitesse de propagation du feu'], correct: 1, explain: 'Au-delà, le « backlayering » est empêché.' },
      { q: 'Quel système convient à un long tunnel bidirectionnel ?', options: ['Ventilation naturelle', 'Ventilation longitudinale seule', 'Ventilation transversale avec extraction des fumées'], correct: 2, explain: 'Il faut extraire les fumées localement sans les pousser vers des usagers.' },
      { q: 'Quelle distance maximale entre issues de secours fixe la directive européenne ?', options: ['100 m', '500 m', '2 000 m'], correct: 1, explain: '500 m au plus lorsque des issues sont exigées.' },
    ],
  },
  exam_questions: {
    questions: [
      'Comparez ventilation longitudinale et transversale : principe, domaines d’emploi, stratégie en incendie.',
      'Dimensionnez le nombre d’accélérateurs d’un tunnel à partir des pertes de charge et des effets extérieurs.',
      'Présentez les équipements de sécurité d’un tunnel et les enseignements de l’incendie du Mont-Blanc.',
    ],
  },
  interview_questions: {
    questions: [
      ['Quelle est la priorité en cas d’incendie dans un tunnel ?', "Protéger les usagers : fermer le tunnel, maîtriser les fumées selon la stratégie prévue (vitesse critique ou extraction), guider l'évacuation vers les issues, faciliter l'intervention des secours."],
      ['Pourquoi les poids lourds sont-ils déterminants pour la sécurité ?', 'Parce que leur feu peut atteindre 30 à plus de 100 MW, produire énormément de fumées et de chaleur ; la puissance de feu de dimensionnement dépend des poids lourds et des matières dangereuses autorisés.'],
    ],
  },
  practical_case: {
    title: 'Cas pratique — Rénovation de la sécurité d’un tunnel de 900 m',
    scenario: 'Tunnel bidirectionnel de 900 m sans issue de secours, ventilé longitudinalement, trafic de 15 000 véh/j dont 10 % de poids lourds.',
    description: 'Proposer des améliorations prioritaires.',
    resolutions: [
      "\\text{Issues : } \\frac{900}{500} \\Rightarrow \\text{au moins 1 issue intermédiaire (galerie ou rameau vers l'extérieur)}",
      "\\text{Ventilation : bidirectionnel} \\Rightarrow \\text{stratégie de faible vitesse ou extraction ponctuelle des fumées}",
      "\\text{Exploitation : détection automatique, signalisation d'évacuation, liaison avec les secours, exercices}",
    ],
    conclusion: "Les priorités sont la création d'une issue de secours, l'adaptation de la stratégie de désenfumage au trafic bidirectionnel et la détection automatique ; une étude de dangers en précise le programme.",
  },
  summary: {
    content: `### La sécurité des tunnels en 5 points
1. Air sain : $Q = G / (C_{adm} - C_0)$.
2. Incendie : vitesse critique 2,5 à 3,5 m/s, $Q = v_c A$.
3. Pertes : $(\\lambda L/D_h + \\sum\\xi)\\rho v^2/2 + \\Delta p_{ext}$.
4. Accélérateurs : $n = \\Delta p A / T_{eff}$ + réserve.
5. Issues de secours (≤ 500 m), détection, exploitation, exercices.`,
  },
  key_points: {
    points: [
      'Vitesse critique ≈ 2,5 à 3,5 m/s',
      'Longitudinale : unidirectionnel ; transversale : bidirectionnel long',
      'Issues ≤ 500 m (directive 2004/54/CE)',
      'Le feu, pas la pollution, dimensionne souvent la ventilation',
      'Mont-Blanc 1999 : refonte de la réglementation',
    ],
  },
  self_assessment: {
    objectives: [
      'Je connais les systèmes de ventilation des tunnels',
      'Je sais calculer un débit de vitesse critique',
      'Je sais dimensionner un nombre d’accélérateurs',
      'Je connais les équipements et la stratégie de sécurité incendie',
      "J'ai réussi le quiz avec au moins 2 bonnes réponses sur 3",
    ],
  },
});
