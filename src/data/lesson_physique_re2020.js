// ── Lesson: Réglementation environnementale RE2020 — Module 42 ───────────────
import { buildLesson } from './build_lesson.js';

export const lesson_physique_re2020 = buildLesson({
  moduleId: 42,
  slug: 'physique_re2020',
  lessonIndex: 4,
  title: "Réglementation Environnementale RE2020 : Bbio, Cep, Confort d'Été (DH) et Carbone (Ic construction)",
  subtitle: 'Module 42 — Physique du bâtiment : thermique, hygrométrie & acoustique',
  level: 'Intermédiaire',
  duration: '5h',
  diagramType: 'none',
  tags: ['RE2020', 'Bbio', 'Cep', 'DH', 'Ic construction', 'ACV', 'FDES', 'Énergie primaire'],
}, {
  definition: {
    title: 'Définition — Énergie, confort d’été et carbone',
    fr: 'Réglementation environnementale 2020 (RE2020)',
    en: 'French environmental building regulation RE2020',
    metier: "Concerne les thermiciens, architectes, bureaux d'études environnement, économistes et maîtres d'ouvrage.",
    content: `La **RE2020** s'applique en France aux bâtiments neufs (logements depuis 2022, puis bureaux et enseignement). Elle succède à la RT2012 et ajoute deux préoccupations : le **confort d'été** et l'**impact carbone** sur tout le cycle de vie.

### Les indicateurs principaux
- **Bbio** (besoin bioclimatique) : qualité de la conception (isolation, compacité, orientation, apports solaires), indépendamment des équipements.
- **Cep** et **Cep,nr** : consommation d'énergie primaire totale et non renouvelable (chauffage, froid, eau chaude, éclairage, ventilation, auxiliaires).
- **DH** (degrés-heures d'inconfort) : mesure de l'inconfort en été.
- **Ic énergie** : émissions de gaz à effet de serre liées aux consommations sur 50 ans.
- **Ic construction** : émissions liées aux produits et équipements et au chantier, calculées par **analyse du cycle de vie (ACV)** à partir des fiches FDES et PEP.

> 💡 Les seuils d'Ic construction baissent par paliers (2022, 2025, 2028, 2031) : la RE2020 pousse progressivement vers le bois, les matériaux biosourcés et les bétons bas carbone.`,
  },
  importance: {
    content: `- **Obligation** : le permis de construire et l'attestation de fin de travaux exigent le respect des seuils.
- **Climat** : le bâtiment représente une part importante des émissions nationales ; la construction neuve doit réduire son empreinte.
- **Confort** : les vagues de chaleur rendent le confort d'été indispensable sans climatisation systématique.
- **Conception** : la RE2020 se gagne dès l'esquisse (forme, orientation, protections solaires, choix des matériaux).

> ⚠️ **À retenir** : un bâtiment très isolé mais mal protégé du soleil peut échouer sur l'indicateur DH.`,
  },
  applications: {
    examples: [
      ['Maison individuelle', 'Pompe à chaleur, isolation renforcée, ossature bois ou béton bas carbone.'],
      ['Logements collectifs', 'Réseau de chaleur, protections solaires extérieures, ventilation double flux.'],
      ['Choix des matériaux', 'Comparaison de solutions par leur FDES (kg CO₂e par unité fonctionnelle).'],
      ['Confort d’été', 'Volets, brise-soleil, inertie, ventilation nocturne traversante.'],
      ['Permis de construire', 'Attestation de prise en compte de la RE2020.'],
    ],
  },
  theory: {
    title: 'Théorie — Indicateurs et méthode de calcul',
    content: `### 1. Bbio (en points)
$$Bbio = 2\\, B_{ch} + 2\\, B_{fr} + 5\\, B_{écl}$$
Les besoins de chauffage, de refroidissement et d'éclairage sont pondérés ; l'éclairage pèse plus. Le seuil vaut $Bbio_{max} = Bbio_{max,moyen} \\times (1 + M_{bgéo} + M_{bcombles} + M_{bsurf} + M_{bbruit})$, avec des modulations selon la zone climatique, la surface, l'altitude et le bruit.

### 2. Énergie primaire
L'énergie finale consommée est convertie en énergie primaire : coefficient **2,3** pour l'électricité, 1 pour le gaz et le bois (règle de calcul RE2020).

### 3. Confort d'été : degrés-heures
$$DH = \\sum_{heures} \\max(0,\\ T_{int} - T_{confort})$$
Au-delà de 1 250 °C·h, le bâtiment n'est pas conforme ; entre un seuil bas (350 °C·h en logement) et 1 250, une pénalité s'applique au Cep.

### 4. Carbone : Ic construction
$$Ic_{construction} = \\frac{\\sum_i Q_i \\times FE_i}{S_{réf}}$$
$Q_i$ : quantité de chaque produit ; $FE_i$ : impact de la FDES (kg CO₂e par unité) ; $S_{réf}$ : surface de référence. L'ACV est **dynamique** : une émission aujourd'hui pèse plus qu'une émission dans 50 ans, ce qui valorise le stockage de carbone biogénique.

### 5. Seuils Ic construction (kg CO₂e/m²)
| Période | Maison individuelle | Logement collectif |
|---|---|---|
| 2022–2024 | 640 | 740 |
| 2025–2027 | 530 | 650 |
| 2028–2030 | 475 | 580 |
| dès 2031 | 415 | 490 |`,
  },
  formulas: {
    title: 'Formules essentielles — RE2020',
    formulas: [
      {
        name: 'Besoin bioclimatique',
        latex: "Bbio = 2\\,B_{ch} + 2\\,B_{fr} + 5\\,B_{écl}",
        description: 'Indicateur de conception, en points.',
        vars: [['B_{ch}, B_{fr}, B_{écl}', 'Besoins de chauffage, froid, éclairage', 'kWh/m²', '']],
      },
      {
        name: 'Énergie primaire de l’électricité',
        latex: "E_p = 2{,}3 \\times E_f",
        description: 'Conversion de l’énergie finale électrique.',
        vars: [['E_f', 'Énergie finale', 'kWh', ''], ['E_p', 'Énergie primaire', 'kWh', '']],
      },
      {
        name: 'Degrés-heures d’inconfort',
        latex: "DH = \\sum \\max(0,\\ T_{int} - T_{confort})",
        description: 'Somme horaire des dépassements de la température de confort.',
        vars: [['T_{confort}', 'Température de confort adaptative', '°C', 'Entre 26 et 28 °C selon les jours.']],
      },
      {
        name: 'Impact carbone de la construction',
        latex: "Ic_{construction} = \\frac{\\sum Q_i \\, FE_i}{S_{réf}}",
        description: 'ACV des produits et équipements et du chantier.',
        vars: [['Q_i', 'Quantité de produit', 'unité FDES', ''], ['FE_i', 'Impact unitaire', 'kg CO₂e/unité', ''], ['S_{réf}', 'Surface de référence', 'm²', '']],
      },
    ],
  },
  stepbystep: {
    title: 'Calcul complet — Ic construction d’une maison de 100 m²',
    problem: "Une maison de 100 m² (surface de référence) a l'ACV suivante (kg CO₂e) : fondations et gros œuvre 30 000 ; charpente-couverture 6 000 ; menuiseries 5 000 ; isolation 4 000 ; équipements techniques 8 000 ; second œuvre 7 000 ; chantier 2 000. Vérifier les seuils 2022 et 2025, puis évaluer une variante en ossature bois réduisant le gros œuvre à 18 000 kg.",
    steps_demo: [
      { n: 1, text: "Total : 30 000 + 6 000 + 5 000 + 4 000 + 8 000 + 7 000 + 2 000 = 62 000 kg CO₂e." },
      { n: 2, text: "Ic construction = 62 000 / 100 = 620 kg CO₂e/m²." },
      { n: 3, text: "Seuil 2022–2024 (640) : conforme. Seuil 2025 (530) : non conforme." },
      { n: 4, text: "Variante bois : 62 000 − 12 000 = 50 000 kg → 500 kg CO₂e/m² ≤ 530 ✓." },
      { n: 5, text: "Le gros œuvre représente près de la moitié de l'impact : c'est le premier levier." },
    ],
    result_latex: "Ic = \\frac{62\\,000}{100} = 620 \\rightarrow \\text{variante bois} : \\frac{50\\,000}{100} = 500\\ \\text{kg CO}_2\\text{e/m}^2 \\leq 530",
  },
  units: {
    table: [
      ['Bbio', 'points', '—', 'Sans unité physique directe'],
      ['Cep', 'kWhep/m²/an', 'kBtu/ft²/yr', '1 kWh/m² = 0,317 kBtu/ft²'],
      ['DH', '°C·h', '°F·h', '1 °C·h = 1,8 °F·h'],
      ['Ic construction', 'kg CO₂e/m²', 'lb CO₂e/ft²', '1 kg/m² = 0,205 lb/ft²'],
      ['Durée d’étude', '50 ans', '50 years', 'Période de référence de l’ACV'],
    ],
    note: 'Les seuils dépendent de la typologie, de la surface, de la zone climatique et de l’altitude : le moteur de calcul officiel fait foi.',
  },
  hypotheses: {
    items: [
      ['info', 'Les valeurs de l’exemple sont pédagogiques ; une ACV réelle compte des centaines de lignes de FDES.'],
      ['info', 'Les données environnementales par défaut (sans FDES spécifique) sont pénalisantes : utiliser des FDES produits quand elles existent.'],
      ['warning', 'Les seuils évoluent par paliers ; vérifier les textes en vigueur à la date du permis.'],
      ['warning', 'Réduire le carbone ne doit pas dégrader le confort d’été ni l’acoustique.'],
      ['tip', 'Travaillez la RE2020 dès l’esquisse : orientation, compacité, protections solaires et système constructif.'],
    ],
  },
  simple_examples: {
    examples: [
      { title: 'Exemple 1 : énergie primaire', given: 'PAC consommant 2 500 kWh d’électricité par an', find: 'E_p', solution_latex: "E_p = 2{,}3 \\times 2\\,500 = 5\\,750\\ \\text{kWh}_{ep}", result: '5 750 kWhep par an.' },
      { title: 'Exemple 2 : Bbio', given: 'B_ch = 20 ; B_fr = 3 ; B_écl = 4 (kWh/m²)', find: 'Bbio', solution_latex: "Bbio = 2 \\times 20 + 2 \\times 3 + 5 \\times 4 = 66", result: '66 points.' },
      { title: 'Exemple 3 : degrés-heures', given: '5 jours à 30 °C pendant 6 h, T_confort = 27 °C', find: 'DH', solution_latex: "DH = 5 \\times 6 \\times (30 - 27) = 90\\ °\\text{C·h}", result: '90 °C·h pour cet épisode.' },
    ],
  },
  real_examples: {
    title: 'Exemple réel — Logements collectifs en bois et béton bas carbone',
    examples: [
      {
        context: 'Programmes de logements collectifs déposés après 2025 en France',
        scenario: "Pour respecter le seuil Ic construction de 2025, de nombreux promoteurs ont combiné des planchers et structures en béton bas carbone (ciments CEM III), des façades à ossature bois, des isolants biosourcés et des réseaux de chaleur. Les protections solaires extérieures (volets, brise-soleil) ont été généralisées pour le confort d'été.",
        decomposition_latex: "\\text{Structure bas carbone} + \\text{biosourcés} + \\text{protections solaires} \\Rightarrow Ic \\text{ et } DH \\text{ conformes}",
        lesson: "Le respect de la RE2020 résulte d'une combinaison de choix : aucun levier unique ne suffit.",
      },
    ],
  },
  diagrams: {
    title: 'Schéma de principe — Démarche RE2020',
    diagram_description: [
      'Esquisse : orientation, compacité, surfaces vitrées → Bbio',
      'Protections solaires et inertie → DH (confort d’été)',
      'Systèmes : chauffage, ECS, ventilation → Cep, Cep,nr, Ic énergie',
      'Choix constructifs et matériaux (FDES) → Ic construction',
      'Calcul réglementaire avec le moteur officiel',
      'Attestations au permis et à la fin des travaux',
    ],
  },
  mistakes: {
    items: [
      ['Négliger le confort d’été', 'DH > 1 250 : non conforme', 'Protections solaires extérieures, inertie, ventilation nocturne.'],
      ['Utiliser des données par défaut', 'Ic construction surestimé', 'Rechercher les FDES spécifiques des produits.'],
      ['Penser RE2020 en fin d’étude', 'Modifications coûteuses', 'L’intégrer dès l’esquisse.'],
    ],
  },
  tips: {
    tips: [
      'Le gros œuvre pèse souvent 40 à 50 % de l’Ic construction : c’est le premier levier.',
      'Un brise-soleil bien dimensionné améliore à la fois DH et Bbio.',
      'Privilégiez les énergies peu carbonées (réseau de chaleur, PAC, bois).',
      'Documentez les FDES utilisées pour l’attestation.',
    ],
  },
  norms: {
    norms: [
      ['Décret n° 2021-1004 du 29 juillet 2021', 'Exigences de performance énergétique et environnementale des constructions neuves.'],
      ['Arrêté du 4 août 2021', 'Méthode de calcul et seuils de la RE2020.'],
      ['NF EN 15804+A2', 'Déclarations environnementales des produits de construction (FDES).'],
      ['NF EN 15978', 'Évaluation de la performance environnementale des bâtiments.'],
    ],
  },
  exercises: {
    exercises: [
      { level: 1, text: 'Une maison de 120 m² émet 66 000 kg CO₂e. Calculer Ic construction.', hint: 'Diviser par la surface.', answer_latex: "Ic = \\frac{66\\,000}{120} = 550\\ \\text{kg CO}_2\\text{e/m}^2", answer_text: '550 kg CO₂e/m² : conforme en 2022, pas en 2025 (530).' },
      { level: 2, text: 'Calculer Bbio pour B_ch = 15, B_fr = 5, B_écl = 3.', hint: '2 Bch + 2 Bfr + 5 Bécl.', answer_latex: "Bbio = 30 + 10 + 15 = 55", answer_text: '55 points.' },
      { level: 3, text: 'Quelle masse de CO₂e faut-il économiser sur une maison de 110 m² à 590 kg CO₂e/m² pour atteindre le seuil 2028 (475) ?', hint: '(590 − 475) × surface.', answer_latex: "(590 - 475) \\times 110 = 12\\,650\\ \\text{kg CO}_2\\text{e}", answer_text: '12,65 t CO₂e à économiser.' },
    ],
  },
  quiz: {
    title: 'Quiz — RE2020',
    questions: [
      { q: 'Quel indicateur mesure le confort d’été ?', options: ['Bbio', 'DH (degrés-heures)', 'Cep'], correct: 1, explain: 'DH : somme des dépassements de la température de confort.' },
      { q: 'Que mesure Ic construction ?', options: ['La consommation de chauffage', 'Les émissions des produits, équipements et du chantier', 'Le coût de construction'], correct: 1, explain: 'Calculé par ACV sur 50 ans.' },
      { q: 'Quel coefficient d’énergie primaire pour l’électricité en RE2020 ?', options: ['1', '2,3', '2,58'], correct: 1, explain: '2,3 (2,58 était la valeur de la RT2012).' },
    ],
  },
  exam_questions: {
    questions: [
      'Présentez les indicateurs de la RE2020 et ce qu’ils mesurent.',
      'Calculez un Ic construction et commentez les leviers de réduction.',
      'Quelles dispositions améliorent le confort d’été d’un logement ?',
    ],
  },
  interview_questions: {
    questions: [
      ['Un projet dépasse le seuil Ic construction : que proposez-vous ?', 'J’identifie les postes les plus émetteurs (souvent le gros œuvre), je teste des variantes (béton bas carbone, bois, biosourcés), je remplace les données par défaut par des FDES spécifiques et je vérifie l’impact sur les autres indicateurs.'],
      ['Comment éviter la climatisation dans un logement neuf ?', 'Protections solaires extérieures, inertie, ventilation nocturne traversante, limitation des vitrages exposés à l’ouest ; on vérifie par le calcul des DH.'],
    ],
  },
  practical_case: {
    title: 'Cas pratique — Confort d’été d’un séjour exposé à l’ouest',
    scenario: 'Le calcul initial donne DH = 1 480 °C·h. Variante : volets roulants extérieurs automatisés (−600 °C·h estimés) et ventilation nocturne (−250 °C·h).',
    description: 'Vérifier la conformité après améliorations.',
    resolutions: [
      "DH_{initial} = 1\\,480 > 1\\,250 \\Rightarrow \\text{non conforme}",
      "DH_{variante} = 1\\,480 - 600 - 250 = 630\\ °\\text{C·h}",
      "350 < 630 < 1\\,250 \\Rightarrow \\text{conforme, avec une pénalité limitée sur le Cep}",
    ],
    conclusion: 'Les protections solaires extérieures sont la mesure la plus efficace ; la ventilation nocturne complète le dispositif.',
  },
  summary: {
    content: `### La RE2020 en 5 points
1. Bbio = 2 Bch + 2 Bfr + 5 Bécl : qualité de conception.
2. Cep, Cep,nr : énergie primaire (électricité × 2,3).
3. DH ≤ 1 250 °C·h : confort d'été.
4. Ic construction par ACV dynamique, seuils décroissants (640 → 415 en maison).
5. Se joue dès l'esquisse : forme, soleil, matériaux.`,
  },
  key_points: {
    points: ['Bbio = 2Bch + 2Bfr + 5Bécl', 'Électricité : × 2,3', 'DH ≤ 1 250 °C·h', 'Ic maison : 640 → 530 → 475 → 415', 'FDES spécifiques'],
  },
  self_assessment: {
    objectives: [
      'Je connais les indicateurs de la RE2020',
      'Je sais calculer un Bbio et une énergie primaire',
      'Je sais calculer un Ic construction',
      'Je sais proposer des mesures pour le confort d’été',
      "J'ai réussi le quiz avec au moins 2 bonnes réponses sur 3",
    ],
  },
});
