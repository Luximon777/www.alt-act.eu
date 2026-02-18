import React from 'react';
import { Target, Clock, Users, TrendingUp, Lightbulb } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Navigation from './Navigation';
import Footer from './Footer';

const ReActifProMission = () => {
  const navigate = useNavigate();

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
              Réduire les délais, valoriser les parcours, créer une société contributive
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
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">Notre Mission</h1>
          </div>

          {/* Objectifs principaux */}
          <div className="max-w-4xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Objectifs clés</h2>
            
            <div className="space-y-6">
              <div className="flex gap-6 items-start p-6 bg-gradient-to-r from-indigo-50 to-violet-50 rounded-2xl border border-indigo-100">
                <div className="w-14 h-14 bg-indigo-600 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Clock className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Accélérer l'accompagnement</h3>
                  <p className="text-gray-600">
                    Réduire drastiquement les délais d'accompagnement vers l'emploi, 
                    en passant d'une logique administrative à une logique d'action rapide et personnalisée.
                  </p>
                </div>
              </div>

              <div className="flex gap-6 items-start p-6 bg-gradient-to-r from-violet-50 to-purple-50 rounded-2xl border border-violet-100">
                <div className="w-14 h-14 bg-violet-600 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Users className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Co-construire avec les citoyens</h3>
                  <p className="text-gray-600">
                    Faire des usagers des co-créateurs des référentiels de compétences, 
                    démocratisant ainsi la reconnaissance du capital humain.
                  </p>
                </div>
              </div>

              <div className="flex gap-6 items-start p-6 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl border border-blue-100">
                <div className="w-14 h-14 bg-blue-600 rounded-xl flex items-center justify-center flex-shrink-0">
                  <TrendingUp className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Créer une économie contributive</h3>
                  <p className="text-gray-600">
                    Transformer le rapport à l'emploi en permettant à chacun de contribuer 
                    activement à la société plutôt que d'être un simple bénéficiaire d'aide.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Pour qui */}
          <div className="bg-gradient-to-br from-slate-50 to-indigo-50 rounded-3xl p-8 md:p-12 max-w-4xl mx-auto mb-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">À qui s'adresse RE'ACTIF PRO ?</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white rounded-xl p-6 shadow-sm border border-indigo-100">
                <h3 className="font-bold text-indigo-600 mb-2">Les individus</h3>
                <p className="text-gray-600 text-sm">
                  Personnes en recherche d'emploi ou en transition, 
                  particulièrement celles aux parcours atypiques.
                </p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-sm border border-indigo-100">
                <h3 className="font-bold text-indigo-600 mb-2">Les services publics</h3>
                <p className="text-gray-600 text-sm">
                  Améliorer l'efficacité et réduire la charge administrative 
                  des services publics de l'emploi.
                </p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-sm border border-indigo-100">
                <h3 className="font-bold text-indigo-600 mb-2">Les entreprises</h3>
                <p className="text-gray-600 text-sm">
                  Accéder à un vivier de talents diversifié, 
                  basé sur la compatibilité humaine.
                </p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-sm border border-indigo-100">
                <h3 className="font-bold text-indigo-600 mb-2">Les territoires</h3>
                <p className="text-gray-600 text-sm">
                  Renforcer la cohésion sociale et optimiser 
                  l'utilisation du capital humain local.
                </p>
              </div>
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

export default ReActifProMission;
