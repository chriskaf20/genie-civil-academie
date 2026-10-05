// ── Lesson: Réseaux d'assainissement — Module 14 ─────────────────────────────
import { buildLesson } from './build_lesson.js';

export const lesson_assainissement_reseaux = buildLesson({
  moduleId: 14,
  slug: 'assainissement_reseaux',
  lessonIndex: 3,
  title: "Réseaux d'Assainissement : Eaux Usées, Eaux Pluviales, Dimensionnement & Autocurage",
  subtitle: 'Module 14 — Hydraulique urbaine & ouvrages hydrauliques',
  level: 'Intermédiaire',
  duration: '10h',
  diagramType: 'road_profile',
  tags: ['Assainissement', 'Eaux usées', 'Eaux pluviales', 'Séparatif', 'Unitaire', 'Manning-Strickler', 'Autocurage'],
}, {
  definition: {
    title: "Définition — Évacuer les eaux de la ville",
    fr: "Réseau d'assainissement collectif",
    en: 'Sewer network (sanitary and storm drainage)',
    metier: "Utilisée par les ingénieurs VRD, les collectivités, les exploitants de réseaux et les bureaux d'études en assainissement.",
    content: `Un réseau d'**assainissement** collecte et transporte :
- les **eaux usées** (EU) domestiques et industrielles vers une station d'épuration ;
- les **eaux pluviales** (EP) ruisselées sur les toitures et voiries vers le milieu naturel ou un bassin.

### Deux systèmes
- **Unitaire** : une seule canalisation pour EU et EP. Simple et ancien, mais en cas d'orage des **déversoirs d'orage** rejettent un mélange non traité au milieu naturel.
- **Séparatif** : deux réseaux distincts. C'est la règle pour les réseaux neufs.

### Écoulement gravitaire à surface libre
Les canalisations fonctionnent le plus souvent par **gravité**, partiellement remplies. On les dimensionne avec la formule de **Manning-Strickler** et on vérifie l'**autocurage** : une vitesse suffisante pour entraîner les dépôts.

> 💡 La pente fait tout en assainissement : sans pente, il faut pomper (postes de relevage), ce qui coûte cher et tombe en panne.`,
  },
  importance: {
    content: `- **Santé publique** : l'évacuation des eaux usées a fait disparaître les grandes épidémies urbaines (choléra, typhoïde).
- **Environnement** : les débordements et déversements d'orage polluent les rivières ; la directive européenne impose la collecte et le traitement.
- **Inondations** : un réseau pluvial saturé met en charge les rues et les sous-sols.
- **Patrimoine** : les réseaux enterrés coûtent cher à renouveler ; leur inspection (caméra) guide les investissements.

> ⚠️ **À retenir** : le réseau d'eaux usées se dimensionne sur le débit de pointe, mais l'autocurage se vérifie pour les faibles débits.`,
  },
  applications: {
    examples: [
      ['Lotissement', 'Réseau séparatif : EU en PVC DN 200 vers le collecteur communal, EP vers un bassin de rétention.'],
      ['Commune rurale', 'Réseau EU avec poste de relevage vers la station d’épuration.'],
      ['Centre-ville ancien', 'Mise en séparatif progressive et bassins de stockage-restitution des eaux d’orage.'],
      ['Zone d’activités', 'Prétraitement (séparateur d’hydrocarbures) avant rejet pluvial.'],
      ['Réhabilitation', 'Chemisage intérieur sans tranchée des collecteurs fissurés.'],
    ],
  },
  theory: {
    title: 'Théorie — Débits et hydraulique des collecteurs',
    content: `### 1. Débits d'eaux usées
- Débit moyen : environ 80 % de la consommation d'eau potable (rejet de 120 à 150 L/hab/j).
- Coefficient de pointe (Instruction technique de 1977) : $p = 1{,}5 + \\dfrac{2{,}5}{\\sqrt{Q_m}}$ ($Q_m$ en L/s), plafonné à 4.
- On ajoute les eaux claires parasites (infiltrations de nappe) selon le diagnostic.

### 2. Débits d'eaux pluviales
Méthode rationnelle pour les petits bassins (voir le cours d'hydrologie) ou formule de Caquot en France, pour une période de retour de 10 ans en général.

### 3. Capacité d'une conduite circulaire pleine (Manning-Strickler)
$$Q_{ps} = K_s \\cdot S \\cdot R_h^{2/3} \\cdot \\sqrt{I} \\qquad S = \\frac{\\pi D^2}{4} \\quad R_h = \\frac{D}{4}$$

### 4. Remplissage partiel et autocurage
On vérifie que le débit de pointe reste inférieur au débit à pleine section, et que la vitesse reste suffisante pour éviter les dépôts : de l'ordre de 0,6 à 0,7 m/s pour le débit moyen en EU (et au moins 0,3 m/s pour les petits débits).

### 5. Règles constructives
- Diamètres minimaux : 200 mm en EU, 300 mm en EP (selon les règlements).
- Pente minimale : 0,3 à 0,5 % (EU).
- Regards de visite à chaque changement de direction ou de pente, et au plus tous les 50 à 80 m.`,
  },
  formulas: {
    title: 'Formules essentielles — Assainissement',
    formulas: [
      {
        name: "Coefficient de pointe des eaux usées",
        latex: "p = 1{,}5 + \\frac{2{,}5}{\\sqrt{Q_m}} \\le 4 \\qquad Q_p = p \\cdot Q_m",
        description: 'Instruction technique de 1977, Q_m en L/s.',
        vars: [
          ['p', 'Coefficient de pointe', '-', 'Diminue quand le débit moyen augmente.'],
          ['Q_m', 'Débit moyen d’eaux usées', 'L/s', '≈ 80 % de la consommation d’eau potable.'],
          ['Q_p', 'Débit de pointe', 'L/s', 'Débit de dimensionnement.'],
        ],
      },
      {
        name: 'Capacité à pleine section (Manning-Strickler)',
        latex: "Q_{ps} = K_s \\cdot \\frac{\\pi D^2}{4} \\cdot \\left(\\frac{D}{4}\\right)^{2/3} \\cdot \\sqrt{I}",
        description: 'Débit d’une conduite circulaire coulant juste pleine, sans mise en charge.',
        vars: [
          ['Q_{ps}', 'Débit à pleine section', 'm³/s', 'Capacité de la conduite.'],
          ['K_s', 'Coefficient de Strickler', 'm^(1/3)/s', '70 à 90 selon le matériau et l’état.'],
          ['D', 'Diamètre intérieur', 'm', 'DN 200 minimum en EU.'],
          ['I', 'Pente', 'm/m', '0,005 = 0,5 %.'],
        ],
        rule: "La capacité varie comme D^(8/3) : passer de DN 200 à DN 300 multiplie la capacité par près de 3.",
      },
      {
        name: 'Vitesse à pleine section',
        latex: "v_{ps} = \\frac{Q_{ps}}{S} = K_s \\left(\\frac{D}{4}\\right)^{2/3} \\sqrt{I}",
        description: 'Indicateur de l’autocurage et du risque d’érosion.',
        vars: [
          ['v_{ps}', 'Vitesse à pleine section', 'm/s', 'Viser environ 0,7 à 4 m/s.'],
        ],
      },
      {
        name: 'Taux de remplissage',
        latex: "r_Q = \\frac{Q_p}{Q_{ps}} \\le 1",
        description: 'Une conduite d’eaux usées est en général conçue pour ne pas dépasser environ 0,7 à 0,8 en pointe.',
        vars: [
          ['r_Q', 'Rapport des débits', '-', 'Donne le rapport des hauteurs et des vitesses via les abaques.'],
        ],
      },
    ],
  },
  stepbystep: {
    title: 'Calcul complet — Collecteur d’eaux usées de 5 000 habitants',
    problem: "Rejet 120 L/hab/j pour 5 000 habitants. Collecteur en PVC (K_s = 70) à la pente de 0,5 %. Calculer le débit de pointe et vérifier un DN 200 puis un DN 250.",
    steps_demo: [
      { n: 1, text: "Débit moyen : 5 000 × 120 = 600 m³/j = 6,94 L/s." },
      { n: 2, text: "Coefficient de pointe : p = 1,5 + 2,5 / √6,94 = 1,5 + 0,95 = 2,45 → Q_p = 17,0 L/s." },
      { n: 3, text: "DN 200 : Q_ps = 70 × 0,0314 × 0,05^(2/3) × √0,005 = 70 × 0,0314 × 0,136 × 0,0707 = 21,1 L/s." },
      { n: 4, text: "Remplissage DN 200 : 17,0 / 21,1 = 0,81 : un peu élevé pour un collecteur principal." },
      { n: 5, text: "DN 250 : Q_ps = 38,3 L/s et v_ps = 0,78 m/s ; remplissage 0,44." },
      { n: 6, text: "Choix : DN 250 à 0,5 %, réserve pour l'urbanisation future ; vérifier l'autocurage au débit moyen." },
    ],
    result_latex: "Q_p = 2{,}45 \\times 6{,}94 = 17{,}0\\ \\text{L/s} \\qquad Q_{ps}(DN\\ 250) = 70 \\times 0{,}0491 \\times 0{,}0625^{2/3} \\times \\sqrt{0{,}005} = 38{,}3\\ \\text{L/s}",
  },
  units: {
    table: [
      ['Débit', 'L/s, m³/h', 'gpm, cfs', '1 L/s = 3,6 m³/h'],
      ['Pente', 'm/m, %, mm/m', 'ft/ft', '0,5 % = 5 mm/m'],
      ['Coefficient de Strickler K_s', 'm^(1/3)/s', '-', 'Manning n = 1 / K_s (n ≈ 0,013 → K_s ≈ 77)'],
      ['Diamètre', 'DN (mm)', 'in', 'DN 200 ≈ 8 in'],
      ['Population équivalente', 'EH', 'PE', '1 EH = 60 g DBO₅/j'],
    ],
    note: 'Le coefficient de Manning n des ouvrages anglo-saxons est l’inverse du coefficient de Strickler K_s.',
  },
  hypotheses: {
    items: [
      ['info', 'Écoulement gravitaire permanent et uniforme dans chaque tronçon (Manning-Strickler).'],
      ['info', 'Le coefficient de pointe de 1977 est adapté aux petits et moyens réseaux ; les grandes agglomérations utilisent des mesures.'],
      ['warning', 'Les eaux claires parasites peuvent doubler les débits mesurés en temps de pluie ou de nappe haute.'],
      ['warning', 'Une pente trop forte (vitesses > 4 m/s) érode les conduites ; prévoir des regards de chute.'],
      ['tip', 'Inspectez les réseaux par caméra avant toute réhabilitation : fissures, racines, raccords pénétrants.'],
    ],
  },
  simple_examples: {
    examples: [
      {
        title: 'Exemple 1 : rapport de capacité DN 300 / DN 200',
        given: 'Même pente et même rugosité',
        find: 'Le rapport des capacités',
        solution_latex: "\\frac{Q_{300}}{Q_{200}} = \\left(\\frac{300}{200}\\right)^{8/3} = 1{,}5^{2{,}667} = 2{,}95",
        result: 'Près de 3 fois plus de capacité.',
      },
      {
        title: 'Exemple 2 : pointe d’un grand collecteur',
        given: 'Q_m = 100 L/s',
        find: 'Le coefficient de pointe',
        solution_latex: "p = 1{,}5 + \\frac{2{,}5}{\\sqrt{100}} = 1{,}75",
        result: 'p = 1,75 : les grands réseaux lissent les pointes.',
      },
      {
        title: 'Exemple 3 : pente minimale pour un DN 200',
        given: 'K_s = 70, on veut v_ps ≥ 0,7 m/s',
        find: 'La pente minimale',
        solution_latex: "\\sqrt{I} = \\frac{0{,}7}{70 \\times 0{,}05^{2/3}} = \\frac{0{,}7}{9{,}50} = 0{,}0737 \\Rightarrow I = 0{,}54\\,\\%",
        result: 'I ≥ 0,54 %.',
      },
    ],
  },
  real_examples: {
    title: 'Exemple réel — Le grand égout de Paris et les déversoirs d’orage',
    examples: [
      {
        context: 'Réseau unitaire de Paris conçu au XIXᵉ siècle (Belgrand)',
        scenario: "Par temps sec, toutes les eaux vont en station d'épuration ; lors des orages, les volumes dépassent la capacité de traitement et des déversoirs rejettent une partie du mélange en Seine. De grands ouvrages de stockage (bassins enterrés, tunnels-réservoirs) retiennent désormais les premières eaux d'orage, les plus polluées.",
        decomposition_latex: "Q_{orage} \\gg Q_{station} \\Rightarrow \\text{déversement} \\qquad \\text{stockage-restitution} \\Rightarrow \\text{rejets réduits}",
        lesson: "En unitaire, la maîtrise des rejets d'orage passe par le stockage et la gestion des eaux pluviales à la source (infiltration, toitures végétalisées).",
      },
    ],
  },
  diagrams: {
    title: 'Schéma de principe — Réseau séparatif',
    diagram_description: [
      'Branchements : boîte de branchement en limite de propriété (EU et EP séparés)',
      'Réseau EU : collecteurs gravitaires, regards, postes de relevage si nécessaire',
      'Station d’épuration : traitement avant rejet',
      'Réseau EP : grilles, avaloirs, collecteurs pluviaux',
      'Ouvrages de gestion : bassins de rétention, noues, infiltration',
      'Exutoire : rivière ou réseau aval à débit de fuite limité',
    ],
  },
  mistakes: {
    items: [
      ['Raccorder les eaux pluviales sur le réseau EU', 'Saturation du réseau et de la station par temps de pluie', 'Contrôler la conformité des branchements (test à la fumée ou au colorant).'],
      ['Pente insuffisante', 'Dépôts, odeurs et bouchages', 'Respecter la pente minimale et vérifier l’autocurage.'],
      ['Regards trop espacés', 'Curage et inspection impossibles', 'Regard à chaque changement de direction et au plus tous les 50 à 80 m.'],
    ],
  },
  tips: {
    tips: [
      'Tracez le profil en long avant de choisir les diamètres : la topographie fixe les pentes possibles.',
      'Évitez les postes de relevage quand un tracé gravitaire est possible, même un peu plus long.',
      'Les tests d’étanchéité (air ou eau) à la réception sont indispensables pour éviter les eaux parasites.',
      'La gestion des eaux pluviales à la parcelle réduit la taille des réseaux publics.',
    ],
  },
  norms: {
    norms: [
      ['NF EN 752', 'Réseaux d’évacuation et d’assainissement à l’extérieur des bâtiments.'],
      ['Fascicule 70 du CCTG', 'Ouvrages d’assainissement : canalisations et ouvrages annexes.'],
      ['NF EN 1610', 'Mise en œuvre et essais des branchements et collecteurs.'],
      ['Arrêté du 21 juillet 2015', 'Systèmes d’assainissement collectif et autosurveillance.'],
      ['Instruction technique de 1977', 'Méthodes de calcul des réseaux d’assainissement (Caquot, coefficient de pointe).'],
    ],
  },
  exercises: {
    exercises: [
      {
        level: 1,
        text: 'Calculer le débit de pointe des eaux usées d’un quartier de 1 200 habitants (rejet 130 L/hab/j).',
        hint: 'Q_m en L/s puis p.',
        answer_latex: "Q_m = \\frac{1\\,200 \\times 130}{86\\,400} = 1{,}81\\ \\text{L/s} \\quad p = 1{,}5 + \\frac{2{,}5}{\\sqrt{1{,}81}} = 3{,}36 \\quad Q_p = 6{,}1\\ \\text{L/s}",
        answer_text: 'Q_p ≈ 6,1 L/s.',
      },
      {
        level: 2,
        text: 'Calculer la capacité d’un collecteur pluvial DN 400 en béton (K_s = 70) à 1 %.',
        hint: 'R_h = D/4 = 0,10 m.',
        answer_latex: "Q_{ps} = 70 \\times 0{,}1257 \\times 0{,}10^{2/3} \\times 0{,}1 = 70 \\times 0{,}1257 \\times 0{,}2154 \\times 0{,}1 = 0{,}190\\ \\text{m}^3/\\text{s}",
        answer_text: 'Q_ps ≈ 190 L/s.',
      },
      {
        level: 3,
        text: 'Un lotissement de 3 ha (C = 0,6) reçoit i = 70 mm/h. Le collecteur DN 400 de l’exercice 2 suffit-il ?',
        hint: 'Q = C·i·A/3,6 avec A en km².',
        answer_latex: "Q = \\frac{0{,}6 \\times 70 \\times 0{,}03}{3{,}6} = 0{,}35\\ \\text{m}^3/\\text{s} > 0{,}19\\ \\text{m}^3/\\text{s}",
        answer_text: 'Non : il faut un DN 500 à 600 ou un bassin de rétention en amont.',
      },
    ],
  },
  quiz: {
    title: 'Quiz — Assainissement',
    questions: [
      { q: 'Quel est l’inconvénient majeur d’un réseau unitaire ?', options: ['Il coûte plus cher', 'Les déversements d’orage rejettent des eaux usées non traitées', 'Il ne fonctionne pas par gravité'], correct: 1, explain: 'Par forte pluie, les déversoirs d’orage rejettent le mélange au milieu naturel.' },
      { q: 'Que vaut le coefficient de pointe pour Q_m = 4 L/s ?', options: ['1,75', '2,75', '4,00'], correct: 1, explain: 'p = 1,5 + 2,5/√4 = 2,75.' },
      { q: 'Pourquoi vérifie-t-on l’autocurage ?', options: ['Pour éviter les dépôts', 'Pour réduire le bruit', 'Pour économiser l’énergie de pompage'], correct: 0, explain: 'Une vitesse suffisante entraîne les matières et évite les bouchages.' },
    ],
  },
  exam_questions: {
    questions: [
      'Comparez réseaux unitaires et séparatifs : fonctionnement, avantages, inconvénients.',
      'Dimensionnez un collecteur d’eaux usées : débits, diamètre, pente, autocurage.',
      'Présentez les solutions de gestion des eaux pluviales pour limiter la taille des réseaux.',
    ],
  },
  interview_questions: {
    questions: [
      ['Comment réduire les eaux claires parasites d’un réseau ?', 'Diagnostic par mesures de débit nocturnes et en temps de pluie, inspections caméra, tests à la fumée, puis réhabilitation des collecteurs fuyards (chemisage) et mise en conformité des branchements mal raccordés.'],
      ['Quand faut-il un poste de relevage ?', "Quand la topographie ne permet pas un écoulement gravitaire vers l'exutoire avec une pente suffisante et une profondeur raisonnable ; on l'évite autant que possible car il demande énergie, maintenance et peut tomber en panne."],
    ],
  },
  practical_case: {
    title: 'Cas pratique — Profil en long d’un collecteur EU',
    scenario: 'Un collecteur EU de 420 m relie un lotissement (fil d’eau amont à 102,50 m NGF) au réseau communal (fil d’eau aval à 100,10 m NGF). Débit de pointe 12 L/s, PVC K_s = 70.',
    description: 'Calculer la pente disponible et choisir le diamètre.',
    resolutions: [
      "I = \\frac{102{,}50 - 100{,}10}{420} = 0{,}0057 = 0{,}57\\,\\%",
      "DN\\ 200 : Q_{ps} = 70 \\times 0{,}0314 \\times 0{,}136 \\times \\sqrt{0{,}0057} = 22{,}6\\ \\text{L/s} \\Rightarrow r_Q = \\frac{12}{22{,}6} = 0{,}53",
      "v_{ps} = 70 \\times 0{,}136 \\times 0{,}0755 = 0{,}72\\ \\text{m/s} \\ge 0{,}7\\ \\text{m/s} \\quad \\checkmark",
    ],
    conclusion: 'Un DN 200 à 0,57 % convient (remplissage 0,53, autocurage assuré) ; on placera des regards tous les 60 à 70 m environ.',
  },
  summary: {
    content: `### L'assainissement en 5 points
1. EU et EP ; réseaux **séparatifs** pour le neuf.
2. EU : $Q_p = p Q_m$ avec $p = 1{,}5 + 2{,}5/\\sqrt{Q_m}$.
3. Capacité : $Q_{ps} = K_s S R_h^{2/3} \\sqrt{I}$.
4. Autocurage : vitesse ≥ 0,6 à 0,7 m/s ; pente ≥ 0,3 à 0,5 %.
5. Regards, étanchéité, gestion des eaux pluviales à la source.`,
  },
  key_points: {
    points: [
      'Rejet EU ≈ 80 % de la consommation d’eau',
      'p = 1,5 + 2,5/√Q_m (≤ 4)',
      'Q_ps = K_s·S·(D/4)^(2/3)·√I',
      'DN 200 minimum en EU',
      'Capacité ∝ D^(8/3)',
    ],
  },
  self_assessment: {
    objectives: [
      'Je distingue réseaux unitaires et séparatifs',
      'Je sais calculer un débit de pointe d’eaux usées',
      'Je sais dimensionner un collecteur par Manning-Strickler',
      'Je sais vérifier l’autocurage',
      "J'ai réussi le quiz avec au moins 2 bonnes réponses sur 3",
    ],
  },
});
