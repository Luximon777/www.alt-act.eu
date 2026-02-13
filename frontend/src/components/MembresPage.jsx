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
import Navigation from "./Navigation";

const COMITES = [
  {
    id: "bureau",
    nom: "Bureau",
    description: "Instance décisionnaire - Représentation légale",
    icon: Crown,
    color: "amber",
    membres: [
      {
        nom: "Chitrasen Luximon",
        fonction: "Président - Représentant légal",
        role: "Décisionnaire",
        soustitre: "Fondateur | Architecte de projets à impact sociétal",
        photo: null,
        bio: "Chitrasen Luximon est un dirigeant engagé dans la transformation des modèles d'insertion professionnelle et dans l'émergence de solutions structurantes face aux mutations profondes du marché du travail. Président et représentant légal de l'association ALT&ACT, il conduit une stratégie orientée vers l'intérêt général, articulant innovation sociale, sécurisation des parcours et développement du capital humain. Son positionnement dépasse le cadre d'une gouvernance associative classique : il s'inscrit dans une logique d'ingénierie systémique visant à rapprocher les besoins des territoires, les dynamiques économiques et les trajectoires professionnelles des citoyens.",
        vision: "Il défend une conception moderne de l'employabilité, considérée comme un levier de cohésion sociale, de compétitivité et de stabilité démocratique. Son action contribue à structurer des réponses capables d'anticiper les transformations des compétences, tout en renforçant la capacité d'adaptation des organisations et des individus.",
        realisations: "Au cours de son parcours, Chitrasen Luximon a accompagné plus de 2 000 personnes dans leurs transitions professionnelles, contribuant à renforcer leur capacité d'action, leur estime de soi et leur inscription durable dans l'emploi. Fondateur d'une structure de conseil spécialisée dans la gestion de carrière et la formation pour adultes, il a conçu et piloté des dispositifs d'accompagnement destinés à des publics hétérogènes.",
        signature: "Sa démarche repose sur une conviction structurante : la stabilité des sociétés repose en partie sur la capacité des individus à trouver une place reconnue et utile dans le monde professionnel. Son approche conjugue exigence méthodologique, responsabilité éthique et vision de long terme.",
        formation: ["Master II en ingénierie de la formation et des compétences", "Accréditations en analyse des types psychologiques", "Identification des talents et dynamiques collectives"],
        expertise: ["Gouvernance et direction de projets à impact", "Stratégies d'employabilité et politiques de compétences", "Ingénierie de formation", "Lecture systémique des parcours", "Innovation sociale appliquée au travail", "Pilotage d'écosystèmes partenariaux"]
      },
      {
        nom: "Anne-Marie Schwemmer",
        fonction: "Secrétaire",
        role: "Décisionnaire",
        soustitre: "Experte en leadership, transformation organisationnelle et management stratégique",
        photo: null,
        bio: "Anne-Marie Schwemmer est une dirigeante et stratège reconnue pour sa capacité à structurer, organiser et piloter des projets complexes au sein d'écosystèmes professionnels variés. En tant que Secrétaire au sein de l'Association ALT&ACT, elle assume des responsabilités institutionnelles fortes en matière de conformité, de structuration administrative et de coordination des instances décisionnelles. Sa posture conjugue rigueur opérationnelle, vision systémique et leadership collaboratif, ce qui en fait un atout majeur pour le développement de dispositifs d'impact sociétal et de partenariats stratégiques.",
        vision: "Anne-Marie est animée par une vision intégrée du management, où la performance organisationnelle se nourrit de la qualité des processus internes, de la cohérence des pratiques et de la mobilisation du capital humain. Dans une perspective européenne et territoriale, elle est en mesure de structurer les mécanismes de gouvernance et les cadres de décision, assurer l'articulation des acteurs, des partenaires et des parties prenantes, ancrer les projets dans des approches durables et intégrées, et piloter des démarches de changement alignées avec les politiques publiques.",
        realisations: "Anne-Marie s'est construite une expertise solide au croisement du management, du leadership et du développement organisationnel, à travers l'animation de communautés professionnelles et de réseaux, la facilitation de transformations internes, la coordination de projets transversaux impliquant des acteurs multiples, et l'accompagnement de dirigeants dans leurs dynamiques de leadership. Elle combine une compréhension fine des enjeux humains avec une pratique affirmée des processus décisionnels structurés.",
        signature: "Anne-Marie place la qualité de l'organisation interne au cœur de la performance et de l'impact durable des projets. Son approche s'appuie sur une lecture systémique des dynamiques collaboratives et institutionnelles, visant à sécuriser les processus tout en favorisant l'innovation et la réactivité. Elle sait articuler la rigueur des cadres de gouvernance avec la créativité requise pour impulser des transformations profondes.",
        expertise: ["Gouvernance institutionnelle", "Coordination de projets", "Leadership collaboratif", "Transformation organisationnelle", "Animation de réseaux", "Pilotage stratégique", "Conformité administrative", "Pratiques managériales"]
      },
      {
        nom: "Chitra Dorffer",
        fonction: "Trésorière",
        role: "Décisionnaire",
        soustitre: "Experte en pilotage financier, contrôle de gestion et optimisation des organisations",
        photo: null,
        bio: "Chitra Dorffer est une dirigeante spécialisée dans les fonctions financières stratégiques et le contrôle de gestion au sein d'organisations structurées. En tant que Trésorière de l'Association ALT&ACT, elle est responsable de la structuration des processus financiers, de la conformité budgétaire, de la transparence des comptes et de la sécurisation des pratiques de gestion. Son expertise repose sur une expérience robuste en pilotage financier, reporting, optimisation des performances et gestion des risques économiques, compétences essentielles pour accompagner des projets à fort impact et des programmes multi-partenaires.",
        realisations: "Chitra a développé son expertise principalement dans des environnements exigeants au plan financier et organisationnel. Elle occupe actuellement un poste de contrôle de gestion et de responsabilité financière au sein d'une grande entreprise industrielle, où elle est en charge de l'élaboration et du suivi des budgets, la production de tableaux de bord de performance, l'analyse des écarts et la proposition de mesures correctives, et l'intégration d'indicateurs clés pour améliorer la performance opérationnelle et financière. Cette expérience lui confère une vision à la fois analytique et stratégique des enjeux financiers, ce qui est déterminant pour assurer la pérennité et la crédibilité d'organisations structurées.",
        vision: "Chitra Dorffer apporte à la gouvernance d'ALT&ACT une maîtrise des enjeux de transparence financière essentielle pour les financeurs publics et institutionnels, une capacité à structurer les processus budgétaires et de reporting pour les projets multi-sources, une lecture stratégique des risques économiques et de conformité, et une expertise en pilotage des performances financières au service de l'impact social. Par sa fonction de trésorière, elle sécurise les choix financiers, garantit l'intégrité des pratiques de gestion et favorise une allocation optimale des ressources dans le cadre des projets structurants de l'association.",
        signature: "Son approche se caractérise par une forte orientation vers la fiabilité des données financières et des processus de contrôle interne, une capacité à connecter la performance économique avec les ambitions sociales et les objectifs de transformation, et un leadership pragmatique orienté vers la performance durable des projets et des organisations. Dans un contexte européen ou institutionnel, cette expertise renforce la crédibilité de l'association auprès des partenaires financiers, des bailleurs de fonds publics ou privés, et des réseaux de coopération.",
        expertise: ["Contrôle de gestion stratégique", "Pilotage budgétaire", "Responsabilité financière", "Supervision comptable", "Optimisation des processus", "Tableaux de bord de performance", "Gestion des risques économiques", "Conformité financière"]
      }
    ]
  },
  {
    id: "direction",
    nom: "Comité de direction",
    description: "Membres fondateurs - Orientations stratégiques",
    icon: Compass,
    color: "teal",
    membres: [
      {
        nom: "Chitrasen Luximon",
        fonction: "Membre fondateur",
        role: "Décisionnaire",
        soustitre: "Architecte de projets à impact sociétal",
        photo: null,
        bio: "Initiateur du projet RE'ACTIF PRO et de la méthode VSI. Son expérience opérationnelle nourrit une lecture stratégique des enjeux liés aux tensions sur les compétences, aux transitions professionnelles accélérées, et à la nécessité de modèles d'accompagnement plus prédictifs et personnalisés.",
        expertise: ["Innovation", "Insertion professionnelle", "Développement territorial", "Ingénierie de formation"]
      },
      {
        nom: "Chitra Dorffer",
        fonction: "Membre fondatrice",
        role: "Décisionnaire",
        photo: null,
        bio: "Co-fondatrice engagée dans l'inclusion et l'accessibilité.",
        expertise: ["Inclusion", "Accessibilité", "Gestion"]
      },
      {
        nom: "Anne-Marie Schwemmer",
        fonction: "Membre fondatrice",
        role: "Décisionnaire",
        photo: null,
        bio: "Co-fondatrice impliquée dans la structuration du dispositif.",
        expertise: ["Organisation", "Développement", "Partenariats"]
      },
      {
        nom: "Sandrine Ratolojanahary",
        fonction: "Membre fondatrice",
        role: "Décisionnaire",
        soustitre: "Professionnelle de l'éducation | Actrice de l'engagement sociétal",
        photo: null,
        bio: "Sandrine Ratolojanahary est une professionnelle de l'éducation dont le parcours s'inscrit à la convergence des enjeux pédagogiques, environnementaux et sociétaux. Professeure des écoles, elle contribue quotidiennement au développement des compétences fondamentales, à la structuration des apprentissages et à la formation du citoyen. Son engagement dépasse le cadre strict de l'enseignement : ses premières expériences en tant qu'éco-conseillère ainsi que son implication dans des initiatives humanitaires et éducatives à Madagascar témoignent d'une sensibilité affirmée aux questions de développement durable, de transmission et d'égalité des chances.",
        realisations: "En tant que professeure des écoles, Sandrine mobilise une expertise pédagogique centrée sur l'acquisition des savoirs fondamentaux, l'accompagnement des trajectoires d'apprentissage, l'adaptation aux besoins diversifiés des publics, et le développement de l'autonomie et de la confiance chez les apprenants. Son entrée dans la vie professionnelle par l'éco-conseil lui a permis d'intégrer très tôt une lecture systémique des enjeux environnementaux et la pédagogie du changement de comportement. Son implication dans des actions humanitaires et éducatives à Madagascar traduit une capacité à intervenir dans des contextes interculturels et à forte utilité sociale, développant des initiatives éducatives et des actions de soutien aux publics vulnérables.",
        vision: "La présence de Sandrine au sein des membres fondateurs participe à l'équilibre de la gouvernance en y intégrant une expertise essentielle : celle des dynamiques d'apprentissage et de construction des compétences dès les premières étapes de la vie. Elle apporte notamment une lecture pédagogique des parcours, une sensibilité aux enjeux d'égalité des opportunités, une culture de la transmission, une approche préventive des fragilités sociales, et une capacité à relier éducation et insertion professionnelle.",
        signature: "Son parcours reflète une conviction forte : le développement des individus repose sur un accès équitable à l'éducation, à l'accompagnement et aux opportunités. Elle inscrit son action dans une logique de contribution durable à la société, fondée sur la transmission des savoirs et la responsabilisation. Sa posture conjugue exigence éducative, engagement humain et vision de long terme.",
        expertise: ["Pédagogie et transmission", "Développement des compétences", "Éco-conseil", "Développement durable", "Engagement humanitaire", "Interculturalité", "Égalité des chances", "Accompagnement éducatif"]
      },
      {
        nom: "Anthony Ratolojanahary",
        fonction: "Membre fondateur",
        role: "Décisionnaire",
        soustitre: "RSSI (CISO) MES-DMP | Caisse nationale de l'Assurance Maladie",
        photo: null,
        bio: "Anthony Ratolojanahary est un professionnel confirmé dans le domaine de la cybersécurité, de la protection des données et du management des risques liés aux systèmes d'information. Il occupe actuellement le poste de RSSI (CISO) du domaine MES (Mon Espace Santé) - DMP (Dossier Médical Partagé) au sein de la Caisse nationale de l'Assurance Maladie, où il exerce dans un environnement à haute exigence de sécurité, de conformité réglementaire et de fiabilité des systèmes critiques. Cette expertise technique et stratégique confère une dimension essentielle à la gouvernance d'ALT&ACT, notamment lorsque l'organisation s'inscrit dans des projets numériques, des démarches d'innovation ou des configurations multi-partenaires où la sécurité des données, la confidentialité et la conformité juridique sont des prérequis indispensables.",
        realisations: "Anthony a construit son expérience professionnelle au cœur d'enjeux opérationnels où la cybersécurité ne se limite pas à la technique, mais devient un vecteur de confiance organisationnelle et de pérennité pour les opérations critiques. Il assure le pilotage des risques de cybersécurité au sein d'organisations publiques, la sécurisation des infrastructures informatiques avec une attention particulière aux processus de protection des données personnelles, et la conformité réglementaire essentielle pour répondre aux exigences des financeurs européens ou institutionnels.",
        vision: "La présence d'Anthony dans l'équipe fondatrice renforce l'association sur plusieurs plans : sécurité des processus numériques avec capacité à anticiper et maîtriser les vulnérabilités, conformité réglementaire notamment en matière de traitement des données personnelles (RGPD), et crédibilité technique auprès des partenaires institutionnels exigeants.",
        signature: "Anthony conjugue rigueur technique et compréhension des enjeux de gouvernance : il sait faire le lien entre les exigences opérationnelles de la sécurité informatique et les impératifs stratégiques des projets à impact sociétal. Cette capacité à naviguer entre le complexe technologique et le besoin de fiabilité organisationnelle est un atout stratégique majeur pour ALT&ACT dans un contexte où les données, la confiance et la sécurité numérique deviennent des enjeux centraux.",
        expertise: ["Cybersécurité", "Protection des données", "Gestion des risques IT", "Conformité RGPD", "Sécurité des systèmes d'information", "Résilience organisationnelle", "Gouvernance informatique"]
      },
      {
        nom: "Rajwantee Lepain",
        fonction: "Membre fondatrice",
        role: "Décisionnaire",
        soustitre: "Psychologue clinicienne | Actrice de l'accompagnement humain et de la transformation sociale",
        photo: null,
        bio: "Rajwantee Lepain est une psychologue clinicienne établie à Strasbourg, dont l'activité professionnelle repose sur l'accompagnement psychologique des individus, l'analyse des dynamiques humaines et la facilitation de processus de changement profond. Son expertise clinique, orientée vers l'écoute, la compréhension des trajectoires de vie et l'accompagnement des transitions personnelles, fait d'elle une contributrice essentielle aux approches humaines, sociales et systématiques portées par ALT&ACT. Son rôle transcende une simple fonction clinique : par sa compréhension fine des facteurs humains au cœur des transitions, elle constitue une ressource stratégique pour des projets d'envergure visant à articuler performance sociale, cohésion et développement des capacités humaines.",
        realisations: "En tant que psychologue clinicienne, Rajwantee intervient auprès de populations très diverses pour évaluer et soutenir les processus psychiques en contexte de changement ou de stress, accompagner les transitions de vie (personnelles, professionnelles, identitaires), faciliter la construction d'un sens cohérent des expériences vécues, et aider à la mobilisation des ressources internes et relationnelles. Son expertise repose sur une posture clinique fondée sur l'écoute active et empathique, l'analyse des facteurs psychologiques structurels, l'évaluation des blocages et leviers de transformation, et la construction d'espaces de dialogue et de reconstruction identitaire.",
        vision: "La contribution de Rajwantee à la gouvernance enrichit la stratégie de l'association en apportant une compréhension fine des facteurs humains au cœur de l'employabilité, une capacité à intégrer des dimensions psychologiques et systémiques dans les parcours d'accompagnement, une expertise essentielle dans la construction de dispositifs adaptés à la personne, et une ressource stratégique pour penser l'impact social en termes d'effets durables sur le bien-être, la confiance et les trajectoires de vie. Cette dimension est particulièrement recherchée dans les projets européens ou institutionnels portant sur l'inclusion, le développement des compétences ou le renforcement des capacités des publics.",
        signature: "Rajwantee incarne une approche centrée sur l'humain dans sa globalité, plaçant l'expérience subjective et les ressources internes comme des vecteurs indispensables de construction de trajectoires stables et durables. Cette posture s'articule avec les valeurs portées par ALT&ACT : humanisme, responsabilité, équité et transformation positive. Elle constitue une voix qualifiée pour connecter les dimensions psychologiques aux enjeux sociétaux.",
        expertise: ["Psychologie clinique", "Accompagnement des transitions", "Dynamiques humaines", "Développement personnel", "Analyse systémique", "Écoute empathique", "Reconstruction identitaire", "Facteurs d'employabilité"]
      },
      {
        nom: "Sébastien Ehlenberger",
        fonction: "Membre fondateur",
        role: "Décisionnaire",
        soustitre: "Manager de projets | Expert en coordination intersectorielle",
        photo: null,
        bio: "Sébastien E. est un professionnel confirmé dans le pilotage de projets, la coordination d'équipes et la mise en œuvre d'initiatives collaboratives. Son parcours repose sur l'acquisition d'une expertise opérationnelle riche, orientée vers l'efficacité organisationnelle, la structuration de processus et l'animation de partenariats. Présent au sein de la gouvernance d'ALT&ACT en tant que membre fondateur, il contribue à renforcer la capacité de l'association à concevoir, déployer et piloter des projets structurants à impact social, avec une lecture pragmatique des exigences organisationnelles et des dynamiques collectives.",
        realisations: "Le parcours de Sébastien se développe dans des environnements où le pilotage de projet, la coordination multi-acteurs et l'élaboration de stratégies d'action concrètes sont centraux. Il assure la gestion de projets complexes impliquant de multiples parties prenantes, la coordination intersectorielle garantissant l'alignement des objectifs et des livrables, l'animation de projets structurants intégrant des stratégies de communication et de mobilisation des ressources, et l'accompagnement de transformations organisationnelles avec une attention particulière à l'efficacité collective.",
        vision: "La présence de Sébastien au sein du conseil fondateur constitue un atout stratégique pour assurer la cohérence opérationnelle entre les orientations stratégiques et leur mise en œuvre effective, renforcer la gouvernance interne par une approche structurée du pilotage de projets, faciliter les coopérations avec des acteurs institutionnels, économiques et associatifs, et soutenir la professionnalisation des processus de coordination pour des programmes ambitieux. Cette position lui permet de contribuer à l'émergence d'un cadre d'action robuste, capable de soutenir des projets complexes et à fort impact social.",
        signature: "Sébastien fonctionne à l'interface entre direction stratégique et opérationnalité. Il sait traduire les ambitions institutionnelles - conceptuelles ou politiques - en plans d'action clairs, mesurables et alignés sur les objectifs collectifs. Il favorise une approche inclusive, structurée et axée résultats, tout en gardant une lecture fine des dynamiques organisationnelles qui influencent la qualité de la mise en œuvre.",
        expertise: ["Pilotage de projet", "Coordination opérationnelle", "Gestion multi-acteurs", "Dispositifs collaboratifs", "Leadership transversal", "Communication structurée", "Transformation organisationnelle"]
      }
    ]
  },
  {
    id: "pilotage",
    nom: "Comité de pilotage",
    description: "Instance consultative - Expertise et conseil",
    icon: Lightbulb,
    color: "purple",
    membres: [
      {
        nom: "Anthony Ratolojanahary",
        fonction: "Cybersécurité & données sensibles",
        role: "Consultatif",
        soustitre: "RSSI (CISO) MES-DMP | Caisse nationale de l'Assurance Maladie",
        photo: null,
        bio: "Anthony Ratolojanahary est un professionnel confirmé dans le domaine de la cybersécurité, de la protection des données et du management des risques liés aux systèmes d'information. Il occupe actuellement le poste de RSSI (CISO) du domaine MES (Mon Espace Santé) - DMP (Dossier Médical Partagé) au sein de la Caisse nationale de l'Assurance Maladie, où il exerce dans un environnement à haute exigence de sécurité, de conformité réglementaire et de fiabilité des systèmes critiques.",
        vision: "Au sein du Comité de pilotage, il apporte son expertise pour sécuriser les processus numériques, garantir la conformité réglementaire (RGPD, normes internationales), et renforcer la crédibilité technique auprès des partenaires institutionnels.",
        signature: "Anthony conjugue rigueur technique et compréhension des enjeux de gouvernance, faisant le lien entre les exigences opérationnelles de la sécurité informatique et les impératifs stratégiques des projets à impact sociétal.",
        expertise: ["Cybersécurité", "RGPD", "Protection des données", "Architecture technique", "Gestion des risques IT", "Conformité réglementaire"]
      },
      {
        nom: "Stephano Vacher",
        fonction: "Stratégie, RSE, innovation responsable",
        role: "Consultatif",
        soustitre: "Directeur de master et enseignant à l'École de Management de Strasbourg | Expert en stratégie, RSE & innovation responsable",
        photo: null,
        bio: "Stephano Vacher est un expert reconnu dans les domaines de la stratégie, de la responsabilité sociétale des organisations (RSE) et de l'innovation responsable. Directeur de master et enseignant à l'École de Management de Strasbourg, il allie une expertise académique solide à une expérience pratique dans l'accompagnement des transformations organisationnelles et des projets complexes. Au sein du Comité de pilotage consultatif d'ALT&ACT, il apporte une lecture stratégique des enjeux à l'interface entre innovation sociétale, gouvernance responsable et impacts durables, ce qui constitue un atout majeur pour structurer une démarche porteuse de sens et de résultats à l'échelle européenne.",
        realisations: "Stephano a construit une trajectoire riche qui croise réflexion stratégique, accompagnement des transformations et leadership éclairé sur les sujets d'innovation et de durabilité. En stratégie et pilotage, il assure la conception et l'accompagnement de démarches stratégiques pour des organisations publiques, privées ou associatives, l'intégration des dimensions RSE et ESG dans les modèles de développement, et la structuration de feuilles de route pour des projets à impact.",
        vision: "Sa présence au sein du Comité de pilotage renforce la capacité de l'association à s'inscrire dans les cadres européens en matière de durabilité et de responsabilité sociétale, intégrer des exigences croissantes de transparence, de gouvernance éthique et de mesure d'impact, et construire une stratégie cohérente avec les attentes des institutions et des partenaires. Il constitue une ressource stratégique pour articuler les ambitions de l'association avec les politiques publiques européennes en matière de transition écologique, d'emploi et de compétences.",
        signature: "Stephano incarne une approche exigeante et éclairée de la stratégie, où l'innovation ne se conçoit qu'à travers le prisme de la responsabilité, de l'éthique et de l'impact réel. Il apporte une capacité à conceptualiser des trajectoires complexes, à en mesurer les effets, et à les ajuster dans une logique d'amélioration continue.",
        formation: ["Doctorat en stratégie et management de l'innovation", "Expertise en RSE et gouvernance responsable"],
        expertise: ["Stratégie organisationnelle", "RSE et ESG", "Innovation responsable", "Gouvernance éthique", "Transformation durable", "Formation en management", "Politiques publiques européennes", "Mesure d'impact"]
      },
      {
        nom: "Marc Avanzo",
        fonction: "Expert en leadership et facilitateur de gouvernance",
        role: "Consultatif",
        soustitre: "Coach exécutif & facilitateur international | Spécialiste des transformations organisationnelles",
        photo: null,
        bio: "Marc Avanzo est un coach exécutif et facilitateur international spécialisé dans l'accompagnement de dirigeants et d'équipes dans des contextes de transition culturelle et stratégique. Consultant senior en leadership, il intervient au niveau individuel et collectif auprès de cadres dirigeants, d'équipes et d'organisations. Sa pratique repose sur une combinaison de coaching professionnel, de facilitation de groupe et d'outils de développement humain, avec un accent marqué sur la communication non violente, l'intelligence émotionnelle et les dynamiques de leadership durable.",
        realisations: "Marc a construit son expertise à la croisée du monde stratégique, du coaching exécutif et du développement du leadership. Après des débuts dans des fonctions marketing et stratégie dans les télécoms au Royaume-Uni et en France, il a opéré une carrière pivot vers le coaching et le développement du leadership il y a plus de 20 ans. Il exerce comme coach externe et facilitateur associé à de grandes structures, notamment INSEAD et McKinsey & Company. Il a été responsable de formations, du développement des talents et de la mise en œuvre de programmes de changement dans des contextes multiculturels, en Europe, en Asie et ailleurs.",
        vision: "Au sein d'ALT&ACT, Marc Avanzo apporte une expertise de haut niveau dans l'accompagnement des transformations individuelles et collectives. Sa contribution s'articule autour d'une fonction d'appui stratégique : structuration d'une gouvernance consciente favorisant l'intelligence collective et la responsabilité partagée, développement du leadership interne pour les membres du bureau et responsables de projets, installation d'une culture de la consultation où les divergences deviennent productives, et accompagnement des phases de transition pour réduire les risques de fragmentation et soutenir la continuité stratégique.",
        signature: "Marc Avanzo contribue moins à « faire fonctionner » ALT&ACT qu'à élever son niveau de conscience organisationnelle. Son positionnement en tant que membre du Comité de pilotage présente trois avantages majeurs : préserver son regard indépendant, éviter une dilution dans l'opérationnel, et mobiliser son expertise sur les moments réellement stratégiques. Sa participation favorise une organisation plus robuste et lisible, des pratiques décisionnelles plus matures, une meilleure prévention des tensions internes et une capacité accrue à porter un modèle innovant à l'échelle européenne.",
        formation: ["Diplômé en ingénierie électrique (Supélec, Paris & Technische Universität Darmstadt)", "MBA – INSEAD (programme exécutif à Paris)", "Coach certifié ICF PCC (International Coaching Federation)", "Formateur certifié en Communication Non Violente (approche Marshall Rosenberg)"],
        expertise: ["Leadership transformationnel", "Coaching exécutif ICF PCC", "Facilitation de gouvernance", "Communication Non Violente", "Intelligence émotionnelle", "Développement des talents", "MBTI II, Leadership Circle, Hogan", "Approches somatiques (Hanna Somatic)"]
      }
    ]
  },
  {
    id: "ethique",
    nom: "Comité de mission éthique",
    description: "Garants de l'intégrité et de la conformité",
    icon: Heart,
    color: "green",
    membres: [
      {
        nom: "Jean-Marc Lepain",
        fonction: "Expert en finances publiques",
        role: "Consultatif indépendant",
        soustitre: "Expert international en finances publiques (PFM) | Ancien Conseiller FMI",
        photo: null,
        bio: "Jean-Marc Lepain est un expert international reconnu dans le domaine des finances publiques (Public Financial Management - PFM), avec une trajectoire de plus de 25 ans au service de la réforme des administrations publiques et du renforcement des capacités institutionnelles à grande échelle. Il évolue depuis plus d'une décennie au cœur des transformations institutionnelles, accompagnant des gouvernements, des organisations internationales et des bailleurs dans la modernisation de leurs systèmes financiers. Il occupe récemment la fonction de Chief of Party pour un programme de soutien à la gestion des finances publiques au Sénégal, mené dans le cadre d'un partenariat entre USAID et Deloitte.",
        realisations: "Son parcours se distingue par une forte dimension géographique et stratégique, avec des responsabilités exercées en Afrique, au Moyen-Orient et en Asie. Au Sénégal (Direction de programme) : pilotage de réformes PFM à l'échelle de l'État, renforcement de la transparence budgétaire, modernisation des systèmes de gestion de la dette, introduction de budgets verts. Au Brunei (Ministère des Finances) : création d'outils de prévision budgétaire, conception et déploiement d'un programme de consolidation budgétaire, mise en œuvre de réformes structurantes. Au FMI (Conseiller régional) : diagnostics des systèmes de finances publiques, appui à la planification macro-budgétaire, renforcement des capacités auprès des ministères des finances.",
        vision: "Jean-Marc Lepain présente un profil typique des architectes de réformes publiques, intervenant sur des programmes à fort impact systémique. Sa capacité à opérer dans des environnements gouvernementaux complexes et à piloter des transformations structurelles constitue un marqueur élevé de crédibilité institutionnelle. Sa présence au sein du Comité de mission éthique envoie un signal particulièrement fort : culture avancée de la redevabilité et de la transparence, maîtrise des cadres de gouvernance exigés par les financeurs publics, compréhension des logiques d'impact et d'évaluation, et capacité à structurer des dispositifs robustes et conformes aux standards internationaux.",
        signature: "Au-delà de la dimension éthique, il contribue implicitement à installer une discipline de gouvernance souvent observée dans les organisations à forte maturité institutionnelle. Son expérience auprès d'organisations internationales et de ministères positionne son expertise au niveau des standards attendus dans les programmes financés par les grands bailleurs.",
        formation: ["Institut d'Études Politiques de Paris (Sciences Po)"],
        expertise: ["Finances publiques (PFM)", "Réformes budgétaires", "Direction de programmes internationaux", "Macro-fiscalité", "Transparence et redevabilité", "Renforcement institutionnel", "Coordination bailleurs", "Conduite du changement"]
      },
      {
        nom: "Alexandra Horst",
        fonction: "Psychologue clinicienne",
        role: "Consultatif indépendant",
        soustitre: "Psychologue clinicienne & praticienne en ressources humaines | Double compétence clinique et RH",
        photo: null,
        bio: "Alexandra Horst est une psychologue clinicienne libérale installée à Strasbourg, dotée d'une double formation en psychologie clinique et en gestion des ressources humaines (Master 2), ce qui lui confère une expertise unique tant dans l'accompagnement psychologique que dans la compréhension des dynamiques humaines au sein des organisations. Sa présence au sein du Comité de mission éthique d'ALT&ACT apporte une dimension réflexive, centrée sur l'humain, enrichissant les approches institutionnelles par une lecture des facteurs psychologiques, comportementaux et relationnels qui influencent les trajectoires individuelles et collectives.",
        realisations: "Alexandra exerce en tant que psychologue clinicienne à Strasbourg, où elle accompagne des adultes et des adolescents dans leurs questionnements personnels, familiaux ou professionnels, à travers des consultations individuelles et des approches psychothérapeutiques adaptées. Sa pratique repose sur un référentiel clinique intégratif, combinant des éléments analytiques, cognitifs, comportementaux et systémiques pour offrir un accompagnement souple et adapté.",
        vision: "Au sein du Comité de mission éthique, Alexandra apporte une expertise précieuse sur les dimensions humaines invisibles mais déterminantes des parcours d'accompagnement professionnel et social. Son intervention renforce notamment l'intégration systémique des facteurs psychologiques dans les dispositifs de soutien, l'élaboration de cadres d'accompagnement centrés sur la personne, la capacité à anticiper les blocages comportementaux ou émotionnels dans les trajectoires, et la qualité de l'écoute institutionnelle pour outiller les publics dans leurs transitions.",
        signature: "Alexandra combine rigueur clinique, bienveillance structurée et lecture stratégique des processus humains. Elle travaille à la fois sur la compréhension des dynamiques internes des individus, l'ajustement des comportements à des contextes de changement, et la transformation des relations interpersonnelles vers des conditions de réussite.",
        formation: ["Master en Psychologie clinique interculturelle et transculturelle - Université de Strasbourg", "Master en Gestion des Ressources Humaines - IAE Strasbourg"],
        expertise: ["Psychologie clinique", "Accompagnement des transitions", "Approches intégratives", "Dynamiques interculturelles", "Gestion des ressources humaines", "Facteurs socio-émotionnels", "Lecture systémique", "Éthique clinique"]
      },
      {
        nom: "Martine Caillard-Dahl",
        fonction: "Productrice culturelle",
        role: "Consultatif indépendant",
        soustitre: "Productrice culturelle | Actrice de la création audiovisuelle",
        photo: null,
        bio: "Martine Caillard-Dahl est une professionnelle de la production audiovisuelle, reconnue pour son engagement dans la valorisation de projets culturels à dimension patrimoniale et sociétale. Fondatrice de la société Token Productions en 1995, elle a contribué au développement de contenus cinématographiques, documentaires et publicitaires, inscrivant son action dans une logique de transmission culturelle et de mise en récit des réalités humaines. Son parcours témoigne d'une capacité à concevoir et piloter des projets créatifs impliquant des enjeux historiques, identitaires et territoriaux.",
        realisations: "Fondatrice de Token Productions à Strasbourg, elle a assuré la direction et gestion de projets audiovisuels avec des activités centrées sur la production de films documentaires, cinématographiques et publicitaires. Productions notables : Jean-Marie Tjibaou ou le rêve d'indépendance (2000), œuvre s'inscrivant dans une réflexion historique et politique autour des dynamiques d'émancipation. AD!, monnaie kanak (1992) pour l'Agence de Développement de la Culture Kanak et le Musée territorial de Nouvelle-Calédonie. Elle a également participé au Festival des arts du Pacifique (1984-1985).",
        vision: "Martine Caillard-Dahl incarne un profil de productrice engagée, capable de relier création artistique et compréhension des dynamiques sociales. Son expérience dans des projets à portée culturelle internationale contribue à enrichir la gouvernance par une perspective sensible aux représentations, aux identités et aux transformations sociétales.",
        signature: "Au sein du Comité de mission éthique, elle apporte une lecture culturelle des transformations sociales, utile pour inscrire les actions dans une compréhension élargie des contextes humains, favoriser des approches respectueuses des identités et des parcours, et enrichir la réflexion éthique par une sensibilité aux représentations collectives.",
        expertise: ["Production audiovisuelle", "Projets culturels", "Patrimoine et récits sociétaux", "Coordination artistique", "Interculturalité", "Médiation culturelle", "Mémoire collective", "Identités et territoires"]
      },
      {
        nom: "Laxsounee Bhoodun",
        fonction: "Juriste",
        role: "Consultatif indépendant",
        soustitre: "Juriste | Experte en sécurisation juridique et conformité",
        photo: null,
        bio: "Laxsounee Bhoodun est juriste au sein d'un organisme de protection sociale, où elle intervient sur des problématiques juridiques exigeant rigueur, maîtrise réglementaire et sens de la responsabilité institutionnelle. Son expertise contribue à sécuriser les cadres d'action, à garantir la conformité des pratiques et à accompagner les organisations dans la compréhension de leurs obligations légales. Au sein du Comité de mission éthique d'ALT&ACT, elle apporte une lecture structurante des enjeux juridiques, essentielle pour toute organisation engagée dans des projets à impact social et amenée à interagir avec des partenaires publics ou institutionnels.",
        realisations: "En tant que juriste au sein d'un organisme de protection sociale (CARSAT), son activité s'inscrit dans un environnement fortement normé, caractérisé par l'analyse et l'interprétation de textes juridiques, la gestion de situations réglementaires complexes, la sécurisation des décisions administratives, la prévention des risques contentieux, et l'accompagnement des parties prenantes dans l'application du droit. Cette expérience développe une capacité à conjuguer précision technique et compréhension des réalités opérationnelles.",
        vision: "La présence d'une juriste au sein du comité éthique constitue un marqueur important de maturité organisationnelle. Laxsounee Bhoodun renforce notamment la capacité de l'association à structurer ses pratiques dans le respect des cadres légaux, anticiper les risques liés aux projets et aux partenariats, consolider la crédibilité de la gouvernance, et protéger l'organisation dans ses phases de développement. Son regard favorise un équilibre entre innovation et sécurité juridique.",
        signature: "Le profil de Laxsounee Bhoodun correspond à celui d'une garante du cadre, contribuant à installer une culture de conformité et de responsabilité. Dans un contexte où les exigences réglementaires se renforcent, notamment pour les projets à dimension sociale ou financés sur fonds publics, cette compétence devient stratégique. Sa participation au Comité de mission éthique soutient une gouvernance attentive à la solidité de ses fondations juridiques, condition indispensable à un développement durable et maîtrisé.",
        expertise: ["Analyse juridique", "Veille réglementaire", "Gestion des risques", "Conformité", "Sécurisation des procédures", "Droit de la protection sociale", "Responsabilité institutionnelle", "Prévention des contentieux"]
      },
      {
        nom: "Marion Perrin-Pujol",
        fonction: "Cheffe de service CRPEH, EMPEH, LAEP Ressources",
        role: "Consultatif indépendant",
        soustitre: "Apedi Alsace | Inclusion petite enfance et handicap",
        photo: null,
        bio: "Marion Perrin-Pujol est Cheffe de service au sein de l'Apedi Alsace, où elle pilote trois dispositifs stratégiques dédiés à l'inclusion des jeunes enfants en situation de handicap : le CRPEH (Centre Ressources Petite Enfance et Handicap), l'EMPEH (Équipe Mobile Petite Enfance et Handicap) et le LAEP Ressources (Lieu d'Accueil Enfants-Parents). Son rôle se situe à la croisée du médico-social, de la petite enfance et de l'ingénierie de parcours inclusifs, avec une responsabilité directe sur le pilotage d'équipes pluridisciplinaires, la coordination partenariale territoriale et la garantie du cadre réglementaire et éthique.",
        realisations: "À travers le CRPEH, elle favorise l'inclusion des enfants à besoins spécifiques dans les structures petite enfance via l'accueil des familles, l'évaluation des besoins et l'appui aux projets d'accueil individualisés. L'EMPEH qu'elle dirige intervient directement sur les lieux d'accueil (crèches, domiciles) pour observer, ajuster les pratiques et prévenir les exclusions. Le LAEP Ressources offre un espace d'accueil libre et gratuit renforçant le lien parent-enfant et permettant le repérage précoce des fragilités. Ces trois dispositifs partagent un objectif commun : prévenir les ruptures de parcours dès le plus jeune âge.",
        vision: "Sa présence au sein du Comité de Mission Éthique d'ALT&ACT apporte une expertise concrète sur les enjeux d'équité et d'accessibilité dans les pratiques d'accompagnement, une vigilance quant à l'adaptation des dispositifs aux situations nécessitant une attention particulière, et une sensibilité aux démarches de co-construction avec les familles et les professionnels. Elle renforce une gouvernance attentive à la responsabilité sociale et à la cohérence entre les valeurs portées par l'association et leur mise en œuvre opérationnelle.",
        signature: "Marion Perrin-Pujol incarne une vision où l'accompagnement se construit en partenariat étroit avec les familles, les équipes éducatives et les partenaires médico-sociaux. Son engagement témoigne d'une conviction profonde : chaque enfant, quelle que soit sa situation, mérite un accompagnement adapté qui respecte sa singularité et favorise son plein épanouissement dans un environnement ordinaire.",
        expertise: ["Pilotage de dispositifs médico-sociaux", "Inclusion petite enfance", "Coordination partenariale territoriale", "Accompagnement des familles", "Supervision d'équipes pluridisciplinaires", "Prévention des ruptures de parcours", "Soutien à la parentalité", "Ingénierie de parcours inclusifs"]
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
                  Profil exécutif
                </h5>
                <p className="text-sm text-gray-600 leading-relaxed whitespace-pre-line">
                  {membre.bio}
                </p>
              </div>

              {membre.vision && (
                <div>
                  <h5 className="text-sm font-semibold text-[#0b2a55] mb-2 flex items-center gap-2">
                    <Lightbulb className="w-4 h-4 text-amber-500" />
                    Vision stratégique
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
                    Trajectoire et réalisations
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
                  {isEnriched ? "Domaines d'autorité" : "Domaines d'expertise"}
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
      <Navigation />
      <div 
        className="relative text-white pt-28 pb-16 px-4"
        style={{
          backgroundImage: `linear-gradient(to right, rgba(11, 42, 85, 0.9), rgba(26, 66, 128, 0.85)), url('https://images.unsplash.com/photo-1624555130296-e551faf8969b?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1NzZ8MHwxfHNlYXJjaHwzfHxwcm9mZXNzaW9uYWwlMjB0ZWFtJTIwYnVzaW5lc3MlMjBtZWV0aW5nJTIwZGl2ZXJzaXR5fGVufDB8fHx8MTc3MDk4OTcwOHww&ixlib=rb-4.1.0&q=85')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="max-w-6xl mx-auto">
          <Button 
            variant="ghost" 
            onClick={() => navigate("/")} 
            className="text-white hover:bg-white/20 mb-6"
          >
            <ArrowLeft className="w-4 h-4 mr-2" /> Retour à l'accueil
          </Button>
          
          <Badge className="mb-4 bg-white/20 text-white border-white/30">Gouvernance ALT&ACT</Badge>
          <h1 className="text-3xl md:text-5xl font-bold mb-4">
            Nos Membres
          </h1>
          <p className="text-blue-100 text-lg max-w-2xl">
            Découvrez les femmes et les hommes qui portent la vision d'ALT&ACT et construisent 
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
              Version institutionnelle - statuts, règlement intérieur et communication alignés
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { icon: Heart, title: "Éthique", desc: "Respect et intégrité au cœur de nos actions" },
              { icon: Globe, title: "Inclusion", desc: "L'insertion sans barrières pour tous" },
              { icon: Lock, title: "Confiance", desc: "Protection des données et transparence" },
              { icon: Award, title: "Excellence", desc: "Innovation responsable et qualité" }
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
