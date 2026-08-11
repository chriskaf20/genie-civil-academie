// ── Lesson: Dessin Technique & Lecture de Plans — Module 04 ───────────────────
export const lesson_dessin = {
  moduleId: 4,
  slug: 'dessin',
  lessonIndex: 1,
  title: "Dessin Technique, Cotation & Lecture de Plans de BTP",
  subtitle: "Module 04 — Dessin Technique & Lecture de Plans",
  level: 'Débutant',
  duration: '30h',
  diagramType: 'bridge_structure',
  tags: ['Dessin', 'Plans', 'Cotation', 'Coffrage', 'Ferraillage', 'Coupes', 'ISO 128', 'Échelles'],

  steps: [
    {
      id: 1,
      key: 'definition',
      title: "Définition — Le Dessin Technique en Génie Civil",
      icon: '📖',
      type: 'definition',
      fr: 'Dessin Technique, Conventions & Lecture de Plans',
      en: 'Technical Drawing & Blueprint Reading',
      metier: "Pratiquée par les dessinateurs-projeteurs, techniciens d'études BTP, métreurs et chefs de chantier. Le dessin technique est le **langage universel et contractuel** qui relie la conception de l'architecte/ingénieur à l'exécution sur le chantier.",
      content: `Le **dessin technique** est la représentation graphique normalisée d'un ouvrage, d'un bâtiment ou d'une pièce de structure, permettant sa compréhension sans ambiguïté.

### Les 4 grands types de plans de bâtiment & génie civil :
1. **Plans d'Architecture (Plans d'Exécution / Permis de Construire)** : Vues en plan des niveaux (RDC, R+1), façades, coupes et toiture avec cotation des espaces et aménagements.
2. **Plans de Coffrage (Béton Armé)** : Représentation brute des éléments porteurs en béton armé (voiles, poteaux, poutres, dalles, semelles) sans les armatures. C'est le "moule" à réaliser par le coffreur.
3. **Plans d'Armatures / Ferraillage** : Représentation détaillée des barres d'acier (haute adhérence HA, treillis soudé TS) disposées à l'intérieur du coffrage avec la **tableau de nomenclature des aciers**.
4. **Plans de Masse & Réseaux (VRD)** : Implantation de l'ouvrage sur le terrain avec courbes de niveau, altimétrie NGF et raccordements aux réseaux.

> 💡 **Le principe de la coupe** : Une **vue en plan** est une coupe horizontale effectuée conventionnellement à **1,00 m au-dessus du sol fini** (ou au niveau des baies).`,
    },

    {
      id: 2,
      key: 'importance',
      title: "Pourquoi la lecture de plans est une compétence clé",
      icon: '⚠️',
      type: 'importance',
      content: `Un plan mal lu ou mal coté sur chantier entraîne des erreurs d'exécution irréversibles et des démolitions coûteuses.

- **Valeur contractuelle** : Les plans BON POUR EXÉCUTION (BPE) visés par le bureau d'études font foi en cas de litige juridique.
- **Erreurs de réservations** : Oublier la cotation d'un trémie d'ascenseur ou d'un gaine technique exige un carottage ultérieur très cher au scellage.
- **Conformité des armatures** : Inverser les aciers chapeaux (en haut sur appui) et les aciers tendus de travée (en bas) provoque l'effondrement de la dalle dès le décoffrage.
- **Communication de chantier** : Permet au chef de chantier d'organiser l'approvisionnement en matériaux et la chronologie des tâches.

> ⚠️ **Règle d'or** : "Ne jamais mesurer une cote à la règle sur un plan papier !" Seules les **cotes chiffrées écrites** font foi. Si une cote manque, la faire valider par le projeteur.`,
    },

    {
      id: 3,
      key: 'applications',
      title: "Applications terrain — Typologies et symboles",
      icon: '🏗️',
      type: 'applications',
      examples: [
        {
          context: "Plan de Coffrage de Plancher (Échelle 1/50)",
          text: "Représentation des poutres (traits continus forts), des voiles vus (traits forts), des poteaux coupés (pochés ou hachurés) et des dalles avec indication d'épaisseur $h = 20\\text{ cm}$.",
        },
        {
          context: "Plan de Ferraillage de Poutre (Échelle 1/20 ou 1/10)",
          text: "Elévation de la poutre montrant les filants bas $3HA16$, les chapeaux sur appuis $2HA20$, les cadres et étriers $\\Phi 8$ avec pas d'espacement $e = 15\\text{ cm}$.",
        },
        {
          context: "Coupe Verticale sur Façade (Échelle 1/20)",
          text: "Détail du complexe d'isolation (ITI ou ITE), du rupteur de pont thermique, du linteau et de la bavette d'étanchéité sous menuiserie.",
        },
        {
          context: "Plan de Terrassement & Profils en Long/Travers",
          text: "Découpage du terrain naturel (TN) et du projet (PR) avec cotation des cotes projet, cotes terrain et hauteurs de déblai/remblai.",
        },
        {
          context: "Carnet de Détails d'Étanchéité / Acrotère",
          text: "Schéma d'exécution des relevés d'étanchéité bitumineuse sur acrotère béton avec isolant thermique et engravure d'arrêt d'étanchéité.",
        },
        {
          context: "Plan de Réseaux VRD (AEP, EU, EP, Telecom)",
          text: "Tracé des canalisations avec diamètres (Ø 200 mm), pentes (0,5%), sens d'écoulement (flèches) et altitudes radier des regards de visite.",
        },
      ],
    },

    {
      id: 4,
      key: 'theory',
      title: "Théorie — Trait, Échelles, Hachures & Cotation (ISO 128)",
      icon: '📐',
      type: 'theory',
      diagramType: 'bridge_structure',
      content: `### 1. Types de traits conventionnels (NF EN ISO 128)

| Type de trait | Aspect graphique | Utilisation en Dessin BTP |
|---------------|------------------|---------------------------|
| **Continu fort** | ─── (0,5 - 0,7 mm) | Contours vus d'éléments coupés (voiles, poteaux) |
| **Continu fin** | ─── (0,2 - 0,25 mm) | Lignes de cote, hachures, lignes d'attache |
| **Interrompu fin (Pointillé)** | - - - - (0,3 mm) | Contours cachés (arêtes sous dalle, semelles) |
| **Mixte fin (Trait-point)** | ── · ── · ── | Axes de symétrie, axes de poteaux, plans de coupe |
| **Mixte fort aux extrémités** | ── · ── (épais amont) | Tracé des plans de coupe (AA, BB) |

### 2. Les hachures conventionnelles par matériau

- **Béton armé** : Hachures fines à 45° doublées d'un trait discontinu (ou quadrillage).
- **Béton non armé / Gros béton** : Hachures simples inclinées à 45° en trait fin.
- **Terre / Terrain naturel** : Hachures groupées par 3 traits perpendiculaires au profil.
- **Isolation thermique** : Motif en zig-zag ou serpentin continu.
- **Acier / Métal** : Pochage noir continu ou hachures croisées très serrées.

### 3. Les échelles usuelles du BTP
- **Situation / Plan de masse** : $1/1000$ ou $1/500$ ($1\\text{ cm sur plan} = 10\\text{ m ou } 5\\text{ m}$).
- **Plans d'ensemble (Bâtiment)** : $1/100$ ou $1/50$ ($1\\text{ cm sur plan} = 1\\text{ m ou } 0{,}5\\text{ m}$).
- **Plans de détail & Ferraillage** : $1/20$, $1/10$ ou $1/5$ ($1\\text{ cm sur plan} = 20\\text{ cm ou } 10\\text{ cm}$).`,
    },

    {
      id: 5,
      key: 'formulas',
      title: "Formules essentielles — Échelles, Pentes & Niveaux",
      icon: '🔢',
      type: 'formulas',
      diagramType: 'bridge_structure',
      formulas: [
        {
          name: "Calcul de la dimension réelle à partir de l'échelle",
          latex: "\\text{Dimension R\\acute{e}elle} = \\text{Dimension Mesur\\acute{e}e sur plan} \\times \\text{D\\acute{e}nominateur de l'\\acute{E}chelle}",
          description: "Ex: Sur un plan au 1/50, une mesure papier de 4,5 cm correspond à : 4,5 cm × 50 = 225 cm = 2,25 m réels.",
        },
        {
          name: "Calcul de la pente d'un versant de toiture ou canalisation",
          latex: "Pente (\\%) = \\frac{\\Delta Z}{D_h} \\times 100 = \\frac{Z_{haut} - Z_{bas}}{D_h} \\times 100",
          description: "ΔZ = différence d'altitude entre les deux points [m], Dh = distance horizontale [m]. Ex: ΔZ = 0,15 m sur Dh = 5,0 m → Pente = 3,0%.",
        },
        {
          name: "Symboles d'altitude / Niveaux de référence (Cotation NGF)",
          latex: "\\text{Niveau Brut (Béton)} = +12{,}450 \\text{ m} \\qquad \\text{Niveau Fini (Carrelage)} = +12{,}500 \\text{ m}",
          description: "Symbolisé par un triangle noir sur le plan (niveau fini) ou contourné (brut). Altitude zéro = repère du niveau de référence du projet (ex: 0.00 = +45.20 NGF).",
        },
        {
          name: "Cotation des baies et ouvertures (L × H / S)",
          latex: "\\text{Cotation baie } : \\frac{L_{largeur}}{H_{hauteur}} \\quad \\text{avec } S_{all\\grave{e}ge} \\quad \\text{Ex: } \\frac{120}{140} \\quad (S = 90)",
          description: "120 cm de largeur brute, 140 cm de hauteur brute, allège (hauteur sous baie) de 90 cm par rapport au sol fini.",
        },
        {
          name: "Masse surfacique du treillis soudé (TS)",
          latex: "M_{TS} = m_{surfacique} \\times A_{surface} \\quad [\\text{kg}]",
          description: "Ex: Treillis ST25C (m = 3,02 kg/m²). Pour une dalle de 150 m² avec recouvrement 10% (165 m²) : M = 3,02 × 165 = 498,3 kg.",
        },
        {
          name: "Longueur développée d'une barre d'armature façonnée (L_dev)",
          latex: "L_{dev} = A + B + C - (n_{coudes} \\cdot 2\\Phi)",
          description: "Somme des longueurs droites des brins A, B, C sous déduction des racourcissements aux coudes de pliage.",
        },
      ],
    },

    {
      id: 6,
      key: 'stepbystep',
      title: "Calcul complet — Métré de coffrage & Ferraillage d'un voilier béton armé",
      icon: '🔬',
      type: 'stepbystep',
      problem: "Lecture d'un plan de coffrage et ferraillage d'un voile en béton armé (longueur L = 6,00 m, hauteur H = 2,80 m, épaisseur e = 0,20 m). Le plan indique des armatures verticales 2 lits HA12 espacées de e_v = 15 cm et des armatures horizontales HA10 espacées de e_h = 20 cm. Calculer : 1) La surface de coffrage S_coff. 2) Le volume de béton V_beton. 3) Le nombre et le métré linéaire total des barres verticales.",
      steps_demo: [
        { n: 1, text: "Surface de coffrage des 2 faces du voile : S_coff = 2 × (L × H) = 2 × (6,00 × 2,80) = 2 × 16,80 = 33,60 m²" },
        { n: 2, text: "Volume de béton brut du voile : V_beton = L × H × e = 6,00 × 2,80 × 0,20 = 3,36 m³" },
        { n: 3, text: "Nombre d'intervalles verticaux : N_int = L / e_v = 6,00 / 0,15 = 40 intervalles" },
        { n: 4, text: "Nombre de barres par lit : N_barres/lit = N_int + 1 = 40 + 1 = 41 barres" },
        { n: 5, text: "Nombre total de barres verticales HA12 (2 lits) : N_tot = 2 × 41 = 82 barres" },
        { n: 6, text: "Longueur d'une barre verticale (hauteur 2,80 m + attentes de recouvrement 50Φ = 50 × 0,012 = 0,60 m) : L_barre = 2,80 + 0,60 = 3,40 m" },
        { n: 7, text: "Métré linéaire total d'acier HA12 : L_tot = 82 × 3,40 = 278,8 m. (Poids linéique HA12 = 0,888 kg/m → Poids = 278,8 × 0,888 = 247,6 kg)." },
      ],
      result_latex: "S_{coff} = \\textbf{33{,}60 m}^2 \\qquad V_{b\\acute{e}ton} = \\textbf{3{,}36 m}^3 \\qquad L_{tot,HA12} = \\textbf{278{,}8 m} \\quad (247{,}6 \\text{ kg}) \\quad \\checkmark",
    },

    {
      id: 7,
      key: 'units',
      title: "Unités & Symboles en Dessin Technique — Tableau de référence",
      icon: '📏',
      type: 'units',
      table: [
        { grandeur: "Cotes sur plan de coffrage", si: "centimètres [cm] ou mètres [m]", imperial: "ft-in", conversion: "Les plans d'exécution bâtiment sont cotés en cm (ou m pour les axes)" },
        { grandeur: "Cotes sur plan de ferraillage", si: "millimètres [mm]", imperial: "in", conversion: "Diamètres d'acier en mm (HA8, HA10, HA12, HA16, HA20, HA25)" },
        { grandeur: "Étrésillons / Altitudes NGF", si: "mètres [m] à 3 décimales", imperial: "ft", conversion: "Ex: +45.250 NGF (précision au millimètre)" },
        { grandeur: "Échelle de dessin", si: "1/50, 1/100, 1/20", imperial: "1/4\" = 1'0\"", conversion: "1/50 signifie : 1 cm sur plan = 50 cm réels (0,50 m)" },
        { grandeur: "Poids des aciers de ferraillage", si: "kg ou tonnes [t]", imperial: "lbs", conversion: "Conversion par la masse linéique : P = L × (Φ²/162) [kg/m]" },
        { grandeur: "Surface de treillis soudé", si: "m²", imperial: "sq ft", conversion: "Panneaux standard : 2,40 m × 4,80 m = 11,52 m²" },
      ],
      note: "⚠️ ATTENTION : Règle de cotation bâtiment : En plan d'architecture, les cotes sont traditionnellement en cm (ex: 225 pour 2,25 m). En béton armé et charpente métallique, les détails d'armatures sont en mm !",
    },

    {
      id: 8,
      key: 'hypotheses',
      title: "Hypothèses & conventions de lecture",
      icon: '📋',
      type: 'hypotheses',
      items: [
        { type: 'info', text: "Vue en plan d'architecture : La section de coupe horizontale passe à 1,00 m du sol fini. Tout ce qui est au-dessus (poutres, retombées) est dessiné en trait interrompu fin." },
        { type: 'info', text: "Plan de coffrage plancher : On regarde le plancher vu DE DESSOUS en supprimant le sol et les cloisons pour ne faire apparaître que la structure porteuse brute." },
        { type: 'warning', text: "ATTENTION : Priorité des traits : Trait continu fort (contours coupés) > Trait interrompu (contours cachés) > Axe mixte fin > Lignes de cote." },
        { type: 'warning', text: "Ne jamais confondre cote brute (nu du béton avant enduit ou doublage) et cote finie (nu du plâtre/carrelage fini). Les plans de coffrage sont TOUJOURS en cotes brutes." },
        { type: 'tip', text: "Tableau de nomenclature des aciers : Chaque barre possède un numéro de repère (ex: Rep 01), une nuance (HA12), un nombre d'unités, une forme de façonnage et une longueur développée." },
        { type: 'warning', text: "Recouvrement minimal des armatures : En béton armé (EC2), la longueur de recouvrement de 2 barres tendues est $L_d \\ge 40\\text{ à } 50 \\Phi$ (ex: $50 \\times 16\\text{ mm} = 80\\text{ cm}$)." },
      ],
    },

    {
      id: 9,
      key: 'simple_examples',
      title: "Exemples guidés — Lecture de cotes et échelles",
      icon: '✏️',
      type: 'examples_simple',
      examples: [
        {
          title: "Exemple 1 : Lecture d'une cote sur plan au 1/50",
          given: "Une pièce mesure 8,4 cm sur un plan d'architecte imprimé à l'échelle 1/50",
          find: "La longueur réelle de la pièce en mètres",
          solution_latex: "L_{r\\acute{e}elle} = 8{,}4 \\text{ cm} \\times 50 = 420 \\text{ cm} = 4{,}20 \\text{ m}",
          result: "La longueur réelle de la pièce est de 4,20 m.",
        },
        {
          title: "Exemple 2 : Poids de barres d'acier HA16",
          given: "Un plan de ferraillage de semelle de fondation comprend 24 barres HA16 de longueur L = 3,50 m chacune. Masse linéique du HA16 : m = 1,58 kg/m",
          find: "Métré linéaire total et poids total des aciers",
          solution_latex: "L_{tot} = 24 \\times 3{,}50 = 84{,}0 \\text{ m} \\qquad P_{tot} = 84{,}0 \\times 1{,}58 = 132{,}72 \\text{ kg}",
          result: "Poids d'acier requis = 132,7 kg.",
        },
        {
          title: "Exemple 3 : Calcul de la pente d'un caniveau sur plan VRD",
          given: "Regard A : altitude radier Z_A = 24,15 m. Regard B : altitude radier Z_B = 23,80 m. Distance horizontale entre A et B : Dh = 35,0 m",
          find: "Dénivelée ΔZ et pente du caniveau en %",
          solution_latex: "\\Delta Z = 24{,}15 - 23{,}80 = 0{,}35 \\text{ m} \\qquad Pente = \\frac{0{,}35}{35{,}0} \\times 100 = 1{,}00 \\%",
          result: "Pente du caniveau = 1,00% (Écoulement gravitaire parfait).",
        },
      ],
    },

    {
      id: 10,
      key: 'real_examples',
      title: "Exemple réel — Lecture d'un plan de coffrage de plancher",
      icon: '🏢',
      type: 'examples_real',
      diagramType: 'bridge_structure',
      examples: [
        {
          context: "Chantier Résidence Senior (Bâtiment R+3, Lyon)",
          scenario: "Plan de coffrage du plancher haut du RDC. Dalle pleine e = 20 cm. Présence d'une poutre noyée PN1 (30×20 cm) et de deux trémies techniques : T1 (40×60 cm) pour l'eau et T2 (100×100 cm) pour la gaine de désenfumage.",
          decomposition_latex: "\\text{Cote dalle : } h=20 \\quad \\text{Trémie T2 : } \\frac{100}{100} \\text{ (Arase sup +12.45, Arase inf +12.25)}",
          lesson: "La trémie T2 est entourée d'un chevêtre en béton armé avec renforts d'armatures de trémie 4HA14 pour reprendre les efforts de flexion concentrés autour de l'ouverture.",
        },
      ],
    },

    {
      id: 11,
      key: 'diagrams',
      title: "Schéma d'un plan de coffrage & détails de ferraillage",
      icon: '📊',
      type: 'interactive_diagram',
      diagramType: 'bridge_structure',
      description: "Visualisez la convention graphique d'un plan de coffrage de plancher béton armé (voiles coupés pochés, poutres en pointillés, cotes d'axes, repères de coupes A-A) et la vue en élévation du ferraillage d'une poutre.",
      diagram_description: [
        "Plan de coffrage : Voiles vus et coupés, poteaux, poutres principales et dalles avec épaisseurs",
        "Coupe A-A : Hauteur sous plafond (HSP), retombée de poutre, dalle et réservation",
        "Nomenclature des aciers : Tableau récapitulatif des repères, diamètres, longueurs et poids d'acier",
      ],
    },

    {
      id: 12,
      key: 'mistakes',
      title: "Erreurs fatales en Lecture & Réalisation de Plans",
      icon: '⛔',
      type: 'mistakes',
      items: [
        {
          mistake: "Confondre vue en plan d'architecture et plan de coffrage",
          trap: "Lire un plan d'architecture comme un plan de coffrage sans vérifier si les retombées de poutres ou les voiles sont porteurs",
          fix: "Le plan d'architecture montre les espaces finis avec doublage et cloisons. Le plan de coffrage montre exclusivement le béton brut structural vu de dessous.",
        },
        {
          mistake: "Mesurer les cotes directement à la règle graduée (Kutch) sur le papier",
          trap: "Déterminer la longueur d'un voile à la règle sur un plan imprimé qui a subi un retrait/déformation lors de l'impression PDF",
          fix: "Interdiction absolue ! L'impression papier déforme l'échelle de 1 à 3%. Ne vous fier qu'aux cotes chiffrées écrites sur le dessin.",
        },
        {
          mistake: "Oublier d'intégrer les recouvrements dans le métré d'armatures",
          trap: "Calculer la longueur totale d'un acier filant de 30 m en commandant 30 m de barres sans compter les joints de recouvrement tous les 12 m",
          fix: "Les barres commerciales font 12 m maximum. Pour une longueur de 30 m, il faut 3 barres avec 2 recouvrements de $50\\Phi$ (ex: $2 \\times 0{,}80\\text{ m} = 1{,}60\\text{ m}$ supplémentaires).",
        },
        {
          mistake: "Ne pas vérifier l'indice du plan (Gestion des révisions)",
          trap: "Travailler sur le chantier avec le plan Indice A alors que le bureau d'études a diffusé l'Indice C avec modification des ouvertures",
          fix: "Toujours vérifier le cartouche en bas à droite du plan : Titre, Date, Échelle, et l'Indice de révision le plus récent (BPE Indice le plus élevé).",
        },
      ],
    },

    {
      id: 13,
      key: 'tips',
      title: "Astuces du projeteur & métreur BTP",
      icon: '💡',
      type: 'tips',
      tips: [
        "Masse linéique rapide des aciers HA : La masse au mètre linéaire d'un acier de diamètre $\\Phi$ (mm) vaut approximativement $m \\approx \\Phi^2 / 162$ [kg/m]. Ex: HA12 $\\to 12^2 / 162 = 144 / 162 = 0{,}888\\text{ kg/m}$ | HA16 $\\to 16^2 / 162 = 256 / 162 = 1{,}58\\text{ kg/m}$.",
        "Cartouche de plan : Toujours commencer la lecture d'un plan par son cartouche (coin inférieur droit) : Titre de l'ouvrage, Étape (EXE, PRO, DCE), Nom de l'émetteur, Échelle et Indice de mise à jour.",
        "Sens de lecture d'une coupe : La flèche du trait de coupe A-A indique le SENS DU REGARD. Tout ce qui est derrière la flèche n'est pas représenté.",
        "Repérage des armatures : Les armatures principales tendues sont toujours placées du côté de la fibre tendue (en bas de poutre en travée, en haut de dalle sur appui/chapeau).",
        "Contrôle de fermeture des cotes : Avant de couler un voile, faire la somme des cotes partielles pour vérifier qu'elle égale la cote totale du bâtiment.",
        "Logiciels DAO/BIM de référence : AutoCAD, Revit (BIM 3D), Allplan, Tekla Structures (ferraillage complexe et charpente métallique).",
      ],
    },

    {
      id: 14,
      key: 'normes',
      title: "Normes & Références — Dessin Technique BTP",
      icon: '📜',
      type: 'norms',
      norms: [
        { code: "NF EN ISO 128 (Parties 1 à 100)", description: "Documentation technique de produits — Principes généraux de représentation (Traits, vues, coupes, sections)." },
        { code: "NF EN ISO 3766", description: "Dessins de génie civil — Représentation des armatures du béton armé (Symboles, représentations simplifiées)." },
        { code: "NF P 02-001", description: "Dessins d'architecture, de bâtiment et de génie civil — Principes généraux, cotation et symboles." },
        { code: "ISO 4157 (Parties 1 à 3)", description: "Dessins de bâtiment — Systèmes de désignation (Désignation des pièces, niveaux et espaces)." },
        { code: "Guide AFNOR Dessin de BTP", description: "Guide pratique des conventions graphiques du bâtiment, du coffrage et du ferraillage." },
        { code: "Norme BIM ISO 19650", description: "Organisation et numérisation des informations relatives aux bâtiments et ouvrages de génie civil (Processus BIM)." },
      ],
    },

    {
      id: 15,
      key: 'exercises',
      title: "Exercices Dessin Technique & Plans — 3 niveaux",
      icon: '✍️',
      type: 'exercises',
      exercises: [
        {
          id: 'ex_des_1',
          number: 1,
          difficulty: 'Facile',
          text: "Un voile en béton armé mesure 6,5 cm sur un plan au 1/20. Quelle est sa longueur réelle sur le chantier en mètres ?",
          hint: "L_réelle = L_plan × 20.",
          answer_latex: "L_{r\\acute{e}elle} = 6{,}5 \\text{ cm} \\times 20 = 130 \\text{ cm} = 1{,}30 \\text{ m}",
          answer_text: "Longueur réelle = 1,30 m",
        },
        {
          id: 'ex_des_2',
          number: 2,
          difficulty: 'Moyen',
          text: "Calculer la masse totale d'un lot de 50 barres HA14 de longueur 4,20 m chacune. (Utiliser la formule approchée m = Φ²/162 kg/m).",
          hint: "m_HA14 = 14² / 162 = 196 / 162 = 1,21 kg/m. L_tot = 50 × 4,20 m.",
          answer_latex: "L_{tot} = 50 \\times 4{,}20 = 210{,}0 \\text{ m} \\qquad Poids = 210{,}0 \\times 1{,}210 = 254{,}10 \\text{ kg}",
          answer_text: "Masse totale d'acier = 254,1 kg",
        },
        {
          id: 'ex_des_3',
          number: 3,
          difficulty: 'Difficile',
          text: "Sur un plan d'assainissement, la conduite en béton de 45 m de long part d'un regard A à l'altitude radier Z_A = +18,500 m avec une pente descendante de 1,2%. Calculer l'altitude radier Z_B du regard d'arrivée B.",
          hint: "ΔZ = Pente (%) / 100 × Dh. Z_B = Z_A - ΔZ (pente descendante).",
          answer_latex: "\\Delta Z = \\frac{1{,}2}{100} \\times 45{,}0 = 0{,}540 \\text{ m} \\qquad Z_B = 18{,}500 - 0{,}540 = 17{,}960 \\text{ m}",
          answer_text: "Altitude radier Z_B = +17,960 m",
        },
      ],
    },

    {
      id: 16,
      key: 'corrections',
      title: "Corrections détaillées",
      icon: '✅',
      type: 'corrections',
      note: "Retrouvez les formules complètes et les schémas de lecture de plans en cliquant sur 'Voir la correction'.",
    },

    {
      id: 17,
      key: 'quiz',
      title: "Quiz Dessin Technique & Plans — 3 questions",
      icon: '🎯',
      type: 'quiz',
      questions: [
        {
          id: 'q_des_1',
          question: "À quelle hauteur du sol fini effectue-t-on conventionnellement la coupe horizontale d'une vue en plan d'architecture ?",
          options: [
            { id: 'a', text: "Au niveau du sol (0,00 m)" },
            { id: 'b', text: "À 1,00 m au-dessus du sol fini" },
            { id: 'c', text: "Au niveau du plafond (2,50 m)" },
            { id: 'd', text: "À 5,00 m" },
          ],
          correct: 'b',
          explanation: "La vue en plan d'architecture est une coupe horizontale effectuée par convention à 1,00 m au-dessus du sol fini afin de couper les portes et fenêtres et faire apparaître leurs ouvertures.",
        },
        {
          id: 'q_des_2',
          question: "Sur un plan de coffrage de béton armé, que représentent les traits continus forts ?",
          options: [
            { id: 'a', text: "Les meubles et cloisons légères" },
            { id: 'b', text: "Les contours des éléments porteurs en béton armé vus ou coupés (voiles, poteaux)" },
            { id: 'c', text: "Les câbles électriques" },
            { id: 'd', text: "Les axes de tuyauterie" },
          ],
          correct: 'b',
          explanation: "Sur un plan de coffrage, les traits continus forts représentent les contours vus ou coupés des ouvrages porteurs en béton armé (voiles, poteaux, poutres). Les éléments cachés sont en traits interrompus fins.",
        },
        {
          id: 'q_des_3',
          question: "Quelle est la masse linéique approximative d'un acier pour béton armé de diamètre HA12 ?",
          options: [
            { id: 'a', text: "0,50 kg/m" },
            { id: 'b', text: "0,888 kg/m (approché par 12²/162)" },
            { id: 'c', text: "2,50 kg/m" },
            { id: 'd', text: "12,0 kg/m" },
          ],
          correct: 'b',
          explanation: "La masse linéique d'un acier de diamètre Φ vaut approximativement m = Φ² / 162 kg/m. Pour HA12 : 12² / 162 = 144 / 162 = 0,888 kg/m.",
        },
      ],
    },

    {
      id: 18,
      key: 'exam_questions',
      title: "Questions d'examen — Niveau Technicien Dessinateur BTP",
      icon: '🎓',
      type: 'exam',
      questions: [
        "Présentez les différences fondamentales entre un plan d'architecture, un plan de coffrage et un plan de ferraillage pour un même plancher haut de RDC. Quels sont les destinataires et objectifs de chaque plan ?",
        "Expliquez le principe de cotation cumulée et cotation en chaîne. Pourquoi la cotation en chaîne peut-elle cumuler des erreurs de tolérance d'exécution sur chantier ?",
        "Détaillez la composition d'une nomenclature d'aciers sur un plan de ferraillage (Repère, Nuance, Diamètre, Nombre d'éléments, Longueur développée, Schéma de façonnage et Poids total).",
        "Présentez la convention des hachures selon la norme NF EN ISO 128 pour le béton armé, le béton non armé, le terrain naturel, le bois et le métal.",
      ],
    },

    {
      id: 19,
      key: 'interview_questions',
      title: "Questions d'entretien — Dessinateur-Projeteur / Métreur",
      icon: '💼',
      type: 'interview',
      questions: [
        {
          question: "Sur un chantier, le ferrailleur s'étonne que les aciers principaux d'une console (balcon en porte-à-faux) soient dessinés en partie haute de la dalle. Que lui répondez-vous ?",
          answer_hint: "C'est parfait ! Une console en porte-à-faux subit un moment fléchissant négatif qui tend la fibre SUPÉRIEURE de la dalle. Comme le béton ne résiste pas à la traction, les armatures principales doivent obligatoirement être placées en haut (chapeaux de balcon) pour reprendre l'effort de traction.",
        },
        {
          question: "Quelle est la différence entre une coupe et une section en dessin technique ?",
          answer_hint: "Une coupe montre le plan de coupe ET les éléments situés en arrière du plan de coupe (vus en arrière-plan). Une section montre EXCLUSIVEMENT la surface située directement dans le plan de coupe sans dessiner l'arrière-plan.",
        },
        {
          question: "Comment vérifiez-vous la cohérence entre un plan de masse VRD et un plan de coffrage de fondation ?",
          answer_hint: "Vérifier le point de rattachement altimétrique (le zéro NGF du projet 0.00 = +XX.XX NGF), s'assurer que les cotes d'implantation des axes de fondations correspondent exactement aux limites de propriété du cadastre, et vérifier les pentes des canalisations pour éviter toute interférence avec les semelles.",
        },
      ],
    },

    {
      id: 20,
      key: 'practical_case',
      title: "Cas pratique — Métré complet d'un poteau en béton armé",
      icon: '🔧',
      type: 'practical',
      scenario: "Étude de cas — Métré de coffrage, béton et aciers d'un poteau carré 40×40 cm de hauteur H = 3,20 m",
      description: `**Mise en situation** : Métreur en bureau d'études. Analyse du plan de coffrage/ferraillage d'un poteau intérieur. Section 40×40 cm, H = 3,20 m. Armatures verticales : 4HA16. Cadres fermés HA8 tous les 15 cm (attaches de fermeture de 10 cm). Recouvrement des aciers v = 50Φ.`,
      resolution_latex_1: "S_{coff} = 4 \\times (0{,}40 \\times 3{,}20) = 5{,}12 \\text{ m}^2 \\qquad V_{b\\acute{e}ton} = 0{,}40 \\times 0{,}40 \\times 3{,}20 = 0{,}512 \\text{ m}^3",
      resolution_latex_2: "L_{barre\\,HA16} = 3{,}20 + (50 \\times 0{,}016) = 3{,}20 + 0{,}80 = 4{,}00 \\text{ m} \\implies L_{tot,HA16} = 4 \\times 4{,}00 = 16{,}0 \\text{ m}",
      resolution_latex_3: "\\text{Cadres HA8 : } N_{cadres} = \\frac{3{,}20}{0{,}15} + 1 = 22. \\quad L_{cadre} = (4 \\times 0{,}35) + 0{,}20 = 1{,}60 \\text{ m} \\implies L_{tot,HA8} = 35{,}2 \\text{ m}",
      conclusion: "Bilan : Coffrage = 5,12 m² | Béton = 0,512 m³ | Aciers HA16 = 16,0 m (25,3 kg) | Cadres HA8 = 35,2 m (13,9 kg) | Total Acier = 39,2 kg (soit 76,5 kg/m³ de béton).",
    },

    {
      id: 21,
      key: 'summary',
      title: "Résumé exécutif — Dessin Technique en 6 points",
      icon: '📋',
      type: 'summary',
      content: `### Le Dessin Technique en 6 fondamentaux

1. **Vues & Coupes** : Vue en plan (coupe à $1{,}00\\text{ m}$ du sol) vs Plan de coffrage (béton brut vu de dessous).
2. **Traits normalisés** : Continu fort (contours coupés), Continu fin (cotes/hachures), Interrompu (caché), Mixte fin (axes).
3. **Cotation BTP** : Cotes chiffrées obligatoires (cm en archi, mm en ferraillage, m à 3 décimales pour l'altimétrie NGF).
4. **Masse des Aciers** : Masse linéique $m \\approx \\frac{\\Phi^2}{162}$ [kg/m] (ex: HA12 $\\to 0{,}888\\text{ kg/m}$, HA16 $\\to 1{,}58\\text{ kg/m}$).
5. **Formule de Pente** : $\\text{Pente } \\% = \\frac{\\Delta Z}{D_h} \\times 100$ — essentielle en VRD et couverture.
6. **Gestion des Plans** : Cartouche, Échelle ($1/50, 1/100$), et contrôle systématique de l'**Indice de révision (BPE)**.`,
    },

    {
      id: 22,
      key: 'key_points',
      title: "Points clés à mémoriser — Dessin & Plans",
      icon: '⭐',
      type: 'keypoints',
      points: [
        "Ne jamais mesurer une cote à la règle sur un plan papier — seules les cotes chiffrées font foi",
        "Vue en plan archi = coupe à 1,00 m du sol | Plan de coffrage = béton brut vu de dessous",
        "Masse d'un acier HA : m ≈ Φ² / 162 [kg/m] (HA12 = 0,888 kg/m | HA16 = 1,58 kg/m)",
        "Pente (%) = (ΔZ / Dh) × 100 — écoulement gravitaire minimal VRD = 0,5 à 1,0%",
        "Recouvrement des armatures de béton armé Ld ≥ 40 à 50 Φ (ex: 80 cm pour HA16)",
        "Les plans de coffrage sont cotés en NU BRUT DU BÉTON (sans enduits ni doublages)",
        "Vérifier impérativement le cartouche et l'Indice de mise à jour (BPE) avant d'exécuter",
      ],
    },

    {
      id: 23,
      key: 'self_assessment',
      title: "Auto-évaluation — Dessin Technique & Plans",
      icon: '🏆',
      type: 'self_assessment',
      description: "Validez vos compétences en lecture de plans de BTP :",
      objectives: [
        "Je sais différencier un plan d'architecture, un plan de coffrage et un plan de ferraillage",
        "Je maîtrise les types de traits conventionnels (continu fort, interrompu, mixte) et les hachures",
        "Je sais calculer une dimension réelle à partir d'une échelle (1/50, 1/100, 1/20)",
        "Je sais calculer la masse d'un lot de barres d'acier par la masse linéique (Φ²/162)",
        "Je calcule la pente en % d'une canalisation ou toiture (ΔZ / Dh × 100)",
        "Je comprends la nomenclature des aciers et les longueurs de recouvrement (50Φ)",
        "J'ai résolu les 3 exercices de lecture de plans avec succès",
        "J'ai obtenu 3/3 au quiz de dessin technique",
      ],
    },
  ],

  quickQuiz: {
    question: "Sur un plan d'exécution imprimé au 1/50, une cote mesurée à la règle fait 6,0 cm. Quelle est la dimension réelle ?",
    options: [
      { id: 'a', label: "A) 1,20 m" },
      { id: 'b', label: "B) 3,00 m (6,0 cm × 50 = 300 cm)" },
      { id: 'c', label: "C) 6,00 m" },
    ],
    correct: 'b',
    explanation: "À l'échelle 1/50, 1 cm sur le papier représente 50 cm dans la réalité. Ainsi 6,0 cm × 50 = 300 cm = 3,00 m réels.",
  },
};
