import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, ShieldAlert, Check, HandHeart, Compass, User, Search, Building2, Briefcase, Network, Clock, ScrollText } from 'lucide-react';
import { Button } from './ui/button';
import Navigation from './Navigation';
import Footer from './Footer';

const publics = [
  { icon: User, label: 'Salariés', texte: 'Lorsque la situation au travail se tend, avant que la santé ou l\'emploi ne soient atteints.' },
  { icon: Search, label: "Demandeurs d'emploi", texte: 'Pour éviter que l\'éloignement de l\'activité ne s\'installe et ne referme les possibilités.' },
  { icon: Building2, label: 'Entreprises', texte: 'Pour repérer tôt les signaux faibles : absentéisme, inaptitudes, évolutions de métiers.' },
  { icon: Briefcase, label: 'Professionnels', texte: 'Pour partager des repères et des ressources face à des situations qui se complexifient.' },
  { icon: Network, label: "Structures d'accompagnement", texte: 'Pour relier les acteurs et éviter que les personnes ne circulent de guichet en guichet.' }
];

const faisons = ['Écouter', 'Informer', 'Accompagner', 'Orienter', 'Mettre en relation', 'Former', 'Expérimenter', 'Développer des outils'];
const neFaisonsPas = ['Professionnels médicaux', 'Professionnels psychologiques', 'Professionnels juridiques', 'Professionnels sociaux', 'Services publics compétents', "Dispositifs d'urgence"];

