// ── Lesson: Formulation des bétons — Module 23 ───────────────────────────────
import { buildLesson } from './build_lesson.js';

export const lesson_materiaux_beton_formulation = buildLesson({
  moduleId: 23,
  slug: 'materiaux_beton_formulation',
  lessonIndex: 1,
  title: "Formulation des Bétons : Classes d'Exposition, Rapport E/C, Méthode de Dreux-Gorisse et Volumes Absolus",
  subtitle: 'Module 23 — Matériaux de Construction',
  level: 'Intermédiaire',
  duration: '8h',
  tags: ['Béton', 'Formulation', 'Dreux-Gorisse', 'Bolomey', 'E/C', 'NF EN 206', 'Affaissement'],
}, {
  definition: {
    title: 'Définition — Choisir les proportions d’un béton',
    fr: 'Formulation (composition) du béton',
    en: 'Concrete mix design',
    metier: "Utilisée par les ingénieurs matériaux, les laboratoires de centrales à béton, les bureaux d'études et les ingénieurs travaux.",
    content: `**Formuler un béton**, c'est déterminer les quantités de ciment, d'eau, de sable, de gravillons et d'adjuvants pour 1 m³ afin de satisfaire trois exigences :

1. **Résistance** : la classe visée (C25/30, C30/37…).
2. **Ouvrabilité** : la consistance nécessaire à la mise en œuvre (affaissement au cône d'Abrams).
3. **Durabilité** : les exigences liées à l'environnement (classes d'exposition de la NF EN 206).

### Le paramètre clé : le rapport E/C
Plus il y a d'eau par rapport au ciment, plus la pâte est poreuse : la résistance et la durabilité diminuent. L'eau en excès améliore l'ouvrabilité ; les **plastifiants** permettent d'obtenir la même ouvrabilité avec moins d'eau.

> 💡 En France, la méthode de **Dreux-Gorisse** est la méthode d'enseignement classique ; les centrales ajustent ensuite par gâchées d'essai.`,
  },
  importance: {
    content: `- **Sécurité** : une résistance insuffisante remet en cause tout le dimensionnement.
- **Durabilité** : un E/C trop élevé accélère la carbonatation et la corrosion des armatures.
- **Coût et carbone** : le ciment est le constituant le plus cher et le plus émetteur ; il faut en mettre assez, mais pas plus.
- **Mise en œuvre** : un béton trop ferme se met mal en place (nids de cailloux) ; trop fluide, il ressuie et ségrège.

> ⚠️ **À retenir** : ajouter de l'eau sur chantier pour « rendre le béton plus maniable » est l'erreur la plus fréquente et la plus nocive.`,
  },
  applications: {
    examples: [
      ['Béton de bâtiment', 'C25/30, XC1, consistance S3 pour voiles et dalles.'],
      ['Ouvrage d’art', 'C35/45 en XC4 + XF, E/C ≤ 0,50, air entraîné en montagne.'],
      ['Ouvrage maritime', 'XS3 : E/C ≤ 0,45, ciment riche en laitier.'],
      ['Béton autoplaçant', 'Fluidité élevée sans vibration, beaucoup de fines et de superplastifiant.'],
      ['Béton de propreté', 'Faible dosage, sans exigence de durabilité.'],
    ],
  },
  theory: {
    title: 'Théorie — Les étapes de la formulation',
    content: `### 1. Données d'entrée
Classe de résistance, classe d'exposition, consistance, dimension maximale des granulats D (fonction de l'enrobage et de l'espacement des armatures).

### 2. Résistance visée
On vise une résistance moyenne supérieure à la résistance caractéristique pour couvrir la dispersion. Dreux propose une majoration d'environ 15 % : $f_{c,visée} \\approx 1{,}15 \\, f_{ck}$.

### 3. Rapport C/E (formule de Bolomey)
$$f_{c,visée} = G \\cdot \\sigma'_c \\left( \\frac{C}{E} - 0{,}5 \\right)$$
$G$ : coefficient granulaire (≈ 0,5 pour des granulats courants de bonne qualité) ; $\\sigma'_c$ : classe vraie du ciment (≈ 45 MPa pour un CEM 32,5 ; ≈ 55 MPa pour un CEM 42,5).

### 4. Dosage en ciment et en eau
Le dosage C est lu sur un abaque en fonction de C/E et de l'affaissement voulu ; on en déduit $E = C / (C/E)$. On vérifie les **exigences de la NF EN 206** (E/C maximal, ciment minimal) pour la classe d'exposition.

### 5. Granulats
On trace une **courbe granulaire de référence** (Dreux) pour répartir sable et gravillons, puis on calcule le volume restant :
$$V_{granulats} = 1\\,000 - V_{ciment} - V_{eau} - V_{air} \\qquad V = \\frac{m}{\\rho_{absolue}}$$

### 6. Ajustements
Gâchées d'essai, correction de l'eau apportée par l'humidité des granulats, contrôle de l'affaissement et des résistances à 7 et 28 jours.`,
  },
  formulas: {
    title: 'Formules essentielles — Formulation',
    formulas: [
      {
        name: 'Formule de Bolomey',
        latex: "f_{c,visée} = G \\cdot \\sigma'_c \\left( \\frac{C}{E} - 0{,}5 \\right)",
        description: 'Relie la résistance moyenne au rapport ciment/eau.',
        vars: [
          ['f_{c,visée}', 'Résistance moyenne visée à 28 j', 'MPa', '≈ 1,15 f_ck selon Dreux.'],
          ['G', 'Coefficient granulaire', '-', '0,35 à 0,65 ; ≈ 0,5 courant.'],
          ["\\sigma'_c", 'Classe vraie du ciment', 'MPa', '≈ 45 (CEM 32,5) ; ≈ 55 (CEM 42,5).'],
          ['C/E', 'Rapport ciment / eau', '-', 'Inverse du rapport E/C.'],
        ],
      },
      {
        name: 'Méthode des volumes absolus',
        latex: "\\frac{C}{\\rho_c} + E + V_{air} + \\frac{G_{ranulats}}{\\rho_g} = 1\\,000\\ \\text{L}",
        description: 'La somme des volumes absolus des constituants fait 1 m³.',
        vars: [
          ['C', 'Dosage en ciment', 'kg/m³', ''],
          ['\\rho_c', 'Masse volumique absolue du ciment', 'kg/L', '≈ 3,1.'],
          ['E', 'Eau efficace', 'L/m³', ''],
          ['V_{air}', 'Air occlus ou entraîné', 'L/m³', '10 à 20 L courant ; 40 à 60 L avec entraîneur d’air.'],
          ['\\rho_g', 'Masse volumique absolue des granulats', 'kg/L', '≈ 2,6 à 2,7.'],
        ],
      },
      {
        name: 'Correction d’eau due à l’humidité',
        latex: "E_{ajoutée} = E - \\sum m_{granulat} \\cdot w",
        description: 'L’eau contenue dans les granulats humides est déduite de l’eau de gâchage.',
        vars: [
          ['E_{ajoutée}', 'Eau à ajouter au malaxeur', 'L/m³', ''],
          ['m_{granulat}', 'Masse sèche du granulat', 'kg/m³', ''],
          ['w', 'Teneur en eau libre', '-', 'Au-delà de l’absorption.'],
        ],
        rule: 'Un sable à 5 % d’humidité apporte environ 35 L d’eau par m³ de béton.',
      },
    ],
  },
  stepbystep: {
    title: 'Calcul complet — Formulation d’un C30/37 en XC1',
    problem: "Formuler un béton C30/37, classe d'exposition XC1, consistance S3, avec un CEM II 42,5 (σ'c ≈ 55 MPa), des granulats roulés de qualité (G = 0,5 ; ρ = 2,65 kg/L), 20 L d'air et un dosage en ciment de 350 kg/m³ lu sur l'abaque.",
    steps_demo: [
      { n: 1, text: "Résistance visée : 1,15 × 30 = 34,5 MPa." },
      { n: 2, text: "Bolomey : C/E = 34,5 / (0,5 × 55) + 0,5 = 1,255 + 0,5 = 1,755, soit E/C = 0,57." },
      { n: 3, text: "Eau : E = 350 / 1,755 ≈ 200 L. Vérification XC1 : E/C ≤ 0,65 et C ≥ 260 kg/m³ → conforme." },
      { n: 4, text: "Volumes : ciment 350 / 3,1 = 112,9 L ; eau 200 L ; air 20 L ; granulats = 1 000 − 332,9 = 667,1 L." },
      { n: 5, text: "Répartition 40 % sable / 60 % gravillons : sable 266,8 L × 2,65 = 707 kg ; gravillons 400,3 L × 2,65 = 1 061 kg." },
      { n: 6, text: "Masse volumique du béton frais : 350 + 200 + 707 + 1 061 = 2 318 kg/m³ (plausible)." },
    ],
    result_latex: "\\frac{C}{E} = \\frac{34{,}5}{0{,}5 \\times 55} + 0{,}5 = 1{,}755 \\Rightarrow C = 350\\ \\text{kg} ; \\ E = 200\\ \\text{L} ; \\ S = 707\\ \\text{kg} ; \\ G = 1\\,061\\ \\text{kg}",
  },
  units: {
    table: [
      ['Dosage', 'kg/m³', 'lb/yd³', '1 kg/m³ = 1,686 lb/yd³'],
      ['Eau', 'L/m³', 'gal/yd³', '1 L/m³ ≈ 0,202 gal/yd³'],
      ['Affaissement', 'mm', 'in', 'S1 : 10–40 ; S2 : 50–90 ; S3 : 100–150 ; S4 : 160–210 ; S5 : ≥ 220'],
      ['Résistance', 'MPa', 'psi', '1 MPa = 145 psi'],
      ['Masse volumique absolue', 'kg/L', 'lb/ft³', 'Ciment ≈ 3,1 ; granulats ≈ 2,65'],
    ],
    note: 'C30/37 signifie f_ck = 30 MPa sur cylindre et 37 MPa sur cube.',
  },
  hypotheses: {
    items: [
      ['info', 'La formule de Bolomey et les abaques de Dreux donnent une formule de départ, à valider par gâchées d’essai.'],
      ['info', 'L’eau prise en compte est l’eau efficace, hors eau absorbée par les granulats.'],
      ['warning', 'Les valeurs limites E/C et ciment minimal dépendent de la classe d’exposition et de l’annexe nationale de la NF EN 206.'],
      ['warning', 'Le dosage en ciment peut être en partie remplacé par des additions (laitier, cendres) selon le concept du coefficient k.'],
      ['tip', 'Un plastifiant réducteur d’eau permet de baisser E/C de 0,05 à 0,10 à ouvrabilité égale.'],
    ],
  },
  simple_examples: {
    examples: [
      {
        title: 'Exemple 1 : rapport E/C',
        given: 'C = 320 kg/m³ ; E = 176 L/m³',
        find: 'E/C',
        solution_latex: "\\frac{E}{C} = \\frac{176}{320} = 0{,}55",
        result: 'E/C = 0,55 : admis en XC3 (≤ 0,55), refusé en XC4 (≤ 0,50).',
      },
      {
        title: 'Exemple 2 : résistance prévue par Bolomey',
        given: 'C/E = 2,0 ; G = 0,5 ; σ\'c = 55 MPa',
        find: 'f_c',
        solution_latex: "f_c = 0{,}5 \\times 55 \\times (2{,}0 - 0{,}5) = 41{,}3\\ \\text{MPa}",
        result: 'Environ 41 MPa de résistance moyenne.',
      },
      {
        title: 'Exemple 3 : correction d’humidité',
        given: 'Sable 707 kg à 5 % d’eau libre ; gravillons 1 061 kg à 1 % ; E = 200 L',
        find: 'Eau à ajouter',
        solution_latex: "E_{ajoutée} = 200 - (707 \\times 0{,}05 + 1\\,061 \\times 0{,}01) = 200 - 46 = 154\\ \\text{L}",
        result: '154 L d’eau, et on pèse 742 kg de sable humide et 1 072 kg de gravillons humides.',
      },
    ],
  },
  real_examples: {
    title: 'Exemple réel — Ajout d’eau dans la toupie',
    examples: [
      {
        context: 'Voiles d’un bâtiment d’habitation',
        scenario: "Pour faciliter le pompage, l'équipe a ajouté 30 L d'eau par m³ dans un C25/30 livré avec E/C = 0,55. Les éprouvettes à 28 jours ont donné 22 MPa en moyenne. Des carottages et un recalcul ont été nécessaires, avec renforcement local de deux voiles.",
        decomposition_latex: "\\frac{E}{C} : \\frac{165}{300} = 0{,}55 \\rightarrow \\frac{195}{300} = 0{,}65 \\Rightarrow \\text{perte de résistance d'environ 20 \\%}",
        lesson: "L'ouvrabilité s'obtient par la formulation et les adjuvants, pas par l'ajout d'eau sur chantier, qui doit être interdit sauf prévu par le bon de livraison.",
      },
    ],
  },
  diagrams: {
    title: 'Schéma de principe — Démarche de formulation',
    diagram_description: [
      'Cahier des charges : résistance, exposition, consistance, D max',
      'Résistance visée ≈ 1,15 f_ck',
      'Rapport C/E par Bolomey, vérification des limites NF EN 206',
      'Dosage ciment (abaque) puis eau',
      'Courbe granulaire et volumes absolus pour le sable et les gravillons',
      'Gâchées d’essai, ajustements et contrôle de production',
    ],
  },
  mistakes: {
    items: [
      ['Ignorer la classe d’exposition', 'Béton résistant mais peu durable', 'Appliquer les limites E/C et ciment minimal de la NF EN 206.'],
      ['Oublier l’humidité des granulats', 'Excès d’eau et chute de résistance', 'Mesurer la teneur en eau et corriger chaque jour.'],
      ['D max trop grand', 'Nids de cailloux entre armatures', 'Limiter D au plus petit de l’enrobage et de l’espacement des barres moins 5 mm.'],
    ],
  },
  tips: {
    tips: [
      'Commencez toujours par la classe d’exposition : elle fixe souvent la résistance minimale.',
      'Vérifiez la masse volumique théorique (2 300 à 2 450 kg/m³) pour détecter une erreur de calcul.',
      'Préférez un superplastifiant plutôt que de l’eau pour gagner en fluidité.',
      'Pour réduire le carbone, utilisez des ciments composés (CEM II, CEM III) compatibles avec l’exposition.',
    ],
  },
  norms: {
    norms: [
      ['NF EN 206/CN', 'Béton : spécification, performances, production et conformité ; classes d’exposition.'],
      ['NF EN 197-1', 'Ciments courants : composition et classes.'],
      ['NF EN 12350-2', 'Essai d’affaissement au cône d’Abrams.'],
      ['NF EN 12390-3', 'Résistance à la compression des éprouvettes.'],
      ['NF EN 12620', 'Granulats pour béton.'],
    ],
  },
  exercises: {
    exercises: [
      {
        level: 1,
        text: 'Un béton contient 300 kg de ciment et 150 L d’eau. Calculer E/C.',
        hint: 'Divisez l’eau par le ciment.',
        answer_latex: "\\frac{150}{300} = 0{,}50",
        answer_text: 'E/C = 0,50.',
      },
      {
        level: 2,
        text: 'Quel rapport C/E faut-il pour viser 40 MPa avec G = 0,5 et σ\'c = 55 MPa ? En déduire E pour C = 380 kg.',
        hint: 'C/E = f / (G σ\'c) + 0,5.',
        answer_latex: "\\frac{C}{E} = \\frac{40}{27{,}5} + 0{,}5 = 1{,}955 \\Rightarrow E = \\frac{380}{1{,}955} = 194\\ \\text{L}",
        answer_text: 'C/E = 1,955 ; E ≈ 194 L (E/C = 0,51).',
      },
      {
        level: 3,
        text: 'Avec C = 380 kg, E = 194 L, air 20 L et ρ_g = 2,65, calculer la masse totale de granulats pour 1 m³.',
        hint: 'Volume restant multiplié par la masse volumique absolue.',
        answer_latex: "V_g = 1\\,000 - \\frac{380}{3{,}1} - 194 - 20 = 663{,}4\\ \\text{L} \\Rightarrow 663{,}4 \\times 2{,}65 = 1\\,758\\ \\text{kg}",
        answer_text: 'Environ 1 758 kg de granulats.',
      },
    ],
  },
  quiz: {
    title: 'Quiz — Formulation des bétons',
    questions: [
      { q: 'Que se passe-t-il si on augmente E/C ?', options: ['La résistance augmente', 'La résistance et la durabilité diminuent', 'Rien'], correct: 1, explain: 'La porosité de la pâte augmente.' },
      { q: 'Quel essai mesure la consistance du béton frais ?', options: ['Essai Proctor', 'Cône d’Abrams', 'Essai brésilien'], correct: 1, explain: 'L’affaissement au cône d’Abrams (NF EN 12350-2).' },
      { q: 'Quelle norme définit les classes d’exposition ?', options: ['NF EN 206', 'NF EN 1990', 'NF EN 10080'], correct: 0, explain: 'La NF EN 206 et son complément national.' },
    ],
  },
  exam_questions: {
    questions: [
      'Présentez les étapes de la méthode de Dreux-Gorisse.',
      'Expliquez l’influence du rapport E/C sur la résistance et la durabilité.',
      'Comment corrige-t-on une formule pour l’humidité des granulats ?',
    ],
  },
  interview_questions: {
    questions: [
      ['Le chef d’équipe veut ajouter de l’eau au béton : que répondez-vous ?', 'Je refuse : l’ajout d’eau augmente E/C et baisse la résistance et la durabilité. Si le béton est trop ferme, on demande à la centrale un ajout de superplastifiant ou une formule adaptée.'],
      ['Comment réduire l’empreinte carbone d’un béton ?', 'Utiliser des ciments composés (laitier, cendres, calcaire), optimiser le dosage par un squelette granulaire compact et des adjuvants, et choisir la classe de résistance strictement nécessaire.'],
    ],
  },
  practical_case: {
    title: 'Cas pratique — Béton pour une dalle de parking extérieure',
    scenario: 'Dalle extérieure exposée au gel modéré et aux sels de déverglaçage (XC4, XF4 selon l’annexe nationale), armatures espacées de 15 cm, enrobage 40 mm.',
    description: 'Définir la spécification du béton à commander.',
    resolutions: [
      "D_{max} \\leq \\min(40 ; 150) - 5 \\Rightarrow D = 20\\ \\text{mm (granulat courant)}",
      "\\text{XF4} : E/C \\leq 0{,}45 \\text{ (ordre de grandeur)}, \\text{ air entraîné} \\geq 4\\ \\%, \\text{ granulats non gélifs}",
      "\\text{Commande} : \\text{BPS NF EN 206 C30/37 XC4 XF4 S3 D20 Cl 0,40}",
    ],
    conclusion: 'La spécification est dictée par la durabilité (gel et sels), bien plus que par la résistance mécanique.',
  },
  summary: {
    content: `### La formulation en 5 points
1. Trois exigences : résistance, ouvrabilité, durabilité.
2. Résistance visée ≈ 1,15 $f_{ck}$.
3. Bolomey : $f_c = G \\sigma'_c (C/E - 0{,}5)$.
4. Volumes absolus : la somme fait 1 000 L.
5. Respecter E/C max et C min de la classe d'exposition ; pas d'ajout d'eau sur chantier.`,
  },
  key_points: {
    points: [
      'E/C est le paramètre clé',
      'f_visée ≈ 1,15 f_ck',
      'Volumes absolus = 1 000 L',
      'Corriger l’eau des granulats humides',
      'Exposition → E/C max et C min',
    ],
  },
  self_assessment: {
    objectives: [
      'Je sais calculer un rapport C/E par Bolomey',
      'Je sais appliquer la méthode des volumes absolus',
      'Je sais corriger l’eau pour l’humidité des granulats',
      'Je sais rédiger la spécification d’un béton',
      "J'ai réussi le quiz avec au moins 2 bonnes réponses sur 3",
    ],
  },
});
