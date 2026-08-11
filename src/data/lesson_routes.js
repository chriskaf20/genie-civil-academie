// ── Lesson: Ingénierie Routière & Infrastructures — Module 15 ──────────────────
export const lesson_routes = {
  moduleId: 15,
  slug: 'routes',
  lessonIndex: 1,
  title: "Conception, Tracé & Dimensionnement des Chaussées",
  subtitle: "Module 15 — Ingénierie Routière & Infrastructures",
  level: 'Intermédiaire',
  duration: '45h',
  diagramType: 'road_profile',
  tags: ['Routes', 'ICTAAL', 'ARP', 'Clothoïde', 'Profil en Long', 'Alizé', 'CBR', 'Chaussées'],

  steps: [
    {
      id: 1,
      key: 'definition',
      title: "Définition — L'Ingénierie Routière",
      icon: '📖',
      type: 'definition',
      fr: 'Ingénierie Routière & Infrastructures',
      en: 'Highway & Transportation Infrastructure Engineering',
      metier: "Pratiquée par les ingénieurs routiers, projeteurs VRD et chefs de projets d'infrastructures de transport. Essentielle pour la conception de routes nationales, autoroutes, voiries urbaines et voies rapides.",
      content: `L'**ingénierie routière** est la discipline du génie civil qui traite du **tracé, de la géométrie, de la sécurité et de la structure** des voies de circulation terrestre.

### Les 3 axes de la géométrie routière :
1. **Tracé en plan** : Vue de dessus — succession d'alignements droits, d'arcs de cercle ($R$) et de raccordements à courbure variable (**clothoïdes**).
2. **Profil en long** : Coupe longitudinale — ligne rouge du projet par rapport au terrain naturel (pentes, rampes, raccordements paraboles creux/bosse).
3. **Profil en travers** : Coupe transversale — largeur des voies, devers ($\delta$), accotements, fossés et couches de la structure de chaussée.

### Le dimensionnement de structure :
- **Chaussée souple** : Enrobés bitumineux sur graves non traitées (GNT).
- **Chaussée semi-rigide** : Enrobés sur assise traitée aux liants hydrauliques (GVT/GC).
- **Chaussée rigide** : Dalle de béton de ciment (BC).

> 💡 **Règle d'or** : Une bonne route concilie **sécurité** (visibilité, devers), **confort** (variations de courbure progressives) et **durabilité** (évacuation des eaux, dimensionnement au trafic).`,
    },

    {
      id: 2,
      key: 'importance',
      title: "Pourquoi l'ingénierie routière est stratégique",
      icon: '⚠️',
      type: 'importance',
      content: `Le réseau routier est l'**épine dorsale de l'économie et des déplacements**. En France, la route assure 88% du transport de voyageurs et 89% des marchandises.

- **Sécurité routière** : Un rayon en plan trop serré sans devers approprié ou un manque de visibilité cause des sorties de route mortelles.
- **Investissement massif** : Construire 1 km d'autoroute coûte entre 6 et 15 millions d'euros. Une erreur de tracé génère des surcoûts de terrassement considérables.
- **Drainage & Durabilité** : 80% des dégradations de chaussée (nids-de-poule, faïençage) sont dues à l'eau accumulée en sous-couche.
- **Transition écologique** : Réutilisation des agrégats d'enrobés (éco-comparateurs, enrobés tièdes à 130°C).

> ⚠️ **Chiffre clé** : Le coût de réhabilitation d'une chaussée totalement ruinée est 4 à 5 fois plus élevé qu'un entretien préventif réalisé à temps.`,
    },

    {
      id: 3,
      key: 'applications',
      title: "Applications terrain — Projets d'infrastructures routières",
      icon: '🏗️',
      type: 'applications',
      examples: [
        {
          context: "Projet d'autoroute / Voie rapide",
          text: "Application du guide ICTAAL (Instruction sur les Conditions Techniques d'Aménagement des Autoroutes de Liaison). Tracé vitesse 110–130 km/h, $R_{min} = 600\\text{ m}$.",
        },
        {
          context: "Aménagement de route principale (ARP)",
          text: "Guide ARP pour routes bidirectionnelles hors agglomération ($V_{85} = 80-90\\text{ km/h}$). Conception des carrefours plan, giratoires et créneaux de dépassement.",
        },
        {
          context: "Voirie Urbaine (VSA / VSE)",
          text: "Guide Aménagement des Voiries Urbaines. Apaisement du trafic ($30-50\\text{ km/h}$), intégration TCSP (bus/tram), mobilités douces et noues paysagères.",
        },
        {
          context: "Dimensionnement LCPC / SETRA (Alizé)",
          text: "Méthode française de dimensionnement des structures de chaussée sous trafic pluri-annuel (CAM = 1 sur essieu type de $130\\text{ kN}$).",
        },
        {
          context: "Projet de terrassement routier (GTR)",
          text: "Guide des Terrassements Routiers (GTR) — classification des sols (A, B, C, D) et réutilisation en remblai ou couche de forme.",
        },
        {
          context: "Carrefours giratoires",
          text: "Dimensionnement géométrique des giratoires (rayon extérieur $R = 12-25\\text{ m}$, îlot central, anneau, déflexion d'entrée pour casser la vitesse).",
        },
      ],
    },

    {
      id: 4,
      key: 'theory',
      title: "Théorie — Tracé géométrique & Devers",
      icon: '📐',
      type: 'theory',
      diagramType: 'road_profile',
      content: `### 1. Statique du véhicule en virage (Équilibre du devers)

Lorsqu'un véhicule négocie un virage de rayon $R$ à la vitesse $v$, il subit une accélération centrifuge. L'équilibre s'écrit :

$$f_t + d = \\frac{v^2}{g \\cdot R}$$

- $d$ = devers de la chaussée [m/m ou %] (incliné vers l'intérieur du virage)
- $f_t$ = coefficient de frottement transversal pneu/chaussée (dépend de la vitesse et de l'état de la chaussée)
- $v$ = vitesse de conception [m/s] ($v = V/3{,}6$)
- $R$ = rayon de courbure en plan [m]

### 2. Le raccordement progressif : La Clothoïde

Pour passer d'un alignement droit ($R = \\infty$) à un arc de cercle ($R$), on insère une **clothoïde** (spirale de Cornu) dont la courbure $1/R$ varie linéairement avec la longueur $s$ :

$$A^2 = R \\cdot L$$

- $A$ = paramètre de la clothoïde [m]
- $R$ = rayon du cercle raccordé [m]
- $L$ = longueur développée de la clothoïde [m]

> La clothoïde permet l'introduction progressive du devers et assure une variation continue de l'accélération transversale (confort et sécurité).`,
    },

    {
      id: 5,
      key: 'formulas',
      title: "Formules essentielles — Dimensionnement & Géométrie",
      icon: '🔢',
      type: 'formulas',
      diagramType: 'road_profile',
      formulas: [
        {
          name: "Rayon minimal absolu en plan (R_min)",
          latex: "R_{min} = \\frac{V^2}{127 \\cdot (f_{t,max} + d_{max})}",
          description: "V = vitesse en km/h, ft,max = frottement transversal maximal, dmax = devers maximal (généralement 7% hors agglomération, 2,5% en ville).",
        },
        {
          name: "Distance d'arrêt de sécurité (d_a)",
          latex: "d_a = v \\cdot t_r + \\frac{v^2}{2g \\cdot (f_l \\pm i)}",
          description: "tr = temps de réaction (1,5 à 2 s), fl = coefficient de frottement longitudinal, i = pente du profil en long (+ montée, - descente).",
        },
        {
          name: "Raccordement vertical parabolique (Bosse / PVG)",
          latex: "R_v = \\frac{d_a^2}{2 \\cdot (\\sqrt{h_1} + \\sqrt{h_2})^2}",
          description: "Rv = rayon du raccordement concave ou convexe [m], h1 = hauteur des yeux du conducteur (1,00 m), h2 = hauteur de l'obstacle (0,15 m à 0,60 m).",
        },
        {
          name: "Trafic cumulé équivalent (NE) — Essieu de 130 kN",
          latex: "NE = 365 \\cdot T_{PL} \\cdot \\frac{(1 + t)^N - 1}{\\ln(1 + t)} \\cdot CAM",
          description: "TPL = trafic poids lourds initial par jour et par sens, t = taux d'accroissement annuel du trafic, N = durée de dimensionnement (20 à 30 ans), CAM = coefficient d'agressivité moyenne.",
        },
        {
          name: "Contrainte/Déformation sous charge (Modèle de Burmister)",
          latex: "\\varepsilon_z = \\frac{\\sigma_z}{E_k} \\cdot f(\\nu) \\quad \\text{et} \\quad \\varepsilon_t = \\text{déformation de traction en base de couche}",
          description: "Équations intégrées dans le logiciel Alizé-LCPC pour vérifier εt < εadm (couches liées) et εz < εadm (sol support/GNT).",
        },
        {
          name: "Module de la couche de forme / Sol support (CBR / EV2)",
          latex: "E_{sol} \\approx 10 \\cdot CBR \\quad [\\text{MPa}] \\qquad \\text{ou} \\qquad E_{sol} = f(EV_2)",
          description: "Relation empirique courante : sol à CBR = 5 → E ≈ 50 MPa (PFS2). Utilisé pour déterminer l'épaisseur de couche de forme.",
        },
      ],
    },

    {
      id: 6,
      key: 'stepbystep',
      title: "Calcul complet — Rayon minimal & Distance d'arrêt à 90 km/h",
      icon: '🔬',
      type: 'stepbystep',
      problem: "Pour une route bidirectionnelle (ARP) de vitesse de projet V = 90 km/h en palier (i = 0%), calculer : 1) Le rayon minimal absolu R_min avec devers d_max = 7% et f_t = 0,10. 2) La distance d'arrêt d_a sur chaussée mouillée (f_l = 0,35, t_r = 2,0 s).",
      steps_demo: [
        { n: 1, text: "Convertir la vitesse : V = 90 km/h → v = 90 / 3,6 = 25,0 m/s" },
        { n: 2, text: "Calcul du rayon minimal absolu R_min : R_min = V² / [127 × (f_t + d)]" },
        { n: 3, text: "R_min = 90² / [127 × (0,10 + 0,07)] = 8100 / [127 × 0,17] = 8100 / 21,59 = 375,17 m → R_min = 375 m" },
        { n: 4, text: "Calcul de la distance de perception-réaction : d_r = v × t_r = 25,0 × 2,0 = 50,0 m" },
        { n: 5, text: "Calcul de la distance de freinage : d_f = v² / (2 × g × f_l) = 25,0² / (2 × 9,81 × 0,35) = 625 / 6,867 = 91,01 m" },
        { n: 6, text: "Distance d'arrêt totale : d_a = d_r + d_f = 50,0 + 91,0 = 141,0 m (Arrondie à 145 m dans le guide ARP)" },
      ],
      result_latex: "R_{min} = \\textbf{375 m} \\qquad d_a = \\textbf{141 m} \\quad (\\approx 145 \\text{ m selon ARP}) \\quad \\checkmark",
    },

    {
      id: 7,
      key: 'units',
      title: "Unités en Ingénierie Routière — Tableau de référence",
      icon: '📏',
      type: 'units',
      table: [
        { grandeur: "Vitesse V", si: "km/h (vitesse de projet)", imperial: "mph", conversion: "1 mph = 1,609 km/h" },
        { grandeur: "Rayon R / Longueur L", si: "mètres [m]", imperial: "ft", conversion: "1 m = 3,281 ft" },
        { grandeur: "Devers / Pente d, i", si: "% ou m/m", imperial: "%", conversion: "1% = 0,01 m/m" },
        { grandeur: "Trafic Poids Lourds MJA", si: "PL/jour/sens", imperial: "AADT (trucks)", conversion: "Compte le nombre de véhicules > 3,5 t" },
        { grandeur: "Charge à l'essieu", si: "kN (essieu type 130 kN)", imperial: "kips (18 kips = 80 kN)", conversion: "Essieu type français = 130 kN (13 tonnes)" },
        { grandeur: "Module d'élasticité E", si: "MPa", imperial: "psi", conversion: "1 MPa = 145,04 psi" },
        { grandeur: "Déformation micro-déformation", si: "µdef (10⁻⁶)", imperial: "micro-strain", conversion: "1 µdef = 10⁻⁶ m/m" },
      ],
      note: "⚠️ ATTENTION : L'essieu de référence varie selon les pays : 130 kN en France (NF P 98-086), 80 kN / 18 kips aux USA (AASHTO), 100 kN selon les Eurocodes routiers.",
    },

    {
      id: 8,
      key: 'hypotheses',
      title: "Hypothèses & conditions de validité",
      icon: '📋',
      type: 'hypotheses',
      items: [
        { type: 'info', text: "Les règles ARP / ICTAAL supposent des conditions de chaussée humide mais non verglacée avec des pneumatiques usés à 50%." },
        { type: 'info', text: "Le devers minimal en alignement droit (forme de toit) est fixé à 2,5% pour assurer l'évacuation rapide des eaux de pluie et éviter l'aquaplanage." },
        { type: 'warning', text: "ATTENTION : Ne jamais placer un sommet de profil en long (bosse) dans un rayon en plan trop serré — perte totale de visibilité et instabilité." },
        { type: 'warning', text: "La vitesse V_85 (vitesse non dépassée par 85% des usagers en conditions fluides) doit rester cohérente avec la géométrie tracée (évitement du syndrome du 'virage piège')." },
        { type: 'tip', text: "Règle de coordination plan/profil : Faire coincider les points d'inflexion du tracé en plan avec les sommets ou creux du profil en long pour une meilleure lisibilité visuelle du tracé." },
        { type: 'warning', text: "Pour le dimensionnement Alizé : La température de référence des enrobés bitumineux en France est fixée à 15°C avec une fréquence de sollicitation de 10 Hz." },
      ],
    },

    {
      id: 9,
      key: 'simple_examples',
      title: "Exemples guidés — Calculs routiers",
      icon: '✏️',
      type: 'examples_simple',
      examples: [
        {
          title: "Exemple 1 : Paramètre A d'une clothoïde de raccordement",
          given: "Arc de cercle R = 400 m, longueur de la clothoïde L = 80 m",
          find: "Paramètre A de la clothoïde",
          solution_latex: "A = \\sqrt{R \\cdot L} = \\sqrt{400 \\times 80} = \\sqrt{32\\,000} = 178{,}88 \\text{ m}",
          result: "A ≈ 179 m (Conforme aux règles ARP où A/R doit être compris entre 1/3 et 1)",
        },
        {
          title: "Exemple 2 : Calcul du trafic cumulé Poids Lourds (TC)",
          given: "Route TPL = 300 PL/j/sens à l'ouverture, durée de service N = 20 ans, taux d'accroissement t = 2% par an, CAM = 0,8",
          find: "Trafic cumulé d'essieux équivalents NE",
          solution_latex: "NE = 365 \\times 300 \\times \\frac{(1{,}02)^{20} - 1}{\\ln(1{,}02)} \\times 0{,}8 = 109\\,500 \\times 24{,}297 \\times 0{,}8 = 2\\,128\\,400",
          result: "NE = 2,13 millions d'essieux de 130 kN → Classe de trafic T2 selon le catalogue LCPC",
        },
        {
          title: "Exemple 3 : Rayon de raccordement en profil en long (Bosse)",
          given: "Vitesse 90 km/h, d_a = 145 m, h1 = 1,00 m (yeux), h2 = 0,15 m (obstacle)",
          find: "Rayon minimal concave R_v",
          solution_latex: "R_v = \\frac{145^2}{2 \\cdot (\\sqrt{1{,}00} + \\sqrt{0{,}15})^2} = \\frac{21\\,025}{2 \\cdot (1{,}00 + 0{,}387)^2} = \\frac{21\\,025}{3{,}848} = 5\\,463 \\text{ m}",
          result: "R_v ≈ 6 000 m (Valeur normalisée ARP en bosse pour visibilité sur obstacle)",
        },
      ],
    },

    {
      id: 10,
      key: 'real_examples',
      title: "Exemple réel — Contournement routier BET",
      icon: '🏢',
      type: 'examples_real',
      diagramType: 'road_profile',
      examples: [
        {
          context: "Bureau d'Études Infrastructures — Contournement Ouest, Poitiers",
          scenario: "Conception d'une voie nouvelle de 4,2 km (route bidirectionnelle 90 km/h, classe T1). Sol de plateforme de classe AR2 (CBR = 6, E = 60 MPa). Choix de la structure de chaussée selon catalogue SETRA.",
          decomposition_latex: "\\text{Sol PF2 (E=50-120 MPa)} \\Rightarrow \\text{Structure souple : } 6 \\text{ cm BBTM} + 10 \\text{ cm GB3} + 12 \\text{ cm GB3} + 20 \\text{ cm GNT}",
          lesson: "La couche de forme en GNT 0/31.5 sur 30 cm a permis d'atteindre la classe PF2. Épaisseur totale de corps de chaussée = 48 cm. Vérification sous Alizé-LCPC : εt = 72 µdef < εadm = 85 µdef ✓.",
        },
      ],
    },

    {
      id: 11,
      key: 'diagrams',
      title: "Schéma du profil routier — Coupe transversale & Couches",
      icon: '📊',
      type: 'interactive_diagram',
      diagramType: 'road_profile',
      description: "Visualisez le profil en travers d'une chaussée à 2 voies avec devers, accotements, fossés et le détail des couches de structure (couche de roulement, liaison, assise, forme et sol support).",
      diagram_description: [
        "Profil en travers avec pente de devers et fossés d'évacuation des eaux",
        "Empilement des couches : Roulement (BB), Assise (GB/GVT), Forme (PFS), Sol naturel",
        "Zone d'emprise, plate-forme, assiette et talus de remblai/déblai",
      ],
    },

    {
      id: 12,
      key: 'mistakes',
      title: "Erreurs graves en Ingénierie Routière",
      icon: '⛔',
      type: 'mistakes',
      items: [
        {
          mistake: "Oublier l'introduction progressive du devers dans la clothoïde",
          trap: "Faire passer le devers de +2,5% (toit) à -7% (virage) brutalement au point d'attaque du cercle",
          fix: "Le devers doit être introduit de façon linéaire et continue le long de la clothoïde. Le taux de variation du devers ne doit pas dépasser 2% par seconde à la vitesse de projet.",
        },
        {
          mistake: "Sous-estimer le drainage et l'évacuation des eaux de ruissellement",
          trap: "Concevoir des points bas de profil en long sans exutoire suffisant ou sans fil d'eau de fossé capacitif",
          fix: "Toujours assurer une pente minimale de profil en long d'au moins 0,5% (ou au minimum 0,2% si bordures avec caniveau) pour éviter les stagnations d'eau et l'aquaplanage.",
        },
        {
          mistake: "Confondre vitesse limite autorisée et vitesse de conception V",
          trap: "Tracer une route limitée à 80 km/h avec des rayons calculés pour 50 km/h sous prétexte de contraintes foncières",
          fix: "La vitesse de conception (V85) détermine la géométrie de sécurité. Si les contraintes imposent un rayon réduit, installer une signalisation renforcée et adapter le devers.",
        },
        {
          mistake: "Ne pas vérifier la déformation de traction εt en base des couches bitumineuses",
          trap: "Dimensionner uniquement sur l'épaisseur globale sans vérifier la fatigue des enrobés sous trafic pluri-annuel",
          fix: "Utiliser Alizé-LCPC ou la méthode française de dimensionnement mécanique pour s'assurer que εt < εadm (évitement du faïençage par le bas).",
        },
      ],
    },

    {
      id: 13,
      key: 'tips',
      title: "Astuces de l'ingénieur routier — Terrain & BET",
      icon: '💡',
      type: 'tips',
      tips: [
        "Règle empirique clothoïde : Choisir la longueur L de clothoïde égale à au moins 6 fois le saut de devers Δd (en %) pour assurer un confort visuel et dynamique parfait.",
        "Formule approchée de la distance d'arrêt à 90 km/h : d_a ≈ (V / 10)² + V = 81 + 90 = 171 m sur sol très mouillé (valeur prudente de pré-dimensionnement).",
        "Pour les giratoires urbains : Choisir un diamètre extérieur de 30 à 40 m (rayon 15–20 m). L'entrée doit présenter un déport (déflexion) pour forcer le véhicule à ralentir à < 30 km/h.",
        "Couche de roulement : Utiliser un Béton Bitumineux Très Mince (BBTM) de 3 cm pour l'adhérence à haute vitesse, ou un BBSG de 5 cm pour une voirie à trafic lourd.",
        "Compactage des enrobés : La température d'application ne doit jamais descendre sous 130°C pour du bitume pur 35/50. Vérifier la compacité au pycnomètre ou banc nucléaire (viseur 95–98%).",
        "En profil en long : Éviter les 'pertes de vue' (zones masquées créées par des raccordements concaves/convexes successifs) qui incitent aux dépassements dangereux.",
      ],
    },

    {
      id: 14,
      key: 'norms',
      title: "Normes & Guides de Référence — Routes",
      icon: '📜',
      type: 'norms',
      norms: [
        { code: "Guide ARP (SETRA)", description: "Aménagement des Routes Principales — Référence géométrique française pour les routes bidirectionnelles hors agglomération." },
        { code: "Guide ICTAAL", description: "Instruction sur les Conditions Techniques d'Aménagement des Autoroutes de Liaison." },
        { code: "Guide GTR (LCPC/SETRA)", description: "Guide des Terrassements Routiers — Réutilisation des sols en remblai et couche de forme." },
        { code: "NF P 98-086", description: "Dimensionnement structural des chaussées routières — Application de la méthode mécanique française." },
        { code: "Guide Aménagement des Voiries Urbaines (CERTU)", description: "Conception des rues, apaisement du trafic, carrefours urbains et transports en commun." },
        { code: "NF EN 13108", description: "Mélanges bitumineux — Spécifications des matériaux (BBME, BBSG, BBTM, GB)." },
      ],
    },

    {
      id: 15,
      key: 'exercises',
      title: "Exercices Ingénierie Routière — 3 niveaux",
      icon: '✍️',
      type: 'exercises',
      exercises: [
        {
          id: 'ex_rou_1',
          number: 1,
          difficulty: 'Facile',
          text: "Sur une route à 80 km/h en palier (i=0%), le temps de réaction est t_r = 1,5 s et le coefficient de frottement f_l = 0,38. Calculez la distance d'arrêt d_a.",
          hint: "v = 80 / 3,6 = 22,22 m/s. d_a = v·t_r + v²/(2·g·f_l).",
          answer_latex: "v = 22{,}22 \\text{ m/s} \\quad d_r = 22{,}22 \\times 1{,}5 = 33{,}33 \\text{ m} \\quad d_f = \\frac{22{,}22^2}{2 \\times 9{,}81 \\times 0{,}38} = 66{,}24 \\text{ m}",
          answer_text: "d_a = 33,33 + 66,24 = 99,57 m ≈ 100 m",
        },
        {
          id: 'ex_rou_2',
          number: 2,
          difficulty: 'Moyen',
          text: "Un virage de rayon R = 250 m est conçu pour une vitesse V = 80 km/h. Si le frottement transversal maximal admissible est f_t = 0,11, quel est le devers minimal d (%) nécessaire à l'équilibre ?",
          hint: "Utiliser f_t + d = v² / (g·R) avec v = 80/3,6 = 22,22 m/s.",
          answer_latex: "f_t + d = \\frac{22{,}22^2}{9{,}81 \\times 250} = \\frac{493{,}83}{2452{,}5} = 0{,}2013 \\quad \\Rightarrow \\quad d = 0{,}2013 - 0{,}11 = 0{,}0913",
          answer_text: "d = 9,13% (Dépassant d_max = 7% → Le rayon R = 250 m est trop serré pour 80 km/h ! Il faut augmenter R à au moins 300 m).",
        },
        {
          id: 'ex_rou_3',
          number: 3,
          difficulty: 'Difficile',
          text: "Calculer le trafic cumulé d'essieux de 130 kN sur 20 ans pour une voie lourde : T_PL = 450 PL/j/sens à l'ouverture, croissance t = 3%/an, CAM = 1,2 (trafic lourd industriel).",
          hint: "NE = 365 · T_PL · [(1+t)^N - 1]/ln(1+t) · CAM avec N = 20 et t = 0,03.",
          answer_latex: "NE = 365 \\times 450 \\times \\frac{(1{,}03)^{20} - 1}{\\ln(1{,}03)} \\times 1{,}2 = 164\\,250 \\times \\frac{0{,}8061}{0{,}02955} \\times 1{,}2 = 5\\,369\\,000",
          answer_text: "NE = 5,37 millions d'essieux de 130 kN → Classe de trafic T0 (Chaussée très fortement sollicitée, nécessite assise en grave-bitume GB4 ou béton).",
        },
      ],
    },

    {
      id: 16,
      key: 'corrections',
      title: "Corrections détaillées",
      icon: '✅',
      type: 'corrections',
      note: "Consultez les explications et justifications techniques complètes en cliquant sur 'Voir la correction' sous chaque exercice.",
    },

    {
      id: 17,
      key: 'quiz',
      title: "Quiz Ingénierie Routière — 3 questions",
      icon: '🎯',
      type: 'quiz',
      questions: [
        {
          id: 'q_rou_1',
          question: "À quoi sert principalement la clothoïde dans le tracé en plan d'une route ?",
          options: [
            { id: 'a', text: "À réduire la consommation de carburant des véhicules" },
            { id: 'b', text: "À raccorder progressivement l'alignement droit et le cercle en faisant varier la courbure et le devers" },
            { id: 'c', text: "À augmenter la vitesse maximale au-delà de 130 km/h" },
            { id: 'd', text: "À réduire l'emprise foncière du projet" },
          ],
          correct: 'b',
          explanation: "La clothoïde (A² = R·L) offre une variation linéaire de la courbure (1/R) et permet l'introduction progressive du devers. Cela évite un choc latéral brusque et assure une trajectoire naturelle au conducteur.",
        },
        {
          id: 'q_rou_2',
          question: "Quel est le devers minimal (forme en toit) appliqué en alignement droit sur une chaussée bidirectionnelle ?",
          options: [
            { id: 'a', text: "0% (chaussée parfaitement horizontale)" },
            { id: 'b', text: "1,0%" },
            { id: 'c', text: "2,5%" },
            { id: 'd', text: "7,0%" },
          ],
          correct: 'c',
          explanation: "En alignement droit, le devers minimal est fixé à 2,5% vers l'extérieur (forme en toit) pour garantir un drainage rapide de l'eau de pluie et prévenir les risques d'aquaplanage. 7% est le devers maximal en virage.",
        },
        {
          id: 'q_rou_3',
          question: "Dans le dimensionnement des chaussées selon la méthode française (NF P 98-086), quelle est la charge de l'essieu de référence ?",
          options: [
            { id: 'a', text: "80 kN (8 tonnes)" },
            { id: 'b', text: "100 kN (10 tonnes)" },
            { id: 'c', text: "130 kN (13 tonnes)" },
            { id: 'd', text: "200 kN (20 tonnes)" },
          ],
          correct: 'c',
          explanation: "La méthode française LCPC-SETRA utilise un essieu jumelé de référence de 130 kN (13 tonnes). Tous les types de poids lourds sont convertis en nombre d'essieux de 130 kN équivalents à l'aide du Coefficient d'Agressivité Moyenne (CAM).",
        },
      ],
    },

    {
      id: 18,
      key: 'exam_questions',
      title: "Questions d'examen — Niveau Ingénieur Routier",
      icon: '🎓',
      type: 'exam',
      questions: [
        "Établissez l'équation d'équilibre d'un véhicule dans un virage deversé. Déduisez-en la formule du rayon minimal absolu R_min et expliquez le rôle du frottement transversal f_t.",
        "Démontrez la formule du paramètre A de la clothoïde A = √(R·L). Expliquez les trois critères géométriques (dynamique, confort optique, variation de devers) servant à fixer la longueur L.",
        "Expliquez le principe du dimensionnement mécanique des chaussées par la méthode des éléments finis / Alizé-LCPC. Quelles sont les déformations critiques vérifiées pour une chaussée souple vs une chaussée semi-rigide ?",
        "Présentez la classification des sols selon le Guide des Terrassements Routiers (GTR). Quels sont les traitements aux liants hydrauliques (chaux, ciment) permettant de transformer un sol A1/A2 en couche de forme performante ?",
      ],
    },

    {
      id: 19,
      key: 'interview_questions',
      title: "Questions d'entretien — Projeteur / Ingénieur Routier",
      icon: '💼',
      type: 'interview',
      questions: [
        {
          question: "Lors de la vérification d'un projet routier 90 km/h sur Covadis/Civil 3D, vous remarquez une perte de vue en profil en long. De quoi s'agit-il et comment la corriger ?",
          answer_hint: "Une perte de vue est la disparition de la chaussée du champ de vision du conducteur provoquée par une bosse suivie d'un creux. Cela incite à des dépassements dangereux. Correction : Coordonner le tracé en plan et le profil en long en masquant le creux par une courbe en plan ou en adoucissant le rayon du raccordement parabolique R_v.",
        },
        {
          question: "Quelle est la différence entre une couche de roulement en BBTM, BBSG et EME ?",
          answer_hint: "BBTM (Béton Bitumineux Très Mince, 2,5-3 cm) : excellente macrotexture pour l'adhérence à grande vitesse. BBSG (Béton Bitumineux Semi-Grenu, 5-6 cm) : couche de roulement standard polyvalente. EME (Enrobé à Module Élevé, 8-12 cm avec bitume dur 15/25) : couche d'assise à très haute rigidité pour fort trafic poids lourds.",
        },
        {
          question: "Comment dimensionnez-vous le giratoire d'entrée d'une agglomération ?",
          answer_hint: "Viser un diamètre extérieur (R_ext) de 15 à 20 m (diamètre 30 à 40 m). Concevoir une déflexion géométrique en entrée (axe d'approche déporté à gauche du centre du giratoire) pour contraindre les usagers à ralentir sous 30 km/h. Ajouter un îlot séparateur franchissable pour les convois exceptionnels.",
        },
      ],
    },

    {
      id: 20,
      key: 'practical_case',
      title: "Cas pratique — Conception complète d'une liaison routière",
      icon: '🔧',
      type: 'practical',
      scenario: "Étude de cas — Liaison RD 947 / Déviation d'agglomération (V = 80 km/h)",
      description: `**Mise en situation** : Bureau d'études VRD & Infrastructures. Projet de déviation de 3,5 km. Trafic d'ouverture : 400 PL/j/sens, croissance 2%, durée 20 ans. Sol support de classe AR1 (CBR = 3, E = 30 MPa).`,
      resolution_latex_1: "\\text{Couche de forme en GNT + chaux sur 40 cm} \\Rightarrow \\text{Arrasement classe PF2 (E = 80 MPa)}",
      resolution_latex_2: "NE = 365 \\times 400 \\times \\frac{(1{,}02)^{20} - 1}{\\ln(1{,}02)} \\times 0{,}9 = 3\\,192\\,000 \\text{ essieux (Classe T2)}",
      resolution_latex_3: "\\text{Structure souple retenue (Catalogue LCPC) : } 6 \\text{ cm BBTM} + 8 \\text{ cm GB3} + 10 \\text{ cm GB3} + 25 \\text{ cm GNT 0/31.5}",
      conclusion: "Tracé géométrique validé (R_min = 300 m, d_a = 115 m, devers 5%). Structure de chaussée à assise en grave-bitume de 18 cm d'épaisseur globale pour 20 ans de service sans orniérage.",
    },

    {
      id: 21,
      key: 'summary',
      title: "Résumé exécutif — Ingénierie Routière en 6 points",
      icon: '📋',
      type: 'summary',
      content: `### L'Ingénierie Routière en 6 fondamentaux

1. **Géométrie 3D** : Tracé en plan (droite/clothoïde/cercle) + Profil en long (pente/parabole) + Profil en travers (devers/largeur).
2. **Devers en virage** : $f_t + d = \\frac{v^2}{g \\cdot R}$ — équilibre de l'accélération centrifuge.
3. **Clothoïde** : $A^2 = R \\cdot L$ — transition progressive de courbure et de devers.
4. **Distance d'arrêt** : $d_a = v \\cdot t_r + \\frac{v^2}{2g(f_l \\pm i)}$ — détermine les visibilités de sécurité.
5. **Structure de chaussée** : Roulement (BB) + Assise (GB/GVT) + Forme (PFS) + Sol support.
6. **Trafic & Fatigue** : Dimensionnement Alizé sous essieu type $130\\text{ kN}$ pour déformation $\\varepsilon_t < \\varepsilon_{adm}$.`,
    },

    {
      id: 22,
      key: 'key_points',
      title: "Points clés à mémoriser — Routes",
      icon: '⭐',
      type: 'keypoints',
      points: [
        "Équilibre en virage : f_t + d = v² / (g·R) avec d_max = 7% (hors agglo) ou 2,5% (urbain)",
        "Clothoïde : A² = R·L — indispensable pour raccorder droite et cercle en douceur",
        "Devers en alignement droit = 2,5% (forme en toit) pour le drainage des eaux de pluie",
        "Distance d'arrêt : d_a = v·t_r + v²/(2g·f_l) — d_a ≈ 145 m à 90 km/h sur chaussée humide",
        "Essieu de référence français = 130 kN (13 tonnes). Conversion par le CAM",
        "Couche de forme (PFS) : transforme un sol pauvre (CBR < 5) en plateforme rigide PF2/PF3",
        "Guide de référence hors agglomération : ARP (Aménagement des Routes Principales)",
      ],
    },

    {
      id: 23,
      key: 'self_assessment',
      title: "Auto-évaluation — Ingénierie Routière",
      icon: '🏆',
      type: 'self_assessment',
      description: "Validez vos connaissances en conception routière :",
      objectives: [
        "Je sais calculer le rayon minimal R_min en fonction de la vitesse V, du devers d et du frottement f_t",
        "Je comprends l'utilité géométrique et dynamique de la clothoïde (A² = R·L)",
        "Je calcule la distance d'arrêt de sécurité d_a et le rayon de raccordement vertical R_v",
        "Je connais les couches d'une structure de chaussée (roulement, assise, forme, sol)",
        "Je sais calculer le trafic cumulé d'essieux équivalents de 130 kN (NE)",
        "J'applique les règles de devers (2,5% en toit, 7% max en virage)",
        "J'ai résolu les 3 exercices routiers avec succès",
        "J'ai obtenu 3/3 au quiz de conception routière",
      ],
    },
  ],

  quickQuiz: {
    question: "Quelle courbe géométrique est utilisée pour raccorder un alignement droit à un arc de cercle dans un tracé routier ?",
    options: [
      { id: 'a', label: "A) La parabole du 2ème degré" },
      { id: 'b', label: "B) La clothoïde (spirale de Cornu)" },
      { id: 'c', label: "C) La caténaire" },
    ],
    correct: 'b',
    explanation: "La clothoïde (dont l'équation est A² = R·L) permet de faire varier la courbure de 0 (alignement droit) à 1/R (arc de cercle) de manière linéaire, ce qui permet une introduction progressive du devers et de la force centrifuge.",
  },
};
