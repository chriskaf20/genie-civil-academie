// ── Lesson: Méthodes d'exécution — Module 31 ───────────────────────────────────
export const lesson_methodes = {
  moduleId: 31,
  slug: 'methodes',
  lessonIndex: 1,
  title: "Méthodes d'Exécution : Coffrage, Bétonnage, Cure, Levage & Terrassement",
  subtitle: "Module 31 — Méthodes & Procédés Généraux de Construction",
  level: 'Intermédiaire',
  duration: '40h',
  diagramType: 'plan_coffrage',
  tags: ['Méthodes', 'Coffrage', 'Banches', 'Bétonnage', 'Cure', 'Maturométrie', 'Levage', 'Terrassement'],

  steps: [
    {
      id: 1,
      key: 'definition',
      title: "Définition — Le rôle des méthodes",
      icon: '📖',
      type: 'definition',
      fr: "Méthodes et procédés d'exécution des travaux",
      en: 'Construction Methods & Temporary Works',
      metier: "Métier de l'ingénieur méthodes : choisir les modes opératoires, dimensionner les ouvrages provisoires et fixer les cadences avec le conducteur de travaux.",
      content: `Le **bureau des méthodes** transforme les plans de l'ouvrage en une manière concrète de le construire : dans quel ordre, avec quels matériels, à quelle cadence et en sécurité.

### Ses livrables
- **Plan d'installation de chantier (PIC)** : grues, accès, stockages, base vie.
- **Notes de méthodes** : phasage, modes opératoires, cycles de coffrage.
- **Calculs d'ouvrages provisoires** : coffrages, étaiements, plates-formes de levage, stabilité des éléments préfabriqués en phase provisoire.
- **Plannings et cadences** : rotation des banches, volumes coulés par jour, rendements des engins.

### Les grandes familles de procédés
1. **Coffrages** : traditionnels (bois), banches métalliques (voiles), tables (dalles), grimpants et glissants (noyaux, piles).
2. **Bétonnage** : approvisionnement, mise en place, vibration, cure.
3. **Préfabrication** : prédalles, poutres, éléments 3D, assemblés sur site.
4. **Levage et manutention** : grues à tour, grues mobiles, élingage.
5. **Terrassements** : extraction, chargement, transport, compactage.

> 💡 Une bonne méthode se juge sur trois critères : sécurité, qualité, coût-délai.`,
    },

    {
      id: 2,
      key: 'importance',
      title: "Pourquoi les méthodes font le résultat d'un chantier",
      icon: '⚠️',
      type: 'importance',
      content: `Le gros œuvre représente une part majeure du coût et du délai d'un bâtiment ; quelques jours gagnés sur un cycle de coffrage se répètent à chaque étage.

- **Coût** : le coffrage et la main-d'œuvre associée pèsent souvent plus que le béton lui-même dans le prix d'un voile.
- **Délai** : la rotation des banches et le temps de décoffrage fixent la cadence d'un étage courant.
- **Qualité** : une vibration insuffisante ou une cure oubliée donnent des nids de cailloux, des fissures et une durabilité réduite.
- **Sécurité** : les ouvrages provisoires (étaiements, coffrages) sont à l'origine d'accidents graves lorsqu'ils sont improvisés.

> ⚠️ **Règle d'or** : tout ouvrage provisoire est calculé, dessiné et réceptionné avant usage, comme un ouvrage définitif.`,
    },

    {
      id: 3,
      key: 'applications',
      title: "Applications sur le terrain",
      icon: '🏗️',
      type: 'applications',
      examples: [
        { context: "Logements R+6 en voiles béton", text: "Cycle de banches sur une journée : décoffrage, nettoyage, huilage, ferraillage, fermeture, coulage." },
        { context: "Dalles de grande surface", text: "Tables coffrantes ou prédalles avec étaiement, plan de rotation et de déchargement par grue." },
        { context: "Noyau de tour", text: "Coffrage autogrimpant avancé de 3,5 m par jour, indépendant de la grue." },
        { context: "Parking enterré", text: "Terrassement en déblai, évacuation par camions, calcul du nombre de rotations." },
        { context: "Ouvrage d'art", text: "Levage de poutres préfabriquées de 60 t par grue mobile, plan de levage et calage sur appuis provisoires." },
      ],
    },

    {
      id: 4,
      key: 'theory',
      title: "Théorie — Du coffrage au décoffrage",
      icon: '📐',
      type: 'theory',
      diagramType: 'plan_coffrage',
      content: `### 1. Poussée du béton frais
Un béton frais agit sur le coffrage comme un liquide lourd. La pression maximale théorique est **hydrostatique** :
$$p_{max} = \\gamma_b \\times h \\qquad (\\gamma_b \\approx 25\\ \\text{kN/m}^3)$$
Avec une vitesse de montée lente et un béton qui commence à prendre, la pression réelle est plus faible (DIN 18218, CIRIA) ; avec un **béton autoplaçant (BAP)**, on retient la pression hydrostatique complète.

### 2. Vibration et mise en place
- Couches de 30 à 50 cm, aiguille enfoncée dans la couche inférieure.
- Points de vibration espacés d'environ 1,5 fois le rayon d'action de l'aiguille.
- Éviter la sur-vibration (ségrégation) et la chute libre de plus de 1,5 à 2 m.

### 3. Durcissement et maturométrie
La résistance dépend du temps **et** de la température. La méthode de **maturité** (Nurse-Saul) cumule les degrés-heures au-dessus d'une température de référence $T_0 = -10\\ ^\\circ\\mathrm{C}$ :
$$M = \\sum (T - T_0)\\,\\Delta t$$
Une courbe d'étalonnage (maturité → résistance) établie au laboratoire permet de décoffrer au bon moment.

### 4. Cure
Protéger le béton jeune contre la dessiccation (produit de cure, bâche, arrosage) pendant une durée fonction de la classe de cure (NF EN 13670) et de la température.

### 5. Levage
La tension dans chaque brin d'une élingue augmente quand l'angle s'ouvre :
$$T = \\frac{P}{n \\cos \\alpha}$$
où $\\alpha$ est l'angle de chaque brin avec la verticale. On limite $\\alpha$ à 60° (angle au sommet ≤ 120°).`,
    },

    {
      id: 5,
      key: 'formulas',
      title: "Formules essentielles",
      icon: '🔢',
      type: 'formulas',
      diagramType: 'plan_coffrage',
      formulas: [
        {
          name: "Poussée hydrostatique du béton frais",
          latex: "p_{max} = \\gamma_b\\, h \\qquad F = \\frac{1}{2}\\gamma_b\\, h^2",
          description: "Pression maximale en pied de coffrage et résultante par mètre de longueur (à h/3 du pied).",
          variables: [
            { symbol: 'p_{max}', name: 'Pression en pied', unit: '\\text{kPa}', role: 'Valeur pour dimensionner peaux, raidisseurs et tiges de serrage.', category: 'Résultat' },
            { symbol: 'F', name: 'Résultante par mètre', unit: '\\text{kN/m}', role: 'Effort horizontal total sur une bande de 1 m.', category: 'Résultat' },
            { symbol: '\\gamma_b', name: 'Poids volumique du béton frais', unit: '\\text{kN/m}^3', role: 'Environ 25 kN/m³.', category: 'Matériau' },
            { symbol: 'h', name: 'Hauteur de béton liquide', unit: '\\text{m}', role: 'Hauteur coulée sans prise du béton (toute la hauteur pour un BAP).', category: 'Géométrie' },
          ],
          ruleOfThumb: "Pour un BAP, coffrages et tiges doivent reprendre la poussée hydrostatique sur toute la hauteur.",
        },
        {
          name: "Maturité du béton (méthode de Nurse-Saul)",
          latex: "M = \\sum_{i} \\left(T_i - T_0\\right) \\Delta t_i",
          description: "Les degrés-heures cumulés permettent d'estimer la résistance en place grâce à une courbe d'étalonnage.",
          variables: [
            { symbol: 'M', name: 'Maturité', unit: '^\\circ\\mathrm{C}\\cdot\\text{h}', role: 'Indice de durcissement atteint.', category: 'Résultat' },
            { symbol: 'T_i', name: 'Température du béton', unit: '^\\circ\\mathrm{C}', role: 'Mesurée par sondes noyées dans le béton.', category: 'Mesure' },
            { symbol: 'T_0', name: 'Température de référence', unit: '^\\circ\\mathrm{C}', role: 'Habituellement −10 °C.', category: 'Constante' },
            { symbol: '\\Delta t_i', name: 'Intervalle de temps', unit: '\\text{h}', role: 'Pas de mesure.', category: 'Temps' },
          ],
          ruleOfThumb: "Par temps froid, la maturité progresse beaucoup plus lentement : à 5 °C, il faut environ deux fois plus de temps qu'à 20 °C pour la même maturité.",
        },
        {
          name: "Tension dans les brins d'une élingue",
          latex: "T = \\frac{P}{n\\,\\cos\\alpha}",
          description: "Effort dans chaque brin d'une élingue à n brins symétriques ; il doit rester inférieur à la CMU du brin.",
          variables: [
            { symbol: 'T', name: 'Tension par brin', unit: '\\text{kN}', role: 'À comparer à la charge maximale d\'utilisation (CMU).', category: 'Résultat' },
            { symbol: 'P', name: 'Poids de la charge', unit: '\\text{kN}', role: 'Poids levé, accessoires compris.', category: 'Action' },
            { symbol: 'n', name: 'Nombre de brins porteurs', unit: '-', role: 'Pour une charge rigide à 4 brins, on ne compte souvent que 3 brins porteurs.', category: 'Géométrie' },
            { symbol: '\\alpha', name: 'Angle du brin avec la verticale', unit: '^\\circ', role: 'Limité à 60°.', category: 'Géométrie' },
          ],
          ruleOfThumb: "À 60° de la verticale, chaque brin porte autant que la charge entière divisée par le nombre de brins… multipliée par deux.",
        },
        {
          name: "Rendement d'une pelle hydraulique",
          latex: "Q = \\frac{V_g \\, k_r \\, 3\\,600}{T_c} \\, E",
          description: "Volume foisonné chargé par heure.",
          variables: [
            { symbol: 'Q', name: 'Rendement', unit: '\\text{m}^3/\\text{h}', role: 'Volume foisonné chargé par heure.', category: 'Résultat' },
            { symbol: 'V_g', name: 'Capacité du godet', unit: '\\text{m}^3', role: 'Donnée constructeur.', category: 'Matériel' },
            { symbol: 'k_r', name: 'Coefficient de remplissage', unit: '-', role: '0,8 à 1,1 selon le terrain.', category: 'Terrain' },
            { symbol: 'T_c', name: 'Durée d\'un cycle', unit: '\\text{s}', role: 'Creuser, pivoter, vider, revenir.', category: 'Temps' },
            { symbol: 'E', name: 'Efficacité horaire', unit: '-', role: '50 min productives par heure → E = 0,83.', category: 'Organisation' },
          ],
        },
        {
          name: "Nombre de camions pour évacuer les déblais",
          latex: "N = \\left\\lceil \\frac{Q \\, T_r}{V_c} \\right\\rceil",
          description: "Nombre de camions pour ne jamais faire attendre la pelle.",
          variables: [
            { symbol: 'N', name: 'Nombre de camions', unit: '-', role: 'Arrondi à l\'entier supérieur.', category: 'Résultat' },
            { symbol: 'Q', name: 'Rendement de la pelle', unit: '\\text{m}^3/\\text{h}', role: 'Volume foisonné chargé par heure.', category: 'Matériel' },
            { symbol: 'T_r', name: "Durée d'une rotation", unit: '\\text{h}', role: 'Chargement, trajet aller, déchargement, retour.', category: 'Temps' },
            { symbol: 'V_c', name: 'Capacité utile du camion', unit: '\\text{m}^3', role: 'Volume foisonné transporté par voyage.', category: 'Matériel' },
          ],
        },
      ],
    },

    {
      id: 6,
      key: 'stepbystep',
      title: "Calcul complet — Banche de voile coulée en béton autoplaçant",
      icon: '🔬',
      type: 'stepbystep',
      problem: "Un voile de 2,80 m de haut est coulé en une passe avec un BAP (γ_b = 25 kN/m³). Les tiges de serrage sont espacées de 1,20 m horizontalement. Calculer la pression en pied, la résultante par mètre et l'effort repris par une file verticale de tiges.",
      steps_demo: [
        { n: 1, text: "BAP coulé en une passe : pression hydrostatique sur toute la hauteur." },
        { n: 2, text: "Pression en pied : p_max = 25 × 2,80 = 70 kPa." },
        { n: 3, text: "Résultante par mètre : F = ½ × 25 × 2,80² = 98 kN/m, appliquée à 0,93 m du pied." },
        { n: 4, text: "Effort pour une file de tiges (largeur 1,20 m) : 98 × 1,20 = 117,6 kN." },
        { n: 5, text: "Répartir sur les tiges de la file (par exemple 3 niveaux) selon la position de la résultante, puis comparer à la charge admissible de chaque tige." },
        { n: 6, text: "Conclusion : choisir la banche et le serrage dans les abaques du fabricant pour 70 kPa, ou couler en deux passes pour réduire la pression." },
      ],
      result_latex: "p_{max} = 25 \\times 2{,}80 = 70\\ \\text{kPa} \\qquad F = \\tfrac{1}{2} \\times 25 \\times 2{,}80^2 = 98\\ \\text{kN/m} \\qquad F_{file} = 117{,}6\\ \\text{kN}",
    },

    {
      id: 7,
      key: 'units',
      title: "Repères de méthodes",
      icon: '📏',
      type: 'units',
      table: [
        { grandeur: "Poids volumique du béton frais", si: "25 kN/m³", imperial: "≈ 160 lb/ft³", conversion: "Pression : 25 kPa par mètre de hauteur" },
        { grandeur: "Maturité", si: "°C·h", imperial: "°F·h", conversion: "Avec T₀ = −10 °C : 3 jours à 20 °C = 2 160 °C·h" },
        { grandeur: "Rendement d'engin", si: "m³/h foisonnés", imperial: "yd³/h", conversion: "1 m³ = 1,308 yd³" },
        { grandeur: "Coefficient de foisonnement", si: "10 à 40 %", imperial: "-", conversion: "Sables ≈ 10–15 % ; argiles et terres ≈ 20–35 % ; rocher abattu ≈ 40–60 %" },
        { grandeur: "Angle d'élingage", si: "≤ 60° par brin", imperial: "-", conversion: "Angle au sommet ≤ 120°" },
      ],
      note: "Les rendements théoriques doivent être corrigés par l'efficacité réelle du chantier (attentes, déplacements, météo) : 45 à 50 min productives par heure sont une bonne hypothèse.",
    },

    {
      id: 8,
      key: 'hypotheses',
      title: "Hypothèses et règles d'application",
      icon: '📋',
      type: 'hypotheses',
      items: [
        { type: 'info', text: "La pression réduite d'un béton vibré classique dépend de sa vitesse de montée, de sa température et de sa consistance : utilisez les abaques du fournisseur de coffrage." },
        { type: 'info', text: "La courbe maturité-résistance est propre à une formule de béton : elle doit être établie au laboratoire avant usage." },
        { type: 'warning', text: "Un décoffrage prématuré d'une dalle peut provoquer des flèches excessives ou une rupture : respecter l'étaiement et le ré-étaiement prévus." },
        { type: 'warning', text: "Ne jamais lever une charge au-delà de la courbe de charges de la grue à la portée considérée, vent compris." },
        { type: 'tip', text: "Planifiez les rotations de banches pour que la grue serve un seul poste à la fois : la grue est souvent la ressource critique du gros œuvre." },
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
          title: "Exemple 1 : élingue à deux brins",
          given: "Charge de 50 kN levée par 2 brins inclinés de 30° sur la verticale",
          find: "La tension dans chaque brin",
          solution_latex: "T = \\frac{50}{2 \\times \\cos 30^\\circ} = \\frac{50}{1{,}732} = 28{,}9\\ \\text{kN}",
          result: "28,9 kN par brin : choisir des brins de CMU ≥ 3 t.",
        },
        {
          title: "Exemple 2 : maturité par temps froid",
          given: "Béton maintenu à 5 °C pendant 72 h (T₀ = −10 °C)",
          find: "La maturité atteinte et la comparaison avec 20 °C",
          solution_latex: "M_{5^\\circ} = (5 + 10) \\times 72 = 1\\,080\\ ^\\circ\\mathrm{C}\\cdot\\text{h} \\qquad M_{20^\\circ} = (20 + 10) \\times 72 = 2\\,160\\ ^\\circ\\mathrm{C}\\cdot\\text{h}",
          result: "À 5 °C, la maturité est deux fois plus faible : il faut environ 6 jours pour atteindre celle de 3 jours à 20 °C.",
        },
        {
          title: "Exemple 3 : rendement d'une pelle",
          given: "Godet 1,2 m³, remplissage 0,85, cycle 20 s, 50 min productives par heure",
          find: "Le rendement horaire",
          solution_latex: "Q = \\frac{1{,}2 \\times 0{,}85 \\times 3\\,600}{20} \\times 0{,}83 = 152\\ \\text{m}^3/\\text{h foisonnés}",
          result: "Environ 152 m³/h foisonnés, soit 122 m³/h en place avec 25 % de foisonnement.",
        },
      ],
    },

    {
      id: 10,
      key: 'real_examples',
      title: "Exemple réel — Déformation d'une banche coulée trop vite",
      icon: '🏢',
      type: 'examples_real',
      diagramType: 'plan_coffrage',
      examples: [
        {
          context: "Voile de 3,0 m coulé en BAP avec des banches prévues pour une pression de 60 kPa",
          scenario: "Le béton, livré plus fluide que prévu et coulé en continu, exerce la pression hydrostatique complète : 25 × 3,0 = 75 kPa. Deux tiges de serrage rompent, le voile présente un ventre de 4 cm et doit être démoli.",
          decomposition_latex: "p_{réelle} = 75\\ \\text{kPa} > p_{admissible} = 60\\ \\text{kPa} \\quad \\Rightarrow \\quad \\text{surcharge de } 25\\,\\%",
          lesson: "La pression admissible du coffrage doit figurer sur le bon de commande du béton et dans la consigne de coulage (vitesse, hauteur de passe). Avec un BAP, on vérifie toujours la pression hydrostatique totale.",
        },
      ],
    },

    {
      id: 11,
      key: 'diagrams',
      title: "Schéma — Plan de coffrage et cycle de banches",
      icon: '📊',
      type: 'interactive_diagram',
      diagramType: 'plan_coffrage',
      description: "Le plan de coffrage définit la géométrie à réaliser ; le cycle de banches organise la journée de l'équipe.",
      diagram_description: [
        "Plan de coffrage : voiles, poteaux, poutres, réservations et niveaux de dalle",
        "Cycle de banches : décoffrage, nettoyage, huilage, ferraillage, fermeture, coulage",
        "Maturométrie : sondes de température et décoffrage à résistance atteinte",
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
          mistake: "Oublier que le BAP pousse comme un liquide",
          trap: "Utiliser la pression réduite d'un béton vibré pour un BAP",
          fix: "Retenir la pression hydrostatique totale ou couler en plusieurs passes avec une prise intermédiaire.",
        },
        {
          mistake: "Décoffrer selon un délai fixe quelle que soit la météo",
          trap: "« Toujours 24 h » même par 3 °C",
          fix: "Décoffrer sur critère de résistance (éprouvettes témoins ou maturométrie), pas sur une durée.",
        },
        {
          mistake: "Ouvrir largement les brins d'élingue pour gagner de la hauteur",
          trap: "Un angle de 75° multiplie l'effort dans chaque brin par près de 4",
          fix: "Utiliser un palonnier ou des élingues plus longues pour rester sous 60°.",
        },
      ],
    },

    {
      id: 13,
      key: 'tips',
      title: "Astuces de l'ingénieur méthodes",
      icon: '💡',
      type: 'tips',
      tips: [
        "Concevez le phasage pour que chaque équipe travaille sur un plateau différent : moins d'interférences, plus de rendement.",
        "Prévoyez des réservations et des inserts pour les garde-corps dès les plans de coffrage.",
        "Commandez le béton avec la consistance et la vitesse de coulage compatibles avec le coffrage, et notez-les sur le bon.",
        "Calculez le nombre de camions avant de démarrer un terrassement : une pelle qui attend coûte plus cher qu'un camion supplémentaire.",
      ],
    },

    {
      id: 14,
      key: 'norms',
      title: "Normes et références",
      icon: '📜',
      type: 'norms',
      norms: [
        { code: "NF EN 13670 / NF DTU 21", description: "Exécution des ouvrages en béton : coffrages, mise en place, cure, tolérances." },
        { code: "NF EN 12812", description: "Étaiements : exigences de performance et méthodes de conception." },
        { code: "NF P 93-350", description: "Banches industrialisées pour ouvrages en béton." },
        { code: "NF EN 13414 / NF EN 1492", description: "Élingues en câble d'acier et élingues textiles : CMU et marquage." },
        { code: "Recommandation CNAM R487", description: "Utilisation des grues à tour et formation des conducteurs." },
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
          id: 'ex_met_1',
          number: 1,
          difficulty: 'Facile',
          text: "Un voile de 3,0 m est coulé en BAP en une passe. Calculer la pression en pied et la résultante par mètre de coffrage.",
          hint: "p = γ h et F = γ h² / 2.",
          answer_latex: "p_{max} = 25 \\times 3{,}0 = 75\\ \\text{kPa} \\qquad F = \\tfrac{1}{2} \\times 25 \\times 3{,}0^2 = 112{,}5\\ \\text{kN/m}",
          answer_text: "75 kPa en pied ; 112,5 kN/m à 1,0 m du pied.",
        },
        {
          id: 'ex_met_2',
          number: 2,
          difficulty: 'Moyen',
          text: "Une pelle charge 150 m³/h foisonnés. Les camions transportent 12 m³ et effectuent une rotation complète en 30 min. Combien de camions faut-il ?",
          hint: "Volume évacué par camion et par heure : 12 m³ / 0,5 h.",
          answer_latex: "N = \\left\\lceil \\frac{150 \\times 0{,}5}{12} \\right\\rceil = \\lceil 6{,}25 \\rceil = 7\\ \\text{camions}",
          answer_text: "7 camions.",
        },
        {
          id: 'ex_met_3',
          number: 3,
          difficulty: 'Difficile',
          text: "Une prédalle de 4,5 t est levée par une élingue à 4 brins dont on ne compte que 3 brins porteurs, inclinés de 45° sur la verticale. Calculer la tension par brin et la CMU minimale (g = 10 m/s²).",
          hint: "P = 45 kN ; T = P / (3 cos 45°).",
          answer_latex: "T = \\frac{45}{3 \\times \\cos 45^\\circ} = \\frac{45}{2{,}12} = 21{,}2\\ \\text{kN} \\approx 2{,}1\\ \\text{t}",
          answer_text: "21,2 kN par brin : CMU de brin d'au moins 2,5 t.",
        },
      ],
    },

    {
      id: 16,
      key: 'corrections',
      title: "Corrections détaillées",
      icon: '✅',
      type: 'corrections',
      note: "Les corrections figurent sous chaque exercice. Pour l'exercice 3, comparez avec un levage à 60° : la tension passe à 30 kN par brin.",
    },

    {
      id: 17,
      key: 'quiz',
      title: "Quiz — Méthodes",
      icon: '🎯',
      type: 'quiz',
      questions: [
        {
          id: 'q_met_1',
          question: "Quelle pression faut-il retenir pour un coffrage rempli de BAP en une passe ?",
          options: [
            { id: 'a', text: 'La pression hydrostatique complète γ·h' },
            { id: 'b', text: 'La moitié de la pression hydrostatique' },
            { id: 'c', text: 'Une pression nulle, le BAP ne pousse pas' },
          ],
          correct: 'a',
          explanation: "Le BAP se comporte comme un liquide : la poussée est hydrostatique sur toute la hauteur coulée.",
        },
        {
          id: 'q_met_2',
          question: "Sur quel critère décide-t-on de décoffrer une dalle ?",
          options: [
            { id: 'a', text: 'Après 24 h, toujours' },
            { id: 'b', text: 'Quand la résistance en place atteint la valeur fixée par la note de méthode' },
            { id: 'c', text: 'Quand le béton est sec au toucher' },
          ],
          correct: 'b',
          explanation: "On mesure la résistance (éprouvettes témoins, maturométrie) : la durée nécessaire dépend de la température.",
        },
        {
          id: 'q_met_3',
          question: "Que devient la tension d'un brin quand son angle avec la verticale augmente ?",
          options: [
            { id: 'a', text: 'Elle diminue' },
            { id: 'b', text: 'Elle reste constante' },
            { id: 'c', text: 'Elle augmente (division par cos α)' },
          ],
          correct: 'c',
          explanation: "T = P / (n cos α) : à 60°, cos α = 0,5 et la tension est doublée par rapport à un levage vertical.",
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
        "Présentez les différents systèmes de coffrage d'un bâtiment de logements et leurs critères de choix.",
        "Expliquez la méthode de maturité et son intérêt pour l'organisation du décoffrage en hiver.",
        "Établissez l'organisation d'un terrassement de 6 000 m³ en place : choix de la pelle, nombre de camions et durée des travaux.",
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
          question: "Le béton arrive plus fluide que commandé alors que vos banches sont limitées à 60 kPa. Que faites-vous ?",
          answer_hint: "Je refuse la toupie ou je réduis la hauteur de passe pour rester sous la pression admissible, je préviens la centrale et je trace l'incident ; je ne coule jamais au-delà de la capacité du coffrage.",
        },
        {
          question: "Comment gagnez-vous une journée sur le cycle d'un étage courant ?",
          answer_hint: "En analysant le chemin critique (grue, banches, ferraillage), en préfabriquant des armatures, en ajoutant un jeu de banches ou en passant aux prédalles, et en accélérant le décoffrage grâce à la maturométrie.",
        },
      ],
    },

    {
      id: 20,
      key: 'practical_case',
      title: "Cas pratique — Organiser le terrassement d'un parking enterré",
      icon: '🔧',
      type: 'practical',
      diagramType: 'plan_coffrage',
      scenario: "Déblai de 6 000 m³ en place, argile (foisonnement 25 %), décharge à 20 min de trajet.",
      description: "Pelle de 1,5 m³ (remplissage 0,9, cycle 22 s, efficacité 0,83), camions de 14 m³ foisonnés, rotation de 50 min. Déterminer le rendement, le nombre de camions et la durée des travaux (8 h de travail par jour).",
      resolution_latex_1: "Q = \\frac{1{,}5 \\times 0{,}9 \\times 3\\,600}{22} \\times 0{,}83 = 183\\ \\text{m}^3/\\text{h foisonnés}",
      resolution_latex_2: "N = \\left\\lceil \\frac{183 \\times 50/60}{14} \\right\\rceil = \\lceil 10{,}9 \\rceil = 11\\ \\text{camions}",
      resolution_latex_3: "V_{foisonné} = 6\\,000 \\times 1{,}25 = 7\\,500\\ \\text{m}^3 \\quad \\Rightarrow \\quad t = \\frac{7\\,500}{183 \\times 8} = 5{,}1\\ \\text{jours}",
      conclusion: "Une pelle et 11 camions permettent de terrasser en un peu plus de 5 jours ; prévoir une marge météo et l'arrosage des pistes.",
    },

    {
      id: 21,
      key: 'summary',
      title: "Résumé",
      icon: '📋',
      type: 'summary',
      content: `### Les méthodes en 6 points
1. **Le bureau des méthodes** choisit les procédés, le phasage et les cadences.
2. **Coffrages** : pression jusqu'à $\\gamma_b h$, totale pour un BAP.
3. **Vibration** : couches de 30 à 50 cm, points espacés d'environ 1,5 fois le rayon d'action.
4. **Décoffrage** sur critère de résistance, avec la maturité $M = \\sum (T - T_0)\\Delta t$.
5. **Levage** : $T = P / (n \\cos\\alpha)$, angle limité à 60°.
6. **Terrassement** : rendement, foisonnement et nombre de camions calculés avant de démarrer.`,
    },

    {
      id: 22,
      key: 'key_points',
      title: "Points clés à retenir",
      icon: '⭐',
      type: 'keypoints',
      points: [
        "Pression du béton frais : 25 kPa par mètre de hauteur liquide",
        "BAP : pression hydrostatique totale",
        "Maturité de référence : T₀ = −10 °C",
        "Élingage : α ≤ 60°, T = P / (n cos α)",
        "Tout ouvrage provisoire est calculé et réceptionné",
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
        "Je sais calculer la poussée du béton frais sur un coffrage",
        "J'explique la méthode de maturité et son usage",
        "Je sais calculer la tension dans une élingue",
        "Je sais dimensionner un atelier de terrassement",
        "J'ai réussi les trois exercices",
      ],
    },
  ],

  quickQuiz: {
    question: "Quelle est la pression en pied d'un voile de 2,5 m coulé en BAP ?",
    options: [
      { id: 'a', label: 'A) 25 kPa' },
      { id: 'b', label: 'B) 62,5 kPa' },
      { id: 'c', label: 'C) 125 kPa' },
    ],
    correct: 'b',
    explanation: "p = γ·h = 25 × 2,5 = 62,5 kPa : le BAP exerce la pression hydrostatique complète.",
  },
};
