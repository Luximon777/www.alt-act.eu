import React from 'react';
import { Heart, Users, Globe, Eye } from 'lucide-react';

const PresentationSection = () => {
  return (
    <section id="presentation" className="py-24 bg-white" data-testid="presentation-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#0b2a55]/10 rounded-full mb-4">
            <Eye className="w-4 h-4 text-[#0b2a55]" />
            <span className="text-[#0b2a55] text-sm font-semibold">QUI SOMMES-NOUS</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            L'insertion sans barrières
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            ALT&ACT est une association d'intérêt général qui œuvre pour une société où chaque personne peut révéler son potentiel et contribuer pleinement à la collectivité.
          </p>
        </div>

        {/* Values Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-8 border border-amber-100 hover:shadow-xl transition-shadow">
            <div className="w-14 h-14 bg-amber-500 rounded-xl flex items-center justify-center mb-6">
              <Heart className="w-7 h-7 text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Humanisme</h3>
            <p className="text-gray-600">
              Nous plaçons l'humain au cœur de chaque action, reconnaissant la dignité et le potentiel de chaque personne.
            </p>
          </div>

          <div className="bg-gradient-to-br from-teal-50 to-emerald-50 rounded-2xl p-8 border border-teal-100 hover:shadow-xl transition-shadow">
            <div className="w-14 h-14 bg-teal-500 rounded-xl flex items-center justify-center mb-6">
              <Users className="w-7 h-7 text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Inclusion</h3>
            <p className="text-gray-600">
              Nous croyons en une société où chacun trouve sa place, quels que soient son parcours et ses singularités.
            </p>
          </div>

          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 border border-blue-100 hover:shadow-xl transition-shadow">
            <div className="w-14 h-14 bg-blue-500 rounded-xl flex items-center justify-center mb-6">
              <Globe className="w-7 h-7 text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Impact</h3>
            <p className="text-gray-600">
              Nous agissons pour des transformations durables, mesurables et porteuses de sens pour les individus et la société.
            </p>
          </div>

          <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-8 border border-purple-100 hover:shadow-xl transition-shadow">
            <div className="w-14 h-14 bg-purple-500 rounded-xl flex items-center justify-center mb-6">
              <Eye className="w-7 h-7 text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Éthique</h3>
            <p className="text-gray-600">
              Nous faisons de l'intégrité et de la transparence les piliers de notre action et de nos partenariats.
            </p>
          </div>
        </div>

        {/* Bottom Quote */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-[#0b2a55] to-[#1a4280] rounded-3xl p-8 md:p-12 text-white max-w-4xl mx-auto">
            <blockquote className="text-xl md:text-2xl font-medium leading-relaxed mb-4 italic">
              "Notre conviction : chaque personne porte en elle un potentiel de développement qui, lorsqu'il est reconnu et cultivé, devient une force pour l'ensemble de la collectivité."
            </blockquote>
            <p className="text-blue-200 font-semibold">— ALT&ACT</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PresentationSection;
