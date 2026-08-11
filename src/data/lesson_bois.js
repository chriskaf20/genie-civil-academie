// ── Lesson: Construction Bois & Eurocode 5 — Module 12 ───────────────────────
export const lesson_bois = {
  moduleId: 12,
  slug: 'bois',
  lessonIndex: 1,
  title: "Conception, Dimensionnement & Eurocode 5 des Structures Bois",
  subtitle: "Module 12 — Construction Bois & Eurocode 5",
  level: 'Intermédiaire',
  duration: '40h',
  diagramType: 'bridge_structure',
  tags: ['Eurocode 5', 'Bois', 'GL24h', 'CLT', 'kmod', 'kdef', 'Carbonisation', 'Assemblages', 'Shed'],

  steps: [
    {
      id: 1,
      key: 'definition',
      title: "Définition — La Construction Bois (Eurocode 5)",
      icon: '📖',
      type: 'definition',
      fr: 'Construction Bois & Dimensionnement Eurocode 5 (EN 1995)',
      en: 'Timber Structures Design & Eurocode 5',
      metier: "Pratiquée par les ingénieurs d'études charpente bois, projeteurs bois, charpentiers constructeurs et spécialistes des structures biosourcées (CLT, Bois Lamellé-Collé).",
      content: `La **construction bois** regroupe la conception, le calcul et l'assemblage des structures utilisant le bois massif, le bois lamellé-collé (BLC / GL) ou les panneaux de bois massif croisé (**CLT - Cross-Laminated Timber**).

### Les spécificités fondamentales du matériau Bois sous l'Eurocode 5 (EN 1995-1-1) :
1. **Un matériau Anisotrope & Orthotrope** : Les propriétés mécaniques varient selon le sens des fibres. La résistance à la compression parallèle aux fibres ($f_{c,0,k} \\approx 20-30\\text{ MPa}$) est **10 fois supérieure** à la compression perpendiculaire ($f_{c,90,k} \\approx 2-3\\text{ MPa}$).
2. **Influence de l'Humidité & Classes de Service (1, 2, 3)** : Le bois échange de l'eau avec l'air environnant (hygroscopique). Sa résistance baisse lorsque son taux d'humidité $w\\%$ augmente.
3. **Influence de la Durée de Charge ($k_{mod}$)** : Sous une charge de longue durée (poids propre), le bois s'adapte et sa résistance résiduelle s'amenuise par rapport à une charge instantanée (vent, séisme).
4. **Le Fluage à long terme ($k_{def}$)** : La déformabilité du bois augmente dans le temps sous l'effet conjugué des charges permanentes et des variations d'humidité.

> 💡 **Le Bois Lamellé-Collé (GL24h / GL28h)** : Fabriqué en purgeant le bois de ses nœuds et en collant des lamelles d'épicéa sous pression. Il permet des **poutres de 30 à 100 m de portée** avec des formes courbes ou à inertie variable !`,
    },

    {
      id: 2,
      key: 'importance',
      title: "Pourquoi la construction bois est en pleine expansion",
      icon: '⚠️',
      type: 'importance',
      content: `Porté par la réglementation environnementale (RE2020), le bois est le seul matériau de construction majeur **renouvelable et stockeur de carbone** ($\approx 1\\text{ tonne de } \\text{CO}_2$ stockée par m³ de bois).

- **Performances thermo-acoustiques** : Le bois est un isolant naturel (conductivité $\\lambda \\approx 0{,}13\\text{ W/mK}$, soit 12 fois plus isolant que le béton et 400 fois plus que l'acier).
- **Comportement remarquable au Feu** : Le bois brûle de manière très prévisible avec une vitesse de carbonisation lente ($\\beta_0 = 0{,}65\\text{ mm/min}$). La couche charbonnée superficielle isole le cœur du bois qui conserve 100% de ses capacités mécaniques.
- **Préfabrication & Chantier Sec** : Les éléments en CLT et mûrs à ossature bois (MOB) sont découpés au millimètre en usine par commande numérique (CNC) et montés sans eau sur chantier.
- **Légèreté spécifique** : Masse volumique $\\rho \\approx 450\\text{ à } 600\\text{ kg/m}^3$ (5 fois plus léger que le béton), idéal pour les surélévations en milieu urbain dense.

> ⚠️ **Règle d'or EC5** : "Toujours prendre en compte le coefficient $k_{mod}$ pour la résistance ELU et le coefficient $k_{def}$ pour le calcul des flèches finales $w_{fin}$ à long terme ELS !"`,
    },

    {
      id: 3,
      key: 'applications',
      title: "Applications terrain — Typologies de structures bois",
      icon: '🏗️',
      type: 'applications',
      examples: [
        {
          context: "Structures en Bois Lamellé-Collé (GL24h / GL28h / GL32h)",
          text: "Halles d'exposition, gymnases, passerelles et piscines (insensible à la corrosion par les vapeurs de chlore).",
        },
        {
          context: "Tours et Immeubles en CLT (Cross-Laminated Timber)",
          text: "Panneaux de bois massif croisé empilés pour créer des voiles porteurs et planchers rigides jusqu'à R+15 (ex: Tour Hypérion à Bordeaux).",
        },
        {
          context: "Maison à Ossature Bois (MOB / Poteaux-Poutres)",
          text: "Structure légère composée de montants vertical de 145×45 mm espacés de 60 cm avec contreventement par panneau OSB et isolation intégrée.",
        },
        {
          context: "Charpente Traditionnelle et Fermettes Industrielles",
          text: "Fermes de toiture composées de pannes, chevrettes, arbalétriers, poinçons et contrefiches assemblés par connecteurs métalliques à dents.",
        },
        {
          context: "Passerelles Piétonnes en Bois et Ponts Mixtes Bois-Béton",
          text: "Poutres en bois lamellé-collé protégées par couvercles zinc et connectées à une dalle béton collaborante pour le confort dynamique.",
        },
        {
          context: "Assemblages par Broches, Vis à Bois et Goussets Métalliques",
          text: "Assemblages mécaniques invisibles ou apparents transmettant les efforts de traction et cisaillement par effet de goujonnement.",
        },
      ],
    },

    {
      id: 4,
      key: 'theory',
      title: "Théorie — Classes de Service, kmod, kdef & Dimensionnement (Eurocode 5)",
      icon: '📐',
      type: 'theory',
      diagramType: 'bridge_structure',
      content: `### 1. Les Classes de Service (EN 1995-1-1 §2.3.1.3)

- **Classe de Service 1** : Humidité de l'air $< 65\\%$ ($w_{bois} \\le 12\\%$) — Bâtiments chauffés intérieurs (locaux d'habitation, bureaux).
- **Classe de Service 2** : Humidité de l'air $< 85\\%$ ($w_{bois} \\le 20\\%$) — Structures ouvertes sous abri (auvents, charpentes sous toiture).
- **Classe de Service 3** : Humidité de l'air $> 85\\%$ ($w_{bois} > 20\\%$) — Structures extérieures totalement exposées aux intempéries (ponts, appentis).

### 2. Contraintes de Calcul de la Résistance (ELU)

La résistance de calcul $f_{d}$ s'obtient à partir de la valeur caractéristique $f_{k}$ par :

$$f_d = k_{mod} \\cdot \\frac{f_k}{\\gamma_M}$$

- **$\\gamma_M$ (Coefficients partiels)** : Bois massif $= 1{,}30$ | Bois lamellé-collé (GL) $= 1{,}25$ | Panneaux OSB/Contreplaqué $= 1{,}20$.
- **$k_{mod}$ (Facteur de modification)** : Dépend de la classe de service et de la classe de durée de charge :

| Classe de charge | Durée cumulative | $k_{mod}$ (Service 1) | $k_{mod}$ (Service 2) | $k_{mod}$ (Service 3) |
|------------------|------------------|-----------------------|-----------------------|-----------------------|
| **Permanente** | $> 10$ ans | 0,60 | 0,60 | 0,50 |
| **Moyenne durée** | 6 mois à 10 ans | 0,70 | 0,70 | 0,55 |
| **Court terme** | $< 1$ semaine (Vent/Neige) | 0,90 | 0,90 | 0,70 |
| **Instantannée** | Choc, Séisme | 1,10 | 1,10 | 0,90 |

### 3. Calcul de la Flèche Finale à Long Terme (ELS)

La flèche finale $w_{fin}$ prend en compte le fluage par le coefficient $k_{def}$ ($0{,}60$ en Serv. 1 à $2{,}00$ en Serv. 3) :

$$w_{fin} = w_{inst,G} \\cdot (1 + k_{def}) + w_{inst,Q,1} \\cdot (1 + \\psi_{2,1} \\cdot k_{def}) + \\sum w_{inst,Q,i} \\cdot (\\psi_{0,i} + \\psi_{2,i} \\cdot k_{def})$$`,
    },

    {
      id: 5,
      key: 'formulas',
      title: "Formules essentielles — Eurocode 5 (NF EN 1995-1-1)",
      icon: '🔢',
      type: 'formulas',
      diagramType: 'bridge_structure',
      formulas: [
        {
          name: "Résistance de calcul en flexion du bois (f_m,d)",
          latex: "f_{m,d} = k_{mod} \\cdot \\frac{f_{m,k}}{\\gamma_M} \\qquad \\sigma_{m,d} = \\frac{M_{Ed}}{W_y} \\le f_{m,d}",
          description: "fmk = résistance caractéristique en flexion (ex: 24 MPa pour C24 et GL24h). Wy = b · h² / 6.",
        },
        {
          name: "Vérification au Flambement des Poteaux Bois (k_c)",
          latex: "\\sigma_{c,0,d} = \\frac{N_{Ed}}{A} \\le f_{c,0,d,crit} = k_c \\cdot f_{c,0,d} \\qquad f_{c,0,d} = k_{mod} \\cdot \\frac{f_{c,0,k}}{\\gamma_M}",
          description: "kc = coefficient de réduction pour le flambement dépendant de l'élancement λ et du facteur d'imperfection βc (0,2 pour massif, 0,1 pour GL).",
        },
        {
          name: "Vérification au Déversement des Poutres (k_crit)",
          latex: "\\sigma_{m,d} \\le k_{crit} \\cdot f_{m,d} \\qquad k_{crit} = \\begin{cases} 1{,}00 & \\text{si } \\lambda_{rel,m} \\le 0{,}75 \\\\ 1{,}56 - 0{,}75 \\lambda_{rel,m} & \\text{si } 0{,}75 < \\lambda_{rel,m} \\le 1{,}4 \\\\ 1 / \\lambda_{rel,m}^2 & \\text{si } \\lambda_{rel,m} > 1{,}4 \\end{cases}",
          description: "kcrit = coefficient de déversement pour la semelle comprimée non maintenue latéralement.",
        },
        {
          name: "Résistance au Cisaillement / Effort Tranchant (f_v,d)",
          latex: "\\tau_{d} = 1{,}5 \\cdot \\frac{V_{Ed}}{b_{ef} \\cdot h} \\le f_{v,d} = k_{mod} \\cdot \\frac{f_{v,k}}{\\gamma_M} \\qquad (b_{ef} = k_{cr} \\cdot b)",
          description: "kcr = 0,67 (coefficient de prise en compte des fentes de séchage en flexion).",
        },
        {
          name: "Épaisseur carbonisée au feu après durée t (d_char)",
          latex: "d_{char} = \\beta_0 \\cdot t_{feu} \\quad [\\text{mm}] \\qquad \\beta_0 = 0{,}65 \\text{ mm/min (Résineux/GL)}",
          description: "Pour 60 min de feu (R60) : dchar = 0,65 × 60 = 39,0 mm de couche carbonisée retirée de la section brute.",
        },
        {
          name: "Limites de flèche ELS usuelles (Eurocode 5)",
          latex: "w_{inst} \\le \\frac{L}{300} \\qquad w_{net,fin} \\le \\frac{L}{250} \\qquad w_{fin} \\le \\frac{L}{150 \\text{ à } 200}",
          description: "winst = flèche instantanée sous charge variable, wfin = flèche finale fluide à long terme.",
        },
      ],
    },

    {
      id: 6,
      key: 'stepbystep',
      title: "Calcul complet — Dimensionnement d'une poutre en bois lamellé-collé GL24h (ELU & ELS)",
      icon: '🔬',
      type: 'stepbystep',
      problem: "Une poutre de plancher en bois lamellé-collé GL24h (fm,k = 24 MPa, E0,mean = 11 500 MPa, γM = 1,25) de portée L = 6,00 m est installée en Classe de Service 1. Section rectangulaire b = 140 mm, h = 360 mm (Wy = b·h²/6 = 3,024 × 10⁶ mm³). Charges appliquées : Poids propre permanent g = 3,0 kN/m (long terme, kmod = 0,60), Surcharge d'exploitation q = 4,0 kN/m (moyen terme, kmod = 0,70). La combinaison d'action dimensionnante ELU est q_Ed = 1,35 g + 1,50 q. 1) Calculer kmod équivalent et fm,d. 2) Vérifier la contrainte de flexion σ_m,d à l'ELU. 3) Calculer la flèche instantanée et la flèche finale à long terme ELS (kdef = 0,60, ψ2,1 = 0,30).",
      steps_demo: [
        { n: 1, text: "Calcul de la charge linéaire ELU : q_Ed = 1,35 × 3,0 + 1,50 × 4,0 = 4,05 + 6,00 = 10,05 kN/m" },
        { n: 2, text: "Calcul du moment fléchissant maximal M_Ed : M_Ed = q_Ed × L² / 8 = 10,05 × 6,00² / 8 = 10,05 × 36 / 8 = 45,225 kNm = 45,23 × 10⁶ Nmm" },
        { n: 3, text: "La charge la plus courte est la surcharge q (moyen terme) → kmod retenu = 0,70" },
        { n: 4, text: "Calcul de la résistance de calcul en flexion fm,d : fm,d = kmod × fmk / γM = 0,70 × 24,0 / 1,25 = 13,44 MPa" },
        { n: 5, text: "Calcul de la contrainte de flexion ELU σ_m,d : σ_m,d = M_Ed / Wy = 45,225 × 10⁶ / (3,024 × 10⁶) = 14,95 MPa" },
        { n: 6, text: "Remarque : σ_m,d (14,95 MPa) > fm,d (13,44 MPa) → Section légèrement insuffisante (111% de taux de travail). Augmenter la hauteur à h = 400 mm !" },
        { n: 7, text: "Correction avec h = 400 mm (Wy = 140 × 400² / 6 = 3,733 × 10⁶ mm³) : σ_m,d = 45,23 × 10⁶ / 3,733 × 10⁶ = 12,12 MPa ≤ 13,44 MPa → CONFORME (90,1%) ✓" },
        { n: 8, text: "Vérification ELS de la flèche finale w_fin (avec h = 400 mm, I = 746,7 × 10⁶ mm⁴) : winst,g = 5 × 3,0 × 6000⁴ / (384 × 11500 × I) = 5,9 m. winst,q = 7,8 mm. w_fin = 5,9×(1+0,6) + 7,8×(1+0,3×0,6) = 9,44 + 9,20 = 18,64 mm ≤ L/250 = 24,0 mm ✓" },
      ],
      result_latex: "f_{m,d} = \\textbf{13{,}44 MPa} \\qquad \\sigma_{m,d}(h=400) = \\textbf{12{,}12 MPa} \\le 13{,}44 \\text{ MPa} \\qquad w_{fin} = \\textbf{18{,}64 mm} \\le 24{,}0 \\text{ mm} \\quad \\checkmark",
    },

    {
      id: 7,
      key: 'units',
      title: "Unités & Symboles en Eurocode 5 — Tableau de référence",
      icon: '📏',
      type: 'units',
      table: [
        { grandeur: "Résistance caractéristique fmk / fck", si: "MPa (N/mm²)", imperial: "psi", conversion: "C24 (Résineux massif = 24 MPa) | GL24h (Lamellé-collé = 24 MPa)" },
        { grandeur: "Module d'élasticité moyen E0,mean", si: "MPa / GPa", imperial: "psi", conversion: "GL24h : E0,mean = 11 500 MPa (11,5 GPa) | E0,05 = 9 600 MPa" },
        { grandeur: "Facteur de modification kmod", si: "Sans unité (0,50 à 1,10)", imperial: "-", conversion: "Ajuste la résistance selon la durée de charge et l'humidité" },
        { grandeur: "Facteur de fluage kdef", si: "Sans unité (0,60 à 2,00)", imperial: "-", conversion: "Ajuste la déformation différée à long terme" },
        { grandeur: "Masse volumique du bois ρk", si: "kg/m³", imperial: "pcf", conversion: "Épicéa/Sapin C24 ≈ 350-420 kg/m³ | Chêne D30 ≈ 650 kg/m³" },
        { grandeur: "Vitesse de carbonisation β0", si: "mm/min", imperial: "in/min", conversion: "0,65 mm/min pour résineux et lamellé-collé (0,50 mm/min pour feuillus)" },
      ],
      note: "⚠️ ATTENTION : En Eurocode 5, l'indice **0** désigne la direction **parallèle aux fibres** (ex: $f_{c,0,k}$) et l'indice **90** désigne la direction **perpendiculaire aux fibres** (ex: $f_{c,90,k}$).",
    },

    {
      id: 8,
      key: 'hypotheses',
      title: "Hypothèses & conditions de validité Eurocode 5",
      icon: '📋',
      type: 'hypotheses',
      items: [
        { type: 'info', text: "Le bois est un matériau renouvelable sensible à l'humidité. Toute structure bois doit être préservée des stagnations d'eau liquides par des garde au sol $\\ge 20\\text{ cm}$." },
        { type: 'info', text: "La classe de résistance 'h' (homogène, ex: GL24h) signifie que toutes les lamelles de la poutre sont de même classe mécanique." },
        { type: 'warning', text: "ATTENTION : Ne jamais percer ni entailler la zone tendue d'une poutre en bois lamellé-collé sans vérification des contraintes de traction transversale ($f_{t,90,d} \\le 0{,}4\\text{ MPa}$ très faible) !" },
        { type: 'warning', text: "Assemblages métalliques dans le bois : La résistance des broches et vis dépend de la portance locale du bois (contrainte d'encastrement $f_{h,k}$) et du moment de plastification de la tige $M_{y,Rk}$ (Théorie de Johansen)." },
        { type: 'tip', text: "Vérification au déversement : Placer des entretoises ou fixer le plancher bois directement sur la semelle supérieure comprimée pour obtenir $k_{crit} = 1{,}00$." },
        { type: 'warning', text: "Protection incendie R30 à R90 : Ajouter une sur-épaisseur sacrificielle de bois $d_{char} = \\beta_0 \\cdot t_{feu}$ ou protéger par des plaques de plâtre Type F." },
      ],
    },

    {
      id: 9,
      key: 'simple_examples',
      title: "Exemples guidés — Dimensionnement & Calculs Eurocode 5",
      icon: '✏️',
      type: 'examples_simple',
      examples: [
        {
          title: "Exemple 1 : Calcul de la résistance de calcul fm,d pour un bois C24",
          given: "Bois massif C24 (fmk = 24 MPa, γM = 1,30). Utilisation en Classe de Service 2 sous charge de court terme (kmod = 0,90)",
          find: "La résistance de calcul en flexion fm,d",
          solution_latex: "f_{m,d} = k_{mod} \\cdot \\frac{f_{m,k}}{\\gamma_M} = 0{,}90 \\times \\frac{24{,}0}{1{,}30} = 16{,}615 \\text{ MPa}",
          result: "fm,d = 16,62 MPa.",
        },
        {
          title: "Exemple 2 : Calcul de l'épaisseur carbonisée d_char après 45 min de feu",
          given: "Poutre en bois lamellé-collé GL24h (β0 = 0,65 mm/min). Durée d'exposition au feu t = 45 minutes",
          find: "La profondeur de la couche carbonisée d_char",
          solution_latex: "d_{char} = \\beta_0 \\cdot t_{feu} = 0{,}65 \\text{ mm/min} \\times 45 \\text{ min} = 29{,}25 \\text{ mm}",
          result: "Profondeur carbonisée d_char = 29,25 mm sur chaque face exposée.",
        },
        {
          title: "Exemple 3 : Contrainte de compression transversale sous un appui de poutre",
          given: "Effort d'appui F_Ed = 45 kN. Largeur de poutre b = 120 mm. Longueur d'appui sur le corbeau l = 150 mm. Acier S235 ou bois.",
          find: "La contrainte de compression perpendiculaire σ_c,90,d et comparaison avec fc,90,d = 1,8 MPa",
          solution_latex: "\\sigma_{c,90,d} = \\frac{F_{Ed}}{b \\cdot l} = \\frac{45\\,000 \\text{ N}}{120 \\times 150 \\text{ mm}^2} = \\frac{45\\,000}{18\\,000} = 2{,}50 \\text{ MPa}",
          result: "σ_c,90,d = 2,50 MPa > 1,80 MPa → Risque d'écrasement local du bois ! Rallonger l'appui à l = 210 mm.",
        },
      ],
    },

    {
      id: 10,
      key: 'real_examples',
      title: "Exemple réel — Le Centre Aquatique Olympique de Saint-Denis (Paris 2024)",
      icon: '🏢',
      type: 'examples_real',
      diagramType: 'bridge_structure',
      examples: [
        {
          context: "Plus grande charpente concave en bois lamellé-collé au monde (Portée de 80 m)",
          scenario: "Conception de caténaires de poutres concaves en bois lamellé-collé GL28h franchissant 80 m au-dessus des bassins olympiques. Structure légère réduisant le volume d'air à chauffer de 30%.",
          decomposition_latex: "\\text{Section poutres : } 50 \\times 210 \\text{ cm} \\quad \\text{Masse } CO_2 \\text{ piégée : } 2\\,700 \\text{ tonnes de } CO_2",
          lesson: "L'utilisation du bois lamellé-collé en classe de service 2 a permis de franchir 80 m de portée sans aucun appui intermédiaire avec une résistance au feu R60 naturelle par carbonisation.",
        },
      ],
    },

    {
      id: 11,
      key: 'diagrams',
      title: "Schéma — Poutre Bois, Carbonisation au Feu & Assemblage Broché",
      icon: '📊',
      type: 'interactive_diagram',
      diagramType: 'bridge_structure',
      description: "Visualisez le comportement orthotrope du bois (fibres longitudinales vs transversales), la section résiduelle efficace après carbonisation au feu et un assemblage à broches métalliques encastrées.",
      diagram_description: [
        "Structure du bois : Anisotropie des 3 axes (Longitudinal L, Radial R, Tangentiel T) et sensibilité à l'eau",
        "Section efficace au Feu : Epaisseur brute, couche carbonisée dchar, couche de bois échauffé def et section utile résiduelle",
        "Assemblage par broches : Plaques d'acier centrales insérées dans le bois et brochées par tiges métalliques à tolérance serrée",
      ],
    },

    {
      id: 12,
      key: 'mistakes',
      title: "Erreurs fatales en Construction Bois",
      icon: '⛔',
      type: 'mistakes',
      items: [
        {
          mistake: "Négliger le coefficient de fluage $k_{def}$ dans les calculs de flèche",
          trap: "Calculer la flèche ELS uniquement avec la flèche instantanée sans ajouter la déformation différée à long terme $k_{def} \\cdot w_{inst}$",
          fix: "Sous charge permanente, le bois continue de s'affaisser pendant 3 à 5 ans ! La flèche finale est 1,6 à 3 fois supérieure à la flèche instantanée initialement mesurée !",
        },
        {
          mistake: "Mettre du bois en contact direct avec la maçonnerie humide",
          trap: "Poser une poutre en bois ou une sole d'ossature directement sur une dalle béton sans bande d'arase étanche",
          fix: "Le béton transmet son humidité au bois par capillarité ($w > 20\\%$), provoquant le développement immédiat de champignons lignivores (Mérule) et le pourrissement. Interposer un feutre bitumeux étanche.",
        },
        {
          mistake: "Créer des entailles ou percements dans les zones tendues",
          trap: "Faire une encoche sous une poutre en bois au droit d'un appui pour faire passer une gaine technique",
          fix: "Le bois a une résistance à la traction perpendiculaire quasi-nulle ($f_{t,90,k} \\approx 0,4$ MPa). L'entaille crée une concentration de contraintes qui fend la poutre en deux dans le sens des fibres !",
        },
        {
          mistake: "Utiliser la mauvaise classe de service de bois",
          trap: "Utiliser un bois traité Classe 1 ou 2 pour une terrasse ou une passerelle extérieure exposée aux intempéries (Classe 3 ou 4)",
          fix: "Le bois pourrit en 2 ans ! Utiliser exclusivement des essences naturellement durables (Mélèze, Douglas, Chêne, Bois exotiques) ou des bois traités par autoclave Classe 4.",
        },
      ],
    },

    {
      id: 13,
      key: 'tips',
      title: "Astuces du charpentier & ingénieur bois",
      icon: '💡',
      type: 'tips',
      tips: [
        "Sens de pose des planchers CLT : Les panneaux CLT (Cross-Laminated Timber) ont des plis croisés à 90°. S'assurer que les plis extérieurs sont orientés dans le sens de la portée principale !",
        "Combinaison kmod : Si une combinaison ELU comprend des charges permanentes G et du vent Q, utiliser le $k_{mod}$ de la charge la plus courte (Court terme $k_{mod} = 0{,}90$).",
        "Calcul rapide du dimensionnement d'une poutre BLC : Pour une portée L, viser une hauteur $h \\approx L/16\\text{ à } L/18$ et une largeur $b \\approx h/3\\text{ à } h/4$. Ex: Pour L = 9,0 m $\\to h = 500\\text{ mm}, b = 140\\text{ mm}$.",
        "Protection au Feu passive : Une charpente bois lamellé-collé n'a pas besoin de peinture intumescente coûteuse : il suffit de surdimensionner la section de quelques centimètres pour absorber la carbonisation !",
        "Logiciels de calcul charpente bois : Cadwork (Modélisation 3D d'exécution CNC), Dietrich's, Sema, Robot Structural Analysis (Module Eurocode 5), Binderholz CLT-Designer.",
      ],
    },

    {
      id: 14,
      key: 'normes',
      title: "Normes & Références — Eurocode 5 & Bois",
      icon: '📜',
      type: 'norms',
      norms: [
        { code: "NF EN 1995-1-1 (Eurocode 5)", description: "Calcul des structures en bois — Partie 1-1 : Règles générales et règles pour les bâtiments." },
        { code: "NF EN 1995-1-2 (Eurocode 5)", description: "Calcul des structures en bois — Partie 1-2 : Calcul du comportement au feu des structures." },
        { code: "NF EN 14080", description: "Structures en bois — Bois lamellé-collé et bois massif reconstitué — Exigences." },
        { code: "NF EN 16351", description: "Structures en bois — Panneaux en bois massif croisé (CLT) — Exigences." },
        { code: "NF EN 338", description: "Bois de structure — Classes de résistance (Classes C14 à C50 pour résineux, D18 à D70 pour feuillus)." },
        { code: "DTU 31.2 / DTU 31.1", description: "Travaux de bâtiment — Construction de maisons et bâtiments à ossature en bois / Charpente en bois." },
      ],
    },

    {
      id: 15,
      key: 'exercises',
      title: "Exercices Eurocode 5 & Construction Bois — 3 niveaux",
      icon: '✍️',
      type: 'exercises',
      exercises: [
        {
          id: 'ex_boi_1',
          number: 1,
          difficulty: 'Facile',
          text: "Un solivage en bois massif C24 (fmk = 24 MPa, γM = 1,30) est installé en Classe de Service 1 sous une charge permanente pure (long terme, kmod = 0,60). Calculer la résistance de calcul en flexion fm,d.",
          hint: "fm,d = kmod · fmk / γM.",
          answer_latex: "f_{m,d} = 0{,}60 \\times \\frac{24{,}0}{1{,}30} = 11{,}077 \\text{ MPa} \\approx 11{,}08 \\text{ MPa}",
          answer_text: "Résistance de calcul en flexion fm,d = 11,08 MPa",
        },
        {
          id: 'ex_boi_2',
          number: 2,
          difficulty: 'Moyen',
          text: "Calculer la section résiduelle utile (b_ef × h_ef) d'une poutre en bois lamellé-collé GL24h de section initiale b = 160 mm et h = 400 mm après 60 minutes d'exposition au feu sur 3 faces (la face supérieure est protégée par une dalle). Vitesse de carbonisation β0 = 0,65 mm/min.",
          hint: "dchar = β0 · t. La largeur perd dchar de chaque côté (2×dchar). La hauteur perd dchar en sous-face.",
          answer_latex: "d_{char} = 0{,}65 \\times 60 = 39{,}0 \\text{ mm} \\qquad b_{ef} = 160 - (2 \\times 39{,}0) = 82{,}0 \\text{ mm} \\qquad h_{ef} = 400 - 39{,}0 = 361{,}0 \\text{ mm}",
          answer_text: "Section résiduelle efficace après 60 min de feu : 82 mm × 361 mm (53,7% de la section conservée intacte au cœur).",
        },
        {
          id: 'ex_boi_3',
          number: 3,
          difficulty: 'Difficile',
          text: "Une solive de plancher en bois C24 sous charge permanente subit une flèche instantanée winst,G = 8,0 mm. En Classe de Service 2, le coefficient de fluage est kdef = 0,80. Calculer la flèche finale à long terme w_fin,G sous le seul poids propre.",
          hint: "w_fin,G = winst,G · (1 + kdef).",
          answer_latex: "w_{fin,G} = 8{,}0 \\text{ mm} \\times (1 + 0{,}80) = 8{,}0 \\times 1{,}80 = 14{,}40 \\text{ mm}",
          answer_text: "Flèche finale à long terme w_fin,G = 14,4 mm (Augmentation de 80% sous l'effet du fluage).",
        },
      ],
    },

    {
      id: 16,
      key: 'corrections',
      title: "Corrections détaillées",
      icon: '✅',
      type: 'corrections',
      note: "Retrouvez les détails des calculs de résistance, fluage et vérification au feu Eurocode 5 en cliquant sur 'Voir la correction'.",
    },

    {
      id: 17,
      key: 'quiz',
      title: "Quiz Construction Bois & Eurocode 5 — 3 questions",
      icon: '🎯',
      type: 'quiz',
      questions: [
        {
          id: 'q_boi_1',
          question: "Quel coefficient de l'Eurocode 5 (kmod) prend en compte l'effet combiné de la durée de charge et de la classe de service sur la résistance du bois ?",
          options: [
            { id: 'a', text: "Le coefficient kdef" },
            { id: 'b', text: "Le facteur de modification kmod" },
            { id: 'c', text: "Le facteur d'imperfection βc" },
            { id: 'd', text: "Le facteur de forme kh" },
          ],
          correct: 'b',
          explanation: "Le facteur kmod réajuste la résistance mécanique du bois (fd = kmod · fk / γM) selon la durée de la charge la plus courte de la combinaison et la classe de service hygrométrique.",
        },
        {
          id: 'q_boi_2',
          question: "Pourquoi une structure en bois lamellé-collé conserve-t-elle sa résistance très longtemps lors d'un incendie ?",
          options: [
            { id: 'a', text: "Parce que le bois ne brûle jamais" },
            { id: 'b', text: "Grâce à la formation d'une couche charbonnée isolante à vitesse lente (β0 ≈ 0,65 mm/min) qui protège le cœur du bois" },
            { id: 'c', text: "Parce que la colle contient de l'eau" },
            { id: 'd', text: "Grâce à la dilatation thermique du bois" },
          ],
          correct: 'b',
          explanation: "La combustion du bois crée une couche superficielle de charbon très isolante qui réduit le transfert thermique vers le cœur. Le bois situé sous la couche carbonisée conserve 100% de sa capacité portante.",
        },
        {
          id: 'q_boi_3',
          question: "Quelle est la valeur du coefficient partiel de sécurité γM recommandé par l'Eurocode 5 pour le Bois Lamellé-Collé (GL) ?",
          options: [
            { id: 'a', text: "γM = 1,00" },
            { id: 'b', text: "γM = 1,25" },
            { id: 'c', text: "γM = 1,50" },
            { id: 'd', text: "γM = 2,00" },
          ],
          correct: 'b',
          explanation: "L'Eurocode 5 retient γM = 1,25 pour le bois lamellé-collé (GL) et γM = 1,30 pour le bois massif, traduisant la plus grande homogénéité du lamellé-collé purgé de ses nœuds.",
        },
      ],
    },

    {
      id: 18,
      key: 'exam_questions',
      title: "Questions d'examen — Niveau Licence / Master Charpente Bois",
      icon: '🎓',
      type: 'exam',
      questions: [
        "Démontrez la méthode de calcul du coefficient de déversement kcrit pour une poutre rectangulaire en bois lamellé-collé selon l'Eurocode 5 EN 1995-1-1. Expliquez le rôle de la contrainte critique de déversement σ_m,crit.",
        "Exposez le principe d'assemblage bois par tiges métalliques (broches / boulons). Expliquez la théorie de Johansen et les modes de ruine par plastification de la tige et écrasement du bois (portance f_h,k).",
        "Présentez les 3 Classes de Service hygrométriques de l'Eurocode 5. Expliquez comment le phénomène de sorption/désorption d'eau influe sur le module d'élasticité E0,mean et le coefficient de fluage kdef.",
        "Détaillez le dimensionnement au feu d'un plancher en panneaux de bois massif croisé (CLT) selon l'Eurocode 5 Partie 1-2 (Méthode de la section réduite avec suppression de la couche carbonisée d_char et couche d'affaiblissement d_0 = 7 mm).",
      ],
    },

    {
      id: 19,
      key: 'interview_questions',
      title: "Questions d'entretien — Ingénieur Calcul Structures Bois",
      icon: '💼',
      type: 'interview',
      questions: [
        {
          question: "Pourquoi ne faut-il jamais utiliser un coefficient kmod 'permanente' (0,60) pour une vérification ELU incluant du vent ?",
          answer_hint: "L'Eurocode 5 stipule que si une combinaison d'actions réunit plusieurs charges de durées différentes (ex: Poids propre G permanente + Vent Q instantanée), la résistance du bois doit être évaluée avec le kmod correspondant à la charge LA PLUS COURTE de la combinaison. Pour le vent (court terme), kmod = 0,90.",
        },
        {
          question: "Quelle est la différence entre un bois massif C24 et un bois lamellé-collé GL24h ?",
          answer_hint: "C24 désigne un bois massif de résineux classé mécaniquement avec fmk = 24 MPa et E0,mean = 11 000 MPa (portée limitée à ~6 m, présence de nœuds). GL24h désigne un bois lamellé-collé homogène composé de lamelles purgées de défauts collées entre elles, offrant fmk = 24 MPa, E0,mean = 11 500 MPa et permettant des pièces de grande longueur (jusqu'à 40 m).",
        },
        {
          question: "Comment vérifiez-vous l'écrasement sous appui d'une poutre en bois ?",
          answer_hint: "Vérification de la compression perpendiculaire aux fibres σ_c,90,d = F_Ed / A_eff ≤ f_c,90,d × k_c,90. Le coefficient k_c,90 (1,2 à 1,5) prend en compte l'effet de confinement du bois non chargé de part et d'autre de la surface d'appui.",
        },
      ],
    },

    {
      id: 20,
      key: 'practical_case',
      title: "Cas pratique — Dimensionnement de la charpente d'un gymnase en BLC",
      icon: '🔧',
      type: 'practical',
      scenario: "Étude de cas — Dimensionnement d'une grande poutre en bois lamellé-collé GL28h (fmk = 28 MPa, E0,mean = 12 500 MPa) de 18,0 m de portée franchissant la nef d'un gymnase municipal",
      description: `**Mise en situation** : Ingénieur bureau d'études bois. Poutre à inertie constante b = 200 mm, h = 1 000 mm (Wy = 33,33 × 10⁶ mm³). Entraxe des poutres = 5,0 m. Charges : Poids propre g = 2,5 kN/m², Neige q_s = 1,2 kN/m² (Moyenne durée, kmod = 0,70 en Serv 1).`,
      resolution_latex_1: "q_{Ed} = 5{,}0 \\times (1{,}35 \\times 2{,}5 + 1{,}50 \\times 1{,}2) = 5{,}0 \\times (3{,}375 + 1{,}80) = 25{,}875 \\text{ kN/m}",
      resolution_latex_2: "M_{Ed} = \\frac{25{,}875 \\times 18{,}0^2}{8} = 1\\,047{,}9 \\text{ kNm} = 1\\,047{,}9 \\times 10^6 \\text{ Nmm}",
      resolution_latex_3: "f_{m,d} = 0{,}70 \\times \\frac{28{,}0}{1{,}25} = 15{,}68 \\text{ MPa} \\qquad \\sigma_{m,d} = \\frac{1\\,047{,}9 \\times 10^6}{33{,}33 \\times 10^6} = 31{,}44 \\text{ MPa} > 15{,}68 \\quad (\\text{NON CONFORME en h=1000})",
      conclusion: "Redimensionnement nécessaire : Porter la hauteur à h = 1 200 mm (Wy = 48,0 × 10⁶ mm³) → σ_m,d = 21,83 MPa encore trop fort. Hauteur finale retenue h = 1 400 mm (Wy = 65,33 × 10⁶ mm³) → σ_m,d = 16,04 MPa ≈ 15,68 MPa ✓ (Maintien latéral par pannes tous les 2 m).",
    },

    {
      id: 21,
      key: 'summary',
      title: "Résumé exécutif — La Construction Bois en 6 points",
      icon: '📋',
      type: 'summary',
      content: `### La Construction Bois en 6 fondamentaux

1. **Matériau Orthotrope** : Résistance parallèle aux fibres ($f_{c,0}$) 10 fois supérieure à la résistance perpendiculaire ($f_{c,90}$).
2. **Facteur de Modification $k_{mod}$** : Ajuste la résistance $f_d = k_{mod} f_k / \\gamma_M$ selon l'humidité et la durée de la charge.
3. **Fluage à Long Terme $k_{def}$** : La flèche finale $w_{fin} = w_{inst} (1 + k_{def})$ prend en compte l'affaissement lent du bois.
4. **Bois Lamellé-Collé & CLT** : GL24h/GL28h et panneaux CLT permettant de très grandes portées ($30\\text{ à } 100\\text{ m}$) et des immeubles bois.
5. **Résistance au Feu** : Carbonisation superficielle lente ($\\beta_0 = 0{,}65\\text{ mm/min}$) préservant 100% de la capacité mécanique du cœur.
6. **Bilan Carbone Positif** : Matériau biosourcé renouvelable piégeant $\\approx 1\\text{ tonne de } \\text{CO}_2/\\text{m}^3$.`,
    },

    {
      id: 22,
      key: 'key_points',
      title: "Points clés à mémoriser — Eurocode 5",
      icon: '⭐',
      type: 'keypoints',
      points: [
        "Formule de résistance de calcul Eurocode 5 : fd = kmod · fk / γM",
        "γM = 1,30 pour le bois massif | γM = 1,25 pour le bois lamellé-collé (GL)",
        "kmod dépend de la classe de service (1, 2, 3) et de la charge la plus courte de la combinaison",
        "Toujours calculer la flèche finale ELS avec w_fin = w_inst · (1 + kdef)",
        "Carbonisation au feu : dchar = 0,65 mm/min pour les résineux et le lamellé-collé",
        "Interdiction de poser du bois en contact direct avec du béton maçonné (bande d'arase obligatoire)",
        "CLT (Cross-Laminated Timber) : Panneaux à plis croisés 90° pour murs et dalles d'immeubles bois",
      ],
    },

    {
      id: 23,
      key: 'self_assessment',
      title: "Auto-évaluation — Construction Bois & Eurocode 5",
      icon: '🏆',
      type: 'self_assessment',
      description: "Validez vos compétences en dimensionnement des structures bois selon l'Eurocode 5 :",
      objectives: [
        "Je comprends la nature orthotrope du bois et la différence entre sens axial et perpendiculaire",
        "Je sais déterminer la classe de service (1, 2 ou 3) et le facteur de modification kmod",
        "Je sais calculer la résistance de calcul en flexion fm,d et en compression fc,0,d",
        "Je maîtrise le calcul de la flèche finale ELS à long terme avec le coefficient de fluage kdef",
        "Je sais calculer l'épaisseur carbonisée dchar et la section résiduelle d'une pièce exposée au feu",
        "Je connais les caractéristiques du Bois Lamellé-Collé (GL24h/GL28h) et du CLT",
        "J'ai résolu les 3 exercices d'Eurocode 5 avec succès",
        "J'ai obtenu 3/3 au quiz de construction bois",
      ],
    },
  ],

  quickQuiz: {
    question: "Dans l'Eurocode 5 (EN 1995-1-1), comment calcule-t-on la résistance de calcul en flexion fm,d du bois ?",
    options: [
      { id: 'a', label: "A) fm,d = fmk × γM" },
      { id: 'b', label: "B) fm,d = kmod × (fmk / γM)" },
      { id: 'c', label: "C) fm,d = fmk / kdef" },
    ],
    correct: 'b',
    explanation: "La résistance de calcul s'obtient en multipliant la valeur caractéristique fmk par le facteur kmod (durée/humidité) et en divisant par le coefficient partiel γM.",
  },
};
