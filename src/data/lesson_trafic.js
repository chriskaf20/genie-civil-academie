// ── Lesson: Théorie du trafic — Module 46 ───────────────────────────────────
import { buildLesson } from './build_lesson.js';

export const lesson_trafic = buildLesson({
  moduleId: 46,
  slug: 'trafic',
  lessonIndex: 1,
  title: "Théorie du Trafic : Débit, Densité, Vitesse & Capacité des Routes",
  subtitle: 'Module 46 — Ingénierie du trafic & planification des transports',
  level: 'Avancé',
  duration: '9h',
  diagramType: 'road_profile',
  tags: ['Trafic', 'Greenshields', 'Capacité', 'TMJA', 'UVP', 'Heure de pointe', 'Niveau de service'],
}, {
  definition: {
    title: "Définition — Le trafic comme un fluide",
    fr: 'Ingénierie du trafic (écoulement des véhicules sur un réseau)',
    en: 'Traffic flow engineering',
    metier: "Utilisée par les ingénieurs routiers, les gestionnaires de réseaux, les bureaux d'études mobilité et les collectivités.",
    content: `L'**ingénierie du trafic** décrit l'écoulement des véhicules avec trois grandeurs liées, comme pour un fluide :
- le **débit** $q$ : nombre de véhicules passant en un point par heure (véh/h) ;
- la **densité** (ou concentration) $k$ : nombre de véhicules par kilomètre de voie (véh/km) ;
- la **vitesse moyenne d'espace** $v$ (km/h).

Elles sont liées par la **relation fondamentale** $q = k \\cdot v$.

### L'observation clé
Quand la densité augmente, la vitesse diminue. Le débit commence par augmenter, atteint un maximum (la **capacité**), puis s'effondre : c'est la **congestion**. Au-delà de la capacité, ajouter des véhicules réduit le nombre de véhicules qui passent.

> 💡 La capacité d'une voie d'autoroute est de l'ordre de 1 800 à 2 000 véhicules par heure.`,
  },
  importance: {
    content: `- **Dimensionnement** : le nombre de voies d'une route découle du trafic de l'heure de pointe à l'horizon du projet.
- **Économie** : la congestion coûte du temps, du carburant et augmente les émissions.
- **Sécurité** : les variations brusques de vitesse en limite de capacité multiplient les collisions.
- **Exploitation** : régulation des vitesses, accès par feux (ramp metering), information des usagers.

> ⚠️ **À retenir** : on dimensionne sur un débit horaire de pointe, pas sur le trafic journalier moyen.`,
  },
  applications: {
    examples: [
      ['Élargissement d’autoroute', 'Prévision du trafic à 20 ans et choix entre 2 × 2 et 2 × 3 voies.'],
      ['Étude d’impact d’un centre commercial', 'Trafic généré à l’heure de pointe du samedi et capacité des carrefours d’accès.'],
      ['Régulation dynamique', 'Abaissement des vitesses autorisées en approche de saturation pour homogénéiser le flux.'],
      ['Comptages', 'Boucles électromagnétiques et caméras pour mesurer débits, vitesses et taux d’occupation.'],
      ['Transport en commun', 'Voies réservées aux bus sur les axes saturés.'],
    ],
  },
  theory: {
    title: "Théorie — Le diagramme fondamental",
    content: `### 1. Relation fondamentale
$$q = k \\cdot v$$

### 2. Modèle de Greenshields
La vitesse décroît linéairement avec la densité :
$$v = v_f \\left(1 - \\frac{k}{k_j}\\right)$$
$v_f$ est la vitesse libre (route vide) et $k_j$ la densité de bouchon (véhicules à l'arrêt, environ 120 à 150 véh/km/voie). On en déduit :
$$q = v_f \\left(k - \\frac{k^2}{k_j}\\right) \\qquad q_{max} = \\frac{v_f \\cdot k_j}{4} \\ \\text{pour} \\ k = \\frac{k_j}{2}$$

### 3. Temps et espacements
Le temps moyen entre deux véhicules (créneau) vaut $h = 3\\,600 / q$ secondes et l'espacement moyen $s = 1\\,000 / k$ mètres.

### 4. Du trafic journalier à l'heure de pointe
- **TMJA** : trafic moyen journalier annuel (véh/j, deux sens).
- Débit de l'heure de pointe ≈ 8 à 12 % du TMJA ; répartition par sens souvent 55/45 à 65/35.
- Conversion en **UVP** (unités de véhicule particulier) : un poids lourd compte pour environ 2 UVP en rase campagne.

### 5. Niveau de service
On compare la demande à la capacité : $q/C$ inférieur à 0,5 donne un écoulement libre ; au-delà de 0,85 à 0,9, l'écoulement devient instable.`,
  },
  formulas: {
    title: 'Formules essentielles — Écoulement du trafic',
    formulas: [
      {
        name: 'Relation fondamentale du trafic',
        latex: "q = k \\cdot v",
        description: 'Valable pour un flux homogène, avec la vitesse moyenne d’espace.',
        vars: [
          ['q', 'Débit', 'véh/h', 'Par voie ou pour l’ensemble de la chaussée.'],
          ['k', 'Densité', 'véh/km', 'Nombre de véhicules sur un kilomètre de voie.'],
          ['v', "Vitesse moyenne d'espace", 'km/h', 'Moyenne des vitesses des véhicules présents sur la section.'],
        ],
      },
      {
        name: 'Modèle de Greenshields',
        latex: "v = v_f \\left(1 - \\frac{k}{k_j}\\right) \\qquad q_{max} = \\frac{v_f \\, k_j}{4}",
        description: 'La capacité est atteinte pour la moitié de la densité de bouchon et la moitié de la vitesse libre.',
        vars: [
          ['v_f', 'Vitesse libre', 'km/h', 'Vitesse en circulation fluide.'],
          ['k_j', 'Densité de bouchon', 'véh/km', '≈ 120 à 150 véh/km par voie.'],
          ['q_{max}', 'Capacité', 'véh/h', 'Débit maximal écoulable.'],
        ],
        rule: "Le modèle linéaire est simple mais surestime souvent la capacité ; il sert à comprendre les ordres de grandeur.",
      },
      {
        name: 'Créneau et espacement',
        latex: "h = \\frac{3\\,600}{q} \\qquad s = \\frac{1\\,000}{k}",
        description: 'Temps et distance moyens entre deux véhicules successifs.',
        vars: [
          ['h', 'Créneau moyen', 's', '2 s à 1 800 véh/h.'],
          ['s', 'Espacement moyen', 'm', 'De l’avant d’un véhicule à l’avant du suivant.'],
        ],
      },
      {
        name: "Débit de l'heure de pointe en UVP",
        latex: "Q_{UVP} = TMJA \\cdot \\kappa \\cdot r \\cdot \\left[(1 - p) + p \\cdot e_{PL}\\right]",
        description: 'Débit horaire de dimensionnement dans le sens le plus chargé.',
        vars: [
          ['Q_{UVP}', 'Débit horaire de pointe', 'uvp/h', 'À comparer à la capacité.'],
          ['TMJA', 'Trafic moyen journalier annuel', 'véh/j', 'Deux sens confondus.'],
          ['\\kappa', "Part de l'heure de pointe", '-', '0,08 à 0,12.'],
          ['r', 'Part du sens dominant', '-', '0,55 à 0,65.'],
          ['p', 'Proportion de poids lourds', '-', 'Par exemple 0,12.'],
          ['e_{PL}', 'Équivalence d’un poids lourd', 'uvp', '≈ 2 en rase campagne.'],
        ],
      },
      {
        name: 'Taux de saturation',
        latex: "x = \\frac{q}{C}",
        description: 'Indicateur du niveau de service.',
        vars: [
          ['x', 'Taux de saturation', '-', '< 0,5 fluide ; > 0,85 instable ; ≥ 1 saturé.'],
          ['C', 'Capacité', 'uvp/h', '≈ 1 800 à 2 000 uvp/h par voie d’autoroute.'],
        ],
      },
    ],
  },
  stepbystep: {
    title: 'Calcul complet — Faut-il élargir une route ?',
    problem: "Une route nationale à 2 × 1 voie est empruntée par un TMJA de 25 000 véh/j, avec 12 % de poids lourds. On retient 10 % du TMJA à l'heure de pointe et 60 % dans le sens dominant. Capacité d'une voie : 1 800 uvp/h. Évaluer la saturation et le besoin de voies.",
    steps_demo: [
      { n: 1, text: "Débit de pointe deux sens : 25 000 × 0,10 = 2 500 véh/h." },
      { n: 2, text: "Sens dominant : 2 500 × 0,60 = 1 500 véh/h." },
      { n: 3, text: "Conversion en UVP : 1 500 × (0,88 + 0,12 × 2) = 1 500 × 1,12 = 1 680 uvp/h." },
      { n: 4, text: "Saturation avec une voie par sens : x = 1 680 / 1 800 = 0,93 : écoulement instable." },
      { n: 5, text: "Avec deux voies par sens : x = 1 680 / 3 600 = 0,47 : écoulement fluide." },
      { n: 6, text: "Conclusion : un passage à 2 × 2 voies est justifié, d'autant plus avec la croissance du trafic." },
    ],
    result_latex: "Q = 25\\,000 \\times 0{,}10 \\times 0{,}60 \\times 1{,}12 = 1\\,680\\ \\text{uvp/h} \\qquad x_{1\\ voie} = 0{,}93 \\quad x_{2\\ voies} = 0{,}47",
  },
  units: {
    table: [
      ['Débit', 'véh/h', 'vph', 'Par voie ou par sens'],
      ['Densité', 'véh/km', 'veh/mi', '1 véh/km = 1,609 veh/mi'],
      ['Vitesse', 'km/h', 'mph', '1 mph = 1,609 km/h'],
      ['TMJA', 'véh/j', 'AADT (veh/day)', 'Deux sens confondus'],
      ['Équivalence', 'uvp', 'pcu', '1 PL ≈ 2 uvp en rase campagne'],
    ],
    note: "Le débit se mesure en un point, la densité sur une longueur : les capteurs (boucles) mesurent en fait un taux d'occupation, converti en densité.",
  },
  hypotheses: {
    items: [
      ['info', 'Le modèle de Greenshields suppose une relation linéaire vitesse-densité et un flux homogène.'],
      ['info', 'Les coefficients d’heure de pointe et de répartition par sens doivent venir de comptages locaux quand ils existent.'],
      ['warning', 'Les capacités de section courante ne valent pas pour les carrefours : ce sont souvent eux qui limitent le débit en milieu urbain.'],
      ['warning', 'Augmenter la capacité attire du trafic supplémentaire (trafic induit) : une prévision doit en tenir compte.'],
      ['tip', 'Tracer le nuage débit-vitesse issu des comptages permet de repérer la capacité réelle d’une section.'],
    ],
  },
  simple_examples: {
    examples: [
      {
        title: 'Exemple 1 : capacité selon Greenshields',
        given: 'v_f = 80 km/h, k_j = 100 véh/km',
        find: 'q_max, densité et vitesse critiques',
        solution_latex: "q_{max} = \\frac{80 \\times 100}{4} = 2\\,000\\ \\text{véh/h} \\quad k_c = 50\\ \\text{véh/km} \\quad v_c = 40\\ \\text{km/h}",
        result: 'Capacité de 2 000 véh/h, atteinte à 40 km/h.',
      },
      {
        title: 'Exemple 2 : créneau',
        given: 'q = 1 800 véh/h',
        find: 'Le temps moyen entre véhicules',
        solution_latex: "h = \\frac{3\\,600}{1\\,800} = 2\\ \\text{s}",
        result: '2 secondes en moyenne entre deux véhicules.',
      },
      {
        title: 'Exemple 3 : densité et vitesse',
        given: 'q = 1 500 véh/h, v = 75 km/h',
        find: 'La densité et l’espacement',
        solution_latex: "k = \\frac{1\\,500}{75} = 20\\ \\text{véh/km} \\qquad s = \\frac{1\\,000}{20} = 50\\ \\text{m}",
        result: '20 véh/km, soit un véhicule tous les 50 m.',
      },
    ],
  },
  real_examples: {
    title: 'Exemple réel — Régulation des vitesses sur une autoroute urbaine',
    examples: [
      {
        context: 'Autoroute périurbaine à 2 × 3 voies saturée aux heures de pointe',
        scenario: "En abaissant la vitesse autorisée de 110 à 90 puis 70 km/h à l'approche de la saturation, le gestionnaire homogénéise les vitesses et retarde l'apparition des bouchons en accordéon.",
        decomposition_latex: "\\text{vitesses homogènes} \\Rightarrow \\text{moins de freinages} \\Rightarrow \\text{capacité maintenue plus longtemps}",
        lesson: "La capacité n'est pas qu'une affaire d'infrastructure : l'exploitation dynamique (vitesse, accès, information) en récupère une partie.",
      },
    ],
  },
  diagrams: {
    title: 'Schéma de principe — Diagramme fondamental du trafic',
    diagram_description: [
      'Densité faible : vitesse proche de la vitesse libre, débit faible',
      'Densité croissante : la vitesse baisse, le débit augmente',
      'Densité critique k_j/2 : débit maximal = capacité',
      'Au-delà : congestion, débit et vitesse chutent ensemble',
      'Densité de bouchon k_j : véhicules à l’arrêt, débit nul',
      'Dimensionnement : maintenir la demande de pointe sous la capacité',
    ],
  },
  mistakes: {
    items: [
      ['Dimensionner avec le TMJA divisé par 24', 'Sous-estimation de la pointe d’un facteur 2 à 3', 'Utiliser le débit horaire de pointe (8 à 12 % du TMJA).'],
      ['Oublier les poids lourds', 'Saturation sous-estimée', 'Convertir en UVP avec un coefficient d’équivalence.'],
      ['Raisonner sur deux sens confondus', 'Le sens le plus chargé sature en premier', 'Appliquer la répartition directionnelle.'],
    ],
  },
  tips: {
    tips: [
      'Utilisez les comptages permanents des gestionnaires (données ouvertes) pour caler vos hypothèses.',
      'Les 30ᵉ ou 50ᵉ heures les plus chargées de l’année sont des références classiques de dimensionnement.',
      'En milieu urbain, analysez d’abord les carrefours : ce sont eux qui fixent la capacité d’un axe.',
      'Une prévision de trafic s’accompagne toujours de scénarios (bas, central, haut).',
    ],
  },
  norms: {
    norms: [
      ['ICTAAL (Cerema)', 'Instruction sur les conditions techniques d’aménagement des autoroutes de liaison.'],
      ['ARP (Cerema)', 'Aménagement des routes principales.'],
      ['Highway Capacity Manual (TRB)', 'Référence internationale pour la capacité et les niveaux de service.'],
      ['Guides Cerema sur les comptages', 'Méthodes de recueil et d’exploitation des données de trafic.'],
    ],
  },
  exercises: {
    exercises: [
      {
        level: 1,
        text: 'Sur une voie, on mesure k = 30 véh/km et v = 90 km/h. Calculer le débit.',
        hint: 'q = k·v.',
        answer_latex: "q = 30 \\times 90 = 2\\,700\\ \\text{véh/h}",
        answer_text: '2 700 véh/h (valeur élevée, proche de la capacité maximale observée).',
      },
      {
        level: 2,
        text: 'Avec v_f = 100 km/h et k_j = 120 véh/km, calculer la capacité de Greenshields et la vitesse correspondante.',
        hint: 'q_max = v_f·k_j / 4, à v = v_f / 2.',
        answer_latex: "q_{max} = \\frac{100 \\times 120}{4} = 3\\,000\\ \\text{véh/h} \\qquad v_c = 50\\ \\text{km/h}",
        answer_text: '3 000 véh/h à 50 km/h (modèle théorique).',
      },
      {
        level: 3,
        text: 'TMJA 40 000 véh/j, 15 % de PL (2 uvp), pointe 9 %, sens dominant 55 %. Combien de voies par sens faut-il pour x ≤ 0,8 avec C = 1 900 uvp/h/voie ?',
        hint: 'Calculer Q en uvp/h puis n = Q / (0,8 × 1 900).',
        answer_latex: "Q = 40\\,000 \\times 0{,}09 \\times 0{,}55 \\times 1{,}15 = 2\\,277\\ \\text{uvp/h} \\qquad n = \\frac{2\\,277}{0{,}8 \\times 1\\,900} = 1{,}5 \\Rightarrow 2",
        answer_text: '2 voies par sens.',
      },
    ],
  },
  quiz: {
    title: 'Quiz — Théorie du trafic',
    questions: [
      { q: 'Quelle est la relation fondamentale du trafic ?', options: ['q = k / v', 'q = k · v', 'q = v / k'], correct: 1, explain: 'Débit = densité × vitesse.' },
      { q: 'Dans le modèle de Greenshields, la capacité est atteinte…', options: ['À la vitesse libre', 'À la moitié de la densité de bouchon', 'À la densité de bouchon'], correct: 1, explain: 'q_max pour k = k_j/2 et v = v_f/2.' },
      { q: 'Quel est le créneau moyen à 1 200 véh/h ?', options: ['1 s', '3 s', '12 s'], correct: 1, explain: 'h = 3 600 / 1 200 = 3 s.' },
    ],
  },
  exam_questions: {
    questions: [
      'Présentez les grandeurs du trafic et la relation fondamentale ; tracez le diagramme fondamental.',
      'Établissez la capacité dans le modèle de Greenshields.',
      'À partir d’un TMJA, déterminez le nombre de voies nécessaires sur une section de route.',
      'Expliquez la notion de trafic induit et ses conséquences sur la planification.',
    ],
  },
  interview_questions: {
    questions: [
      ['Pourquoi les bouchons apparaissent-ils parfois sans accident ni travaux ?', "Parce qu'en approche de la capacité, le flux devient instable : un freinage se propage vers l'arrière en s'amplifiant (onde de choc) et le débit chute ; c'est l'effet accordéon."],
      ['Comment augmenter la capacité sans élargir la route ?', 'Régulation des vitesses, régulation d’accès par feux, voies dynamiques (bande d’arrêt d’urgence ouverte), covoiturage et transports en commun, gestion des incidents plus rapide.'],
    ],
  },
  practical_case: {
    title: 'Cas pratique — Étude d’un contournement',
    scenario: "Une traversée d'agglomération supporte 18 000 véh/j, dont 20 % de transit et 10 % de poids lourds. La pointe représente 10 % du TMJA, 60 % dans le sens dominant ; capacité de la traversée : 1 200 uvp/h par sens (carrefours à feux).",
    description: 'Évaluer la saturation actuelle et l’effet d’un contournement qui capterait tout le trafic de transit.',
    resolutions: [
      "Q_{actuel} = 18\\,000 \\times 0{,}10 \\times 0{,}60 \\times 1{,}10 = 1\\,188\\ \\text{uvp/h} \\Rightarrow x = 0{,}99",
      "Q_{après} = 0{,}80 \\times 1\\,188 = 950\\ \\text{uvp/h} \\Rightarrow x = 0{,}79",
      "\\text{Gain : saturation de 0,99 à 0,79, retour à un écoulement stable}",
    ],
    conclusion: 'Le contournement soulage nettement la traversée ; il faut toutefois vérifier le trafic induit et les reports sur les carrefours d’extrémité du contournement.',
  },
  summary: {
    content: `### Le trafic en 5 points
1. $q = k \\cdot v$.
2. Greenshields : $v = v_f (1 - k/k_j)$, capacité $q_{max} = v_f k_j / 4$.
3. Créneau $h = 3\\,600/q$ ; espacement $s = 1\\,000/k$.
4. Dimensionner sur l'**heure de pointe**, le sens dominant et en **UVP**.
5. Niveau de service par le taux de saturation $x = q/C$.`,
  },
  key_points: {
    points: [
      'q = k·v',
      'q_max = v_f·k_j / 4',
      'Capacité d’une voie d’autoroute ≈ 1 800 à 2 000 uvp/h',
      'Pointe horaire ≈ 8 à 12 % du TMJA',
      '1 PL ≈ 2 uvp en rase campagne',
    ],
  },
  self_assessment: {
    objectives: [
      'Je connais les grandeurs débit, densité et vitesse',
      'Je sais utiliser le modèle de Greenshields',
      'Je sais passer d’un TMJA à un débit de pointe en UVP',
      'Je sais évaluer le besoin de voies d’une route',
      "J'ai réussi le quiz avec au moins 2 bonnes réponses sur 3",
    ],
  },
});
