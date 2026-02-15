import React, { useEffect, useRef, useState } from 'react';
import { Heart, Users, Globe, Eye, Lightbulb, Target, Sparkles, Building2 } from 'lucide-react';

const useInView = (options = {}) => {
  const ref = useRef(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsInView(true);
        observer.unobserve(entry.target);
      }
    }, { threshold: 0.1, ...options });

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return [ref, isInView];
};

const AnimatedCard = ({ children, delay = 0, className = '' }) => {
  const [ref, isInView] = useInView();
  
  return (
    <div
      ref={ref}
      className={`transform transition-all duration-700 ease-out ${className} ${
        isInView 
          ? 'opacity-100 translate-y-0' 
          : 'opacity-0 translate-y-8'
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

const PresentationSection = () => {
  const [headerRef, headerInView] = useInView();
  const [labRef, labInView] = useInView();
  const [quoteRef, quoteInView] = useInView();

  return (
    <section id="presentation" className="py-24 bg-white" data-testid="presentation-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div 
          ref={headerRef}
          className={`text-center mb-16 transform transition-all duration-700 ease-out ${
            headerInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#0b2a55]/10 rounded-full mb-4">
            <Eye className="w-4 h-4 text-[#0b2a55]" />
            <span className="text-[#0b2a55] text-sm font-semibold">QUI SOMMES-NOUS</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            L'insertion sans barrières
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            ALT&ACT est une association d'intérêt général qui œuvre pour une société où chaque personne peut révéler son potentiel et contribuer pleinement à la collectivité.
          </p>
        </div>

        {/* ALT&ACT Laboratoire d'innovation - Nouveau contenu */}
        <div 
          ref={labRef}
          className={`mb-20 bg-gradient-to-br from-slate-50 to-blue-50 rounded-3xl p-8 md:p-12 border border-slate-200 transform transition-all duration-700 ease-out ${
            labInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-100 rounded-full mb-4">
              <Lightbulb className="w-4 h-4 text-amber-600" />
              <span className="text-amber-700 text-sm font-semibold">LABORATOIRE D'INNOVATION</span>
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-[#0b2a55] mb-4">
              ALT&ACT — Laboratoire d'innovation sociale et technologique fondé sur l'éthique et les valeurs humanistes
            </h3>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Bloc 1: Fondation et valeurs */}
            <AnimatedCard delay={100} className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-[#0b2a55] rounded-lg flex items-center justify-center">
                  <Heart className="w-5 h-5 text-white" />
                </div>
                <h4 className="text-lg font-bold text-gray-900">Fondation et valeurs</h4>
              </div>
              <p className="text-gray-600 leading-relaxed">
                ALT&ACT est un laboratoire d'innovation sociale et technologique fondé sur des valeurs humanistes universelles, affirmant la dignité intrinsèque de chaque personne, le sens du service envers la société et la nécessité de dépasser les préjugés ainsi que toute forme de discrimination. L'association inscrit son action dans une vision du travail considérée comme un espace de contribution, de responsabilité et de développement mutuel, au service à la fois des individus et du progrès collectif.
              </p>
            </AnimatedCard>

            {/* Bloc 2: Dispositifs innovants */}
            <AnimatedCard delay={200} className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-teal-500 rounded-lg flex items-center justify-center">
                  <Target className="w-5 h-5 text-white" />
                </div>
                <h4 className="text-lg font-bold text-gray-900">Dispositifs innovants</h4>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Dans ce cadre, ALT&ACT conçoit, expérimente et déploie des dispositifs innovants visant à accompagner les transformations structurelles du travail et des organisations. Ces dispositifs reposent sur des principes éthiques exigeants, garantissant le respect des personnes, la transparence des pratiques, la responsabilité des acteurs et la recherche d'un équilibre durable entre performance, justice sociale et bien-être.
              </p>
            </AnimatedCard>

            {/* Bloc 3: Nouveaux modèles organisationnels */}
            <AnimatedCard delay={300} className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-purple-500 rounded-lg flex items-center justify-center">
                  <Sparkles className="w-5 h-5 text-white" />
                </div>
                <h4 className="text-lg font-bold text-gray-900">Nouveaux modèles organisationnels</h4>
              </div>
              <p className="text-gray-600 leading-relaxed">
                En articulant innovation sociale, innovation technologique et responsabilité éthique, ALT&ACT contribue à faire émerger de nouveaux modèles organisationnels capables de répondre aux mutations contemporaines du travail. Son approche vise à renforcer la capacité des organisations à évoluer vers des pratiques plus équitables, plus inclusives et plus respectueuses du potentiel humain.
              </p>
            </AnimatedCard>

            {/* Bloc 4: Ambition européenne */}
            <AnimatedCard delay={400} className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-amber-500 rounded-lg flex items-center justify-center">
                  <Building2 className="w-5 h-5 text-white" />
                </div>
                <h4 className="text-lg font-bold text-gray-900">Ambition européenne</h4>
              </div>
              <p className="text-gray-600 leading-relaxed">
                À travers son action, ALT&ACT aspire à devenir une référence à l'échelle européenne dans l'accompagnement éthique des transformations organisationnelles, en soutenant l'émergence d'écosystèmes professionnels fondés sur la confiance, la responsabilité partagée et la contribution au bien commun.
              </p>
            </AnimatedCard>
          </div>
        </div>

        {/* Values Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <AnimatedCard delay={100} className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-8 border border-amber-100 hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
            <div className="w-14 h-14 bg-amber-500 rounded-xl flex items-center justify-center mb-6">
              <Heart className="w-7 h-7 text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Humanisme</h3>
            <p className="text-gray-600">
              Nous plaçons l'humain au cœur de chaque action, reconnaissant la dignité et le potentiel de chaque personne.
            </p>
          </AnimatedCard>

          <AnimatedCard delay={200} className="bg-gradient-to-br from-teal-50 to-emerald-50 rounded-2xl p-8 border border-teal-100 hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
            <div className="w-14 h-14 bg-teal-500 rounded-xl flex items-center justify-center mb-6">
              <Users className="w-7 h-7 text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Inclusion</h3>
            <p className="text-gray-600">
              Nous croyons en une société où chacun trouve sa place, quels que soient son parcours et ses singularités.
            </p>
          </AnimatedCard>

          <AnimatedCard delay={300} className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 border border-blue-100 hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
            <div className="w-14 h-14 bg-blue-500 rounded-xl flex items-center justify-center mb-6">
              <Globe className="w-7 h-7 text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Impact</h3>
            <p className="text-gray-600">
              Nous agissons pour des transformations durables, mesurables et porteuses de sens pour les individus et la société.
            </p>
          </AnimatedCard>

          <AnimatedCard delay={400} className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-8 border border-purple-100 hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
            <div className="w-14 h-14 bg-purple-500 rounded-xl flex items-center justify-center mb-6">
              <Eye className="w-7 h-7 text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Éthique</h3>
            <p className="text-gray-600">
              Nous faisons de l'intégrité et de la transparence les piliers de notre action et de nos partenariats.
            </p>
          </AnimatedCard>
        </div>

        {/* Bottom Quote */}
        <div 
          ref={quoteRef}
          className={`mt-16 text-center transform transition-all duration-700 ease-out ${
            quoteInView ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
          }`}
        >
          <div className="bg-gradient-to-r from-[#0b2a55] to-[#1a4280] rounded-3xl p-8 md:p-12 text-white max-w-4xl mx-auto">
            <blockquote className="text-xl md:text-2xl font-medium leading-relaxed mb-4 italic">
              "Notre conviction : chaque personne porte en elle un potentiel de développement qui, lorsqu'il est reconnu et cultivé, devient une force pour l'ensemble de la collectivité."
            </blockquote>
            <p className="text-blue-200 font-semibold">— ALT&ACT</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PresentationSection;
