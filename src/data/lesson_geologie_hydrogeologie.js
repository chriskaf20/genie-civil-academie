// ── Lesson: Hydrogéologie et nappes — Module 36 ──────────────────────────────
import { buildLesson } from './build_lesson.js';

export const lesson_geologie_hydrogeologie = buildLesson({
  moduleId: 36,
  slug: 'geologie_hydrogeologie',
  lessonIndex: 2,
  title: "Hydrogéologie de l'Ingénieur : Nappes, Loi de Darcy, Pompages et Rabattement des Fouilles",
  subtitle: "Module 36 — Géologie de l'Ingénieur",
  level: 'Intermédiaire',
  duration: '6h',
  diagramType: 'soil_profile',
  tags: ['Hydrogéologie', 'Nappe', 'Darcy', 'Perméabilité', 'Dupuit', 'Thiem', 'Rabattement'],
}, {
  definition: {
    title: 'Définition — L’eau souterraine et ses effets sur les ouvrages',
    fr: 'Hydrogéologie',
    en: 'Hydrogeology / groundwater engineering',
    metier: "Utilisée par les géotechniciens, les ingénieurs en fondations et travaux souterrains, les hydrogéologues et les entreprises de rabattement.",
    content: `L'**hydrogéologie** étudie l'eau contenue dans les sols et les roches : les **nappes**. Pour l'ingénieur, elle répond à trois questions : où est l'eau, comment circule-t-elle, et quel débit faut-il pomper pour travailler à sec ?

### Les types de nappes
- **Nappe libre** : sa surface (niveau piézométrique) est à la pression atmosphérique ; elle monte et descend librement.
- **Nappe captive** : enfermée sous une couche imperméable ; l'eau est sous pression et peut remonter au-dessus du toit de l'aquifère (artésianisme).
- **Nappe perchée** : retenue localement au-dessus d'une couche peu perméable.

### Les grandeurs clés
- **Perméabilité** $K$ (m/s) : aptitude du terrain à laisser passer l'eau, de $10^{-2}$ m/s (graviers) à moins de $10^{-9}$ m/s (argiles).
- **Gradient hydraulique** $i$ : perte de charge par unité de longueur.
- **Transmissivité** $T = K \\, b$ pour une couche d'épaisseur $b$.

> 💡 La perméabilité varie sur plus de dix ordres de grandeur : c'est le paramètre le plus incertain de la géotechnique.`,
  },
  importance: {
    content: `- **Fouilles** : sans rabattement, une fouille sous la nappe se remplit ou son fond se soulève (boulance, renard).
- **Ouvrages enterrés** : sous-pressions sur les radiers, cuvelages, risque de flottaison.
- **Environnement** : un pompage peut assécher des puits voisins ou provoquer des tassements.
- **Réglementation** : les prélèvements et rejets sont soumis à déclaration ou autorisation (loi sur l'eau).

> ⚠️ **À retenir** : le niveau de la nappe varie selon les saisons ; on retient les niveaux hauts (EH, EB) définis par l'étude géotechnique.`,
  },
  applications: {
    examples: [
      ['Parking souterrain', 'Rabattement par puits pendant les travaux, cuvelage en phase définitive.'],
      ['Tranchée de réseau', 'Pointes filtrantes le long de la fouille.'],
      ['Tunnel', 'Prévision des venues d’eau et drainage.'],
      ['Forage d’eau', 'Dimensionnement du débit exploitable.'],
      ['Pollution', 'Estimation de la vitesse de migration d’un polluant.'],
    ],
  },
  theory: {
    title: 'Théorie — Écoulement et pompages',
    content: `### 1. Loi de Darcy
$$Q = K \\, i \\, A \\qquad v_r = \\frac{K \\, i}{n_e}$$
$v_r$ : vitesse réelle de l'eau dans les pores ($n_e$ : porosité efficace).

### 2. Pompage en nappe captive (Thiem)
$$Q = \\frac{2\\pi K b \\, (H - h)}{\\ln(R/r)}$$

### 3. Pompage en nappe libre (Dupuit)
$$Q = \\frac{\\pi K (H^2 - h^2)}{\\ln(R/r)}$$
$H$ : charge initiale, $h$ : charge dans le puits, $r$ : rayon du puits, $R$ : rayon d'influence.

### 4. Rayon d'influence (formule empirique de Sichardt)
$$R = 3\\,000 \\, s \\, \\sqrt{K}$$
($s$ : rabattement en m, $K$ en m/s, $R$ en m).

### 5. Mesure de la perméabilité
Essais en laboratoire (perméamètre), essais Lefranc (sols), essais Lugeon (roches), et surtout **essais de pompage** qui donnent la perméabilité à l'échelle de l'ouvrage.`,
  },
  formulas: {
    title: 'Formules essentielles — Hydrogéologie',
    formulas: [
      {
        name: 'Loi de Darcy',
        latex: "Q = K \\, i \\, A",
        description: 'Débit à travers une section de terrain saturé.',
        vars: [
          ['Q', 'Débit', 'm³/s', ''],
          ['K', 'Perméabilité', 'm/s', ''],
          ['i', 'Gradient hydraulique', '-', 'Δh / L.'],
          ['A', 'Section d’écoulement', 'm²', ''],
        ],
      },
      {
        name: 'Pompage en nappe captive (Thiem)',
        latex: "Q = \\frac{2\\pi K b \\, (H - h)}{\\ln(R/r)}",
        description: 'Régime permanent, aquifère d’épaisseur b.',
        vars: [
          ['b', "Épaisseur de l'aquifère", 'm', ''],
          ['H - h', 'Rabattement dans le puits', 'm', ''],
          ['R', "Rayon d'influence", 'm', ''],
          ['r', 'Rayon du puits', 'm', ''],
        ],
      },
      {
        name: 'Pompage en nappe libre (Dupuit)',
        latex: "Q = \\frac{\\pi K (H^2 - h^2)}{\\ln(R/r)}",
        description: 'Hauteurs mesurées depuis le substratum imperméable.',
        vars: [
          ['H', 'Hauteur de nappe initiale', 'm', 'Au-dessus du substratum.'],
          ['h', 'Hauteur dans le puits', 'm', ''],
        ],
      },
      {
        name: 'Rayon d’influence (Sichardt)',
        latex: "R = 3\\,000 \\, s \\, \\sqrt{K}",
        description: 'Estimation empirique, unités imposées.',
        vars: [
          ['s', 'Rabattement', 'm', ''],
          ['K', 'Perméabilité', 'm/s', ''],
        ],
        rule: 'Formule d’ordre de grandeur : un essai de pompage reste la référence.',
      },
    ],
  },
  stepbystep: {
    title: 'Calcul complet — Débit de rabattement d’une fouille',
    problem: "Une fouille est ouverte dans une nappe libre de sables (K = 5 × 10⁻⁴ m/s). Le substratum argileux est à 12 m sous le niveau de la nappe. On doit abaisser l'eau de 4 m dans un puits de rayon r = 0,30 m. Estimer le rayon d'influence et le débit.",
    steps_demo: [
      { n: 1, text: "Hauteurs : H = 12 m ; h = 12 − 4 = 8 m." },
      { n: 2, text: "Sichardt : R = 3 000 × 4 × √(5 × 10⁻⁴) = 3 000 × 4 × 0,0224 = 268 m." },
      { n: 3, text: "ln(R/r) = ln(268 / 0,30) = ln(893) = 6,80." },
      { n: 4, text: "Dupuit : Q = π × 5 × 10⁻⁴ × (144 − 64) / 6,80 = 0,1257 / 6,80 = 0,0185 m³/s." },
      { n: 5, text: "Q ≈ 66,6 m³/h : on prévoit plusieurs puits et une capacité de pompage d'au moins 1,5 fois ce débit, ainsi qu'une autorisation de rejet." },
    ],
    result_latex: "Q = \\frac{\\pi \\times 5 \\times 10^{-4} \\times (12^2 - 8^2)}{\\ln(268/0{,}30)} = 0{,}0185\\ \\text{m}^3/\\text{s} \\approx 67\\ \\text{m}^3/\\text{h}",
  },
  units: {
    table: [
      ['Perméabilité', 'm/s', 'ft/day', '1 m/s = 283 465 ft/day ; 10⁻⁵ m/s ≈ 2,8 ft/day'],
      ['Débit', 'm³/h', 'gpm', '1 m³/h = 4,40 gpm (US)'],
      ['Transmissivité', 'm²/s', 'ft²/day', 'T = K × b'],
      ['Charge', 'm', 'ft', 'Niveau piézométrique'],
      ['Essai Lugeon', 'UL', 'Lugeon', '1 UL = 1 L/min/m sous 1 MPa ≈ 1,3 × 10⁻⁷ m/s'],
    ],
    note: 'Les ordres de grandeur de K : graviers 10⁻² à 10⁻³ ; sables 10⁻³ à 10⁻⁵ ; limons 10⁻⁵ à 10⁻⁸ ; argiles < 10⁻⁹ m/s.',
  },
  hypotheses: {
    items: [
      ['info', 'Les formules de Thiem et Dupuit supposent un régime permanent, un aquifère homogène et isotrope et un puits complet.'],
      ['info', 'Le débit total de plusieurs puits se calcule par superposition des rabattements.'],
      ['warning', 'Un rabattement peut provoquer des tassements des sols compressibles voisins et des dommages aux bâtiments.'],
      ['warning', 'Une nappe captive sous le fond de fouille peut provoquer un soulèvement si sa pression dépasse le poids des terres.'],
      ['tip', 'Installez des piézomètres avant les travaux pour connaître les niveaux réels et suivre le rabattement.'],
    ],
  },
  simple_examples: {
    examples: [
      {
        title: 'Exemple 1 : débit de Darcy',
        given: 'K = 10⁻⁵ m/s ; i = 0,02 ; A = 500 m²',
        find: 'Q',
        solution_latex: "Q = 10^{-5} \\times 0{,}02 \\times 500 = 10^{-4}\\ \\text{m}^3/\\text{s}",
        result: '0,36 m³/h.',
      },
      {
        title: 'Exemple 2 : vitesse réelle',
        given: 'K = 10⁻⁴ m/s ; i = 0,01 ; n_e = 0,20',
        find: 'v_r',
        solution_latex: "v_r = \\frac{10^{-4} \\times 0{,}01}{0{,}20} = 5 \\times 10^{-6}\\ \\text{m/s}",
        result: 'Environ 0,43 m/jour, soit 158 m par an.',
      },
      {
        title: 'Exemple 3 : puits en nappe captive',
        given: 'K = 10⁻⁴ m/s ; b = 10 m ; rabattement 3 m ; r = 0,15 m ; R = 90 m',
        find: 'Q',
        solution_latex: "Q = \\frac{2\\pi \\times 10^{-4} \\times 10 \\times 3}{\\ln(600)} = \\frac{0{,}01885}{6{,}40} = 2{,}95 \\times 10^{-3}\\ \\text{m}^3/\\text{s}",
        result: 'Environ 10,6 m³/h.',
      },
    ],
  },
  real_examples: {
    title: 'Exemple réel — Tassements dus à un rabattement en milieu urbain',
    examples: [
      {
        context: 'Construction d’un parking sur 4 niveaux en centre-ville, sols alluvionnaires avec lentilles de tourbe',
        scenario: "Un rabattement de 8 m sur plusieurs mois a abaissé la nappe sous les immeubles voisins fondés superficiellement. Les lentilles de tourbe se sont consolidées, provoquant des tassements différentiels de plusieurs centimètres et des fissures. La suite des travaux s'est faite avec des parois étanches ancrées dans le substratum et une réinjection d'eau à l'extérieur de l'enceinte.",
        decomposition_latex: "\\Delta \\sigma'_v = \\gamma_w \\times \\Delta h_{nappe} = 10 \\times 8 = 80\\ \\text{kPa} \\Rightarrow \\text{consolidation des sols compressibles}",
        lesson: "Abaisser la nappe augmente les contraintes effectives sur une grande surface : il faut étudier l'environnement et privilégier les enceintes étanches en site sensible.",
      },
    ],
  },
  diagrams: {
    title: 'Schéma de principe — Étude hydrogéologique d’une fouille',
    diagram_description: [
      'Reconnaissance : sondages, piézomètres, niveaux EB et EH',
      'Essais de perméabilité : Lefranc, pompage d’essai',
      'Choix de la méthode : rabattement, enceinte étanche, ou combinaison',
      'Calcul des débits et du nombre de puits',
      'Vérification des impacts : tassements, puits voisins, rejets',
      'Suivi en phase travaux : niveaux, débits, turbidité',
    ],
  },
  mistakes: {
    items: [
      ['Utiliser une seule valeur de K de laboratoire', 'Débit sous-estimé d’un facteur 10 ou plus', 'Réaliser un essai de pompage.'],
      ['Oublier la nappe captive profonde', 'Soulèvement du fond de fouille', 'Vérifier l’équilibre poids des terres / pression d’eau.'],
      ['Rejeter des eaux chargées', 'Pollution et sanction', 'Décanter et obtenir l’autorisation de rejet.'],
    ],
  },
  tips: {
    tips: [
      'Dimensionnez les pompes avec une marge et prévoyez des pompes de secours.',
      'Mesurez les débits et la turbidité : une eau trouble signale un entraînement de fines.',
      'Préférez les enceintes étanches à proximité d’ouvrages sensibles.',
      'Arrêtez le rabattement progressivement pour éviter la flottaison des ouvrages.',
    ],
  },
  norms: {
    norms: [
      ['NF EN 1997-1 et -2', 'Eurocode 7 : actions de l’eau et reconnaissances.'],
      ['NF P 94-132', 'Essai d’eau Lugeon.'],
      ['NF EN ISO 22282', 'Essais géohydrauliques (Lefranc, pompage).'],
      ['Code de l’environnement (loi sur l’eau)', 'Déclaration ou autorisation des prélèvements et rejets.'],
    ],
  },
  exercises: {
    exercises: [
      {
        level: 1,
        text: 'Calculer la transmissivité d’un aquifère de 15 m d’épaisseur et de perméabilité 2 × 10⁻⁴ m/s.',
        hint: 'T = K × b.',
        answer_latex: "T = 2 \\times 10^{-4} \\times 15 = 3 \\times 10^{-3}\\ \\text{m}^2/\\text{s}",
        answer_text: '3 × 10⁻³ m²/s.',
      },
      {
        level: 2,
        text: 'Calculer le rayon d’influence pour un rabattement de 5 m dans des sables à K = 10⁻³ m/s.',
        hint: 'R = 3 000 s √K.',
        answer_latex: "R = 3\\,000 \\times 5 \\times 0{,}0316 = 474\\ \\text{m}",
        answer_text: 'Environ 470 m : l’impact s’étend loin de la fouille.',
      },
      {
        level: 3,
        text: 'Un fond de fouille est à 6 m de profondeur. Sous lui, 4 m d’argile (γ = 20 kN/m³) couvrent une nappe captive dont la charge est à 2 m sous le terrain naturel. Y a-t-il risque de soulèvement ?',
        hint: 'Pression au toit de la nappe : γ_w × (10 − 2) ; poids de l’argile : 20 × 4.',
        answer_latex: "u = 10 \\times 8 = 80\\ \\text{kPa} \\qquad \\sigma = 20 \\times 4 = 80\\ \\text{kPa} \\Rightarrow F = 1{,}0",
        answer_text: 'F = 1,0 : équilibre limite, soulèvement probable. Il faut décomprimer la nappe captive par des puits de décharge.',
      },
    ],
  },
  quiz: {
    title: 'Quiz — Hydrogéologie',
    questions: [
      { q: 'Quelle loi relie le débit à la perméabilité et au gradient ?', options: ['Loi de Hooke', 'Loi de Darcy', 'Loi de Coulomb'], correct: 1, explain: 'Q = K i A.' },
      { q: 'Une nappe captive est…', options: ['À la pression atmosphérique', 'Sous pression entre deux couches peu perméables', 'Toujours superficielle'], correct: 1, explain: 'Elle est confinée par un toit imperméable.' },
      { q: 'Quel essai donne la perméabilité à l’échelle de l’ouvrage ?', options: ['Essai Proctor', 'Essai de pompage', 'Essai de cisaillement'], correct: 1, explain: 'Le pompage d’essai sollicite un grand volume de terrain.' },
    ],
  },
  exam_questions: {
    questions: [
      'Présentez la loi de Darcy et les ordres de grandeur de perméabilité.',
      'Comparez les formules de Thiem et de Dupuit et leurs hypothèses.',
      'Quels sont les risques d’un rabattement de nappe en site urbain ?',
    ],
  },
  interview_questions: {
    questions: [
      ['Comment évaluez-vous le débit d’exhaure d’une fouille ?', 'À partir des niveaux de nappe et d’essais de perméabilité (idéalement un pompage d’essai), par les formules de Dupuit ou Thiem et une modélisation si la géométrie est complexe, avec une marge sur les pompes.'],
      ['Que faire si les voisins sont sensibles aux tassements ?', 'Privilégier une enceinte étanche ancrée dans un horizon peu perméable, limiter le rabattement extérieur, installer des piézomètres et une surveillance topographique, voire réinjecter.'],
    ],
  },
  practical_case: {
    title: 'Cas pratique — Rabattement par plusieurs puits',
    scenario: 'Une fouille de 30 × 20 m doit être asséchée sur 4 m dans la nappe libre de l’étude (débit total estimé à 67 m³/h par le modèle du puits équivalent). On dispose de pompes de 15 m³/h.',
    description: 'Dimensionner le système de pompage.',
    resolutions: [
      "\\text{Nombre de pompes} : \\frac{67}{15} = 4{,}5 \\Rightarrow 5 \\text{ puits en service}",
      "\\text{Secours} : + 1 \\text{ pompe par 4 en service} \\Rightarrow 7 \\text{ pompes installées}",
      "\\text{Rejet} : 67\\ \\text{m}^3/\\text{h} \\times 24 = 1\\,608\\ \\text{m}^3/\\text{jour} \\Rightarrow \\text{bac de décantation et autorisation}",
    ],
    conclusion: 'Cinq puits répartis autour de la fouille, deux pompes de secours, un bac de décantation et un suivi piézométrique quotidien.',
  },
  summary: {
    content: `### L'hydrogéologie en 5 points
1. Nappes libres, captives, perchées.
2. Darcy : $Q = K i A$ ; vitesse réelle $K i / n_e$.
3. Thiem (captive) et Dupuit (libre) pour les puits.
4. Rayon d'influence : $R = 3\\,000 \\, s \\sqrt{K}$.
5. Risques : boulance, soulèvement, tassements des voisins.`,
  },
  key_points: {
    points: [
      'Q = K i A',
      'K de 10⁻² à 10⁻¹⁰ m/s',
      'Dupuit : Q = πK(H² − h²)/ln(R/r)',
      'Essai de pompage = référence',
      'Rabattement → tassements possibles',
    ],
  },
  self_assessment: {
    objectives: [
      'Je distingue nappes libres et captives',
      'Je sais appliquer la loi de Darcy',
      'Je sais calculer le débit d’un puits',
      'Je sais vérifier le risque de soulèvement d’un fond de fouille',
      "J'ai réussi le quiz avec au moins 2 bonnes réponses sur 3",
    ],
  },
});
