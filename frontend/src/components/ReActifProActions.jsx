import React from 'react';
import { Zap, Map, Award, Network, Calendar } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Navigation from './Navigation';
import Footer from './Footer';

const ReActifProActions = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white" data-testid="reactif-actions-page">
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
              <Zap className="w-4 h-4 text-amber-300" />
              <span className="text-amber-200 text-sm font-semibold">RE'ACTIF PRO - ACTIONS</span>
            </div>
            
            <p className="text-xl md:text-2xl text-blue-100 max-w-2xl mx-auto">
              Concrétiser l'innovation au service de l'insertion professionnelle
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
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">Nos Actions</h1>
          </div>

          {/* Axes d'action */}
          <div className="max-w-4xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Axes d'innovation</h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-indigo-100 hover:shadow-xl transition-shadow">
                <div className="w-12 h-12 bg-indigo-600 rounded-xl flex items-center justify-center mb-4">
                  <Map className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Cartographie dynamique</h3>
                <p className="text-gray-600 text-sm">
                  Visualiser les opportunités professionnelles et les dynamiques territoriales 
                  pour une meilleure compréhension du marché.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-lg border border-violet-100 hover:shadow-xl transition-shadow">
                <div className="w-12 h-12 bg-violet-600 rounded-xl flex items-center justify-center mb-4">
                  <Award className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Valorisation des compétences</h3>
                <p className="text-gray-600 text-sm">
                  Identifier et structurer les compétences issues de toutes les expériences, 
                  formelles et informelles.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-lg border border-blue-100 hover:shadow-xl transition-shadow">
                <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center mb-4">
                  <Network className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Écosystème connecté</h3>
                <p className="text-gray-600 text-sm">
                  Relier individus, entreprises et acteurs institutionnels dans un environnement 
                  collaboratif et fluide.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-lg border border-purple-100 hover:shadow-xl transition-shadow">
                <div className="w-12 h-12 bg-purple-600 rounded-xl flex items-center justify-center mb-4">
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
          <div className="bg-gradient-to-br from-slate-50 to-indigo-50 rounded-3xl p-8 md:p-12 max-w-4xl mx-auto mb-16">
            <div className="flex items-center gap-3 mb-8">
              <Calendar className="w-6 h-6 text-indigo-600" />
              <h2 className="text-2xl font-bold text-gray-900">Déploiement progressif</h2>
            </div>
            <div className="space-y-4">
              <div className="flex gap-4 items-center">
                <div className="w-3 h-3 bg-indigo-500 rounded-full"></div>
                <div className="flex-1 bg-white rounded-lg p-4 shadow-sm border border-indigo-100">
                  <span className="font-semibold text-indigo-600">Phase 1</span>
                  <span className="text-gray-600 ml-2">— Expérimentation territoriale</span>
                </div>
              </div>
              <div className="flex gap-4 items-center">
                <div className="w-3 h-3 bg-violet-500 rounded-full"></div>
                <div className="flex-1 bg-white rounded-lg p-4 shadow-sm border border-violet-100">
                  <span className="font-semibold text-violet-600">Phase 2</span>
                  <span className="text-gray-600 ml-2">— Déploiement national</span>
                </div>
              </div>
              <div className="flex gap-4 items-center">
                <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                <div className="flex-1 bg-white rounded-lg p-4 shadow-sm border border-purple-100">
                  <span className="font-semibold text-purple-600">Phase 3</span>
                  <span className="text-gray-600 ml-2">— Extension européenne</span>
                </div>
              </div>
            </div>
            <p className="text-gray-500 text-sm mt-6 text-center italic">
              Projet en développement — Lancement progressif prévu
            </p>
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

export default ReActifProActions;
