import React, { useEffect } from 'react';
import { Zap, UserCheck, Database, Compass, BarChart3, Users, Globe, ArrowRight } from 'lucide-react';
import { Button } from './ui/button';
import { useNavigate } from 'react-router-dom';
import Navigation from './Navigation';
import Footer from './Footer';

const ReactifProActions = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const actions = [
    {
      icon: UserCheck,
      title: "Accompagnement à l'identité professionnelle",
      color: "amber",
      intro: "Le dispositif propose des outils et des méthodes permettant aux individus de mieux comprendre et valoriser leur identité professionnelle. Ces actions peuvent inclure :",
      items: [
        "des ateliers d'analyse de parcours",
        "des dispositifs de valorisation de l'image professionnelle",
        "des méthodes d'identification des compétences"
      ],
      outro: "L'objectif est de permettre à chaque personne de construire un projet professionnel porteur de sens."
    },
    {
      icon: Database,
      title: "Développement du coffre-fort numérique des compétences",
      color: "cyan",
      intro: "RE'ACTIF PRO développe une plateforme numérique permettant à chaque utilisateur de disposer d'un espace personnel sécurisé. Ce coffre-fort numérique permet :",
      items: [
        "de conserver les informations professionnelles",
        "de gérer les accès aux données",
        "de valoriser les compétences auprès des acteurs économiques"
      ]
    },
    {
      icon: Compass,
      title: "Outils d'orientation et de mobilité professionnelle",
      color: "green",
      intro: "Le dispositif développe des outils permettant d'identifier :",
      items: [
        "les métiers compatibles avec un profil",
        "les passerelles entre métiers",
        "les besoins en formation"
      ],
      outro: "Ces outils contribuent à faciliter les reconversions et les transitions professionnelles."
    },
    {
      icon: BarChart3,
      title: "Observatoire des compétences et des transformations du travail",
      color: "purple",
      intro: "RE'ACTIF PRO contribue à produire une analyse des évolutions du marché du travail grâce à l'étude de données anonymisées. Cet observatoire permet de mieux comprendre :",
      items: [
        "les compétences émergentes",
        "les dynamiques sectorielles",
        "les transformations des métiers"
      ]
    },
    {
      icon: Users,
      title: "Animation d'une communauté socio-professionnelle",
      color: "teal",
      intro: "Le dispositif favorise l'entraide entre les individus grâce à une communauté professionnelle fondée sur l'intelligence collective. Inspirée de la philosophie Ubuntu (\"Je suis parce que nous sommes\"), cette communauté encourage :",
      items: [
        "le mentorat",
        "le partage d'expériences",
        "l'accompagnement entre pairs"
      ]
    }
  ];

  const colorMap = {
    amber: { bg: "bg-amber-50", border: "border-amber-500", iconBg: "bg-amber-500" },
    cyan: { bg: "bg-cyan-50", border: "border-cyan-500", iconBg: "bg-cyan-500" },
    green: { bg: "bg-green-50", border: "border-green-500", iconBg: "bg-green-500" },
    purple: { bg: "bg-purple-50", border: "border-purple-500", iconBg: "bg-purple-500" },
    teal: { bg: "bg-teal-50", border: "border-teal-500", iconBg: "bg-teal-500" },
  };

  return (
    <div className="min-h-screen bg-gray-50" data-testid="reactif-pro-actions-page">
      <Navigation />

      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-[#0b2a55] via-[#1a4280] to-[#0b2a55] overflow-hidden">
        <div className="absolute inset-0 opacity-[0.15]">
          <img src="https://images.unsplash.com/photo-1768796370577-c6e8b708b980?crop=entropy&cs=srgb&fm=jpg&w=1400" alt="" className="w-full h-full object-cover" />
        </div>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-green-400 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-amber-400 rounded-full blur-3xl"></div>
        </div>
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-500/20 rounded-full mb-6">
            <Zap className="w-4 h-4 text-green-300" />
            <span className="text-green-300 text-sm font-semibold">RE'ACTIF PRO — ACTIONS</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Les actions mises en oeuvre
          </h1>
          <p className="text-lg md:text-xl text-blue-100 max-w-4xl mx-auto leading-relaxed">
            Pour répondre à ses missions, le dispositif RE'ACTIF PRO déploie plusieurs actions complémentaires.
          </p>
        </div>
      </section>

      {/* Actions */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex gap-8">
            <div className="hidden lg:block flex-shrink-0 sticky top-28 self-start">
              <img src={process.env.PUBLIC_URL + '/logo-reactif-pro.png'} alt="RE'ACTIF PRO" className="w-52 rounded-xl shadow-lg" />
            </div>
            <div className="flex-1 space-y-10">
          {actions.map((action, index) => {
            const Icon = action.icon;
            const colors = colorMap[action.color];
            return (
              <div key={index} className={`${colors.bg} rounded-3xl p-8 md:p-10 border-l-4 ${colors.border}`} data-testid={`action-${index}`}>
                <div className="flex items-center gap-4 mb-6">
                  <div className={`w-12 h-12 rounded-xl ${colors.iconBg} flex items-center justify-center`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h2 className="text-xl md:text-2xl font-bold text-gray-900">{action.title}</h2>
                </div>
                <p className="text-gray-700 leading-relaxed mb-4">{action.intro}</p>
                {action.items && (
                  <ul className="space-y-2 mb-4 ml-4">
                    {action.items.map((item, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <span className={`w-2 h-2 rounded-full ${colors.iconBg} mt-2 flex-shrink-0`}></span>
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                )}
                {action.outro && <p className="text-gray-700 leading-relaxed">{action.outro}</p>}
              </div>
            );
          })}
            </div>
          </div>
        </div>
      </section>

      {/* Vision */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-[#0b2a55] to-[#1a4280] rounded-3xl p-8 md:p-12 text-white text-center">
            <Globe className="w-12 h-12 mx-auto mb-4 text-amber-400" />
            <h2 className="text-2xl md:text-3xl font-bold mb-6">Vision</h2>
            <p className="text-lg text-blue-100 leading-relaxed max-w-3xl mx-auto mb-4">
              RE'ACTIF PRO a vocation à devenir un dispositif structurant pour la valorisation des compétences et la sécurisation des trajectoires professionnelles.
            </p>
            <p className="text-blue-100 leading-relaxed max-w-3xl mx-auto">
              En combinant innovation sociale, technologie éthique et intelligence collective, le projet ambitionne de contribuer à la construction d'un écosystème des compétences plus inclusif, plus transparent et plus humain.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex flex-col sm:flex-row gap-4">
            <Button onClick={() => navigate('/reactif-pro/presentation')} variant="outline" className="border-[#0b2a55] text-[#0b2a55] hover:bg-[#0b2a55] hover:text-white px-8 py-6 text-lg rounded-full" data-testid="cta-presentation">
              Retour à la présentation
            </Button>
            <Button onClick={() => navigate('/reactif-pro/mission')} className="bg-amber-500 hover:bg-amber-600 text-white px-8 py-6 text-lg rounded-full" data-testid="cta-mission">
              Revoir les missions
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ReactifProActions;
