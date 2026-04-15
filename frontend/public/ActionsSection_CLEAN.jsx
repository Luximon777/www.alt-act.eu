import React from 'react';
import { Briefcase, TrendingUp, Building, Heart, GraduationCap, Network, Sparkles } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardDescription } from './ui/card';
import { actionsData } from '../mock/altactData';

const ActionsSection = () => {
  const iconMap = {
    Briefcase: Briefcase,
    TrendingUp: TrendingUp,
    Building: Building,
    Heart: Heart,
    GraduationCap: GraduationCap,
    Network: Network,
    Sparkles: Sparkles
  };

  return (
    <section id="actions" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-orange-100 rounded-full mb-4">
            <Sparkles className="w-4 h-4 text-orange-600" />
            <span className="text-orange-600 text-sm font-semibold">NOS ACTIONS</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Ce que nous faisons
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Des services concrets pour accompagner les personnes et les organisations vers une insertion professionnelle réussie et durable
          </p>
        </div>

        {/* Actions Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {actionsData.map((action, index) => {
            const Icon = iconMap[action.icon] || Briefcase;
            return (
              <Card
                key={index}
                className="group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-2 border-gray-100 hover:border-orange-200 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <div className="w-14 h-14 rounded-xl bg-orange-100 flex items-center justify-center mb-4 transform group-hover:scale-110 group-hover:bg-orange-500 transition-all duration-300">
                    <Icon className="w-7 h-7 text-orange-600 group-hover:text-white transition-colors duration-300" />
                  </div>
                  <CardTitle className="text-xl mb-3">{action.title}</CardTitle>
                  <CardDescription className="text-base leading-relaxed">
                    {action.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            );
          })}
        </div>

        {/* Lien vers Conseils & Accompagnement */}
        <div className="mt-16 text-center animate-fade-in">
          <div className="inline-flex flex-col sm:flex-row items-center gap-6 p-8 bg-gradient-to-r from-[#0b2a55]/5 to-orange-50 rounded-2xl border border-orange-100">
            <div className="text-left">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                Vous êtes une entreprise ?
              </h3>
              <p className="text-gray-600">
                Découvrez nos services de conseil et accompagnement pour le bien-être au travail
              </p>
            </div>
            <a 
              href="#/conseils-accompagnement" 
              className="px-6 py-3 bg-orange-500 text-white rounded-lg font-semibold hover:bg-orange-600 transition-colors duration-200 transform hover:scale-105 whitespace-nowrap"
            >
              En savoir plus
            </a>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 text-center animate-fade-in">
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 p-8 bg-gradient-to-r from-[#0b2a55]/5 to-[#1a4280]/5 rounded-2xl">
            <div className="text-left">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                Besoin d'accompagnement ?
              </h3>
              <p className="text-gray-600">
                Contactez-nous pour discuter de votre projet professionnel
              </p>
            </div>
            <button className="px-6 py-3 bg-[#0b2a55] text-white rounded-lg font-semibold hover:bg-[#1a4280] transition-colors duration-200 transform hover:scale-105 whitespace-nowrap">
              Prendre rendez-vous
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ActionsSection;
