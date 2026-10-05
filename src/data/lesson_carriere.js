// ── Lesson: Carrière, management & consulting — Module 35 ─────────────────────
export const lesson_carriere = {
  moduleId: 35,
  slug: 'carriere',
  lessonIndex: 1,
  title: "Carrière d'Ingénieur Civil : Entretien Technique, Management d'Équipe & Consulting",
  subtitle: "Module 35 — Carrière, Entretien, Direction de Projet & Consulting",
  level: 'Tous niveaux',
  duration: '20h',
  diagramType: 'process_flow',
  tags: ['Carrière', 'Entretien', 'Méthode STAR', 'Management', 'RACI', 'Consulting', 'TJM', 'Honoraires'],

  steps: [
    {
      id: 1,
      key: 'definition',
      title: "Définition — Construire sa trajectoire d'ingénieur",
      icon: '📖',
      type: 'definition',
      fr: "Carrière, compétences managériales et activité de conseil en génie civil",
      en: 'Civil Engineering Career, Team Leadership & Consulting',
      metier: "Concerne chaque ingénieur : du premier entretien d'embauche à la direction de projet, au management d'équipe ou à la création d'une activité de conseil.",
      content: `Un ingénieur civil construit sa carrière sur trois piliers : **compétences techniques**, **compétences relationnelles** et **compréhension économique** des projets.

### Les grandes familles de métiers
- **Bureau d'études** : conception et calcul (structure, géotechnique, VRD, fluides).
- **Entreprise de travaux** : ingénieur travaux, méthodes, conducteur de travaux, directeur de projet.
- **Maîtrise d'œuvre et maîtrise d'ouvrage** : pilotage des projets pour le compte d'un client ou en tant que client.
- **Contrôle technique et expertise** : vérification, diagnostic, expertise judiciaire ou d'assurance.
- **Conseil (consulting)** : assistance à maîtrise d'ouvrage, audits, missions d'expertise ponctuelles.

### Trois compétences transversales
1. **Communiquer** : expliquer un choix technique à un non-spécialiste, écrire une note claire.
2. **Organiser** : planifier, déléguer, suivre, rendre compte.
3. **Chiffrer** : connaître le coût de son temps, de ses études et de ses décisions.

> 💡 En entretien comme en réunion de chantier, un fait chiffré convainc plus qu'un adjectif.`,
    },

    {
      id: 2,
      key: 'importance',
      title: "Pourquoi ces compétences comptent autant que la technique",
      icon: '⚠️',
      type: 'importance',
      content: `Au-delà des premières années, la progression dépend surtout de la capacité à faire travailler les autres et à défendre ses choix.

- **Recrutement** : les entretiens techniques testent le raisonnement autant que les connaissances (ordres de grandeur, hypothèses, sécurité).
- **Management** : un chef de projet obtient des résultats par son équipe ; la délégation et le feedback sont des savoir-faire.
- **Économie** : un ingénieur qui sait chiffrer son temps et ses risques négocie mieux ses honoraires et ses délais.
- **Éthique** : l'ingénieur engage sa responsabilité ; l'indépendance (contrôle technique, expertise) et l'honnêteté technique sont non négociables.

> ⚠️ **À retenir** : la confiance d'un client ou d'une équipe se perd en une seule fois, par exemple en cachant une erreur.`,
    },

    {
      id: 3,
      key: 'applications',
      title: "Situations professionnelles",
      icon: '🏗️',
      type: 'applications',
      examples: [
        { context: "Entretien d'embauche", text: "Présenter un projet réalisé avec la méthode STAR et résoudre un petit calcul au tableau en expliquant ses hypothèses." },
        { context: "Prise de poste de chef de projet", text: "Clarifier les rôles avec une matrice RACI et fixer des objectifs mesurables à chaque membre de l'équipe." },
        { context: "Réunion de chantier difficile", text: "Recadrer un sous-traitant en retard avec des faits datés et un plan de rattrapage écrit." },
        { context: "Création d'une activité de conseil", text: "Calculer son taux journalier, construire une offre et définir ses conditions de vente et d'assurance." },
        { context: "Évolution de carrière", text: "Préparer une certification (management de projet, BIM) et valoriser ses réalisations dans un CV orienté résultats." },
      ],
    },

    {
      id: 4,
      key: 'theory',
      title: "Théorie — Outils de carrière, de management et de conseil",
      icon: '📐',
      type: 'theory',
      diagramType: 'process_flow',
      content: `### 1. La méthode STAR pour répondre en entretien
- **S**ituation : le contexte (projet, contraintes).
- **T**âche : votre responsabilité précise.
- **A**ction : ce que **vous** avez fait (et pourquoi).
- **R**ésultat : l'effet mesurable (délai, coût, sécurité, qualité).

### 2. Le leadership situationnel
Le style s'adapte à l'autonomie de la personne : **diriger** (débutant), **entraîner**, **soutenir**, **déléguer** (expert autonome).

### 3. La matrice RACI
Pour chaque tâche : **R** (réalise), **A** (approuve et rend compte — une seule personne), **C** (consulté), **I** (informé).

### 4. L'économie du conseil
Un consultant vend des **jours facturables**. Sur environ 218 jours travaillés par an, une partie seulement est facturée (prospection, gestion, formation, intercontrat) : le **taux d'occupation** est souvent de 60 à 80 %.
$$TJM = \\frac{C_{annuels} + R_{visée}}{J_{ouvrés} \\times \\tau_{occupation}}$$

### 5. Les honoraires de maîtrise d'œuvre
En marché public, la mission de base de maîtrise d'œuvre (issue de la loi MOP, aujourd'hui intégrée au Code de la commande publique) enchaîne les éléments ESQ, APS, APD, PRO, ACT, VISA, DET et AOR. Les honoraires sont souvent exprimés en pourcentage du montant des travaux.`,
    },

    {
      id: 5,
      key: 'formulas',
      title: "Formules essentielles",
      icon: '🔢',
      type: 'formulas',
      diagramType: 'process_flow',
      formulas: [
        {
          name: "Taux journalier moyen (TJM) d'équilibre",
          latex: "TJM = \\frac{C_{annuels} + R_{visée}}{J_{ouvrés} \\times \\tau_{occupation}}",
          description: "Prix minimal d'une journée pour couvrir ses coûts et sa rémunération visée.",
          variables: [
            { symbol: 'TJM', name: 'Taux journalier moyen', unit: '\\text{€ HT/jour}', role: 'Prix de vente d\'une journée de travail.', category: 'Résultat' },
            { symbol: 'C_{annuels}', name: 'Coûts annuels', unit: '\\text{€}', role: 'Charges sociales, assurances (RC Pro), logiciels, déplacements, comptabilité.', category: 'Coût' },
            { symbol: 'R_{visée}', name: 'Rémunération visée', unit: '\\text{€}', role: 'Revenu annuel souhaité.', category: 'Objectif' },
            { symbol: 'J_{ouvrés}', name: 'Jours travaillés par an', unit: '\\text{jours}', role: 'Environ 218 jours (forfait jours cadre).', category: 'Temps' },
            { symbol: '\\tau_{occupation}', name: "Taux d'occupation", unit: '-', role: 'Part des jours réellement facturés (0,6 à 0,8).', category: 'Activité' },
          ],
          ruleOfThumb: "Un taux d'occupation de 100 % n'existe pas : la prospection et la gestion prennent du temps chaque semaine.",
        },
        {
          name: "Honoraires de maîtrise d'œuvre",
          latex: "H = t \\times M_{travaux}",
          description: "Honoraires exprimés en pourcentage du montant hors taxes des travaux, puis répartis entre les éléments de mission.",
          variables: [
            { symbol: 'H', name: 'Honoraires', unit: '\\text{€ HT}', role: 'Rémunération totale de la mission.', category: 'Résultat' },
            { symbol: 't', name: "Taux d'honoraires", unit: '\\%', role: 'Dépend de la complexité de l\'ouvrage et de l\'étendue de la mission.', category: 'Contrat' },
            { symbol: 'M_{travaux}', name: 'Montant des travaux', unit: '\\text{€ HT}', role: 'Coût prévisionnel puis réel des travaux.', category: 'Projet' },
          ],
        },
        {
          name: "Taux de marge d'une affaire",
          latex: "m = \\frac{CA - C}{CA}",
          description: "Part du chiffre d'affaires qui reste après déduction des coûts de l'affaire.",
          variables: [
            { symbol: 'm', name: 'Taux de marge', unit: '\\%', role: 'Indicateur de rentabilité de l\'affaire.', category: 'Résultat' },
            { symbol: 'CA', name: "Chiffre d'affaires", unit: '\\text{€ HT}', role: 'Montant facturé au client.', category: 'Recette' },
            { symbol: 'C', name: "Coûts de l'affaire", unit: '\\text{€ HT}', role: 'Main-d\'œuvre, sous-traitance, frais.', category: 'Coût' },
          ],
        },
        {
          name: "Retour sur investissement d'une formation",
          latex: "ROI = \\frac{G - I}{I}",
          description: "Compare le gain obtenu (temps gagné, missions nouvelles) au coût de la formation.",
          variables: [
            { symbol: 'ROI', name: 'Retour sur investissement', unit: '-', role: 'Positif si le gain dépasse le coût.', category: 'Résultat' },
            { symbol: 'G', name: 'Gain', unit: '\\text{€}', role: 'Valeur du temps gagné ou du chiffre d\'affaires supplémentaire.', category: 'Recette' },
            { symbol: 'I', name: 'Investissement', unit: '\\text{€}', role: 'Coût de la formation et du temps passé.', category: 'Coût' },
          ],
        },
      ],
    },

    {
      id: 6,
      key: 'stepbystep',
      title: "Calcul complet — Fixer son TJM d'ingénieur indépendant",
      icon: '🔬',
      type: 'stepbystep',
      problem: "Un ingénieur structure s'installe en indépendant. Il vise une rémunération de 60 000 € par an et estime ses coûts annuels à 30 000 € (cotisations, assurance RC Pro, logiciels, véhicule, comptabilité). Il travaille 218 jours par an avec un taux d'occupation de 70 %. Calculer son TJM d'équilibre.",
      steps_demo: [
        { n: 1, text: "Besoin annuel : 60 000 + 30 000 = 90 000 €." },
        { n: 2, text: "Jours facturables : 218 × 0,70 = 152,6 jours." },
        { n: 3, text: "TJM d'équilibre : 90 000 / 152,6 = 590 € HT par jour." },
        { n: 4, text: "Comparer au marché local pour ce profil et cette expertise." },
        { n: 5, text: "Ajouter une marge de sécurité (périodes creuses, impayés) : viser par exemple 650 € HT." },
        { n: 6, text: "Vérifier l'effet d'un taux d'occupation de 60 % : 90 000 / 130,8 = 688 € : le taux d'occupation est le premier risque." },
      ],
      result_latex: "TJM = \\frac{60\\,000 + 30\\,000}{218 \\times 0{,}70} = \\frac{90\\,000}{152{,}6} = 590\\ \\text{€ HT/jour}",
    },

    {
      id: 7,
      key: 'units',
      title: "Repères économiques",
      icon: '📏',
      type: 'units',
      table: [
        { grandeur: "Jours travaillés (forfait jours)", si: "≈ 218 jours/an", imperial: "-", conversion: "Hors week-ends, jours fériés et congés" },
        { grandeur: "Taux d'occupation d'un consultant", si: "60 à 80 %", imperial: "-", conversion: "Jours facturés / jours travaillés" },
        { grandeur: "Unité de prix d'une prestation", si: "€ HT / jour", imperial: "USD / day", conversion: "TVA ajoutée à la facturation" },
        { grandeur: "Honoraires de maîtrise d'œuvre", si: "% du montant HT des travaux", imperial: "-", conversion: "Selon complexité et contenu de la mission" },
        { grandeur: "Taux de marge", si: "%", imperial: "-", conversion: "m = (CA − C) / CA" },
      ],
      note: "Les ordres de grandeur de taux et d'honoraires varient fortement selon la région, l'expertise et le type de client : renseignez-vous auprès des fédérations professionnelles et de votre réseau avant de fixer vos prix.",
    },

    {
      id: 8,
      key: 'hypotheses',
      title: "Principes de conduite professionnelle",
      icon: '📋',
      type: 'hypotheses',
      items: [
        { type: 'info', text: "Un CV d'ingénieur met en avant des réalisations mesurables (ouvrage, montant, rôle, résultat) plutôt qu'une liste de tâches." },
        { type: 'info', text: "Dans une matrice RACI, chaque tâche a un seul « A » : sinon personne n'est vraiment responsable." },
        { type: 'warning', text: "Un consultant doit être assuré en responsabilité civile professionnelle avant toute mission et définir clairement le périmètre de sa prestation par écrit." },
        { type: 'warning', text: "Ne jamais signer une note de calcul ou un avis que l'on n'a pas vérifié soi-même." },
        { type: 'tip', text: "Après chaque projet, notez trois chiffres (délai, coût, résultat) : ils nourriront votre CV et vos entretiens." },
      ],
    },

    {
      id: 9,
      key: 'simple_examples',
      title: "Exemples guidés",
      icon: '✏️',
      type: 'examples_simple',
      examples: [
        {
          title: "Exemple 1 : honoraires d'une mission",
          given: "Travaux estimés à 2,5 M€ HT, taux d'honoraires 9 %",
          find: "Le montant des honoraires",
          solution_latex: "H = 0{,}09 \\times 2\\,500\\,000 = 225\\,000\\ \\text{€ HT}",
          result: "225 000 € HT, à répartir entre les éléments de mission selon le contrat.",
        },
        {
          title: "Exemple 2 : marge d'une affaire",
          given: "Chiffre d'affaires 1,2 M€ HT, coûts 1,05 M€ HT",
          find: "Le taux de marge",
          solution_latex: "m = \\frac{1{,}20 - 1{,}05}{1{,}20} = 12{,}5\\,\\%",
          result: "12,5 % de marge.",
        },
        {
          title: "Exemple 3 : réponse STAR",
          given: "Question : « Parlez-moi d'une difficulté technique que vous avez résolue »",
          find: "Une réponse structurée",
          result: "S : radier de 1,2 m coulé en été ; T : maîtriser la fissuration thermique ; A : ciment CEM III, coulage de nuit et sondes de température ; R : écart de température maintenu sous 20 °C, aucune fissure traversante.",
        },
      ],
    },

    {
      id: 10,
      key: 'real_examples',
      title: "Exemple réel — Reprendre une équipe en difficulté",
      icon: '🏢',
      type: 'examples_real',
      diagramType: 'process_flow',
      examples: [
        {
          context: "Chef de projet nommé en cours d'opération, chantier en retard de six semaines",
          scenario: "Les rôles sont flous : deux personnes valident les commandes et personne ne suit les plans d'exécution. Le nouveau chef de projet établit une matrice RACI, fixe un point hebdomadaire de 30 minutes et un tableau de bord de cinq indicateurs.",
          decomposition_latex: "\\text{Rôles clarifiés (RACI)} + \\text{rituels courts} + \\text{indicateurs partagés} \\Rightarrow \\text{retard ramené à 2 semaines en 3 mois}",
          lesson: "Avant de demander plus d'efforts à une équipe, clarifiez qui décide et qui fait. Une organisation claire libère souvent plus de temps que des heures supplémentaires.",
        },
      ],
    },

    {
      id: 11,
      key: 'diagrams',
      title: "Schéma de principe — Les étapes d'une carrière",
      icon: '📊',
      type: 'interactive_diagram',
      diagramType: 'process_flow',
      description: "Une progression type, avec les compétences à acquérir à chaque étape.",
      diagram_description: [
        "Ingénieur débutant : maîtriser les outils, les normes et les ordres de grandeur",
        "Ingénieur confirmé : piloter un lot ou une étude complète, encadrer un projeteur",
        "Chef de projet : planifier, chiffrer, coordonner les acteurs, gérer le client",
        "Manager : recruter, faire progresser, déléguer, arbitrer",
        "Expert ou consultant : valoriser une spécialité, vendre et défendre ses missions",
      ],
    },

    {
      id: 12,
      key: 'mistakes',
      title: "Erreurs fréquentes",
      icon: '⛔',
      type: 'mistakes',
      items: [
        {
          mistake: "Raconter son projet en « nous » sans dire ce que l'on a fait soi-même",
          trap: "Le recruteur ne parvient pas à évaluer votre contribution",
          fix: "Utiliser la méthode STAR et décrire précisément vos actions et leur résultat chiffré.",
        },
        {
          mistake: "Fixer son TJM en divisant le salaire visé par 218 jours",
          trap: "Oublier les coûts et le temps non facturé",
          fix: "Intégrer les coûts annuels et un taux d'occupation réaliste (60 à 80 %).",
        },
        {
          mistake: "Déléguer une tâche sans définir le résultat attendu",
          trap: "« Regarde le dossier des fondations »",
          fix: "Préciser le livrable, l'échéance, les moyens et le point de contrôle intermédiaire.",
        },
      ],
    },

    {
      id: 13,
      key: 'tips',
      title: "Astuces de carrière",
      icon: '💡',
      type: 'tips',
      tips: [
        "Préparez trois histoires STAR solides (une réussite technique, une difficulté humaine, une erreur corrigée) : elles répondent à la plupart des questions d'entretien.",
        "En entretien technique, annoncez vos hypothèses avant de calculer et vérifiez l'ordre de grandeur du résultat à voix haute.",
        "Entretenez votre réseau : anciens collègues, écoles, fédérations professionnelles, conférences.",
        "Formez-vous chaque année sur un sujet : nouvelles normes, BIM, programmation, management.",
      ],
    },

    {
      id: 14,
      key: 'norms',
      title: "Références utiles",
      icon: '📜',
      type: 'norms',
      norms: [
        { code: "Code de la commande publique, livre IV", description: "Dispositions issues de la loi MOP : maîtrise d'ouvrage publique et éléments de mission de maîtrise d'œuvre." },
        { code: "Commission des titres d'ingénieur (CTI)", description: "Habilitation des écoles délivrant le titre d'ingénieur diplômé en France." },
        { code: "NF ISO 21502", description: "Management de projet : lignes directrices pour la conduite des projets." },
        { code: "PMBOK (PMI) / PRINCE2", description: "Référentiels internationaux de management de projet et certifications associées." },
      ],
    },

    {
      id: 15,
      key: 'exercises',
      title: "Exercices d'application",
      icon: '✍️',
      type: 'exercises',
      exercises: [
        {
          id: 'ex_car_1',
          number: 1,
          difficulty: 'Facile',
          text: "Une affaire facture 480 000 € HT pour 432 000 € HT de coûts. Calculer le taux de marge.",
          hint: "m = (CA − C) / CA.",
          answer_latex: "m = \\frac{480\\,000 - 432\\,000}{480\\,000} = 10\\,\\%",
          answer_text: "Marge de 10 %.",
        },
        {
          id: 'ex_car_2',
          number: 2,
          difficulty: 'Moyen',
          text: "Une consultante vise 55 000 € de rémunération pour 25 000 € de coûts annuels, sur 218 jours avec 65 % d'occupation. Calculer son TJM d'équilibre.",
          hint: "Jours facturables = 218 × 0,65.",
          answer_latex: "TJM = \\frac{55\\,000 + 25\\,000}{218 \\times 0{,}65} = \\frac{80\\,000}{141{,}7} = 565\\ \\text{€ HT/jour}",
          answer_text: "TJM d'équilibre ≈ 565 € HT par jour.",
        },
        {
          id: 'ex_car_3',
          number: 3,
          difficulty: 'Difficile',
          text: "Établissez la matrice RACI de la tâche « validation des plans d'exécution de ferraillage » pour un chantier de bâtiment : bureau d'études de l'entreprise, conducteur de travaux, maîtrise d'œuvre, contrôleur technique, chef de chantier.",
          hint: "Un seul A ; le contrôleur technique donne un avis.",
          answer_text: "R : bureau d'études de l'entreprise (produit et corrige les plans) ; A : conducteur de travaux (approuve la diffusion pour l'entreprise) ; C : maîtrise d'œuvre (visa) et contrôleur technique (avis) ; I : chef de chantier (reçoit les plans validés pour exécution).",
        },
      ],
    },

    {
      id: 16,
      key: 'corrections',
      title: "Corrections détaillées",
      icon: '✅',
      type: 'corrections',
      note: "Les corrections figurent sous chaque exercice. Pour la matrice RACI, d'autres répartitions sont défendables tant qu'il n'y a qu'un seul « A » par tâche.",
    },

    {
      id: 17,
      key: 'quiz',
      title: "Quiz — Carrière et management",
      icon: '🎯',
      type: 'quiz',
      questions: [
        {
          id: 'q_car_1',
          question: "Que signifie le « R » de la méthode STAR ?",
          options: [
            { id: 'a', text: 'Responsabilité' },
            { id: 'b', text: 'Résultat' },
            { id: 'c', text: 'Risque' },
          ],
          correct: 'b',
          explanation: "Situation, Tâche, Action, Résultat : terminez toujours par un résultat mesurable.",
        },
        {
          id: 'q_car_2',
          question: "Dans une matrice RACI, combien de personnes peuvent être « A » pour une même tâche ?",
          options: [
            { id: 'a', text: 'Une seule' },
            { id: 'b', text: 'Deux' },
            { id: 'c', text: 'Toute l\'équipe' },
          ],
          correct: 'a',
          explanation: "Le « A » approuve et rend compte : il doit être unique pour que la responsabilité soit claire.",
        },
        {
          id: 'q_car_3',
          question: "Quel paramètre fait le plus varier le TJM d'équilibre d'un consultant ?",
          options: [
            { id: 'a', text: "Le taux d'occupation" },
            { id: 'b', text: 'La couleur du logo' },
            { id: 'c', text: 'Le nombre de cartes de visite' },
          ],
          correct: 'a',
          explanation: "Moins de jours facturés impose un TJM plus élevé pour couvrir les mêmes coûts et la même rémunération.",
        },
      ],
    },

    {
      id: 18,
      key: 'exam_questions',
      title: "Questions d'examen",
      icon: '🎓',
      type: 'exam',
      questions: [
        "Présentez les principaux métiers de l'ingénieur civil et les compétences attendues dans chacun d'eux.",
        "Expliquez le leadership situationnel et illustrez chacun des quatre styles par une situation de chantier.",
        "Construisez une offre de mission d'expertise de 20 jours : calcul du TJM, frais, conditions et périmètre.",
      ],
    },

    {
      id: 19,
      key: 'interview_questions',
      title: "Questions d'entretien",
      icon: '💼',
      type: 'interview',
      questions: [
        {
          question: "Parlez-moi d'une erreur que vous avez commise.",
          answer_hint: "Choisir une erreur réelle mais maîtrisée, expliquer comment vous l'avez détectée, corrigée et signalée, puis ce que vous avez changé dans votre méthode pour qu'elle ne se reproduise pas.",
        },
        {
          question: "Comment gérez-vous un désaccord technique avec un client ?",
          answer_hint: "J'écoute son besoin, je reformule, j'appuie ma position sur des faits (normes, calculs, coûts) et je propose des alternatives chiffrées ; je ne transige jamais sur la sécurité et je trace la décision par écrit.",
        },
      ],
    },

    {
      id: 20,
      key: 'practical_case',
      title: "Cas pratique — Chiffrer une mission de conseil",
      icon: '🔧',
      type: 'practical',
      diagramType: 'process_flow',
      scenario: "Une collectivité demande un diagnostic structurel de trois écoles, estimé à 18 jours de travail.",
      description: "Coûts annuels 30 000 €, rémunération visée 60 000 €, 218 jours, occupation 70 %. Frais de déplacement estimés à 1 200 € HT. Calculer le prix de la mission et vérifier la marge.",
      resolution_latex_1: "TJM = \\frac{90\\,000}{218 \\times 0{,}70} = 590\\ \\text{€ HT} \\quad \\Rightarrow \\quad \\text{TJM retenu} = 650\\ \\text{€ HT}",
      resolution_latex_2: "P = 18 \\times 650 + 1\\,200 = 11\\,700 + 1\\,200 = 12\\,900\\ \\text{€ HT}",
      resolution_latex_3: "m = \\frac{12\\,900 - (18 \\times 590 + 1\\,200)}{12\\,900} = \\frac{12\\,900 - 11\\,820}{12\\,900} = 8{,}4\\,\\%",
      conclusion: "Offre à 12 900 € HT, avec un périmètre écrit (trois écoles, livrables, réunions) pour éviter que des jours non prévus n'effacent la marge.",
    },

    {
      id: 21,
      key: 'summary',
      title: "Résumé",
      icon: '📋',
      type: 'summary',
      content: `### La carrière d'ingénieur en 6 points
1. **Métiers** : études, travaux, maîtrise d'œuvre et d'ouvrage, contrôle, expertise, conseil.
2. **Entretien** : méthode STAR, hypothèses annoncées, ordres de grandeur vérifiés.
3. **Management** : leadership situationnel et délégation précise.
4. **Organisation** : matrice RACI avec un seul « A » par tâche.
5. **Conseil** : $TJM = \\frac{C + R}{J \\times \\tau}$, taux d'occupation réaliste.
6. **Éthique** : responsabilité, indépendance, honnêteté technique.`,
    },

    {
      id: 22,
      key: 'key_points',
      title: "Points clés à retenir",
      icon: '⭐',
      type: 'keypoints',
      points: [
        "STAR : Situation, Tâche, Action, Résultat",
        "RACI : un seul « A » par tâche",
        "TJM = (coûts + rémunération) / jours facturables",
        "Taux d'occupation réaliste : 60 à 80 %",
        "Ne jamais signer ce qu'on n'a pas vérifié",
      ],
    },

    {
      id: 23,
      key: 'self_assessment',
      title: "Auto-évaluation",
      icon: '🏆',
      type: 'self_assessment',
      description: "Cochez les compétences acquises :",
      objectives: [
        "J'ai préparé trois réponses STAR",
        "Je sais construire une matrice RACI",
        "Je sais calculer un TJM et une marge",
        "Je connais les éléments de mission de maîtrise d'œuvre",
        "J'ai réussi les trois exercices",
      ],
    },
  ],

  quickQuiz: {
    question: "Une consultante vise 90 000 € par an (coûts compris) et facture 150 jours. Quel est son TJM d'équilibre ?",
    options: [
      { id: 'a', label: 'A) 413 € HT' },
      { id: 'b', label: 'B) 600 € HT' },
      { id: 'c', label: 'C) 900 € HT' },
    ],
    correct: 'b',
    explanation: "TJM = 90 000 / 150 = 600 € HT par jour facturé.",
  },
};
