// ── Lesson: Science & Technologie des Matériaux — Module 23 ────────────────────
export const lesson_materiaux = {
  moduleId: 23,
  slug: 'materiaux',
  lessonIndex: 1,
  title: "Science, Propriétés & Durabilité des Matériaux de Construction",
  subtitle: "Module 23 — Science & Technologie des Matériaux",
  level: 'Intermédiaire',
  duration: '40h',
  diagramType: 'bridge_structure',
  tags: ['Matériaux', 'Béton', 'Dreux-Gorisse', 'Acier', 'S355', 'Bois', 'BAP', 'Bas Carbone', 'Durabilité'],

  steps: [
    {
      id: 1,
      key: 'definition',
      title: "Définition — La Science des Matériaux de Construction",
      icon: '📖',
      type: 'definition',
      fr: 'Science & Technologie des Matériaux de Construction',
      en: 'Materials Science & Construction Engineering',
      metier: "Pratiquée par les ingénieurs matériaux, responsables de laboratoires d'essais (LCPC/Cerema), laborantins béton et ingénieurs R&D en éco-matériaux.",
      content: `La **science des matériaux de construction** étudie les relations entre la **structure atomique/microscopique, les propriétés physiques/mécaniques et la durabilité** des matériaux utilisés en génie civil.

### Les 4 grandes familles de matériaux de construction :
1. **Matériaux minéraux & liants hydrauliques** : Béton de ciment, mortiers, plâtre, chaux, roches naturelles, céramiques.
2. **Matériaux métalliques** : Aciers de construction (S235 à S460), aciers pour béton armé (B500B/C), aciers de précontrainte (Y1860), aluminium.
3. **Matériaux organiques & biosourcés** : Bois massif et lamellé-collé (GL24/GL28), bambou, paille, chanvre, polymères et composites (FRP).
4. **Matériaux composites & innovants** : Bétons Fibrés à Ultra-Hautes Performances (BFUP $f_{ck} > 150\\text{ MPa}$), géopolymères et bétons bas carbone (CEM III/C, CEM VI).

> 💡 **Principe fondamental** : La résistance mécanique et la durabilité du béton sont principalement régies par le **rapport Eau/Ciment ($E/C$)**. Réduire $E/C$ de $0{,}60$ à $0{,}40$ fait doubler la résistance à la compression !`,
    },

    {
      id: 2,
      key: 'importance',
      title: "Pourquoi la maîtrise des matériaux est cruciale",
      icon: '⚠️',
      type: 'importance',
      content: `Le choix du matériau conditionne la **durabilité sur 50 à 100 ans** et l'**empreinte carbone du bâtiment** (le ciment représente 7% des émissions mondiales de $\\text{CO}_2$).

- **Pathologies coûteuses** : Carbonatation des bétons, alcali-réaction (AAR), attaque par les ions chlorures (bords de mer) ou les sulfates (eaux souterraines).
- **Sécurité incendie** : Comportement au feu des structures (tenue de l'acier qui perd 50% de sa rigidité à 600°C vs carbonisation protectrice du bois à $0{,}7\\text{ mm/min}$).
- **Décarbonation (Loi RE2020)** : Transition vers les ciments bas carbone (laitier de haut fourneau, argiles calcinées LC3) et les structures mixtes bois-béton.

> ⚠️ **Règle d'or** : "Un bon béton est un béton compact avec un rapport $E/C \\le 0{,}45$ et un enrobage d'armatures respecté ($c_{min} \\ge 30-50\\text{ mm}$)."`,
    },

    {
      id: 3,
      key: 'applications',
      title: "Applications terrain — Matériaux et essais de laboratoire",
      icon: '🏗️',
      type: 'applications',
      examples: [
        {
          context: "Formulation de Béton de Ciment (Méthode Dreux-Gorisse)",
          text: "Optimisation de la courbe granulométrique (Sable 0/4, Gravillon 4/10, Grave 10/20) et dosage en eau/superplastifiant pour obtenir la classe de consistance (S3/S4) et de résistance (C30/37).",
        },
        {
          context: "Bétons Autoplaçants (BAP) & BFUP",
          text: "Bétons fluides se mettant en œuvre sans vibration mécanique (étalement au cône d'Abrams $SF > 650\\text{ mm}$). Utilisés pour les ferraillages très denses et parements architecturaux.",
        },
        {
          context: "Essais de traction & résilience sur Aciers (NF EN ISO 6892-1)",
          text: "Détermination de la limite d'élasticité $f_y$, de la résistance $f_u$ et de l'allongement à rupture $A_{gt}$. Essai de résilience Charpy $KV$ à $-20^\\circ\\text{C}$ pour les ponts métalliques.",
        },
        {
          context: "Structures en Bois Lamellé-Collé (GL24h / GL28h)",
          text: "Lamelles de bois purgées de défauts et collées sous pression. Permet des portées exceptionnelles de $30\\text{ à } 100\\text{ m}$ pour gymnases et halles d'exposition.",
        },
        {
          context: "Bétons Bas Carbone (Ciments CEM III & CEM VI)",
          text: "Remplacement du clinker par du laitier moulu de haut-fourneau (jusqu'à 70%) ou des cendres volantes, réduisant l'empreinte $\\text{CO}_2$ de 60% par m³.",
        },
        {
          context: "Auscultation non destructive des bétons (Scléromètre & Ultrasons)",
          text: "Estimation de la résistance in situ du béton par l'indice de rebondissement au scléromètre d'Schmidt et la vitesse de propagation du son (VPU $> 4000\\text{ m/s}$).",
        },
      ],
    },

    {
      id: 4,
      key: 'theory',
      title: "Théorie — Hydratation du Ciment & Formulation de Dreux-Gorisse",
      icon: '📐',
      type: 'theory',
      diagramType: 'bridge_structure',
      content: `### 1. La réaction d'hydratation du Ciment Portland (CEM I)

Le ciment est composé de silicate tricalcique ($C_3S$) et dicalcique ($C_2S$). Lors de l'ajout d'eau :

$$C_3S + H_2O \\longrightarrow C-S-H + Ca(OH)_2 \\quad (\\text{Portlandite})$$

- **C-S-H (Silicates de Calcium Hydratés)** : Gel fibreux assurant la résistance mécanique et la cohésion du béton.
- **$\text{Ca(OH)}_2$ (Portlandite)** : Base forte ($pH \approx 12{,}5$) qui crée un milieu alcalin **passivant les aciers armatures** contre la rouille.

### 2. Formulation du béton selon Dreux-Gorisse

Pour 1 m³ de béton frais, le volume absolu des composants doit égaler 1 000 Litres :

$$V_{ciment} + V_{eau} + V_{sable} + V_{gravillon} + V_{air} = 1000 \\text{ Litres}$$

- **Rapport E/C (Eau/Ciment)** : $E/C = 0{,}40\\text{ à } 0{,}55$.
- **Résistance prévisible à 28 jours (Formule de Féret / Bolomey)** :

$$f_{cm28} = K_B \\cdot f_{ce} \\cdot \\left( \\frac{C}{E + A} - 0{,}5 \\right)$$

- $f_{ce}$ = classe vraie du ciment à 28 jours (ex: 42,5 ou 52,5 MPa)
- $K_B$ = coefficient granulaire (0,45 à 0,60 selon la qualité et la propreté des granulats).`,
    },

    {
      id: 5,
      key: 'formulas',
      title: "Formules essentielles — Propriétés Mécaniques & Durabilité",
      icon: '🔢',
      type: 'formulas',
      diagramType: 'bridge_structure',
      formulas: [
        {
          name: "Formule de Bolomey (Résistance du béton à 28 jours)",
          latex: "f_{cm28} = K_B \\cdot f_{ce} \\cdot \\left( \\frac{C}{E} - 0{,}5 \\right) \\quad [\\text{MPa}]",
          description: "C = dosage en ciment [kg/m³], E = dosage en eau efficace [L/m³], fce = classe vraie du ciment, KB = coef granulaire (0,50 pour granulats courants).",
        },
        {
          name: "Module de déformation longitudinale du béton (Ecm)",
          latex: "E_{cm} = 22 \\cdot \\left( \\frac{f_{cm}}{10} \\right)^{0{,}3} \\quad [\\text{GPa}]",
          description: "fcm = fck + 8 MPa. Pour un béton C30/37 : fcm = 38 MPa → Ecm ≈ 33 GPa (33 000 MPa).",
        },
        {
          name: "Module d'élasticité & Ductilité de l'Acier (S355 / B500)",
          latex: "E_{acier} = 210\\,000 \\text{ MPa} \\qquad \\varepsilon_{yd} = \\frac{f_{yd}}{E_s} = \\frac{435}{210\\,000} = 2{,}07 \\times 10^{-3} \\quad (0{,}207\\%)",
          description: "fyd = fyk / 1,15. fyk = 500 MPa (B500B). Allongement sous charge maximale Agt ≥ 5% (Classe B) ou ≥ 7,5% (Classe C hautement ductile).",
        },
        {
          name: "Loi de fente de carbonatation du béton (Profondeur x_c)",
          latex: "x_c(t) = K_{carb} \\cdot \\sqrt{t} \\quad [\\text{mm}] \\qquad K_{carb} \\propto \\frac{\\sqrt{CO_2}}{E/C}",
          description: "t = temps en années. Si Kcarb = 4 mm/√an → xc(50 ans) = 4 × √50 = 28,3 mm d'enrobage carbonaté.",
        },
        {
          name: "Résistance au feu du bois (Vitesse de carbonisation β0)",
          latex: "d_{char} = \\beta_0 \\cdot t_{feu} \\quad [\\text{mm}] \\qquad \\beta_0 \\approx 0{,}65 \\text{ mm/min (Résineux)}",
          description: "La couche charbonnée isolante protège le cœur du bois qui conserve 100% de sa capacité portante sous la zone carbonisée.",
        },
        {
          name: "Masse volumique des matériaux courants",
          latex: "\\rho_{béton\\,armé} = 2500 \\text{ kg/m}^3 \\quad \\rho_{acier} = 7850 \\text{ kg/m}^3 \\quad \\rho_{bois} = 450-600 \\text{ kg/m}^3",
          description: "Masse volumique fondamentale pour les calculs de charges permanentes G.",
        },
      ],
    },

    {
      id: 6,
      key: 'stepbystep',
      title: "Calcul complet — Formulation d'un béton C30/37 (Féret/Bolomey)",
      icon: '🔬',
      type: 'stepbystep',
      problem: "On souhaite formuler un béton C30/37 (fck = 30 MPa, soit fcm28 = 38 MPa) pour un voile extérieur exposé à la pluie (Classe XC4, E/C max = 0,50). On utilise un ciment CEM II/A 42,5 N (classe vraie fce = 48 MPa) et des granulats roulés de bonne qualité (KB = 0,55). Déterminer : 1) Le rapport C/E nécessaire par la formule de Bolomey. 2) Le dosage en ciment C si E = 175 L/m³. 3) Vérifier la conformité à la norme NF EN 206 (C min = 300 kg/m³ et E/C ≤ 0,50).",
      steps_demo: [
        { n: 1, text: "Formule de Bolomey : fcm28 = KB × fce × (C/E - 0,50)" },
        { n: 2, text: "Application numérique : 38 = 0,55 × 48 × (C/E - 0,50) = 26,4 × (C/E - 0,50)" },
        { n: 3, text: "Calcul du rapport C/E : (C/E - 0,50) = 38 / 26,4 = 1,439 → C/E = 1,439 + 0,50 = 1,939" },
        { n: 4, text: "Calcul du rapport E/C inverse : E/C = 1 / 1,939 = 0,515 ≈ 0,51" },
        { n: 5, text: "Ajustement de sécurité pour respecter le critère NF EN 206 (E/C ≤ 0,50 en classe XC4) : Retenir E/C = 0,48" },
        { n: 6, text: "Calcul du dosage en ciment C avec E = 175 L/m³ : C = E / (E/C) = 175 / 0,48 = 364,6 kg/m³ → Retenir C = 365 kg/m³" },
        { n: 7, text: "Vérification NF EN 206 : C = 365 kg/m³ ≥ 300 kg/m³ ✓ | E/C = 0,48 ≤ 0,50 ✓ | fcm28 calculé = 0,55 × 48 × (1,939 - 0,50) = 40,6 MPa ≥ 38 MPa ✓" },
      ],
      result_latex: "C/E = 1{,}94 \\quad \\Rightarrow \\quad E/C_{retenu} = \\textbf{0{,}48} \\qquad C = \\textbf{365 kg/m}^3 \\quad (f_{cm28} = 40{,}6 \\text{ MPa}) \\quad \\checkmark",
    },

    {
      id: 7,
      key: 'units',
      title: "Unités en Science des Matériaux — Tableau de référence",
      icon: '📏',
      type: 'units',
      table: [
        { grandeur: "Résistance à la compression fck", si: "MPa (N/mm²)", imperial: "psi", conversion: "1 MPa = 10 bar = 145,04 psi (C30/37 = 4350 psi)" },
        { grandeur: "Module d'élasticité E", si: "GPa ou MPa", imperial: "ksi / psi", conversion: "1 GPa = 1000 MPa = 145 000 psi (Acier = 210 GPa)" },
        { grandeur: "Masse volumique ρ", si: "kg/m³ ou t/m³", imperial: "pcf (lbs/ft³)", conversion: "1 t/m³ = 1000 kg/m³ = 62,43 pcf" },
        { grandeur: "Affaissement au cône (Slump)", si: "mm (Classes S1 à S5)", imperial: "inches", conversion: "S3 = 100-150 mm | S4 = 160-210 mm" },
        { grandeur: "Étalement BAP (Flow)", si: "mm (Classes SF1 à SF3)", imperial: "inches", conversion: "SF2 = 660-750 mm (Béton Autoplaçant)" },
        { grandeur: "Énergie d'impact Charpy KV", si: "Joules [J]", imperial: "ft-lbs", conversion: "27 J à -20°C pour acier S355 J2" },
        { grandeur: "Conductivité thermique λ", si: "W/(m·K)", imperial: "Btu/(h·ft·°F)", conversion: "Béton = 1,65 | Bois = 0,13 | Laine minérale = 0,035" },
      ],
      note: "⚠️ ATTENTION : La désignation d'un béton C30/37 signifie : $f_{ck,cyl} = 30\\text{ MPa}$ sur cylindre $\\varnothing 15\\times 30\\text{ cm}$ et $f_{ck,cube} = 37\\text{ MPa}$ sur cube de $15\\text{ cm}$.",
    },

    {
      id: 8,
      key: 'hypotheses',
      title: "Hypothèses & conditions de validité",
      icon: '📋',
      type: 'hypotheses',
      items: [
        { type: 'info', text: "La formule de Bolomey/Féret s'applique pour des bétons plastiques à fluides correctement serrés (sans macrovides d'air accidentel)." },
        { type: 'info', text: "Les aciers de construction (S235, S275, S355, S460) présentent un comportement élasto-plastique parfait avec un plateau de plastification net avant écrouissage." },
        { type: 'warning', text: "ATTENTION : Un ajout d'eau sauvage sur chantier de 10 Litres/m³ pour 'faciliter la mise en œuvre' fait chuter la résistance du béton de 3 à 5 MPa et augmente le retrait de 20% !" },
        { type: 'warning', text: "Les aciers écrouis à froid ont une ductilité réduite (Classe A). Pour les zones sismiques (Eurocode 8), utiliser EXCLUSIVEMENT des aciers de Classe B ou C (B500B / B500C)." },
        { type: 'tip', text: "Adjuvants superplastifiants (Haut Réducteur d'Eau) : Permettent de réduire le dosage en eau de 20 à 30% tout en conservant une très haute fluidité (S4/S5)." },
        { type: 'warning', text: "Alcali-Réaction (AAR) : Réaction chimique destructive entre les alcalins du ciment ($Na_2O_{éq}$) et la silice réactive de certains granulats en présence d'eau. Utiliser des granulats non réactifs (PR) ou ciments ES." },
      ],
    },

    {
      id: 9,
      key: 'simple_examples',
      title: "Exemples guidés — Calculs de matériaux",
      icon: '✏️',
      type: 'examples_simple',
      examples: [
        {
          title: "Exemple 1 : Calcul de la quantité d'eau efficace E pour E/C = 0,45",
          given: "Cimentier préconisant un dosage C = 380 kg/m³ en classe de résistance C35/45",
          find: "Quantité d'eau d'gâchage E nécessaire (en L/m³)",
          solution_latex: "E = C \\times (E/C) = 380 \\times 0{,}45 = 171{,}0 \\text{ Litres/m}^3",
          result: "E = 171 L/m³ (Compenser l'eau d'absorption des granulats selon leur taux d'humidité).",
        },
        {
          title: "Exemple 2 : Calcul de la vitesse de carbonatisation sur 100 ans",
          given: "Béton de structure avec coefficient K_carb = 3,5 mm/√an. Enrobage minimal des aciers c = 35 mm.",
          find: "Profondeur de carbonatation x_c au bout de 100 ans et vérification de la protection",
          solution_latex: "x_c(100) = 3{,}5 \\times \\sqrt{100} = 3{,}5 \\times 10 = 35{,}0 \\text{ mm}",
          result: "xc = 35,0 mm = c (35 mm) → La carbonatation atteint les aciers à 100 ans pile. Pour un ouvrage de 100 ans, viser c = 40 mm pour garder une marge.",
        },
        {
          title: "Exemple 3 : Épaisseur résiduelle d'une poutre en bois après 45 min de feu",
          given: "Poutre en bois lamellé-collé GL24h de largeur initiale b0 = 200 mm. Vitesse de carbonisation β0 = 0,65 mm/min. Exposition sur 3 faces.",
          find: "Profondeur carbonisée d_char et largeur utile résiduelle b_ef après 45 min de feu",
          solution_latex: "d_{char} = 0{,}65 \\times 45 = 29{,}25 \\text{ mm} \\qquad b_{ef} = 200 - (2 \\times 29{,}25) = 200 - 58{,}5 = 141{,}5 \\text{ mm}",
          result: "La section efficace bois conservant 100% de sa résistance mécanique fait 141,5 mm × (h - 29,25 mm).",
        },
      ],
    },

    {
      id: 10,
      key: 'real_examples',
      title: "Exemple réel — Béton Bas Carbone du Grand Paris Express",
      icon: '🏢',
      type: 'examples_real',
      diagramType: 'bridge_structure',
      examples: [
        {
          context: "Voussoirs de tunnel du Grand Paris Express (Ligne 16 et 17)",
          scenario: "Substitution du ciment Portland classique CEM I par un ciment ternary bas carbone CEM III/C (80% de laitier de haut-fourneau moulu) et fibres métalliques structurelles (Béton Fibré BFU).",
          decomposition_latex: "\\text{Émission } CO_2 \\text{ réduite de } 280 \\text{ kg/m}^3 \\text{ à } 95 \\text{ kg/m}^3 \\quad (-66\\% \\text{ de } CO_2)",
          lesson: "La très faible porosité du béton au laitier procure une résistance exceptionnelle à l'attaque des sulfates et chlorures, avec une résistance à 90 jours de fck > 60 MPa.",
        },
      ],
    },

    {
      id: 11,
      key: 'diagrams',
      title: "Schéma — Courbe de Féret/Bolomey & Diagramme Acier",
      icon: '📊',
      type: 'interactive_diagram',
      diagramType: 'bridge_structure',
      description: "Visualisez la relation entre le rapport C/E et la résistance en compression du béton à 28 jours, ainsi que le diagramme contrainte-déformation (σ-ε) de l'acier de construction S355 et du béton comprimé.",
      diagram_description: [
        "Courbe de Bolomey : Évolution quasi-linéaire de fcm28 en fonction du rapport C/E",
        "Diagramme σ-ε de l'acier : Domaine élastique (E = 210 GPa), plateau de plastification fy, écrouissage et rupture fu",
        "Schéma d'hydratation du ciment : Formation des aiguilles de C-S-H et réseau de pores capillaires",
      ],
    },

    {
      id: 12,
      key: 'mistakes',
      title: "Erreurs graves en Science & Technologie des Matériaux",
      icon: '⛔',
      type: 'mistakes',
      items: [
        {
          mistake: "Ajouter de l'eau sur chantier pour augmenter l'ouvrabilité",
          trap: "Ajouter 20 L d'eau dans le toupie pour faciliter le coulage sans déduire cette eau du calcul E/C",
          fix: "Interdiction stricte ! Pour augmenter la fluidité (passer de S2 à S4), ajouter un adjuvant superplastifiant réducteur d'eau sur chantier sous contrôle du laboratoire.",
        },
        {
          mistake: "Négliger la cure du béton au jeune âge",
          trap: "Laisser sécher la surface du béton fraîchement coulé sous le vent ou le soleil sans produit de cure",
          fix: "La dessiccation précoce stoppe l'hydratation du ciment en surface, provoquant la faïençage, des micro-fissures de retrait plastique et une chute de résistance de 40% en peau de béton. Pulvériser un produit de cure paraffiné homologué.",
        },
        {
          mistake: "Mélanger des aciers de nuances incompatibles en soudage",
          trap: "Souder des armatures pour béton armé de nuance non soudable (ex: aciers à haute teneur en carbone)",
          fix: "Seuls les aciers portant la mention 'S' (soudable, ex: B500B / B500C) ou de teneur en carbone équivalent Ceq < 0,45% peuvent être soudés sans fragilisation de la ZAT (Zone Affectée Thermiquement).",
        },
        {
          mistake: "Utiliser des granulats réactifs à l'alcali-réaction (AAR)",
          trap: "Employer des granulats de carrière contenant de la silice opaline ou du quartz microcristallin avec un ciment riche en alcalins dans un ouvrage humide",
          fix: "L'AAR forme un gel expansif qui fait éclater le béton après 10 à 20 ans. Vérifier la qualification des granulats (Essai NF P 18-594) ou utiliser un ciment ES (Fortement résistant aux Sulfates / Alcalins bas).",
        },
      ],
    },

    {
      id: 13,
      key: 'tips',
      title: "Astuces du technologiste béton & matériaux",
      icon: '💡',
      type: 'tips',
      tips: [
        "Règle de maturité du béton (Loi de Saul): La résistance du béton dépend du produit Temps × Température. À 20°C, le béton atteint ~50% de fck à 3 jours, ~70% à 7 jours et 100% à 28 jours.",
        "Essai d'affaissement au cône d'Abrams (Slump Test) : S1 (10-40 mm, fermé), S2 (50-90 mm, plastique), S3 (100-150 mm, très plastique), S4 (160-210 mm, fluide), S5 (≥ 220 mm, très fluide).",
        "Essai au scléromètre (Marteau de Schmidt) : Mesure la dureté superficielle. Faire au moins 9 piques sur une zone saine et appliquer la courbe de étalonnage pour estimer la résistance fcm.",
        "Ciments bas carbone CEM III (Laitier) : Montée en résistance plus lente au jeune âge (3 à 7 jours) nécessitant un maintien du coffrage plus long, mais résistance finale à 90 jours très élevée et dégage peu de chaleur d'hydratation (idéal pour béton massif).",
        "Essai de charpy sur acier : Un acier S355 J2 garantit une énergie de rupture par choc KV ≥ 27 Joules à -20°C (indispensable pour les ponts exposés au gel).",
        "Fibres métalliques / polypropylène : Les fibres métalliques remplacent partiellement les armatures passives contre le retrait et l'effort tranchant ; les fibres polypropylène empêchent le spalling au feu.",
      ],
    },

    {
      id: 14,
      key: 'normes',
      title: "Normes & Références — Matériaux de Construction",
      icon: '📜',
      type: 'norms',
      norms: [
        { code: "NF EN 206+A2/CN", description: "Béton — Spécification, performance, production et conformité (Norme française et européenne de référence)." },
        { code: "NF EN 197-1", description: "Ciments — Partie 1 : Composition, spécifications et critères de conformité des ciments courants (CEM I à CEM V)." },
        { code: "NF EN 10025 (Parties 1 à 6)", description: "Produits laminés à chaud en aciers de construction (S235, S275, S355, S460, J0, J2, K2)." },
        { code: "NF EN 10080", description: "Aciers pour l'armature du béton — Aciers soudables pour béton armé (B500A, B500B, B500C)." },
        { code: "NF EN 14080", description: "Structures en bois — Bois lamellé-collé et bois massif reconstitué — Exigences." },
        { code: "RE2020 (Réglementation Environnementale)", description: "Seuils d'impact carbone des matériaux de construction (FDD / FIES / IC construction) en kg CO2 eq/m²." },
      ],
    },

    {
      id: 15,
      key: 'exercises',
      title: "Exercices Science & Technologie des Matériaux — 3 niveaux",
      icon: '✍️',
      type: 'exercises',
      exercises: [
        {
          id: 'ex_mat_1',
          number: 1,
          difficulty: 'Facile',
          text: "Un béton est formulé avec C = 350 kg/m³ de ciment et E = 161 L/m³ d'eau efficace. Calculez le rapport Eau/Ciment (E/C) et vérifiez s'il est conforme à la classe d'exposition XF1 (E/C max = 0,55).",
          hint: "E/C = E / C.",
          answer_latex: "E/C = \\frac{161}{350} = 0{,}460 \\le 0{,}55 \\quad \\checkmark",
          answer_text: "E/C = 0,46 ≤ 0,55 → Conforme aux exigences XF1 (Résistance au gel).",
        },
        {
          id: 'ex_mat_2',
          number: 2,
          difficulty: 'Moyen',
          text: "Utilisant la formule de Bolomey fcm28 = KB · fce · (C/E - 0,5), calculer la résistance moyenne en compression fcm28 obtenue pour C = 320 kg/m³, E = 160 L/m³, fce = 46 MPa (CEM II 42.5) et KB = 0,50.",
          hint: "C/E = 320 / 160 = 2,00.",
          answer_latex: "f_{cm28} = 0{,}50 \\times 46 \\times (2{,}00 - 0{,}50) = 23{,}0 \\times 1{,}50 = 34{,}50 \\text{ MPa}",
          answer_text: "fcm28 = 34,5 MPa (Équivalent à un béton de classe C25/30).",
        },
        {
          id: 'ex_mat_3',
          number: 3,
          difficulty: 'Difficile',
          text: "Une éprouvette cylindrique en acier d'armature B500B de diamètre 16 mm (section S0 = 201 mm²) est soumise à un essai de traction. 1) Calculer la force d'élasticité théorique F_y (fyk = 500 MPa). 2) Si la force maximale mesurée à rupture est F_u = 118,6 kN, calculer la résistance à la traction f_u et le ratio de ductilité f_u / f_y (Vérifier si f_u / f_y ≥ 1,08 pour la Classe B).",
          hint: "Fy = S0 · fyk. fu = Fu / S0.",
          answer_latex: "F_y = 201 \\times 500 = 100\\,500 \\text{ N} = 100{,}5 \\text{ kN} \\qquad f_u = \\frac{118\\,600}{201} = 590{,}05 \\text{ MPa}",
          answer_latex: "\\frac{f_u}{f_y} = \\frac{590}{500} = 1{,}18 \\ge 1{,}08 \\quad \\checkmark \\quad (\\text{Classe B conforme})",
          answer_text: "Fy = 100,5 kN | fu = 590 MPa | Ratio fu/fy = 1,18 ≥ 1,08 → Acier de Classe B parfaitement ductile.",
        },
      ],
    },

    {
      id: 16,
      key: 'corrections',
      title: "Corrections détaillées",
      icon: '✅',
      type: 'corrections',
      note: "Les détails des calculs de formulation et d'essais mécaniques sont disponibles en cliquant sur 'Voir la correction'.",
    },

    {
      id: 17,
      key: 'quiz',
      title: "Quiz Science & Technologie des Matériaux — 3 questions",
      icon: '🎯',
      type: 'quiz',
      questions: [
        {
          id: 'q_mat_1',
          question: "Quel est l'effet d'une réduction du rapport Eau/Ciment (E/C) de 0,60 à 0,40 dans la formulation du béton ?",
          options: [
            { id: 'a', text: "Elle diminue la résistance et augmente la porosité" },
            { id: 'b', text: "Elle augmente fortement la résistance à la compression et réduit la porosité/durabilité" },
            { id: 'c', text: "Elle fait changer la couleur du ciment en rouge" },
            { id: 'd', text: "Elle n'a aucun impact mécanique" },
          ],
          correct: 'b',
          explanation: "Réduire le rapport E/C diminue le volume de pores capillaires dans la pâte de ciment hydratée, ce qui augmente considérablement la résistance mécanique à 28 jours et réduit la perméabilité aux agents agressifs (chlorures, CO2).",
        },
        {
          id: 'q_mat_2',
          question: "Dans la désignation d'un acier de construction S355 J2, que signifie la valeur '355' ?",
          options: [
            { id: 'a', text: "La résistance maximale à la rupture fu = 355 MPa" },
            { id: 'b', text: "La limite d'élasticité minimale fy = 355 MPa (N/mm²) pour de faibles épaisseurs" },
            { id: 'c', text: "Le poids de la poutre en kg/m" },
            { id: 'd', text: "La température de fusion de l'acier" },
          ],
          correct: 'b',
          explanation: "Pour les aciers de construction selon la norme NF EN 10025, le nombre suivant la lettre 'S' (Structural) indique la limite d'élasticité minimale fy en MPa (ex: S235 -> 235 MPa, S355 -> 355 MPa).",
        },
        {
          id: 'q_mat_3',
          question: "Pourquoi le béton armé résiste-t-il bien à la corrosion dans des conditions normales non carbonatées ?",
          options: [
            { id: 'a', text: "Parce que l'acier contient du chrome comme l'inox" },
            { id: 'b', text: "Parce que l'hydratation du ciment produit de la Portlandite (Ca(OH)2) qui crée un milieu très alcalin (pH ≈ 12,5-13) passivant l'acier" },
            { id: 'c', text: "Parce que l'eau ne pénètre jamais dans le béton" },
            { id: 'd', text: "Grâce à l'effet du soleil" },
          ],
          correct: 'b',
          explanation: "La réaction d'hydratation du ciment produit de la Portlandite Ca(OH)2 qui maintient le pH du béton interstitiel entre 12,5 et 13. À ce niveau d'alcalinité, une couche microscopique d'oxyde passivant protège naturellement l'acier de la rouille.",
        },
      ],
    },

    {
      id: 18,
      key: 'exam_questions',
      title: "Questions d'examen — Niveau BTS/Licence Matériaux",
      icon: '🎓',
      type: 'exam',
      questions: [
        "Établissez la formule de Bolomey pour la formulation des bétons. Expliquez le rôle des paramètres KB, fce et du rapport C/E. Comment adapte-t-on le dosage en ciment sous contrainte de la norme NF EN 206 ?",
        "Détaillez le mécanisme physico-chimique de la carbonatation du béton. Établissez l'équation de neutralisation de la Portlandite par le CO2 atmosphérique. Quelle est la vitesse d'avancée du front de carbonatation x_c(t) ?",
        "Présentez le comportement mécanique du bois de structure soumis au feu. Expliquez la vitesse de carbonisation β0 et démontrez pourquoi une structure en bois lamellé-collé conserve sa stabilité plus longtemps qu'une structure métallique non protégée.",
        "Comparez les aciers de construction laminés à chaud (S235 à S460) et les aciers pour béton armé (B500A, B500B, B500C). Présentez l'essai de traction (courbe contrainte-déformation) et les critères de ductilité Agt et fu/fy.",
      ],
    },

    {
      id: 19,
      key: 'interview_questions',
      title: "Questions d'entretien — Ingénieur Matériaux / Laboratoire",
      icon: '💼',
      type: 'interview',
      questions: [
        {
          question: "Le laboratoire de chantier vous livre des éprouvettes de béton C30/37 dont la résistance à 28 jours mesurée sur presse est de 24,5 MPa. Quelle est votre procédure de diagnostic ?",
          answer_hint: "Procédure de non-conformité : 1. Arrêt des décoffrements et blocage du lot concerné. 2. Vérification des conditions de conservation des éprouvettes (cure à 20°C et 95% d'humidité). 3. Audit du bon de livraison toupie (vérifier si de l'eau a été rajoutée sur chantier). 4. Prescrire des carottages in situ Ø 100 mm pour essai d'écrasement direct sur la structure et auscultation au scléromètre/ultrasons.",
        },
        {
          question: "Quelle est la différence entre un ciment CEM I, CEM II et CEM III ?",
          answer_hint: "CEM I : Ciment Portland pur (≥ 95% de clinker) — montée en résistance rapide, forte chaleur d'hydratation, fort impact CO2. CEM II : Ciment Portland composé (65-94% clinker + calcaire/laitier/cendres). CEM III : Ciment de haut-fourneau (35-95% de laitier moulu) — bas carbone, montée en résistance plus lente mais très forte résistance aux milieux agressifs (marins/sulfatés).",
        },
        {
          question: "Qu'est-ce qu'un Béton Autoplaçant (BAP) et quel essai permet de valider son ouvrabilité sur chantier ?",
          answer_hint: "Un BAP est un béton ultra-fluide qui se met en place sous le seul effet de la gravité sans aucune vibration mécanique. Son ouvrabilité est caractérisée sur chantier par l'essai d'étalement au cône d'Abrams (Slump Flow test) : l'étalement doit être compris entre 650 et 750 mm sans ségrégation ni ressuage.",
        },
      ],
    },

    {
      id: 20,
      key: 'practical_case',
      title: "Cas pratique — Formulation d'un béton marin pour quai portuaire",
      icon: '🔧',
      type: 'practical',
      scenario: "Étude de cas — Formulation d'un béton C35/45 pour poutre de couronnement de quai marin en zone de marnage (Classe d'exposition XS3, durée de vie 100 ans)",
      description: `**Mise en situation** : Ingénieur laboratoire matériaux. Définition de la formule de béton répondant aux exigences NF EN 206 pour la classe XS3 (marnage/projections marines) : E/C max = 0,45, C min = 340 kg/m³, ciment résistant à la mer (PM-ES).`,
      resolution_latex_1: "\\text{Choix ciment : CEM III/A 42{,}5 N PM-ES (Laitier de haut fourneau 50\\%)} \\implies C = 370 \\text{ kg/m}^3",
      resolution_latex_2: "E_{eff} = 0{,}42 \\times 370 = 155{,}4 \\text{ L/m}^3 \\quad (E/C = 0{,}42 \\le 0{,}45 \\quad \\checkmark)",
      resolution_latex_3: "\\text{Ajout superplastifiant haut réducteur d'eau (Polycarboxylate) à 1{,}2\\% du poids de ciment} = 4{,}44 \\text{ kg/m}^3",
      conclusion: "Formulation validée : C = 370 kg/m³, E = 155 L/m³ (E/C = 0,42), Slump S4 (180 mm). Enrobage d'armatures c_min = 50 mm. Résistance 28 jours fcm = 48 MPa. Attaque par les chlorures bloquée pour > 100 ans.",
    },

    {
      id: 21,
      key: 'summary',
      title: "Résumé exécutif — Science des Matériaux en 6 points",
      icon: '📋',
      type: 'summary',
      content: `### La Science des Matériaux en 6 fondamentaux

1. **Hydratation du Ciment** : Silicates $C_3S/C_2S + H_2O \\to C-S-H$ (résistance) + $Ca(OH)_2$ (alcalinité passivante $pH \\approx 12{,}5$).
2. **Loi de Bolomey/Féret** : $f_{cm28} = K_B f_{ce} \\left(\\frac{C}{E} - 0{,}5\\right)$ — le rapport $E/C$ régit la résistance et la porosité.
3. **Aciers de Construction** : Nuances S235 à S460 ($E = 210\\text{ GPa}$), Aciers B500B/C pour béton armé (ductilité $A_{gt} \\ge 5-7{,}5\\%$).
4. **Bois de Structure** : Matériau biosourcé aniso-trope, excellente tenue au feu par carbonisation lente ($0{,}65\\text{ mm/min}$).
5. **Durabilité & Pathologies** : Carbonatation ($x_c = K \\sqrt{t}$), corrosion par chlorures, alcali-réaction (AAR), gel-dégel (XF).
6. **Matériaux Bas Carbone** : Ciments CEM III/VI, Bétons Autoplaçants (BAP), BFUP ($f_{ck} > 150\\text{ MPa}$), éco-matériaux.`,
    },

    {
      id: 22,
      key: 'key_points',
      title: "Points clés à mémoriser — Matériaux",
      icon: '⭐',
      type: 'keypoints',
      points: [
        "Rapport Eau/Ciment (E/C) : le paramètre n°1 régissant la résistance et la durabilité du béton",
        "Formule de Bolomey : fcm28 = KB · fce · (C/E - 0,5) [MPa]",
        "Module d'élasticité de l'acier E = 210 000 MPa | Béton C30/37 Ecm ≈ 33 000 MPa",
        "Carbonatation du béton : xc = K_carb · √t — désalcalinise le béton et déclenche la rouille des aciers",
        "Aciers B500B / B500C : fyk = 500 MPa, classe B/C hautement ductile pour zones sismiques",
        "Interdiction de rajouter de l'eau sur chantier dans la toupie de béton !",
        "Bétons bas carbone (CEM III / laitier) : réduisent l'empreinte CO2 jusqu'à 65%",
      ],
    },

    {
      id: 23,
      key: 'self_assessment',
      title: "Auto-évaluation — Science & Technologie des Matériaux",
      icon: '🏆',
      type: 'self_assessment',
      description: "Validez vos connaissances en matériaux de construction :",
      objectives: [
        "Je sais appliquer la formule de Bolomey pour dimensionner le rapport C/E et la résistance à 28 jours",
        "Je comprends l'influence du rapport E/C sur la porosité, la résistance et la durabilité du béton",
        "Je connais les nuances d'acier (S235, S355, B500B) et leurs propriétés mécaniques (fy, fu, E)",
        "Je comprends les mécanismes de dégradation (carbonatation, corrosion par chlorures, AAR)",
        "Je sais calculer l'avancée du front de carbonatation xc(t) et vérifier l'enrobage minimal",
        "Je connais les caractéristiques des bétons modernes (BAP, BFUP, Ciments bas carbone CEM III)",
        "J'ai résolu les 3 exercices de matériaux avec succès",
        "J'ai obtenu 3/3 au quiz de science des matériaux",
      ],
    },
  ],

  quickQuiz: {
    question: "Quel est l'effet principal de l'ajout d'eau sauvage dans une toupie de béton sur chantier ?",
    options: [
      { id: 'a', label: "A) Augmenter la résistance mécanique du béton" },
      { id: 'b', label: "B) Augmenter le rapport E/C, ce qui fait chuter la résistance et augmente la porosité/fissuration" },
      { id: 'c', label: "C) Accélérer le séchage du béton" },
    ],
    correct: 'b',
    explanation: "Ajouter de l'eau augmente le rapport E/C, ce qui crée des pores capillaires excessifs dans la pâte de ciment. La résistance chute de 3 à 5 MPa par tranche de 10L d'eau ajoutée et le retrait augmente.",
  },
};
