// ── Lesson: Ingénierie des Tunnels — Module 17 ────────────────────────────────
export const lesson_tunnels = {
  moduleId: 17,
  slug: 'tunnels',
  lessonIndex: 1,
  title: "Méthodes de Creusement & Structuration des Tunnels",
  subtitle: "Module 17 — Ingénierie des Tunnels",
  level: 'Avancé',
  duration: '50h',
  diagramType: 'soil_profile',
  tags: ['Tunnels', 'Tunnelier', 'TBM', 'NATM', 'Convergence-Confinement', 'Voussoirs', 'Soutènement'],

  steps: [
    {
      id: 1,
      key: 'definition',
      title: "Définition — L'Ingénierie des Tunnels",
      icon: '📖',
      type: 'definition',
      fr: 'Ingénierie des Tunnels & Travaux Souterrains',
      en: 'Tunneling & Underground Space Engineering',
      metier: "Pratiquée par les ingénieurs géotechniciens, experts en tunnelier, chefs de projets d'ouvrages souterrains et spécialistes de l'AFTES. Essentielle pour le franchissement de massifs montagneux, les réseaux de transport urbain (métro, Grand Paris Express) et l'assainissement profond.",
      content: `L'**ingénierie des tunnels** est la branche spécialisée du génie civil traitant du **tracé, de l'excavation, de la stabilisation et du revêtement** des cavités souterraines.

### Les deux grandes familles de méthodes de creusement :
1. **Méthode conventionnelle (Traditionnelle / NATM - Nouvelle Méthode Autrichienne)** :
   - Excavation à l'explosif (minage) ou au marteau piqueur / attaque ponctuelle.
   - Pose immédiate d'un soutènement provisoire (béton projeté, boulons d'ancrage, cintres métalliques).
   - Coulage ultérieur d'un revêtement définitif en béton moulé.
2. **Méthode mécanisée (Tunneliers / TBM - Tunnel Boring Machines)** :
   - Excavation continue par une roue de coupe (jupe d'étanchéité).
   - Soutènement et revêtement définitif posés simultanément grâce à l'assemblage d'anneaux de **voussoirs en béton armé**.
   - Types : TBM à Pression de Terre (EPB) pour sols meubles, TBM à Pression de Boue (Bentonite) sous nappe, TBM Roche pour massif rocheux.

> 💡 **Principe clé** : En tunnel, **le sol autour de la cavité est le principal matériau de structure**. Le soutènement sert à aider le sol à se supporter lui-même.`,
    },

    {
      id: 2,
      key: 'importance',
      title: "Pourquoi les tunnels sont des ouvrages d'exception",
      icon: '⚠️',
      type: 'importance',
      content: `Travailler sous terre implique de faire face à un milieu **inconnu, sous forte pression et parfois noyé sous la nappe phréatique**.

- **Risque d'effondrement en fontis** : Un déconfinement incontrôlé à front de taille provoque des fontis remontant jusqu'en surface (dégâts majeurs aux bâtiments).
- **Incertitude géologique** : Passages de failles, venues d'eau sous forte pression ($>10\\text{ bars}$), gaz explosifs (grisou, radon).
- **Sécurité incendie & Ventilation** : Incendies tragiques (Tunnel du Mont-Blanc 1999, Tunnel du Gotthard 2001) imposant des normes de désenfumage ultra-strictes.
- **Grands projets mondiaux** : Tunnel sous la Manche ($50\\text{ km}$), Tunnel de base du Gothard ($57\\text{ km}$), Grand Paris Express ($200\\text{ km}$ de lignes automatiques).

> ⚠️ **Règle d'or** : Le creusement d'un tunnel modifie l'état d'équilibre des contraintes naturelles in situ ($\\sigma_{v0}, \\sigma_{h0}$). Tout réside dans la maîtrise du taux de déconfinement $\\lambda$.`,
    },

    {
      id: 3,
      key: 'applications',
      title: "Applications terrain — Typologies d'ouvrages souterrains",
      icon: '🏗️',
      type: 'applications',
      examples: [
        {
          context: "Tunnels de métro urbain (ex: Métro Grand Paris)",
          text: "Creusement au tunnelier à pression de terre (EPB, Ø 8 à 10 m) à faible profondeur ($15-35\\text{ m}$) sous bâtis denses. Exigence : tassements en surface $< 10\\text{ mm}$.",
        },
        {
          context: "Tunnels routiers et ferroviaires alpins",
          text: "Traversées de massifs rocheux sous forte couverture ($H > 1000\\text{ m}$). Méthode NATM avec minage à l'explosif ou TBM roche ouverte avec boulonnage systématique.",
        },
        {
          context: "Gares souterraines de grande largeur",
          text: "Excavation en voûte parapluie ou par demi-sections successives pour créer des cavernes de 20 à 30 m de portée.",
        },
        {
          context: "Galeries d'assainissement et micro-tunneliers",
          text: "Fonçage de tuyaux (Ø 1000 à 3000 mm) par poussée hydraulique depuis un puits d'attaque vers un puits de sortie.",
        },
        {
          context: "Galeries d'amenée d'eau hydroélectriques",
          text: "Conduites souterraines sous forte pression d'eau interne (jusqu'à 50 bars) avec blindage en tôle d'acier ou précontrainte.",
        },
        {
          context: "Puits d'accès et d'aération",
          text: "Puits verticaux de grand diamètre (Ø 10 à 30 m, profondeur 30-60 m) réalisés par parois moulées ou terrassement à l'avancement par passes.",
        },
      ],
    },

    {
      id: 4,
      key: 'theory',
      title: "Théorie — Méthode Convergence-Confinement (Panet)",
      icon: '📐',
      type: 'theory',
      diagramType: 'soil_profile',
      content: `### 1. L'état de contrainte initial in situ

Avant excavation, le massif rocheux ou le sol subit une contrainte verticale et horizontale :

$$\\sigma_{v0} = \\gamma \\cdot H \\qquad \\sigma_{h0} = K_0 \\cdot \\sigma_{v0}$$

- $H$ = profondeur de couverture [m]
- $\\gamma$ = poids volumique des terres [kN/m³]
- $K_0$ = coefficient de poussée des terres au repos ($K_0 \\approx 1 - \\sin\\varphi$ pour sols, $K_0 \\approx 0{,}5 - 2{,}0$ pour roches).

### 2. Le principe de convergence-confinement

Lors de l'excavation du rayon $R_0$, la paroi du tunnel converge (déplacement radial $u_r$). Le problème associe 3 courbes :

1. **Courbe de convergence du massif (Caractéristique du sol)** : Relation entre la pression interne fictitious de soutien $P_i$ et la convergence $u_r$. Quand $P_i$ diminue de $\\sigma_0$ à $0$, $u_r$ augmente.
2. **Taux de déconfinement $\\lambda$** : $\\lambda = 1 - P_i / \\sigma_0$.
3. **Courbe de réaction du soutènement** : Relation linéaire $P_s = K_s \\cdot (u_r - u_{r0})$ démarrant au point de pose du soutènement (déplacement initial $u_{r0}$).

> **Point d'équilibre (Point d'intersection)** : La pression finale exercée sur le soutènement $P_{eq}$ dépend du moment de pose $u_{r0}$. Poser le soutènement trop tôt exige un soutènement trop lourd ; le poser trop tard provoque l'effondrement du massif.`,
    },

    {
      id: 5,
      key: 'formulas',
      title: "Formules essentielles — Calcul des Tunnels",
      icon: '🔢',
      type: 'formulas',
      diagramType: 'soil_profile',
      formulas: [
        {
          name: "Contrainte géostatique in situ (σ0)",
          latex: "\\sigma_0 = \\gamma \\cdot H \\quad \\text{et} \\quad p_i(\\lambda) = (1 - \\lambda) \\cdot \\sigma_0",
          description: "H = profondeur de couverture [m], γ = poids volumique [kN/m³], λ = taux de déconfinement au front de taille (λ ≈ 0,25 à 0,40 à la pose du soutènement).",
        },
        {
          name: "Pression de rupture du massif rocheux (Loi de Hoek-Brown)",
          latex: "\\sigma_1' = \\sigma_3' + \\sigma_{ci} \\cdot \\left( m_b \\cdot \\frac{\\sigma_3'}{\\sigma_{ci}} + s \\right)^a",
          description: "σci = résistance en compression simple de la roche saine, mb, s, a = paramètres du massif dépendants du GSI (Geological Strength Index).",
        },
        {
          name: "Rayon de la zone plastique autour du tunnel (Rp) — Sol de Mohr-Coulomb",
          latex: "R_p = R_0 \\cdot \\left[ \\frac{2}{\\kappa + 1} \\cdot \\frac{\\sigma_0 + c \\cdot \\cot\\varphi}{P_i + c \\cdot \\cot\\varphi} \\right]^{\\frac{1}{\\kappa - 1}} \\quad \\text{avec } \\kappa = \\frac{1 + \\sin\\varphi}{1 - \\sin\\varphi}",
          description: "R0 = rayon initial du tunnel, c = cohésion, φ = angle de frottement interne. Rp donne l'extension de la roche décompressée.",
        },
        {
          name: "Raideur du soutènement circulaire (Ks)",
          latex: "K_s = \\frac{E_s \\cdot e}{R_0^2 \\cdot (1 - \\nu_s^2)} \\quad [\\text{MPa/m}]",
          description: "Es = module d'élasticité du soutènement (béton projeté ou voussoir), e = épaisseur du revêtement [m], νs = coefficient de Poisson.",
        },
        {
          name: "Profil de tassement en surface (Cuvette de Peck)",
          latex: "S(x) = S_{max} \\cdot \\exp\\left( -\\frac{x^2}{2 \\cdot i^2} \\right) \\quad \\text{avec } i = K \\cdot z_0",
          description: "Smax = tassement maximal à l'axe [mm], x = distance à l'axe du tunnel [m], z0 = profondeur de l'axe, K = paramètre de largeur de cuvette (0,4-0,6 pour argiles, 0,25-0,45 pour sables).",
        },
        {
          name: "Volume de perte de sol (Volume Loss - Vl)",
          latex: "V_l = \\frac{V_s}{V_t} = \\frac{\\sqrt{2\\pi} \\cdot i \\cdot S_{max}}{\\frac{\\pi \\cdot D^2}{4}} \\times 100 \\%",
          description: "Vs = volume de la cuvette de tassement par mètre linéaire, Vt = volume théorique du tunnel. Vl doit être < 0,5% sous les bâtiments.",
        },
      ],
    },

    {
      id: 6,
      key: 'stepbystep',
      title: "Calcul complet — Pression in situ & Tassement de Peck en métro urbain",
      icon: '🔬',
      type: 'stepbystep',
      problem: "Un tunnel de métro Ø D = 8,50 m est creusé à une profondeur d'axe z0 = 25 m dans un limon sablonneux (γ = 19 kN/m³). Le volume de perte de sol mesuré est Vl = 0,6%. Calculer : 1) La contrainte géostatique verticale à l'axe σ0. 2) La largeur i de la cuvette de Peck (K = 0,40). 3) Le tassement maximal en surface Smax à l'axe.",
      steps_demo: [
        { n: 1, text: "Calcul de la contrainte géostatique initiale : σ0 = γ × z0 = 19 × 25 = 475 kPa = 0,475 MPa" },
        { n: 2, text: "Calcul du paramètre de largeur de cuvette i : i = K × z0 = 0,40 × 25 = 10,0 m" },
        { n: 3, text: "Calcul de la section théorique du tunnel : Vt = π × D² / 4 = π × 8,50² / 4 = 56,75 m²/m" },
        { n: 4, text: "Calcul du volume de perte de sol Vs par mètre : Vs = Vl × Vt = 0,006 × 56,75 = 0,3405 m³/m" },
        { n: 5, text: "Formule de la cuvette de Peck à l'axe (x = 0) : Vs = √(2π) × i × Smax → Smax = Vs / [√(2π) × i]" },
        { n: 6, text: "Calcul de Smax : Smax = 0,3405 / [2,5066 × 10,0] = 0,3405 / 25,066 = 0,01358 m = 13,6 mm" },
      ],
      result_latex: "\\sigma_0 = \\textbf{475 kPa} \\qquad i = \\textbf{10,0 m} \\qquad S_{max} = \\textbf{13,6 mm} \\quad \\checkmark",
    },

    {
      id: 7,
      key: 'units',
      title: "Unités en Ingénierie des Tunnels — Tableau de référence",
      icon: '📏',
      type: 'units',
      table: [
        { grandeur: "Pression in situ / Confinement P_i", si: "kPa ou MPa", imperial: "psi / ksf", conversion: "1 MPa = 10 bar = 1000 kPa = 145 psi" },
        { grandeur: "Convergence / Tassement u_r, S", si: "mm", imperial: "inches", conversion: "1 mm = 0,0394 in" },
        { grandeur: "Volume de perte de sol V_l", si: "% du volume du tunnel", imperial: "%", conversion: "1% = 0,01 m³/m par m² de tunnel" },
        { grandeur: "Avancement tunnelier", si: "m/jour", imperial: "ft/day", conversion: "Moyenne TBM : 15 à 30 m/jour" },
        { grandeur: "Vitesse de ventilation / Débit", si: "m/s et m³/s", imperial: "cfm (cubic ft/min)", conversion: "1 m³/s = 2 118,9 cfm" },
        { grandeur: "Résistance roches σ_ci", si: "MPa", imperial: "psi", conversion: "Roche faible : 5-25 MPa | Roche très dure : > 150 MPa" },
        { grandeur: "Pression de confinement front", si: "bar", imperial: "psi", conversion: "1 bar = 100 kPa = 10,2 mCE" },
      ],
      note: "⚠️ ATTENTION : La pression au front d'un tunnelier (EPB ou Bentonite) doit être équilibrée à ± 0,1 bar près pour éviter à la fois le fontis (sous-pression) et le soufflage de surface (sur-pression).",
    },

    {
      id: 8,
      key: 'hypotheses',
      title: "Hypothèses & conditions de validité",
      icon: '📋',
      type: 'hypotheses',
      items: [
        { type: 'info', text: "La méthode Convergence-Confinement 2D classique suppose une section circulaire, un massif homogène et isotrope sous état de contrainte hydrostatique (K0 = 1)." },
        { type: 'info', text: "La formule de la cuvette de Peck suppose une loi de Gauss normale et s'applique principalement aux sols meuble (argiles, sables, limons)." },
        { type: 'warning', text: "ATTENTION : En présence de nappe phréatique sous forte pression, l'eau doit être gérée soit par rabattement, soit par injection de coulis/congélation du sol, soit par tunnelier étanche." },
        { type: 'warning', text: "Ne jamais appliquer la méthode NATM sans instrumentation en temps réel (inclinomètres, extensomètres, cibles topographiques de convergence) : arrêt du creusement obligatoire si la vitesse de convergence ne s'amortit pas." },
        { type: 'tip', text: "Règle de sécurité AFTES : Les galeries de sécurité de secours doivent être implantées à un intervalle maximal de 250 à 400 m le long des tunnels routiers/ferroviaires." },
        { type: 'warning', text: "Courbe incendie RWS / ISO : Un incendie de camion citerne dans un tunnel atteint 1 200°C en 5 minutes. Le béton doit être adjuvanté de fibres polypropylène pour éviter l'éclatement spalling." },
      ],
    },

    {
      id: 9,
      key: 'simple_examples',
      title: "Exemples guidés — Calculs de tunnels",
      icon: '✏️',
      type: 'examples_simple',
      examples: [
        {
          title: "Exemple 1 : Pression au front de taille d'un tunnelier",
          given: "Tunnelier Ø 9,0 m à une profondeur z0 = 30 m sous la nappe (nappe à z = 2 m sous la surface). Poids volumique γ = 20 kN/m³, γw = 10 kN/m³.",
          find: "Pression d'eau u et pression totale minimale d'équilibre au centre du front",
          solution_latex: "u = \\gamma_w \\times (30 - 2) = 10 \\times 28 = 280 \\text{ kPa} = 2{,}80 \\text{ bars} \\qquad \\sigma_v = 20 \\times 30 = 600 \\text{ kPa}",
          result: "Pression d'équilibre théorique P_front ≈ K0·σ'v + u = 0,5 × (600 - 280) + 280 = 160 + 280 = 440 kPa = 4,4 bars.",
        },
        {
          title: "Exemple 2 : Épaisseur d'un anneau de voussoirs en béton",
          given: "Tunnelier Ø 8,50 m, charge verticale de terre p = 500 kPa. Béton C45/55 (fcd = 30 MPa).",
          find: "Épaisseur théorique e de voussoir nécessaire en compression pure (avec Fs = 2,0)",
          solution_latex: "N = p \\times R_0 = 500 \\times 4{,}25 = 2125 \\text{ kN/m} \\qquad e_{min} = \\frac{F_s \\times N}{f_{cd}} = \\frac{2{,}0 \\times 2{,}125}{30} = 0{,}142 \\text{ m}",
          result: "e_min = 14,2 cm → Choisir e = 35 à 40 cm (épaisseur standard intégrant les efforts de poussée des vérins du TBM et les moments de flexion).",
        },
        {
          title: "Exemple 3 : Largeur de la cuvette de tassement en surface",
          given: "Tunnel creusé à z0 = 40 m dans une argile raide (K = 0,50).",
          find: "Largeur totale de la cuvette d'influence b_tot (définie à 3i de chaque côté de l'axe)",
          solution_latex: "i = K \\times z_0 = 0{,}50 \\times 40 = 20{,}0 \\text{ m} \\qquad b_{tot} = 2 \\times 3i = 6 \\times 20{,}0 = 120 \\text{ m}",
          result: "Largeur de la zone d'influence en surface = 120 m (60 m de part et d'autre de l'axe du tunnel).",
        },
      ],
    },

    {
      id: 10,
      key: 'real_examples',
      title: "Exemple réel — Tunnelier du Grand Paris Express",
      icon: '🏢',
      type: 'examples_real',
      diagramType: 'soil_profile',
      examples: [
        {
          context: "Ligne 15 Sud — Tunnelier à Pression de Terre (EPB), Val-de-Marne",
          scenario: "Excavation d'un tunnel Ø 9,80 m dans les marnes et caillasses et calcaire de Saint-Ouen sous présence de nappe phréatique. Couverture 28 m. Traversée sous des immeubles R+5 sur fondations superficielles.",
          decomposition_latex: "\\text{Pression de confinement ajustée à } 3{,}2 \\text{ bars} \\quad \\Rightarrow \\quad V_l = 0{,}25\\% \\quad (S_{max} = 4{,}2 \\text{ mm} < 10 \\text{ mm})",
          lesson: "Grâce à la régulation automatisée du marteau d'extraction et de la vitesse de vis sans fin, le volume de perte a été maintenu à 0,25%. Les suivis au théodolite automatique robotisé n'ont détecté aucun désordre sur les immeubles.",
        },
      ],
    },

    {
      id: 11,
      key: 'diagrams',
      title: "Schéma d'un tunnelier & méthode Convergence-Confinement",
      icon: '📊',
      type: 'interactive_diagram',
      diagramType: 'soil_profile',
      description: "Visualisez la coupe longitudinale d'un tunnelier à pression de terre (roue de coupe, chambre de confinement, vis d'extraction, jupes, érecteur de voussoirs) ainsi que la courbe de convergence du massif rocheux et du soutènement.",
      diagram_description: [
        "Vue en coupe du TBM : Roue de coupe, chambre de pression, vérins de poussée, anneau de voussoirs",
        "Graphique Convergence-Confinement : Courbe du sol, raideur du soutènement Ks, point d'équilibre Peq",
        "Profil de la cuvette de tassement de Peck en surface avec la zone bâties impactée",
      ],
    },

    {
      id: 12,
      key: 'mistakes',
      title: "Erreurs fatales en Ingénierie des Tunnels",
      icon: '⛔',
      type: 'mistakes',
      items: [
        {
          mistake: "Relâcher la pression au front de taille d'un tunnelier",
          trap: "Laisser chuter la pression de marinage dans la chambre d'excavation lors d'un changement de molettes de la roue de coupe",
          fix: "Maintenir la pression de confinement à l'aide de bentonite sous pression ou d'air comprimé hyperbare avec sas lors de toute intervention dans la chambre de coupe.",
        },
        {
          mistake: "Poser le soutènement trop tard en méthode NATM",
          trap: "Laisser le massif se déconfiner au-delà de la déformation plastique critique (dépassant le point d'inflexion de la courbe de convergence)",
          fix: "Suivre scrupuleusement la vitesse de convergence. Si les convergences ne se stabilisent pas dans les 48h, renforcer immédiatement le soutènement (boulons supplémentaires, cintres profilés).",
        },
        {
          mistake: "Ignorer le risque d'éclatement du béton sous incendie (Spalling)",
          trap: "Utiliser un béton haute performance non protégé dans un tunnel routier sans fibres polypropylène",
          fix: "Sous incendie RWS (1200°C), l'eau libre s'évapore et fait éclater le béton par surpression d'vapeur. Incorporer 1,5 à 2 kg/m³ de micro-fibres polypropylène qui fondent à 160°C en créant des canaux de dégazage.",
        },
        {
          mistake: "Sous-estimer l'effet de groupe de plusieurs tunneliers parallèles",
          trap: "Calculer les tassements de deux tunnels jumeaux en additionnant simplement deux cuvettes de Peck indépendantes",
          fix: "Le creusement du second tunnel détend le sol déjà remanié par le premier. Appliquer un coefficient de sur-tassement de 1,3 à 1,5 sur le deuxième passage.",
        },
      ],
    },

    {
      id: 13,
      key: 'tips',
      title: "Astuces de l'ingénieur tunnel — Terrain & Recommandations AFTES",
      icon: '💡',
      type: 'tips',
      tips: [
        "Recommandations AFTES (Association Française des Tunnels et de l'Espace Souterrain) : La référence française incontournable pour le choix des méthodes de soutènement et la classification des massifs.",
        "Règle de pré-dimensionnement des voussoirs : Épaisseur e ≈ D / 20 à D / 24 pour un tunnelier en béton armé (ex: e = 40 cm pour D = 9,0 m).",
        "Injecteur de bourrage de l'espace annulaire (Grout) : L'espace entre le rocher/sol et le voussoir (vide de jupe ~ 10-15 cm) doit être injecté immédiatement au mortier de bourrage sous pression constante (2-4 bars).",
        "Vitesse de convergence en NATM : Une vitesse de convergence < 1 mm/jour indique une stabilisation de la cavité. Si v > 10 mm/jour → Alerte rouge, renforcer le soutènement.",
        "Congélation de sol : Technique ultime pour traverser des aquifères saturés ou des sols très instables. On fait circuler de la saumure à -30°C ou de l'azote liquide (-196°C) pour créer un bouchon de sol gelé étanche.",
        "Drainage et étanchéité : Systématiquement poser une géomembrane d'étanchéité en PVC/PEHD de 2 mm protégée par un géotextile avant le coulage du béton de revêtement définitif.",
      ],
    },

    {
      id: 14,
      key: 'normes',
      title: "Normes & Guides de Référence — Tunnels",
      icon: '📜',
      type: 'norms',
      norms: [
        { code: "Recommandations AFTES", description: "Ensemble des textes de référence français pour la conception, le soutien, le creusement et la sécurité des tunnels." },
        { code: "CETU (Centre d'Études des Tunnels)", description: "Dossier pilote des tunnels — Guides techniques sur la ventilation, le génie civil, l'éclairage et la sécurité." },
        { code: "Circulaire Interministérielle n° 2000-63", description: "Réglementation relative à la sécurité dans les tunnels du réseau routier national." },
        { code: "NF EN 1997-1 (Eurocode 7)", description: "Calcul géotechnique — Application aux ouvrages souterrains et soutènements." },
        { code: "NF EN 14487", description: "Béton projeté — Spécifications, performances et conformité pour le soutènement des cavités." },
        { code: "ITA / AITES (International Tunnelling Association)", description: "Directives internationales pour la gestion des risques et la conception des tunneliers." },
      ],
    },

    {
      id: 15,
      key: 'exercises',
      title: "Exercices Ingénierie des Tunnels — 3 niveaux",
      icon: '✍️',
      type: 'exercises',
      exercises: [
        {
          id: 'ex_tun_1',
          number: 1,
          difficulty: 'Facile',
          text: "Un tunnel est situé à une profondeur H = 45 m dans une roche de poids volumique γ = 26 kN/m³. Calculez la contrainte géostatique verticale initiale σ0.",
          hint: "σ0 = γ · H.",
          answer_latex: "\\sigma_0 = 26 \\times 45 = 1\\,170 \\text{ kPa} = 1{,}17 \\text{ MPa}",
          answer_text: "σ0 = 1 170 kPa = 1,17 MPa",
        },
        {
          id: 'ex_tun_2',
          number: 2,
          difficulty: 'Moyen',
          text: "Pour un tunnelier de diamètre D = 10,0 m creusant à z0 = 30 m avec K = 0,50, calculez le tassement maximal Smax si le volume de perte de sol mesuré est Vs = 0,40 m³/m de tunnel.",
          hint: "i = K · z0. Smax = Vs / [√(2π) · i].",
          answer_latex: "i = 0{,}50 \\times 30 = 15{,}0 \\text{ m} \\qquad S_{max} = \\frac{0{,}40}{\\sqrt{2\\pi} \\times 15{,}0} = \\frac{0{,}40}{37{,}599} = 0{,}01064 \\text{ m} = 10{,}6 \\text{ mm}",
          answer_text: "Smax = 10,6 mm à l'axe du tunnel en surface.",
        },
        {
          id: 'ex_tun_3',
          number: 3,
          difficulty: 'Difficile',
          text: "Un soutènement en béton projeté d'épaisseur e = 20 cm est posé dans un tunnel de rayon R0 = 4,0 m. Si E_s = 20 000 MPa et ν_s = 0,20, calculez la raideur du soutènement K_s (en MPa/m).",
          hint: "K_s = (E_s · e) / [R0² · (1 - ν_s²)]. Convertir e et R0 en mètres.",
          answer_latex: "K_s = \\frac{20\\,000 \\times 0{,}20}{4{,}0^2 \\times (1 - 0{,}20^2)} = \\frac{4\\,000}{16{,}0 \\times 0{,}96} = \\frac{4\\,000}{15{,}36} = 260{,}42 \\text{ MPa/m}",
          answer_text: "Ks = 260,4 MPa/m (Raideur radiale du soutien en béton projeté).",
        },
      ],
    },

    {
      id: 16,
      key: 'corrections',
      title: "Corrections détaillées",
      icon: '✅',
      type: 'corrections',
      note: "Retrouvez les formules complètes, graphiques et explications géotechniques en cliquant sur 'Voir la correction'.",
    },

    {
      id: 17,
      key: 'quiz',
      title: "Quiz Ingénierie des Tunnels — 3 questions",
      icon: '🎯',
      type: 'quiz',
      questions: [
        {
          id: 'q_tun_1',
          question: "Quel est le principe fondamental de la méthode de soutènement en tunnel (Convergence-Confinement) ?",
          options: [
            { id: 'a', text: "Le soutènement doit supporter 100% du poids des terres sans déformation" },
            { id: 'b', text: "On laisse le massif se déconfiner partiellement pour mobiliser sa propre résistance avant d'opposer la raideur du soutènement" },
            { id: 'c', text: "On remplit toute la cavité de béton avant de creuser" },
            { id: 'd', text: "Le soutien n'est nécessaire qu'en surface" },
          ],
          correct: 'b',
          explanation: "La méthode Convergence-Confinement montre qu'en permettant un déplacement contrôlé u_r du massif (déconfinement λ), la pression P_i nécessaire pour équilibrer la cavité diminue fortement, permettant un soutènement optimisé.",
        },
        {
          id: 'q_tun_2',
          question: "Quel type de tunnelier utilise-t-on préférentiellement sous la nappe phréatique dans des sables ou graviers perméables ?",
          options: [
            { id: 'a', text: "Tunnelier à roche ouverte (Gripper TBM)" },
            { id: 'b', text: "Tunnelier à Pression de Boue (Bentonite / Hydroshield)" },
            { id: 'c', text: "Marteau-piqueur manuel" },
            { id: 'd', text: "Pelle mécanique sous voûte" },
          ],
          correct: 'b',
          explanation: "Le tunnelier à pression de boue (bentonitique) forme un cake étanche au front de taille et équilibre la pression hydrostatique même dans les sols très perméables sous forte nappe.",
        },
        {
          id: 'q_tun_3',
          question: "Dans la formule du tassement en surface de Peck, que représente le paramètre i ?",
          options: [
            { id: 'a', text: "L'inclinaison du tunnel" },
            { id: 'b', text: "La distance horizontale entre l'axe et le point d'inflexion de la cuvette de tassement" },
            { id: 'c', text: "L'intensité de la pluie en surface" },
            { id: 'd', text: "L'épaisseur du voussoir" },
          ],
          correct: 'b',
          explanation: "Le paramètre i est la demi-largeur de la cuvette à son point d'inflexion (i = K · z0). La cuvette totale s'étend approximativement sur 3i de chaque côté de l'axe.",
        },
      ],
    },

    {
      id: 18,
      key: 'exam_questions',
      title: "Questions d'examen — Niveau Master Travaux Souterrains",
      icon: '🎓',
      type: 'exam',
      questions: [
        "Démontrez l'équation différentielle de la courbe de convergence d'un massif élasto-plastique obéissant au critère de Mohr-Coulomb sous contrainte hydrostatique σ0. Exprimez le rayon de plastification Rp.",
        "Comparez les tunneliers à Pression de Terre (EPB) et à Pression de Boue (Slurry Shield) : principes d'équilibrage du front, domaine de granulométrie des sols, traitement des marins et gestion du confinement.",
        "Détaillez le dimensionnement d'un anneau de voussoirs sous sollicitations d'un tunnelier : phases de manutention, poussée des vérins du TBM, effet de joint d'anneau (décalage des joints) et poussée des terres à long terme.",
        "Présentez les principes de conception de la ventilation de sécurité dans un tunnel routier bi-directionnel de 3 km sous incendie de 100 MW (système semi-transversal, trappes d'extraction, vitesse de balayage critique).",
      ],
    },

    {
      id: 19,
      key: 'interview_questions',
      title: "Questions d'entretien — Ingénieur Tunnel / Géotechnicien",
      icon: '💼',
      type: 'interview',
      questions: [
        {
          question: "Comment réagissez-vous si sur chantier NATM la vitesse de convergence mesurée passe subitement de 2 mm/jour à 15 mm/jour sur trois sections consécutives ?",
          answer_hint: "Procédure d'urgence AFTES : 1. Arrêt immédiat des travaux de terrassement au front. 2. Évacuation du personnel non indispensable. 3. Pose immédiate d'un contre-voûte provisoire en béton projeté au radier et ajout d'une volée de boulons radiaux sous pression. 4. Convocation du géotechnicien et ré-analyse des données géologiques.",
        },
        {
          question: "Pourquoi ajoute-t-on des fibres synthétiques (polypropylène) dans le béton des voussoirs de tunnels ?",
          answer_hint: "Pour prévenir l'éclatement explosif du béton (spalling) en cas d'incendie majeur. À partir de 160°C, les fibres d'environ 18-30 µm fondent, créant un réseau micro-poreux permettant à la vapeur d'eau emprisonnée de s'échapper sans faire éclater la structure.",
        },
        {
          question: "Qu'est-ce que le 'volume loss' (Vl) lors du creusement d'un tunnelier et quelle est la cible en milieu urbain dense ?",
          answer_hint: "Le volume loss est le pourcentage de volume d'excavation en trop par rapport au volume théorique du tunnel (dû au vide de jupe, déconfinement au front, sur-excavation). En ville sous des bâtiments sensibles, la cible est Vl ≤ 0,3% à 0,5% pour limiter Smax < 10 mm.",
        },
      ],
    },

    {
      id: 20,
      key: 'practical_case',
      title: "Cas pratique — Traversée souterraine sous une ligne ferroviaire",
      icon: '🔧',
      type: 'practical',
      scenario: "Étude de cas — Tunnelier EPB Ø 8,80 m sous voies SNCF (Couverture H = 18 m)",
      description: `**Mise en situation** : Bureau d'études d'ouvrages souterrains. Passage d'un tunnelier sous un faisceau de 6 voies ferrées. Sol : alluvions de Marne (c' = 5 kPa, φ' = 30°, E = 45 MPa). Nappe à 5 m de profondeur. Tolérance SNCF : tassement différentiel < 1/1000 et S_max < 8 mm.`,
      resolution_latex_1: "z_0 = 18 + 4{,}40 = 22{,}4 \\text{ m} \\qquad i = 0{,}45 \\times 22{,}4 = 10{,}08 \\text{ m}",
      resolution_latex_2: "V_t = \\frac{\\pi \\times 8{,}8^2}{4} = 60{,}82 \\text{ m}^3/\\text{m} \\quad \\Rightarrow \\text{Pour } S_{max} \\le 8 \\text{ mm} : V_s \\le \\sqrt{2\\pi} \\times 10{,}08 \\times 0{,}008 = 0{,}202 \\text{ m}^3/\\text{m}",
      resolution_latex_3: "V_l = \\frac{0{,}202}{60{,}82} = 0{,}33\\% \\quad \\Rightarrow \\text{Consigne TBM : Pression front = 2,8 bars + bourrage mortier 3,5 bars}",
      conclusion: "Programme d'injection systématique de coulis au front et bourrage immédiat de jupe. Suivi topographique automatisé par prismes sur rails toutes les 15 minutes. Tassement réel mesuré : S_max = 5,4 mm ✓ (Conforme aux exigences SNCF).",
    },

    {
      id: 21,
      key: 'summary',
      title: "Résumé exécutif — Ingénierie des Tunnels en 6 points",
      icon: '📋',
      type: 'summary',
      content: `### L'Ingénierie des Tunnels en 6 fondamentaux

1. **Méthodes** : Conventionnelle (NATM/minage + béton projeté) vs Mécanisée (Tunneliers EPB/Slurry + voussoirs).
2. **Contrainte initiale** : $\\sigma_{v0} = \\gamma \\cdot H$, $\\sigma_{h0} = K_0 \\cdot \\sigma_{v0}$ — l'excavation rompt l'équilibre naturel.
3. **Convergence-Confinement** : Mobiliser la résistance du massif en contrôlant le taux de déconfinement $\\lambda$.
4. **Tassements de Peck** : Cuvette $S(x) = S_{max} \\cdot \\exp(-x^2 / 2i^2)$ avec $i = K \\cdot z_0$ — maîtriser le Volume Loss $V_l < 0{,}5\\%$.
5. **Revêtement** : Voussoirs béton armé/fibres (e $\\approx D/20$) ou béton projeté armé de cintres et boulons radiaux.
6. **Sécurité incendie** : Fibres polypropylène contre l'éclatement, galeries de secours tous les $250-400\\text{ m}$, désenfumage.`,
    },

    {
      id: 22,
      key: 'key_points',
      title: "Points clés à mémoriser — Tunnels",
      icon: '⭐',
      type: 'keypoints',
      points: [
        "En tunnel, le sol/rocher est le matériau de structure principal (principe AFTES)",
        "TBM à Pression de Terre (EPB) pour sols argilo-limoneux | Pression de Boue pour sables sous nappe",
        "Convergence-Confinement : Peq dépend de la raideur Ks et du retard de pose u0",
        "Formule de Peck : S(x) = Smax · exp(-x²/2i²) avec i = K·z0 (largeur d'influence)",
        "Volume Loss (Vl) < 0,5% en milieu urbain pour préserver le bâti de surface",
        "Épaisseur d'anneau de voussoirs e ≈ D / 20 à D / 24",
        "Fibres polypropylène indispensables contre le spalling sous incendie RWS (1200°C)",
      ],
    },

    {
      id: 23,
      key: 'self_assessment',
      title: "Auto-évaluation — Ingénierie des Tunnels",
      icon: '🏆',
      type: 'self_assessment',
      description: "Validez vos compétences en travaux souterrains et tunnels :",
      objectives: [
        "Je connais les différences entre creusement conventionnel (NATM) et mécanisé (TBM EPB/Slurry)",
        "Je comprends la méthode de Convergence-Confinement et l'influence du moment de pose du soutènement",
        "Je sais calculer la cuvette de tassement en surface par la formule de Peck (Smax, i, Vl)",
        "Je sais évaluer la contrainte géostatique in situ σ0 = γ·H",
        "Je connais les éléments d'un tunnelier et les règles d'injection du vide annulaire",
        "Je comprends les dispositifs de sécurité incendie et de désenfumage en tunnel",
        "J'ai résolu les 3 exercices de tunnels avec succès",
        "J'ai obtenu 3/3 au quiz d'ingénierie des tunnels",
      ],
    },
  ],

  quickQuiz: {
    question: "Quel est le rôle principal du soutien provisoire en méthode de creusement conventionnelle (NATM) ?",
    options: [
      { id: 'a', label: "A) Supporter 100% du poids des terres sans déformation" },
      { id: 'b', label: "B) Contrôler le déconfinement du massif pour lui permettre de mobiliser sa propre résistance" },
      { id: 'c', label: "C) Assurer l'étanchéité définitive contre l'eau" },
    ],
    correct: 'b',
    explanation: "En méthode NATM (Convergence-Confinement), le soutènement accompagne la déformation contrôlée du sol (déconfinement) pour mobiliser l'effet de voûte naturel du massif.",
  },
};
