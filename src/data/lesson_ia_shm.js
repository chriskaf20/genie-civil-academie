// ── Lesson: Surveillance de santé structurale et détection d'anomalies — Module 30
import { buildLesson } from './build_lesson.js';

export const lesson_ia_shm = buildLesson({
  moduleId: 30,
  slug: 'ia_shm',
  lessonIndex: 1,
  title: "Surveillance de Santé Structurale (SHM) : Capteurs, Fréquences Propres et Détection d'Anomalies par Apprentissage",
  subtitle: 'Module 30 — Intelligence Artificielle & Génie Civil',
  level: 'Avancé',
  duration: '6h',
  tags: ['SHM', 'Capteurs', 'Fréquence propre', 'Détection d’anomalies', 'Z-score', 'Machine learning', 'Jumeau numérique'],
}, {
  definition: {
    title: 'Définition — Écouter un ouvrage pour détecter ses changements',
    fr: 'Surveillance de santé structurale (SHM)',
    en: 'Structural Health Monitoring (SHM)',
    metier: "Concerne les gestionnaires d'ouvrages d'art, les ingénieurs en auscultation, les data scientists et les bureaux d'études en maintenance.",
    content: `La **surveillance de santé structurale** consiste à équiper un ouvrage de capteurs permanents (accéléromètres, jauges de déformation, fibres optiques, inclinomètres, capteurs de température) et à analyser automatiquement leurs mesures pour détecter un **changement de comportement** pouvant révéler un endommagement.

### Le rôle de l'intelligence artificielle
Les capteurs produisent des millions de mesures. L'IA permet de :
- **séparer** les variations normales (température, trafic) des variations anormales ;
- **détecter** les anomalies sans avoir d'exemples de dommages (apprentissage non supervisé) ;
- **alerter** le gestionnaire au bon moment, sans fausses alertes trop nombreuses.

### Un indicateur clé : la fréquence propre
Une perte de rigidité fait baisser les fréquences de vibration : $f \\propto \\sqrt{k/m}$.

> 💡 Le principal piège du SHM : la température fait varier les fréquences de quelques pourcents, souvent plus qu'un dommage réel.`,
  },
  importance: {
    content: `- **Sécurité** : détection précoce d'une dégradation entre deux inspections visuelles.
- **Patrimoine vieillissant** : de nombreux ponts approchent ou dépassent leur durée de vie prévue.
- **Maintenance prédictive** : intervenir au bon moment plutôt qu'à date fixe.
- **Données objectives** : appui aux décisions de limitation de charge ou de fermeture.

> ⚠️ **À retenir** : le SHM complète l'inspection humaine ; il ne la remplace pas.`,
  },
  applications: {
    examples: [
      ['Pont à haubans', 'Suivi des fréquences des haubans pour estimer leur tension.'],
      ['Viaduc ancien', 'Fibres optiques sur les zones fissurées.'],
      ['Barrage', 'Pendules et piézomètres analysés par modèles statistiques.'],
      ['Tunnel', 'Convergences mesurées en continu pendant le creusement.'],
      ['Bâtiment après séisme', 'Comparaison des fréquences avant et après l’événement.'],
    ],
  },
  theory: {
    title: 'Théorie — Du signal à l’alerte',
    content: `### 1. Acquisition
Capteurs → numérisation → stockage. Fréquence d'échantillonnage au moins égale à deux fois la plus haute fréquence étudiée (Shannon), en pratique 5 à 10 fois.

### 2. Extraction de caractéristiques
- **Analyse modale opérationnelle** : fréquences propres à partir des vibrations ambiantes (vent, trafic), par transformée de Fourier (FFT) ;
- statistiques de déformation, d'inclinaison, d'ouverture de fissures.

### 3. Compensation des effets environnementaux
On apprend la relation normale entre la caractéristique et la température (régression), puis on travaille sur le **résidu** :
$$r = f_{mesurée} - \\hat{f}(T)$$

### 4. Détection d'anomalies
- **Z-score** : $z = (r - \\mu)/\\sigma$ ; alerte si $|z| > 3$.
- **Cartes de contrôle** (Shewhart, CUSUM) pour les dérives lentes.
- **Apprentissage automatique** : forêts d'isolement, auto-encodeurs, analyse en composantes principales, entraînés sur une période de référence « saine ».

### 5. Indicateurs de performance de la détection
$$\\text{Précision} = \\frac{VP}{VP + FP} \\qquad \\text{Rappel} = \\frac{VP}{VP + FN}$$
VP : vraies alertes, FP : fausses alertes, FN : anomalies manquées.`,
  },
  formulas: {
    title: 'Formules essentielles — SHM',
    formulas: [
      {
        name: 'Fréquence propre d’un oscillateur',
        latex: "f = \\frac{1}{2\\pi}\\sqrt{\\frac{k}{m}} \\qquad \\frac{\\Delta k}{k} \\approx 2 \\frac{\\Delta f}{f}",
        description: 'Une perte de rigidité fait baisser la fréquence.',
        vars: [
          ['f', 'Fréquence propre', 'Hz', ''],
          ['k', 'Rigidité', 'N/m', ''],
          ['m', 'Masse', 'kg', ''],
        ],
        rule: 'Une baisse de fréquence de 1 % correspond à une perte de rigidité d’environ 2 %.',
      },
      {
        name: 'Score d’anomalie (z-score)',
        latex: "z = \\frac{r - \\mu}{\\sigma}",
        description: 'Écart normalisé par rapport à la période de référence.',
        vars: [
          ['r', 'Résidu après compensation', 'unité du signal', ''],
          ['\\mu', 'Moyenne de référence', 'unité du signal', ''],
          ['\\sigma', 'Écart type de référence', 'unité du signal', ''],
        ],
        rule: '|z| > 3 : probabilité d’environ 0,3 % sous hypothèse gaussienne.',
      },
      {
        name: 'Tension d’un hauban (corde vibrante)',
        latex: "T = 4 m L^2 \\left( \\frac{f_n}{n} \\right)^2",
        description: 'Estimation de la tension à partir de la fréquence du mode n.',
        vars: [
          ['T', 'Tension', 'N', ''],
          ['m', 'Masse linéique', 'kg/m', ''],
          ['L', 'Longueur vibrante', 'm', ''],
          ['f_n', 'Fréquence du mode n', 'Hz', ''],
        ],
      },
      {
        name: 'Précision et rappel',
        latex: "P = \\frac{VP}{VP + FP} \\qquad R = \\frac{VP}{VP + FN}",
        description: 'Qualité d’un système d’alerte.',
        vars: [
          ['VP', 'Vrais positifs', '-', 'Anomalies réelles détectées.'],
          ['FP', 'Faux positifs', '-', 'Fausses alertes.'],
          ['FN', 'Faux négatifs', '-', 'Anomalies manquées.'],
        ],
      },
    ],
  },
  stepbystep: {
    title: 'Calcul complet — Détecter une baisse de fréquence sur un pont',
    problem: "La première fréquence d'un pont, corrigée de la température, a une moyenne de référence μ = 2,450 Hz et un écart type σ = 0,012 Hz sur un an. Après un choc de poids lourd sur une pile, la fréquence corrigée vaut 2,395 Hz. Y a-t-il anomalie ? Quelle perte de rigidité globale cela représente-t-il ?",
    steps_demo: [
      { n: 1, text: "Résidu : r − μ = 2,395 − 2,450 = −0,055 Hz." },
      { n: 2, text: "z = −0,055 / 0,012 = −4,6 : |z| > 3, anomalie significative." },
      { n: 3, text: "Variation relative : Δf/f = −0,055 / 2,450 = −2,2 %." },
      { n: 4, text: "Perte de rigidité équivalente : Δk/k ≈ 2 × (−2,2 %) = −4,5 %." },
      { n: 5, text: "Action : inspection visuelle détaillée de la pile et des appareils d'appui, sans attendre la prochaine inspection périodique." },
    ],
    result_latex: "z = \\frac{2{,}395 - 2{,}450}{0{,}012} = -4{,}6 \\qquad \\frac{\\Delta k}{k} \\approx 2 \\times (-2{,}2\\ \\%) = -4{,}5\\ \\%",
  },
  units: {
    table: [
      ['Fréquence', 'Hz', 'Hz', '1 Hz = 1 cycle/s'],
      ['Accélération', 'm/s² ou mg', 'g', '1 g = 9,81 m/s²'],
      ['Déformation', 'µm/m (µε)', 'microstrain', '100 µε ≈ 20 MPa dans l’acier'],
      ['Échantillonnage', 'Hz', 'Hz', '≥ 2 × la fréquence maximale étudiée'],
      ['Données', 'Go/jour', 'GB/day', 'À dimensionner avant l’installation'],
    ],
    note: 'Indiquez toujours si une fréquence est brute ou corrigée de la température.',
  },
  hypotheses: {
    items: [
      ['info', 'La détection non supervisée suppose une période de référence représentative de l’état sain, couvrant au moins un cycle saisonnier.'],
      ['info', 'Les fréquences globales sont peu sensibles aux dommages locaux : combiner avec des mesures locales (fissures, déformations).'],
      ['warning', 'Le gel des appuis ou du sol peut augmenter fortement la rigidité en hiver et masquer un dommage.'],
      ['warning', 'Un capteur défaillant produit des anomalies : surveiller aussi l’état des capteurs.'],
      ['tip', 'Réglez le seuil d’alerte avec les gestionnaires pour équilibrer fausses alertes et anomalies manquées.'],
    ],
  },
  simple_examples: {
    examples: [
      {
        title: 'Exemple 1 : tension d’un hauban',
        given: 'm = 50 kg/m ; L = 120 m ; f₁ = 1,05 Hz',
        find: 'T',
        solution_latex: "T = 4 \\times 50 \\times 120^2 \\times 1{,}05^2 = 3{,}18 \\times 10^6\\ \\text{N}",
        result: 'Environ 3 180 kN.',
      },
      {
        title: 'Exemple 2 : seuil d’alerte',
        given: 'μ = 125 µε ; σ = 8 µε ; seuil |z| = 3',
        find: 'Plage normale',
        solution_latex: "125 \\pm 3 \\times 8 = [101 \\, ; \\, 149]\\ \\mu\\varepsilon",
        result: 'Alerte en dehors de 101 à 149 µε.',
      },
      {
        title: 'Exemple 3 : qualité de la détection',
        given: 'Sur un an : 8 vraies alertes, 12 fausses alertes, 2 anomalies manquées',
        find: 'Précision et rappel',
        solution_latex: "P = \\frac{8}{20} = 40\\ \\% \\qquad R = \\frac{8}{10} = 80\\ \\%",
        result: 'Bon rappel, mais trop de fausses alertes : améliorer la compensation de température.',
      },
    ],
  },
  real_examples: {
    title: 'Exemple réel — Le pont Z24 en Suisse',
    examples: [
      {
        context: 'Pont-dalle précontraint étudié avant sa démolition (fin des années 1990)',
        scenario: "Le pont Z24 a été instrumenté pendant près d'un an, puis endommagé progressivement de façon contrôlée (tassement de pile, rupture de câbles). Les données ont montré que la température faisait varier fortement les fréquences, surtout quand le revêtement gelait, mais qu'après compensation les dommages devenaient détectables.",
        decomposition_latex: "f_{mesurée} = \\hat{f}(T) + r \\Rightarrow \\text{dommage visible sur } r \\text{ et non sur } f",
        lesson: "Le jeu de données du Z24 est devenu une référence mondiale : il démontre que la compensation environnementale est indispensable avant toute détection.",
      },
    ],
  },
  diagrams: {
    title: 'Schéma de principe — Chaîne SHM',
    diagram_description: [
      'Capteurs : accéléromètres, jauges, fibres optiques, températures',
      'Acquisition, transmission et stockage des données',
      'Extraction de caractéristiques : fréquences, déformations, ouvertures',
      'Compensation de la température et du trafic',
      'Détection : z-score, cartes de contrôle, apprentissage automatique',
      'Alerte, inspection et décision du gestionnaire',
    ],
  },
  mistakes: {
    items: [
      ['Ignorer la température', 'Fausses alertes saisonnières', 'Modéliser la relation fréquence-température.'],
      ['Période de référence trop courte', 'Variations normales prises pour des anomalies', 'Couvrir au moins un an.'],
      ['Alerte sans procédure', 'Données inutilisées', 'Définir qui agit, comment et dans quel délai.'],
    ],
  },
  tips: {
    tips: [
      'Commencez par une question précise : quel dommage veut-on détecter ?',
      'Placez les capteurs grâce à un modèle numérique (modes à observer).',
      'Prévoyez la maintenance des capteurs et de la transmission.',
      'Combinez les données du SHM et des inspections dans un même outil.',
    ],
  },
  norms: {
    norms: [
      ['ISO 16587', 'Vibrations mécaniques : évaluation des structures par mesures.'],
      ['ISO 18649', 'Évaluation des essais dynamiques des ponts.'],
      ['Instruction technique pour la surveillance et l’entretien des ouvrages d’art (ITSEOA)', 'Cadre français d’inspection des ouvrages d’art.'],
      ['fib / SAMCO', 'Guides européens sur la surveillance des structures.'],
    ],
  },
  exercises: {
    exercises: [
      {
        level: 1,
        text: 'Une fréquence passe de 3,20 Hz à 3,14 Hz. Quelle perte de rigidité approximative ?',
        hint: 'Δk/k ≈ 2 Δf/f.',
        answer_latex: "\\frac{\\Delta f}{f} = -1{,}9\\ \\% \\Rightarrow \\frac{\\Delta k}{k} \\approx -3{,}75\\ \\%",
        answer_text: 'Environ −3,75 %.',
      },
      {
        level: 2,
        text: 'μ = 4,80 Hz, σ = 0,03 Hz. La mesure corrigée vaut 4,72 Hz. Calculer z et conclure.',
        hint: 'Seuil |z| = 3.',
        answer_latex: "z = \\frac{4{,}72 - 4{,}80}{0{,}03} = -2{,}7",
        answer_text: '|z| = 2,7 < 3 : pas d’alerte, mais surveiller la tendance (carte CUSUM).',
      },
      {
        level: 3,
        text: 'La fréquence du hauban de l’exemple 1 passe à 0,98 Hz. Calculer la nouvelle tension et la perte.',
        hint: 'T ∝ f².',
        answer_latex: "T = 4 \\times 50 \\times 120^2 \\times 0{,}98^2 = 2{,}77 \\times 10^6\\ \\text{N} \\Rightarrow -12{,}9\\ \\%",
        answer_text: 'Environ 2 770 kN, soit 13 % de tension en moins : inspection des ancrages nécessaire.',
      },
    ],
  },
  quiz: {
    title: 'Quiz — SHM et détection d’anomalies',
    questions: [
      { q: 'Comment évolue la fréquence propre quand la rigidité baisse ?', options: ['Elle augmente', 'Elle baisse', 'Elle ne change pas'], correct: 1, explain: 'f ∝ √(k/m).' },
      { q: 'Quel facteur perturbe le plus les fréquences mesurées ?', options: ['La couleur de l’ouvrage', 'La température', 'L’heure de mesure'], correct: 1, explain: 'La température modifie rigidités et conditions d’appui.' },
      { q: 'Que mesure le rappel d’un système d’alerte ?', options: ['La part des anomalies réelles détectées', 'Le nombre de capteurs', 'Le coût'], correct: 0, explain: 'R = VP / (VP + FN).' },
    ],
  },
  exam_questions: {
    questions: [
      'Décrivez la chaîne d’un système SHM, du capteur à la décision.',
      'Expliquez pourquoi et comment compenser les effets de la température.',
      'Comparez les méthodes statistiques et d’apprentissage automatique de détection.',
    ],
  },
  interview_questions: {
    questions: [
      ['Quelle est la limite principale du SHM ?', 'La sensibilité aux conditions environnementales et le faible effet des dommages locaux sur les indicateurs globaux ; il faut une bonne compensation et des capteurs bien placés.'],
      ['Comment évaluez-vous un algorithme de détection ?', 'Par la précision et le rappel sur des données de référence, idéalement avec des dommages simulés ou des cas réels connus, et par le coût des fausses alertes pour le gestionnaire.'],
    ],
  },
  practical_case: {
    title: 'Cas pratique — Concevoir le SHM d’un pont mixte',
    scenario: 'Pont mixte de 3 travées (40 + 60 + 40 m), première fréquence verticale estimée à 1,8 Hz, fissuration suspectée au droit d’une pile.',
    description: 'Définir l’instrumentation et la règle d’alerte.',
    resolutions: [
      "\\text{Accéléromètres à mi-travées et sur piles} ; f_{éch} \\geq 10 \\times 1{,}8 \\approx 20\\ \\text{Hz (on retient 50 Hz)}",
      "\\text{Fibres optiques et capteurs de fissures sur la zone de pile} + \\text{thermocouples}",
      "\\text{Règle} : r = f - \\hat{f}(T) ; \\ \\text{alerte si } |z| > 3 \\text{ sur 3 jours consécutifs}",
    ],
    conclusion: 'L’instrumentation combine des indicateurs globaux (fréquences) et locaux (fissures) ; la règle sur plusieurs jours limite les fausses alertes liées au trafic exceptionnel.',
  },
  summary: {
    content: `### Le SHM en 5 points
1. Capteurs permanents + analyse automatique.
2. $f \\propto \\sqrt{k/m}$ : $\\Delta k/k \\approx 2\\,\\Delta f/f$.
3. Compenser la température avant de détecter.
4. Détection : z-score, cartes de contrôle, apprentissage non supervisé.
5. Évaluer par précision et rappel ; toujours une procédure d'action.`,
  },
  key_points: {
    points: [
      'f ∝ √(k/m)',
      'Δk/k ≈ 2 Δf/f',
      'Compensation de température',
      'Alerte si |z| > 3',
      'Précision et rappel',
    ],
  },
  self_assessment: {
    objectives: [
      'Je connais les capteurs et la chaîne SHM',
      'Je sais relier une baisse de fréquence à une perte de rigidité',
      'Je sais calculer un z-score et fixer un seuil',
      'Je sais évaluer un système d’alerte',
      "J'ai réussi le quiz avec au moins 2 bonnes réponses sur 3",
    ],
  },
});
