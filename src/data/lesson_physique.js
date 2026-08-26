// ── Lesson: Physique Fondamentale & Physique des Matériaux — Module 02 ─────────
export const lesson_physique = {
  moduleId: 2,
  slug: 'physique',
  lessonIndex: 1,
  title: "Physique Fondamentale, Mécanique Classique & Thermodynamique",
  subtitle: "Module 02 — Physique Appliquée au Génie Civil",
  level: 'Débutant',
  duration: '35h',
  diagramType: 'force_decomposition',
  tags: ['Physique', 'Lois de Newton', 'Thermodynamique', 'Dilatation Thermique', 'Énergie', 'Conduction', 'Joint de Dilatation'],

  steps: [
    {
      id: 1,
      key: 'definition',
      title: "Définition — La Physique Appliquée au Génie Civil",
      icon: '📖',
      type: 'definition',
      fr: 'Lois de Newton, Statismes, Thermodynamique & Transferts Thermiques',
      en: 'Fundamental Physics, Classical Mechanics & Thermal Physics',
      metier: "Pratiquée par les ingénieurs d'études de structures, ingénieurs fluides & thermique du bâtiment et chercheurs en science des matériaux.",
      content: `La **physique fondamentale** constitue le socle scientifique indiscutable de tout l'ingénierie du génie civil. Elle régit le comportement de la matière, l'équilibre des forces et les transferts d'énergie dans les structures et les bâtiments.

### Les 3 grands piliers de la physique du génie civil :
1. **La Mécanique Newtonienne (Statique & Dynamique)** : Étude du mouvement et de l'équilibre des corps sous l'action des forces extérieures (pesanteur, vent, séisme, frottement).
2. **La Thermodynamique & Dilatation Thermique** : Analyse des variations dimensionnelles ($\\\\Delta L = \\\\alpha \\\\cdot L \\\\cdot \\\\Delta T$) subies par les structures sous l'effet des cycles climatiques d'été et d'hiver.
3. **La Thermique du Bâtiment (Conduction, Convection, Rayonnement)** : Transfert de chaleur à travers l'enveloppe et isolation énergétique (Loi de Fourier $q = -\\\\lambda \\\\nabla T$).

> 💡 **La merveille de la nature** : Le béton ($\\\\alpha \\\\approx 10 \\\\times 10^{-6}\\\\text{ K}^{-1}$) et l'acier ($\\\\alpha \\\\approx 12 \\\\times 10^{-6}\\\\text{ K}^{-1}$) ont des coefficients de dilatation thermique quasi identiques ! C'est ce qui rend l'association du Béton Armé possible sans destruction par cisaillement thermique.`,
    },

    {
      id: 2,
      key: 'importance',
      title: "Pourquoi les lois de la physique gouvernent le dimensionnement",
      icon: '⚠️',
      type: 'importance',
      content: `Ignorer les principes fondamentaux de la physique entraîne la fissuration prématurée des ouvrages ou leur ruine thermique et mécanique.

- **Évitement du blocage thermique des ponts** : Un tablier de pont de 100 m s'allonge de plus de 5 cm entre l'hiver (-10°C) et l'été (+40°C). Sans joint de dilatation, les réactions d'encastrement ruineraient les culées.
- **Préservation du confort thermique des bâtiments** : Maîtriser la résistance thermique $R = e / \\\\lambda$ permet de diviser la consommation de chauffage par 5.
- **Sécurité sous actions climatiques** : La pression dynamique du vent varie comme le carré de la vitesse ($q_p \\\\propto v^2$). Une tempête à 160 km/h exerce 4 fois plus d'effort qu'un vent à 80 km/h !

> ⚠️ **Règle d'or** : "La physique ne négocie jamais. Si une dilatation thermique est bloquée, la contrainte engendrée $\\\\sigma_{th} = E \\\\cdot \\\\alpha \\\\cdot \\\\Delta T$ est indépendante de la longueur de la pièce !"`,
    },

    {
      id: 3,
      key: 'applications',
      title: "Applications terrain — Outils & Conduite de projets",
      icon: '🏗️',
      type: 'applications',
      examples: [
        {
          context: "Dimensionnement des Joints de Chaussée sur Ponts",
          text: "Calcul du souffle utile du joint de dilatation pour absorber le cumul du retrait, du fluage et de la dilatation thermique extrême de l'ouvrage.",
        },
        {
          context: "Prévention du Flambage des Rails Ferroviaires en Été",
          text: "Calcul des contraintes de compression dans les Longs Rails Soudés (LRS) soumis à des températures de rail atteignant 60°C au soleil.",
        },
        {
          context: "Bilan Thermique de l'Enveloppe selon la RE2020",
          text: "Calcul du coefficient de transmission thermique surfacique $U_{mur} = 1 / R_{total}$ pour respecter la réglementation environnementale.",
        },
        {
          context: "Analyse des Effets du Vent sur les Structures Légeres",
          text: "Calcul de la pression de pic du vent $q_p(z)$ sur une toiture ou un bardage métallique d'après l'Eurocode 1 Part 1-4.",
        },
        {
          context: "Étude des Contraintes Thermiques dans le Béton Massif (Barrages)",
          text: "Suivi de l'élévation de température d'exothermie d'hydratation du ciment pour éviter le mirco-fissurage traversant.",
        },
      ],
    },

    {
      id: 4,
      key: 'theory',
      title: "Théorie — Lois de Newton, Dilatation & Transferts Thermiques",
      icon: '📐',
      type: 'theory',
      diagramType: 'force_decomposition',
      content: `### 1. Les 3 Lois de Newton

- **1ère Loi (Inertie)** : Un corps reste en état de repos ou de mouvement rectiligne uniforme si $\\sum \\vec{F}_{ext} = \\vec{0}$.
- **2ème Loi (Principe Fondamental de la Dynamique)** : $\\sum \\vec{F} = m \\cdot \\vec{a} = m \\cdot \\frac{d\\vec{v}}{dt}$.
- **3ème Loi (Action-Réaction)** : Tout corps A exerçant une force $\\vec{F}_{A/B}$ sur un corps B subit une force égale et opposée $\\vec{F}_{B/A} = -\\vec{F}_{A/B}$.

### 2. Dilatation Thermique & Contrainte Hyperstatique

L'allongement thermique d'un élément de longueur initiale $L_0$ sous une variation de température $\\Delta T$ vaut :

$$\\Delta L_{th} = \\alpha \\cdot L_0 \\cdot \\Delta T$$

Si cet allongement est totalement empêché (blocage hyperstatique aux appuis), il naît une contrainte thermique de compression :

$$\\sigma_{th} = E \\cdot \\varepsilon_{th} = E \\cdot \\alpha \\cdot \\Delta T$$

### 3. Conduction Thermique (Loi de Fourier)

Le flux de chaleur $Q$ (en Watts) traversant une paroi d'épaisseur $e$, de surface $A$ et de conductivité thermique $\\lambda$ vaut :

$$Q = \\frac{\\lambda \\cdot A \\cdot (T_{int} - T_{ext})}{e} = \\frac{A \\cdot (T_{int} - T_{ext})}{R_{th}} \\qquad \\text{avec } R_{th} = \\frac{e}{\\lambda}$$`,
    },

    {
      id: 5,
      key: 'formulas',
      title: "Formules essentielles — Physique & Thermique du génie civil",
      icon: '🔢',
      type: 'formulas',
      diagramType: 'force_decomposition',
      formulas: [
        {
          name: "Allongement thermique (ΔL_th)",
          latex: "\\Delta L_{th} = \\alpha \\cdot L_0 \\cdot \\Delta T \\quad [\\text{m}]",
          description: "α = coefficient de dilatation thermique [K⁻¹], L0 = longueur initiale [m], ΔT = variation de température [°C ou K].",
        },
        {
          name: "Contrainte thermique sous blocage hyperstatique",
          latex: "\\sigma_{th} = E \\cdot \\alpha \\cdot \\Delta T \\quad [\\text{MPa}]",
          description: "Remarquer que la contrainte thermique est indépendante de la longueur de la pièce !",
        },
        {
          name: "Pression dynamique du vent d'après l'Eurocode 1",
          latex: "q_p = \\frac{1}{2} \\cdot \\rho_{air} \\cdot v_b^2 \\cdot c_e(z) \\quad [\\text{N/m}^2]",
          description: "ρ_air ≈ 1,25 kg/m³, vb = vitesse de base du vent [m/s], ce(z) = coefficient d'exposition.",
        },
        {
          name: "Résistance thermique d'une paroi multicouche",
          latex: "R_{total} = R_{si} + \\sum_{i} \\frac{e_i}{\\lambda_i} + R_{se} \\quad [\\text{m}^2\\cdot\\text{K/W}]",
          description: "e_i = épaisseur des couches [m], λ_i = conductivité thermique [W/m·K], Rsi et Rse = résistances superficielles.",
        },
        {
          name: "Coefficient de transmission thermique U",
          latex: "U = \\frac{1}{R_{total}} \\quad [\\text{W/m}^2\\cdot\\text{K}]",
          description: "Plus U est faible, plus la paroi est isolante.",
        },
      ],
    },

    {
      id: 6,
      key: 'stepbystep',
      title: "Calcul complet — Contrainte thermique d'un rail encastré & Joint de pont",
      icon: '🔬',
      type: 'stepbystep',
      problem: "Un rail en acier de voie ferrée (L0 = 50 m, E = 210 000 MPa, α = 12 × 10⁻⁶ K⁻¹) subit un échauffement au soleil de ΔT = +40°C. 1) Calculer l'allongement libre ΔL_th s'il n'était pas bloqué. 2) Calculer la contrainte de compression σ_th engendrée s'il est parfaitement bloqué à ses extrémités (Longs Rails Soudés). 3) Calculer l'effort axial N_th si la section du rail vaut A = 76 cm² (7600 mm²).",
      steps_demo: [
        { n: 1, text: "Calcul de l'allongement thermique libre : ΔL_th = α × L0 × ΔT = (12 × 10⁻⁶) × 50 000 mm × 40°C = 24,0 mm" },
        { n: 2, text: "Calcul de la contrainte thermique sous blocage total : σ_th = E × α × ΔT = 210 000 MPa × (12 × 10⁻⁶) × 40 = 100,8 MPa" },
        { n: 3, text: "Calcul de l'effort axial de compression dans le rail : N_th = σ_th × A = 100,8 N/mm² × 7600 mm² = 766 080 N = 766,1 kN (soit 76,6 tonnes de poussée par rail !)" },
        { n: 4, text: "Analyse géotechnique/structurelle : Cet effort axial de 766 kN explique le risque de flambage latéral des rails en été si le ballast n'est pas suffisamment lourd !" },
      ],
      result_latex: "\\Delta L_{th,libre} = \\textbf{24{,}0 mm} \\qquad \\sigma_{th} = \\textbf{100{,}8 MPa} \\qquad N_{th} = \\textbf{766{,}1 kN} \\quad \\checkmark",
    },

    {
      id: 7,
      key: 'units',
      title: "Unités & Constantes Physiques — Tableau de référence",
      icon: '📏',
      type: 'units',
      table: [
        { grandeur: "Coefficient de dilatation α", si: "K⁻¹ ou °C⁻¹ (ex: Béton ≈ 10⁻⁵ K⁻¹)", imperial: "°F⁻¹", conversion: "Variation relative de longueur par degré de température" },
        { grandeur: "Conductivité thermique λ", si: "W/(m·K)", imperial: "Btu/(h·ft·°F)", conversion: "Béton ≈ 1,6 W/mK | Laine de verre ≈ 0,035 W/mK" },
        { grandeur: "Résistance thermique R", si: "m²·K/W", imperial: "h·ft²·°F/Btu", conversion: "R = e / λ" },
        { grandeur: "Accélération de la pesanteur g", si: "9,81 m/s² (ou N/kg)", imperial: "32,2 ft/s²", conversion: "Transforme la masse (kg) en poids (N)" },
        { grandeur: "Masse volumique de l'air ρ_air", si: "1,25 kg/m³ (à 15°C et 1 atm)", imperial: "0.078 lb/ft³", conversion: "Utilisée pour le calcul de la pression du vent" },
      ],
      note: "💡 ASTUCE : Pour mémoriser les ordres de grandeur de conductivité $\\lambda$ : Isolants $< 0{,}05\\text{ W/mK}$, Bois $\\approx 0{,}13\\text{ W/mK}$, Béton $\\approx 1{,}6\\text{ W/mK}$, Acier $\\approx 50\\text{ W/mK}$.",
    },

    {
      id: 8,
      key: 'hypotheses',
      title: "Hypothèses & principes de simplification",
      icon: '📋',
      type: 'hypotheses',
      items: [
        { type: 'info', text: "En statique classique, les corps sont supposés être des solides indeformables pour la recherche des réactions d'appui." },
        { type: 'info', text: "La dilatation thermique est supposée réversible et isotrope (égale dans toutes les directions pour le béton et l'acier)." },
        { type: 'warning', text: "ATTENTION : Ne jamais additionner directement des températures en °C lors des calculs de rapport ! Toujours utiliser des variations de température $\\Delta T = T_2 - T_1$." },
        { type: 'warning', text: "Pression du vent : Le vent s'exerce perpendiculairement à la surface exposée. La pression varie avec l'altitude selon la rugosité du terrain (Eurocode 1)." },
        { type: 'tip', text: "Bilan thermique simplifiée : Le flux de déperdition thermique surfacique vaut $q = U \\cdot \\Delta T$. Pour une maison de $200\\text{ m}^2$ de parois avec $U = 0{,}25\\text{ W/m}^2\\text{K}$ et $\\Delta T = 20^\\circ\\text{C}$, $Q = 200 \\times 0{,}25 \\times 20 = 1000\\text{ W} = 1\\text{ kW}$." },
      ],
    },

    {
      id: 9,
      key: 'simple_examples',
      title: "Exemples guidés — Dilatation & Isolation thermique",
      icon: '✏️',
      type: 'examples_simple',
      examples: [
        {
          title: "Exemple 1 : Calcul de dilatation d'un tablier de pont béton",
          given: "Pont de longueur L = 80 m, α = 10 × 10⁻⁶ K⁻¹, variation de température entre hiver (-15°C) et été (+35°C) → ΔT = 50°C",
          find: "L'allongement total ΔL subit par le pont",
          solution_latex: "\\Delta L = 10 \\times 10^{-6} \\times 80 \\text{ m} \\times 50^\\circ\\text{C} = 0{,}040 \\text{ m} = 40 \\text{ mm}",
          result: "Le joint de dilatation doit pouvoir absorber au moins 40 mm de mouvement.",
        },
        {
          title: "Exemple 2 : Calcul de la résistance thermique d'un mur isolé",
          given: "Mur composé de 20 cm de béton (λ = 1,6 W/mK) + 12 cm de laine de verre (λ = 0,032 W/mK). Résistances superficielles Rsi + Rse = 0,17 m²K/W",
          find: "La résistance thermique totale R_total et le coefficient U",
          solution_latex: "R_{b\\acute{e}ton} = \\frac{0{,}20}{1{,}6} = 0{,}125 \\qquad R_{isolant} = \\frac{0{,}12}{0{,}032} = 3{,}75 \\qquad R_{tot} = 0{,}17 + 0{,}125 + 3{,}75 = 4{,}045 \\text{ m}^2\\text{K/W}",
          solution_latex_2: "U = \\frac{1}{4{,}045} = 0{,}247 \\text{ W/m}^2\\text{K}",
          result: "R_total = 4,05 m²K/W | U = 0,25 W/m²K (Niveau conforme RT2012 / RE2020).",
        },
        {
          title: "Exemple 3 : Force de pesée d'une dalle béton",
          given: "Dalle de volume V = 15 m³, poids volumique du béton armé γ = 25 kN/m³",
          find: "La masse m et le poids P de la dalle",
          solution_latex: "P = V \\cdot \\gamma = 15 \\times 25 = 375 \\text{ kN} \\qquad m = \\frac{375\\,000 \\text{ N}}{9{,}81 \\text{ m/s}^2} = 38\\,226 \\text{ kg} = 38{,}2 \\text{ tonnes}",
          result: "Poids P = 375 kN | Masse = 38,2 tonnes.",
        },
      ],
    },

    {
      id: 10,
      key: 'real_examples',
      title: "Exemple réel — Les joints de dilatation géants du Viaduc de Millau",
      icon: '🏢',
      type: 'examples_real',
      diagramType: 'force_decomposition',
      examples: [
        {
          context: "Tablier métallique de 2 460 m de longueur soumis à des deltas de température de 60°C",
          scenario: "Le tablier s'allonge de 1,20 m du côté sud et 1,00 m du côté nord entre l'hiver et l'été. Installation des plus grands joints de dilatation à peigne du monde.",
          decomposition_latex: "\\Delta L_{max} = 12 \\times 10^{-6} \\times 2460 \\text{ m} \\times 60^\\circ\\text{C} = 1{,}771 \\text{ m}",
          lesson: "Sans la prise en compte précise de la dilatation thermique physique, le viaduc se serait déformé de manière incontrôlable ou aurait détruit ses culées de rive.",
        },
      ],
    },

    {
      id: 11,
      key: 'diagrams',
      title: "Schéma du triangle des forces & Dilatation thermique",
      icon: '📊',
      type: 'interactive_diagram',
      diagramType: 'force_decomposition',
      description: "Visualisez le principe du décomposition des forces de Newton, l'effet d'une dilatation thermique bloquée vs libre et la résistance thermique d'une paroi multicouche.",
      diagram_description: [
        "Décomposition des forces : Projection du poids P sur les axes d'un plan incliné (P·sin α et P·cos α)",
        "Dilatation thermique : Allongement libre ΔL = α L ΔT et contrainte d'encastrement σ = E α ΔT",
        "Profil de température : Chute de température à travers le mur béton et l'isolant (pente thermique λ)",
      ],
    },

    {
      id: 12,
      key: 'mistakes',
      title: "Erreurs classiques en Physique du Bâtiment & Génie Civil",
      icon: '⛔',
      type: 'mistakes',
      items: [
        {
          mistake: "Confondre masse (kg) et Poids (N ou kN)",
          trap: "Utiliser m = 1000 kg directement dans une équation de moment sans multiplier par g = 9,81 m/s²",
          fix: "Le Poids est une force P = m · g (1 000 kg = 9,81 kN ≈ 10 kN). Toujours vérifier les unités !",
        },
        {
          mistake: "Oublier le pont thermique au droit des planchers",
          trap: "Calculer l'isolation d'une façade en oubliant l'interruption de l'isolant par le nez de dalle béton",
          fix: "Ajouter le coefficient de pont thermique linéique Ψ (Psi) pour obtenir la déperdition réelle.",
        },
        {
          mistake: "Penser que la contrainte thermique dépend de la longueur de la pièce",
          trap: "Croire qu'un petit bloc de béton bloqué subit moins de contrainte thermique qu'une grande poutre",
          fix: "Faux ! Pour un blocage parfait, σ_th = E · α · ΔT ne dépend PAS de la longueur L0.",
        },
      ],
    },

    {
      id: 13,
      key: 'tips',
      title: "Astuces de l'ingénieur en Physique Appliquée",
      icon: '💡',
      type: 'tips',
      tips: [
        "Moyen mnémotechnique dilatation : Béton et Acier se dilatent environ de **1 mm par mètre pour 100°C de chauffe** (10⁻⁵ K⁻¹ × 1 m × 100 K = 1 mm).",
        "Ordre de grandeur du poids du béton armé : Retenir $\\gamma_{BA} = 25\\text{ kN/m}^3$ (soit 2,5 tonnes par m³).",
        "Règle de conversion vent : La pression dynamique du vent est $q \\approx 0{,}6 \\cdot v^2$ (avec $v$ en m/s et $q$ en N/m²). À 30 m/s (108 km/h), $q \\approx 0{,}6 \\times 900 = 540\\text{ N/m}^2$.",
        "Isolation parfaite : Pour doubler la résistance thermique $R$, il faut doubler l'épaisseur d'isolant $e = R \\cdot \\lambda$.",
      ],
    },

    {
      id: 14,
      key: 'normes',
      title: "Normes & Références — Physique & Thermique",
      icon: '📜',
      type: 'norms',
      norms: [
        { code: "NF EN 1991-1-5 (Eurocode 1)", description: "Actions sur les structures — Actions thermiques (Cartes des températures extrêmes en Europe)." },
        { code: "Réglementation Environnementale RE2020", description: "Règles de calcul des déperditions thermiques, de l'isolation et de l'empreinte carbone des bâtiments." },
        { code: "NF EN ISO 6946", description: "Composants et parois de bâtiment — Résistance thermique et coefficient de transmission thermique (Calcul des U)." },
      ],
    },

    {
      id: 15,
      key: 'exercises',
      title: "Exercices Physique & Thermique — 3 niveaux",
      icon: '✍️',
      type: 'exercises',
      exercises: [
        {
          id: 'ex_phy_1',
          number: 1,
          difficulty: 'Facile',
          text: "Un bloc de béton de volume 4,0 m³ est suspendu à une grue. Calculer son poids P en kN (γ_béton = 25 kN/m³).",
          hint: "P = V × γ.",
          answer_latex: "P = 4{,}0 \\text{ m}^3 \\times 25 \\text{ kN/m}^3 = 100{,}0 \\text{ kN}",
          answer_text: "Poids du bloc P = 100,0 kN (10 tonnes).",
        },
        {
          id: 'ex_phy_2',
          number: 2,
          difficulty: 'Moyen',
          text: "Une poutre métallique d'acier de L0 = 20 m (α = 1,2 × 10⁻⁵ K⁻¹) subit un écart de température ΔT = +30°C. Calculer son allongement thermique libre ΔL en mm.",
          hint: "ΔL = α × L0 × ΔT.",
          answer_latex: "\\Delta L = (1{,}2 \\times 10^{-5}) \\times 20\\,000 \\text{ mm} \\times 30 = 7{,}20 \\text{ mm}",
          answer_text: "Allongement thermique ΔL = 7,20 mm.",
        },
        {
          id: 'ex_phy_3',
          number: 3,
          difficulty: 'Difficile',
          text: "Calculer la contrainte thermique σ_th engendrée dans une conduite en béton (E = 30 000 MPa, α = 1,0 × 10⁻⁵ K⁻¹) si ses deux extrémités sont totalement encastrées et que la température augmente de ΔT = 25°C.",
          hint: "σ_th = E × α × ΔT.",
          answer_latex: "\\sigma_{th} = 30\\,000 \\text{ MPa} \\times (1{,}0 \\times 10^{-5}) \\times 25 = 7{,}50 \\text{ MPa}",
          answer_text: "Contrainte de compression thermique σ_th = 7,50 MPa.",
        },
      ],
    },

    {
      id: 16,
      key: 'corrections',
      title: "Corrections détaillées",
      icon: '✅',
      type: 'corrections',
      note: "Retrouvez les détails des équations de statique, de dilatation et des bilans thermiques en cliquant sur 'Voir la correction'.",
    },

    {
      id: 17,
      key: 'quiz',
      title: "Quiz Physique & Thermique — 3 questions",
      icon: '🎯',
      type: 'quiz',
      questions: [
        {
          id: 'q_phy_1',
          question: "Pourquoi le Béton Armé est-il un matériau si performant face aux variations de température ?",
          options: [
            { id: 'a', text: "Car le béton empêche l'acier de chauffer" },
            { id: 'b', text: "Car le béton et l'acier ont des coefficients de dilatation thermique α quasi identiques (≈ 10 à 12 × 10⁻⁶ K⁻¹)" },
            { id: 'c', text: "Car l'acier ne se dilate jamais" },
          ],
          correct: 'b',
          explanation: "Les coefficients de dilatation thermique du béton et de l'acier sont très proches, ce qui évite le cisaillement interne à l'interface lors des variations climatiques.",
        },
        {
          id: 'q_phy_2',
          question: "Quelle formule donne la résistance thermique R d'une couche d'isolant d'épaisseur e et de conductivité λ ?",
          options: [
            { id: 'a', text: "R = e × λ" },
            { id: 'b', text: "R = e / λ" },
            { id: 'c', text: "R = λ / e" },
          ],
          correct: 'b',
          explanation: "La résistance thermique est R = e / λ (en m²·K/W). Plus l'épaisseur e est grande et λ faible, plus R est élevé.",
        },
        {
          id: 'q_phy_3',
          question: "Que devient la contrainte thermique σ_th dans une barre bloquée aux extrémités si on double sa longueur L0 ?",
          options: [
            { id: 'a', text: "Elle double" },
            { id: 'b', text: "Elle reste rigoureusement identique (σ_th = E · α · ΔT ne dépend pas de L0)" },
            { id: 'c', text: "Elle est divisée par deux" },
          ],
          correct: 'b',
          explanation: "Pour un encastrement parfait, σ_th = E · α · ΔT. L'allongement ΔL dépend de L0, mais la déformation relative ε = ΔL/L0 est indépendante de L0, donc la contrainte est inchangée !",
        },
      ],
    },

    {
      id: 18,
      key: 'exam_questions',
      title: "Questions d'examen — Niveau Licence Ingénierie",
      icon: '🎓',
      type: 'exam',
      questions: [
        "Établissez l'équation différentielle de conduction thermique 1D de Fourier en régime permanent à travers une paroi composite à 3 couches.",
        "Démontrez la formule de la contrainte thermique hyperstatique σ_th = E α ΔT dans une poutre bi-encastrée. Que se passe-t-il si les appuis possèdent une raideur de ressort k_app ?",
        "Expliquez le phénomène de pression dynamique du vent q_p(z) selon l'Eurocode 1 et la décomposition en pression intérieure et extérieure sur un bâtiment.",
      ],
    },

    {
      id: 19,
      key: 'interview_questions',
      title: "Questions d'entretien — Ingénieur Génie Civil",
      icon: '💼',
      type: 'interview',
      questions: [
        {
          question: "Comment dimensionne-t-on un joint de dilatation sur un bâtiment de grande longueur (ex: 80 m) ?",
          answer_hint: "Selon le DTU 20.1, les joints de dilatation de bâtiment doivent être placés tous les 25 à 50 m selon le climat. On calcule le déplacement thermique libre ΔL = α L ΔT auquel on ajoute le retrait du béton (≈ 0,3 mm/m). Le joint (généralement 20 à 40 mm) est garni d'un profilé élastomère souple.",
        },
      ],
    },

    {
      id: 20,
      key: 'practical_case',
      title: "Cas pratique — Dimensionnement du joint de dilatation d'une passerelle",
      icon: '🔧',
      type: 'practical',
      scenario: "Passerelle métallique de L0 = 60 m soumise à des températures d'acier de -20°C en hiver et +50°C en été (ΔT = 70°C, α = 1,2 × 10⁻⁵ K⁻¹).",
      description: "Calcul du mouvement total et dimensionnement du souffle du joint avec coefficient de sécurité de 1,30.",
      resolution_latex_1: "\\Delta L = (1{,}2 \\times 10^{-5}) \\times 60\\,000 \\text{ mm} \\times 70 = 50{,}4 \\text{ mm}",
      resolution_latex_2: "\\text{Souffle utile requis : } S_{req} = 1{,}30 \\times 50{,}4 = 65{,}52 \\text{ mm}",
      conclusion: "Choix d'un joint de dilatation à peigne de souffle nominal 70 mm.",
    },

    {
      id: 21,
      key: 'summary',
      title: "Résumé exécutif — La Physique du Bâtiment en 6 points",
      icon: '📋',
      type: 'summary',
      content: `### La Physique en 6 points clés

1. **Lois de Newton** : $\\sum \\vec{F} = m \\vec{a}$ — base de la statique et dynamique des structures.
2. **Dilatation Thermique** : $\\Delta L = \\alpha L \\Delta T$ — 1 mm/m pour 100°C de chauffe.
3. **Contrainte Thermique** : $\\sigma_{th} = E \\alpha \\Delta T$ sous blocage parfait (indépendante de $L_0$).
4. **Conductivité Thermique** : $R = e / \\lambda$ — plus $R$ est grand, plus le composant est isolant.
5. **Coefficient U** : $U = 1 / R_{total}$ [W/m²K] — caractérise la déperdition thermique de l'enveloppe.
6. **Action du Vent** : Pression $q_p \\propto v^2$ — varie comme le carré de la vitesse du vent.`,
    },

    {
      id: 22,
      key: 'key_points',
      title: "Points clés à mémoriser — Physique",
      icon: '⭐',
      type: 'keypoints',
      points: [
        "Poids P = m · g (g = 9,81 m/s²)",
        "Coefficients α identiques pour le béton et l'acier (10 à 12 × 10⁻⁶ K⁻¹)",
        "Contrainte thermique de blocage : σ_th = E · α · ΔT",
        "Joints de dilatation indispensables pour les structures > 30-40 m",
        "Isolants thermiques : λ < 0,05 W/mK",
      ],
    },

    {
      id: 23,
      key: 'self_assessment',
      title: "Auto-évaluation — Physique Appliquée",
      icon: '🏆',
      type: 'self_assessment',
      description: "Validez vos compétences en physique appliquée et thermique :",
      objectives: [
        "Je sais calculer l'allongement thermique ΔL d'une structure et sa contrainte sous blocage",
        "Je sais calculer la résistance thermique R et le coefficient U d'une paroi",
        "Je comprends l'application des lois de Newton en statique et dynamique",
        "J'ai résolu les 3 exercices de physique avec succès",
        "J'ai obtenu 3/3 au quiz de physique",
      ],
    },
  ],

  quickQuiz: {
    question: "Quelle est la contrainte thermique σ_th engendrée dans une pièce d'acier (E = 210 GPa, α = 12 × 10⁻⁶ K⁻¹) subissant ΔT = 50°C sous blocage total ?",
    options: [
      { id: 'a', label: "A) 60 MPa" },
      { id: 'b', label: "B) 126 MPa" },
      { id: 'c', label: "C) 250 MPa" },
    ],
    correct: 'b',
    explanation: "σ_th = E × α × ΔT = 210 000 MPa × (12 × 10⁻⁶) × 50 = 126 MPa.",
  },
};
