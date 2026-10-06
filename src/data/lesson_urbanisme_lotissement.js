// ── Lesson: Conception de lotissements — Module 45 ───────────────────────────
import { buildLesson } from './build_lesson.js';

export const lesson_urbanisme_lotissement = buildLesson({
  moduleId: 45,
  slug: 'urbanisme_lotissement',
  lessonIndex: 2,
  title: "Conception d'un Lotissement : Plan de Composition, Voirie Interne, Densité et Bilan d'Aménageur",
  subtitle: 'Module 45 — Urbanisme, aménagement & VRD',
  level: 'Intermédiaire',
  duration: '5h',
  diagramType: 'none',
  tags: ['Lotissement', 'Plan de composition', 'Densité', 'Voirie', 'Bilan d’aménageur', 'Espaces communs', 'Permis d’aménager'],
}, {
  definition: {
    title: 'Définition — Découper un terrain en lots constructibles',
    fr: 'Lotissement et opération d’aménagement',
    en: 'Housing subdivision design',
    metier: "Concerne les aménageurs, géomètres-experts, urbanistes, bureaux d'études VRD et collectivités.",
    content: `Un **lotissement** divise un terrain en plusieurs **lots** destinés à être bâtis. Lorsqu'il crée des voies ou espaces communs, il nécessite en France un **permis d'aménager**.

### Le plan de composition
C'est le dessin d'ensemble de l'opération :
- la **trame viaire** (voies de desserte, impasses, cheminements piétons) ;
- le **découpage des lots** (formes, surfaces, accès, orientation) ;
- les **espaces communs** (espaces verts, noues, bassins, placettes, stationnement visiteurs) ;
- les **réseaux** (eau, assainissement, électricité, télécom, éclairage).

### Les équilibres à trouver
- Respecter le PLU et ses orientations (densité, part d'espaces verts, gestion des eaux pluviales).
- Offrir des lots bien orientés, accessibles et bien formés (rapport largeur/profondeur raisonnable).
- Assurer la **viabilité économique** : le prix de vente des lots doit couvrir le terrain, les travaux et les frais.

> 💡 La voirie et les réseaux représentent souvent l'essentiel du coût d'aménagement : une trame compacte réduit les linéaires et donc les coûts.`,
  },
  importance: {
    content: `- **Sobriété foncière** : densifier limite la consommation d'espaces naturels et agricoles.
- **Qualité de vie** : orientation des maisons, espaces publics, liaisons piétonnes.
- **Coût** : un mètre linéaire de voirie équipée coûte cher ; il se répercute sur chaque lot.
- **Gestion future** : voies et réseaux sont souvent rétrocédés à la commune, qui doit pouvoir les entretenir.

> ⚠️ **À retenir** : les impasses longues compliquent la collecte des déchets, les secours et les déplacements à pied.`,
  },
  applications: {
    examples: [
      ['Lotissement de maisons', '20 à 50 lots de 300 à 600 m² autour d’une voie en boucle.'],
      ['Écoquartier', 'Densité plus forte, mixité de logements, noues paysagères.'],
      ['Extension de village', 'Raccordement au maillage existant et cheminements vers le centre.'],
      ['Zone d’activités', 'Grands lots, voirie poids lourds, gestion des eaux.'],
      ['Division parcellaire', 'Détachement d’un ou deux lots sur un grand terrain bâti.'],
    ],
  },
  theory: {
    title: 'Théorie — Densité, découpage et bilan',
    content: `### 1. Surfaces
$$A_{cessible} = A_{terrain} \\times (1 - \\alpha)$$
$\\alpha$ : part des voies et espaces communs (souvent 20 à 30 %).

### 2. Nombre de lots et densité
$$N = \\frac{A_{cessible}}{a_{lot}} \\qquad d = \\frac{N}{A_{terrain}\\ (\\text{ha})}$$
Ordres de grandeur : 10 à 15 logements/ha en individuel diffus, 20 à 30 en individuel groupé, 40 et plus avec du collectif.

### 3. Linéaire de voirie par lot
Avec des lots de façade $f$ desservis des deux côtés d'une voie :
$$L_{voie} \\approx \\frac{N\\, f}{2}$$
Réduire la façade (lots en profondeur) diminue la voirie par lot.

### 4. Bilan d'aménageur
$$\\text{Résultat} = \\text{Recettes} - (\\text{Foncier} + \\text{Travaux VRD} + \\text{Honoraires et frais} + \\text{Frais financiers})$$
Les recettes sont les ventes de lots ; la marge couvre les risques (aléas de sol, délais de commercialisation).`,
  },
  formulas: {
    title: 'Formules essentielles — Lotissement',
    formulas: [
      { name: 'Surface cessible', latex: "A_{cessible} = A_{terrain}(1 - \\alpha)", description: 'Surface vendue en lots.', vars: [['\\alpha', 'Part voirie + espaces communs', '-', '0,20 à 0,30.']] },
      { name: 'Nombre de lots', latex: "N = \\frac{A_{cessible}}{a_{lot}}", description: 'Pour une surface moyenne de lot donnée.', vars: [['a_{lot}', 'Surface moyenne d’un lot', 'm²', '']] },
      { name: 'Densité brute', latex: "d = \\frac{N}{A_{terrain}}", description: 'Logements par hectare d’opération.', vars: [['A_{terrain}', 'Surface de l’opération', 'ha', '']] },
      { name: 'Linéaire de voirie', latex: "L_{voie} \\approx \\frac{N f}{2}", description: 'Lots de façade f desservis sur les deux rives.', vars: [['f', 'Largeur de façade d’un lot', 'm', '']] },
      { name: 'Bilan d’aménageur', latex: "R = V - (F + T + H)", description: 'Résultat de l’opération.', vars: [['V', 'Ventes', '€', ''], ['F', 'Foncier', '€', ''], ['T', 'Travaux', '€', ''], ['H', 'Honoraires, frais, financement', '€', '']] },
    ],
  },
  stepbystep: {
    title: 'Calcul complet — Lotissement de 2,4 ha en zone 1AU',
    problem: "Terrain de 2,4 ha à 30 €/m². Le PLU impose 20 logements/ha au moins et 25 % d'espaces communs. Lots de 375 m² vendus 150 €/m². Travaux de VRD : 25 000 € par lot ; honoraires et frais : 12 % des travaux et du foncier. Calculer le nombre de lots, la densité et le résultat de l'opération.",
    steps_demo: [
      { n: 1, text: "Surface cessible : 24 000 × 0,75 = 18 000 m²." },
      { n: 2, text: "Lots : 18 000 / 375 = 48 lots ; densité : 48 / 2,4 = 20 log/ha ✓." },
      { n: 3, text: "Recettes : 48 × 375 × 150 = 2 700 000 €." },
      { n: 4, text: "Dépenses : foncier 24 000 × 30 = 720 000 € ; VRD 48 × 25 000 = 1 200 000 € ; frais 12 % × 1 920 000 = 230 400 € ; total 2 150 400 €." },
      { n: 5, text: "Résultat : 2 700 000 − 2 150 400 = 549 600 €, soit 20 % des ventes : l'opération est équilibrée." },
    ],
    result_latex: "N = \\frac{24\\,000 \\times 0{,}75}{375} = 48 \\qquad R = 2\\,700\\,000 - 2\\,150\\,400 = 549\\,600\\ €",
  },
  units: {
    table: [
      ['Surface', 'm², ha', 'ft², acre', '1 ha = 10 000 m² = 2,47 acres'],
      ['Densité', 'logements/ha', 'units/acre', '20 log/ha ≈ 8 units/acre'],
      ['Charge foncière', '€/m²', 'USD/ft²', ''],
      ['Coût de VRD', '€/lot ou €/ml', 'USD/lot', ''],
      ['Linéaire', 'ml (mètre linéaire)', 'ft', ''],
    ],
    note: 'La densité « brute » rapporte les logements à toute l’opération ; la densité « nette » seulement aux lots.',
  },
  hypotheses: {
    items: [
      ['info', 'Les prix et coûts de l’exemple sont des ordres de grandeur ; ils varient fortement selon les régions.'],
      ['info', 'La part d’espaces communs dépend aussi de la gestion des eaux pluviales (noues, bassins).'],
      ['warning', 'Une étude de sol et un relevé topographique sont indispensables avant de fixer le découpage.'],
      ['warning', 'Les réseaux existants (capacité de la station d’épuration, du réseau d’eau) peuvent limiter le nombre de lots.'],
      ['tip', 'Orientez les lots pour que les jardins et séjours profitent du sud.'],
    ],
  },
  simple_examples: {
    examples: [
      { title: 'Exemple 1 : densité', given: '36 logements sur 1,8 ha', find: 'd', solution_latex: "d = \\frac{36}{1{,}8} = 20\\ \\text{log/ha}", result: '20 logements/ha.' },
      { title: 'Exemple 2 : linéaire de voirie', given: '40 lots de 15 m de façade, desservis des deux côtés', find: 'L', solution_latex: "L \\approx \\frac{40 \\times 15}{2} = 300\\ \\text{m}", result: '≈ 300 m de voie.' },
      { title: 'Exemple 3 : prix de revient d’un lot', given: 'Dépenses 2 150 400 € pour 48 lots', find: 'Coût par lot', solution_latex: "\\frac{2\\,150\\,400}{48} = 44\\,800\\ €", result: '44 800 € par lot avant marge.' },
    ],
  },
  real_examples: {
    title: 'Exemple réel — Lotissement en impasses repensé en maillage',
    examples: [
      {
        context: 'Extension d’un bourg de 3 000 habitants',
        scenario: "Le premier projet organisait 45 lots autour de quatre impasses en raquette. La commune a demandé un maillage : une voie traversante reliée aux rues existantes et des cheminements piétons vers l'école. Le linéaire de voirie a légèrement augmenté, mais la collecte des déchets, l'accès des secours et les trajets à pied ont été nettement améliorés.",
        decomposition_latex: "\\text{Impasses} \\rightarrow \\text{maillage} : \\text{accessibilité} \\uparrow, \\text{détours} \\downarrow",
        lesson: "Un lotissement doit se raccorder à la ville existante : les cheminements doux et les liaisons comptent autant que le nombre de lots.",
      },
    ],
  },
  diagrams: {
    title: 'Schéma de principe — Étapes d’un projet de lotissement',
    diagram_description: [
      'Analyse du site : topographie, sol, eaux, végétation, accès, PLU',
      'Esquisse de la trame viaire et des espaces communs',
      'Découpage des lots et vérification de la densité',
      'Avant-projet VRD et gestion des eaux pluviales',
      'Bilan d’aménageur et ajustements',
      'Permis d’aménager, travaux, commercialisation, rétrocession',
    ],
  },
  mistakes: {
    items: [
      ['Oublier la topographie', 'Réseaux gravitaires impossibles, terrassements coûteux', 'Caler la trame sur les pentes.'],
      ['Lots trop étroits et profonds', 'Maisons mal implantées', 'Ratio largeur/profondeur raisonnable (≈ 1/2).'],
      ['Sous-estimer les VRD', 'Opération déficitaire', 'Chiffrer un avant-projet dès l’esquisse.'],
    ],
  },
  tips: {
    tips: [
      'Retenez : 20 à 30 % de la surface en voies et espaces communs.',
      'Mutualisez noues et espaces verts pour la gestion des eaux pluviales.',
      'Prévoyez des places visiteurs (souvent 1 pour 4 à 5 lots).',
      'Vérifiez tôt la capacité des réseaux publics.',
    ],
  },
  norms: {
    norms: [
      ['Code de l’urbanisme, L. 442-1 et suivants', 'Définition et régime des lotissements.'],
      ['Code de l’urbanisme, R. 421-19', 'Opérations soumises à permis d’aménager.'],
      ['PLU et OAP', 'Règles et orientations locales (densité, espaces verts).'],
      ['Loi Climat et résilience (2021)', 'Objectif de zéro artificialisation nette.'],
    ],
  },
  exercises: {
    exercises: [
      { level: 1, text: 'Terrain de 3 ha, 25 % d’espaces communs : quelle surface cessible ?', hint: 'A (1 − α).', answer_latex: "30\\,000 \\times 0{,}75 = 22\\,500\\ \\text{m}^2", answer_text: '22 500 m².' },
      { level: 2, text: 'Avec des lots de 450 m², combien de lots et quelle densité ?', hint: 'N = A / a ; d = N / 3.', answer_latex: "N = 50 \\qquad d = 16{,}7\\ \\text{log/ha}", answer_text: '50 lots, 16,7 log/ha.' },
      { level: 3, text: 'Pour atteindre 20 log/ha sur ces 3 ha, quelle surface moyenne de lot faut-il ?', hint: '60 logements.', answer_latex: "a = \\frac{22\\,500}{60} = 375\\ \\text{m}^2", answer_text: '375 m² en moyenne.' },
    ],
  },
  quiz: {
    title: 'Quiz — Lotissement',
    questions: [
      { q: 'Quelle autorisation pour un lotissement avec voies communes ?', options: ['Déclaration préalable', 'Permis d’aménager', 'Aucune'], correct: 1, explain: 'Création de voies ou espaces communs → permis d’aménager.' },
      { q: 'Que mesure la densité brute ?', options: ['Logements par hectare d’opération', 'Surface des maisons', 'Hauteur des bâtiments'], correct: 0, explain: 'N / surface totale.' },
      { q: 'Quel poste pèse le plus dans le coût d’aménagement ?', options: ['Les panneaux de vente', 'Voirie et réseaux', 'Les plantations'], correct: 1, explain: 'Les VRD sont le poste principal.' },
    ],
  },
  exam_questions: {
    questions: [
      'Présentez les composantes d’un plan de composition de lotissement.',
      'Calculez nombre de lots, densité et bilan d’une opération.',
      'Comparez une trame en impasses et une trame maillée.',
    ],
  },
  interview_questions: {
    questions: [
      ['Le bilan d’un lotissement est déficitaire : quels leviers ?', 'Optimiser la trame (moins de voirie par lot), ajuster la taille des lots, revoir la gestion des eaux pluviales (noues plutôt que bassins enterrés), négocier le foncier ou phaser l’opération.'],
      ['Que vérifiez-vous avant d’acheter un terrain à lotir ?', 'Zonage et OAP du PLU, topographie, sol, risques, capacité des réseaux, accès, servitudes et prix de vente du marché local.'],
    ],
  },
  practical_case: {
    title: 'Cas pratique — Comparer deux variantes de lots',
    scenario: 'Même terrain de 2,4 ha (75 % cessible). Variante A : lots de 500 m². Variante B : lots de 375 m². VRD : 25 000 € par lot ; foncier 720 000 € ; prix de vente 150 €/m² de lot ; frais 12 %.',
    description: 'Comparer densité et résultat.',
    resolutions: [
      "A : N = 36, d = 15\\ \\text{log/ha} < 20 \\Rightarrow \\text{non conforme aux OAP}",
      "A : R = 2\\,700\\,000 - (720\\,000 + 900\\,000) \\times 1{,}12 = 885\\,600\\ €",
      "B : N = 48, d = 20\\ \\text{log/ha} ✓ \\qquad R = 549\\,600\\ €",
    ],
    conclusion: 'La variante A est plus rentable mais ne respecte pas la densité imposée ; la variante B est retenue, avec un résultat encore suffisant.',
  },
  summary: {
    content: `### Le lotissement en 5 points
1. Plan de composition : voies, lots, espaces communs, réseaux.
2. $A_{cessible} = A(1 - \\alpha)$, $N = A_{cessible}/a$, $d = N/A$.
3. Trame compacte et maillée : moins de voirie, meilleure desserte.
4. Bilan : ventes − (foncier + VRD + frais).
5. Permis d'aménager, travaux, rétrocession à la commune.`,
  },
  key_points: {
    points: ['α ≈ 20 à 30 %', 'N = A(1 − α)/a', 'd = N / A (log/ha)', 'L_voie ≈ N f / 2', 'R = V − (F + T + H)'],
  },
  self_assessment: {
    objectives: [
      'Je sais composer un plan de lotissement',
      'Je sais calculer nombre de lots et densité',
      'Je sais établir un bilan d’aménageur',
      'Je connais les autorisations nécessaires',
      "J'ai réussi le quiz avec au moins 2 bonnes réponses sur 3",
    ],
  },
});
