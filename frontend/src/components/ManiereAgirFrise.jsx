import React from 'react';
import { ArrowRight } from 'lucide-react';
import { maniereAgir } from '../data/reperes';

const ManiereAgirFrise = ({ dark = false }) => (
  <div data-testid="maniere-agir-frise">
    <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-3">
      {maniereAgir.map((m, i) => (
        <div key={m.etape} className={`relative rounded-2xl p-4 ${dark ? 'bg-white/10 border border-white/15' : 'bg-white border border-gray-100 shadow-sm'}`} data-testid={`etape-${m.etape.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '')}`}>
          <div className={`text-xs font-bold mb-2 ${dark ? 'text-amber-300' : 'text-orange-500'}`}>0{i + 1}</div>
          <div className={`font-bold mb-1 ${dark ? 'text-white' : 'text-gray-900'}`}>{m.etape}</div>
          <p className={`text-xs leading-relaxed ${dark ? 'text-blue-100' : 'text-gray-600'}`}>{m.texte}</p>
          {i < maniereAgir.length - 1 && (
            <ArrowRight className={`hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 w-4 h-4 z-10 ${dark ? 'text-amber-300' : 'text-orange-400'}`} />
          )}
        </div>
      ))}
    </div>
    <p className={`mt-5 text-center text-xs font-semibold tracking-widest uppercase ${dark ? 'text-blue-200' : 'text-gray-500'}`}>
      {maniereAgir.map((m) => m.etape).join(' → ')}
    </p>
  </div>
);

export default ManiereAgirFrise;
