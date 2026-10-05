// ── Lesson: Réception des travaux — Module 24 ────────────────────────────────
import { buildLesson } from './build_lesson.js';

export const lesson_chantier_reception = buildLesson({
  moduleId: 24,
  slug: 'chantier_reception',
  lessonIndex: 2,
  title: "Réception des Travaux : OPR, Réserves, Garanties, DOE et Clôture Financière",
  subtitle: 'Module 24 — Gestion de Chantier & Direction de Travaux',
  level: 'Intermédiaire',
  duration: '5h',
  tags: ['Réception', 'OPR', 'Réserves', 'Garantie décennale', 'Parfait achèvement', 'DOE', 'DGD'],
}, {
  definition: {
    title: 'Définition — L’acte qui transfère l’ouvrage au maître d’ouvrage',
    fr: 'Réception des travaux',
    en: 'Handover / acceptance of works',
    metier: "Concerne les maîtres d'ouvrage, les maîtres d'œuvre, les conducteurs de travaux et les entreprises.",
    content: `La **réception** est l'acte par lequel le maître d'ouvrage déclare **accepter l'ouvrage, avec ou sans réserves** (article 1792-6 du Code civil). Elle est **contradictoire** : l'entreprise est convoquée.

### Ce que déclenche la réception
- le **transfert de la garde** de l'ouvrage au maître d'ouvrage ;
- le point de départ des **garanties légales** : parfait achèvement (1 an), bon fonctionnement (2 ans), décennale (10 ans) ;
- la fin du délai d'exécution (arrêt des pénalités de retard) ;
- la procédure de **décompte final** et la libération des retenues.

### Les étapes
1. **OPR** (opérations préalables à la réception) : visite détaillée, essais, listes de défauts.
2. **Décision de réception** du maître d'ouvrage : sans réserves, avec réserves, ou refus.
3. **Levée des réserves** dans le délai fixé.
4. Remise du **DOE** (dossier des ouvrages exécutés) et du **DIUO** (dossier d'intervention ultérieure).

> 💡 Une réserve non formulée à la réception pour un défaut apparent est en principe couverte : le maître d'ouvrage ne peut plus la reprocher au titre des garanties.`,
  },
  importance: {
    content: `- **Juridique** : la réception fait courir toutes les garanties et l'assurance dommages-ouvrage.
- **Financière** : elle arrête les pénalités et lance le décompte général définitif (DGD).
- **Exploitation** : l'utilisateur doit recevoir un ouvrage conforme, documenté et sûr.
- **Réputation** : une réception propre clôt le chantier sans contentieux.

> ⚠️ **À retenir** : tout défaut visible doit être écrit dans le procès-verbal. Ce qui n'est pas écrit n'existe pas.`,
  },
  applications: {
    examples: [
      ['Bâtiment de logements', 'OPR par logement, puis réception globale avec liste de réserves.'],
      ['Ouvrage d’art', 'Épreuve de chargement avant réception.'],
      ['Réseau d’assainissement', 'Inspection télévisée et essais d’étanchéité avant réception.'],
      ['Voirie', 'Contrôle des pentes, de l’uni et des épaisseurs d’enrobé.'],
      ['Lots techniques', 'Essais de fonctionnement des installations (chauffage, ventilation, SSI).'],
    ],
  },
  theory: {
    title: 'Théorie — Procédure, garanties et décompte',
    content: `### 1. Les OPR
Le maître d'œuvre organise la visite avec l'entreprise : contrôle visuel, essais, vérification de conformité aux plans. Un **procès-verbal des OPR** liste les épreuves et les imperfections constatées.

### 2. La décision
| Décision | Conséquence |
|---|---|
| Sans réserves | Garanties lancées, solde payable |
| Avec réserves | Garanties lancées, réserves à lever dans un délai fixé |
| Refus | L'ouvrage n'est pas réceptionné (défauts majeurs, ouvrage impropre) |

### 3. Les garanties
| Garantie | Durée | Objet |
|---|---|---|
| Parfait achèvement | 1 an | Tous les désordres signalés (réserves et apparus dans l'année) |
| Bon fonctionnement | 2 ans | Éléments d'équipement dissociables |
| Décennale | 10 ans | Désordres compromettant la solidité ou rendant l'ouvrage impropre à sa destination |

### 4. Les retenues et pénalités
- **Retenue de garantie** : au plus 5 % du montant des travaux, libérée en principe un an après la réception (sauf réserves non levées) ; elle peut être remplacée par une caution bancaire.
- **Pénalités de retard** (CCAG Travaux 2021) : par jour de retard, 1/3 000 du montant du marché hors taxes, sauf clause contraire.

### 5. Le dossier de fin de chantier
DOE (plans de récolement, notices, fiches produits, PV d'essais), DIUO (sécurité des interventions futures), attestations d'assurance.`,
  },
  formulas: {
    title: 'Formules essentielles — Clôture d’un marché',
    formulas: [
      {
        name: 'Pénalités de retard (CCAG Travaux)',
        latex: "P = \\frac{M_{HT} \\times j}{3\\,000}",
        description: 'Pénalité par défaut du CCAG Travaux 2021, sauf montant fixé par le CCAP.',
        vars: [
          ['P', 'Pénalités', '€', ''],
          ['M_{HT}', 'Montant du marché hors taxes', '€', 'Ou de la tranche concernée.'],
          ['j', 'Jours calendaires de retard', 'j', 'Après le délai contractuel prolongé des intempéries.'],
        ],
      },
      {
        name: 'Retenue de garantie',
        latex: "R = 0{,}05 \\times M",
        description: 'Plafond légal de 5 % du montant des travaux.',
        vars: [
          ['R', 'Retenue de garantie', '€', 'Peut être remplacée par une caution.'],
          ['M', 'Montant des travaux', '€', 'Y compris avenants.'],
        ],
      },
      {
        name: 'Taux de levée des réserves',
        latex: "\\tau = \\frac{N_{levées}}{N_{réserves}} \\times 100",
        description: 'Indicateur de suivi après réception.',
        vars: [
          ['\\tau', 'Taux de levée', '%', 'Objectif 100 % avant la fin du délai.'],
          ['N', 'Nombre de réserves', '-', ''],
        ],
      },
      {
        name: 'Solde du décompte',
        latex: "S = M_{final} - \\sum A - P - R",
        description: 'Montant restant dû à l’entreprise au décompte final.',
        vars: [
          ['M_{final}', 'Montant final des travaux', '€', 'Marché + avenants + travaux supplémentaires.'],
          ['\\sum A', 'Acomptes déjà versés', '€', ''],
          ['P, R', 'Pénalités et retenue', '€', ''],
        ],
      },
    ],
  },
  stepbystep: {
    title: 'Calcul complet — Pénalités et retenue sur un marché de gros œuvre',
    problem: "Un marché de gros œuvre de 1 200 000 € HT (1 440 000 € TTC) est réceptionné avec 15 jours calendaires de retard non justifiés. Le CCAP renvoie au CCAG Travaux 2021. Calculer les pénalités, la retenue de garantie (5 % du TTC) et le solde, sachant que 1 260 000 € TTC d'acomptes ont été versés.",
    steps_demo: [
      { n: 1, text: "Pénalités : 1 200 000 × 15 / 3 000 = 6 000 €." },
      { n: 2, text: "Retenue de garantie : 0,05 × 1 440 000 = 72 000 € (ou caution bancaire)." },
      { n: 3, text: "Solde : 1 440 000 − 1 260 000 − 6 000 − 72 000 = 102 000 €." },
      { n: 4, text: "La retenue de 72 000 € est libérée un an après la réception si les réserves sont levées." },
    ],
    result_latex: "P = \\frac{1\\,200\\,000 \\times 15}{3\\,000} = 6\\,000\\ € \\qquad S = 1\\,440\\,000 - 1\\,260\\,000 - 6\\,000 - 72\\,000 = 102\\,000\\ €",
  },
  units: {
    table: [
      ['Montant', '€ HT / TTC', 'USD', 'Préciser toujours HT ou TTC'],
      ['Délai', 'jours calendaires', 'calendar days', 'Distinguer jours ouvrés et calendaires'],
      ['Garantie', 'années', 'years', '1 / 2 / 10 ans'],
      ['Retenue', '%', '%', '5 % maximum'],
      ['Réserves', 'nombre', 'punch list items', 'Suivi par lot et par localisation'],
    ],
    note: 'En droit anglo-saxon, la réception correspond au « practical completion » ou « substantial completion ».',
  },
  hypotheses: {
    items: [
      ['info', 'Le cadre présenté est celui du droit français et du CCAG Travaux 2021 ; les marchés privés suivent souvent la norme NF P 03-001.'],
      ['info', 'La pénalité de 1/3 000 s’applique par défaut : le CCAP peut fixer un autre montant.'],
      ['warning', 'Une prise de possession sans réception formelle crée une situation juridique incertaine.'],
      ['warning', 'Les délais de notification après les OPR sont fixés par le CCAG : les respecter évite une réception implicite ou contestée.'],
      ['tip', 'Photographiez et localisez chaque réserve sur plan : la levée est plus rapide et incontestable.'],
    ],
  },
  simple_examples: {
    examples: [
      {
        title: 'Exemple 1 : pénalités',
        given: 'Marché 450 000 € HT, 20 jours de retard',
        find: 'Pénalités CCAG',
        solution_latex: "P = \\frac{450\\,000 \\times 20}{3\\,000} = 3\\,000\\ €",
        result: '3 000 €.',
      },
      {
        title: 'Exemple 2 : suivi des réserves',
        given: '84 réserves, 63 levées',
        find: 'Taux de levée',
        solution_latex: "\\tau = \\frac{63}{84} \\times 100 = 75\\ \\%",
        result: '75 % : 21 réserves restent à lever.',
      },
      {
        title: 'Exemple 3 : fin des garanties',
        given: 'Réception le 15 mars 2026',
        find: 'Fin de chaque garantie',
        solution_latex: "\\text{GPA} : 15/03/2027 \\quad \\text{GBF} : 15/03/2028 \\quad \\text{décennale} : 15/03/2036",
        result: 'Les garanties courent toutes depuis la date de réception.',
      },
    ],
  },
  real_examples: {
    title: 'Exemple réel — Défaut apparent non réservé',
    examples: [
      {
        context: 'Réception d’un immeuble de bureaux',
        scenario: "Un défaut de pente des toitures-terrasses, visible lors des OPR (flaques persistantes), n'a pas été inscrit au procès-verbal. Deux ans plus tard, des infiltrations apparaissent. L'assureur conteste la prise en charge en invoquant le caractère apparent du défaut à la réception ; un long contentieux s'ensuit.",
        decomposition_latex: "\\text{Défaut apparent} + \\text{absence de réserve} \\Rightarrow \\text{garantie contestée} \\Rightarrow \\text{contentieux}",
        lesson: "Les OPR doivent être menées méthodiquement, avec essais d'eau sur terrasses et contrôle des pentes, et toute anomalie visible doit être réservée.",
      },
    ],
  },
  diagrams: {
    title: 'Schéma de principe — De l’achèvement au décompte final',
    diagram_description: [
      'Achèvement des travaux annoncé par l’entreprise',
      'OPR : visite contradictoire, essais, liste des imperfections',
      'Proposition du maître d’œuvre et décision du maître d’ouvrage',
      'Réception avec ou sans réserves : départ des garanties',
      'Levée des réserves, remise du DOE et du DIUO',
      'Décompte général définitif et libération de la retenue',
    ],
  },
  mistakes: {
    items: [
      ['Réserves vagues (« finitions à reprendre »)', 'Levée impossible à vérifier', 'Localiser, décrire et photographier chaque réserve.'],
      ['Occuper l’ouvrage avant la réception', 'Responsabilité et garde floues', 'Réceptionner ou rédiger un constat de prise de possession anticipée.'],
      ['Oublier le DOE', 'Exploitation et maintenance difficiles', 'Conditionner le solde à la remise du DOE.'],
    ],
  },
  tips: {
    tips: [
      'Préparez les OPR par des pré-réceptions internes lot par lot.',
      'Utilisez une application de réserves avec plans et photos.',
      'Vérifiez les attestations décennales de tous les intervenants avant la réception.',
      'Fixez un délai réaliste de levée des réserves dans le PV.',
    ],
  },
  norms: {
    norms: [
      ['Code civil, art. 1792 à 1792-6', 'Responsabilités et garanties des constructeurs, réception.'],
      ['CCAG Travaux 2021', 'Marchés publics : OPR, réception, pénalités, décompte.'],
      ['NF P 03-001', 'CCAG type des marchés privés de bâtiment.'],
      ['Loi n° 71-584 du 16 juillet 1971', 'Retenue de garantie limitée à 5 %.'],
      ['Code des assurances, L. 242-1', 'Assurance dommages-ouvrage.'],
    ],
  },
  exercises: {
    exercises: [
      {
        level: 1,
        text: 'Quelle est la durée de la garantie de parfait achèvement ?',
        hint: 'C’est la plus courte des trois.',
        answer_latex: "1\\ \\text{an}",
        answer_text: 'Un an à compter de la réception.',
      },
      {
        level: 2,
        text: 'Calculer la retenue de garantie sur un marché de 860 000 € TTC.',
        hint: '5 % au maximum.',
        answer_latex: "0{,}05 \\times 860\\,000 = 43\\,000\\ €",
        answer_text: '43 000 €.',
      },
      {
        level: 3,
        text: 'Marché de 2 400 000 € HT, délai contractuel 300 jours, achèvement au jour 322, dont 8 jours d’intempéries reconnus. Calculer les pénalités CCAG.',
        hint: 'Seuls les jours non justifiés sont pénalisés.',
        answer_latex: "j = 322 - 300 - 8 = 14 \\Rightarrow P = \\frac{2\\,400\\,000 \\times 14}{3\\,000} = 11\\,200\\ €",
        answer_text: '11 200 €.',
      },
    ],
  },
  quiz: {
    title: 'Quiz — Réception des travaux',
    questions: [
      { q: 'Que déclenche la réception ?', options: ['Le début des travaux', 'Le départ des garanties légales', 'La signature du marché'], correct: 1, explain: 'Les garanties de 1, 2 et 10 ans partent de la réception.' },
      { q: 'Quelle garantie couvre les désordres compromettant la solidité ?', options: ['Parfait achèvement', 'Bon fonctionnement', 'Décennale'], correct: 2, explain: 'La garantie décennale (art. 1792 du Code civil).' },
      { q: 'Quel est le plafond de la retenue de garantie ?', options: ['5 %', '10 %', '15 %'], correct: 0, explain: 'Loi du 16 juillet 1971.' },
    ],
  },
  exam_questions: {
    questions: [
      'Décrivez la procédure de réception d’un marché public de travaux.',
      'Présentez les trois garanties légales et leur domaine.',
      'Expliquez le rôle du DOE et du DIUO.',
    ],
  },
  interview_questions: {
    questions: [
      ['Comment préparez-vous une réception ?', 'Par des pré-réceptions internes, un planning de levée, la collecte anticipée des PV d’essais et du DOE, et une visite méthodique pièce par pièce avec le maître d’œuvre.'],
      ['Le client veut emménager avant la réception : que faites-vous ?', 'Je propose soit une réception partielle, soit un constat contradictoire de prise de possession anticipée précisant l’état des lieux et le transfert de garde.'],
    ],
  },
  practical_case: {
    title: 'Cas pratique — Clôture d’un lot VRD',
    scenario: 'Lot VRD de 540 000 € HT (648 000 € TTC). OPR : 26 réserves, dont 3 sur des regards mal calés. Retard de 9 jours non justifiés. Acomptes versés : 570 000 € TTC.',
    description: 'Établir le solde du décompte et le plan de levée.',
    resolutions: [
      "P = \\frac{540\\,000 \\times 9}{3\\,000} = 1\\,620\\ €",
      "R = 0{,}05 \\times 648\\,000 = 32\\,400\\ €",
      "S = 648\\,000 - 570\\,000 - 1\\,620 - 32\\,400 = 43\\,980\\ €",
    ],
    conclusion: 'Le solde de 43 980 € est versé au décompte ; la retenue reste bloquée jusqu’à la levée des 26 réserves, priorisées en commençant par les regards (sécurité des usagers).',
  },
  summary: {
    content: `### La réception en 5 points
1. Acte contradictoire d'acceptation, avec ou sans réserves.
2. Précédée des OPR et suivie de la levée des réserves.
3. Fait courir les garanties : 1 an, 2 ans, 10 ans.
4. Pénalités CCAG : $M_{HT} \\times j / 3\\,000$ ; retenue ≤ 5 %.
5. DOE et DIUO remis pour l'exploitation.`,
  },
  key_points: {
    points: [
      'Réception = départ des garanties',
      'GPA 1 an, GBF 2 ans, décennale 10 ans',
      'Défaut apparent → réserve écrite',
      'Pénalité = M_HT × j / 3 000',
      'Retenue ≤ 5 %',
    ],
  },
  self_assessment: {
    objectives: [
      'Je connais la procédure OPR et réception',
      'Je distingue les trois garanties légales',
      'Je sais calculer pénalités, retenue et solde',
      'Je sais rédiger une réserve exploitable',
      "J'ai réussi le quiz avec au moins 2 bonnes réponses sur 3",
    ],
  },
});
