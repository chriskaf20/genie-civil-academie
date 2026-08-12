// ── Lesson: Adaptation au Changement Climatique — Module 31 ─────────────────
export const lesson_climat = {
  moduleId: 31,
  slug: 'climat',
  lessonIndex: 1,
  title: "Adaptation des Infrastructures au Changement Climatique & Résilience",
  subtitle: "Module 31 — Climat, Risques Climatiques & Résilience des Ouvrages",
  level: 'Avancé',
  duration: '35h',
  diagramType: 'soil_profile',
  tags: ['Climat', 'Résilience', 'GIEC', 'RGA', 'Inondation', 'Pluie Centennale', 'Adaptation', 'SFN'],

  steps: [
    {
      id: 1,
      key: 'definition',
      title: "Définition — Changement Climatique & Résilience des Infrastructures",
      icon: '📖',
      type: 'definition',
      fr: 'Adaptation aux Événements Extrêmes, Aléas Climatiques & Solutions Fondées sur la Nature',
      en: 'Climate Change Adaptation, Infrastructure Resilience & Nature-Based Solutions',
      metier: "Pratiquée par les ingénieurs en risques naturels, experts en résilience climatique des réseaux, ingénieurs hydrauliciens et aménageurs du territoire.",
      content: `L'**adaptation des infrastructures au changement climatique** est l'ensemble des études, réorientations de conception et travaux d'aménagement visant à rendre les ouvrages du génie civil (bâtiments, ponts, digues, réseaux d'assainissement, routes) résilients face aux nouvelles conditions climatiques extrêmes prévues par le GIEC à l'horizon 2050-2100.

### Les 4 grands aléas climatiques majeurs pour le génie civil :
1. **L'Intensification des Pluies Extrêmes & Inondations** : Augmentation des précipitations intenses selon la loi de Clausius-Clapeyron ($+7\\%$ d'humidité atmosphérique par $^\\circ\\text{C}$ de réchauffement).
2. **Le Retrait-Gonflement des Argiles (RGA)** : Sécheresses prolongées entraînant des tassements différentiels dévastateurs sous les fondations superficielles des bâtiments.
3. **Les Vagues de Chaleur Caniculaires** : Surchauffe urbaine (îlots de chaleur urbains ICU) et dégradation accélérée des enrobés routiers et bétons.
4. **La Montée du Niveau Moyen de la Mer & Submersions** : Érosion des littoraux et risque de submersion marine des ouvrages portuaires et côtiers.

> 💡 **Le concept de Résilience** : La capacité d'une infrastructure à absorber un choc climatique extrême, à poursuivre ou rétablir rapidement son fonctionnement et à s'adapter durablement.`,
    },

    {
      id: 2,
      key: 'importance',
      title: "Pourquoi l'ingénierie doit abandonner l'hypothèse de stationnarité",
      icon: '⚠️',
      type: 'importance',
      content: `Historiquement, les normes de calcul (Eurocodes, formules de pluviométrie) reposaient sur l'hypothèse de stationnarité : le climat futur serait identique au climat passé. Cette hypothèse est désormais fausse.

- **Pérennité des ouvrages à longue durée de vie** : Un pont ou une digue construite aujourd'hui sera encore en service en 2100. Sa conception doit intégrer les températures et crues de 2100 !
- **Protection contre le sinistre n°1 des maisons (RGA)** : Le retrait-gonflement des argiles représente la 1ère cause d'indemnisation sécheresse en France (plus de 1 milliard d'euros par an).
- **Infrastructures d'assainissement** : Les bassins de rétention dimensionnés sur les pluies de 1980 débordent sous les orages cévenols ou méditerranéens actuels.

> ⚠️ **Règle d'or** : "Anticiper l'aléa climatique dès le stade de l'avant-projet ! Utiliser les projections climatiques DRIAS Météo-France pour concevoir les structures sous les scénarios GIEC SSP2-4.5 et SSP5-8.5."`,
    },

    {
      id: 3,
      key: 'applications',
      title: "Applications terrain — Stratégies & Dispositifs de résilience",
      icon: '🏗️',
      type: 'applications',
      examples: [
        {
          context: "Protection contre le Retrait-Gonflement des Argiles (RGA)",
          text: "Approfondissement des fondations superficielles à au moins 1,50 m, trottoirs périphériques étanches anti-évaporation et écrans anti-racines.",
        },
        {
          context: "Solutions Fondées sur la Nature (SFN) pour l'Eau de Pluie",
          text: "Désimperméabilisation des cours d'écoles, création de noues paysagères drainantes et jardins de pluie pour recharger les nappes sans engorger les tuyaux.",
        },
        {
          context: "Surélévation & Confortement des Digues de Mer",
          text: "Rehaussement des couronnements de digues et renforcement des perrés face à la montée des eaux (+0,80 m) et au déferlement des vagues de tempête.",
        },
        {
          context: "Lutte contre les Îlots de Chaleur Urbains (ICU)",
          text: "Utilisation d'enrobés clairs réfléchissants (albédo élevé), végétalisation des toitures et façades pour faire baisser la température de surface de 5°C.",
        },
        {
          context: "Stabilisation des Versants Alpins sous Fonte du Permafrost",
          text: "Ancrage profond par tirants et filets pare-blocs renforcés sur les routes de montagne face aux écroulements rocheux liés au réchauffement.",
        },
      ],
    },

    {
      id: 4,
      key: 'theory',
      title: "Théorie — Loi de Clausius-Clapeyron & Retrait-Gonflement des Argiles",
      icon: '📐',
      type: 'theory',
      diagramType: 'soil_profile',
      content: `### 1. La Loi de Clausius-Clapeyron (Intensification des Pluies)

La pression de vapeur de saturation de l'eau dans l'air augmente de façon exponentielle avec la température $T$ (en Kelvin) :

$$\\frac{dP_{sat}}{dT} = \\frac{L_v \\cdot P_{sat}}{R_{v} \\cdot T^2} \\quad \\implies \\quad \\frac{\\Delta P_{sat}}{P_{sat}} \\approx +7\\% \\text{ par } ^\\circ\\text{C}$$

- Un réchauffement de $+2^\\circ\\text{C}$ entraîne une capacité de transport en eau de l'atmosphère supérieure de **$+14\\%$**, provoquant des pics d'intensité pluvieuse $i(T)$ d'une violence inédite.

### 2. Mécanisme du Retrait-Gonflement des Argiles (RGA)

Dans les sols argileux gonflants (smectites, montmorillonites) :
- **En période de sécheresse** : Évaporation importante de l'eau interstitielle $\\to$ retrait du sol $\\to$ affaissement sous fondation.
- **En période de réhumectation** : Absorption d'eau $\\to$ gonflement du sol $\\to$ soulèvement inégal de la structure.
- **Tassement différentiel engendré** :

$$\\Delta s = s_{max} - s_{min} \\quad \\implies \\quad \\text{Si } \\Delta s > 15 \\text{ mm}, \\text{ fissuration traversante des voiles.}$$

### 3. Surélévation des Ouvrages Maritimes

La côte d'arase minimale $Z_{digue}$ d'une digue maritime intègre le niveau des plus hautes mers ($MHWN$), la surcote météo ($S_m$), la montée climatique ($SLR$) et le jet de rive ($R_{runup}$) :

$$Z_{digue} = MHWN + S_m + \\Delta Z_{SLR} + R_{runup} + \\text{Marge}_{sécurité}$$`,
    },

    {
      id: 5,
      key: 'formulas',
      title: "Formules essentielles — Risques Climatiques & Résilience",
      icon: '🔢',
      type: 'formulas',
      diagramType: 'soil_profile',
      formulas: [
        {
          name: "Amplification des précipitations intenses (Clausius-Clapeyron)",
          latex: "i_{\\text{futur}}(T) = i_{\\text{actuel}}(T) \\cdot (1 + 0{,}07 \\cdot \\Delta T_{\\text{globe}})",
          description: "i = intensité de la pluie centennale en mm/h, ΔT_globe = élévation de température moyenne prévue par le scénario GIEC.",
        },
        {
          name: "Profondeur minimale de fondation sous risque RGA (NF P 94-261)",
          latex: "D_{\\text{ancrage}} \\ge 0{,}80 \\text{ m (Zone nord/courante)} \\quad | \\quad D_{\\text{ancrage}} \\ge 1{,}50 \\text{ m (Zone RGA fort / sud)}",
          description: "Assure un ancrage sous la zone de dessiccation saisonnière du sol argileux.",
        },
        {
          name: "Calcul de l'albédo et température de surface d'un revêtement",
          latex: "T_{\\text{surface}} = T_{\\text{air}} + \\frac{\\alpha_{\\text{absorb}} \\cdot I_{\\text{solaire}} - \\varepsilon \\sigma T^4}{h_c}",
          description: "Un albédo élevé (revêtement clair α_absorb = 0,2) réduit la température de surface de 20°C par rapport à l'asphalte noir (α_absorb = 0,9).",
        },
        {
          name: "Débit de pointe de ruissellement (Méthode Rationnelle)",
          latex: "Q_p = C \\cdot i(T) \\cdot A \\quad [\\text{m}^3\\text{/s}]",
          description: "C = coefficient de ruissellement (C=0,9 en ville imperméabilisée, C=0,2 en noue végétalisée), i = intensité pluvieuse, A = surface du bassin versant.",
        },
      ],
    },

    {
      id: 6,
      key: 'stepbystep',
      title: "Calcul complet — Redimensionnement d'un bassin d'orage sous pluie climatique intense",
      icon: '🔬',
      type: 'stepbystep',
      problem: "Un bassin de rétention d'eaux pluviales urbain a été dimensionné pour stocker V0 = 2 000 m³ sur la base d'une pluie decennale historique d'intensité i0 = 60 mm/h (durée 1 heure, surface imperméabilisée A = 50 000 m², C = 0,80). Les nouvelles projections climatiques DRIAS prévoient une augmentation de température ΔT = +2,5°C pour 2050 (Augmentation de l'intensité de 7% par °C selon Clausius-Clapeyron). 1) Calculer la nouvelle intensité pluvieuse i_futur. 2) Calculer le nouveau volume de ruissellement V_futur. 3) Déterminer le volume supplémentaire ΔV de stockage requis pour éviter l'inondation de la ville.",
      steps_demo: [
        { n: 1, text: "Calcul du facteur d'amplification climatique : Facteur = 1 + (0,07 × 2,5°C) = 1 + 0,175 = 1,175 (+17,5% d'intensité)" },
        { n: 2, text: "Calcul de la nouvelle intensité pluvieuse i_futur : i_futur = 60 mm/h × 1,175 = 70,5 mm/h" },
        { n: 3, text: "Calcul du nouveau volume de ruissellement V_futur : V_futur = C × (i_futur / 1000) × A × 1h = 0,80 × 0,0705 m × 50 000 m² = 2 820 m³" },
        { n: 4, text: "Calcul du volume supplémentaire nécessaire ΔV : ΔV = V_futur - V0 = 2 820 m³ - 2 000 m³ = +820 m³" },
        { n: 5, text: "Préconisation d'aménagement : Aménager une noue végétalisée complémentaire de 820 m³ en amont (Solution Fondée sur la Nature SFN) pour absorber ce surcroît sans casser les canalisations existantes." },
      ],
      result_latex: "i_{\\text{futur}} = \\textbf{70{,}5 mm/h} \\qquad V_{\\text{futur}} = \\textbf{2 820 m}^3 \\qquad \\Delta V_{\\text{requis}} = \\textbf{+820 m}^3 \\quad \\checkmark",
    },

    {
      id: 7,
      key: 'units',
      title: "Unités & Indicateurs de Résilience Climatique — Tableau de référence",
      icon: '📏',
      type: 'units',
      table: [
        { grandeur: "Élévation du niveau de la mer (SLR)", si: "m ou cm (Projections 2100 : +0,50 m à +1,10 m)", imperial: "ft", conversion: "Pris en compte pour la rehausse des quai et digues" },
        { grandeur: "Indice de Plasticité de l'Argile Ip", si: "Pourcentage [%]", imperial: "%", conversion: "Ip > 25% → Sol très plastique hautement sensible au RGA" },
        { grandeur: "Albédo surfacique α", si: "Adimensionnel (0,0 à 1,0)", imperial: "-", conversion: "Asphalte noir α ≈ 0,05-0,10 | Béton clair α ≈ 0,35-0,45 | Peinture blanche α > 0,80" },
        { grandeur: "Courbe IDF (Intensité-Durée-Fréquence)", si: "mm/h en fonction de la durée (min/h)", imperial: "in/hr", conversion: "Caractérise la violence des précipitations pour une période de retour T" },
        { grandeur: "Débit de ruissellement Q_p", si: "m³/s ou L/s", imperial: "cfs", conversion: "1 m³/s = 1000 L/s" },
      ],
      note: "💡 ASTUCE : Le Retrait-Gonflement des Argiles (RGA) ne touche QUE les **fondations superficielles**. Les fondations profondes par pieux ancrées dans la marne saine à 8 m de profondeur sont totalement insensibles au RGA !",
    },

    {
      id: 8,
      key: 'hypotheses',
      title: "Hypothèses & principes de conception résiliente",
      icon: '📋',
      type: 'hypotheses',
      items: [
        { type: 'info', text: "L'analyse de résilience doit combiner l'exposition de l'ouvrage (localisation géographique), sa vulnérabilité (sensibilité aux températures/eau) et sa capacité d'adaptation." },
        { type: 'info', text: "Les projections Météo-France DRIAS fournissent les données climatiques régionalisées sous les scénarios GIEC SSP1-2.6, SSP2-4.5 et SSP5-8.5." },
        { type: 'warning', text: "ATTENTION : En zone RGA fort, ne jamais planter d'arbres à grande frondation (chênes, peupliers) à une distance inférieure à la hauteur adulte de l'arbre par rapport aux fondations !" },
        { type: 'warning', text: "Surconsommation des climatiseurs : Concevoir des bâtiments avec protection solaire extérieure (brise-soleil orientables BSO), isolation extérieure et forte inertie pour éviter la climatisation active." },
        { type: 'tip', text: "Trottoir périphérique étanche RGA : Poser une géomembrane ou une dallette béton étanche de 1,50 m de large tout autour de la maison pour maintenir un taux d'humidité constant sous les fondations." },
      ],
    },

    {
      id: 9,
      key: 'simple_examples',
      title: "Exemples guidés — Pluie extrême & Température de surface",
      icon: '✏️',
      type: 'examples_simple',
      examples: [
        {
          title: "Exemple 1 : Calcul de surélévation d'un quai portuaire",
          given: "Marée haute extrême actuelle MHWN = +4,20 m. Niveau de submersion tempête Sm = +0,80 m. Montée des eaux 2100 ΔZ_SLR = +0,85 m. Marge de sécurité = 0,50 m",
          find: "La cote minimale d'arase du nouveau quai Z_quai",
          solution_latex: "Z_{quai} = 4{,}20 + 0{,}80 + 0{,}85 + 0{,}50 = +6{,}35 \\text{ m (NGF)}",
          result: "La cote d'arase du quai doit être fixée à +6,35 m NGF.",
        },
        {
          title: "Exemple 2 : Amplification de la pluie centennale pour +3°C",
          given: "Pluie centennale actuelle i = 90 mm/h. Hausse de température ΔT = +3,0°C. Clausius-Clapeyron = +7%/°C",
          find: "La nouvelle intensité pluvieuse i_futur",
          solution_latex: "i_{futur} = 90 \\times (1 + 0{,}07 \\times 3{,}0) = 90 \\times 1{,}21 = 108{,}9 \\text{ mm/h}",
          result: "Intensité pluvieuse amplifiée à 108,9 mm/h (+21%).",
        },
        {
          title: "Exemple 3 : Économie d'eau de ruissellement par désimperméabilisation",
          given: "Une cour d'école de 2 000 m² entièrement enrobée (C = 0,90) est transformée en jardin de pluie infiltrant (C = 0,15) sous une pluie de 50 mm",
          find: "Le volume d'eau épargné au réseau d'assainissement",
          solution_latex: "\\Delta V = (0{,}90 - 0{,}15) \\times 0{,}050 \\text{ m} \\times 2000 \\text{ m}^2 = 0{,}75 \\times 100 = 75 \\text{ m}^3",
          result: "Volume de 75 m³ d'eau directement infiltré dans le sol au lieu de surcharger le tuyau !",
        },
      ],
    },

    {
      id: 10,
      key: 'real_examples',
      title: "Exemple réel — La Réaménagement des Quais de la Garonne à Bordeaux",
      icon: '🏢',
      type: 'examples_real',
      diagramType: 'soil_profile',
      examples: [
        {
          context: "Aménagement des berges du fleuve soumises aux marées et crues amplifiées par le changement climatique",
          scenario: "Création de parcs urbains inondables (zones tampons) absorbant les crues sans dégâts sur les constructions. Matériaux perméables et végétation ripisylve.",
          decomposition_latex: "\\text{Capacité de rétention de la zone tampon : } 45\\,000 \\text{ m}^3 \\text{ d'eau de crue sans aucun ouvrage en béton}",
          lesson: "La résilience par des Solutions Fondées sur la Nature (SFN) s'avère 3 fois moins chère et plus durable que l'élévation de murs de protection rigides en béton.",
        },
      ],
    },

    {
      id: 11,
      key: 'diagrams',
      title: "Schéma du mécanisme RGA & Noue végétalisée SFN",
      icon: '📊',
      type: 'interactive_diagram',
      diagramType: 'soil_profile',
      description: "Visualisez le phénomène de dessiccation des argiles sous fondation superficielle (RGA) et le principe de fonctionnement d'une noue paysagère d'infiltration SFN.",
      diagram_description: [
        "Retrait-Gonflement des Argiles (RGA) : Zone de dessiccation estivale sous le niveau de fondation créant un vide et une fissure en biseau",
        "Noue Végétalisée SFN : Profil en travers avec couche de terre végétale, massif filtrant et drain de trop-plein",
        "Courbe d'amplification des pluies : Comparaison des courbes IDF actuelles et projetées sous le scénario GIEC",
      ],
    },

    {
      id: 12,
      key: 'mistakes',
      title: "Erreurs fatales en Ingénierie de l'Adaptation au Climat",
      icon: '⛔',
      type: 'mistakes',
      items: [
        {
          mistake: "Dimensionner une fondation en sol argileux à seulement 0,50 m de profondeur",
          trap: "Considérer que la profondeur d'ancrage 'hors gel' de 0,50 m suffit en zone argileuse",
          fix: "En zone RGA moyen à fort, l'ancrage doit descendre à au moins 1,50 m (voir 2,0 m) pour dépasser la zone de dessiccation estivale !",
        },
        {
          mistake: "Tout bétonner pour 'se protéger' des inondations (Effet boomerang)",
          trap: "Canaliser les ruisseaux dans des coursiers béton fermés",
          fix: "Le béton accélère la vitesse de l'eau ($v \\propto 1/n_{manning}$) et reporte une crue dévastatrice et incontrôlable sur la commune située en aval ! Utiliser des zones d'expansion de crue naturelles.",
        },
        {
          mistake: "Planter des arbres très près des murs de fondation en sol gonflant",
          trap: "Mettre des saules ou peupliers à 3 m d'une maison sur sol argileux",
          fix: "Les racines pompent des centaines de litres d'eau par jour en été, créant une cuvette de dessiccation locale dramatique sous les semelles.",
        },
      ],
    },

    {
      id: 13,
      key: 'tips',
      title: "Astuces de l'expert en Résilience Climatique",
      icon: '💡',
      type: 'tips',
      tips: [
        "Portail DRIAS Météo-France : Utiliser systématiquement la plateforme officielle DRIAS pour télécharger les projections de températures et précipitations locales à horizon 2050/2100.",
        "Diagnostic de vulnérabilité RGA rapide : Consulter la carte interactive du risque RGA sur Georisques.gouv.fr avant tout projet d'extension ou de construction individuelle.",
        "Amélioration de l'albédo urbain : Employer des granulats clairs (calcaire, quartzite) sur les enrobés et les toitures pour réduire le stockage de chaleur diurne de 15°C.",
        "Noues d'infiltration : Prévoir une pente douce des berges (1/3) et une profondeur de 30 à 50 cm maximum pour garantir la sécurité des piétons et faciliter l'entretien fauche.",
      ],
    },

    {
      id: 14,
      key: 'normes',
      title: "Normes & Réglementations — Climat & Résilience",
      icon: '📜',
      type: 'norms',
      norms: [
        { code: "Loi Climat & Résilience (2021)", description: "Loi française portant lutte contre le dérèglement climatique et renforcement de la résilience (Objectif ZAN : Zéro Artificialisation Nette)." },
        { code: "NF P 94-261 (Annexe RGA)", description: "Justification des fondations superficielles — Prescriptions particulières relatives au Retrait-Gonflement des Argiles." },
        { code: "NF EN ISO 14090", description: "Adaptation au changement climatique — Principes, exigences et lignes directrices pour les infrastructures." },
        { code: "Arrêté du 22 juillet 2020", description: "Règlementation relative à la prévention des désordres créés par le retrait-gonflement des sols argileux." },
      ],
    },

    {
      id: 15,
      key: 'exercises',
      title: "Exercices Adaptation & Climat — 3 niveaux",
      icon: '✍️',
      type: 'exercises',
      exercises: [
        {
          id: 'ex_cli_1',
          number: 1,
          difficulty: 'Facile',
          text: "Calculer l'augmentation de l'intensité de pluie centennale pour un réchauffement global de ΔT = +2,0°C d'après la loi de Clausius-Clapeyron (+7%/°C). La pluie actuelle vaut i = 70 mm/h.",
          hint: "i_futur = i × (1 + 0,07 × ΔT).",
          answer_latex: "i_{futur} = 70 \\times (1 + 0{,}07 \\times 2{,}0) = 70 \\times 1{,}14 = 79{,}80 \\text{ mm/h}",
          answer_text: "Nouvelle intensité pluvieuse i_futur = 79,8 mm/h (+14%).",
        },
        {
          id: 'ex_cli_2',
          number: 2,
          difficulty: 'Moyen',
          text: "Quelle doit être la profondeur minimale de fondation d'une maison construite sur sol argileux très plastique (Ip = 32%) située dans le sud de la France sous la norme NF P 94-261 ?",
          hint: "Zone RGA fort = 1,50 m minimum.",
          answer_latex: "D_{ancrage} \\ge 1{,}50 \\text{ m (sous le niveau du sol fini)}",
          answer_text: "Profondeur minimale d'ancrage = 1,50 m.",
        },
        {
          id: 'ex_cli_3',
          number: 3,
          difficulty: 'Difficile',
          text: "Un parking de 10 000 m² à un coefficient de ruissellement C = 0,90. On remplace 40% de sa surface par des pavés réducteurs d'infiltration perméables (C = 0,20). Calculer le nouveau coefficient de ruissellement moyen C_moyen du parking.",
          hint: "C_moyen = (0,60 × 0,90) + (0,40 × 0,20).",
          answer_latex: "C_{moyen} = 0{,}54 + 0{,}08 = 0{,}62",
          answer_text: "Nouveau coefficient de ruissellement C_moyen = 0,62 (Réduction du ruissellement de 31%).",
        },
      ],
    },

    {
      id: 16,
      key: 'corrections',
      title: "Corrections détaillées",
      icon: '✅',
      type: 'corrections',
      note: "Retrouvez la démarche complète des études de résilience climatique et de dimensionnement des SFN en cliquant sur 'Voir la correction'.",
    },

    {
      id: 17,
      key: 'quiz',
      title: "Quiz Adaptation & Climat — 3 questions",
      icon: '🎯',
      type: 'quiz',
      questions: [
        {
          id: 'q_cli_1',
          question: "Selon la loi de Clausius-Clapeyron, de combien augmente la capacité de stockage d'humidité de l'atmosphère par degré de réchauffement ?",
          options: [
            { id: 'a', text: "Environ +1%" },
            { id: 'b', text: "Environ +7% par °C de réchauffement" },
            { id: 'c', text: "Elle ne varie pas" },
          ],
          correct: 'b',
          explanation: "La loi de Clausius-Clapeyron établit qu'une atmosphère plus chaude de 1°C contient environ 7% d'humidité supplémentaire, intensifiant les pluies extrêmes.",
        },
        {
          id: 'q_cli_2',
          question: "Quelle est la cause principale des désordres de fissuration par Retrait-Gonflement des Argiles (RGA) sur les maisons ?",
          options: [
            { id: 'a', text: "Le poids des tuiles" },
            { id: 'b', text: "Des fondations superficielles trop peu profondes (ex: < 0,80 m) subissant les variations d'humidité du sol argileux entre sécheresse et pluie" },
            { id: 'c', text: "Le gel d'hiver uniquement" },
          ],
          correct: 'b',
          explanation: "En sécheresse, l'argile se rétracte sous les fondations trop peu profondes ; en réhumectation, elle gonfle. Ces mouvements alternés provoquent des tassements différentiels dévastateurs.",
        },
        {
          id: 'q_cli_3',
          question: "Qu'appelle-t-on une 'Solution Fondée sur la Nature' (SFN) en gestion des eaux pluviales ?",
          options: [
            { id: 'a', text: "Un gros tuyau en béton armé" },
            { id: 'b', text: "Un aménagement paysager naturel (noue, jardin de pluie, bassin végétalisé) qui infiltre et ralentit l'eau sans tuyaux en béton" },
            { id: 'c', text: "Une pompe à eau diesel" },
          ],
          correct: 'b',
          explanation: "Les SFN utilisent le pouvoir d'infiltration et de rétention de la végétation et des sols naturels pour gérer les eaux pluviales à la source.",
        },
      ],
    },

    {
      id: 18,
      key: 'exam_questions',
      title: "Questions d'examen — Master Climat & Génie Civil",
      icon: '🎓',
      type: 'exam',
      questions: [
        "Présentez la méthodologie d'analyse de vulnérabilité d'un réseau routier face aux aléas de glissements de terrain et laves torrentielles sous projections GIEC.",
        "Démontrez la formule d'hydrogramme de crue et le dimensionnement d'un bassin d'orage à ciel ouvert sous contraintes de ruissellement urbain.",
      ],
    },

    {
      id: 19,
      key: 'interview_questions',
      title: "Questions d'entretien — Ingénieur Résilience Climatique",
      icon: '💼',
      type: 'interview',
      questions: [
        {
          question: "Comment convaincre un maître d'ouvrage de dépenser 10% de plus pour adapter une infrastructure à un climat futur incertain à 50 ans ?",
          answer_hint: "Utiliser l'Analyse en Coût Global (LCC). Dépenser 10% de plus au stade de la construction évite un sinistre majeur ou une reconstruction complète de plusieurs millions d'euros lors de la première crue centennale ou sécheresse majeure. C'est une assurance financière à long terme.",
        },
      ],
    },

    {
      id: 20,
      key: 'practical_case',
      title: "Cas pratique — Plan d'adaptation parasismique et climatique d'une commune côtière",
      icon: '🔧',
      type: 'practical',
      scenario: "Commune littorale de 15 000 habitants menacée par la submersion marine (+0,80 m à 2100) et des inondations de ruissellement.",
      description: "Conception d'une digue promenade paysagère et d'un réseau de noues d'infiltration SFN.",
      resolution_latex_1: "Z_{digue,rehaussée} = +6{,}20 \\text{ m NGF (Surélévation de } +1{,}10 \\text{ m)}",
      resolution_latex_2: "\\text{Surface de noues SFN créées : } 12\\,000 \\text{ m}^2 \\implies 100\\% \\text{ des pluies trentennales infiltrées à la source}",
      conclusion: "Projet validé et subventionné à 70% par le Fonds Vert de l'État.",
    },

    {
      id: 21,
      key: 'summary',
      title: "Résumé exécutif — L'Adaptation Climatique en 6 points",
      icon: '📋',
      type: 'summary',
      content: `### L'Adaptation Climatique en 6 points clés

1. **Abandon de la stationnarité** : Concevoir les ouvrages sous les climats futurs du GIEC (2050/2100).
2. **Loi de Clausius-Clapeyron** : $+7\\%$ d'humidité et d'intensité de pluie par $^\\circ\\text{C}$ de réchauffement.
3. **Risque RGA** : Ancrage des fondations superficielles $\\ge 1{,}50\\text{ m}$ en sol argileux gonflant.
4. **Solutions Fondées sur la Nature (SFN)** : Noues et jardins de pluie privilégiés au tout béton.
5. **Montée des eaux** : Surélévation des quais et digues ($+0{,}50\\text{ à } +1{,}10\\text{ m}$).
6. **Réduction des Îlots de Chaleur** : Albédo élevé, végétalisation et isolation à forte inertie.`,
    },

    {
      id: 22,
      key: 'key_points',
      title: "Points clés à mémoriser — Climat",
      icon: '⭐',
      type: 'keypoints',
      points: [
        "Clausius-Clapeyron : +7% d'humidité atmosphérique par °C",
        "RGA : Ancrage fondation ≥ 1,50 m dans les argiles",
        "SFN : Noues végétalisées pour infiltrer à la source",
        "Albédo clair = réduction de 20°C en surface",
        "Plateforme DRIAS Météo-France pour les projections climatiques",
      ],
    },

    {
      id: 23,
      key: 'self_assessment',
      title: "Auto-évaluation — Adaptation Climatique",
      icon: '🏆',
      type: 'self_assessment',
      description: "Validez vos compétences en ingénierie de l'adaptation au climat :",
      objectives: [
        "Je sais calculer l'amplification des pluies extrêmes par la loi de Clausius-Clapeyron",
        "Je maîtrise les préconisations de fondation sous risque RGA (NF P 94-261)",
        "Je sais dimensionner des Solutions Fondées sur la Nature (SFN) de gestion pluviale",
        "J'ai résolu les 3 exercices d'adaptation climatique avec succès",
        "J'ai obtenu 3/3 au quiz climat et résilience",
      ],
    },
  ],

  quickQuiz: {
    question: "De combien l'intensité des pluies extrêmes augmente-t-elle environ pour un réchauffement de +2°C selon la loi de Clausius-Clapeyron ?",
    options: [
      { id: 'a', label: "A) +2%" },
      { id: 'b', label: "B) +14%" },
      { id: 'c', label: "C) +50%" },
    ],
    correct: 'b',
    explanation: "7% par °C × 2°C = +14% d'augmentation de l'humidité et de l'intensité des précipitations.",
  },
};
