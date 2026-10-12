import React, { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { ArrowRight, CheckCircle2, Users } from 'lucide-react';
import { Button } from './ui/button';
import Navigation from './Navigation';
import Footer from './Footer';
import { profils, colorMap } from '../data/reperes';

const AgirAvecVous = () => {
  const navigate = useNavigate();
  const { hash } = useLocation();

  useEffect(() => {
    if (!hash) return;
    const el = document.getElementById(hash.slice(1));
    if (el) setTimeout(() => window.scrollTo({ top: el.offsetTop - 110, behavior: 'smooth' }), 100);
  }, [hash]);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) window.scrollTo({ top: el.offsetTop - 110, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gray-50" data-testid="agir-avec-vous-page">
      <Navigation />

      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <img src="https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?crop=entropy&cs=srgb&fm=jpg&q=85&w=1920&h=600&fit=crop" alt="Personnes en coopération" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-[#0b2a55]/85"></div>
        </div>
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-500/20 rounded-full mb-6">
            <Users className="w-4 h-4 text-amber-400" />
            <span className="text-amber-300 text-sm font-semibold">AGIR AVEC VOUS</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8 leading-tight">Je suis…</h1>
          <p className="text-xl md:text-2xl text-blue-100 max-w-4xl mx-auto leading-relaxed">
            Personne, professionnel, entreprise, association, institution ou chercheur : nous agissons avec vous, jamais à votre place.
          </p>
        </div>
      </section>

      <section className="sticky top-24 z-30 bg-white/90 backdrop-blur border-b border-gray-100" data-testid="profils-nav">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex flex-wrap gap-2 justify-center">
          {profils.map((p) => (
            <button key={p.id} onClick={() => scrollTo(p.id)} className={`px-4 py-2 rounded-full text-sm font-medium ${colorMap[p.color].light} text-gray-800 hover:opacity-80 transition-opacity`} data-testid={`profil-nav-${p.id}`}>
              {p.label}
            </button>
          ))}
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          {profils.map((p, i) => {
            const Icon = p.icon;
            const c = colorMap[p.color];
            return (
              <article key={p.id} id={p.id} className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden" data-testid={`profil-${p.id}`}>
                <div className={`grid lg:grid-cols-5 ${i % 2 ? 'lg:[direction:rtl]' : ''}`}>
                  <div className={`lg:col-span-2 ${c.bg} p-8 md:p-10 flex flex-col justify-center [direction:ltr]`}>
                    <div className={`w-14 h-14 ${c.iconBg} rounded-2xl flex items-center justify-center mb-6`}>
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">{p.label}</h2>
                    <p className={`text-lg font-medium ${c.text}`}>{p.accroche}</p>
                  </div>
                  <div className="lg:col-span-3 p-8 md:p-10 [direction:ltr]">
                    <p className="text-gray-700 leading-relaxed mb-6">{p.texte}</p>
                    <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-500 mb-3">Ce que nous pouvons construire ensemble</h3>
                    <ul className="space-y-2 mb-8">
                      {p.propositions.map((it) => (
                        <li key={it} className="flex items-start gap-2 text-gray-700">
                          <CheckCircle2 className={`w-5 h-5 mt-0.5 flex-shrink-0 ${c.text}`} />
                          <span>{it}</span>
                        </li>
                      ))}
                    </ul>
                    <Button onClick={() => { navigate(p.cta.path); window.scrollTo(0, 0); }} className="bg-[#0b2a55] hover:bg-[#1a4280] text-white rounded-xl" data-testid={`profil-cta-${p.id}`}>
                      {p.cta.label} <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <section className="pb-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-[#0b2a55] to-[#1a4280] rounded-3xl p-8 md:p-12 text-white text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Vous ne vous reconnaissez dans aucune de ces entrées ?</h2>
            <p className="text-blue-100 mb-8">Écrivez-nous simplement. Nous prendrons le temps de comprendre votre situation et, si nécessaire, de vous orienter vers l'interlocuteur adapté.</p>
            <Button onClick={() => { navigate('/contact'); window.scrollTo(0, 0); }} className="bg-white text-[#0b2a55] hover:bg-blue-50 rounded-xl px-8" data-testid="agir-contact-btn">
              Nous contacter <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AgirAvecVous;
