// ── Lesson: Pathologie, Diagnostic & Réhabilitation — Module 29 ───────────────
export const lesson_pathologie = {
  moduleId: 29,
  slug: 'pathologie',
  lessonIndex: 1,
  title: "Pathologie, Diagnostic, Essais Non-Destructifs & Réhabilitation des Ouvrages",
  subtitle: "Module 29 — Pathologie & Inspection du Génie Civil",
  level: 'Avancé',
  duration: '40h',
  diagramType: 'rebar_beam',
  tags: ['Pathologie', 'Carbonatation', 'Corrosion', 'Chlorures', 'Essais Non-Destructifs', 'Scléromètre', 'Fibre de Carbone', 'Réhabilitation'],

  steps: [
    {
      id: 1,
      key: 'definition',
      title: "Définition — La Pathologie & la Réhabilitation des Ouvrages",
      icon: '📖',
      type: 'definition',
      fr: 'Carbonatation, Corrosion des Aciers, Essais Non-Destructifs & Renforcement par Carbone',
      en: 'Structural Pathology, NDT Diagnosis & Concrete Rehabilitation',
      metier: "Pratiquée par les ingénieurs d'inspection et de diagnostic (IQOA), experts en corrosion du béton, ingénieurs en réparation de structures et bureaux d'études de réhabilitation.",
      content: `La **pathologie des structures** est la science médicale du génie civil : elle étudie les maladies, les dégradations et les vieillissements des matériaux de construction (béton armé, acier, maçonneries, bois) afin de poser un diagnostic précis et d'appliquer des solutions de **réhabilitation et de renforcement**.

### Les 4 principales pathologies du Béton Armé :
1. **La Carbonatation du Béton** : Neutralisation de la chaux du béton par le $CO_2$ de l'air (baisse du pH de $12{,}5$ à $< 9$), entraînant la dépassivation et la rouille des armatures.
2. **La Corrosion par Attaque des Chlorures** : Pénétration des sels de déverglaçage ou des aérosols marins provoquant une corrosion par piqûres ultra-rapide des aciers.
3. **L'Alcali-Réaction (AAR) & Réaction Sulfatique Interne (RSI)** : Réactions chimiques internes provoquant un gonflement de la matrice de béton et une fissuration en carte de géographie.
4. **Le Gel/Dégel & l'Écaillage** : Destructuration de la surface du béton par l'expansion de l'eau gelée dans les pores ($+9\\%$ de volume).

> 💡 **Le phénomène d'éclatement du béton (Spalling)** : En rouillant, l'acier gonfle et son volume augmente de **4 à 6 fois** ! Cette poussée interne dépasse la résistance en traction du béton et fait éclater l'enrobage (pousse-au-vide).`,
    },

    {
      id: 2,
      key: 'importance',
      title: "Pourquoi le diagnostic et la réhabilitation sont stratégiques",
      icon: '⚠️',
      type: 'importance',
      content: `Le patrimoine d'infrastructures et de bâtiments construit durant les Glorieuses (1950-1980) atteint aujourd'hui un âge critique de 50 à 70 ans.

- **Prévention des effondrements tragiques** : La ruine du Pont Morandi à Gênes en 2018 rappelle que la corrosion des câbles de précontrainte non détectée tue.
- **Économie circulaire & décarbonation** : Réhabiliter et renforcer un ouvrage existant émet **80% de $CO_2$ en moins** que de démolir et reconstruire à neuf.
- **Optimisation des coûts de maintenance (Méthode IQOA)** : Traiter la carbonatation au stade de l'inhibition de corrosion coûte 10 fois moins cher que de refaire les poteaux après éclatement !

> ⚠️ **Règle d'or** : "Ne jamais appliquer un mortier de réparation de surface sur des armatures rouillées sans décapage préalable par sablage (degré Sa 2,5) et application d'un inhibiteur de corrosion !"`,
    },

    {
      id: 3,
      key: 'applications',
      title: "Applications terrain — Essais Non-Destructifs (END) & Réparations",
      icon: '🏗️',
      type: 'applications',
      examples: [
        {
          context: "Mesure de la Carbonatation par Test à la Phénolphtaléine",
          text: "Pulvérisation de phénolphtaléine sur carotte fraîchement cassée : le béton sain vire au rose fuchsia (pH > 9), le béton carbonaté reste incolore.",
        },
        {
          context: "Auscultation des Aciers par Ferroscan / Pachomètre",
          text: "Détection électromagnétique non-destructive du diamètre, de la position et de la profondeur d'enrobage $c$ des armatures dans un voile béton.",
        },
        {
          context: "Mesure de la Résistance par Scléromètre (Marteau de Schmidt)",
          text: "Mesure de la dureté de surface du béton pour estimer la résistance en compression $f_{ck}$ sans carottage destructif.",
        },
        {
          context: "Cartographie du Potentiel de Corrosion (Électrode de Référence)",
          text: "Mesure du potentiel électrique à la surface du béton ($mV$) pour localiser les zones où les aciers sont en cours de corrosion active.",
        },
        {
          context: "Renforcement de Poutres par Plats en Fibre de Carbone (PRFC/CFRP)",
          text: "Collage à la résine époxy de lames de carbone sous la sous-face des poutres pour augmenter leur capacité fléchissante de 30% à 50%.",
        },
        {
          context: "Protection Cathodique par Courant Imposé (PCCI)",
          text: "Injection d'un faible courant continu inverse pour stopper définitivement la corrosion des aciers dans les ouvrages en milieu marin.",
        },
      ],
    },

    {
      id: 4,
      key: 'theory',
      title: "Théorie — Loi de Carbonatation & Loi de Fick pour les Chlorures",
      icon: '📐',
      type: 'theory',
      diagramType: 'rebar_beam',
      content: `### 1. Modèle Fickien de la Carbonatation du Béton

La profondeur de carbonatation $x_c(t)$ évolue proportionnellement à la racine carrée du temps $t$ (en années) :

$$x_c(t) = K_{carb} \\cdot \\sqrt{t} \\quad [\\text{mm}]$$

- $K_{carb}$ = cinétique de carbonatation (en $\\text{mm}/\\sqrt{\\text{an}}$). Dépend de la porosité du béton, de sa classe de résistance et de l'humidité relative du milieu (maximale pour $RH = 50\\% \\text{ à } 70\\%$).
- **Temps d'amorçage de la corrosion ($t_{init}$)** : Durée nécessaire pour que le front de carbonatation atteigne les aciers situés à la profondeur d'enrobage $c$ :

$$t_{init} = \\left( \\frac{c}{K_{carb}} \\right)^2 \\quad [\\text{ans}]$$

### 2. Pénétration des Chlorures (2ème Loi de Fick)

La concentration en chlorures $C(x,t)$ à une profondeur $x$ au bout d'un temps $t$ sous une concentration de surface $C_s$ vaut :

$$C(x,t) = C_s \\cdot \\left( 1 - \\text{erf}\\left( \\frac{x}{2 \\sqrt{D_{cl} \\cdot t}} \\right) \\right)$$

- $D_{cl}$ = coefficient de diffusion apparente des chlorures [$\\\\text{cm}^2/\\\\text{s}$].
- $\\text{erf}$ = fonction d'erreur mathématique.

### 3. Calcul du Renforcement par Fibre de Carbone (PRFC)

Le moment résistant additionnel apporté par la lame de carbone collée en sous-face de poutre vaut :

$$\\Delta M_{Rd} = A_f \\cdot f_{fd} \\cdot (h - x_N)$$

- $A_f$ = section de la lame de carbone [mm²], $f_{fd}$ = contrainte de calcul du carbone ($\approx 1500\\text{ à } 2000\\text{ MPa}$).`,
    },

    {
      id: 5,
      key: 'formulas',
      title: "Formules essentielles — Carbonatation, Chlorures & Renforcement",
      icon: '🔢',
      type: 'formulas',
      diagramType: 'rebar_beam',
      formulas: [
        {
          name: "Temps d'amorçage de la corrosion par carbonatation",
          latex: "t_{init} = \\left( \\frac{c}{K_{carb}} \\right)^2 \\quad [\\text{années}]",
          description: "c = enrobage des armatures en mm, Kcarb = coefficient de carbonatation en mm/√an.",
        },
        {
          name: "Vitesse d'impulsion ultrasonique dans le béton (UPV)",
          latex: "V = \\frac{L}{\\Delta t} \\quad [\\text{m/s}] \\qquad (V > 4000 \\text{ m/s : Béton d'excellente qualité})",
          description: "L = distance entre émetteur et récepteur, Δt = temps de transit. V < 3000 m/s indique un béton fissuré ou dégradé.",
        },
        {
          name: "Seuil critique de corrosion par les chlorures",
          latex: "C_{crit} \\approx 0{,}40\\% \\text{ de chlorures par rapport au poids de ciment}",
          description: "Au-delà de ce seuil, la couche de passivation de l'acier est détruite et la corrosion pîqûre commence.",
        },
        {
          name: "Contrainte ultime de la lame de carbone (PRFC)",
          latex: "\\sigma_f = E_f \\cdot \\varepsilon_f \\le f_{fb} \\quad (E_f \\approx 165\\text{ à } 210 \\text{ GPa}, \\varepsilon_{f,max} \\approx 0{,}8\\%)",
          description: "Limiter la déformation du carbone pour éviter le décollement prématuré de la lame (Peeling).",
        },
      ],
    },

    {
      id: 6,
      key: 'stepbystep',
      title: "Calcul complet — Estimation du temps de carbonatation et renforcement d'une poutre",
      icon: '🔬',
      type: 'stepbystep',
      problem: "Un viaduc en béton armé construit en 1980 a un enrobage mesuré au pachomètre c = 25 mm. Les mesures sur carottes montrent un coefficient de carbonatation Kcarb = 3,5 mm/√an. 1) Calculer l'année d'amorçage de la corrosion t_init. 2) Sachant que la phase de propagation de rouille avant éclatement dure environ 10 ans, prédire l'année d'éclatement du béton. 3) Calculer la section de lame de carbone A_f nécessaire pour ajouter un moment résistant ΔM_Rd = 80 kNm sur une poutre (bras de levier z = 0,45 m, f_fd = 1 400 MPa).",
      steps_demo: [
        { n: 1, text: "Calcul du temps d'amorçage de la corrosion : t_init = (c / Kcarb)² = (25 / 3,5)² = (7,14)² = 51,0 ans" },
        { n: 2, text: "Année d'amorçage de la corrosion : Année_init = 1980 + 51 = 2031" },
        { n: 3, text: "Calcul de l'année d'éclatement du béton (avec 10 ans de propagation) : Année_éclatement = 2031 + 10 = 2041" },
        { n: 4, text: "Calcul de la force de traction requise dans la lame de carbone : F_f = ΔM_Rd / z = 80 kNm / 0,45 m = 177,78 kN = 177 778 N" },
        { n: 5, text: "Calcul de la section de lame de carbone A_f : A_f = F_f / f_fd = 177 778 N / 1 400 N/mm² = 126,98 mm²" },
        { n: 6, text: "Choix de la lame commerciale : Lame de carbone Sika CarboDur S512 (largeur 50 mm, épaisseur 1,2 mm → Section A_f = 60 mm² → Poser 2 lames parallèles S512 soit A_f = 120 mm² ≈ 127 mm²)." },
      ],
      result_latex: "t_{init} = \\textbf{51 ans (Année 2031)} \\qquad \\text{Éclatement : } \\textbf{2041} \\qquad A_f = \\textbf{127 mm}^2 \\quad (2 \\text{ lames S512}) \\quad \\checkmark",
    },

    {
      id: 7,
      key: 'units',
      title: "Unités & Symboles du Diagnostic et de la Pathologie — Tableau de référence",
      icon: '📏',
      type: 'units',
      table: [
        { grandeur: "Coefficient de carbonatation Kcarb", si: "mm/√an", imperial: "in/√yr", conversion: "Béton C25/30 Kcarb ≈ 3 à 5 mm/√an | Béton C50/60 Kcarb < 1,5 mm/√an" },
        { grandeur: "Potentiel de corrosion E_corr", si: "mV / CSE (Électrode Cu/CuSO4)", imperial: "mV", conversion: "E < -350 mV → Risque de corrosion active > 90%" },
        { grandeur: "Résistivité électrique du béton ρ_e", si: "kΩ·cm ou Ω·m", imperial: "kΩ·in", conversion: "ρ_e < 5 kΩ·cm → Vitesse de corrosion très élevée" },
        { grandeur: "Vitesse ultrasonique UPV", si: "m/s ou km/s", imperial: "ft/s", conversion: "> 4000 m/s: Excellent | 3500-4000 m/s: Bon | < 3000 m/s: Fissuré" },
        { grandeur: "Conductivité des chlorures D_cl", si: "cm²/s (ex: 10⁻⁸ cm²/s)", imperial: "sq in/sec", conversion: "Détermine la vitesse de pénétration des ions sel" },
      ],
      note: "⚠️ ATTENTION : Les essais non-destructifs (NDT) comme le scléromètre ou les ultrasons nécessitent impérativement un **étalonnage sur carottes extraites** pour fournir des valeurs absolues de résistance en MPa !",
    },

    {
      id: 8,
      key: 'hypotheses',
      title: "Hypothèses & principes du diagnostic de structure",
      icon: '📋',
      type: 'hypotheses',
      items: [
        { type: 'info', text: "Le diagnostic complet d'un ouvrage comporte 4 étapes : 1. Inspection visuelle et relevé des désordres. 2. Auscultation non-destructive sur site. 3. Précomptes et essais sur carottes en laboratoire. 4. Calcul de re-qualification de la structure (Eurocode 8 Part 3)." },
        { type: 'info', text: "La carbonatation ne se produit que si l'air contient du $CO_2$ et que le béton est partiellement saturé en eau ($50\\% \\le RH \\le 70\\%$). En immersion totale ou en air parfaitement sec, la carbonatation est stoppée !" },
        { type: 'warning', text: "ATTENTION : L'alcali-réaction (AAR) nécessite 3 conditions simultanées : des granulats réactifs (silice réactive), une forte teneur en alcalins ($Na_2O_{eq}$) et une forte humidité relative ($RH > 80\\%$)." },
        { type: 'warning', text: "Collage de plats en carbone : La préparation de surface du béton (ponçage, grenaillage jusqu'à mise à nu des granulats) est capitale ! La rupture doit se faire dans le béton et non à l'interface colla/béton." },
        { type: 'tip', text: "Inhibiteurs de corrosion : Les inhibiteurs de corrosion amino-alcools appliqués en surface pénètrent par capillarité jusqu'aux aciers et reforment la film de passivation." },
      ],
    },

    {
      id: 9,
      key: 'simple_examples',
      title: "Exemples guidés — Profondeur de carbonatation & Potentiel",
      icon: '✏️',
      type: 'examples_simple',
      examples: [
        {
          title: "Exemple 1 : Calcul de la profondeur de carbonatation au bout de 25 ans",
          given: "Béton avec cinétique Kcarb = 4,0 mm/√an, durée t = 25 ans",
          find: "La profondeur du front de carbonatation xc",
          solution_latex: "x_c = 4{,}0 \\times \\sqrt{25} = 4{,}0 \\times 5 = 20{,}0 \\text{ mm}",
          result: "Profondeur carbonatée xc = 20 mm. Si l'enrobage c = 15 mm, les aciers sont déjà en cours de corrosion !",
        },
        {
          title: "Exemple 2 : Interprétation d'un potentiel de corrosion",
          given: "Une mesure de potentiel au droit d'une armature donne E_corr = -420 mV (par rapport à l'électrode CSE)",
          find: "Le diagnostic de corrosion d'après la norme ASTM C876",
          solution_latex: "E_{corr} = -420 \\text{ mV} < -350 \\text{ mV} \\implies \\text{Probabilité de corrosion active } > 90\\%",
          result: "Zone hautement active. Décapage du béton et traitement d'urgence requis.",
        },
        {
          title: "Exemple 3 : Gain de résistance par tissu de carbone",
          given: "Poteau béton d'un bâtiment de bureau de section 30×30 cm emballé par 2 couches de tissu de carbone (Confinement)",
          find: "Le rôle du confinement de carbone",
          solution_latex: "\\sigma_{c,conf} = f_{ck} + k_1 \\cdot f_{l,a} \\quad (\\text{Gain de résistance en compression de } +30\\% \\text{ à } +50\\%)",
          result: "Augmentation spectaculaire de la capacité portante et de la ductilité du poteau sans augmentation de section.",
        },
      ],
    },

    {
      id: 10,
      key: 'real_examples',
      title: "Exemple réel — Le Renforcement des Viaducs de Chillon en Suisse",
      icon: '🏢',
      type: 'examples_real',
      diagramType: 'rebar_beam',
      examples: [
        {
          context: "Viaducs autoroutiers jumeaux de 2,1 km construits en 1969 touchés par l'Alcali-Réaction (AAR)",
          scenario: "Diagnostic complet par microscopie et ultrasons. Renforcement innovant par coulage d'une sur-dalle en Béton Fibré Ultra-Performant (BFUP / UHPFRC) de 45 mm avec aciers passifs.",
          decomposition_latex: "\\text{Épaisseur BFUP : } 45 \\text{ mm} \\quad \\Rightarrow \\quad \\text{Stoppe l'infiltration d'eau et augmente la rigidité de } 40\\%",
          lesson: "Le traitement par couche de roulement en BFUP étanche a stoppé l'alcali-réaction en privant la matrice de béton d'eau tout en prolongeant la durée de vie de l'ouvrage de 50 ans.",
        },
      ],
    },

    {
      id: 11,
      key: 'diagrams',
      title: "Schéma du processus de carbonatation & Auscultation par ultrasons",
      icon: '📊',
      type: 'interactive_diagram',
      diagramType: 'rebar_beam',
      description: "Visualisez le front de carbonatation s'avançant vers les aciers, le mécanisme d'éclatement du béton par la rouille et le principe des essais non-destructifs (Scléromètre, Ultrasons, Pachomètre).",
      diagram_description: [
        "Front de Carbonatation : Zone neutre pH < 9 (colorée en blanc par le test phénolphtaléine) progressant vers les aciers",
        "Éclatement d'enrobage : Formation d'oxydes de fer expansifs (x4 à x6) créant une fissure parallèle à l'armature",
        "Renforcement par Fibre de Carbone : Collage d'une lame PRFC en sous-face de poutre avec couche d'imprimation époxy",
      ],
    },

    {
      id: 12,
      key: 'mistakes',
      title: "Erreurs graves en Diagnostic et Réparation des béton",
      icon: '⛔',
      type: 'mistakes',
      items: [
        {
          mistake: "Réparer au mortier sans passiver les aciers mis à nu",
          trap: "Boucher un éclat de béton en appliquant un mortier d'usure directement sur un acier rouillé non brossé",
          fix: "La corrosion continue de plus belle sous le mortier de réparation ! Sabler l'acier jusqu'à la mise à blanc (Sa 2,5) et appliquer une peinture primaire inhibitrice de corrosion au zinc/ciment.",
        },
        {
          mistake: "Créer un effet d'anode macrocellulaire (Effet d'anode de bord)",
          trap: "Réparer une zone carbonatée localement avec un mortier ultra-dense très alcalin sans traiter les zones adjacentes",
          fix: "Le contraste de pH et de potentiel entre le nouveau mortier et l'ancien béton accélère la corrosion des aciers voisins juste à la frontière de la réparation ! Poser des anodes sacrificielles en zinc.",
        },
        {
          mistake: "Coller des lames de carbone sur un béton de faible résistance (< 15 MPa)",
          trap: "Tenter de renforcer une poutre en béton friable avec du carbone très haut module",
          fix: "La rupture se produira par arrachement du béton de peau (Peeling) à une contrainte très faible ! Vérifier la résistance en traction du béton par essai d'arrachement direct (Pull-off test > 1,5 MPa).",
        },
      ],
    },

    {
      id: 13,
      key: 'tips',
      title: "Astuces de l'expert en Inspection et Réhabilitation",
      icon: '💡',
      type: 'tips',
      tips: [
        "Test phénolphtaléine express sur chantier : Rapprocher le spray d'une carotte fraîchement extraite. La frontière rose/incolore se lit à 0,5 mm près !",
        "Contrôle de l'enrobage réel c : Ne jamais se fier aux plans de coffrage d'origine ! L'enrobage réel mesuré au Pachomètre est souvent inférieur de 10 à 15 mm à l'enrobage théorique.",
        "Traitement des alcali-réactions (AAR) : L'AAR exige de l'eau. Imperméabiliser les façades et ponts par un traitement hydrophobe (silanes/siloxanes) pour couper l'alimentation en eau et stopper le gonflement.",
        "Vérification de la dépassivation aux chlorures : Prélever de la poussière de béton par perçage à différentes profondeurs (0-1 cm, 1-2 cm, 2-3 cm) et analyser la teneur en ions $Cl^-$ par titrage chimique.",
      ],
    },

    {
      id: 14,
      key: 'normes',
      title: "Normes & Références — Réparation & Diagnostic",
      icon: '📜',
      type: 'norms',
      norms: [
        { code: "NF EN 1504 (Parties 1 à 10)", description: "Produits et systèmes pour la protection et la réparation des structures en béton (Norme européenne de référence)." },
        { code: "NF P 18-459", description: "Béton — Essais pour béton durci — Mesure de la porosité, de la masse volumique et de la pénétration des ions chlorures." },
        { code: "NF EN 12504-2", description: "Essais pour béton dans les structures — Essais non destructifs — Détermination de l'indice de rebondissement (Scléromètre)." },
        { code: "NF EN 12504-4", description: "Essais pour béton dans les structures — Détermination de la vitesse de propagation du son (Ultrasons)." },
        { code: "Guide LCPC / Cerema IQOA", description: "Image Qualité des Ouvrages d'Art — Méthodologie d'inspection et de classification des ponts en France." },
      ],
    },

    {
      id: 15,
      key: 'exercises',
      title: "Exercices Diagnostic & Réhabilitation — 3 niveaux",
      icon: '✍️',
      type: 'exercises',
      exercises: [
        {
          id: 'ex_pat_1',
          number: 1,
          difficulty: 'Facile',
          text: "Un ouvrage d'art a un coefficient de carbonatation Kcarb = 3,0 mm/√an et un enrobage d'armatures c = 30 mm. Calculer l'année d'amorçage de la corrosion si l'ouvrage a été construit en 1990.",
          hint: "t_init = (c / Kcarb)². Année = 1990 + t_init.",
          answer_latex: "t_{init} = \\left(\\frac{30}{3{,}0}\\right)^2 = 10^2 = 100 \\text{ ans} \\qquad \\text{Année d'amorçage} = 1990 + 100 = 2090",
          answer_text: "Corrosion amorcée en l'an 2090 (Béton de très bonne qualité et bien enrobé).",
        },
        {
          id: 'ex_pat_2',
          number: 2,
          difficulty: 'Moyen',
          text: "Une auscultation ultrasonore sur une poutre de 0,80 m d'épaisseur donne un temps de transit Δt = 200 µs (0,000200 s). Calculer la vitesse ultrasonique V et évaluer la qualité du béton.",
          hint: "V = L / Δt.",
          answer_latex: "V = \\frac{0{,}80 \\text{ m}}{0{,}000200 \\text{ s}} = 4000 \\text{ m/s}",
          answer_text: "Vitesse V = 4 000 m/s (Béton de très bonne qualité, compact et non fissuré).",
        },
        {
          id: 'ex_pat_3',
          number: 3,
          difficulty: 'Difficile',
          text: "Pour renforcer une poutre fléchie sous-dimensionnée, on doit reprendre un moment additionnel ΔM = 100 kNm. On utilise des lames en fibre de carbone PRFC de contrainte admise f_fd = 1 500 MPa avec un bras de levier z = 0,50 m. Calculer la section de carbone A_f nécessaire.",
          hint: "A_f = ΔM / (z × f_fd).",
          answer_latex: "A_f = \\frac{100\\,000\\,000 \\text{ Nmm}}{0{,}50 \\times 1000 \\text{ mm} \\times 1500 \\text{ N/mm}^2} = \\frac{100\\,000\\,000}{750\\,000} = 133{,}33 \\text{ mm}^2",
          answer_text: "Section de carbone A_f = 133,3 mm².",
        },
      ],
    },

    {
      id: 16,
      key: 'corrections',
      title: "Corrections détaillées",
      icon: '✅',
      type: 'corrections',
      note: "Retrouvez les détails du calcul de la Loi de Fick, des diagnostics NDT et du dimensionnement des PRFC en cliquant sur 'Voir la correction'.",
    },

    {
      id: 17,
      key: 'quiz',
      title: "Quiz Diagnostic & Pathologie — 3 questions",
      icon: '🎯',
      type: 'quiz',
      questions: [
        {
          id: 'q_pat_1',
          question: "Quel test chimique visuel instantané permet de mesurer la profondeur du front de carbonatation sur une carotte de béton ?",
          options: [
            { id: 'a', text: "Le test à l'acide chlorhydrique" },
            { id: 'b', text: "Le test à la phénolphtaléine (coloration rose si pH > 9, incolore si carbonaté)" },
            { id: 'c', text: "Le test au nitrate d'argent" },
          ],
          correct: 'b',
          explanation: "Le test à la phénolphtaléine se colore en rose fuchsia sur le béton sain alcalin (pH > 9) et reste incolore sur le béton carbonaté (pH < 9).",
        },
        {
          id: 'q_pat_2',
          question: "Pourquoi la corrosion des aciers provoque-t-elle l'éclatement de l'enrobage de béton (Spalling) ?",
          options: [
            { id: 'a', text: "Car la rouille fait fondre le béton" },
            { id: 'b', text: "Car l'acier en rouillant augmente de volume (x4 à x6), créant une poussée interne qui dépasse la résistance en traction du béton" },
            { id: 'c', text: "Car l'acier devient liquide" },
          ],
          correct: 'b',
          explanation: "La formation d'oxydes de fer expansifs multiplie le volume des aciers par 4 à 6, ce qui crée des contraintes de traction internes faisant éclater l'enrobage.",
        },
        {
          id: 'q_pat_3',
          question: "Quel essai non-destructif (NDT) permet d'évaluer la profondeur d'enrobage 'c' et la position des armatures sans casser le béton ?",
          options: [
            { id: 'a', text: "Le marteau de Schmidt" },
            { id: 'b', text: "Le Pachomètre / Ferroscan (détection électromagnétique)" },
            { id: 'c', text: "L'infiltromètre à eau" },
          ],
          correct: 'b',
          explanation: "Le pachomètre (ou Ferroscan) utilise l'induction électromagnétique pour détecter sans destruction la position, la profondeur et le diamètre des aciers.",
        },
      ],
    },

    {
      id: 18,
      key: 'exam_questions',
      title: "Questions d'examen — Master Diagnostic & Maintenance",
      icon: '🎓',
      type: 'exam',
      questions: [
        "Démontrez la loi de Fick relative à la pénétration des ions chlorures dans un tablier de pont marin et expliquez le calcul de la durée de vie résiduelle.",
        "Présentez la méthodologie de dimensionnement d'un renforcement de structure par plats de carbone collés (PRFC) selon les recommandations du AFGC / Eurocode.",
      ],
    },

    {
      id: 19,
      key: 'interview_questions',
      title: "Questions d'entretien — Ingénieur Diagnostic & Réhabilitation",
      icon: '💼',
      type: 'interview',
      questions: [
        {
          question: "Qu'est-ce que l'effet d'anode macrocellulaire (anode de bord) et comment l'éviter lors de la réparation d'un poteau carbonaté ?",
          answer_hint: "Lorsqu'on répare une zone locale carbonatée avec un mortier neuf très alcalin, le contraste de potentiel avec le béton ancien périphérique crée une pile galvanique qui accélère la corrosion des aciers voisins. Pour l'éviter : appliquer un inhibiteur de corrosion global ou placer des anodes sacrificielles en zinc dans le mortier de réparation.",
        },
      ],
    },

    {
      id: 20,
      key: 'practical_case',
      title: "Cas pratique — Diagnostic et renforcement d'un plancher de parking dégradé par les chlorures",
      icon: '🔧',
      type: 'practical',
      scenario: "Dalle de parking souterrain âgée de 30 ans dégradée par les sels de déverglaçage apportés par les voitures (Désordres de nids d'abeilles et éclatement d'enrobage sur 200 m²).",
      description: "Diagnostic NDT et projet de réhabilitation.",
      resolution_latex_1: "\\text{Mesures NDT : } C_{cl} = 0{,}85\\% \\text{ (> 0,40\\% seuil critique)} \\quad | \\quad E_{corr} = -410 \\text{ mV}",
      resolution_latex_2: "\\text{Solution retenue : } \\text{Hydrodémolition sur 4 cm + Hydro-sablage aciers + Anodes zinc + Mortier R4 (NF EN 1504-3)}",
      conclusion: "Ouvrage remis à neuf pour une durée de vie prolongée de 30 ans supplémentaires.",
    },

    {
      id: 21,
      key: 'summary',
      title: "Résumé exécutif — Pathologie & Réhabilitation en 6 points",
      icon: '📋',
      type: 'summary',
      content: `### La Pathologie en 6 points clés

1. **Carbonatation** : Baisse du pH $< 9$ par le $CO_2$ $\\implies$ dépassivation et rouille ($x_c = K_{carb} \\sqrt{t}$).
2. **Expansion de la Rouille** : Volume des oxydes $\\times 4$ à $\\times 6 \\implies$ éclatement de l'enrobage (Spalling).
3. **Pénétration des Chlorures** : Corrosion par piqûres ultra-rapide au-delà du seuil de $0{,}40\\%$ du poids de ciment.
4. **Essais Non-Destructifs (NDT)** : Test phénolphtaléine, Pachomètre (enrobage), Scléromètre (dureté), Ultrasons (qualité).
5. **Renforcement Carbone (PRFC)** : Lames de carbone collées à l'époxy pour augmenter la flexion/effort tranchant.
6. **Norme NF EN 1504** : Référentiel européen obligatoire pour les mortiers et produits de réparation.`,
    },

    {
      id: 22,
      key: 'key_points',
      title: "Points clés à mémoriser — Pathologie",
      icon: '⭐',
      type: 'keypoints',
      points: [
        "Profondeur de carbonatation xc = Kcarb · √t",
        "Test phénolphtaléine : Rose = Sain (pH > 9) | Incolore = Carbonaté",
        "Expansion de la rouille : x4 à x6 le volume initial de l'acier",
        "Pachomètre : Détection électromagnétique de l'enrobage c",
        "Norme NF EN 1504 : Réparation des bétons",
      ],
    },

    {
      id: 23,
      key: 'self_assessment',
      title: "Auto-évaluation — Diagnostic & Réhabilitation",
      icon: '🏆',
      type: 'self_assessment',
      description: "Validez vos compétences en diagnostic de structure et réhabilitation :",
      objectives: [
        "Je comprends la chimie de la carbonatation et le calcul du temps de dépassivation t_init",
        "Je maîtrise l'utilisation des essais NDT (Pachomètre, Scléromètre, Ultrasons, Phénolphtaléine)",
        "Je sais dimensionner un renforcement de poutre par lames de fibre de carbone (PRFC)",
        "J'ai résolu les 3 exercices de pathologie et réhabilitation avec succès",
        "J'ai obtenu 3/3 au quiz de pathologie du béton",
      ],
    },
  ],

  quickQuiz: {
    question: "Quelle est la profondeur de carbonatation xc au bout de 16 ans pour un béton ayant Kcarb = 3,0 mm/√an ?",
    options: [
      { id: 'a', label: "A) 9 mm" },
      { id: 'b', label: "B) 12 mm" },
      { id: 'c', label: "C) 24 mm" },
    ],
    correct: 'b',
    explanation: "xc = Kcarb × √t = 3,0 × √16 = 3,0 × 4 = 12 mm.",
  },
};
