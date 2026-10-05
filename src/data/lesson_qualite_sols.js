// ── Lesson: Contrôle du compactage et essais de sols — Module 33 ─────────────
import { buildLesson } from './build_lesson.js';

export const lesson_qualite_sols = buildLesson({
  moduleId: 33,
  slug: 'qualite_sols',
  lessonIndex: 1,
  title: "Contrôle des Terrassements : Proctor, Densité en Place, Essai de Plaque et Portance des Plates-formes",
  subtitle: 'Module 33 — Contrôle Qualité & Essais',
  level: 'Intermédiaire',
  duration: '6h',
  diagramType: 'soil_profile',
  tags: ['Proctor', 'Compactage', 'Densité', 'Essai de plaque', 'EV2', 'Plate-forme', 'GTR'],
}, {
  definition: {
    title: 'Définition — Vérifier qu’un sol compacté porte ce qu’il doit porter',
    fr: 'Contrôle de compactage et essais de sols',
    en: 'Soil compaction control and field testing',
    metier: "Concerne les laboratoires routiers, les conducteurs de travaux de terrassement, les maîtres d'œuvre et les contrôleurs extérieurs.",
    content: `Un remblai, une couche de forme ou une plate-forme de bâtiment doivent être **compactés** pour atteindre une densité et une portance suffisantes. Le contrôle combine :

- des **essais de laboratoire** : identification (granulométrie, limites d'Atterberg, VBS) et **essai Proctor** (densité sèche maximale et teneur en eau optimale) ;
- des **essais en place** : densité (gammadensimètre, densitomètre à membrane), **essai de plaque** (modules EV1 et EV2), dynaplaque, pénétromètre.

### L'objectif
Atteindre une **densité sèche** proche de l'optimum Proctor et une **portance** (EV2) conforme à la classe de plate-forme demandée.

> 💡 La teneur en eau est le paramètre clé : un sol trop sec ou trop humide ne se compacte pas bien, quelle que soit l'énergie appliquée.`,
  },
  importance: {
    content: `- **Tassements** : un remblai mal compacté tasse sous les dallages et les chaussées.
- **Portance** : la plate-forme conditionne l'épaisseur des chaussées et des dallages.
- **Contractuel** : les objectifs de densification (q3, q4) et de portance (PF2, PF3) figurent au CCTP.
- **Coût** : reprendre une couche défectueuse coûte bien plus cher que la contrôler.

> ⚠️ **À retenir** : un contrôle n'a de valeur que s'il est réalisé couche par couche, au bon moment.`,
  },
  applications: {
    examples: [
      ['Remblai routier', 'Objectif q4, contrôle par gammadensimètre.'],
      ['Couche de forme', 'Objectif q3 et EV2 ≥ 50 MPa (PF2).'],
      ['Dallage industriel', 'Plate-forme PF3 avec EV2 ≥ 120 MPa et EV2/EV1 ≤ 2.'],
      ['Tranchée de réseau', 'Contrôle au pénétromètre dynamique du remblai.'],
      ['Sol traité à la chaux', 'Suivi de la teneur en eau et de la portance.'],
    ],
  },
  theory: {
    title: 'Théorie — Densité, Proctor et portance',
    content: `### 1. Relations de base
$$\\gamma_d = \\frac{\\gamma_h}{1 + w}$$
$\\gamma_h$ : masse volumique humide mesurée en place ; $w$ : teneur en eau.

### 2. Essai Proctor
On compacte le sol à différentes teneurs en eau avec une énergie normalisée : **Proctor normal (OPN)** ou **modifié (OPM)**. La courbe $\\gamma_d(w)$ présente un maximum : $\\gamma_{dOPN}$ à $w_{OPN}$.

### 3. Taux de compactage et objectifs (GTR)
$$T_c = \\frac{\\gamma_{d,place}}{\\gamma_{dOPN}}$$
| Objectif | Moyenne sur la couche | Fond de couche |
|---|---|---|
| q4 (remblais) | ≥ 95 % OPN | ≥ 92 % OPN |
| q3 (couches de forme) | ≥ 98,5 % OPN | ≥ 96 % OPN |

### 4. Essai de plaque
Plaque de 600 mm chargée en deux cycles ; module :
$$E_V = 1{,}5 \\frac{q \\, r}{s}$$
($q$ pression, $r$ rayon de la plaque, $s$ enfoncement). Le rapport $k = E_{V2}/E_{V1}$ caractérise la qualité du compactage (souvent exigé ≤ 2).

### 5. Classes de plate-forme
| Classe | EV2 (MPa) |
|---|---|
| PF1 | 20 à 50 |
| PF2 | 50 à 120 |
| PF3 | 120 à 200 |
| PF4 | ≥ 200 |`,
  },
  formulas: {
    title: 'Formules essentielles — Contrôle des sols',
    formulas: [
      {
        name: 'Masse volumique sèche',
        latex: "\\gamma_d = \\frac{\\gamma_h}{1 + w}",
        description: 'Passage de la masse volumique humide à la sèche.',
        vars: [
          ['\\gamma_d', 'Masse volumique sèche', 't/m³', ''],
          ['\\gamma_h', 'Masse volumique humide', 't/m³', 'Mesurée en place.'],
          ['w', 'Teneur en eau', '-', 'En décimal.'],
        ],
      },
      {
        name: 'Taux de compactage',
        latex: "T_c = \\frac{\\gamma_{d,place}}{\\gamma_{dOPN}} \\times 100",
        description: 'À comparer aux objectifs q3 et q4.',
        vars: [
          ['\\gamma_{d,place}', 'Masse volumique sèche en place', 't/m³', ''],
          ['\\gamma_{dOPN}', 'Maximum Proctor normal', 't/m³', 'Laboratoire.'],
        ],
      },
      {
        name: 'Module à la plaque',
        latex: "E_V = 1{,}5 \\, \\frac{q \\, r}{s}",
        description: 'Module de déformation (essai à la plaque de 600 mm).',
        vars: [
          ['E_V', 'Module EV1 ou EV2', 'MPa', ''],
          ['q', 'Pression moyenne sous la plaque', 'MPa', '0,25 MPa pour la plaque de 600 mm (méthode française).'],
          ['r', 'Rayon de la plaque', 'mm', '300 mm.'],
          ['s', 'Enfoncement', 'mm', 'Sur le cycle considéré.'],
        ],
      },
      {
        name: 'Rapport de compactage',
        latex: "k = \\frac{E_{V2}}{E_{V1}}",
        description: 'Un rapport élevé révèle un compactage insuffisant.',
        vars: [
          ['k', 'Rapport des modules', '-', 'Souvent exigé ≤ 2.'],
        ],
      },
    ],
  },
  stepbystep: {
    title: 'Calcul complet — Réception d’une couche de forme',
    problem: "Sur une couche de forme (objectif q3, PF2), on mesure en place γ_h = 2,10 t/m³ et w = 7,5 %. Laboratoire : γ_dOPN = 2,00 t/m³ à w_OPN = 8 %. Essai de plaque : s₁ = 2,8 mm (premier cycle) et s₂ = 1,2 mm (second cycle). La couche est-elle conforme ?",
    steps_demo: [
      { n: 1, text: "γ_d = 2,10 / 1,075 = 1,953 t/m³." },
      { n: 2, text: "T_c = 1,953 / 2,00 = 97,7 % < 98,5 % : objectif q3 non atteint (en moyenne)." },
      { n: 3, text: "EV1 = 1,5 × 0,25 × 300 / 2,8 = 40,2 MPa ; EV2 = 1,5 × 0,25 × 300 / 1,2 = 93,8 MPa." },
      { n: 4, text: "EV2 = 93,8 MPa ≥ 50 MPa : portance PF2 atteinte ; k = 93,8 / 40,2 = 2,33 > 2 : compactage insuffisant." },
      { n: 5, text: "Décision : passes de compacteur supplémentaires (teneur en eau correcte, proche de l'optimum), puis nouveau contrôle." },
    ],
    result_latex: "T_c = \\frac{2{,}10 / 1{,}075}{2{,}00} = 97{,}7\\ \\% \\qquad E_{V2} = \\frac{1{,}5 \\times 0{,}25 \\times 300}{1{,}2} = 93{,}8\\ \\text{MPa} \\qquad k = 2{,}33",
  },
  units: {
    table: [
      ['Masse volumique', 't/m³', 'lb/ft³ (pcf)', '1 t/m³ = 62,4 pcf'],
      ['Teneur en eau', '%', '%', 'Massique, rapportée au sol sec'],
      ['Module EV', 'MPa', 'psi', '50 MPa = 7 250 psi'],
      ['Enfoncement', 'mm', 'in', 'Lecture au 1/100 mm'],
      ['Indice CBR', '%', '%', 'Équivalence indicative EV2 ≈ 5 × CBR'],
    ],
    note: 'Les objectifs q3/q4 se réfèrent au Proctor normal (OPN) dans le GTR français ; d’autres pays utilisent le Proctor modifié.',
  },
  hypotheses: {
    items: [
      ['info', 'La formule de l’essai de plaque suppose un sol homogène sous la plaque sur environ 1,5 fois son diamètre.'],
      ['info', 'Le gammadensimètre doit être étalonné et la teneur en eau vérifiée par étuvage sur quelques points.'],
      ['warning', 'Un essai de plaque sur sol saturé ou gelé donne des résultats non représentatifs.'],
      ['warning', 'Les objectifs exacts (q3, q4, PF) sont fixés par le CCTP du marché.'],
      ['tip', 'Réalisez une planche d’essai pour fixer le nombre de passes et l’épaisseur des couches.'],
    ],
  },
  simple_examples: {
    examples: [
      {
        title: 'Exemple 1 : masse volumique sèche',
        given: 'γ_h = 1,98 t/m³ ; w = 12 %',
        find: 'γ_d',
        solution_latex: "\\gamma_d = \\frac{1{,}98}{1{,}12} = 1{,}768\\ \\text{t/m}^3",
        result: '1,77 t/m³.',
      },
      {
        title: 'Exemple 2 : conformité q4',
        given: 'γ_d = 1,768 ; γ_dOPN = 1,84',
        find: 'T_c',
        solution_latex: "T_c = \\frac{1{,}768}{1{,}84} = 96{,}1\\ \\%",
        result: '96,1 % ≥ 95 % : objectif q4 atteint en moyenne.',
      },
      {
        title: 'Exemple 3 : module EV2',
        given: 's₂ = 0,85 mm ; q = 0,25 MPa ; r = 300 mm',
        find: 'EV2',
        solution_latex: "E_{V2} = \\frac{1{,}5 \\times 0{,}25 \\times 300}{0{,}85} = 132\\ \\text{MPa}",
        result: '132 MPa : classe PF3.',
      },
    ],
  },
  real_examples: {
    title: 'Exemple réel — Dallage industriel fissuré et affaissé',
    examples: [
      {
        context: 'Entrepôt logistique sur remblai de 2 m',
        scenario: "Le remblai a été mis en place en couches de 60 cm au lieu de 30 cm, sans contrôle par couche. Les essais de surface semblaient corrects, mais le bas des couches était peu compacté. Après mise en service des racks, le dallage a tassé de plusieurs centimètres et fissuré.",
        decomposition_latex: "\\text{Couches trop épaisses} \\Rightarrow T_c \\text{ faible en fond de couche} \\Rightarrow \\text{tassements différés}",
        lesson: "Les épaisseurs de couches doivent respecter le GTR et la planche d'essai, et la densité doit être contrôlée en fond de couche.",
      },
    ],
  },
  diagrams: {
    title: 'Schéma de principe — Contrôle d’un terrassement',
    diagram_description: [
      'Identification du sol (GTR) et Proctor en laboratoire',
      'Planche d’essai : épaisseur de couche, nombre de passes',
      'Mise en œuvre couche par couche avec contrôle de la teneur en eau',
      'Contrôle de densité (gammadensimètre) et taux de compactage',
      'Contrôle de portance : essai de plaque EV2 et rapport k',
      'Réception de la plate-forme ou reprise de la couche',
    ],
  },
  mistakes: {
    items: [
      ['Compacter un sol trop humide', 'Matelassage, densité insuffisante', 'Aérer ou traiter le sol (chaux) avant compactage.'],
      ['Couches trop épaisses', 'Fond de couche non compacté', 'Respecter les épaisseurs du GTR.'],
      ['Contrôler seulement en surface', 'Défauts cachés', 'Contrôler chaque couche.'],
    ],
  },
  tips: {
    tips: [
      'Suivez la teneur en eau chaque jour : elle varie avec la météo.',
      'Positionnez les essais selon un plan (maillage) et non au hasard.',
      'Conservez la traçabilité des essais avec position et date.',
      'Utilisez la dynaplaque pour des contrôles rapides, et la plaque statique pour la réception.',
    ],
  },
  norms: {
    norms: [
      ['GTR (Guide des terrassements routiers, Sétra-LCPC)', 'Classification des sols et conditions de mise en œuvre.'],
      ['NF P 94-093', 'Essai Proctor normal et modifié.'],
      ['NF P 94-117-1', 'Essai de plaque : module sous chargement statique.'],
      ['NF P 94-061', 'Masse volumique en place (gammadensimètre et autres méthodes).'],
      ['NF P 11-300', 'Classification des matériaux utilisables en terrassement.'],
    ],
  },
  exercises: {
    exercises: [
      {
        level: 1,
        text: 'Calculer γ_d pour γ_h = 2,05 t/m³ et w = 10 %.',
        hint: 'γ_d = γ_h / (1 + w).',
        answer_latex: "\\frac{2{,}05}{1{,}10} = 1{,}864\\ \\text{t/m}^3",
        answer_text: '1,86 t/m³.',
      },
      {
        level: 2,
        text: 'Un essai donne s₁ = 3,5 mm et s₂ = 2,0 mm. Calculer EV1, EV2 et k.',
        hint: 'E = 112,5 / s.',
        answer_latex: "E_{V1} = \\frac{112{,}5}{3{,}5} = 32{,}1 \\qquad E_{V2} = \\frac{112{,}5}{2{,}0} = 56{,}3 \\qquad k = 1{,}75",
        answer_text: 'EV1 = 32,1 MPa ; EV2 = 56,3 MPa (PF2) ; k = 1,75 ≤ 2 : conforme.',
      },
      {
        level: 3,
        text: 'Quel enfoncement maximal s₂ garantit EV2 ≥ 120 MPa ?',
        hint: 's = 112,5 / EV2.',
        answer_latex: "s_2 \\leq \\frac{112{,}5}{120} = 0{,}94\\ \\text{mm}",
        answer_text: 's₂ ≤ 0,94 mm.',
      },
    ],
  },
  quiz: {
    title: 'Quiz — Contrôle des sols',
    questions: [
      { q: 'Que donne l’essai Proctor ?', options: ['La portance', 'La densité sèche maximale et la teneur en eau optimale', 'La perméabilité'], correct: 1, explain: 'γ_dOPN et w_OPN.' },
      { q: 'Quel objectif q4 doit atteindre la moyenne de la couche ?', options: ['90 % OPN', '95 % OPN', '100 % OPN'], correct: 1, explain: 'q4 : 95 % en moyenne, 92 % en fond de couche.' },
      { q: 'Un rapport EV2/EV1 élevé signifie…', options: ['Un excellent compactage', 'Un compactage insuffisant', 'Un sol très sec'], correct: 1, explain: 'Le sol se tasse beaucoup au premier cycle.' },
    ],
  },
  exam_questions: {
    questions: [
      'Décrivez l’essai Proctor et son utilisation sur chantier.',
      'Expliquez l’essai de plaque et l’interprétation de EV2 et k.',
      'Comment organiser le contrôle d’un remblai de grande hauteur ?',
    ],
  },
  interview_questions: {
    questions: [
      ['Les essais de densité sont bons mais les EV2 sont faibles : que pensez-vous ?', 'Le sol est peut-être trop humide ou sensible à l’eau, ou une couche sous-jacente est faible ; je vérifie la teneur en eau, la nature du sol et la couche inférieure avant de décider.'],
      ['Comment réduire les reprises de terrassement ?', 'Planche d’essai, suivi météo et teneur en eau, épaisseurs de couches respectées, contrôles au fil de l’eau et traitement des sols sensibles.'],
    ],
  },
  practical_case: {
    title: 'Cas pratique — Plate-forme d’un entrepôt',
    scenario: 'Plate-forme de 20 000 m² exigée PF3 (EV2 ≥ 120 MPa, k ≤ 2). Résultats de 8 essais de plaque : EV2 = 135, 128, 142, 118, 131, 125, 139, 121 MPa ; k ≤ 1,9 partout.',
    description: 'Analyser la conformité et décider.',
    resolutions: [
      "\\overline{E_{V2}} = \\frac{135 + 128 + 142 + 118 + 131 + 125 + 139 + 121}{8} = 129{,}9\\ \\text{MPa}",
      "\\text{Un essai} < 120\\ \\text{MPa (118 MPa)} \\Rightarrow \\text{zone localisée à reprendre}",
      "\\text{Recompactage local puis contre-essai} : E_{V2} \\geq 120\\ \\text{MPa exigé}",
    ],
    conclusion: 'La plate-forme est globalement conforme ; la zone à 118 MPa est délimitée, recompactée et contrôlée avant réception.',
  },
  summary: {
    content: `### Le contrôle des sols en 5 points
1. $\\gamma_d = \\gamma_h / (1 + w)$.
2. Proctor : optimum de densité et de teneur en eau.
3. Objectifs q4 (95 % / 92 %) et q3 (98,5 % / 96 %).
4. Plaque : $E_V = 1{,}5 \\, q r / s$ ; $k = E_{V2}/E_{V1} \\leq 2$.
5. Classes PF1 à PF4 selon EV2.`,
  },
  key_points: {
    points: [
      'γ_d = γ_h / (1 + w)',
      'q4 : 95 % OPN en moyenne',
      'E_V = 1,5 q r / s',
      'k = EV2/EV1 ≤ 2',
      'PF2 : EV2 ≥ 50 MPa',
    ],
  },
  self_assessment: {
    objectives: [
      'Je sais exploiter un essai Proctor',
      'Je sais calculer un taux de compactage',
      'Je sais interpréter un essai de plaque',
      'Je connais les classes de plate-forme',
      "J'ai réussi le quiz avec au moins 2 bonnes réponses sur 3",
    ],
  },
});
