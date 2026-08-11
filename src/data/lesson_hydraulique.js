// ── Lesson: Hydraulique Urbaine & Ouvrages Hydrauliques — Module 14 ─────────────
export const lesson_hydraulique = {
  moduleId: 14,
  slug: 'hydraulique',
  lessonIndex: 1,
  title: "Écoulements, Réseaux & Ouvrages Hydrauliques",
  subtitle: "Module 14 — Hydraulique Urbaine & Ouvrages Hydrauliques",
  level: 'Intermédiaire',
  duration: '40h',
  diagramType: 'bridge_structure',
  tags: ['Hydraulique', 'Bernoulli', 'Manning-Strickler', 'AEP', 'Assainissement', 'Déversoir', 'Pertes de charge'],

  steps: [
    {
      id: 1,
      key: 'definition',
      title: "Définition — L'Hydraulique en Génie Civil",
      icon: '📖',
      type: 'definition',
      fr: 'Hydraulique Urbaine & Ouvrages Hydrauliques',
      en: 'Urban Hydraulics & Hydraulic Structures',
      metier: "Pratiquée par les ingénieurs VRD, les hydrauliciens et les bureaux d'études en assainissement. Indispensable pour la conception de réseaux d'eau potable, d'assainissement, de canaux et d'ouvrages de rétention.",
      content: `L'**hydraulique** est la science des écoulements de l'eau (et des fluides en général), appliquée au génie civil pour :

### Deux grandes branches :
1. **Hydraulique en charge** (conduite fermée) : eau sous pression dans les canalisations d'AEP (Adduction en Eau Potable), les conduites forcées de barrages.
2. **Hydraulique à surface libre** (canal ouvert) : écoulement gravitaire dans les canaux, fossés, rivières, réseaux d'assainissement pluvial.

### Grandeurs fondamentales :
- **Débit** $Q$ [m³/s ou L/s] : volume d'eau transitant par unité de temps.
- **Vitesse** $v$ [m/s] : vitesse moyenne de l'écoulement dans la section.
- **Pression** $p$ [Pa ou bar] : pression statique dans la conduite.
- **Hauteur piézométrique** $h$ [m] : $h = z + p/(\\rho g)$ — altitude + pression convertie en hauteur d'eau.

> 💡 **Règle d'or** : L'eau coule toujours du point de charge le plus élevé vers le plus bas. La ligne piézométrique guide tout le dimensionnement.`,
    },

    {
      id: 2,
      key: 'importance',
      title: "Pourquoi l'hydraulique est essentielle",
      icon: '⚠️',
      type: 'importance',
      content: `L'eau est à la fois **ressource vitale et danger majeur**. L'hydraulique conditionne la viabilité de toute urbanisation.

- **Eau potable** : 1 milliard de personnes n'ont pas accès à l'eau potable sûre. La conception des réseaux AEP est un enjeu mondial.
- **Assainissement** : Un réseau sous-dimensionné provoque des inondations urbaines (retour de pluie 10 ans ou 30 ans selon EC/DTU).
- **Barrages** : Un déversoir mal dimensionné est la cause n°1 de rupture de barrage → catastrophe humaine majeure.
- **Érosion** : Les vitesses excessives dans les canaux érodent les berges et détruisent les ouvrages.

> ⚠️ **Statistique** : En France, les inondations représentent 50% du coût total des catastrophes naturelles (>1 milliard €/an). Le dimensionnement hydraulique correct est une question de survie urbaine.`,
    },

    {
      id: 3,
      key: 'applications',
      title: "Applications terrain — Projets hydrauliques courants",
      icon: '🏗️',
      type: 'applications',
      examples: [
        {
          context: "Réseau d'eau potable (AEP)",
          text: "Dimensionnement des conduites Ø 100–600 mm, calcul des pertes de charge (Hazen-Williams, Colebrook), vérification de la pression résiduelle ≥ 2 bars au robinet.",
        },
        {
          context: "Assainissement pluvial",
          text: "Calcul du débit de pointe par la méthode rationnelle Q = C·i·A. Dimensionnement des collecteurs Ø 300–2000 mm selon Manning-Strickler.",
        },
        {
          context: "Bassins de rétention",
          text: "Dimensionnement du volume de stockage pour écrêter les crues (période de retour T = 10 à 100 ans). Orifice de vidange calibré pour débit de fuite autorisé.",
        },
        {
          context: "Canaux à surface libre",
          text: "Conception de canaux trapézoïdaux ou rectangulaires pour irrigation ou drainage. Calcul du régime normal, critique et torrentiel.",
        },
        {
          context: "Déversoirs et seuils",
          text: "Formule de Poleni pour déversoirs rectangulaires : Q = μ·b·√(2g)·H^(3/2). Contrôle du niveau amont pour barrages et stations d'épuration.",
        },
        {
          context: "Stations de pompage",
          text: "Choix de pompe (HMT, rendement, NPSH), courbe caractéristique pompe vs réseau, protection anti-bélier.",
        },
      ],
    },

    {
      id: 4,
      key: 'theory',
      title: "Théorie — Principes fondamentaux de l'hydraulique",
      icon: '📐',
      type: 'theory',
      diagramType: 'bridge_structure',
      content: `### 1. Équation de continuité (conservation de la masse)

$$Q = A \\cdot v = \\text{constante le long d'un filet de courant}$$

Pour une conduite de section variable :
$$A_1 \\cdot v_1 = A_2 \\cdot v_2$$

### 2. Théorème de Bernoulli (conservation de l'énergie)

$$\\frac{p_1}{\\rho g} + \\frac{v_1^2}{2g} + z_1 = \\frac{p_2}{\\rho g} + \\frac{v_2^2}{2g} + z_2 + \\Delta h_{1 \\to 2}$$

- $p/(\\rho g)$ = hauteur de pression [m]
- $v^2/(2g)$ = hauteur cinétique [m]
- $z$ = altitude [m]
- $\\Delta h$ = pertes de charge entre 1 et 2 [m]

### 3. Nombre de Reynolds (régime d'écoulement)

$$Re = \\frac{v \\cdot D}{\\nu}$$

- $Re < 2000$ → **Laminaire** (filets d'eau parallèles)
- $2000 < Re < 4000$ → **Transitoire** (instable)
- $Re > 4000$ → **Turbulent** (tourbillons, cas courant en GC)

> En génie civil, les écoulements sont quasi-toujours turbulents ($Re > 10^4$).`,
    },

    {
      id: 5,
      key: 'formulas',
      title: "Formules essentielles — Hydraulique appliquée",
      icon: '🔢',
      type: 'formulas',
      diagramType: 'bridge_structure',
      formulas: [
        {
          name: "Pertes de charge linéaires — Darcy-Weisbach",
          latex: "\\Delta h_L = f \\cdot \\frac{L}{D} \\cdot \\frac{v^2}{2g}",
          description: "f = coefficient de frottement (Moody/Colebrook), L = longueur [m], D = diamètre [m], v = vitesse [m/s]. f ≈ 0,02 pour conduites courantes.",
        },
        {
          name: "Manning-Strickler — Écoulement à surface libre",
          latex: "v = K_s \\cdot R_h^{2/3} \\cdot I^{1/2} \\quad \\Rightarrow \\quad Q = K_s \\cdot A \\cdot R_h^{2/3} \\cdot I^{1/2}",
          description: "Ks = coefficient de Strickler [m^(1/3)/s] : 70 (béton lisse), 50 (béton rugueux), 30 (terre). Rh = A/P = rayon hydraulique. I = pente du radier.",
        },
        {
          name: "Méthode rationnelle — Débit de pointe pluvial",
          latex: "Q_p = C \\cdot i \\cdot A \\quad [\\text{m}^3/\\text{s}]",
          description: "C = coefficient de ruissellement (0,9 zone urbaine dense, 0,3 zone naturelle), i = intensité de pluie [m/s], A = surface du bassin versant [m²]. Formule empirique limitée à A < 200 ha.",
        },
        {
          name: "Déversoir rectangulaire — Formule de Poleni",
          latex: "Q = \\mu \\cdot b \\cdot \\sqrt{2g} \\cdot H^{3/2}",
          description: "μ = coefficient de débit (0,35–0,42 sans contraction, 0,60–0,65 crête mince standard), b = largeur du déversoir [m], H = hauteur de lame déversante [m].",
        },
        {
          name: "Pertes de charge singulières (coudes, vannes, tés)",
          latex: "\\Delta h_s = K \\cdot \\frac{v^2}{2g}",
          description: "K = coefficient de perte singulière : coude 90° (K≈0,3–1,0), vanne ouverte (K≈0,1), entrée (K≈0,5), sortie (K=1,0), clapet anti-retour (K≈2,5).",
        },
        {
          name: "Hauteur Manométrique Totale (HMT) d'une pompe",
          latex: "HMT = (z_2 - z_1) + \\frac{p_2 - p_1}{\\rho g} + \\frac{v_2^2 - v_1^2}{2g} + \\sum \\Delta h",
          description: "Énergie totale que la pompe doit fournir au fluide. Puissance : P = ρ·g·Q·HMT / η (η = rendement pompe 60-85%).",
        },
      ],
    },

    {
      id: 6,
      key: 'stepbystep',
      title: "Calcul complet — Dimensionnement d'un collecteur pluvial",
      icon: '🔬',
      type: 'stepbystep',
      problem: "Dimensionner un collecteur d'eaux pluviales circulaire en béton (Ks = 70) pour un bassin versant de 5 ha, coefficient de ruissellement C = 0,70, intensité de pluie de retour 10 ans i = 80 mm/h, pente disponible I = 0,5%.",
      steps_demo: [
        { n: 1, text: "Données : A = 5 ha = 50 000 m², C = 0,70, i = 80 mm/h = 80/(3600×1000) = 2,22×10⁻⁵ m/s, I = 0,5% = 0,005" },
        { n: 2, text: "Débit de pointe (méthode rationnelle) : Qp = C·i·A = 0,70 × 2,22×10⁻⁵ × 50 000 = 0,778 m³/s ≈ 780 L/s" },
        { n: 3, text: "Manning-Strickler section pleine : Q = Ks·A·Rh^(2/3)·I^(1/2) avec A = πD²/4 et Rh = D/4 pour section circulaire pleine" },
        { n: 4, text: "Q = 70 × (πD²/4) × (D/4)^(2/3) × 0,005^(1/2) = 70 × 0,785·D² × 0,397·D^(2/3) × 0,0707" },
        { n: 5, text: "Q = 70 × 0,785 × 0,397 × 0,0707 × D^(8/3) = 1,543 × D^(8/3) → D = (0,778/1,543)^(3/8) = 0,504^(0,375) = 0,812 m" },
        { n: 6, text: "D calculé = 812 mm → Choisir D = 900 mm (diamètre commercial normalisé supérieur). Vérifier v = Q/A = 0,778/(π×0,9²/4) = 1,22 m/s ✓ (entre 0,6 et 3 m/s)" },
      ],
      result_latex: "D_{calcul\\acute{e}} = 812 \\text{ mm} \\quad \\Rightarrow \\quad D_{retenu} = \\textbf{900 mm} \\quad v = 1{,}22 \\text{ m/s} \\in [0{,}6 ; 3{,}0] \\quad \\checkmark",
    },

    {
      id: 7,
      key: 'units',
      title: "Unités en Hydraulique — Tableau de référence",
      icon: '📏',
      type: 'units',
      table: [
        { grandeur: "Débit Q", si: "m³/s ou L/s", imperial: "cfs ou gpm", conversion: "1 m³/s = 35,31 cfs = 15 850 gpm" },
        { grandeur: "Vitesse v", si: "m/s", imperial: "ft/s", conversion: "1 m/s = 3,281 ft/s" },
        { grandeur: "Pression p", si: "Pa, kPa ou bar", imperial: "psi", conversion: "1 bar = 100 kPa = 14,50 psi = 10,2 mCE" },
        { grandeur: "Hauteur de charge H", si: "m (mCE)", imperial: "ft", conversion: "1 mCE = 9,81 kPa = 1,422 psi" },
        { grandeur: "Intensité de pluie i", si: "mm/h ou L/(s·ha)", imperial: "in/h", conversion: "1 mm/h = 2,78 L/(s·ha) = 0,0394 in/h" },
        { grandeur: "Rugosité Strickler Ks", si: "m^(1/3)/s", imperial: "—", conversion: "Ks = 1/n (Manning). Béton : Ks=70 → n=0,014" },
        { grandeur: "Viscosité cinématique ν", si: "m²/s", imperial: "ft²/s", conversion: "ν eau (20°C) = 1,004×10⁻⁶ m²/s" },
      ],
      note: "⚠️ ATTENTION : 1 L/s = 0,001 m³/s | 1 bar = 10,2 mCE (mètres de colonne d'eau). Ne jamais confondre mCE et mètres d'altitude dans les calculs de Bernoulli.",
    },

    {
      id: 8,
      key: 'hypotheses',
      title: "Hypothèses & conditions de validité",
      icon: '📋',
      type: 'hypotheses',
      items: [
        { type: 'info', text: "Bernoulli suppose un fluide parfait, incompressible, en régime permanent et le long d'un filet de courant. En pratique, on ajoute les pertes de charge (Δh) pour corriger l'hypothèse du fluide parfait." },
        { type: 'info', text: "Manning-Strickler est valable en régime uniforme (pente du radier = pente de la ligne d'eau = pente de la ligne d'énergie). Ne s'applique pas aux écoulements rapidement variés (ressaut hydraulique)." },
        { type: 'warning', text: "ATTENTION : La méthode rationnelle Q=C·i·A n'est valable que pour des bassins versants < 200 ha (2 km²). Au-delà, utiliser des modèles hydrologiques (SCS, réservoir linéaire)." },
        { type: 'warning', text: "Les pertes de charge singulières (coudes, vannes) sont souvent négligées en 1ère approche mais peuvent représenter 20-30% des pertes totales dans les réseaux courts avec beaucoup d'accessoires." },
        { type: 'tip', text: "Règle de terrain : un collecteur pluvial doit toujours avoir une vitesse d'autocurage v ≥ 0,60 m/s (sinon dépôts de sédiments) et v ≤ 3,0 m/s (sinon érosion du béton)." },
        { type: 'warning', text: "Le coup de bélier peut générer des surpressions de 10 à 50 bars dans une conduite fermée brusquement. Toujours prévoir des anti-béliers (réservoirs d'air, clapets) pour les conduites longues." },
      ],
    },

    {
      id: 9,
      key: 'simple_examples',
      title: "Exemples guidés — Calculs hydrauliques",
      icon: '✏️',
      type: 'examples_simple',
      examples: [
        {
          title: "Exemple 1 : Vitesse dans une conduite d'eau potable",
          given: "Conduite circulaire Ø 200 mm, débit Q = 15 L/s",
          find: "Vitesse moyenne v et vérification de la plage admissible (0,5–2,0 m/s pour AEP)",
          solution_latex: "A = \\frac{\\pi \\times 0{,}2^2}{4} = 0{,}0314 \\text{ m}^2 \\quad v = \\frac{Q}{A} = \\frac{0{,}015}{0{,}0314} = 0{,}478 \\text{ m/s}",
          result: "v = 0,48 m/s — Légèrement inférieur à 0,5 m/s → Acceptable mais à la limite basse. Envisager Ø 150 mm pour augmenter la vitesse à 0,85 m/s.",
        },
        {
          title: "Exemple 2 : Perte de charge dans une conduite AEP",
          given: "Conduite PEHD Ø 300 mm, L = 500 m, Q = 50 L/s, f = 0,018 (turbulent rugueux)",
          find: "Perte de charge linéaire ΔhL par Darcy-Weisbach",
          solution_latex: "v = \\frac{0{,}050}{\\pi \\times 0{,}3^2/4} = 0{,}707 \\text{ m/s} \\quad \\Delta h_L = 0{,}018 \\times \\frac{500}{0{,}3} \\times \\frac{0{,}707^2}{2 \\times 9{,}81} = 30 \\times 0{,}0255 = 0{,}765 \\text{ m}",
          result: "ΔhL = 0,77 m sur 500 m → gradient 1,53 m/km. Acceptable pour un réseau AEP (< 5 m/km en général).",
        },
        {
          title: "Exemple 3 : Débit d'un déversoir rectangulaire",
          given: "Déversoir à crête mince, largeur b = 3 m, lame d'eau H = 0,25 m, μ = 0,42",
          find: "Débit Q par la formule de Poleni",
          solution_latex: "Q = 0{,}42 \\times 3 \\times \\sqrt{2 \\times 9{,}81} \\times 0{,}25^{3/2} = 1{,}26 \\times 4{,}43 \\times 0{,}125 = 0{,}697 \\text{ m}^3/\\text{s}",
          result: "Q ≈ 700 L/s pour H = 25 cm. Sensibilité : si H double (50 cm), Q est multiplié par 2√2 ≈ 2,83 → Q ≈ 1980 L/s.",
        },
      ],
    },

    {
      id: 10,
      key: 'real_examples',
      title: "Exemple réel — Réseau d'assainissement urbain",
      icon: '🏢',
      type: 'examples_real',
      diagramType: 'bridge_structure',
      examples: [
        {
          context: "Bureau d'études VRD — ZAC périurbaine, Bordeaux",
          scenario: "Dimensionnement du réseau pluvial d'une zone d'aménagement de 12 ha. Surface imperméabilisée : 70%. Pluie de projet T=20 ans : i = 65 mm/h. Pente moyenne des collecteurs : 0,8%. Béton Ks=65.",
          decomposition_latex: "Q_p = 0{,}70 \\times \\frac{65}{3{,}6 \\times 10^3} \\times 120\\,000 = 0{,}70 \\times 1{,}806 \\times 10^{-5} \\times 120\\,000 = 1{,}517 \\text{ m}^3/\\text{s}",
          lesson: "D calculé = 1,06 m → choisir Ø 1200 mm (collecteur principal). v = 1,34 m/s ✓. Bassin de rétention de 1 800 m³ prévu pour écrêtage avant rejet au milieu récepteur (débit de fuite limité à 3 L/s/ha).",
        },
      ],
    },

    {
      id: 11,
      key: 'diagrams',
      title: "Schéma hydraulique — Ligne piézométrique & ligne d'énergie",
      icon: '📊',
      type: 'interactive_diagram',
      diagramType: 'bridge_structure',
      description: "Visualisez la ligne piézométrique et la ligne d'énergie le long d'une conduite en charge avec pertes de charge linéaires et singulières. Observez la conversion entre énergie de pression, cinétique et potentielle.",
      diagram_description: [
        "Ligne d'énergie (charge totale H = z + p/ρg + v²/2g) — décroissante dans le sens de l'écoulement",
        "Ligne piézométrique (hauteur piézométrique z + p/ρg) — toujours sous la ligne d'énergie",
        "Pertes de charge singulières aux coudes, vannes et changements de section",
      ],
    },

    {
      id: 12,
      key: 'mistakes',
      title: "Erreurs fatales en Hydraulique",
      icon: '⛔',
      type: 'mistakes',
      items: [
        {
          mistake: "Confondre pression absolue et pression relative",
          trap: "Utiliser la pression atmosphérique (101,3 kPa) comme pression manométrique au lieu de p_relative = p_absolue - p_atm",
          fix: "En hydraulique du GC, on travaille quasi-toujours en pression relative (manométrique). P_atm = 0 (référence). Seuls les calculs de cavitation (NPSH) nécessitent la pression absolue.",
        },
        {
          mistake: "Négliger les pertes de charge dans un réseau sous pression",
          trap: "Appliquer Bernoulli sans le terme Δh → surestimation de la pression disponible au point de livraison",
          fix: "Toujours calculer ΔhL (Darcy) + Σ Δhs (singulières). En réseau AEP : vérifier p_résiduelle ≥ 2 bars (20 mCE) au dernier robinet.",
        },
        {
          mistake: "Appliquer Manning-Strickler hors régime uniforme",
          trap: "Utiliser Q = Ks·A·Rh^(2/3)·I^(1/2) dans une zone de remous (transition entre deux pentes ou après un obstacle)",
          fix: "Manning-Strickler = régime UNIFORME seulement. Pour les régimes variés (ressaut, courbe de remous), utiliser l'intégration progressive de l'équation de St-Venant.",
        },
        {
          mistake: "Sous-dimensionner le réseau pluvial en oubliant le changement climatique",
          trap: "Utiliser les courbes IDF historiques sans majoration pour le changement climatique → sous-dimensionnement systématique de 10-30%",
          fix: "Les DTU et recommandations actuelles imposent une majoration de 10 à 30% des intensités pluviométriques de projet. Toujours vérifier les instructions locales du PPRI et du zonage pluvial.",
        },
      ],
    },

    {
      id: 13,
      key: 'tips',
      title: "Astuces de l'hydraulicien — Terrain & BET",
      icon: '💡',
      type: 'tips',
      tips: [
        "Règle du pouce AEP : pour un débit de Q L/s dans une conduite Ø D mm, la vitesse en m/s vaut approximativement v ≈ 1,27 × Q / D² (avec Q en L/s et D en m). Viser v = 0,6–1,5 m/s.",
        "Conversions rapides : 1 L/s = 3,6 m³/h | 1 m³/h = 0,278 L/s | 1 bar = 10,2 mCE | 1 mm/h = 2,78 L/(s·ha).",
        "Autocurage : pente minimale I ≥ 0,3% pour Ø 300 mm, I ≥ 0,5% pour Ø 200 mm. Si impossible, prévoir des chasses automatiques ou des regards de visite rapprochés.",
        "Pour un pré-dimensionnement rapide de collecteur pluvial en béton (Ks=70), utiliser : D ≈ (Q / 1,55)^(3/8) avec I = 0,5% → résultat en mètres. Ajuster ensuite au diamètre commercial supérieur.",
        "Courbe IDF (Intensité-Durée-Fréquence) : formule de Montana i = a × t^(-b). Pour Paris, T=10 ans : a ≈ 5,9 et b ≈ 0,59 (i en mm/min, t en min). Toujours consulter les données locales de Météo France.",
        "En station de pompage : choisir le point de fonctionnement à l'intersection courbe de pompe / courbe réseau. Vérifier NPSH_disponible > NPSH_requis + 0,5 m pour éviter la cavitation.",
      ],
    },

    {
      id: 14,
      key: 'norms',
      title: "Normes & Références — Hydraulique urbaine",
      icon: '📜',
      type: 'norms',
      norms: [
        { code: "NF EN 752", description: "Réseaux d'évacuation et d'assainissement à l'extérieur des bâtiments — conception, dimensionnement, performance hydraulique." },
        { code: "Fascicule 70 (CCTG)", description: "Ouvrages d'assainissement — spécifications techniques françaises pour les réseaux d'eaux usées et pluviales." },
        { code: "NF EN 805", description: "Alimentation en eau — exigences pour les réseaux d'adduction à l'extérieur des bâtiments (pression, débit, matériaux)." },
        { code: "DTU 60.11", description: "Règles de calcul des installations de plomberie sanitaire et d'évacuation des eaux pluviales — applications intérieures." },
        { code: "Instruction technique DGALN", description: "Instruction technique relative aux réseaux d'assainissement des agglomérations — référence française pour le dimensionnement." },
        { code: "EN 1992-3", description: "Eurocode 2 Partie 3 — Ouvrages de rétention de liquides (réservoirs, bassins en béton armé)." },
      ],
    },

    {
      id: 15,
      key: 'exercises',
      title: "Exercices Hydraulique — 3 niveaux",
      icon: '✍️',
      type: 'exercises',
      exercises: [
        {
          id: 'ex_hyd_1',
          number: 1,
          difficulty: 'Facile',
          text: "Un tuyau AEP Ø 250 mm transporte un débit de 30 L/s. Calculez la vitesse d'écoulement et vérifiez qu'elle est dans la plage admissible [0,5 ; 2,0] m/s.",
          hint: "A = π·D²/4 avec D = 0,250 m. v = Q/A avec Q = 0,030 m³/s.",
          answer_latex: "A = \\frac{\\pi \\times 0{,}250^2}{4} = 0{,}0491 \\text{ m}^2 \\quad v = \\frac{0{,}030}{0{,}0491} = 0{,}611 \\text{ m/s} \\in [0{,}5 ; 2{,}0] \\quad \\checkmark",
          answer_text: "v = 0,61 m/s — Dans la plage admissible ✓",
        },
        {
          id: 'ex_hyd_2',
          number: 2,
          difficulty: 'Moyen',
          text: "Canal trapézoïdal : base b = 2 m, pente des talus m = 1 (1V:1H), hauteur d'eau y = 0,8 m. Coefficient de Strickler Ks = 50. Pente du radier I = 0,3%. Calculez le débit Q par Manning-Strickler.",
          hint: "Section trapézoïdale : A = (b + m·y)·y, P = b + 2·y·√(1+m²), Rh = A/P. Q = Ks·A·Rh^(2/3)·I^(1/2).",
          answer_latex: "A = (2 + 1 \\times 0{,}8) \\times 0{,}8 = 2{,}24 \\text{ m}^2 \\quad P = 2 + 2 \\times 0{,}8 \\times \\sqrt{2} = 4{,}263 \\text{ m} \\quad R_h = \\frac{2{,}24}{4{,}263} = 0{,}525 \\text{ m}",
          answer_text: "Q = 50 × 2,24 × 0,525^(2/3) × 0,003^(1/2) = 50 × 2,24 × 0,650 × 0,0548 = 3,99 m³/s ≈ 4,0 m³/s",
        },
        {
          id: 'ex_hyd_3',
          number: 3,
          difficulty: 'Difficile',
          text: "Une pompe alimente un réservoir situé 40 m au-dessus de la pompe via une conduite de Ø 200 mm, L = 800 m, f = 0,020. Débit Q = 20 L/s. Calculez la HMT (Hauteur Manométrique Totale) et la puissance de la pompe si η = 70%.",
          hint: "HMT = Δz + ΔhL + Σ Δhs. ΔhL = f·(L/D)·v²/(2g). Puissance P = ρ·g·Q·HMT / η.",
          answer_latex: "v = \\frac{0{,}020}{0{,}0314} = 0{,}637 \\text{ m/s} \\quad \\Delta h_L = 0{,}02 \\times \\frac{800}{0{,}2} \\times \\frac{0{,}637^2}{19{,}62} = 80 \\times 0{,}0207 = 1{,}65 \\text{ m}",
          answer_text: "HMT ≈ 40 + 1,65 + 0,5 (singulières estimées) = 42,2 m. P = 1000 × 9,81 × 0,020 × 42,2 / 0,70 = 11 830 W ≈ 12 kW",
        },
      ],
    },

    {
      id: 16,
      key: 'corrections',
      title: "Corrections détaillées",
      icon: '✅',
      type: 'corrections',
      note: "Les corrections complètes incluent les conversions d'unités détaillées, les schémas hydrauliques et la vérification des plages de vitesse admissibles. Cliquez sur 'Voir la correction'.",
    },

    {
      id: 17,
      key: 'quiz',
      title: "Quiz Hydraulique — 3 questions",
      icon: '🎯',
      type: 'quiz',
      questions: [
        {
          id: 'q_hyd_1',
          question: "Dans le théorème de Bernoulli, quel terme représente l'énergie cinétique ?",
          options: [
            { id: 'a', text: "z (altitude)" },
            { id: 'b', text: "p/(ρg) (pression)" },
            { id: 'c', text: "v²/(2g) (hauteur cinétique)" },
            { id: 'd', text: "Δh (pertes de charge)" },
          ],
          correct: 'c',
          explanation: "v²/(2g) est la hauteur cinétique — elle représente l'énergie cinétique par unité de poids du fluide. z est l'énergie potentielle et p/(ρg) est l'énergie de pression. Δh n'est pas dans Bernoulli idéal, c'est un terme correctif pour les pertes.",
        },
        {
          id: 'q_hyd_2',
          question: "Pour un écoulement à surface libre dans un canal en béton (Ks = 70), quelle formule utilise-t-on ?",
          options: [
            { id: 'a', text: "Darcy-Weisbach (pertes de charge en conduite)" },
            { id: 'b', text: "Manning-Strickler : Q = Ks·A·Rh^(2/3)·I^(1/2)" },
            { id: 'c', text: "Hazen-Williams (réseaux AEP)" },
            { id: 'd', text: "Poleni (déversoirs)" },
          ],
          correct: 'b',
          explanation: "Manning-Strickler est LA formule de référence pour les écoulements à surface libre en régime uniforme. Ks = 70 pour béton lisse. Darcy-Weisbach s'utilise pour les conduites en charge, Poleni pour les déversoirs.",
        },
        {
          id: 'q_hyd_3',
          question: "Un réseau AEP doit maintenir une pression minimale au robinet de combien ?",
          options: [
            { id: 'a', text: "0,5 bar" },
            { id: 'b', text: "1 bar" },
            { id: 'c', text: "2 bars minimum (3 bars recommandé)" },
            { id: 'd', text: "5 bars minimum" },
          ],
          correct: 'c',
          explanation: "La pression résiduelle minimale au robinet est de 2 bars (20 mCE) selon le règlement sanitaire départemental. En pratique, on vise 3 bars (30 mCE) pour assurer un confort d'utilisation. Au-delà de 6 bars, un réducteur de pression est nécessaire.",
        },
      ],
    },

    {
      id: 18,
      key: 'exam_questions',
      title: "Questions d'examen — Niveau BTS/Licence Hydraulique",
      icon: '🎓',
      type: 'exam',
      questions: [
        "Démontrez le théorème de Bernoulli à partir de l'équation d'Euler pour un fluide parfait en régime permanent. Précisez les hypothèses et les limites de validité.",
        "Comparez les formules de Darcy-Weisbach et de Hazen-Williams pour le calcul des pertes de charge. Dans quels cas utilise-t-on l'une plutôt que l'autre ?",
        "Un bassin de rétention doit stocker le volume excédentaire d'une pluie de retour T=30 ans pour un bassin versant de 8 ha (C=0,65). Calculez le volume de stockage par la méthode des volumes.",
        "Expliquez le phénomène du coup de bélier dans une conduite. Quelles sont les causes, les conséquences et les moyens de protection ?",
      ],
    },

    {
      id: 19,
      key: 'interview_questions',
      title: "Questions d'entretien — Hydraulicien VRD",
      icon: '💼',
      type: 'interview',
      questions: [
        {
          question: "Un promoteur vous demande pourquoi il faut un bassin de rétention pour sa ZAC de 3 ha alors qu'il n'y a pas de cours d'eau à proximité. Que répondez-vous ?",
          answer_hint: "L'imperméabilisation du sol augmente le ruissellement de 3× à 10× par rapport au terrain naturel. Sans bassin, le réseau communal en aval est saturé, provoquant des inondations chez les riverains. Le zonage pluvial impose un débit de fuite maximal (souvent 3-10 L/s/ha). Le bassin de rétention stocke le surplus temporaire et le restitue progressivement.",
        },
        {
          question: "Quelle est la différence entre un réseau unitaire et un réseau séparatif ? Lequel préférez-vous et pourquoi ?",
          answer_hint: "Unitaire : un seul collecteur pour EU+EP (ancien, économique à construire, mais station d'épuration surchargée en temps de pluie). Séparatif : 2 réseaux distincts EU vers STEP et EP vers milieu naturel (plus cher, mais protège la STEP et le milieu récepteur). Préférence : séparatif pour les nouveaux aménagements (conformité loi sur l'eau).",
        },
        {
          question: "Sur chantier, un canalisateur vous dit que la pente du collecteur Ø 300 EP est de 0,1%. Est-ce acceptable ?",
          answer_hint: "Trop faible ! Pour Ø 300, la pente minimale d'autocurage est de 0,3% (vitesse ≥ 0,60 m/s à débit de temps sec). À 0,1%, les sédiments se déposent, colmatent la conduite et causent des refoulements. Exiger au minimum 0,3%, idéalement 0,5%. Si impossible, envisager un regard de chasse ou un diamètre plus petit.",
        },
      ],
    },

    {
      id: 20,
      key: 'practical_case',
      title: "Cas pratique — Réseau AEP d'un lotissement",
      icon: '🔧',
      type: 'practical',
      scenario: "Étude de cas — Alimentation en eau potable d'un lotissement de 120 maisons",
      description: `**Mise en situation** : Bureau d'études VRD, Montpellier. Conception du réseau AEP d'un lotissement de 120 maisons individuelles. Point de raccordement au réseau communal : pression = 4,5 bars, altitude = 85 m NGF. Point le plus défavorable : altitude = 105 m NGF, distance = 600 m. Débit de pointe simultané estimé : 12 L/s. Conduite en PEHD PN10 (f = 0,020).`,
      resolution_latex_1: "\\Delta z = 105 - 85 = 20 \\text{ m} \\quad p_{dispo} = 4{,}5 \\text{ bars} = 45{,}9 \\text{ mCE}",
      resolution_latex_2: "\\text{Essai } D = 110 \\text{ mm} : v = \\frac{0{,}012}{\\pi \\times 0{,}110^2/4} = 1{,}26 \\text{ m/s} \\quad \\Delta h_L = 0{,}02 \\times \\frac{600}{0{,}11} \\times \\frac{1{,}26^2}{19{,}62} = 8{,}87 \\text{ m}",
      resolution_latex_3: "p_{r\\acute{e}siduelle} = 45{,}9 - 20 - 8{,}87 - 1{,}0 = 16{,}0 \\text{ mCE} = 1{,}57 \\text{ bars} < 2 \\text{ bars} \\quad \\Rightarrow \\quad \\text{Insuffisant !}",
      conclusion: "Ø 110 mm insuffisant. Essai Ø 140 mm : v = 0,78 m/s, ΔhL = 2,77 m → p_résiduelle = 22,1 mCE = 2,17 bars ≥ 2 bars ✓. Retenir PEHD Ø 140 PN10.",
    },

    {
      id: 21,
      key: 'summary',
      title: "Résumé exécutif — Hydraulique en 6 points",
      icon: '📋',
      type: 'summary',
      content: `### L'Hydraulique en 6 fondamentaux

1. **Continuité** : $Q = A \\cdot v = \\text{constante}$ — conservation du débit le long du réseau
2. **Bernoulli** : $\\frac{p}{\\rho g} + \\frac{v^2}{2g} + z = H = \\text{constante} - \\Delta h$ — bilan d'énergie
3. **Pertes de charge** : $\\Delta h_L = f \\cdot \\frac{L}{D} \\cdot \\frac{v^2}{2g}$ (Darcy) + $\\Delta h_s = K \\cdot \\frac{v^2}{2g}$ (singulières)
4. **Surface libre** : $Q = K_s \\cdot A \\cdot R_h^{2/3} \\cdot I^{1/2}$ (Manning-Strickler, Ks=70 béton)
5. **Débit pluvial** : $Q_p = C \\cdot i \\cdot A$ (méthode rationnelle, bassins < 200 ha)
6. **Vérification** : $0{,}6 \\le v \\le 3{,}0$ m/s (autocurage/érosion) et $p_{résiduelle} \\ge 2$ bars (AEP)`,
    },

    {
      id: 22,
      key: 'key_points',
      title: "Points clés à mémoriser — Hydraulique",
      icon: '⭐',
      type: 'keypoints',
      points: [
        "Bernoulli : p/(ρg) + v²/(2g) + z = H (charge totale) — diminue par les pertes de charge Δh",
        "Manning-Strickler : Q = Ks·A·Rh^(2/3)·I^(1/2) — surface libre en régime uniforme uniquement",
        "Darcy-Weisbach : ΔhL = f·(L/D)·v²/(2g) — conduites en charge, f ≈ 0,02 (courant)",
        "Méthode rationnelle : Qp = C·i·A — bassins versants < 200 ha, C=0,9 (urbain dense)",
        "Vitesse : 0,6 ≤ v ≤ 3,0 m/s (assainissement) | 0,5 ≤ v ≤ 2,0 m/s (AEP)",
        "Pression résiduelle AEP ≥ 2 bars (20 mCE) au robinet le plus défavorable",
        "Conversions : 1 bar = 10,2 mCE | 1 L/s = 0,001 m³/s | 1 mm/h = 2,78 L/(s·ha)",
      ],
    },

    {
      id: 23,
      key: 'self_assessment',
      title: "Auto-évaluation — Maîtrise de l'Hydraulique",
      icon: '🏆',
      type: 'self_assessment',
      description: "Validez vos compétences hydrauliques :",
      objectives: [
        "J'applique Bernoulli correctement avec les termes de pression, cinétique, altitude et pertes de charge",
        "Je calcule les pertes de charge linéaires (Darcy) et singulières (K·v²/2g)",
        "Je dimensionne un collecteur pluvial avec Manning-Strickler (Ks, Rh, I)",
        "J'utilise la méthode rationnelle Qp = C·i·A pour calculer le débit de pointe pluvial",
        "Je calcule le débit d'un déversoir rectangulaire (formule de Poleni)",
        "Je vérifie la vitesse d'autocurage (≥0,6 m/s) et la pression résiduelle AEP (≥2 bars)",
        "J'ai résolu les 3 exercices avec les bonnes conversions d'unités",
        "J'ai obtenu 3/3 au quiz hydraulique",
      ],
    },
  ],

  quickQuiz: {
    question: "Quelle formule donne le débit dans un canal à surface libre en régime uniforme ?",
    options: [
      { id: 'a', label: "A) Q = f·(L/D)·v²/(2g) (Darcy)" },
      { id: 'b', label: "B) Q = Ks·A·Rh^(2/3)·I^(1/2) (Manning-Strickler)" },
      { id: 'c', label: "C) Q = μ·b·√(2g)·H^(3/2) (Poleni)" },
    ],
    correct: 'b',
    explanation: "Manning-Strickler Q = Ks·A·Rh^(2/3)·I^(1/2) est la formule de référence pour les écoulements à surface libre en régime uniforme. Darcy s'utilise pour les conduites en charge, Poleni pour les déversoirs.",
  },
};
