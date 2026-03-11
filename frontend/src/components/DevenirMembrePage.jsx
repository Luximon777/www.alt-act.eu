import React, { useEffect, useState } from 'react';
import { UserPlus, Users, Heart, Target, GraduationCap, Send } from 'lucide-react';
import { Button } from './ui/button';
import Navigation from './Navigation';
import Footer from './Footer';

const DevenirMembrePage = () => {
  const [adhesionType, setAdhesionType] = useState('actif');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const avantages = [
    { icon: Users, title: "Rejoindre une communauté", description: "Intégrez un réseau de professionnels engagés pour le développement humain." },
    { icon: Target, title: "Contribuer à notre mission", description: "Participez activement à révéler et structurer les potentiels humains." },
    { icon: Heart, title: "Partager des valeurs", description: "Vivez notre charte éthique au quotidien avec des personnes qui partagent vos convictions." },
    { icon: GraduationCap, title: "Développer vos compétences", description: "Bénéficiez de formations et d'accompagnements personnalisés." },
  ];

  return (
    <div className="min-h-screen bg-gray-50" data-testid="devenir-membre-page">
      <Navigation />

      {/* Hero */}
      <section className="relative pt-32 pb-16 bg-gradient-to-br from-[#0b2a55] via-[#1a4280] to-[#0b2a55] overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 right-10 w-72 h-72 bg-green-400 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 left-10 w-96 h-96 bg-amber-400 rounded-full blur-3xl"></div>
        </div>
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-500/20 rounded-full mb-6">
            <UserPlus className="w-4 h-4 text-green-300" />
            <span className="text-green-300 text-sm font-semibold">REJOIGNEZ-NOUS</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Devenez membre d'ALT&ACT
          </h1>
          <p className="text-lg md:text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
            Ensemble, révélons les capacités humaines et construisons une société plus solidaire.
          </p>
        </div>
      </section>

      {/* Pourquoi devenir membre */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-4">Pourquoi devenir membre ?</h2>
          <p className="text-gray-600 text-center mb-12 max-w-3xl mx-auto">
            En rejoignant ALT&ACT, vous participez à une aventure humaine unique centrée sur le développement des potentiels.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {avantages.map((item, index) => {
              const Icon = item.icon;
              return (
                <div key={index} className="text-center p-6 bg-gray-50 rounded-2xl border border-gray-100 hover:shadow-lg transition-shadow" data-testid={`avantage-${index}`}>
                  <div className="w-14 h-14 rounded-xl bg-[#0b2a55]/10 flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-7 h-7 text-[#0b2a55]" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Formulaire d'adhésion */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#0b2a55]/10 rounded-full mb-4">
              <span className="text-[#0b2a55] text-sm font-semibold">FORMULAIRE D'ADHÉSION</span>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Rejoignez notre communauté</h2>
            <p className="text-gray-600">Remplissez le formulaire ci-dessous et nous vous recontacterons.</p>
          </div>

          <div className="bg-white rounded-3xl shadow-xl p-8 md:p-10 border border-gray-100">
            <form className="space-y-6" data-testid="adhesion-form">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="prenom" className="block text-sm font-medium text-gray-700 mb-2">Prénom <span className="text-red-500">*</span></label>
                  <input type="text" id="prenom" className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#0b2a55] focus:border-transparent transition-all" placeholder="Votre prénom" data-testid="adhesion-prenom" />
                </div>
                <div>
                  <label htmlFor="nom" className="block text-sm font-medium text-gray-700 mb-2">Nom <span className="text-red-500">*</span></label>
                  <input type="text" id="nom" className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#0b2a55] focus:border-transparent transition-all" placeholder="Votre nom" data-testid="adhesion-nom" />
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email <span className="text-red-500">*</span></label>
                  <input type="email" id="email" className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#0b2a55] focus:border-transparent transition-all" placeholder="votre@email.com" data-testid="adhesion-email" />
                </div>
                <div>
                  <label htmlFor="telephone" className="block text-sm font-medium text-gray-700 mb-2">Téléphone</label>
                  <input type="tel" id="telephone" className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#0b2a55] focus:border-transparent transition-all" placeholder="Votre téléphone" data-testid="adhesion-telephone" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-3">Type d'adhésion</label>
                <div className="grid md:grid-cols-2 gap-4">
                  <div
                    onClick={() => setAdhesionType('actif')}
                    className={`cursor-pointer p-4 rounded-xl border-2 transition-all ${adhesionType === 'actif' ? 'border-[#0b2a55] bg-[#0b2a55]/5' : 'border-gray-200 hover:border-gray-300'}`}
                    data-testid="adhesion-type-actif"
                  >
                    <p className="font-bold text-gray-900">Membre actif</p>
                    <p className="text-sm text-gray-500">Participation régulière</p>
                  </div>
                  <div
                    onClick={() => setAdhesionType('sympathisant')}
                    className={`cursor-pointer p-4 rounded-xl border-2 transition-all ${adhesionType === 'sympathisant' ? 'border-[#0b2a55] bg-[#0b2a55]/5' : 'border-gray-200 hover:border-gray-300'}`}
                    data-testid="adhesion-type-sympathisant"
                  >
                    <p className="font-bold text-gray-900">Sympathisant</p>
                    <p className="text-sm text-gray-500">Soutien à distance</p>
                  </div>
                </div>
              </div>
              <div>
                <label htmlFor="motivation" className="block text-sm font-medium text-gray-700 mb-2">Motivation <span className="text-red-500">*</span></label>
                <textarea id="motivation" rows={5} className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#0b2a55] focus:border-transparent transition-all resize-none" placeholder="Décrivez vos motivations pour rejoindre ALT&ACT..." data-testid="adhesion-motivation"></textarea>
              </div>
              <Button type="submit" className="w-full bg-[#0b2a55] hover:bg-[#1a4280] text-white py-4 text-lg rounded-xl" data-testid="adhesion-submit">
                <Send className="w-5 h-5 mr-2" />
                Envoyer ma candidature
              </Button>
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default DevenirMembrePage;
