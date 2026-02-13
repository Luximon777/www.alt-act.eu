import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown, FileText, Quote, UserCircle, Heart, Building, User, Mail, UserPlus, Target, Eye, Zap, Users } from 'lucide-react';
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

  const scrollToSection = (e, href) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    
    const scrollToElement = () => {
      const element = document.querySelector(href);
      if (element) {
        const offset = 80;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - offset;
        window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
      }
    };

    // Check if we're on the homepage
    const isHomePage = window.location.hash === '' || window.location.hash === '#/' || window.location.hash === '#';
    
    if (isHomePage) {
      // Already on homepage, just scroll
      scrollToElement();
    } else {
      // Navigate to homepage first, then scroll
      navigate('/');
      // Wait for navigation and DOM update
      setTimeout(scrollToElement, 100);
    }
  };

  const goToPage = (e, path) => { 
    e.preventDefault(); 
    setIsMobileMenuOpen(false); 
    navigate(path); 
  };

  return (
    <React.Fragment>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/95 backdrop-blur-lg shadow-lg' : 'bg-transparent'}`} data-testid="navigation">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <a href="/" onClick={(e) => goToPage(e, '/')} className="flex items-center group" data-testid="logo-link">
              <img src="/logo.png" alt="Alt&Act" className="h-6 w-auto" />
            </a>
            <div className="hidden md:flex items-center space-x-6">
              {/* Dropdown Présentation */}
              <div className="relative group">
                <button className="text-orange-600 hover:text-orange-700 font-semibold text-base transition-colors duration-200 flex items-center gap-1 py-4" data-testid="presentation-dropdown">
                  Présentation
                  <ChevronDown className="w-4 h-4 transition-transform duration-200 group-hover:rotate-180" />
                </button>
                <div className="absolute top-full left-1/2 -translate-x-1/2 w-72 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform group-hover:translate-y-0 translate-y-2">
                  <div className="bg-white rounded-xl shadow-2xl border border-gray-100 overflow-hidden">
                    <div className="bg-gradient-to-r from-[#0b2a55] to-[#1a4280] px-4 py-3">
                      <p className="text-white text-sm font-medium">Découvrir ALT&ACT</p>
                    </div>
                    <div className="p-2">
                      <a href="/vision-methode" onClick={(e) => goToPage(e, '/vision-methode')} className="flex items-center gap-3 px-4 py-3 rounded-lg text-gray-700 hover:bg-[#0b2a55]/10 hover:text-[#0b2a55] transition-all duration-200 group/item" data-testid="vision-methode-link">
                        <div className="w-10 h-10 rounded-lg bg-[#0b2a55]/10 flex items-center justify-center group-hover/item:bg-[#0b2a55] transition-colors duration-200">
                          <FileText className="w-5 h-5 text-[#0b2a55] group-hover/item:text-white transition-colors duration-200" />
                        </div>
                        <div><p className="font-semibold">Vision et méthode</p><p className="text-xs text-gray-500">Notre approche</p></div>
                      </a>
                      <a href="/mot-president" onClick={(e) => goToPage(e, '/mot-president')} className="flex items-center gap-3 px-4 py-3 rounded-lg text-gray-700 hover:bg-[#0b2a55]/10 hover:text-[#0b2a55] transition-all duration-200 group/item" data-testid="mot-president-link">
                        <div className="w-10 h-10 rounded-lg bg-orange-100 flex items-center justify-center group-hover/item:bg-orange-500 transition-colors duration-200">
                          <Quote className="w-5 h-5 text-orange-600 group-hover/item:text-white transition-colors duration-200" />
                        </div>
                        <div><p className="font-semibold">Le mot du fondateur</p><p className="text-xs text-gray-500">Vision et engagement</p></div>
                      </a>
                      <a href="/membres" onClick={(e) => goToPage(e, '/membres')} className="flex items-center gap-3 px-4 py-3 rounded-lg text-gray-700 hover:bg-[#0b2a55]/10 hover:text-[#0b2a55] transition-all duration-200 group/item" data-testid="membres-link">
                        <div className="w-10 h-10 rounded-lg bg-teal-100 flex items-center justify-center group-hover/item:bg-teal-500 transition-colors duration-200">
                          <UserCircle className="w-5 h-5 text-teal-600 group-hover/item:text-white transition-colors duration-200" />
                        </div>
                        <div><p className="font-semibold">Nos membres</p><p className="text-xs text-gray-500">Équipe et structure</p></div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Dropdown Mission */}
              <div className="relative group">
                <button className="text-orange-600 hover:text-orange-700 font-semibold text-base transition-colors duration-200 flex items-center gap-1 py-4" data-testid="mission-dropdown">
                  Mission
                  <ChevronDown className="w-4 h-4 transition-transform duration-200 group-hover:rotate-180" />
                </button>
                <div className="absolute top-full left-1/2 -translate-x-1/2 w-72 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform group-hover:translate-y-0 translate-y-2">
                  <div className="bg-white rounded-xl shadow-2xl border border-gray-100 overflow-hidden">
                    <div className="bg-gradient-to-r from-amber-500 to-orange-500 px-4 py-3">
                      <p className="text-white text-sm font-medium">Notre raison d'être</p>
                    </div>
                    <div className="p-2">
                      <a href="/notre-mission" onClick={(e) => goToPage(e, '/notre-mission')} className="flex items-center gap-3 px-4 py-3 rounded-lg text-gray-700 hover:bg-amber-50 hover:text-amber-700 transition-all duration-200 group/item" data-testid="notre-mission-link">
                        <div className="w-10 h-10 rounded-lg bg-amber-100 flex items-center justify-center group-hover/item:bg-amber-500 transition-colors duration-200">
                          <Target className="w-5 h-5 text-amber-600 group-hover/item:text-white transition-colors duration-200" />
                        </div>
                        <div><p className="font-semibold">Notre mission</p><p className="text-xs text-gray-500">Révéler et structurer</p></div>
                      </a>
                      <a href="/notre-ambition" onClick={(e) => goToPage(e, '/notre-ambition')} className="flex items-center gap-3 px-4 py-3 rounded-lg text-gray-700 hover:bg-amber-50 hover:text-amber-700 transition-all duration-200 group/item" data-testid="notre-ambition-link">
                        <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center group-hover/item:bg-blue-500 transition-colors duration-200">
                          <Eye className="w-5 h-5 text-blue-600 group-hover/item:text-white transition-colors duration-200" />
                        </div>
                        <div><p className="font-semibold">Notre ambition</p><p className="text-xs text-gray-500">Le travail comme service</p></div>
                      </a>
                      <a href="/notre-action" onClick={(e) => goToPage(e, '/notre-action')} className="flex items-center gap-3 px-4 py-3 rounded-lg text-gray-700 hover:bg-amber-50 hover:text-amber-700 transition-all duration-200 group/item" data-testid="notre-action-link">
                        <div className="w-10 h-10 rounded-lg bg-green-100 flex items-center justify-center group-hover/item:bg-green-500 transition-colors duration-200">
                          <Zap className="w-5 h-5 text-green-600 group-hover/item:text-white transition-colors duration-200" />
                        </div>
                        <div><p className="font-semibold">Notre action</p><p className="text-xs text-gray-500">Accompagner les transformations</p></div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Dropdown Charte éthique */}
              <div className="relative group">
                <button className="text-orange-600 hover:text-orange-700 font-semibold text-base transition-colors duration-200 flex items-center gap-1 py-4" data-testid="charte-dropdown">
                  Charte éthique
                  <ChevronDown className="w-4 h-4 transition-transform duration-200 group-hover:rotate-180" />
                </button>
                <div className="absolute top-full left-1/2 -translate-x-1/2 w-72 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform group-hover:translate-y-0 translate-y-2">
                  <div className="bg-white rounded-xl shadow-2xl border border-gray-100 overflow-hidden">
                    <div className="bg-gradient-to-r from-rose-500 to-orange-500 px-4 py-3">
                      <p className="text-white text-sm font-medium">Nos engagements</p>
                    </div>
                    <div className="p-2">
                      <a href="/charte-ethique" onClick={(e) => goToPage(e, '/charte-ethique')} className="flex items-center gap-3 px-4 py-3 rounded-lg text-gray-700 hover:bg-rose-50 hover:text-rose-600 transition-all duration-200 group/item" data-testid="charte-ethique-link">
                        <div className="w-10 h-10 rounded-lg bg-rose-100 flex items-center justify-center group-hover/item:bg-rose-500 transition-colors duration-200">
                          <Heart className="w-5 h-5 text-rose-600 group-hover/item:text-white transition-colors duration-200" />
                        </div>
                        <div><p className="font-semibold">Charte éthique</p><p className="text-xs text-gray-500">10 principes fondateurs</p></div>
                      </a>
                      <a href="/gouvernance-consultative" onClick={(e) => goToPage(e, '/gouvernance-consultative')} className="flex items-center gap-3 px-4 py-3 rounded-lg text-gray-700 hover:bg-rose-50 hover:text-rose-600 transition-all duration-200 group/item" data-testid="gouvernance-link">
                        <div className="w-10 h-10 rounded-lg bg-indigo-100 flex items-center justify-center group-hover/item:bg-indigo-500 transition-colors duration-200">
                          <Users className="w-5 h-5 text-indigo-600 group-hover/item:text-white transition-colors duration-200" />
                        </div>
                        <div><p className="font-semibold">Gouvernance consultative</p><p className="text-xs text-gray-500">Notre mode de décision</p></div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Dropdown Contact */}
              <div className="relative group">
                <button className="text-orange-600 hover:text-orange-700 font-semibold text-base transition-colors duration-200 flex items-center gap-1 py-4" data-testid="contact-dropdown">
                  Contact
                  <ChevronDown className="w-4 h-4 transition-transform duration-200 group-hover:rotate-180" />
                </button>
                <div className="absolute top-full left-1/2 -translate-x-1/2 w-64 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform group-hover:translate-y-0 translate-y-2">
                  <div className="bg-white rounded-xl shadow-2xl border border-gray-100 overflow-hidden">
                    <div className="bg-gradient-to-r from-[#0b2a55] to-[#1a4280] px-4 py-3">
                      <p className="text-white text-sm font-medium">Nous rejoindre</p>
                    </div>
                    <div className="p-2">
                      <a href="#contact" onClick={(e) => scrollToSection(e, '#contact')} className="flex items-center gap-3 px-4 py-3 rounded-lg text-gray-700 hover:bg-[#0b2a55]/10 hover:text-[#0b2a55] transition-all duration-200 group/item" data-testid="contact-link">
                        <div className="w-10 h-10 rounded-lg bg-[#0b2a55]/10 flex items-center justify-center group-hover/item:bg-[#0b2a55] transition-colors duration-200">
                          <Mail className="w-5 h-5 text-[#0b2a55] group-hover/item:text-white transition-colors duration-200" />
                        </div>
                        <div><p className="font-semibold">Contact</p><p className="text-xs text-gray-500">Nous écrire</p></div>
                      </a>
                      <a href="#membre" onClick={(e) => scrollToSection(e, '#membre')} className="flex items-center gap-3 px-4 py-3 rounded-lg text-gray-700 hover:bg-[#0b2a55]/10 hover:text-[#0b2a55] transition-all duration-200 group/item" data-testid="devenir-membre-link">
                        <div className="w-10 h-10 rounded-lg bg-green-100 flex items-center justify-center group-hover/item:bg-green-500 transition-colors duration-200">
                          <UserPlus className="w-5 h-5 text-green-600 group-hover/item:text-white transition-colors duration-200" />
                        </div>
                        <div><p className="font-semibold">Devenir membre</p><p className="text-xs text-gray-500">Rejoindre ALT&ACT</p></div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <a href="/conseils-accompagnement" onClick={(e) => goToPage(e, '/conseils-accompagnement')} className="flex items-center gap-2 bg-teal-600 text-white px-4 py-2.5 rounded-full font-semibold text-sm transition-all duration-200 hover:bg-teal-700 hover:scale-105 shadow-lg hover:shadow-xl" data-testid="espace-employeurs-btn">
                <Building className="w-4 h-4" />
                Espace Employeurs
              </a>
              <a href="/espace-personnel" onClick={(e) => goToPage(e, '/espace-personnel')} className="flex items-center gap-2 bg-[#0b2a55] text-white px-4 py-2.5 rounded-full font-semibold text-sm transition-all duration-200 hover:bg-[#1a4280] hover:scale-105 shadow-lg hover:shadow-xl" data-testid="espace-personnel-btn">
                <User className="w-4 h-4" />
                Espace Personnel
              </a>
              <a href="/espace-ubuntoo" onClick={(e) => goToPage(e, '/espace-ubuntoo')} className="flex items-center gap-2 bg-[#0F4C5C] text-white px-4 py-2.5 rounded-full font-semibold text-sm transition-all duration-200 hover:bg-[#0A3844] hover:scale-105 shadow-lg hover:shadow-xl" data-testid="espace-ubuntoo-btn">
                <Users className="w-4 h-4" />
                Espace Ubuntoo
              </a>
            </div>
            <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200" aria-label="Toggle menu" data-testid="mobile-menu-toggle">
              {isMobileMenuOpen ? <X className="w-6 h-6 text-[#0b2a55]" /> : <Menu className="w-6 h-6 text-[#0b2a55]" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div className={`fixed inset-0 bg-black/50 z-40 md:hidden transition-opacity duration-300 ${isMobileMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`} onClick={() => setIsMobileMenuOpen(false)}>
        <div className={`fixed top-20 right-0 bottom-0 w-72 bg-white shadow-2xl transform transition-transform duration-300 overflow-y-auto ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`} onClick={(e) => e.stopPropagation()} data-testid="mobile-menu">
          <div className="flex flex-col p-6 space-y-2">
            <p className="text-xs text-gray-400 uppercase tracking-wider mb-2">Présentation</p>
            <a href="/vision-methode" onClick={(e) => goToPage(e, '/vision-methode')} className="flex items-center gap-3 p-3 rounded-lg text-gray-700 hover:bg-[#0b2a55]/10 transition-colors">
              <FileText className="w-5 h-5 text-[#0b2a55]" /><span className="font-medium">Vision et méthode</span>
            </a>
            <a href="/mot-president" onClick={(e) => goToPage(e, '/mot-president')} className="flex items-center gap-3 p-3 rounded-lg text-gray-700 hover:bg-[#0b2a55]/10 transition-colors">
              <Quote className="w-5 h-5 text-orange-600" /><span className="font-medium">Le mot du fondateur</span>
            </a>
            <a href="/membres" onClick={(e) => goToPage(e, '/membres')} className="flex items-center gap-3 p-3 rounded-lg text-gray-700 hover:bg-[#0b2a55]/10 transition-colors">
              <UserCircle className="w-5 h-5 text-teal-600" /><span className="font-medium">Nos membres</span>
            </a>
            
            <p className="text-xs text-gray-400 uppercase tracking-wider mt-4 mb-2">Mission</p>
            <a href="/notre-mission" onClick={(e) => goToPage(e, '/notre-mission')} className="flex items-center gap-3 p-3 rounded-lg text-gray-700 hover:bg-amber-50 transition-colors">
              <Target className="w-5 h-5 text-amber-600" /><span className="font-medium">Notre mission</span>
            </a>
            <a href="/notre-ambition" onClick={(e) => goToPage(e, '/notre-ambition')} className="flex items-center gap-3 p-3 rounded-lg text-gray-700 hover:bg-amber-50 transition-colors">
              <Eye className="w-5 h-5 text-blue-600" /><span className="font-medium">Notre ambition</span>
            </a>
            <a href="/notre-action" onClick={(e) => goToPage(e, '/notre-action')} className="flex items-center gap-3 p-3 rounded-lg text-gray-700 hover:bg-amber-50 transition-colors">
              <Zap className="w-5 h-5 text-green-600" /><span className="font-medium">Notre action</span>
            </a>
            
            <p className="text-xs text-gray-400 uppercase tracking-wider mt-4 mb-2">Charte éthique</p>
            <a href="/charte-ethique" onClick={(e) => goToPage(e, '/charte-ethique')} className="flex items-center gap-3 p-3 rounded-lg text-gray-700 hover:bg-rose-50 transition-colors">
              <Heart className="w-5 h-5 text-rose-600" /><span className="font-medium">Charte éthique</span>
            </a>
            <a href="/gouvernance-consultative" onClick={(e) => goToPage(e, '/gouvernance-consultative')} className="flex items-center gap-3 p-3 rounded-lg text-gray-700 hover:bg-rose-50 transition-colors">
              <Users className="w-5 h-5 text-indigo-600" /><span className="font-medium">Gouvernance consultative</span>
            </a>
            
            <p className="text-xs text-gray-400 uppercase tracking-wider mt-4 mb-2">Contact</p>
            <a href="#contact" onClick={(e) => scrollToSection(e, '#contact')} className="flex items-center gap-3 p-3 rounded-lg text-gray-700 hover:bg-[#0b2a55]/10 transition-colors">
              <Mail className="w-5 h-5 text-[#0b2a55]" /><span className="font-medium">Contact</span>
            </a>
            <a href="#membre" onClick={(e) => scrollToSection(e, '#membre')} className="flex items-center gap-3 p-3 rounded-lg text-gray-700 hover:bg-[#0b2a55]/10 transition-colors">
              <UserPlus className="w-5 h-5 text-green-600" /><span className="font-medium">Devenir membre</span>
            </a>
            
            <div className="border-t border-gray-100 my-3"></div>
            
            <a href="/conseils-accompagnement" onClick={(e) => goToPage(e, '/conseils-accompagnement')} className="flex items-center justify-center gap-2 bg-teal-600 text-white py-3 px-3 rounded-lg font-semibold hover:bg-teal-700 transition-colors">
              <Building className="w-5 h-5" />Espace Employeurs
            </a>
            <a href="/espace-personnel" onClick={(e) => goToPage(e, '/espace-personnel')} className="flex items-center justify-center gap-2 bg-[#0b2a55] text-white py-3 px-3 rounded-lg font-semibold hover:bg-[#1a4280] transition-colors">
              <User className="w-5 h-5" />Espace Personnel
            </a>
            <a href="/espace-ubuntoo" onClick={(e) => goToPage(e, '/espace-ubuntoo')} className="flex items-center justify-center gap-2 bg-[#0F4C5C] text-white py-3 px-3 rounded-lg font-semibold hover:bg-[#0A3844] transition-colors">
              <Users className="w-5 h-5" />Espace Ubuntoo
            </a>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Navigation;
