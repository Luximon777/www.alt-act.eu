import React from 'react';
import { Compass } from 'lucide-react';
import { reperes, colorMap } from '../data/reperes';

const ReperesSection = () => (
  <section id="reperes" className="py-24 bg-white" data-testid="reperes-section">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mb-16">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#0b2a55]/10 rounded-full mb-4">
          <Compass className="w-4 h-4 text-[#0b2a55]" />
          <span className="text-[#0b2a55] text-sm font-semibold">CE QUI GUIDE NOTRE ACTION</span>
        </div>
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Quatre repères, une même exigence</h2>
        <p className="text-xl text-gray-600 leading-relaxed">
          Ils ne sont pas une doctrine. Ils se lisent dans nos mots, nos pratiques et la relation que nous proposons à chaque personne.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {reperes.map((r, i) => {
          const Icon = r.icon;
          const c = colorMap[r.color];
          return (
            <div key={r.id} className={`${c.bg} ${c.border} border rounded-2xl p-8 hover:shadow-xl hover:-translate-y-1 transition-all duration-300`} style={{ animationDelay: `${i * 0.1}s` }} data-testid={`repere-${r.id}`}>
              <div className={`w-14 h-14 ${c.iconBg} rounded-xl flex items-center justify-center mb-6`}>
                <Icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{r.label}</h3>
              <p className="text-gray-600 leading-relaxed">{r.texte}</p>
            </div>
          );
        })}
      </div>

      <div className="mt-12 flex flex-wrap items-center justify-center gap-3 text-sm font-semibold text-[#0b2a55]" data-testid="contribution-formula">
        {['Dignité', 'Service', 'Universalité', 'Unité'].map((w, i) => (
          <React.Fragment key={w}>
            <span className="px-4 py-2 bg-[#0b2a55]/5 rounded-full">{w}</span>
            {i < 3 && <span className="text-gray-400">+</span>}
          </React.Fragment>
        ))}
        <span className="text-gray-400 mx-1">→</span>
        <span className="px-4 py-2 bg-orange-500 text-white rounded-full">Contribution</span>
      </div>
    </div>
  </section>
);

export default ReperesSection;
