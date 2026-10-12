import React from 'react';
import { Eye, Ear, BookOpen, FlaskConical, Handshake } from 'lucide-react';

const facettes = [
  { icon: Ear, title: "Un espace d'écoute", text: "Un cadre confidentiel et non jugeant pour poser une situation, la comprendre dans sa globalité et respecter les choix de chacun.", color: 'from-amber-50 to-orange-50 border-amber-100', iconBg: 'bg-amber-500' },
  { icon: BookOpen, title: "Un tiers de confiance", text: "Une information compréhensible, des ressources identifiées et une orientation vers l'interlocuteur adapté lorsque c'est nécessaire.", color: 'from-teal-50 to-emerald-50 border-teal-100', iconBg: 'bg-teal-500' },
  { icon: Handshake, title: 'Un lieu de coopération', text: 'Relier personnes, professionnels, entreprises, associations, acteurs publics, chercheurs et territoires qui travaillent trop souvent séparément.', color: 'from-blue-50 to-indigo-50 border-blue-100', iconBg: 'bg-blue-500' },
  { icon: FlaskConical, title: "Un laboratoire d'innovation sociale", text: 'Expérimenter de nouvelles réponses aux ruptures professionnelles et sociales, en observer les effets réels et en partager les enseignements.', color: 'from-purple-50 to-pink-50 border-purple-100', iconBg: 'bg-purple-500' }
];

const PresentationSection = () => {
  return (
    <section id="presentation" className="py-24 bg-white" data-testid="presentation-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#0b2a55]/10 rounded-full mb-4">
            <Eye className="w-4 h-4 text-[#0b2a55]" />
            <span className="text-[#0b2a55] text-sm font-semibold">NOTRE RAISON D'ÊTRE</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Développer les capacités, élargir les possibilités, agir ensemble
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed" data-testid="raison-etre-texte">
            ALT&ACT est une association d'intérêt général et d'innovation sociale. Nous partons des personnes — de leur expérience, de leurs capacités et de leurs possibilités d'action — plutôt que des dispositifs. Notre rôle : rendre les ressources et la connaissance accessibles, développer les capacités d'agir, favoriser des choix éclairés et créer de la coopération.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {facettes.map((f) => {
            const Icon = f.icon;
            return (
              <div key={f.title} className={`bg-gradient-to-br ${f.color} rounded-2xl p-8 border hover:shadow-xl transition-shadow`}>
                <div className={`w-14 h-14 ${f.iconBg} rounded-xl flex items-center justify-center mb-6`}>
                  <Icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{f.title}</h3>
                <p className="text-gray-600">{f.text}</p>
              </div>
            );
          })}
        </div>

        <div className="mt-16">
          <div className="bg-gradient-to-r from-[#0b2a55] to-[#1a4280] rounded-3xl p-8 md:p-12 text-white max-w-4xl ml-auto">
            <blockquote className="text-xl md:text-2xl font-medium leading-relaxed mb-4 italic">
              "Une personne accompagnée ne reste pas définie comme bénéficiaire. Elle devient acteur de son parcours, participant, contributeur et, lorsqu'elle le souhaite, personne ressource pour d'autres."
            </blockquote>
            <p className="text-blue-200 font-semibold">— ALT&ACT</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PresentationSection;
