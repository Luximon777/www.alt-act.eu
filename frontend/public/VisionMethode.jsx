import React, { useEffect, useState } from 'react';
import { ArrowLeft, Eye, Target, Users, Heart, Lightbulb, TrendingUp, Globe, Compass, ChevronRight } from 'lucide-react';
import { Button } from './ui/button';
import { useNavigate } from 'react-router-dom';

function VisionMethode() {
  const navigate = useNavigate();
  const [activeSection, setActiveSection] = useState('intro');
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['intro', 'vision', 'paradigme', 'methode', 'grandir', 'systemique', 'espaces', 'ambition'];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom >= 150) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleBackHome = () => {
    navigate('/');
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const memoItems = [
    { id: 'vision', icon: Target, title: 'Notre vision', summary: 'Révéler la capacité de contribution de chacun', color: 'bg-[#0b2a55]' },
    { id: 'paradigme', icon: TrendingUp, title: 'Changement de paradigme', summary: 'De l\'insertion à la contribution', color: 'bg-orange-500' },
    { id: 'methode', icon: Compass, title: 'Notre méthode', summary: 'Structurer la personne pour sécuriser les trajectoires', color: 'bg-teal-500' },
    { id: 'grandir', icon: Lightbulb, title: 'Faire grandir', summary: 'Accompagner sans faire à la place', color: 'bg-purple-500' },
    { id: 'systemique', icon: Globe, title: 'Approche systémique', summary: 'Développement intérieur, capacité professionnelle, utilité sociale', color: 'bg-rose-500' },
    { id: 'espaces', icon: Users, title: 'Bâtir des espaces', summary: 'Structurer les adultes de demain', color: 'bg-amber-500' },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header avec image de fond */}
      <header className="relative bg-gradient-to-br from-[#0b2a55] to-[#1a4280] text-white py-20">
        <div className="absolute inset-0 opacity-20">
          <img 
            src="https://images.unsplash.com/photo-1758873268631-fa944fc5cad2?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjAzNTl8MHwxfHNlYXJjaHwyfHx0ZWFtd29yayUyMGNvbGxhYm9yYXRpb24lMjBkaXZlcnNlJTIwcGVvcGxlfGVufDB8fHx8MTc3MDQ2MzkyNXww&ixlib=rb-4.1.0&q=85" 
            alt="" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Eye className="w-16 h-16 mx-auto mb-6 opacity-70" />
          <h1 className="text-3xl md:text-5xl font-bold mb-6">Vision et méthode</h1>
          <p className="text-xl text-blue-100 italic max-w-3xl mx-auto leading-relaxed">
            Accompagner une personne, ce n&apos;est pas seulement sécuriser un parcours — c&apos;est révéler sa capacité à prendre part à la construction du monde qui vient.
          </p>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col lg:flex-row gap-8">
          
          {/* Sidebar Mémo - visible uniquement sur grand écran */}
          <aside className="hidden lg:block lg:w-80 flex-shrink-0">
            <div className="sticky top-24">
              <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
                {/* Header du mémo */}
                <div className="bg-gradient-to-r from-[#0b2a55] to-[#1a4280] px-5 py-4">
                  <h3 className="text-white font-bold text-lg flex items-center gap-2">
                    <Eye className="w-5 h-5" />
                    En résumé
                  </h3>
                  <p className="text-blue-200 text-sm mt-1">Les points clés de notre approche</p>
                </div>
                
                {/* Liste des sections */}
                <div className="p-3">
                  {memoItems.map((item) => {
                    const Icon = item.icon;
                    const isActive = activeSection === item.id;
                    return (
                      <button
                        key={item.id}
                        onClick={() => scrollToSection(item.id)}
                        className={`w-full text-left p-3 rounded-xl mb-2 transition-all duration-300 group ${
                          isActive 
                            ? 'bg-[#0b2a55]/10 border-l-4 border-[#0b2a55]' 
                            : 'hover:bg-gray-50 border-l-4 border-transparent'
                        }`}
                      >
                        <div className="flex items-start gap-3">
                          <div className={`w-8 h-8 rounded-lg ${item.color} flex items-center justify-center flex-shrink-0 ${
                            isActive ? 'scale-110' : 'group-hover:scale-105'
                          } transition-transform duration-200`}>
                            <Icon className="w-4 h-4 text-white" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <p className={`font-semibold text-sm ${isActive ? 'text-[#0b2a55]' : 'text-gray-800'}`}>
                              {item.title}
                            </p>
                            <p className="text-xs text-gray-500 mt-0.5 line-clamp-2">
                              {item.summary}
                            </p>
                          </div>
                          <ChevronRight className={`w-4 h-4 text-gray-400 flex-shrink-0 transition-transform duration-200 ${
                            isActive ? 'translate-x-1 text-[#0b2a55]' : ''
                          }`} />
                        </div>
                      </button>
                    );
                  })}
                </div>

                {/* Citation */}
                <div className="px-5 pb-5">
                  <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-xl p-4 border border-amber-100">
                    <p className="text-sm text-gray-700 italic leading-relaxed">
                      &quot;Reconnaître la capacité là où d&apos;autres voient la limite.&quot;
                    </p>
                    <p className="text-xs text-amber-700 mt-2 font-medium">— Notre ambition</p>
                  </div>
                </div>
              </div>
            </div>
          </aside>

          {/* Contenu principal */}
          <main className="flex-1 min-w-0">
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="p-8 md:p-12 space-y-12">
                
                {/* Introduction */}
                <section id="intro">
                  <p className="text-gray-700 leading-relaxed text-lg">
                    Les fragilités que connaissent aujourd&apos;hui nombre de nos institutions, de nos organisations, mais aussi de nos concitoyens, ne sont pas apparues soudainement ; elles s&apos;inscrivent dans des transformations profondes engagées depuis plusieurs années. Dans un monde marqué par des mutations économiques, technologiques et sociales durables, ces tensions nous invitent à repenser avec lucidité nos manières d&apos;accompagner, de former et de faire société.
                  </p>
                  <p className="text-gray-700 leading-relaxed text-lg mt-4">
                    C&apos;est face à cette réalité que s&apos;enracine la conviction d&apos;<strong className="text-[#0b2a55]">ALT&amp;ACT</strong> : les défis de notre époque ne pourront être relevés uniquement par des réponses techniques ou par la multiplication des dispositifs. Ils appellent une compréhension renouvelée de l&apos;être humain, de ses capacités et de sa place dans la construction du bien commun.
                  </p>
                </section>

                {/* Image section - Équipe diverse */}
                <div className="relative rounded-2xl overflow-hidden shadow-lg">
                  <img 
                    src="https://images.unsplash.com/photo-1758873268663-5a362616b5a7?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjAzNTl8MHwxfHNlYXJjaHwzfHx0ZWFtd29yayUyMGNvbGxhYm9yYXRpb24lMjBkaXZlcnNlJTIwcGVvcGxlfGVufDB8fHx8MTc3MDQ2MzkyNXww&ixlib=rb-4.1.0&q=85" 
                    alt="Équipe diverse collaborant ensemble" 
                    className="w-full h-64 md:h-80 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0b2a55]/70 to-transparent flex items-end">
                    <p className="p-6 text-white text-lg font-medium">
                      La force du collectif au service du développement de chacun
                    </p>
                  </div>
                </div>

                {/* Notre vision */}
                <section id="vision">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-lg bg-[#0b2a55] flex items-center justify-center">
                      <Target className="w-5 h-5 text-white" />
                    </div>
                    <h2 className="text-2xl font-bold text-[#0b2a55]">Notre vision : révéler la capacité de contribution</h2>
                  </div>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    Nous faisons le choix de porter un regard différent sur les femmes et les hommes que nous accompagnons. Là où certains ne perçoivent que des fragilités, nous reconnaissons avant tout des capacités en devenir.
                  </p>
                  <div className="p-6 bg-blue-50 border-l-4 border-[#0b2a55] rounded-r-lg my-6">
                    <p className="text-gray-800 leading-relaxed text-lg italic">
                      Chaque personne possède un potentiel de contribution unique. Notre responsabilité est de créer les conditions permettant à ce potentiel d&apos;émerger, de se structurer et de s&apos;inscrire durablement dans la société.
                    </p>
                  </div>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    Cette vision nous conduit à dépasser une approche strictement réparatrice pour privilégier une dynamique de développement. Il ne s&apos;agit pas seulement de sécuriser des parcours professionnels, mais de permettre à chacun de trouver sa juste place — une place qui conjugue utilité sociale, dignité et pouvoir d&apos;agir.
                  </p>
                  <p className="text-gray-700 leading-relaxed text-lg mt-4">
                    Nous portons une attention particulière aux publics fragilisés par les parcours de vie, les inégalités ou les ruptures professionnelles. Convaincus que la cohésion sociale repose sur l&apos;équité, nous agissons avec détermination pour prévenir et combattre toute forme de discrimination, condition indispensable à une participation pleine et entière à la vie collective. Car une société plus juste n&apos;est pas seulement celle qui protège — c&apos;est celle qui permet à chacun de contribuer.
                  </p>
                </section>

                {/* Changement de paradigme */}
                <section id="paradigme">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-lg bg-orange-500 flex items-center justify-center">
                      <TrendingUp className="w-5 h-5 text-white" />
                    </div>
                    <h2 className="text-2xl font-bold text-[#0b2a55]">Un changement de paradigme : de l&apos;insertion à la contribution</h2>
                  </div>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    Pendant longtemps, l&apos;accompagnement s&apos;est principalement organisé autour d&apos;un objectif : favoriser l&apos;accès à l&apos;emploi. Cet objectif demeure essentiel, mais il ne suffit plus à répondre aux réalités d&apos;un monde caractérisé par l&apos;incertitude et la transformation rapide des trajectoires professionnelles.
                  </p>
                  <div className="p-6 bg-gradient-to-r from-[#0b2a55]/10 to-[#1a4280]/10 rounded-xl my-6">
                    <p className="text-gray-800 leading-relaxed text-lg font-medium">
                      ALT&amp;ACT s&apos;inscrit dans une évolution majeure : passer d&apos;une logique d&apos;insertion à une logique de contribution.
                    </p>
                  </div>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    Nous considérons que les personnes ne sont pas uniquement des bénéficiaires de dispositifs ; elles sont des acteurs potentiels de transformation sociale. Lorsque la confiance rencontre la responsabilité, elle fait naître l&apos;engagement. Et lorsque l&apos;engagement s&apos;enracine dans un collectif, il devient une force de progrès partagé.
                  </p>
                  <p className="text-gray-700 leading-relaxed text-lg mt-4">
                    Accompagner, pour nous, ne consiste pas simplement à intégrer une personne dans un système existant, mais à l&apos;aider à devenir suffisamment solide pour y prendre part activement — et, parfois, pour le faire évoluer.
                  </p>
                </section>

                {/* Image section - Accompagnement professionnel */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="relative rounded-2xl overflow-hidden shadow-lg">
                    <img 
                      src="https://images.unsplash.com/photo-1758518727600-2c5f48419eac?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA2MjJ8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBtZWV0aW5nJTIwYnVzaW5lc3MlMjBkaXNjdXNzaW9uJTIwb2ZmaWNlfGVufDB8fHx8MTc3MDQ2Mzk0Mnww&ixlib=rb-4.1.0&q=85" 
                      alt="Accompagnement professionnel" 
                      className="w-full h-48 md:h-56 object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                      <p className="p-4 text-white text-sm font-medium">
                        Accompagnement personnalisé
                      </p>
                    </div>
                  </div>
                  <div className="relative rounded-2xl overflow-hidden shadow-lg">
                    <img 
                      src="https://images.unsplash.com/photo-1758518726869-01aff69a56e3?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA2MjJ8MHwxfHNlYXJjaHwyfHxwcm9mZXNzaW9uYWwlMjBtZWV0aW5nJTIwYnVzaW5lc3MlMjBkaXNjdXNzaW9uJTIwb2ZmaWNlfGVufDB8fHx8MTc3MDQ2Mzk0Mnww&ixlib=rb-4.1.0&q=85" 
                      alt="Discussion et échange professionnel" 
                      className="w-full h-48 md:h-56 object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                      <p className="p-4 text-white text-sm font-medium">
                        Dialogue et co-construction
                      </p>
                    </div>
                  </div>
                </div>

                {/* Notre méthode */}
                <section id="methode">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-lg bg-teal-500 flex items-center justify-center">
                      <Compass className="w-5 h-5 text-white" />
                    </div>
                    <h2 className="text-2xl font-bold text-[#0b2a55]">Notre méthode : structurer la personne pour sécuriser les trajectoires</h2>
                  </div>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    Les parcours professionnels sont de moins en moins linéaires. Dans ce paysage, la compétence technique seule ne garantit plus la stabilité. Ce qui fait désormais la différence, c&apos;est la capacité d&apos;une personne à s&apos;orienter, à s&apos;adapter et à traverser les transitions.
                  </p>
                  <div className="p-6 bg-teal-50 border-l-4 border-teal-500 rounded-r-lg my-6">
                    <p className="text-gray-800 leading-relaxed text-lg italic">
                      C&apos;est pourquoi notre méthode repose sur un principe fondamental : le développement humain constitue le premier levier d&apos;inclusion durable.
                    </p>
                  </div>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    Nous accompagnons les personnes dans un processus qui vise à renforcer la conscience de leurs ressources, développer leur maturité personnelle et relationnelle, soutenir leur autonomie, cultiver le sens de la responsabilité et favoriser leur capacité à coopérer et à contribuer. Cette démarche prend forme à travers un accompagnement attentif aux singularités, des espaces favorisant l&apos;expérimentation et la coopération, ainsi qu&apos;une relation fondée sur la confiance, la responsabilité et la réciprocité.
                  </p>
                  <p className="text-gray-700 leading-relaxed text-lg mt-4">
                    Notre approche ne se limite pas à préparer à un emploi ; elle vise à former des adultes capables d&apos;évoluer dans un monde complexe sans perdre leur direction.
                  </p>
                </section>

                {/* Faire grandir */}
                <section id="grandir">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-lg bg-purple-500 flex items-center justify-center">
                      <Lightbulb className="w-5 h-5 text-white" />
                    </div>
                    <h2 className="text-2xl font-bold text-[#0b2a55]">Faire grandir plutôt que faire à la place</h2>
                  </div>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    Nous privilégions une posture d&apos;accompagnement qui encourage l&apos;initiative et l&apos;appropriation des parcours. Il ne s&apos;agit pas de faire pour, mais de faire grandir.
                  </p>
                  <p className="text-gray-700 leading-relaxed text-lg mt-4">
                    Cette exigence repose sur une certitude : la dignité se renforce lorsque chacun se découvre utile. Le sentiment de contribution restaure la confiance, soutient l&apos;engagement et participe à la construction d&apos;identités professionnelles plus solides.
                  </p>
                  <p className="text-gray-700 leading-relaxed text-lg mt-4">
                    Ainsi, nous cherchons moins à orienter qu&apos;à éveiller, moins à prescrire qu&apos;à rendre chacun auteur de sa trajectoire.
                  </p>
                </section>

                {/* Image section - Solidarité */}
                <div className="relative rounded-2xl overflow-hidden shadow-lg">
                  <img 
                    src="https://images.unsplash.com/photo-1758599669186-9eaf14f6f3ea?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA3MDR8MHwxfHNlYXJjaHwzfHxoZWxwaW5nJTIwaGFuZHMlMjBzdXBwb3J0JTIwY29tbXVuaXR5JTIwc29saWRhcml0eXxlbnwwfHx8fDE3NzA0NjM5Mzh8MA&ixlib=rb-4.1.0&q=85" 
                    alt="Solidarité et engagement communautaire" 
                    className="w-full h-64 md:h-72 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0b2a55]/70 to-transparent flex items-end">
                    <p className="p-6 text-white text-lg font-medium">
                      S&apos;engager ensemble pour un impact durable
                    </p>
                  </div>
                </div>

                {/* Approche systémique */}
                <section id="systemique">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-lg bg-rose-500 flex items-center justify-center">
                      <Globe className="w-5 h-5 text-white" />
                    </div>
                    <h2 className="text-2xl font-bold text-[#0b2a55]">Une approche systémique et profondément humaine</h2>
                  </div>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    Les difficultés professionnelles sont rarement uniquement professionnelles. Elles s&apos;inscrivent dans des réalités plus larges — personnelles, sociales, parfois culturelles — qui appellent une lecture globale des situations.
                  </p>
                  <p className="text-gray-700 leading-relaxed text-lg mt-4">
                    Notre action vise donc à articuler trois dimensions indissociables : le développement intérieur, la capacité professionnelle et l&apos;utilité sociale. Cet équilibre permet de sécuriser les parcours sans enfermer les destinées et d&apos;ouvrir des perspectives durables.
                  </p>
                </section>

                {/* Bâtir des espaces */}
                <section id="espaces">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-lg bg-amber-500 flex items-center justify-center">
                      <Users className="w-5 h-5 text-white" />
                    </div>
                    <h2 className="text-2xl font-bold text-[#0b2a55]">Bâtir des espaces qui structurent les adultes de demain</h2>
                  </div>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    À mesure que certains repères collectifs se fragilisent, notre société a besoin de lieux capables de redonner du sens, de soutenir la responsabilité et de favoriser la maturation des individus.
                  </p>
                  <p className="text-gray-700 leading-relaxed text-lg mt-4">
                    <strong className="text-[#0b2a55]">ALT&amp;ACT</strong> aspire à être l&apos;un de ces espaces.
                  </p>
                  <p className="text-gray-700 leading-relaxed text-lg mt-4">
                    Plus qu&apos;un acteur de l&apos;accompagnement, nous souhaitons contribuer à l&apos;émergence d&apos;une société où chacun peut non seulement trouver sa voie, mais aussi se sentir légitime pour participer à un projet commun. Car nous sommes convaincus que l&apos;avenir ne se construira pas uniquement par l&apos;innovation technologique ou économique, mais par la capacité des femmes et des hommes à grandir, à coopérer et à prendre part à la transformation du monde.
                  </p>
                </section>

                {/* Notre ambition */}
                <section id="ambition" className="mt-12">
                  <div className="p-8 bg-gradient-to-r from-[#0b2a55] to-[#1a4280] rounded-2xl text-white">
                    <h2 className="text-2xl font-bold mb-6 text-center">Notre ambition</h2>
                    <div className="space-y-4 text-lg text-blue-100 text-center">
                      <p>Reconnaître la capacité là où d&apos;autres voient la limite,</p>
                      <p>sécuriser les parcours sans enfermer les destinées,</p>
                      <p>transformer les obstacles — notamment les discriminations — en leviers de justice et de participation.</p>
                    </div>
                    <div className="mt-8 pt-6 border-t border-white/20 text-center">
                      <p className="text-white font-medium">Telle est la vision qui guide ALT&amp;ACT.</p>
                      <p className="text-white font-medium">Telle est la méthode qui structure notre engagement.</p>
                      <p className="text-blue-100 mt-4 italic">
                        Accompagner, pour nous, n&apos;est pas seulement une mission —<br />
                        c&apos;est une contribution à la société de demain.
                      </p>
                    </div>
                  </div>
                </section>

              </div>
            </div>

            <div className="mt-8 flex items-center justify-start">
              <Button onClick={handleBackHome} variant="outline" className="border-[#0b2a55] text-[#0b2a55] hover:bg-[#0b2a55] hover:text-white">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Retour à l&apos;accueil
              </Button>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}

export default VisionMethode;
