import React, { useEffect } from 'react';
import { ArrowLeft, Shield, Lock, Eye, FileText, Mail, Database, Clock, Globe, AlertCircle } from 'lucide-react';
import { Button } from './ui/button';
import { useNavigate } from 'react-router-dom';
import Navigation from './Navigation';
import Footer from './Footer';

const PolitiqueConfidentialite = () => {
  const navigate = useNavigate();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleBackHome = () => {
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-gray-50" data-testid="politique-confidentialite">
      <Navigation />
      {/* Header */}
      <header className="bg-gradient-to-r from-[#0b2a55] to-[#1a4280] text-white pt-28 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Button 
            variant="ghost" 
            onClick={handleBackHome}
            className="text-white hover:bg-white/20 mb-6"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Retour à l'accueil
          </Button>
          <div className="flex items-center gap-3 mb-4">
            <Shield className="w-10 h-10" />
            <h1 className="text-3xl md:text-4xl font-bold">Politique de confidentialité</h1>
          </div>
          <p className="text-blue-200 text-lg">
            Protection de vos données personnelles conformément au RGPD
          </p>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 space-y-8">
          
          {/* Introduction */}
          <section className="bg-blue-50 rounded-xl p-6 border border-blue-100">
            <p className="text-gray-700 leading-relaxed">
              La présente politique de confidentialité décrit comment l'association ALT&ACT collecte, utilise et protège vos données personnelles conformément au Règlement (UE) 2016/679 du 27 avril 2016 (RGPD) et à la loi Informatique et Libertés du 6 janvier 1978 modifiée.
            </p>
          </section>

          {/* Section 1 - Responsable du traitement */}
          <section>
            <div className="flex items-center gap-3 mb-4">
              <Database className="w-6 h-6 text-[#0b2a55]" />
              <h2 className="text-2xl font-bold text-gray-900">1. Responsable du traitement</h2>
            </div>
            <p className="text-gray-700 leading-relaxed mb-4">
              Le responsable du traitement de vos données personnelles est :
            </p>
            <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
              <ul className="space-y-2 text-gray-700">
                <li><strong>Association ALT&ACT - Altérité & Action</strong></li>
                <li>23 rue de la Croix, 67201 Eckbolsheim, France</li>
                <li>N° registre : W672017439</li>
                <li>Email : <a href="mailto:contact@alt-act.eu" className="text-[#0b2a55] hover:underline">contact@alt-act.eu</a></li>
                <li>Téléphone : <a href="tel:+33960510882" className="text-[#0b2a55] hover:underline">09 60 51 08 82</a></li>
                <li>Représentant légal : Chitrasen Luximon, Président</li>
              </ul>
            </div>
          </section>

          {/* Section 2 - Données collectées */}
          <section>
            <div className="flex items-center gap-3 mb-4">
              <Lock className="w-6 h-6 text-[#0b2a55]" />
              <h2 className="text-2xl font-bold text-gray-900">2. Données collectées</h2>
            </div>
            <p className="text-gray-700 leading-relaxed mb-4">
              ALT&ACT collecte uniquement les données personnelles nécessaires aux finalités décrites ci-dessous. Les catégories de données collectées sont :
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
              <li><strong>Données d'identification</strong> : nom, prénom, adresse email, numéro de téléphone</li>
              <li><strong>Données de contact</strong> : adresse postale (si nécessaire)</li>
              <li><strong>Données de navigation</strong> : données techniques de connexion (adresse IP, type de navigateur)</li>
              <li><strong>Données liées à l'accompagnement</strong> : parcours professionnel, compétences, objectifs (pour les personnes accompagnées)</li>
            </ul>
          </section>

          {/* Section 3 - Finalités et bases légales */}
          <section>
            <div className="flex items-center gap-3 mb-4">
              <Eye className="w-6 h-6 text-[#0b2a55]" />
              <h2 className="text-2xl font-bold text-gray-900">3. Finalités et bases légales du traitement</h2>
            </div>
            <p className="text-gray-700 leading-relaxed mb-4">
              Vos données sont traitées pour les finalités suivantes :
            </p>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Finalité</th>
                    <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Base légale (Art. 6 RGPD)</th>
                  </tr>
                </thead>
                <tbody className="text-gray-700">
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">Réponse aux demandes de contact</td>
                    <td className="border border-gray-300 px-4 py-2">Intérêt légitime</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">Accompagnement des parcours professionnels</td>
                    <td className="border border-gray-300 px-4 py-2">Exécution d'un contrat / Consentement</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">Gestion des adhésions</td>
                    <td className="border border-gray-300 px-4 py-2">Exécution d'un contrat</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">Envoi d'informations sur nos activités</td>
                    <td className="border border-gray-300 px-4 py-2">Consentement</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">Amélioration de nos services</td>
                    <td className="border border-gray-300 px-4 py-2">Intérêt légitime</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">Respect des obligations légales</td>
                    <td className="border border-gray-300 px-4 py-2">Obligation légale</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Section 4 - Durée de conservation */}
          <section>
            <div className="flex items-center gap-3 mb-4">
              <Clock className="w-6 h-6 text-[#0b2a55]" />
              <h2 className="text-2xl font-bold text-gray-900">4. Durée de conservation</h2>
            </div>
            <p className="text-gray-700 leading-relaxed mb-4">
              Vos données personnelles sont conservées pendant une durée limitée, définie en fonction de la finalité du traitement :
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
              <li><strong>Données de contact (formulaires)</strong> : 3 ans à compter du dernier contact</li>
              <li><strong>Données d'accompagnement</strong> : durée de l'accompagnement + 5 ans</li>
              <li><strong>Données des membres</strong> : durée de l'adhésion + 5 ans</li>
              <li><strong>Données de navigation</strong> : 13 mois maximum</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mt-4">
              À l'expiration de ces délais, vos données sont supprimées ou anonymisées de manière irréversible.
            </p>
          </section>

          {/* Section 5 - Destinataires */}
          <section>
            <div className="flex items-center gap-3 mb-4">
              <FileText className="w-6 h-6 text-[#0b2a55]" />
              <h2 className="text-2xl font-bold text-gray-900">5. Destinataires des données</h2>
            </div>
            <p className="text-gray-700 leading-relaxed mb-4">
              Vos données personnelles peuvent être communiquées aux destinataires suivants :
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
              <li><strong>Personnel habilité d'ALT&ACT</strong> : membres de l'équipe en charge de l'accompagnement et de l'administration</li>
              <li><strong>Sous-traitants techniques</strong> : hébergeur du site (GitHub, Inc.)</li>
              <li><strong>Partenaires</strong> : uniquement avec votre consentement explicite, dans le cadre de l'accompagnement</li>
              <li><strong>Autorités compétentes</strong> : sur requête légale uniquement</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mt-4">
              ALT&ACT ne vend ni ne loue vos données personnelles à des tiers.
            </p>
          </section>

          {/* Section 6 - Transferts hors UE */}
          <section>
            <div className="flex items-center gap-3 mb-4">
              <Globe className="w-6 h-6 text-[#0b2a55]" />
              <h2 className="text-2xl font-bold text-gray-900">6. Transferts hors Union européenne</h2>
            </div>
            <p className="text-gray-700 leading-relaxed mb-4">
              Dans le cadre de l'hébergement du site, certaines données peuvent être transférées vers les États-Unis (GitHub, Inc.).
            </p>
            <div className="bg-amber-50 rounded-lg p-4 border border-amber-200">
              <p className="text-gray-700 leading-relaxed">
                <strong>Garanties :</strong> GitHub, Inc. est certifié conforme au <strong>EU-U.S. Data Privacy Framework</strong> (décision d'adéquation de la Commission européenne du 10 juillet 2023), garantissant un niveau de protection des données équivalent à celui de l'Union européenne.
              </p>
            </div>
          </section>

          {/* Section 7 - Sécurité */}
          <section>
            <div className="flex items-center gap-3 mb-4">
              <Shield className="w-6 h-6 text-[#0b2a55]" />
              <h2 className="text-2xl font-bold text-gray-900">7. Sécurité des données</h2>
            </div>
            <p className="text-gray-700 leading-relaxed mb-4">
              ALT&ACT met en œuvre les mesures techniques et organisationnelles appropriées pour protéger vos données personnelles contre tout accès non autorisé, perte, altération ou divulgation :
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
              <li>Connexion sécurisée (HTTPS/TLS)</li>
              <li>Accès restreint aux données sur la base du besoin d'en connaître</li>
              <li>Sensibilisation du personnel à la protection des données</li>
              <li>Procédures de gestion des incidents de sécurité</li>
            </ul>
          </section>

          {/* Section 8 - Droits des personnes */}
          <section>
            <div className="flex items-center gap-3 mb-4">
              <FileText className="w-6 h-6 text-[#0b2a55]" />
              <h2 className="text-2xl font-bold text-gray-900">8. Vos droits</h2>
            </div>
            <p className="text-gray-700 leading-relaxed mb-4">
              Conformément au RGPD, vous disposez des droits suivants sur vos données personnelles :
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                <h3 className="font-semibold text-gray-900 mb-2">Droit d'accès</h3>
                <p className="text-sm text-gray-600">Obtenir confirmation du traitement et accéder à vos données</p>
              </div>
              <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                <h3 className="font-semibold text-gray-900 mb-2">Droit de rectification</h3>
                <p className="text-sm text-gray-600">Corriger des données inexactes ou incomplètes</p>
              </div>
              <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                <h3 className="font-semibold text-gray-900 mb-2">Droit à l'effacement</h3>
                <p className="text-sm text-gray-600">Demander la suppression de vos données</p>
              </div>
              <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                <h3 className="font-semibold text-gray-900 mb-2">Droit à la limitation</h3>
                <p className="text-sm text-gray-600">Restreindre le traitement de vos données</p>
              </div>
              <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                <h3 className="font-semibold text-gray-900 mb-2">Droit à la portabilité</h3>
                <p className="text-sm text-gray-600">Recevoir vos données dans un format structuré</p>
              </div>
              <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                <h3 className="font-semibold text-gray-900 mb-2">Droit d'opposition</h3>
                <p className="text-sm text-gray-600">Vous opposer au traitement de vos données</p>
              </div>
            </div>
            <p className="text-gray-700 leading-relaxed mt-4">
              Vous pouvez également retirer votre consentement à tout moment, sans que cela n'affecte la licéité du traitement effectué avant ce retrait.
            </p>
          </section>

          {/* Section 9 - Exercice des droits */}
          <section>
            <div className="flex items-center gap-3 mb-4">
              <Mail className="w-6 h-6 text-[#0b2a55]" />
              <h2 className="text-2xl font-bold text-gray-900">9. Comment exercer vos droits</h2>
            </div>
            <p className="text-gray-700 leading-relaxed mb-4">
              Pour exercer vos droits, vous pouvez nous contacter :
            </p>
            <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
              <ul className="space-y-2 text-gray-700">
                <li><strong>Par email :</strong> <a href="mailto:contact@alt-act.eu" className="text-[#0b2a55] hover:underline">contact@alt-act.eu</a></li>
                <li><strong>Par courrier :</strong> ALT&ACT - Protection des données, 23 rue de la Croix, 67201 Eckbolsheim, France</li>
              </ul>
            </div>
            <p className="text-gray-700 leading-relaxed mt-4">
              Merci de joindre à votre demande une copie d'un justificatif d'identité. Une réponse vous sera apportée dans un délai d'un mois à compter de la réception de votre demande.
            </p>
          </section>

          {/* Section 10 - Réclamation CNIL */}
          <section>
            <div className="flex items-center gap-3 mb-4">
              <AlertCircle className="w-6 h-6 text-[#0b2a55]" />
              <h2 className="text-2xl font-bold text-gray-900">10. Réclamation auprès de la CNIL</h2>
            </div>
            <p className="text-gray-700 leading-relaxed mb-4">
              Si vous estimez, après nous avoir contactés, que vos droits sur vos données ne sont pas respectés, vous pouvez introduire une réclamation auprès de la CNIL :
            </p>
            <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
              <ul className="space-y-2 text-gray-700">
                <li><strong>Commission Nationale de l'Informatique et des Libertés (CNIL)</strong></li>
                <li>3 Place de Fontenoy - TSA 80715</li>
                <li>75334 Paris Cedex 07</li>
                <li>Site web : <a href="https://www.cnil.fr" target="_blank" rel="noopener noreferrer" className="text-[#0b2a55] hover:underline">www.cnil.fr</a></li>
              </ul>
            </div>
          </section>

          {/* Section 11 - Cookies */}
          <section>
            <div className="flex items-center gap-3 mb-4">
              <Database className="w-6 h-6 text-[#0b2a55]" />
              <h2 className="text-2xl font-bold text-gray-900">11. Cookies</h2>
            </div>
            <p className="text-gray-700 leading-relaxed mb-4">
              Ce site utilise uniquement des <strong>cookies techniques strictement nécessaires</strong> à son fonctionnement. Ces cookies sont exemptés de consentement conformément aux recommandations de la CNIL.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              <strong>Cookies utilisés :</strong>
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
              <li>Cookies de session pour la navigation</li>
              <li>Cookies de préférences (langue, affichage)</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mt-4">
              <strong>Aucun cookie publicitaire, de mesure d'audience ou de traçage tiers n'est utilisé sur ce site.</strong>
            </p>
          </section>

          {/* Section 12 - Modifications */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">12. Modifications de la politique</h2>
            <p className="text-gray-700 leading-relaxed">
              ALT&ACT se réserve le droit de modifier la présente politique de confidentialité à tout moment. En cas de modification substantielle, nous vous en informerons par tout moyen approprié. Nous vous invitons à consulter régulièrement cette page.
            </p>
          </section>

          {/* Date de mise à jour */}
          <div className="pt-6 border-t border-gray-200">
            <p className="text-gray-500 text-sm">
              <strong>Dernière mise à jour :</strong> Février 2025
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default PolitiqueConfidentialite;
