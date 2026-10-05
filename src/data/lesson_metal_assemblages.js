// ── Lesson: Construction métallique — assemblages — Module 11 ────────────────
import { buildLesson } from './build_lesson.js';

export const lesson_metal_assemblages = buildLesson({
  moduleId: 11,
  slug: 'metal_assemblages',
  lessonIndex: 2,
  title: "Assemblages Métalliques : Boulons Ordinaires, Boulons Précontraints & Soudures (EC3-1-8)",
  subtitle: 'Module 11 — Construction Métallique',
  level: 'Avancé',
  duration: '14h',
  tags: ['Construction métallique', 'Assemblages', 'Boulons', 'Pression diamétrale', 'Boulons HR', 'Soudures', 'EC3-1-8'],
}, {
  definition: {
    title: 'Définition — Les nœuds d’une charpente',
    fr: 'Assemblages de construction métallique',
    en: 'Steel connections',
    metier: "Utilisée par les ingénieurs charpente, les bureaux d'études des entreprises de construction métallique et les contrôleurs techniques.",
    content: `Une charpente métallique est composée d'éléments fabriqués en atelier puis **assemblés** sur chantier. Les assemblages transmettent les efforts entre poutres, poteaux et contreventements.

### Les moyens d'assemblage
- **Boulons ordinaires** (classes 4.6 à 10.9) travaillant au cisaillement et à la pression diamétrale (contact tige-trou).
- **Boulons précontraints** (HR) : serrés à un effort contrôlé, ils transmettent l'effort par **frottement** entre les pièces ; aucun glissement.
- **Soudures** : cordons d'angle ou soudures bout à bout, réalisées de préférence en atelier.

### Le comportement d'un assemblage
On distingue les assemblages **articulés** (transmettent surtout l'effort tranchant), **rigides** (transmettent aussi le moment) et **semi-rigides**. Ce choix doit être cohérent avec le modèle de calcul de la structure.

> 💡 Les assemblages représentent une part importante du coût d'une charpente : simplifier et standardiser les nœuds fait gagner du temps de fabrication et de montage.`,
  },
  importance: {
    content: `- **Sécurité** : de nombreux effondrements de charpentes viennent d'un assemblage mal conçu ou mal exécuté, pas des barres.
- **Cohérence** : un nœud supposé rigide dans le modèle mais réalisé articulé fausse toute la répartition des efforts.
- **Fatigue** : les assemblages soudés soumis à des charges répétées (ponts roulants, ponts) sont sensibles à la fissuration.
- **Montage** : boulonner sur chantier et souder en atelier est la règle pour maîtriser qualité et délais.

> ⚠️ **À retenir** : la résistance d'un assemblage boulonné est souvent gouvernée par la pression diamétrale sur la pièce mince, pas par le boulon lui-même.`,
  },
  applications: {
    examples: [
      ['Attache poutre-poteau articulée', 'Cornières ou platine d’extrémité boulonnée sur l’âme du poteau.'],
      ['Encastrement de portique', 'Platine d’about soudée sur la traverse et boulonnée sur le poteau, avec raidisseurs.'],
      ['Contreventement', 'Gousset soudé et cornières boulonnées travaillant en traction.'],
      ['Pont routier', 'Boulons HR précontraints pour éviter tout glissement sous charges répétées.'],
      ['Pied de poteau', 'Platine soudée et tiges d’ancrage scellées dans le massif béton.'],
    ],
  },
  theory: {
    title: 'Théorie — Résistances de calcul (EC3-1-8)',
    content: `### 1. Boulon au cisaillement (par plan de cisaillement)
$$F_{v,Rd} = \\frac{\\alpha_v \\, f_{ub} \\, A_s}{\\gamma_{M2}}$$
$\\alpha_v = 0{,}6$ (classes 4.6, 5.6, 8.8) ou 0,5 (10.9) si le plan passe par le filetage ; $\\gamma_{M2} = 1{,}25$.

### 2. Pression diamétrale sur la pièce assemblée
$$F_{b,Rd} = \\frac{k_1 \\, \\alpha_b \\, f_u \\, d \\, t}{\\gamma_{M2}}$$
- $\\alpha_b = \\min(\\alpha_d \\, ; \\, f_{ub}/f_u \\, ; \\, 1)$ avec $\\alpha_d = e_1 / (3 d_0)$ pour un boulon d'extrémité et $p_1/(3 d_0) - 1/4$ pour un boulon intérieur.
- $k_1 = \\min(2{,}8 \\, e_2 / d_0 - 1{,}7 \\, ; \\, 2{,}5)$ pour un boulon de rive.

### 3. Boulon en traction et interaction
$$F_{t,Rd} = \\frac{0{,}9 \\, f_{ub} \\, A_s}{\\gamma_{M2}} \\qquad \\frac{F_{v,Ed}}{F_{v,Rd}} + \\frac{F_{t,Ed}}{1{,}4 \\, F_{t,Rd}} \\le 1$$

### 4. Boulon précontraint (assemblage résistant au glissement)
$$F_{p,C} = 0{,}7 \\, f_{ub} \\, A_s \\qquad F_{s,Rd} = \\frac{k_s \\, n \\, \\mu}{\\gamma_{M3}} F_{p,C}$$
$\\mu$ dépend de la préparation des surfaces (0,2 à 0,5).

### 5. Cordons de soudure d'angle (méthode simplifiée)
$$f_{vw,d} = \\frac{f_u / \\sqrt{3}}{\\beta_w \\, \\gamma_{M2}} \\qquad F_{w,Rd} = f_{vw,d} \\, a \\, L_{eff}$$

### 6. Pinces et entraxes
Minimums usuels : $e_1, e_2 \\ge 1{,}2 d_0$ ; $p_1 \\ge 2{,}2 d_0$ ; $p_2 \\ge 2{,}4 d_0$ ($d_0$ : diamètre du trou, $d$ + 2 mm pour M12 à M24).`,
  },
  formulas: {
    title: 'Formules essentielles — Assemblages (EC3-1-8)',
    formulas: [
      {
        name: 'Résistance au cisaillement d’un boulon',
        latex: "F_{v,Rd} = \\frac{\\alpha_v \\, f_{ub} \\, A_s}{\\gamma_{M2}}",
        description: 'Par plan de cisaillement, plan passant par la partie filetée.',
        vars: [
          ['\\alpha_v', 'Coefficient', '-', '0,6 (4.6, 5.6, 8.8) ; 0,5 (10.9).'],
          ['f_{ub}', 'Résistance à la traction du boulon', 'MPa', '800 (8.8), 1 000 (10.9).'],
          ['A_s', 'Section résistante', 'mm²', 'M16 : 157 ; M20 : 245 ; M24 : 353.'],
          ['\\gamma_{M2}', 'Coefficient partiel', '-', '1,25.'],
        ],
      },
      {
        name: 'Résistance à la pression diamétrale',
        latex: "F_{b,Rd} = \\frac{k_1 \\, \\alpha_b \\, f_u \\, d \\, t}{\\gamma_{M2}}",
        description: 'Écrasement du bord du trou dans la pièce assemblée.',
        vars: [
          ['k_1', 'Coefficient de pince latérale', '-', '≤ 2,5.'],
          ['\\alpha_b', 'Coefficient de pince longitudinale', '-', 'min(α_d ; f_ub/f_u ; 1).'],
          ['f_u', 'Résistance ultime de la pièce', 'MPa', 'S235 : 360 ; S355 : 470.'],
          ['d', 'Diamètre du boulon', 'mm', 'Diamètre nominal.'],
          ['t', 'Épaisseur de la pièce', 'mm', 'La plus mince des pièces en contact.'],
        ],
        rule: "Augmenter la pince e₁ jusqu'à 3 d₀ permet souvent d'atteindre α_b = 1.",
      },
      {
        name: 'Traction d’un boulon et interaction cisaillement-traction',
        latex: "F_{t,Rd} = \\frac{0{,}9 \\, f_{ub} \\, A_s}{\\gamma_{M2}} \\qquad \\frac{F_{v,Ed}}{F_{v,Rd}} + \\frac{F_{t,Ed}}{1{,}4 \\, F_{t,Rd}} \\le 1",
        description: 'Boulons de platines d’about ou d’attaches soumises à un moment.',
        vars: [
          ['F_{t,Rd}', 'Résistance en traction', 'kN', 'Par boulon.'],
          ['F_{v,Ed}, F_{t,Ed}', 'Efforts de calcul', 'kN', 'Cisaillement et traction dans le boulon.'],
        ],
      },
      {
        name: 'Boulon précontraint résistant au glissement',
        latex: "F_{p,C} = 0{,}7 \\, f_{ub} \\, A_s \\qquad F_{s,Rd} = \\frac{k_s \\, n \\, \\mu}{\\gamma_{M3}} \\, F_{p,C}",
        description: 'Effort transmis par frottement entre les pièces serrées.',
        vars: [
          ['F_{p,C}', 'Précontrainte de serrage', 'kN', 'Boulons 8.8 ou 10.9 uniquement.'],
          ['k_s', 'Coefficient de trou', '-', '1,0 pour des trous normaux.'],
          ['n', 'Nombre de surfaces de frottement', '-', '1 ou 2.'],
          ['\\mu', 'Coefficient de frottement', '-', 'Classe A : 0,5 ; B : 0,4 ; C : 0,3 ; D : 0,2.'],
          ['\\gamma_{M3}', 'Coefficient partiel', '-', '1,25 à l’ELU.'],
        ],
      },
      {
        name: 'Cordon de soudure d’angle (méthode simplifiée)',
        latex: "F_{w,Rd} = \\frac{f_u / \\sqrt{3}}{\\beta_w \\, \\gamma_{M2}} \\cdot a \\cdot L_{eff}",
        description: 'Résistance d’un cordon quelle que soit l’orientation de l’effort.',
        vars: [
          ['\\beta_w', 'Facteur de corrélation', '-', '0,80 (S235), 0,85 (S275), 0,90 (S355).'],
          ['a', 'Épaisseur de gorge', 'mm', '≥ 3 mm.'],
          ['L_{eff}', 'Longueur efficace', 'mm', 'Longueur hors cratères d’extrémité.'],
        ],
      },
    ],
  },
  stepbystep: {
    title: 'Calcul complet — Éclissage boulonné d’un plat tendu',
    problem: "Un plat de 10 mm en S235 (f_u = 360 MPa) est assemblé par 4 boulons M20 classe 8.8 (A_s = 245 mm², trous d₀ = 22 mm) alignés dans le sens de l'effort, un seul plan de cisaillement. Pinces : e₁ = 40 mm, e₂ = 35 mm, entraxe p₁ = 70 mm. Calculer la résistance de l'assemblage.",
    steps_demo: [
      { n: 1, text: "Cisaillement d'un boulon : F_v,Rd = 0,6 × 800 × 245 / 1,25 = 94,1 kN." },
      { n: 2, text: "Coefficient k₁ : min(2,8 × 35/22 − 1,7 ; 2,5) = min(2,75 ; 2,5) = 2,5." },
      { n: 3, text: "Boulon d'extrémité : α_d = 40 / 66 = 0,606 → F_b,Rd = 2,5 × 0,606 × 360 × 20 × 10 / 1,25 = 87,3 kN." },
      { n: 4, text: "Boulons intérieurs : α_d = 70/66 − 0,25 = 0,811 → F_b,Rd = 116,8 kN, mais F_v,Rd = 94,1 kN gouverne." },
      { n: 5, text: "Résistance (approche prudente) : 4 × min(87,3 ; 94,1) = 4 × 87,3 = 349 kN." },
      { n: 6, text: "Vérifier aussi la section nette du plat en traction et le cisaillement de bloc avant de conclure." },
    ],
    result_latex: "F_{v,Rd} = 94{,}1\\ \\text{kN} \\quad F_{b,Rd,ext} = 87{,}3\\ \\text{kN} \\quad F_{Rd,assemblage} \\approx 4 \\times 87{,}3 = 349\\ \\text{kN}",
  },
  units: {
    table: [
      ['Effort par boulon', 'kN', 'kip', '1 kN = 0,2248 kip'],
      ['Section résistante A_s', 'mm²', 'in²', 'M16 : 157 ; M20 : 245 ; M24 : 353 mm²'],
      ['Couple de serrage', 'N·m', 'lb·ft', '1 N·m = 0,7376 lb·ft'],
      ['Épaisseur de gorge', 'mm', 'in', 'a = 0,7 × côté du cordon (cordon isocèle)'],
      ['Résistance des boulons', 'MPa', 'ksi', 'Classe 8.8 : f_ub = 800 MPa, f_yb = 640 MPa'],
    ],
    note: "La classe d'un boulon se lit directement : 8.8 → f_ub = 8 × 100 = 800 MPa et f_yb = 0,8 × 800 = 640 MPa.",
  },
  hypotheses: {
    items: [
      ['info', 'Les résistances supposent des trous normaux et des pinces conformes aux minimums de l’EC3-1-8.'],
      ['info', 'L’effort est supposé réparti également entre les boulons (assemblage ductile, longueur limitée).'],
      ['warning', 'Pour les assemblages longs (L > 15 d), la résistance des boulons doit être réduite.'],
      ['warning', 'Les boulons précontraints exigent un serrage contrôlé (méthode du couple ou combinée) et des surfaces préparées.'],
      ['tip', 'Vérifiez systématiquement les pièces assemblées (section nette, cisaillement de bloc), pas seulement les boulons.'],
    ],
  },
  simple_examples: {
    examples: [
      {
        title: 'Exemple 1 : traction d’un boulon M24 10.9',
        given: 'A_s = 353 mm², f_ub = 1 000 MPa',
        find: 'F_t,Rd',
        solution_latex: "F_{t,Rd} = \\frac{0{,}9 \\times 1\\,000 \\times 353}{1{,}25} = 254\\ \\text{kN}",
        result: '254 kN par boulon.',
      },
      {
        title: 'Exemple 2 : boulon HR M20 10.9',
        given: 'A_s = 245 mm², surfaces de classe A (μ = 0,5), 1 surface de frottement',
        find: 'F_p,C et F_s,Rd',
        solution_latex: "F_{p,C} = 0{,}7 \\times 1\\,000 \\times 245 = 171{,}5\\ \\text{kN} \\qquad F_{s,Rd} = \\frac{1 \\times 1 \\times 0{,}5}{1{,}25} \\times 171{,}5 = 68{,}6\\ \\text{kN}",
        result: '68,6 kN transmis par frottement, sans aucun glissement.',
      },
      {
        title: 'Exemple 3 : double cordon de soudure',
        given: 'S235 (f_u = 360 MPa, β_w = 0,80), a = 5 mm, 2 cordons de 200 mm',
        find: 'F_w,Rd',
        solution_latex: "f_{vw,d} = \\frac{360/\\sqrt{3}}{0{,}80 \\times 1{,}25} = 207{,}8\\ \\text{MPa} \\qquad F_{w,Rd} = 207{,}8 \\times 5 \\times 400 = 415{,}7\\ \\text{kN}",
        result: '≈ 416 kN.',
      },
    ],
  },
  real_examples: {
    title: 'Exemple réel — Passerelles du Hyatt Regency (Kansas City, 1981)',
    examples: [
      {
        context: 'Passerelles suspendues dans le hall d’un hôtel, 114 morts',
        scenario: "Le détail prévu (une tige continue portant les deux passerelles) a été remplacé en cours de fabrication par deux tiges décalées. L'écrou de la passerelle supérieure supportait alors le poids des deux passerelles et a traversé la poutre-caisson.",
        decomposition_latex: "\\text{Tige continue : } F_{écrou} = P \\qquad \\text{Tiges décalées : } F_{écrou} = 2P",
        lesson: "Une modification d'assemblage, même anodine en apparence, doit être recalculée et validée par l'ingénieur ; le détail d'assemblage est aussi important que le dimensionnement des barres.",
      },
    ],
  },
  diagrams: {
    title: 'Schéma de principe — Vérification d’un assemblage boulonné',
    diagram_description: [
      'Efforts : effort tranchant, effort normal et moment transmis par le nœud',
      'Répartition : effort par boulon (tranchant, traction)',
      'Boulons : cisaillement F_v,Rd et traction F_t,Rd, interaction',
      'Pièces : pression diamétrale F_b,Rd, section nette, cisaillement de bloc',
      'Géométrie : pinces et entraxes conformes',
      'Soudures : cordons d’attache des platines et goussets',
    ],
  },
  mistakes: {
    items: [
      ['Oublier la pression diamétrale', 'Résistance surestimée sur pièces minces', 'Comparer F_v,Rd et F_b,Rd pour chaque boulon et retenir la plus faible.'],
      ['Pinces trop faibles', 'Déchirure du bord de la pièce', 'Respecter e₁, e₂ ≥ 1,2 d₀ (et viser 1,5 à 3 d₀).'],
      ['Modifier un détail sans recalcul', 'Effort doublé dans un élément (cas Hyatt Regency)', 'Toute modification d’assemblage passe par l’ingénieur structure.'],
    ],
  },
  tips: {
    tips: [
      'Standardisez : un même diamètre de boulon (M16 ou M20) pour tout le projet évite les erreurs de montage.',
      'Soudez en atelier, boulonnez sur chantier.',
      'Les boulons HR sont indispensables sous charges répétées ou alternées (ponts roulants, séisme).',
      "Prévoyez l'accès des outils de serrage : un boulon inaccessible est un boulon mal serré.",
    ],
  },
  norms: {
    norms: [
      ['NF EN 1993-1-8', 'Eurocode 3 : calcul des assemblages.'],
      ['NF EN 1090-2', 'Exécution des structures en acier (tolérances, soudage, serrage).'],
      ['NF EN 14399', 'Boulons de construction à haute résistance pour précontrainte.'],
      ['NF EN 15048', 'Boulons de construction non précontraints.'],
      ['NF EN ISO 5817', 'Soudage : niveaux de qualité des défauts.'],
    ],
  },
  exercises: {
    exercises: [
      {
        level: 1,
        text: 'Calculer F_v,Rd d’un boulon M16 classe 8.8 (A_s = 157 mm²), un plan de cisaillement.',
        hint: 'α_v = 0,6.',
        answer_latex: "F_{v,Rd} = \\frac{0{,}6 \\times 800 \\times 157}{1{,}25} = 60{,}3\\ \\text{kN}",
        answer_text: 'F_v,Rd ≈ 60 kN.',
      },
      {
        level: 2,
        text: 'Un boulon M20 8.8 reprend F_v,Ed = 50 kN et F_t,Ed = 70 kN. Vérifier l’interaction (F_v,Rd = 94,1 kN ; F_t,Rd = 141,1 kN).',
        hint: 'F_v/F_v,Rd + F_t/(1,4 F_t,Rd) ≤ 1.',
        answer_latex: "\\frac{50}{94{,}1} + \\frac{70}{1{,}4 \\times 141{,}1} = 0{,}531 + 0{,}354 = 0{,}885 \\le 1",
        answer_text: 'Vérifié (taux 0,89).',
      },
      {
        level: 3,
        text: 'Combien de boulons HR M20 10.9 (F_s,Rd = 68,6 kN par surface) faut-il pour transmettre 500 kN par un couvre-joint double (2 surfaces de frottement) ?',
        hint: 'Avec n = 2, F_s,Rd double.',
        answer_latex: "F_{s,Rd} = 2 \\times 68{,}6 = 137{,}2\\ \\text{kN} \\qquad n = \\frac{500}{137{,}2} = 3{,}6 \\Rightarrow 4\\ \\text{boulons}",
        answer_text: '4 boulons HR M20 10.9 de chaque côté du joint.',
      },
    ],
  },
  quiz: {
    title: 'Quiz — Assemblages',
    questions: [
      { q: 'Que signifie la classe 10.9 d’un boulon ?', options: ['f_ub = 1 000 MPa et f_yb = 900 MPa', 'Diamètre 10, longueur 9', 'f_ub = 109 MPa'], correct: 0, explain: '10 × 100 = 1 000 MPa et 0,9 × 1 000 = 900 MPa.' },
      { q: 'Comment un boulon précontraint transmet-il l’effort ?', options: ['Par cisaillement de la tige', 'Par frottement entre les pièces serrées', 'Par soudure'], correct: 1, explain: 'La précontrainte serre les pièces : l’effort passe par frottement sans glissement.' },
      { q: 'Quel est le coefficient γ_M2 des assemblages ?', options: ['1,00', '1,10', '1,25'], correct: 2, explain: 'γ_M2 = 1,25 pour les boulons, soudures et la pression diamétrale.' },
    ],
  },
  exam_questions: {
    questions: [
      'Comparez boulons ordinaires et boulons précontraints : fonctionnement, domaines d’emploi, exécution.',
      'Dimensionnez un assemblage boulonné de contreventement en vérifiant boulons et pièces.',
      'Calculez un assemblage soudé par cordons d’angle et discutez les dispositions de qualité.',
    ],
  },
  interview_questions: {
    questions: [
      ['Pourquoi préfère-t-on boulonner sur chantier ?', "Parce que le soudage sur chantier est plus difficile à contrôler (positions, météo, qualification, contrôles non destructifs) ; le boulonnage est rapide, démontable et vérifiable visuellement."],
      ['Qu’est-ce qu’un assemblage semi-rigide ?', "Un assemblage dont la rigidité en rotation est intermédiaire entre l'articulation et l'encastrement ; l'EC3-1-8 permet de calculer sa rigidité (méthode des composantes) et d'en tenir compte dans l'analyse globale."],
    ],
  },
  practical_case: {
    title: 'Cas pratique — Attache de contreventement',
    scenario: "Une diagonale de contreventement tendue transmet N_Ed = 260 kN à un gousset de 10 mm (S235) par des boulons M20 8.8 en simple cisaillement, alignés, avec e₁ = 50 mm, e₂ = 35 mm et p₁ = 70 mm.",
    description: 'Déterminer le nombre de boulons nécessaire.',
    resolutions: [
      "\\text{Extrémité : } \\alpha_d = \\frac{50}{66} = 0{,}758 \\Rightarrow F_{b,Rd} = \\frac{2{,}5 \\times 0{,}758 \\times 360 \\times 200}{1{,}25} = 109{,}1\\ \\text{kN}",
      "\\text{Résistance par boulon : } \\min(94{,}1 ; 109{,}1) = 94{,}1\\ \\text{kN}",
      "n = \\frac{260}{94{,}1} = 2{,}8 \\Rightarrow 3\\ \\text{boulons M20 8.8}",
    ],
    conclusion: 'Trois boulons M20 8.8 suffisent ; on vérifiera la section nette de la diagonale et du gousset, ainsi que le cisaillement de bloc du gousset.',
  },
  summary: {
    content: `### Les assemblages en 5 points
1. Boulon : $F_{v,Rd} = \\alpha_v f_{ub} A_s / \\gamma_{M2}$.
2. Pièce : pression diamétrale $F_{b,Rd} = k_1 \\alpha_b f_u d t / \\gamma_{M2}$.
3. Traction : $F_{t,Rd} = 0{,}9 f_{ub} A_s / \\gamma_{M2}$ et interaction.
4. Boulons HR : frottement $F_{s,Rd} = k_s n \\mu F_{p,C} / \\gamma_{M3}$.
5. Soudures : $f_{vw,d} = f_u / (\\sqrt{3} \\beta_w \\gamma_{M2})$.`,
  },
  key_points: {
    points: [
      'γ_M2 = 1,25',
      'M20 8.8 : F_v,Rd ≈ 94 kN (un plan, filetage)',
      'Pinces e₁, e₂ ≥ 1,2 d₀',
      'F_p,C = 0,7·f_ub·A_s',
      'Soudure S235 : f_vw,d ≈ 208 MPa',
    ],
  },
  self_assessment: {
    objectives: [
      'Je sais calculer la résistance d’un boulon au cisaillement et en traction',
      'Je sais vérifier la pression diamétrale',
      'Je sais dimensionner un assemblage par boulons précontraints',
      'Je sais calculer un cordon de soudure d’angle',
      "J'ai réussi le quiz avec au moins 2 bonnes réponses sur 3",
    ],
  },
});
