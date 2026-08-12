// ── Lesson: Management de Projet, PERT/CPM & Earned Value — Module 33 ─────────
export const lesson_management = {
  moduleId: 33,
  slug: 'management',
  lessonIndex: 1,
  title: "Management de Projet, Méthode PERT/CPM, Earned Value & Direction de Travaux",
  subtitle: "Module 33 — Management de Projet & Direction de Travaux",
  level: 'Intermédiaire',
  duration: '35h',
  diagramType: 'bridge_structure',
  tags: ['Management', 'PERT', 'CPM', 'Chemin Critique', 'Earned Value', 'EVM', 'CPI', 'SPI', 'Primavera'],

  steps: [
    {
      id: 1,
      key: 'definition',
      title: "Définition — Le Management de Projet de Génie Civil",
      icon: '📖',
      type: 'definition',
      fr: 'Planning PERT/CPM, Chemin Critique, Valeur Acquise (EVM) & Management des Risques',
      en: 'Project Management, PERT/CPM, Earned Value Management (EVM)',
      metier: "Pratiquée par les directeurs de projets, chefs de projet BTP, ingénieurs planification (Plannificateurs Primavera P6 / MS Project), et responsables OPC.",
      content: `Le **management de projet de génie civil** est la discipline d'organisation, de planification et de suivi permettant de piloter le triptyque fondamental **Coût - Délai - Qualité** tout au long de la vie de l'ouvrage.

### Les 4 grands outils du Directeur de Projet :
1. **La Décomposition Arborescente WBS (Work Breakdown Structure)** : Découpage arborescent du projet en lots, sous-lots et tâches élémentaires mesurables.
2. **Le Réseau PERT & Méthode du Chemin Critique (CPM)** : Algorithme de calcul des dates au plus tôt, dates au plus tard et détection des **tâches à marge nulle ($MT = 0$)** dictant la durée totale du chantier.
3. **Le Management de la Valeur Acquise (EVM - Earned Value)** : Système d'indicateurs de performance financière et temporelle ($CPI$, $SPI$) comparant le budget prévu, le travail réellement effectué et les dépenses réelles.
4. **La Gestion des Risques (ISO 31000)** : Identification, cartographie et plans de mitigation des risques géotechniques, climatiques et financiers.

> 💡 **Le Chemin Critique (Critical Path)** : C'est la séquence continue de tâches à marge totale nulle qui détermine la durée minimale incompressible du projet. Tout retard sur une tâche critique décale immédiatement la date de livraison finale !`,
    },

    {
      id: 2,
      key: 'importance',
      title: "Pourquoi le pilotage PERT & EVM conditionne la rentabilité",
      icon: '⚠️',
      type: 'importance',
      content: `Un projet de génie civil sans planification rigoureuse dérive immédiatement vers des pénalités de retard colossales et des dépassements de budget destructeurs.

- **Anticipation des goulots d'étranglement** : Le réseau PERT identifie 3 mois à l'avance les matériels critiques (grue, banchage, tunnelier) devant être réservés.
- **Détection précoce des dérives financières (EVM)** : Le $CPI$ (Cost Performance Index) alerte dès que 10% du budget est consommé si l'avancement réel n'est que de 8%.
- **Arbitrage des moyens de chantier (Crashing / Fast-tracking)** : Savoir s'il faut ajouter une équipe de nuit ou doubler un matériel pour rattraper un retard sur le chemin critique.

> ⚠️ **Règle d'or** : "Ne jamais ajuster le planning en coupant les marges libres sans l'accord des conducteurs de travaux ! Mettre à jour les avancements réels au moins toutes les 2 semaines."`,
    },

    {
      id: 3,
      key: 'applications',
      title: "Applications terrain — Outils de planification & Contrôle",
      icon: '🏗️',
      type: 'applications',
      examples: [
        {
          context: "Planification sous Primavera P6 / MS Project",
          text: "Création du réseau PERT/Gantt de 1 500 tâches pour un tronçon de métro avec liaisons Fin-Début, Début-Début et contraintes de ressources.",
        },
        {
          context: "Suivi Avancement par la Valeur Acquise (EVM)",
          text: "Calcul mensuel de la Valeur Planifiée ($PV$), Valeur Acquise ($EV$) et Coût Réel ($AC$) pour présenter la courbe en S au comité de direction.",
        },
        {
          context: "Ordonnancement, Pilotage & Coordination (OPC)",
          text: "Coordination hebdomadaire des 12 corps d'état secondaires sur un chantier de tour tertiaire pour éviter les interférences de second œuvre.",
        },
        {
          context: "Lissage et Équilibrage des Ressources (Resource Leveling)",
          text: "Ajustement des dates au plus tard des tâches non critiques pour plafonner l'effectif maximal à 60 ouvriers sur le chantier.",
        },
        {
          context: "Analyse des Réclamations de Retard (Delay Claim)",
          text: "Démonstration juridique de l'impact d'une intempérie exceptionnelle sur le chemin critique pour exonérer l'entreprise des pénalités de retard.",
        },
      ],
    },

    {
      id: 4,
      key: 'theory',
      title: "Théorie — Réseau PERT, Marges & Indicateurs EVM",
      icon: '📐',
      type: 'theory',
      diagramType: 'bridge_structure',
      content: `### 1. Calcul du Réseau PERT & Des Marges

Pour chaque tâche $i \\to j$ de durée $d_{ij}$ :
- **Date au plus tôt de fin** : $t_{e,j} = \\max_{i} (t_{e,i} + d_{ij})$.
- **Date au plus tard de début** : $t_{l,i} = \\min_{j} (t_{l,j} - d_{ij})$.
- **Marge Totale (MT)** : Retard maximal qu'une tâche peut subir sans décaler la fin du projet :

$$MT_i = t_{l,i} - t_{e,i} = t_{l,j} - t_{e,i} - d_{ij}$$

- **Marge Libre (ML)** : Retard maximal sans décaler la date au plus tôt de la tâche suivante :

$$ML_i = \\min_{j} (t_{e,j}) - t_{e,i} - d_{ij}$$

### 2. Le Management de la Valeur Acquise (EVM)

- **Planned Value ($PV$)** : Budget prévu du travail qui devait être accompli à la date $t$.
- **Earned Value ($EV$)** : Budget prévu du travail réellement accompli à la date $t$ ($EV = \\%_{\\text{avancement}} \\cdot BAC$).
- **Actual Cost ($AC$)** : Dépenses réelles comptabilisées à la date $t$.

### 3. Les Indices de Performance EVM

$$CPI = \\frac{EV}{AC} \\quad (\\text{Indice de performance des coûts : } CPI > 1 \\implies \\text{Sous-budget})\\$$
$$SPI = \\frac{EV}{PV} \\quad (\\text{Indice de performance des délais : } SPI > 1 \\implies \\text{En avance})\\$$

- **Estimation à l'Achèvement (EAC)** : $EAC = \\frac{BAC}{CPI}$.`,
    },

    {
      id: 5,
      key: 'formulas',
      title: "Formules essentielles — PERT, EVM & Pilotage",
      icon: '🔢',
      type: 'formulas',
      diagramType: 'bridge_structure',
      formulas: [
        {
          name: "Marge Totale d'une tâche (MT)",
          latex: "MT_i = t_{l,j} - t_{e,i} - d_{ij} \\quad [\\text{jours}] \\qquad (MT = 0 \\implies \\text{Tâche Critique})",
          description: "t_{l,j} = date au plus tard de l'étape suivante, t_{e,i} = date au plus tôt de l'étape de départ, d = durée.",
        },
        {
          name: "Cost Variance (Écart de Coût CV)",
          latex: "CV = EV - AC \\quad [\\text{\\euro}] \\qquad (CV > 0 \\implies \\text{Économie})",
          description: "EV = Valeur Acquise, AC = Coût Réel engagé.",
        },
        {
          name: "Schedule Variance (Écart de Délais SV)",
          latex: "SV = EV - PV \\quad [\\text{\\euro}] \\qquad (SV < 0 \\implies \\text{Retard})",
          description: "PV = Valeur Planifiée initiale.",
        },
        {
          name: "Estimation à l'Achèvement Finale (EAC)",
          latex: "EAC = \\frac{BAC}{CPI} \\quad [\\text{\\euro}]",
          description: "BAC = Budget At Completion (Budget initial total), CPI = EV / AC.",
        },
      ],
    },

    {
      id: 6,
      key: 'stepbystep',
      title: "Calcul complet — Analyse EVM et détection de dérive d'un projet de viaduc",
      icon: '🔬',
      type: 'stepbystep',
      problem: "Un projet de viaduc a un budget total BAC = 10 000 000 € HT sur 20 mois. À la fin du mois 10 : \n- La valeur planifiée initiale devait être de 50% du projet (PV = 5 000 000 €). \n- L'avancement physique réel mesuré sur le chantier est de 40% (EV = 4 000 000 €). \n- La comptabilité indique des dépenses réelles consommées AC = 4 800 000 €. \n1) Calculer l'écart de délai SV et l'écart de coût CV. 2) Calculer les indices SPI et CPI. 3) Interpréter la situation du projet. 4) Calculer l'estimation du coût final à l'achèvement EAC.",
      steps_demo: [
        { n: 1, text: "Calcul de l'écart de délai SV : SV = EV - PV = 4 000 000 € - 5 000 000 € = -1 000 000 € (Retard important)" },
        { n: 2, text: "Calcul de l'écart de coût CV : CV = EV - AC = 4 000 000 € - 4 800 000 € = -800 000 € (Dépassement de budget)" },
        { n: 3, text: "Calcul du Schedule Performance Index (SPI) : SPI = EV / PV = 4 000 000 / 5 000 000 = 0,80 (Le projet n'avance qu'à 80% du rythme prévu)" },
        { n: 4, text: "Calcul du Cost Performance Index (CPI) : CPI = EV / AC = 4 000 000 / 4 800 000 = 0,833 (Chaque euro dépense ne produit que 0,83 € de valeur)" },
        { n: 5, text: "Interprétation : Le projet est à la fois EN RETARD (SPI = 0,80) et EN DÉPASSEMENT DE BUDGET (CPI = 0,833)." },
        { n: 6, text: "Calcul du coût final estimé EAC : EAC = BAC / CPI = 10 000 000 € / 0,833 = 12 004 800 € HT (Surcoût prévisionnel de 2,0 M€ !)." },
      ],
      result_latex: "SPI = \\textbf{0{,}80} \\qquad CPI = \\textbf{0{,}833} \\qquad EAC = \\textbf{12 004 800 \\euro HT (+2{,}0 M\\euro)} \\quad \\checkmark",
    },

    {
      id: 7,
      key: 'units',
      title: "Unités & Indicateurs de Management de Projet — Tableau de référence",
      icon: '📏',
      type: 'units',
      table: [
        { grandeur: "Planned Value (PV)", si: "€ HT ou € TTC", imperial: "$ USD", conversion: "Budget prévu des travaux planifiés à la date t" },
        { grandeur: "Earned Value (EV)", si: "€ HT (EV = %avancement × BAC)", imperial: "$ USD", conversion: "Valeur budgétaire du travail réellement exécuté" },
        { grandeur: "Actual Cost (AC)", si: "€ HT", imperial: "$ USD", conversion: "Dépenses réelles comptabilisées" },
        { grandeur: "CPI (Cost Performance Index)", si: "Adimensionnel (ex: 1,05 = 5% d'économie)", imperial: "-", conversion: "CPI = EV / AC (Indicateur d'efficience financière)" },
        { grandeur: "SPI (Schedule Performance Index)", si: "Adimensionnel (ex: 0,90 = 10% de retard)", imperial: "-", conversion: "SPI = EV / PV (Indicateur de cadence temporelle)" },
      ],
      note: "⚠️ ATTENTION : Un $SPI < 1{,}0$ indique un retard financier, mais il faut toujours vérifier sur le planning **Gantt / PERT** si ce retard touche une tâche du **chemin critique** !",
    },

    {
      id: 8,
      key: 'hypotheses',
      title: "Hypothèses & règles de pilotage des plannings",
      icon: '📋',
      type: 'hypotheses',
      items: [
        { type: 'info', text: "Le calcul du chemin critique repose sur l'hypothèse de ressources illimitées. Si les ressources sont limitées (ex: 1 seule grue), effectuer un lissage de ressources." },
        { type: 'info', text: "L'avancement physique (EV) doit être mesuré sur des critères objectifs (m³ de béton coulés, tonnes d'acier posées) et non sur des impressions subjectives." },
        { type: 'warning', text: "ATTENTION : Accélération de chantier (Crashing) : N'accélérer que les tâches situées sur le CHEMIN CRITIQUE. Accélérer une tâche non critique ne réduit pas le délai du projet et gaspille de l'argent !" },
        { type: 'warning', text: "Fast-Tracking : Superposer des tâches qui devaient être successives (ex: démarrer le ferraillage avant validation complète des plans). Risque élevé d'erreurs et de reprises." },
        { type: 'tip', text: "Matrice de Risques ISO 31000 : Évaluer chaque risque par son produit $Impact \\times Probabilité$ et prévoir une réserve pour aléas de $5\\% \\text{ à } 10\\%$ du budget." },
      ],
    },

    {
      id: 9,
      key: 'simple_examples',
      title: "Exemples guidés — Marges PERT & Indicateurs CPI/SPI",
      icon: '✏️',
      type: 'examples_simple',
      examples: [
        {
          title: "Exemple 1 : Calcul de Marge Totale (MT) et Marge Libre (ML)",
          given: "Tâche B de durée d = 5 jours. Date au plus tôt de début = jour 10. Date au plus tard de début = jour 14. Date au plus tôt de la tâche suivante = jour 17",
          find: "La Marge Totale MT et la Marge Libre ML",
          solution_latex: "MT = t_l - t_e = 14 - 10 = 4 \\text{ jours} \\qquad ML = t_{e,suiv} - t_{e} - d = 17 - 10 - 5 = 2 \\text{ jours}",
          result: "MT = 4 jours (Retard max sans impacter la fin) | ML = 2 jours (Retard max sans impacter la tâche suivante).",
        },
        {
          title: "Exemple 2 : Calcul du CPI et diagnostic financier",
          given: "Budget des travaux réalisés EV = 350 000 €. Coût réel dépensé AC = 320 000 €",
          find: "Le CPI et l'interprétation",
          solution_latex: "CPI = \\frac{350\\,000}{320\\,000} = 1{,}094",
          result: "CPI = 1,094 > 1,0 → Excellente performance financière (9,4% d'économie).",
        },
        {
          title: "Exemple 3 : Estimation de la date de fin avec SPI = 0,85",
          given: "Durée initiale du projet = 20 mois. Le SPI s'est stabilisé à 0,85",
          find: "La durée finale estimée du chantier",
          solution_latex: "Dur\\acute{e}e_{estim\\acute{e}e} = \\frac{20 \\text{ mois}}{0{,}85} = 23{,}53 \\text{ mois}",
          result: "Le chantier durera 23,5 mois (Retard de 3,5 mois).",
        },
      ],
    },

    {
      id: 10,
      key: 'real_examples',
      title: "Exemple réel — Le Pilotage du Grand Paris Express",
      icon: '🏢',
      type: 'examples_real',
      diagramType: 'bridge_structure',
      examples: [
        {
          context: "Construction de 200 km de lignes de métro automatique et 68 gares (Budget 35 milliards d'euros)",
          scenario: "Utilisation d'un système de PMO centralisé sous Primavera P6 et EVM. Suivi en temps réel de l'avancement des 15 tunneliers en creusement simultané.",
          decomposition_latex: "\\text{Indicateurs EVM mensuels transmis à la Société des Grands Projets pour arbitrage des moyens}",
          lesson: "La rigueur du pilotage EVM et PERT permet d'arbitrer l'affectation des tunneliers et de limiter les dérives sur un mégaprojet de 15 ans.",
        },
      ],
    },

    {
      id: 11,
      key: 'diagrams',
      title: "Schéma d'un Réseau PERT & Courbe en S de la Valeur Acquise",
      icon: '📊',
      type: 'interactive_diagram',
      diagramType: 'bridge_structure',
      description: "Visualisez le réseau PERT avec mise en évidence du chemin critique rouge, le diagramme de Gantt avec marges libres et la courbe en S (PV, EV, AC).",
      diagram_description: [
        "Graphe PERT : Nœuds d'étapes, arcs de tâches avec durées, dates au plus tôt/tard et chemin critique rouge",
        "Courbe en S EVM : Courbes de la Valeur Planifiée PV (bleu), Valeur Acquise EV (vert) et Coût Réel AC (rouge)",
        "Matrice des Risques : Grille 5x5 d'impact et probabilité selon la norme ISO 31000",
      ],
    },

    {
      id: 12,
      key: 'mistakes',
      title: "Erreurs classiques en Management de Projet BTP",
      icon: '⛔',
      type: 'mistakes',
      items: [
        {
          mistake: "Confondre avancement financier (dépenses) et avancement physique réel",
          trap: "Dire 'le projet est avancé à 50% car nous avons dépensé 50% du budget'",
          fix: "Archiconnu ! Si vous avez dépensé 50% du budget mais coulé seulement 30% du béton, vous êtes en grave surcoût (CPI = 0,60). Toujours mesurer l'avancement physique (EV).",
        },
        {
          mistake: "Ignorer le glissement du chemin critique après des intempéries",
          trap: "Ne pas recalculer le réseau PERT après 10 jours de gel",
          fix: "Le gel peut transformer une tâche secondaire en tâche critique ! Repasser l'algorithme CPM sous Primavera/MS Project après tout événement majeur.",
        },
        {
          mistake: "Accélérer des tâches qui ne sont pas sur le chemin critique",
          trap: "Payer des heures supplémentaires sur la peinture alors que le retard vient du ferraillage de la structure",
          fix: "Gaspillage d'argent ! Seules les tâches du chemin critique dictent la date de fin du projet.",
        },
      ],
    },

    {
      id: 13,
      key: 'tips',
      title: "Astuces du Directeur de Projet & Planificateur",
      icon: '💡',
      type: 'tips',
      tips: [
        "Détection rapide du chemin critique : Les tâches critiques ont $MT = 0$, $t_{e,i} = t_{l,i}$ et $t_{e,j} = t_{l,j}$.",
        "Avancement par Jalons (Milestones) : Découper les tâches de plus de 1 mois en sous-jalons mesurables à 0%, 50% ou 100% pour éviter l'effet '90% terminé pendant 6 mois' !",
        "Indicateur d'alerte précoce : Si $CPI \\times SPI < 0{,}85$, le projet est en danger critique d'échec Coût/Délai et nécessite un plan d'urgence.",
        "Réserve pour Aléas : Conserver une marge de contingentement financier (Contingency Reserve) de 5 à 10% non affectée aux lots techniques pour financer les impondérables.",
      ],
    },

    {
      id: 14,
      key: 'normes',
      title: "Normes & Standards de Management de Projet",
      icon: '📜',
      type: 'norms',
      norms: [
        { code: "Standard PMBOK (PMI)", description: "Project Management Body of Knowledge — Référentiel international du management de projet." },
        { code: "ISO 21500", description: "Lignes directrices sur le management de projet." },
        { code: "ISO 31000", description: "Management du risque — Principes et lignes directrices." },
        { code: "Standard ANSI/EIA 748", description: "Earned Value Management Systems (EVMS) — Spécifications du système de management par la valeur acquise." },
      ],
    },

    {
      id: 15,
      key: 'exercises',
      title: "Exercices Management de Projet & PERT — 3 niveaux",
      icon: '✍️',
      type: 'exercises',
      exercises: [
        {
          id: 'ex_man_1',
          number: 1,
          difficulty: 'Facile',
          text: "Un projet a un budget BAC = 500 000 €. L'avancement physique est de 60% et les dépenses réelles s'élèvent à 320 000 €. Calculer la Valeur Acquise EV et le CPI.",
          hint: "EV = % × BAC. CPI = EV / AC.",
          answer_latex: "EV = 0{,}60 \\times 500\\,000 = 300\\,000 \\text{ \\euro} \\qquad CPI = \\frac{300\\,000}{320\\,000} = 0{,}9375",
          answer_text: "EV = 300 000 € | CPI = 0,938 (Dépassement de budget de 6,2%).",
        },
        {
          id: 'ex_man_2',
          number: 2,
          difficulty: 'Moyen',
          text: "Une tâche A a une durée d = 8 jours. Sa date au plus tôt de début est t_e = jour 12, sa date au plus tard de fin est t_l = jour 24. Calculer sa Marge Totale MT.",
          hint: "MT = t_l(fin) - t_e(début) - d.",
          answer_latex: "MT = 24 - 12 - 8 = 4 \\text{ jours}",
          answer_text: "Marge Totale MT = 4 jours (Tâche non critique).",
        },
        {
          id: 'ex_man_3',
          number: 3,
          difficulty: 'Difficile',
          text: "Un projet de 2 000 000 € BAC enregistre un CPI = 0,80 et un SPI = 0,90 à la mi-parcours. Calculer le coût final estimé EAC et la dérive budgétaire prévisionnelle.",
          hint: "EAC = BAC / CPI.",
          answer_latex: "EAC = \\frac{2\\,000\\,000}{0{,}80} = 2\\,500\\,000 \\text{ \\euro HT}",
          answer_text: "EAC = 2 500 000 € HT (Surcoût prévisionnel final de +500 000 € HT).",
        },
      ],
    },

    {
      id: 16,
      key: 'corrections',
      title: "Corrections détaillées",
      icon: '✅',
      type: 'corrections',
      note: "Retrouvez le calcul des réseaux PERT et des courbes en S en cliquant sur 'Voir la correction'.",
    },

    {
      id: 17,
      key: 'quiz',
      title: "Quiz Management de Projet & PERT — 3 questions",
      icon: '🎯',
      type: 'quiz',
      questions: [
        {
          id: 'q_man_1',
          question: "Qu'est-ce que le Chemin Critique (Critical Path) dans un réseau PERT/Gantt ?",
          options: [
            { id: 'a', text: "La liste des tâches les plus chères" },
            { id: 'b', text: "La séquence continue de tâches à marge totale nulle (MT = 0) qui détermine la durée incompressible du projet" },
            { id: 'c', text: "La liste des accidents de chantier" },
          ],
          correct: 'b',
          explanation: "Le chemin critique réunit les tâches dont tout retard décale directement la date de livraison finale du projet.",
        },
        {
          id: 'q_man_2',
          question: "Que signifie un Cost Performance Index (CPI) supérieur à 1,0 en Earned Value Management ?",
          options: [
            { id: 'a', text: "Le projet est en retard" },
            { id: 'b', text: "Le projet réalise des économies par rapport au budget prévu (Sous-budget)" },
            { id: 'c', text: "Le projet est en faillite" },
          ],
          correct: 'b',
          explanation: "CPI = EV / AC > 1,0 signifie que la valeur du travail accompli est supérieure aux dépenses réelles comptabilisées (économie).",
        },
        {
          id: 'q_man_3',
          question: "Si l'on doit accélérer un chantier en retard (Crashing), sur quelles tâches faut-il concentrer les moyens supplémentaires ?",
          options: [
            { id: 'a', text: "Sur les tâches les plus faciles" },
            { id: 'b', text: "Exclusivement sur les tâches situées sur le Chemin Critique" },
            { id: 'c', text: "Sur toutes les tâches indistinctement" },
          ],
          correct: 'b',
          explanation: "Seules les tâches du chemin critique réduisent le délai global du projet. Mettre des moyens sur des tâches non critiques ne gagne aucun jour sur la date de fin.",
        },
      ],
    },

    {
      id: 18,
      key: 'exam_questions',
      title: "Questions d'examen — Master Management de Projet",
      icon: '🎓',
      type: 'exam',
      questions: [
        "Établissez l'algorithme complet du calcul des dates au plus tôt, dates au plus tard et marges libres/totales sur un réseau PERT de 10 tâches.",
        "Démontrez l'utilisation des indicateurs EVM (PV, EV, AC, CPI, SPI, EAC, TCPI) pour le pilotage d'un contrat de conception-réalisation.",
      ],
    },

    {
      id: 19,
      key: 'interview_questions',
      title: "Questions d'entretien — Chef de Projet / Planificateur",
      icon: '💼',
      type: 'interview',
      questions: [
        {
          question: "Comment réagissez-vous si au milieu du chantier, le SPI chute à 0,75 alors que le CPI est de 1,10 ?",
          answer_hint: "Le projet est fortement en retard (SPI = 0,75) mais sous-budget (CPI = 1,10). On dispose d'une marge financière pour accélérer les tâches critiques (Crashing) en ajoutant des équipes ou des heures supplémentaires afin de rétablir le SPI à 1,0 sans dépasser le budget BAC.",
        },
      ],
    },

    {
      id: 20,
      key: 'practical_case',
      title: "Cas pratique — Redressement d'un chantier de pont en retard de 4 semaines",
      icon: '🔧',
      type: 'practical',
      scenario: "Projet de viaduc de 12 M€ bloqué par des crues au mois 6. Analyse PERT et plan d'action.",
      description: "Re-calcul du chemin critique et accélération ciblée du coffrage du tablier.",
      resolution_latex_1: "\\text{Chemin critique identifié : } \\text{Fondations P2 } \\to \\text{Pile P2 } \\to \\text{Équipage mobile tablier}",
      resolution_latex_2: "\\text{Crashing retenu : } \\text{Ajout d'un 2ème équipage mobile (Surcoût 150 k\\euro) } \\implies \\text{Gain 28 jours}",
      conclusion: "Retard résorbé. Évitement de 400 k€ de pénalités de retard.",
    },

    {
      id: 21,
      key: 'summary',
      title: "Résumé exécutif — Le Management en 6 points",
      icon: '📋',
      type: 'summary',
      content: `### Le Management de Projet en 6 points clés

1. **WBS** : Décomposition arborescente du projet en tâches élémentaires.
2. **PERT / CPM** : Calcul des dates au plus tôt, au plus tard et des marges.
3. **Chemin Critique** : Tâches à marge totale nulle ($MT = 0$) dictant la date de fin.
4. **Earned Value (EVM)** : Système $PV$, $EV$, $AC$ pour piloter coûts et délais.
5. **CPI & SPI** : $CPI = EV/AC$ (coûts) et $SPI = EV/PV$ (délais).
6. **Crashing** : Accélération ciblée exclusivement sur le chemin critique.`,
    },

    {
      id: 22,
      key: 'key_points',
      title: "Points clés à mémoriser — Management",
      icon: '⭐',
      type: 'keypoints',
      points: [
        "Chemin critique = Marge totale MT = 0",
        "CPI > 1,0 = Sous-budget | SPI > 1,0 = En avance",
        "EVM : Mesurer l'avancement physique (EV) et non les dépenses (AC)",
        "Accélérer uniquement les tâches critiques",
        "Mise à jour des plannings toutes les 2 semaines",
      ],
    },

    {
      id: 23,
      key: 'self_assessment',
      title: "Auto-évaluation — Management de Projet",
      icon: '🏆',
      type: 'self_assessment',
      description: "Validez vos compétences en planification et management de projet :",
      objectives: [
        "Je sais calculer un réseau PERT, les marges et identifier le chemin critique",
        "Je maîtrise le calcul des indicateurs EVM (PV, EV, AC, CPI, SPI, EAC)",
        "Je sais piloter un projet et arbitrer l'accélération de tâches",
        "J'ai résolu les 3 exercices de management avec succès",
        "J'ai obtenu 3/3 au quiz de management de projet",
      ],
    },
  ],

  quickQuiz: {
    question: "Quelle est la valeur de la Marge Totale (MT) d'une tâche située sur le Chemin Critique ?",
    options: [
      { id: 'a', label: "A) MT = 10 jours" },
      { id: 'b', label: "B) MT = 0 jour (Marge nulle)" },
      { id: 'c', label: "C) MT = infini" },
    ],
    correct: 'b',
    explanation: "Par définition, les tâches du chemin critique ont une marge totale nulle (MT = 0).",
  },
};
