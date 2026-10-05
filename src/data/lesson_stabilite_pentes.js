// ── Lesson: Stabilité des pentes et talus — Module 13 ─────────────────────────
import { buildLesson } from './build_lesson.js';

export const lesson_stabilite_pentes = buildLesson({
  moduleId: 13,
  slug: 'stabilite_pentes',
  lessonIndex: 5,
  title: "Stabilité des Pentes & Talus : Pente Infinie, Méthode des Tranches et Confortements",
  subtitle: 'Module 13 — Géotechnique & Mécanique des sols',
  level: 'Avancé',
  duration: '12h',
  diagramType: 'soil_profile',
  tags: ['Géotechnique', 'Talus', 'Glissement', 'Fellenius', 'Bishop', 'Coefficient de sécurité', 'Drainage'],
}, {
  definition: {
    title: 'Définition — Quand un versant glisse',
    fr: 'Stabilité des pentes (talus, remblais, versants naturels)',
    en: 'Slope stability',
    metier: "Utilisée pour les déblais et remblais routiers et ferroviaires, les digues, les barrages en terre, les plateformes et les versants instables.",
    content: `Un **glissement de terrain** se produit lorsque la résistance au cisaillement du sol le long d'une surface devient inférieure aux efforts qui tendent à faire glisser la masse vers le bas.

### Le coefficient de sécurité
$$F = \\frac{\\text{résistance mobilisable}}{\\text{effort moteur}}$$
- $F < 1$ : instabilité ;
- $F$ de 1,3 à 1,5 : valeurs usuelles exigées pour un talus permanent (ou coefficients partiels de l'EC7).

### Le rôle de l'eau
L'eau est le premier facteur déclenchant : elle augmente le poids des terres et surtout réduit la **contrainte effective** sur la surface de rupture, donc le frottement mobilisable. La plupart des glissements surviennent après de fortes pluies.

> 💡 Un sable sec reste stable sous une pente égale à son angle de frottement ; avec un écoulement parallèle à la pente, il ne tient plus qu'à environ la moitié de cette pente.`,
  },
  importance: {
    content: `- **Sécurité** : les glissements coupent des routes, emportent des habitations et peuvent faire des victimes.
- **Économie** : la pente choisie pour un déblai fixe les volumes de terrassement et les emprises foncières.
- **Ouvrages en terre** : digues et barrages en remblai doivent rester stables en crue et en vidange rapide.
- **Chantier** : les talus provisoires de fouilles sont une cause majeure d'accidents par ensevelissement.

> ⚠️ **À retenir** : drainer un talus est souvent la solution la plus efficace et la moins chère pour le stabiliser.`,
  },
  applications: {
    examples: [
      ['Déblai autoroutier', 'Choix de la pente (3H/2V, 2H/1V) en fonction des caractéristiques mécaniques et de l’eau.'],
      ['Remblai sur versant', 'Redans d’ancrage, drainage et vérification des cercles de glissement.'],
      ['Digue de protection', 'Stabilité en crue (infiltration) et en décrue rapide.'],
      ['Fouille de bâtiment', 'Pente provisoire ou blindage selon la profondeur et la cohésion.'],
      ['Versant instable', 'Confortement par tranchées drainantes, masque poids ou clouage.'],
    ],
  },
  theory: {
    title: 'Théorie — Pente infinie et méthode des tranches',
    content: `### 1. Critère de rupture de Mohr-Coulomb
$$\\tau_f = c' + \\sigma' \\tan\\varphi'$$

### 2. Pente infinie (glissement plan parallèle à la surface)
- Sol sec et sans cohésion : $F = \\dfrac{\\tan\\varphi'}{\\tan\\beta}$.
- Écoulement parallèle à la pente (nappe affleurante) : $F = \\dfrac{\\gamma'}{\\gamma_{sat}} \\cdot \\dfrac{\\tan\\varphi'}{\\tan\\beta} \\approx \\dfrac{1}{2} \\dfrac{\\tan\\varphi'}{\\tan\\beta}$.

### 3. Méthode des tranches (Fellenius)
On découpe la masse au-dessus d'un cercle de glissement en tranches verticales de poids $W$, de base inclinée de $\\alpha$ et de longueur $l$ :
$$F = \\frac{\\sum \\left[ c' l + (W \\cos\\alpha - u \\, l) \\tan\\varphi' \\right]}{\\sum W \\sin\\alpha}$$
On cherche le cercle le plus défavorable (F minimal). La méthode de **Bishop simplifiée**, plus précise, tient compte des efforts entre tranches ; les logiciels (Talren, Slide, Geostudio) automatisent la recherche.

### 4. Court terme et long terme
- **Court terme** (argile saturée chargée rapidement) : calcul en contraintes totales avec la cohésion non drainée $c_u$.
- **Long terme** : calcul en contraintes effectives ($c'$, $\\varphi'$, pressions d'eau).

### 5. Confortements
Drainage (tranchées, drains subhorizontaux), adoucissement de la pente, butée de pied (masque poids), clous et ancrages, végétalisation.`,
  },
  formulas: {
    title: 'Formules essentielles — Stabilité des pentes',
    formulas: [
      {
        name: 'Critère de Mohr-Coulomb',
        latex: "\\tau_f = c' + \\sigma' \\tan\\varphi'",
        description: 'Résistance au cisaillement en contraintes effectives.',
        vars: [
          ['\\tau_f', 'Résistance au cisaillement', 'kPa', 'Sur le plan de rupture.'],
          ["c'", 'Cohésion effective', 'kPa', 'Souvent faible (0 à 20 kPa) à long terme.'],
          ["\\sigma'", 'Contrainte normale effective', 'kPa', 'σ − u sur le plan.'],
          ["\\varphi'", 'Angle de frottement effectif', '°', 'Sables 30-40°, argiles 18-28°.'],
        ],
      },
      {
        name: 'Pente infinie — sol sec sans cohésion',
        latex: "F = \\frac{\\tan\\varphi'}{\\tan\\beta}",
        description: 'Glissement plan parallèle à la surface.',
        vars: [
          ['F', 'Coefficient de sécurité', '-', '≥ 1,3 à 1,5 pour un talus permanent.'],
          ['\\beta', 'Pente du talus', '°', 'Angle avec l’horizontale.'],
        ],
      },
      {
        name: 'Pente infinie — écoulement parallèle à la pente',
        latex: "F = \\frac{\\gamma'}{\\gamma_{sat}} \\cdot \\frac{\\tan\\varphi'}{\\tan\\beta}",
        description: "L'écoulement divise environ par deux le coefficient de sécurité.",
        vars: [
          ["\\gamma'", 'Poids volumique déjaugé', 'kN/m³', 'γ_sat − γ_w ≈ 10 kN/m³.'],
          ['\\gamma_{sat}', 'Poids volumique saturé', 'kN/m³', '≈ 20 kN/m³.'],
        ],
        rule: "Un talus stable à sec avec F = 1,2 devient instable (F ≈ 0,6) si une nappe affleure et s'écoule le long de la pente.",
      },
      {
        name: 'Méthode des tranches de Fellenius',
        latex: "F = \\frac{\\sum \\left[ c' l + (W \\cos\\alpha - u \\, l) \\tan\\varphi' \\right]}{\\sum W \\sin\\alpha}",
        description: 'Coefficient de sécurité d’un cercle de glissement (méthode ordinaire, légèrement conservative).',
        vars: [
          ['W', 'Poids de la tranche', 'kN/m', 'Par mètre de longueur de talus.'],
          ['\\alpha', 'Inclinaison de la base de la tranche', '°', 'Négative en pied de cercle.'],
          ['l', 'Longueur de la base', 'm', 'b / cos α (b = largeur de la tranche).'],
          ['u', 'Pression interstitielle à la base', 'kPa', 'Nulle si sol sec.'],
        ],
      },
    ],
  },
  stepbystep: {
    title: 'Calcul complet — Cercle de glissement par la méthode de Fellenius',
    problem: "Un cercle de glissement découpe 4 tranches (sol sec, c' = 10 kPa, φ' = 25°) : (W, α, l) = (120 kN/m, −5°, 2,0 m) ; (250 kN/m, 15°, 2,1 m) ; (280 kN/m, 35°, 2,5 m) ; (150 kN/m, 55°, 3,3 m). Calculer F.",
    steps_demo: [
      { n: 1, text: "Efforts moteurs W sin α : −10,5 + 64,7 + 160,6 + 122,9 = 337,7 kN/m." },
      { n: 2, text: "Composantes normales W cos α : 119,5 + 241,5 + 229,4 + 86,0 = 676,4 kN/m." },
      { n: 3, text: "Frottement : 676,4 × tan 25° = 676,4 × 0,466 = 315,4 kN/m." },
      { n: 4, text: "Cohésion : 10 × (2,0 + 2,1 + 2,5 + 3,3) = 10 × 9,9 = 99,0 kN/m." },
      { n: 5, text: "F = (315,4 + 99,0) / 337,7 = 1,23." },
      { n: 6, text: "Conclusion : F = 1,23 < 1,5 exigé pour un talus permanent → adoucir la pente ou drainer, puis tester d'autres cercles." },
    ],
    result_latex: "F = \\frac{99{,}0 + 676{,}4 \\times \\tan 25°}{337{,}7} = \\frac{414{,}4}{337{,}7} = 1{,}23",
  },
  units: {
    table: [
      ['Pente', '° ou H/V', '-', '2H/1V = 26,6° ; 3H/2V = 33,7° ; 1H/1V = 45°'],
      ['Cohésion', 'kPa', 'psf', '1 kPa = 20,9 psf'],
      ['Poids d’une tranche', 'kN/m', 'kip/ft', '1 kN/m = 0,0685 kip/ft'],
      ['Angle de frottement', '°', '°', 'tan 30° = 0,577'],
      ['Pression interstitielle', 'kPa', 'psf', 'u = γ_w × hauteur d’eau'],
    ],
    note: 'Les pentes de talus s’expriment souvent en « nH/1V » (n mètres horizontaux pour 1 m vertical).',
  },
  hypotheses: {
    items: [
      ['info', 'Calcul en déformation plane (tranche de 1 m d’épaisseur), rupture le long d’une surface prédéfinie (plan, cercle).'],
      ['info', 'Fellenius néglige les efforts entre tranches : il est un peu conservatif par rapport à Bishop.'],
      ['warning', 'Le cas le plus défavorable pour une digue est souvent la vidange rapide (pressions d’eau maintenues dans le remblai).'],
      ['warning', 'Les argiles surconsolidées fissurées perdent leur cohésion avec le temps : prenez c′ prudente à long terme.'],
      ['tip', 'Une auscultation par inclinomètres et piézomètres confirme le mécanisme et l’efficacité du confortement.'],
    ],
  },
  simple_examples: {
    examples: [
      {
        title: 'Exemple 1 : talus sableux sec',
        given: "β = 30°, φ' = 35°, c' = 0",
        find: 'F',
        solution_latex: "F = \\frac{\\tan 35°}{\\tan 30°} = \\frac{0{,}700}{0{,}577} = 1{,}21",
        result: 'F = 1,21 : insuffisant pour un talus permanent.',
      },
      {
        title: 'Exemple 2 : même talus avec écoulement',
        given: "γ' = 10,2 kN/m³, γ_sat = 20 kN/m³",
        find: 'F',
        solution_latex: "F = \\frac{10{,}2}{20} \\times 1{,}21 = 0{,}62",
        result: 'F = 0,62 : glissement certain.',
      },
      {
        title: 'Exemple 3 : pente admissible',
        given: "φ' = 30°, sol sec, F visé = 1,5",
        find: 'La pente maximale',
        solution_latex: "\\tan\\beta = \\frac{\\tan 30°}{1{,}5} = 0{,}385 \\Rightarrow \\beta = 21°",
        result: 'β ≤ 21°, soit environ 2,6H/1V.',
      },
    ],
  },
  real_examples: {
    title: 'Exemple réel — Glissement du Vajont (Italie, 1963)',
    examples: [
      {
        context: 'Barrage-voûte de 262 m, retenue mise en eau à partir de 1960',
        scenario: "La montée du plan d'eau a augmenté les pressions interstitielles dans un versant calcaire comportant des couches argileuses inclinées vers la retenue. 270 millions de m³ ont glissé dans le lac, provoquant une vague qui a franchi le barrage et détruit Longarone : environ 2 000 morts.",
        decomposition_latex: "u \\uparrow \\Rightarrow \\sigma' \\downarrow \\Rightarrow \\tau_f \\downarrow \\Rightarrow F < 1",
        lesson: "Le barrage a résisté, mais la stabilité du versant n'avait pas été maîtrisée : les pressions d'eau gouvernent la stabilité et les signes de mouvement doivent être pris au sérieux.",
      },
    ],
  },
  diagrams: {
    title: 'Schéma de principe — Étude de stabilité d’un talus',
    diagram_description: [
      'Géométrie : hauteur, pente, couches de sol',
      "Paramètres : γ, c', φ' (long terme) ou c_u (court terme)",
      'Hydraulique : nappe, écoulement, pressions interstitielles u',
      'Mécanisme : plan, cercle ou surface quelconque',
      'Calcul : Fellenius, Bishop ou logiciel, recherche du F minimal',
      'Confortement : drainage, reprofilage, butée de pied, clouage',
    ],
  },
  mistakes: {
    items: [
      ['Ignorer la nappe ou les écoulements', 'Coefficient de sécurité surestimé de moitié', 'Prendre le niveau d’eau le plus défavorable (après fortes pluies).'],
      ['Ne calculer qu’un seul cercle', 'Le cercle critique est manqué', 'Rechercher systématiquement le cercle de F minimal.'],
      ['Utiliser c_u à long terme', 'Résistance surestimée dans les argiles', 'Vérifier aussi le long terme en contraintes effectives.'],
    ],
  },
  tips: {
    tips: [
      'Repère : un talus de déblai en sol meuble se conçoit souvent entre 3H/2V et 2H/1V.',
      'Les eaux de surface doivent être collectées en crête de talus pour ne pas s’infiltrer.',
      'Une butée de pied en enrochements stabilise souvent un glissement en cours tout en drainant.',
      'Pour une fouille de plus de 1,30 m avec des ouvriers dedans, un blindage ou une pente adaptée est obligatoire.',
    ],
  },
  norms: {
    norms: [
      ['NF EN 1997-1 §11', 'Eurocode 7 : stabilité générale des pentes et talus.'],
      ['NF P 94-270', 'Ouvrages de soutènement : remblais renforcés et massifs en sol cloué.'],
      ['Guide technique « Stabilisation des glissements de terrain » (LCPC)', 'Méthodes de diagnostic et de confortement.'],
      ['Code du travail (art. R.4534-24 et suivants)', 'Prévention des éboulements dans les fouilles.'],
    ],
  },
  exercises: {
    exercises: [
      {
        level: 1,
        text: "Calculer F d'une pente infinie sèche à 25° dans un sol de φ' = 32°, c' = 0.",
        hint: "F = tan φ' / tan β.",
        answer_latex: "F = \\frac{\\tan 32°}{\\tan 25°} = \\frac{0{,}625}{0{,}466} = 1{,}34",
        answer_text: 'F ≈ 1,34.',
      },
      {
        level: 2,
        text: 'Quelle est la pente maximale d’un talus sableux (φ′ = 33°) soumis à un écoulement parallèle, pour F = 1,3 (γ′/γ_sat = 0,5) ?',
        hint: "tan β = 0,5 × tan φ' / F.",
        answer_latex: "\\tan\\beta = \\frac{0{,}5 \\times 0{,}649}{1{,}3} = 0{,}250 \\Rightarrow \\beta = 14°",
        answer_text: 'β ≈ 14° (environ 4H/1V) : l’eau impose une pente très douce.',
      },
      {
        level: 3,
        text: "Reprendre l'étape pas à pas avec une pression interstitielle de 15 kPa sous chaque tranche. Calculer F.",
        hint: 'Retirer u·l·tan φ′ de la résistance.',
        answer_latex: "\\sum u l \\tan\\varphi' = 15 \\times 9{,}9 \\times 0{,}466 = 69{,}2 \\qquad F = \\frac{414{,}4 - 69{,}2}{337{,}7} = 1{,}02",
        answer_text: 'F ≈ 1,02 : le talus est à la limite de la rupture.',
      },
    ],
  },
  quiz: {
    title: 'Quiz — Stabilité des pentes',
    questions: [
      { q: 'Quel est le principal facteur déclenchant des glissements ?', options: ['Le vent', "L'eau", 'Le gel uniquement'], correct: 1, explain: "Les pressions d'eau réduisent la contrainte effective et donc le frottement." },
      { q: "Pour un sable sec sans cohésion, quelle pente est à l'équilibre limite ?", options: ["β = φ'", "β = φ'/2", 'β = 45°'], correct: 0, explain: "F = tan φ'/tan β = 1 quand β = φ'." },
      { q: 'Que néglige la méthode de Fellenius ?', options: ['Le poids des tranches', 'Les efforts entre tranches', 'La cohésion'], correct: 1, explain: 'Elle ignore les efforts inter-tranches, contrairement à Bishop.' },
    ],
  },
  exam_questions: {
    questions: [
      'Établissez le coefficient de sécurité d’une pente infinie, à sec puis avec écoulement parallèle.',
      'Présentez la méthode des tranches de Fellenius et ses hypothèses ; comparez-la à Bishop.',
      'Proposez et justifiez des solutions de confortement pour un glissement de remblai routier.',
    ],
  },
  interview_questions: {
    questions: [
      ['Un glissement s’est déclenché sous une route après des pluies. Que faites-vous ?', "Mise en sécurité (fermeture, déviation), observation et levé du glissement, mise en place d'inclinomètres et de piézomètres, rétro-analyse (F = 1 au moment de la rupture) pour caler les paramètres, puis confortement : drainage en priorité, butée de pied ou reprofilage."],
      ['Pourquoi la vidange rapide est-elle critique pour une digue ?', "Parce que l'eau extérieure qui stabilisait le parement disparaît alors que les pressions interstitielles restent élevées dans le remblai : les forces motrices augmentent sans gain de résistance."],
    ],
  },
  practical_case: {
    title: 'Cas pratique — Conception d’un déblai',
    scenario: "Déblai de 8 m de hauteur dans un limon argileux : c' = 8 kPa, φ' = 26°, γ = 20 kN/m³. Le calcul aux cercles donne F = 1,15 pour une pente 3H/2V avec la nappe en pied.",
    description: 'Proposer des solutions pour atteindre F ≥ 1,5.',
    resolutions: [
      "\\text{Pente 2H/1V : } F \\approx 1{,}35 \\ \\text{(gain par réduction des efforts moteurs)}",
      "\\text{Ajout de drains subhorizontaux (abaissement de la nappe) : } F \\approx 1{,}55",
      "\\text{Alternative : maintien 3H/2V + masque drainant en enrochements en pied : } F \\approx 1{,}5",
    ],
    conclusion: 'On retient une pente 2H/1V avec drainage (F ≈ 1,55) ; si l’emprise est limitée, le masque drainant en pied permet de conserver la pente 3H/2V.',
  },
  summary: {
    content: `### La stabilité des pentes en 5 points
1. $F$ = résistance / effort moteur ; viser 1,3 à 1,5.
2. Mohr-Coulomb : $\\tau_f = c' + \\sigma' \\tan\\varphi'$.
3. Pente infinie : $F = \\tan\\varphi' / \\tan\\beta$, divisé par environ 2 avec écoulement.
4. Fellenius : $F = \\sum[c'l + (W\\cos\\alpha - ul)\\tan\\varphi'] / \\sum W \\sin\\alpha$.
5. Conforter : **drainer** d'abord, puis reprofiler, butée, clouage.`,
  },
  key_points: {
    points: [
      "τ_f = c' + σ' tan φ'",
      "Sable sec : β_max = φ'",
      "Écoulement parallèle : F divisé par ≈ 2",
      'Rechercher le cercle de F minimal',
      'Le drainage est le confortement le plus efficace',
    ],
  },
  self_assessment: {
    objectives: [
      'Je sais calculer F pour une pente infinie',
      'Je sais appliquer la méthode des tranches de Fellenius',
      "Je comprends le rôle de l'eau dans les glissements",
      'Je connais les techniques de confortement',
      "J'ai réussi le quiz avec au moins 2 bonnes réponses sur 3",
    ],
  },
});
