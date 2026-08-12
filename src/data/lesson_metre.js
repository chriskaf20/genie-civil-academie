// ── Lesson: Métré, Subventions & Estimation des Coûts — Module 25 ───────────
export const lesson_metre = {
  moduleId: 25,
  slug: 'metre',
  lessonIndex: 1,
  title: "Métré, Étude de Prix, Devis Quantitatif Estimatif & Subventions",
  subtitle: "Module 25 — Métré, Subventions & Estimation des Coûts",
  level: 'Intermédiaire',
  duration: '35h',
  diagramType: 'bridge_structure',
  tags: ['Métré', 'BPU', 'DQE', 'DPGF', 'BT01', 'TP01', 'Sous-détail de prix', 'DETR', 'Subventions'],

  steps: [
    {
      id: 1,
      key: 'definition',
      title: "Définition — Le Métré et l'Évaluation Financière des Projets",
      icon: '📖',
      type: 'definition',
      fr: 'Métré, Étude de Prix, DPGF & Montage des Dossiers de Subventions',
      en: 'Quantity Surveying, Cost Estimation & Public Grants',
      metier: "Pratiquée par les économistes de la construction, métreurs-vérificateurs, ingénieurs étude de prix et responsables de marchés publics en collectivités territoriales.",
      content: `Le **métré** est l'art de quantifier avec précision les ouvrages élémentaires de bâtiment et de génie civil à partir des plans de conception (avant-métré) ou du projet exécuté sur le terrain (métré d'exécution), afin de déterminer le coût global de la construction.

### Les 3 grands documents financiers du projet de BTP :
1. **Le Bordereau des Prix Unitaires (BPU)** : Liste détaillée de tous les prix unitaires hors taxes (ex: $m^3$ de béton $= 140.00\\text{ €}$, $kg$ d'acier $= 1.85\\text{ €}$) appliquée dans les marchés à prix unitaires.
2. **Le Devis Quantitatif Estimatif (DQE)** : Document multipliant les quantités estimées de l'avant-métré par les prix du BPU pour obtenir le montant total du marché.
3. **La Décomposition du Prix Global et Forfaitaire (DPGF)** : Ventilation par lots (Gros Œuvre, Étanchéité, VRD) appliquée dans les marchés à prix forfaitaire.

### Actualisation & Révision des Prix par Index BTP :
Les marchés publics et privés prévoient des clauses d'indexation pour protéger les entreprises contre l'inflation des matériaux (acier, énergie, ciment) via les index nationaux **BT01** (bâtiment) et **TP01 / TP09** (travaux publics).

> 💡 **Le rôle stratégique des subventions** : Pour une maîtrise d'ouvrage publique (communes, EPCI), un projet d'infrastructure peut être subventionné de **50% à 80%** par l'État (DETR, DSIL) et l'Europe (FEDER). Le métré précis est le justificatif technique obligatoire !`,
    },

    {
      id: 2,
      key: 'importance',
      title: "Pourquoi le métré rigoureux conditionne la survie du projet",
      icon: '⚠️',
      type: 'importance',
      content: `Une erreur d'omission de métré ou une mauvaise sous-estimation des sous-détails de prix plonge immédiatement l'entreprise dans le déficit ou bloque l'obtention des financements publics.

- **Évitement du ruinement financier** : Une erreur de $20\\%$ sur le quantitatif des aciers ou du béton d'une dalle de $5\\,000\\text{ m}^2$ efface l'intégralité de la marge bénéficiaire.
- **Transparence lors des réclamations & avenants** : En cas de travaux modificatifs exigés par le maître d'ouvrage, les prix unitaires du BPU servent de référence légale pour chiffrer les avenants.
- **Éligibilité aux subventions publiques (DETR / DSIL / FCTVA)** : Les dossiers de demande de subventions publiques exigent une estimation détaillée rigoureuse visée par un économiste.
- **Révision des prix en période d'inflation** : Savoir appliquer la formule de révision de prix avec les index BT/TP protège la trésorerie lors des chantiers s'étalant sur plusieurs années.

> ⚠️ **Règle d'or** : "Toujours utiliser la minute de métré normalisée (Décomposition par ouvrage élémentaire : Désignation, Nombre, Longueur, Largeur, Hauteur/Épaisseur, Quantité positive/négative)."`,
    },

    {
      id: 3,
      key: 'applications',
      title: "Applications terrain — Outils & Cas d'étude",
      icon: '🏗️',
      type: 'applications',
      examples: [
        {
          context: "Avant-Métré de Gros Œuvre sur Plan de Coffrage",
          text: "Décomposition et calcul des volumes de béton de fondations, voiles banchés, poteaux, poutres et dalles avec déduction des trémies et réservations.",
        },
        {
          context: "Sous-Détail de Prix Unitaire (Matériaux, MO, Matériel)",
          text: "Calcul du coût de revient d'un m³ de béton coulé en place en additionnant le béton prêt à l'emploi (BPE), la main-d'œuvre de coulage et l'amortissement du toupie/pompe.",
        },
        {
          context: "Calcul de Révision de Prix par l'Index BT01 / TP01",
          text: "Réévaluation mensuelle des acompte de travaux en fonction de l'évolution des indices nationaux entre le mois zéro ($I_0$) et le mois d'exécution ($I$).",
        },
        {
          context: "Dossier de Subvention DETR / DSIL (Collectivités Territoriales)",
          text: "Montage du plan de financement prévisionnel pour la construction d'un groupe scolaire ou d'un réseau d'assainissement avec récupération de la FCTVA (16,404%).",
        },
        {
          context: "Extraction des Métrés BIM 5D depuis une maquette IFC",
          text: "Utilisation de logiciels spécialisés (Attic+, QuickDecomp) pour lier automatiquement la maquette 3D aux lignes de prix du BPU.",
        },
        {
          context: "Mémoire de Réclamation & Décompte Général Définitif (DGD)",
          text: "Établissement du décompte final des travaux intégrant les quantitatifs réels mesurés sur chantier et les pénalités de retard éventuelles.",
        },
      ],
    },

    {
      id: 4,
      key: 'theory',
      title: "Théorie — Sous-détail de Prix, Index BT/TP & Subventions Publics",
      icon: '📐',
      type: 'theory',
      diagramType: 'bridge_structure',
      content: `### 1. La Structure d'un Sous-Détail de Prix Unitaire (PV_HT)

Le Prix Unitaire Hors Taxes ($PV_{HT}$) d'un ouvrage élémentaire se calcule à partir de son **Déboursé Sec (DS)** :

$$DS = \\text{Frais de Matériaux (Matière + Transport)} + \\text{Main-d'Œuvre Directe (H_{MO} \\times DHO)} + \\text{Matériel affecté}$$

$$PV_{HT} = DS \\times K_v \\qquad \\text{avec } K_v = \\frac{1 + \\frac{FC}{DS}}{1 - (FG + B)}$$

- $FC$ = Frais de chantier (% du DS), $FG$ = Frais généraux (% du PV), $B$ = Bénéfice & Aléas (% du PV).

### 2. Formule de Révision des Prix (Index BT / TP)

Pour réviser un acompte mensuel $M$ établi au mois $t$ par rapport au mois d'origine $t_0$ du marché :

$$M_{révisé} = M \\cdot \\left[ a + b \\cdot \\frac{I_t}{I_0} \\right]$$

- $a$ = partie fixe non révisable (généralement $a = 0{,}125$ soit 12,5%).
- $b$ = partie révisable ($b = 1 - a = 0{,}875$).
- $I_0$ = valeur de l'index (BT01, TP01, TP09) au mois de référence du marché ($t_0$).
- $I_t$ = valeur du même index au mois d'exécution des prestations ($t$).

### 3. Plan de Financement Public & Subventions
Dans les collectivités publiques, le coût HT est financé par :

$$\\text{Montant TTC} = \\text{Montant HT} \\times (1 + \\text{TVA}) \\qquad (\\text{TVA = 20\\%})$$
$$\\text{FCTVA (Fonds de Compensation pour la TVA)} = \\text{Montant TTC} \\times 16{,}404\\%$$

$$\\text{Subvention Éligible} = \\text{Montant HT} \\times \\%_{\\text{Taux de subvention (DETR / DSIL / Région)}}$$`,
    },

    {
      id: 5,
      key: 'formulas',
      title: "Formules essentielles — Métré, Index & Coefficients de Prix",
      icon: '🔢',
      type: 'formulas',
      diagramType: 'bridge_structure',
      formulas: [
        {
          name: "Calcul du Coefficient de Vente Kv",
          latex: "K_v = \\frac{1 + \\frac{FC}{DS}}{1 - (FG + B)}",
          description: "DS = Déboursé Sec, FC = Frais de chantier, FG = Frais généraux, B = Bénéfice et aléas.",
        },
        {
          name: "Formule de révision des prix avec partie fixe",
          latex: "P = P_0 \\cdot \\left( 0{,}125 + 0{,}875 \\cdot \\frac{I_t}{I_0} \\right)",
          description: "P0 = Prix initial du marché, I0 = Index au mois de remise de l'offre (t0), It = Index au mois d'exécution (t).",
        },
        {
          name: "Calcul de la FCTVA (Fonds de Compensation pour la TVA)",
          latex: "\\text{FCTVA} = \\text{Dépense TTC} \\times 16{,}404\\% = (\\text{Dépense HT} \\times 1{,}20) \\times 0{,}16404",
          description: "Mécanisme par lequel l'État rembourse la TVA grevant les dépenses d'investissement des collectivités locales.",
        },
        {
          name: "Calcul du Sous-Détail d'un béton armé complet par m³",
          latex: "DS_{m^3} = C_{b\\acute{e}ton} + (Ratio_{acier} \\times C_{acier}) + (Ratio_{coff} \\times C_{coff}) + (TU_{pose} \\times DHO)",
          description: "Intègre le coût du béton frais BPE, des armatures façonnées, du coffrage amorti et de la main-d'œuvre de coulage.",
        },
        {
          name: "Coefficient de foisonnement des terres (f)",
          latex: "V_{foisonn\\acute{e}} = V_{en\\,place} \\times (1 + f) \\qquad (f \\approx 20\\% \\text{ à } 30\\% \\text{ pour terres végétales et argiles})",
          description: "Le foisonnement augmente le volume de terre à transporter par camion après excavation.",
        },
        {
          name: "Reste à charge net pour une collectivité locale",
          latex: "\\text{Reste à Charge} = \\text{Co\\hat{u}t TTC} - \\text{FCTVA} - \\sum \\text{Subventions (DETR + DSIL + Région)}",
          description: "Montant net financé par l'autofinancement ou l'emprunt de la commune.",
        },
      ],
    },

    {
      id: 6,
      key: 'stepbystep',
      title: "Calcul complet — Révision de prix d'un acompte & Plan de financement de subventions",
      icon: '🔬',
      type: 'stepbystep',
      problem: "Une commune fait construire une salle polyvalente dont le montant initial HT est M_HT = 800 000 € (TVA 20% = 160 000 €, M_TTC = 960 000 €). Le marché d'entreprise comprend une clause de révision de prix sur l'index BT01 (m0 : I0 = 125,0 ; mois d'exécution : I_t = 135,0 avec a = 0,125 partie fixe). Par ailleurs, le projet bénéficie d'une subvention DETR à 35% du montant HT initial et d'une subvention Région à 20% du montant HT initial. 1) Calculer le coefficient de révision C_rev et le montant révisé M_HT_révisé. 2) Calculer le montant de la FCTVA récupérée par la commune (16,404% du TTC). 3) Calculer les subventions DETR et Région. 4) Déterminer le reste à charge net final pour la commune.",
      steps_demo: [
        { n: 1, text: "Calcul du coefficient de révision C_rev : C_rev = 0,125 + 0,875 × (135,0 / 125,0) = 0,125 + 0,875 × 1,0800 = 0,125 + 0,945 = 1,0700 (Hausse de 7,0%)" },
        { n: 2, text: "Calcul du montant HT révisé des travaux : M_HT_révisé = 800 000 € × 1,0700 = 856 000 €" },
        { n: 3, text: "Calcul du montant TTC révisé : M_TTC_révisé = 856 000 € × 1,20 = 1 027 200 €" },
        { n: 4, text: "Calcul du FCTVA récupéré par la commune : FCTVA = 1 027 200 € × 16,404% = 168 501,89 €" },
        { n: 5, text: "Calcul des subventions (sur le montant initial HT éligible) : DETR (35%) = 800 000 € × 0,35 = 280 000 € | Région (20%) = 800 000 € × 0,20 = 160 000 €" },
        { n: 6, text: "Total des subventions obtenues : Total_subv = 280 000 + 160 000 = 440 000 € (55% du montant HT)" },
        { n: 7, text: "Calcul du Reste à Charge Net pour la commune : Reste_à_Charge = M_TTC_révisé - FCTVA - Total_subv = 1 027 200 € - 168 501,89 € - 440 000 € = 418 698,11 €." },
      ],
      result_latex: "C_{rev} = \\textbf{1{,}0700 (+7\\%)} \\qquad M_{TTC,r\\acute{e}vis\\acute{e}} = \\textbf{1 027 200 \\euro} \\qquad \\text{Reste \\grave{a} Charge Net} = \\textbf{418 698{,}11 \\euro} \\quad \\checkmark",
    },

    {
      id: 7,
      key: 'units',
      title: "Unités & Acronymes du Métré & Financement — Tableau de référence",
      icon: '📏',
      type: 'units',
      table: [
        { grandeur: "BPU (Bordereau des Prix Unitaires)", si: "€/unités (€/m³, €/m², €/ml, €/u, €/t)", imperial: "$/units", conversion: "Liste exhaustive des prix unitaires applicables au marché" },
        { grandeur: "DQE / DPGF", si: "Montant total en € HT et € TTC", imperial: "$ Total", conversion: "Devis Quantitatif Estimatif / Décomposition du Prix Global et Forfaitaire" },
        { grandeur: "Index BT01 (Bâtiment Tous Corps d'État)", si: "Base 100 en janvier 2010", imperial: "CCI Index", conversion: "Index national de référence pour la révision des prix du bâtiment" },
        { grandeur: "Index TP01 (Travaux Publics)", si: "Base 100 en janvier 2010", imperial: "CCI Index", conversion: "Index national de référence pour la révision des prix de génie civil/VRD" },
        { grandeur: "DETR / DSIL", si: "Subventions publiques (20% à 80% du HT)", imperial: "Grants", conversion: "Dotation d'Équipement des Territoires Ruraux / Dotation de Soutien à l'Investissement Local" },
        { grandeur: "FCTVA", si: "16,404% du montant TTC engagé", imperial: "Tax Return", conversion: "Fonds de Compensation pour la TVA reversé aux collectivités locales à A+1 ou A+2" },
      ],
      note: "⚠️ ATTENTION : Les subventions publiques (DETR, DSIL) sont calculées sur le montant **HORS TAXES (HT)** des dépenses éligibles, tandis que la FCTVA s'applique sur le montant **TOUTES TAXES COMPRISES (TTC)** !",
    },

    {
      id: 8,
      key: 'hypotheses',
      title: "Hypothèses & règles de mesurage",
      icon: '📋',
      type: 'hypotheses',
      items: [
        { type: 'info', text: "Normes de mesurage (NF P 03-001) : Les ouvertures (baies, fenêtres) de surface $< 1{,}00\\text{ m}^2$ ne sont pas déduites du métré de coffrage et d'enduit (règle du vide pour plein)." },
        { type: 'info', text: "Décomposition WBS (Work Breakdown Structure) : Le métré doit suivre le découpage arborescent du projet : Lot $\\to$ Niveau $\\to$ Ouvrage Élémentaire $\\to$ Local." },
        { type: 'warning', text: "ATTENTION : Marché à Prix Forfaitaire vs Prix Unitaires. En marché forfaitaire (DPGF), l'entreprise s'engage sur le montant global : une erreur d'avant-métré reste à sa charge !" },
        { type: 'warning', text: "Masse des aciers de béton armé : Calculée avec le poids théorique linéique des barres $\\Phi^2 / 162\\text{ kg/m}$ en ajoutant les longueurs de recouvrement ($50\\Phi$) et $5\\%$ de chutes." },
        { type: 'tip', text: "Foisonnement des terres : Distinguer le volume de déblai en place ($V_p$), le volume foisonné transporté par camion ($V_f = V_p \\times 1{,}25$) et le volume compacté en remblai ($V_c = V_p \\times 0{,}90$)." },
        { type: 'warning', text: "N'omettez jamais d'inclure les frais d'installation de chantier (FC) et le coût du compte prorata (1 à 2% du montant des lots) dans le sous-détail de prix !" },
      ],
    },

    {
      id: 9,
      key: 'simple_examples',
      title: "Exemples guidés — Métré & Sous-détails de prix",
      icon: '✏️',
      type: 'examples_simple',
      examples: [
        {
          title: "Exemple 1 : Métré d'une semelle filante en béton armé",
          given: "Semelle filante de longueur L = 25,0 m, largeur b = 0,80 m, hauteur h = 0,40 m. Dosage béton = 350 kg/m³",
          find: "Le volume de béton V_béton et la surface de coffrage des joues S_coff",
          solution_latex: "V_{b\\acute{e}ton} = 25{,}0 \\times 0{,}80 \\times 0{,}40 = 8{,}00 \\text{ m}^3 \\qquad S_{coff} = 2 \\times (25{,}0 \\times 0{,}40) = 20{,}00 \\text{ m}^2",
          result: "Volume de béton = 8,00 m³ | Surface de coffrage = 20,00 m².",
        },
        {
          title: "Exemple 2 : Calcul du sous-détail de prix d'un m³ de béton prêt à l'emploi (BPE)",
          given: "Prix toupie BPE livrée = 110 €/m³. Main-d'œuvre de coulage = 0,40 h/m³ à DHO = 35 €/h. Pompe à béton = 12 €/m³. Coef Kv = 1,25",
          find: "Le Déboursé Sec (DS) et le Prix de Vente HT (PV_HT) du m³ de béton coulé",
          solution_latex: "DS = 110 + (0{,}40 \\times 35) + 12 = 110 + 14 + 12 = 136{,}00 \\text{ \\euro/m}^3 \\qquad PV_{HT} = 136{,}00 \\times 1{,}25 = 170{,}00 \\text{ \\euro/m}^3",
          result: "DS = 136,00 €/m³ | Prix de Vente HT = 170,00 €/m³.",
        },
        {
          title: "Exemple 3 : Calcul de la révision de prix simple d'un acompte",
          given: "Acompte mensuel M = 50 000 € HT. Index initial I0 = 120,0, Index du mois It = 129,6 (hausse de 8%). Clause sans partie fixe (b = 1,00)",
          find: "Le montant révisé de l'acompte M_révisé et la plus-value de révision",
          solution_latex: "M_{r\\acute{e}vis\\acute{e}} = 50\\,000 \\times \\frac{129{,}6}{120{,}0} = 50\\,000 \\times 1{,}080 = 54\\,000 \\text{ \\euro}",
          result: "Acompte révisé = 54 000 € (Plus-value de révision de prix = +4 000 €).",
        },
      ],
    },

    {
      id: 10,
      key: 'real_examples',
      title: "Exemple réel — Dossier de subventions pour un centre aquatique municipal",
      icon: '🏢',
      type: 'examples_real',
      diagramType: 'bridge_structure',
      examples: [
        {
          context: "Construction d'un centre aquatique intercommunal de 6,5 M€ HT",
          scenario: "Montage du plan de financement par l'économiste de la collectivité. Obtention de 40% de DSIL (État), 15% du Conseil Régional et 10% du Conseil Départemental, soit 65% de subventions publiques totales.",
          decomposition_latex: "\\text{Montant HT : } 6{,}50 \\text{ M\\euro} \\quad \\Rightarrow \\quad \\text{Subventions : } 4{,}225 \\text{ M\\euro} \\quad | \\quad \\text{FCTVA : } 1{,}279 \\text{ M\\euro}",
          lesson: "Le calcul rigoureux de l'avant-métré et la distinction exacte des équipements éligibles ont permis de sécuriser 4,225 M€ d'aides non remboursables, réduisant le reste à charge net de la collectivité à 2,296 M€ TTC.",
        },
      ],
    },

    {
      id: 11,
      key: 'diagrams',
      title: "Schéma d'une Minute de Métré & Cascade d'Étude de Prix",
      icon: '📊',
      type: 'interactive_diagram',
      diagramType: 'bridge_structure',
      description: "Visualisez la structure d'une minute de métré normalisée, la cascade de calcul du Prix de Vente HT (DS $\\to$ FC $\\to$ FG $\\to$ B $\\to$ PV) et la courbe d'évolution des index BTP BT01/TP01.",
      diagram_description: [
        "Minute de Métré : Colonnes Repère, Désignation, Unité, Nombre, Longueur, Largeur, Hauteur, Quantité partielle et Totale",
        "Cascade d'étude de prix : Du Déboursé Sec (DS) au Prix de Vente HT avec application du coefficient Kv",
        "Courbe d'indexation BT01 / TP01 : Impact de l'inflation des matériaux sur le décompte mensuel des travaux",
      ],
    },

    {
      id: 12,
      key: 'mistakes',
      title: "Erreurs classiques & piégées en Métré et Étude de Prix",
      icon: '⛔',
      type: 'mistakes',
      items: [
        {
          mistake: "Confondre unités de mesurage BPU (m², m³, kg, ml)",
          trap: "Prendre le prix d'un treillis soudé en $m^2$ alors que le bordereau BPU l'attend en $kg$ ou en $tonnes$",
          fix: "Toujours vérifier scrupuleusement les unités définies dans la désignation du BPU avant de multiplier par les quantitatifs de l'avant-métré.",
        },
        {
          mistake: "Oublier de compter les chutes et recouvrements dans le métré d'armatures",
          trap: "Calculer la masse théorique stricte des aciers en ignorant les recouvrements de $50\\Phi$ et les pertes de coupe ($5\\%\\text{ à } 10\\%$)",
          fix: "Ajouter impérativement une majoration forfaitaire pour recouvrements et chutes (généralement $+10\\%$ sur les aciers de béton armé).",
        },
        {
          mistake: "Appliquer la révision de prix avec le mauvais index BTP",
          trap: "Utiliser l'index bâtiment BT01 pour un marché de terrassage et réseaux VRD au lieu de l'index TP01 / TP09",
          fix: "Chaque lot technique possède son index spécifique (ex: BT40 pour la charpente métallique, TP09 pour les enrobés routiers). Vérifier le CCAP du marché.",
        },
        {
          mistake: "Omettre le décalage de versement de la FCTVA dans le plan de trésorerie",
          trap: "Compter sur le versement immédiat de la FCTVA pour payer les entreprises de travaux",
          fix: "La FCTVA est versée par l'État aux collectivités avec un décalage de 2 ans (régime de droit commun) ou 1 an. Prévoir un emprunt de relais de trésorerie.",
        },
      ],
    },

    {
      id: 13,
      key: 'tips',
      title: "Astuces de l'économiste de la construction & métreur",
      icon: '💡',
      type: 'tips',
      tips: [
        "Métré rapide des voiles banchés : Compter séparément la surface de béton ($m^3 = S \\times e$) et la surface de coffrage ($m^2 = 2 \\times S$).",
        "Règle du vide pour plein : En maçonnerie et enduits, les ouvertures $< 1,00\\text{ m}^2$ (petites fenêtres, passages de gaines) ne se déduisent pas car le surcoût de façonnage des tableaux compense le matériau non posé.",
        "Ratio rapide de ferraillage pour chiffrage estimatif : Dalle pleine $= 80\\text{ kg/m}^3$ | Voile banché $= 70\\text{ kg/m}^3$ | Poteau/Poutre BA $= 120\\text{ kg/m}^3$ | Semelle $= 50\\text{ kg/m}^3$.",
        "BIM 5D & QTO (Quantity Take-Off) : Utiliser des règles de mappage automatique entre les catégories IFC (IfcWall, IfcSlab) et le BPU pour extraire les métrés sans saisie manuelle.",
        "Optimisation des dossiers DETR : Déposer les demandes de subventions auprès de la Préfecture AVANT tout commencement d'exécution des travaux (règle du caractère incitatif de l'aide publique).",
        "Logiciels de métré et d'étude de prix de référence : JustMétré, Attic+, QuickDecomp, Devisoc, BPwin, Geswint.",
      ],
    },

    {
      id: 14,
      key: 'normes',
      title: "Normes & Réglementations — Métré & Marchés Publics",
      icon: '📜',
      type: 'norms',
      norms: [
        { code: "Code de la Commande Publique (Loi MOP)", description: "Règles relatives au suivi financier, acomptes, avenants et décomptes finaux des marchés publics de travaux." },
        { code: "NF P 03-001 / CCAG Travaux", description: "Cahier des clauses administratives générales applicables aux marchés de travaux (Règles de métré et de règlement)." },
        { code: "NF P 03-010", description: "Mode de mesurage des ouvrages de bâtiment — Principes généraux et règles d'établissement des minutes de métré." },
        { code: "Circulaire de l'INSEE sur les Index BT/TP", description: "Publication mensuelle officielle des index nationaux du bâtiment et des travaux publics." },
        { code: "Code Général des Collectivités Territoriales (CGCT)", description: "Règles d'attribution des dotations et subventions d'équipement (DETR, DSIL) et du FCTVA." },
        { code: "Standard COBie / IFC5D", description: "Format de données structuré pour l'extraction automatique des métrés et coûts dans la maquette BIM." },
      ],
    },

    {
      id: 15,
      key: 'exercises',
      title: "Exercices Métré & Étude de Prix — 3 niveaux",
      icon: '✍️',
      type: 'exercises',
      exercises: [
        {
          id: 'ex_met_1',
          number: 1,
          difficulty: 'Facile',
          text: "Calculer le volume de déblai en place V_p et le volume foisonné transporté par camion V_f d'une fouille en rigole de 40 m de long, 0,60 m de large et 0,80 m de profondeur (Taux de foisonnement f = 25%).",
          hint: "V_p = L × b × h. V_f = V_p × (1 + f).",
          answer_latex: "V_p = 40{,}0 \\times 0{,}60 \\times 0{,}80 = 19{,}20 \\text{ m}^3 \\qquad V_f = 19{,}20 \\times (1 + 0{,}25) = 24{,}00 \\text{ m}^3",
          answer_text: "Volume en place V_p = 19,20 m³ | Volume foisonné à évacuer V_f = 24,00 m³",
        },
        {
          id: 'ex_met_2',
          number: 2,
          difficulty: 'Moyen',
          text: "Un sous-détail de prix pour un m² de cloison en plaques de plâtre donne un Déboursé Sec DS = 28,00 €/m². Calculer le Prix de Vente HT (PV_HT) sachant que les Frais de Chantier FC = 10% du DS, les Frais Généraux FG = 8% du PV et le Bénéfice B = 4% du PV.",
          hint: "Kv = (1 + FC/DS) / (1 - (FG + B)) = 1,10 / (1 - 0,12). PV_HT = DS × Kv.",
          answer_latex: "K_v = \\frac{1{,}10}{0{,}88} = 1{,}250 \\qquad PV_{HT} = 28{,}00 \\times 1{,}250 = 35{,}00 \\text{ \\euro/m}^2",
          answer_text: "Coefficient Kv = 1,250 | Prix de Vente HT = 35,00 €/m²",
        },
        {
          id: 'ex_met_3',
          number: 3,
          difficulty: 'Difficile',
          text: "Une commune réalise un projet de voirie de 500 000 € HT. Le marché est subventionné par la DETR à 40% du HT et par le Département à 20% du HT. La commune récupère la FCTVA à 16,404% du montant TTC (TVA 20%). Calculer le Reste à Charge Net de la commune en euros.",
          hint: "TTC = HT × 1,20. FCTVA = TTC × 16,404%. Subventions = 60% du HT.",
          answer_latex: "M_{TTC} = 500\\,000 \\times 1{,}20 = 600\\,000 \\text{ \\euro} \\qquad \\text{FCTVA} = 600\\,000 \\times 0{,}16404 = 98\\,424 \\text{ \\euro}",
          answer_latex: "\\text{Subventions} = 500\\,000 \\times (0{,}40 + 0{,}20) = 300\\,000 \\text{ \\euro} \\qquad \\text{Reste à Charge} = 600\\,000 - 98\\,424 - 300\\,000 = 201\\,576 \\text{ \\euro}",
          answer_text: "Montant TTC = 600 000 € | FCTVA = 98 424 € | Subventions = 300 000 € | Reste à Charge Net = 201 576 €.",
        },
      ],
    },

    {
      id: 16,
      key: 'corrections',
      title: "Corrections détaillées",
      icon: '✅',
      type: 'corrections',
      note: "Retrouvez les formules complètes d'avant-métré, de révision d'index et de montage de subventions en cliquant sur 'Voir la correction'.",
    },

    {
      id: 17,
      key: 'quiz',
      title: "Quiz Métré, Subventions & Coûts — 3 questions",
      icon: '🎯',
      type: 'quiz',
      questions: [
        {
          id: 'q_met_1',
          question: "Quel document d'un marché public réunit la liste des prix unitaires applicables à chaque ouvrage élémentaire ?",
          options: [
            { id: 'a', text: "Le CCTP" },
            { id: 'b', text: "Le Bordereau des Prix Unitaires (BPU)" },
            { id: 'c', text: "Le PPSPS" },
            { id: 'd', text: "Le PV de réception" },
          ],
          correct: 'b',
          explanation: "Le BPU (Bordereau des Prix Unitaires) est le document contractuel qui établit les tarifs unitaires de chaque prestation (au m³, m², kg, etc.).",
        },
        {
          id: 'q_met_2',
          question: "Sur quelle base financière s'appliquent principalement les subventions publiques aux collectivités (DETR, DSIL) ?",
          options: [
            { id: 'a', text: "Sur le montant TTC des travaux" },
            { id: 'b', text: "Sur le montant HORS TAXES (HT) des dépenses éligibles" },
            { id: 'c', text: "Sur le chiffre d'affaires de l'entreprise" },
            { id: 'd', text: "Sur le bénéfice net" },
          ],
          correct: 'b',
          explanation: "Les subventions de l'État (DETR, DSIL) et des Régions sont calculées sur le montant Hors Taxes (HT) des dépenses éligibles du projet.",
        },
        {
          id: 'q_met_3',
          question: "Quel index national de l'INSEE est utilisé pour réviser les prix des marchés de bâtiment tous corps d'état ?",
          options: [
            { id: 'a', text: "L'index TP01" },
            { id: 'b', text: "L'index BT01" },
            { id: 'c', text: "Le SMIC" },
            { id: 'd', text: "L'indice CAC 40" },
          ],
          correct: 'b',
          explanation: "L'index BT01 (Bâtiment Tous Corps d'État) est l'index officiel de référence utilisé pour actualiser et réviser les prix des marchés de bâtiment.",
        },
      ],
    },

    {
      id: 18,
      key: 'exam_questions',
      title: "Questions d'examen — Niveau BTS / Licence Économiste de la Construction",
      icon: '🎓',
      type: 'exam',
      questions: [
        "Démontrez la méthode d'établissement d'une minute de métré pour les ouvrages de fondation et de structure d'un bâtiment R+2. Expliquez les règles de mesurage pour la déduction des baies et trémies.",
        "Exposez le mécanisme complet de révision des prix d'un marché public de travaux par la formule polynomiale avec partie fixe. Comment traite-t-on le décalage de publication des index BT/TP ?",
        "Détaillez la structure d'un plan de financement pour un ouvrage public (Commune, EPCI). Expliquez la différence entre les subventions d'investissement (DETR, DSIL, FEDER) et la récupération de la FCTVA.",
        "Présentez le rôle du BIM 5D (Quantity Take-Off / QTO). Comment s'effectue la liaison automatique entre les Psets d'une maquette numérique IFC et les lignes d'un Devis Quantitatif Estimatif (DQE) ?",
      ],
    },

    {
      id: 19,
      key: 'interview_questions',
      title: "Questions d'entretien — Économiste de la Construction / Métreur",
      icon: '💼',
      type: 'interview',
      questions: [
        {
          question: "Lors d'un marché à Prix Global et Forfaitaire (DPGF), l'entreprise s'aperçoit qu'elle a oublié de chiffrer 200 m² de voiles banchés figurant sur le plan de coffrage. Peut-elle réclamer un avenant au maître d'ouvrage ?",
          answer_hint: "Non ! En marché à prix forfaitaire (article 1793 du Code Civil), la DPGF n'a qu'une valeur explicative. L'entreprise s'engage sur la réalisation complète de l'ouvrage décrit dans les plans et le CCTP pour le prix global convenu. L'erreur d'omission de métré reste à sa charge exclusive (sauf si les plans ont été modifiés après la signature du marché).",
        },
        {
          question: "Comment calcule-t-on le coefficient de foisonnement des terres lors du métré de terrassement ?",
          answer_hint: "Le foisonnement est l'augmentation de volume provoquée par la décompression du sol lors de l'excavation. Volume foisonné V_f = V_en_place × (1 + f). Le taux f varie de 10-15% pour les sables à 25-30% pour les argiles et terres végétales. Ce volume foisonné conditionne le nombre de rotation de camions de transport.",
        },
        {
          question: "Qu'est-ce que le FCTVA et quel est son taux de remboursement pour les collectivités locales ?",
          answer_hint: "Le FCTVA (Fonds de Compensation pour la TVA) est une dotation d'État qui rembourse aux collectivités territoriales la TVA grevant leurs dépenses d'investissement. Le taux forfaitaire légal est de 16,404% du montant TTC engagé (ce qui équivaut exactement à restituer 100% de la TVA à 20% sur la base HT).",
        },
      ],
    },

    {
      id: 20,
      key: 'practical_case',
      title: "Cas pratique — Montage financier et métré d'une médiathèque municipale",
      icon: '🔧',
      type: 'practical',
      scenario: "Étude de cas — Montage du plan de financement et sous-détail de prix pour la construction d'une médiathèque de 1 200 m² (Montant estimé = 2 400 000 € HT)",
      description: `**Mise en situation** : Économiste de la construction. Montage du dossier de consultation (DPGF) et du plan de subventions : DETR (30% du HT), DSIL (20% du HT), FCTVA (16,404% du TTC).`,
      resolution_latex_1: "\\text{Montant TTC : } 2\\,400\\,000 \\times 1{,}20 = 2\\,880\\,000 \\text{ \\euro} \\quad | \\quad \\text{FCTVA : } 2\\,880\\,000 \\times 0{,}16404 = 472\\,435 \\text{ \\euro}",
      resolution_latex_2: "\\text{Subventions : } \\text{DETR (30\\%)} = 720\\,000 \\text{ \\euro} \\quad + \\quad \\text{DSIL (20\\%)} = 480\\,000 \\text{ \\euro} = 1\\,200\\,000 \\text{ \\euro}",
      resolution_latex_3: "\\text{Reste à Charge Net Commune : } 2\\,880\\,000 - 472\\,435 - 1\\,200\\,000 = 1\\,207\\,565 \\text{ \\euro} \\quad (41{,}9\\% \\text{ du TTC})",
      conclusion: "Plan de financement validé. Les subventions et la FCTVA financent 58,1% du coût TTC global. Le reste à charge net de 1,207 M€ est financé par emprunt à 20 ans.",
    },

    {
      id: 21,
      key: 'summary',
      title: "Résumé exécutif — Métré & Coûts en 6 points",
      icon: '📋',
      type: 'summary',
      content: `### Le Métré & l'Économie de la Construction en 6 fondamentaux

1. **Pièces du Marché** : BPU (Prix unitaires), DQE (Devis quantitatif estimatif), DPGF (Décomposition forfaitaire).
2. **Minute de Métré** : Décomposition normalisée par ouvrage élémentaire (Désignation, N, L, l, h, Quantité).
3. **Sous-Détail de Prix** : $PV_{HT} = DS \\times K_v$ avec $DS = \\text{Matériaux} + \\text{MO} + \\text{Matériel}$.
4. **Révision des Prix** : $P = P_0 (a + b \\cdot I_t/I_0)$ par les index nationaux BT01 (bâtiment) et TP01 (travaux publics).
5. **Subventions Publics** : DETR, DSIL, FEDER calculées en $\%$ du montant **HORS TAXES (HT)** des dépenses éligibles.
6. **FCTVA** : Remboursement automatique de $16{,}404\\%$ du montant **TTC** engagé par les collectivités.`,
    },

    {
      id: 22,
      key: 'key_points',
      title: "Points clés à mémoriser — Métré & Subventions",
      icon: '⭐',
      type: 'keypoints',
      points: [
        "Unité de mesurage : Toujours vérifier si le BPU exige des m², m³, kg ou unités",
        "Prix de Vente HT : PV_HT = DS × Kv (Kv intègre Frais de chantier, Frais généraux et Bénéfice)",
        "Révision des prix : Protectrice contre l'inflation des matériaux via les index BT01 / TP01",
        "Marché à prix forfaitaire (DPGF) : L'entreprise s'engage sur le montant global (erreurs à sa charge)",
        "Les subventions publiques (DETR/DSIL) sont calculées sur le HT, la FCTVA sur le TTC",
        "FCTVA : Taux légal de remboursement de 16,404% du montant TTC d'investissement",
        "BIM 5D : Extraction automatique des quantitatifs depuis la maquette numérique IFC",
      ],
    },

    {
      id: 23,
      key: 'self_assessment',
      title: "Auto-évaluation — Métré, Subventions & Coûts",
      icon: '🏆',
      type: 'self_assessment',
      description: "Validez vos compétences en métré, étude de prix et subventions publiques :",
      objectives: [
        "Je sais rédiger une minute de métré normalisée (décomposition par ouvrage élémentaire)",
        "Je maîtrise le calcul du sous-détail de prix et du coefficient de vente Kv",
        "Je sais différencier les marchés à Prix Unitaires (BPU/DQE) et à Prix Forfaitaire (DPGF)",
        "Je sais appliquer la formule de révision des prix avec les index BT01 et TP01",
        "Je sais monter un plan de financement public avec subventions (DETR, DSIL) et FCTVA",
        "Je comprends les règles de mesurage (règle du vide pour plein, foisonnement des terres)",
        "J'ai résolu les 3 exercices de métré et subventions avec succès",
        "J'ai obtenu 3/3 au quiz de métré et coûts",
      ],
    },
  ],

  quickQuiz: {
    question: "Dans les collectivités territoriales, sur quel montant s'applique le remboursement du FCTVA (16,404%) ?",
    options: [
      { id: 'a', label: "A) Sur le montant HORS TAXES (HT)" },
      { id: 'b', label: "B) Sur le montant TOUTES TAXES COMPRISES (TTC) engagé en investissement" },
      { id: 'c', label: "C) Sur le bénéfice de l'entreprise" },
    ],
    correct: 'b',
    explanation: "La FCTVA (Fonds de Compensation pour la TVA) s'applique au taux forfaitaire de 16,404% sur le montant TTC des dépenses d'investissement des collectivités locales.",
  },
};
