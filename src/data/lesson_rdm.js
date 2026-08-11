// ── Lesson: RDM — Résistance des Matériaux ─────────────────────────────────────
export const lesson_rdm = {
  moduleId: 7,
  slug: 'rdm',
  lessonIndex: 1,
  title: 'Contraintes Normales & Moments Fléchissants',
  subtitle: 'Module 07 — Résistance des Matériaux (RDM)',
  level: 'Intermédiaire',
  duration: '55h',
  diagramType: 'force_decomposition',
  tags: ['Contraintes', 'Moments', 'Flèches', 'RDM', 'Eurocode', 'Poutre'],

  steps: [
    {
      id: 1,
      key: 'definition',
      title: 'Définition — La Résistance des Matériaux',
      icon: '📖',
      type: 'definition',
      fr: 'Résistance des Matériaux (RDM)',
      en: 'Mechanics of Materials / Strength of Materials',
      metier: 'Utilisée quotidiennement par les ingénieurs de bureau d\'études pour dimensionner les poutres, poteaux, dalles et fondations.',
      content: `La **Résistance des Matériaux** (RDM) est la science qui étudie le comportement des corps solides déformables soumis à des forces extérieures.

### Objectifs fondamentaux :
- **Calculer les contraintes internes** ($\\sigma$, $\\tau$) dans les sections de la structure.
- **Évaluer les déformations** ($\\varepsilon$, $\\gamma$) pour vérifier la compatibilité géométrique.
- **Prédire les risques de rupture** et assurer la sécurité réglementaire.

> 💡 La RDM est le cœur du calcul structurel : sans elle, aucun pont, bâtiment ou barrage ne peut être conçu en toute sécurité.`,
    },
    {
      id: 2,
      key: 'importance',
      title: 'Pourquoi la RDM est indispensable en Génie Civil',
      icon: '⚠️',
      type: 'importance',
      content: `La RDM est le **langage mathématique de la résistance des structures**. Elle conditionne la totalité des calculs de dimensionnement.

- **Sécurité des personnes** : Dimensionner un plancher sans RDM, c'est risquer l'effondrement sous les charges d'exploitation.
- **Conformité aux Eurocodes** : L'Eurocode 2 (béton), EC3 (acier) et EC5 (bois) imposent des vérifications directement issues de la RDM.
- **Optimisation économique** : Réduire les sections tout en maintenant la résistance nécessite une maîtrise parfaite des contraintes.

> 💡 **Fait de terrain** : 73% des expertises judiciaires en sinistres de bâtiment révèlent des erreurs de calcul RDM comme cause principale.`,
    },
    {
      id: 3,
      key: 'applications',
      title: 'Applications sur chantier et en bureau d\'études',
      icon: '🏗️',
      type: 'applications',
      examples: [
        { context: 'Dimensionnement de poutres', text: 'Calcul du moment résistant M_Rd et des armatures longitudinales pour une poutre en béton armé.' },
        { context: 'Vérification de poteau', text: 'Analyse de la stabilité au flambement (λ, risque d\'Euler) pour les poteaux élancés.' },
        { context: 'Dalle de plancher', text: 'Évaluation de la flèche instantanée et différée, comparée à L/500 (ELS).' },
        { context: 'Profilés métalliques', text: 'Vérification d\'un profil HEA 240 soumis à la flexion composée (M+N).' },
      ],
    },
    {
      id: 4,
      key: 'theory',
      title: 'Bases théoriques — Contraintes et déformations',
      icon: '📐',
      type: 'theory',
      diagramType: 'force_decomposition',
      content: `### Loi de Hooke (Comportement Élastique Linéaire)

Le comportement d'un matériau dans le domaine élastique est gouverné par la **loi de Hooke** :

$$\\sigma = E \\cdot \\varepsilon$$

où :
- $\\sigma$ = contrainte normale [MPa = N/mm²]
- $E$ = module d'Young [MPa] : E_acier = 210 000 MPa, E_béton = 30 000–35 000 MPa
- $\\varepsilon$ = déformation unitaire [sans dimension]

### Hypothèse de Bernoulli-Navier
Les sections droites restent planes après déformation (valide pour les poutres élancées : L/h > 5).

### Contrainte normale de flexion
$$\\sigma(y) = \\frac{M_z \\cdot y}{I_z}$$

- $M_z$ = moment fléchissant [kN·m]
- $y$ = distance à l'axe neutre [mm]
- $I_z$ = moment d'inertie par rapport à l'axe z [mm⁴ ou cm⁴]`,
    },
    {
      id: 5,
      key: 'formulas',
      title: 'Formules essentielles — Poutres fléchies',
      icon: '🔢',
      type: 'formulas',
      diagramType: 'force_decomposition',
      formulas: [
        {
          name: 'Moment fléchissant maximal — Charge uniforme',
          latex: 'M_{max} = \\frac{q \\cdot L^2}{8} \\quad \\text{(poutre bi-appuyée, charge uniforme)}',
          description: 'q = charge linéaire [kN/m], L = portée [m]. Exemple : q=20 kN/m, L=6m → M_max=90 kN·m'
        },
        {
          name: 'Moment fléchissant maximal — Charge ponctuelle centrée',
          latex: 'M_{max} = \\frac{P \\cdot L}{4} \\quad \\text{(charge ponctuelle P au centre)}',
          description: 'P = charge concentrée [kN]. Exemple : P=100 kN, L=5m → M_max=125 kN·m'
        },
        {
          name: 'Contrainte normale maximale (flexion simple)',
          latex: '\\sigma_{max} = \\frac{M_{max}}{W_{el}} = \\frac{M_{max} \\cdot v_{max}}{I_z}',
          description: 'W_el = module de résistance élastique [cm³]. σ doit rester ≤ f_yd pour les aciers'
        },
        {
          name: 'Flèche maximale — Charge uniforme, poutre bi-appuyée',
          latex: 'f_{max} = \\frac{5 \\cdot q \\cdot L^4}{384 \\cdot E \\cdot I} \\quad \\le \\frac{L}{250} \\text{ (ELS)}',
          description: 'Vérification de la flèche à l\'État Limite de Service (ELS). E en MPa, I en mm⁴, q en N/mm'
        },
        {
          name: 'Effort tranchant maximal',
          latex: 'V_{max} = \\frac{q \\cdot L}{2} \\quad \\text{(charge uniforme, bi-appuyée)}',
          description: 'Effort tranchant aux appuis — sollicite les armatures transversales (étriers)'
        },
      ],
    },
    {
      id: 6,
      key: 'stepbystep',
      title: 'Démonstration pas-à-pas — Calcul complet d\'une poutre',
      icon: '🔬',
      type: 'stepbystep',
      problem: 'Poutre bi-appuyée, portée L = 6 m, charge uniforme q = 25 kN/m (ELU). Section béton armé 30×50 cm. Calculer M_max, V_max et vérifier la contrainte.',
      steps_demo: [
        { n: 1, text: 'Données : L = 6 m, q_ELU = 25 kN/m (charges pondérées 1,35G + 1,50Q)' },
        { n: 2, text: 'Calcul du moment max : M_max = q·L²/8 = 25 × 6² / 8 = 112,5 kN·m' },
        { n: 3, text: 'Calcul de l\'effort tranchant max : V_max = q·L/2 = 25 × 6 / 2 = 75 kN' },
        { n: 4, text: 'Module de résistance : W_el = b·h²/6 = 300 × 500²/6 = 12 500 000 mm³ = 12 500 cm³' },
        { n: 5, text: 'Contrainte de flexion : σ_max = M_max / W_el = 112,5×10⁶ / 12 500 000 = 9,0 MPa' },
        { n: 6, text: 'Vérification : σ_max = 9,0 MPa << f_cd_béton = 16,7 MPa → Section suffisante ✓' },
      ],
      result_latex: 'M_{max} = 112{,}5 \\text{ kN·m} \\quad V_{max} = 75 \\text{ kN} \\quad \\sigma_{max} = 9{,}0 \\text{ MPa} \\le 16{,}7 \\text{ MPa} \\quad \\checkmark',
    },
    {
      id: 7,
      key: 'units',
      title: 'Unités & Systèmes de mesure en RDM',
      icon: '📏',
      type: 'units',
      table: [
        { grandeur: 'Contrainte normale σ', si: 'MPa = N/mm²', imperial: 'psi ou ksi', conversion: '1 MPa = 145,04 psi' },
        { grandeur: 'Contrainte de cisaillement τ', si: 'MPa', imperial: 'psi', conversion: '1 MPa = 145,04 psi' },
        { grandeur: 'Module d\'Young E', si: 'GPa (1000 MPa)', imperial: 'ksi', conversion: '1 GPa = 145 ksi' },
        { grandeur: 'Moment d\'inertie I', si: 'mm⁴ ou cm⁴', imperial: 'in⁴', conversion: '1 cm⁴ = 0,0240 in⁴' },
        { grandeur: 'Module de résistance W', si: 'mm³ ou cm³', imperial: 'in³', conversion: '1 cm³ = 0,0610 in³' },
        { grandeur: 'Moment de flexion M', si: 'kN·m', imperial: 'kip·ft', conversion: '1 kN·m = 0,7375 kip·ft' },
      ],
      note: '⚠️ RÈGLE D\'OR : Pour obtenir σ en MPa (N/mm²), utiliser N en newtons [N] et les surfaces en mm². Ne jamais mélanger kN et cm² sans conversion.',
    },
    {
      id: 8,
      key: 'hypotheses',
      title: 'Hypothèses de la RDM — Conditions d\'application',
      icon: '📋',
      type: 'hypotheses',
      items: [
        { type: 'info', text: 'Hypothèse de Bernoulli : Les sections droites restent planes et perpendiculaires à la fibre neutre après déformation (valide pour L/h > 5).' },
        { type: 'info', text: 'Matériau homogène, isotrope, et comportement élastique linéaire dans le domaine de service.' },
        { type: 'warning', text: 'ATTENTION : La RDM classique ne s\'applique pas aux plaques épaisses (vérins, culées de ponts massifs) — utiliser la théorie des coques ou EF.' },
        { type: 'warning', text: 'Les formules de flèche supposent de petites déformations (f/L < 1/50). Au-delà, utiliser la théorie des grandes déformations.' },
        { type: 'tip', text: 'Astuce BET : Vérifier toujours l\'élancement λ = L_eff/i (i = rayon de giration) pour décider si le flambement est critique.' },
        { type: 'warning', text: 'Ne pas confondre la section brute (béton + acier) et la section réduite homogénéisée (Section Bh = Bb + n·Ast) dans le calcul de I.' },
      ],
    },
    {
      id: 9,
      key: 'simple_examples',
      title: 'Exemples guidés — Calculs RDM de base',
      icon: '✏️',
      type: 'examples_simple',
      examples: [
        {
          title: 'Exemple 1 : Contrainte de traction simple',
          given: 'Barre acier S235 : section A = 15,08 cm², effort N = 350 kN (traction)',
          find: 'Contrainte σ et taux de travail par rapport à f_yd = 235/1.00 = 235 MPa',
          solution_latex: '\\sigma = \\frac{N}{A} = \\frac{350 \\times 10^3}{1508} = 232{,}1 \\text{ MPa}',
          result: 'σ = 232.1 MPa ≤ 235 MPa → Taux de travail = 98.8% ✓ (limite atteinte)',
        },
        {
          title: 'Exemple 2 : Moment d\'inertie d\'une section rectangulaire',
          given: 'Section rectangulaire b = 25 cm, h = 60 cm',
          find: 'Moment d\'inertie I_z (par rapport à l\'axe horizontal médian)',
          solution_latex: 'I_z = \\frac{b \\cdot h^3}{12} = \\frac{250 \\times 600^3}{12} = 4{,}50 \\times 10^9 \\text{ mm}^4',
          result: 'I_z = 4500 cm⁴ (ou 4,50 × 10⁹ mm⁴)',
        },
        {
          title: 'Exemple 3 : Flèche d\'une poutre bi-appuyée',
          given: 'Poutre IPE 300, L = 5 m, q = 10 kN/m. E = 210 000 MPa, I_y = 8356 cm⁴',
          find: 'Flèche maximale f_max et vérification ≤ L/250',
          solution_latex: 'f_{max} = \\frac{5 \\times (10/1000) \\times 5000^4}{384 \\times 210000 \\times 83{,}56 \\times 10^6} = 5{,}8 \\text{ mm}',
          result: 'f_max = 5.8 mm ≤ L/250 = 20 mm → Vérifiée ELS ✓',
        },
      ],
    },
    {
      id: 10,
      key: 'real_examples',
      title: 'Exemples de bureau d\'études — Applications réelles',
      icon: '🏢',
      type: 'examples_real',
      diagramType: 'force_decomposition',
      examples: [
        {
          context: 'Bureau d\'études — Poutre mixte acier-béton R+4',
          scenario: 'Poutre en acier HEA 300 (portée 8 m) avec dalle béton collaborante. Charges : G=15kN/m, Q=10kN/m → q_ELU = 1,35×15 + 1,50×10 = 35,25 kN/m.',
          decomposition_latex: 'M_{Ed} = \\frac{35{,}25 \\times 8^2}{8} = 282 \\text{ kN·m} \\quad W_{pl} = 1383 \\text{ cm}^3 \\text{ (HEA 300)}',
          lesson: 'Moment résistant M_Rd = W_pl × f_yd/γ_M0 = 1383 × 235/1.00 = 325 kN·m > 282 kN·m → Profilé conforme ✓',
        },
      ],
    },
    {
      id: 11,
      key: 'diagrams',
      title: 'Diagrammes RDM — Efforts internes et déformées',
      icon: '📊',
      type: 'interactive_diagram',
      diagramType: 'force_decomposition',
      description: 'Visualisez la décomposition des efforts (tranchant V, moment M) pour une poutre bi-appuyée avec charge uniforme. Faites varier l\'angle de chargement pour comprendre la répartition des forces internes.',
      diagram_description: [
        'Diagramme des moments fléchissants (DMF) — parabole du 2nd degré',
        'Diagramme des efforts tranchants (DET) — linéaire par tronçons',
        'Déformée élastique de la poutre sous charges',
      ],
    },
    {
      id: 12,
      key: 'mistakes',
      title: 'Erreurs fatales en RDM — À ne jamais commettre',
      icon: '⛔',
      type: 'mistakes',
      items: [
        {
          mistake: 'Confondre Module de résistance W et Moment d\'inertie I',
          trap: 'Diviser M par I au lieu de M par W = I/v_max (appliquer la formule σ=M·y/I sans calculer y)',
          fix: 'W_el = I/v_max où v_max = distance de la fibre la plus éloignée de l\'axe neutre. Pour un rectangle : W = b·h²/6.',
        },
        {
          mistake: 'Oublier de convertir les unités avant le calcul de flèche',
          trap: 'Calculer f = 5qL⁴/384EI avec q en kN/m, L en m, E en MPa et I en cm⁴ → résultat faux',
          fix: 'Convertir TOUT en N et mm : q[N/mm], L[mm], E[N/mm²=MPa], I[mm⁴] → f en [mm].',
        },
        {
          mistake: 'Négliger l\'effort normal dans le calcul de flambement',
          trap: 'Vérifier seulement la flexion d\'un poteau élancé et ignorer le risque de flambement (rupture soudaine)',
          fix: 'Calculer l\'élancement λ = L_eff/i. Si λ > 60-80, vérifier le flambement selon EC3/EC2.',
        },
        {
          mistake: 'Utiliser la portée L au lieu de la longueur efficace L_eff pour le calcul de flambement',
          trap: 'Appliquer λ = L/i alors que les conditions d\'appui réduisent ou augmentent la longueur de flambement',
          fix: 'L_eff = k × L où k = 0,5 (encastrement-encastrement), 0,7 (encastrement-rotule), 1,0 (rotule-rotule), 2,0 (console).',
        },
      ],
    },
    {
      id: 13,
      key: 'tips',
      title: 'Astuces du terrain — Secrets des ingénieurs BET',
      icon: '💡',
      type: 'tips',
      tips: [
        'Pour estimer rapidement un profil acier : M_Ed [kN·m] / f_yd [MPa] × 1000 ≈ W_pl [cm³] nécessaire. Exemple : M=200 kN·m → W≈ 850 cm³ → HEA 240 ou IPE 360.',
        'Règle des 80% : En béton armé courant, le moment résistant utilisé est environ 80% du moment ultime. Si votre taux de travail dépasse 95%, reconsidérez la section.',
        'Vérification rapide de flèche : f ≈ L²×σ/(8×E×h) pour estimer l\'ordre de grandeur avant calcul précis.',
        'En chantier, si une poutre IPN/IPE est utilisée comme coffrant provisoire, vérifier SYSTÉMATIQUEMENT l\'effort tranchant à l\'appui (risque de plastification locale de l\'âme).',
        'Les logiciels (ROBOT, SAP2000) ne vérifient pas automatiquement le déversement latéral-torsionnel — toujours vérifier M_b,Rd pour les poutres avec semelle comprimée non maintenue.',
      ],
    },
    {
      id: 14,
      key: 'norms',
      title: 'Normes RDM — Références réglementaires',
      icon: '📜',
      type: 'norms',
      norms: [
        { code: 'Eurocode 0 (EN 1990)', description: 'Bases de calcul des structures — États limites ELU/ELS, combinaisons de charges' },
        { code: 'Eurocode 1 (EN 1991)', description: 'Actions sur les structures (charges d\'exploitation, vent, neige, thermique)' },
        { code: 'Eurocode 2 (EN 1992-1-1)', description: 'Calcul des structures en béton armé — dimensionnement RDM intégré' },
        { code: 'Eurocode 3 (EN 1993-1-1)', description: 'Calcul des structures en acier — vérification des sections et barres' },
        { code: 'Eurocode 5 (EN 1995-1-1)', description: 'Calcul des structures en bois' },
        { code: 'NF EN ISO 6892-1', description: 'Essais de traction des matériaux métalliques — caractéristiques mécaniques' },
      ],
    },
    {
      id: 15,
      key: 'exercises',
      title: 'Exercices d\'application — RDM',
      icon: '✍️',
      type: 'exercises',
      exercises: [
        {
          id: 'ex_rdm_1',
          number: 1,
          difficulty: 'Facile',
          text: 'Calculez le moment fléchissant maximal M_max pour une poutre bi-appuyée de portée L = 7 m soumise à une charge uniforme q = 15 kN/m (ELU).',
          hint: 'Formule de base : M_max = q·L²/8',
          answer_latex: 'M_{max} = \\frac{15 \\times 7^2}{8} = \\frac{735}{8} = 91{,}875 \\text{ kN·m}',
          answer_text: 'M_max = 91.9 kN·m',
        },
        {
          id: 'ex_rdm_2',
          number: 2,
          difficulty: 'Moyen',
          text: 'Un profilé IPE 240 (I_y = 3892 cm⁴, W_y = 324 cm³) porte une charge uniforme. Quelle est la charge max q_max [kN/m] pour rester dans le domaine élastique (f_yd = 235 MPa) si L = 4 m ?',
          hint: 'σ_max = M_max / W_y ≤ f_yd → M_max ≤ f_yd × W_y → q_max = 8 × M_max / L²',
          answer_latex: 'M_{max,adm} = 235 \\times 324 = 76{,}14 \\text{ kN·m} \\quad \\Rightarrow \\quad q_{max} = \\frac{8 \\times 76{,}14}{4^2} = 38{,}1 \\text{ kN/m}',
          answer_text: 'q_max = 38.1 kN/m',
        },
        {
          id: 'ex_rdm_3',
          number: 3,
          difficulty: 'Difficile',
          text: 'Vérifiez la flèche ELS d\'une poutre IPE 300 (I_y = 8356 cm⁴, E = 210 GPa) de portée L = 6 m soumise à q_ELS = 12 kN/m. La limite est f_max ≤ L/300.',
          hint: 'f_max = 5qL⁴/384EI — convertir tout en N et mm avant le calcul.',
          answer_latex: 'f_{max} = \\frac{5 \\times 12 \\times 6000^4}{384 \\times 210000 \\times 8356 \\times 10^4} = \\frac{5 \\times 12 \\times 1{,}296 \\times 10^{15}}{384 \\times 210000 \\times 8{,}356 \\times 10^7} = 12{,}1 \\text{ mm}',
          answer_text: 'f_max = 12.1 mm ≤ L/300 = 20 mm → Vérifiée ELS ✓',
        },
      ],
    },
    {
      id: 16,
      key: 'corrections',
      title: 'Corrections détaillées',
      icon: '✅',
      type: 'corrections',
      note: 'Les corrections sont intégrées directement sous chaque exercice. Cliquez sur "Voir la correction" pour afficher la solution complète avec unités vérifiées.',
    },
    {
      id: 17,
      key: 'quiz',
      title: 'Quiz RDM — Évaluation de niveau',
      icon: '🎯',
      type: 'quiz',
      questions: [
        {
          id: 'q_rdm_1',
          question: 'Pour une poutre bi-appuyée chargée par une charge concentrée P au centre, quel est M_max ?',
          options: [
            { id: 'a', text: 'P·L/8' },
            { id: 'b', text: 'P·L/4' },
            { id: 'c', text: 'P·L/2' },
            { id: 'd', text: 'q·L²/8' },
          ],
          correct: 'b',
          explanation: 'M_max = P·L/4 pour une charge concentrée P appliquée au milieu d\'une poutre bi-appuyée de portée L. La formule q·L²/8 est réservée aux charges uniformes.',
        },
        {
          id: 'q_rdm_2',
          question: 'La flèche maximale d\'une poutre bi-appuyée sous charge uniforme est proportionnelle à quelle puissance de L ?',
          options: [
            { id: 'a', text: 'L²' },
            { id: 'b', text: 'L³' },
            { id: 'c', text: 'L⁴' },
            { id: 'd', text: 'L' },
          ],
          correct: 'c',
          explanation: 'f_max = 5qL⁴/384EI → proportionnelle à L⁴. C\'est pourquoi doubler la portée multiplie la flèche par 16 ! C\'est la raison pour laquelle les grandes portées sont si difficiles à maîtriser.',
        },
        {
          id: 'q_rdm_3',
          question: 'Quelle est la limite de flèche ELS pour les planchers selon l\'Eurocode ?',
          options: [
            { id: 'a', text: 'L/100' },
            { id: 'b', text: 'L/250 à L/300' },
            { id: 'c', text: 'L/500' },
            { id: 'd', text: 'L/50' },
          ],
          correct: 'b',
          explanation: 'L\'Eurocode préconise L/250 à L/300 selon la nature du plancher et la sensibilité des cloisons ou revêtements. Pour les planchers portant des cloisons fragiles : L/500.',
        },
      ],
    },
    {
      id: 18,
      key: 'exam_questions',
      title: 'Questions d\'examen — Niveau BTS/Licence',
      icon: '🎓',
      type: 'exam',
      questions: [
        'Démontrez l\'expression de la contrainte normale de flexion σ(y) = M·y/I en utilisant l\'hypothèse de Bernoulli et la loi de Hooke. Précisez les conditions d\'application.',
        'Comparez le comportement en flexion simple d\'une poutre rectangulaire et d\'un profilé en I (HEA/IPE). Expliquez pourquoi les profilés en I sont plus efficaces.',
        'Calculez la flèche maximale d\'une console de longueur L soumise à une charge uniforme q. Comparez-la à la même poutre bi-appuyée et commentez.',
      ],
    },
    {
      id: 19,
      key: 'interview_questions',
      title: 'Questions d\'entretien technique — RDM',
      icon: '💼',
      type: 'interview',
      questions: [
        {
          question: 'Expliquez la différence entre l\'ELU et l\'ELS dans le contexte du calcul d\'une poutre.',
          answer_hint: 'ELU : résistance ultime (effondrement), on vérifie M_Ed ≤ M_Rd. ELS : confort/usage, on vérifie f ≤ L/250 et l\'ouverture de fissures w_k ≤ 0,3 mm.',
        },
        {
          question: 'Un poteau élancé risque-t-il de se rompre avant d\'atteindre sa résistance en compression ?',
          answer_hint: 'Oui, si λ > λ_lim (environ 60-80 selon EC3), le poteau peut flamber de manière instable bien avant d\'atteindre f_y. Vérifier N_Ed ≤ N_b,Rd = χ × A × f_yd.',
        },
      ],
    },
    {
      id: 20,
      key: 'practical_case',
      title: 'Cas pratique — Dimensionnement d\'un plancher',
      icon: '🔧',
      type: 'practical',
      scenario: 'Étude de cas RDM — Dimensionnement d\'une poutre de plancher R+3',
      description: `**Mise en situation professionnelle** : Bureau d\'études de structure, Paris. Vous devez dimensionner une poutre principale en acier S355 pour un plancher de bureau, portée L = 8 m. Charges : G = 7 kN/m² (dalle béton 15cm + finitions), Q = 3,5 kN/m² (bureaux). Espacement des poutres secondaires : 2,5 m.`,
      resolution_latex_1: 'q_{ELU} = (1{,}35 \\times 7 + 1{,}50 \\times 3{,}5) \\times 2{,}5 = (9{,}45 + 5{,}25) \\times 2{,}5 = 36{,}75 \\text{ kN/m}',
      resolution_latex_2: 'M_{Ed} = \\frac{36{,}75 \\times 8^2}{8} = 294 \\text{ kN·m} \\quad \\Rightarrow \\quad W_{pl,min} = \\frac{M_{Ed}}{f_{yd}} = \\frac{294 \\times 10^6}{355} = 828 \\text{ cm}^3',
      resolution_latex_3: '\\text{Choisir HEA 360 : } W_{pl} = 1501 \\text{ cm}^3 > 828 \\text{ cm}^3 \\quad \\checkmark \\quad (\\tau_{util} = 55\\%)',
      conclusion: 'HEA 360 S355 est retenu. Vérification ELS de la flèche en cours (f_ELS ≤ 8000/300 = 26,7 mm).',
    },
    {
      id: 21,
      key: 'summary',
      title: 'Résumé exécutif — RDM en 5 points',
      icon: '📋',
      type: 'summary',
      content: `### La RDM en 5 points fondamentaux

1. **Contrainte normale** : $\\sigma = E \\cdot \\varepsilon = N/A + M \\cdot y / I$
2. **Moments clés** : $M_{max} = qL^2/8$ (uniforme) ou $M_{max} = PL/4$ (ponctuelle centrée)
3. **Flèche ELS** : $f = 5qL^4/384EI \\le L/250$
4. **Toujours vérifier** : ELU (résistance) **ET** ELS (déformation, fissuration)
5. **Unités** : N + mm → MPa (N/mm²) directement et sans ambiguïté`,
    },
    {
      id: 22,
      key: 'key_points',
      title: 'Points clés RDM à mémoriser',
      icon: '⭐',
      type: 'keypoints',
      points: [
        'σ = M·y/I (flexion) | σ = N/A (traction/compression) | τ = V·S/I·b (cisaillement)',
        'M_max = qL²/8 (uniforme) | M_max = PL/4 (ponctuelle centrée)',
        'f_max = 5qL⁴/384EI ≤ L/250 (ELS planchers)',
        'Hypothèse de Bernoulli : sections droites restent planes (valide si L/h > 5)',
        'W_el = I/v_max (module de résistance élastique pour σ_max)',
        'Toujours convertir en N et mm avant calcul de flèche et contrainte',
      ],
    },
    {
      id: 23,
      key: 'self_assessment',
      title: 'Auto-évaluation — Maîtrise de la RDM',
      icon: '🏆',
      type: 'self_assessment',
      description: 'Cochez chaque compétence acquise :',
      objectives: [
        'Je sais calculer M_max, V_max pour une poutre bi-appuyée (uniforme et ponctuelle)',
        'Je sais calculer σ_max avec la formule de flexion (σ = M·y/I = M/W)',
        'Je sais calculer la flèche f_max avec 5qL⁴/384EI et vérifier ≤ L/250',
        'Je comprends les hypothèses de Bernoulli et leurs limites',
        'Je sais identifier ELU (résistance) et ELS (déformation) et leurs critères de vérification',
        'J\'ai résolu les 3 exercices et obtenu les bonnes réponses',
        'J\'ai obtenu 100% au quiz RDM',
      ],
    },
  ],

  quickQuiz: {
    question: 'Pour une poutre bi-appuyée L=5m, q=20 kN/m, quel est M_max ?',
    options: [
      { id: 'a', label: 'A) M = 50 kN·m' },
      { id: 'b', label: 'B) M = 62.5 kN·m' },
      { id: 'c', label: 'C) M = 100 kN·m' },
    ],
    correct: 'b',
    explanation: 'M_max = q·L²/8 = 20 × 5²/8 = 20 × 25/8 = 62.5 kN·m',
  },
};
