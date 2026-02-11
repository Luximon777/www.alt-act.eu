import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  ArrowLeft,
  Users,
  Crown,
  Compass,
  Lightbulb,
  Heart,
  Briefcase,
  ChevronDown,
  ChevronUp,
  Award,
  Lock,
  Globe,
  GraduationCap
} from "lucide-react";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";

const COMITES = [
  {
    id: "bureau",
    nom: "Bureau",
    description: "Instance decisionnaire - Representation legale",
    icon: Crown,
    color: "amber",
    membres: [
      {
        nom: "Chitrasen Luximon",
        fonction: "President - Representant legal",
        role: "Decisionnaire",
        soustitre: "Fondateur | Architecte de projets a impact societal",
        photo: null,
        bio: "Chitrasen Luximon est un dirigeant engage dans la transformation des modeles d'insertion professionnelle et dans l'emergence de solutions structurantes face aux mutations profondes du marche du travail. President et representant legal de l'association ALT&ACT, il conduit une strategie orientee vers l'interet general, articulant innovation sociale, securisation des parcours et developpement du capital humain. Son positionnement depasse le cadre d'une gouvernance associative classique : il s'inscrit dans une logique d'ingenierie systemique visant a rapprocher les besoins des territoires, les dynamiques economiques et les trajectoires professionnelles des citoyens.",
        vision: "Il defend une conception moderne de l'employabilite, consideree comme un levier de cohesion sociale, de competitivite et de stabilite democratique. Son action contribue a structurer des reponses capables d'anticiper les transformations des competences, tout en renforcant la capacite d'adaptation des organisations et des individus.",
        realisations: "Au cours de son parcours, Chitrasen Luximon a accompagne plus de 2 000 personnes dans leurs transitions professionnelles, contribuant a renforcer leur capacite d'action, leur estime de soi et leur inscription durable dans l'emploi. Fondateur d'une structure de conseil specialisee dans la gestion de carriere et la formation pour adultes, il a concu et pilote des dispositifs d'accompagnement destines a des publics heterogenes.",
        signature: "Sa demarche repose sur une conviction structurante : la stabilite des societes repose en partie sur la capacite des individus a trouver une place reconnue et utile dans le monde professionnel. Son approche conjugue exigence methodologique, responsabilite ethique et vision de long terme.",
        formation: ["Master II en ingenierie de la formation et des competences", "Accreditations en analyse des types psychologiques", "Identification des talents et dynamiques collectives"],
        expertise: ["Gouvernance et direction de projets a impact", "Strategies d'employabilite et politiques de competences", "Ingenierie de formation", "Lecture systemique des parcours", "Innovation sociale appliquee au travail", "Pilotage d'ecosystemes partenariaux"]
      },
      {
        nom: "Anne-Marie Schwemmer",
        fonction: "Secretaire",
        role: "Decisionnaire",
        soustitre: "Experte en leadership, transformation organisationnelle et management strategique",
        photo: null,
        bio: "Anne-Marie Schwemmer est une dirigeante et stratege reconnue pour sa capacite a structurer, organiser et piloter des projets complexes au sein d'ecosystemes professionnels varies. En tant que Secretaire au sein de l'Association ALT&ACT, elle assume des responsabilites institutionnelles fortes en matiere de conformite, de structuration administrative et de coordination des instances decisionnelles. Sa posture conjugue rigueur operationnelle, vision systemique et leadership collaboratif, ce qui en fait un atout majeur pour le developpement de dispositifs d'impact societal et de partenariats strategiques.",
        vision: "Anne-Marie est animee par une vision integree du management, ou la performance organisationnelle se nourrit de la qualite des processus internes, de la coherence des pratiques et de la mobilisation du capital humain. Dans une perspective europeenne et territoriale, elle est en mesure de structurer les mecanismes de gouvernance et les cadres de decision, assurer l'articulation des acteurs, des partenaires et des parties prenantes, ancrer les projets dans des approches durables et integrees, et piloter des demarches de changement alignees avec les politiques publiques.",
        realisations: "Anne-Marie s'est construite une expertise solide au croisement du management, du leadership et du developpement organisationnel, a travers l'animation de communautes professionnelles et de reseaux, la facilitation de transformations internes, la coordination de projets transversaux impliquant des acteurs multiples, et l'accompagnement de dirigeants dans leurs dynamiques de leadership. Elle combine une comprehension fine des enjeux humains avec une pratique affirmee des processus decisionnels structures.",
        signature: "Anne-Marie place la qualite de l'organisation interne au coeur de la performance et de l'impact durable des projets. Son approche s'appuie sur une lecture systemique des dynamiques collaboratives et institutionnelles, visant a securiser les processus tout en favorisant l'innovation et la reactivite. Elle sait articuler la rigueur des cadres de gouvernance avec la creativite requise pour impulser des transformations profondes.",
        expertise: ["Gouvernance institutionnelle", "Coordination de projets", "Leadership collaboratif", "Transformation organisationnelle", "Animation de reseaux", "Pilotage strategique", "Conformite administrative", "Pratiques manageriales"]
      },
      {
        nom: "Chitra Dorffer",
        fonction: "Tresoriere",
        role: "Decisionnaire",
        soustitre: "Experte en pilotage financier, controle de gestion et optimisation des organisations",
        photo: null,
        bio: "Chitra Dorffer est une dirigeante specialisee dans les fonctions financieres strategiques et le controle de gestion au sein d'organisations structurees. En tant que Tresoriere de l'Association ALT&ACT, elle est responsable de la structuration des processus financiers, de la conformite budgetaire, de la transparence des comptes et de la securisation des pratiques de gestion. Son expertise repose sur une experience robuste en pilotage financier, reporting, optimisation des performances et gestion des risques economiques, competences essentielles pour accompagner des projets a fort impact et des programmes multi-partenaires.",
        realisations: "Chitra a developpe son expertise principalement dans des environnements exigeants au plan financier et organisationnel. Elle occupe actuellement un poste de controle de gestion et de responsabilite financiere au sein d'une grande entreprise industrielle, ou elle est en charge de l'elaboration et du suivi des budgets, la production de tableaux de bord de performance, l'analyse des ecarts et la proposition de mesures correctives, et l'integration d'indicateurs cles pour ameliorer la performance operationnelle et financiere. Cette experience lui confere une vision a la fois analytique et strategique des enjeux financiers, ce qui est determinant pour assurer la perennite et la credibilite d'organisations structurees.",
        vision: "Chitra Dorffer apporte a la gouvernance d'ALT&ACT une maitrise des enjeux de transparence financiere essentielle pour les financeurs publics et institutionnels, une capacite a structurer les processus budgetaires et de reporting pour les projets multi-sources, une lecture strategique des risques economiques et de conformite, et une expertise en pilotage des performances financieres au service de l'impact social. Par sa fonction de tresoriere, elle securise les choix financiers, garantit l'integrite des pratiques de gestion et favorise une allocation optimale des ressources dans le cadre des projets structurants de l'association.",
        signature: "Son approche se caracterise par une forte orientation vers la fiabilite des donnees financieres et des processus de controle interne, une capacite a connecter la performance economique avec les ambitions sociales et les objectifs de transformation, et un leadership pragmatique oriente vers la performance durable des projets et des organisations. Dans un contexte europeen ou institutionnel, cette expertise renforce la credibilite de l'association aupres des partenaires financiers, des bailleurs de fonds publics ou prives, et des reseaux de cooperation.",
        expertise: ["Controle de gestion strategique", "Pilotage budgetaire", "Responsabilite financiere", "Supervision comptable", "Optimisation des processus", "Tableaux de bord de performance", "Gestion des risques economiques", "Conformite financiere"]
      }
    ]
  },
  {
    id: "direction",
    nom: "Comite de direction",
    description: "Membres fondateurs - Orientations strategiques",
    icon: Compass,
    color: "teal",
    membres: [
      {
        nom: "Chitrasen Luximon",
        fonction: "Membre fondateur",
        role: "Decisionnaire",
        soustitre: "Architecte de projets a impact societal",
        photo: null,
        bio: "Initiateur du projet RE'ACTIF PRO et de la methode VSI. Son experience operationnelle nourrit une lecture strategique des enjeux lies aux tensions sur les competences, aux transitions professionnelles accelerees, et a la necessite de modeles d'accompagnement plus predictifs et personnalises.",
        expertise: ["Innovation", "Insertion professionnelle", "Developpement territorial", "Ingenierie de formation"]
      },
      {
        nom: "Chitra Dorffer",
        fonction: "Membre fondatrice",
        role: "Decisionnaire",
        photo: null,
        bio: "Co-fondatrice engagee dans l'inclusion et l'accessibilite.",
        expertise: ["Inclusion", "Accessibilite", "Gestion"]
      },
      {
        nom: "Anne-Marie Schwemmer",
        fonction: "Membre fondatrice",
        role: "Decisionnaire",
        photo: null,
        bio: "Co-fondatrice impliquee dans la structuration du dispositif.",
        expertise: ["Organisation", "Developpement", "Partenariats"]
      },
      {
        nom: "Sandrine Ratolojanahary",
        fonction: "Membre fondatrice",
        role: "Decisionnaire",
        soustitre: "Professionnelle de l'education | Actrice de l'engagement societal",
        photo: null,
        bio: "Sandrine Ratolojanahary est une professionnelle de l'education dont le parcours s'inscrit a la convergence des enjeux pedagogiques, environnementaux et societaux. Professeure des ecoles, elle contribue quotidiennement au developpement des competences fondamentales, a la structuration des apprentissages et a la formation du citoyen. Son engagement depasse le cadre strict de l'enseignement : ses premieres experiences en tant qu'eco-conseillere ainsi que son implication dans des initiatives humanitaires et educatives a Madagascar temoignent d'une sensibilite affirmee aux questions de developpement durable, de transmission et d'egalite des chances.",
        realisations: "En tant que professeure des ecoles, Sandrine mobilise une expertise pedagogique centree sur l'acquisition des savoirs fondamentaux, l'accompagnement des trajectoires d'apprentissage, l'adaptation aux besoins diversifies des publics, et le developpement de l'autonomie et de la confiance chez les apprenants. Son entree dans la vie professionnelle par l'eco-conseil lui a permis d'integrer tres tot une lecture systemique des enjeux environnementaux et la pedagogie du changement de comportement. Son implication dans des actions humanitaires et educatives a Madagascar traduit une capacite a intervenir dans des contextes interculturels et a forte utilite sociale, developpant des initiatives educatives et des actions de soutien aux publics vulnerables.",
        vision: "La presence de Sandrine au sein des membres fondateurs participe a l'equilibre de la gouvernance en y integrant une expertise essentielle : celle des dynamiques d'apprentissage et de construction des competences des les premieres etapes de la vie. Elle apporte notamment une lecture pedagogique des parcours, une sensibilite aux enjeux d'egalite des opportunites, une culture de la transmission, une approche preventive des fragilites sociales, et une capacite a relier education et insertion professionnelle.",
        signature: "Son parcours reflete une conviction forte : le developpement des individus repose sur un acces equitable a l'education, a l'accompagnement et aux opportunites. Elle inscrit son action dans une logique de contribution durable a la societe, fondee sur la transmission des savoirs et la responsabilisation. Sa posture conjugue exigence educative, engagement humain et vision de long terme.",
        expertise: ["Pedagogie et transmission", "Developpement des competences", "Eco-conseil", "Developpement durable", "Engagement humanitaire", "Interculturalite", "Egalite des chances", "Accompagnement educatif"]
      },
      {
        nom: "Anthony Ratolojanahary",
        fonction: "Membre fondateur",
        role: "Decisionnaire",
        soustitre: "RSSI (CISO) MES-DMP | Caisse nationale de l'Assurance Maladie",
        photo: null,
        bio: "Anthony Ratolojanahary est un professionnel confirme dans le domaine de la cybersecurite, de la protection des donnees et du management des risques lies aux systemes d'information. Il occupe actuellement le poste de RSSI (CISO) du domaine MES (Mon Espace Sante) - DMP (Dossier Medical Partage) au sein de la Caisse nationale de l'Assurance Maladie, ou il exerce dans un environnement a haute exigence de securite, de conformite reglementaire et de fiabilite des systemes critiques. Cette expertise technique et strategique confere une dimension essentielle a la gouvernance d'ALT&ACT, notamment lorsque l'organisation s'inscrit dans des projets numeriques, des demarches d'innovation ou des configurations multi-partenaires ou la securite des donnees, la confidentialite et la conformite juridique sont des prerequis indispensables.",
        realisations: "Anthony a construit son experience professionnelle au coeur d'enjeux operationnels ou la cybersecurite ne se limite pas a la technique, mais devient un vecteur de confiance organisationnelle et de perennite pour les operations critiques. Il assure le pilotage des risques de cybersecurite au sein d'organisations publiques, la securisation des infrastructures informatiques avec une attention particuliere aux processus de protection des donnees personnelles, et la conformite reglementaire essentielle pour repondre aux exigences des financeurs europeens ou institutionnels.",
        vision: "La presence d'Anthony dans l'equipe fondatrice renforce l'association sur plusieurs plans : securite des processus numeriques avec capacite a anticiper et maitriser les vulnerabilites, conformite reglementaire notamment en matiere de traitement des donnees personnelles (RGPD), et credibilite technique aupres des partenaires institutionnels exigeants.",
        signature: "Anthony conjugue rigueur technique et comprehension des enjeux de gouvernance : il sait faire le lien entre les exigences operationnelles de la securite informatique et les imperatifs strategiques des projets a impact societal. Cette capacite a naviguer entre le complexe technologique et le besoin de fiabilite organisationnelle est un atout strategique majeur pour ALT&ACT dans un contexte ou les donnees, la confiance et la securite numerique deviennent des enjeux centraux.",
        expertise: ["Cybersecurite", "Protection des donnees", "Gestion des risques IT", "Conformite RGPD", "Securite des systemes d'information", "Resilience organisationnelle", "Gouvernance informatique"]
      },
      {
        nom: "Rajwantee Lepain",
        fonction: "Membre fondatrice",
        role: "Decisionnaire",
        soustitre: "Psychologue clinicienne | Actrice de l'accompagnement humain et de la transformation sociale",
        photo: null,
        bio: "Rajwantee Lepain est une psychologue clinicienne etablie a Strasbourg, dont l'activite professionnelle repose sur l'accompagnement psychologique des individus, l'analyse des dynamiques humaines et la facilitation de processus de changement profond. Son expertise clinique, orientee vers l'ecoute, la comprehension des trajectoires de vie et l'accompagnement des transitions personnelles, fait d'elle une contributrice essentielle aux approches humaines, sociales et systematiques portees par ALT&ACT. Son role transcende une simple fonction clinique : par sa comprehension fine des facteurs humains au coeur des transitions, elle constitue une ressource strategique pour des projets d'envergure visant a articuler performance sociale, cohesion et developpement des capacites humaines.",
        realisations: "En tant que psychologue clinicienne, Rajwantee intervient aupres de populations tres diverses pour evaluer et soutenir les processus psychiques en contexte de changement ou de stress, accompagner les transitions de vie (personnelles, professionnelles, identitaires), faciliter la construction d'un sens coherent des experiences vecues, et aider a la mobilisation des ressources internes et relationnelles. Son expertise repose sur une posture clinique fondee sur l'ecoute active et empathique, l'analyse des facteurs psychologiques structurels, l'evaluation des blocages et leviers de transformation, et la construction d'espaces de dialogue et de reconstruction identitaire.",
        vision: "La contribution de Rajwantee a la gouvernance enrichit la strategie de l'association en apportant une comprehension fine des facteurs humains au coeur de l'employabilite, une capacite a integrer des dimensions psychologiques et systemiques dans les parcours d'accompagnement, une expertise essentielle dans la construction de dispositifs adaptes a la personne, et une ressource strategique pour penser l'impact social en termes d'effets durables sur le bien-etre, la confiance et les trajectoires de vie. Cette dimension est particulierement recherchee dans les projets europeens ou institutionnels portant sur l'inclusion, le developpement des competences ou le renforcement des capacites des publics.",
        signature: "Rajwantee incarne une approche centree sur l'humain dans sa globalite, placant l'experience subjective et les ressources internes comme des vecteurs indispensables de construction de trajectoires stables et durables. Cette posture s'articule avec les valeurs portees par ALT&ACT : humanisme, responsabilite, equite et transformation positive. Elle constitue une voix qualifiee pour connecter les dimensions psychologiques aux enjeux societaux.",
        expertise: ["Psychologie clinique", "Accompagnement des transitions", "Dynamiques humaines", "Developpement personnel", "Analyse systemique", "Ecoute empathique", "Reconstruction identitaire", "Facteurs d'employabilite"]
      },
      {
        nom: "Sebastien Ehlenberger",
        fonction: "Membre fondateur",
        role: "Decisionnaire",
        soustitre: "Manager de projets | Expert en coordination intersectorielle",
        photo: null,
        bio: "Sebastien E. est un professionnel confirme dans le pilotage de projets, la coordination d'equipes et la mise en oeuvre d'initiatives collaboratives. Son parcours repose sur l'acquisition d'une expertise operationnelle riche, orientee vers l'efficacite organisationnelle, la structuration de processus et l'animation de partenariats. Present au sein de la gouvernance d'ALT&ACT en tant que membre fondateur, il contribue a renforcer la capacite de l'association a concevoir, deployer et piloter des projets structurants a impact social, avec une lecture pragmatique des exigences organisationnelles et des dynamiques collectives.",
        realisations: "Le parcours de Sebastien se developpe dans des environnements ou le pilotage de projet, la coordination multi-acteurs et l'elaboration de strategies d'action concretes sont centraux. Il assure la gestion de projets complexes impliquant de multiples parties prenantes, la coordination intersectorielle garantissant l'alignement des objectifs et des livrables, l'animation de projets structurants integrant des strategies de communication et de mobilisation des ressources, et l'accompagnement de transformations organisationnelles avec une attention particuliere a l'efficacite collective.",
        vision: "La presence de Sebastien au sein du conseil fondateur constitue un atout strategique pour assurer la coherence operationnelle entre les orientations strategiques et leur mise en oeuvre effective, renforcer la gouvernance interne par une approche structuree du pilotage de projets, faciliter les cooperations avec des acteurs institutionnels, economiques et associatifs, et soutenir la professionnalisation des processus de coordination pour des programmes ambitieux. Cette position lui permet de contribuer a l'emergence d'un cadre d'action robuste, capable de soutenir des projets complexes et a fort impact social.",
        signature: "Sebastien fonctionne a l'interface entre direction strategique et operationnalite. Il sait traduire les ambitions institutionnelles - conceptuelles ou politiques - en plans d'action clairs, mesurables et alignes sur les objectifs collectifs. Il favorise une approche inclusive, structuree et axee resultats, tout en gardant une lecture fine des dynamiques organisationnelles qui influencent la qualite de la mise en oeuvre.",
        expertise: ["Pilotage de projet", "Coordination operationnelle", "Gestion multi-acteurs", "Dispositifs collaboratifs", "Leadership transversal", "Communication structuree", "Transformation organisationnelle"]
      }
    ]
  },
  {
    id: "pilotage",
    nom: "Comite de pilotage",
    description: "Instance consultative - Expertise et conseil",
    icon: Lightbulb,
    color: "purple",
    membres: [
      {
        nom: "Anthony Ratolojanahary",
        fonction: "Cybersecurite & donnees sensibles",
        role: "Consultatif",
        soustitre: "RSSI (CISO) MES-DMP | Caisse nationale de l'Assurance Maladie",
        photo: null,
        bio: "Anthony Ratolojanahary est un professionnel confirme dans le domaine de la cybersecurite, de la protection des donnees et du management des risques lies aux systemes d'information. Il occupe actuellement le poste de RSSI (CISO) du domaine MES (Mon Espace Sante) - DMP (Dossier Medical Partage) au sein de la Caisse nationale de l'Assurance Maladie, ou il exerce dans un environnement a haute exigence de securite, de conformite reglementaire et de fiabilite des systemes critiques.",
        vision: "Au sein du Comite de pilotage, il apporte son expertise pour securiser les processus numeriques, garantir la conformite reglementaire (RGPD, normes internationales), et renforcer la credibilite technique aupres des partenaires institutionnels.",
        signature: "Anthony conjugue rigueur technique et comprehension des enjeux de gouvernance, faisant le lien entre les exigences operationnelles de la securite informatique et les imperatifs strategiques des projets a impact societal.",
        expertise: ["Cybersecurite", "RGPD", "Protection des donnees", "Architecture technique", "Gestion des risques IT", "Conformite reglementaire"]
      },
      {
        nom: "Dr. Stephano Vacher",
        fonction: "Strategie, RSE, innovation responsable",
        role: "Consultatif",
        soustitre: "Expert en strategie, RSE & innovation responsable",
        photo: null,
        bio: "Dr. Stephano Vacher est un expert reconnu dans les domaines de la strategie, de la responsabilite societale des organisations (RSE) et de l'innovation responsable. Il allie une expertise academique solide a une experience pratique dans l'accompagnement des transformations organisationnelles et des projets complexes. Au sein du Comite de pilotage consultatif d'ALT&ACT, il apporte une lecture strategique des enjeux a l'interface entre innovation societale, gouvernance responsable et impacts durables, ce qui constitue un atout majeur pour structurer une demarche porteuse de sens et de resultats a l'echelle europeenne.",
        realisations: "Stephano a construit une trajectoire riche qui croise reflexion strategique, accompagnement des transformations et leadership eclaire sur les sujets d'innovation et de durabilite. En strategie et pilotage, il assure la conception et l'accompagnement de demarches strategiques pour des organisations publiques, privees ou associatives, l'integration des dimensions RSE et ESG dans les modeles de developpement, et la structuration de feuilles de route pour des projets a impact.",
        vision: "Sa presence au sein du Comite de pilotage renforce la capacite de l'association a s'inscrire dans les cadres europeens en matiere de durabilite et de responsabilite societale, integrer des exigences croissantes de transparence, de gouvernance ethique et de mesure d'impact, et construire une strategie coherente avec les attentes des institutions et des partenaires. Il constitue une ressource strategique pour articuler les ambitions de l'association avec les politiques publiques europeennes en matiere de transition ecologique, d'emploi et de competences.",
        signature: "Stephano incarne une approche exigeante et eclairee de la strategie, ou l'innovation ne se concoit qu'a travers le prisme de la responsabilite, de l'ethique et de l'impact reel. Il apporte une capacite a conceptualiser des trajectoires complexes, a en mesurer les effets, et a les ajuster dans une logique d'amelioration continue.",
        formation: ["Doctorat en strategie et management de l'innovation", "Expertise en RSE et gouvernance responsable"],
        expertise: ["Strategie organisationnelle", "RSE et ESG", "Innovation responsable", "Gouvernance ethique", "Transformation durable", "Formation en management", "Politiques publiques europeennes", "Mesure d'impact"]
      }
    ]
  },
  {
    id: "ethique",
    nom: "Comite de mission ethique",
    description: "Garants de l'integrite et de la conformite",
    icon: Heart,
    color: "green",
    membres: [
      {
        nom: "Jean-Marc Lepain",
        fonction: "Expert en finances publiques",
        role: "Consultatif independant",
        soustitre: "Expert international en finances publiques (PFM) | Ancien Conseiller FMI",
        photo: null,
        bio: "Jean-Marc Lepain est un expert international reconnu dans le domaine des finances publiques (Public Financial Management - PFM), avec une trajectoire de plus de 25 ans au service de la reforme des administrations publiques et du renforcement des capacites institutionnelles a grande echelle. Il evolue depuis plus d'une decennie au coeur des transformations institutionnelles, accompagnant des gouvernements, des organisations internationales et des bailleurs dans la modernisation de leurs systemes financiers. Il occupe recemment la fonction de Chief of Party pour un programme de soutien a la gestion des finances publiques au Senegal, mene dans le cadre d'un partenariat entre USAID et Deloitte.",
        realisations: "Son parcours se distingue par une forte dimension geographique et strategique, avec des responsabilites exercees en Afrique, au Moyen-Orient et en Asie. Au Senegal (Direction de programme) : pilotage de reformes PFM a l'echelle de l'Etat, renforcement de la transparence budgetaire, modernisation des systemes de gestion de la dette, introduction de budgets verts. Au Brunei (Ministere des Finances) : creation d'outils de prevision budgetaire, conception et deploiement d'un programme de consolidation budgetaire, mise en oeuvre de reformes structurantes. Au FMI (Conseiller regional) : diagnostics des systemes de finances publiques, appui a la planification macro-budgetaire, renforcement des capacites aupres des ministeres des finances.",
        vision: "Jean-Marc Lepain presente un profil typique des architectes de reformes publiques, intervenant sur des programmes a fort impact systemique. Sa capacite a operer dans des environnements gouvernementaux complexes et a piloter des transformations structurelles constitue un marqueur eleve de credibilite institutionnelle. Sa presence au sein du Comite de mission ethique envoie un signal particulierement fort : culture avancee de la redevabilite et de la transparence, maitrise des cadres de gouvernance exiges par les financeurs publics, comprehension des logiques d'impact et d'evaluation, et capacite a structurer des dispositifs robustes et conformes aux standards internationaux.",
        signature: "Au-dela de la dimension ethique, il contribue implicitement a installer une discipline de gouvernance souvent observee dans les organisations a forte maturite institutionnelle. Son experience aupres d'organisations internationales et de ministeres positionne son expertise au niveau des standards attendus dans les programmes finances par les grands bailleurs.",
        formation: ["Institut d'Etudes Politiques de Paris (Sciences Po)"],
        expertise: ["Finances publiques (PFM)", "Reformes budgetaires", "Direction de programmes internationaux", "Macro-fiscalite", "Transparence et redevabilite", "Renforcement institutionnel", "Coordination bailleurs", "Conduite du changement"]
      },
      {
        nom: "Alexandra Horst",
        fonction: "Psychologue clinicienne",
        role: "Consultatif independant",
        soustitre: "Psychologue clinicienne & praticienne en ressources humaines",
        photo: null,
        bio: "Alexandra Horst est une psychologue clinicienne liberale installee a Strasbourg, dotee d'une double formation en psychologie clinique et en gestion des ressources humaines, ce qui lui confere une expertise tant dans l'accompagnement psychologique que dans la comprehension des dynamiques humaines au sein des organisations. Sa presence au sein du Comite de mission ethique d'ALT&ACT apporte une dimension reflexive, centree sur l'humain, enrichissant les approches institutionnelles par une lecture des facteurs psychologiques, comportementaux et relationnels qui influencent les trajectoires individuelles et collectives.",
        realisations: "Alexandra exerce en tant que psychologue clinicienne a Strasbourg, ou elle accompagne des adultes et des adolescents dans leurs questionnements personnels, familiaux ou professionnels, a travers des consultations individuelles et des approches psychotherapeutiques adaptees. Sa pratique repose sur un referentiel clinique integratif, combinant des elements analytiques, cognitifs, comportementaux et systemiques pour offrir un accompagnement souple et adapte.",
        vision: "Au sein du Comite de mission ethique, Alexandra apporte une expertise precieuse sur les dimensions humaines invisibles mais determinantes des parcours d'accompagnement professionnel et social. Son intervention renforce notamment l'integration systemique des facteurs psychologiques dans les dispositifs de soutien, l'elaboration de cadres d'accompagnement centres sur la personne, la capacite a anticiper les blocages comportementaux ou emotionnels dans les trajectoires, et la qualite de l'ecoute institutionnelle pour outiller les publics dans leurs transitions.",
        signature: "Alexandra combine rigueur clinique, bienveillance structuree et lecture strategique des processus humains. Elle travaille a la fois sur la comprehension des dynamiques internes des individus, l'ajustement des comportements a des contextes de changement, et la transformation des relations interpersonnelles vers des conditions de reussite.",
        formation: ["Master en Psychologie clinique interculturelle et transculturelle - Universite de Strasbourg", "Master en Gestion des Ressources Humaines - IAE Strasbourg"],
        expertise: ["Psychologie clinique", "Accompagnement des transitions", "Approches integratives", "Dynamiques interculturelles", "Gestion des ressources humaines", "Facteurs socio-emotionnels", "Lecture systemique", "Ethique clinique"]
      },
      {
        nom: "Martine Caillard-Dahl",
        fonction: "Productrice culturelle",
        role: "Consultatif independant",
        soustitre: "Productrice culturelle | Actrice de la creation audiovisuelle",
        photo: null,
        bio: "Martine Caillard-Dahl est une professionnelle de la production audiovisuelle, reconnue pour son engagement dans la valorisation de projets culturels a dimension patrimoniale et societale. Fondatrice de la societe Token Productions en 1995, elle a contribue au developpement de contenus cinematographiques, documentaires et publicitaires, inscrivant son action dans une logique de transmission culturelle et de mise en recit des realites humaines. Son parcours temoigne d'une capacite a concevoir et piloter des projets creatifs impliquant des enjeux historiques, identitaires et territoriaux.",
        realisations: "Fondatrice de Token Productions a Strasbourg, elle a assure la direction et gestion de projets audiovisuels avec des activites centrees sur la production de films documentaires, cinematographiques et publicitaires. Productions notables : Jean-Marie Tjibaou ou le reve d'independance (2000), oeuvre s'inscrivant dans une reflexion historique et politique autour des dynamiques d'emancipation. AD!, monnaie kanak (1992) pour l'Agence de Developpement de la Culture Kanak et le Musee territorial de Nouvelle-Caledonie. Elle a egalement participe au Festival des arts du Pacifique (1984-1985).",
        vision: "Martine Caillard-Dahl incarne un profil de productrice engagee, capable de relier creation artistique et comprehension des dynamiques sociales. Son experience dans des projets a portee culturelle internationale contribue a enrichir la gouvernance par une perspective sensible aux representations, aux identites et aux transformations societales.",
        signature: "Au sein du Comite de mission ethique, elle apporte une lecture culturelle des transformations sociales, utile pour inscrire les actions dans une comprehension elargie des contextes humains, favoriser des approches respectueuses des identites et des parcours, et enrichir la reflexion ethique par une sensibilite aux representations collectives.",
        expertise: ["Production audiovisuelle", "Projets culturels", "Patrimoine et recits societaux", "Coordination artistique", "Interculturalite", "Mediation culturelle", "Memoire collective", "Identites et territoires"]
      },
      {
        nom: "Laxsounee Bhoodun",
        fonction: "Juriste",
        role: "Consultatif independant",
        soustitre: "Juriste | Experte en securisation juridique et conformite",
        photo: null,
        bio: "Laxsounee Bhoodun est juriste au sein d'un organisme de protection sociale, ou elle intervient sur des problematiques juridiques exigeant rigueur, maitrise reglementaire et sens de la responsabilite institutionnelle. Son expertise contribue a securiser les cadres d'action, a garantir la conformite des pratiques et a accompagner les organisations dans la comprehension de leurs obligations legales. Au sein du Comite de mission ethique d'ALT&ACT, elle apporte une lecture structurante des enjeux juridiques, essentielle pour toute organisation engagee dans des projets a impact social et amenee a interagir avec des partenaires publics ou institutionnels.",
        realisations: "En tant que juriste au sein d'un organisme de protection sociale (CARSAT), son activite s'inscrit dans un environnement fortement norme, caracterise par l'analyse et l'interpretation de textes juridiques, la gestion de situations reglementaires complexes, la securisation des decisions administratives, la prevention des risques contentieux, et l'accompagnement des parties prenantes dans l'application du droit. Cette experience developpe une capacite a conjuguer precision technique et comprehension des realites operationnelles.",
        vision: "La presence d'une juriste au sein du comite ethique constitue un marqueur important de maturite organisationnelle. Laxsounee Bhoodun renforce notamment la capacite de l'association a structurer ses pratiques dans le respect des cadres legaux, anticiper les risques lies aux projets et aux partenariats, consolider la credibilite de la gouvernance, et proteger l'organisation dans ses phases de developpement. Son regard favorise un equilibre entre innovation et securite juridique.",
        signature: "Le profil de Laxsounee Bhoodun correspond a celui d'une garante du cadre, contribuant a installer une culture de conformite et de responsabilite. Dans un contexte ou les exigences reglementaires se renforcent, notamment pour les projets a dimension sociale ou finances sur fonds publics, cette competence devient strategique. Sa participation au Comite de mission ethique soutient une gouvernance attentive a la solidite de ses fondations juridiques, condition indispensable a un developpement durable et maitrise.",
        expertise: ["Analyse juridique", "Veille reglementaire", "Gestion des risques", "Conformite", "Securisation des procedures", "Droit de la protection sociale", "Responsabilite institutionnelle", "Prevention des contentieux"]
      },
      {
        nom: "Marion Perrin-Pujol",
        fonction: "Experte enfance et handicap",
        role: "Consultatif independant",
        soustitre: "Experte au service de l'enfance en situation de handicap",
        photo: null,
        bio: "Marion Perrin-Pujol est une professionnelle engagee dans le champ social et educatif, reconnue pour son investissement en faveur de l'enfance en situation de handicap. Son parcours reflete une expertise construite au contact des realites de terrain, avec une attention particuliere portee aux besoins specifiques des enfants et a la place essentielle de leurs familles dans les parcours d'accompagnement. Son approche s'inscrit dans une logique inclusive, visant a favoriser l'acces aux dispositifs educatifs et sociaux dans le respect des droits, du developpement et de la singularite de chaque enfant. Elle porte un regard eclaire sur les conditions permettant de soutenir l'autonomie, la participation et l'epanouissement des jeunes concernes.",
        realisations: "Au sein du Comite de Mission Ethique, Marion Perrin-Pujol contribue a enrichir les reflexions strategiques en apportant une lecture experte des enjeux d'equite et d'accessibilite dans les pratiques d'accompagnement, une vigilance quant a l'adaptation des dispositifs aux situations necessitant une attention particuliere, une capacite a relier les principes ethiques aux effets concrets des actions menees, et une sensibilite aux demarches de co-construction avec les familles et les professionnels.",
        vision: "Sa presence au comite renforce une gouvernance attentive a la responsabilite sociale et a la coherence entre les valeurs portees par l'association et leur mise en oeuvre operationnelle. Par son expertise, Marion Perrin-Pujol participe a la consolidation d'un cadre ethique exigeant, oriente vers des pratiques justes, inclusives et durablement alignees avec la vocation humaniste d'ALT&ACT.",
        signature: "Marion Perrin-Pujol incarne une vision ou l'accompagnement se construit en partenariat etroit avec les familles et les professionnels. Son engagement temoigne d'une conviction profonde : chaque enfant, quelle que soit sa situation, merite un accompagnement adapte qui respecte sa singularite et favorise son plein epanouissement.",
        expertise: ["Enfance en situation de handicap", "Inclusion sociale et educative", "Accompagnement des familles", "Dispositifs d'accessibilite", "Droits de l'enfant", "Co-construction partenariale", "Ethique de l'accompagnement", "Parcours individualises"]
      }
    ]
  }
];

