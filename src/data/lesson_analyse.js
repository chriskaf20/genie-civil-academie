// ── Lesson: Analyse Structurelle & Éléments Finis — Module 08 ──────────────────
export const lesson_analyse = {
  moduleId: 8,
  slug: 'structures',
  lessonIndex: 1,
  title: "Analyse Structurelle Avancée, Méthode des Éléments Finis (MEF) & Dynamique",
  subtitle: "Module 08 — Analyse Structurelle & Éléments Finis",
  level: 'Avancé',
  duration: '60h',
  diagramType: 'rebar_beam',
  tags: ['Éléments Finis', 'MEF', 'Matrice de Rigidité', 'Dynamique', 'Fréquence Propre', 'Eurocode 8', 'P-Delta', 'Robot'],

  steps: [
    {
      id: 1,
      key: 'definition',
      title: "Définition — L'Analyse Structurelle Avancée & la MEF",
      icon: '📖',
      type: 'definition',
      fr: 'Analyse Matricielle, Méthode des Éléments Finis & Dynamique des Structures',
      en: 'Advanced Structural Analysis & Finite Element Method (FEM)',
      metier: "Pratiquée par les ingénieurs calculs de structures complexes, spécialistes en ingénierie sismique (Eurocode 8) et ingénieurs R&D en modélisation numérique (Robot, SAP2000, ANSYS, Abaqus).",
      content: `L'**analyse structurelle avancée** et la **Méthode des Éléments Finis (MEF / FEM)** constituent le cœur du calcul numérique moderne en génie civil. Elle consiste à discrétiser une structure complexe (poutre, voile, coque, pont, tour) en un assemblage d'éléments géométriques simples (éléments barres, poutres, plaques 2D, solides 3D) interconnectés par des **nœuds**.

### Les 3 grands volets de l'analyse structurelle numérique :
1. **L'Analyse Matricielle Statique Linéaire** : Résolution du système d'équations fondamentales $[K] \\{U\\} = \\{F\\}$ où $[K]$ est la matrice de rigidité globale, $\\{U\\}$ le vecteur des déplacements nodaux et $\\{F\\}$ le vecteur des forces appliquées.
2. **La Dynamique des Structures & Analyse Sismique** : Étude du comportement sous charges temporelles vibratoires (séisme, vent, trafic ferroviaire) par la recherche des **fréquences propres ($f_n$)** et **modes de vibration** ($[M]\\{\\ddot{u}\\} + [C]\\{\\dot{u}\\} + [K]\\{u\\} = \\{F(t)\\}$).
3. **L'Analyse Non-Linéaire (P-Delta & Plastification)** : Prise en compte des grandes déformations (non-linéarité géométrique P-Delta) et du comportement plastique post-élastique des matériaux (non-linéarité matérielle).

> 💡 **Le principe de la MEF** : Interpoler le champ de déplacement continu $u(x,y,z)$ à l'intérieur d'un élément à partir des déplacements aux nœuds grâce à des **fonctions de forme (Shape Functions $N_i$)**.`,
    },

    {
      id: 2,
      key: 'importance',
      title: "Pourquoi l'analyse MEF est indispensable dans les grands projets",
      icon: '⚠️',
      type: 'importance',
      content: `Les structures modernes (gratte-ciels, ponts à haubans, stades, enceintes nucléaires) dépassent le cadre des formules analytiques de RDM classiques.

- **Maîtrise du risque sismique (Eurocode 8)** : L'analyse spectrale modale permet d'évaluer les accélérations et déplacements de chaque étage lors d'un séisme majeur.
- **Détection des concentrations de contraintes** : Visualisation des zones hyper-chargées autour des ouvertures, trémies et voiles (effets de pointe / singularités).
- **Confort vibratoire des passerelles & planchers** : Évitement du phénomène de résonance sous le pas des piétons ou le passage de TGV ($f_{propre} \\ge 3\\text{ à } 5\\text{ Hz}$).
- **Optimisation topologique des matériaux** : Réduction du poids propre et gain de béton/acier en plaçant la matière là où les contraintes von Mises sont maximales.

> ⚠️ **Règle d'or** : "Garbage In, Garbage Out (GIGO) ! La MEF ne remplace jamais le bon sens physique de l'ingénieur. Toujours vérifier la somme des réactions d'appui ($\\sum R = \\sum F_{ext}$) et réaliser un prédimensionnement analytique simple avant de faire confiance au logiciel."`,
    },

    {
      id: 3,
      key: 'applications',
      title: "Applications terrain — Outils numériques & Modélisation",
      icon: '🏗️',
      type: 'applications',
      examples: [
        {
          context: "Modélisation de Tours & Gratte-ciels sous Vent et Séisme",
          text: "Analyse matricielle 3D globale intégrant les effets P-Delta, la torsion d'ensemble du noyau béton et le calcul de la période fondamentale $T_1$.",
        },
        {
          context: "Calcul de Dalles & Voiles en Éléments Coques (Shell 2D)",
          text: "Discrétisation des dalles pleines par éléments finis quadrangulaires (DKP / Mindlin) pour obtenir les cartographies de moments $M_{xx}, M_{yy}, M_{xy}$ (Méthode de Wood-Armer).",
        },
        {
          context: "Analyse Sismique Modale Spectrale (Eurocode 8)",
          text: "Calcul des modes propres et combinaison spectrale SRSS / CQC pour déterminer les efforts sismiques équivalents sur les poteaux et voiles.",
        },
        {
          context: "Modélisation des Assemblages Complexes par Éléments Finis 3D",
          text: "Analyse non-linéaire des contraintes de contact et de plastification dans les platines d'acier sous IDEA Statica ou Abaqus.",
        },
        {
          context: "Étude Vibratoire des Passerelles Piétonnes",
          text: "Calcul des fréquences propres verticales et transversales pour éviter l'instabilité latérale dynamique (effet Millenium Bridge).",
        },
        {
          context: "Calcul de Phase de Construction (Stage Construction)",
          text: "Simulation temporelle de l'avancement du chantier prenant en compte le fluage du béton et le montage progressif de la structure.",
        },
      ],
    },

    {
      id: 4,
      key: 'theory',
      title: "Théorie — Équation Matricielle, Rigidité & Éléments Finis",
      icon: '📐',
      type: 'theory',
      diagramType: 'rebar_beam',
      content: `### 1. La Matrice de Rigidité Élémentaire d'une Poutre 2D (Euler-Bernoulli)

Pour un élément de poutre 2D à 2 nœuds (3 degrés de liberté par nœud : $u, w, \\theta$), la matrice de rigidité $[k_e]$ dans son repère local associe effort normal $N$, effort tranchant $V$ et moment fléchissant $M$ :

$$\\begin{bmatrix} N_1 \\\\ V_1 \\\\ M_1 \\\\ N_2 \\\\ V_2 \\\\ M_2 \\end{bmatrix} = 
\\begin{bmatrix} 
\\frac{EA}{L} & 0 & 0 & -\\frac{EA}{L} & 0 & 0 \\\\
0 & \\frac{12EI}{L^3} & \\frac{6EI}{L^2} & 0 & -\\frac{12EI}{L^3} & \\frac{6EI}{L^2} \\\\
0 & \\frac{6EI}{L^2} & \\frac{4EI}{L} & 0 & -\\frac{6EI}{L^2} & \\frac{2EI}{L} \\\\
-\\frac{EA}{L} & 0 & 0 & \\frac{EA}{L} & 0 & 0 \\\\
0 & -\\frac{12EI}{L^3} & -\\frac{6EI}{L^2} & 0 & \\frac{12EI}{L^3} & -\\frac{6EI}{L^2} \\\\
0 & \\frac{6EI}{L^2} & \\frac{2EI}{L} & 0 & -\\frac{6EI}{L^2} & \\frac{4EI}{L}
\\end{bmatrix}
\\begin{bmatrix} u_1 \\\\ w_1 \\\\ \\theta_1 \\\\ u_2 \\\\ w_2 \\\\ \\theta_2 \\end{bmatrix}$$

### 2. Passage du Repère Local au Repère Global ($[T]$)
Pour assembler les matrices élémentaires dans le repère global de la structure :

$$[k_g] = [T]^T \\cdot [k_e] \\cdot [T] \\qquad \\{U_g\\} = [T]^T \\{U_e\\}$$

### 3. Équation Fondamentale de la Dynamique des Structures

$$[M] \\{\\ddot{u}(t)\\} + [C] \\{\\dot{u}(t)\\} + [K] \\{u(t)\\} = \\{F(t)\\}$$

- **Recherche des Modes Propres (Problème aux valeurs propres)** : En vibration libre non amortie ($\\{F(t)\\} = 0$) :

$$\\det \\left( [K] - \\omega_n^2 [M] \\right) = 0 \\quad \\Rightarrow \\quad f_n = \\frac{\\omega_n}{2\\pi} \\quad [\\text{Hz}]$$

- $\\omega_n$ = pulsation propre [rad/s], $f_n$ = fréquence propre [Hz], $T_n = 1/f_n$ = période propre [s].`,
    },

    {
      id: 5,
      key: 'formulas',
      title: "Formules essentielles — Matrice de Rigidité, Fréquence & Séisme",
      icon: '🔢',
      type: 'formulas',
      diagramType: 'rebar_beam',
      formulas: [
        {
          name: "Fréquence propre fondamentale d'un système à 1 ddl (Oscillateur)",
          latex: "f_0 = \\frac{1}{2\\pi} \\cdot \\sqrt{\\frac{k}{m}} \\quad [\\text{Hz}] \\qquad T_0 = 2\\pi \\cdot \\sqrt{\\frac{m}{k}} \\quad [\\text{s}]",
          description: "m = masse oscillante [kg], k = rigidité latérale équivalente de la structure [N/m] (ex: k = 3EI/L³ pour un poteau console).",
        },
        {
          name: "Rigidité latérale d'un poteau encastré-articulé et encastré-encastré",
          latex: "k_{\\text{encastré-libre}} = \\frac{3EI}{L^3} \\qquad k_{\\text{encastré-encastré}} = \\frac{12EI}{L^3}",
          description: "La rigidité d'un poteau biconnecté aux deux extrémités est 4 fois supérieure à celle d'un poteau en console !",
        },
        {
          name: "Facteur d'amplification dynamique sous charge harmonique (D)",
          latex: "D = \\frac{1}{\\sqrt{\\left(1 - \\left(\\frac{f}{f_0}\\right)^2\\right)^2 + \\left(2 \\xi \\frac{f}{f_0}\\right)^2}}",
          description: "f = fréquence d'excitation extérieure, ξ = taux d'amortissement critique (ξ ≈ 2% à 5% pour le béton/acier). À la résonance (f = f0) : D ≈ 1 / (2ξ) = 10 à 25 !",
        },
        {
          name: "Calcul de contrainte Von Mises en MEF 2D/3D",
          latex: "\\sigma_{VM} = \\sqrt{\\sigma_x^2 - \\sigma_x \\sigma_y + \\sigma_y^2 + 3 \\tau_{xy}^2}",
          description: "Critère de plastification de Von Mises utilisé pour évaluer les contraintes équivalentes dans les voiles et platines d'acier.",
        },
        {
          name: "Estimation de la période fondamentale d'un bâtiment (Eurocode 8)",
          latex: "T_1 = C_t \\cdot H^{3/4} \\quad [\\text{s}] \\qquad (C_t = 0{,}085 \\text{ pour acier, } 0{,}075 \\text{ pour béton, } 0{,}050 \\text{ pour voiles})",
          description: "H = hauteur totale du bâtiment en mètres. Permet de vérifier l'ordre de grandeur de la période propre calculée par le logiciel.",
        },
        {
          name: "Masse Modale Effective (Eurocode 8)",
          latex: "\\sum_{j=1}^{K} m_j^* \\ge 0{,}90 \\cdot M_{total} \\quad (90\\% \\text{ de la masse totale})",
          description: "Critère réglementaire Eurocode 8 exigeant de retenir suffisamment de modes de vibration dans l'analyse spectrale.",
        },
      ],
    },

    {
      id: 6,
      key: 'stepbystep',
      title: "Calcul complet — Calcul de la fréquence propre et de l'effort sismique d'un portique",
      icon: '🔬',
      type: 'stepbystep',
      problem: "Soit un portique de bâtiment constitué d'une dalle rigide de masse m = 40 tonnes (40 000 kg) supportée par 4 poteaux en béton armé encastrés en pied et en tête (hauteur H = 3,50 m, section carrée 30×30 cm, I = b4/12 = 0,000675 m4, E = 32 000 MPa). 1) Calculer la rigidité latérale totale k_tot des 4 poteaux. 2) Calculer la pulsation propre ω0, la fréquence propre f0 et la période T0 du portique. 3) Vérifier l'effort tranchant sismique de base V_k sous une accélération spectrale S_d(T0) = 2,5 m/s².",
      steps_demo: [
        { n: 1, text: "Calcul de la rigidité latérale d'un poteau encastré-encastré : k1 = 12 × E × I / H³" },
        { n: 2, text: "Application numérique : k1 = 12 × (32 × 10⁹) × 0,000675 / (3,50³) = 259 200 000 / 42,875 = 6 045 481 N/m = 6,045 MN/m" },
        { n: 3, text: "Rigidité latérale totale des 4 poteaux : k_tot = 4 × 6,04548 = 24,182 MN/m = 24 181 924 N/m" },
        { n: 4, text: "Calcul de la pulsation propre ω0 : ω0 = √(k_tot / m) = √(24 181 924 / 40 000) = √604,55 = 24,59 rad/s" },
        { n: 5, text: "Calcul de la fréquence propre f0 et de la période T0 : f0 = ω0 / 2π = 24,59 / 6,283 = 3,91 Hz | T0 = 1 / f0 = 0,256 s" },
        { n: 6, text: "Estimation empirique Eurocode 8 (H = 3,5 m) : T1 = 0,075 × 3,5^(0,75) = 0,192 s (Ordre de grandeur très cohérent avec 0,256 s) ✓" },
        { n: 7, text: "Calcul de l'effort tranchant sismique de base V_k : V_k = m × S_d(T0) = 40 000 kg × 2,5 m/s² = 100 000 N = 100,0 kN (soit 25,0 kN par poteau)." },
      ],
      result_latex: "f_0 = \\textbf{3{,}91 Hz} \\qquad T_0 = \\textbf{0{,}256 s} \\qquad V_{k,sismique} = \\textbf{100{,}0 kN} \\quad (25{,}0 \\text{ kN/poteau}) \\quad \\checkmark",
    },

    {
      id: 7,
      key: 'units',
      title: "Unités & Symboles en Analyse Structurelle & MEF — Tableau de référence",
      icon: '📏',
      type: 'units',
      table: [
        { grandeur: "Matrice de rigidité [K]", si: "N/m ou kN/m (Translation) | kNm/rad (Rotation)", imperial: "kips/in", conversion: "Associe les déplacements aux forces nodales" },
        { grandeur: "Fréquence propre f_n", si: "Hertz [Hz] (1 Hz = 1 cycle/seconde)", imperial: "cps (cycles/sec)", conversion: "f = ω / 2π = 1 / T" },
        { grandeur: "Pulsation propre ω_n", si: "Radians par seconde [rad/s]", imperial: "rad/sec", conversion: "ω = 2π f = √(k/m)" },
        { grandeur: "Taux d'amortissement critique ξ", si: "Pourcentage [%]", imperial: "%", conversion: "Béton armé ≈ 5% | Acier soudé ≈ 2% | Bois ≈ 3%" },
        { grandeur: "Accélération sismique agr / S_d", si: "m/s² ou g (g = 9,81 m/s²)", imperial: "ft/s²", conversion: "Zone sismique 4 (France) : agr = 1,6 m/s² (0,163 g)" },
        { grandeur: "Contrainte Von Mises σ_VM", si: "MPa (N/mm²)", imperial: "psi / ksi", conversion: "Contrainte équivalente de plastification en 2D/3D" },
      ],
      note: "⚠️ ATTENTION : En modélisation EF, toujours vérifier la compatibilité des systèmes d'unités ! Si $E$ est en N/mm² (MPa), les longueurs doivent être en mm, les forces en N et les masses en tonnes !",
    },

    {
      id: 8,
      key: 'hypotheses',
      title: "Hypothèses & conditions de validité du calcul MEF",
      icon: '📋',
      type: 'hypotheses',
      items: [
        { type: 'info', text: "L'analyse statique linéaire repose sur l'hypothèse des petits déplacements et du comportement élastique linéaire Hookéen ($\\sigma = E \\varepsilon$)." },
        { type: 'info', text: "Maillage (Meshing) : La précision des contraintes dépend directement de la finesse du maillage. Dans les zones à fort gradient de contrainte (coins de trémies), raffiner le maillage." },
        { type: 'warning', text: "ATTENTION : Singularités de contrainte : Sous les charges ponctuellement appliquées ou aux angles rentrants à 90°, la contrainte MEF tend vers l'infini avec le raffinement du maillage ! Ne pas interpréter la valeur ponctuelle max mais lisser sur la largeur utile." },
        { type: 'warning', text: "Effet P-Delta (Non-linéarité géométrique) : Pour les bâtiments élevés ($H > 30\\text{ m}$), l'effort normal $P$ multiplié par le déplacement latéral $\\Delta$ crée un moment additionnel $M_{P-\\Delta} = P \\cdot \\Delta$ qui amplifie le basculement !" },
        { type: 'tip', text: "Méthode de Wood-Armer : Pour ferrailler une dalle d'après un calcul MEF 2D, transformer les moments bidirectionnels $M_xx, M_yy, M_xy$ en moments d'armatures de flexion $M_ud,x$ et $M_ud,y$." },
        { type: 'warning', text: "Analyse Sismique Eurocode 8 : Retenir obligatoirement un nombre de modes propres garantissant l'activation d'au moins **90% de la masse modale effective** dans chaque direction x et y." },
      ],
    },

    {
      id: 9,
      key: 'simple_examples',
      title: "Exemples guidés — Modélisation & Fréquences propres",
      icon: '✏️',
      type: 'examples_simple',
      examples: [
        {
          title: "Exemple 1 : Fréquence propre d'une passerelle piétonne",
          given: "Passerelle métallique modélisée par une masse m = 15 000 kg et une rigidité globale k = 1 500 000 N/m",
          find: "La fréquence propre fondamentale f0 et risque de résonance avec le pas des piétons (1,8 à 2,2 Hz)",
          solution_latex: "\\omega_0 = \\sqrt{\\frac{1\\,500\\,000}{15\\,000}} = \\sqrt{100} = 10{,}0 \\text{ rad/s} \\qquad f_0 = \\frac{10{,}0}{2\\pi} = 1{,}59 \\text{ Hz}",
          result: "f0 = 1,59 Hz ≈ 1,8-2,2 Hz → Risque de résonance élevé ! Alourdir ou raidir la passerelle pour passer f0 > 3,5 Hz.",
        },
        {
          title: "Exemple 2 : Calcul du moment non-linéaire P-Delta d'un poteau de tour",
          given: "Poteau supportant une charge axiale P = 2 000 kN. Le déplacement latéral de tête calculé au 1er ordre est Δ1 = 40 mm (0,040 m)",
          find: "Le moment de second ordre additionnel M_P-Delta",
          solution_latex: "M_{P-\\Delta} = P \\cdot \\Delta_1 = 2000 \\text{ kN} \\times 0{,}040 \\text{ m} = 80{,}0 \\text{ kNm}",
          result: "Le moment de second ordre P-Delta ajoute 80 kNm au moment d'encastrement en pied de poteau (+15 à 20%).",
        },
        {
          title: "Exemple 3 : Matrice de rigidité de barre 1D en traction",
          given: "Barre d'acier L = 2,0 m, A = 10 cm² = 1000 mm², E = 210 000 MPa",
          find: "La raideur k = EA/L de la barre",
          solution_latex: "k = \\frac{E \\cdot A}{L} = \\frac{210\\,000 \\times 1000}{2000} = 105\\,000 \\text{ N/mm} = 105 \\text{ MN/m}",
          result: "Raideur axiale k = 105 MN/m.",
        },
      ],
    },

    {
      id: 10,
      key: 'real_examples',
      title: "Exemple réel — Analyse Sismique du Viaduc de Millau",
      icon: '🏢',
      type: 'examples_real',
      diagramType: 'rebar_beam',
      examples: [
        {
          context: "Viaduc autoroutier à haubans de 2 460 m avec piles béton jusqu'à 245 m de haut",
          scenario: "Modélisation MEF complète sous le logiciel FINEL/ANSYS avec 85 000 éléments finis. Analyse modale spectrale pour dimensionner les appuis glissants et amortisseurs sismiques aux culées.",
          decomposition_latex: "\\text{Période fondamentale du Mode 1 (Balancement transversal) : } T_1 = 4{,}60 \\text{ s}",
          lesson: "Grâce à une période propre très longue (4,6 s), le viaduc filtre les hautes fréquences des séismes. Les amortisseurs hydrauliques absorbent 80% de l'énergie en cas de secousse majeure.",
        },
      ],
    },

    {
      id: 11,
      key: 'diagrams',
      title: "Schéma d'un maillage MEF & Modes propres de vibration",
      icon: '📊',
      type: 'interactive_diagram',
      diagramType: 'rebar_beam',
      description: "Visualisez la discrétisation en éléments finis d'une structure portique, la déformée des 3 premiers modes propres de vibration et le principe du lissage des contraintes de Von Mises.",
      diagram_description: [
        "Maillage EF : Discrétisation d'une dalle en éléments quadrangulaires avec maillage raffiné autour de la trémie",
        "Deformée modale : Mode 1 (Flexion fondamentale), Mode 2 (Torsion d'ensemble), Mode 3 (Flexion d'ordre 2)",
        "Isocontraintes de Von Mises : Cartographie de couleurs (du bleu au rouge) identifiant les zones critiques à renforcer",
      ],
    },

    {
      id: 12,
      key: 'mistakes',
      title: "Erreurs fatales en Calcul des Éléments Finis",
      icon: '⛔',
      type: 'mistakes',
      items: [
        {
          mistake: "Confondre appui articulé et appui encastré dans le modèle EF",
          trap: "Modéliser un pied de poteau de charpente en encastrement parfait alors qu'il est réalisé par une platine mince à 2 boulons",
          fix: "Un faux encastrement crée des moments énormes non réels sur la fondation et sous-estime les déplacements en tête du bâtiment de 300% ! Utiliser des raideurs de ressort d'appui réelles ($K_\\theta$).",
        },
        {
          mistake: "Travailler avec un maillage trop grossier dans les zones de concentration",
          trap: "Modéliser une dalle de 20 m avec seulement 4 grands éléments finis de 5 m de côté",
          fix: "Les moments fléchissants réels sous poteaux sont sous-estimés de 40% ! Réaliser une étude de convergence de maillage (diviser la taille des éléments par 2 jusqu'à stabilisation du résultat à < 3%).",
        },
        {
          mistake: "Ignorer la masse modale manquante en calcul sismique",
          trap: "Arrêter l'analyse modale aux 3 premiers modes qui ne mobilisent que 60% de la masse du bâtiment",
          fix: "Violations graves de l'Eurocode 8 ! Augmenter le nombre de modes retenus jusqu'à atteindre au moins **90% de la masse modale cumulative** ou utiliser la correction de masse manquante (Mode résiduel).",
        },
        {
          mistake: "Surestimer la rigidité des dalles béton en ignorant la fissuration",
          trap: "Calculer les fréquences propres d'un bâtiment en prenant le module élastique brut du béton non fissuré ($E_{cm} = 33\\text{ GPa}$)",
          fix: "En service, la fissuration réduit l'inertie efficace des dalles et poteaux de 30 à 50% ! Pour l'analyse sismique, l'Eurocode 8 impose d'utiliser une rigidité fissurée égale à $50\\%$ de la rigidité non fissurée ($EI_{eff} = 0{,}50 EI_{brut}$).",
        },
      ],
    },

    {
      id: 13,
      key: 'tips',
      title: "Astuces de l'ingénieur calcul de structures & MEF",
      icon: '💡',
      type: 'tips',
      tips: [
        "Vérification d'équilibre de premier niveau : Après tout calcul EF, afficher la table des RECT (Réactions d'appui). La somme $\\sum R_z$ doit égaler à $0{,}01\\%$ près la somme des charges verticales appliquées !",
        "Dégagement des singularités MEF : Ne jamais dimensionner les aciers d'une dalle sur la contrainte pointe au droit d'un poteau ponctuel. Lisser le moment $M_{Ed}$ sur une largeur d'appui $b_0 + h$.",
        "Règle empirique de période sismique : Pour un bâtiment courant en béton armé de $N$ étages, la période fondamentale vaut approximativement $T_1 \\approx 0{,}10 \\times N$ secondes (ex: 10 étages $\\to T_1 \\approx 1{,}0\\text{ s}$).",
        "Analyse P-Delta rapide (Critère de sensibilité $\\theta$) : Calculer $\\theta = \\frac{P_{tot} \\cdot d_{r}}{V_{tot} \\cdot h}$. Si $\\theta \\le 0{,}10$, les effets P-Delta sont négligeables. Si $0{,}10 < \\theta \\le 0{,}20$, amplifier les sollicitations par $\\frac{1}{1 - \\theta}$.",
        "Utilisation des diaphragmes rigides : Pour les planchers béton d'immeubles, appliquer l'hypothèse de diaphragme rigide indeformable dans son plan pour réduire le nombre de ddl et accélérer le calcul sismique par 10.",
        "Logiciels de calcul de structure de référence : Robot Structural Analysis, SAP2000, ETABS (Bâtiments hauts), SCIA Engineer, Advance Design, Abaqus / ANSYS (Calculs non-linéaires poussés).",
      ],
    },

    {
      id: 14,
      key: 'normes',
      title: "Normes & Références — Analyse Structurelle & MEF",
      icon: '📜',
      type: 'norms',
      norms: [
        { code: "NF EN 1990 (Eurocode 0)", description: "Bases de calcul des structures (Combinaisons d'actions ELU / ELS, fiabilité et gestion de la qualité)." },
        { code: "NF EN 1998-1 (Eurocode 8)", description: "Calcul des structures pour leur résistance aux séismes — Règles générales, actions sismiques et règles pour les bâtiments (Analyse modale spectrale)." },
        { code: "ISO 2394", description: "Principes généraux de la fiabilité des constructions et de la vérification des structures." },
        { code: "Guide NAFEMS (MEF)", description: "National Agency for Finite Element Methods and Standards — Recommandations de bonnes pratiques de modélisation EF." },
        { code: "Fascicule de documentation FD P06-030", description: "Eurocode 8 — Guide d'application des règles de calcul sismique aux bâtiments." },
        { code: "Règles PS-MI / PS92", description: "Règles de construction paraseismique applicables aux maisons individuelles et ouvrages simples." },
      ],
    },

    {
      id: 15,
      key: 'exercises',
      title: "Exercices Analyse Structurelle & Éléments Finis — 3 niveaux",
      icon: '✍️',
      type: 'exercises',
      exercises: [
        {
          id: 'ex_ana_1',
          number: 1,
          difficulty: 'Facile',
          text: "Un oscillateur simple représentant un pylône réservoir d'eau a une masse m = 20 000 kg et une raideur k = 800 000 N/m. Calculer la pulsation propre ω0, la fréquence propre f0 et la période propre T0.",
          hint: "ω0 = √(k/m). f0 = ω0 / 2π. T0 = 1 / f0.",
          answer_latex: "\\omega_0 = \\sqrt{\\frac{800\\,000}{20\\,000}} = \\sqrt{40} = 6{,}325 \\text{ rad/s} \\qquad f_0 = \\frac{6{,}325}{2\\pi} = 1{,}006 \\text{ Hz} \\qquad T_0 = 0{,}994 \\text{ s}",
          answer_text: "ω0 = 6,32 rad/s | Fréquence f0 = 1,01 Hz | Période T0 = 0,99 s",
        },
        {
          id: 'ex_ana_2',
          number: 2,
          difficulty: 'Moyen',
          text: "Un bâtiment en béton armé de 12 étages a une hauteur H = 38 m. 1) Estimer sa période fondamentale T1 par la formule empirique Eurocode 8 T1 = 0,075 · H^(3/4). 2) Comparer avec la règle rapide T1 ≈ 0,10 · N.",
          hint: "H^0.75 = 38^0.75. N = 12.",
          answer_latex: "T_1 = 0{,}075 \\times 38^{0{,}75} = 0{,}075 \\times 15{,}283 = 1{,}146 \\text{ s} \\qquad \\text{Règle rapide : } T_1 \\approx 0{,}10 \\times 12 = 1{,}20 \\text{ s}",
          answer_text: "Eurocode 8 T1 = 1,15 s | Règle rapide T1 = 1,20 s (Très bonne concordance).",
        },
        {
          id: 'ex_ana_3',
          number: 3,
          difficulty: 'Difficile',
          text: "Dans une analyse MEF 2D d'un voile béton, les contraintes planes mesurées au nœud critique sont σx = 12,0 MPa, σy = 2,0 MPa et τxy = 4,0 MPa. Calculer la contrainte équivalente de Von Mises σ_VM.",
          hint: "σ_VM = √(σx² - σx·σy + σy² + 3·τxy²).",
          answer_latex: "\\sigma_{VM} = \\sqrt{12^2 - (12 \\times 2) + 2^2 + 3 \\times 4^2} = \\sqrt{144 - 24 + 4 + 48} = \\sqrt{172} = 13{,}115 \\text{ MPa}",
          answer_text: "Contrainte de Von Mises σ_VM = 13,12 MPa.",
        },
      ],
    },

    {
      id: 16,
      key: 'corrections',
      title: "Corrections détaillées",
      icon: '✅',
      type: 'corrections',
      note: "Retrouvez les démarches complètes d'assemblage matriciel, d'analyse modale et de résolution EF en cliquant sur 'Voir la correction'.",
    },

    {
      id: 17,
      key: 'quiz',
      title: "Quiz Analyse Structurelle & Éléments Finis — 3 questions",
      icon: '🎯',
      type: 'quiz',
      questions: [
        {
          id: 'q_ana_1',
          question: "Dans l'analyse matricielle statique linéaire des structures, quelle équation relie la matrice de rigidité [K], le vecteur des déplacements {U} et le vecteur des forces {F} ?",
          options: [
            { id: 'a', text: "[K] = {F} × {U}" },
            { id: 'b', text: "[K] {U} = {F}" },
            { id: 'c', text: "{U} = [K] {F}" },
            { id: 'd', text: "[K] + {U} = {F}" },
          ],
          correct: 'b',
          explanation: "L'équation fondamentale de la statique matricielle est [K] {U} = {F}, où la matrice de rigidité [K] convertit les déplacements nodaux {U} en forces extérieures {F}.",
        },
        {
          id: 'q_ana_2',
          question: "Selon l'Eurocode 8 pour le calcul sismique modal spectral, quel pourcentage minimal de la masse modale effective cumulative doit être activé dans chaque direction ?",
          options: [
            { id: 'a', text: "50%" },
            { id: 'b', text: "75%" },
            { id: 'c', text: "Au moins 90%" },
            { id: 'd', text: "100% obligatoire" },
          ],
          correct: 'c',
          explanation: "L'Eurocode 8 impose d'inclure suffisamment de modes de vibration pour cumuler au moins 90% de la masse modale effective de la structure dans chaque direction d'analyse.",
        },
        {
          id: 'q_ana_3',
          question: "Que désigne l'effet P-Delta dans l'analyse des structures métalliques ou en béton élevées ?",
          options: [
            { id: 'a', text: "La pression du vent sur les vitres" },
            { id: 'b', text: "L'effet non-linéaire géométrique de second ordre où l'effort normal P multiplié par le déplacement latéral Δ crée un moment de flexion additionnel" },
            { id: 'c', text: "La variation de température entre le jour et la nuit" },
            { id: 'd', text: "La corrosion des aciers" },
          ],
          correct: 'b',
          explanation: "L'effet P-Delta est une non-linéarité géométrique de second ordre : le déplacement latéral Δ des poteaux soumis à une charge verticale P engendre un moment M = P · Δ qui amplifie la déformation.",
        },
      ],
    },

    {
      id: 18,
      key: 'exam_questions',
      title: "Questions d'examen — Niveau Master Calcul de Structures (CHEBAP / ENPC)",
      icon: '🎓',
      type: 'exam',
      questions: [
        "Établissez la matrice de rigidité élémentaire d'une barre 2D travaillant en traction-compression axiale (2 ddl). Démontrez la transformation de cette matrice du repère local au repère global $[k_g] = [T]^T [k_e] [T]$.",
        "Présentez la méthode de superposition modale et la combinaison des réponses sismiques maximales par la règle CQC (Complete Quadratic Combination) et SRSS selon l'Eurocode 8.",
        "Détaillez la formulation des éléments finis coques (Shells) combinant l'état de membrane (efforts dans le plan Nxx, Nyy, Nxy) et l'état de plaque fléchie (Mxx, Myy, Mxy). Expliquez le phénomène de verrouillage en cisaillement (Shear Locking).",
        "Expliquez le principe du calcul poussoir non-linéaire (Analyse Push-over) selon l'Eurocode 8 pour évaluer la capacité de plastification et la ductilité comportementale d'une structure.",
      ],
    },

    {
      id: 19,
      key: 'interview_questions',
      title: "Questions d'entretien — Ingénieur Calculateur de Structures / MEF",
      icon: '💼',
      type: 'interview',
      questions: [
        {
          question: "Comment vérifiez-vous la validité et la qualité d'un modèle d'éléments finis complexe sous Robot ou SAP2000 avant d'exploiter les résultats ?",
          answer_hint: "Procédure de contrôle qualité : 1. Vérification visuelle des liaisons et encastrements. 2. Somme des réactions d'appui (∑Rz doit égaler la masse totale de la structure). 3. Vérification de la masse modale cumulative (≥ 90% sous Eurocode 8). 4. Analyse des déformées sous poids propre (pas d'éléments volants ou disjoints). 5. Recoupement de la période fondamentale T1 avec la formule empirique 0.1N ou 0.075 H^(3/4).",
        },
        {
          question: "Pourquoi réduit-on la rigidité des éléments de béton armé de 50% ($EI_{eff} = 0{,}50 EI$) lors d'une analyse sismique Eurocode 8 ?",
          answer_hint: "Sous l'action d'un séisme majeur, le béton armé subit des micro-fissurations répétées en flexion et cisaillement. Cette fissuration réduit l'inertie équivalente de la section. Pour ne pas surestimer la raideur du bâtiment et sous-estimer sa période propre réelle T1 (ce qui sous-estimerait les déplacements latéraux), l'Eurocode 8 impose de diviser par 2 la rigidité non fissurée.",
        },
        {
          question: "Qu'est-ce qu'une 'singularité de contrainte' en éléments finis et comment la traiter lors du ferraillage d'une dalle ?",
          answer_hint: "Une singularité se produit aux points d'appui ponctuels ou angles rentrants à 90° : la contrainte théorique MEF tend vers l'infini au fur et à mesure que l'on affine le maillage. Pour ferrailler la dalle, il faut lisser les pics de moments sur une largeur de répartition réaliste (ex: largeur du poteau + épaisseur de dalle b_0 + h) ou utiliser les moments intégrés par bande (strip moments).",
        },
      ],
    },

    {
      id: 20,
      key: 'practical_case',
      title: "Cas pratique — Analyse MEF d'un plancher dalle avec trémie sous Robot",
      icon: '🔧',
      type: 'practical',
      scenario: "Étude de cas — Analyse par éléments finis d'un plancher dalle en béton armé (e = 22 cm, portée 8,0×8,0 m) percé d'une trémie d'ascenseur de 2,0×2,5 m et supporté par 4 poteaux 40×40 cm",
      description: `**Mise en situation** : Ingénieur structures. Modélisation sous Robot Structural Analysis en éléments plaques (EF quadrangulaires 25×25 cm). Charge permanente g = 6,5 kN/m², Surcharge q = 3,0 kN/m² (q_Ed = 13,275 kN/m²).`,
      resolution_latex_1: "M_{x,max} = 48{,}5 \\text{ kNm/m (en travée)} \\qquad M_{x,appui} = -92{,}0 \\text{ kNm/m (sur poteaux)}",
      resolution_latex_2: "\\text{Lissage Wood-Armer autour de la trémie : } M_{ud,x} = M_{xx} + |M_{xy}| = 48{,}5 + 12{,}0 = 60{,}5 \\text{ kNm/m}",
      resolution_latex_3: "\\text{Ferraillage requis en travée : } A_{s,x} = \\frac{60{,}5 \\times 10^6}{0{,}9 \\times 200 \\times 435} = 7{,}73 \\text{ cm}^2\\text{/m} \\quad (HA12 \\text{ tous les } 14 \\text{ cm})",
      conclusion: "Plancher validé. Disposition de renforts d'armatures de chevêtre 4HA14 le long des bords de la trémie pour reprendre la concentration de cisaillement et de torsion Mxy.",
    },

    {
      id: 21,
      key: 'summary',
      title: "Résumé exécutif — L'Analyse Structurelle en 6 points",
      icon: '📋',
      type: 'summary',
      content: `### L'Analyse Structurelle en 6 fondamentaux

1. **Équation Matricielle Statique** : $[K] \\{U\\} = \\{F\\}$ — assemblage des matrices élémentaires dans le repère global.
2. **Équation Dynamique** : $[M]\\{\\ddot{u}\\} + [C]\\{\\dot{u}\\} + [K]\\{u\\} = \\{F(t)\\}$ — calcul des fréquences propres $f_n = \\frac{\\omega_n}{2\\pi}$.
3. **Analyse Sismique Modale (Eurocode 8)** : Cumul d'au moins $90\\%$ de la masse modale effective.
4. **Effets Non-Linéaires P-Delta** : Amplification des moments de flexion par le produit de la charge verticale et du déplacement latéral ($P \\cdot \\Delta$).
5. **Maillage & Singularités** : Maillage raffiné requis mais lissage des contraintes de pointe au droit des appuis ponctuels.
6. **Contrôle Qualité du Modèle** : Toujours vérifier la somme des réactions d'appui ($\\sum R_z = \\sum F_z$) et la cohérence des périodes propres.`,
    },

    {
      id: 22,
      key: 'key_points',
      title: "Points clés à mémoriser — MEF & Analyse Structurelle",
      icon: '⭐',
      type: 'keypoints',
      points: [
        "Méthode des Éléments Finis : Discrétisation de la structure en nœuds et éléments finis",
        "Matrice de rigidité [K] : Relie les déplacements nodaux {U} aux forces extérieures {F}",
        "Fréquence propre f0 = 1 / (2π) · √(k/m) — résonance dramatique si f_excitation = f0",
        "Eurocode 8 Sismique : Cumuler ≥ 90% de la masse modale effective dans chaque direction",
        "Effet P-Delta : Second ordre géométrique M = P · Δ sur les structures élevées",
        "Ne pas ferrailler sur les singularités de contrainte : lisser les moments sur la largeur d'appui",
        "Garbage In Garbage Out : Toujours vérifier la somme des réactions d'appui avant exploitation !",
      ],
    },

    {
      id: 23,
      key: 'self_assessment',
      title: "Auto-évaluation — Analyse Structurelle & Éléments Finis",
      icon: '🏆',
      type: 'self_assessment',
      description: "Validez vos compétences en analyse matricielle et modélisation éléments finis :",
      objectives: [
        "Je comprends l'assemblage et la résolution de l'équation matricielle statique [K] {U} = {F}",
        "Je sais calculer la pulsation propre ω0, la fréquence f0 et la période T0 d'un oscillateur",
        "Je maîtrise les exigences de l'analyse sismique modale spectrale sous Eurocode 8 (masse modale ≥ 90%)",
        "Je comprends les non-linéarités géométriques (effet P-Delta) et matérielles (plastification)",
        "Je sais interpréter une cartographie de contraintes Von Mises et appliquer la méthode Wood-Armer",
        "Je connais les critères de qualité d'un maillage EF et le lissage des singularités",
        "J'ai résolu les 3 exercices d'analyse structurelle avec succès",
        "J'ai obtenu 3/3 au quiz d'analyse structurelle",
      ],
    },
  ],

  quickQuiz: {
    question: "Dans l'analyse matricielle des structures, quelle équation relie la matrice de rigidité globale [K], le vecteur des déplacements nodaux {U} et le vecteur des forces {F} ?",
    options: [
      { id: 'a', label: "A) [K] = {F} × {U}" },
      { id: 'b', label: "B) [K] {U} = {F}" },
      { id: 'c', label: "C) {U} = [K] {F}" },
    ],
    correct: 'b',
    explanation: "L'équation matricielle fondamentale de la statique linéaire est [K] {U} = {F}.",
  },
};
