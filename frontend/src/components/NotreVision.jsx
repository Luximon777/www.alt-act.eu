import React from 'react';
import { Eye, Globe, Heart, Users, ArrowRight, Sparkles, Scale, Leaf, Building, HandHeart } from 'lucide-react';
import { Button } from './ui/button';
import { useNavigate } from 'react-router-dom';
import Navigation from './Navigation';
import Footer from './Footer';

const NotreVision = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50" data-testid="notre-vision-page">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-blue-900 via-blue-800 to-[#0b2a55] overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-teal-400 rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/20 rounded-full mb-6">
            <Eye className="w-4 h-4 text-blue-300" />
            <span className="text-blue-200 text-sm font-semibold">NOTRE VISION</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8 leading-tight">
            Une société plus juste et durable
          </h1>
          
          <p className="text-xl md:text-2xl text-blue-100 max-w-4xl mx-auto leading-relaxed">
            Où le développement humain devient le fondement des dynamiques professionnelles et sociales.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Vision principale */}
          <div className="mb-16">
            <div className="bg-gradient-to-r from-blue-50 to-teal-50 rounded-3xl p-8 md:p-12 border-l-4 border-blue-500">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                Notre ambition
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Nous œuvrons à l'émergence d'une société plus juste et durable, où le <strong className="text-blue-700">développement humain devient le fondement</strong> des dynamiques professionnelles et sociales.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Dans cette société, le travail dépasse la seule logique de production pour devenir un <strong className="text-blue-700">lieu de contribution, de dignité et de progrès partagé</strong>.
              </p>
            </div>
          </div>

          {/* Le travail comme contribution */}
          <div className="mb-16">
            <div className="text-center mb-10">
              <h3 className="text-2xl font-bold text-gray-900">Le travail réinventé</h3>
              <p className="text-gray-600 mt-2">Une nouvelle conception du rapport au travail</p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <HandHeart className="w-8 h-8 text-blue-600" />
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-3">Contribution</h4>
                <p className="text-gray-600">
                  Le travail comme acte de service à la communauté, au-delà de la simple production
                </p>
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow text-center">
                <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-8 h-8 text-amber-600" />
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-3">Dignité</h4>
                <p className="text-gray-600">
                  La reconnaissance de la valeur intrinsèque de chaque personne et de son apport
                </p>
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-green-600" />
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-3">Progrès partagé</h4>
                <p className="text-gray-600">
                  Une avancée collective où chacun bénéficie des fruits du développement
                </p>
              </div>
            </div>
          </div>

          {/* Organisations responsables */}
          <div className="mb-16">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-8 text-white">
                <Building className="w-12 h-12 text-amber-400 mb-6" />
                <h3 className="text-2xl font-bold mb-4">Des organisations transformées</h3>
                <p className="text-gray-300 leading-relaxed mb-4">
                  Les organisations y sont appelées à <strong className="text-white">concilier performance et responsabilité</strong>, tandis que les parcours professionnels se construisent dans une perspective d'apprentissage tout au long de la vie.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  Cette transformation passe par des pratiques managériales renouvelées, une attention accrue au bien-être et une culture de la reconnaissance.
                </p>
              </div>
              <div>
                <div className="space-y-4">
                  <div className="bg-amber-50 rounded-xl p-5 border-l-4 border-amber-500">
                    <h4 className="font-bold text-gray-900 mb-2">Performance responsable</h4>
                    <p className="text-gray-600 text-sm">Conjuguer efficacité économique et impact social positif</p>
                  </div>
                  <div className="bg-blue-50 rounded-xl p-5 border-l-4 border-blue-500">
                    <h4 className="font-bold text-gray-900 mb-2">Apprentissage continu</h4>
                    <p className="text-gray-600 text-sm">Parcours professionnels évolutifs et formateurs</p>
                  </div>
                  <div className="bg-green-50 rounded-xl p-5 border-l-4 border-green-500">
                    <h4 className="font-bold text-gray-900 mb-2">Environnements capacitants</h4>
                    <p className="text-gray-600 text-sm">Espaces qui font grandir autant les personnes que les projets</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Citation centrale */}
          <div className="mb-16">
            <div className="bg-gradient-to-r from-blue-600 to-teal-600 rounded-3xl p-8 md:p-12 text-center text-white">
              <Sparkles className="w-12 h-12 mx-auto mb-6 text-amber-300" />
              <blockquote className="text-xl md:text-2xl font-medium leading-relaxed mb-6">
                "Nous croyons qu'un avenir soutenable repose sur des environnements capables de faire grandir les personnes autant que les projets."
              </blockquote>
              <p className="text-blue-200">
                Lorsque les capacités humaines sont reconnues et mises en mouvement, elles favorisent la confiance, renforcent la coopération et ouvrent la voie à des modèles économiques et sociaux plus équilibrés.
              </p>
            </div>
          </div>

          {/* Une société où chacun trouve sa place */}
          <div className="mb-16">
            <div className="text-center mb-10">
              <h3 className="text-2xl font-bold text-gray-900">Une société inclusive</h3>
              <p className="text-gray-600 mt-2">Où chacun peut trouver sa place et exercer sa responsabilité</p>
            </div>
            
            <div className="bg-gradient-to-br from-teal-50 to-blue-50 rounded-3xl p-8 md:p-10">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <Globe className="w-10 h-10 text-teal-600 mb-4" />
                  <h4 className="text-xl font-bold text-gray-900 mb-3">Trouver sa place</h4>
                  <p className="text-gray-700 leading-relaxed">
                    Ainsi se dessine une société où chacun peut trouver sa place, exercer sa responsabilité et contribuer, à son niveau, à la construction d'un monde plus solidaire.
                  </p>
                </div>
                <div>
                  <Scale className="w-10 h-10 text-blue-600 mb-4" />
                  <h4 className="text-xl font-bold text-gray-900 mb-3">Équité et participation</h4>
                  <p className="text-gray-700 leading-relaxed">
                    Une société qui progresse lorsque chacun peut non seulement accéder aux opportunités, mais aussi prendre part à ce qu'elles rendent possible.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Alignement européen */}
          <div className="mb-16">
            <div className="bg-blue-900 rounded-3xl p-8 md:p-12 text-white">
              <div className="flex items-center gap-3 mb-6">
                <Globe className="w-8 h-8 text-amber-400" />
                <h3 className="text-2xl font-bold">En cohérence avec la vision européenne</h3>
              </div>
              <p className="text-blue-100 text-lg leading-relaxed mb-4">
                Notre vision s'inscrit dans la continuité des orientations européennes pour une économie sociale et solidaire, une transition juste et un développement durable.
              </p>
              <div className="grid md:grid-cols-3 gap-4 mt-6">
                <div className="bg-white/10 rounded-xl p-4">
                  <Leaf className="w-6 h-6 text-green-400 mb-2" />
                  <p className="text-sm text-blue-100">Pacte vert européen</p>
                </div>
                <div className="bg-white/10 rounded-xl p-4">
                  <Users className="w-6 h-6 text-amber-400 mb-2" />
                  <p className="text-sm text-blue-100">Socle européen des droits sociaux</p>
                </div>
                <div className="bg-white/10 rounded-xl p-4">
                  <Heart className="w-6 h-6 text-rose-400 mb-2" />
                  <p className="text-sm text-blue-100">Objectifs de développement durable</p>
                </div>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center">
            <div className="inline-flex flex-col sm:flex-row gap-4">
              <Button
                onClick={() => navigate('/notre-action')}
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 text-lg rounded-full"
              >
                Découvrir notre action
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button
                onClick={() => navigate('/notre-mission')}
                variant="outline"
                className="border-[#0b2a55] text-[#0b2a55] hover:bg-[#0b2a55] hover:text-white px-8 py-6 text-lg rounded-full"
              >
                Revenir à notre mission
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default NotreVision;
