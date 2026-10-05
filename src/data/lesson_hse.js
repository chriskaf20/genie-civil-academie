// ── Lesson: Prévention des risques sur chantier (HSE) — Module 26 ──────────────
export const lesson_hse = {
  moduleId: 26,
  slug: 'hse',
  lessonIndex: 1,
  title: "Prévention des Risques sur Chantier : Principes Généraux, PGC, PPSPS & Protections",
  subtitle: "Module 26 — Sécurité, Santé & Hygiène (HSE)",
  level: 'Débutant',
  duration: '25h',
  diagramType: 'process_flow',
  tags: ['HSE', 'Prévention', 'PPSPS', 'PGC', 'Coordination SPS', 'EPI', 'Travail en hauteur', 'Bruit'],

  steps: [
    {
      id: 1,
      key: 'definition',
      title: "Définition — La prévention des risques professionnels dans le BTP",
      icon: '📖',
      type: 'definition',
      fr: "Santé et sécurité au travail sur les chantiers de BTP",
      en: 'Construction Health & Safety (HSE)',
      metier: "Responsabilité de tous : chef d'entreprise, conducteur de travaux, chef de chantier, coordonnateur SPS, préventeur HSE et maître d'ouvrage.",
      content: `La **prévention** regroupe l'ensemble des mesures prises pour éviter qu'un travailleur soit blessé ou rendu malade par son travail. Le BTP reste l'un des secteurs les plus accidentogènes : les **chutes de hauteur** y sont une cause majeure d'accidents graves et mortels.

### Les 9 principes généraux de prévention (art. L4121-2 du Code du travail)
1. Éviter les risques.
2. Évaluer les risques qui ne peuvent pas être évités.
3. Combattre les risques à la source.
4. Adapter le travail à l'homme.
5. Tenir compte de l'état d'évolution de la technique.
6. Remplacer ce qui est dangereux par ce qui l'est moins.
7. Planifier la prévention.
8. Donner la **priorité aux protections collectives** sur les protections individuelles.
9. Donner les instructions appropriées aux travailleurs.

> 💡 L'ordre compte : un harnais (protection individuelle) ne se justifie que si un garde-corps ou un échafaudage (protection collective) est techniquement impossible.`,
    },

    {
      id: 2,
      key: 'importance',
      title: "Pourquoi la prévention est un enjeu d'ingénieur",
      icon: '⚠️',
      type: 'importance',
      content: `La sécurité se conçoit dès les études, pas seulement sur le chantier.

- **Responsabilité pénale** : l'employeur a une obligation de sécurité ; un accident grave peut engager la responsabilité du chef d'entreprise et de ses délégataires.
- **Coût** : un accident avec arrêt coûte cher (cotisations AT/MP majorées, désorganisation, retard) ; la prévention est rentable.
- **Qualité et délais** : un chantier bien organisé (accès, stockage, levage planifié) est aussi un chantier plus productif.
- **Conception** : prévoir dès le projet des points d'ancrage, des acrotères de hauteur suffisante ou des réservations pour garde-corps évite des risques pendant toute la vie de l'ouvrage (entretien compris).

> ⚠️ **Règle d'or** : aucun travail ne démarre sans analyse des risques et sans que chaque intervenant connaisse les mesures prévues.`,
    },

    {
      id: 3,
      key: 'applications',
      title: "Applications terrain",
      icon: '🏗️',
      type: 'applications',
      examples: [
        { context: "Rédaction du PPSPS", text: "Chaque entreprise décrit ses modes opératoires, les risques associés et les mesures de prévention avant d'intervenir." },
        { context: "Accueil sécurité", text: "Présentation des règles du chantier, des zones dangereuses, des EPI obligatoires et des consignes d'urgence à chaque nouvel arrivant." },
        { context: "Travaux en toiture", text: "Mise en place de garde-corps périphériques ou de filets avant toute intervention en bord de dalle." },
        { context: "Terrassement près des réseaux", text: "Déclarations DT-DICT, marquage-piquetage des réseaux, opérateurs titulaires de l'AIPR." },
        { context: "Levage", text: "Plan de levage, vérification des accessoires, conducteur de grue titulaire du CACES R487 et balisage de la zone de charge." },
      ],
    },

    {
      id: 4,
      key: 'theory',
      title: "Théorie — L'organisation de la prévention sur une opération",
      icon: '📐',
      type: 'theory',
      diagramType: 'process_flow',
      content: `### 1. Les acteurs
- **Maître d'ouvrage** : désigne un **coordonnateur SPS** dès la conception lorsque plusieurs entreprises interviennent (loi du 31 décembre 1993).
- **Coordonnateur SPS** : organise la coordination entre entreprises, rédige le **PGC** (plan général de coordination) et tient le registre-journal.
- **Entreprises** : chacune rédige son **PPSPS** (plan particulier de sécurité et de protection de la santé) et son **document unique** (DUERP).

### 2. Les documents clés
- **DUERP** : évaluation des risques de l'entreprise, mise à jour au moins une fois par an.
- **PGC** : règles communes du chantier (accès, circulations, levage, installations d'hygiène, secours).
- **PPSPS** : mesures propres à chaque entreprise pour ses travaux.
- **DIUO** : dossier d'intervention ultérieure sur l'ouvrage, utile aux futures opérations d'entretien.

### 3. La hiérarchie des mesures
$$\\text{Supprimer} \\rightarrow \\text{Réduire à la source} \\rightarrow \\text{Protection collective} \\rightarrow \\text{Protection individuelle} \\rightarrow \\text{Information}$$

### 4. Les indicateurs d'accidentologie
On compare les entreprises et les années avec le **taux de fréquence** $TF$ (accidents avec arrêt par million d'heures travaillées) et le **taux de gravité** $TG$ (journées perdues par millier d'heures).`,
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
          name: "Taux de fréquence des accidents du travail",
          latex: "TF = \\frac{N_{AT} \\times 10^6}{H}",
          description: "Nombre d'accidents avec arrêt rapporté à un million d'heures travaillées.",
          variables: [
            { symbol: 'TF', name: 'Taux de fréquence', unit: '-', role: "Indicateur de la fréquence des accidents.", category: 'Indicateur' },
            { symbol: 'N_{AT}', name: "Accidents avec arrêt", unit: '-', role: "Accidents ayant entraîné au moins un jour d'arrêt sur la période.", category: 'Comptage' },
            { symbol: 'H', name: 'Heures travaillées', unit: '\\text{h}', role: "Total des heures de l'effectif sur la période.", category: 'Exposition' },
          ],
          ruleOfThumb: "Comparez toujours un TF à celui de votre profession sur la même année : un TF isolé ne dit rien.",
        },
        {
          name: "Taux de gravité",
          latex: "TG = \\frac{J_{perdus} \\times 10^3}{H}",
          description: "Journées perdues pour accident rapportées à mille heures travaillées.",
          variables: [
            { symbol: 'TG', name: 'Taux de gravité', unit: '-', role: 'Mesure la gravité des accidents.', category: 'Indicateur' },
            { symbol: 'J_{perdus}', name: "Journées d'arrêt", unit: '\\text{j}', role: "Jours calendaires d'arrêt sur la période.", category: 'Comptage' },
            { symbol: 'H', name: 'Heures travaillées', unit: '\\text{h}', role: "Total des heures de l'effectif.", category: 'Exposition' },
          ],
          ruleOfThumb: "Un TF faible avec un TG élevé signale peu d'accidents mais graves : priorité aux risques de chute et d'engins.",
        },
        {
          name: "Exposition sonore quotidienne",
          latex: "L_{EX,8h} = L_{Aeq,T} + 10 \\log_{10}\\left(\\frac{T}{8\\ \\text{h}}\\right)",
          description: "Ramène une exposition de durée T à une journée de référence de 8 h. Seuils : 80 dB(A) (action inférieure), 85 dB(A) (action supérieure), 87 dB(A) (valeur limite, protections comprises).",
          variables: [
            { symbol: 'L_{EX,8h}', name: 'Exposition quotidienne', unit: '\\text{dB(A)}', role: 'Valeur comparée aux seuils réglementaires.', category: 'Résultat' },
            { symbol: 'L_{Aeq,T}', name: 'Niveau équivalent pendant T', unit: '\\text{dB(A)}', role: 'Niveau moyen mesuré au poste de travail.', category: 'Mesure' },
            { symbol: 'T', name: "Durée d'exposition", unit: '\\text{h}', role: 'Temps passé à ce niveau sonore dans la journée.', category: 'Temps' },
          ],
          ruleOfThumb: "Diviser la durée d'exposition par 2 ne fait baisser l'exposition que de 3 dB.",
        },
        {
          name: "Addition de niveaux sonores",
          latex: "L_{total} = 10 \\log_{10}\\left(\\sum_{i} 10^{L_i / 10}\\right)",
          description: "Les décibels ne s'additionnent pas arithmétiquement : deux sources identiques donnent +3 dB.",
          variables: [
            { symbol: 'L_{total}', name: 'Niveau global', unit: '\\text{dB(A)}', role: 'Niveau résultant de toutes les sources.', category: 'Résultat' },
            { symbol: 'L_i', name: 'Niveau de la source i', unit: '\\text{dB(A)}', role: 'Niveau de chaque machine mesuré seul.', category: 'Mesure' },
          ],
        },
        {
          name: "Tirant d'air sous un point d'ancrage",
          latex: "T_{air} = L_{longe} + \\Delta_{absorbeur} + H_{utilisateur} + 1\\ \\text{m}",
          description: "Hauteur libre nécessaire sous l'ancrage pour qu'une chute soit arrêtée sans heurter le sol (l'absorbeur EN 355 peut s'allonger jusqu'à 1,75 m).",
          variables: [
            { symbol: 'T_{air}', name: "Tirant d'air requis", unit: '\\text{m}', role: 'Hauteur libre minimale sous le point d\'ancrage.', category: 'Résultat' },
            { symbol: 'L_{longe}', name: 'Longueur de la longe', unit: '\\text{m}', role: 'Souvent 2 m au maximum.', category: 'Équipement' },
            { symbol: '\\Delta_{absorbeur}', name: "Allongement de l'absorbeur", unit: '\\text{m}', role: "Jusqu'à 1,75 m selon EN 355.", category: 'Équipement' },
            { symbol: 'H_{utilisateur}', name: "Distance point d'accrochage – pieds", unit: '\\text{m}', role: 'Environ 1,5 m.', category: 'Morphologie' },
          ],
          ruleOfThumb: "Ancrez toujours au-dessus de la tête : la chute est plus courte et le tirant d'air nécessaire plus faible.",
        },
      ],
    },

    {
      id: 6,
      key: 'stepbystep',
      title: "Calcul complet — Indicateurs d'accidentologie d'une entreprise",
      icon: '🔬',
      type: 'stepbystep',
      problem: "Une entreprise de gros œuvre de 120 salariés a travaillé 1 600 h par salarié sur l'année. Elle a enregistré 6 accidents avec arrêt, totalisant 180 jours d'arrêt. Calculer TF et TG et commenter.",
      steps_demo: [
        { n: 1, text: "Calculer les heures travaillées : H = 120 × 1 600 = 192 000 h." },
        { n: 2, text: "Taux de fréquence : TF = 6 × 10⁶ / 192 000 = 31,25." },
        { n: 3, text: "Taux de gravité : TG = 180 × 10³ / 192 000 = 0,94." },
        { n: 4, text: "Durée moyenne d'arrêt : 180 / 6 = 30 jours par accident." },
        { n: 5, text: "Comparer aux statistiques de la profession de la même année pour situer l'entreprise." },
        { n: 6, text: "Analyser les causes des 6 accidents (arbre des causes) et cibler le plan d'action sur les causes récurrentes." },
      ],
      result_latex: "TF = \\frac{6 \\times 10^6}{192\\,000} = 31{,}25 \\qquad TG = \\frac{180 \\times 10^3}{192\\,000} = 0{,}94",
    },

    {
      id: 7,
      key: 'units',
      title: "Grandeurs et valeurs repères",
      icon: '📏',
      type: 'units',
      table: [
        { grandeur: "Hauteur de garde-corps", si: "1,00 à 1,10 m", imperial: "39 à 43 in", conversion: "Avec lisse intermédiaire et plinthe de 10 à 15 cm" },
        { grandeur: "Seuils d'exposition au bruit", si: "80 / 85 / 87 dB(A)", imperial: "-", conversion: "Action inférieure / action supérieure / valeur limite" },
        { grandeur: "Charge de service d'échafaudage", si: "kN/m²", imperial: "psf", conversion: "Classe 3 (EN 12811-1) : 2,0 kN/m² ≈ 42 psf" },
        { grandeur: "Allongement d'absorbeur", si: "≤ 1,75 m", imperial: "≤ 5,7 ft", conversion: "Selon EN 355" },
        { grandeur: "Valeur limite amiante", si: "10 fibres/L", imperial: "-", conversion: "Sur 8 heures (VLEP réglementaire)" },
      ],
      note: "Les seuils réglementaires évoluent : vérifiez toujours la version en vigueur du Code du travail et des recommandations de la CNAM (série R).",
    },

    {
      id: 8,
      key: 'hypotheses',
      title: "Principes d'application",
      icon: '📋',
      type: 'hypotheses',
      items: [
        { type: 'info', text: "Les protections collectives (garde-corps, filets, échafaudages, plates-formes) protègent tout le monde sans action de l'opérateur : elles passent avant les EPI." },
        { type: 'info', text: "Le PPSPS est remis au coordonnateur SPS avant l'intervention de l'entreprise sur le chantier." },
        { type: 'warning', text: "Un EPI n'est efficace que s'il est adapté, ajusté, vérifié et porté : la formation à son usage est obligatoire (harnais notamment)." },
        { type: 'warning', text: "Interdiction de travailler à proximité d'une ligne électrique ou d'un réseau enterré sans procédure (DT-DICT, consignation, distances de sécurité)." },
        { type: 'tip', text: "Planifiez la sécurité avec le planning : poser les garde-corps de rive au moment du coulage de la dalle évite de travailler ensuite en bord de vide." },
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
          title: "Exemple 1 : deux machines bruyantes",
          given: "Une scie et un marteau-piqueur produisent chacun 85 dB(A) au poste de travail",
          find: "Le niveau sonore global",
          solution_latex: "L = 10 \\log_{10}\\left(10^{8{,}5} + 10^{8{,}5}\\right) = 85 + 10 \\log_{10} 2 = 88\\ \\text{dB(A)}",
          result: "88 dB(A) : au-delà de 85 dB(A), les protections auditives sont obligatoires.",
        },
        {
          title: "Exemple 2 : exposition de 2 heures",
          given: "Burinage à 94 dB(A) pendant 2 h, le reste de la journée au calme",
          find: "L'exposition quotidienne L_EX,8h",
          solution_latex: "L_{EX,8h} = 94 + 10 \\log_{10}\\left(\\frac{2}{8}\\right) = 94 - 6 = 88\\ \\text{dB(A)}",
          result: "88 dB(A) > 85 dB(A) : port obligatoire des protecteurs et programme de réduction du bruit.",
        },
        {
          title: "Exemple 3 : charge sur un plancher d'échafaudage",
          given: "Plancher de 2,5 m × 0,7 m, classe 3 (2,0 kN/m²)",
          find: "La charge de service admissible sur le plancher",
          solution_latex: "F = q \\times A = 2{,}0 \\times (2{,}5 \\times 0{,}7) = 3{,}5\\ \\text{kN}",
          result: "3,5 kN (environ 350 kg) : matériaux et personnes compris.",
        },
      ],
    },

    {
      id: 10,
      key: 'real_examples',
      title: "Exemple réel — Chute depuis une trémie non protégée",
      icon: '🏢',
      type: 'examples_real',
      diagramType: 'process_flow',
      examples: [
        {
          context: "Chantier de logements R+4, ouverture d'escalier non protégée au 2e étage",
          scenario: "Un compagnon recule en déroulant un câble et chute de 3 m par la trémie dont le platelage avait été retiré la veille pour un levage. L'arbre des causes montre l'absence de consigne de remise en place et aucun contrôle de fin de poste.",
          decomposition_latex: "\\text{Causes : protection retirée} + \\text{absence de procédure} + \\text{tâche sans visibilité arrière} \\Rightarrow \\text{chute}",
          lesson: "Toute protection collective retirée pour une tâche doit être remise en place immédiatement par l'équipe qui l'a retirée, avec une vérification par l'encadrement. Préférer des garde-corps fixés à la structure plutôt que des platelages amovibles.",
        },
      ],
    },

    {
      id: 11,
      key: 'diagrams',
      title: "Schéma de principe — La démarche de prévention",
      icon: '📊',
      type: 'interactive_diagram',
      diagramType: 'process_flow',
      description: "Du repérage des dangers au retour d'expérience : une boucle d'amélioration continue (ISO 45001).",
      diagram_description: [
        "Identifier : dangers de chaque tâche (chute, engins, électricité, bruit, poussières, manutention)",
        "Évaluer : gravité × probabilité, hiérarchiser les risques dans le DUERP",
        "Prévenir : supprimer le risque, puis protection collective, puis EPI",
        "Organiser : PGC, PPSPS, accueil sécurité, autorisations (CACES, AIPR)",
        "Contrôler : visites de chantier, vérifications des équipements, registre",
        "Analyser : arbre des causes après accident ou presque-accident, actions correctives",
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
          mistake: "Distribuer des harnais au lieu de poser des garde-corps",
          trap: "Croire que l'EPI suffit parce qu'il est moins cher à court terme",
          fix: "Appliquer le principe n° 8 : la protection collective est prioritaire ; le harnais est le dernier recours et exige un ancrage, une formation et un plan de secours.",
        },
        {
          mistake: "Copier-coller un PPSPS d'un autre chantier",
          trap: "Un document générique qui ne décrit ni les modes opératoires réels ni les risques du site",
          fix: "Le PPSPS doit être spécifique : phasage, matériels, interfaces avec les autres entreprises, secours.",
        },
        {
          mistake: "Additionner les décibels comme des nombres ordinaires",
          trap: "85 + 85 = 170 dB",
          fix: "Utiliser l'addition logarithmique : deux sources identiques donnent +3 dB, soit 88 dB(A).",
        },
      ],
    },

    {
      id: 13,
      key: 'tips',
      title: "Astuces de terrain",
      icon: '💡',
      type: 'tips',
      tips: [
        "Le quart d'heure sécurité hebdomadaire est plus efficace s'il part d'un fait réel du chantier (presque-accident, photo).",
        "Intégrez les installations de chantier (base vie, circulation, stockage, zones de levage) dans le plan d'installation dès la préparation.",
        "Exigez les CACES et AIPR à jour avant l'arrivée des intérimaires et sous-traitants, pas le jour même.",
        "Un presque-accident est une information gratuite : analysez-le comme un accident.",
      ],
    },

    {
      id: 14,
      key: 'norms',
      title: "Textes et normes de référence",
      icon: '📜',
      type: 'norms',
      norms: [
        { code: "Code du travail, art. L4121-1 à L4121-5", description: "Obligation de sécurité de l'employeur et principes généraux de prévention." },
        { code: "Loi n° 93-1418 du 31 décembre 1993", description: "Coordination en matière de sécurité et de protection de la santé (coordonnateur SPS, PGC, PPSPS, DIUO)." },
        { code: "Recommandations CNAM R482 à R490", description: "CACES : engins de chantier, grues, nacelles (R486), chariots, grues auxiliaires." },
        { code: "NF EN 12811-1 / NF EN 13374", description: "Échafaudages (classes de charge) et garde-corps périphériques temporaires." },
        { code: "NF ISO 45001", description: "Système de management de la santé et de la sécurité au travail." },
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
          id: 'ex_hse_1',
          number: 1,
          difficulty: 'Facile',
          text: "Sur une année, une entreprise totalise 250 000 heures travaillées et 5 accidents avec arrêt. Calculer son taux de fréquence.",
          hint: "TF = N × 10⁶ / H.",
          answer_latex: "TF = \\frac{5 \\times 10^6}{250\\,000} = 20",
          answer_text: "TF = 20.",
        },
        {
          id: 'ex_hse_2',
          number: 2,
          difficulty: 'Moyen',
          text: "Trois machines produisent 82, 85 et 88 dB(A) au même poste. Calculer le niveau global.",
          hint: "L = 10 log₁₀(10^8,2 + 10^8,5 + 10^8,8).",
          answer_latex: "L = 10 \\log_{10}\\left(10^{8{,}2} + 10^{8{,}5} + 10^{8{,}8}\\right) = 10 \\log_{10}\\left(1{,}106 \\times 10^{9}\\right) = 90{,}4\\ \\text{dB(A)}",
          answer_text: "Environ 90,4 dB(A) : la machine la plus bruyante domine.",
        },
        {
          id: 'ex_hse_3',
          number: 3,
          difficulty: 'Difficile',
          text: "Un couvreur utilise une longe de 2 m avec absorbeur (allongement maximal 1,75 m). La distance entre son point d'accrochage dorsal et ses pieds est de 1,5 m. Quel tirant d'air faut-il sous l'ancrage ? L'ancrage est à 5 m au-dessus d'une dalle : est-ce suffisant ?",
          hint: "Ajouter 1 m de marge de sécurité.",
          answer_latex: "T_{air} = 2{,}00 + 1{,}75 + 1{,}50 + 1{,}00 = 6{,}25\\ \\text{m} > 5\\ \\text{m}",
          answer_text: "6,25 m requis : insuffisant. Utiliser un antichute à rappel automatique, une longe plus courte ou une protection collective.",
        },
      ],
    },

    {
      id: 16,
      key: 'corrections',
      title: "Corrections détaillées",
      icon: '✅',
      type: 'corrections',
      note: "Les corrections figurent sous chaque exercice. Vérifiez aussi la conclusion pratique : un calcul de sécurité débouche toujours sur une décision.",
    },

    {
      id: 17,
      key: 'quiz',
      title: "Quiz — Prévention",
      icon: '🎯',
      type: 'quiz',
      questions: [
        {
          id: 'q_hse_1',
          question: "Quelle mesure est prioritaire pour un travail en bord de dalle ?",
          options: [
            { id: 'a', text: 'Un harnais avec longe' },
            { id: 'b', text: 'Un garde-corps périphérique' },
            { id: 'c', text: 'Une consigne écrite' },
          ],
          correct: 'b',
          explanation: "Le garde-corps est une protection collective : elle est prioritaire sur l'EPI selon les principes généraux de prévention.",
        },
        {
          id: 'q_hse_2',
          question: "Qui rédige le PPSPS ?",
          options: [
            { id: 'a', text: "Le maître d'ouvrage" },
            { id: 'b', text: 'Le coordonnateur SPS' },
            { id: 'c', text: 'Chaque entreprise intervenante' },
          ],
          correct: 'c',
          explanation: "Le coordonnateur rédige le PGC ; chaque entreprise rédige son PPSPS pour ses propres travaux.",
        },
        {
          id: 'q_hse_3',
          question: "Deux sources de 85 dB(A) fonctionnent ensemble. Quel est le niveau global ?",
          options: [
            { id: 'a', text: '85 dB(A)' },
            { id: 'b', text: '88 dB(A)' },
            { id: 'c', text: '170 dB(A)' },
          ],
          correct: 'b',
          explanation: "Doubler l'énergie acoustique ajoute 10·log₁₀(2) ≈ 3 dB.",
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
        "Citez les neuf principes généraux de prévention et illustrez chacun par un exemple de chantier.",
        "Présentez le rôle du coordonnateur SPS et le contenu du PGC, du PPSPS et du DIUO.",
        "Une équipe travaille 3 h par jour à 92 dB(A). Calculez son exposition quotidienne et proposez des mesures dans l'ordre des principes de prévention.",
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
          question: "Vous constatez un ouvrier sans protection en bord de dalle. Que faites-vous ?",
          answer_hint: "J'arrête immédiatement le travail (droit et devoir d'intervention), je mets la personne en sécurité, je fais installer la protection collective manquante, puis j'analyse pourquoi elle manquait (planification, matériel, consigne) pour éviter que cela se reproduise.",
        },
        {
          question: "Comment intégrez-vous la sécurité dès la phase de conception ?",
          answer_hint: "En prévoyant des acrotères ou des ancrages pour l'entretien, des réservations pour garde-corps, des accès sécurisés aux équipements techniques, et en transmettant ces choix dans le DIUO.",
        },
      ],
    },

    {
      id: 20,
      key: 'practical_case',
      title: "Cas pratique — Préparer l'intervention en toiture-terrasse",
      icon: '🔧',
      type: 'practical',
      diagramType: 'process_flow',
      scenario: "Réfection d'étanchéité d'une toiture-terrasse de 600 m² à 15 m de hauteur, acrotère de 30 cm seulement.",
      description: "Il faut choisir les protections, vérifier l'exposition au bruit d'un décapage (95 dB(A) pendant 1,5 h par jour) et organiser le chantier.",
      resolution_latex_1: "\\text{Acrotère } 0{,}30\\ \\text{m} < 1{,}00\\ \\text{m} \\Rightarrow \\text{garde-corps périphériques à fixer avant toute intervention}",
      resolution_latex_2: "L_{EX,8h} = 95 + 10 \\log_{10}\\left(\\frac{1{,}5}{8}\\right) = 95 - 7{,}3 = 87{,}7\\ \\text{dB(A)} > 85 \\Rightarrow \\text{protections auditives et rotation des équipes}",
      resolution_latex_3: "\\text{Organisation : PPSPS} + \\text{accès par escalier d'échafaudage} + \\text{zone de levage balisée} + \\text{accueil sécurité}",
      conclusion: "Protection collective en rive, bruit traité à la source puis par EPI, accès et levage organisés : l'intervention peut démarrer.",
    },

    {
      id: 21,
      key: 'summary',
      title: "Résumé",
      icon: '📋',
      type: 'summary',
      content: `### La prévention en 6 points
1. **9 principes généraux** : éviter, évaluer, combattre à la source… et priorité au collectif.
2. **Documents** : DUERP (entreprise), PGC (coordonnateur), PPSPS (chaque entreprise), DIUO (ouvrage).
3. **Chutes de hauteur** : garde-corps de 1 à 1,10 m, filets, échafaudages avant les harnais.
4. **Autorisations** : CACES pour les engins, AIPR près des réseaux.
5. **Bruit** : seuils de 80, 85 et 87 dB(A), addition logarithmique.
6. **Indicateurs** : TF et TG pour mesurer et suivre les progrès.`,
    },

    {
      id: 22,
      key: 'key_points',
      title: "Points clés à retenir",
      icon: '⭐',
      type: 'keypoints',
      points: [
        "Protection collective avant protection individuelle",
        "PGC par le coordonnateur SPS, PPSPS par chaque entreprise",
        "Garde-corps : 1,00 à 1,10 m, lisse intermédiaire et plinthe",
        "Bruit : 80 / 85 / 87 dB(A) ; deux sources égales = +3 dB",
        "$TF = \\frac{N_{AT} \\times 10^6}{H}$ et $TG = \\frac{J \\times 10^3}{H}$",
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
        "Je cite les 9 principes généraux de prévention",
        "Je distingue le rôle du PGC, du PPSPS et du DIUO",
        "Je sais calculer une exposition sonore quotidienne",
        "Je sais calculer TF et TG",
        "Je sais vérifier un tirant d'air avant d'utiliser un harnais",
      ],
    },
  ],

  quickQuiz: {
    question: "Selon les principes généraux de prévention, que doit-on privilégier ?",
    options: [
      { id: 'a', label: 'A) Les équipements de protection individuelle' },
      { id: 'b', label: 'B) Les protections collectives' },
      { id: 'c', label: 'C) Les affichages de consignes' },
    ],
    correct: 'b',
    explanation: "Le 8e principe donne la priorité aux protections collectives (garde-corps, filets) sur les EPI.",
  },
};
