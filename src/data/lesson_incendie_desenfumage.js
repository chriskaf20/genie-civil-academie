// ── Lesson: Désenfumage — Module 43 ──────────────────────────────────────────
import { buildLesson } from './build_lesson.js';

export const lesson_incendie_desenfumage = buildLesson({
  moduleId: 43,
  slug: 'incendie_desenfumage',
  lessonIndex: 2,
  title: "Désenfumage : Panache de Fumée, Cantons, Désenfumage Naturel et Mécanique, Amenées d'Air",
  subtitle: 'Module 43 — Sécurité incendie & résistance au feu',
  level: 'Intermédiaire',
  duration: '5h',
  diagramType: 'none',
  tags: ['Désenfumage', 'Fumées', 'Panache', 'Canton', 'Exutoire', 'Extraction mécanique', 'Amenée d’air', 'IT 246'],
}, {
  definition: {
    title: 'Définition — Évacuer les fumées pour sauver les vies',
    fr: 'Désenfumage',
    en: 'Smoke control',
    metier: "Concerne les bureaux d'études sécurité incendie, les ingénieurs fluides, les architectes et les préventionnistes.",
    content: `Dans un incendie, la majorité des victimes meurent **intoxiquées par les fumées**, pas brûlées. Le **désenfumage** a deux objectifs :
1. Maintenir praticables les **chemins d'évacuation** (une couche d'air frais sous la fumée).
2. Faciliter l'**intervention des pompiers** et limiter la propagation.

### Le principe : balayage
On **extrait** les fumées en partie haute et on **amène de l'air frais** en partie basse. La fumée, chaude et légère, forme une couche sous le plafond.

### Deux techniques
- **Désenfumage naturel** : exutoires en toiture ou ouvrants en façade haute ; amenées d'air par des ouvrants bas ou des portes.
- **Désenfumage mécanique** : ventilateurs d'extraction résistants au feu, conduits, et amenées d'air naturelles ou mécaniques.

### Cantons
Les grands volumes sont divisés en **cantons de désenfumage** par des écrans de cantonnement (retombées de plafond) pour confiner la fumée.

> 💡 Sans amenée d'air, un désenfumage ne fonctionne pas : on ne peut pas extraire l'air d'un local fermé.`,
  },
  importance: {
    content: `- **Vies humaines** : la fumée réduit la visibilité à quelques mètres et contient des gaz toxiques (CO, HCN).
- **Réglementation** : obligatoire dans de nombreux ERP, IGH, locaux de travail et parcs de stationnement.
- **Conception** : les exutoires, conduits et ventilateurs ont un impact fort sur l'architecture.
- **Interfaces** : le système de sécurité incendie (SSI) commande ouvrants, ventilateurs et clapets.

> ⚠️ **À retenir** : une fumée qui descend sous 2 m environ dans un dégagement rend l'évacuation très difficile.`,
  },
  applications: {
    examples: [
      ['Entrepôt', 'Exutoires en toiture, cantons délimités par des écrans de 1 m.'],
      ['Centre commercial', 'Extraction mécanique par cantons et amenées d’air en partie basse.'],
      ['Couloir d’hôtel', 'Bouches d’extraction et d’amenée alternées.'],
      ['Parc de stationnement', 'Désenfumage par extraction, ventilateurs résistants au feu.'],
      ['Cage d’escalier', 'Exutoire en partie haute et amenée d’air en bas.'],
    ],
  },
  theory: {
    title: 'Théorie — Panache, couche de fumée et débits',
    content: `### 1. Le panache de fumée
Le feu crée un panache ascendant qui **entraîne l'air ambiant** : plus le plafond est haut, plus le débit de fumée est grand. Corrélation de Heskestad (au-dessus de la flamme) :
$$\\dot m \\approx 0{,}071 \\, Q_c^{1/3} \\, z^{5/3} + 0{,}0018 \\, Q_c$$
$Q_c$ : puissance convective du feu (kW, ≈ 70 % de la puissance totale) ; $z$ : hauteur au-dessus du foyer (m) ; $\\dot m$ en kg/s.

### 2. Débit volumique de fumée
$$\\dot V = \\frac{\\dot m}{\\rho_f} \\qquad \\rho_f \\approx \\frac{353}{T_f}$$
($T_f$ en kelvins : fumée à 150 °C → ρ ≈ 0,83 kg/m³).

### 3. Règles de conception usuelles (ERP, France — IT 246)
- Cantons de **1 600 m² au plus** et de **60 m de longueur au plus**.
- Extraction mécanique : débit de l'ordre de **1 m³/s par 100 m²** de local.
- Amenées d'air : vitesse de passage limitée à **5 m/s** environ.
- Les écrans de cantonnement descendent sous le plafond pour retenir la couche de fumée.

### 4. Commande
Détection automatique ou déclenchement manuel → ouverture des exutoires/amenées et démarrage des ventilateurs, coordonnés par le SSI.`,
  },
  formulas: {
    title: 'Formules essentielles — Désenfumage',
    formulas: [
      {
        name: 'Débit massique de fumée (Heskestad)',
        latex: "\\dot m \\approx 0{,}071\\, Q_c^{1/3} z^{5/3} + 0{,}0018\\, Q_c",
        description: 'Air entraîné par le panache jusqu’à la hauteur z.',
        vars: [['\\dot m', 'Débit massique', 'kg/s', ''], ['Q_c', 'Puissance convective', 'kW', '≈ 0,7 × puissance du feu.'], ['z', 'Hauteur libre au-dessus du foyer', 'm', '']],
      },
      {
        name: 'Masse volumique de la fumée',
        latex: "\\rho_f \\approx \\frac{353}{T_f}",
        description: 'Gaz chaud assimilé à de l’air.',
        vars: [['T_f', 'Température de la fumée', 'K', '']],
      },
      {
        name: 'Débit d’extraction réglementaire (ordre de grandeur)',
        latex: "\\dot V_{ext} = 1\\ \\text{m}^3/\\text{s} \\times \\frac{S}{100}",
        description: 'Règle usuelle pour l’extraction mécanique d’un local d’ERP.',
        vars: [['S', 'Surface du local ou du canton', 'm²', '']],
      },
      {
        name: 'Section des amenées d’air',
        latex: "A = \\frac{\\dot V}{v_{max}}",
        description: 'Vitesse de passage limitée pour ne pas perturber l’évacuation.',
        vars: [['v_{max}', 'Vitesse maximale', 'm/s', '≈ 5 m/s.']],
      },
    ],
  },
  stepbystep: {
    title: 'Calcul complet — Désenfumage mécanique d’un atelier de 1 200 m²',
    problem: "Atelier de 40 × 30 m, hauteur 6 m. Concevoir un désenfumage mécanique : nombre de cantons, débit d'extraction et section des amenées d'air. Vérifier l'ordre de grandeur avec un feu de 1,5 MW à 1 m du sol.",
    steps_demo: [
      { n: 1, text: "Cantons : 1 200 m² ≤ 1 600 m² et longueur 40 m ≤ 60 m → un seul canton suffit." },
      { n: 2, text: "Débit d'extraction : 1 m³/s × 1 200 / 100 = 12 m³/s." },
      { n: 3, text: "Amenées d'air : A = 12 / 5 = 2,4 m² au minimum, en partie basse, réparties." },
      { n: 4, text: "Contrôle physique : Q_c = 0,7 × 1 500 = 1 050 kW ; z = 6 − 1 − 2 (couche de fumée) = 3 m ; ṁ = 0,071 × 10,2 × 6,24 + 1,9 = 6,4 kg/s." },
      { n: 5, text: "Fumée à 150 °C : ρ ≈ 0,83 kg/m³ → V̇ ≈ 7,7 m³/s < 12 m³/s : la règle forfaitaire couvre ce feu." },
    ],
    result_latex: "\\dot V_{ext} = 12\\ \\text{m}^3/\\text{s} \\qquad A_{amenée} = \\frac{12}{5} = 2{,}4\\ \\text{m}^2 \\qquad \\dot m_{panache} \\approx 6{,}4\\ \\text{kg/s}",
  },
  units: {
    table: [
      ['Débit volumique', 'm³/s', 'cfm', '1 m³/s = 2 119 cfm'],
      ['Débit massique', 'kg/s', 'lb/s', '1 kg/s = 2,205 lb/s'],
      ['Puissance du feu', 'kW, MW', 'BTU/s', '1 kW = 0,948 BTU/s'],
      ['Vitesse', 'm/s', 'ft/min', '5 m/s ≈ 985 ft/min'],
      ['Température', '°C, K', '°F', 'T(K) = T(°C) + 273'],
    ],
    note: 'Les règles forfaitaires (IT 246) et l’ingénierie du désenfumage (simulation) peuvent conduire à des débits différents : le texte applicable au projet fait foi.',
  },
  hypotheses: {
    items: [
      ['info', 'La corrélation de panache suppose un feu axisymétrique loin des parois.'],
      ['info', 'Les valeurs réglementaires citées concernent les ERP français ; d’autres textes s’appliquent aux locaux de travail, IGH et parkings.'],
      ['warning', 'Un désenfumage naturel est sensible au vent : les exutoires doivent être placés et dimensionnés en conséquence.'],
      ['warning', 'Les sprinklers refroidissent la fumée, qui devient moins flottante : la conception doit les prendre en compte.'],
      ['tip', 'Vérifiez la cohérence entre cantons, détection, SSI et compartimentage dès l’avant-projet.'],
    ],
  },
  simple_examples: {
    examples: [
      { title: 'Exemple 1 : masse volumique', given: 'Fumée à 200 °C', find: 'ρ_f', solution_latex: "\\rho_f = \\frac{353}{473} = 0{,}75\\ \\text{kg/m}^3", result: '0,75 kg/m³.' },
      { title: 'Exemple 2 : débit forfaitaire', given: 'Canton de 900 m²', find: 'Débit d’extraction', solution_latex: "\\dot V = 1 \\times \\frac{900}{100} = 9\\ \\text{m}^3/\\text{s}", result: '9 m³/s.' },
      { title: 'Exemple 3 : amenée d’air', given: 'Extraction 9 m³/s, v ≤ 5 m/s', find: 'Section', solution_latex: "A = \\frac{9}{5} = 1{,}8\\ \\text{m}^2", result: '1,8 m² d’ouvrants bas.' },
    ],
  },
  real_examples: {
    title: 'Exemple réel — Incendie de la discothèque de Santa Maria (Brésil, 2013)',
    examples: [
      {
        context: 'Discothèque fermée, une seule issue, mousse acoustique inflammable au plafond',
        scenario: "Un engin pyrotechnique a enflammé la mousse du plafond. Les fumées toxiques ont envahi la salle en quelques minutes ; l'absence de désenfumage, une capacité d'évacuation très insuffisante et l'issue unique ont conduit à 242 décès, la plupart par intoxication.",
        decomposition_latex: "\\text{Matériaux inflammables} + \\text{fumées non évacuées} + \\text{issues insuffisantes} \\Rightarrow \\text{catastrophe}",
        lesson: "Réaction au feu des matériaux, désenfumage et dégagements suffisants sont indissociables ; la fumée tue plus vite que les flammes.",
      },
    ],
  },
  diagrams: {
    title: 'Schéma de principe — Concevoir un désenfumage',
    diagram_description: [
      'Identifier les locaux et dégagements à désenfumer',
      'Découper en cantons (surface, longueur, écrans)',
      'Choisir naturel ou mécanique et calculer extraction et amenées',
      'Positionner bouches, exutoires, conduits et ventilateurs',
      'Définir la commande (détection, SSI, déclencheurs manuels)',
      'Essais à la réception et maintenance périodique',
    ],
  },
  mistakes: {
    items: [
      ['Oublier les amenées d’air', 'Extraction inefficace', 'Prévoir des amenées basses dimensionnées.'],
      ['Amenée d’air trop proche de l’extraction', 'Court-circuit, fumée non balayée', 'Éloigner et répartir les ouvertures.'],
      ['Canton trop grand', 'Fumée qui se refroidit et descend', 'Écrans de cantonnement et cantons ≤ 1 600 m².'],
    ],
  },
  tips: {
    tips: [
      'Retenez : 1 m³/s par 100 m² et 5 m/s aux amenées d’air (ordres de grandeur ERP).',
      'La fumée se stratifie : extraire en partie haute, amener l’air en partie basse.',
      'Utilisez des ventilateurs certifiés à haute température (EN 12101-3).',
      'Testez les commandes et ouvrants régulièrement : un exutoire grippé est inutile.',
    ],
  },
  norms: {
    norms: [
      ['Instruction technique 246 (France)', 'Désenfumage dans les ERP.'],
      ['NF EN 12101 (série)', 'Systèmes de contrôle des fumées et de la chaleur.'],
      ['Code du travail, R. 4216-13 et arrêté du 5 août 1992', 'Désenfumage des locaux de travail.'],
      ['NF S 61-932 / NF S 61-970', 'Systèmes de sécurité incendie et maintenance.'],
    ],
  },
  exercises: {
    exercises: [
      { level: 1, text: 'Quel débit d’extraction forfaitaire pour un local de 450 m² ?', hint: '1 m³/s par 100 m².', answer_latex: "4{,}5\\ \\text{m}^3/\\text{s}", answer_text: '4,5 m³/s.' },
      { level: 2, text: 'Un local de 2 400 m² et 50 m de long : combien de cantons au minimum ?', hint: 'Canton ≤ 1 600 m².', answer_latex: "\\frac{2\\,400}{1\\,600} = 1{,}5 \\Rightarrow 2", answer_text: '2 cantons.' },
      { level: 3, text: 'Calculer ṁ pour un feu de 1 MW (Q_c = 700 kW) et z = 4 m.', hint: 'Heskestad.', answer_latex: "\\dot m = 0{,}071 \\times 8{,}88 \\times 10{,}08 + 1{,}26 = 7{,}6\\ \\text{kg/s}", answer_text: '≈ 7,6 kg/s.' },
    ],
  },
  quiz: {
    title: 'Quiz — Désenfumage',
    questions: [
      { q: 'Quelle est la première cause de décès dans un incendie ?', options: ['Les brûlures', 'Les fumées toxiques', 'L’effondrement'], correct: 1, explain: 'L’intoxication par les fumées.' },
      { q: 'Où extrait-on la fumée ?', options: ['En partie basse', 'En partie haute', 'Au milieu'], correct: 1, explain: 'La fumée chaude monte sous le plafond.' },
      { q: 'Pourquoi des écrans de cantonnement ?', options: ['Pour décorer', 'Pour confiner la fumée dans un canton', 'Pour isoler du bruit'], correct: 1, explain: 'Ils retiennent la couche de fumée.' },
    ],
  },
  exam_questions: {
    questions: [
      'Expliquez le principe du balayage et le rôle des amenées d’air.',
      'Comparez désenfumage naturel et mécanique.',
      'Dimensionnez l’extraction et les amenées d’air d’un canton.',
    ],
  },
  interview_questions: {
    questions: [
      ['Un exutoire ne s’est pas ouvert lors d’un essai : quelles causes ?', 'Commande (SSI, déclencheur, alimentation pneumatique ou électrique), mécanisme grippé, défaut de maintenance ; je fais contrôler et j’exige un nouvel essai avant réception.'],
      ['Pourquoi un plafond très haut augmente-t-il le débit de fumée ?', 'Le panache entraîne de l’air sur toute sa hauteur : le débit massique croît comme z^(5/3).'],
    ],
  },
  practical_case: {
    title: 'Cas pratique — Couloir d’hôtel',
    scenario: 'Couloir de 45 m desservant des chambres. Le désenfumage mécanique alterne bouches d’extraction et bouches d’amenée d’air.',
    description: 'Organiser les bouches pour balayer tout le couloir.',
    resolutions: [
      "\\text{Distance entre une bouche d'amenée et une bouche d'extraction : de l'ordre de 10 à 15 m}",
      "\\text{Amenées en partie basse, extractions en partie haute, en alternance}",
      "\\text{45 m} \\Rightarrow \\text{2 extractions et 2 amenées alternées, commandées par la détection du niveau}",
    ],
    conclusion: 'L’alternance amenée basse / extraction haute crée un balayage sur toute la longueur du couloir, qui reste praticable pour l’évacuation.',
  },
  summary: {
    content: `### Le désenfumage en 5 points
1. La fumée tue : maintenir une couche d'air frais pour évacuer.
2. Balayage : extraction haute, amenée d'air basse.
3. Panache : $\\dot m \\approx 0{,}071 Q_c^{1/3} z^{5/3}$.
4. Cantons ≤ 1 600 m² et 60 m (ERP) ; ≈ 1 m³/s par 100 m².
5. Commande par le SSI, essais et maintenance.`,
  },
  key_points: {
    points: ['Extraction haute, amenée basse', 'Cantons ≤ 1 600 m², ≤ 60 m', '≈ 1 m³/s par 100 m²', 'Amenées : v ≤ 5 m/s', 'ṁ ∝ z^(5/3)'],
  },
  self_assessment: {
    objectives: [
      'Je connais le principe du balayage',
      'Je sais découper un local en cantons',
      'Je sais dimensionner extraction et amenées d’air',
      'Je sais estimer un débit de panache',
      "J'ai réussi le quiz avec au moins 2 bonnes réponses sur 3",
    ],
  },
});
