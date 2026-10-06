// ── Lesson: Protection passive et active — Module 43 ─────────────────────────
import { buildLesson } from './build_lesson.js';

export const lesson_incendie_protection = buildLesson({
  moduleId: 43,
  slug: 'incendie_protection',
  lessonIndex: 4,
  title: "Protection Passive et Active : Compartimentage, Portes Coupe-Feu, Sprinklers, Extincteurs, Détection et SSI",
  subtitle: 'Module 43 — Sécurité incendie & résistance au feu',
  level: 'Intermédiaire',
  duration: '5h',
  diagramType: 'none',
  tags: ['Compartimentage', 'Porte coupe-feu', 'Sprinkler', 'RIA', 'Extincteur', 'Détection', 'SSI', 'Flocage'],
}, {
  definition: {
    title: 'Définition — Limiter le feu par la construction et l’équipement',
    fr: 'Protection passive et active contre l’incendie',
    en: 'Passive and active fire protection',
    metier: "Concerne les bureaux d'études sécurité incendie, architectes, installateurs, exploitants et préventionnistes.",
    content: `La sécurité incendie combine deux familles de mesures :

### Protection passive (par la construction)
- **Compartimentage** : murs et planchers coupe-feu (EI, REI) qui confinent le feu dans une zone.
- **Portes coupe-feu** (EI 30, EI 60) à fermeture automatique, **clapets coupe-feu** dans les gaines.
- **Protection des structures** : flocage, plaques, peintures intumescentes.
- **Réaction au feu** des matériaux (Euroclasses A1 à F) : limiter la propagation et les fumées.

### Protection active (par des équipements)
- **Détection** automatique (fumée, chaleur, flamme) et **alarme**.
- **Extinction** : extincteurs, robinets d'incendie armés (RIA), **sprinklers** (extinction automatique à eau).
- **Désenfumage** commandé.
- **SSI** (système de sécurité incendie) qui pilote fermetures, désenfumage, alarme et arrêt des ventilations.

> 💡 Les deux familles sont complémentaires : la protection passive fonctionne sans énergie, la protection active agit vite et peut éteindre le feu à son début.`,
  },
  importance: {
    content: `- **Vies** : détection précoce et alarme laissent le temps d'évacuer.
- **Biens** : un sprinkler éteint ou contient la grande majorité des feux à leur début.
- **Réglementation** : obligations selon le type d'établissement (ERP, IGH, entrepôts, code du travail) et exigences des assureurs.
- **Exploitation** : une porte coupe-feu bloquée ouverte ou un clapet non entretenu annule la protection.

> ⚠️ **À retenir** : la maintenance (vérifications périodiques) fait partie intégrante de la sécurité incendie.`,
  },
  applications: {
    examples: [
      ['Entrepôt logistique', 'Sprinklers, murs coupe-feu entre cellules, désenfumage.'],
      ['Immeuble de bureaux', 'Détection, SSI, portes coupe-feu sur les circulations.'],
      ['Hôpital', 'Compartimentage horizontal pour transférer les patients sans évacuer l’établissement.'],
      ['Charpente métallique', 'Peinture intumescente R 30.'],
      ['Gaines techniques', 'Clapets coupe-feu et calfeutrements des traversées.'],
    ],
  },
  theory: {
    title: 'Théorie — Dimensionner quelques dispositifs',
    content: `### 1. Sprinklers
Une installation sprinkler est caractérisée par une **densité** (mm/min, soit L/min/m²) appliquée sur une **surface impliquée** (m²) selon la classe de risque. Le débit d'une tête :
$$Q = K \\sqrt{P}$$
$K$ : facteur de la tête (L/min/bar^0,5) ; $P$ : pression (bar). Débit de l'installation : $Q_{tot} = d \\times A_{impl}$.

Exemple de valeurs (EN 12845) : risque ordinaire OH1 : 5 mm/min sur 72 m².

### 2. Réserve d'eau
$$V = Q_{tot} \\times t$$
avec une durée de fonctionnement de l'ordre de 60 minutes en risque ordinaire.

### 3. Extincteurs
Règle courante en France (code du travail, règle APSAD R4) : au moins **un extincteur à eau de 6 L pour 200 m²** et par niveau, à moins de 15 m de tout point.

### 4. Compartimentage
Chaque compartiment est délimité par des parois EI ou REI ; toute **traversée** (gaine, câble, tuyau) doit être calfeutrée avec un système de même résistance au feu.`,
  },
  formulas: {
    title: 'Formules essentielles — Protection incendie',
    formulas: [
      {
        name: 'Débit d’une tête de sprinkler',
        latex: "Q = K \\sqrt{P}",
        description: 'Relation débit-pression d’un orifice.',
        vars: [['Q', 'Débit', 'L/min', ''], ['K', 'Facteur K de la tête', 'L/min/bar^0,5', 'K80 courant.'], ['P', 'Pression à la tête', 'bar', '']],
      },
      {
        name: 'Débit de l’installation',
        latex: "Q_{tot} = d \\times A_{impl}",
        description: 'Densité de calcul sur la surface impliquée.',
        vars: [['d', 'Densité', 'mm/min = L/min/m²', ''], ['A_{impl}', 'Surface impliquée', 'm²', '']],
      },
      {
        name: 'Réserve d’eau',
        latex: "V = Q_{tot} \\times t",
        description: 'Volume nécessaire pour la durée de fonctionnement.',
        vars: [['t', 'Durée de fonctionnement', 'min', '≈ 60 min en risque ordinaire.']],
      },
      {
        name: 'Nombre d’extincteurs',
        latex: "n = \\left\\lceil \\frac{S}{200} \\right\\rceil",
        description: 'Règle usuelle : 1 appareil de 6 L pour 200 m², par niveau.',
        vars: [['S', 'Surface du niveau', 'm²', '']],
      },
    ],
  },
  stepbystep: {
    title: 'Calcul complet — Sprinklers d’un atelier en risque ordinaire',
    problem: "Atelier classé OH1 : densité 5 mm/min sur 72 m². Têtes K80, chacune couvrant 12 m². Calculer le nombre de têtes ouvertes, le débit de chaque tête, la pression nécessaire et la réserve d'eau pour 60 min.",
    steps_demo: [
      { n: 1, text: "Têtes ouvertes : 72 / 12 = 6 têtes." },
      { n: 2, text: "Débit par tête : 5 mm/min × 12 m² = 60 L/min." },
      { n: 3, text: "Pression : P = (Q/K)² = (60/80)² = 0,56 bar ; la pression minimale réglementaire d'une tête (souvent 0,35 à 0,5 bar) est respectée." },
      { n: 4, text: "Débit total : 5 × 72 = 360 L/min (+ pertes et têtes les plus défavorisées au calcul hydraulique)." },
      { n: 5, text: "Réserve : 360 × 60 = 21 600 L ≈ 22 m³." },
    ],
    result_latex: "Q_{tête} = 5 \\times 12 = 60\\ \\text{L/min} \\qquad P = \\left(\\frac{60}{80}\\right)^2 = 0{,}56\\ \\text{bar} \\qquad V = 360 \\times 60 = 21{,}6\\ \\text{m}^3",
  },
  units: {
    table: [
      ['Densité sprinkler', 'mm/min = L/min/m²', 'gpm/ft²', '1 gpm/ft² ≈ 40,7 mm/min'],
      ['Débit', 'L/min', 'gpm', '1 gpm = 3,785 L/min'],
      ['Pression', 'bar', 'psi', '1 bar = 14,5 psi'],
      ['Facteur K', 'L/min/bar^0,5', 'gpm/psi^0,5', 'K80 (métrique) ≈ K5,6 (US)'],
      ['Résistance au feu', 'min (EI 30…)', 'h', ''],
    ],
    note: 'La conception détaillée d’un réseau sprinkler suit une règle d’installation (EN 12845, APSAD R1, NFPA 13) et un calcul hydraulique complet.',
  },
  hypotheses: {
    items: [
      ['info', 'Les classes de risque (OH1 à OH4, HHP, HHS) dépendent de l’activité et des stockages.'],
      ['info', 'La règle de 1 extincteur pour 200 m² est un minimum ; des appareils spécifiques (CO₂) protègent les risques électriques.'],
      ['warning', 'Une porte coupe-feu maintenue ouverte par une cale n’a plus aucune efficacité.'],
      ['warning', 'Les traversées de parois coupe-feu non calfeutrées sont une cause classique de propagation.'],
      ['tip', 'Tenez à jour le registre de sécurité : vérifications, essais et travaux.'],
    ],
  },
  simple_examples: {
    examples: [
      { title: 'Exemple 1 : débit d’une tête', given: 'K80 à 1,0 bar', find: 'Q', solution_latex: "Q = 80 \\sqrt{1{,}0} = 80\\ \\text{L/min}", result: '80 L/min.' },
      { title: 'Exemple 2 : extincteurs', given: 'Plateau de 1 150 m²', find: 'Nombre minimal', solution_latex: "n = \\lceil 1\\,150 / 200 \\rceil = 6", result: '6 extincteurs à eau, plus des CO₂ près des tableaux électriques.' },
      { title: 'Exemple 3 : réserve d’eau', given: 'Débit 900 L/min pendant 90 min', find: 'V', solution_latex: "V = 900 \\times 90 = 81\\ \\text{m}^3", result: '81 m³.' },
    ],
  },
  real_examples: {
    title: 'Exemple réel — Tour Grenfell (Londres, 2017)',
    examples: [
      {
        context: 'Immeuble de logements de 24 niveaux rénové avec un bardage en panneaux composites à âme polyéthylène',
        scenario: "Un feu de réfrigérateur s'est propagé à l'extérieur par la façade : le bardage combustible et la lame d'air ont créé un effet cheminée. Le compartimentage intérieur, conçu pour garder chaque logement isolé, a été contourné par l'extérieur, et la consigne de rester chez soi s'est révélée inadaptée. 72 personnes sont mortes.",
        decomposition_latex: "\\text{Bardage combustible} + \\text{effet cheminée} \\Rightarrow \\text{compartimentage contourné} \\Rightarrow \\text{propagation à tout l'immeuble}",
        lesson: "La réaction au feu des façades est aussi importante que le compartimentage intérieur ; la protection passive doit être pensée pour tout le bâtiment.",
      },
    ],
  },
  diagrams: {
    title: 'Schéma de principe — Chaîne de sécurité incendie',
    diagram_description: [
      'Détection automatique ou déclencheur manuel',
      'SSI : traitement de l’alarme',
      'Alarme générale et évacuation',
      'Fermeture des portes et clapets coupe-feu, arrêt des ventilations',
      'Désenfumage et extinction automatique (sprinklers)',
      'Accueil et intervention des secours',
    ],
  },
  mistakes: {
    items: [
      ['Traversées de gaines non calfeutrées', 'Le feu contourne la paroi', 'Calfeutrement certifié de même degré.'],
      ['Portes coupe-feu calées ouvertes', 'Propagation des fumées', 'Ventouses asservies à la détection.'],
      ['Stockages qui changent sans adapter les sprinklers', 'Installation sous-dimensionnée', 'Réévaluer la classe de risque.'],
    ],
  },
  tips: {
    tips: [
      'Retenez : OH1 = 5 mm/min sur 72 m² ; tête K80 : Q = 80 √P.',
      'Placez les extincteurs près des issues et des risques particuliers.',
      'Prévoyez les traversées et leurs calfeutrements dès la synthèse technique.',
      'Faites tester le SSI et le désenfumage ensemble à la réception.',
    ],
  },
  norms: {
    norms: [
      ['NF EN 12845', 'Installations fixes de lutte contre l’incendie : systèmes d’extinction automatique de type sprinkler.'],
      ['Règles APSAD R1, R4, R7', 'Sprinklers, extincteurs, détection (référentiels des assureurs).'],
      ['NF EN 13501-1 et -2', 'Classements de réaction et de résistance au feu.'],
      ['NF S 61-931 et suivantes', 'Systèmes de sécurité incendie (SSI).'],
      ['Règlement de sécurité ERP (arrêté du 25 juin 1980)', 'Dispositions constructives et équipements des ERP.'],
    ],
  },
  exercises: {
    exercises: [
      { level: 1, text: 'Quel débit délivre une tête K115 à 0,8 bar ?', hint: 'Q = K √P.', answer_latex: "Q = 115 \\times \\sqrt{0{,}8} = 103\\ \\text{L/min}", answer_text: '103 L/min.' },
      { level: 2, text: 'Un risque OH3 demande 5 mm/min sur 216 m². Quel débit total ?', hint: 'd × A.', answer_latex: "Q = 5 \\times 216 = 1\\,080\\ \\text{L/min}", answer_text: '1 080 L/min.' },
      { level: 3, text: 'Avec 1 080 L/min pendant 60 min, quel volume de réserve faut-il ? Et quelle pression pour 60 L/min sur une tête K80 ?', hint: 'V = Q t ; P = (Q/K)².', answer_latex: "V = 64{,}8\\ \\text{m}^3 \\qquad P = 0{,}56\\ \\text{bar}", answer_text: '≈ 65 m³ et 0,56 bar.' },
    ],
  },
  quiz: {
    title: 'Quiz — Protection incendie',
    questions: [
      { q: 'Laquelle est une protection passive ?', options: ['Un sprinkler', 'Un mur coupe-feu', 'Un extincteur'], correct: 1, explain: 'Elle fonctionne sans intervention ni énergie.' },
      { q: 'Que pilote le SSI ?', options: ['Le chauffage', 'Alarme, fermetures, désenfumage', 'L’éclairage décoratif'], correct: 1, explain: 'Il coordonne les fonctions de sécurité.' },
      { q: 'Une porte EI 30 assure…', options: ['30 min d’étanchéité et d’isolation', '30 min de stabilité seulement', '30 dB d’isolement'], correct: 0, explain: 'E (étanchéité) et I (isolation) pendant 30 min.' },
    ],
  },
  exam_questions: {
    questions: [
      'Comparez protection passive et protection active, avec des exemples.',
      'Dimensionnez une installation sprinkler simple (débit, pression, réserve).',
      'Expliquez le rôle du compartimentage et les points faibles à surveiller.',
    ],
  },
  interview_questions: {
    questions: [
      ['Lors d’une visite, que regardez-vous en priorité ?', 'Dégagements libres, portes coupe-feu fermées et fonctionnelles, extincteurs accessibles et vérifiés, état du SSI, calfeutrements des traversées, registre de sécurité à jour.'],
      ['Pourquoi les sprinklers sont-ils si efficaces ?', 'Ils agissent automatiquement au début du feu, uniquement au-dessus du foyer, et le contiennent avant qu’il ne se développe.'],
    ],
  },
  practical_case: {
    title: 'Cas pratique — Équiper un plateau de bureaux de 1 150 m²',
    scenario: 'Plateau de bureaux de 1 150 m² au 3ᵉ étage, deux escaliers protégés, un local serveur de 25 m².',
    description: 'Définir les mesures passives et actives principales.',
    resolutions: [
      "\\text{Extincteurs à eau} : \\lceil 1\\,150/200 \\rceil = 6 \\ ; \\ + \\text{CO}_2 \\text{ au local serveur}",
      "\\text{Passif : escaliers et local serveur en EI 60, portes EI 30 à fermeture automatique}",
      "\\text{Actif : détection automatique, alarme, SSI commandant portes et désenfumage}",
    ],
    conclusion: 'Le plateau combine compartimentage des locaux à risque, détection et alarme, et moyens de première intervention répartis.',
  },
  summary: {
    content: `### La protection incendie en 5 points
1. Passive : compartimentage, portes et clapets, protection des structures, réaction au feu.
2. Active : détection, alarme, extinction, désenfumage, SSI.
3. Sprinklers : $Q = K\\sqrt{P}$, $Q_{tot} = d \\times A$.
4. Extincteurs : 1 pour 200 m² au minimum, par niveau.
5. Maintenance et registre de sécurité.`,
  },
  key_points: {
    points: ['Passif = construction', 'Actif = équipements', 'Q = K √P', 'OH1 : 5 mm/min sur 72 m²', '1 extincteur / 200 m²'],
  },
  self_assessment: {
    objectives: [
      'Je distingue protections passive et active',
      'Je sais dimensionner un débit de sprinklers',
      'Je sais estimer le nombre d’extincteurs',
      'Je connais le rôle du SSI',
      "J'ai réussi le quiz avec au moins 2 bonnes réponses sur 3",
    ],
  },
});
