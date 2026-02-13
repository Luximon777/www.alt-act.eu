import React, { useState } from 'react';
import { UserPlus, Heart, Users, Target, CheckCircle, Star, ArrowRight, Sparkles } from 'lucide-react';
import { Button } from './ui/button';
import Navigation from './Navigation';
import Footer from './Footer';

const DevenirMembrePage = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    motivation: '',
    memberType: 'actif'
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  const benefits = [
    { icon: Users, title: 'Rejoindre une communauté', description: 'Intégrez un réseau de professionnels engagés pour le développement humain.' },
    { icon: Target, title: 'Contribuer à notre mission', description: 'Participez activement à révéler et structurer les potentiels humains.' },
    { icon: Heart, title: 'Partager des valeurs', description: 'Vivez notre charte éthique au quotidien avec des personnes qui partagent vos convictions.' },
    { icon: Star, title: 'Développer vos compétences', description: 'Bénéficiez de formations et d\'accompagnements personnalisés.' },
  ];

  return (
    <div className="min-h-screen bg-gray-50" data-testid="devenir-membre-page">
      <Navigation />
      
      {/* Hero Section with Image */}
      <section className="relative pt-20 h-[45vh] min-h-[350px] overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1763982811982-e4901b18bbe3?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1Nzl8MHwxfHNlYXJjaHwxfHxwZW9wbGUlMjBqb2luaW5nJTIwaGFuZHMlMjB0ZWFtd29yayUyMGNvbW11bml0eXxlbnwwfHx8fDE3NzEwMTI2ODF8MA&ixlib=rb-4.1.0&q=85')`
          }}
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-green-900/90 via-teal-800/80 to-[#0b2a55]/80" />
        
        {/* Content */}
        <div className="relative h-full flex items-center justify-center">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full mb-6">
              <UserPlus className="w-4 h-4 text-green-300" />
              <span className="text-green-200 text-sm font-semibold">REJOIGNEZ-NOUS</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Devenez membre d'ALT&ACT
            </h1>
            
            <p className="text-xl text-green-100 max-w-2xl mx-auto">
              Ensemble, révélons les capacités humaines et construisons une société plus solidaire.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Pourquoi devenir membre ?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              En rejoignant ALT&ACT, vous participez à une aventure humaine unique centrée sur le développement des potentiels.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <div 
                  key={index}
                  className="bg-gradient-to-br from-gray-50 to-white p-6 rounded-2xl border border-gray-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-orange-500 rounded-xl flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">{benefit.title}</h3>
                  <p className="text-sm text-gray-600">{benefit.description}</p>
                </div>
              );
            })}
          </div>

          {/* Membership Form */}
          <div className="max-w-3xl mx-auto">
            <div className="bg-gradient-to-br from-[#0b2a55] to-[#1a4280] rounded-3xl p-8 md:p-12 shadow-2xl">
              <div className="text-center mb-8">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full mb-4">
                  <Sparkles className="w-4 h-4 text-amber-400" />
                  <span className="text-amber-300 text-sm font-semibold">FORMULAIRE D'ADHÉSION</span>
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
                  Rejoignez notre communauté
                </h2>
                <p className="text-blue-200">
                  Remplissez le formulaire ci-dessous et nous vous recontacterons.
                </p>
              </div>

              {isSubmitted ? (
                <div className="flex flex-col items-center justify-center py-12 text-center">
                  <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mb-6">
                    <CheckCircle className="w-10 h-10 text-green-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3">Demande envoyée !</h3>
                  <p className="text-blue-200 max-w-md">
                    Merci pour votre intérêt ! Notre équipe examinera votre candidature et vous contactera prochainement.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5" data-testid="membership-form">
                  <div className="grid md:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium text-blue-200 mb-2">
                        Prénom *
                      </label>
                      <input
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-blue-300 focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all"
                        placeholder="Votre prénom"
                        data-testid="member-firstname-input"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-blue-200 mb-2">
                        Nom *
                      </label>
                      <input
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-blue-300 focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all"
                        placeholder="Votre nom"
                        data-testid="member-lastname-input"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium text-blue-200 mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-blue-300 focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all"
                        placeholder="votre@email.com"
                        data-testid="member-email-input"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-blue-200 mb-2">
                        Téléphone
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-blue-300 focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all"
                        placeholder="+33 6 XX XX XX XX"
                        data-testid="member-phone-input"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-blue-200 mb-2">
                      Type d'adhésion
                    </label>
                    <div className="grid grid-cols-2 gap-3">
                      <button
                        type="button"
                        onClick={() => setFormData(prev => ({ ...prev, memberType: 'actif' }))}
                        className={`p-4 rounded-xl border-2 transition-all ${
                          formData.memberType === 'actif'
                            ? 'border-amber-500 bg-amber-500/20 text-white'
                            : 'border-white/20 bg-white/5 text-blue-200 hover:border-white/40'
                        }`}
                        data-testid="member-type-actif"
                      >
                        <div className="font-semibold">Membre actif</div>
                        <div className="text-xs opacity-75 mt-1">Participation régulière</div>
                      </button>
                      <button
                        type="button"
                        onClick={() => setFormData(prev => ({ ...prev, memberType: 'sympathisant' }))}
                        className={`p-4 rounded-xl border-2 transition-all ${
                          formData.memberType === 'sympathisant'
                            ? 'border-amber-500 bg-amber-500/20 text-white'
                            : 'border-white/20 bg-white/5 text-blue-200 hover:border-white/40'
                        }`}
                        data-testid="member-type-sympathisant"
                      >
                        <div className="font-semibold">Sympathisant</div>
                        <div className="text-xs opacity-75 mt-1">Soutien à distance</div>
                      </button>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-blue-200 mb-2">
                      Motivation *
                    </label>
                    <textarea
                      name="motivation"
                      value={formData.motivation}
                      onChange={handleChange}
                      required
                      rows={4}
                      className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-blue-300 focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all resize-none"
                      placeholder="Décrivez votre motivation à rejoindre ALT&ACT..."
                      data-testid="member-motivation-input"
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white py-4 rounded-xl font-semibold text-lg flex items-center justify-center gap-2"
                    data-testid="member-submit-btn"
                  >
                    Envoyer ma candidature
                    <ArrowRight className="w-5 h-5" />
                  </Button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default DevenirMembrePage;
