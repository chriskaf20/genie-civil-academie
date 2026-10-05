// ── Lesson: Pertes de précontrainte — Module 10 ──────────────────────────────
import { buildLesson } from './build_lesson.js';

export const lesson_precontrainte_pertes = buildLesson({
  moduleId: 10,
  slug: 'precontrainte_pertes',
  lessonIndex: 2,
  title: "Pertes de Précontrainte : Frottement, Recul d'Ancrage, Raccourcissement Élastique & Pertes Différées",
  subtitle: 'Module 10 — Béton Précontraint',
  level: 'Avancé',
  duration: '12h',
  diagramType: 'bridge_structure',
  tags: ['Précontrainte', 'Pertes', 'Frottement', 'Recul d’ancrage', 'Raccourcissement élastique', 'Relaxation', 'EC2'],
}, {
  definition: {
    title: 'Définition — Pourquoi la force de précontrainte diminue',
    fr: 'Pertes de précontrainte',
    en: 'Prestress losses',
    metier: "Utilisée par les ingénieurs d'ouvrages d'art et de bâtiments précontraints, les entreprises de précontrainte (mise en tension) et les contrôleurs.",
    content: `La force appliquée par le vérin à la mise en tension n'est pas celle qui reste dans le câble pendant la vie de l'ouvrage. Elle diminue à cause de **pertes** :

### Pertes instantanées (à la mise en tension)
1. **Frottement** du câble dans sa gaine, surtout dans les courbes (post-tension).
2. **Recul d'ancrage** : glissement des clavettes lors du blocage (quelques millimètres).
3. **Raccourcissement élastique** du béton quand les câbles sont tendus successivement (post-tension) ou à la libération des torons (pré-tension).

### Pertes différées (dans le temps)
4. **Retrait** du béton.
5. **Fluage** du béton sous la compression permanente.
6. **Relaxation** de l'acier (perte de tension à longueur constante).

> 💡 Au total, on perd couramment 15 à 25 % de la force initiale : le calcul des pertes fixe la précontrainte réellement disponible en service.`,
  },
  importance: {
    content: `- **Sécurité en service** : une précontrainte surestimée conduit à des fissures, voire à des tractions non prévues dans le béton.
- **Économie** : surestimer les pertes ajoute des câbles inutiles.
- **Contrôle de chantier** : les allongements mesurés à la mise en tension permettent de vérifier les frottements réels.
- **Durabilité** : un câble moins tendu que prévu peut laisser fissurer et exposer les armatures.

> ⚠️ **À retenir** : les pertes par frottement et par recul d'ancrage se calculent le long du câble : la force n'est pas la même en tout point.`,
  },
  applications: {
    examples: [
      ['Pont-caisson construit par encorbellements', 'Câbles de fléau et de continuité avec de fortes déviations : frottements importants.'],
      ['Dalle de parking post-contrainte', 'Monotorons gainés graissés : frottements faibles, recul d’ancrage déterminant sur les câbles courts.'],
      ['Poutres préfabriquées précontraintes', 'Pré-tension sur banc : raccourcissement élastique à la libération des torons.'],
      ['Réservoir circulaire', 'Câbles horizontaux ceinturant la cuve : frottement sur toute la circonférence.'],
      ['Renforcement par précontrainte additionnelle', 'Câbles extérieurs déviés par des selles.'],
    ],
  },
  theory: {
    title: 'Théorie — Calcul des pertes (EC2 §5.10)',
    content: `### 1. Pertes par frottement (post-tension)
$$P(x) = P_{max} \\, e^{-\\mu(\\theta + k x)}$$
- $\\theta$ : somme des déviations angulaires sur la longueur $x$ (rad) ;
- $\\mu$ : coefficient de frottement en courbe (≈ 0,19 pour des torons en gaine métallique) ;
- $k$ : déviation angulaire parasite par mètre (0,005 à 0,01 /m).

### 2. Recul d'ancrage
Le glissement $g$ des clavettes est absorbé par une perte de tension sur une longueur $\\lambda$ à partir de l'ancrage. Si la perte par frottement est linéaire de pente $p$ (en N/mm) :
$$\\lambda = \\sqrt{\\frac{g \\, E_p \\, A_p}{p}} \\qquad \\Delta P_{anc} = 2 \\, p \\, \\lambda$$

### 3. Raccourcissement élastique
- **Post-tension**, $n$ câbles tendus successivement : perte moyenne $\\Delta\\sigma_{el} \\approx \\dfrac{n - 1}{2n} \\cdot \\dfrac{E_p}{E_{cm}} \\cdot \\sigma_c$.
- **Pré-tension** : $\\Delta\\sigma_{el} = \\dfrac{E_p}{E_{cm}} \\cdot \\sigma_c$ (tous les torons subissent le raccourcissement).

### 4. Pertes différées
L'EC2 donne une formule globale combinant retrait, fluage et relaxation (§5.10.6). Ordres de grandeur : retrait 200 à 400 µm/m, coefficient de fluage 1,5 à 2,5, relaxation des torons TBR (classe 2) : 2,5 % à 1 000 h.`,
  },
  formulas: {
    title: 'Formules essentielles — Pertes de précontrainte',
    formulas: [
      {
        name: 'Pertes par frottement',
        latex: "P(x) = P_{max} \\, e^{-\\mu (\\theta + k x)}",
        description: 'Force dans le câble à la distance x de l’ancrage actif.',
        vars: [
          ['P(x)', 'Force à l’abscisse x', 'kN', 'Après frottement.'],
          ['P_{max}', 'Force au vérin', 'kN', 'A_p × σ_p,max.'],
          ['\\mu', 'Coefficient de frottement', '1/rad', '0,19 torons en gaine métallique ; 0,05 monotorons gainés graissés.'],
          ['\\theta', 'Déviations angulaires cumulées', 'rad', 'Somme des angles entre l’ancrage et x.'],
          ['k', 'Déviation parasite', 'rad/m', '0,005 à 0,01 rad/m.'],
          ['x', 'Distance à l’ancrage', 'm', 'Le long du câble.'],
        ],
        rule: "Repère : 10 à 20 % de perte par frottement à l'extrémité d'un câble long et très dévié ; on tend alors par les deux bouts.",
      },
      {
        name: 'Longueur affectée par le recul d’ancrage',
        latex: "\\lambda = \\sqrt{\\frac{g \\, E_p \\, A_p}{p}} \\qquad \\Delta P_{anc} = 2 \\, p \\, \\lambda",
        description: 'Frottement supposé linéaire de pente p près de l’ancrage.',
        vars: [
          ['\\lambda', 'Longueur affectée', 'mm', 'Au-delà, le recul n’a plus d’effet.'],
          ['g', "Glissement d'ancrage", 'mm', '≈ 6 mm (clavettes) selon le procédé.'],
          ['E_p', 'Module des torons', 'MPa', '≈ 195 000 MPa.'],
          ['A_p', 'Section du câble', 'mm²', 'Nombre de torons × 150 mm².'],
          ['p', 'Perte par frottement par unité de longueur', 'N/mm', 'Pente du diagramme de tension.'],
          ['\\Delta P_{anc}', "Perte à l'ancrage", 'kN', 'Maximale au droit de l’ancrage.'],
        ],
      },
      {
        name: 'Raccourcissement élastique (post-tension)',
        latex: "\\Delta\\sigma_{el} \\approx \\frac{n - 1}{2n} \\cdot \\frac{E_p}{E_{cm}} \\cdot \\sigma_c",
        description: 'Perte moyenne due à la mise en tension successive de n câbles.',
        vars: [
          ['\\Delta\\sigma_{el}', 'Perte de tension moyenne', 'MPa', 'À multiplier par A_p.'],
          ['n', 'Nombre de câbles', '-', 'Tendus successivement.'],
          ['E_{cm}', 'Module du béton à la mise en tension', 'MPa', 'Fonction de l’âge du béton.'],
          ['\\sigma_c', 'Contrainte du béton au niveau des câbles', 'MPa', 'Sous la précontrainte et le poids propre.'],
        ],
      },
      {
        name: 'Raccourcissement élastique (pré-tension)',
        latex: "\\Delta\\sigma_{el} = \\frac{E_p}{E_{cm}} \\cdot \\sigma_c",
        description: 'À la libération des torons, tout le béton se raccourcit avec eux.',
        vars: [
          ['\\sigma_c', 'Contrainte du béton au niveau des torons', 'MPa', 'Juste après transfert.'],
        ],
      },
    ],
  },
  stepbystep: {
    title: 'Calcul complet — Pertes instantanées d’un câble de 12 T15S',
    problem: "Câble 12 T15S (A_p = 1 800 mm², E_p = 195 000 MPa) tendu à P_max = 2 592 kN par une extrémité. À mi-longueur (x = 10 m), la déviation cumulée vaut θ = 0,10 rad ; μ = 0,19 ; k = 0,0075 rad/m. Glissement d'ancrage g = 6 mm. Calculer la force à mi-longueur, puis l'effet du recul d'ancrage.",
    steps_demo: [
      { n: 1, text: "Exposant : μ(θ + kx) = 0,19 × (0,10 + 0,0075 × 10) = 0,19 × 0,175 = 0,0333." },
      { n: 2, text: "Force à 10 m : P = 2 592 × e^−0,0333 = 2 592 × 0,967 = 2 507 kN (perte de 85 kN, 3,3 %)." },
      { n: 3, text: "Pente du frottement : p ≈ 85 000 N / 10 000 mm = 8,5 N/mm." },
      { n: 4, text: "Longueur affectée : λ = √(6 × 195 000 × 1 800 / 8,5) = √(2,48 × 10⁸) = 15 740 mm = 15,7 m." },
      { n: 5, text: "Perte à l'ancrage : ΔP = 2 × 8,5 × 15 740 = 268 kN → force à l'ancrage après blocage ≈ 2 592 − 268 = 2 324 kN." },
      { n: 6, text: "À mi-longueur (dans la zone λ) : la perte de recul vaut 2p(λ − x) = 2 × 8,5 × 5 740 = 98 kN → P(10 m) ≈ 2 507 − 98 = 2 409 kN." },
    ],
    result_latex: "P(10) = 2\\,592 \\, e^{-0{,}0333} = 2\\,507\\ \\text{kN} \\quad \\lambda = 15{,}7\\ \\text{m} \\quad \\Delta P_{anc} = 268\\ \\text{kN} \\quad P(10)_{après\\ blocage} \\approx 2\\,409\\ \\text{kN}",
  },
  units: {
    table: [
      ['Force de précontrainte', 'kN, MN', 'kip', '1 MN = 224,8 kip'],
      ['Tension', 'MPa', 'ksi', '1 440 MPa = 209 ksi'],
      ['Section d’un toron T15S', 'mm²', 'in²', '150 mm² = 0,233 in²'],
      ['Déviation angulaire', 'rad', '°', '1 rad = 57,3°'],
      ['Glissement d’ancrage', 'mm', 'in', '6 mm ≈ 1/4 in'],
    ],
    note: 'Les angles de déviation se calculent en radians à partir du tracé : pour une parabole de flèche f sur une longueur L, la variation d’angle totale vaut 8f/L.',
  },
  hypotheses: {
    items: [
      ['info', 'Les coefficients μ et k dépendent du procédé et des gaines : utiliser les valeurs de l’agrément technique du fournisseur.'],
      ['info', 'Le calcul du recul d’ancrage suppose un frottement linéaire au voisinage de l’ancrage.'],
      ['warning', 'Les allongements mesurés au vérin doivent être comparés aux allongements théoriques (écart admis de l’ordre de ±10 %).'],
      ['warning', 'En pré-tension, la perte par raccourcissement élastique est totale ; en post-tension, elle ne concerne que les câbles déjà tendus.'],
      ['tip', 'Pour les câbles longs et très déviés, tendre par les deux extrémités réduit fortement les pertes par frottement.'],
    ],
  },
  simple_examples: {
    examples: [
      {
        title: 'Exemple 1 : déviation d’un câble parabolique',
        given: 'Câble parabolique de flèche 0,80 m sur 32 m',
        find: 'La variation d’angle totale',
        solution_latex: "\\theta = \\frac{8 f}{L} = \\frac{8 \\times 0{,}80}{32} = 0{,}20\\ \\text{rad}",
        result: '0,20 rad (11,5°) d’un ancrage à l’autre.',
      },
      {
        title: 'Exemple 2 : raccourcissement élastique en post-tension',
        given: '4 câbles, E_p/E_cm = 195 000 / 33 000, σ_c = 8 MPa, A_p = 1 800 mm² par câble',
        find: 'La perte moyenne par câble',
        solution_latex: "\\Delta\\sigma_{el} = \\frac{3}{8} \\times 5{,}91 \\times 8 = 17{,}7\\ \\text{MPa} \\quad \\Delta P = 17{,}7 \\times 1\\,800 = 31{,}9\\ \\text{kN}",
        result: '≈ 32 kN par câble (1,2 %).',
      },
      {
        title: 'Exemple 3 : pré-tension',
        given: 'σ_c = 12 MPa au niveau des torons, E_p/E_cm = 6,0',
        find: 'La perte de tension',
        solution_latex: "\\Delta\\sigma_{el} = 6{,}0 \\times 12 = 72\\ \\text{MPa}",
        result: '72 MPa, soit 5 % d’une tension initiale de 1 440 MPa.',
      },
    ],
  },
  real_examples: {
    title: 'Exemple réel — Allongements insuffisants à la mise en tension',
    examples: [
      {
        context: 'Pont-dalle précontraint de 3 travées, câbles de 75 m tendus d’un seul côté',
        scenario: "Les allongements mesurés sont 12 % inférieurs aux valeurs théoriques : les frottements réels sont plus élevés que prévu (gaines ovalisées et déviations parasites au bétonnage). La force à l'extrémité passive est insuffisante.",
        decomposition_latex: "\\frac{\\Delta L_{mesuré}}{\\Delta L_{théorique}} = 0{,}88 \\Rightarrow \\mu_{réel} > \\mu_{prévu}",
        lesson: "Les câbles sont retendus par l'extrémité passive pour équilibrer la force. Le suivi des allongements est le seul contrôle direct des pertes par frottement : il doit être consigné pour chaque câble.",
      },
    ],
  },
  diagrams: {
    title: 'Schéma de principe — Évolution de la force dans un câble',
    diagram_description: [
      'Mise en tension : P_max au vérin',
      'Frottement : décroissance exponentielle le long du câble',
      'Blocage : recul d’ancrage, perte maximale à l’ancrage sur la longueur λ',
      'Mise en tension des câbles suivants : raccourcissement élastique',
      'Dans le temps : retrait, fluage, relaxation (pertes différées)',
      'Force finale en service P∞ : base des vérifications ELS',
    ],
  },
  mistakes: {
    items: [
      ['Utiliser la force au vérin pour les vérifications de service', 'Contraintes de traction sous-estimées', 'Calculer P∞ après toutes les pertes.'],
      ['Oublier la déviation parasite k', 'Pertes sous-estimées sur les câbles longs', 'Ajouter k·x même pour les tronçons droits.'],
      ['Ignorer le recul d’ancrage sur les câbles courts', 'Une grande partie de la précontrainte perdue', 'Vérifier λ : sur un câble court, la perte touche toute la longueur.'],
    ],
  },
  tips: {
    tips: [
      'Tracez le diagramme de tension le long du câble avant et après blocage.',
      'La relaxation est réduite en utilisant des torons très basse relaxation (classe 2).',
      'Les pertes différées sont maximales pour les bétons jeunes et les structures fortement comprimées.',
      'Consignez pour chaque câble : pression au manomètre, allongement, glissement, date et heure.',
    ],
  },
  norms: {
    norms: [
      ['NF EN 1992-1-1 §5.10.5', 'Pertes instantanées (frottement, recul d’ancrage, raccourcissement élastique).'],
      ['NF EN 1992-1-1 §5.10.6', 'Pertes différées (retrait, fluage, relaxation).'],
      ['NF EN 10138', 'Armatures de précontrainte.'],
      ['ETAG 013 / EAD 160004', 'Agréments techniques européens des procédés de précontrainte par post-tension.'],
      ['Fascicule 65', 'Exécution des ouvrages en béton (mise en tension, injection).'],
    ],
  },
  exercises: {
    exercises: [
      {
        level: 1,
        text: 'Calculer la perte par frottement à 30 m pour θ = 0,25 rad, μ = 0,19, k = 0,007 rad/m.',
        hint: 'P/P_max = e^(−μ(θ + kx)).',
        answer_latex: "\\frac{P}{P_{max}} = e^{-0{,}19 \\times (0{,}25 + 0{,}21)} = e^{-0{,}0874} = 0{,}916",
        answer_text: 'Perte de 8,4 % à 30 m.',
      },
      {
        level: 2,
        text: 'Avec p = 6 N/mm, g = 6 mm, E_p = 195 000 MPa et A_p = 1 500 mm², calculer λ et la perte à l’ancrage.',
        hint: 'λ = √(g E_p A_p / p).',
        answer_latex: "\\lambda = \\sqrt{\\frac{6 \\times 195\\,000 \\times 1\\,500}{6}} = 17\\,100\\ \\text{mm} \\qquad \\Delta P = 2 \\times 6 \\times 17\\,100 = 205\\ \\text{kN}",
        answer_text: 'λ ≈ 17,1 m ; ΔP ≈ 205 kN.',
      },
      {
        level: 3,
        text: 'Pertes totales : instantanées 9 % et différées 14 % de P_max = 2 592 kN. Calculer P∞.',
        hint: 'P∞ = P_max (1 − 0,09 − 0,14).',
        answer_latex: "P_{\\infty} = 2\\,592 \\times (1 - 0{,}23) = 1\\,996\\ \\text{kN}",
        answer_text: 'P∞ ≈ 2 000 kN.',
      },
    ],
  },
  quiz: {
    title: 'Quiz — Pertes de précontrainte',
    questions: [
      { q: 'Quelle perte dépend du glissement des clavettes ?', options: ['La relaxation', 'Le recul d’ancrage', 'Le fluage'], correct: 1, explain: 'Le glissement au blocage fait perdre de la tension près de l’ancrage.' },
      { q: 'Quelles sont les trois pertes différées ?', options: ['Frottement, recul, élastique', 'Retrait, fluage, relaxation', 'Gel, corrosion, fatigue'], correct: 1, explain: 'Elles évoluent dans le temps.' },
      { q: 'En pré-tension, le raccourcissement élastique est…', options: ['Nul', 'Partiel', 'Total sur tous les torons'], correct: 2, explain: 'À la libération, tous les torons se raccourcissent avec le béton.' },
    ],
  },
  exam_questions: {
    questions: [
      'Présentez l’ensemble des pertes de précontrainte et leur ordre de grandeur.',
      'Établissez la longueur affectée par le recul d’ancrage et tracez le diagramme de tension d’un câble.',
      'Comparez les pertes en pré-tension et en post-tension.',
    ],
  },
  interview_questions: {
    questions: [
      ['Comment vérifiez-vous les frottements réels sur chantier ?', "En comparant les allongements mesurés à chaque palier de pression aux allongements théoriques calculés avec μ et k ; un écart supérieur à environ 10 % impose une analyse (gaine écrasée, erreur de tracé) avant de poursuivre."],
      ['Pourquoi tendre un câble par les deux extrémités ?', "Pour réduire les pertes par frottement sur les câbles longs ou très déviés : la force minimale se situe alors au milieu du câble et elle est plus élevée qu'à l'extrémité passive d'un câble tendu d'un seul côté."],
    ],
  },
  practical_case: {
    title: 'Cas pratique — Choix du mode de mise en tension',
    scenario: 'Câble de 60 m, déviation cumulée totale 0,40 rad, μ = 0,19, k = 0,0075 rad/m, P_max = 2 592 kN.',
    description: 'Comparer la force minimale si le câble est tendu d’un côté ou des deux côtés (hors recul d’ancrage).',
    resolutions: [
      "\\text{Un côté, à 60 m : } P = 2\\,592 \\, e^{-0{,}19 \\times (0{,}40 + 0{,}45)} = 2\\,592 \\times 0{,}851 = 2\\,206\\ \\text{kN}",
      "\\text{Deux côtés, minimum à 30 m : } P = 2\\,592 \\, e^{-0{,}19 \\times (0{,}20 + 0{,}225)} = 2\\,592 \\times 0{,}922 = 2\\,390\\ \\text{kN}",
      "\\text{Gain : } 2\\,390 - 2\\,206 = 184\\ \\text{kN} \\ (+8{,}3\\,\\%)",
    ],
    conclusion: 'La mise en tension par les deux extrémités augmente la force minimale d’environ 184 kN : elle est justifiée pour ce câble long et très dévié.',
  },
  summary: {
    content: `### Les pertes en 5 points
1. Frottement : $P(x) = P_{max} e^{-\\mu(\\theta + kx)}$.
2. Recul d'ancrage : $\\lambda = \\sqrt{g E_p A_p / p}$, $\\Delta P = 2p\\lambda$.
3. Raccourcissement élastique : partiel en post-tension, total en pré-tension.
4. Différées : retrait, fluage, relaxation (formule globale EC2).
5. Total courant : 15 à 25 % ; contrôle par les allongements.`,
  },
  key_points: {
    points: [
      'μ ≈ 0,19 ; k = 0,005 à 0,01 rad/m',
      'λ = √(g E_p A_p / p)',
      'Post-tension : (n − 1)/(2n) · (E_p/E_cm) · σ_c',
      'Parabole : θ = 8f/L',
      'Pertes totales ≈ 15 à 25 %',
    ],
  },
  self_assessment: {
    objectives: [
      'Je connais les six types de pertes de précontrainte',
      'Je sais calculer la perte par frottement le long d’un câble',
      'Je sais calculer l’effet du recul d’ancrage',
      'Je sais estimer le raccourcissement élastique',
      "J'ai réussi le quiz avec au moins 2 bonnes réponses sur 3",
    ],
  },
});
