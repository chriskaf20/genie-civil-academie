// ── Lesson: Bassins de rétention et techniques alternatives — Module 37 ─────
import { buildLesson } from './build_lesson.js';

export const lesson_hydrologie_retention = buildLesson({
  moduleId: 37,
  slug: 'hydrologie_retention',
  lessonIndex: 4,
  title: "Bassins de Rétention et Techniques Alternatives : Méthode des Pluies, Débit de Fuite, Noues et Infiltration",
  subtitle: 'Module 37 — Hydrologie & Gestion des eaux pluviales',
  level: 'Intermédiaire',
  duration: '6h',
  tags: ['Bassin de rétention', 'Méthode des pluies', 'Débit de fuite', 'Noue', 'Infiltration', 'Ajutage', 'Gestion intégrée'],
}, {
  definition: {
    title: 'Définition — Stocker temporairement l’eau de pluie',
    fr: 'Ouvrages de rétention et gestion alternative des eaux pluviales',
    en: 'Stormwater detention and sustainable drainage (SuDS)',
    metier: "Utilisés par les ingénieurs VRD, les paysagistes, les collectivités et les bureaux d'études en hydraulique urbaine.",
    content: `Un **bassin de rétention** stocke temporairement le ruissellement pour le restituer à un **débit de fuite** limité, souvent égal au débit avant aménagement (par exemple 3 à 10 L/s/ha selon les règlements locaux).

### Les techniques alternatives
Plutôt que de tout collecter en canalisation, on gère l'eau **au plus près de là où elle tombe** :
- **noues** : fossés larges et peu profonds, plantés ;
- **tranchées et puits d'infiltration** ;
- **chaussées à structure réservoir** ;
- **toitures stockantes** et végétalisées ;
- **jardins de pluie**.

### Les objectifs
Limiter les débits de pointe, réduire les volumes rejetés, améliorer la qualité des eaux, recharger les nappes, valoriser le paysage.

> 💡 Les petites pluies, les plus fréquentes, transportent l'essentiel de la pollution : les infiltrer à la source est très efficace.`,
  },
  importance: {
    content: `- **Inondations** : les réseaux existants ne peuvent pas absorber le ruissellement des nouvelles surfaces imperméables.
- **Réglementation** : les PLU et les zonages pluviaux imposent souvent un débit de fuite et un volume de stockage.
- **Milieux aquatiques** : moins de rejets polluants et de déversements d'eaux usées par temps de pluie.
- **Climat urbain** : végétalisation et îlots de fraîcheur.

> ⚠️ **À retenir** : un ouvrage de rétention mal entretenu (ajutage bouché, colmatage) perd son efficacité.`,
  },
  applications: {
    examples: [
      ['Lotissement', 'Noues le long des voiries et bassin paysager en point bas.'],
      ['Parking', 'Chaussée réservoir sous des pavés drainants.'],
      ['Zone d’activités', 'Bassin étanche avec séparateur pour les eaux polluées.'],
      ['Bâtiment tertiaire', 'Toiture stockante avec régulateur de débit.'],
      ['Ville dense', 'Bassin enterré sous une place publique.'],
    ],
  },
  theory: {
    title: 'Théorie — Dimensionner un volume de rétention',
    content: `### 1. Surface active
$$S_a = C \\times A$$
$C$ : coefficient d'apport (≈ coefficient de ruissellement) ; $A$ : surface totale.

### 2. Méthode des pluies
Pour une durée $t$, la hauteur de pluie est donnée par la courbe IDF de Montana : $h(t) = a \\, t^{1-b}$. Le volume à stocker est la différence entre ce qui entre et ce qui sort :
$$V(t) = 10 \\, S_a \\, h(t) - Q_f \\, t$$
($V$ en m³, $S_a$ en ha, $h$ en mm, $Q_f$ en m³/min, $t$ en min). On cherche la durée qui **maximise** $V(t)$.

### 3. Durée critique (solution analytique)
$$\\frac{dV}{dt} = 0 \\Rightarrow t^* = \\left( \\frac{10 \\, S_a \\, a \\, (1-b)}{Q_f} \\right)^{1/b}$$

### 4. Ouvrage de régulation (ajutage)
$$Q_f = C_d \\, A_o \\sqrt{2 g h}$$
$C_d$ ≈ 0,6 pour un orifice ; $h$ : charge sur l'orifice.

### 5. Infiltration
$$Q_{inf} = K \\times S_{inf}$$
Le temps de vidange doit rester raisonnable (souvent < 24 à 48 h) pour retrouver la capacité avant la pluie suivante.`,
  },
  formulas: {
    title: 'Formules essentielles — Rétention',
    formulas: [
      {
        name: 'Volume par la méthode des pluies',
        latex: "V(t) = 10 \\, S_a \\, a \\, t^{1-b} - Q_f \\, t",
        description: 'Volume maximal sur toutes les durées t.',
        vars: [
          ['V', 'Volume à stocker', 'm³', ''],
          ['S_a', 'Surface active', 'ha', 'C × A.'],
          ['a, b', 'Coefficients de Montana', '-', 'h en mm, t en min.'],
          ['Q_f', 'Débit de fuite', 'm³/min', ''],
          ['t', 'Durée de pluie', 'min', ''],
        ],
      },
      {
        name: 'Débit d’un orifice',
        latex: "Q = C_d \\, A_o \\sqrt{2 g h}",
        description: 'Dimensionnement de l’ajutage de fuite.',
        vars: [
          ['C_d', 'Coefficient de débit', '-', '≈ 0,6.'],
          ['A_o', "Section de l'orifice", 'm²', ''],
          ['h', 'Charge sur le centre de l’orifice', 'm', ''],
        ],
      },
      {
        name: 'Débit d’infiltration',
        latex: "Q_{inf} = K \\, S_{inf}",
        description: 'Capacité d’infiltration d’une noue ou d’un bassin.',
        vars: [
          ['K', 'Perméabilité du sol', 'm/s', '≥ 10⁻⁶ m/s conseillé.'],
          ['S_{inf}', "Surface d'infiltration", 'm²', 'Fond (et parois si justifié).'],
        ],
      },
      {
        name: 'Temps de vidange',
        latex: "t_v = \\frac{V}{Q_f}",
        description: 'Durée pour vider l’ouvrage plein.',
        vars: [
          ['t_v', 'Temps de vidange', 's', 'Souvent < 24 à 48 h.'],
        ],
      },
    ],
  },
  stepbystep: {
    title: 'Calcul complet — Bassin de rétention d’un lotissement',
    problem: "Lotissement de 4 ha, coefficient d'apport 0,5, débit de fuite imposé 5 L/s/ha (soit 20 L/s). Pluie décennale de Montana (t en min, h en mm) : a = 5,0 ; b = 0,6. Calculer le volume de rétention, le temps de vidange et le diamètre de l'ajutage pour 1,5 m de charge.",
    steps_demo: [
      { n: 1, text: "S_a = 0,5 × 4 = 2,0 ha ; Q_f = 0,020 m³/s = 1,2 m³/min." },
      { n: 2, text: "V(t) = 10 × 2 × 5 × t^0,4 − 1,2 t = 100 t^0,4 − 1,2 t." },
      { n: 3, text: "Durée critique : t* = (100 × 0,4 / 1,2)^(1/0,6) = 33,3^1,667 = 345 min." },
      { n: 4, text: "V = 100 × 345^0,4 − 1,2 × 345 = 1 035 − 414 = 621 m³ (soit 310 m³ par hectare actif)." },
      { n: 5, text: "Vidange : 621 / 0,020 = 31 050 s = 8,6 h. Ajutage : A_o = 0,020 / (0,6 × √(2 × 9,81 × 1,5)) = 0,00614 m², d = 88 mm (on retient 90 mm avec une grille de protection)." },
    ],
    result_latex: "V_{max} = 100 \\times 345^{0{,}4} - 1{,}2 \\times 345 = 621\\ \\text{m}^3 \\qquad d = \\sqrt{\\frac{4 \\times 0{,}00614}{\\pi}} = 88\\ \\text{mm}",
  },
  units: {
    table: [
      ['Débit de fuite', 'L/s/ha', 'cfs/acre', '1 L/s/ha = 0,0143 cfs/acre'],
      ['Volume spécifique', 'm³/ha actif', 'ft³/acre', 'Souvent 200 à 500 m³/ha actif'],
      ['Perméabilité', 'm/s', 'in/h', '10⁻⁵ m/s = 1,42 in/h'],
      ['Hauteur de pluie', 'mm', 'in', '1 mm sur 1 ha = 10 m³'],
      ['Temps de vidange', 'h', 'h', '< 24 à 48 h'],
    ],
    note: 'Retenez : 1 mm de pluie sur 1 ha représente 10 m³.',
  },
  hypotheses: {
    items: [
      ['info', 'La méthode des pluies suppose un débit de fuite constant et une pluie uniforme sur la surface active.'],
      ['info', 'Les coefficients de Montana dépendent de la station météorologique, de la période de retour et de la plage de durées.'],
      ['warning', 'L’infiltration est déconseillée sur sols pollués, en périmètre de captage ou sur sols argileux gonflants et gypses.'],
      ['warning', 'Un ajutage de petit diamètre se bouche facilement : prévoir grille, regard de visite et entretien.'],
      ['tip', 'Prévoyez une surverse dimensionnée pour une pluie plus rare que la pluie de projet.'],
    ],
  },
  simple_examples: {
    examples: [
      {
        title: 'Exemple 1 : volume d’une petite pluie',
        given: 'Pluie de 15 mm sur 0,5 ha imperméable',
        find: 'Volume ruisselé',
        solution_latex: "V = 15 \\times 0{,}5 \\times 10 = 75\\ \\text{m}^3",
        result: '75 m³.',
      },
      {
        title: 'Exemple 2 : infiltration d’une noue',
        given: 'Fond de noue 200 m × 1,5 m ; K = 10⁻⁵ m/s',
        find: 'Q_inf',
        solution_latex: "Q_{inf} = 10^{-5} \\times 300 = 3 \\times 10^{-3}\\ \\text{m}^3/\\text{s}",
        result: '3 L/s, soit 10,8 m³/h.',
      },
      {
        title: 'Exemple 3 : temps de vidange par infiltration',
        given: 'Volume stocké 150 m³ ; Q_inf = 3 L/s',
        find: 't_v',
        solution_latex: "t_v = \\frac{150}{0{,}003} = 50\\,000\\ \\text{s} = 13{,}9\\ \\text{h}",
        result: 'Environ 14 h : acceptable.',
      },
    ],
  },
  real_examples: {
    title: 'Exemple réel — Les villes éponges',
    examples: [
      {
        context: 'Programmes « villes éponges » en Chine et politiques de désimperméabilisation en Europe',
        scenario: "Plusieurs villes ont généralisé les noues, jardins de pluie, chaussées perméables et parcs inondables. L'objectif est de gérer sur place la majorité des pluies courantes, en réservant les réseaux et bassins aux événements plus rares. Les retours montrent une réduction des débordements de réseaux pour les pluies fréquentes, mais des performances limitées lors d'événements extrêmes.",
        decomposition_latex: "\\text{Infiltration à la source} \\Rightarrow V_{rejeté} \\downarrow \\ ; \\ \\text{pluies extrêmes} \\Rightarrow \\text{besoin d'axes d'écoulement préservés}",
        lesson: "La gestion à la source traite les pluies fréquentes ; pour les pluies exceptionnelles, il faut organiser des chemins d'eau sûrs en surface.",
      },
    ],
  },
  diagrams: {
    title: 'Schéma de principe — Gestion intégrée des eaux pluviales',
    diagram_description: [
      'Pluies courantes : infiltration à la parcelle (jardins, toitures végétalisées)',
      'Pluies moyennes : noues et tranchées le long des voiries',
      'Pluies fortes : bassin de rétention avec débit de fuite régulé',
      'Pluies exceptionnelles : surverse et axes d’écoulement de surface',
      'Exutoire : réseau ou milieu naturel',
      'Entretien et suivi des ouvrages',
    ],
  },
  mistakes: {
    items: [
      ['Calculer V pour une seule durée de pluie', 'Volume sous-estimé', 'Rechercher la durée critique qui maximise V.'],
      ['Oublier la surverse', 'Débordement incontrôlé', 'Prévoir une surverse dimensionnée.'],
      ['Infiltrer sans essai de perméabilité', 'Ouvrage qui ne se vide pas', 'Réaliser des essais in situ (Porchet, Matsuo).'],
    ],
  },
  tips: {
    tips: [
      'Retenez : 1 mm sur 1 ha = 10 m³.',
      'Préférez des ouvrages à ciel ouvert, faciles à entretenir.',
      'Concevez des bassins multifonctions (parc, terrain de sport).',
      'Vérifiez les exigences du zonage pluvial de la commune.',
    ],
  },
  norms: {
    norms: [
      ['NF EN 752', 'Réseaux d’évacuation et d’assainissement à l’extérieur des bâtiments.'],
      ['Guide « La ville et son assainissement » (CERTU)', 'Méthodes de dimensionnement des ouvrages de rétention.'],
      ['Code de l’environnement, rubrique 2.1.5.0', 'Rejets d’eaux pluviales.'],
      ['Code général des collectivités territoriales, L. 2224-10', 'Zonage pluvial communal.'],
    ],
  },
  exercises: {
    exercises: [
      {
        level: 1,
        text: 'Quel volume représente une pluie de 30 mm sur 2,5 ha actifs ?',
        hint: '1 mm sur 1 ha = 10 m³.',
        answer_latex: "30 \\times 2{,}5 \\times 10 = 750\\ \\text{m}^3",
        answer_text: '750 m³.',
      },
      {
        level: 2,
        text: 'Calculer le diamètre d’un orifice laissant passer 10 L/s sous 1,0 m de charge (C_d = 0,6).',
        hint: 'A = Q / (C_d √(2gh)).',
        answer_latex: "A = \\frac{0{,}010}{0{,}6 \\times 4{,}43} = 0{,}00376\\ \\text{m}^2 \\Rightarrow d = 69\\ \\text{mm}",
        answer_text: 'Environ 70 mm.',
      },
      {
        level: 3,
        text: 'Refaire le calcul du bassin de l’exemple avec un débit de fuite de 40 L/s.',
        hint: 'Q_f = 2,4 m³/min ; t* = (40 / 2,4)^(1/0,6).',
        answer_latex: "t^* = 16{,}67^{1{,}667} = 109\\ \\text{min} \\qquad V = 100 \\times 109^{0{,}4} - 2{,}4 \\times 109 = 653 - 262 = 391\\ \\text{m}^3",
        answer_text: 'Environ 390 m³ : doubler le débit de fuite réduit le volume d’environ 37 %.',
      },
    ],
  },
  quiz: {
    title: 'Quiz — Rétention des eaux pluviales',
    questions: [
      { q: 'Que représente 1 mm de pluie sur 1 ha ?', options: ['1 m³', '10 m³', '100 m³'], correct: 1, explain: '0,001 m × 10 000 m² = 10 m³.' },
      { q: 'Dans la méthode des pluies, on retient…', options: ['La pluie la plus courte', 'La durée qui maximise le volume', 'La pluie moyenne annuelle'], correct: 1, explain: 'On cherche le maximum de V(t).' },
      { q: 'Quel ouvrage infiltre l’eau le long d’une voirie ?', options: ['Une noue', 'Un déversoir d’orage', 'Un poste de relevage'], correct: 0, explain: 'La noue est un fossé large et peu profond.' },
    ],
  },
  exam_questions: {
    questions: [
      'Présentez la méthode des pluies et la recherche de la durée critique.',
      'Comparez bassin de rétention et techniques alternatives.',
      'Quelles conditions faut-il vérifier avant d’infiltrer les eaux pluviales ?',
    ],
  },
  interview_questions: {
    questions: [
      ['Comment gérez-vous les eaux pluviales d’un lotissement ?', 'Je privilégie l’infiltration à la source si le sol le permet, des noues le long des voies, puis un bassin paysager régulé au débit de fuite imposé, avec une surverse et des axes d’écoulement pour les pluies exceptionnelles.'],
      ['Quels sont les points d’entretien d’un bassin ?', 'Ajutage et grilles, curage des sédiments, fauchage, contrôle de la surverse et des ouvrages de prétraitement, après chaque gros orage et au moins annuellement.'],
    ],
  },
  practical_case: {
    title: 'Cas pratique — Parking avec chaussée réservoir',
    scenario: 'Parking de 6 000 m² (C = 0,9). Volume à stocker calculé : 250 m³. Chaussée réservoir en grave à 35 % de vides ; sol de perméabilité 5 × 10⁻⁶ m/s.',
    description: 'Dimensionner l’épaisseur de la couche de stockage et vérifier la vidange.',
    resolutions: [
      "e = \\frac{V}{S \\times n} = \\frac{250}{6\\,000 \\times 0{,}35} = 0{,}12\\ \\text{m}",
      "Q_{inf} = 5 \\times 10^{-6} \\times 6\\,000 = 0{,}030\\ \\text{m}^3/\\text{s}",
      "t_v = \\frac{250}{0{,}030} = 8\\,333\\ \\text{s} = 2{,}3\\ \\text{h}",
    ],
    conclusion: 'Une couche de stockage de 15 cm (marge incluse) suffit ; l’infiltration vide la structure en environ 2,3 h.',
  },
  summary: {
    content: `### La rétention en 5 points
1. Surface active $S_a = C \\times A$ ; 1 mm sur 1 ha = 10 m³.
2. Méthode des pluies : $V(t) = 10 S_a h(t) - Q_f t$, maximum sur $t$.
3. Ajutage : $Q = C_d A \\sqrt{2gh}$.
4. Infiltration : $Q = K S$ ; vidange < 24 à 48 h.
5. Gestion à la source + bassin + surverse + entretien.`,
  },
  key_points: {
    points: [
      '1 mm sur 1 ha = 10 m³',
      'V(t) maximal sur la durée critique',
      'Q = C_d A √(2gh)',
      'Vidange < 24–48 h',
      'Surverse obligatoire',
    ],
  },
  self_assessment: {
    objectives: [
      'Je sais calculer une surface active',
      'Je sais dimensionner un bassin par la méthode des pluies',
      'Je sais dimensionner un ajutage',
      'Je connais les techniques alternatives',
      "J'ai réussi le quiz avec au moins 2 bonnes réponses sur 3",
    ],
  },
});
