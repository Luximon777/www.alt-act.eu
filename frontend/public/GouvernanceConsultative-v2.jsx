import React, { useEffect, useState } from 'react';
import { ArrowLeft, Eye, Heart, Users, Target, Handshake, Shield, CheckCircle, ChevronRight, Scroll, Lightbulb, Settings, Award, RefreshCw, Scale } from 'lucide-react';
import { Button } from './ui/button';
import { useNavigate } from 'react-router-dom';
import { Badge } from './ui/badge';

const GouvernanceConsultative = () => {
  const navigate = useNavigate();
  const [activeSection, setActiveSection] = useState('raison');
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['raison', 'vision', 'doctrine', 'ethique', 'intelligence', 'architecture', 'adaptabilite', 'responsabilite', 'impact'];
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
    { id: 'raison', icon: Target, title: '1. Raison de gouverner', summary: 'Responsabilité et mission', color: 'bg-[#0b2a55]' },
    { id: 'vision', icon: Eye, title: '2. Vision', summary: 'Organisation apprenante', color: 'bg-rose-500' },
    { id: 'doctrine', icon: Users, title: '3. Doctrine décisionnelle', summary: 'Gouvernance consultative', color: 'bg-amber-500' },
    { id: 'ethique', icon: Scale, title: '4. Éthique du pouvoir', summary: 'Servir la mission', color: 'bg-teal-500' },
    { id: 'intelligence', icon: Lightbulb, title: '5. Intelligence collective', summary: 'Compétence stratégique', color: 'bg-purple-500' },
    { id: 'architecture', icon: Settings, title: '6. Architecture', summary: 'Orientation, régulation, activation', color: 'bg-blue-500' },
    { id: 'adaptabilite', icon: RefreshCw, title: '7. Adaptabilité', summary: 'Évoluer avec discernement', color: 'bg-green-500' },
    { id: 'responsabilite', icon: Shield, title: '8. Responsabilité partagée', summary: 'Autonomie et coopération', color: 'bg-orange-500' },
    { id: 'impact', icon: Award, title: '9. Impact durable', summary: 'Préparer l\'avenir', color: 'bg-indigo-500' },
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
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Gouvernance d'ALT&ACT</h1>
          <p className="text-xl text-blue-100">Principes et architecture de notre gouvernance</p>
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
                    <p className="text-xs text-gray-700 italic leading-relaxed">"Gouverner revient à préparer l'avenir autant qu'à répondre aux besoins présents."</p>
                  </div>
                </div>
              </div>
            </div>
          </aside>

          <main className="flex-1 min-w-0">
            {/* 1. Raison de gouverner */}
            <div id="raison" className="bg-white rounded-2xl shadow-lg p-8 md:p-12 mb-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-full bg-[#0b2a55] flex items-center justify-center"><Target className="w-6 h-6 text-white" /></div>
                <h2 className="text-2xl font-bold text-gray-900">1. Raison de gouverner</h2>
              </div>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>Gouverner, au sein d'ALT&ACT, consiste à créer les conditions permettant à l'organisation de remplir sa mission avec <strong className="text-[#0b2a55]">justesse, responsabilité et efficacité durable</strong>.</p>
                <p>La gouvernance ne se limite pas à décider ; elle oriente, sécurise, régule et rend possible l'action collective au service de l'utilité sociale.</p>
                <p className="font-medium text-[#0b2a55]">Elle veille en permanence à l'alignement entre :</p>
                <ul className="space-y-2 ml-4">
                  {["la vision portée par l'association", "ses valeurs humanistes", "ses pratiques professionnelles", "son impact réel sur les parcours de vie"].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3"><CheckCircle className="w-5 h-5 text-[#0b2a55] flex-shrink-0 mt-0.5" /><span>{item}</span></li>
                  ))}
                </ul>
                <p className="italic border-l-4 border-orange-500 pl-4 bg-orange-50 py-3 rounded-r-lg">Ainsi comprise, la gouvernance devient un acte de responsabilité envers les personnes accompagnées, les partenaires et la société.</p>
              </div>
            </div>

            {/* 2. Vision de l'organisation */}
            <div id="vision" className="bg-white rounded-2xl shadow-lg p-8 md:p-12 mb-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-full bg-rose-500 flex items-center justify-center"><Eye className="w-6 h-6 text-white" /></div>
                <h2 className="text-2xl font-bold text-gray-900">2. Vision de l'organisation</h2>
              </div>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p className="font-medium text-[#0b2a55]">ALT&ACT se conçoit comme une organisation :</p>
                <div className="grid md:grid-cols-2 gap-3">
                  {["centrée sur le potentiel humain", "apprenante et évolutive", "attentive aux transformations du travail", "capable d'innovation sociale", "structurée sans devenir rigide"].map((item, idx) => (
                    <div key={idx} className="flex items-center gap-3 bg-rose-50 rounded-lg p-4 border border-rose-100">
                      <CheckCircle className="w-5 h-5 text-rose-500 flex-shrink-0" /><span>{item}</span>
                    </div>
                  ))}
                </div>
                <p className="mt-4">Son modèle repose sur une conviction forte : <strong>les organisations qui contribuent durablement au progrès social sont celles qui savent associer exigence stratégique et maturité relationnelle.</strong></p>
                <p className="italic border-l-4 border-rose-500 pl-4 bg-rose-50 py-3 rounded-r-lg font-medium">La gouvernance a pour rôle de préserver cet équilibre.</p>
              </div>
            </div>

            {/* 3. Doctrine décisionnelle */}
            <div id="doctrine" className="bg-white rounded-2xl shadow-lg p-8 md:p-12 mb-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-full bg-amber-500 flex items-center justify-center"><Users className="w-6 h-6 text-white" /></div>
                <h2 className="text-2xl font-bold text-gray-900">3. Doctrine décisionnelle</h2>
              </div>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>ALT&ACT privilégie une <strong className="text-[#0b2a55]">gouvernance consultative</strong> dans laquelle les décisions importantes résultent d'un processus structuré de réflexion collective.</p>
                <p className="font-medium text-[#0b2a55]">Ce choix traduit plusieurs orientations majeures :</p>
                <ul className="space-y-3 ml-4">
                  {["reconnaître la diversité des intelligences comme une ressource", "sécuriser la pertinence des décisions", "favoriser l'adhésion dans leur mise en œuvre", "prévenir les dynamiques de fragmentation interne"].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3"><span className="w-2 h-2 rounded-full bg-amber-500 mt-2 flex-shrink-0"></span><span>{item}</span></li>
                  ))}
                </ul>
                <p className="italic border-l-4 border-amber-500 pl-4 bg-amber-50 py-3 rounded-r-lg font-medium">Décider engage donc à la fois la responsabilité individuelle et la conscience collective.</p>
              </div>
            </div>

            {/* 4. Éthique du pouvoir */}
            <div id="ethique" className="bg-white rounded-2xl shadow-lg p-8 md:p-12 mb-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-full bg-teal-500 flex items-center justify-center"><Scale className="w-6 h-6 text-white" /></div>
                <h2 className="text-2xl font-bold text-gray-900">4. Éthique du pouvoir</h2>
              </div>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>L'exercice des responsabilités au sein d'ALT&ACT repose sur une conception exigeante du pouvoir, entendu comme <strong className="text-[#0b2a55]">une capacité à servir la mission plutôt qu'à s'imposer</strong>.</p>
                <p className="font-medium text-[#0b2a55]">Il implique :</p>
                <div className="grid md:grid-cols-3 gap-3">
                  {["discernement", "sens de la mesure", "redevabilité", "exemplarité", "attention aux conséquences des décisions"].map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2 bg-teal-50 rounded-lg p-3 border border-teal-100">
                      <CheckCircle className="w-4 h-4 text-teal-600 flex-shrink-0" /><span className="text-sm">{item}</span>
                    </div>
                  ))}
                </div>
                <p className="italic border-l-4 border-teal-500 pl-4 bg-teal-50 py-3 rounded-r-lg">Le pouvoir y est envisagé comme une fonction de régulation et de protection du projet associatif.</p>
              </div>
            </div>

            {/* 5. Intelligence collective */}
            <div id="intelligence" className="bg-white rounded-2xl shadow-lg p-8 md:p-12 mb-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-full bg-purple-500 flex items-center justify-center"><Lightbulb className="w-6 h-6 text-white" /></div>
                <h2 className="text-2xl font-bold text-gray-900">5. Intelligence collective comme compétence stratégique</h2>
              </div>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>ALT&ACT reconnaît l'intelligence collective non comme une intention, mais comme <strong className="text-[#0b2a55]">une compétence organisationnelle à développer</strong>.</p>
                <p className="font-medium text-[#0b2a55]">Elle se traduit par la capacité à :</p>
                <div className="space-y-3">
                  {["croiser les regards", "structurer le dialogue", "transformer les divergences en ressources", "faire émerger des solutions robustes", "apprendre de l'expérience"].map((item, idx) => (
                    <div key={idx} className="flex items-start gap-3 bg-purple-50 rounded-xl p-4 border border-purple-100">
                      <CheckCircle className="w-5 h-5 text-purple-500 flex-shrink-0 mt-0.5" /><span>{item}</span>
                    </div>
                  ))}
                </div>
                <p className="italic border-l-4 border-purple-500 pl-4 bg-purple-50 py-3 rounded-r-lg">Cette approche renforce la qualité des orientations tout en consolidant la cohésion interne.</p>
              </div>
            </div>

            {/* 6. Architecture de gouvernance */}
            <div id="architecture" className="bg-white rounded-2xl shadow-lg p-8 md:p-12 mb-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-full bg-blue-500 flex items-center justify-center"><Settings className="w-6 h-6 text-white" /></div>
                <h2 className="text-2xl font-bold text-gray-900">6. Architecture de gouvernance</h2>
              </div>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p className="font-medium text-[#0b2a55]">La gouvernance d'ALT&ACT s'organise autour de trois fonctions complémentaires :</p>
                <div className="space-y-4">
                  {[
                    { title: "Orientation", desc: "Définir le cap, anticiper les évolutions et garantir la cohérence stratégique." },
                    { title: "Régulation", desc: "Sécuriser le fonctionnement, prévenir les déséquilibres et arbitrer lorsque nécessaire." },
                    { title: "Activation", desc: "Permettre l'action, soutenir les initiatives et favoriser la capacité de mise en œuvre." }
                  ].map((item, idx) => (
                    <div key={idx} className="bg-blue-50 rounded-xl p-5 border border-blue-100">
                      <h4 className="font-bold text-blue-700 mb-2">{item.title}</h4>
                      <p className="text-gray-700">{item.desc}</p>
                    </div>
                  ))}
                </div>
                <p className="italic border-l-4 border-blue-500 pl-4 bg-blue-50 py-3 rounded-r-lg">Cette architecture vise un équilibre constant entre réflexion et opérationnalité.</p>
              </div>
            </div>

            {/* 7. Principe d'adaptabilité */}
            <div id="adaptabilite" className="bg-white rounded-2xl shadow-lg p-8 md:p-12 mb-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-full bg-green-500 flex items-center justify-center"><RefreshCw className="w-6 h-6 text-white" /></div>
                <h2 className="text-2xl font-bold text-gray-900">7. Principe d'adaptabilité</h2>
              </div>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>Consciente de l'évolution rapide des environnements professionnels et sociaux, ALT&ACT inscrit <strong className="text-[#0b2a55]">l'adaptabilité au cœur de sa gouvernance</strong>.</p>
                <p className="font-medium text-[#0b2a55]">Cela suppose :</p>
                <div className="grid md:grid-cols-2 gap-4">
                  {["une écoute active des besoins émergents", "une capacité d'ajustement stratégique", "une évaluation régulière de ses pratiques", "une ouverture à l'expérimentation"].map((item, idx) => (
                    <div key={idx} className="flex items-center gap-3 bg-green-50 rounded-lg p-4 border border-green-100">
                      <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" /><span>{item}</span>
                    </div>
                  ))}
                </div>
                <p className="italic border-l-4 border-green-500 pl-4 bg-green-50 py-3 rounded-r-lg font-medium">La stabilité ne réside pas dans l'immobilité, mais dans la capacité à évoluer avec discernement.</p>
              </div>
            </div>

            {/* 8. Culture de responsabilité partagée */}
            <div id="responsabilite" className="bg-gradient-to-r from-orange-500 to-amber-500 rounded-2xl shadow-lg p-8 md:p-12 mb-8 text-white">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center"><Shield className="w-6 h-6 text-white" /></div>
                <h2 className="text-2xl font-bold">8. Culture de responsabilité partagée</h2>
              </div>
              <div className="space-y-4 leading-relaxed">
                <p>La solidité d'une organisation repose sur la clarté des rôles autant que sur l'engagement des personnes.</p>
                <p className="font-medium">ALT&ACT encourage une responsabilité exercée à tous les niveaux, favorisant :</p>
                <div className="grid md:grid-cols-2 gap-4">
                  {["l'autonomie dans le cadre des missions confiées", "la coopération entre instances", "la transparence des décisions", "la confiance professionnelle"].map((item, idx) => (
                    <div key={idx} className="flex items-center gap-3 bg-white/10 rounded-lg p-4">
                      <CheckCircle className="w-5 h-5 text-white flex-shrink-0" /><span>{item}</span>
                    </div>
                  ))}
                </div>
                <p className="italic bg-white/10 rounded-lg p-4 mt-4">Cette culture soutient l'initiative tout en préservant la cohérence collective.</p>
              </div>
            </div>

            {/* 9. Gouverner pour un impact durable */}
            <div id="impact" className="bg-white rounded-2xl shadow-lg p-8 md:p-12 mb-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-full bg-indigo-500 flex items-center justify-center"><Award className="w-6 h-6 text-white" /></div>
                <h2 className="text-2xl font-bold text-gray-900">9. Gouverner pour un impact durable</h2>
              </div>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>Au-delà de son fonctionnement interne, la gouvernance d'ALT&ACT est orientée vers un objectif central : <strong className="text-[#0b2a55]">produire un impact social tangible et durable</strong>.</p>
                <p className="font-medium text-[#0b2a55]">Elle veille à ce que chaque orientation contribue à :</p>
                <div className="grid md:grid-cols-2 gap-4">
                  {["renforcer le pouvoir d'agir des personnes", "sécuriser les parcours professionnels", "favoriser une société plus inclusive", "accompagner les mutations du travail"].map((item, idx) => (
                    <div key={idx} className="flex items-center gap-3 bg-indigo-50 rounded-lg p-4 border border-indigo-100">
                      <CheckCircle className="w-5 h-5 text-indigo-600 flex-shrink-0" /><span>{item}</span>
                    </div>
                  ))}
                </div>
                <p className="text-lg font-medium text-[#0b2a55] italic border-l-4 border-indigo-500 pl-4 bg-indigo-50 py-4 rounded-r-lg">Gouverner revient ainsi à préparer l'avenir autant qu'à répondre aux besoins présents.</p>
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
