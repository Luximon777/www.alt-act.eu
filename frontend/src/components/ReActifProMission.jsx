import React from 'react';
import { ArrowLeft, Target, Clock, Users, TrendingUp } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const ReActifProMission = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white" data-testid="reactif-mission-page">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-amber-500 via-orange-500 to-rose-500 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-yellow-300 rounded-full blur-3xl"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <button 
            onClick={() => navigate('/')} 
            className="flex items-center gap-2 text-white/80 hover:text-white mb-8 transition-colors"
            data-testid="back-button"
          >
            <ArrowLeft className="w-5 h-5" />
            Retour à l'accueil
          </button>
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full mb-6">
              <Target className="w-4 h-4 text-white" />
              <span className="text-white text-sm font-medium">RE'ACTIF PRO</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Notre Mission
            </h1>
            <p className="text-xl md:text-2xl text-orange-100 leading-relaxed">
              Réduire les délais, valoriser les parcours, créer une société contributive
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Objectifs principaux */}
          <div className="max-w-4xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Objectifs clés</h2>
            
            <div className="space-y-6">
              <div className="flex gap-6 items-start p-6 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl border border-blue-100">
                <div className="w-14 h-14 bg-[#0b2a55] rounded-xl flex items-center justify-center flex-shrink-0">
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

              <div className="flex gap-6 items-start p-6 bg-gradient-to-r from-amber-50 to-orange-50 rounded-2xl border border-amber-100">
                <div className="w-14 h-14 bg-amber-500 rounded-xl flex items-center justify-center flex-shrink-0">
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

              <div className="flex gap-6 items-start p-6 bg-gradient-to-r from-teal-50 to-emerald-50 rounded-2xl border border-teal-100">
                <div className="w-14 h-14 bg-teal-500 rounded-xl flex items-center justify-center flex-shrink-0">
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
          <div className="bg-slate-50 rounded-3xl p-8 md:p-12 max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">À qui s'adresse RE'ACTIF PRO ?</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <h3 className="font-bold text-[#0b2a55] mb-2">Les individus</h3>
                <p className="text-gray-600 text-sm">
                  Personnes en recherche d'emploi ou en transition, 
                  particulièrement celles aux parcours atypiques.
                </p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <h3 className="font-bold text-[#0b2a55] mb-2">Les services publics</h3>
                <p className="text-gray-600 text-sm">
                  Améliorer l'efficacité et réduire la charge administrative 
                  des services publics de l'emploi.
                </p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <h3 className="font-bold text-[#0b2a55] mb-2">Les entreprises</h3>
                <p className="text-gray-600 text-sm">
                  Accéder à un vivier de talents diversifié, 
                  basé sur la compatibilité humaine.
                </p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <h3 className="font-bold text-[#0b2a55] mb-2">Les territoires</h3>
                <p className="text-gray-600 text-sm">
                  Renforcer la cohésion sociale et optimiser 
                  l'utilisation du capital humain local.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ReActifProMission;
