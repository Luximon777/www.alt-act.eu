import React, { useEffect } from 'react';
import { ArrowLeft, Heart, Eye, Shield, Users, Target, Database, Scale, Building, Handshake, Rocket, CheckCircle } from 'lucide-react';
import { Button } from './ui/button';
import { useNavigate } from 'react-router-dom';
import { Badge } from './ui/badge';

const CharteEthique = () => {
  const navigate = useNavigate();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleBackHome = () => {
    navigate('/');
  };

  const sections = [
    {
      number: "1",
      title: "Voir le potentiel avant le manque",
      icon: Eye,
      color: "amber",
      intro: "Nous refusons les approches qui reduisent une personne a ses freins, a ses ruptures de parcours ou a ses vulnerabilites.",
      responsibility: "Notre responsabilite est de :",
      points: [
        "detecter les ressources souvent invisibles",
        "rendre lisibles les competences reelles",
        "transformer l'experience en valeur professionnelle",
        "restaurer la capacite de projection"
      ],
      conclusion: "Nous ne reparons pas des trajectoires. Nous revelons des dynamiques d'avenir."
    },
    {
      number: "2",
      title: "Faire de l'identite professionnelle un facteur de stabilite sociale",
      icon: Shield,
      color: "teal",
      intro: "Une societe se fragilise lorsque les individus ne trouvent plus leur place.",
      responsibility: "C'est pourquoi ALT&ACT donne la priorite au travail de structuration de l'identite professionnelle, consideree comme :",
      points: [
        "un repere dans les periodes de transition",
        "un levier de confiance",
        "un facteur de securisation des parcours",
        "un socle d'engagement durable"
      ],
      conclusion: "Avant de chercher a inserer, nous cherchons a aligner."
    },
    {
      number: "3",
      title: "Assumer une innovation responsable",
      icon: Rocket,
      color: "purple",
      intro: "L'innovation n'a de valeur que si elle protege l'humain.",
      responsibility: "A travers RE'ACTIF PRO, nous developpons des outils destines a :",
      points: [
        "eclairer sans enfermer",
        "orienter sans predeterminer",
        "objectiver sans deshumaniser"
      ],
      conclusion: "Nous affirmons une vigilance constante : aucune technologie ne doit produire de nouvelles formes d'exclusion. L'intelligence des systemes doit rester au service de la liberte des personnes."
    },
    {
      number: "4",
      title: "Agir sur les causes plutot que sur les symptomes",
      icon: Target,
      color: "blue",
      intro: "Les reponses superficielles creent des insertions fragiles.",
      responsibility: "ALT&ACT privilegie une lecture profonde des situations afin de :",
      points: [
        "comprendre les mecanismes de rupture",
        "prevenir les desengagements professionnels",
        "securiser les transitions",
        "favoriser des trajectoires durables"
      ],
      conclusion: "Notre ambition n'est pas de generer des sorties rapides, mais des equilibres solides."
    },
    {
      number: "5",
      title: "Porter une responsabilite societale mesurable",
      icon: CheckCircle,
      color: "green",
      intro: "L'utilite sociale doit pouvoir se demontrer.",
      responsibility: "Nous nous engageons a :",
      points: [
        "evaluer l'impact reel de nos actions",
        "rechercher des ameliorations continues",
        "partager nos enseignements",
        "contribuer aux reflexions sur l'evolution du travail"
      ],
      conclusion: "Notre credibilite repose sur les transformations observables que vivent les personnes accompagnees."
    },
    {
      number: "6",
      title: "Garantir une ethique irreprochable de la donnee",
      icon: Database,
      color: "red",
      intro: "Les informations confiees traduisent des parcours de vie. Elles appellent une exigence absolue.",
      responsibility: "ALT&ACT s'engage a :",
      points: [
        "proteger rigoureusement les donnees personnelles",
        "assurer une transparence complete sur leur usage",
        "exclure toute exploitation contraire a l'interet des individus",
        "appliquer les standards les plus eleves en matiere de securite"
      ],
      conclusion: "La confiance n'est pas un principe declaratif. Elle se construit par des pratiques irreprochables."
    },
    {
      number: "7",
      title: "Cultiver une independance qui protege l'interet des publics",
      icon: Scale,
      color: "indigo",
      intro: "Notre liberte d'action est une condition de notre integrite.",
      responsibility: "Nous veillons a :",
      points: [
        "maintenir une autonomie dans nos orientations",
        "refuser les logiques contraires a notre mission",
        "prevenir tout conflit d'interets",
        "agir avec clarte aupres de nos partenaires"
      ],
      conclusion: "Aucune performance ne justifie un renoncement ethique."
    },
    {
      number: "8",
      title: "Installer une gouvernance qui anticipe plutot qu'elle ne reagit",
      icon: Building,
      color: "slate",
      intro: "Dans un environnement professionnel instable, la responsabilite des organisations est d'eclairer l'avenir.",
      responsibility: "ALT&ACT structure sa gouvernance pour :",
      points: [
        "encourager la reflexion strategique",
        "integrer la vigilance ethique dans les decisions",
        "croiser les expertises",
        "inscrire ses actions dans le temps long"
      ],
      conclusion: "Le comite de mission constitue le garant actif de cette exigence."
    },
    {
      number: "9",
      title: "Construire des cooperations qui elevent les pratiques",
      icon: Handshake,
      color: "orange",
      intro: "Nous choisissons des partenaires non seulement pour leurs competences, mais pour leur conception de la responsabilite sociale.",
      responsibility: "Nos collaborations reposent sur :",
      points: [
        "la reciprocite",
        "la coherence des engagements",
        "la recherche d'impact",
        "le respect des personnes"
      ],
      conclusion: "Cooperer n'est pas juxtaposer des actions - c'est renforcer une ambition commune."
    },
    {
      number: "10",
      title: "Preparer le futur du travail avec lucidite",
      icon: Rocket,
      color: "cyan",
      intro: "Les mutations professionnelles redessinent deja les equilibres sociaux.",
      responsibility: "ALT&ACT fait le choix de :",
      points: [
        "developper des approches anticipatrices",
        "contribuer a la comprehension des competences emergentes",
        "soutenir l'adaptabilite des individus",
        "favoriser une economie plus inclusive"
      ],
      conclusion: "Preparer l'avenir n'est pas une option. C'est une responsabilite."
    }
  ];

  const colorClasses = {
    amber: "bg-amber-100 text-amber-700 border-amber-200",
    teal: "bg-teal-100 text-teal-700 border-teal-200",
    purple: "bg-purple-100 text-purple-700 border-purple-200",
    blue: "bg-blue-100 text-blue-700 border-blue-200",
    green: "bg-green-100 text-green-700 border-green-200",
    red: "bg-red-100 text-red-700 border-red-200",
    indigo: "bg-indigo-100 text-indigo-700 border-indigo-200",
    slate: "bg-slate-100 text-slate-700 border-slate-200",
    orange: "bg-orange-100 text-orange-700 border-orange-200",
    cyan: "bg-cyan-100 text-cyan-700 border-cyan-200"
  };

  const iconBgClasses = {
    amber: "bg-amber-500",
    teal: "bg-teal-500",
    purple: "bg-purple-500",
    blue: "bg-blue-500",
    green: "bg-green-500",
    red: "bg-red-500",
    indigo: "bg-indigo-500",
    slate: "bg-slate-500",
    orange: "bg-orange-500",
    cyan: "bg-cyan-500"
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-gradient-to-br from-[#0b2a55] to-[#1a4280] text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Button 
            variant="ghost" 
            onClick={handleBackHome} 
            className="text-white hover:bg-white/20 mb-6"
          >
            <ArrowLeft className="w-4 h-4 mr-2" /> Retour a l'accueil
          </Button>
          <Badge className="mb-4 bg-white/20 text-white border-white/30">Engagement ALT&ACT</Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Charte Ethique</h1>
          <p className="text-xl text-blue-100">Pour une societe ou chacun peut se sentir utile</p>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        {/* Manifeste */}
        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 mb-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-full bg-[#0b2a55] flex items-center justify-center">
              <Heart className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900">Manifeste</h2>
          </div>
          
          <div className="space-y-4 text-gray-700 leading-relaxed">
            <p>
              Nous considerons que l'insertion professionnelle ne se limite pas a l'acces a un emploi. Elle engage la place de la personne dans la societe, sa capacite a contribuer, a evoluer et a construire un parcours porteur de sens.
            </p>
            <p className="text-lg font-medium text-[#0b2a55]">
              ALT&ACT est nee d'une conviction forte : l'utilite sociale d'une personne ne se decrete pas - elle se revele, se structure et se securise.
            </p>
            <p>
              Notre action consiste a creer les conditions permettant a chacun de retrouver un pouvoir d'agir durable dans un monde du travail en mutation.
            </p>
            <p className="italic border-l-4 border-orange-500 pl-4 bg-orange-50 py-3 rounded-r-lg">
              Cette charte exprime un positionnement volontairement exigeant. Elle depasse une logique reglementaire pour affirmer une responsabilite societale.
            </p>
          </div>
        </div>

        {/* Sections */}
        <div className="space-y-8">
          {sections.map((section, idx) => {
            const Icon = section.icon;
            return (
              <div key={idx} className="bg-white rounded-2xl shadow-lg p-8 md:p-10">
                <div className="flex items-start gap-4 mb-6">
                  <div className={"w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0 " + iconBgClasses[section.color]}>
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <span className={"text-sm font-semibold px-3 py-1 rounded-full " + colorClasses[section.color]}>
                      Principe {section.number}
                    </span>
                    <h3 className="text-xl font-bold text-gray-900 mt-2">{section.title}</h3>
                  </div>
                </div>
                
                <div className="space-y-4 text-gray-700">
                  <p className="leading-relaxed">{section.intro}</p>
                  
                  <p className="font-medium text-[#0b2a55]">{section.responsibility}</p>
                  
                  <ul className="space-y-2 ml-4">
                    {section.points.map((point, pidx) => (
                      <li key={pidx} className="flex items-start gap-2">
                        <span className={"w-2 h-2 rounded-full mt-2 flex-shrink-0 " + iconBgClasses[section.color]}></span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <p className="font-medium italic text-gray-800 border-l-4 border-[#0b2a55] pl-4 bg-gray-50 py-3 rounded-r-lg">
                    {section.conclusion}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Engagement fondamental */}
        <div className="bg-gradient-to-r from-[#0b2a55] to-[#1a4280] rounded-2xl shadow-lg p-8 md:p-12 mt-12 text-white">
          <h2 className="text-2xl font-bold mb-6">Notre engagement fondamental</h2>
          <p className="mb-6 text-blue-100">
            Nous croyons qu'une societe plus stable se construit lorsque chacun peut :
          </p>
          <div className="grid md:grid-cols-2 gap-4 mb-6">
            {[
              "identifier sa valeur",
              "exercer ses capacites",
              "contribuer utilement",
              "envisager l'avenir avec confiance"
            ].map((item, idx) => (
              <div key={idx} className="flex items-center gap-3 bg-white/10 rounded-lg p-4">
                <CheckCircle className="w-5 h-5 text-orange-400" />
                <span>{item}</span>
              </div>
            ))}
          </div>
          <p className="text-lg font-medium">
            ALT&ACT agit pour que l'insertion professionnelle devienne un espace de reconnaissance, de structuration et de projection - et non une simple reponse a l'urgence.
          </p>
        </div>

        {/* Portee de la charte */}
        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 mt-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Portee de la charte</h2>
          <p className="text-gray-700 mb-4">Cette charte :</p>
          <ul className="space-y-3 text-gray-700 mb-6">
            {[
              "oriente nos decisions",
              "structure nos pratiques",
              "engage nos dirigeants",
              "eclaire nos partenaires",
              "protege les publics"
            ].map((item, idx) => (
              <li key={idx} className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-green-500" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <p className="italic text-gray-600 border-l-4 border-orange-500 pl-4 bg-orange-50 py-3 rounded-r-lg">
            Elle constitue une reference vivante, appelee a evoluer pour rester a la hauteur des transformations du monde du travail.
          </p>
        </div>

        {/* Footer */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <Button
            onClick={handleBackHome}
            variant="outline"
            className="border-[#0b2a55] text-[#0b2a55] hover:bg-[#0b2a55] hover:text-white"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Retour a l'accueil
          </Button>
          <span className="text-gray-500 text-sm">
            Association ALT&ACT - Alterite & Action
          </span>
        </div>
      </main>
    </div>
  );
};

export default CharteEthique;
