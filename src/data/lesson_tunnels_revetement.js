// ── Lesson: Revêtement définitif et étanchéité des tunnels — Module 17 ────────
import { buildLesson } from './build_lesson.js';

export const lesson_tunnels_revetement = buildLesson({
  moduleId: 17,
  slug: 'tunnels_revetement',
  lessonIndex: 2,
  title: "Revêtement Définitif & Étanchéité des Tunnels : Béton Coffré, Voussoirs et Gestion des Eaux",
  subtitle: 'Module 17 — Ingénierie des Tunnels',
  level: 'Avancé',
  duration: '10h',
  diagramType: 'soil_profile',
  tags: ['Tunnels', 'Revêtement', 'Voussoirs', 'Étanchéité', 'Drainage', 'Pression d’eau', 'Tunnelier'],
}, {
  definition: {
    title: 'Définition — La peau définitive du tunnel',
    fr: 'Revêtement définitif et étanchéité des ouvrages souterrains',
    en: 'Tunnel final lining and waterproofing',
    metier: "Utilisée par les ingénieurs tunnels, les bureaux d'études géotechniques et structures, les entreprises de travaux souterrains et les exploitants.",
    content: `Après l'excavation et le **soutènement provisoire** (béton projeté, boulons, cintres), on réalise un **revêtement définitif** qui assure pour 100 ans :
- la **stabilité** à long terme (reprise des poussées du terrain et de l'eau) ;
- l'**étanchéité** ou le **drainage** des venues d'eau ;
- la protection au **feu** et la fixation des équipements ;
- une surface lisse, éclairable et facile à entretenir.

### Deux grandes techniques
- **Revêtement coulé en place** derrière un coffrage-outil mobile (tunnels creusés à l'explosif ou à la machine à attaque ponctuelle), souvent séparé du soutènement par une géomembrane.
- **Voussoirs préfabriqués** en béton armé, posés à l'arrière d'un **tunnelier** pour former des anneaux ; ils constituent à la fois le soutènement et le revêtement.

### Drainé ou non drainé ?
- **Tunnel drainé** : l'eau est captée par un drainage et évacuée ; le revêtement ne reprend pas la pression d'eau.
- **Tunnel étanche (non drainé)** : le revêtement reprend toute la pression d'eau ; indispensable quand on ne peut pas rabattre la nappe.

> 💡 La plupart des pathologies des tunnels anciens (fuites, glaçons, dégradation du béton) viennent de l'eau.`,
  },
  importance: {
    content: `- **Durabilité** : un tunnel ne se reconstruit pas ; son revêtement doit durer un siècle.
- **Sécurité** : chutes de béton, glaçons en hiver et défauts d'étanchéité menacent les usagers.
- **Environnement** : drainer un tunnel sous une nappe peut assécher sources et puits.
- **Coût** : un tunnel étanche sous forte charge d'eau exige un revêtement bien plus épais.

> ⚠️ **À retenir** : le choix « drainé ou étanche » se fait dès la conception ; il conditionne l'épaisseur du revêtement et l'impact sur la nappe.`,
  },
  applications: {
    examples: [
      ['Tunnel routier alpin', 'Soutènement en béton projeté, géomembrane PVC, revêtement en béton coffré de 30 à 40 cm.'],
      ['Métro urbain au tunnelier', 'Anneaux de 6 à 7 voussoirs avec joints d’étanchéité en élastomère et injection de bourrage.'],
      ['Tunnel sous-fluvial', 'Revêtement non drainé dimensionné pour la pleine pression d’eau.'],
      ['Réhabilitation d’un tunnel ferroviaire', 'Traitement des venues d’eau et renforcement de la voûte maçonnée.'],
      ['Galerie hydraulique', 'Revêtement résistant à la pression interne de l’eau.'],
    ],
  },
  theory: {
    title: 'Théorie — Efforts dans le revêtement et pression d’eau',
    content: `### 1. Anneau sous pression radiale uniforme
Un anneau de rayon moyen $R$ soumis à une pression uniforme $p$ ne travaille qu'en compression :
$$N = p \\cdot R \\qquad \\sigma = \\frac{N}{e}$$
($N$ par mètre de longueur de tunnel, $e$ épaisseur du revêtement).

### 2. Pression d'eau sur un tunnel étanche
$$p_w = \\gamma_w \\cdot h_w$$
$h_w$ : charge d'eau au-dessus du tunnel. Elle s'ajoute à la poussée du terrain.

### 3. Ovalisation
Si la pression verticale diffère de la pression horizontale, l'anneau s'ovalise : des moments de flexion apparaissent, maximaux en clé, en radier et aux reins. Les calculs utilisent des modèles anneau-ressorts (le terrain retient l'anneau) ou des modèles numériques.

### 4. Voussoirs
Un anneau de voussoirs est segmenté : les joints longitudinaux réduisent la rigidité en flexion. Épaisseur usuelle : environ $D/20$ à $D/25$ pour les tunneliers. Les voussoirs sont aussi dimensionnés pour la fabrication, le stockage, la manutention et la poussée des vérins du tunnelier.

### 5. Étanchéité et drainage
Géomembrane (PVC ou polyoléfine) avec géotextile de protection, joints waterstop entre plots de bétonnage, drains en pied de voûte vers un collecteur, ou joints élastomères sur les voussoirs.`,
  },
  formulas: {
    title: 'Formules essentielles — Revêtements de tunnels',
    formulas: [
      {
        name: 'Effort normal dans un anneau sous pression uniforme',
        latex: "N = p \\cdot R \\qquad \\sigma_c = \\frac{N}{e}",
        description: 'Formule « de la chaudière » appliquée à un anneau en compression.',
        vars: [
          ['N', 'Effort normal', 'kN/m', 'Par mètre de longueur de tunnel.'],
          ['p', 'Pression radiale', 'kPa', 'Terrain + eau (si non drainé).'],
          ['R', 'Rayon moyen', 'm', 'Rayon de la fibre moyenne du revêtement.'],
          ['\\sigma_c', 'Contrainte de compression', 'MPa', 'À comparer à la résistance du béton.'],
          ['e', 'Épaisseur', 'm', 'Épaisseur du revêtement.'],
        ],
        rule: "Un anneau soumis à une pression uniforme ne fléchit pas : c'est pourquoi les tunnels sont circulaires.",
      },
      {
        name: "Pression d'eau",
        latex: "p_w = \\gamma_w \\cdot h_w",
        description: 'Pression sur un revêtement étanche.',
        vars: [
          ['p_w', "Pression d'eau", 'kPa', '≈ 10 kPa par mètre de charge.'],
          ['\\gamma_w', "Poids volumique de l'eau", 'kN/m³', '9,81 kN/m³.'],
          ['h_w', "Charge d'eau", 'm', 'Hauteur de la nappe au-dessus du point considéré.'],
        ],
      },
      {
        name: 'Débit de drainage linéique (ordre de grandeur)',
        latex: "q = k \\cdot i \\cdot A",
        description: 'Darcy : débit d’eau capté par le drainage.',
        vars: [
          ['q', 'Débit', 'm³/s', 'Par tronçon de tunnel.'],
          ['k', 'Perméabilité du massif', 'm/s', '10⁻⁹ (roche saine) à 10⁻⁴ (terrain fracturé).'],
          ['i', 'Gradient hydraulique', '-', 'Fonction de la charge et de la distance.'],
          ['A', "Surface d'écoulement", 'm²', 'Surface traversée.'],
        ],
      },
      {
        name: 'Épaisseur de voussoirs (prédimensionnement)',
        latex: "e \\approx \\frac{D}{20} \\text{ à } \\frac{D}{25}",
        description: 'Ordre de grandeur pour les tunnels au tunnelier.',
        vars: [
          ['D', 'Diamètre intérieur', 'm', 'Métro 5 à 7 m ; autoroute 10 à 15 m.'],
        ],
      },
    ],
  },
  stepbystep: {
    title: 'Calcul complet — Revêtement d’un tunnel sous nappe',
    problem: "Tunnel circulaire de rayon moyen R = 5,0 m, revêtement de 0,35 m en béton C35/45 (f_cd = 23,3 MPa). Pression du terrain (moyenne, supposée uniforme) : 300 kPa. Nappe à 30 m au-dessus de la clé. Comparer la contrainte de compression pour un tunnel drainé et un tunnel étanche.",
    steps_demo: [
      { n: 1, text: "Tunnel drainé : N = 300 × 5,0 = 1 500 kN/m ; σ = 1 500 kN/m / 0,35 m = 4 290 kPa = 4,3 MPa." },
      { n: 2, text: "Pression d'eau (tunnel étanche) : p_w = 9,81 × 30 = 294 kPa (≈ 2,9 bar)." },
      { n: 3, text: "Tunnel étanche : N = (300 + 294) × 5,0 = 2 970 kN/m ; σ = 2 970 kN/m / 0,35 m = 8 490 kPa = 8,5 MPa." },
      { n: 4, text: "Comparaison : la contrainte double mais reste inférieure à f_cd = 23,3 MPa pour une pression uniforme." },
      { n: 5, text: "En réalité, l'ovalisation (pressions non uniformes) ajoute de la flexion : c'est elle qui fixe souvent l'épaisseur et le ferraillage." },
    ],
    result_latex: "\\sigma_{drainé} = \\frac{300 \\times 5{,}0}{0{,}35} = 4{,}3\\ \\text{MPa} \\qquad \\sigma_{étanche} = \\frac{(300 + 294) \\times 5{,}0}{0{,}35} = 8{,}5\\ \\text{MPa}",
  },
  units: {
    table: [
      ['Pression', 'kPa, bar', 'psi', '1 bar = 100 kPa ≈ 10 m d’eau'],
      ['Effort normal linéique', 'kN/m', 'kip/ft', '1 kN/m = 0,0685 kip/ft'],
      ['Perméabilité', 'm/s', 'ft/day', '10⁻⁷ m/s ≈ 0,028 ft/day'],
      ['Débit de venue d’eau', 'L/s', 'gpm', '1 L/s = 15,85 gpm'],
      ['Épaisseur de revêtement', 'cm', 'in', '30 à 50 cm usuellement'],
    ],
    note: 'Les débits de venues d’eau se donnent souvent en L/s par 100 m de tunnel.',
  },
  hypotheses: {
    items: [
      ['info', 'La formule N = pR suppose une pression uniforme et un anneau parfaitement circulaire.'],
      ['info', 'Le terrain participe à la stabilité de l’anneau (réaction élastique), ce que les modèles anneau-ressorts prennent en compte.'],
      ['warning', 'Un drainage peut colmater avec le temps (calcite, fines) : il doit être inspectable et curable.'],
      ['warning', 'Le revêtement doit résister au feu : béton avec fibres de polypropylène contre l’écaillage explosif.'],
      ['tip', 'Les joints entre plots de revêtement coulé sont les points faibles de l’étanchéité : soignez les waterstops.'],
    ],
  },
  simple_examples: {
    examples: [
      {
        title: 'Exemple 1 : épaisseur de voussoirs',
        given: 'Tunnelier de métro, diamètre intérieur 6,3 m',
        find: 'Épaisseur des voussoirs',
        solution_latex: "e \\approx \\frac{6{,}3}{20} \\text{ à } \\frac{6{,}3}{25} = 0{,}25 \\text{ à } 0{,}32\\ \\text{m}",
        result: 'Environ 0,30 m (valeur usuelle pour les métros).',
      },
      {
        title: 'Exemple 2 : pression d’eau en radier',
        given: 'Nappe à 18 m au-dessus du radier',
        find: 'Pression',
        solution_latex: "p_w = 9{,}81 \\times 18 = 177\\ \\text{kPa}",
        result: '≈ 1,8 bar sur le radier d’un tunnel étanche.',
      },
      {
        title: 'Exemple 3 : venue d’eau',
        given: 'k = 10⁻⁷ m/s, i = 2, surface d’écoulement 3 000 m² (100 m de tunnel)',
        find: 'Débit drainé',
        solution_latex: "q = 10^{-7} \\times 2 \\times 3\\,000 = 6 \\times 10^{-4}\\ \\text{m}^3/\\text{s} = 0{,}6\\ \\text{L/s}",
        result: '0,6 L/s par 100 m de tunnel.',
      },
    ],
  },
  real_examples: {
    title: 'Exemple réel — Incendie du tunnel sous la Manche (1996)',
    examples: [
      {
        context: 'Incendie d’une navette poids lourds dans le tunnel ferroviaire sous la Manche',
        scenario: "Les températures ont dépassé 1 000 °C ; le béton des voussoirs a subi un écaillage explosif, réduisant leur épaisseur jusqu'à plus de la moitié sur certaines zones. La structure a résisté, mais d'importantes réparations ont été nécessaires.",
        decomposition_latex: "\\text{Béton compact} + \\text{eau des pores} + \\text{échauffement rapide} \\Rightarrow \\text{écaillage explosif}",
        lesson: "Les revêtements de tunnels reçoivent désormais des fibres de polypropylène (qui fondent et libèrent la pression de vapeur) ou des protections thermiques.",
      },
    ],
  },
  diagrams: {
    title: 'Schéma de principe — Coupe d’un revêtement de tunnel',
    diagram_description: [
      'Terrain excavé',
      'Soutènement provisoire : béton projeté, boulons, cintres',
      'Géotextile de protection et géomembrane d’étanchéité',
      'Revêtement définitif en béton coffré (ou voussoirs avec joints élastomères)',
      'Drains en pied de voûte et collecteur des eaux d’infiltration',
      'Chaussée, trottoirs, galeries techniques et équipements',
    ],
  },
  mistakes: {
    items: [
      ['Concevoir un tunnel drainé sans étudier l’impact sur la nappe', 'Assèchement de sources et tassements en surface', 'Étudier l’hydrogéologie et choisir drainé ou étanche en connaissance de cause.'],
      ['Oublier le dimensionnement des voussoirs en phase provisoire', 'Fissures au stockage, à la manutention ou sous les vérins', 'Vérifier toutes les phases : démoulage, stockage, transport, poussée des vérins.'],
      ['Négliger le comportement au feu', 'Écaillage explosif et perte d’épaisseur', 'Ajouter des fibres polypropylène ou une protection passive.'],
    ],
  },
  tips: {
    tips: [
      'Réalisez l’injection de bourrage derrière les voussoirs immédiatement pour limiter les tassements en surface.',
      'Contrôlez l’étanchéité de la géomembrane (soudures doubles testées à l’air) avant de couler le revêtement.',
      'Prévoyez des regards de visite sur les drains tous les 50 à 100 m.',
      'Archivez la cartographie des venues d’eau relevées pendant le creusement : elle guide l’étanchéité.',
    ],
  },
  norms: {
    norms: [
      ['Recommandations AFTES (GT 9 étanchéité, GT 38 voussoirs…)', 'Conception des étanchéités et des revêtements d’ouvrages souterrains.'],
      ['NF EN 1992-1-1 et 1992-1-2', 'Calcul des revêtements en béton à froid et au feu.'],
      ['Fascicule 69 du CCTG', 'Travaux en souterrain.'],
      ['Directive 2004/54/CE', 'Exigences de sécurité minimales des tunnels du réseau routier transeuropéen.'],
    ],
  },
  exercises: {
    exercises: [
      {
        level: 1,
        text: 'Calculer l’effort normal dans un anneau de rayon 3,2 m sous une pression uniforme de 250 kPa.',
        hint: 'N = p·R.',
        answer_latex: "N = 250 \\times 3{,}2 = 800\\ \\text{kN/m}",
        answer_text: 'N = 800 kN/m.',
      },
      {
        level: 2,
        text: 'Pour cet anneau de 0,30 m d’épaisseur, calculer la contrainte de compression.',
        hint: 'σ = N / e.',
        answer_latex: "\\sigma = \\frac{800}{0{,}30} = 2\\,667\\ \\text{kPa} = 2{,}7\\ \\text{MPa}",
        answer_text: '≈ 2,7 MPa.',
      },
      {
        level: 3,
        text: 'Le même tunnel est étanche sous 40 m d’eau. Quelle épaisseur faut-il pour limiter la contrainte moyenne à 8 MPa ?',
        hint: 'p = 250 + 9,81 × 40.',
        answer_latex: "p = 250 + 392 = 642\\ \\text{kPa} \\quad N = 642 \\times 3{,}2 = 2\\,054\\ \\text{kN/m} \\quad e = \\frac{2{,}054\\ \\text{MN/m}}{8\\ \\text{MPa}} = 0{,}26\\ \\text{m}",
        answer_text: 'e ≥ 0,26 m (on garderait 0,30 m pour la flexion et l’enrobage).',
      },
    ],
  },
  quiz: {
    title: 'Quiz — Revêtement des tunnels',
    questions: [
      { q: 'Pourquoi les tunnels sont-ils souvent circulaires ?', options: ['Pour l’esthétique', 'Parce qu’un anneau sous pression uniforme ne travaille qu’en compression', 'Pour la ventilation'], correct: 1, explain: 'N = pR, sans flexion sous pression uniforme.' },
      { q: 'Dans un tunnel drainé, le revêtement reprend-il la pression d’eau ?', options: ['Oui, entièrement', 'Non, l’eau est captée par le drainage', 'Seulement en clé'], correct: 1, explain: 'Le drainage évacue l’eau et supprime la pression sur le revêtement.' },
      { q: 'Que sont les voussoirs ?', options: ['Des cintres métalliques', 'Des éléments préfabriqués formant les anneaux posés par le tunnelier', 'Des drains'], correct: 1, explain: 'Ils constituent le revêtement des tunnels creusés au tunnelier.' },
    ],
  },
  exam_questions: {
    questions: [
      'Comparez tunnels drainés et tunnels étanches : principes, avantages, impact sur la nappe.',
      'Calculez l’effort dans un revêtement circulaire sous pression uniforme et discutez l’effet de l’ovalisation.',
      'Présentez les différentes phases de dimensionnement des voussoirs.',
    ],
  },
  interview_questions: {
    questions: [
      ['Comment choisissez-vous entre tunnel drainé et étanche ?', 'Selon la charge d’eau, la perméabilité du terrain, l’impact acceptable sur la nappe et les sources, le coût du revêtement renforcé et l’entretien du drainage ; sous forte charge ou en zone sensible, on retient un tunnel étanche.'],
      ['Pourquoi ajoute-t-on des fibres polypropylène au béton de tunnel ?', "Pour limiter l'écaillage explosif au feu : les fibres fondent vers 160 °C et créent des canaux qui laissent s'échapper la vapeur d'eau."],
    ],
  },
  practical_case: {
    title: 'Cas pratique — Choix du revêtement d’un tunnel urbain',
    scenario: 'Tunnel de métro de 6 m de diamètre intérieur sous une nappe à 15 m au-dessus de la clé, en terrains sableux perméables (k = 10⁻⁴ m/s), sous un quartier ancien sensible aux tassements.',
    description: 'Choisir la méthode de construction et le type de revêtement.',
    resolutions: [
      "\\text{Drainage : } q \\text{ très élevé (} k = 10^{-4}\\ \\text{m/s)} \\Rightarrow \\text{rabattement inacceptable (tassements, nappe)}",
      "\\text{Solution : tunnelier à pression de terre + voussoirs étanches, } e \\approx \\frac{6}{20} = 0{,}30\\ \\text{m}",
      "p_w(\\text{radier}) = 9{,}81 \\times 21 = 206\\ \\text{kPa} \\Rightarrow \\text{joints élastomères dimensionnés pour au moins 2 fois cette pression}",
    ],
    conclusion: 'Un tunnelier à pression de terre et un revêtement de voussoirs étanches limitent tassements et rabattement ; les joints sont dimensionnés avec une marge sur la pression d’eau en radier.',
  },
  summary: {
    content: `### Le revêtement des tunnels en 5 points
1. Revêtement coulé en place (avec géomembrane) ou voussoirs (tunnelier).
2. Anneau sous pression uniforme : $N = pR$, $\\sigma = N/e$.
3. Tunnel étanche : ajouter $p_w = \\gamma_w h_w$.
4. Ovalisation → flexion ; voussoirs $e \\approx D/20$ à $D/25$.
5. Drainage, étanchéité, résistance au feu : durabilité sur 100 ans.`,
  },
  key_points: {
    points: [
      'N = p·R',
      'p_w ≈ 10 kPa par mètre d’eau',
      'Voussoirs : e ≈ D/20 à D/25',
      'Drainé ou étanche : choix dès la conception',
      'Fibres polypropylène contre l’écaillage au feu',
    ],
  },
  self_assessment: {
    objectives: [
      'Je connais les techniques de revêtement des tunnels',
      'Je sais calculer les efforts dans un anneau sous pression',
      'Je sais intégrer la pression d’eau d’un tunnel étanche',
      'Je connais les dispositifs d’étanchéité et de drainage',
      "J'ai réussi le quiz avec au moins 2 bonnes réponses sur 3",
    ],
  },
});
