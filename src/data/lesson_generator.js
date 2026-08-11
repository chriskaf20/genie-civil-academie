import { lesson_maths_trig } from './lesson_maths.js';
import { lesson_rdm } from './lesson_rdm.js';
import { lesson_beton_arme } from './lesson_beton_arme.js';
import { lesson_geotechnique } from './lesson_geotechnique.js';
import { lesson_mecanique } from './lesson_mecanique.js';
import { lesson_hydraulique } from './lesson_hydraulique.js';
import { lesson_routes } from './lesson_routes.js';
import { lesson_ponts } from './lesson_ponts.js';
import { lesson_tunnels } from './lesson_tunnels.js';
import { lesson_barrages } from './lesson_barrages.js';
import { lesson_aeroports } from './lesson_aeroports.js';
import { lesson_ports } from './lesson_ports.js';
import { lesson_ferroviaire } from './lesson_ferroviaire.js';
import { lesson_topographie } from './lesson_topographie.js';
import { lesson_materiaux } from './lesson_materiaux.js';
import { lesson_dessin } from './lesson_dessin.js';
import { lesson_bim } from './lesson_bim.js';
import { lesson_metal } from './lesson_metal.js';
import { lesson_precontrainte } from './lesson_precontrainte.js';
import { lesson_bois } from './lesson_bois.js';

