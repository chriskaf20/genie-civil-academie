// ── Lesson: Toitures et étanchéité — Module 41 ───────────────────────────────
import { buildLesson } from './build_lesson.js';

export const lesson_batiment_toitures = buildLesson({
  moduleId: 41,
  slug: 'batiment_toitures',
  lessonIndex: 2,
  title: "Toitures et Étanchéité : Pentes, Charpente, Couverture, Toitures-Terrasses, Neige et Évacuation des Eaux Pluviales",
  subtitle: 'Module 41 — Technologie du bâtiment : gros œuvre & second œuvre',
  level: 'Intermédiaire',
  duration: '5h',
  tags: ['Toiture', 'Charpente', 'Couverture', 'Toiture-terrasse', 'Étanchéité', 'Neige', 'Eaux pluviales'],
}, {
  definition: {
    title: 'Définition — Protéger le bâtiment des intempéries',
    fr: 'Toitures et étanchéité',
    en: 'Roofing and waterproofing',
    metier: "Concerne les charpentiers, couvreurs, étancheurs, conducteurs de travaux et ingénieurs structure.",
    content: `La **toiture** protège le bâtiment de la pluie, de la neige, du vent et du soleil. Elle comprend :

- une **structure porteuse** (charpente bois traditionnelle ou fermettes, charpente métallique, dalle béton) ;
- une **couverture** (tuiles, ardoises, bacs acier, zinc) pour les toitures en pente ;
- ou une **étanchéité** (membranes bitumineuses, synthétiques) pour les **toitures-terrasses** ;
- une **isolation** thermique et, selon les cas, un pare-vapeur.

### Toitures en pente
La pente minimale dépend du matériau de couverture, de la longueur du rampant et de l'exposition (zone climatique, site). Les DTU de la série 40 fixent ces valeurs.

### Toitures-terrasses
Inaccessibles, techniques, accessibles aux piétons ou aux véhicules, végétalisées. Elles exigent une étanchéité continue, des relevés soignés et des évacuations d'eaux pluviales suffisantes avec trop-pleins.

> 💡 Pente en % = dénivelé / longueur horizontale × 100 ; une pente de 100 % correspond à 45°.`,
  },
  importance: {
    content: `- **Sinistralité** : les infiltrations en toiture sont l'une des premières causes de désordres en bâtiment.
- **Structure** : la neige et le vent (soulèvement) dimensionnent charpentes et fixations.
- **Énergie** : la toiture est souvent la paroi la plus déperditive d'une maison non isolée.
- **Sécurité** : les travaux en toiture exposent aux chutes de hauteur.

> ⚠️ **À retenir** : une toiture-terrasse sans trop-plein peut se remplir d'eau et s'effondrer si les descentes sont bouchées.`,
  },
  applications: {
    examples: [
      ['Maison individuelle', 'Fermettes industrielles et tuiles mécaniques à 35 %.'],
      ['Bâtiment industriel', 'Bac acier sur pannes métalliques, pente 5 à 10 %.'],
      ['Immeuble de logements', 'Toiture-terrasse inaccessible avec étanchéité bicouche.'],
      ['Parking en toiture', 'Étanchéité sous protection lourde (dalles béton).'],
      ['Toiture végétalisée', 'Rétention d’eau et biodiversité.'],
    ],
  },
  theory: {
    title: 'Théorie — Géométrie, charges et évacuations',
    content: `### 1. Géométrie
$$p = \\frac{\\Delta h}{L_h} \\times 100 \\qquad \\alpha = \\arctan\\frac{p}{100} \\qquad L_{rampant} = \\frac{L_h}{\\cos\\alpha}$$

### 2. Neige (EN 1991-1-3)
$$s = \\mu_1 \\, C_e \\, C_t \\, s_k$$
$\\mu_1$ = 0,8 pour des pentes de 0 à 30°, puis décroît linéairement jusqu'à 0 à 60°. La charge s'applique **en projection horizontale**. $s_k$ dépend de la région et de l'altitude.

### 3. Vent
Le vent crée des **dépressions** sur la majorité de la toiture : les fixations de couverture et d'étanchéité doivent résister à l'arrachement, surtout en rives et angles.

### 4. Évacuation des eaux pluviales (DTU 60.11)
Règle usuelle en France métropolitaine : **1 cm² de section de descente par m² de toiture** desservie (surface en plan), avec une section minimale. Les toitures-terrasses comportent des **trop-pleins**.

### 5. Toiture-terrasse : ordre des couches (toiture « chaude »)
Élément porteur → pare-vapeur → isolant → étanchéité → protection (gravillons, dalles, végétalisation). Relevés d'étanchéité d'au moins 15 cm au-dessus de la protection.`,
  },
  formulas: {
    title: 'Formules essentielles — Toitures',
    formulas: [
      {
        name: 'Pente et angle',
        latex: "p = \\frac{\\Delta h}{L_h} \\times 100 \\qquad \\alpha = \\arctan\\frac{p}{100}",
        description: 'Conversion entre pente en % et angle.',
        vars: [
          ['p', 'Pente', '%', ''],
          ['\\Delta h', 'Dénivelé', 'm', ''],
          ['L_h', 'Longueur horizontale', 'm', ''],
          ['\\alpha', 'Angle', '°', ''],
        ],
      },
      {
        name: 'Longueur du rampant',
        latex: "L_{rampant} = \\frac{L_h}{\\cos\\alpha}",
        description: 'Longueur réelle d’un versant.',
        vars: [['L_{rampant}', 'Longueur du rampant', 'm', '']],
      },
      {
        name: 'Charge de neige sur toiture',
        latex: "s = \\mu_1 \\, C_e \\, C_t \\, s_k",
        description: 'Charge en projection horizontale.',
        vars: [
          ['\\mu_1', 'Coefficient de forme', '-', '0,8 pour α ≤ 30° ; 0,8 (60 − α)/30 entre 30 et 60°.'],
          ['C_e, C_t', "Coefficients d'exposition et thermique", '-', 'Souvent 1,0.'],
          ['s_k', 'Charge de neige au sol', 'kN/m²', 'Selon la région et l’altitude.'],
        ],
      },
      {
        name: 'Section des descentes d’eaux pluviales',
        latex: "S_{descente}\\ (\\text{cm}^2) \\geq A_{toiture}\\ (\\text{m}^2)",
        description: 'Règle de 1 cm² par m² (DTU 60.11, France métropolitaine).',
        vars: [
          ['A_{toiture}', 'Surface desservie en plan', 'm²', ''],
          ['S_{descente}', 'Section intérieure de la descente', 'cm²', 'DN 80 ≈ 50 cm² ; DN 100 ≈ 78 cm².'],
        ],
      },
    ],
  },
  stepbystep: {
    title: 'Calcul complet — Toiture à deux pans d’une maison',
    problem: "Maison de 10 m de large et 12 m de long, toiture à deux pans à 35 %, tuiles. Charge de neige au sol s_k = 0,45 kN/m². Calculer l'angle, la longueur des rampants, la surface de couverture, la charge de neige et les descentes d'eaux pluviales.",
    steps_demo: [
      { n: 1, text: "Angle : α = arctan(0,35) = 19,3°." },
      { n: 2, text: "Rampant : 5,00 / cos 19,3° = 5,30 m ; surface d'un pan : 5,30 × 12 = 63,6 m² ; total 127,2 m² (sans débords)." },
      { n: 3, text: "Neige : α ≤ 30° → μ₁ = 0,8 ; s = 0,8 × 0,45 = 0,36 kN/m² en projection horizontale." },
      { n: 4, text: "Eaux pluviales : surface en plan par pan = 5 × 12 = 60 m² → section ≥ 60 cm² : une descente DN 100 (78 cm²) par pan." },
      { n: 5, text: "Vérifier la pente minimale du modèle de tuile pour la zone et la longueur de rampant (DTU 40.21 ou avis technique)." },
    ],
    result_latex: "\\alpha = \\arctan(0{,}35) = 19{,}3° \\qquad L_r = \\frac{5{,}00}{\\cos 19{,}3°} = 5{,}30\\ \\text{m} \\qquad s = 0{,}8 \\times 0{,}45 = 0{,}36\\ \\text{kN/m}^2",
  },
  units: {
    table: [
      ['Pente', '%', 'x:12 (rise:run)', '35 % ≈ 4,2:12'],
      ['Angle', '°', '°', '100 % = 45°'],
      ['Charge de neige', 'kN/m²', 'psf', '1 kN/m² = 20,9 psf'],
      ['Section de descente', 'cm²', 'in²', '1 in² = 6,45 cm²'],
      ['Surface de toiture', 'm²', 'square (100 ft²)', '1 square = 9,29 m²'],
    ],
    note: 'En Amérique du Nord, la pente s’exprime en « pouces par pied » (rise:run).',
  },
  hypotheses: {
    items: [
      ['info', 'Les pentes minimales de couverture dépendent du produit, de la zone climatique et de la situation (protégée, normale, exposée).'],
      ['info', 'La règle de 1 cm²/m² correspond à une intensité de pluie de référence en métropole ; elle est majorée dans certaines régions et outre-mer.'],
      ['warning', 'Les accumulations de neige (noues, acrotères, différences de niveau) peuvent dépasser largement la charge uniforme.'],
      ['warning', 'Une étanchéité posée sur un support humide ou sans pare-vapeur peut cloquer et se décoller.'],
      ['tip', 'Prévoyez des protections collectives (garde-corps, lignes de vie) pour l’entretien des toitures.'],
    ],
  },
  simple_examples: {
    examples: [
      {
        title: 'Exemple 1 : conversion de pente',
        given: 'Pente de 45°',
        find: 'Pente en %',
        solution_latex: "p = \\tan 45° \\times 100 = 100\\ \\%",
        result: '100 %.',
      },
      {
        title: 'Exemple 2 : neige sur un toit à 40°',
        given: 'α = 40° ; s_k = 0,65 kN/m²',
        find: 's',
        solution_latex: "\\mu_1 = 0{,}8 \\times \\frac{60 - 40}{30} = 0{,}53 \\qquad s = 0{,}53 \\times 0{,}65 = 0{,}35\\ \\text{kN/m}^2",
        result: '0,35 kN/m².',
      },
      {
        title: 'Exemple 3 : descentes d’une toiture-terrasse',
        given: 'Toiture-terrasse de 420 m² ; descentes DN 100 (78 cm²)',
        find: 'Nombre de descentes',
        solution_latex: "n = \\frac{420}{78} = 5{,}4 \\Rightarrow 6 \\text{ descentes}",
        result: '6 descentes, plus des trop-pleins.',
      },
    ],
  },
  real_examples: {
    title: 'Exemple réel — Effondrements de toitures sous la neige',
    examples: [
      {
        context: 'Patinoire de Bad Reichenhall (Allemagne), janvier 2006',
        scenario: "L'effondrement de la toiture de la patinoire sous une forte charge de neige a fait 15 victimes. L'enquête a mis en cause des défauts de conception et la dégradation des poutres en bois lamellé-collé (collage affaibli par l'humidité), ainsi que l'absence de surveillance et de déneigement.",
        decomposition_latex: "\\text{Charge de neige élevée} + \\text{résistance dégradée} + \\text{absence de surveillance} \\Rightarrow \\text{effondrement}",
        lesson: "Les toitures de grande portée doivent être conçues pour les accumulations de neige, inspectées régulièrement et faire l'objet de consignes de déneigement.",
      },
    ],
  },
  diagrams: {
    title: 'Schéma de principe — Toiture-terrasse isolée',
    diagram_description: [
      'Élément porteur : dalle béton, bac acier ou bois',
      'Pare-vapeur côté chaud',
      'Isolant thermique adapté à l’étanchéité',
      'Étanchéité (bicouche bitume ou membrane synthétique)',
      'Protection : gravillons, dalles sur plots ou végétalisation',
      'Relevés, entrées d’eaux pluviales et trop-pleins',
    ],
  },
  mistakes: {
    items: [
      ['Pente insuffisante pour la tuile choisie', 'Infiltrations', 'Respecter le DTU et l’avis technique.'],
      ['Toiture-terrasse sans trop-plein', 'Surcharge d’eau et risque d’effondrement', 'Trop-plein dans chaque zone de rétention.'],
      ['Relevés d’étanchéité trop bas', 'Infiltrations en rive', 'Relevés ≥ 15 cm au-dessus de la protection.'],
    ],
  },
  tips: {
    tips: [
      'Placez les descentes d’eaux pluviales aux points bas et prévoyez leur accès pour l’entretien.',
      'Contrôlez la planéité de la dalle avant étanchéité : les flaches retiennent l’eau.',
      'Réalisez un essai d’étanchéité (mise en eau) sur les toitures-terrasses délicates.',
      'Fixez renforcé en rives et angles, où les dépressions de vent sont les plus fortes.',
    ],
  },
  norms: {
    norms: [
      ['NF DTU série 40', 'Couvertures (tuiles, ardoises, bacs acier, zinc…).'],
      ['NF DTU 43.1 à 43.5', 'Étanchéité des toitures-terrasses.'],
      ['NF DTU 60.11', 'Calcul des réseaux d’évacuation, dont les eaux pluviales.'],
      ['NF EN 1991-1-3 et 1-4', 'Charges de neige et de vent.'],
      ['NF DTU 31.1 / 31.3', 'Charpentes en bois et fermettes industrielles.'],
    ],
  },
  exercises: {
    exercises: [
      { level: 1, text: 'Convertir une pente de 30 % en degrés.', hint: 'α = arctan(0,30).', answer_latex: "\\alpha = \\arctan(0{,}30) = 16{,}7°", answer_text: '16,7°.' },
      { level: 2, text: 'Calculer la longueur d’un rampant pour une demi-portée de 6,0 m à 40 %.', hint: 'α = 21,8°.', answer_latex: "L_r = \\frac{6{,}0}{\\cos 21{,}8°} = 6{,}46\\ \\text{m}", answer_text: '6,46 m.' },
      { level: 3, text: 'Quelle charge de neige sur une toiture à 15° avec s_k = 0,90 kN/m², et quelle charge linéique sur une fermette espacée de 0,60 m ?', hint: 'μ₁ = 0,8 ; charge en projection horizontale.', answer_latex: "s = 0{,}8 \\times 0{,}90 = 0{,}72\\ \\text{kN/m}^2 \\qquad 0{,}72 \\times 0{,}60 = 0{,}43\\ \\text{kN/m}", answer_text: '0,72 kN/m², soit 0,43 kN/m en projection horizontale sur chaque fermette.' },
    ],
  },
  quiz: {
    title: 'Quiz — Toitures',
    questions: [
      { q: 'Une pente de 100 % correspond à…', options: ['90°', '45°', '30°'], correct: 1, explain: 'tan 45° = 1.' },
      { q: 'Quel élément est obligatoire sur une toiture-terrasse ?', options: ['Une cheminée', 'Un trop-plein', 'Une gouttière pendante'], correct: 1, explain: 'Il évite l’accumulation d’eau si les descentes sont bouchées.' },
      { q: 'La charge de neige s’applique…', options: ['Perpendiculairement au rampant', 'En projection horizontale', 'Uniquement sur les rives'], correct: 1, explain: 'EN 1991-1-3.' },
    ],
  },
  exam_questions: {
    questions: [
      'Décrivez la composition d’une toiture-terrasse isolée.',
      'Calculez les charges de neige et les descentes d’une toiture.',
      'Quelles sont les causes principales d’infiltrations en toiture ?',
    ],
  },
  interview_questions: {
    questions: [
      ['Quels points contrôlez-vous à la réception d’une toiture-terrasse ?', 'Pentes et absence de flaches, relevés et leurs protections, entrées d’eaux pluviales et trop-pleins, joints de dilatation, essais de mise en eau si prévus, et le DOE.'],
      ['Pourquoi la neige est-elle dangereuse pour les grandes toitures ?', 'Parce que les charges peuvent se concentrer par accumulation et que les structures légères de grande portée ont peu de réserve ; il faut un calcul correct et une surveillance.'],
    ],
  },
  practical_case: {
    title: 'Cas pratique — Toiture-terrasse d’un immeuble',
    scenario: 'Toiture-terrasse inaccessible de 24 × 15 m, pente 1,5 % vers deux noues, isolation de 160 mm, protection gravillons.',
    description: 'Définir les évacuations et la composition.',
    resolutions: [
      "A = 24 \\times 15 = 360\\ \\text{m}^2 \\Rightarrow S \\geq 360\\ \\text{cm}^2",
      "5 \\text{ descentes DN 100 } (5 \\times 78 = 390\\ \\text{cm}^2) \\text{ réparties dans les noues} + \\text{trop-pleins}",
      "\\text{Composition} : \\text{dalle} + \\text{pare-vapeur} + 160\\ \\text{mm isolant} + \\text{bicouche} + \\text{gravillons}",
    ],
    conclusion: 'Cinq descentes, des trop-pleins par zone, et des relevés de 15 cm minimum au-dessus de la protection.',
  },
  summary: {
    content: `### Les toitures en 5 points
1. Structure + couverture (pente) ou étanchéité (terrasse) + isolation.
2. $p = \\Delta h / L_h$ ; rampant $= L_h / \\cos\\alpha$.
3. Neige : $s = \\mu_1 C_e C_t s_k$ en projection horizontale.
4. Eaux pluviales : 1 cm²/m² + trop-pleins.
5. Pentes minimales et relevés selon les DTU.`,
  },
  key_points: {
    points: ['100 % = 45°', 'L_rampant = L_h / cos α', 'μ₁ = 0,8 jusqu’à 30°', '1 cm² de descente par m²', 'Trop-plein obligatoire en terrasse'],
  },
  self_assessment: {
    objectives: [
      'Je connais les types de toitures',
      'Je sais calculer pente, angle et rampant',
      'Je sais calculer une charge de neige',
      'Je sais dimensionner les descentes d’eaux pluviales',
      "J'ai réussi le quiz avec au moins 2 bonnes réponses sur 3",
    ],
  },
});
