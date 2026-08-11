// ── Lesson: Béton Armé — Conception & Calcul ───────────────────────────────────
export const lesson_beton_arme = {
  moduleId: 9,
  slug: 'beton-arme',
  lessonIndex: 1,
  title: 'Flexion Simple — Dimensionnement des Armatures',
  subtitle: 'Module 09 — Béton Armé (Eurocode 2)',
  level: 'Avancé',
  duration: '70h',
  diagramType: 'rebar_beam',
  tags: ['Béton Armé', 'Eurocode 2', 'Flexion', 'Armatures', 'fc28', 'Ferraillage'],

  steps: [
    {
      id: 1,
      key: 'definition',
      title: 'Le Béton Armé — Matériau composite de référence',
      icon: '📖',
      type: 'definition',
      fr: 'Béton Armé (BA)',
      en: 'Reinforced Concrete (RC)',
      metier: 'Matériau de construction dominant dans le monde : 70% des structures de Génie Civil sont en béton armé (ponts, bâtiments, tunnels, barrages).',
      content: `Le **béton armé** associe deux matériaux complémentaires :
- **Le béton** : excellent en compression ($f_{ck}$ = 25-35 MPa), mais faible en traction (~3 MPa).
- **L'acier** : résistant en traction ET compression ($f_{yk}$ = 500 MPa), mais cher et sensible à la corrosion.

### Principe fondamental :
L'acier reprend les efforts de **traction** là où le béton fissure (zone tendue).  
Le béton reprend les efforts de **compression** en zone comprimée.

$$\\sigma_{béton} = -f_{cd} \\quad \\text{(compression)} \\qquad \\sigma_{acier} = +f_{yd} \\quad \\text{(traction)}$$

> 💡 **Règle d'or** : Toujours vérifier à l'ELU (rupture) ET à l'ELS (fissuration et déformation).`,
    },
    {
      id: 2,
      key: 'importance',
      title: 'Importance du Béton Armé en Génie Civil',
      icon: '⚠️',
      type: 'importance',
      content: `Le béton armé est **le matériau le plus utilisé dans la construction mondiale** (>4 milliards de tonnes de béton produits par an).

- **Durabilité** : Un béton de qualité dure 100 ans et plus (Ex : Panthéon de Rome en béton romain).
- **Adaptabilité** : Formes complexes possibles par coffrage (coques, voiles, arches).
- **Économie** : Matières premières locales (gravier, sable, ciment, eau).
- **Enjeu parasismique** : La ductilité du ferraillage est cruciale pour dissiper l'énergie sismique (Eurocode 8).

> ⚠️ **Danger fréquent en bureau d'études** : Sous-estimer le diamètre des armatures ou négliger les armatures de peau dans les sections épaisses provoque des fissures destructrices.`,
    },
    {
      id: 3,
      key: 'applications',
      title: 'Applications terrain — Éléments en béton armé',
      icon: '🏗️',
      type: 'applications',
      examples: [
        { context: 'Poutres de plancher', text: 'Poutres rectangulaires ou en T supportant les dalles. Section courante : 30×60 cm à 40×80 cm.' },
        { context: 'Dalles de plancher', text: 'Dalles nervurées, bidirectionnelles (portée 4-8 m), épaisseur 18-25 cm.' },
        { context: 'Voiles et poteaux', text: 'Poteaux carrés 40×40 cm typiques pour bâtiment R+5 (charge 500-1500 kN).' },
        { context: 'Fondations', text: 'Semelles isolées, filantes ou radier général selon la nature du sol.' },
        { context: 'Ouvrages hydrauliques', text: 'Barrages, réservoirs (béton C30/37, voile de 30-60 cm).' },
        { context: 'Ponts à poutres', text: 'Poutres préfabriquées PRAD 45, portée 10-25 m selon BPEL/EC2.' },
      ],
    },
    {
      id: 4,
      key: 'theory',
      title: 'Théorie de la flexion simple — Section rectangulaire doublement armée',
      icon: '📐',
      type: 'theory',
      diagramType: 'rebar_beam',
      content: `### Modèle de calcul à l'ELU (Eurocode 2)

**Diagramme contraintes-déformations à l'ELU :**
- Béton comprimé : bloc rectangulaire équivalent (Whitney) → $\\sigma_c = 0{,}8 \\cdot f_{cd}$ sur hauteur $x_u = \\lambda \\cdot c$
- Acier tendu : $\\varepsilon_s = \\varepsilon_{s,max}$ → $\\sigma_s = f_{yd} = f_{yk} / \\gamma_s$

**Résistances de calcul :**
$$f_{cd} = \\alpha_{cc} \\cdot \\frac{f_{ck}}{\\gamma_c} = \\frac{0{,}85 \\times f_{ck}}{1{,}5}$$
$$f_{yd} = \\frac{f_{yk}}{\\gamma_s} = \\frac{500}{1{,}15} = 434{,}8 \\text{ MPa}$$

**Condition d'équilibre :**
$$N = 0 \\quad \\Rightarrow \\quad 0{,}8 \\cdot f_{cd} \\cdot b \\cdot x_u = A_s \\cdot f_{yd}$$

$$M_{Ed} \\le M_{Rd} = 0{,}8 \\cdot f_{cd} \\cdot b \\cdot x_u \\cdot \\left(d - 0{,}4 \\cdot x_u\\right)$$`,
    },
    {
      id: 5,
      key: 'formulas',
      title: 'Formules de dimensionnement — Béton Armé EC2',
      icon: '🔢',
      type: 'formulas',
      diagramType: 'rebar_beam',
      formulas: [
        {
          name: 'Résistance de calcul du béton (compression)',
          latex: 'f_{cd} = \\alpha_{cc} \\cdot \\frac{f_{ck}}{\\gamma_c} = \\frac{0{,}85 \\times f_{ck}}{1{,}5} \\quad [\\text{MPa}]',
          description: 'fck = résistance caractéristique cylindrique [MPa], γc = 1,50 (béton coulé en place), αcc = 0,85'
        },
        {
          name: 'Résistance de calcul de l\'acier',
          latex: 'f_{yd} = \\frac{f_{yk}}{\\gamma_s} = \\frac{500}{1{,}15} = 434{,}8 \\text{ MPa (HA 500)}',
          description: 'fyk = limite élastique caractéristique [MPa], γs = 1,15 (acier). Pour acier S500 (HA): fyd = 434.8 MPa'
        },
        {
          name: 'Calcul des armatures longitudinales — Méthode simplifiée',
          latex: 'A_s = \\frac{M_{Ed}}{0{,}9 \\cdot d \\cdot f_{yd}} \\quad \\text{(1ère approximation)}',
          description: 'Formule simplifiée avec bras de levier z ≈ 0,9·d. Valide si x_u ≤ 0,45·d (zone pivot A-B).'
        },
        {
          name: 'Armatures minimales réglementaires (EC2 art. 9.2.1.1)',
          latex: 'A_{s,min} = \\max\\left(0{,}26 \\cdot \\frac{f_{ctm}}{f_{yk}} \\cdot b_t \\cdot d \\;,\\; 0{,}0013 \\cdot b_t \\cdot d\\right)',
          description: 'fctm = 0,30·fck^(2/3) pour béton C20 à C50. Ne jamais descendre en-dessous de A_s,min.'
        },
        {
          name: 'Vérification de l\'effort tranchant (béton seul, sans armatures)',
          latex: 'V_{Rd,c} = \\left[C_{Rd,c} \\cdot k \\cdot \\left(100 \\cdot \\rho_l \\cdot f_{ck}\\right)^{1/3}\\right] \\cdot b_w \\cdot d',
          description: 'CRd,c = 0,18/γc = 0,12 ; k = 1 + √(200/d) ≤ 2,0 ; ρl = As/(bw·d) ≤ 0,02'
        },
      ],
    },
    {
      id: 6,
      key: 'stepbystep',
      title: 'Calcul complet d\'armatures — Poutre 30×60 cm, M_Ed = 150 kN·m',
      icon: '🔬',
      type: 'stepbystep',
      problem: 'Dimensionner les armatures longitudinales d\'une poutre rectangulaire b=30 cm, h=60 cm, enrobage c=3 cm, béton C25/30 (fck=25 MPa), acier HA 500. M_Ed = 150 kN·m.',
      steps_demo: [
        { n: 1, text: 'Données : b=300mm, h=600mm, c=30mm → d = h-c-Φ/2 ≈ 600-30-10 = 560 mm' },
        { n: 2, text: 'Résistances : fcd = 0,85×25/1,50 = 14,17 MPa | fyd = 500/1,15 = 434,8 MPa' },
        { n: 3, text: 'Moment réduit : μ = Med/(b·d²·fcd) = 150×10⁶/(300×560²×14,17) = 0,1124' },
        { n: 4, text: 'Vérification pivot : μ = 0,1124 < μlim = 0,372 → Pivot A (pas d\'armatures comprimées)' },
        { n: 5, text: 'Bras de levier : z = d·(1 - 0,5×α·λ) avec α = (1-√(1-2μ))/λ → z ≈ 0,94×d = 526 mm' },
        { n: 6, text: 'Armatures : As = Med/(z×fyd) = 150×10⁶/(526×434,8) = 655,4 mm² → 4 HA 16 = 804 mm²' },
      ],
      result_latex: 'A_s = 655{,}4 \\text{ mm}^2 \\quad \\Rightarrow \\quad \\text{Choisir } 4 \\text{ HA }16 = 804 \\text{ mm}^2 > 655{,}4 \\text{ mm}^2 \\quad \\checkmark',
    },
    {
      id: 7,
      key: 'units',
      title: 'Unités en Béton Armé — La clé de la précision',
      icon: '📏',
      type: 'units',
      table: [
        { grandeur: 'Résistance béton fck', si: 'MPa = N/mm²', imperial: 'psi', conversion: 'C25/30 → fck=25 MPa = 3625 psi' },
        { grandeur: 'Section d\'armatures As', si: 'mm² ou cm²', imperial: 'in²', conversion: '1 cm² = 100 mm² = 0,155 in²' },
        { grandeur: 'Moment fléchissant Med', si: 'kN·m ou N·mm', imperial: 'kip·ft', conversion: '1 kN·m = 10⁶ N·mm' },
        { grandeur: 'Effort tranchant Ved', si: 'kN ou N', imperial: 'kips', conversion: '1 kN = 1000 N' },
        { grandeur: 'Diamètre armatures Φ', si: 'mm (HA 8-40)', imperial: 'inches', conversion: 'HA 20 = Φ20mm = 0,79"' },
        { grandeur: 'Enrobage c', si: 'mm (15 à 50 mm)', imperial: 'inches', conversion: 'c=30mm (exposé XC3) = 1,18"' },
      ],
      note: '⚠️ Toujours travailler en N et mm² pour obtenir directement des MPa. M_Ed en N·mm = M_Ed[kN·m] × 10⁶.',
    },
    {
      id: 8,
      key: 'hypotheses',
      title: 'Hypothèses et conditions de validité du calcul béton armé',
      icon: '📋',
      type: 'hypotheses',
      items: [
        { type: 'info', text: 'Hypothèse de Bernoulli : Les sections droites restent planes (valide pour élancement L/h > 5).' },
        { type: 'info', text: 'Adhérence parfaite entre le béton et les armatures (ε_béton = ε_acier en tout point).' },
        { type: 'warning', text: 'ATTENTION : La résistance à la traction du béton est IGNORÉE à l\'ELU (béton fissuré en zone tendue).' },
        { type: 'warning', text: 'Ne jamais dépasser ρ_max = 4% (As + As\')/(bw·d) — risque de rupture fragile du béton comprimé.' },
        { type: 'tip', text: 'Pour une première approximation rapide : As ≈ M_Ed / (0,9·d·f_yd) — précision ≈5% acceptable au pré-dimensionnement.' },
        { type: 'warning', text: 'Ne pas oublier les armatures de peau (As_peau) dans les sections de hauteur h > 1,00 m (risque de fissures de retrait).' },
      ],
    },
    {
      id: 9,
      key: 'simple_examples',
      title: 'Exemples guidés — Ferraillage béton armé',
      icon: '✏️',
      type: 'examples_simple',
      examples: [
        {
          title: 'Exemple 1 : Armatures pour M_Ed = 80 kN·m',
          given: 'Poutre b=25 cm, d=45 cm, béton C20/25 (fcd=11,33 MPa), acier HA 500',
          find: 'Section d\'armatures As minimale (approche simplifiée z ≈ 0,9d)',
          solution_latex: 'A_s = \\frac{M_{Ed}}{0{,}9 \\cdot d \\cdot f_{yd}} = \\frac{80 \\times 10^6}{0{,}9 \\times 450 \\times 434{,}8} = 454 \\text{ mm}^2',
          result: 'As = 454 mm² → Choisir 3 HA 16 = 603 mm² (ou 4 HA 14 = 615 mm²)',
        },
        {
          title: 'Exemple 2 : Armatures minimales réglementaires',
          given: 'Poutre b=30 cm, d=55 cm, béton C25/30 (fctm = 2,56 MPa, fyk=500 MPa)',
          find: 'Armatures minimales As,min selon EC2 (Art. 9.2.1.1)',
          solution_latex: 'A_{s,min} = \\max\\left(0{,}26 \\times \\frac{2{,}56}{500} \\times 300 \\times 550 \\;,\\; 0{,}0013 \\times 300 \\times 550\\right) = \\max(221\\;,\\;215) = 221 \\text{ mm}^2',
          result: 'As,min = 221 mm² → Ne jamais ferrailler moins que 221 mm² pour cette section',
        },
        {
          title: 'Exemple 3 : Vérification de la résistance à l\'effort tranchant',
          given: 'Poutre b=25 cm, d=50 cm, As=3 HA 20 (942 mm²), béton C25/30, V_Ed=120 kN',
          find: 'V_Rd,c (béton seul) et vérification',
          solution_latex: 'k = 1 + \\sqrt{200/500} = 1{,}63 \\quad \\rho_l = 942/(250 \\times 500) = 0{,}0075 \\quad V_{Rd,c} = 0{,}12 \\times 1{,}63 \\times (100 \\times 0{,}0075 \\times 25)^{1/3} \\times 250 \\times 500 = 82 \\text{ kN}',
          result: 'VRd,c = 82 kN < VEd = 120 kN → Des étriers de cisaillement SONT NÉCESSAIRES !',
        },
      ],
    },
    {
      id: 10,
      key: 'real_examples',
      title: 'Exemple réel — Ferraillage d\'un plancher de bâtiment',
      icon: '🏢',
      type: 'examples_real',
      diagramType: 'rebar_beam',
      examples: [
        {
          context: 'Bureau d\'études — Poutre principale R+2, Paris',
          scenario: 'Poutre principale 30×65 cm, portée L=8m, béton C30/37 (fck=30 MPa), HA 500. Charges : q_ELU = 40 kN/m.',
          decomposition_latex: 'M_{Ed} = \\frac{40 \\times 8^2}{8} = 320 \\text{ kN·m} \\quad d = 615 \\text{ mm} \\quad f_{cd} = \\frac{0{,}85 \\times 30}{1{,}5} = 17 \\text{ MPa}',
          lesson: 'Calcul → As = 320×10⁶/(0,9×615×434,8) = 1330 mm² → Choisir 4 HA 22 = 1521 mm² + vérifier étriers HA 10/15cm pour V_Ed=160 kN.',
        },
      ],
    },
    {
      id: 11,
      key: 'diagrams',
      title: 'Schéma de ferraillage — Coupe transversale d\'une poutre BA',
      icon: '📊',
      type: 'interactive_diagram',
      diagramType: 'rebar_beam',
      description: 'Visualisez la répartition des contraintes dans une section rectangulaire en béton armé. Activez/désactivez les zones de contraintes (compression béton bleu, traction acier rouge).',
      diagram_description: [
        'Zone comprimée béton (bloc rectangulaire équivalent EC2)',
        'Axe neutre plastique avec cotation xu',
        'Armatures tendues As avec leur enrobage et bras de levier z',
      ],
    },
    {
      id: 12,
      key: 'mistakes',
      title: 'Erreurs critiques en Béton Armé',
      icon: '⛔',
      type: 'mistakes',
      items: [
        {
          mistake: 'Oublier l\'enrobage dans le calcul de d',
          trap: 'Utiliser d = h au lieu de d = h - c_nom - Φ_étrier - Φ_barre/2. Pour h=60cm, c=3cm, Φ12: d=60-3-1,2-0,6=55,2cm ≠ 60cm',
          fix: 'd = h − c_nom − Φ_stirrup − Φ_long/2. Toujours prendre c_nom = c_min + Δc_dev (5 mm en général).',
        },
        {
          mistake: 'Ne pas vérifier l\'effort tranchant',
          trap: 'Calculer uniquement les armatures longitudinales et oublier les armatures transversales (étriers)',
          fix: 'Vérifier V_Ed ≤ V_Rd,c (béton seul). Si V_Ed > V_Rd,c, calculer des étriers Asw/s ≥ (VEd-VRd,c)/(z·fywd).',
        },
        {
          mistake: 'Dépasser le taux d\'armatures maximal',
          trap: 'Ferrailler excessivement (ρ > 4%) pour rattraper une section trop petite',
          fix: 'Si ρ → 4%, augmenter la section b×h. Le béton peut éclater soudainement si l\'acier est trop dense.',
        },
        {
          mistake: 'Négliger les armatures de peau pour les poutres hautes',
          trap: 'Omettre les armatures de peau pour h > 100 cm (risque de fissures longitudinales visibles)',
          fix: 'Ajouter As_peau ≥ 0,001 × Act de chaque côté de la poutre (Act = zone tendue en ELS).',
        },
      ],
    },
    {
      id: 13,
      key: 'tips',
      title: 'Secrets du ferraillage — Astuces BET & chantier',
      icon: '💡',
      type: 'tips',
      tips: [
        'Ratio rapide : 80-120 kg de ferraillage / m³ de béton pour bâtiment courant. Si vous calculez 250 kg/m³, votre section est probablement trop petite.',
        'Diamètres courants : HA 10 (étriers), HA 12-16 (armatures secondaires), HA 20-32 (armatures principales de poutres).',
        'Longueur d\'ancrage standard : 40×Φ pour les aciers HA 500 dans béton C25/30 (adhérence bonne). Exemple : HA 20 → Lancrage = 800 mm = 80 cm.',
        'En préconception rapide : As ≈ M/(0,9×d×fyd). Erreur < 5% pour les sections courantes (μ < 0,20).',
        'Sur chantier : contrôler l\'enrobage avec des cales homologuées (diamètre = c_nom). Une faible erreur d\'enrobage réduit la durabilité de 50% (corrosion).',
        'Toujours vérifier la contrainte dans le béton en ELS : σc,ELS ≤ 0,60×fck pour éviter la fluage non-linéaire.',
      ],
    },
    {
      id: 14,
      key: 'norms',
      title: 'Normes Béton Armé — EC2 et références',
      icon: '📜',
      type: 'norms',
      norms: [
        { code: 'Eurocode 2 (EN 1992-1-1)', description: 'Calcul des structures en béton — béton armé et précontraint. Référence principale en Europe.' },
        { code: 'EN 1992-1-2', description: 'Calcul des structures en béton en situation d\'incendie (résistance au feu)' },
        { code: 'ACI 318-19', description: 'Building Code Requirements for Structural Concrete — référence nord-américaine' },
        { code: 'BAEL 91 (NF P 18-702)', description: 'Règles françaises pour le béton armé aux États Limites — toujours utilisé pour les vérifications de flèches en France' },
        { code: 'NF EN 206-1', description: 'Spécifications du béton : classes d\'exposition (XC, XS, XD, XF, XA) et durabilité' },
        { code: 'NF EN 10080', description: 'Aciers pour béton armé — armatures à haute adhérence (HA), nuances B500B/C' },
      ],
    },
    {
      id: 15,
      key: 'exercises',
      title: 'Exercices Béton Armé — Du facile au difficile',
      icon: '✍️',
      type: 'exercises',
      exercises: [
        {
          id: 'ex_ba_1',
          number: 1,
          difficulty: 'Facile',
          text: 'Calculez les armatures nécessaires pour une poutre de section 25×50 cm (d=46 cm), béton C25/30, acier HA 500, soumise à M_Ed = 60 kN·m. Utilisez la formule simplifiée z ≈ 0,9·d.',
          hint: 'fyd = 500/1.15 = 434.8 MPa. As = M/(0.9×d×fyd). Convertir M en N·mm (×10⁶).',
          answer_latex: 'A_s = \\frac{60 \\times 10^6}{0{,}9 \\times 460 \\times 434{,}8} = 333 \\text{ mm}^2 \\quad \\Rightarrow \\quad 3 \\text{ HA }12 = 339 \\text{ mm}^2 \\quad \\checkmark',
          answer_text: 'As = 333 mm² → 3 HA 12 (339 mm²) convient',
        },
        {
          id: 'ex_ba_2',
          number: 2,
          difficulty: 'Moyen',
          text: 'Pour une poutre 30×65 cm (d=60 cm), béton C30/37 (fcd=17 MPa), HA500 (fyd=434,8 MPa), M_Ed=250 kN·m. Calculez μ, vérifiez si pivot A, puis calculez As.',
          hint: 'μ = M/(b·d²·fcd). Si μ < μlim = 0,372 → Pivot A. Puis calculer α = (1-√(1-2μ))/0,8 et z = d(1-0,4·α).',
          answer_latex: '\\mu = \\frac{250 \\times 10^6}{300 \\times 600^2 \\times 17} = 0{,}136 < 0{,}372 \\quad A_s = \\frac{250 \\times 10^6}{0{,}93 \\times 600 \\times 434{,}8} = 1028 \\text{ mm}^2',
          answer_text: 'μ=0,136 (Pivot A) → As = 1028 mm² → 4 HA 20 = 1257 mm²',
        },
        {
          id: 'ex_ba_3',
          number: 3,
          difficulty: 'Difficile',
          text: "Déterminez si des armatures comprimées As' sont nécessaires pour : poutre 30×55 cm (d=50cm, d'=5cm), béton C25/30, HA500, M_Ed=280 kN·m. Si oui, calculez As et As'.",
          hint: "Calculer μ. Si μ > μlim=0,372 → Pivot B → armatures comprimées nécessaires. Utiliser les équations d'équilibre en flexion composée.",
          answer_latex: `\\mu = \\frac{280 \\times 10^6}{300 \\times 500^2 \\times 14{,}17} = 0{,}263 < 0{,}372 \\quad \\Rightarrow \\quad \\text{Pivot A}`,
          answer_text: 'μ=0,263 (Pivot A) → As = 1411 mm² → 5 HA 20 = 1571 mm²',
        },
      ],
    },
    {
      id: 16,
      key: 'corrections',
      title: 'Corrections — Explications détaillées',
      icon: '✅',
      type: 'corrections',
      note: 'Cliquez sur "Voir la correction" sous chaque exercice pour afficher la solution complète avec toutes les étapes de calcul EC2.',
    },
    {
      id: 17,
      key: 'quiz',
      title: 'Quiz Béton Armé — Eurocode 2',
      icon: '🎯',
      type: 'quiz',
      questions: [
        {
          id: 'q_ba_1',
          question: 'Quelle est la valeur de fyd pour un acier HA 500 selon l\'Eurocode 2 (γs = 1,15) ?',
          options: [
            { id: 'a', text: '500 MPa' },
            { id: 'b', text: '435 MPa (environ)' },
            { id: 'c', text: '400 MPa' },
            { id: 'd', text: '575 MPa' },
          ],
          correct: 'b',
          explanation: 'fyd = fyk/γs = 500/1,15 = 434,8 MPa ≈ 435 MPa. γs = 1,15 est le coefficient partiel de sécurité sur l\'acier selon EC2.',
        },
        {
          id: 'q_ba_2',
          question: 'Dans un calcul de béton armé EC2, à quelle contrainte est limité le béton comprimé à l\'ELU (bloc rectangulaire) ?',
          options: [
            { id: 'a', text: 'fck (résistance caractéristique)' },
            { id: 'b', text: 'fck / 1,5' },
            { id: 'c', text: '0,85 × fck / 1,5 = 0,567 × fck' },
            { id: 'd', text: 'fck / 1,2' },
          ],
          correct: 'c',
          explanation: 'fcd = αcc × fck/γc = 0,85 × fck/1,5. Le coefficient αcc = 0,85 tient compte des effets défavorables à long terme. Pour C25 : fcd = 0,85×25/1,5 = 14,17 MPa.',
        },
        {
          id: 'q_ba_3',
          question: 'Quand faut-il ajouter des armatures comprimées (A\'s) dans une section rectangulaire en flexion simple ?',
          options: [
            { id: 'a', text: 'Toujours' },
            { id: 'b', text: 'Quand As est supérieur à 0,5% de la section' },
            { id: 'c', text: 'Quand μ = Med/(b·d²·fcd) dépasse μlim (≈0,372)' },
            { id: 'd', text: 'Jamais en flexion simple' },
          ],
          correct: 'c',
          explanation: 'Si μ > μlim ≈ 0,372 (Pivot B-C), l\'axe neutre dépasse la limite réglementaire : le béton est insuffisant seul. Il faut ajouter des armatures comprimées A\'s pour équilibrer le moment.',
        },
      ],
    },
    {
      id: 18,
      key: 'exam_questions',
      title: 'Questions d\'examen — Niveau Master/Ingénieur',
      icon: '🎓',
      type: 'exam',
      questions: [
        'Démontrez l\'équation de la capacité résistante M_Rd pour une section rectangulaire en béton armé en flexion simple, en utilisant le bloc rectangulaire équivalent de l\'EC2.',
        'Comparez le calcul aux états limites (EC2) et l\'ancienne méthode des contraintes admissibles (BAEL). Quels avantages apporte l\'approche probabiliste de l\'EC2 ?',
        'Une poutre en béton armé doit être vérifiée à l\'ELS (fissuration). Calculez l\'ouverture de fissure wk pour As = 1200 mm², σs (ELS) = 280 MPa, c = 30 mm, Φ = 20 mm.',
      ],
    },
    {
      id: 19,
      key: 'interview_questions',
      title: 'Questions d\'entretien — Béton Armé',
      icon: '💼',
      type: 'interview',
      questions: [
        {
          question: 'En visite de chantier, un ferrailleur vous montre des barres HA 20 posées directement sur le coffrage sans cales. Que faites-vous ?',
          answer_hint: 'Arrêt immédiat du bétonnage. Sans enrobage, les armatures se corrodent en 10-15 ans et la structure s\'effondre. Exiger la mise en place de cales d\'enrobage homologuées (Φ = c_nom = 30-50 mm selon exposition).',
        },
        {
          question: 'Expliquez simplement à un client non-technicien pourquoi le béton armé est supérieur au béton simple.',
          answer_hint: 'Le béton simple est comme de la craie : résistant à l\'écrasement mais cassant en flexion. L\'acier dans le béton armé joue le rôle de "squelette" qui empêche la rupture par traction et rend la structure ductile (capable d\'absorber les chocs et tremblements).',
        },
      ],
    },
    {
      id: 20,
      key: 'practical_case',
      title: 'Cas pratique — Ferraillage complet d\'une travée de pont',
      icon: '🔧',
      type: 'practical',
      scenario: 'Étude de cas professionnel — Tablier de passerelle béton armé',
      description: `**Mise en situation** : Ingénieur en maîtrise d'œuvre, vous devez ferrailler une poutre principale d'une passerelle piétonne, portée 10 m. Béton C35/45, HA 500, q_ELU = 45 kN/m, section 40×90 cm.`,
      resolution_latex_1: 'M_{Ed} = \\frac{45 \\times 10^2}{8} = 562{,}5 \\text{ kN·m} \\quad f_{cd} = \\frac{0{,}85 \\times 35}{1{,}5} = 19{,}83 \\text{ MPa} \\quad d = 855 \\text{ mm}',
      resolution_latex_2: '\\mu = \\frac{562{,}5 \\times 10^6}{400 \\times 855^2 \\times 19{,}83} = 0{,}097 < 0{,}372 \\quad z = 0{,}95 \\times d = 812 \\text{ mm}',
      resolution_latex_3: 'A_s = \\frac{562{,}5 \\times 10^6}{812 \\times 434{,}8} = 1594 \\text{ mm}^2 \\quad \\Rightarrow \\quad 6\\text{ HA }20 = 1885 \\text{ mm}^2 \\quad \\checkmark',
      conclusion: 'Ferraillage retenu : 6 HA 20 en 2 lits. Vérification effort tranchant V_Ed=225 kN → étriers HA 10/20 cm. Enrobage c=40 mm (exposition XC3).',
    },
    {
      id: 21,
      key: 'summary',
      title: 'Résumé — Béton Armé en 6 étapes',
      icon: '📋',
      type: 'summary',
      content: `### La méthode EC2 en 6 étapes clés

1. **Données** : Dimensions b, h, d = h-c-Φ/2 | Béton : fck → fcd = 0,85·fck/1,5 | Acier : fyk=500 → fyd=434,8 MPa
2. **Sollicitations** : M_Ed à l'ELU (combinaison 1,35G + 1,50Q)
3. **Moment réduit** : $\\mu = M_{Ed}/(b \\cdot d^2 \\cdot f_{cd})$
4. **Vérification du pivot** : $\\mu \\le \\mu_{lim} \\approx 0{,}372$ (Pivot A → pas de A's)
5. **Bras de levier** : $z = d \\cdot (1 - 0{,}4 \\cdot \\alpha \\cdot \\lambda)$ avec $\\alpha = (1-\\sqrt{1-2\\mu})/\\lambda$
6. **Armatures** : $A_s = M_{Ed}/(z \\cdot f_{yd}) \\ge A_{s,min}$`,
    },
    {
      id: 22,
      key: 'key_points',
      title: 'Points clés — Béton Armé EC2',
      icon: '⭐',
      type: 'keypoints',
      points: [
        'fcd = 0,85·fck/1,5 (béton) | fyd = fyk/1,15 = 434,8 MPa (HA500)',
        'Formule simplifiée : As ≈ M_Ed/(0,9·d·fyd) — précision ±5%',
        'Vérifier μ < μlim = 0,372 (Pivot A) avant de conclure',
        'As,min = max(0,26·fctm/fyk·bt·d , 0,0013·bt·d)',
        'Toujours vérifier VEd vs VRd,c (effort tranchant béton seul)',
        'Enrobage c_nom = c_min + Δc_dev (classe d\'exposition XC1 à XS3)',
        'Longueur d\'ancrage lbd = α1·α2·...·fyk/(4·fbd) ≈ 40Φ (cas courant)',
      ],
    },
    {
      id: 23,
      key: 'self_assessment',
      title: 'Auto-évaluation — Maîtrise du Béton Armé',
      icon: '🏆',
      type: 'self_assessment',
      description: 'Validez vos compétences Béton Armé :',
      objectives: [
        'Je calcule fcd et fyd correctement pour tout béton/acier normalisé',
        'Je calcule As avec la méthode simplifiée z≈0,9d et la méthode exacte (μ)',
        'Je vérifie la condition de pivot A (μ ≤ 0,372)',
        'Je sais calculer les armatures minimales As,min selon EC2',
        'Je vérifie l\'effort tranchant VRd,c et dimensionne les étriers si nécessaire',
        'J\'ai résolu les 3 exercices correctement',
        'J\'ai obtenu 3/3 au quiz EC2',
      ],
    },
  ],

  quickQuiz: {
    question: 'Pour béton C25/30 (fck=25 MPa) et acier HA500 (fyk=500 MPa), quelles sont fcd et fyd selon EC2 ?',
    options: [
      { id: 'a', label: 'A) fcd = 25 MPa, fyd = 500 MPa' },
      { id: 'b', label: 'B) fcd = 14,17 MPa, fyd = 434,8 MPa' },
      { id: 'c', label: 'C) fcd = 16,67 MPa, fyd = 435 MPa' },
    ],
    correct: 'b',
    explanation: 'fcd = 0,85×25/1,5 = 14,17 MPa | fyd = 500/1,15 = 434,8 MPa. Les coefficients γc=1,5 et γs=1,15 sont les valeurs standard de l\'EC2.',
  },
};
