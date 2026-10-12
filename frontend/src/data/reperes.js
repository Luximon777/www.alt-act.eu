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

export const maniereAgir = [
  { etape: 'Observer', texte: "Comprendre la réalité avant d'intervenir." },
  { etape: 'Écouter', texte: "Prendre en compte l'expérience des personnes concernées." },
  { etape: 'Consulter', texte: 'Croiser les perspectives.' },
  { etape: 'Agir', texte: 'Expérimenter une réponse.' },
  { etape: 'Évaluer', texte: 'Observer les effets réels.' },
  { etape: 'Apprendre', texte: 'Capitaliser les enseignements.' },
  { etape: 'Réajuster', texte: "Modifier l'action lorsque l'expérience l'exige." }
];

export const cooperations = [
  {
    id: 'recherche', categorie: 'Universités, laboratoires & écoles', color: 'green',
    construit: "Des terrains d'observation et d'expérimentation ouverts à la recherche, des projets étudiants et des démarches d'évaluation co-construites.",
    objectif: 'Produire une connaissance utile, partagée et vérifiée sur les transitions professionnelles et les capacités des personnes.',
    apprentissages: "Croiser le regard des chercheurs et l'expérience des personnes concernées rend les résultats plus justes et plus utilisables sur le terrain."
  },
  {
    id: 'emploi', categorie: "France Travail & service public de l'emploi", color: 'blue',
    construit: "Des espaces d'écoute et d'orientation complémentaires, une meilleure lisibilité des dispositifs existants et des relais entre acteurs.",
    objectif: "Éviter que les personnes ne circulent de guichet en guichet et rendre visibles des possibilités souvent méconnues.",
    apprentissages: "Une information n'est réellement accessible que lorsqu'elle est comprise : l'accompagnement à la compréhension fait la différence."
  },
  {
    id: 'entreprises', categorie: 'Entreprises', color: 'amber',
    construit: 'Des démarches de prévention des ruptures (absentéisme, maintien dans l\'emploi, évolutions de métiers) et de reconnaissance des compétences.',
    objectif: "Agir en amont, avec les personnes et l'organisation, pour que les transitions restent des étapes et non des ruptures.",
    apprentissages: "Les signaux faibles sont repérables tôt lorsqu'un cadre de confiance existe entre la personne, l'entreprise et un tiers neutre."
  },
  {
    id: 'associations', categorie: 'Associations & acteurs de l\'accompagnement', color: 'rose',
    construit: 'Des actions communes plutôt que des dispositifs concurrents : partage de ressources, de connaissances et de réseaux, expérimentations croisées.',
    objectif: 'Relier des compétences et des publics qui se croisent rarement, au bénéfice des personnes accompagnées.',
    apprentissages: 'La coopération demande du temps de connaissance mutuelle ; elle produit ensuite des réponses plus complètes que chaque acteur isolé.'
  },
  {
    id: 'collectivites', categorie: 'Collectivités & institutions', color: 'indigo',
    construit: "Des partenariats d'innovation sociale et territoriale : expérimentations locales, évaluation des effets, partage des enseignements.",
    objectif: "Contribuer aux politiques d'emploi, de compétences et de prévention à partir de réalités observées sur le territoire.",
    apprentissages: "Une expérimentation évaluée honnêtement — y compris dans ses limites — est plus utile à la décision publique qu'une réussite proclamée."
  }
];

export const temoignages = [
  { prenom: 'Nadia', situation: 'Ancienne salariée en reconversion, aujourd\'hui personne ressource', color: 'amber',
    texte: "On ne m'a pas dit quoi faire. On m'a aidée à comprendre ce que je savais déjà faire, et ce qui était possible. Aujourd'hui, je partage mon expérience avec d'autres personnes qui traversent la même période." },
  { prenom: 'Karim', situation: 'Demandeur d\'emploi devenu participant aux ateliers', color: 'teal',
    texte: "J'arrivais avec une liste de freins. Je suis reparti avec une liste de possibilités et quelqu'un à appeler pour chacune. Maintenant, c'est moi qui accueille les nouveaux." },
  { prenom: 'Sophie', situation: 'Responsable RH dans une PME partenaire', color: 'blue',
    texte: "Nous avons appris à repérer plus tôt les situations qui se tendent. Ce que nous avons construit avec ALT&ACT, nous le partageons aujourd'hui avec d'autres entreprises du territoire." },
  { prenom: 'Mathieu', situation: 'Conseiller en insertion, contributeur aux retours d\'expérience', color: 'purple',
    texte: "Évaluer honnêtement ce qui marche et ce qui ne marche pas, puis réajuster : c'est ce qui m'a donné envie de contribuer. Mes retours de terrain servent maintenant à d'autres professionnels." }
];
