import React from 'react';
import { ArrowLeft, Zap, Map, Award, Network, Calendar } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const ReActifProActions = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white" data-testid="reactif-actions-page">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-teal-500 via-emerald-500 to-green-600 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-emerald-300 rounded-full blur-3xl"></div>
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
              <Zap className="w-4 h-4 text-white" />
              <span className="text-white text-sm font-medium">RE'ACTIF PRO</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Nos Actions
            </h1>
            <p className="text-xl md:text-2xl text-emerald-100 leading-relaxed">
              Concrétiser l'innovation au service de l'insertion professionnelle
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Axes d'action */}
          <div className="max-w-4xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Axes d'innovation</h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
                <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center mb-4">
                  <Map className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Cartographie dynamique</h3>
                <p className="text-gray-600 text-sm">
                  Visualiser les opportunités professionnelles et les dynamiques territoriales 
                  pour une meilleure compréhension du marché.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
                <div className="w-12 h-12 bg-amber-500 rounded-xl flex items-center justify-center mb-4">
                  <Award className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Valorisation des compétences</h3>
                <p className="text-gray-600 text-sm">
                  Identifier et structurer les compétences issues de toutes les expériences, 
                  formelles et informelles.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
                <div className="w-12 h-12 bg-teal-500 rounded-xl flex items-center justify-center mb-4">
                  <Network className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Écosystème connecté</h3>
                <p className="text-gray-600 text-sm">
                  Relier individus, entreprises et acteurs institutionnels dans un environnement 
                  collaboratif et fluide.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
                <div className="w-12 h-12 bg-purple-500 rounded-xl flex items-center justify-center mb-4">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Anticipation des besoins</h3>
                <p className="text-gray-600 text-sm">
                  Analyser les évolutions des métiers et des compétences pour anticiper 
                  les transformations du travail.
                </p>
              </div>
            </div>
          </div>

          {/* Timeline */}
          <div className="bg-gradient-to-br from-slate-50 to-blue-50 rounded-3xl p-8 md:p-12 max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-8">
              <Calendar className="w-6 h-6 text-[#0b2a55]" />
              <h2 className="text-2xl font-bold text-gray-900">Déploiement progressif</h2>
            </div>
            <div className="space-y-4">
              <div className="flex gap-4 items-center">
                <div className="w-3 h-3 bg-teal-500 rounded-full"></div>
                <div className="flex-1 bg-white rounded-lg p-4 shadow-sm">
                  <span className="font-semibold text-[#0b2a55]">Phase 1</span>
                  <span className="text-gray-600 ml-2">— Expérimentation territoriale</span>
                </div>
              </div>
              <div className="flex gap-4 items-center">
                <div className="w-3 h-3 bg-amber-500 rounded-full"></div>
                <div className="flex-1 bg-white rounded-lg p-4 shadow-sm">
                  <span className="font-semibold text-[#0b2a55]">Phase 2</span>
                  <span className="text-gray-600 ml-2">— Déploiement national</span>
                </div>
              </div>
              <div className="flex gap-4 items-center">
                <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                <div className="flex-1 bg-white rounded-lg p-4 shadow-sm">
                  <span className="font-semibold text-[#0b2a55]">Phase 3</span>
                  <span className="text-gray-600 ml-2">— Extension européenne</span>
                </div>
              </div>
            </div>
            <p className="text-gray-500 text-sm mt-6 text-center italic">
              Projet en développement — Lancement progressif prévu
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ReActifProActions;
