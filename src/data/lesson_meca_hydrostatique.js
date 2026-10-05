// ── Lesson: Mécanique des fluides — hydrostatique — Module 6 ──────────────────
import { buildLesson } from './build_lesson.js';

export const lesson_meca_hydrostatique = buildLesson({
  moduleId: 6,
  slug: 'meca_hydrostatique',
  lessonIndex: 2,
  title: "Hydrostatique : Pression, Poussée sur les Parois, Sous-pressions & Flottabilité",
  subtitle: 'Module 06 — Mécanique des structures & des fluides',
  level: 'Intermédiaire',
  duration: '10h',
  diagramType: 'soil_profile',
  tags: ['Mécanique des fluides', 'Hydrostatique', 'Pression', 'Poussée', 'Centre de poussée', 'Archimède', 'Sous-pression'],
}, {
  definition: {
    title: "Définition — Les efforts de l'eau au repos",
    fr: 'Hydrostatique (statique des fluides)',
    en: 'Hydrostatics',
    metier: "Utilisée pour les murs de réservoirs, les bassins, les cuvelages, les vannes, les barrages, les batardeaux, les caissons flottants et les radiers sous nappe.",
    content: `L'**hydrostatique** étudie les fluides au repos. Elle donne les efforts que l'eau exerce sur les ouvrages qui la retiennent ou qu'elle entoure.

### Trois idées fondamentales
1. La pression augmente **linéairement avec la profondeur** : environ 10 kPa (0,1 bar) par mètre d'eau.
2. La pression agit **perpendiculairement** à toute paroi et ne dépend pas de l'orientation de la surface.
3. Un corps immergé subit une poussée verticale égale au **poids du volume d'eau déplacé** (Archimède).

> 💡 Une cuve de 3 m de haut supporte en pied une pression de 29,4 kPa, soit environ 3 tonnes par m² de paroi.`,
  },
  importance: {
    content: `- **Réservoirs et bassins** : les parois doivent reprendre la poussée triangulaire de l'eau.
- **Sous-pressions** : un sous-sol sous la nappe peut être soulevé si son poids est insuffisant ; un bassin vide peut flotter.
- **Barrages et vannes** : l'effort et son point d'application gouvernent la stabilité et le dimensionnement des mécanismes.
- **Ouvrages maritimes** : les caissons préfabriqués sont remorqués en flottaison puis échoués.

> ⚠️ **À retenir** : un ouvrage enterré vide sous nappe est l'un des cas les plus dangereux (soulèvement d'une piscine ou d'une station de pompage).`,
  },
  applications: {
    examples: [
      ['Réservoir d’eau potable', 'Poussée hydrostatique sur les voiles et ferraillage en conséquence.'],
      ['Parking souterrain sous nappe', 'Vérification au soulèvement du radier et lestage ou ancrages.'],
      ['Vanne de canal', 'Effort sur la vanne et position du centre de poussée pour dimensionner le vérin.'],
      ['Caisson portuaire', 'Calcul du tirant d’eau et de la stabilité en flottaison.'],
      ['Batardeau', 'Poussée de l’eau sur les palplanches pendant les travaux en rivière.'],
    ],
  },
  theory: {
    title: 'Théorie — Pression, poussée et flottaison',
    content: `### 1. Loi fondamentale de l'hydrostatique
$$p = p_0 + \\rho \\, g \\, h$$
$p_0$ est la pression en surface (souvent la pression atmosphérique, que l'on prend égale à 0 en pression relative).

### 2. Poussée sur une paroi verticale rectangulaire
La pression est triangulaire, nulle en surface et égale à $\\rho g H$ au fond. La résultante par largeur $b$ vaut :
$$F = \\frac{1}{2} \\rho g H^2 b$$
appliquée au tiers de la hauteur à partir du fond.

### 3. Paroi plane quelconque
$$F = \\rho \\, g \\, h_G \\, A \\qquad y_P = y_G + \\frac{I_G}{y_G \\, A}$$
$h_G$ est la profondeur du centre de gravité de la surface, $y_P$ la position du **centre de poussée** (toujours plus bas que le centre de gravité).

### 4. Archimède et flottaison
$$F_A = \\rho \\, g \\, V_{immergé}$$
Un corps flotte si son poids est inférieur au poids d'eau qu'il déplacerait entièrement immergé. Le **tirant d'eau** d'un caisson s'obtient en égalant son poids et la poussée.

### 5. Sous-pressions
Sous un radier situé à une profondeur $h_w$ sous la nappe, la pression vaut $u = \\rho g h_w$. On vérifie que le poids (minoré) dépasse la sous-pression avec une marge.`,
  },
  formulas: {
    title: 'Formules essentielles — Hydrostatique',
    formulas: [
      {
        name: "Loi fondamentale de l'hydrostatique",
        latex: "p = p_0 + \\rho \\, g \\, h",
        description: 'Pression à la profondeur h dans un liquide au repos.',
        vars: [
          ['p', 'Pression', 'Pa', 'Pression absolue (ou relative si p₀ = 0).'],
          ['p_0', 'Pression en surface', 'Pa', 'Pression atmosphérique ≈ 101 325 Pa.'],
          ['\\rho', 'Masse volumique', 'kg/m³', 'Eau douce 1 000 ; eau de mer 1 025.'],
          ['g', 'Pesanteur', 'm/s²', '9,81 m/s².'],
          ['h', 'Profondeur', 'm', 'Sous la surface libre.'],
        ],
        rule: "Repère : 1 m d'eau ≈ 10 kPa = 0,1 bar.",
      },
      {
        name: 'Poussée sur une paroi verticale',
        latex: "F = \\frac{1}{2} \\rho g H^2 b \\qquad z_F = \\frac{H}{3}",
        description: 'Résultante de la pression triangulaire et hauteur de son point d’application au-dessus du fond.',
        vars: [
          ['F', 'Poussée résultante', 'N', 'Effort horizontal total.'],
          ['H', "Hauteur d'eau", 'm', 'Profondeur au pied de la paroi.'],
          ['b', 'Largeur de paroi', 'm', 'Souvent 1 m pour un calcul linéique.'],
          ['z_F', 'Hauteur du point d’application', 'm', 'Mesurée depuis le fond.'],
        ],
      },
      {
        name: 'Poussée et centre de poussée sur une paroi plane',
        latex: "F = \\rho \\, g \\, h_G \\, A \\qquad y_P = y_G + \\frac{I_G}{y_G \\, A}",
        description: 'y est mesuré dans le plan de la paroi depuis la surface libre.',
        vars: [
          ['h_G', 'Profondeur du centre de gravité', 'm', 'De la surface mouillée.'],
          ['A', 'Aire de la surface', 'm²', 'Surface mouillée.'],
          ['I_G', 'Inertie de la surface', 'm⁴', 'Par rapport à un axe horizontal passant par G.'],
          ['y_P', 'Position du centre de poussée', 'm', 'Toujours sous le centre de gravité.'],
        ],
      },
      {
        name: "Poussée d'Archimède",
        latex: "F_A = \\rho \\, g \\, V_{imm}",
        description: 'Force verticale ascendante appliquée au centre de carène.',
        vars: [
          ['F_A', "Poussée d'Archimède", 'N', 'Égale au poids du liquide déplacé.'],
          ['V_{imm}', 'Volume immergé', 'm³', 'Partie du corps sous la surface.'],
        ],
      },
      {
        name: 'Sécurité au soulèvement',
        latex: "F_s = \\frac{G}{U} = \\frac{G}{\\rho_w \\, g \\, h_w \\, A} \\ge 1{,}1",
        description: 'Ordre de grandeur de marge exigée (l’EC7 utilise des coefficients partiels UPL).',
        vars: [
          ['G', 'Poids stabilisant', 'kN', 'Poids propre de l’ouvrage et lest, sans charges d’exploitation.'],
          ['U', 'Sous-pression totale', 'kN', 'Pression sous le radier × surface.'],
          ['h_w', 'Hauteur d’eau sous la nappe', 'm', 'Niveau de nappe le plus haut prévisible.'],
        ],
      },
    ],
  },
  stepbystep: {
    title: 'Calcul complet — Mur de réservoir de 3 m',
    problem: "Un réservoir rectangulaire contient 3,0 m d'eau. Calculer, par mètre de paroi, la pression au fond, la poussée, son point d'application et le moment d'encastrement en pied du mur.",
    steps_demo: [
      { n: 1, text: "Pression au fond : p = 1 000 × 9,81 × 3,0 = 29 430 Pa = 29,4 kPa." },
      { n: 2, text: "Poussée : F = ½ × 29,4 × 3,0 = 44,1 kN par mètre de paroi." },
      { n: 3, text: "Point d'application : à H/3 = 1,0 m au-dessus du fond." },
      { n: 4, text: "Moment en pied (paroi en console) : M = 44,1 × 1,0 = 44,1 kN·m/m." },
      { n: 5, text: "Moment ELU : avec γ = 1,35 (eau à niveau maîtrisé, selon l'annexe nationale), M_Ed = 59,5 kN·m/m pour le ferraillage." },
    ],
    result_latex: "p = 29{,}4\\ \\text{kPa} \\quad F = \\frac{1}{2} \\times 9{,}81 \\times 3^2 = 44{,}1\\ \\text{kN/m} \\quad M = 44{,}1 \\times 1{,}0 = 44{,}1\\ \\text{kN·m/m}",
  },
  units: {
    table: [
      ['Pression', 'Pa, kPa, bar', 'psi', '1 bar = 100 kPa = 14,5 psi ; 1 m d’eau ≈ 9,81 kPa'],
      ['Poids volumique de l’eau', 'kN/m³', 'pcf', '9,81 kN/m³ (douce) ; 10,05 kN/m³ (mer)'],
      ['Force', 'kN', 'kip', '1 kN = 0,2248 kip'],
      ['Volume', 'm³', 'ft³, gal', '1 m³ = 35,31 ft³ = 264 gal (US)'],
      ['Hauteur d’eau', 'm CE', 'ft of water', '10,2 m CE ≈ 1 bar'],
    ],
    note: "En génie civil, on travaille presque toujours en pression relative : la pression atmosphérique agit des deux côtés des parois et s'annule.",
  },
  hypotheses: {
    items: [
      ['info', 'Fluide au repos, incompressible, de masse volumique constante.'],
      ['info', 'Pression atmosphérique identique des deux côtés de la paroi (pression relative).'],
      ['warning', 'Pour les sous-pressions, retenez le niveau de nappe le plus haut (crue, remontée) et non le niveau mesuré le jour du sondage.'],
      ['warning', 'Un ouvrage vide est plus sensible au soulèvement qu’un ouvrage en service : vérifiez les phases de chantier.'],
      ['tip', 'Le diagramme des pressions est toujours un triangle (ou un trapèze) : tracez-le avant de calculer.'],
    ],
  },
  simple_examples: {
    examples: [
      {
        title: 'Exemple 1 : vanne rectangulaire immergée',
        given: 'Vanne verticale 1,5 m de large × 2,0 m de haut, sommet à 1,0 m sous la surface',
        find: 'La poussée et la profondeur du centre de poussée',
        solution_latex: "h_G = 2{,}0\\ \\text{m} \\quad F = 9{,}81 \\times 2{,}0 \\times 3{,}0 = 58{,}9\\ \\text{kN} \\quad y_P = 2{,}0 + \\frac{1{,}0}{2{,}0 \\times 3{,}0} = 2{,}17\\ \\text{m}",
        result: 'F = 58,9 kN appliquée à 2,17 m de profondeur (I_G = 1,5 × 2³/12 = 1,0 m⁴).',
      },
      {
        title: 'Exemple 2 : tirant d’eau d’un caisson',
        given: 'Caisson 10 × 6 m en plan, masse 150 t, eau de mer (1 025 kg/m³)',
        find: 'Le tirant d’eau',
        solution_latex: "T = \\frac{150\\,000}{1\\,025 \\times 10 \\times 6} = 2{,}44\\ \\text{m}",
        result: 'Le caisson s’enfonce de 2,44 m.',
      },
      {
        title: 'Exemple 3 : sous-pression sous un radier',
        given: 'Radier 3,0 m sous le niveau de la nappe',
        find: 'La sous-pression',
        solution_latex: "u = 9{,}81 \\times 3{,}0 = 29{,}4\\ \\text{kPa}",
        result: '29,4 kN/m² : il faut au moins 1,2 m de béton (29,4/25) pour l’équilibrer, sans marge.',
      },
    ],
  },
  real_examples: {
    title: 'Exemple réel — Soulèvement d’une piscine enterrée',
    examples: [
      {
        context: 'Piscine coque de 8 × 4 m vidangée pour entretien après de fortes pluies',
        scenario: "La nappe superficielle est remontée à 0,5 m sous le terrain naturel. Vide, la coque légère de 1,6 m de profondeur a été soulevée de 40 cm, cassant les canalisations.",
        decomposition_latex: "U = 9{,}81 \\times 1{,}1 \\times 32 = 345\\ \\text{kN} \\gg G_{coque} \\approx 30\\ \\text{kN}",
        lesson: "Un ouvrage enterré vide sous nappe doit être lesté, ancré ou équipé d'un clapet de décompression ; on ne vidange jamais sans vérifier le niveau de la nappe.",
      },
    ],
  },
  diagrams: {
    title: 'Schéma de principe — Pressions sur un ouvrage',
    diagram_description: [
      'Surface libre : pression relative nulle',
      'Pression croissante : p = ρgh, 10 kPa par mètre',
      'Paroi verticale : diagramme triangulaire, résultante ½ρgH² à H/3',
      'Paroi quelconque : F = ρ g h_G A, centre de poussée sous G',
      'Sous le radier : sous-pression u = ρ g h_w',
      'Corps immergé : poussée d’Archimède = poids d’eau déplacé',
    ],
  },
  mistakes: {
    items: [
      ['Appliquer la poussée à mi-hauteur', 'Moment sous-estimé de 33 %', 'La résultante d’une pression triangulaire est au tiers inférieur.'],
      ['Placer le centre de poussée au centre de gravité', 'Effort sur le mécanisme de vanne mal estimé', 'Ajouter I_G / (y_G A).'],
      ['Ignorer le cas « ouvrage vide sous nappe »', 'Soulèvement du radier', 'Vérifier le soulèvement dans toutes les phases.'],
    ],
  },
  tips: {
    tips: [
      'Retenez : 1 m d’eau = 10 kPa ≈ 1 t/m².',
      'Pour un réservoir, vérifiez deux cas : plein sans terres et vide avec poussée des terres.',
      'Les clapets anti-soulèvement laissent entrer l’eau de nappe dans un bassin vide pour équilibrer la pression.',
      'En eau de mer, utilisez 10,05 kN/m³ au lieu de 9,81.',
    ],
  },
  norms: {
    norms: [
      ['NF EN 1991-4', 'Actions sur les silos et réservoirs.'],
      ['NF EN 1992-3', 'Eurocode 2 : silos et réservoirs (étanchéité, fissuration).'],
      ['NF EN 1997-1 §2.4.7.4', 'Vérification au soulèvement (état limite UPL).'],
      ['Fascicule 74', 'Construction des réservoirs en béton (marchés publics).'],
    ],
  },
  exercises: {
    exercises: [
      {
        level: 1,
        text: 'Calculer la pression à 12 m de profondeur dans un lac (pression relative).',
        hint: 'p = ρgh.',
        answer_latex: "p = 1\\,000 \\times 9{,}81 \\times 12 = 117\\,720\\ \\text{Pa} = 118\\ \\text{kPa}",
        answer_text: '≈ 118 kPa (1,18 bar).',
      },
      {
        level: 2,
        text: 'Un batardeau retient 4,5 m d’eau. Calculer la poussée par mètre et le moment au pied.',
        hint: 'F = ½ρgH², bras de levier H/3.',
        answer_latex: "F = \\frac{1}{2} \\times 9{,}81 \\times 4{,}5^2 = 99{,}3\\ \\text{kN/m} \\qquad M = 99{,}3 \\times 1{,}5 = 149\\ \\text{kN·m/m}",
        answer_text: 'F ≈ 99 kN/m ; M ≈ 149 kN·m/m.',
      },
      {
        level: 3,
        text: 'Une station de pompage enterrée (12 × 8 m en plan) a un fond à 5 m sous la nappe et pèse 3 500 kN à vide. Vérifier le soulèvement (F_s ≥ 1,1).',
        hint: 'U = ρ g h_w A.',
        answer_latex: "U = 9{,}81 \\times 5 \\times 96 = 4\\,709\\ \\text{kN} \\qquad F_s = \\frac{3\\,500}{4\\,709} = 0{,}74 < 1{,}1",
        answer_text: 'Soulèvement : il manque environ 1,1 × 4 709 − 3 500 = 1 680 kN de lest ou d’ancrages.',
      },
    ],
  },
  quiz: {
    title: 'Quiz — Hydrostatique',
    questions: [
      { q: 'De combien augmente la pression de l’eau par mètre de profondeur ?', options: ['≈ 1 kPa', '≈ 10 kPa', '≈ 100 kPa'], correct: 1, explain: 'ρg ≈ 9,81 kPa/m.' },
      { q: 'Où s’applique la poussée sur une paroi verticale ?', options: ['À mi-hauteur', 'Au tiers de la hauteur depuis le fond', 'En surface'], correct: 1, explain: 'Diagramme triangulaire : résultante à H/3 du fond.' },
      { q: 'Quand un ouvrage enterré risque-t-il le plus de se soulever ?', options: ['Quand il est plein', 'Quand il est vide sous une nappe haute', 'En été sec'], correct: 1, explain: 'Son poids est minimal et la sous-pression maximale.' },
    ],
  },
  exam_questions: {
    questions: [
      "Établissez la loi fondamentale de l'hydrostatique et la poussée sur une paroi verticale.",
      'Déterminez la poussée et le centre de poussée sur une vanne plane inclinée.',
      'Vérifiez la stabilité au soulèvement d’un ouvrage enterré et proposez des solutions.',
    ],
  },
  interview_questions: {
    questions: [
      ['Comment empêcher un parking enterré sous nappe de se soulever ?', "En augmentant son poids (radier épais, lest), en l'ancrant (tirants ou pieux travaillant en traction), en rabattant la nappe en phase provisoire, ou en acceptant l'eau avec un drainage permanent si l'environnement le permet."],
      ['Pourquoi le centre de poussée est-il plus bas que le centre de gravité ?', 'Parce que la pression augmente avec la profondeur : la partie basse de la surface reçoit plus d’effort que la partie haute.'],
    ],
  },
  practical_case: {
    title: 'Cas pratique — Bassin de rétention enterré',
    scenario: 'Bassin en béton de 20 × 10 m en plan, fond à 4,0 m sous le terrain, nappe des plus hautes eaux à 1,0 m sous le terrain. Poids propre du bassin vide : 5 000 kN.',
    description: 'Vérifier le soulèvement et dimensionner un débord de radier lesté par les terres (γ = 18 kN/m³) si nécessaire.',
    resolutions: [
      "h_w = 4{,}0 - 1{,}0 = 3{,}0\\ \\text{m} \\qquad U = 9{,}81 \\times 3{,}0 \\times 200 = 5\\,886\\ \\text{kN}",
      "F_s = \\frac{5\\,000}{5\\,886} = 0{,}85 < 1{,}1 \\Rightarrow \\text{lest nécessaire} : 1{,}1 \\times 5\\,886 - 5\\,000 = 1\\,475\\ \\text{kN}",
      "\\text{Débord de 1 m sur le périmètre (60 m) avec 4 m de terres : } 60 \\times 1 \\times 4 \\times 18 = 4\\,320\\ \\text{kN} \\gg 1\\,475\\ \\text{kN}",
    ],
    conclusion: "Le bassin vide se soulèverait. Un débord de radier de 0,5 m suffirait en théorie (2 160 kN de terres, sous-pression sous le débord à ajouter au calcul) ; on retient 0,8 à 1 m pour conserver une marge.",
  },
  summary: {
    content: `### L'hydrostatique en 5 points
1. $p = p_0 + \\rho g h$ : 10 kPa par mètre d'eau.
2. Paroi verticale : $F = \\frac{1}{2}\\rho g H^2 b$ à $H/3$ du fond.
3. Paroi quelconque : $F = \\rho g h_G A$, centre de poussée sous G.
4. Archimède : $F_A = \\rho g V_{imm}$, tirant d'eau des caissons.
5. Soulèvement : poids ≥ sous-pression avec marge.`,
  },
  key_points: {
    points: [
      '1 m d’eau ≈ 10 kPa',
      'F = ½ρgH² à H/3 du fond',
      'y_P = y_G + I_G / (y_G A)',
      'Archimède : poids du volume déplacé',
      'Vérifier le soulèvement des ouvrages vides',
    ],
  },
  self_assessment: {
    objectives: [
      'Je sais calculer une pression hydrostatique',
      'Je sais calculer la poussée sur une paroi et son point d’application',
      'Je sais appliquer le principe d’Archimède',
      'Je sais vérifier un ouvrage au soulèvement',
      "J'ai réussi le quiz avec au moins 2 bonnes réponses sur 3",
    ],
  },
});
