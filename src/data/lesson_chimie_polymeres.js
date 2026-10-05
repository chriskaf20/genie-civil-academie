// ── Lesson: Polymères, adjuvants et composites — Module 3 ─────────────────────
import { buildLesson } from './build_lesson.js';

export const lesson_chimie_polymeres = buildLesson({
  moduleId: 3,
  slug: 'chimie_polymeres',
  lessonIndex: 3,
  title: "Polymères, Adjuvants, Résines & Composites dans la Construction",
  subtitle: 'Module 03 — Chimie théorique & Chimie des matériaux',
  level: 'Débutant',
  duration: '8h',
  tags: ['Polymères', 'Adjuvants', 'Superplastifiants', 'Résines époxy', 'Composites', 'Géosynthétiques', 'Bitume'],
}, {
  definition: {
    title: 'Définition — Les longues chaînes qui changent la construction',
    fr: 'Polymères et produits organiques de construction',
    en: 'Polymers and organic construction materials',
    metier: "Utilisés par les formulateurs de béton, les entreprises de réparation et d'étanchéité, les ingénieurs géotechniques (géosynthétiques) et les ingénieurs de renforcement (composites).",
    content: `Un **polymère** est une macromolécule formée par la répétition d'un motif (monomère), liée par des liaisons covalentes le long de la chaîne et par des liaisons faibles entre les chaînes.

### Trois familles
- **Thermoplastiques** (PVC, polyéthylène PE/PEHD, polypropylène PP) : se ramollissent à la chaleur et peuvent être remis en forme ; canalisations, gaines, géomembranes.
- **Thermodurcissables** (époxy, polyester, polyuréthane) : réticulés de façon irréversible ; résines de collage, de réparation et matrices de composites.
- **Élastomères** (EPDM, néoprène, SBS) : très déformables et élastiques ; appareils d'appui, joints, bitumes modifiés.

### Les polymères dans le béton
Les **adjuvants** sont des produits organiques ajoutés en faible dose (moins de 5 % de la masse de ciment) : superplastifiants, retardateurs, accélérateurs, entraîneurs d'air, hydrofuges.

> 💡 Les superplastifiants modernes (polycarboxylates) ont rendu possibles les bétons autoplaçants et les bétons fibrés à ultra-hautes performances.`,
  },
  importance: {
    content: `- **Bétons performants** : réduire l'eau avec un superplastifiant augmente la résistance et la durabilité sans perdre l'ouvrabilité.
- **Réparation et renforcement** : les résines époxy et les composites de carbone prolongent la vie des ouvrages.
- **Étanchéité et réseaux** : géomembranes, membranes bitumineuses, canalisations PVC et PEHD.
- **Points faibles** : fluage, vieillissement aux UV, forte dilatation thermique, comportement au feu.

> ⚠️ **À retenir** : un polymère perd rapidement sa rigidité au-delà de sa température de transition vitreuse (Tg) : les collages époxy doivent rester bien en dessous en service.`,
  },
  applications: {
    examples: [
      ['Béton autoplaçant', 'Superplastifiant polycarboxylate et agent de viscosité pour un béton fluide sans ségrégation.'],
      ['Renforcement de poutre', 'Lamelles de fibres de carbone collées à l’époxy en sous-face.'],
      ['Centre de stockage de déchets', 'Géomembrane PEHD et géotextile de protection en fond d’alvéole.'],
      ['Toiture-terrasse', 'Membrane bitumineuse modifiée SBS en deux couches.'],
      ['Réseaux enterrés', 'Canalisations PVC et PEHD pour l’assainissement et l’eau potable.'],
    ],
  },
  theory: {
    title: 'Théorie — Polymères, adjuvants et composites',
    content: `### 1. Comportement des polymères
- Rigidité faible (E ≈ 1 à 4 GPa pour les résines) et dépendante de la température et du temps : **viscoélasticité** et **fluage**.
- **Température de transition vitreuse** $T_g$ : au-dessus, le polymère devient caoutchouteux.
- Dilatation thermique élevée : 50 à 200 × 10⁻⁶ /°C (environ 7 fois celle de l'acier pour le PVC).

### 2. Adjuvants du béton
- **Superplastifiants** : dispersent les grains de ciment par répulsion électrostatique ou stérique ; réduction d'eau de 15 à 40 %.
- **Retardateurs / accélérateurs** : modifient le temps de prise (bétonnage par temps chaud, décoffrage rapide).
- **Entraîneurs d'air** : microbulles qui protègent du gel-dégel.

Le nouveau dosage en eau après réduction : $E = E_0 (1 - r)$.

### 3. Composites à fibres
Un composite associe des **fibres** résistantes (carbone, verre, aramide) et une **matrice** polymère. Dans le sens des fibres, le module suit la **loi des mélanges** :
$$E_c = V_f \\, E_f + (1 - V_f) \\, E_m$$

### 4. Géosynthétiques
Géotextiles (filtration, séparation), géogrilles (renforcement), géomembranes (étanchéité) : en polypropylène, polyester ou PEHD.`,
  },
  formulas: {
    title: 'Formules essentielles — Polymères et composites',
    formulas: [
      {
        name: 'Loi des mélanges (module longitudinal d’un composite)',
        latex: "E_c = V_f \\, E_f + (1 - V_f) \\, E_m",
        description: 'Module d’un composite unidirectionnel dans le sens des fibres.',
        vars: [
          ['E_c', 'Module du composite', 'GPa', 'Dans la direction des fibres.'],
          ['V_f', 'Fraction volumique de fibres', '-', '0,5 à 0,7 pour les lamelles pultrudées.'],
          ['E_f', 'Module des fibres', 'GPa', 'Carbone 230 à 640 ; verre 70 à 85.'],
          ['E_m', 'Module de la matrice', 'GPa', 'Époxy ≈ 3 à 3,5.'],
        ],
        rule: "Perpendiculairement aux fibres, le composite est presque aussi souple que sa résine.",
      },
      {
        name: 'Réduction d’eau par un superplastifiant',
        latex: "E = E_0 \\, (1 - r) \\qquad \\frac{E}{C} = \\frac{E_0 (1 - r)}{C}",
        description: 'À ouvrabilité égale, le superplastifiant permet de diminuer l’eau.',
        vars: [
          ['E_0', "Dosage en eau initial", 'L/m³', 'Sans adjuvant.'],
          ['r', "Taux de réduction d'eau", '-', '0,15 à 0,40 selon le produit et le dosage.'],
          ['C', 'Dosage en ciment', 'kg/m³', 'Inchangé.'],
        ],
      },
      {
        name: "Dosage d'un adjuvant",
        latex: "m_{adj} = \\frac{p}{100} \\cdot C",
        description: 'Les adjuvants se dosent en pourcentage de la masse de ciment (ou de liant).',
        vars: [
          ['m_{adj}', "Masse d'adjuvant", 'kg/m³', 'Produit commercial.'],
          ['p', 'Dosage', '%', 'Superplastifiant : 0,5 à 2 %.'],
        ],
      },
      {
        name: 'Dilatation d’une canalisation en polymère',
        latex: "\\Delta L = \\alpha_p \\, L \\, \\Delta T",
        description: 'Les polymères se dilatent beaucoup : prévoir manchons de dilatation et points fixes.',
        vars: [
          ['\\alpha_p', 'Coefficient de dilatation du polymère', '1/°C', 'PVC ≈ 80 × 10⁻⁶ ; PEHD ≈ 180 × 10⁻⁶.'],
        ],
      },
    ],
  },
  stepbystep: {
    title: 'Calcul complet — Effet d’un superplastifiant sur un béton',
    problem: "Un béton contient 350 kg de ciment et 190 L d'eau par m³ (E/C = 0,54). On ajoute un superplastifiant dosé à 1 % de la masse de ciment, qui réduit l'eau de 25 % à ouvrabilité égale. Calculer la nouvelle eau, le nouveau E/C et la masse d'adjuvant.",
    steps_demo: [
      { n: 1, text: "Eau réduite : E = 190 × (1 − 0,25) = 142,5 L/m³." },
      { n: 2, text: "Nouveau rapport : E/C = 142,5 / 350 = 0,41." },
      { n: 3, text: "Masse d'adjuvant : 1 % × 350 = 3,5 kg/m³ de produit commercial." },
      { n: 4, text: "Effet attendu (Bolomey, résistance ∝ C/E − 0,5) : C/E passe de 1,84 à 2,46 ; le terme (C/E − 0,5) passe de 1,34 à 1,96, soit environ +46 % de résistance." },
      { n: 5, text: "Conséquence : on peut passer d'un C25/30 à un C35/45 environ, ou réduire le ciment pour une même résistance (gain carbone)." },
    ],
    result_latex: "E = 190 \\times 0{,}75 = 142{,}5\\ \\text{L/m}^3 \\qquad \\frac{E}{C} : 0{,}54 \\rightarrow 0{,}41 \\qquad m_{adj} = 3{,}5\\ \\text{kg/m}^3",
  },
  units: {
    table: [
      ['Dosage d’adjuvant', '% de la masse de ciment', '-', '1 % de 350 kg = 3,5 kg'],
      ['Module', 'GPa', 'Msi', '1 GPa = 0,145 Msi'],
      ['Dilatation', '1/°C', '1/°F', 'PVC 80 × 10⁻⁶ /°C ≈ 7 fois l’acier'],
      ['Grammage d’un géotextile', 'g/m²', 'oz/yd²', '1 oz/yd² = 33,9 g/m²'],
      ['Température de transition vitreuse', '°C', '°F', 'Époxy de collage ≈ 50 à 80 °C'],
    ],
    note: 'Les fiches techniques donnent le dosage d’adjuvant en % de la masse de liant : vérifiez s’il inclut les additions.',
  },
  hypotheses: {
    items: [
      ['info', 'La loi des mélanges suppose une adhérence parfaite fibres-matrice et des fibres continues alignées.'],
      ['info', 'La réduction d’eau dépend de la compatibilité ciment-adjuvant : à valider par des essais de convenance.'],
      ['warning', 'Un surdosage de superplastifiant peut provoquer ressuage, ségrégation ou retard de prise.'],
      ['warning', 'Les résines et composites collés doivent être protégés du feu et des UV.'],
      ['tip', 'Associez un entraîneur d’air au superplastifiant pour les bétons exposés au gel avec sels (classes XF).'],
    ],
  },
  simple_examples: {
    examples: [
      {
        title: 'Exemple 1 : module d’une lamelle carbone',
        given: 'V_f = 0,6 ; E_f = 230 GPa ; E_m = 3,5 GPa',
        find: 'E_c',
        solution_latex: "E_c = 0{,}6 \\times 230 + 0{,}4 \\times 3{,}5 = 138 + 1{,}4 = 139{,}4\\ \\text{GPa}",
        result: '≈ 140 GPa : environ deux tiers du module de l’acier pour un cinquième de sa masse.',
      },
      {
        title: 'Exemple 2 : dilatation d’un tuyau PVC',
        given: 'Descente PVC de 12 m, α = 80 × 10⁻⁶ /°C, ΔT = 40 °C',
        find: 'ΔL',
        solution_latex: "\\Delta L = 80 \\times 10^{-6} \\times 12 \\times 40 = 0{,}038\\ \\text{m}",
        result: '38 mm : manchons de dilatation à chaque étage.',
      },
      {
        title: 'Exemple 3 : dosage d’entraîneur d’air',
        given: 'Ciment 380 kg/m³, dosage 0,05 %',
        find: 'Masse de produit',
        solution_latex: "m = 0{,}0005 \\times 380 = 0{,}19\\ \\text{kg/m}^3",
        result: '190 g par m³ : un dosage très faible, d’où l’importance des doseurs automatiques.',
      },
    ],
  },
  real_examples: {
    title: 'Exemple réel — Renforcement d’un parking par composites de carbone',
    examples: [
      {
        context: 'Parking des années 1980 dont l’usage passe de véhicules légers à des véhicules plus lourds',
        scenario: "Les poutres manquent de 20 % de capacité en flexion. Des lamelles de carbone collées à l'époxy en sous-face apportent la section d'armature manquante, sans augmenter le poids ni réduire la hauteur libre.",
        decomposition_latex: "\\Delta M_{Rd} \\approx A_f \\, E_f \\, \\varepsilon_{f,lim} \\, z \\quad (\\varepsilon_{f,lim} \\approx 0{,}6 \\text{ à } 0{,}8\\,\\%)",
        lesson: "Le renforcement composite est rapide et léger, mais il exige un support sain, une préparation de surface soignée et une protection au feu ; la déformation est limitée pour éviter le décollement.",
      },
    ],
  },
  diagrams: {
    title: 'Schéma de principe — Les polymères sur un chantier',
    diagram_description: [
      'Béton frais : adjuvants (superplastifiant, retardateur, entraîneur d’air)',
      'Réseaux : canalisations PVC, PEHD, PP',
      'Géotechnique : géotextiles, géogrilles, géomembranes',
      'Étanchéité : membranes bitumineuses SBS, résines',
      'Structure : appareils d’appui en élastomère, joints',
      'Réparation : mortiers modifiés, résines époxy, composites de carbone',
    ],
  },
  mistakes: {
    items: [
      ['Ajouter de l’eau au lieu de superplastifiant sur chantier', 'Perte de résistance et de durabilité', 'Redoser l’adjuvant selon la procédure prévue par le fournisseur.'],
      ['Coller un composite sur un béton dégradé', 'Décollement prématuré', 'Purger, réparer et vérifier la cohésion superficielle (≥ 1,5 MPa) avant collage.'],
      ['Bloquer une canalisation PVC aux deux extrémités', 'Flambement ou rupture au changement de température', 'Prévoir points fixes et manchons de dilatation.'],
    ],
  },
  tips: {
    tips: [
      'Faites toujours un essai de convenance (affaissement, maintien rhéologique) avec le ciment du chantier.',
      'Les géomembranes se soudent par thermofusion et se contrôlent par essai à l’air sur double soudure.',
      'Stockez les adjuvants à l’abri du gel et respectez leur date limite d’utilisation.',
      'Respectez la température minimale de mise en œuvre des résines (souvent 5 à 10 °C).',
    ],
  },
  norms: {
    norms: [
      ['NF EN 934-2', 'Adjuvants pour béton : définitions, exigences, conformité.'],
      ['NF EN 1504', 'Produits de protection et de réparation des structures en béton.'],
      ['NF EN 13361', 'Géosynthétiques bentonitiques et barrières polymériques pour réservoirs et barrages.'],
      ['Guide AFGC « Réparation et renforcement par composites »', 'Conception et exécution des renforcements par matériaux composites collés.'],
    ],
  },
  exercises: {
    exercises: [
      {
        level: 1,
        text: 'Calculer le module d’un composite verre-époxy : V_f = 0,5 ; E_f = 75 GPa ; E_m = 3 GPa.',
        hint: 'Loi des mélanges.',
        answer_latex: "E_c = 0{,}5 \\times 75 + 0{,}5 \\times 3 = 39\\ \\text{GPa}",
        answer_text: 'E_c = 39 GPa.',
      },
      {
        level: 2,
        text: 'Un béton à 400 kg de ciment et 200 L d’eau reçoit un superplastifiant réduisant l’eau de 30 %. Calculer le nouvel E/C.',
        hint: 'E = E₀(1 − r).',
        answer_latex: "E = 200 \\times 0{,}70 = 140\\ \\text{L} \\qquad \\frac{E}{C} = \\frac{140}{400} = 0{,}35",
        answer_text: 'E/C = 0,35 (au lieu de 0,50).',
      },
      {
        level: 3,
        text: 'Une géomembrane PEHD (α = 180 × 10⁻⁶ /°C) de 50 m est posée à 35 °C au soleil puis refroidit à 5 °C la nuit. Calculer le retrait et expliquer le risque.',
        hint: 'ΔL = αLΔT.',
        answer_latex: "\\Delta L = 180 \\times 10^{-6} \\times 50 \\times 30 = 0{,}27\\ \\text{m}",
        answer_text: '27 cm de retrait : sans plis de compensation ni ancrage adapté, la membrane se tend et peut se déchirer aux angles (« effet de pont »).',
      },
    ],
  },
  quiz: {
    title: 'Quiz — Polymères et adjuvants',
    questions: [
      { q: 'Quel polymère est un thermodurcissable ?', options: ['Le PVC', 'L’époxy', 'Le polyéthylène'], correct: 1, explain: 'L’époxy réticule de façon irréversible ; PVC et PE sont thermoplastiques.' },
      { q: 'Quel est le rôle principal d’un superplastifiant ?', options: ['Accélérer la prise', 'Réduire l’eau à ouvrabilité égale', 'Colorer le béton'], correct: 1, explain: 'Il disperse les grains de ciment : moins d’eau pour la même fluidité.' },
      { q: 'Pourquoi ajoute-t-on un entraîneur d’air ?', options: ['Pour alléger le béton', 'Pour améliorer la résistance au gel-dégel', 'Pour augmenter la résistance'], correct: 1, explain: 'Les microbulles absorbent la pression de l’eau qui gèle.' },
    ],
  },
  exam_questions: {
    questions: [
      'Présentez les trois familles de polymères, leur structure et un emploi en construction pour chacune.',
      'Expliquez le mode d’action des superplastifiants et leur intérêt pour la durabilité et le bilan carbone.',
      'Décrivez le renforcement d’une poutre par composites collés : principe, calcul simplifié et précautions.',
    ],
  },
  interview_questions: {
    questions: [
      ['Comment obtenir un béton autoplaçant ?', "Avec un superplastifiant puissant (polycarboxylate), une quantité de fines plus élevée (fillers, additions), éventuellement un agent de viscosité, et une granulométrie adaptée ; on vérifie l'étalement, la stabilité au tamis et le passage entre armatures."],
      ['Quelles sont les limites des composites collés ?', 'Sensibilité au feu et à la température (Tg de la résine), dépendance à la qualité du support et de la préparation, rupture fragile par décollement, et durabilité à valider en environnement humide.'],
    ],
  },
  practical_case: {
    title: 'Cas pratique — Béton bas carbone à résistance égale',
    scenario: 'Un béton C30/37 est formulé avec 360 kg de ciment CEM I et 185 L d’eau (E/C = 0,51). Le maître d’ouvrage veut réduire l’empreinte carbone sans changer la classe de résistance.',
    description: 'Utiliser un superplastifiant (réduction d’eau de 20 %) pour réduire le ciment à E/C constant.',
    resolutions: [
      "E = 185 \\times 0{,}80 = 148\\ \\text{L/m}^3",
      "C = \\frac{148}{0{,}51} = 290\\ \\text{kg/m}^3 \\ (\\text{au lieu de 360})",
      "\\text{Gain : } 70\\ \\text{kg de ciment par m}^3 \\approx 60\\ \\text{kg CO}_2/\\text{m}^3",
    ],
    conclusion: "À E/C constant, la résistance est conservée avec 70 kg de ciment en moins par m³ ; il faut vérifier que le dosage minimal en liant de la classe d'exposition (EN 206) reste respecté.",
  },
  summary: {
    content: `### Les polymères en 5 points
1. Thermoplastiques, thermodurcissables, élastomères.
2. Faible rigidité, fluage, forte dilatation, sensibles à la chaleur ($T_g$).
3. Adjuvants : superplastifiants ($E = E_0(1-r)$), retardateurs, entraîneurs d'air.
4. Composites : $E_c = V_f E_f + (1 - V_f) E_m$.
5. Géosynthétiques et étanchéités : PEHD, PP, bitumes SBS.`,
  },
  key_points: {
    points: [
      'Adjuvants dosés en % de la masse de ciment',
      'Superplastifiant : −15 à −40 % d’eau',
      'E_c = V_f E_f + (1 − V_f) E_m',
      'PVC : α ≈ 80 × 10⁻⁶ /°C',
      'Résines : rester sous la Tg en service',
    ],
  },
  self_assessment: {
    objectives: [
      'Je distingue les familles de polymères',
      'Je connais le rôle des principaux adjuvants du béton',
      'Je sais calculer l’effet d’une réduction d’eau sur le E/C',
      'Je sais estimer le module d’un composite',
      "J'ai réussi le quiz avec au moins 2 bonnes réponses sur 3",
    ],
  },
});
