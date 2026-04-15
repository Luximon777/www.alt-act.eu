import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, ChevronDown, FileText, Quote, UserCircle, Heart, Building, User, Mail, UserPlus, Target, Eye, Zap, Users, Cpu, ShieldCheck, Globe } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLangOpen, setIsLangOpen] = useState(false);
  const langRef = useRef(null);
  const navigate = useNavigate();

  const languages = [
    { code: 'fr', label: 'Français', flag: '🇫🇷' },
    { code: 'en', label: 'English', flag: '🇬🇧' },
    { code: 'de', label: 'Deutsch', flag: '🇩🇪' },
    { code: 'es', label: 'Español', flag: '🇪🇸' },
    { code: 'it', label: 'Italiano', flag: '🇮🇹' },
    { code: 'pt', label: 'Português', flag: '🇵🇹' },
    { code: 'nl', label: 'Nederlands', flag: '🇳🇱' },
    { code: 'pl', label: 'Polski', flag: '🇵🇱' },
    { code: 'ro', label: 'Română', flag: '🇷🇴' },
    { code: 'el', label: 'Ελληνικά', flag: '🇬🇷' },
    { code: 'cs', label: 'Čeština', flag: '🇨🇿' },
    { code: 'hu', label: 'Magyar', flag: '🇭🇺' },
    { code: 'sv', label: 'Svenska', flag: '🇸🇪' },
    { code: 'da', label: 'Dansk', flag: '🇩🇰' },
    { code: 'fi', label: 'Suomi', flag: '🇫🇮' },
    { code: 'sk', label: 'Slovenčina', flag: '🇸🇰' },
    { code: 'sl', label: 'Slovenščina', flag: '🇸🇮' },
    { code: 'bg', label: 'Български', flag: '🇧🇬' },
    { code: 'hr', label: 'Hrvatski', flag: '🇭🇷' },
    { code: 'lt', label: 'Lietuvių', flag: '🇱🇹' },
    { code: 'lv', label: 'Latviešu', flag: '🇱🇻' },
    { code: 'et', label: 'Eesti', flag: '🇪🇪' },
    { code: 'mt', label: 'Malti', flag: '🇲🇹' },
    { code: 'ga', label: 'Gaeilge', flag: '🇮🇪' },
  ];

  const [currentLang, setCurrentLang] = useState(() => {
    return localStorage.getItem('altact_lang') || 'fr';
  });

  const changeLang = (langCode) => {
    setIsLangOpen(false);
    localStorage.setItem('altact_lang', langCode);
    setCurrentLang(langCode);

    const select = document.querySelector('.goog-te-combo');
    if (!select) {
      // Google Translate not loaded yet, use cookie + reload
      const domains = ['', window.location.hostname, '.' + window.location.hostname];
      domains.forEach(d => {
        const ds = d ? `; domain=${d}` : '';
        document.cookie = `googtrans=; path=/${ds}; expires=Thu, 01 Jan 1970 00:00:00 UTC`;
      });
      if (langCode !== 'fr') {
        domains.forEach(d => {
          const ds = d ? `; domain=${d}` : '';
          document.cookie = `googtrans=/fr/${langCode}; path=/${ds}`;
        });
      }
      window.location.reload();
      return;
    }

    if (langCode === 'fr') {
      // Restore to French
      select.value = 'fr';
      select.dispatchEvent(new Event('change'));
    } else {
      // Always reset to French first, then translate
      select.value = 'fr';
      select.dispatchEvent(new Event('change'));
      // Wait for reset to complete, then apply new language
      const applyLang = () => {
        const sel = document.querySelector('.goog-te-combo');
        if (sel) {
          sel.value = langCode;
          sel.dispatchEvent(new Event('change'));
        }
      };
      setTimeout(applyLang, 1000);
      setTimeout(applyLang, 2000);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (langRef.current && !langRef.current.contains(e.target)) setIsLangOpen(false);
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const goToPage = (e, path) => { 
    e.preventDefault(); 
    setIsMobileMenuOpen(false); 
    navigate(path);
    window.scrollTo(0, 0);
  };

  const goHome = (e) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    navigate('/');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <React.Fragment>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/95 backdrop-blur-lg shadow-lg' : 'bg-transparent'}`} data-testid="navigation">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-24">
            <a href="/" onClick={goHome} className="flex flex-col items-start group mt-[38px]" data-testid="logo-link" style={{width: '110px'}}>
              <img src={process.env.PUBLIC_URL + '/logo.png'} alt="Alt&Act" className="w-full h-auto" />
              <img src={process.env.PUBLIC_URL + '/logo-ia-act.png'} alt="AI Act" className="w-full h-auto mt-2 rounded-md" />
            </a>
            <div className="hidden lg:flex items-center space-x-5">
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

              {/* Dropdown Vos accès */}
              <div className="relative group">
                <button className="text-orange-600 hover:text-orange-700 font-semibold text-base transition-colors duration-200 flex items-center gap-1 py-4" data-testid="vos-acces-dropdown">
                  Vos accès
                  <ChevronDown className="w-4 h-4 transition-transform duration-200 group-hover:rotate-180" />
                </button>
                <div className="absolute top-full left-1/2 -translate-x-1/2 w-72 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform group-hover:translate-y-0 translate-y-2">
                  <div className="bg-white rounded-xl shadow-2xl border border-gray-100 overflow-hidden">
                    <div className="bg-gradient-to-r from-[#0b2a55] to-[#1a4280] px-4 py-3">
                      <p className="text-white text-sm font-medium">Vos espaces</p>
                    </div>
                    <div className="p-2">
                      <a href="/espace-personnel" onClick={(e) => goToPage(e, '/espace-personnel')} className="flex items-center gap-3 px-4 py-3 rounded-lg text-gray-700 hover:bg-[#0b2a55]/10 hover:text-[#0b2a55] transition-all duration-200 group/item" data-testid="espace-personnel-link">
                        <div className="w-10 h-10 rounded-lg bg-[#0b2a55]/10 flex items-center justify-center group-hover/item:bg-[#0b2a55] transition-colors duration-200">
                          <User className="w-5 h-5 text-[#0b2a55] group-hover/item:text-white transition-colors duration-200" />
                        </div>
                        <div><p className="font-semibold">Espace Personnel</p><p className="text-xs text-gray-500">Votre espace privé</p></div>
                      </a>
                      <a href="/conseils-accompagnement" onClick={(e) => goToPage(e, '/conseils-accompagnement')} className="flex items-center gap-3 px-4 py-3 rounded-lg text-gray-700 hover:bg-[#0b2a55]/10 hover:text-[#0b2a55] transition-all duration-200 group/item" data-testid="espace-employeurs-link">
                        <div className="w-10 h-10 rounded-lg bg-amber-100 flex items-center justify-center group-hover/item:bg-amber-500 transition-colors duration-200">
                          <Building className="w-5 h-5 text-amber-600 group-hover/item:text-white transition-colors duration-200" />
                        </div>
                        <div><p className="font-semibold">Espace Employeurs</p><p className="text-xs text-gray-500">Conseils et accompagnement</p></div>
                      </a>
                      <a href="/espace-ubuntoo" onClick={(e) => goToPage(e, '/espace-ubuntoo')} className="flex items-center gap-3 px-4 py-3 rounded-lg text-gray-700 hover:bg-[#0b2a55]/10 hover:text-[#0b2a55] transition-all duration-200 group/item" data-testid="espace-ubuntoo-link">
                        <div className="w-10 h-10 rounded-lg bg-teal-100 flex items-center justify-center group-hover/item:bg-teal-500 transition-colors duration-200">
                          <Users className="w-5 h-5 text-teal-600 group-hover/item:text-white transition-colors duration-200" />
                        </div>
                        <div><p className="font-semibold">Espace Ubuntoo</p><p className="text-xs text-gray-500">Communauté Ubuntu</p></div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Dropdown RE'ACTIF PRO */}
              <div className="relative group">
                <button className="text-orange-600 hover:text-orange-700 font-semibold text-base transition-colors duration-200 flex items-center gap-1 py-4" data-testid="reactif-pro-dropdown">
                  RE'ACTIF PRO
                  <ChevronDown className="w-4 h-4 transition-transform duration-200 group-hover:rotate-180" />
                </button>
                <div className="absolute top-full left-1/2 -translate-x-1/2 w-72 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform group-hover:translate-y-0 translate-y-2">
                  <div className="bg-white rounded-xl shadow-2xl border border-gray-100 overflow-hidden">
                    <div className="bg-gradient-to-r from-cyan-600 to-blue-600 px-4 py-3">
                      <p className="text-white text-sm font-medium">Dispositif d'innovation</p>
                    </div>
                    <div className="p-2">
                      <a href="/reactif-pro/presentation" onClick={(e) => goToPage(e, '/reactif-pro/presentation')} className="flex items-center gap-3 px-4 py-3 rounded-lg text-gray-700 hover:bg-cyan-50 hover:text-cyan-700 transition-all duration-200 group/item" data-testid="reactif-presentation-link">
                        <div className="w-10 h-10 rounded-lg bg-cyan-100 flex items-center justify-center group-hover/item:bg-cyan-500 transition-colors duration-200">
                          <Cpu className="w-5 h-5 text-cyan-600 group-hover/item:text-white transition-colors duration-200" />
                        </div>
                        <div><p className="font-semibold">Présentation</p><p className="text-xs text-gray-500">Le dispositif RE'ACTIF PRO</p></div>
                      </a>
                      <a href="/reactif-pro/mission" onClick={(e) => goToPage(e, '/reactif-pro/mission')} className="flex items-center gap-3 px-4 py-3 rounded-lg text-gray-700 hover:bg-cyan-50 hover:text-cyan-700 transition-all duration-200 group/item" data-testid="reactif-mission-link">
                        <div className="w-10 h-10 rounded-lg bg-amber-100 flex items-center justify-center group-hover/item:bg-amber-500 transition-colors duration-200">
                          <ShieldCheck className="w-5 h-5 text-amber-600 group-hover/item:text-white transition-colors duration-200" />
                        </div>
                        <div><p className="font-semibold">Missions</p><p className="text-xs text-gray-500">Les missions du dispositif</p></div>
                      </a>
                      <a href="/reactif-pro/actions" onClick={(e) => goToPage(e, '/reactif-pro/actions')} className="flex items-center gap-3 px-4 py-3 rounded-lg text-gray-700 hover:bg-cyan-50 hover:text-cyan-700 transition-all duration-200 group/item" data-testid="reactif-actions-link">
                        <div className="w-10 h-10 rounded-lg bg-green-100 flex items-center justify-center group-hover/item:bg-green-500 transition-colors duration-200">
                          <Zap className="w-5 h-5 text-green-600 group-hover/item:text-white transition-colors duration-200" />
                        </div>
                        <div><p className="font-semibold">Actions</p><p className="text-xs text-gray-500">Les actions déployées</p></div>
                      </a>
                      <a href="/reactif-pro/charte-ia" onClick={(e) => goToPage(e, '/reactif-pro/charte-ia')} className="flex items-center gap-3 px-4 py-3 rounded-lg text-gray-700 hover:bg-cyan-50 hover:text-cyan-700 transition-all duration-200 group/item" data-testid="reactif-charte-ia-link">
                        <div className="w-10 h-10 rounded-lg bg-rose-100 flex items-center justify-center group-hover/item:bg-rose-500 transition-colors duration-200">
                          <ShieldCheck className="w-5 h-5 text-rose-600 group-hover/item:text-white transition-colors duration-200" />
                        </div>
                        <div><p className="font-semibold">Charte éthique IA</p><p className="text-xs text-gray-500">IA conforme à l'AI Act</p></div>
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
                <div className="absolute top-full right-0 w-64 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform group-hover:translate-y-0 translate-y-2">
                  <div className="bg-white rounded-xl shadow-2xl border border-gray-100 overflow-hidden">
                    <div className="bg-gradient-to-r from-[#0b2a55] to-[#1a4280] px-4 py-3">
                      <p className="text-white text-sm font-medium">Nous rejoindre</p>
                    </div>
                    <div className="p-2">
                      <a href="/contact" onClick={(e) => goToPage(e, '/contact')} className="flex items-center gap-3 px-4 py-3 rounded-lg text-gray-700 hover:bg-[#0b2a55]/10 hover:text-[#0b2a55] transition-all duration-200 group/item" data-testid="contact-link">
                        <div className="w-10 h-10 rounded-lg bg-[#0b2a55]/10 flex items-center justify-center group-hover/item:bg-[#0b2a55] transition-colors duration-200">
                          <Mail className="w-5 h-5 text-[#0b2a55] group-hover/item:text-white transition-colors duration-200" />
                        </div>
                        <div><p className="font-semibold">Contact</p><p className="text-xs text-gray-500">Nous écrire</p></div>
                      </a>
                      <a href="/devenir-membre" onClick={(e) => goToPage(e, '/devenir-membre')} className="flex items-center gap-3 px-4 py-3 rounded-lg text-gray-700 hover:bg-[#0b2a55]/10 hover:text-[#0b2a55] transition-all duration-200 group/item" data-testid="devenir-membre-link">
                        <div className="w-10 h-10 rounded-lg bg-green-100 flex items-center justify-center group-hover/item:bg-green-500 transition-colors duration-200">
                          <UserPlus className="w-5 h-5 text-green-600 group-hover/item:text-white transition-colors duration-200" />
                        </div>
                        <div><p className="font-semibold">Devenir membre</p><p className="text-xs text-gray-500">Rejoindre ALT&ACT</p></div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Language Selector */}
              <div className="relative ml-4 notranslate" translate="no" ref={langRef}>
                <button 
                  onClick={() => setIsLangOpen(!isLangOpen)} 
                  className={`flex items-center gap-2 px-4 py-2 rounded-full border transition-all duration-200 ${isScrolled ? 'bg-[#0b2a55] border-[#0b2a55] hover:bg-[#1a4280]' : 'bg-white/20 backdrop-blur-sm border-white/30 hover:bg-white/30'}`}
                  data-testid="language-selector"
                >
                  <Globe className="w-4 h-4 text-white" />
                  <span className="text-sm font-semibold text-white uppercase">{currentLang}</span>
                  <ChevronDown className={`w-3.5 h-3.5 text-white transition-transform duration-200 ${isLangOpen ? 'rotate-180' : ''}`} />
                </button>
                {isLangOpen && (
                  <div className="absolute top-full right-0 mt-2 w-48 max-h-80 overflow-y-auto bg-white rounded-xl shadow-2xl border border-gray-100 z-50">
                    {languages.map((lang) => (
                      <button
                        key={lang.code}
                        onClick={() => changeLang(lang.code)}
                        className={`w-full flex items-center gap-3 px-4 py-3 text-sm hover:bg-[#0b2a55]/5 transition-colors ${currentLang === lang.code ? 'bg-[#0b2a55]/10 font-semibold text-[#0b2a55]' : 'text-gray-700'}`}
                        data-testid={`lang-${lang.code}`}
                      >
                        <span className="text-lg">{lang.flag}</span>
                        <span>{lang.label}</span>
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>
            <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200" aria-label="Toggle menu" data-testid="mobile-menu-toggle">
              {isMobileMenuOpen ? <X className="w-6 h-6 text-[#0b2a55]" /> : <Menu className="w-6 h-6 text-[#0b2a55]" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div className={`fixed inset-0 bg-black/50 z-40 lg:hidden transition-opacity duration-300 ${isMobileMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`} onClick={() => setIsMobileMenuOpen(false)}>
        <div className={`fixed top-24 right-0 bottom-0 w-80 bg-white shadow-2xl transform transition-transform duration-300 overflow-y-auto ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`} onClick={(e) => e.stopPropagation()} data-testid="mobile-menu">
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

            <p className="text-xs text-gray-400 uppercase tracking-wider mt-4 mb-2">RE'ACTIF PRO</p>
            <a href="/reactif-pro/presentation" onClick={(e) => goToPage(e, '/reactif-pro/presentation')} className="flex items-center gap-3 p-3 rounded-lg text-gray-700 hover:bg-cyan-50 transition-colors">
              <Cpu className="w-5 h-5 text-cyan-600" /><span className="font-medium">Présentation</span>
            </a>
            <a href="/reactif-pro/mission" onClick={(e) => goToPage(e, '/reactif-pro/mission')} className="flex items-center gap-3 p-3 rounded-lg text-gray-700 hover:bg-cyan-50 transition-colors">
              <ShieldCheck className="w-5 h-5 text-amber-600" /><span className="font-medium">Missions</span>
            </a>
            <a href="/reactif-pro/actions" onClick={(e) => goToPage(e, '/reactif-pro/actions')} className="flex items-center gap-3 p-3 rounded-lg text-gray-700 hover:bg-cyan-50 transition-colors">
              <Zap className="w-5 h-5 text-green-600" /><span className="font-medium">Actions</span>
            </a>
            <a href="/reactif-pro/charte-ia" onClick={(e) => goToPage(e, '/reactif-pro/charte-ia')} className="flex items-center gap-3 p-3 rounded-lg text-gray-700 hover:bg-cyan-50 transition-colors">
              <ShieldCheck className="w-5 h-5 text-rose-600" /><span className="font-medium">Charte éthique IA</span>
            </a>
            
            <p className="text-xs text-gray-400 uppercase tracking-wider mt-4 mb-2">Contact</p>
            <a href="/contact" onClick={(e) => goToPage(e, '/contact')} className="flex items-center gap-3 p-3 rounded-lg text-gray-700 hover:bg-[#0b2a55]/10 transition-colors">
              <Mail className="w-5 h-5 text-[#0b2a55]" /><span className="font-medium">Contact</span>
            </a>
            <a href="/devenir-membre" onClick={(e) => goToPage(e, '/devenir-membre')} className="flex items-center gap-3 p-3 rounded-lg text-gray-700 hover:bg-[#0b2a55]/10 transition-colors">
              <UserPlus className="w-5 h-5 text-green-600" /><span className="font-medium">Devenir membre</span>
            </a>
            
            <div className="border-t border-gray-100 my-3"></div>
            
            <p className="text-xs text-gray-400 uppercase tracking-wider mb-2">Vos accès</p>
            <a href="/espace-personnel" onClick={(e) => goToPage(e, '/espace-personnel')} className="flex items-center gap-3 p-3 rounded-lg text-gray-700 hover:bg-[#0b2a55]/10 transition-colors">
              <User className="w-5 h-5 text-[#0b2a55]" /><span className="font-medium">Espace Personnel</span>
            </a>
            <a href="/conseils-accompagnement" onClick={(e) => goToPage(e, '/conseils-accompagnement')} className="flex items-center gap-3 p-3 rounded-lg text-gray-700 hover:bg-[#0b2a55]/10 transition-colors">
              <Building className="w-5 h-5 text-amber-600" /><span className="font-medium">Espace Employeurs</span>
            </a>
            <a href="/espace-ubuntoo" onClick={(e) => goToPage(e, '/espace-ubuntoo')} className="flex items-center gap-3 p-3 rounded-lg text-gray-700 hover:bg-[#0b2a55]/10 transition-colors">
              <Users className="w-5 h-5 text-teal-600" /><span className="font-medium">Espace Ubuntoo</span>
            </a>

            <div className="border-t border-gray-100 my-3"></div>
            
            <p className="text-xs text-gray-400 uppercase tracking-wider mb-2 notranslate" translate="no">Langue</p>
            <div className="flex flex-wrap gap-2 notranslate" translate="no">
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => changeLang(lang.code)}
                  className={`flex items-center gap-2 px-3 py-2 rounded-lg text-sm transition-colors ${currentLang === lang.code ? 'bg-[#0b2a55] text-white font-semibold' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
                  data-testid={`mobile-lang-${lang.code}`}
                >
                  <span>{lang.flag}</span>
                  <span>{lang.label}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Navigation;
