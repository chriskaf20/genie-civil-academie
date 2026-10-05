// ── Lesson: Auscultation et surveillance des barrages — Module 18 ─────────────
import { buildLesson } from './build_lesson.js';

export const lesson_barrages_auscultation = buildLesson({
  moduleId: 18,
  slug: 'barrages_auscultation',
  lessonIndex: 3,
  title: "Auscultation & Surveillance des Barrages : Instruments, Modèle HST, Seuils d'Alerte et Réglementation",
  subtitle: 'Module 18 — Conception & Sécurité des Barrages',
  level: 'Avancé',
  duration: '9h',
  tags: ['Barrages', 'Auscultation', 'Pendules', 'Piézomètres', 'Modèle HST', 'Classement des barrages', 'Sûreté'],
}, {
  definition: {
    title: 'Définition — Écouter le barrage vivre',
    fr: 'Auscultation des barrages',
    en: 'Dam monitoring (instrumentation)',
    metier: "Utilisée par les exploitants de barrages (hydroélectricité, irrigation, eau potable), les bureaux d'études spécialisés et les services de contrôle de l'État.",
    content: `L'**auscultation** consiste à mesurer régulièrement le comportement d'un barrage (déplacements, pressions d'eau, débits de fuite) pour vérifier qu'il reste **normal** et détecter toute **anomalie** avant qu'elle ne devienne dangereuse.

### Les grandeurs suivies
- **Déplacements** : pendules (direct, inverse), topographie, GNSS, extensomètres, inclinomètres.
- **Pressions d'eau** : piézomètres et cellules de pression interstitielle (sous-pressions en fondation, pressions dans le remblai).
- **Débits de fuite et de drainage** : déversoirs de mesure, avec observation de la turbidité.
- **Conditions extérieures** : cote de la retenue, températures, pluie.

### Comportement normal, comportement anormal
Un barrage se déplace normalement avec la **cote de la retenue** et les **saisons** (dilatation thermique). Une dérive **avec le temps**, sans lien avec ces causes, signale un vieillissement ou une anomalie.

> 💡 La plupart des incidents graves ont été précédés de signes mesurables : l'auscultation donne le temps d'agir.`,
  },
  importance: {
    content: `- **Sécurité des populations** : l'onde de rupture d'un barrage peut toucher des dizaines de kilomètres à l'aval.
- **Réglementation** : en France, les obligations (rapports d'auscultation, visites techniques approfondies, études de dangers) dépendent de la classe du barrage.
- **Patrimoine vieillissant** : de nombreux barrages ont plus de 60 ans ; leur suivi guide les travaux de confortement.
- **Exploitation** : les mesures permettent de fixer des cotes de retenue sûres et d'optimiser la production.

> ⚠️ **À retenir** : une mesure isolée ne dit presque rien ; c'est l'analyse de son évolution, corrigée des effets de la retenue et de la saison, qui compte.`,
  },
  applications: {
    examples: [
      ['Barrage-voûte', 'Pendules direct et inverse pour suivre les déplacements radiaux en fonction de la retenue et de la température.'],
      ['Barrage-poids', 'Piézomètres en fondation pour vérifier l’efficacité du voile de drainage.'],
      ['Barrage en remblai', 'Mesure des débits de drainage et de leur turbidité, tassements de crête.'],
      ['Digue fluviale', 'Inspections visuelles et piézométrie en période de crue.'],
      ['Télésurveillance', 'Transmission automatique des mesures et alertes vers un centre d’exploitation.'],
    ],
  },
  theory: {
    title: 'Théorie — Instruments, analyse et seuils',
    content: `### 1. Instruments principaux
- **Pendule direct** : fil lesté suspendu en crête, mesurant le déplacement relatif de la crête par rapport à la base.
- **Pendule inverse** : fil ancré profondément en fondation, tendu par un flotteur, donnant un point fixe de référence.
- **Piézomètre** : niveau d'eau ou pression en un point (fondation, remblai).
- **Déversoir de mesure** : débit de fuite collecté dans les galeries ou au pied aval.

### 2. Le modèle HST (Hydrostatique – Saison – Temps)
Développé par EDF, il décompose une mesure (par exemple un déplacement) en trois effets :
$$\\delta = f(z) + g(s) + h(t) + \\varepsilon$$
- $f(z)$ : effet de la cote de retenue (polynôme de degré 3 ou 4) ;
- $g(s)$ : effet saisonnier (fonctions sinusoïdales de la date dans l'année) ;
- $h(t)$ : effet irréversible du temps (dérive) ;
- $\\varepsilon$ : résidu, qui doit rester faible et aléatoire.

### 3. Sous-pressions et drainage
On compare la pression mesurée à la pression hydrostatique : le **coefficient de sous-pression** $\\nu = u / (\\gamma_w h)$ traduit l'efficacité du drainage.

### 4. Classement des barrages en France
Selon la hauteur $H$ (m) et le volume $V$ (hm³) : **classe A** si $H \\ge 20$ et $H^2\\sqrt{V} \\ge 1\\,500$ ; **classe B** si $H \\ge 10$ et $H^2\\sqrt{V} \\ge 200$ ; **classe C** si $H \\ge 5$ et $H^2\\sqrt{V} \\ge 20$ (et cas particuliers).`,
  },
  formulas: {
    title: 'Formules essentielles — Auscultation des barrages',
    formulas: [
      {
        name: 'Modèle HST',
        latex: "\\delta(z, s, t) = f(z) + g(s) + h(t) + \\varepsilon",
        description: 'Séparation des effets de la retenue, de la saison et du temps.',
        vars: [
          ['\\delta', 'Grandeur mesurée', 'mm (ou bar, L/s)', 'Déplacement, pression ou débit.'],
          ['f(z)', 'Effet hydrostatique', 'mm', 'Fonction de la cote de retenue z.'],
          ['g(s)', 'Effet saisonnier', 'mm', 'Fonction sinusoïdale de la date s dans l’année.'],
          ['h(t)', 'Effet du temps', 'mm', 'Dérive irréversible (à surveiller).'],
          ['\\varepsilon', 'Résidu', 'mm', 'Doit rester faible et sans tendance.'],
        ],
      },
      {
        name: 'Coefficient de sous-pression',
        latex: "\\nu = \\frac{u}{\\gamma_w \\, h}",
        description: 'Rapport entre la pression mesurée et la pression hydrostatique de la retenue.',
        vars: [
          ['\\nu', 'Coefficient de sous-pression', '-', 'Faible derrière un drainage efficace (≈ 0,2 à 0,4).'],
          ['u', 'Pression mesurée', 'kPa', 'Piézomètre en fondation.'],
          ['h', "Hauteur d'eau de la retenue au droit du point", 'm', 'Cote retenue − cote du point.'],
        ],
      },
      {
        name: 'Paramètre de classement des barrages',
        latex: "C = H^2 \\sqrt{V}",
        description: 'Critère du décret de 2015 (H en m, V en hm³).',
        vars: [
          ['H', 'Hauteur du barrage', 'm', 'Au-dessus du terrain naturel.'],
          ['V', 'Volume de la retenue', 'hm³', 'À la cote de retenue normale.'],
          ['C', 'Paramètre de classement', '-', 'A : ≥ 1 500 (et H ≥ 20) ; B : ≥ 200 (et H ≥ 10) ; C : ≥ 20 (et H ≥ 5).'],
        ],
      },
      {
        name: 'Seuil d’alerte sur un résidu',
        latex: "|\\varepsilon| > k \\cdot \\sigma_{\\varepsilon} \\Rightarrow \\text{anomalie}",
        description: 'Une mesure s’écartant du modèle de plus de k écarts-types est analysée.',
        vars: [
          ['\\sigma_{\\varepsilon}', 'Écart-type des résidus', 'mm', 'Calculé sur l’historique.'],
          ['k', 'Coefficient', '-', 'Souvent 2 à 3.'],
        ],
        rule: "Une anomalie n'est pas forcément un danger, mais elle impose toujours une explication.",
      },
    ],
  },
  stepbystep: {
    title: 'Calcul complet — Analyse d’une mesure de pendule',
    problem: "Le modèle HST d'un barrage-voûte prévoit, pour la cote et la date de la mesure, un déplacement de la crête vers l'aval de 18,4 mm (f = 21,0 mm, g = −2,6 mm, h = 0). On mesure 22,1 mm. L'écart-type historique des résidus est de 0,8 mm. Analyser.",
    steps_demo: [
      { n: 1, text: "Valeur prévue : 21,0 − 2,6 + 0 = 18,4 mm." },
      { n: 2, text: "Résidu : ε = 22,1 − 18,4 = 3,7 mm." },
      { n: 3, text: "Rapport à l'écart-type : 3,7 / 0,8 = 4,6 écarts-types > 3 → mesure anormale." },
      { n: 4, text: "Vérifications : erreur de lecture ou d'appareil (contre-mesure), puis cohérence avec les autres instruments (pendules voisins, topographie)." },
      { n: 5, text: "Si l'anomalie se confirme : analyse approfondie, information du service de contrôle et éventuelle limitation de la cote de retenue." },
    ],
    result_latex: "\\varepsilon = 22{,}1 - (21{,}0 - 2{,}6) = 3{,}7\\ \\text{mm} = 4{,}6\\, \\sigma_{\\varepsilon} > 3\\, \\sigma_{\\varepsilon} \\Rightarrow \\text{anomalie à expliquer}",
  },
  units: {
    table: [
      ['Déplacement', 'mm', 'in', 'Précision des pendules ≈ 0,1 mm'],
      ['Pression interstitielle', 'kPa, bar', 'psi', '1 bar ≈ 10 m d’eau'],
      ['Débit de fuite', 'L/min, L/s', 'gpm', '1 L/s = 60 L/min'],
      ['Volume de retenue', 'hm³', 'acre-ft', '1 hm³ = 10⁶ m³'],
      ['Cote de retenue', 'm NGF', 'ft', 'RN = retenue normale ; PHE = plus hautes eaux'],
    ],
    note: 'Les mesures doivent toujours être associées à la date, à la cote de la retenue et aux températures du moment.',
  },
  hypotheses: {
    items: [
      ['info', 'Le modèle HST suppose que le comportement est stable et que les effets s’additionnent.'],
      ['info', 'Un historique de plusieurs années est nécessaire pour caler un modèle fiable.'],
      ['warning', 'Un capteur défaillant peut simuler une anomalie : contre-mesures et redondance des instruments.'],
      ['warning', 'Les inspections visuelles restent indispensables : fissures, résurgences, glissements ne sont pas tous instrumentés.'],
      ['tip', 'Tracez systématiquement les mesures en fonction du temps et de la cote de retenue : les dérives apparaissent vite.'],
    ],
  },
  simple_examples: {
    examples: [
      {
        title: 'Exemple 1 : classement d’un barrage',
        given: 'H = 25 m, V = 4 hm³',
        find: 'Classe du barrage',
        solution_latex: "C = 25^2 \\times \\sqrt{4} = 625 \\times 2 = 1\\,250 < 1\\,500 \\quad (H \\ge 10, \\ C \\ge 200) \\Rightarrow \\text{classe B}",
        result: 'Classe B.',
      },
      {
        title: 'Exemple 2 : efficacité du drainage',
        given: 'Retenue 40 m au-dessus d’un piézomètre ; pression mesurée 120 kPa',
        find: 'ν',
        solution_latex: "\\nu = \\frac{120}{9{,}81 \\times 40} = 0{,}31",
        result: 'ν = 0,31 : drainage efficace.',
      },
      {
        title: 'Exemple 3 : dérive temporelle',
        given: 'Effet du temps h(t) : +0,4 mm/an sur un pendule depuis 5 ans',
        find: 'Déplacement irréversible cumulé',
        solution_latex: "h = 0{,}4 \\times 5 = 2{,}0\\ \\text{mm}",
        result: '2 mm de dérive : à expliquer (fluage, gonflement du béton par alcali-réaction…).',
      },
    ],
  },
  real_examples: {
    title: 'Exemple réel — Gonflement du béton de barrages par alcali-réaction',
    examples: [
      {
        context: 'Plusieurs barrages en béton construits dans les années 1950-1960',
        scenario: "L'auscultation a montré une dérive lente et régulière des déplacements vers l'amont et le haut, indépendante de la retenue et des saisons : le béton gonfle par réaction alcali-granulat. À terme, les pertuis de vannes se déforment et des fissures apparaissent.",
        decomposition_latex: "h(t) \\neq 0 \\ \\text{(dérive régulière)} \\Rightarrow \\text{diagnostic RAG} \\Rightarrow \\text{sciage de saignées pour libérer les contraintes}",
        lesson: "Le modèle HST isole l'effet du temps et révèle les pathologies lentes ; des sciages de saignées ont permis à certains ouvrages de rester en service.",
      },
    ],
  },
  diagrams: {
    title: 'Schéma de principe — Chaîne de surveillance d’un barrage',
    diagram_description: [
      'Instruments : pendules, piézomètres, déversoirs, topographie',
      'Acquisition : mesures manuelles ou automatiques, contrôle de validité',
      'Analyse : modèle HST, comparaison aux seuils, cohérence entre instruments',
      'Inspections visuelles et visites techniques approfondies',
      'Rapports d’auscultation périodiques et revue de sûreté',
      'Décisions : exploitation normale, surveillance renforcée, limitation de la retenue, travaux',
    ],
  },
  mistakes: {
    items: [
      ['Comparer des mesures sans tenir compte de la retenue et de la saison', 'Fausses alertes ou anomalies masquées', 'Analyser avec un modèle de type HST.'],
      ['Négliger la turbidité des fuites', 'Érosion interne non détectée', 'Observer la couleur et prélever les eaux de fuite.'],
      ['Laisser des instruments hors service', 'Perte de l’historique et de la surveillance', 'Programmer la maintenance et le remplacement des capteurs.'],
    ],
  },
  tips: {
    tips: [
      'Doublez les instruments critiques : un résultat confirmé par deux capteurs indépendants est fiable.',
      'Renforcez la fréquence des mesures lors des premières mises en eau et des crues.',
      'Conservez l’historique complet depuis la construction : c’est la référence du comportement normal.',
      'Les visites techniques approfondies complètent l’auscultation par un regard d’ensemble.',
    ],
  },
  norms: {
    norms: [
      ['Décret 2015-526 (Code de l’environnement)', 'Classement des barrages (A, B, C) et obligations associées.'],
      ['Arrêté du 6 août 2018', 'Prescriptions techniques relatives à la sécurité des barrages.'],
      ['Recommandations du CFBR', 'Auscultation des barrages et des digues.'],
      ['Bulletins CIGB (ICOLD)', 'Surveillance et auscultation des barrages.'],
    ],
  },
  exercises: {
    exercises: [
      {
        level: 1,
        text: 'Classer un barrage de 12 m de haut retenant 0,5 hm³.',
        hint: 'C = H²√V.',
        answer_latex: "C = 144 \\times \\sqrt{0{,}5} = 102 \\Rightarrow \\text{classe C} \\ (H \\ge 5, \\ C \\ge 20)",
        answer_text: 'Classe C (C = 102 < 200).',
      },
      {
        level: 2,
        text: 'Un piézomètre placé 25 m sous la retenue mesure 190 kPa. Calculer ν et conclure.',
        hint: 'ν = u / (γ_w h).',
        answer_latex: "\\nu = \\frac{190}{9{,}81 \\times 25} = 0{,}77",
        answer_text: 'ν = 0,77 : drainage peu efficace, à investiguer (drains colmatés ?).',
      },
      {
        level: 3,
        text: 'Le modèle prévoit 6,2 mm, on mesure 7,0 mm ; σ_ε = 0,5 mm. La mesure est-elle anormale (seuil 3σ) ?',
        hint: 'Comparer |ε| à 3 σ_ε.',
        answer_latex: "\\varepsilon = 0{,}8\\ \\text{mm} < 3 \\times 0{,}5 = 1{,}5\\ \\text{mm}",
        answer_text: 'Non : la mesure reste dans la variabilité normale.',
      },
    ],
  },
  quiz: {
    title: 'Quiz — Auscultation des barrages',
    questions: [
      { q: 'Que représente le terme h(t) du modèle HST ?', options: ['L’effet de la retenue', 'L’effet saisonnier', 'La dérive irréversible avec le temps'], correct: 2, explain: 'C’est l’effet du vieillissement, à surveiller particulièrement.' },
      { q: 'À quoi sert un pendule inverse ?', options: ['À mesurer le débit de fuite', 'À fournir un point fixe ancré en fondation', 'À mesurer la pluie'], correct: 1, explain: 'Il est ancré profondément et sert de référence des déplacements.' },
      { q: 'Quel signe dans une fuite est le plus préoccupant ?', options: ['Une eau claire et stable', 'Une eau trouble et un débit croissant', 'Une eau froide'], correct: 1, explain: 'Elle traduit une érosion interne possible.' },
    ],
  },
  exam_questions: {
    questions: [
      'Présentez les principaux instruments d’auscultation et ce qu’ils mesurent.',
      'Expliquez le modèle HST et son intérêt pour détecter les anomalies.',
      'Décrivez les obligations de surveillance des barrages en fonction de leur classe.',
    ],
  },
  interview_questions: {
    questions: [
      ['Une sous-pression augmente progressivement sous un barrage-poids. Que faites-vous ?', "Je vérifie le capteur, compare aux piézomètres voisins et aux débits de drainage ; une hausse avec baisse des débits suggère un colmatage des drains : je recalcule la stabilité avec la sous-pression mesurée, renforce la surveillance et programme le curage ou le reforage des drains."],
      ['Pourquoi le modèle HST est-il utile ?', "Parce qu'il sépare les variations normales (retenue, saison) de la dérive avec le temps et des anomalies ; on peut ainsi fixer des seuils d'alerte pertinents malgré la grande variabilité naturelle des mesures."],
    ],
  },
  practical_case: {
    title: 'Cas pratique — Programme d’auscultation d’un barrage de classe B',
    scenario: 'Barrage-poids de 22 m retenant 3 hm³ (classe à vérifier), construit en 1965, avec un voile de drainage en fondation.',
    description: 'Vérifier la classe et proposer le dispositif d’auscultation.',
    resolutions: [
      "C = 22^2 \\times \\sqrt{3} = 484 \\times 1{,}732 = 838 \\Rightarrow \\text{classe B}",
      "\\text{Instruments : pendules (direct + inverse), piézomètres sous fondation, déversoirs de drainage, topographie de crête}",
      "\\text{Analyse : modèle HST, rapports périodiques, visites techniques approfondies, étude de dangers}",
    ],
    conclusion: 'Barrage de classe B : auscultation instrumentée, analyse HST et rapports réguliers transmis au service de contrôle, avec une attention particulière au vieillissement (drainage, béton de 1965).',
  },
  summary: {
    content: `### L'auscultation en 5 points
1. Mesurer déplacements, pressions d'eau, débits et conditions extérieures.
2. Modèle HST : $\\delta = f(z) + g(s) + h(t) + \\varepsilon$.
3. Sous-pression : $\\nu = u/(\\gamma_w h)$, efficacité du drainage.
4. Classement : $C = H^2\\sqrt{V}$ (A, B, C).
5. Une anomalie impose une explication : contre-mesure, cohérence, décision.`,
  },
  key_points: {
    points: [
      'δ = f(z) + g(s) + h(t) + ε',
      'h(t) : la dérive à surveiller',
      'ν = u / (γ_w h)',
      'Classe A : H ≥ 20 m et H²√V ≥ 1 500',
      'Fuite trouble = alerte',
    ],
  },
  self_assessment: {
    objectives: [
      'Je connais les instruments d’auscultation',
      'Je comprends le modèle HST',
      'Je sais calculer un coefficient de sous-pression',
      'Je sais classer un barrage selon la réglementation',
      "J'ai réussi le quiz avec au moins 2 bonnes réponses sur 3",
    ],
  },
});
