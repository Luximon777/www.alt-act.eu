import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Compass, X } from 'lucide-react';
import { reperes, colorMap } from '../data/reperes';

const ALL = ['dignite', 'service', 'universalite', 'unite'];

const routeReperes = {
  '/': ALL,
  '/notre-mission': ['dignite', 'service'],
  '/notre-ambition': ['service', 'unite'],
  '/notre-action': ['service', 'universalite'],
  '/vision-methode': ALL,
  '/mot-president': ['dignite'],
  '/membres': ['unite'],
  '/charte-ethique': ['dignite', 'universalite'],
  '/gouvernance-consultative': ['unite'],
  '/conseils-accompagnement': ['service', 'unite'],
  '/espace-personnel': ['dignite', 'universalite'],
  '/espace-ubuntoo': ['unite'],
  '/contact': ['unite', 'service'],
  '/devenir-membre': ['unite', 'service'],
  '/reactif-pro/presentation': ['dignite', 'universalite'],
  '/reactif-pro/mission': ['service'],
  '/reactif-pro/actions': ['universalite'],
  '/reactif-pro/charte-ia': ['dignite'],
  '/agir-avec-vous': ['service', 'universalite'],
  '/prevenir-les-ruptures': ['service', 'dignite'],
  '/cooperations': ['unite']
};

const homeSections = {
  top: ALL,
  presentation: ['dignite', 'service'],
  reperes: ALL,
  'agir-avec': ['service'],
  'je-suis': ['universalite'],
  cooperer: ['unite'],
  'ils-contribuent': ['dignite'],
  contact: ['unite']
};

const BoussoleReperes = () => {
  const { pathname } = useLocation();
  const [open, setOpen] = useState(false);
  const [section, setSection] = useState('top');

  useEffect(() => {
    if (pathname !== '/') return;
    const ids = Object.keys(homeSections);
    const observer = new IntersectionObserver((entries) => {
      const visible = entries.filter((e) => e.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
      if (visible) setSection(visible.target.id);
    }, { threshold: [0.25, 0.5] });
    ids.forEach((id) => { const el = document.getElementById(id); if (el) observer.observe(el); });
    return () => observer.disconnect();
  }, [pathname]);

  const actifs = pathname === '/' ? homeSections[section] || ALL : routeReperes[pathname];
  if (!actifs) return null;

  return (
    <div className="fixed bottom-5 left-5 z-40 notranslate" translate="no" data-testid="boussole-reperes">
      {open && (
        <div className="mb-3 w-72 bg-white/95 backdrop-blur-md rounded-2xl shadow-2xl border border-gray-100 p-4 animate-fade-in-up" data-testid="boussole-panel">
          <div className="flex items-center justify-between mb-3">
            <p className="text-xs font-semibold uppercase tracking-wider text-gray-500">Ce que cette page incarne</p>
            <button onClick={() => setOpen(false)} className="p-1 rounded-full hover:bg-gray-100" aria-label="Fermer" data-testid="boussole-close"><X className="w-4 h-4 text-gray-500" /></button>
          </div>
          <ul className="space-y-2">
            {reperes.map((r) => {
              const Icon = r.icon;
              const c = colorMap[r.color];
              const on = actifs.includes(r.id);
              return (
                <li key={r.id} className={`flex items-start gap-3 rounded-xl p-2 transition-colors ${on ? c.bg : 'opacity-40'}`} data-testid={`boussole-item-${r.id}`} data-active={on}>
                  <div className={`w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 ${on ? c.iconBg : 'bg-gray-200'}`}><Icon className={`w-4 h-4 ${on ? 'text-white' : 'text-gray-500'}`} /></div>
                  <div>
                    <p className="text-sm font-bold text-gray-900">{r.label}</p>
                    {on && <p className="text-xs text-gray-600 leading-snug">{r.texte}</p>}
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      )}
      <button
        onClick={() => setOpen(!open)}
        className="group flex items-center gap-2 bg-white/90 backdrop-blur-md border border-gray-200 shadow-lg rounded-full pl-2 pr-3 py-1.5 hover:shadow-xl transition-shadow"
        aria-label="Repères de cette page"
        title="Repères de cette page"
        data-testid="boussole-toggle"
      >
        <Compass className="w-4 h-4 text-[#0b2a55] group-hover:rotate-45 transition-transform duration-300" />
        <div className="flex items-center gap-1.5">
          {reperes.map((r) => {
            const on = actifs.includes(r.id);
            const c = colorMap[r.color];
            return <span key={r.id} title={r.label} className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${on ? `${c.iconBg} scale-110` : 'bg-gray-300'}`} data-testid={`boussole-dot-${r.id}`} data-active={on} />;
          })}
        </div>
      </button>
    </div>
  );
};

export default BoussoleReperes;