export function getLessonForModule(module) {
  if (!module) return lesson_maths_trig;
  if (module.slug === 'maths') return lesson_maths_trig;
  if (module.slug === 'mecanique') return lesson_mecanique;
  if (module.slug === 'rdm') return lesson_rdm;
  if (module.slug === 'beton-arme') return lesson_beton_arme;
  if (module.slug === 'geotechnique') return lesson_geotechnique;
  if (module.slug === 'hydraulique') return lesson_hydraulique;
  if (module.slug === 'routes') return lesson_routes;
  if (module.slug === 'ponts') return lesson_ponts;
  if (module.slug === 'tunnels') return lesson_tunnels;
  if (module.slug === 'barrages') return lesson_barrages;
  if (module.slug === 'aeroports') return lesson_aeroports;
  if (module.slug === 'ports') return lesson_ports;
  if (module.slug === 'ferroviaire') return lesson_ferroviaire;
  if (module.slug === 'topographie') return lesson_topographie;
  if (module.slug === 'materiaux') return lesson_materiaux;
  if (module.slug === 'dessin') return lesson_dessin;
  if (module.slug === 'bim') return lesson_bim;
  if (module.slug === 'metal') return lesson_metal;
  if (module.slug === 'precontrainte') return lesson_precontrainte;
  if (module.slug === 'bois') return lesson_bois;


  const diagramMap = {
    physique: 'force_decomposition',
    mecanique: 'force_decomposition',
    rdm: 'force_decomposition',
    metal: 'force_decomposition',
    structures: 'rebar_beam',
    'beton-arme': 'rebar_beam',
    'beton-precontraint': 'rebar_beam',
    bois: 'rebar_beam',
    geotechnique: 'soil_profile',
    barrages: 'soil_profile',
    tunnels: 'soil_profile',
    routes: 'road_profile',
    aeroports: 'road_profile',
    ferroviaire: 'road_profile',
    ponts: 'bridge_structure',
    ports: 'bridge_structure',
    hydraulique: 'bridge_structure',
    topographie: 'trig_interactive',
  };

  const diagramType = diagramMap[module.slug] || 'force_decomposition';

  return {
    moduleId: module.id,
    slug: module.slug,
    lessonIndex: 1,
    title: module.lessons ? module.lessons[0] : module.title,
    subtitle: `Module ${module.id} — ${module.title}`,
    level: module.level || 'Intermédiaire',
    duration: module.duration || '40h',
    diagramType: diagramType,
    tags: [module.category, module.level, module.title.split(' ')[0]],

    steps: [
      {
        id: 1,
        key: 'definition',
        title: 'Définition simple',
        icon: '📖',
        type: 'definition',
        fr: module.title,
        en: `${module.title} (Engineering Concept)`,
        metier: `Maîtrisé par les ingénieurs d'études et conducteurs de travaux dans la catégorie ${module.category}.`,
        content: `Le module **${module.title}** constitue un pilier fondamental du génie civil moderne. Il englobe l'étude théorique, le dimensionnement réglementaire et les méthodes d'exécution sur chantier.

### Champ d'application principal :
- **Conception & Calcul** : Analyse des sollicitations et dimensionnement selon les normes européennes et internationales.
- **Sécurité & Durabilité** : Prévention des défaillances structurales et optimisation du cycle de vie.
- **Réalisation terrain** : Gestion des interfaces de chantier et contrôle qualité des matériaux.`,
      },
      {
        id: 2,
        key: 'importance',
        title: 'Pourquoi c\'est important en ingénierie',
        icon: '⚠️',
        type: 'importance',
        content: `La maîtrise de **${module.title}** est indispensable pour tout ingénieur civil.

- **Intégrité de l'ouvrage** : Garantit la stabilité physique et la résistance aux charges climatiques, sismiques et d'exploitation.
- **Conformité réglementaire** : Respect strict des Eurocodes, normes ISO et exigences environnementales.
- **Optimisation économique** : Réduction des quantités de matériaux sans compromettre la sécurité.

> 💡 **Statistique de bureau d'études** : Plus de 85% des pathologies d'ouvrages découlent d'un manque de rigueur dans l'application initiale de ces principes.`,
      },
      {
        id: 3,
        key: 'applications',
        title: 'Applications réelles sur le terrain',
        icon: '🏗️',
        type: 'applications',
        examples: [
          { context: 'Grandes Infrastructures', text: `Application directe dans les projets d'envergure nationale liés à ${module.title.toLowerCase()}.` },
          { context: 'Bâtiment & Structures', text: 'Dimensionnement des éléments porteurs (poutres, voiles, dalles, fondations).' },
          { context: 'Expertise & Diagnostic', text: 'Inspection périodique et évaluation de la capacité résiduelle des ouvrages anciens.' },
          { context: 'Gestion de Projet', text: 'Rédaction du CCTP, contrôle de conformité des plans et réception des travaux.' },
        ],
      },
      {
        id: 4,
        key: 'theory',
        title: 'Bases théoriques',
        icon: '📐',
        type: 'theory',
        diagramType: diagramType,
        content: `### Principes théoriques majeurs — ${module.title}

L'analyse repose sur la modélisation mathématique et physique du comportement des structures et des matériaux.

1. **Équilibre des forces et moments** : $\\sum \\vec{F} = \\vec{0}$ et $\\sum \\vec{M} = \\vec{0}$.
2. **Loi de comportement élastique/plastique** : $\\sigma = E \\cdot \\varepsilon$.
3. **Conditions aux limites** : Appuis simples, encastrements et articulations.`,
      },
      {
        id: 5,
        key: 'formulas',
        title: 'Formules et équations mathématiques',
        icon: '🔢',
        type: 'formulas',
        diagramType: diagramType,
        formulas: [
          {
            name: 'Équation fondamentale d\'équilibre',
            latex: '\\sigma = \\frac{N}{A} + \\frac{M \\cdot y}{I}',
            description: 'Contrainte normale totale combinant effort axial et moment fléchissant'
          },
          {
            name: 'Vérification à l\'État Limite Ultime (ELU)',
            latex: 'S_{ed} \\le R_{cd} \\quad \\Leftrightarrow \\quad \\gamma_G G + \\gamma_Q Q \\le \\frac{f_k}{\\gamma_M}',
            description: 'Condition de sécurité réglementaire Eurocode'
          },
          {
            name: 'Critère de rigidité & flèche',
            latex: '\\delta_{max} = \\frac{5 q L^4}{384 E I} \\le \\frac{L}{250}',
            description: 'Limitâtion de la déformation maximale en service (ELS)'
          },
        ],
      },
      {
        id: 6,
        key: 'stepbystep',
        title: 'Démonstrations pas-à-pas',
        icon: '🔬',
        type: 'stepbystep',
        problem: `Calculer la capacité portante de sécurité pour un élément soumis à une combinaison de charges de calcul dans le cadre du module ${module.title}.`,
        steps_demo: [
          { n: 1, text: 'Identifier les charges permanentes G et variables Q sollicitant l\'ouvrage' },
          { n: 2, text: 'Calculer la combinaison ELU : Sed = 1.35 G + 1.50 Q' },
          { n: 3, text: 'Déterminer la section et l\'inertie I de l\'élément de structure' },
          { n: 4, text: 'Calculer la contrainte maximale σ_max = Sed / W_élastique' },
          { n: 5, text: 'Comparer σ_max à la résistance de calcul f_yd = f_yk / 1.15' },
          { n: 6, text: 'Valider le ratio de travail : R = σ_max / f_yd ≤ 1.0 (Conforme ✓)' },
        ],
        result_latex: 'R_{travail} = \\frac{\\sigma_{max}}{f_{yd}} = 0{,}78 \\le 1{,}00 \\quad \\checkmark \\text{ (Conforme)}',
      },
      {
        id: 7,
        key: 'units',
        title: 'Unités & Systèmes de mesure',
        icon: '📏',
        type: 'units',
        table: [
          { grandeur: 'Contrainte / Pression', si: 'MPa (N/mm²)', imperial: 'psi / ksi', conversion: '1 MPa = 145,04 psi' },
          { grandeur: 'Moment de flexion', si: 'kN·m', imperial: 'kip·ft', conversion: '1 kN·m = 0,7375 kip·ft' },
          { grandeur: 'Effort tranchant', si: 'kN', imperial: 'kips', conversion: '1 kN = 224,8 lbf' },
          { grandeur: 'Moment d\'inertie', si: 'cm⁴', imperial: 'in⁴', conversion: '1 cm⁴ = 0,0240 in⁴' },
        ],
        note: 'Toujours vérifier l\'homogénéité des unités (convertir les mètres en millimètres pour accorder MPa et N/mm²).',
      },
      {
        id: 8,
        key: 'hypotheses',
        title: 'Hypothèses d\'application',
        icon: '📋',
        type: 'hypotheses',
        items: [
          { type: 'warning', text: 'Les formules ne s\'appliquent que dans le domaine des petites déformations' },
          { type: 'info', text: 'Hypothèse de Bernoulli : les sections droites restent planes après déformation' },
          { type: 'tip', text: 'Appliquer systématiquement les coefficients partiels de sécurité γ_G = 1,35 et γ_Q = 1,50' },
          { type: 'warning', text: 'Ne pas extrapoler les résultats en dehors de la plage de température réglementaire' },
        ],
      },
      {
        id: 9,
        key: 'simple_examples',
        title: 'Exemples simples guidés',
        icon: '✏️',
        type: 'examples_simple',
        examples: [
          {
            title: 'Exemple 1 : Vérification de section',
            given: 'Effort N = 450 kN, Section A = 250 cm²',
            find: 'Contrainte normale σ et taux de travail',
            solution_latex: '\\sigma = \\frac{450 \\times 10^3}{250 \\times 10^2} = 18{,}0 \\text{ MPa} \\le 235 \\text{ MPa}',
            result: 'σ = 18.0 MPa — Largement conforme',
          },
          {
            title: 'Exemple 2 : Calcul de déformation',
            given: 'Longueur L = 6 m, E = 210 GPa, σ = 150 MPa',
            find: 'Allongement absolu ΔL',
            solution_latex: '\\Delta L = \\frac{\\sigma \\cdot L}{E} = \\frac{150 \\times 6000}{210000} = 4{,}28 \\text{ mm}',
            result: 'ΔL = 4.28 mm',
          },
        ],
      },
      {
        id: 10,
        key: 'real_examples',
        title: 'Exemples réels de bureau d\'études & chantier',
        icon: '🏢',
        type: 'examples_real',
        diagramType: diagramType,
        examples: [
          {
            context: 'Bureau d\'études d\'Exécution',
            scenario: `Dimensionnement complet d'un élément d'ouvrage soumis aux sollicitations du module ${module.title}.`,
            decomposition_latex: 'M_{ed} = 150 \\text{ kN·m} \\quad \\Rightarrow \\quad A_s = \\frac{M_{ed}}{0.9 \\cdot d \\cdot f_{yd}} = 8{,}42 \\text{ cm}^2',
            lesson: 'Placer 3 HA 20 (9.42 cm²) en zone tendue pour satisfaire la condition d\'armatures minimales.',
          },
        ],
      },
      {
        id: 11,
        key: 'diagrams',
        title: 'Schémas techniques & diagrammes explicatifs',
        icon: '📊',
        type: 'interactive_diagram',
        diagramType: diagramType,
        description: `Visualisez ci-dessous le schéma technique avec cotations précises et légende détaillée pour le module ${module.title}.`,
        diagram_description: [
          'Diagramme vectoriel coté avec cotes normalisées en mm',
          'Légende bilingue des composantes et des sollicitations',
          'Bascule entre la vue de structure et le diagramme de contraintes',
        ],
      },
      {
        id: 12,
        key: 'mistakes',
        title: 'Erreurs fréquentes des débutants & pièges à éviter',
        icon: '⛔',
        type: 'mistakes',
        items: [
          {
            mistake: 'Oublier de pondérer les charges permanentes et variables',
            trap: 'Calculer à l\'ELU avec G + Q au lieu de 1.35 G + 1.50 Q',
            fix: 'Appliquer toujours la combinaison fondamentale Eurocode 0 (Équation 6.10)',
          },
          {
            mistake: 'Inverser les unités lors du calcul de contrainte',
            trap: 'Diviser des kN par des m² et obtenir des Pa au lieu de kPa',
            fix: 'Convertir directement : Force en N, Section en mm² → Contrainte en MPa',
          },
        ],
      },
      {
        id: 13,
        key: 'tips',
        title: 'Astuces et secrets professionnels du terrain',
        icon: '💡',
        type: 'tips',
        tips: [
          'Faites toujours une vérification d\'ordre de grandeur manuelle avant de valider un calcul informatique (Robot, SAP2000)',
          'Utilisez les ratios de ferraillage usuels (ex: 80 à 120 kg de ferraillage par m³ de béton pour du bâtiment courant)',
          'Gardez un carnet de chantier avec les schémas de ferraillage standards et les longueurs d\'ancrage (40·Φ)',
        ],
      },
      {
        id: 14,
        key: 'norms',
        title: 'Normes & standards concernés',
        icon: '📜',
        type: 'norms',
        norms: [
          { code: 'Eurocode 0 (EN 1990)', description: 'Bases de calcul des structures et principes de sécurité' },
          { code: 'Eurocode 1 (EN 1991)', description: 'Actions sur les structures (poids propre, charges d\'exploitation, vent, neige)' },
          { code: 'Norme NF EN ISO 9001', description: 'Système de management de la qualité et traçabilité des études' },
        ],
      },
      {
        id: 15,
        key: 'exercises',
        title: 'Exercices d\'application directe',
        icon: '✍️',
        type: 'exercises',
        exercises: [
          {
            id: 'ex1',
            number: 1,
            difficulty: 'Facile',
            text: `Calculer la contrainte normale σ subie par un poteau de section 30×30 cm soumis à un effort axial de compression N = 900 kN.`,
            hint: 'Convertir N en N (900 000 N) et la section en mm² (90 000 mm²).',
            answer_latex: '\\sigma = \\frac{900\\,000}{90\\,000} = 10{,}0 \\text{ MPa}',
            answer_text: 'σ = 10.0 MPa',
          },
          {
            id: 'ex2',
            number: 2,
            difficulty: 'Moyen',
            text: 'Déterminer le moment fléchissant maximal M_max à mi-travée d\'une poutre de 6 m de portée supportant une charge uniforme q = 20 kN/m.',
            hint: 'M_max = q · L² / 8',
            answer_latex: 'M_{max} = \\frac{20 \\times 6^2}{8} = 90{,}0 \\text{ kN·m}',
            answer_text: 'M_max = 90.0 kN·m',
          },
        ],
      },
      {
        id: 16,
        key: 'corrections',
        title: 'Corrections détaillées pas-à-pas',
        icon: '✅',
        type: 'corrections',
        note: 'Les corrections complètes sont disponibles directement sous chaque exercice ci-dessus en cliquant sur "Voir la correction".',
      },
      {
        id: 17,
        key: 'quiz',
        title: 'Quiz d\'évaluation rapide',
        icon: '🎯',
        type: 'quiz',
        questions: [
          {
            id: 'q1',
            question: `Dans le cadre du module ${module.title}, quel coefficient de sécurité applique-t-on aux charges variables Q à l'ELU ?`,
            options: [
              { id: 'a', text: '1,00' },
              { id: 'b', text: '1,35' },
              { id: 'c', text: '1,50' },
              { id: 'd', text: '2,00' },
            ],
            correct: 'c',
            explanation: 'Selon l\'Eurocode 0, le coefficient γ_Q appliqué aux actions variables défavorables est 1.50.',
          },
          {
            id: 'q2',
            question: 'Quelle est l\'unité SI équivalente au Megapascal (1 MPa) ?',
            options: [
              { id: 'a', text: '1 N/m²' },
              { id: 'b', text: '1 N/mm²' },
              { id: 'c', text: '100 kN/m²' },
              { id: 'd', text: '10 bar' },
            ],
            correct: 'b',
            explanation: '1 MPa = 10^6 N/m² = 1 N/mm².',
          },
        ],
      },
      {
        id: 18,
        key: 'exam_questions',
        title: 'Questions d\'examen universitaire',
        icon: '🎓',
        type: 'exam',
        questions: [
          `Déduisez la relation théorique permettant de dimensionner une structure dans le cadre du module ${module.title}.`,
          'Comparez la vérification à l\'État Limite Ultime (ELU) et à l\'État Limite de Service (ELS). Quels sont les critères associés ?',
        ],
      },
      {
        id: 19,
        key: 'interview_questions',
        title: 'Questions d\'entretien d\'embauche technique',
        icon: '💼',
        type: 'interview',
        questions: [
          {
            question: `Comment expliquez-vous le rôle des armatures de cisaillement (étriers) dans une poutre à un jeune ingénieur ?`,
            answer_hint: 'Elles cousent les fissures de traction diagonale inclinées à 45° provoquées par l\'effort tranchant V.',
          },
        ],
      },
      {
        id: 20,
        key: 'practical_case',
        title: 'Cas pratique professionnel — Scénario réel',
        icon: '🔧',
        type: 'practical',
        scenario: `Étude de cas d'ingénierie — ${module.title}`,
        description: `**Mise en situation** : Vous êtes ingénieur responsable du contrôle technique sur un projet d'infrastructure. Vous devez vérifier le dimensionnement d'un élément critique.`,
        resolution_latex_1: 'S_{ed} = 1.35 \\times 120 + 1.50 \\times 80 = 282 \\text{ kN}',
        resolution_latex_2: '\\sigma_{calcul} = \\frac{282 \\times 10^3}{18000} = 15{,}67 \\text{ MPa}',
        resolution_latex_3: 'R_{securité} = \\frac{15.67}{20.00} = 0{,}783 \\le 1{,}000 \\quad \\checkmark \\text{ (Conforme)}',
        conclusion: 'Le dimensionnement est conforme aux exigences de l\'Eurocode.',
      },
      {
        id: 21,
        key: 'summary',
        title: 'Résumé exécutif',
        icon: '📋',
        type: 'summary',
        content: `Ce module a couvert l'ensemble des fondements théoriques, réglementaires et pratiques relatifs à **${module.title}**.

La maîtrise de ces concepts permet d'assurer la sécurité, l'élégance et la pérennité des ouvrages de génie civil.`,
      },
      {
        id: 22,
        key: 'key_points',
        title: 'Points clés à retenir',
        icon: '⭐',
        type: 'keypoints',
        points: [
          'Toujours vérifier l\'équilibre statique ∑F = 0 et ∑M = 0',
          'Vérifier séparément l\'ELU (résistance) et l\'ELS (déformations/fissuration)',
          'Utiliser des unités cohérentes : N et mm pour obtenir des MPa (N/mm²)',
          'Consulter les diagrammes et cotations techniques pour valider le ferraillage/géométrie',
        ],
      },
      {
        id: 23,
        key: 'self_assessment',
        title: 'Module de vérification de la compréhension',
        icon: '🏆',
        type: 'self_assessment',
        description: 'Évaluez votre niveau de maîtrise :',
        objectives: [
          'Je comprends les concepts théoriques fondamentaux du module',
          'Je sais appliquer les équations de dimensionnement avec KaTeX',
          'Je sais lire et interpréter les schémas techniques et diagrammes',
          'J\'ai obtenu au moins 80% au quiz d\'évaluation',
        ],
      },
    ],

    quickQuiz: {
      question: `Quelle est l'exigence principale dans le module ${module.title} ?`,
      options: [
        { id: 'elu', label: 'A) Respect des critères ELU (γG=1.35, γQ=1.50)' },
        { id: 'els', label: 'B) Respect des critères ELS (flèches et ouvertures de fissures)' },
        { id: 'both', label: 'C) Respect simultané des ELU et ELS' },
      ],
      correct: 'both',
      explanation: 'Toute structure en Génie Civil doit impérativement être vérifiée à l\'ELU (sécurité ultime) ET à l\'ELS (confort et durabilité).',
    },
  };
}
