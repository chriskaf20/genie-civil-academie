// ── Lesson: Poutres mixtes acier-béton (Eurocode 4) — Module 40 ───────────────
import { buildLesson } from './build_lesson.js';

export const lesson_mixte_poutres = buildLesson({
  moduleId: 40,
  slug: 'mixte_poutres',
  lessonIndex: 1,
  title: "Poutres Mixtes Acier-Béton : Largeur Efficace, Moment Plastique & Connexion (EC4)",
  subtitle: "Module 40 — Structures mixtes acier-béton",
  level: 'Avancé',
  duration: '12h',
  diagramType: 'rebar_beam',
  tags: ['Eurocode 4', 'Mixte', 'Goujons', 'Connexion', 'Largeur efficace', 'Moment plastique'],
}, {
  definition: {
    title: "Définition — Faire travailler ensemble l'acier et le béton",
    fr: 'Poutre mixte acier-béton',
    en: 'Steel-concrete composite beam',
    metier: "Utilisée par les ingénieurs charpente et ouvrages d'art pour les planchers de bureaux, parkings et ponts mixtes.",
    content: `Une **poutre mixte** associe un profilé métallique et une dalle en béton reliés par des **connecteurs** (le plus souvent des goujons soudés). La connexion empêche le glissement entre les deux matériaux : ils fléchissent ensemble comme une seule section.

### Le principe
- La **dalle béton**, en partie haute, reprend la compression : c'est là que le béton est le plus efficace.
- Le **profilé acier**, en partie basse, reprend la traction.
- Les **goujons** transmettent l'effort de glissement à l'interface.

> 💡 Pour une même poutre, la section mixte est environ **deux fois plus résistante** et **trois fois plus rigide** que le profilé seul.`,
  },
  importance: {
    content: `- **Économie d'acier** : profilés plus petits, planchers plus minces, hauteur d'étage réduite.
- **Rapidité** : bac acier collaborant servant de coffrage, pas d'étaiement dans la plupart des cas.
- **Ouvrages d'art** : la plupart des ponts routiers de 30 à 120 m sont des bipoutres mixtes.
- **Sécurité** : une connexion insuffisante provoque un glissement et une perte brutale de résistance.

> ⚠️ **À retenir** : sans connecteurs, la dalle et la poutre travaillent séparément ; la résistance chute de moitié.`,
  },
  applications: {
    examples: [
      ['Immeuble de bureaux', 'Poutres IPE de 8 à 12 m sous dalle mixte sur bac acier, goujons soudés à travers le bac.'],
      ['Parking aérien', 'Grandes portées sans poteaux intermédiaires, faible hauteur de plancher.'],
      ['Pont bipoutre', 'Deux poutres PRS reliées par des entretoises, dalle béton connectée par goujons.'],
      ['Réhabilitation', 'Ajout d’une dalle connectée sur des poutres existantes pour augmenter leur capacité.'],
      ['Bâtiment industriel', 'Planchers techniques fortement chargés, poteaux mixtes enrobés pour la tenue au feu.'],
    ],
  },
  theory: {
    title: "Théorie — Section mixte à l'état limite ultime",
    content: `### 1. Largeur efficace de dalle
Le cisaillement dans la dalle (« traînage de cisaillement ») fait que seule une largeur limitée de dalle participe :

$$b_{eff} = b_0 + \\sum b_{ei} \\qquad b_{ei} = \\min\\left(\\frac{L_e}{8} \\, ; \\, b_i\\right)$$

$L_e$ est la distance entre points de moment nul (portée pour une travée isostatique), $b_i$ la demi-distance à la poutre voisine.

### 2. Moment résistant plastique (connexion complète)
On compare la résistance de la dalle comprimée et celle du profilé tendu :
- $N_{c,f} = 0{,}85 f_{cd} \\, b_{eff} \\, h_c$ (dalle entièrement comprimée) ;
- $N_{pl,a} = A_a f_{yd}$ (profilé entièrement plastifié).

Si $N_{c,f} \\ge N_{pl,a}$, l'**axe neutre plastique est dans la dalle**, à la profondeur $z = N_{pl,a} / (0{,}85 f_{cd} b_{eff})$, et :

$$M_{pl,Rd} = N_{pl,a} \\left( \\frac{h_a}{2} + h_c - \\frac{z}{2} \\right)$$

### 3. Connexion
L'effort à transmettre entre la section de moment maximal et l'appui vaut $N_c = \\min(N_{pl,a} ; N_{c,f})$. Avec des goujons de résistance $P_{Rd}$, il faut $n = N_c / P_{Rd}$ goujons sur chaque demi-portée.

### 4. Service
Les flèches se calculent sur la section homogénéisée avec le coefficient d'équivalence $n = E_a / E_c$ (environ 6 à court terme, 15 à 18 à long terme pour tenir compte du fluage).`,
  },
  formulas: {
    title: "Formules essentielles — Poutres mixtes (EC4)",
    formulas: [
      {
        name: "Largeur efficace de la dalle",
        latex: "b_{eff} = b_0 + \\sum b_{ei} \\qquad b_{ei} = \\min\\left(\\frac{L_e}{8} \\, ; \\, b_i\\right)",
        description: "EN 1994-1-1 §5.4.1.2 : largeur de dalle qui participe à la flexion.",
        vars: [
          ['b_{eff}', 'Largeur efficace', 'm', 'Largeur de dalle prise en compte dans la section.'],
          ['b_0', 'Entraxe des connecteurs extrêmes', 'm', 'Souvent négligé pour une seule file de goujons.'],
          ['L_e', 'Longueur entre points de moment nul', 'm', 'Portée L pour une travée isostatique.'],
          ['b_i', 'Demi-distance à la poutre voisine', 'm', 'Ou distance au bord libre de la dalle.'],
        ],
      },
      {
        name: "Résistances plastiques de la dalle et du profilé",
        latex: "N_{c,f} = 0{,}85 \\, f_{cd} \\, b_{eff} \\, h_c \\qquad N_{pl,a} = A_a \\, f_{yd}",
        description: "La plus petite des deux fixe la position de l'axe neutre plastique.",
        vars: [
          ['N_{c,f}', 'Résistance de la dalle en compression', 'kN', 'Dalle entièrement comprimée.'],
          ['f_{cd}', 'Résistance de calcul du béton', 'MPa', 'f_ck / 1,5.'],
          ['h_c', 'Épaisseur de béton', 'mm', 'Au-dessus des nervures pour une dalle sur bac acier.'],
          ['N_{pl,a}', 'Résistance plastique du profilé', 'kN', 'Profilé entièrement plastifié.'],
          ['A_a', 'Aire du profilé', 'mm²', 'Lue dans les tables de profilés.'],
          ['f_{yd}', "Limite d'élasticité de calcul", 'MPa', 'f_y / γ_M0 avec γ_M0 = 1,0.'],
        ],
      },
      {
        name: "Moment plastique (axe neutre dans la dalle)",
        latex: "z = \\frac{N_{pl,a}}{0{,}85 \\, f_{cd} \\, b_{eff}} \\qquad M_{pl,Rd} = N_{pl,a} \\left( \\frac{h_a}{2} + h_c - \\frac{z}{2} \\right)",
        description: "Valable si N_c,f ≥ N_pl,a et si la dalle repose directement sur le profilé.",
        vars: [
          ['z', "Hauteur de béton comprimé", 'mm', "Profondeur de l'axe neutre plastique depuis le haut de la dalle."],
          ['M_{pl,Rd}', 'Moment résistant plastique', 'kN·m', 'Connexion complète.'],
          ['h_a', 'Hauteur du profilé', 'mm', "La résultante de traction est à mi-hauteur du profilé."],
        ],
        rule: "Le bras de levier est grand : la résultante de compression est en haut de la dalle et la traction au milieu du profilé.",
      },
      {
        name: "Résistance d'un goujon à tête",
        latex: "P_{Rd} = \\min\\left( \\frac{0{,}8 \\, f_u \\, \\pi d^2 / 4}{\\gamma_V} \\, ; \\, \\frac{0{,}29 \\, \\alpha \\, d^2 \\sqrt{f_{ck} E_{cm}}}{\\gamma_V} \\right)",
        description: "Rupture de la tige d'acier ou écrasement du béton autour du goujon (EN 1994-1-1 §6.6.3.1).",
        vars: [
          ['P_{Rd}', 'Résistance de calcul du goujon', 'kN', 'Effort de glissement repris par un goujon.'],
          ['f_u', 'Résistance ultime du goujon', 'MPa', '≤ 500 MPa (450 MPa usuel).'],
          ['d', 'Diamètre du goujon', 'mm', '16, 19 ou 22 mm.'],
          ['\\alpha', 'Coefficient', '-', '1,0 si h_sc / d > 4.'],
          ['f_{ck}, E_{cm}', 'Résistance et module du béton', 'MPa', 'C25/30 : 25 et 31 000 MPa.'],
          ['\\gamma_V', 'Coefficient partiel', '-', '1,25.'],
        ],
      },
      {
        name: "Nombre de goujons (connexion complète)",
        latex: "n = \\frac{N_c}{P_{Rd}} \\qquad N_c = \\min(N_{pl,a} \\, ; \\, N_{c,f})",
        description: "Nombre de goujons entre l'appui et la section de moment maximal.",
        vars: [
          ['n', 'Nombre de goujons', '-', 'Par demi-portée pour une poutre isostatique.'],
          ['N_c', 'Effort de glissement à transmettre', 'kN', 'Plus petite des résistances plastiques.'],
        ],
        rule: "Avec des goujons ductiles, on peut les répartir uniformément le long de la demi-portée.",
      },
    ],
  },
  stepbystep: {
    title: "Calcul complet — Poutre mixte de plancher de bureaux",
    problem: "Poutre IPE 300 en S355 (A_a = 5 381 mm², h_a = 300 mm), portée 8 m isostatique, entraxe des poutres 3 m, dalle pleine de 120 mm en C25/30 (f_cd = 16,67 MPa). Calculer le moment plastique de la section mixte.",
    steps_demo: [
      { n: 1, text: "Largeur efficace : b_ei = min(8/8 ; 3/2) = 1,0 m de chaque côté, donc b_eff = 2,0 m." },
      { n: 2, text: "Profilé : N_pl,a = 5 381 × 355 = 1 910 kN." },
      { n: 3, text: "Dalle : N_c,f = 0,85 × 16,67 × 2 000 × 120 = 3 401 kN > 1 910 kN → axe neutre dans la dalle." },
      { n: 4, text: "Hauteur comprimée : z = 1 910 255 / (0,85 × 16,67 × 2 000) = 67,4 mm < 120 mm." },
      { n: 5, text: "Bras de levier : 150 + 120 − 33,7 = 236,3 mm." },
      { n: 6, text: "M_pl,Rd = 1 910 × 0,2363 = 451 kN·m, contre 223 kN·m pour l'IPE 300 seul (W_pl = 628 cm³) : gain × 2." },
    ],
    result_latex: "M_{pl,Rd} = 1\\,910 \\times \\left(0{,}150 + 0{,}120 - \\frac{0{,}0674}{2}\\right) = 451\\ \\text{kN·m}",
  },
  units: {
    table: [
      ['Moment résistant', 'kN·m', 'kip·ft', '1 kN·m = 0,7376 kip·ft'],
      ['Effort de goujon', 'kN', 'kip', '1 kN = 0,2248 kip ; goujon Ø19 ≈ 70 à 80 kN'],
      ['Module acier E_a', 'MPa', 'ksi', '210 000 MPa'],
      ['Module béton E_cm', 'MPa', 'ksi', 'C25/30 : 31 000 MPa ; C30/37 : 33 000 MPa'],
      ["Coefficient d'équivalence n", '-', '-', '≈ 6 à court terme, 15 à 18 à long terme'],
    ],
    note: "Travaillez en N et mm pour les sections, puis convertissez : 1 kN·m = 10⁶ N·mm.",
  },
  hypotheses: {
    items: [
      ['info', "Le calcul plastique suppose une section de classe 1 ou 2 et une connexion ductile (goujons d ≥ 16 mm)."],
      ['info', "La traction du béton est négligée ; seul le béton comprimé de la largeur efficace participe."],
      ['warning', "En moment négatif (sur appui intermédiaire), la dalle est tendue : seules les armatures de la dalle participent."],
      ['warning', "Sans étaiement, le profilé seul porte le béton frais : vérification de la phase de construction obligatoire."],
      ['tip', "Dans un bac acier perpendiculaire à la poutre, la résistance du goujon est réduite par un coefficient k_t."],
    ],
  },
  simple_examples: {
    examples: [
      {
        title: "Exemple 1 : largeur efficace",
        given: "Portée 12 m, poutres espacées de 2,5 m",
        find: "b_eff",
        solution_latex: "b_{ei} = \\min\\left(\\frac{12}{8} ; \\frac{2{,}5}{2}\\right) = \\min(1{,}5 ; 1{,}25) = 1{,}25\\ \\text{m} \\quad b_{eff} = 2{,}5\\ \\text{m}",
        result: "Toute la dalle entre poutres participe.",
      },
      {
        title: "Exemple 2 : résistance d'un goujon Ø19",
        given: "f_u = 450 MPa, C25/30 (f_ck = 25 MPa, E_cm = 31 000 MPa), α = 1, γ_V = 1,25",
        find: "P_Rd",
        solution_latex: "P_{Rd} = \\min\\left(\\frac{0{,}8 \\times 450 \\times 283{,}5}{1{,}25} ; \\frac{0{,}29 \\times 361 \\times 880{,}3}{1{,}25}\\right) = \\min(81{,}7 ; 73{,}7) = 73{,}7\\ \\text{kN}",
        result: "C'est le béton qui gouverne : P_Rd ≈ 74 kN.",
      },
      {
        title: "Exemple 3 : nombre de goujons",
        given: "N_c = 1 910 kN (poutre de l'étape par étape), P_Rd = 73,7 kN, demi-portée 4 m",
        find: "Nombre et espacement des goujons",
        solution_latex: "n = \\frac{1\\,910}{73{,}7} = 25{,}9 \\Rightarrow 26 \\quad s = \\frac{4\\,000}{26} = 154\\ \\text{mm}",
        result: "26 goujons par demi-portée, soit 52 sur la poutre, espacés d'environ 150 mm.",
      },
    ],
  },
  real_examples: {
    title: "Exemple réel — Pont bipoutre mixte",
    examples: [
      {
        context: "Pont routier de 3 travées (40 – 55 – 40 m), deux poutres PRS de 2,2 m de hauteur",
        scenario: "La dalle de 25 cm est connectée par des goujons Ø22. En travée, la dalle comprimée travaille avec les poutres ; sur les piles, la dalle tendue fissure et seules ses armatures longitudinales participent.",
        decomposition_latex: "M_{travée} \\rightarrow \\text{dalle comprimée efficace} \\qquad M_{appui} \\rightarrow \\text{armatures de dalle} + \\text{profilé}",
        lesson: "Le bipoutre mixte est économique car chaque matériau est placé là où il est efficace ; le phasage de bétonnage (par plots) limite la fissuration sur appuis.",
      },
    ],
  },
  diagrams: {
    title: 'Schéma de principe — Dimensionnement d’une poutre mixte',
    diagram_description: [
      'Géométrie : portée, entraxe, épaisseur de dalle → b_eff',
      'Résistances : N_c,f (dalle) et N_pl,a (profilé)',
      "Axe neutre plastique : dans la dalle si N_c,f ≥ N_pl,a",
      'Moment résistant M_pl,Rd et comparaison à M_Ed',
      'Connexion : P_Rd du goujon, n = N_c / P_Rd',
      'Service : flèche sur section homogénéisée (n court et long terme)',
    ],
  },
  mistakes: {
    items: [
      ['Prendre toute la largeur entre poutres sans vérifier L/8', 'Surestimation de la dalle sur les petites portées', 'Toujours appliquer b_ei = min(L_e/8 ; b_i).'],
      ['Oublier la phase de construction', 'Le profilé seul porte le béton frais et peut déverser', 'Vérifier le profilé seul (ou étayer) sous le poids du béton frais et des charges de chantier.'],
      ['Ignorer la réduction des goujons dans un bac acier', 'P_Rd trop élevé', 'Appliquer le coefficient k_t selon la géométrie des nervures.'],
    ],
  },
  tips: {
    tips: [
      "Une connexion partielle (moins de goujons) est souvent suffisante en bâtiment : l'EC4 donne le degré minimal selon la portée.",
      "Contrôlez la soudure des goujons sur chantier par l'essai de pliage à 30°.",
      "Pour la flèche à long terme, utilisez n ≈ 2 × n₀ pour les charges permanentes.",
      "Un plancher mixte se vérifie aussi aux vibrations : visez une fréquence propre supérieure à 3 Hz pour les bureaux.",
    ],
  },
  norms: {
    norms: [
      ['NF EN 1994-1-1', 'Eurocode 4 : calcul des structures mixtes acier-béton, règles générales et bâtiments.'],
      ['NF EN 1994-2', 'Eurocode 4 : règles pour les ponts mixtes.'],
      ['NF EN 1994-1-2', 'Calcul du comportement au feu des structures mixtes.'],
      ['NF EN ISO 13918', 'Goujons et bagues céramiques pour le soudage à l’arc.'],
    ],
  },
  exercises: {
    exercises: [
      {
        level: 1,
        text: "Poutre de 6 m isostatique, entraxe 3 m. Calculer b_eff.",
        hint: "b_ei = min(L/8 ; b_i).",
        answer_latex: "b_{ei} = \\min(0{,}75 ; 1{,}5) = 0{,}75\\ \\text{m} \\Rightarrow b_{eff} = 1{,}50\\ \\text{m}",
        answer_text: "b_eff = 1,50 m.",
      },
      {
        level: 2,
        text: "IPE 270 en S275 (A_a = 4 590 mm², h_a = 270 mm), dalle 100 mm en C25/30, b_eff = 1,50 m. Vérifier que l'axe neutre est dans la dalle et calculer z.",
        hint: "Comparer N_pl,a et N_c,f.",
        answer_latex: "N_{pl,a} = 1\\,262\\ \\text{kN} \\quad N_{c,f} = 0{,}85 \\times 16{,}67 \\times 1\\,500 \\times 100 = 2\\,125\\ \\text{kN} \\quad z = \\frac{1\\,262\\,250}{21\\,254} = 59{,}4\\ \\text{mm}",
        answer_text: "Axe neutre dans la dalle, z ≈ 59 mm.",
      },
      {
        level: 3,
        text: "Pour la poutre de l'exercice 2, calculer M_pl,Rd.",
        hint: "M = N_pl,a (h_a/2 + h_c − z/2).",
        answer_latex: "M_{pl,Rd} = 1\\,262 \\times (0{,}135 + 0{,}100 - 0{,}0297) = 1\\,262 \\times 0{,}2053 = 259\\ \\text{kN·m}",
        answer_text: "M_pl,Rd ≈ 259 kN·m.",
      },
    ],
  },
  quiz: {
    title: 'Quiz — Poutres mixtes',
    questions: [
      { q: "Quel est le rôle des goujons dans une poutre mixte ?", options: ['Fixer le bac acier contre le vent', "Empêcher le glissement entre dalle et profilé", 'Remplacer les armatures de la dalle'], correct: 1, explain: "Les goujons transmettent l'effort de cisaillement longitudinal à l'interface acier-béton." },
      { q: "Pour une travée isostatique de 10 m, quelle est la limite L_e/8 de b_ei ?", options: ['0,8 m', '1,25 m', '2,5 m'], correct: 1, explain: "L_e = 10 m, donc L_e/8 = 1,25 m de chaque côté." },
      { q: "Si N_c,f ≥ N_pl,a, où se trouve l'axe neutre plastique ?", options: ['Dans la dalle', "Dans l'âme du profilé", 'Dans la semelle inférieure'], correct: 0, explain: "La dalle suffit à équilibrer tout le profilé plastifié : l'axe neutre est dans la dalle." },
    ],
  },
  exam_questions: {
    questions: [
      "Expliquez la notion de largeur efficace et le phénomène de traînage de cisaillement.",
      "Établissez l'expression du moment plastique d'une poutre mixte lorsque l'axe neutre est dans la dalle.",
      "Comparez les deux modes de rupture d'un goujon et donnez l'expression de P_Rd.",
      "Quelles vérifications spécifiques impose une poutre mixte non étayée ?",
    ],
  },
  interview_questions: {
    questions: [
      ["Pourquoi les planchers mixtes sont-ils si répandus dans les bureaux ?", "Ils permettent de grandes portées avec une faible hauteur, le bac sert de coffrage et de plateforme de travail, il n'y a souvent pas d'étaiement, et l'acier est utilisé là où il est efficace (traction), le béton en compression."],
      ["Qu'est-ce qu'une connexion partielle ?", "On place moins de goujons que nécessaire pour une connexion complète : le moment résistant est alors interpolé entre celui du profilé seul et M_pl,Rd. C'est économique quand le moment sollicitant est inférieur à M_pl,Rd."],
    ],
  },
  practical_case: {
    title: 'Cas pratique — Vérification d’une poutre de plancher',
    scenario: "Plancher de bureaux : poutres IPE 300 S355 espacées de 3 m, portée 8 m, charges G = 4,5 kN/m² (dalle comprise) et Q = 2,5 kN/m².",
    description: "Vérifier la résistance en flexion de la poutre mixte calculée dans l'étape pas à pas (M_pl,Rd = 451 kN·m).",
    resolutions: [
      "q_{Ed} = (1{,}35 \\times 4{,}5 + 1{,}5 \\times 2{,}5) \\times 3 = (6{,}08 + 3{,}75) \\times 3 = 29{,}5\\ \\text{kN/m}",
      "M_{Ed} = \\frac{29{,}5 \\times 8^2}{8} = 236\\ \\text{kN·m}",
      "\\frac{M_{Ed}}{M_{pl,Rd}} = \\frac{236}{451} = 0{,}52 \\ \\Rightarrow\\ \\text{marge suffisante pour une connexion partielle}",
    ],
    conclusion: "La poutre est largement suffisante en flexion : on peut réduire la connexion (connexion partielle) ou envisager un profilé plus léger, après vérification de la flèche et des vibrations.",
  },
  summary: {
    content: `### La poutre mixte en 5 points
1. Dalle comprimée + profilé tendu + **connecteurs**.
2. $b_{eff} = b_0 + \\sum \\min(L_e/8 ; b_i)$.
3. Axe neutre dans la dalle si $N_{c,f} \\ge N_{pl,a}$, puis $M_{pl,Rd} = N_{pl,a}(h_a/2 + h_c - z/2)$.
4. $P_{Rd}$ = min(rupture du goujon ; écrasement du béton) et $n = N_c / P_{Rd}$.
5. Vérifier aussi la **phase de construction**, la flèche et les vibrations.`,
  },
  key_points: {
    points: [
      'b_ei = min(L_e/8 ; b_i)',
      'Axe neutre dans la dalle si 0,85·f_cd·b_eff·h_c ≥ A_a·f_yd',
      'Goujon Ø19 en C25/30 : P_Rd ≈ 74 kN',
      "n ≈ 6 à court terme, 15 à 18 à long terme",
      'La section mixte double environ la résistance du profilé',
    ],
  },
  self_assessment: {
    objectives: [
      "Je sais calculer la largeur efficace d'une dalle",
      "Je sais localiser l'axe neutre plastique et calculer M_pl,Rd",
      "Je sais dimensionner la connexion par goujons",
      "Je connais les vérifications de la phase de construction",
      "J'ai réussi le quiz avec au moins 2 bonnes réponses sur 3",
    ],
  },
});
