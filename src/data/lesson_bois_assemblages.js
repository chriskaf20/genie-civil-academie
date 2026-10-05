// ── Lesson: Construction bois — assemblages (EC5) — Module 12 ────────────────
import { buildLesson } from './build_lesson.js';

export const lesson_bois_assemblages = buildLesson({
  moduleId: 12,
  slug: 'bois_assemblages',
  lessonIndex: 2,
  title: "Assemblages Bois : Théorie de Johansen, Broches, Boulons, Vis & Connecteurs (EC5)",
  subtitle: 'Module 12 — Construction Bois',
  level: 'Intermédiaire',
  duration: '12h',
  tags: ['Construction bois', 'Assemblages', 'Johansen', 'Portance locale', 'Broches', 'Boulons', 'EC5'],
}, {
  definition: {
    title: 'Définition — Relier des pièces de bois',
    fr: 'Assemblages de charpente bois par organes métalliques',
    en: 'Timber connections with dowel-type fasteners',
    metier: "Utilisée par les ingénieurs bois, les bureaux d'études des entreprises de charpente et de construction ossature bois, et les contrôleurs techniques.",
    content: `Les pièces de bois sont reliées par des **organes de type tige** (pointes, vis, broches, boulons), par des **connecteurs** (anneaux, crampons, plaques métalliques) ou par des assemblages traditionnels (tenons, mortaises, embrèvements).

### Comment cède un assemblage par tige ?
Selon la **théorie de Johansen** (modèle européen de plastification), la ruine combine deux phénomènes :
1. l'**écrasement du bois** autour de la tige (portance locale ou « portance d'enfoncement ») ;
2. la **plastification de la tige** en flexion (une ou deux rotules plastiques).

Plusieurs modes de rupture sont possibles ; la résistance est celle du mode le plus faible.

### Les points de vigilance propres au bois
- **Fendage** : des tiges trop proches les unes des autres ou du bout de la pièce font éclater le bois.
- **Effet de groupe** : plusieurs organes alignés dans le fil du bois résistent moins que la somme de leurs résistances ($n_{ef} < n$).
- **Durée de charge et humidité** : coefficient $k_{mod}$ comme pour les éléments.

> 💡 Dans une charpente bois, ce sont presque toujours les assemblages, et non les pièces, qui dimensionnent les sections.`,
  },
  importance: {
    content: `- **Sécurité** : une rupture d'assemblage par fendage est fragile ; la ductilité vient de la plastification des tiges.
- **Dimensions des pièces** : les pinces et espacements minimaux imposent souvent des sections plus fortes que le calcul en flexion.
- **Feu** : les organes métalliques apparents conduisent la chaleur ; ils doivent être protégés ou noyés.
- **Fabrication** : les assemblages usinés par machines à commande numérique permettent des nœuds complexes et précis.

> ⚠️ **À retenir** : respectez toujours les distances minimales aux bords et entre organes, sinon le bois se fend avant que l'assemblage n'atteigne sa résistance.`,
  },
  applications: {
    examples: [
      ['Ferme de charpente', 'Plaques métalliques à dents (connecteurs) sur fermettes industrielles.'],
      ['Portique en lamellé-collé', 'Âmes métalliques insérées dans la pièce et broches en double cisaillement.'],
      ['Ossature bois', 'Pointes et agrafes reliant les panneaux de contreventement aux montants.'],
      ['Plancher CLT', 'Vis autoforeuses entre panneaux et sur les murs porteurs.'],
      ['Charpente traditionnelle', 'Assemblages tenon-mortaise et embrèvements chevillés.'],
    ],
  },
  theory: {
    title: 'Théorie — Portance locale, moment plastique et modes de Johansen',
    content: `### 1. Portance locale du bois (broches et boulons, parallèle au fil)
$$f_{h,0,k} = 0{,}082 \\, (1 - 0{,}01 \\, d) \\, \\rho_k$$
avec $d$ en mm et $\\rho_k$ en kg/m³. Perpendiculairement au fil, elle est réduite.

### 2. Moment plastique de la tige (boulons, broches)
$$M_{y,Rk} = 0{,}3 \\, f_{u,k} \\, d^{2{,}6}$$

### 3. Exemple de modes : tôle épaisse centrale en double cisaillement
Pour chaque plan de cisaillement (bois d'épaisseur $t_1$ de part et d'autre d'une tôle épaisse) :
$$F_{v,Rk} = \\min \\begin{cases} f_{h,k} t_1 d \\\\ f_{h,k} t_1 d \\left[\\sqrt{2 + \\dfrac{4 M_{y,Rk}}{f_{h,k} d t_1^2}} - 1\\right] \\\\ 2{,}3 \\sqrt{M_{y,Rk} f_{h,k} d} \\end{cases}$$
(sans effet de corde). Le premier mode correspond à l'écrasement du bois seul, les deux autres à une ou deux rotules dans la tige.

### 4. Résistance de calcul et effet de groupe
$$F_{v,Rd} = k_{mod} \\frac{F_{v,Rk}}{\\gamma_M} \\qquad n_{ef} = \\min\\left(n \\, ; \\, n^{0{,}9} \\sqrt[4]{\\frac{a_1}{13 d}}\\right)$$
$\\gamma_M = 1{,}3$ pour les assemblages ; $a_1$ est l'espacement des broches dans le fil.

### 5. Distances minimales (broches)
Espacement dans le fil $a_1 \\ge (3 + 2|\\cos\\alpha|) d$, distance à l'extrémité chargée $a_{3,t} \\ge \\max(7d ; 80\\ \\text{mm})$.`,
  },
  formulas: {
    title: 'Formules essentielles — Assemblages bois (EC5 §8)',
    formulas: [
      {
        name: 'Portance locale (broches, boulons, fil du bois)',
        latex: "f_{h,0,k} = 0{,}082 \\, (1 - 0{,}01 \\, d) \\, \\rho_k",
        description: 'Résistance du bois à l’écrasement par la tige.',
        vars: [
          ['f_{h,0,k}', 'Portance locale caractéristique', 'MPa', 'Parallèle au fil.'],
          ['d', 'Diamètre de la tige', 'mm', 'Broches et boulons ≤ 30 mm.'],
          ['\\rho_k', 'Masse volumique caractéristique', 'kg/m³', 'C24 : 350 ; GL24h : 385.'],
        ],
      },
      {
        name: 'Moment plastique de la tige',
        latex: "M_{y,Rk} = 0{,}3 \\, f_{u,k} \\, d^{2{,}6}",
        description: 'Boulons et broches de section circulaire.',
        vars: [
          ['M_{y,Rk}', 'Moment plastique caractéristique', 'N·mm', 'Plastification en flexion de la tige.'],
          ['f_{u,k}', 'Résistance ultime de l’acier', 'MPa', '360 (S235), 470 (S355), 800 (boulons 8.8).'],
        ],
      },
      {
        name: 'Mode de rupture à deux rotules (double cisaillement, tôle épaisse centrale)',
        latex: "F_{v,Rk} = 2{,}3 \\sqrt{M_{y,Rk} \\, f_{h,k} \\, d}",
        description: 'Mode le plus ductile : deux rotules plastiques par plan de cisaillement (sans effet de corde).',
        vars: [
          ['F_{v,Rk}', 'Résistance par plan de cisaillement', 'N', 'À comparer aux autres modes de Johansen.'],
          ['f_{h,k}', 'Portance locale', 'MPa', 'Selon l’angle effort / fil.'],
        ],
        rule: "Un assemblage bien conçu rompt dans ce mode ductile plutôt que par écrasement ou fendage.",
      },
      {
        name: 'Résistance de calcul et nombre efficace',
        latex: "F_{v,Rd} = k_{mod} \\frac{F_{v,Rk}}{\\gamma_M} \\qquad n_{ef} = \\min\\left(n \\, ; \\, n^{0{,}9} \\sqrt[4]{\\frac{a_1}{13 d}}\\right)",
        description: 'Effet de groupe des broches ou boulons alignés dans le fil du bois.',
        vars: [
          ['k_{mod}', 'Coefficient de modification', '-', '0,6 à 1,1 selon la durée de charge et la classe de service.'],
          ['\\gamma_M', 'Coefficient partiel des assemblages', '-', '1,3.'],
          ['n', "Nombre d'organes dans une file", '-', 'Parallèle au fil.'],
          ['a_1', 'Espacement dans le fil', 'mm', 'Entre organes d’une même file.'],
        ],
      },
    ],
  },
  stepbystep: {
    title: 'Calcul complet — Broches en double cisaillement avec âme métallique',
    problem: "Pièces en lamellé-collé GL24h (ρ_k = 385 kg/m³) de 2 × 60 mm de part et d'autre d'une tôle épaisse centrale. Broches Ø12 mm en acier S235 (f_u,k = 360 MPa). Effort parallèle au fil. Calculer la résistance de calcul d'une broche (k_mod = 0,8).",
    steps_demo: [
      { n: 1, text: "Portance locale : f_h,k = 0,082 × (1 − 0,12) × 385 = 27,8 MPa." },
      { n: 2, text: "Moment plastique : M_y,Rk = 0,3 × 360 × 12^2,6 = 0,3 × 360 × 639,4 = 69 060 N·mm." },
      { n: 3, text: "Mode 1 (écrasement) : 27,8 × 60 × 12 = 20 000 N." },
      { n: 4, text: "Mode 2 (une rotule) : 20 000 × [√(2 + 4 × 69 060 / (27,8 × 12 × 60²)) − 1] = 20 000 × 0,493 = 9 870 N." },
      { n: 5, text: "Mode 3 (deux rotules) : 2,3 × √(69 060 × 27,8 × 12) = 11 040 N → le mode 2 gouverne : 9 870 N par plan." },
      { n: 6, text: "Par broche (2 plans) : F_v,Rk = 19,7 kN ; F_v,Rd = 0,8 × 19,7 / 1,3 = 12,1 kN." },
    ],
    result_latex: "f_{h,k} = 27{,}8\\ \\text{MPa} \\quad M_{y,Rk} = 69\\,060\\ \\text{N·mm} \\quad F_{v,Rk} = 2 \\times 9{,}87 = 19{,}7\\ \\text{kN} \\quad F_{v,Rd} = 12{,}1\\ \\text{kN}",
  },
  units: {
    table: [
      ['Portance locale', 'MPa', 'psi', '1 MPa = 145 psi'],
      ['Moment plastique de tige', 'N·mm', 'lb·in', '1 N·mm = 0,00885 lb·in'],
      ['Masse volumique', 'kg/m³', 'pcf', 'C24 : 350 ; GL24h : 385 ; GL28h : 425'],
      ['Résistance d’un organe', 'kN', 'kip', '1 kN = 0,2248 kip'],
      ['Diamètre', 'mm', 'in', 'Broches courantes : 8 à 24 mm'],
    ],
    note: 'Les résistances caractéristiques des assemblages se divisent par γ_M = 1,3 et se multiplient par k_mod comme pour les pièces de bois.',
  },
  hypotheses: {
    items: [
      ['info', 'La théorie de Johansen suppose un comportement rigide-plastique du bois en portance et de la tige en flexion.'],
      ['info', 'L’effet de corde (résistance à l’arrachement axial) peut s’ajouter pour les boulons et vis, pas pour les broches lisses.'],
      ['warning', 'Le fendage et la rupture de bloc ne sont pas couverts par les modes de Johansen : ils se vérifient séparément.'],
      ['warning', 'Pour un effort incliné par rapport au fil, la portance locale diminue (formule de Hankinson).'],
      ['tip', 'Préférez plusieurs petites tiges bien espacées à quelques grosses : comportement plus ductile.'],
    ],
  },
  simple_examples: {
    examples: [
      {
        title: 'Exemple 1 : portance locale d’un boulon M16 dans du C24',
        given: 'd = 16 mm, ρ_k = 350 kg/m³',
        find: 'f_h,0,k',
        solution_latex: "f_{h,0,k} = 0{,}082 \\times (1 - 0{,}16) \\times 350 = 24{,}1\\ \\text{MPa}",
        result: '≈ 24 MPa.',
      },
      {
        title: 'Exemple 2 : effet de groupe',
        given: '4 broches Ø12 alignées dans le fil, a₁ = 60 mm',
        find: 'n_ef',
        solution_latex: "n_{ef} = \\min\\left(4 \\, ; \\, 4^{0{,}9} \\times \\sqrt[4]{\\frac{60}{156}}\\right) = \\min(4 \\, ; \\, 3{,}48 \\times 0{,}788) = 2{,}74",
        result: 'Seulement 2,74 broches efficaces sur 4 : augmenter a₁ améliore le rendement.',
      },
      {
        title: 'Exemple 3 : distance à l’extrémité chargée',
        given: 'Broches Ø12',
        find: 'a₃,t minimale',
        solution_latex: "a_{3,t} = \\max(7 \\times 12 \\, ; \\, 80) = 84\\ \\text{mm}",
        result: '84 mm entre la dernière broche et le bout de la pièce.',
      },
    ],
  },
  real_examples: {
    title: 'Exemple réel — Fendage des assemblages d’une salle de sport',
    examples: [
      {
        context: 'Poutres en lamellé-collé de 30 m, assemblages par broches sur âmes métalliques',
        scenario: "Des fissures apparaissent dans le fil du bois au droit des files de broches quelques années après la construction : espacements trop faibles et variations d'humidité (chauffage) ont provoqué retrait et fendage.",
        decomposition_latex: "\\text{Retrait du bois} + \\text{tiges rigides rapprochées} \\Rightarrow \\text{contraintes de traction perpendiculaire} \\Rightarrow \\text{fendage}",
        lesson: "Respecter les espacements, limiter les files longues, maîtriser l'humidité du bois à la mise en œuvre et prévoir des renforts (vis de renfort perpendiculaires au fil) dans les zones sensibles.",
      },
    ],
  },
  diagrams: {
    title: 'Schéma de principe — Dimensionnement d’un assemblage par tiges',
    diagram_description: [
      'Effort à transmettre et angle avec le fil du bois',
      'Choix du type d’organe : pointes, vis, broches, boulons, connecteurs',
      'Portance locale f_h,k et moment plastique M_y,Rk',
      'Modes de Johansen : résistance par plan de cisaillement',
      'Effet de groupe n_ef et résistance de calcul k_mod / γ_M',
      'Vérifications complémentaires : espacements, fendage, rupture de bloc, feu',
    ],
  },
  mistakes: {
    items: [
      ['Multiplier la résistance d’une broche par n sans effet de groupe', 'Résistance surestimée de 20 à 40 %', 'Utiliser n_ef pour les files parallèles au fil.'],
      ['Placer les tiges trop près du bout de la pièce', 'Fendage de l’extrémité', 'Respecter a₃,t ≥ max(7d ; 80 mm).'],
      ['Ignorer l’humidité du bois à la pose', 'Retrait et fissuration autour des organes', 'Mettre en œuvre un bois à humidité proche de son humidité de service.'],
    ],
  },
  tips: {
    tips: [
      'Les vis autoforeuses à filetage total renforcent efficacement le bois contre le fendage.',
      'Les âmes métalliques insérées et broches autoforeuses donnent des assemblages invisibles et protégés du feu.',
      'Utilisez les documents techniques des fabricants de vis (ETA) : leurs résistances dépassent souvent les formules générales.',
      'Pour les fermettes, la conception des connecteurs est faite par le fabricant : vérifiez seulement les appuis et le contreventement.',
    ],
  },
  norms: {
    norms: [
      ['NF EN 1995-1-1 §8', 'Eurocode 5 : assemblages par organes métalliques.'],
      ['NF EN 1995-1-1/NA', 'Annexe nationale française.'],
      ['NF EN 14592', 'Organes de type tige : exigences.'],
      ['NF EN 14080', 'Bois lamellé-collé : caractéristiques (GL24h, GL28h…).'],
      ['NF DTU 31.1', 'Charpente en bois : exécution.'],
    ],
  },
  exercises: {
    exercises: [
      {
        level: 1,
        text: 'Calculer M_y,Rk d’une broche Ø16 en S235 (f_u,k = 360 MPa).',
        hint: '16^2,6 = 1 351.',
        answer_latex: "M_{y,Rk} = 0{,}3 \\times 360 \\times 1\\,351 = 145\\,900\\ \\text{N·mm}",
        answer_text: 'M_y,Rk ≈ 146 kN·mm.',
      },
      {
        level: 2,
        text: 'Calculer le mode à deux rotules F_v,Rk = 2,3√(M_y f_h d) pour cette broche dans du GL24h (f_h,k = 0,082 × 0,84 × 385 = 26,5 MPa).',
        hint: 'd = 16 mm.',
        answer_latex: "F_{v,Rk} = 2{,}3 \\sqrt{145\\,900 \\times 26{,}5 \\times 16} = 2{,}3 \\times 7\\,864 = 18\\,090\\ \\text{N}",
        answer_text: '≈ 18,1 kN par plan de cisaillement.',
      },
      {
        level: 3,
        text: "Un assemblage doit transmettre 85 kN (k_mod = 0,8) avec des broches de résistance F_v,Rk = 19,7 kN (2 plans). Combien en faut-il en 2 files de n broches (a₁ = 84 mm, d = 12 mm) ?",
        hint: 'F_v,Rd = 12,1 kN ; tester n = 4 : n_ef = 4^0,9 × (84/156)^0,25.',
        answer_latex: "n_{ef}(4) = 3{,}48 \\times 0{,}857 = 2{,}98 \\quad 2 \\times 2{,}98 \\times 12{,}1 = 72\\ \\text{kN} < 85 \\quad n_{ef}(5) = 4{,}26 \\times 0{,}857 = 3{,}65 \\Rightarrow 88\\ \\text{kN}",
        answer_text: '2 files de 5 broches (résistance ≈ 88 kN ≥ 85 kN).',
      },
    ],
  },
  quiz: {
    title: 'Quiz — Assemblages bois',
    questions: [
      { q: 'Quels phénomènes combine la théorie de Johansen ?', options: ['Fendage et flambement', 'Portance locale du bois et plastification de la tige', 'Cisaillement de bloc et voilement'], correct: 1, explain: 'Les modes combinent écrasement du bois et rotules plastiques dans la tige.' },
      { q: 'Pourquoi n_ef < n pour des broches alignées dans le fil ?', options: ['À cause du feu', 'À cause du risque de fendage et de la répartition inégale des efforts', 'À cause de la corrosion'], correct: 1, explain: 'Les organes alignés favorisent le fendage et ne travaillent pas tous également.' },
      { q: 'Quel est γ_M des assemblages bois ?', options: ['1,0', '1,25', '1,3'], correct: 2, explain: 'γ_M = 1,3 pour les assemblages selon l’EC5.' },
    ],
  },
  exam_questions: {
    questions: [
      'Présentez la théorie de Johansen et les modes de rupture d’un assemblage bois-bois en simple cisaillement.',
      'Dimensionnez un assemblage par broches avec âme métallique pour un effort donné, en tenant compte de l’effet de groupe.',
      'Expliquez les dispositions constructives (espacements, pinces) et leur justification physique.',
    ],
  },
  interview_questions: {
    questions: [
      ['Pourquoi les assemblages bois sont-ils souvent métalliques ?', "Parce que le bois transmet mal les efforts concentrés ; des organes métalliques (broches, vis, tôles) répartissent les efforts, apportent de la ductilité et permettent des nœuds compacts et précis."],
      ['Comment améliorer la tenue au feu d’un assemblage ?', "Noyer les organes dans le bois (âmes insérées, broches recouvertes de bouchons), augmenter les épaisseurs de bois, ou protéger par plaques ; un acier apparent chauffe vite et carbonise le bois autour."],
    ],
  },
  practical_case: {
    title: 'Cas pratique — Pied de poteau en lamellé-collé',
    scenario: "Poteau GL24h 160 × 160 mm fixé sur un sabot métallique (tôle centrale) par des broches Ø12 en double cisaillement (t₁ = 74 mm de chaque côté). Effort de soulèvement dû au vent : 40 kN (k_mod = 1,1, action instantanée).",
    description: 'Vérifier le nombre de broches nécessaire.',
    resolutions: [
      "F_{v,Rk} \\approx 2 \\times 11{,}0 = 22\\ \\text{kN par broche (mode à deux rotules)}",
      "F_{v,Rd} = 1{,}1 \\times \\frac{22}{1{,}3} = 18{,}6\\ \\text{kN}",
      "n = \\frac{40}{18{,}6} = 2{,}2 \\Rightarrow 4\\ \\text{broches en 2 files de 2 (effet de groupe négligeable pour n = 2)}",
    ],
    conclusion: 'Quatre broches Ø12 (2 files de 2) reprennent le soulèvement de 40 kN ; on vérifie les pinces (a₃,t ≥ 84 mm depuis l’extrémité du poteau) et la protection contre l’humidité en pied.',
  },
  summary: {
    content: `### Les assemblages bois en 5 points
1. Johansen : portance locale du bois + plastification de la tige.
2. $f_{h,0,k} = 0{,}082(1 - 0{,}01d)\\rho_k$ ; $M_{y,Rk} = 0{,}3 f_{u,k} d^{2{,}6}$.
3. Résistance = mode le plus faible, puis $k_{mod}/\\gamma_M$ avec $\\gamma_M = 1{,}3$.
4. Effet de groupe : $n_{ef} = n^{0{,}9}(a_1/13d)^{1/4} \\le n$.
5. Espacements et pinces pour éviter le **fendage**.`,
  },
  key_points: {
    points: [
      'f_h,0,k = 0,082 (1 − 0,01 d) ρ_k',
      'M_y,Rk = 0,3 f_u,k d^2,6',
      'γ_M = 1,3 pour les assemblages',
      'n_ef < n dans le fil',
      'a₃,t ≥ max(7d ; 80 mm)',
    ],
  },
  self_assessment: {
    objectives: [
      'Je comprends la théorie de Johansen',
      'Je sais calculer la portance locale et le moment plastique d’une tige',
      'Je sais calculer la résistance d’un assemblage par broches',
      'Je sais appliquer l’effet de groupe et les distances minimales',
      "J'ai réussi le quiz avec au moins 2 bonnes réponses sur 3",
    ],
  },
});
