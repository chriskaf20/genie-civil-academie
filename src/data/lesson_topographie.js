// ── Lesson: Topographie, Géodésie & SIG — Module 22 ───────────────────────────
export const lesson_topographie = {
  moduleId: 22,
  slug: 'topographie',
  lessonIndex: 1,
  title: "Topographie, Géodésie, Positionnement GNSS & SIG",
  subtitle: "Module 22 — Topographie, Géodésie & SIG",
  level: 'Intermédiaire',
  duration: '40h',
  diagramType: 'trig_interactive',
  tags: ['Topographie', 'Géodésie', 'GNSS', 'Lambert-93', 'Nivellement', 'Station Totale', 'QGIS', 'SIG'],

  steps: [
    {
      id: 1,
      key: 'definition',
      title: "Définition — La Topographie et la Géodésie",
      icon: '📖',
      type: 'definition',
      fr: 'Topographie, Géodésie & Systèmes d\'Information Géographique',
      en: 'Topography, Geodesy & GIS Engineering',
      metier: "Pratiquée par les géomètres-experts, ingénieurs topographes, projeteurs SIG et chefs de brigade de levé. Indispensable au démarrage et au suivi de tout chantier de bâtiment, route, ouvrage d'art ou réseau VRD.",
      content: `La **topographie** est la science qui mesure, représente et implante sur le terrain les formes et détails visibles, naturels ou artificiels d'une portion de territoire.

### Les 3 disciplines complémentaires :
1. **La Topographie** : Mesures locales à grande échelle ($1/100$ à $1/5000$) négligeant la courbure terrestre (planéité locale). Instruments : Station Totale (tachéomètre), Niveau optique/électronique.
2. **La Géodésie** : Étude de la forme globale de la Terre (Géoïde, Ellipsoïde) et établissement des réseaux de repères géodésiques à grande échelle (Système **RGF93 / Lambert-93** en France, WGS84 mondial).
3. **Le SIG (Système d'Information Géographique)** : Outil informatique (QGIS, ArcGIS) combinant géométrie spatiale (vecteurs, rasters MNT) et bases de données attributaires.

### Les 3 opérations topographiques de base :
- **Le Levé** : Acquisition de coordonnées $(X, Y, Z)$ du terrain existant.
- **L'Implantation** : Matérialisation sur le terrain (piquets, chaises) des points du projet calculés sur ordinateur.
- **Le Nivellement** : Détermination des altitudes précises ($Z$) par rapport au zéro officiel (NGF-IGN69).

> 💡 **Précision requise** : Implantation de bâtiment/ouvrage d'art $= \\pm 2\\text{ mm}$ | Levé VRD $= \\pm 1\\text{ à } 2\\text{ cm}$ | Cartographie territoriale $= \\pm 10\\text{ cm}$.`,
    },

    {
      id: 2,
      key: 'importance',
      title: "Pourquoi la topographie est le point de départ de tout projet",
      icon: '⚠️',
      type: 'importance',
      content: `Aucune construction ne peut démarrer sans un levé topographique et un rattachement géodésique rigoureux.

- **Évitement du risque de ruine / empiètement** : Une erreur de nivellement de $10\\text{ cm}$ sur des fondations ou un réseau d'assainissement empêche l'écoulement gravitaire de l'eau.
- **Détection des réseaux enterrés (Règlement anti-endommagement)** : Géoréférencement des réseaux souterrains (Gaz, Électricité, Eau) en Classe A (précision $< 40\\text{ cm}$).
- **Calculs de cubatures de terrassement** : La comparaison des Modèles Numériques de Terrain (MNT avant/après) conditionne le bilan financier déblai/remblai du chantier.
- **Modernisation par Drone & LiDAR** : Acquisition de nuages de points de millions de coordonnées en quelques minutes pour modélisation BIM infrastructure (CIM).

> ⚠️ **Règle d'or** : "Toujours contrôler son cheminement par une fermeture." Un levé non fermé est un levé sans valeur juridique ni technique.`,
    },

    {
      id: 3,
      key: 'applications',
      title: "Applications terrain — Matériels & Méthodes topographiques",
      icon: '🏗️',
      type: 'applications',
      examples: [
        {
          context: "Levé et Implantation à la Station Totale (Tachéomètre)",
          text: "Mesure combinée d'angles horizontaux (Hz), verticaux (V) et de distances laser (EDM). Implantation millimétrique des axes de poteaux et voiles béton.",
        },
        {
          context: "Positionnement GNSS / GPS RTK (Temps Réel)",
          text: "Positionnement centimétrique immédiat ($X, Y, Z$) connecté au réseau de stations permanentes Orphéon/TERIA. Utilisé pour levés de grande emprise et terrassements guidés par GPS.",
        },
        {
          context: "Nivellement de précision au Niveau Numérique",
          text: "Lecture automatique sur mire à code-barres. Précision sub-millimétrique ($< 0{,}5\\text{ mm/km}$) pour la surveillance du tassement d'ouvrages d'art et dalles.",
        },
        {
          context: "Scanner Laser 3D (LiDAR Terrestre / Héliporté)",
          text: "Numérisation 3D de bâtiments anciens (Scan-to-BIM), tunnels, ponts ou carrières sous forme de nuages de points densifiés.",
        },
        {
          context: "Levé Photogrammétrique par Drone (UAV)",
          text: "Orthophotos haute résolution et Modèles Numériques de Surface (MNS) pour le suivi d'avancement de grands chantiers routiers ou ferroviaires.",
        },
        {
          context: "Intégration SIG & Cartographie numérique (QGIS)",
          text: "Superposition de cadastre vectoriel, plan PLU, réseaux VRD et MNT pour analyses d'impact environnemental et études de tracé.",
        },
      ],
    },

    {
      id: 4,
      key: 'theory',
      title: "Théorie — Géodésie, Projection Lambert-93 & Nivellement",
      icon: '📐',
      type: 'theory',
      diagramType: 'trig_interactive',
      content: `### 1. La Projection Conique Conforme Lambert-93 (France métropolitaine)

La Terre (modelée par l'ellipsoïde **IAG GRS80 / RGF93**) est projetée platement sur un cône tangent.

- Coordonnées planes : $X$ (Est) et $Y$ (Nord) exprimés en mètres.
- Origine fictive : $X_0 = 700\\,000\\text{ m}$, $Y_0 = 6\\,600\\,000\\text{ m}$ (près de Bordeaux).
- Les angles sont conservés (projection conforme), mais les distances subissent un module de déformation métrique $m$ qu'il faut corriger sur les longs tracés.

### 2. Le Nivellement Direct (Géométrique)

Détermination de la différence d'altitude $\\Delta H_{A \\to B}$ entre deux points $A$ et $B$ à l'aide d'un niveau optique et d'une mire graduée :

$$\\Delta H_{A \\to B} = L_{arrière} - L_{avant}$$

- $L_{arrière}$ = lecture sur la mire au point $A$ (visée arrière)
- $L_{avant}$ = lecture sur la mire au point $B$ (visée avant)

Altitude du point B :
$$H_B = H_A + \\Delta H_{A \\to B} = H_A + (L_{arrière} - L_{avant})$$

### 3. Cheminement encadré & Erreur de fermeture ($f_H$)

Pour garantir l'exactitude d'un nivellement entre deux repères connus $H_{départ}$ et $H_{arrivée}$ :

$$f_H = \\sum \\Delta H_{mesurés} - (H_{arrivée} - H_{départ}) \\le T_H = \\pm 2{,}5 \\cdot \\sigma \\cdot \\sqrt{L_{km}} \\quad [\\text{mm}]$$

Si la fermeture $f_H$ est inférieure à la tolérance $T_H$, l'erreur est compensée proportionnellement aux distances.`,
    },

    {
      id: 5,
      key: 'formulas',
      title: "Formules essentielles — Calculs Topographiques & Trigo",
      icon: '🔢',
      type: 'formulas',
      diagramType: 'trig_interactive',
      formulas: [
        {
          name: "Calcul des Coordonnées Polaires vers Rectangulaires",
          latex: "X_B = X_A + D_{h,AB} \\cdot \\sin(G_{AB}) \\qquad Y_B = Y_A + D_{h,AB} \\cdot \\cos(G_{AB})",
          description: "GAB = gisement de A vers B [en grades : 400 grads = 360°], Dh,AB = distance horizontale réduite à l'horizon.",
        },
        {
          name: "Calcul du Gisement G_AB à partir des coordonnées",
          latex: "G_{AB} = \\text{atan2}(X_B - X_A, Y_B - Y_A) \\quad [\\text{gon / grads}] \\qquad D_{h,AB} = \\sqrt{(X_B - X_A)^2 + (Y_B - Y_A)^2}",
          description: "Le gisement est l'angle orienté dans le sens horaire entre l'axe du Nord (Y) et la direction AB (0 à 400 grads).",
        },
        {
          name: "Nivellement trigonométrique (Station Totale)",
          latex: "\\Delta H_{AB} = D_i \\cdot \\cos(V) + h_{station} - h_{mire} = D_h \\cdot \\cot(V) + h_s - h_m",
          description: "Di = distance inclinée mesurée au laser, V = angle zénithal (0 grad au zénith, 100 grads à l'horizon), hs = hauteur de l'appareil, hm = hauteur du prisme.",
        },
        {
          name: "Correction de sphéricité et réfraction terrestre (Nivellement)",
          latex: "c_r = \\frac{(1 - k) \\cdot D_h^2}{2 \\cdot R_{Terre}} \\approx 0{,}067 \\cdot \\left(\\frac{D_h}{1000}\\right)^2 \\quad [\\text{m}]",
          description: "k ≈ 0,13 (coef de réfraction). Nécessaire pour les visées de nivellement de plus de 100 m (ou visées réciproques simultanées).",
        },
        {
          name: "Conversion Degrés <-> Grades (Gons)",
          latex: "1 \\text{ grad (gon)} = 0{,}9^\\circ = 54' \\qquad 400 \\text{ grads} = 360^\\circ = 2\\pi \\text{ rad}",
          description: "La topographie francophone travaille exclusivement en GRADES (gons) et canti-grades (cgon).",
        },
        {
          name: "Tolérance de fermeture géométrique de cheminement (T_H)",
          latex: "T_H = \\sigma_{unit} \\cdot \\sqrt{N_{stations}} \\quad [\\text{mm}] \\qquad T_H = 2{,}5 \\cdot \\sqrt{L_{km}} \\quad [\\text{mm}]",
          description: "Critère de rejet d'un cheminement de nivellement de précision selon les fascicules topographiques de l'IGN.",
        },
      ],
    },

    {
      id: 6,
      key: 'stepbystep',
      title: "Calcul complet — Cheminement de nivellement encadré & Compensation",
      icon: '🔬',
      type: 'stepbystep',
      problem: "Un cheminement de nivellement encadré relie le repère A (H_A = 124,500 m) au repère B (H_B = 127,150 m) en 4 portées. Longueur totale L = 800 m (0,8 km). Les dénivelées mesurées sont : ΔH1 = +1,240 m, ΔH2 = +0,850 m, ΔH3 = -0,320 m, ΔH4 = +0,890 m. 1) Calculer la somme des dénivelées mesurées. 2) Calculer l'erreur de fermeture f_H. 3) Vérifier la tolérance T_H = 2,5 · √L_km (en mm). 4) Calculer les dénivelées compensées et les altitudes finales.",
      steps_demo: [
        { n: 1, text: "Somme des dénivelées mesurées : ΣΔH_mes = +1,240 + 0,850 - 0,320 + 0,890 = +2,660 m" },
        { n: 2, text: "Dénivelée théorique exacte : ΔH_théo = H_B - H_A = 127,150 - 124,500 = +2,650 m" },
        { n: 3, text: "Erreur de fermeture f_H : f_H = ΣΔH_mes - ΔH_théo = 2,660 - 2,650 = +0,010 m = +10,0 mm" },
        { n: 4, text: "Calcul de la tolérance réglementaire : T_H = 2,5 × √0,8 = 2,5 × 0,8944 = 2,236 cm = 22,4 mm" },
        { n: 5, text: "Vérification : |f_H| = 10,0 mm ≤ T_H = 22,4 mm → Cheminement VALIDE et à compenser ✓" },
        { n: 6, text: "Compensation par portée (4 portées de longueur égale) : c = -f_H / 4 = -10,0 / 4 = -2,5 mm par portée" },
        { n: 7, text: "Dénivelées compensées : ΔH1'=+1,2375m | ΔH2'=+0,8475m | ΔH3'=-0,3225m | ΔH4'=+0,8875m → ΣΔH' = +2,6500 m ✓ (Altitude B = 127,150 m)" },
      ],
      result_latex: "f_H = \\textbf{+10{,}0 mm} \\le T_H = \\textbf{22{,}4 mm} \\qquad H_B = \\textbf{127{,}150 m} \\quad (\\text{Compensation } -2{,}5 \\text{ mm/portée}) \\quad \\checkmark",
    },

    {
      id: 7,
      key: 'units',
      title: "Unités en Topographie & Géodésie — Tableau de référence",
      icon: '📏',
      type: 'units',
      table: [
        { grandeur: "Angle horizontal / vertical", si: "Grade (gon / grad)", imperial: "Degré (° ' \") / Radian", conversion: "400 gon = 360° | 1 gon = 0,9° | 1 cgon = 0,009°" },
        { grandeur: "Coordonnées X, Y (Lambert-93)", si: "mètres [m]", imperial: "US Survey Feet", conversion: "RGF93 / Lambert-93 (EPSG:2154)" },
        { grandeur: "Altitude Z (NGF-IGN69)", si: "mètres [m]", imperial: "feet [ft]", conversion: "Zéro officiel français = marégraphe de Marseille" },
        { grandeur: "Gisement G", si: "grades (0 à 400 gon)", imperial: "Azimuth (0 à 360°)", conversion: "Angle horaire depuis l'axe Nord Y" },
        { grandeur: "Distance horizontale / inclinée", si: "mètres [m]", imperial: "feet [ft]", conversion: "1 m = 3,28084 ft" },
        { grandeur: "Précision millimétrique", si: "mm", imperial: "mils / inches", conversion: "1 mm = 0,001 m" },
      ],
      note: "⚠️ ATTENTION : Les topographes français et européens travaillent en GRADES (gons). Assurez-vous que vos calculatrices et logiciels (AutoCAD, Covadis) sont configurés en GRADS et non en degrés !",
    },

    {
      id: 8,
      key: 'hypotheses',
      title: "Hypothèses & conditions de validité",
      icon: '📋',
      type: 'hypotheses',
      items: [
        { type: 'info', text: "Sur des étendues < 10 km (chantier classique), la Terre peut être assimilée à un plan horizontal (erreur de courbure < 8 cm à 1 km, facilement corrigée)." },
        { type: 'info', text: "Le nivellement direct (géométrique) par visées équidistantes (L_arrière ≈ L_avant) annule automatiquement l'erreur de collimation du niveau et l'effet de réfraction atmosphérique !" },
        { type: 'warning', text: "ATTENTION : Ne jamais faire de visées de nivellement rasant le sol (< 0,50 m de hauteur de mire) ou en plein soleil zénithal — la réfraction thermique crée un mirage optique." },
        { type: 'warning', text: "Système GNSS (GPS RTK) : Mesure une hauteur ellipsoïdale h et non une altitude Nivellement Z (NGF). Il faut obligatoirement appliquer une grille de conversion géoïde (RAF09 / RAF20) : Z = h - N." },
        { type: 'tip', text: "Méthode des chaises d'implantation : Poser des chaises en bois rigides hors de l'emprise des fouilles à au moins 2 m des murs, et y marquer les axes au clou de géomètre." },
        { type: 'warning', text: "Tolérance des levés VRD (Arrêté Anti-Endommagement 2012) : Classe A (précision ≤ 40 cm pour réseaux rigides et ≤ 50 cm pour flexibles). Obligatoire pour tout recollement." },
      ],
    },

    {
      id: 9,
      key: 'simple_examples',
      title: "Exemples guidés — Calculs de gisement et trigonométrie",
      icon: '✏️',
      type: 'examples_simple',
      examples: [
        {
          title: "Exemple 1 : Calcul de distance et gisement entre 2 points",
          given: "Point A (X_A = 600 000,00 m, Y_A = 6 800 000,00 m) et Point B (X_B = 600 300,00 m, Y_B = 6 800 400,00 m)",
          find: "Distance horizontale D_AB et Gisement G_AB",
          solution_latex: "\\Delta X = 300{,}00 \\text{ m} \\quad \\Delta Y = 400{,}00 \\text{ m} \\quad D_{AB} = \\sqrt{300^2 + 400^2} = 500{,}00 \\text{ m}",
          result: "G_AB = atan(300 / 400) = atan(0,75) = 41,02 gon (1er quadrant : ΔX > 0, ΔY > 0) | Distance D_AB = 500,00 m.",
        },
        {
          title: "Exemple 2 : Nivellement trigonométrique à la Station Totale",
          given: "Distance inclinée D_i = 150,00 m, Angle zénithal V = 95,00 gon, Hauteur station h_s = 1,55 m, Hauteur prisme h_m = 1,80 m, Altitude A H_A = 50,00 m",
          find: "Altitude du point B H_B",
          solution_latex: "\\Delta H = D_i \\cdot \\cos(95 \\text{ gon}) + 1{,}55 - 1{,}80 = 150 \\cdot \\cos(85,5°) + 1{,}55 - 1{,}80 = 150 \\cdot 0{,}078459 + 1{,}55 - 1{,}80 = 11{,}77 + 1{,}55 - 1{,}80 = 11{,}52 \\text{ m}",
          result: "H_B = 50,00 + 11,52 = 61,52 m.",
        },
        {
          title: "Exemple 3 : Conversion de hauteur ellipsoïdale GPS en altitude NGF",
          given: "Relevé GNSS GPS RTK : Hauteur ellipsoïdale h = 185,42 m. Hauteur du géoïde RAF20 sur la zone N = 48,15 m.",
          find: "Altitude orthométrique Z_NGF",
          solution_latex: "Z_{NGF} = h - N = 185{,}42 - 48{,}15 = 137{,}27 \\text{ m}",
          result: "Z_NGF = 137,27 m (Altitude officielle rattachée au niveau moyen de la mer).",
        },
      ],
    },

    {
      id: 10,
      key: 'real_examples',
      title: "Exemple réel — Implantation d'un viaduc ferroviaire LGV",
      icon: '🏢',
      type: 'examples_real',
      diagramType: 'trig_interactive',
      examples: [
        {
          context: "Implantation des axes de piles — Viaduc LGV de 600 m",
          scenario: "Création d'un réseau de polygonale de haute précision (Canevas de chantier) composé de 6 bornes béton ancrées hors zone d'influence du chantier. Mesures croisées par Station Totale de précision (0,5 mgon, 1 mm + 1 ppm).",
          decomposition_latex: "\\text{Compensation des moindres carrés} \\quad \\Rightarrow \\quad \\sigma_{X,Y} = \\pm 1{,}2 \\text{ mm} \\quad \\sigma_Z = \\pm 0{,}8 \\text{ mm}",
          lesson: "Ce canevas d'appui a permis l'implantation des 12 chevêtres de piles avec un écart maximal de 2 mm par rapport à l'axe théorique du projet, évitant tout rattrapage sur les appareils d'appui néoprène.",
        },
      ],
    },

    {
      id: 11,
      key: 'diagrams',
      title: "Schéma topographique — Mesures angulaires & Nivellement",
      icon: '📊',
      type: 'interactive_diagram',
      diagramType: 'trig_interactive',
      description: "Visualisez le principe du nivellement direct (visée arrière et avant sur mire graduée) et le système des coordonnées polaires (Gisement G, Angle zénithal V, Distance inclinée et projection horizontale).",
      diagram_description: [
        "Schéma du nivellement direct : Niveau optique, visée arrière Larrière, visée avant Lavant, axe optique horizontal",
        "Repère de gisement (0 gon au Nord) et conversion des coordonnées polaires vers Lambert-93",
        "Principe de la mire à code-barres et du niveau électronique à déclenchement automatique",
      ],
    },

    {
      id: 12,
      key: 'mistakes',
      title: "Erreurs classiques & pièges en Topographie",
      icon: '⛔',
      type: 'mistakes',
      items: [
        {
          mistake: "Oublier de vérifier la hauteur du prisme ou de la station (h_s / h_m)",
          trap: "Changer la hauteur de canne du prisme (ex: passer de 1,80 m à 2,15 m pour éviter un obstacle) sans modifier la valeur dans le carnet de terrain du tachéomètre",
          fix: "Erreur systématique directe de 35 cm sur toutes les altitudes Z calculées ! Toujours vérifier et verrouiller la hauteur de canne avant chaque série de mesures.",
        },
        {
          mistake: "Travailler en degrés au lieu de grades (gons)",
          trap: "Saisir des coordonnées ou gisements dans Covadis / QGIS configuré en degrés décimaux alors que les données terrain sont en gons",
          fix: "400 gons = 360° (1 gon = 0,9°). Une confusion entre 50 gons et 50° crée une erreur angulaire massive de 5° (soit 8,7 m d'écart à 100 m !).",
        },
        {
          mistake: "Oublier d'appliquer la grille du géoïde sur un relevé GPS",
          trap: "Utiliser directement la hauteur h donnée par le récepteur GPS comme altitude Z du projet",
          fix: "En France, h (ellipsoïde) et Z (NGF) diffèrent de 40 à 55 mètres ! Il faut impérativement charger le modèle de géoïde RAF20 dans le carnet de terrain GNSS.",
        },
        {
          mistake: "Ne pas fermer un cheminement de nivellement",
          trap: "Partir d'un point connu A, faire 10 visées vers le chantier sans revenir sur un point connu B ou sur le point A",
          fix: "Un cheminement ouvert ne permet pas de détecter une erreur de lecture sur mire ou un glissement de trepied. Règle absolue : Toujours FERMER le cheminement.",
        },
      ],
    },

    {
      id: 13,
      key: 'tips',
      title: "Astuces du géomètre — Terrain & Bureaux d'Études",
      icon: '💡',
      type: 'tips',
      tips: [
        "Méthode des visées égales (Nivellement) : En plaçant le niveau à égale distance de la mire arrière et avant ($d_{arr} \\approx d_{av}$), l'erreur de collimation de l'appareil s'annule à 100% !",
        "Quadrants de gisement : Si $\\Delta X > 0, \\Delta Y > 0 \\to G$ (1er quad) ; Si $\\Delta X > 0, \\Delta Y < 0 \\to G = 200 + \\text{atan}$ (2ème quad) ; Si $\\Delta X < 0, \\Delta Y < 0 \\to G = 200 + \\text{atan}$ (3ème quad) ; Si $\\Delta X < 0, \\Delta Y > 0 \\to G = 400 + \\text{atan}$ (4ème quad).",
        "Réseau GNSS RTK : Pour obtenir une précision centimétrique en RTK, s'assurer d'avoir au moins 7 à 9 satellites visibles avec un PDOP < 2,5.",
        "Implantation de précision (Voiles / Poteaux) : Ne jamais implanter directement depuis une station GNSS. Implanter toujours depuis une station totale installée sur une polygonale polygonée fermée.",
        "Projections Lambert-93 vs CC9 zones : Pour les très grands chantiers linéaires (autoroutes, TGV), utiliser les projections coniques conformes 9 zones (CC42 à CC50) qui réduisent l'altération linéaire à < 1 cm/km.",
        "SIG QGIS : Outil gratuit et puissant pour croiser le cadastre (cadastre.data.gouv.fr), les données d'altimétrie MNT Lidar HD de l'IGN et les plans de réseaux DXF/DWG.",
      ],
    },

    {
      id: 14,
      key: 'normes',
      title: "Normes & Références — Topographie & Géodésie",
      icon: '📜',
      type: 'norms',
      norms: [
        { code: "Arrêté du 16 septembre 2003", description: "Classes de précision des levés topographiques rattachés au réseau géodésique national (RGF93)." },
        { code: "Décret n° 2011-1241 (Anti-Endommagement)", description: "Réglementation sur les investigations complémentaires et le géoréférencement des réseaux enterrés (Classes A, B, C)." },
        { code: "IGN - RGF93 / Lambert-93 (EPSG 2154)", description: "Système géodésique officiel et projection légale pour la France métropolitaine." },
        { code: "Grille de géoïde RAF20 (IGN)", description: "Grille officielle de conversion entre hauteur ellipsoïdale GNSS et altitude Nivellement Général de la France (NGF-IGN69)." },
        { code: "Fascicule 2 des recommandations AFT/OGE", description: "Guide de rédaction des clauses topographiques pour les marchés publics d'infrastructures." },
        { code: "ISO 17123 (Parties 1 à 8)", description: "Optique et instruments d'optique — Procédures d'essai sur le terrain pour les instruments topographiques (niveaux, théodolites, distancemètres)." },
      ],
    },

    {
      id: 15,
      key: 'exercises',
      title: "Exercices Topographie & Géodésie — 3 niveaux",
      icon: '✍️',
      type: 'exercises',
      exercises: [
        {
          id: 'ex_top_1',
          number: 1,
          difficulty: 'Facile',
          text: "Convertir un angle de 45,0000 grades (gons) en degrés décimaux (°).",
          hint: "1 gon = 0,9°.",
          answer_latex: "\\theta_{deg} = 45{,}0000 \\times 0{,}9 = 40{,}50^\\circ \\quad (40^\\circ 30')",
          answer_text: "45,0000 gons = 40,50° (40° 30')",
        },
        {
          id: 'ex_top_2',
          number: 2,
          difficulty: 'Moyen',
          text: "Un niveau optique effectue une visée arrière sur la mire A (lecture L_arr = 1,845 m, altitude H_A = 42,350 m) puis une visée avant sur la mire B (lecture L_av = 0,615 m). Calculer l'altitude H_B.",
          hint: "ΔH = L_arr - L_av. H_B = H_A + ΔH.",
          answer_latex: "\\Delta H_{AB} = 1{,}845 - 0{,}615 = +1{,}230 \\text{ m} \\qquad H_B = 42{,}350 + 1{,}230 = 43{,}580 \\text{ m}",
          answer_text: "H_B = 43,580 m",
        },
        {
          id: 'ex_top_3',
          number: 3,
          difficulty: 'Difficile',
          text: "Soient les points P1 (X=100,00 m, Y=200,00 m) et P2 (X=180,00 m, Y=120,00 m). Calculer la distance horizontale D_12 et le gisement G_12 (en gons).",
          hint: "ΔX = 80 m, ΔY = -80 m. Le point est dans le 2ème quadrant (ΔX > 0, ΔY < 0). G = 200 + atan(ΔX / ΔY).",
          answer_latex: "D_{12} = \\sqrt{80^2 + (-80)^2} = \\sqrt{12800} = 113{,}14 \\text{ m} \\qquad G_{12} = 200 + \\text{atan}\\left(\\frac{80}{-80}\\right) = 200 - 50{,}00 = 150{,}00 \\text{ gon}",
          answer_text: "Distance D_12 = 113,14 m | Gisement G_12 = 150,00 gon (Direction Sud-Est).",
        },
      ],
    },

    {
      id: 16,
      key: 'corrections',
      title: "Corrections détaillées",
      icon: '✅',
      type: 'corrections',
      note: "Retrouvez les formules complètes, schémas de gisements et compensations géométriques en cliquant sur 'Voir la correction'.",
    },

    {
      id: 17,
      key: 'quiz',
      title: "Quiz Topographie & Géodésie — 3 questions",
      icon: '🎯',
      type: 'quiz',
      questions: [
        {
          id: 'q_top_1',
          question: "Quel est l'angle équivalent en degrés (°) pour un angle de 100 grades (gons) ?",
          options: [
            { id: 'a', text: "45°" },
            { id: 'b', text: "90° (Angle droit)" },
            { id: 'c', text: "100°" },
            { id: 'd', text: "180°" },
          ],
          correct: 'b',
          explanation: "Un cercle complet comprend 400 grades (gons) ou 360°. Ainsi, 100 grades correspondent exactement à 90° (un angle droit).",
        },
        {
          id: 'q_top_2',
          question: "Pourquoi privilégie-t-on la méthode des visées égales (distance arrière = distance avant) en nivellement direct ?",
          options: [
            { id: 'a', text: "Pour marcher moins sur le chantier" },
            { id: 'b', text: "Parce que cela annule automatiquement l'erreur de collimation de l'appareil et la réfraction terrestre" },
            { id: 'c', text: "Pour utiliser la même mire" },
            { id: 'd', text: "C'est une obligation du fabricant" },
          ],
          correct: 'b',
          explanation: "En conservant des distances visée arrière et visée avant égales (D_arr ≈ D_av), l'erreur d'inclinaison de l'axe optique (collimation) et l'effet de réfraction s'ajoutent et se soustraient à l'identique, s'annulant parfaitement dans le calcul de dénivelée ΔH = L_arr - L_av.",
        },
        {
          id: 'q_top_3',
          question: "Quel système de projection cartographique est la référence officielle légale en France métropolitaine ?",
          options: [
            { id: 'a', text: "WGS84 UTM Zone 31N" },
            { id: 'b', text: "Lambert-93 (RGF93 / EPSG 2154)" },
            { id: 'c', text: "Lambert I Nord" },
            { id: 'd', text: "Mercator Transverse" },
          ],
          correct: 'b',
          explanation: "Le système RGF93 associé à la projection Conique Conforme Lambert-93 (EPSG:2154) est le système officiel obligatoire depuis le décret de 2000 pour toutes les données géographiques publiques et travaux topographiques en France métropolitaine.",
        },
      ],
    },

    {
      id: 18,
      key: 'exam_questions',
      title: "Questions d'examen — Niveau BTS/Licence Topographie",
      icon: '🎓',
      type: 'exam',
      questions: [
        "Démontrez la méthode de compensation d'un cheminement polygonale encadré (fermeture angulaire et fermeture planimétrique FX, FY). Expliquez la répartition des erreurs selon la règle de Bowditch.",
        "Présentez le principe du positionnement satellite GNSS RTK (Real Time Kinematic). Expliquez la différence entre hauteur ellipsoïdale h, altitude orthométrique Z et ondulation du géoïde N.",
        "Détaillez le fonctionnement d'un scanner laser 3D (LiDAR). Comment s'effectue le recalle de nuages de points par la méthode des sphères / cibles ou par l'algorithme ICP (Iterative Closest Point) ?",
        "Expliquez la structure de données d'un Système d'Information Géographique (SIG) : différence entre modèle Vectoriel (Points, Lignes, Polygones) et modèle Raster (MNT, Orthophoto), et décrivez une requête spatiale d'intersection.",
      ],
    },

    {
      id: 19,
      key: 'interview_questions',
      title: "Questions d'entretien — Géomètre-Topographe / Projeteur",
      icon: '💼',
      type: 'interview',
      questions: [
        {
          question: "Sur un chantier de terrassement, le chef de chantier soutient que votre altitude d'implantation est fausse de 45 mètres par rapport à son GPS de chantier. Que s'est-il passé ?",
          answer_hint: "Son GPS autonome ou mal configuré affiche la hauteur ellipsoïdale h au lieu de l'altitude Z rattachée au géoïde NGF-IGN69. L'ondulation du géoïde N en France métropolitaine vaut environ 45 à 52 mètres. Lui expliquer la conversion Z = h - N et reconfigurer son carnet GNSS avec la grille RAF20.",
        },
        {
          question: "Quelle est la différence entre le nivellement direct (géométrique) et le nivellement indirect (trigonométrique) ?",
          answer_hint: "Nivellement direct : Mesure de dénivelée par visées horizontales sur mire avec un niveau (très haute précision, sub-millimétrique). Nivellement indirect : Mesure de dénivelée par calcul trigonométrique à la Station Totale (ΔH = Di · cos(V) + hs - hm) — plus rapide sur terrain accidenté mais sensible à la précision des angles et à la réfraction.",
        },
        {
          question: "Comment vérifiez-vous le réglage de collimation d'un niveau optique sur le terrain (Test des 4 points / méthode d'Egault) ?",
          answer_hint: "Poser deux mires A et B séparées de 50 m. Placer le niveau au milieu (25 m) et mesurer ΔH1 (dénivelée exacte grâce aux visées égales). Déplacer ensuite le niveau à 5 m de la mire A et mesurer ΔH2. Si ΔH1 ≠ ΔH2, l'axe optique n'est pas horizontal → régler la vis de reticule.",
        },
      ],
    },

    {
      id: 20,
      key: 'practical_case',
      title: "Cas pratique — Levé et implantation d'une ZAC",
      icon: '🔧',
      type: 'practical',
      scenario: "Étude de cas — Levé topographique et géoréférencement d'une ZAC de 8 hectares pour création d'un réseau VRD",
      description: `**Mise en situation** : Bureau d'études topographiques. Levé de corps de rue et création du MNT d'une zone industrielle de 8 ha. Rattachement RGF93 / Lambert-93 par station pivot GNSS RTK et polygonale fermée de 8 sommets.`,
      resolution_latex_1: "\\text{Polygonale fermée (8 sommets, L = 1 200 m) : } F_{angulaire} = 1{,}2 \\text{ mgon} \\le T_{ang} = 2{,}5 \\text{ mgon}",
      resolution_latex_2: "F_{planim\\acute{e}trique} = \\sqrt{F_X^2 + F_Y^2} = \\sqrt{8^2 + 6^2} = 10 \\text{ mm} \\le T_{plan} = 25 \\text{ mm}",
      resolution_latex_3: "\\text{Création du MNT sous Covadis par triangulation Delaunay (12 500 points levés au drone + station total)}",
      conclusion: "MNT et plan topographique restitués en Classe A (précision planimétrique < 2 cm, altimétrique < 1,5 cm). Fichiers DWG/GeoJSON et MNT rattachés au Lambert-93 prêts pour le projet d'assainissement et terrassement.",
    },

    {
      id: 21,
      key: 'summary',
      title: "Résumé exécutif — Topographie en 6 points",
      icon: '📋',
      type: 'summary',
      content: `### La Topographie en 6 fondamentaux

1. **Systèmes de Coordonnées** : RGF93 / Lambert-93 (X, Y en mètres, 400 gons) + Altitude NGF-IGN69 (Z).
2. **Nivellement Direct** : $\\Delta H = L_{arrière} - L_{avant}$ — visées équidistantes pour annuler la collimation.
3. **Cheminement & Tolérance** : Tout levé doit être fermé — $f_H \\le T_H = 2{,}5 \\sqrt{L_{km}}$ [mm].
4. **Coordonnées Polaires vers Rectangulaires** : $X_B = X_A + D_h \\sin(G)$, $Y_B = Y_A + D_h \\cos(G)$.
5. **GNSS / GPS RTK** : Positionnement centimétrique immédiat — appliquer la grille géoïde $Z = h - N$.
6. **SIG & Cartographie** : QGIS/Covadis — croisement des couches vectorielles, rasters MNT et nuages de points LiDAR.`,
    },

    {
      id: 22,
      key: 'key_points',
      title: "Points clés à mémoriser — Topographie",
      icon: '⭐',
      type: 'keypoints',
      points: [
        "Unité angulaire topographique = Grade (gon) : 400 gons = 360° | 1 gon = 0,9°",
        "Nivellement direct : ΔH = L_arrière - L_avant | Altitude HB = HA + ΔH",
        "Gisement G_AB : angle horaire depuis le Nord Y (0 à 400 gons)",
        "Projection officielle France = Lambert-93 (RGF93 / EPSG:2154)",
        "GPS RTK mesure la hauteur ellipsoïdale h → convertir en altitude NGF : Z = h - N",
        "Visées équidistantes en nivellement (D_arr = D_av) annulent l'erreur de collimation",
        "Réglementation Anti-Endommagement : Réseaux enterrés géoréférencés en Classe A (≤ 40 cm)",
      ],
    },

    {
      id: 23,
      key: 'self_assessment',
      title: "Auto-évaluation — Topographie, Géodésie & SIG",
      icon: '🏆',
      type: 'self_assessment',
      description: "Validez vos compétences en topographie et SIG :",
      objectives: [
        "Je sais convertir les angles entre degrés et grades (gons)",
        "Je maîtrise le calcul de dénivelée en nivellement direct (L_arrière - L_avant)",
        "Je sais calculer et compenser l'erreur de fermeture d'un cheminement de nivellement encadré",
        "Je sais calculer les coordonnées X, Y à partir d'une distance et d'un gisement",
        "Je comprends la différence entre hauteur ellipsoïdale GPS et altitude orthométrique NGF",
        "Je connais la projection légale Lambert-93 (RGF93)",
        "J'ai résolu les 3 exercices topographiques avec succès",
        "J'ai obtenu 3/3 au quiz de topographie",
      ],
    },
  ],

  quickQuiz: {
    question: "Quelle formule donne la dénivelée ΔH entre le point A et le point B lors d'une portée de nivellement direct ?",
    options: [
      { id: 'a', label: "A) ΔH = L_avant - L_arrière" },
      { id: 'b', label: "B) ΔH = L_arrière - L_avant" },
      { id: 'c', label: "C) ΔH = L_arrière × L_avant" },
    ],
    correct: 'b',
    explanation: "La dénivelée est donnée par ΔH = L_arrière - L_avant. Si la lecture arrière sur le point A est supérieure à la lecture avant sur le point B, le terrain monte (ΔH > 0).",
  },
};
