// ── Lesson: Analyse non linéaire des structures — Module 8 ───────────────────
import { buildLesson } from './build_lesson.js';

export const lesson_structures_non_lineaire = buildLesson({
  moduleId: 8,
  slug: 'structures_non_lineaire',
  lessonIndex: 4,
  title: "Analyse Non Linéaire : Effets du Second Ordre, Rotules Plastiques & Analyse Push-over",
  subtitle: 'Module 08 — Analyse avancée des structures',
  level: 'Avancé',
  duration: '12h',
  tags: ['Non linéaire', 'P-Delta', 'Second ordre', 'α_cr', 'Rotule plastique', 'Charge de ruine', 'Push-over'],
}, {
  definition: {
    title: 'Définition — Au-delà du calcul élastique linéaire',
    fr: 'Analyse non linéaire des structures',
    en: 'Nonlinear structural analysis',
    metier: "Utilisée pour les structures élancées (portiques, tours), les vérifications de ruine, l'évaluation sismique des bâtiments existants et l'expertise après sinistre.",
    content: `L'analyse **linéaire** suppose que les déplacements sont proportionnels aux charges. Cette hypothèse cesse d'être valable dans deux situations :

1. **Non-linéarité géométrique** : les déplacements deviennent assez grands pour modifier l'équilibre. Un poteau qui se déplace latéralement de $\\Delta$ sous une charge verticale $P$ subit un moment supplémentaire $P \\cdot \\Delta$ : c'est l'**effet P-Delta** (effet du second ordre).
2. **Non-linéarité matérielle** : le matériau se plastifie. Dans une poutre en acier, une section entièrement plastifiée forme une **rotule plastique** qui tourne à moment constant $M_p$ ; la structure ne s'effondre que lorsque suffisamment de rotules forment un **mécanisme**.

> 💡 Une structure hyperstatique ductile a une réserve de résistance au-delà de la première plastification : c'est le principe du calcul plastique et de la conception parasismique.`,
  },
  importance: {
    content: `- **Sécurité des structures souples** : ignorer les effets du second ordre surestime la résistance des portiques élancés.
- **Économie** : le calcul plastique des poutres continues en acier permet des sections plus légères.
- **Séisme** : l'analyse **push-over** évalue la capacité réelle d'un bâtiment existant et ses points faibles.
- **Expertise** : expliquer une ruine nécessite souvent de suivre le comportement jusqu'à l'effondrement.

> ⚠️ **À retenir** : selon l'EC3, si le coefficient critique α_cr est inférieur à 10 (analyse élastique), les effets du second ordre doivent être pris en compte.`,
  },
  applications: {
    examples: [
      ['Portique de hall industriel', 'Calcul de α_cr et amplification des effets horizontaux.'],
      ['Tour de grande hauteur', 'Analyse P-Delta sous vent et séisme.'],
      ['Poutre continue en acier', 'Calcul plastique : formation successive des rotules jusqu’au mécanisme.'],
      ['Bâtiment existant en zone sismique', 'Courbe de capacité push-over et identification de l’étage faible.'],
      ['Charpente après incendie', 'Évaluation de la réserve de résistance d’éléments partiellement dégradés.'],
    ],
  },
  theory: {
    title: 'Théorie — Second ordre et plasticité',
    content: `### 1. Coefficient critique α_cr
$\\alpha_{cr}$ est le facteur par lequel il faudrait multiplier les charges pour provoquer l'instabilité élastique globale. Pour un portique, la méthode de Horne donne par étage :
$$\\alpha_{cr} = \\frac{H_{Ed}}{V_{Ed}} \\cdot \\frac{h}{\\delta_{H,Ed}}$$
- $\\alpha_{cr} \\ge 10$ : analyse au premier ordre suffisante (calcul élastique).
- $3 \\le \\alpha_{cr} < 10$ : on peut amplifier les efforts horizontaux par $\\dfrac{1}{1 - 1/\\alpha_{cr}}$.
- $\\alpha_{cr} < 3$ : analyse au second ordre complète.

### 2. Rotule plastique et facteur de forme
Le moment plastique $M_p = W_{pl} f_y$ dépasse le moment élastique $M_{el} = W_{el} f_y$ ; le rapport $W_{pl}/W_{el}$ (**facteur de forme**) vaut 1,5 pour un rectangle et environ 1,12 à 1,15 pour un profilé en I.

### 3. Méthode cinématique (charge de ruine)
On postule un mécanisme et on écrit l'égalité des travaux extérieurs et intérieurs. Pour une poutre sous charge uniforme :
- sur deux appuis simples : $q_u = 8 M_p / L^2$ ;
- bi-encastrée : $q_u = 16 M_p / L^2$ ;
- encastrée-appuyée : $q_u \\approx 11{,}66 M_p / L^2$.

### 4. Analyse push-over
On applique des forces horizontales croissantes (distribution proche du premier mode) et l'on suit la formation des rotules jusqu'à la ruine. La **courbe de capacité** (effort tranchant à la base / déplacement en tête) donne la résistance, la rigidité et la **ductilité** $\\mu = d_u / d_y$.`,
  },
  formulas: {
    title: 'Formules essentielles — Analyse non linéaire',
    formulas: [
      {
        name: "Coefficient critique d'un étage (méthode de Horne)",
        latex: "\\alpha_{cr} = \\frac{H_{Ed}}{V_{Ed}} \\cdot \\frac{h}{\\delta_{H,Ed}}",
        description: 'EN 1993-1-1 §5.2.1(4) pour les portiques à faible pente.',
        vars: [
          ['\\alpha_{cr}', 'Coefficient critique', '-', '≥ 10 : premier ordre suffisant.'],
          ['H_{Ed}', "Effort horizontal total en pied d'étage", 'kN', 'Charges horizontales et imperfections.'],
          ['V_{Ed}', "Charge verticale totale en pied d'étage", 'kN', 'Toutes les charges au-dessus.'],
          ['h', "Hauteur d'étage", 'mm', 'Hauteur entre planchers.'],
          ['\\delta_{H,Ed}', 'Déplacement relatif horizontal', 'mm', 'Calculé au premier ordre.'],
        ],
      },
      {
        name: 'Amplification des effets horizontaux',
        latex: "k_{amp} = \\frac{1}{1 - 1/\\alpha_{cr}}",
        description: 'Applicable pour 3 ≤ α_cr < 10 (portiques réguliers).',
        vars: [
          ['k_{amp}', "Coefficient d'amplification", '-', 'Multiplie les effets des actions horizontales.'],
        ],
        rule: "α_cr = 5 donne une amplification de 25 % : non négligeable.",
      },
      {
        name: 'Moment plastique et facteur de forme',
        latex: "M_p = W_{pl} \\, f_y \\qquad f = \\frac{W_{pl}}{W_{el}}",
        description: 'Réserve de résistance de la section au-delà de la première plastification.',
        vars: [
          ['M_p', 'Moment plastique', 'kN·m', 'Moment de la rotule plastique.'],
          ['W_{pl}, W_{el}', 'Modules plastique et élastique', 'mm³', 'Tables de profilés.'],
          ['f', 'Facteur de forme', '-', 'Rectangle 1,5 ; profilé en I ≈ 1,12 à 1,15.'],
        ],
      },
      {
        name: 'Charge de ruine d’une poutre bi-encastrée',
        latex: "q_u = \\frac{16 \\, M_p}{L^2}",
        description: 'Mécanisme à trois rotules : deux aux encastrements, une à mi-portée.',
        vars: [
          ['q_u', 'Charge de ruine', 'kN/m', 'Charge uniforme provoquant le mécanisme.'],
          ['L', 'Portée', 'm', 'Entre encastrements.'],
        ],
      },
      {
        name: 'Ductilité en déplacement',
        latex: "\\mu = \\frac{d_u}{d_y}",
        description: 'Rapport du déplacement ultime au déplacement de première plastification (courbe push-over).',
        vars: [
          ['\\mu', 'Ductilité', '-', 'Une structure ductile atteint μ = 3 à 6.'],
          ['d_u', 'Déplacement ultime', 'mm', 'À la ruine ou à la perte de capacité.'],
          ['d_y', 'Déplacement élastique limite', 'mm', 'Plastification de la structure (bilinéarisation).'],
        ],
      },
    ],
  },
  stepbystep: {
    title: 'Calcul complet — Réserve plastique d’une poutre bi-encastrée',
    problem: "Poutre IPE 300 en S235 (W_el = 557 cm³, W_pl = 628 cm³), bi-encastrée, portée 8 m, charge uniforme. Comparer la charge de première plastification et la charge de ruine.",
    steps_demo: [
      { n: 1, text: "Moment élastique : M_el = 557 × 10³ × 235 = 130,9 kN·m ; moment plastique : M_p = 628 × 10³ × 235 = 147,6 kN·m." },
      { n: 2, text: "En élasticité, le moment maximal est aux encastrements : qL²/12." },
      { n: 3, text: "Première plastification : q_y = 12 × 130,9 / 8² = 24,5 kN/m." },
      { n: 4, text: "Ruine (3 rotules) : q_u = 16 × 147,6 / 8² = 36,9 kN/m." },
      { n: 5, text: "Réserve : q_u / q_y = 36,9 / 24,5 = 1,51 : 51 % de capacité au-delà de la première plastification." },
    ],
    result_latex: "q_y = \\frac{12 M_{el}}{L^2} = 24{,}5\\ \\text{kN/m} \\qquad q_u = \\frac{16 M_p}{L^2} = 36{,}9\\ \\text{kN/m} \\qquad \\frac{q_u}{q_y} = 1{,}51",
  },
  units: {
    table: [
      ['Moment plastique', 'kN·m', 'kip·ft', '1 kN·m = 0,7376 kip·ft'],
      ['Module plastique', 'cm³, mm³', 'in³', '1 cm³ = 1 000 mm³'],
      ['Déplacement inter-étage', 'mm', 'in', 'Souvent exprimé en fraction de h'],
      ['Coefficient critique', '-', '-', 'Sans dimension'],
      ['Rotation plastique', 'rad', 'rad', 'Capacité de rotation des rotules'],
    ],
    note: 'Les modules W_el et W_pl des tables sont en cm³ : multipliez par 10³ pour obtenir des mm³.',
  },
  hypotheses: {
    items: [
      ['info', 'Le calcul plastique suppose des sections de classe 1 capables de tourner sans voilement local.'],
      ['info', 'La méthode de Horne s’applique aux portiques à toiture peu inclinée et à faible effort normal dans les traverses.'],
      ['warning', 'Le béton armé a une ductilité limitée : la redistribution plastique est encadrée par l’EC2.'],
      ['warning', 'Une analyse push-over suppose une réponse dominée par le premier mode ; elle est moins fiable pour les structures irrégulières.'],
      ['tip', 'Les imperfections globales (défaut d’aplomb φ ≈ 1/200) doivent être incluses dans H_Ed pour calculer α_cr.'],
    ],
  },
  simple_examples: {
    examples: [
      {
        title: "Exemple 1 : α_cr d'un étage",
        given: 'H_Ed = 50 kN, V_Ed = 2 000 kN, h = 4 000 mm, δ = 8 mm',
        find: 'α_cr',
        solution_latex: "\\alpha_{cr} = \\frac{50}{2\\,000} \\times \\frac{4\\,000}{8} = 0{,}025 \\times 500 = 12{,}5 \\ge 10",
        result: 'Analyse au premier ordre suffisante.',
      },
      {
        title: 'Exemple 2 : portique plus souple',
        given: 'Même étage avec δ = 20 mm',
        find: 'α_cr et amplification',
        solution_latex: "\\alpha_{cr} = 0{,}025 \\times 200 = 5 \\qquad k_{amp} = \\frac{1}{1 - 1/5} = 1{,}25",
        result: 'Les effets horizontaux doivent être majorés de 25 %.',
      },
      {
        title: 'Exemple 3 : poutre sur deux appuis',
        given: 'M_p = 147,6 kN·m, L = 8 m',
        find: 'q_u',
        solution_latex: "q_u = \\frac{8 \\times 147{,}6}{64} = 18{,}5\\ \\text{kN/m}",
        result: 'Moitié de la poutre bi-encastrée : l’hyperstaticité double ici la charge de ruine.',
      },
    ],
  },
  real_examples: {
    title: 'Exemple réel — Évaluation sismique d’un immeuble des années 1960',
    examples: [
      {
        context: 'Immeuble R+6 en béton armé à rez-de-chaussée commercial ouvert (poteaux seuls)',
        scenario: "L'analyse push-over montre que les rotules se concentrent dans les poteaux du rez-de-chaussée : mécanisme d'étage souple, ductilité globale μ ≈ 1,5 seulement, très inférieure à la demande sismique.",
        decomposition_latex: "\\text{Étage souple} \\Rightarrow \\text{rotules dans les poteaux du RDC} \\Rightarrow \\mu \\approx 1{,}5 \\ll \\mu_{demandé}",
        lesson: "Le renforcement vise à déplacer le mécanisme : ajout de voiles au rez-de-chaussée ou chemisage des poteaux, pour que la structure se plastifie de façon répartie et ductile.",
      },
    ],
  },
  diagrams: {
    title: 'Schéma de principe — Courbe de capacité push-over',
    diagram_description: [
      'Phase élastique : effort proportionnel au déplacement',
      'Première rotule plastique : la rigidité diminue',
      'Formation successive des rotules : redistribution des efforts',
      'Plateau plastique : résistance maximale de la structure',
      'Mécanisme ou effets P-Delta : la capacité décroît',
      'Comparaison avec la demande sismique : point de performance',
    ],
  },
  mistakes: {
    items: [
      ['Appliquer un calcul plastique à des sections élancées (classe 3 ou 4)', 'Voilement local avant la formation des rotules', 'Réserver le calcul plastique aux sections de classe 1.'],
      ['Négliger les imperfections dans α_cr', 'α_cr surestimé', 'Inclure le défaut d’aplomb global dans les efforts horizontaux.'],
      ['Additionner les résistances de rotules qui ne se forment pas simultanément', 'Charge de ruine surestimée', 'Vérifier que le mécanisme choisi est le plus défavorable (plusieurs mécanismes à comparer).'],
    ],
  },
  tips: {
    tips: [
      'La méthode cinématique donne une borne supérieure de la charge de ruine : testez plusieurs mécanismes et gardez le plus faible.',
      'Un portique contreventé par palées triangulées a en général un α_cr élevé.',
      'Les logiciels proposent l’analyse P-Delta : comparez les résultats avec et sans pour mesurer la sensibilité.',
      'En push-over, testez au moins deux distributions de forces (modale et uniforme).',
    ],
  },
  norms: {
    norms: [
      ['NF EN 1993-1-1 §5.2', 'Analyse globale : effets du second ordre, coefficient α_cr.'],
      ['NF EN 1993-1-1 §5.4.3', 'Analyse globale plastique.'],
      ['NF EN 1998-1 §4.3.3.4.2', 'Analyse statique non linéaire (push-over).'],
      ['NF EN 1998-3', 'Évaluation et renforcement des bâtiments existants.'],
    ],
  },
  exercises: {
    exercises: [
      {
        level: 1,
        text: 'Calculer le facteur de forme d’un IPE 300 (W_el = 557 cm³, W_pl = 628 cm³).',
        hint: 'f = W_pl / W_el.',
        answer_latex: "f = \\frac{628}{557} = 1{,}13",
        answer_text: 'f ≈ 1,13.',
      },
      {
        level: 2,
        text: 'Un étage a H_Ed = 80 kN, V_Ed = 3 600 kN, h = 3,5 m, δ = 12 mm. Calculer α_cr et conclure.',
        hint: 'Méthode de Horne.',
        answer_latex: "\\alpha_{cr} = \\frac{80}{3\\,600} \\times \\frac{3\\,500}{12} = 0{,}0222 \\times 291{,}7 = 6{,}5",
        answer_text: 'α_cr ≈ 6,5 < 10 : amplification de 1/(1 − 1/6,5) = 1,18.',
      },
      {
        level: 3,
        text: 'Poutre encastrée-appuyée de 6 m, M_p = 200 kN·m. Calculer la charge de ruine approchée.',
        hint: 'q_u ≈ 11,66 M_p / L².',
        answer_latex: "q_u = \\frac{11{,}66 \\times 200}{36} = 64{,}8\\ \\text{kN/m}",
        answer_text: 'q_u ≈ 64,8 kN/m.',
      },
    ],
  },
  quiz: {
    title: 'Quiz — Analyse non linéaire',
    questions: [
      { q: 'Qu’est-ce que l’effet P-Delta ?', options: ['Une perte de précontrainte', 'Le moment supplémentaire dû aux charges verticales sur une structure déplacée', 'Un tassement d’appui'], correct: 1, explain: 'La charge P agissant sur un déplacement Δ crée un moment P·Δ.' },
      { q: 'À partir de quelle valeur de α_cr le calcul au premier ordre suffit-il (analyse élastique) ?', options: ['α_cr ≥ 1', 'α_cr ≥ 3', 'α_cr ≥ 10'], correct: 2, explain: 'EN 1993-1-1 : α_cr ≥ 10 en analyse élastique.' },
      { q: 'Quel est le facteur de forme d’une section rectangulaire ?', options: ['1,0', '1,15', '1,5'], correct: 2, explain: 'W_pl / W_el = (bh²/4) / (bh²/6) = 1,5.' },
    ],
  },
  exam_questions: {
    questions: [
      'Expliquez les non-linéarités géométrique et matérielle et donnez un exemple de chacune.',
      'Calculez α_cr d’un portique par la méthode de Horne et en déduisez le type d’analyse nécessaire.',
      'Déterminez la charge de ruine d’une poutre continue par la méthode cinématique.',
      'Présentez le principe de l’analyse push-over et son usage pour l’évaluation sismique.',
    ],
  },
  interview_questions: {
    questions: [
      ['Pourquoi une structure hyperstatique ductile est-elle plus sûre ?', "Parce qu'après la première plastification, les efforts se redistribuent vers d'autres sections ; la ruine n'intervient qu'à la formation d'un mécanisme, ce qui laisse une réserve de résistance et des signes avant-coureurs (grandes déformations)."],
      ['Quand faut-il faire une analyse au second ordre ?', "Quand la structure est souple latéralement par rapport aux charges verticales (α_cr < 10 en élastique) : portiques non contreventés, tours, structures légères très chargées."],
    ],
  },
  practical_case: {
    title: 'Cas pratique — Portique de hall non contreventé',
    scenario: 'Portique de 6 m de hauteur, charges verticales totales V_Ed = 900 kN, efforts horizontaux (vent + imperfections) H_Ed = 45 kN, déplacement en tête calculé au premier ordre δ = 30 mm.',
    description: 'Évaluer la sensibilité au second ordre et la majoration à appliquer.',
    resolutions: [
      "\\alpha_{cr} = \\frac{45}{900} \\times \\frac{6\\,000}{30} = 0{,}05 \\times 200 = 10",
      "\\alpha_{cr} = 10 \\Rightarrow \\text{limite : premier ordre juste admissible}",
      "\\text{Avec une charge de neige supplémentaire (}V = 1\\,200\\ \\text{kN) : } \\alpha_{cr} = 7{,}5 \\Rightarrow k_{amp} = \\frac{1}{1 - 1/7{,}5} = 1{,}15",
    ],
    conclusion: "Le portique est à la limite de la sensibilité au second ordre ; sous la combinaison avec neige, les effets horizontaux doivent être majorés de 15 %. Un contreventement en long-pan et des poteaux plus rigides augmenteraient α_cr.",
  },
  summary: {
    content: `### L'analyse non linéaire en 5 points
1. Second ordre : effet P-Delta, mesuré par $\\alpha_{cr}$.
2. $\\alpha_{cr} \\ge 10$ : premier ordre ; $3 \\le \\alpha_{cr} < 10$ : amplification $1/(1 - 1/\\alpha_{cr})$.
3. Rotule plastique : $M_p = W_{pl} f_y$, facteur de forme.
4. Ruine par mécanisme : $q_u = 16 M_p / L^2$ (bi-encastrée).
5. Push-over : courbe de capacité et ductilité $\\mu = d_u / d_y$.`,
  },
  key_points: {
    points: [
      'α_cr = (H/V)·(h/δ)',
      'k_amp = 1 / (1 − 1/α_cr)',
      'M_p = W_pl·f_y',
      'q_u = 8, 11,66 ou 16 M_p / L² selon les appuis',
      'Ductilité μ = d_u / d_y',
    ],
  },
  self_assessment: {
    objectives: [
      'Je sais calculer α_cr et choisir le type d’analyse',
      'Je sais calculer un moment plastique et un facteur de forme',
      'Je sais déterminer une charge de ruine par la méthode cinématique',
      'Je connais le principe de l’analyse push-over',
      "J'ai réussi le quiz avec au moins 2 bonnes réponses sur 3",
    ],
  },
});
