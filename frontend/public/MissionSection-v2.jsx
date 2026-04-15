import React from 'react';
import { Heart, Users, Globe, Shield, Sparkles, TrendingUp } from 'lucide-react';

const MissionSection = () => {
  const convictions = [
    {
      icon: Heart,
      title: "L'utilité sociale se révèle",
      description: "Elle ne se décrète pas. Chaque personne porte en elle une capacité unique de contribution qui demande à être reconnue et structurée."
    },
    {
      icon: Shield,
      title: "L'éthique comme boussole",
      description: "Dans un monde en quête de repères, l'éthique devient une force d'orientation pour conjuguer progrès, justice et confiance."
    },
    {
      icon: Globe,
      title: "Une vision européenne",
      description: "Nous inscrivons notre action dans les dynamiques européennes visant à renforcer l'intégrité, la transparence et la responsabilité collective."
    }
  ];

  const enjeux = [
    { label: "Cohésion sociale", desc: "Une société où chacun trouve sa place est plus forte" },
    { label: "Dignité au travail", desc: "Le travail comme vecteur de reconnaissance" },
    { label: "Transitions sécurisées", desc: "Accompagner le changement sans rupture" },
    { label: "Économie inclusive", desc: "Conjuguer performance et responsabilité" }
  ];

  return (
    <section id="mission" className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#0b2a55]/10 rounded-full mb-4">
            <Sparkles className="w-4 h-4 text-[#0b2a55]" />
            <span className="text-[#0b2a55] text-sm font-semibold">NOS CONVICTIONS</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Contribuer, pas seulement travailler
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            L'insertion professionnelle ne se limite pas à l'accès à un emploi. Elle engage la place de la personne dans la société, sa capacité à contribuer et à construire un parcours porteur de sens.
          </p>
        </div>

        {/* Contexte européen */}
        <div className="mb-16">
          <div className="bg-gradient-to-r from-[#0b2a55] to-[#1a4280] rounded-3xl p-8 md:p-12">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="flex-shrink-0">
                <div className="w-20 h-20 rounded-2xl bg-white/20 flex items-center justify-center">
                  <Globe className="w-10 h-10 text-white" />
                </div>
              </div>
              <div className="text-center md:text-left">
                <h3 className="text-2xl font-bold text-white mb-4">Une perspective européenne</h3>
                <p className="text-blue-100 text-lg leading-relaxed">
                  Dans un contexte où l'Europe cherche à renforcer la cohésion sociale et l'équité face aux mutations du travail, ALT&ACT fait le choix d'une <strong className="text-white">éthique vivante</strong> — une éthique qui éclaire les décisions, structure les pratiques et soutient les transformations durables.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Convictions Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {convictions.map((conviction, index) => {
            const Icon = conviction.icon;
            return (
              <div
                key={index}
                className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-t-4 border-orange-500"
              >
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-orange-500 to-amber-500 flex items-center justify-center mb-6 transform group-hover:scale-110 transition-all duration-300">
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {conviction.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {conviction.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Enjeux */}
        <div className="bg-gray-50 rounded-3xl p-8 md:p-12 mb-16">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Les enjeux que nous portons</h3>
            <p className="text-gray-600">Car une société plus juste n'est pas seulement celle qui protège — c'est celle qui permet à chacun de contribuer.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {enjeux.map((enjeu, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
                <div className="w-10 h-10 rounded-lg bg-[#0b2a55]/10 flex items-center justify-center mb-4">
                  <TrendingUp className="w-5 h-5 text-[#0b2a55]" />
                </div>
                <h4 className="font-bold text-gray-900 mb-2">{enjeu.label}</h4>
                <p className="text-sm text-gray-600">{enjeu.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Citation finale */}
        <div className="text-center">
          <div className="inline-block bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-8 md:p-10 border border-orange-100 max-w-4xl">
            <p className="text-xl md:text-2xl text-gray-800 italic leading-relaxed mb-4">
              "Les organisations qui compteront demain seront celles qui auront su faire de l'éthique non pas une contrainte, mais une boussole."
            </p>
            <p className="text-orange-600 font-semibold">— Notre conviction fondatrice</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionSection;
