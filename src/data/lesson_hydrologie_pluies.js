// ── Lesson: Hydrologie — pluies et bassins versants — Module 37 ───────────────
import { buildLesson } from './build_lesson.js';

export const lesson_hydrologie_pluies = buildLesson({
  moduleId: 37,
  slug: 'hydrologie_pluies',
  lessonIndex: 1,
  title: "Hydrologie : Cycle de l'Eau, Pluies IDF & Bassins Versants",
  subtitle: 'Module 37 — Hydrologie & Gestion des eaux pluviales',
  level: 'Intermédiaire',
  duration: '9h',
  tags: ['Hydrologie', 'Pluie', 'Courbes IDF', 'Montana', 'Bassin versant', 'Temps de concentration', 'Période de retour'],
}, {
  definition: {
    title: "Définition — De la pluie au débit",
    fr: 'Hydrologie appliquée (hydrologie urbaine et de surface)',
    en: 'Applied hydrology',
    metier: "Utilisée par les ingénieurs VRD, assainissement, ouvrages hydrauliques et routes pour dimensionner fossés, buses, collecteurs, bassins et ponts.",
    content: `L'**hydrologie** étudie la circulation de l'eau entre l'atmosphère, la surface et le sous-sol. Pour l'ingénieur, la question centrale est : **quel débit faut-il évacuer** à l'exutoire d'un bassin versant pour une pluie de fréquence donnée ?

### Les notions de base
- **Bassin versant** : surface dont toutes les eaux ruisselées convergent vers un même point (l'exutoire).
- **Intensité de pluie** $i$ : hauteur d'eau tombée par unité de temps (mm/h).
- **Période de retour** $T$ : intervalle moyen entre deux événements au moins aussi intenses (pluie décennale : $T$ = 10 ans).
- **Temps de concentration** $t_c$ : temps mis par la goutte la plus éloignée pour atteindre l'exutoire.

> 💡 Une pluie décennale n'arrive pas tous les 10 ans : elle a chaque année une probabilité de 1/10 d'être atteinte ou dépassée.`,
  },
  importance: {
    content: `- **Inondations** : un ouvrage sous-dimensionné provoque débordements, ravinements et dégâts aux riverains.
- **Coût** : surdimensionner une buse ou un collecteur coûte cher ; le bon niveau de protection est un choix économique.
- **Imperméabilisation** : chaque projet urbain augmente le ruissellement ; la réglementation (loi sur l'eau) impose souvent de compenser.
- **Changement climatique** : l'intensité des pluies courtes augmente ; les hypothèses de projet doivent l'anticiper.

> ⚠️ **À retenir** : le débit de projet dépend autant du choix de la période de retour que de la formule de calcul.`,
  },
  applications: {
    examples: [
      ['Lotissement', 'Calcul du débit décennal pour dimensionner les collecteurs pluviaux et le bassin de rétention.'],
      ['Route', 'Dimensionnement des fossés et des ouvrages de traversée (buses, dalots) pour une crue de période 10 à 100 ans.'],
      ['Pont', 'Estimation de la crue centennale pour fixer la hauteur sous poutre et protéger les piles.'],
      ['Zone industrielle', 'Débit de fuite limité imposé par le gestionnaire du réseau aval.'],
      ['Carrière ou chantier', 'Gestion des eaux de ruissellement chargées en matières en suspension.'],
    ],
  },
  theory: {
    title: "Théorie — Pluies, ruissellement et temps de réponse",
    content: `### 1. Le bilan hydrologique
Sur une période donnée : $P = ET + R + I + \\Delta S$ (précipitation = évapotranspiration + ruissellement + infiltration + variation de stock).

### 2. Les courbes Intensité-Durée-Fréquence (IDF)
Plus une pluie est courte, plus son intensité moyenne est forte. Les stations météorologiques fournissent des **coefficients de Montana** $(a, b)$ pour chaque période de retour :

$$i(t) = a \\cdot t^{-b}$$

avec $i$ en mm/min et $t$ en minutes (b est compris entre 0,5 et 0,8 environ).

### 3. Le temps de concentration
La pluie critique pour un bassin est celle dont la durée égale son **temps de concentration** : tout le bassin contribue alors au débit. Formule de **Kirpich** (petits bassins ruraux) :

$$t_c = 0{,}0195 \\cdot L^{0{,}77} \\cdot S^{-0{,}385}$$

($t_c$ en min, $L$ longueur du plus long cheminement en m, $S$ pente en m/m).

### 4. Le débit de pointe : méthode rationnelle
$$Q = \\frac{C \\cdot i \\cdot A}{3{,}6}$$
avec $Q$ en m³/s, $i$ en mm/h et $A$ en km². $C$ est le coefficient de ruissellement : 0,9 pour les toitures et voiries, 0,1 à 0,3 pour les espaces verts.

### 5. Risque sur la durée de vie
La probabilité qu'un événement de période $T$ survienne au moins une fois en $n$ années est $R = 1 - (1 - 1/T)^n$.`,
  },
  formulas: {
    title: 'Formules essentielles — Hydrologie de projet',
    formulas: [
      {
        name: 'Courbe IDF de Montana',
        latex: "i(t) = a \\cdot t^{-b}",
        description: "Intensité moyenne d'une pluie de durée t pour une période de retour donnée.",
        vars: [
          ['i', 'Intensité moyenne', 'mm/min', '× 60 pour obtenir des mm/h.'],
          ['t', 'Durée de la pluie', 'min', 'Prendre t = t_c pour le débit de pointe.'],
          ['a, b', 'Coefficients de Montana', '-', 'Fournis par Météo-France pour chaque station et période de retour.'],
        ],
        rule: "Doubler la durée d'une pluie ne double pas la hauteur tombée : l'intensité moyenne baisse.",
      },
      {
        name: 'Temps de concentration (Kirpich)',
        latex: "t_c = 0{,}0195 \\cdot L^{0{,}77} \\cdot S^{-0{,}385}",
        description: 'Petits bassins ruraux (quelques km²).',
        vars: [
          ['t_c', 'Temps de concentration', 'min', 'Durée de la pluie critique.'],
          ['L', 'Longueur hydraulique', 'm', 'Plus long cheminement jusqu’à l’exutoire.'],
          ['S', 'Pente moyenne', 'm/m', 'Dénivelée / longueur.'],
        ],
      },
      {
        name: 'Méthode rationnelle',
        latex: "Q = \\frac{C \\cdot i \\cdot A}{3{,}6}",
        description: 'Débit de pointe pour les bassins de petite taille (jusqu’à quelques km²).',
        vars: [
          ['Q', 'Débit de pointe', 'm³/s', 'Débit de dimensionnement.'],
          ['C', 'Coefficient de ruissellement', '-', '0,9 surfaces imperméables ; 0,2 espaces verts.'],
          ['i', 'Intensité pour t = t_c', 'mm/h', 'Lue sur la courbe IDF.'],
          ['A', 'Surface du bassin', 'km²', '1 km² = 100 ha.'],
        ],
      },
      {
        name: 'Coefficient de ruissellement pondéré',
        latex: "C = \\frac{\\sum C_k \\cdot A_k}{\\sum A_k}",
        description: 'Moyenne des coefficients de chaque type de surface, pondérée par leur aire.',
        vars: [
          ['C_k', 'Coefficient de la surface k', '-', 'Toiture, voirie, pelouse…'],
          ['A_k', 'Aire de la surface k', 'm²', 'Mesurée sur le plan masse.'],
        ],
      },
      {
        name: 'Risque de dépassement sur n années',
        latex: "R = 1 - \\left(1 - \\frac{1}{T}\\right)^{n}",
        description: "Probabilité qu'un événement de période de retour T se produise au moins une fois en n années.",
        vars: [
          ['R', 'Risque', '-', 'Entre 0 et 1.'],
          ['T', 'Période de retour', 'ans', '10, 30, 100 ans…'],
          ['n', "Durée considérée", 'ans', "Durée de vie de l'ouvrage."],
        ],
        rule: "Sur 100 ans, une crue centennale a 63 % de chances de se produire au moins une fois.",
      },
    ],
  },
  stepbystep: {
    title: 'Calcul complet — Débit décennal d’un petit bassin',
    problem: "Bassin versant de 0,5 km² (C = 0,6), plus long cheminement 1 200 m, pente moyenne 2 %. Coefficients de Montana décennaux : a = 5,0 ; b = 0,6 (i en mm/min, t en min). Calculer le débit de pointe décennal.",
    steps_demo: [
      { n: 1, text: "Temps de concentration : t_c = 0,0195 × 1 200^0,77 × 0,02^−0,385 = 0,0195 × 234,9 × 4,51 = 20,7 min." },
      { n: 2, text: "Intensité : i = 5,0 × 20,7^−0,6 = 5,0 × 0,1625 = 0,81 mm/min." },
      { n: 3, text: "Conversion : 0,81 × 60 = 48,8 mm/h." },
      { n: 4, text: "Débit : Q = 0,6 × 48,8 × 0,5 / 3,6 = 4,07 m³/s." },
      { n: 5, text: "Contrôle d'ordre de grandeur : ≈ 8 m³/s/km², cohérent pour un petit bassin à forte pente." },
    ],
    result_latex: "t_c = 20{,}7\\ \\text{min} \\quad i = 48{,}8\\ \\text{mm/h} \\quad Q_{10} = \\frac{0{,}6 \\times 48{,}8 \\times 0{,}5}{3{,}6} = 4{,}1\\ \\text{m}^3/\\text{s}",
  },
  units: {
    table: [
      ['Intensité de pluie', 'mm/h', 'in/h', '1 mm/h = 0,0394 in/h ; 1 mm/min = 60 mm/h'],
      ['Hauteur de pluie', 'mm', 'in', '1 mm = 1 L/m²'],
      ['Surface', 'km², ha', 'acre, mi²', '1 km² = 100 ha ; 1 ha = 2,471 acres'],
      ['Débit', 'm³/s, L/s', 'cfs', '1 m³/s = 35,31 cfs'],
      ['Débit spécifique', 'L/s/ha', 'cfs/acre', '1 L/s/ha = 0,0143 cfs/acre'],
    ],
    note: "Le facteur 3,6 de la méthode rationnelle vient des unités : 1 mm/h sur 1 km² donne 1 000 000 × 0,001 / 3 600 = 0,278 m³/s.",
  },
  hypotheses: {
    items: [
      ['info', 'La méthode rationnelle suppose une pluie uniforme sur tout le bassin pendant une durée égale au temps de concentration.'],
      ['info', 'On admet que la période de retour du débit est la même que celle de la pluie.'],
      ['warning', 'Au-delà de quelques km², la pluie n’est plus uniforme : utiliser des méthodes adaptées (hydrogramme unitaire, modélisation).'],
      ['warning', 'Le coefficient C augmente avec la période de retour (sols saturés) : majorer pour les crues rares.'],
      ['tip', 'Comparez toujours plusieurs formules de temps de concentration : elles peuvent varier du simple au double.'],
    ],
  },
  simple_examples: {
    examples: [
      {
        title: 'Exemple 1 : coefficient pondéré d’une parcelle',
        given: 'Toitures 2 000 m² (C = 0,95), voirie 1 500 m² (C = 0,90), espaces verts 6 500 m² (C = 0,20)',
        find: 'Le coefficient de ruissellement moyen',
        solution_latex: "C = \\frac{0{,}95 \\times 2\\,000 + 0{,}90 \\times 1\\,500 + 0{,}20 \\times 6\\,500}{10\\,000} = \\frac{4\\,550}{10\\,000} = 0{,}455",
        result: 'C ≈ 0,46 pour la parcelle d’un hectare.',
      },
      {
        title: 'Exemple 2 : intensité d’une pluie de 15 minutes',
        given: 'a = 5,0 ; b = 0,6',
        find: 'i(15 min) en mm/h',
        solution_latex: "i = 5{,}0 \\times 15^{-0{,}6} = 5{,}0 \\times 0{,}197 = 0{,}985\\ \\text{mm/min} = 59\\ \\text{mm/h}",
        result: '≈ 59 mm/h.',
      },
      {
        title: 'Exemple 3 : risque centennal sur 50 ans',
        given: 'T = 100 ans, n = 50 ans',
        find: 'La probabilité d’au moins une crue centennale',
        solution_latex: "R = 1 - 0{,}99^{50} = 1 - 0{,}605 = 0{,}395",
        result: 'Près de 40 % : un événement « rare » est probable sur la vie d’un ouvrage.',
      },
    ],
  },
  real_examples: {
    title: 'Exemple réel — Imperméabilisation d’une zone commerciale',
    examples: [
      {
        context: 'Création d’une zone commerciale de 8 ha sur une prairie',
        scenario: "Le coefficient de ruissellement passe de 0,2 à 0,8. Le débit décennal à l'exutoire est multiplié par 4 pour une même pluie, alors que le fossé aval est déjà saturé.",
        decomposition_latex: "\\frac{Q_{après}}{Q_{avant}} = \\frac{0{,}8}{0{,}2} = 4",
        lesson: "Le dossier loi sur l'eau impose de compenser : un bassin de rétention limite le rejet au débit naturel (souvent quelques L/s/ha).",
      },
    ],
  },
  diagrams: {
    title: 'Schéma de principe — Chaîne de calcul du débit de projet',
    diagram_description: [
      'Bassin versant : délimitation sur carte topographique, surface A',
      'Occupation du sol : coefficient C pondéré',
      'Temps de concentration : t_c (Kirpich, vitesses d’écoulement…)',
      'Pluie de projet : période de retour T puis i(t_c) par Montana',
      'Débit de pointe : Q = C·i·A / 3,6',
      'Dimensionnement : fossé, buse, collecteur ou bassin',
    ],
  },
  mistakes: {
    items: [
      ['Mélanger mm/min et mm/h', 'Débit divisé ou multiplié par 60', 'Convertir i en mm/h avant la formule Q = C·i·A/3,6.'],
      ['Prendre une durée de pluie arbitraire', 'Intensité sous-estimée si t > t_c', 'Toujours prendre une durée égale au temps de concentration.'],
      ['Appliquer la méthode rationnelle à un grand bassin', 'Débit très surestimé', 'Limiter son usage aux petits bassins ; au-delà, modéliser.'],
    ],
  },
  tips: {
    tips: [
      'Le temps de concentration minimal à retenir en urbain est souvent de 5 à 10 minutes.',
      'Pour un bassin urbain, découpez en sous-bassins et cumulez les débits en tenant compte des temps de parcours.',
      'Demandez les coefficients de Montana à jour : ceux des années 1980 sous-estiment souvent les pluies courtes actuelles.',
      'Vérifiez sur le terrain les écoulements réels : un talus ou un fossé peut modifier les limites du bassin.',
    ],
  },
  norms: {
    norms: [
      ['NF EN 752', 'Réseaux d’évacuation et d’assainissement à l’extérieur des bâtiments : gestion du système.'],
      ['Code de l’environnement (loi sur l’eau)', 'Rubrique 2.1.5.0 : rejets d’eaux pluviales, déclaration ou autorisation selon la surface.'],
      ['Guide Certu « La ville et son assainissement »', 'Méthodes de calcul des débits pluviaux urbains.'],
      ['Instruction technique de 1977', 'Méthode superficielle de Caquot, encore utilisée en France pour les réseaux pluviaux.'],
    ],
  },
  exercises: {
    exercises: [
      {
        level: 1,
        text: 'Calculer le débit de pointe d’un parking de 2 ha (C = 0,9) pour i = 80 mm/h.',
        hint: '2 ha = 0,02 km².',
        answer_latex: "Q = \\frac{0{,}9 \\times 80 \\times 0{,}02}{3{,}6} = 0{,}40\\ \\text{m}^3/\\text{s}",
        answer_text: 'Q = 0,40 m³/s = 400 L/s.',
      },
      {
        level: 2,
        text: 'Quelle est la probabilité qu’une crue de période de retour 20 ans soit dépassée au moins une fois en 10 ans ?',
        hint: 'R = 1 − (1 − 1/T)^n.',
        answer_latex: "R = 1 - 0{,}95^{10} = 1 - 0{,}599 = 0{,}401",
        answer_text: 'Environ 40 %.',
      },
      {
        level: 3,
        text: 'Bassin rural : L = 2 500 m, S = 1,5 %. Calculer t_c par Kirpich, puis i avec a = 6,7 et b = 0,65.',
        hint: '2 500^0,77 = 413,6 ; 0,015^−0,385 = 5,04.',
        answer_latex: "t_c = 0{,}0195 \\times 413{,}6 \\times 5{,}04 = 40{,}6\\ \\text{min} \\quad i = 6{,}7 \\times 40{,}6^{-0{,}65} = 0{,}60\\ \\text{mm/min} = 36\\ \\text{mm/h}",
        answer_text: 't_c ≈ 40,6 min ; i ≈ 36 mm/h.',
      },
    ],
  },
  quiz: {
    title: 'Quiz — Hydrologie',
    questions: [
      { q: 'Quelle durée de pluie retient-on pour le débit de pointe d’un bassin ?', options: ['1 heure', 'Le temps de concentration', '24 heures'], correct: 1, explain: 'À t = t_c, tout le bassin contribue : c’est la pluie critique.' },
      { q: 'Une pluie décennale…', options: ['Arrive exactement tous les 10 ans', 'A une probabilité annuelle de 10 %', 'Ne peut pas arriver deux années de suite'], correct: 1, explain: 'La période de retour est l’inverse de la probabilité annuelle de dépassement.' },
      { q: 'Que devient le débit si C passe de 0,2 à 0,8 ?', options: ['Il double', 'Il est multiplié par 4', 'Il ne change pas'], correct: 1, explain: 'Le débit rationnel est proportionnel à C.' },
    ],
  },
  exam_questions: {
    questions: [
      'Définissez bassin versant, temps de concentration et période de retour.',
      'Présentez les courbes IDF et la formule de Montana ; expliquez l’influence de la durée sur l’intensité.',
      'Appliquez la méthode rationnelle à un lotissement et discutez ses limites.',
      'Expliquez pourquoi l’urbanisation augmente les débits de pointe et comment la compenser.',
    ],
  },
  interview_questions: {
    questions: [
      ['Comment choisissez-vous la période de retour d’un ouvrage ?', 'Selon les enjeux en cas de défaillance et la réglementation locale : 10 ans pour un réseau pluvial courant, 30 à 100 ans pour les ouvrages de traversée et les zones à enjeux, la crue centennale ou plus pour les ponts et les barrages.'],
      ['Quelles sont les limites de la méthode rationnelle ?', 'Elle suppose une pluie uniforme de durée t_c sur tout le bassin et un coefficient C constant ; elle n’est valable que pour de petits bassins et ne donne qu’un débit de pointe, pas un volume ni un hydrogramme.'],
    ],
  },
  practical_case: {
    title: 'Cas pratique — Buse sous une route départementale',
    scenario: 'Une route recoupe un talweg drainant un bassin rural de 0,8 km² (C = 0,35). t_c = 30 min, Montana centennal : a = 8,0 ; b = 0,6.',
    description: 'Calculer le débit centennal à faire passer sous la route.',
    resolutions: [
      "i = 8{,}0 \\times 30^{-0{,}6} = 8{,}0 \\times 0{,}130 = 1{,}04\\ \\text{mm/min} = 62{,}4\\ \\text{mm/h}",
      "Q_{100} = \\frac{0{,}35 \\times 62{,}4 \\times 0{,}8}{3{,}6} = 4{,}85\\ \\text{m}^3/\\text{s}",
      "\\text{Dimensionnement de l'ouvrage (dalot ou buse) pour } Q \\approx 4{,}9\\ \\text{m}^3/\\text{s}",
    ],
    conclusion: "Un débit d'environ 4,9 m³/s impose un dalot (par exemple 2,00 × 1,50 m) plutôt qu'une buse courante ; on vérifiera la vitesse en sortie pour éviter l'affouillement.",
  },
  summary: {
    content: `### L'hydrologie de projet en 5 points
1. Délimiter le **bassin versant** et son coefficient $C$.
2. Calculer le **temps de concentration** $t_c$.
3. Lire l'intensité $i(t_c)$ sur la **courbe IDF** de la période de retour choisie.
4. Débit de pointe : $Q = C i A / 3{,}6$.
5. Le risque sur $n$ années : $R = 1 - (1 - 1/T)^n$.`,
  },
  key_points: {
    points: [
      'Montana : i = a·t^(−b)',
      'Pluie critique : durée = temps de concentration',
      'Q = C·i·A / 3,6 (m³/s, mm/h, km²)',
      'Probabilité annuelle = 1/T',
      'Imperméabiliser multiplie le débit de pointe',
    ],
  },
  self_assessment: {
    objectives: [
      'Je sais délimiter un bassin versant',
      'Je sais calculer un temps de concentration',
      'Je sais utiliser une courbe IDF de Montana',
      'Je sais appliquer la méthode rationnelle',
      "J'ai réussi le quiz avec au moins 2 bonnes réponses sur 3",
    ],
  },
});
