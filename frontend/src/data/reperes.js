import { Heart, HandHeart, Globe, Link2, Ear, Lightbulb, TrendingUp, Users, User, Briefcase, Building2, HeartHandshake, Landmark, GraduationCap } from 'lucide-react';

export const SIGNATURE = "Permettre à chacun d'agir et de contribuer.";

export const reperes = [
  { id: 'dignite', label: 'Dignité', short: 'Chaque personne a une valeur propre', texte: 'Reconnaître chaque personne dans son expérience, ses capacités et ses aspirations.', icon: Heart, color: 'amber' },
  { id: 'service', label: 'Service', short: 'Agir avec, jamais à la place', texte: 'Mettre nos compétences et nos ressources au service du développement des personnes et de la société.', icon: HandHeart, color: 'teal' },
  { id: 'universalite', label: 'Universalité', short: 'Un accès réellement équitable', texte: "Favoriser un accès équitable aux ressources, à la connaissance et aux possibilités d'action.", icon: Globe, color: 'blue' },
  { id: 'unite', label: 'Unité', short: 'Relier plutôt que fragmenter', texte: 'Faire coopérer personnes, professionnels, associations, entreprises, chercheurs, institutions et territoires autour de solutions communes.', icon: Link2, color: 'purple' }
];

export const missions = [
  { id: 'ecouter', title: 'Écouter et comprendre', icon: Ear, color: 'amber', items: ['Accueillir la parole', 'Comprendre la situation dans sa globalité', 'Identifier les besoins', 'Respecter les choix', 'Créer un cadre confidentiel et non jugeant'] },
  { id: 'informer', title: 'Informer et rendre les possibilités visibles', icon: Lightbulb, color: 'blue', items: ['Donner accès à une information compréhensible', 'Identifier les ressources', 'Faire connaître les dispositifs', 'Rendre visibles des possibilités parfois méconnues', 'Permettre des décisions éclairées'] },
  { id: 'developper', title: "Développer les capacités d'agir", icon: TrendingUp, color: 'teal', items: ['Accompagner', 'Former', 'Expérimenter', 'Développer des compétences', "Renforcer l'autonomie"] },
  { id: 'relier', title: 'Relier et coopérer', icon: Users, color: 'purple', items: ['Mettre en relation', 'Créer des coopérations', 'Mobiliser les acteurs du territoire', 'Partager les connaissances', 'Construire et expérimenter des solutions'] }
];

