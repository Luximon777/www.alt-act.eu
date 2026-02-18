import React from 'react';
import { Lightbulb, Users, Shield, Globe } from 'lucide-react';
import Navigation from './Navigation';
import Footer from './Footer';

const ReActifProPresentation = () => {
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
        <div className="absolute inset-0 bg-gradient-to-r from-[#0b2a55]/80 via-[#1a4280]/60 to-transparent" />
        
        {/* Content */}
        <div className="relative h-full flex items-center justify-center">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full mb-6">
              <Lightbulb className="w-4 h-4 text-amber-300" />
              <span className="text-amber-200 text-sm font-semibold">INNOVATION SOCIALE</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              RE'ACTIF PRO
            </h1>
            
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              Transformer l'insertion professionnelle par l'innovation sociale et technologique
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-6 border border-blue-100">
              <div className="w-12 h-12 bg-[#0b2a55] rounded-xl flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">De bénéficiaire à contributeur</h3>
              <p className="text-gray-600 text-sm">
                Chaque individu devient acteur de son parcours et contributeur à la société.
              </p>
            </div>

            <div className="bg-gradient-to-br from-teal-50 to-emerald-50 rounded-2xl p-6 border border-teal-100">
              <div className="w-12 h-12 bg-teal-500 rounded-xl flex items-center justify-center mb-4">
                <Lightbulb className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Valorisation du potentiel</h3>
              <p className="text-gray-600 text-sm">
                Reconnaissance des compétences au-delà des diplômes, incluant les soft skills.
              </p>
            </div>

            <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-6 border border-amber-100">
              <div className="w-12 h-12 bg-amber-500 rounded-xl flex items-center justify-center mb-4">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Éthique et souveraineté</h3>
              <p className="text-gray-600 text-sm">
                L'usager reste maître de ses données personnelles et de leur utilisation.
              </p>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-6 border border-purple-100">
              <div className="w-12 h-12 bg-purple-500 rounded-xl flex items-center justify-center mb-4">
                <Globe className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Ambition européenne</h3>
              <p className="text-gray-600 text-sm">
                Un déploiement progressif de la France vers l'ensemble de l'Europe.
              </p>
            </div>
          </div>

          {/* Vision Block */}
          <div className="bg-gradient-to-r from-[#0b2a55] to-[#1a4280] rounded-3xl p-8 md:p-12 text-white max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">Une approche humaniste et technologique</h2>
            <p className="text-blue-100 leading-relaxed mb-4">
              RE'ACTIF PRO articule technologies responsables et intelligence collective au service 
              des individus, des entreprises et des territoires.
            </p>
            <p className="text-blue-100 leading-relaxed">
              Notre conviction : l'insertion professionnelle peut devenir un levier d'émancipation 
              collective, où chacun valorise son potentiel unique et participe activement à la 
              définition des compétences de demain.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ReActifProPresentation;
