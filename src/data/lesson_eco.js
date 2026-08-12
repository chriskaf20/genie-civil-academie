// ── Lesson: Éco-construction, ACV & Décarbonation — Module 28 ─────────────────
export const lesson_eco = {
  moduleId: 28,
  slug: 'normes',
  lessonIndex: 1,
  title: "Éco-construction, Matériaux Biosourcés, ACV & Décarbonation du BTP",
  subtitle: "Module 28 — Génie de l'Environnement & Bas Carbone",
  level: 'Intermédiaire',
  duration: '30h',
  diagramType: 'soil_profile',
  tags: ['Éco-construction', 'RE2020', 'ACV', 'FDES', 'Biosourcés', 'Bilan Carbone', 'HQE', 'Décarbonation'],

  steps: [
    {
      id: 1,
      key: 'definition',
      title: "Définition — L'Éco-construction & la Décarbonation du BTP",
      icon: '📖',
      type: 'definition',
      fr: 'Matériaux Biosourcés, Analyse du Cycle de Vie (ACV), FDES & RE2020',
      en: 'Green Building, Life Cycle Assessment (LCA) & Carbon Neutrality',
      metier: "Pratiquée par les ingénieurs environnement & carbone, économistes de la construction durable, conseillers HQE/BREEAM/LEED et spécialistes ACV.",
      content: `L'**éco-construction** et la **décarbonation du secteur du BTP** visent à concevoir, construire et déconstruire des bâtiments et infrastructures en réduisant au minimum leur empreinte carbone, leurs consommations d'énergie et leur impact sur les écosystèmes.

### Les 4 grands concepts de la construction bas carbone :
1. **L'Analyse du Cycle de Vie (ACV / LCA)** : Évaluation normée (ISO 14040 / NF EN 15804) des impacts environnementaux d'un ouvrage du "berceau à la tombe" (extraction des matières premières, fabrication, chantier, exploitation, déconstruction et recyclage).
2. **La Réglementation Environnementale RE2020** : Réglementation française fixant des plafonds maximaux d'émissions de gaz à effet de serre pour la construction ($Ic_{construction}$) et l'énergie ($Ic_{énergie}$).
3. **Les Fiches FDES & EPD** : Fiches de Déclarations Environnementales et Sanitaires certifiées donnant le bilan carbone exact ($kg CO_2eq$) de chaque matériau.
4. **Les Matériaux Biosourcés & Géosourcés** : Matériaux issus de la biomasse végétale ou animale (bois, paille, chanvre, ouate de cellulose) ou de la terre crue (pisé, brique de terre compressée) qui **stockent le carbone biogénique**.

> 💡 **Le pouvoir du stockage carbone** : $1\\text{ m}^3$ de bois de structure piège et stocke durablement environ **1 tonne de $CO_2$ atmosphérique** pendant toute la durée de vie du bâtiment !`,
    },

    {
      id: 2,
      key: 'importance',
      title: "Pourquoi le BTP est au cœur de la transition écologique",
      icon: '⚠️',
      type: 'importance',
      content: `Le secteur du bâtiment et des travaux publics est le premier consommateur d'énergie en France (43%) et génère près de 25% des émissions nationales de gaz à effet de serre.

- **Atteinte de la Neutralité Carbone 2050 (SNBC)** : La France s'est engagée à diviser par 6 ses émissions de carbone d'ici 2050. Le BTP doit réduire son empreinte de 50% dès 2030.
- **Raréfaction des ressources naturelles (Sable & Agrégats)** : La construction consomme 40 milliards de tonnes de sable par an dans le monde. Le réemploi et le recyclage des déblais sont obligatoires.
- **Confort d'été sous le changement climatique** : Concoevoir des bâtiments capables de résister aux vagues de chaleur sans climatisation grâce à l'inertie et au déphasage thermique des matériaux biosourcés.

> ⚠️ **Règle d'or** : "Le matériau le plus écologique est celui qu'on ne fabrique pas ! Privilégier le réemploi, la réhabilitation du patrimoine existant et la sobriété dimensionnelle avant tout chiffrage."`,
    },

    {
      id: 3,
      key: 'applications',
      title: "Applications terrain — Matériaux & Procédés Bas Carbone",
      icon: '🏗️',
      type: 'applications',
      examples: [
        {
          context: "Construction en Structure Bois Massif (CLT & Lamellé-Collé)",
          text: "Réalisation d'immeubles de grande hauteur en panneaux de bois lamellé-croisé (CLT) réduisant l'impact carbone de 40% par rapport au tout béton.",
        },
        {
          context: "Formulation de Bétons Bas Carbone (Ciments CEM III / CEM IV)",
          text: "Remplacement du clinker traditionnel par du laitier de haut-fourneau ou de la métakaolin pour diviser les émissions du béton par 3 (béton Hoffmann / Ecocem).",
        },
        {
          context: "Isolation en Béton de Chanvre & Botte de Paille",
          text: "Utilisation de béton de chanvre (chènevotte + chaux) offrant une excellente régulation hygrométrique et un déphasage thermique de 12 heures.",
        },
        {
          context: "Déconstruction Sélective & Diagnostic PEMD",
          text: "Réalisation du diagnostic Produits Équipements Matériaux Déchets pour réemployer les charpentes, briques et sanitaires sur de nouveaux chantiers.",
        },
        {
          context: "Bâtiment Passif (Passivhaus)",
          text: "Conception bioclimatique ultra-isolée avec VMC double flux à récupération de chaleur réduisant le besoin de chauffage à < 15 kWh/m²/an.",
        },
      ],
    },

    {
      id: 4,
      key: 'theory',
      title: "Théorie — Bilan Carbone (ACV) & Stockage Biogénique",
      icon: '📐',
      type: 'theory',
      diagramType: 'soil_profile',
      content: `### 1. Les Phases de l'Analyse du Cycle de Vie (NF EN 15804)

L'impact carbone global d'un produit de construction se décompose en 4 grands modules :

- **Module A1-A3 (Production)** : Extraction, transport et fabrication du matériau (Énergie grise).
- **Module A4-A5 (Construction)** : Transport sur chantier et mise en œuvre.
- **Module B1-B7 (Exploitation)** : Consommations d'énergie (B6) et d'eau (B7) pendant 50 ans.
- **Module C1-C4 (Fin de vie)** : Démolition, transport, traitement et mise en décharge.
- **Module D (Bénéfices hors frontières)** : Potentiel de réemploi, récupération et recyclage.

### 2. Formule du Bilan Carbone de Construction ($Ic_{construction}$)

$$Ic_{construction} = \\sum_{i} \\left( Q_i \\cdot FDES_i \\right) \\quad [\\text{kg CO}_2\\text{eq/m}^2\\text{ SBP}]$$

- $Q_i$ = quantité du matériau $i$ par $m^2$ de surface de plancher.
- $FDES_i$ = impact GWP (Global Warming Potential) de la fiche FDES en $kg CO_2eq / \\text{unité}$.

### 3. Calcul du Stockage du Carbone Biogénique

Le bois et les fibres végétales absorbent le $CO_2$ par photosynthèse. La masse de $CO_2$ piégée vaut :

$$m_{CO_2} = m_{bois,sec} \\cdot 0{,}50 \\cdot \\frac{44}{12} \\approx 1{,}833 \\cdot m_{bois,sec}$$

- $0{,}50$ = teneur moyenne en carbone pur de la matière sèche végétale.
- $44/12$ = ratio des masses molaires du $CO_2$ ($44\\text{ g/mol}$) et du Carbone $C$ ($12\\text{ g/mol}$).`,
    },

    {
      id: 5,
      key: 'formulas',
      title: "Formules essentielles — Carbone, ACV & Performance Thermique",
      icon: '🔢',
      type: 'formulas',
      diagramType: 'soil_profile',
      formulas: [
        {
          name: "L'Indicateur Carbone Construction RE2020 (Ic_construction)",
          latex: "Ic_{\\text{construction}} = \\sum_{i=1}^{N} \\frac{m_i \\cdot EPD_i}{A_{\\text{shab}}} \\quad [\\text{kg CO}_2\\text{eq/m}^2]",
          description: "Doit être inférieur au seuil réglementaire RE2020 fixé selon la typologie et l'année (ex: 640 kg CO2eq/m² en 2025).",
        },
        {
          name: "Masse de CO2 biogénique stockée dans le bois",
          latex: "m_{CO_2\\text{ stocké}} = m_{\\text{matière sèche}} \\times 1{,}833 \\quad [\\text{kg CO}_2]",
          description: "Chaque kg de bois sec stocke environ 1,833 kg de CO2 extrait de l'atmosphère !",
        },
        {
          name: "Temps de déphasage thermique d'une paroi (t_d)",
          latex: "t_d = 1{,}38 \\cdot e \\cdot \\sqrt{\\frac{\\rho \\cdot c}{\\lambda}} \\quad [\\text{heures}]",
          description: "e = épaisseur [m], ρ = masse volumique [kg/m³], c = chaleur massique [J/kg·K], λ = conductivité [W/m·K]. Matériaux biosourcés (paille/bois) : td ≥ 10 à 12 h !",
        },
        {
          name: "Énergie Grise Totale d'un matériau",
          latex: "E_{\\text{grise}} = \\sum_{phase A1}^{C4} E_{\\text{primaire, non renouvelable}} \\quad [\\text{MJ/m}^3 \\text{ ou } \\text{kWh/m}^3]",
          description: "Quantité totale d'énergie consommée tout au long du cycle de vie de fabrication du matériau.",
        },
      ],
    },

    {
      id: 6,
      key: 'stepbystep',
      title: "Calcul complet — Comparatif Carbone Mur Béton vs Mur Ossature Bois Paille",
      icon: '🔬',
      type: 'stepbystep',
      problem: "On compare l'empreinte carbone de construction (A1-A3) de 1 m² de deux systèmes constructifs pour la façade d'un bâtiment : \n- Solution A (Béton armé 20 cm + isolation Laine de verre 14 cm) : Béton FDES = 240 kg CO2eq/m³ (soit 48 kg CO2/m² pour 20 cm) ; Laine de verre = 8 kg CO2eq/m². \n- Solution B (Mur Ossature Bois + isolation Botte de Paille 35 cm) : Bois d'ossature = +12 kg CO2eq/m² (fabrication) mais -35 kg CO2eq/m² (carbone biogénique stocké) ; Botte de paille = +2 kg CO2eq/m² (fabrication) et -20 kg CO2eq/m² (stocké). \n1) Calculer l'impact carbone net de la Solution A. 2) Calculer l'impact carbone net de la Solution B. 3) Calculer le gain carbone par m².",
      steps_demo: [
        { n: 1, text: "Calcul de l'impact carbone net Solution A (Béton + Laine de verre) : Impact_A = 48,0 + 8,0 = +56,0 kg CO2eq/m²" },
        { n: 2, text: "Calcul de l'impact carbone net Solution B (Bois + Paille) : Impact_B = (+12 - 35) + (+2 - 20) = -23 + (-18) = -41,0 kg CO2eq/m²" },
        { n: 3, text: "Calcul du gain carbone brut : Gain = Impact_A - Impact_B = +56,0 - (-41,0) = 97,0 kg CO2eq/m² évités" },
        { n: 4, text: "Conclusion : La Solution B a un bilan carbone négatif (puits de carbone) grâce au stockage biogénique, réduisant l'empreinte de 97 kg CO2eq par m² de façade !" },
      ],
      result_latex: "\\text{Solution A : } \\textbf{+56{,}0 kg CO}_2\\text{eq/m}^2 \\qquad \\text{Solution B : } \\textbf{-41{,}0 kg CO}_2\\text{eq/m}^2 \\qquad \\text{Gain : } \\textbf{97{,}0 kg CO}_2\\text{eq/m}^2 \\quad \\checkmark",
    },

    {
      id: 7,
      key: 'units',
      title: "Unités & Indicateurs de l'Éco-construction — Tableau de référence",
      icon: '📏',
      type: 'units',
      table: [
        { grandeur: "Potentiel de Réchauffement Global (GWP)", si: "kg CO₂eq (Équivalent CO₂ sur 100 ans)", imperial: "lb CO₂eq", conversion: "1 kg CH₄ (Méthane) = 28 kg CO₂eq | 1 kg N₂O = 265 kg CO₂eq" },
        { grandeur: "Indicateur Ic_construction (RE2020)", si: "kg CO₂eq / m² SBP", imperial: "lb/sq ft", conversion: "Émissions maximales autorisées pour les matériaux et le chantier" },
        { grandeur: "Énergie Grise", si: "MJ/m³ ou kWh/m³", imperial: "Btu/cu ft", conversion: "1 kWh = 3,6 MJ" },
        { grandeur: "Déphasage thermique t_d", si: "Heures [h]", imperial: "hours", conversion: "Durée mise par l'onde de chaleur estivale pour traverser le mur (Idéal = 10-12 h)" },
        { grandeur: "Stock de carbone biogénique", si: "kg C / m³ ou kg CO₂eq / m³", imperial: "lb/cu ft", conversion: "Carbone capté lors de la croissance de la plante/arbre" },
      ],
      note: "⚠️ ATTENTION : Dans les fiches FDES RE2020, ne pas confondre le **carbone renouvelable biogénique** (stocké temporairement puis restitué en fin de vie) et le **carbone fossile issu du pétrole/gaz** !",
    },

    {
      id: 8,
      key: 'hypotheses',
      title: "Hypothèses & principes de calcul ACV",
      icon: '📋',
      type: 'hypotheses',
      items: [
        { type: 'info', text: "L'Analyse du Cycle de Vie (ACV) est réalisée sur une **Durée de Vie de Référence (DVE)** du bâtiment fixée conventionnellement à **50 ans**." },
        { type: 'info', text: "L'utilisation de la base de données nationale **INIES** est obligatoire en France pour extraire les fiches FDES certifiées." },
        { type: 'warning', text: "ATTENTION : En l'absence de FDES spécifique pour un produit, la RE2020 impose d'utiliser une **Donnée Environnementale par Défaut (DED)** fortement pénalisante (+20% à +50% de carbone) !" },
        { type: 'warning', text: "Fin de Vie (Module C) : Hypothèse d'élimination ou de recyclage. Le bois en fin de vie est supposé incinéré ou enfoui, ce qui relargue le carbone biogénique stocké (cycle neutre)." },
        { type: 'tip', text: "Inertie thermique & Confort d'été : Associer des matériaux biosourcés légers (paille, chanvre) à des structures géosourcées lourdes (terre crue, pisé, dalle béton bas carbone) pour maximiser le confort d'été sans clim !" },
      ],
    },

    {
      id: 9,
      key: 'simple_examples',
      title: "Exemples guidés — Bilan Carbone & Déphasage",
      icon: '✏️',
      type: 'examples_simple',
      examples: [
        {
          title: "Exemple 1 : Stockage carbone d'une charpente bois",
          given: "Charpente en sapin de volume V = 12 m³, masse volumique sèche ρ = 450 kg/m³",
          find: "La masse de bois sèche m_sec et la masse de CO2 biogénique stockée",
          solution_latex: "m_{sec} = 12 \\times 450 = 5\\,400 \\text{ kg} \\qquad m_{CO_2} = 5\\,400 \\times 1{,}833 = 9\\,898 \\text{ kg CO}_2\\text{eq}",
          result: "La charpente piège 9,9 tonnes de CO2 atmosphérique !",
        },
        {
          title: "Exemple 2 : Calcul de l'énergie grise comparée",
          given: "1 m³ de béton traditionnel = 500 kWh/m³. 1 m³ de pisé (terre crue) = 30 kWh/m³",
          find: "Le facteur de réduction d'énergie grise du pisé",
          solution_latex: "\\text{Réduction} = \\frac{500}{30} = 16{,}67",
          result: "La terre crue consomme 16,7 fois moins d'énergie grise à la fabrication que le béton !",
        },
        {
          title: "Exemple 3 : Calcul de déphasage d'un isolant en fibre de bois",
          given: "Isolation en fibre de bois e = 24 cm (0,24 m), ρ = 160 kg/m³, c = 2100 J/kgK, λ = 0,040 W/mK",
          find: "Le temps de déphasage thermique td",
          solution_latex: "t_d = 1{,}38 \\times 0{,}24 \\times \\sqrt{\\frac{160 \\times 2100}{0{,}040}} = 0{,}3312 \\times \\sqrt{8\\,400\\,000} = 0{,}3312 \\times 2898 = 960 \\text{ min} = 16{,}0 \\text{ h}",
          result: "Temps de déphasage td = 16,0 heures ! Le pic de chaleur de 14h arrive à l'intérieur à 6h du matin.",
        },
      ],
    },

    {
      id: 10,
      key: 'real_examples',
      title: "Exemple réel — Le Siège Social de L'Oréal (Structure Bois & Terre Crue)",
      icon: '🏢',
      type: 'examples_real',
      diagramType: 'soil_profile',
      examples: [
        {
          context: "Bâtiment tertiaire de 15 000 m² à bilan carbone neutre conforme RE2020 seuil 2031",
          scenario: "Structure mixte poteaux-poutres bois français, dalles mixtes bois-béton bas carbone et façades isolées en paille hachée avec enduit terre crue.",
          decomposition_latex: "Ic_{\\text{construction}} = 420 \\text{ kg CO}_2\\text{eq/m}^2 \\quad (\\text{Seuil RE2020 } = 640 \\text{ kg CO}_2\\text{eq/m}^2)",
          lesson: "L'utilisation massive de matériaux biosourcés et géosourcés régionaux a permis de dépasser les objectifs climat 2030 tout en offrant un confort thermique passif sans climatisation.",
        },
      ],
    },

    {
      id: 11,
      key: 'diagrams',
      title: "Schéma des étapes de l'ACV (A1 à D) & Puits de Carbone",
      icon: '📊',
      type: 'interactive_diagram',
      diagramType: 'soil_profile',
      description: "Visualisez les étapes du cycle de vie du bâtiment (Modules A, B, C, D), la pyramide de l'énergie grise et le cycle du carbone biogénique.",
      diagram_description: [
        "Modules ACV : Production (A1-A3), Chantier (A4-A5), Exploitation 50 ans (B1-B7), Fin de vie (C1-C4), Recyclage (D)",
        "Pyramide de l'Énergie Grise : Du pisé/paille (ultra-faible) à l'aluminium/acier (ultra-élevé)",
        "Puits de carbone : Absorption photosynthétique du CO2 par la forêt et stockage dans le bâtiment",
      ],
    },

    {
      id: 12,
      key: 'mistakes',
      title: "Erreurs classiques en Éco-construction & ACV",
      icon: '⛔',
      type: 'mistakes',
      items: [
        {
          mistake: "Pratiquer le 'Greenwashing' en ignorant les Données par Défaut (DED)",
          trap: "Affirmer qu'un bâtiment est écologique sans avoir réalisé le bilan ACV complet sous INIES",
          fix: "Seules les fiches FDES certifiées et vérifiées par tierce partie indépendante font foi pour la conformité RE2020.",
        },
        {
          mistake: "Négliger les ponts thermiques lors de l'isolation biosourcée",
          trap: "Poser de la botte de paille sans traiter les jonctions de dalles et fenêtres",
          fix: "Les fuites d'air et ponts thermiques condensent l'humidité et risquent de faire pourrir l'isolant biosourcé. Poser une membrane pare-vapeur continue.",
        },
        {
          mistake: "Importer des matériaux biosourcés depuis l'autre bout de la planète",
          trap: "Utiliser du bois d'Eucalyptus importé par cargo d'Amérique du Sud pour un projet bas carbone",
          fix: "Le transport maritime/routier (Module A4) annule le bénéfice carbone ! S'approvisionner dans un rayon < 200 km (filières locales).",
        },
      ],
    },

    {
      id: 13,
      key: 'tips',
      title: "Astuces de l'expert en Construction Durable",
      icon: '💡',
      type: 'tips',
      tips: [
        "Bétons Bas Carbone : Exiger des bétons utilisant des ciments CEM III/A ou CEM III/B (à base de laitier) qui réduisent l'impact CO2 du m³ de 50 à 70% sans surcoût financier.",
        "Réemploi des granulats : Remplacer 30% des gravillons du béton par des granulats béton recyclés issus de déconstructions locales (NF EN 206/CN).",
        "Label Bâtiment Biosourcé : Obtenir la certification en intégrant au moins 18 kg/m² de matériaux biosourcés en niveau 1, ou 36 kg/m² en niveau 2.",
        "Logiciels ACV Bâtiment de référence : Vizcab, One Click LCA, Elodie (CSTB), Pleiades ACV.",
      ],
    },

    {
      id: 14,
      key: 'normes',
      title: "Normes & Labels — Éco-construction",
      icon: '📜',
      type: 'norms',
      norms: [
        { code: "Réglementation Environnementale RE2020", description: "Règles environnementales et énergétiques obligatoires pour les bâtiments neufs en France (Seuils 2022, 2025, 2028, 2031)." },
        { code: "NF EN 15804+A2", description: "Contribution des ouvrages de construction au développement durable — Déclarations environnementales sur les produits (FDES / EPD)." },
        { code: "ISO 14040 / 14044", description: "Management environnemental — Analyse du cycle de vie — Principes, cadre et exigences." },
        { code: "Certifications HQE / BREEAM / LEED", description: "Référentiels internationaux d'évaluation environnementale des bâtiments." },
      ],
    },

    {
      id: 15,
      key: 'exercises',
      title: "Exercices Éco-construction & Bilan Carbone — 3 niveaux",
      icon: '✍️',
      type: 'exercises',
      exercises: [
        {
          id: 'ex_eco_1',
          number: 1,
          difficulty: 'Facile',
          text: "Un panneau de contreplaqué bois de 2,0 m³ a une masse volumique sèche de 500 kg/m³. Calculer la masse de CO2 biogénique stockée.",
          hint: "m_CO2 = m_sec × 1,833.",
          answer_latex: "m_{sec} = 2{,}0 \\times 500 = 1000 \\text{ kg} \\qquad m_{CO_2} = 1000 \\times 1{,}833 = 1833 \\text{ kg CO}_2\\text{eq}",
          answer_text: "Masse de CO2 stockée = 1 833 kg CO2eq (1,83 tonne).",
        },
        {
          id: 'ex_eco_2',
          number: 2,
          difficulty: 'Moyen',
          text: "Une paroi a une résistance thermique R = 5,0 m²K/W. Calculer son coefficient de transmission thermique U en W/m²K.",
          hint: "U = 1 / R.",
          answer_latex: "U = \\frac{1}{5{,}0} = 0{,}200 \\text{ W/m}^2\\text{K}",
          answer_text: "Coefficient U = 0,20 W/m²K.",
        },
        {
          id: 'ex_eco_3',
          number: 3,
          difficulty: 'Difficile',
          text: "Un projet de 1 000 m² SBP utilise un béton dont la FDES donne 220 kg CO2eq/m³. Le volume total de béton est de 250 m³. Calculer l'impact carbone du béton ramené au m² de surface de plancher (Ic_béton).",
          hint: "Ic = (V × FDES) / SBP.",
          answer_latex: "Ic = \\frac{250 \\text{ m}^3 \\times 220 \\text{ kg CO}_2\\text{/m}^3}{1000 \\text{ m}^2} = \\frac{55\\,000}{1000} = 55{,}0 \\text{ kg CO}_2\\text{eq/m}^2",
          answer_text: "Impact carbone du béton = 55,0 kg CO2eq/m² SBP.",
        },
      ],
    },

    {
      id: 16,
      key: 'corrections',
      title: "Corrections détaillées",
      icon: '✅',
      type: 'corrections',
      note: "Retrouvez les démarches complètes d'ACV et d'optimisation carbone en cliquant sur 'Voir la correction'.",
    },

    {
      id: 17,
      key: 'quiz',
      title: "Quiz Éco-construction & RE2020 — 3 questions",
      icon: '🎯',
      type: 'quiz',
      questions: [
        {
          id: 'q_eco_1',
          question: "Quelle base de données nationale certifiée fournit les fiches FDES pour l'ACV des bâtiments en France ?",
          options: [
            { id: 'a', text: "La base INIES" },
            { id: 'b', text: "Le CAC 40" },
            { id: 'c', text: "La base INSEE" },
          ],
          correct: 'a',
          explanation: "La base nationale INIES rassemble toutes les fiches FDES et PEP certifiées pour les calculs ACV et RE2020.",
        },
        {
          id: 'q_eco_2',
          question: "Combien de kg de CO2 atmosphérique sont stockés dans 1 kg de matière sèche végétale (bois/paille) ?",
          options: [
            { id: 'a', text: "Environ 0,5 kg" },
            { id: 'b', text: "Environ 1,833 kg de CO2" },
            { id: 'c', text: "0 kg (aucun stockage)" },
          ],
          correct: 'b',
          explanation: "En raison du ratio des masses molaires (44/12) et de la teneur en carbone (50%), 1 kg de bois sec piège 1,833 kg de CO2.",
        },
        {
          id: 'q_eco_3',
          question: "Quel est l'avantage principal des matériaux biosourcés à forte masse volumique (ex: fibre de bois, paille) en été ?",
          options: [
            { id: 'a', text: "Ils refroidissent l'air comme un climatiseur" },
            { id: 'b', text: "Ils offrent un fort déphasage thermique (10 à 16h) retardant l'entrée de la chaleur nocturne" },
            { id: 'c', text: "Ils laissent passer le vent" },
          ],
          correct: 'b',
          explanation: "Leur déphasage thermique élevé (10 à 16h) retarde la pénétration de la chaleur estivale jusqu'à la nuit, où elle est évacuée par ventilation.",
        },
      ],
    },

    {
      id: 18,
      key: 'exam_questions',
      title: "Questions d'examen — Master Éco-construction",
      icon: '🎓',
      type: 'exam',
      questions: [
        "Exposez la méthodologie complète d'une ACV bâtiment selon la norme NF EN 15804+A2 (Modules A1 à D).",
        "Comparez l'empreinte carbone et l'énergie grise des bétons à liants alternatifs (CEM III, geopolymères) par rapport aux bétons au ciment Portland CEM I.",
      ],
    },

    {
      id: 19,
      key: 'interview_questions',
      title: "Questions d'entretien — Ingénieur Carbone & ACV",
      icon: '💼',
      type: 'interview',
      questions: [
        {
          question: "Comment optimiser l'indicateur Ic_construction d'un projet qui dépasse le seuil RE2020 ?",
          answer_hint: "1. Remplacer les fiches par défaut DED par de vraies FDES de fabricants. 2. Substituer le béton CEM I par du béton bas carbone CEM III. 3. Utiliser une charpente et du bardage bois (stockage carbone). 4. Optimiser les ratios d'acier et de béton. 5. Choisir des isolants biosourcés.",
        },
      ],
    },

    {
      id: 20,
      key: 'practical_case',
      title: "Cas pratique — Optimisation carbone d'un groupe scolaire de 2000 m²",
      icon: '🔧',
      type: 'practical',
      scenario: "Projet de groupe scolaire de 2 000 m² SBP visant le seuil RE2020 2028 (Ic_construction < 550 kg CO2eq/m²).",
      description: "Optimisation du lot Gros-Œuvre et Isolation.",
      resolution_latex_1: "\\text{Avant optimisation (Béton CEM I + Laine roche) : } Ic = 680 \\text{ kg CO}_2\\text{eq/m}^2 \\quad (\\text{Non conforme})",
      resolution_latex_2: "\\text{Après optimisation (Béton CEM III + Structure bois + Paille) : } Ic = 410 \\text{ kg CO}_2\\text{eq/m}^2 \\quad (\\text{Conforme})",
      conclusion: "Réduction de 270 kg CO2eq/m², soit 540 tonnes de CO2 économisées sur le projet !",
    },

    {
      id: 21,
      key: 'summary',
      title: "Résumé exécutif — L'Éco-construction en 6 points",
      icon: '📋',
      type: 'summary',
      content: `### L'Éco-construction en 6 points clés

1. **RE2020** : Réglementation imposant des plafonds carbone $Ic_{construction}$ et $Ic_{énergie}$.
2. **ACV (NF EN 15804)** : Évaluation du berceau à la tombe (A1 à D).
3. **FDES / INIES** : Données environnementales certifiées des matériaux.
4. **Stockage Biogénique** : $1\\text{ kg}$ de bois sec stocke $1{,}833\\text{ kg de } CO_2$.
5. **Déphasage Thermique** : Matériaux biosourcés déphasent la chaleur de 10 à 16h en été.
6. **Béton Bas Carbone** : Ciments CEM III / CEM IV à base de laitier réduisant le carbone de 60%.`,
    },

    {
      id: 22,
      key: 'key_points',
      title: "Points clés à mémoriser — Éco-construction",
      icon: '⭐',
      type: 'keypoints',
      points: [
        "ACV : Modules A1-A3 (Production), A4-A5 (Chantier), B (Usage 50 ans), C (Fin de vie), D (Recyclage)",
        "FDES certifiées obligatoires sur la base INIES",
        "Stockage CO2 biogénique : m_CO2 = m_sec × 1,833",
        "Bétons bas carbone : Utiliser des ciments au laitier CEM III",
        "Déphasage thermique élevé des biosourcés (10-16 h)",
      ],
    },

    {
      id: 23,
      key: 'self_assessment',
      title: "Auto-évaluation — Éco-construction & ACV",
      icon: '🏆',
      type: 'self_assessment',
      description: "Validez vos compétences en construction bas carbone et ACV :",
      objectives: [
        "Je comprends la méthodologie ACV et les modules A1 à D selon la NF EN 15804",
        "Je sais calculer le stockage du carbone biogénique d'un matériau biosourcé",
        "Je maîtrise les principes de la réglementation RE2020 et l'indicateur Ic_construction",
        "J'ai résolu les 3 exercices d'éco-construction avec succès",
        "J'ai obtenu 3/3 au quiz d'éco-construction",
      ],
    },
  ],

  quickQuiz: {
    question: "Combien de kg de CO2 biogénique sont stockés dans 100 kg de bois sec ?",
    options: [
      { id: 'a', label: "A) 50 kg" },
      { id: 'b', label: "B) 183,3 kg" },
      { id: 'c', label: "C) 300 kg" },
    ],
    correct: 'b',
    explanation: "m_CO2 = 100 kg × 1,833 = 183,3 kg CO2eq.",
  },
};
