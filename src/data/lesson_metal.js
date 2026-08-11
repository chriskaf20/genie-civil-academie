// ── Lesson: Construction Métallique & Eurocode 3 — Module 10 ──────────────────
export const lesson_metal = {
  moduleId: 10,
  slug: 'metal',
  lessonIndex: 1,
  title: "Conception, Dimensionnement & Eurocode 3 des Structures Métalliques",
  subtitle: "Module 10 — Construction Métallique & Eurocode 3",
  level: 'Avancé',
  duration: '45h',
  diagramType: 'bridge_structure',
  tags: ['Eurocode 3', 'Acier', 'S355', 'IPE', 'HEA', 'Flambement', 'Déversement', 'Assemblages', 'Boulons HR'],

  steps: [
    {
      id: 1,
      key: 'definition',
      title: "Définition — La Construction Métallique (Eurocode 3)",
      icon: '📖',
      type: 'definition',
      fr: 'Construction Métallique & Dimensionnement Eurocode 3 (EN 1993)',
      en: 'Steel Structures Design & Eurocode 3',
      metier: "Pratiquée par les ingénieurs calcul de charpente métallique, dessinateurs-projeteurs métalliques, métreurs et inspecteurs en construction métallique. Essentielle pour les halles industrielles, ponts métalliques et tours.",
      content: `La **construction métallique** regroupe la conception, le calcul et le montage des structures composées d'éléments en acier laminés à chaud (IPE, HEA, HEB, UPN, tubes) ou reconstitués soudés (PRS).

### Les 4 grands domaines de vérification sous l'Eurocode 3 (EN 1993-1-1) :
1. **Résistance des Sections RDM (ELU)** : Traction ($N_{t,Rd}$), Compression ($N_{c,Rd}$), Flexion ($M_{c,Rd}$), Cisaillement ($V_{c,Rd}$) et interaction Flexion-Cisaillement.
2. **Classification des Sections (Classes 1 à 4)** : Évaluation de la sensibilité au voilement local des parois minces sous compression/flexion (Classe 1 plastique $\\to$ Classe 4 voilement).
3. **Instabilités Élastiques Globales** :
   - **Le Flambement** des poteaux sous compression axiale ($N_{Ed} \\le N_{b,Rd} = \\chi A f_y / \\gamma_{M1}$).
   - **Le Déversement** des poutres fléchies (instabilité latérale et torsion de la semelle comprimée $M_{Ed} \\le M_{b,Rd} = \\chi_{LT} W_{pl,y} f_y / \\gamma_{M1}$).
   - **Le Voilement** des âmes sous cisaillement ou compression locale.
4. **Dimensionnement des Assemblages (EN 1993-1-8)** : Attaches boulonnées (boulons ordinaires ou boulons HR prétensionnés) et assemblages soudés (cordons de soudure d'angle et bout à bout).

> 💡 **Rapport Poids/Résistance exceptionnel** : L'acier ($E = 210\\,000\\text{ MPa}, f_y = 355\\text{ MPa}$) offre la plus haute résistance spécifique, permettant des portées libres de $20\\text{ à } 120\\text{ m}$ avec des structures élancées.`,
    },

    {
      id: 2,
      key: 'importance',
      title: "Pourquoi la maîtrise de l'Eurocode 3 est indispensable",
      icon: '⚠️',
      type: 'importance',
      content: `L'acier est un matériau ductile et performant, mais **extrêmement sensible aux instabilités élastiques (Flambement et Déversement)**.

- **Évitement du ruinement par instabilité** : 80% des effondrements de charpentes métalliques sous neige/vent sont dus au déversement de poutres ou au flambement de poteaux non maintenus latéralement.
- **Précision des assemblages** : Un assemblage mal calculé (platine trop fine, cisaillement de boulons) constitue le point faible de toute la structure.
- **Rapidité et préfabrication** : Montage à sec ultrarapide sur chantier par boulonnage, réduisant les délais de construction de 40% par rapport au béton coulé sur place.
- **Calcul au Feu (EN 1993-1-2)** : L'acier perd 50% de sa résistance à 600°C. Dimensionnement de la protection thermique (peinture intumescente ou projection de laine).

> ⚠️ **Règle d'or EC3** : "Ne jamais vérifier une poutre métallique en flexion simple sans contrôler son maintien au déversement ($\chi_{LT}$) ou ajouter des pannes stabilisatrices !"`,
    },

    {
      id: 3,
      key: 'applications',
      title: "Applications terrain — Typologies de profilés & assemblages",
      icon: '🏗️',
      type: 'applications',
      examples: [
        {
          context: "Halles Industrielles & Entrepôts (Portiques à Âme Pleine)",
          text: "Structure en portiques IPE/HEA franchissant 20 à 40 m avec traverses articulées ou encastrées aux pieds de poteaux par platines d'about.",
        },
        {
          context: "Ponts Mixtes Acier-Béton (Poutres PRS)",
          text: "Poutres Reconstituées Soudées en acier S355 J2+N associées à une hourdis béton armé par des goujons Nelson soudés (connecteurs).",
        },
        {
          context: "Poutres Treillages (Warren, Pratt, Howe)",
          text: "Structures réticulées composées de cornées, UPN ou tubes creux (CHS/RHS) pour très grandes portées (stades, aéroports, passerelles).",
        },
        {
          context: "Assemblages par Boulons HR Prétensionnés (Résistants au Glissement)",
          text: "Boulons classe 8.8 ou 10.9 serres au couple contrôlé (clé dynamométrique) exerçant une précontrainte $F_{p,C} = 0{,}7 f_{ub} A_s$ anti-fatigue.",
        },
        {
          context: "Planchers Collaborants (Bac Acier + Béton)",
          text: "Poutrelles IPE supportant un bac acier nervuré avec dalle béton rapportée servant de diaphragme rigide horizontal.",
        },
        {
          context: "Stabilité & Palées de Stabilité (Stabilité Longitudinale)",
          text: "Système de croix de Saint-André en cornières ou tirants d'acier reprenant les efforts de vent sur les pignons.",
        },
      ],
    },

    {
      id: 4,
      key: 'theory',
      title: "Théorie — Classification des Sections & Flambement (Eurocode 3)",
      icon: '📐',
      type: 'theory',
      diagramType: 'bridge_structure',
      content: `### 1. Classification des Sections en Compression / Flexion (EN 1993-1-1 §5.5)

Les parois d'un profilé sont caractérisées par leur élancement $\\lambda_p = \\frac{c}{t \\cdot \\varepsilon}$ avec $\\varepsilon = \\sqrt{\\frac{235}{f_y}}$ :

- **Classe 1 (Plastique)** : La section peut former une rotule plastique avec une capacité de rotation importante sans voilement local.
- **Classe 2 (Compacte)** : La section peut atteindre sa résistance plastique ($M_{pl,Rd}$), mais la capacité de rotation est limitée par le voilement.
- **Classe 3 (Élastique)** : La contrainte dans la fibre extrême peut atteindre la limite d'élasticité ($f_y$), mais le voilement empêche la plastification ($M_{el,Rd}$).
- **Classe 4 (Voilement local)** : Le voilement local se produit avant d'atteindre $f_y$. Utiliser une section efficace réduite ($A_{eff}, W_{eff}$).

### 2. Vérification au Flambement (EN 1993-1-1 §6.3.1)

Pour un poteau comprimé sous effort axial $N_{Ed}$ :

$$N_{Ed} \\le N_{b,Rd} = \\frac{\\chi \\cdot A \\cdot f_y}{\\gamma_{M1}}$$

- $\\gamma_{M1} = 1{,}00$ (coefficient partiel de sécurité pour les instabilités).
- **Élancement réduit $\\bar{\\lambda}$** :

$$\\bar{\\lambda} = \\sqrt{\\frac{A \\cdot f_y}{N_{cr}}} = \\frac{L_{cr}}{i \\cdot \\lambda_1} \\qquad \\text{avec } \\lambda_1 = 93{,}9 \\cdot \\varepsilon = 93{,}9 \\cdot \\sqrt{\\frac{235}{f_y}}$$

- **Coefficient de réduction du flambement $\\chi$** :

$$\\chi = \\frac{1}{\\Phi + \\sqrt{\\Phi^2 - \\bar{\\lambda}^2}} \\le 1{,}0 \\qquad \\text{avec } \\Phi = 0{,}5 \\cdot \\left[ 1 + \\alpha (\\bar{\\lambda} - 0{,}2) + \\bar{\\lambda}^2 \\right]$$

- $\\alpha$ = facteur d'imperfection dépendant de la courbe de flambement ($a_0, a, b, c, d$).`,
    },

    {
      id: 5,
      key: 'formulas',
      title: "Formules essentielles — Eurocode 3 (NF EN 1993-1-1 & 1-8)",
      icon: '🔢',
      type: 'formulas',
      diagramType: 'bridge_structure',
      formulas: [
        {
          name: "Moment plastique résistant d'une poutre (Classe 1 ou 2)",
          latex: "M_{pl,Rd} = \\frac{W_{pl,y} \\cdot f_y}{\\gamma_{M0}} \\quad [\\text{kNm}] \\qquad (\\gamma_{M0} = 1{,}00)",
          description: "Wply = module de résistance plastique par rapport à l'axe fort y-y (donné dans les catalogues de profilés IPE/HEA).",
        },
        {
          name: "Résistance au Déversement d'une poutre (M_b,Rd)",
          latex: "M_{b,Rd} = \\chi_{LT} \\cdot \\frac{W_{pl,y} \\cdot f_y}{\\gamma_{M1}} \\quad [\\text{kNm}]",
          description: "χLT = coefficient de réduction pour le déversement dépendant de l'élancement réduit λLT et du moment critique Mcr.",
        },
        {
          name: "Résistance d'un boulon au cisaillement (F_v,Rd)",
          latex: "F_{v,Rd} = \\frac{\\alpha_v \\cdot f_{ub} \\cdot A_s}{\\gamma_{M2}} \\quad [\\text{kN}]",
          description: "αv = 0,6 pour classes 4.6, 5.6, 8.8 (0,5 pour 10.9 avec filetage dans le plan de cisaillement). γM2 = 1,25.",
        },
        {
          name: "Résistance d'un cordon de soudure d'angle (F_w,Rd)",
          latex: "f_{vw,d} = \\frac{f_u / \\sqrt{3}}{\\beta_w \\cdot \\gamma_{M2}} \\qquad F_{w,Rd} = a \\cdot L_{eff} \\cdot f_{vw,d}",
          description: "a = gorge de la soudure (a ≥ 0,7 t_min), βw = facteur de corrélation (0,8 pour S235, 0,85 pour S355), γM2 = 1,25.",
        },
        {
          name: "Élancement d'un poteau (λ)",
          latex: "\\lambda = \\frac{L_{cr}}{i_y} \\quad \\text{ou} \\quad \\frac{L_{cr}}{i_z} \\qquad i = \\sqrt{\\frac{I}{A}} \\quad (\\text{rayon de giration})",
          description: "Lcr = longueur de flambement dépendante des conditions aux limites (articulé-articulé Lcr = L, encastré-libre Lcr = 2L).",
        },
        {
          name: "Effort de précontrainte d'un boulon HR (F_p,C)",
          latex: "F_{p,C} = 0{,}7 \\cdot f_{ub} \\cdot A_s \\quad [\\text{kN}]",
          description: "fub = résistance ultime à la traction du boulon (ex: 800 MPa pour 8.8, 1000 MPa pour 10.9). As = section résistante de la tige.",
        },
      ],
    },

    {
      id: 6,
      key: 'stepbystep',
      title: "Calcul complet — Vérification au flambement d'un poteau HEA 200 en acier S355",
      icon: '🔬',
      type: 'stepbystep',
      problem: "Un poteau HEA 200 en acier S355 (fy = 355 MPa, E = 210 000 MPa) de hauteur L = 4,00 m est articulé aux deux extrémités à ses deux axes (Lcr = 4,00 m). Il supporte une charge axiale de compression ELU N_Ed = 550 kN. Caractéristiques du HEA 200 : A = 53,8 cm² = 5380 mm², iz = 4,98 cm = 49,8 mm (axe faible z-z), courbe de flambement 'c' (α = 0,49). 1) Calculer l'élancement λz et l'élancement réduit λ_barre_z. 2) Calculer le coefficient Φz et χz. 3) Calculer la résistance au flambement N_b,Rd et vérifier le poteau.",
      steps_demo: [
        { n: 1, text: "Calcul de ε et λ1 : ε = √(235 / 355) = √0,66197 = 0,8136 → λ1 = 93,9 × 0,8136 = 76,40" },
        { n: 2, text: "Calcul de l'élancement géométrique suivant z-z : λz = Lcr / iz = 4000 / 49,8 = 80,32" },
        { n: 3, text: "Calcul de l'élancement réduit λ_barre_z : λ_barre_z = λz / λ1 = 80,32 / 76,40 = 1,051" },
        { n: 4, text: "Calcul du facteur Φz (courbe c → α = 0,49) : Φz = 0,5 × [1 + 0,49 × (1,051 - 0,20) + 1,051²] = 0,5 × [1 + 0,4170 + 1,1046] = 0,5 × 2,5216 = 1,2608" },
        { n: 5, text: "Calcul du coefficient de réduction du flambement χz : χz = 1 / [1,2608 + √(1,2608² - 1,051²)] = 1 / [1,2608 + √(1,5896 - 1,1046)] = 1 / [1,2608 + 0,6964] = 1 / 1,9572 = 0,511" },
        { n: 6, text: "Calcul de la résistance axiale au flambement N_b,Rd : N_b,Rd = χz × A × fy / γM1 = 0,511 × (5380 × 355) / 1,00 = 0,511 × 1 909 900 N = 975 958 N = 976,0 kN" },
        { n: 7, text: "Vérification au critère ELU : Ratio = N_Ed / N_b,Rd = 550 / 976,0 = 0,564 = 56,4% ≤ 100% → Poteau HEA 200 VALIDE au flambement ✓" },
      ],
      result_latex: "\\bar{\\lambda}_z = 1{,}051 \\qquad \\chi_z = \\textbf{0{,}511} \\qquad N_{b,Rd} = \\textbf{976{,}0 kN} \\qquad \\frac{N_{Ed}}{N_{b,Rd}} = \\textbf{56{,}4\\%} \\le 100\\% \\quad \\checkmark",
    },

    {
      id: 7,
      key: 'units',
      title: "Unités & Symboles en Eurocode 3 — Tableau de référence",
      icon: '📏',
      type: 'units',
      table: [
        { grandeur: "Limite d'élasticité fy", si: "MPa (N/mm²)", imperial: "ksi", conversion: "S235 = 235 MPa | S275 = 275 MPa | S355 = 355 MPa | S460 = 460 MPa" },
        { grandeur: "Module d'élasticité E", si: "MPa / GPa", imperial: "ksi", conversion: "E = 210 000 MPa (210 GPa) pour tous les aciers de construction" },
        { grandeur: "Module de cisaillement G", si: "MPa / GPa", imperial: "ksi", conversion: "G = 81 000 MPa (81 GPa) | Coef de Poisson ν = 0,30" },
        { grandeur: "Moment d'inertie I (Iy, Iz)", si: "cm⁴ ou mm⁴", imperial: "in⁴", conversion: "1 cm⁴ = 10⁴ mm⁴ (Catalogue profilés IPE/HEA)" },
        { grandeur: "Module plastique Wpl (Wpl,y)", si: "cm³ ou mm³", imperial: "in³", conversion: "1 cm³ = 10³ mm³ (Capacité plastique en flexion)" },
        { grandeur: "Coefficients partiels γM", si: "Sans unité", imperial: "AISC Ω / φ", conversion: "γM0 = 1,00 (Section) | γM1 = 1,00 (Instabilités) | γM2 = 1,25 (Assemblages)" },
      ],
      note: "⚠️ ATTENTION : L'Eurocode 3 utilise la convention d'axes : **X** (axe de la barre), **Y** (axe fort d'inertie de la section), **Z** (axe faible d'inertie). Iy > Iz pour les profilés IPE et HEA !",
    },

    {
      id: 8,
      key: 'hypotheses',
      title: "Hypothèses & conditions de validité Eurocode 3",
      icon: '📋',
      type: 'hypotheses',
      items: [
        { type: 'info', text: "L'acier est considéré comme un matériau isotrope, homogène et élasto-plastique parfait ($E = 210\\,000\\text{ MPa}$)." },
        { type: 'info', text: "Les calculs en résistance plastique ($W_{pl}$) ne sont autorisés QUE pour les sections de Classe 1 et Classe 2. Les sections de Classe 3 doivent être calculées en élastique ($W_{el}$)." },
        { type: 'warning', text: "ATTENTION : La longueur de flambement $L_{cr}$ dépend des liaisons réelles aux extrémités. Poteau en console (encastré-libre) : $L_{cr} = 2{,}0 L$ ! Une sous-estimation de $L_{cr}$ divise la sécurité par 4 !" },
        { type: 'warning', text: "Déversement : Une poutre en I non maintenue latéralement déverse sous l'effet de la compression de sa semelle supérieure. Placer des contreventements ou liaisons avec la dalle." },
        { type: 'tip', text: "Boulons HR (Haute Résistance) : Les boulons 8.8 et 10.9 doivent être serrés au couple avec rondelles sous tête et sous écrou pour développer la précontrainte de frottement." },
        { type: 'warning', text: "Assemblage soudé : La gorge d'un cordon d'angle $a$ doit satisfaire $a \\ge 0{,}7 \\cdot t_{min}$ pour éviter les fissurations à chaud lors du refroidissement." },
      ],
    },

    {
      id: 9,
      key: 'simple_examples',
      title: "Exemples guidés — Flexion & Assemblages Eurocode 3",
      icon: '✏️',
      type: 'examples_simple',
      examples: [
        {
          title: "Exemple 1 : Moment plastique résistant M_pl,Rd d'une poutre IPE 300 en S235",
          given: "Profilé IPE 300 en acier S235 (fy = 235 MPa, γM0 = 1,00). Module plastique Wpl,y = 628,4 cm³ = 628,4 × 10³ mm³",
          find: "Le moment résistant plastique M_pl,Rd en kNm",
          solution_latex: "M_{pl,Rd} = \\frac{628{,}4 \\times 10^3 \\times 235}{1{,}00} = 147\\,674\\,000 \\text{ Nmm} = 147{,}67 \\text{ kNm}",
          result: "M_pl,Rd = 147,7 kNm (Capacité maximale en flexion simple).",
        },
        {
          title: "Exemple 2 : Résistance au cisaillement d'un boulon M16 classe 8.8",
          given: "Boulon M16 8.8 (fub = 800 MPa, section résistante As = 157 mm², αv = 0,60, γM2 = 1,25)",
          find: "La résistance à l'effort tranchant F_v,Rd par plan de cisaillement",
          solution_latex: "F_{v,Rd} = \\frac{0{,}60 \\times 800 \\times 157}{1{,}25} = \\frac{75\\,360}{1{,}25} = 60\\,288 \\text{ N} = 60{,}29 \\text{ kN}",
          result: "F_v,Rd = 60,3 kN par plan de cisaillement.",
        },
        {
          title: "Exemple 3 : Résistance d'une soudure d'angle de gorge a = 5 mm",
          given: "Cordon de soudure continu L = 200 mm, gorge a = 5 mm, acier S235 (fu = 360 MPa, βw = 0,80, γM2 = 1,25)",
          find: "La résistance ultime de la soudure F_w,Rd",
          solution_latex: "f_{vw,d} = \\frac{360 / \\sqrt{3}}{0{,}80 \\times 1{,}25} = \\frac{207{,}85}{1{,}00} = 207{,}85 \\text{ MPa} \\qquad F_{w,Rd} = 5 \\times 200 \\times 207{,}85 = 207\\,850 \\text{ N} = 207{,}85 \\text{ kN}",
          result: "Résistance de la soudure F_w,Rd = 207,8 kN.",
        },
      ],
    },

    {
      id: 10,
      key: 'real_examples',
      title: "Exemple réel — Charpente d'une halle logistique de 36 m de portée",
      icon: '🏢',
      type: 'examples_real',
      diagramType: 'bridge_structure',
      examples: [
        {
          context: "Plateforme logistique d'Amazon (Portée 36 m sans poteau intermédiaire)",
          scenario: "Conception d'une traverse en poutre reconstituée soudée (PRS) à hauteur variable (h = 1200 mm aux appuis, h = 600 mm au faîtage) en acier S355. Maintien au déversement assuré par des braconniers connectés aux pannes IPE 180.",
          decomposition_latex: "N_{Ed} = 420 \\text{ kN} \\quad M_{Ed} = 1\\,450 \\text{ kNm} \\quad \\Rightarrow \\quad M_{b,Rd} = 1\\,680 \\text{ kNm} \\quad (\\chi_{LT} = 0{,}78)",
          lesson: "La disposition stratégique des braconniers a permis d'augmenter χLT de 0,42 à 0,78, évitant d'épaissir les semelles de la poutre et économisant 18 tonnes d'acier sur l'ensemble du hall.",
        },
      ],
    },

    {
      id: 11,
      key: 'diagrams',
      title: "Schéma — Poteau au flambement & Assemblage par platine d'about",
      icon: '📊',
      type: 'interactive_diagram',
      diagramType: 'bridge_structure',
      description: "Visualisez la déformée de flambement axiale d'un poteau, la déformée de déversement d'une poutre en I et la répartition des efforts dans une platine d'about boulonnée par boulons HR.",
      diagram_description: [
        "Flambement d'un poteau : Compression axiale NEd, déformée transversale v(x) et inertie Iz",
        "Déversement d'une poutre : Flexion autour de Y-Y accompagnée d'un déplacement latéral u_z et torsion θ",
        "Assemblage par platine d'about : Poutre encastrée sur poteau par platine soudée et 8 boulons HR 10.9 en zone tendue/comprimée",
      ],
    },

    {
      id: 12,
      key: 'mistakes',
      title: "Erreurs fatales en Construction Métallique",
      icon: '⛔',
      type: 'mistakes',
      items: [
        {
          mistake: "Négliger le déversement des poutres fléchies",
          trap: "Dimensionner une poutre métallique uniquement à la flexion simple $M_{Ed} \\le M_{pl,Rd}$ sans vérifier l'instabilité latérale de déversement ($M_{b,Rd} = \\chi_{LT} M_{pl,Rd}$)",
          fix: "Le déversement peut faire chuter la capacité de la poutre de 50 à 70% ! Toujours calculer $\\chi_{LT}$ ou maintenir la semelle comprimée par un bac acier collaborant ou des braconniers.",
        },
        {
          mistake: "Sous-estimer la longueur de flambement $L_{cr}$",
          trap: "Prendre $L_{cr} = L$ pour un poteau de hangar libre en tête (console)",
          fix: "Pour un poteau encastré en pied et libre en tête, $L_{cr} = 2{,}0 L$. Prendre $L_{cr} = L$ divise l'élancement par 2 et surestime la résistance au flambement par un facteur 4 !",
        },
        {
          mistake: "Positionner des trous de boulons trop près des bords d'acier",
          trap: "Placer un boulon avec une pince $e_1$ ou $e_2 < 1{,}2 d_0$ (distance au bord)",
          fix: "Risque de ruine par pincement/arrachement de la tôle (pression de diamant). Respecter scrupuleusement les pinces minimales Eurocode 3 : $e_1 \\ge 1{,}2 d_0$ et $e_2 \\ge 1{,}2 d_0$.",
        },
        {
          mistake: "Oublier de vérifier la flèche sous charges de service (ELS)",
          trap: "Avoir une poutre parfaitement conforme à l'ELU mais dont la flèche $w_{max}$ dépasse $L/250$ ou $L/300$",
          fix: "L'acier étant très résistant, le dimensionnement des poutres métalliques de grande portée est presque TOUJOURS conditionné par le critère de déformation ELS ($w_{max} \\le L/300$).",
        },
      ],
    },

    {
      id: 13,
      key: 'tips',
      title: "Astuces de l'ingénieur charpente métallique",
      icon: '💡',
      type: 'tips',
      tips: [
        "Choix des profilés : Préférer les IPE pour les poutres fléchies (fort rapport $I_y/I_z$) et les HEA/HEB pour les poteaux comprimés (bonne inertie transversale $I_z$).",
        "Nuance S355 vs S235 : Préférer l'acier S355 pour les éléments fléchis ou tendus. Le surcoût matière de l'acier S355 est de ~5%, mais il offre +51% de résistance mécanique ($355 / 235 = 1{,}51$) !",
        "Vérification rapide au flambement : Si l'élancement réduit $\\bar{\\lambda} \\le 0{,}20$, le risque de flambement est nul et $\\chi = 1{,}00$.",
        "Prétension des boulons HR : Pour les assemblages soumis à la fatigue (ponts, ponts roulants) ou exigeant l'absence de glissement (ELS), utiliser obligatoirement des boulons HR 8.8 ou 10.9 prétensionnés.",
        "Soudures d'angle : Ne jamais concevoir un cordon de soudure d'épaisseur de gorge $a < 3\\text{ mm}$ ou $a > 0{,}7 t_{min}$.",
        "Logiciels de calcul de structure métallique : Robot Structural Analysis, SCIA Engineer, Advance Steel (modélisation 3D et détails d'assemblages), IDEA Statica (calcul d'assemblages complexes par éléments finis).",
      ],
    },

    {
      id: 14,
      key: 'normes',
      title: "Normes & Références — Eurocode 3 & Construction Métallique",
      icon: '📜',
      type: 'norms',
      norms: [
        { code: "NF EN 1993-1-1 (Eurocode 3)", description: "Calcul des structures en acier — Règles générales et règles pour les bâtiments (Classification, résistance, instabilités)." },
        { code: "NF EN 1993-1-8 (Eurocode 3)", description: "Calcul des structures en acier — Calcul des assemblages (Boulons, soudures, platines d'about, pieds de poteaux)." },
        { code: "NF EN 1993-1-2 (Eurocode 3)", description: "Calcul des structures en acier — Calcul du comportement au feu des structures." },
        { code: "NF EN 10025 (Parties 1 à 6)", description: "Produits laminés à chaud en aciers de construction (Aciers S235, S275, S355, S460, qualités JR, J0, J2, K2)." },
        { code: "NF EN 1090 (Parties 1 & 2)", description: "Exécution des structures en acier et structures en aluminium (Marquage CE, classes d'exécution EXC1 à EXC4)." },
        { code: "Recommandations CTICM", description: "Centre Technique Industriel de la Construction Métallique — Guides de dimensionnement et formulaires." },
      ],
    },

    {
      id: 15,
      key: 'exercises',
      title: "Exercices Eurocode 3 & Charpente Métallique — 3 niveaux",
      icon: '✍️',
      type: 'exercises',
      exercises: [
        {
          id: 'ex_met_1',
          number: 1,
          difficulty: 'Facile',
          text: "Calculer la résistance plastique à la traction N_t,Rd d'un tirant métallique en cornière de section A = 12,0 cm² = 1200 mm² en acier S275 (fy = 275 MPa, γM0 = 1,00).",
          hint: "N_t,Rd = A · fy / γM0.",
          answer_latex: "N_{t,Rd} = \\frac{1200 \\times 275}{1{,}00} = 330\\,000 \\text{ N} = 330{,}0 \\text{ kN}",
          answer_text: "Résistance à la traction N_t,Rd = 330,0 kN",
        },
        {
          id: 'ex_met_2',
          number: 2,
          difficulty: 'Moyen',
          text: "Une poutre simplement appuyée IPE 400 de portée L = 6,00 m en acier S355 (Wpl,y = 1307 cm³, fy = 355 MPa) supporte une charge linéaire uniforme ELU q_Ed. 1) Calculer le moment plastique résistant M_pl,Rd. 2) Calculer la charge maximale q_Ed admissible en flexion simple (sans déversement).",
          hint: "M_pl,Rd = Wpl,y · fy. M_max = q_Ed · L² / 8 → q_Ed = 8 · M_pl,Rd / L².",
          answer_latex: "M_{pl,Rd} = \\frac{1307 \\times 10^3 \\times 355}{1{,}00} = 463{,}985 \\text{ kNm} \\qquad q_{Ed} = \\frac{8 \\times 463{,}985}{6{,}00^2} = \\frac{3711{,}88}{36} = 103{,}11 \\text{ kN/m}",
          answer_text: "M_pl,Rd = 464,0 kNm | Charge maximale q_Ed = 103,1 kN/m",
        },
        {
          id: 'ex_met_3',
          number: 3,
          difficulty: 'Difficile',
          text: "Un assemblage à recouvrement transmet un effort tranchant ELU V_Ed = 200 kN via des boulons M20 classe 8.8 (F_v,Rd = 94,2 kN par boulon en cisaillement simple). 1) Calculer le nombre minimal de boulons n requis. 2) Si l'assemblage utilise 4 boulons M20 8.8, vérifier le ratio de travail au cisaillement.",
          hint: "n = V_Ed / F_v,Rd.",
          answer_latex: "n_{min} = \\frac{200}{94{,}2} = 2{,}12 \\implies 3 \\text{ boulons} \\qquad \\text{Avec 4 boulons : } V_{Rd} = 4 \\times 94{,}2 = 376{,}8 \\text{ kN} \\implies \\text{Ratio} = \\frac{200}{376{,}8} = 53{,}1\\% \\quad \\checkmark",
          answer_text: "Nombre minimal n = 3 boulons | Avec 4 boulons, ratio de travail = 53,1% ≤ 100% (Conforme).",
        },
      ],
    },

    {
      id: 16,
      key: 'corrections',
      title: "Corrections détaillées",
      icon: '✅',
      type: 'corrections',
      note: "Les détails des calculs d'élancement, de flambement et d'assemblages Eurocode 3 sont disponibles en cliquant sur 'Voir la correction'.",
    },

    {
      id: 17,
      key: 'quiz',
      title: "Quiz Construction Métallique & Eurocode 3 — 3 questions",
      icon: '🎯',
      type: 'quiz',
      questions: [
        {
          id: 'q_met_1',
          question: "Dans l'Eurocode 3, que caractérise une section de Classe 1 ?",
          options: [
            { id: 'a', text: "Une section soumise au voilement local immédiat" },
            { id: 'b', text: "Une section pouvant former une rotule plastique avec une capacité de rotation suffisante sans risque de voilement local" },
            { id: 'c', text: "Une section réservée aux tôles minces d'épaisseur < 1 mm" },
            { id: 'd', text: "Une section en fonte" },
          ],
          correct: 'b',
          explanation: "Une section de Classe 1 est dite plastique : elle peut développer son moment plastique résistant M_pl,Rd et possède une capacité de rotation suffisante pour permettre l'analyse plastique globale des structures.",
        },
        {
          id: 'q_met_2',
          question: "Quelle instabilité élastique menace spécifiquement la semelle comprimée d'une poutre métallique fléchie non maintenue latéralement ?",
          options: [
            { id: 'a', text: "Le flambement axial" },
            { id: 'b', text: "Le déversement (instabilité latérale et torsion)" },
            { id: 'c', text: "La poinçonnement" },
            { id: 'd', text: "La fluidification" },
          ],
          correct: 'b',
          explanation: "Le déversement est l'instabilité latérale avec vrillage en torsion de la partie comprimée d'une poutre fléchie. Il est caractérisé par le coefficient de réduction χLT.",
        },
        {
          id: 'q_met_3',
          question: "Quelle est la valeur du module d'élasticité E (module de Young) retenu par l'Eurocode 3 pour les aciers de construction (S235, S275, S355) ?",
          options: [
            { id: 'a', text: "30 000 MPa" },
            { id: 'b', text: "210 000 MPa (210 GPa)" },
            { id: 'c', text: "500 000 MPa" },
            { id: 'd', text: "2 100 MPa" },
          ],
          correct: 'b',
          explanation: "Pour tous les aciers de construction métalliques laminés à chaud selon la norme NF EN 10025, le module d'élasticité est égal à E = 210 000 MPa (210 GPa).",
        },
      ],
    },

    {
      id: 18,
      key: 'exam_questions',
      title: "Questions d'examen — Niveau Master / Ingénieur CHEBAP",
      icon: '🎓',
      type: 'exam',
      questions: [
        "Démontrez la méthode de calcul du coefficient de réduction au flambement χz selon la norme NF EN 1993-1-1. Expliquez le rôle de la courbe de flambement, du facteur d'imperfection α et de l'élancement réduit λ_barre.",
        "Exposez le phénomène de déversement des poutres métalliques fléchies. Comment calcule-t-on le moment critique élastique de déversement M_cr et quelles sont les dispositions constructives pour s'en affranchir ?",
        "Détaillez le dimensionnement d'un assemblage par platine d'about boulonnée (Méthode des composantes selon NF EN 1993-1-8 : T-stub / T-élément en flexion, pression de diamant, cisaillement et traction des boulons).",
        "Présentez le comportement des structures métalliques sous l'action du feu (Eurocode 3 Partie 1-2). Expliquez l'évolution du facteur d'adaptation thermique k_y,θ et k_E,θ en fonction de la température critique θ_cr.",
      ],
    },

    {
      id: 19,
      key: 'interview_questions',
      title: "Questions d'entretien — Ingénieur Calcul Charpente Métallique",
      icon: '💼',
      type: 'interview',
      questions: [
        {
          question: "Pourquoi privilégier un acier S355 plutôt qu'un acier S235 pour les poutres de grande portée ?",
          answer_hint: "L'acier S355 offre une limite d'élasticité fy = 355 MPa contre 235 MPa pour le S235 (+51% de résistance mécanique). Son surcoût d'achat au kilo n'est que de ~5 à 8%. Utiliser du S355 permet d'alléger la structure de 20 à 30%, ce qui réduit les charges permanentes sur les fondations et le coût global du tonnage d'acier.",
        },
        {
          question: "Quelle est la différence entre un boulon ordinaire (ex: classe 8.8 travaillé au cisaillement) et un boulon HR prétensionné (résistant au glissement) ?",
          answer_hint: "Un boulon ordinaire travaille en appui/pression de diamant et cisaillement direct de la tige (avec un léger jeu dans le trou d_0 = d + 2 mm). Un boulon HR prétensionné est serré à un couple élevé (F_p,C = 0,7 fub As) : la pression entre les tôles crée une force de frottement qui empêche tout glissement de l'assemblage (indispensable pour les charges dynamiques et la fatigue).",
        },
        {
          question: "Comment dimensionnez-vous le pied de poteau articulé d'un hangar métallique ?",
          answer_hint: "Un pied de poteau articulé transmet uniquement un effort normal N_Ed et un effort tranchant V_Ed (pas de moment M_Ed). On dimensionne la platine de base sous pression uniforme du béton (f_cd), les tiges d'ancrage en traction/cisaillement et la bêche de scellement éventuelle pour le cisaillement fort.",
        },
      ],
    },

    {
      id: 20,
      key: 'practical_case',
      title: "Cas pratique — Dimensionnement de la traverse d'un portique métallique",
      icon: '🔧',
      type: 'practical',
      scenario: "Étude de cas — Dimensionnement d'une traverse IPE 360 en acier S355 sous charges de neige et vent (Portée L = 12,00 m, charge ELU q_Ed = 28 kN/m)",
      description: `**Mise en situation** : Bureau d'études charpente métallique. Vérification à l'ELU de la traverse IPE 360 (Wpl,y = 1019 cm³, Iy = 16 270 cm⁴, masse = 57,1 kg/m). Maintien latéral par pannes IPE 140 tous les 1,50 m (L_cr,LT = 1,50 m).`,
      resolution_latex_1: "M_{Ed} = \\frac{q_{Ed} \\cdot L^2}{8} = \\frac{28 \\times 12^2}{8} = 504{,}0 \\text{ kNm}",
      resolution_latex_2: "M_{pl,Rd} = \\frac{1019 \\times 10^3 \\times 355}{1{,}00} = 361{,}7 \\text{ kNm} \\implies M_{Ed} (504) > M_{pl,Rd} (361,7) \\quad \\text{(NON CONFORME en IPE 360)}",
      resolution_latex_3: "\\text{Redimensionnement en IPE 450 (Wpl,y = 1702 cm³) : } M_{pl,Rd} = 604{,}2 \\text{ kNm} \\implies \\frac{M_{Ed}}{M_{pl,Rd}} = 83{,}4\\% \\le 100\\% \\quad \\checkmark",
      conclusion: "Traverse IPE 450 retenue en S355. Vérification ELS : Flèche w_max = 28,4 mm ≤ L/300 = 40 mm ✓. Déversement maîtrisé par le contreventement des pannes à 1,50 m (χLT = 0,94).",
    },

    {
      id: 21,
      key: 'summary',
      title: "Résumé exécutif — La Construction Métallique en 6 points",
      icon: '📋',
      type: 'summary',
      content: `### La Construction Métallique en 6 fondamentaux

1. **Aciers & Profilés** : S235, S275, S355, S460 ($E = 210\\text{ GPa}$) — Profilés IPE, HEA, HEB, UPN et tubes.
2. **Classification des Sections** : Classes 1 et 2 (plastique $W_{pl}$), Classe 3 (élastique $W_{el}$), Classe 4 (voilement local).
3. **Flambement des Poteaux** : $N_{Ed} \\le N_{b,Rd} = \\chi A f_y / \\gamma_{M1}$ — dépend de l'élancement réduit $\\bar{\\lambda}_z$ et de $L_{cr}$.
4. **Déversement des Poutres** : $M_{Ed} \\le M_{b,Rd} = \\chi_{LT} W_{pl,y} f_y / \\gamma_{M1}$ — instabilité latérale de la semelle comprimée.
5. **Assemblages Boulonnés & Soudés** : Boulons ordinaires (8.8), boulons HR prétensionnés ($F_{p,C} = 0{,}7 f_{ub} A_s$), cordons d'angle $a$.
6. **Critères ELS & Feu** : La flèche ELS ($w \\le L/300$) conditionne souvent les portées | Tenue au feu par peintures intumescentes.`,
    },

    {
      id: 22,
      key: 'key_points',
      title: "Points clés à mémoriser — Eurocode 3",
      icon: '⭐',
      type: 'keypoints',
      points: [
        "Module d'élasticité unique de l'acier E = 210 000 MPa (210 GPa) pour toutes les nuances",
        "L'acier S355 offre +51% de résistance par rapport au S235 pour un surcoût matière de 5%",
        "Flambement des poteaux : Nb,Rd = χ · A · fy / γM1 — surveiller l'axe faible z-z et Lcr",
        "Déversement : Instabilité latérale en torsion de la semelle comprimée d'une poutre fléchie (χLT)",
        "Boulons HR 8.8 / 10.9 prétensionnés : Indispensables pour les assemblages soumis à la fatigue",
        "Vérifier TOUJOURS la flèche ELS (w_max ≤ L/300 ou L/400) sur les poutres métalliques",
        "Pinces minimales d'assemblage boulonné : e1 ≥ 1,2 d0 et e2 ≥ 1,2 d0 au bord des tôles",
      ],
    },

    {
      id: 23,
      key: 'self_assessment',
      title: "Auto-évaluation — Construction Métallique & Eurocode 3",
      icon: '🏆',
      type: 'self_assessment',
      description: "Validez vos compétences en calcul de structures métalliques selon l'Eurocode 3 :",
      objectives: [
        "Je sais classer une section métallique (Classes 1 à 4) selon l'Eurocode 3 EN 1993-1-1",
        "Je maîtrise le calcul de la résistance plastique en flexion M_pl,Rd et en traction N_t,Rd",
        "Je sais calculer l'élancement réduit et la résistance au flambement N_b,Rd d'un poteau comprimé",
        "Je comprends le phénomène de déversement (χLT) et les moyens de stabilisation des poutres",
        "Je sais dimensionner une attache boulonnée au cisaillement F_v,Rd et à la pression de diamant",
        "Je sais calculer la résistance d'un cordon de soudure d'angle F_w,Rd",
        "J'ai résolu les 3 exercices d'Eurocode 3 avec succès",
        "J'ai obtenu 3/3 au quiz de construction métallique",
      ],
    },
  ],

  quickQuiz: {
    question: "Dans l'Eurocode 3 (EN 1993-1-1), quelle est la valeur du module d'élasticité E (module de Young) retenu pour l'acier de construction S355 ?",
    options: [
      { id: 'a', label: "A) 30 000 MPa" },
      { id: 'b', label: "B) 210 000 MPa (210 GPa)" },
      { id: 'c', label: "C) 500 000 MPa" },
    ],
    correct: 'b',
    explanation: "Le module d'élasticité de tous les aciers de construction (S235, S275, S355, S460) est égal à E = 210 000 MPa (210 GPa).",
  },
};
