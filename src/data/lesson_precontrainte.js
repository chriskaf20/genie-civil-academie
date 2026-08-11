// ── Lesson: Béton Précontraint & Eurocode 2 Part 2 — Module 11 ─────────────────
export const lesson_precontrainte = {
  moduleId: 11,
  slug: 'precontrainte',
  lessonIndex: 1,
  title: "Béton Précontraint par Pré-tension & Post-tension (Eurocode 2)",
  subtitle: "Module 11 — Béton Précontraint & Eurocode 2 Part 2",
  level: 'Avancé',
  duration: '45h',
  diagramType: 'bridge_structure',
  tags: ['Béton Précontraint', 'Eurocode 2', 'Post-tension', 'Pré-tension', 'Freyssinet', 'Torons Y1860', 'Pertes de précontrainte', 'Fluage', 'Retrait'],

  steps: [
    {
      id: 1,
      key: 'definition',
      title: "Définition — Le Béton Précontraint (Eurocode 2-2)",
      icon: '📖',
      type: 'definition',
      fr: 'Béton Précontraint — Principes, Pré-tension & Post-tension',
      en: 'Prestressed Concrete Engineering',
      metier: "Pratiquée par les ingénieurs d'études d'ouvrages d'art, concepteurs de ponts, ingénieurs méthodes précontrainte et spécialistes des procédés Freyssinet / VSL / Soletanche Bachy.",
      content: `Le **béton précontraint** est une technologie majeure du génie civil inventée par **Eugène Freyssinet en 1928**. Elle consiste à introduire dans l'élément en béton, avant l'application des charges extérieures, un effort artificiel permanent de **compression préalable ($P$)** au moyen d'aciers à très haute résistance (câbles de torons).

### Les 2 grands procédés de mise en œuvre :
1. **La Pré-tension (Adhérence directe)** : Les torons sont mis en tension sur un banc fixe d'usine *avant* le coulage du béton. Après durcissement de la pièce, les torons sont sectionnés, transmettant l'effort de compression par adhésion directe béton-acier. Utilisé pour les poutrelles, dalles alvéolées et voussoirs préfabriqués.
2. **La Post-tension (Câbles sous gaines)** : Les câbles sont enfilés dans des gaines métalliques/PEHD incorporées au béton *après* son coulage et son durcissement sur chantier. La mise en tension s'effectue par des vérins hydrauliques prenant appui sur les têtes d'ancrage. Les gaines sont ensuite injectées au **coulis de ciment** pour assurer la protection anticorrosion.

> 💡 **Principe fondamental** : Le béton résiste très bien à la compression ($30\\text{ à } 80\\text{ MPa}$), mais très mal à la traction ($2{,}5\\text{ à } 4\\text{ MPa}$). La précontrainte crée un état de contrainte initiale qui **annule totalement les tractions sous les charges de service** !`,
    },

    {
      id: 2,
      key: 'importance',
      title: "Pourquoi le Béton Précontraint est irremplaçable",
      icon: '⚠️',
      type: 'importance',
      content: `Sans précontrainte, la construction des grands ponts, viaducs, enceintes de confinement nucléaires et réservoirs de GNL serait techniquement impossible.

- **Portées exceptionnelles sans piliers intermédiaires** : Permet des poutres de $25\\text{ à } 60\\text{ m}$ de portée en ponts de routes et jusqu'à $200\\text{ m}$ pour les viaducs à voussoirs successifs.
- **Maîtrise absolue de la fissuration & Étanchéité** : En maintenant le béton en compression permanente (Classe 1 ELS), le béton reste non fissuré, garantissant une étanchéité totale à l'eau et au gaz (cuves de méthaniers).
- **Réduction des flèches et gain de masse** : Hauteur de poutre réduite à $h \\approx L/20$ (contre $L/10$ à $L/12$ en béton armé classique), soit une économie de béton de 40%.
- **Durabilité centenaire** : L'injection des gaines au coulis de ciment protège les aciers de précontrainte de l'attaque des chlorures et de la carbonatation.

> ⚠️ **Règle d'or** : "Calculer impérativement les pertes de précontrainte instantanées et différées (retrait, fluage, relaxation) — la force utile résiduelle $P_{\\infty}$ à 50 ans ne représente que 75% à 85% de la force initiale $P_0$ !"`,
    },

    {
      id: 3,
      key: 'applications',
      title: "Applications terrain — Typologies d'ouvrages précontraints",
      icon: '🏗️',
      type: 'applications',
      examples: [
        {
          context: "Ponts à Poutres Préfabriquées Précontraintes (PRAD / VIPP)",
          text: "Poutres I ou T de 30 à 45 m de portée précontraintes par post-tension sur banc de préfabrication du chantier puis lancées à la grue.",
        },
        {
          context: "Viaducs Construits par Voussoirs Successifs (Cousinage / Encorbellement)",
          text: "Avancement symétrique par fléaux depuis les piles avec câbles de précontrainte intérieurs et extérieurs au caisson béton (ex: Viaduc de Millau).",
        },
        {
          context: "Dalles de Bâtiment en Béton Précontraint par Post-tension",
          text: "Planchers dalles très minces (e = 22 cm pour 9 m de portée) sans retombée de poutres avec torons gainés graissés monotorons.",
        },
        {
          context: "Enceintes de Confinement de Centrales Nucléaires (EPR)",
          text: "Double paroi en béton précontraint tridimensionnel (câbles verticaux, circonférentiels et de dôme) résistant aux surpressions accidentelles.",
        },
        {
          context: "Réservoirs d'Eau et Silos à Grains",
          text: "Précontrainte circulaire héliçoïdale (cerclage) maintenant les parois en compression permanente sous la poussée hydrostatique interne.",
        },
        {
          context: "Poutres Alvéolées & Dalles Alvéolées de Grande Longueur (Usines)",
          text: "Dalles minces de 15 à 20 m précontraintes par pré-tension en usine de préfabrication avec coulage en continu sur pistes de 100 m.",
        },
      ],
    },

    {
      id: 4,
      key: 'theory',
      title: "Théorie — Équation des Contraintes Naviers & Pertes de Précontrainte",
      icon: '📐',
      type: 'theory',
      diagramType: 'bridge_structure',
      content: `### 1. Théorie des Contraintes en Section Homogénéisée (Navier-Bernoulli)

Pour une section de béton soumis à un effort de précontrainte $P$ d'excentrement $e_p$ et au moment fléchissant extérieur $M_g + M_q$ :

$$\\sigma(y) = \\frac{P}{A} + \\frac{P \\cdot e_p}{I} \\cdot y + \\frac{M_{g+q}}{I} \\cdot y$$

- **Fibre Supérieure ($y = v' > 0$)** :
  $$\\sigma_{sup} = \\frac{P}{A} - \\frac{P \\cdot e_p}{v'} + \\frac{M_{g+q}}{v'} \\ge \\sigma_{adm,compr} \\quad \\text{ou } 0$$
- **Fibre Inférieure ($y = -v < 0$)** :
  $$\\sigma_{inf} = \\frac{P}{A} + \\frac{P \\cdot e_p}{v} - \\frac{M_{g+q}}{v} \\ge 0 \\quad (\\text{Classe 1 : Pas de traction})$$

### 2. Les Pertes de Précontrainte (Eurocode 2 EN 1992-1-1 §5.10)

La force de précontrainte décroît dans le temps : $P(t) = P_{max} - \\Delta P_{inst} - \\Delta P_{diff}(t)$.

#### A. Pertes Instantanées (au moment de la mise en tension $t = 0$) :
1. **Frottement du câble sur la gaine (Post-tension)** :
   $$\\Delta P_{frot}(x) = P_{max} \\cdot \\left( 1 - e^{-\\mu (\\theta + k \\cdot x)} \\right)$$
   - $\\mu$ = coef de frottement ($0{,}18\\text{ à } 0{,}24\\text{ rad}^{-1}$), $\\theta$ = déviation angulaire cumulée, $k$ = wobbling (parasite $0{,}005-0{,}01\\text{ rad/m}$).
2. **Recul d'ancrage / Renfoncement de clavette** : $\\Delta L = 4\\text{ à } 8\\text{ mm}$ aux têtes d'ancrage.
3. **Déformation élastique du béton** lors du transfert successif des câbles.

#### B. Pertes Différées dans le Temps ($t \\to \\infty$, à 50 ans) :
1. **Retrait du béton** : $\\varepsilon_{cs} \\approx 3 \\cdot 10^{-4}$.
2. **Fluage du béton** : $\\varphi(t, t_0) \\approx 2{,}0\\text{ à } 2{,}5$ sous charge permanente.
3. **Relaxation de l'acier de précontrainte** : $\\rho_{1000} \\approx 2{,}5\\%\\text{ à } 4{,}5\\%$ à 1 000 heures (aciers Très Basse Relaxation TBR).`,
    },

    {
      id: 5,
      key: 'formulas',
      title: "Formules essentielles — Eurocode 2 Part 2 (EN 1992-1-1 & 2)",
      icon: '🔢',
      type: 'formulas',
      diagramType: 'bridge_structure',
      formulas: [
        {
          name: "Caractéristique mécanique des torons Y1860S7 (T15S / 15,7 mm)",
          latex: "A_{p1} = 150 \\text{ mm}^2 \\quad f_{pk} = 1860 \\text{ MPa} \\quad f_{p0,1k} = 1600 \\text{ MPa} \\quad P_{max1} = 0{,}85 \\cdot A_{p1} \\cdot f_{pk} = 237{,}15 \\text{ kN}",
          description: "Section d'un toron T15S = 150 mm². Tension maximale au vérin autorisée à la mise en tension : σp,max = min(0,80 fpk ; 0,90 fp0,1k) = 1440 MPa.",
        },
        {
          name: "Formule globale de pertes différées (EN 1992-1-1 §5.10.6)",
          latex: "\\Delta P_{c+s+r} = A_p \\cdot \\frac{\\varepsilon_{cs} \\cdot E_p + \\Delta \\sigma_{pr} + \\frac{E_p}{E_{cm}} \\cdot \\varphi(t,t_0) \\cdot \\sigma_{c,QP}}{1 + \\frac{E_p}{E_{cm}} \\cdot \\frac{A_p}{A_c} \\left(1 + \\frac{A_c \\cdot y_p^2}{I_c}\\right) \\left(1 + 0{,}8 \\cdot \\varphi(t,t_0)\\right)}",
          description: "Calcul rigoureux couplé des pertes différées par retrait (cs), fluage (c) et relaxation des aciers (r).",
        },
        {
          name: "Fusau de passage du câble (Limites d'excentrement ep)",
          latex: "e_{p,min}(x) \\le e_p(x) \\le e_{p,max}(x) \\qquad e_{p,min} = -r^2/v' + \\frac{M_{max}}{P} \\qquad e_{p,max} = r^2/v + \\frac{M_{min}}{P}",
          description: "r² = I/A = rayon de giration au carré. Le tracé du câble doit impérativement rester dans le fuseau de passage pour éviter toute traction du béton.",
        },
        {
          name: "Vérification ELS de décompression (Classe 1)",
          latex: "\\sigma_{inf} = \\frac{P_{\\infty}}{A_c} + \\frac{P_{\\infty} \\cdot e_p}{I_c} \\cdot v - \\frac{M_{g+q,QP}}{I_c} \\cdot v \\ge 0 \\quad [\\text{MPa}]",
          description: "Sous combinaison quasi-permanente ELS, la contrainte dans la fibre inférieure doit rester strictement compressive (≥ 0 MPa).",
        },
        {
          name: "Résistance ultime en flexion ELU (M_Rd avec aciers de précontrainte)",
          latex: "M_{Rd} = A_p \\cdot f_{pd} \\cdot d_p + A_s \\cdot f_{yd} \\cdot d_s - 0{,}5 \\cdot F_{c,max} \\cdot z",
          description: "fpd = fp0,1k / γp (γp = 1,15). À l'ELU, la contrainte dans les torons atteint la limite d'élasticité de calcul fpd.",
        },
        {
          name: "Effort de poussée au vide (Câble courbe de rayon R)",
          latex: "p_{vide} = \\frac{P}{R} \\quad [\\text{kN/m}]",
          description: "Poussée radiale exercée par un câble courbe de rayon R sur le béton. Doit être reprise par des étriers d'ancrage de poussée au vide.",
        },
      ],
    },

    {
      id: 6,
      key: 'stepbystep',
      title: "Calcul complet — Poutre en béton précontraint : Contraintes ELS & Câblage",
      icon: '🔬',
      type: 'stepbystep',
      problem: "Soit une poutre rectangulaire de pont en béton précontraint (b = 0,50 m, h = 1,20 m, L = 20,0 m) soumise à son poids propre mg = 15,0 kN/m et une surcharge mq = 20,0 kN/m. Caractéristiques géométriques : A = 0,60 m², I = 0,072 m⁴, v = v' = 0,60 m, r² = I/A = 0,12 m². On applique une force de précontrainte utile P_infini = 2 400 kN avec un excentrement ep = 0,45 m en milieu de portée (vers le bas). Vérifier la contrainte dans la fibre inférieure à mi-portée sous la combinaison ELS totale (M_tot = M_g + M_q).",
      steps_demo: [
        { n: 1, text: "Calcul du moment de poids propre Mg à mi-portée : Mg = g × L² / 8 = 15,0 × 20,0² / 8 = 15,0 × 400 / 8 = 750,0 kNm" },
        { n: 2, text: "Calcul du moment de surcharge Mq à mi-portée : Mq = q × L² / 8 = 20,0 × 20,0² / 8 = 20,0 × 400 / 8 = 1 000,0 kNm" },
        { n: 3, text: "Calcul du moment fléchissant total ELS : M_tot = Mg + Mq = 750,0 + 1 000,0 = 1 750,0 kNm = 1,75 MNm" },
        { n: 4, text: "Calcul de la contrainte due au seul effort P/A : σ_P0 = P / A = 2,40 MN / 0,60 m² = +4,00 MPa (Compression)" },
        { n: 5, text: "Calcul de la contrainte due à l'excentrement du câble (P · ep · v / I) : σ_Pep = 2,40 × 0,45 × 0,60 / 0,072 = 0,648 / 0,072 = +9,00 MPa (Compression en fibre inf)" },
        { n: 6, text: "Calcul de la contrainte de traction due au moment extérieur (M_tot · v / I) : σ_M = -1,75 × 0,60 / 0,072 = -1,05 / 0,072 = -14,58 MPa (Traction en fibre inf)" },
        { n: 7, text: "Contrainte finale en fibre inférieure (σ_inf) : σ_inf = +4,00 + 9,00 - 14,58 = -1,58 MPa (Traction de 1,58 MPa)." },
        { n: 8, text: "Vérification ELS Classe 2 (fctm = 2,9 MPa pour C35/45) : |σ_inf| = 1,58 MPa ≤ fctm = 2,90 MPa → Poutre CONFORME en ELS Classe 2 (Traction admise sans ouverture de fissure) ✓" },
      ],
      result_latex: "\\sigma_{inf} = +4{,}00 + 9{,}00 - 14{,}58 = \\textbf{-1{,}58 MPa} \\qquad |\\sigma_{inf}| \\le f_{ctm} = \\textbf{2{,}90 MPa} \\quad (\\text{ELS Classe 2 conforme}) \\quad \\checkmark",
    },

    {
      id: 7,
      key: 'units',
      title: "Unités & Symboles en Béton Précontraint — Tableau de référence",
      icon: '📏',
      type: 'units',
      table: [
        { grandeur: "Résistance ultime acier précontrainte fpk", si: "MPa (N/mm²)", imperial: "ksi", conversion: "Y1860S7 = 1860 MPa (1,86 GPa)" },
        { grandeur: "Limite d'élasticité f p0,1k", si: "MPa (N/mm²)", imperial: "ksi", conversion: "1600 MPa (Limite d'élasticité conventionnelle à 0,1%)" },
        { grandeur: "Force de précontrainte P", si: "kiloNewtons [kN] ou MegaNewtons [MN]", imperial: "kips", conversion: "1 MN = 1000 kN = 100 tonnes force" },
        { grandeur: "Section de câble d'ancrage (ex: 19T15S)", si: "mm² ou cm²", imperial: "sq in", conversion: "19 torons × 150 mm² = 2850 mm² = 28,5 cm² (Force P0 ≈ 4,5 MN)" },
        { grandeur: "Module d'élasticité de l'acier Ep", si: "MPa (N/mm²)", imperial: "ksi", conversion: "Ep = 195 000 MPa (195 GPa) pour torons 7 fils" },
        { grandeur: "Pertes de précontrainte ΔP", si: "Pourcentage [%] ou MPa", imperial: "%", conversion: "Pertes totales différées ≈ 15% à 25% de P0" },
      ],
      note: "⚠️ ATTENTION : L'acier de précontrainte a une limite d'élasticité $f_{p0,1k} = 1600\\text{ MPa}$, soit **plus de 3 fois la résistance d'un acier de béton armé classique B500B** (500 MPa) !",
    },

    {
      id: 8,
      key: 'hypotheses',
      title: "Hypothèses & conditions de validité Eurocode 2 Part 2",
      icon: '📋',
      type: 'hypotheses',
      items: [
        { type: 'info', text: "Le béton précontraint est analysé principalement à l'Étape de Service (ELS) car la maîtrise des contraintes de compression/traction conditionne la durabilité." },
        { type: 'info', text: "Classement des structures ELS : Classe 1 (Aucune traction autorisée, σ ≥ 0) | Classe 2 (Traction autorisée sans dépasser fctm) | Classe 3 (Fissuration maîtrisée wmax ≤ 0,2 mm)." },
        { type: 'warning', text: "ATTENTION : Ne jamais négliger les contraintes au JEUNE ÂGE (au moment du transfert du câble $t = 0$). Le béton n'a pas encore atteint sa résistance 28 jours et la précontrainte maximale peut faire éclater la fibre supérieure !" },
        { type: 'warning', text: "Pression d'injection du coulis de ciment : Les gaines doivent être injectées sans aucun vide d'air sous une pression de 5 à 10 bar. Un vide d'injection entraîne la corrosion mortelle du câble." },
        { type: 'tip', text: "Tracé parabolique des câbles : Donner au câble une forme de parabole suit la courbe des moments fléchissants $M(x)$, créant une poussée vers le haut qui soulage la charge permanente." },
        { type: 'warning', text: "Zones d'about (Têtes d'ancrage Freyssinet) : La force concentrée $P$ se diffuse à 45° (prisme de Freyssinet). Prévoir un ferraillage passif de maillage très dense (armatures d'éclatement et d'évitement)." },
      ],
    },

    {
      id: 9,
      key: 'simple_examples',
      title: "Exemples guidés — Dimensionnement & Câblage",
      icon: '✏️',
      type: 'examples_simple',
      examples: [
        {
          title: "Exemple 1 : Force maximale de précontrainte sur un câble 12T15S",
          given: "Câble composé de 12 torons T15S (Ap1 = 150 mm², fpk = 1860 MPa, fp0,1k = 1600 MPa)",
          find: "La force maximale P_max autorisée au vérin à la mise en tension",
          solution_latex: "A_p = 12 \\times 150 = 1800 \\text{ mm}^2 \\qquad \\sigma_{p,max} = \\min(0{,}80 \\times 1860 ; 0{,}90 \\times 1600) = \\min(1488 ; 1440) = 1440 \\text{ MPa}",
          result: "P_max = 1800 mm² × 1440 MPa = 2 592 000 N = 2 592 kN (2,59 MN).",
        },
        {
          title: "Exemple 2 : Calcul de la perte par frottement sur un câble rectiligne",
          given: "Câble de post-tension de longueur L = 30 m. Coefficient de frottement parasite k = 0,008 rad/m, θ = 0. Force en tête P0 = 2 500 kN",
          find: "La force P(x) à l'extrémité opposée x = 30 m",
          solution_latex: "\\Delta P_{frot} = P_0 \\cdot \\left(1 - e^{-k \\cdot x}\\right) = 2500 \\cdot \\left(1 - e^{-0{,}008 \\times 30}\\right) = 2500 \\cdot (1 - e^{-0{,}24}) = 2500 \\cdot (1 - 0{,}7866) = 533{,}4 \\text{ kN}",
          result: "P(30m) = 2500 - 533,4 = 1 966,6 kN (Perte par frottement de 21,3%).",
        },
        {
          title: "Exemple 3 : Contrainte de compression uniforme sous effort P",
          given: "Section de pile en béton A = 1,20 m² soumise à une précontrainte verticale P = 6,0 MN",
          find: "La contrainte de compression uniforme σ_0",
          solution_latex: "\\sigma_0 = \\frac{P}{A} = \\frac{6{,}0 \\text{ MN}}{1{,}20 \\text{ m}^2} = 5{,}00 \\text{ MPa}",
          result: "Compression uniforme du béton σ_0 = +5,0 MPa.",
        },
      ],
    },

    {
      id: 10,
      key: 'real_examples',
      title: "Exemple réel — Le Viaduc de la Savoureuse (TGV Rhin-Rhône)",
      icon: '🏢',
      type: 'examples_real',
      diagramType: 'bridge_structure',
      examples: [
        {
          context: "Viaduc ferroviaire TGV de 790 m de long",
          scenario: "Tablier bipoutre précontraint par post-tension longitudinale (câbles intérieurs 19T15S et 37T15S) et précontrainte transversale des hourdis. Force de précontrainte totale par fléau P0 = 45 MN.",
          decomposition_latex: "\\text{Pertes totales à 50 ans (Pertes instantanées + différées) : } \\Delta P = 18{,}5\\% \\implies P_{\\infty} = 36{,}67 \\text{ MN}",
          lesson: "La très haute résistance des torons Y1860S7 associés à des bétons C50/60 garantit le franchissement des TGV à 350 km/h sans aucune déviation ni flèche néfaste.",
        },
      ],
    },

    {
      id: 11,
      key: 'diagrams',
      title: "Schéma — Post-tension Freyssinet & Fuseau de Passage",
      icon: '📊',
      type: 'interactive_diagram',
      diagramType: 'bridge_structure',
      description: "Visualisez le tracé parabolique d'un câble de précontrainte par post-tension dans une poutre de pont, les têtes d'ancrage à clavettes et la construction du fuseau de passage (limites de Magnel).",
      diagram_description: [
        "Principe de la post-tension : Tête d'ancrage, gaine ondulée, torons 7 fils et injection de coulis de ciment",
        "Tracé parabolique du câble : Point bas à mi-portée (excentrement max ep) et remontée aux ancrages aux abouts",
        "Diagramme des contraintes ELS : Superposition de la compression P/A, du moment de précontrainte P·ep et des charges M_g+q",
      ],
    },

    {
      id: 12,
      key: 'mistakes',
      title: "Erreurs fatales en Ingénierie du Béton Précontraint",
      icon: '⛔',
      type: 'mistakes',
      items: [
        {
          mistake: "Mettre en tension les câbles sur un béton trop jeune",
          trap: "Tendre les câbles de post-tension alors que le béton n'a atteint que 15 MPa au lieu des 30 MPa exigés",
          fix: "Risque de ruine immédiate par écrasement du béton sous la tête d'ancrage (pression locale P/A_ancrage > fck(t)). Toujours effectuer un essai d'écrasement d'éprouvettes de chantier avant autorisation de mise en tension.",
        },
        {
          mistake: "Négliger l'injection du coulis de ciment dans les gaines",
          trap: "Différer l'injection du coulis de ciment de plusieurs mois après la mise en tension",
          fix: "L'humidité pénètre dans la gaine et corrode les aciers sous tension (corrosion sous contrainte), provoquant la rupture brutale des torons sans préavis. Injecter le coulis sous 7 à 14 jours maximum.",
        },
        {
          mistake: "Oublier le ferraillage d'épanouissement / d'éclatement aux ancrages",
          trap: "Ne pas placer de frettes ou maillages d'armatures passives derrière les têtes d'ancrage",
          fix: "La force concentrée de plusieurs MegaNewtons crée des tractions transversales intenses (effet de coin). Sans frettes d'ancrage, l'about de la poutre fende net au moment du transfert !",
        },
        {
          mistake: "Négliger les pertes par fluage sur les bétons massifs",
          trap: "Calculer le fluage avec un coefficient φ = 1,5 au lieu de φ = 2,5 sur une structure mise en charge très tôt",
          fix: "Une sous-estimation du fluage conduit à une perte de précontrainte excessive à long terme, faisant basculer la structure en Classe 3 avec ouvertures de fissures non maîtrisées.",
        },
      ],
    },

    {
      id: 13,
      key: 'tips',
      title: "Astuces de l'ingénieur précontrainte",
      icon: '💡',
      type: 'tips',
      tips: [
        "Torons T15S (15,7 mm) : C'est le standard international incontournable. Un toron T15S développe une section de $150\\text{ mm}^2$ et une force utile ELS d'environ $180\\text{ kN}$.",
        "Précontrainte extérieure au béton : Pour le renforcement de ponts anciens ou la maintenance, placer les câbles hors du béton (dans le caisson). Permet d'inspecter et de remplacer les câbles au besoin.",
        "Tracé du câble (Méthode de la poussée au vide) : Un câble parabolique exert une charge distribuée vers le haut $q_{eq} = \\frac{8 P e_p}{L^2}$. Choisir $P e_p$ pour équilibrer exactement la charge permanente $g$ !",
        "Vérification des têtes d'ancrage : S'assurer que le béton sous l'ancrage respecte la contrainte admissible locale $f_{cd,max} = 3 \\cdot f_{cd} \\sqrt{A_{max}/A_0}$.",
        "Calcul des allongements au vérin (ΔL) : Lors de la mise en tension, mesurer l'allongement du câble au millimètre près $\\Delta L = \\frac{P \\cdot L}{A_p E_p}$. Si $\\Delta L_{mesuré}$ diffère de $> 5\\%$ du calcul, stopper immédiatement la mise en tension.",
        "Logiciels de calcul de précontrainte : PyPoutre, BPEL-Design, Robot Structural Analysis, Bridge Designer, SOFiSTiK (analyse temporelle fluage/retrait).",
      ],
    },

    {
      id: 14,
      key: 'normes',
      title: "Normes & Références — Béton Précontraint (EC2)",
      icon: '📜',
      type: 'norms',
      norms: [
        { code: "NF EN 1992-1-1 (Eurocode 2)", description: "Calcul des structures en béton — Partie 1-1 : Règles générales et règles pour les bâtiments (§5.10 Précontrainte)." },
        { code: "NF EN 1992-2 (Eurocode 2)", description: "Calcul des structures en béton — Partie 2 : Ponts en béton — Calcul et dispositions constructives." },
        { code: "NF EN 10138 (Parties 1 à 4)", description: "Aciers de précontrainte (Fils, barres et torons 7 fils Y1770 / Y1860)." },
        { code: "NF EN 13670", description: "Exécution des structures en béton (Spécifications pour la mise en tension et l'injection des gaines)." },
        { code: "Fascicule 65 du CCTG", description: "Exécution des ouvrages d'art en béton armé et précontraint (Cahier des clauses techniques générales)." },
        { code: "Recommandations ASQUAPRO / AFGC", description: "Association Française du Génie Civil — Guides d'application et agréments des procédés de précontrainte." },
      ],
    },

    {
      id: 15,
      key: 'exercises',
      title: "Exercices Béton Précontraint & Eurocode 2 — 3 niveaux",
      icon: '✍️',
      type: 'exercises',
      exercises: [
        {
          id: 'ex_pre_1',
          number: 1,
          difficulty: 'Facile',
          text: "Un câble de post-tension contient 19 torons T15S (section unité Ap1 = 150 mm²). Calculer la section totale d'acier Ap et la force maximale au vérin P_max autorisée à la mise en tension (σ_p,max = 1440 MPa).",
          hint: "Ap = 19 × 150 mm². P_max = Ap × σ_p,max.",
          answer_latex: "A_p = 19 \\times 150 = 2850 \\text{ mm}^2 \\qquad P_{max} = 2850 \\times 1440 = 4\\,104\\,000 \\text{ N} = 4{,}104 \\text{ MN}",
          answer_text: "Section Ap = 2850 mm² (28,5 cm²) | Force maximale P_max = 4,104 MN (410,4 tonnes)",
        },
        {
          id: 'ex_pre_2',
          number: 2,
          difficulty: 'Moyen',
          text: "Une poutre précontrainte sous force centree P = 3,0 MN possède une section A = 0,80 m² et un moment extérieur M = 600 kNm. Le câble est centré (ep = 0). Calculer les contraintes en fibre supérieure et inférieure (v = v' = 0,50 m, I = 0,0667 m⁴).",
          hint: "σ = P/A ± M·v/I. (Convertir MN et MNm).",
          answer_latex: "\\sigma_0 = \\frac{3{,}0}{0{,}80} = +3{,}75 \\text{ MPa} \\qquad \\sigma_M = \\frac{0{,}600 \\times 0{,}50}{0{,}0667} = +4{,}50 \\text{ MPa}",
          answer_latex: "\\sigma_{sup} = +3{,}75 - 4{,}50 = -0{,}75 \\text{ MPa (Traction)} \\qquad \\sigma_{inf} = +3{,}75 + 4{,}50 = +8{,}25 \\text{ MPa (Compression)}",
          answer_text: "σ_sup = -0,75 MPa (Traction) | σ_inf = +8,25 MPa (Compression).",
        },
        {
          id: 'ex_pre_3',
          number: 3,
          difficulty: 'Difficile',
          text: "Calculer l'allongement théorique au vérin ΔL d'un câble droit 12T15S (Ap = 1800 mm², Ep = 195 000 MPa) de longueur L = 40,0 m sous une force moyenne le long du câble P_moyen = 2 200 kN.",
          hint: "ΔL = (P_moyen · L) / (Ap · Ep). Convertir kN en N et m en mm.",
          answer_latex: "\\Delta L = \\frac{2\\,200\\,000 \\text{ N} \\times 40\\,000 \\text{ mm}}{1800 \\text{ mm}^2 \\times 195\\,000 \\text{ N/mm}^2} = \\frac{88\\,000\\,000\\,000}{351\\,000\\,000} = 250{,}71 \\text{ mm}",
          answer_text: "Allongement théorique au vérin ΔL = 250,7 mm (25,1 cm).",
        },
      ],
    },

    {
      id: 16,
      key: 'corrections',
      title: "Corrections détaillées",
      icon: '✅',
      type: 'corrections',
      note: "Retrouvez les détails des calculs de contraintes, câblage et pertes de précontrainte en cliquant sur 'Voir la correction'.",
    },

    {
      id: 17,
      key: 'quiz',
      title: "Quiz Béton Précontraint — 3 questions",
      icon: '🎯',
      type: 'quiz',
      questions: [
        {
          id: 'q_pre_1',
          question: "Quelle est la différence essentielle entre la pré-tension et la post-tension ?",
          options: [
            { id: 'a', text: "La pré-tension utilise de l'acier doux, la post-tension de l'acier inox" },
            { id: 'b', text: "En pré-tension, les aciers sont tendus sur banc AVANT le coulage du béton ; en post-tension, les câbles sont tendus APRÈS le durcissement du béton sur chantier" },
            { id: 'c', text: "La pré-tension est réservée aux ponts, la post-tension aux maisons" },
            { id: 'd', text: "Il n'y a aucune différence" },
          ],
          correct: 'b',
          explanation: "La pré-tension s'effectue en usine sur banc de tirage avant coulage du béton (adhérence directe). La post-tension s'effectue sur chantier dans des gaines incorporées au béton durci.",
        },
        {
          id: 'q_pre_2',
          question: "Parmi ces pertes de précontrainte, lesquelles sont des 'pertes différées' se produisant sur le long terme ?",
          options: [
            { id: 'a', text: "Le frottement dans les gaines et le recul d'ancrage" },
            { id: 'b', text: "Le retrait du béton, le fluage du béton et la relaxation de l'acier" },
            { id: 'c', text: "La température ambiante et le vent" },
            { id: 'd', text: "L'usure du vérin" },
          ],
          correct: 'b',
          explanation: "Les pertes différées se développent sur plusieurs décennies sous l'effet du retrait du béton (séchage), du fluage sous charge constante et de la relaxation lente des torons sous tension.",
        },
        {
          id: 'q_pre_3',
          question: "Dans un ouvrage en béton précontraint vérifié en ELS Classe 1, quelle contrainte est exigée dans la fibre la plus tendue sous combinaison quasi-permanente ?",
          options: [
            { id: 'a', text: "Traction jusqu'à 10 MPa" },
            { id: 'b', text: "Aucune traction autorisée (σ ≥ 0 MPa, béton strictement en compression)" },
            { id: 'c', text: "Compression maximale de 100 MPa" },
            { id: 'd', text: "Traction limitée à 50% de fck" },
          ],
          correct: 'b',
          explanation: "En Classe 1 ELS (non-décompression), la contrainte dans la section doit rester positive ou nulle (σ ≥ 0 MPa), garantissant l'absence totale de fissuration du béton.",
        },
      ],
    },

    {
      id: 18,
      key: 'exam_questions',
      title: "Questions d'examen — Niveau Ingénieur Ouvrages d'Art (CHEBAP / ENPC)",
      icon: '🎓',
      type: 'exam',
      questions: [
        "Démontrez la méthode de construction du fuseau de passage de câble (Fuseau de Magnel) pour une poutre précontrainte ISOSTATIQUE. Exprimez les équations des limites supérieures et inférieures de l'excentrement e_p(x).",
        "Établissez l'équation différentielle de perte de précontrainte par frottement ΔP_frot(x) pour un câble de post-tension à tracé parabolique. Expliquez l'effet de la déviation angulaire θ et du coefficient de wobbling k.",
        "Détaillez le calcul couplé des pertes différées (retrait, fluage et relaxation) selon la formule de l'Eurocode 2 EN 1992-1-1 §5.10.6. Comment le coefficient d'équivalence α_p = Ep/Ecm intervient-il ?",
        "Présentez le comportement ultime à l'ELU d'une section en béton précontraint soumise à la flexion composée. Comment détermine-t-on la déformation ultime de l'acier de précontrainte ε_pd et la contribution des armatures passives ?",
      ],
    },

    {
      id: 19,
      key: 'interview_questions',
      title: "Questions d'entretien — Ingénieur d'Études Ouvrages d'Art",
      icon: '💼',
      type: 'interview',
      questions: [
        {
          question: "Lors d'une opération de mise en tension de câbles de post-tension sur chantier, l'allongement mesuré au vérin est de 180 mm alors que l'allongement calculé était de 210 mm (écart de -14,3%). Que faites-vous ?",
          answer_hint: "Procédure d'urgence : 1. Stopper immédiatement la mise en tension et ne pas claveter définitivement. 2. Vérifier l'étalonnage du manomètre du vérin hydraulique. 3. Vérifier le coefficient de frottement réels dans la gaine (prescrire un essai de mise en tension réciproque des 2 côtés). 4. Si le frottement est trop fort, injecter une huile soluble ou débloquer le câble par surtension temporaire autorisée par l'ingénieur.",
        },
        {
          question: "Pourquoi injecte-t-on du coulis de ciment dans les gaines de post-tension et que se passe-t-il si cette opération est mal réalisée ?",
          answer_hint: "L'injection de coulis de ciment remplit deux fonctions vitales : 1) Protection anticorrosion définitive des torons très sensibles à la rouille sous forte contrainte. 2) Adhérence mécanique entre le câble et la structure béton (câble adhérent). Si l'injection comporte des bulles d'eau ou d'air, l'eau stagne et fait éclater la gaine au gel, entraînant la rupture brutale des aciers par corrosion sous contrainte.",
        },
        {
          question: "Quelle est la différence entre la précontrainte intérieure et la précontrainte extérieure au béton ?",
          answer_hint: "Précontrainte intérieure : Câbles noyés dans la section de béton (gaines noyées). Très bonne protection et adhérence, mais inspection visuelle impossible. Précontrainte extérieure : Câbles disposés à l'intérieur du caisson creux du pont hors du béton. Permet le remplacement rapide des câbles, la vérification visuelle des gaines et simplifie le bétonnage du caisson.",
        },
      ],
    },

    {
      id: 20,
      key: 'practical_case',
      title: "Cas pratique — Dimensionnement du câblage d'un viaduc en béton précontraint",
      icon: '🔧',
      type: 'practical',
      scenario: "Étude de cas — Dimensionnement du câblage de précontrainte d'un viaduc de pont de 35 m de portée (Section en I h = 1,80 m, A = 1,10 m², I = 0,42 m⁴, M_tot_ELS = 7 500 kNm)",
      description: `**Mise en situation** : Ingénieur structures chez Freyssinet. Définition du nombre de câbles 19T15S nécessaires pour respecter l'ELS Classe 1 (σ_inf ≥ 0 MPa) en milieu de portée avec excentrement maximal ep = 0,75 m.`,
      resolution_latex_1: "\\sigma_{M,inf} = \\frac{M_{tot} \\cdot v}{I} = \\frac{7{,}50 \\text{ MNm} \\times 0{,}90 \\text{ m}}{0{,}42 \\text{ m}^4} = 16{,}07 \\text{ MPa (Traction)}",
      resolution_latex_2: "\\sigma_{P,inf} = \\frac{P_{\\infty}}{1{,}10} + \\frac{P_{\\infty} \\times 0{,}75 \\times 0{,}90}{0{,}42} = P_{\\infty} \\cdot (0{,}909 + 1{,}607) = 2{,}516 \\cdot P_{\\infty}",
      resolution_latex_3: "2{,}516 \\cdot P_{\\infty} \\ge 16{,}07 \\implies P_{\\infty,min} = 6{,}387 \\text{ MN} \\quad \\implies P_{0,min} = \\frac{6{,}387}{0{,}80} = 7{,}98 \\text{ MN}",
      conclusion: "Câblage retenu : 2 câbles 19T15S (Section 5 700 mm², P0 = 8,20 MN). Contrainte résiduelle finale σ_inf = +0,53 MPa ≥ 0 MPa (Classe 1 parfaitement respectée).",
    },

    {
      id: 21,
      key: 'summary',
      title: "Résumé exécutif — Le Béton Précontraint en 6 points",
      icon: '📋',
      type: 'summary',
      content: `### Le Béton Précontraint en 6 fondamentaux

1. **Principe** : Compression préalable ($P$) annulant les tractions créées par les charges extérieures ($\sigma = \frac{P}{A} + \frac{P e_p y}{I} + \frac{M y}{I}$).
2. **Pré-tension vs Post-tension** : Pré-tension sur banc usine (adhérence direct) | Post-tension sur chantier (câbles en gaines injectées).
3. **Torons Haute Résistance** : Torons 7 fils Y1860S7 ($f_{pk} = 1860\\text{ MPa}$, $f_{p0,1k} = 1600\\text{ MPa}$).
4. **Pertes de Précontrainte** : Instantanées (frottement, recul d'ancrage) + Différées à 50 ans (retrait, fluage $\\varphi \\approx 2{,}5$, relaxation).
5. **Classes ELS** : Classe 1 ($\sigma_{inf} \\ge 0$, aucune traction) | Classe 2 ($\\sigma_{inf} \\ge -f_{ctm}$) | Classe 3 ($w_{max} \\le 0{,}2\\text{ mm}$).
6. **Zones d'Ancrage** : Têtes d'ancrage Freyssinet nécessitant un ferraillage d'épanouissement très dense (frete et maillage anti-éclatement).`,
    },

    {
      id: 22,
      key: 'key_points',
      title: "Points clés à mémoriser — Eurocode 2-2",
      icon: '⭐',
      type: 'keypoints',
      points: [
        "Le béton précontraint pré-compresse le béton pour éviter toute traction sous charges de service",
        "Torons Y1860S7 : fpk = 1860 MPa (3,7 fois plus résistant que l'acier B500B de béton armé)",
        "Pertes totales de précontrainte à long terme (50 ans) : 15% à 25% de la force initiale P0",
        "Equation Naviers ELS : σ = P/A + (P · ep · y)/I + (M · y)/I",
        "L'injection du coulis de ciment dans les gaines est VITALE pour éviter la corrosion sous contrainte",
        "Vérification des allongements au vérin ΔL = P·L / (Ap·Ep) à ± 5% sur chantier",
        "Hauteur de poutre précontrainte h ≈ L/20 (gain de 40% de matière par rapport au BA)",
      ],
    },

    {
      id: 23,
      key: 'self_assessment',
      title: "Auto-évaluation — Béton Précontraint & Eurocode 2",
      icon: '🏆',
      type: 'self_assessment',
      description: "Validez vos compétences en ingénierie du béton précontraint :",
      objectives: [
        "Je comprends la différence fondamentale entre pré-tension en usine et post-tension sur chantier",
        "Je maîtrise le calcul des contraintes de flexion ELS (Navier-Bernoulli avec force P et excentrement ep)",
        "Je sais identifier et calculer les pertes instantanées (frottement, ancrage) et différées (retrait, fluage, relaxation)",
        "Je connais les caractéristiques des aciers Y1860S7 (fpk, fp0,1k, Ap1)",
        "Je comprends les 3 classes de vérification ELS (Classe 1 pas de décompression à Classe 3)",
        "Je connais les dispositions constructives des têtes d'ancrage et de poussée au vide",
        "J'ai résolu les 3 exercices de précontrainte avec succès",
        "J'ai obtenu 3/3 au quiz de béton précontraint",
      ],
    },
  ],

  quickQuiz: {
    question: "Dans la technologie du béton précontraint par post-tension, quelle opération essentielle réalise-t-on après la mise en tension des câbles au vérin ?",
    options: [
      { id: 'a', label: "A) Peindre les gaines en vert" },
      { id: 'b', label: "B) Injecter du coulis de ciment dans les gaines sous pression pour protéger les aciers de la corrosion" },
      { id: 'c', label: "C) Chauffer le béton à 100°C" },
    ],
    correct: 'b',
    explanation: "L'injection du coulis de ciment dans les gaines remplit complètement les vides, assurant la protection définitive contre la corrosion et l'adhérence mécanique du câble.",
  },
};
