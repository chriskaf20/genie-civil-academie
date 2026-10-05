// ── Lesson: Dynamique — lois de Newton, énergie et vibrations — Module 2 ──────
import { buildLesson } from './build_lesson.js';

export const lesson_physique_dynamique = buildLesson({
  moduleId: 2,
  slug: 'physique_dynamique',
  lessonIndex: 2,
  title: "Dynamique des Corps : Lois de Newton, Énergie, Quantité de Mouvement & Oscillations",
  subtitle: 'Module 02 — Physique fondamentale & Physique des matériaux',
  level: 'Débutant',
  duration: '10h',
  diagramType: 'force_decomposition',
  tags: ['Physique', 'Newton', 'Énergie cinétique', 'Impulsion', 'Chocs', 'Oscillateur', 'Fréquence propre'],
}, {
  definition: {
    title: 'Définition — Les corps en mouvement',
    fr: 'Dynamique (mouvement des corps sous l’effet des forces)',
    en: 'Dynamics',
    metier: "Utilisée pour les chocs de véhicules sur les ouvrages, les engins de chantier, les vibrations des planchers et passerelles, les machines tournantes et le génie parasismique.",
    content: `La **dynamique** relie les forces au mouvement qu'elles provoquent. Elle repose sur les trois **lois de Newton** :
1. **Inertie** : un corps garde son état de repos ou de mouvement rectiligne uniforme si la somme des forces est nulle (c'est la statique).
2. **Principe fondamental** : $\\sum \\vec{F} = m \\, \\vec{a}$.
3. **Action-réaction** : deux corps exercent l'un sur l'autre des forces égales et opposées.

### Trois outils complémentaires
- **Newton** : forces et accélérations à chaque instant.
- **Énergie** : le travail des forces modifie l'énergie cinétique ; pratique pour les vitesses et les distances.
- **Quantité de mouvement** : efficace pour les chocs, où les forces sont très grandes et très brèves.

> 💡 Une structure réagit dynamiquement quand la charge varie vite par rapport à sa période propre : le même poids posé brusquement produit deux fois plus de flèche que posé lentement.`,
  },
  importance: {
    content: `- **Chocs** : les Eurocodes imposent des forces d'impact de véhicules sur les piles de ponts et poteaux de parkings.
- **Engins** : freinage des véhicules, stabilité des grues, levage des charges (accélérations).
- **Vibrations** : planchers, passerelles et machines doivent éviter la résonance.
- **Séisme** : les forces sismiques sont des forces d'inertie $F = m \\, a$.

> ⚠️ **À retenir** : une charge appliquée brutalement double l'effet d'une charge appliquée progressivement (coefficient dynamique de 2).`,
  },
  applications: {
    examples: [
      ['Parking', 'Force de choc d’un véhicule sur un poteau ou un garde-corps.'],
      ['Levage', 'Effort dans l’élingue d’une grue lors de l’accélération de la charge.'],
      ['Route', 'Distance de freinage et de sécurité selon la vitesse.'],
      ['Passerelle', 'Fréquence propre comparée à la fréquence de marche des piétons.'],
      ['Fondation de machine', 'Massif dimensionné pour éviter la résonance avec la machine.'],
    ],
  },
  theory: {
    title: 'Théorie — Forces, énergie et vibrations',
    content: `### 1. Principe fondamental de la dynamique
$$\\sum \\vec{F} = m \\, \\vec{a}$$

### 2. Mouvement uniformément accéléré
$v = v_0 + a t$ ; $x = v_0 t + \\frac{1}{2} a t^2$ ; $v^2 = v_0^2 + 2 a x$.

### 3. Énergie et travail
- Énergie cinétique : $E_c = \\frac{1}{2} m v^2$ ; énergie potentielle de pesanteur : $E_p = m g h$.
- Théorème de l'énergie cinétique : $\\Delta E_c = \\sum W$ (travail des forces).
- Force moyenne d'arrêt sur une distance $d$ : $F = \\dfrac{m v^2}{2 d}$.

### 4. Quantité de mouvement et chocs
$\\vec{p} = m \\vec{v}$ ; impulsion : $\\vec{F} \\, \\Delta t = \\Delta \\vec{p}$. Plus l'arrêt est long (absorbeurs, glissières déformables), plus la force est faible.

### 5. Oscillateur harmonique
Une masse $m$ sur un ressort de raideur $k$ oscille à la fréquence propre :
$$f_0 = \\frac{1}{2\\pi} \\sqrt{\\frac{k}{m}}$$
Une excitation de fréquence proche de $f_0$ provoque la **résonance** : l'amplitude n'est limitée que par l'amortissement.`,
  },
  formulas: {
    title: 'Formules essentielles — Dynamique',
    formulas: [
      {
        name: 'Principe fondamental de la dynamique',
        latex: "\\sum \\vec{F} = m \\, \\vec{a}",
        description: 'Deuxième loi de Newton.',
        vars: [
          ['\\vec{F}', 'Forces extérieures', 'N', 'Somme vectorielle.'],
          ['m', 'Masse', 'kg', 'Masse du corps.'],
          ['\\vec{a}', 'Accélération', 'm/s²', 'Accélération du centre de masse.'],
        ],
      },
      {
        name: 'Énergie cinétique et force moyenne d’arrêt',
        latex: "E_c = \\frac{1}{2} m v^2 \\qquad F_{moy} = \\frac{m \\, v^2}{2 \\, d}",
        description: 'L’énergie du véhicule est absorbée sur la distance d’arrêt d.',
        vars: [
          ['E_c', 'Énergie cinétique', 'J', '1 kJ = 1 kN·m.'],
          ['v', 'Vitesse', 'm/s', 'km/h ÷ 3,6.'],
          ['d', 'Distance de déformation ou de freinage', 'm', 'Plus elle est grande, plus la force est faible.'],
        ],
        rule: "Doubler la vitesse quadruple l'énergie à absorber et la force d'impact.",
      },
      {
        name: 'Impulsion et quantité de mouvement',
        latex: "F \\, \\Delta t = m \\, \\Delta v",
        description: 'Effort moyen pendant un choc de durée Δt.',
        vars: [
          ['F', 'Force moyenne', 'N', 'Pendant la durée du choc.'],
          ['\\Delta t', 'Durée du choc', 's', 'Quelques dixièmes de seconde pour un véhicule.'],
          ['\\Delta v', 'Variation de vitesse', 'm/s', 'De v à 0 pour un arrêt complet.'],
        ],
      },
      {
        name: 'Fréquence propre d’un oscillateur',
        latex: "f_0 = \\frac{1}{2\\pi} \\sqrt{\\frac{k}{m}} \\qquad T_0 = \\frac{1}{f_0}",
        description: 'Système masse-ressort à un degré de liberté.',
        vars: [
          ['f_0', 'Fréquence propre', 'Hz', 'Nombre d’oscillations par seconde.'],
          ['k', 'Raideur', 'N/m', 'Force pour un déplacement unité.'],
          ['T_0', 'Période propre', 's', 'Durée d’une oscillation.'],
        ],
      },
      {
        name: 'Relation flèche statique – fréquence propre',
        latex: "f_0 \\approx \\frac{1}{2\\pi} \\sqrt{\\frac{g}{\\delta_{st}}} \\approx \\frac{15{,}8}{\\sqrt{\\delta_{st}\\,[\\text{mm}]}}",
        description: 'Estimation rapide de la fréquence d’un élément à partir de sa flèche sous son propre poids.',
        vars: [
          ['\\delta_{st}', 'Flèche statique sous le poids', 'mm', 'Flèche due aux masses vibrantes.'],
          ['g', 'Pesanteur', 'm/s²', '9,81 m/s².'],
        ],
        rule: "Une flèche de 10 mm sous le poids propre correspond à environ 5 Hz.",
      },
    ],
  },
  stepbystep: {
    title: 'Calcul complet — Choc d’une voiture sur un poteau de parking',
    problem: "Une voiture de 1 500 kg heurte un poteau à 50 km/h. La carrosserie se déforme sur 0,50 m. Calculer l'énergie à absorber, la force moyenne d'impact et la durée du choc.",
    steps_demo: [
      { n: 1, text: "Vitesse : v = 50 / 3,6 = 13,9 m/s." },
      { n: 2, text: "Énergie cinétique : E_c = ½ × 1 500 × 13,9² = 144 700 J = 145 kJ." },
      { n: 3, text: "Force moyenne : F = E_c / d = 144 700 / 0,50 = 289 400 N ≈ 290 kN." },
      { n: 4, text: "Durée (décélération uniforme) : Δt = 2d / v = 1,0 / 13,9 = 0,072 s." },
      { n: 5, text: "Contrôle par l'impulsion : F = m Δv / Δt = 1 500 × 13,9 / 0,072 = 290 kN." },
      { n: 6, text: "Comparaison : à 10 km/h (vitesse de parking, déformation 0,1 m), F ≈ 58 kN, ordre de grandeur des forces d'impact réglementaires en parking." },
    ],
    result_latex: "E_c = \\frac{1}{2} \\times 1\\,500 \\times 13{,}9^2 = 145\\ \\text{kJ} \\qquad F = \\frac{145\\,000}{0{,}50} = 290\\ \\text{kN}",
  },
  units: {
    table: [
      ['Force', 'N, kN', 'lbf', '1 kN = 224,8 lbf ; 1 kgf = 9,81 N'],
      ['Énergie', 'J, kJ', 'ft·lbf', '1 kJ = 1 kN·m = 737,6 ft·lbf'],
      ['Vitesse', 'm/s', 'mph', '1 m/s = 3,6 km/h = 2,237 mph'],
      ['Accélération', 'm/s²', 'ft/s², g', '1 g = 9,81 m/s²'],
      ['Fréquence', 'Hz', 'Hz', '1 Hz = 1 cycle/s ; ω = 2π f (rad/s)'],
    ],
    note: 'Convertissez toujours les vitesses en m/s avant tout calcul d’énergie (diviser les km/h par 3,6).',
  },
  hypotheses: {
    items: [
      ['info', 'La force moyenne suppose une décélération uniforme ; le pic réel de force peut être 1,5 à 2 fois plus élevé.'],
      ['info', 'L’oscillateur à un degré de liberté représente bien le premier mode de nombreuses structures.'],
      ['warning', 'Les Eurocodes donnent des forces d’impact forfaitaires (EN 1991-1-7) à utiliser pour le dimensionnement réglementaire.'],
      ['warning', 'La résonance n’est dangereuse que si l’amortissement est faible et l’excitation durable (machines, foules rythmées).'],
      ['tip', 'Pour un ordre de grandeur rapide, f ≈ 15,8/√δ (δ en mm) donne la fréquence d’un plancher ou d’une poutre.'],
    ],
  },
  simple_examples: {
    examples: [
      {
        title: 'Exemple 1 : levage d’une charge',
        given: 'Charge de 2 t levée avec une accélération de 0,5 m/s²',
        find: 'L’effort dans l’élingue',
        solution_latex: "T = m (g + a) = 2\\,000 \\times (9{,}81 + 0{,}5) = 20\\,620\\ \\text{N}",
        result: '20,6 kN, soit 5 % de plus que le poids statique.',
      },
      {
        title: 'Exemple 2 : distance de freinage',
        given: 'Camion à 90 km/h, décélération 5 m/s²',
        find: 'La distance de freinage',
        solution_latex: "d = \\frac{v^2}{2a} = \\frac{25^2}{2 \\times 5} = 62{,}5\\ \\text{m}",
        result: '62,5 m sans compter le temps de réaction.',
      },
      {
        title: 'Exemple 3 : fréquence d’un plancher',
        given: 'Flèche sous les masses permanentes : 6 mm',
        find: 'La fréquence propre approchée',
        solution_latex: "f_0 \\approx \\frac{15{,}8}{\\sqrt{6}} = 6{,}5\\ \\text{Hz}",
        result: '≈ 6,5 Hz : au-dessus de la plage de marche (≈ 2 Hz) et de son premier harmonique.',
      },
    ],
  },
  real_examples: {
    title: 'Exemple réel — Passerelle du Millénaire, Londres (2000)',
    examples: [
      {
        context: 'Passerelle suspendue sur la Tamise, fermée deux jours après son inauguration',
        scenario: "La passerelle avait une fréquence latérale proche de 1 Hz, la moitié de la fréquence de marche. Ses légers mouvements ont amené les piétons à synchroniser leurs pas, ce qui a amplifié les oscillations (« synchronisation forcée »).",
        decomposition_latex: "f_{latérale} \\approx 1\\ \\text{Hz} \\approx \\frac{f_{marche}}{2} \\Rightarrow \\text{résonance latérale amplifiée par la foule}",
        lesson: "L'ajout d'amortisseurs visqueux et à masse accordée a résolu le problème. Depuis, les guides de conception des passerelles imposent une vérification dynamique, y compris latérale.",
      },
    ],
  },
  diagrams: {
    title: 'Schéma de principe — Choisir la bonne approche',
    diagram_description: [
      'Forces connues à chaque instant → principe fondamental ΣF = m·a',
      'Vitesses et distances → théorème de l’énergie cinétique',
      'Chocs brefs → impulsion F·Δt = m·Δv',
      'Charge appliquée brutalement → coefficient dynamique jusqu’à 2',
      'Charge périodique → comparer sa fréquence à la fréquence propre',
      'Résonance → modifier la raideur, la masse ou ajouter de l’amortissement',
    ],
  },
  mistakes: {
    items: [
      ['Oublier de convertir les km/h en m/s', 'Énergie fausse d’un facteur 13', 'Diviser par 3,6 avant de calculer.'],
      ['Confondre masse (kg) et poids (N)', 'Erreur d’un facteur 9,81', 'Poids = m × g.'],
      ['Négliger l’effet dynamique d’une charge brusque', 'Efforts sous-estimés de moitié', 'Appliquer un coefficient dynamique ou un calcul dynamique.'],
    ],
  },
  tips: {
    tips: [
      'Retenez : l’énergie d’impact croît comme le carré de la vitesse.',
      'Les absorbeurs de choc et les glissières déformables allongent la distance d’arrêt pour réduire la force.',
      'Pour éviter la résonance, visez une fréquence propre supérieure d’au moins 20 à 30 % à l’excitation, ou très inférieure.',
      'L’amortissement des structures est faible (1 à 5 %) : il ne protège pas d’une résonance prolongée.',
    ],
  },
  norms: {
    norms: [
      ['NF EN 1991-1-7', 'Actions accidentelles : chocs de véhicules, explosions.'],
      ['NF EN 1991-1-1 Annexe nationale', 'Charges de garde-corps et de barrières de parking.'],
      ['NF EN 1990 Annexe A2', 'Vérification du confort des passerelles (accélérations).'],
      ['Guide Sétra « Passerelles piétonnes » (2006)', 'Évaluation du comportement vibratoire sous l’action des piétons.'],
    ],
  },
  exercises: {
    exercises: [
      {
        level: 1,
        text: 'Calculer l’énergie cinétique d’un camion de 20 t à 72 km/h.',
        hint: 'v = 20 m/s.',
        answer_latex: "E_c = \\frac{1}{2} \\times 20\\,000 \\times 20^2 = 4\\,000\\,000\\ \\text{J} = 4\\ \\text{MJ}",
        answer_text: '4 MJ.',
      },
      {
        level: 2,
        text: 'Quelle force moyenne si ce camion est arrêté par une glissière qui se déforme sur 2 m ?',
        hint: 'F = E_c / d.',
        answer_latex: "F = \\frac{4\\,000\\,000}{2} = 2\\,000\\,000\\ \\text{N} = 2\\ \\text{MN}",
        answer_text: '2 MN, soit environ 10 fois le poids du camion.',
      },
      {
        level: 3,
        text: 'Un massif de machine pèse 50 t et repose sur des appuis élastiques de raideur totale 2 × 10⁸ N/m. Calculer sa fréquence propre ; la machine tourne à 1 500 tr/min. Y a-t-il un risque de résonance ?',
        hint: 'f_machine = 1 500/60 = 25 Hz.',
        answer_latex: "f_0 = \\frac{1}{2\\pi} \\sqrt{\\frac{2 \\times 10^8}{50\\,000}} = \\frac{63{,}2}{6{,}283} = 10{,}1\\ \\text{Hz}",
        answer_text: 'f₀ ≈ 10 Hz, loin des 25 Hz de la machine : pas de résonance en régime établi (attention au passage lors du démarrage).',
      },
    ],
  },
  quiz: {
    title: 'Quiz — Dynamique',
    questions: [
      { q: 'Si la vitesse d’un véhicule double, l’énergie de choc est…', options: ['Doublée', 'Quadruplée', 'Inchangée'], correct: 1, explain: 'E_c = ½mv² varie comme le carré de la vitesse.' },
      { q: 'Comment réduire la force d’un choc ?', options: ['Augmenter la distance ou la durée d’arrêt', 'Rendre l’obstacle plus rigide', 'Augmenter la masse du véhicule'], correct: 0, explain: 'F = E/d ou F = mΔv/Δt : plus la déformation est longue, plus la force est faible.' },
      { q: 'Que se passe-t-il à la résonance ?', options: ['La structure s’arrête', 'L’amplitude devient très grande, limitée par l’amortissement', 'La fréquence propre double'], correct: 1, explain: 'L’excitation à la fréquence propre amplifie fortement la réponse.' },
    ],
  },
  exam_questions: {
    questions: [
      'Énoncez les trois lois de Newton et donnez un exemple d’application en génie civil pour chacune.',
      'Calculez la force d’impact d’un véhicule sur un ouvrage par l’énergie puis par l’impulsion.',
      'Définissez fréquence propre et résonance ; proposez des solutions pour un plancher qui vibre.',
    ],
  },
  interview_questions: {
    questions: [
      ['Pourquoi un plancher léger vibre-t-il plus qu’un plancher lourd ?', "Parce que sa masse est faible : une même excitation produit de plus grandes accélérations, et sa fréquence propre peut tomber dans la plage de la marche. On augmente la raideur, la masse ou l'amortissement."],
      ['Que signifie un coefficient dynamique de 2 ?', "Qu'une charge appliquée instantanément (sans vitesse initiale) produit un déplacement maximal double de celui de la même charge appliquée lentement, car le système dépasse sa position d'équilibre avant d'osciller autour."],
    ],
  },
  practical_case: {
    title: 'Cas pratique — Protection d’une pile de pont contre les chocs',
    scenario: 'Une pile de pont en bord de route peut être heurtée par un poids lourd de 30 t à 50 km/h. Un dispositif absorbeur peut se déformer de 1,2 m.',
    description: 'Comparer la force moyenne avec et sans absorbeur (choc direct avec 0,3 m de déformation du camion).',
    resolutions: [
      "E_c = \\frac{1}{2} \\times 30\\,000 \\times 13{,}9^2 = 2{,}90\\ \\text{MJ}",
      "\\text{Sans absorbeur : } F = \\frac{2{,}90 \\times 10^6}{0{,}3} = 9{,}7\\ \\text{MN}",
      "\\text{Avec absorbeur : } F = \\frac{2{,}90 \\times 10^6}{0{,}3 + 1{,}2} = 1{,}9\\ \\text{MN}",
    ],
    conclusion: 'L’absorbeur divise la force moyenne par 5 ; la pile doit néanmoins être justifiée sous les forces réglementaires de l’EN 1991-1-7, et un écartement ou une barrière de sécurité est souvent préférable.',
  },
  summary: {
    content: `### La dynamique en 5 points
1. $\\sum F = m a$ ; action = réaction.
2. Énergie : $E_c = \\frac{1}{2}mv^2$, force d'arrêt $F = mv^2/(2d)$.
3. Chocs : $F \\Delta t = m \\Delta v$.
4. Oscillateur : $f_0 = \\frac{1}{2\\pi}\\sqrt{k/m}$ ; résonance si $f \\approx f_0$.
5. Repère : $f_0 \\approx 15{,}8/\\sqrt{\\delta}$ (δ en mm).`,
  },
  key_points: {
    points: [
      'ΣF = m·a',
      'E_c = ½ m v² (v en m/s)',
      'F·Δt = m·Δv',
      'f₀ = (1/2π)·√(k/m)',
      'Charge brusque : coefficient dynamique jusqu’à 2',
    ],
  },
  self_assessment: {
    objectives: [
      'Je sais appliquer le principe fondamental de la dynamique',
      'Je sais calculer une force d’impact par l’énergie',
      'Je sais utiliser l’impulsion pour un choc',
      'Je sais calculer une fréquence propre et identifier un risque de résonance',
      "J'ai réussi le quiz avec au moins 2 bonnes réponses sur 3",
    ],
  },
});
