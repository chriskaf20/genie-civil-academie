// ── Lesson: Eurocodes, normes NF EN & DTU — Module 28 ──────────────────────────
export const lesson_normes = {
  moduleId: 28,
  slug: 'normes',
  lessonIndex: 1,
  title: "Eurocodes, Normes NF EN & DTU : Architecture Normative et Combinaisons d'Actions",
  subtitle: "Module 28 — Normes & Codes Réglementaires",
  level: 'Intermédiaire',
  duration: '30h',
  diagramType: 'process_flow',
  tags: ['Normes', 'Eurocodes', 'EN 1990', 'Annexe nationale', 'NF DTU', 'Coefficients partiels', 'Marquage CE', 'ACI 318'],

  steps: [
    {
      id: 1,
      key: 'definition',
      title: "Définition — Le cadre normatif de la construction",
      icon: '📖',
      type: 'definition',
      fr: "Normes, codes de calcul et règles de l'art",
      en: 'Standards, Design Codes & Building Regulations',
      metier: "Utilisé chaque jour par les ingénieurs de bureau d'études, les contrôleurs techniques, les méthodes et les rédacteurs de CCTP.",
      content: `Une **norme** est un document de référence établi par consensus et approuvé par un organisme reconnu (AFNOR en France, CEN en Europe, ISO au niveau mondial). Elle fixe des règles de calcul, d'essai, de fabrication ou d'exécution.

### Distinguer quatre niveaux de textes
1. **La réglementation** (lois, décrets, arrêtés) : obligatoire. Exemples : RE2020, règles parasismiques (arrêté du 22 octobre 2010), sécurité incendie des ERP.
2. **Les normes homologuées** (NF, NF EN, NF EN ISO) : d'application volontaire, **sauf** si un texte réglementaire ou un **marché** les rend obligatoires.
3. **Les NF DTU** : règles de l'art d'exécution des travaux de bâtiment, contractuelles lorsqu'elles sont citées au marché.
4. **Les évaluations techniques** (Avis Technique et DTA du CSTB, ATEx, ETE européenne) : pour les procédés non couverts par les normes.

### Les Eurocodes
Dix normes européennes de conception des structures : de l'**EN 1990** (bases de calcul) à l'**EN 1999** (aluminium). Chaque pays les complète par une **annexe nationale** qui fixe les paramètres déterminés au niveau national (NDP).

> 💡 Le calcul n'est valable qu'avec l'Eurocode **et** son annexe nationale : en France, on applique la « NF EN 1992-1-1 » et la « NF EN 1992-1-1/NA ».`,
    },

    {
      id: 2,
      key: 'importance',
      title: "Pourquoi maîtriser les normes",
      icon: '⚠️',
      type: 'importance',
      content: `Les normes garantissent un niveau de sécurité commun et permettent de comparer des offres et de contrôler des ouvrages.

- **Sécurité** : l'EN 1990 vise une probabilité de ruine très faible (indice de fiabilité $\\beta = 3{,}8$ sur 50 ans pour la classe RC2).
- **Responsabilité** : en cas de sinistre, l'expert compare l'ouvrage aux règles de l'art (NF DTU, Eurocodes) en vigueur à la date du marché.
- **Assurance** : les techniques non courantes (hors normes, sans Avis Technique) sont souvent exclues des garanties standard.
- **Marché unique** : le marquage CE et la déclaration des performances (DoP) rendent comparables les produits de construction en Europe.

> ⚠️ **Piège classique** : mélanger des coefficients issus de règlements différents (par exemple des charges ACI avec des résistances Eurocode) fausse le niveau de sécurité.`,
    },

    {
      id: 3,
      key: 'applications',
      title: "Applications professionnelles",
      icon: '🏗️',
      type: 'applications',
      examples: [
        { context: "Note de calcul", text: "Citer les normes et annexes nationales utilisées, les classes de conséquences, la durée d'utilisation de projet et les combinaisons d'actions." },
        { context: "Rédaction d'un CCTP", text: "Imposer les NF DTU applicables, les normes produits (NF EN 206 pour le béton) et les classes d'exposition." },
        { context: "Contrôle technique", text: "Vérifier la conformité des hypothèses et des résultats aux Eurocodes avant le visa des plans d'exécution." },
        { context: "Réception de produits", text: "Contrôler le marquage CE, la déclaration des performances et les certifications (NF, ACQPA, CE+)." },
        { context: "Projet à l'international", text: "Identifier le code applicable (Eurocodes, ACI/ASCE, BS, codes locaux) et ne pas mélanger leurs coefficients." },
      ],
    },

    {
      id: 4,
      key: 'theory',
      title: "Théorie — Les bases de calcul de l'EN 1990",
      icon: '📐',
      type: 'theory',
      diagramType: 'process_flow',
      content: `### 1. Les états limites
- **ELU (états limites ultimes)** : sécurité des personnes et de la structure (rupture, instabilité, perte d'équilibre).
- **ELS (états limites de service)** : fonctionnement et confort (flèches, fissuration, vibrations).

### 2. La méthode des coefficients partiels
On majore les actions et on minore les résistances :
$$E_d \\le R_d \\qquad \\text{avec} \\qquad R_d = \\frac{R_k}{\\gamma_M}$$

### 3. Les combinaisons d'actions
- **ELU fondamentale (6.10)** : $\\sum \\gamma_G G_k + \\gamma_{Q,1} Q_{k,1} + \\sum \\gamma_{Q,i} \\psi_{0,i} Q_{k,i}$ avec $\\gamma_G = 1{,}35$ (ou 1,00 si favorable) et $\\gamma_Q = 1{,}50$.
- **ELS caractéristique** : $\\sum G_k + Q_{k,1} + \\sum \\psi_{0,i} Q_{k,i}$.
- **ELS fréquente** : $\\sum G_k + \\psi_{1,1} Q_{k,1} + \\sum \\psi_{2,i} Q_{k,i}$.
- **ELS quasi-permanente** : $\\sum G_k + \\sum \\psi_{2,i} Q_{k,i}$ (fluage, flèches à long terme).

### 4. Durée d'utilisation de projet
Catégorie 4 (bâtiments et ouvrages courants) : **50 ans** ; catégorie 5 (bâtiments monumentaux, ponts et ouvrages de génie civil) : **100 ans**.

### 5. Coefficients partiels sur les matériaux (situations durables)
Béton $\\gamma_c = 1{,}5$ ; acier pour béton armé $\\gamma_s = 1{,}15$ ; acier de construction $\\gamma_{M0} = 1{,}0$ et $\\gamma_{M2} = 1{,}25$ ; bois massif $\\gamma_M = 1{,}3$, lamellé-collé $1{,}25$.`,
    },

    {
      id: 5,
      key: 'formulas',
      title: "Formules essentielles de l'EN 1990",
      icon: '🔢',
      type: 'formulas',
      diagramType: 'process_flow',
      formulas: [
        {
          name: "Combinaison fondamentale ELU (équation 6.10)",
          latex: "E_d = \\sum_j \\gamma_{G,j} G_{k,j} + \\gamma_{Q,1} Q_{k,1} + \\sum_{i>1} \\gamma_{Q,i} \\psi_{0,i} Q_{k,i}",
          description: "Une action variable est dominante (Q₁), les autres sont prises avec leur valeur de combinaison ψ₀·Q.",
          variables: [
            { symbol: 'E_d', name: "Effet de calcul des actions", unit: '\\text{kN, kN·m}', role: 'Sollicitation de calcul à comparer à la résistance.', category: 'Résultat' },
            { symbol: '\\gamma_{G}', name: 'Coefficient partiel des charges permanentes', unit: '-', role: '1,35 si défavorable, 1,00 si favorable.', category: 'Sécurité' },
            { symbol: 'G_{k}', name: 'Charges permanentes caractéristiques', unit: '\\text{kN/m}^2', role: 'Poids propre, revêtements, cloisons fixes.', category: 'Action' },
            { symbol: '\\gamma_{Q}', name: 'Coefficient partiel des actions variables', unit: '-', role: '1,50 si défavorable, 0 si favorable.', category: 'Sécurité' },
            { symbol: 'Q_{k,1}', name: 'Action variable dominante', unit: '\\text{kN/m}^2', role: "L'action variable que l'on teste comme principale.", category: 'Action' },
            { symbol: '\\psi_{0,i}', name: 'Coefficient de combinaison', unit: '-', role: 'Réduit les actions variables d\'accompagnement (0,7 pour un plancher de bureau).', category: 'Combinaison' },
          ],
          ruleOfThumb: "Avec plusieurs actions variables, essayez chacune comme action dominante et retenez la combinaison la plus défavorable.",
        },
        {
          name: "Combinaison quasi-permanente ELS",
          latex: "E_{d,qp} = \\sum_j G_{k,j} + \\sum_i \\psi_{2,i} Q_{k,i}",
          description: "Utilisée pour les effets de long terme : fluage, flèche finale, ouverture des fissures en béton armé.",
          variables: [
            { symbol: 'E_{d,qp}', name: 'Effet quasi-permanent', unit: '\\text{kN, kN·m}', role: 'Charge présente « la plupart du temps ».', category: 'Résultat' },
            { symbol: '\\psi_{2,i}', name: 'Coefficient quasi-permanent', unit: '-', role: '0,3 pour habitation et bureaux, 0 pour la neige et le vent (altitude ≤ 1 000 m).', category: 'Combinaison' },
          ],
        },
        {
          name: "Résistance de calcul",
          latex: "R_d = \\frac{R_k}{\\gamma_M}",
          description: "La résistance caractéristique (fractile 5 %) est divisée par un coefficient partiel propre au matériau.",
          variables: [
            { symbol: 'R_d', name: 'Résistance de calcul', unit: '\\text{MPa, kN}', role: 'Valeur utilisée dans la vérification E_d ≤ R_d.', category: 'Résultat' },
            { symbol: 'R_k', name: 'Résistance caractéristique', unit: '\\text{MPa, kN}', role: 'Valeur ayant 95 % de chances d\'être dépassée.', category: 'Matériau' },
            { symbol: '\\gamma_M', name: 'Coefficient partiel du matériau', unit: '-', role: '1,5 béton ; 1,15 acier BA ; 1,0 acier de construction ; 1,3 bois massif.', category: 'Sécurité' },
          ],
        },
        {
          name: "Résistance de calcul du béton (EC2, annexe nationale française)",
          latex: "f_{cd} = \\alpha_{cc} \\frac{f_{ck}}{\\gamma_c} \\qquad (\\alpha_{cc} = 1{,}0)",
          description: "Pour un C25/30 : f_cd = 25 / 1,5 = 16,7 MPa.",
          variables: [
            { symbol: 'f_{cd}', name: 'Résistance de calcul en compression', unit: '\\text{MPa}', role: 'Valeur de calcul du béton.', category: 'Résultat' },
            { symbol: 'f_{ck}', name: 'Résistance caractéristique sur cylindre', unit: '\\text{MPa}', role: 'Premier nombre de la classe : C25/30 → 25 MPa.', category: 'Matériau' },
            { symbol: '\\alpha_{cc}', name: 'Coefficient des effets à long terme', unit: '-', role: '1,0 selon l\'annexe nationale française.', category: 'Coefficient' },
            { symbol: '\\gamma_c', name: 'Coefficient partiel du béton', unit: '-', role: '1,5 en situation durable.', category: 'Sécurité' },
          ],
        },
        {
          name: "Combinaison de base ACI 318 / ASCE 7 (pour comparaison)",
          latex: "U = 1{,}2\\,D + 1{,}6\\,L",
          description: "Combinaison américaine charges permanentes + exploitation ; les résistances sont réduites par un facteur φ (0,90 en flexion, 0,75 à l'effort tranchant).",
          variables: [
            { symbol: 'U', name: 'Effet de calcul (required strength)', unit: '\\text{kN, kN·m}', role: 'Équivalent américain de E_d.', category: 'Résultat' },
            { symbol: 'D', name: 'Charges permanentes (dead load)', unit: '\\text{kN/m}', role: 'Équivalent de G.', category: 'Action' },
            { symbol: 'L', name: "Charges d'exploitation (live load)", unit: '\\text{kN/m}', role: 'Équivalent de Q.', category: 'Action' },
          ],
          ruleOfThumb: "Ne mélangez jamais ces facteurs avec les résistances Eurocode : chaque code est calibré comme un ensemble.",
        },
      ],
    },

    {
      id: 6,
      key: 'stepbystep',
      title: "Calcul complet — Charges de calcul d'un plancher de bureaux",
      icon: '🔬',
      type: 'stepbystep',
      problem: "Plancher de bureaux : dalle et revêtements G = 6,0 kN/m², exploitation Q = 2,5 kN/m² (catégorie B). Calculer les charges ELU, ELS caractéristique et ELS quasi-permanente (ψ₂ = 0,3).",
      steps_demo: [
        { n: 1, text: "Identifier les actions : une seule action variable (exploitation), elle est donc dominante." },
        { n: 2, text: "ELU (6.10) : p_ELU = 1,35 × 6,0 + 1,50 × 2,5 = 8,10 + 3,75 = 11,85 kN/m²." },
        { n: 3, text: "ELS caractéristique : p_car = 6,0 + 2,5 = 8,5 kN/m² (vérification des contraintes)." },
        { n: 4, text: "ELS quasi-permanent : p_qp = 6,0 + 0,3 × 2,5 = 6,75 kN/m² (flèche à long terme, fissuration)." },
        { n: 5, text: "Rapport ELU/ELS : 11,85 / 8,5 = 1,39, ordre de grandeur habituel." },
        { n: 6, text: "Reporter ces valeurs dans la note de calcul en citant NF EN 1990 et NF EN 1991-1-1 avec leurs annexes nationales." },
      ],
      result_latex: "p_{ELU} = 11{,}85\\ \\text{kN/m}^2 \\qquad p_{car} = 8{,}50\\ \\text{kN/m}^2 \\qquad p_{qp} = 6{,}75\\ \\text{kN/m}^2",
    },

    {
      id: 7,
      key: 'units',
      title: "Valeurs de référence de l'EN 1990",
      icon: '📏',
      type: 'units',
      table: [
        { grandeur: "ψ₀ / ψ₁ / ψ₂ — habitation et bureaux (cat. A, B)", si: "0,7 / 0,5 / 0,3", imperial: "-", conversion: "EN 1990, tableau A1.1" },
        { grandeur: "ψ₀ / ψ₁ / ψ₂ — lieux de réunion et commerces (cat. C, D)", si: "0,7 / 0,7 / 0,6", imperial: "-", conversion: "Charges plus durables : ψ₂ élevé" },
        { grandeur: "ψ₀ / ψ₁ / ψ₂ — neige (altitude ≤ 1 000 m)", si: "0,5 / 0,2 / 0", imperial: "-", conversion: "Vent : 0,6 / 0,2 / 0" },
        { grandeur: "Durée d'utilisation de projet", si: "50 ans (bâtiments) / 100 ans (ponts)", imperial: "-", conversion: "Catégories 4 et 5" },
        { grandeur: "Charge d'exploitation de bureaux", si: "2,5 kN/m²", imperial: "52 psf", conversion: "1 kN/m² = 20,9 psf" },
        { grandeur: "Indice de fiabilité cible (RC2)", si: "β = 3,8 sur 50 ans", imperial: "-", conversion: "Probabilité de ruine ≈ 7 × 10⁻⁵" },
      ],
      note: "Les valeurs de ψ et certaines charges sont des **paramètres nationaux** : utilisez toujours l'annexe nationale du pays du projet.",
    },

    {
      id: 8,
      key: 'hypotheses',
      title: "Règles d'application",
      icon: '📋',
      type: 'hypotheses',
      items: [
        { type: 'info', text: "Une norme homologuée devient obligatoire si un texte réglementaire ou le marché y fait référence." },
        { type: 'info', text: "Les Eurocodes ne couvrent pas tout : produits innovants et procédés non traditionnels relèvent d'un Avis Technique, d'une ATEx ou d'une ETE." },
        { type: 'warning', text: "Les versions comptent : la deuxième génération des Eurocodes est en cours de publication ; le marché doit préciser les éditions applicables." },
        { type: 'warning', text: "Le coefficient γ_G = 1,00 s'applique aux charges permanentes **favorables** (stabilité, soulèvement) : ne l'oubliez pas pour les vérifications d'équilibre." },
        { type: 'tip', text: "Gardez un tableau de synthèse des NDP utilisés en tête de note de calcul : le contrôleur gagne du temps et vous aussi." },
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
          title: "Exemple 1 : résistances de calcul",
          given: "Béton C30/37 et acier B500B en situation durable",
          find: "f_cd et f_yd",
          solution_latex: "f_{cd} = \\frac{30}{1{,}5} = 20{,}0\\ \\text{MPa} \\qquad f_{yd} = \\frac{500}{1{,}15} = 434{,}8\\ \\text{MPa}",
          result: "f_cd = 20,0 MPa ; f_yd = 434,8 MPa.",
        },
        {
          title: "Exemple 2 : deux actions variables",
          given: "Toiture-terrasse accessible : G = 6,0 ; Q = 1,5 (ψ₀ = 0,7) ; neige S = 0,8 kN/m² (ψ₀ = 0,5)",
          find: "La charge ELU la plus défavorable",
          solution_latex: "Q\\ \\text{dominante} : 1{,}35 \\times 6 + 1{,}5 \\times 1{,}5 + 1{,}5 \\times 0{,}5 \\times 0{,}8 = 10{,}95 \\qquad S\\ \\text{dominante} : 1{,}35 \\times 6 + 1{,}5 \\times 0{,}8 + 1{,}5 \\times 0{,}7 \\times 1{,}5 = 10{,}88",
          result: "10,95 kN/m² avec l'exploitation comme action dominante.",
        },
        {
          title: "Exemple 3 : comparaison Eurocode / ACI",
          given: "Poutre : charges permanentes 10 kN/m, exploitation 5 kN/m",
          find: "La charge de calcul selon chaque code",
          solution_latex: "EC : 1{,}35 \\times 10 + 1{,}5 \\times 5 = 21{,}0\\ \\text{kN/m} \\qquad ACI : 1{,}2 \\times 10 + 1{,}6 \\times 5 = 20{,}0\\ \\text{kN/m}",
          result: "Valeurs proches, mais chaque code a ses propres coefficients de résistance : ne pas les mélanger.",
        },
      ],
    },

    {
      id: 10,
      key: 'real_examples',
      title: "Exemple réel — Un procédé hors norme sur un chantier de logements",
      icon: '🏢',
      type: 'examples_real',
      diagramType: 'process_flow',
      examples: [
        {
          context: "Isolation thermique par l'extérieur avec un système innovant sans Avis Technique",
          scenario: "Le contrôleur technique émet un avis défavorable : le procédé n'entre dans le domaine d'aucun NF DTU et ne dispose ni d'Avis Technique ni d'ATEx. L'assureur décennal de l'entreprise exclut la technique non courante.",
          decomposition_latex: "\\text{Solution : ATEx de cas a (2 à 3 mois)} \\ \\text{ou} \\ \\text{système sous Avis Technique équivalent}",
          lesson: "Avant de prescrire un procédé, vérifiez qu'il relève d'un NF DTU ou d'une évaluation technique en cours de validité : c'est une condition d'assurabilité de l'ouvrage.",
        },
      ],
    },

    {
      id: 11,
      key: 'diagrams',
      title: "Schéma de principe — La pyramide des textes",
      icon: '📊',
      type: 'interactive_diagram',
      diagramType: 'process_flow',
      description: "Du plus contraignant au plus spécifique : comment les textes s'articulent sur un projet.",
      diagram_description: [
        "Réglementation : lois, décrets et arrêtés (RE2020, sismique, incendie, accessibilité), toujours obligatoires",
        "Normes homologuées : NF, NF EN, NF EN ISO (AFNOR, CEN, ISO), obligatoires si citées",
        "Eurocodes + annexes nationales : conception et calcul des structures",
        "NF DTU : règles d'exécution des travaux de bâtiment",
        "Évaluations techniques : Avis Technique, DTA, ATEx, ETE pour les procédés innovants",
        "Marché : CCAP et CCTP fixent les textes et éditions applicables au projet",
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
          mistake: "Appliquer un Eurocode sans son annexe nationale",
          trap: "Utiliser les valeurs recommandées du texte européen là où la France a fixé d'autres NDP",
          fix: "Toujours lire l'Eurocode avec l'annexe nationale du pays de l'ouvrage.",
        },
        {
          mistake: "Prendre γ_G = 1,35 pour une charge favorable",
          trap: "Majorer le poids propre qui stabilise un mur ou s'oppose au soulèvement",
          fix: "Utiliser γ_G,inf = 1,00 pour la part favorable des charges permanentes.",
        },
        {
          mistake: "Ignorer les éditions des normes citées au marché",
          trap: "Calculer avec une version plus récente que celle du marché, ou l'inverse",
          fix: "Lister les références exactes (numéro et date) dans la note d'hypothèses validée par le contrôleur.",
        },
      ],
    },

    {
      id: 13,
      key: 'tips',
      title: "Astuces de bureau d'études",
      icon: '💡',
      type: 'tips',
      tips: [
        "Créez une fiche « hypothèses générales » par projet : normes, annexes nationales, classes de conséquences, durée d'utilisation, classes d'exposition.",
        "Pour retrouver une norme, utilisez son numéro exact (par exemple NF EN 1991-1-4) : les titres changent selon les éditions.",
        "Un NF DTU comporte plusieurs parties : CCT (cahier des clauses techniques), CGM (critères de choix des matériaux) et CCS (clauses spéciales).",
        "Sur un projet international, posez dès le démarrage la question du code de référence et de la langue des notes de calcul.",
      ],
    },

    {
      id: 14,
      key: 'norms',
      title: "Références essentielles",
      icon: '📜',
      type: 'norms',
      norms: [
        { code: "NF EN 1990 et NF EN 1990/NA", description: "Bases de calcul des structures : états limites, coefficients partiels, combinaisons d'actions." },
        { code: "NF EN 1991 (parties 1-1 à 1-7)", description: "Actions : charges d'exploitation, neige, vent, température, actions accidentelles." },
        { code: "NF EN 1992 à NF EN 1999", description: "Calcul des structures en béton, acier, mixte, bois, maçonnerie, géotechnique, séisme et aluminium." },
        { code: "NF EN 206 / NF EN 13670 / NF EN 1090-2", description: "Normes de produit et d'exécution : béton, exécution des ouvrages en béton, exécution des structures en acier." },
        { code: "Règlement (UE) 305/2011 (RPC)", description: "Marquage CE et déclaration des performances des produits de construction, remplacé progressivement par le règlement (UE) 2024/3110." },
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
          id: 'ex_nor_1',
          number: 1,
          difficulty: 'Facile',
          text: "Un plancher d'habitation porte G = 5,0 kN/m² et Q = 1,5 kN/m². Calculer la charge ELU.",
          hint: "1,35 G + 1,5 Q.",
          answer_latex: "p_{ELU} = 1{,}35 \\times 5{,}0 + 1{,}5 \\times 1{,}5 = 6{,}75 + 2{,}25 = 9{,}00\\ \\text{kN/m}^2",
          answer_text: "p_ELU = 9,00 kN/m².",
        },
        {
          id: 'ex_nor_2',
          number: 2,
          difficulty: 'Moyen',
          text: "Même plancher : calculer la charge ELS quasi-permanente (ψ₂ = 0,3) et expliquer à quoi elle sert.",
          hint: "G + ψ₂·Q.",
          answer_latex: "p_{qp} = 5{,}0 + 0{,}3 \\times 1{,}5 = 5{,}45\\ \\text{kN/m}^2",
          answer_text: "5,45 kN/m² : elle sert aux vérifications de long terme (flèche finale, fluage, fissuration).",
        },
        {
          id: 'ex_nor_3',
          number: 3,
          difficulty: 'Difficile',
          text: "Un mur de soutènement est stabilisé par son poids propre G = 120 kN/m et renversé par la poussée des terres (action permanente défavorable) H = 45 kN/m de bras de levier 1,5 m. Le poids agit à 1,2 m du point de basculement. Vérifier l'équilibre statique (EQU) avec γ_G,inf = 0,9 et γ_G,sup = 1,1 (valeurs EQU).",
          hint: "Moment stabilisant minoré ≥ moment déstabilisant majoré.",
          answer_latex: "M_{stb} = 0{,}9 \\times 120 \\times 1{,}2 = 129{,}6\\ \\text{kN·m/m} \\qquad M_{dst} = 1{,}1 \\times 45 \\times 1{,}5 = 74{,}3\\ \\text{kN·m/m}",
          answer_text: "129,6 ≥ 74,3 kN·m/m : l'équilibre statique est vérifié.",
        },
      ],
    },

    {
      id: 16,
      key: 'corrections',
      title: "Corrections détaillées",
      icon: '✅',
      type: 'corrections',
      note: "Les corrections figurent sous chaque exercice. Notez l'usage des coefficients favorables et défavorables dans l'exercice 3.",
    },

    {
      id: 17,
      key: 'quiz',
      title: "Quiz — Normes et Eurocodes",
      icon: '🎯',
      type: 'quiz',
      questions: [
        {
          id: 'q_nor_1',
          question: "Quel Eurocode traite du calcul géotechnique ?",
          options: [
            { id: 'a', text: 'EN 1992' },
            { id: 'b', text: 'EN 1997' },
            { id: 'c', text: 'EN 1998' },
          ],
          correct: 'b',
          explanation: "EN 1997 = géotechnique ; EN 1992 = béton ; EN 1998 = séisme.",
        },
        {
          id: 'q_nor_2',
          question: "Une norme NF EN est-elle obligatoire ?",
          options: [
            { id: 'a', text: 'Toujours' },
            { id: 'b', text: 'Jamais' },
            { id: 'c', text: 'Si un texte réglementaire ou le marché la rend obligatoire' },
          ],
          correct: 'c',
          explanation: "Les normes sont d'application volontaire, sauf référence réglementaire ou contractuelle.",
        },
        {
          id: 'q_nor_3',
          question: "Quelle est la valeur de ψ₂ pour un plancher de bureaux ?",
          options: [
            { id: 'a', text: '0,3' },
            { id: 'b', text: '0,7' },
            { id: 'c', text: '1,0' },
          ],
          correct: 'a',
          explanation: "Catégorie B (bureaux) : ψ₀ = 0,7 ; ψ₁ = 0,5 ; ψ₂ = 0,3.",
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
        "Expliquez le principe de la méthode des coefficients partiels et la notion de valeur caractéristique.",
        "Écrivez les combinaisons ELU fondamentale, ELS caractéristique, fréquente et quasi-permanente, et donnez un usage de chacune.",
        "Quelle est la différence entre une norme, un NF DTU et un Avis Technique ? Dans quels cas chacun est-il contractuel ?",
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
          question: "Le client vous demande d'utiliser un produit étranger sans marquage CE ni Avis Technique. Que répondez-vous ?",
          answer_hint: "J'explique les risques (assurabilité, responsabilité, contrôle technique) et je propose soit un produit équivalent évalué, soit une ATEx pour ce chantier, avant toute commande.",
        },
        {
          question: "Pourquoi faut-il préciser l'annexe nationale dans une note de calcul ?",
          answer_hint: "Parce que les Eurocodes laissent certains paramètres au choix des États (NDP) : coefficients, valeurs de ψ, cartes de neige et de vent. Sans l'annexe nationale, le calcul est incomplet et non vérifiable.",
        },
      ],
    },

    {
      id: 20,
      key: 'practical_case',
      title: "Cas pratique — Sollicitations de calcul d'une poutre de plancher",
      icon: '🔧',
      type: 'practical',
      diagramType: 'process_flow',
      scenario: "Poutre isostatique de 6 m sous plancher de bureaux : g = 20 kN/m, q = 10 kN/m.",
      description: "Calculer le moment de calcul ELU, le moment caractéristique et le moment quasi-permanent, puis indiquer à quelles vérifications ils servent.",
      resolution_latex_1: "p_{ELU} = 1{,}35 \\times 20 + 1{,}5 \\times 10 = 42\\ \\text{kN/m} \\quad \\Rightarrow \\quad M_{Ed} = \\frac{42 \\times 6^2}{8} = 189\\ \\text{kN·m}",
      resolution_latex_2: "p_{car} = 20 + 10 = 30\\ \\text{kN/m} \\quad \\Rightarrow \\quad M_{car} = \\frac{30 \\times 6^2}{8} = 135\\ \\text{kN·m}",
      resolution_latex_3: "p_{qp} = 20 + 0{,}3 \\times 10 = 23\\ \\text{kN/m} \\quad \\Rightarrow \\quad M_{qp} = \\frac{23 \\times 6^2}{8} = 103{,}5\\ \\text{kN·m}",
      conclusion: "M_Ed sert au dimensionnement des armatures (ELU), M_car à la limitation des contraintes, M_qp aux flèches et fissures à long terme.",
    },

    {
      id: 21,
      key: 'summary',
      title: "Résumé",
      icon: '📋',
      type: 'summary',
      content: `### Le cadre normatif en 6 points
1. **Réglementation** obligatoire ; **normes** volontaires sauf référence réglementaire ou contractuelle.
2. **Eurocodes** EN 1990 à EN 1999, toujours avec leur **annexe nationale**.
3. **ELU** : $1{,}35\\,G + 1{,}5\\,Q_1 + 1{,}5\\,\\psi_0 Q_i$ ; **ELS** caractéristique, fréquent, quasi-permanent.
4. **Matériaux** : $\\gamma_c = 1{,}5$ ; $\\gamma_s = 1{,}15$ ; $\\gamma_{M0} = 1{,}0$.
5. **NF DTU** pour l'exécution, **Avis Technique / ATEx** pour l'innovation.
6. **Marquage CE** et déclaration des performances pour les produits.`,
    },

    {
      id: 22,
      key: 'key_points',
      title: "Points clés à retenir",
      icon: '⭐',
      type: 'keypoints',
      points: [
        "Eurocode + annexe nationale = calcul complet",
        "ELU : γ_G = 1,35 (1,00 si favorable), γ_Q = 1,50",
        "Bureaux : ψ₀ = 0,7 ; ψ₁ = 0,5 ; ψ₂ = 0,3",
        "Durée d'utilisation : 50 ans (bâtiments), 100 ans (ponts)",
        "Ne jamais mélanger les coefficients de deux codes",
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
        "Je distingue réglementation, norme, NF DTU et évaluation technique",
        "Je connais la liste des Eurocodes et le rôle des annexes nationales",
        "Je sais écrire les combinaisons ELU et ELS de l'EN 1990",
        "Je sais calculer des résistances de calcul f_cd et f_yd",
        "J'ai réussi les trois exercices",
      ],
    },
  ],

  quickQuiz: {
    question: "Que faut-il toujours associer à un Eurocode pour un projet en France ?",
    options: [
      { id: 'a', label: 'A) Son annexe nationale française' },
      { id: 'b', label: 'B) Le code américain ACI 318' },
      { id: 'c', label: 'C) Un Avis Technique' },
    ],
    correct: 'a',
    explanation: "L'annexe nationale fixe les paramètres déterminés au niveau national (NDP) sans lesquels le calcul est incomplet.",
  },
};
