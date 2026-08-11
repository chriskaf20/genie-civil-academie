// ── Lesson: Conception & Maintenance des Ponts — Module 16 ─────────────────────
export const lesson_ponts = {
  moduleId: 16,
  slug: 'ponts',
  lessonIndex: 1,
  title: "Conception, Calcul & Inspection des Ponts",
  subtitle: "Module 16 — Conception & Maintenance des Ponts",
  level: 'Avancé',
  duration: '60h',
  diagramType: 'bridge_structure',
  tags: ['Ponts', 'Eurocode 1', 'LM1', 'Guyon-Massonnet', 'Élastomère', 'IQOA', 'Tablier', 'Piles'],

  steps: [
    {
      id: 1,
      key: 'definition',
      title: "Définition — L'Ingénierie des Ponts",
      icon: '📖',
      type: 'definition',
      fr: 'Conception & Maintenance des Ponts',
      en: 'Bridge Engineering & Maintenance',
      metier: "Pratiquée par les ingénieurs d'ouvrages d'art, experts en calcul de ponts, inspecteurs d'infrastructures et chefs de projets de génie civil. Essentielle pour franchir les obstacles (fleuves, vallées, voies ferrées, autoroutes).",
      content: `L'**ingénierie des ponts** (ouvrages d'art) est la discipline reine du génie civil qui combine la **résistance des matériaux, la dynamique des structures, la géotechnique et la durabilité**.

### La décomposition d'un pont :
1. **La superstructure (Tablier)** : Élément recevant directement le trafic (dalle, poutres, caisson, haubans, suspension) et transmettant les charges aux appuis.
2. **La infrastructure (Appuis)** :
   - **Culées** : Appuis d'extrémité assurant le raccordement avec le remblai d'accès et retenant les terres.
   - **Piles** : Appuis intermédiaires en rivière ou en brèche.
   - **Fondations** : Superficielles (semelles) ou profondes (pieux/barrettes).
3. **Les équipements** : Appareils d'appui (élastomère fretté), joints de chaussée, étanchéité, barrières de sécurité (dispositifs de retenue H1/H2/H3), corniches et évacuations d'eau.

> 💡 **Définition franchissement** : On parle de **pont** pour les franchissements généraux, de **viaduc** pour les grands franchissements terrestres multi-travées, et d'**aqueduc** pour le transport d'eau.`,
    },

    {
      id: 2,
      key: 'importance',
      title: "Pourquoi l'ingénierie des ponts est vitale",
      icon: '⚠️',
      type: 'importance',
      content: `Les ponts sont les **noeuds les plus critiques et les plus vulnérables** du réseau de transport. L'effondrement d'un pont a des conséquences humaines et économiques catastrophiques.

- **Catastrophes historiques** : Effondrement du pont de Morandi à Gênes (2018, 43 morts), du pont de Tacoma Narrows (1940, résonance aéroélastique), du pont de Mirepoix-sur-Tarn (2019, surcharge camion).
- **Vieillissement du patrimoine** : En France, 10 à 15% des 250 000 ponts sont en état détérioré (classés IQOA 3 ou 3U) et nécessitent des réparations structurelles.
- **Défis environnementaux & sismiques** : Action de la houle, affouillements des piles en rivière lors des crues, seismes (EC8-2) et choc de bateaux.

> ⚠️ **Règle d'or** : Un pont doit être conçu pour une durée de vie minimale de **100 ans** (EN 1990) avec un programme d'inspection et de maintenance préventive rigoureux.`,
    },

    {
      id: 3,
      key: 'applications',
      title: "Typologies d'ouvrages selon la portée",
      icon: '🏗️',
      type: 'applications',
      examples: [
        {
          context: "Ponts dalles en béton armé / précontraint (PSI-DA / VIPP)",
          text: "Portées courtes à moyennes ($L = 10-35\\text{ m}$). Dalle pleine ou élégie. Économique, idéal pour passages supérieurs autoroutiers.",
        },
        {
          context: "Ponts à poutres métalliques ou mixtes acier-béton (PRAD / PRS)",
          text: "Portées moyennes ($L = 30-80\\text{ m}$). Poutres IPE/PRS associées à une hourdis en béton armé via des goujons Nelson.",
        },
        {
          context: "Ponts caissons en béton précontraint (voussoirs)",
          text: "Portées grandes ($L = 50-150\\text{ m}$). Construction par encorbellements successifs au chariot de bétonnage ou à la poutre de lancement.",
        },
        {
          context: "Ponts haubanés (ex: Viaduc de Millau, Pont de Normandie)",
          text: "Portées très grandes ($L = 150-900\\text{ m}$). Le tablier est directement suspendu à des pylônes par des câbles de haute résistance (haubans).",
        },
        {
          context: "Ponts suspendus (ex: Golden Gate, Akashi Kaikyō)",
          text: "Portées exceptionnelles ($L = 500-2000\\text{ m}$). Câbles porteurs paraboliques ancrés dans des massifs de retenue aux extrémités.",
        },
        {
          context: "Ponts en arc (acier, béton ou maçonnerie)",
          text: "Franchissements d'encaissements profonds. L'arc travaille essentiellement en compression (effort axial prédominant).",
        },
      ],
    },

    {
      id: 4,
      key: 'theory',
      title: "Théorie — Eurocode 1 Partie 2 : Modèles de charges (LM1 / LM2)",
      icon: '📐',
      type: 'theory',
      diagramType: 'bridge_structure',
      content: `### 1. Découpage du tablier en voies virtuelles (EN 1991-2)

La largeur r roulable $w$ est découpée en $N_l$ voies virtuelles de largeur $w_i = 3{,}00\\text{ m}$ :

$$N_l = \\text{Int}\\left(\\frac{w}{3}\\right)$$

### 2. Modèle de Charge Modèle 1 (LM1) — Trafic général

LM1 combine des tandems de deux essieux ($TS$) et des charges uniformément réparties ($UDL$) :

| Voie | Tandem $TS_i$ (2 essieux de $Q_{ik}$) | Charge répartie $UDL_i$ ($q_{ik}$) |
|------|--------------------------------------|-----------------------------------|
| Voie 1 ($w_1 = 3\\text{ m}$) | $Q_{1k} = 300\\text{ kN}$ (2 × 150 kN) | $q_{1k} = 9{,}0\\text{ kN/m}^2$ |
| Voie 2 ($w_2 = 3\\text{ m}$) | $Q_{2k} = 200\\text{ kN}$ (2 × 100 kN) | $q_{2k} = 2{,}5\\text{ kN/m}^2$ |
| Voie 3 ($w_3 = 3\\text{ m}$) | $Q_{3k} = 100\\text{ kN}$ (2 × 50 kN) | $q_{3k} = 2{,}5\\text{ kN/m}^2$ |
| Reste de la chaussée | $0\\text{ kN}$ | $q_{rk} = 2{,}5\\text{ kN/m}^2$ |

> Les coefficients d'ajustement $\\alpha_{Qi}$ et $\\alpha_{qi}$ (ex: $\\alpha_{Q1} = 1{,}0$, $\\alpha_{q1} = 1{,}0$ en France) permettent d'adapter les charges au trafic réel.`,
    },

    {
      id: 5,
      key: 'formulas',
      title: "Formules essentielles — Calcul des Ponts",
      icon: '🔢',
      type: 'formulas',
      diagramType: 'bridge_structure',
      formulas: [
        {
          name: "Moment fléchissant maximal sous charge uniforme q (ISO-travée)",
          latex: "M_{max} = \\frac{q \\cdot L^2}{8} \\quad \\text{et} \\quad M_{max,TS} = \\frac{P \\cdot L}{4} \\quad (\\text{charge ponctuelle centrale } P)",
          description: "Superposition du tandem TS et du convoi UDL selon l'enveloppe des moments maximizes.",
        },
        {
          name: "Ligne d'influence du moment à mi-portée (x = L/2)",
          latex: "\\eta(y) = \\frac{y}{2} \\quad \\text{pour } y \\le \\frac{L}{2} \\qquad \\text{Surface ordonnée max : } \\eta_{max} = \\frac{L}{4}",
          description: "Permet de déterminer la position la plus défavorable d'un système de charges roulantes (méthode de Massonnet / Courbon).",
        },
        {
          name: "Dimensionnement des appareils d'appui en élastomère fretté",
          latex: "\\sigma_m = \\frac{N_{Ed}}{a \\cdot b} \\le \\sigma_{adm} \\quad (10-15 \\text{ MPa}) \\qquad \\gamma_{a,max} = \\frac{d_x}{T_e} \\le 0{,}7",
          description: "a, b = dimensions en plan de l'appui [mm], dx = déplacement horizontal dû au retrait/fluage/température, Te = épaisseur totale d'élastomère.",
        },
        {
          name: "Répartition transversale — Méthode de Guyon-Massonnet",
          latex: "K(y) = K_0(y) + \\mu \\cdot [K_1(y) - K_0(y)] \\qquad \\alpha = \\frac{C_D + C_G}{2 \\sqrt{B_D \\cdot B_G}} \\quad (\\text{paramètre de torsion})",
          description: "KD, KG = rigidités de flexion transversale et longitudinale, CD, CG = rigidités de torsion. Permet de distribuer le moment longitudinal M(x) entre les différentes poutres.",
        },
        {
          name: "Effort tranchant de calcul sous convoi mobile (V_Ed)",
          latex: "V_{Ed} = \\gamma_G \\cdot V_G + \\gamma_Q \\cdot \\left[ Q_{1k} \\cdot \\eta_V(x_1) + q_{1k} \\cdot \\int \\eta_V(x) dx \\right]",
          description: "La position défavorable du tandem TS pour l'effort tranchant à l'appui se situe immédiatement sur le nu de l'appui (ηV = 1,0).",
        },
        {
          name: "Fréquence propre fondamentale de flexion (Vérification dynamique)",
          latex: "f_1 = \\frac{\\pi}{2 \\cdot L^2} \\cdot \\sqrt{\\frac{E \\cdot I}{\\mu}} \\quad [\\text{Hz}]",
          description: "E·I = rigidité de flexion du tablier, µ = masse surfacique/linéique [kg/m]. Nécessaire pour éviter la résonance sous trafic ou piétons (f1 ∉ [1,6 ; 4,5] Hz pour passerelles).",
        },
      ],
    },

    {
      id: 6,
      key: 'stepbystep',
      title: "Calcul complet — Moment maximal sous charge LM1 (Travée de 24 m)",
      icon: '🔬',
      type: 'stepbystep',
      problem: "Soit un pont à une travée isostatique L = 24 m, largeur roulable 7,00 m (N_l = 2 voies virtuelles). Calculer le moment fléchissant de calcul à mi-portée sous la charge LM1 (Voie 1 : TS1 = 300 kN, UDL1 = 9,0 kN/m² ; Voie 2 : TS2 = 200 kN, UDL2 = 2,5 kN/m² ; Reste : UDLr = 2,5 kN/m²). On néglige les coefficients d'ajustement (α = 1,0).",
      steps_demo: [
        { n: 1, text: "Nombre de voies virtuelles : N_l = Int(7,00 / 3) = 2 voies de 3,00 m. Reste de chaussée = 7,00 - 6,00 = 1,00 m." },
        { n: 2, text: "Charges UDL totales réparties sur la largeur : q_UDL = (9,0 × 3,0) + (2,5 × 3,0) + (2,5 × 1,0) = 27,0 + 7,5 + 2,5 = 37,0 kN/m" },
        { n: 3, text: "Moment dû aux UDL à mi-portée : M_UDL = q_UDL × L² / 8 = 37,0 × 24² / 8 = 37,0 × 576 / 8 = 2 664 kN·m" },
        { n: 4, text: "Positionnement défavorable du Tandem TS1 (300 kN = 2 × 150 kN espacés de 1,20 m) centré sur L/2 = 12 m (essieux à 11,40 m et 12,60 m)." },
        { n: 5, text: "Moment dû au Tandem TS1 : M_TS1 = 150 × 11,40 + 150 × (24 - 12,60) = 150 × 11,40 + 150 × 11,40 = 3 420 kN·m" },
        { n: 6, text: "Positionnement du Tandem TS2 (200 kN = 2 × 100 kN) : M_TS2 = 100 × 11,40 + 100 × 11,40 = 2 280 kN·m" },
        { n: 7, text: "Moment variable total sous LM1 à ELU (γ_Q = 1,35) : M_Q,ELU = 1,35 × (2 664 + 3 420 + 2 280) = 1,35 × 8 364 = 11 291 kN·m" },
      ],
      result_latex: "M_{Q,k} = \\textbf{8 364 kN·m} \\qquad M_{Q,ELU} = \\textbf{11 291 kN·m} \\quad \\checkmark",
    },

    {
      id: 7,
      key: 'units',
      title: "Unités en Ingénierie des Ponts — Tableau de référence",
      icon: '📏',
      type: 'units',
      table: [
        { grandeur: "Moment de flexion M", si: "MN·m ou kN·m", imperial: "kip·ft", conversion: "1 MN·m = 1000 kN·m = 737,6 kip·ft" },
        { grandeur: "Effort tranchant V / Réaction R", si: "MN ou kN", imperial: "kips", conversion: "1 MN = 1000 kN = 224,8 kips" },
        { grandeur: "Charge sur essieu TS", si: "kN (ex: 300 kN = 30 tonnes)", imperial: "kips", conversion: "100 kN ≈ 10 tonnes" },
        { grandeur: "Charge surfacique UDL", si: "kPa ou kN/m²", imperial: "ksf / psf", conversion: "1 kN/m² = 0,102 t/m²" },
        { grandeur: "Déplacement horizontal dx", si: "mm", imperial: "inches", conversion: "1 mm = 0,0394 in" },
        { grandeur: "Fréquence propre f1", si: "Hz (s⁻¹)", imperial: "cycles/sec", conversion: "1 Hz = 1 cycle par seconde" },
        { grandeur: "Contrainte dans les haubans / armatures", si: "MPa (N/mm²)", imperial: "ksi", conversion: "1860 MPa (acier THP pour précontrainte)" },
      ],
      note: "⚠️ ATTENTION : Les moments dans les tabliers de ponts atteignent couramment plusieurs dizaines de MN·m. Travailler en MN et mètres évite les erreurs d'exposants.",
    },

    {
      id: 8,
      key: 'hypotheses',
      title: "Hypothèses & conditions de validité",
      icon: '📋',
      type: 'hypotheses',
      items: [
        { type: 'info', text: "Le modèle LM1 de l'Eurocode 1-2 est un modèle enveloppe conçu pour couvrir la majorité des convois réels circulant en Europe (hors convois exceptionnels régis par les modèles particuliers)." },
        { type: 'info', text: "La méthode de Guyon-Massonnet suppose un comportement élastique linéaire du tablier et une section transversale constante." },
        { type: 'warning', text: "ATTENTION : Les effets de la température (gradient thermique linéaire de ±15°C entre la fibre sup et inf selon EC1-1-5) génèrent des moments très importants sur les ponts encastrés ou continus." },
        { type: 'warning', text: "Ne jamais négliger le choc de véhicule sur pile (force équivalente de 1 000 kN à 2 000 kN selon EC1-1-7) ou le choc d'un bateau sur pile en rivière." },
        { type: 'tip', text: "Règle de pré-dimensionnement des dalles béton armé (PSI-DA) : Épaisseur de dalle h ≈ L / 20 à L / 22 pour une travée unique, h ≈ L / 25 à L / 28 pour une dalle continue." },
        { type: 'warning', text: "Appareils d'appui en élastomère : Vérifier impérativement la condition de non-cheminement (distorsion maximale γa ≤ 0,7) et la contrainte minimale sous sollicitations quasi-permanentes pour éviter le décollement." },
      ],
    },

    {
      id: 9,
      key: 'simple_examples',
      title: "Exemples guidés — Calculs d'ouvrages d'art",
      icon: '✏️',
      type: 'examples_simple',
      examples: [
        {
          title: "Exemple 1 : Pré-dimensionnement de la hauteur d'un pont bipoutre mixte",
          given: "Pont bipoutre mixte acier-béton de portée L = 45 m",
          find: "Hauteur de la poutre métallique H_acier et hauteur totale du tablier H_tot",
          solution_latex: "H_{acier} \\approx \\frac{L}{25} = \\frac{45}{25} = 1{,}80 \\text{ m} \\qquad H_{tot} \\approx \\frac{L}{20} = \\frac{45}{20} = 2{,}25 \\text{ m}",
          result: "Poutre PRS acier de hauteur 1,80 m avec hourdis béton de 25 cm d'épaisseur (Hauteur totale 2,05 à 2,25 m).",
        },
        {
          title: "Exemple 2 : Calcul de la distorsion d'un appareil d'appui en élastomère",
          given: "Déplacement horizontal de calcul (retrait + fluage + thermie) d_x = 35 mm. Épaisseur totale d'élastomère T_e = 60 mm (6 feuillets de 10 mm).",
          find: "Distorsion γ_a et vérification du critère EN 1337-3 (γ_a ≤ 0,70)",
          solution_latex: "\\gamma_a = \\frac{d_x}{T_e} = \\frac{35}{60} = 0{,}583 \\le 0{,}70 \\quad \\checkmark",
          result: "γ_a = 0,583 ≤ 0,70 → Appareil d'appui conforme en distorsion.",
        },
        {
          title: "Exemple 3 : Fréquence propre d'une passerelle piétonne",
          given: "Passerelle métallique de portée L = 30 m, E·I = 1,2 × 10⁸ N·m², masse surfacique µ = 450 kg/m",
          find: "Fréquence propre fondamentale f1 et risque de résonance piétonne (1,6 à 2,4 Hz)",
          solution_latex: "f_1 = \\frac{\\pi}{2 \\times 30^2} \\cdot \\sqrt{\\frac{1{,}2 \\times 10^8}{450}} = \\frac{3{,}1416}{1800} \\cdot \\sqrt{266\\,667} = 0{,}001745 \\times 516{,}4 = 0{,}90 \\text{ Hz}",
          result: "f1 = 0,90 Hz < 1,60 Hz → Pas de risque de résonance directe en piétinement vertical (f1 ∉ [1,6 ; 2,4] Hz), mais vérifier la seconde harmonique (1,80 Hz).",
        },
      ],
    },

    {
      id: 10,
      key: 'real_examples',
      title: "Exemple réel — Inspection & Diagnostic IQOA",
      icon: '🏢',
      type: 'examples_real',
      diagramType: 'bridge_structure',
      examples: [
        {
          context: "Inspection détaillée périodique — Viaduc en béton armé (Construit en 1972)",
          scenario: "Relevé sur le tablier : Fissures transversales avec entraxe 15 cm en sous-face de dalle, éclats de béton avec mise à nu d'armatures corrodées (foisonnement de la rouille). Mesure de carbonatation : profondeur de carbonatation = 45 mm (enrobage mesuré au pacomètre = 30 mm).",
          decomposition_latex: "\\text{Classement IQOA : } \\textbf{Classe 3} \\quad (\\text{Structure altérée nécessite réparation sans urgence immédiate})",
          lesson: "La carbonatation a atteint les armatures (45 mm > 30 mm) → dépassivation de l'acier. Travaux prescrits : Purge des bétons dégradés, sablage/passivation des aciers, application d'un mortier de réparation R4 et protection cathodique par anode sacrificielle.",
        },
      ],
    },

    {
      id: 11,
      key: 'diagrams',
      title: "Schéma d'un pont à poutres — Éléments constitutifs",
      icon: '📊',
      type: 'interactive_diagram',
      diagramType: 'bridge_structure',
      description: "Visualisez la coupe longitudinale et transversale d'un pont à poutres mixtes : tablier, hourdis béton, poutres métalliques, appareils d'appui, bossages, chevêtre, fût de pile et fondations sur pieux.",
      diagram_description: [
        "Coupe longitudinale montrant la travée, les culées, les piles et la ligne d'eau",
        "Détail de l'appui : Neoprène fretté, bossage supérieur/inférieur, joint de chaussée",
        "Diagramme des lignes d'influence du moment fléchissant à mi-portée",
      ],
    },

    {
      id: 12,
      key: 'mistakes',
      title: "Erreurs fatales en Ingénierie des Ponts",
      icon: '⛔',
      type: 'mistakes',
      items: [
        {
          mistake: "Négliger l'affouillement des piles en rivière",
          trap: "Sous-estimer la profondeur de la fosse d'affouillement créée par les crues autour des fondations de piles",
          fix: "Réaliser une étude hydraulique 2D/3D et ancrer les fondations (pieux) bien en dessous de la cote d'affouillement maximale calculée. Protéger par des enrochements fressés si nécessaire.",
        },
        {
          mistake: "Oublier les effets de second ordre et le fluage du béton précontraint",
          trap: "Calculer les pertes de précontrainte sans intégrer la relaxation de l'acier et le fluage à long terme (100 ans)",
          fix: "Calculer rigoureusement les pertes différées (fluage, retrait, relaxation) selon l'EC2-1-1. Le fluage multiplie les déformations instantanées par un facteur 2,5 à 3,0.",
        },
        {
          mistake: "Mauvaise disposition des appareils d'appui (Points fixes bloqués)",
          trap: "Bloquer les déplacements horizontaux sur plusieurs appuis consécutifs sans absorber la dilatation thermique",
          fix: "Définir clairement un seul point fixe longitudinal par tablier continu. Tous les autres appuis doivent être glissants (téflon/inox) ou élastiques pour permettre ΔL = α·L·ΔT.",
        },
        {
          mistake: "Sous-dimensionner l'étanchéité du tablier sous la chaussée",
          trap: "Appliquer un enrobé directement sur le béton sans chappe d'étanchéité continue de qualité",
          fix: "L'absence ou le perçage de la chappe d'étanchéité laisse pénétrer l'eau et les sels de déverglaçage, détruisant le béton et les armatures en moins de 15 ans.",
        },
      ],
    },

    {
      id: 13,
      key: 'tips',
      title: "Astuces de l'ingénieur d'art — Terrain & Auscultation",
      icon: '💡',
      type: 'tips',
      tips: [
        "Classification IQOA (Image Qualité des Ouvrages d'Art) : Classe 1 (bon état), Classe 2 (défauts mineurs), Classe 2E (équipement détérioré risquant d'endommager la structure), Classe 3 (structure altérée), Classe 3U (urgence structurelle).",
        "Règle de pré-dimensionnement des dalles VIPP (précontrainte) : Hauteur h ≈ L / 25. Pour un caisson précontraint de grande portée : h_appui ≈ L / 18 à L / 20 et h_clef ≈ L / 40 à L / 50.",
        "Inspection au marteau : Un son clair indique un béton sain. Un son creux/mât indique une délamination ou un éclatement interne dû à la corrosion des armatures.",
        "Joints de chaussée : Le souffle du joint (capacité de déplacement Δ) doit couvrir ΔL_thermique + ΔL_retrait + ΔL_fluage + 20 mm de marge de sécurité.",
        "Contrôle des appareils d'appui : Inspecter tous les ans le fressage latéral des bandes de néoprène. Une distorsion excessive (γa > 0,7) ou une fissure dans le caoutchouc impose un vérinage pour remplacement.",
        "Équivalence acier-béton pour section mixte : Coefficient d'équivalence n = E_acier / E_béton ≈ 6 en instantané et n ≈ 18 en long terme (intégrant le fluage).",
      ],
    },

    {
      id: 14,
      key: 'normes',
      title: "Normes & Guides de Référence — Ponts",
      icon: '📜',
      type: 'norms',
      norms: [
        { code: "Eurocode 1-2 (EN 1991-2)", description: "Actions sur les structures — Charges sur les ponts routiers, ferroviaires et piètons (LM1, LM2, LM3, LM4)." },
        { code: "Eurocode 2-2 (EN 1992-2)", description: "Calcul des structures en béton — Ponts en béton armé et béton précontraint." },
        { code: "Eurocode 3-2 (EN 1993-2)", description: "Calcul des structures en acier — Ponts métalliques et mixtes." },
        { code: "Eurocode 8-2 (EN 1998-2)", description: "Calcul des ponts en zone sismique — Isolateurs, ductilité, piles." },
        { code: "NF EN 1337 (Parties 1 à 11)", description: "Appareils d'appui pour la construction (élastomère fretté, pot, glissants)." },
        { code: "Instruction Technique IQOA (Cerema)", description: "Instruction Technique pour la Surveillance et l'Entretien des Ouvrages d'Art." },
      ],
    },

    {
      id: 15,
      key: 'exercises',
      title: "Exercices Ingénierie des Ponts — 3 niveaux",
      icon: '✍️',
      type: 'exercises',
      exercises: [
        {
          id: 'ex_pon_1',
          number: 1,
          difficulty: 'Facile',
          text: "Un pont à une travée de 18 m supporte un poids propre de tablier g = 120 kN/m. Calculez la réaction d'appui totale R_G sous charge permanente sur chaque culée.",
          hint: "Symétrie → R_G = g · L / 2.",
          answer_latex: "R_G = \\frac{120 \\times 18}{2} = 1\\,080 \\text{ kN per culée} \\quad (108 \\text{ tonnes})",
          answer_text: "RG = 1 080 kN (108 tonnes) sur chaque culée",
        },
        {
          id: 'ex_pon_2',
          number: 2,
          difficulty: 'Moyen',
          text: "Pour un appareil d'appui en élastomère fretté de dimensions a = 300 mm, b = 400 mm sous charge verticale ELU N_Ed = 1 440 kN, calculez la contrainte moyenne de compression σ_m et vérifiez le critère σ_m ≤ 15 MPa.",
          hint: "σ_m = N_Ed / (a · b) avec a et b en mètres.",
          answer_latex: "\\sigma_m = \\frac{1{,}440}{0{,}300 \\times 0{,}400} = \\frac{1{,}440}{0{,}120} = 12{,}00 \\text{ MPa} \\le 15{,}00 \\text{ MPa} \\quad \\checkmark",
          answer_text: "σ_m = 12,0 MPa ≤ 15,0 MPa → Appareil d'appui conforme en compression à l'ELU.",
        },
        {
          id: 'ex_pon_3',
          number: 3,
          difficulty: 'Difficile',
          text: "Un tablier de pont continu à 2 travées égales de 30 m est soumis au retrait/thermie générant une variation de longueur ΔL = 18 mm. Calculer l'effort horizontal H transmis à la pile centrale par un appareil d'appui fixe élastique de raideur K_h = 2 500 kN/m.",
          hint: "H = K_h · ΔL (avec ΔL en mètres).",
          answer_latex: "H = 2\\,500 \\text{ kN/m} \\times 0{,}018 \\text{ m} = 45 \\text{ kN}",
          answer_text: "Effort horizontal résiduel H = 45 kN transmis en tête de pile centrale.",
        },
      ],
    },

    {
      id: 16,
      key: 'corrections',
      title: "Corrections détaillées",
      icon: '✅',
      type: 'corrections',
      note: "Retrouvez le détail complet des démonstrations et des vérifications Eurocodes en cliquant sur 'Voir la correction'.",
    },

    {
      id: 17,
      key: 'quiz',
      title: "Quiz Ingénierie des Ponts — 3 questions",
      icon: '🎯',
      type: 'quiz',
      questions: [
        {
          id: 'q_pon_1',
          question: "Dans l'Eurocode 1-2 (LM1), quel est le poids total d’un Tandem TS sur la voie 1 ?",
          options: [
            { id: 'a', text: "100 kN (10 tonnes)" },
            { id: 'b', text: "300 kN (30 tonnes — 2 essieux de 150 kN)" },
            { id: 'c', text: "600 kN (60 tonnes)" },
            { id: 'd', text: "1 000 kN (100 tonnes)" },
          ],
          correct: 'b',
          explanation: "Le Tandem TS1 de la voie 1 comprend 2 essieux de 150 kN chacun, soit un poids total de 300 kN (30 tonnes). Le Tandem TS2 fait 200 kN et TS3 fait 100 kN.",
        },
        {
          id: 'q_pon_2',
          question: "Que signifie le classement IQOA 'Classe 3' pour un pont ?",
          options: [
            { id: 'a', text: "Ouvrage en parfait état neuf" },
            { id: 'b', text: "Ouvrage dont la structure est altérée et nécessite des travaux de réparation sans urgence immédiate" },
            { id: 'c', text: "Ouvrage en ruine nécessitant une fermeture immédiate (Urgence 3U)" },
            { id: 'd', text: "Seuls les équipements (garde-corps) sont endommagés" },
          ],
          correct: 'b',
          explanation: "IQOA Classe 3 signifie que la structure porteuse présente des dégradations ou altérations significatives nécessitant des travaux de réparation, mais sans péril imminent (contrairement à la classe 3U).",
        },
        {
          id: 'q_pon_3',
          question: "Quel composant d'un pont absorbe les variations de longueur dues à la température tout en assurant la continuité du roulement ?",
          options: [
            { id: 'a', text: "Le bossage d'appui" },
            { id: 'b', text: "Le joint de chaussée" },
            { id: 'c', text: "Le chevêtre" },
            { id: 'd', text: "Le garde-corps" },
          ],
          correct: 'b',
          explanation: "Le joint de chaussée (ou d'étanchéité) est disposé au droit des coupures du tablier pour permettre la libre dilatation thermique et les mouvements de retrait/fluage tout en garantissant le passage fluide des véhicules.",
        },
      ],
    },

    {
      id: 18,
      key: 'exam_questions',
      title: "Questions d'examen — Niveau Master Ouvrages d'Art",
      icon: '🎓',
      type: 'exam',
      questions: [
        "Démontrez la méthode de distribution transversale des efforts de Guyon-Massonnet pour un pont à poutres multiples. Expliquez le rôle des paramètres d'entretoisement α et θ.",
        "Présentez la méthode de construction par encorbellements successifs d'un pont en béton précontraint. Détaillez le bilan des pertes de précontrainte (instantanées et différées) lors du clavage central.",
        "Expliquez le phénomène d'affouillement autour d'une pile de pont en rivière. Quels sont les critères de dimensionnement des pieux de fondation soumis à l'affouillement général et local ?",
        "Pour un pont mixte acier-béton de 50 m de portée, décrivez le dimensionnement des connecteurs à goujons soudés (connecteurs Nelson) sous l'effort de cisaillement longitudinal V_Ed.",
      ],
    },

    {
      id: 19,
      key: 'interview_questions',
      title: "Questions d'entretien — Ingénieur Ouvrages d'Art",
      icon: '💼',
      type: 'interview',
      questions: [
        {
          question: "Comment différencieriez-vous une fissure de retrait d'une fissure d'effort tranchant sur une poutre en béton armé de pont ?",
          answer_hint: "Retrait : Fissures verticales réparties régulièrement sur toute la hauteur, peu ouvertes (0,1 mm), apparaissant dès le jeune âge. Effort tranchant : Fissures inclinées à 45° près des appuis, partant du bas et remontant vers la zone comprimée, s'ouvrant sous l'effet des charges d'exploitation. Danger structurel immédiat si ouverture > 0,3 mm.",
        },
        {
          question: "Lors d'une inspection, vous constatez qu'un appareil d'appui en élastomère s'est déplacé latéralement de 40 mm (cheminement). Que préconisez-vous ?",
          answer_hint: "Le cheminement indique un défaut de pincement ou un manque de pression verticale minimale. Préconiser un vérinage du tablier sous contrôle d'altimétrie, le remplacement de l'appareil d'appui et la pose de butées anti-cheminement métalliques ancrées dans le bossage.",
        },
        {
          question: "Quel est le rôle du système d'étanchéité sous chaussée sur un pont en béton ?",
          answer_hint: "L'étanchéité (feuille bitumineuse ou résine) empêche la pénétration de l'eau et des chlorures (sels de déverglaçage) dans le béton. Sans étanchéité, l'eau provoque la dépassivation des armatures par carbonatation/chlorures, entraînant la corrosion et l'éclatement du béton.",
        },
      ],
    },

    {
      id: 20,
      key: 'practical_case',
      title: "Cas pratique — Dimensionnement d'un pont rail / route",
      icon: '🔧',
      type: 'practical',
      scenario: "Étude de cas — Pont à poutres précontraintes (PRAD) de 28 m de portée",
      description: `**Mise en situation** : Bureau d'études d'ouvrages d'art. Conception d'un pont routier à 4 poutres précontraintes par post-tension. Portée L = 28 m. Largeur roulable = 8,50 m (N_l = 2). Poids propre tablier G = 160 kN/m. Surcharges LM1.`,
      resolution_latex_1: "M_G = \\frac{160 \\times 28^2}{8} = 15\\,680 \\text{ kN·m} \\qquad M_{Q,k} = 9\\,850 \\text{ kN·m (LM1)}",
      resolution_latex_2: "M_{ELU} = 1{,}35 \\times 15\\,680 + 1{,}35 \\times 9\\,850 = 21\\,168 + 13\\,298 = 34\\,466 \\text{ kN·m}",
      resolution_latex_3: "\\text{Précontrainte par poutre (4 poutres) : } P_{utile} = 4\\,200 \\text{ kN/poutre (4 câbles 19T15S en acier THP f_pk=1860 MPa)}",
      conclusion: "Vérification sous ELU et ELS (absence de traction en fibre inférieure sous combinaison fréquente). Flèche à long terme f = 18 mm < L/800 = 35 mm ✓. 4 appareils d'appui élastomère 400×500 mm retenus.",
    },

    {
      id: 21,
      key: 'summary',
      title: "Résumé exécutif — Ingénierie des Ponts en 6 points",
      icon: '📋',
      type: 'summary',
      content: `### L'Ingénierie des Ponts en 6 fondamentaux

1. **Anatomie** : Superstructure (tablier/poutres/caisson) + Infrastructure (culées/piles/pieux) + Équipements (appuis/joints/étanchéité).
2. **Charges Eurocode 1-2** : Modèle LM1 = Tandems $TS_i$ (300/200/100 kN) + Charges réparties $UDL_i$ (9,0 / 2,5 kN/m²).
3. **Répartition transversale** : Méthode de Guyon-Massonnet pour distribuer le moment $M(x)$ entre les poutres.
4. **Appareils d'appui** : Élastomère fretté dimensionné en compression ($\\sigma_m \\le 15\\text{ MPa}$) et distorsion ($\\gamma_a \\le 0{,}7$).
5. **Durabilité (100 ans)** : Étanchéité continue, enrobage des aciers $\\ge 40\\text{ mm}$, maîtrise de la fissuration.
6. **Surveillance IQOA** : Inspections détaillées périodiques (Classes 1 à 3U) pour la gestion patrimoniale.`,
    },

    {
      id: 22,
      key: 'key_points',
      title: "Points clés à mémoriser — Ponts",
      icon: '⭐',
      type: 'keypoints',
      points: [
        "Durée de vie de conception d'un pont = 100 ans minimum selon EN 1990",
        "Eurocode 1-2 LM1 : Voie 1 (TS = 300 kN, UDL = 9 kN/m²) | Voie 2 (TS = 200 kN, UDL = 2,5 kN/m²)",
        "Dalle béton armé PSI-DA : h ≈ L / 20 à L / 22 | Bipoutre mixte : h ≈ L / 20",
        "Appareil d'appui néoprène fretté : Distorsion γa = dx / Te ≤ 0,70",
        "Guyon-Massonnet : distribue les efforts longitudinaux transversalement selon la rigidité",
        "Carbonatation + Chlorures = ennemis n°1 des structures en béton armé/précontraint",
        "Classement IQOA 3 = structure porteuse dégradée nécessitant des travaux programmés",
      ],
    },

    {
      id: 23,
      key: 'self_assessment',
      title: "Auto-évaluation — Ingénierie des Ponts",
      icon: '🏆',
      type: 'self_assessment',
      description: "Validez vos compétences en conception et maintenance des ponts :",
      objectives: [
        "Je connais les typologies d'ouvrages d'art et leurs portées économiques",
        "Je sais appliquer le modèle de charge LM1 de l'Eurocode 1-2 (Tandems TS et UDL)",
        "Je dimensionne un appareil d'appui en élastomère fretté (compression et distorsion)",
        "Je comprends la méthode de répartition transversale de Guyon-Massonnet",
        "Je connais les critères de surveillance et de classement IQOA (Classes 1 à 3U)",
        "Je comprends le rôle critique de la chappe d'étanchéité et du drainage",
        "J'ai résolu les 3 exercices d'ouvrages d'art avec succès",
        "J'ai obtenu 3/3 au quiz d'ingénierie des ponts",
      ],
    },
  ],

  quickQuiz: {
    question: "Dans l'Eurocode 1-2 (LM1), quel est le poids total d'un Tandem TS sur la Voie 1 d'un pont routier ?",
    options: [
      { id: 'a', label: "A) 100 kN (10 tonnes)" },
      { id: 'b', label: "B) 300 kN (30 tonnes — 2 essieux de 150 kN)" },
      { id: 'c', label: "C) 600 kN (60 tonnes)" },
    ],
    correct: 'b',
    explanation: "Le Tandem TS1 de la voie 1 comprend 2 essieux de 150 kN chacun, soit un poids total de 300 kN (30 tonnes).",
  },
};
