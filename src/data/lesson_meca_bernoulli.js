// ── Lesson: Mécanique des fluides — écoulements et Bernoulli — Module 6 ───────
import { buildLesson } from './build_lesson.js';

export const lesson_meca_bernoulli = buildLesson({
  moduleId: 6,
  slug: 'meca_bernoulli',
  lessonIndex: 3,
  title: "Dynamique des Fluides : Continuité, Bernoulli, Reynolds & Pertes de Charge",
  subtitle: 'Module 06 — Mécanique des structures & des fluides',
  level: 'Intermédiaire',
  duration: '12h',
  tags: ['Mécanique des fluides', 'Bernoulli', 'Débit', 'Reynolds', 'Pertes de charge', 'Torricelli', 'Pompe'],
}, {
  definition: {
    title: "Définition — L'énergie d'un fluide en mouvement",
    fr: 'Dynamique des fluides (écoulements en charge)',
    en: 'Fluid dynamics / pipe flow',
    metier: "Utilisée pour les réseaux d'eau potable et d'incendie, les conduites forcées, les stations de pompage, les siphons et les ouvrages de vidange.",
    content: `Un liquide qui s'écoule possède trois formes d'énergie, exprimées en **hauteur d'eau** (mètres) :
- l'énergie de **position** $z$ (altitude) ;
- l'énergie de **pression** $p / (\\rho g)$ ;
- l'énergie **cinétique** $v^2 / (2g)$.

Leur somme est la **charge** $H$. Le théorème de **Bernoulli** dit qu'en l'absence de pertes, la charge reste constante le long d'un écoulement ; en réalité, le frottement en dissipe une partie : ce sont les **pertes de charge**.

### Deux principes à retenir
1. **Continuité** : le débit $Q = v \\cdot A$ se conserve ; si la section diminue, la vitesse augmente.
2. **Bernoulli** : quand la vitesse augmente, la pression diminue (et inversement).

> 💡 Une pompe ajoute de la charge, une turbine en prélève, une vanne partiellement fermée en dissipe.`,
  },
  importance: {
    content: `- **Distribution d'eau** : il faut garantir une pression minimale au robinet le plus défavorisé.
- **Pompage** : la hauteur manométrique et la puissance des pompes découlent directement de Bernoulli et des pertes de charge.
- **Sécurité** : une dépression excessive (siphons, aspiration) provoque la cavitation qui détruit les pompes.
- **Hydraulique urbaine** : les débits et vitesses limites conditionnent les diamètres et donc le coût des réseaux.

> ⚠️ **À retenir** : les pertes de charge croissent à peu près comme le carré de la vitesse ; doubler le débit dans une même conduite quadruple les pertes.`,
  },
  applications: {
    examples: [
      ['Réseau d’eau potable', 'Vérification de la pression aux points hauts et choix des diamètres.'],
      ['Station de pompage', 'Calcul de la hauteur manométrique totale et de la puissance électrique.'],
      ['Vidange de bassin', 'Temps de vidange par un orifice (Torricelli).'],
      ['Débitmètre Venturi', 'Mesure du débit par la chute de pression dans un rétrécissement.'],
      ['Conduite forcée', 'Énergie disponible en pied pour une microcentrale hydroélectrique.'],
    ],
  },
  theory: {
    title: 'Théorie — Équations de base des écoulements en charge',
    content: `### 1. Continuité
$$Q = v_1 A_1 = v_2 A_2$$

### 2. Bernoulli généralisé
Entre deux sections 1 et 2 dans le sens de l'écoulement :
$$z_1 + \\frac{p_1}{\\rho g} + \\frac{v_1^2}{2g} + H_p = z_2 + \\frac{p_2}{\\rho g} + \\frac{v_2^2}{2g} + \\Delta H_{1 \\to 2}$$
$H_p$ est la charge apportée par une pompe éventuelle et $\\Delta H$ les pertes de charge.

### 3. Régime d'écoulement : nombre de Reynolds
$$Re = \\frac{v \\, D}{\\nu}$$
Laminaire si $Re < 2\\,000$, turbulent au-delà d'environ 4 000. En génie civil, les écoulements d'eau sont presque toujours turbulents ($\\nu \\approx 10^{-6}$ m²/s à 20 °C).

### 4. Pertes de charge
- **Linéaires** (Darcy-Weisbach) : $\\Delta H = \\lambda \\dfrac{L}{D} \\dfrac{v^2}{2g}$, avec $\\lambda$ ≈ 0,015 à 0,03 selon la rugosité et Re (diagramme de Moody, formule de Colebrook).
- **Singulières** (coudes, vannes, entrées) : $\\Delta H = K \\dfrac{v^2}{2g}$.

### 5. Vidange : Torricelli
La vitesse de sortie d'un orifice sous une charge $h$ vaut $v = \\sqrt{2 g h}$ ; le débit réel est $Q = C_d \\, A \\sqrt{2gh}$ avec $C_d \\approx 0{,}6$ pour un orifice à arête vive.

### 6. Puissance de pompage
$$P = \\frac{\\rho \\, g \\, Q \\, H_{mt}}{\\eta}$$`,
  },
  formulas: {
    title: 'Formules essentielles — Écoulements en charge',
    formulas: [
      {
        name: 'Équation de continuité',
        latex: "Q = v \\cdot A = \\text{constante}",
        description: 'Conservation du débit d’un liquide incompressible.',
        vars: [
          ['Q', 'Débit volumique', 'm³/s', '1 L/s = 0,001 m³/s.'],
          ['v', 'Vitesse moyenne', 'm/s', 'Distribution 0,5 à 1,5 m/s ; refoulement 1 à 2 m/s.'],
          ['A', 'Section d’écoulement', 'm²', 'πD²/4 pour une conduite circulaire.'],
        ],
      },
      {
        name: 'Théorème de Bernoulli généralisé',
        latex: "z_1 + \\frac{p_1}{\\rho g} + \\frac{v_1^2}{2g} + H_p = z_2 + \\frac{p_2}{\\rho g} + \\frac{v_2^2}{2g} + \\Delta H_{1 \\to 2}",
        description: 'Bilan de charge entre deux sections, avec pompe et pertes.',
        vars: [
          ['z', 'Cote', 'm', 'Altitude de la section.'],
          ['p/(\\rho g)', 'Hauteur de pression', 'm', '10 m ≈ 1 bar.'],
          ['v^2/(2g)', 'Hauteur cinétique', 'm', 'Souvent faible : 0,05 m à 1 m/s.'],
          ['H_p', 'Charge apportée par la pompe', 'm', 'Hauteur manométrique.'],
          ['\\Delta H', 'Pertes de charge', 'm', 'Linéaires + singulières.'],
        ],
      },
      {
        name: 'Nombre de Reynolds',
        latex: "Re = \\frac{v \\, D}{\\nu}",
        description: 'Caractérise le régime d’écoulement.',
        vars: [
          ['Re', 'Nombre de Reynolds', '-', '< 2 000 laminaire ; > 4 000 turbulent.'],
          ['D', 'Diamètre intérieur', 'm', 'Diamètre hydraulique pour les sections non circulaires.'],
          ['\\nu', 'Viscosité cinématique', 'm²/s', 'Eau à 20 °C : 1,0 × 10⁻⁶.'],
        ],
      },
      {
        name: 'Pertes de charge linéaires et singulières',
        latex: "\\Delta H = \\lambda \\frac{L}{D} \\frac{v^2}{2g} + \\sum K \\frac{v^2}{2g}",
        description: 'Darcy-Weisbach pour le frottement, coefficients K pour les singularités.',
        vars: [
          ['\\lambda', 'Coefficient de frottement', '-', '0,015 à 0,03 (Moody, Colebrook).'],
          ['L', 'Longueur de conduite', 'm', 'Longueur développée.'],
          ['K', 'Coefficient de perte singulière', '-', 'Coude 90° : 0,3 à 1 ; entrée : 0,5 ; sortie : 1.'],
        ],
        rule: "Les pertes varient presque comme v² : réduire la vitesse de moitié divise les pertes par quatre.",
      },
      {
        name: 'Puissance absorbée par une pompe',
        latex: "P = \\frac{\\rho \\, g \\, Q \\, H_{mt}}{\\eta}",
        description: 'Puissance à l’arbre de la pompe.',
        vars: [
          ['P', 'Puissance', 'W', 'À l’arbre (le moteur ajoute son propre rendement).'],
          ['H_{mt}', 'Hauteur manométrique totale', 'm', 'Dénivelée + pertes de charge (+ pression résiduelle).'],
          ['\\eta', 'Rendement de la pompe', '-', '0,6 à 0,85.'],
        ],
      },
    ],
  },
  stepbystep: {
    title: 'Calcul complet — Refoulement vers un réservoir',
    problem: "Une pompe refoule Q = 30 L/s dans une conduite de diamètre intérieur 150 mm et de longueur 800 m vers un réservoir situé 25 m plus haut. λ = 0,02 ; pertes singulières ΣK = 5. Rendement de la pompe 0,70. Calculer la vitesse, le régime, les pertes, la HMT et la puissance.",
    steps_demo: [
      { n: 1, text: "Section : A = π × 0,15² / 4 = 0,01767 m² ; vitesse v = 0,030 / 0,01767 = 1,70 m/s." },
      { n: 2, text: "Hauteur cinétique : v²/2g = 1,70² / 19,62 = 0,147 m." },
      { n: 3, text: "Reynolds : Re = 1,70 × 0,15 / 10⁻⁶ = 255 000 → turbulent." },
      { n: 4, text: "Pertes : ΔH = (0,02 × 800 / 0,15 + 5) × 0,147 = (106,7 + 5) × 0,147 = 16,4 m." },
      { n: 5, text: "HMT = 25 + 16,4 = 41,4 m." },
      { n: 6, text: "Puissance : P = 1 000 × 9,81 × 0,030 × 41,4 / 0,70 = 17 400 W ≈ 17,4 kW." },
    ],
    result_latex: "v = 1{,}70\\ \\text{m/s} \\quad \\Delta H = 16{,}4\\ \\text{m} \\quad H_{mt} = 41{,}4\\ \\text{m} \\quad P = \\frac{9\\,810 \\times 0{,}030 \\times 41{,}4}{0{,}70} = 17{,}4\\ \\text{kW}",
  },
  units: {
    table: [
      ['Débit', 'm³/s, L/s, m³/h', 'gpm, cfs', '1 L/s = 3,6 m³/h = 15,85 gpm'],
      ['Charge', 'm (colonne d’eau)', 'ft', '10,2 m ≈ 1 bar'],
      ['Viscosité cinématique', 'm²/s', 'ft²/s', 'Eau à 20 °C : 1,0 × 10⁻⁶ m²/s'],
      ['Puissance', 'W, kW', 'hp', '1 kW = 1,341 hp'],
      ['Vitesse', 'm/s', 'ft/s', '1 m/s = 3,281 ft/s'],
    ],
    note: 'Exprimer toutes les énergies en mètres de colonne d’eau permet de tracer la ligne de charge et la ligne piézométrique le long d’un réseau.',
  },
  hypotheses: {
    items: [
      ['info', 'Fluide incompressible, écoulement permanent, vitesses moyennes dans chaque section.'],
      ['info', 'Le coefficient λ dépend du régime et de la rugosité relative ; une valeur de 0,02 est un ordre de grandeur pour l’eau.'],
      ['warning', 'Une pression absolue inférieure à la tension de vapeur (≈ 2,3 kPa à 20 °C) provoque la cavitation.'],
      ['warning', 'Une fermeture rapide de vanne crée un coup de bélier (surpression) non couvert par Bernoulli.'],
      ['tip', 'Tracez la ligne piézométrique : là où elle passe sous la conduite, la pression est négative (risque d’entrée d’air ou de pollution).'],
    ],
  },
  simple_examples: {
    examples: [
      {
        title: 'Exemple 1 : rétrécissement',
        given: 'Conduite de 200 mm à 1 m/s qui passe à 100 mm',
        find: 'La vitesse dans la petite section',
        solution_latex: "v_2 = v_1 \\left(\\frac{D_1}{D_2}\\right)^2 = 1 \\times \\left(\\frac{200}{100}\\right)^2 = 4\\ \\text{m/s}",
        result: 'Diviser le diamètre par 2 multiplie la vitesse par 4.',
      },
      {
        title: 'Exemple 2 : vidange par un orifice',
        given: 'Orifice de 10 cm² sous 2,0 m d’eau, C_d = 0,6',
        find: 'Le débit',
        solution_latex: "Q = 0{,}6 \\times 0{,}001 \\times \\sqrt{2 \\times 9{,}81 \\times 2{,}0} = 0{,}6 \\times 0{,}001 \\times 6{,}26 = 3{,}76\\ \\text{L/s}",
        result: '≈ 3,8 L/s au début de la vidange.',
      },
      {
        title: 'Exemple 3 : pression en pied d’immeuble',
        given: 'Réservoir à la cote 120 m, robinet à la cote 85 m, pertes 8 m, vitesse faible',
        find: 'La pression au robinet',
        solution_latex: "\\frac{p}{\\rho g} = 120 - 85 - 8 = 27\\ \\text{m} \\Rightarrow p \\approx 2{,}6\\ \\text{bar}",
        result: '≈ 2,6 bar : confortable pour un logement.',
      },
    ],
  },
  real_examples: {
    title: 'Exemple réel — Cavitation d’une pompe de relevage',
    examples: [
      {
        context: 'Station de pompage installée 6 m au-dessus du plan d’eau d’aspiration, conduite d’aspiration longue et sous-dimensionnée',
        scenario: "La pression à l'entrée de la pompe descend sous la tension de vapeur : des bulles se forment puis implosent sur la roue, qui est érodée en quelques mois. La pompe devient bruyante et son débit chute.",
        decomposition_latex: "\\frac{p_{entrée}}{\\rho g} = 10{,}3 - 6 - \\Delta H_{asp} - \\frac{v^2}{2g} < NPSH_{requis}",
        lesson: "Il faut vérifier le NPSH disponible par rapport au NPSH requis par la pompe : placer la pompe en charge (sous le niveau d'eau) ou augmenter le diamètre d'aspiration résout le problème.",
      },
    ],
  },
  diagrams: {
    title: 'Schéma de principe — Ligne de charge d’une installation de pompage',
    diagram_description: [
      'Réservoir amont : charge = cote du plan d’eau',
      'Aspiration : légères pertes, pression minimale à l’entrée de la pompe (cavitation)',
      'Pompe : saut de charge égal à la HMT',
      'Refoulement : la ligne de charge descend avec les pertes linéaires',
      'Singularités : chutes localisées (coudes, vannes, clapets)',
      'Réservoir aval : charge = cote du plan d’eau d’arrivée',
    ],
  },
  mistakes: {
    items: [
      ['Oublier les pertes de charge dans la HMT', 'Pompe sous-dimensionnée, débit insuffisant', 'HMT = dénivelée géométrique + pertes (+ pression résiduelle demandée).'],
      ['Utiliser le diamètre nominal au lieu du diamètre intérieur', 'Vitesse et pertes faussées', 'Prendre le diamètre intérieur réel du tube.'],
      ['Placer une pompe trop haut au-dessus de l’eau', 'Cavitation et désamorçage', 'Vérifier le NPSH disponible ; préférer une pompe en charge.'],
    ],
  },
  tips: {
    tips: [
      'Vitesse économique en refoulement : 1 à 1,5 m/s (formule de Bresse : D ≈ 1,5 √Q).',
      'Les pertes singulières représentent souvent 5 à 15 % des pertes linéaires dans les longues conduites.',
      'Un coup de bélier se limite par des fermetures lentes, des anti-béliers ou des volants d’inertie.',
      'Pour les grands réseaux, utilisez un logiciel de modélisation (EPANET) pour équilibrer les débits et les pressions.',
    ],
  },
  norms: {
    norms: [
      ['NF EN 805', 'Alimentation en eau : réseaux extérieurs aux bâtiments (pressions, essais).'],
      ['NF EN 806', 'Installations d’eau intérieures aux bâtiments.'],
      ['NF EN ISO 9906', 'Pompes rotodynamiques : essais de fonctionnement hydraulique.'],
      ['Fascicule 71', 'Fourniture et pose de canalisations d’eau (marchés publics).'],
    ],
  },
  exercises: {
    exercises: [
      {
        level: 1,
        text: 'Une conduite de 300 mm transporte 100 L/s. Calculer la vitesse.',
        hint: 'v = Q / A.',
        answer_latex: "v = \\frac{0{,}100}{\\pi \\times 0{,}15^2} = \\frac{0{,}100}{0{,}0707} = 1{,}41\\ \\text{m/s}",
        answer_text: 'v ≈ 1,41 m/s.',
      },
      {
        level: 2,
        text: 'Calculer les pertes de charge dans 1 200 m de cette conduite avec λ = 0,018.',
        hint: 'v²/2g = 1,41² / 19,62.',
        answer_latex: "\\Delta H = 0{,}018 \\times \\frac{1\\,200}{0{,}30} \\times \\frac{1{,}41^2}{19{,}62} = 72 \\times 0{,}101 = 7{,}3\\ \\text{m}",
        answer_text: 'ΔH ≈ 7,3 m.',
      },
      {
        level: 3,
        text: 'Quelle puissance faut-il pour élever 100 L/s de 18 m à travers cette conduite (η = 0,78) ?',
        hint: 'HMT = 18 + 7,3.',
        answer_latex: "P = \\frac{9\\,810 \\times 0{,}100 \\times 25{,}3}{0{,}78} = 31\\,800\\ \\text{W}",
        answer_text: 'P ≈ 32 kW à l’arbre de la pompe.',
      },
    ],
  },
  quiz: {
    title: 'Quiz — Dynamique des fluides',
    questions: [
      { q: 'Si le diamètre d’une conduite est divisé par 2 à débit constant, la vitesse est…', options: ['Divisée par 2', 'Multipliée par 2', 'Multipliée par 4'], correct: 2, explain: 'A est divisée par 4 et Q = v·A reste constant.' },
      { q: 'Que représente p/(ρg) ?', options: ['Une vitesse', 'Une hauteur de pression', 'Un débit'], correct: 1, explain: 'La pression exprimée en hauteur de colonne d’eau.' },
      { q: 'Un écoulement d’eau avec Re = 200 000 est…', options: ['Laminaire', 'Turbulent', 'Transitoire'], correct: 1, explain: 'Re > 4 000 : turbulent.' },
    ],
  },
  exam_questions: {
    questions: [
      'Énoncez le théorème de Bernoulli généralisé et appliquez-le à une installation de pompage.',
      'Expliquez le nombre de Reynolds et l’influence du régime d’écoulement sur les pertes de charge.',
      'Calculez la HMT et la puissance d’une pompe pour un réseau donné, et vérifiez le risque de cavitation.',
    ],
  },
  interview_questions: {
    questions: [
      ['Comment choisir le diamètre d’une conduite de refoulement ?', "C'est un optimum économique : un grand diamètre coûte cher à l'investissement mais réduit les pertes et donc l'énergie de pompage ; on vise en général des vitesses de 1 à 1,5 m/s et on compare le coût actualisé des solutions."],
      ['Qu’est-ce qu’un coup de bélier ?', "Une onde de surpression créée par une variation brusque de vitesse (fermeture de vanne, arrêt de pompe) ; elle peut atteindre plusieurs dizaines de bars et rompre les conduites. On la limite par des manœuvres lentes et des réservoirs anti-bélier."],
    ],
  },
  practical_case: {
    title: 'Cas pratique — Alimentation d’un hameau par gravité',
    scenario: 'Un réservoir à la cote 250 m alimente un hameau à la cote 195 m par une conduite de 2 500 m, diamètre intérieur 100 mm, λ = 0,022, débit de pointe 8 L/s. Pression minimale exigée : 2 bar (20 m).',
    description: 'Vérifier la pression disponible au hameau.',
    resolutions: [
      "v = \\frac{0{,}008}{\\pi \\times 0{,}05^2} = 1{,}02\\ \\text{m/s} \\qquad \\frac{v^2}{2g} = 0{,}053\\ \\text{m}",
      "\\Delta H = 0{,}022 \\times \\frac{2\\,500}{0{,}10} \\times 0{,}053 = 29{,}2\\ \\text{m}",
      "\\frac{p}{\\rho g} = 250 - 195 - 29{,}2 - 0{,}05 = 25{,}8\\ \\text{m} \\approx 2{,}5\\ \\text{bar} \\ge 2\\ \\text{bar} \\quad \\checkmark",
    ],
    conclusion: 'La pression au hameau en pointe (≈ 2,5 bar) respecte le minimum de 2 bar ; à débit nul, elle remonterait à 5,4 bar (55 m), ce qui reste acceptable.',
  },
  summary: {
    content: `### La dynamique des fluides en 5 points
1. Continuité : $Q = vA$.
2. Bernoulli : $z + p/\\rho g + v^2/2g$ constant aux pertes près.
3. Reynolds : l'eau en conduite est presque toujours turbulente.
4. Pertes : $\\lambda \\frac{L}{D}\\frac{v^2}{2g} + \\sum K\\frac{v^2}{2g}$.
5. Pompe : $P = \\rho g Q H_{mt} / \\eta$, attention à la cavitation.`,
  },
  key_points: {
    points: [
      'Q = v·A',
      'Charge = z + p/ρg + v²/2g',
      'Re = vD/ν ; turbulent au-delà de 4 000',
      'ΔH = λ (L/D) v²/2g',
      'P = ρ g Q H_mt / η',
    ],
  },
  self_assessment: {
    objectives: [
      'Je sais appliquer l’équation de continuité',
      'Je sais écrire Bernoulli entre deux sections avec pertes et pompe',
      'Je sais calculer des pertes de charge',
      'Je sais calculer la HMT et la puissance d’une pompe',
      "J'ai réussi le quiz avec au moins 2 bonnes réponses sur 3",
    ],
  },
});
