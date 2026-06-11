import React, { useEffect, useState } from 'react';
import { Shield, Lock, Database, Users, Globe, ArrowRight, Cpu, Layers, Settings } from 'lucide-react';
import { Button } from './ui/button';
import { useNavigate } from 'react-router-dom';
import Navigation from './Navigation';
import Footer from './Footer';

const ADMIN_PASSWORD = 'Choukette@777';
const STORAGE_KEY = 'reactif_logo_active';

const ReactifProPresentation = () => {
  const navigate = useNavigate();
  const [logoActive, setLogoActive] = useState(() => {
    try { return localStorage.getItem(STORAGE_KEY) === 'true'; } catch { return false; }
  });
  const [showAdminPopup, setShowAdminPopup] = useState(false);
  const [adminPassword, setAdminPassword] = useState('');
  const [adminError, setAdminError] = useState('');
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleAdminLogin = () => {
    if (adminPassword === ADMIN_PASSWORD) {
      setIsAdmin(true);
      setShowAdminPopup(false);
      setAdminPassword('');
      setAdminError('');
    } else {
      setAdminError('Mot de passe incorrect');
    }
  };

  const handleToggle = () => {
    const newState = !logoActive;
    setLogoActive(newState);
    try { localStorage.setItem(STORAGE_KEY, String(newState)); } catch {}
  };

  const logoImage = (
    <img
      src={process.env.PUBLIC_URL + '/logo-reactif-pro.png'}
      alt="RE'ACTIF PRO - Intelligence Professionnelle"
      className={`h-28 md:h-36 lg:h-44 w-auto mx-auto ${logoActive ? 'cursor-pointer hover:opacity-80 transition-opacity' : ''}`}
      data-testid="reactif-pro-logo"
    />
  );

  return (
    <div className="min-h-screen bg-gray-50" data-testid="reactif-pro-presentation-page">
      <Navigation />

      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-[#0b2a55] via-[#1a4280] to-[#0b2a55] overflow-hidden">
        <div className="absolute inset-0 opacity-[0.15]">
          <img src="https://images.unsplash.com/photo-1758873272000-d3763373f863?crop=entropy&cs=srgb&fm=jpg&w=1400" alt="" className="w-full h-full object-cover" />
        </div>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-400 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-amber-400 rounded-full blur-3xl"></div>
        </div>
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-500/20 rounded-full mb-6">
            <Cpu className="w-4 h-4 text-cyan-300" />
            <span className="text-cyan-300 text-sm font-semibold">RE'ACTIF PRO</span>
          </div>
          <h1 className="mb-6">
            {logoActive ? (
              <a href="https://reactif.pro" target="_blank" rel="noopener noreferrer" data-testid="reactif-logo-link">
                {logoImage}
              </a>
            ) : (
              logoImage
            )}
          </h1>

          {/* Admin toggle button */}
          {isAdmin ? (
            <div className="flex items-center justify-center gap-3 mb-4" data-testid="admin-toggle-panel">
              <span className="text-sm text-blue-200">Lien logo :</span>
              <button
                onClick={handleToggle}
                data-testid="toggle-logo-btn"
                className={`relative inline-flex h-8 w-16 items-center rounded-full transition-colors ${logoActive ? 'bg-green-500' : 'bg-gray-500'}`}
              >
                <span className={`inline-block h-6 w-6 transform rounded-full bg-white transition-transform ${logoActive ? 'translate-x-9' : 'translate-x-1'}`} />
              </button>
              <span className={`text-sm font-semibold ${logoActive ? 'text-green-300' : 'text-gray-400'}`}>
                {logoActive ? 'Activé' : 'Désactivé'}
              </span>
            </div>
          ) : (
            <button
              onClick={() => setShowAdminPopup(true)}
              data-testid="admin-access-btn"
              className="absolute top-4 right-4 p-2 bg-white/10 rounded-full text-white/70 hover:bg-white/20 hover:text-white transition-all"
              title="Administration"
            >
              <Settings className="w-5 h-5" />
            </button>
          )}

          {/* Admin password popup */}
          {showAdminPopup && (
            <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50" data-testid="admin-popup">
              <div className="bg-white rounded-2xl p-6 w-80 shadow-2xl">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Accès administrateur</h3>
                <input
                  type="password"
                  value={adminPassword}
                  onChange={(e) => { setAdminPassword(e.target.value); setAdminError(''); }}
                  onKeyDown={(e) => e.key === 'Enter' && handleAdminLogin()}
                  placeholder="Mot de passe"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg mb-2 text-gray-900 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  data-testid="admin-password-input"
                  autoFocus
                />
                {adminError && <p className="text-red-500 text-sm mb-2" data-testid="admin-error">{adminError}</p>}
                <div className="flex gap-2 mt-3">
                  <button
                    onClick={() => { setShowAdminPopup(false); setAdminPassword(''); setAdminError(''); }}
                    className="flex-1 px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors"
                    data-testid="admin-cancel-btn"
                  >
                    Annuler
                  </button>
                  <button
                    onClick={handleAdminLogin}
                    className="flex-1 px-4 py-2 bg-[#0b2a55] text-white rounded-lg hover:bg-[#1a4280] transition-colors"
                    data-testid="admin-submit-btn"
                  >
                    Valider
                  </button>
                </div>
              </div>
            </div>
          )}
          <p className="text-base md:text-lg text-blue-100 max-w-4xl mx-auto leading-relaxed">
            Un dispositif d'innovation sociale et numérique au service de l'intelligence professionnelle, pour répondre aux transformations profondes du monde du travail.
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-cyan-50 to-blue-50 rounded-3xl p-8 md:p-12 border-l-4 border-cyan-500 mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">RE'ACTIF PRO</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              RE'ACTIF PRO est un dispositif d'innovation sociale et numérique développé par l'association ALT&ACT afin de répondre aux transformations profondes du monde du travail.
            </p>
            <p className="text-gray-700 leading-relaxed mb-6">
              Aujourd'hui, les trajectoires professionnelles deviennent de plus en plus complexes : reconversions, mobilités professionnelles, évolution rapide des métiers et émergence de nouvelles compétences. Dans ce contexte, les outils traditionnels d'orientation et de reconnaissance des compétences montrent leurs limites, car ils reposent encore largement sur une logique centrée sur le diplôme ou l'intitulé de poste.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed font-semibold">
              RE'ACTIF PRO propose une approche différente.
            </p>
          </div>

          {/* Objectif principal */}
          <div className="mb-12">
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Le dispositif vise à <strong className="text-[#0b2a55]">révéler et valoriser les compétences réelles des personnes</strong> afin de leur permettre de construire des trajectoires professionnelles cohérentes et durables.
            </p>
          </div>

          {/* Principe fondamental */}
          <div className="bg-gradient-to-r from-[#0b2a55] to-[#1a4280] rounded-3xl p-8 md:p-12 text-white mb-12">
            <div className="flex items-center gap-3 mb-6">
              <Lock className="w-8 h-8 text-amber-400" />
              <h3 className="text-2xl font-bold">Principe fondamental</h3>
            </div>
            <p className="text-xl text-blue-100 leading-relaxed font-medium text-center">
              L'usager reste propriétaire de ses données et de son identité professionnelle.
            </p>
          </div>

          {/* Coffre-fort numérique */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <Database className="w-8 h-8 text-cyan-600" />
              <h3 className="text-2xl font-bold text-gray-900">Coffre-fort numérique des compétences</h3>
            </div>
            <p className="text-gray-700 leading-relaxed mb-6">
              Chaque utilisateur dispose d'un espace personnel sécurisé – un véritable coffre-fort numérique des compétences – dans lequel il peut conserver et gérer l'ensemble de ses informations professionnelles :
            </p>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 mb-6">
              {['Compétences', 'Expériences', 'Certifications', 'Formations', 'Projets professionnels'].map((item) => (
                <div key={item} className="flex items-center gap-3 bg-cyan-50 rounded-xl px-4 py-3 border border-cyan-100">
                  <Shield className="w-5 h-5 text-cyan-600 flex-shrink-0" />
                  <span className="font-medium text-gray-800">{item}</span>
                </div>
              ))}
            </div>
            <p className="text-gray-700 leading-relaxed">
              L'utilisateur décide lui-même des conditions d'accès à ses informations et peut choisir de partager tout ou partie de ses données avec les acteurs de son choix (entreprises, recruteurs, organismes de formation, partenaires sociaux).
            </p>
          </div>

          {/* Tiers de confiance */}
          <div className="bg-amber-50 rounded-3xl p-8 md:p-12 border border-amber-100 mb-12">
            <div className="flex items-center gap-3 mb-6">
              <Shield className="w-8 h-8 text-amber-600" />
              <h3 className="text-2xl font-bold text-gray-900">Tiers de confiance numérique</h3>
            </div>
            <p className="text-gray-700 leading-relaxed mb-4">
              RE'ACTIF PRO agit ainsi comme un <strong>tiers de confiance numérique</strong> permettant de sécuriser les données professionnelles tout en facilitant les transitions professionnelles.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Le dispositif ne se limite pas à une plateforme numérique : il constitue également un <strong>écosystème d'accompagnement et d'intelligence collective</strong>, visant à renforcer l'autonomie professionnelle des individus et à mieux comprendre les transformations du travail.
            </p>
          </div>

          {/* Vision */}
          <div className="bg-gradient-to-r from-cyan-50 to-blue-50 rounded-3xl p-8 md:p-12 border border-cyan-100 mb-12">
            <div className="flex items-center gap-3 mb-6">
              <Globe className="w-8 h-8 text-[#0b2a55]" />
              <h3 className="text-2xl font-bold text-gray-900">Ambition</h3>
            </div>
            <p className="text-lg text-gray-700 leading-relaxed">
              À terme, RE'ACTIF PRO ambitionne de contribuer à la construction d'une véritable <strong className="text-[#0b2a55]">infrastructure numérique d'intérêt général</strong> dédiée aux compétences et aux trajectoires professionnelles.
            </p>
          </div>

          {/* CTA */}
          <div className="text-center pt-4">
            <div className="inline-flex flex-col sm:flex-row gap-4">
              <Button onClick={() => navigate('/reactif-pro/mission')} className="bg-[#0b2a55] hover:bg-[#1a4280] text-white px-8 py-6 text-lg rounded-full" data-testid="cta-mission">
                Découvrir les missions
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button onClick={() => navigate('/reactif-pro/actions')} variant="outline" className="border-[#0b2a55] text-[#0b2a55] hover:bg-[#0b2a55] hover:text-white px-8 py-6 text-lg rounded-full" data-testid="cta-actions">
                Voir les actions
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ReactifProPresentation;
