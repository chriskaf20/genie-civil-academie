// ── Lesson: Préfabrication et levage — Module 31 ─────────────────────────────
import { buildLesson } from './build_lesson.js';

export const lesson_methodes_prefabrication = buildLesson({
  moduleId: 31,
  slug: 'methodes_prefabrication',
  lessonIndex: 1,
  title: "Préfabrication Béton : Usine, Cadences, Résistance au Jeune Âge, Levage et Assemblage sur Site",
  subtitle: "Module 31 — Méthodes d'Exécution",
  level: 'Intermédiaire',
  duration: '6h',
  tags: ['Préfabrication', 'Levage', 'Élingues', 'Grue', 'Jeune âge', 'Cadence', 'Prédalles', 'Off-site'],
}, {
  definition: {
    title: 'Définition — Fabriquer en usine, assembler sur chantier',
    fr: 'Préfabrication',
    en: 'Precast construction / off-site construction',
    metier: "Concerne les ingénieurs méthodes, les bureaux d'études d'usines de préfabrication, les conducteurs de travaux et les grutiers.",
    content: `La **préfabrication** consiste à fabriquer des éléments de construction (poutres, poteaux, prédalles, dalles alvéolées, murs, escaliers, voussoirs) dans une usine ou une aire de chantier, puis à les **transporter**, **lever** et **assembler** sur l'ouvrage.

### Familles d'éléments
- **Éléments lourds** : poutres précontraintes, dalles alvéolées, panneaux de façade, voussoirs de pont ou de tunnel.
- **Éléments semi-finis** : prédalles et murs à coffrage intégré, complétés par du béton coulé en place.
- **Modules 3D** : salles de bains, chambres, modules complets.

### Les avantages
Qualité d'usine, rapidité sur chantier, moins de coffrages et d'intempéries, meilleure sécurité.

### Les contraintes
Transport (gabarit, masse), **levage** (grue, élingues, inserts), **liaisons** entre éléments (clavetages, corbeaux, armatures en attente), **tolérances**.

> 💡 En préfabrication, les phases provisoires (démoulage, stockage, transport, levage) dimensionnent souvent l'élément autant que la phase définitive.`,
  },
  importance: {
    content: `- **Délais** : la fabrication se déroule en parallèle des fondations.
- **Qualité** : béton contrôlé, parements soignés, tolérances serrées.
- **Sécurité** : moins de travail en hauteur, mais des opérations de levage critiques.
- **Carbone et déchets** : moins de chutes, moules réutilisés, béton optimisé.

> ⚠️ **À retenir** : un levage mal préparé (élingues, inserts, résistance du béton) est une cause majeure d'accidents graves.`,
  },
  applications: {
    examples: [
      ['Parking', 'Poteaux, poutres et dalles alvéolées précontraintes.'],
      ['Logements', 'Prédalles et murs à coffrage intégré.'],
      ['Pont', 'Poutres précontraintes par pré-tension posées à la grue.'],
      ['Tunnel au tunnelier', 'Voussoirs préfabriqués formant les anneaux.'],
      ['Hôtel', 'Modules de salles de bains 3D posés à chaque étage.'],
    ],
  },
  theory: {
    title: 'Théorie — De l’usine au montage',
    content: `### 1. Cycle de production
Préparation du moule → ferraillage et inserts → bétonnage → cure (souvent accélérée par étuvage) → démoulage → stockage. La **cadence** dépend du nombre de moules et de la durée du cycle.

### 2. Résistance au jeune âge (EC2)
$$f_{cm}(t) = \\beta_{cc}(t) \\, f_{cm} \\qquad \\beta_{cc}(t) = \\exp\\left[ s \\left( 1 - \\sqrt{\\frac{28}{t}} \\right) \\right]$$
$s$ = 0,20 (ciment à durcissement rapide, classe R) ; 0,25 (classe N) ; 0,38 (classe S). Le démoulage et le levage exigent une résistance minimale (souvent 15 à 25 MPa).

### 3. Levage
- Effort par brin d'élingue incliné de $\\beta$ par rapport à la verticale :
$$F = \\frac{\\psi_{dyn} \\, W}{n \\cos\\beta}$$
- $\\psi_{dyn}$ : coefficient dynamique (≈ 1,15 à 1,3 selon les conditions) ;
- $n$ : nombre de brins réellement porteurs (sans palonnier d'équilibrage, on retient prudemment 2 brins sur 4).
- Les **inserts de levage** sont choisis selon leur capacité et la résistance du béton au moment du levage.

### 4. Grue
On vérifie le **moment de charge** : masse (élément + accessoires) × portée, comparé à l'abaque de la grue à cette portée.

### 5. Assemblage
Appuis sur néoprène ou mortier, clavetages, liaisons par armatures en attente et coulage complémentaire. Les tolérances (EN 13670, EN 13369) sont vérifiées avant pose.`,
  },
  formulas: {
    title: 'Formules essentielles — Préfabrication',
    formulas: [
      {
        name: 'Résistance au jeune âge (EC2)',
        latex: "f_{cm}(t) = \\exp\\left[ s \\left(1 - \\sqrt{\\frac{28}{t}}\\right) \\right] f_{cm}",
        description: 'Résistance moyenne à t jours (cure à 20 °C).',
        vars: [
          ['f_{cm}(t)', 'Résistance moyenne à t jours', 'MPa', ''],
          ['s', 'Coefficient du ciment', '-', '0,20 (R) ; 0,25 (N) ; 0,38 (S).'],
          ['t', 'Âge du béton', 'j', ''],
          ['f_{cm}', 'Résistance moyenne à 28 j', 'MPa', 'f_ck + 8.'],
        ],
      },
      {
        name: 'Effort par brin d’élingue',
        latex: "F = \\frac{\\psi_{dyn} W}{n \\cos\\beta}",
        description: 'Effort dans chaque brin incliné.',
        vars: [
          ['F', 'Effort par brin', 'kN', ''],
          ['\\psi_{dyn}', 'Coefficient dynamique', '-', '1,15 à 1,3.'],
          ['W', 'Poids de l’élément', 'kN', ''],
          ['n', 'Brins porteurs', '-', 'Prudence avec 4 brins sans palonnier.'],
          ['\\beta', 'Angle par rapport à la verticale', '°', '≤ 30° conseillé ; 60° maximum.'],
        ],
        rule: 'À 60° de la verticale, l’effort par brin double par rapport à un levage vertical.',
      },
      {
        name: 'Moment de charge de la grue',
        latex: "M = (W + W_{acc}) \\times R \\leq M_{abaque}(R)",
        description: 'Contrôle de la capacité à la portée considérée.',
        vars: [
          ['W_{acc}', 'Accessoires (palonnier, élingues)', 't', ''],
          ['R', 'Portée', 'm', 'Distance horizontale axe de rotation – charge.'],
        ],
      },
      {
        name: 'Cadence de production',
        latex: "N = \\frac{n_{moules} \\times J}{t_{cycle}}",
        description: 'Nombre d’éléments produits sur une période.',
        vars: [
          ['n_{moules}', 'Nombre de moules', '-', ''],
          ['J', 'Jours de production', 'j', ''],
          ['t_{cycle}', 'Durée d’un cycle par moule', 'j', '1 jour avec étuvage courant.'],
        ],
      },
    ],
  },
  stepbystep: {
    title: 'Calcul complet — Préparer le levage d’un panneau de façade',
    problem: "Un panneau en béton C40/50 (CEM I 52,5 R) pèse 12 t (W = 120 kN). Il est levé par 4 inserts, sans palonnier, avec des élingues inclinées à 30° de la verticale, ψ_dyn = 1,2. Le fabricant d'inserts exige 15 MPa au levage. Le panneau peut-il être levé à 1 jour ?",
    steps_demo: [
      { n: 1, text: "Brins porteurs : sans palonnier, on retient n = 2." },
      { n: 2, text: "F = 1,2 × 120 / (2 × cos 30°) = 144 / 1,732 = 83,1 kN par insert : choisir un insert de capacité ≥ 83 kN pour 15 MPa." },
      { n: 3, text: "Résistance à 1 jour : f_cm = 40 + 8 = 48 MPa ; β = exp[0,20 × (1 − √28)] = exp(−0,858) = 0,424." },
      { n: 4, text: "f_cm(1) = 0,424 × 48 = 20,4 MPa ≥ 15 MPa : levage possible (à confirmer par écrasement d'éprouvettes conservées comme le panneau)." },
      { n: 5, text: "Grue : 12,5 t (avec accessoires) à 20 m de portée = 250 t·m, à comparer à l'abaque." },
    ],
    result_latex: "F = \\frac{1{,}2 \\times 120}{2 \\cos 30°} = 83{,}1\\ \\text{kN} \\qquad f_{cm}(1) = 0{,}424 \\times 48 = 20{,}4\\ \\text{MPa}",
  },
  units: {
    table: [
      ['Masse', 't', 'short ton', '1 t = 1,102 short ton'],
      ['Effort', 'kN', 'kip', '1 t ≈ 9,81 kN'],
      ['Portée de grue', 'm', 'ft', '1 m = 3,281 ft'],
      ['Moment de charge', 't·m', 'ton·ft', 'Abaques constructeur'],
      ['Résistance', 'MPa', 'psi', '1 MPa = 145 psi'],
    ],
    note: 'Les capacités des accessoires de levage sont exprimées en CMU (charge maximale d’utilisation).',
  },
  hypotheses: {
    items: [
      ['info', 'La formule de résistance au jeune âge suppose une cure à 20 °C ; l’étuvage accélère fortement la montée en résistance.'],
      ['info', 'Le coefficient dynamique dépend de la grue, du vent et de la manœuvre ; il est fixé par le fabricant et les règles de l’entreprise.'],
      ['warning', 'Un élément mince peut fissurer au démoulage par adhérence au moule ou au retournement.'],
      ['warning', 'Le vent limite le levage des grands panneaux : respecter la vitesse maximale (souvent 50 à 72 km/h).'],
      ['tip', 'Utilisez un palonnier pour garantir la répartition des efforts entre les inserts.'],
    ],
  },
  simple_examples: {
    examples: [
      {
        title: 'Exemple 1 : effet de l’angle des élingues',
        given: 'W = 60 kN ; 2 brins ; β = 45°',
        find: 'Effort par brin (ψ = 1)',
        solution_latex: "F = \\frac{60}{2 \\times 0{,}707} = 42{,}4\\ \\text{kN}",
        result: '42,4 kN, contre 30 kN pour un levage vertical.',
      },
      {
        title: 'Exemple 2 : cadence',
        given: '8 moules ; cycle de 1 jour ; 22 jours ouvrés',
        find: 'Production mensuelle',
        solution_latex: "N = \\frac{8 \\times 22}{1} = 176",
        result: '176 éléments par mois.',
      },
      {
        title: 'Exemple 3 : résistance à 3 jours',
        given: 'C30/37, ciment classe N (s = 0,25)',
        find: 'f_cm(3)',
        solution_latex: "\\exp[0{,}25(1 - \\sqrt{28/3})] = \\exp(-0{,}514) = 0{,}598 \\Rightarrow 0{,}598 \\times 38 = 22{,}7\\ \\text{MPa}",
        result: 'Environ 22,7 MPa.',
      },
    ],
  },
  real_examples: {
    title: 'Exemple réel — Chute d’un panneau par rupture d’insert',
    examples: [
      {
        context: 'Chantier de logements en panneaux préfabriqués',
        scenario: "Un panneau de 8 t est levé avec deux élingues très inclinées (≈ 60° de la verticale) faute de longueur suffisante. L'effort par insert, environ le double de celui prévu, dépasse la capacité de l'insert dans un béton encore jeune. L'insert s'arrache, le panneau chute dans une zone heureusement balisée.",
        decomposition_latex: "\\beta = 60° \\Rightarrow \\frac{1}{\\cos 60°} = 2 \\Rightarrow F \\times 2 > F_{insert}",
        lesson: "Le plan de levage doit fixer la longueur des élingues ou imposer un palonnier ; personne ne doit se trouver sous la charge.",
      },
    ],
  },
  diagrams: {
    title: 'Schéma de principe — Chaîne de la préfabrication',
    diagram_description: [
      'Plans de préfabrication : calepinage, inserts, réservations',
      'Fabrication en usine : moule, armatures, bétonnage, étuvage',
      'Démoulage et stockage (vérification au jeune âge)',
      'Transport : gabarit, calage, arrimage',
      'Levage : grue, élingues, palonnier, zone balisée',
      'Pose, réglage, liaisons et clavetages',
    ],
  },
  mistakes: {
    items: [
      ['Lever avant la résistance requise', 'Arrachement d’insert, fissures', 'Contrôler la résistance sur éprouvettes témoins.'],
      ['Élingues trop courtes', 'Efforts doublés à 60°', 'Plan de levage avec longueurs et angles.'],
      ['Oublier les phases provisoires dans le calcul', 'Fissuration au stockage ou au transport', 'Vérifier chaque phase (appuis de stockage, retournement).'],
    ],
  },
  tips: {
    tips: [
      'Établissez un plan de levage pour chaque type d’élément.',
      'Repérez les éléments par un numéro et leur position de pose.',
      'Contrôlez les tolérances des appuis avant de faire venir les éléments.',
      'Planifiez les livraisons en flux tendu pour éviter le stockage sur chantier.',
    ],
  },
  norms: {
    norms: [
      ['NF EN 13369', 'Règles communes pour les produits préfabriqués en béton.'],
      ['NF EN 13670', 'Exécution des structures en béton (tolérances).'],
      ['NF EN 1992-1-1', 'Résistance au jeune âge et vérification des éléments.'],
      ['Recommandations CNAM et guides INRS', 'Utilisation des grues à tour et des grues mobiles.'],
      ['NF EN 13155', 'Accessoires de levage amovibles.'],
    ],
  },
  exercises: {
    exercises: [
      {
        level: 1,
        text: 'Une poutre de 90 kN est levée verticalement par 2 brins. Effort par brin avec ψ = 1,2 ?',
        hint: 'cos 0° = 1.',
        answer_latex: "F = \\frac{1{,}2 \\times 90}{2} = 54\\ \\text{kN}",
        answer_text: '54 kN.',
      },
      {
        level: 2,
        text: 'Une grue admet 3,0 t à 40 m. Peut-elle poser une prédalle de 2,6 t avec 0,3 t d’accessoires à 40 m ?',
        hint: 'Comparer la masse totale à la capacité.',
        answer_latex: "2{,}6 + 0{,}3 = 2{,}9\\ \\text{t} \\leq 3{,}0\\ \\text{t}",
        answer_text: 'Oui, mais avec une marge faible (97 % de la capacité) : vérifier le vent et éviter de dépasser la portée.',
      },
      {
        level: 3,
        text: 'Combien de moules faut-il pour produire 300 voussoirs en 25 jours avec un cycle de 1 jour ?',
        hint: 'n = N × t_cycle / J.',
        answer_latex: "n = \\frac{300 \\times 1}{25} = 12",
        answer_text: '12 moules.',
      },
    ],
  },
  quiz: {
    title: 'Quiz — Préfabrication',
    questions: [
      { q: 'Que se passe-t-il quand l’angle des élingues augmente ?', options: ['L’effort par brin diminue', 'L’effort par brin augmente', 'Rien'], correct: 1, explain: 'F = W / (n cos β).' },
      { q: 'Combien de brins compte-t-on prudemment avec 4 élingues sans palonnier ?', options: ['4', '2', '1'], correct: 1, explain: 'La répartition n’est pas garantie.' },
      { q: 'Qu’accélère l’étuvage ?', options: ['La prise et la montée en résistance', 'Le retrait', 'La corrosion'], correct: 0, explain: 'Il permet un démoulage rapide.' },
    ],
  },
  exam_questions: {
    questions: [
      'Présentez les avantages et contraintes de la préfabrication.',
      'Comment vérifie-t-on qu’un élément peut être levé à jeune âge ?',
      'Décrivez le contenu d’un plan de levage.',
    ],
  },
  interview_questions: {
    questions: [
      ['Quels points vérifiez-vous avant un levage d’élément préfabriqué ?', 'Masse réelle, résistance du béton, capacité et état des inserts et élingues, angles, capacité de la grue à la portée, vent, zone balisée et communication avec le grutier.'],
      ['Préfabriquer ou couler en place ?', 'Je compare délais, répétitivité, accès et capacités de levage, transport, coûts des liaisons et qualité attendue ; la préfabrication gagne quand les éléments se répètent et que le délai est contraint.'],
    ],
  },
  practical_case: {
    title: 'Cas pratique — Pose de dalles alvéolées sur un parking',
    scenario: 'Parking de 3 niveaux, 2 400 m² par niveau, dalles alvéolées de 1,20 × 16,00 m (masse 5,4 t). Grue mobile placée à 22 m des éléments les plus éloignés.',
    description: 'Calculer le nombre d’éléments, le moment de charge et la durée de pose.',
    resolutions: [
      "\\text{Surface d’une dalle} : 1{,}20 \\times 16{,}00 = 19{,}2\\ \\text{m}^2 \\Rightarrow \\frac{3 \\times 2\\,400}{19{,}2} = 375\\ \\text{dalles}",
      "M = (5{,}4 + 0{,}4) \\times 22 = 127{,}6\\ \\text{t·m} \\Rightarrow \\text{grue choisie selon l’abaque à 22 m}",
      "\\text{Cadence de 40 dalles/jour} \\Rightarrow \\frac{375}{40} = 9{,}4 \\approx 10\\ \\text{jours de pose}",
    ],
    conclusion: 'La pose est planifiée sur 10 jours, avec des livraisons cadencées et un clavetage des joints au fur et à mesure.',
  },
  summary: {
    content: `### La préfabrication en 5 points
1. Fabriquer en usine, transporter, lever, assembler.
2. Phases provisoires aussi dimensionnantes que la phase finale.
3. Résistance au jeune âge : $\\beta_{cc}(t) = \\exp[s(1 - \\sqrt{28/t})]$.
4. Élingues : $F = \\psi W / (n \\cos\\beta)$ ; palonnier recommandé.
5. Grue : moment de charge ≤ abaque à la portée.`,
  },
  key_points: {
    points: [
      'F = ψ W / (n cos β)',
      '2 brins porteurs sur 4 sans palonnier',
      'Résistance au levage contrôlée',
      'Grue : masse × portée',
      'Plan de levage obligatoire',
    ],
  },
  self_assessment: {
    objectives: [
      'Je connais les familles d’éléments préfabriqués',
      'Je sais calculer l’effort dans une élingue',
      'Je sais estimer la résistance au jeune âge',
      'Je sais vérifier une grue à une portée donnée',
      "J'ai réussi le quiz avec au moins 2 bonnes réponses sur 3",
    ],
  },
});
