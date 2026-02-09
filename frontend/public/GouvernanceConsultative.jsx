import React, { useEffect, useState } from 'react';
import { ArrowLeft, Eye, Heart, Users, Target, Handshake, Shield, CheckCircle, ChevronRight, Scroll, Lightbulb, MessageCircle, Settings, Award, BookOpen, Sparkles } from 'lucide-react';
import { Button } from './ui/button';
import { useNavigate } from 'react-router-dom';
import { Badge } from './ui/badge';

const GouvernanceConsultative = () => {
  const navigate = useNavigate();
  const [activeSection, setActiveSection] = useState('vision');
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['vision', 'fondement', 'finalite', 'principes', 'champ', 'methodologie', 'conditions', 'effets', 'engagement'];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom >= 150) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleBackHome = () => {
    navigate('/');
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  const memoItems = [
    { id: 'vision', icon: Eye, title: '1. Vision', summary: 'Processus structurant', color: 'bg-[#0b2a55]' },
    { id: 'fondement', icon: Heart, title: '2. Fondement', summary: 'Culture organisationnelle', color: 'bg-rose-500' },
    { id: 'finalite', icon: Target, title: '3. Finalité', summary: 'Décisions éclairées', color: 'bg-amber-500' },
    { id: 'principes', icon: Shield, title: '4. Principes directeurs', summary: '6 repères essentiels', color: 'bg-teal-500' },
    { id: 'champ', icon: Settings, title: '5. Champ d\'application', summary: 'Orientations stratégiques', color: 'bg-purple-500' },
    { id: 'methodologie', icon: BookOpen, title: '6. Méthodologie', summary: '5 étapes clés', color: 'bg-blue-500' },
    { id: 'conditions', icon: Sparkles, title: '7. Conditions de réussite', summary: 'Environnement propice', color: 'bg-green-500' },
    { id: 'effets', icon: Award, title: '8. Effets attendus', summary: 'Organisation apprenante', color: 'bg-orange-500' },
    { id: 'engagement', icon: Handshake, title: '9. Engagement', summary: 'Identité collective', color: 'bg-indigo-500' },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="relative text-white py-20 overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1552664730-d307ca884978?crop=entropy&cs=srgb&fm=jpg&w=1920')" }}></div>
        <div className="absolute inset-0 bg-[#0b2a55]/75"></div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Button variant="ghost" onClick={handleBackHome} className="text-white hover:bg-white/20 mb-6">
            <ArrowLeft className="w-4 h-4 mr-2" /> Retour
          </Button>
          <Badge className="mb-4 bg-white/20 text-white border-white/30">Charte éthique</Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Gouvernance Consultative</h1>
          <p className="text-xl text-blue-100">Principe de Gouvernance Consultative d'ALT&ACT</p>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col lg:flex-row gap-8">
          <aside className="hidden lg:block lg:w-72 flex-shrink-0">
            <div className="sticky top-24">
              <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
                <div className="bg-gradient-to-r from-[#0b2a55] to-[#1a4280] px-4 py-4">
                  <h3 className="text-white font-bold text-base flex items-center gap-2"><Scroll className="w-5 h-5" />9 Principes</h3>
                  <p className="text-blue-200 text-xs mt-1">Navigation rapide</p>
                </div>
                <div className="p-2 max-h-[60vh] overflow-y-auto">
                  {memoItems.map((item) => {
                    const Icon = item.icon;
                    const isActive = activeSection === item.id;
                    return (
                      <button key={item.id} onClick={() => scrollToSection(item.id)} className={`w-full text-left p-2 rounded-lg mb-1 transition-all duration-300 group ${isActive ? 'bg-[#0b2a55]/10 border-l-3 border-[#0b2a55]' : 'hover:bg-gray-50'}`}>
                        <div className="flex items-center gap-2">
                          <div className={`w-7 h-7 rounded-lg ${item.color} flex items-center justify-center flex-shrink-0 ${isActive ? 'scale-110' : 'group-hover:scale-105'} transition-transform duration-200`}>
                            <Icon className="w-3.5 h-3.5 text-white" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <p className={`font-semibold text-xs ${isActive ? 'text-[#0b2a55]' : 'text-gray-700'}`}>{item.title}</p>
                            <p className="text-[10px] text-gray-500 truncate">{item.summary}</p>
                          </div>
                          <ChevronRight className={`w-3 h-3 text-gray-400 flex-shrink-0 transition-transform duration-200 ${isActive ? 'translate-x-0.5 text-[#0b2a55]' : ''}`} />
                        </div>
                      </button>
                    );
                  })}
                </div>
                <div className="px-4 pb-4">
                  <div className="bg-gradient-to-br from-rose-50 to-orange-50 rounded-lg p-3 border border-rose-100">
                    <p className="text-xs text-gray-700 italic leading-relaxed">"La consultation devient une manière d'être et d'agir ensemble."</p>
                  </div>
                </div>
              </div>
            </div>
          </aside>

          <main className="flex-1 min-w-0">
            {/* 1. Vision */}
            <div id="vision" className="bg-white rounded-2xl shadow-lg p-8 md:p-12 mb-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-full bg-[#0b2a55] flex items-center justify-center"><Eye className="w-6 h-6 text-white" /></div>
                <h2 className="text-2xl font-bold text-gray-900">1. Vision</h2>
              </div>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>ALT&ACT adopte la consultation comme un <strong className="text-[#0b2a55]">processus structurant de sa gouvernance</strong> et comme une expression concrète de son engagement en faveur d'une organisation responsable, inclusive et tournée vers le progrès partagé.</p>
                <p>Elle repose sur la conviction que les décisions les plus justes émergent lorsque les perspectives sont mises en dialogue dans un climat de confiance, de respect et de responsabilité.</p>
                <p className="italic border-l-4 border-orange-500 pl-4 bg-orange-50 py-3 rounded-r-lg">La consultation incarne ainsi une manière d'agir cohérente avec la vocation humaniste de l'association : permettre à chacun de contribuer à une intelligence collective au service de l'impact social.</p>
              </div>
            </div>

            {/* 2. Fondement */}
            <div id="fondement" className="bg-white rounded-2xl shadow-lg p-8 md:p-12 mb-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-full bg-rose-500 flex items-center justify-center"><Heart className="w-6 h-6 text-white" /></div>
                <h2 className="text-2xl font-bold text-gray-900">2. Fondement</h2>
              </div>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>La gouvernance consultative considère que la qualité d'une décision dépend autant de la rigueur de l'analyse que de la capacité du collectif à éclairer une situation.</p>
                <p className="font-medium text-[#0b2a55]">Elle ne se limite pas à une méthode de discussion ; elle constitue une culture organisationnelle favorisant :</p>
                <ul className="space-y-3 ml-4">
                  <li className="flex items-start gap-3"><CheckCircle className="w-5 h-5 text-rose-500 flex-shrink-0 mt-0.5" /><span>la <strong>coopération</strong> plutôt que la compétition</span></li>
                  <li className="flex items-start gap-3"><CheckCircle className="w-5 h-5 text-rose-500 flex-shrink-0 mt-0.5" /><span>la <strong>coresponsabilité</strong> plutôt que la centralisation</span></li>
                  <li className="flex items-start gap-3"><CheckCircle className="w-5 h-5 text-rose-500 flex-shrink-0 mt-0.5" /><span>la <strong>recherche de solutions</strong> plutôt que l'affirmation des positions</span></li>
                </ul>
                <p className="italic border-l-4 border-[#0b2a55] pl-4 bg-gray-50 py-3 rounded-r-lg font-medium">Elle transforme la décision en un acte collectif porteur de sens.</p>
              </div>
            </div>

            {/* 3. Finalité */}
            <div id="finalite" className="bg-white rounded-2xl shadow-lg p-8 md:p-12 mb-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-full bg-amber-500 flex items-center justify-center"><Target className="w-6 h-6 text-white" /></div>
                <h2 className="text-2xl font-bold text-gray-900">3. Finalité</h2>
              </div>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p className="font-medium text-[#0b2a55]">La consultation vise à :</p>
                <div className="grid md:grid-cols-2 gap-4">
                  {["Produire des décisions éclairées et durables", "Mobiliser l'intelligence collective", "Renforcer l'adhésion aux orientations", "Sécuriser la mise en œuvre des projets", "Prévenir les tensions liées aux incompréhensions"].map((item, idx) => (
                    <div key={idx} className="flex items-center gap-3 bg-amber-50 rounded-lg p-4 border border-amber-100">
                      <CheckCircle className="w-5 h-5 text-amber-600 flex-shrink-0" /><span>{item}</span>
                    </div>
                  ))}
                </div>
                <p className="italic border-l-4 border-amber-500 pl-4 bg-amber-50 py-3 rounded-r-lg">Chaque processus consultatif devient ainsi un levier de cohésion et de performance organisationnelle.</p>
              </div>
            </div>

            {/* 4. Principes directeurs */}
            <div id="principes" className="bg-white rounded-2xl shadow-lg p-8 md:p-12 mb-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-full bg-teal-500 flex items-center justify-center"><Shield className="w-6 h-6 text-white" /></div>
                <h2 className="text-2xl font-bold text-gray-900">4. Principes directeurs</h2>
              </div>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>Toute consultation au sein d'ALT&ACT s'appuie sur des repères essentiels :</p>
                <div className="space-y-4">
                  {[
                    { title: "Responsabilité collective", desc: "Les contributions nourrissent une réflexion commune et dépassent les intérêts individuels." },
                    { title: "Équité de participation", desc: "Chaque membre dispose d'un espace d'expression réel et respecté." },
                    { title: "Qualité d'écoute", desc: "L'attention portée aux idées des autres est reconnue comme une compétence professionnelle." },
                    { title: "Détachement constructif", desc: "Les participants privilégient la mission de l'association plutôt que la défense d'une position personnelle." },
                    { title: "Recherche de clarté", desc: "Le dialogue vise une compréhension approfondie avant toute décision." },
                    { title: "Unité dans l'action", desc: "Une fois adoptée, la décision est soutenue par tous afin de garantir sa portée." }
                  ].map((item, idx) => (
                    <div key={idx} className="bg-teal-50 rounded-xl p-5 border border-teal-100">
                      <h4 className="font-bold text-teal-700 mb-2">{item.title}</h4>
                      <p className="text-gray-700">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* 5. Champ d'application */}
            <div id="champ" className="bg-white rounded-2xl shadow-lg p-8 md:p-12 mb-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-full bg-purple-500 flex items-center justify-center"><Settings className="w-6 h-6 text-white" /></div>
                <h2 className="text-2xl font-bold text-gray-900">5. Champ d'application</h2>
              </div>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p className="font-medium text-[#0b2a55]">La consultation constitue le mode privilégié de prise de décision pour :</p>
                <ul className="space-y-2 ml-4">
                  {["les orientations stratégiques", "les projets structurants", "les évolutions organisationnelles", "les partenariats majeurs", "les sujets à fort impact humain"].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3"><span className="w-2 h-2 rounded-full bg-purple-500 mt-2 flex-shrink-0"></span><span>{item}</span></li>
                  ))}
                </ul>
                <p className="italic border-l-4 border-purple-500 pl-4 bg-purple-50 py-3 rounded-r-lg">Les décisions opérationnelles relèvent de délégations clairement établies, dans un cadre de confiance et de responsabilité.</p>
              </div>
            </div>

            {/* 6. Méthodologie consultative */}
            <div id="methodologie" className="bg-white rounded-2xl shadow-lg p-8 md:p-12 mb-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-full bg-blue-500 flex items-center justify-center"><BookOpen className="w-6 h-6 text-white" /></div>
                <h2 className="text-2xl font-bold text-gray-900">6. Méthodologie consultative</h2>
              </div>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>Pour garantir sa qualité, toute consultation suit un processus structuré :</p>
                <div className="space-y-4">
                  {[
                    { num: "1", title: "Clarification", desc: "Partage d'informations fiables et compréhension commune des enjeux." },
                    { num: "2", title: "Expression", desc: "Dialogue ouvert, respectueux et orienté vers la recherche de solutions." },
                    { num: "3", title: "Convergence", desc: "Identification des accords et exploration constructive des divergences." },
                    { num: "4", title: "Décision", desc: "Recherche prioritaire d'un accord partagé permettant l'avancement collectif." },
                    { num: "5", title: "Engagement", desc: "Mobilisation de chacun dans la mise en œuvre et apprentissage continu." }
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-start gap-4 bg-blue-50 rounded-xl p-5 border border-blue-100">
                      <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center flex-shrink-0">
                        <span className="text-white font-bold">{item.num}</span>
                      </div>
                      <div>
                        <h4 className="font-bold text-blue-700">{item.title}</h4>
                        <p className="text-gray-700">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <p className="italic border-l-4 border-blue-500 pl-4 bg-blue-50 py-3 rounded-r-lg">Cette méthodologie favorise des décisions à la fois réfléchies et opérationnelles.</p>
              </div>
            </div>

            {/* 7. Conditions de réussite */}
            <div id="conditions" className="bg-white rounded-2xl shadow-lg p-8 md:p-12 mb-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-full bg-green-500 flex items-center justify-center"><Sparkles className="w-6 h-6 text-white" /></div>
                <h2 className="text-2xl font-bold text-gray-900">7. Conditions de réussite</h2>
              </div>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p className="font-medium text-[#0b2a55]">ALT&ACT veille à instaurer un environnement propice à la consultation en développant :</p>
                <div className="grid md:grid-cols-2 gap-4">
                  {["la sécurité psychologique", "la transparence", "la maturité relationnelle", "l'esprit de coopération", "la confiance réciproque"].map((item, idx) => (
                    <div key={idx} className="flex items-center gap-3 bg-green-50 rounded-lg p-4 border border-green-100">
                      <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" /><span>{item}</span>
                    </div>
                  ))}
                </div>
                <p className="italic border-l-4 border-green-500 pl-4 bg-green-50 py-3 rounded-r-lg">Consulter est reconnu comme une compétence organisationnelle essentielle, appelée à être cultivée et renforcée.</p>
              </div>
            </div>

            {/* 8. Effets attendus */}
            <div id="effets" className="bg-gradient-to-r from-orange-500 to-amber-500 rounded-2xl shadow-lg p-8 md:p-12 mb-8 text-white">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center"><Award className="w-6 h-6 text-white" /></div>
                <h2 className="text-2xl font-bold">8. Effets attendus sur l'organisation</h2>
              </div>
              <div className="space-y-4 leading-relaxed">
                <p>En institutionnalisant la consultation, ALT&ACT affirme son ambition de devenir :</p>
                <div className="grid md:grid-cols-2 gap-4">
                  {["une organisation apprenante", "un espace favorisant l'initiative", "un collectif capable d'allier exigence humaine et efficacité", "un acteur reconnu pour la cohérence entre ses valeurs et ses pratiques"].map((item, idx) => (
                    <div key={idx} className="flex items-center gap-3 bg-white/10 rounded-lg p-4">
                      <CheckCircle className="w-5 h-5 text-white flex-shrink-0" /><span>{item}</span>
                    </div>
                  ))}
                </div>
                <p className="italic bg-white/10 rounded-lg p-4 mt-4">La gouvernance consultative contribue ainsi à la solidité des décisions et à la fluidité du fonctionnement interne.</p>
              </div>
            </div>

            {/* 9. Engagement et portée */}
            <div id="engagement" className="bg-white rounded-2xl shadow-lg p-8 md:p-12 mb-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-full bg-indigo-500 flex items-center justify-center"><Handshake className="w-6 h-6 text-white" /></div>
                <h2 className="text-2xl font-bold text-gray-900">9. Engagement et portée</h2>
              </div>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>Ce principe engage l'ensemble des instances de l'association — <strong>gouvernance, comités et équipes</strong> — et participe pleinement à son identité.</p>
                <p>Il traduit la conviction que les organisations qui créent un impact durable sont celles qui savent conjuguer intelligence collective, responsabilité partagée et vision commune.</p>
                <p className="text-lg font-medium text-[#0b2a55] italic border-l-4 border-indigo-500 pl-4 bg-indigo-50 py-4 rounded-r-lg">La consultation devient alors non seulement un mode de décision, mais une manière d'être et d'agir ensemble.</p>
              </div>
            </div>

            <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
              <Button onClick={() => navigate('/charte-ethique')} variant="outline" className="border-[#0b2a55] text-[#0b2a55] hover:bg-[#0b2a55] hover:text-white">
                <ArrowLeft className="w-4 h-4 mr-2" />Charte éthique
              </Button>
              <span className="text-gray-500 text-sm">Association ALT&ACT</span>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default GouvernanceConsultative;
