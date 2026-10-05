// ── Lesson: Béton armé — dalles — Module 9 ───────────────────────────────────
import { buildLesson } from './build_lesson.js';

export const lesson_ba_dalles = buildLesson({
  moduleId: 9,
  slug: 'ba_dalles',
  lessonIndex: 4,
  title: "Dalles en Béton Armé : Portée dans un Sens ou deux Sens, Moments & Ferraillage",
  subtitle: 'Module 09 — Conception & Calcul en Béton Armé',
  level: 'Avancé',
  duration: '15h',
  diagramType: 'plan_coffrage',
  tags: ['Béton armé', 'Dalles', 'Panneau de dalle', 'Moments', 'Ferraillage', 'Poinçonnement', 'EC2'],
}, {
  definition: {
    title: 'Définition — Les plaques qui portent les planchers',
    fr: 'Dalle (plaque) en béton armé',
    en: 'Reinforced concrete slab',
    metier: "Utilisée par les ingénieurs structure, projeteurs béton armé et entreprises de gros œuvre pour les planchers, radiers, balcons et tabliers de ponts-dalles.",
    content: `Une **dalle** est un élément plan dont l'épaisseur $h$ est faible devant ses autres dimensions. Elle reçoit les charges du plancher et les transmet aux poutres, aux murs ou directement aux poteaux.

### Deux modes de fonctionnement
- **Dalle portant dans un sens** : appuyée sur deux côtés opposés, ou très allongée ($l_x / l_y < 0{,}4$). Elle se calcule comme une poutre de 1 m de large.
- **Dalle portant dans deux sens** : appuyée sur ses quatre côtés avec $l_x / l_y \\ge 0{,}4$. Les charges se partagent entre les deux directions, la petite portée $l_x$ reprenant la plus grande part.

### Particularités
- Pas d'étriers en général : on vérifie que le béton seul reprend l'effort tranchant.
- Planchers-dalles (sans poutres) : le **poinçonnement** autour des poteaux devient la vérification critique.

> 💡 Une dalle carrée appuyée sur 4 côtés a un moment environ 3,4 fois plus faible qu'une dalle de même portée appuyée sur 2 côtés.`,
  },
  importance: {
    content: `- **Volume de béton** : les dalles représentent la plus grande part du béton d'un bâtiment ; leur épaisseur pèse sur le coût et le bilan carbone.
- **Service** : flèches, vibrations et isolation acoustique (une dalle de 20 cm est courante en logement collectif).
- **Sécurité** : le poinçonnement des planchers-dalles a causé plusieurs effondrements.
- **Ferraillage** : treillis soudés et barres doivent être placés au bon lit (inférieur en travée, supérieur sur appuis).

> ⚠️ **À retenir** : un chapeau (armature supérieure) piétiné et écrasé au bétonnage ne sert plus à rien ; utilisez des chaises de calage.`,
  },
  applications: {
    examples: [
      ['Plancher de logement', 'Dalle pleine de 20 cm portant sur les voiles, treillis soudés en travée et chapeaux sur appuis.'],
      ['Plancher-dalle de bureaux', 'Dalle sur poteaux sans retombées de poutres, armatures de poinçonnement ou chapiteaux.'],
      ['Balcon', 'Dalle en console avec rupteur de pont thermique.'],
      ['Radier', 'Dalle inversée qui répartit les charges sur le sol.'],
      ['Pont-dalle', 'Tablier de petit ouvrage d’art de 10 à 20 m de portée.'],
    ],
  },
  theory: {
    title: 'Théorie — Moments dans les panneaux de dalle',
    content: `### 1. Dalle portant dans un sens
On étudie une bande de 1 m : $M_{Ed} = p_u \\, l^2 / 8$ pour une travée isostatique sous charge uniforme $p_u$ (kN/m²).

### 2. Dalle rectangulaire portant dans deux sens
Pour un panneau articulé sur ses quatre côtés sous charge uniforme, la méthode française (issue du BAEL, toujours utilisée avec l'EC2) donne les moments par mètre de largeur :
$$M_x = \\mu_x \\, p_u \\, l_x^2 \\qquad M_y = \\mu_y \\, M_x$$
avec $\\rho = l_x / l_y$ (ELU, coefficient de Poisson nul) :

| ρ | 0,4 | 0,5 | 0,6 | 0,7 | 0,8 | 0,9 | 1,0 |
|---|---|---|---|---|---|---|---|
| μx | 0,1101 | 0,0966 | 0,0812 | 0,0683 | 0,0561 | 0,0456 | 0,0368 |
| μy | 0,2500 | 0,2500 | 0,3054 | 0,4320 | 0,5959 | 0,7834 | 1,0000 |

### 3. Continuité
Pour un panneau continu, on répartit le moment isostatique : environ 0,75 à 0,85 $M_0$ en travée et 0,3 à 0,5 $M_0$ sur appuis (la somme des valeurs absolues restant au moins égale à 1,25 $M_0$ environ).

### 4. Ferraillage
Calcul en flexion simple d'une section de 1 m de large (hauteur utile $d$), avec les minimums de l'EC2 :
$$A_{s,min} = \\max\\left(0{,}26 \\frac{f_{ctm}}{f_{yk}} b d \\, ; \\, 0{,}0013 \\, b d\\right)$$
Espacement maximal (dalles) : 3h et 400 mm pour les armatures principales, 3,5h et 450 mm pour les armatures de répartition.`,
  },
  formulas: {
    title: 'Formules essentielles — Dalles',
    formulas: [
      {
        name: 'Dalle portant dans un sens (bande de 1 m)',
        latex: "M_{Ed} = \\frac{p_u \\, l^2}{8}",
        description: 'Travée isostatique sous charge uniforme, calcul par mètre de largeur.',
        vars: [
          ['M_{Ed}', 'Moment de calcul', 'kN·m/m', 'Par mètre de largeur.'],
          ['p_u', 'Charge surfacique ELU', 'kN/m²', '1,35 G + 1,5 Q.'],
          ['l', 'Portée', 'm', 'Entre appuis.'],
        ],
      },
      {
        name: 'Panneau portant dans deux sens',
        latex: "M_x = \\mu_x \\, p_u \\, l_x^2 \\qquad M_y = \\mu_y \\, M_x",
        description: 'Panneau articulé sur ses quatre côtés, ρ = l_x / l_y ≥ 0,4.',
        vars: [
          ['M_x', 'Moment dans le sens de la petite portée', 'kN·m/m', 'Le plus grand moment.'],
          ['M_y', 'Moment dans le sens de la grande portée', 'kN·m/m', 'Toujours inférieur à M_x.'],
          ['\\mu_x, \\mu_y', 'Coefficients', '-', 'Tables en fonction de ρ.'],
          ['l_x', 'Petite portée', 'm', 'l_x ≤ l_y.'],
        ],
        rule: "Au-delà de ρ ≈ 0,4, la dalle porte dans deux sens ; en dessous, elle se calcule comme une poutre selon l_x.",
      },
      {
        name: 'Moment réduit et section d’acier',
        latex: "\\mu_{cu} = \\frac{M_{Ed}}{b \\, d^2 \\, f_{cd}} \\qquad A_s = \\frac{M_{Ed}}{z \\, f_{yd}} \\quad z = d\\,(1 - 0{,}4\\,\\alpha)",
        description: 'Flexion simple d’une bande de 1 m, avec α = 1,25 (1 − √(1 − 2μ_cu)).',
        vars: [
          ['\\mu_{cu}', 'Moment réduit', '-', 'Très faible en dalle (souvent < 0,10).'],
          ['b', 'Largeur de calcul', 'mm', '1 000 mm.'],
          ['d', 'Hauteur utile', 'mm', '≈ h − 25 à 35 mm.'],
          ['z', 'Bras de levier', 'mm', '≈ 0,95 d en dalle.'],
          ['A_s', 'Section d’acier', 'mm²/m', 'Par mètre de largeur.'],
        ],
      },
      {
        name: 'Section minimale d’armatures',
        latex: "A_{s,min} = \\max\\left(0{,}26 \\, \\frac{f_{ctm}}{f_{yk}} \\, b \\, d \\, ; \\, 0{,}0013 \\, b \\, d\\right)",
        description: 'EC2 §9.3.1.1 (renvoie au §9.2.1.1).',
        vars: [
          ['f_{ctm}', 'Résistance moyenne en traction', 'MPa', 'C25/30 : 2,56 MPa.'],
          ['f_{yk}', "Limite d'élasticité", 'MPa', '500 MPa.'],
        ],
      },
    ],
  },
  stepbystep: {
    title: 'Calcul complet — Panneau de dalle de 4,0 × 5,0 m',
    problem: "Dalle pleine de 18 cm (d = 150 mm) appuyée sur quatre côtés (articulés), l_x = 4,0 m, l_y = 5,0 m. Charges : G = 6,5 kN/m² (poids propre 4,5 + revêtements 2,0), Q = 2,5 kN/m². Béton C25/30, aciers B500. Calculer les moments et le ferraillage dans le sens l_x.",
    steps_demo: [
      { n: 1, text: "Charge ELU : p_u = 1,35 × 6,5 + 1,5 × 2,5 = 12,53 kN/m²." },
      { n: 2, text: "ρ = 4,0 / 5,0 = 0,8 → μ_x = 0,0561 ; μ_y = 0,5959." },
      { n: 3, text: "M_x = 0,0561 × 12,53 × 4,0² = 11,2 kN·m/m ; M_y = 0,5959 × 11,2 = 6,7 kN·m/m." },
      { n: 4, text: "Moment réduit : μ_cu = 11,2 × 10⁶ / (1 000 × 150² × 16,67) = 0,030 → α = 0,038 → z = 147,7 mm." },
      { n: 5, text: "A_s = 11,2 × 10⁶ / (147,7 × 434,8) = 175 mm²/m." },
      { n: 6, text: "Minimum : A_s,min = max(0,26 × 2,56 / 500 × 1 000 × 150 ; 0,0013 × 1 000 × 150) = 200 mm²/m → le minimum gouverne : HA8 tous les 25 cm (201 mm²/m)." },
    ],
    result_latex: "M_x = 0{,}0561 \\times 12{,}53 \\times 16 = 11{,}2\\ \\text{kN·m/m} \\qquad A_s = 175\\ \\text{mm}^2/\\text{m} < A_{s,min} = 200\\ \\text{mm}^2/\\text{m}",
  },
  units: {
    table: [
      ['Charge surfacique', 'kN/m²', 'psf', '1 kN/m² = 20,9 psf'],
      ['Moment par mètre', 'kN·m/m', 'kip·ft/ft', '1 kN·m/m = 0,2248 kip·ft/ft'],
      ['Section d’acier par mètre', 'mm²/m, cm²/m', 'in²/ft', '1 cm²/m = 100 mm²/m'],
      ['Treillis soudé', 'ST25, ST35…', '-', 'ST25C : 2,57 cm²/m dans chaque sens'],
      ['Poids propre de dalle', 'kN/m²', 'psf', '25 × h (h en m)'],
    ],
    note: 'Les sections d’acier des dalles se donnent par mètre de largeur : HA10 tous les 20 cm = 393 mm²/m.',
  },
  hypotheses: {
    items: [
      ['info', 'Les coefficients μ supposent un panneau rectangulaire, articulé sur ses 4 côtés, sous charge uniforme.'],
      ['info', 'La redistribution sur appuis pour les panneaux continus est une méthode forfaitaire usuelle pour les planchers courants.'],
      ['warning', 'Les charges concentrées (cloisons lourdes, équipements) imposent un calcul spécifique.'],
      ['warning', 'Les trémies importantes modifient le fonctionnement du panneau : chevêtres et renforts à prévoir.'],
      ['tip', 'Vérifiez la flèche par l’élancement limite l/d de l’EC2 avant de calculer la flèche détaillée.'],
    ],
  },
  simple_examples: {
    examples: [
      {
        title: 'Exemple 1 : dalle portant dans un sens',
        given: 'Dalle de 3,5 m sur deux murs, p_u = 12 kN/m²',
        find: 'M_Ed',
        solution_latex: "M_{Ed} = \\frac{12 \\times 3{,}5^2}{8} = 18{,}4\\ \\text{kN·m/m}",
        result: '18,4 kN·m par mètre de largeur.',
      },
      {
        title: 'Exemple 2 : dalle carrée',
        given: 'Panneau 5 × 5 m, p_u = 12 kN/m²',
        find: 'M_x et M_y',
        solution_latex: "M_x = M_y = 0{,}0368 \\times 12 \\times 25 = 11{,}0\\ \\text{kN·m/m}",
        result: '11,0 kN·m/m dans chaque direction (contre 37,5 si elle portait dans un seul sens).',
      },
      {
        title: 'Exemple 3 : section d’un treillis',
        given: 'Barres HA8 tous les 15 cm',
        find: 'A_s par mètre',
        solution_latex: "A_s = \\frac{1\\,000}{150} \\times 50{,}3 = 335\\ \\text{mm}^2/\\text{m}",
        result: '3,35 cm²/m.',
      },
    ],
  },
  real_examples: {
    title: 'Exemple réel — Poinçonnement du Pipers Row Car Park (Wolverhampton, 1997)',
    examples: [
      {
        context: 'Parking à plancher-dalle sur poteaux, construit en 1965',
        scenario: "Une partie du dernier niveau s'est effondrée la nuit par poinçonnement autour d'un poteau : béton dégradé, armatures supérieures mal positionnées et charges de gravillons et d'étanchéité ajoutées au fil des réparations.",
        decomposition_latex: "\\text{Chapeaux mal calés} + \\text{béton dégradé} + \\text{surcharges} \\Rightarrow \\text{poinçonnement} \\Rightarrow \\text{effondrement partiel}",
        lesson: "Le poinçonnement est une rupture fragile ; la position des armatures supérieures et la vérification des surcharges ajoutées lors des réfections sont essentielles.",
      },
    ],
  },
  diagrams: {
    title: 'Schéma de principe — Calcul d’un panneau de dalle',
    diagram_description: [
      'Géométrie : l_x ≤ l_y, conditions d’appui, épaisseur h et hauteur utile d',
      'Charges : G (poids propre, revêtements, cloisons) et Q → p_u',
      'Mode de portée : ρ = l_x / l_y, un sens si ρ < 0,4',
      'Moments : μ_x et μ_y, puis répartition travée / appuis',
      'Ferraillage : A_s en travée (lit inférieur) et chapeaux sur appuis',
      'Vérifications : A_s,min, espacements, effort tranchant, flèche',
    ],
  },
  mistakes: {
    items: [
      ['Inverser les lits d’armatures', 'Les aciers de la petite portée doivent être au plus bas (plus grande hauteur utile)', 'Placer les barres du sens l_x au lit inférieur, celles du sens l_y au-dessus.'],
      ['Chapeaux trop courts', 'Fissures sur appuis à l’endroit où les chapeaux s’arrêtent', 'Prolonger les chapeaux d’au moins 0,2 l_x de part et d’autre de l’appui.'],
      ['Oublier le minimum d’armatures', 'Fissuration non maîtrisée', 'Comparer A_s calculé à A_s,min systématiquement.'],
    ],
  },
  tips: {
    tips: [
      'Prédimensionnement : h ≈ l_x/30 à l_x/35 pour une dalle continue portant dans deux sens.',
      'Les treillis soudés standards (ST) réduisent le temps de pose ; complétez par des barres où nécessaire.',
      'Calez les aciers avec des cales et chaises adaptées à l’enrobage exigé.',
      'En plancher-dalle, la zone autour des poteaux mérite une attention particulière (poinçonnement, trémies).',
    ],
  },
  norms: {
    norms: [
      ['NF EN 1992-1-1 §5.3.1 et §6.1', 'Définition des dalles et calcul en flexion.'],
      ['NF EN 1992-1-1 §9.3', 'Dispositions constructives des dalles pleines.'],
      ['NF EN 1992-1-1 §6.4', 'Poinçonnement.'],
      ['NF EN 1992-1-1 §7.4.2', 'Élancements limites l/d dispensant du calcul de flèche.'],
    ],
  },
  exercises: {
    exercises: [
      {
        level: 1,
        text: 'Une dalle de 3,8 × 6,0 m est appuyée sur ses 4 côtés. Porte-t-elle dans un ou deux sens ?',
        hint: 'ρ = l_x / l_y.',
        answer_latex: "\\rho = \\frac{3{,}8}{6{,}0} = 0{,}63 \\ge 0{,}4",
        answer_text: 'Deux sens (ρ = 0,63).',
      },
      {
        level: 2,
        text: 'Panneau 4,5 × 5,0 m (ρ = 0,9), p_u = 14 kN/m². Calculer M_x et M_y.',
        hint: 'μ_x = 0,0456 ; μ_y = 0,7834.',
        answer_latex: "M_x = 0{,}0456 \\times 14 \\times 4{,}5^2 = 12{,}9\\ \\text{kN·m/m} \\qquad M_y = 0{,}7834 \\times 12{,}9 = 10{,}1\\ \\text{kN·m/m}",
        answer_text: 'M_x ≈ 12,9 ; M_y ≈ 10,1 kN·m/m.',
      },
      {
        level: 3,
        text: 'Ferrailler une dalle d = 170 mm sous M = 25 kN·m/m (C25/30, B500).',
        hint: 'μ_cu = M/(b d² f_cd) puis z puis A_s.',
        answer_latex: "\\mu_{cu} = \\frac{25 \\times 10^6}{1\\,000 \\times 170^2 \\times 16{,}67} = 0{,}052 \\quad \\alpha = 0{,}067 \\quad z = 165{,}4\\ \\text{mm} \\quad A_s = \\frac{25 \\times 10^6}{165{,}4 \\times 434{,}8} = 348\\ \\text{mm}^2/\\text{m}",
        answer_text: 'A_s ≈ 348 mm²/m → HA10 tous les 20 cm (393 mm²/m).',
      },
    ],
  },
  quiz: {
    title: 'Quiz — Dalles',
    questions: [
      { q: 'À partir de quel rapport l_x/l_y une dalle sur 4 appuis porte-t-elle dans deux sens ?', options: ['0,2', '0,4', '0,9'], correct: 1, explain: 'Pour ρ ≥ 0,4, les deux directions participent.' },
      { q: 'Dans quel sens se trouve le plus grand moment ?', options: ['Sens de la petite portée', 'Sens de la grande portée', 'Ils sont toujours égaux'], correct: 0, explain: 'La petite portée est la plus rigide : elle attire la plus grande part de la charge.' },
      { q: 'Quelle rupture est critique dans un plancher-dalle sur poteaux ?', options: ['Le flambement', 'Le poinçonnement', 'Le déversement'], correct: 1, explain: 'Le poinçonnement autour des poteaux est fragile et doit être vérifié.' },
    ],
  },
  exam_questions: {
    questions: [
      'Distinguez dalle portant dans un sens et dans deux sens ; justifiez par le rapport des portées.',
      'Calculez les moments d’un panneau rectangulaire continu et rédigez le plan de ferraillage (lits, chapeaux, longueurs).',
      'Expliquez le mécanisme du poinçonnement et les moyens de s’en prémunir.',
    ],
  },
  interview_questions: {
    questions: [
      ['Dalle pleine ou prédalles : que conseillez-vous ?', "Les prédalles suppriment le coffrage et accélèrent le chantier ; la dalle pleine coulée en place offre plus de liberté (réservations, formes) et une meilleure continuité. Le choix dépend des cadences, de la répétitivité et des moyens de levage."],
      ['Comment limiter la fissuration d’une dalle ?', 'Respecter les armatures minimales et les espacements maximaux, bien positionner les chapeaux, assurer une cure efficace et prévoir des joints de retrait ou de dilatation pour les grandes surfaces.'],
    ],
  },
  practical_case: {
    title: 'Cas pratique — Dalle de séjour continue',
    scenario: 'Panneau de 4,0 × 5,0 m continu sur deux côtés, d = 150 mm, p_u = 12,53 kN/m² (même dalle que l’étape par étape).',
    description: 'Répartir le moment isostatique M_x = 11,2 kN·m/m entre travée (0,85 M_0) et appui continu (0,5 M_0), puis ferrailler l’appui.',
    resolutions: [
      "M_t = 0{,}85 \\times 11{,}2 = 9{,}5\\ \\text{kN·m/m} \\qquad M_a = 0{,}5 \\times 11{,}2 = 5{,}6\\ \\text{kN·m/m}",
      "A_{s,appui} = \\frac{5{,}6 \\times 10^6}{0{,}98 \\times 150 \\times 434{,}8} = 88\\ \\text{mm}^2/\\text{m} < A_{s,min} = 200\\ \\text{mm}^2/\\text{m}",
      "\\text{Travée et appui : HA8 tous les 25 cm (201 mm}^2/\\text{m), chapeaux prolongés de 0,2}\\, l_x = 0{,}80\\ \\text{m}",
    ],
    conclusion: "Les sections minimales gouvernent : HA8 e = 25 cm en travée (lit inférieur) et en chapeaux sur l'appui continu, prolongés de 0,80 m de part et d'autre.",
  },
  summary: {
    content: `### Les dalles en 5 points
1. Un sens si $\\rho = l_x/l_y < 0{,}4$ (ou appuis sur 2 côtés) : $M = p_u l^2/8$.
2. Deux sens : $M_x = \\mu_x p_u l_x^2$, $M_y = \\mu_y M_x$.
3. Continuité : environ 0,75-0,85 $M_0$ en travée, 0,3-0,5 $M_0$ sur appuis.
4. Ferraillage par mètre de largeur, avec $A_{s,min}$ et espacements maximaux.
5. Plancher-dalle : vérifier le **poinçonnement**.`,
  },
  key_points: {
    points: [
      'ρ = l_x / l_y ≥ 0,4 → deux sens',
      'M_x = μ_x·p_u·l_x² ; M_y = μ_y·M_x',
      'Dalle carrée : μ_x = 0,0368 et μ_y = 1',
      'A_s,min = max(0,26 f_ctm/f_yk ; 0,0013)·b·d',
      'Aciers de la petite portée au lit inférieur',
    ],
  },
  self_assessment: {
    objectives: [
      'Je sais déterminer le mode de portée d’une dalle',
      'Je sais calculer les moments d’un panneau rectangulaire',
      'Je sais ferrailler une dalle par mètre de largeur',
      'Je connais les dispositions constructives des dalles',
      "J'ai réussi le quiz avec au moins 2 bonnes réponses sur 3",
    ],
  },
});
