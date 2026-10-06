// ── Lesson: Voirie et réseaux divers (VRD) — Module 45 ───────────────────────
import { buildLesson } from './build_lesson.js';

export const lesson_urbanisme_vrd = buildLesson({
  moduleId: 45,
  slug: 'urbanisme_vrd',
  lessonIndex: 3,
  title: "Voirie et Réseaux Divers (VRD) : Profil en Travers, Structure de Voirie, Réseaux Enterrés, Pentes et Profondeurs",
  subtitle: 'Module 45 — Urbanisme, aménagement & VRD',
  level: 'Intermédiaire',
  duration: '6h',
  diagramType: 'none',
  tags: ['VRD', 'Profil en travers', 'Réseaux', 'Tranchée', 'Eaux usées', 'Eaux pluviales', 'Fil d’eau', 'Couverture'],
}, {
  definition: {
    title: 'Définition — Ce qui rend un terrain viable',
    fr: 'Voirie et réseaux divers (VRD)',
    en: 'Roads and utilities (site infrastructure)',
    metier: "Concerne les bureaux d'études VRD, géomètres, entreprises de travaux publics et services techniques des collectivités.",
    content: `Les **VRD** regroupent tous les ouvrages qui desservent un terrain :
- **Voirie** : chaussées, trottoirs, bordures, stationnement, signalisation.
- **Réseaux humides** : eau potable, eaux usées (EU), eaux pluviales (EP), défense incendie.
- **Réseaux secs** : électricité, éclairage public, télécommunications (fibre), gaz.

### Principes
- Les réseaux d'**assainissement** sont **gravitaires** : ils imposent des **pentes** et donc les profondeurs ; on les cale en premier.
- Les autres réseaux, sous pression ou secs, s'adaptent ensuite.
- Chaque réseau a une **couverture minimale** (protection contre le gel et les charges) et des **distances** entre réseaux (croisements, parallélismes).

> 💡 Le **profil en travers type** fixe la largeur de la voie, des trottoirs et la position de chaque réseau ; le **profil en long** fixe les pentes et les cotes de fil d'eau.`,
  },
  importance: {
    content: `- **Viabilité** : sans réseaux, un terrain n'est pas constructible.
- **Coût** : les VRD représentent l'essentiel du coût d'aménagement.
- **Durabilité** : un réseau mal posé (contre-pente, tassement) dysfonctionne pendant des décennies.
- **Sécurité** : les réseaux enterrés (gaz, électricité) exigent des précautions de travaux (DT-DICT en France).

> ⚠️ **À retenir** : une contre-pente sur un réseau d'eaux usées provoque dépôts, bouchages et odeurs.`,
  },
  applications: {
    examples: [
      ['Voie de lotissement', 'Chaussée de 5 m, trottoirs de 1,40 m minimum, réseaux sous trottoir.'],
      ['Raccordement d’une maison', 'Boîte de branchement EU, compteur d’eau, coffret électrique en limite.'],
      ['Rue en centre-ville', 'Galerie technique ou tranchées partagées.'],
      ['Zone d’activités', 'Chaussée renforcée poids lourds, réseau incendie.'],
      ['Rénovation de voirie', 'Remplacement des réseaux avant la réfection de chaussée.'],
    ],
  },
  theory: {
    title: 'Théorie — Pentes, profondeurs et structures',
    content: `### 1. Pente d'un réseau gravitaire
$$i = \\frac{Z_{amont} - Z_{aval}}{L}$$
Valeurs usuelles : eaux usées DN 200 au moins 0,5 % (1 % ou plus recommandé pour l'autocurage) ; branchements 2 à 3 %.

### 2. Profondeur et couverture
$$h = Z_{TN} - Z_{fe} \\qquad c = h - D - e$$
$Z_{fe}$ : cote du fil d'eau (bas intérieur du tuyau) ; $D$ : diamètre ; $e$ : épaisseur de paroi. Couverture minimale usuelle : 0,80 m sous chaussée, 0,60 m sous trottoir (selon le réseau et le gel).

### 3. Cote d'arrivée d'un branchement
Le branchement d'une maison doit arriver **au-dessus** du collecteur pour s'écouler par gravité : on vérifie la cote du point le plus bas à desservir.

### 4. Structure de voirie légère (ordre de grandeur)
Enrobé 5 à 6 cm + grave (GNT ou grave-bitume) 25 à 35 cm sur une plate-forme de portance contrôlée (essai de plaque, EV2 ≥ 50 MPa).

### 5. Profil en travers
Largeurs minimales usuelles : voie à double sens 5 à 6 m ; trottoir avec cheminement libre de 1,40 m (accessibilité) ; places de stationnement de 2,0 à 2,5 m de large.`,
  },
  formulas: {
    title: 'Formules essentielles — VRD',
    formulas: [
      { name: 'Pente d’un collecteur', latex: "i = \\frac{Z_{amont} - Z_{aval}}{L}", description: 'Pente entre deux regards.', vars: [['Z', 'Cotes de fil d’eau', 'm NGF', ''], ['L', 'Distance entre regards', 'm', '']] },
      { name: 'Cote de fil d’eau aval', latex: "Z_{aval} = Z_{amont} - i\\, L", description: 'Report de pente sur un tronçon.', vars: [['i', 'Pente', 'm/m', '']] },
      { name: 'Couverture', latex: "c = Z_{TN} - Z_{fe} - D - e", description: 'Épaisseur de remblai au-dessus du tuyau.', vars: [['Z_{TN}', 'Cote du terrain fini', 'm NGF', ''], ['D', 'Diamètre intérieur', 'm', ''], ['e', 'Épaisseur de paroi', 'm', '']] },
      { name: 'Volume de déblai d’une tranchée', latex: "V = L \\times b \\times h", description: 'Tranchée à parois verticales blindées.', vars: [['b', 'Largeur de tranchée', 'm', 'D + 2 × 0,30 m environ.'], ['h', 'Profondeur moyenne', 'm', '']] },
    ],
  },
  stepbystep: {
    title: 'Calcul complet — Profil en long d’un collecteur d’eaux usées',
    problem: "Collecteur EU DN 200 (épaisseur 6 mm) sous une voie de lotissement, de R1 à R3 (2 tronçons de 40 m). Terrain fini : R1 = 52,40 ; R2 = 52,10 ; R3 = 51,85 m. Fil d'eau en R1 : 51,10 m. Pente retenue : 1 %. Calculer les cotes de fil d'eau, les profondeurs et vérifier la couverture minimale de 0,80 m.",
    steps_demo: [
      { n: 1, text: "R2 : Z_fe = 51,10 − 0,01 × 40 = 50,70 m ; R3 : 50,70 − 0,40 = 50,30 m." },
      { n: 2, text: "Profondeurs : R1 = 52,40 − 51,10 = 1,30 m ; R2 = 52,10 − 50,70 = 1,40 m ; R3 = 51,85 − 50,30 = 1,55 m." },
      { n: 3, text: "Couverture en R1 : 1,30 − 0,20 − 0,006 = 1,09 m ≥ 0,80 m ✓ (et davantage en R2, R3)." },
      { n: 4, text: "Branchement d'une maison avec sortie à 51,90 m, à 12 m du collecteur à 2 % : arrivée à 51,90 − 0,24 = 51,66 m > 51,10 + 0,20 : écoulement gravitaire possible ✓." },
      { n: 5, text: "La pente de 1 % suit à peu près celle du terrain : les profondeurs restent raisonnables (pas de poste de relevage)." },
    ],
    result_latex: "Z_{R2} = 51{,}10 - 0{,}01 \\times 40 = 50{,}70 \\qquad Z_{R3} = 50{,}30\\ \\text{m} \\qquad c_{R1} = 1{,}09\\ \\text{m} \\geq 0{,}80",
  },
  units: {
    table: [
      ['Cote', 'm NGF', 'ft (datum)', 'Altitude de référence'],
      ['Pente', '% ou m/m', 'ft/ft', '1 % = 0,01 m/m = 1 cm/m'],
      ['Diamètre', 'DN (mm)', 'in', 'DN 200 ≈ 8 in'],
      ['Couverture', 'm', 'ft', '0,80 m ≈ 2,6 ft'],
      ['Volume de terrassement', 'm³', 'yd³', '1 m³ = 1,308 yd³'],
    ],
    note: 'Le fil d’eau est la génératrice inférieure intérieure du tuyau : c’est la cote utilisée pour les pentes.',
  },
  hypotheses: {
    items: [
      ['info', 'Les pentes et couvertures minimales dépendent du règlement du gestionnaire de réseau et du fascicule 70.'],
      ['info', 'Les réseaux séparatifs (EU et EP distincts) sont la règle dans les opérations neuves.'],
      ['warning', 'Avant tout terrassement, déclarer les travaux (DT-DICT) et localiser les réseaux existants.'],
      ['warning', 'Une tranchée de plus de 1,30 m de profondeur doit être blindée ou talutée pour protéger les ouvriers.'],
      ['tip', 'Calez d’abord les réseaux gravitaires, puis les réseaux sous pression et secs.'],
    ],
  },
  simple_examples: {
    examples: [
      { title: 'Exemple 1 : pente', given: 'Z amont 48,20 ; Z aval 47,85 ; L = 35 m', find: 'i', solution_latex: "i = \\frac{0{,}35}{35} = 0{,}01 = 1\\ \\%", result: '1 %.' },
      { title: 'Exemple 2 : couverture', given: 'TN 50,00 ; fil d’eau 48,90 ; DN 300 (e = 8 mm)', find: 'c', solution_latex: "c = 50{,}00 - 48{,}90 - 0{,}30 - 0{,}008 = 0{,}79\\ \\text{m}", result: '0,79 m : juste sous le minimum de 0,80 m sous chaussée → approfondir ou protéger.' },
      { title: 'Exemple 3 : déblai de tranchée', given: 'L = 80 m, b = 0,80 m, h moyen 1,40 m', find: 'V', solution_latex: "V = 80 \\times 0{,}80 \\times 1{,}40 = 89{,}6\\ \\text{m}^3", result: '≈ 90 m³ (avant foisonnement).' },
    ],
  },
  real_examples: {
    title: 'Exemple réel — Réseau d’eaux usées en contre-pente',
    examples: [
      {
        context: 'Lotissement de 30 maisons réceptionné sans inspection télévisée',
        scenario: "Quelques mois après la livraison, des refoulements sont apparus dans deux maisons. L'inspection caméra a révélé un tronçon tassé formant un « ventre » de 6 cm : les eaux stagnaient et les dépôts bouchaient la conduite. Le tronçon a dû être repris sur 25 m sous la chaussée neuve.",
        decomposition_latex: "\\text{Lit de pose mal compacté} \\Rightarrow \\text{tassement} \\Rightarrow \\text{contre-pente} \\Rightarrow \\text{dépôts et refoulements}",
        lesson: "Le compactage du lit de pose et du remblai, puis l'inspection télévisée et les essais d'étanchéité avant réception, sont indispensables.",
      },
    ],
  },
  diagrams: {
    title: 'Schéma de principe — Étudier les VRD d’une opération',
    diagram_description: [
      'Relevé topographique et repérage des réseaux existants',
      'Profil en travers type : voie, trottoirs, positions des réseaux',
      'Profil en long des réseaux gravitaires (EU, EP) : pentes et cotes',
      'Réseaux sous pression et secs : tracés et croisements',
      'Structure de chaussée et gestion des eaux de voirie',
      'Essais à la réception : compactage, caméra, étanchéité, pression',
    ],
  },
  mistakes: {
    items: [
      ['Caler les réseaux secs avant l’assainissement', 'Conflits de croisement, profondeurs impossibles', 'Gravitaire d’abord.'],
      ['Couverture insuffisante sous chaussée', 'Écrasement, gel', 'Respecter les minimums ou protéger par dalle.'],
      ['Réception sans essais', 'Défauts cachés sous la chaussée', 'Caméra, étanchéité, compactage.'],
    ],
  },
  tips: {
    tips: [
      'Retenez : 1 % = 1 cm par mètre.',
      'Placez les regards à chaque changement de pente, de direction ou de diamètre.',
      'Grillage avertisseur coloré au-dessus de chaque réseau (rouge électricité, jaune gaz, bleu eau, marron assainissement, vert télécom).',
      'Coordonnez les entreprises pour ouvrir les tranchées une seule fois.',
    ],
  },
  norms: {
    norms: [
      ['Fascicule 70 du CCTG', 'Ouvrages d’assainissement.'],
      ['Fascicule 71 du CCTG', 'Fourniture et pose de conduites d’eau.'],
      ['NF P 98-331', 'Tranchées : ouverture, remblayage, réfection.'],
      ['NF EN 1610', 'Mise en œuvre et essais des branchements et collecteurs.'],
      ['Réglementation DT-DICT (Code de l’environnement, R. 554-1 et suivants)', 'Travaux à proximité des réseaux.'],
    ],
  },
  exercises: {
    exercises: [
      { level: 1, text: 'Un tronçon de 50 m à 0,8 % part de la cote 34,60 m. Quelle cote en aval ?', hint: 'Z − i L.', answer_latex: "34{,}60 - 0{,}008 \\times 50 = 34{,}20\\ \\text{m}", answer_text: '34,20 m.' },
      { level: 2, text: 'TN = 36,00 m, fil d’eau 34,20 m, DN 200 (e = 6 mm) : couverture ?', hint: 'c = TN − fe − D − e.', answer_latex: "c = 36{,}00 - 34{,}20 - 0{,}206 = 1{,}59\\ \\text{m}", answer_text: '1,59 m.' },
      { level: 3, text: 'Une maison a sa sortie EU à 35,10 m, à 15 m du collecteur dont le fil d’eau local est 34,40 m (DN 200). Pente minimale du branchement 2 % : est-ce possible ?', hint: 'Cote d’arrivée = 35,10 − 0,02 × 15.', answer_latex: "35{,}10 - 0{,}30 = 34{,}80 > 34{,}40 + 0{,}20", answer_text: 'Oui : arrivée à 34,80 m, au-dessus de la génératrice supérieure du collecteur (34,60 m).' },
    ],
  },
  quiz: {
    title: 'Quiz — VRD',
    questions: [
      { q: 'Quel réseau cale-t-on en premier ?', options: ['La fibre', 'Les eaux usées (gravitaire)', 'L’éclairage public'], correct: 1, explain: 'Les réseaux gravitaires imposent les pentes et les profondeurs.' },
      { q: 'Qu’est-ce que le fil d’eau ?', options: ['Le dessus du tuyau', 'Le bas intérieur du tuyau', 'Le niveau de la nappe'], correct: 1, explain: 'Génératrice inférieure intérieure.' },
      { q: 'Couverture usuelle minimale sous chaussée ?', options: ['0,20 m', '0,80 m', '2,00 m'], correct: 1, explain: 'Ordre de grandeur courant (gel et charges).' },
    ],
  },
  exam_questions: {
    questions: [
      'Établissez le profil en long d’un collecteur et vérifiez la couverture.',
      'Présentez un profil en travers type de voie de lotissement.',
      'Quels essais réalisez-vous à la réception des réseaux ?',
    ],
  },
  interview_questions: {
    questions: [
      ['Le terrain est très plat : comment gérez-vous les eaux usées ?', 'Je cherche la pente minimale admissible (0,5 % en DN 200), je limite les longueurs et, si les profondeurs deviennent excessives, je prévois un poste de relevage.'],
      ['Quelles précautions avant de creuser une tranchée en ville ?', 'DT-DICT, repérage et marquage des réseaux, sondages manuels près des réseaux sensibles, blindage au-delà de 1,30 m et balisage.'],
    ],
  },
  practical_case: {
    title: 'Cas pratique — Profil en travers d’une voie de lotissement',
    scenario: 'Emprise publique de 10 m : chaussée à double sens, deux trottoirs, réseaux EU, EP, eau potable, électricité, éclairage et télécom.',
    description: 'Répartir l’emprise et placer les réseaux.',
    resolutions: [
      "\\text{Trottoir 1,60} + \\text{chaussée 5,00} + \\text{trottoir 1,60} + \\text{noue / stationnement 1,80} = 10{,}00\\ \\text{m}",
      "\\text{EU et EP sous chaussée (gravitaires, plus profonds) ; eau potable et réseaux secs sous trottoirs}",
      "\\text{Distances usuelles entre réseaux parallèles} \\geq 0{,}20 \\text{ à } 0{,}50\\ \\text{m selon les réseaux}",
    ],
    conclusion: 'Le profil en travers type fixe une position pour chaque réseau : il évite les conflits et facilite l’entretien futur.',
  },
  summary: {
    content: `### Les VRD en 5 points
1. Voirie + réseaux humides + réseaux secs.
2. Gravitaire d'abord : $i = \\Delta Z / L$, autocurage ≥ 1 % recommandé.
3. Couverture : $c = Z_{TN} - Z_{fe} - D - e$ ≥ 0,80 m sous chaussée.
4. Profil en travers type : largeurs et positions des réseaux.
5. DT-DICT avant travaux, essais avant réception.`,
  },
  key_points: {
    points: ['Gravitaire d’abord', '1 % = 1 cm/m', 'c ≥ 0,80 m sous chaussée', 'Trottoir libre ≥ 1,40 m', 'Caméra et essais avant réception'],
  },
  self_assessment: {
    objectives: [
      'Je sais établir un profil en long de réseau gravitaire',
      'Je sais vérifier une couverture',
      'Je sais organiser un profil en travers type',
      'Je connais les précautions de travaux près des réseaux',
      "J'ai réussi le quiz avec au moins 2 bonnes réponses sur 3",
    ],
  },
});
