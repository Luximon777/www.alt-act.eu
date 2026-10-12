import React from 'react';
import { Quote, Info } from 'lucide-react';
import { temoignages, colorMap } from '../data/reperes';

const TemoignagesSection = ({ compact = false }) => (
  <section id="ils-contribuent" className={`py-24 ${compact ? 'bg-gray-50' : 'bg-white'}`} data-testid="temoignages-section">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mb-12">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Ils contribuent</h2>
        <p className="text-xl text-gray-600 leading-relaxed">Une personne accompagnée ne reste pas définie comme bénéficiaire. Elle devient, lorsqu'elle le souhaite, personne ressource pour d'autres.</p>
      </div>
      <div className="grid md:grid-cols-2 gap-6">
        {temoignages.map((t) => {
          const c = colorMap[t.color];
          return (
            <blockquote key={t.prenom} className={`${c.bg} ${c.border} border rounded-3xl p-8 relative`} data-testid={`temoignage-${t.prenom.toLowerCase()}`}>
              <Quote className={`w-8 h-8 ${c.text} opacity-40 absolute top-6 right-6`} />
              <p className="text-gray-800 text-lg leading-relaxed mb-6 pr-8">« {t.texte} »</p>
              <footer className="flex items-center gap-3">
                <div className={`w-11 h-11 rounded-full ${c.iconBg} text-white font-bold flex items-center justify-center`}>{t.prenom[0]}</div>
                <div>
                  <div className="font-bold text-gray-900">{t.prenom}</div>
                  <div className="text-sm text-gray-600">{t.situation}</div>
                </div>
              </footer>
            </blockquote>
          );
        })}
      </div>
      <p className="mt-6 flex items-start gap-2 text-xs text-gray-500 max-w-3xl" data-testid="temoignages-mention">
        <Info className="w-4 h-4 flex-shrink-0 mt-0.5" />
        <span>Témoignages illustratifs et anonymisés, rédigés à partir de situations types rencontrées. Les prénoms sont fictifs. De véritables retours d'expérience viendront progressivement les compléter.</span>
      </p>
    </div>
  </section>
);

export default TemoignagesSection;
