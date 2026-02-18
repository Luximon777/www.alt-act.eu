import React from 'react';
import { Target, Heart, Users, Sparkles, ArrowRight, CheckCircle, Brain, Shield, Eye, UserCheck } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Navigation from './Navigation';
import Footer from './Footer';

const ReActifProMission = () => {
  const navigate = useNavigate();

  const missions = [
    {
      icon: Target,
      title: "Révéler les potentiels",
      description: "Identifier et valoriser les compétences cachées, les talents inexploités et les capacités uniques de chaque individu.",
      color: "indigo"
    },
    {
      icon: Heart,
      title: "Accompagner avec humanité",
      description: "Proposer un accompagnement personnalisé, bienveillant et respectueux des parcours et des temporalités de chacun.",
      color: "violet"
    },
    {
      icon: Users,
      title: "Connecter les acteurs",
      description: "Créer des ponts entre les personnes, les entreprises et les institutions pour favoriser l'insertion durable.",
      color: "purple"
    },
    {
      icon: Sparkles,
      title: "Innover pour l'inclusion",
      description: "Développer des outils et méthodes innovants pour rendre l'insertion professionnelle plus efficace et inclusive.",
      color: "blue"
    }
  ];

  const colorClasses = {
    indigo: { bg: "bg-indigo-100", icon: "bg-indigo-600", border: "border-indigo-200" },
    violet: { bg: "bg-violet-100", icon: "bg-violet-600", border: "border-violet-200" },
    purple: { bg: "bg-purple-100", icon: "bg-purple-600", border: "border-purple-200" },
    blue: { bg: "bg-blue-100", icon: "bg-blue-600", border: "border-blue-200" }
  };

  const iaCapabilities = [
    "Révéler les compétences et les potentiels",
    "Identifier de nouvelles perspectives professionnelles",
    "Structurer la réflexion et soutenir les prises de décision",
    "Renforcer la confiance et la capacité d'agir"
  ];

  const iaGuarantees = [
    { icon: UserCheck, text: "Une supervision humaine permanente" },
    { icon: Eye, text: "Une transparence dans l'utilisation de l'intelligence artificielle" },
    { icon: Heart, text: "Le respect de la dignité et de l'unicité de chaque personne" },
    { icon: Shield, text: "Une approche équitable, sans discrimination" }
  ];

  return (
    <div className="min-h-screen bg-white" data-testid="reactif-mission-page">
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
              <Target className="w-4 h-4 text-amber-300" />
              <span className="text-amber-200 text-sm font-semibold">RE'ACTIF PRO - MISSION</span>
            </div>
            
            <p className="text-xl md:text-2xl text-blue-100 max-w-2xl mx-auto">
              Transformer l'approche de l'insertion en plaçant l'humain et ses capacités au centre de tout.
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Logo RE'ACTIF PRO en début de partie blanche */}
          <div className="flex flex-col items-center mb-12">
            <img
              src="https://customer-assets.emergentagent.com/job_98207846-a739-4cf9-bf2a-0022ee971933/artifacts/uvdaganz_40.png"
              alt="RE'ACTIF PRO - Intelligence Professionnelle"
              className="h-28 md:h-36 w-auto mb-4"
              data-testid="reactif-pro-logo"
            />
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">Une mission d'intelligence professionnelle</h1>
          </div>

          {/* Pourquoi RE'ACTIF PRO */}
          <div className="max-w-4xl mx-auto mb-16 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Pourquoi RE'ACTIF PRO ?</h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              Face aux mutations du monde du travail et aux défis de l'inclusion, RE'ACTIF PRO propose
              une approche novatrice qui réconcilie performance économique et responsabilité sociale.
            </p>
          </div>

          {/* 4 Missions */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {missions.map((mission, index) => {
              const Icon = mission.icon;
              const colors = colorClasses[mission.color];
              return (
                <div
                  key={index}
                  className={`${colors.bg} rounded-2xl p-8 border ${colors.border} hover:shadow-lg transition-shadow`}
                >
                  <div className={`w-14 h-14 ${colors.icon} rounded-2xl flex items-center justify-center mb-6`}>
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{mission.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{mission.description}</p>
                </div>
              );
            })}
          </div>

          {/* Encart IA Éthique */}
          <div className="mb-16">
            <div className="bg-gradient-to-br from-teal-600 via-cyan-600 to-blue-600 rounded-3xl p-8 md:p-12 text-white shadow-2xl border-4 border-teal-300/30">
              {/* Header avec badge */}
              <div className="flex flex-col md:flex-row md:items-center gap-4 mb-8">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center">
                    <Brain className="w-8 h-8 text-teal-600" />
                  </div>
                  <div>
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/20 rounded-full mb-2">
                      <span className="text-teal-100 text-xs font-semibold uppercase tracking-wider">IA Responsable</span>
                    </div>
                    <h2 className="text-2xl md:text-3xl font-bold">
                      Une intelligence artificielle éthique, au service de la personne
                    </h2>
                  </div>
                </div>
              </div>

              {/* Citation principale */}
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 mb-8 border border-white/20">
                <p className="text-xl md:text-2xl text-white font-medium text-center italic">
                  "RE'ACTIF PRO utilise l'intelligence artificielle comme un outil d'éclairage, et non comme un outil de décision."
                </p>
              </div>

              {/* Introduction */}
              <p className="text-teal-100 leading-relaxed mb-8 text-lg">
                Conformément au cadre défini par l'Union européenne, l'intelligence artificielle intégrée dans RE'ACTIF PRO respecte un principe fondamental : <strong className="text-white">la technologie est au service de la personne, et non l'inverse</strong>.
              </p>

              {/* Ce que permet l'IA */}
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 mb-6 border border-white/20">
                <h3 className="text-lg font-bold text-white mb-4">L'intelligence artificielle permet de :</h3>
                <div className="grid md:grid-cols-2 gap-3">
                  {iaCapabilities.map((capability, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-teal-400/30 rounded-lg flex items-center justify-center flex-shrink-0">
                        <CheckCircle className="w-5 h-5 text-teal-200" />
                      </div>
                      <span className="text-teal-100">{capability}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Message fort */}
              <div className="bg-gradient-to-r from-amber-500/20 to-orange-500/20 rounded-2xl p-6 mb-6 border border-amber-400/30 text-center">
                <p className="text-xl font-bold text-white mb-2">
                  Mais elle ne décide jamais à la place de l'individu.
                </p>
                <p className="text-amber-200 text-lg italic">
                  Chaque personne reste pleinement actrice de son parcours.
                </p>
              </div>

              {/* Garanties */}
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 mb-6 border border-white/20">
                <h3 className="text-lg font-bold text-white mb-4">RE'ACTIF PRO garantit :</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {iaGuarantees.map((guarantee, index) => {
                    const Icon = guarantee.icon;
                    return (
                      <div key={index} className="flex items-center gap-3 bg-white/5 rounded-xl p-4">
                        <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center flex-shrink-0">
                          <Icon className="w-5 h-5 text-white" />
                        </div>
                        <span className="text-white font-medium">{guarantee.text}</span>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Conclusion */}
              <div className="text-center">
                <p className="text-teal-100 leading-relaxed text-lg italic">
                  L'intelligence artificielle devient ainsi un <strong className="text-white">outil d'émancipation</strong>, qui aide chacun à mieux se connaître, à mieux comprendre ses possibilités, et à construire une trajectoire professionnelle choisie et consciente.
                </p>
              </div>
            </div>
          </div>

          {/* Engagements */}
          <div className="bg-gradient-to-r from-[#1e3a8a] via-[#3730a3] to-[#4f46e5] rounded-3xl p-8 md:p-12 text-white mb-16">
            <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">Nos engagements</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                "Respecter la dignité et l'autonomie de chaque personne",
                "Valoriser les parcours atypiques et les compétences informelles",
                "Promouvoir l'égalité des chances et lutter contre les discriminations",
                "Favoriser l'insertion durable plutôt que le placement rapide",
                "Accompagner les entreprises vers des pratiques plus inclusives",
                "Innover en permanence pour améliorer nos méthodes"
              ].map((engagement, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0 mt-0.5" />
                  <p className="text-indigo-100">{engagement}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Quote */}
          <div className="bg-gradient-to-r from-violet-50 to-indigo-50 rounded-3xl p-8 md:p-12 text-center border border-violet-100 mb-16">
            <Sparkles className="w-12 h-12 text-indigo-600 mx-auto mb-6" />
            <blockquote className="text-xl md:text-2xl text-gray-800 font-medium leading-relaxed mb-4">
              "L'intelligence professionnelle, c'est reconnaître que chaque personne porte en elle
              une capacité unique de contribution à la société."
            </blockquote>
            <p className="text-indigo-600 font-semibold">— RE'ACTIF PRO</p>
          </div>

          {/* CTA */}
          <div className="text-center">
            <div className="inline-flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => navigate('/reactif-pro/actions')}
                className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-4 rounded-full font-medium transition-colors inline-flex items-center gap-2"
              >
                Découvrir nos actions
                <ArrowRight className="w-5 h-5" />
              </button>
              <button
                onClick={() => navigate('/reactif-pro/presentation')}
                className="border-2 border-indigo-600 text-indigo-600 hover:bg-indigo-600 hover:text-white px-8 py-4 rounded-full font-medium transition-colors"
              >
                Retour à la présentation
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ReActifProMission;
