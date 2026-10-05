// ── Lesson: Contrôle qualité & essais de laboratoire — Module 33 ───────────────
export const lesson_qualite = {
  moduleId: 33,
  slug: 'qualite',
  lessonIndex: 1,
  title: "Contrôle Qualité & Essais : Béton, Sols, Aciers et Contrôles Non Destructifs",
  subtitle: "Module 33 — Contrôle Qualité & Essais de Laboratoire",
  level: 'Intermédiaire',
  duration: '35h',
  diagramType: 'process_flow',
  tags: ['Qualité', 'Essais', 'Affaissement', 'Compression', 'Proctor', 'Plaque', 'Traction', 'CND'],

  steps: [
    {
      id: 1,
      key: 'definition',
      title: "Définition — Prouver que l'ouvrage est conforme",
      icon: '📖',
      type: 'definition',
      fr: "Contrôle qualité, essais de matériaux et contrôles non destructifs",
      en: 'Quality Control, Materials Testing & Non-Destructive Testing',
      metier: "Pratiqué par les laboratoires de chantier, les techniciens qualité, les conducteurs de travaux, la maîtrise d'œuvre et les contrôleurs techniques.",
      content: `Le **contrôle qualité** consiste à vérifier, par des mesures et des essais normalisés, que les matériaux mis en œuvre et l'ouvrage réalisé respectent les exigences du marché.

### Assurance qualité et contrôle qualité
- **Assurance qualité** : l'organisation qui donne confiance (plan d'assurance qualité **PAQ**, procédures, traçabilité).
- **Contrôle qualité** : les vérifications elles-mêmes (essais, mesures, réceptions).

### Trois niveaux de contrôle
1. **Contrôle intérieur** : réalisé par l'entreprise (autocontrôle et contrôle par son encadrement).
2. **Contrôle extérieur** : réalisé par la maîtrise d'œuvre ou un laboratoire mandaté.
3. **Points d'arrêt** : étapes qui ne peuvent être franchies sans accord écrit (réception des fonds de fouille, des armatures avant bétonnage…).

### Les familles d'essais
- **Béton** : frais (affaissement, air occlus) et durci (compression sur éprouvettes).
- **Sols** : identification, Proctor, essais de plaque, densité en place.
- **Aciers** : traction, pliage, caractéristiques d'adhérence.
- **Ouvrage** : contrôles non destructifs (CND) et carottages.

> 💡 Un résultat d'essai n'a de valeur que s'il est **traçable** : quel matériau, quel lot, quelle date, quel opérateur, quelle norme.`,
    },

    {
      id: 2,
      key: 'importance',
      title: "Pourquoi le contrôle qualité est indispensable",
      icon: '⚠️',
      type: 'importance',
      content: `Les calculs supposent des matériaux conformes à leur classe : sans contrôle, cette hypothèse n'est pas démontrée.

- **Sécurité** : un béton C25/30 livré à la place d'un C35/45 réduit la marge de sécurité d'un poteau très chargé.
- **Durabilité** : un compactage insuffisant d'une couche de forme provoque des déformations de la chaussée dès les premières années.
- **Responsabilités** : en cas de litige, les procès-verbaux d'essais sont les preuves contractuelles.
- **Coût** : une non-conformité détectée au bon moment coûte une fraction de ce que coûte une démolition.

> ⚠️ **Règle d'or** : on contrôle avant de recouvrir. Une fois les armatures bétonnées ou le remblai compacté, il est trop tard pour vérifier simplement.`,
    },

    {
      id: 3,
      key: 'applications',
      title: "Applications terrain",
      icon: '🏗️',
      type: 'applications',
      examples: [
        { context: "Réception d'une toupie de béton", text: "Contrôle du bon de livraison (classe, consistance, heure), essai d'affaissement et confection d'éprouvettes." },
        { context: "Couche de forme routière", text: "Essais de plaque et mesures de densité pour vérifier la portance (classe PF) et le taux de compactage." },
        { context: "Ferraillage", text: "Point d'arrêt avant coulage : diamètres, espacements, enrobages, recouvrements conformes aux plans." },
        { context: "Doute sur un poteau", text: "Auscultation par ultrasons et scléromètre, puis carottage pour mesurer la résistance en place." },
        { context: "Aciers de béton armé", text: "Vérification du marquage et des certificats, essais de traction en cas de doute sur un lot." },
      ],
    },

    {
      id: 4,
      key: 'theory',
      title: "Théorie — Essais normalisés et critères de conformité",
      icon: '📐',
      type: 'theory',
      diagramType: 'process_flow',
      content: `### 1. Béton frais : la consistance
L'**affaissement au cône d'Abrams** (NF EN 12350-2) classe la consistance : S1 (10 à 40 mm), S2 (50 à 90), S3 (100 à 150), S4 (160 à 210), S5 (≥ 220 mm).

### 2. Béton durci : la résistance en compression
Éprouvettes cylindriques 16 × 32 cm conservées dans l'eau et écrasées à 28 jours (NF EN 12390-3) :
$$f_c = \\frac{F}{A_c}$$

### 3. La conformité selon NF EN 206
Pour une **production initiale** (3 résultats) :
$$f_{cm} \\ge f_{ck} + 4 \\qquad \\text{et} \\qquad f_{ci} \\ge f_{ck} - 4\\ \\text{(MPa)}$$
En production continue (au moins 15 résultats), le premier critère devient $f_{cm} \\ge f_{ck} + 1{,}48\\,\\sigma$.

### 4. Valeur caractéristique
La résistance caractéristique est le **fractile 5 %** : pour une loi normale, $f_{ck} \\approx f_{cm} - 1{,}645\\,s$.

### 5. Sols : compactage et portance
- Masse volumique sèche $\\rho_d = \\frac{\\rho_h}{1 + w}$, comparée à l'optimum **Proctor** (NF P 94-093).
- **Essai de plaque** : module $E_{V2}$ ; PF2 si $E_{V2} \\ge 50$ MPa, PF3 si $E_{V2} \\ge 120$ MPa ; un rapport $E_{V2}/E_{V1} \\le 2$ indique un bon compactage.

### 6. Aciers B500B
Limite d'élasticité caractéristique 500 MPa, rapport $R_m/R_e \\ge 1{,}08$ et allongement sous charge maximale $A_{gt} \\ge 5\\,\\%$ (ductilité classe B).

### 7. Contrôles non destructifs
Vitesse ultrasonore $V = L/t$ (NF EN 12504-4), indice de rebondissement au scléromètre (NF EN 12504-2), pachomètre pour l'enrobage, carottage (NF EN 12504-1) pour la résistance en place.`,
    },

    {
      id: 5,
      key: 'formulas',
      title: "Formules essentielles",
      icon: '🔢',
      type: 'formulas',
      diagramType: 'process_flow',
      formulas: [
        {
          name: "Résistance en compression d'une éprouvette",
          latex: "f_c = \\frac{F}{A_c} \\qquad A_c = \\frac{\\pi D^2}{4}",
          description: "Charge de rupture divisée par la section de l'éprouvette.",
          variables: [
            { symbol: 'f_c', name: 'Résistance en compression', unit: '\\text{MPa}', role: 'Résultat individuel d\'un essai.', category: 'Résultat' },
            { symbol: 'F', name: 'Charge de rupture', unit: '\\text{N}', role: 'Lue sur la presse.', category: 'Mesure' },
            { symbol: 'A_c', name: 'Section de l\'éprouvette', unit: '\\text{mm}^2', role: 'π × 160² / 4 = 20 106 mm² pour un cylindre 16 × 32.', category: 'Géométrie' },
            { symbol: 'D', name: 'Diamètre', unit: '\\text{mm}', role: '160 mm (cylindre français normalisé).', category: 'Géométrie' },
          ],
        },
        {
          name: "Critères de conformité EN 206 (production initiale, 3 résultats)",
          latex: "f_{cm} \\ge f_{ck} + 4 \\qquad f_{ci} \\ge f_{ck} - 4",
          description: "La moyenne et chaque résultat individuel doivent respecter leur critère.",
          variables: [
            { symbol: 'f_{cm}', name: 'Moyenne des résultats', unit: '\\text{MPa}', role: 'Moyenne des 3 résultats du lot.', category: 'Statistique' },
            { symbol: 'f_{ck}', name: 'Résistance caractéristique spécifiée', unit: '\\text{MPa}', role: 'C30/37 → 30 MPa sur cylindre.', category: 'Exigence' },
            { symbol: 'f_{ci}', name: 'Résultat individuel', unit: '\\text{MPa}', role: 'Chaque résultat pris séparément.', category: 'Mesure' },
          ],
          ruleOfThumb: "Un seul critère non respecté rend le lot non conforme : on engage alors des investigations (carottages, calcul de la marge réelle).",
        },
        {
          name: "Estimation de la résistance caractéristique",
          latex: "f_{ck} \\approx f_{cm} - 1{,}645\\, s",
          description: "Fractile 5 % d'une distribution normale de résultats.",
          variables: [
            { symbol: 'f_{cm}', name: 'Moyenne', unit: '\\text{MPa}', role: 'Moyenne d\'un grand nombre de résultats.', category: 'Statistique' },
            { symbol: 's', name: 'Écart-type', unit: '\\text{MPa}', role: 'Dispersion des résultats (souvent 3 à 5 MPa).', category: 'Statistique' },
          ],
        },
        {
          name: "Masse volumique sèche et taux de compactage",
          latex: "\\rho_d = \\frac{\\rho_h}{1 + w} \\qquad q = \\frac{\\rho_d}{\\rho_{d,OPN}}",
          description: "On compare la densité sèche en place à celle de l'optimum Proctor normal.",
          variables: [
            { symbol: '\\rho_d', name: 'Masse volumique sèche', unit: '\\text{t/m}^3', role: 'Masse de sol sec par volume.', category: 'Résultat' },
            { symbol: '\\rho_h', name: 'Masse volumique humide', unit: '\\text{t/m}^3', role: 'Mesurée en place (gammadensimètre, densitomètre).', category: 'Mesure' },
            { symbol: 'w', name: 'Teneur en eau', unit: '-', role: 'Masse d\'eau / masse de sol sec (8 % → 0,08).', category: 'Mesure' },
            { symbol: 'q', name: 'Taux de compactage', unit: '\\%', role: 'Objectif usuel ≥ 95 % de l\'OPN en remblai, ≥ 98,5 % en couche de forme.', category: 'Résultat' },
          ],
        },
        {
          name: "Vitesse de propagation des ultrasons",
          latex: "V = \\frac{L}{t}",
          description: "Plus le béton est compact et homogène, plus les ultrasons le traversent vite.",
          variables: [
            { symbol: 'V', name: 'Vitesse ultrasonore', unit: '\\text{m/s}', role: '> 4 500 excellent ; 3 500 à 4 500 bon ; 3 000 à 3 500 douteux ; < 3 000 médiocre.', category: 'Résultat' },
            { symbol: 'L', name: 'Distance entre transducteurs', unit: '\\text{m}', role: 'Épaisseur traversée en transmission directe.', category: 'Géométrie' },
            { symbol: 't', name: 'Temps de propagation', unit: '\\text{s}', role: 'Mesuré par l\'appareil (en µs).', category: 'Mesure' },
          ],
          ruleOfThumb: "Les ultrasons comparent des zones entre elles ; pour une valeur de résistance, il faut un étalonnage par carottes.",
        },
      ],
    },

    {
      id: 6,
      key: 'stepbystep',
      title: "Calcul complet — Conformité d'un lot de béton C30/37",
      icon: '🔬',
      type: 'stepbystep',
      problem: "Trois cylindres 16 × 32 d'un lot de béton C30/37 (f_ck = 30 MPa) rompent à 34,6 MPa, 32,0 MPa et 37,3 MPa. Le lot est-il conforme (production initiale) ?",
      steps_demo: [
        { n: 1, text: "Calculer la moyenne : f_cm = (34,6 + 32,0 + 37,3) / 3 = 34,63 MPa." },
        { n: 2, text: "Critère 1 : f_cm ≥ f_ck + 4 = 34 MPa → 34,63 ≥ 34 : vérifié." },
        { n: 3, text: "Critère 2 : chaque résultat ≥ f_ck − 4 = 26 MPa → minimum 32,0 ≥ 26 : vérifié." },
        { n: 4, text: "Conclusion : le lot est conforme à la classe C30/37." },
        { n: 5, text: "Remarque : la marge sur la moyenne est faible (0,63 MPa) ; surveiller les lots suivants." },
        { n: 6, text: "Archiver le procès-verbal avec la référence du bon de livraison et la localisation du coulage." },
      ],
      result_latex: "f_{cm} = \\frac{34{,}6 + 32{,}0 + 37{,}3}{3} = 34{,}6 \\ge 34 \\quad \\checkmark \\qquad f_{ci,min} = 32{,}0 \\ge 26 \\quad \\checkmark",
    },

    {
      id: 7,
      key: 'units',
      title: "Valeurs de référence",
      icon: '📏',
      type: 'units',
      table: [
        { grandeur: "Classes d'affaissement", si: "S1 10–40 · S2 50–90 · S3 100–150 · S4 160–210 · S5 ≥ 220 mm", imperial: "0,4 à 8,7 in", conversion: "1 in = 25,4 mm" },
        { grandeur: "Section d'un cylindre 16 × 32", si: "20 106 mm²", imperial: "31,2 in²", conversion: "f_c = F / 20 106 (F en N, f_c en MPa)" },
        { grandeur: "Plate-forme routière", si: "PF2 : E_V2 ≥ 50 MPa · PF3 : E_V2 ≥ 120 MPa", imperial: "-", conversion: "Essai de plaque NF P 94-117-1" },
        { grandeur: "Ductilité des aciers B500B", si: "R_m/R_e ≥ 1,08 · A_gt ≥ 5 %", imperial: "-", conversion: "NF EN 1992-1-1, annexe C" },
        { grandeur: "Vitesse ultrasonore", si: "m/s", imperial: "ft/s", conversion: "1 m/s = 3,281 ft/s" },
      ],
      note: "Toujours noter la **norme d'essai** sur le procès-verbal : une résistance sur cube 15 × 15 n'est pas comparable à une résistance sur cylindre 16 × 32.",
    },

    {
      id: 8,
      key: 'hypotheses',
      title: "Conditions de validité des essais",
      icon: '📋',
      type: 'hypotheses',
      items: [
        { type: 'info', text: "Les éprouvettes doivent être confectionnées, conservées et transportées selon NF EN 12390-2, sinon le résultat ne représente pas le béton livré." },
        { type: 'info', text: "La résistance d'une carotte est généralement plus faible que celle d'une éprouvette normalisée du même béton : NF EN 13791 donne les règles d'interprétation." },
        { type: 'warning', text: "Un affaissement mesuré plus de 30 minutes après la livraison n'est plus représentatif." },
        { type: 'warning', text: "Le scléromètre ne mesure que la dureté de surface : un béton carbonaté donne des indices surestimés." },
        { type: 'tip', text: "Combinez CND et carottages : les CND localisent les zones faibles, les carottes chiffrent leur résistance." },
      ],
    },

    {
      id: 9,
      key: 'simple_examples',
      title: "Exemples guidés",
      icon: '✏️',
      type: 'examples_simple',
      examples: [
        {
          title: "Exemple 1 : écrasement d'un cylindre",
          given: "Cylindre 16 × 32 cm, charge de rupture F = 785 kN",
          find: "La résistance en compression",
          solution_latex: "A_c = \\frac{\\pi \\times 160^2}{4} = 20\\,106\\ \\text{mm}^2 \\qquad f_c = \\frac{785\\,000}{20\\,106} = 39{,}0\\ \\text{MPa}",
          result: "f_c = 39,0 MPa.",
        },
        {
          title: "Exemple 2 : taux de compactage",
          given: "En place : ρ_h = 2,10 t/m³, w = 8 % ; Proctor : ρ_d,OPN = 2,02 t/m³",
          find: "Le taux de compactage",
          solution_latex: "\\rho_d = \\frac{2{,}10}{1{,}08} = 1{,}944\\ \\text{t/m}^3 \\qquad q = \\frac{1{,}944}{2{,}02} = 96{,}3\\,\\%",
          result: "96,3 % : objectif de 95 % atteint pour un remblai.",
        },
        {
          title: "Exemple 3 : auscultation ultrasonore",
          given: "Poteau de 30 cm d'épaisseur, temps de propagation 70 µs",
          find: "La vitesse et la qualité du béton",
          solution_latex: "V = \\frac{0{,}30}{70 \\times 10^{-6}} = 4\\,286\\ \\text{m/s}",
          result: "4 286 m/s : béton de bonne qualité.",
        },
      ],
    },

    {
      id: 10,
      key: 'real_examples',
      title: "Exemple réel — Lot de béton non conforme sur un plancher",
      icon: '🏢',
      type: 'examples_real',
      diagramType: 'process_flow',
      examples: [
        {
          context: "Plancher haut de sous-sol, béton C30/37 prescrit",
          scenario: "Les éprouvettes d'un lot donnent 29,5 ; 31,0 et 27,0 MPa. La moyenne (29,2 MPa) est inférieure à f_ck + 4 = 34 MPa : le lot est non conforme. Des carottes et une auscultation sont réalisées, puis le bureau d'études recalcule le plancher avec la résistance réellement mesurée.",
          decomposition_latex: "f_{cm} = 29{,}2 < 34 \\ \\Rightarrow \\ \\text{non conforme} \\qquad f_{ck,is} \\ (\\text{carottes, NF EN 13791}) \\Rightarrow \\text{recalcul}",
          lesson: "Une non-conformité n'impose pas forcément une démolition : on mesure la résistance en place et on vérifie si l'ouvrage reste sûr. Le dossier (PV, carottes, note de calcul) est ensuite validé par le contrôleur technique.",
        },
      ],
    },

    {
      id: 11,
      key: 'diagrams',
      title: "Schéma de principe — La chaîne du contrôle d'un béton",
      icon: '📊',
      type: 'interactive_diagram',
      diagramType: 'process_flow',
      description: "De la commande au procès-verbal : chaque étape doit être tracée.",
      diagram_description: [
        "Commande : classe de résistance, classe d'exposition, consistance, Dmax",
        "Livraison : bon de livraison vérifié, heure de fabrication, essai d'affaissement",
        "Prélèvement : éprouvettes confectionnées et repérées selon NF EN 12390-2",
        "Conservation : cure normalisée jusqu'à 28 jours",
        "Essai : écrasement selon NF EN 12390-3, calcul de f_c",
        "Conformité : critères NF EN 206, procès-verbal et actions si non conforme",
      ],
    },

    {
      id: 12,
      key: 'mistakes',
      title: "Erreurs fréquentes",
      icon: '⛔',
      type: 'mistakes',
      items: [
        {
          mistake: "Laisser les éprouvettes au soleil sur le chantier pendant plusieurs jours",
          trap: "Une cure défectueuse fait chuter la résistance mesurée",
          fix: "Démouler à 24 h et conserver les éprouvettes dans l'eau à 20 °C jusqu'à l'essai.",
        },
        {
          mistake: "Comparer une résistance sur cube à une classe exprimée sur cylindre",
          trap: "C30/37 : 30 MPa sur cylindre, 37 MPa sur cube",
          fix: "Comparer chaque résultat à la valeur correspondant à la même forme d'éprouvette.",
        },
        {
          mistake: "Accepter une couche de forme sans essai de plaque",
          trap: "Se fier au seul aspect visuel du compactage",
          fix: "Exiger les essais de plaque et de densité prévus au marché avant de mettre en œuvre la couche suivante.",
        },
      ],
    },

    {
      id: 13,
      key: 'tips',
      title: "Astuces du laboratoire de chantier",
      icon: '💡',
      type: 'tips',
      tips: [
        "Repérez chaque éprouvette avec un numéro unique relié au plan de coulage : en cas de non-conformité, vous savez quel élément investiguer.",
        "Faites l'essai d'affaissement dès l'arrivée de la toupie, avant tout ajout d'eau ou d'adjuvant.",
        "Pour les sols, mesurez la teneur en eau le jour même du compactage : elle explique souvent un mauvais taux de compactage.",
        "Gardez une éprouvette de réserve par prélèvement pour un éventuel contre-essai à 56 jours.",
      ],
    },

    {
      id: 14,
      key: 'norms',
      title: "Normes d'essai",
      icon: '📜',
      type: 'norms',
      norms: [
        { code: "NF EN 206 + A2 / NF EN 206/CN", description: "Béton : spécification, performances, production et critères de conformité." },
        { code: "NF EN 12350-2 / NF EN 12390-3", description: "Essai d'affaissement sur béton frais ; résistance en compression des éprouvettes." },
        { code: "NF EN 13791 / NF EN 12504-1, -2, -4", description: "Évaluation de la résistance en place ; carottes, scléromètre, ultrasons." },
        { code: "NF P 94-093 / NF P 94-117-1", description: "Essai Proctor normal et modifié ; essai de plaque (module E_V2)." },
        { code: "NF EN ISO 6892-1 / NF A 35-080-1", description: "Essai de traction des métaux ; aciers pour béton armé B500." },
      ],
    },

    {
      id: 15,
      key: 'exercises',
      title: "Exercices d'application",
      icon: '✍️',
      type: 'exercises',
      exercises: [
        {
          id: 'ex_qua_1',
          number: 1,
          difficulty: 'Facile',
          text: "Un cylindre 16 × 32 rompt sous 610 kN. Calculer sa résistance en compression.",
          hint: "A = 20 106 mm².",
          answer_latex: "f_c = \\frac{610\\,000}{20\\,106} = 30{,}3\\ \\text{MPa}",
          answer_text: "f_c = 30,3 MPa.",
        },
        {
          id: 'ex_qua_2',
          number: 2,
          difficulty: 'Moyen',
          text: "Pour un C25/30, trois résultats donnent 31,0 ; 28,0 et 33,0 MPa. Le lot est-il conforme (production initiale) ?",
          hint: "f_cm ≥ 29 MPa et chaque résultat ≥ 21 MPa.",
          answer_latex: "f_{cm} = \\frac{31 + 28 + 33}{3} = 30{,}7 \\ge 29 \\quad \\checkmark \\qquad f_{ci,min} = 28 \\ge 21 \\quad \\checkmark",
          answer_text: "Conforme.",
        },
        {
          id: 'ex_qua_3',
          number: 3,
          difficulty: 'Difficile',
          text: "Sur 20 résultats d'un même béton, la moyenne est de 38,0 MPa et l'écart-type de 3,5 MPa. Estimer la résistance caractéristique et la classe atteinte. Un acier présente R_e = 540 MPa et R_m = 620 MPa : respecte-t-il le critère de ductilité B ?",
          hint: "f_ck ≈ f_cm − 1,645 s ; k = R_m / R_e ≥ 1,08.",
          answer_latex: "f_{ck} \\approx 38{,}0 - 1{,}645 \\times 3{,}5 = 32{,}2\\ \\text{MPa} \\qquad k = \\frac{620}{540} = 1{,}15 \\ge 1{,}08",
          answer_text: "f_ck ≈ 32,2 MPa (au moins C30/37) ; l'acier respecte le critère de ductilité B.",
        },
      ],
    },

    {
      id: 16,
      key: 'corrections',
      title: "Corrections détaillées",
      icon: '✅',
      type: 'corrections',
      note: "Les corrections sont sous chaque exercice. Pour l'exercice 3, notez qu'un critère A_gt ≥ 5 % doit aussi être vérifié pour conclure sur la classe de ductilité.",
    },

    {
      id: 17,
      key: 'quiz',
      title: "Quiz — Contrôle qualité",
      icon: '🎯',
      type: 'quiz',
      questions: [
        {
          id: 'q_qua_1',
          question: "Un affaissement de 120 mm correspond à quelle classe ?",
          options: [
            { id: 'a', text: 'S2' },
            { id: 'b', text: 'S3' },
            { id: 'c', text: 'S4' },
          ],
          correct: 'b',
          explanation: "S3 couvre 100 à 150 mm.",
        },
        {
          id: 'q_qua_2',
          question: "Pour un C30/37 en production initiale, quelle moyenne minimale faut-il ?",
          options: [
            { id: 'a', text: '30 MPa' },
            { id: 'b', text: '34 MPa' },
            { id: 'c', text: '37 MPa' },
          ],
          correct: 'b',
          explanation: "f_cm ≥ f_ck + 4 = 30 + 4 = 34 MPa (sur cylindres).",
        },
        {
          id: 'q_qua_3',
          question: "Quel essai mesure la portance d'une couche de forme ?",
          options: [
            { id: 'a', text: "L'essai de plaque (E_V2)" },
            { id: 'b', text: "L'essai d'affaissement" },
            { id: 'c', text: 'Le scléromètre' },
          ],
          correct: 'a',
          explanation: "Le module E_V2 de l'essai de plaque classe la plate-forme (PF2 ≥ 50 MPa, PF3 ≥ 120 MPa).",
        },
      ],
    },

    {
      id: 18,
      key: 'exam_questions',
      title: "Questions d'examen",
      icon: '🎓',
      type: 'exam',
      questions: [
        "Présentez l'organisation du contrôle qualité d'un chantier (PAQ, contrôles intérieur et extérieur, points d'arrêt).",
        "Expliquez les critères de conformité de la résistance du béton selon NF EN 206 et la notion de résistance caractéristique.",
        "Comparez les contrôles non destructifs du béton (scléromètre, ultrasons, pachomètre) : principe, intérêt et limites.",
      ],
    },

    {
      id: 19,
      key: 'interview_questions',
      title: "Questions d'entretien",
      icon: '💼',
      type: 'interview',
      questions: [
        {
          question: "Les résultats à 28 jours d'un voile sont non conformes. Quelle est votre démarche ?",
          answer_hint: "J'informe la maîtrise d'œuvre, je vérifie la traçabilité des éprouvettes, je fais réaliser une auscultation et des carottages, puis je fais vérifier l'élément par le bureau d'études avec la résistance en place ; selon le résultat : acceptation, renforcement ou reprise.",
        },
        {
          question: "Qu'est-ce qu'un point d'arrêt ?",
          answer_hint: "Une étape qui ne peut être franchie sans l'accord écrit de la personne désignée, par exemple la réception des armatures avant bétonnage ou celle d'un fond de fouille avant coulage du béton de propreté.",
        },
      ],
    },

    {
      id: 20,
      key: 'practical_case',
      title: "Cas pratique — Une zone douteuse dans un voile",
      icon: '🔧',
      type: 'practical',
      diagramType: 'process_flow',
      scenario: "Voile de 20 cm présentant un nid de cailloux après décoffrage ; le reste du voile semble sain.",
      description: "Une auscultation ultrasonore donne 4 100 m/s en zone saine et 3 150 m/s dans la zone suspecte. Il faut qualifier le défaut et décider de la suite.",
      resolution_latex_1: "V_{sain} = 4\\,100\\ \\text{m/s} \\ (\\text{bon}) \\qquad V_{défaut} = 3\\,150\\ \\text{m/s} \\ (\\text{douteux})",
      resolution_latex_2: "\\frac{V_{défaut}}{V_{sain}} = \\frac{3\\,150}{4\\,100} = 0{,}77 \\ \\Rightarrow \\ \\text{défaut de compacité localisé}",
      resolution_latex_3: "\\text{Carottage de contrôle} \\rightarrow \\text{purge de la zone} \\rightarrow \\text{mortier de réparation R4 (NF EN 1504-3)}",
      conclusion: "Défaut localisé de mise en place : purge et réparation structurale de la zone, sans reprise du voile entier.",
    },

    {
      id: 21,
      key: 'summary',
      title: "Résumé",
      icon: '📋',
      type: 'summary',
      content: `### Le contrôle qualité en 6 points
1. **PAQ, contrôles intérieur et extérieur, points d'arrêt** : contrôler avant de recouvrir.
2. **Béton frais** : affaissement S1 à S5, à mesurer dès la livraison.
3. **Béton durci** : $f_c = F/A_c$, conformité $f_{cm} \\ge f_{ck} + 4$ et $f_{ci} \\ge f_{ck} - 4$.
4. **Sols** : taux de compactage $q = \\rho_d/\\rho_{d,OPN}$ et essais de plaque.
5. **Aciers** : B500B, $R_m/R_e \\ge 1{,}08$, $A_{gt} \\ge 5\\,\\%$.
6. **CND et carottes** : localiser puis chiffrer.`,
    },

    {
      id: 22,
      key: 'key_points',
      title: "Points clés à retenir",
      icon: '⭐',
      type: 'keypoints',
      points: [
        "Cylindre 16 × 32 : A = 20 106 mm²",
        "Conformité : f_cm ≥ f_ck + 4 et f_ci ≥ f_ck − 4",
        "f_ck ≈ f_cm − 1,645 s",
        "ρ_d = ρ_h / (1 + w)",
        "Ultrasons : V > 3 500 m/s = béton de qualité correcte",
      ],
    },

    {
      id: 23,
      key: 'self_assessment',
      title: "Auto-évaluation",
      icon: '🏆',
      type: 'self_assessment',
      description: "Cochez les compétences acquises :",
      objectives: [
        "Je sais organiser les contrôles d'un chantier et ses points d'arrêt",
        "Je sais calculer une résistance et vérifier la conformité d'un lot",
        "Je sais calculer un taux de compactage",
        "Je connais les CND du béton et leurs limites",
        "J'ai réussi les trois exercices",
      ],
    },
  ],

  quickQuiz: {
    question: "Trois éprouvettes d'un C25/30 donnent 30, 29 et 31 MPa. Le lot est-il conforme ?",
    options: [
      { id: 'a', label: 'A) Oui : moyenne 30 ≥ 29 et minimum 29 ≥ 21' },
      { id: 'b', label: 'B) Non : la moyenne doit dépasser 30' },
      { id: 'c', label: 'C) Non : chaque résultat doit dépasser 29' },
    ],
    correct: 'a',
    explanation: "Production initiale : f_cm ≥ f_ck + 4 = 29 MPa et chaque f_ci ≥ f_ck − 4 = 21 MPa. Les deux critères sont vérifiés.",
  },
};
