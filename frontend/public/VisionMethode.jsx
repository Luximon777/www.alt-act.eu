import React, { useEffect } from 'react';
import { ArrowLeft, Eye, Target, Users, Heart, Lightbulb, TrendingUp, Globe, Compass } from 'lucide-react';
import { Button } from './ui/button';
import { useNavigate } from 'react-router-dom';

function VisionMethode() {
  const navigate = useNavigate();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleBackHome = () => {
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-gradient-to-br from-[#0b2a55] to-[#1a4280] text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Eye className="w-16 h-16 mx-auto mb-6 opacity-50" />
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Vision et méthode</h1>
          <p className="text-xl text-blue-100 italic max-w-3xl mx-auto">
            Accompagner une personne, ce n&apos;est pas seulement sécuriser un parcours — c&apos;est révéler sa capacité à prendre part à la construction du monde qui vient.
          </p>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          <div className="p-8 md:p-12 space-y-8">
            
            {/* Introduction */}
            <section>
              <p className="text-gray-700 leading-relaxed text-lg">
                Les fragilités que connaissent aujourd&apos;hui nombre de nos institutions, de nos organisations, mais aussi de nos concitoyens, ne sont pas apparues soudainement ; elles s&apos;inscrivent dans des transformations profondes engagées depuis plusieurs années. Dans un monde marqué par des mutations économiques, technologiques et sociales durables, ces tensions nous invitent à repenser avec lucidité nos manières d&apos;accompagner, de former et de faire société.
              </p>
              <p className="text-gray-700 leading-relaxed text-lg mt-4">
                C&apos;est face à cette réalité que s&apos;enracine la conviction d&apos;<strong className="text-[#0b2a55]">ALT&amp;ACT</strong> : les défis de notre époque ne pourront être relevés uniquement par des réponses techniques ou par la multiplication des dispositifs. Ils appellent une compréhension renouvelée de l&apos;être humain, de ses capacités et de sa place dans la construction du bien commun.
              </p>
            </section>

            {/* Notre vision */}
            <section>
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
            <section>
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

            {/* Notre méthode */}
            <section>
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
            <section>
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

            {/* Approche systémique */}
            <section>
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
            <section>
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
            <section className="mt-12">
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
  );
}

export default VisionMethode;
