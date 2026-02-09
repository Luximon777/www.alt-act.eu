import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Heart, Mail, Phone, MapPin, ArrowUp } from 'lucide-react';

const Footer = () => {
  const navigate = useNavigate();
  
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#0b2a55] text-white" data-testid="footer">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <h3 className="text-2xl font-bold mb-4">ALT&ACT</h3>
            <p className="text-blue-200 mb-6 leading-relaxed">
              L'insertion sans barrières. Des trajectoires professionnelles durables pour tous.
            </p>
            <div className="flex items-center gap-2 text-amber-400">
              <Heart className="w-5 h-5" />
              <span className="text-sm font-medium">Association d'intérêt général</span>
            </div>
          </div>

          {/* Mission */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Mission</h4>
            <ul className="space-y-3">
              <li>
                <a href="/notre-mission" onClick={(e) => { e.preventDefault(); navigate('/notre-mission'); }} className="text-blue-200 hover:text-white transition-colors">
                  Notre mission
                </a>
              </li>
              <li>
                <a href="/notre-vision" onClick={(e) => { e.preventDefault(); navigate('/notre-vision'); }} className="text-blue-200 hover:text-white transition-colors">
                  Notre vision
                </a>
              </li>
              <li>
                <a href="/notre-action" onClick={(e) => { e.preventDefault(); navigate('/notre-action'); }} className="text-blue-200 hover:text-white transition-colors">
                  Notre action
                </a>
              </li>
            </ul>
          </div>

          {/* Présentation */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Présentation</h4>
            <ul className="space-y-3">
              <li>
                <a href="/vision-methode" onClick={(e) => { e.preventDefault(); navigate('/vision-methode'); }} className="text-blue-200 hover:text-white transition-colors">
                  Vision et méthode
                </a>
              </li>
              <li>
                <a href="/mot-president" onClick={(e) => { e.preventDefault(); navigate('/mot-president'); }} className="text-blue-200 hover:text-white transition-colors">
                  Le mot du fondateur
                </a>
              </li>
              <li>
                <a href="/membres" onClick={(e) => { e.preventDefault(); navigate('/membres'); }} className="text-blue-200 hover:text-white transition-colors">
                  Nos membres
                </a>
              </li>
              <li>
                <a href="/charte-ethique" onClick={(e) => { e.preventDefault(); navigate('/charte-ethique'); }} className="text-blue-200 hover:text-white transition-colors">
                  Charte éthique
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
                <span className="text-blue-200">Grand Est, France</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-amber-400 flex-shrink-0" />
                <a href="mailto:contact@altact.org" className="text-blue-200 hover:text-white transition-colors">
                  contact@altact.org
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-amber-400 flex-shrink-0" />
                <span className="text-blue-200">+33 (0)3 XX XX XX XX</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-blue-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-blue-300 text-sm">
              © {new Date().getFullYear()} ALT&ACT. Tous droits réservés.
            </div>
            <div className="flex items-center gap-6">
              <a href="/mentions-legales" onClick={(e) => { e.preventDefault(); navigate('/mentions-legales'); }} className="text-blue-300 hover:text-white text-sm transition-colors">
                Mentions légales
              </a>
              <a href="/confidentialite" onClick={(e) => { e.preventDefault(); navigate('/confidentialite'); }} className="text-blue-300 hover:text-white text-sm transition-colors">
                Politique de confidentialité
              </a>
              <button 
                onClick={scrollToTop}
                className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors"
                aria-label="Retour en haut"
              >
                <ArrowUp className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
