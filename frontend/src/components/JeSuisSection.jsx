import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, ShieldAlert } from 'lucide-react';
import { profils, colorMap } from '../data/reperes';

const JeSuisSection = () => {
  const navigate = useNavigate();
  const go = (path) => { navigate(path); window.scrollTo(0, 0); };

  return (
    <section id="je-suis" className="py-24 bg-white" data-testid="je-suis-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Je suis…</h2>
            <p className="text-xl text-gray-600 mb-10 max-w-2xl">Dites-nous d'où vous parlez : nous vous indiquons ce que nous pouvons construire ensemble.</p>
            <div className="grid sm:grid-cols-2 gap-4">
              {profils.map((p) => {
                const Icon = p.icon;
                const c = colorMap[p.color];
                return (
                  <button key={p.id} onClick={() => go(`/agir-avec-vous#${p.id}`)} className={`group text-left ${c.bg} ${c.border} border rounded-2xl p-6 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200`} data-testid={`je-suis-${p.id}`}>
                    <div className="flex items-center gap-3 mb-3">
                      <div className={`w-10 h-10 ${c.iconBg} rounded-lg flex items-center justify-center`}>
                        <Icon className="w-5 h-5 text-white" />
                      </div>
                      <span className="font-bold text-gray-900">{p.label}</span>
                    </div>
                    <p className="text-sm text-gray-600 leading-relaxed">{p.accroche}</p>
                    <span className={`inline-flex items-center gap-1 mt-4 text-sm font-semibold ${c.text}`}>En savoir plus <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" /></span>
                  </button>
                );
              })}
            </div>
          </div>

          <div className="bg-gradient-to-br from-[#0b2a55] to-[#1a4280] rounded-3xl p-8 md:p-10 text-white flex flex-col" data-testid="prevention-teaser">
            <div className="w-14 h-14 bg-white/15 rounded-2xl flex items-center justify-center mb-6">
              <ShieldAlert className="w-7 h-7 text-amber-300" />
            </div>
            <h3 className="text-2xl md:text-3xl font-bold mb-4">Prévenir les ruptures</h3>
            <p className="text-blue-100 leading-relaxed mb-4">Une difficulté professionnelle ou sociale ne devient pas nécessairement une rupture lorsqu'elle peut être identifiée suffisamment tôt.</p>
            <p className="text-blue-100 leading-relaxed mb-8">ALT&ACT développe des espaces d'écoute, d'information, d'orientation et de coopération permettant d'agir en amont, lorsque cela est possible.</p>
            <button onClick={() => go('/prevenir-les-ruptures')} className="mt-auto inline-flex items-center justify-center gap-2 bg-white text-[#0b2a55] font-semibold px-6 py-3 rounded-xl hover:bg-blue-50 transition-colors" data-testid="prevention-teaser-btn">
              Agir en amont <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JeSuisSection;
