import React, { useState, useEffect, useMemo } from 'react';
import { Zap, Users, ArrowRight, Building, Globe, Heart, Compass, Target, Scale, Sparkles, HandHeart, ChevronRight } from 'lucide-react';
import { Button } from './ui/button';
import { useNavigate } from 'react-router-dom';
import Navigation from './Navigation';
import Footer from './Footer';

const NotreAction = () => {
  const navigate = useNavigate();
  const [activeSection, setActiveSection] = useState('engagement');

  const memoItems = useMemo(() => [
    { id: 'engagement', title: 'Notre engagement', summary: 'Accompagner les transformations', icon: Zap, color: 'bg-green-500' },
    { id: 'domaines', title: 'Nos interventions', summary: '5 domaines d\'action concrets', icon: Compass, color: 'bg-amber-500' },
    { id: 'citation', title: 'Notre conviction', summary: 'Accéder et participer', icon: Sparkles, color: 'bg-teal-500' },
    { id: 'service', title: 'Acte de service', summary: 'Le travail au service de tous', icon: HandHeart, color: 'bg-rose-500' },
    { id: 'europe', title: 'Orientations européennes', summary: 'Stratégie emploi et inclusion', icon: Globe, color: 'bg-blue-500' },
    { id: 'publics', title: 'Nos publics', summary: 'Qui nous accompagnons', icon: Users, color: 'bg-purple-500' },
  ], []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = memoItems.map(item => document.getElementById(item.id));
      const scrollPosition = window.scrollY + 150;
      
      for (let i = sections.length - 1; i >= 0; i--) {
        if (sections[i] && sections[i].offsetTop <= scrollPosition) {
          setActiveSection(memoItems[i].id);
          break;
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [memoItems]);

  const actionsData = [
    {
      icon: Compass,
      title: "Accompagner les trajectoires professionnelles",
      description: "Nous agissons pour accompagner les trajectoires professionnelles dans un contexte marqué par les transitions et les incertitudes, en aidant chacun à développer ses ressources, à renforcer sa capacité d'adaptation et à donner une direction à son parcours.",
      color: "amber"
    },
    {
      icon: Target,
      title: "Développer les compétences",
      description: "Nous soutenons le développement des compétences comme un processus continu, indissociable de la croissance personnelle et relationnelle.",
      color: "blue"
    },
    {
      icon: Heart,
      title: "S'adapter à la diversité",
      description: "Parce que les réalités sont multiples, nous adaptons nos approches à la diversité des parcours, dans une attention constante aux singularités culturelles, sociales et aux situations de handicap, en veillant à reconnaître les talents avant de considérer les limites.",
      color: "rose"
    },
    {
      icon: Building,
      title: "Transformer les organisations",
      description: "Nous accompagnons également les organisations désireuses de faire évoluer leurs pratiques vers des environnements plus responsables, inclusifs et respectueux des personnes, convaincus que la qualité des relations de travail constitue l'un des leviers majeurs d'une performance durable.",
      color: "teal"
    },
    {
      icon: Scale,
      title: "Favoriser l'équité",
      description: "Enfin, nous agissons en faveur de l'équité en prévenant les discriminations et en favorisant une participation pleine et entière à la vie professionnelle et sociale.",
      color: "purple"
    }
  ];

  const colorClasses = {
    amber: { bg: "bg-amber-100", icon: "text-amber-600", border: "border-amber-500" },
    blue: { bg: "bg-blue-100", icon: "text-blue-600", border: "border-blue-500" },
    rose: { bg: "bg-rose-100", icon: "text-rose-600", border: "border-rose-500" },
    teal: { bg: "bg-teal-100", icon: "text-teal-600", border: "border-teal-500" },
    purple: { bg: "bg-purple-100", icon: "text-purple-600", border: "border-purple-500" }
  };

  return (
    <div className="min-h-screen bg-gray-50" data-testid="notre-action-page">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-green-900 via-teal-800 to-[#0b2a55] overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-green-400 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-teal-400 rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-500/20 rounded-full mb-6">
            <Zap className="w-4 h-4 text-green-300" />
            <span className="text-green-200 text-sm font-semibold">NOTRE ACTION</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8 leading-tight">
            Accompagner les transformations
          </h1>
          
          <p className="text-xl md:text-2xl text-green-100 max-w-4xl mx-auto leading-relaxed">
            En plaçant l'éthique, la responsabilité et la contribution au cœur des pratiques.
          </p>
        </div>
      </section>

      {/* Main Content with Memo Sidebar */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-8">
            
            {/* Sidebar Mémo - à gauche */}
            <aside className="hidden lg:block lg:w-80 flex-shrink-0">
              <div className="sticky top-24">
                <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
                  {/* Header du mémo */}
                  <div className="bg-gradient-to-r from-green-600 to-teal-600 px-5 py-4">
                    <h3 className="text-white font-bold text-lg flex items-center gap-2">
                      <Zap className="w-5 h-5" />
                      En résumé
                    </h3>
                    <p className="text-green-100 text-sm mt-1">Les points clés de notre action</p>
                  </div>
                  
                  {/* Liste des sections */}
                  <div className="p-3">
                    {memoItems.map((item) => {
                      const Icon = item.icon;
                      const isActive = activeSection === item.id;
                      return (
                        <button
                          key={item.id}
                          onClick={() => scrollToSection(item.id)}
                          className={`w-full text-left p-3 rounded-xl mb-2 transition-all duration-300 group ${
                            isActive 
                              ? 'bg-green-50 border-l-4 border-green-500' 
                              : 'hover:bg-gray-50 border-l-4 border-transparent'
                          }`}
                        >
                          <div className="flex items-start gap-3">
                            <div className={`w-8 h-8 rounded-lg ${item.color} flex items-center justify-center flex-shrink-0 ${
                              isActive ? 'scale-110' : 'group-hover:scale-105'
                            } transition-transform duration-200`}>
                              <Icon className="w-4 h-4 text-white" />
                            </div>
                            <div className="flex-1 min-w-0">
                              <p className={`font-semibold text-sm ${isActive ? 'text-green-700' : 'text-gray-800'}`}>
                                {item.title}
                              </p>
                              <p className="text-xs text-gray-500 mt-0.5 line-clamp-2">
                                {item.summary}
                              </p>
                            </div>
                            <ChevronRight className={`w-4 h-4 text-gray-400 flex-shrink-0 transition-transform duration-200 ${
                              isActive ? 'translate-x-1 text-green-500' : ''
                            }`} />
                          </div>
                        </button>
                      );
                    })}
                  </div>

                  {/* Citation */}
                  <div className="px-5 pb-5">
                    <div className="bg-gradient-to-br from-green-50 to-teal-50 rounded-xl p-4 border border-green-100">
                      <p className="text-sm text-gray-700 italic leading-relaxed">
                        "Accompagner les transformations en plaçant l'éthique au cœur des pratiques."
                      </p>
                      <p className="text-xs text-green-700 mt-2 font-medium">— Notre action</p>
                    </div>
                  </div>
                </div>
              </div>
            </aside>

            {/* Main Content */}
            <main className="flex-1 min-w-0 space-y-12">
          
              {/* Introduction */}
              <div id="engagement" className="bg-gradient-to-r from-green-50 to-teal-50 rounded-3xl p-8 md:p-12 border-l-4 border-green-500">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                  Notre engagement concret
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Notre action s'inscrit dans cette ambition : <strong className="text-green-700">accompagner les transformations humaines et professionnelles</strong> en plaçant l'éthique, la responsabilité et la contribution au cœur des pratiques.
                </p>
              </div>

              {/* Actions détaillées */}
              <div id="domaines">
                <h3 className="text-2xl font-bold text-gray-900 mb-10 text-center">Nos domaines d'intervention</h3>
                
                <div className="space-y-6">
                  {actionsData.map((action, index) => {
                    const Icon = action.icon;
                    const colors = colorClasses[action.color];
                    return (
                      <div 
                        key={index}
                        className={`bg-white rounded-2xl p-6 md:p-8 shadow-lg border-l-4 ${colors.border} hover:shadow-xl transition-shadow`}
                      >
                        <div className="flex flex-col md:flex-row gap-6">
                          <div className={`w-16 h-16 ${colors.bg} rounded-2xl flex items-center justify-center flex-shrink-0`}>
                            <Icon className={`w-8 h-8 ${colors.icon}`} />
                          </div>
                          <div>
                            <h4 className="text-xl font-bold text-gray-900 mb-3">{action.title}</h4>
                            <p className="text-gray-700 leading-relaxed">{action.description}</p>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Citation centrale */}
              <div id="citation" className="bg-gradient-to-r from-green-600 to-teal-600 rounded-3xl p-8 md:p-12 text-center text-white">
                <Sparkles className="w-12 h-12 mx-auto mb-6 text-amber-300" />
                <blockquote className="text-xl md:text-2xl font-medium leading-relaxed mb-6">
                  "Car une société progresse lorsque chacun peut non seulement accéder aux opportunités, mais aussi prendre part à ce qu'elles rendent possible."
                </blockquote>
              </div>

              {/* Le travail comme service */}
              <div id="service" className="grid md:grid-cols-2 gap-8 items-center">
                <div className="bg-gradient-to-br from-[#0b2a55] to-[#1a4280] rounded-3xl p-8 text-white">
                  <HandHeart className="w-12 h-12 text-amber-400 mb-6" />
                  <h3 className="text-2xl font-bold mb-4">Le travail comme acte de service</h3>
                  <p className="text-blue-100 leading-relaxed mb-4">
                    Notre action est guidée par une conviction profonde : le travail est un <strong className="text-white">acte de service à la communauté</strong>.
                  </p>
                  <p className="text-blue-100 leading-relaxed">
                    Chaque intervention, chaque accompagnement vise à permettre aux personnes de contribuer pleinement à la société, en reconnaissant leur dignité et leur potentiel.
                  </p>
                </div>
                <div>
                  <div className="space-y-4">
                    <div className="bg-amber-50 rounded-xl p-5">
                      <h4 className="font-bold text-gray-900 mb-2">Éthique</h4>
                      <p className="text-gray-600 text-sm">Des pratiques guidées par des principes forts et transparents</p>
                    </div>
                    <div className="bg-green-50 rounded-xl p-5">
                      <h4 className="font-bold text-gray-900 mb-2">Responsabilité</h4>
                      <p className="text-gray-600 text-sm">Un engagement envers les personnes et les organisations accompagnées</p>
                    </div>
                    <div className="bg-blue-50 rounded-xl p-5">
                      <h4 className="font-bold text-gray-900 mb-2">Contribution</h4>
                      <p className="text-gray-600 text-sm">Favoriser la participation active à la vie économique et sociale</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Alignement européen */}
              <div id="europe" className="bg-blue-50 rounded-3xl p-8 md:p-12 border border-blue-200">
                <div className="flex items-center gap-3 mb-6">
                  <Globe className="w-8 h-8 text-blue-600" />
                  <h3 className="text-2xl font-bold text-gray-900">En phase avec les orientations européennes</h3>
                </div>
                <p className="text-gray-700 text-lg leading-relaxed mb-6">
                  Notre action s'inscrit dans le cadre des directives et visions européennes en matière d'emploi, d'inclusion et de développement durable :
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-white rounded-xl p-4 border border-blue-100">
                    <p className="font-semibold text-gray-900 mb-1">Stratégie européenne pour l'emploi</p>
                    <p className="text-sm text-gray-600">Accompagnement vers des emplois durables et de qualité</p>
                  </div>
                  <div className="bg-white rounded-xl p-4 border border-blue-100">
                    <p className="font-semibold text-gray-900 mb-1">Économie sociale et solidaire</p>
                    <p className="text-sm text-gray-600">Modèles économiques centrés sur l'humain</p>
                  </div>
                  <div className="bg-white rounded-xl p-4 border border-blue-100">
                    <p className="font-semibold text-gray-900 mb-1">Transition juste</p>
                    <p className="text-sm text-gray-600">Accompagnement des mutations sans laisser personne de côté</p>
                  </div>
                  <div className="bg-white rounded-xl p-4 border border-blue-100">
                    <p className="font-semibold text-gray-900 mb-1">Inclusion des publics vulnérables</p>
                    <p className="text-sm text-gray-600">Attention particulière aux personnes éloignées de l'emploi</p>
                  </div>
                </div>
              </div>

              {/* Publics accompagnés */}
              <div id="publics">
                <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Les publics que nous accompagnons</h3>
                <div className="grid md:grid-cols-4 gap-4">
                  <div className="bg-white rounded-2xl p-6 shadow-md border border-gray-100 text-center hover:shadow-lg transition-shadow">
                    <Users className="w-10 h-10 text-amber-600 mx-auto mb-3" />
                    <p className="font-semibold text-gray-900">Chercheurs d'emploi</p>
                  </div>
                  <div className="bg-white rounded-2xl p-6 shadow-md border border-gray-100 text-center hover:shadow-lg transition-shadow">
                    <Compass className="w-10 h-10 text-blue-600 mx-auto mb-3" />
                    <p className="font-semibold text-gray-900">Personnes en transition</p>
                  </div>
                  <div className="bg-white rounded-2xl p-6 shadow-md border border-gray-100 text-center hover:shadow-lg transition-shadow">
                    <Building className="w-10 h-10 text-teal-600 mx-auto mb-3" />
                    <p className="font-semibold text-gray-900">Organisations</p>
                  </div>
                  <div className="bg-white rounded-2xl p-6 shadow-md border border-gray-100 text-center hover:shadow-lg transition-shadow">
                    <Heart className="w-10 h-10 text-rose-600 mx-auto mb-3" />
                    <p className="font-semibold text-gray-900">Publics vulnérables</p>
                  </div>
                </div>
              </div>

              {/* CTA */}
              <div className="text-center pt-8">
                <div className="inline-flex flex-col sm:flex-row gap-4">
                  <Button
                    onClick={() => navigate('/conseils-accompagnement')}
                    className="bg-teal-600 hover:bg-teal-700 text-white px-8 py-6 text-lg rounded-full"
                  >
                    Espace Employeurs
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                  <Button
                    onClick={() => navigate('/espace-personnel')}
                    className="bg-[#0b2a55] hover:bg-[#1a4280] text-white px-8 py-6 text-lg rounded-full"
                  >
                    Espace Personnel
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                  <Button
                    onClick={() => navigate('/notre-mission')}
                    variant="outline"
                    className="border-gray-300 text-gray-700 hover:bg-gray-100 px-8 py-6 text-lg rounded-full"
                  >
                    Revenir à notre mission
                  </Button>
                </div>
              </div>
            </main>

          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default NotreAction;
