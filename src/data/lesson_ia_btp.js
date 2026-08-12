// ── Lesson: IA, Machine Learning & Computer Vision — Module 35 ───────────────
export const lesson_ia_btp = {
  moduleId: 35,
  slug: 'carriere',
  lessonIndex: 1,
  title: "IA, Machine Learning & Vision par Ordinateur appliqués au Génie Civil",
  subtitle: "Module 35 — Intelligence Artificielle & Innovation BTP",
  level: 'Avancé',
  duration: '45h',
  diagramType: 'rebar_beam',
  tags: ['IA', 'Machine Learning', 'Computer Vision', 'CNN', 'YOLO', 'Optimisation Topologique', 'Inspection', 'Drones'],

  steps: [
    {
      id: 1,
      key: 'definition',
      title: "Définition — L'Intelligence Artificielle appliquée au BTP",
      icon: '📖',
      type: 'definition',
      fr: 'Machine Learning, Deep Learning (CNN), Vision par Ordinateur & Generative Design',
      en: 'AI, Machine Learning, Computer Vision & Generative Design in Civil Engineering',
      metier: "Pratiquée par les Data Scientists BTP, ingénieurs en IA appliquée aux structures, spécialistes de l'inspection par drones et concepteurs de jumeaux numériques intelligents.",
      content: `L'**Intelligence Artificielle (IA) et le Machine Learning (ML)** appliqués au génie civil révolutionnent la façon dont les ouvrages sont conçus, inspectés et maintenus. Ils associent la puissance des algorithmes d'apprentissage automatique à la physique des structures pour automatiser les tâches complexes et optimiser l'utilisation de la matière.

### Les 4 grands domaines d'application de l'IA en génie civil :
1. **La Vision par Ordinateur (Computer Vision & Deep Learning)** : Réseaux de neurones convolutifs (CNN, YOLOv8, ResNet) capables d'analyser automatiquement des milliers de photos prises par drones pour **détecter et mesurer les fissures**, désaffleurements et éclatements de béton.
2. **La Prédiction des Propriétés des Matériaux** : Algorithmes de régression (XGBoost, Random Forest) prédisant la résistance à 28 jours du béton $f_{ck}$ d'après sa composition et les conditions de cure.
3. **L'Optimisation Topologique (Generative Design)** : Algorithmes d'IA générative sculptant la forme optimale des pièces de structure (poutres, nœuds d'assemblage) pour réduire la matière de $30\\% \\text{ à } 50\\%$ sous contraintes de Von Mises.
4. **La Surveillance du Chantier & Sécurité HSE** : Détection en temps réel par caméras du port des EPI (casque, gilet) et des intrusions dans les zones de danger des engins.

> 💡 **Le principe de l'inspection par IA** : Un drone survolant un pont prend 2 000 photos HD. Le modèle d'IA identifie, segmente et cartographie en 3D 100% des fissures de largeur $> 0{,}2\\text{ mm}$ en quelques minutes, tâche qui prenait des semaines à un inspecteur !`,
    },

    {
      id: 2,
      key: 'importance',
      title: "Pourquoi l'IA devient indispensable dans les métiers du BTP",
      icon: '⚠️',
      type: 'importance',
      content: `Le volume des données générées par les capteurs IoT, les scanners 3D laser, les maquettes BIM et les drones dépasse la capacité d'analyse humaine.

- **Inspection des ouvrages d'art à grande échelle** : Traitement automatisé des millions de km de rails, routes, ponts et barrages sans exposer les inspecteurs à des travaux en hauteur dangereux.
- **Réduction drastique de l'empreinte carbone** : L'optimisation topologique permet de fabriquer des structures métalliques ou en béton 3D avec 40% de matière en moins.
- **Prévention des pannes par maintenance prédictive** : Analyse des séries temporelles de capteurs géotechniques et vibratoires pour alerter avant l'apparition d'un désordre irréversible.

> ⚠️ **Règle d'or** : "L'IA est un outil d'aide à la décision, pas un substitut à l'ingénieur ! L'ingénieur doit conserver le contrôle 'Human-in-the-Loop' et valider physiquement les prédictions des modèles d'IA."`,
    },

    {
      id: 3,
      key: 'applications',
      title: "Applications terrain — Algorithmes & Cas d'usage",
      icon: '🏗️',
      type: 'applications',
      examples: [
        {
          context: "Détection Automatique de Fissures par Drone & YOLOv8",
          text: "Survol d'un barrage béton par drone orthophotographique. Segmentation d'images par réseau CNN détectant la longueur et l'ouverture des fissures.",
        },
        {
          context: "Optimisation de la Formulation des Bétons Bas Carbone",
          text: "Entraînement d'un modèle Random Forest sur 10 000 formulations de béton pour prédire la résistance à la compression $f_{ck}$ et l'empreinte $CO_2$.",
        },
        {
          context: "Generative Design pour Poteaux & Poutres imprimés en 3D",
          text: "Algorithme génératif dessinant une structure alvéolaire optimale sous charge, réduite de 45% en poids de béton par rapport à une section rectangulaire.",
        },
        {
          context: "Contrôle Automatisé du Port des EPI sur Chantier",
          text: "Système de vision par ordinateur connecté aux caméras du chantier alertant le chef de chantier lorsqu'un ouvrier pénètre sans gilet ou casque.",
        },
        {
          context: "Analyse Prédictive des Tassements de Tunneliers (TBM)",
          text: "Modèle de réseau de neurones récurrents (LSTM) prédisant les tassements de surface en fonction des pressions de confinement du tunnelier.",
        },
      ],
    },

    {
      id: 4,
      key: 'theory',
      title: "Théorie — Réseaux Convolutifs (CNN), Matrice de Confusion & Generative Design",
      icon: '📐',
      type: 'theory',
      diagramType: 'rebar_beam',
      content: `### 1. Fonctionnement d'un Réseau Convolutif (CNN pour la détection de fissures)

Un modèle de Computer Vision (ex: ResNet / YOLO) transforme une matrice de pixels $I(x,y)$ en prédiction de classe (ex: \`Fissure\` vs \`Béton Sain\`) :

$$S(x,y) = (I * K)(x,y) = \\sum_{m} \\sum_{n} I(x-m, y-n) \\cdot K(m,n)$$

- $K(m,n)$ = filtre de convolution apprenant à repérer les contours et les contrastes de couleur des fissures.
- **Layers** : Convolutions $\\to$ Rectified Linear Unit (ReLU) $\\to$ Max-Pooling (Réduction) $\\to$ Couche Dense Softmax.

### 2. Évaluation de la Précision du Modèle (Matrice de Confusion)

- **Précision (Precision)** : Proportions de vraies fissures parmi toutes les fissures détectées par l'IA :

$$P = \\frac{TP}{TP + FP}$$

- **Rappel (Recall)** : Proportions de fissures réelles détectées par l'IA :

$$R = \\frac{TP}{TP + FN}$$

- **Score F1 (F1-Score)** : Moyenne harmonique de la précision et du rappel :

$$F_1 = 2 \\cdot \\frac{P \\cdot R}{P + R}$$

### 3. Principe de l'Optimisation Topologique (Generative Design)

Minimiser la masse de béton/acier $V(\\mathbf{x})$ sous la contrainte de ne pas dépasser la contrainte admissible de Von Mises $\\sigma_{adm}$ :

$$\\min_{\\mathbf{x}} V(\\mathbf{x}) = \\sum_{i=1}^N x_i \\cdot v_i \\qquad \\text{sujet à : } \\mathbf{K}(\\mathbf{x}) \\mathbf{U} = \\mathbf{F} \\quad \\text{et} \\quad \\sigma_{VM, i} \\le \\sigma_{adm}$$`,
    },

    {
      id: 5,
      key: 'formulas',
      title: "Formules essentielles — Métriques d'IA & Vision par Ordinateur",
      icon: '🔢',
      type: 'formulas',
      diagramType: 'rebar_beam',
      formulas: [
        {
          name: "Score F1 (Équilibre Précision / Rappel)",
          latex: "F_1 = 2 \\cdot \\frac{P \\cdot R}{P + R} \\quad (F_1 \\ge 0{,}90 \\text{ requis pour valider un modèle d'inspection})",
          description: "P = TP / (TP + FP), R = TP / (TP + FN). Évite les faux positifs et les fissures manquées.",
        },
        {
          name: "Intersection over Union (IoU) pour la localisation de fissures",
          latex: "IoU = \\frac{\\text{Surface de l'intersection des boîtes}}{\\text{Surface de l'union des boîtes}} \\ge 0{,}50",
          description: "Mesure le chevauchement entre la boîte de détection de l'IA et la position réelle de la fissure.",
        },
        {
          name: "Erreur Quadratique Moyenne (MSE - Régression de résistance)",
          latex: "MSE = \\frac{1}{n} \\sum_{i=1}^{n} (y_i - \\hat{y}_i)^2 \\quad [\\text{MPa}^2]",
          description: "y_i = résistance réelle mesurée sur éprouvette, y_chapeau = résistance prédite par l'IA.",
        },
      ],
    },

    {
      id: 6,
      key: 'stepbystep',
      title: "Calcul complet — Évaluation d'un modèle d'IA pour l'inspection d'un tablier de pont",
      icon: '🔬',
      type: 'stepbystep',
      problem: "Un modèle d'IA de Computer Vision (YOLOv8) est entraîné pour détecter les fissures sur 1 000 photos HD d'un pont en béton. Le test sur un jeu de validation de 200 images donne la matrice de confusion suivante : \n- Vrais Positifs (TP - Fissures réelles bien détectées) = 85. \n- Faux Positifs (FP - Fausses alarmes) = 5. \n- Faux Négatifs (FN - Fissures réelles manquées) = 10. \n- Vrais Négatifs (TN - Béton sain bien classé) = 100. \n1) Calculer la Précision P. 2) Calculer le Rappel R. 3) Calculer le score F1-Score. 4) Conclure sur la fiabilité du modèle.",
      steps_demo: [
        { n: 1, text: "Calcul de la Précision P : P = TP / (TP + FP) = 85 / (85 + 5) = 85 / 90 = 0,944 (94,4% des détections sont de vraies fissures)" },
        { n: 2, text: "Calcul du Rappel R : R = TP / (TP + FN) = 85 / (85 + 10) = 85 / 95 = 0,895 (89,5% des fissures existantes ont été trouvées)" },
        { n: 3, text: "Calcul du F1-Score : F1 = 2 × (P × R) / (P + R) = 2 × (0,944 × 0,895) / (0,944 + 0,895) = 2 × 0,845 / 1,839 = 1,690 / 1,839 = 0,919 (91,9%)" },
        { n: 4, text: "Conclusion : Le F1-Score est supérieur au seuil exigé de 0,90 (91,9%). Le modèle d'IA est validé pour l'inspection pré-opérationnelle du pont !" },
      ],
      result_latex: "P = \\textbf{94{,}4\\%} \\qquad R = \\textbf{89{,}5\\%} \\qquad F_1 = \\textbf{91{,}9\\%} \\quad (\\text{Modèle d'IA Validé}) \\quad \\checkmark",
    },

    {
      id: 7,
      key: 'units',
      title: "Unités & Métriques d'Intelligence Artificielle — Tableau de référence",
      icon: '📏',
      type: 'units',
      table: [
        { grandeur: "Précision (Precision)", si: "Pourcentage [%]", imperial: "%", conversion: "Proportion de vraies détections parmi toutes les alertes de l'IA" },
        { grandeur: "Rappel (Recall / Sensibilité)", si: "Pourcentage [%]", imperial: "%", conversion: "Proportion de défauts réels identifiés par l'IA" },
        { grandeur: "F1-Score", si: "Adimensionnel (0,00 à 1,00)", imperial: "-", conversion: "Moyenne harmonique de la précision et du rappel (Proche de 1,0 = Excellent)" },
        { grandeur: "Vitesse d'inférence (FPS)", si: "Images par seconde [FPS]", imperial: "fps", conversion: "YOLOv8 ≈ 30 à 60 FPS sur GPU (Traitement vidéo en temps réel)" },
        { grandeur: "Volume du jeu de données (Dataset)", si: "Nombre d'images annotées (ex: 5 000 images)", imperial: "images", conversion: "Un jeu de données volumineux et varié est la clé de la précision de l'IA" },
      ],
      note: "⚠️ ATTENTION : Un modèle d'IA qui affiche 99% de précision sur son jeu d'entraînement mais 60% sur des photos réelles souffre de **surentraînement (Overfitting)** !",
    },

    {
      id: 8,
      key: 'hypotheses',
      title: "Hypothèses & principes de déploiement de l'IA",
      icon: '📋',
      type: 'hypotheses',
      items: [
        { type: 'info', text: "Le succès d'un modèle de Vision par Ordinateur repose sur la qualité du marquage (Labeling/Annotation) des boîtes englobantes et des masques de segmentation." },
        { type: 'info', text: "Data Augmentation : Augmenter artificiellement le jeu de données en appliquant des rotations, variations de luminosité et flous pour rendre l'IA robuste aux conditions météo." },
        { type: 'warning', text: "ATTENTION : Ne jamais utiliser un modèle d'IA de détection de fissures entraîné uniquement sur du béton sec pour inspecter un ouvrage humide ou sous la pluie !" },
        { type: 'warning', text: "Biais d'entraînement : Si le jeu de données ne contient que des fissures verticales, le modèle d'IA manquera toutes les fissures horizontales de cisaillement." },
        { type: 'tip', text: "Transfer Learning : Utiliser un modèle pré-entraîné sur des millions d'images (ex: ResNet50 / YOLOv8) et ajuster uniquement les dernières couches (Fine-Tuning) pour gagner 90% de temps." },
      ],
    },

    {
      id: 9,
      key: 'simple_examples',
      title: "Exemples guidés — Matrice de confusion & Generative Design",
      icon: '✏️',
      type: 'examples_simple',
      examples: [
        {
          title: "Exemple 1 : Calcul du score F1 d'un détecteur de port de casque HSE",
          given: "Sur 500 ouvriers contrôlés par caméra : TP = 450, FP = 10, FN = 20",
          find: "La précision P, le rappel R et le F1-score",
          solution_latex: "P = \\frac{450}{460} = 0{,}978 \\qquad R = \\frac{450}{470} = 0{,}957 \\qquad F_1 = 2 \\times \\frac{0{,}978 \\times 0{,}957}{0{,}978 + 0{,}957} = 0{,}967",
          result: "F1-Score = 96,7% (Excellente fiabilité pour la sécurité du chantier).",
        },
        {
          title: "Exemple 2 : Gain de masse par Optimisation Topologique",
          given: "Poutre rectangulaire classique de masse M0 = 1 200 kg. Poutre générée par IA (Generative Design) de masse M1 = 680 kg sous les mêmes contraintes",
          find: "Le pourcentage d'économie de matériau",
          solution_latex: "\\text{Gain} = \\frac{1200 - 680}{1200} \\times 100 = \\frac{520}{1200} \\times 100 = 43{,}33\\%",
          result: "Économie de 43,3% de matériau (béton/acier) !",
        },
        {
          title: "Exemple 3 : Temps de traitement d'un carottage photo par IA",
          given: "Inspection manuelle = 15 minutes par photo. Traitement IA sur GPU = 0,05 seconde par photo (20 FPS)",
          find: "Le facteur d'accélération du traitement pour 1 000 photos",
          solution_latex: "\\text{Temps humain} = 1000 \\times 15 \\text{ min} = 250 \\text{ heures} \\qquad \\text{Temps IA} = \\frac{1000}{20 \\text{ FPS}} = 50 \\text{ secondes}",
          result: "L'IA traite en 50 secondes ce qui nécessitait 250 heures de travail humain !",
        },
      ],
    },

    {
      id: 10,
      key: 'real_examples',
      title: "Exemple réel — L'Inspection des 30 000 km de Voies Ferrées de la SNCF",
      icon: '🏢',
      type: 'examples_real',
      diagramType: 'rebar_beam',
      examples: [
        {
          context: "Inspection continue des rails, caténaires et balises du réseau ferroviaire français",
          scenario: "Déploiement de rames d'inspection 'TEGV' équipées de caméras HD et d'algorithmes d'IA (Deep Learning) analysant le réseau à 300 km/h.",
          decomposition_latex: "\\text{Détection automatique de 99{,}2\\% des micro-fissures de rail et boulons desserrés}",
          lesson: "L'IA permet de passer d'une maintenance réactive à une maintenance prédictive, évitant les déraillements tout en réduisant les coûts d'inspection de 60%.",
        },
      ],
    },

    {
      id: 11,
      key: 'diagrams',
      title: "Schéma d'un Réseau Neuronal Convolutif (CNN) & Generative Design",
      icon: '📊',
      type: 'interactive_diagram',
      diagramType: 'rebar_beam',
      description: "Visualisez l'architecture d'un réseau CNN pour la détection de dégradations sur le béton, le principe du masque de segmentation 3D et le résultat d'un Generative Design.",
      diagram_description: [
        "Architecture CNN : Image d'entrée, couches de convolution (Extraction de features), Pooling et classification Softmax",
        "Matrice de Confusion : Répartition des Vrais Positifs (TP), Faux Positifs (FP), Faux Négatifs (FN) et Vrais Négatifs (TN)",
        "Generative Design : Évolution de la forme d'une poutre de l'état massif initial à l'état alvéolaire optimisé",
      ],
    },

    {
      id: 12,
      key: 'mistakes',
      title: "Erreurs classiques lors du déploiement de l'IA en BTP",
      icon: '⛔',
      type: 'mistakes',
      items: [
        {
          mistake: "Surentraîner le modèle d'IA (Overfitting)",
          trap: "Entraîner le modèle jusqu'à obtenir 100% de réussite sur un petit jeu de 50 photos d'un seul chantier",
          fix: "Le modèle échouera lamentablement sur tout autre ouvrage ! Utiliser la validation croisée (Cross-Validation) et un jeu de test indépendant.",
        },
        {
          mistake: "Négliger la validation physique des résultats par un ingénieur",
          trap: "Valider la conformité d'un pont uniquement sur la sortie automatisée d'un algorithme d'IA",
          fix: "Principe du 'Human-in-the-Loop' : L'IA pré-trie et alerte, mais l'ingénieur certifié valide la décision de sécurité.",
        },
        {
          mistake: "Sous-estimer l'effet des ombres et de la luminosité sur la Vision par Ordinateur",
          trap: "Tester un modèle de détection d'EPI en laboratoire éclairé et le déployer sur un chantier sombre",
          fix: "Enrichir la base de données avec des images sous le soleil direct, sous la pluie, de nuit et avec ombres portées.",
        },
      ],
    },

    {
      id: 13,
      key: 'tips',
      title: "Astuces du Data Scientist & Ingénieur IA BTP",
      icon: '💡',
      type: 'tips',
      tips: [
        "Bibliothèques Python de référence pour l'IA BTP : PyTorch, TensorFlow, Ultralytics YOLOv8, OpenCV, Scikit-Learn, Roboflow (pour l'annotation d'images).",
        "Data Augmentation systématique : Appliquer un miroir horizontal, des variations de contraste (+/- 20%) et de légères rotations sur les images de fissures pour tripler artificiellement la taille du dataset.",
        "Seuil de confiance (Confidence Threshold) : Régler le seuil de confiance de détection à 0,50 pour équilibrer la détection des micro-fissures sans multiplier les fausses alertes.",
        "Generative Design sous Autodesk Fusion / Inventor : Appliquer les contraintes de charges réelles de l'Eurocode pour générer des pièces métalliques imprimables en 3D.",
      ],
    },

    {
      id: 14,
      key: 'normes',
      title: "Normes & Réglementation de l'Intelligence Artificielle",
      icon: '📜',
      type: 'norms',
      norms: [
        { code: "Règlement Européen sur l'IA (EU AI Act)", description: "Cadre légal européen classant les systèmes d'IA selon leur niveau de risque (Exigences de transparence et contrôle humain pour les infrastructures critiques)." },
        { code: "ISO/IEC 22989", description: "Technologies de l'information — Intelligence artificielle — Concepts et terminologie." },
        { code: "ISO/IEC 42001", description: "Système de management de l'intelligence artificielle — Exigences relatives aux organisations." },
      ],
    },

    {
      id: 15,
      key: 'exercises',
      title: "Exercices IA & Machine Learning — 3 niveaux",
      icon: '✍️',
      type: 'exercises',
      exercises: [
        {
          id: 'ex_ia_1',
          number: 1,
          difficulty: 'Facile',
          text: "Un modèle de détection de fissures donne sur un lot de test : 90 Vrais Positifs (TP) et 10 Faux Positifs (FP). Calculer sa Précision P.",
          hint: "P = TP / (TP + FP).",
          answer_latex: "P = \\frac{90}{90 + 10} = \\frac{90}{100} = 0{,}90 = 90{,}0\\%",
          answer_text: "Précision P = 90,0%.",
        },
        {
          id: 'ex_ia_2',
          number: 2,
          difficulty: 'Moyen',
          text: "Le même modèle à un Rappel R = 80,0% et une Précision P = 90,0%. Calculer son score F1-Score.",
          hint: "F1 = 2 × (P × R) / (P + R).",
          answer_latex: "F_1 = 2 \\times \\frac{0{,}90 \\times 0{,}80}{0{,}90 + 0{,}80} = 2 \\times \\frac{0{,}72}{1{,}70} = \\frac{1{,}44}{1{,}70} = 0{,}847 = 84{,}7\\%",
          answer_text: "F1-Score = 84,7%.",
        },
        {
          id: 'ex_ia_3',
          number: 3,
          difficulty: 'Difficile',
          text: "Un algorithme de régression XGBoost prédit la résistance du béton avec une Erreur Quadratique Moyenne MSE = 4,0 MPa². Calculer l'Écart-type de l'Erreur (Root Mean Squared Error RMSE).",
          hint: "RMSE = √MSE.",
          answer_latex: "RMSE = \\sqrt{4{,}0} = 2{,}00 \\text{ MPa}",
          answer_text: "RMSE = 2,0 MPa (L'IA prédit la résistance à ± 2,0 MPa près).",
        },
      ],
    },

    {
      id: 16,
      key: 'corrections',
      title: "Corrections détaillées",
      icon: '✅',
      type: 'corrections',
      note: "Retrouvez le détail des architectures de réseaux de neurones et des matrices de confusion en cliquant sur 'Voir la correction'.",
    },

    {
      id: 17,
      key: 'quiz',
      title: "Quiz Intelligence Artificielle BTP — 3 questions",
      icon: '🎯',
      type: 'quiz',
      questions: [
        {
          id: 'q_ia_1',
          question: "Quel type d'architecture de Deep Learning est particulièrement adapté au traitement et à la détection de défauts sur des images 2D (Photos de fissures) ?",
          options: [
            { id: 'a', text: "Les réseaux de neurones convolutifs (CNN - Convolutional Neural Networks)" },
            { id: 'b', text: "Un simple fichier Excel" },
            { id: 'c', text: "Un régulateur PID" },
          ],
          correct: 'a',
          explanation: "Les réseaux convolutifs (CNN) comme YOLOv8 ou ResNet sont spécialement conçus pour extraire les caractéristiques visuelles des images 2D.",
        },
        {
          id: 'q_ia_2',
          question: "Qu'est-ce que l'Optimisation Topologique (Generative Design) en ingénierie des structures ?",
          options: [
            { id: 'a', text: "La peinture des structures" },
            { id: 'b', text: "Un algorithme d'IA qui sculpte la forme optimale d'une pièce pour en réduire la masse tout en garantissant la résistance mécanique" },
            { id: 'c', text: "Le nettoyage du chantier" },
          ],
          correct: 'b',
          explanation: "Le Generative Design élimine la matière inutile là où les contraintes sont faibles, créant des pièces alvéolaires ultra-légères et résistantes.",
        },
        {
          id: 'q_ia_3',
          question: "Que signifie le principe 'Human-in-the-Loop' dans le déploiement de l'IA en génie civil ?",
          options: [
            { id: 'a', text: "Remplacer tous les ingénieurs par des robots" },
            { id: 'b', text: "L'IA alerte et pré-analyse, mais l'ingénieur humain certifié valide la décision finale sur les ouvrages critiques" },
            { id: 'c', text: "Ne jamais utiliser d'ordinateur" },
          ],
          correct: 'b',
          explanation: "Pour des raisons de responsabilité juridique et de sécurité publique, l'ingénieur humain conserve le contrôle et valide les prédictions de l'IA.",
        },
      ],
    },

    {
      id: 18,
      key: 'exam_questions',
      title: "Questions d'examen — Master IA & Génie Civil",
      icon: '🎓',
      type: 'exam',
      questions: [
        "Présentez l'architecture d'un modèle de segmentation sémantique (U-Net) pour la mesure du pixel-level de l'ouverture des fissures de béton.",
        "Expliquez le fonctionnement des algorithmes d'apprentissage par renforcement (Reinforcement Learning) pour le pilotage autonome des engins de terrassement.",
      ],
    },

    {
      id: 19,
      key: 'interview_questions',
      title: "Questions d'entretien — Ingénieur IA BTP / Data Scientist",
      icon: '💼',
      type: 'interview',
      questions: [
        {
          question: "Comment gérez-vous le problème du manque d'images annotées (Data Scarcity) pour entraîner un modèle de détection de défaillances rares ?",
          answer_hint: "Utiliser 3 techniques : 1. Transfer Learning (pré-entraînement sur ImageNet/COCO). 2. Data Augmentation poussée (rotations, filtres, variations de contraste). 3. Génération d'images synthétiques réalistes par des réseaux adverses génératifs (GANs) ou moteurs 3D (Unreal Engine/Unity).",
        },
      ],
    },

    {
      id: 20,
      key: 'practical_case',
      title: "Cas pratique — Déploiement d'une flotte de drones d'inspection IA sur 20 barrages",
      icon: '🔧',
      type: 'practical',
      scenario: "Inspection annuelle automatisée de 20 barrages en béton par drones photogrammétriques et modèle YOLOv8.",
      description: "Traitement de 50 000 photos HD et cartographie 3D des désordres.",
      resolution_latex_1: "\\text{Détection automatisée : } 340 \\text{ fissures répertoriées avec ouverture } > 0{,}30 \\text{ mm}",
      resolution_latex_2: "\\text{Temps de traitement total : } 4 \\text{ heures (contre 6 mois d'inspection manuelle à la corde)}",
      conclusion: "Rapport d'auscultation validé par les experts géotechniciens avec gain de temps de 95%.",
    },

    {
      id: 21,
      key: 'summary',
      title: "Résumé exécutif — L'IA dans le BTP en 6 points",
      icon: '📋',
      type: 'summary',
      content: `### L'IA dans le BTP en 6 points clés

1. **Computer Vision (CNN/YOLO)** : Inspection automatique des fissures et désordres par drone.
2. **Machine Learning Régression** : Prédiction de la résistance du béton d'après sa formulation.
3. **Generative Design** : Sculptage de structures optimisées réduisant la matière de 40%.
4. **Métriques de Validation** : Précision, Rappel et F1-Score ($F_1 \ge 0{,}90$).
5. **Sécurité HSE** : Caméras intelligentes contrôlant le port des EPI en temps réel.
6. **Human-in-the-Loop** : L'ingénieur humain valide toujours les décisions de l'IA.`,
    },

    {
      id: 22,
      key: 'key_points',
      title: "Points clés à mémoriser — IA & Innovation",
      icon: '⭐',
      type: 'keypoints',
      points: [
        "F1-Score = Moyenne harmonique de la Précision et du Rappel",
        "CNN / YOLOv8 : Réseaux de neurones phares pour l'inspection d'images",
        "Generative Design : Économie de 30% à 50% de béton/acier",
        "Data Augmentation indispensable pour éviter l'Overfitting",
        "Human-in-the-Loop : Contrôle humain final obligatoire sur les ouvrages",
      ],
    },

    {
      id: 23,
      key: 'self_assessment',
      title: "Auto-évaluation — IA & Innovation BTP",
      icon: '🏆',
      type: 'self_assessment',
      description: "Validez vos compétences en IA et vision par ordinateur appliquées au génie civil :",
      objectives: [
        "Je comprends l'architecture d'un modèle CNN pour l'inspection d'images",
        "Je sais calculer et interpréter la matrice de confusion, la précision, le rappel et le score F1",
        "Je maîtrise les concepts de Generative Design et de prédiction par Machine Learning",
        "J'ai résolu les 3 exercices d'IA BTP avec succès",
        "J'ai obtenu 3/3 au quiz d'intelligence artificielle",
      ],
    },
  ],

  quickQuiz: {
    question: "Quelle métrique est la moyenne harmonique de la Précision et du Rappel pour évaluer un modèle d'IA d'inspection ?",
    options: [
      { id: 'a', label: "A) Le score F1-Score" },
      { id: 'b', label: "B) Le coefficient Ka" },
      { id: 'c', label: "C) Le pH du béton" },
    ],
    correct: 'a',
    explanation: "Le score F1 (F1-Score) est la moyenne harmonique de la précision et du rappel (F1 = 2 P·R / (P+R)).",
  },
};
