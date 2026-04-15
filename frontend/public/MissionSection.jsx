import React from 'react';
import { Heart, Users, Globe, Compass } from 'lucide-react';
import { missionData } from '../mock/altactData';

const MissionSection = () => {
  const iconMap = {
    Heart: Heart,
    Users: Users,
    Globe: Globe,
    Compass: Compass
  };

  return (
    <section id="mission" className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#0b2a55]/10 rounded-full mb-4">
            <Target className="w-4 h-4 text-[#0b2a55]" />
            <span className="text-[#0b2a55] text-sm font-semibold">NOTRE MISSION</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Pourquoi nous existons
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            {missionData.vision}
          </p>
        </div>

        {/* Conviction centrale */}
        <div className="mb-16 animate-fade-in">
          <div className="bg-gradient-to-r from-[#0b2a55] to-[#1a4280] rounded-3xl p-8 md:p-12 text-center">
            <p className="text-2xl md:text-3xl font-bold text-white leading-relaxed">
              "{missionData.conviction}"
            </p>
          </div>
        </div>

        {/* Valeurs fondatrices */}
        <div className="text-center mb-10">
          <h3 className="text-2xl font-bold text-gray-900">Nos valeurs fondatrices</h3>
        </div>

        {/* Pillars Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {missionData.pillars.map((pillar, index) => {
            const Icon = iconMap[pillar.icon] || Heart;
            return (
              <div
                key={index}
                className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 animate-fade-in-up border-t-4 border-[#0b2a55]"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-[#0b2a55] to-[#1a4280] flex items-center justify-center mb-6 transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {pillar.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Image Section */}
        <div className="relative rounded-3xl overflow-hidden shadow-2xl animate-fade-in">
          <img
            src={missionData.image}
            alt="Équipe Alt&Act en collaboration"
            className="w-full h-[400px] object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0b2a55]/80 to-transparent flex items-end">
            <div className="p-8 text-white">
              <h3 className="text-3xl font-bold mb-2">L'humain au cœur de tout</h3>
              <p className="text-blue-100 text-lg">
                Parce que l'insertion professionnelle ne peut être dissociée de l'estime de soi, de la capacité d'agir et de la participation citoyenne.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Target = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <circle cx="12" cy="12" r="10" strokeWidth="2" />
    <circle cx="12" cy="12" r="6" strokeWidth="2" />
    <circle cx="12" cy="12" r="2" strokeWidth="2" />
  </svg>
);

export default MissionSection;