const PrevenirRuptures = () => {
  const navigate = useNavigate();
  const go = (path) => { navigate(path); window.scrollTo(0, 0); };

  return (
    <div className="min-h-screen bg-gray-50" data-testid="prevenir-ruptures-page">
      <Navigation />

      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <img src="https://images.unsplash.com/photo-1521791136064-7986c2920216?crop=entropy&cs=srgb&fm=jpg&q=85&w=1920&h=600&fit=crop" alt="Agir en amont, ensemble" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-[#0b2a55]/85"></div>
        </div>
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-500/20 rounded-full mb-6">
            <ShieldAlert className="w-4 h-4 text-amber-400" />
            <span className="text-amber-300 text-sm font-semibold">PRÉVENTION</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8 leading-tight">Prévenir les ruptures</h1>
          <p className="text-xl md:text-2xl text-blue-100 max-w-4xl mx-auto leading-relaxed">
            Une difficulté professionnelle ou sociale ne devient pas nécessairement une rupture lorsqu'elle peut être identifiée suffisamment tôt.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-5 gap-12 items-start">
          <div className="lg:col-span-2">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#0b2a55]/10 rounded-full mb-4">
              <Clock className="w-4 h-4 text-[#0b2a55]" />
              <span className="text-[#0b2a55] text-sm font-semibold">AGIR EN AMONT</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Le bon moment, c'est souvent avant</h2>
            <p className="text-gray-700 text-lg leading-relaxed mb-4">ALT&ACT développe des espaces d'écoute, d'information, d'orientation et de coopération permettant d'agir en amont lorsque cela est possible.</p>
            <p className="text-gray-700 text-lg leading-relaxed">Repérer tôt, comprendre la situation dans sa globalité, rendre visibles les possibilités existantes et relier les bons acteurs : c'est ainsi qu'une difficulté peut rester une étape plutôt que devenir une rupture.</p>
          </div>
          <div className="lg:col-span-3 grid sm:grid-cols-2 gap-4" data-testid="prevention-publics">
            {publics.map((p) => {
              const Icon = p.icon;
              return (
                <div key={p.label} className="bg-gray-50 border border-gray-100 rounded-2xl p-6 hover:shadow-lg transition-shadow">
                  <div className="w-11 h-11 bg-[#0b2a55] rounded-xl flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">{p.label}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{p.texte}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50" data-testid="limites-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Ce que nous faisons — et ce que nous ne faisons pas</h2>
            <p className="text-gray-600 text-lg">Être clair sur nos limites fait partie du respect que nous devons aux personnes.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-3xl p-8 border border-green-100 shadow-sm" data-testid="ce-que-nous-faisons">
              <h3 className="text-xl font-bold text-green-700 mb-6">ALT&ACT peut</h3>
              <ul className="grid grid-cols-2 gap-3">
                {faisons.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-gray-800">
                    <span className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0"><Check className="w-4 h-4 text-green-600" /></span>
                    {f}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white rounded-3xl p-8 border border-rose-100 shadow-sm" data-testid="ce-que-nous-ne-faisons-pas">
              <h3 className="text-xl font-bold text-rose-700 mb-3">Nous ne nous substituons pas aux professionnels — nous les mobilisons</h3>
              <p className="text-gray-700 text-sm leading-relaxed mb-6" data-testid="ne-substitue-intro">
                ALT&ACT ne remplace pas les professionnels compétents ni les services publics. En revanche, l'association peut faire intervenir, dans chacun de ces domaines, des professionnels qualifiés, sélectionnés avec rigueur sur la base de notre{' '}
                <a href="/charte-ethique" onClick={(e) => { e.preventDefault(); navigate('/charte-ethique'); window.scrollTo(0, 0); }} className="text-rose-700 font-semibold underline underline-offset-2 hover:text-rose-900" data-testid="charte-ethique-inline-link">charte de travail éthique</a>.
              </p>
              <ul className="space-y-3">
                {neFaisonsPas.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-gray-800">
                    <span className="w-6 h-6 rounded-full bg-rose-100 flex items-center justify-center flex-shrink-0"><HandHeart className="w-4 h-4 text-rose-600" /></span>
                    {f}
                  </li>
                ))}
              </ul>
              <p className="mt-6 text-xs text-gray-500 leading-relaxed" data-testid="ne-substitue-note">
                Les situations relevant de l'urgence ou d'une compétence réglementée sont systématiquement orientées vers l'interlocuteur habilité.
              </p>
              <button
                onClick={() => { navigate('/charte-ethique'); window.scrollTo(0, 0); }}
                className="mt-5 inline-flex items-center gap-2 px-4 py-2 rounded-full border border-rose-200 text-rose-700 text-sm font-semibold hover:bg-rose-50 transition-colors"
                data-testid="charte-ethique-btn"
              >
                <ScrollText className="w-4 h-4" />
                Consulter la Charte éthique et nos critères de sélection
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
          <div className="mt-8 bg-[#0b2a55] rounded-3xl p-8 md:p-10 text-white flex flex-col md:flex-row gap-6 items-start md:items-center" data-testid="orientation-bloc">
            <div className="w-14 h-14 bg-white/15 rounded-2xl flex items-center justify-center flex-shrink-0">
              <Compass className="w-7 h-7 text-amber-300" />
            </div>
            <div>
              <p className="text-sm uppercase tracking-wider text-blue-200 font-semibold mb-2">Lorsque leur intervention est nécessaire</p>
              <p className="text-lg md:text-xl leading-relaxed">« Notre rôle est d'aider à identifier l'interlocuteur adapté et, lorsque cela est pertinent, de faciliter l'orientation. »</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Une situation qui se tend ?</h2>
          <p className="text-gray-600 text-lg mb-8">Parlons-en tôt. Un échange confidentiel suffit souvent à y voir plus clair et à repérer les possibilités.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button onClick={() => go('/contact')} className="bg-[#0b2a55] hover:bg-[#1a4280] text-white rounded-xl px-8 py-6 text-lg" data-testid="prevention-contact-btn">
              J'ai besoin d'un appui <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button onClick={() => go('/agir-avec-vous')} variant="outline" className="border-2 border-[#0b2a55] text-[#0b2a55] hover:bg-[#0b2a55] hover:text-white rounded-xl px-8 py-6 text-lg" data-testid="prevention-jesuis-btn">
              Je suis…
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PrevenirRuptures;
