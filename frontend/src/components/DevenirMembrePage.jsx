import React, { useEffect, useState } from 'react';
import { UserPlus, Users, Heart, Target, GraduationCap, Send, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';
import { Button } from './ui/button';
import Navigation from './Navigation';
import Footer from './Footer';

const FORMSPREE_ENDPOINT = 'https://formspree.io/f/xdajwvnq';

const DevenirMembrePage = () => {
  const [adhesionType, setAdhesionType] = useState('actif');
  const [status, setStatus] = useState(null); // null | 'loading' | 'success' | 'error'
  const [errorMsg, setErrorMsg] = useState('');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const avantages = [
    { icon: Users, title: "Rejoindre une communauté", description: "Intégrez un réseau de professionnels engagés pour le développement humain." },
    { icon: Target, title: "Contribuer à notre mission", description: "Participez activement à révéler et structurer les potentiels humains." },
    { icon: Heart, title: "Partager des valeurs", description: "Vivez notre charte éthique au quotidien avec des personnes qui partagent vos convictions." },
    { icon: GraduationCap, title: "Développer vos compétences", description: "Bénéficiez de formations et d'accompagnements personnalisés." },
  ];

  return (
    <div className="min-h-screen bg-gray-50" data-testid="devenir-membre-page">
      <Navigation />

      {/* Hero */}
      <section className="relative pt-32 pb-16 overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1771924368443-1d53147edbd1?crop=entropy&cs=srgb&fm=jpg&ixlib=rb-4.1.0&q=85&w=1920&h=600&fit=crop" 
            alt="Communauté de personnes unies" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-[#0b2a55]/80"></div>
        </div>
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-500/20 rounded-full mb-6">
            <UserPlus className="w-4 h-4 text-green-300" />
            <span className="text-green-300 text-sm font-semibold">REJOIGNEZ-NOUS</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Devenez membre d'ALT&ACT
          </h1>
          <p className="text-lg md:text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
            Ensemble, révélons les capacités humaines et construisons une société plus solidaire.
          </p>
        </div>
      </section>

      {/* Pourquoi devenir membre */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-4">Pourquoi devenir membre ?</h2>
          <p className="text-gray-600 text-center mb-12 max-w-3xl mx-auto">
            En rejoignant ALT&ACT, vous participez à une aventure humaine unique centrée sur le développement des potentiels.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {avantages.map((item, index) => {
              const Icon = item.icon;
              return (
                <div key={index} className="text-center p-6 bg-gray-50 rounded-2xl border border-gray-100 hover:shadow-lg transition-shadow" data-testid={`avantage-${index}`}>
                  <div className="w-14 h-14 rounded-xl bg-[#0b2a55]/10 flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-7 h-7 text-[#0b2a55]" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Formulaire d'adhésion */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#0b2a55]/10 rounded-full mb-4">
              <span className="text-[#0b2a55] text-sm font-semibold">FORMULAIRE D'ADHÉSION</span>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Rejoignez notre communauté</h2>
            <p className="text-gray-600">Remplissez le formulaire ci-dessous et nous vous recontacterons.</p>
          </div>

          <div className="bg-white rounded-3xl shadow-xl p-8 md:p-10 border border-gray-100">
            {status === 'success' ? (
              <div className="flex flex-col items-center justify-center py-12 text-center" data-testid="adhesion-success">
                <CheckCircle className="w-16 h-16 text-green-500 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-2">Demande envoyée !</h3>
                <p className="text-gray-600 mb-6">Nous avons bien reçu votre demande d'adhésion. Nous vous recontacterons rapidement.</p>
                <Button onClick={() => setStatus(null)} className="bg-[#0b2a55] hover:bg-[#1a4280] text-white" data-testid="adhesion-new-request">
                  Envoyer une autre demande
                </Button>
              </div>
            ) : (
            <form
              className="space-y-6"
              data-testid="adhesion-form"
              onSubmit={async (e) => {
                e.preventDefault();
                setStatus('loading');
                setErrorMsg('');
                const form = e.target;
                const payload = {
                  prenom: form.prenom.value,
                  nom: form.nom.value,
                  email: form.email.value,
                  telephone: form.telephone.value || '',
                  type_adhesion: adhesionType,
                  motivation: form.motivation.value,
                  _subject: `Nouvelle demande d'adhésion : ${form.prenom.value} ${form.nom.value}`,
                };
                try {
                  const res = await fetch(FORMSPREE_ENDPOINT, {
                    method: 'POST',
                    headers: {
                      'Content-Type': 'application/json',
                      Accept: 'application/json',
                    },
                    body: JSON.stringify(payload),
                  });
                  if (!res.ok) throw new Error('Erreur serveur');
                  setStatus('success');
                  form.reset();
                } catch (err) {
                  setStatus('error');
                  setErrorMsg("Une erreur est survenue. Veuillez réessayer ou nous contacter par téléphone.");
                }
              }}
            >
              {status === 'error' && (
                <div className="flex items-center gap-3 p-4 bg-red-50 border border-red-200 rounded-xl" data-testid="adhesion-error">
                  <AlertCircle className="w-5 h-5 text-red-500 flex-shrink-0" />
                  <p className="text-red-700 text-sm">{errorMsg}</p>
                </div>
              )}
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="prenom" className="block text-sm font-medium text-gray-700 mb-2">Prénom <span className="text-red-500">*</span></label>
                  <input type="text" id="prenom" name="prenom" required className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#0b2a55] focus:border-transparent transition-all" placeholder="Votre prénom" data-testid="adhesion-prenom" />
                </div>
                <div>
                  <label htmlFor="nom" className="block text-sm font-medium text-gray-700 mb-2">Nom <span className="text-red-500">*</span></label>
                  <input type="text" id="nom" name="nom" required className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#0b2a55] focus:border-transparent transition-all" placeholder="Votre nom" data-testid="adhesion-nom" />
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email <span className="text-red-500">*</span></label>
                  <input type="email" id="email" name="email" required className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#0b2a55] focus:border-transparent transition-all" placeholder="votre@email.com" data-testid="adhesion-email" />
                </div>
                <div>
                  <label htmlFor="telephone" className="block text-sm font-medium text-gray-700 mb-2">Téléphone</label>
                  <input type="tel" id="telephone" name="telephone" className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#0b2a55] focus:border-transparent transition-all" placeholder="Votre téléphone" data-testid="adhesion-telephone" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-3">Type d'adhésion</label>
                <div className="grid md:grid-cols-2 gap-4">
                  <div
                    onClick={() => setAdhesionType('actif')}
                    className={`cursor-pointer p-4 rounded-xl border-2 transition-all ${adhesionType === 'actif' ? 'border-[#0b2a55] bg-[#0b2a55]/5' : 'border-gray-200 hover:border-gray-300'}`}
                    data-testid="adhesion-type-actif"
                  >
                    <p className="font-bold text-gray-900">Membre actif</p>
                    <p className="text-sm text-gray-500">Participation régulière</p>
                  </div>
                  <div
                    onClick={() => setAdhesionType('sympathisant')}
                    className={`cursor-pointer p-4 rounded-xl border-2 transition-all ${adhesionType === 'sympathisant' ? 'border-[#0b2a55] bg-[#0b2a55]/5' : 'border-gray-200 hover:border-gray-300'}`}
                    data-testid="adhesion-type-sympathisant"
                  >
                    <p className="font-bold text-gray-900">Sympathisant</p>
                    <p className="text-sm text-gray-500">Soutien à distance</p>
                  </div>
                </div>
              </div>
              <div>
                <label htmlFor="motivation" className="block text-sm font-medium text-gray-700 mb-2">Motivation <span className="text-red-500">*</span></label>
                <textarea id="motivation" name="motivation" rows={5} required className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#0b2a55] focus:border-transparent transition-all resize-none" placeholder="Décrivez vos motivations pour rejoindre ALT&ACT..." data-testid="adhesion-motivation"></textarea>
              </div>
              <p className="text-xs text-gray-500 mb-4">
                En soumettant ce formulaire, vous acceptez que vos donn&eacute;es soient trait&eacute;es par ALT&ACT pour g&eacute;rer votre adh&eacute;sion. Vos donn&eacute;es seront conserv&eacute;es pendant la dur&eacute;e de votre adh&eacute;sion + 1 an. Vous disposez de droits d'acc&egrave;s, rectification, effacement et opposition. Contact RGPD : <a href="mailto:rgpd@alt-act.eu" className="text-[#0b2a55] hover:underline">rgpd@alt-act.eu</a>. <a href="/#/confidentialite" className="text-[#0b2a55] hover:underline">Politique de confidentialit&eacute;</a> | <a href="/#/rgpd" className="text-[#0b2a55] hover:underline">RGPD</a>
              </p>
              <Button type="submit" disabled={status === 'loading'} className="w-full bg-[#0b2a55] hover:bg-[#1a4280] text-white py-4 text-lg rounded-xl disabled:opacity-60" data-testid="adhesion-submit">
                {status === 'loading' ? (
                  <><Loader2 className="w-5 h-5 mr-2 animate-spin" /> Envoi en cours...</>
                ) : (
                  <><Send className="w-5 h-5 mr-2" /> Envoyer ma candidature</>
                )}
              </Button>
            </form>
            )}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default DevenirMembrePage;
