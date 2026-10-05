// ── Lesson: Signalisation ferroviaire et capacité — Module 21 ────────────────
import { buildLesson } from './build_lesson.js';

export const lesson_ferroviaire_signalisation = buildLesson({
  moduleId: 21,
  slug: 'ferroviaire_signalisation',
  lessonIndex: 2,
  title: "Signalisation Ferroviaire & Capacité des Lignes : Cantonnement, Distances de Freinage et ERTMS",
  subtitle: 'Module 21 — Infrastructures Ferroviaires',
  level: 'Avancé',
  duration: '9h',
  tags: ['Ferroviaire', 'Signalisation', 'Cantonnement', 'Freinage', 'Capacité', 'ERTMS', 'Intervalle'],
}, {
  definition: {
    title: 'Définition — Espacer les trains en sécurité',
    fr: 'Signalisation ferroviaire et cantonnement',
    en: 'Railway signalling and block system',
    metier: "Utilisée par les ingénieurs signalisation et systèmes ferroviaires, les gestionnaires d'infrastructure, les exploitants et les bureaux d'études de capacité.",
    content: `Un train ne peut pas s'arrêter « à vue » : à 300 km/h, il lui faut plusieurs kilomètres. La **signalisation** garantit qu'un train dispose toujours d'une distance libre suffisante pour s'arrêter.

### Le cantonnement
La ligne est découpée en **cantons** (sections de quelques centaines de mètres à quelques kilomètres). Un seul train à la fois peut occuper un canton ; l'occupation est détectée par des circuits de voie ou des compteurs d'essieux. Les signaux à l'entrée de chaque canton (vert, jaune, rouge) indiquent au conducteur s'il peut avancer.

### Les systèmes modernes
- **Signalisation de cabine** (TVM sur les LGV françaises) : les indications sont transmises en cabine, car à grande vitesse les signaux latéraux ne sont plus lisibles.
- **ERTMS/ETCS** : système européen interopérable ; au niveau 2, les autorisations de mouvement sont transmises par radio et le train est contrôlé en permanence.
- **Enclenchements** : ils empêchent de commander des itinéraires incompatibles (aiguilles, signaux).

> 💡 La capacité d'une ligne (trains par heure) dépend directement de la longueur des cantons et des performances de freinage.`,
  },
  importance: {
    content: `- **Sécurité** : la signalisation évite les collisions et les prises en écharpe aux aiguilles.
- **Capacité** : sur les axes saturés, réduire l'intervalle entre trains évite de construire de nouvelles voies.
- **Interopérabilité** : l'ERTMS permet aux trains de circuler d'un pays à l'autre sans changer d'équipement.
- **Coût** : la signalisation représente une part importante des investissements de modernisation.

> ⚠️ **À retenir** : le canton doit toujours être au moins aussi long que la distance de freinage du train le plus défavorable, marge comprise.`,
  },
  applications: {
    examples: [
      ['Ligne classique', 'Block automatique lumineux (BAL) avec cantons d’environ 1,5 à 3 km.'],
      ['Ligne à grande vitesse', 'Signalisation de cabine et cantons d’environ 1,5 à 2 km.'],
      ['RER / métro', 'Systèmes de type CBTC pour des intervalles de 2 minutes ou moins.'],
      ['Corridor européen', 'Déploiement de l’ERTMS niveau 2.'],
      ['Gare', 'Postes d’aiguillage informatisés et enclenchements.'],
    ],
  },
  theory: {
    title: 'Théorie — Freinage, canton et intervalle',
    content: `### 1. Distance de freinage
Pour une décélération moyenne $a$ :
$$d_f = \\frac{v^2}{2a}$$
Décélérations usuelles en service : 0,5 à 1 m/s² (bien moins qu'une voiture, à cause de l'adhérence acier sur acier).

### 2. Distance de sécurité
On ajoute à $d_f$ la distance parcourue pendant le temps de réaction (conducteur et système) et une **marge de dépassement** (overlap) au-delà du signal d'arrêt.

### 3. Intervalle minimal entre trains
Avec une signalisation à trois indications, un train doit trouver devant lui deux cantons libres (celui du signal d'avertissement et celui du signal d'arrêt). La distance minimale entre deux trains vaut environ :
$$D = n \\cdot L_c + L_t + L_m$$
($n$ cantons, $L_c$ longueur de canton, $L_t$ longueur du train, $L_m$ marge) et l'intervalle :
$$h = \\frac{D}{v} \\qquad C = \\frac{3\\,600}{h}$$

### 4. Canton mobile
Avec l'ERTMS niveau 3 ou le CBTC, la distance de séparation suit la position réelle du train précédent (canton mobile) au lieu de cantons fixes : la capacité augmente.`,
  },
  formulas: {
    title: 'Formules essentielles — Signalisation et capacité',
    formulas: [
      {
        name: 'Distance de freinage',
        latex: "d_f = \\frac{v^2}{2 a}",
        description: 'Décélération moyenne constante.',
        vars: [
          ['d_f', 'Distance de freinage', 'm', 'Depuis le début du freinage effectif.'],
          ['v', 'Vitesse', 'm/s', 'km/h ÷ 3,6.'],
          ['a', 'Décélération', 'm/s²', '0,5 à 1 m/s² en service.'],
        ],
        rule: "À 300 km/h et 0,5 m/s², il faut près de 7 km pour s'arrêter.",
      },
      {
        name: 'Distance minimale entre deux trains',
        latex: "D = n \\cdot L_c + L_t + L_m",
        description: 'Cantonnement fixe à n cantons libres.',
        vars: [
          ['D', 'Distance de séparation', 'm', 'Entre les têtes de deux trains successifs.'],
          ['n', 'Nombre de cantons libres exigés', '-', '2 pour une signalisation à trois indications.'],
          ['L_c', 'Longueur de canton', 'm', '≥ distance de freinage.'],
          ['L_t', 'Longueur du train', 'm', '200 à 400 m.'],
          ['L_m', 'Marge (overlap)', 'm', 'Quelques dizaines à quelques centaines de m.'],
        ],
      },
      {
        name: 'Intervalle et capacité',
        latex: "h = \\frac{D}{v} \\qquad C = \\frac{3\\,600}{h}",
        description: 'Capacité théorique en trains par heure (sans marges d’exploitation).',
        vars: [
          ['h', 'Intervalle', 's', 'Temps entre deux trains.'],
          ['C', 'Capacité', 'trains/h', 'À réduire pour la régularité (≈ 75 % utilisable).'],
        ],
      },
      {
        name: 'Distance parcourue pendant la réaction',
        latex: "d_r = v \\cdot t_r",
        description: 'Avant le début effectif du freinage.',
        vars: [
          ['t_r', 'Temps de réaction', 's', 'Conducteur + chaîne de freinage : quelques secondes.'],
        ],
      },
    ],
  },
  stepbystep: {
    title: 'Calcul complet — Capacité d’une ligne classique à 160 km/h',
    problem: "Ligne à 160 km/h, décélération 0,7 m/s², temps de réaction 4 s. Cantons de 1 500 m, signalisation à trois indications (2 cantons libres), trains de 400 m, marge 200 m.",
    steps_demo: [
      { n: 1, text: "Vitesse : 160 / 3,6 = 44,4 m/s." },
      { n: 2, text: "Freinage : d_f = 44,4² / (2 × 0,7) = 1 410 m ; réaction : 44,4 × 4 = 178 m ; total 1 588 m." },
      { n: 3, text: "Contrôle : 2 cantons de 1 500 m (3 000 m) couvrent largement la distance d'arrêt de 1 588 m." },
      { n: 4, text: "Distance de séparation : D = 2 × 1 500 + 400 + 200 = 3 600 m → h = 3 600 / 44,4 = 81 s." },
      { n: 5, text: "Capacité théorique : 3 600 / 81 = 44 trains/h ; en pratique, les gares, la mixité des vitesses et les marges de régularité la réduisent à 10 à 15 trains/h." },
    ],
    result_latex: "d_f = \\frac{44{,}4^2}{2 \\times 0{,}7} = 1\\,410\\ \\text{m} \\qquad h = \\frac{3\\,600}{44{,}4} = 81\\ \\text{s} \\qquad C_{théorique} = 44\\ \\text{trains/h}",
  },
  units: {
    table: [
      ['Vitesse', 'km/h', 'mph', '1 m/s = 3,6 km/h'],
      ['Décélération', 'm/s²', 'mph/s', '1 m/s² ≈ 2,24 mph/s'],
      ['Longueur de canton', 'm, km', 'mi', 'Lignes classiques 1,5 à 3 km'],
      ['Intervalle', 's, min', 'min', 'Métro : 90 à 120 s ; LGV : 3 à 4 min'],
      ['Capacité', 'trains/h', 'trains/h', 'Par sens de circulation'],
    ],
    note: 'Les décélérations ferroviaires sont faibles : environ 0,5 à 1 m/s², contre 5 à 8 m/s² pour une voiture.',
  },
  hypotheses: {
    items: [
      ['info', 'Décélération constante et voie horizontale ; les rampes et pentes modifient la distance de freinage.'],
      ['info', 'La capacité théorique ignore les arrêts en gare, les aiguillages et la mixité des trains rapides et lents.'],
      ['warning', 'L’adhérence diminue fortement avec les feuilles mortes ou l’humidité : marges de freinage nécessaires.'],
      ['warning', 'Mélanger des trains de vitesses très différentes réduit fortement la capacité réelle.'],
      ['tip', 'Les études de capacité utilisent des graphiques de circulation (espace-temps) et la simulation.'],
    ],
  },
  simple_examples: {
    examples: [
      {
        title: 'Exemple 1 : freinage d’un TGV',
        given: 'v = 300 km/h, a = 0,5 m/s²',
        find: 'd_f',
        solution_latex: "d_f = \\frac{83{,}3^2}{2 \\times 0{,}5} = 6\\,940\\ \\text{m}",
        result: 'Près de 7 km : d’où la signalisation de cabine.',
      },
      {
        title: 'Exemple 2 : capacité d’un métro',
        given: 'Intervalle 105 s',
        find: 'C',
        solution_latex: "C = \\frac{3\\,600}{105} = 34\\ \\text{trains/h}",
        result: '34 trains par heure et par sens.',
      },
      {
        title: 'Exemple 3 : distance de réaction',
        given: 'v = 200 km/h, t_r = 3 s',
        find: 'd_r',
        solution_latex: "d_r = 55{,}6 \\times 3 = 167\\ \\text{m}",
        result: '167 m parcourus avant le freinage effectif.',
      },
    ],
  },
  real_examples: {
    title: 'Exemple réel — Accident de Saint-Jacques-de-Compostelle (2013)',
    examples: [
      {
        context: 'Train à grande vitesse abordant une courbe limitée à 80 km/h, 80 morts',
        scenario: "Le train a abordé la courbe à environ 190 km/h. Sur cette section, le système de contrôle de vitesse continu n'était pas actif : la protection reposait sur l'attention du conducteur.",
        decomposition_latex: "v = 190\\ \\text{km/h} \\gg v_{lim} = 80\\ \\text{km/h} \\ \\text{sans contrôle automatique} \\Rightarrow \\text{déraillement}",
        lesson: "Les points singuliers (courbes serrées, transitions de système) doivent être couverts par un contrôle automatique de la vitesse ; c'est l'un des apports majeurs de l'ETCS.",
      },
    ],
  },
  diagrams: {
    title: 'Schéma de principe — Cantonnement à trois indications',
    diagram_description: [
      'Canton occupé par le train A : signal d’entrée au rouge',
      'Canton précédent libre : signal au jaune (avertissement, préparer l’arrêt)',
      'Canton encore avant : signal au vert (voie libre)',
      'Le train B ralentit au jaune et peut s’arrêter avant le rouge',
      'Libération du canton par le train A : les signaux s’ouvrent successivement',
      'Canton mobile (ERTMS 3, CBTC) : la séparation suit le train précédent',
    ],
  },
  mistakes: {
    items: [
      ['Raisonner en distances de freinage automobiles', 'Distances d’arrêt sous-estimées d’un facteur 5 à 10', 'Utiliser des décélérations ferroviaires (0,5 à 1 m/s²).'],
      ['Confondre capacité théorique et capacité pratique', 'Promesses de service irréalistes', 'Appliquer les marges d’exploitation et les contraintes des gares.'],
      ['Oublier l’effet des pentes', 'Distance de freinage insuffisante en descente', 'Corriger la décélération par la déclivité.'],
    ],
  },
  tips: {
    tips: [
      'Le graphique espace-temps est l’outil de base pour visualiser la capacité d’une ligne.',
      'Homogénéiser les vitesses des trains augmente la capacité plus sûrement que de raccourcir les cantons.',
      'Les points de croisement et les gares sont souvent les vrais goulots d’étranglement.',
      'La signalisation de cabine est indispensable au-delà d’environ 220 km/h.',
    ],
  },
  norms: {
    norms: [
      ['Spécifications ERTMS/ETCS (ERA)', 'Système européen de contrôle des trains.'],
      ['STI Contrôle-commande et signalisation (UE)', 'Spécifications techniques d’interopérabilité.'],
      ['NF EN 50126 / 50128 / 50129', 'Sûreté de fonctionnement des systèmes ferroviaires (RAMS, logiciels, sécurité).'],
      ['Référentiels du gestionnaire d’infrastructure (SNCF Réseau)', 'Règles de signalisation et de cantonnement.'],
    ],
  },
  exercises: {
    exercises: [
      {
        level: 1,
        text: 'Calculer la distance de freinage d’un train à 120 km/h avec a = 0,8 m/s².',
        hint: 'v = 33,3 m/s.',
        answer_latex: "d_f = \\frac{33{,}3^2}{1{,}6} = 694\\ \\text{m}",
        answer_text: '≈ 694 m.',
      },
      {
        level: 2,
        text: 'Cantons de 1 000 m, 2 cantons libres, trains de 300 m, marge 150 m, vitesse 120 km/h. Calculer l’intervalle et la capacité théorique.',
        hint: 'D = 2 × 1 000 + 300 + 150.',
        answer_latex: "D = 2\\,450\\ \\text{m} \\quad h = \\frac{2\\,450}{33{,}3} = 73{,}5\\ \\text{s} \\quad C = 49\\ \\text{trains/h}",
        answer_text: 'h ≈ 74 s ; C ≈ 49 trains/h (théorique).',
      },
      {
        level: 3,
        text: 'Si l’on réserve 25 % de marges de régularité, quelle capacité pratique reste-t-il pour l’exercice 2 ?',
        hint: '75 % de la capacité théorique.',
        answer_latex: "C_{pratique} = 0{,}75 \\times 49 = 37\\ \\text{trains/h}",
        answer_text: '≈ 37 trains/h (hors effets des gares).',
      },
    ],
  },
  quiz: {
    title: 'Quiz — Signalisation ferroviaire',
    questions: [
      { q: 'Quel est le principe du cantonnement ?', options: ['Un train à la fois par canton', 'Deux trains par canton', 'Les trains circulent à vue'], correct: 0, explain: 'Chaque canton ne peut être occupé que par un seul train.' },
      { q: 'Pourquoi les LGV utilisent-elles la signalisation de cabine ?', options: ['Pour économiser les signaux', 'Parce que les signaux latéraux ne sont plus lisibles à grande vitesse', 'Pour le confort'], correct: 1, explain: 'À 300 km/h, le conducteur ne peut lire et réagir à des signaux latéraux.' },
      { q: 'Quel est l’ordre de grandeur de la décélération ferroviaire en service ?', options: ['0,1 m/s²', '0,5 à 1 m/s²', '5 à 8 m/s²'], correct: 1, explain: 'L’adhérence roue-rail limite fortement le freinage.' },
    ],
  },
  exam_questions: {
    questions: [
      'Expliquez le cantonnement et la signalisation à trois indications.',
      'Calculez l’intervalle minimal et la capacité théorique d’une ligne.',
      'Présentez l’ERTMS/ETCS et ses apports en sécurité et en capacité.',
    ],
  },
  interview_questions: {
    questions: [
      ['Comment augmenter la capacité d’une ligne existante ?', 'Raccourcir les cantons, passer à la signalisation de cabine ou à l’ERTMS niveau 2/3, homogénéiser les vitesses, créer des voies d’évitement, optimiser les gares et les temps d’arrêt.'],
      ['Qu’est-ce qu’un enclenchement ?', 'Un dispositif (mécanique, électrique ou informatique) qui empêche de commander des itinéraires incompatibles et garantit que les aiguilles sont dans la bonne position avant d’ouvrir un signal.'],
    ],
  },
  practical_case: {
    title: 'Cas pratique — Augmenter la fréquence d’une ligne périurbaine',
    scenario: 'Ligne à 120 km/h, cantons de 2 000 m, trains de 220 m, marge 200 m, 2 cantons libres. L’autorité organisatrice veut 15 trains/h.',
    description: 'Évaluer si le recoupage des cantons à 1 000 m permet l’objectif.',
    resolutions: [
      "\\text{Actuel : } D = 4\\,420\\ \\text{m} \\Rightarrow h = 133\\ \\text{s} \\Rightarrow C = 27 \\Rightarrow C_{pratique} \\approx 20\\ \\text{trains/h}",
      "\\text{Freinage : } d_f = 694\\ \\text{m (a = 0,8)} + 133\\ \\text{m de réaction} = 827\\ \\text{m} < 1\\,000\\ \\text{m}",
      "\\text{Recoupé : } D = 2\\,420\\ \\text{m} \\Rightarrow h = 73\\ \\text{s} \\Rightarrow C_{pratique} \\approx 37\\ \\text{trains/h}",
    ],
    conclusion: 'En section courante, la capacité dépasse déjà l’objectif : le recoupage seul ne suffira pas si les terminus et les gares limitent la fréquence ; l’étude doit porter d’abord sur ces points singuliers.',
  },
  summary: {
    content: `### La signalisation ferroviaire en 5 points
1. Cantonnement : un train par canton.
2. Freinage : $d_f = v^2/(2a)$ avec $a$ ≈ 0,5 à 1 m/s².
3. Séparation : $D = n L_c + L_t + L_m$.
4. Intervalle $h = D/v$ ; capacité $C = 3\\,600/h$ (avant marges).
5. Signalisation de cabine, ERTMS, canton mobile pour plus de sécurité et de capacité.`,
  },
  key_points: {
    points: [
      'd_f = v² / 2a',
      'Canton ≥ distance de freinage + marge',
      'C = 3 600 / h',
      'Signalisation de cabine au-delà de ≈ 220 km/h',
      'ERTMS : interopérabilité et contrôle continu',
    ],
  },
  self_assessment: {
    objectives: [
      'Je comprends le principe du cantonnement',
      'Je sais calculer une distance de freinage ferroviaire',
      'Je sais estimer l’intervalle et la capacité d’une ligne',
      'Je connais les apports de l’ERTMS',
      "J'ai réussi le quiz avec au moins 2 bonnes réponses sur 3",
    ],
  },
});
