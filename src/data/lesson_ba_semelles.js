// ── Lesson: Béton armé — semelles de fondation — Module 9 ────────────────────
import { buildLesson } from './build_lesson.js';

export const lesson_ba_semelles = buildLesson({
  moduleId: 9,
  slug: 'ba_semelles',
  lessonIndex: 5,
  title: "Semelles de Fondation en Béton Armé : Dimensionnement et Méthode des Bielles",
  subtitle: 'Module 09 — Conception & Calcul en Béton Armé',
  level: 'Avancé',
  duration: '12h',
  diagramType: 'soil_profile',
  tags: ['Béton armé', 'Semelles', 'Fondations superficielles', 'Méthode des bielles', 'Poinçonnement', 'Ferraillage'],
}, {
  definition: {
    title: 'Définition — Répartir les charges sur le sol',
    fr: 'Semelle de fondation superficielle en béton armé',
    en: 'Reinforced concrete footing',
    metier: "Utilisée par les ingénieurs structure et géotechniciens, les projeteurs béton armé et les conducteurs de travaux pour toutes les fondations superficielles.",
    content: `Une **semelle** élargit la base d'un poteau ou d'un mur pour que la pression transmise au sol reste inférieure à ce qu'il peut supporter. On distingue :
- la **semelle isolée** sous un poteau ;
- la **semelle filante** sous un mur ou une file de poteaux ;
- le **radier** quand les semelles finiraient par se toucher.

### Deux étapes de calcul
1. **Géotechnique** : les dimensions en plan $A \\times B$ sont fixées par la contrainte admissible du sol.
2. **Béton armé** : la hauteur et les armatures sont fixées par le fonctionnement en **bielles** : la charge du poteau descend en éventail dans le béton comprimé, et les armatures inférieures, tendues, retiennent l'écartement de ces bielles.

> 💡 Une semelle « rigide » (hauteur suffisante) se calcule simplement par la méthode des bielles ; elle évite aussi le poinçonnement.`,
  },
  importance: {
    content: `- **Sécurité** : une fondation défaillante compromet tout l'ouvrage ; les reprises en sous-œuvre sont très coûteuses.
- **Tassements** : des semelles de tailles très différentes tassent différemment et fissurent la superstructure.
- **Économie** : un sol médiocre peut justifier un radier ou des fondations profondes plutôt que des semelles géantes.
- **Exécution** : béton de propreté, enrobage de 5 cm, armatures bien calées.

> ⚠️ **À retenir** : les dimensions en plan dépendent du sol, la hauteur et les aciers dépendent du béton armé.`,
  },
  applications: {
    examples: [
      ['Poteau de bâtiment', 'Semelle isolée carrée sous un poteau de 30 à 50 cm.'],
      ['Mur porteur', 'Semelle filante continue de 40 à 80 cm de large.'],
      ['Poteaux de rive en limite de propriété', 'Semelle excentrée reliée par une longrine à la semelle voisine.'],
      ['Bâtiment industriel', 'Semelles isolées reliées par des longrines pour les efforts horizontaux.'],
      ['Pylône ou mât', 'Semelle soumise à un fort moment de renversement.'],
    ],
  },
  theory: {
    title: 'Théorie — Dimensions en plan et méthode des bielles',
    content: `### 1. Dimensions en plan
À l'état limite de service : $A \\times B \\ge N_{ser} / q_{adm}$ (poids propre de la semelle et des terres compris). Pour un poteau rectangulaire $a \\times b$, on prend souvent une semelle **homothétique** : $A / B = a / b$.

### 2. Hauteur (condition de rigidité)
La méthode des bielles suppose une semelle rigide :
$$d \\ge \\frac{A - a}{4}$$
La hauteur totale est $h = d + 5$ cm environ (enrobage et demi-diamètre).

### 3. Armatures inférieures
L'effort dans le tirant est obtenu par équilibre des bielles. Pour une semelle carrée sous poteau centré, dans chaque direction :
$$A_s = \\frac{N_u \\, (A - a)}{8 \\, d \\, f_{yd}}$$
Pour une semelle filante sous mur d'épaisseur $b$, par mètre de longueur : $A_s = N_u (B - b) / (8 d f_{yd})$.

### 4. Vérifications complémentaires
- **Poinçonnement** si la semelle est souple.
- **Ancrage** des barres : crochets ou barres droites selon la longueur disponible.
- **Semelles excentrées** : contrainte sous la semelle non uniforme ($e \\le B/6$ pour rester entièrement comprimée).`,
  },
  formulas: {
    title: 'Formules essentielles — Semelles',
    formulas: [
      {
        name: 'Surface de la semelle',
        latex: "A \\cdot B \\ge \\frac{N_{ser}}{q_{adm}}",
        description: 'Condition géotechnique à l’ELS (ou avec la portance de calcul à l’ELU selon l’EC7).',
        vars: [
          ['A, B', 'Dimensions en plan', 'm', 'Semelle isolée A × B.'],
          ['N_{ser}', 'Charge de service', 'kN', 'Poids propre de la semelle et des terres compris.'],
          ['q_{adm}', 'Contrainte admissible du sol', 'kPa', 'Donnée par l’étude géotechnique.'],
        ],
      },
      {
        name: 'Condition de rigidité (méthode des bielles)',
        latex: "d \\ge \\frac{A - a}{4}",
        description: 'Garantit des bielles assez inclinées et un fonctionnement rigide.',
        vars: [
          ['d', 'Hauteur utile', 'm', 'Distance du dessus de la semelle aux armatures inférieures.'],
          ['a', 'Dimension du poteau', 'm', 'Dans la direction considérée.'],
        ],
      },
      {
        name: 'Armatures d’une semelle isolée',
        latex: "A_s = \\frac{N_u \\, (A - a)}{8 \\, d \\, f_{yd}}",
        description: 'Section d’acier dans chaque direction (semelle carrée, charge centrée).',
        vars: [
          ['A_s', 'Section d’acier', 'mm²', 'Répartie sur toute la largeur.'],
          ['N_u', 'Charge ELU du poteau', 'N', 'Sans le poids propre de la semelle.'],
          ['f_{yd}', "Limite d'élasticité de calcul", 'MPa', '434,8 MPa pour B500.'],
        ],
        rule: "Plus la semelle déborde, plus les bielles sont plates et plus le tirant est sollicité.",
      },
      {
        name: 'Armatures d’une semelle filante',
        latex: "A_s = \\frac{N_u \\, (B - b)}{8 \\, d \\, f_{yd}}",
        description: 'Section par mètre de longueur, armatures transversales au mur.',
        vars: [
          ['N_u', 'Charge ELU du mur', 'N/m', 'Par mètre de mur.'],
          ['B', 'Largeur de la semelle', 'mm', 'Largeur totale.'],
          ['b', 'Épaisseur du mur', 'mm', 'Mur porté.'],
        ],
      },
      {
        name: 'Contrainte sous une semelle excentrée',
        latex: "\\sigma_{max,min} = \\frac{N}{A B} \\left(1 \\pm \\frac{6e}{B}\\right) \\qquad e = \\frac{M}{N}",
        description: 'Valable si e ≤ B/6 (sol entièrement comprimé).',
        vars: [
          ['\\sigma_{max}, \\sigma_{min}', 'Contraintes extrêmes sur le sol', 'kPa', 'Répartition trapézoïdale.'],
          ['e', 'Excentricité', 'm', 'Moment / effort normal.'],
        ],
      },
    ],
  },
  stepbystep: {
    title: 'Calcul complet — Semelle isolée sous un poteau de 30 × 30 cm',
    problem: "Poteau 30 × 30 cm : N_ser = 720 kN, N_u = 1 000 kN. Contrainte admissible du sol q_adm = 250 kPa. Béton C25/30, aciers B500. Dimensionner une semelle carrée.",
    steps_demo: [
      { n: 1, text: "Surface : A² ≥ 720 / 250 = 2,88 m², majorée d'environ 5 % pour le poids propre → A² ≥ 3,02 m² → A = 1,75 m (3,06 m²)." },
      { n: 2, text: "Rigidité : d ≥ (1,75 − 0,30) / 4 = 0,36 m → d = 0,40 m, h = 0,45 m." },
      { n: 3, text: "Armatures dans chaque direction : A_s = 1 000 000 × (1 750 − 300) / (8 × 400 × 434,8) = 1 042 mm²." },
      { n: 4, text: "Choix : 10 HA12 (1 131 mm²) dans chaque sens, espacés d'environ 18 cm." },
      { n: 5, text: "Contrôle : poids propre réel 1,75² × 0,45 × 25 = 34 kN ; contrainte (720 + 34) / 3,06 = 246 kPa ≤ 250 kPa." },
    ],
    result_latex: "A = 1{,}75\\ \\text{m} \\quad h = 0{,}45\\ \\text{m} \\quad A_s = \\frac{10^6 \\times 1\\,450}{8 \\times 400 \\times 434{,}8} = 1\\,042\\ \\text{mm}^2 \\Rightarrow 10\\ \\text{HA12 par sens}",
  },
  units: {
    table: [
      ['Contrainte du sol', 'kPa, MPa, bar', 'psf, ksf', '1 bar = 100 kPa = 0,1 MPa ≈ 2,09 ksf'],
      ['Charge', 'kN', 'kip', '1 kN = 0,2248 kip'],
      ['Dimensions', 'm', 'ft', '1 m = 3,281 ft'],
      ['Section d’acier', 'mm²', 'in²', 'HA12 = 113 mm² ; HA14 = 154 mm²'],
      ['Poids volumique du béton armé', 'kN/m³', 'pcf', '25 kN/m³'],
    ],
    note: 'Les contraintes de sol données par les rapports géotechniques sont souvent en MPa ou en bar : 0,25 MPa = 2,5 bar = 250 kPa.',
  },
  hypotheses: {
    items: [
      ['info', 'La méthode des bielles suppose une semelle rigide (d ≥ (A − a)/4) et une contrainte de sol uniforme.'],
      ['info', 'Le poids propre de la semelle s’ajoute à la charge transmise au sol, mais pas à l’effort dans les bielles.'],
      ['warning', 'Si la semelle est souple (d plus faible), il faut vérifier la flexion et le poinçonnement selon l’EC2.'],
      ['warning', 'Une forte excentricité (e > B/6) décolle une partie de la semelle : la contrainte maximale augmente fortement.'],
      ['tip', 'Pour des poteaux en limite de propriété, reliez la semelle excentrée à une semelle intérieure par une longrine.'],
    ],
  },
  simple_examples: {
    examples: [
      {
        title: 'Exemple 1 : semelle filante sous un mur',
        given: 'Mur de 20 cm, N_ser = 120 kN/m, N_u = 165 kN/m, q_adm = 200 kPa',
        find: 'Largeur B et hauteur utile',
        solution_latex: "B \\ge \\frac{120}{200} = 0{,}60\\ \\text{m} \\qquad d \\ge \\frac{0{,}60 - 0{,}20}{4} = 0{,}10\\ \\text{m}",
        result: 'B = 0,60 m ; on prend d = 0,15 m (h = 0,20 m) au minimum constructif.',
      },
      {
        title: 'Exemple 2 : armatures de la semelle filante',
        given: 'N_u = 165 kN/m, B = 600 mm, b = 200 mm, d = 150 mm',
        find: 'A_s par mètre',
        solution_latex: "A_s = \\frac{165\\,000 \\times (600 - 200)}{8 \\times 150 \\times 434{,}8} = 126\\ \\text{mm}^2/\\text{m}",
        result: '126 mm²/m → HA8 tous les 25 cm (201 mm²/m) en armatures transversales.',
      },
      {
        title: 'Exemple 3 : semelle excentrée',
        given: 'N = 500 kN, M = 50 kN·m, semelle 1,6 × 1,6 m',
        find: 'σ_max et σ_min',
        solution_latex: "e = \\frac{50}{500} = 0{,}10\\ \\text{m} \\le \\frac{1{,}6}{6} \\quad \\sigma = \\frac{500}{2{,}56}\\left(1 \\pm \\frac{0{,}6}{1{,}6}\\right) = 268 \\ \\text{et} \\ 122\\ \\text{kPa}",
        result: 'Contraintes de 268 kPa et 122 kPa : le sol doit admettre 268 kPa en bord.',
      },
    ],
  },
  real_examples: {
    title: 'Exemple réel — Tassements différentiels d’un entrepôt',
    examples: [
      {
        context: 'Entrepôt logistique sur sol argileux, semelles isolées de tailles très différentes',
        scenario: "Les poteaux de rive, peu chargés, reposent sur de petites semelles ; les poteaux centraux, très chargés, sur de grandes semelles qui tassent davantage à contrainte égale (le bulbe de contraintes descend plus profond). Des fissures apparaissent en toiture et dans le dallage.",
        decomposition_latex: "\\text{même } q \\text{ mais } B \\uparrow \\Rightarrow \\text{tassement} \\uparrow \\Rightarrow \\text{tassements différentiels}",
        lesson: "Sur sol compressible, on dimensionne aussi aux tassements (et pas seulement à la portance) : on peut réduire la contrainte sous les grandes semelles ou choisir un radier.",
      },
    ],
  },
  diagrams: {
    title: 'Schéma de principe — Fonctionnement en bielles d’une semelle',
    diagram_description: [
      'Charge du poteau N_u appliquée au centre de la semelle',
      'Bielles de béton comprimées en éventail vers le sol',
      'Réaction du sol uniforme sous la semelle',
      'Tirant : armatures inférieures qui retiennent l’écartement des bielles',
      'Condition de rigidité d ≥ (A − a)/4',
      'Ancrage des armatures aux extrémités (crochets si nécessaire)',
    ],
  },
  mistakes: {
    items: [
      ['Mettre les armatures en partie haute', 'Tirant au mauvais endroit : rupture de la semelle', 'Armatures principales en lit inférieur, avec enrobage de 5 cm.'],
      ['Oublier le poids propre et les terres', 'Contrainte réelle sur le sol sous-estimée', 'Ajouter le poids de la semelle et des remblais au-dessus.'],
      ['Semelle trop mince', 'Poinçonnement ou flexion excessive', 'Respecter d ≥ (A − a)/4 ou vérifier selon l’EC2.'],
    ],
  },
  tips: {
    tips: [
      'Un béton de propreté de 5 cm protège les armatures du sol et facilite l’implantation.',
      'Gardez les mêmes dimensions pour des semelles de charges voisines : simplification du coffrage et des ferraillages.',
      'Vérifiez la profondeur hors gel et la cote d’assise prescrite par le géotechnicien.',
      'Les attentes du poteau doivent être maintenues en place par un gabarit pendant le bétonnage.',
    ],
  },
  norms: {
    norms: [
      ['NF EN 1992-1-1 §9.8', 'Dispositions constructives des fondations (semelles).'],
      ['NF EN 1997-1 et NF P 94-261', 'Justification géotechnique des fondations superficielles.'],
      ['NF DTU 13.1', 'Fondations superficielles : exécution.'],
      ['NF EN 1992-1-1 §6.4', 'Poinçonnement des semelles et radiers.'],
    ],
  },
  exercises: {
    exercises: [
      {
        level: 1,
        text: 'Un poteau transmet N_ser = 450 kN. Quelle semelle carrée faut-il pour q_adm = 200 kPa (sans poids propre) ?',
        hint: 'A = √(N/q).',
        answer_latex: "A = \\sqrt{\\frac{450}{200}} = 1{,}50\\ \\text{m}",
        answer_text: 'Semelle de 1,50 × 1,50 m (à majorer légèrement pour le poids propre).',
      },
      {
        level: 2,
        text: 'Poteau 35 × 35 cm, semelle 1,60 × 1,60 m. Calculer la hauteur utile minimale et la hauteur totale.',
        hint: 'd ≥ (A − a)/4.',
        answer_latex: "d \\ge \\frac{1{,}60 - 0{,}35}{4} = 0{,}31\\ \\text{m} \\qquad h = 0{,}31 + 0{,}05 = 0{,}36 \\rightarrow 0{,}40\\ \\text{m}",
        answer_text: 'd ≥ 0,31 m ; h = 0,40 m.',
      },
      {
        level: 3,
        text: 'Pour la semelle de l’exercice 2 avec N_u = 900 kN et d = 0,35 m, calculer A_s par direction et choisir les barres.',
        hint: 'A_s = N_u (A − a) / (8 d f_yd).',
        answer_latex: "A_s = \\frac{900\\,000 \\times (1\\,600 - 350)}{8 \\times 350 \\times 434{,}8} = 924\\ \\text{mm}^2",
        answer_text: 'A_s ≈ 924 mm² → 9 HA12 (1 018 mm²) par direction.',
      },
    ],
  },
  quiz: {
    title: 'Quiz — Semelles',
    questions: [
      { q: 'Qu’est-ce qui fixe les dimensions en plan d’une semelle ?', options: ['Le ferraillage', 'La contrainte admissible du sol', 'La classe du béton'], correct: 1, explain: 'A × B ≥ N_ser / q_adm.' },
      { q: 'Où placer les armatures principales d’une semelle sous poteau ?', options: ['En partie haute', 'En partie basse', 'À mi-hauteur'], correct: 1, explain: 'Elles forment le tirant inférieur qui retient les bielles.' },
      { q: 'Quelle est la condition de rigidité de la méthode des bielles ?', options: ['d ≥ (A − a)/4', 'd ≥ A/2', 'd ≥ a'], correct: 0, explain: 'd ≥ (A − a)/4 assure des bielles suffisamment inclinées.' },
    ],
  },
  exam_questions: {
    questions: [
      'Expliquez la méthode des bielles et établissez l’effort dans le tirant d’une semelle filante.',
      'Dimensionnez complètement une semelle isolée (plan, hauteur, armatures, schéma de ferraillage).',
      'Traitez le cas d’une semelle soumise à un effort normal et un moment.',
    ],
  },
  interview_questions: {
    questions: [
      ['Quand passer d’une semelle à un radier ?', "Quand la surface des semelles dépasse environ la moitié de l'emprise du bâtiment, quand le sol est hétérogène ou compressible et que l'on veut homogénéiser les tassements, ou en présence de nappe avec sous-pressions."],
      ['Pourquoi relier les semelles par des longrines ?', 'Pour équilibrer les semelles excentrées, reprendre les efforts horizontaux (séisme), limiter les déplacements relatifs et porter éventuellement les murs de soubassement.'],
    ],
  },
  practical_case: {
    title: 'Cas pratique — Semelle de poteau de rive',
    scenario: 'Poteau 30 × 30 cm en limite de propriété : la semelle ne peut pas déborder côté voisin. N_ser = 500 kN, q_adm = 200 kPa.',
    description: 'Proposer une solution et quantifier l’excentricité si la semelle (1,60 × 1,60 m) est simplement décalée.',
    resolutions: [
      "\\text{Semelle décalée : centre à } \\frac{1{,}60}{2} - \\frac{0{,}30}{2} = 0{,}65\\ \\text{m du poteau} \\Rightarrow e = 0{,}65\\ \\text{m}",
      "e = 0{,}65 > \\frac{B}{6} = 0{,}27\\ \\text{m} \\Rightarrow \\text{décollement et contrainte de bord excessive}",
      "\\text{Solution : longrine de redressement reliant la semelle de rive à une semelle intérieure}",
    ],
    conclusion: "Une semelle excentrée seule est inacceptable (e ≫ B/6). Une longrine rigide reprend le moment d'excentricité et ramène une contrainte quasi uniforme sous la semelle de rive.",
  },
  summary: {
    content: `### Les semelles en 5 points
1. Surface : $A \\cdot B \\ge N_{ser} / q_{adm}$.
2. Rigidité : $d \\ge (A - a)/4$.
3. Armatures (bielles) : $A_s = N_u (A - a) / (8 d f_{yd})$.
4. Excentricité : $\\sigma = \\frac{N}{AB}(1 \\pm 6e/B)$ avec $e \\le B/6$.
5. Exécution : béton de propreté, enrobage 5 cm, longrines pour les semelles de rive.`,
  },
  key_points: {
    points: [
      'A·B ≥ N_ser / q_adm',
      'd ≥ (A − a) / 4',
      'A_s = N_u (A − a) / (8 d f_yd)',
      'e ≤ B/6 pour un sol entièrement comprimé',
      'Armatures principales en lit inférieur',
    ],
  },
  self_assessment: {
    objectives: [
      'Je sais déterminer les dimensions en plan d’une semelle',
      'Je sais appliquer la méthode des bielles',
      'Je sais calculer les armatures d’une semelle isolée et filante',
      'Je sais traiter une semelle excentrée',
      "J'ai réussi le quiz avec au moins 2 bonnes réponses sur 3",
    ],
  },
});