export const profils = [
  {
    id: 'personne', label: 'Une personne', icon: User, color: 'amber',
    accroche: "Je traverse une transition, une difficulté ou une période d'incertitude.",
    texte: "Perte ou changement d'emploi, reconversion, retour à l'activité, situation qui se complique au travail… Vous n'avez pas à tout comprendre ni à tout résoudre seul. ALT&ACT vous propose un cadre d'écoute confidentiel et non jugeant pour faire le point sur votre situation, repérer les ressources et les possibilités existantes, et construire vos propres choix.",
    propositions: ['Un temps d\'écoute confidentiel pour poser votre situation', 'Une information compréhensible sur les dispositifs et ressources accessibles', 'Un appui pour identifier vos capacités et vos possibilités d\'action', 'Une orientation vers l\'interlocuteur adapté lorsque c\'est nécessaire'],
    cta: { label: "J'ai besoin d'un appui", path: '/contact' }
  },
  {
    id: 'professionnel', label: 'Un professionnel', icon: Briefcase, color: 'teal',
    accroche: 'Je cherche des ressources, des outils ou des coopérations.',
    texte: "Conseiller, accompagnant, travailleur social, formateur, professionnel RH ou de santé au travail : vous rencontrez des situations complexes et cherchez des appuis concrets. ALT&ACT met en partage ses connaissances, ses outils et son réseau pour renforcer vos pratiques et construire des coopérations.",
    propositions: ['Des ressources et outils pratiques à partager', 'Des échanges de pratiques entre professionnels', 'Des coopérations autour de situations concrètes', 'La participation à des expérimentations de terrain'],
    cta: { label: 'Échanger avec nous', path: '/contact' }
  },
  {
    id: 'entreprise', label: 'Une entreprise', icon: Building2, color: 'blue',
    accroche: 'Je souhaite agir sur les transitions professionnelles, les compétences ou la prévention des ruptures.',
    texte: "Évolution des métiers, absentéisme, maintien dans l'emploi, mobilité, qualité de vie au travail : les transitions se préparent. ALT&ACT agit avec les entreprises pour repérer tôt les situations à risque, reconnaître les compétences et construire des réponses adaptées, utiles aux personnes comme à l'organisation.",
    propositions: ['Un appui à la prévention des ruptures professionnelles', 'Des démarches de reconnaissance et de développement des compétences', 'Des coopérations avec les acteurs de l\'emploi et de la formation du territoire', 'Une approche responsable et conforme à vos engagements RSE'],
    cta: { label: 'Construire une coopération', path: '/conseils-accompagnement' }
  },
  {
    id: 'association', label: 'Une association', icon: HeartHandshake, color: 'rose',
    accroche: 'Je souhaite construire ou expérimenter une action commune.',
    texte: "Vous accompagnez des personnes, animez un territoire ou portez une cause proche de la nôtre. ALT&ACT privilégie la coopération à la juxtaposition : relier nos compétences, croiser nos publics et expérimenter ensemble des réponses nouvelles.",
    propositions: ['Des actions co-construites plutôt que des dispositifs concurrents', 'Le partage de ressources, de connaissances et de réseaux', 'Des expérimentations communes et leur évaluation', 'La mise en relation avec d\'autres acteurs du territoire'],
    cta: { label: 'Proposer une action commune', path: '/devenir-membre' }
  },
  {
    id: 'institution', label: 'Une institution / collectivité', icon: Landmark, color: 'indigo',
    accroche: "Je recherche un partenaire d'innovation sociale et territoriale.",
    texte: "Collectivité, service public de l'emploi, organisme de protection sociale, acteur institutionnel : ALT&ACT se positionne comme un tiers de confiance et un laboratoire d'innovation sociale, capable d'expérimenter des réponses nouvelles, de les évaluer et d'en partager les enseignements.",
    propositions: ['Un partenaire d\'expérimentation et d\'évaluation sur le territoire', 'Une approche fondée sur l\'écoute, la coopération et la mesure des effets réels', 'Une mise en lien entre acteurs qui travaillent trop souvent séparément', 'Une contribution aux politiques d\'emploi, de compétences et de prévention'],
    cta: { label: 'Engager un partenariat', path: '/contact' }
  },
  {
    id: 'recherche', label: "Un chercheur / établissement d'enseignement", icon: GraduationCap, color: 'green',
    accroche: "Je souhaite participer à une démarche de recherche, d'expérimentation ou d'évaluation.",
    texte: "Universités, laboratoires, écoles : ALT&ACT ouvre ses expérimentations à la recherche. Observer, évaluer, apprendre et réajuster font partie de notre manière d'agir, et la connaissance produite a vocation à devenir une ressource partagée.",
    propositions: ['Des terrains d\'observation et d\'expérimentation', 'Des démarches d\'évaluation co-construites', 'La valorisation et le partage des résultats', 'Des collaborations pédagogiques (projets étudiants, jurys, stages)'],
    cta: { label: 'Proposer une collaboration', path: '/contact' }
  }
];

export const colorMap = {
  amber: { bg: 'bg-amber-50', border: 'border-amber-100', iconBg: 'bg-amber-500', text: 'text-amber-600', light: 'bg-amber-100' },
  teal: { bg: 'bg-teal-50', border: 'border-teal-100', iconBg: 'bg-teal-500', text: 'text-teal-600', light: 'bg-teal-100' },
  blue: { bg: 'bg-blue-50', border: 'border-blue-100', iconBg: 'bg-blue-500', text: 'text-blue-600', light: 'bg-blue-100' },
  purple: { bg: 'bg-purple-50', border: 'border-purple-100', iconBg: 'bg-purple-500', text: 'text-purple-600', light: 'bg-purple-100' },
  rose: { bg: 'bg-rose-50', border: 'border-rose-100', iconBg: 'bg-rose-500', text: 'text-rose-600', light: 'bg-rose-100' },
  indigo: { bg: 'bg-indigo-50', border: 'border-indigo-100', iconBg: 'bg-indigo-500', text: 'text-indigo-600', light: 'bg-indigo-100' },
  green: { bg: 'bg-green-50', border: 'border-green-100', iconBg: 'bg-green-500', text: 'text-green-600', light: 'bg-green-100' }
};
