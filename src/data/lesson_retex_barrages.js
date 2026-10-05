// ── Lesson: Ruptures de barrages — Module 34 ─────────────────────────────────
import { buildLesson } from './build_lesson.js';

export const lesson_retex_barrages = buildLesson({
  moduleId: 34,
  slug: 'retex_barrages',
  lessonIndex: 1,
  title: "Ruptures de Barrages : Malpasset, Vajont, Teton, Oroville — Mécanismes, Calculs et Leçons",
  subtitle: "Module 34 — Études de Cas & Retours d'Expérience",
  level: 'Avancé',
  duration: '5h',
  tags: ['Barrages', 'Malpasset', 'Vajont', 'Teton', 'Oroville', 'Sous-pressions', 'Érosion interne', 'Onde de rupture'],
}, {
  definition: {
    title: 'Définition — Comprendre les accidents pour concevoir des ouvrages sûrs',
    fr: 'Retour d’expérience sur les ruptures de barrages',
    en: 'Lessons learned from dam failures',
    metier: "Utile aux ingénieurs barrages, géotechniciens, hydrauliciens, autorités de contrôle et étudiants.",
    content: `Les ruptures de barrages sont parmi les catastrophes les plus meurtrières du génie civil. Chacune a fait progresser la réglementation et les méthodes. Quatre cas majeurs :

| Ouvrage | Année | Type | Mécanisme principal |
|---|---|---|---|
| Malpasset (France) | 1959 | Voûte | Rupture de la fondation rocheuse sous sous-pressions |
| Vajont (Italie) | 1963 | Voûte | Glissement de terrain géant dans la retenue, vague de submersion |
| Teton (États-Unis) | 1976 | Remblai | Érosion interne au premier remplissage |
| Oroville (États-Unis) | 2017 | Évacuateur | Destruction du coursier de l'évacuateur de crues |

### Les modes de défaillance
- **Submersion** (crue supérieure à la capacité des évacuateurs) ;
- **Érosion interne** (renard) dans les remblais et fondations ;
- **Glissement** d'un barrage-poids ou d'un appui ;
- **Instabilité des versants** de la retenue.

> 💡 La plupart des accidents survient au premier remplissage ou lors de crues exceptionnelles.`,
  },
  importance: {
    content: `- **Vies humaines** : Malpasset a fait 423 victimes, Vajont près de 2 000.
- **Réglementation** : en France, Malpasset a conduit à la création du Comité technique permanent des barrages et à un contrôle renforcé.
- **Méthodes** : drainage des fondations, filtres dans les remblais, auscultation.
- **Culture de sécurité** : surveillance continue et plans d'urgence.

> ⚠️ **À retenir** : un barrage est un ouvrage « vivant » qui doit être surveillé pendant toute sa vie.`,
  },
  applications: {
    examples: [
      ['Conception', 'Drainage des fondations pour réduire les sous-pressions.'],
      ['Remblais', 'Filtres granulaires contre l’érosion interne.'],
      ['Études de dangers', 'Calcul de l’onde de rupture et cartographie des zones inondables.'],
      ['Auscultation', 'Piézomètres, débits de fuite, déplacements.'],
      ['Évacuateurs', 'Dimensionnement pour des crues de période de retour très élevée.'],
    ],
  },
  theory: {
    title: 'Théorie — Mécanismes et calculs associés',
    content: `### 1. Malpasset : sous-pressions et fondation
L'eau sous pression dans les discontinuités du rocher exerce une **poussée de bas en haut** (sous-pression). Pour un barrage-poids de base $B$ et de hauteur d'eau $H$, sans drainage :
$$U = \\frac{1}{2} \\gamma_w H B$$
La stabilité au glissement s'écrit :
$$F_s = \\frac{(W - U) \\tan\\varphi}{P} \\qquad P = \\frac{1}{2} \\gamma_w H^2$$
À Malpasset, une faille en aval et la mise en charge du rocher ont formé un « coin » qui a été chassé ; la voûte a perdu son appui.

### 2. Vajont : instabilité du versant
Environ 270 millions de m³ ont glissé dans la retenue à grande vitesse, provoquant une vague qui a franchi le barrage (resté debout) et détruit Longarone. Des signes précurseurs (mouvements, fissures) existaient.

### 3. Teton : érosion interne
L'eau s'infiltre dans les fissures du rocher et du noyau, entraîne les particules fines et forme un conduit (renard). Le gradient hydraulique critique vaut :
$$i_c = \\frac{\\gamma'}{\\gamma_w} \\approx 1$$

### 4. Oroville : évacuateur de crues
Des fissures et un drainage insuffisant sous le coursier en béton ont permis des sous-pressions et l'arrachement de dalles ; l'érosion de l'évacuateur de secours a conduit à l'évacuation d'environ 188 000 personnes.

### 5. Débit de pointe d'une brèche (formule empirique de Froehlich)
$$Q_p = 0{,}607 \\, V_w^{0{,}295} \\, H_w^{1{,}24}$$`,
  },
  formulas: {
    title: 'Formules essentielles — Sécurité des barrages',
    formulas: [
      {
        name: 'Sous-pression sans drainage',
        latex: "U = \\frac{1}{2} \\gamma_w H B",
        description: 'Répartition triangulaire de la pression amont à aval.',
        vars: [
          ['U', 'Sous-pression', 'kN/m', 'Par mètre de barrage.'],
          ['\\gamma_w', "Poids volumique de l'eau", 'kN/m³', '10.'],
          ['H', "Hauteur d'eau", 'm', ''],
          ['B', 'Largeur de la base', 'm', ''],
        ],
      },
      {
        name: 'Sécurité au glissement',
        latex: "F_s = \\frac{(W - U) \\tan\\varphi}{P}",
        description: 'Sans cohésion, par mètre linéaire.',
        vars: [
          ['W', 'Poids du barrage', 'kN/m', ''],
          ['\\varphi', 'Angle de frottement béton-rocher', '°', ''],
          ['P', "Poussée de l'eau", 'kN/m', 'γ_w H²/2.'],
        ],
      },
      {
        name: 'Gradient hydraulique et sécurité à la boulance',
        latex: "i = \\frac{\\Delta h}{L} \\qquad F = \\frac{i_c}{i} \\qquad i_c = \\frac{\\gamma'}{\\gamma_w}",
        description: 'Risque d’érosion régressive et de boulance.',
        vars: [
          ['\\Delta h', 'Perte de charge', 'm', ''],
          ['L', "Longueur d'écoulement", 'm', ''],
          ["\\gamma'", 'Poids volumique déjaugé', 'kN/m³', '≈ 10.'],
        ],
      },
      {
        name: 'Débit de pointe de brèche (Froehlich)',
        latex: "Q_p = 0{,}607 \\, V_w^{0{,}295} \\, H_w^{1{,}24}",
        description: 'Estimation empirique pour un barrage en remblai.',
        vars: [
          ['Q_p', 'Débit de pointe', 'm³/s', ''],
          ['V_w', 'Volume de la retenue au-dessus de la brèche', 'm³', ''],
          ['H_w', "Hauteur d'eau au-dessus du fond de brèche", 'm', ''],
        ],
      },
    ],
  },
  stepbystep: {
    title: 'Calcul complet — Effet du drainage sur un barrage-poids',
    problem: "Barrage-poids triangulaire de hauteur 30 m (plein), base 24 m, béton 24 kN/m³, retenue pleine H = 30 m, tan φ = 0,80 (sans cohésion). Comparer la sécurité au glissement sans drainage et avec un drainage réduisant la sous-pression des deux tiers.",
    steps_demo: [
      { n: 1, text: "Poids : W = ½ × 24 × 30 × 24 = 8 640 kN/m." },
      { n: 2, text: "Poussée : P = ½ × 10 × 30² = 4 500 kN/m." },
      { n: 3, text: "Sous-pression sans drainage : U = ½ × 10 × 30 × 24 = 3 600 kN/m." },
      { n: 4, text: "Sans drainage : F_s = (8 640 − 3 600) × 0,80 / 4 500 = 0,90 < 1 : glissement !" },
      { n: 5, text: "Avec drainage : U = 1 200 kN/m ; F_s = (8 640 − 1 200) × 0,80 / 4 500 = 1,32." },
    ],
    result_latex: "F_s = \\frac{(8\\,640 - 3\\,600) \\times 0{,}80}{4\\,500} = 0{,}90 \\quad \\rightarrow \\quad \\frac{(8\\,640 - 1\\,200) \\times 0{,}80}{4\\,500} = 1{,}32",
  },
  units: {
    table: [
      ['Volume de retenue', 'hm³ (10⁶ m³)', 'acre-ft', '1 hm³ = 811 acre-ft'],
      ['Débit', 'm³/s', 'cfs', '1 m³/s = 35,3 cfs'],
      ['Pression', 'kPa', 'psi', '10 m d’eau ≈ 100 kPa ≈ 14,5 psi'],
      ['Gradient', '-', '-', 'Sans dimension'],
      ['Période de retour', 'ans', 'years', 'Crues de projet : 1 000 à 10 000 ans pour les grands barrages'],
    ],
    note: 'La crue de projet dépend de la classe du barrage et de la réglementation nationale.',
  },
  hypotheses: {
    items: [
      ['info', 'Le calcul de glissement simplifié néglige la cohésion et les effets tridimensionnels ; il illustre l’ordre de grandeur des sous-pressions.'],
      ['info', 'La formule de Froehlich est empirique, fondée sur des ruptures observées de barrages en remblai.'],
      ['warning', 'Les causes des accidents réels sont multiples ; les résumés présentés simplifient des analyses très détaillées.'],
      ['warning', 'Le premier remplissage est une phase critique qui doit être suivie de près.'],
      ['tip', 'Lisez les rapports d’enquête originaux : ils sont riches d’enseignements techniques et organisationnels.'],
    ],
  },
  simple_examples: {
    examples: [
      {
        title: 'Exemple 1 : gradient de sortie',
        given: 'Perte de charge 12 m sur un chemin de 20 m ; i_c = 1',
        find: 'Coefficient de sécurité',
        solution_latex: "i = \\frac{12}{20} = 0{,}60 \\qquad F = \\frac{1}{0{,}60} = 1{,}67",
        result: 'F = 1,67 : marge insuffisante pour un barrage (on vise souvent 3 à 4 sans filtre).',
      },
      {
        title: 'Exemple 2 : débit de brèche',
        given: 'V_w = 10 × 10⁶ m³ ; H_w = 20 m',
        find: 'Q_p',
        solution_latex: "Q_p = 0{,}607 \\times (10^7)^{0{,}295} \\times 20^{1{,}24} = 0{,}607 \\times 116{,}1 \\times 41{,}1 = 2\\,894\\ \\text{m}^3/\\text{s}",
        result: 'Environ 2 900 m³/s, bien plus qu’une crue centennale de la rivière.',
      },
      {
        title: 'Exemple 3 : poussée hydrostatique',
        given: 'H = 50 m',
        find: 'P par mètre',
        solution_latex: "P = \\frac{1}{2} \\times 10 \\times 50^2 = 12\\,500\\ \\text{kN/m}",
        result: '12 500 kN par mètre de barrage.',
      },
    ],
  },
  real_examples: {
    title: 'Exemple réel — Malpasset, 2 décembre 1959',
    examples: [
      {
        context: 'Barrage-voûte mince de 66 m sur le Reyran, au-dessus de Fréjus',
        scenario: "Après de fortes pluies, la retenue atteint pour la première fois sa cote maximale. Dans la nuit, la voûte cède brutalement : la fondation rive gauche, découpée par une faille et un réseau de diaclases, est chassée sous l'effet des pressions d'eau. La vague dévaste la vallée et Fréjus, faisant 423 victimes.",
        decomposition_latex: "\\text{Discontinuités du rocher} + \\text{sous-pressions au premier remplissage} \\Rightarrow \\text{coin chassé} \\Rightarrow \\text{rupture de la voûte}",
        lesson: "La géologie de la fondation et les pressions d'eau dans le rocher doivent être étudiées et drainées ; la surveillance du premier remplissage est capitale.",
      },
    ],
  },
  diagrams: {
    title: 'Schéma de principe — Chaîne de défaillance d’un barrage',
    diagram_description: [
      'Faiblesse initiale : géologie, conception, exécution',
      'Sollicitation : premier remplissage, crue, séisme',
      'Mécanisme : sous-pression, érosion interne, glissement, submersion',
      'Signes précurseurs : fuites, déplacements, piézométrie anormale',
      'Rupture et onde de submersion',
      'Retour d’expérience : réglementation, méthodes, surveillance',
    ],
  },
  mistakes: {
    items: [
      ['Négliger les sous-pressions', 'Glissement de la fondation', 'Drainer et instrumenter la fondation.'],
      ['Ignorer des signes précurseurs', 'Accident évitable', 'Seuils d’alerte et procédures d’abaissement de la retenue.'],
      ['Évacuateur sous-dimensionné ou mal entretenu', 'Submersion ou destruction', 'Crue de projet adaptée, inspections régulières.'],
    ],
  },
  tips: {
    tips: [
      'Analysez un accident par ses causes techniques et organisationnelles.',
      'Comparez toujours la conception aux leçons des ruptures connues.',
      'Exigez une auscultation renforcée pendant le premier remplissage.',
      'Étudiez l’onde de rupture pour préparer les plans d’urgence.',
    ],
  },
  norms: {
    norms: [
      ['Décret n° 2007-1735 et suivants (France)', 'Sécurité des ouvrages hydrauliques et études de dangers.'],
      ['Bulletins CIGB (ICOLD)', 'Commission internationale des grands barrages : retours d’expérience et recommandations.'],
      ['Recommandations du CFBR', 'Comité français des barrages et réservoirs : justification des barrages.'],
      ['FEMA P-93 / guides USBR', 'Sécurité des barrages aux États-Unis.'],
    ],
  },
  exercises: {
    exercises: [
      {
        level: 1,
        text: 'Calculer la sous-pression sans drainage sous un barrage de base 40 m retenant 45 m d’eau.',
        hint: 'U = ½ γ_w H B.',
        answer_latex: "U = \\frac{1}{2} \\times 10 \\times 45 \\times 40 = 9\\,000\\ \\text{kN/m}",
        answer_text: '9 000 kN/m.',
      },
      {
        level: 2,
        text: 'Avec W = 24 000 kN/m, P = 10 125 kN/m, U = 9 000 kN/m et tan φ = 0,75, calculer F_s.',
        hint: 'F_s = (W − U) tan φ / P.',
        answer_latex: "F_s = \\frac{(24\\,000 - 9\\,000) \\times 0{,}75}{10\\,125} = 1{,}11",
        answer_text: 'F_s = 1,11 : insuffisant ; le drainage ou la cohésion doivent être mobilisés.',
      },
      {
        level: 3,
        text: 'Estimer Q_p pour V_w = 50 × 10⁶ m³ et H_w = 35 m.',
        hint: '(5 × 10⁷)^0,295 ≈ 187 ; 35^1,24 ≈ 82,0.',
        answer_latex: "Q_p = 0{,}607 \\times 187 \\times 82{,}0 \\approx 9\\,300\\ \\text{m}^3/\\text{s}",
        answer_text: 'Environ 9 300 m³/s.',
      },
    ],
  },
  quiz: {
    title: 'Quiz — Ruptures de barrages',
    questions: [
      { q: 'Quelle est la cause principale de la rupture de Malpasset ?', options: ['Submersion', 'Rupture de la fondation rocheuse', 'Séisme'], correct: 1, explain: 'Le rocher de fondation a cédé sous les pressions d’eau.' },
      { q: 'À Vajont, le barrage…', options: ['S’est effondré', 'Est resté debout, franchi par une vague', 'N’était pas encore rempli'], correct: 1, explain: 'Le glissement a provoqué une vague qui a franchi l’ouvrage.' },
      { q: 'Quel mécanisme a détruit le barrage de Teton ?', options: ['Érosion interne', 'Corrosion', 'Fatigue'], correct: 0, explain: 'Érosion interne au premier remplissage.' },
    ],
  },
  exam_questions: {
    questions: [
      'Comparez les mécanismes de rupture de Malpasset et de Teton.',
      'Expliquez le rôle des sous-pressions et du drainage dans la stabilité d’un barrage-poids.',
      'Quelles leçons réglementaires et techniques ont été tirées de ces accidents ?',
    ],
  },
  interview_questions: {
    questions: [
      ['Quelle leçon retenez-vous de Vajont ?', 'Le risque peut venir de l’environnement de l’ouvrage (versants de la retenue) et les signes précurseurs doivent être pris au sérieux, même quand ils contrarient l’exploitation.'],
      ['Comment surveille-t-on un barrage en remblai ?', 'Par la piézométrie, les débits de fuite (et leur turbidité), les déplacements topographiques, les inspections visuelles et des seuils d’alerte associés à des actions.'],
    ],
  },
  practical_case: {
    title: 'Cas pratique — Analyse de l’auscultation d’une digue',
    scenario: 'Une digue en remblai de 15 m présente un débit de fuite passant de 2 à 9 L/min en une semaine, avec une eau devenue trouble. Retenue à la cote maximale.',
    description: 'Évaluer la situation et décider.',
    resolutions: [
      "\\text{Débit} \\times 4{,}5 \\text{ et turbidité} \\Rightarrow \\text{transport de particules : érosion interne possible}",
      "\\text{Action immédiate} : \\text{abaissement de la retenue, inspection, filtre inversé au point de sortie}",
      "\\text{Information des autorités et préparation du plan d’urgence}",
    ],
    conclusion: 'Une fuite qui augmente et se trouble est un signe d’alerte majeur : on agit sans attendre, en réduisant la charge hydraulique.',
  },
  summary: {
    content: `### Les ruptures de barrages en 5 points
1. Malpasset : fondation rocheuse et sous-pressions.
2. Vajont : glissement du versant dans la retenue.
3. Teton : érosion interne au premier remplissage.
4. Oroville : évacuateur de crues dégradé.
5. Leçons : drainage, filtres, auscultation, évacuateurs, surveillance continue.`,
  },
  key_points: {
    points: [
      'U = ½ γ_w H B sans drainage',
      'F_s = (W − U) tan φ / P',
      'i_c ≈ 1',
      'Premier remplissage = phase critique',
      'Fuite trouble = alerte',
    ],
  },
  self_assessment: {
    objectives: [
      'Je connais les grands accidents de barrages',
      'Je sais calculer l’effet des sous-pressions',
      'Je comprends l’érosion interne',
      'Je sais estimer un débit de brèche',
      "J'ai réussi le quiz avec au moins 2 bonnes réponses sur 3",
    ],
  },
});
