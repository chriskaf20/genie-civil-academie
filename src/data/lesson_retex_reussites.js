// ── Lesson: Grandes réussites du génie civil — Module 34 ─────────────────────
import { buildLesson } from './build_lesson.js';

export const lesson_retex_reussites = buildLesson({
  moduleId: 34,
  slug: 'retex_reussites',
  lessonIndex: 2,
  title: "Grandes Réussites du Génie Civil : Viaduc de Millau, Burj Khalifa, Tunnel du Gothard — Ce qui a Fait leur Succès",
  subtitle: "Module 34 — Études de Cas & Retours d'Expérience",
  level: 'Intermédiaire',
  duration: '5h',
  diagramType: 'bridge_structure',
  tags: ['Millau', 'Burj Khalifa', 'Gothard', 'Pont de Normandie', 'Grands projets', 'Innovation'],
}, {
  definition: {
    title: 'Définition — Apprendre aussi des réussites',
    fr: 'Retour d’expérience sur les grands ouvrages réussis',
    en: 'Lessons from landmark civil engineering successes',
    metier: "Utile aux ingénieurs de conception, aux chefs de projet et aux étudiants qui préparent des projets ambitieux.",
    content: `Les grands ouvrages réussis montrent comment l'ingénierie maîtrise des défis extrêmes : hauteur, portée, profondeur, délais. Trois exemples majeurs :

| Ouvrage | Mise en service | Record ou défi |
|---|---|---|
| Viaduc de Millau (France) | 2004 | 2 460 m de long, pile de 245 m, sommet des pylônes à 343 m |
| Burj Khalifa (Émirats) | 2010 | 828 m, plus haute tour du monde à sa livraison |
| Tunnel de base du Saint-Gothard (Suisse) | 2016 | 57 km, plus long tunnel ferroviaire du monde, jusqu'à 2 300 m de couverture |

### Les facteurs communs de réussite
- **Conception adaptée** aux phénomènes dominants (vent, géologie, chaleur) ;
- **Méthodes de construction** pensées dès la conception ;
- **Essais et modélisation** (soufflerie, prototypes, reconnaissances) ;
- **Organisation** : planification, gestion des risques, qualité.

> 💡 Une réussite n'est pas l'absence de difficultés : c'est leur anticipation et leur maîtrise.`,
  },
  importance: {
    content: `- **Inspiration** : ces projets repoussent les limites techniques.
- **Méthodes transférables** : lançage, coffrages grimpants, tunneliers, auscultation sont utilisés sur des projets courants.
- **Gestion de projet** : contrats, risques, délais maîtrisés sur des budgets considérables.
- **Image du métier** : ils montrent la contribution de l'ingénierie à la société.

> ⚠️ **À retenir** : chaque innovation a été justifiée par des calculs, des essais et une gestion des risques rigoureuse.`,
  },
  applications: {
    examples: [
      ['Millau', 'Lançage du tablier métallique au-dessus de la vallée, avec palées provisoires.'],
      ['Burj Khalifa', 'Plan en Y « contrariant » le vent, béton pompé à plus de 600 m.'],
      ['Gothard', 'Tunneliers et méthode traditionnelle selon les zones géologiques.'],
      ['Pont de Normandie (1995)', 'Record de portée à haubans à sa construction (856 m).'],
      ['Pont de l’Øresund (2000)', 'Liaison pont-île-tunnel entre le Danemark et la Suède.'],
    ],
  },
  theory: {
    title: 'Théorie — Les phénomènes maîtrisés',
    content: `### 1. Millau : vent et dilatation
Le tablier métallique de 2 460 m se dilate avec la température :
$$\\Delta L = \\alpha \\, \\Delta T \\, L$$
Le vent est l'action dominante pour les piles et le tablier : la pression dynamique vaut $q = \\frac{1}{2} \\rho v^2$. Des écrans brise-vent protègent les usagers ; la forme profilée du tablier a été optimisée en soufflerie.

### 2. Burj Khalifa : vent et pompage
Le plan en Y et les retraits successifs « désorganisent » les tourbillons de vent (évitant la résonance par détachement tourbillonnaire). Le béton a été pompé à plus de 600 m : la pression hydrostatique dans la conduite seule vaut
$$p = \\rho_b \\, g \\, h$$
à laquelle s'ajoutent les pertes de charge.

### 3. Gothard : contraintes et chaleur
Sous 2 300 m de couverture, la contrainte verticale atteint :
$$\\sigma_v = \\gamma \\, h$$
La roche est chaude (jusqu'à environ 45 °C) : ventilation et refroidissement étaient indispensables. Les zones de roches « poussantes » ont nécessité des soutènements déformables.

### 4. Méthodes clés
- **Lançage** : le tablier est assemblé à terre et poussé au-dessus de la vallée ;
- **Coffrages auto-grimpants** pour les piles et noyaux de tours ;
- **Tunneliers** à roche dure ; **méthode observationnelle** dans les zones difficiles.`,
  },
  formulas: {
    title: 'Formules essentielles — Phénomènes des grands ouvrages',
    formulas: [
      {
        name: 'Dilatation thermique',
        latex: "\\Delta L = \\alpha \\, \\Delta T \\, L",
        description: 'Variation de longueur d’un tablier.',
        vars: [
          ['\\alpha', 'Coefficient de dilatation', '1/°C', '12 × 10⁻⁶ pour l’acier.'],
          ['\\Delta T', 'Variation de température', '°C', ''],
          ['L', 'Longueur dilatable', 'm', 'Depuis le point fixe.'],
        ],
      },
      {
        name: 'Pression dynamique du vent',
        latex: "q = \\frac{1}{2} \\rho \\, v^2",
        description: 'Pression de référence du vent.',
        vars: [
          ['\\rho', "Masse volumique de l'air", 'kg/m³', '1,225.'],
          ['v', 'Vitesse du vent', 'm/s', ''],
        ],
      },
      {
        name: 'Pression hydrostatique de pompage',
        latex: "p = \\rho_b \\, g \\, h",
        description: 'Pression minimale pour élever le béton à la hauteur h.',
        vars: [
          ['\\rho_b', 'Masse volumique du béton', 'kg/m³', '≈ 2 400.'],
          ['h', 'Hauteur de pompage', 'm', ''],
        ],
      },
      {
        name: 'Contrainte verticale sous couverture',
        latex: "\\sigma_v = \\gamma \\, h",
        description: 'Contrainte géostatique en profondeur.',
        vars: [
          ['\\gamma', 'Poids volumique de la roche', 'kN/m³', '≈ 27.'],
          ['h', 'Hauteur de couverture', 'm', ''],
        ],
      },
    ],
  },
  stepbystep: {
    title: 'Calcul complet — Trois ordres de grandeur des grands ouvrages',
    problem: "Calculer : (a) la dilatation du tablier de Millau (L = 2 460 m, acier, ΔT = 40 °C, si le tablier était libre d'une seule extrémité) ; (b) la pression hydrostatique pour pomper du béton à 600 m ; (c) la contrainte verticale sous 2 300 m de roche.",
    steps_demo: [
      { n: 1, text: "(a) ΔL = 12 × 10⁻⁶ × 40 × 2 460 = 1,18 m : en réalité, le point fixe est central et les joints de dilatation sont aux culées." },
      { n: 2, text: "(b) p = 2 400 × 9,81 × 600 = 14,1 × 10⁶ Pa = 14,1 MPa, sans compter les pertes de charge : il a fallu des pompes à très haute pression." },
      { n: 3, text: "(c) σ_v = 27 × 2 300 = 62 100 kPa = 62 MPa : du même ordre que la résistance de nombreuses roches." },
      { n: 4, text: "Conclusion : chaque record impose de maîtriser un phénomène que les ouvrages courants rendent négligeable." },
    ],
    result_latex: "\\Delta L = 1{,}18\\ \\text{m} \\qquad p = 14{,}1\\ \\text{MPa} \\qquad \\sigma_v = 62\\ \\text{MPa}",
  },
  units: {
    table: [
      ['Hauteur', 'm', 'ft', '828 m = 2 717 ft'],
      ['Vitesse du vent', 'm/s', 'mph', '1 m/s = 2,237 mph'],
      ['Pression', 'MPa', 'psi', '14 MPa ≈ 2 030 psi'],
      ['Longueur de tunnel', 'km', 'mi', '57 km = 35,4 mi'],
      ['Température', '°C', '°F', '45 °C = 113 °F'],
    ],
    note: 'Les chiffres des ouvrages cités sont arrondis à partir des données publiées par les maîtres d’ouvrage.',
  },
  hypotheses: {
    items: [
      ['info', 'Les calculs présentés sont des ordres de grandeur pédagogiques, pas les calculs de conception des ouvrages.'],
      ['info', 'Le comportement réel dépend de nombreux paramètres (liaisons, gradients thermiques, effets dynamiques).'],
      ['warning', 'Les réussites ont aussi connu des difficultés (retards, surcoûts, géologie imprévue) qu’il faut étudier.'],
      ['warning', 'Ne transposez pas une solution exceptionnelle à un projet courant sans analyse coût/bénéfice.'],
      ['tip', 'Lisez les articles techniques publiés par les équipes de conception : ils détaillent les choix et les essais.'],
    ],
  },
  simple_examples: {
    examples: [
      {
        title: 'Exemple 1 : vent sur un tablier',
        given: 'v = 150 km/h = 41,7 m/s',
        find: 'q',
        solution_latex: "q = 0{,}5 \\times 1{,}225 \\times 41{,}7^2 = 1\\,065\\ \\text{Pa}",
        result: 'Environ 1,07 kPa.',
      },
      {
        title: 'Exemple 2 : dilatation depuis un point fixe central',
        given: 'L = 1 230 m de chaque côté ; ΔT = 40 °C',
        find: 'Mouvement à chaque culée',
        solution_latex: "\\Delta L = 12 \\times 10^{-6} \\times 40 \\times 1\\,230 = 0{,}59\\ \\text{m}",
        result: 'Environ 59 cm à chaque joint.',
      },
      {
        title: 'Exemple 3 : couverture d’un tunnel alpin',
        given: 'h = 1 500 m ; γ = 27 kN/m³',
        find: 'σ_v',
        solution_latex: "\\sigma_v = 27 \\times 1\\,500 = 40\\,500\\ \\text{kPa} = 40{,}5\\ \\text{MPa}",
        result: '40,5 MPa.',
      },
    ],
  },
  real_examples: {
    title: 'Exemple réel — Le lançage du viaduc de Millau',
    examples: [
      {
        context: 'Construction 2001–2004, tablier métallique d’environ 36 000 t',
        scenario: "Le tablier a été assemblé sur les plateaux de part et d'autre de la vallée, puis poussé au-dessus des piles par des vérins pilotés par ordinateur, avec des palées provisoires réduisant les portées pendant le lançage. Les deux parties se sont rejointes au-dessus du Tarn avec une précision centimétrique. L'ouvrage a été livré dans les délais.",
        decomposition_latex: "\\text{Préfabrication} + \\text{lançage piloté} + \\text{palées provisoires} \\Rightarrow \\text{délais et sécurité maîtrisés}",
        lesson: "La méthode de construction a été conçue en même temps que l'ouvrage : c'est souvent elle qui détermine la faisabilité d'un projet exceptionnel.",
      },
    ],
  },
  diagrams: {
    title: 'Schéma de principe — Ingrédients d’un grand projet réussi',
    diagram_description: [
      'Identification des phénomènes dominants (vent, géologie, chaleur)',
      'Conception intégrant les méthodes de construction',
      'Essais : soufflerie, prototypes, reconnaissances',
      'Planification et gestion des risques',
      'Exécution avec auscultation et méthode observationnelle',
      'Retour d’expérience publié et partagé',
    ],
  },
  mistakes: {
    items: [
      ['Ne retenir que les records', 'Leçons manquées', 'Étudier les méthodes, essais et organisation.'],
      ['Ignorer les difficultés rencontrées', 'Vision idéalisée', 'Lire les retours d’expérience complets.'],
      ['Copier une solution sans contexte', 'Solution inadaptée', 'Analyser les contraintes propres au projet.'],
    ],
  },
  tips: {
    tips: [
      'Constituez une fiche par grand ouvrage : contexte, défis, solutions, chiffres clés.',
      'Visitez des chantiers et ouvrages : rien ne remplace l’observation.',
      'Suivez les conférences d’associations (AFGC, IABSE, AFTES).',
      'Reliez chaque innovation à un calcul simple pour en comprendre l’enjeu.',
    ],
  },
  norms: {
    norms: [
      ['NF EN 1991-1-4', 'Actions du vent (et essais en soufflerie pour les ouvrages exceptionnels).'],
      ['NF EN 1991-1-5', 'Actions thermiques.'],
      ['Recommandations AFTES', 'Conception et construction des tunnels.'],
      ['Publications IABSE / AFGC', 'Retours d’expérience des grands ouvrages.'],
    ],
  },
  exercises: {
    exercises: [
      {
        level: 1,
        text: 'Calculer la pression dynamique pour un vent de 30 m/s.',
        hint: 'q = ½ ρ v².',
        answer_latex: "q = 0{,}5 \\times 1{,}225 \\times 900 = 551\\ \\text{Pa}",
        answer_text: '551 Pa.',
      },
      {
        level: 2,
        text: 'Quelle pression hydrostatique faut-il pour pomper du béton à 400 m ?',
        hint: 'p = ρ g h.',
        answer_latex: "p = 2\\,400 \\times 9{,}81 \\times 400 = 9{,}42\\ \\text{MPa}",
        answer_text: '9,4 MPa, hors pertes de charge.',
      },
      {
        level: 3,
        text: 'Une roche a une résistance en compression simple de 80 MPa. À partir de quelle couverture σ_v dépasse-t-elle la moitié de cette résistance (γ = 27 kN/m³) ?',
        hint: 'σ_v = 40 MPa.',
        answer_latex: "h = \\frac{40\\,000}{27} = 1\\,481\\ \\text{m}",
        answer_text: 'Environ 1 480 m : au-delà, des phénomènes de décompression ou d’écaillage deviennent probables.',
      },
    ],
  },
  quiz: {
    title: 'Quiz — Grandes réussites',
    questions: [
      { q: 'Quelle méthode a permis de mettre en place le tablier de Millau ?', options: ['Levage par grue', 'Lançage', 'Coulage sur cintre'], correct: 1, explain: 'Le tablier a été poussé depuis les deux rives.' },
      { q: 'Pourquoi le Burj Khalifa a-t-il un plan en Y avec des retraits ?', options: ['Pour l’esthétique uniquement', 'Pour perturber les tourbillons de vent', 'Pour réduire le béton'], correct: 1, explain: 'La forme limite les effets du détachement tourbillonnaire.' },
      { q: 'Quelle est la longueur du tunnel de base du Saint-Gothard ?', options: ['15 km', '57 km', '120 km'], correct: 1, explain: 'Environ 57 km.' },
    ],
  },
  exam_questions: {
    questions: [
      'Présentez les défis techniques du viaduc de Millau et les solutions retenues.',
      'Expliquez pourquoi le vent est l’action dimensionnante des tours très hautes.',
      'Quelles difficultés pose un tunnel sous très forte couverture ?',
    ],
  },
  interview_questions: {
    questions: [
      ['Quel ouvrage vous inspire et pourquoi ?', 'Je choisis un ouvrage que je connais bien et j’explique un défi technique précis, la solution, et ce que j’en retiens pour mon travail.'],
      ['Qu’est-ce qui fait réussir un grand projet ?', 'Une conception intégrant les méthodes, des essais pour réduire les incertitudes, une gestion des risques active et une organisation claire entre les acteurs.'],
    ],
  },
  practical_case: {
    title: 'Cas pratique — Présenter un grand ouvrage en 5 minutes',
    scenario: 'Vous devez présenter le viaduc de Millau à un jury technique.',
    description: 'Structurer une présentation chiffrée.',
    resolutions: [
      "\\text{Contexte} : 2\\,460\\ \\text{m}, \\ 7 \\text{ piles}, \\ 8 \\text{ travées}, \\ 342\\ \\text{m de portée courante}",
      "\\text{Défis} : \\text{vent} (q \\approx 1\\ \\text{kPa à 150 km/h}), \\ \\text{dilatation} (\\pm 0{,}6\\ \\text{m par culée}), \\ \\text{hauteur des piles}",
      "\\text{Solutions} : \\text{tablier profilé testé en soufflerie, lançage, palées provisoires, coffrages auto-grimpants}",
    ],
    conclusion: 'Une présentation réussie relie chaque solution à un phénomène chiffré : le jury voit que vous comprenez les choix d’ingénierie.',
  },
  summary: {
    content: `### Les grandes réussites en 5 points
1. Millau : vent, dilatation, lançage.
2. Burj Khalifa : forme contre le vent, pompage à très grande hauteur.
3. Gothard : forte couverture, chaleur, géologie variable.
4. Méthodes conçues avec l'ouvrage.
5. Essais, risques et organisation : les clés communes.`,
  },
  key_points: {
    points: [
      'ΔL = α ΔT L',
      'q = ½ ρ v²',
      'p = ρ g h',
      'σ_v = γ h',
      'Méthode de construction = partie de la conception',
    ],
  },
  self_assessment: {
    objectives: [
      'Je connais les chiffres clés de trois grands ouvrages',
      'Je sais calculer les ordres de grandeur associés',
      'Je comprends le rôle des méthodes de construction',
      'Je sais présenter un ouvrage de façon structurée',
      "J'ai réussi le quiz avec au moins 2 bonnes réponses sur 3",
    ],
  },
});
