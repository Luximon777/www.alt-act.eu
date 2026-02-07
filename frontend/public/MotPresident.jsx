import React, { useEffect } from 'react';
import { ArrowLeft, Quote } from 'lucide-react';
import { Button } from './ui/button';
import { useNavigate } from 'react-router-dom';

function MotPresident() {
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
          <Quote className="w-16 h-16 mx-auto mb-6 opacity-50" />
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Le mot du fondateur</h1>
          <p className="text-xl text-blue-100">Vision et engagement pour ALT&amp;ACT</p>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          
          <div className="relative h-64 md:h-80">
            <img src="https://images.pexels.com/photos/3865834/pexels-photo-3865834.jpeg?w=1200" alt="Vision et leadership" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            <div className="absolute bottom-6 left-6 right-6">
              <p className="text-white text-xl md:text-2xl font-light italic">&quot;Reconnaître la capacité là où d&apos;autres voient la limite.&quot;</p>
            </div>
          </div>

          <div className="p-8 md:p-12 space-y-6">
            
            <p className="text-gray-700 leading-relaxed text-lg">
              Ces dernières années ont sonné la fin des réponses d&apos;hier et ouvert l&apos;exigence de repenser en profondeur nos manières d&apos;accompagner, de former et de faire société. La période post-pandémique a mis sous tension nos services publics — santé, social, éducation, emploi — et éprouvé profondément celles et ceux qui y consacrent leur engagement. Les professionnels de l&apos;accompagnement font aujourd&apos;hui face à une intensification des vulnérabilités, à la montée des enjeux de santé mentale et à l&apos;apparition de problématiques nouvelles, souvent plus complexes et plus imbriquées.
            </p>

            <p className="text-gray-700 leading-relaxed text-lg">
              Dans le même temps, les déséquilibres mondiaux, les conflits, les mutations économiques et technologiques ont transformé nos sociétés à un rythme inédit. Ils ont contribué à creuser les écarts, accentuant les extrêmes de pauvreté comme de richesse, fragilisant nos organisations et installant parfois des modes de fonctionnement qui épuisent les ressources humaines plutôt qu&apos;ils ne les élèvent. Malgré des investissements publics considérables et la multiplication des dispositifs, nous constatons que l&apos;efficacité ne se mesure pas uniquement à l&apos;ampleur des moyens engagés, mais à notre capacité collective à recréer de la cohérence, du sens et des perspectives durables.
            </p>

            <p className="text-gray-700 leading-relaxed text-lg">
              Parallèlement, l&apos;essor fulgurant de l&apos;intelligence artificielle et des technologies redessine nos manières de travailler, d&apos;apprendre et d&apos;entrer en relation. Cette transformation ouvre des opportunités immenses, mais elle porte aussi un risque : celui d&apos;élargir la distance entre ceux qui disposent des clés d&apos;accès et ceux qui en sont privés. Plus que jamais, le progrès doit rester profondément humain, sous peine de nous éloigner les uns des autres au moment même où notre interdépendance devient évidente.
            </p>

            <div className="p-6 bg-blue-50 border-l-4 border-[#0b2a55] rounded-r-lg my-8">
              <p className="text-gray-800 leading-relaxed text-lg italic">
                Face à ces mutations, une question s&apos;impose avec gravité : quel monde préparons-nous pour les générations qui viennent ?
              </p>
            </div>

            <p className="text-gray-700 leading-relaxed text-lg">
              Elle nous renvoie à notre responsabilité commune et nous invite à reconsidérer avec lucidité les fondements de l&apos;éducation, de la formation et de l&apos;accompagnement. Car au-delà des crises financières, sociales ou technologiques que nous traversons, se dessine une crise plus silencieuse : une crise du sens et de l&apos;orientation.
            </p>

            <p className="text-gray-700 leading-relaxed text-lg">
              À bien des égards, notre société ressemble à une période charnière de la vie — un passage où les repères se redéfinissent, où les valeurs cherchent à s&apos;ordonner, et où la tentation des certitudes rapides peut masquer la complexité du réel. Dans ces moments, nous pouvons être attirés par des modèles de réussite qui promettent beaucoup mais n&apos;offrent pas toujours des fondations solides. Retrouver une direction suppose alors de réinterroger ce qui nous relie, ce qui nous élève et ce que nous souhaitons construire ensemble.
            </p>

            <div className="p-6 bg-gradient-to-r from-[#0b2a55]/10 to-[#1a4280]/10 rounded-xl my-8">
              <p className="text-gray-800 leading-relaxed text-lg font-medium">
                C&apos;est dans cet esprit qu&apos;est née ALT&amp;ACT.
              </p>
            </div>

            <p className="text-gray-700 leading-relaxed text-lg">
              Notre conviction est simple : accompagner une personne ne consiste pas seulement à répondre à ses difficultés, mais à reconnaître ce qu&apos;elle porte déjà — une capacité à agir, à apprendre, à contribuer. Nous faisons le choix de voir des forces en devenir là où l&apos;on ne perçoit parfois que des fragilités. Cela implique de sécuriser les parcours sans enfermer les destinées, et d&apos;ouvrir des espaces où chacun peut trouver sa place et exercer pleinement sa responsabilité au sein de la société.
            </p>

            <p className="text-gray-700 leading-relaxed text-lg">
              Cette exigence nous conduit également à agir avec détermination contre toutes les formes de discrimination. Car aucune société ne peut aspirer à la cohésion si l&apos;accès aux opportunités demeure inégal. Promouvoir l&apos;équité n&apos;est pas un principe abstrait ; c&apos;est une condition essentielle pour permettre à chaque personne — notamment celles fragilisées par les parcours de vie — de développer son pouvoir d&apos;agir et de participer à la construction du bien commun.
            </p>

            <p className="text-gray-700 leading-relaxed text-lg">
              Nous croyons profondément que l&apos;avenir se bâtit en passant d&apos;une logique d&apos;assistance à une dynamique de contribution. Les femmes et les hommes que certains désignent encore comme des &quot;demandeurs&quot; sont avant tout des acteurs potentiels de transformation sociale. Lorsque la confiance rencontre la responsabilité, elle fait émerger l&apos;engagement ; et lorsque l&apos;engagement prend racine dans un collectif, il devient une force de progrès partagé.
            </p>

            <div className="p-6 bg-gradient-to-r from-orange-50 to-amber-50 border-l-4 border-orange-500 rounded-r-lg my-8">
              <p className="text-gray-800 leading-relaxed text-lg font-medium">
                Reconnaître la capacité là où d&apos;autres voient la limite, transformer les obstacles — y compris les discriminations — en leviers de justice et de participation, et remettre le sens au cœur de nos actions : telle est l&apos;ambition qui guide mon engagement. Plus qu&apos;une méthode, c&apos;est une vision du développement humain et de la société que je m&apos;efforce d&apos;incarner au quotidien.
              </p>
            </div>

            <p className="text-gray-700 leading-relaxed text-lg">
              <strong className="text-[#0b2a55]">ALT&amp;ACT</strong> est née de cette espérance exigeante : contribuer à une société plus consciente, plus juste et plus solidaire, où chacun peut non seulement trouver sa voie, mais aussi se sentir utile à un projet qui le dépasse.
            </p>

            <div className="border-t border-gray-200 pt-8 mt-8">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-[#0b2a55] rounded-full flex items-center justify-center text-white text-2xl font-bold">
                  CL
                </div>
                <div>
                  <p className="text-xl font-bold text-[#0b2a55]">Chitrasen Luximon</p>
                  <p className="text-gray-600">Fondateur d&apos;ALT&amp;ACT</p>
                </div>
              </div>
            </div>

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

export default MotPresident;
