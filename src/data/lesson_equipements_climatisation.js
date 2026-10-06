// ── Lesson: Climatisation et CVC — Module 44 ─────────────────────────────────
import { buildLesson } from './build_lesson.js';

export const lesson_equipements_climatisation = buildLesson({
  moduleId: 44,
  slug: 'equipements_climatisation',
  lessonIndex: 3,
  title: "Climatisation et CVC : Bilan des Apports, Débit d'Air Soufflé, Systèmes (Split, VRV, CTA) et EER",
  subtitle: 'Module 44 — Équipements techniques du bâtiment (fluides)',
  level: 'Intermédiaire',
  duration: '5h',
  diagramType: 'none',
  tags: ['Climatisation', 'Bilan thermique', 'Apports', 'Puissance frigorifique', 'EER', 'CTA', 'VRV', 'Cycle frigorifique'],
}, {
  definition: {
    title: 'Définition — Évacuer la chaleur en trop',
    fr: 'Climatisation et génie climatique (CVC)',
    en: 'Air conditioning and HVAC',
    metier: "Concerne les bureaux d'études fluides, frigoristes, installateurs CVC et exploitants de bâtiments tertiaires.",
    content: `La **climatisation** retire de la chaleur (et souvent de l'humidité) à un local. Elle repose sur le **cycle frigorifique** : un fluide frigorigène s'évapore à l'intérieur (il absorbe de la chaleur), est comprimé, puis se condense à l'extérieur (il rejette la chaleur).

### Les apports à compenser
- **Externes** : soleil à travers les vitrages, conduction par les parois, air neuf chaud.
- **Internes** : occupants, éclairage, ordinateurs et équipements.
- Une part **sensible** (élève la température) et une part **latente** (humidité).

### Systèmes courants
- **Split** ou **multi-split** : une unité extérieure, une ou plusieurs unités intérieures.
- **DRV/VRV** : débit de réfrigérant variable vers de nombreuses unités, avec récupération possible.
- **Centrale de traitement d'air (CTA)** et **ventilo-convecteurs** alimentés en eau glacée par un groupe froid.

> 💡 Avant de climatiser, on réduit les apports : protections solaires extérieures, inertie, ventilation nocturne, équipements économes.`,
  },
  importance: {
    content: `- **Confort et productivité** : au-delà de 26–27 °C, le travail de bureau devient pénible.
- **Énergie et carbone** : la climatisation augmente fortement les consommations d'été et les fluides frigorigènes ont un pouvoir de réchauffement élevé en cas de fuite.
- **Coûts** : un surdimensionnement coûte en investissement et en rendement.
- **Réglementation** : contrôle d'étanchéité des installations, choix des fluides (règlement F-Gas).

> ⚠️ **À retenir** : une baie vitrée exposée au soleil peut représenter à elle seule la moitié des apports d'un bureau.`,
  },
  applications: {
    examples: [
      ['Bureau individuel', 'Split de 2,5 kW, protections solaires extérieures.'],
      ['Plateau de bureaux', 'Ventilo-convecteurs sur boucle d’eau glacée et CTA d’air neuf.'],
      ['Salle serveurs', 'Climatisation de précision, fonctionnement toute l’année.'],
      ['Commerce', 'Rooftop (unité de toiture) traitant l’air.'],
      ['Logement', 'PAC réversible air-eau sur plancher rafraîchissant.'],
    ],
  },
  theory: {
    title: 'Théorie — Bilan des apports et débit d’air',
    content: `### 1. Apports solaires par un vitrage
$$Q_{sol} = S \\times g \\times I$$
$g$ : facteur solaire du vitrage (avec ses protections) ; $I$ : éclairement reçu (W/m²).

### 2. Apports par conduction et par l'air neuf
$$Q_{cond} = U\\, S\\, (T_e - T_i) \\qquad Q_{air} = 0{,}34\\, \\dot V\\, (T_e - T_i)$$

### 3. Apports internes (ordres de grandeur)
Occupant de bureau : ≈ 75 W sensibles + 55 W latents ; ordinateur : 100 W ; éclairage LED : 6 à 10 W/m².

### 4. Débit d'air soufflé
$$\\dot V = \\frac{Q_s}{0{,}34\\, \\Delta T}$$
($\\dot V$ en m³/h, $Q_s$ en W, $\\Delta T$ = écart entre l'air ambiant et l'air soufflé, souvent 8 à 10 K).

### 5. Efficacité frigorifique
$$EER = \\frac{Q_{froid}}{W_{élec}}$$
Valeurs courantes : 3 à 5 ; en saisonnier, on parle de SEER.`,
  },
  formulas: {
    title: 'Formules essentielles — Climatisation',
    formulas: [
      { name: 'Apports solaires', latex: "Q_{sol} = S\\, g\\, I", description: 'Rayonnement transmis par un vitrage.', vars: [['S', 'Surface vitrée', 'm²', ''], ['g', 'Facteur solaire', '-', '0,6 vitrage clair ; 0,15 avec store extérieur.'], ['I', 'Éclairement', 'W/m²', '300 à 700 selon l’orientation.']] },
      { name: 'Débit d’air soufflé', latex: "\\dot V = \\frac{Q_s}{0{,}34\\, \\Delta T}", description: 'Débit nécessaire pour évacuer les apports sensibles.', vars: [['Q_s', 'Apports sensibles', 'W', ''], ['\\Delta T', 'Écart de soufflage', 'K', '8 à 10 K.']] },
      { name: 'Efficacité frigorifique', latex: "EER = \\frac{Q_{froid}}{W_{élec}}", description: 'Froid produit par unité d’électricité.', vars: [['EER', 'Coefficient d’efficacité', '-', '3 à 5.']] },
      { name: 'Apports totaux', latex: "Q = Q_{sol} + Q_{cond} + Q_{air} + Q_{int}", description: 'Somme des apports sensibles (et latents à part).', vars: [['Q_{int}', 'Apports internes', 'W', 'Occupants, éclairage, équipements.']] },
    ],
  },
  stepbystep: {
    title: 'Calcul complet — Climatisation d’un bureau de 30 m²',
    problem: "Bureau de 30 m², 3 occupants, 3 ordinateurs, éclairage 8 W/m², vitrage sud de 6 m² (g = 0,4 avec store intérieur, I = 500 W/m²), conduction et air neuf : 300 W. Calculer les apports sensibles, le débit d'air soufflé (ΔT = 8 K) et la puissance électrique d'un split d'EER 3,5.",
    steps_demo: [
      { n: 1, text: "Soleil : 6 × 0,4 × 500 = 1 200 W." },
      { n: 2, text: "Internes : occupants 3 × 75 = 225 W ; ordinateurs 3 × 100 = 300 W ; éclairage 30 × 8 = 240 W → 765 W." },
      { n: 3, text: "Total sensible : 1 200 + 765 + 300 = 2 265 W ≈ 2,3 kW → split de 2,5 kW." },
      { n: 4, text: "Débit soufflé : 2 265 / (0,34 × 8) = 833 m³/h." },
      { n: 5, text: "Électricité : 2,3 / 3,5 = 0,65 kW. Avec un store extérieur (g = 0,15), le soleil tombe à 450 W et le besoin à 1,5 kW." },
    ],
    result_latex: "Q_s = 1\\,200 + 765 + 300 = 2\\,265\\ \\text{W} \\qquad \\dot V = \\frac{2\\,265}{0{,}34 \\times 8} = 833\\ \\text{m}^3/\\text{h}",
  },
  units: {
    table: [
      ['Puissance frigorifique', 'kW', 'tonne de réfrigération', '1 TR = 3,517 kW'],
      ['Puissance', 'kW', 'BTU/h', '1 kW = 3 412 BTU/h'],
      ['Débit d’air', 'm³/h', 'cfm', '1 000 m³/h = 589 cfm'],
      ['Éclairement solaire', 'W/m²', 'BTU/h·ft²', '1 W/m² = 0,317 BTU/h·ft²'],
      ['Efficacité', 'EER (W/W)', 'EER (BTU/Wh)', 'EER US ≈ 3,41 × EER métrique'],
    ],
    note: 'Les climatiseurs domestiques sont souvent vendus en « BTU » : 9 000 BTU/h ≈ 2,6 kW.',
  },
  hypotheses: {
    items: [
      ['info', 'Le calcul présenté est un bilan de pointe simplifié ; les logiciels tiennent compte de l’inertie et de l’heure de la journée.'],
      ['info', 'Les apports latents (humidité) s’ajoutent pour dimensionner la batterie froide.'],
      ['warning', 'Un store intérieur arrête mal le soleil : la chaleur est déjà entrée dans la pièce.'],
      ['warning', 'Un soufflage trop froid ou trop rapide crée des courants d’air inconfortables.'],
      ['tip', 'Réduisez d’abord les apports : chaque watt évité n’a pas à être refroidi.'],
    ],
  },
  simple_examples: {
    examples: [
      { title: 'Exemple 1 : conversion', given: 'Climatiseur de 12 000 BTU/h', find: 'kW', solution_latex: "\\frac{12\\,000}{3\\,412} = 3{,}5\\ \\text{kW}", result: '3,5 kW.' },
      { title: 'Exemple 2 : effet du store extérieur', given: '6 m², I = 500 W/m², g passe de 0,6 à 0,15', find: 'Gain', solution_latex: "6 \\times 500 \\times (0{,}6 - 0{,}15) = 1\\,350\\ \\text{W}", result: '1,35 kW évités.' },
      { title: 'Exemple 3 : consommation', given: '2,5 kW de froid pendant 400 h, EER 3,5', find: 'Énergie électrique', solution_latex: "E = \\frac{2{,}5 \\times 400}{3{,}5} = 286\\ \\text{kWh}", result: '≈ 286 kWh sur l’été.' },
    ],
  },
  real_examples: {
    title: 'Exemple réel — Immeuble de bureaux entièrement vitré',
    examples: [
      {
        context: 'Tour de bureaux des années 2000 à façades vitrées sans protection extérieure',
        scenario: "Les plateaux orientés ouest dépassaient 30 °C l'après-midi malgré une climatisation à pleine puissance. L'ajout de brise-soleil orientables extérieurs et de films de contrôle solaire a réduit les apports de près de moitié ; la température est revenue à 25–26 °C et la consommation de froid a nettement baissé.",
        decomposition_latex: "\\text{Vitrage exposé} + g \\text{ élevé} \\Rightarrow Q_{sol} \\uparrow \\qquad \\text{protection extérieure} \\Rightarrow Q_{sol} \\downarrow",
        lesson: "La protection solaire extérieure est la mesure la plus efficace et la moins énergivore contre la surchauffe.",
      },
    ],
  },
  diagrams: {
    title: 'Schéma de principe — Cycle frigorifique',
    diagram_description: [
      'Évaporateur (intérieur) : le fluide s’évapore et absorbe la chaleur du local',
      'Compresseur : élève la pression et la température du gaz',
      'Condenseur (extérieur) : le fluide se condense et rejette la chaleur',
      'Détendeur : abaisse la pression du liquide',
      'Retour à l’évaporateur',
      'Le même cycle inversé chauffe le bâtiment (PAC réversible)',
    ],
  },
  mistakes: {
    items: [
      ['Dimensionner « au m² » sans bilan', 'Sur- ou sous-dimensionnement', 'Faire un bilan des apports.'],
      ['Oublier les protections solaires', 'Puissance et consommation excessives', 'Brise-soleil ou stores extérieurs.'],
      ['Négliger l’évacuation des condensats', 'Fuites d’eau, dégâts', 'Pente, siphon, pompe de relevage.'],
    ],
  },
  tips: {
    tips: [
      'Retenez : 0,34 W·h/m³·K pour l’air ; 1 TR = 3,5 kW.',
      'Visez un soufflage 8 à 10 K sous l’ambiance.',
      'Placez l’unité extérieure à l’ombre et ventilée pour garder un bon EER.',
      'Faites contrôler l’étanchéité du circuit frigorifique selon la réglementation.',
    ],
  },
  norms: {
    norms: [
      ['NF EN 16798 (série)', 'Performance énergétique et ambiance intérieure (ventilation, confort).'],
      ['NF EN 14511 / 14825', 'Climatiseurs et PAC : performances (EER, SEER).'],
      ['Règlement (UE) 2024/573 (F-Gas)', 'Gaz fluorés à effet de serre.'],
      ['NF EN 378', 'Systèmes de réfrigération et pompes à chaleur : sécurité.'],
    ],
  },
  exercises: {
    exercises: [
      { level: 1, text: 'Calculer les apports solaires d’une baie de 4 m², g = 0,5, I = 600 W/m².', hint: 'S g I.', answer_latex: "4 \\times 0{,}5 \\times 600 = 1\\,200\\ \\text{W}", answer_text: '1 200 W.' },
      { level: 2, text: 'Quel débit souffler pour 3 000 W d’apports avec ΔT = 10 K ?', hint: 'Q / (0,34 ΔT).', answer_latex: "\\dot V = \\frac{3\\,000}{3{,}4} = 882\\ \\text{m}^3/\\text{h}", answer_text: '≈ 880 m³/h.' },
      { level: 3, text: 'Une salle de réunion accueille 12 personnes (75 W) avec 2 kW d’autres apports. Quelle puissance électrique pour un EER de 3 ?', hint: 'Somme puis division par l’EER.', answer_latex: "Q = 900 + 2\\,000 = 2\\,900\\ \\text{W} \\Rightarrow W = 967\\ \\text{W}", answer_text: '≈ 0,97 kW électrique.' },
    ],
  },
  quiz: {
    title: 'Quiz — Climatisation',
    questions: [
      { q: 'Où le fluide frigorigène absorbe-t-il la chaleur du local ?', options: ['Au condenseur', 'À l’évaporateur', 'Au compresseur'], correct: 1, explain: 'En s’évaporant dans l’unité intérieure.' },
      { q: 'Que mesure l’EER ?', options: ['Le froid produit par unité d’électricité', 'Le bruit', 'Le débit d’air'], correct: 0, explain: 'EER = Q froid / W électrique.' },
      { q: 'Quelle mesure réduit le plus les apports solaires ?', options: ['Store intérieur', 'Protection extérieure', 'Rideau épais'], correct: 1, explain: 'Elle arrête le soleil avant le vitrage.' },
    ],
  },
  exam_questions: {
    questions: [
      'Établissez le bilan des apports d’un bureau et choisissez un système.',
      'Expliquez le cycle frigorifique et le rôle de chaque organe.',
      'Comment réduire les besoins de climatisation d’un bâtiment tertiaire ?',
    ],
  },
  interview_questions: {
    questions: [
      ['Split ou ventilo-convecteurs sur eau glacée pour un plateau de 1 000 m² ?', 'Pour un grand plateau, une production centralisée (eau glacée ou DRV) avec CTA d’air neuf est plus facile à réguler, maintenir et faire évoluer ; les splits conviennent aux petits locaux isolés.'],
      ['Les occupants se plaignent de courants d’air froids : que vérifiez-vous ?', 'La température et la vitesse de soufflage, le type et la position des diffuseurs, l’équilibrage des débits et les consignes de régulation.'],
    ],
  },
  practical_case: {
    title: 'Cas pratique — Salle de réunion de 40 m²',
    scenario: '12 occupants, éclairage 8 W/m², vidéoprojecteur 300 W, vitrage ouest 8 m² (g = 0,15 avec brise-soleil), I = 650 W/m², parois et air neuf 500 W.',
    description: 'Calculer la puissance frigorifique et le débit soufflé (ΔT = 8 K).',
    resolutions: [
      "Q_{sol} = 8 \\times 0{,}15 \\times 650 = 780\\ \\text{W} \\qquad Q_{int} = 12 \\times 75 + 320 + 300 = 1\\,520\\ \\text{W}",
      "Q_s = 780 + 1\\,520 + 500 = 2\\,800\\ \\text{W}",
      "\\dot V = \\frac{2\\,800}{0{,}34 \\times 8} = 1\\,030\\ \\text{m}^3/\\text{h}",
    ],
    conclusion: 'Une unité de 3,5 kW (pour couvrir aussi les apports latents des 12 occupants) avec un soufflage d’environ 1 000 m³/h convient.',
  },
  summary: {
    content: `### La climatisation en 5 points
1. Cycle frigorifique : évaporateur, compresseur, condenseur, détendeur.
2. Apports : soleil $S g I$, conduction, air neuf, internes.
3. Débit soufflé : $\\dot V = Q_s / (0{,}34 \\Delta T)$.
4. EER = froid / électricité.
5. Réduire d'abord les apports (protections solaires extérieures).`,
  },
  key_points: {
    points: ['Q_sol = S g I', 'V̇ = Q / (0,34 ΔT)', 'EER ≈ 3 à 5', '1 TR = 3,5 kW', 'Protection solaire extérieure'],
  },
  self_assessment: {
    objectives: [
      'Je sais établir un bilan des apports',
      'Je sais calculer un débit d’air soufflé',
      'Je connais le cycle frigorifique',
      'Je sais choisir entre split, DRV et eau glacée',
      "J'ai réussi le quiz avec au moins 2 bonnes réponses sur 3",
    ],
  },
});
