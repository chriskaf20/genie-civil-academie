// ── Lesson: Acoustique du bâtiment — Module 42 ───────────────────────────────
import { buildLesson } from './build_lesson.js';

export const lesson_physique_acoustique = buildLesson({
  moduleId: 42,
  slug: 'physique_acoustique',
  lessonIndex: 3,
  title: "Acoustique du Bâtiment : Décibels, Loi de Masse, Bruits d'Impact, Temps de Réverbération (Sabine)",
  subtitle: 'Module 42 — Physique du bâtiment : thermique, hygrométrie & acoustique',
  level: 'Intermédiaire',
  duration: '5h',
  diagramType: 'none',
  tags: ['Acoustique', 'Décibel', 'Loi de masse', 'Isolement', 'Bruit de choc', 'Sabine', 'Réverbération', 'Chape flottante'],
}, {
  definition: {
    title: 'Définition — Isoler et corriger le son',
    fr: 'Acoustique du bâtiment',
    en: 'Building acoustics',
    metier: "Concerne les acousticiens, architectes, bureaux d'études et entreprises de cloisons, plafonds et sols.",
    content: `Le son est une vibration de l'air. On le mesure en **décibels** (dB), une échelle **logarithmique** :
$$L = 10 \\log_{10}\\left(\\frac{I}{I_0}\\right)$$

L'acoustique du bâtiment traite deux problèmes distincts :
- **L'isolation acoustique** : empêcher le son de passer d'un local à l'autre (bruits aériens : voix, TV ; bruits d'impact : pas, chutes d'objets ; bruits d'équipements).
- **La correction acoustique** : maîtriser la **réverbération** à l'intérieur d'un local (salle de classe, cantine, open space) pour garantir l'intelligibilité.

### Deux leviers d'isolation
- **La masse** : une paroi lourde vibre moins (loi de masse).
- **Le système masse-ressort-masse** : deux parois légères séparées par un isolant fibreux (cloison double, doublage, chape flottante).

> 💡 Ajouter deux sources de même niveau n'augmente le niveau que de 3 dB.`,
  },
  importance: {
    content: `- **Confort et santé** : le bruit est l'une des premières nuisances citées par les habitants.
- **Réglementation** : en France, les logements neufs doivent atteindre un isolement aux bruits aériens d'au moins 53 dB entre logements et un niveau de bruit de choc d'au plus 58 dB.
- **Établissements recevant des enfants** : des durées de réverbération maximales sont imposées dans les salles de classe.
- **Contentieux** : une mauvaise isolation est difficile et coûteuse à corriger après coup.

> ⚠️ **À retenir** : la moindre fuite (gaine, prise dos à dos, joint ouvert) ruine l'isolement d'une paroi performante.`,
  },
  applications: {
    examples: [
      ['Logements collectifs', 'Dalle béton de 20 cm et chape flottante sur résilient.'],
      ['Cloison séparative légère', 'Double ossature, deux plaques par face, laine minérale.'],
      ['Salle de classe', 'Plafond absorbant pour T ≈ 0,6 s.'],
      ['Restaurant', 'Panneaux absorbants pour limiter l’effet « cocktail ».'],
      ['Local technique', 'Plots antivibratiles sous les machines.'],
    ],
  },
  theory: {
    title: 'Théorie — Niveaux, isolement et réverbération',
    content: `### 1. Additionner des niveaux sonores
$$L_{tot} = 10 \\log_{10}\\left(\\sum 10^{L_i/10}\\right)$$
Deux sources de 60 dB : 63 dB. Dix sources de 60 dB : 70 dB.

### 2. Loi de masse (paroi simple)
$$R \\approx 20 \\log_{10}(m \\cdot f) - 47$$
$m$ : masse surfacique (kg/m²) ; $f$ : fréquence (Hz). Doubler la masse gagne environ **6 dB**.

### 3. Transmissions latérales
Le son passe par la paroi séparative mais aussi par les parois qui lui sont liées (planchers, façades) : l'isolement mesuré in situ $D_{nT,A}$ est inférieur à l'indice de laboratoire $R_w$ de la paroi seule.

### 4. Bruits d'impact
Un choc sur une dalle la met en vibration. On réduit le niveau $L'_{nT,w}$ avec une **chape flottante** désolidarisée par une sous-couche résiliente, ou un revêtement souple.

### 5. Temps de réverbération (Sabine)
$$T = 0{,}16 \\, \\frac{V}{A} \\qquad A = \\sum \\alpha_i \\, S_i$$
$V$ : volume du local ; $A$ : aire d'absorption équivalente ; $\\alpha$ : coefficient d'absorption (0 = réfléchissant, 1 = absorbant).`,
  },
  formulas: {
    title: 'Formules essentielles — Acoustique',
    formulas: [
      {
        name: 'Addition de niveaux',
        latex: "L_{tot} = 10 \\log_{10}\\left(\\sum 10^{L_i/10}\\right)",
        description: 'Les décibels ne s’additionnent pas arithmétiquement.',
        vars: [['L_i', 'Niveaux des sources', 'dB', '']],
      },
      {
        name: 'Loi de masse',
        latex: "R \\approx 20 \\log_{10}(m\\, f) - 47",
        description: 'Indice d’affaiblissement d’une paroi simple et homogène.',
        vars: [['R', 'Indice d’affaiblissement', 'dB', ''], ['m', 'Masse surfacique', 'kg/m²', 'Béton 20 cm ≈ 480.'], ['f', 'Fréquence', 'Hz', '500 Hz pour une valeur moyenne.']],
      },
      {
        name: 'Formule de Sabine',
        latex: "T = 0{,}16\\, \\frac{V}{A} \\qquad A = \\sum \\alpha_i S_i",
        description: 'Durée de réverbération d’un local.',
        vars: [['T', 'Temps de réverbération', 's', ''], ['V', 'Volume', 'm³', ''], ['A', 'Aire d’absorption équivalente', 'm²', ''], ['\\alpha_i', 'Coefficient d’absorption', '-', '0,02 béton ; 0,7 à 0,9 plafond absorbant.']],
      },
      {
        name: 'Isolement entre locaux',
        latex: "D = L_1 - L_2",
        description: 'Différence de niveaux entre local émetteur et local récepteur.',
        vars: [['L_1, L_2', 'Niveaux d’émission et de réception', 'dB', '']],
      },
    ],
  },
  stepbystep: {
    title: 'Calcul complet — Correction acoustique d’une salle de classe',
    problem: "Salle de classe de 8,0 × 7,0 × 3,0 m. Murs et sol peu absorbants (α = 0,05), plafond en béton (α = 0,02). Objectif : T ≤ 0,6 s. Calculer T actuel, puis l'effet d'un plafond absorbant (α = 0,80).",
    steps_demo: [
      { n: 1, text: "Volume : V = 8 × 7 × 3 = 168 m³." },
      { n: 2, text: "Surfaces : plafond 56 m², sol 56 m², murs 2 × (8 + 7) × 3 = 90 m²." },
      { n: 3, text: "Actuel : A = 56 × 0,02 + 56 × 0,05 + 90 × 0,05 = 1,12 + 2,80 + 4,50 = 8,42 m² → T = 0,16 × 168 / 8,42 = 3,2 s : beaucoup trop réverbérant." },
      { n: 4, text: "Plafond absorbant : A = 56 × 0,80 + 2,80 + 4,50 = 52,1 m² (+ élèves et mobilier ≈ 5 m² : 57 m²)." },
      { n: 5, text: "T = 0,16 × 168 / 57 = 0,47 s ≤ 0,6 s ✓." },
    ],
    result_latex: "T_{avant} = 0{,}16 \\times \\frac{168}{8{,}4} = 3{,}2\\ \\text{s} \\qquad T_{après} = 0{,}16 \\times \\frac{168}{57} = 0{,}47\\ \\text{s}",
  },
  units: {
    table: [
      ['Niveau sonore', 'dB', 'dB', 'Échelle logarithmique'],
      ['Isolement', 'dB', 'STC (≈ R_w)', 'Indices nord-américains voisins'],
      ['Temps de réverbération', 's', 's', ''],
      ['Aire d’absorption', 'm² (sabins métriques)', 'sabins (ft²)', '1 m² = 10,76 sabins'],
      ['Masse surfacique', 'kg/m²', 'psf', '1 kg/m² = 0,205 psf'],
    ],
    note: 'Le « A » de D_nT,A signifie une pondération qui tient compte de la sensibilité de l’oreille aux différentes fréquences.',
  },
  hypotheses: {
    items: [
      ['info', 'La loi de masse est une approximation pour une paroi simple, homogène, au-dessus de sa fréquence critique.'],
      ['info', 'La formule de Sabine suppose un champ sonore diffus : elle convient aux locaux courants peu absorbants.'],
      ['warning', 'Les résultats in situ incluent les transmissions latérales et les défauts d’exécution.'],
      ['warning', 'Un isolant thermique rigide (polystyrène) collé sur un mur peut dégrader l’isolation acoustique (effet de résonance).'],
      ['tip', 'Traitez les points faibles : portes, gaines, prises électriques, joints périphériques.'],
    ],
  },
  simple_examples: {
    examples: [
      { title: 'Exemple 1 : deux machines', given: 'Deux sources de 70 dB', find: 'Niveau total', solution_latex: "L = 10 \\log(2 \\times 10^{7}) = 73\\ \\text{dB}", result: '73 dB : +3 dB seulement.' },
      { title: 'Exemple 2 : loi de masse', given: 'Dalle béton de 20 cm (480 kg/m²) à 500 Hz', find: 'R', solution_latex: "R \\approx 20 \\log(480 \\times 500) - 47 = 60{,}6\\ \\text{dB}", result: 'Environ 60 dB.' },
      { title: 'Exemple 3 : doubler la masse', given: 'Paroi de 200 kg/m² remplacée par 400 kg/m²', find: 'Gain', solution_latex: "\\Delta R = 20 \\log 2 = 6\\ \\text{dB}", result: '+6 dB.' },
    ],
  },
  real_examples: {
    title: 'Exemple réel — Bruits de pas dans un immeuble neuf',
    examples: [
      {
        context: 'Immeuble de logements avec carrelage collé directement sur la dalle',
        scenario: "Les occupants du dessous entendaient nettement les pas et les chutes d'objets. La mesure a donné L'nT,w = 68 dB pour 58 dB exigés. La correction a nécessité de déposer le carrelage et de réaliser une chape flottante sur sous-couche résiliente, avec une bande périphérique désolidarisant la chape des murs.",
        decomposition_latex: "\\text{Revêtement dur collé} \\Rightarrow L'_{nT,w} = 68\\ \\text{dB} > 58 \\Rightarrow \\text{chape flottante}",
        lesson: "Les dispositions contre les bruits d'impact doivent être prévues dès la conception : elles sont presque impossibles à ajouter sans démolition.",
      },
    ],
  },
  diagrams: {
    title: 'Schéma de principe — Traiter un problème acoustique',
    diagram_description: [
      'Identifier le bruit : aérien, impact, équipement, réverbération',
      'Fixer l’objectif réglementaire ou de confort',
      'Choisir le principe : masse, masse-ressort-masse, désolidarisation, absorption',
      'Traiter les transmissions latérales et les points faibles',
      'Soigner l’exécution (joints, fuites, bandes résilientes)',
      'Mesurer à la réception',
    ],
  },
  mistakes: {
    items: [
      ['Additionner des décibels', 'Niveau surestimé', 'Utiliser la somme logarithmique.'],
      ['Confondre isolation et correction', 'Mauvaise solution', 'Isoler entre locaux, absorber dans le local.'],
      ['Chape flottante en contact avec les murs', 'Pont phonique', 'Bande résiliente périphérique continue.'],
    ],
  },
  tips: {
    tips: [
      'Retenez : +3 dB = énergie doublée ; +10 dB ≈ son perçu deux fois plus fort.',
      'Doubler la masse d’une paroi simple : +6 dB environ.',
      'Évitez les prises électriques dos à dos sur une cloison séparative.',
      'Dans les salles de classe, placez l’absorbant au plafond.',
    ],
  },
  norms: {
    norms: [
      ['Arrêté du 30 juin 1999 (France)', 'Caractéristiques acoustiques des bâtiments d’habitation.'],
      ['Arrêté du 25 avril 2003 (France)', 'Acoustique des établissements d’enseignement, de santé et hôtels.'],
      ['NF EN ISO 717-1 et -2', 'Évaluation de l’isolement aux bruits aériens et de chocs.'],
      ['NF EN ISO 12354', 'Estimation des performances acoustiques à partir des éléments.'],
      ['NF EN ISO 3382-2', 'Mesure de la durée de réverbération.'],
    ],
  },
  exercises: {
    exercises: [
      { level: 1, text: 'Quel est le niveau de 4 sources de 60 dB ?', hint: '10 log(4 × 10⁶).', answer_latex: "L = 60 + 10 \\log 4 = 66\\ \\text{dB}", answer_text: '66 dB.' },
      { level: 2, text: 'Calculer R d’une paroi de 300 kg/m² à 500 Hz par la loi de masse.', hint: '20 log(m f) − 47.', answer_latex: "R = 20 \\log(150\\,000) - 47 = 56{,}5\\ \\text{dB}", answer_text: '≈ 56,5 dB.' },
      { level: 3, text: 'Une cantine de 600 m³ doit avoir T ≤ 0,8 s. Quelle aire d’absorption faut-il ?', hint: 'A = 0,16 V / T.', answer_latex: "A = \\frac{0{,}16 \\times 600}{0{,}8} = 120\\ \\text{m}^2", answer_text: '120 m² d’absorption équivalente.' },
    ],
  },
  quiz: {
    title: 'Quiz — Acoustique',
    questions: [
      { q: 'Deux sources de 60 dB donnent…', options: ['120 dB', '63 dB', '60 dB'], correct: 1, explain: 'Énergie doublée : +3 dB.' },
      { q: 'Doubler la masse d’une paroi simple fait gagner environ…', options: ['3 dB', '6 dB', '20 dB'], correct: 1, explain: '20 log 2 ≈ 6 dB.' },
      { q: 'Qu’est-ce qui réduit les bruits de pas ?', options: ['Une chape flottante', 'Un plafond absorbant', 'Une peinture épaisse'], correct: 0, explain: 'Elle désolidarise le revêtement de la dalle.' },
    ],
  },
  exam_questions: {
    questions: [
      'Distinguez isolation acoustique et correction acoustique.',
      'Expliquez la loi de masse et le principe masse-ressort-masse.',
      'Calculez le temps de réverbération d’un local et proposez une correction.',
    ],
  },
  interview_questions: {
    questions: [
      ['Comment atteindre 53 dB entre deux logements ?', 'Paroi séparative lourde ou double ossature avec laine, traitement des transmissions latérales (planchers, façades), et une exécution soignée sans fuites.'],
      ['Une salle de réunion « résonne » : que proposez-vous ?', 'Mesurer ou calculer T, puis ajouter de l’absorption (plafond, panneaux muraux) pour atteindre la valeur visée.'],
    ],
  },
  practical_case: {
    title: 'Cas pratique — Plancher entre deux logements',
    scenario: 'Dalle béton de 18 cm (430 kg/m²) sous carrelage. Exigences : D_nT,A ≥ 53 dB, L’nT,w ≤ 58 dB.',
    description: 'Vérifier l’ordre de grandeur aux bruits aériens et choisir une solution contre les bruits de chocs.',
    resolutions: [
      "R_{500} \\approx 20 \\log(430 \\times 500) - 47 = 59{,}6\\ \\text{dB}",
      "\\text{Transmissions latérales : } D_{nT,A} \\approx R - 4 \\text{ à } 6\\ \\text{dB} \\approx 54 \\text{ à } 56\\ \\text{dB} \\geq 53",
      "\\text{Chocs : carrelage collé} \\Rightarrow L'_{nT,w} \\approx 70\\ \\text{dB} ; \\text{chape flottante} \\Rightarrow \\approx 50\\ \\text{dB} \\leq 58",
    ],
    conclusion: 'La masse de la dalle suffit pour les bruits aériens ; une chape flottante sur résilient est nécessaire pour les bruits de chocs.',
  },
  summary: {
    content: `### L'acoustique en 5 points
1. Décibels logarithmiques : deux sources égales → +3 dB.
2. Loi de masse : $R \\approx 20 \\log(m f) - 47$, +6 dB par doublement.
3. Transmissions latérales : l'isolement réel est inférieur à $R_w$.
4. Chocs : chape flottante, revêtement souple.
5. Réverbération : $T = 0{,}16\\, V / A$.`,
  },
  key_points: {
    points: ['+3 dB par doublement de sources', 'R ≈ 20 log(m f) − 47', '+6 dB par doublement de masse', 'T = 0,16 V / A', 'Chape flottante contre les chocs'],
  },
  self_assessment: {
    objectives: [
      'Je sais additionner des niveaux sonores',
      'Je sais appliquer la loi de masse',
      'Je sais calculer un temps de réverbération',
      'Je sais choisir une solution contre les bruits de chocs',
      "J'ai réussi le quiz avec au moins 2 bonnes réponses sur 3",
    ],
  },
});
