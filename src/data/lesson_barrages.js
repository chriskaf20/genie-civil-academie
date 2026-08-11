// ── Lesson: Conception & Sécurité des Barrages — Module 18 ─────────────────────
export const lesson_barrages = {
  moduleId: 18,
  slug: 'barrages',
  lessonIndex: 1,
  title: "Conception, Stabilité & Sécurité des Barrages",
  subtitle: "Module 18 — Conception & Sécurité des Barrages",
  level: 'Avancé',
  duration: '40h',
  diagramType: 'soil_profile',
  tags: ['Barrages', 'Sous-pressions', 'Poussée Hydrostatique', 'Évacuateur de crues', 'Auscultation', 'Sécurité', 'Stabilité'],

  steps: [
    {
      id: 1,
      key: 'definition',
      title: "Définition — L'Ingénierie des Barrages",
      icon: '📖',
      type: 'definition',
      fr: 'Conception & Sécurité des Barrages',
      en: 'Dam Engineering & Safety',
      metier: "Pratiquée par les ingénieurs hydrauliciens, géotechniciens d'ouvrages d'art, experts du CIGB/ICOLD et gestionnaires d'infrastructures hydroélectriques (EDF Hydro, Compagnie Nationale du Rhône).",
      content: `L'**ingénierie des barrages** traite de la **conception, du calcul de stabilité, de la construction et de la surveillance** des ouvrages de retenue d'eau.

### Les 4 grandes typologies de barrages :
1. **Barrages Poids en béton (ou Béton Compacté au Rouleau - BCR)** :
   - Équilibre assuré uniquement par leur propre poids ($P$) qui s'oppose à la poussée hydrostatique ($F_h$).
   - Adapté aux vallées larges avec rocher de fondation résistant.
2. **Barrages Voûtes en béton** :
   - Forme d'arc à double courbure qui reporte la totalité de la poussée d'eau sur les rives rocheuses (ancrages d'appuis).
   - Nécessite une vallée étroite avec un rocher de rive d'excellente qualité mécanique.
3. **Barrages en Remblai (Terre ou Enrochements)** :
   - Ouvrages souples constitués de matériaux naturels compactés. Équipés d'un **noyau étanche en argile** ou d'un **masque amont** (béton ou bitume).
   - Adaptés aux fondations meubles ou déformables.
4. **Barrages Contreforts** :
   - Voile amont mince soutenu par des contreforts verticaux espacés.

> 💡 **Classification réglementaire** : En France, les barrages sont classés en A, B, C selon leur hauteur $H$ et le volume retenu $V$. Un barrage de Classe A fait $H \\ge 20\\text{ m}$.`,
    },

    {
      id: 2,
      key: 'importance',
      title: "Pourquoi la sécurité des barrages est absolue",
      icon: '⚠️',
      type: 'importance',
      content: `Un barrage retient une **énergie potentielle gigantesque**. Sa rupture provoque une onde de submersion dévastatrice.

- **Ruptures historiques tragiques** : Rupture du barrage de Malpasset en France (1959, 423 morts - rupture de coin rocheux en rive gauche), Banqiao en Chine (1975, crue centennale exceptionnelle, > 25 000 morts), Brumadinho au Brésil (2019, rupture de digue de stérile minier).
- **Phénomènes de ruine principaux** :
  - **Poussée d'eau & Sous-pressions** : Renversement ou glissement sur le fil de fondation.
  - **Renard hydraulique (Piping)** : Érosion interne progressive dans les barrages en terre sous l'effet des infiltrations.
  - **Surverse (Overtopping)** : Submersion par une crue mal évacuée entraînant l'érosion rapide de la crête des barrages en remblai.
- **Auscultation en continu** : Mesures piézométriques, déplacements par pendules et extensomètres 24h/24.

> ⚠️ **Règle d'or** : "Un barrage ne meurt jamais de vieillesse s'il est bien ausculté et entretenu." L'évacuateur de crues doit être dimensionné pour la **Crue Maximale Probable (CMP / PMF)**.`,
    },

    {
      id: 3,
      key: 'applications',
      title: "Applications terrain — Usages des retenues d'eau",
      icon: '🏗️',
      type: 'applications',
      examples: [
        {
          context: "Production Hydroélectrique (Énergie renouvelable)",
          text: "Centres de stockage par pompage-turbinage (STEP) et usines de haute/moyenne chute (ex: Barrage de Roselend, Grande Dixence $H = 285\\text{ m}$).",
        },
        {
          context: "Alimentation en eau potable & Irrigation",
          text: "Retenues pluriannuelles assurant le soutien d'étiage des rivières et l'irrigation agricole en période de sécheresse (ex: Barrage de Serre-Ponçon).",
        },
        {
          context: "Écrêtement des crues majeures",
          text: "Barrages écrêteurs de crue maintenus vides ou partiellement remplis pour stocker les pointes de crue et protéger les agglomérations en aval.",
        },
        {
          context: "Évacuateurs de crues de surface",
          text: "Déversoirs en crête avec évacuateurs en saut de ski, déversoirs tulipe (Morning Glory) ou vannes secteur de grande capacité.",
        },
        {
          context: "Vidanges de fond & Prises d'eau",
          text: "Conduites blindées à forte pression équipées de vannes de garde (vannes chenilles ou papillon) et de vannes de réglage (vannes jet creux).",
        },
        {
          context: "Réseaux d'auscultation automatisés",
          text: "Centrales d'acquisition de données analysant en temps réel les pressions interstitielles, débits de fuite et déformations au millimètre près.",
        },
      ],
    },

    {
      id: 4,
      key: 'theory',
      title: "Théorie — Forces appliquées sur un barrage poids",
      icon: '📐',
      type: 'theory',
      diagramType: 'soil_profile',
      content: `### 1. Poussée hydrostatique amont ($F_h$)

Pour une hauteur d'eau $H$, la poussée hydrostatique horizontale s'exerce au tiers inférieur de la hauteur ($h_F = H/3$) :

$$F_h = \\frac{1}{2} \\cdot \\rho_w \\cdot g \\cdot H^2$$

- $\\rho_w = 1000\\text{ kg/m}^3$ (masse volumique de l'eau)
- $g = 9{,}81\\text{ m/s}^2$
- $H$ = hauteur d'eau retenue [m]

### 2. Les sous-pressions sous la base ($U$)

L'eau s'infiltre sous la fondation et exerce une poussée verticale vers le haut (sous-pression $U$) qui réduit le poids effectif de l'ouvrage.

Sans drainage (répartition triangulaire de $p_u = \\rho_w g H$ à amont jusqu'à $0$ à aval) :

$$U = \\frac{1}{2} \\cdot \\alpha \\cdot \\rho_w \\cdot g \\cdot H \\cdot B$$

- $B$ = largeur de la base du barrage [m]
- $\\alpha$ = coefficient de sous-pression ($\\alpha \\approx 0{,}8 - 1{,}0$ sans drainage, $\\alpha \\approx 0{,}3 - 0{,}5$ avec voile de drainage performant).

### 3. Poids propre du profil ($P$)

$$P = \\frac{1}{2} \\cdot \\rho_c \\cdot g \\cdot H \\cdot B \\quad (\\text{profil triangulaire b/h } \\approx 0{,}7 - 0{,}8)$$
où $\\rho_c \\approx 2400\\text{ kg/m}^3$ pour le béton.`,
    },

    {
      id: 5,
      key: 'formulas',
      title: "Formules essentielles — Stabilité & Hydraulique",
      icon: '🔢',
      type: 'formulas',
      diagramType: 'soil_profile',
      formulas: [
        {
          name: "Coefficient de sécurité au glissement (Fs,glissement)",
          latex: "F_{s,gliss} = \\frac{f \\cdot (P - U) + c \\cdot B}{F_h} \\ge 1{,}5",
          description: "f = tan(φ) = coefficient de frottement béton/rocher (f ≈ 0,65 à 0,75), c = cohésion de la fondation [kPa], P = poids propre, U = sous-pression, Fh = poussée d'eau.",
        },
        {
          name: "Coefficient de sécurité au renversement (Fs,renversement)",
          latex: "F_{s,renv} = \\frac{\\sum M_{stabilisants} / A}{\\sum M_{renversants} / A} = \\frac{P \\cdot (2B/3)}{F_h \\cdot (H/3) + U \\cdot (2B/3)} \\ge 1{,}5",
          description: "Calcul des moments par rapport au pied aval A du barrage. Le vecteur résultant doit rester dans le tiers central de la base.",
        },
        {
          name: "Condition du tiers central (Non-traction en parement amont)",
          latex: "e = \\frac{B}{6} - \\frac{M_{net}}{N} \\le \\frac{B}{6} \\quad \\Rightarrow \\quad \\sigma_{amont} = \\frac{N}{B} \\cdot \\left(1 - \\frac{6e}{B}\\right) \\ge 0",
          description: "e = excentricité de la résultante par rapport au centre de la base. Évite toute ouverture de fissure au parement amont sous forte retenue.",
        },
        {
          name: "Débit d'évacuateur de crue à surface libre (Formule de Poleni)",
          latex: "Q = \\mu \\cdot b \\cdot \\sqrt{2g} \\cdot H_d^{3/2}",
          description: "μ = coefficient de débit (0,40 à 0,49 selon le profil Creager de la crête), b = largeur utile du déversoir [m], Hd = charge d'eau sur la crête [m].",
        },
        {
          name: "Vitesse au pied du saut de ski / Bassin d'amortissement",
          latex: "v_{pied} = \\sqrt{2g \\cdot (H_{retenue} - h_{lame})} \\quad [\\text{m/s}]",
          description: "Nécessite la disposition de cuillères de dissipation (saut de ski) ou de bassins à dents Rehbock pour neutraliser l'énergie cinétique.",
        },
        {
          name: "Gradients d'infiltration & Risque de renard (Loi de Darcy / Bligh)",
          latex: "i = \\frac{\\Delta h}{L_{ligne\\,de\\,fuite}} \\le i_{crit} = \\frac{\\gamma'}{\\gamma_w} \\approx 1{,}0",
          description: "L = longueur du cheminement d'eau sous l'ouvrage. Si i > icrit / Fs → piping (érosion interne par entraînement des fines).",
        },
      ],
    },

    {
      id: 6,
      key: 'stepbystep',
      title: "Calcul complet — Stabilité au glissement d'un barrage poids (H = 50 m)",
      icon: '🔬',
      type: 'stepbystep',
      problem: "Soit un profil triangulaire de barrage poids béton (ρc = 2 400 kg/m³) de hauteur H = 50 m et de largeur de base B = 38 m. La retenue est pleine (H_eau = 50 m). Frottement fondation f = tan(φ) = 0,70 (cohésion c = 0). Coefficient de sous-pression α = 0,40 (voile de drainage actif). Calculer : 1) La poussée hydrostatique Fh. 2) Le poids propre P. 3) La sous-pression U. 4) Le coefficient de sécurité au glissement Fs,gliss.",
      steps_demo: [
        { n: 1, text: "Calcul de la poussée hydrostatique Fh : Fh = 0,5 × 10 × 50² = 0,5 × 10 × 2500 = 12 500 kN/m" },
        { n: 2, text: "Calcul du poids propre du béton P (profil triangulaire) : P = 0,5 × (2,4 × 10) × 50 × 38 = 0,5 × 24 × 1900 = 22 800 kN/m" },
        { n: 3, text: "Calcul de la sous-pression sous la base U : U = 0,5 × α × γw × H × B = 0,5 × 0,40 × 10 × 50 × 38 = 3 800 kN/m" },
        { n: 4, text: "Calcul de la force normale effective résultante N' : N' = P - U = 22 800 - 3 800 = 19 000 kN/m" },
        { n: 5, text: "Résistance au glissement disponible : R_gliss = f × N' = 0,70 × 19 000 = 13 300 kN/m" },
        { n: 6, text: "Calcul du facteur de sécurité Fs,gliss : Fs,gliss = R_gliss / Fh = 13 300 / 12 500 = 1,064 → Inconforme ! (Fs < 1,50)" },
        { n: 7, text: "Correction ingénieur : Augmenter la base B à 42 m ou intensifier le système de drainage (abattre α à 0,25) pour obtenir Fs ≥ 1,50." },
      ],
      result_latex: "F_h = \\textbf{12 500 kN/m} \\quad P = \\textbf{22 800 kN/m} \\quad U = \\textbf{3 800 kN/m} \\quad F_{s,gliss} = \\textbf{1{,}06} < 1{,}50 \\quad \\text{(Ajustement requis)}",
    },

    {
      id: 7,
      key: 'units',
      title: "Unités en Ingénierie des Barrages — Tableau de référence",
      icon: '📏',
      type: 'units',
      table: [
        { grandeur: "Poussée / Poids / Sous-pression", si: "kN/m ou MN/m", imperial: "kips/ft", conversion: "1 MN/m = 1000 kN/m = 68,5 kip/ft" },
        { grandeur: "Volume de retenue", si: "hm³ (millions m³) ou m³", imperial: "acre-feet", conversion: "1 hm³ = 1 000 000 m³ = 810,7 acre-feet" },
        { grandeur: "Débit de crue Q", si: "m³/s", imperial: "cfs (cubic feet/sec)", conversion: "1 m³/s = 35,31 cfs" },
        { grandeur: "Pression interstitielle u", si: "kPa ou bar", imperial: "psi", conversion: "1 bar = 100 kPa = 10,2 mCE" },
        { grandeur: "Débit de fuite de drainage", si: "L/min ou L/s", imperial: "gpm", conversion: "1 L/s = 60 L/min = 15,85 gpm" },
        { grandeur: "Déplacement par pendule", si: "mm ou 1/10 mm", imperial: "mils / in", conversion: "1 mm = 1000 µm" },
        { grandeur: "Module d'élasticité rocher Er", si: "GPa", imperial: "ksi", conversion: "1 GPa = 1000 MPa = 145 000 psi" },
      ],
      note: "⚠️ ATTENTION : Les volumes des réservoirs s'expriment couramment en hm³ ($1\\text{ hm}^3 = 10^6\\text{ m}^3$). Le lac de Serre-Ponçon retient $1270\\text{ hm}^3$.",
    },

    {
      id: 8,
      key: 'hypotheses',
      title: "Hypothèses & conditions de validité",
      icon: '📋',
      type: 'hypotheses',
      items: [
        { type: 'info', text: "Le calcul de stabilité au glissement 2D classique suppose un bloc rigide indéformable reposant sur une surface de fondation plane et continue." },
        { type: 'info', text: "La répartition des sous-pressions dépend directement de l'efficacité et de la pérennité du réseau de drains verticaux dans la galerie d'inspection." },
        { type: 'warning', text: "ATTENTION : Un réseau de drains non entretenu s'entartre et se bouche. Si α passe de 0,3 à 0,9, la sous-pression triple et le barrage peut glisser !" },
        { type: 'warning', text: "Surverse sur barrage en remblai : Interdiction absolue ! Une surverse de quelques centimètres pendant 2 heures suffit à éroder et détruire une digue en terre." },
        { type: 'tip', text: "Règle de pré-dimensionnement d'un barrage poids : La largeur de base B doit être égale à environ 0,75 à 0,85 fois la hauteur H (B/H ≈ 0,75-0,85)." },
        { type: 'warning', text: "Séisme de calcul (AEE / SDE) : L'action sismique introduit la formule de Westergaard (masse d'eau entraînée s'ajoutant à la poussée d'eau)." },
      ],
    },

    {
      id: 9,
      key: 'simple_examples',
      title: "Exemples guidés — Calculs de barrages",
      icon: '✏️',
      type: 'examples_simple',
      examples: [
        {
          title: "Exemple 1 : Poussée hydrostatique sur un parement vertical de 40 m",
          given: "Hauteur d'eau H = 40 m, parement amont vertical",
          find: "Force de poussée Fh et position de son point d'application",
          solution_latex: "F_h = \\frac{1}{2} \\times 10 \\times 40^2 = 5 \\times 1600 = 8\\,000 \\text{ kN/m} \\quad (8 \\text{ MN/m}) \\qquad h_F = \\frac{40}{3} = 13{,}33 \\text{ m du bas}",
          result: "Fh = 8 000 kN par mètre linéaire, appliquée à 13,33 m au-dessus de la base.",
        },
        {
          title: "Exemple 2 : Débit d'un évacuateur de crue (Déversoir Creager)",
          given: "Largeur du déversoir b = 25 m, charge d'eau sur la crête Hd = 3,0 m, coefficient de débit μ = 0,48",
          find: "Débit d'évacuation Q",
          solution_latex: "Q = 0{,}48 \\times 25 \\times \\sqrt{2 \\times 9{,}81} \\times 3{,}0^{1{,}5} = 12 \\times 4{,}429 \\times 5{,}196 = 276 \\text{ m}^3/\\text{s}",
          result: "Q = 276 m³/s d'eau évacuée en crête.",
        },
        {
          title: "Exemple 3 : Calcul de l'excentricité de la résultante sous la base",
          given: "Largeur B = 30 m, Poids P = 15 000 kN/m, Moment net par rapport au centre M_c = 15 000 kN·m/m",
          find: "Excentricité e et vérification du tiers central (e ≤ B/6 = 5,0 m)",
          solution_latex: "e = \\frac{M_c}{N} = \\frac{15\\,000}{15\\,000} = 1{,}00 \\text{ m} \\le 5{,}00 \\text{ m} \\quad \\checkmark",
          result: "e = 1,00 m ≤ 5,00 m → La résultante reste bien dans le tiers central. Pas de traction amont.",
        },
      ],
    },

    {
      id: 10,
      key: 'real_examples',
      title: "Exemple réel — Traitement des sous-pressions au Barrage de Vouglans",
      icon: '🏢',
      type: 'examples_real',
      diagramType: 'soil_profile',
      examples: [
        {
          context: "Barrage voûte de Vouglans (Jura, H = 130 m, retenue 600 hm³)",
          scenario: "Lors des remplissages historiques, montée des sous-pressions au pied amont des plots centraux. Installation d'un réseau de drains profonds depuis la galerie de fondation et injection d'un voile de micro-ciment.",
          decomposition_latex: "\\text{Réduction du coefficient de sous-pression } \\alpha \\text{ de } 0{,}75 \\text{ à } 0{,}22 \\quad \\Rightarrow \\quad F_{s,gliss} > 2{,}1",
          lesson: "La réalisation de forages de drainage débouchants et l'auscultation piézométrique quotidienne garantissent la stabilité au glissement des appuis rocheux.",
        },
      ],
    },

    {
      id: 11,
      key: 'diagrams',
      title: "Schéma d'un barrage poids — Bilan des forces & sous-pressions",
      icon: '📊',
      type: 'interactive_diagram',
      diagramType: 'soil_profile',
      description: "Visualisez la coupe transversale d'un barrage poids en béton : parement amont vertical, parement aval incliné, poussée d'eau hydrostatique Fh, poids propre P, sous-pressions U avec effet du voile de drainage, et galerie d'inspection.",
      diagram_description: [
        "Coupe du barrage avec repérage du parement amont, parement aval et galerie d'auscultation",
        "Triangle de pression hydrostatique et trapèze/triangle de sous-pression sous le fil de fondation",
        "Vecteur de la résultante générale des forces et fuseau du tiers central de la base",
      ],
    },

    {
      id: 12,
      key: 'mistakes',
      title: "Erreurs fatales en Ingénierie des Barrages",
      icon: '⛔',
      type: 'mistakes',
      items: [
        {
          mistake: "Négliger le nettoyage et l'entretien des drains de fondation",
          trap: "Laisser les drains s'entarter ou se colmater sans curage régulier",
          fix: "L'entartrage annule l'effet du voile de drainage : la sous-pression remonte à 100% de la charge amont, réduisant la force normale effective et déclenchant le glissement.",
        },
        {
          mistake: "Sous-dimensionner l'évacuateur de crues (Oubli des crues extrêmes)",
          trap: "Dimensionner l'évacuateur sur la crue décennale ou centennale sans vérifier la Crue Maximale Probable (CMP)",
          fix: "Une crue exceptionnelle dépassant la capacité de l'évacuateur provoque la surverse sur la crête. Pour un barrage en remblai, c'est la rupture garantie en quelques heures par érosion.",
        },
        {
          mistake: "Ignorer le risque d'érosion interne (Renard) dans les digues en terre",
          trap: "Oublier de poser des filtres inversés granulo-statiquement compatibles entre le noyau argileux et le rechargement",
          fix: "Respecter les critères de filtre de Terzaghi ($D_{15,filtre} / d_{85,base} < 5$) pour empêcher l'entraînement des particules fines par l'eau d'infiltration.",
        },
        {
          mistake: "Oublier l'effet de poussée des glaces en hiver",
          trap: "Ne pas prendre en compte la poussée de la couche de glace superficielle sur le parement amont en haute montagne",
          fix: "Ajouter une force horizontale concentrée en surface de 100 à 200 kN/m linéaire dans les régions à fort gel hivernal.",
        },
      ],
    },

    {
      id: 13,
      key: 'tips',
      title: "Astuces de l'ingénieur de barrage — Auscultation & Recommandations",
      icon: '💡',
      type: 'tips',
      tips: [
        "Pendule direct & pendule inversé : Les instruments rois pour mesurer les déformées du béton et du rocher au dixième de millimètre près. Le pendule inversé est ancré dans le rocher profond inaltéré.",
        "Piézomètres à corde vibrante : Mesurent la pression interstitielle u au cœur du massif et sous la fondation. Toute hausse anormale sans variation du niveau de retenue est une alerte immédiate.",
        "Analyse HST (Hauteur - Saison - Temps) : Modèle statistique décomposant les déplacements d'un barrage en 3 effets : l'effet du niveau de l'eau (H), l'effet thermique saisonnier (S) et la dérive irréversible dans le temps (T).",
        "Galerie d'inspection : Doit parcourir la fondation sur toute la longueur de l'ouvrage pour permettre le forage et le récurage des drains, la visite visuelle et les mesures de fuite par canalettes graduées.",
        "Vannes de vidange de fond : Doivent pouvoir abaisser la retenue d'au moins 50% en moins de 7 à 10 jours en cas d'urgence structurelle.",
        "Béton Compacté au Rouleau (BCR) : Permet de construire des barrages poids à des cadences très élevées (mise en œuvre au bull et compactage au rouleau vibrant comme du terrassement).",
      ],
    },

    {
      id: 14,
      key: 'normes',
      title: "Normes & Références — Barrages & Sécurité",
      icon: '📜',
      type: 'norms',
      norms: [
        { code: "CIGB / ICOLD", description: "Commission Internationale des Grands Barrages — Bulletins techniques de référence mondiale." },
        { code: "CFBR (Comité Français des Barrages et Réservoirs)", description: "Recommandations et guides techniques français pour la sécurité et le calcul des barrages." },
        { code: "Décret n° 2015-526 (France)", description: "Réglementation relative à la sécurité des ouvrages hydrauliques (Classement A, B, C, études de danger, VVI)." },
        { code: "NF EN 1997-1 (Eurocode 7)", description: "Calcul géotechnique appliqué aux barrages en remblai et fondations d'ouvrages." },
        { code: "Guides BarEAU / Cerema", description: "Recommandations pour la justification de la stabilité des barrages en terre et poid." },
        { code: "DREAL / STEEP", description: "Services de contrôle de l'État pour la surveillance des barrages et la validation des Études de Dangers." },
      ],
    },

    {
      id: 15,
      key: 'exercises',
      title: "Exercices Conception & Sécurité des Barrages — 3 niveaux",
      icon: '✍️',
      type: 'exercises',
      exercises: [
        {
          id: 'ex_bar_1',
          number: 1,
          difficulty: 'Facile',
          text: "Un barrage poids retient une hauteur d'eau H = 30 m. Calculez la poussée hydrostatique horizontale Fh par mètre linéaire.",
          hint: "Fh = 0,5 · γw · H² avec γw = 10 kN/m³.",
          answer_latex: "F_h = 0{,}5 \\times 10 \\times 30^2 = 5 \\times 900 = 4\\,500 \\text{ kN/m} = 4{,}5 \\text{ MN/m}",
          answer_text: "Fh = 4 500 kN/m (4,5 MN par mètre linéaire)",
        },
        {
          id: 'ex_bar_2',
          number: 2,
          difficulty: 'Moyen',
          text: "Un déversoir de crue de largeur b = 15 m doit évacuer la crue projet Q = 180 m³/s. En prenant μ = 0,45, calculez la charge d'eau Hd nécessaire sur la crête.",
          hint: "Formule de Poleni : Q = μ · b · √(2g) · Hd^(1,5) → Hd = [Q / (μ · b · √(2g))]^(2/3).",
          answer_latex: "H_d^{1{,}5} = \\frac{180}{0{,}45 \\times 15 \\times \\sqrt{19{,}62}} = \\frac{180}{0{,}45 \\times 15 \\times 4{,}429} = \\frac{180}{29{,}90} = 6{,}02 \\quad \\Rightarrow \\quad H_d = 6{,}02^{2/3} = 3{,}31 \\text{ m}",
          answer_text: "Hd = 3,31 m de lame d'eau sur la crête du déversoir.",
        },
        {
          id: 'ex_bar_3',
          number: 3,
          difficulty: 'Difficile',
          text: "Un barrage poids : P = 16 000 kN/m, Fh = 8 000 kN/m. La base fait B = 24 m. Sans sous-pression (U = 0), calculez le facteur de sécurité au glissement (f = 0,75) puis au renversement par rapport au pied aval A (M_P = P · (2B/3), M_Fh = Fh · (H/3) avec H = 32 m).",
          hint: "Fs,gliss = (f · P) / Fh. Fs,renv = M_stabilisant / M_renversant.",
          answer_latex: "F_{s,gliss} = \\frac{0{,}75 \\times 16\\,000}{8\\,000} = 1{,}50 \\quad \\checkmark \\qquad F_{s,renv} = \\frac{16\\,000 \\times 16}{8\\,000 \\times 10{,}67} = \\frac{256\\,000}{85\\,333} = 3{,}00 \\quad \\checkmark",
          answer_latex: "F_{s,gliss} = \\textbf{1{,}50} \\qquad F_{s,renv} = \\textbf{3{,}00} \\quad \\checkmark",
          answer_text: "Fs,gliss = 1,50 | Fs,renv = 3,00 → Ouvrage stable aux deux critères.",
        },
      ],
    },

    {
      id: 16,
      key: 'corrections',
      title: "Corrections détaillées",
      icon: '✅',
      type: 'corrections',
      note: "Les détails des équations d'équilibre et les coefficients de sécurité sont disponibles en cliquant sur 'Voir la correction'.",
    },

    {
      id: 17,
      key: 'quiz',
      title: "Quiz Conception & Sécurité des Barrages — 3 questions",
      icon: '🎯',
      type: 'quiz',
      questions: [
        {
          id: 'q_bar_1',
          question: "Quel est l'effet principal des sous-pressions sous la base d'un barrage poids ?",
          options: [
            { id: 'a', text: "Elles augmentent le poids de l'ouvrage" },
            { id: 'b', text: "Elles exercent une poussée verticale vers le haut qui réduit le poids effectif et diminue la résistance au glissement" },
            { id: 'c', text: "Elles refroidissent le béton en été" },
            { id: 'd', text: "Elles n'ont aucun effet sur la stabilité" },
          ],
          correct: 'b',
          explanation: "La sous-pression U pousse le barrage vers le haut, ce qui réduit la force normale effective N' = P - U. Comme la résistance au glissement vaut R = f · N', la sous-pression déstabilise directement le barrage.",
        },
        {
          id: 'q_bar_2',
          question: "Pourquoi la surverse est-elle particulièrement dangereuse pour un barrage en remblai (terre ou enrochements) ?",
          options: [
            { id: 'a', text: "Elle risque d'éroder rapidement le parement aval et de détruire la digue par renard/brèche" },
            { id: 'b', text: "Elle fait refroidir le noyau en argile" },
            { id: 'c', text: "Elle fait monter la pression de la vapeur d'eau" },
            { id: 'd', text: "Elle n'est pas dangereuse pour les barrages en terre" },
          ],
          correct: 'a',
          explanation: "Les matériaux en remblai ne résistent pas à la vitesse de l'eau en crête. Une surverse crée une brèche par érosion régressive qui détruit totalement la digue en quelques heures.",
        },
        {
          id: 'q_bar_3',
          question: "Quel instrument d'auscultation est principalement utilisé pour mesurer la déformation de flexion du corps d'un barrage ?",
          options: [
            { id: 'a', text: "Le baromètre" },
            { id: 'b', text: "Le pendule (direct ou inversé)" },
            { id: 'c', text: "Le densimètre" },
            { id: 'd', text: "Le salinomètre" },
          ],
          correct: 'b',
          explanation: "Le pendule (direct suspendu en voûte ou inversé ancré en fondation) mesure les déformations horizontales du barrage au dixième de millimètre près sous les variations de retenue et de température.",
        },
      ],
    },

    {
      id: 18,
      key: 'exam_questions',
      title: "Questions d'examen — Niveau Master Hydraulique & Barrages",
      icon: '🎓',
      type: 'exam',
      questions: [
        "Démontrez la condition d'absence de traction au parement amont d'un barrage poids (condition du tiers central e ≤ B/6). Tracez la répartition du diagramme des contraintes sous la base.",
        "Expliquez le phénomène d'érosion interne (renard hydraulique) dans les barrages en terre. Établissez les critères de filtre de Terzaghi et décrivez le rôle des drains tapis et cheminées.",
        "Présentez le modèle statistique HST (Hauteur - Saison - Temps) utilisé pour l'analyse des mesures d'auscultation d'un barrage voûte. Comment isole-t-on la dérive temporelle irréversible ?",
        "Définissez la Crue Maximale Probable (CMP / PMF). Comment dimensionne-t-on un évacuateur de crues de surface avec saut de ski et bassin de dissipation d'énergie ?",
      ],
    },

    {
      id: 19,
      key: 'interview_questions',
      title: "Questions d'entretien — Ingénieur Barrages / Auscultation",
      icon: '💼',
      type: 'interview',
      questions: [
        {
          question: "Lors d'une tournée d'auscultation sur un barrage poids de 60 m, vous constatez que le débit de fuite mesuré dans la galerie de drainage a été multiplié par 4 en une semaine sans montée du niveau du lac. Que faites-vous ?",
          answer_hint: "Procédure d'alerte immédiate : 1. Relever les pressions aux piézomètres pour vérifier si les sous-pressions montent. 2. Analyser l'eau de fuite (turbidité/analyse chimique : si l'eau est claire = entartrage/fissure propre ; si turbide = érosion interne/dissolution de la fondation). 3. Informer le responsable de sécurité de l'ouvrage et lancer des mesures piézométriques quotidiennes. 4. Envisager des injections de coulis si fissure évolutive.",
        },
        {
          question: "Quelle est la différence fondamentale entre la stabilité d'un barrage poids et celle d'un barrage voûte ?",
          answer_hint: "Barrage poids : Équilibre gravitationnel 2D — le poids propre s'oppose directement à la poussée. La fondation subit la compression sous la base. Barrage voûte : Équilibre tridimensionnel par effet d'arc — la poussée est reportée latéralement sur les berges rocheuses (appuis de rive). Le rocher de rive travaille en forte compression tridimensionnelle.",
        },
        {
          question: "Comment dimensionnez-vous le revanchement (freeboard) au-dessus de la cote des plus hautes eaux (NHE) ?",
          answer_hint: "Revanchement R = Hauteur de la vague produite par le vent (formule de Stevenson/Saville) + Remous du plan d'eau + Marge de sécurité (0,5 à 1,5 m). Évite toute surverse en cas de tempête sur le lac de retenue.",
        },
      ],
    },

    {
      id: 20,
      key: 'practical_case',
      title: "Cas pratique — Analyse de sécurité d'un barrage en terre",
      icon: '🔧',
      type: 'practical',
      scenario: "Étude de cas — Digue de retenue en terre zonée H = 22 m avec noyau argileux",
      description: `**Mise en situation** : Bureau d'études hydrauliques. Réévaluation de la sécurité d'une digue de 22 m de hauteur sous crue centennale. Retenue normale RN = 18 m, cote des plus hautes eaux PHE = 20,5 m. Crête à 21,5 m. Talus amont 1V:3H, talus aval 1V:2,5H.`,
      resolution_latex_1: "\\text{Revanchement disponible sous PHE : } R = 21{,}5 - 20{,}5 = 1{,}00 \\text{ m}",
      resolution_latex_2: "\\text{Calcul vague de vent (Fetch 2 km, V=100 km/h) : } h_{vague} = 0{,}75 \\text{ m} \\Rightarrow R_{nécessaire} = 0{,}75 + 0{,}50 = 1{,}25 \\text{ m}",
      resolution_latex_3: "\\text{Conclusion : Revanchement insuffisant de 25 cm sous PHE} \\Rightarrow \\text{Surélévation de muret de crête de 50 cm requise}",
      conclusion: "Création d'un muret parapet en béton armé de 50 cm sur la crête pour garantir R = 1,50 m sous PHE. Installation d'un piézomètre additionnel dans le recharge aval.",
    },

    {
      id: 21,
      key: 'summary',
      title: "Résumé exécutif — Sécurité des Barrages en 6 points",
      icon: '📋',
      type: 'summary',
      content: `### La Sécurité des Barrages en 6 fondamentaux

1. **Typologies** : Poids (poids propre), Voûte (effet d'arc sur rives), Remblai (souple avec noyau/masque).
2. **Poussée hydrostatique** : $F_h = \\frac{1}{2} \\rho_w g H^2$ — s'exerce au tiers inférieur ($H/3$).
3. **Sous-pressions** : $U = \\frac{1}{2} \\alpha \\rho_w g H B$ — réduisent la force normale effectrice $N' = P - U$.
4. **Stabilité au glissement** : $F_{s,gliss} = \\frac{f \\cdot (P - U)}{F_h} \\ge 1{,}50$ — rôle clé du voile de drainage.
5. **Évacuateur de crues** : Formule de Poleni $Q = \\mu b \\sqrt{2g} H_d^{3/2}$ — dimensionné pour la Crue Maximale Probable (CMP).
6. **Auscultation** : Pendules, piézomètres, mesures de fuite — surveillance continue 24h/24.`,
    },

    {
      id: 22,
      key: 'key_points',
      title: "Points clés à mémoriser — Barrages",
      icon: '⭐',
      type: 'keypoints',
      points: [
        "Poussée d'eau : Fh = ½·γw·H² | Sous-pression : U = ½·α·γw·H·B",
        "Stabilité au glissement : Fs,gliss = f·(P - U) / Fh ≥ 1,50 (f = tan φ ≈ 0,70)",
        "Drains de fondation : divisent les sous-pressions par 2 à 4 (α passe de 0,9 à 0,3)",
        "Condition du tiers central : e ≤ B/6 empêche toute ouverture de fissure en parement amont",
        "Évacuateur de crues : dimensionné pour éviter TOUTE surverse sur les barrages en remblai",
        "Modèle HST (Hauteur - Saison - Temps) pour l'analyse des déformations d'auscultation",
        "Durée de vie théorique illimitée sous réserve d'auscultation et de maintenance rigoureuses",
      ],
    },

    {
      id: 23,
      key: 'self_assessment',
      title: "Auto-évaluation — Conception & Sécurité des Barrages",
      icon: '🏆',
      type: 'self_assessment',
      description: "Validez vos compétences en ingénierie des barrages :",
      objectives: [
        "Je connais les 4 grandes typologies de barrages et leurs domaines d'application",
        "Je sais calculer la poussée hydrostatique Fh et les sous-pressions U sous la base",
        "Je vérifie la stabilité au glissement (Fs ≥ 1,5) et au renversement d'un barrage poids",
        "Je comprends le rôle critique du voile de drainage et de la galerie d'inspection",
        "Je sais dimensionner un évacuateur de crue par la formule de Poleni",
        "Je connais les instruments d'auscultation (pendules, piézomètres, fuites)",
        "J'ai résolu les 3 exercices d'ouvrages hydrauliques avec succès",
        "J'ai obtenu 3/3 au quiz de sécurité des barrages",
      ],
    },
  ],

  quickQuiz: {
    question: "Quel est l'effet principal des sous-pressions d'eau sous la base d'un barrage poids ?",
    options: [
      { id: 'a', label: "A) Elles augmentent le poids effectif de l'ouvrage" },
      { id: 'b', label: "B) Elles poussent le barrage vers le haut et réduisent sa résistance au glissement" },
      { id: 'c', label: "C) Elles empêchent la corrosion du béton" },
    ],
    correct: 'b',
    explanation: "Les sous-pressions U exercent une force verticale vers le haut sous la fondation, ce qui diminue la force normale effective N' = P - U et réduit directement la sécurité au glissement (Fs = f·N'/Fh).",
  },
};
