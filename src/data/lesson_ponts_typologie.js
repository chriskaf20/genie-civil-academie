// ── Lesson: Typologie et conception des ponts — Module 16 ────────────────────
import { buildLesson } from './build_lesson.js';

export const lesson_ponts_typologie = buildLesson({
  moduleId: 16,
  slug: 'ponts_typologie',
  lessonIndex: 2,
  title: "Typologie & Conception des Ponts : Choisir la Structure selon la Portée, le Site et les Matériaux",
  subtitle: 'Module 16 — Conception & Maintenance des Ponts',
  level: 'Avancé',
  duration: '12h',
  diagramType: 'bridge_structure',
  tags: ['Ponts', 'Typologie', 'Portées', 'Élancement', 'Arcs', 'Haubans', 'Ponts suspendus'],
}, {
  definition: {
    title: 'Définition — Une famille d’ouvrages pour chaque franchissement',
    fr: 'Typologie des ponts',
    en: 'Bridge types',
    metier: "Utilisée par les ingénieurs d'ouvrages d'art, les maîtres d'œuvre d'infrastructures et les architectes d'ouvrages au stade des études préliminaires.",
    content: `Un **pont** franchit un obstacle (rivière, vallée, voie) en portant une voie de circulation. Son type dépend principalement de la **portée**, du **site** (hauteur, sol, navigation, crues), des **méthodes de construction** possibles et de l'**esthétique**.

### Les grandes familles structurales
- **Ponts-dalles** : une dalle pleine ou élégie, pour les petites portées (passages supérieurs et inférieurs).
- **Ponts à poutres** : poutres préfabriquées précontraintes ou métalliques sous une dalle ; portées moyennes.
- **Ponts-caissons** : grandes portées en béton précontraint (souvent par encorbellements successifs) ou en acier.
- **Ponts en arc** : l'arc travaille en compression et pousse sur ses appuis.
- **Ponts à haubans** : le tablier est suspendu à des pylônes par des câbles obliques.
- **Ponts suspendus** : deux câbles porteurs paraboliques supportent le tablier par des suspentes ; les plus grandes portées.

> 💡 Plus la portée augmente, plus le poids propre domine : les grandes portées exigent des structures légères et des matériaux très résistants (câbles d'acier à haute résistance).`,
  },
  importance: {
    content: `- **Coût** : le choix du type d'ouvrage fixe l'essentiel du coût et des délais.
- **Durabilité** : un ouvrage d'art est conçu pour 100 ans ; sa maintenabilité doit être pensée dès l'origine.
- **Site** : crues, navigation, sols médiocres ou zone sismique orientent le nombre et la position des appuis.
- **Construction** : poussage, encorbellements, cintre, levage : la méthode d'exécution conditionne le dimensionnement.

> ⚠️ **À retenir** : il n'existe pas de « meilleur » pont, seulement un pont adapté à sa portée, à son site et à son mode de construction.`,
  },
  applications: {
    examples: [
      ['Passage supérieur d’autoroute', 'Pont-dalle en béton précontraint à deux travées (PSI-DP), coulé sur cintre.'],
      ['Franchissement de rivière (50 m)', 'Bipoutre mixte acier-béton mis en place par lançage.'],
      ['Grande vallée', 'Caisson précontraint construit par encorbellements successifs, travées de 100 à 150 m.'],
      ['Estuaire', 'Pont à haubans avec portée principale de 400 à 900 m.'],
      ['Détroit', 'Pont suspendu de plus de 1 000 m de portée.'],
    ],
  },
  theory: {
    title: 'Théorie — Domaines d’emploi et fonctionnement',
    content: `### 1. Domaines de portées usuels
| Type | Portées usuelles |
|---|---|
| Dalle en béton armé ou précontraint | 10 à 30 m |
| Poutres préfabriquées précontraintes | 25 à 50 m |
| Bipoutre mixte acier-béton | 30 à 120 m |
| Caisson précontraint (encorbellements) | 60 à 250 m |
| Arc | 50 à 500 m |
| Haubans | 150 à 1 100 m |
| Suspendu | 500 à 2 000 m |

### 2. Élancements de prédimensionnement
Rapport hauteur du tablier / portée : dalle continue ≈ 1/25 à 1/30 ; poutres préfabriquées ≈ 1/17 ; bipoutre mixte ≈ 1/20 à 1/25 ; caisson à hauteur variable ≈ 1/16 à 1/20 sur pile et 1/30 à 1/40 à la clé.

### 3. Arc et câble : la poussée
Sous une charge uniforme $q$ (par mètre horizontal), un arc parabolique (ou un câble) de flèche $f$ et de portée $L$ développe une poussée horizontale :
$$H = \\frac{q \\, L^2}{8 \\, f}$$
L'arc est comprimé et pousse sur ses culées ; le câble est tendu et tire sur ses ancrages.

### 4. Hauban
Un hauban incliné de $\\alpha$ sur l'horizontale reprenant une réaction verticale $R$ du tablier porte la force $T = R / \\sin\\alpha$, et comprime le tablier de $R / \\tan\\alpha$.

### 5. Exigences fonctionnelles
Gabarit sous l'ouvrage (hauteur libre de l'ordre de 4,75 m sous les ponts routiers neufs en France), largeur roulable, dispositifs de retenue, évacuation des eaux, accès pour l'inspection.`,
  },
  formulas: {
    title: 'Formules essentielles — Conception des ponts',
    formulas: [
      {
        name: 'Poussée d’un arc ou d’un câble parabolique',
        latex: "H = \\frac{q \\, L^2}{8 \\, f}",
        description: 'Poussée (arc) ou traction horizontale (câble) sous charge uniforme.',
        vars: [
          ['H', 'Poussée horizontale', 'kN', 'Reprise par les culées ou les ancrages.'],
          ['q', 'Charge uniforme', 'kN/m', 'Par mètre de projection horizontale.'],
          ['L', 'Portée', 'm', 'Entre appuis de l’arc ou pylônes.'],
          ['f', 'Flèche', 'm', 'Arc : L/5 à L/8 ; pont suspendu : L/9 à L/11.'],
        ],
        rule: "Diviser la flèche par deux double la poussée : un arc surbaissé pousse beaucoup.",
      },
      {
        name: 'Effort maximal dans le câble porteur',
        latex: "T_{max} = H \\sqrt{1 + \\left(\\frac{4f}{L}\\right)^2}",
        description: 'Traction aux pylônes (pente maximale de la parabole).',
        vars: [
          ['T_{max}', 'Traction maximale', 'kN', 'Au sommet des pylônes.'],
        ],
      },
      {
        name: "Force dans un hauban",
        latex: "T = \\frac{R}{\\sin\\alpha} \\qquad N_{tablier} = \\frac{R}{\\tan\\alpha}",
        description: 'Hauban reprenant une réaction verticale R du tablier.',
        vars: [
          ['T', 'Traction du hauban', 'kN', 'Effort dans le câble.'],
          ['R', 'Réaction verticale reprise', 'kN', 'Part du tablier portée par le hauban.'],
          ['\\alpha', "Inclinaison du hauban", '°', 'Sur l’horizontale (souvent 25 à 65°).'],
          ['N_{tablier}', 'Compression du tablier', 'kN', 'Composante horizontale.'],
        ],
      },
      {
        name: 'Élancement de prédimensionnement',
        latex: "h \\approx \\frac{L}{n}",
        description: 'Hauteur de tablier en fonction de la portée et du type d’ouvrage.',
        vars: [
          ['h', 'Hauteur du tablier', 'm', 'Hauteur structurelle.'],
          ['n', 'Élancement', '-', 'Dalle 25-30 ; poutres 17 ; mixte 20-25 ; caisson 16-20 sur pile.'],
        ],
      },
    ],
  },
  stepbystep: {
    title: 'Calcul complet — Prédimensionnement d’un pont en arc',
    problem: "Un pont en arc de 120 m de portée porte une charge uniforme (poids propre + trafic) de 150 kN/m. La flèche de l'arc est de 24 m (L/5). Calculer la poussée horizontale et l'effort normal maximal dans l'arc, puis l'effet d'un arc surbaissé (f = 15 m).",
    steps_demo: [
      { n: 1, text: "Poussée : H = 150 × 120² / (8 × 24) = 2 160 000 / 192 = 11 250 kN." },
      { n: 2, text: "Pente de l'arc aux naissances : 4f/L = 4 × 24 / 120 = 0,80." },
      { n: 3, text: "Effort normal aux naissances : N = H × √(1 + 0,8²) = 11 250 × 1,281 = 14 410 kN." },
      { n: 4, text: "Arc surbaissé (f = 15 m) : H = 2 160 000 / 120 = 18 000 kN, +60 %." },
      { n: 5, text: "Conséquence : un arc surbaissé exige des culées beaucoup plus massives et un sol de fondation très résistant (rocher)." },
    ],
    result_latex: "H = \\frac{150 \\times 120^2}{8 \\times 24} = 11\\,250\\ \\text{kN} \\qquad N_{max} = 11\\,250 \\sqrt{1 + 0{,}8^2} = 14\\,410\\ \\text{kN}",
  },
  units: {
    table: [
      ['Portée', 'm', 'ft', '1 000 m = 3 281 ft'],
      ['Charge linéique', 'kN/m', 'kip/ft', '1 kN/m = 0,0685 kip/ft'],
      ['Poussée, traction', 'kN, MN', 'kip', '1 MN = 224,8 kip'],
      ['Résistance des fils de câbles', 'MPa', 'ksi', '1 770 à 1 960 MPa'],
      ['Gabarit', 'm', 'ft', '4,75 m ≈ 15,6 ft'],
    ],
    note: 'Les charges de trafic des ponts routiers sont définies par l’EN 1991-2 (modèle LM1 : tandem TS et charge répartie UDL).',
  },
  hypotheses: {
    items: [
      ['info', 'Les domaines de portées sont indicatifs : des records existent dans chaque famille.'],
      ['info', 'La formule de poussée suppose un arc ou un câble parabolique sous charge uniformément répartie.'],
      ['warning', 'Les charges dissymétriques (trafic sur une demi-portée) créent de la flexion dans l’arc : elles dimensionnent souvent la section.'],
      ['warning', 'Les ponts de grande portée sont sensibles au vent (stabilité aérodynamique) : essais en soufflerie nécessaires.'],
      ['tip', 'Comparez toujours au moins deux variantes (béton, acier, mixte) en coût global : construction, entretien, durée de vie.'],
    ],
  },
  simple_examples: {
    examples: [
      {
        title: 'Exemple 1 : hauteur d’un tablier mixte',
        given: 'Bipoutre mixte de 60 m de portée, élancement 1/22',
        find: 'Hauteur du tablier',
        solution_latex: "h = \\frac{60}{22} = 2{,}73\\ \\text{m}",
        result: '≈ 2,7 m (poutres + dalle).',
      },
      {
        title: 'Exemple 2 : traction d’un câble de pont suspendu',
        given: 'q = 200 kN/m, L = 1 000 m, f = 100 m',
        find: 'H et T_max',
        solution_latex: "H = \\frac{200 \\times 10^6}{800} = 250\\,000\\ \\text{kN} \\qquad T_{max} = 250\\,000 \\sqrt{1 + 0{,}4^2} = 269\\,300\\ \\text{kN}",
        result: '≈ 270 MN par câble porteur : des câbles de près d’un mètre de diamètre.',
      },
      {
        title: 'Exemple 3 : hauban',
        given: 'R = 1 200 kN, α = 30°',
        find: 'T et compression du tablier',
        solution_latex: "T = \\frac{1\\,200}{0{,}5} = 2\\,400\\ \\text{kN} \\qquad N = \\frac{1\\,200}{0{,}577} = 2\\,078\\ \\text{kN}",
        result: 'Un hauban peu incliné est très tendu et comprime fortement le tablier.',
      },
    ],
  },
  real_examples: {
    title: 'Exemple réel — Le viaduc de Millau (2004)',
    examples: [
      {
        context: 'Franchissement de la vallée du Tarn, 2 460 m de long, 270 m au-dessus de la rivière',
        scenario: "Le choix s'est porté sur un pont à haubans multi-travées (6 travées de 342 m et 2 de 204 m) avec un tablier métallique en caisson poussé depuis les deux rives, des piles en béton jusqu'à 245 m et des pylônes métalliques.",
        decomposition_latex: "\\text{Grande hauteur} + \\text{grandes portées} + \\text{vent} \\Rightarrow \\text{haubans} + \\text{caisson acier profilé} + \\text{lancement}",
        lesson: "Le type d'ouvrage résulte du site (vallée profonde et large), du vent (tablier aérodynamique, écrans) et de la méthode de construction (lançage du tablier sur palées provisoires).",
      },
    ],
  },
  diagrams: {
    title: 'Schéma de principe — Choix d’un type de pont',
    diagram_description: [
      'Données : brèche, gabarits, profil en long, géotechnique, hydraulique, séisme',
      'Portée principale → familles possibles (dalle, poutres, caisson, arc, haubans, suspendu)',
      'Matériaux : béton armé, précontraint, acier, mixte',
      'Méthode de construction : cintre, préfabrication, poussage, encorbellements, levage',
      'Comparaison des variantes : coût, délais, maintenance, insertion paysagère',
      'Avant-projet de la solution retenue et prédimensionnement',
    ],
  },
  mistakes: {
    items: [
      ['Choisir le type sans considérer la méthode de construction', 'Ouvrage impossible ou très coûteux à réaliser', 'Concevoir structure et phasage ensemble.'],
      ['Sous-estimer la poussée d’un arc surbaissé', 'Culées et fondations insuffisantes', 'Calculer H = qL²/(8f) dès l’esquisse.'],
      ['Oublier l’accès pour l’inspection', 'Ouvrage difficile à surveiller et à entretenir', 'Prévoir passerelles, trappes, éclairage, points d’ancrage.'],
    ],
  },
  tips: {
    tips: [
      'Repère : 70 % des ponts routiers sont de petits ouvrages (dalles, cadres, portiques) : standardisez-les.',
      'Limitez le nombre d’appuis dans les rivières (affouillement, embâcles).',
      'Pensez à l’entretien : joints de chaussée et appareils d’appui sont des pièces d’usure à remplacer.',
      'Les guides du Cerema (SETRA) donnent des ouvrages types prédimensionnés (PSI-DA, PSI-DP, PIPO…).',
    ],
  },
  norms: {
    norms: [
      ['NF EN 1991-2', 'Actions sur les ponts dues au trafic.'],
      ['NF EN 1992-2 et 1993-2', 'Calcul des ponts en béton et en acier.'],
      ['NF EN 1994-2', 'Ponts mixtes acier-béton.'],
      ['Guides Sétra / Cerema « Ponts courants »', 'Conception et dimensionnement des ouvrages types.'],
    ],
  },
  exercises: {
    exercises: [
      {
        level: 1,
        text: 'Prédimensionner la hauteur d’un pont-dalle continu de 22 m de portée (élancement 1/28).',
        hint: 'h = L/n.',
        answer_latex: "h = \\frac{22}{28} = 0{,}79\\ \\text{m}",
        answer_text: '≈ 0,80 m.',
      },
      {
        level: 2,
        text: 'Un arc de 80 m porte 120 kN/m avec une flèche de 16 m. Calculer la poussée.',
        hint: 'H = qL²/(8f).',
        answer_latex: "H = \\frac{120 \\times 80^2}{8 \\times 16} = 6\\,000\\ \\text{kN}",
        answer_text: 'H = 6 MN.',
      },
      {
        level: 3,
        text: 'Un hauban à 40° reprend 1 800 kN de réaction verticale. Calculer sa traction et sa section si l’on vise 0,45 f_pk avec f_pk = 1 860 MPa.',
        hint: 'T = R / sin α ; A = T / (0,45 × 1 860).',
        answer_latex: "T = \\frac{1\\,800}{0{,}643} = 2\\,800\\ \\text{kN} \\qquad A = \\frac{2\\,800\\,000}{837} = 3\\,345\\ \\text{mm}^2 \\approx 23\\ \\text{torons T15S}",
        answer_text: 'T ≈ 2 800 kN ; ≈ 23 torons T15S.',
      },
    ],
  },
  quiz: {
    title: 'Quiz — Typologie des ponts',
    questions: [
      { q: 'Quel type de pont atteint les plus grandes portées ?', options: ['Pont-caisson', 'Pont à haubans', 'Pont suspendu'], correct: 2, explain: 'Les ponts suspendus dépassent 2 000 m de portée.' },
      { q: 'Comment travaille principalement un arc ?', options: ['En traction', 'En compression', 'En torsion'], correct: 1, explain: 'L’arc est comprimé et pousse sur ses appuis.' },
      { q: 'Si la flèche d’un arc diminue, la poussée…', options: ['Diminue', 'Augmente', 'Reste constante'], correct: 1, explain: 'H = qL²/(8f) : inversement proportionnelle à la flèche.' },
    ],
  },
  exam_questions: {
    questions: [
      'Présentez les principales familles de ponts avec leurs domaines de portées et leurs méthodes de construction.',
      'Établissez la poussée d’un arc parabolique et discutez l’influence de la flèche.',
      'Comparez pont à haubans et pont suspendu : fonctionnement, portées, avantages.',
    ],
  },
  interview_questions: {
    questions: [
      ['Quels critères guident le choix d’un type de pont ?', 'La portée et la géométrie de la brèche, les gabarits, le sol de fondation, les contraintes hydrauliques et environnementales, les méthodes et délais de construction, le coût global (y compris l’entretien) et l’insertion architecturale.'],
      ['Pourquoi les grands ponts sont-ils souvent en acier ou mixtes ?', 'Parce que le poids propre devient prépondérant : un tablier léger réduit les efforts dans toute la structure et les fondations ; l’acier permet aussi la préfabrication et le lançage.'],
    ],
  },
  practical_case: {
    title: 'Cas pratique — Franchissement d’une rivière de 70 m',
    scenario: 'Une route départementale doit franchir une rivière de 70 m de large, navigable, avec des crues importantes ; un appui en rivière est à éviter.',
    description: 'Comparer deux variantes en une seule travée de 70 m : bipoutre mixte et arc métallique à tablier inférieur (bowstring).',
    resolutions: [
      "\\text{Bipoutre mixte : } h \\approx \\frac{70}{22} = 3{,}2\\ \\text{m} \\ (\\text{hauteur sous l'ouvrage réduite})",
      "\\text{Bowstring : } f \\approx \\frac{70}{6} = 11{,}7\\ \\text{m}, \\ H \\text{ repris par le tirant (tablier)} \\Rightarrow \\text{pas de poussée sur les culées}",
      "\\text{Tablier du bowstring : } h \\approx 1{,}2 \\text{ à } 1{,}5\\ \\text{m} \\Rightarrow \\text{gain de tirant d'air d'environ 2 m}",
    ],
    conclusion: "Le bowstring libère davantage de tirant d'air pour la navigation et les crues, et sa poussée est équilibrée par le tablier-tirant ; le bipoutre est plus simple et moins cher si le profil en long permet sa hauteur.",
  },
  summary: {
    content: `### La typologie des ponts en 5 points
1. Dalles (10-30 m), poutres (25-50 m), mixtes (30-120 m), caissons (60-250 m).
2. Arcs (50-500 m), haubans (150-1 100 m), suspendus (500-2 000 m).
3. Prédimensionnement par l'élancement $h \\approx L/n$.
4. Arc et câble : $H = qL^2/(8f)$.
5. Choix = portée + site + méthode de construction + maintenance.`,
  },
  key_points: {
    points: [
      'H = qL² / (8f)',
      'Hauban : T = R / sin α',
      'Dalle continue : h ≈ L/25 à L/30',
      'Gabarit routier ≈ 4,75 m',
      'Concevoir structure et phasage ensemble',
    ],
  },
  self_assessment: {
    objectives: [
      'Je connais les familles de ponts et leurs domaines de portées',
      'Je sais prédimensionner la hauteur d’un tablier',
      'Je sais calculer la poussée d’un arc ou la traction d’un câble',
      'Je sais comparer des variantes pour un franchissement',
      "J'ai réussi le quiz avec au moins 2 bonnes réponses sur 3",
    ],
  },
});
