import React from 'react';
import { Heart, Users, Globe, Eye, Shield, Sparkles, HandHeart, Scale } from 'lucide-react';

const PresentationSection = () => {
  return (
    <section id="presentation" className="py-24 bg-white" data-testid="presentation-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#0b2a55]/10 rounded-full mb-4">
            <Eye className="w-4 h-4 text-[#0b2a55]" />
            <span className="text-[#0b2a55] text-sm font-semibold">NOTRE ENGAGEMENT</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            L'insertion sans barrières
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            ALT&ACT accompagne, conseille et oriente les citoyens dans un monde du travail 
            en pleine mutation, en plaçant l'humain au cœur de chaque action.
          </p>
        </div>

        {/* Hero Image + Message Principal */}
        <div className="mb-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Photo équipe diverse */}
            <div className="relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1758873268631-fa944fc5cad2?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NTYxNzV8MHwxfHNlYXJjaHwxfHxkaXZlcnNlJTIwdGVhbSUyMGNvbGxhYm9yYXRpb24lMjB3b3JrcGxhY2UlMjBpbmNsdXNpb258ZW58MHx8fHwxNzcxMTQ3NzYxfDA&ixlib=rb-4.1.0&q=85"
                  alt="Équipe diverse et souriante dans un bureau moderne"
                  className="w-full h-80 md:h-96 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0b2a55]/60 to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6">
                  <p className="text-white text-lg font-semibold">La diversité comme force d'unité</p>
                </div>
              </div>
              {/* Badge flottant */}
              <div className="absolute -bottom-6 -right-6 bg-amber-500 text-white p-4 rounded-2xl shadow-xl hidden md:block">
                <HandHeart className="w-8 h-8" />
              </div>
            </div>

            {/* Message Principal */}
            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-gray-900">
                Un changement de paradigme nécessaire
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                Le monde du travail exige aujourd'hui une transformation profonde. 
                Face aux mutations économiques et sociales, <strong className="text-[#0b2a55]">l'éthique 
                doit reprendre sa place</strong> au cœur des pratiques professionnelles.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                ALT&ACT s'engage à <strong className="text-teal-600">soutenir, conseiller, orienter 
                et faciliter</strong> le parcours de chaque citoyen vers une insertion 
                professionnelle épanouissante et durable.
              </p>
              <div className="flex flex-wrap gap-3 pt-4">
                <span className="px-4 py-2 bg-[#0b2a55]/10 text-[#0b2a55] rounded-full text-sm font-medium">Accompagnement</span>
                <span className="px-4 py-2 bg-teal-100 text-teal-700 rounded-full text-sm font-medium">Orientation</span>
                <span className="px-4 py-2 bg-amber-100 text-amber-700 rounded-full text-sm font-medium">Conseil</span>
              </div>
            </div>
          </div>
        </div>

        {/* Section Diversité & Anti-discrimination */}
        <div className="mb-20 bg-gradient-to-br from-slate-50 to-blue-50 rounded-3xl p-8 md:p-12 border border-slate-200">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Texte */}
            <div className="order-2 lg:order-1">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-100 rounded-full mb-6">
                <Shield className="w-4 h-4 text-purple-600" />
                <span className="text-purple-700 text-sm font-semibold">NOS CONVICTIONS</span>
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">
                Combattre les discriminations, célébrer la diversité
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                Nous luttons contre <strong className="text-gray-900">toutes les formes de discrimination</strong>. 
                La diversité des origines et des cultures n'est pas un obstacle, 
                c'est un <strong className="text-purple-600">enrichissement</strong> et un 
                <strong className="text-purple-600"> facteur d'unité</strong>.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center gap-3 p-4 bg-white rounded-xl shadow-sm">
                  <Scale className="w-6 h-6 text-[#0b2a55]" />
                  <span className="font-medium text-gray-800">Équité</span>
                </div>
                <div className="flex items-center gap-3 p-4 bg-white rounded-xl shadow-sm">
                  <Users className="w-6 h-6 text-teal-500" />
                  <span className="font-medium text-gray-800">Inclusion</span>
                </div>
                <div className="flex items-center gap-3 p-4 bg-white rounded-xl shadow-sm">
                  <Heart className="w-6 h-6 text-rose-500" />
                  <span className="font-medium text-gray-800">Respect</span>
                </div>
                <div className="flex items-center gap-3 p-4 bg-white rounded-xl shadow-sm">
                  <Sparkles className="w-6 h-6 text-amber-500" />
                  <span className="font-medium text-gray-800">Reconnaissance</span>
                </div>
              </div>
            </div>

            {/* Photos inclusives - diversité et handicap */}
            <div className="order-1 lg:order-2 grid grid-cols-2 gap-4">
              <div className="col-span-2 rounded-2xl overflow-hidden shadow-lg">
                <img 
                  src="https://images.unsplash.com/photo-1573497701240-345a300b8d36?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA4Mzl8MHwxfHNlYXJjaHwyfHxkaXZlcnNlJTIwY293b3JrZXJzJTIwZGlzY3Vzc2lvbiUyMG1lZXRpbmclMjBtdWx0aWN1bHR1cmFsfGVufDB8fHx8MTc3MTE0Nzc3MXww&ixlib=rb-4.1.0&q=85"
                  alt="Réunion d'équipe multiculturelle en entreprise"
                  className="w-full h-52 object-cover"
                />
              </div>
              <div className="rounded-2xl overflow-hidden shadow-lg">
                <img 
                  src="https://images.unsplash.com/photo-1757405934467-21fc25c60660?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA4Mzl8MHwxfHNlYXJjaHw0fHxkaXZlcnNlJTIwY29sbGVhZ3VlcyUyMHNtaWxpbmclMjBvZmZpY2UlMjBjb2xsYWJvcmF0aW9ufGVufDB8fHx8MTc3MTE0ODI1N3ww&ixlib=rb-4.1.0&q=85"
                  alt="Collègues qui rient ensemble au bureau"
                  className="w-full h-40 object-cover"
                />
              </div>
              <div className="rounded-2xl overflow-hidden shadow-lg">
                <img 
                  src="https://images.unsplash.com/photo-1642929392581-e7abec90b81c?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjY2NzZ8MHwxfHNlYXJjaHwzfHxtdXNsaW0lMjB3b21hbiUyMHByb2Zlc3Npb25hbCUyMG9mZmljZSUyMGhpamFiJTIwYnVzaW5lc3N8ZW58MHx8fHwxNzcxMTQ3NzcwfDA&ixlib=rb-4.1.0&q=85"
                  alt="Femme voilée professionnelle souriante avec tablette"
                  className="w-full h-40 object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Values Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-8 border border-amber-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
            <div className="w-14 h-14 bg-amber-500 rounded-xl flex items-center justify-center mb-6">
              <Heart className="w-7 h-7 text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Humanisme</h3>
            <p className="text-gray-600">
              L'humain au cœur de chaque action, reconnaissant la dignité et le potentiel de chaque personne.
            </p>
          </div>

          <div className="bg-gradient-to-br from-teal-50 to-emerald-50 rounded-2xl p-8 border border-teal-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
            <div className="w-14 h-14 bg-teal-500 rounded-xl flex items-center justify-center mb-6">
              <Users className="w-7 h-7 text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Inclusion</h3>
            <p className="text-gray-600">
              Une société où chacun trouve sa place, quels que soient son parcours et ses singularités.
            </p>
          </div>

          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 border border-blue-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
            <div className="w-14 h-14 bg-blue-500 rounded-xl flex items-center justify-center mb-6">
              <Globe className="w-7 h-7 text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Impact</h3>
            <p className="text-gray-600">
              Des transformations durables, mesurables et porteuses de sens pour les individus et la société.
            </p>
          </div>

          <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-8 border border-purple-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
            <div className="w-14 h-14 bg-purple-500 rounded-xl flex items-center justify-center mb-6">
              <Eye className="w-7 h-7 text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Éthique</h3>
            <p className="text-gray-600">
              L'intégrité et la transparence comme piliers de notre action et de nos partenariats.
            </p>
          </div>
        </div>

        {/* Bottom Quote */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-[#0b2a55] to-[#1a4280] rounded-3xl p-8 md:p-12 text-white max-w-4xl mx-auto">
            <blockquote className="text-xl md:text-2xl font-medium leading-relaxed mb-4 italic">
              "La diversité des origines et des cultures est notre richesse commune. 
              Elle est facteur d'unité et d'enrichissement mutuel."
            </blockquote>
            <p className="text-blue-200 font-semibold">— ALT&ACT</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PresentationSection;
