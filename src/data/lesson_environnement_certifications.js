// ── Lesson: Certifications environnementales — Module 27 ─────────────────────
import { buildLesson } from './build_lesson.js';

export const lesson_environnement_certifications = buildLesson({
  moduleId: 27,
  slug: 'environnement_certifications',
  lessonIndex: 3,
  title: "Certifications Environnementales : HQE, BREEAM, LEED — Critères, Calcul des Scores et Stratégie",
  subtitle: 'Module 27 — Environnement & Développement Durable',
  level: 'Intermédiaire',
  duration: '5h',
  tags: ['HQE', 'BREEAM', 'LEED', 'Certification', 'Carbone', 'Eau', 'Confort'],
}, {
  definition: {
    title: 'Définition — Faire reconnaître la performance environnementale',
    fr: 'Certifications environnementales des bâtiments',
    en: 'Green building certifications',
    metier: "Concerne les maîtres d'ouvrage, les assistants à maîtrise d'ouvrage environnementale, les architectes, les bureaux d'études fluides et les entreprises.",
    content: `Une **certification environnementale** atteste, par un organisme tiers, qu'un bâtiment atteint un niveau de performance sur plusieurs thèmes : énergie, carbone, eau, matériaux, confort, santé, gestion de chantier.

### Les trois référentiels les plus courants
- **HQE** (France, Certivéa / Cerway) : niveaux Pass, Bon, Très bon, Excellent, Exceptionnel.
- **BREEAM** (Royaume-Uni, BRE) : score en pourcentage ; Pass, Good, Very Good, Excellent, Outstanding.
- **LEED** (États-Unis, USGBC) : points sur 110 ; Certified, Silver, Gold, Platinum.

### Le principe commun
Des **prérequis obligatoires**, puis des **crédits** optionnels pondérés par thème. L'audit porte sur la conception, puis sur la réalisation (et parfois l'exploitation).

> 💡 La certification n'est pas une fin : c'est un cadre pour piloter des objectifs mesurables dès l'esquisse.`,
  },
  importance: {
    content: `- **Valeur immobilière** : les investisseurs et locataires exigent souvent un niveau minimal (« Very Good », « Excellent »).
- **Financement** : les financements verts et la taxonomie européenne s'appuient sur des performances démontrées.
- **Qualité** : la démarche structure les études et les contrôles de chantier.
- **Exploitation** : confort, consommations et maintenance mieux maîtrisés.

> ⚠️ **À retenir** : décider tard de certifier coûte cher ; de nombreux crédits se jouent dès le choix du site et la conception.`,
  },
  applications: {
    examples: [
      ['Immeuble de bureaux', 'BREEAM Excellent visé pour la commercialisation internationale.'],
      ['Logements', 'Certification NF Habitat HQE.'],
      ['Siège d’entreprise', 'LEED Gold pour un groupe américain.'],
      ['Chantier', 'Charte chantier à faibles nuisances, tri des déchets suivi.'],
      ['Rénovation', 'BREEAM In-Use ou HQE Exploitation pour un bâtiment existant.'],
    ],
  },
  theory: {
    title: 'Théorie — Structure des référentiels',
    content: `### 1. Thèmes évalués (communs aux trois)
Énergie et carbone, eau, matériaux et déchets, santé et confort (lumière, acoustique, qualité de l'air), site et transports, écologie, management du projet, innovation.

### 2. Calcul d'un score BREEAM
Pour chaque catégorie $i$ :
$$S = \\sum_i \\frac{c_i}{C_i} \\times w_i$$
$c_i$ crédits obtenus, $C_i$ crédits disponibles, $w_i$ pondération de la catégorie (%). Seuils : Pass ≥ 30 %, Good ≥ 45 %, Very Good ≥ 55 %, Excellent ≥ 70 %, Outstanding ≥ 85 % (plus des minima obligatoires).

### 3. Niveaux LEED (v4)
| Niveau | Points (sur 110) |
|---|---|
| Certified | 40 à 49 |
| Silver | 50 à 59 |
| Gold | 60 à 79 |
| Platinum | 80 et plus |

### 4. Indicateurs quantitatifs fréquents
- Consommation d'énergie primaire (kWh/m²/an) ;
- Émissions de carbone sur le cycle de vie (kg CO₂e/m²) ;
- Économie d'eau potable par rapport à une référence (%) ;
- Taux de valorisation des déchets de chantier (%).`,
  },
  formulas: {
    title: 'Formules essentielles — Scores et indicateurs',
    formulas: [
      {
        name: 'Score pondéré (type BREEAM)',
        latex: "S = \\sum_i \\frac{c_i}{C_i} \\times w_i",
        description: 'Somme des taux de crédits obtenus pondérés par catégorie.',
        vars: [
          ['S', 'Score global', '%', ''],
          ['c_i', 'Crédits obtenus', '-', 'Catégorie i.'],
          ['C_i', 'Crédits disponibles', '-', 'Catégorie i.'],
          ['w_i', 'Pondération', '%', 'Somme des pondérations = 100 %.'],
        ],
      },
      {
        name: 'Économie d’eau',
        latex: "\\Delta_{eau} = \\frac{V_{réf} - V_{projet}}{V_{réf}} \\times 100",
        description: 'Réduction par rapport à une consommation de référence.',
        vars: [
          ['V_{réf}', 'Consommation de référence', 'm³/an', 'Équipements standard.'],
          ['V_{projet}', 'Consommation du projet', 'm³/an', 'Équipements hydro-économes, récupération.'],
        ],
      },
      {
        name: 'Taux de valorisation des déchets',
        latex: "\\tau_v = \\frac{m_{valorisée}}{m_{totale}} \\times 100",
        description: 'Indicateur de gestion des déchets de chantier.',
        vars: [
          ['m_{valorisée}', 'Masse réutilisée, recyclée ou valorisée', 't', ''],
          ['m_{totale}', 'Masse totale de déchets', 't', ''],
        ],
        rule: 'Objectif courant en certification : 70 % ou plus en valorisation matière.',
      },
      {
        name: 'Carbone ramené à la surface',
        latex: "I_c = \\frac{\\sum_k Q_k \\cdot FE_k}{S_{ref}}",
        description: 'Impact carbone des produits et équipements par m².',
        vars: [
          ['Q_k', 'Quantité du produit k', 'unité', 'm³, t, m²…'],
          ['FE_k', "Facteur d'émission", 'kg CO₂e/unité', 'FDES ou données par défaut.'],
          ['S_{ref}', 'Surface de référence', 'm²', ''],
        ],
      },
    ],
  },
  stepbystep: {
    title: 'Calcul complet — Score BREEAM simplifié',
    problem: "Un projet de bureaux obtient les crédits suivants (pondérations illustratives) : Management 14/21 (12 %) ; Santé 12/18 (15 %) ; Énergie 16/31 (19 %) ; Transport 8/12 (8 %) ; Eau 6/9 (6 %) ; Matériaux 7/14 (12,5 %) ; Déchets 6/10 (7,5 %) ; Écologie 8/13 (10 %) ; Pollution 8/13 (10 %). Calculer le score et le niveau.",
    steps_demo: [
      { n: 1, text: "Management : 14/21 × 12 = 8,0 ; Santé : 12/18 × 15 = 10,0 ; Énergie : 16/31 × 19 = 9,8." },
      { n: 2, text: "Transport : 8/12 × 8 = 5,3 ; Eau : 6/9 × 6 = 4,0 ; Matériaux : 7/14 × 12,5 = 6,25." },
      { n: 3, text: "Déchets : 6/10 × 7,5 = 4,5 ; Écologie : 8/13 × 10 = 6,2 ; Pollution : 8/13 × 10 = 6,2." },
      { n: 4, text: "Total : 8,0 + 10,0 + 9,8 + 5,3 + 4,0 + 6,25 + 4,5 + 6,2 + 6,2 = 60,2 %." },
      { n: 5, text: "60,2 % ≥ 55 % : niveau Very Good. Pour Excellent (70 %), l'énergie est le levier principal : chaque crédit énergie vaut 19/31 = 0,61 point." },
    ],
    result_latex: "S = \\sum \\frac{c_i}{C_i} w_i = 60{,}2\\ \\% \\Rightarrow \\text{Very Good}",
  },
  units: {
    table: [
      ['Énergie', 'kWh/m²/an', 'kBtu/ft²/yr', '1 kWh/m² = 0,317 kBtu/ft²'],
      ['Carbone', 'kg CO₂e/m²', 'kg CO₂e/ft²', '1 m² = 10,76 ft²'],
      ['Eau', 'm³/an', 'gal/yr', '1 m³ = 264,2 gal'],
      ['Score', '% ou points', '% ou points', 'BREEAM en %, LEED en points'],
      ['Éclairement', 'lux', 'foot-candle', '1 fc = 10,76 lux'],
    ],
    note: 'Les seuils et pondérations changent avec les versions des référentiels : vérifiez toujours la version applicable.',
  },
  hypotheses: {
    items: [
      ['info', 'Les pondérations de l’exemple sont illustratives ; elles dépendent du référentiel, de sa version et du type de bâtiment.'],
      ['info', 'Chaque référentiel impose des prérequis : un excellent score ne suffit pas si un minimum obligatoire manque.'],
      ['warning', 'Une certification de conception non suivie en réalisation peut ne pas être délivrée en fin de projet.'],
      ['warning', 'Les certifications ne remplacent pas les exigences réglementaires (RE2020, décret tertiaire).'],
      ['tip', 'Désignez un assesseur ou AP accrédité dès l’esquisse.'],
    ],
  },
  simple_examples: {
    examples: [
      {
        title: 'Exemple 1 : niveau LEED',
        given: '63 points sur 110',
        find: 'Niveau',
        solution_latex: "60 \\leq 63 \\leq 79 \\Rightarrow \\text{Gold}",
        result: 'LEED Gold.',
      },
      {
        title: 'Exemple 2 : économie d’eau',
        given: 'Référence 2 400 m³/an ; projet 1 560 m³/an',
        find: 'Réduction',
        solution_latex: "\\Delta = \\frac{2\\,400 - 1\\,560}{2\\,400} \\times 100 = 35\\ \\%",
        result: '35 % d’économie.',
      },
      {
        title: 'Exemple 3 : valorisation des déchets',
        given: '420 t de déchets, dont 315 t valorisées',
        find: 'Taux',
        solution_latex: "\\tau_v = \\frac{315}{420} \\times 100 = 75\\ \\%",
        result: '75 % : objectif de 70 % atteint.',
      },
    ],
  },
  real_examples: {
    title: 'Exemple réel — The Edge à Amsterdam',
    examples: [
      {
        context: 'Immeuble de bureaux certifié en 2014',
        scenario: "The Edge a obtenu un score BREEAM de 98,4 %, l'un des plus élevés au moment de sa certification. Les leviers : orientation et façades optimisées, stockage d'énergie dans les aquifères, panneaux photovoltaïques, éclairage LED piloté par capteurs, récupération des eaux de pluie.",
        decomposition_latex: "\\text{Conception bioclimatique} + \\text{énergie renouvelable} + \\text{pilotage numérique} \\Rightarrow S \\approx 98\\ \\%",
        lesson: "Les scores très élevés résultent d'objectifs fixés au programme, pas d'ajouts en fin de conception.",
      },
    ],
  },
  diagrams: {
    title: 'Schéma de principe — Démarche de certification',
    diagram_description: [
      'Programme : choix du référentiel et du niveau visé',
      'Pré-évaluation : liste des crédits accessibles et coûts associés',
      'Conception : études (énergie, lumière, ACV) et preuves documentaires',
      'Audit de conception par l’organisme',
      'Réalisation : suivi du chantier, essais, preuves de mise en œuvre',
      'Audit final et délivrance du certificat',
    ],
  },
  mistakes: {
    items: [
      ['Choisir la certification en phase APD', 'Crédits perdus (site, transports, orientation)', 'Décider dès la programmation.'],
      ['Collecter les preuves en fin de chantier', 'Documents introuvables', 'Organiser la collecte au fil des travaux.'],
      ['Viser le score maximum partout', 'Surcoût inutile', 'Hiérarchiser les crédits par coût et par pondération.'],
    ],
  },
  tips: {
    tips: [
      'Calculez le coût par point gagné pour arbitrer les crédits.',
      'Intégrez les exigences dans les CCTP des entreprises.',
      'Prévoyez la mise en service (commissioning) des installations techniques.',
      'Combinez certification et label bas carbone pour valoriser l’ACV.',
    ],
  },
  norms: {
    norms: [
      ['Référentiels HQE (Certivéa, Cerway)', 'Certification des bâtiments tertiaires et résidentiels.'],
      ['BREEAM International New Construction', 'Référentiel du BRE pour les constructions neuves.'],
      ['LEED v4 / v4.1 BD+C', 'Référentiel de l’USGBC pour la conception et la construction.'],
      ['NF EN 15978', 'Évaluation de la performance environnementale des bâtiments.'],
      ['ISO 14001', 'Systèmes de management environnemental.'],
    ],
  },
  exercises: {
    exercises: [
      {
        level: 1,
        text: 'Un projet obtient 52 points LEED. Quel niveau ?',
        hint: 'Silver : 50 à 59.',
        answer_latex: "50 \\leq 52 \\leq 59 \\Rightarrow \\text{Silver}",
        answer_text: 'LEED Silver.',
      },
      {
        level: 2,
        text: 'Une catégorie pondérée 19 % offre 31 crédits. Combien de points de score rapportent 5 crédits supplémentaires ?',
        hint: 'Chaque crédit vaut w/C.',
        answer_latex: "5 \\times \\frac{19}{31} = 3{,}06\\ \\%",
        answer_text: 'Environ 3,1 points de score.',
      },
      {
        level: 3,
        text: 'Le projet de l’exemple (60,2 %) veut atteindre 70 %. Combien de crédits énergie (0,61 point chacun) faut-il, si 15 sont encore disponibles ?',
        hint: 'Écart à combler divisé par la valeur d’un crédit.',
        answer_latex: "\\frac{70 - 60{,}2}{0{,}61} = 16{,}1 > 15",
        answer_text: '16 crédits seraient nécessaires : l’énergie seule ne suffit pas, il faut aussi gagner dans d’autres catégories.',
      },
    ],
  },
  quiz: {
    title: 'Quiz — Certifications',
    questions: [
      { q: 'De quel pays vient LEED ?', options: ['France', 'Royaume-Uni', 'États-Unis'], correct: 2, explain: 'LEED est géré par l’USGBC.' },
      { q: 'Quel score BREEAM correspond à Excellent ?', options: ['≥ 55 %', '≥ 70 %', '≥ 85 %'], correct: 1, explain: 'Excellent à partir de 70 %.' },
      { q: 'Que se passe-t-il si un prérequis n’est pas respecté ?', options: ['On perd quelques points', 'La certification n’est pas délivrée au niveau visé', 'Rien'], correct: 1, explain: 'Les prérequis sont obligatoires.' },
    ],
  },
  exam_questions: {
    questions: [
      'Comparez HQE, BREEAM et LEED.',
      'Expliquez le calcul d’un score pondéré et la stratégie de choix des crédits.',
      'Quel est l’intérêt d’une certification pour le maître d’ouvrage ?',
    ],
  },
  interview_questions: {
    questions: [
      ['Comment intégrez-vous une certification dans un chantier ?', 'En traduisant les crédits en exigences dans les CCTP, en désignant un responsable des preuves, en suivant les déchets et les nuisances et en planifiant les essais de mise en service.'],
      ['Une certification garantit-elle un bâtiment performant ?', 'Elle garantit une démarche et des performances de conception et de réalisation ; la performance réelle dépend aussi de l’exploitation, qu’il faut suivre (mesures, commissioning).'],
    ],
  },
  practical_case: {
    title: 'Cas pratique — Arbitrage de crédits',
    scenario: 'Un projet à 66 % vise BREEAM Excellent (70 %). Trois options : (A) panneaux photovoltaïques, +2,4 % pour 180 000 € ; (B) récupération des eaux de pluie, +1,3 % pour 45 000 € ; (C) plan de mobilité et locaux vélos, +1,6 % pour 30 000 €.',
    description: 'Choisir la combinaison la moins coûteuse pour gagner 4 %.',
    resolutions: [
      "\\text{Coût par point} : A = 75\\,000 ; \\ B = 34\\,600 ; \\ C = 18\\,750\\ €/\\%",
      "C + B = 2{,}9\\ \\% \\text{ insuffisant} ; \\ C + A = 4{,}0\\ \\% \\text{ pour } 210\\,000\\ €",
      "A + B + C = 5{,}3\\ \\% \\text{ pour } 255\\,000\\ € \\Rightarrow \\text{solution retenue} : A + C",
    ],
    conclusion: 'La combinaison A + C atteint exactement 70 % ; il est prudent d’y ajouter B pour garder une marge face aux crédits non validés à l’audit final.',
  },
  summary: {
    content: `### Les certifications en 5 points
1. HQE (France), BREEAM (Royaume-Uni), LEED (États-Unis).
2. Prérequis + crédits pondérés par thème.
3. BREEAM : $S = \\sum (c_i/C_i) w_i$ ; Excellent ≥ 70 %.
4. LEED : Gold de 60 à 79 points sur 110.
5. Décider tôt, arbitrer par le coût par point, collecter les preuves au fil de l'eau.`,
  },
  key_points: {
    points: [
      'Prérequis obligatoires',
      'Score = Σ (c/C) × w',
      'BREEAM Excellent ≥ 70 %',
      'LEED Gold : 60 à 79 points',
      'Décider dès le programme',
    ],
  },
  self_assessment: {
    objectives: [
      'Je connais les trois principaux référentiels',
      'Je sais calculer un score pondéré',
      'Je sais arbitrer des crédits par coût',
      'Je sais organiser la collecte des preuves',
      "J'ai réussi le quiz avec au moins 2 bonnes réponses sur 3",
    ],
  },
});
