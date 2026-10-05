// ── Lesson: Chimie des Matériaux de Construction — Module 3 ─────────────────────
export const lesson_chimie = {
  moduleId: 3,
  slug: 'chimie',
  lessonIndex: 1,
  title: "Chimie des Matériaux : Hydratation du Ciment, Carbonatation & Corrosion des Armatures",
  subtitle: "Module 03 — Chimie théorique & Chimie des matériaux",
  level: 'Débutant',
  duration: '25h',
  diagramType: 'process_flow',
  tags: ['Chimie', 'Ciment', 'Clinker', 'Hydratation', 'Carbonatation', 'Corrosion', 'pH', 'Durabilité'],

  steps: [
    {
      id: 1,
      key: 'definition',
      title: "Définition — La chimie au service du béton et de l'acier",
      icon: '📖',
      type: 'definition',
      fr: "Chimie des matériaux de construction (liants, bétons, aciers)",
      en: 'Construction Materials Chemistry',
      metier: "Utilisée par les ingénieurs matériaux, les laboratoires de contrôle, les ingénieurs durabilité et les experts en pathologie des ouvrages.",
      content: `La **chimie des matériaux** explique pourquoi un béton durcit, pourquoi il protège ses armatures et pourquoi il se dégrade avec le temps. Elle relie la composition chimique d'un matériau à ses performances mécaniques et à sa **durabilité**.

### Les trois idées clés de ce module
1. **Le ciment durcit par réaction chimique avec l'eau** (hydratation), pas par séchage. Le béton gagne de la résistance même sous l'eau.
2. **Le béton est très basique** (pH d'environ 13) : ce milieu *passive* l'acier, qui ne rouille pas tant que le pH reste élevé.
3. **Le CO₂ de l'air et les chlorures** font baisser cette protection : c'est l'origine de la majorité des désordres des ouvrages en béton armé.

### La notation cimentière (notation de Bogue)
Les chimistes du ciment abrègent les oxydes par une lettre : $\\mathrm{C} = \\mathrm{CaO}$, $\\mathrm{S} = \\mathrm{SiO_2}$, $\\mathrm{A} = \\mathrm{Al_2O_3}$, $\\mathrm{F} = \\mathrm{Fe_2O_3}$, $\\mathrm{H} = \\mathrm{H_2O}$.

> 💡 Ainsi $\\mathrm{C_3S}$ désigne le silicate tricalcique $\\mathrm{3CaO \\cdot SiO_2}$, principal constituant du clinker.`,
    },

    {
      id: 2,
      key: 'importance',
      title: "Pourquoi la chimie est décisive pour l'ingénieur",
      icon: '⚠️',
      type: 'importance',
      content: `Un ouvrage bien calculé peut perdre sa capacité portante en quelques décennies si sa chimie est mal maîtrisée.

- **Durabilité** : la corrosion des armatures est la première cause de réparation des ouvrages en béton armé (ponts, parkings, façades, ouvrages maritimes).
- **Choix du ciment** : un ciment riche en $\\mathrm{C_3A}$ résiste mal aux sulfates ; un ciment au laitier (CEM III) limite la chaleur d'hydratation des pièces massives.
- **Formulation** : le rapport eau/ciment $E/C$ fixe la porosité, donc la résistance et la vitesse de pénétration des agents agressifs.
- **Climat** : la fabrication du clinker émet du CO₂ par décarbonatation du calcaire, une part majeure de l'empreinte carbone du béton.

> ⚠️ **À retenir** : la plupart des pathologies du béton (carbonatation, chlorures, sulfates, alcali-réaction) sont des réactions chimiques prévisibles et évitables dès la conception.`,
    },

    {
      id: 3,
      key: 'applications',
      title: "Applications sur le terrain",
      icon: '🏗️',
      type: 'applications',
      examples: [
        { context: "Choix des classes d'exposition (EN 206)", text: "Définir XC, XD, XS, XF ou XA selon l'environnement, puis en déduire le E/C maximal, le dosage minimal en liant et l'enrobage." },
        { context: "Diagnostic d'un parking", text: "Mesurer la profondeur de carbonatation à la phénolphtaléine et le taux de chlorures pour expliquer des éclatements de béton." },
        { context: "Ouvrage maritime", text: "Prescrire un ciment résistant à l'eau de mer (CEM III ou CEM V, PM/ES) et un enrobage renforcé." },
        { context: "Bétonnage de masse", text: "Limiter l'échauffement d'un radier épais avec un ciment à faible chaleur d'hydratation et un suivi de température." },
        { context: "Bilan carbone", text: "Comparer les émissions de CO₂ d'un CEM I et d'un CEM III/A pour réduire l'empreinte d'un projet." },
      ],
    },

    {
      id: 4,
      key: 'theory',
      title: "Théorie — Du clinker à la pâte de ciment durcie",
      icon: '📐',
      type: 'theory',
      diagramType: 'process_flow',
      content: `### 1. Composition du clinker Portland
Le clinker est obtenu par cuisson vers 1 450 °C d'un mélange calcaire (≈ 80 %) et argile (≈ 20 %). Il contient quatre phases :
- **Alite** $\\mathrm{C_3S}$ : 50 à 70 % — résistance au jeune âge.
- **Bélite** $\\mathrm{C_2S}$ : 15 à 30 % — résistance à long terme.
- **Aluminate** $\\mathrm{C_3A}$ : 5 à 10 % — prise rapide, très exothermique, sensible aux sulfates.
- **Ferrite** $\\mathrm{C_4AF}$ : 5 à 15 % — couleur grise.

Le gypse (sulfate de calcium) ajouté au broyage régule la prise du $\\mathrm{C_3A}$.

### 2. L'hydratation
Les silicates réagissent avec l'eau pour former les **C-S-H** (silicates de calcium hydratés, la « colle » du béton) et la **portlandite** $\\mathrm{CH} = \\mathrm{Ca(OH)_2}$ :

$$2\\,\\mathrm{C_3S} + 6\\,\\mathrm{H} \\longrightarrow \\mathrm{C_3S_2H_3} + 3\\,\\mathrm{CH}$$

$$2\\,\\mathrm{C_2S} + 4\\,\\mathrm{H} \\longrightarrow \\mathrm{C_3S_2H_3} + \\mathrm{CH}$$

### 3. Le milieu basique protecteur
La portlandite et les alcalins dissous donnent à la solution interstitielle un pH de 12,5 à 13,5. À ce pH, une couche d'oxyde très fine et stable se forme sur l'acier : c'est la **passivation**.

### 4. Les deux mécanismes de dépassivation
- **Carbonatation** : le CO₂ de l'air consomme la portlandite, le pH tombe vers 9 et l'acier n'est plus protégé.
- **Chlorures** : au-delà d'environ 0,4 % de la masse de ciment au droit de l'acier, les ions $\\mathrm{Cl^-}$ percent localement la couche passive (corrosion par piqûres).`,
    },

    {
      id: 5,
      key: 'formulas',
      title: "Formules et réactions essentielles",
      icon: '🔢',
      type: 'formulas',
      diagramType: 'process_flow',
      formulas: [
        {
          name: "Hydratation de l'alite (C₃S)",
          latex: "2\\,\\mathrm{C_3S} + 6\\,\\mathrm{H} \\longrightarrow \\mathrm{C_3S_2H_3} + 3\\,\\mathrm{CH}",
          description: "Formation des C-S-H (résistance) et de la portlandite (réserve basique). Réaction exothermique : environ 500 J par gramme de C₃S.",
          variables: [
            { symbol: '\\mathrm{C_3S}', name: 'Silicate tricalcique (alite)', unit: '-', role: 'Phase principale du clinker, responsable de la résistance au jeune âge.', category: 'Réactif' },
            { symbol: '\\mathrm{H}', name: 'Eau', unit: '-', role: 'Notation cimentière de $\\mathrm{H_2O}$.', category: 'Réactif' },
            { symbol: '\\mathrm{C_3S_2H_3}', name: 'Silicates de calcium hydratés (C-S-H)', unit: '-', role: 'Gel qui lie les granulats : source de la résistance du béton.', category: 'Produit' },
            { symbol: '\\mathrm{CH}', name: 'Portlandite Ca(OH)₂', unit: '-', role: 'Maintient le pH élevé qui protège les armatures.', category: 'Produit' },
          ],
          ruleOfThumb: "Plus le ciment contient de C₃S, plus il est résistant au jeune âge… et plus il chauffe : attention aux pièces massives.",
        },
        {
          name: "Réaction de carbonatation",
          latex: "\\mathrm{Ca(OH)_2} + \\mathrm{CO_2} \\longrightarrow \\mathrm{CaCO_3} + \\mathrm{H_2O}",
          description: "Le CO₂ de l'air consomme la portlandite : le pH chute d'environ 13 à 9 dans la zone carbonatée.",
          variables: [
            { symbol: '\\mathrm{Ca(OH)_2}', name: 'Portlandite', unit: '-', role: 'Base du béton, consommée par la carbonatation.', category: 'Réactif' },
            { symbol: '\\mathrm{CO_2}', name: 'Dioxyde de carbone', unit: '-', role: "Gaz de l'atmosphère (environ 0,04 % en volume, davantage en milieu urbain ou en parking).", category: 'Réactif' },
            { symbol: '\\mathrm{CaCO_3}', name: 'Carbonate de calcium', unit: '-', role: 'Produit neutre : il ne protège plus l\'acier.', category: 'Produit' },
          ],
          ruleOfThumb: "La carbonatation est la plus rapide pour une humidité relative de 50 à 70 % : un béton toujours sec ou toujours saturé carbonate très lentement.",
        },
        {
          name: "Profondeur de carbonatation (loi en racine du temps)",
          latex: "x_c = K \\sqrt{t}",
          description: "Le front de carbonatation progresse proportionnellement à la racine carrée du temps.",
          variables: [
            { symbol: 'x_c', name: 'Profondeur carbonatée', unit: '\\text{mm}', role: 'Distance entre le parement et le front de carbonatation.', category: 'Résultat' },
            { symbol: 'K', name: 'Coefficient de carbonatation', unit: '\\text{mm}/\\sqrt{\\text{an}}', role: 'Environ 1 à 2 pour un béton compact, 4 à 8 pour un béton poreux.', category: 'Matériau' },
            { symbol: 't', name: 'Âge du béton exposé', unit: '\\text{an}', role: "Durée d'exposition à l'air.", category: 'Temps' },
          ],
          ruleOfThumb: "Doubler l'enrobage multiplie par quatre la durée avant que le front n'atteigne l'acier.",
        },
        {
          name: "Loi de Faraday — masse d'acier corrodée",
          latex: "m = \\frac{M \\, I \\, t}{n \\, F}",
          description: "Masse de fer dissoute par un courant de corrosion I pendant une durée t.",
          variables: [
            { symbol: 'm', name: 'Masse de fer perdue', unit: '\\text{g}', role: "Masse d'acier transformée en rouille.", category: 'Résultat' },
            { symbol: 'M', name: 'Masse molaire du fer', unit: '\\text{g/mol}', role: '55,85 g/mol.', category: 'Constante' },
            { symbol: 'I', name: 'Courant de corrosion', unit: '\\text{A}', role: 'Mesurable par polarisation linéaire sur ouvrage.', category: 'Mesure' },
            { symbol: 't', name: 'Durée', unit: '\\text{s}', role: '1 an = 31 536 000 s.', category: 'Temps' },
            { symbol: 'n', name: "Nombre d'électrons échangés", unit: '-', role: '2 pour Fe → Fe²⁺ + 2e⁻.', category: 'Constante' },
            { symbol: 'F', name: 'Constante de Faraday', unit: '\\text{C/mol}', role: '96 485 C/mol.', category: 'Constante' },
          ],
          ruleOfThumb: "Repère de terrain : une densité de courant de 1 µA/cm² correspond à environ 11,6 µm d'acier perdu par an.",
        },
        {
          name: "Définition du pH",
          latex: "\\mathrm{pH} = -\\log_{10}\\left[\\mathrm{H_3O^+}\\right]",
          description: "Le pH mesure l'acidité : un béton sain est à pH 13 environ, un béton carbonaté à pH 9.",
          variables: [
            { symbol: '\\left[\\mathrm{H_3O^+}\\right]', name: 'Concentration en ions oxonium', unit: '\\text{mol/L}', role: "Plus elle est faible, plus le milieu est basique.", category: 'Concentration' },
          ],
          ruleOfThumb: "Une unité de pH correspond à un facteur 10 de concentration : passer de pH 13 à pH 9 multiplie l'acidité par 10 000.",
        },
        {
          name: "Décarbonatation du calcaire (fabrication du clinker)",
          latex: "\\mathrm{CaCO_3} \\xrightarrow{\\;\\approx 900\\,^\\circ\\mathrm{C}\\;} \\mathrm{CaO} + \\mathrm{CO_2}",
          description: "Environ 60 % des émissions de CO₂ d'une cimenterie viennent de cette réaction, le reste de la combustion.",
          variables: [
            { symbol: '\\mathrm{CaCO_3}', name: 'Calcaire', unit: '100{,}1\\ \\text{g/mol}', role: 'Matière première du clinker.', category: 'Réactif' },
            { symbol: '\\mathrm{CaO}', name: 'Chaux vive', unit: '56{,}1\\ \\text{g/mol}', role: 'Représente environ 65 % de la masse du clinker.', category: 'Produit' },
            { symbol: '\\mathrm{CO_2}', name: 'Dioxyde de carbone', unit: '44{,}0\\ \\text{g/mol}', role: 'Émis dans l\'atmosphère : 0,44 t par tonne de calcaire.', category: 'Produit' },
          ],
          ruleOfThumb: "Remplacer une partie du clinker par du laitier ou des cendres volantes réduit directement ce CO₂ de procédé.",
        },
      ],
    },

    {
      id: 6,
      key: 'stepbystep',
      title: "Calcul complet — Durée de vie d'un enrobage vis-à-vis de la carbonatation",
      icon: '🔬',
      type: 'stepbystep',
      problem: "Une poutre de façade (classe XC4) a un enrobage de 30 mm. Des mesures à 16 ans donnent une profondeur carbonatée de 16 mm. Estimer le coefficient K, la profondeur à 50 ans et l'âge auquel le front atteindra les armatures.",
      steps_demo: [
        { n: 1, text: "Écrire la loi de carbonatation : x_c = K·√t." },
        { n: 2, text: "Identifier K à partir de la mesure : K = 16 / √16 = 16 / 4 = 4 mm/√an." },
        { n: 3, text: "Prévoir la profondeur à 50 ans : x_c(50) = 4 × √50 = 4 × 7,07 = 28,3 mm." },
        { n: 4, text: "Comparer à l'enrobage : 28,3 mm < 30 mm, l'acier est encore protégé à 50 ans, mais de justesse." },
        { n: 5, text: "Calculer l'âge d'atteinte des armatures : t = (c / K)² = (30 / 4)² = 56,3 ans." },
        { n: 6, text: "Conclure : marge faible ; prévoir une inspection vers 40 ans et un traitement (protection de surface) si nécessaire." },
      ],
      result_latex: "K = \\frac{16}{\\sqrt{16}} = 4\\ \\text{mm}/\\sqrt{\\text{an}} \\qquad x_c(50) = 4\\sqrt{50} = 28{,}3\\ \\text{mm} \\qquad t_{armatures} = \\left(\\frac{30}{4}\\right)^2 = 56\\ \\text{ans}",
    },

    {
      id: 7,
      key: 'units',
      title: "Unités & grandeurs chimiques utiles",
      icon: '📏',
      type: 'units',
      table: [
        { grandeur: "Masse molaire", si: "g/mol", imperial: "lb/lb-mol", conversion: "Fe : 55,85 · CaO : 56,08 · CO₂ : 44,01 · CaCO₃ : 100,09" },
        { grandeur: "Concentration", si: "mol/L", imperial: "-", conversion: "pH = −log₁₀[H₃O⁺]" },
        { grandeur: "Teneur en chlorures", si: "% de la masse de ciment", imperial: "lb/yd³", conversion: "Seuil de dépassivation usuel ≈ 0,4 % (béton armé)" },
        { grandeur: "Chaleur d'hydratation", si: "J/g", imperial: "BTU/lb", conversion: "1 J/g = 0,43 BTU/lb ; C₃S ≈ 500 J/g, C₂S ≈ 260 J/g" },
        { grandeur: "Vitesse de corrosion", si: "µm/an", imperial: "mil/an", conversion: "1 µA/cm² ≈ 11,6 µm/an ; 1 mil = 25,4 µm" },
        { grandeur: "Constante de Faraday", si: "C/mol", imperial: "-", conversion: "F = 96 485 C/mol" },
      ],
      note: "Les teneurs en chlorures sont exprimées **par rapport à la masse de ciment** (et non de béton) : vérifiez toujours la base de calcul d'un rapport de laboratoire.",
    },

    {
      id: 8,
      key: 'hypotheses',
      title: "Hypothèses et domaine de validité",
      icon: '📋',
      type: 'hypotheses',
      items: [
        { type: 'info', text: "La loi $x_c = K\\sqrt{t}$ suppose un béton homogène et un environnement stable ; elle donne un ordre de grandeur, pas une date exacte." },
        { type: 'info', text: "Les équations d'hydratation sont idéalisées : les C-S-H réels ont une composition variable." },
        { type: 'warning', text: "La loi de Faraday suppose un courant de corrosion constant ; sur ouvrage, il varie fortement avec l'humidité et la température." },
        { type: 'warning', text: "Un béton fissuré carbonate beaucoup plus vite au droit des fissures que dans la masse." },
        { type: 'tip', text: "Combinez toujours plusieurs mesures (carbonatation, chlorures, potentiel, résistivité) avant de conclure à un risque de corrosion." },
      ],
    },

    {
      id: 9,
      key: 'simple_examples',
      title: "Exemples guidés",
      icon: '✏️',
      type: 'examples_simple',
      examples: [
        {
          title: "Exemple 1 : CO₂ émis par la décarbonatation",
          given: "1 tonne de calcaire pur CaCO₃ (100 g/mol), CO₂ = 44 g/mol",
          find: "La masse de CO₂ libérée",
          solution_latex: "m_{CO_2} = 1\\,000 \\times \\frac{44}{100} = 440\\ \\text{kg}",
          result: "440 kg de CO₂ par tonne de calcaire, avant même de brûler du combustible.",
        },
        {
          title: "Exemple 2 : rapport eau/ciment",
          given: "Béton dosé à 350 kg de ciment et 180 L d'eau efficace par m³",
          find: "Le rapport E/C et sa conformité à XC4 (E/C ≤ 0,50, valeur recommandée EN 206)",
          solution_latex: "\\frac{E}{C} = \\frac{180}{350} = 0{,}51 > 0{,}50",
          result: "Non conforme : augmenter le ciment à 360 kg/m³ (E/C = 0,50) ou réduire l'eau avec un superplastifiant.",
        },
        {
          title: "Exemple 3 : écart de pH",
          given: "Béton sain : pH = 13 ; béton carbonaté : pH = 9",
          find: "Le rapport des concentrations en ions H₃O⁺",
          solution_latex: "\\frac{[\\mathrm{H_3O^+}]_{9}}{[\\mathrm{H_3O^+}]_{13}} = 10^{13-9} = 10^{4}",
          result: "La zone carbonatée est 10 000 fois plus « acide » : l'acier y perd sa passivation.",
        },
      ],
    },

    {
      id: 10,
      key: 'real_examples',
      title: "Exemple réel — Éclatements de béton dans un parking souterrain",
      icon: '🏢',
      type: 'examples_real',
      diagramType: 'process_flow',
      examples: [
        {
          context: "Parking de 1975, rives de dalles fissurées et armatures apparentes",
          scenario: "Le diagnostic montre une profondeur carbonatée de 25 mm pour un enrobage réel de 15 à 20 mm, et des chlorures (sels de déneigement apportés par les véhicules) jusqu'à 0,8 % de la masse de ciment.",
          decomposition_latex: "K = \\frac{25}{\\sqrt{45}} \\approx 3{,}7\\ \\text{mm}/\\sqrt{\\text{an}} \\quad \\Rightarrow \\quad x_c > c_{réel} \\ \\text{depuis plus de 20 ans}",
          lesson: "Les deux mécanismes se cumulent : un enrobage insuffisant à la construction et l'absence de protection contre les sels expliquent la corrosion. Réparation : purge, passivation, mortier de réparation (NF EN 1504) et imperméabilisation des dalles.",
        },
      ],
    },

    {
      id: 11,
      key: 'diagrams',
      title: "Schéma de principe — De l'hydratation à la corrosion",
      icon: '📊',
      type: 'interactive_diagram',
      diagramType: 'process_flow',
      description: "Chaîne des réactions qui protègent puis menacent l'acier dans le béton armé.",
      diagram_description: [
        "Hydratation : C₃S et C₂S + eau → C-S-H (résistance) + portlandite Ca(OH)₂",
        "Passivation : pH 12,5 à 13,5, couche d'oxyde protectrice sur l'acier",
        "Carbonatation : CO₂ + Ca(OH)₂ → CaCO₃, le pH descend vers 9",
        "Dépassivation : le front carbonaté ou les chlorures atteignent l'acier",
        "Corrosion : Fe → Fe²⁺ + 2e⁻, rouille 2 à 6 fois plus volumineuse",
        "Éclatement : fissures parallèles aux armatures puis épaufrures du béton",
      ],
    },

    {
      id: 12,
      key: 'mistakes',
      title: "Erreurs fréquentes",
      icon: '⛔',
      type: 'mistakes',
      items: [
        {
          mistake: "Ajouter de l'eau sur chantier pour « faciliter la mise en place »",
          trap: "Passer de E/C = 0,50 à 0,60 augmente fortement la porosité capillaire",
          fix: "Utiliser un superplastifiant prévu à la formulation ; tout ajout d'eau doit être interdit et tracé.",
        },
        {
          mistake: "Confondre teneur en chlorures du béton et du ciment",
          trap: "Comparer 0,1 % de la masse de béton au seuil de 0,4 % de la masse de ciment",
          fix: "Ramener la mesure à la masse de ciment (environ 15 % de la masse du béton) avant toute comparaison.",
        },
        {
          mistake: "Croire qu'un béton sec ne pose aucun problème",
          trap: "Un béton intérieur sec carbonate vite (humidité 50 à 70 %)",
          fix: "La corrosion reste lente tant que le béton est sec, mais le front avance : surveiller les zones humidifiées (fuites, condensation).",
        },
      ],
    },

    {
      id: 13,
      key: 'tips',
      title: "Astuces de laboratoire et de chantier",
      icon: '💡',
      type: 'tips',
      tips: [
        "Test à la phénolphtaléine : pulvérisée sur une cassure fraîche, elle devient rose là où le pH dépasse environ 9 ; la zone incolore est carbonatée.",
        "Mesurez l'enrobage réel au pachomètre avant d'interpréter une profondeur de carbonatation.",
        "Pour un ouvrage marin, l'enrobage et la compacité (faible E/C, additions) protègent mieux qu'une peinture.",
        "Notez toujours la date de coulage : sans l'âge du béton, une profondeur carbonatée ne permet aucune prévision.",
      ],
    },

    {
      id: 14,
      key: 'norms',
      title: "Normes et références",
      icon: '📜',
      type: 'norms',
      norms: [
        { code: "NF EN 197-1", description: "Ciments courants : composition, spécifications (CEM I à CEM V) et critères de conformité." },
        { code: "NF EN 206 + A2 et NF EN 206/CN", description: "Béton : classes d'exposition (XC, XD, XS, XF, XA), E/C maximal, dosage minimal, teneur en chlorures." },
        { code: "NF EN 1992-1-1 §4.4", description: "Eurocode 2 : enrobage minimal selon la classe d'exposition et la classe structurale." },
        { code: "NF EN 14630", description: "Mesure de la profondeur de carbonatation par la méthode à la phénolphtaléine." },
        { code: "NF EN 1504", description: "Produits et systèmes de protection et de réparation des structures en béton." },
      ],
    },

    {
      id: 15,
      key: 'exercises',
      title: "Exercices d'application",
      icon: '✍️',
      type: 'exercises',
      exercises: [
        {
          id: 'ex_chi_1',
          number: 1,
          difficulty: 'Facile',
          text: "Une carotte de 20 ans montre une profondeur carbonatée de 18 mm. Calculer K, puis la profondeur prévue à 80 ans.",
          hint: "K = x / √t, puis x(80) = K·√80.",
          answer_latex: "K = \\frac{18}{\\sqrt{20}} = 4{,}02\\ \\text{mm}/\\sqrt{\\text{an}} \\qquad x(80) = 4{,}02 \\times \\sqrt{80} = 36\\ \\text{mm}",
          answer_text: "K ≈ 4,0 mm/√an ; profondeur à 80 ans ≈ 36 mm.",
        },
        {
          id: 'ex_chi_2',
          number: 2,
          difficulty: 'Moyen',
          text: "Une armature est parcourue par un courant de corrosion constant de 0,1 A pendant un an. Calculer la masse de fer dissoute (M = 55,85 g/mol, n = 2, F = 96 485 C/mol).",
          hint: "t = 365 × 24 × 3 600 = 31 536 000 s.",
          answer_latex: "m = \\frac{55{,}85 \\times 0{,}1 \\times 31\\,536\\,000}{2 \\times 96\\,485} = 913\\ \\text{g}",
          answer_text: "Environ 0,91 kg de fer perdu par an.",
        },
        {
          id: 'ex_chi_3',
          number: 3,
          difficulty: 'Difficile',
          text: "Un clinker contient 65 % de CaO issu de la décarbonatation du calcaire. Calculer le CO₂ de procédé émis par tonne de clinker (CaO = 56,1 g/mol, CO₂ = 44,0 g/mol).",
          hint: "Chaque mole de CaO formée libère une mole de CO₂.",
          answer_latex: "m_{CO_2} = 650 \\times \\frac{44{,}0}{56{,}1} = 510\\ \\text{kg par tonne de clinker}",
          answer_text: "≈ 0,51 t de CO₂ de procédé par tonne de clinker (hors combustion).",
        },
      ],
    },

    {
      id: 16,
      key: 'corrections',
      title: "Corrections détaillées",
      icon: '✅',
      type: 'corrections',
      note: "Chaque correction est disponible sous l'exercice correspondant : écrivez d'abord votre démarche, puis comparez.",
    },

    {
      id: 17,
      key: 'quiz',
      title: "Quiz — Chimie des matériaux",
      icon: '🎯',
      type: 'quiz',
      questions: [
        {
          id: 'q_chi_1',
          question: "Quelle phase du clinker apporte l'essentiel de la résistance au jeune âge ?",
          options: [
            { id: 'a', text: 'Le C₂S (bélite)' },
            { id: 'b', text: 'Le C₃S (alite)' },
            { id: 'c', text: 'Le C₄AF (ferrite)' },
          ],
          correct: 'b',
          explanation: "L'alite C₃S s'hydrate rapidement et forme l'essentiel des C-S-H des premiers jours ; la bélite agit plus lentement.",
        },
        {
          id: 'q_chi_2',
          question: "Quel est l'ordre de grandeur du pH d'un béton sain ?",
          options: [
            { id: 'a', text: 'pH ≈ 7' },
            { id: 'b', text: 'pH ≈ 9' },
            { id: 'c', text: 'pH ≈ 13' },
          ],
          correct: 'c',
          explanation: "La portlandite et les alcalins donnent un pH de 12,5 à 13,5, qui passive l'acier.",
        },
        {
          id: 'q_chi_3',
          question: "Que mesure le test à la phénolphtaléine ?",
          options: [
            { id: 'a', text: 'La profondeur de carbonatation' },
            { id: 'b', text: 'La teneur en chlorures' },
            { id: 'c', text: 'La résistance en compression' },
          ],
          correct: 'a',
          explanation: "L'indicateur reste incolore dans la zone carbonatée (pH < 9) et vire au rose dans le béton sain.",
        },
      ],
    },

    {
      id: 18,
      key: 'exam_questions',
      title: "Questions d'examen",
      icon: '🎓',
      type: 'exam',
      questions: [
        "Décrivez les quatre phases du clinker Portland et le rôle de chacune dans la prise et le durcissement.",
        "Expliquez le mécanisme de passivation des armatures et les deux processus qui conduisent à leur dépassivation.",
        "À partir de la loi x = K√t, montrez l'influence de l'enrobage sur la durée de vie d'un ouvrage. Application numérique avec K = 5 mm/√an et c = 25 puis 40 mm.",
      ],
    },

    {
      id: 19,
      key: 'interview_questions',
      title: "Questions d'entretien technique",
      icon: '💼',
      type: 'interview',
      questions: [
        {
          question: "Pourquoi le béton protège-t-il naturellement l'acier contre la corrosion ?",
          answer_hint: "Parce que sa solution interstitielle est très basique (pH ≈ 13) grâce à la portlandite : l'acier se recouvre d'une couche passive. Cette protection disparaît si le béton se carbonate ou si les chlorures dépassent un seuil au droit de l'acier.",
        },
        {
          question: "Quel ciment proposeriez-vous pour une fondation en milieu sulfaté ?",
          answer_hint: "Un ciment à faible teneur en C₃A, de préférence au laitier (CEM III) avec mention ES (résistant aux sulfates), et un béton compact (E/C faible) conforme à la classe XA visée.",
        },
      ],
    },

    {
      id: 20,
      key: 'practical_case',
      title: "Cas pratique — Diagnostic chimique d'un balcon dégradé",
      icon: '🔧',
      type: 'practical',
      diagramType: 'process_flow',
      scenario: "Balcon en béton armé de 35 ans : fissures le long des armatures inférieures et éclats de béton.",
      description: "Mesures sur carottes : **profondeur carbonatée 22 mm**, **enrobage mesuré 15 mm**, chlorures 0,1 % de la masse de ciment (non significatif). Il faut identifier la cause et proposer une réparation.",
      resolution_latex_1: "K = \\frac{22}{\\sqrt{35}} = 3{,}7\\ \\text{mm}/\\sqrt{\\text{an}} \\qquad t_{dépassivation} = \\left(\\frac{15}{3{,}7}\\right)^2 \\approx 16\\ \\text{ans}",
      resolution_latex_2: "\\text{Chlorures} = 0{,}1\\,\\% < 0{,}4\\,\\% \\ \\Rightarrow \\ \\text{cause principale : carbonatation (enrobage insuffisant)}",
      resolution_latex_3: "\\text{Réparation NF EN 1504 : purge} \\rightarrow \\text{passivation des aciers} \\rightarrow \\text{mortier R3/R4} \\rightarrow \\text{revêtement anti-carbonatation}",
      conclusion: "Corrosion par carbonatation depuis environ 19 ans. Réparation localisée et protection de surface pour stopper la progression du CO₂.",
    },

    {
      id: 21,
      key: 'summary',
      title: "Résumé",
      icon: '📋',
      type: 'summary',
      content: `### La chimie des matériaux en 6 points
1. **Clinker** : C₃S, C₂S, C₃A et C₄AF, obtenus par cuisson du calcaire et de l'argile.
2. **Hydratation** : formation des C-S-H (résistance) et de la portlandite (réserve basique).
3. **Passivation** : un pH d'environ 13 protège l'acier.
4. **Carbonatation** : $x_c = K\\sqrt{t}$, l'enrobage est la première défense.
5. **Chlorures** : au-delà d'environ 0,4 % de la masse de ciment, corrosion par piqûres.
6. **Carbone** : la décarbonatation du calcaire émet environ 0,5 t de CO₂ par tonne de clinker.`,
    },

    {
      id: 22,
      key: 'key_points',
      title: "Points clés à retenir",
      icon: '⭐',
      type: 'keypoints',
      points: [
        "Le ciment durcit par hydratation, pas par séchage",
        "pH du béton sain ≈ 13 ; béton carbonaté ≈ 9",
        "Profondeur de carbonatation : $x_c = K\\sqrt{t}$",
        "Seuil usuel des chlorures : ≈ 0,4 % de la masse de ciment",
        "Faraday : $m = \\frac{M I t}{n F}$",
        "Rouille : volume 2 à 6 fois supérieur à celui de l'acier",
      ],
    },

    {
      id: 23,
      key: 'self_assessment',
      title: "Auto-évaluation",
      icon: '🏆',
      type: 'self_assessment',
      description: "Cochez les compétences acquises :",
      objectives: [
        "Je connais les quatre phases du clinker et leur rôle",
        "J'explique la passivation de l'acier dans le béton",
        "Je sais estimer une profondeur de carbonatation avec x = K√t",
        "Je sais appliquer la loi de Faraday à la corrosion",
        "J'ai réussi le quiz avec au moins 2 bonnes réponses sur 3",
      ],
    },
  ],

  quickQuiz: {
    question: "Quelle réaction fait chuter le pH du béton et menace les armatures ?",
    options: [
      { id: 'a', label: "A) L'hydratation du C₃S" },
      { id: 'b', label: 'B) La carbonatation de la portlandite' },
      { id: 'c', label: 'C) La prise du gypse' },
    ],
    correct: 'b',
    explanation: "Ca(OH)₂ + CO₂ → CaCO₃ + H₂O : la portlandite est consommée, le pH descend vers 9 et l'acier perd sa protection.",
  },
};
