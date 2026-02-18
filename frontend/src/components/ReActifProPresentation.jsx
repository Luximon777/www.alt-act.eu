import React from 'react';
import { Lightbulb, Users, Shield, Globe, CheckCircle, Scale, Eye, Lock, Building } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Navigation from './Navigation';
import Footer from './Footer';

const ReActifProPresentation = () => {
  const navigate = useNavigate();

  const aiActPrinciples = [
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
    <div className="min-h-screen bg-white" data-testid="reactif-presentation-page">
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
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#1e3a8a]/70 via-[#3730a3]/50 to-transparent" />
        
        {/* Content */}
        <div className="relative h-full flex items-center justify-center">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full mb-6">
              <Lightbulb className="w-4 h-4 text-amber-300" />
              <span className="text-amber-200 text-sm font-semibold">INNOVATION SOCIALE</span>
            </div>
            
            <p className="text-xl md:text-2xl text-blue-100 max-w-2xl mx-auto">
              Transformer l'insertion professionnelle par l'innovation sociale et technologique
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
            <span className="text-orange-500 italic text-lg md:text-xl font-medium">Bientôt service actif</span>
          </div>

          {/* Introduction */}
          <div className="max-w-4xl mx-auto mb-16">
            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              RE'ACTIF PRO est un projet d'innovation sociale et technologique porté par ALT&ACT,
              visant à repenser en profondeur l'accompagnement vers l'emploi en France et en Europe.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Notre ambition : permettre à chaque personne de devenir un contributeur actif de la société,
              en valorisant son potentiel unique au-delà des seuls diplômes.
            </p>
          </div>

          {/* Key Points */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            <div className="bg-gradient-to-br from-indigo-50 to-violet-50 rounded-2xl p-6 border border-indigo-100">
              <div className="w-12 h-12 bg-indigo-600 rounded-xl flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">De bénéficiaire à contributeur</h3>
              <p className="text-gray-600 text-sm">
                Chaque individu devient acteur de son parcours et contributeur à la société.
              </p>
            </div>

            <div className="bg-gradient-to-br from-violet-50 to-purple-50 rounded-2xl p-6 border border-violet-100">
              <div className="w-12 h-12 bg-violet-600 rounded-xl flex items-center justify-center mb-4">
                <Lightbulb className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Valorisation du potentiel</h3>
              <p className="text-gray-600 text-sm">
                Reconnaissance des compétences au-delà des diplômes, incluant les soft skills.
              </p>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-6 border border-blue-100">
              <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center mb-4">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Sécurisation des parcours</h3>
              <p className="text-gray-600 text-sm">
                Accompagnement durable et personnalisé pour des trajectoires professionnelles sûres.
              </p>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-fuchsia-50 rounded-2xl p-6 border border-purple-100">
              <div className="w-12 h-12 bg-purple-600 rounded-xl flex items-center justify-center mb-4">
                <Globe className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Dimension européenne</h3>
              <p className="text-gray-600 text-sm">
                Un projet aligné sur les orientations européennes en matière d'emploi et d'inclusion.
              </p>
            </div>
          </div>

          {/* AI Act Compliance Section - ENCART PRINCIPAL */}
          <div className="mb-16">
            <div className="bg-gradient-to-br from-[#0b2a55] via-[#1e3a8a] to-[#3730a3] rounded-3xl p-8 md:p-12 text-white shadow-2xl border-4 border-amber-400/30">
              {/* Header avec badge */}
              <div className="flex flex-col md:flex-row md:items-center gap-4 mb-8">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-amber-400 rounded-2xl flex items-center justify-center">
                    <Scale className="w-8 h-8 text-[#0b2a55]" />
                  </div>
                  <div>
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-amber-400/20 rounded-full mb-2">
                      <span className="text-amber-300 text-xs font-semibold uppercase tracking-wider">Conformité réglementaire</span>
                    </div>
                    <h2 className="text-2xl md:text-3xl font-bold">
                      Conformité au règlement européen sur l'intelligence artificielle (AI Act)
                    </h2>
                  </div>
                </div>
              </div>

              {/* Introduction */}
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 mb-8 border border-white/20">
                <p className="text-blue-100 leading-relaxed mb-4">
                  RE'ACTIF PRO a été conçu dès son origine selon les principes fondamentaux du règlement européen sur l'intelligence artificielle adopté par l'Union européenne, visant à garantir une <strong className="text-white">intelligence artificielle digne de confiance, centrée sur l'humain et respectueuse des droits fondamentaux</strong>.
                </p>
                <p className="text-blue-100 leading-relaxed">
                  En tant que dispositif mobilisant l'intelligence artificielle dans le domaine de l'accompagnement et de l'orientation professionnelle, RE'ACTIF PRO relève des systèmes considérés comme sensibles, nécessitant un <strong className="text-white">encadrement éthique, une transparence renforcée et une supervision humaine permanente</strong>. Son architecture a été conçue pour répondre structurellement à ces exigences.
                </p>
              </div>

              {/* 5 Principes */}
              <div className="space-y-4">
                {aiActPrinciples.map((principle, index) => {
                  const Icon = principle.icon;
                  return (
                    <div key={index} className="bg-white/5 hover:bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/10 transition-all duration-300">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-amber-400/20 rounded-xl flex items-center justify-center flex-shrink-0">
                          <Icon className="w-6 h-6 text-amber-300" />
                        </div>
                        <div>
                          <h3 className="text-lg font-bold text-white mb-2 flex items-center gap-2">
                            <span className="text-amber-400">{index + 1}.</span> {principle.title}
                          </h3>
                          <p className="text-blue-100 leading-relaxed text-sm">{principle.description}</p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Conclusion institutionnelle */}
              <div className="mt-8 bg-gradient-to-r from-amber-400/20 to-orange-400/20 rounded-2xl p-6 border border-amber-400/30">
                <h3 className="text-xl font-bold text-amber-300 mb-4">Conclusion institutionnelle</h3>
                <p className="text-blue-100 leading-relaxed mb-4">
                  RE'ACTIF PRO constitue un dispositif conforme aux exigences européennes en matière d'intelligence artificielle éthique. Il s'inscrit dans une démarche proactive visant à garantir :
                </p>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
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
                <p className="text-blue-100 leading-relaxed mt-4 italic">
                  Ce positionnement permet à RE'ACTIF PRO de contribuer au développement d'une intelligence artificielle européenne responsable, au service du développement humain et de l'intérêt général.
                </p>
              </div>
            </div>
          </div>

          {/* Vision */}
          <div className="bg-gradient-to-r from-[#1e3a8a] via-[#3730a3] to-[#4f46e5] rounded-3xl p-8 md:p-12 text-white mb-16">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">Notre vision</h2>
            <p className="text-indigo-100 text-lg leading-relaxed mb-6">
              RE'ACTIF PRO incarne une nouvelle approche de l'insertion professionnelle, fondée sur la
              <strong className="text-white"> reconnaissance des capacités humaines</strong> et la
              <strong className="text-white"> valorisation des parcours atypiques</strong>.
            </p>
            <p className="text-indigo-100 text-lg leading-relaxed">
              Nous croyons que chaque personne possède un potentiel unique qui, une fois révélé et structuré,
              peut contribuer de manière significative au bien commun.
            </p>
          </div>

          {/* CTA */}
          <div className="text-center">
            <div className="inline-flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => navigate('/reactif-pro/mission')}
                className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-4 rounded-full font-medium transition-colors"
              >
                Découvrir notre mission
              </button>
              <button
                onClick={() => navigate('/reactif-pro/actions')}
                className="border-2 border-indigo-600 text-indigo-600 hover:bg-indigo-600 hover:text-white px-8 py-4 rounded-full font-medium transition-colors"
              >
                Voir nos actions
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ReActifProPresentation;
