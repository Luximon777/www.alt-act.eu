import React, { useEffect } from 'react';
import { ArrowLeft } from 'lucide-react';
import { Button } from './ui/button';
import { useNavigate } from 'react-router-dom';
import Navigation from './Navigation';
import Footer from './Footer';

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
      <Navigation />
      {/* Header */}
      <header className="bg-gradient-to-br from-[#0b2a55] to-[#1a4280] text-white pt-28 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Mentions légales</h1>
          <p className="text-xl text-blue-100">Association ALT&ACT - Altérité & Action</p>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 space-y-8">
          
          {/* Section 1 - Éditeur du site */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Éditeur du site</h2>
            <ul className="space-y-2 text-gray-700">
              <li><strong>Dénomination :</strong> Association ALT&ACT - Altérité & Action</li>
              <li><strong>Forme juridique :</strong> Association de droit local Alsace-Moselle (loi du 19 avril 1908)</li>
              <li><strong>Siège social :</strong> 23 rue de la Croix, 67201 Eckbolsheim, France</li>
              <li><strong>Numéro au registre des associations :</strong> En cours d'obtention</li>
              <li><strong>Téléphone fixe :</strong> <a href="tel:+33960510882" className="text-[#0b2a55] hover:underline">09 60 51 08 82</a></li>
              <li><strong>Téléphone mobile :</strong> <a href="tel:+33658165883" className="text-[#0b2a55] hover:underline">06 58 16 58 83</a></li>
              <li>
                <strong>Email :</strong>{' '}
                <a href="mailto:contact@alt-act.eu" className="text-[#0b2a55] hover:underline">
                  contact@alt-act.eu
                </a>
              </li>
            </ul>
          </section>

          {/* Section 2 - Directeur de publication */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Directeur de la publication</h2>
            <p className="text-gray-700">
              <strong>Chitrasen Luximon</strong>, Président et représentant légal de l'association ALT&ACT.
            </p>
          </section>

          {/* Section 3 - Hébergement */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Hébergement</h2>
            <p className="text-gray-700 mb-2">
              Le site est hébergé par <strong>GitHub, Inc.</strong> (GitHub Pages).
            </p>
            <ul className="space-y-2 text-gray-700">
              <li><strong>Adresse :</strong> 88 Colin P. Kelly Jr. Street, San Francisco, CA 94107, USA</li>
              <li><strong>Site web :</strong> <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-[#0b2a55] hover:underline">https://github.com</a></li>
            </ul>
            <p className="text-gray-600 text-sm italic mt-2">
              Note : GitHub, Inc. est certifié conforme au Data Privacy Framework UE-États-Unis, garantissant un niveau de protection adéquat des données personnelles.
            </p>
          </section>

          {/* Section 4 - Propriété intellectuelle */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Propriété intellectuelle</h2>
            <p className="text-gray-700 leading-relaxed">
              L'ensemble du contenu présent sur ce site (textes, visuels, logos, éléments graphiques, documents)
              est protégé par le droit d'auteur et demeure la propriété de l'association ALT&ACT ou de ses partenaires,
              sauf mention contraire. Toute reproduction, représentation ou diffusion, totale ou partielle,
              sans autorisation préalable écrite, est interdite conformément aux articles L.122-4 et L.335-2 du Code de la propriété intellectuelle.
            </p>
          </section>

          {/* Section 5 - Liens hypertextes */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Liens hypertextes</h2>
            <p className="text-gray-700 leading-relaxed">
              Ce site peut contenir des liens vers des sites tiers. ALT&ACT n'exerce aucun contrôle sur ces sites
              et ne peut être tenue responsable de leur contenu, de leurs pratiques en matière de protection des données ou de tout dommage résultant de leur utilisation.
            </p>
          </section>

          {/* Section 6 - RGPD */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Protection des données personnelles (RGPD)</h2>
            
            <h3 className="text-lg font-semibold text-gray-800 mb-2">6.1 Responsable du traitement</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Le responsable du traitement des données personnelles est l'association ALT&ACT, représentée par son Président, Chitrasen Luximon.
            </p>
            
            <h3 className="text-lg font-semibold text-gray-800 mb-2">6.2 Engagement RGPD</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              ALT&ACT s'engage à respecter le Règlement (UE) 2016/679 du 27 avril 2016 relatif à la protection des personnes physiques à l'égard du traitement des données à caractère personnel (RGPD), ainsi que la loi Informatique et Libertés du 6 janvier 1978 modifiée.
            </p>
            
            <h3 className="text-lg font-semibold text-gray-800 mb-2">6.3 Droits des personnes</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Conformément à la réglementation européenne, vous disposez des droits suivants :
            </p>
            <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2 ml-4">
              <li><strong>Droit d'information</strong> : être informé de manière claire et accessible sur l'usage de vos données</li>
              <li><strong>Droit d'accès</strong> : obtenir une copie de vos données personnelles</li>
              <li><strong>Droit de rectification</strong> : corriger des données inexactes ou incomplètes</li>
              <li><strong>Droit à l'effacement</strong> : demander la suppression de vos données (droit à l'oubli)</li>
              <li><strong>Droit à la limitation</strong> : restreindre le traitement de vos données</li>
              <li><strong>Droit à la portabilité</strong> : recevoir vos données dans un format structuré</li>
              <li><strong>Droit d'opposition</strong> : vous opposer au traitement, y compris au profilage</li>
            </ul>
            
            <h3 className="text-lg font-semibold text-gray-800 mb-2">6.4 Exercice des droits</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Pour exercer vos droits, vous pouvez contacter ALT&ACT :
            </p>
            <ul className="list-disc list-inside text-gray-700 mb-4 space-y-1 ml-4">
              <li>Par email : <a href="mailto:contact@alt-act.eu" className="text-[#0b2a55] hover:underline">contact@alt-act.eu</a></li>
              <li>Par courrier : ALT&ACT, 23 rue de la Croix, 67201 Eckbolsheim, France</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mb-4">
              Une réponse vous sera apportée dans un délai d'un mois suivant la réception de votre demande.
            </p>
            
            <h3 className="text-lg font-semibold text-gray-800 mb-2">6.5 Réclamation</h3>
            <p className="text-gray-700 leading-relaxed">
              Si vous estimez que vos droits ne sont pas respectés, vous pouvez introduire une réclamation auprès de la Commission Nationale de l'Informatique et des Libertés (CNIL) :
            </p>
            <ul className="list-disc list-inside text-gray-700 mt-2 space-y-1 ml-4">
              <li>Site web : <a href="https://www.cnil.fr" target="_blank" rel="noopener noreferrer" className="text-[#0b2a55] hover:underline">www.cnil.fr</a></li>
              <li>Adresse : CNIL, 3 Place de Fontenoy - TSA 80715, 75334 Paris Cedex 07</li>
            </ul>
          </section>

          {/* Section 7 - Cookies */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Cookies</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Ce site utilise uniquement des cookies techniques strictement nécessaires à son fonctionnement. Ces cookies ne nécessitent pas votre consentement préalable conformément à l'article 82 de la loi Informatique et Libertés.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Aucun cookie publicitaire, de mesure d'audience ou de traçage tiers n'est utilisé sur ce site.
            </p>
          </section>

          {/* Section 8 - Limitation de responsabilité */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Limitation de responsabilité</h2>
            <p className="text-gray-700 leading-relaxed">
              ALT&ACT s'efforce d'assurer l'exactitude et la mise à jour des informations diffusées sur ce site. Toutefois, ALT&ACT ne peut garantir l'exactitude, la précision ou l'exhaustivité des informations mises à disposition. En conséquence, ALT&ACT décline toute responsabilité pour toute imprécision, inexactitude ou omission portant sur des informations disponibles sur ce site.
            </p>
          </section>

          {/* Section 9 - Droit applicable */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Droit applicable</h2>
            <p className="text-gray-700 leading-relaxed">
              Les présentes mentions légales sont régies par le droit français. En cas de litige, les tribunaux français seront seuls compétents.
            </p>
          </section>

          {/* Section 10 - Contact */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Contact</h2>
            <p className="text-gray-700">
              Pour toute question concernant ces mentions légales, vous pouvez contacter ALT&ACT :
            </p>
            <ul className="list-disc list-inside text-gray-700 mt-2 space-y-1 ml-4">
              <li>Email : <a href="mailto:contact@alt-act.eu" className="text-[#0b2a55] hover:underline">contact@alt-act.eu</a></li>
              <li>Téléphone : <a href="tel:+33960510882" className="text-[#0b2a55] hover:underline">09 60 51 08 82</a></li>
            </ul>
          </section>
        </div>

        {/* Footer navigation */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <Button
            onClick={handleBackHome}
            variant="outline"
            className="border-[#0b2a55] text-[#0b2a55] hover:bg-[#0b2a55] hover:text-white"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Retour à l'accueil
          </Button>
          <span className="text-gray-500 text-sm">
            Dernière mise à jour : Février 2025
          </span>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default MentionsLegales;
