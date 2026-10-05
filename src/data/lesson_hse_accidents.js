// ── Lesson: Accidents du travail et analyse — Module 26 ──────────────────────
import { buildLesson } from './build_lesson.js';

export const lesson_hse_accidents = buildLesson({
  moduleId: 26,
  slug: 'hse_accidents',
  lessonIndex: 1,
  title: "Accidents du Travail : Indicateurs TF/TG, Arbre des Causes et Plan d'Actions Correctives",
  subtitle: 'Module 26 — Santé, Sécurité & Environnement',
  level: 'Intermédiaire',
  duration: '5h',
  tags: ['Accident du travail', 'Taux de fréquence', 'Taux de gravité', 'Arbre des causes', 'Pyramide de Bird', 'Prévention'],
}, {
  definition: {
    title: 'Définition — Mesurer et comprendre les accidents pour les prévenir',
    fr: 'Analyse des accidents du travail',
    en: 'Occupational accident analysis',
    metier: "Concerne les préventeurs, les conducteurs de travaux, les chefs de chantier, les responsables QSE et les CSSCT.",
    content: `Un **accident du travail** est un accident survenu par le fait ou à l'occasion du travail, quelle qu'en soit la cause. Le BTP figure parmi les secteurs les plus accidentogènes : chutes de hauteur, engins, manutentions, effondrements.

### Deux démarches complémentaires
- **Mesurer** par des indicateurs : taux de fréquence (TF), taux de gravité (TG), indice de fréquence (IF).
- **Analyser** chaque accident ou presque-accident par la méthode de l'**arbre des causes** (INRS), pour remonter aux causes profondes et non désigner un coupable.

### Obligations (France)
La victime informe l'employeur dans la journée ou au plus tard dans les 24 h ; l'employeur déclare l'accident à la CPAM dans les **48 heures**. Un accident grave doit conduire à une analyse et, le cas échéant, à la mise à jour du document unique (DUERP).

> 💡 Un accident n'a presque jamais une seule cause : il résulte d'une combinaison de faits (organisation, matériel, milieu, individu).`,
  },
  importance: {
    content: `- **Humain** : chaque accident grave touche une personne, sa famille, l'équipe.
- **Juridique** : l'employeur a une obligation de sécurité ; la faute inexcusable peut être engagée.
- **Économique** : cotisations AT/MP, arrêts de chantier, remplacement, image de l'entreprise.
- **Pilotage** : les indicateurs orientent les efforts de prévention.

> ⚠️ **À retenir** : analyser les presque-accidents est le moyen le plus efficace d'éviter les accidents graves.`,
  },
  applications: {
    examples: [
      ['Tableau de bord HSE', 'TF et TG mensuels par chantier et par agence.'],
      ['Chute d’un échafaudage', 'Arbre des causes et mesures correctives sur le montage.'],
      ['Presque-accident d’engin', 'Analyse et révision du plan de circulation.'],
      ['Accueil sécurité', 'Retours d’expérience présentés aux nouveaux arrivants.'],
      ['Appel d’offres', 'Indicateurs sécurité demandés par les maîtres d’ouvrage.'],
    ],
  },
  theory: {
    title: 'Théorie — Indicateurs et arbre des causes',
    content: `### 1. Indicateurs
$$TF = \\frac{N_{AT\\,avec\\,arrêt} \\times 10^6}{H_{travaillées}} \\qquad TG = \\frac{J_{perdus} \\times 10^3}{H_{travaillées}} \\qquad IF = \\frac{N_{AT} \\times 10^3}{\\text{effectif}}$$
- TF : nombre d'accidents avec arrêt par million d'heures travaillées.
- TG : nombre de jours d'arrêt par millier d'heures.
- IF : accidents pour 1 000 salariés.

### 2. Pyramide de Bird
Étude classique : pour **1** accident grave, environ **10** accidents légers, **30** accidents matériels et **600** incidents sans conséquence. Le message : agir à la base de la pyramide (presque-accidents, situations dangereuses).

### 3. Méthode de l'arbre des causes (INRS)
1. **Recueillir les faits** sur place, rapidement, sans jugement : des faits objectifs (« l'échelle n'était pas attachée »), pas d'interprétations (« il a été imprudent »).
2. **Construire l'arbre** à partir de la lésion en posant trois questions pour chaque fait :
   - Qu'a-t-il fallu pour que ce fait se produise ?
   - Est-ce nécessaire ?
   - Est-ce suffisant ?
   On obtient des **enchaînements** (une seule cause) et des **conjonctions** (plusieurs causes simultanées).
3. **Proposer des mesures** pour chaque fait, en privilégiant celles qui agissent loin de la lésion (organisation, conception).

### 4. Hiérarchie des mesures
Supprimer le danger, protections collectives, organisation, protections individuelles, formation : dans cet ordre (principes généraux de prévention, article L. 4121-2 du Code du travail).`,
  },
  formulas: {
    title: 'Formules essentielles — Indicateurs sécurité',
    formulas: [
      {
        name: 'Taux de fréquence',
        latex: "TF = \\frac{N_{AT} \\times 10^6}{H}",
        description: 'Accidents avec arrêt par million d’heures travaillées.',
        vars: [
          ['TF', 'Taux de fréquence', '-', ''],
          ['N_{AT}', 'Accidents avec arrêt', '-', 'Sur la période.'],
          ['H', 'Heures travaillées', 'h', 'Intérimaires compris si l’entreprise les suit.'],
        ],
      },
      {
        name: 'Taux de gravité',
        latex: "TG = \\frac{J \\times 10^3}{H}",
        description: 'Jours d’arrêt par millier d’heures travaillées.',
        vars: [
          ['TG', 'Taux de gravité', '-', ''],
          ['J', 'Jours calendaires d’arrêt', 'j', ''],
          ['H', 'Heures travaillées', 'h', ''],
        ],
      },
      {
        name: 'Indice de fréquence',
        latex: "IF = \\frac{N_{AT} \\times 10^3}{N_{salariés}}",
        description: 'Accidents avec arrêt pour 1 000 salariés.',
        vars: [
          ['IF', 'Indice de fréquence', '-', 'Utilisé dans les statistiques nationales.'],
          ['N_{salariés}', 'Effectif moyen', '-', ''],
        ],
      },
      {
        name: 'Heures travaillées',
        latex: "H = N_{salariés} \\times h_{an}",
        description: 'Estimation si les heures réelles ne sont pas connues.',
        vars: [
          ['h_{an}', 'Heures par salarié et par an', 'h', '≈ 1 600 à 1 700 h.'],
        ],
      },
    ],
  },
  stepbystep: {
    title: 'Calcul complet — Indicateurs annuels d’une entreprise',
    problem: "Une entreprise de 140 salariés a travaillé 230 000 heures dans l'année. Elle a eu 5 accidents avec arrêt, totalisant 160 jours d'arrêt. Calculer TF, TG et IF.",
    steps_demo: [
      { n: 1, text: "TF = 5 × 10⁶ / 230 000 = 21,7." },
      { n: 2, text: "TG = 160 × 10³ / 230 000 = 0,70." },
      { n: 3, text: "IF = 5 × 1 000 / 140 = 35,7." },
      { n: 4, text: "Interprétation : environ 22 accidents par million d'heures et 0,7 jour perdu pour 1 000 heures ; à comparer aux années précédentes et aux statistiques de la branche." },
    ],
    result_latex: "TF = \\frac{5 \\times 10^6}{230\\,000} = 21{,}7 \\qquad TG = \\frac{160 \\times 10^3}{230\\,000} = 0{,}70 \\qquad IF = \\frac{5\\,000}{140} = 35{,}7",
  },
  units: {
    table: [
      ['TF', 'AT / 10⁶ h', 'LTIFR (par 10⁶ h)', 'Aux États-Unis : TRIR par 200 000 h'],
      ['TG', 'jours / 10³ h', 'severity rate', 'Définitions variables selon les pays'],
      ['IF', 'AT / 1 000 salariés', 'incidence rate', 'Statistiques CNAM'],
      ['Heures', 'h', 'man-hours', 'Inclure les heures supplémentaires'],
      ['Délai de déclaration', '48 h', '—', 'Employeur vers la CPAM (France)'],
    ],
    note: 'Pour comparer deux entreprises, vérifiez qu’elles utilisent la même définition des indicateurs.',
  },
  hypotheses: {
    items: [
      ['info', 'Les indicateurs ne comptent que les accidents déclarés : une sous-déclaration fausse les tendances.'],
      ['info', 'La pyramide de Bird est un ordre de grandeur issu d’études anciennes, pas une loi exacte.'],
      ['warning', 'Un TF faible ne garantit pas l’absence de risque grave : les accidents mortels sont rares et peu visibles dans les moyennes.'],
      ['warning', 'Rechercher un coupable bloque le recueil des faits et empêche d’identifier les causes réelles.'],
      ['tip', 'Analysez l’accident dans les 24 à 48 heures, sur les lieux, avec les personnes concernées.'],
    ],
  },
  simple_examples: {
    examples: [
      {
        title: 'Exemple 1 : taux de fréquence d’un chantier',
        given: '2 accidents avec arrêt, 85 000 heures',
        find: 'TF',
        solution_latex: "TF = \\frac{2 \\times 10^6}{85\\,000} = 23{,}5",
        result: 'TF ≈ 23,5.',
      },
      {
        title: 'Exemple 2 : taux de gravité',
        given: '45 jours d’arrêt, 85 000 heures',
        find: 'TG',
        solution_latex: "TG = \\frac{45 \\times 10^3}{85\\,000} = 0{,}53",
        result: 'TG ≈ 0,53.',
      },
      {
        title: 'Exemple 3 : estimation des heures',
        given: '60 salariés, 1 650 h/an chacun',
        find: 'H',
        solution_latex: "H = 60 \\times 1\\,650 = 99\\,000\\ \\text{h}",
        result: '99 000 heures.',
      },
    ],
  },
  real_examples: {
    title: 'Exemple réel — Chute de hauteur depuis une trémie',
    examples: [
      {
        context: 'Chantier de bâtiment, plancher en cours de coulage',
        scenario: "Un compagnon chute de 3 m par une trémie dont le garde-corps avait été retiré pour passer des gaines. L'arbre des causes montre une conjonction : retrait non signalé, aucune procédure de remise en place, travail en fin de journée sous pression du planning, absence de plancher de recouvrement.",
        decomposition_latex: "\\text{Garde-corps retiré} \\wedge \\text{pas de recouvrement} \\wedge \\text{pression du délai} \\Rightarrow \\text{chute}",
        lesson: "Les mesures retenues agissent sur l'organisation : obturation des trémies par platelage fixé dès le coffrage, autorisation écrite pour toute dépose de protection, contrôle quotidien par le chef d'équipe.",
      },
    ],
  },
  diagrams: {
    title: 'Schéma de principe — Démarche après un accident',
    diagram_description: [
      'Secours à la victime et sécurisation de la zone',
      'Déclaration de l’accident (48 h) et information de la hiérarchie',
      'Recueil des faits sur place, sans jugement',
      'Construction de l’arbre des causes (enchaînements, conjonctions)',
      'Choix des mesures selon la hiérarchie de prévention',
      'Mise en œuvre, suivi et diffusion du retour d’expérience',
    ],
  },
  mistakes: {
    items: [
      ['Conclure à « l’erreur humaine »', 'Aucune mesure efficace', 'Rechercher ce qui a rendu l’erreur possible (organisation, matériel).'],
      ['Mélanger faits et opinions', 'Arbre faux', 'N’écrire que des faits vérifiables.'],
      ['Ne proposer que des EPI ou des consignes', 'Mesures fragiles', 'Privilégier la suppression du danger et les protections collectives.'],
    ],
  },
  tips: {
    tips: [
      'Encouragez la remontée des presque-accidents : remerciez, ne sanctionnez pas.',
      'Affichez les indicateurs sur le chantier, avec les jours sans accident.',
      'Faites participer les compagnons à l’analyse : ils connaissent le terrain.',
      'Vérifiez à 3 mois que les mesures sont toujours appliquées.',
    ],
  },
  norms: {
    norms: [
      ['Code du travail, L. 4121-1 et L. 4121-2', 'Obligation de sécurité et principes généraux de prévention.'],
      ['Code de la sécurité sociale, L. 411-1 et L. 441-2', 'Définition et déclaration de l’accident du travail.'],
      ['ISO 45001', 'Systèmes de management de la santé et de la sécurité au travail.'],
      ['Guides INRS', 'Méthode de l’arbre des causes et analyse des accidents.'],
    ],
  },
  exercises: {
    exercises: [
      {
        level: 1,
        text: 'Une agence a eu 3 accidents avec arrêt pour 150 000 heures. Calculer TF.',
        hint: 'TF = N × 10⁶ / H.',
        answer_latex: "TF = \\frac{3 \\times 10^6}{150\\,000} = 20",
        answer_text: 'TF = 20.',
      },
      {
        level: 2,
        text: 'Même agence : 96 jours d’arrêt. Calculer TG.',
        hint: 'TG = J × 10³ / H.',
        answer_latex: "TG = \\frac{96 \\times 10^3}{150\\,000} = 0{,}64",
        answer_text: 'TG = 0,64.',
      },
      {
        level: 3,
        text: 'L’an dernier : TF = 28 pour 200 000 h. Cette année : 4 accidents pour 210 000 h. Le TF a-t-il baissé de plus de 25 % ?',
        hint: 'Calculer le nouveau TF et la variation relative.',
        answer_latex: "TF = \\frac{4 \\times 10^6}{210\\,000} = 19{,}0 \\qquad \\frac{19{,}0 - 28}{28} = -32\\ \\%",
        answer_text: 'Oui : baisse de 32 %.',
      },
    ],
  },
  quiz: {
    title: 'Quiz — Accidents du travail',
    questions: [
      { q: 'Que mesure le taux de fréquence ?', options: ['Les jours perdus par 1 000 h', 'Les accidents avec arrêt par million d’heures', 'Les accidents par salarié'], correct: 1, explain: 'TF = N × 10⁶ / H.' },
      { q: 'Dans l’arbre des causes, on recueille…', options: ['Des opinions', 'Des faits', 'Des sanctions'], correct: 1, explain: 'Uniquement des faits objectifs.' },
      { q: 'Quelle mesure est la plus efficace ?', options: ['Un EPI', 'Une consigne écrite', 'La suppression du danger'], correct: 2, explain: 'Premier principe général de prévention : éviter le risque.' },
    ],
  },
  exam_questions: {
    questions: [
      'Définissez TF, TG et IF et commentez leurs limites.',
      'Décrivez les étapes de la méthode de l’arbre des causes.',
      'Expliquez la hiérarchie des mesures de prévention.',
    ],
  },
  interview_questions: {
    questions: [
      ['Un accident survient sur votre chantier : quelles sont vos premières actions ?', 'Secourir et protéger, alerter, sécuriser la zone, informer la hiérarchie, déclarer dans les délais, puis lancer l’analyse des faits dans les 24 à 48 heures.'],
      ['Comment faire baisser durablement les accidents ?', 'Par la conception des méthodes (protections collectives intégrées), la préparation des tâches, la remontée des presque-accidents, l’exemplarité de l’encadrement et le suivi des actions.'],
    ],
  },
  practical_case: {
    title: 'Cas pratique — Bilan sécurité d’un chantier de 18 mois',
    scenario: 'Chantier de 18 mois, effectif moyen 75 personnes à 140 h par mois. 4 accidents avec arrêt (82 jours au total) et 37 presque-accidents déclarés, dont 15 liés aux engins.',
    description: 'Calculer les indicateurs et orienter la prévention.',
    resolutions: [
      "H = 75 \\times 140 \\times 18 = 189\\,000\\ \\text{h}",
      "TF = \\frac{4 \\times 10^6}{189\\,000} = 21{,}2 \\qquad TG = \\frac{82 \\times 10^3}{189\\,000} = 0{,}43",
      "\\text{Presque-accidents engins} : \\frac{15}{37} = 41\\ \\% \\Rightarrow \\text{priorité au plan de circulation}",
    ],
    conclusion: 'Le plan d’action porte d’abord sur la séparation piétons-engins, les zones d’évolution balisées et les aides à la conduite (caméras, détecteurs).',
  },
  summary: {
    content: `### Les accidents en 5 points
1. TF = $N \\times 10^6 / H$ ; TG = $J \\times 10^3 / H$.
2. Déclaration employeur : 48 h (France).
3. Pyramide de Bird : agir sur les presque-accidents.
4. Arbre des causes : faits, enchaînements, conjonctions.
5. Mesures : supprimer le danger, protéger collectivement, puis organiser, former, équiper.`,
  },
  key_points: {
    points: [
      'TF = N × 10⁶ / H',
      'TG = J × 10³ / H',
      'Des faits, pas des opinions',
      'Plusieurs causes combinées',
      'Protection collective avant EPI',
    ],
  },
  self_assessment: {
    objectives: [
      'Je sais calculer TF, TG et IF',
      'Je sais construire un arbre des causes',
      'Je connais la hiérarchie des mesures de prévention',
      'Je connais les obligations de déclaration',
      "J'ai réussi le quiz avec au moins 2 bonnes réponses sur 3",
    ],
  },
});
