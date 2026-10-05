// ── Lesson: Consolidation et tassements — Module 13 ───────────────────────────
import { buildLesson } from './build_lesson.js';

export const lesson_consolidation_tassements = buildLesson({
  moduleId: 13,
  slug: 'consolidation_tassements',
  lessonIndex: 4,
  title: "Consolidation & Tassements : Diffusion des Contraintes, Œdomètre et Évolution dans le Temps",
  subtitle: 'Module 13 — Géotechnique & Mécanique des sols',
  level: 'Avancé',
  duration: '12h',
  diagramType: 'soil_profile',
  tags: ['Géotechnique', 'Tassement', 'Consolidation', 'Œdomètre', 'Indice de compression', 'Coefficient c_v', 'Contraintes effectives'],
}, {
  definition: {
    title: "Définition — Pourquoi et comment un sol s'enfonce",
    fr: 'Tassement et consolidation des sols',
    en: 'Settlement and consolidation',
    metier: "Utilisée pour les fondations de bâtiments, les remblais routiers sur sols mous, les réservoirs et les ouvrages sensibles aux déplacements.",
    content: `Sous une charge, un sol se comprime : c'est le **tassement**. On distingue :
1. le **tassement immédiat**, dû à la déformation du squelette sans changement de volume (sols fins saturés) ou à la mise en place rapide des grains (sables) ;
2. le **tassement de consolidation primaire**, dans les sols fins saturés : l'eau des pores doit être expulsée pour que le sol se comprime, ce qui peut prendre des mois ou des années ;
3. le **fluage** (consolidation secondaire), lent et continu.

### Le principe des contraintes effectives (Terzaghi)
$$\\sigma' = \\sigma - u$$
Seule la contrainte effective $\\sigma'$, transmise par les grains, déforme le sol. Lors d'un chargement rapide d'une argile saturée, l'eau reprend d'abord la surcharge (surpression interstitielle), puis la transfère progressivement aux grains en s'évacuant.

> 💡 Les sables tassent pendant la construction ; les argiles continuent de tasser des années après.`,
  },
  importance: {
    content: `- **Fonctionnalité** : un tassement total excessif casse les réseaux enterrés et crée des marches aux seuils.
- **Désordres** : les **tassements différentiels** fissurent les murs, faussent les menuiseries et font pencher les bâtiments.
- **Planning** : sur sols mous, il faut parfois attendre la consolidation (préchargement, drains verticaux) avant de construire.
- **Coût** : un mauvais choix de fondation (superficielle au lieu de profonde) se paie très cher en reprises en sous-œuvre.

> ⚠️ **À retenir** : la tour de Pise penche à cause d'un tassement différentiel d'une couche d'argile compressible.`,
  },
  applications: {
    examples: [
      ['Remblai routier sur sol mou', 'Préchargement et drains verticaux pour accélérer la consolidation.'],
      ['Radier de bâtiment', 'Calcul du tassement total et différentiel sous les zones les plus chargées.'],
      ['Réservoir de stockage', 'Suivi des tassements lors du premier remplissage en eau (épreuve).'],
      ['Extension d’un bâtiment', 'Joint de rupture entre l’existant (déjà consolidé) et l’extension.'],
      ['Rabattement de nappe', 'Tassement des terrains voisins dû à l’augmentation des contraintes effectives.'],
    ],
  },
  theory: {
    title: 'Théorie — Contraintes, compressibilité et temps',
    content: `### 1. Diffusion des contraintes : méthode 2:1
Sous une semelle rectangulaire $B \\times L$ chargée à $q$, la surcharge à la profondeur $z$ est approximée par :
$$\\Delta\\sigma(z) = \\frac{q \\, B \\, L}{(B + z)(L + z)}$$

### 2. Tassement œdométrique d'une couche argileuse normalement consolidée
$$s = \\frac{C_c}{1 + e_0} \\, H \\, \\log_{10}\\left(\\frac{\\sigma'_{v0} + \\Delta\\sigma}{\\sigma'_{v0}}\\right)$$
Pour une argile **surconsolidée** (déjà chargée par le passé), on utilise l'indice de gonflement $C_s$ (5 à 10 fois plus faible) tant que la contrainte reste inférieure à la contrainte de préconsolidation $\\sigma'_p$.

### 3. Méthode du module œdométrique
Pour des couches minces : $s = \\sum \\Delta\\sigma_i \\, h_i / E_{oed,i}$.

### 4. Évolution dans le temps
Le degré de consolidation $U$ dépend du **facteur temps** :
$$T_v = \\frac{c_v \\, t}{H_{dr}^2}$$
$H_{dr}$ est la longueur de drainage : la moitié de l'épaisseur si la couche est drainée des deux côtés. Valeurs utiles : $U = 50\\,\\%$ pour $T_v = 0{,}197$ ; $U = 90\\,\\%$ pour $T_v = 0{,}848$ ; et $T_v \\approx \\frac{\\pi}{4} U^2$ pour $U < 60\\,\\%$.`,
  },
  formulas: {
    title: 'Formules essentielles — Tassements',
    formulas: [
      {
        name: 'Contrainte effective (Terzaghi)',
        latex: "\\sigma' = \\sigma - u",
        description: 'Seule la contrainte effective gouverne la déformation et la résistance des sols.',
        vars: [
          ["\\sigma'", 'Contrainte effective', 'kPa', 'Transmise par le squelette granulaire.'],
          ['\\sigma', 'Contrainte totale', 'kPa', 'Poids des terres et surcharges.'],
          ['u', 'Pression interstitielle', 'kPa', "Pression de l'eau dans les pores (γ_w × hauteur sous la nappe)."],
        ],
      },
      {
        name: 'Diffusion des contraintes (méthode 2:1)',
        latex: "\\Delta\\sigma(z) = \\frac{q \\, B \\, L}{(B + z)(L + z)}",
        description: 'Approximation pratique de la surcharge sous une fondation rectangulaire.',
        vars: [
          ['\\Delta\\sigma', 'Surcharge à la profondeur z', 'kPa', 'Sous le centre de la fondation.'],
          ['q', 'Pression nette appliquée', 'kPa', 'Charge nette au niveau d’assise.'],
          ['B, L', 'Dimensions de la fondation', 'm', 'Largeur et longueur.'],
          ['z', 'Profondeur sous la fondation', 'm', 'Au milieu de la couche étudiée.'],
        ],
      },
      {
        name: 'Tassement de consolidation (argile normalement consolidée)',
        latex: "s = \\frac{C_c}{1 + e_0} \\, H \\, \\log_{10}\\left(\\frac{\\sigma'_{v0} + \\Delta\\sigma}{\\sigma'_{v0}}\\right)",
        description: 'Calcul sur une couche (ou sous-couche) homogène.',
        vars: [
          ['s', 'Tassement final', 'm', 'Après dissipation des surpressions.'],
          ['C_c', 'Indice de compression', '-', 'Pente de la courbe œdométrique e − log σ′.'],
          ['e_0', 'Indice des vides initial', '-', 'Avant chargement.'],
          ['H', 'Épaisseur de la couche', 'm', 'Découper si H > 3 à 4 m.'],
          ["\\sigma'_{v0}", 'Contrainte effective initiale', 'kPa', 'Au milieu de la couche.'],
        ],
        rule: "Repère : C_c ≈ 0,009 (w_L − 10) pour une argile normalement consolidée (corrélation de Skempton).",
      },
      {
        name: 'Facteur temps et durée de consolidation',
        latex: "T_v = \\frac{c_v \\, t}{H_{dr}^2} \\qquad t_{90} = \\frac{0{,}848 \\, H_{dr}^2}{c_v}",
        description: 'Théorie de la consolidation unidimensionnelle de Terzaghi.',
        vars: [
          ['T_v', 'Facteur temps', '-', '0,197 pour U = 50 % ; 0,848 pour U = 90 %.'],
          ['c_v', 'Coefficient de consolidation', 'm²/an', '0,5 à 10 m²/an pour les argiles.'],
          ['H_{dr}', 'Longueur de drainage', 'm', 'H/2 si drainage des deux côtés.'],
          ['t_{90}', 'Durée pour 90 % de consolidation', 'an', 'Proportionnelle au carré de H_dr.'],
        ],
      },
    ],
  },
  stepbystep: {
    title: 'Calcul complet — Tassement d’un radier sur argile',
    problem: "Radier 10 × 20 m, pression nette q = 100 kPa, posé en surface. Sables (γ = 19 kN/m³) jusqu'à 4 m, nappe à 2 m, puis argile de 4 à 10 m (γ_sat = 20 kN/m³, C_c = 0,30, e₀ = 0,90, c_v = 2 m²/an), drainée en haut et en bas. Calculer le tassement de consolidation et sa durée.",
    steps_demo: [
      { n: 1, text: "Milieu de l'argile : z = 7 m. Contrainte effective initiale : σ′ = 2 × 19 + 2 × (19 − 9,81) + 3 × (20 − 9,81) = 38 + 18,4 + 30,6 = 87,0 kPa." },
      { n: 2, text: "Surcharge (2:1) : Δσ = 100 × 10 × 20 / (17 × 27) = 43,6 kPa." },
      { n: 3, text: "Tassement : s = 0,30 / 1,90 × 6,0 × log₁₀((87,0 + 43,6) / 87,0) = 0,947 × 0,176 = 0,167 m." },
      { n: 4, text: "Drainage double : H_dr = 6 / 2 = 3 m." },
      { n: 5, text: "Durées : t₅₀ = 0,197 × 9 / 2 = 0,89 an ; t₉₀ = 0,848 × 9 / 2 = 3,8 ans." },
      { n: 6, text: "Conclusion : environ 17 cm, dont la moitié en 11 mois ; prévoir des raccordements de réseaux souples." },
    ],
    result_latex: "s = \\frac{0{,}30}{1{,}90} \\times 6{,}0 \\times \\log_{10}\\frac{130{,}6}{87{,}0} = 0{,}167\\ \\text{m} \\qquad t_{90} = \\frac{0{,}848 \\times 3^2}{2} = 3{,}8\\ \\text{ans}",
  },
  units: {
    table: [
      ['Contrainte', 'kPa', 'psf', '1 kPa = 20,9 psf'],
      ['Tassement', 'mm, cm', 'in', '1 in = 25,4 mm'],
      ['Coefficient de consolidation', 'm²/an', 'ft²/yr', '1 m²/an = 10,76 ft²/yr'],
      ['Module œdométrique', 'MPa', 'ksi', 'Argile molle 1-5 ; argile raide 10-30 ; sable dense 30-80'],
      ['Poids volumique de l’eau', 'kN/m³', 'pcf', '9,81 kN/m³'],
    ],
    note: "Sous la nappe, utilisez le poids volumique déjaugé γ' = γ_sat − γ_w pour les contraintes effectives.",
  },
  hypotheses: {
    items: [
      ['info', 'Théorie de Terzaghi : sol saturé, compression et drainage verticaux, paramètres constants.'],
      ['info', 'La méthode 2:1 est une approximation ; les abaques de Boussinesq donnent une répartition plus précise.'],
      ['warning', 'Une argile surconsolidée tasse beaucoup moins : vérifiez toujours σ′_p à l’œdomètre.'],
      ['warning', 'Des lentilles sableuses dans l’argile raccourcissent fortement la longueur de drainage et accélèrent la consolidation.'],
      ['tip', 'Le suivi par tassomètres et piézomètres permet de caler les prévisions sur le comportement réel.'],
    ],
  },
  simple_examples: {
    examples: [
      {
        title: 'Exemple 1 : contrainte effective',
        given: 'Profondeur 6 m, γ_sat = 20 kN/m³, nappe en surface',
        find: "σ′_v",
        solution_latex: "\\sigma'_v = 6 \\times (20 - 9{,}81) = 61{,}1\\ \\text{kPa}",
        result: "61 kPa (contre 120 kPa de contrainte totale).",
      },
      {
        title: 'Exemple 2 : effet de l’épaisseur de drainage',
        given: 'Même argile drainée d’un seul côté (H_dr = 6 m)',
        find: 't₉₀',
        solution_latex: "t_{90} = \\frac{0{,}848 \\times 36}{2} = 15{,}3\\ \\text{ans}",
        result: '4 fois plus long qu’en drainage double : la longueur de drainage intervient au carré.',
      },
      {
        title: 'Exemple 3 : méthode œdométrique',
        given: 'Couche de 2 m, Δσ = 50 kPa, E_oed = 5 MPa',
        find: 'Le tassement',
        solution_latex: "s = \\frac{50 \\times 2{,}0}{5\\,000} = 0{,}020\\ \\text{m}",
        result: '2 cm.',
      },
    ],
  },
  real_examples: {
    title: 'Exemple réel — La tour de Pise',
    examples: [
      {
        context: 'Campanile de 56 m construit à partir de 1173 sur des argiles compressibles',
        scenario: "Le sol plus compressible du côté sud a tassé davantage : l'inclinaison a atteint environ 5,5° en 1990. Les travaux de 1999-2001 ont extrait de petites quantités de sol sous le côté nord (sous-excavation) pour le faire tasser à son tour.",
        decomposition_latex: "\\Delta s_{sud} > \\Delta s_{nord} \\Rightarrow \\text{inclinaison} \\qquad \\text{sous-excavation nord} \\Rightarrow \\text{redressement d'environ 45 cm en tête}",
        lesson: "Les tassements différentiels, et non le tassement total, menacent les structures ; la consolidation peut se poursuivre des siècles sur des argiles épaisses.",
      },
    ],
  },
  diagrams: {
    title: 'Schéma de principe — Calcul d’un tassement',
    diagram_description: [
      'Coupe géotechnique : couches, nappe, poids volumiques',
      'Contraintes effectives initiales σ′_v0 au milieu de chaque couche',
      'Surcharge Δσ(z) apportée par l’ouvrage (2:1 ou Boussinesq)',
      'Paramètres œdométriques : C_c, C_s, e₀, σ′_p ou E_oed',
      'Tassement de chaque couche puis somme',
      'Temps : c_v, H_dr, T_v → courbe tassement-temps',
    ],
  },
  mistakes: {
    items: [
      ['Calculer avec les contraintes totales', 'Tassement faux sous la nappe', "Utiliser σ′ = σ − u (γ′ sous la nappe)."],
      ['Prendre H_dr = H en drainage double', 'Durée surestimée d’un facteur 4', 'H_dr = H/2 si la couche est drainée en haut et en bas.'],
      ['Traiter une argile surconsolidée comme normalement consolidée', 'Tassement très surestimé', 'Comparer σ′_v0 + Δσ à σ′_p et utiliser C_s sous σ′_p.'],
    ],
  },
  tips: {
    tips: [
      'Découpez les couches épaisses en sous-couches de 2 à 3 m : Δσ et σ′ varient avec la profondeur.',
      'Les drains verticaux préfabriqués réduisent H_dr à quelques dizaines de centimètres et la durée de consolidation à quelques mois.',
      'Un préchargement supérieur à la charge de service rend l’argile surconsolidée vis-à-vis de l’ouvrage final.',
      'Limitez la distorsion angulaire entre poteaux à environ 1/500 pour éviter la fissuration des cloisons.',
    ],
  },
  norms: {
    norms: [
      ['NF EN 1997-1 §6.6', 'Eurocode 7 : vérification des tassements des fondations superficielles.'],
      ['NF P 94-261', 'Fondations superficielles : calcul des tassements (méthode pressiométrique notamment).'],
      ['NF EN ISO 17892-5', 'Essai œdométrique par paliers.'],
      ['NF P 94-090-1', 'Essai œdométrique (ancienne norme française de référence).'],
    ],
  },
  exercises: {
    exercises: [
      {
        level: 1,
        text: 'Calculer Δσ à 5 m sous une semelle de 2 × 2 m chargée à 200 kPa (méthode 2:1).',
        hint: 'Δσ = qBL / ((B+z)(L+z)).',
        answer_latex: "\\Delta\\sigma = \\frac{200 \\times 2 \\times 2}{7 \\times 7} = 16{,}3\\ \\text{kPa}",
        answer_text: 'Δσ ≈ 16 kPa : la surcharge d’une petite semelle s’amortit vite.',
      },
      {
        level: 2,
        text: "Couche d'argile de 4 m (C_c = 0,25, e₀ = 1,1), σ′_v0 = 60 kPa, Δσ = 40 kPa. Calculer le tassement.",
        hint: 'log₁₀(100/60) = 0,222.',
        answer_latex: "s = \\frac{0{,}25}{2{,}1} \\times 4 \\times 0{,}222 = 0{,}106\\ \\text{m}",
        answer_text: 's ≈ 10,6 cm.',
      },
      {
        level: 3,
        text: 'La couche de l’exercice 2 (c_v = 1,5 m²/an) est drainée d’un seul côté. Calculer le temps pour atteindre 5 cm de tassement.',
        hint: 'U = 5/10,6 = 47 % ; T_v ≈ π/4 · U².',
        answer_latex: "U = 0{,}47 \\Rightarrow T_v = \\frac{\\pi}{4} \\times 0{,}47^2 = 0{,}174 \\qquad t = \\frac{0{,}174 \\times 4^2}{1{,}5} = 1{,}86\\ \\text{an}",
        answer_text: '≈ 1,9 an.',
      },
    ],
  },
  quiz: {
    title: 'Quiz — Consolidation',
    questions: [
      { q: 'Quelle contrainte gouverne le tassement ?', options: ['La contrainte totale', 'La contrainte effective', 'La pression interstitielle'], correct: 1, explain: "σ′ = σ − u : seule la contrainte transmise par les grains déforme le sol." },
      { q: 'Si la longueur de drainage double, la durée de consolidation…', options: ['Double', 'Est multipliée par 4', 'Ne change pas'], correct: 1, explain: 't ∝ H_dr².' },
      { q: 'Quel facteur temps correspond à 90 % de consolidation ?', options: ['0,197', '0,848', '1,000'], correct: 1, explain: 'T_v = 0,848 pour U = 90 %.' },
    ],
  },
  exam_questions: {
    questions: [
      'Énoncez le principe des contraintes effectives et décrivez le processus de consolidation.',
      'Calculez le tassement d’une couche argileuse sous un remblai et estimez sa durée.',
      'Expliquez les techniques d’accélération de la consolidation (préchargement, drains verticaux).',
    ],
  },
  interview_questions: {
    questions: [
      ['Comment construire un remblai sur une argile molle ?', "Par étapes, en laissant la consolidation augmenter la résistance du sol entre chaque étape, avec des drains verticaux pour accélérer, un préchargement éventuel, et un suivi par piézomètres et tassomètres ; sinon, inclusions rigides ou matériaux légers."],
      ['Pourquoi un rabattement de nappe peut-il fissurer les bâtiments voisins ?', "En abaissant la nappe, on réduit la pression interstitielle : la contrainte effective augmente dans les couches compressibles, qui tassent comme sous une surcharge."],
    ],
  },
  practical_case: {
    title: 'Cas pratique — Remblai d’accès à un pont',
    scenario: "Remblai de 5 m (γ = 20 kN/m³, soit 100 kPa) sur 8 m d'argile molle (C_c = 0,45, e₀ = 1,30, σ′_v0 = 40 kPa au milieu, c_v = 1 m²/an), drainée en haut et en bas. Le remblai est large : Δσ ≈ 100 kPa sur toute l'épaisseur.",
    description: 'Calculer le tassement et la durée de consolidation, puis l’effet de drains verticaux.',
    resolutions: [
      "s = \\frac{0{,}45}{2{,}30} \\times 8 \\times \\log_{10}\\frac{140}{40} = 1{,}565 \\times 0{,}544 = 0{,}85\\ \\text{m}",
      "t_{90} = \\frac{0{,}848 \\times 4^2}{1} = 13{,}6\\ \\text{ans (drainage vertical seul)}",
      "\\text{Drains tous les 1,5 m : drainage radial, } t_{90} \\approx 6 \\text{ à } 12\\ \\text{mois}",
    ],
    conclusion: "Environ 85 cm de tassement en plus de 13 ans sans traitement : inacceptable pour un accès de pont. Les drains verticaux avec préchargement permettent de consolider en moins d'un an avant de construire la chaussée.",
  },
  summary: {
    content: `### Les tassements en 5 points
1. $\\sigma' = \\sigma - u$ gouverne le comportement.
2. Surcharge en profondeur : méthode 2:1 ou Boussinesq.
3. Argile NC : $s = \\frac{C_c}{1+e_0} H \\log\\frac{\\sigma'_0 + \\Delta\\sigma}{\\sigma'_0}$.
4. Temps : $T_v = c_v t / H_{dr}^2$ ; $t_{90}$ pour $T_v = 0{,}848$.
5. Les **tassements différentiels** causent les désordres.`,
  },
  key_points: {
    points: [
      "σ′ = σ − u",
      'Δσ = qBL / ((B+z)(L+z))',
      'T_v = 0,197 (50 %) ; 0,848 (90 %)',
      'Drainage double : H_dr = H/2',
      'Durée ∝ H_dr²',
    ],
  },
  self_assessment: {
    objectives: [
      'Je sais calculer les contraintes effectives dans un profil de sol',
      'Je sais estimer la surcharge apportée en profondeur',
      'Je sais calculer un tassement de consolidation',
      'Je sais estimer la durée de consolidation',
      "J'ai réussi le quiz avec au moins 2 bonnes réponses sur 3",
    ],
  },
});
