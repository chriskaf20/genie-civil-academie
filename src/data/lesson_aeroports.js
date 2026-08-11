// ── Lesson: Infrastructures Aéroportuaires — Module 19 ───────────────────────
export const lesson_aeroports = {
  moduleId: 19,
  slug: 'aeroports',
  lessonIndex: 1,
  title: "Conception, Orientation & Dimensionnement des Chaussées Aéroportuaires",
  subtitle: "Module 19 — Infrastructures Aéroportuaires",
  level: 'Avancé',
  duration: '35h',
  diagramType: 'road_profile',
  tags: ['Aéroports', 'OACI', 'Pistes', 'ACN-PCN', 'ACR-PCR', 'Balisage', 'Rose des vents', 'TORA'],

  steps: [
    {
      id: 1,
      key: 'definition',
      title: "Définition — L'Ingénierie Aéroportuaire",
      icon: '📖',
      type: 'definition',
      fr: 'Infrastructures Aéroportuaires & Pistes',
      en: 'Airport Infrastructure & Airfield Pavement Engineering',
      metier: "Pratiquée par les ingénieurs d'infrastructures aéroportuaires, experts de l'OACI/FAA, projeteurs VRD spécialisés et gestionnaires d'aéroports (Aéroports de Paris, VINCI Airports).",
      content: `L'**ingénierie aéroportuaire** est la branche du génie civil traitant de la **conception géométrique, de l'orientation, du dimensionnement des chaussées et de la sécurité** des aires de mouvement des aéronefs.

### Les éléments de l'aire de mouvement (Airfield Side) :
1. **La piste d'envol et d'atterrissage (Runway)** : Bande rectangulaire dégagée, orientée selon les vents prédominants, conçue pour l'atterrissage et le décollage des avions.
2. **Les voies de circulation (Taxiways)** : Voies assurant la liaison entre les pistes et les aires de stationnement (bretelles de dégagement rapide à haute vitesse $30-90\\text{ km/h}$).
3. **L'aire de trafic (Apron / Ramp)** : Aire de stationnement des aéronefs pour l'embarquement, le plein de carburant et la maintenance.
4. **Les zones de sécurité** : Bandes de piste, zones de sécurité d'extrémité de piste (RESA), prolongements d'arrêt (STOPWAY) et de dégagement (CLEARWAY).

> 💡 **Organismes de référence** : L'**OACI** (Organisation de l'Aviation Civile Internationale - Annexe 14) et la **FAA** (Federal Aviation Administration) édictent les normes mondiales obligatoires.`,
    },

    {
      id: 2,
      key: 'importance',
      title: "Pourquoi l'ingénierie aéroportuaire est ultra-exigeante",
      icon: '⚠️',
      type: 'importance',
      content: `Les chaussées aéroportuaires subissent des sollicitations **incomparablement supérieures à celles des routes**.

- **Charges colossales par atterrisseur** : Un Airbus A380 pèse jusqu'à $575\\text{ tonnes}$ au décollage (charge par bogue à 6 roues $> 120\\text{ tonnes}$, pression de gonflage des pneus $> 15\\text{ bars}$).
- **Sécurité aéronautique absolue** : Présence bannie de tout éclat de roche ou morceau de béton détaché (**FOD - Foreign Object Debris**) susceptible d'être aspiré par un réacteur.
- **Résistance chimique** : Résistance aux attaques du kérosène (JET-A1), des fluides de dégivrage (glycol) et des huiles hydrauliques.
- **Balisage & Guidage** : Exploitation par tous temps (brouillard, nuit) sous procédures d'atterrissage aux instruments **ILS Catégorie III**.

> ⚠️ **Règle d'or** : La chaussée doit être dimensionnée selon le système international **ACR-PCR** (ou ACN-PCN) pour garantir qu'aucun avion autorisé ne puisse endommager la structure.`,
    },

    {
      id: 3,
      key: 'applications',
      title: "Applications terrain — Projets aéroportuaires",
      icon: '🏗️',
      type: 'applications',
      examples: [
        {
          context: "Conception de pistes pour long-courriers (Code OACI 4E / 4F)",
          text: "Dimensionnement de pistes de $3000\\text{ à } 4000\\text{ m}$ de longueur et $45\\text{ à } 60\\text{ m}$ de largeur pour gros porteurs (A350, B777, B747-8, A380).",
        },
        {
          context: "Étude d'orientation par la Rose des Vents",
          text: "Analyse statistique quinquennale ou décennale des vents pour garantir un facteur d'utilisabilité de l'aéroport $\\ge 95\\%$ (vent traversier admissible $V_t \\le 20\\text{ noeuds}$).",
        },
        {
          context: "Chaussées rigides d'aires de stationnement (Postes de stationnement)",
          text: "Dalles en béton de ciment armé/goujonné ($e = 35-50\\text{ cm}$) résistantes au poinçonnement statique sous les béquilles du train d'atterrissage et au déversement de kérosène.",
        },
        {
          context: "Bretelles de dégagement rapide (Rapid Exit Taxiways - RET)",
          text: "Voies de sortie de piste inclinées à 30° permettant aux avions d'évacuer la piste à $60-90\\text{ km/h}$ et de maximiser la capacité de la piste (mouvements/heure).",
        },
        {
          context: "Balisage lumineux et aides visuelles (PAPI / ILS)",
          text: "Implantation des feux encastrés d'axe de piste, feux de bord de piste, feux de seuil verts, feux de fin de piste rouges et indicateur d'angle d'approche PAPI (3°).",
        },
        {
          context: "Renforcement et rabotage nocturne de piste",
          text: "Travaux de réhabilitation de piste en milieu occupé (créneau nocturne 23h-05h) avec remise en service impérative chaque matin pour le premier vol commercial.",
        },
      ],
    },

    {
      id: 4,
      key: 'theory',
      title: "Théorie — Rose des Vents & Longueurs Déclarées (OACI)",
      icon: '📐',
      type: 'theory',
      diagramType: 'road_profile',
      content: `### 1. Orientation de la piste (Rose des vents & Vent traversier)

Les avions décollent et atterrissent face au vent. La composante de vent traversier $V_t$ ne doit pas dépasser la limite de stabilité de l'aéronef :

$$V_t = V_{vent} \\cdot \\sin(\\theta) \\le V_{t,lim}$$

- $V_{t,lim} = 20\\text{ kts}$ ($37\\text{ km/h}$) pour avions de Code 3 et 4 (gros porteurs)
- $V_{t,lim} = 13\\text{ kts}$ ($24\\text{ km/h}$) pour avions de Code 2
- $V_{t,lim} = 10\\text{ kts}$ ($19\\text{ km/h}$) pour avions de Code 1

> **Facteur d'utilisabilité** : La ou les pistes doivent être orientées de sorte que la vitesse du vent traversier ne soit pas dépassée pendant au moins **95%** du temps de l'année.

### 2. Les 4 longueurs déclarées d'une piste (OACI)

| Sigle | Nom complet | Description |
|-------|-------------|-------------|
| **TORA** | Take-Off Run Available | Longueur de piste disponible pour le roulement au décollage. |
| **TODA** | Take-Off Distance Available | TORA + Prolongement de dégagement (Clearway). |
| **ASDA** | Accelerate-Stop Distance Available | TORA + Prolongement d'arrêt (Stopway) en cas de décollage interrompu. |
| **LDA** | Landing Distance Available | Longueur de piste disponible pour le roulement à l'atterrissage. |

### 3. Numérotation des pistes
Numérotées selon l'orientation magnétique au dixième de degré près (ex: Piste 09/27 orientée à 90° Est / 270° Ouest).`,
    },

    {
      id: 5,
      key: 'formulas',
      title: "Formules essentielles — Dimensionnement & Correction de longueur",
      icon: '🔢',
      type: 'formulas',
      diagramType: 'road_profile',
      formulas: [
        {
          name: "Correction de longueur de piste de référence (OACI)",
          latex: "L = L_0 \\cdot (1 + 0{,}07 \\cdot \\frac{H}{300}) \\cdot (1 + 0{,}01 \\cdot (T - T_0)) \\cdot (1 + 0{,}10 \\cdot i_{max})",
          description: "L0 = longueur de référence au niveau de la mer (15°C, slope 0%), H = altitude de l'aéroport [m], T = température moyenne du mois le plus chaud [°C], imax = pente moyenne de la piste [%].",
        },
        {
          name: "Système de résistance des chaussées OACI (ACR-PCR)",
          latex: "PCR = \\text{Nombre représentant la capacité portante de la chaussée} \\quad \\Rightarrow \\quad ACR \\le PCR",
          description: "ACR = Aircraft Classification Rating (sévérité de l'avion), PCR = Pavement Classification Rating (résistance de la piste). Si ACR ≤ PCR, l'avion peut opérer sans restriction.",
        },
        {
          name: "Format de publication PCR (OACI)",
          latex: "\\text{PCR } 700 / F / B / W / T",
          description: "700 = valeur PCR, F = Chaussée souple (Rigide = R), B = Résistance du sol support (A:très forte à D:très faible), W = Pression de pneu max admissible (W:illimitée), T = Méthode d'évaluation (Technical / Experience).",
        },
        {
          name: "Moment de flexion dans une dalle en béton sous atterrisseur (Westergaard)",
          latex: "\\sigma_b = 0{,}275 \\cdot (1 + \\nu) \\cdot \\frac{P}{h^2} \\cdot \\log\\left( \\frac{E \\cdot h^3}{k \\cdot b^4} \\right)",
          description: "P = charge sur roue [N], h = épaisseur de la dalle [m], E = module du béton, k = module de réaction de la fondation (Westergaard [MN/m³]), b = rayon équivalent de l'empreinte du pneu.",
        },
        {
          name: "Épaisseur équivalente de chaussée souple (Méthode CBR / FAA)",
          latex: "t = C \\cdot \\sqrt{ \\frac{P}{CBR} - \\frac{A}{\\pi} }",
          description: "P = charge par roue, CBR = indice CBR du sol support, A = surface d'empreinte du pneumatique, C = coefficient de charge répétée/trafic.",
        },
        {
          name: "Indicateur visuel d'angle d'approche PAPI (Plan d'approche)",
          latex: "\\gamma = 3{,}0° \\quad (2 \\text{ feux blancs } + 2 \\text{ feux rouges = Sur le plan de descente})",
          description: "4 feux blancs = Trop haut (High), 4 feux rouges = Trop bas (Low - Danger !). Angle standard = 3,0° (5,2%).",
        },
      ],
    },

    {
      id: 6,
      key: 'stepbystep',
      title: "Calcul complet — Correction de longueur de piste OACI",
      icon: '🔬',
      type: 'stepbystep',
      problem: "Un avion de référence exige une longueur de piste de base L0 = 2 400 m au niveau de la mer en atmosphère type (15°C) sur terrain plat. Calculer la longueur de piste corrigée requise pour un aéroport situé à l'altitude H = 600 m, avec une température moyenne du mois le plus chaud T = 27°C et une pente moyenne de piste i = 0,8%.",
      steps_demo: [
        { n: 1, text: "Correction d'altitude : +7% par tranche de 300 m d'altitude → C_alt = 1 + 0,07 × (600 / 300) = 1 + 0,14 = 1,14" },
        { n: 2, text: "Longueur corrigée d'altitude : L1 = L0 × C_alt = 2 400 × 1,14 = 2 736 m" },
        { n: 3, text: "Température standard de référence à H = 600 m : T0 = 15°C - (600 / 1000) × 6,5°C = 15 - 3,9 = 11,1°C" },
        { n: 4, text: "Correction de température : +1% par °C d'écart au-dessus de T0 → C_temp = 1 + 0,01 × (27 - 11,1) = 1 + 0,159 = 1,159" },
        { n: 5, text: "Longueur corrigée altitude + température : L2 = L1 × C_temp = 2 736 × 1,159 = 3 171 m" },
        { n: 6, text: "Correction de pente : +10% par 1% de pente moyenne → C_pente = 1 + 0,10 × 0,8 = 1 + 0,08 = 1,08" },
        { n: 7, text: "Longueur de piste minimale finale requise : L_final = L2 × C_pente = 3 171 × 1,08 = 3 424,7 m → 3 425 m" },
      ],
      result_latex: "L_0 = 2\\,400 \\text{ m} \\quad \\Rightarrow \\quad L_{corrig\\acute{e}e} = \\textbf{3 425 m} \\quad (+42{,}7\\% \\text{ d'allongement}) \\quad \\checkmark",
    },

    {
      id: 7,
      key: 'units',
      title: "Unités en Ingénierie Aéroportuaire — Tableau de référence",
      icon: '📏',
      type: 'units',
      table: [
        { grandeur: "Vitesse air / vent", si: "km/h ou m/s", imperial: "noeuds (kts - knots)", conversion: "1 knot = 1,852 km/h = 0,514 m/s" },
        { grandeur: "Longueur de piste / Voie", si: "mètres [m]", imperial: "feet [ft]", conversion: "1 m = 3,281 ft (piste 3000 m ≈ 10 000 ft)" },
        { grandeur: "Masse maximale au décollage (MTOW)", si: "tonnes [t] ou kg", imperial: "lbs (pounds)", conversion: "1 tonne = 2 204,6 lbs" },
        { grandeur: "Pression de gonflage des pneus", si: "MPa ou bar", imperial: "psi", conversion: "1,5 MPa = 15 bars = 217,5 psi" },
        { grandeur: "Indice de résistance chaussée", si: "ACR / PCR (sans dim.)", imperial: "ACN / PCN", conversion: "Système ACR-PCR officiel OACI depuis 2024" },
        { grandeur: "Module de réaction sol k", si: "MN/m³", imperial: "pci (lbs/in³)", conversion: "1 MN/m³ = 3,684 pci" },
        { grandeur: "Pente d'approche visuelle PAPI", si: "degrés [°] ou %", imperial: "% / °", conversion: "3,0° = 5,24%" },
      ],
      note: "⚠️ ATTENTION : L'aéronautique est un domaine bilingue où les hauteurs s'expriment en pieds (feet), les vitesses en nœuds (knots), les masses en tonnes ou livres (lbs) et les longueurs géométriques en mètres.",
    },

    {
      id: 8,
      key: 'hypotheses',
      title: "Hypothèses & conditions de validité",
      icon: '📋',
      type: 'hypotheses',
      items: [
        { type: 'info', text: "La formule de correction de longueur de piste OACI s'applique pour des ajustements globaux d'avant-projet. Les constructeurs d'avions (Airbus, Boeing) fournissent les manuel AFM (Airplane Flight Manual) définitifs." },
        { type: 'info', text: "Le système ACR-PCR évalue la sévérité relative de l'avion et de la chaussée. Si ACR > PCR, des restrictions de masse au décollage ou de fréquence de vols s'imposent." },
        { type: 'warning', text: "ATTENTION : Risque d'hydroplanage (Aquaplaning) — Si la hauteur d'eau dépasse 3 mm sur la piste, les pneus perdent le contact avec le sol dès la vitesse critique $V_p = 6{,}36 \\sqrt{P_{pneu}}$ (en km/h avec $P$ en kPa)." },
        { type: 'warning', text: "Les joints entre dalles en béton armé sur les aires de stationnement doivent être équipés de goujons en acier lisse pour assurer le transfert de charge sans bloquer la dilatation." },
        { type: 'tip', text: "Balisage lumineux d'axe de piste : Obligatoire pour les pistes utilisées en Catégorie II et III (espacement des feux encastrés blanc/rouge de 15 m ou 30 m)." },
        { type: 'warning', text: "FOD (Foreign Object Debris) : Tout joint dégradé ou éclat de béton doit être réparé immédiatement sous peine d'aspiration par les réacteurs à double flux bas sur pattes." },
      ],
    },

    {
      id: 9,
      key: 'simple_examples',
      title: "Exemples guidés — Calculs aéroportuaires",
      icon: '✏️',
      type: 'examples_simple',
      examples: [
        {
          title: "Exemple 1 : Vitesse d'hydroplanage dynamique des pneus",
          given: "Pression de gonflage des pneumatiques d'un Boeing 737 P_pneu = 1 400 kPa (14 bars)",
          find: "Vitesse critique d'hydroplanage V_p (en km/h et en nœuds)",
          solution_latex: "V_p = 6{,}36 \\cdot \\sqrt{1400} = 6{,}36 \\times 37{,}416 = 237{,}96 \\text{ km/h} \\qquad V_p = \\frac{237{,}96}{1{,}852} = 128{,}5 \\text{ kts}",
          result: "V_p ≈ 238 km/h (128 kts) — Si la piste détrempée est abordée à v > 128 kts, l'avion part en aquaplaning total.",
        },
        {
          title: "Exemple 2 : Calcul du vent traversier lors d'un atterrissage",
          given: "Piste orientée 09/27 (90°). Vent annoncé du 130° à 25 nœuds",
          find: "Angle d'attaque θ et composante de vent traversier V_t",
          solution_latex: "\\theta = 130° - 90° = 40° \\qquad V_t = 25 \\times \\sin(40°) = 25 \\times 0{,}6428 = 16{,}07 \\text{ kts}",
          result: "V_t = 16,1 kts ≤ 20 kts → Atterrissage autorisé pour un avion de Code 4 (ex: A320 / B737).",
        },
        {
          title: "Exemple 3 : Évaluation d'exploitabilité ACR-PCR",
          given: "Piste PCR 650/F/B/W/T. Un avion A350-900 à sa masse de calcul présente un ACR de 620 sur sol de classe B.",
          find: "L'avion peut-il opérer sans restriction de masse ?",
          solution_latex: "\\text{Condition : } ACR (620) \\le PCR (650) \\quad \\Rightarrow \\quad 620 \\le 650 \\quad \\checkmark",
          result: "ACR (620) ≤ PCR (650) → Vol autorisé à 100% de la masse maximale sans endommagement de la piste.",
        },
      ],
    },

    {
      id: 10,
      key: 'real_examples',
      title: "Exemple réel — Rénovation de la Piste 3 de Paris-CDG",
      icon: '🏢',
      type: 'examples_real',
      diagramType: 'road_profile',
      examples: [
        {
          context: "Aéroport Paris-Charles de Gaulle (CDG) — Réhabilitation Piste 27L/09R (4 200 m × 60 m)",
          scenario: "Renforcement structural d'une piste soumise à 120 000 mouvements/an. Rabotage de 12 cm d'enrobé fatigué et pose d'un complexe à haut module : 6 cm BBA (Béton Bitumineux Aéronautique) + 8 cm EME2 (Enrobé à Module Élevé) avec liant modifié aux polymères.",
          decomposition_latex: "\\text{PCR porté de } 580 \\text{ à } 780/F/A/W/T \\quad \\Rightarrow \\quad \\text{Durée de service visée : 20 ans}",
          lesson: "Travaux réalisés en 6 semaines H24 avec fermeture temporaire de piste. Utilisation de feux encastrés LED à basse consommation et résistance mécanique aux charges de 30 tonnes par roue.",
        },
      ],
    },

    {
      id: 11,
      key: 'diagrams',
      title: "Schéma d'une infrastructure aéroportuaire — Piste & Zones",
      icon: '📊',
      type: 'interactive_diagram',
      diagramType: 'road_profile',
      description: "Visualisez le plan masse d'une piste aéroportuaire avec ses longueurs déclarées (TORA, TODA, ASDA, LDA), le seuil décalé, les raquettes de retournement, les voies de circulation (taxiways) et le balisage lumineux.",
      diagram_description: [
        "Plan géométrique de la piste : Seuil, zone de touché des roues (Touchdown Zone), raquette",
        "Distances déclarées OACI : TORA, TODA, ASDA, LDA et zones Clearway/Stopway/RESA",
        "Coupe transversale de la chaussée aéroportuaire rigide en dalles béton goujonnées",
      ],
    },

    {
      id: 12,
      key: 'mistakes',
      title: "Erreurs graves en Ingénierie Aéroportuaire",
      icon: '⛔',
      type: 'mistakes',
      items: [
        {
          mistake: "Négliger les risques de FOD (Foreign Object Debris) au niveau des joints",
          trap: "Utiliser un produit de scellement de joint de dalles de mauvaise qualité qui se décolle sous les souffles de réacteurs",
          fix: "Utiliser exclusivement des mastic résistant au kérosène et aux jet-blasts (norme ASTM D6690 Type IV). Inspection FOD quotidienne par véhicule balayeur vidéo.",
        },
        {
          mistake: "Sous-estimer l'effet de la température sur la longueur de piste",
          trap: "Calculer la longueur de piste sur la température moyenne annuelle au lieu de la température du mois le plus chaud",
          fix: "L'air chaud est moins dense → perte de portance des ailes et perte de poussée des réacteurs. La correction OACI impose +1% par °C d'écart à la température ISA.",
        },
        {
          mistake: "Ne pas réaliser de rainurage (Grooving) sur les pistes en enrobé",
          trap: "Laisser une surface d'enrobé lisse en zone à forte pluviométrie",
          fix: "Réaliser un rainurage transversal systématique (rainures de 6×6 mm espacées de 38 mm) pour évacuer l'eau sous les pneus et repousser la vitesse d'hydroplanage.",
        },
        {
          mistake: "Dimensionner une aire de stationnement comme une piste roulante",
          trap: "Appliquer les modèles dynamiques de piste sur les postes de stationnement (Apron)",
          fix: "Sur l'apron, l'avion est statique à sa masse maximale au décollage (MTOW). Les charges sont concentrées et immobiles pendant des heures → fort risque de poinçonnement. Chaussée rigide béton obligatoire.",
        },
      ],
    },

    {
      id: 13,
      key: 'tips',
      title: "Astuces de l'expert aéroportuaire — OACI & Terrain",
      icon: '💡',
      type: 'tips',
      tips: [
        "Code de référence d'aéronef OACI (Chiffre + Lettre) : Ex: 4E (4 = longueur de piste de base > 1800 m ; E = envergure entre 52 et 65 m comme le B777 ou A350). A380 = Code 4F (envergure 65-80 m).",
        "Couleur des marquages au sol : Blanc pour la piste d'atterrissage/décollage ; Jaune pour les voies de circulation (taxiways) et aires de stationnement.",
        "Rainurage des pistes (Grooving) : Augmente le coefficient de frottement de 0,30 à 0,75 sur piste mouillée et élimine quasi-totalement l'hydroplanage dynamique.",
        "Bretelle de sortie rapide (RET) : Positionnée à environ 1 500–2 000 m du seuil d'atterrissage avec un angle de 30° par rapport à l'axe de piste.",
        "Dispositif PAPI : 4 boîtiers lumineux situés à gauche de la piste au niveau de la zone de touché des roues. Angle de descente standard = 3,0° (5,2%).",
        "Gestion du verglas : Interdiction du sel de déneigement (corrosif pour les structures d'avions en aluminium). Utiliser exclusivement du formate de potassium liquide ou de l'acétate de sodium.",
      ],
    },

    {
      id: 14,
      key: 'normes',
      title: "Normes & Références — Aéroports & OACI",
      icon: '📜',
      type: 'norms',
      norms: [
        { code: "OACI Annexe 14 (Volume I)", description: "Aerodromes — Aerodrome Design and Operations. Le texte fondateur international pour la conception des aéroports." },
        { code: "OACI Doc 9157 (Parties 1 à 6)", description: "Manuel de conception des aérodromes (Pistes, Taxiways, Chaussées, Balisage, Sécurité)." },
        { code: "OACI Doc 9981 (PANS-Aerodromes)", description: "Procédures pour les services de navigation aérienne — Gestion de la sécurité et certification des aérodromes." },
        { code: "FAA AC 150/5320-6G", description: "Airport Pavement Design and Evaluation — Méthode américaine de référence pour le dimensionnement des chaussées." },
        { code: "STAC (DGAC France)", description: "Service Technique de l'Aviation Civile — Guides techniques français pour les infrastructures aéroportuaires." },
        { code: "Système ACR-PCR (OACI 2024)", description: "Nouveau système mondial d'évaluation et de publication de la résistance des chaussées d'aérodromes." },
      ],
    },

    {
      id: 15,
      key: 'exercises',
      title: "Exercices Infrastructures Aéroportuaires — 3 niveaux",
      icon: '✍️',
      type: 'exercises',
      exercises: [
        {
          id: 'ex_aer_1',
          number: 1,
          difficulty: 'Facile',
          text: "Un avion de ligne approche d'une piste orientée à 180° (Piste 18). Le vent du tour d'envol est annoncé du 210° à 20 nœuds. Calculez la composante de vent traversier V_t et vérifiez si elle respecte la limite de 13 nœuds.",
          hint: "θ = 210° - 180° = 30°. V_t = V_vent · sin(θ).",
          answer_latex: "V_t = 20 \\times \\sin(30°) = 20 \\times 0{,}50 = 10{,}0 \\text{ kts} \\le 13{,}0 \\text{ kts} \\quad \\checkmark",
          answer_text: "V_t = 10,0 kts ≤ 13,0 kts → Atterrissage autorisé en sécurité.",
        },
        {
          id: 'ex_aer_2',
          number: 2,
          difficulty: 'Moyen',
          text: "Les pneus d'un gros porteur sont gonflés à P_pneu = 1 600 kPa (16 bars). Calculez la vitesse d'hydroplanage dynamique V_p en km/h et en nœuds.",
          hint: "V_p = 6,36 · √(P_pneu) en km/h.",
          answer_latex: "V_p = 6{,}36 \\times \\sqrt{1600} = 6{,}36 \\times 40 = 254{,}4 \\text{ km/h} \\qquad V_p = \\frac{254{,}4}{1{,}852} = 137{,}36 \\text{ kts}",
          answer_text: "V_p = 254,4 km/h = 137,4 kts (Vitesse au-dessus de laquelle l'avion glisse sans contact sol).",
        },
        {
          id: 'ex_aer_3',
          number: 3,
          difficulty: 'Difficile',
          text: "La longueur de référence d'une piste au niveau de la mer est L0 = 2 000 m. Calculer la longueur corrigée finale pour un aéroport à H = 900 m d'altitude, avec une température maximale T = 30°C (Température standard T0 = 9,15°C à cette altitude) et une pente moyenne de 0,5%.",
          hint: "1. Correction altitude (+7% par 300m). 2. Correction temp (+1% par °C au-dessus de T0). 3. Correction pente (+10% par 1%).",
          answer_latex: "L_1 = 2000 \\times (1 + 0{,}07 \\times 3) = 2420 \\text{ m} \\qquad L_2 = 2420 \\times (1 + 0{,}01 \\times (30 - 9{,}15)) = 2420 \\times 1{,}2085 = 2924{,}6 \\text{ m}",
          answer_latex: "L_{final} = 2924{,}6 \\times (1 + 0{,}10 \\times 0{,}5) = 2924{,}6 \\times 1{,}05 = \\textbf{3 071 m}",
          answer_text: "Longueur finale corrigée requise = 3 071 m (Rallongement de 53,5% par rapport au niveau de la mer).",
        },
      ],
    },

    {
      id: 16,
      key: 'corrections',
      title: "Corrections détaillées",
      icon: '✅',
      type: 'corrections',
      note: "Les détails des calculs d'orientation, d'hydroplanage et de corrections OACI sont affichés en cliquant sur 'Voir la correction'.",
    },

    {
      id: 17,
      key: 'quiz',
      title: "Quiz Infrastructures Aéroportuaires — 3 questions",
      icon: '🎯',
      type: 'quiz',
      questions: [
        {
          id: 'q_aer_1',
          question: "Quel facteur d'utilisabilité annuel minimal la rose des vents d'un aéroport doit-elle garantir selon l'OACI ?",
          options: [
            { id: 'a', text: "80%" },
            { id: 'b', text: "90%" },
            { id: 'c', text: "95%" },
            { id: 'd', text: "99%" },
          ],
          correct: 'c',
          explanation: "Selon l'OACI Annexe 14, le nombre et l'orientation des pistes d'un aérodrome doivent être tels que le facteur d'utilisabilité ne soit pas inférieur à 95% pour les avions desservant l'aéroport.",
        },
        {
          id: 'q_aer_2',
          question: "Dans le système OACI de résistance des chaussées (ACR-PCR), à quelle condition un avion peut-il opérer sans restriction de masse ?",
          options: [
            { id: 'a', text: "ACR ≥ PCR" },
            { id: 'b', text: "ACR ≤ PCR" },
            { id: 'c', text: "ACR + PCR = 100" },
            { id: 'd', text: "Uniquement si la piste est en béton" },
          ],
          correct: 'b',
          explanation: "Si l'ACR de l'avion (sévérité de la charge de l'aéronef) est inférieur ou égal au PCR de la piste (résistance admissible de la chaussée), l'avion peut opérer en toute sécurité sans endommager la structure.",
        },
        {
          id: 'q_aer_3',
          question: "Quelle est la couleur réglementaire des feux d'axe de piste d'atterrissage dans les 300 derniers mètres de la piste ?",
          options: [
            { id: 'a', text: "Blancs" },
            { id: 'b', text: "Jaunes" },
            { id: 'c', text: "Rouges" },
            { id: 'd', text: "Verts" },
          ],
          correct: 'c',
          explanation: "Sur une piste équipée d'un balisage d'axe, les feux sont blancs du début jusqu'à 900 m de la fin, puis alternés rouge/blanc de 900 m à 300 m, et entièrement ROUGES sur les 300 derniers mètres pour avertir le pilote de la fin imminente de la piste.",
        },
      ],
    },

    {
      id: 18,
      key: 'exam_questions',
      title: "Questions d'examen — Niveau Master Génie Aéroportuaire",
      icon: '🎓',
      type: 'exam',
      questions: [
        "Démontrez la méthode de correction tridirectionnelle de longueur de piste de référence OACI (altitude, température, pente). Expliquez physiquement pourquoi l'air chaud et l'altitude rallongent la course au décollage.",
        "Présentez la méthode de dimensionnement des dalles en béton de ciment aéroportuaires selon la théorie de Westergaard. Détaillez le calcul des contraintes de bord et de coin sous un atterrisseur bogue 6 roues (A380/B777).",
        "Comparez le système classique ACN-PCN et le nouveau système OACI ACR-PCR (2024). Quels sont les progrès apportés dans la modélisation de la dégradation des structures souples et rigides ?",
        "Expliquez le dimensionnement géométrique et fonctionnel d'une bretelle de dégagement rapide (RET) : rayon de courbure de raccordement, angle de sortie 30°, longueur de décélération et vitesse de conception (60 à 90 km/h).",
      ],
    },

    {
      id: 19,
      key: 'interview_questions',
      title: "Questions d'entretien — Projeteur / Ingénieur Aéroportuaire",
      icon: '💼',
      type: 'interview',
      questions: [
        {
          question: "Lors d'un audit de piste, vous observez du faïençage et des arrachements superficiels au droit de la Touchdown Zone (zone de touché des roues). Quelle est la cause et la solution ?",
          answer_hint: "Cause : Impact dynamique répété au touché des roues (charge dynamique + choc thermique par frottement des pneus à 250 km/h qui brûle le bitume). Solution : Rabotage de la couche de roulement sur 5 cm et application d’un Béton Bitumineux Aéronautique (BBA) ou d'un enrobé à liant modifié polymères hautes performances.",
        },
        {
          question: "Quelle est la différence entre la TORA et la LDA ?",
          answer_hint: "TORA (Take-Off Run Available) : Longueur de piste utilisable pour le roulement de décollage. LDA (Landing Distance Available) : Longueur de piste utilisable pour le roulement à l'atterrissage. En cas de seuil décalé (Displaced Threshold), la LDA est plus courte que la TORA.",
        },
        {
          question: "Pourquoi interdit-on le sel de déneigement (NaCl / CaCl2) sur les pistes d'aéroports ?",
          answer_hint: "Le sel ordinaire provoque la corrosion galvanique accélérée des structures en alliage d'aluminium et d'acier à haute résistance des trains d'atterrissage et des cellules d'avions. On utilise exclusivement des déverglaçants non corrosifs comme le formate de potassium ou l'acétate de sodium.",
        },
      ],
    },

    {
      id: 20,
      key: 'practical_case',
      title: "Cas pratique — Extension de la piste d'un aéroport régional",
      icon: '🔧',
      type: 'practical',
      scenario: "Étude de cas — Extension de piste de 2 200 m à 3 100 m pour accueil des B787 (Code OACI 4E)",
      description: `**Mise en situation** : Bureau d'études aéroportuaire. Allongement de piste de 900 m + renforcement de la piste existante pour supporter un avion de projet B787-9 (MTOW = 254 t, ACR = 680 sur sol de classe C). Sol support : limons plastiques (CBR = 4, E = 40 MPa).`,
      resolution_latex_1: "\\text{Sol de classe C (CBR 4) } \\Rightarrow \\text{Chaussée rigide en dalles béton goujonnées retenue}",
      resolution_latex_2: "h_{dalle} = 42 \\text{ cm de béton C40/50 sur couche de fondation en grave-ciment de } 20 \\text{ cm}",
      resolution_latex_3: "\\text{PCR calculé pour la nouvelle structure : } \\textbf{PCR 720 / R / C / W / T} \\quad (720 \\ge 680 \\Rightarrow \\text{Conforme})",
      conclusion: "Allongement de piste de 900 m validé avec raquette de retournement au seuil 27. Structure en dalles béton goujonnées de 42 cm d'épaisseur. PCR de 720 assurant une marge de sécurité de 6% par rapport à l'ACR du B787.",
    },

    {
      id: 21,
      key: 'summary',
      title: "Résumé exécutif — Ingénierie Aéroportuaire en 6 points",
      icon: '📋',
      type: 'summary',
      content: `### L'Ingénierie Aéroportuaire en 6 fondamentaux

1. **Orientation** : Rose des vents — garantir un facteur d'utilisabilité $\\ge 95\\%$ (vent traversier $V_t \\le 20\\text{ kts}$).
2. **Longueurs OACI** : TORA (roulement décollage), TODA (+Clearway), ASDA (+Stopway), LDA (atterrissage).
3. **Corrections de piste** : $+7\\%$ par $300\\text{ m}$ d'altitude, $+1\\%$ par $^\\circ\\text{C}$ au-dessus de $T_0$, $+10\\%$ par $1\\%$ de pente.
4. **Système ACR-PCR** : L'avion peut opérer sans restriction si $ACR \\le PCR$.
5. **Chaussées** : Souples (BB Aéronautique + EME) pour pistes roulantes, Rigides (dalles béton $35-50\\text{ cm}$) pour statique/apron.
6. **Sécurité & FOD** : Grooving contre l'aquaplaning, balisage Cat III, interdiction totale des débris métalliques/rocheux.`,
    },

    {
      id: 22,
      key: 'key_points',
      title: "Points clés à mémoriser — Aéroports",
      icon: '⭐',
      type: 'keypoints',
      points: [
        "Facteur d'utilisabilité par la rose des vents ≥ 95% de l'année (OACI Annexe 14)",
        "Vent traversier maximal admissible = 20 kts (avions gros porteurs Code 4)",
        "Système mondial OACI de portance : ACR (avion) ≤ PCR (chaussée)",
        "Vitesse d'hydroplanage dynamique : Vp = 6,36 · √(Ppneu en kPa)",
        "Balisage d'approche visuel PAPI : 4 feux (2 blancs + 2 rouges = pente de 3,0°)",
        "Rainurage (Grooving) : 6×6 mm tous les 38 mm pour éliminer l'aquaplanage",
        "Interdiction des sels de déneigement corrosifs → Formate de potassium uniquement",
      ],
    },

    {
      id: 23,
      key: 'self_assessment',
      title: "Auto-évaluation — Infrastructures Aéroportuaires",
      icon: '🏆',
      type: 'self_assessment',
      description: "Validez vos connaissances en ingénierie aéroportuaire :",
      objectives: [
        "Je sais calculer le vent traversier Vt et évaluer le facteur d'utilisabilité d'une piste",
        "Je comprends la différence entre TORA, TODA, ASDA et LDA",
        "Je sais appliquer les 3 corrections OACI de longueur de piste (altitude, température, pente)",
        "Je comprends le principe du système de portance ACR-PCR",
        "Je sais calculer la vitesse d'hydroplanage dynamique des pneumatiques Vp",
        "Je connais la différence de sollicitation entre une piste d'atterrissage et un apron de stationnement",
        "J'ai résolu les 3 exercices aéroportuaires avec succès",
        "J'ai obtenu 3/3 au quiz d'infrastructures aéroportuaires",
      ],
    },
  ],

  quickQuiz: {
    question: "À quelle condition réglementaire de portance OACI un aéronef peut-il opérer sur une piste sans restriction de masse ?",
    options: [
      { id: 'a', label: "A) ACR ≥ PCR" },
      { id: 'b', label: "B) ACR ≤ PCR" },
      { id: 'c', label: "C) Uniquement si la vitesse est < 200 km/h" },
    ],
    correct: 'b',
    explanation: "Si l'ACR (Aircraft Classification Rating) de l'avion est inférieur ou égal au PCR (Pavement Classification Rating) de la piste, l'avion peut opérer sans restriction de masse ni dommage pour la chaussée.",
  },
};
