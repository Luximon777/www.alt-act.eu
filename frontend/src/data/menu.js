import { Quote, UserCircle, Heart, Building, User, Mail, UserPlus, Target, Eye, Zap, Users, Cpu, ShieldCheck, ShieldAlert, HandHeart, Handshake, FlaskConical, Compass } from 'lucide-react';

export const menu = [
  {
    id: 'qui-sommes-nous', label: 'Qui sommes-nous ?', header: 'Découvrir ALT&ACT', headerClass: 'from-[#0b2a55] to-[#1a4280]', hover: 'hover:bg-[#0b2a55]/10 hover:text-[#0b2a55]',
    items: [
      { path: '/notre-mission', label: "Notre raison d'être", sub: 'Révéler les capacités', icon: Target, color: 'amber', testid: 'notre-mission-link' },
      { path: '/vision-methode', label: 'Nos repères & notre méthode', sub: 'Vision et manière d\'agir', icon: Compass, color: 'navy', testid: 'vision-methode-link' },
      { path: '/notre-ambition', label: 'Notre ambition', sub: 'Le travail comme service', icon: Eye, color: 'blue', testid: 'notre-ambition-link' },
      { path: '/mot-president', label: 'Le mot du fondateur', sub: 'Vision et engagement', icon: Quote, color: 'orange', testid: 'mot-president-link' },
      { path: '/membres', label: 'Notre équipe', sub: 'Membres et comités', icon: UserCircle, color: 'teal', testid: 'membres-link' },
      { path: '/gouvernance-consultative', label: 'Gouvernance', sub: 'Notre mode de décision', icon: Users, color: 'indigo', testid: 'gouvernance-link' },
      { path: '/charte-ethique', label: 'Éthique', sub: '10 principes fondateurs', icon: Heart, color: 'rose', testid: 'charte-ethique-link' }
    ]
  },
  {
    id: 'agir-avec-vous', label: 'Agir avec vous', header: 'Je suis…', headerClass: 'from-amber-500 to-orange-500', hover: 'hover:bg-amber-50 hover:text-amber-700',
    items: [
      { path: '/agir-avec-vous', label: 'Personnes, professionnels, entreprises…', sub: 'Six entrées selon votre situation', icon: HandHeart, color: 'orange', testid: 'agir-avec-vous-link' },
      { path: '/espace-personnel', label: 'Espace Personnel', sub: 'Votre espace privé', icon: User, color: 'navy', testid: 'espace-personnel-link' },
      { path: '/conseils-accompagnement', label: 'Espace Employeurs', sub: 'Conseils et coopération', icon: Building, color: 'amber', testid: 'espace-employeurs-link' },
      { path: '/espace-ubuntoo', label: 'Espace Ubuntoo', sub: 'Communauté Ubuntu', icon: Users, color: 'teal', testid: 'espace-ubuntoo-link' }
    ]
  },
  {
    id: 'nos-actions', label: 'Nos actions', header: 'Ce que nous faisons', headerClass: 'from-rose-500 to-orange-500', hover: 'hover:bg-rose-50 hover:text-rose-600',
    items: [
      { path: '/notre-action', label: 'Appui aux parcours', sub: 'Accompagner les transformations', icon: Zap, color: 'green', testid: 'notre-action-link' },
      { path: '/prevenir-les-ruptures', label: 'Prévenir les ruptures', sub: 'Agir en amont, nos limites', icon: ShieldAlert, color: 'rose', testid: 'prevenir-ruptures-link' },
      { path: '/cooperations', label: 'Innovation sociale & expérimentations', sub: 'Notre manière d\'agir', icon: FlaskConical, color: 'indigo', testid: 'innovation-link' }
    ]
  },
  {
    id: 'nos-projets', label: 'Nos projets', header: "RE'ACTIF PRO — une innovation de l'écosystème ALT&ACT", headerClass: 'from-cyan-600 to-blue-600', hover: 'hover:bg-cyan-50 hover:text-cyan-700',
    items: [
      { path: '/reactif-pro/presentation', label: 'Présentation', sub: "Le projet RE'ACTIF PRO", icon: Cpu, color: 'cyan', testid: 'reactif-presentation-link' },
      { path: '/reactif-pro/mission', label: 'Missions', sub: 'Les missions du projet', icon: ShieldCheck, color: 'amber', testid: 'reactif-mission-link' },
      { path: '/reactif-pro/actions', label: 'Actions', sub: 'Les actions déployées', icon: Zap, color: 'green', testid: 'reactif-actions-link' },
      { path: '/reactif-pro/charte-ia', label: 'Charte éthique IA', sub: "IA conforme à l'AI Act", icon: ShieldCheck, color: 'rose', testid: 'reactif-charte-ia-link' }
    ]
  },
  {
    id: 'cooperer', label: 'Coopérer', header: 'Construire ensemble', headerClass: 'from-[#0b2a55] to-[#1a4280]', hover: 'hover:bg-[#0b2a55]/10 hover:text-[#0b2a55]', align: 'right',
    items: [
      { path: '/cooperations', label: 'Nos coopérations', sub: 'Partenaires, expérimentations, contributeurs', icon: Handshake, color: 'navy', testid: 'cooperations-link' },
      { path: '/devenir-membre', label: 'Contribuer / Devenir membre', sub: 'Rejoindre ALT&ACT', icon: UserPlus, color: 'green', testid: 'devenir-membre-link' },
      { path: '/contact', label: 'Nous contacter', sub: 'Nous écrire', icon: Mail, color: 'navy', testid: 'contact-link' }
    ]
  }
];

export const iconColors = {
  amber: ['bg-amber-100', 'text-amber-600', 'group-hover/item:bg-amber-500'],
  orange: ['bg-orange-100', 'text-orange-600', 'group-hover/item:bg-orange-500'],
  blue: ['bg-blue-100', 'text-blue-600', 'group-hover/item:bg-blue-500'],
  teal: ['bg-teal-100', 'text-teal-600', 'group-hover/item:bg-teal-500'],
  indigo: ['bg-indigo-100', 'text-indigo-600', 'group-hover/item:bg-indigo-500'],
  rose: ['bg-rose-100', 'text-rose-600', 'group-hover/item:bg-rose-500'],
  green: ['bg-green-100', 'text-green-600', 'group-hover/item:bg-green-500'],
  cyan: ['bg-cyan-100', 'text-cyan-600', 'group-hover/item:bg-cyan-500'],
  navy: ['bg-[#0b2a55]/10', 'text-[#0b2a55]', 'group-hover/item:bg-[#0b2a55]']
};
