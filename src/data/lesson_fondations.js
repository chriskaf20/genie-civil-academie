// ── Lesson: Fondations Profondes & Ouvrages de Soutènement — Module 26 ────────
export const lesson_fondations = {
  moduleId: 26,
  slug: 'fondations',
  lessonIndex: 1,
  title: "Fondations Profondes, Pieux, Parois Moulées & Ouvrages de Soutènement",
  subtitle: "Module 26 — Fondations Profondes & Soutènements",
  level: 'Avancé',
  duration: '50h',
  diagramType: 'soil_profile',
  tags: ['Fondations Profondes', 'Pieux', 'Parois Moulées', 'Soutènement', 'Pressiomètre', 'Rankine', 'Tirants', 'Eurocode 7'],

  steps: [
    {
      id: 1,
      key: 'definition',
      title: "Définition — Fondations Profondes & Ouvrages de Soutènement",
      icon: '📖',
      type: 'definition',
      fr: 'Pieux, Micropieux, Parois Moulées, Berlinoises & Stabilité des Pentes',
      en: 'Deep Foundations, Piles, Diaphragm Walls & Retaining Structures',
      metier: "Pratiquée par les ingénieurs géotechniciens, spécialistes en fondations spéciales (Soletanche Bachy, Keller, Menard), et bureaux d'études de génie civil.",
      content: `Lorsque le sol de surface présente une résistance mécanique insuffisante ou une trop forte compressibilité (tassements excessifs), il est impossible d'utiliser des fondations superficielles. On a alors recours aux **fondations profondes** et aux **ouvrages de soutènement**.

### 1. Les Fondations Profondes (Eurocode 7 / NF P 94-262) :
Un élément de fondation est dit profond lorsque son élancement $D/B > 5$ et sa profondeur $D > 3\\text{ m}$.
- **Pieux forés** : Forage du sol puis coulage du béton dans le forage (avec ou sans chemisage ou boue bentonitique).
- **Pieux battus / moulés** : Enfoncement par battage ou vibrofonçage d'un profilé métal ou tube béton.
- **Micropieux** : Pieux de petit diamètre ($B < 250\\text{ mm}$) injectés sous haute pression (IGB).

### 2. Les Ouvrages de Soutènement (NF P 94-261) :
- **Murs poids et murs en béton armé encastrés** : Soutènement d'un remblai routier ou d'un talus.
- **Parois moulées & Parois berlinoises** : Soutènement de grandes fouilles urbaines en sous-sol.
- **Tirants d'ancrage précontraints** : Ancrage actif de la paroi dans le sol rocheux profond.

> 💡 **Le principe de portance d'un pieu** : Un pieu reprend les charges verticales $F_d$ par la combinaison de la **résistance de pointe ($R_b$)** au fond du forage et du **frottement latéral ($R_s$)** le long du fût.`,
    },

    {
      id: 2,
      key: 'importance',
      title: "Pourquoi les fondations profondes conditionnent la sécurité des ouvrages",
      icon: '⚠️',
      type: 'importance',
      content: `La ruine d'une fondation ou l'effondrement d'une paroi de soutènement entraîne immédiatement des catastrophes majeures (tassements différentiels mortels pour l'ouvrage, effondrement des immeubles voisins).

- **Reprise de charges colossales** : Un pieu de $\\Phi 1200\\text{ mm}$ ancré dans le rocher peut supporter plus de $15\\,000\\text{ kN}$ ($1\\,500\\text{ tonnes}$).
- **Maintien des avoisinants en milieu urbain** : Les parois moulées étanches empêchent le rabattement de nappe et les fontaines de sable sous les immeubles mitoyens.
- **Résistance aux efforts de traction & séismes** : Les pieux ancrés reprennent le sous-mouillage des tours et les efforts de renversement des ponts.

> ⚠️ **Règle d'or** : "Aucun projet de fondations profondes ne doit démarrer sans une reconnaissance géotechnique G2 PRO complète (forages pressiométriques PMT ou pénétrométriques CPT) descendant jusqu'à au moins $5B$ sous la pointe du pieu !"`,
    },

    {
      id: 3,
      key: 'applications',
      title: "Applications terrain — Typologies & Matériels",
      icon: '🏗️',
      type: 'applications',
      examples: [
        {
          context: "Fondations de Piles de Ponts en Milieu Aquatique",
          text: "Pieux forés de grand diamètre (Φ 1500 à 2000 mm) sous boue bentonitique ancrés dans le rocher substratum.",
        },
        {
          context: "Soutènement de Sous-Sols de Tours (Grand Paris / Métro)",
          text: "Parois moulées en béton armé d'épaisseur 80 cm à 120 cm forées à la hydrofraise jusqu'à 40 m de profondeur.",
        },
        {
          context: "Confortement de Bâtiments Historiques en Tassement",
          text: "Reprise sous œuvre par injection de micropieux de type IV (injection globale et répétée IGR).",
        },
        {
          context: "Paroi Berlinoise pour Fouille Provisoire Hors Nappe",
          text: "Profilés métalliques HEB battus tous les 2 m avec blindage en madriers bois ou béton projeté entre profilés.",
        },
        {
          context: "Ancrage des Pylônes de Téléphérique ou Ponts Suspendus",
          text: "Tirants d'ancrage précontraints injectés au rocher pour reprendre les efforts de soulèvement.",
        },
        {
          context: "Fondations d'Éoliennes Offshore",
          text: "Pieux métalliques monopieux géants de diameter 6 à 8 mètres battus en mer au marteau hydraulique.",
        },
      ],
    },

    {
      id: 4,
      key: 'theory',
      title: "Théorie — Capacité Portante d'un Pieu & Poussée des Terres",
      icon: '📐',
      type: 'theory',
      diagramType: 'soil_profile',
      content: `### 1. Capacité Portante Caractéristique d'un Pieu ($R_c$)

D'après la norme NF P 94-262 (Eurocode 7), la résistance totale en compression $R_c$ d'un pieu vaut :

$$R_c = R_b + R_s = q_b \\cdot A_b + \\sum_{i} q_{s,i} \\cdot P \\cdot \\Delta z_i$$

- **Résistance de pointe** : $R_b = k_p \\cdot p_{le}^* \\cdot A_b$ ($k_p$ = facteur de portance pressiométrique, $p_{le}^*$ = pression limite nette équivalente sous la pointe, $A_b = \\pi D^2 / 4$).
- **Frottement latéral** : $R_s = \\pi D \\sum (q_{s,i} \\cdot \\Delta z_i)$ où $q_{s,i} = \\min(q_{s,max}, \\alpha_{PMT} \\cdot p_{le}^*)$.

### 2. Théorie de la Poussée & Butée des Terres (Rankine)

Pour un sol de poids volumique $\\gamma$, d'angle de frottement interne $\\phi'$ et de cohésion $c'$ :

- **Coefficient de poussée active ($K_a$)** (Le sol pousse sur le mur) :

$$K_a = \\tan^2 \\left( 45^\\circ - \\frac{\\phi'}{2} \\right) = \\frac{1 - \\sin\\phi'}{1 + \\sin\\phi'}$$

$$\\sigma_a(z) = K_a \\cdot \\gamma \\cdot z - 2 c' \\sqrt{K_a}$$

- **Coefficient de butée passive ($K_p$)** (Le mur pousse sur le sol) :

$$K_p = \\tan^2 \\left( 45^\\circ + \\frac{\\phi'}{2} \\right) = \\frac{1}{K_a} = \\frac{1 + \\sin\\phi'}{1 - \\sin\\phi'}$$

$$\\sigma_p(z) = K_p \\cdot \\gamma \\cdot z + 2 c' \\sqrt{K_p}$$`,
    },

    {
      id: 5,
      key: 'formulas',
      title: "Formules essentielles — Pieux, Soutènements & Poussée",
      icon: '🔢',
      type: 'formulas',
      diagramType: 'soil_profile',
      formulas: [
        {
          name: "Résistance de calcul en compression d'un pieu (Rc,d)",
          latex: "R_{c,d} = \\frac{R_b}{\\gamma_{b} \\cdot \\xi} + \\frac{R_s}{\\gamma_{s} \\cdot \\xi}",
          description: "γb = 1,40 (facteur partiel de pointe), γs = 1,30 (frottement), ξ = 1,15 à 1,35 (facteur de corrélation selon le nombre de forages).",
        },
        {
          name: "Poussée totale de Rankine sur un mur de hauteur H",
          latex: "F_a = \\frac{1}{2} \\cdot K_a \\cdot \\gamma \\cdot H^2 \\quad [\\text{kN/m}]",
          description: "Appliquée à H/3 de la base du mur. Ka = tan²(45° - φ'/2).",
        },
        {
          name: "Butée de calcul utilisable sur l'ancrage de pied (Kp,d)",
          latex: "F_p = \\frac{1}{2} \\cdot \\frac{K_p}{\\gamma_{R,p}} \\cdot \\gamma \\cdot D^2 \\quad (\\gamma_{R,p} \\approx 1{,}50 \\text{ à } 2{,}00)",
          description: "D = profondeur d'encastrement de la fiche de la paroi sous le fond de fouille.",
        },
        {
          name: "Stabilité au glissement d'un mur poids",
          latex: "F_s = \\frac{\\sum R_{viscous} \\cdot \\tan \\delta + c' \\cdot B}{F_a} \\ge 1{,}50",
          description: "Le rapport des forces résistantes horizontales à la base sur la poussée Fa doit être supérieur à 1,50.",
        },
        {
          name: "Frottement Négatif sur pieu (Surcharge de surface)",
          latex: "F_n = P \\cdot \\int_0^{H_s} q_{n}(z) dz \\qquad (q_n \\approx K \\cdot \\tan \\delta \\cdot \\sigma'_v)",
          description: "Frottement descendant s'exerçant sur le pieu lorsque le sol environnant tasse plus que le pieu lui-même !",
        },
      ],
    },

    {
      id: 6,
      key: 'stepbystep',
      title: "Calcul complet — Capacité portante d'un pieu foré pressiométrique",
      icon: '🔬',
      type: 'stepbystep',
      problem: "Soit un pieu foré en béton de diamètre D = 0,80 m (Section Ab = π D²/4 = 0,5027 m², Périmètre P = π D = 2,513 m) ancré de L = 15 m dans une marne compacte homogène. Les données pressiométriques sont : pression limite nette ple* = 2,0 MPa (2000 kPa). Facteur de portance kp = 0,80. Frottement latéral unitaire qs = 80 kPa (0,080 MPa). Facteurs partiels Eurocode 7 : γb = 1,40, γs = 1,30, factor de corrélation ξ = 1,20. 1) Calculer la résistance de pointe Rb et le frottement latéral total Rs. 2) Calculer la résistance de calcul Rc,d.",
      steps_demo: [
        { n: 1, text: "Calcul de la résistance de pointe Rb : Rb = kp × ple* × Ab = 0,80 × 2000 kPa × 0,5027 m² = 804,3 kN (0,804 MN)" },
        { n: 2, text: "Calcul du frottement latéral total Rs : Rs = P × L × qs = 2,513 m × 15,0 m × 80 kPa = 3015,6 kN (3,016 MN)" },
        { n: 3, text: "Résistance totale caractéristique : Rc = Rb + Rs = 804,3 + 3015,6 = 3819,9 kN (3,82 MN)" },
        { n: 4, text: "Application des facteurs de sécurité Eurocode 7 : Rb,d = Rb / (γb × ξ) = 804,3 / (1,40 × 1,20) = 804,3 / 1,68 = 478,75 kN" },
        { n: 5, text: "Frottement latéral de calcul : Rs,d = Rs / (γs × ξ) = 3015,6 / (1,30 × 1,20) = 3015,6 / 1,56 = 1933,08 kN" },
        { n: 6, text: "Résistance de calcul totale Rc,d = Rb,d + Rs,d = 478,75 + 1933,08 = 2411,8 kN (2,41 MN soit 241 tonnes)." },
      ],
      result_latex: "R_b = \\textbf{804{,}3 kN} \\qquad R_s = \\textbf{3015{,}6 kN} \\qquad R_{c,d} = \\textbf{2 411{,}8 kN (241 t)} \\quad \\checkmark",
    },

    {
      id: 7,
      key: 'units',
      title: "Unités & Symboles en Géotechnique des Fondations — Tableau de référence",
      icon: '📏',
      type: 'units',
      table: [
        { grandeur: "Pression limite pressiométrique ple*", si: "MPa ou kPa (1 MPa = 1000 kPa)", imperial: "ksf / psi", conversion: "Mesurée à l'essai pressiométrique Ménard (PMT)" },
        { grandeur: "Frottement latéral unitaire qs", si: "kPa (kN/m²)", imperial: "psf", conversion: "Contrainte de cisaillement sol-pieu le long du fût" },
        { grandeur: "Coefficient de poussée Ka", si: "Sans dimension (Adimensionnel)", imperial: "-", conversion: "Ka = tan²(45° - φ'/2) (Généralement 0,25 à 0,35)" },
        { grandeur: "Coefficient de butée Kp", si: "Sans dimension (Adimensionnel)", imperial: "-", conversion: "Kp = 1 / Ka = tan²(45° + φ'/2) (Généralement 2,5 à 4,0)" },
        { grandeur: "Effort d'ancrage du tirant T_ud", si: "kN ou MN", imperial: "kips", conversion: "Tension du toron d'acier précontraint injecté au rocher" },
        { grandeur: "Poids volumique déjaugé γ'", si: "kN/m³ (γ' = γ_sat - γ_w)", imperial: "pcf", conversion: "Poids du sol immergé sous la nappe phréatique (γ_w = 10 kN/m³)" },
      ],
      note: "⚠️ ATTENTION : En présence d'eau (nappe phréatique), toujours utiliser le poids volumique déjaugé $\\gamma' = \\gamma_{sat} - 10\\text{ kN/m}^3$ pour le calcul des poussées de sol et ajouter la **poussee hydrostatique de l'eau $P_w = \\frac{1}{2} \\gamma_w H_w^2$** !",
    },

    {
      id: 8,
      key: 'hypotheses',
      title: "Hypothèses & régimes de comportement des pieux et soutènements",
      icon: '📋',
      type: 'hypotheses',
      items: [
        { type: 'info', text: "Le calcul des pieux repose sur la méthode pressiométrique (NF P 94-262) ou pénétrométrique (CPT). Les paramètres d'entrée sont la pression limite nette $p_{le}^*$ et la résistance de pointe $q_c$." },
        { type: 'info', text: "Pieux sous charge latérale (Méthode p-y) : La réponse d'un pieu sous effort tranchant ou moment en tête est modélisée par des ressorts non-linéaires sol-pieu (courbes p-y)." },
        { type: 'warning', text: "ATTENTION : Le Frottement Négatif ($F_n$) s'ajoute comme une surcharge s'exerçant vers le bas lorsque les remblais de surface tassent. Il réduit la capacité portante utile du pieu !" },
        { type: 'warning', text: "Stabilité du fond de fouille (Bouchon & Grand Renard) : Vérifier que la pression d'eau sous le fond de fouille ne provoque pas le soulèvement de la fiche (Grand Renard / Uls Hydraulique)." },
        { type: 'tip', text: "Essais d'intégrité des pieux : Réaliser systématiquement un contrôle par transparence ultrasonore (diagraphie d'impédance) ou par réflexion d'onde acoustique (méthode de l'impédance) sur 100% des pieux du chantier." },
        { type: 'warning', text: "Vérification au grand glissement (Eurocode 7) : Un mur de soutènement doit être vérifié au glissement sur la base, au basculement, à la capacité portante du sol de fondation et au grand glissement circulaire." },
      ],
    },

    {
      id: 9,
      key: 'simple_examples',
      title: "Exemples guidés — Poussée de Rankine & Pression du sol",
      icon: '✏️',
      type: 'examples_simple',
      examples: [
        {
          title: "Exemple 1 : Calcul des coefficients de poussée Ka et butée Kp",
          given: "Sol pulvérulent (sable) avec un angle de frottement interne φ' = 30° et cohésion c' = 0",
          find: "Les coefficients Ka et Kp de Rankine",
          solution_latex: "K_a = \\tan^2(45^\\circ - 15^\\circ) = \\tan^2(30^\\circ) = \\left(\\frac{1}{\\sqrt{3}}\\right)^2 = \\frac{1}{3} = 0{,}333 \\qquad K_p = \\frac{1}{K_a} = 3{,}00",
          result: "Ka = 0,333 | Kp = 3,00 (La butée est 9 fois plus forte que la poussée !).",
        },
        {
          title: "Exemple 2 : Force de poussée active sur un mur de h = 6,0 m",
          given: "Mur de soutènement h = 6,0 m, γ = 18 kN/m³, φ' = 30° (Ka = 0,333)",
          find: "La contrainte de poussée maximale en pied σ_a et la poussée totale Fa",
          solution_latex: "\\sigma_a = K_a \\cdot \\gamma \\cdot h = 0{,}333 \\times 18 \\times 6{,}0 = 36{,}0 \\text{ kPa} \\qquad F_a = \\frac{1}{2} \\cdot 36{,}0 \\cdot 6{,}0 = 108{,}0 \\text{ kN/ml}",
          result: "Contrainte σa = 36,0 kPa | Force de poussée Fa = 108,0 kN par mètre linéaire de mur.",
        },
        {
          title: "Exemple 3 : Vérification du glissement d'un mur poids",
          given: "Poids total du mur V = 250 kN/ml, Poussée horizontale Fa = 75 kN/ml, Frottement sol-béton tan δ = 0,50",
          find: "Le coefficient de sécurité au glissement Fs",
          solution_latex: "F_s = \\frac{V \\cdot \\tan \\delta}{F_a} = \\frac{250 \\times 0{,}50}{75} = \\frac{125}{75} = 1{,}67",
          result: "Fs = 1,67 ≥ 1,50 → Sécurité au glissement vérifiée !",
        },
      ],
    },

    {
      id: 10,
      key: 'real_examples',
      title: "Exemple réel — Paroi Moulée de la Station de Métro Châtelet - Les Halles",
      icon: '🏢',
      type: 'examples_real',
      diagramType: 'soil_profile',
      examples: [
        {
          context: "Fouille urbaine de 25 m de profondeur en plein cœur de Paris avec nappe phréatique haute",
          scenario: "Réalisation d'une enceinte en paroi moulée d'épaisseur 100 cm ancrée à 35 m dans le calcaire grossier. 3 lits de tirants d'ancrage précontraints provisoires sous les immeubles rivains.",
          decomposition_latex: "\\text{Poussée d'eau hydrostatique : } P_w = \\frac{1}{2} \\times 10 \\times 25^2 = 3\\,125 \\text{ kN/ml (312 tonnes/m)}",
          lesson: "L'étanchéité parfaite de la paroi moulée et la précontrainte contrôlée des tirants ont permis d'exécuter le terrassement sans aucun tassement des bâtiments historiques mitoyens.",
        },
      ],
    },

    {
      id: 11,
      key: 'diagrams',
      title: "Schéma d'un Pieu avec Portance/Frottement & Diagramme de Poussée",
      icon: '📊',
      type: 'interactive_diagram',
      diagramType: 'soil_profile',
      description: "Visualisez la coupe géotechnique d'un pieu encastré avec répartition du frottement latéral et de la pointe, ainsi que la distribution des poussées/butées sur une paroi de soutènement.",
      diagram_description: [
        "Coupe Pieu : Répartition des couches de sol, diagramme de frottement latéral qs(z) et effort de pointe Rb sous la base",
        "Diagramme de Poussée/Butée : Triangle de poussée active Ka·γ·z au dos de la paroi et triangle de butée Kp·γ·z sur la fiche",
        "Tirant d'ancrage : Torons d'acier précontraints, scellement au coulis de ciment dans la zone d'ancrage au rocher",
      ],
    },

    {
      id: 12,
      key: 'mistakes',
      title: "Erreurs graves en Calcul et Exécution des Fondations",
      icon: '⛔',
      type: 'mistakes',
      items: [
        {
          mistake: "Compter sur 100% de la butée théorique (Kp) en pied de paroi moulée",
          trap: "Utiliser Kp = 3,0 direct sans coefficient de sécurité alors qu'un faible déplacement du sol est nécessaire pour mobiliser la butée",
          fix: "Appliquer un facteur de sécurité γ_Rp = 1,50 à 2,00 sur la butée ou limiter la mobilisation de la butée à 50% sous peine de subir des déplacements inacceptables en tête de paroi.",
        },
        {
          mistake: "Oublier l'effet de sous-pression d'eau (Archimède) sous le sous-sol",
          trap: "Calculer le dallage de fond de fouille sans prévoir de bouchon béton ou de pieux tirants pour contrer la poussée de la nappe",
          fix: "Si la nappe est à h = 10 m au-dessus du dallage, la sous-pression vaut 100 kPa (10 t/m²). Ancrer le radier avec des micropieux en traction (tirants).",
        },
        {
          mistake: "Ne pas déduire le frottement négatif sur les pieux en sol compressible",
          trap: "Ignorer le tassement d'une couche d'argile molle supérieure sous l'effet d'un remblai récent",
          fix: "Le sol supérieur qui tasse accroche le pieu et ajoute une surcharge Fn descendante ! Protéger le pieu par une gaine PVC désolidarisée ou ajouter Fn aux charges appliquées.",
        },
        {
          mistake: "Négliger les venues d'eau et le risque de renard sous la fiche de soutènement",
          trap: "Concevoir une fiche trop courte dans les sables perméables",
          fix: "L'eau contourne le pied de la paroi et provoque la liquéfaction du fond de fouille (Grand Renard). Allonger la fiche pour rallonger le fil d'eau et réduire le gradient hydraulique i < 0,5.",
        },
      ],
    },

    {
      id: 13,
      key: 'tips',
      title: "Astuces du géotechnicien & ingénieur fondations",
      icon: '💡',
      type: 'tips',
      tips: [
        "Recépage obligatoire des pieux : Toujours prévoir une sur-hauteur de coulage de 0,50 m à 1,00 m (béton souillé de laitance) qui sera démolie mécaniquement au marteau-piqueur avant le ferraillage de la semelle.",
        "Essais de chargement de pieux : Réaliser au moins 1 essai de chargement statique (NF P 94-150) ou dynamique sur pieu d'essai avant le démarrage du chantier pour valider le frottement latéral rééel.",
        "Drainage arrière des murs de soutènement : Placer systématiquement un massif drainant avec drain agricole et chantepleures tous les 2 m pour éviter l'accumulation d'eau derrière le mur (qui doublerait la poussée !).",
        "Blindage des berlinoises : Ne jamais laisser une paroi berlinoise sans terrassement par passe alternée (passes de 2 à 3 m de large maxi) en présence de sols instables.",
        "Logiciels de référence en fondations et géotechnique : RIDO, K-REA, FOXTA, PLAXIS 2D/3D (Éléments finis géotechniques), Talren (Stabilité des pentes), GEO5.",
      ],
    },

    {
      id: 14,
      key: 'normes',
      title: "Normes & Références — Fondations Profondes & Soutènements",
      icon: '📜',
      type: 'norms',
      norms: [
        { code: "NF EN 1997-1 (Eurocode 7)", description: "Calcul géotechnique — Règles générales (États limites ultimes STR/GEO et ULS hydraulique)." },
        { code: "NF P 94-262", description: "Norme française d'application de l'Eurocode 7 — Justification des fondations profondes (Pieux, micropieux, puits)." },
        { code: "NF P 94-261", description: "Norme française d'application de l'Eurocode 7 — Justification des fondations superficielles et ouvrages de soutènement." },
        { code: "NF EN 1536", description: "Exécution des travaux géotechniques spéciaux — Pieux forés." },
        { code: "NF EN 1538", description: "Exécution des travaux géotechniques spéciaux — Parois moulées." },
        { code: "NF EN 14199", description: "Exécution des travaux géotechniques spéciaux — Micropieux." },
      ],
    },

    {
      id: 15,
      key: 'exercises',
      title: "Exercices Fondations Profondes & Soutènements — 3 niveaux",
      icon: '✍️',
      type: 'exercises',
      exercises: [
        {
          id: 'ex_fon_1',
          number: 1,
          difficulty: 'Facile',
          text: "Calculer la force de poussée active Fa subie par un mur de soutènement de hauteur H = 4,50 m retenant un sable sec (γ = 19 kN/m³, φ' = 33° → Ka = 0,295).",
          hint: "Fa = 1/2 × Ka × γ × H².",
          answer_latex: "F_a = \\frac{1}{2} \\times 0{,}295 \\times 19 \\times 4{,}50^2 = 0{,}5 \\times 0{,}295 \\times 19 \\times 20{,}25 = 56{,}75 \\text{ kN/ml}",
          answer_text: "Force de poussée Fa = 56,75 kN par mètre linéaire.",
        },
        {
          id: 'ex_fon_2',
          number: 2,
          difficulty: 'Moyen',
          text: "Un pieu foré de diamètre D = 0,60 m (Périmètre P = 1,885 m) est ancré de L = 12 m dans une argile raide. Le frottement latéral unitaire moyen vaut qs = 50 kPa. Calculer le frottement latéral caractéristique total Rs du pieu.",
          hint: "Rs = P × L × qs.",
          answer_latex: "R_s = 1{,}885 \\text{ m} \\times 12{,}0 \\text{ m} \\times 50 \\text{ kPa} = 1131{,}0 \\text{ kN}",
          answer_text: "Frottement latéral Rs = 1 131,0 kN (113,1 tonnes).",
        },
        {
          id: 'ex_fon_3',
          number: 3,
          difficulty: 'Difficile',
          text: "Un tirant d'ancrage précontraint doit équilibrer un effort horizontal Th = 450 kN sur une paroi moulée. Le tirant est incliné de α = 25° par rapport à l'horizontale. Calculer la tension axiale requise T_tirant dans le toron d'acier.",
          hint: "Th = T_tirant × cos(α) → T_tirant = Th / cos(25°).",
          answer_latex: "T_{tirant} = \\frac{450}{\\cos(25^\\circ)} = \\frac{450}{0{,}9063} = 496{,}5 \\text{ kN}",
          answer_text: "Tension axiale requise dans le tirant T_tirant = 496,5 kN.",
        },
      ],
    },

    {
      id: 16,
      key: 'corrections',
      title: "Corrections détaillées",
      icon: '✅',
      type: 'corrections',
      note: "Retrouvez les détails des calculs pressiométriques, des coefficients Ka/Kp et de stabilité géotechnique en cliquant sur 'Voir la correction'.",
    },

    {
      id: 17,
      key: 'quiz',
      title: "Quiz Fondations Profondes & Soutènements — 3 questions",
      icon: '🎯',
      type: 'quiz',
      questions: [
        {
          id: 'q_fon_1',
          question: "D'après la norme NF P 94-262, à partir de quel élancement D/B et quelle profondeur D une fondation est-elle classée comme 'profonde' ?",
          options: [
            { id: 'a', text: "D/B > 1,5 et D > 1 m" },
            { id: 'b', text: "D/B > 5 et D > 3 m" },
            { id: 'c', text: "D/B > 10 et D > 10 m" },
            { id: 'd', text: "Toujours profonde quelle que soit la taille" },
          ],
          correct: 'b',
          explanation: "Selon l'Eurocode 7 et la NF P 94-262, une fondation est dite profonde si son élancement D/B > 5 et sa profondeur d'encastrement D > 3 m.",
        },
        {
          id: 'q_fon_2',
          question: "Quelle est la différence fondamentale entre le coefficient de poussée active (Ka) et le coefficient de butée passive (Kp) de Rankine ?",
          options: [
            { id: 'a', text: "Ka s'applique à l'eau et Kp aux rochers" },
            { id: 'b', text: "Ka s'exerce quand le sol s'étend et pousse sur l'ouvrage ; Kp s'exerce quand l'ouvrage est poussé contre le sol qui résiste (Kp = 1 / Ka)" },
            { id: 'c', text: "Ka est toujours supérieur à Kp" },
            { id: 'd', text: "Il n'y a aucune différence" },
          ],
          correct: 'b',
          explanation: "Ka est le coefficient de poussée active (le sol pousse sur le mur, Ka < 1). Kp est le coefficient de butée passive (le mur résiste contre le sol, Kp > 1 avec Kp = 1/Ka).",
        },
        {
          id: 'q_fon_3',
          question: "Qu'est-ce que le 'frottement négatif' sur un pieu de fondation ?",
          options: [
            { id: 'a', text: "Le frottement qui aide le pieu à porter la structure" },
            { id: 'b', text: "Un frottement descendant provoqué par le tassement des couches de sol supérieures comprimables qui accrochent le pieu et le surcharge" },
            { id: 'c', text: "La rouille sur l'acier du pieu" },
            { id: 'd', text: "La vibration lors du battage" },
          ],
          correct: 'b',
          explanation: "Le frottement négatif est une force parasitaire descendante s'exerçant sur le fût du pieu lorsque les sols compressibles supérieurs tasseront plus que le pieu lui-même.",
        },
      ],
    },

    {
      id: 18,
      key: 'exam_questions',
      title: "Questions d'examen — Niveau Master Géotechnique & Fondations",
      icon: '🎓',
      type: 'exam',
      questions: [
        "Démontrez la méthode de calcul de la capacité portante d'un pieu d'après les résultats de l'essai pressiométrique Ménard (NF P 94-262). Expliquez l'intégration du frottement latéral qs(z) et le calcul de la pression limite nette équivalente ple*.",
        "Présentez la théorie des états limites ultimes (ELU) GEO et STR sous Eurocode 7 applicables aux parois moulées. Détaillez le calcul de la longueur de fiche minimale par la méthode de l'équilibre limite.",
        "Expliquez le phénomène de renard hydraulique (Bouchon de fond de fouille) et la sous-pression d'Archimède. Comment dimensionne-t-on la fiche d'étanchéité et les tirants de radier ?",
        "Comparez les parois moulées, parois berlinoises et parois de pieux disjoints/sécanter d'un point de vue constructif, étanchéité et coût.",
      ],
    },

    {
      id: 19,
      key: 'interview_questions',
      title: "Questions d'entretien — Ingénieur Géotechnicien / Fondations Spéciales",
      icon: '💼',
      type: 'interview',
      questions: [
        {
          question: "Comment dimensionnez-vous le scellement d'un tirant d'ancrage dans le rocher ou le sol ferme ?",
          answer_hint: "La résistance d'ancrage T_u dépend du diamètre de forage d, de la longueur de scellement L_s et du frottement unitaire sol-injection q_s : T_u = π · d · L_s · q_s. On applique un coefficient de sécurité γ_a = 1,50. La longueur de scellement L_s est généralement de 6 m à 12 m dans le rocher.",
        },
        {
          question: "Pourquoi réalise-t-on une diagraphie de transparence ultrasonore (essai cross-hole) sur les parois moulées et pieux de grand diamètre ?",
          answer_hint: "L'essai cross-hole consiste à descendre des sondes émettrices et réceptrices d'ultrasons dans des tubes d'auscultation fixés aux armatures. La vitesse de propagation du son mesure la continuité et la qualité du béton coulé sous boue. Toute anomalie (inclusions de boue, délocage des aciers, béton alvéolé) provoque une chute brutale de vitesse.",
        },
        {
          question: "Quelles sont les précautions à prendre pour éviter le basculement d'un mur de soutènement en présence d'eau ?",
          answer_hint: "La présence d'eau derrière un mur ajoute une poussée hydrostatique P_w = 1/2 γ_w H² énorme (qui s'ajoute à la poussée des terres Ka). Pour l'éviter : 1. Installer un massif drainant continu à l'arrière avec dalles filtrantes et chantepleures. 2. Prévoir un drain collecteur au pied du mur avec exutoire gravitaire.",
        },
      ],
    },

    {
      id: 20,
      key: 'practical_case',
      title: "Cas pratique — Dimensionnement d'une paroi moulée de 20 m tirantée",
      icon: '🔧',
      type: 'practical',
      scenario: "Étude de cas — Conception d'une paroi moulée (épaisseur e = 80 cm) pour une terrassement de fouille de 15 m de profondeur avec nappe à 3 m sous la surface. Ancrage par 2 lits de tirants provisoires.",
      description: `**Mise en situation** : Ingénieur géotechnicien sous RIDO / K-REA. Sol : Alluvions sur marne compacte (γ = 20 kN/m³, φ' = 32°, ple* = 2,5 MPa dans la marne).`,
      resolution_latex_1: "\\text{Calcul de la fiche minimale en pied : } D_{fiche} = 6{,}0 \\text{ m (Profondeur totale paroi = 21{,}0 m)}",
      resolution_latex_2: "\\text{Effort dans le Lit 1 de tirants (à -4m) : } T_1 = 320 \\text{ kN/ml} \\qquad \\text{Lit 2 (à -10m) : } T_2 = 450 \\text{ kN/ml}",
      resolution_latex_3: "\\text{Vérification de la fiche au grand renard : } i_{fond} = \\frac{\\Delta h}{L_{fil\\,d'eau}} = \\frac{12}{24} = 0{,}50 < i_{crit} = 1{,}0 \\quad \\checkmark",
      conclusion: "Paroi moulée validée. Tassements maximaux estimés en surface < 8 mm, garantissant la sécurité des immeubles mitoyens.",
    },

    {
      id: 21,
      key: 'summary',
      title: "Résumé exécutif — Fondations Profondes & Soutènements en 6 points",
      icon: '📋',
      type: 'summary',
      content: `### Les Fondations Profondes & Soutènements en 6 fondamentaux

1. **Portance du Pieu** : $R_c = R_b + R_s$ (Résistance de pointe $q_b \\cdot A_b$ + Frottement latéral $\\sum q_s \\cdot P \\cdot \\Delta z$).
2. **Poussée & Butée (Rankine)** : Poussée $K_a = \\tan^2(45^\\circ - \\phi/2)$ ; Butée $K_p = \\tan^2(45^\\circ + \\phi/2)$.
3. **Parois Moulées** : Soutènement étanche en béton armé coulé sous boue bentonitique pour grandes fouilles urbaines.
4. **Tirants d'Ancrage** : Torons d'acier précontraints scellés au rocher pour maintenir l'équilibre des parois.
5. **Dangers majeurs** : Frottement négatif (surcharge descendante sur pieu), poussée d'eau et Grand Renard hydraulique.
6. **Normes Eurocode 7** : NF P 94-262 (Fondations profondes) et NF P 94-261 (Soutènements).`,
    },

    {
      id: 22,
      key: 'key_points',
      title: "Points clés à mémoriser — Fondations & Soutènements",
      icon: '⭐',
      type: 'keypoints',
      points: [
        "Élancement d'un pieu : D/B > 5 et profondeur D > 3 m",
        "Portance totale : Rc = Pointe (Rb) + Frottement latéral (Rs)",
        "Poussée des terres : Fa = 1/2 · Ka · γ · H² (Ka ≈ 0,33 pour φ' = 30°)",
        "Butée des terres : Kp = 1 / Ka (Kp ≈ 3,00) — Toujours appliquer un facteur de sécurité sur Kp",
        "Recépage des pieux : Décapage de la tête de pieu polluée sur 0,5 à 1,0 m",
        "Poussée de l'eau : Toujours drainer l'arrière des murs de soutènement pour éviter Pw = 1/2 γw H²",
        "Norme NF P 94-262 : Référence française Eurocode 7 pour les fondations profondes",
      ],
    },

    {
      id: 23,
      key: 'self_assessment',
      title: "Auto-évaluation — Fondations Profondes & Soutènements",
      icon: '🏆',
      type: 'self_assessment',
      description: "Validez vos compétences en fondations profondes et calcul d'ouvrages de soutènement :",
      objectives: [
        "Je sais calculer la résistance de pointe Rb et le frottement latéral Rs d'un pieu d'après la NF P 94-262",
        "Je maîtrise le calcul des coefficients de poussée Ka et de butée Kp de Rankine",
        "Je sais calculer la force de poussée totale Fa et vérifier la stabilité au glissement d'un mur",
        "Je comprends la technologie des parois moulées, parois berlinoises et tirants d'ancrage",
        "Je sais identifier et prévenir les risques de frottement négatif et de renard hydraulique",
        "Je comprends le rôle des essais de chargement et d'auscultation ultrasonore (cross-hole)",
        "J'ai résolu les 3 exercices de fondations et soutènements avec succès",
        "J'ai obtenu 3/3 au quiz de fondations et soutènements",
      ],
    },
  ],

  quickQuiz: {
    question: "Quelle formule donne le coefficient de poussée active Ka de Rankine pour un sol sans cohésion d'angle de frottement interne φ' ?",
    options: [
      { id: 'a', label: "A) Ka = tan²(45° + φ'/2)" },
      { id: 'b', label: "B) Ka = tan²(45° - φ'/2)" },
      { id: 'c', label: "C) Ka = 1 / sin(φ')" },
    ],
    correct: 'b',
    explanation: "Le coefficient de poussée active Ka vaut tan²(45° - φ'/2) = (1 - sin φ') / (1 + sin φ').",
  },
};
