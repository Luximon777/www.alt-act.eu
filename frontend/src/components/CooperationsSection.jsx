import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Handshake, ArrowRight, Hammer, Target, Lightbulb } from 'lucide-react';
import { cooperations, colorMap } from '../data/reperes';

export const FicheCooperation = ({ coop, compact = false }) => {
  const c = colorMap[coop.color];
  return (
    <article id={coop.id} className={`bg-white rounded-3xl border ${c.border} overflow-hidden shadow-sm hover:shadow-xl transition-shadow`} data-testid={`cooperation-${coop.id}`}>
      <div className={`${c.bg} px-7 py-5 flex items-center gap-3`}>
        <div className={`w-10 h-10 ${c.iconBg} rounded-xl flex items-center justify-center`}><Handshake className="w-5 h-5 text-white" /></div>
        <h3 className="text-lg font-bold text-gray-900">{coop.categorie}</h3>
      </div>
      <dl className={`p-7 grid gap-5 ${compact ? '' : 'md:grid-cols-3'}`}>
        {[{ icon: Hammer, label: 'Ce que nous construisons ensemble', v: coop.construit }, { icon: Target, label: "L'objectif poursuivi", v: coop.objectif }, { icon: Lightbulb, label: 'Ce que nous apprenons', v: coop.apprentissages }].map(({ icon: Icon, label, v }) => (
          <div key={label}>
            <dt className={`flex items-center gap-2 text-xs font-semibold uppercase tracking-wider ${c.text} mb-2`}><Icon className="w-4 h-4" />{label}</dt>
            <dd className="text-sm text-gray-700 leading-relaxed">{v}</dd>
          </div>
        ))}
      </dl>
    </article>
  );
};

const CooperationsSection = () => {
  const navigate = useNavigate();
  return (
    <section id="cooperer" className="py-24 bg-gray-50" data-testid="cooperations-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#0b2a55]/10 rounded-full mb-4">
              <Handshake className="w-4 h-4 text-[#0b2a55]" />
              <span className="text-[#0b2a55] text-sm font-semibold">UNITÉ</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Coopérer ensemble</h2>
            <p className="text-xl text-gray-600 leading-relaxed">Pas une galerie de logos : pour chaque coopération, ce que nous construisons, l'objectif poursuivi et ce que nous en apprenons.</p>
          </div>
          <button onClick={() => { navigate('/cooperations'); window.scrollTo(0, 0); }} className="inline-flex items-center gap-2 text-[#0b2a55] font-semibold hover:gap-3 transition-all" data-testid="cooperations-voir-tout">
            Toutes nos coopérations <ArrowRight className="w-5 h-5" />
          </button>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cooperations.slice(0, 3).map((coop) => <FicheCooperation key={coop.id} coop={coop} compact />)}
        </div>
      </div>
    </section>
  );
};

export default CooperationsSection;
