// ── Lesson: Produits bois d'ingénierie — lamellé-collé, CLT, LVL — Module 12 ──
import { buildLesson } from './build_lesson.js';

export const lesson_bois_clt = buildLesson({
  moduleId: 12,
  slug: 'bois_clt',
  lessonIndex: 3,
  title: "Bois d'Ingénierie : Lamellé-Collé, CLT, LVL & Construction Bois de Grande Hauteur",
  subtitle: 'Module 12 — Construction Bois',
  level: 'Intermédiaire',
  duration: '10h',
  tags: ['Construction bois', 'CLT', 'Lamellé-collé', 'LVL', 'Rigidité efficace', 'Cisaillement roulant', 'Immeubles bois'],
}, {
  definition: {
    title: "Définition — Le bois recomposé pour l'ingénieur",
    fr: "Produits bois d'ingénierie (EWP : lamellé-collé, CLT, LVL)",
    en: 'Engineered wood products (glulam, CLT, LVL)',
    metier: "Utilisée par les ingénieurs bois, architectes et entreprises de construction bois pour les grandes portées, les immeubles bois et les bâtiments bas carbone.",
    content: `Les **produits bois d'ingénierie** reconstituent le bois en éléments plus grands, plus réguliers et plus résistants que le bois massif :
- **Lamellé-collé (GL)** : lamelles collées parallèlement au fil. Il permet des poutres de grande hauteur, courbes, et des portées de 30 à 100 m.
- **CLT** (bois lamellé-croisé, *cross laminated timber*) : couches de planches collées à angle droit, en nombre impair. Il forme des **panneaux** porteurs de murs et de planchers.
- **LVL** (lamibois, *laminated veneer lumber*) : placages minces de 3 mm collés, très résistant et stable.

### Pourquoi « recomposer » ?
En dispersant les défauts (nœuds, fentes) dans plusieurs lamelles, on obtient des propriétés plus élevées et moins dispersées. Le croisement des couches du CLT lui donne une **stabilité dimensionnelle** et une capacité à porter dans deux directions.

> 💡 Des immeubles de 18 étages et plus ont été construits avec des structures en CLT et lamellé-collé (Mjøstårnet en Norvège, 85 m).`,
  },
  importance: {
    content: `- **Bas carbone** : le bois stocke du carbone biogénique et sa fabrication émet peu ; c'est un levier majeur de la RE2020.
- **Préfabrication** : panneaux CLT découpés en usine, chantiers secs, rapides et silencieux.
- **Légèreté** : un plancher CLT pèse environ 5 fois moins qu'une dalle béton de même portée, ce qui allège les fondations.
- **Points d'attention** : vibrations des planchers, acoustique, protection contre l'humidité en chantier, sécurité incendie.

> ⚠️ **À retenir** : pour les planchers CLT, ce sont souvent la flèche et les vibrations, et non la résistance, qui dimensionnent l'épaisseur.`,
  },
  applications: {
    examples: [
      ['Gymnase', 'Poutres en lamellé-collé de 40 m, assemblages par âmes métalliques et broches.'],
      ['Immeuble de logements R+8', 'Murs et planchers en CLT, noyau de contreventement béton ou CLT.'],
      ['Surélévation', 'Étages légers en CLT sur un bâtiment existant sans renforcer les fondations.'],
      ['Charpente industrielle', 'Poutres LVL de grande portée et faible encombrement.'],
      ['École', 'Structure mixte bois-béton : dalle de compression connectée sur CLT.'],
    ],
  },
  theory: {
    title: 'Théorie — Propriétés et calcul simplifié d’un plancher CLT',
    content: `### 1. Classes de résistance
| Produit | f_m,k (MPa) | E₀,mean (MPa) | ρ_k (kg/m³) |
|---|---|---|---|
| Bois massif C24 | 24 | 11 000 | 350 |
| Lamellé-collé GL24h | 24 | 11 500 | 385 |
| Lamellé-collé GL28h | 28 | 12 600 | 425 |
| LVL (type Kerto-S) | 44 | 13 800 | 480 |

### 2. Rigidité efficace d'un panneau CLT (méthode simplifiée)
En négligeant les couches transversales et leur déformation de cisaillement, seules les couches longitudinales travaillent :
$$EI_{ef} = \\sum_{i \\in long} E_i \\left( \\frac{b \\, t_i^3}{12} + b \\, t_i \\, a_i^2 \\right)$$
$a_i$ est la distance du centre de la couche $i$ au centre du panneau. Les méthodes plus précises (méthode γ de l'EC5, théorie de Timoshenko) tiennent compte du **cisaillement roulant** des couches transversales, qui augmente la flèche de 10 à 30 %.

### 3. Contraintes et flèche
$$\\sigma_m = \\frac{M \\, z_{max}}{I_{ef}} \\qquad w = \\frac{5 q L^4}{384 \\, EI_{ef}}$$

### 4. Cisaillement roulant
Les couches transversales subissent un cisaillement perpendiculaire au fil (« roulant ») de faible résistance : $f_{R,k}$ ≈ 1,0 à 1,25 MPa. Il gouverne les panneaux courts et fortement chargés.

### 5. Feu
Le bois brûle à vitesse connue (≈ 0,65 mm/min pour un résineux massif) : on dimensionne la section résiduelle. Pour le CLT, la chute de couches carbonisées est prise en compte selon le type de colle.`,
  },
  formulas: {
    title: "Formules essentielles — Bois d'ingénierie",
    formulas: [
      {
        name: 'Rigidité efficace d’un panneau CLT (couches longitudinales)',
        latex: "EI_{ef} = \\sum_{i \\in long} E_i \\left( \\frac{b \\, t_i^3}{12} + b \\, t_i \\, a_i^2 \\right)",
        description: 'Méthode simplifiée sans déformation de cisaillement.',
        vars: [
          ['EI_{ef}', 'Rigidité efficace', 'N·mm²', 'Par largeur b de panneau.'],
          ['E_i', 'Module de la couche i', 'MPa', '≈ 11 000 MPa (C24).'],
          ['b', 'Largeur de calcul', 'mm', '1 000 mm pour un calcul par mètre.'],
          ['t_i', 'Épaisseur de la couche', 'mm', '20 à 40 mm.'],
          ['a_i', 'Distance au centre du panneau', 'mm', 'Centre de couche → plan moyen.'],
        ],
      },
      {
        name: 'Contrainte de flexion dans le CLT',
        latex: "\\sigma_{m,d} = \\frac{M_{Ed} \\, z_{max}}{I_{ef}} \\le f_{m,d} = k_{mod} \\frac{f_{m,k}}{\\gamma_M}",
        description: 'z_max : distance du plan moyen à la fibre extrême d’une couche longitudinale.',
        vars: [
          ['\\sigma_{m,d}', 'Contrainte de flexion', 'MPa', 'Dans les couches longitudinales extrêmes.'],
          ['z_{max}', 'Distance à la fibre extrême', 'mm', 'Demi-épaisseur du panneau si les couches externes sont longitudinales.'],
          ['\\gamma_M', 'Coefficient partiel', '-', '1,25 pour le lamellé-collé et le CLT.'],
        ],
      },
      {
        name: 'Flèche d’un panneau sur deux appuis',
        latex: "w = \\frac{5 \\, q \\, L^4}{384 \\, EI_{ef}}",
        description: 'À majorer pour le cisaillement roulant (10 à 30 %) et le fluage (k_def).',
        vars: [
          ['q', 'Charge de service', 'N/mm', 'Par largeur de calcul (1 kN/m² sur 1 m = 1 N/mm).'],
          ['L', 'Portée', 'mm', 'Entre appuis.'],
        ],
        rule: "Repère : épaisseur de plancher CLT ≈ L/30 pour une portée simple en logement.",
      },
      {
        name: 'Section résiduelle au feu',
        latex: "d_{ef} = \\beta_n \\, t + k_0 \\, d_0",
        description: 'Méthode de la section réduite (EN 1995-1-2), d₀ = 7 mm.',
        vars: [
          ['d_{ef}', 'Épaisseur à retirer', 'mm', 'De chaque face exposée.'],
          ['\\beta_n', 'Vitesse de carbonisation fictive', 'mm/min', '0,7 (lamellé-collé), 0,8 (bois massif).'],
          ['t', "Durée d'exposition", 'min', '30, 60 ou 90.'],
          ['k_0, d_0', 'Couche de résistance nulle', '-, mm', 'k₀ = 1 après 20 min ; d₀ = 7 mm.'],
        ],
      },
    ],
  },
  stepbystep: {
    title: 'Calcul complet — Plancher CLT 5 couches de 150 mm',
    problem: "Panneau CLT 5 couches de 30 mm (couches 1, 3, 5 longitudinales), bois C24 (E = 11 000 MPa), portée 5,0 m sur deux appuis, charge de service 3,5 kN/m², charge ELU 6,0 kN/m². Calculer EI_ef, la flèche et la contrainte de flexion (par mètre de largeur).",
    steps_demo: [
      { n: 1, text: "Inertie propre des couches longitudinales : 3 × 1 000 × 30³ / 12 = 6,75 × 10⁶ mm⁴." },
      { n: 2, text: "Transport (couches 1 et 5 à a = 60 mm) : 2 × 1 000 × 30 × 60² = 2,16 × 10⁸ mm⁴ → I_ef = 2,23 × 10⁸ mm⁴." },
      { n: 3, text: "Rigidité : EI_ef = 11 000 × 2,23 × 10⁸ = 2,45 × 10¹² N·mm² par mètre." },
      { n: 4, text: "Flèche : w = 5 × 3,5 × 5 000⁴ / (384 × 2,45 × 10¹²) = 11,6 mm, environ 13 à 14 mm avec le cisaillement roulant ; limite L/300 = 16,7 mm." },
      { n: 5, text: "Moment ELU : M = 6,0 × 5² / 8 = 18,75 kN·m/m ; contrainte : σ = 18,75 × 10⁶ × 75 / 2,23 × 10⁸ = 6,3 MPa." },
      { n: 6, text: "Résistance : f_m,d = 0,8 × 24 / 1,25 = 15,4 MPa ≥ 6,3 MPa : la flèche et les vibrations gouvernent, pas la résistance." },
    ],
    result_latex: "EI_{ef} = 2{,}45 \\times 10^{12}\\ \\text{N·mm}^2/\\text{m} \\quad w = 11{,}6\\ \\text{mm} \\quad \\sigma_{m,d} = 6{,}3\\ \\text{MPa} \\le 15{,}4\\ \\text{MPa}",
  },
  units: {
    table: [
      ['Rigidité de panneau', 'N·mm²/m, kN·m²/m', 'lb·in²/ft', '1 kN·m² = 10⁹ N·mm²'],
      ['Masse volumique', 'kg/m³', 'pcf', 'CLT ≈ 470 kg/m³ (poids ≈ 4,7 kN/m³)'],
      ['Épaisseur de panneau', 'mm', 'in', 'CLT courant : 60 à 300 mm'],
      ['Vitesse de carbonisation', 'mm/min', 'in/h', '0,65 mm/min ≈ 1,5 in/h'],
      ['Carbone stocké', 'kg CO₂/m³', '-', '≈ 750 à 900 kg CO₂ par m³ de bois résineux'],
    ],
    note: 'Un plancher CLT de 150 mm pèse environ 0,7 kN/m², contre 3,75 kN/m² pour une dalle béton de 15 cm.',
  },
  hypotheses: {
    items: [
      ['info', 'La méthode simplifiée néglige les couches transversales et la déformation de cisaillement roulant : elle surestime la rigidité.'],
      ['info', 'Les propriétés citées sont caractéristiques ; les fabricants publient des valeurs certifiées (ETA) pour leurs panneaux.'],
      ['warning', 'Les planchers bois légers sont sensibles aux vibrations : vérifier la fréquence propre (souvent ≥ 8 Hz visés en logement).'],
      ['warning', 'Le CLT doit être protégé de l’eau pendant le chantier : gonflements et taches sont difficiles à rattraper.'],
      ['tip', 'Une chape flottante ou une dalle béton collaborante améliore l’acoustique et les vibrations.'],
    ],
  },
  simple_examples: {
    examples: [
      {
        title: 'Exemple 1 : poids comparé',
        given: 'CLT de 200 mm (ρ ≈ 470 kg/m³) et dalle béton de 200 mm',
        find: 'Les poids propres',
        solution_latex: "G_{CLT} = 4{,}7 \\times 0{,}20 = 0{,}94\\ \\text{kN/m}^2 \\qquad G_{béton} = 25 \\times 0{,}20 = 5{,}0\\ \\text{kN/m}^2",
        result: 'Le CLT est environ 5 fois plus léger.',
      },
      {
        title: 'Exemple 2 : section résiduelle au feu',
        given: 'Poutre GL24h exposée 60 min sur 3 faces, β_n = 0,7 mm/min',
        find: 'Épaisseur à retirer par face',
        solution_latex: "d_{ef} = 0{,}7 \\times 60 + 1{,}0 \\times 7 = 49\\ \\text{mm}",
        result: '49 mm par face exposée : une poutre de 200 mm de large n’en conserve que 102 mm.',
      },
      {
        title: 'Exemple 3 : carbone stocké',
        given: '300 m³ de CLT, 0,8 t CO₂ stockée par m³',
        find: 'Le carbone biogénique stocké',
        solution_latex: "m_{CO_2} = 300 \\times 0{,}8 = 240\\ \\text{t CO}_2",
        result: '≈ 240 t de CO₂ stockées dans la structure.',
      },
    ],
  },
  real_examples: {
    title: 'Exemple réel — Mjøstårnet (Brumunddal, Norvège, 2019)',
    examples: [
      {
        context: 'Tour mixte de 18 étages et 85,4 m, l’un des plus hauts bâtiments en bois au monde',
        scenario: "Les poteaux, poutres et grandes diagonales sont en lamellé-collé, les cages d'ascenseur et d'escalier en CLT ; les planchers des étages supérieurs sont en béton pour augmenter la masse et limiter les accélérations dues au vent.",
        decomposition_latex: "\\text{Lamellé-collé (structure)} + \\text{CLT (noyaux)} + \\text{béton en partie haute (masse)} \\Rightarrow \\text{confort au vent}",
        lesson: "Pour les bâtiments bois de grande hauteur, la légèreté devient un inconvénient vis-à-vis du vent : on ajoute de la masse aux étages supérieurs et on soigne la rigidité du contreventement.",
      },
    ],
  },
  diagrams: {
    title: 'Schéma de principe — Conception d’un plancher CLT',
    diagram_description: [
      'Choix du produit et de la composition (nombre de couches, épaisseurs)',
      'Rigidité efficace EI_ef (méthode simplifiée, γ ou Timoshenko)',
      'ELU : flexion, cisaillement, cisaillement roulant',
      'ELS : flèche instantanée et finale (k_def), vibrations',
      'Feu : section résiduelle et chute des couches carbonisées',
      'Acoustique et assemblages : chape, vis, appuis, contreventement',
    ],
  },
  mistakes: {
    items: [
      ['Négliger le cisaillement roulant', 'Flèche sous-estimée de 10 à 30 %', 'Majorer la flèche ou utiliser la méthode γ / Timoshenko.'],
      ['Ignorer les vibrations', 'Planchers inconfortables malgré une flèche correcte', 'Vérifier la fréquence propre et la réponse à la marche.'],
      ['Stocker les panneaux sous la pluie', 'Gonflement, fissures, moisissures', 'Bâcher, ventiler et poser rapidement ; mesurer l’humidité avant fermeture.'],
    ],
  },
  tips: {
    tips: [
      'Orientez les couches extérieures du CLT dans le sens de la portée principale.',
      'Les structures mixtes bois-béton (dalle connectée sur CLT) cumulent rigidité, acoustique et faible poids.',
      'Laissez le bois apparent quand le feu le permet : il contribue au confort et réduit les finitions.',
      'Anticipez les réservations : les panneaux sont découpés en usine selon la maquette numérique.',
    ],
  },
  norms: {
    norms: [
      ['NF EN 14080', 'Bois lamellé-collé et bois massif reconstitué : exigences.'],
      ['NF EN 16351', 'Bois lamellé-croisé (CLT) : exigences.'],
      ['NF EN 14374', 'LVL pour usage structural.'],
      ['NF EN 1995-1-1 et 1995-1-2', 'Eurocode 5 : calcul à froid et au feu des structures en bois.'],
      ['NF DTU 31.2', 'Construction de maisons et bâtiments à ossature en bois.'],
    ],
  },
  exercises: {
    exercises: [
      {
        level: 1,
        text: 'Calculer I_ef d’un CLT 3 couches de 40 mm (couches externes longitudinales), par mètre de largeur.',
        hint: 'Couches externes à a = 40 mm du centre.',
        answer_latex: "I_{ef} = 2 \\times \\left(\\frac{1\\,000 \\times 40^3}{12} + 1\\,000 \\times 40 \\times 40^2\\right) = 2 \\times (5{,}33 \\times 10^6 + 6{,}4 \\times 10^7) = 1{,}39 \\times 10^8\\ \\text{mm}^4",
        answer_text: 'I_ef ≈ 1,39 × 10⁸ mm⁴/m.',
      },
      {
        level: 2,
        text: 'Avec E = 11 000 MPa, calculer la flèche de ce panneau sur 4,0 m sous 3,0 kN/m².',
        hint: 'w = 5qL⁴/(384 EI).',
        answer_latex: "w = \\frac{5 \\times 3{,}0 \\times 4\\,000^4}{384 \\times 11\\,000 \\times 1{,}39 \\times 10^8} = 6{,}5\\ \\text{mm}",
        answer_text: 'w ≈ 6,5 mm (avant majoration pour le cisaillement roulant).',
      },
      {
        level: 3,
        text: 'Une poutre GL24h de 200 × 600 mm doit tenir R60 exposée sur 3 faces. Calculer la section résiduelle.',
        hint: 'd_ef = 49 mm par face exposée (exemple 2).',
        answer_latex: "b_{ef} = 200 - 2 \\times 49 = 102\\ \\text{mm} \\qquad h_{ef} = 600 - 49 = 551\\ \\text{mm}",
        answer_text: 'Section résiduelle 102 × 551 mm, à vérifier sous la combinaison accidentelle.',
      },
    ],
  },
  quiz: {
    title: "Quiz — Bois d'ingénierie",
    questions: [
      { q: 'Qu’est-ce qui caractérise le CLT ?', options: ['Des placages de 3 mm parallèles', 'Des couches de planches croisées à 90°', 'Un bois massif non collé'], correct: 1, explain: 'Les couches croisées donnent un panneau stable porteur dans deux directions.' },
      { q: 'Qu’est-ce que le cisaillement roulant ?', options: ['Un cisaillement perpendiculaire au fil dans les couches transversales', 'Le glissement des panneaux sur leurs appuis', 'Un défaut de collage'], correct: 0, explain: 'Les couches transversales sont cisaillées perpendiculairement au fil, avec une faible résistance.' },
      { q: 'Quel critère dimensionne le plus souvent un plancher CLT ?', options: ['La résistance en flexion', 'La flèche et les vibrations', 'Le cisaillement des appuis'], correct: 1, explain: 'Le bois est léger et peu rigide : les critères de service gouvernent.' },
    ],
  },
  exam_questions: {
    questions: [
      'Comparez bois massif, lamellé-collé, CLT et LVL : fabrication, propriétés, usages.',
      'Calculez la rigidité efficace et la flèche d’un plancher CLT par la méthode simplifiée et discutez ses limites.',
      'Présentez les enjeux de la construction bois de grande hauteur (vent, feu, acoustique, assemblages).',
    ],
  },
  interview_questions: {
    questions: [
      ['Quels sont les avantages environnementaux du CLT ?', "Stockage de carbone biogénique, faible énergie de fabrication, préfabrication réduisant les déchets et les nuisances, légèreté réduisant les fondations ; à condition que le bois provienne de forêts gérées durablement."],
      ['Comment justifie-t-on la tenue au feu d’une structure en bois ?', "Par la méthode de la section réduite : le bois carbonise à une vitesse connue, la couche de charbon isole le cœur ; on vérifie la section résiduelle sous les charges de la situation accidentelle, et on protège les assemblages métalliques."],
    ],
  },
  practical_case: {
    title: 'Cas pratique — Surélévation d’un immeuble en CLT',
    scenario: 'Un immeuble R+3 en béton doit recevoir deux niveaux supplémentaires. Les fondations disposent d’une réserve de 6 kN/m² de plancher créé.',
    description: 'Comparer une solution béton et une solution CLT pour les planchers des nouveaux niveaux (G hors revêtements).',
    resolutions: [
      "\\text{Béton : dalle 20 cm} \\Rightarrow G = 5{,}0\\ \\text{kN/m}^2 \\ + \\ \\text{murs béton} > 6\\ \\text{kN/m}^2",
      "\\text{CLT : plancher 180 mm} \\Rightarrow G \\approx 0{,}85\\ \\text{kN/m}^2 + \\text{chape et murs CLT} \\approx 3\\ \\text{kN/m}^2",
      "\\text{Charge totale CLT (G + Q) : } 3 + 1{,}5 = 4{,}5\\ \\text{kN/m}^2 < 6\\ \\text{kN/m}^2 \\quad \\checkmark",
    ],
    conclusion: "La solution CLT respecte la réserve des fondations sans reprise en sous-œuvre ; elle permet en outre un chantier rapide et sec sur un bâtiment occupé.",
  },
  summary: {
    content: `### Le bois d'ingénierie en 5 points
1. Lamellé-collé (poutres), CLT (panneaux croisés), LVL (placages).
2. Propriétés plus élevées et moins dispersées que le bois massif.
3. CLT : $EI_{ef}$ par les couches longitudinales, attention au cisaillement roulant.
4. Les critères de service (flèche, vibrations) gouvernent souvent.
5. Atouts : carbone stocké, préfabrication, légèreté ; points d'attention : eau, feu, acoustique.`,
  },
  key_points: {
    points: [
      'GL24h : f_m,k = 24 MPa, E = 11 500 MPa',
      'CLT : couches croisées en nombre impair',
      'EI_ef = Σ E (bt³/12 + bta²) des couches longitudinales',
      'γ_M = 1,25 pour lamellé-collé et CLT',
      'Feu : d_ef = β_n·t + 7 mm',
    ],
  },
  self_assessment: {
    objectives: [
      "Je distingue les produits bois d'ingénierie et leurs usages",
      'Je sais calculer la rigidité efficace d’un panneau CLT',
      'Je sais vérifier un plancher CLT en flexion et en flèche',
      'Je sais calculer une section résiduelle au feu',
      "J'ai réussi le quiz avec au moins 2 bonnes réponses sur 3",
    ],
  },
});
