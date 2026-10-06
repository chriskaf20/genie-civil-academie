// ── Lesson: Espaces publics et mobilités douces — Module 45 ──────────────────
import { buildLesson } from './build_lesson.js';

export const lesson_urbanisme_mobilites = buildLesson({
  moduleId: 45,
  slug: 'urbanisme_mobilites',
  lessonIndex: 4,
  title: "Espaces Publics et Mobilités Douces : Partage de la Rue, Accessibilité, Aménagements Cyclables et Zones Apaisées",
  subtitle: 'Module 45 — Urbanisme, aménagement & VRD',
  level: 'Intermédiaire',
  duration: '4h',
  diagramType: 'none',
  tags: ['Espace public', 'Piétons', 'Vélo', 'Accessibilité PMR', 'Zone 30', 'Partage de la voirie', 'Stationnement vélo'],
}, {
  definition: {
    title: 'Définition — Une rue pour tous ses usagers',
    fr: 'Espaces publics et mobilités douces (actives)',
    en: 'Public space and active mobility',
    metier: "Concerne les urbanistes, paysagistes, ingénieurs voirie, services mobilité des collectivités et bureaux d'études VRD.",
    content: `Les **mobilités douces** (ou actives) désignent la marche, le vélo et les engins de déplacement personnels. L'**espace public** (rues, places, parvis) doit les accueillir en sécurité, aux côtés des transports collectifs et de la voiture.

### Principes d'aménagement
- **Continuité** : un itinéraire cyclable ou piéton interrompu n'est pas utilisé.
- **Sécurité** : séparation physique quand les vitesses ou les trafics sont élevés ; **modération de la vitesse** (zone 30, zone de rencontre) sinon.
- **Accessibilité** : cheminements sans obstacle, pentes faibles, abaissés de trottoirs, bandes d'éveil de vigilance.
- **Confort** : ombre, bancs, éclairage, végétation, revêtements adaptés.

### La hiérarchie des solutions cyclables
Zone apaisée partagée → bande cyclable → piste séparée → voie verte, selon la vitesse et le trafic automobile.

> 💡 À 30 km/h, un piéton heurté a de bonnes chances de survivre ; à 50 km/h, le risque de décès est plusieurs fois plus élevé.`,
  },
  importance: {
    content: `- **Sécurité** : les piétons et cyclistes sont les usagers les plus vulnérables.
- **Santé et climat** : la marche et le vélo réduisent les émissions et la sédentarité.
- **Obligations** : accessibilité des espaces publics aux personnes handicapées ; aménagements cyclables lors des réfections de voirie en agglomération (France).
- **Attractivité** : des rues agréables soutiennent les commerces et la vie locale.

> ⚠️ **À retenir** : un trottoir encombré (poteaux, mobilier, stationnement) devient inaccessible aux fauteuils et aux poussettes.`,
  },
  applications: {
    examples: [
      ['Rue commerçante', 'Zone de rencontre à 20 km/h, plateau surélevé, terrasses.'],
      ['Boulevard urbain', 'Pistes cyclables unidirectionnelles séparées, arrêts de bus.'],
      ['Abords d’école', 'Zone 30, traversées surélevées, parvis piéton.'],
      ['Gare', 'Stationnement vélo sécurisé et cheminements directs.'],
      ['Lotissement', 'Cheminements piétons traversants vers les équipements.'],
    ],
  },
  theory: {
    title: 'Théorie — Dimensions et règles usuelles',
    content: `### 1. Cheminements piétons accessibles (France)
- Largeur libre de tout obstacle : **1,40 m** (réductible à 1,20 m ponctuellement).
- Pente en long : **≤ 5 %** (paliers de repos si plus), dévers ≤ 2 %.
- Ressaut aux bordures : 2 cm au plus (4 cm avec chanfrein) ; bandes d'éveil de vigilance aux traversées.

### 2. Aménagements cyclables (ordres de grandeur)
| Type | Largeur |
|---|---|
| Bande cyclable | 1,50 m (hors marquage) |
| Piste unidirectionnelle | 2,00 m |
| Piste bidirectionnelle | 3,00 m |
| Voie verte (piétons + vélos) | 3,00 m et plus |

### 3. Choisir la séparation
On sépare physiquement quand la vitesse dépasse 30 km/h et le trafic quelques milliers de véhicules par jour ; en zone 30 peu circulée, la mixité est acceptable.

### 4. Distance de visibilité et temps de traversée
Temps de traversée d'un piéton : $t = L / v$ avec $v$ ≈ 1,0 m/s (personnes lentes : 0,8 m/s). Une traversée large gagne à être coupée par un **îlot refuge**.

### 5. Stationnement vélo
Arceaux espacés d'environ 0,80 à 1,00 m (2 vélos par arceau) ; abris sécurisés près des gares et des logements.`,
  },
  formulas: {
    title: 'Formules essentielles — Mobilités douces',
    formulas: [
      { name: 'Temps de traversée piétonne', latex: "t = \\frac{L}{v}", description: 'Durée nécessaire pour traverser une chaussée.', vars: [['L', 'Longueur de traversée', 'm', ''], ['v', 'Vitesse de marche', 'm/s', '1,0 (0,8 pour les personnes lentes).']] },
      { name: 'Pente d’un cheminement', latex: "p = \\frac{\\Delta h}{L} \\times 100", description: 'À comparer aux 5 % de l’accessibilité.', vars: [['\\Delta h', 'Dénivelé', 'm', ''], ['L', 'Longueur horizontale', 'm', '']] },
      { name: 'Distance d’arrêt d’un véhicule', latex: "d = v\\, t_r + \\frac{v^2}{2a}", description: 'Justifie la modération de la vitesse.', vars: [['v', 'Vitesse', 'm/s', ''], ['t_r', 'Temps de réaction', 's', '≈ 1 à 1,5 s.'], ['a', 'Décélération', 'm/s²', '≈ 5 à 7.']] },
      { name: 'Capacité d’un parc à vélos', latex: "N = 2 \\times \\frac{L}{e}", description: 'Arceaux espacés de e le long d’une longueur L.', vars: [['e', 'Espacement des arceaux', 'm', '0,80 à 1,00.']] },
    ],
  },
  stepbystep: {
    title: 'Calcul complet — Répartir l’emprise d’une rue de 16 m',
    problem: "Rue de 16 m entre façades, à double sens, desservant des commerces. Programme : deux trottoirs confortables, deux pistes cyclables unidirectionnelles, une file de stationnement et des arbres. Proposer une répartition et vérifier la traversée piétonne (v = 1 m/s).",
    steps_demo: [
      { n: 1, text: "Trottoirs : 2 × 2,50 m (1,40 m libres + mobilier et vitrines) = 5,00 m." },
      { n: 2, text: "Pistes cyclables : 2 × 1,80 m = 3,60 m (séparées de la chaussée par une bordure)." },
      { n: 3, text: "Chaussée : 2 × 2,90 m = 5,80 m (voies étroites qui modèrent la vitesse)." },
      { n: 4, text: "Stationnement et arbres en alternance : 1,60 m. Total : 5,00 + 3,60 + 5,80 + 1,60 = 16,00 m ✓." },
      { n: 5, text: "Traversée de la chaussée et des pistes : 5,80 + 3,60 = 9,40 m → t = 9,4 s ; avec une avancée de trottoir au droit du stationnement, la traversée est raccourcie." },
    ],
    result_latex: "2 \\times 2{,}50 + 2 \\times 1{,}80 + 2 \\times 2{,}90 + 1{,}60 = 16{,}00\\ \\text{m}",
  },
  units: {
    table: [
      ['Largeur', 'm', 'ft', '1,40 m ≈ 4,6 ft'],
      ['Pente', '%', '%', '5 % = 1/20'],
      ['Vitesse', 'km/h', 'mph', '30 km/h ≈ 19 mph'],
      ['Vitesse de marche', 'm/s', 'ft/s', '1,0 m/s ≈ 3,3 ft/s'],
      ['Trafic', 'véh/jour', 'veh/day', ''],
    ],
    note: 'Les dimensions citées sont des valeurs usuelles des guides français (Cerema) ; les règles locales et les contraintes du site font foi.',
  },
  hypotheses: {
    items: [
      ['info', 'Le choix des aménagements dépend du trafic, des vitesses pratiquées et des flux de piétons et cyclistes.'],
      ['info', 'Les valeurs d’accessibilité citées proviennent de la réglementation française de la voirie.'],
      ['warning', 'Un aménagement cyclable trop étroit ou discontinu est dangereux et peu utilisé.'],
      ['warning', 'Les arbres et le mobilier ne doivent jamais réduire le cheminement libre sous 1,40 m.'],
      ['tip', 'Tracez les flux réels (désirs de cheminement) avant de dessiner.'],
    ],
  },
  simple_examples: {
    examples: [
      { title: 'Exemple 1 : temps de traversée', given: 'Chaussée de 12 m, personne lente à 0,8 m/s', find: 't', solution_latex: "t = \\frac{12}{0{,}8} = 15\\ \\text{s}", result: '15 s : un îlot refuge est souhaitable.' },
      { title: 'Exemple 2 : pente d’une rampe', given: 'Dénivelé 0,40 m sur 10 m', find: 'p', solution_latex: "p = \\frac{0{,}40}{10} \\times 100 = 4\\ \\%", result: '4 % ≤ 5 % : accessible.' },
      { title: 'Exemple 3 : distance d’arrêt', given: '30 et 50 km/h, t_r = 1 s, a = 6 m/s²', find: 'd', solution_latex: "d_{30} = 8{,}3 + 5{,}8 = 14\\ \\text{m} \\qquad d_{50} = 13{,}9 + 16{,}1 = 30\\ \\text{m}", result: 'La distance d’arrêt double entre 30 et 50 km/h.' },
    ],
  },
  real_examples: {
    title: 'Exemple réel — Développement des pistes cyclables à Paris',
    examples: [
      {
        context: 'Plans vélo successifs et aménagements de 2020 à Paris',
        scenario: "Des pistes cyclables séparées ont été créées sur les grands axes (rue de Rivoli, boulevard Sébastopol…), souvent en réduisant le nombre de voies automobiles. Les comptages ont montré une forte hausse de la fréquentation cyclable sur ces axes, au point que certaines pistes ont dû être élargies.",
        decomposition_latex: "\\text{Itinéraires continus et séparés} \\Rightarrow \\text{sécurité perçue} \\uparrow \\Rightarrow \\text{usage du vélo} \\uparrow",
        lesson: "La continuité et la séparation des aménagements créent la demande ; les dimensions doivent anticiper la croissance des flux.",
      },
    ],
  },
  diagrams: {
    title: 'Schéma de principe — Concevoir une rue apaisée',
    diagram_description: [
      'Diagnostic : flux piétons, vélos, voitures, livraisons, vitesses',
      'Choix du régime : zone de rencontre, zone 30, voie à 50 km/h',
      'Répartition de l’emprise : trottoirs, cycles, chaussée, stationnement, végétation',
      'Traversées : plateaux, îlots refuges, avancées de trottoir',
      'Accessibilité : 1,40 m libres, pentes ≤ 5 %, bandes d’éveil',
      'Mobilier, éclairage, ombre et gestion des eaux pluviales',
    ],
  },
  mistakes: {
    items: [
      ['Piste cyclable qui s’arrête avant le carrefour', 'Conflits au point le plus dangereux', 'Traiter la continuité dans le carrefour (sas, îlots).'],
      ['Mobilier au milieu du trottoir', 'Cheminement inaccessible', 'Aligner le mobilier, garder 1,40 m libres.'],
      ['Voies larges en zone 30', 'Vitesses réelles élevées', 'Réduire la largeur des voies et créer des effets de porte.'],
    ],
  },
  tips: {
    tips: [
      'Retenez : 1,40 m libres, 5 % de pente, 2 % de dévers.',
      'Piste unidirectionnelle : 2 m ; bidirectionnelle : 3 m.',
      'Placez le stationnement vélo au plus près des entrées.',
      'Testez les aménagements avec des usagers (fauteuil, poussette, vélo cargo).',
    ],
  },
  norms: {
    norms: [
      ['Décret n° 2006-1658 et arrêté du 15 janvier 2007 (France)', 'Accessibilité de la voirie et des espaces publics.'],
      ['Code de l’environnement, L. 228-2', 'Aménagements cyclables lors des réfections de voirie urbaine.'],
      ['Code de la route, R. 110-2', 'Définitions : zone 30, zone de rencontre, aire piétonne, voie verte.'],
      ['Guides du Cerema', 'Recommandations pour les aménagements cyclables et la voirie urbaine.'],
    ],
  },
  exercises: {
    exercises: [
      { level: 1, text: 'Quelle largeur libre minimale pour un cheminement piéton accessible ?', hint: 'Valeur réglementaire courante.', answer_latex: "1{,}40\\ \\text{m}", answer_text: '1,40 m (1,20 m ponctuellement).' },
      { level: 2, text: 'Une rampe monte de 0,60 m : quelle longueur minimale pour respecter 5 % ?', hint: 'L = Δh / p.', answer_latex: "L = \\frac{0{,}60}{0{,}05} = 12\\ \\text{m}", answer_text: '12 m (avec des paliers de repos).' },
      { level: 3, text: 'Combien de vélos sur un trottoir de 12 m équipé d’arceaux tous les 0,80 m ?', hint: '2 vélos par arceau.', answer_latex: "N = 2 \\times \\frac{12}{0{,}80} = 30", answer_text: '30 vélos (15 arceaux).' },
    ],
  },
  quiz: {
    title: 'Quiz — Mobilités douces',
    questions: [
      { q: 'Pente maximale courante d’un cheminement accessible ?', options: ['5 %', '12 %', '20 %'], correct: 0, explain: 'Au-delà, paliers de repos et limitations.' },
      { q: 'Largeur usuelle d’une piste cyclable bidirectionnelle ?', options: ['1,0 m', '3,0 m', '6,0 m'], correct: 1, explain: '3 m pour croiser en sécurité.' },
      { q: 'Pourquoi réduire la vitesse à 30 km/h en ville ?', options: ['Pour économiser du carburant uniquement', 'Pour diviser la distance d’arrêt et la gravité des chocs', 'Pour augmenter le trafic'], correct: 1, explain: 'Sécurité des usagers vulnérables.' },
    ],
  },
  exam_questions: {
    questions: [
      'Répartissez l’emprise d’une rue entre ses différents usages.',
      'Présentez les règles d’accessibilité de la voirie.',
      'Comment choisir entre bande, piste et circulation partagée pour les vélos ?',
    ],
  },
  interview_questions: {
    questions: [
      ['Les commerçants craignent la suppression de places de stationnement : que répondez-vous ?', 'Je m’appuie sur des comptages des modes d’arrivée des clients, je propose des places de livraison et PMR, du stationnement vélo et une rue plus agréable qui augmente le temps passé.'],
      ['Comment sécuriser une piste cyclable en carrefour ?', 'Continuité jusqu’au carrefour, îlots de protection, sas vélo, visibilité dégagée et temps de feux adaptés.'],
    ],
  },
  practical_case: {
    title: 'Cas pratique — Abords d’une école',
    scenario: 'Rue de 12 m devant une école : trottoirs de 1,50 m, chaussée de 9 m à double sens à 50 km/h, stationnement des deux côtés.',
    description: 'Proposer un aménagement apaisé.',
    resolutions: [
      "\\text{Zone 30 et plateau surélevé au droit de l'entrée}",
      "\\text{Nouvelle répartition} : 3{,}00 + 6{,}00 \\text{ (chaussée)} + 3{,}00 = 12\\ \\text{m (parvis élargis, un seul côté stationné supprimé)}",
      "\\text{Traversée} : 6{,}00\\ \\text{m} \\Rightarrow t = 6\\ \\text{s à 1 m/s au lieu de 9 s}",
    ],
    conclusion: 'Le parvis élargi accueille l’attente des parents ; la chaussée rétrécie et le plateau modèrent la vitesse devant l’école.',
  },
  summary: {
    content: `### Les mobilités douces en 5 points
1. Continuité, sécurité, accessibilité, confort.
2. Piétons : 1,40 m libres, pente ≤ 5 %, dévers ≤ 2 %.
3. Vélos : bande 1,50 m, piste 2,00 m, bidirectionnelle 3,00 m.
4. Modération de la vitesse : zone 30, zone de rencontre, plateaux.
5. Traversées courtes : $t = L/v$, îlots et avancées de trottoir.`,
  },
  key_points: {
    points: ['1,40 m libres', 'Pente ≤ 5 %', 'Piste 2 m / bidir. 3 m', '30 km/h : arrêt en ≈ 14 m', 't = L / v'],
  },
  self_assessment: {
    objectives: [
      'Je connais les règles d’accessibilité de la voirie',
      'Je sais dimensionner un aménagement cyclable',
      'Je sais répartir l’emprise d’une rue',
      'Je sais proposer un aménagement apaisé',
      "J'ai réussi le quiz avec au moins 2 bonnes réponses sur 3",
    ],
  },
});
