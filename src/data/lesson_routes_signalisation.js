// ── Lesson: Signalisation et sécurité routière — Module 15 ───────────────────
import { buildLesson } from './build_lesson.js';

export const lesson_routes_signalisation = buildLesson({
  moduleId: 15,
  slug: 'routes_signalisation',
  lessonIndex: 2,
  title: "Signalisation, Équipements & Sécurité Routière : Visibilité, Marquages et Analyse des Accidents",
  subtitle: 'Module 15 — Ingénierie Routière & Infrastructures',
  level: 'Intermédiaire',
  duration: '9h',
  diagramType: 'road_profile',
  tags: ['Signalisation', 'Marquage', 'Sécurité routière', 'Visibilité', 'Taux d’accidents', 'Dispositifs de retenue', 'Éclairage'],
}, {
  definition: {
    title: 'Définition — Guider et protéger l’usager',
    fr: 'Signalisation et équipements de sécurité routière',
    en: 'Road signage and safety equipment',
    metier: "Utilisée par les gestionnaires de voirie, les bureaux d'études routières, les services de sécurité routière et les entreprises de signalisation.",
    content: `La **signalisation** informe l'usager de ce qu'il doit faire (prescription), de ce qui l'attend (danger) et de sa route (direction). Les **équipements de sécurité** limitent la gravité des accidents.

### Les composantes
- **Signalisation verticale** : panneaux de danger (triangulaires), de prescription (ronds), d'indication et de direction.
- **Signalisation horizontale** : marquages au sol (lignes continues et discontinues, flèches, passages piétons).
- **Signalisation lumineuse** : feux tricolores, signaux d'affectation de voie.
- **Équipements** : glissières et barrières (dispositifs de retenue), atténuateurs de choc, éclairage, balisage.

### La logique de la route qui pardonne
On cherche à éviter l'accident (visibilité, lisibilité, cohérence) et, s'il survient, à en réduire la gravité (zone de sécurité dégagée en accotement, obstacles protégés ou fragilisés).

> 💡 Une bonne signalisation est **homogène**, **lisible** et **crédible** : trop de panneaux tue l'information.`,
  },
  importance: {
    content: `- **Vies humaines** : l'infrastructure intervient dans de nombreux accidents graves (sortie de route sur obstacle fixe).
- **Responsabilité** : le gestionnaire peut être mis en cause pour défaut de signalisation ou d'entretien.
- **Exploitation** : la signalisation temporaire de chantier protège ouvriers et usagers.
- **Coût** : les marquages et équipements s'usent et se renouvellent régulièrement.

> ⚠️ **À retenir** : un obstacle non protégé dans la zone de sécurité (arbre, poteau, tête d'aqueduc) transforme une simple sortie de route en accident grave.`,
  },
  applications: {
    examples: [
      ['Aménagement de carrefour', 'Panneaux de priorité, marquages de stop et de cédez-le-passage, îlots.'],
      ['Virage dangereux', 'Panneau de danger, balises de virage (J4), éventuellement glissière.'],
      ['Chantier sur route', 'Signalisation temporaire : panneaux AK, cônes, alternat par feux.'],
      ['Traversée d’agglomération', 'Plateaux, zones 30, passages piétons éclairés.'],
      ['Diagnostic sécurité', 'Analyse des accidents, taux et gravité, propositions d’aménagement.'],
    ],
  },
  theory: {
    title: 'Théorie — Visibilité, marquages et accidentologie',
    content: `### 1. Implantation des panneaux de danger
En rase campagne, un panneau de danger est placé environ **150 m** avant le danger ; en agglomération, environ **50 m**. Il doit être visible de loin, sans masque (végétation, véhicules stationnés).

### 2. Lisibilité
La distance de lecture d'un texte dépend de la hauteur des caractères : l'usager doit pouvoir lire et comprendre avant d'agir, d'où des caractères plus grands sur les routes rapides.

### 3. Marquages en France
- Ligne continue : interdiction de franchir.
- Ligne discontinue de type **T1** (3 m de trait, 10 m d'intervalle) : séparation des voies.
- Ligne de type **T3** (3 m de trait, 1,33 m d'intervalle) : annonce d'une ligne continue (avertissement).
- Les marquages doivent être **rétroréfléchissants** pour être vus de nuit.

### 4. Indicateurs d'accidentologie
$$TA = \\frac{N \\times 10^8}{TMJA \\times 365 \\times n \\times L}$$
le **taux d'accidents** (par 100 millions de véhicules-kilomètres) sur $n$ années et une longueur $L$ (km), comparé aux valeurs de référence du type de route.

### 5. Dispositifs de retenue
Choisis selon le **niveau de retenue** (N2, H1, H2…) et la largeur de fonctionnement disponible derrière la barrière ; leur début et leur fin doivent être traités pour ne pas devenir eux-mêmes des obstacles.`,
  },
  formulas: {
    title: 'Formules essentielles — Sécurité routière',
    formulas: [
      {
        name: "Taux d'accidents",
        latex: "TA = \\frac{N \\times 10^8}{TMJA \\times 365 \\times n \\times L}",
        description: 'Nombre d’accidents par 100 millions de véhicules-kilomètres.',
        vars: [
          ['TA', "Taux d'accidents", 'acc./10⁸ véh·km', 'À comparer aux taux de référence du type de route.'],
          ['N', "Nombre d'accidents", '-', 'Sur la période étudiée (souvent 5 ans).'],
          ['TMJA', 'Trafic moyen journalier annuel', 'véh/j', 'Deux sens.'],
          ['n', 'Durée', 'ans', 'Période d’observation.'],
          ['L', 'Longueur de section', 'km', 'Section homogène.'],
        ],
      },
      {
        name: 'Distance de perception-réaction',
        latex: "d_{PR} = \\frac{V}{3{,}6} \\cdot t_{PR}",
        description: 'Distance parcourue pendant le temps de perception et de réaction.',
        vars: [
          ['d_{PR}', 'Distance de perception-réaction', 'm', 'Avant le début du freinage.'],
          ['V', 'Vitesse', 'km/h', 'Vitesse pratiquée.'],
          ['t_{PR}', 'Temps de perception-réaction', 's', '≈ 2 s en conception.'],
        ],
        rule: "À 90 km/h, on parcourt 25 m par seconde : 50 m avant même de commencer à freiner.",
      },
      {
        name: 'Modulation d’une ligne discontinue',
        latex: "\\tau = \\frac{l_{trait}}{l_{trait} + l_{intervalle}}",
        description: 'Proportion de longueur peinte (pour le métré des marquages).',
        vars: [
          ['\\tau', 'Taux de marquage', '-', 'T1 : 3/13 = 0,23 ; T3 : 3/4,33 = 0,69.'],
          ['l_{trait}', 'Longueur du trait', 'm', '3 m pour T1 et T3.'],
          ['l_{intervalle}', 'Longueur de l’intervalle', 'm', '10 m (T1) ; 1,33 m (T3).'],
        ],
      },
      {
        name: "Indice de gravité",
        latex: "IG = \\frac{T + G}{N}",
        description: 'Part des accidents ayant fait des tués (T) ou des blessés graves (G).',
        vars: [
          ['IG', 'Indice de gravité', '-', 'Plus élevé sur routes rapides et sorties de route sur obstacle.'],
          ['T, G', 'Nombre de tués et blessés hospitalisés', '-', 'Sur la période.'],
        ],
      },
    ],
  },
  stepbystep: {
    title: 'Calcul complet — Diagnostic d’une section de route départementale',
    problem: "Une section de 5 km (TMJA = 8 000 véh/j) a connu 12 accidents corporels en 3 ans, dont 4 avec tués ou blessés hospitalisés. Le taux de référence de ce type de route est d'environ 10 accidents/10⁸ véh·km. Analyser la section.",
    steps_demo: [
      { n: 1, text: "Trafic cumulé : 8 000 × 365 × 3 × 5 = 4,38 × 10⁷ véh·km." },
      { n: 2, text: "Taux d'accidents : TA = 12 × 10⁸ / 4,38 × 10⁷ = 27,4 accidents par 10⁸ véh·km." },
      { n: 3, text: "Comparaison : 27,4 ≈ 2,7 fois le taux de référence → section accidentogène." },
      { n: 4, text: "Gravité : 4 / 12 = 33 % des accidents sont graves." },
      { n: 5, text: "Étape suivante : localiser les accidents, identifier les types (sorties de route, intersections) et proposer des actions ciblées." },
    ],
    result_latex: "TA = \\frac{12 \\times 10^8}{8\\,000 \\times 365 \\times 3 \\times 5} = 27{,}4\\ \\text{acc./10}^8\\ \\text{véh·km} \\approx 2{,}7 \\times TA_{réf}",
  },
  units: {
    table: [
      ['Distance d’implantation', 'm', 'ft', '150 m ≈ 490 ft'],
      ['Largeur de ligne', 'cm', 'in', 'Unité de largeur u : de 5 à 7,5 cm selon le type de route (la plus grande sur autoroute)'],
      ['Taux d’accidents', 'acc./10⁸ véh·km', 'crashes/100 MVMT', '1 mile = 1,609 km'],
      ['Rétroréflexion', 'mcd/m²/lx', '-', 'Mesurée au rétroréflectomètre'],
      ['Éclairement', 'lux', 'foot-candle', '1 fc = 10,76 lux'],
    ],
    note: 'En France, la largeur des marquages se définit en multiples d’une unité u qui dépend du type de route.',
  },
  hypotheses: {
    items: [
      ['info', 'Les distances et modulations citées sont celles de l’Instruction interministérielle sur la signalisation routière (France).'],
      ['info', 'Un taux d’accidents n’est significatif que sur une période suffisante (souvent 5 ans) et un trafic suffisant.'],
      ['warning', 'Un aménagement de sécurité doit traiter la cause identifiée ; ajouter des panneaux sans analyse est rarement efficace.'],
      ['warning', 'Les extrémités de glissières non traitées sont des obstacles dangereux.'],
      ['tip', 'Combinez données d’accidents, visites de terrain de jour et de nuit, et mesures de vitesses pratiquées.'],
    ],
  },
  simple_examples: {
    examples: [
      {
        title: 'Exemple 1 : distance de réaction',
        given: 'V = 80 km/h, t = 2 s',
        find: 'd_PR',
        solution_latex: "d_{PR} = \\frac{80}{3{,}6} \\times 2 = 44{,}4\\ \\text{m}",
        result: '≈ 44 m parcourus avant de commencer à freiner.',
      },
      {
        title: 'Exemple 2 : métré d’une ligne T1',
        given: 'Section de 2 km marquée en ligne axiale T1',
        find: 'Longueur peinte',
        solution_latex: "L_{peinte} = 2\\,000 \\times \\frac{3}{13} = 462\\ \\text{m}",
        result: '≈ 460 m de trait à peindre.',
      },
      {
        title: 'Exemple 3 : indice de gravité',
        given: '20 accidents dont 2 mortels et 6 avec blessés hospitalisés',
        find: 'IG',
        solution_latex: "IG = \\frac{2 + 6}{20} = 0{,}40",
        result: '40 % d’accidents graves : à rapprocher des types d’accidents.',
      },
    ],
  },
  real_examples: {
    title: 'Exemple réel — Traitement des sorties de route sur obstacles',
    examples: [
      {
        context: 'Route départementale bordée d’alignements d’arbres, trafic 6 000 véh/j',
        scenario: "L'analyse montre que la majorité des accidents mortels sont des sorties de route percutant des arbres. Le gestionnaire combine bandes rugueuses en rive, glissières sur les sections les plus exposées et abaissement de la vitesse à 70 km/h dans les virages.",
        decomposition_latex: "\\text{sortie de route} + \\text{obstacle rigide} \\Rightarrow \\text{forte gravité} \\qquad \\text{protection + vitesse} \\downarrow \\Rightarrow \\text{gravité} \\downarrow",
        lesson: "Agir sur les conséquences (obstacles) est souvent plus efficace que d'espérer supprimer toutes les erreurs de conduite : c'est le principe de la route qui pardonne.",
      },
    ],
  },
  diagrams: {
    title: 'Schéma de principe — Démarche de sécurité routière',
    diagram_description: [
      'Recueil des données : accidents, trafic, vitesses, réclamations',
      'Indicateurs : taux d’accidents, gravité, zones d’accumulation',
      'Diagnostic de terrain de jour et de nuit',
      'Actions : signalisation, marquages, aménagements, dispositifs de retenue',
      'Mise en œuvre et signalisation temporaire de chantier',
      'Évaluation : suivi des accidents et des vitesses après travaux',
    ],
  },
  mistakes: {
    items: [
      ['Multiplier les panneaux', 'Surcharge d’information, signalisation ignorée', 'Hiérarchiser et supprimer les panneaux inutiles.'],
      ['Poser une glissière trop courte', 'Le véhicule la contourne et atteint l’obstacle', 'Respecter les longueurs amont et aval prescrites par le fabricant et les guides.'],
      ['Négliger l’entretien des marquages', 'Lignes invisibles de nuit et par temps de pluie', 'Contrôler la rétroréflexion et renouveler les marquages usés.'],
    ],
  },
  tips: {
    tips: [
      'Faites la visite de nuit : c’est là que les défauts de marquage et de balisage apparaissent.',
      'Conduisez vous-même l’itinéraire à la vitesse pratiquée pour évaluer la lisibilité.',
      'Un panneau masqué par la végétation équivaut à un panneau absent.',
      'Les supports de panneaux en zone de sécurité doivent être fragilisables.',
    ],
  },
  norms: {
    norms: [
      ['Instruction interministérielle sur la signalisation routière (IISR)', 'Règles de signalisation verticale, horizontale, temporaire.'],
      ['NF EN 1317', 'Dispositifs de retenue routiers : niveaux de retenue et essais.'],
      ['NF EN 1436', 'Produits de marquage routier : performances (rétroréflexion, adhérence).'],
      ['NF EN 13201', 'Éclairage public.'],
      ['Guides du Cerema (ARP, traitement des obstacles latéraux)', 'Conception des routes et sécurité des accotements.'],
    ],
  },
  exercises: {
    exercises: [
      {
        level: 1,
        text: 'Une section de 3 km (TMJA 12 000 véh/j) compte 6 accidents en 5 ans. Calculer le taux d’accidents.',
        hint: 'TA = N × 10⁸ / (TMJA × 365 × n × L).',
        answer_latex: "TA = \\frac{6 \\times 10^8}{12\\,000 \\times 365 \\times 5 \\times 3} = 9{,}1\\ \\text{acc./10}^8\\ \\text{véh·km}",
        answer_text: 'TA ≈ 9,1.',
      },
      {
        level: 2,
        text: 'Calculer la longueur peinte d’une ligne T3 de 300 m.',
        hint: 'τ = 3 / 4,33.',
        answer_latex: "L = 300 \\times \\frac{3}{4{,}33} = 208\\ \\text{m}",
        answer_text: '≈ 208 m.',
      },
      {
        level: 3,
        text: 'Un panneau de virage doit être lu, compris et suivi d’une décélération. À 90 km/h, avec 2 s de perception-réaction et 3 s de lecture, quelle distance minimale de visibilité faut-il avant le panneau ?',
        hint: 'd = V/3,6 × (2 + 3).',
        answer_latex: "d = 25 \\times 5 = 125\\ \\text{m}",
        answer_text: 'Au moins 125 m de visibilité sur le panneau.',
      },
    ],
  },
  quiz: {
    title: 'Quiz — Signalisation et sécurité routière',
    questions: [
      { q: 'À quelle distance place-t-on un panneau de danger en rase campagne ?', options: ['≈ 50 m', '≈ 150 m', '≈ 500 m'], correct: 1, explain: 'Environ 150 m hors agglomération, 50 m en agglomération.' },
      { q: 'Que signifie une ligne T3 ?', options: ['Une séparation de voies ordinaire', 'L’annonce d’une ligne continue', 'Un passage piéton'], correct: 1, explain: 'La ligne T3 (traits rapprochés) avertit de l’approche d’une ligne continue.' },
      { q: 'Que mesure le taux d’accidents ?', options: ['Les accidents par km', 'Les accidents par 100 millions de véhicules-kilomètres', 'Les accidents par habitant'], correct: 1, explain: 'Il rapporte les accidents à l’exposition au risque (trafic × longueur × durée).' },
    ],
  },
  exam_questions: {
    questions: [
      'Présentez les familles de signalisation et leurs règles d’implantation.',
      'Calculez les indicateurs d’accidentologie d’une section et proposez une démarche de diagnostic.',
      'Expliquez le concept de route qui pardonne et le traitement des obstacles latéraux.',
    ],
  },
  interview_questions: {
    questions: [
      ['Comment traiteriez-vous un virage accidentogène ?', 'Analyse des accidents (type, conditions), mesure des vitesses, visite de jour et de nuit, puis actions : signalisation et balisage de virage cohérents, amélioration de l’adhérence, traitement des obstacles, éventuellement modification du tracé ou réduction de vitesse.'],
      ['Quelles sont les priorités de la signalisation temporaire de chantier ?', 'Protéger les ouvriers et les usagers : annoncer, guider et protéger la zone de travaux, réduire la vitesse, assurer la lisibilité de nuit, et retirer la signalisation dès la fin des travaux.'],
    ],
  },
  practical_case: {
    title: 'Cas pratique — Sécurisation d’une entrée d’agglomération',
    scenario: "Les usagers arrivent à 85 km/h (vitesse mesurée) dans un village limité à 50 km/h ; plusieurs piétons ont été blessés près de l'école.",
    description: 'Proposer une démarche et quantifier l’enjeu de vitesse.',
    resolutions: [
      "d_{arrêt}(85) = \\frac{85}{3{,}6} \\times 2 + \\frac{23{,}6^2}{2 \\times 9{,}81 \\times 0{,}5} = 47 + 57 = 104\\ \\text{m}",
      "d_{arrêt}(50) = 27{,}8 + \\frac{13{,}9^2}{9{,}81} = 28 + 20 = 48\\ \\text{m}",
      "\\text{Actions : porte d'entrée (rétrécissement, plateau), marquages, éclairage du passage piéton}",
    ],
    conclusion: "La distance d'arrêt passe de 104 m à 48 m quand la vitesse respecte la limite : l'aménagement physique de l'entrée est plus efficace qu'un simple panneau.",
  },
  summary: {
    content: `### La sécurité routière en 5 points
1. Signalisation verticale, horizontale, lumineuse, temporaire.
2. Panneaux de danger à ≈ 150 m (rase campagne), ≈ 50 m (agglomération).
3. Marquages T1 (3/10 m) et T3 (3/1,33 m), rétroréfléchissants.
4. $TA = N \\times 10^8 / (TMJA \\times 365 \\times n \\times L)$.
5. Route qui pardonne : zones de sécurité et obstacles protégés.`,
  },
  key_points: {
    points: [
      'Danger : 150 m hors agglomération',
      'T1 : 3 m / 10 m ; T3 : 3 m / 1,33 m',
      'TA par 10⁸ véh·km',
      '90 km/h = 25 m/s',
      'Traiter les obstacles latéraux',
    ],
  },
  self_assessment: {
    objectives: [
      'Je connais les familles de signalisation et leurs règles',
      'Je sais calculer un taux d’accidents et un indice de gravité',
      'Je sais estimer une distance de perception-réaction',
      'Je connais le principe de la route qui pardonne',
      "J'ai réussi le quiz avec au moins 2 bonnes réponses sur 3",
    ],
  },
});
