import React, { useEffect } from 'react';
import { ArrowLeft, Shield, Lock, Eye, FileText, Mail } from 'lucide-react';
import { Button } from './ui/button';
import { useNavigate } from 'react-router-dom';

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
      {/* Header */}
      <header className="bg-gradient-to-r from-[#0b2a55] to-[#1a4280] text-white py-16">
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
            Protection de vos données personnelles
          </p>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 space-y-8">
          
          <section>
            <div className="flex items-center gap-3 mb-4">
              <Lock className="w-6 h-6 text-[#0b2a55]" />
              <h2 className="text-2xl font-bold text-gray-900">1. Collecte des données</h2>
            </div>
            <p className="text-gray-700 leading-relaxed">
              ALT&ACT collecte uniquement les données personnelles nécessaires au bon fonctionnement de ses services et à l'accompagnement des personnes. Ces données sont collectées de manière transparente et avec le consentement explicite des utilisateurs.
            </p>
          </section>

          <section>
            <div className="flex items-center gap-3 mb-4">
              <Eye className="w-6 h-6 text-[#0b2a55]" />
              <h2 className="text-2xl font-bold text-gray-900">2. Utilisation des données</h2>
            </div>
            <p className="text-gray-700 leading-relaxed mb-4">
              Les données collectées sont utilisées exclusivement pour :
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
              <li>L'accompagnement personnalisé des parcours professionnels</li>
              <li>La communication d'informations relatives à nos services</li>
              <li>L'amélioration continue de nos dispositifs</li>
              <li>Le respect de nos obligations légales</li>
            </ul>
          </section>

          <section>
            <div className="flex items-center gap-3 mb-4">
              <Shield className="w-6 h-6 text-[#0b2a55]" />
              <h2 className="text-2xl font-bold text-gray-900">3. Protection des données</h2>
            </div>
            <p className="text-gray-700 leading-relaxed">
              ALT&ACT met en œuvre toutes les mesures techniques et organisationnelles nécessaires pour garantir la sécurité et la confidentialité des données personnelles, conformément au Règlement Général sur la Protection des Données (RGPD).
            </p>
          </section>

          <section>
            <div className="flex items-center gap-3 mb-4">
              <FileText className="w-6 h-6 text-[#0b2a55]" />
              <h2 className="text-2xl font-bold text-gray-900">4. Vos droits</h2>
            </div>
            <p className="text-gray-700 leading-relaxed mb-4">
              Conformément à la réglementation en vigueur, vous disposez des droits suivants :
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
              <li>Droit d'accès à vos données personnelles</li>
              <li>Droit de rectification</li>
              <li>Droit à l'effacement</li>
              <li>Droit à la limitation du traitement</li>
              <li>Droit à la portabilité</li>
              <li>Droit d'opposition</li>
            </ul>
          </section>

          <section>
            <div className="flex items-center gap-3 mb-4">
              <Mail className="w-6 h-6 text-[#0b2a55]" />
              <h2 className="text-2xl font-bold text-gray-900">5. Contact</h2>
            </div>
            <p className="text-gray-700 leading-relaxed">
              Pour exercer vos droits ou pour toute question relative à la protection de vos données personnelles, vous pouvez nous contacter à l'adresse : <a href="mailto:contact@altact.org" className="text-[#0b2a55] hover:underline font-medium">contact@altact.org</a>
            </p>
          </section>

          <div className="pt-6 border-t border-gray-200">
            <p className="text-gray-500 text-sm">
              Dernière mise à jour : Décembre 2025
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default PolitiqueConfidentialite;
