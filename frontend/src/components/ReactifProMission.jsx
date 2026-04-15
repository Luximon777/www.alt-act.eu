import React, { useEffect } from 'react';
import { Target, Eye, ShieldCheck, ArrowLeftRight, BarChart3, Heart, ArrowRight } from 'lucide-react';
import { Button } from './ui/button';
import { useNavigate } from 'react-router-dom';
import Navigation from './Navigation';
import Footer from './Footer';

const ReactifProMission = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const missions = [
    {
      icon: Eye,
      title: "Révéler les compétences réelles des individus",
      color: "amber",
      intro: "De nombreuses compétences restent aujourd'hui invisibles ou insuffisamment reconnues. RE'ACTIF PRO vise à permettre à chacun d'identifier, de structurer et de valoriser son identité professionnelle.",
      subtitle: "Le dispositif aide les individus à mieux comprendre :",
      items: [
        "leurs compétences techniques",
        "leurs compétences transversales",
        "leurs talents et leurs aspirations professionnelles"
      ]
    },
    {
      icon: ShieldCheck,
      title: "Sécuriser les trajectoires professionnelles",
      color: "blue",
      intro: "Dans un monde du travail en constante évolution, les parcours professionnels deviennent plus instables. RE'ACTIF PRO permet à chaque personne de conserver une mémoire professionnelle numérique, regroupant l'ensemble de ses compétences et expériences tout au long de sa vie.",
      subtitle: null,
      outro: "Cette approche contribue à construire une véritable sécurité sociale des compétences, permettant aux individus de mieux sécuriser leurs trajectoires professionnelles."
    },
    {
      icon: ArrowLeftRight,
      title: "Faciliter les transitions professionnelles",
      color: "green",
      intro: "Le dispositif vise également à faciliter les mobilités et reconversions professionnelles en identifiant :",
      subtitle: null,
      items: [
        "les passerelles entre métiers",
        "les compétences transférables",
        "les opportunités de formation"
      ],
      outro: "L'objectif est de permettre aux individus de piloter activement leur parcours professionnel."
    },
    {
      icon: BarChart3,
      title: "Produire une intelligence collective des compétences",
      color: "purple",
      intro: "À partir de données anonymisées et agrégées, RE'ACTIF PRO contribue à produire une meilleure compréhension des transformations du travail. Le dispositif permet notamment :",
      items: [
        "d'identifier les compétences émergentes",
        "d'analyser les transitions professionnelles",
        "de mieux anticiper les besoins en compétences"
      ],
      outro: "Ces analyses peuvent constituer un outil d'aide à la décision pour les entreprises, les territoires et les acteurs publics de l'emploi."
    },
    {
      icon: Heart,
      title: "Promouvoir une technologie éthique au service de l'humain",
      color: "rose",
      intro: "Le développement du dispositif repose sur une charte éthique garantissant :",
      items: [
        "la souveraineté des usagers sur leurs données",
        "la transparence des algorithmes",
        "l'absence de discrimination"
      ],
      outro: "ALT&ACT veille ainsi à ce que les technologies numériques et l'intelligence artificielle restent au service de l'humain et de l'intérêt général."
    }
  ];

  const colorMap = {
    amber: { bg: "bg-amber-50", border: "border-amber-500", iconBg: "bg-amber-500", text: "text-amber-700" },
    blue: { bg: "bg-blue-50", border: "border-blue-500", iconBg: "bg-blue-500", text: "text-blue-700" },
    green: { bg: "bg-green-50", border: "border-green-500", iconBg: "bg-green-500", text: "text-green-700" },
    purple: { bg: "bg-purple-50", border: "border-purple-500", iconBg: "bg-purple-500", text: "text-purple-700" },
    rose: { bg: "bg-rose-50", border: "border-rose-500", iconBg: "bg-rose-500", text: "text-rose-700" },
  };

  return (
    <div className="min-h-screen bg-gray-50" data-testid="reactif-pro-mission-page">
      <Navigation />

      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-[#0b2a55] via-[#1a4280] to-[#0b2a55] overflow-hidden">
        <div className="absolute inset-0 opacity-[0.15]">
          <img src="https://images.unsplash.com/photo-1565688527174-775059ac429c?crop=entropy&cs=srgb&fm=jpg&w=1400" alt="" className="w-full h-full object-cover" />
        </div>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-amber-400 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-cyan-400 rounded-full blur-3xl"></div>
        </div>
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-500/20 rounded-full mb-6">
            <Target className="w-4 h-4 text-amber-300" />
            <span className="text-amber-300 text-sm font-semibold">RE'ACTIF PRO — MISSIONS</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Les missions du dispositif
          </h1>
          <p className="text-lg md:text-xl text-blue-100 max-w-4xl mx-auto leading-relaxed">
            Le dispositif RE'ACTIF PRO poursuit plusieurs missions complémentaires au service des citoyens, des entreprises et des territoires.
          </p>
        </div>
      </section>

      {/* Missions */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex gap-8">
            <div className="hidden lg:block flex-shrink-0 sticky top-28 self-start">
              <img src={process.env.PUBLIC_URL + '/logo-reactif-pro.png'} alt="RE'ACTIF PRO" className="w-52 rounded-xl shadow-lg" />
            </div>
            <div className="flex-1 space-y-12">
          {missions.map((mission, index) => {
            const Icon = mission.icon;
            const colors = colorMap[mission.color];
            return (
              <div key={index} className={`${colors.bg} rounded-3xl p-8 md:p-10 border-l-4 ${colors.border}`} data-testid={`mission-${index}`}>
                <div className="flex items-center gap-4 mb-6">
                  <div className={`w-12 h-12 rounded-xl ${colors.iconBg} flex items-center justify-center`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h2 className="text-xl md:text-2xl font-bold text-gray-900">{mission.title}</h2>
                </div>
                <p className="text-gray-700 leading-relaxed mb-4">{mission.intro}</p>
                {mission.subtitle && <p className="text-gray-700 font-medium mb-3">{mission.subtitle}</p>}
                {mission.items && (
                  <ul className="space-y-2 mb-4 ml-4">
                    {mission.items.map((item, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <span className={`w-2 h-2 rounded-full ${colors.iconBg} mt-2 flex-shrink-0`}></span>
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                )}
                {mission.outro && <p className="text-gray-700 leading-relaxed">{mission.outro}</p>}
              </div>
            );
          })}
            </div>
          </div>
        </div>
      </section>
      <section className="py-12 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex flex-col sm:flex-row gap-4">
            <Button onClick={() => navigate('/reactif-pro/presentation')} variant="outline" className="border-[#0b2a55] text-[#0b2a55] hover:bg-[#0b2a55] hover:text-white px-8 py-6 text-lg rounded-full" data-testid="cta-presentation">
              Retour à la présentation
            </Button>
            <Button onClick={() => navigate('/reactif-pro/actions')} className="bg-[#0b2a55] hover:bg-[#1a4280] text-white px-8 py-6 text-lg rounded-full" data-testid="cta-actions">
              Découvrir les actions
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ReactifProMission;
