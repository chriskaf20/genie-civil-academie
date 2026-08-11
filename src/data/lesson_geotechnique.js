// ── Lesson: Géotechnique & Mécanique des Sols — Module 13 ──────────────────────
export const lesson_geotechnique = {
  moduleId: 13,
  slug: 'geotechnique',
  lessonIndex: 1,
  title: 'Capacité Portante & Mécanique des Sols',
  subtitle: 'Module 13 — Géotechnique & Mécanique des Sols',
  level: 'Avancé',
  duration: '55h',
  diagramType: 'soil_profile',
  tags: ['Géotechnique', 'Sols', 'Terzaghi', 'Fondations', 'Eurocode 7', 'SPT', 'CPT'],

  steps: [
    {
      id: 1,
      key: 'definition',
      title: 'Définition — La Géotechnique',
      icon: '📖',
      type: 'definition',
      fr: 'Géotechnique & Mécanique des Sols',
      en: 'Geotechnical Engineering & Soil Mechanics',
      metier: "Pratiquée par les ingénieurs géotechniciens, chefs de projet fondations et experts en reconnaissance des sols. Indispensable avant tout projet de bâtiment, pont, barrage ou infrastructure.",
      content: `La **géotechnique** est la branche du génie civil qui étudie le comportement des **sols et roches** sous les sollicitations mécaniques, hydrauliques et chimiques.

### Champs d'application majeurs :
- **Fondations** : Dimensionnement des semelles isolées, filantes, pieux et radiers.
- **Terrassements** : Stabilité des talus, soutènements (palplanches, tirants).
- **Ouvrages hydrauliques** : Barrages en terre, digues, drainage.
- **Géotechnique sismique** : Liquéfaction, amplification de site.

### Les trois piliers de la géotechnique :
1. **Reconnaissance du sol** : Sondages, essais SPT/CPT, laboratoire.
2. **Modélisation** : Lois de comportement (Mohr-Coulomb, Cam-Clay).
3. **Dimensionnement réglementaire** : Eurocode 7 (EN 1997-1).

> 💡 **Chiffre clé** : 40% des sinistres de construction ont une origine géotechnique — sols mal caractérisés, fondations sous-dimensionnées ou tassements différentiels.`,
    },

    {
      id: 2,
      key: 'importance',
      title: "Pourquoi la Géotechnique est critique en Génie Civil",
      icon: '⚠️',
      type: 'importance',
      content: `Le sol est le **matériau de construction le plus complexe et le moins prévisible**. Contrairement au béton ou à l'acier, ses propriétés sont naturelles, hétérogènes et variables.

- **Accidents célèbres** : Effondrement du Nicoll Highway de Singapour (2004), glissement du barrage de Vajont (1963), tassement de la Tour de Pise.
- **Coût des pathologies** : Un tassement différentiel non anticipé coûte 5 à 50× le prix de la reconnaissance de sol préalable.
- **Obligation réglementaire** : En France, la loi ELAN (2018) rend obligatoire l'étude géotechnique de sol (G1-G4) avant toute construction en zone argileuse à risque.

> ⚠️ **Règle d'or** : Ne jamais construire sans étude de sol préalable. Un sondage coûte 3 000–10 000 €. Une reprise en sous-œuvre coûte 50 000–500 000 €.`,
    },

    {
      id: 3,
      key: 'applications',
      title: "Applications terrain — Où la géotechnique intervient",
      icon: '🏗️',
      type: 'applications',
      examples: [
        {
          context: 'Fondations superficielles',
          text: "Dimensionnement de semelles isolées (40×40 à 200×200 cm) pour poteaux de bâtiment selon Terzaghi/EC7. Sol d'assise vérifié à 1,5–2,5 m de profondeur.",
        },
        {
          context: 'Fondations profondes',
          text: "Pieux forés ou battus (Ø 30 à 120 cm, L = 5–30 m) dans sols meubles (argiles, limons, remblais) ou sous nappe phréatique.",
        },
        {
          context: 'Soutènements de fouille',
          text: "Palplanches, parois moulées, tirants d'ancrage pour fouilles de 5–20 m de profondeur en milieu urbain (metro, parking souterrain).",
        },
        {
          context: 'Stabilité des talus',
          text: "Vérification du glissement circulaire (méthode de Bishop, Fellenius) pour remblais autoroutiers, talus de déblai et digues.",
        },
        {
          context: 'Terrassements',
          text: "Calcul du coefficient de portance CBR pour dimensionnement de chaussées. Compactage contrôlé (Proctor normal/modifié).",
        },
        {
          context: 'Géotechnique sismique',
          text: "Évaluation du risque de liquéfaction (sols lâches saturés), amplification de site, spectre EC8 selon classe de sol A-E.",
        },
      ],
    },

    {
      id: 4,
      key: 'theory',
      title: "Théorie — Classification et identification des sols",
      icon: '📐',
      type: 'theory',
      diagramType: 'soil_profile',
      content: `### Classification géotechnique des sols (NF EN ISO 14688)

Les sols sont classifiés selon la **granulométrie** et la **plasticité** :

| Classe | Taille des grains | Comportement |
|--------|------------------|--------------|
| Argile (Cl) | < 0,002 mm | Plastique, cohésif, compressible |
| Limon (Si) | 0,002–0,063 mm | Semi-plastique, sensible à l'eau |
| Sable (Sa) | 0,063–2 mm | Frottant, perméable, non cohésif |
| Gravier (Gr) | 2–63 mm | Frottant, très perméable |
| Cailloux (Co) | > 63 mm | Frottant, très rigide |

### Triangle de Casagrande — Plasticité des fins

Pour les sols fins (argiles/limons), la plasticité est caractérisée par :
- **Limite de liquidité** $W_L$ : sol passe de l'état plastique à liquide
- **Limite de plasticité** $W_P$ : sol passe de l'état solide à plastique
- **Indice de plasticité** : $I_P = W_L - W_P$

$$I_P > 35\\% \\Rightarrow \\text{Argile très plastique (CH)} \\quad I_P < 7\\% \\Rightarrow \\text{Limon peu plastique (ML)}$$

### État du sol in situ
$$I_C = \\frac{W_L - W}{I_P} \\quad \\begin{cases} I_C > 1 & \\text{Sol solide/raide} \\\\ 0 < I_C < 1 & \\text{Sol plastique} \\\\ I_C < 0 & \\text{Sol liquide (instable !)} \\end{cases}$$`,
    },

    {
      id: 5,
      key: 'formulas',
      title: "Formules fondamentales de la mécanique des sols",
      icon: '🔢',
      type: 'formulas',
      diagramType: 'soil_profile',
      formulas: [
        {
          name: "Capacité portante de Terzaghi — Semelle filante",
          latex: "q_u = c \\cdot N_c + q \\cdot N_q + \\frac{1}{2} \\cdot \\gamma \\cdot B \\cdot N_\\gamma",
          description: "c = cohésion [kPa], q = contrainte effective au niveau de la fondation [kPa], γ = poids volumique du sol [kN/m³], B = largeur de la semelle [m], Nc/Nq/Nγ = facteurs de portance (fonction de φ)"
        },
        {
          name: "Facteurs de portance de Meyerhof (φ = 30°)",
          latex: "N_c = 30{,}14 \\quad N_q = 18{,}40 \\quad N_\\gamma = 22{,}40 \\quad (\\varphi = 30°)",
          description: "Valeurs pour sol frottant (sable dense). Pour argile saturée non drainée : φu=0 → Nc=5,14 ; Nq=1 ; Nγ=0"
        },
        {
          name: "Contrainte admissible nette de la fondation",
          latex: "q_{adm} = \\frac{q_u - q}{F_s} \\quad \\text{avec } F_s = 2{,}5 \\text{ à } 3{,}0",
          description: "Fs = coefficient de sécurité global (2,5 en conditions drainées, 3,0 en non drainé). q = contrainte géostatique au niveau de la fondation = γ·Df"
        },
        {
          name: "Tassement de consolidation primaire (Terzaghi)",
          latex: "s_c = \\frac{C_c}{1 + e_0} \\cdot H \\cdot \\log\\left(\\frac{\\sigma'_{v0} + \\Delta\\sigma'_v}{\\sigma'_{v0}}\\right)",
          description: "Cc = indice de compression, e0 = indice des vides initial, H = épaisseur de la couche compressible [m], σ'v0 = contrainte effective initiale, Δσ'v = surcharge appliquée"
        },
        {
          name: "Degré de consolidation — Solution de Terzaghi",
          latex: "U(t) = 1 - \\frac{8}{\\pi^2} \\sum_{m=0}^{\\infty} \\frac{1}{(2m+1)^2} \\exp\\left(-\\frac{(2m+1)^2 \\pi^2}{4} T_v\\right)",
          description: "Tv = cv·t/H²dr = facteur temps (cv = coefficient de consolidation [m²/an], Hdr = distance de drainage [m]). Approximation : U ≈ 1,128√Tv pour Tv < 0,217"
        },
        {
          name: "Pression de Rankine — Poussée des terres (état actif)",
          latex: "K_a = \\tan^2\\left(45° - \\frac{\\varphi}{2}\\right) = \\frac{1 - \\sin\\varphi}{1 + \\sin\\varphi}",
          description: "Ka = coefficient de poussée active. Force de poussée totale : Ea = ½·Ka·γ·H². Pour φ=30° : Ka = 0,333 (sable)."
        },
      ],
    },

    {
      id: 6,
      key: 'stepbystep',
      title: "Calcul complet de capacité portante — Semelle isolée 2×2 m",
      icon: '🔬',
      type: 'stepbystep',
      problem: "Dimensionner la contrainte admissible d'une semelle isolée carrée B×B = 2×2 m, à la profondeur Df = 1,5 m, dans un sable dense (c=0, φ=32°, γ=19 kN/m³). Fs = 3,0.",
      steps_demo: [
        { n: 1, text: "Données : B = 2 m, Df = 1,5 m, c = 0 kPa, φ = 32°, γ = 19 kN/m³, Fs = 3,0" },
        { n: 2, text: "Contrainte géostatique au niveau de la fondation : q = γ·Df = 19 × 1,5 = 28,5 kPa" },
        { n: 3, text: "Facteurs de portance pour φ=32° (Meyerhof) : Nc = 35,49 | Nq = 23,18 | Nγ = 30,22" },
        { n: 4, text: "Capacité portante ultime (Terzaghi, semelle carrée) : qu = 1,3·c·Nc + q·Nq + 0,4·γ·B·Nγ" },
        { n: 5, text: "qu = 1,3 × 0 × 35,49 + 28,5 × 23,18 + 0,4 × 19 × 2 × 30,22 = 0 + 660,6 + 459,4 = 1120 kPa" },
        { n: 6, text: "Contrainte admissible nette : q_adm = (qu - q) / Fs = (1120 - 28,5) / 3,0 = 363,8 kPa" },
      ],
      result_latex: "q_{adm} = \\frac{1120 - 28{,}5}{3{,}0} = 363{,}8 \\text{ kPa} \\approx 360 \\text{ kPa} \\quad \\checkmark",
    },

    {
      id: 7,
      key: 'units',
      title: "Unités en Géotechnique — Tableau de référence",
      icon: '📏',
      type: 'units',
      table: [
        { grandeur: "Contrainte / Pression sol", si: "kPa = kN/m²", imperial: "psf ou ksf", conversion: "1 kPa = 20,89 psf" },
        { grandeur: "Poids volumique γ", si: "kN/m³", imperial: "pcf (lb/ft³)", conversion: "1 kN/m³ = 6,366 pcf" },
        { grandeur: "Cohésion c", si: "kPa", imperial: "psf", conversion: "1 kPa = 20,89 psf" },
        { grandeur: "Coefficient de perméabilité k", si: "m/s", imperial: "ft/jour", conversion: "1 m/s = 2,835×10⁵ ft/jour" },
        { grandeur: "Tassement s", si: "mm ou cm", imperial: "inches", conversion: "1 cm = 0,394 in" },
        { grandeur: "Résistance de pointe qc (CPT)", si: "MPa", imperial: "tsf", conversion: "1 MPa = 10,44 tsf" },
        { grandeur: "Résistance SPT N", si: "coups/30cm", imperial: "blows/ft", conversion: "Grandeur sans dimension (nombre de coups)" },
      ],
      note: "⚠️ En géotechnique, travailler TOUJOURS en contraintes effectives σ' = σ_totale − u (pression interstitielle). Négliger la pression d'eau conduit à des fondations dangereusement sous-dimensionnées.",
    },

    {
      id: 8,
      key: 'hypotheses',
      title: "Hypothèses & conditions de validité",
      icon: '📋',
      type: 'hypotheses',
      items: [
        { type: 'info', text: "La formule de Terzaghi suppose un sol homogène, isotrope, semi-infini et une rupture par cisaillement selon des surfaces planes et circulaires." },
        { type: 'warning', text: "ATTENTION : La capacité portante calculée est une valeur théorique. En pratique, Fs ≥ 2,5 (drainé) et Fs ≥ 3,0 (non drainé) sont des minima absolus." },
        { type: 'info', text: "Pour les argiles saturées à court terme (conditions non drainées) : φu = 0, cu = Su (résistance au cisaillement non drainé). La formule de Skempton donne qu = (π+2)·Su = 5,14·Su." },
        { type: 'warning', text: "Ne jamais confondre contrainte totale et contrainte effective. La pression de l'eau (u = γw·h) doit être soustraite en permanence pour les sols saturés." },
        { type: 'tip', text: "Règle de terrain : Pour une argile molle (Su < 25 kPa), la contrainte admissible est généralement < 60 kPa. Préférer les fondations profondes (pieux)." },
        { type: 'warning', text: "Le tassement de consolidation peut prendre des années (5-30 ans pour une argile épaisse). Toujours vérifier le tassement différentiel entre fondations adjacentes (limite : 1/300 à 1/500 selon EC7)." },
      ],
    },

    {
      id: 9,
      key: 'simple_examples',
      title: "Exemples guidés — Calculs géotechniques de base",
      icon: '✏️',
      type: 'examples_simple',
      examples: [
        {
          title: "Exemple 1 : Contrainte géostatique à 5 m de profondeur",
          given: "Profil : argile γ = 18 kN/m³ de 0 à 3 m / sable γsat = 20 kN/m³ de 3 à 5 m. Nappe phréatique à 3 m.",
          find: "Contrainte verticale totale σv et effective σ'v à z = 5 m",
          solution_latex: "\\sigma_v = 18 \\times 3 + 20 \\times 2 = 54 + 40 = 94 \\text{ kPa} \\quad u = \\gamma_w \\times 2 = 10 \\times 2 = 20 \\text{ kPa}",
          result: "σ'v = σv - u = 94 - 20 = 74 kPa (contrainte effective)",
        },
        {
          title: "Exemple 2 : Coefficient de poussée active Ka",
          given: "Mur de soutènement H = 5 m, sol frottant : c = 0, φ = 30°, γ = 18 kN/m³",
          find: "Ka, pression de poussée active pa(z) et force totale Ea",
          solution_latex: "K_a = \\tan^2(45° - 15°) = \\tan^2(30°) = 0{,}333 \\quad E_a = \\frac{1}{2} \\times 0{,}333 \\times 18 \\times 5^2 = 74{,}9 \\text{ kN/m}",
          result: "Ka = 0,333 | Ea = 74,9 kN par mètre linéaire de mur",
        },
        {
          title: "Exemple 3 : Tassement d'une couche argileuse",
          given: "Argile : Cc = 0,35, e0 = 0,85, H = 4 m, σ'v0 = 60 kPa, Δσ'v = 40 kPa (surcharge de remblai)",
          find: "Tassement de consolidation primaire sc",
          solution_latex: "s_c = \\frac{0{,}35}{1 + 0{,}85} \\times 4{,}0 \\times \\log\\left(\\frac{60 + 40}{60}\\right) = 0{,}189 \\times 4{,}0 \\times 0{,}2218 = 0{,}168 \\text{ m}",
          result: "sc = 168 mm ≈ 17 cm — Tassement significatif, à surveiller sur 2-5 ans",
        },
      ],
    },

    {
      id: 10,
      key: 'real_examples',
      title: "Exemples réels — Bureau d'études géotechnique",
      icon: '🏢',
      type: 'examples_real',
      diagramType: 'soil_profile',
      examples: [
        {
          context: "Mission G2 AVP — Immeuble R+8, Lyon",
          scenario: "Chargement total du bâtiment : 25 000 kN. Reconnaissance : argile raide (Su=80 kPa) de 0 à 4 m / calcaire compact au-delà. Nappe à 3 m. Choix fondations.",
          decomposition_latex: "q_{u,argile} = 5{,}14 \\times S_u \\times s_c = 5{,}14 \\times 80 \\times 1{,}20 = 493 \\text{ kPa} \\quad q_{adm} = 493/3 = 164 \\text{ kPa}",
          lesson: "Surface de fondation nécessaire : A = N/q_adm = 25000/164 = 152 m². Radier 13×12 m envisagé. Vérification tassement sur argile sous charge du radier → sc = 35 mm acceptable.",
        },
      ],
    },

    {
      id: 11,
      key: 'diagrams',
      title: "Schéma du profil géotechnique — Stratigraphie & fondations",
      icon: '📊',
      type: 'interactive_diagram',
      diagramType: 'soil_profile',
      description: "Visualisez le profil stratigraphique type avec les différentes couches de sol (remblai, argile, sable, roche), la nappe phréatique et la localisation des fondations superficielles et profondes.",
      diagram_description: [
        "Profil stratigraphique avec couches géologiques cotées",
        "Nappe phréatique avec indication de la pression hydrostatique u",
        "Diagramme de contraintes verticales totales et effectives en profondeur",
      ],
    },

    {
      id: 12,
      key: 'mistakes',
      title: "Erreurs graves en Géotechnique — Ne jamais commettre",
      icon: '⛔',
      type: 'mistakes',
      items: [
        {
          mistake: "Dimensionner sans reconnaissance de sol",
          trap: "Utiliser des valeurs de sol 'standard' (qu = 200 kPa pour 'terrain ordinaire') sans sondages",
          fix: "Toujours exiger une mission géotechnique G1 minimum. En France, obligation légale en zone argileuse (loi ELAN 2018). Coût d'une G2 : 3 000–15 000 € vs. sinistre : 50 000–500 000 €.",
        },
        {
          mistake: "Oublier la pression interstitielle u dans les calculs",
          trap: "Utiliser la contrainte totale σv au lieu de la contrainte effective σ'v = σv - u pour les sols saturés sous nappe",
          fix: "Systématiquement distinguer calculs à court terme (non drainé, φu=0, cu=Su) et à long terme (drainé, c', φ'). En présence de nappe : u = γw × hw.",
        },
        {
          mistake: "Confondre tassement immédiat et tassement de consolidation",
          trap: "Mesurer le tassement après quelques semaines et conclure que c'est stable, alors que la consolidation primaire d'argile peut durer 5-30 ans",
          fix: "Distinguer : si (immédiat) + sc (consolidation primaire) + ss (consolidation secondaire/fluage). Pour les argiles, sc domine et s'étale sur des années.",
        },
        {
          mistake: "Appliquer Terzaghi sur un sol hétérogène ou stratifié sans adaptation",
          trap: "La couche de sol sous la fondation n'est pas homogène (argile molle sous sable dense), mais on applique quand même la formule globale",
          fix: "Pour les sols stratifiés, utiliser la méthode des couches équivalentes ou l'approche par éléments finis. Vérifier la couche la plus faible qui peut créer une rupture locale.",
        },
      ],
    },

    {
      id: 13,
      key: 'tips',
      title: "Astuces du géotechnicien — Secrets de terrain",
      icon: '💡',
      type: 'tips',
      tips: [
        "Corrélation SPT → résistance sol : N60 < 10 = sable lâche (qu ≈ 100 kPa), N60 = 10-30 = sable moyen (qu ≈ 200-300 kPa), N60 > 50 = sable très dense (qu > 500 kPa).",
        "Règle empirique argile : Su ≈ qc(CPT) / 15 à 20, et Su ≈ (N·100)/15 kPa (avec N = nombre de coups SPT). Toujours valider avec essais triaxiaux en laboratoire.",
        "En présence de remblais anciens ou de terres végétales : TOUJOURS vérifier la profondeur minimale d'ancrage Df ≥ 0,5 m sous la base des couches non compactées.",
        "Pour les pieux, la capacité portante se décompose en : résistance de pointe Qp + frottement latéral Qs. En argile molle : Qs domine (70-90% de la capacité). En sable dense : Qp peut représenter 50%.",
        "Tassement différentiel admissible selon EC7 : δs/L ≤ 1/500 pour charpentes acier, 1/300 pour béton, 1/1000 pour maçonnerie non armée. Le tassement différentiel est plus dangereux que le tassement absolu !",
        "Avant tout calcul, toujours vérifier le niveau de la nappe phréatique saison haute (piézomètres) — une nappe à 1 m de la surface peut réduire la capacité portante de 30 à 50%.",
      ],
    },

    {
      id: 14,
      key: 'norms',
      title: "Normes & Références — Géotechnique",
      icon: '📜',
      type: 'norms',
      norms: [
        { code: "Eurocode 7 (EN 1997-1)", description: "Calcul géotechnique — Règles générales. Référence européenne principale pour le dimensionnement des fondations et ouvrages de soutènement." },
        { code: "EN 1997-2", description: "Reconnaissance et essais géotechniques (SPT, CPT, pressiomètre, scissomètre, essais labo)." },
        { code: "NF P 94-261", description: "Justification des fondations superficielles — Version française de l'EC7 avec Annexes Nationales." },
        { code: "NF P 94-262", description: "Justification des fondations profondes (pieux, micro-pieux). Règles de dimensionnement françaises." },
        { code: "ASTM D1586", description: "Standard Penetration Test (SPT) — Protocole d'essai de pénétration standard en forage." },
        { code: "ISO 22476-1", description: "Essai de pénétration au cône (CPT/CPTU) — Essai in situ de référence pour la caractérisation continue des sols." },
        { code: "NF P 94-051/052", description: "Détermination des limites de liquidité (Casagrande) et de plasticité (rouleau) des sols fins." },
      ],
    },

    {
      id: 15,
      key: 'exercises',
      title: "Exercices Géotechnique — Du fondamental au complexe",
      icon: '✍️',
      type: 'exercises',
      exercises: [
        {
          id: 'ex_geo_1',
          number: 1,
          difficulty: 'Facile',
          text: "Calculez la contrainte verticale effective σ'v à z = 4 m dans un profil : sable sec γ = 17 kN/m³ de 0 à 2 m, puis sable saturé γsat = 20 kN/m³ de 2 à 4 m. Nappe phréatique à z = 2 m.",
          hint: "σv = Σ(γi × hi). Pression interstitielle u = γw × (z - znappe) = 10 × 2 = 20 kPa. σ'v = σv - u.",
          answer_latex: "\\sigma_v = 17 \\times 2 + 20 \\times 2 = 34 + 40 = 74 \\text{ kPa} \\quad u = 10 \\times 2 = 20 \\text{ kPa} \\quad \\sigma'_v = 74 - 20 = 54 \\text{ kPa}",
          answer_text: "σ'v = 54 kPa à z = 4 m",
        },
        {
          id: 'ex_geo_2',
          number: 2,
          difficulty: 'Moyen',
          text: "Calculez la capacité portante ultime qu d'une semelle filante (fondation superficielle) dans une argile saturée non drainée Su = 60 kPa. Profondeur Df = 1,2 m, γ = 18 kN/m³. Utilisez la formule de Skempton.",
          hint: "Pour argile saturée non drainée : φu = 0, donc Nq = 1, Nγ = 0, Nc = 5,14 (Skempton). qu = 5,14 × Su × sc (sc = facteur de forme = 1 pour filante) + γ × Df.",
          answer_latex: "q_u = 5{,}14 \\times 60 \\times 1{,}0 + 18 \\times 1{,}2 = 308{,}4 + 21{,}6 = 330 \\text{ kPa}",
          answer_text: "qu = 330 kPa → q_adm = (330 - 21,6)/3,0 = 102,8 kPa",
        },
        {
          id: 'ex_geo_3',
          number: 3,
          difficulty: 'Difficile',
          text: "Une couche d'argile normalement consolidée : Cc = 0,28, e0 = 0,72, H = 6 m, σ'v0 = 80 kPa. Un remblai de 3 m (γ = 20 kN/m³) est mis en place. Calculez le tassement de consolidation primaire et le temps pour atteindre U = 90% si cv = 2 m²/an et drainage double face.",
          hint: "sc = (Cc/(1+e0)) × H × log((σ'v0 + Δσ)/ σ'v0). Pour U=90% : Tv ≈ 0,848. Tv = cv·t/Hdr² avec Hdr = H/2 (drainage double face).",
          answer_latex: "s_c = \\frac{0{,}28}{1{,}72} \\times 6 \\times \\log\\left(\\frac{80+60}{80}\\right) = 0{,}976 \\times \\log(1{,}75) = 0{,}976 \\times 0{,}243 = 0{,}237 \\text{ m}",
          answer_text: "sc = 23,7 cm. Temps pour U=90% : t = Tv × Hdr² / cv = 0,848 × 3² / 2 = 3,82 ans ≈ 4 ans",
        },
      ],
    },

    {
      id: 16,
      key: 'corrections',
      title: "Corrections détaillées",
      icon: '✅',
      type: 'corrections',
      note: "Les solutions complètes avec toutes les étapes de calcul sont disponibles en cliquant sur 'Voir la correction' sous chaque exercice. Vérifiez vos résultats et vos unités (kPa, kN/m³, m).",
    },

    {
      id: 17,
      key: 'quiz',
      title: "Quiz Géotechnique — Vérification des acquis",
      icon: '🎯',
      type: 'quiz',
      questions: [
        {
          id: 'q_geo_1',
          question: "Selon Terzaghi, quelle formule donne la capacité portante ultime d'une semelle filante en sable (c=0) ?",
          options: [
            { id: 'a', text: "qu = c·Nc + q·Nq + ½·γ·B·Nγ" },
            { id: 'b', text: "qu = q·Nq + ½·γ·B·Nγ (car c = 0)" },
            { id: 'c', text: "qu = 5,14·Su" },
            { id: 'd', text: "qu = N/A (charge / surface)" },
          ],
          correct: 'b',
          explanation: "Pour un sable (c = 0), le terme c·Nc disparaît. La formule de Terzaghi se réduit à qu = q·Nq + ½·γ·B·Nγ. Le terme Nq correspond à l'ancrage de la fondation, Nγ à la résistance du sol sous la semelle.",
        },
        {
          id: 'q_geo_2',
          question: "Qu'est-ce que la contrainte effective σ' et pourquoi est-elle fondamentale en mécanique des sols ?",
          options: [
            { id: 'a', text: "σ' = σ totale / coefficient de sécurité" },
            { id: 'b', text: "σ' = σ totale − u (pression interstitielle) — contrôle la résistance et la déformation" },
            { id: 'c', text: "σ' = γ × z, toujours égale à la contrainte géostatique" },
            { id: 'd', text: "σ' ne s'applique qu'aux roches, pas aux sols" },
          ],
          correct: 'b',
          explanation: "Le Principe des Contraintes Effectives de Terzaghi (1925) : σ' = σ − u. C'est la contrainte transmise entre les grains du sol qui contrôle toute la résistance et les déformations. Sous nappe, la pression d'eau u soulage partiellement le sol et réduit la capacité portante.",
        },
        {
          id: 'q_geo_3',
          question: "Un sondage SPT donne N60 = 5 coups/30cm dans une couche de sable à 4 m. Quel est l'état de densité du sable ?",
          options: [
            { id: 'a', text: "Sable très dense (N > 50)" },
            { id: 'b', text: "Sable moyennement dense (N = 10-30)" },
            { id: 'c', text: "Sable lâche (N < 10) — risque de liquéfaction en zone sismique !" },
            { id: 'd', text: "Sable compact — pas de problème" },
          ],
          correct: 'c',
          explanation: "Classification Terzaghi-Peck du SPT : N < 4 = très lâche / N = 4-10 = lâche / N = 10-30 = moyennement dense / N = 30-50 = dense / N > 50 = très dense. N60 = 5 → Sable LÂCHE. Risque de liquéfaction en zone sismique (Vs < 180 m/s) → investigation complémentaire obligatoire.",
        },
      ],
    },

    {
      id: 18,
      key: 'exam_questions',
      title: "Questions d'examen — Niveau Master Géotechnique",
      icon: '🎓',
      type: 'exam',
      questions: [
        "Démontrez le Principe des Contraintes Effectives de Terzaghi à partir de l'équilibre d'une tranche de sol saturé. Expliquez pourquoi ce principe est fondateur de toute la mécanique des sols moderne.",
        "Comparez les méthodes de calcul de la capacité portante de Terzaghi, Meyerhof et Vesic. Quelles corrections apportent Meyerhof pour les fondations non filantes (facteurs de forme, d'inclinaison) ?",
        "Pour une argile normalement consolidée, expliquez le phénomène de consolidation de Terzaghi. Tracez qualitativement les courbes U(t) et le cheminement des contraintes effectives dans le diagramme e-log σ'v.",
        "Une pente argileuse de 8 m de hauteur (pente 1V:2H) est instable. Utilisez la méthode des tranches de Fellenius pour déterminer le facteur de sécurité au glissement circulaire.",
      ],
    },

    {
      id: 19,
      key: 'interview_questions',
      title: "Questions d'entretien — Géotechnicien junior",
      icon: '💼',
      type: 'interview',
      questions: [
        {
          question: "Lors d'une visite de chantier, vous constatez que la fouille pour les fondations a atteint une argile molle grisâtre à odeur de vase. Que faites-vous ?",
          answer_hint: "Arrêt immédiat des terrassements. Prélèvement d'échantillon intacts pour essais triaxiaux UU en urgence. Contacter le géotechnicien de mission. Envisager approfondissement de la fondation ou remplacement par pieux si Su < 25-30 kPa.",
        },
        {
          question: "Quelle est la différence entre une mission géotechnique G1, G2 AVP, G2 PRO et G4 selon la norme NF P 94-500 ?",
          answer_hint: "G1 : Étude de site préliminaire (risques généraux). G2 AVP : Principes de fondations en avant-projet. G2 PRO : Dimensionnement définitif des fondations. G3 : Suivi géotechnique d'exécution. G4 : Supervision géotechnique d'exécution.",
        },
        {
          question: "Comment estimez-vous rapidement la profondeur minimale d'ancrage d'une fondation superficielle sur le terrain ?",
          answer_hint: "Df ≥ 0,50 m sous la couche de gel (hors-gel climatique : 60-100 cm en France), ≥ 0,50 m sous les terres végétales ou remblais, ≥ couche active (gonflement des argiles : profondeur végétation). Vérifier aussi que Df > 1,5B si risque de poinçonnement sous charges inclinées.",
        },
      ],
    },

    {
      id: 20,
      key: 'practical_case',
      title: "Cas pratique — Fondations d'un pont à 3 travées",
      icon: '🔧',
      type: 'practical',
      scenario: "Étude géotechnique G2 PRO — Pont routier à 3 travées, Seine-et-Marne",
      description: `**Mise en situation** : Bureau d'études géotechnique, mission G2 PRO. Un pont routier à 3 travées (L = 3 × 25 m) doit être fondé sur des piles intermédiaires. La reconnaissance révèle : 0-5 m limon mou (Su = 20 kPa), 5-12 m argile raide (Su = 80 kPa), 12-∞ m craie altérée (qu = 8 MPa). Charge verticale par pile : N = 8 500 kN. Nappe à z = 1 m.`,
      resolution_latex_1: "q_{u,argile} = 5{,}14 \\times 80 \\times 1{,}2 = 493 \\text{ kPa} \\quad A_{requise} = \\frac{8500}{493/3} = 51{,}7 \\text{ m}^2 \\Rightarrow \\text{Semelle impossible (too large)}",
      resolution_latex_2: "\\text{Solution : Pieux forés Ø 80 cm, L=14 m ancrés dans craie} \\quad Q_{p} = q_c \\times A_p = 1000 \\times 0{,}503 = 503 \\text{ kN/pieu}",
      resolution_latex_3: "Q_s = \\sum \\alpha_i \\times c_{ui} \\times \\pi D \\times l_i = 0{,}5 \\times 80 \\times \\pi \\times 0{,}8 \\times 7 = 703 \\text{ kN} \\quad Q_{total} = (503 + 703)/1{,}4 = 861 \\text{ kN/pieu}",
      conclusion: "10 pieux Ø 80 cm L=14 m retenus par pile (10 × 861 = 8 610 kN > 8 500 kN). Tête de pieu à -3 m (hors limon mou). Semelle de liaison en béton armé C30/37.",
    },

    {
      id: 21,
      key: 'summary',
      title: "Résumé exécutif — Géotechnique en 6 points",
      icon: '📋',
      type: 'summary',
      content: `### La Géotechnique en 6 fondamentaux

1. **Reconnaître le sol** : SPT (N coups), CPT (qc [MPa]), essais labo (Cc, e0, Su, φ, c)
2. **Contrainte effective** : $\\sigma'_v = \\sigma_v - u$ — TOUJOURS distinguer drainé / non drainé
3. **Capacité portante** : $q_u = c \\cdot N_c + q \\cdot N_q + \\frac{1}{2} \\gamma B N_\\gamma$ → $q_{adm} = (q_u - q)/F_s$
4. **Tassement** : $s_c = \\frac{C_c}{1+e_0} \\cdot H \\cdot \\log\\frac{\\sigma'_0 + \\Delta\\sigma'}{\\sigma'_0}$ — vérifier tassement différentiel
5. **Pression des terres** : $K_a = \\tan^2(45° - \\varphi/2)$ — soutènements, radiers, murs
6. **Normes** : EC7 (EN 1997-1) + NF P 94-261/262 + mission géotechnique obligatoire`,
    },

    {
      id: 22,
      key: 'key_points',
      title: "Points clés à mémoriser — Géotechnique",
      icon: '⭐',
      type: 'keypoints',
      points: [
        "Principe des contraintes effectives : σ' = σ - u (Terzaghi, 1925) — fondement de toute la mécanique des sols",
        "Terzaghi : qu = c·Nc + q·Nq + ½·γ·B·Nγ. Pour argile non drainée : qu = 5,14·Su (Skempton)",
        "Contrainte admissible : q_adm = (qu - q) / Fs avec Fs = 2,5 (drainé) à 3,0 (non drainé)",
        "Tassement consolidation : sc = (Cc/(1+e0)) × H × log(σ'f/σ'0) — prend des années dans les argiles",
        "SPT : N < 10 = lâche (risque liquidation), N = 10-30 = moyen, N > 50 = très dense",
        "Toujours exiger une mission géotechnique avant construction (obligation légale zones argileuses en France)",
        "Tassement différentiel maximum admissible : δ/L ≤ 1/500 (charpente acier) à 1/300 (béton armé)",
      ],
    },

    {
      id: 23,
      key: 'self_assessment',
      title: "Auto-évaluation — Maîtrise de la Géotechnique",
      icon: '🏆',
      type: 'self_assessment',
      description: "Validez vos compétences géotechniques :",
      objectives: [
        "Je comprends le Principe des Contraintes Effectives et sais calculer σ'v en présence de nappe phréatique",
        "Je sais appliquer la formule de Terzaghi pour calculer la capacité portante d'une semelle superficielle",
        "Je distingue les conditions drainées (c', φ') et non drainées (cu = Su, φu = 0)",
        "Je sais calculer le coefficient Ka et la poussée des terres sur un soutènement",
        "Je sais estimer le tassement de consolidation primaire sc d'une couche d'argile",
        "J'ai résolu les 3 exercices avec les bonnes unités (kPa, kN/m³, m, mm)",
        "J'ai obtenu 3/3 au quiz géotechnique",
        "Je connais les missions géotechniques G1 à G4 et les normes EC7 / NF P94-261",
      ],
    },
  ],

  quickQuiz: {
    question: "Pour une argile saturée non drainée Su = 50 kPa, quelle est la capacité portante ultime qu d'une semelle filante (formule Skempton) ?",
    options: [
      { id: 'a', label: "A) qu = 50 kPa" },
      { id: 'b', label: "B) qu = 5,14 × 50 = 257 kPa" },
      { id: 'c', label: "C) qu = 50 × 30 = 1500 kPa" },
    ],
    correct: 'b',
    explanation: "Pour argile non drainée (φu = 0) : qu = Nc × Su = 5,14 × 50 = 257 kPa. Le facteur Nc = 5,14 est la valeur de Skempton pour une semelle filante. À cette valeur, on ajoute la surcharge géostatique q = γ × Df.",
  },
};
