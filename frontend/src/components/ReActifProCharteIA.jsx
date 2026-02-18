import React from 'react';
import { Shield, Users, Eye, Scale, Building, Lock, CheckCircle, Lightbulb } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Navigation from './Navigation';
import Footer from './Footer';

const ReActifProCharteIA = () => {
  const navigate = useNavigate();

  const charterPrinciples = [
    {
      icon: Users,
      title: "Primauté de la supervision humaine",
      description: "L'intelligence artificielle utilisée dans RE'ACTIF PRO agit exclusivement comme un outil d'aide à l'analyse et à la réflexion. Elle ne produit aucune décision autonome concernant les parcours professionnels. Les recommandations générées sont systématiquement interprétées, contextualisées et validées par un professionnel qualifié ou par l'utilisateur lui-même. La décision finale demeure pleinement humaine."
    },
    {
      icon: Eye,
      title: "Principe de transparence et d'intelligibilité",
      description: "Les utilisateurs sont informés de manière claire de l'utilisation de l'intelligence artificielle, de son rôle, de ses finalités et de ses limites. Les résultats produits sont présentés comme des éléments d'éclairage et non comme des verdicts. Le dispositif vise à renforcer la capacité de discernement des personnes, et non à s'y substituer."
    },
    {
      icon: Scale,
      title: "Prévention des biais et équité de traitement",
      description: "RE'ACTIF PRO a pour objectif de réduire les effets de discrimination et de favoriser l'égalité des opportunités. L'intelligence artificielle est utilisée pour élargir les perspectives professionnelles, valoriser les compétences transférables et soutenir une approche individualisée respectueuse de chaque parcours."
    },
    {
      icon: Building,
      title: "Gouvernance éthique et responsabilité organisationnelle",
      description: "Le dispositif s'inscrit dans la gouvernance éthique portée par ALT&ACT, incluant des mécanismes de supervision, d'évaluation continue et de consultation. Cette gouvernance garantit la conformité aux principes de dignité humaine, de justice, de responsabilité et de service."
    },
    {
      icon: Lock,
      title: "Protection des données et respect des droits fondamentaux",
      description: "RE'ACTIF PRO applique les principes de minimisation des données, de proportionnalité et de protection de la vie privée. Les données sont utilisées exclusivement dans le but d'améliorer l'accompagnement et de soutenir les personnes dans leur développement professionnel."
    }
  ];

  return (
    <div className="min-h-screen bg-white" data-testid="reactif-charte-ia-page">
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
              <Shield className="w-4 h-4 text-amber-300" />
              <span className="text-amber-200 text-sm font-semibold">RE'ACTIF PRO - CHARTE IA</span>
            </div>
            
            <p className="text-xl md:text-2xl text-blue-100 max-w-2xl mx-auto">
              Une intelligence artificielle éthique, responsable et au service de l'humain
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
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">Charte éthique IA</h1>
          </div>

          {/* Introduction */}
          <div className="max-w-4xl mx-auto mb-16">
            <div className="bg-gradient-to-r from-indigo-50 to-violet-50 rounded-2xl p-8 border border-indigo-100">
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                RE'ACTIF PRO a été conçu dès son origine selon les principes fondamentaux du règlement européen 
                sur l'intelligence artificielle (AI Act), visant à garantir une <strong className="text-indigo-600">intelligence artificielle 
                digne de confiance, centrée sur l'humain et respectueuse des droits fondamentaux</strong>.
              </p>
              <p className="text-gray-600 leading-relaxed">
                En tant que dispositif mobilisant l'intelligence artificielle dans le domaine de l'accompagnement 
                et de l'orientation professionnelle, RE'ACTIF PRO relève des systèmes considérés comme sensibles, 
                nécessitant un encadrement éthique, une transparence renforcée et une supervision humaine permanente.
              </p>
            </div>
          </div>

          {/* 5 Principes */}
          <div className="max-w-4xl mx-auto mb-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Nos 5 principes fondamentaux</h2>
            <div className="space-y-4">
              {charterPrinciples.map((principle, index) => {
                const Icon = principle.icon;
                return (
                  <div key={index} className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center flex-shrink-0">
                        <Icon className="w-6 h-6 text-indigo-600" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-gray-900 mb-2 flex items-center gap-2">
                          <span className="text-indigo-600">{index + 1}.</span> {principle.title}
                        </h3>
                        <p className="text-gray-600 leading-relaxed text-sm">{principle.description}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Conclusion */}
          <div className="max-w-4xl mx-auto mb-16">
            <div className="bg-gradient-to-br from-[#0b2a55] via-[#1e3a8a] to-[#3730a3] rounded-3xl p-8 md:p-12 text-white">
              <h3 className="text-xl font-bold text-amber-300 mb-6">Nos engagements</h3>
              <p className="text-blue-100 leading-relaxed mb-6">
                RE'ACTIF PRO s'inscrit dans une démarche proactive visant à garantir :
              </p>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
                {[
                  "La primauté de l'humain",
                  "La transparence des systèmes",
                  "La prévention des discriminations",
                  "La responsabilité organisationnelle",
                  "La protection des droits fondamentaux"
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                    <span className="text-white text-sm font-medium">{item}</span>
                  </div>
                ))}
              </div>
              <p className="text-blue-100 leading-relaxed italic">
                Ce positionnement permet à RE'ACTIF PRO de contribuer au développement d'une intelligence 
                artificielle européenne responsable, au service du développement humain et de l'intérêt général.
              </p>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center">
            <div className="inline-flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => navigate('/reactif-pro/presentation')}
                className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-4 rounded-full font-medium transition-colors"
              >
                Découvrir la présentation
              </button>
              <button
                onClick={() => navigate('/reactif-pro/mission')}
                className="border-2 border-indigo-600 text-indigo-600 hover:bg-indigo-600 hover:text-white px-8 py-4 rounded-full font-medium transition-colors"
              >
                Voir notre mission
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ReActifProCharteIA;
