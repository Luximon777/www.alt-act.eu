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
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Le mot du Président fondateur</h1>
          <p className="text-xl text-blue-100">Vision et engagement pour ALT&amp;ACT</p>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          
          <div className="relative h-64 md:h-80">
            <img src="https://images.pexels.com/photos/3865834/pexels-photo-3865834.jpeg?w=1200" alt="Vision et leadership" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            <div className="absolute bottom-6 left-6 right-6">
              <p className="text-white text-xl md:text-2xl font-light italic">&quot;Le développement économique et social ne peut être dissocié du développement humain.&quot;</p>
            </div>
          </div>

          <div className="p-8 md:p-12 space-y-6">
            
            <p className="text-gray-700 leading-relaxed text-lg">
              <strong className="text-[#0b2a55]">ALT&amp;ACT</strong> est née d&apos;une conviction profonde : le développement économique et social ne peut être dissocié du développement humain. L&apos;insertion professionnelle constitue un processus de croissance permettant à chaque individu de révéler son potentiel au service de la société.
            </p>

            <p className="text-gray-700 leading-relaxed text-lg">
              Chaque personne est porteuse de capacités, de talents et de ressources souvent inexploités. Favoriser l&apos;insertion professionnelle, c&apos;est créer les conditions permettant à ces potentialités de s&apos;exprimer, dans le respect de la dignité humaine.
            </p>

            <div className="p-6 bg-blue-50 border-l-4 border-[#0b2a55] rounded-r-lg my-8">
              <p className="text-gray-800 leading-relaxed text-lg italic">
                ALT&amp;ACT s&apos;inscrit dans une vision du développement fondée sur la participation active des personnes concernées.
              </p>
            </div>

            <p className="text-gray-700 leading-relaxed text-lg">
              La coopération, la consultation et la coresponsabilité constituent des leviers essentiels de transformation sociale.
            </p>

            <p className="text-gray-700 leading-relaxed text-lg">
              L&apos;association agit comme un cadre structurant, favorisant l&apos;émergence d&apos;initiatives locales, l&apos;autonomie des acteurs et la montée en capacité des personnes accompagnées.
            </p>

            <p className="text-gray-700 leading-relaxed text-lg">
              Nos actions accordent une attention particulière aux besoins essentiels : la construction de l&apos;identité professionnelle, l&apos;accès à la formation, la capacité à se projeter, le bien-être au travail.
            </p>

            <p className="text-gray-700 leading-relaxed text-lg">
              ALT&amp;ACT développe ses projets en dialogue avec les acteurs institutionnels, associatifs et économiques, notamment via <strong>RE&apos;ACTIF PRO</strong>, visant à articuler accompagnement humain et innovation responsable.
            </p>

            <div className="p-6 bg-gradient-to-r from-[#0b2a55]/10 to-[#1a4280]/10 rounded-xl my-8">
              <p className="text-gray-800 leading-relaxed text-lg font-medium">
                Je souhaite qu&apos;ALT&amp;ACT œuvre pour un changement de paradigme : passer d&apos;une logique de &quot;demandeurs d&apos;emploi&quot; à une reconnaissance pleine des personnes comme <strong>contributeurs à la société</strong>. Convaincue du potentiel de chacun, l&apos;association développe des pratiques qui mobilisent l&apos;intelligence collective au service d&apos;un progrès partagé.
              </p>
            </div>

            <div className="border-t border-gray-200 pt-8 mt-8">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-[#0b2a55] rounded-full flex items-center justify-center text-white text-2xl font-bold">
                  CL
                </div>
                <div>
                  <p className="text-xl font-bold text-[#0b2a55]">Chitrasen Luximon</p>
                  <p className="text-gray-600">Président fondateur - ALT&amp;ACT</p>
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
