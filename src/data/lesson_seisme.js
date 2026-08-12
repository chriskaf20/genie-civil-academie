// ── Lesson: Génie Parasismique & Eurocode 8 — Module 27 ──────────────────────
export const lesson_seisme = {
  moduleId: 27,
  slug: 'environnement',
  lessonIndex: 1,
  title: "Génie Parasismique, Eurocode 8 & Protection des Structures",
  subtitle: "Module 27 — Ingénierie Sismique & Vulnérabilité",
  level: 'Avancé',
  duration: '45h',
  diagramType: 'rebar_beam',
  tags: ['Sismique', 'Eurocode 8', 'Spectre de Réponse', 'Ductilité', 'Joint Sismique', 'Base Isolation', 'Accélération'],

  steps: [
    {
      id: 1,
      key: 'definition',
      title: "Définition — L'Ingénierie Sismique & l'Eurocode 8",
      icon: '📖',
      type: 'definition',
      fr: 'Génie Parasismique, Eurocode 8, Spectre de Calcul & Appuis Isolateurs',
      en: 'Earthquake Engineering, Eurocode 8 & Seismic Design',
      metier: "Pratiquée par les ingénieurs spécialistes en parasismique (Eurocode 8), experts en vulnérabilité des ouvrages et concepteurs d'appuis isolateurs de fondation.",
      content: `Le **génie parasismique** est la discipline de l'ingénierie des structures qui étudie le comportement des constructions soumises à des tremblements de terre, afin d'éviter l'effondrement et de protéger les vies humaines.

### Les 4 grands principes de l'Eurocode 8 (NF EN 1998) :
1. **Le Zonage Sismique & l'Accélération de calcul ($a_{g}$)** : La France est découpée en 5 zones de sismicité (de 1 très faible à 5 forte en Guadeloupe/Martinique) fixant l'accélération maximale du sol $a_{gr}$.
2. **Le Spectre de Réponse de Calcul ($S_d(T)$)** : Courbe enveloppe de l'accélération subie par la structure en fonction de sa période propre $T_1$.
3. **La Ductilité & le Coefficient de Comportement ($q$)** : Capacité de la structure à dissiper l'énergie sismique par déformation plastique sans rupture brutale ($q = 1,5$ en DCL faible à $q = 4,5$ en DCH forte ductilité).
4. **La Régularité & le Confinement** : Principes de conception architecturale parasismique (symétrie, compacité, étriers rapprochés en zones critiques).

> 💡 **Le principe de l'isolation à la base** : Découpler le bâtiment du sol grâce à des **appuis en élastomère fretté** avec noyau de plomb pour rallonger la période propre ($T_1 > 2{,}5\\text{ s}$) et diviser les forces sismiques par 5 !`,
    },

    {
      id: 2,
      key: 'importance',
      title: "Pourquoi la conception parasismique est une obligation vitale",
      icon: '⚠️',
      type: 'importance',
      content: `Les séismes majeurs (Kobe, Haïti, Turquie, L'Aquila) prouvent que ce ne sont pas les secousses qui tuent, mais l'effondrement des bâtiments mal conçus.

- **Non-effondrement & Sauvegarde des Vies** : Garantir que la structure conserve sa portance sous le séisme de projet (période de retour 475 ans).
- **Maintien de la continuité d'activité** : Les hôpitaux, casernes de pompiers et PC de crise (Bâtiments de Catégorie IV) doivent rester 100% opérationnels immédiatement après la secousse !
- **Évitement de l'effet d'entrechoquement (Pounding)** : Respecter un **joint sismique $d_s$** suffisant entre immeubles voisins pour éviter qu'ils ne se marquent.

> ⚠️ **Règle d'or** : "Un bâtiment rigide et fragile casse net sous le séisme. Un bâtiment ductile, régulier et bien confiné dissipe l'énergie en toute sécurité !"`,
    },

    {
      id: 3,
      key: 'applications',
      title: "Applications terrain — Typologies & Dispositifs",
      icon: '🏗️',
      type: 'applications',
      examples: [
        {
          context: "Conception de Bâtiments d'Habitation en Zone 3 et 4",
          text: "Contreventement par voiles en béton armé symétriques avec zones critiques fortement confinées en armatures (étriers Φ 8 espacés de 5 cm).",
        },
        {
          context: "Isolation à la Base d'Hôpitaux & Centres de Crise",
          text: "Mise en place d'appuis élastomères frettés sous les poteaux de fondation pour filtrer 80% des accélérations du sol.",
        },
        {
          context: "Renforcement Parasismique d'Ouvrages Existants",
          text: "Chemisage de poteaux béton par des tissus de fibres de carbone (PRFC) pour augmenter leur ductilité et résistance au cisaillement.",
        },
        {
          context: "Dimensionnement des Joints Sismiques entre Bâtiments",
          text: "Calcul du joint de séparation d_s = √(d1² + d2²) pour éviter l'entrechoquement des structures adjacentes.",
        },
        {
          context: "Piles de Ponts en Zone Sismique",
          text: "Création de rotules plastiques canalisées en tête et pied de piles avec fusibles mécaniques remplaçables.",
        },
      ],
    },

    {
      id: 4,
      key: 'theory',
      title: "Théorie — Force Sismique de Base & Spectre Eurocode 8",
      icon: '📐',
      type: 'theory',
      diagramType: 'rebar_beam',
      content: `### 1. Force Sismique de Base ($F_b$)

La force horizontale globale de calcul appliquée à la base de la structure d'après l'Eurocode 8 vaut :

$$F_b = S_d(T_1) \\cdot m \\cdot \\lambda$$

- $S_d(T_1)$ = accélération spectrale de calcul au niveau de la période fondamentale $T_1$ [m/s² ou g].
- $m$ = masse totale de la structure mobilisée par le séisme (Masse propre + coefficient de combinaison des surcharges $\\psi_2 \\cdot q$).
- $\\lambda$ = facteur de correction de masse ($\\lambda = 0{,}85$ si $T_1 \\le 2 T_C$ et bâtiment $> 2$ étages, sinon $\\lambda = 1{,}0$).

### 2. Accélération de Calcul du Sol ($a_g$)

$$a_g = \\gamma_{I} \\cdot a_{gr}$$

- $a_{gr}$ = accélération nominale de référence du sol selon la zone sismique (ex: Zone 4 $\\to a_{gr} = 1{,}6\\text{ m/s}^2$).
- $\\gamma_I$ = coefficient d'importance du bâtiment (Catégorie I: 0,8 | II: 1,0 | III: 1,2 | IV Hôpitaux: 1,4).

### 3. Spectre de Calcul ($S_d$) et Coefficient de Comportement ($q$)

Dans le plateau du spectre ($T_B \\le T \\le T_C$) :

$$S_d(T) = a_g \\cdot S \\cdot \\frac{2{,}5}{q}$$

- $S$ = coefficient du type de sol (Sol rocheux A: $S = 1{,}0$ | Sol meuble E: $S = 1{,}4$).
- $q$ = coefficient de comportement prenant en compte la ductilité de la structure ($q = 1,5\\text{ à } 4{,}5$).`,
    },

    {
      id: 5,
      key: 'formulas',
      title: "Formules essentielles — Ingénierie Sismique Eurocode 8",
      icon: '🔢',
      type: 'formulas',
      diagramType: 'rebar_beam',
      formulas: [
        {
          name: "Force sismique de base Fb",
          latex: "F_b = S_d(T_1) \\cdot m \\cdot \\lambda \\quad [\\text{kN}]",
          description: "m = masse totale équivalente du bâtiment, Sd(T1) = valeur du spectre de calcul en m/s².",
        },
        {
          name: "Accélération spectrale sur le plateau (T_B ≤ T ≤ T_C)",
          latex: "S_d(T) = a_{gr} \\cdot \\gamma_I \\cdot S \\cdot \\frac{2{,}5}{q} \\quad [\\text{m/s}^2]",
          description: "Le coefficient de comportement q divise directement la force sismique d'un facteur 2 à 4 !",
        },
        {
          name: "Distribution de la force sismique par étage (Fi)",
          latex: "F_i = F_b \\cdot \\frac{z_i \\cdot m_i}{\\sum (z_j \\cdot m_j)}",
          description: "zi = hauteur de l'étage i au-dessus de la base. Les étages supérieurs reçoivent les forces les plus fortes.",
        },
        {
          name: "Joint sismique minimal entre 2 bâtiments",
          latex: "d_s = \\sqrt{d_1^2 + d_2^2} \\ge 40 \\text{ mm}",
          description: "d1 et d2 sont les déplacements maximaux calculés au niveau du sommet de chaque bâtiment.",
        },
        {
          name: "Condition d'étage souple (Soft Storey)",
          latex: "K_{étage,i} \\ge 0{,}70 \\cdot K_{étage,i+1}",
          description: "Empêcher qu'un étage ne soit nettement moins rigide que l'étage supérieur (cause majeure d'effondrement).",
        },
      ],
    },

    {
      id: 6,
      key: 'stepbystep',
      title: "Calcul complet — Force sismique de base et effort par étage d'un immeuble R+4",
      icon: '🔬',
      type: 'stepbystep',
      problem: "Un immeuble de logements (Catégorie II : γI = 1,0) est construit en Zone sismique 4 (agr = 1,6 m/s²) sur un sol de classe C (S = 1,15). La masse totale mobilisée vaut m = 2 000 tonnes (2 000 000 kg). La structure en voiles béton armé a une ductilité moyenne DCM (q = 3,0). La période propre calculée vaut T1 = 0,35 s (située sur le plateau TC). 1) Calculer l'accélération spectrale de calcul Sd(T1). 2) Calculer la force sismique de base totale Fb (λ = 0,85). 3) Calculer l'effort sismique Fi au niveau du toit (H = 15 m) si ∑ (zi · mi) = 18 000 t·m.",
      steps_demo: [
        { n: 1, text: "Calcul de l'accélération de calcul ag : ag = agr × γI = 1,6 m/s² × 1,0 = 1,60 m/s²" },
        { n: 2, text: "Calcul de l'accélération spectrale de plateau Sd : Sd = ag × S × (2,5 / q) = 1,60 × 1,15 × (2,5 / 3,0) = 1,84 × 0,833 = 1,533 m/s² (0,156 g)" },
        { n: 3, text: "Calcul de la force sismique de base Fb : Fb = Sd × m × λ = 1,533 m/s² × 2 000 000 kg × 0,85 = 2 606 100 N = 2 606,1 kN (soit 260,6 tonnes de poussée horizontale à la base)" },
        { n: 4, text: "Distribution au niveau du toit (m_toit = 350 t, z_toit = 15 m) : (z_toit × m_toit) = 15 × 350 = 5 250 t·m" },
        { n: 5, text: "Calcul de la force sismique F_toit : F_toit = Fb × (5 250 / 18 000) = 2 606,1 × 0,2917 = 760,1 kN." },
      ],
      result_latex: "S_d = \\textbf{1{,}533 m/s}^2 \\qquad F_b = \\textbf{2 606{,}1 kN} \\qquad F_{toit} = \\textbf{760{,}1 kN} \\quad \\checkmark",
    },

    {
      id: 7,
      key: 'units',
      title: "Unités & Symboles du Génie Parasismique — Tableau de référence",
      icon: '📏',
      type: 'units',
      table: [
        { grandeur: "Accélération de référence agr", si: "m/s² ou g (g = 9,81 m/s²)", imperial: "ft/s²", conversion: "Zone 1: 0,4 m/s² | Zone 2: 0,7 m/s² | Zone 3: 1,1 m/s² | Zone 4: 1,6 m/s² | Zone 5: 3,0 m/s²" },
        { grandeur: "Coefficient de comportement q", si: "Adimensionnel (1,5 à 4,5)", imperial: "R factor", conversion: "Réduit les efforts de calcul grâce à la déformation plastique ductile" },
        { grandeur: "Coefficient de sol S", si: "Adimensionnel (1,0 à 1,4)", imperial: "-", conversion: "Sol A (Rocher) S=1,0 | Sol E (Alluvions molles) S=1,4 (Amplification du sol)" },
        { grandeur: "Période fondamentale T1", si: "Secondes [s]", imperial: "sec", conversion: "Durée d'une oscillation complète du 1er mode propre" },
        { grandeur: "Déplacement relatif inter-étage dr", si: "mm", imperial: "in", conversion: "Limité par l'Eurocode 8 à 0,005 h (0,5% de la hauteur sous plafond)" },
      ],
      note: "⚠️ ATTENTION : La ductilité globale d'une structure exige un **confinement rigoureux des aciers** dans les zones de rotules plastiques (noeuds poteaux-poutres et pieds de voiles) !",
    },

    {
      id: 8,
      key: 'hypotheses',
      title: "Hypothèses & principes de conception parasismique",
      icon: '📋',
      type: 'hypotheses',
      items: [
        { type: 'info', text: "L'analyse modale spectrale est la méthode de référence Eurocode 8 pour les structures non régulières." },
        { type: 'info', text: "Hypothèse de diaphragme rigide : Les planchers béton doivent être suffisamment rigides pour distribuer la force sismique aux voiles au prorata de leur raideur." },
        { type: 'warning', text: "ATTENTION : Excentricité accidentelle e_a : Pour prendre en compte la torsion d'ensemble, ajouter une excentricité de 5% de la largeur du bâtiment entre le centre de masse et le centre de rigidité !" },
        { type: 'warning', text: "Arrêt des voiles avant les fondations : Ne jamais interrompre un voile de contreventement au rez-de-chaussée (création d'un étage souple destructeur) !" },
        { type: 'tip', text: "Armatures de confinement : Les étriers de confinement doivent présenter des crochets fermés à 135° ancrés dans le cœur du béton pour éviter le flambement des barres longitudinales." },
      ],
    },

    {
      id: 9,
      key: 'simple_examples',
      title: "Exemples guidés — Accélération spectrale & Joint sismique",
      icon: '✏️',
      type: 'examples_simple',
      examples: [
        {
          title: "Exemple 1 : Calcul de l'accélération spectrale Sd avec ductilité",
          given: "Zone 3 (agr = 1,1 m/s²), Bâtiment courant γI = 1,0, Sol B (S = 1,35). Ductilité moyenne q = 3,0",
          find: "L'accélération spectrale de calcul Sd sur le plateau",
          solution_latex: "S_d = 1{,}1 \\times 1{,}0 \\times 1{,}35 \\times \\frac{2{,}5}{3{,}0} = 1{,}485 \\times 0{,}833 = 1{,}238 \\text{ m/s}^2 \\quad (0{,}126 \\text{ g})",
          result: "Accélération spectrale de calcul Sd = 1,24 m/s².",
        },
        {
          title: "Exemple 2 : Calcul du joint sismique de séparation",
          given: "Deux immeubles contigus R+6. Déplacement max au sommet calculé du Bâtiment 1 : d1 = 35 mm. Bâtiment 2 : d2 = 45 mm",
          find: "La largeur minimale du joint sismique ds selon l'Eurocode 8",
          solution_latex: "d_s = \\sqrt{d_1^2 + d_2^2} = \\sqrt{35^2 + 45^2} = \\sqrt{1225 + 2025} = \\sqrt{3250} = 57{,}0 \\text{ mm}",
          result: "Largeur du joint sismique requis ds = 57 mm (Arrondir à 60 mm).",
        },
        {
          title: "Exemple 3 : Impact de l'isolation à la base",
          given: "Bâtiment non isolé T1 = 0,40 s → Sd = 2,5 m/s². Bâtiment sur isolateurs T1 = 2,50 s → Sd = 0,50 m/s²",
          find: "Le taux de réduction de la force sismique de base",
          solution_latex: "\\text{Réduction} = 1 - \\frac{0{,}50}{2{,}50} = 1 - 0{,}20 = 0{,}80 = 80\\%",
          result: "L'isolation à la base réduit les forces sismiques subies par la structure de 80% !",
        },
      ],
    },

    {
      id: 10,
      key: 'real_examples',
      title: "Exemple réel — L'Hôpital de Pointe-à-Pitre sur Appuis Isolateurs",
      icon: '🏢',
      type: 'examples_real',
      diagramType: 'rebar_beam',
      examples: [
        {
          context: "Construction du nouveau CHU de Guadeloupe en Zone sismique 5 (Sismicité forte agr = 3,0 m/s²)",
          scenario: "Pose de 220 appuis élastomères frettés à noyau de plomb sous la totalité du bâtiment. Période propre portée à T1 = 2,8 s.",
          decomposition_latex: "S_d \\text{ (sans isolation) = } 7{,}5 \\text{ m/s}^2 \\quad \\Rightarrow \\quad S_d \\text{ (avec isolation) = } 1{,}2 \\text{ m/s}^2",
          lesson: "Grâce à l'isolation par le bas, le CHU peut résister à un séisme de magnitude 8,0 sans aucune dégradation structurelle ni arrêt des soins d'urgence.",
        },
      ],
    },

    {
      id: 11,
      key: 'diagrams',
      title: "Schéma d'un Spectre de Réponse & Zones Critiques de Confinement",
      icon: '📊',
      type: 'interactive_diagram',
      diagramType: 'rebar_beam',
      description: "Visualisez le spectre de réponse de calcul Eurocode 8, le fonctionnement d'un appui isolateur de fondation et la disposition des étriers de confinement dans un poteau sismique.",
      diagram_description: [
        "Spectre Eurocode 8 : Plateau d'accélération Sd(T) et réduction par le coefficient de comportement q",
        "Appui Isolateur : Feuillets d'acier et d'élastomère découpant le mouvement du sol de la superstructure",
        "Zone critique de confinement : Étriers serrés (e = 5 cm) en pied de poteau avec crochets à 135°",
      ],
    },

    {
      id: 12,
      key: 'mistakes',
      title: "Erreurs destructrices en Conception Parasismique",
      icon: '⛔',
      type: 'mistakes',
      items: [
        {
          mistake: "Créer un rez-de-chaussée 'étage souple' (Soft Storey)",
          trap: "Supprimer les voiles béton au RDC pour faire un hall vitré ou un parking tout en gardant des voiles aux étages",
          fix: "Cause n°1 des effondrements sismiques dans le monde ! Prolongation obligatoire des voiles de contreventement jusqu'aux fondations.",
        },
        {
          mistake: "Négliger la torsion d'ensemble (Asymétrie des voiles)",
          trap: "Placer tous les voiles de contreventement béton d'un seul côté du bâtiment (ex: cage d'ascenseur excentrée)",
          fix: "Le centre de rigidité s'éloigne du centre de masse, provoquant une vrille destructrice de l'immeuble. Répartir les voiles symétriquement en périphérie.",
        },
        {
          mistake: "Réaliser des crochets d'étriers à 90° au lieu de 135°",
          trap: "Utiliser des étriers droits fermés à 90° dans les poteaux",
          fix: "Sous les secousses alternées, le béton d'enrobage éclate et les crochets à 90° s'ouvrent, provoquant le flambement immédiat des aciers principaux. Seuls les crochets à 135° sont autorisés en parasismique.",
        },
      ],
    },

    {
      id: 13,
      key: 'tips',
      title: "Astuces du spécialiste en Ingénierie Parasismique",
      icon: '💡',
      type: 'tips',
      tips: [
        "Règle de régularité en plan : Le bâtiment doit présenter une forme simple (rectangle, carré). Éviter les formes en L, U, T ou placer des joints sismiques pour découpler les blocs en rectangles simples.",
        "Dimensionnement rapide des voiles de contreventement : La surface totale des voiles béton dans chaque direction x et y doit représenter au moins **1,5% à 2,0% de la surface de plancher** de l'étage.",
        "Joint sismique de sécurité : Prévoir systématiquement au moins 1 cm de joint de séparation par mètre de hauteur de bâtiment.",
        "Vérification de la ductilité : Privilégier la ductilité moyenne DCM (q = 3,0) pour les bâtiments courants pour équilibrer coût des aciers et forces de calcul.",
      ],
    },

    {
      id: 14,
      key: 'normes',
      title: "Normes & Réglementation Parasismique",
      icon: '📜',
      type: 'norms',
      norms: [
        { code: "NF EN 1998-1 (Eurocode 8)", description: "Calcul des structures pour leur résistance aux séismes — Règles générales, actions sismiques et bâtiments." },
        { code: "Arrêté du 22 octobre 2010", description: "Classification et règles de construction paraseismique applicables aux bâtiments en France (Zones 1 à 5)." },
        { code: "NF EN 1998-5", description: "Eurocode 8 — Fondations, structures de soutènement et aspects géotechniques." },
      ],
    },

    {
      id: 15,
      key: 'exercises',
      title: "Exercices Ingénierie Sismique — 3 niveaux",
      icon: '✍️',
      type: 'exercises',
      exercises: [
        {
          id: 'ex_sei_1',
          number: 1,
          difficulty: 'Facile',
          text: "Calculer l'accélération de calcul ag pour un bâtiment de Catégorie III (γI = 1,2) situé en Zone sismique 4 (agr = 1,6 m/s²).",
          hint: "ag = agr × γI.",
          answer_latex: "a_g = 1{,}6 \\text{ m/s}^2 \\times 1{,}2 = 1{,}92 \\text{ m/s}^2",
          answer_text: "Accélération de calcul ag = 1,92 m/s².",
        },
        {
          id: 'ex_sei_2',
          number: 2,
          difficulty: 'Moyen',
          text: "Calculer la force sismique de base Fb d'un bâtiment de masse m = 1 500 tonnes soumis à une accélération spectrale Sd = 2,0 m/s² (λ = 0,85).",
          hint: "Fb = Sd × m × λ.",
          answer_latex: "F_b = 2{,}0 \\text{ m/s}^2 \\times 1\\,500\\,000 \\text{ kg} \\times 0{,}85 = 2\\,550\\,000 \\text{ N} = 2\\,550 \\text{ kN}",
          answer_text: "Force sismique de base Fb = 2 550 kN (255 tonnes).",
        },
        {
          id: 'ex_sei_3',
          number: 3,
          difficulty: 'Difficile',
          text: "Deux tours contiguës ont des déplacements maximaux au sommet de d1 = 40 mm et d2 = 60 mm. Calculer la largeur minimale du joint sismique ds exigée par l'Eurocode 8.",
          hint: "ds = √(d1² + d2²).",
          answer_latex: "d_s = \\sqrt{40^2 + 60^2} = \\sqrt{1600 + 3600} = \\sqrt{5200} = 72{,}11 \\text{ mm}",
          answer_text: "Largeur minimale du joint sismique ds = 72,1 mm (Arrondir à 75 mm).",
        },
      ],
    },

    {
      id: 16,
      key: 'corrections',
      title: "Corrections détaillées",
      icon: '✅',
      type: 'corrections',
      note: "Retrouvez la démarche complète d'analyse modale spectrale et de confinement parasismique en cliquant sur 'Voir la correction'.",
    },

    {
      id: 17,
      key: 'quiz',
      title: "Quiz Génie Parasismique — 3 questions",
      icon: '🎯',
      type: 'quiz',
      questions: [
        {
          id: 'q_sei_1',
          question: "Quel est le rôle du coefficient de comportement 'q' dans le calcul sismique Eurocode 8 ?",
          options: [
            { id: 'a', text: "Il augmente la force sismique pour plus de sécurité" },
            { id: 'b', text: "Il réduit la force sismique de calcul en prenant en compte la capacité de la structure à dissiper l'énergie par déformation plastique ductile" },
            { id: 'c', text: "Il mesure la vitesse du vent" },
          ],
          correct: 'b',
          explanation: "Le coefficient de comportement q (généralement 1,5 à 4,5) divise les forces sismiques de calcul car la structure absorbe l'énergie en se déformant de manière ductile.",
        },
        {
          id: 'q_sei_2',
          question: "Pourquoi les crochets d'étriers dans les zones critiques sismiques doivent-ils être ancrés à 135° et non à 90° ?",
          options: [
            { id: 'a', text: "Pour économiser de l'acier" },
            { id: 'b', text: "Pour empêcher l'ouverture des étriers et le flambement des aciers verticaux lorsque le béton d'enrobage éclate sous le séisme" },
            { id: 'c', text: "Pour des raisons purement esthétiques" },
          ],
          correct: 'b',
          explanation: "Les crochets à 135° s'ancrent profondément au cœur du béton. Même si l'enrobage éclate, l'étrier reste fermé et maintient le confinement des barres longitudinales.",
        },
        {
          id: 'q_sei_3',
          question: "Qu'appelle-t-on l'effet d'étage souple (Soft Storey) ?",
          options: [
            { id: 'a', text: "Un étage équipé de moquette" },
            { id: 'b', text: "Une discontinuité majeure de raideur où un étage (ex: RDC) est beaucoup moins rigide que les étages supérieurs, provoquant sa ruine par cisaillement" },
            { id: 'c', text: "Un plancher en bois" },
          ],
          correct: 'b',
          explanation: "L'étage souple est une discontinuité mortelle en parasismique : toute la déformation sismique se concentre sur les poteaux du RDC qui cisaillent et s'effondrent.",
        },
      ],
    },

    {
      id: 18,
      key: 'exam_questions',
      title: "Questions d'examen — Master Parasismique",
      icon: '🎓',
      type: 'exam',
      questions: [
        "Démontrez la méthode de calcul du spectre de réponse de calcul Sd(T) d'après l'Eurocode 8 en fonction des paramètres ag, S, η et q.",
        "Exposez le principe d'aménagement des voiles de contreventement en béton armé pour annuler le couple de torsion d'ensemble.",
        "Expliquez le fonctionnement théorique et le dimensionnement d'un système d'isolation à la base par appuis élastomères frettés.",
      ],
    },

    {
      id: 19,
      key: 'interview_questions',
      title: "Questions d'entretien — Ingénieur Parasismique",
      icon: '💼',
      type: 'interview',
      questions: [
        {
          question: "Comment vérifiez-vous la régularité en plan et en hauteur d'un bâtiment pour appliquer la méthode de la force latérale simplifiée ?",
          answer_hint: "Régularité en plan : Forme symétrique, diaphragmes rigides, excentricité e0 < 0,30 r0. Régularité en hauteur : Masse et raideur constantes ou diminuant progressivement vers le haut sans variation > 20% entre étages successifs. Si non régulier, l'analyse modale spectrale 3D est obligatoire.",
        },
      ],
    },

    {
      id: 20,
      key: 'practical_case',
      title: "Cas pratique — Dimensionnement parasismique d'une tour d'habitation R+8",
      icon: '🔧',
      type: 'practical',
      scenario: "Bâtiment R+8 à Fort-de-France (Zone 5, agr = 3,0 m/s², Catégorie II γI = 1,0, Sol C S = 1,15, m = 4 500 t, q = 3,6).",
      description: "Calcul de la force sismique de base et ferraillage de confinement des voiles de rive.",
      resolution_latex_1: "S_d = 3{,}0 \\times 1{,}0 \\times 1{,}15 \\times \\frac{2{,}5}{3{,}6} = 2{,}396 \\text{ m/s}^2 \\quad (0{,}244 \\text{ g})",
      resolution_latex_2: "F_b = 2{,}396 \\times 4\\,500\\,000 \\text{ kg} \\times 0{,}85 = 9\,164\\,700 \\text{ N} = 9\\,164{,}7 \\text{ kN} \\quad (916 \\text{ tonnes})",
      conclusion: "Dimensionnement des voiles de contreventement béton 25 cm avec armatures transversales d'about Φ10 tous les 6 cm.",
    },

    {
      id: 21,
      key: 'summary',
      title: "Résumé exécutif — Le Génie Parasismique en 6 points",
      icon: '📋',
      type: 'summary',
      content: `### L'Ingénierie Sismique en 6 points clés

1. **Eurocode 8** : Norme de référence européenne NF EN 1998 pour le dimensionnement parasismique.
2. **Force Sismique de Base** : $F_b = S_d(T_1) \\cdot m \\cdot \\lambda$ appliquée à la base de l'ouvrage.
3. **Coefficient de Comportement q** : Divise la force de calcul grâce à la ductilité de la structure.
4. **Confinement des Aciers** : Étriers serrés à crochets 135° obligatoires dans les zones critiques.
5. **Régularité & Étage Souple** : Interdiction des ruptures de raideur (voiles continus jusqu'aux fondations).
6. **Joint Sismique** : $d_s = \\sqrt{d_1^2 + d_2^2} \\ge 40\\text{ mm}$ pour éviter l'entrechoquement.`,
    },

    {
      id: 22,
      key: 'key_points',
      title: "Points clés à mémoriser — Génie Sismique",
      icon: '⭐',
      type: 'keypoints',
      points: [
        "Force sismique Fb = Sd(T1) · m · λ",
        "Accélération spectrale Sd = ag · S · (2,5 / q)",
        "Crochets d'étriers à 135° obligatoires",
        "Pas d'étage souple au RDC",
        "Joint sismique minimal ds ≥ 40 mm",
      ],
    },

    {
      id: 23,
      key: 'self_assessment',
      title: "Auto-évaluation — Ingénierie Sismique",
      icon: '🏆',
      type: 'self_assessment',
      description: "Validez vos compétences en génie parasismique :",
      objectives: [
        "Je sais calculer la force sismique de base Fb et l'accélération spectrale Sd sous Eurocode 8",
        "Je maîtrise le rôle du coefficient de comportement q et de la ductilité",
        "Je connais les règles de disposition des armatures parasismiques (confinement à 135°)",
        "J'ai résolu les 3 exercices d'ingénierie sismique avec succès",
        "J'ai obtenu 3/3 au quiz parasismique",
      ],
    },
  ],

  quickQuiz: {
    question: "Quelle force sismique de base Fb subit un bâtiment de masse m = 1000 t soumis à une accélération spectrale Sd = 2,0 m/s² (λ = 0,85) ?",
    options: [
      { id: 'a', label: "A) 1 700 kN" },
      { id: 'b', label: "B) 2 000 kN" },
      { id: 'c', label: "C) 850 kN" },
    ],
    correct: 'a',
    explanation: "Fb = Sd × m × λ = 2,0 m/s² × 1 000 000 kg × 0,85 = 1 700 000 N = 1 700 kN.",
  },
};
