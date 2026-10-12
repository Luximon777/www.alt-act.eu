import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, ChevronDown, Globe } from 'lucide-react';
import { menu, iconColors } from '../data/menu';
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

  const renderItem = (item, hover) => {
    const Icon = item.icon;
    const [bg, text, hoverBg] = iconColors[item.color];
    return (
      <a key={item.path} href={item.path} onClick={(e) => goToPage(e, item.path)} className={`flex items-center gap-3 px-4 py-3 rounded-lg text-gray-700 ${hover} transition-all duration-200 group/item`} data-testid={item.testid}>
        <div className={`w-10 h-10 rounded-lg ${bg} ${hoverBg} flex items-center justify-center transition-colors duration-200 flex-shrink-0`}>
          <Icon className={`w-5 h-5 ${text} group-hover/item:text-white transition-colors duration-200`} />
        </div>
        <div><p className="font-semibold">{item.label}</p><p className="text-xs text-gray-500">{item.sub}</p></div>
      </a>
    );
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
              {menu.map((group) => (
                <div key={group.id} className="relative group">
                  <button className="text-orange-600 hover:text-orange-700 font-semibold text-base transition-colors duration-200 flex items-center gap-1 py-4" data-testid={`${group.id}-dropdown`}>
                    {group.label}
                    <ChevronDown className="w-4 h-4 transition-transform duration-200 group-hover:rotate-180" />
                  </button>
                  <div className={`absolute top-full ${group.align === 'right' ? 'right-0' : 'left-1/2 -translate-x-1/2'} w-80 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform group-hover:translate-y-0 translate-y-2`}>
                    <div className="bg-white rounded-xl shadow-2xl border border-gray-100 overflow-hidden">
                      <div className={`bg-gradient-to-r ${group.headerClass} px-4 py-3`}>
                        <p className="text-white text-sm font-medium">{group.header}</p>
                      </div>
                      <div className="p-2">
                        {group.items.map((item) => renderItem(item, group.hover))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}

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
            {menu.map((group, gi) => (
              <React.Fragment key={group.id}>
                <p className={`text-xs text-gray-400 uppercase tracking-wider mb-2 ${gi ? 'mt-4' : ''}`}>{group.label}</p>
                {group.items.map((item) => {
                  const Icon = item.icon;
                  const [, text] = iconColors[item.color];
                  return (
                    <a key={item.path} href={item.path} onClick={(e) => goToPage(e, item.path)} className="flex items-center gap-3 p-3 rounded-lg text-gray-700 hover:bg-[#0b2a55]/10 transition-colors" data-testid={`mobile-${item.testid}`}>
                      <Icon className={`w-5 h-5 ${text}`} /><span className="font-medium">{item.label}</span>
                    </a>
                  );
                })}
              </React.Fragment>
            ))}

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
