import React from 'react';
import { HandHeart, CheckCircle2 } from 'lucide-react';
import { missions, colorMap } from '../data/reperes';

const AgirAvecSection = () => (
  <section id="agir-avec" className="py-24 bg-gray-50" data-testid="agir-avec-section">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid lg:grid-cols-5 gap-12 items-start mb-20">
        <div className="lg:col-span-2">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-orange-100 rounded-full mb-4">
            <HandHeart className="w-4 h-4 text-orange-600" />
            <span className="text-orange-700 text-sm font-semibold">NOTRE MANIÈRE D'ÊTRE PRÉSENTS</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">Agir avec, <span className="text-orange-500">pas à la place</span></h2>
        </div>
        <div className="lg:col-span-3 bg-white rounded-3xl p-8 md:p-10 shadow-sm border border-gray-100 space-y-4 text-gray-700 text-lg leading-relaxed" data-testid="agir-avec-texte">
          <p>Nous considérons que chaque personne possède une expérience, des capacités et une connaissance de sa propre situation.</p>
          <p>Notre rôle est d'apporter un cadre d'écoute, des ressources, des connaissances, des outils et des mises en relation permettant de mieux comprendre une situation, d'identifier les possibilités existantes et de construire des choix éclairés.</p>
          <p className="font-semibold text-[#0b2a55]">L'accompagnement vise progressivement à renforcer l'autonomie et la capacité d'action.</p>
        </div>
      </div>

      <div className="mb-10">
        <h3 className="text-2xl md:text-3xl font-bold text-gray-900">Nos missions</h3>
        <p className="text-gray-600 mt-2">Quatre façons concrètes d'être utiles, avec les personnes et les organisations.</p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {missions.map((m) => {
          const Icon = m.icon;
          const c = colorMap[m.color];
          return (
            <div key={m.id} className="bg-white rounded-2xl p-7 border border-gray-100 hover:shadow-xl transition-shadow duration-300" data-testid={`mission-${m.id}`}>
              <div className={`w-12 h-12 ${c.iconBg} rounded-xl flex items-center justify-center mb-5`}>
                <Icon className="w-6 h-6 text-white" />
              </div>
              <h4 className="text-lg font-bold text-gray-900 mb-4 leading-snug">{m.title}</h4>
              <ul className="space-y-2">
                {m.items.map((it) => (
                  <li key={it} className="flex items-start gap-2 text-sm text-gray-600">
                    <CheckCircle2 className={`w-4 h-4 mt-0.5 flex-shrink-0 ${c.text}`} />
                    <span>{it}</span>
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>
    </div>
  </section>
);

export default AgirAvecSection;
