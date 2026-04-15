import React from 'react';
import { Users, ArrowRight, Compass, Heart, Building, Globe, Sparkles, X, Check } from 'lucide-react';
import { Card } from './ui/card';

const ActionsSection = () => {
  const actionsData = [
    {
      public: "Personnes en recherche d'emploi",
      title: "Devenir auteur de sa trajectoire",
      before: "Orienter et prescrire",
      after: "Éveiller et révéler",
      description: "Nous ne cherchons pas à insérer une personne dans un système. Nous l'accompagnons à découvrir sa capacité unique de contribution et à devenir suffisamment solide pour prendre part au monde.",
      icon: Compass,
      color: "from-[#0b2a55] to-[#1a4280]"
    },
    {
      public: "Personnes en transition",
      title: "Traverser sans perdre sa direction",
      before: "Sécuriser un parcours",
      after: "Structurer la personne",
      description: "Les transitions ne se traversent pas avec des outils, mais avec une solidité intérieure. Nous développons la maturité qui permet d'affronter l'incertitude avec autonomie et sens.",
      icon: ArrowRight,
      color: "from-orange-500 to-amber-500"
    },
    {
      public: "Personnes en situation de handicap",
      title: "Talents à valoriser",
      before: "Compenser des limites",
      after: "Révéler des ressources",
      description: "Là où d'autres voient des limites, nous reconnaissons des compétences, des talents et des atouts à valoriser dans une dynamique de participation pleine et entière.",
      icon: Heart,
      color: "from-rose-500 to-pink-500"
    },
    {
      public: "Entreprises et Organisations",
      title: "Espaces de contribution",
      before: "Inclusion par obligation",
      after: "Transformation par conviction",
      description: "Nous accompagnons les organisations à devenir des lieux où chacun peut apporter sa valeur unique — pas seulement des structures qui intègrent, mais des espaces qui font grandir.",
      icon: Building,
      color: "from-teal-500 to-emerald-500"
    },
    {
      public: "Territoires et Partenaires",
      title: "Architectes du développement humain",
      before: "Coordonner des dispositifs",
      after: "Créer des écosystèmes de maturation",
      description: "Nous bâtissons avec les acteurs locaux des espaces capables de redonner du sens, de soutenir la responsabilité et de former des adultes capables de contribuer.",
      icon: Globe,
      color: "from-purple-500 to-violet-500"
    }
  ];

  return (
    <section id="actions" className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-orange-100 rounded-full mb-4">
            <Sparkles className="w-4 h-4 text-orange-600" />
            <span className="text-orange-600 text-sm font-semibold">NOS ENGAGEMENTS</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Un changement de paradigme
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Nous ne cherchons pas à insérer des personnes dans un système existant — nous les accompagnons à devenir suffisamment solides pour y contribuer et parfois, pour participer à son évolution.
          </p>
        </div>

        {/* Paradigm shift banner */}
        <div className="mb-16 p-6 md:p-8 bg-gradient-to-r from-[#0b2a55] to-[#1a4280] rounded-2xl text-white text-center">
          <p className="text-lg md:text-xl font-medium mb-4">
            De l'insertion à la contribution
          </p>
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8">
            <div className="flex items-center gap-2 text-blue-200">
              <X className="w-5 h-5 text-red-400" />
              <span>Former — Adapter — Placer</span>
            </div>
            <ArrowRight className="w-6 h-6 text-orange-400 hidden md:block" />
            <div className="flex items-center gap-2 text-white font-semibold">
              <Check className="w-5 h-5 text-green-400" />
              <span>Éveiller — Structurer — Contribuer</span>
            </div>
          </div>
        </div>

        {/* Actions Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {actionsData.map((action, index) => {
            const Icon = action.icon;
            return (
              <Card
                key={index}
                className="group relative overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
              >
                {/* Gradient header */}
                <div className={`bg-gradient-to-r ${action.color} p-5`}>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="text-white/80 text-sm font-medium">{action.public}</p>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    {action.title}
                  </h3>

                  {/* Paradigm shift contrast */}
                  <div className="mb-4 p-4 bg-gray-50 rounded-xl space-y-2">
                    <div className="flex items-start gap-2">
                      <X className="w-4 h-4 text-red-400 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-500 text-sm line-through">{action.before}</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-800 text-sm font-semibold">{action.after}</span>
                    </div>
                  </div>

                  <p className="text-gray-600 leading-relaxed text-sm">
                    {action.description}
                  </p>
                </div>
              </Card>
            );
          })}
        </div>

        {/* Bottom quote */}
        <div className="mt-16 text-center">
          <div className="inline-block p-8 bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl border border-orange-100 max-w-3xl">
            <p className="text-xl text-gray-800 italic leading-relaxed mb-4">
              "Accompagner ne consiste pas à intégrer une personne dans un système, mais à l'aider à devenir suffisamment structurée pour contribuer à son évolution."
            </p>
            <p className="text-orange-600 font-semibold">— Notre conviction</p>
          </div>
        </div>

        {/* CTA sections */}
        <div className="mt-16 grid md:grid-cols-2 gap-8">
          {/* Lien vers Conseils et Accompagnement */}
          <div className="p-8 bg-gradient-to-r from-[#0b2a55]/5 to-orange-50 rounded-2xl border border-orange-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">
              Vous êtes une entreprise ?
            </h3>
            <p className="text-gray-600 mb-6">
              Découvrez comment transformer votre organisation en espace de contribution
            </p>
            <a 
              href="#/conseils-accompagnement" 
              className="inline-flex items-center gap-2 px-6 py-3 bg-orange-500 text-white rounded-lg font-semibold hover:bg-orange-600 transition-colors duration-200"
            >
              En savoir plus
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          {/* Contact CTA */}
          <div className="p-8 bg-gradient-to-r from-[#0b2a55]/5 to-[#1a4280]/5 rounded-2xl border border-[#0b2a55]/10">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">
              Besoin d'accompagnement ?
            </h3>
            <p className="text-gray-600 mb-6">
              Échangeons sur votre parcours et vos aspirations
            </p>
            <button className="inline-flex items-center gap-2 px-6 py-3 bg-[#0b2a55] text-white rounded-lg font-semibold hover:bg-[#1a4280] transition-colors duration-200">
              Prendre rendez-vous
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ActionsSection;
