// ── Lesson: Infrastructures Ferroviaires — Module 21 ─────────────────────────
export const lesson_ferroviaire = {
  moduleId: 21,
  slug: 'ferroviaire',
  lessonIndex: 1,
  title: "Conception, Géométrie & Superstructure des Voies Ferrées",
  subtitle: "Module 21 — Infrastructures Ferroviaires",
  level: 'Avancé',
  duration: '35h',
  diagramType: 'road_profile',
  tags: ['Ferroviaire', 'LGV', 'UIC 60', 'Ballast', 'Insuffisance de Devers', 'ERTMS', 'Nadal', 'ADV'],

  steps: [
    {
      id: 1,
      key: 'definition',
      title: "Définition — L'Ingénierie Ferroviaire",
      icon: '📖',
      type: 'definition',
      fr: 'Infrastructures Ferroviaires & Lignes à Grande Vitesse',
      en: 'Railway Infrastructure & High-Speed Rail Engineering',
      metier: "Pratiquée par les ingénieurs d'études ferroviaires, experts de l'UIC, projeteurs de voies, ingénieurs caténoires et chefs de projets d'infrastructures ferroviaires (SNCF Réseau, SYSTRA, Alstom, Egis).",
      content: `L'**ingénierie ferroviaire** est la discipline du génie civil traitant du **tracé géométrique, de la superstructure de voie, de l'électrification et de la sécurité** des réseaux de transport guidé sur rails d'acier.

### Les 2 grands ensembles d'une ligne ferroviaire :
1. **La superstructure de voie** :
   - **Le rail** : Profilé en acier spécial (ex: profil UIC 60 / 60 E1 de $60\\text{ kg/m}$) guidant les roues et transmettant la charge.
   - **Les traverses** : Pièces en béton armé monobloc ou bibloc (ou bois/acier) maintenant l'écartement des rails (écartement standard UIC $= 1435\\text{ mm}$).
   - **Les attaches élastiques** : Systèmes de fixation rail-traverse (attaches Nabla, Pandrol) amortissant les vibrations.
   - **Le ballast** : Lit de roches dures concassées ($31{,}5/50\\text{ mm}$) drainant l'eau et amortissant la charge dynamique.
2. **L'infrastructure & Équipements** :
   - **Plate-forme** : Couche de forme ferroviaire (PST/PFS), sous-ballast, terrassements et ouvrages d'art.
   - **Électrification & Signalisation** : Caténaires ($25\\text{ kV} - 50\\text{ Hz}$ ou $1{,}5\\text{ kV}$ DC), ERTMS/ETCS, postes d'aiguillages et appareils de voie (ADV).

> 💡 **Le guidage fer-fer** : Le contact roue-rail sur une surface équivalente à une pièce de 2 euros génère un frottement extrêmement faible ($f \\approx 0{,}0015$), rendant le train $4\\text{ à } 5\\times$ plus efficace énergétiquement que la route.`,
    },

    {
      id: 2,
      key: 'importance',
      title: "Pourquoi l'ingénierie ferroviaire exige une précision millimétrique",
      icon: '⚠️',
      type: 'importance',
      content: `À $320\\text{ km/h}$ sur LGV, la moindre anomalie géométrique de la voie ($> 2\\text{ mm}$) provoque des accélérations parasites insupportables et un risque de déraillement.

- **Charges à l'essieu répétitives** : $22{,}5\\text{ tonnes}$ par essieu en fret classique (UIC) et $17\\text{ tonnes}$ par essieu sur TGV à $320\\text{ km/h}$ (soit des millions de cycles de fatigue).
- **Insuffisance de devers & Sécurité** : Décompensation de l'accélération centrifuge en virage qui ne doit pas dépasser les limites d'inconfort ou de déraillement par chevauchement de rail.
- **Dilatation du Rail Long Soudé (LRS)** : Les rails sont soudés par aluminothermie en barres de plusieurs kilomètres sans joints. Ils subissent des contraintes thermiques axiales de plus de $100\\text{ tonnes}$ en été/hiver.
- **Décarbonation des transports** : Le ferroviaire est le pilier central de la mobilité bas carbone (émission de $\\text{CO}_2$ $50\\times$ inférieure à l'avion sur un trajet Paris-Lyon).

> ⚠️ **Règle d'or** : La voie ferroviaire doit respecter une tolérance géométrique de **$\\pm 1\\text{ mm}$ en écartement et altimétrie** lors du bourrage-dressage mécanique de finition.`,
    },

    {
      id: 3,
      key: 'applications',
      title: "Applications terrain — Projets ferroviaires",
      icon: '🏗️',
      type: 'applications',
      examples: [
        {
          context: "Lignes à Grande Vitesse (LGV / High-Speed Rail)",
          text: "Conception géométrique pour vitesse $V = 320-350\\text{ km/h}$. Rayons en plan $R_{min} = 6000\\text{ m}$, raccordements paraboliques progressifs, caténaire $25\\text{ kV}$.",
        },
        {
          context: "Voie rigide sur béton (Slab Track / Rheda 2000)",
          text: "Suppression du ballast remplacé par une dalle en béton armé coulée en place. Utilisé en tunnel long, gare souterraine et LGV à fort trafic (maintenance réduite).",
        },
        {
          context: "Appareils de Voie (ADV / Aiguillages)",
          text: "Dimensionnement des aiguillages à cœur mobile permettant la déviation des trains à haute vitesse ($220\\text{ km/h}$ en voie déviée sur LGV).",
        },
        {
          context: "Fret ferroviaire lourd (Heavy Haul)",
          text: "Lignes minières de très fort tonnage ($30-35\\text{ t}$ par essieu, trains de $2\\text{ km}$ de long). Rails super-lourds (75 kg/m) et traverses béton renforcées.",
        },
        {
          context: "Tramway et Métro Urbain",
          text: "Voies encastrées dans la chaussée avec rails à gorge (Groteix) sur dalle béton, isolations phoniques et antivibratoires (tapis sous-ballast / boîtes à ressorts).",
        },
        {
          context: "Signalisation ERTMS / ETCS Niveau 2 & 3",
          text: "Système de signalisation européenne embarquée en cabine sans panneaux latéraux. Transmission continue par radio GSM-R / FRMCS et balises Eurobalises.",
        },
      ],
    },

    {
      id: 4,
      key: 'theory',
      title: "Théorie — Géométrie de la Voie, Devers & Insuffisance",
      icon: '📐',
      type: 'theory',
      diagramType: 'road_profile',
      content: `### 1. Le Devers théorique d'équilibre ($d_{th}$)

En virage de rayon $R$, pour annuler totalement l'accélération centrifuge ressentie par les voyageurs à la vitesse $v$, la voie doit être inclinée d'un devers théorique :

$$d_{th} = \\frac{e \\cdot v^2}{g \\cdot R} \\approx 11{,}8 \\cdot \\frac{V^2}{R} \\quad [\\text{mm}]$$

- $V$ = vitesse du train [km/h]
- $R$ = rayon de courbure de la voie [m]
- $e$ = écartement des points d'appui des roues ($e = 1500\\text{ mm}$ pour la voie normale de $1435\\text{ mm}$)
- $d_{th}$ = devers théorique [mm]

### 2. Le Devers pratique ($d$) et l'Insuffisance de Devers ($I$)

Sur une ligne mixte (circulée par des TGV rapides à $V_{max}$ et des trains de fret lents à $V_{fret}$), on ne peut pas appliquer $d_{th}(V_{max})$ (sinon le train lourd pencherait trop vers l'intérieur à basse vitesse).

On retient un **devers pratique** $d < d_{th}$, ce qui crée une **insuffisance de devers $I$** pour les trains rapides :

$$I = d_{th} - d = 11{,}8 \\cdot \\frac{V^2}{R} - d \\quad [\\text{mm}]$$

- $d_{max}$ = $160\\text{ mm}$ (voie sur ballast) ou $180\\text{ mm}$ (voie rigide)
- $I_{max}$ = $100\\text{ à } 130\\text{ mm}$ pour TGV classique, $150\\text{ mm}$ pour rames autoredressantes (trains inclinables).

> **Pente de devers (Rampe de devers)** : La variation de devers le long du raccordement parabolique ne doit pas dépasser $1\\text{ à } 2\\text{ mm/m}$ pour éviter le dandinage et la détruitation des traverses.`,
    },

    {
      id: 5,
      key: 'formulas',
      title: "Formules essentielles — Dimensionnement Ferroviaire",
      icon: '🔢',
      type: 'formulas',
      diagramType: 'road_profile',
      formulas: [
        {
          name: "Devers théorique d'équilibre (d_th)",
          latex: "d_{th} = 11{,}8 \\cdot \\frac{V^2}{R} \\quad [\\text{mm}]",
          description: "V = vitesse du train en km/h, R = rayon en mètres. Équilibre parfait de la force centrifuge.",
        },
        {
          name: "Insuffisance de devers (I)",
          latex: "I = 11{,}8 \\cdot \\frac{V^2}{R} - d \\le I_{adm} \\quad (100 \\text{ à } 150 \\text{ mm})",
          description: "d = devers réel posé [mm]. Iadm = limite d'inconfort passager et de sécurité anti-déraillement.",
        },
        {
          name: "Rayon minimal en plan sur LGV (V = 320 km/h)",
          latex: "R_{min} = \\frac{11{,}8 \\cdot V^2}{d_{max} + I_{max}} = \\frac{11{,}8 \\cdot 320^2}{180 + 100} = \\frac{1\\,208\\,320}{280} \\approx 4\\,300 \\text{ m}",
          description: "Sur LGV française (V = 320 km/h), on retient en pratique R_min = 6 000 m pour garder une réserve de confort.",
        },
        {
          name: "Critère de déraillement par chevauchement de Nadal (L/V)",
          latex: "\\left(\\frac{L}{V}\\right)_{lim} = \\frac{\\tan\\gamma - f}{1 + f \\cdot \\tan\\gamma}",
          description: "L = effort transversal roue/rail, V = charge verticale sur la roue, γ = angle de la table d'inclinant du boudin de roue (γ ≈ 60° à 70°), f = coefficient de frottement pneu/rail (f ≈ 0,30-0,36). Limite L/V ≈ 1,2.",
        },
        {
          name: "Contrainte thermique dans le Rail Long Soudé (LRS)",
          latex: "\\sigma_{th} = E \\cdot \\alpha_{th} \\cdot \\Delta T \\qquad F_{th} = S_{rail} \\cdot \\sigma_{th}",
          description: "E = 210 000 MPa (acier), αth = 1,15×10⁻⁵ /°C. Pour ΔT = 45°C : σth = 108,7 MPa → Effort axial Fth ≈ 830 kN par file de rail UIC 60.",
        },
        {
          name: "Épaisseur de sous-couche de ballast (Ep)",
          latex: "e_{ballast} \\approx 0{,}30 \\text{ m à } 0{,}35 \\text{ m} \\quad \\text{sous la base de la traverse}",
          description: "Le ballast concassé 31,5/50 mm doit présenter une épaisseur minimale de 30 cm sous traverse pour répartir la contrainte sur la plateforme à σ_sol < 100 kPa.",
        },
      ],
    },

    {
      id: 6,
      key: 'stepbystep',
      title: "Calcul complet — Devers & Insuffisance sur une courbe de LGV (V = 300 km/h)",
      icon: '🔬',
      type: 'stepbystep',
      problem: "Une courbe de Ligne à Grande Vitesse de rayon R = 5 000 m doit être circulée par des TGV à V = 300 km/h. 1) Calculer le devers théorique d_th. 2) Si le devers posé est d = 130 mm, calculer l'insuffisance de devers I et vérifier la conformité (I_adm = 110 mm). 3) Calculer la vitesse maximale autorisée V_max si d = 150 mm et I_max = 110 mm.",
      steps_demo: [
        { n: 1, text: "Calcul du devers théorique : d_th = 11,8 × V² / R = 11,8 × 300² / 5000 = 11,8 × 90 000 / 5000 = 212,4 mm" },
        { n: 2, text: "Calcul de l'insuffisance de devers I pour d = 130 mm : I = d_th - d = 212,4 - 130 = 82,4 mm" },
        { n: 3, text: "Vérification : I = 82,4 mm ≤ I_adm = 110 mm → Conforme et confortable pour les passagers ✓" },
        { n: 4, text: "Calcul de la vitesse maximale V_max pour d = 150 mm et I_max = 110 mm : d_th,max = d + I_max = 150 + 110 = 260 mm" },
        { n: 5, text: "Formule inverse de la vitesse : V_max = √[(d_th,max × R) / 11,8] = √[(260 × 5000) / 11,8]" },
        { n: 6, text: "V_max = √[1 300 000 / 11,8] = √110 169,5 = 331,9 km/h → V_max = 330 km/h" },
      ],
      result_latex: "d_{th} = \\textbf{212,4 mm} \\qquad I = \\textbf{82,4 mm} \\le 110 \\text{ mm} \\qquad V_{max} = \\textbf{330 km/h} \\quad \\checkmark",
    },

    {
      id: 7,
      key: 'units',
      title: "Unités en Ingénierie Ferroviaire — Tableau de référence",
      icon: '📏',
      type: 'units',
      table: [
        { grandeur: "Vitesse V", si: "km/h", imperial: "mph", conversion: "1 mph = 1,609 km/h (320 km/h = 199 mph)" },
        { grandeur: "Écartement de voie e", si: "mm (1435 mm standard UIC)", imperial: "ft-in (4 ft 8½ in)", conversion: "1435 mm = 4 ft 8,5 in (écartement standard mondial)" },
        { grandeur: "Devers d / Insuffisance I", si: "mm", imperial: "inches", conversion: "1 mm = 0,0394 in" },
        { grandeur: "Masse surfacique du rail", si: "kg/m (ex: UIC 60 = 60 kg/m)", imperial: "lbs/yard (121 lbs/yd)", conversion: "60 kg/m ≈ 121 lbs/yd" },
        { grandeur: "Charge à l'essieu", si: "tonnes/essieu ou kN", imperial: "kips", conversion: "22,5 t = 225 kN = 50,6 kips" },
        { grandeur: "Rayon de courbure R", si: "mètres [m]", imperial: "degree of curve [°]", conversion: "R = 6000 m sur LGV" },
        { grandeur: "Tension caténaire", si: "kV (25 kV AC / 1,5 kV DC)", imperial: "kV", conversion: "25 000 V alternatif 50 Hz sur LGV" },
      ],
      note: "⚠️ ATTENTION : L'écartement de voie de 1 435 mm est mesuré entre les flanc intérieurs des deux rails à 14 mm en dessous du plan de roulement.",
    },

    {
      id: 8,
      key: 'hypotheses',
      title: "Hypothèses & conditions de validité",
      icon: '📋',
      type: 'hypotheses',
      items: [
        { type: 'info', text: "La formule du devers d_th = 11,8 · V² / R découle de la projection géométrique pour un écartement moyen des points de contact roue-rail e = 1500 mm." },
        { type: 'info', text: "Le comportement du Rail Long Soudé (LRS) suppose que le ballast oppose une résistance longitudinale minimale au déplacement des traverses (F_ballast ≥ 12 kN par mètre de voie)." },
        { type: 'warning', text: "ATTENTION : En été, par forte chaleur (température du rail T_rail > 60°C), le rail entre en forte compression axiale. Si la résistance du ballast est insuffisante → risque de FLAMBEMENT de la voie (flèche latérale soudaine)." },
        { type: 'warning', text: "Sur voie neuve LGV : La stabilité du ballast nécessite une période de rodage sous trafic ou un stabilisateur dynamique de voie (SDV) pour compacter le ballast sous les traverses." },
        { type: 'tip', text: "Règle de raccordement parabolique : La longueur de la clothoïde / parabole de raccordement L se calcule par L ≥ 0,10 · V · I (avec V en km/h et I en mm) pour limiter la vitesse de roulis." },
        { type: 'warning', text: "Rapport L/V de Nadal : Si le rapport de la force latérale L sur la charge verticale V d'une roue dépasse 1,2, le boudin de roue monte sur le champ du rail → Déraillement garanti !" },
      ],
    },

    {
      id: 9,
      key: 'simple_examples',
      title: "Exemples guidés — Calculs ferroviaires",
      icon: '✏️',
      type: 'examples_simple',
      examples: [
        {
          title: "Exemple 1 : Effort de compression thermique dans un rail UIC 60",
          given: "Rail UIC 60 (section S = 76,7 cm² = 7670 mm²). Température de libération (pose) T0 = 25°C. Température max du rail en été T_max = 65°C (ΔT = 40°C). E = 210 000 MPa, α = 1,15×10⁻⁵ /°C.",
          find: "Contrainte thermique σ_th et effort de compression total F_th par file de rail",
          solution_latex: "\\sigma_{th} = 210\\,000 \\times 1{,}15 \\times 10^{-5} \\times 40 = 96{,}6 \\text{ MPa} \\qquad F_{th} = 7670 \\times 96{,}6 = 740\\,922 \\text{ N} \\approx 741 \\text{ kN}",
          result: "Effort de compression axiale = 741 kN (74 tonnes) par rail. Soit 148 tonnes de poussée pour la voie à retenir par le ballast !",
        },
        {
          title: "Exemple 2 : Calcul du critère de déraillement de Nadal (L/V)",
          given: "Roue d'un wagon de fret sous charge V = 100 kN. Angle du boudin γ = 60°, frottement f = 0,30",
          find: "La force latérale maximale L_lim avant déraillement par chevauchement",
          solution_latex: "\\left(\\frac{L}{V}\\right)_{lim} = \\frac{\\tan 60° - 0{,}30}{1 + 0{,}30 \\times \\tan 60°} = \\frac{1{,}732 - 0{,}30}{1 + 0{,}30 \\times 1{,}732} = \\frac{1{,}432}{1{,}5196} = 0{,}942",
          result: "L_lim = 0,942 × 100 kN = 94,2 kN. Toute force transversale L > 94,2 kN fera monter la roue sur le rail.",
        },
        {
          title: "Exemple 3 : Longueur de raccordement parabolique de devers",
          given: "LGV V = 320 km/h, insuffisance de devers I = 85 mm",
          find: "Longueur minimale de la parabole de raccordement L_min",
          solution_latex: "L_{min} = 0{,}10 \\times V \\times I = 0{,}10 \\times 320 \\times 85 = 2\\,720 \\text{ m}",
          result: "L_min = 272 m (Longueur minimale de transition sur laquelle le devers s'introduit progressivement).",
        },
      ],
    },

    {
      id: 10,
      key: 'real_examples',
      title: "Exemple réel — Ligne à Grande Vitesse SEA (Tours-Bordeaux)",
      icon: '🏢',
      type: 'examples_real',
      diagramType: 'road_profile',
      examples: [
        {
          context: "LGV Sud Europe Atlantique (300 km de ligne nouvelle à 320 km/h)",
          scenario: "Pose de 600 km de voie en Rails Longs Soudés (UIC 60 E1) sur traverses béton monobloc (1 666 traverses/km) avec 35 cm de ballast en diorite concassée. Ancrage géotechnique sur sous-couche en Grave Bitume (GB) pour plateforme très rigide.",
          decomposition_latex: "R_{min} = 6\\,000 \\text{ m} \\quad d = 120 \\text{ mm} \\quad I = 80 \\text{ mm} \\quad \\Rightarrow \\text{Confort optimal } (a_y < 0{,}5 \\text{ m/s}^2)",
          lesson: "La voie a été libérée thermiquement à la température de consigne T_ref = 25°C par tension au vérin hydraulique avant soudure thermite. Tolérance d'alignement après dressage au wagon-laser : ±0,5 mm.",
        },
      ],
    },

    {
      id: 11,
      key: 'diagrams',
      title: "Schéma de la structure de voie ferroviaire — Ballast & Rail",
      icon: '📊',
      type: 'interactive_diagram',
      diagramType: 'road_profile',
      description: "Visualisez la coupe transversale d'une voie ferrée sur ballast : champ du rail UIC 60, semelle élastique, traverse béton monobloc, lit de ballast (30 cm), couche de sous-ballast, couche de forme (PFS) et drainage de banquette.",
      diagram_description: [
        "Coupe transversale de la voie : Rail, traverse béton, attache Pandrol/Nabla, ballast",
        "Empilement des couches : Ballast (31.5/50), Sous-ballast (0/31.5), Couche de forme, Terrassement",
        "Geométrie du devers : Inclinaison du plan de roulement et écartement standard de 1435 mm",
      ],
    },

    {
      id: 12,
      key: 'mistakes',
      title: "Erreurs fatales en Ingénierie Ferroviaire",
      icon: '⛔',
      type: 'mistakes',
      items: [
        {
          mistake: "Mauvaise température de libération du Rail Long Soudé (LRS)",
          trap: "Souder définitivement les rails à une température ambiante trop basse (ex: 5°C) sans prétension hydraulique",
          fix: "En été, à T_rail = 60°C, le ΔT de 55°C crée un effort de compression de plus de 100 tonnes par rail → Flambement et déraillement du premier train. Toujours libérer les rails à T_ref = 25°C ± 3°C.",
        },
        {
          mistake: "Utiliser du ballast pollué ou usé par attrition",
          trap: "Laisser les fines d'usure du ballast colmater les vides entre les roches concassées",
          fix: "Le ballast pollué perd sa capacité de drainage et sa raideur élastique. L'eau piégée crée des 'poches de boue' sous les traverses qui provoquent des affaissements de voie. Dégarnissage-criblage du ballast tous les 15-20 ans.",
        },
        {
          mistake: "Dépasser la pente maximale de devers (Rampe de devers)",
          trap: "Introduire le devers trop rapidement sur une courte longueur de raccordement",
          fix: "Une variation brusque de devers tord le châssis du train et provoque le délestage d'une roue (perte de charge verticale V) → risque mortel de chevauchement de boudin (Nadal).",
        },
        {
          mistake: "Sous-estimer les effets de souffle à la croisée de deux TGV à 320 km/h",
          trap: "Concevoir un entraxe de voies (entraxe d'axes de voies) trop faible sur LGV",
          fix: "L'entraxe minimal sur LGV à 320 km/h est fixé à 4,50 m (contre 3,80 m sur ligne classique) pour éviter que l'onde de choc de pression/dépression du croisement ne brise les vitres des rames.",
        },
      ],
    },

    {
      id: 13,
      key: 'tips',
      title: "Astuces de l'ingénieur ferroviaire — Voie & Signalisation",
      icon: '💡',
      type: 'tips',
      tips: [
        "Inclinant du rail : Les rails ne sont pas posés verticaux mais inclinés vers l'intérieur au 1/20ème (ou 1/40ème) pour correspondre à la conicités des tables de roulement des roues d'avion (effet de centrage automatique).",
        "Conicités équivalente (Profil de roue) : La forme conique des roues assure le guidage automatique en alignement droit sans que les boudins de roue ne touchent les rails (mouvement de lacet sinusoidal).",
        "Wagon ausculteur de voie (ex: Rame Iris 320 SNCF) : Mesure la géométrie de la voie à 320 km/h au demi-millimètre près par lasers et capteurs optiques tous les 25 cm.",
        "Voie rigide (Slab Track) : Supprime la maintenance du ballast mais coûte 1,5 à 2× plus cher à la construction. Indispensable dans les tunnels de plus de 5 km pour des raisons d'accès de sécurité.",
        "Signalisation ERTMS / ETCS Niveau 2 : La vitesse et la distance d'arrêt sont calculées par l'ordinateur de bord EVC de la motrice en fonction de la courbe de freinage sécurisée reçue par radio GSM-R.",
        "Attaches élastiques (Pandrol / Nabla) : Exercent un effort d'application de 10 à 12 kN par attache sur le patin du rail pour empêcher tout cheminement longitudinal du rail sous le freinage des trains.",
      ],
    },

    {
      id: 14,
      key: 'normes',
      title: "Normes & Références — Ferroviaire & UIC",
      icon: '📜',
      type: 'norms',
      norms: [
        { code: "Fiches UIC (Union Internationale des Chemins de fer)", description: "UIC 719 (Plateforme ferroviaire), UIC 774-3 (Interaction voie-ouvrage d'art), UIC 518 (Essais dynamiques)." },
        { code: "NF EN 13848 (Parties 1 à 6)", description: "Applications ferroviaires — Voie — Qualité de la géométrie de la voie (Mesures, paramètres et tolérances)." },
        { code: "Eurocode 1-2 (EN 1991-2)", description: "Actions sur les structures — Charges sur les ponts ferroviaires (Modèles de charge LM71, SW/0, SW/2)." },
        { code: "NF EN 13230", description: "Applications ferroviaires — Voie — Traverses et supports en béton." },
        { code: "NF EN 13674-1", description: "Applications ferroviaires — Voie — Rails — Rails de chemin de fer Vignole de 46 kg/m et plus (ex: 60 E1)." },
        { code: "Spécifications ERTMS / ETCS (ERA)", description: "Agence Ferroviaire Européenne — Spécifications d'interopérabilité du système de contrôle-commande ferroviaire." },
      ],
    },

    {
      id: 15,
      key: 'exercises',
      title: "Exercices Ingénierie Ferroviaire — 3 niveaux",
      icon: '✍️',
      type: 'exercises',
      exercises: [
        {
          id: 'ex_fer_1',
          number: 1,
          difficulty: 'Facile',
          text: "Sur une ligne classique circulée à V = 140 km/h, une courbe présente un rayon R = 1 000 m. Calculez le devers théorique d'équilibre d_th (en mm).",
          hint: "d_th = 11,8 · V² / R.",
          answer_latex: "d_{th} = 11{,}8 \\times \\frac{140^2}{1000} = 11{,}8 \\times \\frac{19\\,600}{1000} = 11{,}8 \\times 19{,}6 = 231{,}28 \\text{ mm}",
          answer_text: "d_th = 231,3 mm",
        },
        {
          id: 'ex_fer_2',
          number: 2,
          difficulty: 'Moyen',
          text: "Pour la courbe précédente (V = 140 km/h, R = 1 000 m), le devers maximum posé est fixé à d = 140 mm. 1) Calculez l'insuffisance de devers I. 2) Est-elle conforme pour des trains classiques (I_adm = 100 mm) ?",
          hint: "I = d_th - d.",
          answer_latex: "I = 231{,}3 - 140 = 91{,}3 \\text{ mm} \\le 100 \\text{ mm} \\quad \\checkmark",
          answer_text: "I = 91,3 mm ≤ 100 mm → Conforme et sans inconfort.",
        },
        {
          id: 'ex_fer_3',
          number: 3,
          difficulty: 'Difficile',
          text: "Une ligne à grande vitesse a des rayons de courbure R = 7 000 m. Si le devers posé est d = 100 mm et l'insuffisance maximale admise est I_adm = 90 mm, quelle est la vitesse maximale absolue V_max praticable sur cette section ?",
          hint: "d_th,max = d + I_adm = 190 mm. V_max = √[(d_th,max · R) / 11,8].",
          answer_latex: "d_{th,max} = 100 + 90 = 190 \\text{ mm} \\qquad V_{max} = \\sqrt{\\frac{190 \\times 7000}{11{,}8}} = \\sqrt{\\frac{1\\,330\\,000}{11{,}8}} = \\sqrt{112\\,711{,}8} = 335{,}7 \\text{ km/h}",
          answer_text: "V_max = 335,7 km/h → Vitesse maximale retenue de 330 km/h.",
        },
      ],
    },

    {
      id: 16,
      key: 'corrections',
      title: "Corrections détaillées",
      icon: '✅',
      type: 'corrections',
      note: "Retrouvez les formules complètes, graphiques et explications géométriques en cliquant sur 'Voir la correction'.",
    },

    {
      id: 17,
      key: 'quiz',
      title: "Quiz Ingénierie Ferroviaire — 3 questions",
      icon: '🎯',
      type: 'quiz',
      questions: [
        {
          id: 'q_fer_1',
          question: "Quel est l'écartement standard mondial de la voie ferrée (écartement UIC) ?",
          options: [
            { id: 'a', text: "1 000 mm (Voie métrique)" },
            { id: 'b', text: "1 435 mm (4 ft 8,5 in)" },
            { id: 'c', text: "1 668 mm (Écartement ibérique)" },
            { id: 'd', text: "2 000 mm" },
          ],
          correct: 'b',
          explanation: "L'écartement standard mondial UIC est de 1 435 mm (mesuré entre les faces intérieures des rails). Il est utilisé sur plus de 60% des lignes ferroviaires du monde et sur 100% des LGV européennes.",
        },
        {
          id: 'q_fer_2',
          question: "Pourquoi effectue-t-on la 'libération thermique' des Rails Longs Soudés (LRS) à une température de consigne (ex: 25°C) ?",
          options: [
            { id: 'a', text: "Pour sécher la peinture anticorrosion des rails" },
            { id: 'b', text: "Pour fixer l'état de contrainte axiale nulle du rail à une température médiane afin d'éviter le flambement en été et la rupture en hiver" },
            { id: 'c', text: "Pour faciliter la fonte du ballast" },
            { id: 'd', text: "Pour réduire le bruit des trains" },
          ],
          correct: 'b',
          explanation: "Les LRS n'ont pas de joints de dilatation. En fixant la température de contrainte nulle à T_ref = 25°C, on équilibre les efforts de compression estivale (risques de flambement) et de traction hivernale (risques de rupture de rail).",
        },
        {
          id: 'q_fer_3',
          question: "Quel est le rôle du rapport de Nadal (L/V) en sécurité ferroviaire ?",
          options: [
            { id: 'a', text: "Mesurer la vitesse maximale de la caténaire" },
            { id: 'b', text: "Évaluer le risque de déraillement par chevauchement du boudin de roue sur le rail (limite L/V ≈ 1,2)" },
            { id: 'c', text: "Calculer le poids du ballast" },
            { id: 'd', text: "Mesurer la consommation d'électricité du TGV" },
          ],
          correct: 'b',
          explanation: "Le critère de Nadal évalue le ratio entre l'effort transversal L et la charge verticale V sur la roue. Si L/V > 1,2, le boudin de roue monte sur la table de roulement et l'essieu déraille.",
        },
      ],
    },

    {
      id: 18,
      key: 'exam_questions',
      title: "Questions d'examen — Niveau Master Génie Ferroviaire",
      icon: '🎓',
      type: 'exam',
      questions: [
        "Établissez la formule du devers théorique d_th = 11,8 · V² / R. Expliquez la notion d'insuffisance de devers I et de dandinage. Comment équilibre-t-on le devers sur une ligne mixte fret/voyageurs ?",
        "Démontrez l'équation de déraillement de Nadal (L/V)_lim. Quels sont les facteurs influençant le frottement roue/rail f et l'angle du boudin γ ?",
        "Détaillez le comportement mécanique du Rail Long Soudé (LRS) sous variations thermiques ΔT et sous effort de freinage. Établissez l'équation d'équilibre de l'ancre de voie (résistance du ballast).",
        "Comparez la structure de voie traditionnelle sur ballast et la structure de voie rigide sur béton (Slab Track Rheda 2000). Présentez l'analyse technico-économique sur un cycle de vie de 50 ans.",
      ],
    },

    {
      id: 19,
      key: 'interview_questions',
      title: "Questions d'entretien — Ingénieur Voie / Infrastructure",
      icon: '💼',
      type: 'interview',
      questions: [
        {
          question: "Lors d'une inspection de voie par forte canicule (T_rail = 62°C), une équipe signale un désalignement sinusoïdal de 15 mm sur 10 m de voie. Que décidez-vous ?",
          answer_hint: "Procédure d'urgence 'Chaleur' : 1. Interdiction immédiate des circulations ou limitation de vitesse d'urgence (LTV à 40 km/h). 2. C'est l'amorce d'un flambement de voie par compression thermique du LRS. 3. Interdiction absolue de toucher au ballast tant que le rail est chaud. 4. Refroidir le rail à l'eau ou attendre la nuit pour tronçonner et faire une libération locale de contraintes par aluminothermie.",
        },
        {
          question: "Pourquoi les rails ne sont-ils pas posés parfaitement verticaux mais inclinés au 1/20ème vers l'intérieur ?",
          answer_hint: "L'inclinant au 1/20ème correspond au profil conique des roues de train (conicité équivalente). Cela assure le centrage automatique de l'essieu en alignement droit (mouvement de lacet) et empêche le frottement permanent du boudin de roue contre le rail.",
        },
        {
          question: "Quelle est la différence entre ERTMS Niveau 1 et ERTMS Niveau 2 ?",
          answer_hint: "Niveau 1 : Les informations d'autorisation de mouvement (MA) sont transmises ponctuellement au train lors du passage sur des Eurobalises posées entre les rails (Signalisation latérale conservée). Niveau 2 : Transmissions CONTINUES bidirectionnelles par radio GSM-R / FRMCS entre le centre RBC (Radio Block Center) et le train. Les panneaux latéraux de signalisation sont supprimés.",
        },
      ],
    },

    {
      id: 20,
      key: 'practical_case',
      title: "Cas pratique — Conception d'un raccordement de LGV",
      icon: '🔧',
      type: 'practical',
      scenario: "Étude de cas — Raccordement d'une nouvelle LGV (V = 320 km/h) sur ligne existante",
      description: `**Mise en situation** : Bureau d'études ferroviaires (SNCF / SYSTRA). Tracé d'une courbe de raccordement de LGV avec vitesse de projet V = 320 km/h. Contrainte foncière : Rayon maximal disponible R = 5 500 m. Limites admises : d_max = 160 mm, I_max = 100 mm.`,
      resolution_latex_1: "d_{th} = 11{,}8 \\times \\frac{320^2}{5500} = 11{,}8 \\times \\frac{102\\,400}{5500} = 219{,}8 \\text{ mm}",
      resolution_latex_2: "\\text{Choix de devers posé : } d = 135 \\text{ mm} \\implies I = 219{,}8 - 135 = 84{,}8 \\text{ mm} \\le 100 \\text{ mm} \\quad \\checkmark",
      resolution_latex_3: "L_{parabole} = 0{,}10 \\times 320 \\times 84{,}8 = 2\\,713.6 \\text{ m} \\implies \\text{Longueur de transition } L = 2\\,720 \\text{ m}",
      conclusion: "Tracé validé : R = 5 500 m, devers d = 135 mm, I = 84,8 mm (marge de confort de 15 mm). Parabole de raccordement de 2 720 m avec rampe de devers de 0,05 mm/m. Matériau : Rails UIC 60 E1 sur traverses monobloc et 35 cm de ballast diorite.",
    },

    {
      id: 21,
      key: 'summary',
      title: "Résumé exécutif — Ingénierie Ferroviaire en 6 points",
      icon: '📋',
      type: 'summary',
      content: `### L'Ingénierie Ferroviaire en 6 fondamentaux

1. **Superstructure** : Rails UIC 60 ($60\\text{ kg/m}$) + Traverses béton + Attaches élastiques + Ballast concassé $31{,}5/50\\text{ mm}$.
2. **Écartement UIC** : $1435\\text{ mm}$ standard mondial — précision géométrique millimétrique.
3. **Devers d'équilibre** : $d_{th} = 11{,}8 \\cdot \\frac{V^2}{R}$ [mm] — annulation de la force centrifuge.
4. **Insuffisance de devers** : $I = d_{th} - d \\le 100-150\\text{ mm}$ — compromis de vitesse mixte fret/voyageurs.
5. **Rail Long Soudé (LRS)** : Libération thermique à $T_{ref} = 25^\\circ\\text{C}$ pour contrer le flambement ($>100\\text{ t}$ de compression).
6. **Sécurité & Signalisation** : Critère de Nadal $L/V \\le 1{,}2$ (anti-déraillement) + ERTMS/ETCS Niveau 2 en cabine.`,
    },

    {
      id: 22,
      key: 'key_points',
      title: "Points clés à mémoriser — Voies Ferrées",
      icon: '⭐',
      type: 'keypoints',
      points: [
        "Devers théorique : d_th = 11,8 · V² / R [mm] avec V en km/h et R en mètres",
        "Insuffisance de devers : I = d_th - d ≤ 100 à 130 mm pour le confort voyageur",
        "Écartement standard UIC = 1435 mm (voie normale mondiale)",
        "Rail Long Soudé (LRS) : libéré à 25°C par tension hydraulique avant soudure",
        "Formule de Nadal : (L/V)_lim ≈ 1,2 — sécurité contre le chevauchement du rail",
        "Sur LGV (320 km/h) : Rayon minimal R_min = 6 000 m | Épaisseur de ballast ≥ 35 cm",
        "ERTMS / ETCS Niveau 2 : Signalisation continue en cabine par radio GSM-R sans panneaux",
      ],
    },

    {
      id: 23,
      key: 'self_assessment',
      title: "Auto-évaluation — Ingénierie Ferroviaire",
      icon: '🏆',
      type: 'self_assessment',
      description: "Validez vos compétences en infrastructures ferroviaires :",
      objectives: [
        "Je sais calculer le devers théorique d_th et l'insuffisance de devers I pour une courbe ferroviaire",
        "Je connais la structure de la voie ferrée sur ballast (rail UIC 60, traverses, ballast, PFS)",
        "Je comprends le comportement thermique du Rail Long Soudé (LRS) et la température de libération",
        "Je maîtrise le critère de déraillement de Nadal (L/V)",
        "Je dimensionne la longueur de la parabole de raccordement de devers",
        "Je connais les principes de l'ERTMS / ETCS et de l'électrification caténaire 25 kV",
        "J'ai résolu les 3 exercices ferroviaires avec succès",
        "J'ai obtenu 3/3 au quiz d'ingénierie ferroviaire",
      ],
    },
  ],

  quickQuiz: {
    question: "Quelle est la formule du devers théorique d'équilibre d_th (en mm) pour une voie ferrée normale ?",
    options: [
      { id: 'a', label: "A) d_th = 11,8 · V² / R" },
      { id: 'b', label: "B) d_th = 127 · V / R²" },
      { id: 'c', label: "C) d_th = V² / (9,81 · R)" },
    ],
    correct: 'a',
    explanation: "La formule du devers théorique d'équilibre est d_th = 11,8 · V² / R (avec V en km/h et R en m), issue de l'équilibre de la force centrifuge pour un écartement d'appui e = 1500 mm.",
  },
};
