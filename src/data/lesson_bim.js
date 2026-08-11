// ── Lesson: BIM, CAO & Modélisation 3D — Module 05 ───────────────────────────
export const lesson_bim = {
  moduleId: 5,
  slug: 'bim',
  lessonIndex: 1,
  title: "BIM, CAO, Interopérabilité IFC & Modélisation 3D",
  subtitle: "Module 05 — BIM, CAO & Modélisation 3D",
  level: 'Intermédiaire',
  duration: '35h',
  diagramType: 'bridge_structure',
  tags: ['BIM', 'IFC', 'LOD', 'Revit', 'Navisworks', 'OpenBIM', '4D-5D-7D', 'Clash Detection', 'CAO'],

  steps: [
    {
      id: 1,
      key: 'definition',
      title: "Définition — Le BIM (Building Information Modeling)",
      icon: '📖',
      type: 'definition',
      fr: 'BIM, CAO & Modélisation Paramétrique 3D',
      en: 'BIM & Parametric 3D Modeling',
      metier: "Pratiquée par les BIM Managers, Coordinateurs BIM, Modélisateurs BIM (Revit/Allplan/Tekla) et ingénieurs méthodes. Le BIM régit le processus collaboratif de conception, construction et gestion des ouvrages.",
      content: `Le **BIM (Building Information Modeling)** n'est pas un simple logiciel 3D, mais une **méthodologie de travail collaborative** basée sur une **maquette numérique paramétrique et renseignée** tout au long du cycle de vie du bâtiment.

### Les 7 Dimensions du BIM (BIM 1D à 7D) :
1. **BIM 3D (Géométrie & Attributs)** : Modélisation géométrique 3D paramétrique (mur, dalle, poteau) enrichie de données techniques (matériau, résistance $f_{ck}$, résistance au feu $REI$, coût, fabricant).
2. **BIM 4D (Planification & Temps)** : Association des objets 3D au planning de chantier (Gantt, MS Project) pour la simulation visuelle des étapes de construction.
3. **BIM 5D (Estimation des Coûts & Métrés)** : Extraction automatique et dynamique des quantitatifs (volumes de béton $m^3$, surfaces de coffrage $m^2$, aciers $kg$) et chiffrage des coûts.
4. **BIM 6D (Développement Durable & Énergie)** : Analyses énergétiques, bilan carbone (RE2020) et études d'impact environnemental dès la phase conception.
5. **BIM 7D (Exploitation, Maintenance & GMAO)** : Transmission du Dossier d'Ouvrage Exécuté numérique (DOE numérique) pour la gestion et la maintenance des équipements pendant 50 ans.

> 💡 **Le concept fondamental du BIM** : Une dalle sous Revit n'est pas un assemblage de lignes 3D, mais un **objet intelligent "Floor"** qui connaît son épaisseur, son matériau, son volume, son coût et sa performance thermique !`,
    },

    {
      id: 2,
      key: 'importance',
      title: "Pourquoi le BIM révolutionne le Génie Civil",
      icon: '⚠️',
      type: 'importance',
      content: `La construction traditionnelle subit 10 à 15% de surcoûts liés aux erreurs de synthèses et réseaux mal positionnés. Le BIM élimine ces erreurs **avant d'arriver sur le chantier**.

- **Détection des collisions (Clash Detection)** : Identification automatique des interférences géométriques (ex: une gaine de ventilation Ø 300 mm traversant une poutre béton armé précontrainte).
- **Interopérabilité OpenBIM (Format IFC ISO 16739)** : Échange de données fluide entre l'architecte (Archicad), l'ingénieur structure (Tekla/Revit) et l'ingénieur fluide (Mep).
- **Mise à jour dynamique des documents** : Modifier la position d'un voile 3D met à jour instantanément la vue en plan, les coupes, la façade et le métré dans le tableau de quantitatifs.
- **Réduction des réserves à la livraison** : La maquette numérique DOE (LOD 500) garantit la parfaite conformité entre le projet virtuel et le chantier physique (Jumeau Numérique / Digital Twin).

> ⚠️ **Règle d'or** : "Construire deux fois : une première fois virtuellement dans la maquette numérique BIM, et une deuxième fois sans erreur sur le terrain."`,
    },

    {
      id: 3,
      key: 'applications',
      title: "Applications terrain — Outils, Logiciels & Workflows",
      icon: '🏗️',
      type: 'applications',
      examples: [
        {
          context: "Modélisation Structurelle Paramétrique (Autodesk Revit / Allplan)",
          text: "Création des voiles, dalles, poteaux et poutres avec définition des familles paramétriques et ferraillage 3D automatique.",
        },
        {
          context: "Synthèse & Détection d'Interférences (Navisworks / Solibri)",
          text: "Superposition des maquettes ARC, STR et MEP. Lancement des tests d'interférences dures (Hard Clash) et d'espaces de réservation (Soft Clash).",
        },
        {
          context: "Ferraillage Complexes & Charpente Métallique (Tekla Structures)",
          text: "Modélisation millimétrique des assemblages métalliques (boulons, platines, soudures) et génération automatique des plans d'armatures et fiches d'usinage.",
        },
        {
          context: "Simulation 4D du Planning de Chantier (Synchro 4D)",
          text: "Liaison du planning MS Project à la maquette 3D pour visualiser l'avancement hebdomadaire des grues, banches et coules de béton.",
        },
        {
          context: "Environnement de Données Commun (CDE / BIM360 / Trimble Connect)",
          text: "Plateforme cloud centralisée assurant la gestion des droits d'accès, le suivi des révisions et l'échange des fichiers IFC et BCF.",
        },
        {
          context: "Jumeau Numérique & Exploitation 7D (GMAO / BIM Exploitation)",
          text: "Connexion de la maquette numérique aux capteurs IoT (température, vibrations, contraintes) pour la maintenance prédictive de ponts ou bâtiments.",
        },
      ],
    },

    {
      id: 4,
      key: 'theory',
      title: "Théorie — Formats IFC, Niveaux de Détail (LOD) & Charte BIM",
      icon: '📐',
      type: 'theory',
      diagramType: 'bridge_structure',
      content: `### 1. Le Format Ouvert IFC (Industry Foundation Classes - ISO 16739)

L'**IFC** est le format standard international libre et neutre (non propriétaire) développé par **buildingSMART** pour garantir l'OpenBIM.

- **Structure hiérarchique IFC** :
  $$\\text{IfcProject} \\longrightarrow \\text{IfcSite} \\longrightarrow \\text{IfcBuilding} \\longrightarrow \\text{IfcBuildingStorey} \\longrightarrow \\text{IfcProduct}$$
- **Exemples d'objets IFC** :
  - \`IfcWall\` (Voile / Mur)
  - \`IfcSlab\` (Dalle / Plancher)
  - \`IfcBeam\` (Poutre)
  - \`IfcColumn\` (Poteau)
  - \`IfcRebar\` (Armature Béton Armé)

### 2. Les Niveaux de Détail Géométrique & d'Information (LOD / LOI)

Le **LOD (Level of Detail / Development)** définit la maturité et la précision des objets de la maquette numérique de la phase esquisse au DOE :

| Niveau LOD | Phase de projet | Contenu géométrique & attributaire |
|------------|-----------------|-----------------------------------|
| **LOD 100** | Esquisse / Concours | Volume global schématique (masse globale, emprise au sol) |
| **LOD 200** | Avant-Projet (APS/APD) | Objets génériques avec dimensions approximatives ($X, Y, Z$) |
| **LOD 300** | Projet (PRO / DCE) | Objets spécifiques avec dimensions exactes, matériaux et liaisons |
| **LOD 400** | Exécution (EXE / Chantier) | Modélisation d'exécution avec détails d'assemblage, réservation et ferraillage 3D |
| **LOD 500** | Récolement (DOE Numérique) | Maquette tel que construit (As-Built) vérifiée sur chantier (Scan laser) |

### 3. Le Format BCF (BIM Collaboration Format)
Le **BCF** est un format d'échange ouvert pour signaler les problèmes et clashs entre intervenants (image du clash + coordonnées 3D + auteur + statut) sans rééchanger la lourde maquette IFC.`,
    },

    {
      id: 5,
      key: 'formulas',
      title: "Formules & Indicateurs — Productivité & Métrés BIM",
      icon: '🔢',
      type: 'formulas',
      diagramType: 'bridge_structure',
      formulas: [
        {
          name: "Extraction dynamique du volume de béton (V_beton)",
          latex: "V_{b\\acute{e}ton,tot} = \\sum_{i=1}^{N} \\text{IfcSlab}_i.Volume + \\sum_{j=1}^{M} \\text{IfcWall}_j.Volume \\quad [\\text{m}^3]",
          description: "Calculé automatiquement par requêtes SQL/BIM dans Revit/Navisworks en éliminant les volumes d'intersections (Boolean Join).",
        },
        {
          name: "Taux d'acier au m³ de béton (Ratio d'Armatures)",
          latex: "Ratio_{acier} = \\frac{\\sum \\text{IfcRebar}.Mass}{V_{b\\acute{e}ton,tot}} \\quad [\\text{kg/m}^3]",
          description: "Indicateur clé de prédimensionnement : Dalle = 70-90 kg/m³ | Poutre = 100-140 kg/m³ | Voile voiles banchés = 60-80 kg/m³.",
        },
        {
          name: "Calcul du coût global prévisionnel (BIM 5D)",
          latex: "\\text{Co\\hat{u}t Total} = \\sum_{k=1}^{P} \\left( \\text{Quantit\\acute{e}}_k \\times \\text{Prix Unitaire}_k \\right)",
          description: "La maquette BIM 5D réactualise le devis quantitatif estimatif (DQE) en temps réel à chaque modification géométrique.",
        },
        {
          name: "Rendement d'extraction automatique des métrés",
          latex: "\\Delta T_{m\\acute{e}tr\\acute{e}} = \\frac{T_{manuel} - T_{BIM}}{T_{manuel}} \\times 100 \\quad (\\approx 70\\% \\text{ à } 85\\% \\text{ de gain de temps})",
          description: "Temps passé pour établir un métré complet réduit de 3 jours à 2 heures grâce à l'extraction automatique des données IFC.",
        },
        {
          name: "Tolérance géométrique de détection des clashs (Clash Hard)",
          latex: "\\text{Clash Condition} : \\text{Distance}(Obj_A, Obj_B) < \\delta_{tol\\acute{e}rance} \\quad (\\delta = 0 \\text{ mm à } 10 \\text{ mm})",
          description: "Paramètre de réglage des logiciels de synthèse pour détecter les chevauchements physiques de matières.",
        },
      ],
    },

    {
      id: 6,
      key: 'stepbystep',
      title: "Calcul complet — Synthèse BIM & Extraction de Quantitatifs",
      icon: '🔬',
      type: 'stepbystep',
      problem: "Extraction et vérification des quantitatifs de béton et aciers d'un niveau R+1 à partir d'une maquette BIM IFC. Le niveau comprend 12 dalles de 40 m² chacune (épaisseur e = 20 cm) et 18 voiles de 15 m² chacun (épaisseur e = 20 cm). Le ratio d'acier moyen extrait de la maquette d'exécution est de 85 kg/m³ pour les dalles et 75 kg/m³ pour les voiles. Calculer : 1) Le volume total de béton des dalles. 2) Le volume total de béton des voiles. 3) Le poids total d'acier du niveau. 4) Le coût total du béton armé si Béton C30/37 = 140 €/m³ et Acier B500B façonné posé = 1,80 €/kg.",
      steps_demo: [
        { n: 1, text: "Volume de béton des dalles : V_dalles = 12 × (40,0 × 0,20) = 12 × 8,0 = 96,0 m³" },
        { n: 2, text: "Volume de béton des voiles : V_voiles = 18 × (15,0 × 0,20) = 18 × 3,0 = 54,0 m³" },
        { n: 3, text: "Volume total de béton du niveau R+1 : V_tot = 96,0 + 54,0 = 150,0 m³" },
        { n: 4, text: "Poids d'acier des dalles : P_aciers_dalles = 96,0 m³ × 85 kg/m³ = 8 160 kg" },
        { n: 5, text: "Poids d'acier des voiles : P_aciers_voiles = 54,0 m³ × 75 kg/m³ = 4 050 kg" },
        { n: 6, text: "Poids total d'acier du niveau : P_aciers_tot = 8 160 + 4 050 = 12 210 kg = 12,21 tonnes" },
        { n: 7, text: "Calcul du coût total : Coût Béton = 150 m³ × 140 € = 21 000 € | Coût Aciers = 12 210 kg × 1,80 € = 21 978 € → Coût Total = 42 978 €." },
      ],
      result_latex: "V_{b\\acute{e}ton} = \\textbf{150{,}0 m}^3 \\qquad P_{acier} = \\textbf{12 210 kg} \\qquad \\text{Co\\hat{u}t Total BA} = \\textbf{42 978 \\euro} \\quad \\checkmark",
    },

    {
      id: 7,
      key: 'units',
      title: "Unités & Acronymes BIM — Tableau de référence",
      icon: '📏',
      type: 'units',
      table: [
        { grandeur: "IFC (Industry Foundation Classes)", si: "Format ouvert ISO 16739", imperial: "Standard buildingSMART", conversion: "Format d'échange neutre inter-logiciels (IFC2x3, IFC4, IFC4.3)" },
        { grandeur: "BCF (BIM Collaboration Format)", si: "Format de remarques XML/JSON", imperial: "BuildingSMART", conversion: "Échange de tickets de réserves et clashs avec coordonnées 3D" },
        { grandeur: "LOD (Level of Detail / Development)", si: "LOD 100 à LOD 500", imperial: "AIA G202-2013", conversion: "Niveau de maturité géométrique et d'information des objets" },
        { grandeur: "CDE (Common Data Environment)", si: "Plateforme cloud centralisée", imperial: "ISO 19650", conversion: "Environnement de données commun pour la gestion documentaire" },
        { grandeur: "BIM Manager", si: "Rôle de pilotage global", imperial: "Lead BIM Coordinator", conversion: "Rédige la convention BIM et garantit le respect de la charte" },
        { grandeur: "Clash Detection", si: "Détection d'interférences 3D", imperial: "Collision Check", conversion: "Analyse automatisée des chevauchements d'éléments d'ouvrages" },
      ],
      note: "⚠️ ATTENTION : Un fichier IFC contient à la fois la **géométrie 3D triangulée** et la **base de données d'attributs** (Property Sets ou Pset).",
    },

    {
      id: 8,
      key: 'hypotheses',
      title: "Hypothèses & règles de modélisation BIM",
      icon: '📋',
      type: 'hypotheses',
      items: [
        { type: 'info', text: "Modéliser les objets selon leur véritable fonction constructive (ne jamais utiliser l'outil 'Mur' pour modéliser une 'Poutre' ou une 'Acrotère')." },
        { type: 'info', text: "Découpage par niveau (Storey) : Chaque élément (voile, poteau) doit être attaché au niveau inférieur et supérieur correspondant pour permettre l'extraction automatique des métrés par étage." },
        { type: 'warning', text: "ATTENTION : Nettoyage des intersections géométriques (Boolean Joins) : Vérifier que les assemblages poteau-dalle-poutre ne comptabilisent pas le volume de béton en double." },
        { type: 'warning', text: "Coordonnées partagées & Origine du projet : Définir un point de référence géodésique unique ($X, Y, Z$ Lambert-93) dès le démarrage du projet pour éviter les décalages de maquettes lors des réunions de synthèse." },
        { type: 'tip', text: "Convention BIM de projet : Document contractuel rédigé par le BIM Manager fixant les règles de nommage des fichiers, la structure de découpage, la matrice de responsabilité et la fréquence des réunions de synthèse." },
        { type: 'warning', text: "Exports IFC : Toujours utiliser le Model View Definition (MVD) adapté : 'Coordination View 2.0' pour la synthèse ou 'Design Transfer View' pour le calcul de structure." },
      ],
    },

    {
      id: 9,
      key: 'simple_examples',
      title: "Exemples guidés — Conceptions & Clashs BIM",
      icon: '✏️',
      type: 'examples_simple',
      examples: [
        {
          title: "Exemple 1 : Calcul de gain de temps sur métrés automatisés",
          given: "Projet de 5 000 m² de bureaux. Temps de métré manuel traditionnel = 40 heures. Temps d'extraction BIM IFC = 2 heures + 4 heures de vérification = 6 heures",
          find: "Le pourcentage de réduction du temps de travail",
          solution_latex: "Gain = \\frac{40 - 6}{40} \\times 100 = \\frac{34}{40} \\times 100 = 85{,}0 \\%",
          result: "Gain de temps de 85% sur la réalisation des devis quantitatifs.",
        },
        {
          title: "Exemple 2 : Analyse d'un Clash Dur (Hard Clash)",
          given: "Dans Navisworks, une canalisation d'eau pluviale Ø 200 mm (MEP) croise une poutre principale en béton armé (STR) de 40×60 cm avec un chevauchement de 15 cm",
          find: "Solution technique de résolution du clash",
          solution_latex: "\\text{Option A : Dévoiement sous poutre} \\quad \\text{ou} \\quad \\text{Option B : Création réservation vérifiée avec l'ingénieur béton}",
          result: "Création d'un ticket BCF envoyé au bureau d'études structure pour dimensionner un fourreau de réservation ou dévoyer la conduite sous le faux-plafond.",
        },
        {
          title: "Exemple 3 : Évolution des niveaux LOD d'un poteau béton",
          given: "Poteau béton armé modélisé successivement en LOD 200, LOD 300 et LOD 400",
          find: "Description des attributs à chaque stade",
          solution_latex: "\\text{LOD 200 : Cylindre } 40 \\text{ cm} \\quad | \\quad \\text{LOD 300 : Poteau } 40 \\times 40 \\text{ cm, C30/37} \\quad | \\quad \\text{LOD 400 : Armatures 4HA16 + cadres 3D}",
          result: "Le niveau LOD s'enrichit de la phase APD (LOD 200) à la phase d'exécution d'usine (LOD 400).",
        },
      ],
    },

    {
      id: 10,
      key: 'real_examples',
      title: "Exemple réel — Synthèse BIM du CHU de Nantes",
      icon: '🏢',
      type: 'examples_real',
      diagramType: 'bridge_structure',
      examples: [
        {
          context: "Grand projet hospitalier de 225 000 m²",
          scenario: "Superposition de 45 maquettes numériques IFC issues de 12 bureaux d'études différents (Architecture, Structure, CVC, Électricité, Fluides Médicaux). Détection automatique des clashs sous Solibri Model Checker.",
          decomposition_latex: "\\text{Résultats : } 14\\,200 \\text{ clashs initiaux identifiés } \\to 0 \\text{ clash sur le chantier}",
          lesson: "La résolution anticipée de 14 200 collisions durant les 6 mois de phase synthèse BIM a économisé plus de 3,5 millions d'euros de réfection et d'arrêts de chantier.",
        },
      ],
    },

    {
      id: 11,
      key: 'diagrams',
      title: "Schéma du processus BIM & Interopérabilité IFC",
      icon: '📊',
      type: 'interactive_diagram',
      diagramType: 'bridge_structure',
      description: "Visualisez le workflow d'échange OpenBIM centralisé par le format IFC et la plateforme CDE, le principe de la détection de clashs 3D et le cycle des dimensions BIM 3D à 7D.",
      diagram_description: [
        "Workflow OpenBIM : Export IFC des maquettes Archicad/Revit/Tekla vers la plateforme CDE et le logiciel de synthèse Navisworks",
        "Principe du Clash Detection : Détection visuelle 3D de la collision entre gaine MEP et voile BA avec émission d'un fichier BCF",
        "Matrice des LOD 100 à 500 : De la masse conceptuelle au jumeau numérique exécuté avec ferraillage 3D",
      ],
    },

    {
      id: 12,
      key: 'mistakes',
      title: "Erreurs classiques & dérives en démarche BIM",
      icon: '⛔',
      type: 'mistakes',
      items: [
        {
          mistake: "Confondre la modélisation 3D géométrique et le BIM",
          trap: "Créer un modèle 3D SketchUp ou AutoCAD sans aucun paramètre ni attribut technique en pensant faire du BIM",
          fix: "Un modèle 3D non renseigné n'est qu'un dessin. Le BIM exige des objets paramétriques intelligents contenant des données métiers exploitables (attributs Pset).",
        },
        {
          mistake: "Modéliser en sur-qualité LOD trop tôt (Sur-modélisation)",
          trap: "Modéliser les armatures 3D détaillées (LOD 400) dès la phase de concours ou d'esquisse (LOD 100/200)",
          fix: "Surcharger la maquette prématurément alourdit inutilement les fichiers et fait perdre un temps précieux lors des modifications architecturales de départ. Respecter la matrice des LOD définie dans la Convention BIM.",
        },
        {
          mistake: "Négliger le calage du point d'origine géodésique",
          trap: "Chaque bureau d'études travaille dans son propre repère local sans coordonnées partagées",
          fix: "Lors de la superposition des maquettes en réunion de synthèse, les bâtiments apparaissent séparés de plusieurs kilomètres ! Fixer le point d'origine ($X, Y, Z$) et la rotation vers le Nord Lambert-93 dès le 1er jour.",
        },
        {
          mistake: "Absence de Convention BIM signée",
          trap: "Lancer la modélisation collaborative sans document définissant les rôles, les formats d'export IFC et les fréquences d'échange",
          fix: "Exiger la rédaction et la validation de la Convention BIM par le BIM Manager avant toute production de maquette numérique.",
        },
      ],
    },

    {
      id: 13,
      key: 'tips',
      title: "Astuces du BIM Manager & Coordinateur",
      icon: '💡',
      type: 'tips',
      tips: [
        "Visualiseurs IFC gratuits performants : Utiliser BIMvision, Solibri Anywhere ou eveBIM pour contrôler rapidement vos fichiers IFC sans licence commerciale lourde.",
        "Contrôle de qualité des maquettes (BIM Validation) : Créer des règles de contrôle automatiques sous Solibri pour vérifier la présence des attributs obligatoires (ex: vérifier que tous les voiles possèdent une résistance au feu REI renseignée).",
        "Utilisation dynamique des filtres de vue Revit : Colorer automatiquement les voiles béton armé selon leur épaisseur ou leur classe de résistance à la compression pour repérer immédiatement les erreurs de saisie.",
        "Export IFC propre : Décocher l'export des éléments de détail inutiles (vis, boulons secondaires) pour réduire le poids des fichiers IFC de 80%.",
        "Standard COBie (Construction-Operations Building Information Exchange) : Format de données structuré sous forme de tableur Excel permettant de transmettre la base de données du bâtiment directement aux logiciels de GMAO (7D).",
        "Jumeau Numérique (Digital Twin) : Associer la maquette BIM à des réseaux de capteurs IoT pour suivre en temps réel la consommation énergétique et les déformations de structure.",
      ],
    },

    {
      id: 14,
      key: 'normes',
      title: "Normes & Références — BIM & OpenBIM",
      icon: '📜',
      type: 'norms',
      norms: [
        { code: "NF EN ISO 19650 (Parties 1 à 5)", description: "Organisation et numérisation des informations relatives aux bâtiments et ouvrages de génie civil, y compris le BIM (Management de l'information)." },
        { code: "NF EN ISO 16739-1 (Format IFC)", description: "Industry Foundation Classes (IFC) pour le partage de données dans le secteur de la construction et de la gestion d'immobilier." },
        { code: "XP P07-150 / PPBIM", description: "Propriétés des produits et systèmes de construction pour l'utilisation dans les maquettes numériques BIM." },
        { code: "Guide buildingSMART France", description: "Recommandations pour la rédaction des conventions BIM et la mise en œuvre de l'OpenBIM." },
        { code: "Guide d'application BIM de la FNTP", description: "Standard de modélisation BIM adapté aux infrastructures et travaux publics (IFC4.3 Infra)." },
        { code: "Décret d'application de la Loi RE2020", description: "Exigence d'évaluation de l'impact carbone des matériaux (BIM 6D et fiches FDES)." },
      ],
    },

    {
      id: 15,
      key: 'exercises',
      title: "Exercices BIM, CAO & Synthèse — 3 niveaux",
      icon: '✍️',
      type: 'exercises',
      exercises: [
        {
          id: 'ex_bim_1',
          number: 1,
          difficulty: 'Facile',
          text: "Un projet comprend 45 dalles béton modélisées dans la maquette BIM (volume total V_dalles = 320 m³). Si le ratio d'acier renseigné est de 90 kg/m³, calculer la masse totale d'acier des dalles en tonnes.",
          hint: "Masse = Volume × Ratio.",
          answer_latex: "P_{acier} = 320 \\text{ m}^3 \\times 90 \\text{ kg/m}^3 = 28\\,800 \\text{ kg} = 28{,}80 \\text{ tonnes}",
          answer_text: "Poids total d'acier = 28,80 tonnes",
        },
        {
          id: 'ex_bim_2',
          number: 2,
          difficulty: 'Moyen',
          text: "Sur une réunion de synthèse BIM, 480 clashs durs ont été identifiés. Si le traitement anticipé de chaque clash sur maquette coûte 50 € contre 800 € en moyenne s'il avait été découvert sur le chantier, calculer l'économie nette réalisée grâce à la synthèse BIM.",
          hint: "Économie = (Coût chantier - Coût BIM) × Nombre de clashs.",
          answer_latex: "\\text{\\acute{E}conomie par clash} = 800 - 50 = 750 \\euro \\qquad \\text{\\acute{E}conomie totale} = 480 \\times 750 = 360\\,000 \\euro",
          answer_text: "Économie nette réalisée = 360 000 €",
        },
        {
          id: 'ex_bim_3',
          number: 3,
          difficulty: 'Difficile',
          text: "Dans un fichier IFC, la classe 'IfcWall' regroupe 40 voiles banchés de longueur L = 5,00 m, hauteur H = 2,80 m et épaisseur e = 0,20 m. La surface totale de peinture est de 2 faces par voile. Calculer : 1) Le volume total de béton brut. 2) La surface totale de peinture extérieure/intérieure en m².",
          hint: "V = 40 × (5,00 × 2,80 × 0,20). S_peinture = 40 × 2 × (5,00 × 2,80).",
          answer_latex: "V_{b\\acute{e}ton} = 40 \\times (5 \\times 2{,}80 \\times 0{,}20) = 40 \\times 2{,}80 = 112{,}0 \\text{ m}^3 \\qquad S_{peinture} = 40 \\times 2 \\times 14{,}0 = 1\\,120{,}0 \\text{ m}^2",
          answer_text: "Volume béton = 112,0 m³ | Surface de peinture = 1 120,0 m².",
        },
      ],
    },

    {
      id: 16,
      key: 'corrections',
      title: "Corrections détaillées",
      icon: '✅',
      type: 'corrections',
      note: "Retrouvez les formules complètes, les requêtes d'extraction IFC et la résolution des exercices en cliquant sur 'Voir la correction'.",
    },

    {
      id: 17,
      key: 'quiz',
      title: "Quiz BIM, CAO & Modélisation 3D — 3 questions",
      icon: '🎯',
      type: 'quiz',
      questions: [
        {
          id: 'q_bim_1',
          question: "Quelle dimension du BIM (BIM 1D à 7D) correspond à l'intégration du planning de construction et du facteur temps ?",
          options: [
            { id: 'a', text: "BIM 3D" },
            { id: 'b', text: "BIM 4D (Planification & Temps)" },
            { id: 'c', text: "BIM 5D" },
            { id: 'd', text: "BIM 7D" },
          ],
          correct: 'b',
          explanation: "Le BIM 4D ajoute la dimension temporelle (planning de chantier) à la géométrie 3D pour simuler visuellement les phases de construction.",
        },
        {
          id: 'q_bim_2',
          question: "Quel est le format d'échange ouvert standard international (OpenBIM) neutre et non propriétaire certifié ISO 16739 ?",
          options: [
            { id: 'a', text: "Fichier .DWG" },
            { id: 'b', text: "Format IFC (Industry Foundation Classes)" },
            { id: 'c', text: "Fichier .RVT" },
            { id: 'd', text: "Fichier PDF" },
          ],
          correct: 'b',
          explanation: "Le format IFC est le standard ouvert universel développé par buildingSMART permettant l'échange des maquettes informatisées entre tous les logiciels de la chaîne du BTP (Revit, Archicad, Allplan, Tekla).",
        },
        {
          id: 'q_bim_3',
          question: "Que désigne le terme 'Clash Detection' dans le processus de synthèse BIM ?",
          options: [
            { id: 'a', text: "Une dispute entre l'architecte et l'ingénieur" },
            { id: 'b', text: "La détection automatisée d'interférences géométriques ou spatiales entre plusieurs maquettes métiers (ex: gaine traversant une poutre)" },
            { id: 'c', text: "Un essai de choc sur le béton" },
            { id: 'd', text: "L'analyse du bruit sur le chantier" },
          ],
          correct: 'b',
          explanation: "Le Clash Detection est la recherche automatique des collisions physiques (Hard Clash) ou d'incompatibilité de réservations (Soft Clash) entre les maquettes Architecture, Structure et Fluides (MEP).",
        },
      ],
    },

    {
      id: 18,
      key: 'exam_questions',
      title: "Questions d'examen — Niveau Ingénieur / BIM Manager",
      icon: '🎓',
      type: 'exam',
      questions: [
        "Présentez la norme NF EN ISO 19650 et détaillez le rôle du CDE (Common Data Environment) dans la gestion des états documentaires (WIP, Shared, Published, Archived).",
        "Exposez la différence entre l'OpenBIM (basé sur l'IFC) et le Closed BIM (logiciel propriétaire unique). Quels sont les avantages et limites de chaque approche ?",
        "Détaillez le contenu et les objectifs d'une Convention BIM de projet. Quels sont les articles indispensables à faire valider par la maîtrise d'ouvrage et la maîtrise d'œuvre ?",
        "Expliquez le concept de 'Jumeau Numérique' (Digital Twin) et présentez l'intégration du BIM 7D avec les outils de GMAO et les réseaux de capteurs IoT pour la maintenance prédictive des ouvrages d'art.",
      ],
    },

    {
      id: 19,
      key: 'interview_questions',
      title: "Questions d'entretien — BIM Manager / Coordinateur BIM",
      icon: '💼',
      type: 'interview',
      questions: [
        {
          question: "Lors de l'export IFC d'une maquette Revit vers Navisworks, vous remarquez que la moitié des attributs techniques (Pset) a disparu. D'où vient le problème ?",
          answer_hint: "Le problème provient de la configuration de l'exportateur IFC dans Revit. Il faut cocher la case 'Exporter les Pset de Revit' ou utiliser une table de correspondance de paramètres personnalisée (User Defined Property Set) pour mapper correctement les paramètres du projet vers les Psets IFC officiels de buildingSMART.",
        },
        {
          question: "Quelle est la différence entre le LOD (Level of Detail - Géométrie) et le LOI (Level of Information - Attributs) ?",
          answer_hint: "Le LOD (Level of Detail) caractérise la précision et la complexité géométrique de l'objet 3D (ex: forme brute vs détails de chanfreins). Le LOI (Level of Information) caractérise la richesse des données alphanumériques associées à l'objet (ex: marque, fiche technique, résistance, classe de feu, PV de conformité).",
        },
        {
          question: "Comment gérez-vous un conflit d'arbitrage lors d'une détection de clash entre une poutre précontrainte et un réseau de désenfumage ?",
          answer_hint: "Priorité absolue à la sécurité et à la structure ! Une poutre béton armé précontrainte ne peut jamais être perforée sans étude d'ingénieur. La gaine de désenfumage doit être dévoyée sous la poutre avec création d'un faux-plafond technique. Émettre une fiche BCF adressée à l'ingénieur CVC.",
        },
      ],
    },

    {
      id: 20,
      key: 'practical_case',
      title: "Cas pratique — Organisation de la synthèse BIM d'un projet de bureaux",
      icon: '🔧',
      type: 'practical',
      scenario: "Étude de cas — Mise en place du processus de synthèse BIM OpenBIM pour un immeuble de bureaux R+5 (12 000 m²)",
      description: `**Mise en situation** : BIM Manager principal. Organisation des échanges entre l'architecte (Archicad), l'ingénieur structure (Tekla) et le bureau d'études MEP (Revit). Mise en place du CDE sur Trimble Connect et réunions de synthèse hebdomadaires.`,
      resolution_latex_1: "\\text{Fréquence d'export IFC : Chaque vendredi 17h00 sur le CDE (Dossier SHARED)}",
      resolution_latex_2: "\\text{Règles de Clash sous Solibri : } \\text{Hard Clash }(Obj_{STR} \\cap Obj_{MEP}) \\quad \\text{Tolérance } \\delta = 5 \\text{ mm}",
      resolution_latex_3: "\\text{Flux BCF : 120 tickets BCF émis par semaine } \\to \\text{Traitement sous 48h par le projeteur concerné}",
      conclusion: "Synthèse validée en 8 semaines. 650 clashs majeurs résolus avant la signature des marchés de sous-traitance. Aucun surcoût de percement sur le chantier.",
    },

    {
      id: 21,
      key: 'summary',
      title: "Résumé exécutif — Le BIM en 6 points",
      icon: '📋',
      type: 'summary',
      content: `### Le BIM en 6 fondamentaux

1. **Définition** : Méthodologie collaborative basée sur une maquette numérique paramétrique et renseignée.
2. **Les 7D du BIM** : 3D (Géométrie), 4D (Temps/Planning), 5D (Coûts), 6D (Énergie/Environnement), 7D (Exploitation/GMAO).
3. **OpenBIM & IFC** : Format neutre ISO 16739 permettant l'interopérabilité fluide entre tous les logiciels métiers.
4. **Niveaux de Détail (LOD)** : De LOD 100 (esquisse) à LOD 400 (exécution) et LOD 500 (tel que construit / As-Built).
5. **Clash Detection & BCF** : Détection d'interférences 3D automatisée et échanges de tickets de réserves par BCF.
6. **Norme ISO 19650** : Management de l'information BIM, CDE (Common Data Environment) et Convention BIM.`,
    },

    {
      id: 22,
      key: 'key_points',
      title: "Points clés à mémoriser — BIM & CAO",
      icon: '⭐',
      type: 'keypoints',
      points: [
        "Le BIM n'est pas un logiciel mais un processus collaboratif autour d'une maquette numérique",
        "Format IFC (ISO 16739) : Le standard ouvert universel de l'OpenBIM",
        "BIM 4D = Planning | BIM 5D = Coûts & Quantitatifs | BIM 7D = Exploitation & Maintenance",
        "Clash Detection : Détecte et élimine les collisions d'ouvrages avant le démarrage du chantier",
        "LOD (Level of Detail) : Définit la maturité géométrique et l'information des objets 3D",
        "CDE (Common Data Environment) : Environnement cloud centralisé d'échange des fichiers du projet",
        "Toujours fixer l'origine géodésique partagée (Lambert-93) dès le lancement du projet !",
      ],
    },

    {
      id: 23,
      key: 'self_assessment',
      title: "Auto-évaluation — BIM, CAO & Modélisation 3D",
      icon: '🏆',
      type: 'self_assessment',
      description: "Validez vos compétences en méthodologie et technologie BIM :",
      objectives: [
        "Je comprends la philosophie du BIM et la différence avec la simple modélisation 3D",
        "Je maîtrise le rôle des 7 dimensions du BIM (BIM 1D à 7D)",
        "Je connais le format d'échange ouvert IFC (ISO 16739) et la structure des objets",
        "Je sais définir les niveaux de détail LOD 100 à LOD 500 selon la phase de projet",
        "Je comprends le principe du Clash Detection et l'utilisation des tickets BCF",
        "Je connais les exigences de la norme ISO 19650 et le rôle du CDE et du BIM Manager",
        "J'ai résolu les 3 exercices de quantitatifs et de synthèse BIM avec succès",
        "J'ai obtenu 3/3 au quiz BIM",
      ],
    },
  ],

  quickQuiz: {
    question: "Quel format de fichier ouvert (OpenBIM) certifié ISO 16739 permet d'échanger des maquettes informatisées entre différents logiciels sans perte de données ?",
    options: [
      { id: 'a', label: "A) Fichier .DWG" },
      { id: 'b', label: "B) Format IFC (Industry Foundation Classes)" },
      { id: 'c', label: "C) Fichier PDF 3D" },
    ],
    correct: 'b',
    explanation: "Le format IFC est le standard universel et neutre certifié ISO 16739 permettant l'interopérabilité complète entre logiciels d'architecture, de structure et de fluides.",
  },
};
