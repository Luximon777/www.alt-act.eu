import React, { useEffect } from 'react';
import { Shield, Lock, Database, Users, Globe, ArrowRight, Cpu, Layers } from 'lucide-react';
import { Button } from './ui/button';
import { useNavigate } from 'react-router-dom';
import Navigation from './Navigation';
import Footer from './Footer';

const ReactifProPresentation = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50" data-testid="reactif-pro-presentation-page">
      <Navigation />

      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-[#0b2a55] via-[#1a4280] to-[#0b2a55] overflow-hidden">
        <div className="absolute inset-0 opacity-[0.15]">
          <img src="https://images.unsplash.com/photo-1758873272000-d3763373f863?crop=entropy&cs=srgb&fm=jpg&w=1400" alt="" className="w-full h-full object-cover" />
        </div>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-400 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-amber-400 rounded-full blur-3xl"></div>
        </div>
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-500/20 rounded-full mb-6">
            <Cpu className="w-4 h-4 text-cyan-300" />
            <span className="text-cyan-300 text-sm font-semibold">RE'ACTIF PRO</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Présentation
          </h1>
          <p className="text-lg md:text-xl text-blue-100 max-w-4xl mx-auto leading-relaxed">
            Un dispositif d'innovation sociale et numérique pour répondre aux transformations profondes du monde du travail.
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-cyan-50 to-blue-50 rounded-3xl p-8 md:p-12 border-l-4 border-cyan-500 mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">RE'ACTIF PRO</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              RE'ACTIF PRO est un dispositif d'innovation sociale et numérique développé par l'association ALT&ACT afin de répondre aux transformations profondes du monde du travail.
            </p>
            <p className="text-gray-700 leading-relaxed mb-6">
              Aujourd'hui, les trajectoires professionnelles deviennent de plus en plus complexes : reconversions, mobilités professionnelles, évolution rapide des métiers et émergence de nouvelles compétences. Dans ce contexte, les outils traditionnels d'orientation et de reconnaissance des compétences montrent leurs limites, car ils reposent encore largement sur une logique centrée sur le diplôme ou l'intitulé de poste.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed font-semibold">
              RE'ACTIF PRO propose une approche différente.
            </p>
          </div>

          {/* Objectif principal */}
          <div className="mb-12">
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Le dispositif vise à <strong className="text-[#0b2a55]">révéler et valoriser les compétences réelles des personnes</strong> afin de leur permettre de construire des trajectoires professionnelles cohérentes et durables.
            </p>
          </div>

          {/* Principe fondamental */}
          <div className="bg-gradient-to-r from-[#0b2a55] to-[#1a4280] rounded-3xl p-8 md:p-12 text-white mb-12">
            <div className="flex items-center gap-3 mb-6">
              <Lock className="w-8 h-8 text-amber-400" />
              <h3 className="text-2xl font-bold">Principe fondamental</h3>
            </div>
            <p className="text-xl text-blue-100 leading-relaxed font-medium text-center">
              L'usager reste propriétaire de ses données et de son identité professionnelle.
            </p>
          </div>

          {/* Coffre-fort numérique */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <Database className="w-8 h-8 text-cyan-600" />
              <h3 className="text-2xl font-bold text-gray-900">Coffre-fort numérique des compétences</h3>
            </div>
            <p className="text-gray-700 leading-relaxed mb-6">
              Chaque utilisateur dispose d'un espace personnel sécurisé – un véritable coffre-fort numérique des compétences – dans lequel il peut conserver et gérer l'ensemble de ses informations professionnelles :
            </p>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 mb-6">
              {['Compétences', 'Expériences', 'Certifications', 'Formations', 'Projets professionnels'].map((item) => (
                <div key={item} className="flex items-center gap-3 bg-cyan-50 rounded-xl px-4 py-3 border border-cyan-100">
                  <Shield className="w-5 h-5 text-cyan-600 flex-shrink-0" />
                  <span className="font-medium text-gray-800">{item}</span>
                </div>
              ))}
            </div>
            <p className="text-gray-700 leading-relaxed">
              L'utilisateur décide lui-même des conditions d'accès à ses informations et peut choisir de partager tout ou partie de ses données avec les acteurs de son choix (entreprises, recruteurs, organismes de formation, partenaires sociaux).
            </p>
          </div>

          {/* Tiers de confiance */}
          <div className="bg-amber-50 rounded-3xl p-8 md:p-12 border border-amber-100 mb-12">
            <div className="flex items-center gap-3 mb-6">
              <Shield className="w-8 h-8 text-amber-600" />
              <h3 className="text-2xl font-bold text-gray-900">Tiers de confiance numérique</h3>
            </div>
            <p className="text-gray-700 leading-relaxed mb-4">
              RE'ACTIF PRO agit ainsi comme un <strong>tiers de confiance numérique</strong> permettant de sécuriser les données professionnelles tout en facilitant les transitions professionnelles.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Le dispositif ne se limite pas à une plateforme numérique : il constitue également un <strong>écosystème d'accompagnement et d'intelligence collective</strong>, visant à renforcer l'autonomie professionnelle des individus et à mieux comprendre les transformations du travail.
            </p>
          </div>

          {/* Vision */}
          <div className="bg-gradient-to-r from-cyan-50 to-blue-50 rounded-3xl p-8 md:p-12 border border-cyan-100 mb-12">
            <div className="flex items-center gap-3 mb-6">
              <Globe className="w-8 h-8 text-[#0b2a55]" />
              <h3 className="text-2xl font-bold text-gray-900">Ambition</h3>
            </div>
            <p className="text-lg text-gray-700 leading-relaxed">
              À terme, RE'ACTIF PRO ambitionne de contribuer à la construction d'une véritable <strong className="text-[#0b2a55]">infrastructure numérique d'intérêt général</strong> dédiée aux compétences et aux trajectoires professionnelles.
            </p>
          </div>

          {/* CTA */}
          <div className="text-center pt-4">
            <div className="inline-flex flex-col sm:flex-row gap-4">
              <Button onClick={() => navigate('/reactif-pro/mission')} className="bg-[#0b2a55] hover:bg-[#1a4280] text-white px-8 py-6 text-lg rounded-full" data-testid="cta-mission">
                Découvrir les missions
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button onClick={() => navigate('/reactif-pro/actions')} variant="outline" className="border-[#0b2a55] text-[#0b2a55] hover:bg-[#0b2a55] hover:text-white px-8 py-6 text-lg rounded-full" data-testid="cta-actions">
                Voir les actions
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ReactifProPresentation;