const MembreCard = ({ membre, color }) => {
  const [expanded, setExpanded] = useState(false);
  
  const colorClasses = {
    amber: { bg: "bg-amber-100", text: "text-amber-700", border: "border-amber-200" },
    teal: { bg: "bg-teal-100", text: "text-teal-700", border: "border-teal-200" },
    purple: { bg: "bg-purple-100", text: "text-purple-700", border: "border-purple-200" },
    green: { bg: "bg-green-100", text: "text-green-700", border: "border-green-200" }
  };
  
  const colors = colorClasses[color] || colorClasses.teal;
  const initials = membre.nom.split(" ").map(n => n[0]).join("").slice(0, 2);
  const isEnriched = membre.vision || membre.realisations || membre.signature;
  
  return (
    <Card className={"bg-white border border-gray-200 shadow-md hover:shadow-lg transition-all " + (expanded ? "ring-2 ring-offset-2 ring-[#0b2a55] " : "") + (isEnriched ? "md:col-span-2 lg:col-span-3" : "")}>
      <CardContent className="pt-6">
        <div className="flex items-start gap-4">
          <div className={"w-16 h-16 rounded-full flex items-center justify-center flex-shrink-0 " + colors.bg}>
            {membre.photo ? (
              <img src={membre.photo} alt={membre.nom} className="w-full h-full rounded-full object-cover" />
            ) : (
              <span className={"text-xl font-bold " + colors.text}>{initials}</span>
            )}
          </div>
          
          <div className="flex-1 min-w-0">
            <h4 className="font-semibold text-[#0b2a55] text-lg">{membre.nom}</h4>
            <p className={"text-sm font-medium " + colors.text}>{membre.fonction}</p>
            {membre.soustitre && (
              <p className="text-xs text-gray-500 mt-1">{membre.soustitre}</p>
            )}
            <Badge variant="outline" className={"mt-2 text-xs " + colors.border + " " + colors.text}>
              {membre.role}
            </Badge>
          </div>
        </div>
        
        <div className="mt-4">
          <button 
            onClick={() => setExpanded(!expanded)}
            className="flex items-center gap-1 text-sm text-gray-500 hover:text-[#0b2a55] transition-colors"
          >
            {expanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
            {expanded ? "Voir moins" : "Voir le profil complet"}
          </button>
          
          {expanded && (
            <div className="mt-6 space-y-6">
              <div>
                <h5 className="text-sm font-semibold text-[#0b2a55] mb-2 flex items-center gap-2">
                  <Award className="w-4 h-4 text-amber-500" />
                  Profil executif
                </h5>
                <p className="text-sm text-gray-600 leading-relaxed whitespace-pre-line">
                  {membre.bio}
                </p>
              </div>

              {membre.vision && (
                <div>
                  <h5 className="text-sm font-semibold text-[#0b2a55] mb-2 flex items-center gap-2">
                    <Lightbulb className="w-4 h-4 text-amber-500" />
                    Vision strategique
                  </h5>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {membre.vision}
                  </p>
                </div>
              )}

              {membre.realisations && (
                <div>
                  <h5 className="text-sm font-semibold text-[#0b2a55] mb-2 flex items-center gap-2">
                    <Briefcase className="w-4 h-4 text-teal-500" />
                    Trajectoire et realisations
                  </h5>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {membre.realisations}
                  </p>
                </div>
              )}

              {membre.signature && (
                <div className="bg-gradient-to-r from-amber-50 to-teal-50 p-4 rounded-xl border-l-4 border-l-amber-500">
                  <h5 className="text-sm font-semibold text-[#0b2a55] mb-2">Signature professionnelle</h5>
                  <p className="text-sm text-gray-600 italic leading-relaxed">
                    {membre.signature}
                  </p>
                </div>
              )}
              
              <div>
                <p className="text-xs text-gray-400 uppercase tracking-wider mb-2">
                  {isEnriched ? "Domaines d'autorite" : "Domaines d'expertise"}
                </p>
                <div className="flex flex-wrap gap-2">
                  {membre.expertise.map((exp, idx) => (
                    <Badge key={idx} variant="secondary" className={colors.bg + " " + colors.text + " text-xs"}>
                      {exp}
                    </Badge>
                  ))}
                </div>
              </div>

              {membre.formation && (
                <div>
                  <p className="text-xs text-gray-400 uppercase tracking-wider mb-2">Formation</p>
                  <ul className="space-y-1">
                    {membre.formation.map((f, idx) => (
                      <li key={idx} className="text-sm text-gray-600 flex items-start gap-2">
                        <GraduationCap className="w-4 h-4 text-purple-500 mt-0.5 flex-shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

function MembresPage() {
  const navigate = useNavigate();
  const [activeComite, setActiveComite] = useState("all");
  
  const filteredComites = activeComite === "all" 
    ? COMITES 
    : COMITES.filter(c => c.id === activeComite);
  
  const colorClasses = {
    amber: { bg: "bg-amber-500", hover: "hover:bg-amber-600", light: "bg-amber-100", text: "text-amber-700" },
    teal: { bg: "bg-teal-500", hover: "hover:bg-teal-600", light: "bg-teal-100", text: "text-teal-700" },
    purple: { bg: "bg-purple-500", hover: "hover:bg-purple-600", light: "bg-purple-100", text: "text-purple-700" },
    green: { bg: "bg-green-500", hover: "hover:bg-green-600", light: "bg-green-100", text: "text-green-700" }
  };

  return (
    <div className="min-h-screen bg-gray-50" data-testid="membres-page">
      <div className="bg-gradient-to-r from-[#0b2a55] to-[#1a4280] text-white py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <Button 
            variant="ghost" 
            onClick={() => navigate("/")} 
            className="text-white hover:bg-white/20 mb-6"
          >
            <ArrowLeft className="w-4 h-4 mr-2" /> Retour a l'accueil
          </Button>
          
          <Badge className="mb-4 bg-white/20 text-white border-white/30">Gouvernance ALT&ACT</Badge>
          <h1 className="text-3xl md:text-5xl font-bold mb-4">
            Nos Membres
          </h1>
          <p className="text-blue-100 text-lg max-w-2xl">
            Decouvrez les femmes et les hommes qui portent la vision d'ALT&ACT et construisent 
            ensemble un dispositif d'insertion professionnelle durable.
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="flex flex-wrap gap-3 mb-12 justify-center">
          <Button
            variant={activeComite === "all" ? "default" : "outline"}
            onClick={() => setActiveComite("all")}
            className={"rounded-full " + (activeComite === "all" ? "bg-[#0b2a55] hover:bg-[#1a4280]" : "")}
          >
            <Users className="w-4 h-4 mr-2" />
            Tous les membres
          </Button>
          {COMITES.map((comite) => {
            const Icon = comite.icon;
            const colors = colorClasses[comite.color];
            return (
              <Button
                key={comite.id}
                variant={activeComite === comite.id ? "default" : "outline"}
                onClick={() => setActiveComite(comite.id)}
                className={"rounded-full " + (activeComite === comite.id ? colors.bg + " " + colors.hover : "")}
              >
                <Icon className="w-4 h-4 mr-2" />
                {comite.nom}
              </Button>
            );
          })}
        </div>

        <div className="space-y-16">
          {filteredComites.map((comite) => {
            const Icon = comite.icon;
            const colors = colorClasses[comite.color];
            
            return (
              <section key={comite.id}>
                <div className="flex items-center gap-4 mb-8">
                  <div className={"w-14 h-14 rounded-2xl flex items-center justify-center " + colors.light}>
                    <Icon className={"w-7 h-7 " + colors.text} />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-[#0b2a55]">
                      {comite.nom}
                    </h2>
                    <p className="text-gray-500">{comite.description}</p>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {comite.membres.map((membre, idx) => (
                    <MembreCard key={idx} membre={membre} color={comite.color} />
                  ))}
                </div>
              </section>
            );
          })}
        </div>

        <section className="mt-20 bg-gradient-to-r from-[#0b2a55]/5 to-orange-50 rounded-3xl p-8 md:p-12">
          <div className="text-center mb-10">
            <h3 className="text-2xl font-bold text-[#0b2a55] mb-2">
              Une gouvernance au service de notre mission
            </h3>
            <p className="text-gray-500 max-w-2xl mx-auto">
              Version institutionnelle - statuts, reglement interieur et communication alignes
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { icon: Heart, title: "Ethique", desc: "Respect et integrite au coeur de nos actions" },
              { icon: Globe, title: "Inclusion", desc: "L'insertion sans barrieres pour tous" },
              { icon: Lock, title: "Confiance", desc: "Protection des donnees et transparence" },
              { icon: Award, title: "Excellence", desc: "Innovation responsable et qualite" }
            ].map((value, idx) => {
              const Icon = value.icon;
              return (
                <div key={idx} className="text-center">
                  <div className="w-12 h-12 mx-auto rounded-full bg-white shadow-md flex items-center justify-center mb-3">
                    <Icon className="w-6 h-6 text-[#0b2a55]" />
                  </div>
                  <h4 className="font-semibold text-[#0b2a55]">{value.title}</h4>
                  <p className="text-sm text-gray-500">{value.desc}</p>
                </div>
              );
            })}
          </div>
        </section>
      </div>
    </div>
  );
}

export default MembresPage;
