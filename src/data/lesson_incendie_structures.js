// ── Lesson: Résistance au feu des structures — Module 43 ─────────────────────
import { buildLesson } from './build_lesson.js';

export const lesson_incendie_structures = buildLesson({
  moduleId: 43,
  slug: 'incendie_structures',
  lessonIndex: 3,
  title: "Résistance au Feu des Structures : Critères R-E-I, Béton (Enrobage), Acier (Température Critique), Bois (Carbonisation)",
  subtitle: 'Module 43 — Sécurité incendie & résistance au feu',
  level: 'Avancé',
  duration: '6h',
  diagramType: 'none',
  tags: ['Résistance au feu', 'REI', 'Eurocode 2-1-2', 'Eurocode 3-1-2', 'Eurocode 5-1-2', 'Température critique', 'Carbonisation'],
}, {
  definition: {
    title: 'Définition — Tenir debout pendant l’incendie',
    fr: 'Résistance au feu des structures',
    en: 'Structural fire resistance',
    metier: "Concerne les ingénieurs structure, les bureaux de contrôle et les fabricants de produits de protection.",
    content: `La **résistance au feu** est la durée pendant laquelle un élément conserve ses fonctions sous l'incendie normalisé (courbe ISO 834). Trois critères :

- **R** : capacité portante (l'élément ne s'effondre pas) ;
- **E** : étanchéité aux flammes et aux gaz chauds ;
- **I** : isolation thermique (la face non exposée ne dépasse pas environ 140 °C en moyenne).

Une exigence s'écrit par exemple **R 60** pour un poteau, **REI 90** pour un plancher séparatif, **EI 30** pour une porte.

### Comportement des matériaux
- **Béton** : il s'échauffe lentement ; l'**enrobage** protège les armatures. Risque d'éclatement des bétons très compacts.
- **Acier** : très conducteur, il perd la moitié de sa résistance vers 550–600 °C ; il faut souvent le protéger.
- **Bois** : il brûle, mais la couche **carbonisée** isole le cœur, qui garde ses propriétés.

> 💡 La durée exigée dépend du type de bâtiment, de sa hauteur et de son usage (réglementation ERP, habitation, code du travail).`,
  },
  importance: {
    content: `- **Évacuation et secours** : la structure doit tenir le temps d'évacuer et d'intervenir.
- **Compartimentage** : les parois REI empêchent la propagation à tout le bâtiment.
- **Coût** : la protection de l'acier (flocage, peinture intumescente) peut peser lourd.
- **Conception** : la résistance au feu impose souvent les sections minimales et les enrobages.

> ⚠️ **À retenir** : un élément vérifié « à froid » n'est pas forcément stable au feu ; la vérification en situation d'incendie est distincte.`,
  },
  applications: {
    examples: [
      ['Plancher d’immeuble', 'REI 60 à REI 120 selon la hauteur : épaisseur et enrobage.'],
      ['Charpente métallique de magasin', 'R 30 à R 60 : peinture intumescente.'],
      ['Poutre lamellé-collé', 'Section majorée de l’épaisseur carbonisée.'],
      ['Parking', 'Dalles et poteaux en béton, enrobages adaptés.'],
      ['Tour de grande hauteur', 'R 120 et plus, compartimentage renforcé.'],
    ],
  },
  theory: {
    title: 'Théorie — Méthodes simplifiées des Eurocodes',
    content: `### 1. Actions en situation d'incendie
Combinaison accidentelle : charges permanentes + une part réduite des charges variables ($\\psi_{1}$ ou $\\psi_2$). Le rapport $\\eta_{fi} = E_{fi,d} / E_d$ vaut souvent 0,5 à 0,7.

### 2. Béton (EC2-1-2) : méthode des tableaux
On vérifie une **largeur minimale** $b_{min}$ et une **distance de l'axe des armatures au parement** $a$. Exemples (poutres isostatiques) :
| Exigence | b (mm) / a (mm) |
|---|---|
| R 60 | 120/40 ; 160/35 ; 200/30 ; 300/25 |
| R 90 | 150/55 ; 200/45 ; 300/40 ; 400/35 |

### 3. Acier (EC3-1-2) : température critique
$$\\theta_{cr} = 39{,}19 \\ln\\left(\\frac{1}{0{,}9674\\, \\mu_0^{3{,}833}} - 1\\right) + 482$$
$\\mu_0$ : taux d'utilisation en situation d'incendie. Pour $\\mu_0$ = 0,6 : θ_cr ≈ 554 °C. On compare au temps nécessaire pour atteindre θ_cr, qui dépend du **facteur de massiveté** $A_m/V$ (plus il est faible, plus le profilé chauffe lentement) et de la protection.

### 4. Bois (EC5-1-2) : section réduite
$$d_{ef} = \\beta_n\\, t + k_0\\, d_0 \\qquad (d_0 = 7\\ \\text{mm})$$
$\\beta_n$ ≈ 0,7 mm/min (lamellé-collé), 0,8 mm/min (bois massif résineux). On vérifie la section résiduelle avec la résistance moyenne (coefficient $k_{fi}$ = 1,15 pour le lamellé-collé, $\\gamma_{M,fi}$ = 1,0).`,
  },
  formulas: {
    title: 'Formules essentielles — Résistance au feu',
    formulas: [
      {
        name: 'Température critique de l’acier',
        latex: "\\theta_{cr} = 39{,}19 \\ln\\left(\\frac{1}{0{,}9674\\, \\mu_0^{3{,}833}} - 1\\right) + 482",
        description: 'Température à laquelle l’élément atteint sa résistance en situation d’incendie.',
        vars: [['\\mu_0', 'Taux d’utilisation au feu', '-', 'E_fi,d / R_fi,d,0.'], ['\\theta_{cr}', 'Température critique', '°C', '']],
      },
      {
        name: 'Profondeur de carbonisation efficace',
        latex: "d_{ef} = \\beta_n\\, t + k_0\\, d_0",
        description: 'Épaisseur retirée de chaque face exposée.',
        vars: [['\\beta_n', 'Vitesse de carbonisation', 'mm/min', '0,7 lamellé-collé.'], ['t', 'Durée', 'min', ''], ['k_0 d_0', 'Couche de résistance nulle', 'mm', '7 mm pour t ≥ 20 min.']],
      },
      {
        name: 'Facteur de massiveté',
        latex: "\\frac{A_m}{V} = \\frac{\\text{périmètre exposé}}{\\text{aire de la section}}",
        description: 'Plus il est élevé, plus le profilé s’échauffe vite.',
        vars: [['A_m / V', 'Facteur de massiveté', 'm⁻¹', 'IPE 300 exposé sur 4 faces ≈ 216 m⁻¹.']],
      },
      {
        name: 'Rapport de charge au feu',
        latex: "\\eta_{fi} = \\frac{E_{fi,d}}{E_d}",
        description: 'Réduction des sollicitations en situation accidentelle.',
        vars: [['E_{fi,d}', 'Sollicitation au feu', 'kN, kN·m', ''], ['E_d', 'Sollicitation ELU', 'kN, kN·m', '']],
      },
    ],
  },
  stepbystep: {
    title: 'Calcul complet — Poutre lamellé-collé R 60 exposée sur trois faces',
    problem: "Poutre GL24h de 200 × 600 mm exposée en sous-face et sur les deux côtés pendant 60 min (β_n = 0,7 mm/min). Calculer la section résiduelle et le rapport des modules d'inertie résiduel / initial.",
    steps_demo: [
      { n: 1, text: "d_ef = 0,7 × 60 + 7 = 49 mm." },
      { n: 2, text: "Largeur résiduelle : 200 − 2 × 49 = 102 mm ; hauteur : 600 − 49 = 551 mm (la face supérieure est protégée par le plancher)." },
      { n: 3, text: "Modules : W = 200 × 600² / 6 = 12,0 × 10⁶ mm³ ; W_fi = 102 × 551² / 6 = 5,16 × 10⁶ mm³." },
      { n: 4, text: "Rapport : 5,16 / 12,0 = 0,43." },
      { n: 5, text: "Au feu, la résistance vaut k_fi f_k / γ_M,fi = 1,15 f_k contre k_mod f_k / γ_M = 0,8 f_k / 1,25 = 0,64 f_k à froid : capacité au feu / capacité à froid ≈ 0,43 × 1,15 / 0,64 = 0,77 ≥ η_fi ≈ 0,6 ✓." },
    ],
    result_latex: "d_{ef} = 0{,}7 \\times 60 + 7 = 49\\ \\text{mm} \\qquad \\frac{W_{fi}}{W} = \\frac{102 \\times 551^2}{200 \\times 600^2} = 0{,}43",
  },
  units: {
    table: [
      ['Durée de résistance', 'min (R 30, 60, 90…)', 'hours (1-h rating)', '60 min = 1 h'],
      ['Température', '°C', '°F', '550 °C = 1 022 °F'],
      ['Vitesse de carbonisation', 'mm/min', 'in/h', '0,7 mm/min ≈ 1,65 in/h'],
      ['Facteur de massiveté', 'm⁻¹', 'in⁻¹', '1 m⁻¹ = 0,0254 in⁻¹'],
      ['Distance a', 'mm', 'in', 'Axe des armatures au parement'],
    ],
    note: 'Les durées R, E, I sont des classements obtenus sous le feu normalisé ISO 834, pas des durées d’incendie réel.',
  },
  hypotheses: {
    items: [
      ['info', 'Les méthodes tabulées et simplifiées couvrent les cas courants ; les cas complexes relèvent de méthodes avancées (feux naturels).'],
      ['info', 'Le béton à hautes performances peut éclater (écaillage explosif) : des fibres polypropylène limitent ce risque.'],
      ['warning', 'Les assemblages métalliques et les connecteurs bois sont souvent les points faibles au feu.'],
      ['warning', 'Une protection (flocage, plaques) doit être continue et compatible avec le profilé protégé.'],
      ['tip', 'Prévoyez l’exigence de résistance au feu dès le prédimensionnement : elle peut gouverner les sections.'],
    ],
  },
  simple_examples: {
    examples: [
      { title: 'Exemple 1 : température critique', given: 'μ₀ = 0,6', find: 'θ_cr', solution_latex: "\\theta_{cr} = 39{,}19 \\ln\\left(\\frac{1}{0{,}9674 \\times 0{,}1411} - 1\\right) + 482 = 554\\ °\\text{C}", result: '≈ 554 °C.' },
      { title: 'Exemple 2 : enrobage d’une poutre R 90', given: 'Poutre de 300 mm de large', find: 'a minimal', solution_latex: "b = 300 \\Rightarrow a \\geq 40\\ \\text{mm}", result: 'Distance de l’axe des aciers au parement ≥ 40 mm (tableau EC2-1-2).' },
      { title: 'Exemple 3 : carbonisation d’un poteau', given: 'Bois massif résineux, β_n = 0,8 mm/min, 30 min', find: 'd_ef', solution_latex: "d_{ef} = 0{,}8 \\times 30 + 7 = 31\\ \\text{mm}", result: '31 mm par face exposée.' },
    ],
  },
  real_examples: {
    title: 'Exemple réel — Effondrement des tours du World Trade Center (2001)',
    examples: [
      {
        context: 'Tours de grande hauteur à structure métallique, impacts d’avions puis incendies',
        scenario: "Les impacts ont arraché une partie des protections au feu projetées sur les poutres et poteaux. Les incendies généralisés sur plusieurs niveaux ont chauffé l'acier non protégé, qui a perdu sa résistance et s'est déformé ; les planchers ont tiré sur les poteaux périphériques jusqu'à la rupture et à l'effondrement progressif.",
        decomposition_latex: "\\text{Protection arrachée} + \\text{feu généralisé} \\Rightarrow \\theta_{acier} > \\theta_{cr} \\Rightarrow \\text{effondrement progressif}",
        lesson: "L'adhérence et la robustesse des protections, ainsi que la résistance à l'effondrement progressif, sont des enjeux majeurs des structures de grande hauteur.",
      },
    ],
  },
  diagrams: {
    title: 'Schéma de principe — Justifier un élément au feu',
    diagram_description: [
      'Exigence réglementaire : R, REI ou EI et durée',
      'Combinaison accidentelle : charges au feu (η_fi)',
      'Choix de la méthode : tableaux, méthode simplifiée, méthode avancée',
      'Béton : b et a ; acier : θ_cr et protection ; bois : section résiduelle',
      'Vérifier les assemblages et appuis',
      'Contrôler la mise en œuvre des protections',
    ],
  },
  mistakes: {
    items: [
      ['Oublier le feu dans le prédimensionnement', 'Sections ou enrobages insuffisants', 'Vérifier b et a dès l’avant-projet.'],
      ['Protection discontinue', 'Point chaud et ruine locale', 'Contrôler l’épaisseur et la continuité.'],
      ['Ignorer les assemblages bois', 'Ruine par les connecteurs', 'Protéger ou noyer les organes métalliques.'],
    ],
  },
  tips: {
    tips: [
      'Retenez : acier critique vers 550 °C pour un taux d’utilisation de 0,6.',
      'Bois lamellé-collé : environ 42 mm carbonisés en 60 min, plus 7 mm.',
      'Les enrobages exigés au feu dépassent souvent ceux de la durabilité.',
      'Demandez les PV ou ETE des protections employées.',
    ],
  },
  norms: {
    norms: [
      ['NF EN 1991-1-2', 'Actions sur les structures exposées au feu.'],
      ['NF EN 1992-1-2', 'Calcul des structures en béton au feu.'],
      ['NF EN 1993-1-2', 'Calcul des structures en acier au feu.'],
      ['NF EN 1995-1-2', 'Calcul des structures en bois au feu.'],
      ['NF EN 13501-2', 'Classement de résistance au feu (R, E, I).'],
    ],
  },
  exercises: {
    exercises: [
      { level: 1, text: 'Que signifie REI 60 pour un plancher ?', hint: 'Trois critères.', answer_latex: "\\text{R + E + I pendant 60 min}", answer_text: 'Stabilité, étanchéité aux flammes et isolation thermique pendant 60 minutes.' },
      { level: 2, text: 'Calculer d_ef pour un lamellé-collé exposé 90 min.', hint: 'β_n = 0,7 mm/min.', answer_latex: "d_{ef} = 0{,}7 \\times 90 + 7 = 70\\ \\text{mm}", answer_text: '70 mm par face.' },
      { level: 3, text: 'Calculer θ_cr pour μ₀ = 0,4.', hint: '0,4^3,833 = 0,0298.', answer_latex: "\\theta_{cr} = 39{,}19 \\ln\\left(\\frac{1}{0{,}0289} - 1\\right) + 482 = 620\\ °\\text{C}", answer_text: '≈ 620 °C : moins le profilé est chargé, plus il tient.' },
    ],
  },
  quiz: {
    title: 'Quiz — Résistance au feu',
    questions: [
      { q: 'Que signifie le critère I ?', options: ['Isolation thermique', 'Intégrité structurelle', 'Inflammabilité'], correct: 0, explain: 'La face non exposée reste sous un échauffement limite.' },
      { q: 'Vers quelle température l’acier courant perd-il environ la moitié de sa résistance ?', options: ['250 °C', '550 à 600 °C', '1 000 °C'], correct: 1, explain: 'D’où la température critique vers 550 °C.' },
      { q: 'Pourquoi une poutre bois résiste-t-elle au feu ?', options: ['Elle ne brûle pas', 'La couche carbonisée isole le cœur', 'Elle est ignifugée par nature'], correct: 1, explain: 'La carbonisation progresse lentement et protège le bois sain.' },
    ],
  },
  exam_questions: {
    questions: [
      'Expliquez les critères R, E, I et donnez des exemples d’exigences.',
      'Comparez le comportement au feu du béton, de l’acier et du bois.',
      'Vérifiez une poutre bois au feu par la méthode de la section réduite.',
    ],
  },
  interview_questions: {
    questions: [
      ['Comment protéger une charpente métallique R 60 ?', 'Selon le facteur de massiveté et θ_cr : peinture intumescente, flocage ou plaques, avec des épaisseurs issues des tableaux des fabricants (ETE) ; ou surdimensionnement si cela suffit.'],
      ['Pourquoi les tableaux de l’EC2-1-2 imposent-ils une distance a ?', 'Parce que la température des armatures dépend de leur distance au parement exposé : plus elles sont profondes, plus elles restent froides et résistantes.'],
    ],
  },
  practical_case: {
    title: 'Cas pratique — Poutre d’un parking R 90',
    scenario: 'Poutre isostatique en béton armé de 300 × 600 mm, armatures HA20, cadres HA8, enrobage nominal des cadres 30 mm.',
    description: 'Vérifier la distance a pour R 90.',
    resolutions: [
      "a = c_{nom} + \\varnothing_{cadre} + \\frac{\\varnothing}{2} = 30 + 8 + 10 = 48\\ \\text{mm}",
      "\\text{Tableau EC2-1-2, R 90, } b = 300\\ \\text{mm} \\Rightarrow a_{min} = 40\\ \\text{mm}",
      "a = 48\\ \\text{mm} \\geq 40\\ \\text{mm} \\quad \\checkmark",
    ],
    conclusion: 'La poutre satisfait R 90 par la méthode tabulée ; il reste à vérifier les appuis et la continuité éventuelle.',
  },
  summary: {
    content: `### La résistance au feu en 5 points
1. Critères R (stabilité), E (étanchéité), I (isolation) sous feu ISO 834.
2. Béton : largeur b et distance a des armatures (tableaux EC2-1-2).
3. Acier : θ_cr ≈ 554 °C pour μ₀ = 0,6 ; massiveté et protection.
4. Bois : $d_{ef} = \\beta_n t + 7$ mm, section résiduelle.
5. Vérifier les assemblages et contrôler les protections.`,
  },
  key_points: {
    points: ['R, E, I', 'Béton : b et a', 'Acier : θ_cr ≈ 550 °C', 'Bois : d_ef = β t + 7 mm', 'Protections continues'],
  },
  self_assessment: {
    objectives: [
      'Je connais les critères R, E, I',
      'Je sais vérifier un élément béton par les tableaux',
      'Je sais calculer une température critique d’acier',
      'Je sais calculer une section résiduelle en bois',
      "J'ai réussi le quiz avec au moins 2 bonnes réponses sur 3",
    ],
  },
});
