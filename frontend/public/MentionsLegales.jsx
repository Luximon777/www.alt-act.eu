import React, { useEffect } from 'react';
import { ArrowLeft } from 'lucide-react';
import { Button } from './ui/button';
import { useNavigate } from 'react-router-dom';

const MentionsLegales = () => {
  const navigate = useNavigate();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleBackHome = () => {
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-gradient-to-br from-[#0b2a55] to-[#1a4280] text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Mentions legales</h1>
          <p className="text-xl text-blue-100">Association ALT&ACT - Alterite & Action</p>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 space-y-8">
          
          {/* Section 1 */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Editeur du site</h2>
            <ul className="space-y-2 text-gray-700">
              <li><strong>Denomination :</strong> Association ALT&ACT - Alterite & Action</li>
              <li><strong>Forme juridique :</strong> Association de droit local Alsace-Moselle (loi du 19 avril 1908)</li>
              <li><strong>Siege social :</strong> 23 rue de la Croix, 67201 Eckbolsheim, France</li>
              <li><strong>Numero au registre des associations :</strong> W672017439</li>
              <li>
                <strong>Email :</strong>{' '}
                <a href="mailto:contact@altact.org" className="text-[#0b2a55] hover:underline">
                  contact@altact.org
                </a>
              </li>
            </ul>
          </section>

          {/* Section 2 */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Directeur de la publication</h2>
            <p className="text-gray-700">
              <strong>Chitrasen Luximon</strong>, President et representant legal de l'association ALT&ACT.
            </p>
          </section>

          {/* Section 3 */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Hebergement</h2>
            <p className="text-gray-700 mb-2">
              Le site est heberge par <strong>GitHub, Inc.</strong> (GitHub Pages).
            </p>
            <p className="text-gray-700 mb-2">
              Adresse : 88 Colin P. Kelly Jr. Street, San Francisco, CA 94107, USA.
            </p>
            <p className="text-gray-600 text-sm italic">
              Remarque : Le site utilise GitHub Pages pour l'hebergement statique.
            </p>
          </section>

          {/* Section 4 */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Propriete intellectuelle</h2>
            <p className="text-gray-700 leading-relaxed">
              L'ensemble du contenu present sur ce site (textes, visuels, logos, elements graphiques, documents)
              est protege par le droit d'auteur et demeure la propriete de l'association ALT&ACT ou de ses partenaires,
              sauf mention contraire. Toute reproduction, representation ou diffusion, totale ou partielle,
              sans autorisation prealable, est interdite.
            </p>
          </section>

          {/* Section 5 */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Liens hypertextes</h2>
            <p className="text-gray-700 leading-relaxed">
              Ce site peut contenir des liens vers des sites tiers. ALT&ACT n'exerce aucun controle sur ces sites
              et ne peut etre tenue responsable de leur contenu ou de leurs pratiques.
            </p>
          </section>

          {/* Section 6 - RGPD Complete */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Protection des donnees personnelles (RGPD)</h2>
            
            <p className="text-gray-700 leading-relaxed mb-4">
              ALT&ACT s'engage a respecter le Reglement general sur la protection des donnees (RGPD), qui encadre la maniere dont les donnees a caractere personnel peuvent etre collectees, utilisees, conservees et, le cas echeant, transferees.
            </p>
            
            <p className="text-gray-700 leading-relaxed mb-4">
              Dans ce cadre, ALT&ACT met en oeuvre une gestion responsable des donnees, fondee sur la transparence et la protection des droits des personnes. Les personnes accompagnees disposent notamment :
            </p>
            
            <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2 ml-4">
              <li>du droit d'etre informees de maniere claire et accessible sur l'usage de leurs donnees,</li>
              <li>du droit d'acces, de rectification, d'effacement (droit a l'oubli),</li>
              <li>du droit d'opposition - y compris a l'utilisation a des fins de profilage -</li>
              <li>ainsi que du droit a la portabilite des donnees.</li>
            </ul>
            
            <p className="text-gray-700 leading-relaxed mb-4">
              ALT&ACT applique des mesures de securite adaptees aux risques afin de proteger les donnees contre tout acces non autorise, perte ou divulgation. En cas de violation de donnees a caractere personnel, ALT&ACT applique les obligations de notification prevues par le RGPD lorsque celles-ci sont requises.
            </p>
            
            <p className="text-gray-700 leading-relaxed mb-4">
              Lorsque les traitements de donnees presentent des risques particuliers ou repondent aux criteres prevus par la reglementation, ALT&ACT s'assure de la bonne organisation de sa gouvernance en matiere de protection des donnees, incluant, le cas echeant, la designation d'un delegue a la protection des donnees.
            </p>
            
            <p className="text-gray-700 leading-relaxed mb-4">
              Enfin, ALT&ACT veille a ce que tout transfert eventuel de donnees vers un pays tiers s'effectue dans le respect du cadre RGPD, notamment au regard du niveau de protection applicable et des garanties requises.
            </p>
            
            <p className="text-gray-700 leading-relaxed">
              Pour exercer vos droits, vous pouvez contacter ALT&ACT a l'adresse :{' '}
              <a href="mailto:contact@altact.org" className="text-[#0b2a55] hover:underline">
                contact@altact.org
              </a>
            </p>
          </section>

          {/* Section 7 */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Contact</h2>
            <p className="text-gray-700">
              Pour toute question, vous pouvez contacter ALT&ACT a l'adresse :{' '}
              <a href="mailto:contact@altact.org" className="text-[#0b2a55] hover:underline">
                contact@altact.org
              </a>
            </p>
          </section>
        </div>

        {/* Footer */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <Button
            onClick={handleBackHome}
            variant="outline"
            className="border-[#0b2a55] text-[#0b2a55] hover:bg-[#0b2a55] hover:text-white"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Retour a l'accueil
          </Button>
          <span className="text-gray-500 text-sm">
            Derniere mise a jour : {new Date().toLocaleDateString('fr-FR', { 
              year: 'numeric', 
              month: 'long', 
              day: 'numeric' 
            })}
          </span>
        </div>
      </main>
    </div>
  );
};

export default MentionsLegales;
