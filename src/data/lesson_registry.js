// Lessons of each catalog module (data/modules.js), in teaching order.
// Each lesson file becomes its own chunk and is loaded only when opened.
// `title` must match the lesson's own title (checked by `npm run validate`).
// `domain` selects the formula-dictionary context and the structural sketches.

const lesson = (key, title, domain, load) => ({ key, title, domain, load });

export const MODULE_LESSONS = {
  1: [
    lesson('maths_trig', 'Trigonométrie de Base & Théorème de Pythagore', 'maths', () => import('./lesson_maths.js').then(m => m.lesson_maths_trig)),
    lesson('maths_advanced_trig', 'Trigonométrie Avancée & Triangles Quelconques', 'maths', () => import('./lesson_maths.js').then(m => m.lesson_maths_advanced_trig)),
    lesson('maths_vectors', 'Calcul Vectoriel, Projection de Forces & Équilibre Statique', 'maths', () => import('./lesson_maths.js').then(m => m.lesson_maths_vectors)),
    lesson('maths_calculus', 'Calcul Différentiel & Intégral Appliqué aux Poutres', 'maths', () => import('./lesson_maths.js').then(m => m.lesson_maths_calculus)),
    lesson('maths_stats', "Statistiques & Probabilités pour l'Ingénieur : Valeurs Caractéristiques, Fiabilité & Événements Extrêmes", 'maths', () => import('./lesson_maths_stats.js').then(m => m.lesson_maths_stats)),
  ],
  2: [
    lesson('physique', 'Physique Fondamentale, Mécanique Classique & Thermodynamique', 'physique', () => import('./lesson_physique.js').then(m => m.lesson_physique)),
    lesson('physique_dynamique', "Dynamique des Corps : Lois de Newton, Énergie, Quantité de Mouvement & Oscillations", 'physique', () => import('./lesson_physique_dynamique.js').then(m => m.lesson_physique_dynamique)),
    lesson('physique_thermo', "Thermodynamique & Transferts de Chaleur : Dilatation, Chaleur, Conduction et Rayonnement", 'physique', () => import('./lesson_physique_thermo.js').then(m => m.lesson_physique_thermo)),
  ],
  3: [
    lesson('chimie', 'Chimie des Matériaux : Hydratation du Ciment, Carbonatation & Corrosion des Armatures', 'chimie', () => import('./lesson_chimie.js').then(m => m.lesson_chimie)),
    lesson('chimie_liaisons', "Structure de la Matière & Liaisons Chimiques : du Réseau Cristallin aux Propriétés des Matériaux", 'chimie', () => import('./lesson_chimie_liaisons.js').then(m => m.lesson_chimie_liaisons)),
    lesson('chimie_polymeres', "Polymères, Adjuvants, Résines & Composites dans la Construction", 'chimie', () => import('./lesson_chimie_polymeres.js').then(m => m.lesson_chimie_polymeres)),
  ],
  4: [
    lesson('dessin', 'Dessin Technique, Cotation & Lecture de Plans de BTP', 'dessin', () => import('./lesson_dessin.js').then(m => m.lesson_dessin)),
    lesson('dessin_coupes', "Projections, Vues, Coupes & Sections : Représenter un Ouvrage à l'Échelle", 'dessin', () => import('./lesson_dessin_coupes.js').then(m => m.lesson_dessin_coupes)),
    lesson('dessin_plans_execution', "Lecture des Plans d'Exécution : Coffrage, Ferraillage, Nomenclatures & Quantités", 'dessin', () => import('./lesson_dessin_plans_execution.js').then(m => m.lesson_dessin_plans_execution)),
  ],
  5: [
    lesson('bim', 'BIM, CAO, Interopérabilité IFC & Modélisation 3D', 'bim', () => import('./lesson_bim.js').then(m => m.lesson_bim)),
    lesson('bim_management', 'BIM Management, Collaboration IFC/BCF, CDE & Coordination 4D/5D', 'bim', () => import('./lesson_bim_management.js').then(m => m.lesson_bim_management)),
    lesson('bim_autocad', "DAO avec AutoCAD : Coordonnées, Calques, Blocs, Échelles d'Annotation & Mise en Page", 'bim', () => import('./lesson_bim_autocad.js').then(m => m.lesson_bim_autocad)),
    lesson('bim_revit_tekla', "Modélisation BIM Structure : Revit Structure, Tekla, Modèle Analytique & Échanges IFC", 'bim', () => import('./lesson_bim_revit_tekla.js').then(m => m.lesson_bim_revit_tekla)),
  ],
  6: [
    lesson('mecanique', 'Statique & Mécanique des Structures', 'mecanique', () => import('./lesson_mecanique.js').then(m => m.lesson_mecanique)),
    lesson('meca_hydrostatique', "Hydrostatique : Pression, Poussée sur les Parois, Sous-pressions & Flottabilité", 'hydraulique', () => import('./lesson_meca_hydrostatique.js').then(m => m.lesson_meca_hydrostatique)),
    lesson('meca_bernoulli', "Dynamique des Fluides : Continuité, Bernoulli, Reynolds & Pertes de Charge", 'hydraulique', () => import('./lesson_meca_bernoulli.js').then(m => m.lesson_meca_bernoulli)),
  ],
  7: [
    lesson('rdm', 'Contraintes Normales & Moments Fléchissants', 'rdm', () => import('./lesson_rdm.js').then(m => m.lesson_rdm)),
    lesson('rdm_cisaillement', "Effort Tranchant, Contraintes de Cisaillement & Torsion", 'rdm', () => import('./lesson_rdm_cisaillement.js').then(m => m.lesson_rdm_cisaillement)),
    lesson('rdm_fleches', "Flèches & Déformées des Poutres : Équation de la Ligne Élastique et Formulaire", 'rdm', () => import('./lesson_rdm_fleches.js').then(m => m.lesson_rdm_fleches)),
    lesson('rdm_flambement', "Flambement des Poteaux : Charge Critique d'Euler, Élancement & Courbes Européennes", 'rdm', () => import('./lesson_rdm_flambement.js').then(m => m.lesson_rdm_flambement)),
  ],
  8: [
    lesson('analyse', 'Analyse Structurelle Avancée, Méthode des Éléments Finis (MEF) & Dynamique', 'structures', () => import('./lesson_analyse.js').then(m => m.lesson_analyse)),
    lesson('seisme', 'Génie Parasismique, Eurocode 8 & Protection des Structures', 'structures', () => import('./lesson_seisme.js').then(m => m.lesson_seisme)),
    lesson('structures_matricielle', "Structures Hyperstatiques : Théorème des Trois Moments & Méthode Matricielle des Déplacements", 'structures', () => import('./lesson_structures_matricielle.js').then(m => m.lesson_structures_matricielle)),
    lesson('structures_non_lineaire', "Analyse Non Linéaire : Effets du Second Ordre, Rotules Plastiques & Analyse Push-over", 'structures', () => import('./lesson_structures_non_lineaire.js').then(m => m.lesson_structures_non_lineaire)),
  ],
  9: [
    lesson('beton_arme', 'Flexion Simple — Dimensionnement des Armatures', 'beton_arme', () => import('./lesson_beton_arme.js').then(m => m.lesson_beton_arme)),
    lesson('ba_effort_tranchant', "Effort Tranchant en Béton Armé : Bielles, Étriers & Méthode de l'EC2", 'beton_arme', () => import('./lesson_ba_effort_tranchant.js').then(m => m.lesson_ba_effort_tranchant)),
    lesson('ba_poteaux', "Poteaux en Béton Armé : Compression Centrée, Élancement & Flexion Composée", 'beton_arme', () => import('./lesson_ba_poteaux.js').then(m => m.lesson_ba_poteaux)),
    lesson('ba_dalles', "Dalles en Béton Armé : Portée dans un Sens ou deux Sens, Moments & Ferraillage", 'beton_arme', () => import('./lesson_ba_dalles.js').then(m => m.lesson_ba_dalles)),
    lesson('ba_semelles', "Semelles de Fondation en Béton Armé : Dimensionnement et Méthode des Bielles", 'beton_arme', () => import('./lesson_ba_semelles.js').then(m => m.lesson_ba_semelles)),
  ],
  10: [
    lesson('precontrainte', 'Béton Précontraint par Pré-tension & Post-tension (Eurocode 2)', 'precontrainte', () => import('./lesson_precontrainte.js').then(m => m.lesson_precontrainte)),
    lesson('precontrainte_pertes', "Pertes de Précontrainte : Frottement, Recul d'Ancrage, Raccourcissement Élastique & Pertes Différées", 'precontrainte', () => import('./lesson_precontrainte_pertes.js').then(m => m.lesson_precontrainte_pertes)),
  ],
  11: [
    lesson('metal', 'Conception, Dimensionnement & Eurocode 3 des Structures Métalliques', 'metal', () => import('./lesson_metal.js').then(m => m.lesson_metal)),
    lesson('metal_assemblages', "Assemblages Métalliques : Boulons Ordinaires, Boulons Précontraints & Soudures (EC3-1-8)", 'metal', () => import('./lesson_metal_assemblages.js').then(m => m.lesson_metal_assemblages)),
    lesson('metal_instabilites', "Instabilités des Éléments en Acier : Classes de Sections, Déversement & Voilement (EC3)", 'metal', () => import('./lesson_metal_instabilites.js').then(m => m.lesson_metal_instabilites)),
  ],
  12: [
    lesson('bois', 'Conception, Dimensionnement & Eurocode 5 des Structures Bois', 'bois', () => import('./lesson_bois.js').then(m => m.lesson_bois)),
    lesson('bois_assemblages', "Assemblages Bois : Théorie de Johansen, Broches, Boulons, Vis & Connecteurs (EC5)", 'bois', () => import('./lesson_bois_assemblages.js').then(m => m.lesson_bois_assemblages)),
    lesson('bois_clt', "Bois d'Ingénierie : Lamellé-Collé, CLT, LVL & Construction Bois de Grande Hauteur", 'bois', () => import('./lesson_bois_clt.js').then(m => m.lesson_bois_clt)),
  ],
  13: [
    lesson('geotechnique', 'Capacité Portante & Mécanique des Sols', 'geotechnique', () => import('./lesson_geotechnique.js').then(m => m.lesson_geotechnique)),
    lesson('fondations', 'Fondations Profondes, Pieux, Parois Moulées & Ouvrages de Soutènement', 'fondations', () => import('./lesson_fondations.js').then(m => m.lesson_fondations)),
    lesson('sols_classification', "Identification & Classification des Sols : Paramètres d'État, Atterberg, GTR et Reconnaissance", 'geotechnique', () => import('./lesson_sols_classification.js').then(m => m.lesson_sols_classification)),
    lesson('consolidation_tassements', "Consolidation & Tassements : Diffusion des Contraintes, Œdomètre et Évolution dans le Temps", 'geotechnique', () => import('./lesson_consolidation_tassements.js').then(m => m.lesson_consolidation_tassements)),
    lesson('stabilite_pentes', "Stabilité des Pentes & Talus : Pente Infinie, Méthode des Tranches et Confortements", 'geotechnique', () => import('./lesson_stabilite_pentes.js').then(m => m.lesson_stabilite_pentes)),
  ],
  14: [
    lesson('hydraulique', 'Écoulements, Réseaux & Ouvrages Hydrauliques', 'hydraulique', () => import('./lesson_hydraulique.js').then(m => m.lesson_hydraulique)),
    lesson('aep_reseaux', "Réseaux d'Alimentation en Eau Potable : Besoins, Réservoirs, Dimensionnement & Maillage", 'hydraulique', () => import('./lesson_aep_reseaux.js').then(m => m.lesson_aep_reseaux)),
    lesson('assainissement_reseaux', "Réseaux d'Assainissement : Eaux Usées, Eaux Pluviales, Dimensionnement & Autocurage", 'hydraulique', () => import('./lesson_assainissement_reseaux.js').then(m => m.lesson_assainissement_reseaux)),
  ],
  15: [
    lesson('routes', 'Conception, Tracé & Dimensionnement des Chaussées', 'routes', () => import('./lesson_routes.js').then(m => m.lesson_routes)),
    lesson('routes_signalisation', "Signalisation, Équipements & Sécurité Routière : Visibilité, Marquages et Analyse des Accidents", 'routes', () => import('./lesson_routes_signalisation.js').then(m => m.lesson_routes_signalisation)),
    lesson('routes_terrassements', "Terrassements Routiers : Profils en Travers, Cubatures, Mouvements des Terres & Compactage", 'routes', () => import('./lesson_routes_terrassements.js').then(m => m.lesson_routes_terrassements)),
  ],
  16: [
    lesson('ponts', 'Conception, Calcul & Inspection des Ponts', 'ponts', () => import('./lesson_ponts.js').then(m => m.lesson_ponts)),
    lesson('ponts_typologie', "Typologie & Conception des Ponts : Choisir la Structure selon la Portée, le Site et les Matériaux", 'ponts', () => import('./lesson_ponts_typologie.js').then(m => m.lesson_ponts_typologie)),
    lesson('ponts_inspection', "Inspection, Surveillance & Maintenance des Ponts : Classification IQOA, Épreuves et Gestion du Patrimoine", 'ponts', () => import('./lesson_ponts_inspection.js').then(m => m.lesson_ponts_inspection)),
  ],
  17: [
    lesson('tunnels', 'Méthodes de Creusement & Structuration des Tunnels', 'tunnels', () => import('./lesson_tunnels.js').then(m => m.lesson_tunnels)),
    lesson('tunnels_revetement', "Revêtement Définitif & Étanchéité des Tunnels : Béton Coffré, Voussoirs et Gestion des Eaux", 'tunnels', () => import('./lesson_tunnels_revetement.js').then(m => m.lesson_tunnels_revetement)),
    lesson('tunnels_ventilation', "Ventilation, Sécurité & Équipements des Tunnels Routiers : Air Sain, Désenfumage et Évacuation", 'tunnels', () => import('./lesson_tunnels_ventilation.js').then(m => m.lesson_tunnels_ventilation)),
  ],
  18: [
    lesson('barrages', 'Conception, Stabilité & Sécurité des Barrages', 'barrages', () => import('./lesson_barrages.js').then(m => m.lesson_barrages)),
    lesson('barrages_remblai', "Barrages en Remblai : Conception, Écoulements, Filtres, Revanche & Érosion Interne", 'barrages', () => import('./lesson_barrages_remblai.js').then(m => m.lesson_barrages_remblai)),
    lesson('barrages_auscultation', "Auscultation & Surveillance des Barrages : Instruments, Modèle HST, Seuils d'Alerte et Réglementation", 'barrages', () => import('./lesson_barrages_auscultation.js').then(m => m.lesson_barrages_auscultation)),
  ],
  19: [
    lesson('aeroports', 'Conception, Orientation & Dimensionnement des Chaussées Aéroportuaires', 'aeroports', () => import('./lesson_aeroports.js').then(m => m.lesson_aeroports)),
    lesson('aeroports_aires', "Aires de Mouvement : Orientation des Pistes, Voies de Circulation, Aires de Trafic & Servitudes", 'aeroports', () => import('./lesson_aeroports_aires.js').then(m => m.lesson_aeroports_aires)),
    lesson('aeroports_balisage', "Balisage Lumineux & Aides Visuelles : Marquages, Feux de Piste, Rampes d'Approche et Catégories d'Exploitation", 'aeroports', () => import('./lesson_aeroports_balisage.js').then(m => m.lesson_aeroports_balisage)),
  ],
  20: [
    lesson('ports', 'Conception, Ouvrages Maritimes & Dynamique Côtière', 'ports', () => import('./lesson_ports.js').then(m => m.lesson_ports)),
    lesson('ports_quais', "Quais & Appontements : Quais-Poids, Rideaux de Palplanches, Ouvrages sur Pieux et Ducs d'Albe", 'ports', () => import('./lesson_ports_quais.js').then(m => m.lesson_ports_quais)),
    lesson('ports_houle', "Houle, Marées & Protection du Littoral : Propagation, Déferlement et Ouvrages Côtiers", 'ports', () => import('./lesson_ports_houle.js').then(m => m.lesson_ports_houle)),
  ],
  21: [
    lesson('ferroviaire', 'Conception, Géométrie & Superstructure des Voies Ferrées', 'ferroviaire', () => import('./lesson_ferroviaire.js').then(m => m.lesson_ferroviaire)),
    lesson('ferroviaire_signalisation', "Signalisation Ferroviaire & Capacité des Lignes : Cantonnement, Distances de Freinage et ERTMS", 'ferroviaire', () => import('./lesson_ferroviaire_signalisation.js').then(m => m.lesson_ferroviaire_signalisation)),
    lesson('ferroviaire_plateforme', "Plateforme, Ballast & Maintenance de la Voie : Transmission des Charges, Géométrie et Entretien", 'ferroviaire', () => import('./lesson_ferroviaire_plateforme.js').then(m => m.lesson_ferroviaire_plateforme)),
  ],
  22: [
    lesson('topographie', 'Topographie, Géodésie, Positionnement GNSS & SIG', 'topographie', () => import('./lesson_topographie.js').then(m => m.lesson_topographie)),
    lesson('topo_leves', "Levés Topographiques & Implantation : Gisements, Rayonnement, Polygonation et Station Totale", 'topographie', () => import('./lesson_topo_leves.js').then(m => m.lesson_topo_leves)),
    lesson('topo_sig', "SIG & Projections : Lambert 93, Réduction des Distances, Données Vecteur et Raster", 'topographie', () => import('./lesson_topo_sig.js').then(m => m.lesson_topo_sig)),
  ],
  23: [
    lesson('materiaux', 'Science, Propriétés & Durabilité des Matériaux de Construction', 'materiaux', () => import('./lesson_materiaux.js').then(m => m.lesson_materiaux)),
    lesson('materiaux_beton_formulation', "Formulation des Bétons : Classes d'Exposition, Rapport E/C, Méthode de Dreux-Gorisse et Volumes Absolus", 'materiaux', () => import('./lesson_materiaux_beton_formulation.js').then(m => m.lesson_materiaux_beton_formulation)),
    lesson('materiaux_aciers', "Aciers de Construction : Armatures B500, Aciers de Charpente S235–S355, Essai de Traction et Soudabilité", 'materiaux', () => import('./lesson_materiaux_aciers.js').then(m => m.lesson_materiaux_aciers)),
    lesson('materiaux_innovants', "Matériaux Innovants : BFUP, Composites FRP, Bétons Autoplaçants et Bas Carbone", 'materiaux', () => import('./lesson_materiaux_innovants.js').then(m => m.lesson_materiaux_innovants)),
  ],
  24: [
    lesson('chantier', 'Organisation, Planification & Conduite de Chantier de BTP', 'chantier', () => import('./lesson_chantier.js').then(m => m.lesson_chantier)),
    lesson('metre', 'Métré, Étude de Prix, Devis Quantitatif Estimatif & Subventions', 'metre', () => import('./lesson_metre.js').then(m => m.lesson_metre)),
    lesson('chantier_reception', "Réception des Travaux : OPR, Réserves, Garanties, DOE et Clôture Financière", 'chantier', () => import('./lesson_chantier_reception.js').then(m => m.lesson_chantier_reception)),
  ],
  25: [
    lesson('management', 'Management de Projet, Méthode PERT/CPM, Earned Value & Direction de Travaux', 'management', () => import('./lesson_management.js').then(m => m.lesson_management)),
    lesson('projets_risques', "Gestion des Risques de Projet : Registre, Criticité, Valeur Monétaire Attendue et Analyse PERT Probabiliste", 'management', () => import('./lesson_projets_risques.js').then(m => m.lesson_projets_risques)),
  ],
  26: [
    lesson('hse', 'Prévention des Risques sur Chantier : Principes Généraux, PGC, PPSPS & Protections', 'hse', () => import('./lesson_hse.js').then(m => m.lesson_hse)),
    lesson('hse_accidents', "Accidents du Travail : Indicateurs TF/TG, Arbre des Causes et Plan d'Actions Correctives", 'hse', () => import('./lesson_hse_accidents.js').then(m => m.lesson_hse_accidents)),
  ],
  27: [
    lesson('eco', 'Éco-construction, Matériaux Biosourcés, ACV & Décarbonation du BTP', 'eco', () => import('./lesson_eco.js').then(m => m.lesson_eco)),
    lesson('climat', 'Adaptation des Infrastructures au Changement Climatique & Résilience', 'climat', () => import('./lesson_climat.js').then(m => m.lesson_climat)),
    lesson('energie', 'Énergies Renouvelables, Efficacité Énergétique du Bâtiment & Smart Grids', 'energie', () => import('./lesson_energie.js').then(m => m.lesson_energie)),
    lesson('environnement_certifications', "Certifications Environnementales : HQE, BREEAM, LEED — Critères, Calcul des Scores et Stratégie", 'eco', () => import('./lesson_environnement_certifications.js').then(m => m.lesson_environnement_certifications)),
  ],
  28: [
    lesson('normes', "Eurocodes, Normes NF EN & DTU : Architecture Normative et Combinaisons d'Actions", 'normes', () => import('./lesson_normes.js').then(m => m.lesson_normes)),
    lesson('droit', 'Droit de la Construction, Marchés Publics & Assurances', 'droit', () => import('./lesson_droit.js').then(m => m.lesson_droit)),
    lesson('normes_eurocodes_materiaux', "Eurocodes 2 à 9 : Valeurs de Calcul des Matériaux, Coefficients Partiels et Annexes Nationales", 'normes', () => import('./lesson_normes_eurocodes_materiaux.js').then(m => m.lesson_normes_eurocodes_materiaux)),
    lesson('normes_aci_aashto', "Codes Américains : ACI 318, ASCE 7 et AASHTO LRFD — Combinaisons, Facteurs φ et Comparaison avec les Eurocodes", 'normes', () => import('./lesson_normes_aci_aashto.js').then(m => m.lesson_normes_aci_aashto)),
  ],
  29: [
    lesson('logiciels', 'Logiciels de Calcul de Structures, Méthode des Éléments Finis & Automatisation en Python', 'logiciels', () => import('./lesson_logiciels.js').then(m => m.lesson_logiciels)),
    lesson('logiciels_modelisation', "Modélisation de Structures avec SAP2000, ETABS et Robot : Méthode, Analyse Modale et Contrôle des Résultats", 'logiciels', () => import('./lesson_logiciels_modelisation.js').then(m => m.lesson_logiciels_modelisation)),
  ],
  30: [
    lesson('ia_btp', 'IA, Machine Learning & Vision par Ordinateur appliqués au Génie Civil', 'ia', () => import('./lesson_ia_btp.js').then(m => m.lesson_ia_btp)),
    lesson('ia_shm', "Surveillance de Santé Structurale (SHM) : Capteurs, Fréquences Propres et Détection d'Anomalies par Apprentissage", 'ia', () => import('./lesson_ia_shm.js').then(m => m.lesson_ia_shm)),
    lesson('ia_optimisation', "Optimisation Structurale et Topologique : Dimensionnement Optimal, SIMP et Conception Générative", 'ia', () => import('./lesson_ia_optimisation.js').then(m => m.lesson_ia_optimisation)),
  ],
  31: [
    lesson('methodes', "Méthodes d'Exécution : Coffrage, Bétonnage, Cure, Levage & Terrassement", 'methodes', () => import('./lesson_methodes.js').then(m => m.lesson_methodes)),
    lesson('methodes_prefabrication', "Préfabrication Béton : Usine, Cadences, Résistance au Jeune Âge, Levage et Assemblage sur Site", 'methodes', () => import('./lesson_methodes_prefabrication.js').then(m => m.lesson_methodes_prefabrication)),
  ],
  32: [
    lesson('pathologie', 'Pathologie, Diagnostic, Essais Non-Destructifs & Réhabilitation des Ouvrages', 'pathologie', () => import('./lesson_pathologie.js').then(m => m.lesson_pathologie)),
    lesson('pathologie_reparation', "Réparation et Renforcement des Ouvrages en Béton : NF EN 1504, Injection, Protection Cathodique et Chemisage", 'pathologie', () => import('./lesson_pathologie_reparation.js').then(m => m.lesson_pathologie_reparation)),
  ],
  33: [
    lesson('qualite', 'Contrôle Qualité & Essais : Béton, Sols, Aciers et Contrôles Non Destructifs', 'qualite', () => import('./lesson_qualite.js').then(m => m.lesson_qualite)),
    lesson('qualite_sols', "Contrôle des Terrassements : Proctor, Densité en Place, Essai de Plaque et Portance des Plates-formes", 'qualite', () => import('./lesson_qualite_sols.js').then(m => m.lesson_qualite_sols)),
    lesson('qualite_soudures', "Contrôle des Aciers et des Soudures : Classes d'Exécution EN 1090, Défauts, CND et Serrage des Boulons", 'qualite', () => import('./lesson_qualite_soudures.js').then(m => m.lesson_qualite_soudures)),
  ],
  34: [
    lesson('retex', "Retours d'Expérience : Effondrements Célèbres, Analyse des Causes & Leçons Apprises", 'retex', () => import('./lesson_retex.js').then(m => m.lesson_retex)),
    lesson('retex_barrages', "Ruptures de Barrages : Malpasset, Vajont, Teton, Oroville — Mécanismes, Calculs et Leçons", 'retex', () => import('./lesson_retex_barrages.js').then(m => m.lesson_retex_barrages)),
    lesson('retex_reussites', "Grandes Réussites du Génie Civil : Viaduc de Millau, Burj Khalifa, Tunnel du Gothard — Ce qui a Fait leur Succès", 'retex', () => import('./lesson_retex_reussites.js').then(m => m.lesson_retex_reussites)),
  ],
  35: [
    lesson('carriere', "Carrière d'Ingénieur Civil : Entretien Technique, Management d'Équipe & Consulting", 'carriere', () => import('./lesson_carriere.js').then(m => m.lesson_carriere)),
    lesson('carriere_candidature', "Candidater comme Ingénieur Civil : CV, Lettre de Motivation, Portfolio de Projets et Méthode STAR", 'carriere', () => import('./lesson_carriere_candidature.js').then(m => m.lesson_carriere_candidature)),
  ],
  36: [
    lesson('geologie_appliquee', "Géologie de l'Ingénieur : Roches, Structures Géologiques & Cartes", 'geologie', () => import('./lesson_geologie_appliquee.js').then(m => m.lesson_geologie_appliquee)),
    lesson('geologie_hydrogeologie', "Hydrogéologie de l'Ingénieur : Nappes, Loi de Darcy, Pompages et Rabattement des Fouilles", 'geologie', () => import('./lesson_geologie_hydrogeologie.js').then(m => m.lesson_geologie_hydrogeologie)),
    lesson('geologie_roches', "Mécanique des Roches : RQD, RMR, Système Q, GSI et Critère de Hoek-Brown", 'geologie', () => import('./lesson_geologie_roches.js').then(m => m.lesson_geologie_roches)),
    lesson('geologie_risques', "Risques Géologiques : Chutes de Blocs, Cavités et Fontis, Retrait-Gonflement des Argiles, Liquéfaction", 'geologie', () => import('./lesson_geologie_risques.js').then(m => m.lesson_geologie_risques)),
  ],
  37: [
    lesson('hydrologie_pluies', "Hydrologie : Cycle de l'Eau, Pluies IDF & Bassins Versants", 'hydrologie', () => import('./lesson_hydrologie_pluies.js').then(m => m.lesson_hydrologie_pluies)),
    lesson('hydrologie_ruissellement', "Bassins Versants et Ruissellement : Morphométrie, Méthode SCS-CN et Hydrogramme Unitaire", 'hydrologie', () => import('./lesson_hydrologie_ruissellement.js').then(m => m.lesson_hydrologie_ruissellement)),
    lesson('hydrologie_crues', "Crues et Statistiques : Période de Retour, Loi de Gumbel, Ajustement et Capacité des Cours d'Eau", 'hydrologie', () => import('./lesson_hydrologie_crues.js').then(m => m.lesson_hydrologie_crues)),
    lesson('hydrologie_retention', "Bassins de Rétention et Techniques Alternatives : Méthode des Pluies, Débit de Fuite, Noues et Infiltration", 'hydrologie', () => import('./lesson_hydrologie_retention.js').then(m => m.lesson_hydrologie_retention)),
  ],
  38: [
    lesson('eau_potable', "Qualité des Eaux & Potabilisation : Filière de Traitement et Dimensionnement", 'eau', () => import('./lesson_eau_potable.js').then(m => m.lesson_eau_potable)),
    lesson('eau_epuration', "Épuration des Eaux Usées : Équivalent-Habitant, Boues Activées, Clarification et Normes de Rejet", 'eau', () => import('./lesson_eau_epuration.js').then(m => m.lesson_eau_epuration)),
    lesson('eau_anc', "Assainissement Non Collectif : Fosse Toutes Eaux, Essai de Perméabilité, Épandage et Filières Agréées", 'eau', () => import('./lesson_eau_anc.js').then(m => m.lesson_eau_anc)),
    lesson('eau_boues', "Boues d'Épuration et Réutilisation : Épaississement, Déshydratation, Méthanisation, Épandage et REUT", 'eau', () => import('./lesson_eau_boues.js').then(m => m.lesson_eau_boues)),
  ],
  39: [
    lesson('maconnerie_ec6', "Maçonnerie Porteuse : Matériaux & Dimensionnement des Murs (Eurocode 6)", 'maconnerie', () => import('./lesson_maconnerie_ec6.js').then(m => m.lesson_maconnerie_ec6)),
    lesson('maconnerie_chainages', "Chaînages, Linteaux et Ouvertures : Effet de Voûte, Charge Triangulaire et Ferraillage des Linteaux", 'maconnerie', () => import('./lesson_maconnerie_chainages.js').then(m => m.lesson_maconnerie_chainages)),
    lesson('maconnerie_sismique', "Maçonnerie en Zone Sismique : Maçonnerie Chaînée, Règles de l'Eurocode 8 et Vérification au Cisaillement", 'maconnerie', () => import('./lesson_maconnerie_sismique.js').then(m => m.lesson_maconnerie_sismique)),
    lesson('maconnerie_pathologies', "Pathologies de la Maçonnerie : Fissures, Remontées Capillaires, Dilatation, Gel et Techniques de Réparation", 'maconnerie', () => import('./lesson_maconnerie_pathologies.js').then(m => m.lesson_maconnerie_pathologies)),
  ],
  40: [
    lesson('mixte_poutres', "Poutres Mixtes Acier-Béton : Largeur Efficace, Moment Plastique & Connexion (EC4)", 'structures', () => import('./lesson_mixte_poutres.js').then(m => m.lesson_mixte_poutres)),
    lesson('mixte_planchers', "Planchers Collaborants (Bac Acier) : Phase de Construction, Étaiement et Résistance en Phase Mixte (EC4)", 'structures', () => import('./lesson_mixte_planchers.js').then(m => m.lesson_mixte_planchers)),
    lesson('mixte_poteaux', "Poteaux Mixtes Acier-Béton : Tubes Remplis, Profilés Enrobés, Résistance Plastique et Flambement (EC4)", 'structures', () => import('./lesson_mixte_poteaux.js').then(m => m.lesson_mixte_poteaux)),
    lesson('mixte_ponts', "Ponts Mixtes Acier-Béton : Bipoutre, Coefficient d'Équivalence, Section Homogénéisée et Phasage", 'structures', () => import('./lesson_mixte_ponts.js').then(m => m.lesson_mixte_ponts)),
  ],
  41: [
    lesson('batiment_gros_oeuvre', "Technologie du Bâtiment : Gros Œuvre, Fondations, Murs, Planchers & Escaliers", 'batiment', () => import('./lesson_batiment_gros_oeuvre.js').then(m => m.lesson_batiment_gros_oeuvre)),
  ],
  42: [
    lesson('thermique_batiment', "Thermique du Bâtiment : Déperditions, Isolation & Ponts Thermiques", 'thermique', () => import('./lesson_thermique_batiment.js').then(m => m.lesson_thermique_batiment)),
  ],
  43: [
    lesson('incendie_reglementation', "Sécurité Incendie : Réglementation, Évacuation & Feu Normalisé", 'incendie', () => import('./lesson_incendie_reglementation.js').then(m => m.lesson_incendie_reglementation)),
  ],
  44: [
    lesson('plomberie', "Plomberie Sanitaire : Dimensionnement des Réseaux d'Eau, d'Eau Chaude & d'Évacuation", 'equipements', () => import('./lesson_plomberie.js').then(m => m.lesson_plomberie)),
  ],
  45: [
    lesson('urbanisme_plu', "Urbanisme & Aménagement : PLU, Autorisations et Conception de Lotissements", 'urbanisme', () => import('./lesson_urbanisme_plu.js').then(m => m.lesson_urbanisme_plu)),
  ],
  46: [
    lesson('trafic', "Théorie du Trafic : Débit, Densité, Vitesse & Capacité des Routes", 'transports', () => import('./lesson_trafic.js').then(m => m.lesson_trafic)),
  ],
  47: [
    lesson('irrigation_besoins', "Besoins en Eau des Cultures & Dimensionnement d'un Réseau d'Irrigation", 'irrigation', () => import('./lesson_irrigation_besoins.js').then(m => m.lesson_irrigation_besoins)),
  ],
};

/** Lesson entries of a catalog module (empty array when none). */
export function getLessonEntries(module) {
  if (!module) return [];
  return MODULE_LESSONS[Number(module.id)] || [];
}

/** Number of lessons available across the whole catalog. */
export function countLessons() {
  return Object.values(MODULE_LESSONS).reduce((total, entries) => total + entries.length, 0);
}
