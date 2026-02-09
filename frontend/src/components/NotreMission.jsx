import React, { useState, useEffect } from 'react';
import { Target, Heart, Users, Globe, ArrowRight, Sparkles, Shield, Brain, HandHeart, ChevronRight, Eye } from 'lucide-react';
import { Button } from './ui/button';
import { useNavigate } from 'react-router-dom';
import Navigation from './Navigation';
import Footer from './Footer';

const NotreMission = () => {
  const navigate = useNavigate();
  const [activeSection, setActiveSection] = useState('conviction');

  const memoItems = [
    { id: 'conviction', title: 'Notre conviction', summary: 'Chaque personne porte un potentiel de développement', icon: Heart, color: 'bg-amber-500' },
    { id: 'travail', title: 'Le travail réinventé', summary: 'Expression, apprentissage et responsabilité', icon: Brain, color: 'bg-blue-500' },
    { id: 'service', title: 'Acte de service', summary: 'Le travail au service de la communauté', icon: HandHeart, color: 'bg-rose-500' },
    { id: 'europe', title: 'Directives européennes', summary: 'Alignés sur les orientations de l\'UE', icon: Globe, color: 'bg-teal-500' },
    { id: 'piliers', title: 'Nos piliers', summary: 'Révéler, structurer, contribuer', icon: Target, color: 'bg-purple-500' },
  ];

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
  }, []);

  return (
    <div className="min-h-screen bg-gray-50" data-testid="notre-mission-page">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-[#0b2a55] via-[#1a4280] to-[#0b2a55] overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-amber-400 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-orange-400 rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-500/20 rounded-full mb-6">
            <Target className="w-4 h-4 text-amber-400" />
            <span className="text-amber-300 text-sm font-semibold">NOTRE MISSION</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8 leading-tight">
            Révéler les capacités humaines
          </h1>
          
          <p className="text-xl md:text-2xl text-blue-100 max-w-4xl mx-auto leading-relaxed">
            Structurer le pouvoir d'agir et permettre à chacun de contribuer pleinement à la société.
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
                  <div className="bg-gradient-to-r from-amber-500 to-orange-500 px-5 py-4">
                    <h3 className="text-white font-bold text-lg flex items-center gap-2">
                      <Target className="w-5 h-5" />
                      En résumé
                    </h3>
                    <p className="text-amber-100 text-sm mt-1">Les points clés de notre mission</p>
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
                              ? 'bg-amber-50 border-l-4 border-amber-500' 
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
                              <p className={`font-semibold text-sm ${isActive ? 'text-amber-700' : 'text-gray-800'}`}>
                                {item.title}
                              </p>
                              <p className="text-xs text-gray-500 mt-0.5 line-clamp-2">
                                {item.summary}
                              </p>
                            </div>
                            <ChevronRight className={`w-4 h-4 text-gray-400 flex-shrink-0 transition-transform duration-200 ${
                              isActive ? 'translate-x-1 text-amber-500' : ''
                            }`} />
                          </div>
                        </button>
                      );
                    })}
                  </div>

                  {/* Citation */}
                  <div className="px-5 pb-5">
                    <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-xl p-4 border border-amber-100">
                      <p className="text-sm text-gray-700 italic leading-relaxed">
                        "Révéler les capacités humaines, c'est permettre à chacun de contribuer pleinement à la société."
                      </p>
                      <p className="text-xs text-amber-700 mt-2 font-medium">— Notre mission</p>
                    </div>
                  </div>
                </div>
              </div>
            </aside>

            {/* Main Content */}
            <main className="flex-1 min-w-0 space-y-12">
              
              {/* Conviction essentielle */}
              <div id="conviction" className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-3xl p-8 md:p-12 border-l-4 border-amber-500">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                  Notre conviction essentielle
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Nous partons d'une conviction essentielle : <strong className="text-amber-700">chaque personne porte en elle un potentiel de développement</strong> qui, lorsqu'il est reconnu et cultivé, devient une force pour l'ensemble de la collectivité.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Notre mission consiste à créer les conditions dans lesquelles ces capacités peuvent <strong className="text-amber-700">émerger, se renforcer et s'inscrire dans des trajectoires professionnelles porteuses de sens</strong>.
                </p>
              </div>

              {/* Le travail comme expression */}
              <div id="travail" className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">
                    Le travail, bien plus qu'une fonction économique
                  </h3>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Nous considérons le travail non comme une simple fonction économique, mais comme un <strong>espace d'expression, d'apprentissage continu et de responsabilité</strong>.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    En favorisant l'autonomie, la maturité et la capacité de coopération, nous contribuons à former des femmes et des hommes capables de s'orienter dans un monde en transformation et de participer activement au bien commun.
                  </p>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-amber-50 rounded-2xl p-6 text-center">
                    <Heart className="w-10 h-10 text-amber-600 mx-auto mb-3" />
                    <p className="font-semibold text-gray-900">Expression</p>
                    <p className="text-sm text-gray-600">Espace de développement</p>
                  </div>
                  <div className="bg-blue-50 rounded-2xl p-6 text-center">
                    <Brain className="w-10 h-10 text-blue-600 mx-auto mb-3" />
                    <p className="font-semibold text-gray-900">Apprentissage</p>
                    <p className="text-sm text-gray-600">Croissance continue</p>
                  </div>
                  <div className="bg-green-50 rounded-2xl p-6 text-center">
                    <Shield className="w-10 h-10 text-green-600 mx-auto mb-3" />
                    <p className="font-semibold text-gray-900">Responsabilité</p>
                    <p className="text-sm text-gray-600">Engagement citoyen</p>
                  </div>
                  <div className="bg-purple-50 rounded-2xl p-6 text-center">
                    <Users className="w-10 h-10 text-purple-600 mx-auto mb-3" />
                    <p className="font-semibold text-gray-900">Coopération</p>
                    <p className="text-sm text-gray-600">Force collective</p>
                  </div>
                </div>
              </div>

              {/* Le travail comme service */}
              <div id="service" className="bg-gradient-to-r from-[#0b2a55] to-[#1a4280] rounded-3xl p-8 md:p-12 text-white">
                <div className="flex items-center gap-3 mb-6">
                  <HandHeart className="w-8 h-8 text-amber-400" />
                  <h3 className="text-2xl font-bold">Le travail comme acte de service</h3>
                </div>
                <p className="text-blue-100 text-lg leading-relaxed mb-6">
                  Nous concevons le rapport au travail comme un <strong className="text-white">acte de service à la communauté</strong>. Chaque contribution professionnelle, quelle que soit sa nature, participe à l'édification d'une société plus solidaire et plus humaine.
                </p>
                <p className="text-blue-100 text-lg leading-relaxed">
                  Cette vision transforme le travail en un vecteur de dignité, de reconnaissance mutuelle et de progrès partagé.
                </p>
              </div>

              {/* Alignement européen */}
              <div id="europe" className="bg-blue-50 rounded-3xl p-8 md:p-12 border border-blue-200">
                <div className="flex items-center gap-3 mb-6">
                  <Globe className="w-8 h-8 text-blue-600" />
                  <h3 className="text-2xl font-bold text-gray-900">Alignés sur les directives européennes</h3>
                </div>
                <p className="text-gray-700 text-lg leading-relaxed mb-4">
                  Notre action s'inscrit dans le cadre des orientations et visions européennes en matière d'emploi, d'inclusion sociale et de développement durable.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Nous portons une attention particulière aux recommandations du <strong>Socle européen des droits sociaux</strong>, à la <strong>Stratégie européenne pour l'emploi</strong> et aux objectifs de développement durable (ODD), notamment ceux liés au travail décent et à la réduction des inégalités.
                </p>
              </div>

              {/* Nos piliers */}
              <div id="piliers">
                <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Les piliers de notre mission</h3>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="bg-white rounded-2xl p-6 shadow-lg border-t-4 border-amber-500 hover:shadow-xl transition-shadow">
                    <Target className="w-12 h-12 text-amber-500 mb-4" />
                    <h4 className="text-xl font-bold text-gray-900 mb-3">Révéler</h4>
                    <p className="text-gray-600">
                      Mettre en lumière les potentiels cachés et les capacités inexploitées de chaque personne.
                    </p>
                  </div>
                  <div className="bg-white rounded-2xl p-6 shadow-lg border-t-4 border-blue-500 hover:shadow-xl transition-shadow">
                    <Sparkles className="w-12 h-12 text-blue-500 mb-4" />
                    <h4 className="text-xl font-bold text-gray-900 mb-3">Structurer</h4>
                    <p className="text-gray-600">
                      Accompagner le développement du pouvoir d'agir et de l'autonomie décisionnelle.
                    </p>
                  </div>
                  <div className="bg-white rounded-2xl p-6 shadow-lg border-t-4 border-green-500 hover:shadow-xl transition-shadow">
                    <Users className="w-12 h-12 text-green-500 mb-4" />
                    <h4 className="text-xl font-bold text-gray-900 mb-3">Contribuer</h4>
                    <p className="text-gray-600">
                      Permettre à chacun de participer pleinement à la vie économique et sociale.
                    </p>
                  </div>
                </div>
              </div>

              {/* CTA */}
              <div className="text-center pt-8">
                <div className="inline-flex flex-col sm:flex-row gap-4">
                  <Button
                    onClick={() => navigate('/notre-ambition')}
                    className="bg-amber-500 hover:bg-amber-600 text-white px-8 py-6 text-lg rounded-full"
                  >
                    Découvrir notre ambition
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                  <Button
                    onClick={() => navigate('/notre-action')}
                    variant="outline"
                    className="border-[#0b2a55] text-[#0b2a55] hover:bg-[#0b2a55] hover:text-white px-8 py-6 text-lg rounded-full"
                  >
                    Voir notre action
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

export default NotreMission;
