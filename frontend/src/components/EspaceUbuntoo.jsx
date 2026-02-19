import React, { useEffect, useState } from 'react';
import { ArrowLeft, Users, Globe, Heart, Sparkles, MessageCircle, Award, Target, Lightbulb, Mail, Lock, Eye, EyeOff, LogIn } from 'lucide-react';
import { Button } from './ui/button';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent } from './ui/card';
import Navigation from './Navigation';

function EspaceUbuntoo() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleBackHome = () => {
    navigate('/');
  };

  const handleLogin = (e) => {
    e.preventDefault();
    // Pour l'instant, afficher une alerte - À connecter ultérieurement à l'API RE'ACTIF PRO
    alert("Fonctionnalité en cours de développement. Vos identifiants RE'ACTIF PRO seront bientôt actifs.");
  };

  const fonctionnalites = [
    {
      icon: Users,
      title: "Communauté apprenante",
      description: "Rejoignez une communauté de professionnels engagés dans le développement mutuel et l'entraide."
    },
    {
      icon: Award,
      title: "Badges d'expérience",
      description: "Valorisez vos compétences et votre parcours grâce à un système de reconnaissance par badges."
    },
    {
      icon: MessageCircle,
      title: "Échanges et partage",
      description: "Partagez vos expériences, posez vos questions et bénéficiez de l'intelligence collective."
    },
    {
      icon: Target,
      title: "Accompagnement personnalisé",
      description: "Accédez à des ressources et un accompagnement adapté à votre parcours professionnel."
    },
    {
      icon: Lightbulb,
      title: "Ressources et formations",
      description: "Développez vos compétences grâce à des contenus exclusifs et des formations ciblées."
    },
    {
      icon: Globe,
      title: "Réseau solidaire",
      description: "Connectez-vous avec des acteurs engagés pour une insertion professionnelle inclusive."
    }
  ];

  const valeurs = [
    { icon: Heart, label: "Ubuntu", description: "\"Je suis parce que nous sommes\" - La force du collectif" },
    { icon: Users, label: "Entraide", description: "Chacun apporte et reçoit dans un esprit de réciprocité" },
    { icon: Sparkles, label: "Croissance", description: "Grandir ensemble, personnellement et professionnellement" }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      {/* Header */}
      <header className="bg-gradient-to-br from-[#0F4C5C] to-[#0A3844] text-white pt-24 pb-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full mb-6">
            <Users className="w-5 h-5" />
            <span className="text-sm font-medium">Communauté ALT&amp;ACT</span>
          </div>
          <div className="flex justify-center mb-4">
            <img 
              src="https://static.prod-images.emergentagent.com/jobs/b883b64b-db51-4ef2-a26d-0edeb89b18e9/images/ca985eee7c97472160227222fd470c0443dfe5bb96e8eef8646fc1b8f9bae5e4.png" 
              alt="Ubuntoo" 
              className="h-48 md:h-64 w-auto"
            />
          </div>
          <p className="text-xl text-teal-100 max-w-2xl mx-auto">
            La communauté apprenante au service de votre parcours professionnel tout le long de votre vie
          </p>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        {/* Section Connexion */}
        <section className="mb-16">
          <div className="max-w-md mx-auto">
            <Card className="shadow-xl border-0 overflow-hidden">
              <div className="bg-gradient-to-r from-[#0F4C5C] to-[#0A3844] p-6 text-center">
                <div className="w-16 h-16 mx-auto bg-white/20 rounded-full flex items-center justify-center mb-4">
                  <LogIn className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-white mb-2">Connexion Ubuntoo</h2>
                <p className="text-teal-100 text-sm">Utilisez vos identifiants RE'ACTIF PRO</p>
              </div>
              <CardContent className="p-6">
                <form onSubmit={handleLogin} className="space-y-4">
                  {/* Champ Email/Identifiant */}
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Identifiant ou Email
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input
                        type="text"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="votre.email@exemple.com"
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0F4C5C] focus:border-transparent transition-all outline-none"
                        required
                      />
                    </div>
                  </div>

                  {/* Champ Mot de passe */}
                  <div>
                    <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                      Mot de passe
                    </label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input
                        type={showPassword ? "text" : "password"}
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="••••••••"
                        className="w-full pl-10 pr-12 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0F4C5C] focus:border-transparent transition-all outline-none"
                        required
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                      >
                        {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                      </button>
                    </div>
                  </div>

                  {/* Options */}
                  <div className="flex items-center justify-between">
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={rememberMe}
                        onChange={(e) => setRememberMe(e.target.checked)}
                        className="w-4 h-4 text-[#0F4C5C] border-gray-300 rounded focus:ring-[#0F4C5C]"
                      />
                      <span className="text-sm text-gray-600">Se souvenir de moi</span>
                    </label>
                    <a href="#" className="text-sm text-[#0F4C5C] hover:underline">
                      Mot de passe oublié ?
                    </a>
                  </div>

                  {/* Bouton Connexion */}
                  <Button 
                    type="submit"
                    className="w-full bg-[#0F4C5C] hover:bg-[#0A3844] text-white py-3 text-lg font-medium"
                  >
                    <LogIn className="w-5 h-5 mr-2" />
                    Se connecter
                  </Button>
                </form>

                {/* Lien inscription */}
                <div className="mt-6 pt-6 border-t border-gray-200 text-center">
                  <p className="text-sm text-gray-600">
                    Pas encore de compte ?{' '}
                    <a 
                      href="https://reactifpro.altact.org" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-[#0F4C5C] font-medium hover:underline"
                    >
                      Créer un compte RE'ACTIF PRO
                    </a>
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Section Introduction */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-[#0F4C5C] mb-6">
                Qu'est-ce qu'Ubuntoo ?
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                <strong>Ubuntoo</strong> est le réseau social solidaire d'ALT&amp;ACT, inspiré de la philosophie Ubuntu : 
                <em> "Je suis parce que nous sommes"</em>. C'est un espace où chaque membre contribue 
                à l'enrichissement collectif tout en bénéficiant du soutien de la communauté.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Que vous soyez en transition professionnelle, en recherche d'emploi ou simplement 
                désireux de partager votre expérience, Ubuntoo vous offre un cadre bienveillant 
                pour grandir ensemble.
              </p>
            </div>
          </div>
        </section>

        {/* Section Valeurs */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-[#0F4C5C] text-center mb-8">
            Nos valeurs fondatrices
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {valeurs.map((valeur, index) => {
              const Icon = valeur.icon;
              return (
                <div 
                  key={index}
                  className="bg-gradient-to-br from-[#0F4C5C]/10 to-[#0A3844]/5 rounded-2xl p-6 text-center"
                >
                  <div className="w-16 h-16 mx-auto rounded-full bg-[#0F4C5C] flex items-center justify-center mb-4">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-[#0F4C5C] mb-2">{valeur.label}</h3>
                  <p className="text-gray-600">{valeur.description}</p>
                </div>
              );
            })}
          </div>
        </section>

        {/* Section Fonctionnalités */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-[#0F4C5C] text-center mb-8">
            Ce que vous offre Ubuntoo
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {fonctionnalites.map((item, index) => {
              const Icon = item.icon;
              return (
                <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="pt-6">
                    <div className="w-12 h-12 rounded-xl bg-[#0F4C5C]/10 flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6 text-[#0F4C5C]" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h3>
                    <p className="text-gray-600 text-sm">{item.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </section>

        {/* Section CTA */}
        <section className="mb-12">
          <div className="bg-gradient-to-r from-[#0F4C5C] to-[#0A3844] rounded-3xl p-8 md:p-12 text-center text-white">
            <h2 className="text-3xl font-bold mb-4">
              Rejoignez la communauté Ubuntoo
            </h2>
            <p className="text-teal-100 text-lg mb-8 max-w-2xl mx-auto">
              Connectez-vous avec vos identifiants RE'ACTIF PRO pour accéder à l'espace Ubuntoo 
              et commencer votre aventure au sein de notre communauté apprenante.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg"
                className="bg-white text-[#0F4C5C] hover:bg-teal-50 text-lg px-8 py-6"
                onClick={() => window.open('https://ubuntoo.altact.org', '_blank')}
              >
                <Users className="w-5 h-5 mr-2" />
                Accéder à Ubuntoo
              </Button>
              <Button 
                size="lg"
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-[#0F4C5C] text-lg px-8 py-6"
                onClick={() => navigate('/')}
              >
                En savoir plus sur ALT&amp;ACT
              </Button>
            </div>
            <p className="text-teal-200 text-sm mt-6">
              * Plateforme en cours de déploiement - Disponible prochainement
            </p>
          </div>
        </section>

        {/* Bouton Retour */}
        <div className="flex items-center justify-start">
          <Button 
            onClick={handleBackHome} 
            variant="outline" 
            className="border-[#0F4C5C] text-[#0F4C5C] hover:bg-[#0F4C5C] hover:text-white"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Retour à l'accueil
          </Button>
        </div>
      </main>
    </div>
  );
}

export default EspaceUbuntoo;
