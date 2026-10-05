// ── Lesson: Sécurité incendie — réglementation et évacuation — Module 43 ──────
import { buildLesson } from './build_lesson.js';

export const lesson_incendie_reglementation = buildLesson({
  moduleId: 43,
  slug: 'incendie_reglementation',
  lessonIndex: 1,
  title: "Sécurité Incendie : Réglementation, Évacuation & Feu Normalisé",
  subtitle: 'Module 43 — Sécurité incendie & résistance au feu',
  level: 'Intermédiaire',
  duration: '8h',
  tags: ['Incendie', 'ERP', 'IGH', 'Unités de passage', 'Évacuation', 'Résistance au feu', 'ISO 834'],
}, {
  definition: {
    title: "Définition — Protéger les personnes avant tout",
    fr: 'Sécurité incendie des bâtiments',
    en: 'Building fire safety',
    metier: "Utilisée par les ingénieurs structure, architectes, bureaux de contrôle, préventionnistes des services d'incendie et chargés de sécurité des ERP.",
    content: `La **sécurité incendie** vise, par ordre de priorité :
1. **l'évacuation des personnes** dans des conditions sûres ;
2. **l'intervention des secours** (accès, colonnes sèches, désenfumage) ;
3. **la limitation de la propagation** et la **stabilité** de la structure pendant un temps donné.

### Les grandes familles de bâtiments en France
- **Habitations** : 1ʳᵉ à 4ᵉ famille selon la hauteur et la desserte.
- **ERP** (établissements recevant du public) : classés par **type** (activité : M magasins, R enseignement, U santé…) et par **catégorie** selon l'effectif (1ʳᵉ catégorie au-delà de 1 500 personnes, 5ᵉ catégorie pour les petits établissements).
- **IGH** (immeubles de grande hauteur) : plus de 50 m pour l'habitation, plus de 28 m pour les autres usages.
- **Code du travail** pour les lieux de travail.

> 💡 Les deux notions clés sont la **réaction au feu** (comportement d'un matériau qui alimente le feu) et la **résistance au feu** (durée pendant laquelle un élément conserve sa fonction).`,
  },
  importance: {
    content: `- **Vies humaines** : la plupart des victimes d'incendie meurent intoxiquées par les fumées, souvent avant d'être atteintes par les flammes.
- **Conception** : largeurs de dégagements, nombre d'escaliers, compartimentage et désenfumage conditionnent le plan du bâtiment dès l'esquisse.
- **Structure** : l'acier perd la moitié de sa résistance vers 600 °C ; le béton s'écaille ; le bois se carbonise. Il faut justifier la stabilité au feu.
- **Responsabilité** : l'avis de la commission de sécurité conditionne l'ouverture d'un ERP.

> ⚠️ **À retenir** : la fumée tue plus que le feu ; d'où l'importance du désenfumage et de la rapidité d'évacuation.`,
  },
  applications: {
    examples: [
      ['Centre commercial (ERP type M, 1ʳᵉ catégorie)', 'Calcul des effectifs, des unités de passage et du nombre de sorties ; désenfumage des mails.'],
      ['Immeuble de bureaux', 'Compartimentage, escaliers protégés, stabilité au feu de la structure R60 ou R90.'],
      ['Groupe scolaire (type R)', 'Effectif par salle, dégagements, alarme et exercices d’évacuation.'],
      ['Parking couvert', 'Désenfumage mécanique, résistance au feu des dalles et des poteaux.'],
      ['Charpente métallique', 'Choix entre peinture intumescente, flocage ou surdimensionnement pour atteindre R30.'],
    ],
  },
  theory: {
    title: "Théorie — Effectifs, dégagements et feu normalisé",
    content: `### 1. L'effectif
L'effectif d'un ERP se calcule selon son type : par surface (1 personne par m² de zone accessible au public dans un magasin, par exemple), par nombre de places assises ou selon la déclaration de l'exploitant.

### 2. Les unités de passage (UP)
La largeur des dégagements est exprimée en **unités de passage** : 1 UP = 0,90 m, 2 UP = 1,40 m, et au-delà $n$ UP = $n \\times 0{,}60$ m.

Pour un local de plus de 500 personnes :
- nombre de dégagements : **2 + 1 par 500 personnes** (ou fraction) au-delà des 500 premières ;
- nombre d'UP : **1 par 100 personnes** (ou fraction).

### 3. La résistance au feu
Elle est désignée par des lettres et une durée en minutes :
- **R** : capacité portante ; **E** : étanchéité aux flammes et gaz chauds ; **I** : isolation thermique.
- Exemples : poteau **R 60**, mur coupe-feu **REI 120**, porte **EI 30**.

### 4. Le feu normalisé ISO 834
Les essais et les calculs de résistance au feu utilisent une courbe température-temps conventionnelle :

$$\\theta_g = 20 + 345 \\log_{10}(8t + 1)$$

avec $t$ en minutes : environ 842 °C à 30 min et 945 °C à 60 min.

### 5. La charge calorifique
Énergie que peuvent libérer les matériaux combustibles d'un local, rapportée à sa surface (MJ/m²) : elle caractérise la sévérité potentielle d'un feu.`,
  },
  formulas: {
    title: 'Formules essentielles — Sécurité incendie',
    formulas: [
      {
        name: 'Courbe de feu normalisé ISO 834',
        latex: "\\theta_g = 20 + 345 \\log_{10}(8t + 1)",
        description: 'Température conventionnelle des gaz dans le local en feu (NF EN 1991-1-2).',
        vars: [
          ['\\theta_g', 'Température des gaz', '°C', 'Utilisée pour les essais et le calcul de résistance au feu.'],
          ['t', 'Temps', 'min', 'Depuis le début de l’incendie développé.'],
        ],
        rule: "Environ 840 °C à 30 min, 945 °C à 1 h, 1 050 °C à 2 h.",
      },
      {
        name: "Largeur d'un dégagement",
        latex: "l = 0{,}90\\ \\text{m (1 UP)} \\quad l = 1{,}40\\ \\text{m (2 UP)} \\quad l = 0{,}60 \\cdot n\\ \\text{m} \\ (n \\ge 3)",
        description: "Largeurs réglementaires des unités de passage dans les ERP.",
        vars: [
          ['l', 'Largeur du dégagement', 'm', 'Largeur libre minimale.'],
          ['n', "Nombre d'unités de passage", 'UP', 'Arrondi à l’entier supérieur.'],
        ],
      },
      {
        name: 'Dégagements d’un local de plus de 500 personnes',
        latex: "N_{dég} = 2 + \\left\\lceil \\frac{E - 500}{500} \\right\\rceil \\qquad N_{UP} = \\left\\lceil \\frac{E}{100} \\right\\rceil",
        description: 'Règlement de sécurité ERP : nombre minimal de sorties et d’unités de passage.',
        vars: [
          ['N_{dég}', 'Nombre de dégagements', '-', 'Sorties distinctes, judicieusement réparties.'],
          ['N_{UP}', "Nombre total d'unités de passage", 'UP', 'À répartir entre les dégagements.'],
          ['E', 'Effectif', 'personnes', 'Effectif admissible du local ou du niveau.'],
        ],
      },
      {
        name: 'Charge calorifique surfacique',
        latex: "q_f = \\frac{\\sum m_i \\cdot H_{u,i}}{A}",
        description: 'Énergie combustible disponible par m² de plancher.',
        vars: [
          ['q_f', 'Charge calorifique', 'MJ/m²', 'Logement ≈ 780 MJ/m², bureaux ≈ 420 MJ/m² (valeurs moyennes EC1-1-2).'],
          ['m_i', 'Masse du combustible i', 'kg', 'Mobilier, stocks, revêtements.'],
          ['H_{u,i}', 'Pouvoir calorifique', 'MJ/kg', 'Bois ≈ 17,5 ; plastiques 30 à 40.'],
          ['A', 'Surface du local', 'm²', 'Surface de plancher.'],
        ],
      },
    ],
  },
  stepbystep: {
    title: "Calcul complet — Dégagements d'une salle de spectacle de 1 200 personnes",
    problem: "Une salle reçoit un effectif de 1 200 personnes. Déterminer le nombre de dégagements, le nombre d'unités de passage et une répartition possible.",
    steps_demo: [
      { n: 1, text: "Effectif > 500 : règle « 2 + 1 par 500 au-delà des 500 premières »." },
      { n: 2, text: "Personnes au-delà de 500 : 1 200 − 500 = 700, soit 2 fractions de 500 → 2 + 2 = 4 dégagements." },
      { n: 3, text: "Unités de passage : 1 200 / 100 = 12 UP." },
      { n: 4, text: "Répartition : 4 dégagements de 3 UP chacun (3 × 0,60 = 1,80 m de large)." },
      { n: 5, text: "Vérifier la répartition géographique (sorties opposées) et les distances maximales à parcourir." },
    ],
    result_latex: "N_{dég} = 2 + \\left\\lceil \\frac{700}{500} \\right\\rceil = 4 \\qquad N_{UP} = \\frac{1\\,200}{100} = 12 \\ \\Rightarrow\\ 4 \\times 3\\ \\text{UP} = 4 \\times 1{,}80\\ \\text{m}",
  },
  units: {
    table: [
      ['Résistance au feu', 'min', '-', 'R 15, 30, 60, 90, 120, 180, 240'],
      ['Température', '°C', '°F', '°F = 1,8 × °C + 32 ; 945 °C = 1 733 °F'],
      ['Charge calorifique', 'MJ/m²', 'BTU/ft²', '1 MJ/m² = 88,1 BTU/ft²'],
      ['Largeur de passage', 'm', 'in', '1 UP = 0,90 m ≈ 35 in'],
      ['Débit de fumée', 'm³/s', 'cfm', '1 m³/s = 2 119 cfm'],
    ],
    note: "La résistance au feu se donne toujours avec les critères concernés : « R 60 » pour un poteau, « REI 60 » pour un plancher séparatif.",
  },
  hypotheses: {
    items: [
      ['info', 'La courbe ISO 834 est conventionnelle : elle ne représente pas un incendie réel mais permet de comparer les éléments entre eux.'],
      ['info', 'Les règles de dégagements citées sont celles des dispositions générales du règlement ERP ; certains types ont des règles particulières.'],
      ['warning', 'Une porte de dégagement doit s’ouvrir dans le sens de l’évacuation au-delà d’un certain effectif.'],
      ['warning', 'Les résistances au feu exigées varient selon la famille, la catégorie et la hauteur du bâtiment : toujours vérifier le texte applicable.'],
      ['tip', 'L’ingénierie de sécurité incendie (feux réels, modélisation) peut justifier des solutions alternatives avec l’accord de l’administration.'],
    ],
  },
  simple_examples: {
    examples: [
      {
        title: 'Exemple 1 : température à 30 et 60 minutes',
        given: 'Courbe ISO 834',
        find: 'θg(30) et θg(60)',
        solution_latex: "\\theta_g(30) = 20 + 345 \\log_{10}(241) = 842\\ °C \\qquad \\theta_g(60) = 20 + 345 \\log_{10}(481) = 945\\ °C",
        result: '842 °C à 30 min et 945 °C à 60 min.',
      },
      {
        title: 'Exemple 2 : largeur de 4 UP',
        given: 'n = 4 UP',
        find: 'La largeur du dégagement',
        solution_latex: "l = 4 \\times 0{,}60 = 2{,}40\\ \\text{m}",
        result: '2,40 m de largeur libre.',
      },
      {
        title: 'Exemple 3 : charge calorifique d’une archive',
        given: '5 000 kg de papier (H ≈ 17 MJ/kg) dans un local de 50 m²',
        find: 'q_f',
        solution_latex: "q_f = \\frac{5\\,000 \\times 17}{50} = 1\\,700\\ \\text{MJ/m}^2",
        result: '1 700 MJ/m² : charge élevée, local à isoler (REI) et à équiper d’une détection.',
      },
    ],
  },
  real_examples: {
    title: 'Exemple réel — Tour Grenfell, Londres (2017)',
    examples: [
      {
        context: 'Tour de logements de 24 étages rénovée avec un bardage composite',
        scenario: "Un feu de réfrigérateur s'est propagé par l'extérieur via les panneaux de bardage à âme polyéthylène et l'isolant combustible. L'unique escalier et la consigne de rester chez soi ont aggravé le bilan : 72 morts.",
        decomposition_latex: "\\text{Façade combustible} + \\text{lame d'air (effet cheminée)} + \\text{escalier unique} \\Rightarrow \\text{propagation verticale rapide}",
        lesson: "La réaction au feu des matériaux de façade est aussi importante que la résistance au feu de la structure ; depuis, de nombreux pays interdisent les façades combustibles sur les bâtiments élevés.",
      },
    ],
  },
  diagrams: {
    title: 'Schéma de principe — Démarche de conception sécurité incendie',
    diagram_description: [
      'Classement : famille d’habitation, type et catégorie d’ERP, IGH ou code du travail',
      'Effectif : calcul par surface, places ou déclaration',
      'Dégagements : nombre, largeurs (UP), distances à parcourir, escaliers protégés',
      'Compartimentage : parois et portes coupe-feu, recoupement des volumes',
      'Désenfumage : naturel ou mécanique selon les locaux',
      'Structure : résistance au feu R exigée et moyens de protection',
    ],
  },
  mistakes: {
    items: [
      ['Confondre réaction et résistance au feu', 'Un matériau incombustible n’assure pas forcément une paroi coupe-feu', 'Vérifier séparément l’Euroclasse (A1 à F) et la classe REI de l’élément.'],
      ['Compter une porte de 1,20 m pour 2 UP', 'Largeur insuffisante (2 UP = 1,40 m)', 'Respecter les largeurs réglementaires des UP.'],
      ['Oublier les gaines et trémies', 'Le feu traverse les planchers par les passages de réseaux', 'Prévoir des calfeutrements et clapets coupe-feu.'],
    ],
  },
  tips: {
    tips: [
      'Placez les sorties le plus loin possible les unes des autres pour qu’un même feu ne les bloque pas toutes.',
      'Un acier non protégé tient rarement plus de 15 minutes : prévoir une protection pour R30 et au-delà.',
      'Associez le préventionniste du SDIS dès l’avant-projet pour les ERP importants.',
      'Les portes coupe-feu doivent être maintenues fermées ou asservies à la détection.',
    ],
  },
  norms: {
    norms: [
      ['Règlement de sécurité ERP (arrêté du 25 juin 1980 modifié)', 'Dispositions générales (CO) et particulières par type d’établissement.'],
      ['Arrêté du 31 janvier 1986', 'Protection contre l’incendie des bâtiments d’habitation.'],
      ['NF EN 1991-1-2', 'Eurocode 1 : actions sur les structures exposées au feu (courbes de feu, charges calorifiques).'],
      ['NF EN 13501-1 et -2', 'Classement de réaction au feu (Euroclasses) et de résistance au feu (REI).'],
      ['Instruction technique 246', 'Désenfumage dans les ERP.'],
    ],
  },
  exercises: {
    exercises: [
      {
        level: 1,
        text: 'Calculer la température ISO 834 après 90 minutes.',
        hint: 'log₁₀(721) = 2,858.',
        answer_latex: "\\theta_g = 20 + 345 \\times 2{,}858 = 1\\,006\\ °C",
        answer_text: '≈ 1 006 °C.',
      },
      {
        level: 2,
        text: 'Un local reçoit 2 100 personnes. Déterminer le nombre de dégagements et d’unités de passage.',
        hint: '2 100 − 500 = 1 600, soit 4 fractions de 500.',
        answer_latex: "N_{dég} = 2 + 4 = 6 \\qquad N_{UP} = \\frac{2\\,100}{100} = 21",
        answer_text: '6 dégagements, 21 UP au total.',
      },
      {
        level: 3,
        text: 'Un bureau de 20 m² contient 600 kg de mobilier bois et papier (17 MJ/kg) et 80 kg de plastiques (35 MJ/kg). Calculer q_f.',
        hint: 'Additionner les énergies puis diviser par la surface.',
        answer_latex: "q_f = \\frac{600 \\times 17 + 80 \\times 35}{20} = \\frac{10\\,200 + 2\\,800}{20} = 650\\ \\text{MJ/m}^2",
        answer_text: 'q_f = 650 MJ/m².',
      },
    ],
  },
  quiz: {
    title: 'Quiz — Sécurité incendie',
    questions: [
      { q: 'Que signifie la lettre R dans « REI 60 » ?', options: ['Réaction au feu', 'Capacité portante', 'Rayonnement'], correct: 1, explain: 'R = résistance mécanique (capacité portante), E = étanchéité, I = isolation.' },
      { q: 'Quelle est la largeur de 2 unités de passage ?', options: ['1,20 m', '1,40 m', '1,80 m'], correct: 1, explain: '1 UP = 0,90 m, 2 UP = 1,40 m, puis 0,60 m par UP.' },
      { q: 'Quelle est la principale cause de décès dans un incendie ?', options: ['Les brûlures', 'Les fumées toxiques', "L'effondrement"], correct: 1, explain: "L'intoxication par les fumées (monoxyde de carbone, cyanures) est la première cause." },
    ],
  },
  exam_questions: {
    questions: [
      'Présentez le classement des bâtiments en France vis-à-vis du risque incendie (habitation, ERP, IGH, code du travail).',
      'Définissez réaction au feu et résistance au feu ; expliquez les critères R, E et I.',
      'Calculez les dégagements d’un ERP de 900 personnes et proposez une répartition.',
    ],
  },
  interview_questions: {
    questions: [
      ['Comment assurez-vous la stabilité au feu d’une charpente métallique ?', "Je détermine la durée R exigée, puis je compare les solutions : peinture intumescente (élégante, pour R30-R60), flocage ou plaques (R60 et plus), ou justification par le calcul (facteur de massiveté, température critique) selon l'EN 1993-1-2."],
      ['Que vérifie une commission de sécurité ?', "Le respect du règlement : classement, dégagements, désenfumage, compartimentage, moyens de secours, alarme, rapports de vérification des installations techniques et de l'organisme de contrôle ; elle émet un avis sur l'ouverture."],
    ],
  },
  practical_case: {
    title: 'Cas pratique — Magasin de 2 000 m² de vente',
    scenario: 'Magasin (type M) en rez-de-chaussée avec 2 000 m² de surface accessible au public. Pour l’exemple, on retient un effectif de 1 personne par m² sur un tiers de la surface (hypothèse simplifiée).',
    description: "Calculer l'effectif, la catégorie de l'ERP et les dégagements.",
    resolutions: [
      "E = \\frac{2\\,000}{3} \\times 1 \\approx 667\\ \\text{personnes} \\Rightarrow \\text{3e catégorie (301 à 700)}",
      "N_{dég} = 2 + \\left\\lceil \\frac{667 - 500}{500} \\right\\rceil = 3 \\qquad N_{UP} = \\left\\lceil \\frac{667}{100} \\right\\rceil = 7",
      "\\text{Répartition : 2 sorties de 2 UP (1,40 m) et 1 sortie de 3 UP (1,80 m)}",
    ],
    conclusion: "Le magasin est un ERP de 3ᵉ catégorie avec 3 dégagements totalisant 7 UP, répartis sur des façades différentes ; la règle exacte de calcul d'effectif du type M doit être vérifiée dans le règlement.",
  },
  summary: {
    content: `### La sécurité incendie en 5 points
1. Priorité : **évacuer**, faciliter l'**intervention**, limiter la **propagation**.
2. Classement : habitation, ERP (type + catégorie), IGH, code du travail.
3. Dégagements en **UP** : 0,90 / 1,40 / 0,60 n m.
4. Résistance au feu **R, E, I** + durée ; réaction au feu en **Euroclasses**.
5. Feu normalisé : $\\theta_g = 20 + 345 \\log_{10}(8t + 1)$.`,
  },
  key_points: {
    points: [
      '1 UP = 0,90 m ; 2 UP = 1,40 m ; n UP = 0,60·n m',
      '> 500 personnes : 2 + 1 dégagement par 500 ; 1 UP par 100',
      'ISO 834 : ≈ 842 °C à 30 min, 945 °C à 60 min',
      'R portance, E étanchéité, I isolation',
      'La fumée est la première cause de décès',
    ],
  },
  self_assessment: {
    objectives: [
      'Je connais le classement des bâtiments vis-à-vis de l’incendie',
      'Je sais calculer les dégagements et unités de passage',
      'Je distingue réaction au feu et résistance au feu',
      'Je sais utiliser la courbe de feu normalisé',
      "J'ai réussi le quiz avec au moins 2 bonnes réponses sur 3",
    ],
  },
});
