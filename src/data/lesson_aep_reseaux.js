// ── Lesson: Réseaux d'alimentation en eau potable — Module 14 ────────────────
import { buildLesson } from './build_lesson.js';

export const lesson_aep_reseaux = buildLesson({
  moduleId: 14,
  slug: 'aep_reseaux',
  lessonIndex: 2,
  title: "Réseaux d'Alimentation en Eau Potable : Besoins, Réservoirs, Dimensionnement & Maillage",
  subtitle: 'Module 14 — Hydraulique urbaine & ouvrages hydrauliques',
  level: 'Intermédiaire',
  duration: '10h',
  tags: ['AEP', 'Eau potable', 'Réservoir', 'Défense incendie', 'Réseau maillé', 'Hardy Cross', 'Pression'],
}, {
  definition: {
    title: "Définition — De la ressource au robinet",
    fr: "Réseau d'alimentation en eau potable (AEP)",
    en: 'Water distribution network',
    metier: "Utilisée par les ingénieurs VRD et hydrauliciens, les syndicats des eaux, les exploitants et les bureaux d'études de schémas directeurs.",
    content: `Un système d'**alimentation en eau potable** comprend : le **captage** (forage, prise en rivière), le **traitement**, l'**adduction** (conduite d'amenée), le **stockage** en réservoir, puis la **distribution** jusqu'aux abonnés.

### Deux types de réseaux de distribution
- **Ramifié** (en arbre) : économique, mais une casse prive d'eau tout l'aval et l'eau stagne en bout de réseau.
- **Maillé** (en boucles) : chaque point est alimenté par plusieurs chemins ; meilleure sécurité et meilleure qualité de l'eau, calcul plus complexe.

### Les exigences de service
- Pression au robinet suffisante (de l'ordre de 2 à 4 bar en tête de branchement) sans dépasser 6 à 8 bar.
- Vitesses de 0,5 à 1,5 m/s : ni dépôts ni coups de bélier.
- Débit et réserve pour la **défense incendie** (en France, typiquement 60 m³/h pendant 2 heures par poteau).

> 💡 Le réservoir surélevé (château d'eau) assure à la fois le stockage, la régulation des pointes et la mise en pression par gravité.`,
  },
  importance: {
    content: `- **Santé** : un réseau mal conçu (stagnation, pressions négatives) favorise les contaminations.
- **Service public** : continuité 24 h/24 même en cas de casse ou de pointe estivale.
- **Économie** : les fuites représentent en moyenne 20 % des volumes produits en France ; le dimensionnement et l'entretien comptent.
- **Sécurité incendie** : les pompiers dépendent des poteaux et du réservoir.

> ⚠️ **À retenir** : la conduite se dimensionne sur le débit de pointe horaire de l'horizon de projet (20 à 30 ans), le réservoir sur la pointe journalière et la réserve incendie.`,
  },
  applications: {
    examples: [
      ['Lotissement', 'Extension maillée en PVC ou fonte depuis la conduite publique, poteaux incendie tous les 150 à 200 m.'],
      ['Commune rurale', 'Château d’eau de 300 m³ alimenté par un forage et une station de pompage.'],
      ['Ville moyenne', 'Schéma directeur : modélisation du réseau (EPANET), sectorisation et recherche de fuites.'],
      ['Zone industrielle', 'Réseau dimensionné pour des débits de process et une défense incendie renforcée.'],
      ['Renouvellement', 'Remplacement des conduites anciennes fuyardes (fonte grise, amiante-ciment).'],
    ],
  },
  theory: {
    title: 'Théorie — Débits de projet, réservoirs et calcul des réseaux',
    content: `### 1. Débits
- Débit moyen journalier : $Q_{moy,j} = P \\cdot d$ (population × dotation, plus les gros consommateurs).
- Jour de pointe : $Q_{j,max} = k_j \\cdot Q_{moy,j}$ ($k_j$ = 1,2 à 2).
- Heure de pointe : $Q_{h,max} = k_h \\cdot Q_{j,max} / 24$ ($k_h$ = 1,5 à 3, d'autant plus grand que la commune est petite).

### 2. Capacité du réservoir
Volume de régulation (souvent 25 à 50 % de $Q_{j,max}$ selon les modes d'alimentation) + **réserve incendie** (120 m³ pour 60 m³/h pendant 2 h) + éventuelle réserve de sécurité.

### 3. Diamètres
Choix pour une vitesse de 0,5 à 1,5 m/s au débit de pointe : $D = \\sqrt{4 Q / (\\pi v)}$, puis vérification de la pression avec les pertes de charge (Darcy-Weisbach, Colebrook ou formules pratiques).

### 4. Réseau maillé : méthode de Hardy Cross
Les pertes de charge s'écrivent $h = R Q^2$. On part d'une répartition des débits respectant les nœuds, puis on corrige chaque maille par :
$$\\Delta Q = -\\frac{\\sum R \\, Q |Q|}{2 \\sum R |Q|}$$
jusqu'à ce que la somme algébrique des pertes de charge de chaque maille soit nulle.

### 5. Conduites en parallèle
Deux conduites entre les mêmes nœuds ont la même perte de charge : $R_1 Q_1^2 = R_2 Q_2^2$, d'où $Q_1/Q_2 = \\sqrt{R_2/R_1}$.`,
  },
  formulas: {
    title: 'Formules essentielles — Réseaux AEP',
    formulas: [
      {
        name: 'Débit de pointe horaire',
        latex: "Q_{h,max} = k_h \\cdot k_j \\cdot \\frac{P \\cdot d}{86\\,400}",
        description: 'Débit de dimensionnement des conduites de distribution (en L/s si d en L/hab/j).',
        vars: [
          ['Q_{h,max}', 'Débit de pointe horaire', 'L/s', 'Base du calcul des diamètres.'],
          ['k_h', 'Coefficient de pointe horaire', '-', '1,5 à 3.'],
          ['k_j', 'Coefficient de pointe journalière', '-', '1,2 à 2.'],
          ['P', 'Population', 'hab', 'À l’horizon du projet.'],
          ['d', 'Dotation', 'L/hab/j', '120 à 200.'],
        ],
      },
      {
        name: 'Capacité du réservoir',
        latex: "V = \\alpha \\cdot Q_{j,max} + V_{incendie}",
        description: 'Volume utile du réservoir de distribution.',
        vars: [
          ['V', 'Volume du réservoir', 'm³', 'Volume utile.'],
          ['\\alpha', 'Fraction de régulation', '-', '0,25 à 0,5 (davantage si l’adduction ne fonctionne pas 24 h/24).'],
          ['V_{incendie}', 'Réserve incendie', 'm³', '120 m³ (60 m³/h pendant 2 h) en règle générale.'],
        ],
      },
      {
        name: 'Diamètre de la conduite',
        latex: "D = \\sqrt{\\frac{4 \\, Q}{\\pi \\, v}}",
        description: 'Diamètre intérieur pour une vitesse cible.',
        vars: [
          ['D', 'Diamètre intérieur', 'm', 'Arrondir au diamètre commercial (DN).'],
          ['v', 'Vitesse cible', 'm/s', '0,5 à 1,5 m/s.'],
        ],
      },
      {
        name: 'Correction de Hardy Cross',
        latex: "\\Delta Q = -\\frac{\\sum R \\, Q |Q|}{2 \\sum R |Q|}",
        description: 'Correction de débit à appliquer à une maille (pertes h = RQ²).',
        vars: [
          ['\\Delta Q', 'Correction de débit', 'L/s', 'Ajoutée à tous les tronçons de la maille (sens horaire positif).'],
          ['R', 'Résistance du tronçon', 's²/m⁵', 'Fonction de λ, L et D.'],
        ],
        rule: "Deux à quatre itérations suffisent en général pour un réseau de quelques mailles.",
      },
      {
        name: 'Répartition dans deux conduites en parallèle',
        latex: "\\frac{Q_1}{Q_2} = \\sqrt{\\frac{R_2}{R_1}}",
        description: 'Même perte de charge dans les deux conduites.',
        vars: [
          ['Q_1, Q_2', 'Débits des conduites', 'L/s', 'Leur somme est le débit total.'],
          ['R_1, R_2', 'Résistances', 's²/m⁵', 'Plus R est grand, moins la conduite transite.'],
        ],
      },
    ],
  },
  stepbystep: {
    title: 'Calcul complet — Alimentation d’un village de 2 000 habitants',
    problem: "Village de 2 000 habitants, dotation 150 L/hab/j, k_j = 1,5, k_h = 2. Calculer les débits de projet, le volume du réservoir (α = 0,5, réserve incendie 120 m³) et le diamètre de la conduite de distribution principale (v ≈ 1 m/s).",
    steps_demo: [
      { n: 1, text: "Débit moyen : 2 000 × 150 = 300 m³/j, soit 3,47 L/s." },
      { n: 2, text: "Jour de pointe : 1,5 × 300 = 450 m³/j (5,21 L/s)." },
      { n: 3, text: "Heure de pointe : 2 × 5,21 = 10,4 L/s." },
      { n: 4, text: "Réservoir : 0,5 × 450 + 120 = 345 m³ → 350 m³." },
      { n: 5, text: "Diamètre : D = √(4 × 0,0104 / (π × 1)) = 0,115 m → DN 125 (v ≈ 0,85 m/s)." },
      { n: 6, text: "Vérification incendie : 10,4 + 16,7 L/s (60 m³/h) = 27,1 L/s → v = 2,2 m/s en DN 125 : acceptable en situation exceptionnelle, à vérifier en pression." },
    ],
    result_latex: "Q_{h,max} = 2 \\times 1{,}5 \\times \\frac{300\\,000}{86\\,400} = 10{,}4\\ \\text{L/s} \\qquad V = 0{,}5 \\times 450 + 120 = 345\\ \\text{m}^3",
  },
  units: {
    table: [
      ['Débit', 'L/s, m³/h, m³/j', 'gpm, MGD', '1 L/s = 3,6 m³/h = 86,4 m³/j'],
      ['Pression', 'bar, m CE', 'psi', '1 bar ≈ 10,2 m CE = 14,5 psi'],
      ['Dotation', 'L/hab/j', 'gal/cap/day', '150 L ≈ 40 gal (US)'],
      ['Volume', 'm³', 'gal', '1 m³ = 264 gal (US)'],
      ['Diamètre', 'DN (mm)', 'in', 'DN 100, 125, 150, 200…'],
    ],
    note: "Le DN (diamètre nominal) n'est pas toujours égal au diamètre intérieur : il dépend du matériau (fonte, PVC, PEHD) et de la classe de pression.",
  },
  hypotheses: {
    items: [
      ['info', 'Les coefficients de pointe sont des valeurs usuelles ; les données de télérelève ou de sectorisation permettent de les ajuster.'],
      ['info', 'La méthode de Hardy Cross suppose une loi de perte de charge h = RQ^n (n = 2 en régime turbulent rugueux).'],
      ['warning', 'Un réseau surdimensionné pour l’incendie peut avoir des vitesses trop faibles en usage normal : risques de dégradation de la qualité.'],
      ['warning', 'Au-delà de 6 à 8 bar, des réducteurs de pression ou une sectorisation (étages de pression) sont nécessaires.'],
      ['tip', 'Modélisez le réseau (EPANET) et calez-le sur des mesures de pression et de débit réelles.'],
    ],
  },
  simple_examples: {
    examples: [
      {
        title: 'Exemple 1 : conduites en parallèle',
        given: 'Débit total 40 L/s, R₁ = 4 R₂',
        find: 'Q₁ et Q₂',
        solution_latex: "\\frac{Q_1}{Q_2} = \\sqrt{\\frac{1}{4}} = 0{,}5 \\Rightarrow Q_1 = 13{,}3\\ \\text{L/s}, \\ Q_2 = 26{,}7\\ \\text{L/s}",
        result: 'La conduite la moins résistante transite deux fois plus.',
      },
      {
        title: 'Exemple 2 : pression au point haut',
        given: 'Réservoir à 180 m NGF, point de livraison à 142 m NGF, pertes 9 m',
        find: 'La pression disponible',
        solution_latex: "\\frac{p}{\\rho g} = 180 - 142 - 9 = 29\\ \\text{m} \\approx 2{,}8\\ \\text{bar}",
        result: '≈ 2,8 bar.',
      },
      {
        title: 'Exemple 3 : réserve incendie',
        given: '60 m³/h pendant 2 h',
        find: 'Volume à réserver',
        solution_latex: "V_{incendie} = 60 \\times 2 = 120\\ \\text{m}^3",
        result: '120 m³ réservés en fond de réservoir.',
      },
    ],
  },
  real_examples: {
    title: 'Exemple réel — Sectorisation et réduction des fuites',
    examples: [
      {
        context: 'Ville de 40 000 habitants avec un rendement de réseau de 70 %',
        scenario: "Le réseau est découpé en secteurs équipés de débitmètres. L'analyse des débits de nuit (consommation minimale) localise les secteurs fuyards ; des campagnes acoustiques identifient les fuites, et la pression est réduite la nuit.",
        decomposition_latex: "\\text{Rendement} = \\frac{V_{consommé}}{V_{produit}} : 70\\,\\% \\rightarrow 85\\,\\% \\Rightarrow \\text{économie de plusieurs centaines de milliers de m}^3/\\text{an}",
        lesson: "La gestion patrimoniale (mesure, sectorisation, régulation de pression, renouvellement ciblé) est aussi importante que le dimensionnement initial.",
      },
    ],
  },
  diagrams: {
    title: 'Schéma de principe — Système d’alimentation en eau potable',
    diagram_description: [
      'Ressource : forage, source ou prise en rivière',
      'Traitement : potabilisation puis désinfection',
      'Adduction : conduite et station de pompage vers le réservoir',
      'Stockage : réservoir surélevé (régulation + réserve incendie)',
      'Distribution : réseau maillé, vannes de sectionnement, poteaux incendie',
      'Branchements : compteurs et clapets anti-retour chez les abonnés',
    ],
  },
  mistakes: {
    items: [
      ['Dimensionner sur le débit moyen', 'Pression insuffisante aux heures de pointe', 'Utiliser Q_h,max à l’horizon du projet.'],
      ['Oublier la réserve incendie dans le réservoir', 'Pas d’eau pour les secours lors d’un incendie en période de pointe', 'Ajouter 120 m³ minimum non utilisés en distribution courante.'],
      ['Réseaux en impasse longs', 'Eau stagnante, perte de chlore résiduel', 'Mailler le réseau ou prévoir des purges.'],
    ],
  },
  tips: {
    tips: [
      'Placez des vannes de sectionnement pour isoler un tronçon sans couper tout un quartier.',
      'Les ventouses aux points hauts et les vidanges aux points bas sont indispensables.',
      'Un rendement de réseau inférieur à 85 % (urbain) justifie un plan d’actions contre les fuites.',
      'Conservez une pression minimale en tout point pour éviter l’entrée de polluants par les fuites.',
    ],
  },
  norms: {
    norms: [
      ['NF EN 805', 'Réseaux d’alimentation en eau à l’extérieur des bâtiments.'],
      ['Fascicule 71 du CCTG', 'Fourniture et pose de canalisations d’eau, accessoires et branchements.'],
      ['Référentiel national DECI (arrêté du 15 décembre 2015)', 'Défense extérieure contre l’incendie.'],
      ['Décret du 27 janvier 2012', 'Descriptif détaillé des réseaux et plan d’actions contre les fuites.'],
    ],
  },
  exercises: {
    exercises: [
      {
        level: 1,
        text: 'Calculer le débit de pointe horaire d’une commune de 5 000 habitants (d = 140 L/hab/j, k_j = 1,4, k_h = 1,8).',
        hint: 'Q = k_h k_j P d / 86 400.',
        answer_latex: "Q_{h,max} = 1{,}8 \\times 1{,}4 \\times \\frac{5\\,000 \\times 140}{86\\,400} = 20{,}4\\ \\text{L/s}",
        answer_text: '≈ 20,4 L/s.',
      },
      {
        level: 2,
        text: 'Quel DN choisir pour 20,4 L/s à environ 1 m/s ?',
        hint: 'D = √(4Q/πv).',
        answer_latex: "D = \\sqrt{\\frac{4 \\times 0{,}0204}{\\pi \\times 1}} = 0{,}161\\ \\text{m} \\Rightarrow DN\\ 150 \\ (v = 1{,}15\\ \\text{m/s})",
        answer_text: 'DN 150.',
      },
      {
        level: 3,
        text: 'Calculer le volume de réservoir de cette commune (α = 0,4, réserve incendie 120 m³).',
        hint: 'Q_j,max = 1,4 × 5 000 × 0,140.',
        answer_latex: "Q_{j,max} = 980\\ \\text{m}^3/\\text{j} \\qquad V = 0{,}4 \\times 980 + 120 = 512\\ \\text{m}^3",
        answer_text: 'Réservoir de 500 à 550 m³ (retenir 550 m³).',
      },
    ],
  },
  quiz: {
    title: 'Quiz — Réseaux AEP',
    questions: [
      { q: 'Quel est l’avantage principal d’un réseau maillé ?', options: ['Il est moins cher', 'Chaque point est alimenté par plusieurs chemins', 'Il ne nécessite pas de réservoir'], correct: 1, explain: 'Sécurité d’alimentation et meilleure circulation de l’eau.' },
      { q: 'Quelle réserve incendie prévoit-on classiquement ?', options: ['30 m³', '120 m³', '1 000 m³'], correct: 1, explain: '60 m³/h pendant 2 h = 120 m³.' },
      { q: 'Sur quel débit dimensionne-t-on les conduites de distribution ?', options: ['Débit moyen', 'Débit de pointe horaire', 'Débit de nuit'], correct: 1, explain: 'La pression doit être assurée à l’heure la plus chargée.' },
    ],
  },
  exam_questions: {
    questions: [
      'Décrivez les composantes d’un système AEP et le rôle du réservoir.',
      'Calculez les débits de projet et le volume du réservoir d’une commune.',
      'Appliquez la méthode de Hardy Cross à un réseau à une maille.',
    ],
  },
  interview_questions: {
    questions: [
      ['Comment améliorer le rendement d’un réseau ?', 'Sectoriser et mesurer les débits de nuit, rechercher et réparer les fuites (écoute acoustique, corrélation), réguler la pression, renouveler les conduites les plus fuyardes et remplacer les compteurs défaillants.'],
      ['Pourquoi éviter les vitesses trop faibles ?', 'Elles favorisent les dépôts, la stagnation, la perte du chlore résiduel et la dégradation de la qualité de l’eau.'],
    ],
  },
  practical_case: {
    title: 'Cas pratique — Extension pour un lotissement de 80 logements',
    scenario: '80 logements de 2,5 habitants, dotation 150 L/hab/j, k_j = 1,5, k_h = 3 (petit réseau). Le lotissement est raccordé sur une conduite DN 150 où la pression est de 3,5 bar ; un poteau incendie (60 m³/h) est exigé.',
    description: 'Dimensionner la conduite interne du lotissement.',
    resolutions: [
      "P = 200\\ \\text{hab} \\quad Q_{h,max} = 3 \\times 1{,}5 \\times \\frac{200 \\times 150}{86\\,400} = 1{,}56\\ \\text{L/s}",
      "\\text{Incendie : } 60\\ \\text{m}^3/\\text{h} = 16{,}7\\ \\text{L/s} \\gg 1{,}56\\ \\text{L/s} \\Rightarrow \\text{le poteau dimensionne la conduite}",
      "DN\\ 100 : v = \\frac{0{,}0167 + 0{,}0016}{\\pi \\times 0{,}05^2} = 2{,}3\\ \\text{m/s (situation incendie)}",
    ],
    conclusion: "La défense incendie impose une conduite DN 100 à DN 150 en fonte ou PVC ; en usage courant les vitesses seront faibles, d'où l'intérêt de mailler le réseau du lotissement pour faire circuler l'eau.",
  },
  summary: {
    content: `### Les réseaux AEP en 5 points
1. Chaîne : ressource → traitement → adduction → réservoir → distribution.
2. $Q_{h,max} = k_h k_j P d / 86\\,400$.
3. Réservoir : régulation + **réserve incendie** (120 m³).
4. Diamètres pour 0,5 à 1,5 m/s, pression 2 à 6 bar.
5. Réseau maillé calculé par **Hardy Cross** ou logiciel.`,
  },
  key_points: {
    points: [
      '1 L/s = 86,4 m³/j',
      'Réserve incendie : 60 m³/h × 2 h = 120 m³',
      'Vitesses : 0,5 à 1,5 m/s',
      'ΔQ = −ΣRQ|Q| / (2ΣR|Q|)',
      'Q₁/Q₂ = √(R₂/R₁) en parallèle',
    ],
  },
  self_assessment: {
    objectives: [
      'Je sais calculer les débits de projet d’une commune',
      'Je sais dimensionner un réservoir de distribution',
      'Je sais choisir un diamètre de conduite',
      'Je connais le principe de la méthode de Hardy Cross',
      "J'ai réussi le quiz avec au moins 2 bonnes réponses sur 3",
    ],
  },
});
