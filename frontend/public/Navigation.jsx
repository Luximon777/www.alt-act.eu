import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown, FileText, Quote, Users, UserCircle, Heart } from 'lucide-react';
import { Button } from './ui/button';
import { useNavigate } from 'react-router-dom';

function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Mission', href: '#mission' },
    { label: 'Actions', href: '#actions' },
    { label: 'Gouvernance', href: '#gouvernance' },
    { label: 'Impact', href: '#impact' },
    { label: 'Devenir membre', href: '#membre' }
  ];

  const scrollToSection = (e, href) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      setIsMobileMenuOpen(false);
    }
  };

  const goToMotPresident = (e) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    navigate('/mot-president');
  };

  const goToMembres = (e) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    navigate('/membres');
  };

  const goToCharteEthique = (e) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    navigate('/charte-ethique');
  };

  return (
    <React.Fragment>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/95 backdrop-blur-lg shadow-lg' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-36">
            <a href="#top" onClick={(e) => scrollToSection(e, '#top')} className="flex items-center group">
              <img src="https://customer-assets.emergentagent.com/job_institut-fusion/artifacts/n4nzcgj5_LOGOS%202.png" alt="Alt and Act" className="h-32 w-auto transform group-hover:scale-105 transition-transform duration-200" />
            </a>

            <div className="hidden md:flex items-center space-x-8">
              <div className="relative group">
                <a href="#presentation" onClick={(e) => scrollToSection(e, '#presentation')} className="text-orange-600 hover:text-orange-700 font-semibold text-base transition-colors duration-200 flex items-center gap-1 py-4">
                  Présentation
                  <ChevronDown className="w-4 h-4 transition-transform duration-200 group-hover:rotate-180" />
                </a>
                <div className="absolute top-full left-1/2 -translate-x-1/2 w-72 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform group-hover:translate-y-0 translate-y-2">
                  <div className="bg-white rounded-xl shadow-2xl border border-gray-100 overflow-hidden">
                    <div className="bg-gradient-to-r from-[#0b2a55] to-[#1a4280] px-4 py-3">
                      <p className="text-white text-sm font-medium">Découvrir ALT&amp;ACT</p>
                    </div>
                    <div className="p-2">
                      <a href="#presentation" onClick={(e) => scrollToSection(e, '#presentation')} className="flex items-center gap-3 px-4 py-3 rounded-lg text-gray-700 hover:bg-[#0b2a55]/10 hover:text-[#0b2a55] transition-all duration-200 group/item">
                        <div className="w-10 h-10 rounded-lg bg-[#0b2a55]/10 flex items-center justify-center group-hover/item:bg-[#0b2a55] transition-colors duration-200">
                          <FileText className="w-5 h-5 text-[#0b2a55] group-hover/item:text-white transition-colors duration-200" />
                        </div>
                        <div>
                          <p className="font-semibold">Vue d&apos;ensemble</p>
                          <p className="text-xs text-gray-500">Fiche institutionnelle</p>
                        </div>
                      </a>
                      <a href="/mot-president" onClick={goToMotPresident} className="flex items-center gap-3 px-4 py-3 rounded-lg text-gray-700 hover:bg-[#0b2a55]/10 hover:text-[#0b2a55] transition-all duration-200 group/item">
                        <div className="w-10 h-10 rounded-lg bg-orange-100 flex items-center justify-center group-hover/item:bg-orange-500 transition-colors duration-200">
                          <Quote className="w-5 h-5 text-orange-600 group-hover/item:text-white transition-colors duration-200" />
                        </div>
                        <div>
                          <p className="font-semibold">Le mot du Président</p>
                          <p className="text-xs text-gray-500">Vision et engagement</p>
                        </div>
                      </a>
                      <a href="/membres" onClick={goToMembres} className="flex items-center gap-3 px-4 py-3 rounded-lg text-gray-700 hover:bg-[#0b2a55]/10 hover:text-[#0b2a55] transition-all duration-200 group/item">
                        <div className="w-10 h-10 rounded-lg bg-teal-100 flex items-center justify-center group-hover/item:bg-teal-500 transition-colors duration-200">
                          <UserCircle className="w-5 h-5 text-teal-600 group-hover/item:text-white transition-colors duration-200" />
                        </div>
                        <div>
                          <p className="font-semibold">Nos membres</p>
                          <p className="text-xs text-gray-500">Gouvernance et équipe</p>
                        </div>
                      </a>
                      <a href="/charte-ethique" onClick={goToCharteEthique} className="flex items-center gap-3 px-4 py-3 rounded-lg text-gray-700 hover:bg-[#0b2a55]/10 hover:text-[#0b2a55] transition-all duration-200 group/item">
                        <div className="w-10 h-10 rounded-lg bg-rose-100 flex items-center justify-center group-hover/item:bg-rose-500 transition-colors duration-200">
                          <Heart className="w-5 h-5 text-rose-600 group-hover/item:text-white transition-colors duration-200" />
                        </div>
                        <div>
                          <p className="font-semibold">Charte éthique</p>
                          <p className="text-xs text-gray-500">Nos engagements</p>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              {navLinks.map((link) => (
                <a key={link.href} href={link.href} onClick={(e) => scrollToSection(e, link.href)} className="text-orange-600 hover:text-orange-700 font-semibold text-base transition-colors duration-200 relative group">
                  {link.label}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-orange-600 group-hover:w-full transition-all duration-300"></span>
                </a>
              ))}
              
              {/* Bouton Espace Ubuntoo */}
              <a 
                href="https://dialogshare.preview.emergentagent.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center gap-2 bg-[#0F4C5C] text-white px-5 py-2.5 rounded-full font-semibold text-base transition-all duration-200 hover:bg-[#0A3844] hover:scale-105 shadow-lg hover:shadow-xl"
              >
                <Users className="w-4 h-4" />
                Espace Ubuntoo
              </a>
              
              <Button onClick={(e) => scrollToSection(e, '#contact')} className="bg-[#0b2a55] hover:bg-[#1a4280] text-white transition-all duration-200 transform hover:scale-105 font-semibold">
                Contact
              </Button>
            </div>

            <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200" aria-label="Toggle menu">
              {isMobileMenuOpen ? <X className="w-6 h-6 text-[#0b2a55]" /> : <Menu className="w-6 h-6 text-[#0b2a55]" />}
            </button>
          </div>
        </div>
      </nav>

      <div className={`fixed inset-0 bg-black/50 z-40 md:hidden transition-opacity duration-300 ${isMobileMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`} onClick={() => setIsMobileMenuOpen(false)}>
        <div className={`fixed top-36 right-0 bottom-0 w-72 bg-white shadow-2xl transform transition-transform duration-300 ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`} onClick={(e) => e.stopPropagation()}>
          <div className="flex flex-col p-6 space-y-2">
            <p className="text-xs text-gray-400 uppercase tracking-wider mb-2">Présentation</p>
            <a href="#presentation" onClick={(e) => scrollToSection(e, '#presentation')} className="flex items-center gap-3 p-3 rounded-lg text-gray-700 hover:bg-[#0b2a55]/10 transition-colors">
              <FileText className="w-5 h-5 text-[#0b2a55]" />
              <span className="font-medium">Vue d&apos;ensemble</span>
            </a>
            <a href="/mot-president" onClick={goToMotPresident} className="flex items-center gap-3 p-3 rounded-lg text-gray-700 hover:bg-[#0b2a55]/10 transition-colors">
              <Quote className="w-5 h-5 text-orange-600" />
              <span className="font-medium">Le mot du Président</span>
            </a>
            <a href="/membres" onClick={goToMembres} className="flex items-center gap-3 p-3 rounded-lg text-gray-700 hover:bg-[#0b2a55]/10 transition-colors">
              <UserCircle className="w-5 h-5 text-teal-600" />
              <span className="font-medium">Nos membres</span>
            </a>
            <a href="/charte-ethique" onClick={goToCharteEthique} className="flex items-center gap-3 p-3 rounded-lg text-gray-700 hover:bg-[#0b2a55]/10 transition-colors">
              <Heart className="w-5 h-5 text-rose-600" />
              <span className="font-medium">Charte éthique</span>
            </a>
            <div className="border-t border-gray-100 my-3"></div>
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} onClick={(e) => scrollToSection(e, link.href)} className="text-orange-600 hover:text-orange-700 font-semibold text-base py-3 px-3 rounded-lg hover:bg-orange-50 transition-colors">
                {link.label}
              </a>
            ))}
            
            {/* Bouton Espace Ubuntoo - Mobile */}
            <a 
              href="https://dialogshare.preview.emergentagent.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center justify-center gap-2 bg-[#0F4C5C] text-white py-3 px-3 rounded-lg font-semibold hover:bg-[#0A3844] transition-colors"
            >
              <Users className="w-5 h-5" />
              Espace Ubuntoo
            </a>
            
            <div className="pt-4">
              <Button onClick={(e) => scrollToSection(e, '#contact')} className="bg-[#0b2a55] hover:bg-[#1a4280] text-white w-full font-semibold">
                Contact
              </Button>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Navigation;
