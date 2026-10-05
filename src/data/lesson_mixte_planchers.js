// ── Lesson: Planchers collaborants — Module 40 ───────────────────────────────
import { buildLesson } from './build_lesson.js';

export const lesson_mixte_planchers = buildLesson({
  moduleId: 40,
  slug: 'mixte_planchers',
  lessonIndex: 2,
  title: "Planchers Collaborants (Bac Acier) : Phase de Construction, Étaiement et Résistance en Phase Mixte (EC4)",
  subtitle: 'Module 40 — Structures mixtes acier-béton',
  level: 'Intermédiaire',
  duration: '5h',
  tags: ['Plancher collaborant', 'Bac acier', 'EC4', 'Étaiement', 'Cisaillement longitudinal', 'Dalle mixte'],
}, {
  definition: {
    title: 'Définition — Un bac acier qui sert de coffrage puis d’armature',
    fr: 'Plancher collaborant (dalle mixte)',
    en: 'Composite slab with profiled steel decking',
    metier: "Utilisé par les ingénieurs structure en bâtiment métallique et mixte, les entreprises de charpente et les bureaux de contrôle.",
    content: `Un **plancher collaborant** est constitué d'une **tôle d'acier nervurée** (bac acier) sur laquelle on coule une dalle de béton. Le bac joue deux rôles successifs :

1. **Phase de construction** : coffrage perdu et plate-forme de travail ; il porte seul le béton frais et les charges de chantier.
2. **Phase définitive** : grâce aux bossages et à la forme des nervures, le bac adhère au béton et sert d'**armature inférieure** de la dalle.

### Avantages
Pas de coffrage à décoffrer, montage rapide, plancher léger, compatibilité avec les poutres mixtes.

### Points de vigilance
- La **flèche du bac** pendant le bétonnage (souvent déterminante) ;
- la **liaison bac-béton** (cisaillement longitudinal) ;
- la **résistance au feu** (armatures complémentaires dans les nervures).

> 💡 L'Eurocode 4 impose une épaisseur totale d'au moins 80 mm et au moins 40 mm de béton au-dessus des nervures (90 et 50 mm si la dalle participe à une poutre mixte).`,
  },
  importance: {
    content: `- **Rapidité** : plusieurs centaines de m² posés par jour, sans étaiement si les portées sont adaptées.
- **Économie** : moins de béton et d'acier qu'une dalle pleine équivalente.
- **Sécurité** : le bac posé forme immédiatement une plate-forme de travail.
- **Interaction** : le choix du bac conditionne l'espacement des poutres secondaires.

> ⚠️ **À retenir** : la plupart des incidents surviennent pendant le bétonnage (surcharge locale, étais manquants, fixations insuffisantes).`,
  },
  applications: {
    examples: [
      ['Immeuble de bureaux', 'Bac acier sur poutres mixtes espacées de 3 à 4 m.'],
      ['Parking métallique', 'Plancher collaborant avec protection anticorrosion renforcée.'],
      ['Mezzanine industrielle', 'Montage rapide sans étaiement.'],
      ['Réhabilitation', 'Plancher léger sur structure existante.'],
      ['Grande hauteur', 'Bac acier comme coffrage de dalles sur poutres métalliques.'],
    ],
  },
  theory: {
    title: 'Théorie — Deux phases de calcul',
    content: `### 1. Phase de construction (bac seul)
Charges : poids du béton frais (y compris surépaisseur due à la flèche), poids du bac, charges de chantier (EN 1991-1-6).
- Résistance du bac : moments et réactions selon les données du fabricant.
- **Flèche** : $\\delta \\leq L/180$ en général (EC4).
$$\\delta = \\frac{5 q L^4}{384 E I_{eff}}$$
Si la flèche est trop grande, on **étaie** à mi-portée (la flèche est divisée par 16).

### 2. Phase définitive (dalle mixte)
Bloc de compression rectangulaire dans le béton au-dessus des nervures :
$$N_p = A_{pe} \\, f_{yp,d} \\qquad x_{pl} = \\frac{N_p}{0{,}85 \\, f_{cd} \\, b} \\qquad M_{pl,Rd} = N_p \\left( d_p - \\frac{x_{pl}}{2} \\right)$$
$A_{pe}$ : aire efficace du bac par mètre ; $d_p$ : distance de la face supérieure au centre de gravité du bac.

### 3. Cisaillement longitudinal
Souvent déterminant : vérifié par la méthode **m-k** ou par la méthode de **connexion partielle**, avec les paramètres issus d'essais du fabricant.

### 4. Feu
Sans protection, la tôle chauffe vite ; la résistance au feu est obtenue par des armatures dans les nervures et l'épaisseur de béton (isolation).`,
  },
  formulas: {
    title: 'Formules essentielles — Dalles mixtes',
    formulas: [
      {
        name: 'Effort plastique du bac',
        latex: "N_p = A_{pe} \\, f_{yp,d}",
        description: 'Traction du bac à l’ELU, par mètre de largeur.',
        vars: [
          ['A_{pe}', 'Aire efficace du bac', 'mm²/m', 'Donnée fabricant.'],
          ['f_{yp,d}', 'Limite élastique de calcul du bac', 'MPa', 'f_yp / γ_M0 (S320GD, S350GD…).'],
        ],
      },
      {
        name: 'Moment plastique (axe neutre au-dessus des nervures)',
        latex: "M_{pl,Rd} = N_p \\left( d_p - \\frac{x_{pl}}{2} \\right) \\qquad x_{pl} = \\frac{N_p}{0{,}85 f_{cd} b}",
        description: 'Valable si x_pl ≤ h_c (épaisseur au-dessus des nervures).',
        vars: [
          ['d_p', 'Hauteur utile du bac', 'mm', 'Face supérieure → centre de gravité du bac.'],
          ['x_{pl}', 'Hauteur du bloc comprimé', 'mm', ''],
          ['b', 'Largeur de calcul', 'mm', '1 000 mm.'],
        ],
      },
      {
        name: 'Flèche en phase de construction',
        latex: "\\delta = \\frac{5 q L^4}{384 E I_{eff}} \\leq \\frac{L}{180}",
        description: 'Bac seul sous béton frais.',
        vars: [
          ['q', 'Charge (béton frais + bac)', 'N/mm', 'Par mètre de largeur.'],
          ['I_{eff}', 'Inertie efficace du bac', 'mm⁴/m', 'Donnée fabricant.'],
        ],
      },
      {
        name: 'Moment sollicitant (travée isostatique)',
        latex: "M_{Ed} = \\frac{q_{Ed} L^2}{8}",
        description: 'Pour une dalle sur deux appuis.',
        vars: [
          ['q_{Ed}', 'Charge ELU', 'kN/m²', '1,35 G + 1,5 Q.'],
        ],
      },
    ],
  },
  stepbystep: {
    title: 'Calcul complet — Plancher de bureaux de 3,50 m de portée',
    problem: "Bac de 1 mm (A_pe = 1 500 mm²/m, f_yp = 350 MPa, I_eff = 60 cm⁴/m = 6 × 10⁵ mm⁴/m), dalle de 130 mm (nervures de 60 mm, d_p = 100 mm), béton C25/30. Portée 3,50 m. Béton frais 2,6 kN/m². Charges finales : G = 4,1 kN/m², Q = 5,0 kN/m². Vérifier la flèche au bétonnage et la flexion en phase mixte.",
    steps_demo: [
      { n: 1, text: "Flèche au bétonnage sans étai : δ = 5 × 2,6 × 3 500⁴ / (384 × 210 000 × 6 × 10⁵) = 40 mm > L/180 = 19 mm : étai nécessaire." },
      { n: 2, text: "Avec un étai central (portée 1,75 m) : δ = 40 / 16 = 2,5 mm : conforme." },
      { n: 3, text: "Phase mixte : N_p = 1 500 × 350 = 525 kN/m ; x_pl = 525 000 / (0,85 × 16,7 × 1 000) = 37 mm < 70 mm." },
      { n: 4, text: "M_pl,Rd = 525 × (100 − 18,5) / 1 000 = 42,8 kN·m/m." },
      { n: 5, text: "q_Ed = 1,35 × 4,1 + 1,5 × 5,0 = 13,0 kN/m² ; M_Ed = 13,0 × 3,5² / 8 = 19,9 kN·m/m ≤ 42,8 : flexion vérifiée ; le cisaillement longitudinal (méthode m-k) reste à vérifier avec les données du fabricant." },
    ],
    result_latex: "\\delta_{sans\\ étai} = 40\\ \\text{mm} > \\frac{3\\,500}{180} \\qquad M_{pl,Rd} = 525 \\times (100 - 18{,}5) = 42{,}8\\ \\text{kN·m/m} \\geq 19{,}9",
  },
  units: {
    table: [
      ['Aire du bac', 'mm²/m', 'in²/ft', '1 in²/ft = 2 117 mm²/m'],
      ['Inertie', 'cm⁴/m', 'in⁴/ft', '1 in⁴/ft = 136,6 cm⁴/m'],
      ['Charge', 'kN/m²', 'psf', '1 kN/m² = 20,9 psf'],
      ['Épaisseur de tôle', 'mm', 'gauge', '1 mm ≈ gauge 19 à 20'],
      ['Moment', 'kN·m/m', 'kip·ft/ft', '1 kip·ft/ft = 4,45 kN·m/m'],
    ],
    note: 'Les caractéristiques des bacs (A_pe, I_eff, m-k) proviennent des documents techniques des fabricants.',
  },
  hypotheses: {
    items: [
      ['info', 'Le moment plastique suppose une connexion complète bac-béton ; en pratique la connexion est partielle et se vérifie par essais.'],
      ['info', 'L’effet de « mare » (surépaisseur de béton due à la flèche) doit être pris en compte si la flèche dépasse 1/10 de l’épaisseur.'],
      ['warning', 'Les étais doivent rester en place jusqu’à ce que le béton atteigne une résistance suffisante.'],
      ['warning', 'Les ouvertures (trémies) dans le bac nécessitent des chevêtres ou renforts.'],
      ['tip', 'Utilisez les abaques des fabricants pour choisir épaisseur de tôle et portée sans étai.'],
    ],
  },
  simple_examples: {
    examples: [
      {
        title: 'Exemple 1 : effort du bac',
        given: 'A_pe = 1 200 mm²/m ; f_yp = 320 MPa',
        find: 'N_p',
        solution_latex: "N_p = 1\\,200 \\times 320 = 384\\ \\text{kN/m}",
        result: '384 kN/m.',
      },
      {
        title: 'Exemple 2 : flèche admissible',
        given: 'L = 3,0 m',
        find: 'δ_max',
        solution_latex: "\\delta_{max} = \\frac{3\\,000}{180} = 16{,}7\\ \\text{mm}",
        result: '16,7 mm.',
      },
      {
        title: 'Exemple 3 : hauteur du bloc comprimé',
        given: 'N_p = 384 kN/m ; C30/37 (f_cd = 20 MPa)',
        find: 'x_pl',
        solution_latex: "x_{pl} = \\frac{384\\,000}{0{,}85 \\times 20 \\times 1\\,000} = 22{,}6\\ \\text{mm}",
        result: '22,6 mm.',
      },
    ],
  },
  real_examples: {
    title: 'Exemple réel — Effondrement d’un plancher pendant le bétonnage',
    examples: [
      {
        context: 'Chantier de bâtiment métallique',
        scenario: "Pendant le coulage, le béton a été déversé en tas important au milieu d'une travée non étayée prévue avec étai. Le bac a fléchi, la surépaisseur de béton a encore augmenté la charge, et la tôle a cédé localement. Les compagnons ont été heureusement évacués à temps.",
        decomposition_latex: "\\text{Étai absent} + \\text{béton en tas} \\Rightarrow q_{local} \\uparrow \\Rightarrow \\delta \\uparrow \\Rightarrow \\text{effet de mare} \\Rightarrow \\text{rupture}",
        lesson: "Le plan d'étaiement et la méthode de bétonnage (étaler le béton, pas de tas) sont des documents d'exécution à faire respecter.",
      },
    ],
  },
  diagrams: {
    title: 'Schéma de principe — Plancher collaborant',
    diagram_description: [
      'Poutres porteuses (métalliques ou mixtes)',
      'Bac acier nervuré fixé sur les poutres',
      'Étais provisoires si la portée dépasse la portée sans étai',
      'Treillis soudé anti-fissuration et armatures de feu dans les nervures',
      'Béton coulé et réparti en couche régulière',
      'Phase mixte : bac = armature inférieure, béton = zone comprimée',
    ],
  },
  mistakes: {
    items: [
      ['Oublier la phase de construction', 'Flèche excessive ou rupture au bétonnage', 'Vérifier le bac seul et prévoir l’étaiement.'],
      ['Négliger le cisaillement longitudinal', 'Glissement bac-béton', 'Utiliser les valeurs m-k du fabricant.'],
      ['Ignorer la résistance au feu', 'Plancher non conforme', 'Armatures complémentaires ou protection.'],
    ],
  },
  tips: {
    tips: [
      'Fixez le bac sur chaque appui (clous, vis ou goujons soudés).',
      'Prévoyez des closoirs en rive pour retenir le béton.',
      'Étalez le béton au fur et à mesure, sans tas.',
      'Vérifiez la planéité avant le coulage (attention aux surépaisseurs).',
    ],
  },
  norms: {
    norms: [
      ['NF EN 1994-1-1 (section 9)', 'Dalles mixtes avec plaques nervurées en acier.'],
      ['NF EN 1993-1-3', 'Profilés et plaques formés à froid.'],
      ['NF EN 1991-1-6', 'Actions en cours d’exécution.'],
      ['NF EN 1994-1-2', 'Calcul au feu des structures mixtes.'],
    ],
  },
  exercises: {
    exercises: [
      {
        level: 1,
        text: 'Quelle est l’épaisseur minimale d’une dalle mixte selon l’EC4 ?',
        hint: 'Deux valeurs selon la participation à une poutre mixte.',
        answer_latex: "h \\geq 80\\ \\text{mm} \\ (90\\ \\text{mm si poutre mixte})",
        answer_text: '80 mm (90 mm si la dalle participe à une poutre mixte).',
      },
      {
        level: 2,
        text: 'Calculer M_pl,Rd pour N_p = 384 kN/m, d_p = 95 mm et x_pl = 22,6 mm.',
        hint: 'M = N_p (d_p − x/2).',
        answer_latex: "M_{pl,Rd} = 384 \\times (95 - 11{,}3) / 1\\,000 = 32{,}1\\ \\text{kN·m/m}",
        answer_text: '32,1 kN·m/m.',
      },
      {
        level: 3,
        text: 'Quelle portée maximale sans étai pour le bac de l’exemple (q = 2,6 kN/m², I_eff = 6 × 10⁵ mm⁴/m) avec δ ≤ L/180 ?',
        hint: 'Résoudre 5qL³/(384 E I) = 1/180.',
        answer_latex: "L^3 = \\frac{384 \\times 210\\,000 \\times 6 \\times 10^5}{180 \\times 5 \\times 2{,}6} \\Rightarrow L = 2\\,745\\ \\text{mm}",
        answer_text: 'Environ 2,75 m sans étai.',
      },
    ],
  },
  quiz: {
    title: 'Quiz — Planchers collaborants',
    questions: [
      { q: 'Quel est le rôle du bac acier pendant le bétonnage ?', options: ['Armature seulement', 'Coffrage et plate-forme de travail', 'Isolant'], correct: 1, explain: 'Il porte seul le béton frais.' },
      { q: 'Quelle vérification est souvent déterminante en phase définitive ?', options: ['Le cisaillement longitudinal', 'La torsion', 'Le flambement'], correct: 0, explain: 'La liaison bac-béton.' },
      { q: 'Un étai à mi-portée divise la flèche par…', options: ['2', '4', '16'], correct: 2, explain: 'La flèche varie en L⁴.' },
    ],
  },
  exam_questions: {
    questions: [
      'Décrivez les deux phases de calcul d’un plancher collaborant.',
      'Calculez le moment résistant d’une dalle mixte.',
      'Quels sont les risques pendant le bétonnage et comment les maîtriser ?',
    ],
  },
  interview_questions: {
    questions: [
      ['Comment choisissez-vous un bac acier ?', 'Selon la portée entre poutres, la portée sans étai souhaitée, les charges finales, la résistance au feu requise et les tableaux du fabricant.'],
      ['Que vérifiez-vous avant le bétonnage d’un plancher collaborant ?', 'Fixations, closoirs, étais conformes au plan, armatures et réservations, propreté, et la méthode de coulage.'],
    ],
  },
  practical_case: {
    title: 'Cas pratique — Choisir entre étaiement et poutres plus rapprochées',
    scenario: 'Plancher de 1 200 m² à poutres espacées de 3,50 m. Le bac ne franchit que 2,75 m sans étai. Coût de l’étaiement : 8 €/m². Option : poutres secondaires tous les 2,33 m (coût supplémentaire 6 t d’acier à 3 000 €/t).',
    description: 'Comparer les deux solutions.',
    resolutions: [
      "\\text{Étaiement} : 1\\,200 \\times 8 = 9\\,600\\ €",
      "\\text{Poutres supplémentaires} : 6 \\times 3\\,000 = 18\\,000\\ € \\ (\\text{mais pas d’étais, chantier plus rapide})",
      "\\text{Option bac plus épais (1,25 mm)} : \\text{portée sans étai plus grande, à chiffrer}",
    ],
    conclusion: 'L’étaiement est moins cher ; les poutres rapprochées se justifient seulement si le délai et la coactivité sous le plancher sont critiques.',
  },
  summary: {
    content: `### Les planchers collaborants en 5 points
1. Bac = coffrage puis armature.
2. Construction : flèche $\\leq L/180$, étaiement si besoin.
3. Phase mixte : $M_{pl,Rd} = N_p (d_p - x_{pl}/2)$.
4. Cisaillement longitudinal par méthode m-k.
5. Feu : armatures complémentaires ; épaisseur ≥ 80 mm.`,
  },
  key_points: {
    points: [
      'Deux phases de calcul',
      'δ ≤ L/180 au bétonnage',
      'N_p = A_pe f_yp,d',
      'M = N_p (d_p − x/2)',
      'Étai central : flèche ÷ 16',
    ],
  },
  self_assessment: {
    objectives: [
      'Je comprends le fonctionnement d’un plancher collaborant',
      'Je sais vérifier la phase de construction',
      'Je sais calculer le moment résistant mixte',
      'Je connais les risques du bétonnage',
      "J'ai réussi le quiz avec au moins 2 bonnes réponses sur 3",
    ],
  },
});
