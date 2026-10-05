// ── Lesson: Maçonnerie porteuse (Eurocode 6) — Module 39 ─────────────────────
import { buildLesson } from './build_lesson.js';

export const lesson_maconnerie_ec6 = buildLesson({
  moduleId: 39,
  slug: 'maconnerie_ec6',
  lessonIndex: 1,
  title: "Maçonnerie Porteuse : Matériaux & Dimensionnement des Murs (Eurocode 6)",
  subtitle: "Module 39 — Maçonnerie & Structures en maçonnerie",
  level: 'Intermédiaire',
  duration: '10h',
  tags: ['Maçonnerie', 'Eurocode 6', 'Blocs béton', 'Briques', 'Mortier', 'Murs porteurs', 'Compression'],
}, {
  definition: {
    title: "Définition — Qu'est-ce qu'une maçonnerie porteuse ?",
    fr: 'Maçonnerie porteuse (murs en blocs, briques ou pierres hourdés au mortier)',
    en: 'Loadbearing masonry',
    metier: "Utilisée par les ingénieurs structure de bâtiment, les bureaux de contrôle et les entreprises de gros œuvre pour les maisons, petits collectifs et bâtiments scolaires.",
    content: `La **maçonnerie** est un assemblage d'**éléments** (blocs béton, briques de terre cuite, béton cellulaire, pierres) liés par un **mortier**. Lorsqu'un mur reprend les charges des planchers et de la toiture pour les descendre jusqu'aux fondations, on parle de **maçonnerie porteuse**.

### Un matériau qui travaille en compression
La maçonnerie résiste bien à la compression mais très mal à la traction : les joints de mortier s'ouvrent dès que le mur fléchit. Le dimensionnement consiste donc surtout à vérifier :
1. la **résistance en compression** du mur sous charges verticales ;
2. l'effet de l'**élancement** et des **excentricités** (le mur ne doit pas flamber) ;
3. la **résistance au cisaillement** des murs de contreventement.

> 💡 En France, l'essentiel des maisons individuelles et de nombreux bâtiments de moins de 5 niveaux sont construits en maçonnerie porteuse de blocs béton ou de briques.`,
  },
  importance: {
    content: `- **Économie** : un mur porteur fait à la fois structure, clos et support d'isolation ; il évite poteaux et poutres.
- **Sécurité** : une maçonnerie mal chaînée ou trop élancée peut s'effondrer brutalement (séisme, choc, tassement différentiel).
- **Réglementation** : l'Eurocode 6 (NF EN 1996) et le DTU 20.1 encadrent les matériaux, l'exécution et le calcul.
- **Inertie thermique** : les murs lourds stockent la chaleur et améliorent le confort d'été.

> ⚠️ **À retenir** : la résistance d'un mur dépend autant de la qualité d'exécution (joints remplis, aplomb, chaînages) que de la résistance des blocs.`,
  },
  applications: {
    examples: [
      ["Maison individuelle", "Murs extérieurs en blocs béton de 20 cm portant planchers et charpente, chaînés horizontalement à chaque niveau."],
      ["Petit collectif R+3", "Refends en briques ou blocs pleins porteurs, planchers en dalles alvéolées ou poutrelles-entrevous."],
      ["Bâtiment scolaire", "Murs porteurs en béton cellulaire avec isolation répartie, vérifiés en compression et au vent."],
      ["Mur de clôture et de soutènement léger", "Maçonnerie armée de blocs à bancher remplis de béton."],
      ["Réhabilitation", "Vérification de murs anciens en moellons avant création d'une ouverture."],
    ],
  },
  theory: {
    title: "Théorie — Des éléments au mur porteur",
    content: `### 1. Les éléments de maçonnerie
L'EC6 classe les éléments en **groupes 1 à 4** selon le pourcentage de vides : groupe 1 (pleins, ≤ 25 % de vides), groupe 2 (creux à alvéoles verticales, ≤ 55 %), etc. Leur résistance est donnée par la **résistance normalisée** $f_b$ (MPa), ramenée à un élément de référence de 100 × 100 mm séché à l'air.

### 2. Les mortiers
Les mortiers d'usage courant sont désignés par leur résistance : M5, M10, M15… ($f_m$ en MPa). Les mortiers de joints minces (collés) donnent des murs plus réguliers.

### 3. Résistance caractéristique de la maçonnerie
Pour un mortier d'usage courant :

$$f_k = K \\cdot f_b^{0{,}7} \\cdot f_m^{0{,}3}$$

$K$ dépend du type et du groupe d'élément (0,45 à 0,55 le plus souvent).

### 4. Résistance de calcul et élancement
$f_d = f_k / \\gamma_M$, avec $\\gamma_M$ compris entre 2,0 et 3,0 selon la catégorie d'élément et la classe d'exécution. La hauteur efficace $h_{ef} = \\rho_n \\cdot h$ tient compte du maintien du mur : $\\rho_2 = 0{,}75$ pour un mur tenu en tête et en pied par des planchers en béton. L'élancement $h_{ef}/t_{ef}$ ne doit pas dépasser 27.

### 5. Méthode simplifiée (NF EN 1996-3)
Pour les bâtiments courants (hauteur limitée, portées de planchers modérées), la résistance d'un mur sous charge verticale s'écrit :

$$N_{Rd} = c_A \\cdot f_d \\cdot A$$

avec $c_A = 0{,}50$ si $h_{ef}/t_{ef} \\le 18$ et $c_A = 0{,}36$ si $18 < h_{ef}/t_{ef} \\le 21$.`,
  },
  formulas: {
    title: "Formules essentielles — Maçonnerie (EC6)",
    formulas: [
      {
        name: "Résistance caractéristique en compression de la maçonnerie",
        latex: "f_k = K \\cdot f_b^{0{,}7} \\cdot f_m^{0{,}3}",
        description: "Valable pour un mortier d'usage courant (EN 1996-1-1, §3.6.1.2).",
        vars: [
          ['f_k', 'Résistance caractéristique de la maçonnerie', 'MPa', 'Résistance en compression du mur (éléments + mortier).'],
          ['K', 'Constante', '-', "0,55 éléments pleins (groupe 1), 0,45 à 0,52 éléments creux (groupe 2)."],
          ['f_b', 'Résistance normalisée des éléments', 'MPa', 'Donnée par le fabricant (marquage CE).'],
          ['f_m', 'Résistance du mortier', 'MPa', '5 pour un M5, 10 pour un M10.'],
        ],
        rule: "La résistance du mur est toujours bien plus faible que celle du bloc : un bloc de 10 MPa donne un mur d'environ 4 à 5 MPa.",
      },
      {
        name: "Résistance de calcul",
        latex: "f_d = \\frac{f_k}{\\gamma_M}",
        description: "Coefficient partiel élevé car l'exécution de la maçonnerie est très variable.",
        vars: [
          ['f_d', 'Résistance de calcul', 'MPa', 'Utilisée dans les vérifications ELU.'],
          ['\\gamma_M', 'Coefficient partiel', '-', "2,0 à 3,0 selon la catégorie d'élément et la classe d'exécution (annexe nationale)."],
        ],
      },
      {
        name: "Hauteur efficace et élancement",
        latex: "h_{ef} = \\rho_n \\cdot h \\qquad \\lambda = \\frac{h_{ef}}{t_{ef}} \\le 27",
        description: "Le maintien du mur par les planchers réduit sa hauteur de flambement.",
        vars: [
          ['h_{ef}', 'Hauteur efficace', 'm', 'Hauteur de flambement du mur.'],
          ['\\rho_n', 'Coefficient de réduction', '-', "0,75 si planchers béton en tête et en pied ; 1,0 si tête libre ou plancher bois non lié."],
          ['h', "Hauteur libre d'étage", 'm', 'Entre plancher et plafond.'],
          ['t_{ef}', 'Épaisseur efficace', 'm', "Épaisseur du mur (pour un mur double : formule spécifique)."],
        ],
      },
      {
        name: "Résistance d'un mur sous charge verticale (méthode simplifiée)",
        latex: "N_{Rd} = c_A \\cdot f_d \\cdot A",
        description: "NF EN 1996-3 : bâtiments courants, planchers de portée limitée, charges essentiellement verticales.",
        vars: [
          ['N_{Rd}', 'Effort normal résistant', 'kN', 'À comparer à la charge de calcul N_Ed.'],
          ['c_A', 'Coefficient de capacité', '-', '0,50 si λ ≤ 18 ; 0,36 si 18 < λ ≤ 21.'],
          ['f_d', 'Résistance de calcul', 'MPa', 'f_k / γ_M.'],
          ['A', 'Section brute du mur', 'mm²', 'Épaisseur × longueur.'],
        ],
        rule: "Pour un mur de 20 cm en blocs creux, la capacité est de l'ordre de 100 kN par mètre : largement suffisant pour une maison R+1.",
      },
      {
        name: "Résistance caractéristique au cisaillement",
        latex: "f_{vk} = f_{vk0} + 0{,}4 \\cdot \\sigma_d",
        description: "Pour les murs de contreventement (joints verticaux remplis).",
        vars: [
          ['f_{vk}', 'Résistance au cisaillement', 'MPa', 'Plafonnée selon le type d\'élément.'],
          ['f_{vk0}', 'Cohésion initiale', 'MPa', '0,10 à 0,30 selon élément et mortier.'],
          ['\\sigma_d', 'Contrainte de compression de calcul', 'MPa', 'La compression améliore le frottement des joints.'],
        ],
      },
    ],
  },
  stepbystep: {
    title: "Calcul complet — Mur porteur en blocs béton creux",
    problem: "Mur intérieur en blocs béton creux (groupe 2, K = 0,52, f_b = 4 MPa), mortier M10, épaisseur 200 mm, hauteur d'étage 2,60 m, planchers béton en tête et en pied, γM = 2,5. Charge de calcul N_Ed = 85 kN/m. Vérifier le mur.",
    steps_demo: [
      { n: 1, text: "Résistance caractéristique : f_k = 0,52 × 4^0,7 × 10^0,3 = 0,52 × 2,639 × 1,995 = 2,74 MPa." },
      { n: 2, text: "Résistance de calcul : f_d = 2,74 / 2,5 = 1,10 MPa." },
      { n: 3, text: "Hauteur efficace : h_ef = 0,75 × 2,60 = 1,95 m." },
      { n: 4, text: "Élancement : λ = 1,95 / 0,20 = 9,75 ≤ 18, donc c_A = 0,50." },
      { n: 5, text: "Résistance par mètre de mur : N_Rd = 0,50 × 1,10 × 200 × 1 000 = 110 000 N = 110 kN/m." },
      { n: 6, text: "Vérification : N_Ed = 85 kN/m ≤ 110 kN/m, taux de travail 77 % : le mur convient." },
    ],
    result_latex: "N_{Rd} = 0{,}50 \\times 1{,}10 \\times 200 \\times 1\\,000 = 110\\ \\text{kN/m} \\ \\ge\\ N_{Ed} = 85\\ \\text{kN/m} \\quad \\checkmark",
  },
  units: {
    table: [
      ['Résistance des éléments f_b', 'MPa', 'psi', '1 MPa = 145 psi ; blocs béton courants 4 à 12 MPa'],
      ['Résistance du mortier f_m', 'MPa', 'psi', 'M5 = 5 MPa, M10 = 10 MPa'],
      ['Charge linéique sur mur', 'kN/m', 'lbf/ft', '1 kN/m = 68,5 lbf/ft'],
      ['Épaisseur de mur', 'mm', 'in', 'Blocs de 15, 20 ou 25 cm'],
      ['Masse volumique', 'kg/m³', 'lb/ft³', 'Bloc creux ≈ 1 300, brique pleine ≈ 1 800, béton cellulaire ≈ 450'],
    ],
    note: "Les résistances f_b sont **normalisées** : vérifiez que la valeur du fabricant correspond bien à f_b (et non à la résistance moyenne brute).",
  },
  hypotheses: {
    items: [
      ['info', "La méthode simplifiée de l'EN 1996-3 suppose un bâtiment courant : hauteur limitée, portée des planchers modérée, charges de vent faibles."],
      ['info', "La formule de f_k suppose des joints horizontaux et verticaux remplis et un mortier d'usage courant."],
      ['warning', "Un mur en tête libre (pignon, plancher bois non lié) a un ρ_n de 1,0 : son élancement double presque."],
      ['warning', "Les charges concentrées (appui de poutre) doivent faire l'objet d'une vérification locale avec répartition à 60°."],
      ['tip', "Pour les murs fortement chargés, préférez des blocs pleins ou à bancher plutôt qu'augmenter l'épaisseur."],
    ],
  },
  simple_examples: {
    examples: [
      {
        title: "Exemple 1 : f_k d'une brique pleine",
        given: "Brique pleine (groupe 1, K = 0,55), f_b = 20 MPa, mortier M10",
        find: "La résistance caractéristique f_k",
        solution_latex: "f_k = 0{,}55 \\times 20^{0{,}7} \\times 10^{0{,}3} = 0{,}55 \\times 8{,}14 \\times 1{,}995 = 8{,}93\\ \\text{MPa}",
        result: "f_k ≈ 8,9 MPa : la maçonnerie est environ deux fois moins résistante que la brique seule.",
      },
      {
        title: "Exemple 2 : élancement d'un pignon",
        given: "Mur de 20 cm, hauteur 4,00 m, tête libre (ρ = 1,0)",
        find: "L'élancement et le coefficient c_A",
        solution_latex: "\\lambda = \\frac{1{,}0 \\times 4{,}00}{0{,}20} = 20 \\quad \\Rightarrow \\quad c_A = 0{,}36",
        result: "λ = 20 (entre 18 et 21) : la capacité chute de 28 % par rapport à un mur tenu en tête.",
      },
      {
        title: "Exemple 3 : descente de charge simple",
        given: "Plancher de 5 m de portée (G = 6 kN/m², Q = 1,5 kN/m²) reposant sur deux murs",
        find: "La charge ELU par mètre de mur",
        solution_latex: "N_{Ed} = (1{,}35 \\times 6 + 1{,}5 \\times 1{,}5) \\times \\frac{5}{2} = 10{,}35 \\times 2{,}5 = 25{,}9\\ \\text{kN/m}",
        result: "≈ 26 kN/m par niveau, à cumuler sur les étages supérieurs.",
      },
    ],
  },
  real_examples: {
    title: "Exemple réel — Résidence R+3 en briques porteuses",
    examples: [
      {
        context: "Résidence de 24 logements, refends porteurs en briques de 20 cm",
        scenario: "Les refends du rez-de-chaussée reprennent trois planchers et la toiture, soit N_Ed ≈ 160 kN/m. Briques de groupe 2 (f_b = 10 MPa, K = 0,45) et mortier M10 donnent f_k ≈ 4,5 MPa.",
        decomposition_latex: "f_d = \\frac{4{,}5}{2{,}5} = 1{,}8\\ \\text{MPa} \\qquad N_{Rd} = 0{,}50 \\times 1{,}8 \\times 200 \\times 1\\,000 = 180\\ \\text{kN/m} > 160",
        lesson: "Le choix d'un élément de plus forte résistance au rez-de-chaussée suffit ; les étages supérieurs, moins chargés, gardent l'élément standard.",
      },
    ],
  },
  diagrams: {
    title: "Schéma de principe — Vérification d'un mur porteur",
    description: "Démarche de dimensionnement d'un mur en maçonnerie.",
    diagram_description: [
      "Descente de charges : planchers, toiture et poids propre → N_Ed par mètre de mur",
      "Matériaux : f_b (élément) et f_m (mortier) → f_k = K·f_b^0,7·f_m^0,3",
      "Sécurité : f_d = f_k / γ_M",
      "Géométrie : h_ef = ρ_n·h puis élancement h_ef / t_ef",
      "Capacité : N_Rd = c_A·f_d·A",
      "Conclusion : N_Ed ≤ N_Rd, sinon élément plus résistant ou mur plus épais",
    ],
  },
  mistakes: {
    items: [
      ["Prendre la résistance du bloc comme résistance du mur", "f_b = 4 MPa n'est pas f_k", "Toujours calculer f_k avec la formule de l'EC6 (environ 2,7 MPa ici)."],
      ["Oublier le chaînage horizontal sous plancher", "Mur non tenu en tête, fissuration et instabilité", "Chaînage béton armé continu à chaque plancher et en tête de mur (DTU 20.1)."],
      ["Négliger l'appui concentré d'une poutre", "Écrasement local sous l'appui", "Prévoir un sommier en béton armé pour répartir la charge."],
    ],
  },
  tips: {
    tips: [
      "Un mur porteur ne se perce jamais sans étude : une ouverture doit être reprise par un linteau dimensionné.",
      "Les joints verticaux non remplis (blocs à emboîtement) réduisent la résistance au cisaillement : à vérifier pour les murs de contreventement.",
      "Sur chantier, vérifiez l'aplomb et l'alignement : un faux aplomb crée une excentricité qui réduit la capacité.",
      "Mouillez les briques par temps chaud pour éviter un séchage trop rapide du mortier.",
    ],
  },
  norms: {
    norms: [
      ['NF EN 1996-1-1', 'Eurocode 6 : règles générales pour la maçonnerie armée et non armée.'],
      ['NF EN 1996-3', 'Méthodes de calcul simplifiées pour les bâtiments courants.'],
      ['NF EN 771', "Spécifications des éléments de maçonnerie (terre cuite, béton, béton cellulaire, pierre)."],
      ['NF EN 998-2', 'Mortiers de montage des éléments de maçonnerie.'],
      ['NF DTU 20.1', "Ouvrages en maçonnerie de petits éléments : règles d'exécution, chaînages, parois."],
    ],
  },
  exercises: {
    exercises: [
      {
        level: 1,
        text: "Calculer f_k pour des blocs béton pleins (groupe 1, K = 0,55, f_b = 8 MPa) montés au mortier M5.",
        hint: "8^0,7 = 4,287 et 5^0,3 = 1,621.",
        answer_latex: "f_k = 0{,}55 \\times 4{,}287 \\times 1{,}621 = 3{,}82\\ \\text{MPa}",
        answer_text: "f_k ≈ 3,8 MPa.",
      },
      {
        level: 2,
        text: "Un mur de 15 cm, haut de 2,50 m, est tenu par deux planchers béton. Calculer h_ef, l'élancement et c_A.",
        hint: "ρ₂ = 0,75.",
        answer_latex: "h_{ef} = 0{,}75 \\times 2{,}50 = 1{,}875\\ \\text{m} \\qquad \\lambda = \\frac{1{,}875}{0{,}15} = 12{,}5 \\le 18 \\Rightarrow c_A = 0{,}50",
        answer_text: "h_ef = 1,88 m ; λ = 12,5 ; c_A = 0,50.",
      },
      {
        level: 3,
        text: "Avec f_k = 3,82 MPa, γM = 2,5 et le mur de l'exercice 2, calculer N_Rd par mètre et la charge ELU admissible.",
        hint: "f_d = f_k / γM puis N_Rd = c_A·f_d·A.",
        answer_latex: "f_d = 1{,}53\\ \\text{MPa} \\qquad N_{Rd} = 0{,}50 \\times 1{,}53 \\times 150 \\times 1\\,000 = 114\\,600\\ \\text{N} = 115\\ \\text{kN/m}",
        answer_text: "N_Rd ≈ 115 kN/m.",
      },
    ],
  },
  quiz: {
    title: 'Quiz — Maçonnerie porteuse',
    questions: [
      { q: "Pourquoi la maçonnerie est-elle surtout dimensionnée en compression ?", options: ["Parce qu'elle résiste très mal à la traction", "Parce qu'elle est trop lourde", "Parce que l'EC6 interdit la flexion"], correct: 0, explain: "Les joints de mortier s'ouvrent sous traction : le mur doit rester comprimé." },
      { q: "Que vaut ρ₂ pour un mur tenu en tête et en pied par des planchers béton ?", options: ['1,00', '0,75', '0,50'], correct: 1, explain: "Les planchers béton encastrent partiellement le mur : h_ef = 0,75·h." },
      { q: "Quel est l'élancement maximal admis par l'EC6 ?", options: ['18', '27', '50'], correct: 1, explain: "h_ef / t_ef ≤ 27 pour un mur soumis principalement à des charges verticales." },
    ],
  },
  exam_questions: {
    questions: [
      "Expliquez la formule f_k = K·f_b^0,7·f_m^0,3 et l'influence respective de l'élément et du mortier.",
      "Définissez la hauteur efficace d'un mur et donnez les valeurs de ρ_n pour différents maintiens.",
      "Dimensionnez un mur porteur de rez-de-chaussée d'une maison R+1 par la méthode simplifiée de l'EN 1996-3.",
    ],
  },
  interview_questions: {
    questions: [
      ["Un client veut supprimer un mur porteur. Que faites-vous ?", "Je fais une descente de charges pour connaître l'effort repris, puis je dimensionne une poutre (béton, acier ou bois) avec ses appuis et un étaiement provisoire pendant les travaux. Je vérifie aussi la stabilité d'ensemble (contreventement)."],
      ["Pourquoi chaîne-t-on les murs en maçonnerie ?", "Les chaînages horizontaux et verticaux ceinturent le bâtiment, maintiennent les murs en tête, répartissent les charges et limitent la fissuration due aux tassements et au séisme."],
    ],
  },
  practical_case: {
    title: "Cas pratique — Choix de l'élément pour un R+2",
    scenario: "Bâtiment R+2, refends en blocs creux de 20 cm (K = 0,52), mortier M10, hauteur d'étage 2,70 m, planchers béton, γM = 2,5. Charge ELU au rez-de-chaussée : 120 kN/m.",
    description: "Choisir la résistance normalisée f_b minimale du bloc pour le rez-de-chaussée.",
    resolutions: [
      "\\lambda = \\frac{0{,}75 \\times 2{,}70}{0{,}20} = 10{,}1 \\le 18 \\ \\Rightarrow\\ c_A = 0{,}50",
      "f_{d,requis} = \\frac{120\\,000}{0{,}50 \\times 200 \\times 1\\,000} = 1{,}20\\ \\text{MPa} \\ \\Rightarrow\\ f_{k,requis} = 3{,}0\\ \\text{MPa}",
      "f_b^{0{,}7} = \\frac{3{,}0}{0{,}52 \\times 1{,}995} = 2{,}89 \\ \\Rightarrow\\ f_b = 2{,}89^{1/0{,}7} = 4{,}55\\ \\text{MPa}",
    ],
    conclusion: "Il faut f_b ≥ 4,6 MPa : on retient un bloc de classe 6 MPa au rez-de-chaussée (le bloc de 4 MPa ne suffit pas).",
  },
  summary: {
    content: `### La maçonnerie porteuse en 5 points
1. Matériau de **compression** : la traction est négligée.
2. $f_k = K f_b^{0{,}7} f_m^{0{,}3}$ puis $f_d = f_k/\\gamma_M$.
3. $h_{ef} = \\rho_n h$ et élancement $\\le 27$.
4. Méthode simplifiée : $N_{Rd} = c_A f_d A$.
5. **Chaînages** et qualité d'exécution conditionnent la sécurité.`,
  },
  key_points: {
    points: [
      "f_k = K·f_b^0,7·f_m^0,3 (mortier courant)",
      "γM de 2,0 à 3,0 : exécution très variable",
      "ρ₂ = 0,75 avec planchers béton en tête et en pied",
      "c_A = 0,50 si λ ≤ 18, 0,36 si 18 < λ ≤ 21",
      "Chaînage horizontal à chaque plancher",
    ],
  },
  self_assessment: {
    objectives: [
      "Je sais calculer la résistance caractéristique f_k d'une maçonnerie",
      "Je sais déterminer la hauteur efficace et l'élancement d'un mur",
      "Je sais vérifier un mur par la méthode simplifiée de l'EN 1996-3",
      "Je connais le rôle des chaînages",
      "J'ai réussi le quiz avec au moins 2 bonnes réponses sur 3",
    ],
  },
});
