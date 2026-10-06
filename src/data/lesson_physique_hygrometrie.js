// ── Lesson: Hygrométrie et condensation — Module 42 ──────────────────────────
import { buildLesson } from './build_lesson.js';

export const lesson_physique_hygrometrie = buildLesson({
  moduleId: 42,
  slug: 'physique_hygrometrie',
  lessonIndex: 2,
  title: "Hygrométrie et Condensation : Point de Rosée, Pare-Vapeur, Méthode de Glaser et Moisissures",
  subtitle: 'Module 42 — Physique du bâtiment : thermique, hygrométrie & acoustique',
  level: 'Intermédiaire',
  duration: '5h',
  diagramType: 'none',
  tags: ['Hygrométrie', 'Point de rosée', 'Condensation', 'Pare-vapeur', 'Glaser', 'sd', 'Moisissures', 'fRsi'],
}, {
  definition: {
    title: 'Définition — L’eau invisible dans l’air et dans les murs',
    fr: 'Hygrométrie et condensation',
    en: 'Hygrothermal behaviour and condensation',
    metier: "Concerne les thermiciens, architectes, bureaux d'études enveloppe, charpentiers ossature bois et experts en pathologie.",
    content: `L'air contient de la **vapeur d'eau**. Sa quantité maximale (saturation) augmente fortement avec la température. L'**humidité relative** est le rapport entre la pression de vapeur réelle et la pression de saturation :
$$\\varphi = \\frac{p_v}{p_{sat}(T)}$$

Quand l'air se refroidit au contact d'une surface froide, il atteint sa **température de rosée** : la vapeur se condense.

### Deux risques dans le bâtiment
- **Condensation superficielle** : sur une surface intérieure froide (vitrage, pont thermique) → moisissures.
- **Condensation dans la masse** : la vapeur migre de l'intérieur (chaud, humide) vers l'extérieur et se condense dans une paroi → isolant mouillé, bois pourri.

### La règle de conception
Une paroi doit être **plus étanche à la vapeur côté chaud** (intérieur) que côté froid : pare-vapeur à l'intérieur, couches ouvertes à la vapeur à l'extérieur.

> 💡 Un logement de 4 personnes produit 10 à 15 kg d'eau par jour (respiration, cuisine, douches) : la ventilation est indispensable.`,
  },
  importance: {
    content: `- **Santé** : les moisissures dégradent la qualité de l'air et favorisent les allergies.
- **Durabilité** : un isolant humide perd ses performances ; le bois humide pourrit.
- **Rénovation** : isoler par l'intérieur un mur ancien sans gestion de la vapeur provoque souvent des désordres.
- **Sinistralité** : la condensation est une cause fréquente de litiges en construction ossature bois.

> ⚠️ **À retenir** : isolation, étanchéité à l'air, gestion de la vapeur et ventilation forment un tout indissociable.`,
  },
  applications: {
    examples: [
      ['Maison ossature bois', 'Pare-vapeur intérieur, pare-pluie ouvert à la vapeur à l’extérieur.'],
      ['Isolation intérieure d’un mur ancien', 'Membrane hygrovariable pour permettre le séchage.'],
      ['Pont thermique de balcon', 'Vérifier la température de surface pour éviter les moisissures.'],
      ['Piscine couverte', 'Air très humide : pare-vapeur très performant et déshumidification.'],
      ['Toiture-terrasse', 'Pare-vapeur sous l’isolant.'],
    ],
  },
  theory: {
    title: 'Théorie — Pressions de vapeur et méthode de Glaser',
    content: `### 1. Pression de saturation (formule de Magnus)
$$p_{sat}(T) = 610{,}5 \\, \\exp\\left(\\frac{17{,}27\\, T}{T + 237{,}3}\\right) \\quad [\\text{Pa}, T \\text{ en °C}]$$
20 °C : 2 337 Pa ; 10 °C : 1 228 Pa ; 0 °C : 611 Pa.

### 2. Résistance à la diffusion de vapeur
$$s_d = \\mu \\times e$$
$\\mu$ : facteur de résistance à la diffusion (air = 1) ; $s_d$ : épaisseur d'air équivalente (m). Laine minérale μ ≈ 1 ; béton μ ≈ 60 à 130 ; OSB μ ≈ 150 à 200 ; film polyéthylène $s_d$ ≈ 20 à 100 m.

### 3. Méthode de Glaser (régime permanent)
1. Calculer le profil de **température** à travers la paroi (résistances thermiques) et en déduire $p_{sat}$ à chaque interface.
2. Tracer la **pression de vapeur** réelle, linéaire en fonction du $s_d$ cumulé, de $p_{v,int}$ à $p_{v,ext}$.
3. S'il existe une interface où $p_v > p_{sat}$, il y a **condensation**.

### 4. Condensation superficielle et facteur de température
$$f_{Rsi} = \\frac{T_{si} - T_e}{T_i - T_e}$$
Pour éviter les moisissures, la surface intérieure doit rester au-dessus de la température où l'humidité relative locale atteindrait 80 % ; en logement courant, on vise souvent $f_{Rsi} \\geq 0{,}7$.

### 5. Règle des « 5 fois »
Pour une paroi légère, on vise $s_{d,int} \\geq 5 \\times s_{d,ext}$ (couches intérieures au moins 5 fois plus résistantes à la vapeur que les couches extérieures à l'isolant).`,
  },
  formulas: {
    title: 'Formules essentielles — Hygrométrie',
    formulas: [
      {
        name: 'Pression de saturation (Magnus)',
        latex: "p_{sat} = 610{,}5\\, \\exp\\left(\\frac{17{,}27\\, T}{T + 237{,}3}\\right)",
        description: 'Valable pour T ≥ 0 °C.',
        vars: [['p_{sat}', 'Pression de vapeur saturante', 'Pa', ''], ['T', 'Température', '°C', '']],
      },
      {
        name: 'Humidité relative',
        latex: "\\varphi = \\frac{p_v}{p_{sat}(T)}",
        description: 'Rapport à la saturation.',
        vars: [['p_v', 'Pression de vapeur', 'Pa', ''], ['\\varphi', 'Humidité relative', '-', '0 à 1.']],
      },
      {
        name: 'Épaisseur d’air équivalente',
        latex: "s_d = \\mu \\, e",
        description: 'Résistance d’une couche à la diffusion de vapeur.',
        vars: [['\\mu', 'Facteur de résistance', '-', 'Air = 1.'], ['e', 'Épaisseur', 'm', '']],
      },
      {
        name: 'Pression de vapeur à une interface (Glaser)',
        latex: "p_{v,x} = p_{v,int} - (p_{v,int} - p_{v,ext}) \\frac{s_{d,x}}{s_{d,tot}}",
        description: 'Décroissance linéaire en fonction du s_d cumulé depuis l’intérieur.',
        vars: [['s_{d,x}', 's_d cumulé jusqu’à l’interface', 'm', ''], ['s_{d,tot}', 's_d total de la paroi', 'm', '']],
      },
      {
        name: 'Facteur de température',
        latex: "f_{Rsi} = \\frac{T_{si} - T_e}{T_i - T_e}",
        description: 'Indicateur de risque de moisissure sur une surface intérieure.',
        vars: [['T_{si}', 'Température de surface intérieure', '°C', '']],
      },
    ],
  },
  stepbystep: {
    title: 'Calcul complet — Mur à ossature bois avec et sans pare-vapeur',
    problem: "Mur ossature bois : BA13 intérieur (s_d 0,1 m), laine de 145 mm (s_d 0,15 m), OSB extérieur de 12 mm (s_d 2,4 m), bardage ventilé. Intérieur 20 °C – 50 % ; extérieur 0 °C – 80 %. La température à la face intérieure de l'OSB vaut 0,6 °C. Y a-t-il condensation sans pare-vapeur, puis avec un pare-vapeur de s_d = 18 m ?",
    steps_demo: [
      { n: 1, text: "p_v,int = 0,5 × 2 337 = 1 169 Pa ; p_v,ext = 0,8 × 611 = 489 Pa." },
      { n: 2, text: "p_sat à l'interface laine / OSB (0,6 °C) ≈ 640 Pa." },
      { n: 3, text: "Sans pare-vapeur : s_d avant l'OSB = 0,25 m ; s_d total = 2,65 m ; p_v = 1 169 − 680 × 0,25/2,65 = 1 105 Pa > 640 Pa → condensation." },
      { n: 4, text: "Avec pare-vapeur : s_d intérieur = 18,25 m ; s_d total = 20,65 m ; p_v = 1 169 − 680 × 18,25/20,65 = 568 Pa < 640 Pa → pas de condensation." },
      { n: 5, text: "Contrôle de la règle des 5 fois : 18,25 / 2,4 = 7,6 ≥ 5 ✓." },
    ],
    result_latex: "p_v = 1\\,169 - 680 \\times \\frac{18{,}25}{20{,}65} = 568\\ \\text{Pa} < p_{sat}(0{,}6\\,°\\text{C}) \\approx 640\\ \\text{Pa}",
  },
  units: {
    table: [
      ['Pression de vapeur', 'Pa', 'inHg', '1 inHg = 3 386 Pa'],
      ['Humidité relative', '%', '%', ''],
      ['s_d', 'm', 'perm (inverse)', 'Plus s_d est grand, plus la couche bloque la vapeur'],
      ['Production de vapeur', 'kg/jour', 'lb/day', '≈ 10 à 15 kg/j pour 4 personnes'],
      ['Teneur en eau de l’air', 'g/kg d’air sec', 'gr/lb', '20 °C – 50 % : ≈ 7,3 g/kg'],
    ],
    note: 'La méthode de Glaser est une méthode simplifiée en régime permanent ; les logiciels dynamiques (type WUFI) affinent l’analyse.',
  },
  hypotheses: {
    items: [
      ['info', 'Glaser ignore le stockage et le transport capillaire de l’eau : il est conservatif pour les matériaux minéraux.'],
      ['info', 'Les conditions climatiques retenues (température, humidité extérieure) dépendent de la région et de la saison.'],
      ['warning', 'Un pare-vapeur percé (prises, gaines) perd l’essentiel de son efficacité : la convection d’air humide transporte bien plus d’eau que la diffusion.'],
      ['warning', 'En rénovation de murs anciens perspirants, un pare-vapeur trop fermé peut piéger l’humidité ; préférer une membrane hygrovariable.'],
      ['tip', 'Ventilez : réduire l’humidité intérieure est la mesure la plus efficace contre la condensation.'],
    ],
  },
  simple_examples: {
    examples: [
      { title: 'Exemple 1 : point de rosée', given: 'Air intérieur 20 °C – 50 % : p_v = 1 169 Pa', find: 'Température de rosée', solution_latex: "p_{sat}(T_r) = 1\\,169\\ \\text{Pa} \\Rightarrow T_r \\approx 9{,}3\\ °\\text{C}", result: 'Toute surface à moins de 9,3 °C se couvre de condensation.' },
      { title: 'Exemple 2 : s_d d’un film', given: 'Film polyéthylène de 0,2 mm, μ = 100 000', find: 's_d', solution_latex: "s_d = 100\\,000 \\times 0{,}0002 = 20\\ \\text{m}", result: '20 m : très fermé à la vapeur.' },
      { title: 'Exemple 3 : pont thermique', given: 'T_i = 20 °C, T_e = 0 °C, angle de mur à 12 °C', find: 'f_Rsi', solution_latex: "f_{Rsi} = \\frac{12 - 0}{20 - 0} = 0{,}60 < 0{,}70", result: 'Risque de moisissure : traiter le pont thermique.' },
    ],
  },
  real_examples: {
    title: 'Exemple réel — Isolation intérieure d’une maison ancienne',
    examples: [
      {
        context: 'Rénovation d’une maison en pierre avec doublage collé en polystyrène et peinture étanche',
        scenario: "Après les travaux, des taches noires sont apparues derrière les meubles et au bas des murs. Le mur ancien, qui séchait auparavant vers l'intérieur, était piégé entre un enduit extérieur ciment et le doublage ; les remontées capillaires et la condensation se sont accumulées.",
        decomposition_latex: "\\text{Mur humide} + \\text{doublage fermé} + \\text{ventilation faible} \\Rightarrow \\text{moisissures et dégradation}",
        lesson: "En rénovation, on choisit des isolants et membranes compatibles (capillaires, hygrovariables), on traite les remontées d'eau et on assure une ventilation suffisante.",
      },
    ],
  },
  diagrams: {
    title: 'Schéma de principe — Vérifier une paroi par Glaser',
    diagram_description: [
      'Conditions intérieures et extérieures : T et humidité relative',
      'Profil de température à travers les couches',
      'Pression de saturation à chaque interface',
      'Pression de vapeur réelle, linéaire en s_d cumulé',
      'Comparaison p_v / p_sat à chaque interface',
      'Correction : pare-vapeur, ordre des couches, ventilation',
    ],
  },
  mistakes: {
    items: [
      ['Pare-vapeur côté froid', 'Condensation piégée dans l’isolant', 'Le placer côté chaud (intérieur).'],
      ['Membrane percée ou non jointe', 'Transport d’air humide', 'Adhésifs, manchons et passe-câbles étanches.'],
      ['Ventilation coupée pour économiser', 'Humidité intérieure excessive', 'Maintenir la VMC en fonctionnement.'],
    ],
  },
  tips: {
    tips: [
      'Retenez : 20 °C – 50 % → rosée vers 9 °C.',
      'Plus une couche est à l’extérieur, plus elle doit être ouverte à la vapeur.',
      'Contrôlez l’étanchéité à l’air par un test d’infiltrométrie.',
      'Pour les cas complexes (murs anciens, toitures froides), utilisez une simulation dynamique.',
    ],
  },
  norms: {
    norms: [
      ['NF EN ISO 13788', 'Performance hygrothermique : température de surface et condensation (méthode Glaser).'],
      ['NF EN ISO 12572', 'Mesure de la perméabilité à la vapeur d’eau.'],
      ['NF EN 15026', 'Simulation hygrothermique dynamique.'],
      ['NF DTU 31.2', 'Maisons à ossature bois (pare-vapeur, pare-pluie).'],
    ],
  },
  exercises: {
    exercises: [
      { level: 1, text: 'Calculer p_v d’un air à 20 °C et 60 % d’humidité relative.', hint: 'p_sat(20 °C) = 2 337 Pa.', answer_latex: "p_v = 0{,}60 \\times 2\\,337 = 1\\,402\\ \\text{Pa}", answer_text: '1 402 Pa.' },
      { level: 2, text: 'Calculer s_d de 20 cm de béton (μ = 80).', hint: 's_d = μ e.', answer_latex: "s_d = 80 \\times 0{,}20 = 16\\ \\text{m}", answer_text: '16 m.' },
      { level: 3, text: 'Paroi : s_d intérieur à l’interface = 1 m ; s_d total = 5 m ; p_v,int = 1 169 Pa ; p_v,ext = 489 Pa ; p_sat à l’interface = 900 Pa. Y a-t-il condensation ?', hint: 'Glaser.', answer_latex: "p_v = 1\\,169 - 680 \\times \\frac{1}{5} = 1\\,033\\ \\text{Pa} > 900", answer_text: 'Oui : 1 033 Pa > 900 Pa, condensation à cette interface.' },
    ],
  },
  quiz: {
    title: 'Quiz — Hygrométrie',
    questions: [
      { q: 'Où place-t-on le pare-vapeur ?', options: ['Côté froid', 'Côté chaud (intérieur)', 'Au milieu de l’isolant'], correct: 1, explain: 'Il bloque la vapeur avant qu’elle atteigne les zones froides.' },
      { q: 'Que représente s_d ?', options: ['Une température', 'L’épaisseur d’air équivalente pour la vapeur', 'Une conductivité'], correct: 1, explain: 's_d = μ × e.' },
      { q: 'Air à 20 °C et 50 % : vers quelle température apparaît la condensation ?', options: ['≈ 2 °C', '≈ 9 °C', '≈ 15 °C'], correct: 1, explain: 'Point de rosée ≈ 9,3 °C.' },
    ],
  },
  exam_questions: {
    questions: [
      'Expliquez la différence entre condensation superficielle et condensation dans la masse.',
      'Détaillez la méthode de Glaser sur un exemple.',
      'Pourquoi la règle des « 5 fois » protège-t-elle les parois légères ?',
    ],
  },
  interview_questions: {
    questions: [
      ['Un client signale des moisissures dans les angles d’une chambre : que faites-vous ?', 'Je mesure l’humidité et les températures de surface, je vérifie la ventilation et les ponts thermiques (f_Rsi), puis je traite la cause : ventilation, isolation du pont thermique, réduction de la production de vapeur.'],
      ['Quelle membrane pour isoler un mur ancien par l’intérieur ?', 'Une membrane hygrovariable, avec un isolant capillaire si possible, après traitement des remontées d’eau, pour que le mur puisse sécher dans les deux sens.'],
    ],
  },
  practical_case: {
    title: 'Cas pratique — Pont thermique en about de dalle',
    scenario: 'Logement à 20 °C, extérieur à −5 °C. Une simulation donne 10,5 °C en surface intérieure au droit d’un about de dalle de balcon non traité ; avec rupteur, 16 °C.',
    description: 'Évaluer le risque de moisissure avant et après traitement.',
    resolutions: [
      "f_{Rsi,\\ sans} = \\frac{10{,}5 - (-5)}{20 - (-5)} = 0{,}62 < 0{,}70",
      "f_{Rsi,\\ avec} = \\frac{16 - (-5)}{25} = 0{,}84 \\geq 0{,}70",
      "\\text{Rosée intérieure (20 °C – 50 \\%)} \\approx 9{,}3\\ °\\text{C} : 10{,}5\\ °\\text{C est à peine au-dessus}",
    ],
    conclusion: 'Sans rupteur, la surface est presque au point de rosée et le risque de moisissure est élevé ; le rupteur de pont thermique supprime le risque.',
  },
  summary: {
    content: `### L'hygrométrie en 5 points
1. $\\varphi = p_v / p_{sat}(T)$ ; 20 °C – 50 % → rosée ≈ 9 °C.
2. $s_d = \\mu e$ mesure la résistance à la vapeur.
3. Glaser : comparer $p_v$ (linéaire en $s_d$) et $p_{sat}$ (selon T) à chaque interface.
4. Pare-vapeur côté chaud, couches extérieures ouvertes (règle des 5 fois).
5. Surfaces : $f_{Rsi} \\geq 0{,}7$ et ventilation suffisante.`,
  },
  key_points: {
    points: ['φ = p_v / p_sat', 'Rosée ≈ 9 °C (20 °C – 50 %)', 's_d = μ × e', 'Pare-vapeur côté chaud', 'f_Rsi ≥ 0,7'],
  },
  self_assessment: {
    objectives: [
      'Je sais calculer une pression de vapeur et un point de rosée',
      'Je sais appliquer la méthode de Glaser',
      'Je sais placer correctement un pare-vapeur',
      'Je sais évaluer un risque de moisissure par f_Rsi',
      "J'ai réussi le quiz avec au moins 2 bonnes réponses sur 3",
    ],
  },
});
