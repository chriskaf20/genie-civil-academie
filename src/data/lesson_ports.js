// ── Lesson: Ingénierie Maritime & Portuaire — Module 20 ────────────────────────
export const lesson_ports = {
  moduleId: 20,
  slug: 'ports',
  lessonIndex: 1,
  title: "Conception, Ouvrages Maritimes & Dynamique Côtière",
  subtitle: "Module 20 — Ingénierie Maritime & Portuaire",
  level: 'Avancé',
  duration: '40h',
  diagramType: 'bridge_structure',
  tags: ['Ports', 'Houle', 'Accropode', 'Quais', 'Hudson', 'Palplanches', 'Béton marin', 'Hydrodynamique'],

  steps: [
    {
      id: 1,
      key: 'definition',
      title: "Définition — L'Ingénierie Maritime & Portuaire",
      icon: '📖',
      type: 'definition',
      fr: 'Ingénierie Maritime, Portuaire & Génie Côtier',
      en: 'Port, Coastal & Maritime Engineering',
      metier: "Pratiquée par les ingénieurs maritimes, hydrauliciens côtiers, experts du Cetmef/Cerema, projeteurs portuaires et grands groupes de travaux maritimes (Bouygues Travaux Publics, VINCI Construction Maritime).",
      content: `L'**ingénierie maritime et portuaire** est la branche du génie civil traitant du **dimensionnement des ouvrages de protection côtière, des infrastructures d'accostage et des aménagements portuaires** soumis à l'action de la mer (houle, marées, courants, salinité).

### Les 3 grands types d'ouvrages maritimes :
1. **Ouvrages de protection (Défense contre la mer)** :
   - **Digues à talus** : Massif d'enrochements protégé par une carapace de blocs de béton artificiels (Accropode™, Cubipod, Xbloc) absorbant l'énergie des vagues.
   - **Digues verticales** : Caissons étanches en béton armé posés sur un soubassement en enrochements, réfléchissant l'énergie de la houle.
2. **Ouvrages d'accostage et d meulage (Quais & Appontements)** :
   - **Quais massifs / Parois moulées / Rideaux de palplanches** : Retiennent le sol des terres plein et résistent au poussées des remblais et charges des portiques.
   - **Quais sur pieux** : Plateforme en béton sur pieux tubulaires en acier ancrés dans le fond marin.
   - **Ducs d'Albe (Dolphins)** : Pieu massif ou groupe de pieux isolés assurant le guidage ou l'amarrage des navires.
3. **Ouvrages de franchissement & Chenaux** : Chenaux de navigation dragués, bassins d'évolutions, écluses maritimes.

> 💡 **Le défi maritime** : Concevoir des ouvrages résistant à des forces de choc de vagues de plusieurs centaines de kN/m² tout en assurant une durabilité de 50 à 100 ans en milieu hautement corrosif.`,
    },

    {
      id: 2,
      key: 'importance',
      title: "Pourquoi l'ingénierie maritime est d'une grande complexité",
      icon: '⚠️',
      type: 'importance',
      content: `L'océan est un milieu **dynamique, hostile et hautement stochastique**. 90% du commerce mondial de marchandises transite par la mer.

- **Puissance des tempêtes** : Des vagues de $10\\text{ à } 15\\text{ m}$ de hauteur frappent les digues avec des énergies de plusieurs mégajoules, déplaçant des blocs de $30\\text{ tonnes}$.
- **Corrosion agressive & Biodétérioration** : La zone de marnage (mouillage/séchage alternatif) corrode l'acier jusqu'à $0{,}5\\text{ mm/an}$ et dégrade le béton par réaction sulfatique.
- **Réchauffement climatique & Élévation du niveau de la mer** : Les digues actuelles doivent être conçues pour absorber une hausse du niveau marin de $+0{,}5\\text{ à } +1{,}0\\text{ m}$ à l'horizon 2100.
- **Transport solide & Érosion du littoral** : La dérive littorale déplace des millions de m³ de sable par an, causant l'engravement des port et l'érosion des plages.

> ⚠️ **Règle d'or** : En ingénierie maritime, **on ne lutte pas contre la mer, on coopère avec elle**. Les carapaces de digues à forte porosité (ex: Accropode™) dissipent la houle par frottement plutôt que par choc direct.`,
    },

    {
      id: 3,
      key: 'applications',
      title: "Applications terrain — Projets maritimes majeurs",
      icon: '🏗️',
      type: 'applications',
      examples: [
        {
          context: "Digues de protection portuaire (ex: Port de Tanger Med / Le Havre)",
          text: "Construction de digues à talus de $2\\text{ à } 4\\text{ km}$ de long en eau profonde ($h = 20-30\\text{ m}$) avec carapace en blocs Accropode II™ de 15 à 30 tonnes.",
        },
        {
          context: "Terminaux à conteneurs (Quais lourds)",
          text: "Quais en rideau mixte (pieux-palplanches HZ) de $18-22\\text{ m}$ de tirant d'eau pour recevoir les ultra-grands porte-conteneurs ($24\\,000\\text{ EVP}$).",
        },
        {
          context: "Appontements pétroliers et méthaniers (GNL)",
          text: "Plateformes légères sur pieux avec ducs d'albe d'amarrage et d'accostage équipés de défenses élastomères (Fenders coniques de $2\\text{ m}$ de diamètre).",
        },
        {
          context: "Aménagement d'éoliennes en mer (Offshore Wind)",
          text: "Fondations maritimes lourdes : monopieux en acier (Ø 8 à 10 m), embases gravitaires en béton ou jackets métalliques sous $40-60\\text{ m}$ d'eau.",
        },
        {
          context: "Dragage d'entretien et d'approfondissement",
          text: "Extraction de millions de m³ de sédiments par drague à désagrégateur (Cutter) ou drague aspiratrice en marche pour maintenir le tirant d'eau.",
        },
        {
          context: "Rechargement de plages & Épis côtiers",
          text: "Ouvrages de protection du littoral contre l'érosion marine (épis en enrochement, brise-lames détachés émergés/immergés).",
        },
      ],
    },

    {
      id: 4,
      key: 'theory',
      title: "Théorie — La Houle & la Formule de Hudson",
      icon: '📐',
      type: 'theory',
      diagramType: 'bridge_structure',
      content: `### 1. Théorie linéaire de la houle (Théorie d'Airy)

Une houle régulière est caractérisée par sa hauteur $H$ (crête à creux), sa période $T$ (secondes) et la profondeur d'eau $d$.

En eau profonde ($d > L/2$), la longueur d'onde $L_0$ et la célérité $c_0$ valent :

$$L_0 = \\frac{g \\cdot T^2}{2\\pi} \\approx 1{,}56 \\cdot T^2 \\quad [\\text{m}] \\qquad c_0 = \\frac{g \\cdot T}{2\\pi} \\approx 1{,}56 \\cdot T \\quad [\\text{m/s}]$$

### 2. Le dimensionnement des carapaces de digue (Formule de Hudson)

La masse minimale $M$ d'un bloc d'enrochement ou de béton artificiel pour résister à une hauteur de houle de projet $H_s$ s'exprime par la **formule de Hudson** :

$$M = \\frac{\\rho_r \\cdot H_s^3}{K_D \\cdot \\left(\\frac{\\rho_r}{\\rho_w} - 1\\right)^3 \\cdot \\cot(\\alpha)}$$

- $M$ = masse minimale du bloc [tonnes ou kg]
- $\\rho_r$ = masse volumique du matériau du bloc [t/m³] (béton $\\approx 2{,}4\\text{ t/m}^3$, enrochement $\\approx 2{,}65\\text{ t/m}^3$)
- $\\rho_w$ = masse volumique de l'eau de mer ($1{,}025\\text{ t/m}^3$)
- $H_s$ = hauteur significative de la houle de projet en pied d'ouvrage [m]
- $\\alpha$ = angle du talus de la digue par rapport à l'horizontale
- $K_D$ = coefficient de stabilité d'Hudson (dépend de la forme du bloc et du taux de dommage toléré).

> **Valeurs de $K_D$ (pour 2 couches)** : Enrochements naturels non taillés ($K_D \\approx 2{,}0-4{,}0$), Blocs Cubiques ($K_D \\approx 6{,}5$), **Accropode™ / Xbloc (monocouche)** ($K_D \\approx 12 - 16$). Un $K_D$ élevé réduit considérablement la masse de béton nécessaire !`,
    },

    {
      id: 5,
      key: 'formulas',
      title: "Formules essentielles — Génie Maritime & Côtier",
      icon: '🔢',
      type: 'formulas',
      diagramType: 'bridge_structure',
      formulas: [
        {
          name: "Masse minimale de bloc de carapace (Hudson)",
          latex: "M = \\frac{\\rho_r \\cdot H_s^3}{K_D \\cdot \\Delta^3 \\cdot \\cot\\alpha} \\quad \\text{avec } \\Delta = \\frac{\\rho_r}{\\rho_w} - 1",
          description: "Hs = hauteur significative (moyenne du tiers des vagues les plus hautes), Δ = densité déjaugée du bloc (Δ ≈ 1,34 pour le béton dans l'eau de mer), α = angle du talus (souvent cot α = 1,5 soit 3H:2V).",
        },
        {
          name: "Hauteur de franchissement / Revanchement de digue (R_c)",
          latex: "R_c = z_{cr\\hat{e}te} - z_{PMVE} \\ge (1{,}2 \\text{ à } 1{,}5) \\cdot H_s",
          description: "zPMVE = niveau des Plus Hautes Mers d'Énergie / Astronomique, Rc = revanchement. Garantit un taux de franchissement (Overtopping) admissible.",
        },
        {
          name: "Pression d'impact d'une vague sur paroi verticale (Goda)",
          latex: "p_1 = \\frac{1}{2} \\cdot (1 + \\cos\\beta) \\cdot (\\alpha_1 + \\alpha_2 \\cdot \\cos^2\\beta) \\cdot \\rho_w \\cdot g \\cdot H_s",
          description: "Formule de Goda pour le calcul de la distribution des pressions de houle sur une digue verticale à caisson.",
        },
        {
          name: "Énergie d'accostage d'un navire (E_k)",
          latex: "E_k = \\frac{1}{2} \\cdot M_D \\cdot v_a^2 \\cdot C_e \\cdot C_m \\cdot C_c \\cdot C_s",
          description: "MD = masse de déplacement du navire [tonnes], va = vitesse d'accostage perpendiculaire au quai (0,10 à 0,30 m/s), Ce = coef d'excentricité, Cm = coef de masse d'eau ajoutée (1,5 à 2,0).",
        },
        {
          name: "Effort d'amarrage sur bollard (F_b)",
          latex: "F_b = F_{vent} + F_{courant} = \\frac{1}{2} \\rho_{air} C_x A_v V_{vent}^2 + \\frac{1}{2} \\rho_w C_y A_i V_{courant}^2",
          description: "Calcul de l'effort de traction exercé par les amarres du navire sur les bollards du quai (capacité courante 50 à 200 tonnes).",
        },
        {
          name: "Dérive littorale — Transport de sable (Formule CBM / CERC)",
          latex: "Q_l = K \\cdot \\frac{\\rho_w \\cdot g^{1/2}}{16 \\cdot \\sqrt{\\gamma_b} \\cdot (\\rho_s - \\rho_w) \\cdot (1 - n)} \\cdot H_{sb}^{5/2} \\cdot \\sin(2\\alpha_b)",
          description: "Ql = débit volumique de sable transporté parallèlement à la côte [m³/an], Hsb = hauteur de vague au déferlement, αb = angle de déferlement.",
        },
      ],
    },

    {
      id: 6,
      key: 'stepbystep',
      title: "Calcul complet — Poids des blocs Accropode™ pour une digue de tempête",
      icon: '🔬',
      type: 'stepbystep',
      problem: "On dimensionne la carapace d'une digue à talus soumise à une houle centennale de projet H_s = 6,5 m. Le talus a une pente cot(α) = 1,5 (pente 1V:1,5H). Le matériau retenu est un bloc en béton artificiel de type Accropode II™ de masse volumique ρr = 2,40 t/m³. La masse volumique de l'eau de mer est ρw = 1,025 t/m³. Le coefficient de stabilité d'Hudson retenu pour l'Accropode II™ en monocouche est K_D = 15,0. Calculer : 1) La densité relative déjaugée Δ. 2) La masse minimale M d'un bloc. 3) Le volume V du bloc.",
      steps_demo: [
        { n: 1, text: "Calcul de la densité déjaugée Δ : Δ = (ρr / ρw) - 1 = (2,40 / 1,025) - 1 = 2,3415 - 1 = 1,3415" },
        { n: 2, text: "Calcul de Δ³ : Δ³ = 1,3415³ = 2,414" },
        { n: 3, text: "Calcul du numérateur de la formule de Hudson : Num = ρr × Hs³ = 2,40 × 6,5³ = 2,40 × 274,625 = 659,10" },
        { n: 4, text: "Calcul du dénominateur : Dén = K_D × Δ³ × cot(α) = 15,0 × 2,414 × 1,5 = 54,315" },
        { n: 5, text: "Calcul de la masse minimale du bloc M : M = Num / Dén = 659,10 / 54,315 = 12,135 tonnes" },
        { n: 6, text: "Calcul du volume équivalent du bloc V : V = M / ρr = 12,135 / 2,40 = 5,056 m³" },
        { n: 7, text: "Retenir la catégorie commerciale standard supérieure : Blocs Accropode II™ de 6,3 m³ (soit M = 15,1 tonnes)." },
      ],
      result_latex: "\\Delta = 1{,}3415 \\qquad M_{min} = \\textbf{12,14 tonnes} \\qquad V_{retenu} = \\textbf{6,3 m}^3 \\quad (M = 15{,}1 \\text{ t}) \\quad \\checkmark",
    },

    {
      id: 7,
      key: 'units',
      title: "Unités en Ingénierie Maritime & Portuaire — Tableau de référence",
      icon: '📏',
      type: 'units',
      table: [
        { grandeur: "Hauteur de houle H_s / H_max", si: "mètres [m]", imperial: "feet [ft]", conversion: "1 m = 3,281 ft" },
        { grandeur: "Période de la houle T", si: "secondes [s]", imperial: "seconds [s]", conversion: "Périodes courantes : 6 à 18 s" },
        { grandeur: "Tirant d'eau / Cote Z", si: "mètres ZH (Zéro Hydrographique)", imperial: "ft CD (Chart Datum)", conversion: "ZH = niveau des plus basses mers astronomiques" },
        { grandeur: "Masse des blocs de carapace", si: "tonnes [t]", imperial: "short tons / lbs", conversion: "1 tonne = 1000 kg = 2204,6 lbs" },
        { grandeur: "Énergie d'accostage E_k", si: "kJ ou kN·m", imperial: "ft-kips", conversion: "1 kJ = 1 kN·m = 0,7376 ft-kips" },
        { grandeur: "Force sur bollard / fender", si: "kN ou tonnes-force [t]", imperial: "kips", conversion: "100 t ≈ 1000 kN = 224,8 kips" },
        { grandeur: "Débit de transport solide Ql", si: "m³/an", imperial: "cubic yards/year", conversion: "1 m³ = 1,308 yd³" },
      ],
      note: "⚠️ ATTENTION : Les cotes altimétriques maritimes se réfèrent au **Zéro Hydrographique (ZH)** (niveau de la plus basse mer théorique), tandis que le génie civil terrestre utilise le Zéro NGF. En France, ZERO NGF ≈ ZH + 2,50 m à 4,00 m selon les ports !",
    },

    {
      id: 8,
      key: 'hypotheses',
      title: "Hypothèses & conditions de validité",
      icon: '📋',
      type: 'hypotheses',
      items: [
        { type: 'info', text: "La formule de Hudson s'applique pour des houles régulières ou significatives Hs sur des digues à talus non franchissables (déferlement sur la carapace)." },
        { type: 'info', text: "Les carapaces modernes monocouches (Accropode™, Xbloc) nécessitent une pose contrôlée par système GPS/SONAR avec un taux d'imbrication strict pour assurer leur autoblocage." },
        { type: 'warning', text: "ATTENTION : Ne jamais négliger l'effet des sous-pressions sous les dalles d'un quai ou sous les caissons d'une digue verticale lors des creux de marée." },
        { type: 'warning', text: "Le phénomène d'affouillement au pied des digues verticales est extrêmement violent : la réflexion de la houle crée un clapotis qui remet les sédiments en suspension et déchausse l'ouvrage." },
        { type: 'tip', text: "Règle des zones de corrosion (Eurocode 3-5) : La zone de marnage (mouillage/séchage) est la plus critique (corrosion jusqu'à 0,30-0,50 mm/an). Prévoir une sur-épaisseur d'acier de sacrification ou une protection cathodique par anodes sacrificielles en aluminium/zinc." },
        { type: 'warning', text: "Béton en milieu marin (NF EN 206) : Classes d'exposition XS1 (air salin), XS2 (immergé permanent), XS3 (marnage/projections). Utiliser impérativement des ciment PM-ES (Prise Mer - Eaux Sulfatées) avec E/C ≤ 0,40." },
      ],
    },

    {
      id: 9,
      key: 'simple_examples',
      title: "Exemples guidés — Calculs maritimes",
      icon: '✏️',
      type: 'examples_simple',
      examples: [
        {
          title: "Exemple 1 : Célérité et longueur d'onde en eau profonde",
          given: "Houle de tempête de période T = 10 secondes en eau profonde (d > 100 m)",
          find: "Longueur d'onde L0 et vitesse de propagation c0",
          solution_latex: "L_0 = 1{,}56 \\times 10^2 = 156 \\text{ m} \\qquad c_0 = 1{,}56 \\times 10 = 15{,}6 \\text{ m/s} \\quad (56{,}16 \\text{ km/h})",
          result: "L0 = 156 m | c0 = 15,6 m/s (56 km/h) — La vague se déplace à plus de 50 km/h en pleine mer !",
        },
        {
          title: "Exemple 2 : Énergie d'accostage d'un navire porte-conteneurs",
          given: "Navire de déplacement MD = 50 000 tonnes, vitesse d'accostage va = 0,15 m/s, coefficient combiné Ce·Cm·Cc = 1,40",
          find: "Énergie cinétique d'accostage Ek à absorber par les défenses (fenders)",
          solution_latex: "E_k = \\frac{1}{2} \\times 50\\,000 \\times 0{,}15^2 \\times 1{,}40 = 25\\,000 \\times 0{,}0225 \\times 1{,}40 = 787{,}5 \\text{ kJ}",
          result: "Ek = 788 kJ → Sélection de 2 défenses cônes en caoutchouc capables d'absorber chacune 400 kJ.",
        },
        {
          title: "Exemple 3 : Épaisseur de sacrification d'une palplanche en acier sur 50 ans",
          given: "Rideau de palplanches en zone de marnage (vitesse de corrosion v_corr = 0,25 mm/an sans protection)",
          find: "Perte d'épaisseur totale e_loss sur 50 ans de durée de service",
          solution_latex: "e_{loss} = 0{,}25 \\text{ mm/an} \\times 50 \\text{ ans} = 12{,}5 \\text{ mm}",
          result: "Perte d'épaisseur = 12,5 mm → Ajouter 12,5 mm d'acier à l'épaisseur de calcul ou installer une protection cathodique.",
        },
      ],
    },

    {
      id: 10,
      key: 'real_examples',
      title: "Exemple réel — Extension du Port de Tanger Med II",
      icon: '🏢',
      type: 'examples_real',
      diagramType: 'bridge_structure',
      examples: [
        {
          context: "Port Tanger Med II (Maroc) — Digue principale de 3,8 km par 30 m de fond",
          scenario: "Conception d'une digue à talus mixte protégée par une carapace en blocs Accropode II™ de 18 m³ (43 tonnes). Houle de projet centennale Hs = 9,0 m. Pose contrôlée par système sous-marin Echosondeur Multibeam 3D.",
          decomposition_latex: "K_D = 15 \\quad M_{bloc} = 43 \\text{ tonnes} \\quad \\Rightarrow \\quad \\text{Rendement de pose : 120 blocs/jour par barge}",
          lesson: "La stabilité de la carapace a été validée sur modèle réduit hydraulique à l'échelle 1/50 en bassin à vagues au laboratoire de Delft Hydraulics. Aucun déplacement de bloc sous la tempête de projet.",
        },
      ],
    },

    {
      id: 11,
      key: 'diagrams',
      title: "Schéma d'une digue à talus & d'un quai en rideau de palplanches",
      icon: '📊',
      type: 'interactive_diagram',
      diagramType: 'bridge_structure',
      description: "Visualisez la coupe transversale d'une digue à talus (noyau en tout-venant, sous-couche en enrochements, carapace Accropode™, mur de couronnement) et d'un quai maritime (rideau de palplanches, tirant d'ancrage, poutre de couronnement et défenses d'accostage).",
      diagram_description: [
        "Coupe de la digue à talus : Noyau, filtres, carapace amont, mur parapet en béton",
        "Coupe du quai en palplanches : Rideau d'acier, tirant d'ancrage, rideau arrière, tirant d'eau au zéro hydrographique",
        "Distribution des pressions de houle de Goda sur parement vertical",
      ],
    },

    {
      id: 12,
      key: 'mistakes',
      title: "Erreurs fatales en Ingénierie Maritime",
      icon: '⛔',
      type: 'mistakes',
      items: [
        {
          mistake: "Négliger le phénomène d'affouillement au pied des carapaces et quais",
          trap: "Oublier de poser une butée de pied d'enrochements ou un tapis d'enrochements anti-affouillement",
          fix: "Le déferlement et le retrait de la vague creusent le lit de sable au pied du talus. La carapace glisse et s'effondre. Toujours ancrer le pied de carapace dans une tranchée ou poser une butée de pied massive.",
        },
        {
          mistake: "Mauvais taux d'imbrication des blocs artificiels (Accropode / Xbloc)",
          trap: "Poser les blocs de carapace de manière trop lâche sans respect de la densité de pose au m²",
          fix: "Les blocs monocouches tirent 80% de leur stabilité de leur engrenage géométrique mutuel. Poser sous contrôle GPS tridimensionnel avec tolérance de positionnement < 20 cm.",
        },
        {
          mistake: "Confondre Zéro Hydrographique (ZH) et Zéro NGF",
          trap: "Commander des pieux de quai basés sur les cotes NGF sans faire la conversion vers le Zéro Hydrographique",
          fix: "Le Zéro Hydrographique est le niveau des plus basses mers. Les profondeurs de dragage (tirant d'eau) sont toujours exprimées par rapport au ZH. Vérifier le rattrapage altimétrique local.",
        },
        {
          mistake: "Utiliser un béton standard C30/37 en zone de marnage marin",
          trap: "Utiliser un béton sans ciment résistant aux sulfates (CEM I classique) et avec enrobage standard de 30 mm",
          fix: "La corrosion par les ions chlorures attaque les aciers à grande vitesse. Utiliser du ciment PM-ES (CEM III/A ou CEM V), E/C ≤ 0,40 et enrobage minimal c_min ≥ 50 à 70 mm.",
        },
      ],
    },

    {
      id: 13,
      key: 'tips',
      title: "Astuces de l'ingénieur maritime — Terrain & CETMEF/CEREMA",
      icon: '💡',
      type: 'tips',
      tips: [
        "Recommandations ROSOSA / ROC (Cerema) : Les guides français officiels pour le dimensionnement des ouvrages maritimes et la stabilité des digues.",
        "Essais en bassin à vagues (Modèles réduits) : Indispensable pour tout projet d'ouvrage d'art maritime majeur. Les modèles réduits à l'échelle 1/40 ou 1/60 reproduisent la houle aléatoire réaliste (spectre de JONSWAP).",
        "Choix des défenses d'accostage (Fenders) : Les défenses coniques en caoutchouc (Cone Fenders) offrent le meilleur ratio énergie absorbée / réaction transmise au quai.",
        "Protection cathodique par courant imposé (ICCP) ou anodes sacrificielles : Protège à 100% les structures métalliques immergées (palplanches, pieux) contre la corrosion électrochimique.",
        "Mur de couronnement de digue : Un muret en béton armé en crête de digue réduit les franchissements tout en réduisant le volume global de la carapace.",
        "Tirant d'eau admissible d'un navire : Drape = Profondeur d'eau au ZH + Marée minimale - Tirant d'eau navire - Squat (enfoncement dynamique du navire en marche) - Pied de pilote (marge de sécurité ~ 0,5 à 1,0 m).",
      ],
    },

    {
      id: 14,
      key: 'normes',
      title: "Normes & Références — Génie Maritime & Portuaire",
      icon: '📜',
      type: 'norms',
      norms: [
        { code: "Rock Manual (CIRIA / CUR / CETMEF)", description: "Le manuel de référence international (1300 pages) pour l'utilisation des enrochements et blocs artificiels en ingénierie hydraulique et maritime." },
        { code: "BS 6349 (Parties 1 à 8)", description: "British Standard for Maritime Works — La norme européenne de référence pour la conception des ports, quais, digues et défenses." },
        { code: "PIANC / AIPCN", description: "Association Internationale de Navigation — Recommandations pour les dimensions des chenaux, quais et défenses d'accostage." },
        { code: "NF EN 1993-5 (Eurocode 3-5)", description: "Calcul des structures en acier — Pieux et palplanches maritimes." },
        { code: "NF EN 206/CN (Classes XS1-XS3)", description: "Béton — Spécifications pour bétons exposés au milieu marin (Ciment PM-ES)." },
        { code: "Guides CEREMA / CETMEF", description: "Notice sur les ouvrages maritimes, dimensionnement des digues à talus et stabilité des carapaces." },
      ],
    },

    {
      id: 15,
      key: 'exercises',
      title: "Exercices Ingénierie Maritime & Portuaire — 3 niveaux",
      icon: '✍️',
      type: 'exercises',
      exercises: [
        {
          id: 'ex_por_1',
          number: 1,
          difficulty: 'Facile',
          text: "Calculez la longueur d'onde en eau profonde L0 d'une houle de période T = 8 secondes.",
          hint: "L0 = 1,56 · T² (en mètres).",
          answer_latex: "L_0 = 1{,}56 \\times 8^2 = 1{,}56 \\times 64 = 99{,}84 \\text{ m} \\approx 100 \\text{ m}",
          answer_text: "L0 ≈ 100 m",
        },
        {
          id: 'ex_por_2',
          number: 2,
          difficulty: 'Moyen',
          text: "Une carapace de digue est constituée d'enrochements naturels (ρr = 2,65 t/m³) sur un talus de pente cot(α) = 2,0. La houle de projet est Hs = 4,0 m. Pour un coefficient d'Hudson KD = 3,5 et ρw = 1,025 t/m³, calculez la masse minimale M d'un bloc d'enrochement.",
          hint: "Δ = (2,65/1,025) - 1 = 1,585. M = (ρr · Hs³) / (KD · Δ³ · cot α).",
          answer_latex: "\\Delta = 1{,}5853 \\quad \\Delta^3 = 3{,}983 \\qquad M = \\frac{2{,}65 \\times 4{,}0^3}{3{,}5 \\times 3{,}983 \\times 2{,}0} = \\frac{169{,}60}{27{,}88} = 6{,}08 \\text{ tonnes}",
          answer_text: "M = 6,08 tonnes (Enrochements de classe 6–10 tonnes requis).",
        },
        {
          id: 'ex_por_3',
          number: 3,
          difficulty: 'Difficile',
          text: "Un navire méthanier de déplacement MD = 80 000 tonnes accoste à une vitesse perpendiculaire va = 0,12 m/s. Le coefficient global d'excentricité et de masse d'eau ajoutée vaut C_total = 1,50. Calculez l'énergie cinétique d'accostage Ek. Si 2 défenses identiques absorbent cette énergie à 50% chacune, quelle doit être la capacité d'absorption minimale d'une défense ?",
          hint: "Ek = 0,5 · MD · va² · C_total. E_def = Ek / 2.",
          answer_latex: "E_k = \\frac{1}{2} \\times 80\\,000 \\times 0{,}12^2 \\times 1{,}50 = 40\\,000 \\times 0{,}0144 \\times 1{,}50 = 864 \\text{ kJ} \\qquad E_{def} = \\frac{864}{2} = 432 \\text{ kJ}",
          answer_text: "Ek = 864 kJ total → Capacité minimale requise par défense = 432 kJ.",
        },
      ],
    },

    {
      id: 16,
      key: 'corrections',
      title: "Corrections détaillées",
      icon: '✅',
      type: 'corrections',
      note: "Retrouvez les formules complètes, schémas et justifications maritimes en cliquant sur 'Voir la correction'.",
    },

    {
      id: 17,
      key: 'quiz',
      title: "Quiz Ingénierie Maritime & Portuaire — 3 questions",
      icon: '🎯',
      type: 'quiz',
      questions: [
        {
          id: 'q_por_1',
          question: "Pourquoi privilégie-t-on les blocs de béton artificiels à forte porosité (ex: Accropode™) pour les carapaces de digues en forte houle ?",
          options: [
            { id: 'a', text: "Parce qu'ils coûtent moins cher que le sable" },
            { id: 'b', text: "Parce que leur forme géométrique autobloquante à fort coefficient KD dissipent l'énergie de la houle par frottement interne tout en réduisant la masse globale de béton nécessaire" },
            { id: 'c', text: "Parce qu'ils sont totalement invisibles sous l'eau" },
            { id: 'd', text: "Pour empêcher les poissons d'approcher du port" },
          ],
          correct: 'b',
          explanation: "Les blocs artificiels comme l'Accropode™ ont un coefficient de stabilité KD de 12 à 16 (contre 2 à 4 pour les enrochements). Leur enchevêtrement parfait dissipe l'énergie par porosité et réduit la masse unitaire requise d'un facteur 3 à 4.",
        },
        {
          id: 'q_por_2',
          question: "Quelle zone d'un ouvrage métallique ou en béton en mer subit la vitesse de corrosion et de dégradation la plus élevée ?",
          options: [
            { id: 'a', text: "La zone immergée profonde près du fond marin" },
            { id: 'b', text: "La zone de marnage (mouillage et séchage alternés par la marée)" },
            { id: 'c', text: "La zone située 50 m à l'intérieur des terres" },
            { id: 'd', text: "La cabine du portique de manutention" },
          ],
          correct: 'b',
          explanation: "La zone de marnage (et de projections de sédiments/eau) combine un apport permanent d'oxygène, d'humidité et d'ions chlorures. C'est la zone où l'acier se corrode le plus vite (jusqu'à 0,5 mm/an) et où le béton s'écailler le plus rapidement.",
        },
        {
          id: 'q_por_3',
          question: "Par rapport à quel niveau de référence altimétrique les profondeurs d'eau et tirants d'eau maritimes sont-ils mesurés ?",
          options: [
            { id: 'a', text: "Le Zéro NGF (Nivellement Général de la France)" },
            { id: 'b', text: "Le Zéro Hydrographique (ZH — niveau des plus basses mers théoriques)" },
            { id: 'c', text: "Le sommet de la plus haute digue" },
            { id: 'd', text: "Le niveau moyen du centre de la Terre" },
          ],
          correct: 'b',
          explanation: "Les cartes marines et tirants d'eau maritimes utilisent le Zéro Hydrographique (ZH) qui correspond aux plus basses mers astronomiques (coefficient 120), garantissant ainsi au marin que la profondeur d'eau réelle sera quasi-toujours supérieure à la cote de la carte.",
        },
      ],
    },

    {
      id: 18,
      key: 'exam_questions',
      title: "Questions d'examen — Niveau Master Génie Maritime",
      icon: '🎓',
      type: 'exam',
      questions: [
        "Démontrez la formule de Hudson à partir de l'équilibre des forces agissant sur un bloc de carapace soumis au déferlement d'une vague. Expliquez l'influence de la densité déjaugée Δ et du coefficient K_D.",
        "Comparez les caractéristiques structurelles et hydrauliques d'une digue à talus et d'une digue verticale à caissons. Quels sont les risques d'affouillement spécifiques aux digues verticales sous clapotis ?",
        "Détaillez le dimensionnement d'un quai en rideau mixte (pieux-palplanches) d'un port à conteneurs sous $20\\text{ m}$ de tirant d'eau : poussée des terres (Rankine/Coulomb), effet des surcharges de portiques, calcul des tirants d'ancrage et fichage.",
        "Expliquez le phénomène de dérive littorale. Comment dimensionne-t-on un champ d'épis en enrochements pour stabiliser un segment de côte érodé sans affamer le littoral situé en aval ?",
      ],
    },

    {
      id: 19,
      key: 'interview_questions',
      title: "Questions d'entretien — Ingénieur Maritime / Portuaire",
      icon: '💼',
      type: 'interview',
      questions: [
        {
          question: "Lors de la pose d'une carapace en Accropode II™ sur chantier, le contrôleur vidéo sous-marin remarque un 'trou' de pose où 2 blocs ne se touchent pas. Quelle est votre décision ?",
          answer_hint: "Refus de la section et ré-imbrication immédiate de la zone ! Un trou dans la carapace détruit l'autoblocage mutuel des blocs. Sous la première tempête, le bloc adjacent va basculer dans le vide, entraînant la déchaussée en cascade de toute la carapace.",
        },
        {
          question: "Quelle formule ou méthode utilisez-vous pour évaluer la réfraction et le déferlement de la houle à l'approche de la côte ?",
          answer_hint: "Théorie de la houle en profondeur faible/intermédiaire (Loi de Green pour la réfraction $H/H_0 = (c_0 / 2c_g)^{1/2}$, critère de déferlement de McCowan $H_b / d_b \\approx 0{,}78$). En bureau d'études, on utilise des modèles numériques de propagation de houle comme SWAN, TOMAWAC ou MIKE 21.",
        },
        {
          question: "Comment protégez-vous un rideau de palplanches métalliques contre la corrosion en milieu marin sur 50 ans ?",
          answer_hint: "Combinaison de 3 systèmes : 1. Sur-épaisseur d'acier de sacrification calculée selon EC3-5 (ex: +6 à 10 mm). 2. Revêtement époxy polyuréthane hautes performances appliqué en usine sur la zone de marnage. 3. Protection cathodique par courant imposé (ICCP) ou anodes sacrificielles en aluminium pour la zone immergée sous le niveau bas de marée.",
        },
      ],
    },

    {
      id: 20,
      key: 'practical_case',
      title: "Cas pratique — Conception d'un quai à conteneurs lourd",
      icon: '🔧',
      type: 'practical',
      scenario: "Étude de cas — Quai de 450 m pour navires de 18 000 EVP (Tirant d'eau 16,5 m)",
      description: `**Mise en situation** : Bureau d'études maritime. Conception d'un quai en rideau mixte (pieux tubulaires Ø 1420 mm e=22 mm + palplanches d'intercalage Z) sous une surcharge de portique de 80 t/m. Ancrage par tirants passifs inclinés sur dalles arrières.`,
      resolution_latex_1: "\\text{Poussée des terres + Surcharge portique : } E_a = 1\\,850 \\text{ kN/m}",
      resolution_latex_2: "\\text{Traction dans les tirants (espacés de 2,80 m) : } F_{tirant} = 1\\,850 \\times 2{,}80 \\times 0{,}65 = 3\\,367 \\text{ kN/tirant}",
      resolution_latex_3: "\\text{Vérification acier tirants (Acier 355 MPa, Ø 100 mm) : } \\sigma = \\frac{3\\,367\\,000}{\\pi \\times 50^2} = 428 \\text{ MPa} \\implies \\text{Utiliser acier 500 MPa}",
      conclusion: "Tirants en acier à haute limite élastique Ø 105 mm (fyk = 500 MPa) retenus. Protection par anodes sacrificielles en zinc calibrées pour 30 ans. Dalle de roulement portique de 80 cm en béton armé.",
    },

    {
      id: 21,
      key: 'summary',
      title: "Résumé exécutif — Ingénierie Maritime en 6 points",
      icon: '📋',
      type: 'summary',
      content: `### L'Ingénierie Maritime en 6 fondamentaux

1. **La Houle** : Théorie d'Airy — $L_0 = 1{,}56 T^2$, $c_0 = 1{,}56 T$ en eau profonde.
2. **Formule de Hudson** : $M = \\frac{\\rho_r H_s^3}{K_D \\Delta^3 \\cot\\alpha}$ — dimensionne la masse des blocs de carapace.
3. **Blocs Artificiels** : Accropode™ / Xbloc ($K_D = 12-16$) — dissipation par porosité et engrenage autobloquant.
4. **Quais & Appontements** : Quais massifs, rideaux mixtes (pieux-palplanches) ou quais sur pieux ancrés.
5. **Accostage & Amarrage** : Énergie cinétique $E_k = \\frac{1}{2} M_D v_a^2 C_{tot}$ absorbée par les défenses élastomères.
6. **Durabilité & Corrosion** : Zéro Hydrographique (ZH), protection cathodique, ciments PM-ES (XS1-XS3), sur-épaisseur d'acier.`,
    },

    {
      id: 22,
      key: 'key_points',
      title: "Points clés à mémoriser — Ports & Mer",
      icon: '⭐',
      type: 'keypoints',
      points: [
        "Hudson : M = (ρr·Hs³) / (KD·Δ³·cot α) — équation fondamentale des carapaces de digue",
        "Accropode™ (monocouche, KD = 15) vs Enrochement naturel (KD = 2 à 4)",
        "Zéro Hydrographique (ZH) = référence altimétrique des cartes maritimes (plus basses mers)",
        "Zone de marnage (mouillage/séchage) = zone de corrosion maximale de l'acier (0,3–0,5 mm/an)",
        "Béton marin (XS1-XS3) : Ciment PM-ES, E/C ≤ 0,40, enrobage des aciers c_min ≥ 50 mm",
        "Formule d'Hudson : augmenter la densité du bloc ρr réduit fortement la masse M nécessaire (effet au cube Δ³)",
        "Défenses d'accostage (Fenders) : convertissent l'énergie cinétique du navire Ek en force de réaction sur le quai",
      ],
    },

    {
      id: 23,
      key: 'self_assessment',
      title: "Auto-évaluation — Ingénierie Maritime & Portuaire",
      icon: '🏆',
      type: 'self_assessment',
      description: "Validez vos compétences en travaux maritimes et côtiers :",
      objectives: [
        "Je sais calculer les caractéristiques d'une houle en eau profonde (longueur d'onde L0, célérité c0)",
        "Je maîtrise la formule d'Hudson pour dimensionner la masse M des blocs de carapace de digue",
        "Je comprends l'intérêt mécanique des blocs artificiels monocouches type Accropode™ (KD = 15)",
        "Je sais calculer l'énergie cinétique d'accostage d'un navire Ek et dimensionner les défenses",
        "Je connais les différents types de quais (palplanches, paroi moulée, pieux) et leur domaine",
        "Je maîtrise les règles de durabilité du béton et de protection contre la corrosion marine",
        "J'ai résolu les 3 exercices maritimes avec succès",
        "J'ai obtenu 3/3 au quiz d'ingénierie maritime et portuaire",
      ],
    },
  ],

  quickQuiz: {
    question: "Pourquoi privilégie-t-on les blocs de béton artificiels autobloquants (ex: Accropode™) pour les digues soumises à de fortes houles ?",
    options: [
      { id: 'a', label: "A) Parce qu'ils sont moins chers que le sable" },
      { id: 'b', label: "B) Grâce à leur KD élevé (12-16) et leur engrenage, ils réduisent fortement la masse unitaire de béton nécessaire" },
      { id: 'c', label: "C) Pour empêcher les bateaux de s'approcher du port" },
    ],
    correct: 'b',
    explanation: "Le coefficient de stabilité KD de l'Accropode (12-16) est 4 fois supérieur à celui des enrochements naturels (2-4), réduisant la masse unitaire requise par la formule de Hudson et assurant une dissipation optimale de la houle par porosité.",
  },
};
