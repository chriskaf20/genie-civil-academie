// ── Lesson: Électricité et courants faibles — Module 44 ──────────────────────
import { buildLesson } from './build_lesson.js';

export const lesson_equipements_electricite = buildLesson({
  moduleId: 44,
  slug: 'equipements_electricite',
  lessonIndex: 4,
  title: "Électricité du Bâtiment et Courants Faibles : Puissance, Sections de Câbles, Chute de Tension, Protections",
  subtitle: 'Module 44 — Équipements techniques du bâtiment (fluides)',
  level: 'Intermédiaire',
  duration: '5h',
  diagramType: 'none',
  tags: ['Électricité', 'NF C 15-100', 'Puissance', 'Section de câble', 'Chute de tension', 'Disjoncteur', 'Différentiel', 'Courants faibles'],
}, {
  definition: {
    title: 'Définition — Distribuer l’énergie électrique en sécurité',
    fr: 'Installations électriques et courants faibles du bâtiment',
    en: 'Building electrical installations and low-current systems',
    metier: "Concerne les bureaux d'études électricité, installateurs, conducteurs de travaux tous corps d'état et ingénieurs en synthèse technique.",
    content: `Une installation électrique de bâtiment comprend :
- le **branchement** et le comptage (puissance souscrite en kVA) ;
- le **tableau** avec ses protections (disjoncteurs, différentiels) ;
- les **circuits** (éclairage, prises, appareils spécialisés) en câbles dimensionnés ;
- la **mise à la terre** et les liaisons équipotentielles.

Les **courants faibles** regroupent les réseaux de communication et de sécurité : téléphone, données (VDI), fibre optique, alarme, contrôle d'accès, vidéosurveillance, système de sécurité incendie.

### Deux exigences
1. **Sécurité des personnes** : protection contre les contacts (différentiels 30 mA, terre).
2. **Protection des biens** : chaque câble est protégé contre les surcharges et courts-circuits par un disjoncteur adapté à sa section.

> 💡 En France, la norme **NF C 15-100** fixe les règles des installations basse tension.`,
  },
  importance: {
    content: `- **Sécurité** : les défauts électriques sont une cause importante d'incendies et d'électrisations.
- **Coordination** : gaines, chemins de câbles et réservations doivent être intégrés dès la synthèse.
- **Évolution des usages** : recharge de véhicules électriques, PAC, photovoltaïque augmentent les puissances.
- **Réception** : un installateur doit fournir les autocontrôles et, selon les cas, une attestation de conformité.

> ⚠️ **À retenir** : la section d'un câble dépend du courant, de sa longueur (chute de tension) et de son mode de pose.`,
  },
  applications: {
    examples: [
      ['Logement', 'Tableau avec interrupteurs différentiels 30 mA, circuits prises en 2,5 mm².'],
      ['Borne de recharge', 'Circuit dédié 32 A, section adaptée à la longueur.'],
      ['Bureaux', 'Chemins de câbles courants forts et faibles séparés.'],
      ['Parking', 'Éclairage commandé par détection, bornes de recharge.'],
      ['Photovoltaïque', 'Onduleur, protections côté continu et côté alternatif.'],
    ],
  },
  theory: {
    title: 'Théorie — Puissance, courant et chute de tension',
    content: `### 1. Puissance et courant
- Monophasé (230 V) : $P = U\\, I\\, \\cos\\varphi$.
- Triphasé (400 V entre phases) : $P = \\sqrt{3}\\, U\\, I\\, \\cos\\varphi$.

### 2. Choix de la protection et du câble
On calcule le courant d'emploi $I_B$, on choisit un disjoncteur de calibre $I_n \\geq I_B$, puis une section dont le courant admissible $I_Z \\geq I_n$. Valeurs usuelles en logement : éclairage 1,5 mm² / 16 A ; prises 2,5 mm² / 20 A ; plaque de cuisson 6 mm² / 32 A.

### 3. Chute de tension (monophasé, câble cuivre)
$$\\Delta U = 2\\, \\rho\\, \\frac{L}{S}\\, I \\qquad \\rho_{Cu} \\approx 0{,}0225\\ \\Omega\\cdot\\text{mm}^2/\\text{m}$$
Limites usuelles (NF C 15-100, depuis l'origine de l'installation en distribution publique) : 3 % pour l'éclairage, 5 % pour les autres usages.

### 4. Puissance à souscrire
On additionne les puissances des usages en appliquant un **coefficient de foisonnement** (tous les appareils ne fonctionnent pas en même temps).

### 5. Courants faibles
Câblage structuré (catégorie 6 ou 6A), fibre optique jusqu'au logement, séparation physique avec les courants forts pour éviter les perturbations.`,
  },
  formulas: {
    title: 'Formules essentielles — Électricité',
    formulas: [
      { name: 'Puissance monophasée', latex: "P = U\\, I\\, \\cos\\varphi", description: 'Puissance active d’un circuit 230 V.', vars: [['U', 'Tension', 'V', '230 V.'], ['I', 'Courant', 'A', ''], ['\\cos\\varphi', 'Facteur de puissance', '-', '≈ 1 pour une résistance.']] },
      { name: 'Puissance triphasée', latex: "P = \\sqrt{3}\\, U\\, I\\, \\cos\\varphi", description: 'U = 400 V entre phases.', vars: [['U', 'Tension composée', 'V', '400 V.']] },
      { name: 'Chute de tension (monophasé)', latex: "\\Delta U = 2\\, \\rho\\, \\frac{L}{S}\\, I", description: 'Aller et retour dans le câble.', vars: [['\\rho', 'Résistivité', 'Ω·mm²/m', '0,0225 cuivre en service.'], ['L', 'Longueur du câble', 'm', ''], ['S', 'Section', 'mm²', '']] },
      { name: 'Condition de protection', latex: "I_B \\leq I_n \\leq I_Z", description: 'Le disjoncteur protège le câble.', vars: [['I_B', 'Courant d’emploi', 'A', ''], ['I_n', 'Calibre de la protection', 'A', ''], ['I_Z', 'Courant admissible du câble', 'A', '']] },
    ],
  },
  stepbystep: {
    title: 'Calcul complet — Circuit d’un chauffe-eau de 3,5 kW',
    problem: "Chauffe-eau électrique de 3,5 kW (cos φ = 1) en 230 V, à 25 m du tableau. Calculer le courant, choisir protection et section, et vérifier la chute de tension (limite 5 %).",
    steps_demo: [
      { n: 1, text: "Courant : I = 3 500 / 230 = 15,2 A." },
      { n: 2, text: "Protection : disjoncteur 20 A (≥ 15,2 A)." },
      { n: 3, text: "Section : 2,5 mm² cuivre (admet 20 A dans les modes de pose courants)." },
      { n: 4, text: "Chute de tension : ΔU = 2 × 0,0225 × 25 / 2,5 × 15,2 = 6,8 V, soit 6,8 / 230 = 3,0 %." },
      { n: 5, text: "3,0 % ≤ 5 % : conforme (à cumuler avec la chute en amont du tableau)." },
    ],
    result_latex: "I = \\frac{3\\,500}{230} = 15{,}2\\ \\text{A} \\qquad \\Delta U = 2 \\times 0{,}0225 \\times \\frac{25}{2{,}5} \\times 15{,}2 = 6{,}8\\ \\text{V} = 3{,}0\\ \\%",
  },
  units: {
    table: [
      ['Puissance active', 'W, kW', 'W', ''],
      ['Puissance apparente', 'VA, kVA', 'VA', 'Abonnement en kVA'],
      ['Section', 'mm²', 'AWG', '2,5 mm² ≈ AWG 14'],
      ['Tension', 'V', 'V', '230 V monophasé, 400 V triphasé (Europe)'],
      ['Énergie', 'kWh', 'kWh', ''],
    ],
    note: 'En Amérique du Nord, la tension domestique est de 120/240 V et les sections sont exprimées en AWG.',
  },
  hypotheses: {
    items: [
      ['info', 'Les courants admissibles dépendent du mode de pose, du nombre de circuits groupés et de la température.'],
      ['info', 'La chute de tension se cumule depuis l’origine de l’installation.'],
      ['warning', 'Ne jamais surcalibrer un disjoncteur par rapport à la section : le câble ne serait plus protégé.'],
      ['warning', 'Les travaux électriques exigent une habilitation et la mise hors tension consignée.'],
      ['tip', 'Réservez de la place au tableau (au moins 20 %) pour les évolutions.'],
    ],
  },
  simple_examples: {
    examples: [
      { title: 'Exemple 1 : courant d’un four', given: 'Four de 2,4 kW en 230 V', find: 'I', solution_latex: "I = \\frac{2\\,400}{230} = 10{,}4\\ \\text{A}", result: '10,4 A : circuit spécialisé 2,5 mm² / 20 A.' },
      { title: 'Exemple 2 : borne de recharge triphasée', given: '11 kW, 400 V, cos φ = 1', find: 'I', solution_latex: "I = \\frac{11\\,000}{\\sqrt{3} \\times 400} = 15{,}9\\ \\text{A}", result: '≈ 16 A par phase.' },
      { title: 'Exemple 3 : foisonnement', given: 'Puissances installées 18 kW, coefficient 0,5', find: 'Puissance souscrite', solution_latex: "P = 0{,}5 \\times 18 = 9\\ \\text{kVA}", result: 'Abonnement de 9 kVA.' },
    ],
  },
  real_examples: {
    title: 'Exemple réel — Incendie d’origine électrique dans un tableau',
    examples: [
      {
        context: 'Immeuble de logements, tableau d’étage après des travaux de rénovation',
        scenario: "Un disjoncteur de 32 A avait été posé sur un câble de 2,5 mm² pour éviter des déclenchements répétés. Le câble a chauffé pendant des semaines sous une charge de 25 à 28 A et l'isolant s'est dégradé jusqu'à l'amorçage d'un incendie dans la gaine technique.",
        decomposition_latex: "I_n = 32\\ \\text{A} > I_Z(2{,}5\\ \\text{mm}^2) \\Rightarrow \\text{câble non protégé} \\Rightarrow \\text{échauffement et incendie}",
        lesson: "Un déclenchement répété signale une surcharge : on répartit les charges ou on augmente la section, jamais le calibre seul.",
      },
    ],
  },
  diagrams: {
    title: 'Schéma de principe — Du réseau public aux circuits',
    diagram_description: [
      'Branchement et compteur (puissance souscrite)',
      'Disjoncteur de branchement',
      'Tableau : interrupteurs différentiels 30 mA',
      'Disjoncteurs divisionnaires par circuit',
      'Circuits : éclairage, prises, appareils spécialisés',
      'Terre et liaisons équipotentielles ; réseau courants faibles séparé',
    ],
  },
  mistakes: {
    items: [
      ['Calibre supérieur au courant admissible du câble', 'Échauffement, incendie', 'Respecter I_B ≤ I_n ≤ I_Z.'],
      ['Câbles longs en petite section', 'Chute de tension excessive', 'Calculer ΔU et augmenter la section.'],
      ['Courants faibles collés aux courants forts', 'Perturbations du réseau de données', 'Séparer les cheminements.'],
    ],
  },
  tips: {
    tips: [
      'Retenez : 1,5 mm² / 16 A éclairage ; 2,5 mm² / 20 A prises ; 6 mm² / 32 A cuisson.',
      'Chute de tension : 3 % éclairage, 5 % autres usages.',
      'Prévoyez les fourreaux pour la recharge de véhicules électriques.',
      'Repérez chaque circuit au tableau.',
    ],
  },
  norms: {
    norms: [
      ['NF C 15-100', 'Installations électriques à basse tension.'],
      ['NF C 14-100', 'Installations de branchement à basse tension.'],
      ['NF EN 50173', 'Systèmes de câblage générique (courants faibles).'],
      ['NF C 18-510', 'Prévention du risque électrique (habilitations).'],
    ],
  },
  exercises: {
    exercises: [
      { level: 1, text: 'Quel courant absorbe un radiateur de 1 500 W en 230 V ?', hint: 'I = P / U.', answer_latex: "I = \\frac{1\\,500}{230} = 6{,}5\\ \\text{A}", answer_text: '6,5 A.' },
      { level: 2, text: 'Calculer ΔU pour 16 A sur 30 m de câble 2,5 mm².', hint: '2 ρ L I / S.', answer_latex: "\\Delta U = 2 \\times 0{,}0225 \\times \\frac{30}{2{,}5} \\times 16 = 8{,}6\\ \\text{V} = 3{,}8\\ \\%", answer_text: '8,6 V soit 3,8 %.' },
      { level: 3, text: 'Même circuit pour de l’éclairage (limite 3 %) : quelle section ?', hint: 'Essayer 4 mm².', answer_latex: "\\Delta U = 2 \\times 0{,}0225 \\times \\frac{30}{4} \\times 16 = 5{,}4\\ \\text{V} = 2{,}3\\ \\%", answer_text: '4 mm² (2,3 %).' },
    ],
  },
  quiz: {
    title: 'Quiz — Électricité',
    questions: [
      { q: 'Quelle section pour un circuit de prises protégé en 20 A (logement) ?', options: ['1,5 mm²', '2,5 mm²', '10 mm²'], correct: 1, explain: 'Règle usuelle NF C 15-100.' },
      { q: 'Que protège un différentiel 30 mA ?', options: ['Les câbles contre les surcharges', 'Les personnes contre les contacts', 'Le compteur'], correct: 1, explain: 'Il coupe sur un courant de fuite.' },
      { q: 'Formule de la puissance triphasée ?', options: ['P = U I', 'P = √3 U I cos φ', 'P = 3 U I'], correct: 1, explain: 'U tension entre phases.' },
    ],
  },
  exam_questions: {
    questions: [
      'Dimensionnez un circuit : courant, protection, section, chute de tension.',
      'Expliquez la coordination entre disjoncteur et câble.',
      'Présentez l’organisation d’un tableau de logement et des courants faibles.',
    ],
  },
  interview_questions: {
    questions: [
      ['Un disjoncteur saute régulièrement : que faites-vous ?', 'Je mesure le courant, j’identifie la surcharge ou le défaut, puis je répartis les charges ou je crée un circuit supplémentaire ; je ne change jamais le calibre sans vérifier la section.'],
      ['Comment intégrer l’électricité dans la synthèse technique ?', 'En réservant les chemins de câbles, les gaines et les réservations dans la maquette, en séparant courants forts et faibles et en coordonnant avec les fluides.'],
    ],
  },
  practical_case: {
    title: 'Cas pratique — Puissance d’un logement tout électrique',
    scenario: 'Logement : PAC 4 kW, chauffe-eau 2,2 kW, plaque 7 kW, four 2,5 kW, lave-linge 2 kW, éclairage et prises 3 kW.',
    description: 'Estimer la puissance à souscrire avec un foisonnement de 0,5.',
    resolutions: [
      "P_{installée} = 4 + 2{,}2 + 7 + 2{,}5 + 2 + 3 = 20{,}7\\ \\text{kW}",
      "P_{souscrite} \\approx 0{,}5 \\times 20{,}7 = 10{,}4\\ \\text{kVA}",
      "\\Rightarrow \\text{abonnement de 12 kVA (ou 9 kVA avec délestage du chauffe-eau en heures creuses)}",
    ],
    conclusion: 'Le foisonnement évite de souscrire la somme des puissances ; un délesteur peut réduire l’abonnement.',
  },
  summary: {
    content: `### L'électricité du bâtiment en 5 points
1. $P = U I \\cos\\varphi$ (mono) ; $P = \\sqrt{3} U I \\cos\\varphi$ (tri).
2. $I_B \\leq I_n \\leq I_Z$.
3. $\\Delta U = 2 \\rho L I / S$ : 3 % éclairage, 5 % autres usages.
4. Différentiel 30 mA et terre pour les personnes.
5. Courants faibles séparés, foisonnement pour l'abonnement.`,
  },
  key_points: {
    points: ['P = U I cos φ', 'I_B ≤ I_n ≤ I_Z', 'ΔU = 2ρLI/S', '2,5 mm² / 20 A pour les prises', '30 mA pour les personnes'],
  },
  self_assessment: {
    objectives: [
      'Je sais calculer un courant d’emploi',
      'Je sais choisir protection et section',
      'Je sais vérifier une chute de tension',
      'Je sais estimer une puissance à souscrire',
      "J'ai réussi le quiz avec au moins 2 bonnes réponses sur 3",
    ],
  },
});
