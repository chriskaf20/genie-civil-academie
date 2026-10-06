// ── Lesson: Carrefours à feux — Module 46 ────────────────────────────────────
import { buildLesson } from './build_lesson.js';

export const lesson_transports_feux = buildLesson({
  moduleId: 46,
  slug: 'transports_feux',
  lessonIndex: 2,
  title: "Carrefours à Feux : Phasage, Débit de Saturation, Cycle de Webster, Répartition des Verts et Capacité",
  subtitle: 'Module 46 — Ingénierie du trafic & planification des transports',
  level: 'Avancé',
  duration: '5h',
  diagramType: 'none',
  tags: ['Carrefour à feux', 'Webster', 'Cycle', 'Phase', 'Débit de saturation', 'Capacité', 'Temps perdu'],
}, {
  definition: {
    title: 'Définition — Partager le temps entre des flux qui se croisent',
    fr: 'Régulation d’un carrefour à feux tricolores',
    en: 'Signalised intersection design',
    metier: "Concerne les ingénieurs trafic, les services de voirie des collectivités et les bureaux d'études mobilité.",
    content: `Un **carrefour à feux** attribue alternativement le droit de passage aux différents courants de circulation. On définit :
- le **cycle** $C$ : durée d'une séquence complète (souvent 40 à 120 s) ;
- les **phases** : groupes de mouvements compatibles qui ont le vert en même temps ;
- le **vert effectif** $g$ de chaque phase ;
- les **temps perdus** $L$ : démarrages, jaunes et rouges de dégagement.

### Débit de saturation
Quand le feu passe au vert et qu'une file est en attente, les véhicules s'écoulent à un débit maximal, le **débit de saturation** $s$, de l'ordre de **1 800 uvp/h par voie**.

### Capacité d'une voie
$$c = s \\times \\frac{g}{C}$$
Une voie n'a le vert qu'une partie du temps : sa capacité est une fraction du débit de saturation.

> 💡 Un cycle trop court gaspille du temps en démarrages ; un cycle trop long allonge les files et les attentes.`,
  },
  importance: {
    content: `- **Sécurité** : les feux séparent les mouvements conflictuels (tourne-à-gauche, piétons).
- **Fluidité** : un mauvais réglage crée des files qui remontent sur les carrefours voisins.
- **Piétons et transports collectifs** : temps de traversée suffisants, priorité aux bus.
- **Coût** : une mise à jour des plans de feux améliore souvent la circulation sans travaux.

> ⚠️ **À retenir** : le vert piéton doit permettre de traverser à vitesse lente (≈ 1 m/s ou moins).`,
  },
  applications: {
    examples: [
      ['Carrefour urbain', 'Deux phases, cycle de 60 à 90 s.'],
      ['Grand axe', 'Coordination des feux en « onde verte ».'],
      ['Carrefour avec tourne-à-gauche', 'Phase spécifique ou voie de stockage.'],
      ['Ligne de tramway', 'Priorité aux feux par détection.'],
      ['Traversée piétonne', 'Feu à la demande (bouton).'],
    ],
  },
  theory: {
    title: 'Théorie — Méthode de Webster',
    content: `### 1. Rapports de débit
Pour chaque phase, on retient le courant **critique** (le plus chargé par rapport à sa capacité) :
$$y_i = \\frac{q_i}{s_i} \\qquad Y = \\sum y_i$$
Si $Y \\geq 1$, aucun réglage ne peut écouler la demande : il faut modifier la géométrie (voies supplémentaires) ou le phasage.

### 2. Cycle optimal de Webster
$$C_0 = \\frac{1{,}5\\, L + 5}{1 - Y}$$
$L$ : temps perdu total par cycle (s), souvent 3 à 5 s par phase.

### 3. Répartition des verts
$$g_i = (C - L)\\, \\frac{y_i}{Y}$$
Chaque phase reçoit du vert en proportion de sa charge.

### 4. Vérification
Taux de saturation de chaque voie : $x = q / c = q\\, C / (s\\, g)$ ; on vise $x \\leq 0{,}85$ à $0{,}90$.

### 5. Piétons
Le vert piéton doit couvrir au moins la traversée : $g_p \\geq L_{traversée} / v_p$.`,
  },
  formulas: {
    title: 'Formules essentielles — Carrefours à feux',
    formulas: [
      { name: 'Rapport de débit', latex: "y_i = \\frac{q_i}{s_i}", description: 'Charge relative du courant critique d’une phase.', vars: [['q_i', 'Débit', 'uvp/h', ''], ['s_i', 'Débit de saturation', 'uvp/h', '≈ 1 800 par voie.']] },
      { name: 'Cycle de Webster', latex: "C_0 = \\frac{1{,}5\\, L + 5}{1 - Y}", description: 'Cycle qui minimise le retard moyen.', vars: [['L', 'Temps perdu total', 's', ''], ['Y', 'Somme des y critiques', '-', '< 1.']] },
      { name: 'Vert effectif', latex: "g_i = (C - L)\\, \\frac{y_i}{Y}", description: 'Répartition proportionnelle aux charges.', vars: [['C', 'Cycle retenu', 's', '']] },
      { name: 'Capacité d’une voie', latex: "c = s\\, \\frac{g}{C}", description: 'Débit maximal écoulé par cycle.', vars: [['g', 'Vert effectif', 's', '']] },
    ],
  },
  stepbystep: {
    title: 'Calcul complet — Carrefour à deux phases',
    problem: "Carrefour à deux phases. Phase 1 (nord-sud) : courant critique 600 uvp/h sur une voie. Phase 2 (est-ouest) : 450 uvp/h sur une voie. s = 1 800 uvp/h/voie ; temps perdu 4 s par phase. Calculer le cycle de Webster, les verts et les taux de saturation (cycle retenu : 45 s).",
    steps_demo: [
      { n: 1, text: "y₁ = 600 / 1 800 = 0,333 ; y₂ = 450 / 1 800 = 0,250 ; Y = 0,583." },
      { n: 2, text: "L = 2 × 4 = 8 s ; C₀ = (1,5 × 8 + 5) / (1 − 0,583) = 17 / 0,417 = 40,8 s → on retient 45 s." },
      { n: 3, text: "Vert disponible : 45 − 8 = 37 s ; g₁ = 37 × 0,333 / 0,583 = 21,1 s ; g₂ = 15,9 s." },
      { n: 4, text: "Capacités : c₁ = 1 800 × 21,1 / 45 = 844 uvp/h ; c₂ = 1 800 × 15,9 / 45 = 636 uvp/h." },
      { n: 5, text: "Saturations : x₁ = 600 / 844 = 0,71 ; x₂ = 450 / 636 = 0,71 ✓ (réserve de capacité d'environ 30 %)." },
    ],
    result_latex: "C_0 = \\frac{1{,}5 \\times 8 + 5}{1 - 0{,}583} = 40{,}8\\ \\text{s} \\qquad g_1 = 21{,}1\\ \\text{s} \\quad g_2 = 15{,}9\\ \\text{s} \\quad x = 0{,}71",
  },
  units: {
    table: [
      ['Débit', 'uvp/h', 'pcu/h', 'Unité de véhicule particulier (poids lourd ≈ 2 uvp)'],
      ['Cycle', 's', 's', ''],
      ['Débit de saturation', 'uvp/h/voie', 'pcu/h/lane', '≈ 1 800'],
      ['Taux de saturation', '-', 'v/c', ''],
      ['Vitesse de marche', 'm/s', 'ft/s', '1,0 m/s ≈ 3,3 ft/s'],
    ],
    note: 'Les débits de saturation réels dépendent de la largeur des voies, de la pente, des virages et des poids lourds.',
  },
  hypotheses: {
    items: [
      ['info', 'La méthode de Webster suppose des arrivées aléatoires et un carrefour isolé (non coordonné).'],
      ['info', 'Les temps perdus et débits de saturation peuvent être mesurés sur place pour affiner le réglage.'],
      ['warning', 'Un cycle trop long pénalise les piétons, qui traversent alors au rouge.'],
      ['warning', 'Les tourne-à-gauche non protégés réduisent fortement la capacité des voies concernées.'],
      ['tip', 'Vérifiez toujours que le vert piéton couvre la traversée à vitesse lente.'],
    ],
  },
  simple_examples: {
    examples: [
      { title: 'Exemple 1 : capacité', given: 's = 1 800, g = 25 s, C = 60 s', find: 'c', solution_latex: "c = 1\\,800 \\times \\frac{25}{60} = 750\\ \\text{uvp/h}", result: '750 uvp/h.' },
      { title: 'Exemple 2 : demande excessive', given: 'y₁ = 0,55 ; y₂ = 0,50', find: 'Faisabilité', solution_latex: "Y = 1{,}05 > 1", result: 'Impossible : il faut des voies supplémentaires ou un autre phasage.' },
      { title: 'Exemple 3 : vert piéton', given: 'Traversée de 14 m, 1 m/s', find: 'g_p', solution_latex: "g_p \\geq \\frac{14}{1} = 14\\ \\text{s}", result: 'Au moins 14 s (vert + dégagement).' },
    ],
  },
  real_examples: {
    title: 'Exemple réel — Onde verte sur un boulevard',
    examples: [
      {
        context: 'Boulevard urbain de 1,5 km avec 8 carrefours à feux',
        scenario: "Les feux fonctionnaient de façon isolée : un véhicule s'arrêtait en moyenne à 5 carrefours. Les feux ont été coordonnés sur un cycle commun de 80 s avec des décalages calculés pour une vitesse de 40 km/h. Le nombre d'arrêts et les temps de parcours ont nettement diminué, ainsi que les émissions liées aux redémarrages.",
        decomposition_latex: "\\text{décalage} = \\frac{d}{v} \\Rightarrow \\text{onde verte à 40 km/h}",
        lesson: "Sur un axe, la coordination des feux (cycle commun et décalages) compte autant que le réglage de chaque carrefour.",
      },
    ],
  },
  diagrams: {
    title: 'Schéma de principe — Régler un carrefour à feux',
    diagram_description: [
      'Comptages directionnels et conversion en uvp',
      'Choix des phases (mouvements compatibles)',
      'Rapports de débit critiques et somme Y',
      'Cycle de Webster et temps perdus',
      'Répartition des verts et contrôle piétons',
      'Vérification des taux de saturation et des longueurs de file',
    ],
  },
  mistakes: {
    items: [
      ['Ignorer les poids lourds', 'Capacité surestimée', 'Convertir en uvp.'],
      ['Vert piéton trop court', 'Traversées au rouge, accidents', 'g_p ≥ L / v avec v lente.'],
      ['Cycle maximal par défaut', 'Files et attentes inutiles', 'Calculer le cycle (Webster).'],
    ],
  },
  tips: {
    tips: [
      'Retenez : s ≈ 1 800 uvp/h/voie, temps perdu ≈ 4 s par phase.',
      'Visez un taux de saturation de 0,85 à 0,90 au maximum.',
      'Le moins de phases possible : chaque phase ajoute du temps perdu.',
      'Utilisez la détection pour adapter les verts au trafic réel.',
    ],
  },
  norms: {
    norms: [
      ['Instruction interministérielle sur la signalisation routière, 6ᵉ partie (France)', 'Feux de circulation permanents.'],
      ['Guide Cerema « Carrefours à feux »', 'Conception et réglage.'],
      ['Highway Capacity Manual (TRB)', 'Méthodes de capacité et niveaux de service.'],
      ['Webster (1958)', 'Traffic Signal Settings, Road Research Technical Paper 39.'],
    ],
  },
  exercises: {
    exercises: [
      { level: 1, text: 'Calculer y pour 720 uvp/h sur une voie (s = 1 800).', hint: 'q / s.', answer_latex: "y = 0{,}40", answer_text: '0,40.' },
      { level: 2, text: 'Y = 0,65, L = 12 s (3 phases). Calculer C₀.', hint: 'Webster.', answer_latex: "C_0 = \\frac{1{,}5 \\times 12 + 5}{0{,}35} = 65{,}7\\ \\text{s}", answer_text: '≈ 66 s.' },
      { level: 3, text: 'Avec C = 66 s, répartir les verts pour y = 0,30 ; 0,20 ; 0,15.', hint: 'g = (C − L) y / Y.', answer_latex: "g = 54 \\times \\frac{y}{0{,}65} : 24{,}9\\ ;\\ 16{,}6\\ ;\\ 12{,}5\\ \\text{s}", answer_text: '24,9 s ; 16,6 s ; 12,5 s.' },
    ],
  },
  quiz: {
    title: 'Quiz — Carrefours à feux',
    questions: [
      { q: 'Ordre de grandeur du débit de saturation d’une voie ?', options: ['600 uvp/h', '1 800 uvp/h', '5 000 uvp/h'], correct: 1, explain: 'Environ un véhicule toutes les 2 s.' },
      { q: 'Que signifie Y ≥ 1 ?', options: ['Le carrefour est surdimensionné', 'La demande dépasse la capacité quel que soit le réglage', 'Le cycle est optimal'], correct: 1, explain: 'Il faut modifier la géométrie ou le phasage.' },
      { q: 'Comment répartit-on le vert entre les phases (Webster) ?', options: ['À parts égales', 'En proportion des rapports de débit', 'Au hasard'], correct: 1, explain: 'g_i ∝ y_i.' },
    ],
  },
  exam_questions: {
    questions: [
      'Exposez la méthode de Webster et appliquez-la à un carrefour à deux phases.',
      'Comment vérifier la capacité et le confort des piétons ?',
      'Qu’est-ce qu’une onde verte et comment la régler ?',
    ],
  },
  interview_questions: {
    questions: [
      ['Les files remontent jusqu’au carrefour amont : que faites-vous ?', 'Je vérifie les taux de saturation et les longueurs de stockage, j’ajuste les verts ou le cycle, je coordonne les deux carrefours et, si Y est trop élevé, je propose une modification de géométrie.'],
      ['Comment donner la priorité au bus sans pénaliser tout le carrefour ?', 'Par détection : prolongation du vert ou rappel anticipé pour le bus, dans la limite des minima des autres phases.'],
    ],
  },
  practical_case: {
    title: 'Cas pratique — Ajouter une traversée piétonne protégée',
    scenario: 'Le carrefour de l’exemple (C = 45 s) doit accueillir une traversée de 12 m sur la branche nord. Vitesse piétonne de calcul : 0,8 m/s.',
    description: 'Vérifier si le vert de la phase 2 permet la traversée.',
    resolutions: [
      "g_{piéton} \\geq \\frac{12}{0{,}8} = 15\\ \\text{s}",
      "g_2 = 15{,}9\\ \\text{s} \\geq 15\\ \\text{s} \\quad \\checkmark \\ (\\text{piétons pendant la phase est-ouest})",
      "\\text{Marge faible} \\Rightarrow \\text{cycle de 50 s} : g_2 = 42 \\times 0{,}429 = 18{,}0\\ \\text{s}",
    ],
    conclusion: 'Le cycle est porté à 50 s pour offrir une marge confortable aux piétons lents ; les taux de saturation restent sous 0,70.',
  },
  summary: {
    content: `### Les carrefours à feux en 5 points
1. Cycle, phases, verts, temps perdus.
2. $y = q/s$, $Y = \\sum y$ < 1.
3. Webster : $C_0 = (1{,}5 L + 5)/(1 - Y)$.
4. Verts : $g_i = (C - L) y_i / Y$ ; capacité $c = s g / C$.
5. Vert piéton ≥ traversée à vitesse lente.`,
  },
  key_points: {
    points: ['s ≈ 1 800 uvp/h/voie', 'Y = Σ q/s < 1', 'C₀ = (1,5L + 5)/(1 − Y)', 'g ∝ y', 'x ≤ 0,85–0,90'],
  },
  self_assessment: {
    objectives: [
      'Je sais calculer les rapports de débit',
      'Je sais déterminer un cycle de Webster',
      'Je sais répartir les verts et vérifier la capacité',
      'Je sais vérifier le temps de traversée piétonne',
      "J'ai réussi le quiz avec au moins 2 bonnes réponses sur 3",
    ],
  },
});
