// ── Lesson: Énergies Renouvelables & Efficacité Énergétique — Module 32 ────────
export const lesson_energie = {
  moduleId: 32,
  slug: 'qualite',
  lessonIndex: 1,
  title: "Énergies Renouvelables, Efficacité Énergétique du Bâtiment & Smart Grids",
  subtitle: "Module 32 — Énergies & Performance Énergétique du BTP",
  level: 'Intermédiaire',
  duration: '35h',
  diagramType: 'bridge_structure',
  tags: ['Énergies', 'Géothermie', 'Pieux Géothermiques', 'Photovoltaïque', 'PAC', 'COP', 'BEPOS', 'RE2020'],

  steps: [
    {
      id: 1,
      key: 'definition',
      title: "Définition — Énergies Renouvelables & Bâtiment à Énergie Positive (BEPOS)",
      icon: '📖',
      type: 'definition',
      fr: 'Géothermie sur Pieux, Photovoltaïque Intégré (BIPV), Pompes à Chaleur (PAC) & Smart Grids',
      en: 'Renewable Energy Systems, Building Energy Efficiency & Geothermal Piles',
      metier: "Pratiquée par les ingénieurs génie thermique et énergétique, concepteurs de bâtiments BEPOS, spécialistes en géothermie et ingénieurs Smart Grids.",
      content: `L'**efficacité énergétique et l'intégration des énergies renouvelables (EnR)** dans le génie civil consistent à transformer les bâtiments et infrastructures en producteurs d'énergie propre, tout en réduisant drastiquement leurs consommations énergétiques par la conception bioclimatique.

### Les 4 grandes technologies EnR appliquées aux ouvrages :
1. **La Géothermie de Surface sur Pieux Fondations** : Utilisation des pieux et parois moulées en béton comme échangeurs thermiques avec le sol ($12^\\circ\\text{C}$ à $14^\\circ\\text{C}$ constants) pour chauffer en hiver et rafraîchir en été (Geocooling).
2. **Le Solaire Photovoltaïque Intégré au Bâti (BIPV)** : Intégration de panneaux photovoltaïques en toiture, façade ou ombrières de parking pour l'autoconsommation électrique.
3. **Les Pompes à Chaleur (PAC)** : Systèmes thermodynamiques transférant les calories gratuites du sol, de l'air ou de l'eau vers le bâtiment avec des coefficients de performance $COP > 4{,}0$.
4. **Le Bâtiment à Énergie Positive (BEPOS / RE2020)** : Ouvrage produisant plus d'énergie non carbonée qu'il n'en consomme sur une année ($E_{produite} > E_{consommée}$).

> 💡 **Le miracle des pieux géothermiques** : Les pieux de fondation indispensables à la structure reçoivent des tubes PEHD moulés dans le béton. Sans aucun forrage supplémentaire, ils chauffent et rafraîchissent l'immeuble à coût énergétique presque nul !`,
    },

    {
      id: 2,
      key: 'importance',
      title: "Pourquoi l'autonomie énergétique des ouvrages est devenue prioritaire",
      icon: '⚠️',
      type: 'importance',
      content: `L'envolée des coûts de l'électricité et du gaz, couplée aux exigences strictes de la RE2020 (seuil de consommation d'énergie primaire non renouvelable $Cep,nr$), impose de repenser l'ingénierie énergétique des bâtiments.

- **Réduction massive de la facture énergétique** : Un bâtiment BEPOS équipé de géothermie et de solaire réduit les charges de fonctionnement de 80% sur 30 ans.
- **Confort d'été sans climatisation (Geocooling)** : En été, le fluide circule dans les pieux géothermiques et rafraîchit le bâtiment directement par échange avec le sol froid, consommant 10 fois moins qu'un climatiseur à compresseur !
- **Résilience face aux défaillances du réseau** : L'autoconsommation solaire associée au stockage batterie ou aux Smart Grids garantit la continuité d'alimentation des secours.

> ⚠️ **Règle d'or** : "Toujours appliquer la démarche Négawatt : 1. Sobriété (Conception bioclimatique) $\\to$ 2. Efficacité (Excellente isolation + PAC) $\\to$ 3. Énergies Renouvelables (Solaire/Géothermie)."`,
    },

    {
      id: 3,
      key: 'applications',
      title: "Applications terrain — Systèmes EnR & Technologies",
      icon: '🏗️',
      type: 'applications',
      examples: [
        {
          context: "Fondations Géothermiques d'un Immeuble Tertiaire",
          text: "Équipement de 80 pieux forés Φ 800 mm avec sondes géothermiques PEHD reliées à une PAC eau/eau pour assurer 100% du chauffage et du rafraîchissement.",
        },
        {
          context: "Centrale Photovoltaïque sur Ombrières de Parking",
          text: "Installation de 2 000 m² d'ombrières photovoltaïques alimentant directement les bornes de recharge de véhicules électriques et le bâtiment adjacent.",
        },
        {
          context: "Réseau de Chaleur Urbain Thermodynamique",
          text: "Récupération des calories des eaux usées de la ville (égouts) par échangeur thermique pour alimenter le chauffage d'un nouveau quartier.",
        },
        {
          context: "Chauffe-Eau Solaire Collectif (CESC)",
          text: "Installation de capteurs solaires thermiques en toiture assurant 60% des besoins d'Eau Chaude Sanitaire (ECS) d'un ensemble de 100 logements.",
        },
        {
          context: "Régulation Smart Grid & Autoconsommation Collective",
          text: "Gestion intelligente des flux électriques par automate prédisant la production solaire et pilotant les recharges et pompes à chaleur.",
        },
      ],
    },

    {
      id: 4,
      key: 'theory',
      title: "Théorie — COP des PAC, Géothermie sur Pieux & Solaire PV",
      icon: '📐',
      type: 'theory',
      diagramType: 'bridge_structure',
      content: `### 1. Coefficient de Performance (COP) d'une Pompe à Chaleur

Le $COP$ caractérise l'efficacité énergétique de la PAC (rapport entre la chaleur restituée $Q_{chaud}$ et le travail électrique consommé par le compresseur $W_{élec}$) :

$$COP = \\frac{Q_{chaud}}{W_{\\acute{e}lec}} = \\frac{Q_{froid} + W_{\\acute{e}lec}}{W_{\\acute{e}lec}} = 1 + \\frac{Q_{froid}}{W_{\\acute{e}lec}}$$

- Un $COP = 4{,}0$ signifie que pour **1 kWh d'électricité payé**, la PAC restitue **4 kWh de chaleur** au bâtiment (3 kWh prélevés gratuitement dans le sol) !

### 2. Puissance Extrayable d'un Pieu Géothermique

La puissance thermique $P_{pieu}$ extraite d'un fût de pieu en béton armé équipé de sondes vaut :

$$P_{pieu} = q_{lin\\acute{e}aire} \\cdot L_{pieu} \\quad [\\text{W}]$$

- $q_{linéaire}$ = extraction thermique linéique ($\approx 40\\text{ à } 60\\text{ W/m}$ de pieu dans un sol saturé en eau).
- $L_{pieu}$ = profondeur utile du pieu [m].

### 3. Production Électrique Photovoltaïque ($E_{pv}$)

$$E_{pv} = P_{cr\\hat{e}te} \\cdot H_{irradiance} \\cdot PR \\quad [\\text{kWh/an}]$$

- $P_{crête}$ = puissance installée en kilo-Watt crête [kWc] ($P_{crête} = A \\cdot \\eta_{pv}$).
- $H_{irradiance}$ = irradiation solaire annuelle [kWh/m²/an] (ex: 1 300 kWh/m²/an dans le Sud de la France).
- $PR$ = Performance Ratio ($\approx 0{,}75 \\text{ à } 0{,}80$, intégrant les pertes d'onduleur et d'échauffement).`,
    },

    {
      id: 5,
      key: 'formulas',
      title: "Formules essentielles — Énergies & Performance Énergétique",
      icon: '🔢',
      type: 'formulas',
      diagramType: 'bridge_structure',
      formulas: [
        {
          name: "Coefficient de Performance d'une PAC (COP)",
          latex: "COP = \\frac{Q_{\\text{restituée}}}{W_{\\text{électrique}}} \\quad (COP_{\\text{géothermie}} \\approx 4{,}0 \\text{ à } 5{,}0)",
          description: "Q_restituée = énergie thermique fournie au bâtiment, W_électrique = énergie électrique consommée.",
        },
        {
          name: "Puissance thermique totale d'un champ de pieux géothermiques",
          latex: "P_{\\text{total}} = N_{\\text{pieux}} \\cdot q_{\\text{linéaire}} \\cdot L_{\\text{pieu}} \\quad [\\text{kW}]",
          description: "N = nombre de pieux actifs, q = 45 à 55 W/m, L = longueur de chaque pieu.",
        },
        {
          name: "Surface de panneaux photovoltaïques nécessaire",
          latex: "A_{\\text{pv}} = \\frac{P_{\\text{visée}}}{\\text{Ensol} \\cdot \\eta_{\\text{capteur}}} \\quad [\\text{m}^2]",
          description: "η_capteur = rendement des cellules photovoltaïques (18% à 22%).",
        },
        {
          name: "Bilan Énergétique BEPOS (RE2020)",
          latex: "E_{\\text{net}} = E_{\\text{produite, EnR}} - E_{\\text{consommée, EP}} > 0 \\quad [\\text{kWh/m}^2\\cdot\\text{an}]",
          description: "Un bâtiment BEPOS produit plus d'énergie renouvelable qu'il n'en consomme en énergie primaire.",
        },
      ],
    },

    {
      id: 6,
      key: 'stepbystep',
      title: "Calcul complet — Dimensionnement d'un champ de pieux géothermiques et gain énergétique",
      icon: '🔬',
      type: 'stepbystep',
      problem: "Un immeuble de bureaux nécessite une puissance de chauffage maximale P_chaud = 120 kW. Les fondations comprennent N = 40 pieux forés de profondeur L = 18 m. Le sol argilo-sableux saturé permet une extraction de q_linéaire = 50 W/m par pieu. La PAC géothermique utilisée a un COP = 4,5. 1) Calculer la puissance thermique totale P_géoth extraite du sol par les 40 pieux. 2) Vérifier si la géothermie couvre le besoin de 120 kW. 3) Calculer la puissance électrique W_élec consommée par le compresseur de la PAC. 4) Calculer l'économie d'électricité réalisée par rapport à un chauffage électrique direct (convecteurs COP = 1,0).",
      steps_demo: [
        { n: 1, text: "Calcul de la longueur totale de pieux actifs : L_totale = 40 pieux × 18 m = 720 m de pieux" },
        { n: 2, text: "Calcul de la puissance thermique extraite du sol P_géoth : P_géoth = 720 m × 50 W/m = 36 000 W = 36,0 kW" },
        { n: 3, text: "Calcul de la puissance thermique restituée par la PAC (avec COP = 4,5) : P_restituée = P_géoth / (1 - 1/COP) = 36,0 / (1 - 0,222) = 36,0 / 0,778 = 46,3 kW" },
        { n: 4, text: "Calcul de la puissance électrique consommée par la PAC pour fournir 120 kW (COP = 4,5) : W_élec = P_besoin / COP = 120 kW / 4,5 = 26,67 kW" },
        { n: 5, text: "Calcul de la puissance prélevée gratuitement dans le sol : P_sol = 120 kW - 26,67 kW = 93,33 kW" },
        { n: 6, text: "Calcul de l'économie d'électricité par rapport à des radiateurs électriques (120 kW) : Économie = 120 kW - 26,67 kW = 93,33 kW d'économie instantanée (divisé par 4,5 !) ✓" },
      ],
      result_latex: "W_{\\text{élec, PAC}} = \\textbf{26{,}67 kW} \\qquad P_{\\text{gratuit, sol}} = \\textbf{93{,}33 kW} \\qquad \\text{Économie d'énergie} = \\textbf{77{,}8\\%} \\quad \\checkmark",
    },

    {
      id: 7,
      key: 'units',
      title: "Unités & Symboles Énergétiques — Tableau de référence",
      icon: '📏',
      type: 'units',
      table: [
        { grandeur: "Puissance Watt crête (Wc / kWc)", si: "kWc (Puissance maximale sous 1000 W/m² à 25°C)", imperial: "kWp", conversion: "1 kWc d'installation PV exige environ 5 m² de panneaux" },
        { grandeur: "Coefficient de Performance (COP)", si: "Adimensionnel (ex: COP = 4,2)", imperial: "EER / SEER", conversion: "Rapport énergie thermique fournie / énergie électrique consommée" },
        { grandeur: "Irradiance Solaire H", si: "kWh/m²/an", imperial: "Btu/sq ft", conversion: "Nord de la France ≈ 1000 kWh/m²/an | Sud de la France ≈ 1400 kWh/m²/an" },
        { grandeur: "Extraction géothermique q", si: "W/m de pieu", imperial: "Btu/h·ft", conversion: "Sol sec: 25 W/m | Sol saturé en eau: 50-60 W/m" },
        { grandeur: "Énergie Primaire (EP)", si: "kWh_ep / m² · an", imperial: "Btu/sq ft", conversion: "Facteur de conversion électricité en France: 1 kWh élec = 2,3 kWh EP" },
      ],
      note: "⚠️ ATTENTION : La géothermie sur pieux fonctionne en **double sens** (Chauffage l'hiver et Geocooling l'été), ce qui permet de recharger thermiquement le sol en été pour la saison froide suivante !",
    },

    {
      id: 8,
      key: 'hypotheses',
      title: "Hypothèses & principes de dimensionnement énergétique",
      icon: '📋',
      type: 'hypotheses',
      items: [
        { type: 'info', text: "Le sous-sol au-delà de 10 m de profondeur conserve une température constante d'environ 12°C à 14°C tout au long de l'année." },
        { type: 'info', text: "Le rendement moyen des modules photovoltaïques en silicium monocristallin actuels est compris entre 20% et 22%." },
        { type: 'warning', text: "ATTENTION : Un puits ou champ géothermique mal équilibré (qui extrait trop de chaleur en hiver sans rafraîchir en été) provoque le **gel progressif du sol** au bout de 5 à 10 ans !" },
        { type: 'warning', text: "Ombrages portés en photovoltaïque : Un ombrage partiel sur une seule cellule peut réduire la production de toute une chaîne de panneaux (String) de 80%. Utiliser des micro-onduleurs." },
        { type: 'tip', text: "Geocooling gratuit : En été, couper le compresseur de la PAC et faire circuler l'eau des pieux (14°C) directement dans les planchers rafraîchissants (Consommation de quelques Watts pour la pompe de circulation) !" },
      ],
    },

    {
      id: 9,
      key: 'simple_examples',
      title: "Exemples guidés — Production PV & COP de PAC",
      icon: '✏️',
      type: 'examples_simple',
      examples: [
        {
          title: "Exemple 1 : Calcul de la production annuelle d'une centrale PV de toiture",
          given: "Surface A = 300 m², Rendement panneaux η = 20% (P_crête = 60 kWc). Irradiance locale H = 1 200 kWh/m²/an. Performance Ratio PR = 0,80",
          find: "La production électrique annuelle E_annuelle",
          solution_latex: "E_{annuelle} = P_{cr\\hat{e}te} \\times H \\times PR = 60 \\text{ kWc} \\times 1200 \\times 0{,}80 = 57\\,600 \\text{ kWh/an}",
          result: "Production photovoltaïque annuelle = 57 600 kWh/an.",
        },
        {
          title: "Exemple 2 : Calcul de la consommation électrique d'une PAC avec COP = 4,0",
          given: "Besoin de chauffage annuel d'un bâtiment Q_chauffage = 80 000 kWh/an. PAC géothermique avec COP = 4,0",
          find: "La consommation électrique annuelle W_élec et l'économie",
          solution_latex: "W_{\\acute{e}lec} = \\frac{80\\,000}{4{,}0} = 20\\,000 \\text{ kWh/an} \\qquad \\text{Économie} = 80\\,000 - 20\\,000 = 60\\,000 \\text{ kWh/an}",
          result: "Consommation électrique de seulement 20 000 kWh/an (60 000 kWh prélevés gratuitement dans le sol).",
        },
        {
          title: "Exemple 3 : Nombre de pieux géothermiques requis",
          given: "Puissance géothermique requise = 45 kW (45 000 W). Chaque pieu de 15 m fournit q = 50 W/m (750 W par pieu)",
          find: "Le nombre de pieux géothermiques N_pieux",
          solution_latex: "N_{pieux} = \\frac{45\\,000 \\text{ W}}{750 \\text{ W/pieu}} = 60 \\text{ pieux}",
          result: "Équiper 60 pieux de fondation en sondes géothermiques.",
        },
      ],
    },

    {
      id: 10,
      key: 'real_examples',
      title: "Exemple réel — La Tour Elithis Danube à Strasbourg (Bâtiment BEPOS)",
      icon: '🏢',
      type: 'examples_real',
      diagramType: 'bridge_structure',
      examples: [
        {
          context: "Tour de logements R+16 à énergie positive d'une surface de 4 500 m²",
          scenario: "Conception bioclimatique compacte, façades vitrées actives, isolation biosourcée, 1 200 m² de panneaux PV en toiture et façades et pompe à chaleur géothermique.",
          decomposition_latex: "E_{\\text{produite}} = 95 \\text{ kWh/m}^2\\cdot\\text{an} \\quad > \\quad E_{\\text{consommée}} = 88 \\text{ kWh/m}^2\\cdot\\text{an} \\implies \\text{BEPOS}",
          lesson: "Premier gratte-ciel de logements à énergie positive au monde, démontrant la faisabilité technique et économique de l'autonomie énergétique en milieu urbain dense.",
        },
      ],
    },

    {
      id: 11,
      key: 'diagrams',
      title: "Schéma d'un pieu géothermique & Circuit thermodynamique de PAC",
      icon: '📊',
      type: 'interactive_diagram',
      diagramType: 'bridge_structure',
      description: "Visualisez la coupe d'un pieu de fondation équipé de tubes géothermiques PEHD, le cycle thermodynamique d'une Pompe à Chaleur (Évaporateur, Compresseur, Condenseur, Détendeur) et le bilan solaire PV.",
      diagram_description: [
        "Pieu Géothermique : Armatures béton avec boucles de tubes PEHD moulées et circulation du fluide caloporteur",
        "Cycle de PAC : Prélèvement des calories dans le sol (12°C), compression électrique et restitution à 35°C dans le plancher chauffant",
        "Centrale Photovoltaïque : Champ de panneaux PV, onduleur de conversion DC/AC et tableau de distribution Smart Grid",
      ],
    },

    {
      id: 12,
      key: 'mistakes',
      title: "Erreurs classiques en Ingénierie des Énergies du Bâtiment",
      icon: '⛔',
      type: 'mistakes',
      items: [
        {
          mistake: "Confondre puissance crête (kWc) et énergie produite (kWh)",
          trap: "Dire qu'une centrale de 100 kWc va produire 100 kW d'électricité en continu toute l'année",
          fix: "kWc est la puissance maximale instantanée en plein soleil. L'énergie annuelle dépend de l'irradiation locale (1 kWc produit environ 1 000 à 1 400 kWh/an en France).",
        },
        {
          mistake: "Utiliser une PAC air/air pour le chauffage par grand froid (-15°C)",
          trap: "Compter sur une PAC aérothermique sur l'air extérieur en zone de montagne",
          fix: "Par grand froid, le COP s'effondre vers 1,0 (simple convecteur) et l'évaporateur gèle. Privilégier la géothermie (sol à 12°C constant) ou un système hybride.",
        },
        {
          mistake: "Dimensionner l'isolation APRES avoir choisi le système de chauffage",
          trap: "Acheter une énorme PAC géothermique de 200 kW puis isoler le bâtiment ensuite",
          fix: "Toujours réduire les besoins de chauffage par l'isolation bioclimatique D'ABORD, pour pouvoir installer une PAC 4 fois plus petite et 4 fois moins chère !",
        },
      ],
    },

    {
      id: 13,
      key: 'tips',
      title: "Astuces de l'expert en Efficacité Énergétique",
      icon: '💡',
      type: 'tips',
      tips: [
        "Intégration géothermique sans surcoût de forage : Profiter des pieux de fondation imposés par la géotechnique pour y insérer les sondes PEHD (surcoût négligeable de quelques centaines d'euros par pieu).",
        "Orientation et inclinaison PV optimales : En France, l'inclinaison optimale des panneaux PV est de **30° à 35° orientés plein Sud**.",
        "Planchers chauffants basse température : Alimenter les planchers chauffants à 30°C-35°C plutôt que des radiateurs à 65°C pour augmenter le COP de la PAC de 3,0 à 5,0 !",
        "Récupération de chaleur sur eaux grises (Shower Power) : Placer un échangeur sous les douches pour préchauffer l'eau froide entrante avec l'eau chaude évacuée (Économie de 40% sur l'ECS).",
      ],
    },

    {
      id: 14,
      key: 'normes',
      title: "Normes & Références — Énergies & RE2020",
      icon: '📜',
      type: 'norms',
      norms: [
        { code: "Réglementation Environnementale RE2020", description: "Fixe les seuils maximaux de consommation d'énergie primaire Cep et Cep,nr et favorise les EnR." },
        { code: "NF EN 15450", description: "Conception des systèmes de chauffage avec pompes à chaleur." },
        { code: "NF C 15-712-1", description: "Installations photovoltaïques raccordées au réseau de distribution basse tension." },
        { code: "NF DTU 68.3", description: "Installations de ventilation mécanique contrôlée (VMC)." },
      ],
    },

    {
      id: 15,
      key: 'exercises',
      title: "Exercices Énergies Renouvelables & PAC — 3 niveaux",
      icon: '✍️',
      type: 'exercises',
      exercises: [
        {
          id: 'ex_ene_1',
          number: 1,
          difficulty: 'Facile',
          text: "Une PAC géothermique absorbe W_élec = 5,0 kW d'électricité et fournit Q_chaud = 22,0 kW de chaleur au bâtiment. Calculer son COP.",
          hint: "COP = Q_chaud / W_élec.",
          answer_latex: "COP = \\frac{22{,}0 \\text{ kW}}{5{,}0 \\text{ kW}} = 4{,}40",
          answer_text: "COP = 4,40 (Très haute performance énergétique).",
        },
        {
          id: 'ex_ene_2',
          number: 2,
          difficulty: 'Moyen',
          text: "Un champ de 30 pieux géothermiques de 20 m de profondeur fournit un extrait linéique q = 50 W/m. Calculer la puissance thermique totale extraite du sol.",
          hint: "P_totale = N × L × q.",
          answer_latex: "P = 30 \\times 20 \\text{ m} \\times 50 \\text{ W/m} = 30\\,000 \\text{ W} = 30{,}0 \\text{ kW}",
          answer_text: "Puissance extraite du sol = 30,0 kW.",
        },
        {
          id: 'ex_ene_3',
          number: 3,
          difficulty: 'Difficile',
          text: "Une toiture photovoltaïque de 200 m² (rendement η = 20% → 40 kWc) est installée dans une région recevant H = 1 300 kWh/m²/an (PR = 0,80). Calculer la production annuelle d'électricité en kWh et les revenus générés à 0,15 €/kWh.",
          hint: "E = P_crête × H × PR. Revenu = E × 0,15 €.",
          answer_latex: "E_{annuelle} = 40 \\text{ kWc} \\times 1300 \\times 0{,}80 = 41\\,600 \\text{ kWh/an}",
          answer_latex_2: "\\text{Revenu} = 41\\,600 \\times 0{,}15 = 6\\,240 \\text{ \\euro/an}",
          answer_text: "Production = 41 600 kWh/an | Revenu annuel = 6 240 €/an.",
        },
      ],
    },

    {
      id: 16,
      key: 'corrections',
      title: "Corrections détaillées",
      icon: '✅',
      type: 'corrections',
      note: "Retrouvez les détails des calculs géothermiques et thermodynamiques en cliquant sur 'Voir la correction'.",
    },

    {
      id: 17,
      key: 'quiz',
      title: "Quiz Énergies Renouvelables & Bâtiment — 3 questions",
      icon: '🎯',
      type: 'quiz',
      questions: [
        {
          id: 'q_ene_1',
          question: "Que signifie un COP (Coefficient de Performance) de 4,0 pour une Pompe à Chaleur ?",
          options: [
            { id: 'a', text: "La PAC consomme 4 fois plus d'électricité qu'un convecteur" },
            { id: 'b', text: "Pour 1 kWh d'électricité consommé, la PAC fournit 4 kWh de chaleur (dont 3 kWh prélevés gratuitement dans le sol ou l'air)" },
            { id: 'c', text: "La PAC ne marche que 4 heures par jour" },
          ],
          correct: 'b',
          explanation: "Un COP de 4,0 signifie que 75% de la chaleur restituée provient gratuitement du milieu naturel (sol/eau/air) et 25% de l'électricité du compresseur.",
        },
        {
          id: 'q_ene_2',
          question: "Quel est le grand avantage du 'Geocooling' (rafraîchissement passif par pieux géothermiques) en été ?",
          options: [
            { id: 'a', text: "Il consomme 10 fois moins d'énergie qu'une climatisation classique en faisant circuler l'eau du sol à 14°C sans allumer le compresseur" },
            { id: 'b', text: "Il fait de la glace dans le salon" },
            { id: 'c', text: "Il produit de l'eau chaude" },
          ],
          correct: 'a',
          explanation: "Le Geocooling utilise directement la fraîcheur naturelle du sol (14°C) par simple circulation d'eau, évitant le fonctionnement du compresseur énergivore.",
        },
        {
          id: 'q_ene_3',
          question: "Qu'est-ce qu'un bâtiment BEPOS selon la réglementation RE2020 ?",
          options: [
            { id: 'a', text: "Un bâtiment sans fenêtres" },
            { id: 'b', text: "Un Bâtiment à Énergie Positive qui produit plus d'énergie renouvelable qu'il n'en consomme en énergie primaire" },
            { id: 'c', text: "Un bâtiment chauffé au fioul" },
          ],
          correct: 'b',
          explanation: "Un BEPOS produit un bilan énergétique positif sur l'année grâce à ses équipements EnR (solaire, géothermie).",
        },
      ],
    },

    {
      id: 18,
      key: 'exam_questions',
      title: "Questions d'examen — Master Génie Énergétique du Bâtiment",
      icon: '🎓',
      type: 'exam',
      questions: [
        "Démontrez le cycle thermodynamique théorique de Carnot d'une Pompe à Chaleur et exprimez le COP maximal théorique en fonction des températures de source $T_{froid}$ et $T_{chaud}$.",
        "Présentez la méthodologie de dimensionnement d'un champ de pieux géothermiques sous sollicitations thermiques alternées hiver/été.",
      ],
    },

    {
      id: 19,
      key: 'interview_questions',
      title: "Questions d'entretien — Ingénieur Énergies & HVAC",
      icon: '💼',
      type: 'interview',
      questions: [
        {
          question: "Pourquoi est-il préférable d'associer une PAC géothermique à un plancher chauffant basse température (35°C) plutôt qu'à des radiateurs haute température (65°C) ?",
          answer_hint: "Plus l'écart entre la température du sol (12°C) et la température d'émission (35°C vs 65°C) est faible, plus le travail du compresseur est réduit et plus le COP est élevé (COP = 4,8 à 35°C contre COP = 2,5 à 65°C).",
        },
      ],
    },

    {
      id: 20,
      key: 'practical_case',
      title: "Cas pratique — Conception BEPOS d'un complexe sportif municipal",
      icon: '🔧',
      type: 'practical',
      scenario: "Complexe sportif de 3 000 m² (Besoins de chauffage et ECS = 150 000 kWh/an, Électricité = 40 000 kWh/an).",
      description: "Installation de géothermie sur pieux + 400 m² de panneaux PV.",
      resolution_latex_1: "\\text{Chauffage PAC (COP 4,5) : } W_{\\text{élec}} = \\frac{150\\,000}{4{,}5} = 33\\,333 \\text{ kWh/an}",
      resolution_latex_2: "\\text{Production PV (80 kWc) : } E_{\\text{pv}} = 80 \\times 1250 \\times 0{,}80 = 80\\,000 \\text{ kWh/an}",
      resolution_latex_3: "\\text{Bilan Net : } 80\\,000 - (33\\,333 + 40\\,000) = +6\\,667 \\text{ kWh/an (Bâtiment BEPOS positive)}",
      conclusion: "Complexe certifié BEPOS avec surplus électrique revendu au réseau.",
    },

    {
      id: 21,
      key: 'summary',
      title: "Résumé exécutif — Énergies & Performance en 6 points",
      icon: '📋',
      type: 'summary',
      content: `### Les Énergies en 6 points clés

1. **BEPOS (RE2020)** : Bâtiment produisant plus d'énergie qu'il n'en consomme ($E_{produite} > E_{consommée}$).
2. **Géothermie sur Pieux** : Utilisation des fondations béton pour échanger avec le sol à 12-14°C.
3. **Pompes à Chaleur (PAC)** : Rendement caractérisé par le $COP = Q_{restituée} / W_{élec} \ge 4{,}0$.
4. **Geocooling** : Rafraîchissement estival ultra-économique par circulation directe dans le sol.
5. **Solaire Photovoltaïque** : Production $E = P_{crête} \\cdot H \\cdot PR$ (1 kWc $\\approx 5\\\\text{ m}^2$).
6. **Smart Grids** : Pilotage intelligent de l'autoconsommation et de la recharge électrique.`,
    },

    {
      id: 22,
      key: 'key_points',
      title: "Points clés à mémoriser — Énergies",
      icon: '⭐',
      type: 'keypoints',
      points: [
        "COP de PAC géothermique ≥ 4,0 (75% d'énergie gratuite du sol)",
        "Pieux géothermiques : 40 à 60 W/m de pieu",
        "Geocooling : rafraîchissement estival sans compresseur",
        "Photovoltaïque : 1 kWc ≈ 5 m² de panneaux ≈ 1 000-1 400 kWh/an",
        "Démarche Négawatt : Sobriété -> Efficacité -> EnR",
      ],
    },

    {
      id: 23,
      key: 'self_assessment',
      title: "Auto-évaluation — Énergies Renouvelables",
      icon: '🏆',
      type: 'self_assessment',
      description: "Validez vos compétences en efficacité énergétique et EnR :",
      objectives: [
        "Je comprends le fonctionnement du COP d'une PAC et la géothermie sur pieux",
        "Je sais calculer la production annuelle d'une centrale photovoltaïque",
        "Je maîtrise les concepts de bâtiment BEPOS et de Geocooling passif",
        "J'ai résolu les 3 exercices d'énergies renouvelables avec succès",
        "J'ai obtenu 3/3 au quiz d'énergies et performance",
      ],
    },
  ],

  quickQuiz: {
    question: "Quelle est la production électrique annuelle d'une installation PV de 10 kWc recevant 1 200 kWh/m²/an avec un PR = 0,80 ?",
    options: [
      { id: 'a', label: "A) 9 600 kWh/an" },
      { id: 'b', label: "B) 12 000 kWh/an" },
      { id: 'c', label: "C) 15 000 kWh/an" },
    ],
    correct: 'a',
    explanation: "E = 10 kWc × 1200 × 0,80 = 9 600 kWh/an.",
  },
};
