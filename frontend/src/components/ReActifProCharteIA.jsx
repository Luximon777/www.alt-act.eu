import React, { useEffect, useState } from 'react';
import { Brain, Heart, Eye, Shield, Users, Target, Scale, Building, CheckCircle, ChevronRight, Scroll, UserCheck, Lock, FileCheck, Settings, Cpu } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Navigation from './Navigation';
import Footer from './Footer';

const ReActifProCharteIA = () => {
  const navigate = useNavigate();
  const [activeSection, setActiveSection] = useState('preambule');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['preambule', 'article-1', 'article-2', 'article-3', 'article-4', 'article-5', 'article-6', 'article-7', 'article-8', 'article-9', 'article-10', 'article-11', 'article-12', 'engagement', 'statut'];
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
    { id: 'preambule', icon: Brain, title: 'Préambule', summary: 'Responsabilité et exigence', color: 'bg-indigo-600' },
    { id: 'article-1', icon: Heart, title: 'Art. 1 - Finalité', summary: 'Accompagnement humain', color: 'bg-rose-500' },
    { id: 'article-2', icon: Settings, title: 'Art. 2 - Conception', summary: 'Responsabilité éthique', color: 'bg-amber-500' },
    { id: 'article-3', icon: UserCheck, title: 'Art. 3 - Supervision', summary: 'Contrôle humain', color: 'bg-teal-500' },
    { id: 'article-4', icon: Eye, title: 'Art. 4 - Transparence', summary: 'Information claire', color: 'bg-blue-500' },
    { id: 'article-5', icon: Users, title: 'Art. 5 - Maîtrise', summary: 'Contrôle permanent', color: 'bg-purple-500' },
    { id: 'article-6', icon: Scale, title: 'Art. 6 - Équité', summary: 'Prévention des biais', color: 'bg-green-500' },
    { id: 'article-7', icon: Shield, title: 'Art. 7 - Robustesse', summary: 'Sécurité technique', color: 'bg-red-500' },
    { id: 'article-8', icon: Lock, title: 'Art. 8 - Données', summary: 'Protection vie privée', color: 'bg-cyan-500' },
    { id: 'article-9', icon: FileCheck, title: 'Art. 9 - Traçabilité', summary: 'Auditabilité', color: 'bg-orange-500' },
    { id: 'article-10', icon: Target, title: 'Art. 10 - Responsabilité', summary: 'Engagement continu', color: 'bg-violet-500' },
    { id: 'article-11', icon: Building, title: 'Art. 11 - Gouvernance', summary: 'Encadrement éthique', color: 'bg-slate-500' },
    { id: 'article-12', icon: Cpu, title: 'Art. 12 - Primauté', summary: 'L\'humain d\'abord', color: 'bg-indigo-500' },
  ];

  const articles = [
    {
      id: "article-1",
      number: "1",
      title: "Finalité exclusive d'accompagnement humain",
      icon: Heart,
      color: "rose",
      content: "Les technologies d'intelligence artificielle développées dans RE'ACTIF PRO ont pour seule finalité de soutenir l'accompagnement des personnes dans leur développement professionnel.",
      restrictions: [
        "Automatiser des décisions affectant le parcours d'une personne",
        "Exclure, filtrer ou discriminer des individus",
        "Exercer un contrôle ou une surveillance des personnes"
      ],
      conclusion: "L'intelligence artificielle est un outil d'assistance et non un système décisionnel autonome."
    },
    {
      id: "article-2",
      number: "2",
      title: "Responsabilité de conception éthique",
      icon: Settings,
      color: "amber",
      content: "RE'ACTIF PRO assume la responsabilité éthique dès la phase de conception des systèmes.",
      points: [
        "Respectent la dignité humaine",
        "Préservent la liberté de choix",
        "Soutiennent l'autonomie des personnes",
        "Évitent les effets de déterminisme ou d'enfermement"
      ],
      conclusion: "Les choix techniques doivent toujours être compatibles avec ces principes."
    },
    {
      id: "article-3",
      number: "3",
      title: "Supervision humaine obligatoire",
      icon: UserCheck,
      color: "teal",
      content: "Tous les systèmes d'intelligence artificielle développés et exploités dans RE'ACTIF PRO sont soumis à une supervision humaine effective.",
      conclusion: "Aucune décision impactant le parcours d'une personne ne peut être prise exclusivement par un système automatisé. La responsabilité des décisions demeure humaine."
    },
    {
      id: "article-4",
      number: "4",
      title: "Transparence des systèmes développés",
      icon: Eye,
      color: "blue",
      content: "RE'ACTIF PRO garantit que les utilisateurs des technologies développées sont informés :",
      points: [
        "De l'utilisation de l'intelligence artificielle",
        "De sa finalité",
        "De son rôle",
        "De ses limites"
      ],
      conclusion: "Les systèmes sont conçus pour produire des résultats compréhensibles et explicables."
    },
    {
      id: "article-5",
      number: "5",
      title: "Maîtrise humaine des technologies",
      icon: Users,
      color: "purple",
      content: "Les systèmes développés doivent permettre :",
      points: [
        "L'intervention humaine à tout moment",
        "La correction des résultats",
        "La suspension du système si nécessaire"
      ],
      conclusion: "L'intelligence artificielle doit rester sous contrôle humain permanent."
    },
    {
      id: "article-6",
      number: "6",
      title: "Prévention des biais et équité des systèmes",
      icon: Scale,
      color: "green",
      content: "RE'ACTIF PRO s'engage à concevoir des systèmes visant à réduire les biais et les discriminations.",
      points: [
        "Une vigilance dans la conception",
        "Une évaluation régulière des effets des systèmes",
        "La correction des effets indésirables identifiés"
      ],
      conclusion: "Les technologies doivent favoriser l'équité et l'inclusion."
    },
    {
      id: "article-7",
      number: "7",
      title: "Robustesse, sécurité et fiabilité technique",
      icon: Shield,
      color: "red",
      content: "RE'ACTIF PRO garantit que les systèmes développés répondent à des exigences élevées de :",
      points: [
        "Fiabilité",
        "Sécurité",
        "Stabilité"
      ],
      conclusion: "Des mécanismes de contrôle, de test et d'évaluation sont intégrés dans le cycle de développement."
    },
    {
      id: "article-8",
      number: "8",
      title: "Protection des données et respect de la vie privée",
      icon: Lock,
      color: "cyan",
      content: "Les technologies développées respectent les principes de :",
      points: [
        "Minimisation des données",
        "Limitation des finalités",
        "Protection des informations"
      ],
      conclusion: "Les données sont utilisées uniquement dans le cadre de l'accompagnement."
    },
    {
      id: "article-9",
      number: "9",
      title: "Traçabilité et auditabilité des systèmes",
      icon: FileCheck,
      color: "orange",
      content: "RE'ACTIF PRO met en place des mécanismes permettant de :",
      points: [
        "Documenter le fonctionnement des systèmes",
        "Tracer les recommandations produites",
        "Permettre leur évaluation et leur audit"
      ],
      conclusion: "Cela garantit la responsabilité et la transparence."
    },
    {
      id: "article-10",
      number: "10",
      title: "Responsabilité continue du concepteur",
      icon: Target,
      color: "violet",
      content: "RE'ACTIF PRO assume la responsabilité continue des technologies développées, y compris après leur déploiement.",
      points: [
        "Surveiller les effets des systèmes",
        "Corriger les dysfonctionnements",
        "Améliorer les dispositifs"
      ],
      conclusion: "La responsabilité du concepteur ne s'arrête pas à la mise en service."
    },
    {
      id: "article-11",
      number: "11",
      title: "Gouvernance éthique des technologies",
      icon: Building,
      color: "slate",
      content: "RE'ACTIF PRO met en place une gouvernance éthique encadrant :",
      points: [
        "La conception",
        "Le déploiement",
        "L'utilisation"
      ],
      conclusion: "Cette gouvernance garantit le respect permanent des principes de la présente charte."
    },
    {
      id: "article-12",
      number: "12",
      title: "Principe fondamental de primauté humaine",
      icon: Cpu,
      color: "indigo",
      content: "Les technologies développées dans RE'ACTIF PRO doivent toujours rester au service de l'humain.",
      restrictions: [
        "Ni à la conscience humaine",
        "Ni à la responsabilité humaine",
        "Ni à la liberté humaine"
      ],
      conclusion: "Elle constitue un outil destiné à renforcer la capacité d'agir des personnes."
    }
  ];

  const colorClasses = {
    rose: "bg-rose-100 text-rose-700 border-rose-200",
    amber: "bg-amber-100 text-amber-700 border-amber-200",
    teal: "bg-teal-100 text-teal-700 border-teal-200",
    blue: "bg-blue-100 text-blue-700 border-blue-200",
    purple: "bg-purple-100 text-purple-700 border-purple-200",
    green: "bg-green-100 text-green-700 border-green-200",
    red: "bg-red-100 text-red-700 border-red-200",
    cyan: "bg-cyan-100 text-cyan-700 border-cyan-200",
    orange: "bg-orange-100 text-orange-700 border-orange-200",
    violet: "bg-violet-100 text-violet-700 border-violet-200",
    slate: "bg-slate-100 text-slate-700 border-slate-200",
    indigo: "bg-indigo-100 text-indigo-700 border-indigo-200"
  };

  const iconBgClasses = {
    rose: "bg-rose-500",
    amber: "bg-amber-500",
    teal: "bg-teal-500",
    blue: "bg-blue-500",
    purple: "bg-purple-500",
    green: "bg-green-500",
    red: "bg-red-500",
    cyan: "bg-cyan-500",
    orange: "bg-orange-500",
    violet: "bg-violet-500",
    slate: "bg-slate-500",
    indigo: "bg-indigo-500"
  };

  return (
    <div className="min-h-screen bg-gray-50" data-testid="reactif-charte-ia-page">
      <Navigation />

      {/* Hero Section with Image */}
      <section className="relative pt-20 h-[45vh] min-h-[350px] overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://customer-assets.emergentagent.com/job_b9667b3b-f143-44c0-a669-48155a9ec421/artifacts/fmab74oi_Carrieres_bleu.jpg')`
          }}
        />
        {/* Gradient Overlay - darker at top for navigation readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0b2a55]/90 via-[#1e3a8a]/60 to-[#3730a3]/40" />
        
        {/* Content */}
        <div className="relative h-full flex items-center justify-center">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full mb-6">
              <Brain className="w-4 h-4 text-amber-300" />
              <span className="text-amber-200 text-sm font-semibold">RE'ACTIF PRO - CHARTE IA</span>
            </div>
            
            <p className="text-xl md:text-2xl text-blue-100 max-w-2xl mx-auto">
              Conception, développement et exploitation des technologies d'accompagnement
            </p>
          </div>
        </div>
      </section>

      {/* Logo + Title */}
      <div className="bg-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center">
            <img
              src="https://customer-assets.emergentagent.com/job_98207846-a739-4cf9-bf2a-0022ee971933/artifacts/uvdaganz_40.png"
              alt="RE'ACTIF PRO - Intelligence Professionnelle"
              className="h-28 md:h-36 w-auto mb-4"
              data-testid="reactif-pro-logo"
            />
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2 text-center">Charte éthique de l'intelligence artificielle</h1>
            
            {/* Lien vers charte ALT&ACT */}
            <div className="mt-4 inline-flex items-center gap-3 bg-indigo-50 rounded-xl px-4 py-3 border border-indigo-100">
              <span className="text-indigo-600 text-sm">Cette charte s'inscrit dans le cadre de la</span>
              <button
                onClick={() => navigate('/charte-ethique')}
                className="text-amber-600 hover:text-amber-700 font-semibold text-sm underline underline-offset-2"
              >
                Charte éthique d'ALT&ACT
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col lg:flex-row gap-8">

          {/* Sidebar Navigation */}
          <aside className="hidden lg:block lg:w-72 flex-shrink-0">
            <div className="sticky top-24">
              <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
                <div className="bg-gradient-to-r from-[#1e3a8a] to-[#4f46e5] px-4 py-4">
                  <h3 className="text-white font-bold text-base flex items-center gap-2">
                    <Scroll className="w-5 h-5" />
                    Navigation
                  </h3>
                </div>
                <div className="p-3 max-h-[60vh] overflow-y-auto">
                  {memoItems.map((item) => {
                    const Icon = item.icon;
                    const isActive = activeSection === item.id;
                    return (
                      <button
                        key={item.id}
                        onClick={() => scrollToSection(item.id)}
                        className={`w-full text-left p-2 rounded-lg mb-1 transition-all duration-300 group ${
                          isActive ? 'bg-indigo-50 border-l-4 border-indigo-500' : 'hover:bg-gray-50 border-l-4 border-transparent'
                        }`}
                      >
                        <div className="flex items-center gap-2">
                          <div className={`w-6 h-6 rounded-md ${item.color} flex items-center justify-center flex-shrink-0`}>
                            <Icon className="w-3 h-3 text-white" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <p className={`font-medium text-xs ${isActive ? 'text-indigo-700' : 'text-gray-800'}`}>{item.title}</p>
                            <p className="text-[10px] text-gray-500 truncate">{item.summary}</p>
                          </div>
                          <ChevronRight className={`w-3 h-3 text-gray-400 transition-transform duration-200 ${isActive ? 'translate-x-1 text-indigo-500' : ''}`} />
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
          </aside>

          {/* Main Content */}
          <main className="flex-1 min-w-0 space-y-8">

            {/* Préambule */}
            <div id="preambule" className="bg-gradient-to-r from-[#1e3a8a] via-[#3730a3] to-[#4f46e5] rounded-3xl p-8 md:p-10 text-white">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                  <Brain className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-2xl font-bold">Préambule</h2>
              </div>
              <div className="space-y-4 text-indigo-100">
                <p>RE'ACTIF PRO conçoit, développe et exploite des technologies d'intelligence artificielle destinées à soutenir l'accompagnement professionnel, l'orientation, le développement des compétences et la capacité d'agir des personnes.</p>
                <p>Dans ce cadre, RE'ACTIF PRO assume la <strong className="text-white">responsabilité directe</strong> de la création opérationnelle des systèmes, des dispositifs et des outils utilisant l'intelligence artificielle.</p>
                <p>Cette responsabilité implique une <strong className="text-white">exigence renforcée</strong> en matière d'éthique, de sécurité, de transparence et de protection des personnes.</p>
              </div>
              <div className="mt-6 bg-white/10 rounded-xl p-4 border border-white/20">
                <p className="text-sm text-indigo-100 mb-3">La présente charte établit les principes qui encadrent l'ensemble du cycle de vie des systèmes d'intelligence artificielle :</p>
                <div className="flex flex-wrap gap-2">
                  {['Conception', 'Développement', 'Déploiement', 'Utilisation', 'Évaluation', 'Amélioration continue'].map((phase, index) => (
                    <span key={index} className="px-3 py-1 bg-white/20 rounded-full text-white text-sm font-medium">{phase}</span>
                  ))}
                </div>
              </div>
            </div>

            {/* Articles */}
            {articles.map((article) => {
              const Icon = article.icon;
              return (
                <div key={article.id} id={article.id} className={`bg-white rounded-2xl p-6 md:p-8 shadow-md border-l-4 ${colorClasses[article.color].split(' ')[2]}`}>
                  <div className="flex items-start gap-4 mb-6">
                    <div className={`w-12 h-12 ${iconBgClasses[article.color]} rounded-xl flex items-center justify-center flex-shrink-0`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <span className={`inline-block px-2 py-1 rounded text-xs font-bold mb-1 ${colorClasses[article.color]}`}>
                        ARTICLE {article.number}
                      </span>
                      <h3 className="text-xl font-bold text-gray-900">{article.title}</h3>
                    </div>
                  </div>

                  <p className="text-gray-700 leading-relaxed mb-4">{article.content}</p>

                  {article.restrictions && (
                    <div className="bg-red-50 rounded-xl p-4 mb-4 border border-red-100">
                      <p className="text-sm font-semibold text-red-700 mb-2">Elles ne peuvent en aucun cas être utilisées pour :</p>
                      <ul className="space-y-2">
                        {article.restrictions.map((restriction, idx) => (
                          <li key={idx} className="flex items-center gap-2 text-red-600 text-sm">
                            <span className="w-1.5 h-1.5 bg-red-500 rounded-full"></span>
                            {restriction}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {article.points && (
                    <div className={`${colorClasses[article.color].split(' ')[0]} rounded-xl p-4 mb-4 border ${colorClasses[article.color].split(' ')[2]}`}>
                      <p className="text-sm font-semibold mb-2">Cela implique de concevoir des technologies qui :</p>
                      <ul className="space-y-2">
                        {article.points.map((point, idx) => (
                          <li key={idx} className="flex items-center gap-2 text-sm">
                            <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                            {point}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  <p className="text-gray-800 font-medium italic bg-gray-50 rounded-lg p-3">{article.conclusion}</p>
                </div>
              );
            })}

            {/* Engagement */}
            <div id="engagement" className="bg-gradient-to-r from-amber-500 to-orange-500 rounded-3xl p-8 md:p-10 text-white">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                  <CheckCircle className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-2xl font-bold">Engagement du concepteur et de l'organisation</h2>
              </div>
              <p className="text-amber-100 text-lg leading-relaxed mb-4">
                En concevant et exploitant des technologies d'intelligence artificielle, RE'ACTIF PRO s'engage à respecter les exigences éthiques, techniques et humaines définies dans cette charte.
              </p>
              <p className="text-white font-medium">
                Cet engagement s'applique à l'ensemble des technologies, dispositifs et systèmes développés dans le cadre de ses activités.
              </p>
            </div>

            {/* Statut */}
            <div id="statut" className="bg-gradient-to-r from-[#0b2a55] to-[#1a4280] rounded-3xl p-8 md:p-10 text-white">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                  <FileCheck className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-2xl font-bold">Statut de la charte</h2>
              </div>
              <p className="text-blue-100 text-lg leading-relaxed mb-4">
                Cette charte constitue le <strong className="text-white">cadre de référence éthique</strong> applicable à l'ensemble des activités de conception, de développement et d'exploitation des technologies d'intelligence artificielle de RE'ACTIF PRO.
              </p>
              <p className="text-blue-100">
                Elle s'inscrit dans le respect du <strong className="text-white">cadre réglementaire européen</strong> applicable aux systèmes d'intelligence artificielle.
              </p>

              {/* Lien vers charte ALT&ACT */}
              <div className="mt-6 bg-white/10 rounded-xl p-4 border border-white/20">
                <p className="text-indigo-200 text-sm mb-2">Cette charte est complémentaire et cohérente avec :</p>
                <button
                  onClick={() => navigate('/charte-ethique')}
                  className="inline-flex items-center gap-2 text-amber-300 hover:text-amber-200 font-semibold"
                >
                  <ChevronRight className="w-4 h-4" />
                  La Charte éthique d'ALT&ACT
                </button>
              </div>
            </div>

            {/* CTA */}
            <div className="text-center pt-8">
              <div className="inline-flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => navigate('/reactif-pro/actions')}
                  className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-4 rounded-full font-medium transition-colors"
                >
                  Voir le plan opérationnel
                </button>
                <button
                  onClick={() => navigate('/charte-ethique')}
                  className="border-2 border-indigo-600 text-indigo-600 hover:bg-indigo-600 hover:text-white px-8 py-4 rounded-full font-medium transition-colors"
                >
                  Charte éthique ALT&ACT
                </button>
              </div>
            </div>
          </main>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ReActifProCharteIA;
