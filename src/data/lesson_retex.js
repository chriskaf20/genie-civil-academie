// ── Lesson: Retours d'expérience (RETEX) — Module 34 ───────────────────────────
export const lesson_retex = {
  moduleId: 34,
  slug: 'retex',
  lessonIndex: 1,
  title: "Retours d'Expérience : Effondrements Célèbres, Analyse des Causes & Leçons Apprises",
  subtitle: "Module 34 — Études de Cas & Retours d'Expérience (RETEX)",
  level: 'Tous niveaux',
  duration: '25h',
  diagramType: 'process_flow',
  tags: ['RETEX', 'Pathologie', 'Effondrement progressif', 'Flambement', 'Aéroélasticité', 'Poinçonnement', 'Robustesse', 'Analyse des causes'],

  steps: [
    {
      id: 1,
      key: 'definition',
      title: "Définition — Apprendre des défaillances",
      icon: '📖',
      type: 'definition',
      fr: "Retour d'expérience (RETEX) et analyse des défaillances d'ouvrages",
      en: 'Lessons Learned & Forensic Structural Engineering',
      metier: "Pratiqué par les experts judiciaires et d'assurance, les ingénieurs en pathologie, les responsables qualité et tous les concepteurs qui veulent éviter de reproduire une erreur connue.",
      content: `Le **retour d'expérience** consiste à analyser méthodiquement un incident ou un accident pour en tirer des enseignements et modifier les pratiques. En génie civil, de nombreuses règles des normes actuelles sont nées d'une catastrophe.

### Une défaillance a presque toujours plusieurs causes
- **Techniques** : erreur de calcul, détail mal conçu, matériau défaillant, phénomène ignoré.
- **Organisationnelles** : modification non vérifiée, contrôle absent, délais intenables, information perdue entre acteurs.
- **Humaines** : signaux d'alerte non pris en compte, habitude, fatigue.

### Les outils d'analyse
1. **Chronologie des faits**, sans interprétation.
2. **Arbre des causes** : remonter de l'accident aux faits qui l'ont rendu possible.
3. **5 pourquoi** : demander « pourquoi ? » jusqu'à la cause racine.
4. **Diagramme d'Ishikawa (5M)** : Matière, Matériel, Méthode, Main-d'œuvre, Milieu.

> 💡 Le but d'un RETEX n'est pas de trouver un coupable, mais de comprendre pour que l'événement ne se reproduise pas.`,
    },

    {
      id: 2,
      key: 'importance',
      title: "Pourquoi étudier les catastrophes",
      icon: '⚠️',
      type: 'importance',
      content: `Les règles de calcul paraissent abstraites tant qu'on ne voit pas ce qu'elles empêchent.

- **Robustesse** : après Ronan Point (1968), les règlements ont exigé des chaînages capables d'éviter l'effondrement progressif.
- **Dynamique et vent** : après Tacoma Narrows (1940), les grands ponts sont étudiés en soufflerie.
- **Fondations des barrages** : Malpasset (1959) a placé la géologie et le drainage des appuis au cœur de la conception.
- **Contrôle des modifications** : Hyatt Regency (1981) montre qu'un changement de détail « mineur » peut doubler un effort.
- **Maintenance** : Gênes (2018) et Surfside (2021) rappellent qu'un ouvrage doit être inspecté et entretenu toute sa vie.

> ⚠️ **À retenir** : la plupart de ces accidents étaient précédés de signaux (fissures, vibrations, calculs non revus) qui n'ont pas déclenché d'action.`,
    },

    {
      id: 3,
      key: 'applications',
      title: "Applications professionnelles",
      icon: '🏗️',
      type: 'applications',
      examples: [
        { context: "Revue de conception", text: "Vérifier qu'aucune modification d'exécution n'a été acceptée sans recalcul de tout le cheminement des efforts." },
        { context: "Expertise après sinistre", text: "Reconstituer la chronologie, prélever des échantillons, recalculer et identifier les causes techniques et organisationnelles." },
        { context: "Démarche qualité d'entreprise", text: "Analyser chaque presque-accident avec un arbre des causes et diffuser une fiche REX à toutes les équipes." },
        { context: "Gestion de patrimoine", text: "Programmer les inspections et réagir aux alertes (fissures, déformations, corrosion) sur les ouvrages anciens." },
        { context: "Formation", text: "Utiliser des cas réels pour expliquer flambement, poinçonnement, robustesse ou aéroélasticité." },
      ],
    },

    {
      id: 4,
      key: 'theory',
      title: "Théorie — Huit cas qui ont changé la pratique",
      icon: '📐',
      type: 'theory',
      diagramType: 'process_flow',
      content: `### 1. Pont de Québec (Canada, 1907) — flambement
Pendant la construction, une membrure inférieure comprimée flambe : 75 ouvriers meurent. La portée avait été allongée sans recalcul complet du poids propre, sous-estimé.

### 2. Pont de Tacoma Narrows (États-Unis, 1940) — aéroélasticité
Tablier très souple et peu raide en torsion : par un vent d'environ 64 km/h, une instabilité aéroélastique en torsion (flottement) le détruit en quelques heures.

### 3. Barrage de Malpasset (France, 1959) — fondation
La voûte cède par sa fondation rive gauche : les sous-pressions dans le gneiss fracturé et une faille provoquent le déplacement de l'appui. 423 victimes.

### 4. Ronan Point (Londres, 1968) — effondrement progressif
Une explosion de gaz au 18ᵉ étage chasse un panneau porteur ; tout l'angle de la tour en panneaux préfabriqués s'effondre en cascade. Quatre morts.

### 5. Hyatt Regency (Kansas City, 1981) — détail d'assemblage
Les passerelles suspendues étaient prévues sur une tige continue ; la modification en deux tiges décalées double l'effort sur l'assemblage de la passerelle supérieure. 114 morts.

### 6. Grand magasin Sampoong (Séoul, 1995) — poinçonnement
Changement d'usage, poteaux réduits ou supprimés, équipements lourds en toiture : les dalles sans poutres poinçonnent et l'immeuble s'effondre. 502 morts.

### 7. Viaduc Morandi (Gênes, 2018) — corrosion et maintenance
Rupture d'un hauban en béton précontraint dont les câbles étaient corrodés et difficiles à inspecter. 43 morts.

### 8. Champlain Towers South (Surfside, 2021) — dégradation
Effondrement d'une résidence de 12 étages ; les investigations portent sur la dégradation de la dalle du parking et de la piscine par les infiltrations et la corrosion. 98 morts.`,
    },

    {
      id: 5,
      key: 'formulas',
      title: "Les formules derrière les défaillances",
      icon: '🔢',
      type: 'formulas',
      diagramType: 'process_flow',
      formulas: [
        {
          name: "Charge critique d'Euler (Pont de Québec)",
          latex: "N_{cr} = \\frac{\\pi^2 E I}{L_f^2}",
          description: "Au-delà de cette charge, une barre comprimée élancée flambe : la ruine est brutale.",
          variables: [
            { symbol: 'N_{cr}', name: 'Charge critique de flambement', unit: '\\text{kN}', role: 'Effort de compression provoquant l\'instabilité.', category: 'Résultat' },
            { symbol: 'E', name: "Module d'Young", unit: '\\text{MPa}', role: 'Rigidité du matériau.', category: 'Matériau' },
            { symbol: 'I', name: "Moment d'inertie minimal", unit: '\\text{mm}^4', role: "Selon l'axe de flambement le plus faible.", category: 'Géométrie' },
            { symbol: 'L_f', name: 'Longueur de flambement', unit: '\\text{mm}', role: 'Dépend des conditions d\'appui.', category: 'Géométrie' },
          ],
          ruleOfThumb: "Doubler la longueur de flambement divise la charge critique par quatre.",
        },
        {
          name: "Fréquence de détachement tourbillonnaire (Strouhal)",
          latex: "f_s = \\frac{S_t\\, V}{D}",
          description: "Les tourbillons alternés font vibrer l'ouvrage quand f_s approche une fréquence propre. Tacoma a d'abord oscillé ainsi, puis a été détruit par flottement en torsion.",
          variables: [
            { symbol: 'f_s', name: 'Fréquence des tourbillons', unit: '\\text{Hz}', role: 'À comparer aux fréquences propres de l\'ouvrage.', category: 'Résultat' },
            { symbol: 'S_t', name: 'Nombre de Strouhal', unit: '-', role: 'Environ 0,1 à 0,2 selon la forme de la section.', category: 'Aérodynamique' },
            { symbol: 'V', name: 'Vitesse du vent', unit: '\\text{m/s}', role: 'Vitesse moyenne au niveau du tablier.', category: 'Action' },
            { symbol: 'D', name: 'Dimension transversale', unit: '\\text{m}', role: 'Hauteur exposée de la section.', category: 'Géométrie' },
          ],
        },
        {
          name: "Contrainte de poinçonnement (Sampoong)",
          latex: "v_{Ed} = \\frac{\\beta\\, V_{Ed}}{u_1\\, d}",
          description: "Cisaillement autour d'un poteau dans une dalle sans poutres (EC2 §6.4) ; il doit rester inférieur à la résistance v_Rd,c.",
          variables: [
            { symbol: 'v_{Ed}', name: 'Contrainte de poinçonnement', unit: '\\text{MPa}', role: 'Contrainte tangente moyenne sur le contour de contrôle.', category: 'Résultat' },
            { symbol: '\\beta', name: "Coefficient d'excentricité", unit: '-', role: '1,15 pour un poteau intérieur courant.', category: 'Coefficient' },
            { symbol: 'V_{Ed}', name: 'Effort transmis par la dalle au poteau', unit: '\\text{N}', role: 'Réaction de calcul du poteau.', category: 'Action' },
            { symbol: 'u_1', name: 'Périmètre de contrôle', unit: '\\text{mm}', role: 'Contour situé à 2d du nu du poteau.', category: 'Géométrie' },
            { symbol: 'd', name: 'Hauteur utile de la dalle', unit: '\\text{mm}', role: 'Distance entre fibre comprimée et armatures tendues.', category: 'Géométrie' },
          ],
          ruleOfThumb: "Toute réduction de section de poteau ou augmentation de charge sur une dalle-champignon impose de revérifier le poinçonnement.",
        },
        {
          name: "Sous-pression sous une fondation de barrage (Malpasset)",
          latex: "U = \\frac{1}{2}\\, \\gamma_w\\, H\\, B",
          description: "Résultante d'une sous-pression triangulaire (de γw·H à l'amont à 0 à l'aval, sans drainage) : elle soulage les appuis et favorise le glissement.",
          variables: [
            { symbol: 'U', name: 'Résultante de sous-pression', unit: '\\text{kN/m}', role: 'Force verticale ascendante par mètre linéaire.', category: 'Résultat' },
            { symbol: '\\gamma_w', name: "Poids volumique de l'eau", unit: '\\text{kN/m}^3', role: '10 kN/m³.', category: 'Constante' },
            { symbol: 'H', name: "Hauteur d'eau à l'amont", unit: '\\text{m}', role: 'Charge hydraulique sur la fondation.', category: 'Action' },
            { symbol: 'B', name: 'Largeur de la base', unit: '\\text{m}', role: 'Longueur du chemin d\'écoulement sous l\'ouvrage.', category: 'Géométrie' },
          ],
        },
        {
          name: "Chaînage intérieur de robustesse (EN 1991-1-7, ossatures)",
          latex: "T_i = \\max\\left(0{,}8\\,(g_k + \\psi\\, q_k)\\, s\\, L \\ ;\\ 75\\ \\text{kN}\\right)",
          description: "Les chaînages relient les éléments pour qu'un appui perdu n'entraîne pas un effondrement en cascade (leçon de Ronan Point).",
          variables: [
            { symbol: 'T_i', name: 'Effort de chaînage', unit: '\\text{kN}', role: 'Effort de traction à reprendre par le chaînage.', category: 'Résultat' },
            { symbol: 'g_k', name: 'Charge permanente', unit: '\\text{kN/m}^2', role: 'Charge surfacique du plancher.', category: 'Action' },
            { symbol: '\\psi', name: 'Coefficient de combinaison', unit: '-', role: 'Valeur de la combinaison accidentelle (ψ₁ ou ψ₂).', category: 'Combinaison' },
            { symbol: 'q_k', name: "Charge d'exploitation", unit: '\\text{kN/m}^2', role: 'Charge surfacique d\'exploitation.', category: 'Action' },
            { symbol: 's', name: 'Espacement des chaînages', unit: '\\text{m}', role: 'Distance entre chaînages parallèles.', category: 'Géométrie' },
            { symbol: 'L', name: 'Portée du chaînage', unit: '\\text{m}', role: 'Longueur entre appuis.', category: 'Géométrie' },
          ],
        },
      ],
    },

    {
      id: 6,
      key: 'stepbystep',
      title: "Calcul complet — Le détail qui a doublé l'effort (Hyatt Regency)",
      icon: '🔬',
      type: 'stepbystep',
      problem: "Deux passerelles superposées pèsent chacune P (charges comprises). Dans le projet, une tige continue traverse la poutre de la passerelle haute, et chaque écrou ne porte qu'une passerelle. Dans l'exécution, deux tiges décalées sont utilisées. Comparer l'effort sur l'assemblage de la passerelle haute.",
      steps_demo: [
        { n: 1, text: "Projet (tige continue) : l'écrou sous la poutre haute ne porte que la passerelle haute, soit P ; la passerelle basse est portée directement par la tige jusqu'au plafond." },
        { n: 2, text: "Exécution (deux tiges) : la passerelle basse est suspendue à la poutre haute par une seconde tige." },
        { n: 3, text: "L'écrou sous la poutre haute porte alors la passerelle haute et la passerelle basse : P + P = 2P." },
        { n: 4, text: "L'assemblage (poutre-caisson et écrou), déjà jugé faible dans le projet, reçoit un effort doublé." },
        { n: 5, text: "Le jour de l'accident, la foule sur les passerelles amène l'assemblage à la rupture : la tige traverse la poutre." },
        { n: 6, text: "Leçon : toute modification de détail doit être recalculée par l'ingénieur responsable, en suivant tout le cheminement des efforts." },
      ],
      result_latex: "F_{écrou}^{projet} = P \\qquad F_{écrou}^{exécution} = P + P = 2P \\quad \\Rightarrow \\quad \\times 2",
    },

    {
      id: 7,
      key: 'units',
      title: "Repères chiffrés des cas étudiés",
      icon: '📏',
      type: 'units',
      table: [
        { grandeur: "Pont de Québec (1907)", si: "75 victimes", imperial: "-", conversion: "Flambement d'une membrure comprimée" },
        { grandeur: "Tacoma Narrows (1940)", si: "Vent ≈ 64 km/h", imperial: "≈ 40 mph", conversion: "Flottement en torsion du tablier" },
        { grandeur: "Malpasset (1959)", si: "423 victimes", imperial: "-", conversion: "Rupture de la fondation rive gauche" },
        { grandeur: "Hyatt Regency (1981)", si: "114 victimes", imperial: "-", conversion: "Effort doublé sur l'assemblage" },
        { grandeur: "Sampoong (1995)", si: "502 victimes", imperial: "-", conversion: "Poinçonnement des dalles" },
        { grandeur: "Gênes (2018) / Surfside (2021)", si: "43 / 98 victimes", imperial: "-", conversion: "Corrosion, dégradation et défaut d'entretien" },
      ],
      note: "Ces chiffres sont rappelés pour mesurer l'enjeu ; l'objectif du module est de comprendre les **mécanismes** et les **défaillances d'organisation**, pas de juger les personnes.",
    },

    {
      id: 8,
      key: 'hypotheses',
      title: "Principes d'une analyse de défaillance",
      icon: '📋',
      type: 'hypotheses',
      items: [
        { type: 'info', text: "Séparer les faits établis (mesures, documents, témoignages concordants) des hypothèses à vérifier." },
        { type: 'info', text: "Chercher plusieurs causes : une défaillance majeure résulte presque toujours d'une combinaison de facteurs." },
        { type: 'warning', text: "Préserver les preuves avant toute intervention : un élément déplacé ou nettoyé peut effacer la cause." },
        { type: 'warning', text: "Ne pas conclure sur la première hypothèse plausible : chaque hypothèse doit être confrontée aux constats et aux calculs." },
        { type: 'tip', text: "Transformez chaque analyse en action concrète : règle de conception, point d'arrêt, check-list ou formation." },
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
          title: "Exemple 1 : charge critique d'une membrure",
          given: "Membrure acier : E = 210 000 MPa, I = 1,5 × 10⁸ mm⁴, longueur de flambement 10 m",
          find: "La charge critique d'Euler",
          solution_latex: "N_{cr} = \\frac{\\pi^2 \\times 210\\,000 \\times 1{,}5 \\times 10^8}{10\\,000^2} = 3{,}11 \\times 10^6\\ \\text{N} = 3\\,109\\ \\text{kN}",
          result: "N_cr ≈ 3 110 kN ; si la portée augmente le poids propre de 20 % sans recalcul, la marge peut disparaître.",
        },
        {
          title: "Exemple 2 : tourbillons sur un tablier",
          given: "Section de hauteur 2,4 m, vent de 20 m/s, nombre de Strouhal 0,2",
          find: "La fréquence de détachement des tourbillons",
          solution_latex: "f_s = \\frac{0{,}2 \\times 20}{2{,}4} = 1{,}67\\ \\text{Hz}",
          result: "1,67 Hz : si une fréquence propre du tablier est proche, des oscillations importantes apparaissent.",
        },
        {
          title: "Exemple 3 : sous-pression sous un barrage",
          given: "Hauteur d'eau 30 m, base de 20 m, pas de drainage",
          find: "La résultante de sous-pression par mètre",
          solution_latex: "U = \\tfrac{1}{2} \\times 10 \\times 30 \\times 20 = 3\\,000\\ \\text{kN/m}",
          result: "3 000 kN/m de poussée vers le haut : d'où l'importance des drains et des voiles d'étanchéité.",
        },
      ],
    },

    {
      id: 10,
      key: 'real_examples',
      title: "Exemple réel — Ronan Point et la naissance de la robustesse",
      icon: '🏢',
      type: 'examples_real',
      diagramType: 'process_flow',
      examples: [
        {
          context: "Tour de 22 étages en grands panneaux préfabriqués, Londres, mai 1968",
          scenario: "Une fuite de gaz explose au 18ᵉ étage et chasse un panneau de façade porteur. Les panneaux supérieurs, privés d'appui et mal liés entre eux, tombent et entraînent dans leur chute les planchers inférieurs : tout l'angle de la tour s'effondre jusqu'au sol.",
          decomposition_latex: "\\text{Perte d'un appui local} + \\text{absence de chaînages} \\Rightarrow \\text{effondrement disproportionné}",
          lesson: "Un ouvrage doit tolérer une défaillance locale sans effondrement disproportionné : chaînages horizontaux et verticaux, redondance, éléments clés dimensionnés pour une action accidentelle (EN 1991-1-7).",
        },
      ],
    },

    {
      id: 11,
      key: 'diagrams',
      title: "Schéma de principe — Conduire un retour d'expérience",
      icon: '📊',
      type: 'interactive_diagram',
      diagramType: 'process_flow',
      description: "Une démarche en six temps, du constat à la modification des pratiques.",
      diagram_description: [
        "Sécuriser : mettre en sécurité les personnes et l'ouvrage, préserver les preuves",
        "Constater : chronologie des faits, relevés, photos, prélèvements",
        "Analyser : arbre des causes, 5 pourquoi, diagramme d'Ishikawa (5M)",
        "Vérifier : recalculer, essayer les matériaux, tester les hypothèses",
        "Décider : actions correctives sur l'ouvrage et actions préventives sur l'organisation",
        "Diffuser : fiche REX, formation, mise à jour des procédures et des règles",
      ],
    },

    {
      id: 12,
      key: 'mistakes',
      title: "Erreurs fréquentes en analyse de défaillance",
      icon: '⛔',
      type: 'mistakes',
      items: [
        {
          mistake: "S'arrêter à la cause immédiate",
          trap: "« La tige a cédé » au lieu de « pourquoi la tige portait-elle le double ? »",
          fix: "Utiliser les 5 pourquoi jusqu'à la cause organisationnelle (absence de revue des modifications).",
        },
        {
          mistake: "Chercher un coupable plutôt qu'une cause",
          trap: "Les témoins se taisent et l'information utile disparaît",
          fix: "Mener une analyse factuelle et non punitive ; les responsabilités juridiques relèvent d'une autre procédure.",
        },
        {
          mistake: "Ignorer les signaux faibles",
          trap: "Classer sans suite des fissures, des vibrations ou des déformations anormales",
          fix: "Toute alerte sur un ouvrage déclenche une inspection par un ingénieur et, si besoin, des mesures conservatoires.",
        },
      ],
    },

    {
      id: 13,
      key: 'tips',
      title: "Astuces pour tirer profit des RETEX",
      icon: '💡',
      type: 'tips',
      tips: [
        "Tenez un registre des incidents et presque-accidents de vos chantiers : les tendances apparaissent après quelques mois.",
        "Lors d'une revue de projet, demandez « qu'est-ce qui se passe si cet élément disparaît ? » pour tester la robustesse.",
        "Suivez le cheminement complet des efforts après chaque modification d'exécution, même mineure.",
        "Lisez les rapports d'enquête publiés (NTSB, NIST, BEA, rapports parlementaires) : ce sont d'excellents cours de conception.",
      ],
    },

    {
      id: 14,
      key: 'norms',
      title: "Normes nées de l'expérience",
      icon: '📜',
      type: 'norms',
      norms: [
        { code: "NF EN 1991-1-7", description: "Actions accidentelles : robustesse, chaînages, éléments clés, classes de conséquences." },
        { code: "NF EN 1991-1-4 annexe E", description: "Vent : détachement tourbillonnaire et instabilités aéroélastiques." },
        { code: "NF EN 1992-1-1 §6.4", description: "Béton armé : vérification au poinçonnement des dalles." },
        { code: "NF EN 1993-1-1 §6.3", description: "Acier : stabilité des barres comprimées (flambement) et des poutres (déversement)." },
        { code: "Instruction technique de surveillance des ouvrages d'art (ITSEOA)", description: "Inspections périodiques et surveillance des ouvrages d'art en France." },
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
          id: 'ex_rex_1',
          number: 1,
          difficulty: 'Facile',
          text: "Dans l'assemblage des passerelles, chaque passerelle transmet 80 kN. Quel effort porte l'écrou de la passerelle haute dans le projet initial, puis dans la version exécutée ?",
          hint: "Version exécutée : il porte aussi la passerelle basse.",
          answer_latex: "F_{projet} = 80\\ \\text{kN} \\qquad F_{exécution} = 80 + 80 = 160\\ \\text{kN}",
          answer_text: "80 kN dans le projet, 160 kN dans la version exécutée.",
        },
        {
          id: 'ex_rex_2',
          number: 2,
          difficulty: 'Moyen',
          text: "Calculer l'effort de chaînage intérieur d'une ossature : g_k = 5,0 kN/m², q_k = 2,5 kN/m², ψ = 0,5, espacement 6 m, portée 7 m.",
          hint: "T = max(0,8 (g + ψq) s L ; 75 kN).",
          answer_latex: "T_i = 0{,}8 \\times (5{,}0 + 0{,}5 \\times 2{,}5) \\times 6 \\times 7 = 210\\ \\text{kN} \\ge 75\\ \\text{kN}",
          answer_text: "T = 210 kN.",
        },
        {
          id: 'ex_rex_3',
          number: 3,
          difficulty: 'Difficile',
          text: "Une membrure acier (E = 210 000 MPa, I = 8,0 × 10⁷ mm⁴) a une longueur de flambement de 8 m et reçoit 2 000 kN. Calculer N_cr et le coefficient N_cr / N. Que devient ce coefficient si la longueur de flambement passe à 12 m ?",
          hint: "N_cr varie comme 1 / L².",
          answer_latex: "N_{cr,8} = \\frac{\\pi^2 \\times 210\\,000 \\times 8 \\times 10^7}{8\\,000^2} = 2\\,591\\ \\text{kN} \\ (\\times 1{,}30) \\qquad N_{cr,12} = 1\\,151\\ \\text{kN} < 2\\,000",
          answer_text: "Coefficient 1,30 à 8 m, mais à 12 m la charge critique (1 151 kN) est inférieure à l'effort : flambement.",
        },
      ],
    },

    {
      id: 16,
      key: 'corrections',
      title: "Corrections détaillées",
      icon: '✅',
      type: 'corrections',
      note: "Les corrections sont sous chaque exercice. Note : la charge critique d'Euler est une borne théorique ; l'Eurocode 3 applique en plus une réduction pour imperfections (coefficient χ).",
    },

    {
      id: 17,
      key: 'quiz',
      title: "Quiz — Retours d'expérience",
      icon: '🎯',
      type: 'quiz',
      questions: [
        {
          id: 'q_rex_1',
          question: "Quel phénomène a détruit le pont de Tacoma Narrows en 1940 ?",
          options: [
            { id: 'a', text: 'Un séisme' },
            { id: 'b', text: 'Une instabilité aéroélastique (flottement en torsion) sous un vent modéré' },
            { id: 'c', text: 'La corrosion des câbles' },
          ],
          correct: 'b',
          explanation: "Le tablier, souple et peu raide en torsion, est entré en flottement aéroélastique pour un vent d'environ 64 km/h.",
        },
        {
          id: 'q_rex_2',
          question: "Quelle notion réglementaire est issue de l'effondrement de Ronan Point ?",
          options: [
            { id: 'a', text: 'La robustesse vis-à-vis de l\'effondrement progressif' },
            { id: 'b', text: 'Le coefficient de Strouhal' },
            { id: 'c', text: 'La classe de consistance du béton' },
          ],
          correct: 'a',
          explanation: "Ronan Point a conduit à exiger chaînages et redondance pour limiter les effondrements disproportionnés.",
        },
        {
          id: 'q_rex_3',
          question: "Quel outil d'analyse classe les causes en Matière, Matériel, Méthode, Main-d'œuvre et Milieu ?",
          options: [
            { id: 'a', text: "Le diagramme d'Ishikawa" },
            { id: 'b', text: 'Le diagramme de Gantt' },
            { id: 'c', text: 'La matrice RACI' },
          ],
          correct: 'a',
          explanation: "Le diagramme d'Ishikawa (en arêtes de poisson) organise les causes selon les 5M.",
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
        "Choisissez deux défaillances étudiées et analysez pour chacune les causes techniques et organisationnelles, puis les évolutions réglementaires qui en ont résulté.",
        "Expliquez la notion d'effondrement progressif et les dispositions constructives qui permettent de l'éviter.",
        "Décrivez la méthode de l'arbre des causes et appliquez-la à un accident de chantier de votre choix.",
      ],
    },

    {
      id: 19,
      key: 'interview_questions',
      title: "Questions d'entretien",
      icon: '💼',
      type: 'interview',
      questions: [
        {
          question: "L'entreprise vous propose de remplacer un assemblage par une solution « plus simple à monter ». Comment réagissez-vous ?",
          answer_hint: "Je demande le détail proposé, je suis le cheminement des efforts et je recalcule l'assemblage et les éléments adjacents avant tout accord écrit ; l'exemple de Hyatt Regency montre qu'un détail peut doubler un effort.",
        },
        {
          question: "Quel retour d'expérience vous a le plus marqué et pourquoi ?",
          answer_hint: "Présenter un cas précis, son mécanisme, ses causes organisationnelles et ce que vous en avez retenu pour votre pratique (revue des modifications, robustesse, inspection).",
        },
      ],
    },

    {
      id: 20,
      key: 'practical_case',
      title: "Cas pratique — Effondrement d'une dalle en cours de bétonnage",
      icon: '🔧',
      type: 'practical',
      diagramType: 'process_flow',
      scenario: "Une dalle de 25 cm s'effondre pendant le coulage. Le plan d'étaiement prévoyait un étai pour 1,5 m² ; sur place, on en compte un pour 2,5 m².",
      description: "Étais de capacité 15 kN. Charges : béton frais 25 kN/m³ et charge de chantier 1,5 kN/m². Il faut vérifier les étais et mener l'analyse des causes.",
      resolution_latex_1: "q = 0{,}25 \\times 25 + 1{,}5 = 7{,}75\\ \\text{kN/m}^2",
      resolution_latex_2: "F_{prévu} = 7{,}75 \\times 1{,}5 = 11{,}6\\ \\text{kN} < 15 \\quad \\checkmark \\qquad F_{réel} = 7{,}75 \\times 2{,}5 = 19{,}4\\ \\text{kN} > 15",
      resolution_latex_3: "\\text{5 pourquoi : étais manquants} \\leftarrow \\text{pas de réception de l'étaiement} \\leftarrow \\text{plan non transmis à l'équipe}",
      conclusion: "Étais surchargés de 29 % : cause technique immédiate. Causes racines : plan d'étaiement non diffusé et absence de point d'arrêt avant bétonnage.",
    },

    {
      id: 21,
      key: 'summary',
      title: "Résumé",
      icon: '📋',
      type: 'summary',
      content: `### Le RETEX en 6 points
1. **Plusieurs causes** : techniques, organisationnelles et humaines.
2. **Méthodes** : chronologie, arbre des causes, 5 pourquoi, Ishikawa.
3. **Flambement** (Québec) : $N_{cr} = \\pi^2 E I / L_f^2$.
4. **Robustesse** (Ronan Point) : chaînages et redondance.
5. **Modifications** (Hyatt) : tout changement de détail se recalcule.
6. **Maintenance** (Gênes, Surfside) : inspecter, écouter les alertes, agir.`,
    },

    {
      id: 22,
      key: 'key_points',
      title: "Points clés à retenir",
      icon: '⭐',
      type: 'keypoints',
      points: [
        "Une catastrophe = une combinaison de causes",
        "Chercher la cause, pas le coupable",
        "Toute modification de détail est recalculée",
        "Robustesse : une défaillance locale ne doit pas tout emporter",
        "Les signaux faibles doivent déclencher une inspection",
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
        "Je sais conduire une analyse avec l'arbre des causes et les 5 pourquoi",
        "J'explique le mécanisme de chacun des huit cas étudiés",
        "Je sais calculer une charge critique d'Euler et un effort de chaînage",
        "Je relie chaque cas aux règles actuelles qu'il a inspirées",
        "J'ai réussi les trois exercices",
      ],
    },
  ],

  quickQuiz: {
    question: "Pourquoi l'assemblage des passerelles du Hyatt Regency a-t-il cédé ?",
    options: [
      { id: 'a', label: "A) Une modification du détail des tiges a doublé l'effort sur l'assemblage" },
      { id: 'b', label: 'B) Un séisme a frappé Kansas City' },
      { id: 'c', label: 'C) Le béton était de mauvaise qualité' },
    ],
    correct: 'a',
    explanation: "Le passage d'une tige continue à deux tiges décalées a fait porter les deux passerelles par l'assemblage supérieur, soit un effort doublé.",
  },
};
