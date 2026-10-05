// ── Lesson: Quais et appontements — Module 20 ────────────────────────────────
import { buildLesson } from './build_lesson.js';

export const lesson_ports_quais = buildLesson({
  moduleId: 20,
  slug: 'ports_quais',
  lessonIndex: 2,
  title: "Quais & Appontements : Quais-Poids, Rideaux de Palplanches, Ouvrages sur Pieux et Ducs d'Albe",
  subtitle: 'Module 20 — Ingénierie Maritime & Portuaire',
  level: 'Avancé',
  duration: '10h',
  diagramType: 'soil_profile',
  tags: ['Ports', 'Quais', 'Palplanches', 'Appontements', 'Ducs d’Albe', 'Tirant d’eau', 'Revanche sous quille'],
}, {
  definition: {
    title: 'Définition — Là où les navires accostent',
    fr: 'Ouvrages d’accostage (quais, appontements, ducs d’Albe)',
    en: 'Berthing structures (quay walls, jetties, dolphins)',
    metier: "Utilisée par les ingénieurs portuaires et maritimes, les autorités portuaires, les entreprises de travaux maritimes et les géotechniciens.",
    content: `Les **ouvrages d'accostage** permettent aux navires de s'amarrer et d'être chargés ou déchargés. On distingue :
- les **quais-poids** (caissons ou blocs en béton) qui résistent à la poussée des terres par leur masse ;
- les **quais en rideau de palplanches** métalliques, ancrés par des tirants vers un contre-rideau ;
- les **appontements** (ouvrages sur pieux) : une plateforme portée par des pieux, l'eau circulant dessous ;
- les **ducs d'Albe** : structures isolées (pieux ou groupes de pieux) servant à l'accostage ou à l'amarrage, notamment pour les terminaux pétroliers.

### Les actions particulières
Accostage du navire (énergie absorbée par les **défenses**), traction des **amarres** sur les bollards, grues de quai sur rails, charges d'exploitation (conteneurs : 30 à 60 kN/m²), marée, houle et poussée des terres avec **niveau d'eau résiduel** dans le remblai.

> 💡 La profondeur à quai doit couvrir le tirant d'eau du plus gros navire, avec une marge sous quille, à la plus basse mer.`,
  },
  importance: {
    content: `- **Économie** : un port ne vaut que par sa profondeur et sa longueur de quai ; elles déterminent les navires accueillis.
- **Durabilité** : l'eau de mer corrode l'acier (zone de marnage et d'éclaboussures) et attaque le béton.
- **Géotechnique** : les sols portuaires sont souvent mous (vases) : fondations et poussées sont critiques.
- **Évolution des navires** : les porte-conteneurs ont fortement grandi ; de nombreux quais doivent être approfondis.

> ⚠️ **À retenir** : approfondir le bassin devant un quai existant peut le déstabiliser (réduction de la butée en pied).`,
  },
  applications: {
    examples: [
      ['Terminal à conteneurs', 'Quai en caissons ou en paroi moulée, profondeur −16 à −18 m CM, portiques sur rails.'],
      ['Port de commerce ancien', 'Approfondissement d’un quai en palplanches par un rideau neuf en avant.'],
      ['Terminal pétrolier', 'Plateforme de chargement sur pieux et ducs d’Albe d’accostage et d’amarrage.'],
      ['Port de plaisance', 'Pontons flottants guidés par des pieux.'],
      ['Ro-Ro / ferries', 'Postes avec rampes et défenses adaptées aux accostages fréquents.'],
    ],
  },
  theory: {
    title: 'Théorie — Profondeur, efforts et stabilité',
    content: `### 1. Profondeur nécessaire à quai
$$D = T + UKC + \\Delta_{houle}$$
$T$ : tirant d'eau du navire de projet ; $UKC$ : revanche sous quille (≈ 10 % de $T$ dans un bassin abrité) ; $\\Delta_{houle}$ : marge pour les mouvements du navire. La cote est rapportée au **zéro des cartes** (niveau des plus basses mers).

### 2. Quai-poids : stabilité
Comme un mur de soutènement : vérifications au **glissement**, au **renversement** et à la **portance** de la fondation (souvent une assise en enrochements).
$$F_{gliss} = \\frac{\\mu \\, W'}{H}$$
$W'$ : poids déjaugé, $H$ : poussées horizontales (terres + eau résiduelle + amarrage).

### 3. Rideau de palplanches ancré
Le rideau est encastré dans le sol en pied et retenu en tête par des **tirants** ancrés sur un contre-rideau ou des plaques d'ancrage. Les efforts dépendent de la poussée active (côté terre), de la butée (côté mer, sous le fond), et de la différence de niveau d'eau (eau résiduelle dans le remblai à marée basse).

### 4. Ouvrage sur pieux
Pieux verticaux pour les charges verticales, pieux inclinés (ou chevalets) pour les efforts horizontaux d'accostage et d'amarrage ; les pieux traversent la tranche d'eau et sont exposés à la corrosion.

### 5. Corrosion de l'acier en mer
Ordre de grandeur sans protection : 0,1 à 0,25 mm/an par face dans la zone d'éclaboussures, la plus agressive ; protection par surépaisseur, revêtements et protection cathodique.`,
  },
  formulas: {
    title: 'Formules essentielles — Ouvrages d’accostage',
    formulas: [
      {
        name: 'Profondeur à quai',
        latex: "D = T + UKC + \\Delta_{houle}",
        description: 'Profondeur sous le zéro des cartes pour accueillir le navire de projet.',
        vars: [
          ['D', 'Profondeur nécessaire', 'm', 'Sous le zéro des cartes (CM).'],
          ['T', "Tirant d'eau du navire", 'm', 'Porte-conteneurs géant : ≈ 16 m.'],
          ['UKC', 'Revanche sous quille', 'm', '≈ 10 % de T en bassin abrité.'],
          ['\\Delta_{houle}', 'Marge de mouvements', 'm', '0 à 1 m selon l’agitation.'],
        ],
      },
      {
        name: 'Sécurité au glissement d’un quai-poids',
        latex: "F_{gliss} = \\frac{\\mu \\, W'}{H} \\ge 1{,}5",
        description: 'Valeur indicative en approche globale ; l’Eurocode 7 utilise des coefficients partiels.',
        vars: [
          ['\\mu', 'Coefficient de frottement', '-', 'Béton / enrochements ≈ 0,5 à 0,6.'],
          ["W'", 'Poids déjaugé du quai', 'kN/m', 'Sous l’eau : γ_béton − γ_eau.'],
          ['H', 'Poussées horizontales', 'kN/m', 'Terres, eau résiduelle, amarrage.'],
        ],
      },
      {
        name: 'Pression d’eau résiduelle',
        latex: "\\Delta u = \\gamma_w \\cdot \\Delta h_w",
        description: 'Différence de niveau entre la nappe du remblai et la mer à marée basse.',
        vars: [
          ['\\Delta u', "Surpression d'eau", 'kPa', 'Agit côté terre sur toute la hauteur sous le niveau bas.'],
          ['\\Delta h_w', 'Différence de niveau', 'm', 'Souvent ⅓ à ½ du marnage.'],
        ],
        rule: "Un remblai drainé (barbacanes, filtre) réduit l'eau résiduelle et soulage l'ouvrage.",
      },
      {
        name: 'Épaisseur sacrificielle contre la corrosion',
        latex: "e_{sacr} = v_{corr} \\cdot t_{vie}",
        description: 'Surépaisseur d’acier perdue sur la durée de vie, par face exposée.',
        vars: [
          ['e_{sacr}', 'Épaisseur perdue', 'mm', 'À déduire de la section pour le calcul en fin de vie.'],
          ['v_{corr}', 'Vitesse de corrosion', 'mm/an', '0,1 à 0,25 en zone d’éclaboussures.'],
          ['t_{vie}', 'Durée de vie', 'an', '50 à 100 ans pour un quai.'],
        ],
      },
    ],
  },
  stepbystep: {
    title: 'Calcul complet — Profondeur et stabilité d’un quai-poids',
    problem: "Un terminal doit recevoir un porte-conteneurs de tirant d'eau 14,5 m (bassin abrité, marge de mouvements 0,5 m). Le quai est en caissons béton de poids déjaugé W' = 1 500 kN/m sur une assise en enrochements (μ = 0,6). Les poussées horizontales totales valent 450 kN/m.",
    steps_demo: [
      { n: 1, text: "Revanche sous quille : UKC = 10 % × 14,5 = 1,45 m." },
      { n: 2, text: "Profondeur : D = 14,5 + 1,45 + 0,5 = 16,45 m → cote de dragage −16,5 m CM." },
      { n: 3, text: "Glissement : F = 0,6 × 1 500 / 450 = 2,0 ≥ 1,5 : vérifié." },
      { n: 4, text: "À vérifier ensuite : renversement, portance de l'assise, affouillement par les hélices en pied de quai." },
    ],
    result_latex: "D = 14{,}5 + 1{,}45 + 0{,}5 = 16{,}45\\ \\text{m} \\qquad F_{gliss} = \\frac{0{,}6 \\times 1\\,500}{450} = 2{,}0",
  },
  units: {
    table: [
      ['Cote marine', 'm CM (zéro des cartes)', 'ft (chart datum)', 'Altitude terrestre en m NGF : relation propre à chaque port'],
      ["Tirant d'eau", 'm', 'ft', '14,5 m ≈ 47,6 ft'],
      ['Charge de terre-plein', 'kN/m²', 'psf', 'Conteneurs : 30 à 60 kN/m²'],
      ['Capacité de bollard', 't, kN', 'kip', '100 t ≈ 981 kN'],
      ['Vitesse de corrosion', 'mm/an', 'mil/yr', '0,1 mm = 3,9 mil'],
    ],
    note: 'Ne confondez pas le zéro des cartes (marin) et le zéro NGF (terrestre) : l’écart vaut plusieurs mètres selon les ports.',
  },
  hypotheses: {
    items: [
      ['info', 'La marge de 10 % du tirant d’eau est un ordre de grandeur pour les bassins abrités ; les chenaux d’accès demandent davantage.'],
      ['info', 'Les poussées sur un quai incluent l’eau résiduelle, souvent déterminante en zone à fort marnage.'],
      ['warning', 'L’affouillement dû aux hélices et propulseurs peut déchausser le pied des quais : prévoir une protection.'],
      ['warning', 'Les sols vaseux portuaires imposent souvent des fondations profondes ou des substitutions.'],
      ['tip', 'Concevez dès l’origine un quai capable d’un approfondissement futur : les navires grandissent.'],
    ],
  },
  simple_examples: {
    examples: [
      {
        title: 'Exemple 1 : eau résiduelle',
        given: 'Marnage 6 m, eau résiduelle estimée à ⅓ du marnage',
        find: 'Surpression',
        solution_latex: "\\Delta u = 10 \\times \\frac{6}{3} = 20\\ \\text{kPa}",
        result: '20 kPa agissant sur la hauteur immergée du quai côté terre.',
      },
      {
        title: 'Exemple 2 : corrosion d’une palplanche',
        given: '0,15 mm/an en zone d’éclaboussures, durée de vie 50 ans',
        find: 'Épaisseur perdue',
        solution_latex: "e = 0{,}15 \\times 50 = 7{,}5\\ \\text{mm}",
        result: '7,5 mm perdus par face sans protection : à couvrir par surépaisseur ou protection.',
      },
      {
        title: 'Exemple 3 : poids déjaugé',
        given: 'Caisson béton plein de sable, poids volumique moyen 20 kN/m³, section immergée 75 m²',
        find: "W' par mètre",
        solution_latex: "W' = 75 \\times (20 - 10{,}05) = 746\\ \\text{kN/m}",
        result: 'L’eau de mer réduit fortement le poids utile.',
      },
    ],
  },
  real_examples: {
    title: 'Exemple réel — Approfondissement d’un quai pour les porte-conteneurs géants',
    examples: [
      {
        context: 'Quai à −13,5 m CM construit dans les années 1980',
        scenario: "L'arrivée de navires de 14,5 à 16 m de tirant d'eau impose −17 m. Draguer devant le quai existant aurait supprimé une partie de la butée de son pied : on a construit un nouveau rideau (paroi combinée tubes-palplanches) en avant du quai ancien.",
        decomposition_latex: "D_{requis} = 16 + 1{,}6 \\approx 17{,}6\\ \\text{m} \\Rightarrow \\text{nouvel écran avancé}",
        lesson: "L'approfondissement d'un quai est un projet de structure à part entière : stabilité du pied, ancrages et efforts d'accostage sont recalculés.",
      },
    ],
  },
  diagrams: {
    title: 'Schéma de principe — Coupe d’un quai en palplanches ancré',
    diagram_description: [
      'Terre-plein et charges d’exploitation (conteneurs, grues)',
      'Rideau de palplanches côté mer, poutre de couronnement et bollards',
      'Tirant d’ancrage vers un contre-rideau dans le remblai',
      'Poussée des terres et eau résiduelle côté terre',
      'Fiche du rideau sous le fond dragué (butée côté mer)',
      'Défenses d’accostage et protection anti-affouillement en pied',
    ],
  },
  mistakes: {
    items: [
      ['Oublier l’eau résiduelle', 'Poussée sous-estimée, rideau ou caisson instable', 'Prendre en compte la différence de niveau à marée basse.'],
      ['Confondre zéro des cartes et NGF', 'Profondeur erronée de plusieurs mètres', 'Vérifier la référence altimétrique de chaque plan.'],
      ['Négliger la corrosion de l’acier', 'Perte de section et ruine en fin de vie', 'Épaisseur sacrificielle, revêtements, protection cathodique.'],
    ],
  },
  tips: {
    tips: [
      'La zone d’éclaboussures et de marnage est la plus corrosive : concentrez-y la protection.',
      'Prévoyez des défenses dimensionnées pour le navire le plus gros et le plus petit (bas de défense).',
      'Les grues sur rails imposent des tolérances de tassement serrées : fondations soignées.',
      'Les levés bathymétriques réguliers détectent l’envasement et l’affouillement.',
    ],
  },
  norms: {
    norms: [
      ['ROM (Recommandations pour les ouvrages maritimes, Espagne)', 'Référence largement utilisée pour les ouvrages portuaires.'],
      ['PIANC (AIPCN) rapports WG 33 et 121', 'Défenses, conception des quais et profondeurs.'],
      ['EAU 2012 (recommandations allemandes)', 'Ouvrages portuaires et rideaux de palplanches.'],
      ['NF EN 1993-5', 'Eurocode 3 : pieux et palplanches.'],
      ['NF EN 1997-1', 'Eurocode 7 : soutènements et fondations.'],
    ],
  },
  exercises: {
    exercises: [
      {
        level: 1,
        text: 'Quelle profondeur faut-il pour un vraquier de 12 m de tirant d’eau (UKC 10 %, marge 0,3 m) ?',
        hint: 'D = T + UKC + marge.',
        answer_latex: "D = 12 + 1{,}2 + 0{,}3 = 13{,}5\\ \\text{m}",
        answer_text: '−13,5 m CM.',
      },
      {
        level: 2,
        text: 'Un caisson de poids déjaugé 1 200 kN/m reçoit 520 kN/m de poussées (μ = 0,55). Vérifier le glissement.',
        hint: 'F = μW′/H.',
        answer_latex: "F = \\frac{0{,}55 \\times 1\\,200}{520} = 1{,}27 < 1{,}5",
        answer_text: 'Non vérifié : lester le caisson ou élargir la base.',
      },
      {
        level: 3,
        text: 'Une palplanche de 12 mm d’épaisseur se corrode à 0,2 mm/an sur une face. Au bout de combien d’années a-t-elle perdu 30 % ?',
        hint: '30 % de 12 mm = 3,6 mm.',
        answer_latex: "t = \\frac{3{,}6}{0{,}2} = 18\\ \\text{ans}",
        answer_text: '18 ans sans protection.',
      },
    ],
  },
  quiz: {
    title: 'Quiz — Quais',
    questions: [
      { q: 'À quel niveau se réfère la profondeur d’un port ?', options: ['Au niveau moyen de la mer', 'Au zéro des cartes (plus basses mers)', 'Au NGF'], correct: 1, explain: 'Les profondeurs marines sont données sous le zéro des cartes.' },
      { q: 'Qu’est-ce qu’un duc d’Albe ?', options: ['Un type de grue', 'Une structure isolée d’accostage ou d’amarrage', 'Un navire de dragage'], correct: 1, explain: 'Groupe de pieux ou pieu isolé recevant l’accostage ou les amarres.' },
      { q: 'Quelle zone est la plus corrosive pour l’acier en mer ?', options: ['La zone enterrée', 'La zone d’éclaboussures et de marnage', 'La zone immergée profonde'], correct: 1, explain: 'Alternance humide-sec et oxygène abondant.' },
    ],
  },
  exam_questions: {
    questions: [
      'Comparez quais-poids, rideaux de palplanches et ouvrages sur pieux.',
      'Déterminez la profondeur à quai pour un navire de projet et justifiez les marges.',
      'Présentez les actions sur un quai et la vérification de sa stabilité.',
    ],
  },
  interview_questions: {
    questions: [
      ['Comment approfondir un quai existant ?', "Vérifier d'abord la fiche et la butée du rideau ou l'assise du caisson ; si la marge est insuffisante, construire un écran neuf en avant, renforcer le pied (enrochements, tirants supplémentaires) ou reconstruire."],
      ['Pourquoi les appontements sur pieux sont-ils utilisés pour les terminaux pétroliers ?', "Parce qu'ils permettent d'atteindre les grandes profondeurs loin du rivage sans remblai, laissent passer la houle et les courants, et reçoivent l'accostage sur des ducs d'Albe indépendants."],
    ],
  },
  practical_case: {
    title: 'Cas pratique — Choix d’un ouvrage pour un nouveau poste',
    scenario: 'Nouveau poste à −15 m CM, sol : 8 m de vase sur sables denses, marnage 5 m, houle résiduelle faible.',
    description: 'Comparer quai-poids et rideau ancré, et choisir.',
    resolutions: [
      "\\text{Quai-poids : vase incompatible} \\Rightarrow \\text{dragage et substitution de 8 m sous l'assise}",
      "\\text{Rideau ancré (paroi combinée) fiché dans les sables denses : pas de substitution}",
      "\\text{Eau résiduelle : } \\Delta u \\approx 10 \\times \\frac{5}{3} = 17\\ \\text{kPa à reprendre}",
    ],
    conclusion: 'Le rideau ancré fiché dans les sables évite une substitution coûteuse de la vase ; il est retenu, avec drainage du remblai et protection contre la corrosion.',
  },
  summary: {
    content: `### Les quais en 5 points
1. Quais-poids, rideaux de palplanches, ouvrages sur pieux, ducs d'Albe.
2. Profondeur : $D = T + UKC + \\Delta_{houle}$ sous le zéro des cartes.
3. Stabilité : glissement $\\mu W'/H$, renversement, portance, eau résiduelle.
4. Corrosion marine : $e = v_{corr} \\cdot t_{vie}$.
5. Prévoir l'approfondissement futur.`,
  },
  key_points: {
    points: [
      'D = T + UKC + marge',
      'UKC ≈ 10 % de T en bassin abrité',
      'Eau résiduelle : Δu = γ_w Δh',
      'Corrosion en zone d’éclaboussures : 0,1 à 0,25 mm/an',
      'Zéro des cartes ≠ NGF',
    ],
  },
  self_assessment: {
    objectives: [
      'Je connais les types d’ouvrages d’accostage',
      'Je sais calculer la profondeur nécessaire à quai',
      'Je sais vérifier un quai-poids au glissement',
      'Je connais les effets de l’eau résiduelle et de la corrosion',
      "J'ai réussi le quiz avec au moins 2 bonnes réponses sur 3",
    ],
  },
});
