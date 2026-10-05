// ── Lesson: Qualité des eaux & potabilisation — Module 38 ─────────────────────
import { buildLesson } from './build_lesson.js';

export const lesson_eau_potable = buildLesson({
  moduleId: 38,
  slug: 'eau_potable',
  lessonIndex: 1,
  title: "Qualité des Eaux & Potabilisation : Filière de Traitement et Dimensionnement",
  subtitle: 'Module 38 — Traitement des eaux potables & usées',
  level: 'Intermédiaire',
  duration: '9h',
  tags: ['Eau potable', 'Coagulation', 'Décantation', 'Filtration', 'Chloration', 'Stokes', 'Hazen'],
}, {
  definition: {
    title: "Définition — Rendre une eau brute propre à la consommation",
    fr: 'Potabilisation (traitement des eaux destinées à la consommation humaine)',
    en: 'Drinking water treatment',
    metier: "Utilisée par les ingénieurs hydrauliciens, les exploitants (régies, délégataires), les bureaux d'études en eau potable et les services sanitaires.",
    content: `La **potabilisation** transforme une **eau brute** (rivière, lac, nappe) en eau conforme aux exigences de qualité sanitaire. Une **filière de traitement** enchaîne des étapes physiques, chimiques et biologiques adaptées à la ressource.

### Deux familles de ressources
- **Eaux souterraines** : généralement limpides et peu contaminées ; traitement souvent limité à une désinfection (parfois déferrisation, dénitratation).
- **Eaux de surface** : turbides, chargées en matières organiques et micro-organismes ; filière complète obligatoire.

### La filière classique d'une eau de surface
Prétraitement (dégrillage, tamisage) → **coagulation-floculation** → **décantation** → **filtration** sur sable → (affinage sur charbon actif) → **désinfection** → stockage et distribution.

> 💡 L'eau du robinet est l'aliment le plus contrôlé en France : plus de 50 paramètres sont réglementés.`,
  },
  importance: {
    content: `- **Santé publique** : les maladies hydriques (choléra, gastro-entérites) restent la première cause de mortalité liée à l'eau dans le monde.
- **Dimensionnement** : la capacité d'une usine découle des besoins de pointe de la population desservie.
- **Coûts d'exploitation** : réactifs, énergie et gestion des boues représentent l'essentiel du prix de l'eau produite.
- **Résilience** : sécheresses et pollutions accidentelles imposent des ressources de secours et des interconnexions.

> ⚠️ **À retenir** : la désinfection ne suffit pas sur une eau turbide ; les particules protègent les micro-organismes du chlore.`,
  },
  applications: {
    examples: [
      ['Usine de traitement d’eau de rivière', 'Filière complète : coagulation au sel de fer, décantation lamellaire, filtration sable, ozonation, charbon actif, chloration.'],
      ['Forage communal', 'Désinfection par chlore gazeux ou javel et contrôle du chlore libre en réseau.'],
      ['Commune en zone rurale', 'Unité compacte de filtration membranaire pour une eau de source turbide après les orages.'],
      ['Ville côtière', 'Dessalement par osmose inverse lors des pics estivaux.'],
      ['Camp humanitaire', 'Traitement d’urgence : floculation, filtration, chloration des réservoirs.'],
    ],
  },
  theory: {
    title: "Théorie — Les étapes de la filière",
    content: `### 1. Besoins en eau
Le débit à produire part de la population et de la **dotation** (L/hab/j), majorée par les **coefficients de pointe** journalière (1,3 à 2) et horaire (1,5 à 3 selon la taille de la commune).

### 2. Coagulation-floculation
Les particules colloïdales (argiles, matières organiques) sont chargées négativement et se repoussent. Un **coagulant** (sel de fer ou d'aluminium) neutralise ces charges, puis une agitation lente forme des **flocs** décantables. La dose optimale est déterminée par un essai en laboratoire (**jar-test**).

### 3. Décantation
Une particule décante si sa vitesse de chute dépasse la **vitesse de Hazen** de l'ouvrage, $v_H = Q/S$ : c'est la surface, et non la profondeur, qui fait l'efficacité d'un décanteur. La vitesse de chute d'une petite particule isolée suit la **loi de Stokes**.

### 4. Filtration
Les filtres à sable rapides (0,5 à 1,2 m de sable) retiennent les flocs résiduels à une vitesse de 5 à 10 m/h ; ils sont régulièrement lavés à contre-courant.

### 5. Désinfection
Le chlore, l'ozone ou les UV inactivent les micro-organismes. L'efficacité dépend du produit **concentration × temps de contact** ($C \\cdot t$). Un **chlore résiduel** (environ 0,1 à 0,3 mg/L) protège l'eau dans le réseau.`,
  },
  formulas: {
    title: 'Formules essentielles — Potabilisation',
    formulas: [
      {
        name: 'Débit journalier de pointe',
        latex: "Q_{j,max} = k_j \\cdot \\frac{P \\cdot d}{1\\,000}",
        description: 'Débit que la station doit produire le jour de plus forte consommation.',
        vars: [
          ['Q_{j,max}', 'Débit du jour de pointe', 'm³/j', 'Base de dimensionnement de la station.'],
          ['k_j', 'Coefficient de pointe journalière', '-', '1,3 à 2.'],
          ['P', 'Population desservie', 'hab', 'À l’horizon du projet (20 à 30 ans).'],
          ['d', 'Dotation', 'L/hab/j', '120 à 200 L/hab/j en France selon la taille de la commune.'],
        ],
      },
      {
        name: 'Vitesse de chute (loi de Stokes)',
        latex: "v_s = \\frac{g \\, (\\rho_s - \\rho_w) \\, d^2}{18 \\, \\mu}",
        description: "Particule sphérique isolée en régime laminaire.",
        vars: [
          ['v_s', 'Vitesse de chute', 'm/s', 'Vitesse limite de sédimentation.'],
          ['\\rho_s, \\rho_w', 'Masses volumiques particule et eau', 'kg/m³', 'Argile ≈ 2 650 ; eau 1 000.'],
          ['d', 'Diamètre de la particule', 'm', 'Les flocs sont plus gros mais moins denses.'],
          ['\\mu', 'Viscosité dynamique', 'Pa·s', '1,0 × 10⁻³ à 20 °C ; 1,3 × 10⁻³ à 10 °C.'],
        ],
        rule: "La vitesse de chute varie comme d² : diviser la taille par 10 divise la vitesse par 100, d'où l'intérêt de grossir les particules par floculation.",
      },
      {
        name: 'Surface d’un décanteur (vitesse de Hazen)',
        latex: "S = \\frac{Q}{v_H}",
        description: 'Toute particule dont la vitesse de chute dépasse v_H est retenue.',
        vars: [
          ['S', 'Surface de décantation', 'm²', 'Surface horizontale de l’ouvrage.'],
          ['Q', 'Débit traité', 'm³/h', 'Débit de pointe de la station.'],
          ['v_H', 'Vitesse ascensionnelle', 'm/h', '0,8 à 1,5 m/h (décanteur statique) ; 5 à 15 m/h (lamellaire).'],
        ],
      },
      {
        name: 'Surface de filtration',
        latex: "S_f = \\frac{Q}{v_f}",
        description: 'Surface totale de filtres en service.',
        vars: [
          ['S_f', 'Surface filtrante', 'm²', 'Répartie sur plusieurs filtres pour permettre les lavages.'],
          ['v_f', 'Vitesse de filtration', 'm/h', '5 à 10 m/h pour un filtre à sable rapide.'],
        ],
      },
      {
        name: 'Consommation de réactif et facteur Ct',
        latex: "M = \\frac{Q \\cdot D}{1\\,000} \\qquad Ct = C \\cdot t",
        description: 'Masse journalière de réactif et efficacité de désinfection.',
        vars: [
          ['M', 'Masse de réactif', 'kg/j', 'Pour le dimensionnement des stockages.'],
          ['Q', 'Débit traité', 'm³/j', 'Débit journalier.'],
          ['D', 'Dose', 'g/m³', '1 g/m³ = 1 mg/L.'],
          ['C', 'Concentration en désinfectant', 'mg/L', 'Chlore libre.'],
          ['t', 'Temps de contact', 'min', 'Dans la bâche de contact.'],
        ],
      },
    ],
  },
  stepbystep: {
    title: 'Calcul complet — Station de 20 000 habitants',
    problem: "Une ville de 20 000 habitants (dotation 150 L/hab/j, coefficient de pointe journalière 1,5) est alimentée par une rivière. Dimensionner la surface de décantation (v_H = 1,5 m/h), la surface de filtration (v_f = 7 m/h) et la consommation de chlore (dose 1 g/m³).",
    steps_demo: [
      { n: 1, text: "Débit moyen : 20 000 × 150 / 1 000 = 3 000 m³/j." },
      { n: 2, text: "Débit de pointe : 1,5 × 3 000 = 4 500 m³/j, soit 187,5 m³/h sur 24 h." },
      { n: 3, text: "Décantation : S = 187,5 / 1,5 = 125 m² (par exemple 2 décanteurs de 62,5 m²)." },
      { n: 4, text: "Filtration : S_f = 187,5 / 7 = 26,8 m², soit 4 filtres de 7 m² (un filtre peut être en lavage)." },
      { n: 5, text: "Chlore : M = 4 500 × 1 / 1 000 = 4,5 kg/j ; stock de 30 jours = 135 kg." },
      { n: 6, text: "Bâche de contact pour 30 min : V = 187,5 × 0,5 = 94 m³." },
    ],
    result_latex: "Q = 187{,}5\\ \\text{m}^3/\\text{h} \\quad S_{déc} = 125\\ \\text{m}^2 \\quad S_f = 26{,}8\\ \\text{m}^2 \\quad M_{Cl_2} = 4{,}5\\ \\text{kg/j}",
  },
  units: {
    table: [
      ['Concentration', 'mg/L = g/m³', 'ppm', '1 mg/L ≈ 1 ppm dans l’eau'],
      ['Turbidité', 'NFU (NTU)', 'NTU', 'Eau potable ≤ 1 NFU en sortie de station'],
      ['Dureté', '°f (degré français)', 'gpg', '1 °f = 10 mg/L de CaCO₃'],
      ['Débit', 'm³/h, m³/j', 'MGD', '1 MGD (US) = 3 785 m³/j'],
      ['Vitesse de Hazen', 'm/h', 'gpm/ft²', '1 m/h = 0,409 gpm/ft²'],
    ],
    note: "Ne confondez pas débit moyen et débit de pointe : la station se dimensionne sur la pointe, les réservoirs lissent les pointes horaires.",
  },
  hypotheses: {
    items: [
      ['info', 'La loi de Stokes suppose des particules sphériques isolées en régime laminaire (petites particules).'],
      ['info', 'La théorie de Hazen suppose un écoulement uniforme sans turbulence ni courts-circuits dans le décanteur.'],
      ['warning', 'En eau froide, la viscosité augmente de 30 % : la décantation et la floculation sont moins efficaces en hiver.'],
      ['warning', 'Les doses de réactifs se fixent par jar-test ; une valeur de bibliographie n’est qu’un point de départ.'],
      ['tip', 'Prévoyez toujours au moins deux files de traitement pour assurer la continuité pendant l’entretien.'],
    ],
  },
  simple_examples: {
    examples: [
      {
        title: 'Exemple 1 : vitesse de chute d’un grain d’argile de 20 µm',
        given: 'd = 20 × 10⁻⁶ m, ρs = 2 650 kg/m³, μ = 1,0 × 10⁻³ Pa·s',
        find: 'v_s en m/h',
        solution_latex: "v_s = \\frac{9{,}81 \\times 1\\,650 \\times (20 \\times 10^{-6})^2}{18 \\times 10^{-3}} = 3{,}6 \\times 10^{-4}\\ \\text{m/s} = 1{,}3\\ \\text{m/h}",
        result: '1,3 m/h : ce grain est retenu par un décanteur à v_H = 1 m/h.',
      },
      {
        title: 'Exemple 2 : consommation de coagulant',
        given: 'Q = 4 500 m³/j, dose de chlorure ferrique 30 g/m³',
        find: 'La masse journalière',
        solution_latex: "M = \\frac{4\\,500 \\times 30}{1\\,000} = 135\\ \\text{kg/j}",
        result: '135 kg/j de produit commercial à stocker et à doser.',
      },
      {
        title: 'Exemple 3 : facteur Ct',
        given: 'Chlore libre 0,5 mg/L, temps de contact 30 min',
        find: 'Ct',
        solution_latex: "Ct = 0{,}5 \\times 30 = 15\\ \\text{mg·min/L}",
        result: 'Ct = 15 mg·min/L, à comparer à la valeur requise pour le germe visé.',
      },
    ],
  },
  real_examples: {
    title: "Exemple réel — Épidémie de Milwaukee (1993)",
    examples: [
      {
        context: 'Usine de traitement d’eau du lac Michigan, 400 000 personnes malades',
        scenario: 'Après de fortes pluies, la turbidité de l’eau traitée a augmenté sans ajustement suffisant de la coagulation. Le parasite Cryptosporidium, résistant au chlore, a traversé les filtres.',
        decomposition_latex: "\\text{Turbidité} \\uparrow + \\text{coagulation mal ajustée} \\Rightarrow \\text{passage de Cryptosporidium} \\Rightarrow \\text{épidémie}",
        lesson: "La barrière physique (coagulation + filtration) est indispensable : certains parasites résistent au chlore. Depuis, la turbidité filtrée est suivie en continu et les filières intègrent souvent les UV ou les membranes.",
      },
    ],
  },
  diagrams: {
    title: 'Schéma de principe — Filière de potabilisation d’une eau de surface',
    diagram_description: [
      'Captage et prétraitement : dégrillage, tamisage, débourbage',
      'Coagulation : injection du coagulant et mélange rapide',
      'Floculation : agitation lente, formation des flocs',
      'Décantation : séparation des flocs (v_H = Q / S)',
      'Filtration : sable puis charbon actif pour l’affinage',
      'Désinfection : chlore, ozone ou UV puis chlore résiduel en réseau',
    ],
  },
  mistakes: {
    items: [
      ['Dimensionner un décanteur sur sa profondeur', 'Un décanteur profond mais petit en surface est inefficace', 'Dimensionner sur la surface avec la vitesse de Hazen.'],
      ['Chlorer une eau turbide', 'Désinfection incomplète, sous-produits de chloration', 'Abaisser la turbidité avant la désinfection.'],
      ['Oublier le lavage des filtres', 'Surface disponible insuffisante pendant les lavages', 'Prévoir N + 1 filtres.'],
    ],
  },
  tips: {
    tips: [
      'Le jar-test se refait à chaque changement de qualité de l’eau brute (crue, étiage, saison).',
      'Les boues de décantation représentent 1 à 3 % du débit traité : prévoyez leur épaississement et leur évacuation.',
      'Mesurez le chlore libre en bout de réseau : c’est le meilleur indicateur de la protection sanitaire.',
      'Un réservoir dimensionné pour une demi-journée à une journée de consommation absorbe les pointes horaires.',
    ],
  },
  norms: {
    norms: [
      ['Directive (UE) 2020/2184', 'Qualité des eaux destinées à la consommation humaine.'],
      ['Code de la santé publique, art. R.1321-1 et suivants', 'Exigences de qualité et contrôle sanitaire en France.'],
      ['Arrêté du 11 janvier 2007', 'Limites et références de qualité des eaux distribuées.'],
      ['NF EN 805', 'Alimentation en eau : prescriptions pour les réseaux extérieurs aux bâtiments.'],
    ],
  },
  exercises: {
    exercises: [
      {
        level: 1,
        text: 'Calculer le débit du jour de pointe d’une commune de 8 000 habitants (dotation 140 L/hab/j, k_j = 1,6).',
        hint: 'Q = k_j·P·d / 1 000.',
        answer_latex: "Q_{j,max} = 1{,}6 \\times \\frac{8\\,000 \\times 140}{1\\,000} = 1\\,792\\ \\text{m}^3/\\text{j}",
        answer_text: '≈ 1 790 m³/j (75 m³/h).',
      },
      {
        level: 2,
        text: 'Quelle surface de décantation faut-il pour 75 m³/h avec v_H = 1,2 m/h ?',
        hint: 'S = Q / v_H.',
        answer_latex: "S = \\frac{75}{1{,}2} = 62{,}5\\ \\text{m}^2",
        answer_text: 'S = 62,5 m².',
      },
      {
        level: 3,
        text: 'Une bâche de contact de 50 m³ reçoit 75 m³/h avec 0,4 mg/L de chlore libre. Calculer le temps de contact et le Ct.',
        hint: 't = V / Q.',
        answer_latex: "t = \\frac{50}{75} = 0{,}667\\ \\text{h} = 40\\ \\text{min} \\qquad Ct = 0{,}4 \\times 40 = 16\\ \\text{mg·min/L}",
        answer_text: 't = 40 min ; Ct = 16 mg·min/L.',
      },
    ],
  },
  quiz: {
    title: 'Quiz — Potabilisation',
    questions: [
      { q: 'Quel paramètre fixe l’efficacité d’un décanteur ?', options: ['Sa profondeur', 'Sa surface', 'Sa couleur'], correct: 1, explain: 'Selon Hazen, une particule est retenue si v_s > Q/S : c’est la surface qui compte.' },
      { q: 'Pourquoi coagule-t-on une eau de surface ?', options: ['Pour la désinfecter', 'Pour déstabiliser les colloïdes et former des flocs', 'Pour réduire sa dureté'], correct: 1, explain: 'Le coagulant neutralise les charges des particules colloïdales qui peuvent alors s’agglomérer.' },
      { q: 'Que mesure le facteur Ct ?', options: ['La turbidité', "L'efficacité de désinfection", 'La dureté'], correct: 1, explain: 'Concentration en désinfectant × temps de contact.' },
    ],
  },
  exam_questions: {
    questions: [
      'Décrivez la filière de traitement d’une eau de surface et le rôle de chaque étape.',
      'Établissez la loi de Stokes et montrez pourquoi la floculation améliore la décantation.',
      'Dimensionnez la décantation et la filtration d’une station pour une population donnée.',
    ],
  },
  interview_questions: {
    questions: [
      ['Comment adaptez-vous une filière à une eau souterraine ?', 'Je pars des analyses : si l’eau est limpide et conforme, une simple désinfection suffit ; je traite ensuite les paramètres déclassants (fer et manganèse par oxydation-filtration, nitrates par résines ou dilution, pesticides par charbon actif).'],
      ['Pourquoi garder du chlore résiduel dans le réseau ?', 'Pour éviter la recontamination de l’eau entre la station et le robinet (retours d’eau, biofilm) et disposer d’un indicateur simple de la qualité sanitaire en réseau.'],
    ],
  },
  practical_case: {
    title: 'Cas pratique — Extension d’une station existante',
    scenario: 'Une station produit 2 400 m³/j avec 2 filtres de 8 m². La population passe de 12 000 à 18 000 habitants (dotation 150 L/hab/j, k_j = 1,4).',
    description: 'Vérifier si la filtration existante suffit (v_f max = 8 m/h) et dimensionner l’extension.',
    resolutions: [
      "Q_{j,max} = 1{,}4 \\times \\frac{18\\,000 \\times 150}{1\\,000} = 3\\,780\\ \\text{m}^3/\\text{j} = 157{,}5\\ \\text{m}^3/\\text{h}",
      "v_f = \\frac{157{,}5}{2 \\times 8} = 9{,}8\\ \\text{m/h} > 8\\ \\text{m/h}",
      "S_{f,requis} = \\frac{157{,}5}{8} = 19{,}7\\ \\text{m}^2 \\Rightarrow \\text{ajouter 2 filtres de 8 m}^2 \\ (N+1)",
    ],
    conclusion: "La filtration est insuffisante : on ajoute deux filtres de 8 m² (4 au total, dont un en lavage), et on vérifie la décantation et la désinfection pour le nouveau débit.",
  },
  summary: {
    content: `### La potabilisation en 5 points
1. Débit de pointe : $Q = k_j P d / 1\\,000$.
2. **Coagulation-floculation** pour grossir les particules.
3. **Décantation** : $S = Q / v_H$ (Hazen) ; vitesse de chute selon Stokes.
4. **Filtration** : $S_f = Q / v_f$ avec N + 1 filtres.
5. **Désinfection** : facteur $Ct$ et chlore résiduel en réseau.`,
  },
  key_points: {
    points: [
      'Dotation : 120 à 200 L/hab/j',
      'Décantation : S = Q / v_H',
      'Stokes : v_s proportionnelle à d²',
      'Filtration rapide : 5 à 10 m/h',
      'Ct = concentration × temps de contact',
    ],
  },
  self_assessment: {
    objectives: [
      'Je sais calculer les besoins de pointe d’une population',
      'Je connais les étapes d’une filière de potabilisation',
      'Je sais dimensionner un décanteur et des filtres',
      'Je comprends le facteur Ct de la désinfection',
      "J'ai réussi le quiz avec au moins 2 bonnes réponses sur 3",
    ],
  },
});
