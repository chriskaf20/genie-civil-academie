// ── Lesson: CV, lettre de motivation et recherche d'emploi — Module 35 ───────
import { buildLesson } from './build_lesson.js';

export const lesson_carriere_candidature = buildLesson({
  moduleId: 35,
  slug: 'carriere_candidature',
  lessonIndex: 1,
  title: "Candidater comme Ingénieur Civil : CV, Lettre de Motivation, Portfolio de Projets et Méthode STAR",
  subtitle: "Module 35 — Carrière d'Ingénieur Civil",
  level: 'Débutant',
  duration: '4h',
  tags: ['CV', 'Lettre de motivation', 'LinkedIn', 'Portfolio', 'STAR', 'Recherche d’emploi', 'Salaire'],
}, {
  definition: {
    title: 'Définition — Présenter ses compétences de façon convaincante',
    fr: 'Candidature et recherche d’emploi',
    en: 'Job application and career search',
    metier: "Concerne les étudiants, jeunes diplômés et ingénieurs en reconversion dans le BTP.",
    content: `Une **candidature** réussie démontre en peu de temps que vous pouvez résoudre les problèmes de l'employeur. Elle se compose de :

- un **CV** d'une page (deux au-delà de 10 ans d'expérience), clair et chiffré ;
- une **lettre ou un message de motivation** court, adapté à l'entreprise ;
- un **profil en ligne** (LinkedIn) cohérent avec le CV ;
- un **portfolio** de projets (stages, projets d'études, travaux personnels) ;
- une préparation à l'**entretien** par la méthode STAR.

### Ce que cherchent les recruteurs en génie civil
Compétences techniques (calcul, logiciels, normes), expérience de chantier ou de bureau d'études, capacité à communiquer, sens de la sécurité, mobilité.

> 💡 Un CV ne liste pas des tâches : il montre des **résultats** (« dimensionné 12 poutres précontraintes », « réduit de 8 % le métré d'acier »).`,
  },
  importance: {
    content: `- **Premier filtre** : un recruteur consacre souvent moins d'une minute à un premier tri de CV.
- **Logiciels de tri (ATS)** : de nombreuses entreprises filtrent par mots-clés.
- **Réseau** : une part importante des postes est pourvue par recommandation.
- **Négociation** : connaître sa valeur sur le marché évite de se sous-évaluer.

> ⚠️ **À retenir** : adaptez chaque candidature à l'offre ; un CV générique envoyé en masse donne peu de réponses.`,
  },
  applications: {
    examples: [
      ['Stage de fin d’études', 'CV d’une page mettant en avant projets et logiciels.'],
      ['Premier emploi en bureau d’études', 'Portfolio de notes de calcul et de modèles.'],
      ['Poste de conducteur de travaux', 'Expériences de chantier, encadrement, sécurité.'],
      ['Poste international', 'CV en anglais, codes connus (Eurocodes, ACI), mobilité.'],
      ['Reconversion', 'Mise en valeur des compétences transférables.'],
    ],
  },
  theory: {
    title: 'Théorie — Construire une candidature efficace',
    content: `### 1. Structure du CV
1. **En-tête** : nom, titre visé (« Ingénieur structure junior »), coordonnées, lien LinkedIn.
2. **Résumé** de 2 à 3 lignes : spécialité, atouts, objectif.
3. **Expériences** : poste, entreprise, dates, 3 à 4 réalisations chiffrées avec verbes d'action.
4. **Formation** : diplôme, école, spécialisation, projet de fin d'études.
5. **Compétences techniques** : logiciels (Robot, ETABS, Revit, AutoCAD, Python), normes, langues.

### 2. La lettre ou le message de motivation
Trois paragraphes : **vous** (ce que je sais de l'entreprise et de ses projets), **moi** (ce que j'apporte, avec un exemple), **nous** (proposition d'entretien). 15 à 20 lignes maximum.

### 3. Le portfolio
Pour chaque projet : contexte, votre rôle, méthodes et outils, résultat chiffré, illustration (schéma, capture de modèle). Respectez la confidentialité des employeurs.

### 4. La méthode STAR pour l'entretien
- **S**ituation : le contexte ;
- **T**âche : votre objectif ;
- **A**ction : ce que **vous** avez fait ;
- **R**ésultat : le résultat chiffré et ce que vous en avez appris.

### 5. Suivre sa recherche
Tenir un tableau des candidatures (date, entreprise, contact, relance) et mesurer ses taux de réponse pour ajuster la méthode.`,
  },
  formulas: {
    title: 'Indicateurs utiles — Piloter sa recherche',
    formulas: [
      {
        name: 'Taux de réponse',
        latex: "\\tau_r = \\frac{N_{réponses\\ positives}}{N_{candidatures}} \\times 100",
        description: 'Mesure l’efficacité des candidatures.',
        vars: [
          ['N_{réponses\\ positives}', 'Entretiens obtenus', '-', ''],
          ['N_{candidatures}', 'Candidatures envoyées', '-', ''],
        ],
        rule: 'Un taux très faible indique un CV ou un ciblage à revoir.',
      },
      {
        name: 'Correspondance de mots-clés',
        latex: "\\tau_m = \\frac{N_{mots\\text{-}clés\\ présents}}{N_{mots\\text{-}clés\\ de\\ l'offre}} \\times 100",
        description: 'Aide à passer les filtres automatiques (ATS).',
        vars: [
          ['N', 'Nombre de mots-clés', '-', 'Compétences, logiciels, normes de l’offre.'],
        ],
      },
      {
        name: 'Salaire net estimé (France, cadre)',
        latex: "S_{net} \\approx 0{,}77 \\times S_{brut}",
        description: 'Ordre de grandeur avant impôt sur le revenu.',
        vars: [
          ['S_{brut}', 'Salaire brut', '€', ''],
          ['S_{net}', 'Salaire net avant impôt', '€', 'Le taux exact dépend du statut et des cotisations.'],
        ],
      },
      {
        name: 'Salaire annuel',
        latex: "S_{annuel} = S_{mensuel} \\times n_{mois} + \\text{primes}",
        description: 'Comparer des offres sur une base annuelle.',
        vars: [
          ['n_{mois}', 'Nombre de mois versés', '-', '12, 13 ou plus selon la convention.'],
        ],
      },
    ],
  },
  stepbystep: {
    title: 'Exemple complet — Transformer une ligne de CV',
    problem: "Ligne initiale : « Stage en bureau d'études : calculs de structure et plans. » La rendre convaincante pour un poste d'ingénieur structure junior.",
    steps_demo: [
      { n: 1, text: "Préciser le contexte : bâtiment de logements R+6 en béton armé, bureau d'études de 25 personnes." },
      { n: 2, text: "Utiliser un verbe d'action : « Dimensionné », « Modélisé », « Vérifié »." },
      { n: 3, text: "Ajouter les outils et normes : Robot Structural Analysis, Eurocodes 2 et 8." },
      { n: 4, text: "Chiffrer le résultat : « 18 voiles et 40 poutres », « 6 % d'acier économisé après optimisation »." },
      { n: 5, text: "Résultat : « Modélisé sous Robot un bâtiment R+6 en béton armé et dimensionné 18 voiles et 40 poutres (EC2/EC8) ; optimisation des sections réduisant de 6 % la quantité d'acier. »" },
    ],
    result_latex: "\\text{Contexte} + \\text{verbe d'action} + \\text{outils} + \\text{résultat chiffré}",
  },
  units: {
    table: [
      ['Longueur du CV', '1 page', '1 page (résumé)', '2 pages au-delà de 10 ans d’expérience'],
      ['Lettre', '15–20 lignes', '250–300 mots', 'Message court par e-mail'],
      ['Salaire', '€ brut annuel', 'USD gross annual', 'Comparer sur la même base'],
      ['Délai de relance', '7–10 jours', '1–2 weeks', 'Une relance courtoise'],
      ['Portfolio', '3–6 projets', '3–6 projects', 'Qualité plutôt que quantité'],
    ],
    note: 'Dans les pays anglo-saxons, on évite souvent la photo, l’âge et la situation familiale sur le CV.',
  },
  hypotheses: {
    items: [
      ['info', 'Les usages varient selon les pays : vérifiez les pratiques locales (photo, longueur, langue).'],
      ['info', 'Le rapport net/brut de 0,77 est un ordre de grandeur pour un cadre du secteur privé en France.'],
      ['warning', 'Ne publiez jamais de plans ou notes confidentiels d’un employeur dans votre portfolio sans autorisation.'],
      ['warning', 'Toute information du CV peut être vérifiée en entretien : restez exact.'],
      ['tip', 'Faites relire votre CV par un ingénieur en poste et par une personne extérieure au métier.'],
    ],
  },
  simple_examples: {
    examples: [
      {
        title: 'Exemple 1 : taux de réponse',
        given: '40 candidatures, 3 entretiens',
        find: 'τ_r',
        solution_latex: "\\tau_r = \\frac{3}{40} \\times 100 = 7{,}5\\ \\%",
        result: '7,5 % : correct pour des candidatures spontanées, à améliorer pour des réponses à offres.',
      },
      {
        title: 'Exemple 2 : mots-clés',
        given: 'Offre : 10 mots-clés ; CV : 6 présents',
        find: 'τ_m',
        solution_latex: "\\tau_m = \\frac{6}{10} \\times 100 = 60\\ \\%",
        result: 'Ajouter les compétences réellement maîtrisées qui manquent (par exemple « EC8 », « ETABS »).',
      },
      {
        title: 'Exemple 3 : comparer deux offres',
        given: 'A : 3 100 € × 12 + 2 000 € de prime ; B : 2 950 € × 13',
        find: 'Salaire annuel brut',
        solution_latex: "A = 37\\,200 + 2\\,000 = 39\\,200\\ € \\qquad B = 38\\,350\\ €",
        result: 'A est supérieure de 850 € par an ; comparer aussi télétravail, véhicule, formation, perspectives.',
      },
    ],
  },
  real_examples: {
    title: 'Exemple réel — Une candidature qui se démarque',
    examples: [
      {
        context: 'Jeune diplômé visant un bureau d’études en ouvrages d’art',
        scenario: "Au lieu d'envoyer 80 CV identiques, le candidat a sélectionné 12 entreprises, étudié un projet récent de chacune, adapté son résumé et cité ce projet dans un message court. Il a joint un portfolio de 4 pages présentant son projet de fin d'études (pont-dalle précontraint) avec ses calculs clés. Il a obtenu 5 entretiens et 2 offres.",
        decomposition_latex: "\\tau_r = \\frac{5}{12} = 42\\ \\% \\quad \\text{contre quelques \\% pour une candidature générique}",
        lesson: "La personnalisation et la preuve concrète des compétences (portfolio) sont plus efficaces que le volume.",
      },
    ],
  },
  diagrams: {
    title: 'Schéma de principe — Processus de recherche d’emploi',
    diagram_description: [
      'Définir la cible : métier, secteur, région, type d’entreprise',
      'Préparer CV, profil LinkedIn et portfolio',
      'Rechercher et sélectionner les entreprises et offres',
      'Candidature personnalisée et activation du réseau',
      'Entretiens préparés avec la méthode STAR',
      'Comparaison des offres, négociation et décision',
    ],
  },
  mistakes: {
    items: [
      ['CV de deux pages pour un junior', 'Lecture survolée', 'Une page, l’essentiel en haut.'],
      ['Lister des tâches sans résultat', 'Profil peu différencié', 'Verbes d’action et chiffres.'],
      ['Lettre générique', 'Peu de réponses', 'Citer un projet ou une valeur de l’entreprise.'],
    ],
  },
  tips: {
    tips: [
      'Nommez votre fichier « Prenom_Nom_CV_Ingenieur_Structure.pdf ».',
      'Préparez 5 histoires STAR couvrant technique, équipe, problème, sécurité et échec.',
      'Renseignez-vous sur les grilles salariales (conventions collectives, enquêtes d’écoles).',
      'Remerciez par un message court après chaque entretien.',
    ],
  },
  norms: {
    norms: [
      ['Code du travail, L. 1221-6', 'Les informations demandées au candidat doivent avoir un lien direct avec le poste (France).'],
      ['RGPD', 'Protection des données personnelles des candidats.'],
      ['Conventions collectives du BTP (ETAM, cadres)', 'Grilles de classification et minima salariaux.'],
      ['Code de déontologie des ingénieurs (IESF)', 'Principes éthiques de la profession.'],
    ],
  },
  exercises: {
    exercises: [
      {
        level: 1,
        text: 'Calculer le salaire net approximatif d’une offre à 3 200 € brut mensuel (cadre, France).',
        hint: 'Net ≈ 0,77 × brut.',
        answer_latex: "0{,}77 \\times 3\\,200 = 2\\,464\\ €",
        answer_text: 'Environ 2 460 € net avant impôt.',
      },
      {
        level: 2,
        text: 'Réécrire « Suivi de chantier » en ligne de CV à fort impact.',
        hint: 'Contexte + verbe + outils + résultat.',
        answer_latex: "\\text{Contexte} + \\text{action} + \\text{résultat}",
        answer_text: 'Exemple : « Suivi l’exécution du gros œuvre d’un collège de 6 000 m² (12 compagnons) ; planning hebdomadaire et contrôle qualité ayant permis de livrer le clos-couvert avec 2 semaines d’avance. »',
      },
      {
        level: 3,
        text: 'Construire une réponse STAR à : « Parlez-moi d’un problème technique que vous avez résolu. »',
        hint: 'Situation, Tâche, Action, Résultat.',
        answer_latex: "S \\rightarrow T \\rightarrow A \\rightarrow R",
        answer_text: 'S : un modèle donnait des flèches anormales ; T : identifier la cause avant la remise de la note ; A : contrôle de l’équilibre, découverte d’appuis mal définis, correction et calcul manuel de contrôle ; R : note remise à temps, procédure de vérification adoptée par l’équipe.',
      },
    ],
  },
  quiz: {
    title: 'Quiz — Candidature',
    questions: [
      { q: 'Quelle longueur de CV pour un jeune diplômé ?', options: ['1 page', '3 pages', '5 pages'], correct: 0, explain: 'Une page, synthétique.' },
      { q: 'Que signifie le R de STAR ?', options: ['Rôle', 'Résultat', 'Recherche'], correct: 1, explain: 'Situation, Tâche, Action, Résultat.' },
      { q: 'Quel élément rend une ligne de CV convaincante ?', options: ['Un résultat chiffré', 'Un adjectif', 'Une police originale'], correct: 0, explain: 'Les résultats mesurables convainquent.' },
    ],
  },
  exam_questions: {
    questions: [
      'Présentez la structure d’un CV d’ingénieur civil junior.',
      'Expliquez la méthode STAR et donnez un exemple.',
      'Comment organiser et mesurer l’efficacité d’une recherche d’emploi ?',
    ],
  },
  interview_questions: {
    questions: [
      ['Présentez-vous en deux minutes.', 'Formation et spécialité, une ou deux expériences marquantes avec un résultat, compétences clés, et pourquoi ce poste dans cette entreprise.'],
      ['Quelles sont vos prétentions salariales ?', 'Je donne une fourchette fondée sur les grilles du marché et de l’expérience, en précisant que l’ensemble du package (formation, perspectives, avantages) compte.'],
    ],
  },
  practical_case: {
    title: 'Cas pratique — Plan de recherche sur 8 semaines',
    scenario: 'Jeune diplômé en génie civil visant un poste en bureau d’études structure dans deux régions.',
    description: 'Établir un plan de recherche mesurable.',
    resolutions: [
      "\\text{Semaines 1–2} : \\text{CV, LinkedIn, portfolio, liste de 30 entreprises cibles}",
      "\\text{Semaines 3–6} : 6 \\text{ candidatures personnalisées par semaine} \\Rightarrow 24 \\text{ candidatures}",
      "\\text{Objectif} : \\tau_r \\geq 15\\ \\% \\Rightarrow \\geq 4 \\text{ entretiens} ; \\ \\text{semaines 7–8 : entretiens et décision}",
    ],
    conclusion: 'Le suivi hebdomadaire des indicateurs permet d’ajuster le CV ou le ciblage si le taux de réponse reste faible.',
  },
  summary: {
    content: `### La candidature en 5 points
1. CV d'une page, résultats chiffrés, mots-clés de l'offre.
2. Lettre courte : vous, moi, nous.
3. Portfolio de 3 à 6 projets.
4. Entretien : méthode STAR.
5. Suivre ses indicateurs et comparer les offres sur une base annuelle.`,
  },
  key_points: {
    points: [
      'Résultats chiffrés',
      'Personnaliser chaque candidature',
      'Portfolio de projets',
      'STAR : Situation, Tâche, Action, Résultat',
      'Comparer les offres en annuel',
    ],
  },
  self_assessment: {
    objectives: [
      'Je sais rédiger un CV d’ingénieur efficace',
      'Je sais écrire une lettre de motivation courte',
      'Je sais préparer des réponses STAR',
      'Je sais comparer des offres d’emploi',
      "J'ai réussi le quiz avec au moins 2 bonnes réponses sur 3",
    ],
  },
});
