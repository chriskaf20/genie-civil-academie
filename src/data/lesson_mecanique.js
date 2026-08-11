// ── Lesson: Mécanique des Structures & Statique — Module 06 ────────────────────
export const lesson_mecanique = {
  moduleId: 6,
  slug: 'mecanique',
  lessonIndex: 1,
  title: 'Statique & Mécanique des Structures',
  subtitle: 'Module 06 — Mécanique des Structures',
  level: 'Intermédiaire',
  duration: '50h',
  diagramType: 'force_decomposition',
  tags: ['Statique', 'Équilibre', 'Treillis', 'Portiques', 'Réactions', 'Nœuds', 'Eurocodes'],

  steps: [
    {
      id: 1,
      key: 'definition',
      title: 'Définition — La Mécanique des Structures',
      icon: '📖',
      type: 'definition',
      fr: 'Mécanique des Structures & Statique',
      en: 'Structural Mechanics & Statics',
      metier: "Employée quotidiennement par les ingénieurs de structures pour calculer les réactions d'appui, les efforts dans les barres de treillis, les portiques de bâtiments et les ponts.",
      content: `La **mécanique des structures** étudie le comportement des systèmes solides **soumis à des forces extérieures**, en recherchant :
- Les **réactions d'appui** (forces exercées par les supports sur la structure).
- La **distribution des efforts internes** (Normal N, Tranchant V, Moment M) dans chaque élément.
- La **stabilité** et les conditions d'**isostaticité** ou d'**hyperstaticité**.

### Deux grandes familles de structures :
1. **Structures isostatiques** : Calcul par équations d'équilibre seules (3 équations pour 3 inconnues en 2D). Ex : poutre bi-appuyée, console, treillis simple.
2. **Structures hyperstatiques** : Inconnues supplémentaires → nécessite des équations de compatibilité (méthode des forces, rigidités). Ex : portique encastré, poutre continue.

> 💡 **En pratique** : Avant tout calcul par logiciel (ROBOT, SAP2000), l'ingénieur vérifie toujours à la main les cas simples (isostatique) pour valider l'ordre de grandeur des résultats numériques.`,
    },

    {
      id: 2,
      key: 'importance',
      title: 'Pourquoi la Mécanique des Structures est fondamentale',
      icon: '⚠️',
      type: 'importance',
      content: `La mécanique des structures est **le pont entre la physique et le calcul réglementaire**. Elle est prérequis à toute vérification Eurocode.

- **Sécurité structurelle** : Sans calcul correct des réactions, les fondations sont mal dimensionnées → risque d'effondrement.
- **Base des Eurocodes** : EC0 (combinaisons), EC1 (charges), EC2/EC3/EC5 (vérification des sections) — tout repose sur des efforts M, V, N calculés par la mécanique.
- **Contrôle des logiciels** : Un ingénieur qui ne sait pas calculer à la main ne peut pas détecter une erreur de modélisation dans ROBOT ou SAP2000.
- **Entretiens** : 90% des questions techniques en entretien de bureau d'études portent sur les réactions d'appui, les diagrammes M et V, et les conditions aux limites.

> ⚠️ **Statistique** : 1 erreur de conditions aux limites (encastrement / appui simple confondu) multiplie les moments par 2 à 4 — erreur fatale pour la structure.`,
    },

    {
      id: 3,
      key: 'applications',
      title: 'Applications terrain — Où la mécanique intervient',
      icon: '🏗️',
      type: 'applications',
      examples: [
        {
          context: 'Poutres de plancher (bâtiment)',
          text: "Calcul des réactions d'appui Ra et Rb d'une poutre bi-appuyée sous charge uniforme. Sert directement au dimensionnement des fondations et appuis.",
        },
        {
          context: 'Treillis de toiture (charpente métallique)',
          text: "Analyse des efforts dans chaque barre (traction/compression) d'un treillis de Pratt ou Warren par la méthode des nœuds.",
        },
        {
          context: 'Portique de bâtiment',
          text: "Calcul des moments aux encastrements d'un portique en acier soumis à des charges horizontales (vent, séisme EC8) et verticales.",
        },
        {
          context: 'Pont à poutres',
          text: "Calcul des lignes d'influence pour des charges roulantes (camions LC1/LM1 selon EC1) afin de trouver les enveloppes d'efforts maximaux.",
        },
        {
          context: 'Mur de soutènement',
          text: "Vérification de l'équilibre du mur (stabilité au glissement, au renversement) sous poussée des terres et surcharges.",
        },
        {
          context: 'Pylônes et antennes',
          text: "Calcul d'un pylône hyperstatique sous charges de vent asymétriques par décomposition en treillis plan et hors-plan.",
        },
      ],
    },

    {
      id: 4,
      key: 'theory',
      title: 'Bases théoriques — Conditions aux limites & Équilibres',
      icon: '📐',
      type: 'theory',
      diagramType: 'force_decomposition',
      content: `### Types d'appuis en 2D et liaisons associées

| Appui | Symbole | Réactions | Degrés bloqués |
|-------|---------|-----------|----------------|
| Appui simple (rotule-rouleau) | ▽ | 1 (⊥ au plan) | Déplacement ⊥ |
| Rotule (charnière) | △ | 2 (Rx, Ry) | Translations x et y |
| Encastrement | ▬ | 3 (Rx, Ry, M) | Translations + Rotation |
| Glissière | ═ | 2 (Ry, M) | Translation ⊥ + Rotation |

### Conditions d'isostaticité (structure plane)
$$r - s = 3m \\quad \\text{(isostatique)}$$

- $r$ = nombre d'inconnues d'appui
- $s$ = nombre de relâchements internes (rotules)
- $m$ = nombre de barres (poutres distinctes)

### Équations d'équilibre (plan 2D)
$$\\sum F_x = 0 \\qquad \\sum F_y = 0 \\qquad \\sum M_A = 0$$

> Ces 3 équations permettent de résoudre **3 inconnues** au maximum pour une structure isostatique.

### Loi de Varignon (moment d'une force)
$$M_A(\\vec{F}) = \\vec{AO} \\times \\vec{F} = F \\cdot d$$
où $d$ est la distance perpendiculaire de A à la droite d'action de $\\vec{F}$.`,
    },

    {
      id: 5,
      key: 'formulas',
      title: "Formules essentielles — Réactions & Efforts internes",
      icon: '🔢',
      type: 'formulas',
      diagramType: 'force_decomposition',
      formulas: [
        {
          name: "Réactions d'appui — Poutre bi-appuyée, charge uniforme",
          latex: "R_A = R_B = \\frac{q \\cdot L}{2} \\quad \\text{(symétrie)} \\qquad R_A + R_B = q \\cdot L",
          description: "q = charge uniforme [kN/m], L = portée [m]. Pour une charge non symétrique P à distance a de A : Ra = P(L-a)/L, Rb = P·a/L",
        },
        {
          name: "Moment fléchissant — Section x de la poutre (charge uniforme)",
          latex: "M(x) = R_A \\cdot x - \\frac{q \\cdot x^2}{2} = \\frac{qx}{2}(L - x)",
          description: "Parabole du 2ème degré. Maximum en x = L/2 : M_max = qL²/8. Nul aux appuis (conditions aux limites de la rotule).",
        },
        {
          name: "Effort tranchant — Section x (charge uniforme, bi-appuyée)",
          latex: "V(x) = R_A - q \\cdot x = \\frac{qL}{2} - qx",
          description: "Linéaire. V = +Ra à gauche (x=0), V = -Rb à droite (x=L). Annulation en x=L/2 (là où M est maximal).",
        },
        {
          name: "Effort normal dans une barre de treillis",
          latex: "N_i = \\frac{F}{\\cos\\theta} \\quad \\text{(barre inclinée à } \\theta \\text{ sous force verticale } F\\text{)}",
          description: "Positive = traction, Négative = compression. Méthode des nœuds : équilibre de chaque nœud libre ΣFx=0, ΣFy=0.",
        },
        {
          name: "Moment à l'encastrement — Console sous charge uniforme",
          latex: "M_{enc} = -\\frac{q \\cdot L^2}{2} \\quad \\text{(moment d'encastrement, négatif = tension en dessus)}",
          description: "Valeur double du moment d'une bi-appuyée à portée identique. Signe négatif : zone tendue en fibre supérieure de la console.",
        },
        {
          name: "Condition de stabilité — Pas de mécanisme cinématique",
          latex: "n_s = 3m - (r - s) = 0 \\quad \\text{(isostatique)} \\quad n_s < 0 \\Rightarrow \\text{mécanisme (instable !)}",
          description: "ns = degré d'hyperstaticité. ns = 0 : isostatique. ns > 0 : hyperstatique (ns équations de compatibilité supplémentaires). ns < 0 : mécanisme → structure instable à interdire !",
        },
      ],
    },

    {
      id: 6,
      key: 'stepbystep',
      title: "Calcul complet — Poutre bi-appuyée avec charge ponctuelle et uniforme",
      icon: '🔬',
      type: 'stepbystep',
      problem: "Poutre bi-appuyée : L = 8 m, charge uniforme q = 10 kN/m sur toute la portée + charge ponctuelle P = 30 kN à x = 3 m du nœud A. Calculer Ra, Rb, M_max et V(x).",
      steps_demo: [
        { n: 1, text: "Schéma : Appui simple en A (Ry seulement), rotule en B (Rx, Ry). Charge : q=10 kN/m + P=30 kN à x=3m." },
        { n: 2, text: "Équilibre ΣFx=0 → Rx_B = 0 (pas de charge horizontale)." },
        { n: 3, text: "Moments en B (ΣMb=0) : Ra×8 - q×8×4 - P×5 = 0 → Ra = (10×8×4 + 30×5)/8 = (320 + 150)/8 = 58,75 kN" },
        { n: 4, text: "Équilibre ΣFy=0 : Ra + Rb = q×L + P = 10×8 + 30 = 110 kN → Rb = 110 - 58,75 = 51,25 kN" },
        { n: 5, text: "Vérification par ΣMa=0 : Rb×8 - q×8×4 - P×3 = 51,25×8 - 320 - 90 = 410 - 410 = 0 ✓" },
        { n: 6, text: "M_max sous la charge P (x=3m) : M(3) = 58,75×3 - 10×3²/2 = 176,25 - 45 = 131,25 kN·m" },
      ],
      result_latex: "R_A = 58{,}75 \\text{ kN} \\quad R_B = 51{,}25 \\text{ kN} \\quad M(x{=}3) = 131{,}25 \\text{ kN·m} \\quad \\checkmark",
    },

    {
      id: 7,
      key: 'units',
      title: "Unités en Mécanique des Structures",
      icon: '📏',
      type: 'units',
      table: [
        { grandeur: "Force F", si: "kN (ou N)", imperial: "kips (ou lbf)", conversion: "1 kN = 0,2248 kips = 224,8 lbf" },
        { grandeur: "Charge linéaire q", si: "kN/m", imperial: "kip/ft", conversion: "1 kN/m = 0,0685 kip/ft" },
        { grandeur: "Charge surfacique p", si: "kN/m²", imperial: "psf (lb/ft²)", conversion: "1 kN/m² = 20,89 psf" },
        { grandeur: "Moment M", si: "kN·m", imperial: "kip·ft", conversion: "1 kN·m = 0,7376 kip·ft" },
        { grandeur: "Effort tranchant V", si: "kN", imperial: "kips", conversion: "1 kN = 0,2248 kips" },
        { grandeur: "Effort normal N", si: "kN", imperial: "kips", conversion: "Traction (+) / Compression (-)" },
        { grandeur: "Longueur L", si: "m", imperial: "ft", conversion: "1 m = 3,281 ft" },
      ],
      note: "⚠️ RÈGLE IMPÉRATIVE : Homogénéité des unités. Mélanger kN et m donne des kN·m pour les moments. Ne jamais additionner forces et moments sans vérification dimensionnelle.",
    },

    {
      id: 8,
      key: 'hypotheses',
      title: "Hypothèses & domaines de validité",
      icon: '📋',
      type: 'hypotheses',
      items: [
        { type: 'info', text: "Hypothèse des petits déplacements : les déformations sont suffisamment faibles pour que la géométrie initiale reste valide pour l'équilibre (valide si δ/L < 1/50)." },
        { type: 'info', text: "Liaisons parfaites : les appuis sont idéaux (rotule = aucun moment transmis, encastrement = aucune rotation). En réalité, il existe des moments parasites dans les soudures et assemblages boulonnés." },
        { type: 'warning', text: "ATTENTION : Une structure 3D ne peut pas être simplifiée en 2D sans vérification (charges hors-plan, effets de torsion, déversement). Toujours vérifier le plan de chargement." },
        { type: 'warning', text: "Ne jamais confondre isostatique et stable. Une structure peut être isostatique (r-s = 3m) mais géométriquement instable si les appuis sont alignés ou colinéaires." },
        { type: 'tip', text: "Astuce de vérification : la somme des réactions d'appui doit être égale à la résultante de toutes les charges extérieures. Toujours faire cette vérification globale avant de passer au calcul des efforts internes." },
        { type: 'warning', text: "Théorème de Ritter (méthode des sections) : ne couper qu'un maximum de 3 barres inconnues à la fois dans un treillis pour rester dans le domaine de résolution par équilibres simples." },
      ],
    },

    {
      id: 9,
      key: 'simple_examples',
      title: "Exemples guidés — Calculs statiques fondamentaux",
      icon: '✏️',
      type: 'examples_simple',
      examples: [
        {
          title: "Exemple 1 : Réactions d'une console encastrée",
          given: "Console encastrée en A, libre en B. Longueur L = 4 m, charge ponctuelle P = 20 kN en B (vers le bas).",
          find: "Réaction verticale et moment d'encastrement en A",
          solution_latex: "R_{Ay} = P = 20 \\text{ kN} \\uparrow \\quad M_A = -P \\times L = -20 \\times 4 = -80 \\text{ kN·m (encastrement)}",
          result: "Ry_A = 20 kN (vers le haut), M_A = -80 kN·m (moment anti-horaire à l'encastrement)",
        },
        {
          title: "Exemple 2 : Degré d'hyperstaticité d'un portique",
          given: "Portique plan : 2 montants encastrés à la base + 1 traverse horizontale. Aucune rotule interne.",
          find: "Degré d'hyperstaticité ns",
          solution_latex: "r = 3 + 3 = 6 \\text{ (2 encastrements)} \\quad s = 0 \\quad m = 3 \\text{ barres} \\quad n_s = r - s - 3m = 6 - 0 - 9 = -3 + 6 = 3",
          result: "ns = 3 — Portique 3 fois hyperstatique (classique pour un portique encastré)",
        },
        {
          title: "Exemple 3 : Effort dans une barre de treillis (méthode des nœuds)",
          given: "Treillis triangulaire : nœud A en bas-gauche (rotule), B en bas-droite (rouleau), C en haut-milieu. Force verticale P = 40 kN appliquée en C. Géométrie : α = 45° (barres AC et BC à 45°).",
          find: "Efforts N_AC et N_BC",
          solution_latex: "R_A = R_B = 20 \\text{ kN} \\quad N_{AC} = \\frac{-R_A}{\\sin 45°} = \\frac{-20}{0{,}707} = -28{,}3 \\text{ kN (compression)}",
          result: "N_AC = N_BC = -28,3 kN (compression) | Barre inférieure AB : N_AB = +20 kN (traction)",
        },
      ],
    },

    {
      id: 10,
      key: 'real_examples',
      title: "Exemples réels — Bureau d'études structure",
      icon: '🏢',
      type: 'examples_real',
      diagramType: 'force_decomposition',
      examples: [
        {
          context: "Bureau d'études — Vérification d'un portique acier R+3",
          scenario: "Portique acier bi-articulé à la base (rotule), traverse horizontale de portée 12 m. Charges : G = 40 kN/m (vertical) + W = 8 kN/m (vent horizontal sur montant de hauteur 6 m).",
          decomposition_latex: "R_{Ay} = R_{By} = \\frac{40 \\times 12}{2} = 240 \\text{ kN} \\quad R_{Ax} = W \\times h = 8 \\times 6 = 48 \\text{ kN (vent repris en base)}",
          lesson: "M_pied = Rx × h = 48 × 6 = 288 kN·m à l'encastrement fictif des poteaux. → Combinaison ELU : 1,35G + 1,50W → vérification M_Ed ≤ M_Rd du profilé sélectionné.",
        },
      ],
    },

    {
      id: 11,
      key: 'diagrams',
      title: "Schéma d'équilibre — Décomposition des forces et réactions",
      icon: '📊',
      type: 'interactive_diagram',
      diagramType: 'force_decomposition',
      description: "Visualisez la décomposition d'une force en composantes horizontale et verticale, les réactions d'appui d'une structure bi-appuyée, et les diagrammes d'efforts internes (M, V, N). Faites varier l'angle pour observer l'effet sur les composantes.",
      diagram_description: [
        "Décomposition vectorielle Fx = F·cos(θ), Fy = F·sin(θ)",
        "Diagramme des moments fléchissants M(x) — parabole pour charge uniforme",
        "Diagramme des efforts tranchants V(x) — linéaire avec discontinuité sous la charge ponctuelle",
      ],
    },

    {
      id: 12,
      key: 'mistakes',
      title: "Erreurs classiques en Mécanique des Structures",
      icon: '⛔',
      type: 'mistakes',
      items: [
        {
          mistake: "Confondre appui simple et encastrement",
          trap: "Modéliser une poutre comme bi-encastrée alors qu'elle repose sur des appuis simples (ou vice-versa). Erreur de facteur 4 sur le moment !",
          fix: "Vérifier physiquement : une rotule transmet 0 moment, un encastrement transmet moment ET force. Observer la réalité de l'assemblage (soudé = encastrement, boulonné sur plat = rotule).",
        },
        {
          mistake: "Oublier les charges horizontales (vent, séisme)",
          trap: "Calculer uniquement les charges verticales sur un bâtiment multi-étages et ignorer la poussée du vent ou l'action sismique EC8",
          fix: "Toujours vérifier les charges horizontales selon EC1 (vent) et EC8 (séisme). Les efforts horizontaux créent des moments dans les poteaux proportionnels à la hauteur (M = H×h).",
        },
        {
          mistake: "Erreur de signe dans les moments",
          trap: "Appliquer la convention de signe des moments de façon incohérente (positif = traction en fibre inférieure VS positif = sens horaire)",
          fix: "Adopter UNE convention et la maintenir tout au long du calcul. Convention la plus courante en GC : M positif = fibre inférieure tendue (poutre bi-appuyée sous charge verticale).",
        },
        {
          mistake: "Négliger la vérification d'équilibre global",
          trap: "Calculer des réactions sans vérifier ΣFy=0, ΣFx=0, ΣM=0 → erreur non détectée propagée dans toute l'analyse",
          fix: "Toujours vérifier les 3 équations d'équilibre à la fin du calcul des réactions. C'est la seule manière de détecter une erreur arithmétique avant de continuer.",
        },
      ],
    },

    {
      id: 13,
      key: 'tips',
      title: "Astuces de l'ingénieur — Secrets de la statique",
      icon: '💡',
      type: 'tips',
      tips: [
        "Toujours choisir le point de moment le plus judicieux : prendre le moment autour d'un point où passent le maximum d'inconnues pour simplifier l'équation (ex : moment en B pour trouver Ra directement).",
        "Règle du pouce pour les réactions : sur une bi-appuyée avec charge concentrée P à la distance a de A, l'appui le plus proche reçoit la plus grande réaction. Ra = P·(L-a)/L > Rb si a < L/2.",
        "Pour vérifier rapidement si une structure est isostatique : 3 appuis simples non parallèles et non concurrents = isostatique. Ex : 2 rotules + 1 rouleau = 4 inconnues - 1 = 3 → isostatique si L'appui rouleau n'est pas parallèle aux réactions des rotules.",
        "Méthode de Ritter (sections) : pour un treillis, couper mentalement et poser l'équilibre de la sous-structure. Prendre le moment au nœud d'intersection des barres inconnues pour éliminer jusqu'à 2 inconnues simultanément.",
        "Sur ROBOT/SAP2000 : toujours comparer la résultante des réactions calculée par le logiciel avec le total des charges appliquées. Si R_total ≠ ΣCharges → erreur de modèle (charge non affectée, lien rigide oublié, etc.).",
        "Diagramme des moments : dans 90% des cas pratiques, M_max se trouve là où V = 0. Mémorisez les cas courants : qL²/8 (bi-appuyée uniforme), PL/4 (bi-appuyée charge centrale), qL²/2 (console uniforme).",
      ],
    },

    {
      id: 14,
      key: 'norms',
      title: "Normes & Références — Mécanique des Structures",
      icon: '📜',
      type: 'norms',
      norms: [
        { code: "Eurocode 0 (EN 1990)", description: "Bases de calcul des structures — définition des états limites ELU/ELS, combinaisons de charges, valeurs de conception." },
        { code: "Eurocode 1 (EN 1991-1-1)", description: "Actions sur les structures — charges permanentes G, charges d'exploitation Q, valeurs caractéristiques." },
        { code: "EN 1991-1-4", description: "Actions du vent — pression de vent, coefficient d'exposition, carte des zones de vent." },
        { code: "Eurocode 8 (EN 1998-1)", description: "Calcul parasismique — spectre de réponse, classes de ductilité, combinaison sismique." },
        { code: "BAEL 91 / CM 66", description: "Anciens règlements français (béton armé / charpente métallique) — encore utilisés comme références pédagogiques." },
        { code: "NF EN ISO 10721-1", description: "Construction en acier — bases du calcul des structures, complémentaire à l'EC3." },
      ],
    },

    {
      id: 15,
      key: 'exercises',
      title: "Exercices Mécanique — Du fondamental au complexe",
      icon: '✍️',
      type: 'exercises',
      exercises: [
        {
          id: 'ex_mec_1',
          number: 1,
          difficulty: 'Facile',
          text: "Une poutre bi-appuyée de portée L = 6 m supporte une charge uniforme q = 12 kN/m. Calculez les réactions Ra et Rb, puis le moment maximal M_max et sa position.",
          hint: "Symétrie → Ra = Rb = q·L/2. M_max = q·L²/8 en x = L/2.",
          answer_latex: "R_A = R_B = \\frac{12 \\times 6}{2} = 36 \\text{ kN} \\quad M_{max} = \\frac{12 \\times 6^2}{8} = \\frac{432}{8} = 54 \\text{ kN·m en } x = 3 \\text{ m}",
          answer_text: "Ra = Rb = 36 kN | M_max = 54 kN·m en milieu de portée",
        },
        {
          id: 'ex_mec_2',
          number: 2,
          difficulty: 'Moyen',
          text: "Poutre bi-appuyée L = 10 m : charge ponctuelle P₁ = 50 kN à x = 3 m de A et P₂ = 30 kN à x = 7 m de A. Calculez Ra, Rb et tracez le diagramme des efforts tranchants V(x).",
          hint: "ΣMb=0 pour Ra, ΣMa=0 pour vérifier Rb. V(x) change de valeur à chaque charge ponctuelle.",
          answer_latex: "R_A = \\frac{50 \\times 7 + 30 \\times 3}{10} = \\frac{350 + 90}{10} = 44 \\text{ kN} \\quad R_B = 80 - 44 = 36 \\text{ kN}",
          answer_text: "Ra = 44 kN, Rb = 36 kN. V : +44 (x=0→3), -6 (x=3→7), -36 (x=7→10) kN",
        },
        {
          id: 'ex_mec_3',
          number: 3,
          difficulty: 'Difficile',
          text: "Treillis de Warren à 3 panneaux (L = 9 m, h = 3 m) : charge P = 60 kN appliquée au nœud central supérieur. Déterminez par la méthode des nœuds les efforts dans les 3 barres du panneau central (barre supérieure, barre inférieure, diagonale).",
          hint: "1. Calculer Ra = Rb = 30 kN. 2. Analyser le nœud d'appui (Ra connu). 3. La diagonale fait θ = arctan(3/4,5) = 33,7°. 4. Appliquer ΣFx=0 et ΣFy=0 à chaque nœud libre.",
          answer_latex: "N_{diag} = \\frac{R_A}{\\sin\\theta} = \\frac{30}{\\sin 33{,}7°} = 54{,}1 \\text{ kN (compression)} \\quad N_{inf} = N_{diag} \\times \\cos\\theta = 45 \\text{ kN (traction)}",
          answer_text: "N_diagonale = -54,1 kN (compression) | N_memb_inférieure = +45 kN (traction) | N_memb_supérieure = -45 kN (compression)",
        },
      ],
    },

    {
      id: 16,
      key: 'corrections',
      title: "Corrections détaillées",
      icon: '✅',
      type: 'corrections',
      note: "Les corrections complètes (schémas, équations d'équilibre étape par étape, diagrammes M et V) sont affichées sous chaque exercice en cliquant sur 'Voir la correction'.",
    },

    {
      id: 17,
      key: 'quiz',
      title: "Quiz Mécanique des Structures — Évaluation",
      icon: '🎯',
      type: 'quiz',
      questions: [
        {
          id: 'q_mec_1',
          question: "Pour une poutre bi-appuyée de portée L = 5 m sous charge uniforme q = 8 kN/m, quelle est la valeur du moment maximal M_max ?",
          options: [
            { id: 'a', text: "M_max = 20 kN·m" },
            { id: 'b', text: "M_max = 25 kN·m" },
            { id: 'c', text: "M_max = 40 kN·m" },
            { id: 'd', text: "M_max = 50 kN·m" },
          ],
          correct: 'b',
          explanation: "M_max = q·L²/8 = 8 × 5²/8 = 8 × 25/8 = 25 kN·m. Cette formule fondamentale s'applique à la poutre bi-appuyée sous charge uniforme et donne le moment au milieu de la portée.",
        },
        {
          id: 'q_mec_2',
          question: "Un portique plan encastré aux deux pieds (2×3 inconnues) avec une traverse rigide (0 rotule interne) : quel est son degré d'hyperstaticité ?",
          options: [
            { id: 'a', text: "ns = 0 (isostatique)" },
            { id: 'b', text: "ns = 1" },
            { id: 'c', text: "ns = 3" },
            { id: 'd', text: "ns = 6" },
          ],
          correct: 'c',
          explanation: "r = 6 (2 encastrements × 3 inconnues chacun), s = 0 (aucune rotule interne), m = 3 barres. ns = r - s - 3m = 6 - 0 - 9 = -3... Correction : ns = 6 - 3×1 = 3. Un portique encastré-encastré est 3 fois hyperstatique — nécessite 3 équations de compatibilité supplémentaires.",
        },
        {
          id: 'q_mec_3',
          question: "Pour une barre de treillis inclinée à 30° sous une force verticale de 20 kN à son extrémité, quel est l'effort normal N dans la barre ?",
          options: [
            { id: 'a', text: "N = 20 kN" },
            { id: 'b', text: "N = 23,1 kN" },
            { id: 'c', text: "N = 40 kN" },
            { id: 'd', text: "N = 17,3 kN" },
          ],
          correct: 'c',
          explanation: "L'équilibre vertical au nœud donne : N·sin(30°) = 20 kN → N = 20/sin(30°) = 20/0,5 = 40 kN. La composante verticale de l'effort dans la barre doit équilibrer la force appliquée. L'inclinaison augmente l'effort axial dans la barre.",
        },
      ],
    },

    {
      id: 18,
      key: 'exam_questions',
      title: "Questions d'examen — Niveau BTS/Licence Génie Civil",
      icon: '🎓',
      type: 'exam',
      questions: [
        "Démontrez, par les équations d'équilibre, que pour une poutre bi-appuyée soumise à une charge uniforme q sur toute sa portée L, le moment maximal vaut M_max = qL²/8 et se produit en x = L/2.",
        "Expliquez la notion de degré d'hyperstaticité. Donnez un exemple de structure isostatique et une hyperstatique, et justifiez pourquoi on préfère parfois une structure hyperstatique malgré la complexité du calcul.",
        "Pour un treillis de Pratt à 4 panneaux, décrivez la méthode des nœuds et la méthode des sections (Ritter). Dans quel cas utilise-t-on l'une plutôt que l'autre ?",
        "Un portique plan est soumis à une charge horizontale H (vent). Calculez les réactions aux pieds (encastrés) et tracez les diagrammes M, V, N. Commentez la répartition des efforts.",
      ],
    },

    {
      id: 19,
      key: 'interview_questions',
      title: "Questions d'entretien — Ingénieur Structure",
      icon: '💼',
      type: 'interview',
      questions: [
        {
          question: "En entretien, on vous demande de calculer de tête les réactions d'une poutre bi-appuyée de 6 m sous une charge de 50 kN au tiers de la portée (x = 2 m). Comment faites-vous ?",
          answer_hint: "ΣMb = 0 : Ra×6 = 50×4 → Ra = 200/6 = 33,3 kN. ΣFy = 0 : Rb = 50 - 33,3 = 16,7 kN. Vérification : ΣMa = Rb×6 - 50×2 = 16,7×6 - 100 = 100,2 - 100 ≈ 0 ✓. Présenter le raisonnement clairement et vérifier toujours.",
        },
        {
          question: "Quelle est la différence pratique entre un treillis et un portique ? Dans quel cas choisit-on l'un ou l'autre ?",
          answer_hint: "Treillis : barres articulées en leurs extrémités → efforts axiaux purs (N uniquement, pas de M ni V dans les barres) → efficace pour grandes portées légères (charpentes, ponts). Portique : barres rigidement assemblées → efforts M, V, N dans tous les éléments → adapté aux bâtiments standards (transmission du vent, des moments de second ordre).",
        },
        {
          question: "Un junior de votre bureau obtient une réaction d'appui négative dans un logiciel. Est-ce une erreur ?",
          answer_hint: "Pas forcément. Une réaction négative peut signifier : (1) un appui en traction (ancrage nécessaire, ex: vent de soulèvement), (2) une erreur de convention de signe dans la modélisation, ou (3) une réelle soulèvement de l'appui (à vérifier si l'appui peut physiquement reprendre la traction). Toujours interpréter physiquement avant de conclure à une erreur.",
        },
      ],
    },

    {
      id: 20,
      key: 'practical_case',
      title: "Cas pratique — Analyse d'un portique industriel",
      icon: '🔧',
      type: 'practical',
      scenario: "Étude de cas — Halte logistique, hangar acier bi-articulé",
      description: `**Mise en situation** : Bureau d'études, Toulouse. Un hangar industriel de 24 m de portée, poteaux de 9 m de hauteur, bi-articulé à la base. Charges : G = 15 kN/m (toiture) + Q = 8 kN/m (neige) + W = 6 kN/m (vent horizontal). Combinaison ELU : 1,35G + 1,50Q + 0,90W.`,
      resolution_latex_1: "q_{ELU} = 1{,}35 \\times 15 + 1{,}50 \\times 8 = 20{,}25 + 12 = 32{,}25 \\text{ kN/m (vertical)}",
      resolution_latex_2: "w_{ELU} = 0{,}90 \\times 6 = 5{,}4 \\text{ kN/m (horizontal)} \\quad R_{Ay} = R_{By} = \\frac{32{,}25 \\times 24}{2} = 387 \\text{ kN}",
      resolution_latex_3: "R_{Ax} = w_{ELU} \\times h = 5{,}4 \\times 9 = 48{,}6 \\text{ kN} \\quad M_{traverse,milieu} = \\frac{32{,}25 \\times 24^2}{8} = 2322 \\text{ kN·m}",
      conclusion: "M_Ed = 2322 kN·m sur la traverse + M_pied = 48,6 × 9 = 437 kN·m sur les poteaux. → Sélection d'un profilé IPE 600 ou HEA 600 pour la traverse selon EC3 (M_Rd ≥ 2322 kN·m).",
    },

    {
      id: 21,
      key: 'summary',
      title: "Résumé exécutif — Mécanique en 5 points",
      icon: '📋',
      type: 'summary',
      content: `### La Mécanique des Structures en 5 règles fondamentales

1. **Équilibre** : $\\sum F_x = 0$, $\\sum F_y = 0$, $\\sum M_A = 0$ — 3 équations pour 3 inconnues (isostatique).
2. **Réactions bi-appuyée** : $R_A = \\frac{\\sum P_i(L - a_i) + qL^2/2}{L}$ — moment autour de B pour isoler Ra.
3. **Moments clés** : $M_{max} = qL^2/8$ (uniforme) | $PL/4$ (charge centrale) | $qL^2/2$ (console uniforme).
4. **Treillis** : Méthode des nœuds ($\\sum Fx = 0, \\sum Fy = 0$) ou Ritter (section, moment en nœud d'intersection).
5. **Hyperstaticité** : $n_s = r - s - 3m \\ge 0$ — si $n_s < 0$ : mécanisme (instable, interdit).`,
    },

    {
      id: 22,
      key: 'key_points',
      title: "Points clés à mémoriser — Mécanique des Structures",
      icon: '⭐',
      type: 'keypoints',
      points: [
        "3 équations d'équilibre (ΣFx=0, ΣFy=0, ΣM=0) → 3 inconnues max pour structure isostatique",
        "Appui simple = 1 inconnue (⊥) | Rotule = 2 (Rx, Ry) | Encastrement = 3 (Rx, Ry, M)",
        "Réactions bi-appuyée : Ra = ΣPi·(L-ai)/L + q·L/2 — toujours prendre ΣMb=0 pour isoler Ra",
        "M_max = qL²/8 (uniforme bi-appuyée) | PL/4 (centrale) | qL²/2 (console uniforme)",
        "V=0 là où M est maximum (et M=0 aux appuis libres = conditions aux limites)",
        "Degré d'hyperstaticité : ns = r - s - 3m. Si ns=0 : isostatique. Si ns<0 : mécanisme !!!",
        "Barre de treillis : effort axial pur N = F/sin(θ) ou N = F/cos(θ) selon orientation",
      ],
    },

    {
      id: 23,
      key: 'self_assessment',
      title: "Auto-évaluation — Mécanique des Structures",
      icon: '🏆',
      type: 'self_assessment',
      description: "Cochez chaque compétence maîtrisée :",
      objectives: [
        "Je calcule les réactions Ra et Rb d'une poutre bi-appuyée (charge uniforme, ponctuelle, ou combinée)",
        "Je calcule le moment d'encastrement d'une console",
        "Je trace correctement le diagramme des moments M(x) et des efforts tranchants V(x)",
        "Je détermine le degré d'hyperstaticité d'une structure plane",
        "Je résous un nœud de treillis par la méthode des nœuds (ΣFx=0, ΣFy=0)",
        "Je mémorise M_max = qL²/8 (bi-appuyée) et qL²/2 (console)",
        "J'ai résolu correctement les 3 exercices avec vérification d'équilibre globale",
        "J'ai obtenu 3/3 au quiz de mécanique",
      ],
    },
  ],

  quickQuiz: {
    question: "Poutre bi-appuyée L=5m, q=8 kN/m. Quelles sont Ra, Rb et M_max ?",
    options: [
      { id: 'a', label: "A) Ra=Rb=40kN, M_max=50 kN·m" },
      { id: 'b', label: "B) Ra=Rb=20kN, M_max=25 kN·m" },
      { id: 'c', label: "C) Ra=Rb=20kN, M_max=100 kN·m" },
    ],
    correct: 'b',
    explanation: "Ra = Rb = q·L/2 = 8×5/2 = 20 kN. M_max = q·L²/8 = 8×25/8 = 25 kN·m au centre (x=2,5m).",
  },
};
