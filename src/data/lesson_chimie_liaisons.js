// ── Lesson: Structure de la matière et liaisons chimiques — Module 3 ──────────
import { buildLesson } from './build_lesson.js';

export const lesson_chimie_liaisons = buildLesson({
  moduleId: 3,
  slug: 'chimie_liaisons',
  lessonIndex: 2,
  title: "Structure de la Matière & Liaisons Chimiques : du Réseau Cristallin aux Propriétés des Matériaux",
  subtitle: 'Module 03 — Chimie théorique & Chimie des matériaux',
  level: 'Débutant',
  duration: '8h',
  tags: ['Chimie', 'Atome', 'Liaisons', 'Métaux', 'Réseau cristallin', 'Acier', 'Soudabilité'],
}, {
  definition: {
    title: "Définition — Pourquoi l'acier plie et la pierre casse",
    fr: 'Structure de la matière et liaisons chimiques',
    en: 'Structure of matter and chemical bonding',
    metier: "Utile aux ingénieurs matériaux, aux laboratoires, aux soudeurs et contrôleurs, et à tout ingénieur qui doit comprendre le comportement des matériaux qu'il prescrit.",
    content: `Les propriétés d'un matériau (résistance, ductilité, conductivité, durabilité) découlent de la façon dont ses **atomes** sont liés et arrangés.

### Les liaisons
- **Ionique** : un atome cède des électrons à un autre (NaCl, oxydes) ; liaison forte mais rigide : matériaux durs et fragiles.
- **Covalente** : mise en commun d'électrons (diamant, silicates, polymères) ; très forte et directionnelle.
- **Métallique** : des électrons libres circulent entre les ions positifs ; elle permet le glissement des plans d'atomes : **ductilité** et conductivité des métaux.
- **Faibles** (van der Waals, hydrogène) : entre molécules ; elles expliquent par exemple la cohésion des feuillets d'argile et l'adsorption de l'eau.

### L'arrangement des atomes
Les métaux et de nombreux minéraux sont **cristallins** (atomes rangés en réseau régulier) ; les verres et de nombreux polymères sont **amorphes**. Les **défauts** du réseau (dislocations, joints de grains) gouvernent la plasticité et la résistance des métaux.

> 💡 Le béton combine des liaisons ioniques et covalentes (C-S-H, granulats) : il est résistant en compression mais fragile en traction, d'où l'association avec l'acier ductile.`,
  },
  importance: {
    content: `- **Choix des matériaux** : comprendre pourquoi un matériau est ductile ou fragile guide son emploi (traction, chocs, séisme).
- **Soudage** : la composition chimique de l'acier (carbone, manganèse) fixe sa soudabilité.
- **Corrosion** : les métaux tendent à retourner à l'état d'oxyde, état chimiquement plus stable.
- **Durabilité** : l'eau et les ions agressifs attaquent les liaisons des matériaux minéraux.

> ⚠️ **À retenir** : plus un acier contient de carbone, plus il est résistant mais moins il est ductile et soudable.`,
  },
  applications: {
    examples: [
      ['Choix d’une nuance d’acier', 'Comparaison de S235 et S355 : composition, carbone équivalent et soudabilité.'],
      ['Traitement thermique', 'Trempe et revenu des aciers de précontrainte et des boulons haute résistance.'],
      ['Argiles', 'Gonflement des smectites dû à l’eau adsorbée entre les feuillets.'],
      ['Verre structurel', 'Matériau amorphe fragile : trempe thermique et feuilletage pour la sécurité.'],
      ['Contrôle en laboratoire', 'Analyse chimique d’un acier par spectrométrie avant soudage sur un ouvrage ancien.'],
    ],
  },
  theory: {
    title: "Théorie — Atomes, moles, réseaux et alliages",
    content: `### 1. Atome et mole
Un atome est constitué d'un noyau (protons, neutrons) et d'électrons. Une **mole** contient $N_A = 6{,}022 \\times 10^{23}$ entités ; la masse molaire $M$ (g/mol) relie masse et quantité de matière : $n = m / M$.

### 2. Électronégativité et type de liaison
Plus la différence d'électronégativité $\\Delta\\chi$ entre deux atomes est grande, plus la liaison est ionique (au-delà d'environ 1,7) ; une faible différence donne une liaison covalente.

### 3. Masse volumique d'un cristal
$$\\rho = \\frac{n \\, M}{N_A \\, a^3}$$
$n$ : nombre d'atomes par maille ; $a$ : paramètre de maille. Le fer α (ferrite) est cubique centré (n = 2, a = 0,2866 nm).

### 4. L'acier : un alliage fer-carbone
- Acier : moins de 2,1 % de carbone (aciers de construction : 0,1 à 0,25 %).
- **Ferrite** (cubique centré, ductile) et **cémentite** Fe₃C (dure, fragile) ; au-dessus d'environ 727 °C, l'**austénite** (cubique à faces centrées).
- La **trempe** (refroidissement rapide) forme la martensite, très dure ; le **revenu** restaure de la ductilité.

### 5. Soudabilité : carbone équivalent
$$CE = C + \\frac{Mn}{6} + \\frac{Cr + Mo + V}{5} + \\frac{Ni + Cu}{15}$$
En dessous d'environ 0,40 à 0,45 %, l'acier se soude facilement ; au-delà, un préchauffage est nécessaire pour éviter la fissuration à froid.`,
  },
  formulas: {
    title: 'Formules essentielles — Chimie des matériaux',
    formulas: [
      {
        name: 'Quantité de matière',
        latex: "n = \\frac{m}{M} \\qquad N = n \\cdot N_A",
        description: 'Relation entre masse, quantité de matière et nombre d’entités.',
        vars: [
          ['n', 'Quantité de matière', 'mol', 'Nombre de moles.'],
          ['m', 'Masse', 'g', 'Masse de l’échantillon.'],
          ['M', 'Masse molaire', 'g/mol', 'Fe : 55,85 ; C : 12,01 ; O : 16,00.'],
          ['N_A', "Nombre d'Avogadro", '1/mol', '6,022 × 10²³.'],
        ],
      },
      {
        name: 'Masse volumique d’un cristal',
        latex: "\\rho = \\frac{n \\, M}{N_A \\, a^3}",
        description: 'À partir de la structure cristalline et du paramètre de maille.',
        vars: [
          ['\\rho', 'Masse volumique', 'g/cm³', 'Fer : 7,87 g/cm³.'],
          ['n', 'Atomes par maille', '-', 'Cubique centré : 2 ; cubique à faces centrées : 4.'],
          ['a', 'Paramètre de maille', 'cm', 'Fer α : 2,866 × 10⁻⁸ cm.'],
        ],
      },
      {
        name: 'Carbone équivalent (IIW)',
        latex: "CE = C + \\frac{Mn}{6} + \\frac{Cr + Mo + V}{5} + \\frac{Ni + Cu}{15}",
        description: 'Indicateur de soudabilité des aciers (teneurs en % massiques).',
        vars: [
          ['CE', 'Carbone équivalent', '%', '≤ 0,40 à 0,45 : bonne soudabilité.'],
          ['C, Mn, Cr…', 'Teneurs des éléments', '%', 'Données par le certificat matière (3.1).'],
        ],
        rule: "Le manganèse durcit l'acier six fois moins que le carbone.",
      },
      {
        name: 'Oxydation du fer (formation de la rouille)',
        latex: "4\\,\\mathrm{Fe} + 3\\,\\mathrm{O_2} + 2x\\,\\mathrm{H_2O} \\longrightarrow 2\\,\\mathrm{Fe_2O_3 \\cdot x\\,H_2O}",
        description: 'Le métal retourne à l’état d’oxyde hydraté, plus stable et plus volumineux.',
        vars: [
          ['\\mathrm{Fe}', 'Fer', '-', 'Métal à l’état réduit.'],
          ['\\mathrm{Fe_2O_3 \\cdot x\\,H_2O}', 'Rouille', '-', '2 à 6 fois le volume de l’acier consommé.'],
        ],
      },
    ],
  },
  stepbystep: {
    title: 'Calcul complet — Masse volumique du fer à partir de son réseau',
    problem: "Le fer α cristallise dans le système cubique centré (2 atomes par maille) avec un paramètre de maille a = 0,2866 nm. M(Fe) = 55,85 g/mol. Calculer sa masse volumique.",
    steps_demo: [
      { n: 1, text: "Paramètre en cm : a = 0,2866 × 10⁻⁷ cm = 2,866 × 10⁻⁸ cm." },
      { n: 2, text: "Volume de la maille : a³ = (2,866 × 10⁻⁸)³ = 2,354 × 10⁻²³ cm³." },
      { n: 3, text: "Masse des atomes de la maille : 2 × 55,85 / 6,022 × 10²³ = 1,855 × 10⁻²² g." },
      { n: 4, text: "Masse volumique : ρ = 1,855 × 10⁻²² / 2,354 × 10⁻²³ = 7,88 g/cm³." },
      { n: 5, text: "Comparaison : la valeur mesurée du fer est 7,87 g/cm³ ; celle des aciers de construction ≈ 7,85 g/cm³ (78,5 kN/m³)." },
    ],
    result_latex: "\\rho = \\frac{2 \\times 55{,}85}{6{,}022 \\times 10^{23} \\times (2{,}866 \\times 10^{-8})^3} = 7{,}88\\ \\text{g/cm}^3",
  },
  units: {
    table: [
      ['Masse molaire', 'g/mol', '-', 'Fe 55,85 ; Ca 40,08 ; Si 28,09 ; Al 26,98'],
      ['Paramètre de maille', 'nm, Å', '-', '1 nm = 10 Å = 10⁻⁹ m'],
      ['Masse volumique', 'g/cm³ = t/m³', 'lb/ft³', 'Acier 7,85 t/m³ = 490 lb/ft³'],
      ['Composition', '% massique', 'wt %', 'Aciers : C 0,1 à 0,25 %'],
      ['Température de transformation', '°C', '°F', 'Austénitisation de l’acier ≈ 727 à 912 °C'],
    ],
    note: 'Les compositions des aciers sont toujours données en pourcentage massique.',
  },
  hypotheses: {
    items: [
      ['info', 'Le calcul de masse volumique suppose un cristal parfait sans lacunes ni impuretés.'],
      ['info', 'La formule du carbone équivalent est indicative ; les normes de soudage (EN 1011-2) donnent la méthode de préchauffage complète.'],
      ['warning', 'Les aciers anciens (fer puddlé, aciers Thomas) peuvent contenir du phosphore et de l’azote qui les rendent fragiles et peu soudables.'],
      ['warning', 'Un acier trempé sans revenu est dur mais fragile : à proscrire pour les éléments de structure.'],
      ['tip', 'Exigez le certificat de réception 3.1 de l’acier : il donne la composition et les essais mécaniques.'],
    ],
  },
  simple_examples: {
    examples: [
      {
        title: 'Exemple 1 : carbone équivalent d’un S355',
        given: 'C = 0,18 % ; Mn = 1,40 % ; Cr = 0,05 % ; Ni = 0,05 % ; Cu = 0,10 %',
        find: 'CE',
        solution_latex: "CE = 0{,}18 + \\frac{1{,}40}{6} + \\frac{0{,}05}{5} + \\frac{0{,}15}{15} = 0{,}18 + 0{,}233 + 0{,}01 + 0{,}01 = 0{,}43\\,\\%",
        result: 'CE = 0,43 % : soudable, préchauffage éventuel pour les fortes épaisseurs.',
      },
      {
        title: 'Exemple 2 : nombre d’atomes dans 1 g de fer',
        given: 'M = 55,85 g/mol',
        find: 'N',
        solution_latex: "N = \\frac{1}{55{,}85} \\times 6{,}022 \\times 10^{23} = 1{,}08 \\times 10^{22}\\ \\text{atomes}",
        result: '≈ 10²² atomes dans un gramme de fer.',
      },
      {
        title: 'Exemple 3 : type de liaison',
        given: 'Électronégativités : Ca 1,00 ; O 3,44 ; Si 1,90',
        find: 'Nature des liaisons Ca-O et Si-O',
        solution_latex: "\\Delta\\chi_{Ca-O} = 2{,}44 > 1{,}7 \\ (\\text{ionique}) \\qquad \\Delta\\chi_{Si-O} = 1{,}54 \\ (\\text{covalente polaire})",
        result: 'La chaux est ionique ; la silice (sable, quartz) covalente : très dure et stable.',
      },
    ],
  },
  real_examples: {
    title: 'Exemple réel — Ruptures fragiles des navires Liberty (1943-1945)',
    examples: [
      {
        context: 'Cargos américains de la Seconde Guerre mondiale, coques entièrement soudées',
        scenario: "Plusieurs navires se sont brisés en deux en eaux froides. L'acier utilisé, de faible ténacité à basse température, et des concentrations de contraintes aux angles des écoutilles ont favorisé des ruptures fragiles amorcées sur des défauts de soudure.",
        decomposition_latex: "\\text{Acier peu tenace} + \\text{basse température} + \\text{défaut de soudure} \\Rightarrow \\text{rupture fragile}",
        lesson: "Ces accidents ont fondé la mécanique de la rupture et l'exigence de ténacité (essai Charpy, qualités JR, J0, J2 des aciers) en fonction de la température de service.",
      },
    ],
  },
  diagrams: {
    title: 'Schéma de principe — De la liaison au comportement',
    diagram_description: [
      'Liaison métallique → glissement des plans d’atomes → ductilité (aciers)',
      'Liaisons ionique et covalente → réseau rigide → dureté et fragilité (pierres, céramiques, béton)',
      'Chaînes covalentes + liaisons faibles → souplesse et fluage (polymères)',
      'Liaisons faibles entre feuillets → gonflement à l’eau (argiles)',
      'Composition de l’acier → carbone équivalent → soudabilité',
      'Retour à l’oxyde → corrosion des métaux',
    ],
  },
  mistakes: {
    items: [
      ['Croire qu’un acier plus résistant est toujours meilleur', 'Moins ductile, moins soudable, parfois fragile', 'Choisir la nuance et la qualité (JR, J0, J2) selon l’usage et la température.'],
      ['Souder un acier ancien sans analyse', 'Fissuration à froid ou rupture fragile', 'Analyser la composition et faire des essais de soudabilité.'],
      ['Confondre masse et quantité de matière', 'Stœchiométrie fausse', 'Toujours passer par n = m / M.'],
    ],
  },
  tips: {
    tips: [
      'L’essai Charpy (énergie de rupture sur éprouvette entaillée) mesure la ténacité de l’acier à une température donnée.',
      'La lettre J2 d’un acier S355J2 garantit 27 J à −20 °C.',
      'Un préchauffage à 100-150 °C réduit le risque de fissuration à froid des soudures sur fortes épaisseurs.',
      'Retenez : 7,85 t/m³ pour l’acier, 2,5 t/m³ pour le béton armé.',
    ],
  },
  norms: {
    norms: [
      ['NF EN 10025-2', 'Aciers de construction non alliés : composition, carbone équivalent maximal, qualités JR à J2.'],
      ['NF EN 10204', 'Documents de contrôle (certificats 2.1, 2.2, 3.1, 3.2).'],
      ['NF EN 1011-2', 'Recommandations pour le soudage à l’arc des aciers ferritiques (préchauffage).'],
      ['NF EN ISO 148-1', 'Essai de flexion par choc sur éprouvette Charpy.'],
    ],
  },
  exercises: {
    exercises: [
      {
        level: 1,
        text: 'Calculer la quantité de matière dans 1 kg de fer.',
        hint: 'n = m / M.',
        answer_latex: "n = \\frac{1\\,000}{55{,}85} = 17{,}9\\ \\text{mol}",
        answer_text: '≈ 17,9 mol.',
      },
      {
        level: 2,
        text: 'Le cuivre est cubique à faces centrées (4 atomes par maille), a = 0,3615 nm, M = 63,55 g/mol. Calculer sa masse volumique.',
        hint: 'a³ = (3,615 × 10⁻⁸)³ cm³.',
        answer_latex: "\\rho = \\frac{4 \\times 63{,}55}{6{,}022 \\times 10^{23} \\times 4{,}724 \\times 10^{-23}} = 8{,}94\\ \\text{g/cm}^3",
        answer_text: 'ρ ≈ 8,94 g/cm³.',
      },
      {
        level: 3,
        text: 'Un acier contient C = 0,22 %, Mn = 1,60 %, Cr = 0,20 %, Mo = 0,05 %, Ni = 0,20 %, Cu = 0,25 %. Calculer CE et conclure.',
        hint: 'Additionner les termes de la formule IIW.',
        answer_latex: "CE = 0{,}22 + 0{,}267 + \\frac{0{,}25}{5} + \\frac{0{,}45}{15} = 0{,}22 + 0{,}267 + 0{,}05 + 0{,}03 = 0{,}567\\,\\%",
        answer_text: 'CE ≈ 0,57 % : soudabilité médiocre, préchauffage et mode opératoire qualifié obligatoires.',
      },
    ],
  },
  quiz: {
    title: 'Quiz — Structure de la matière',
    questions: [
      { q: 'Quelle liaison explique la ductilité des métaux ?', options: ['Ionique', 'Covalente', 'Métallique'], correct: 2, explain: 'Les électrons libres permettent aux plans d’atomes de glisser sans rupture.' },
      { q: 'Quelle est la teneur maximale en carbone d’un acier ?', options: ['≈ 0,5 %', '≈ 2,1 %', '≈ 10 %'], correct: 1, explain: 'Au-delà d’environ 2,1 % de carbone, on parle de fonte.' },
      { q: 'Que mesure le carbone équivalent ?', options: ['La résistance', 'La soudabilité', 'La corrosion'], correct: 1, explain: 'Il traduit la tendance à la trempe et donc le risque de fissuration au soudage.' },
    ],
  },
  exam_questions: {
    questions: [
      'Décrivez les différents types de liaisons et reliez-les au comportement des métaux, des céramiques et des polymères.',
      'Calculez la masse volumique d’un métal à partir de sa structure cristalline.',
      'Expliquez l’influence du carbone et des éléments d’alliage sur les propriétés et la soudabilité des aciers.',
    ],
  },
  interview_questions: {
    questions: [
      ['Pourquoi l’acier S355J2 est-il préféré pour les ponts ?', "Parce qu'il allie une bonne résistance (355 MPa), une ténacité garantie à −20 °C (J2) contre la rupture fragile en hiver, et une soudabilité correcte (carbone équivalent limité)."],
      ['Pourquoi le béton est-il fragile en traction ?', "Parce que sa structure liée par des liaisons ioniques et covalentes rigides, avec de nombreux défauts (pores, microfissures), ne permet pas de déformation plastique : une fissure se propage dès qu'elle s'amorce."],
    ],
  },
  practical_case: {
    title: 'Cas pratique — Renforcement soudé d’une charpente ancienne',
    scenario: "On doit souder des renforts sur une charpente métallique de 1930. L'analyse d'un échantillon donne : C = 0,25 %, Mn = 0,60 %, P = 0,08 %, S = 0,06 %.",
    description: 'Évaluer la soudabilité et proposer une démarche.',
    resolutions: [
      "CE = 0{,}25 + \\frac{0{,}60}{6} = 0{,}35\\,\\% \\ (\\text{favorable})",
      "\\text{Mais P} = 0{,}08\\,\\% \\text{ et S} = 0{,}06\\,\\% \\gg 0{,}035\\,\\% \\ (\\text{aciers actuels}) \\Rightarrow \\text{risque de fragilité et de fissuration}",
      "\\text{Démarche : essais de soudabilité, ou renforcement par boulonnage}",
    ],
    conclusion: "Malgré un carbone équivalent correct, les teneurs élevées en phosphore et soufre rendent le soudage risqué : on privilégie un renforcement boulonné, ou des essais de qualification du soudage avant toute décision.",
  },
  summary: {
    content: `### La structure de la matière en 5 points
1. Liaisons ionique, covalente, métallique et faibles.
2. Métallique → ductilité ; ionique/covalente → dureté et fragilité.
3. $n = m/M$ ; $\\rho = nM/(N_A a^3)$.
4. Acier = fer + moins de 2,1 % de carbone ; traitements thermiques.
5. Soudabilité : $CE = C + Mn/6 + (Cr+Mo+V)/5 + (Ni+Cu)/15$.`,
  },
  key_points: {
    points: [
      'N_A = 6,022 × 10²³ /mol',
      'Fer : cubique centré, 7,87 g/cm³',
      'Acier : C < 2,1 % (construction 0,1 à 0,25 %)',
      'CE ≤ 0,40 à 0,45 % : bonne soudabilité',
      'Qualité J2 : 27 J à −20 °C',
    ],
  },
  self_assessment: {
    objectives: [
      'Je distingue les types de liaisons chimiques',
      'Je relie la liaison au comportement mécanique',
      'Je sais calculer une masse volumique à partir d’un réseau cristallin',
      'Je sais évaluer la soudabilité d’un acier',
      "J'ai réussi le quiz avec au moins 2 bonnes réponses sur 3",
    ],
  },
});
