// ── Lesson: Second œuvre et finitions — Module 41 ────────────────────────────
import { buildLesson } from './build_lesson.js';

export const lesson_batiment_second_oeuvre = buildLesson({
  moduleId: 41,
  slug: 'batiment_second_oeuvre',
  lessonIndex: 4,
  title: "Second Œuvre et Finitions : Cloisons, Menuiseries, Chapes, Revêtements, Peintures et Ordre d'Intervention",
  subtitle: 'Module 41 — Technologie du bâtiment : gros œuvre & second œuvre',
  level: 'Débutant',
  duration: '4h',
  diagramType: 'none',
  tags: ['Second œuvre', 'Cloisons', 'Plaques de plâtre', 'Chape', 'Carrelage', 'Peinture', 'Tolérances', 'Planning TCE'],
}, {
  definition: {
    title: 'Définition — Tout ce qui rend le bâtiment habitable',
    fr: 'Second œuvre et finitions',
    en: 'Finishing works (fit-out)',
    metier: "Concerne les conducteurs de travaux, les économistes, les maîtres d'œuvre d'exécution (OPC) et les entreprises de finitions.",
    content: `Le **gros œuvre** assure la stabilité et le clos-couvert. Le **second œuvre** rend le bâtiment habitable :

- **Cloisons et doublages** : plaques de plâtre sur ossature métallique, carreaux de plâtre, briques plâtrières.
- **Menuiseries** intérieures et extérieures : portes, fenêtres, placards.
- **Sols** : chapes, carrelage, parquet, revêtements souples.
- **Murs et plafonds** : enduits, faux plafonds, peintures.
- **Lots techniques** : plomberie, électricité, chauffage-ventilation (traités au module Équipements).

### Les jalons du chantier
1. **Hors d'eau** : toiture et étanchéité posées.
2. **Hors d'air** : menuiseries extérieures posées.
3. Second œuvre « humide » puis « sec », enfin les finitions.

> 💡 La qualité finale dépend surtout de l'**ordre d'intervention** des corps d'état et du respect des **temps de séchage**.`,
  },
  importance: {
    content: `- **Coût** : le second œuvre représente souvent 40 à 60 % du coût d'un logement.
- **Perception du client** : les défauts visibles (fissures de cloisons, carrelage creux, peinture) génèrent la majorité des réserves.
- **Délais** : un mauvais enchaînement des lots provoque des reprises coûteuses.
- **Performance** : étanchéité à l'air (RE2020), acoustique, sécurité incendie des cloisons et portes.

> ⚠️ **À retenir** : poser un parquet sur une chape encore humide ou peindre sur un enduit frais garantit des désordres.`,
  },
  applications: {
    examples: [
      ['Logement collectif', 'Cloisons 72/48 entre pièces, cloisons séparatives 98/48 renforcées acoustiquement.'],
      ['Salle de bain', 'Plaques hydrofuges et système d’étanchéité sous carrelage (SPEC).'],
      ['Plateau de bureaux', 'Faux plafonds démontables et cloisons démontables.'],
      ['Rénovation', 'Doublage isolant des murs anciens.'],
      ['Commerce', 'Sols résistants (carrelage grès cérame, résine).'],
    ],
  },
  theory: {
    title: 'Théorie — Ouvrages, quantités et tolérances',
    content: `### 1. Cloisons sur ossature
Une cloison « 72/48 » : rails et montants de 48 mm tous les 60 cm, une plaque BA13 (12,5 mm) de chaque côté → 48 + 2 × 12,5 ≈ 72 mm. Isolant (laine minérale) dans le vide pour l'acoustique.

### 2. Quantités usuelles
- Plaques : $n = \\dfrac{S}{S_{plaque}} \\times (1 + p)$ avec 5 à 10 % de pertes.
- Peinture : $V = \\dfrac{S \\times n_{couches}}{r}$, rendement $r$ ≈ 8 à 12 m²/L par couche.
- Carrelage : surface + 5 à 10 % de coupes et casse.

### 3. Chapes et séchage
Une chape ciment sèche lentement : ordre de grandeur **une semaine par centimètre** pour les premiers centimètres en conditions normales, davantage au-delà. On mesure l'humidité résiduelle (bombe à carbure) avant un revêtement sensible (parquet, sol souple).

### 4. Tolérances de planéité
Contrôle à la **règle de 2 m** : écart maximal souvent de 5 mm pour un mur ou un sol courant (7 mm sous certains revêtements épais), et de 1 à 2 mm à la règle de 20 cm, selon les DTU.

### 5. Ordre d'intervention type
Hors d'eau → hors d'air → réseaux encastrés → cloisons et doublages → chapes → plâtrerie, bandes → menuiseries intérieures → revêtements de sol → peintures → appareillages → nettoyage et réception.`,
  },
  formulas: {
    title: 'Formules essentielles — Quantités de second œuvre',
    formulas: [
      {
        name: 'Surface nette de mur',
        latex: "S = P \\times h - \\sum S_{baies}",
        description: 'Surface à peindre ou à doubler.',
        vars: [
          ['P', 'Périmètre de la pièce', 'm', ''],
          ['h', 'Hauteur sous plafond', 'm', ''],
          ['S_{baies}', 'Surfaces des portes et fenêtres', 'm²', ''],
        ],
      },
      {
        name: 'Volume de peinture',
        latex: "V = \\frac{S \\times n}{r}",
        description: 'Quantité de peinture pour n couches.',
        vars: [
          ['S', 'Surface', 'm²', ''],
          ['n', 'Nombre de couches', '-', '2 en général (impression + finition).'],
          ['r', 'Rendement', 'm²/L', '8 à 12.'],
        ],
      },
      {
        name: 'Quantité avec pertes',
        latex: "Q = S \\times (1 + p)",
        description: 'Commande de carrelage, plaques, parquet.',
        vars: [['p', 'Taux de pertes', '-', '0,05 à 0,10.']],
      },
      {
        name: 'Épaisseur d’une cloison sur ossature',
        latex: "e = a + 2\\, n\\, t",
        description: 'Ossature a + n plaques d’épaisseur t de chaque côté.',
        vars: [
          ['a', 'Largeur des montants', 'mm', '48, 70 ou 90.'],
          ['t', 'Épaisseur de plaque', 'mm', '12,5 (BA13).'],
        ],
      },
    ],
  },
  stepbystep: {
    title: 'Calcul complet — Finitions d’une chambre',
    problem: "Chambre de 4,00 × 3,50 m, hauteur 2,50 m, une porte de 0,90 × 2,10 m et une fenêtre de 1,20 × 1,25 m. Calculer la surface de murs à peindre, la peinture (2 couches, rendement 10 m²/L, murs + plafond) et le carrelage à commander (8 % de pertes).",
    steps_demo: [
      { n: 1, text: "Périmètre : 2 × (4,00 + 3,50) = 15,00 m ; murs bruts : 15,00 × 2,50 = 37,50 m²." },
      { n: 2, text: "Baies : 0,90 × 2,10 + 1,20 × 1,25 = 1,89 + 1,50 = 3,39 m² ; murs nets : 34,11 m²." },
      { n: 3, text: "Plafond : 4,00 × 3,50 = 14,00 m² ; total à peindre : 48,11 m²." },
      { n: 4, text: "Peinture : 48,11 × 2 / 10 = 9,6 L → 10 L." },
      { n: 5, text: "Carrelage : 14,00 × 1,08 = 15,1 m² → 15,5 m² selon le conditionnement." },
    ],
    result_latex: "S_{murs} = 15{,}00 \\times 2{,}50 - 3{,}39 = 34{,}11\\ \\text{m}^2 \\qquad V = \\frac{48{,}11 \\times 2}{10} = 9{,}6\\ \\text{L}",
  },
  units: {
    table: [
      ['Surface', 'm²', 'ft²', '1 m² = 10,76 ft²'],
      ['Volume de peinture', 'L', 'gal (US)', '1 gal = 3,785 L'],
      ['Planéité', 'mm sous règle de 2 m', 'in / 10 ft', '5 mm ≈ 0,2 in'],
      ['Épaisseur de plaque', 'mm', 'in', '12,5 mm ≈ 1/2 in'],
      ['Humidité de chape', '% CM', '% CM', 'Mesure à la bombe à carbure'],
    ],
    note: 'Les tolérances exactes dépendent du DTU de l’ouvrage et du revêtement prévu.',
  },
  hypotheses: {
    items: [
      ['info', 'Les rendements de peinture varient selon le support (absorbant ou non) et le produit.'],
      ['info', 'Les temps de séchage dépendent de la température, de la ventilation et de l’épaisseur.'],
      ['warning', 'Un revêtement de sol posé sur une chape trop humide se décolle, gonfle ou moisit.'],
      ['warning', 'Les cloisons séparatives entre logements ont des exigences acoustiques et incendie spécifiques.'],
      ['tip', 'Faites réceptionner chaque support par l’entreprise suivante : elle accepte ainsi l’état du support.'],
    ],
  },
  simple_examples: {
    examples: [
      { title: 'Exemple 1 : épaisseur de cloison', given: 'Montants de 48 mm, une BA13 par face', find: 'e', solution_latex: "e = 48 + 2 \\times 12{,}5 = 73\\ \\text{mm}", result: '≈ 72 mm : cloison « 72/48 ».' },
      { title: 'Exemple 2 : plaques de plâtre', given: 'Doublage de 34 m², plaques 1,20 × 2,50 m, 8 % de pertes', find: 'Nombre de plaques', solution_latex: "n = \\frac{34}{3{,}00} \\times 1{,}08 = 12{,}2 \\Rightarrow 13", result: '13 plaques.' },
      { title: 'Exemple 3 : séchage d’une chape', given: 'Chape ciment de 4 cm', find: 'Délai indicatif avant parquet', solution_latex: "\\approx 4 \\times 1 = 4 \\text{ semaines}", result: 'Environ 4 semaines, à confirmer par une mesure d’humidité.' },
    ],
  },
  real_examples: {
    title: 'Exemple réel — Parquet gondolé dans des logements neufs',
    examples: [
      {
        context: 'Programme de 40 logements livré en hiver',
        scenario: "Pour tenir la date de livraison, le parquet a été collé sur des chapes de 6 cm coulées trois semaines plus tôt, sans mesure d'humidité, dans des logements non chauffés. Deux mois après la livraison, les lames ont tuilé et se sont décollées.",
        decomposition_latex: "\\text{Chape humide} + \\text{absence de mesure} + \\text{pose précipitée} \\Rightarrow \\text{reprise de 40 parquets}",
        lesson: "Le planning doit intégrer les temps de séchage ; la mesure d'humidité avant pose est une étape de contrôle obligatoire.",
      },
    ],
  },
  diagrams: {
    title: 'Schéma de principe — Ordre d’intervention des corps d’état',
    diagram_description: [
      'Hors d’eau (couverture, étanchéité) puis hors d’air (menuiseries extérieures)',
      'Réseaux encastrés : électricité, plomberie, gaines',
      'Cloisons, doublages et chapes',
      'Plâtrerie (bandes, enduits) et menuiseries intérieures',
      'Revêtements de sol puis peintures',
      'Appareillages, nettoyage, opérations préalables à la réception',
    ],
  },
  mistakes: {
    items: [
      ['Peindre sur enduit frais', 'Cloquage, auréoles', 'Respecter le séchage et poser une impression.'],
      ['Oublier les renforts dans les cloisons', 'Meubles et sanitaires mal fixés', 'Prévoir les renforts avant la fermeture.'],
      ['Planéité non contrôlée', 'Carrelage creux, défauts visibles', 'Règle de 2 m à la réception des supports.'],
    ],
  },
  tips: {
    tips: [
      'Planifiez les lots humides (chapes, enduits) tôt et chauffez le bâtiment pour accélérer le séchage.',
      'Faites un logement témoin pour valider les finitions avant de lancer la série.',
      'Protégez les ouvrages finis (sols, menuiseries) jusqu’à la réception.',
      'Commandez les matériaux avec les pertes et les conditionnements réels.',
    ],
  },
  norms: {
    norms: [
      ['NF DTU 25.41', 'Ouvrages en plaques de plâtre.'],
      ['NF DTU 26.2', 'Chapes et dalles à base de liants hydrauliques.'],
      ['NF DTU 52.1 / 52.2', 'Revêtements de sol scellés et collés (carrelage).'],
      ['NF DTU 59.1', 'Revêtements de peinture.'],
      ['NF DTU 36.5', 'Mise en œuvre des fenêtres et portes extérieures.'],
    ],
  },
  exercises: {
    exercises: [
      { level: 1, text: 'Calculer la surface nette des murs d’une pièce de 5,00 × 4,00 m, h = 2,50 m, avec 4,0 m² de baies.', hint: 'P × h − baies.', answer_latex: "18{,}00 \\times 2{,}50 - 4{,}0 = 41{,}0\\ \\text{m}^2", answer_text: '41,0 m².' },
      { level: 2, text: 'Quelle quantité de peinture pour 41 m² en 2 couches avec un rendement de 9 m²/L ?', hint: 'V = S n / r.', answer_latex: "V = \\frac{41 \\times 2}{9} = 9{,}1\\ \\text{L}", answer_text: '9,1 L, soit 10 L en pratique.' },
      { level: 3, text: 'Une chape de 5 cm a été coulée il y a 3 semaines. Peut-on poser un parquet collé ?', hint: 'Ordre de grandeur et mesure.', answer_latex: "\\approx 5\\ \\text{semaines} > 3", answer_text: 'Non : le séchage est insuffisant a priori ; mesurer l’humidité et attendre la valeur admise par le DTU et le fabricant.' },
    ],
  },
  quiz: {
    title: 'Quiz — Second œuvre',
    questions: [
      { q: 'Que signifie « hors d’air » ?', options: ['La toiture est posée', 'Les menuiseries extérieures sont posées', 'Le chauffage fonctionne'], correct: 1, explain: 'Le bâtiment est fermé à l’air.' },
      { q: 'Quelle est l’épaisseur d’une cloison 72/48 ?', options: ['48 mm', '72 mm', '98 mm'], correct: 1, explain: '48 mm d’ossature + 2 × 12,5 mm.' },
      { q: 'Avec quoi contrôle-t-on la planéité d’un sol ?', options: ['Une règle de 2 m', 'Un niveau laser seul', 'Un mètre ruban'], correct: 0, explain: 'Règle de 2 m (et de 20 cm pour les défauts locaux).' },
    ],
  },
  exam_questions: {
    questions: [
      'Décrivez l’ordre d’intervention des corps d’état du second œuvre.',
      'Calculez les quantités de peinture et de carrelage d’une pièce.',
      'Pourquoi les temps de séchage sont-ils critiques ? Donnez deux exemples de désordres.',
    ],
  },
  interview_questions: {
    questions: [
      ['Le planning est en retard : comment rattraper sans risque sur les finitions ?', 'Renforcer les équipes sur les lots secs, chauffer et ventiler pour accélérer les séchages, réorganiser les zones ; ne jamais supprimer les temps de séchage ni les contrôles de support.'],
      ['Comment réduire les réserves à la livraison ?', 'Logement témoin, autocontrôles par lot, réception des supports entre entreprises, protection des ouvrages finis et visites de pré-réception.'],
    ],
  },
  practical_case: {
    title: 'Cas pratique — Planning de finitions d’un logement',
    scenario: 'Appartement de 70 m² : cloisons 5 jours, chape 2 jours + séchage 4 semaines, plâtrerie 6 jours, menuiseries intérieures 3 jours, carrelage 4 jours, peinture 6 jours.',
    description: 'Établir l’enchaînement et la durée totale.',
    resolutions: [
      "\\text{Cloisons (1 sem.)} \\rightarrow \\text{chape (0,5 sem.) + séchage (4 sem.)}",
      "\\text{Pendant le séchage : plâtrerie (1,2 sem.) et menuiseries (0,6 sem.)}",
      "\\text{Puis carrelage (0,8 sem.) et peinture (1,2 sem.)} \\Rightarrow \\approx 7{,}5\\ \\text{semaines}",
    ],
    conclusion: 'En plaçant la plâtrerie et les menuiseries pendant le séchage de la chape, la durée totale reste d’environ 7 à 8 semaines.',
  },
  summary: {
    content: `### Le second œuvre en 5 points
1. Hors d'eau, hors d'air, puis lots humides et secs.
2. Cloisons sur ossature : e = a + 2 n t.
3. Quantités : $S = P h - \\sum S_{baies}$, $V = S n / r$, pertes 5 à 10 %.
4. Séchage des chapes : ordre de grandeur une semaine par cm, mesure obligatoire.
5. Tolérances à la règle de 2 m et réception des supports.`,
  },
  key_points: {
    points: ['Hors d’eau puis hors d’air', '72/48 = 48 + 2 × 12,5', 'V = S × n / r', '≈ 1 semaine par cm de chape', 'Règle de 2 m'],
  },
  self_assessment: {
    objectives: [
      'Je connais les ouvrages du second œuvre',
      'Je sais calculer les quantités de finitions',
      'Je sais ordonner les corps d’état',
      'Je connais les temps de séchage et les tolérances',
      "J'ai réussi le quiz avec au moins 2 bonnes réponses sur 3",
    ],
  },
});
