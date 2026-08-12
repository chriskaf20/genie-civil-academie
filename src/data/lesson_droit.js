// ── Lesson: Droit de la Construction, Marchés & Assurances — Module 30 ──────
export const lesson_droit = {
  moduleId: 30,
  slug: 'droit',
  lessonIndex: 1,
  title: "Droit de la Construction, Marchés Publics & Assurances",
  subtitle: "Module 30 — Droit de la Construction, Marchés Publics & Responsabilités",
  level: 'Intermédiaire',
  duration: '35h',
  diagramType: 'bridge_structure',
  tags: ['Droit', 'Marchés Publics', 'Décennale', 'Loi MOP', 'Réception', 'Garantie', 'Dommages-Ouvrage', 'Pénalités'],

  steps: [
    {
      id: 1,
      key: 'definition',
      title: "Définition — Le Droit de la Construction & des Marchés",
      icon: '📖',
      type: 'definition',
      fr: 'Code de la Commande Publique, Garanties Légales (Art. 1792) & Assurances BTP',
      en: 'Construction Law, Public Procurement & Insurance',
      metier: "Pratiquée par les juristes en droit immobilier, ingénieurs d'affaires, conducteurs de travaux, économistes de la construction et maîtres d'ouvrage publics.",
      content: `Le **Droit de la Construction et de la Commande Publique** encadre l'ensemble des relations juridiques et contractuelles entre la maîtrise d'ouvrage (MOA), la maîtrise d'œuvre (MOE), les entreprises de travaux, les contrôleurs techniques et les assureurs.

### Les 3 Garanties Légales des Constructeurs (Article 1792 du Code Civil) :
1. **La Garantie de Parfait Achèvement (GPA - 1 an)** : L'entrepreneur est tenu de réparer tous les désordres et réserves signalés lors de la réception ou survenus dans l'année qui suit.
2. **La Garantie Biennale de Bon Fonctionnement (2 ans - Art. 1792-3)** : Couvre les éléments d'équipement dissociables de l'ouvrage (volets roulants, robinetterie, pompes, radiateurs).
3. **La Garantie Décennale (10 ans - Art. 1792 et 1792-2)** : Couvre les désordres graves qui **compromettent la solidité de l'ouvrage** (fissures traversantes, effondrement) ou le rendent **impropre à sa destination** (infiltrations d'eau en toiture, rupture d'étanchéité).

### Le Duo Obligatoire d'Assurances BTP (Loi Spinetta de 1978) :
- **L'Assurance Responsabilité Civile Décennale (RCD)** : Souscrite par les constructeurs (entreprises, MOE) pour couvrir leur responsabilité de 10 ans.
- **L'Assurance Dommages-Ouvrage (DO)** : Souscrite par le maître d'ouvrage (client) pour préfinancer les travaux de réparation décennaux **sans recherche préalable de responsabilité**.

> 💡 **L'acte juridique capital** : La **Réception des travaux** est l'acte juridique par lequel le maître d'ouvrage déclare accepter l'ouvrage avec ou sans réserves. Elle fixe le point de départ exact des garanties légales (GPA, biennale, décennale) !`,
    },

    {
      id: 2,
      key: 'importance',
      title: "Pourquoi la maîtrise juridique protège les acteurs du chantier",
      icon: '⚠️',
      type: 'importance',
      content: `Le secteur du BTP est soumis à un fort taux de sinistralité et de litiges financiers. Une erreur de contractualisation ou l'absence d'assurance valide mène directement à la faillite.

- **Présomption de responsabilité légale** : En cas de désordre décennal, le constructeur est présumé responsable de plein droit. Il ne peut s'exonérer qu'en prouvant une cause étrangère (force majeure).
- **Gestion des retards et pénalités** : Les retards de livraison subissent des pénalités contractuelles (souvent 1/1000è du montant du marché par jour de retard) pouvant détruire le bénéfice de l'entreprise.
- **Conformité aux marchés publics** : Le respect strict du Code de la Commande Publique (délais de paiement à 30 jours, acomptes mensuels, retenue de garantie de 5%) sécurise la trésorerie.

> ⚠️ **Règle d'or** : "Ne jamais démarrer un chantier sans avoir vérifié et archivé les **attestations d'assurance décennale (RCD)** en cours de validité à la date d'ouverture du chantier pour CHACUNE des entreprises et sous-traitants !"`,
    },

    {
      id: 3,
      key: 'applications',
      title: "Applications terrain — Actes juridiques & Gestion des litiges",
      icon: '🏗️',
      type: 'applications',
      examples: [
        {
          context: "Passation d'un Marché Public de Travaux (DCE)",
          text: "Rédaction des pièces contractuelles (CCAP, CCTP, BPU, DPGF) et analyse des offres selon les critères prix et valeur technique.",
        },
        {
          context: "Prononcé de la Réception des Travaux (Procès-Verbal)",
          text: "Visite de réception OPR avec le maître d'œuvre, rédaction du PV avec liste des réserves et fixation du délai d'exécution de la GPA.",
        },
        {
          context: "Déclaration de Sinistre auprès de l'Assurance Dommages-Ouvrage",
          text: "Déclaration d'infiltrations en toiture-terrasse 3 ans après livraison. Mandatement de l'expert DO et indemnisation rapide des réparations.",
        },
        {
          context: "Gestion des Ordres de Service (OS) de Travaux Modificatifs",
          text: "Émission d'un OS pour travaux supplémentaires demandés par le maître d'ouvrage avec fixation des prix provisoires.",
        },
        {
          context: "Établissement du Décompte Général Définitif (DGD)",
          text: "Arrêté des comptes finaux du chantier intégrant les acomptes versés, les avenants, les révisions de prix et les pénalités de retard.",
        },
      ],
    },

    {
      id: 4,
      key: 'theory',
      title: "Théorie — Les Garanties Légales & Le Régime de Responsabilité",
      icon: '📐',
      type: 'theory',
      diagramType: 'bridge_structure',
      content: `### 1. La Ligne du Temps des Garanties Légales (Art. 1792 et suivants)

$$\\text{Signature du Marché} \\longrightarrow \\text{Chantier} \\longrightarrow \\mathbf{\\text{RÉCEPTION (T=0)}} \\longrightarrow \\underbrace{\\text{GPA (1 an)}}_{\\text{Tous désordres}} \\longrightarrow \\underbrace{\\text{Biennale (2 ans)}}_{\\text{Équipements}} \\longrightarrow \\underbrace{\\text{Décennale (10 ans)}}_{\\text{Solidité / Impropriété}}$$

### 2. Le Mécanisme d'Indemnisation Loi Spinetta (DO / RCD)

1. **Survenance du Sinistre décennal** (ex: Fissure infiltrante à l'année N+3).
2. **Le Maître d'Ouvrage déclare le sinistre à son assureur Dommages-Ouvrage (DO)**.
3. **L'assureur DO a 60 jours pour désigner un expert et notifier sa prise en charge**.
4. **L'assureur DO verse l'indemnité préfinançant les travaux de réparation**.
5. **L'assureur DO se retourne ensuite (recours) contre les assureurs RCD** des entreprises responsables.

### 3. Les Sanctions Financières Contractuelles

- **Retenue de garantie (5% du TTC)** : Prélevée sur chaque acompte pour garantir la levée des réserves à la réception (libérée à la fin de la GPA).
- **Pénalités de retard** : $P_{retard} = n_{jours} \\times P_{journalier}$ (généralement $P_{journalier} = \\frac{\\text{Montant Marché}}{1000}$).`,
    },

    {
      id: 5,
      key: 'formulas',
      title: "Formules essentielles — Pénalités, Retenues & Décomptes",
      icon: '🔢',
      type: 'formulas',
      diagramType: 'bridge_structure',
      formulas: [
        {
          name: "Pénalités de retard journalières usuelles (CCAG Travaux)",
          latex: "P_r = \\frac{M_{\\text{TTC}}}{1000} \\cdot n_{\\text{jours de retard}} \\quad [\\text{\\euro}]",
          description: "M_TTC = montant du marché de l'entreprise, n = nombre de jours calendaires de retard injustifié.",
        },
        {
          name: "Montant de la Retenue de Garantie (5%)",
          latex: "RG = 0{,}05 \\cdot M_{\\text{TTC, acompte}} \\quad [\\text{\\euro}]",
          description: "Peut être remplacée par une caution personnelle et solidaire de premier appel d'un organisme bancaire.",
        },
        {
          name: "Décompte Général et Définitif (DGD Net)",
          latex: "DGD = M_{\\text{Marché initial}} + \\sum M_{\\text{Avenants}} + R_{\\text{prix}} - P_{\\text{pénalités}} - \\sum A_{\\text{acomptes}}",
          description: "Montant final du solde dû à l'entreprise après clôture des comptes du chantier.",
        },
        {
          name: "Delai maximal de paiement dans les Marchés Publics",
          latex: "t_{\\text{paiement}} \\le 30 \\text{ jours (État/Collectivités)} \\quad (\\text{Intérêts moratoires dus si retard})",
          description: "Le non-respect du délai de 30 jours donne droit automatiquement à des intérêts moratoires + indemnité forfaitaire de 40 €.",
        },
      ],
    },

    {
      id: 6,
      key: 'stepbystep',
      title: "Calcul complet — Décompte final de chantier, pénalités de retard et retenue de garantie",
      icon: '🔬',
      type: 'stepbystep',
      problem: "Une entreprise de Gros-Œuvre a conclu un marché de 500 000 € HT (600 000 € TTC avec TVA 20%). Le chantier a subi un avenant validé de +30 000 € HT (+36 000 € TTC) et une révision de prix de +12 000 € TTC. Les acomptes mensuels versés totalisent 550 000 € TTC (hors retenue de garantie). L'entreprise a livré le chantier avec 10 jours de retard injustifié (Pénalité = 1/1000è du montant du marché initial TTC par jour). 1) Calculer le montant final du marché révisé TTC. 2) Calculer le montant des pénalités de retard. 3) Calculer le solde net du DGD à verser à l'entreprise à la réception (avec retenue de garantie de 5% sur le marché total).",
      steps_demo: [
        { n: 1, text: "Calcul du montant total du marché révisé TTC : M_total_TTC = 600 000 + 36 000 + 12 000 = 648 000 € TTC" },
        { n: 2, text: "Calcul des pénalités de retard : Pénalité journalière = 600 000 € / 1000 = 600 €/jour. Pénalités pour 10 jours = 10 × 600 € = 6 000 €" },
        { n: 3, text: "Calcul de la Retenue de Garantie (5% sur le marché total révisé) : RG = 5% × 648 000 € = 32 400 €" },
        { n: 4, text: "Calcul du solde brut avant retenue de garantie : Solde_brut = M_total_TTC - Pénalités - Acomptes versés = 648 000 - 6 000 - 550 000 = 92 000 € TTC" },
        { n: 5, text: "Calcul du solde net payable immédiatement (en conservant la Retenue de Garantie RG) : Solde_net = Solde_brut - RG = 92 000 - 32 400 = 59 600 € TTC" },
        { n: 6, text: "Synthèse : L'entreprise perçoit 59 600 € TTC à la réception. La retenue de 32 400 € sera débloquée 1 an plus tard à la fin de la GPA." },
      ],
      result_latex: "P_{\\text{pénalités}} = \\textbf{6 000 \\euro} \\qquad RG_{5\\%} = \\textbf{32 400 \\euro} \\qquad \\text{Solde Net versé} = \\textbf{59 600 \\euro TTC} \\quad \\checkmark",
    },

    {
      id: 7,
      key: 'units',
      title: "Unités & Délais Juridiques en Construction — Tableau de référence",
      icon: '📏',
      type: 'units',
      table: [
        { grandeur: "Garantie de Parfait Achèvement (GPA)", si: "1 an à compter de la réception", imperial: "1 year", conversion: "Couvre TOUS les désordres et réserves de réception" },
        { grandeur: "Garantie Biennale", si: "2 ans à compter de la réception", imperial: "2 years", conversion: "Couvre les équipements dissociables (volets, pompes, radiateurs)" },
        { grandeur: "Garantie Décennale (Art. 1792)", si: "10 ans à compter de la réception", imperial: "10 years", conversion: "Couvre la solidité et l'impropriété à la destination" },
        { grandeur: "Délai de notification d'expertise DO", si: "60 jours calendaires maximum", imperial: "60 days", conversion: "L'assureur DO doit donner sa position sous 60 jours après déclaration" },
        { grandeur: "Délai de paiement des marchés publics", si: "30 jours calendaires", imperial: "30 days", conversion: "Intérêts moratoires automatiques en cas de dépassement" },
      ],
      note: "⚠️ ATTENTION : Les délais des garanties légales (1 an, 2 ans, 10 ans) sont des **délais de forclusion d'ordre public** ! Aucune action en justice n'est recevable après leur expiration.",
    },

    {
      id: 8,
      key: 'hypotheses',
      title: "Hypothèses & principes d'application du droit de la construction",
      icon: '📋',
      type: 'hypotheses',
      items: [
        { type: 'info', text: "La réception des travaux est obligatoire et unique. Elle peut être expresse (PV signé), judiciaire ou tacite (prise de possession + paiement quasi-intégral)." },
        { type: 'info', text: "Le sous-traitant n'a aucun lien contractuel direct avec le maître d'ouvrage (Loi du 31 décembre 1975). Mais il bénéficie du paiement direct en marché public !" },
        { type: 'warning', text: "ATTENTION : Les travaux modificatifs réalisés sans Ordre de Service (OS) écrit préalable ou avenant signé risquent de ne jamais être payés !" },
        { type: 'warning', text: "Désordre apparent non réservé à la réception : Tout désordre visible lors de la visite de réception qui n'est pas mentionné au Procès-Verbal est **purgé** (impossibilité de faire jouer la garantie décennale ensuite !)." },
        { type: 'tip', text: "Caution bancaire de retenue de garantie : L'entreprise a le droit de remplacer la retenue de 5% par une caution bancaire pour encaisser 100% de ses acomptes immédiatement." },
      ],
    },

    {
      id: 9,
      key: 'simple_examples',
      title: "Exemples guidés — Qualification des désordres & Retenues",
      icon: '✏️',
      type: 'examples_simple',
      examples: [
        {
          title: "Exemple 1 : Qualification d'une fissure en façade",
          given: "Une fissure traversante de 3 mm s'est formée à l'année N+4 sur un voile béton, provoquant des infiltrations d'eau dans les appartements",
          find: "Quelle garantie légale s'applique ?",
          solution_latex: "\\text{Désordre survenu à N+4 } (\\le 10 \\text{ ans}) + \\text{Infiltrations } (\\text{Impropriété à la destination}) \\implies \\textbf{Garantie Décennale (Art. 1792)}",
          result: "Mise en jeu de la garantie décennale et de l'assurance Dommages-Ouvrage.",
        },
        {
          title: "Exemple 2 : Calcul des pénalités de retard",
          given: "Marché de 200 000 € TTC. Retard de 15 jours. Pénalité contractuelle = 1/1000è du marché par jour",
          find: "Le montant des pénalités de retard",
          solution_latex: "P = 15 \\times \\left(\\frac{200\\,000}{1000}\\right) = 15 \\times 200 = 3\\,000 \\text{ \\euro}",
          result: "Pénalités de retard = 3 000 €.",
        },
        {
          title: "Exemple 3 : Calcul de la retenue de garantie",
          given: "Acompte mensuel n°3 d'un montant de 80 000 € TTC",
          find: "La retenue de garantie de 5%",
          solution_latex: "RG = 80\\,000 \\times 0{,}05 = 4\\,000 \\text{ \\euro}",
          result: "Retenue prélevée = 4 000 € (Net versé = 76 000 € TTC).",
        },
      ],
    },

    {
      id: 10,
      key: 'real_examples',
      title: "Exemple réel — Sinistre Décennal d'un Complexe Immobilier",
      icon: '🏢',
      type: 'examples_real',
      diagramType: 'bridge_structure',
      examples: [
        {
          context: "Effondrement partiel d'un plancher de parking souterrain 3 ans après livraison d'une résidence de 80 logements",
          scenario: "Activation immédiate de la police Dommages-Ouvrage (DO). L'assureur DO débloque 1,4 M€ sous 90 jours pour consolider l'ouvrage par reprise en sous-œuvre.",
          decomposition_latex: "\\text{Préfinancement DO : } 1{,}4 \\text{ M\\euro} \\quad \\Rightarrow \\quad \\text{Recours ultérieur DO contre la RCD de l'entreprise de Gros-Œuvre}",
          lesson: "Sans la loi Spinetta et l'assurance DO obligatoire, les copropriétaires auraient attendu 8 ans de procès judiciaire avant d'obtenir les fonds nécessaires pour réparer leur parking !",
        },
      ],
    },

    {
      id: 11,
      key: 'diagrams',
      title: "Schéma du déroulement des Garanties Légales & Processus DO/RCD",
      icon: '📊',
      type: 'interactive_diagram',
      diagramType: 'bridge_structure',
      description: "Visualisez la chronologie des garanties légales (GPA, Biennale, Décennale) et l'organigramme des flux financiers entre l'Assurance Dommages-Ouvrage et la RCD.",
      diagram_description: [
        "Chronologie des garanties : Réception (T=0), GPA (0-1 an), Biennale (0-2 ans), Décennale (0-10 ans)",
        "Circuit de la loi Spinetta : Maître d'ouvrage -> Assurance DO -> Indemnisation directe -> Recours RCD",
        "Organigramme contractuel : MOA, MOE, Entreprise Générale, Sous-traitants, Contrôleur Technique (CT)",
      ],
    },

    {
      id: 12,
      key: 'mistakes',
      title: "Pièges & Erreurs juridiques fatales en chantier",
      icon: '⛔',
      type: 'mistakes',
      items: [
        {
          mistake: "Laisser s'installer une réception tacite sans procès-verbal écrit",
          trap: "Prendre possession des lieux et payer l'entreprise sans signer de Procès-Verbal de Réception",
          fix: "Extrêmement dangereux ! Le point de départ des garanties (décennale) et la preuve des réserves deviennent flous. Toujours dresser un PV de réception écrit.",
        },
        {
          mistake: "Oublier de vérifier la date de souscription de l'assurance Décennale",
          trap: "Accepter une attestation décennale souscrite le lendemain de l'ouverture du chantier",
          fix: "La garantie décennale est **nulle** si la police n'était pas valide au jour de l'Ouverture du Chantier (DROC) ! Exiger l'attestation valide à la DROC.",
        },
        {
          mistake: "Penser qu'un sous-traitant est soumis à la garantie décennale légale",
          trap: "Poursuivre directement un sous-traitant sur le fondement de l'article 1792 du Code Civil",
          fix: "Le sous-traitant n'est pas un 'constructeur' au sens de l'article 1792. Sa responsabilité envers l'entreprise principale est de nature contractuelle de droit commun (Art. 1231-1).",
        },
      ],
    },

    {
      id: 13,
      key: 'tips',
      title: "Astuces du spécialiste en Droit de la Construction",
      icon: '💡',
      type: 'tips',
      tips: [
        "Gestion des réserves à la réception : Détailler précisément chaque réserve sur le PV (ex: 'Infiltration d'eau sous fenêtre F02 chambre 1' et non pas 'Problème fenêtre').",
        "Paiement direct du sous-traitant en marché public : Le sous-traitant accepté par le maître d'ouvrage doit envoyer ses demandes d'acompte directement au MOE et MOA pour être payé sans passer par l'entreprise principale.",
        "Caution bancaire de retenue de garantie : Mettre en place une caution bancaire dès le début du chantier pour conserver 100% de sa trésorerie.",
        "Interruption de la prescription décennale : Seule une citation en justice ou une reconnaissance de responsabilité interrompt le délai de 10 ans ! Une simple lettre recommandée ne suffit pas.",
      ],
    },

    {
      id: 14,
      key: 'normes',
      title: "Textes Réglementaires & Codes Juridiques",
      icon: '📜',
      type: 'norms',
      norms: [
        { code: "Code Civil (Articles 1792 à 1792-6)", description: "Textes fondateurs relatifs à la responsabilité des constructeurs et au contrat de louage d'ouvrage." },
        { code: "Loi Spinetta n° 78-12 du 4 janvier 1978", description: "Loi instituant l'obligation d'assurance Décennale (RCD) et Dommages-Ouvrage (DO)." },
        { code: "Code de la Commande Publique (Lois MOP)", description: "Règles de passation, d'exécution et de règlement des marchés publics de travaux." },
        { code: "NF P 03-001 (CCAG Bâtiment)", description: "Cahier des clauses administratives générales applicables aux marchés privés de bâtiment." },
      ],
    },

    {
      id: 15,
      key: 'exercises',
      title: "Exercices Droit & Marchés de Construction — 3 niveaux",
      icon: '✍️',
      type: 'exercises',
      exercises: [
        {
          id: 'ex_dro_1',
          number: 1,
          difficulty: 'Facile',
          text: "Un carrelage se décolle 18 mois après la réception. Il s'agit d'un élément d'équipement dissociable qui ne nuit pas à la solidité du bâtiment. Quelle garantie s'applique ?",
          hint: "Délai ≤ 2 ans sur élément dissociable.",
          answer_latex: "\\text{Délai 18 mois } (\\le 2 \\text{ ans}) + \\text{Élément dissociable} \\implies \\textbf{Garantie Biennale de Bon Fonctionnement (Art. 1792-3)}",
          answer_text: "Garantie biennale de bon fonctionnement.",
        },
        {
          id: 'ex_dro_2',
          number: 2,
          difficulty: 'Moyen',
          text: "Un marché de 400 000 € TTC enregistre 8 jours de retard. La pénalité contractuelle est de 1/1000è du marché par jour de retard. Calculer le montant des pénalités.",
          hint: "P = n × (Montant / 1000).",
          answer_latex: "P = 8 \\times \\frac{400\\,000}{1000} = 8 \\times 400 = 3\\,200 \\text{ \\euro}",
          answer_text: "Pénalités de retard = 3 200 €.",
        },
        {
          id: 'ex_dro_3',
          number: 3,
          difficulty: 'Difficile',
          text: "Le décompte d'un marché s'établit ainsi : Marché initial = 800 000 € TTC, Avenants = +50 000 € TTC, Pénalités = 10 000 €, Acomptes déjà versés = 700 000 € TTC. Calculer le solde brut et la retenue de garantie de 5% à réserver sur le marché total.",
          hint: "Marché révisé = 850 000 €. RG = 5% de 850 000 €.",
          answer_latex: "\\text{Marché total} = 850\\,000 \\text{ \\euro} \\qquad RG = 5\\% \\times 850\\,000 = 42\\,500 \\text{ \\euro}",
          answer_latex_2: "\\text{Solde Brut} = 850\\,000 - 10\\,000 - 700\\,000 = 140\\,000 \\text{ \\euro} \\qquad \\text{Solde Net versé} = 140\\,000 - 42\\,500 = 97\\,500 \\text{ \\euro TTC}",
          answer_text: "Retenue de garantie RG = 42 500 € | Solde Net versé à l'entreprise = 97 500 € TTC.",
        },
      ],
    },

    {
      id: 16,
      key: 'corrections',
      title: "Corrections détaillées",
      icon: '✅',
      type: 'corrections',
      note: "Retrouvez l'analyse jurisprudentielle et le détail des calculs de marchés en cliquant sur 'Voir la correction'.",
    },

    {
      id: 17,
      key: 'quiz',
      title: "Quiz Droit de la Construction — 3 questions",
      icon: '🎯',
      type: 'quiz',
      questions: [
        {
          id: 'q_dro_1',
          question: "Quel est le point de départ juridique des garanties légales (GPA, biennale, décennale) ?",
          options: [
            { id: 'a', text: "La date de signature du marché" },
            { id: 'b', text: "La date du Procès-Verbal de Réception des travaux" },
            { id: 'c', text: "La date du premier acompte" },
          ],
          correct: 'b',
          explanation: "La Réception des travaux (signée par le MOA et l'entreprise) est le point de départ légal unique de la GPA (1 an), biennale (2 ans) et décennale (10 ans).",
        },
        {
          id: 'q_dro_2',
          question: "Quel est le rôle principal de l'Assurance Dommages-Ouvrage (DO) souscrite par le client ?",
          options: [
            { id: 'a', text: "Payer le salaire des ouvriers" },
            { id: 'b', text: "Préfinancer rapidement les réparations des désordres décennaux sans attendre une décision de justice sur les responsabilités" },
            { id: 'c', text: "Assurer les véhicules du chantier" },
          ],
          correct: 'b',
          explanation: "L'assurance DO préfinance les travaux de réparation des sinistres décennaux immédiatement, puis se retourne contre les constructeurs responsables.",
        },
        {
          id: 'q_dro_3',
          question: "Quel est le pourcentage usuel de la retenue de garantie prélevée sur les acomptes d'un marché de travaux ?",
          options: [
            { id: 'a', text: "1%" },
            { id: 'b', text: "5%" },
            { id: 'c', text: "20%" },
          ],
          correct: 'b',
          explanation: "La retenue de garantie légale est fixée à 5% maximum du montant du marché TTC pour garantir la levée des réserves à la fin de la GPA.",
        },
      ],
    },

    {
      id: 18,
      key: 'exam_questions',
      title: "Questions d'examen — Master Droit du BTP",
      icon: '🎓',
      type: 'exam',
      questions: [
        "Distinguez les conditions de mise en œuvre de la Garantie de Parfait Achèvement (Art. 1792-6) et de la Garantie Décennale (Art. 1792).",
        "Présentez le régime juridique du paiement direct des sous-traitants dans les marchés publics (Loi du 31 décembre 1975).",
      ],
    },

    {
      id: 19,
      key: 'interview_questions',
      title: "Questions d'entretien — Juriste / Conducteur de Travaux",
      icon: '💼',
      type: 'interview',
      questions: [
        {
          question: "Que faites-vous si le maître d'ouvrage refuse de signer le Procès-Verbal de Réception alors que le bâtiment est habité ?",
          answer_hint: "On peut solliciter la Réception Tacite (prise de possession des lieux + paiement de la quasi-totalité du prix) ou saisir le tribunal pour prononcer une Réception Judiciaire à la date où l'ouvrage était en état d'être reçu.",
        },
      ],
    },

    {
      id: 20,
      key: 'practical_case',
      title: "Cas pratique — Litige de désordres d'étanchéité et mise en jeu de la garantie décennale",
      icon: '🔧',
      type: 'practical',
      scenario: "Infiltration d'eau majeure apparue 3 ans après livraison dans le toit d'une école municipale (Coût des travaux de reprise = 180 000 €).",
      description: "Gestion de la déclaration DO et recours contre l'étancheur et le maître d'œuvre.",
      resolution_latex_1: "\\text{Prise en charge DO sous 60 jours : } 180\\,000 \\text{ \\euro préfinancés par l'assurance DO}",
      resolution_latex_2: "\\text{Recours DO : } 70\\% \\text{ à la charge de l'étancheur (défaut de pose) et } 30\\% \\text{ à la charge du MOE (défaut de suivi)}",
      conclusion: "Travaux de réfection achevés sans frais pour la commune.",
    },

    {
      id: 21,
      key: 'summary',
      title: "Résumé exécutif — Le Droit de la Construction en 6 points",
      icon: '📋',
      type: 'summary',
      content: `### Le Droit de la Construction en 6 points clés

1. **Réception des Travaux** : Acte fondateur déclenchant le départ des garanties légales.
2. **Garantie GPA (1 an)** : Couvre l'ensemble des réserves et désordres de la 1ère année.
3. **Garantie Biennale (2 ans)** : Couvre les équipements dissociables.
4. **Garantie Décennale (10 ans)** : Couvre la solidité et l'impropriété à la destination.
5. **Assurances DO / RCD** : Duo obligatoire préfinançant les sinistres décennaux.
6. **Retenue de Garantie (5%)** : Bloquée pendant 1 an ou remplacée par une caution bancaire.`,
    },

    {
      id: 22,
      key: 'key_points',
      title: "Points clés à mémoriser — Droit du BTP",
      icon: '⭐',
      type: 'keypoints',
      points: [
        "Réception = point de départ légal des garanties",
        "GPA = 1 an | Biennale = 2 ans | Décennale = 10 ans",
        "Assurance DO obligatoire pour le maître d'ouvrage",
        "Attestation décennale valide à la DROC obligatoire pour l'entreprise",
        "Pénalités de retard usuelles = 1/1000è du marché par jour",
      ],
    },

    {
      id: 23,
      key: 'self_assessment',
      title: "Auto-évaluation — Droit & Marchés Publics",
      icon: '🏆',
      type: 'self_assessment',
      description: "Validez vos compétences en droit de la construction et marchés :",
      objectives: [
        "Je connais les 3 garanties légales (GPA, biennale, décennale) et leurs périmètres",
        "Je comprends le rôle et le fonctionnement des assurances DO et RCD",
        "Je sais calculer le décompte général final avec pénalités et retenue de 5%",
        "J'ai résolu les 3 exercices de droit et marchés avec succès",
        "J'ai obtenu 3/3 au quiz de droit de la construction",
      ],
    },
  ],

  quickQuiz: {
    question: "Quelle est la durée de la garantie décennale légale (Art. 1792 du Code Civil) ?",
    options: [
      { id: 'a', label: "A) 2 ans" },
      { id: 'b', label: "B) 10 ans à compter de la réception" },
      { id: 'c', label: "C) 30 ans" },
    ],
    correct: 'b',
    explanation: "La garantie décennale couvre pendant 10 ans à compter de la réception la solidité et l'impropriété à la destination de l'ouvrage.",
  },
};
