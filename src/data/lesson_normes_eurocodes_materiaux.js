// ── Lesson: Eurocodes matériaux — Module 28 ──────────────────────────────────
import { buildLesson } from './build_lesson.js';

export const lesson_normes_eurocodes_materiaux = buildLesson({
  moduleId: 28,
  slug: 'normes_eurocodes_materiaux',
  lessonIndex: 2,
  title: "Eurocodes 2 à 9 : Valeurs de Calcul des Matériaux, Coefficients Partiels et Annexes Nationales",
  subtitle: 'Module 28 — Normes & Réglementations',
  level: 'Intermédiaire',
  duration: '5h',
  tags: ['Eurocodes', 'EC2', 'EC3', 'EC5', 'EC6', 'Coefficients partiels', 'Annexe nationale', 'k_mod'],
}, {
  definition: {
    title: 'Définition — Une famille de normes par matériau',
    fr: 'Eurocodes de conception par matériau',
    en: 'Material Eurocodes',
    metier: "Utilisés par tous les ingénieurs structure, les bureaux de contrôle et les enseignants.",
    content: `Les **Eurocodes** forment un ensemble de 10 normes européennes. Après l'EN 1990 (bases) et l'EN 1991 (actions), chaque norme traite d'un matériau ou d'un domaine :

| Norme | Domaine |
|---|---|
| EN 1992 (EC2) | Béton armé et précontraint |
| EN 1993 (EC3) | Acier |
| EN 1994 (EC4) | Mixte acier-béton |
| EN 1995 (EC5) | Bois |
| EN 1996 (EC6) | Maçonnerie |
| EN 1997 (EC7) | Géotechnique |
| EN 1998 (EC8) | Séisme |
| EN 1999 (EC9) | Aluminium |

### Le principe commun
On compare un effet d'action de calcul à une résistance de calcul : $E_d \\leq R_d$. La résistance de calcul s'obtient en divisant la valeur **caractéristique** d'un matériau par un **coefficient partiel** $\\gamma_M$.

> 💡 Chaque pays publie une **annexe nationale** qui fixe certains paramètres (NDP) : il faut toujours l'appliquer avec la norme.`,
  },
  importance: {
    content: `- **Cohérence** : tous les matériaux sont traités avec la même philosophie des états limites.
- **Marché européen** : un bureau d'études peut travailler dans plusieurs pays avec le même référentiel.
- **Mixité** : les structures mixtes (béton-acier-bois) se vérifient avec des règles compatibles.
- **Évolution** : la seconde génération des Eurocodes est en cours de publication et remplacera progressivement la première.

> ⚠️ **À retenir** : un calcul sans mention de l'annexe nationale utilisée est incomplet.`,
  },
  applications: {
    examples: [
      ['Poutre en béton armé', 'f_cd et f_yd selon l’EC2 et son annexe nationale.'],
      ['Portique métallique', 'γ_M0, γ_M1, γ_M2 selon l’EC3.'],
      ['Charpente en lamellé-collé', 'k_mod et γ_M selon l’EC5.'],
      ['Mur porteur en maçonnerie', 'γ_M selon la catégorie d’exécution (EC6).'],
      ['Plancher mixte', 'Connecteurs et dalle collaborante selon l’EC4.'],
    ],
  },
  theory: {
    title: 'Théorie — Valeurs de calcul par matériau',
    content: `### 1. Béton et armatures (EC2)
$$f_{cd} = \\alpha_{cc} \\frac{f_{ck}}{\\gamma_c} \\qquad f_{yd} = \\frac{f_{yk}}{\\gamma_s}$$
Situations durables : $\\gamma_c = 1{,}5$ ; $\\gamma_s = 1{,}15$. $\\alpha_{cc}$ = 1,0 en France (valeur fixée par l'annexe nationale ; 0,85 dans d'autres pays).

### 2. Acier de construction (EC3)
| Coefficient | Usage | Valeur recommandée |
|---|---|---|
| $\\gamma_{M0}$ | Résistance des sections | 1,00 |
| $\\gamma_{M1}$ | Instabilités (flambement, déversement) | 1,00 |
| $\\gamma_{M2}$ | Sections nettes, assemblages | 1,25 |

### 3. Bois (EC5)
$$f_d = k_{mod} \\frac{f_k}{\\gamma_M}$$
$k_{mod}$ dépend de la **classe de service** (humidité) et de la **durée de chargement** (permanente : 0,6 ; moyen terme : 0,8 ; instantanée : 1,1 en classes 1 et 2 pour le bois massif). $\\gamma_M$ = 1,3 (massif) ; 1,25 (lamellé-collé) en valeurs recommandées.

### 4. Maçonnerie (EC6)
$$f_d = \\frac{f_k}{\\gamma_M}$$
$\\gamma_M$ varie typiquement de 1,5 à 3,0 selon la catégorie de contrôle de fabrication des éléments et la classe d'exécution.

### 5. Géotechnique (EC7)
Approches de calcul combinant des coefficients sur les actions, les matériaux et les résistances (en France : approche 2 pour les fondations).`,
  },
  formulas: {
    title: 'Formules essentielles — Résistances de calcul',
    formulas: [
      {
        name: 'Béton (EC2)',
        latex: "f_{cd} = \\alpha_{cc} \\frac{f_{ck}}{\\gamma_c}",
        description: 'Résistance de calcul en compression.',
        vars: [
          ['f_{ck}', 'Résistance caractéristique sur cylindre', 'MPa', ''],
          ['\\alpha_{cc}', 'Coefficient de longue durée', '-', '1,0 en France.'],
          ['\\gamma_c', 'Coefficient partiel du béton', '-', '1,5 (durable) ; 1,2 (accidentel).'],
        ],
      },
      {
        name: 'Armatures (EC2)',
        latex: "f_{yd} = \\frac{f_{yk}}{\\gamma_s}",
        description: 'Limite d’élasticité de calcul.',
        vars: [
          ['f_{yk}', 'Limite caractéristique', 'MPa', '500 pour B500.'],
          ['\\gamma_s', 'Coefficient partiel', '-', '1,15 (durable) ; 1,0 (accidentel).'],
        ],
      },
      {
        name: 'Bois (EC5)',
        latex: "f_d = k_{mod} \\frac{f_k}{\\gamma_M}",
        description: 'Tient compte de l’humidité et de la durée de charge.',
        vars: [
          ['f_k', 'Résistance caractéristique', 'MPa', 'Selon la classe (C24, GL24h…).'],
          ['k_{mod}', 'Coefficient de modification', '-', '0,6 à 1,1.'],
          ['\\gamma_M', 'Coefficient partiel', '-', '1,3 massif ; 1,25 lamellé-collé.'],
        ],
      },
      {
        name: 'Acier (EC3) — résistance d’une section',
        latex: "N_{pl,Rd} = \\frac{A f_y}{\\gamma_{M0}}",
        description: 'Résistance plastique en traction ou compression d’une section.',
        vars: [
          ['A', 'Aire de la section', 'mm²', ''],
          ['f_y', "Limite d'élasticité", 'MPa', ''],
          ['\\gamma_{M0}', 'Coefficient partiel', '-', '1,00.'],
        ],
      },
    ],
  },
  stepbystep: {
    title: 'Calcul complet — Comparer les résistances de calcul de quatre matériaux',
    problem: "Calculer les résistances de calcul en situation durable pour : un béton C30/37 ; un acier B500B ; un profilé S355 ; une poutre en lamellé-collé GL24h (f_m,k = 24 MPa) sous charge de moyen terme en classe de service 1 (k_mod = 0,8).",
    steps_demo: [
      { n: 1, text: "Béton : f_cd = 1,0 × 30 / 1,5 = 20,0 MPa." },
      { n: 2, text: "Armatures : f_yd = 500 / 1,15 = 434,8 MPa." },
      { n: 3, text: "Profilé : f_y / γ_M0 = 355 / 1,0 = 355 MPa." },
      { n: 4, text: "Bois : f_m,d = 0,8 × 24 / 1,25 = 15,4 MPa." },
      { n: 5, text: "Commentaire : à la même charge, la poutre bois sous charge permanente (k_mod = 0,6) n'aurait plus que 11,5 MPa : la durée de chargement compte autant que le matériau." },
    ],
    result_latex: "f_{cd} = 20{,}0 \\quad f_{yd} = 434{,}8 \\quad \\frac{f_y}{\\gamma_{M0}} = 355 \\quad f_{m,d} = 0{,}8 \\times \\frac{24}{1{,}25} = 15{,}4\\ \\text{MPa}",
  },
  units: {
    table: [
      ['Résistance', 'MPa = N/mm²', 'psi', '1 MPa = 145 psi'],
      ['Effort', 'kN', 'kip', '1 kip = 4,448 kN'],
      ['Moment', 'kN·m', 'kip·ft', '1 kip·ft = 1,356 kN·m'],
      ['Coefficient partiel', '-', '-', 'Équivalent américain : facteur φ (multiplicatif)'],
      ['Classe bois', 'C24, GL24h', 'No. 2 SYP…', 'Classements différents'],
    ],
    note: 'Les Eurocodes divisent la résistance par γ_M ; les codes américains la multiplient par φ < 1.',
  },
  hypotheses: {
    items: [
      ['info', 'Les valeurs indiquées sont les valeurs recommandées ou celles de l’annexe nationale française pour la première génération des Eurocodes.'],
      ['info', 'Les situations accidentelles utilisent des coefficients partiels réduits.'],
      ['warning', 'Ne mélangez pas les annexes nationales de pays différents dans un même calcul.'],
      ['warning', 'La seconde génération des Eurocodes modifie certaines formules et valeurs : vérifiez la version contractuelle.'],
      ['tip', 'Indiquez en tête de note de calcul la liste des normes et annexes nationales utilisées.'],
    ],
  },
  simple_examples: {
    examples: [
      {
        title: 'Exemple 1 : béton C40/50',
        given: 'f_ck = 40 MPa ; α_cc = 1,0 ; γ_c = 1,5',
        find: 'f_cd',
        solution_latex: "f_{cd} = \\frac{40}{1{,}5} = 26{,}7\\ \\text{MPa}",
        result: '26,7 MPa.',
      },
      {
        title: 'Exemple 2 : section acier en traction',
        given: 'Cornière S275 d’aire 1 230 mm²',
        find: 'N_pl,Rd',
        solution_latex: "N_{pl,Rd} = \\frac{1\\,230 \\times 275}{1{,}0} = 338\\,250\\ \\text{N} = 338\\ \\text{kN}",
        result: '338 kN (à comparer à la résistance de la section nette avec γ_M2).',
      },
      {
        title: 'Exemple 3 : bois massif sous charge permanente',
        given: 'C24 : f_m,k = 24 MPa ; k_mod = 0,6 ; γ_M = 1,3',
        find: 'f_m,d',
        solution_latex: "f_{m,d} = 0{,}6 \\times \\frac{24}{1{,}3} = 11{,}1\\ \\text{MPa}",
        result: '11,1 MPa.',
      },
    ],
  },
  real_examples: {
    title: 'Exemple réel — Une note de calcul refusée par le contrôleur',
    examples: [
      {
        context: 'Bâtiment conçu par un bureau d’études étranger pour un projet en France',
        scenario: "La note de calcul appliquait α_cc = 0,85 et les combinaisons d'une autre annexe nationale. Le bureau de contrôle a demandé la reprise complète avec l'annexe nationale française, ce qui a modifié plusieurs sections d'armatures et décalé le planning de trois semaines.",
        decomposition_latex: "\\text{Annexe nationale incorrecte} \\Rightarrow \\text{reprise des calculs} \\Rightarrow \\text{retard}",
        lesson: "Les paramètres nationaux doivent être fixés dès le démarrage des études et vérifiés dans les logiciels de calcul.",
      },
    ],
  },
  diagrams: {
    title: 'Schéma de principe — Architecture des Eurocodes',
    diagram_description: [
      'EN 1990 : bases de calcul, combinaisons, fiabilité',
      'EN 1991 : actions (poids propres, exploitation, neige, vent, feu)',
      'EN 1992 à 1996 et 1999 : règles par matériau',
      'EN 1997 : géotechnique ; EN 1998 : séisme',
      'Annexes nationales : paramètres déterminés au niveau national',
      'Normes de produits et d’exécution associées (EN 206, EN 1090, EN 13670)',
    ],
  },
  mistakes: {
    items: [
      ['Utiliser γ_M0 = 1,1 par habitude', 'Résistance sous-estimée', 'Vérifier l’annexe nationale (1,0 en France).'],
      ['Oublier k_mod en bois', 'Surestimation de la résistance', 'Toujours associer classe de service et durée de chargement.'],
      ['Combiner la charge la plus courte et k_mod le plus faible', 'Erreur de méthode', 'Prendre k_mod de l’action de plus courte durée de la combinaison.'],
    ],
  },
  tips: {
    tips: [
      'Construisez un tableau récapitulatif des coefficients partiels du projet.',
      'Vérifiez les paramètres nationaux réglés dans vos logiciels.',
      'Lisez les normes d’exécution associées : elles fixent les tolérances supposées par le calcul.',
      'Suivez la publication de la seconde génération des Eurocodes.',
    ],
  },
  norms: {
    norms: [
      ['NF EN 1992-1-1 et NA', 'Béton : règles générales.'],
      ['NF EN 1993-1-1 et NA', 'Acier : règles générales.'],
      ['NF EN 1995-1-1 et NA', 'Bois : règles générales.'],
      ['NF EN 1996-1-1 et NA', 'Maçonnerie : règles générales.'],
      ['NF EN 1994-1-1 et NA', 'Mixte acier-béton : règles générales.'],
    ],
  },
  exercises: {
    exercises: [
      {
        level: 1,
        text: 'Calculer f_cd d’un C25/30 (α_cc = 1,0).',
        hint: 'γ_c = 1,5.',
        answer_latex: "f_{cd} = \\frac{25}{1{,}5} = 16{,}7\\ \\text{MPa}",
        answer_text: '16,7 MPa.',
      },
      {
        level: 2,
        text: 'Une barre HA20 B500B est tendue. Quel effort de calcul peut-elle reprendre ?',
        hint: 'A = 314 mm² ; f_yd = 434,8 MPa.',
        answer_latex: "N = 314 \\times 434{,}8 = 136\\,500\\ \\text{N} = 136{,}5\\ \\text{kN}",
        answer_text: '136,5 kN.',
      },
      {
        level: 3,
        text: 'Une panne GL24h (f_m,k = 24 MPa) reprend une combinaison permanente + neige (moyen terme) en classe de service 2. Calculer f_m,d puis comparer à la combinaison permanente seule.',
        hint: 'k_mod = 0,8 (moyen terme) et 0,6 (permanent) ; γ_M = 1,25.',
        answer_latex: "0{,}8 \\times \\frac{24}{1{,}25} = 15{,}4\\ \\text{MPa} \\qquad 0{,}6 \\times \\frac{24}{1{,}25} = 11{,}5\\ \\text{MPa}",
        answer_text: '15,4 MPa avec la neige, 11,5 MPa en permanent seul : les deux combinaisons doivent être vérifiées.',
      },
    ],
  },
  quiz: {
    title: 'Quiz — Eurocodes matériaux',
    questions: [
      { q: 'Quelle norme traite du bois ?', options: ['EN 1993', 'EN 1995', 'EN 1997'], correct: 1, explain: 'EN 1995 (Eurocode 5).' },
      { q: 'Quelle est la valeur de γ_s pour les armatures en situation durable ?', options: ['1,0', '1,15', '1,5'], correct: 1, explain: 'γ_s = 1,15.' },
      { q: 'Que fixe une annexe nationale ?', options: ['Les paramètres déterminés au niveau national', 'Les prix', 'Les plans types'], correct: 0, explain: 'Les NDP : coefficients, choix de méthodes, données climatiques.' },
    ],
  },
  exam_questions: {
    questions: [
      'Présentez l’organisation des Eurocodes et le rôle des annexes nationales.',
      'Comparez le passage des valeurs caractéristiques aux valeurs de calcul pour le béton, l’acier et le bois.',
      'Expliquez le rôle de k_mod dans l’Eurocode 5.',
    ],
  },
  interview_questions: {
    questions: [
      ['Pourquoi le bois a-t-il un coefficient k_mod ?', 'Parce que sa résistance diminue avec la durée de chargement (fluage) et avec l’humidité ; k_mod adapte la résistance à ces deux paramètres.'],
      ['Comment vérifiez-vous une note de calcul d’un autre pays ?', 'Je contrôle d’abord les normes, versions et annexes nationales, puis les combinaisons et les coefficients partiels, avant d’examiner les vérifications elles-mêmes.'],
    ],
  },
  practical_case: {
    title: 'Cas pratique — Choix du matériau d’un poteau',
    scenario: 'Un poteau court doit reprendre N_Ed = 1 200 kN. On compare un poteau en béton C30/37 (sans compter les armatures), un profilé S355 et un poteau GL24h (f_c,0,k = 24 MPa, k_mod = 0,8, γ_M = 1,25).',
    description: 'Calculer la section minimale de chaque solution (sans instabilité).',
    resolutions: [
      "\\text{Béton} : A = \\frac{1\\,200\\,000}{20{,}0} = 60\\,000\\ \\text{mm}^2 \\ (\\approx 25 \\times 25\\ \\text{cm})",
      "\\text{Acier} : A = \\frac{1\\,200\\,000}{355} = 3\\,380\\ \\text{mm}^2",
      "\\text{Bois} : f_{c,d} = 0{,}8 \\times \\frac{24}{1{,}25} = 15{,}4 \\Rightarrow A = 77\\,900\\ \\text{mm}^2 \\ (\\approx 28 \\times 28\\ \\text{cm})",
    ],
    conclusion: 'Ces sections minimales sont à majorer pour le flambement (EC2, EC3, EC5) ; elles illustrent les ordres de grandeur entre matériaux.',
  },
  summary: {
    content: `### Les Eurocodes matériaux en 5 points
1. EN 1992 à 1999 : un Eurocode par matériau ou domaine.
2. Valeur de calcul = valeur caractéristique / $\\gamma_M$.
3. Béton : $\\gamma_c$ = 1,5 ; armatures : $\\gamma_s$ = 1,15 ; acier : $\\gamma_{M0}$ = 1,0.
4. Bois : $f_d = k_{mod} f_k / \\gamma_M$.
5. Toujours appliquer l'annexe nationale du pays.`,
  },
  key_points: {
    points: [
      'E_d ≤ R_d',
      'f_cd = α_cc f_ck / 1,5',
      'f_yd = f_yk / 1,15',
      'Bois : k_mod selon durée et humidité',
      'Annexe nationale obligatoire',
    ],
  },
  self_assessment: {
    objectives: [
      'Je connais le domaine de chaque Eurocode',
      'Je sais calculer les résistances de calcul des matériaux courants',
      'Je sais utiliser k_mod en bois',
      'Je sais vérifier les paramètres nationaux d’une note',
      "J'ai réussi le quiz avec au moins 2 bonnes réponses sur 3",
    ],
  },
});
