import React, { useEffect } from 'react';
import { UserPlus, Heart, Shield, Users, Globe, Star, CheckCircle, ArrowRight } from 'lucide-react';
import { Button } from './ui/button';
import { useNavigate } from 'react-router-dom';
import Navigation from './Navigation';
import Footer from './Footer';

const DevenirMembrePage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const avantages = [
    { icon: Shield, title: "Soutenir une mission d'intérêt général", description: "Contribuez activement à une société plus inclusive et plus humaine par l'insertion professionnelle." },
    { icon: Users, title: "Intégrer une communauté engagée", description: "Rejoignez un réseau de professionnels et de citoyens partageant les mêmes valeurs d'entraide et de solidarité." },
    { icon: Globe, title: "Participer aux projets de l'association", description: "Impliquez-vous dans les actions concrètes menées par ALT&ACT sur le terrain et au niveau européen." },
    { icon: Star, title: "Accéder aux événements et ressources", description: "Bénéficiez d'invitations aux événements, aux formations et aux ressources exclusives de l'association." },
  ];

  return (
    <div className="min-h-screen bg-gray-50" data-testid="devenir-membre-page">
      <Navigation />

      {/* Hero */}
      <section className="relative pt-32 pb-16 bg-gradient-to-br from-[#0b2a55] via-[#1a4280] to-[#0b2a55] overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 right-10 w-72 h-72 bg-green-400 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 left-10 w-96 h-96 bg-amber-400 rounded-full blur-3xl"></div>
        </div>
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-500/20 rounded-full mb-6">
            <UserPlus className="w-4 h-4 text-green-300" />
            <span className="text-green-300 text-sm font-semibold">DEVENIR MEMBRE</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Rejoignez ALT&ACT
          </h1>
          <p className="text-lg md:text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
            Participez à la construction d'une société plus inclusive et plus humaine en devenant membre de notre association.
          </p>
        </div>
      </section>

      {/* Avantages */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-12">Pourquoi devenir membre ?</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {avantages.map((item, index) => {
              const Icon = item.icon;
              return (
                <div key={index} className="flex gap-5 p-6 bg-gray-50 rounded-2xl border border-gray-100 hover:shadow-lg transition-shadow" data-testid={`avantage-${index}`}>
                  <div className="w-14 h-14 rounded-xl bg-[#0b2a55]/10 flex items-center justify-center flex-shrink-0">
                    <Icon className="w-7 h-7 text-[#0b2a55]" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{item.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Types d'adhésion */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-12">Types d'adhésion</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg border-t-4 border-amber-500 hover:shadow-xl transition-shadow" data-testid="adhesion-sympathisant">
              <Heart className="w-12 h-12 text-amber-500 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Membre sympathisant</h3>
              <p className="text-gray-600 mb-4">Soutenez notre mission et restez informé de nos actions.</p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-500" /> Newsletter et actualités</li>
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-500" /> Invitation aux événements</li>
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-500" /> Droit de vote en AG</li>
              </ul>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-lg border-t-4 border-[#0b2a55] hover:shadow-xl transition-shadow ring-2 ring-[#0b2a55]/20" data-testid="adhesion-actif">
              <Users className="w-12 h-12 text-[#0b2a55] mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Membre actif</h3>
              <p className="text-gray-600 mb-4">Impliquez-vous dans les projets et actions de l'association.</p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-500" /> Tous les avantages sympathisant</li>
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-500" /> Participation aux groupes de travail</li>
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-500" /> Accès à la plateforme Ubuntoo</li>
              </ul>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-lg border-t-4 border-teal-500 hover:shadow-xl transition-shadow" data-testid="adhesion-partenaire">
              <Globe className="w-12 h-12 text-teal-500 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Partenaire</h3>
              <p className="text-gray-600 mb-4">Entreprises et organisations engagées pour l'inclusion.</p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-500" /> Partenariat sur mesure</li>
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-500" /> Co-construction de projets</li>
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-500" /> Visibilité et réseau</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-[#0b2a55] to-[#1a4280] rounded-3xl p-8 md:p-12 text-center text-white">
            <UserPlus className="w-12 h-12 mx-auto mb-4 text-amber-400" />
            <h2 className="text-3xl font-bold mb-4">Prêt à nous rejoindre ?</h2>
            <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
              Pour toute demande d'adhésion ou d'information, contactez-nous directement.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button onClick={() => navigate('/contact')} className="bg-amber-500 hover:bg-amber-600 text-white px-8 py-6 text-lg rounded-full" data-testid="cta-contact">
                Nous contacter
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button onClick={() => window.location.href = 'mailto:contact@altact.org'} variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-[#0b2a55] px-8 py-6 text-lg rounded-full" data-testid="cta-email">
                contact@altact.org
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default DevenirMembrePage;
