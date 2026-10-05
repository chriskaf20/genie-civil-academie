// ── Lesson: Gestion des risques projet — Module 25 ───────────────────────────
import { buildLesson } from './build_lesson.js';

export const lesson_projets_risques = buildLesson({
  moduleId: 25,
  slug: 'projets_risques',
  lessonIndex: 1,
  title: "Gestion des Risques de Projet : Registre, Criticité, Valeur Monétaire Attendue et Analyse PERT Probabiliste",
  subtitle: 'Module 25 — Gestion de Projets',
  level: 'Avancé',
  duration: '6h',
  tags: ['Risques', 'ISO 31000', 'Criticité', 'EMV', 'Provision', 'PERT', 'Monte-Carlo'],
}, {
  definition: {
    title: 'Définition — Anticiper ce qui peut faire dérailler un projet',
    fr: 'Management des risques de projet',
    en: 'Project risk management',
    metier: "Pratiqué par les chefs de projet, les directeurs de travaux, les maîtres d'ouvrage et les contrôleurs de gestion.",
    content: `Un **risque** est un événement incertain qui, s'il se produit, a un effet sur les objectifs du projet (coût, délai, qualité, sécurité). On le caractérise par sa **probabilité** et son **impact**. Un risque positif est une **opportunité**.

### Le processus (ISO 31000)
1. **Identifier** : ateliers, retours d'expérience, check-lists.
2. **Analyser** : probabilité, impact, criticité.
3. **Évaluer** : hiérarchiser et décider des risques à traiter.
4. **Traiter** : éviter, réduire, transférer, accepter.
5. **Suivre** : registre mis à jour, indicateurs, revue régulière.

> 💡 En génie civil, les risques majeurs sont souvent géotechniques, réglementaires (autorisations), liés aux réseaux existants, aux intempéries et aux interfaces entre lots.`,
  },
  importance: {
    content: `- **Budgets** : la provision pour aléas se calcule à partir des risques identifiés.
- **Délais** : les risques sur le chemin critique repoussent la livraison.
- **Contrats** : chaque risque doit avoir un « propriétaire » (maître d'ouvrage ou entreprise).
- **Décision** : comparer les coûts de traitement aux pertes évitées.

> ⚠️ **À retenir** : un registre des risques non mis à jour est inutile ; c'est un outil vivant, revu à chaque comité.`,
  },
  applications: {
    examples: [
      ['Tunnel', 'Risque géologique traité par reconnaissances et méthode observationnelle.'],
      ['Travaux en ville', 'Risque de réseaux non repérés traité par investigations complémentaires.'],
      ['Ouvrage en rivière', 'Risque de crue intégré au phasage et aux assurances.'],
      ['Grand projet', 'Analyse Monte-Carlo du planning pour fixer une date de livraison réaliste.'],
      ['Appel d’offres', 'Chiffrage d’une provision pour aléas dans le prix.'],
    ],
  },
  theory: {
    title: 'Théorie — Quantifier et traiter les risques',
    content: `### 1. Matrice de criticité
On note la probabilité P et l'impact I de 1 à 5 ; la **criticité** vaut $C = P \\times I$ (de 1 à 25). Les risques au-dessus d'un seuil (par exemple C ≥ 12) sont traités en priorité.

### 2. Valeur monétaire attendue (EMV)
$$EMV = p \\times I_{€}$$
La somme des EMV des risques résiduels donne un ordre de grandeur de la **provision pour aléas**.

### 3. Stratégies de traitement
| Stratégie | Exemple |
|---|---|
| Éviter | Modifier le tracé pour contourner une zone instable |
| Réduire | Sondages supplémentaires, prototypes, double source d'approvisionnement |
| Transférer | Assurance, sous-traitance au forfait, clause contractuelle |
| Accepter | Provision financière et plan de réaction |

### 4. Incertitude sur les délais (PERT probabiliste)
Pour chaque tâche, trois estimations : optimiste $a$, probable $m$, pessimiste $b$ :
$$T_e = \\frac{a + 4m + b}{6} \\qquad \\sigma = \\frac{b - a}{6}$$
Sur le chemin critique, les durées et les variances s'additionnent ; la probabilité de finir avant la date D s'obtient par la loi normale avec $z = (D - T)/\\sigma_T$.

### 5. Simulation de Monte-Carlo
On tire au hasard des milliers de scénarios (durées, coûts) pour obtenir une distribution : on retient par exemple la valeur **P80** (80 % de chances de ne pas être dépassée).`,
  },
  formulas: {
    title: 'Formules essentielles — Risques',
    formulas: [
      {
        name: 'Criticité',
        latex: "C = P \\times I",
        description: 'Probabilité et impact notés sur des échelles de 1 à 5.',
        vars: [
          ['C', 'Criticité', '-', 'De 1 à 25.'],
          ['P', 'Note de probabilité', '-', '1 (rare) à 5 (quasi certain).'],
          ['I', "Note d'impact", '-', '1 (négligeable) à 5 (critique).'],
        ],
      },
      {
        name: 'Valeur monétaire attendue',
        latex: "EMV = p \\times I_{€} \\qquad \\text{Provision} \\approx \\sum EMV_i",
        description: 'Espérance de perte d’un risque.',
        vars: [
          ['p', 'Probabilité', '-', 'Entre 0 et 1.'],
          ['I_{€}', 'Impact financier', '€', 'Si le risque survient.'],
        ],
      },
      {
        name: 'Durée PERT à trois estimations',
        latex: "T_e = \\frac{a + 4m + b}{6} \\qquad \\sigma = \\frac{b - a}{6}",
        description: 'Durée moyenne et écart type d’une tâche.',
        vars: [
          ['a, m, b', 'Durées optimiste, probable, pessimiste', 'j', ''],
          ['T_e', 'Durée espérée', 'j', ''],
          ['\\sigma', 'Écart type', 'j', ''],
        ],
      },
      {
        name: 'Probabilité de respecter un délai',
        latex: "z = \\frac{D - T}{\\sigma_T} \\qquad \\sigma_T = \\sqrt{\\sum \\sigma_i^2}",
        description: 'Approximation par la loi normale sur le chemin critique.',
        vars: [
          ['D', 'Date objectif', 'j', ''],
          ['T', 'Somme des durées espérées', 'j', ''],
          ['\\sigma_T', 'Écart type du chemin', 'j', ''],
          ['z', 'Variable centrée réduite', '-', 'z = 1 → 84 % ; z = 1,28 → 90 %.'],
        ],
      },
    ],
  },
  stepbystep: {
    title: 'Calcul complet — Provision pour aléas d’un ouvrage',
    problem: "Le registre d'un pont comporte trois risques résiduels : (1) sol plus compressible que prévu, p = 0,30, impact 200 000 € ; (2) retard d'autorisation de travaux en rivière, p = 0,20, impact 150 000 € ; (3) hausse du prix de l'acier, p = 0,50, impact 80 000 €. Calculer la provision.",
    steps_demo: [
      { n: 1, text: "EMV₁ = 0,30 × 200 000 = 60 000 €." },
      { n: 2, text: "EMV₂ = 0,20 × 150 000 = 30 000 €." },
      { n: 3, text: "EMV₃ = 0,50 × 80 000 = 40 000 €." },
      { n: 4, text: "Provision ≈ 60 000 + 30 000 + 40 000 = 130 000 €." },
      { n: 5, text: "Le risque 1 justifie des sondages complémentaires à 25 000 € s'ils ramènent p à 0,10 : EMV passe à 20 000 €, soit 40 000 € de gain pour 25 000 € dépensés." },
    ],
    result_latex: "\\text{Provision} = 0{,}30 \\times 200 + 0{,}20 \\times 150 + 0{,}50 \\times 80 = 130\\ \\text{k€}",
  },
  units: {
    table: [
      ['Probabilité', '% ou 0–1', '% ou 0–1', 'Note 1 à 5 en qualitatif'],
      ['Impact', '€ ou jours', 'USD ou days', 'Préciser coût ou délai'],
      ['Criticité', 'note 1–25', 'score 1–25', 'Seuils fixés par l’entreprise'],
      ['Provision', '€', 'USD', 'Souvent 5 à 15 % selon la maturité du projet'],
      ['Percentile', 'P50, P80, P90', 'P50, P80, P90', 'Résultat de Monte-Carlo'],
    ],
    note: 'Distinguez la provision pour risques identifiés et la réserve pour imprévus non identifiés.',
  },
  hypotheses: {
    items: [
      ['info', 'La somme des EMV suppose des risques indépendants ; des risques corrélés nécessitent une simulation.'],
      ['info', 'L’approximation normale du PERT suppose un chemin critique avec plusieurs tâches indépendantes.'],
      ['warning', 'Les probabilités sont souvent sous-estimées (biais d’optimisme) : appuyez-vous sur des retours d’expérience.'],
      ['warning', 'Un chemin presque critique peut devenir critique quand les durées varient.'],
      ['tip', 'Désignez un propriétaire et une échéance pour chaque action de traitement.'],
    ],
  },
  simple_examples: {
    examples: [
      {
        title: 'Exemple 1 : criticité',
        given: 'P = 4 ; I = 4',
        find: 'C',
        solution_latex: "C = 4 \\times 4 = 16",
        result: '16 : risque majeur à traiter en priorité.',
      },
      {
        title: 'Exemple 2 : durée PERT',
        given: 'a = 10 j ; m = 14 j ; b = 24 j',
        find: 'T_e et σ',
        solution_latex: "T_e = \\frac{10 + 56 + 24}{6} = 15\\ \\text{j} \\qquad \\sigma = \\frac{24 - 10}{6} = 2{,}33\\ \\text{j}",
        result: '15 jours en moyenne, écart type 2,3 jours.',
      },
      {
        title: 'Exemple 3 : probabilité de délai',
        given: 'Chemin critique T = 120 j ; σ_T = 8 j ; objectif D = 130 j',
        find: 'Probabilité',
        solution_latex: "z = \\frac{130 - 120}{8} = 1{,}25 \\Rightarrow \\Phi(1{,}25) = 0{,}894",
        result: 'Environ 89 % de chances de respecter le délai.',
      },
    ],
  },
  real_examples: {
    title: 'Exemple réel — Le risque géologique des tunneliers',
    examples: [
      {
        context: 'Grands projets de tunnels urbains',
        scenario: "Sur plusieurs projets, la rencontre de terrains non reconnus (blocs, cavités, zones très perméables) a immobilisé des tunneliers pendant des mois et provoqué des surcoûts considérables. Les projets mieux maîtrisés avaient investi dans des reconnaissances denses et partagé contractuellement le risque géologique (référentiel géotechnique contractuel).",
        decomposition_latex: "\\text{Reconnaissances} \\downarrow \\Rightarrow p_{\\text{aléa géologique}} \\uparrow \\Rightarrow \\text{EMV élevée}",
        lesson: "Le risque géologique se réduit par les reconnaissances et se partage par le contrat ; il ne disparaît jamais complètement.",
      },
    ],
  },
  diagrams: {
    title: 'Schéma de principe — Cycle de gestion des risques',
    diagram_description: [
      'Identifier : ateliers, retours d’expérience, check-lists',
      'Analyser : probabilité, impact, criticité, EMV',
      'Évaluer : hiérarchiser, comparer au seuil d’acceptation',
      'Traiter : éviter, réduire, transférer, accepter',
      'Suivre : registre, indicateurs, revues mensuelles',
      'Capitaliser : retours d’expérience pour les projets suivants',
    ],
  },
  mistakes: {
    items: [
      ['Confondre risque et problème', 'Registre encombré de faits avérés', 'Un problème est un risque qui s’est réalisé : il relève du plan d’action.'],
      ['Additionner les impacts maximaux', 'Provision démesurée', 'Additionner les EMV ou simuler.'],
      ['Ne pas désigner de propriétaire', 'Actions jamais réalisées', 'Un nom et une date par action.'],
    ],
  },
  tips: {
    tips: [
      'Rédigez chaque risque sous la forme « cause → événement → conséquence ».',
      'Associez des opportunités au registre : elles financent parfois les risques.',
      'Présentez une date de livraison en P80 plutôt qu’en valeur déterministe.',
      'Revoyez le registre à chaque changement de phase du projet.',
    ],
  },
  norms: {
    norms: [
      ['ISO 31000', 'Management du risque : lignes directrices.'],
      ['IEC 31010', 'Techniques d’appréciation du risque.'],
      ['PMBOK (PMI)', 'Domaine de connaissance du management des risques de projet.'],
      ['Fascicule 69 du CCTG et recommandations AFTES', 'Travaux souterrains et gestion contractuelle du risque géotechnique.'],
    ],
  },
  exercises: {
    exercises: [
      {
        level: 1,
        text: 'Un risque a p = 0,25 et un impact de 120 000 €. Calculer son EMV.',
        hint: 'EMV = p × impact.',
        answer_latex: "0{,}25 \\times 120\\,000 = 30\\,000\\ €",
        answer_text: '30 000 €.',
      },
      {
        level: 2,
        text: 'Une tâche a a = 6, m = 8, b = 16 jours. Calculer T_e et σ.',
        hint: 'Pondération 1-4-1.',
        answer_latex: "T_e = \\frac{6 + 32 + 16}{6} = 9\\ \\text{j} \\qquad \\sigma = \\frac{10}{6} = 1{,}67\\ \\text{j}",
        answer_text: 'T_e = 9 j ; σ = 1,67 j.',
      },
      {
        level: 3,
        text: 'Un chemin critique comporte trois tâches : (T_e ; σ) = (20 ; 3), (35 ; 4), (25 ; 2,5). Quelle date garantit environ 90 % de réussite ?',
        hint: 'σ_T = √(Σσ²) ; z₉₀ = 1,28.',
        answer_latex: "T = 80\\ \\text{j} \\quad \\sigma_T = \\sqrt{9 + 16 + 6{,}25} = 5{,}59 \\quad D = 80 + 1{,}28 \\times 5{,}59 = 87{,}2\\ \\text{j}",
        answer_text: 'Environ 88 jours.',
      },
    ],
  },
  quiz: {
    title: 'Quiz — Gestion des risques',
    questions: [
      { q: 'Souscrire une assurance correspond à quelle stratégie ?', options: ['Éviter', 'Transférer', 'Accepter'], correct: 1, explain: 'Le risque financier est transféré à l’assureur.' },
      { q: 'Comment calcule-t-on l’EMV d’un risque ?', options: ['Probabilité × impact', 'Impact seul', 'Probabilité + impact'], correct: 0, explain: 'EMV = p × impact.' },
      { q: 'Que signifie une date P80 ?', options: ['80 % de chances de la dépasser', '80 % de chances de ne pas la dépasser', '80 jours de marge'], correct: 1, explain: 'Percentile 80 de la distribution simulée.' },
    ],
  },
  exam_questions: {
    questions: [
      'Décrivez le processus de management des risques selon l’ISO 31000.',
      'Expliquez le calcul d’une provision pour aléas par les EMV.',
      'Présentez la méthode PERT probabiliste et ses limites.',
    ],
  },
  interview_questions: {
    questions: [
      ['Quel est le principal risque d’un projet de fondations profondes ?', 'Le risque géotechnique : hétérogénéités, obstacles, nappe. Je le réduis par des reconnaissances et des essais de pieux, et je le partage par un référentiel géotechnique contractuel.'],
      ['Comment présentez-vous un risque à un comité de direction ?', 'Par la cause, l’événement et la conséquence chiffrée (EMV, jours), l’action proposée avec son coût et le risque résiduel attendu.'],
    ],
  },
  practical_case: {
    title: 'Cas pratique — Faut-il payer des sondages complémentaires ?',
    scenario: 'Un risque de pieux plus longs que prévu a une probabilité de 0,40 et un impact de 300 000 €. Une campagne de sondages à 35 000 € réduirait la probabilité à 0,10.',
    description: 'Comparer les deux options par les EMV.',
    resolutions: [
      "\\text{Sans sondages} : EMV = 0{,}40 \\times 300\\,000 = 120\\,000\\ €",
      "\\text{Avec sondages} : 35\\,000 + 0{,}10 \\times 300\\,000 = 65\\,000\\ €",
      "\\text{Gain attendu} : 120\\,000 - 65\\,000 = 55\\,000\\ €",
    ],
    conclusion: 'La campagne de sondages est rentable en espérance et réduit en plus la variance du coût du projet.',
  },
  summary: {
    content: `### La gestion des risques en 5 points
1. Risque = événement incertain × impact sur les objectifs.
2. Criticité $C = P \\times I$ ; EMV $= p \\times I_€$.
3. Traitement : éviter, réduire, transférer, accepter.
4. PERT : $T_e = (a + 4m + b)/6$, $\\sigma = (b - a)/6$.
5. Registre vivant, propriétaire par risque, revue régulière.`,
  },
  key_points: {
    points: [
      'C = P × I',
      'EMV = p × impact',
      'Provision ≈ Σ EMV',
      'T_e = (a + 4m + b)/6',
      'Un propriétaire par risque',
    ],
  },
  self_assessment: {
    objectives: [
      'Je sais construire un registre des risques',
      'Je sais calculer criticité et EMV',
      'Je connais les quatre stratégies de traitement',
      'Je sais calculer une probabilité de délai par PERT',
      "J'ai réussi le quiz avec au moins 2 bonnes réponses sur 3",
    ],
  },
});
